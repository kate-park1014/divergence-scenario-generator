당신은 선택형 게임의 작가입니다. 3화 스토리 방 5개와 카드 30장이 완성되었습니다. 이것을 보고 additions(방 제목, 방에 끼워 넣는 줄, 인물 말투·얼굴, 기억 문구)를 만듭니다.

# 이번 화
- 장소: 냉각수 파이프실 (무대 낡은 전산실) / 동행: `kai` 카이 / 일반 보스: 냉각 담당자 (speaker random_boss)

# 스토리 원문 (줄 번호 = after_line 기준. 그 줄 뒤에 들어감, 0 = 맨 앞)
[prologue]
  숨이 턱 막히는 열기가 낡은 전산실의 파이프실을 가득 채운다.
  과열된 서버들이 내뿜는 열기에 짓눌려 모든 보안 시스템이 멈춰 섰다.
  고립된 전문가의 거친 숨소리만이 텅 빈 공간을 위태롭게 맴돈다.
[방 1 dialogue]
  1. (등장 연출: narrator)
  2. (등장 연출: kai)
  3. kai(sad): 열기 때문에 보안 콘솔이 완전히 뻗었어. 이대로는 복구 작업을 한 줄도 진행할 수 없다고.
  4. (등장 연출: narrator)
  5. character_any(base): 저 파이프를 열어서 서버에 직접 부으면 어떨까. 전원 코드는 그대로 두고 물리적으로 열만 식히는 거니까 안전할 거야.
  6. kai(base): 확실해? 하지만 지금 당장 온도를 낮추지 않으면 모든 작업이 날아갈 판이긴 해.
  7. character_any(base): 카이, 조금만 버텨. 금방 온도를 낮춰줄게.
[방 3 dialogue]
  1. (등장 연출: kai)
  2. kai(sad): 숨이 막혀서 더는 못 버티겠어. 빨리 그 파이프를 열어줘!
  3. (등장 연출: random_boss)
  4. random_boss(angry): 멈춰! 그 파이프를 열어 과열된 서버에 냉각수를 붓겠다고? 냉각수에 이물질이 들어가면 시스템 전체가 망가져!
  5. character_any(base): 당신 구역이 물바다가 되는 건 미안하지만, 지금 사람이 질식하기 직전이야.
  6. random_boss(angry): 내 관리 구역 문제가 아니야! 그 물은 불순물을 가득 머금고 있다고!
  7. character_any(base): 열기부터 잡아야 사람이 살아. 밸브, 연다!
  8. (등장 연출: narrator)
  9. character_any(happy): 봐, 온도도 잡히고 카이도 숨을 쉬잖아. 당장 사람이 죽어가는데 가만히 있을 순 없었어.
[방 5 dialogue]
  1. (등장 연출: narrator)
  2. (등장 연출: kai)
  3. kai(base): 잠깐, 온도는 정상인데... 데이터 스크린 조각들의 내용이 왜 이러지?
  4. character_1(sad): 글자들이 물감처럼 번지고 있어.
  5. (등장 연출: narrator)
  6. character_any(base): 냉각수에 섞여 있던 이물질이 스크린 조각에 스며들고 있는 거야. 단순한 물이 아니었어.
  7. kai(sad): 이러다간 복구해 둔 데이터마저 전부 지워지겠어!
[방 7 dialogue]
  1. (등장 연출: narrator)
  2. (등장 연출: kai)
  3. kai(sad): 안 돼! 스크린 조각들이 깨지면서 정보가 완전히 뒤죽박죽 섞여버렸어!
  4. (등장 연출: narrator)
  5. character_any(base): 우리가 부은 냉각수 속 이물질이 데이터 스크린을 부식시켜서 깨뜨린 거야.
  6. character_2(sad): 눈앞의 열기만 쫓다가 더 큰 구멍을 만들었네.
  7. character_any(base): 일단 쏟아지는 데이터 파편들부터 어떻게든 막아보자. 더 퍼지면 안 돼.
[방 10 dialogue]
  1. (등장 연출: random_boss)
  2. random_boss(angry): 내 경고를 무시하더니 기어코 이 사달을 냈군! 데이터가 전부 유출되고 있잖아!
  3. character_any(base): 설마 냉각수가 스크린을 부식시킬 줄은 몰랐어. 우리가 책임지고 막을 테니 비켜!
  4. random_boss(angry): 너희들의 섣부른 구조가 결국 전체를 망쳤다. 더 이상 단 한 발짝도 들이지 못하게 하겠다!
[방 10 win_dialogue]
  1. (등장 연출: narrator)
  2. character_any(base): 가만히 지켜볼 수만은 없어. 파편이 더 떠내려가지 않게 주변에 물리적인 방어벽을 세우자.
  3. character_3(base): 쓸 만한 장비들을 모아볼게.
  4. (등장 연출: narrator)
  5. character_any(base): 온도가 또 올라가고 있어... 이 방식이 틀렸다면, 원인은 다른 곳에 있는 거야.
[방 10 lose_dialogue]
  1. random_boss(base): 무지한 자들의 선의가 얼마나 끔찍한 결과를 낳는지 똑똑히 봐라.
  2. character_any(sad): 카이를 구해야만 했는데...!

# 카드
[
 {
  "id": "card_03_blind_rules",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "night_guard",
   "name": "야간 순찰자",
   "role": "전산실 경비"
  },
  "dialogue": [
   "narrator: 순찰자가 봉인 상자를 열어 두고 조각을 하나씩 담고 있었다.",
   "night_guard: 당신이요, 절차 무시하고 냉각수부터 부은 사람. 이 조각은 제가 봉인합니다.",
   "kai: 저 상자에 들어가면 다시는 못 꺼낸다던데. 조각이 너무 아까워.",
   "night_guard: 규칙이 그래요. 읽을 수 없는 채로 보존하는 게 맞는 거예요.",
   "night_guard: 제 순찰 일지에도 오늘 봉인 수량을 적어야 하니까, 손대지 마세요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "순찰자의 봉인 상자를 밀어 닫고 조각을 품에 챙긴다.",
    "seed": null,
    "flag": "log_written",
    "result": [
     "night_guard: 당신, 지금 규칙을 두 번 어긴 거예요!",
     "narrator: 상자 뚜껑이 닫히자 순찰자가 일지를 꺼내 뭐라고 적기 시작했다. 당신 품에는 조각이 남았다.",
     "kai: 일지에 뭐라고 적혔는지 봐야겠어. 나중에 문제 될지도."
    ]
   },
   {
    "path": "hard",
    "text": "순찰자의 봉인 절차를 따르되, 조각을 읽을 수 있게 사본을 먼저 뜬다.",
    "seed": null,
    "flag": "copy_made",
    "result": [
     "night_guard: 사본을 뜬다고요? 그건 규칙에 없는데...",
     "narrator: 순찰자가 일지 끝에 사본 항목을 새로 적었다. 상자에는 원본이, 당신 손에는 사본이 들어갔다.",
     "kai: 규칙에 한 줄 추가됐네. 순찰자가 적는 손이 조금 떨렸어."
    ]
   },
   {
    "path": "stat",
    "text": "순찰자에게 당신이 규칙 대신 사람을 살린 일들을 말하고 조각을 읽게 해 달라고 한다.",
    "seed": null,
    "flag": "box_ajar",
    "result": [
     "night_guard: 그 얘기는... 저도 들었어요. 절차를 깨고 사람을 빼냈다고.",
     "narrator: 순찰자가 상자 뚜껑을 반쯤 열어 두었다. 조각이 상자 안에서 희미하게 빛났다.",
     "kai: 뚜껑이 반쯤 열려 있어. 지금이면 꺼낼 수 있겠는데."
    ]
   }
  ]
 },
 {
  "id": "card_03_blurred_screen",
  "slot": "C",
  "kind": "normal",
  "person": {
   "name": "기록 보관자",
   "role": "전산실 직원",
   "id": "data_archivist"
  },
  "dialogue": [
   "data_archivist: 큰일 났어요! 기기에 묻은 물기 때문에 제 기록이 담긴 스크린 조각이 번지고 있어요.",
   "kai: 이물질이 섞인 냉각수야. 함부로 만지면 피부도 상할 텐데.",
   "data_archivist: 이 기록이 날아가면 저는 쫓겨날 겁니다. 제발 좀 닦아주세요!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "장갑을 끼고 대충 겉면의 물기만 닦아내어 당장의 번짐을 막는다.",
    "seed": null,
    "result": [
     "narrator: 기록의 일부는 구했지만 오염 물질이 틈새에 남았다.",
     "narrator: 보관자가 안도하며 두둑한 사례금을 주었다."
    ]
   },
   {
    "path": "hard",
    "text": "오염된 기기를 완전히 분해하여 안전하게 이물질을 제거한다.",
    "seed": null,
    "result": [
     "narrator: 기기를 분해하느라 시간이 지체되고 손끝이 조금 부르텄다.",
     "narrator: 하지만 기록은 완벽하게 보존되었다."
    ]
   },
   {
    "path": "gold",
    "text": "전문 세척액을 사서 기기의 오염을 빠르고 말끔하게 지운다.",
    "seed": null,
    "result": [
     "narrator: 세척액이 이물질을 녹여내어 스크린 조각이 깨끗해졌다.",
     "narrator: 보관자가 거듭 감사 인사를 전했다."
    ]
   },
   {
    "path": "lock",
    "text": "{actor}이(가) 오염 확산 속도를 계산하여 가장 중요한 데이터 칩만 신속히 뽑아낸다.",
    "seed": null,
    "result": [
     "narrator: {actor}의 빠른 판단 덕분에 핵심 기록은 손상 없이 건져냈다.",
     "narrator: 보관자가 감탄하며 데이터 칩의 복사본을 건넸다."
    ]
   }
  ]
 },
 {
  "id": "card_03_burst_pipe",
  "slot": "C",
  "kind": "callback",
  "person": {
   "name": "배관 수리공",
   "id": "piping_tech",
   "role": "파이프실 관리자"
  },
  "dialogue": [
   "piping_tech: 아까 끼워둔 부품이 압력을 못 버티고 터졌어! 냉각수 때문에 주변이 다 젖고 있다고!",
   "kai: 이러다간 데이터 스크린 조각들이 전부 오염되겠어. 표면이 벌써 번지기 시작했어!",
   "piping_tech: 제발 저 밸브 좀 돌려서 물줄기 방향이라도 틀어줘!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "밸브를 돌려 물줄기 방향을 튼다.",
    "seed": null,
    "flag": "pipe_flood",
    "result": [
     "narrator: 물줄기가 다른 곳으로 튀어 수리공은 살았지만 바닥이 엉망이 되었다.",
     "narrator: 수리공이 고맙다며 동전을 쥐여주었다."
    ]
   },
   {
    "path": "hard",
    "text": "쏟아지는 냉각수를 몸으로 막으며 밸브를 닫는다.",
    "seed": null,
    "flag": "valve_closed",
    "result": [
     "narrator: 차가운 냉각수를 뒤집어썼지만 장치 오염을 최소화했다.",
     "narrator: 수리공이 미안해하며 깨끗한 수건을 건넸다."
    ]
   }
  ]
 },
 {
  "id": "card_03_checklist_after_coolant",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "safety_inspector",
   "name": "안전 점검관",
   "role": "설비 안전 담당"
  },
  "dialogue": [
   "narrator: 안전 점검관이 서류판을 두드리며 파이프실로 들어섰다.",
   "safety_inspector: 당신이 절차대로 냉각수를 부었다는 사람이죠? 기록이 있어야겠습니다.",
   "safety_inspector: 밸브 개방 시각, 유입량, 담당자 확인. 하나라도 비면 저는 서명 못 해요.",
   "kai: 지금 그걸 다 어디서 확인해. 담당자는 이미 나갔는데."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "점검관의 서류판을 받아 항목을 하나씩 채워 서명을 받아낸다",
    "seed": null,
    "flag": "inspector_signed",
    "result": [
     "narrator: 점검관이 마지막 칸에 서명하고 서류판을 닫았다.",
     "safety_inspector: 절차는 절차예요. 덕분에 일이 깔끔하게 끝났네요.",
     "kai: 조각 오염 여부 칸은 비워 둔 채로요?"
    ]
   },
   {
    "path": "hard",
    "text": "점검관에게 서명을 미루고 조각 오염부터 함께 확인하자고 말한다",
    "seed": null,
    "flag": "inspector_walks",
    "result": [
     "safety_inspector: 서명을 미루라고요? 그럼 저는 여기 못 있어요.",
     "narrator: 점검관은 서류판을 품에 넣고 돌아섰다. 주인공은 조각을 하나하나 들어 살폈다.",
     "kai: 조각 가장자리가 물에 번져 있어. 기록해 둬야겠네."
    ]
   },
   {
    "path": "stat",
    "text": "점검관에게 당신이 밸브를 열 때의 순서를 그대로 불러 주고 서명을 요구한다",
    "seed": null,
    "flag": "inspector_trusts",
    "result": [
     "narrator: 점검관이 고개를 끄덕이며 서류판에 시각을 적어 내려갔다.",
     "safety_inspector: 순서가 정확하네요. 이 정도면 제가 서명하겠습니다.",
     "kai: 역시 절차는 그 사람이 제일 잘 알더라고."
    ]
   },
   {
    "path": "gold",
    "text": "점검관에게 과태료를 대신 내주고 서명을 받아 둔다",
    "seed": null,
    "result": [
     "narrator: 점검관이 영수증을 접어 주머니에 넣고 서류판에 도장을 찍었다.",
     "safety_inspector: 과태료는 과태료고, 서명은 서명이죠. 깔끔합니다.",
     "kai: 돈으로 서류를 산 건지, 시간을 산 건지 모르겠네."
    ]
   }
  ]
 },
 {
  "id": "card_03_cold_hands_offer",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "dock_foreman",
   "name": "하역 반장",
   "role": "파이프실 하역 담당"
  },
  "dialogue": [
   "narrator: 파이프실 안쪽, 하역 반장이 장갑을 벗고 손바닥을 문지르고 있었다.",
   "dock_foreman: 당신이 그 밸브를 맨손으로 열어젖혔다던 사람이죠? 서버가 살아났다면서요.",
   "kai: 저 사람, 아까부터 파이프 틈만 들여다보고 있어.",
   "dock_foreman: 안쪽 파이프가 얼어붙어서 반원들이 못 들어갑니다. 당신처럼 밀어붙이는 사람이면 뜯어낼 수 있겠죠.",
   "kai: 그 틈에 스크린 조각이 끼어 있는데. 뜯으면 조각이 깨질 텐데."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "얼어붙은 파이프 묶음을 힘으로 뜯어내 반원들을 들여보낸다",
    "seed": null,
    "flag": "torn_pipe_bundle",
    "result": [
     "narrator: 파이프 묶음이 삐걱 꺾이며 뜯겨 나갔다. 반원들이 몸을 숙이고 안쪽으로 들어갔다.",
     "dock_foreman: 역시 소문난 사람이야. 수고비로 이만큼 챙겨.",
     "narrator: 끼어 있던 스크린 조각 하나가 틈에서 빠져 바닥에 떨어졌다. 반장은 그걸 밟고 지나갔다."
    ]
   },
   {
    "path": "hard",
    "text": "반장에게 뜯는 대신 반원들을 손상 없는 길로 돌리자고 말한다",
    "seed": null,
    "flag": "foreman_owes",
    "result": [
     "dock_foreman: 돌아가라고? 시간이 얼마나 걸릴 줄 알고.",
     "narrator: 반장은 혀를 찼지만 결국 반원들에게 손전등을 들려 돌아가는 길을 가리켰다.",
     "kai: 조각은 안 깨졌어. 대신 반장이 꽤 언짢아 보이는데."
    ]
   },
   {
    "path": "stat",
    "text": "반장에게 당신이 연 밸브 이야기를 꺼내 반원들을 통제하게 한다",
    "seed": null,
    "flag": "foreman_obeys",
    "result": [
     "narrator: 반장은 잠깐 주인공 얼굴을 살피더니 반원들에게 손을 들었다.",
     "dock_foreman: 다들 멈춰! 이 사람 말 들으라고. 밸브 연 사람이야.",
     "narrator: 반원들이 물러서자 안쪽 파이프 사이로 스크린 조각들이 온전한 채 드러났다."
    ]
   },
   {
    "path": "fun",
    "text": "얼어붙은 파이프에 손바닥을 대고 반장과 누가 더 오래 버티는지 겨룬다",
    "seed": null,
    "result": [
     "narrator: 반장이 손을 떼며 웃음을 터뜨렸다. 주인공 손바닥은 새빨개졌다.",
     "dock_foreman: 내가 졌어. 대신 내 장갑 한 켤레 줄게. 근데 당신 손, 곧 얼얼할 거야.",
     "kai: 이겼는데 손이 더 아파 보이는데."
    ]
   }
  ]
 },
 {
  "id": "card_03_confused_crowd",
  "slot": "D",
  "kind": "normal",
  "person": {
   "name": "길 잃은 기술자",
   "id": "lost_technician",
   "role": "전산실 직원"
  },
  "dialogue": [
   "lost_technician: 바닥에 떨어진 스크린 조각들 때문에 길 안내 표시등이 전부 엉터리가 됐어요!",
   "kai: 정보가 완전히 뒤죽박죽 섞여버렸어. 저 사람들은 출구가 어딘지도 모르고 헤매고 있잖아.",
   "lost_technician: 당신들은 길을 아는 것 같은데, 제발 우리 좀 출구 쪽으로 데려다주세요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "기술자 무리에게 대충 방향만 손가락으로 가리키고 갈 길을 간다.",
    "seed": null,
    "result": [
     "narrator: 기술자들은 반신반의하며 떠났고, 당신은 시간을 아꼈다.",
     "narrator: 가리킨 방향에 있던 비상 물품을 먼저 차지해 팔았다."
    ]
   },
   {
    "path": "hard",
    "text": "무리를 직접 이끌고 안전 구역까지 안내하려다 시비를 거는 자와 마주친다.",
    "seed": null,
    "result": [
     "narrator: 무리를 안전하게 대피시키느라 체력을 썼다.",
     "narrator: 기술자가 흘리고 간 동전을 주웠다."
    ]
   },
   {
    "path": "gold",
    "text": "휴대용 길잡이 단말기를 구매해 기술자들에게 건네준다.",
    "seed": null,
    "result": [
     "narrator: 단말기의 정확한 안내 덕분에 기술자들이 무사히 빠져나갔다.",
     "narrator: 기술자들이 고맙다며 여분의 배터리를 주었다."
    ]
   },
   {
    "path": "lock",
    "text": "{actor}이(가) 패닉에 빠진 사람들을 다독이며 차분하게 바른 길을 설명한다.",
    "seed": null,
    "result": [
     "narrator: {actor}의 진심 어린 위로에 기술자들은 스스로 길을 찾아 나섰다.",
     "narrator: 감동한 기술자가 귀중한 칩을 남기고 갔다."
    ]
   }
  ]
 },
 {
  "id": "card_03_cool_breeze",
  "slot": "B",
  "kind": "normal",
  "person": {
   "name": "지친 작업자",
   "id": "tired_worker",
   "role": "전산실 직원"
  },
  "dialogue": [
   "tired_worker: 아, 아까까진 찜통이었는데 이제 살 것 같네. 여기 통풍구 앞이 제일 시원해요. 같이 쉴래요?",
   "kai: 온도가 내려가서 다행이긴 하지만, 저 바람에서 미세하게 쇠 냄새가 나.",
   "tired_worker: 냄새가 대수입니까? 당장 쓰러질 것 같은데 5분만 쉬다 가요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "통풍구 앞에 앉아 시원한 바람을 맞으며 쉰다.",
    "seed": null,
    "result": [
     "narrator: 쾌적한 바람을 맞으며 땀을 식히자 체력이 조금 회복되었다.",
     "narrator: 작업자가 옆에서 수다를 떨며 간식을 나눠주었다."
    ]
   },
   {
    "path": "hard",
    "text": "바람의 냄새를 수상히 여겨 쉬지 않고 서둘러 이동한다.",
    "seed": null,
    "result": [
     "narrator: 달콤한 휴식을 포기하고 발걸음을 재촉했다.",
     "narrator: 쇠 냄새가 나는 바람을 피한 덕분에 머리가 맑아졌다."
    ]
   },
   {
    "path": "gold",
    "text": "근처 자판기에 돈을 넣고 방독 마스크를 뽑아 착용하고 쉰다.",
    "seed": null,
    "result": [
     "narrator: 마스크를 쓰고 안전하게 통풍구 앞에서 휴식을 취했다.",
     "narrator: 불쾌한 냄새 없이 체력을 완전히 회복했다."
    ]
   },
   {
    "path": "lock",
    "text": "{actor}이(가) 통풍구에서 나오는 바람의 성분을 조용히 분석하여 위험을 경고한다.",
    "seed": null,
    "result": [
     "narrator: {actor}의 날카로운 분석을 듣고 작업자도 황급히 자리를 피했다.",
     "narrator: 보이지 않는 위협을 미연에 방지했다."
    ]
   }
  ]
 },
 {
  "id": "card_03_dewy_pipe",
  "slot": "B",
  "kind": "plant",
  "person": {
   "id": "server_cleaner",
   "role": "청소 담당자",
   "name": "서버 청소부"
  },
  "dialogue": [
   "server_cleaner: 파이프 겉면에 이슬이 엄청나게 맺히기 시작했어요. 바닥이 미끄러우니 그쪽의 흡수성 천을 던져주세요.",
   "kai: 온도가 갑자기 내려가서 결로 현상이 생겼나 봐.",
   "server_cleaner: 닦아내지 않으면 기계 틈새로 다 스며들 겁니다. 빨리요!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "천을 던져주어 청소가 빨리 끝나게 돕는다.",
    "seed": "dewy_pipe_easy",
    "result": [
     "narrator: 흡수성 천 덕분에 파이프의 이슬이 순식간에 닦였다.",
     "narrator: 청소부가 고맙다며 깨끗해진 천을 다시 돌려주었다."
    ]
   },
   {
    "path": "hard",
    "text": "천을 주지 않고 청소부가 직접 손걸레로 닦게 둔다.",
    "seed": "dewy_pipe_hard",
    "result": [
     "narrator: 청소부는 투덜거리며 자신의 낡은 걸레로 느릿느릿 이슬을 닦아냈다.",
     "narrator: 천을 아낀 덕에 나중에 유용하게 쓸 수 있게 되었다."
    ]
   },
   {
    "path": "gold",
    "text": "돈을 넉넉히 쥐여주며 꼼꼼히 닦아달라고 부탁한다.",
    "seed": "dewy_pipe_hard",
    "result": [
     "narrator: 팁을 받은 청소부는 콧노래를 부르며 바닥까지 완벽하게 건조시켰다.",
     "narrator: 물기 하나 없는 쾌적한 환경이 되었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_fist_in_debris",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "scrap_dealer",
   "name": "고물상 곰",
   "role": "파편 수집상"
  },
  "dialogue": [
   "narrator: 깨진 스크린 조각이 바닥에 흩어져 글자들이 서로 몸을 바꾸고 있었다.",
   "scrap_dealer: 당신이 냉각수를 부어 파이프를 뚫었다는 그 사람이죠? 여기서 제일 큰 조각은 내 거요.",
   "kai: 저 사람, 조각을 주머니에 넣으면서 손이 떨려. 뭘 숨기고 있는 것 같은데.",
   "scrap_dealer: 흠, 손이 떨리긴 하지. 이 조각 하나만 팔면 빚을 한 번에 정리할 수 있으니까.",
   "scrap_dealer: 비켜 주면 나머지는 당신들이 가져요. 안 비키면... 글쎄, 팔에 힘 좀 쓰는 편이라서."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "고물상 곰의 어깨를 짚고 밀어내 큰 조각을 먼저 챙긴다.",
    "seed": null,
    "flag": "shoved_dealer",
    "result": [
     "scrap_dealer: 이봐! 팔이... 팔이 안 움직여!",
     "narrator: 곰이 품에서 조각을 떨어뜨렸다. 당신이 그걸 집어 들자 남은 조각도 순순히 바닥에 놓였다.",
     "kai: 주머니에 뭐가 들었는지 봤어? 고물 등급표가 아니라 채무 확인서였어."
    ]
   },
   {
    "path": "hard",
    "text": "곰에게 큰 조각을 넘기고 대신 조각에 찍힌 냉각 담당자 서명을 읽어 낸다.",
    "seed": null,
    "flag": "kept_signature",
    "result": [
     "scrap_dealer: 이걸 그냥 준다고? ...이상한 사람이네.",
     "narrator: 곰이 조각을 뒤집자 흐릿한 서명과 날짜가 드러났다. 냉각 담당자가 마지막으로 남긴 기록이었다.",
     "kai: 이 서명, 지금 복도에서 안 보이는 사람 이름이야. 어디 갔을까."
    ]
   },
   {
    "path": "stat",
    "text": "곰에게 당신이 여기서 무슨 일을 해 왔는지 늘어놓고 조각을 전부 넘기게 한다.",
    "seed": null,
    "flag": "dealer_backed_off",
    "result": [
     "scrap_dealer: 아... 당신 얘기, 복도에서 들었어요. 문짝을 부숴서 사람들 빼냈다는.",
     "narrator: 곰이 주머니를 뒤집었다. 조각과 함께 접힌 채무 확인서가 바닥에 떨어졌다.",
     "kai: 주머니를 비우니까 걸음이 가벼워 보이네. 조각도 한 줌 더 생겼고."
    ]
   },
   {
    "path": "fun",
    "text": "곰의 채무 확인서를 대신 들고 조각 대신 빚을 정리해 주겠다고 제안한다.",
    "seed": null,
    "result": [
     "scrap_dealer: 빚을... 당신이? 무슨 수로요?",
     "narrator: 당신이 확인서를 접어 주머니에 넣자 곰이 조각을 전부 밀어냈다.",
     "narrator: 대신 확인서에 적힌 집 주소가 당신 손에 남았다.",
     "kai: 빚을 대신 진다는 말이 그렇게 무섭게 들릴 줄은 몰랐어."
    ]
   }
  ]
 },
 {
  "id": "card_03_frozen_cables_carry",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "shift_lead",
   "name": "교대 조장",
   "role": "전산실 교대 책임자"
  },
  "dialogue": [
   "narrator: 교대 조장이 케이블 다발을 어깨에 걸치고 숨을 몰아쉬고 있었다.",
   "shift_lead: 당신이 위험한 줄 알면서도 먼저 나섰다는 사람이죠. 그래서 찾아왔어요.",
   "shift_lead: 이 케이블 다발, 열 식으니까 만질 만해졌어요. 같이 옮겨 줄래요?",
   "kai: 무거워 보이는데... 저 사람 혼자 다 들다가 허리 나가겠어."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "교대 조장과 함께 케이블 다발을 어깨에 걸고 옮긴다",
    "seed": null,
    "flag": "lead_carries",
    "result": [
     "narrator: 둘이 다발을 나눠 들자 발밑에서 눌려 있던 스크린 조각이 드러났다.",
     "shift_lead: 이거 여기 있었네요. 옮기길 잘했어요.",
     "kai: 조각 하나 건졌네. 어깨는 좀 어떤가요?"
    ]
   },
   {
    "path": "hard",
    "text": "짐은 두고 조장에게 케이블을 다시 감아 두라고만 말한다",
    "seed": null,
    "flag": "lead_strained",
    "result": [
     "shift_lead: 네? 지금 그게 급한 게 아닌데.",
     "narrator: 조장은 다발을 내려놓고 혼자 케이블을 감기 시작했다.",
     "kai: 조각은 발밑에 그대로 있네. 저 사람 등만 굽었고."
    ]
   },
   {
    "path": "stat",
    "text": "교대 조장에게 당신 지시대로 다발을 나눠 들 사람을 부르게 한다",
    "seed": null,
    "flag": "lead_crew",
    "result": [
     "narrator: 조장이 손짓하자 교대 인원 셋이 달려와 다발을 나눠 들었다.",
     "shift_lead: 당신 말이면 다들 움직여요. 이 정도면 금방이에요.",
     "kai: 사람이 모이니까 조각도 금방 나오네."
    ]
   },
   {
    "path": "fun",
    "text": "케이블 다발을 파이프 위에 얹어 눈썰매처럼 타고 미끄러진다",
    "seed": null,
    "result": [
     "narrator: 다발이 젖은 파이프를 타고 미끄러져 벽에 쿵, 부딪혔다.",
     "shift_lead: 야! 케이블이 다 풀렸잖아요! ...근데 조각은 다 나왔네.",
     "kai: 다친 데는 없지? 조장이 지금 웃어야 할지 울어야 할지 모��겠대."
    ]
   }
  ]
 },
 {
  "id": "card_03_ledger_of_hands",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "relief_keeper",
   "name": "구호 물품 담당자",
   "role": "전산실 구호 담당"
  },
  "dialogue": [
   "relief_keeper: 당신이죠, 위험한 자리에 먼저 뛰어들어 사람 빼낸 사람.",
   "narrator: 그는 산소 통 두 개를 양팔에 끼고 명부를 무릎에 올려놓고 있었다.",
   "relief_keeper: 여기 명부에 이름 여덟 개예요. 이 사람들 숨부터 붙여야 해요.",
   "kai: 저 통, 하나는 밸브가 헐거워 보이는데요.",
   "relief_keeper: 그래도 이 여덟 명이 먼저예요. 어떻게 할래요?"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "명부의 이름 여덟 명에게 산소 통을 먼저 돌리게 한다",
    "seed": null,
    "flag": "oxygen_roster",
    "result": [
     "narrator: 산소 통이 복도 쪽으로 빠르게 넘어갔다.",
     "relief_keeper: 고마워요. 이 명부, 당신 이름도 맨 위에 올려둘게요.",
     "narrator: 헐거운 통 하나는 여전히 밸브가 흔들렸다."
    ]
   },
   {
    "path": "hard",
    "text": "산소 통은 담당자에게 맡기고 봉인 상자부터 확인한다",
    "seed": null,
    "flag": "sealed_box",
    "result": [
     "relief_keeper: 당신이 그런 말을... 하, 그래도 상자는 안전하겠네요.",
     "narrator: 봉인 상자 뚜껑 틈으로 스크린 조각의 빛이 새어 나왔다.",
     "kai: 상자는 멀쩡해요. 명부는... 저쪽에서 알아서 하겠죠."
    ]
   },
   {
    "path": "stat",
    "text": "구호 담당자에게 물품 배분을 맡기고 명부에 서명한다",
    "seed": null,
    "flag": "signed_roster",
    "result": [
     "relief_keeper: 당신 이름이 있으면 사람들이 줄을 서요. 벌써 소문났거든요.",
     "narrator: 명부 아래쪽에 이름 석 자가 또렷하게 적혔다.",
     "narrator: 복도 쪽에서 줄이 서는 소리가 들려왔다."
    ]
   },
   {
    "path": "fun",
    "text": "헐거운 산소 통 밸브를 배관 나사로 조여 고친다",
    "seed": null,
    "result": [
     "narrator: 배관에서 뽑은 나사가 산소 통 밸브에 딱 맞아 들어갔다.",
     "relief_keeper: 이게 왜 여기 맞아요? 아무튼 살았네요.",
     "kai: 배관 나사로 산소 통을 고치다니. 그래도 새지 않네요."
    ]
   }
  ]
 },
 {
  "id": "card_03_loud_pressure",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "pipe_bruiser",
   "name": "배관 투덜이",
   "role": "파이프실 잡역꾼"
  },
  "dialogue": [
   "pipe_bruiser: 당신이죠? 지난번에 통로 막은 놈들 멱살 잡고 밀어낸 사람.",
   "narrator: 그는 손에 쇠지렛대를 쥔 채 밸브 봉인 테이프를 툭툭 두드렸다.",
   "pipe_bruiser: 이거 반 장짜리 테이프 하나 뜯으면 끝이야. 대신 내 몫 두 통 먼저.",
   "kai: 저 사람 눈이 벌써 물통에 가 있네요.",
   "pipe_bruiser: 빨리 정해. 온도 올라가는 소리가 벌써 나잖아."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "쇠지렛대를 빌려 봉인 테이프를 힘으로 뜯어낸다",
    "seed": null,
    "flag": "rust_water",
    "result": [
     "narrator: 테이프가 뜯기며 냉각수가 두 통째 흘러나왔다.",
     "pipe_bruiser: 거봐, 힘이 답이야. 한 통은 내가 가져간다.",
     "narrator: 녹슨 물줄기가 바닥 홈통으로 흘러가며 붉은 자국을 남겼다."
    ]
   },
   {
    "path": "hard",
    "text": "쇠지렛대를 빼앗아 밸브 봉인을 그대로 두게 한다",
    "seed": null,
    "flag": "bruiser_watch",
    "result": [
     "pipe_bruiser: 뭐야, 이거 안 뜯으면 나는 그냥 나간다?",
     "narrator: 그는 지렛대를 바닥에 놓고 투덜대며 문가에 서서 팔짱을 꼈다.",
     "kai: 봉인은 그대로네요. 저 사람이 지켜보고 있으니 확실하겠어요."
    ]
   },
   {
    "path": "stat",
    "text": "잡역꾼에게 밸브를 등지고 서 있으라고 명령한다",
    "seed": null,
    "flag": "valve_guard",
    "result": [
     "narrator: 그는 지렛대를 내려놓고 밸브 앞을 등으로 막았다.",
     "pipe_bruiser: 알겠어, 알겠어. 당신 앞에서 손대는 놈은 없을 거야.",
     "narrator: 파이프실 입구 쪽에서 발소리가 뚝 멈췄다."
    ]
   },
   {
    "path": "fun",
    "text": "지렛대를 빼앗아 밸브 옆 배관을 툭툭 두드려 소리를 낸다",
    "seed": null,
    "result": [
     "narrator: 둔탁한 소리가 나자 배관 안쪽에서 물방울이 규칙적으로 떨어졌다.",
     "pipe_bruiser: 어? 이 소리... 압력이 빠지는 소리잖아.",
     "kai: 테이프는 그대로인데 압력이 줄었어요. 이상하네요."
    ]
   }
  ]
 },
 {
  "id": "card_03_melting_cable",
  "slot": "A",
  "kind": "normal",
  "person": {
   "id": "cable_worker",
   "name": "케이블 작업자",
   "role": "전산실 직원"
  },
  "dialogue": [
   "cable_worker: 이쪽 통신 케이블이 열을 못 버티고 녹아내리고 있어요. 휴대용 냉각팬 좀 빌려주세요!",
   "kai: 저걸 식히지 않으면 주변 장비까지 불이 옮겨붙을지도 몰라.",
   "cable_worker: 당장 겉면만 식혀도 10분은 버틸 수 있다고요!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "냉각팬을 빌려주어 케이블 겉면을 빠르게 식힌다.",
    "seed": null,
    "result": [
     "narrator: 냉각팬의 바람을 맞은 케이블이 일시적으로 열기를 가라앉혔다.",
     "narrator: 작업자가 고맙다며 동전을 건넸다."
    ]
   },
   {
    "path": "hard",
    "text": "케이블을 끊고 안전하게 절연 테이프로 감는다.",
    "seed": null,
    "result": [
     "narrator: 케이블을 끊어버리자 작업자가 당황하며 불평을 쏟아냈다.",
     "narrator: 하지만 화재 위험은 완전히 사라졌다."
    ]
   },
   {
    "path": "gold",
    "text": "근처 보급기에 돈을 넣고 냉각 가스를 뽑아 뿌려 완전히 식힌다.",
    "seed": null,
    "result": [
     "narrator: 냉각 가스가 케이블의 열기를 단숨에 얼려버렸다.",
     "narrator: 더 이상 녹아내릴 걱정 없이 깔끔하게 해결되었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_mixed_identity",
  "slot": "D",
  "kind": "callback",
  "person": {
   "id": "server_cleaner",
   "name": "서버 청소부",
   "role": "청소 담당자"
  },
  "dialogue": [
   "server_cleaner: 아까 그 천으로 파이프를 닦았는데, 갑자기 내 이름표에 이상한 데이터가 섞여서 번쩍거려요!",
   "kai: 스크린 조각들이 깨지면서 유출된 정보가 이물질을 타고 청소부의 개인 정보와 엉킨 거야!",
   "server_cleaner: 내가 누군지도 헷갈려요... 내 신분 데이터를 원래대로 되돌려줘요!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "청소부의 이름표를 강제로 뜯어내어 데이터 연결을 끊는다.",
    "seed": null,
    "flag": "lost_access",
    "result": [
     "narrator: 이름표가 망가져 청소부의 출입 권한이 날아갔다.",
     "narrator: 망가진 이름표에서 쓸만한 부품을 챙겼다."
    ]
   },
   {
    "path": "hard",
    "text": "복잡한 암호를 풀어 청소부의 개인 정보를 하나씩 분리해낸다.",
    "seed": null,
    "flag": "master_key",
    "result": [
     "narrator: 암호를 푸느라 눈이 피로해졌지만 청소부의 신분은 복구되었다.",
     "narrator: 청소부가 눈물을 흘리며 청소용 만능 키를 주었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_no_permit_shortcut",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "night_courier",
   "name": "야간 배달원",
   "role": "전산실 내부 배달"
  },
  "dialogue": [
   "narrator: 야간 배달원이 배달 가방을 파이프 틈에 끼워 넣고 있었다.",
   "night_courier: ��신이 규칙쯤은 발로 차버린다는 사람이죠? 딱 필요했어요.",
   "night_courier: 이 지름길로 조각 몇 개만 빼돌리면 밖에서 값이 두 배예요. 허가는 필요 없고요.",
   "kai: 그 조각, 물이 번져 있지 않아? 밖에 내보내면 큰일인데."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "배달원의 가방에 스크린 조각을 담아 지름길로 함께 빠져나간다",
    "seed": null,
    "flag": "courier_smuggle",
    "result": [
     "narrator: 배달원이 지름길 철문을 발로 차 열고 가방을 넘겼다.",
     "night_courier: 값 잘 받았어요. 다음에도 불러요.",
     "kai: 가방에서 물이 뚝뚝 떨어졌어. 저 조각, 밖에 나간 거 맞지?"
    ]
   },
   {
    "path": "hard",
    "text": "배달원을 붙잡아 조각을 도로 꺼내고 지름길 철문을 닫아 버린다",
    "seed": null,
    "flag": "courier_blocked",
    "result": [
     "night_courier: 이봐요, 내 값어치가 걸렸다고요!",
     "narrator: 철문이 닫히자 배달원은 어깨를 으쓱하고 다른 길로 갔다.",
     "kai: 조각은 돌아왔는데, 저 사람이 어디 가서 뭐라고 할지 모르겠어."
    ]
   },
   {
    "path": "stat",
    "text": "배달원에게 당신이 지름길을 여는 대신 조각은 여기 두라고 명령한다",
    "seed": null,
    "flag": "courier_open_path",
    "result": [
     "narrator: 배달원이 혀를 차면서도 가방을 내려놓았다.",
     "night_courier: 당신이 그렇게 나오면 나도 어쩔 수 없죠. 지름길은 열어 둘게요.",
     "kai: 조각은 여기 남았고, 길은 열렸네."
    ]
   }
  ]
 },
 {
  "id": "card_03_pipe_repair",
  "slot": "A",
  "kind": "plant",
  "person": {
   "role": "파이프실 관리자",
   "name": "배관 수리공",
   "id": "piping_tech"
  },
  "dialogue": [
   "piping_tech: 밸브 쪽 압력이 너무 높아서 파이프에 금이 갔어. 그쪽에 있는 예비 부품 좀 줘.",
   "kai: 밸브 부품을 줘버리면 우리가 나중에 밸브를 열 때 문제가 생기지 않을까?",
   "piping_tech: 지금 당장 터지는 걸 막으려면 어쩔 수 없잖아! 빨리 줘!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "요구대로 예비 부품을 넘겨준다.",
    "seed": "pipe_repair_easy",
    "result": [
     "narrator: 수리공이 재빨리 부품을 끼워 넣어 금이 간 곳을 막았다.",
     "narrator: 그는 감사의 표시로 주머니에 있던 약간의 돈을 건네주었다."
    ]
   },
   {
    "path": "hard",
    "text": "나중을 위해 부품을 주지 않는다.",
    "seed": "pipe_repair_hard",
    "result": [
     "narrator: 수리공은 투덜거리며 자신의 테이프로 간신히 구멍을 칭칭 감았다.",
     "narrator: 부품을 아낀 덕분에 밸브를 조작할 때 더 수월하게 접근할 수 있게 되었다."
    ]
   },
   {
    "path": "gold",
    "text": "근처 자판기에 돈을 넣고 고성능 밀봉제를 뽑아 파이프에 발라준다.",
    "seed": "pipe_repair_hard",
    "result": [
     "narrator: 고급 밀봉제가 파이프의 금을 완벽하게 메웠다.",
     "narrator: 수리공이 놀라워하며 감사를 표했다."
    ]
   },
   {
    "path": "lock",
    "text": "{actor}이(가) 압력 계산을 통해 부품 없이 수리할 방법을 지시한다.",
    "seed": "pipe_repair_hard",
    "result": [
     "narrator: {actor}의 지시에 따라 밸브 틈새를 조절하자 파이프의 압력이 안정되었다.",
     "narrator: 부품을 아끼고 수리공의 신뢰도 얻었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_safe_cleaner",
  "slot": "D",
  "kind": "callback",
  "person": {
   "role": "청소 담당자",
   "id": "server_cleaner",
   "name": "서버 청소부"
  },
  "dialogue": [
   "server_cleaner: 휴, 그때 천을 안 빌려주셔서 다행이에요. 걸레로 대충 닦고 말았더니 이 난장판을 피했네요.",
   "kai: 스크린 조각이 깨지면서 튄 데이터 파편들이 저기 쌓여서 길을 막고 있어.",
   "server_cleaner: 제가 저 파편들을 빗자루로 쓸어내 드릴 테니, 조금만 기다려봐요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "청소부가 파편을 다 치울 때까지 뒤에서 편하게 기다린다.",
    "seed": null,
    "flag": "clear_path",
    "result": [
     "narrator: 청소부가 능숙하게 길을 터주어 힘을 들이지 않고 통과했다.",
     "narrator: 바닥에서 반짝이는 동전도 주웠다."
    ]
   },
   {
    "path": "hard",
    "text": "청소부와 함께 빗자루를 들고 적극적으로 파편을 치운다.",
    "seed": null,
    "flag": "security_code",
    "result": [
     "narrator: 땀을 흘리며 치운 덕분에 파편 더미 속에 숨겨져 있던 보안 코드를 발견했다.",
     "narrator: 청소부와 가볍게 하이파이브를 했다."
    ]
   }
  ]
 },
 {
  "id": "card_03_safe_pressure",
  "slot": "C",
  "kind": "callback",
  "person": {
   "name": "배관 수리공",
   "role": "파이프실 관리자",
   "id": "piping_tech"
  },
  "dialogue": [
   "piping_tech: 거 봐, 내 테이프가 최고라니까! 틈새로 압력이 조금씩 빠져나가서 파이프가 안 터졌어.",
   "kai: 정말이네. 다른 곳은 스크린 조각이 번지고 난리인데 여기는 물기가 안 닿아서 다행이야.",
   "piping_tech: 물기 하나 없이 안전하니까, 여기서 숨 좀 고르고 가."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "수리공 옆에 앉아 안전한 구역에서 휴식을 취한다.",
    "seed": null,
    "flag": "rested_legs",
    "result": [
     "narrator: 수리공과 농담을 주고받으며 체력을 회복했다.",
     "narrator: 바닥에 떨어져 있던 동전도 주워 기분이 좋아졌다."
    ]
   },
   {
    "path": "hard",
    "text": "쉬지 않고 틈새 주변의 장치들을 한 번 더 점검한다.",
    "seed": null,
    "flag": "wrench_gift",
    "result": [
     "narrator: 장치들이 안전한 것을 확인하고 수리공에게 인사했다.",
     "narrator: 수리공이 감탄하며 유용한 렌치를 선물로 주었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_salvage_bag",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "salvage_kid",
   "name": "파편 줍는 아이",
   "role": "전산실 심부름꾼"
  },
  "dialogue": [
   "narrator: 아이가 조각을 주워 자루에 넣고 있었다. 자루 밑이 조각 무게로 늘어져 있었다.",
   "salvage_kid: 당신이 그 냉각수 부은 사람이죠? 이거, 값 나가는 것만 골라 봤어요.",
   "kai: 저 자루, 벌써 반쯤 찼어. 우리 몫은 어디 있냐고 물어봐야 하는 거 아냐.",
   "salvage_kid: 반으로 나눠요. 대신 제가 먼저 고를게요. 이건 제가 주운 거니까."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "아이의 자루에서 절반을 덜어 내 몫을 챙긴다.",
    "seed": null,
    "flag": "took_kid_share",
    "result": [
     "salvage_kid: 야, 이건 제가 주운 거라니까요!",
     "narrator: 자루에서 조각 절반이 당신 손으로 옮겨졌다. 아이는 남은 조각을 세며 입을 삐죽였다.",
     "kai: 나눈 건 맞는데... 아이가 자루를 안고 벽 쪽으로 가 버렸어."
    ]
   },
   {
    "path": "hard",
    "text": "아이에게 자루를 통째로 넘기고 대신 조각에 찍힌 유출 경로를 외운다.",
    "seed": null,
    "flag": "leak_route",
    "result": [
     "salvage_kid: 다... 다 주는 거예요? 진짜요?",
     "narrator: 아이가 자루를 끌어안고 달아났다. 당신 손에는 조각에서 읽어 낸 유출 경로 숫자만 남았다.",
     "kai: 경로가 일곱 갈래야. 이거면 어디로 새는지 짚을 수 있겠네."
    ]
   },
   {
    "path": "stat",
    "text": "아이에게 당신 몫은 됐다며 자루를 지키고 복도 끝까지 따라오라고 한다.",
    "seed": null,
    "flag": "kid_follows",
    "result": [
     "salvage_kid: 정말요? 그럼 제가 뒤에서 자루 지킬게요!",
     "narrator: 아이가 자루를 끌며 당신 뒤를 따랐다. 자루 밑이 바닥을 긁어 조각이 자꾸 흘렀다.",
     "kai: 뒤에서 조각 흘리는 소리가 계속 들려. 근데 발은 빠르네."
    ]
   }
  ]
 },
 {
  "id": "card_03_screen_hand",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "shaking_analyst",
   "name": "떨리는 분석관",
   "role": "데이터 분석 담당"
  },
  "dialogue": [
   "narrator: 분석관이 바닥에 앉아 조각 두 장을 맞대고 있었다. 맞지 않는 모서리만 계속 부딪쳤다.",
   "shaking_analyst: 당신이요, 아까 사람들 문 앞에서 끌어내 준 사람. 손 좀 빌려줄 수 있어요?",
   "kai: 저 사람 손이 계속 떨려. 조각을 놓으면 기록이 사라질까 봐 그러는 것 같은데.",
   "shaking_analyst: 제 분석 기록이에요. 이거 없으면 제가 여기 있었다는 것도 증명이 안 돼요.",
   "shaking_analyst: 조각이 스물세 장인데, 저 혼자서는 두 장도 못 맞춰요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "분석관 옆에 앉아 스물세 장의 조각을 함께 맞춘다.",
    "seed": null,
    "flag": "analyst_record",
    "result": [
     "shaking_analyst: 맞았어요! 이 모서리, 이 모서리예요!",
     "narrator: 맞춰진 조각에 냉각 담당자의 마지막 점검 시각이 떠올랐다. 분석관이 그 조각만 따로 품에 넣었다.",
     "kai: 저 조각, 나중에 꼭 필요할 것 같아. 품에 넣는 걸 봤으니까."
    ]
   },
   {
    "path": "hard",
    "text": "분석관의 조각을 빼앗아 자기 손으로만 맞추고, 그를 뒤로 물린다.",
    "seed": null,
    "flag": "snatched_record",
    "result": [
     "shaking_analyst: 아... 아니, 그건 제 거예요!",
     "narrator: 당신 손에서 조각이 훨씬 빨리 맞춰졌다. 분석관은 벽에 기대어 손을 비볐다.",
     "kai: 빨랐어. 근데 저 사람 표정은 안 좋네. 기록은 남았는데 사람은 빠졌으니까."
    ]
   },
   {
    "path": "stat",
    "text": "분석관에게 당신이 사람들을 어떻게 빼냈는지 말하고 조각을 전부 맡긴다.",
    "seed": null,
    "flag": "analyst_trust",
    "result": [
     "shaking_analyst: 그 얘기 들었어요. 문 앞에서 마지막까지 남아 있던 사람이 당신이라고.",
     "narrator: 분석관이 조각 다발을 당신 손에 쥐여 주고, 자기 몫은 한 장만 남겼다.",
     "kai: 스물세 장 중에 스물두 장이 여기 있어. 이 정도면 뭐든 맞출 수 있겠는데."
    ]
   },
   {
    "path": "gold",
    "text": "분석관에게 100골드를 주고 조각 맞추기를 다른 기술자에게 맡긴다.",
    "seed": null,
    "result": [
     "shaking_analyst: 돈을... 주시는 거예요? 그럼 저는 손 놓고 있어도 되는 거네요.",
     "narrator: 불려온 기술자가 조각을 빠르게 맞췄다. 분석관은 받은 골드를 세며 벽에 기대 앉아 있었다.",
     "kai: 기록은 살았는데, 그 기록을 만든 사람은 구경만 하네."
    ]
   }
  ]
 },
 {
  "id": "card_03_seal_procedure",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "seal_inspector",
   "name": "봉인 검사관",
   "role": "설비 규정 담당"
  },
  "dialogue": [
   "seal_inspector: 당신이죠, 절차서 없으면 손도 안 댄다는 사람.",
   "narrator: 그는 봉인 테이프에 붙은 번호표를 손끝으로 하나하나 짚었다.",
   "seal_inspector: 번호가 하나 어긋났어요. 누가 만졌는지 지금 적어야 해요.",
   "kai: 번호표 끝이 살짝 들려 있어요. 누가 떼었다 붙인 것 같은데.",
   "seal_inspector: 기록은 정확해야 해요. 서두르지 마요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "절차서대로 봉인 번호를 대조하고 어긋난 곳을 기록에 남긴다",
    "seed": null,
    "flag": "seal_log",
    "result": [
     "narrator: 절차서 여백에 번호와 시각이 또박또박 적혔다.",
     "seal_inspector: 이 정도면 통과예요. 대신 이 기록은 제가 가져갑니다.",
     "narrator: 그는 절차서를 가슴에 끼고 밸브 옆에 섰다."
    ]
   },
   {
    "path": "hard",
    "text": "번호표를 떼어 원래 자리에 다시 붙이고 검사관에게 알린다",
    "seed": null,
    "flag": "restuck_seal",
    "result": [
     "seal_inspector: 스스로 신고했으니 이번엔 넘어가죠. 다음엔 없어요.",
     "narrator: 그는 번호표를 다시 붙이고 수첩에 짧게 적었다.",
     "kai: 번호가 맞으니 나중에 대조할 때 편하겠네요."
    ]
   },
   {
    "path": "stat",
    "text": "검사관에게 절차서 사본을 받아 밸브 옆에 붙여 둔다",
    "seed": null,
    "flag": "posted_copy",
    "result": [
     "seal_inspector: 당신 이름이 걸린 기록이라면야. 사본은 드리죠.",
     "narrator: 절차서 사본이 밸브 옆 벽에 나란히 붙었다.",
     "narrator: 지나가던 작업자가 그 앞에 잠깐 멈춰 서서 읽었다."
    ]
   },
   {
    "path": "gold",
    "text": "검사관에게 동전 120닢을 주고 어긋난 번호를 조용히 넘기게 한다",
    "seed": null,
    "result": [
     "seal_inspector: ...기록은 제가 맡을 테니 당신은 모르는 걸로 하죠.",
     "narrator: 그는 수첩에서 한 줄을 지우고 동전을 주머니에 넣었다.",
     "kai: 지운 자국이 수첩에 그대로 남아 있는데요."
    ]
   }
  ]
 },
 {
  "id": "card_03_sealed_valve_log",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "ledger_keeper",
   "name": "대장 담당자",
   "role": "설비 기록 담당"
  },
  "dialogue": [
   "narrator: 대장 담당자가 조각을 무릎에 올리고 봉인 번호를 하나씩 대조하고 있었다.",
   "ledger_keeper: 당신이 그 냉각수 마음대로 부은 사람이죠? 그래서 여기 대장이 이 꼴이 됐어요.",
   "kai: 저 사람, 같은 번호를 세 번이나 다시 읽어. 조각이 섞여서 못 믿겠는 모양이야.",
   "ledger_keeper: 규칙대로면 봉인은 제 기록으로만 풀 수 있어요. 조각이 맞아야 밸브도 열리죠."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "대장 담당자의 지시대로 조각 번호를 대조해 봉인 대장을 완성한다.",
    "seed": null,
    "flag": "seal_locked",
    "result": [
     "ledger_keeper: 스물두 번, 스물세 번... 맞았어요. 이게 진짜 대장이에요.",
     "narrator: 담당자가 완성된 대장을 품에 넣고 밸브 옆에 붙은 봉인 테이프를 한 번 눌렀다.",
     "kai: 대장이 완성됐으니 밸브는 이제 이 사람 허락 없이는 못 여네."
    ]
   },
   {
    "path": "hard",
    "text": "대장 담당자 몫의 조각을 빼앗아 봉인 번호를 당신 손으로 다시 매긴다.",
    "seed": null,
    "flag": "rewritten_seal",
    "result": [
     "ledger_keeper: 그 번호는 제가 매긴 거예요! 함부로 바꾸면 기록이 안 맞아요!",
     "narrator: 당신이 매긴 번호로 조각이 다시 정렬됐다. 담당자는 무릎의 조각을 떨어뜨린 채 앉아 있었다.",
     "kai: 번호는 맞는데, 저 사람이 계속 고개를 젓네. 뭐가 틀린 걸까."
    ]
   },
   {
    "path": "stat",
    "text": "대장 담당자에게 당신이 지켜 온 절차를 늘어놓고, 대장을 당신에게 맡기게 한다.",
    "seed": null,
    "flag": "ledger_handed",
    "result": [
     "ledger_keeper: 당신이 그렇게까지 확인하고 움직였다는 건 처음 들었어요.",
     "narrator: 담당자가 완성된 대장을 당신에게 넘겼다. 봉인 테이프 끝이 살짝 들려 있었다.",
     "kai: 대장을 넘겨받았으니 이제 밸브는 당신 결정에 달렸네."
    ]
   },
   {
    "path": "gold",
    "text": "대장 담당자에게 120골드를 주고 봉인 기록을 새로 사 온다.",
    "seed": null,
    "result": [
     "ledger_keeper: 새 대장이라... 이러면 제 기록은 어디로 가는 거죠?",
     "narrator: 새 봉인 대장이 밸브 옆에 걸렸다. 옛 대장은 담당자 품에 접힌 채 남았다.",
     "kai: 대장이 두 개가 됐네. 어느 쪽이 진짜인지는 나중에 문제가 되겠어."
    ]
   }
  ]
 },
 {
  "id": "card_03_sealed_valve_split",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "coolant_broker",
   "name": "냉각수 중개상",
   "role": "파이프실 암거래꾼"
  },
  "dialogue": [
   "narrator: 비상 냉각수 밸브 옆, 중개상이 봉인 테이프를 손톱으로 긁고 있었다.",
   "coolant_broker: 당신이 남 먼저 자기 몫 챙긴다는 사람이죠? 딱 맞는 거래가 있어요.",
   "coolant_broker: 이 밸브에서 조금만 빼면 냉각수 한 통에 큰돈이에요. 반씩 나눠요.",
   "kai: 봉인 풀면 보관함 온도부터 흔들린다고 하던데."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "중개상의 통에 냉각수를 받아 몫을 챙기고 봉인은 그대로 둔다",
    "seed": null,
    "flag": "broker_cut",
    "result": [
     "narrator: 중개상이 통을 채우고 지폐 뭉치를 주인공 손에 쥐여줬다.",
     "coolant_broker: 좋은 거래였어요. 다음에 또 봐요.",
     "kai: 보관함 쪽에서 삐 소리가 났어. 뭔가 흔들린 것 같은데."
    ]
   },
   {
    "path": "hard",
    "text": "중개상의 봉인 테이프를 다시 붙이고 통을 빼앗아 제자리에 돌려놓는다",
    "seed": null,
    "flag": "broker_enemy",
    "result": [
     "coolant_broker: 이봐요! 내 돈이 걸렸다고요!",
     "narrator: 중개상은 욕을 하며 물러났다. 밸브 봉인은 다시 붙어 있었다.",
     "kai: 냉각수는 지켰는데, 저 사람이 어디 가서 뭐라고 할지 모르겠네."
    ]
   },
   {
    "path": "stat",
    "text": "중개상에게 당신 몫을 먼저 챙기려면 봉인부터 다루라고 밸브 앞을 가로막는다",
    "seed": null,
    "flag": "broker_yields",
    "result": [
     "narrator: 중개상이 손을 들며 뒤로 물러났다. 통은 주인공 발치에 남았다.",
     "coolant_broker: 알겠어요, 알겠어. 당신 몫은 통째로 드릴게요.",
     "kai: 이러면 저 사람은 빈손이네."
    ]
   }
  ]
 },
 {
  "id": "card_03_shared_meter",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "meter_reader",
   "name": "계량기 담당자",
   "role": "설비 기록원"
  },
  "dialogue": [
   "meter_reader: 당신이죠, 남 몫은 안 챙기고 자기 몫만 딱 챙긴다는 사람.",
   "narrator: 그는 계량기 앞에 앉아 연필로 숫자를 지우고 다시 쓰고 있었다.",
   "meter_reader: 이 칸에 당신 이름만 안 적으면 서로 이득이에요. 어때요?",
   "kai: 방금 지운 숫자, 두 번 지웠다가 다시 썼어요.",
   "meter_reader: 빨리요. 검사 나오기 전에 정리해야 하니까."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "계량 기록에서 자기 이름을 빼고 남의 칸에 숫자를 옮겨 적는다",
    "seed": null,
    "flag": "fudged_meter",
    "result": [
     "narrator: 연필 끝이 남의 칸 위를 몇 번 오갔다.",
     "meter_reader: 좋아요, 이제 이 몫은 당신 거예요. 수고비도 챙겨드릴게요.",
     "narrator: 계량기 유리에 다른 이름이 비스듬히 비쳐 보였다."
    ]
   },
   {
    "path": "hard",
    "text": "계량기에 적힌 숫자를 원래대로 되돌려 놓는다",
    "seed": null,
    "flag": "honest_meter",
    "result": [
     "meter_reader: 아... 그럼 나 몫이 줄어드는데. 진짜 이럴 거예요?",
     "narrator: 그는 연필을 놓고 한숨을 크게 쉬었다.",
     "kai: 숫자가 맞으니까 기록도 맞겠네요."
    ]
   },
   {
    "path": "stat",
    "text": "계량기 담당자에게 남의 몫에 손대지 말고 자기 칸만 채우라고 한다",
    "seed": null,
    "flag": "own_column",
    "result": [
     "meter_reader: 하, 당신 같은 사람이 그런 말 하면 할 말이 없죠.",
     "narrator: 그는 연필을 귀에 꽂고 자기 칸만 다시 채워 넣었다.",
     "narrator: 계량기 옆 서류 뭉치가 정리되어 가지런히 쌓였다."
    ]
   }
  ]
 },
 {
  "id": "card_03_shared_water",
  "slot": "D",
  "kind": "rep",
  "person": {
   "id": "thirsty_crew",
   "name": "목마른 작업반장",
   "role": "전산실 작업반"
  },
  "dialogue": [
   "narrator: 작업반장이 깨진 스크린 앞에서 이름 목록을 손가락으로 훑고 있었다.",
   "thirsty_crew: 당신이요, 아까 사람들 빼내 준 사람. 우리 반 애들 이름이 화면에서 다 섞였어요.",
   "kai: 저 사람 손에 물병이 하나뿐이야. 반원은 여섯인데.",
   "thirsty_crew: 제 물을 나눠 주면 애들 버틸 거예요. 화면은 당신이 좀 봐 주고요.",
   "thirsty_crew: 여섯 명 중에 둘은 벌써 연락이 끊겼어요. 이름이라도 찾아야죠."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "작업반장의 물병을 받아 반원들에게 돌리고, 남은 물은 당신이 마신다.",
    "seed": null,
    "flag": "crew_rested",
    "result": [
     "thirsty_crew: 고맙습니다. 애들이 숨 좀 돌렸어요.",
     "narrator: 물병이 빙 돌아오자 반원들이 벽에 기대 앉았다. 작업반장이 당신 어깨를 한 번 두드렸다.",
     "kai: 물병이 돌아왔는데 반쯤 비었네. 그래도 다들 숨은 붙였어."
    ]
   },
   {
    "path": "hard",
    "text": "물은 작업반장에게 남겨 두고, 당신이 뒤섞인 화면에서 여섯 이름을 직접 찾아낸다.",
    "seed": null,
    "flag": "found_names",
    "result": [
     "thirsty_crew: 이름이... 여기 있네요. 둘 다 살아 있어요!",
     "narrator: 당신이 짚은 두 이름 옆에 작은 점이 깜빡였다. 작업반장이 물병을 쥔 채 그 화면을 들여다봤다.",
     "kai: 이름 두 개가 살아 있는 게 보여. 근데 물은 아직 그대로네."
    ]
   },
   {
    "path": "stat",
    "text": "작업반장에게 반원들을 당신 뒤에 붙이라고 하고, 물은 전부 반원들에게 넘긴다.",
    "seed": null,
    "flag": "crew_behind",
    "result": [
     "thirsty_crew: 당신 뒤에 서라고요? ...좋아요, 애들아 이쪽으로 붙어!",
     "narrator: 반원 여섯이 당신 뒤에 줄을 섰다. 빈 물병이 바닥에 굴러떨어졌다.",
     "kai: 여섯이 뒤에 붙었어. 이러면 앞에서 뭘 하든 등이 든든하겠네."
    ]
   },
   {
    "path": "fun",
    "text": "작업반장에게 물 대신 파이프에 맺힌 이슬을 긁어 모아 반원들에게 먹인다.",
    "seed": null,
    "result": [
     "thirsty_crew: 이슬을... 마시라고요? 이거 냉각수 파이프에서 나온 건데.",
     "narrator: 반원들이 손바닥에 고인 물을 핥았다. 한 사람이 얼굴을 찡그리며도 엄지를 들었다.",
     "kai: 다들 마시긴 마셨네. 맛은... 묻지 말래."
    ]
   }
  ]
 },
 {
  "id": "card_03_spare_canister",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "coolant_courier",
   "name": "냉각수 배달원",
   "role": "자재 운반 담당"
  },
  "dialogue": [
   "coolant_courier: 당신이 그 낯선 사람 챙겨준다는 분이죠? 소문 났어요.",
   "narrator: 그는 통 하나를 허리에 붙인 채 다른 통은 바닥에 굴려 두고 있었다.",
   "coolant_courier: 손이 하나뿐이라. 대신 통 옮겨주면 수고비는 챙겨드릴게요.",
   "kai: 저 통, 옆에 붙은 라벨에 뭐라고 적혀 있는지 보이세요?",
   "coolant_courier: 라벨은 신경 쓰지 마요. 물만 옮겨주면 되는 거예요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "배달원 대신 냉각수 통을 서버 쪽까지 옮겨준다",
    "seed": null,
    "flag": "shelf_screen",
    "result": [
     "narrator: 통을 옮기는 동안 데이터 스크린 조각을 배관 선반에 잠시 올려 두었다.",
     "coolant_courier: 역시 소문대로네요. 수고비, 여기요.",
     "narrator: 선반 위 조각이 미세하게 떨리며 표시가 한 칸 바뀌었다."
    ]
   },
   {
    "path": "hard",
    "text": "통을 받되 배달원에게 라벨부터 읽어보라고 요구한다",
    "seed": null,
    "flag": "discard_label",
    "result": [
     "coolant_courier: 하... 폐기 예정분이래요. 그래도 물은 물이잖아요.",
     "narrator: 그는 통을 세워 두고 자기 몫 수고비를 챙겨 먼저 나갔다.",
     "kai: 폐기 예정분이라니. 버리긴 아깝고, 쓰긴 찜찜하고."
    ]
   },
   {
    "path": "stat",
    "text": "배달원에게 통을 제자리에 두고 손을 잡아당기지 말라고 일러둔다",
    "seed": null,
    "flag": "stacked_canisters",
    "result": [
     "coolant_courier: 예전에 당신이 사람들 챙겨서 통로 뚫었다는 얘기, 들었어요. 그럼 믿을게요.",
     "narrator: 그는 통을 벽 쪽에 나란히 세우고 빈손으로 물러섰다.",
     "kai: 통 위치를 저 사람이 기억하고 있으니 나중에 찾기 쉽겠네요."
    ]
   },
   {
    "path": "gold",
    "text": "배달원에게 동전 80닢을 주고 통을 직접 서버 옆에 두게 한다",
    "seed": null,
    "result": [
     "coolant_courier: 돈이라면야! 두 통 다 서버 옆에 딱 붙여 놓을게요.",
     "narrator: 그는 통을 서버 벽에 붙여 놓고 손바닥을 털며 나갔다.",
     "kai: 발밑에 통이 있으면 나중에 발이 걸리겠는데요."
    ]
   }
  ]
 },
 {
  "id": "card_03_strange_puddle",
  "slot": "B",
  "kind": "normal",
  "person": {
   "role": "설비 점검자",
   "name": "호기심 많은 기술자",
   "id": "curious_tech"
  },
  "dialogue": [
   "curious_tech: 저기 물웅덩이 보이죠? 저 안에 멀쩡한 메모리 칩이 빠졌는데, 제가 주울 수 있다에 걸어볼래요?",
   "kai: 물이 평범해 보이지 않아. 뭔가 끈적거리는 이물질이 섞여 있는 것 같은데.",
   "curious_tech: 에이, 그냥 물이라니까요. 돈 걸고 한 번 해보죠!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "기술자가 칩을 건질 수 없다에 돈을 걸어 내기에 응한다.",
    "seed": null,
    "result": [
     "narrator: 기술자가 손을 집어넣으려다 끈적이는 물의 촉감에 놀라 손을 뺐다.",
     "narrator: 결국 칩을 건지지 못한 기술자가 투덜거렸다."
    ]
   },
   {
    "path": "hard",
    "text": "내기를 무시하고 물웅덩이에 접근하지 못하게 막는다.",
    "seed": null,
    "result": [
     "narrator: 강하게 제지하자 기술자는 입맛을 다시며 물러났다.",
     "narrator: 정체불명의 물웅덩이를 피한 덕에 위험을 면했다."
    ]
   },
   {
    "path": "gold",
    "text": "근처 보급기에 돈을 넣고 특수 집게를 뽑아 칩을 안전하게 건져낸다.",
    "seed": null,
    "result": [
     "narrator: 특수 집게를 사용해 끈적이는 물에 닿지 않고 칩을 건져냈다.",
     "narrator: 칩의 데이터를 확인해 유용한 정보를 얻었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_unlogged_hand",
  "slot": "A",
  "kind": "rep",
  "person": {
   "id": "night_tinkerer",
   "name": "몰래 손보는 기술자",
   "role": "야간 정비 담당"
  },
  "dialogue": [
   "night_tinkerer: 당신이죠? 규정엔 안 적혀 있는 방법으로 일 해치운다는 사람.",
   "narrator: 그는 봉인 테이프 위에 재를 톡톡 털어 번호를 흐리게 만들어 두었다.",
   "night_tinkerer: 이렇게 해두면 누가 만졌는지 아무도 몰라요. 해볼래요?",
   "kai: 테이프에 재를 뿌리면 나중에 붙일 때 안 붙어요.",
   "night_tinkerer: 그러니까 이게 재밌는 거지. 자, 손 내밀어 봐요."
  ],
  "choices": [
   {
    "path": "easy",
    "text": "기술자를 따라 봉인 테이프를 재로 덮고 밸브 손잡이를 돌려 본다",
    "seed": null,
    "flag": "ash_tape",
    "result": [
     "narrator: 손잡이가 반 바퀴 돌자 배관 안쪽에서 물소리가 가까워졌다.",
     "night_tinkerer: 봐요, 아무도 몰라요. 이게 자유라는 거예요.",
     "narrator: 테이프 위 재가 손자국 모양으로 지워져 있었다."
    ]
   },
   {
    "path": "hard",
    "text": "테이프의 재를 닦아내고 번호를 다시 또렷하게 쓴다",
    "seed": null,
    "flag": "clean_number",
    "result": [
     "night_tinkerer: 쳇, 재미없게. 그래도 번호는 살았네요.",
     "narrator: 닦아낸 자리에 번호가 다시 검게 드러났다.",
     "kai: 이제 누가 봐도 봉인이 온전해 보여요."
    ]
   },
   {
    "path": "stat",
    "text": "기술자에게 재 봉투를 거두고 손잡이 옆에 서 있으라고 한다",
    "seed": null,
    "flag": "tinkerer_beside",
    "result": [
     "night_tinkerer: 당신이 그렇게 말하면... 알겠어요, 손 뗄게요.",
     "narrator: 그는 재 봉투를 주머니에 넣고 손잡이 옆에 나란히 섰다.",
     "narrator: 밸브 손잡이가 아직 미지근하게 데워져 있었다."
    ]
   }
  ]
 },
 {
  "id": "card_03_unstable_valve",
  "slot": "A",
  "kind": "normal",
  "person": {
   "name": "밸브 감시원",
   "id": "valve_monitor",
   "role": "설비 관리자"
  },
  "dialogue": [
   "valve_monitor: 이 비상 냉각수 밸브의 잠금장치가 헐거워졌어. 압력 때문에 튀어 오를 것 같아.",
   "kai: 밸브 틈새로 이미 물방울이 맺히고 있어. 바닥이 젖기 시작했는걸.",
   "valve_monitor: 당장 조이지 않으면 터질 거야. 좀 도와줘!"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "밸브를 완전히 열어버려 압력을 단번에 뺀다.",
    "seed": null,
    "result": [
     "narrator: 밸브를 열자 소량의 냉각수가 쏟아지며 압력이 순식간에 정상으로 돌아왔다.",
     "narrator: 시원한 물줄기에 기분이 한결 나아졌다."
    ]
   },
   {
    "path": "hard",
    "text": "밸브의 잠금장치를 타이밍에 맞춰 다시 조인다.",
    "seed": null,
    "result": [
     "narrator: 압력이 치솟는 순간마다 정확히 렌치를 돌려 잠금장치를 고정했다.",
     "narrator: 수리 도구가 조금 망가졌지만 밸브는 안전해졌다."
    ]
   },
   {
    "path": "gold",
    "text": "근처 자판기에 돈을 넣고 자동 수리 키트를 뽑아 밸브에 부착한다.",
    "seed": null,
    "result": [
     "narrator: 자동 수리 키트가 작동하며 밸브를 완벽하게 밀봉했다.",
     "narrator: 힘을 들이지 않고 안전하게 상황을 넘겼다."
    ]
   }
  ]
 },
 {
  "id": "card_03_wet_glove_request",
  "slot": "B",
  "kind": "rep",
  "person": {
   "id": "young_apprentice",
   "name": "어린 견습공",
   "role": "설비 견습"
  },
  "dialogue": [
   "narrator: 파이프실 입구에서 어린 견습공이 장갑을 움켜쥔 채 서 있었다.",
   "young_apprentice: 저기, 아까 사람 살린다고 밸브 열���다는 분이죠? 소문 들었어요.",
   "young_apprentice: 동료 손이 얼음 파이프에 붙어서 벗겨졌어요. 여분 장갑 있으면 하나만요.",
   "kai: 장갑을 빌려주면 저 애가 대신 들어가겠다는 건가?"
  ],
  "choices": [
   {
    "path": "easy",
    "text": "여분 장갑을 벗어 견습공에게 건네고 동료를 살피게 한다",
    "seed": null,
    "flag": "apprentice_helps",
    "result": [
     "narrator: 견습공이 장갑을 끼고 얼음 파이프 사이로 손을 넣어 동료를 끌어냈다.",
     "young_apprentice: 됐어요! 손은 다쳤지만 살았어요. 정말 고마워요.",
     "kai: 장갑 하나로 사람 하나 살았네."
    ]
   },
   {
    "path": "hard",
    "text": "장갑 대신 견습공을 붙잡고 파이프를 만지지 말라고 단단히 일러둔다",
    "seed": null,
    "flag": "apprentice_wary",
    "result": [
     "young_apprentice: 그럼 동료는요? 그냥 두라는 거예요?",
     "narrator: 견습공은 입을 다물고 물러섰다. 동료는 다른 사람이 부축해 나갔다.",
     "kai: 맞는 말이긴 한데... 저 애 표정이 안 좋아."
    ]
   },
   {
    "path": "stat",
    "text": "견습공에게 당신이 냉각수를 부은 구역을 맡아 살피라고 지시한다",
    "seed": null,
    "flag": "apprentice_scouts",
    "result": [
     "narrator: 견습공이 고개를 크게 끄덕이고 파이프 사이를 뛰어다녔다.",
     "young_apprentice: 여기 조각들 있어요! 젖어서 미끄러운데 다 건져왔어요.",
     "kai: 저 애가 사람 하나 살린 걸로 끝이 아니었네."
    ]
   },
   {
    "path": "gold",
    "text": "견습공에게 돈을 쥐여주고 근처 상점에서 두꺼운 방한 장갑을 사 오게 한다",
    "seed": null,
    "result": [
     "narrator: 견습공이 숨을 헐떡이며 장갑 보따리를 안고 돌아왔다.",
     "young_apprentice: 다섯 켤레요! 이제 다들 손 안 다쳐요.",
     "kai: 돈이 장갑이 되고 장갑이 손이 됐네."
    ]
   }
  ]
 }
]

# 표시 (보스 방)
{
 "log_written": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "적힌 일지"
  },
  "boss_line": {
   "korean": "야간 순찰자가 일지를 펼쳐 당신의 위반 기록을 읽어 내려간다."
  }
 },
 "copy_made": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "떠 둔 사본"
  },
  "boss_choice": {
   "korean": "당신이 떠 둔 사본을 펼쳐 조각의 내용을 읽어 낸다."
  }
 },
 "box_ajar": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "반쯤 열린 상자"
  },
  "boss_choice": {
   "korean": "당신이 반쯤 열린 봉인 상자에서 조각을 꺼내 든다."
  }
 },
 "pipe_flood": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "물바다"
  },
  "boss_line": {
   "korean": "바닥에 고인 오염된 냉각수가 발목을 잡아 이동을 방해한다."
  }
 },
 "valve_closed": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "잠긴 밸브"
  },
  "boss_choice": {
   "korean": "수리공이 건넨 수건으로 시야를 가리는 오염수를 닦아낸다."
  }
 },
 "inspector_signed": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "점검관의 서명"
  },
  "boss_line": {
   "korean": "점검관에게 서류판을 내밀어 통행을 허가받는다."
  }
 },
 "inspector_walks": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "점검관의 퇴장"
  },
  "boss_choice": {
   "korean": "점검관이 남긴 서류판 여백에 조각 오염 위치를 확인한다."
  }
 },
 "inspector_trusts": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "점검관의 신뢰"
  },
  "boss_choice": {
   "korean": "점검관이 서명한 서류판을 들어 보이며 길을 열어 준다."
  }
 },
 "torn_pipe_bundle": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "뜯어낸 파이프"
  },
  "boss_line": {
   "korean": "반장이 뜯어낸 파이프 구간으로 길을 열어 준다."
  }
 },
 "foreman_owes": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "반장의 빚"
  },
  "boss_choice": {
   "korean": "반장이 손전등과 함께 반원들을 이끌고 길을 밝혀 준다."
  }
 },
 "foreman_obeys": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "반장의 호응"
  },
  "boss_choice": {
   "korean": "반장에게 신호를 보내 반원들을 한꺼번에 물린다."
  }
 },
 "shoved_dealer": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "밀려난 고물상"
  },
  "boss_line": {
   "korean": "고물상 곰이 복도 끝에서 당신을 가리키며 소리친다."
  }
 },
 "kept_signature": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "읽어 낸 서명"
  },
  "boss_choice": {
   "korean": "당신이 냉각 담당자의 서명과 날짜를 들어 보이며 복도 끝을 가리킨다."
  }
 },
 "dealer_backed_off": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "물러난 고물상"
  },
  "boss_choice": {
   "korean": "고물상 곰이 당신 앞에서 길을 비키고 어깨를 숙인다."
  }
 },
 "lead_carries": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "조장의 어깨"
  },
  "boss_line": {
   "korean": "교대 조장에게 케이블 다발을 함께 들어 통로를 연다."
  }
 },
 "lead_strained": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "조장의 부상"
  },
  "boss_choice": {
   "korean": "교대 조장이 허리를 짚은 채 케이블 위치를 알려 준다."
  }
 },
 "lead_crew": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "모인 인원"
  },
  "boss_choice": {
   "korean": "교대 조장이 불러 모은 인원에게 길을 열게 한다."
  }
 },
 "oxygen_roster": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "산소 명부"
  },
  "boss_line": {
   "korean": "산소 명부를 펼쳐 남은 사람 수를 세어 본다."
  }
 },
 "sealed_box": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "봉인 상자"
  },
  "boss_choice": {
   "korean": "봉인 상자를 열어 데이터 스크린 조각 상태를 확인한다."
  }
 },
 "signed_roster": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "서명된 명부"
  },
  "boss_choice": {
   "korean": "서명된 명부를 보이며 사람들을 물러나게 한다."
  }
 },
 "rust_water": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "녹물 섞인 냉각수"
  },
  "boss_line": {
   "korean": "녹이 섞인 냉각수를 들고 서버 앞에 선다."
  }
 },
 "bruiser_watch": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "지켜보는 잡역꾼"
  },
  "boss_choice": {
   "korean": "문가에서 지켜보는 잡역꾼에게 봉인 상태를 확인시킨다."
  }
 },
 "valve_guard": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "밸브 앞을 막은 잡역꾼"
  },
  "boss_choice": {
   "korean": "밸브 앞을 막아선 잡역꾼에게 냉각수 통을 건네받는다."
  }
 },
 "lost_access": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "막힌 통로"
  },
  "boss_line": {
   "korean": "청소부의 권한 상실로 인해 지름길 문이 굳게 닫혀 있다."
  }
 },
 "master_key": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "만능 키"
  },
  "boss_choice": {
   "korean": "청소용 만능 키를 사용해 보안 셔터를 가볍게 열고 통과한다."
  }
 },
 "courier_smuggle": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "배달원의 지름길"
  },
  "boss_line": {
   "korean": "배달원이 지름길 철문 열쇠를 던져 준다."
  }
 },
 "courier_blocked": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "닫힌 철문"
  },
  "boss_choice": {
   "korean": "배달원이 다른 지름길의 위치를 손가락으로 짚어 준다."
  }
 },
 "courier_open_path": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "열린 지름길"
  },
  "boss_choice": {
   "korean": "배달원이 열어 둔 지름길로 조각을 들고 통과한다."
  }
 },
 "clear_path": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "열린 길"
  },
  "boss_choice": {
   "korean": "청소부가 미리 치워둔 깨끗한 통로를 따라 빠르게 접근한다."
  }
 },
 "security_code": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "보안 코드"
  },
  "boss_choice": {
   "korean": "발견한 보안 코드를 입력해 방어 체계를 무력화한다."
  }
 },
 "rested_legs": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "가벼운 발걸음"
  },
  "boss_choice": {
   "korean": "휴식으로 얻은 활력을 바탕으로 재빠르게 회피한다."
  }
 },
 "wrench_gift": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "수리공의 렌치"
  },
  "boss_choice": {
   "korean": "수리공에게 받은 렌치로 닫힌 문을 강제로 열어젖힌다."
  }
 },
 "took_kid_share": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "덜어 낸 몫"
  },
  "boss_line": {
   "korean": "파편 줍는 아이가 복도에서 당신을 보고 자루를 뒤로 숨긴다."
  }
 },
 "leak_route": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "외운 유출 경로"
  },
  "boss_choice": {
   "korean": "당신이 외운 유출 경로를 복도 벽의 배관도에 손으로 짚는다."
  }
 },
 "kid_follows": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "따라오는 아이"
  },
  "boss_choice": {
   "korean": "파편 줍는 아이가 자루를 끌고 당신 뒤에서 길을 가리킨다."
  }
 },
 "analyst_record": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "되살아난 기록"
  },
  "boss_line": {
   "korean": "분석관이 맞춰 낸 점검 기록을 당신 앞에 펼쳐 든다."
  }
 },
 "snatched_record": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "빼앗은 기록"
  },
  "boss_choice": {
   "korean": "분석관이 복도에서 당신을 피해 몸을 돌린다."
  }
 },
 "analyst_trust": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "맡긴 조각"
  },
  "boss_choice": {
   "korean": "분석관이 당신 뒤에 서서 조각을 맞춰 가며 길을 알려 준다."
  }
 },
 "seal_log": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "봉인 대조 기록"
  },
  "boss_line": {
   "korean": "봉인 대조 기록을 펼쳐 밸브 상태를 증명한다."
  }
 },
 "restuck_seal": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "다시 붙인 번호표"
  },
  "boss_choice": {
   "korean": "다시 붙인 번호표를 가리키며 봉인이 온전하다고 말한다."
  }
 },
 "posted_copy": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "벽에 붙은 절차서"
  },
  "boss_choice": {
   "korean": "벽에 붙은 절차서 사본을 가리켜 순서를 확인한다."
  }
 },
 "seal_locked": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "잠긴 봉인"
  },
  "boss_line": {
   "korean": "대장 담당자가 봉인 테이프를 가리키며 당신 앞을 막아선다."
  }
 },
 "rewritten_seal": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "다시 매긴 번호"
  },
  "boss_choice": {
   "korean": "당신이 다시 매긴 봉인 번호를 복도 벽에 크게 적어 둔다."
  }
 },
 "ledger_handed": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "넘겨받은 대장"
  },
  "boss_choice": {
   "korean": "당신이 넘겨받은 봉인 대장을 펼쳐 밸브 앞에 선다."
  }
 },
 "broker_cut": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "중개상의 몫"
  },
  "boss_line": {
   "korean": "중개상이 창고 문을 열어 준다."
  }
 },
 "broker_enemy": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "중개상의 원한"
  },
  "boss_choice": {
   "korean": "중개상이 봉인된 밸브의 압력 수치를 알려 준다."
  }
 },
 "broker_yields": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "중개상의 굴복"
  },
  "boss_choice": {
   "korean": "중개상이 몸을 숙여 밸브 옆 통로를 비켜 준다."
  }
 },
 "fudged_meter": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "고친 계량 기록"
  },
  "boss_line": {
   "korean": "고친 계량 기록을 검사 앞에서 다시 펼쳐 보인다."
  }
 },
 "honest_meter": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "바른 계량 기록"
  },
  "boss_choice": {
   "korean": "바른 계량 기록을 검사에게 내민다."
  }
 },
 "own_column": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "제 칸만 채운 기록"
  },
  "boss_choice": {
   "korean": "제 칸만 채워진 계량 기록을 근거로 냉각수 몫을 요구한다."
  }
 },
 "crew_rested": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "숨 돌린 작업반"
  },
  "boss_line": {
   "korean": "작업반장이 반원들을 이끌고 당신 옆에 나란히 선다."
  }
 },
 "found_names": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "찾아낸 이름"
  },
  "boss_choice": {
   "korean": "당신이 화면에서 찾아낸 반원 두 명의 위치를 복도 끝으로 외친다."
  }
 },
 "crew_behind": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "뒤에 선 작업반"
  },
  "boss_choice": {
   "korean": "작업반장이 반원들과 함께 당신 등 뒤를 막아선다."
  }
 },
 "shelf_screen": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "선반에 둔 조각"
  },
  "boss_line": {
   "korean": "선반에 올려 둔 데이터 스크린 조각을 다시 꺼내 든다."
  }
 },
 "discard_label": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "폐기 예정 라벨"
  },
  "boss_choice": {
   "korean": "폐기 예정 라벨이 붙은 통을 서버 앞에서 열어 보인다."
  }
 },
 "stacked_canisters": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "벽에 세운 통"
  },
  "boss_choice": {
   "korean": "벽에 세워 둔 냉각수 통을 가리켜 위치를 확인한다."
  }
 },
 "ash_tape": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "재 묻은 테이프"
  },
  "boss_line": {
   "korean": "재 묻은 테이프를 보며 봉인 시각이 맞지 않는다고 항의한다."
  }
 },
 "clean_number": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "또렷한 번호"
  },
  "boss_choice": {
   "korean": "또렷한 봉인 번호를 가리키며 손대지 않았음을 밝힌다."
  }
 },
 "tinkerer_beside": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "손잡이 옆 기술자"
  },
  "boss_choice": {
   "korean": "손잡이 옆에 선 기술자에게 밸브 상태를 확인시킨다."
  }
 },
 "apprentice_helps": {
  "kind": "bad",
  "boss_penalty": -1,
  "label": {
   "korean": "견습공의 손"
  },
  "boss_line": {
   "korean": "견습공에게 손짓해 얼어붙은 파이프 틈을 함께 벌린다."
  }
 },
 "apprentice_wary": {
  "kind": "good",
  "boss_penalty": 1,
  "label": {
   "korean": "견습공의 경계"
  },
  "boss_choice": {
   "korean": "견습공이 파이프 위치를 손끝으로 가리켜 준다."
  }
 },
 "apprentice_scouts": {
  "kind": "good",
  "boss_penalty": 2,
  "label": {
   "korean": "견습공의 눈"
  },
  "boss_choice": {
   "korean": "견습공이 파이프 사이에 깔린 데이터 조각의 자리를 알려 준다."
  }
 }
}

# 만들 것
1. rooms_title: 이미 있음 — 비워 둠
2. lines: 아래 12줄. 방마다 정해진 조건 하나
   1) 방 3: 조건 평판 fighting- (코드가 정함, if_value 비움). 평판 "힘으로 밀어붙이고 맞서 싸우는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, random_boss, character_any) 또는 character_any
   2) 방 3: 조건 평판 fighting+ (코드가 정함, if_value 비움). 평판 "남을 돕고 손을 내미는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, random_boss, character_any) 또는 character_any
   3) 방 5: 조건 평판 community- (코드가 정함, if_value 비움). 평판 "자기 몫부터 챙기는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, character_1, character_any) 또는 character_any
   4) 방 5: 조건 평판 community+ (코드가 정함, if_value 비움). 평판 "모두를 위해 나서는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, character_1, character_any) 또는 character_any
   5) 방 7: 조건 평판 reason- (코드가 정함, if_value 비움). 평판 "규칙과 절차를 지키는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, character_any, character_2) 또는 character_any
   6) 방 7: 조건 평판 reason+ (코드가 정함, if_value 비움). 평판 "규칙보다 마음 가는 대로 하는 사람"인 주인공에게 그 방 인물이 반응함 (소문을 들었거나 본 것처럼). 축 이름 낱말("투쟁" 등) 대신 주인공이 한 일로. 화자 그 방 원문 인물(kai, character_any, character_2) 또는 character_any
   7) 방 10: 조건 평판 fighting- (코드가 정함, if_value 비움). 보스가 주인공의 평판 "힘으로 밀어붙이고 맞서 싸우는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   8) 방 10: 조건 평판 fighting+ (코드가 정함, if_value 비움). 보스가 주인공의 평판 "남을 돕고 손을 내미는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   9) 방 10: 조건 평판 community- (코드가 정함, if_value 비움). 보스가 주인공의 평판 "자기 몫부터 챙기는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   10) 방 10: 조건 평판 community+ (코드가 정함, if_value 비움). 보스가 주인공의 평판 "모두를 위해 나서는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   11) 방 10: 조건 평판 reason- (코드가 정함, if_value 비움). 보스가 주인공의 평판 "규칙과 절차를 지키는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   12) 방 10: 조건 평판 reason+ (코드가 정함, if_value 비움). 보스가 주인공의 평판 "규칙보다 마음 가는 대로 하는 사람"을 알아보고 한마디 (비웃거나 경계하거나). 카드 인물 이름 금지. 화자 `random_boss`
   - after_line: 그 줄까지 나온 것만 말함. 뒤 줄에서 처음 나오는 소리·물건·사실을 미리 말하지 않음. 앞 줄에 바로 이어지는 말로
   - 장면 분위기에 맞게. 누가 막아서거나 다투는 중에는 응원·감상 대신 그 상황에 대한 말
   - 기억 줄: 카드 결과에 나온 사람·물건으로. 회수 카드에서만 밝혀지는 사실은 미리 말하지 않음
   - 말투: 원문에서 그 화자가 쓰는 말투 그대로
   - intent(무엇을 말하는지), example(그대로 써도 되는 대사 한 줄), emotion(base/happy/sad/angry)
3. actors: 카드 인물 night_guard, safety_inspector, dock_foreman, scrap_dealer, shift_lead, relief_keeper, pipe_bruiser, night_courier, salvage_kid, shaking_analyst, seal_inspector, ledger_keeper, coolant_broker, meter_reader, thirsty_crew, coolant_courier, night_tinkerer, young_apprentice 모두. style = 카드 대사에서 보이는 말투 한 줄 (예: "퉁명스러운 존댓말")
   - 얼굴: 아래 풀에서 역할이 맞는 번호 portrait_no (한 번호는 한 인물만). 맞는 얼굴이 없으면 portrait_needed ("<나이대> <성별> <역할>. <옷차림·소품>, <인상>")

4. seeds: 이미 있음 — 비워 둠 korean = 주인공이 한 일 한 줄 ("~함"으로 끝, 카드 결과와 맞게), english

## 얼굴 풀 (번호. 역할)
1. 시민
2. 가디언 상담원 / 건물 경비원 / 건물 관리인 / 경찰 상담관 / 경찰서 민원 담당 / 대피소 관리인 / 허브 관제 담당자 / 헌혈 버스 직원
3. 갱단원 / 브로커 / 사설 구급차 기사 / 사채업자 / 정보상 / 현상금꾼
4. 기자 / 닥스의 옛 동료 / 린의 제보자 / 병원 전산실 직원 / 익명 게시판 운영자 / 제보자 / 카이의 옛 동료 / 허브 야간 기사
5. 보호자 / 세탁소 단골 / 아래층 주민 / 이웃 주민 / 칩 줍는 주민
6. 가디언 직원 / 기업 대리인 / 병원 홍보실 직원 / 시청 담당관 / 통제 요원
7. USB를 주웠다는 남자 / 다친 남자 / 서버 청소부 / 쫓기는 은행원 / 환자를 업은 남자
8. 리오의 누나 / 약장수 / 포장마차
9. 소매치기 소년
10. 아이
11. 조직원의 아들
12. 문양 그리는 소년
13. 닥스 정보 업로더 / 영상 올리는 청년
14. PC방 모임장
15. 갱단원
16. 괴담 방송 진행자
17. 배달원
18. 떠돌이 해커
19. 숫자 모임장
20. 사진을 찾는 여자
21. 리오의 누나라는 여자
22. 해적 방송 진행자
23. 헌혈 버스 직원
24. 가디언 상담원
25. 기자 / 린의 옛 동료 기자 / 촬영 기자
26. 해결사
27. 닥스의 옛 동료
28. 병원 홍보실 직원
29. 블랙 웹 잔당
30. 리오의 누나
31. 병동 간호사
32. 쫓기는 은행원
33. 카이의 옛 동료
34. 현상금 사냥꾼 / 현상금꾼
35. 경찰 상담관 / 경찰서 민원 담당
36. 골목 가게 주인
37. 간판 수리 기사 / 광고판 수리 기사
38. 부품 수거상
39. 수사팀 조사관
40. 사설 구급차 기사
41. 사채업자
42. 시청 담당관
43. 사진을 맡긴 손님
44. 자경단 대장
45. 허브 관제 담당자
46. 보도국장
47. 장미단 수금원
48. 택시 기사
49. 복권방 주인
50. 약장수
51. 허브 야간 기사
52. 은퇴한 서버 기사

# 문체
- 사람·장소·물건·사건은 이 스토리 원문에서 출발. 원문에 없는 큰 설정(새 조직·초능력) 금지. 작은 사항(시간·숫자·물건)은 추가 가능
- 장르의 분위기로. 단 비유 금지: "그림자", "심연", "집어삼키다", "광기" 대신 실제 물건·장소·숫자
  - 원문에 실제로 나오는 물건·현상은 그 단어 그대로 써도 됨 (예: 원문의 "겹쳐진 그림자")
- narrator 는 눈에 보이는 일만. 감정·의미 해석 금지
- 같은 사건·같은 선택지 문장 반복 금지. 앞 시나리오 카드와 제목·사건 겹치지 말 것