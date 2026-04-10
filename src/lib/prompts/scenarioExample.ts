export const SCENARIO_EXAMPLE = `\
{
  prologue: {
    korean: [
      '세계수. 이 숲의 뿌리이자 심장.',
      '카인은 마지막 임무라고 했다.',
      '그러나 숲의 가장 깊은 곳에는 — 모든 것을 아는 자가 기다리고 있었다.',
      '그리고 진실은, 예상보다 훨씬 잔인했다.',
    ],
  },

  epilogue: {
    korean: [
      '세계수의 각성이 멈추자, 숲은 오랫동안 잊었던 침묵을 되찾았다.',
      '카인은 쓰러졌다. 그가 쌓아온 권력도, 공포도 함께.',
      '리엔 마을은 돌아오지 않는다. 잠식된 것들은 되돌릴 수 없었다.',
      '그래도 — 숲에 비가 내렸다. 수십 년 만에 처음으로.',
      '복수는 끝났다. 근데 이상하게도, 아직 할 일이 남은 것 같았다.',
    ],
  },

  rooms: [
    {
      id: 1,
      dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '거대한 나무가 하늘을 가렸다. 뿌리 하나하나가 마을만 했다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '이게 세계수야?' }, emotion: 'base' },
        { type: 'direction', action: 'enter', speaker: 'kain', duration_ms: 500, spot: [4, 3] },
        { type: 'speech', speaker: 'kain', content: { korean: '그래. 이 안에 포자의 근원이 있어. 여길 끝내면 전부 끝나.' }, emotion: 'base' },
        { type: 'direction', action: 'exit', speaker: 'kain', duration_ms: 400 },
      ],
    },
    {
      id: 3,
      dialogue: [
        { type: 'direction', action: 'enter', speaker: 'elara', duration_ms: 600, spot: [2, 3] },
        { type: 'speech', speaker: 'elara', content: { korean: '…왔구나. 기다렸어.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '누구야.' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '엘라라야. 이 숲에서 가장 오래 산 요정.' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '너희한테 해줄 말이 있어.' }, emotion: 'sad' },
      ],
    },
    {
      id: 5,
      dialogue: [
        { type: 'direction', action: 'enter', speaker: 'elara', duration_ms: 400, spot: [2, 3] },
        { type: 'speech', speaker: 'elara', content: { korean: '카인은 포자를 통제하는 기술을 갖고 있어.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '그 말은 리라한테도 들었어.' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '리라가 맞아. 카인은 포자를 이용해서 마을을 없애왔어.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'elara', content: { korean: '개간지를 넓히고, 수호대의 공포를 유지하고, 권력을 키우려고.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '그럼 — 우리 마을도.' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '…응. 카인이 보낸 거야.' }, emotion: 'sad' },
      ],
    },
    {
      id: 7,
      dialogue: [
        { type: 'direction', action: 'enter', speaker: 'elara', duration_ms: 400, spot: [2, 3] },
        { type: 'speech', speaker: 'elara', content: { korean: '더 있어. 카인이 너희를 수호대에 데려온 것도 우연이 아니야.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '…무슨 소리야.' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '마을 잠식은 미끼였어. 너희를 끌어들이기 위한.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '처음부터 이용한 거야?' }, emotion: 'angry' },
        { type: 'speech', speaker: 'elara', content: { korean: '세계수를 각성시키려면 강한 분노가 필요해. 카인은 그걸 알고 있었어.' }, emotion: 'sad' },
      ],
    },
    {
      id: 9,
      dialogue: [
        { type: 'direction', action: 'enter', speaker: 'elara', duration_ms: 400, spot: [2, 3] },
        { type: 'speech', speaker: 'elara', content: { korean: '세계수가 각성하면 — 이 숲 전체가 카인의 무기가 돼.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '막을 수 있어?' }, emotion: 'base' },
        { type: 'speech', speaker: 'elara', content: { korean: '카인을 쓰러뜨리면 각성이 멈춰. 근데 — 카인은 이미 알고 있어. 네가 여기 있다는 걸.' }, emotion: 'sad' },
      ],
    },
    {
      id: 10,
      dialogue: [
        { type: 'speech', speaker: 'character_any', content: { korean: '처음부터 미끼였어.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'character_any', content: { korean: '복수하고 싶어서 그 손을 잡았는데.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'character_any', content: { korean: '…근데 후회는 없어. 진실을 알았으니까.' }, emotion: 'angry' },
      ],
    },
    {
      id: 14,
      dialogue: [
	   { type: 'direction', action: 'enter', speaker: 'elara', duration_ms: 500, spot: [3, 3] },
		{ type: 'speech', speaker: 'elara', content: { korean: '있잖아... ' }, emotion: 'angry' },
        { type: 'direction', action: 'enter', speaker: 'kain', duration_ms: 500, spot: [4, 3] },
        { type: 'direction', action: 'exit', speaker: 'elara', duration_ms: 400 },
		 { type: 'speech', speaker: 'elara', content: { korean: '있잖아... ' }, emotion: 'angry' },
        { type: 'speech', speaker: 'kain', content: { korean: '엘라라랑 얘기했군. 다 들었어?' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '우리 마을을 없앤 게 너야.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'kain', content: { korean: '그래.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '처음부터 미끼로 쓴 거야.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'kain', content: { korean: '그것도 맞아. 세계수를 각성시키려면 강한 분노를 가진 자가 필요했거든.' }, emotion: 'base' },
        { type: 'speech', speaker: 'kain', content: { korean: '근데 잘 됐잖아. 넌 강해졌고, 여기까지 왔어.' }, emotion: 'happy' },
        { type: 'speech', speaker: 'character_any', content: { korean: '….' }, emotion: 'angry' },
        { type: 'direction', action: 'exit', speaker: 'kain', duration_ms: 400 },
      ],
    },

        { type: 'speech', speaker: 'character_any', content: { korean: '카인!' }, emotion: 'angry' },
        { type: 'direction', action: 'enter', speaker: 'kain', duration_ms: 500, spot: [4, 3] },
        { type: 'speech', speaker: 'kain', content: { korean: '…대단해. 진짜로.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '못 도망가.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'kain', content: { korean: '…두고 봐.' }, emotion: 'base' },
        { type: 'direction', action: 'exit', speaker: 'kain', duration_ms: 300 },
        { type: 'speech', speaker: 'narrator', content: { korean: '어둠 속으로 사라지는 뒷모습. 잡을 수 없었다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '…끝난 게 아니구나.' }, emotion: 'sad' },
        { type: 'speech', speaker: 'narrator', content: { korean: '그래도 — 숲에 비가 내렸다. 오랫동안 잊혀진 소리였다.' }, emotion: 'base' },
      ],
      lose_dialogue: [
        { type: 'speech', speaker: 'narrator', content: { korean: '세계수의 뿌리가 모든 것을 삼켰다.' }, emotion: 'base' },
        { type: 'speech', speaker: 'character_any', content: { korean: '…아직 끝나지 않았어.' }, emotion: 'angry' },
        { type: 'speech', speaker: 'kain', content: { korean: '포기하지 않는군. …재밌어.' }, emotion: 'base' },
      ],
    },
  ]
}`;
