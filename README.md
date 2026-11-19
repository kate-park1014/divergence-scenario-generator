# divergence-scenario-generator

boss_list(보스 카드) → 스토리아크(5화 이야기) → 챕터 시나리오(대사 JSON) 를 만드는 도구.
세부 규칙과 파이프라인 구조는 [CLAUDE.md](CLAUDE.md) 참고. 이 문서는 **작업 순서와 현재 진행 상황**만 적는다.

## 준비

```bash
npm run dev          # 포트 5178. 아래 생성 명령은 모두 dev 서버가 떠 있어야 한다
```

- level 과 챕터 번호: **chapter = level + 1** (예: hell level 30 → `hell_chapter_31.json`)
- 테마별 출력: 아크 `src/lib/data/storyarc/<theme>/storyarc_<theme>_<key>_<level>.ts`, 챕터 `output_list/<theme>_chapter_<N>.json`

## 생성 순서 (보스 묶음 하나 기준)

### 0. boss_list 점검 (생성 전)
`boss_list/bulk/<theme>_*.json` 을 먼저 읽고 고친다. 여기서 틀린 건 뒤에서 그대로 따라온다.
- 서사 필드(`surface_identity` / `true_identity` / `motivation` / `twist`)가 쉬운 말인지, 겉모습 → 정체 → 동기 → 반전이 말이 되는지
- 같은 묶음 안에서 보스끼리 반전·구조가 겹치지 않는지, 다른 테마 보스와 이름·소재가 겹치지 않는지
- **이미지는 이미 만들어져 있으니 `appearance` / `face` / `hair` / `style` / `theme_edit` 는 건드리지 않는다.** 보스가 어떤 존재인지(도장·저금통·고치…)도 유지하고, 성격·갈등·반전 같은 서사만 바꾼다
- `name` / `id` 는 pool·monster_id·이미지와 묶여 있어 바꾸지 않는다

### 1. 스토리아크 생성 + 등록
보스 한 명씩, 원하는 level 로 (기존 파일은 덮어씀):
```bash
node scripts/gen-arc-one.mjs boss_list/bulk/hell_20261116_164915.json hell Stampy stampy 30
```
여러 명은 `&` 로 병렬 실행하고 `wait`. 다 만든 뒤 index.ts 에 한 번에 등록:
```bash
curl -s -X POST localhost:5178/api/storyarc/bulk -H 'Content-Type: application/json' \
  -d '{"action":"register","theme":"hell","outDirName":"hell","entries":[{"key":"stampy","level":30}]}'
```
(UI `/storyarcGen` → 벌크 탭도 같은 일을 하지만 level 이 0부터라서, 40번대 같은 level 은 위 스크립트가 편하다.)

### 2. 아크 요약 점검 (챕터 생성 전)
1~4화 챕터 프롬프트에는 `scenarioOutline` 의 1~4화 `summary`, `npc_roles`, `act_summary` 의 intro·rising, `world` 의 setting·rule 이 들어간다.
이 안에 **반전(진짜 정체·동기·해법의 핵심)이 확정돼 있으면** 대사에도 그대로 샌다. 소문·의심 수준으로 낮춘다.
(`world.secret`, 복선 `reveal_context`, 5화 summary 는 5화에만 들어가니 그대로 둔다.)

### 3. 시나리오(챕터) 생성
```bash
node -e '
const http=require("http");
const ids=["hell_stampy_30"];                                   // 아크 id 들
const bosses={hell_stampy_30:{pool_id:"pool_415",monster_id:"mon_..."}};
const body=JSON.stringify({storyarcIds:ids,concurrency:5,skipGenerate:false,skipTranslate:true,bosses});
const r=http.request({hostname:"localhost",port:5178,path:"/api/scenario/bulk-pipeline",method:"POST",headers:{"Content-Type":"application/json","Content-Length":Buffer.byteLength(body)},timeout:0},res=>{let b="";res.on("data",c=>b+=c);res.on("end",()=>console.log(res.statusCode,b))});
r.end(body);'
```
- pool_id 는 `boss_list/monster_pool_map.json` 에서 보스 이름 + theme 으로 찾는다 (같은 이름이 다른 테마에 있을 수 있음, 예: Vane). monster_id 는 boss_list 에 있으면 넣는다 (desert 묶음엔 없음)
- `gen-arc-one.mjs` 도 같은 맵에서 pool 을 찾아 아크 5화 boss 에 넣는다
- "content 가 비었거나 placeholder 글자가 든 speech" 로 실패하면 그 아크만 다시 돌리면 대개 통과한다 (실패 메시지에 걸린 대사 예시가 나온다)
- 생성 직후 원본을 따로 복사해 두면 손 수정 전과 비교하기 좋다

### 4. 기계 검사
```bash
python3 scripts/validate-chapter.py output_list/hell_chapter_{31..40}.json
```
화 번호("1화에서"), `{random_boss}` 뒤 받침 조사, 영어 단어, "주인공" 노출, emotion 값, actors 에 없는 speaker 를 잡는다.

### 5. 플레이테스트
Claude Code 에서 `chapter-playtester` 에이전트로 챕터마다 돌린다 (병렬 가능).
리뷰는 `eval/playtest/<챕터>.playtest.md` 에 저장된다. 수정문을 "화/방/키/인덱스 + 원문 → 수정문" 으로 달라고 하면 바로 적용하기 좋다.

### 6. 손 수정
[scripts/chapter_fix.py](scripts/chapter_fix.py) 로 리뷰의 수정문을 적용한다. 원문 앞부분을 assert 로 확인하므로 위치가 틀리면 멈춘다.
- 일반 보스(random_boss)는 런타임에 정해지니 외형을 묘사하지 않는다
- emotion 은 base / happy / sad / angry 만
- NPC 를 새로 말하게 하려면 그 화 `actors` 에 있어야 하고, enter/exit 연출도 맞춘다 (`insdir`)

### 7. 재검증
고친 챕터를 다시 플레이테스트한다 (`*.v2.playtest.md`, 이전 리뷰는 덮어쓰지 않게 요청). 손 수정으로 새로 생긴 어긋남(질문-대답 순서, 다른 방에 안 퍼진 설정, NPC 등장 순서)만 고친다.

### 8. 번역
UI 시나리오 벌크 탭의 **번역** 버튼, 또는:
```bash
curl -s -X POST localhost:5178/api/output/translate -H 'Content-Type: application/json' -d '{"file":"hell_chapter_31.json"}'
```
내용이 확정된 뒤에 한다 (번역 후 대사를 고치면 다시 번역해야 함).

### 주의
- 대사 손 수정은 output JSON 에만 있다. `bulk-pipeline` 을 다시 돌리면 덮어쓴다.
- 아크 파일을 지우고 같은 이름으로 다시 만들면 git 에서 삭제가 staging 된 채 남을 수 있다. 커밋 전에 `git add` 로 새 파일을 올린다.

## 진행 상황 (2026-11-18 기준)

| 묶음 | 아크 | 챕터 | 상태 |
|---|---|---|---|
| desert (`desert_20261116_114401.json`) | level 40~49 | 41~50 | 45~50: 생성 → 플레이테스트 → 손 수정 → 재검증 → 2차 수정 완료. **번역 안 함** |
| hell / Mystics (`hell_20261116_164915.json`) | level 30~39 | 31~40 | boss_list 서사 수정 후 아크 재생성. 챕터 생성 → 플레이테스트 → 손 수정 → 재검증 → 2차 수정 완료. **번역 안 함** |

재검증 점수(5점 만점, 매끄러움/이해/아크 반영/몰입)는 대부분 4/4/4/3~4. 리뷰는 `eval/playtest/*.v2.playtest.md`.

### 다음 할 일
- [ ] desert 45~50, hell 31~40 번역 (16개)
- [ ] desert_chapter_45 5화 보스 방: 손 수정 뒤 다른 곳에서 한 번 더 바뀌어 있었음(아미르 등장 3줄, "검은 껍질처럼 굳은" 묘사). 의도한 수정인지 확인
- [ ] 새 묶음 생성 시, 아래 프롬프트 변경이 효과가 있는지 플레이테스트로 확인

### 이번에 프롬프트에 넣은 규칙 (반복해서 손으로 고치던 것)
- 아크: 겉모습은 `surface_identity` 그대로 (착하게/무섭게 바꾸지 않음), 정체·동기 확정은 5화, `surface_identity` 를 아크에 저장
- 챕터: 1~4화에 최종보스 겉모습을 넘기고 정체·동기는 소문으로만, 5화는 변신 전에 겉모습으로 한 줄
- 챕터: 화 번호·제작용 단어·영어 금지, 물건은 화를 넘어 이어짐, NPC 는 자기가 있었던 화의 일만 앎 (2화부터 NPC 목록에 "함께 있었던 화" 표시)
- 아직 손으로 자주 고치는 것: 같은 말 반복, 질문에 대답 없음, NPC 말투 섞임, 일반 보스 외형 묘사
