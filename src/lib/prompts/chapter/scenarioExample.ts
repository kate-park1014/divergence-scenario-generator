// 출력 예시 (order 5 기준). 모델은 규칙보다 예시를 더 따라 하므로, 규칙과 어긋나는 내용을 넣지 않는다.
// 보여주는 것: 방 id 1/3/5/9/15, NPC enter, 대화 도중 exit(direction), character_any 한 줄 / character_1~4 혼잣말,
// 보스 룸 boss enter 없음, win_dialogue 의 계기 → 답 → 반응 → 결과, epilogue.
export const SCENARIO_EXAMPLE = `\
{
  prologue: {
    korean: [
      '세계수. 이 숲의 뿌리이자 심장.',
      '마을을 삼킨 포자는 모두 이곳에서 시작됐다.',
      '그리고 그 끝에는, 숲을 지켜온 자가 기다리고 있었다.',
    ],
  },
  epilogue: {
    korean: [
      '세계수의 포자가 멈추자, 숲은 오랫동안 잊었던 침묵을 되찾았다.',
      '잠식된 마을은 돌아오지 않는다.',
      '그래도 숲에 비가 내렸다. 수십 년 만에 처음으로.',
    ],
  },
  rooms: [
    {
      id: 1,
      dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '거대한 뿌리가 하늘을 가렸다. 뿌리 하나하나가 마을만 했다.' }, emotion: 'base' },
        { type: 'direction', action: 'enter', speaker: 'elara', spot: [3, 2], duration_ms: 500 },
        { type: 'speech', speaker: 'elara', content: { korean: '여기가 세계수야. 포자의 근원이 이 안에 있어.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '여길 끝내면 마을도 더는 잠식되지 않겠지.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_1', content: { korean: '…공기부터 무겁네.' }, emotion: 'sad' },
      ],
    },
    {
      id: 3,
      dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '뿌리 사이에 녹슨 수호대 방패가 박혀 있다.' }, emotion: 'base' },
        { type: 'direction', action: 'enter', speaker: 'elara', spot: [2, 3], duration_ms: 500 },
        { type: 'speech', speaker: 'elara', content: { korean: '옛 숲지기들의 방패야. 다들 세계수를 지키다 사라졌어.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'character_any', content: { korean: '숲을 지키던 자들이 왜 여기서 사라진 거지?' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '포자가 퍼진 날, 숲지기들은 마을을 버리고 이곳으로 도망쳤대.' }, emotion: 'base' },
      ],
    },
    {
      id: 5,
      dialogue: [
        { type: 'direction', action: 'enter', speaker: 'elara', spot: [3, 2], duration_ms: 500 },
        { type: 'speech', speaker: 'elara', content: { korean: '저 앞이 심장부야. 난 여기까지밖에 못 가.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'character_any', content: { korean: '괜찮아. 나머지는 우리가 간다.' }, emotion: 'base' },
        { type: 'direction', action: 'exit', speaker: 'elara', direction: 'down', duration_ms: 400 },
        { type: 'speech', speaker: 'character_2', content: { korean: '…발소리가 우리 것뿐이야.' }, emotion: 'sad' },
      ],
    },
    {
      id: 9,
      dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '심장부로 가는 길이 포자 덩굴에 막혀 있다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '덩굴이 우리를 밀어내고 있어. 누군가 막는 거야.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_3', content: { korean: '…심장이 귀까지 뛰어.' }, emotion: 'base' },
      ],
    },
    {
      id: 15,
      dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '세계수의 심장 앞, 이끼 갑옷을 두른 숲지기 대장이 일어선다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'boss', content: { korean: '마을 사람들인가. 이 숲을 또 베러 왔구나.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '포자를 멈추러 왔다. 비켜라!' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_4', content: { korean: '…저 덩굴, 살아 있는 것 같아.' }, emotion: 'sad' },
      ],
      win_dialogue: [
        { type: 'speech', speaker: 'boss', content: { korean: '마을은 숲을 베어 넓혀갔다. 우리가 아무리 막아도.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'boss', content: { korean: '그래서 포자를 풀었다. 숲을 지킬 방법이 그것뿐이었다.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '돌아가면 숲을 베지 말자고 마을에 전하겠다. 약속한다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'boss', content: { korean: '…숲을 지키겠다는 마을 사람은 처음이군.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'narrator', content: { korean: '숲지기 대장이 눈을 감자, 덩굴이 천천히 시들었다.' }, emotion: 'base' },
        { type: 'direction', action: 'enter', speaker: 'elara', spot: [3, 2], duration_ms: 500 },
        { type: 'speech', speaker: 'elara', content: { korean: '포자가 멈췄어. 숲이 숨을 쉬고 있어.' }, emotion: 'happy' },
      ],
      lose_dialogue: [
        { type: 'speech', speaker: 'boss', content: { korean: '돌아가라. 숲은 너희를 받아주지 않는다.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '…아직 끝나지 않았어. 다시 온다.' }, emotion: 'angry' },
      ],
    },
  ],
}`;
