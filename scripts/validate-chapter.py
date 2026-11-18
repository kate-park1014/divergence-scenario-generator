#!/usr/bin/env python3
# 챕터 JSON(output_list) 기계 검사: 화 번호, {random_boss}+받침 조사, 영어, "주인공" 노출, emotion 값, actors 에 없는 speaker.
# 사용: python3 scripts/validate-chapter.py output_list/hell_chapter_3{1..9}.json
import json, re, sys
EMO = {'base','happy','sad','angry'}
for path in sys.argv[1:]:
    d = json.load(open(path)); probs = []
    for s in d['scenarios']:
        o = s['order']; actors = set(s['actors'])
        texts = [('prologue', t) for t in s['prologue']['korean']] + [('epilogue', t) for t in s.get('epilogue', {}).get('korean', [])]
        for r in s['rooms']:
            for k in ('dialogue','win_dialogue','lose_dialogue'):
                for i, x in enumerate(r.get(k, [])):
                    sp = x.get('speaker')
                    if x.get('type') == 'speech':
                        texts.append((f'{r["id"]}/{k}/{i}', x['content']['korean']))
                        if x.get('emotion') not in EMO: probs.append(f'{o} {r["id"]}/{k}/{i} emotion={x.get("emotion")}')
                    if sp and not re.match(r'^(narrator|character_any|character_[1-4]|boss|random_boss)$', sp) and sp not in actors:
                        probs.append(f'{o} {r["id"]}/{k}/{i} speaker {sp} not in actors')
        for where, t in texts:
            if re.search(r'[1-5]화', t): probs.append(f'{o} {where} 화번호: {t}')
            if re.search(r'\{random_boss\}[이가은는을를과와]', t): probs.append(f'{o} {where} 조사: {t}')
            if re.search(r'[A-Za-z]{3,}', t.replace('{random_boss}', '')): probs.append(f'{o} {where} 영어: {t}')
            if '주인공' in t: probs.append(f'{o} {where} 주인공: {t}')
    print(path.split('/')[-1], 'OK' if not probs else probs)
