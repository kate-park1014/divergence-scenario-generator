# 챕터 JSON 손 수정 헬퍼. 원문 앞부분(prefix)을 assert 로 확인한 뒤 바꾼다 → 위치가 틀리면 바로 멈춘다.
# 사용 예 (scripts 폴더를 import 경로에 넣고):
#   from chapter_fix import Ch, D, W, L
#   c = Ch('output_list/hell_chapter_31.json')
#   c.set(1, 15, W, 0, '경고했거늘…', '새 대사')            # 화, 방 id, dialogue|win_dialogue|lose_dialogue, 인덱스
#   c.ins(2, 9, D, 2, 'narrator', 'base', '새 줄')      # 끼워 넣기
#   c.pro(2, 'prologue', 0, '원문 앞부분', '새 문장')
#   c.insdir(1, 15, W, 5, 'ash', 'exit')                # NPC enter/exit 연출 넣기
#   c.save()
import json
class Ch:
    """챕터 JSON 수정 헬퍼. old 는 원문 앞부분(prefix)으로 확인한다."""
    def __init__(self, path):
        self.path = path
        self.d = json.load(open(path))
        self.sc = {s['order']: s for s in self.d['scenarios']}
    def lst(self, o, rid, key='dialogue'):
        return next(r for r in self.sc[o]['rooms'] if r['id'] == rid)[key]
    def set(self, o, rid, key, idx, old, new=None, speaker=None, emotion=None):
        x = self.lst(o, rid, key)[idx]
        cur = x['content']['korean']
        assert cur.startswith(old), f'{o}/{rid}/{key}/{idx}: {cur!r} !startswith {old!r}'
        if new is not None: x['content']['korean'] = new
        if speaker: x['speaker'] = speaker
        if emotion: x['emotion'] = emotion
    def ins(self, o, rid, key, idx, speaker, emotion, text):
        self.lst(o, rid, key).insert(idx, {'type': 'speech', 'speaker': speaker, 'emotion': emotion, 'content': {'korean': text}})
    def pro(self, o, part, idx, old, new):
        arr = self.sc[o][part]['korean']
        assert arr[idx].startswith(old), (o, part, idx, arr[idx])
        arr[idx] = new
    def save(self):
        json.dump(self.d, open(self.path, 'w'), ensure_ascii=False, indent='\t')
        print('saved', self.path)
D, W, L = 'dialogue', 'win_dialogue', 'lose_dialogue'

def _dir(self, o, speaker, action):
    import copy
    for r in self.sc[o]['rooms']:
        for k in ('dialogue', 'win_dialogue', 'lose_dialogue'):
            for x in r.get(k, []):
                if x.get('type') == 'direction' and x.get('speaker') == speaker and x.get('action') == action:
                    return copy.deepcopy(x)
    for s in self.sc.values():
        for r in s['rooms']:
            for k in ('dialogue', 'win_dialogue', 'lose_dialogue'):
                for x in r.get(k, []):
                    if x.get('type') == 'direction' and x.get('action') == action:
                        y = copy.deepcopy(x); y['speaker'] = speaker; return y
    raise KeyError((speaker, action))
def insdir(self, o, rid, key, idx, speaker, action):
    self.lst(o, rid, key).insert(idx, _dir(self, o, speaker, action))
def isdir(self, o, rid, key, idx, speaker, action):
    x = self.lst(o, rid, key)[idx]
    assert x.get('type') == 'direction' and x.get('speaker') == speaker and x.get('action') == action, (o, rid, key, idx, x)
Ch.insdir = insdir; Ch.isdir = isdir
