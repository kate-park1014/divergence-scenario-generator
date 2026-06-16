export const scenario_snowy_haraldr_61_02 = {
	"scenario_id": "snowy_haraldr_61_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폭풍의 한가운데. 시간마저 얼어붙은 듯했다.",
						"english": "In the heart of the storm. Even time seemed to freeze.",
						"japanese": "嵐の真っただ中。時間さえも凍りついたようだった。",
						"chinese": "风暴的中心。连时间都仿佛冻结了。",
						"french": "Au cœur de la tempête. Même le temps semblait figé.",
						"spanish": "En el ojo de la tormenta. Incluso el tiempo parecía congelado.",
						"vietnamese": "Ở giữa tâm bão. Ngay cả thời gian cũng dường như đóng băng.",
						"thai": "ใจกลางพายุ. แม้แต่เวลาก็ดูเหมือนจะหยุดนิ่ง",
						"hindi": "तूफान के केंद्र में। मानो समय भी जम गया हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여긴… 계속 똑같은 자리잖아.",
						"english": "This place... it's the same spot again.",
						"japanese": "ここ…また同じ場所じゃないか。",
						"chinese": "这里…还是同一个地方啊。",
						"french": "Ici... c'est encore le même endroit.",
						"spanish": "Este lugar... es el mismo sitio de siempre.",
						"vietnamese": "Chỗ này… lại là cùng một chỗ cũ rồi.",
						"thai": "ที่นี่... ก็ยังเป็นที่เดิมนี่นา",
						"hindi": "यह जगह... फिर वही जगह है।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 폭풍… 이상하군. 날 부르는 것 같아.",
						"english": "This storm... it's strange. It feels like it's calling to me.",
						"japanese": "この嵐…奇妙だ。私を呼んでいるようだ。",
						"chinese": "这场风暴…真奇怪。它好像在召唤我。",
						"french": "Cette tempête... c'est étrange. On dirait qu'elle m'appelle.",
						"spanish": "Esta tormenta... es extraña. Parece que me llama.",
						"vietnamese": "Cơn bão này… lạ thật. Dường như nó đang gọi tôi.",
						"thai": "พายุนี้... แปลกจริง เหมือนกำลังเรียกข้าอยู่",
						"hindi": "यह तूफान... अजीब है। लगता है यह मुझे बुला रहा है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 이바르?",
						"english": "What are you talking about, Ivar?",
						"japanese": "何を言ってるんだ、イヴァル？",
						"chinese": "你在说什么，伊瓦尔？",
						"french": "De quoi parles-tu, Ivar ?",
						"spanish": "¿De qué hablas, Ivar?",
						"vietnamese": "Anh đang nói gì vậy, Ivar?",
						"thai": "เจ้าพูดอะไรน่ะ ไอบาร์?",
						"hindi": "क्या कह रहे हो, इवार?"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "싸움의 냄새가 나. 영원히 이어질 싸움의.",
						"english": "I smell battle. A battle that will last forever.",
						"japanese": "戦いの匂いがする。永遠に続く戦いの。",
						"chinese": "我闻到了战斗的气息。一场将永远持续的战斗。",
						"french": "Je sens l'odeur du combat. Un combat qui durera éternellement.",
						"spanish": "Huelo a batalla. Una batalla que durará para siempre.",
						"vietnamese": "Tôi ngửi thấy mùi chiến tranh. Một cuộc chiến sẽ kéo dài mãi mãi.",
						"thai": "ข้าได้กลิ่นอายของการต่อสู้ การต่อสู้ที่จะไม่มีวันสิ้นสุด",
						"hindi": "मुझे युद्ध की गंध आ रही है। एक ऐसा युद्ध जो हमेशा चलेगा।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "happy"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폭풍의 소용돌이가 더 강해졌다.",
						"english": "The storm's vortex grew stronger.",
						"japanese": "嵐の渦はさらに強くなった。",
						"chinese": "风暴的漩涡变得更强了。",
						"french": "Le vortex de la tempête devint plus fort.",
						"spanish": "El vórtice de la tormenta se hizo más fuerte.",
						"vietnamese": "Xoáy lốc của cơn bão đã mạnh hơn.",
						"thai": "พายุหมุนทวีความรุนแรงขึ้น",
						"hindi": "तूफान का भंवर और मजबूत हो गया।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "하! 보이나? 저 환영이?",
						"english": "Ha! Do you see it? That illusion?",
						"japanese": "は！見えるか？あの幻影が？",
						"chinese": "哈！看到了吗？那个幻象？",
						"french": "Ha ! Tu le vois ? Ce fantôme ?",
						"spanish": "¡Ja! ¿Lo ves? ¿Esa ilusión?",
						"vietnamese": "Ha! Ngươi thấy nó không? Ảo ảnh đó?",
						"thai": "ฮ่า! เห็นไหม? ภาพหลอนนั่น?",
						"hindi": "हा! क्या तुम्हें वो दिख रहा है? वो माया?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "환영? 아무것도 없는데.",
						"english": "Illusion? There's nothing there.",
						"japanese": "幻影？何も見えないが。",
						"chinese": "幻象？什么都没有啊。",
						"french": "Un fantôme ? Il n'y a rien.",
						"spanish": "¿Ilusión? No hay nada.",
						"vietnamese": "Ảo ảnh ư? Chẳng có gì cả.",
						"thai": "ภาพหลอน? ไม่มีอะไรเลย.",
						"hindi": "माया? वहाँ कुछ भी नहीं है।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "여기선… 영원히 싸울 수 있다. 끝없이 강해질 수 있어!",
						"english": "Here... we can fight forever. Grow endlessly stronger!",
						"japanese": "ここでは…永遠に戦える。無限に強くなれる！",
						"chinese": "在这里…我们可以永远战斗。可以变得无止境地强大！",
						"french": "Ici... on peut se battre éternellement. Devenir infiniment plus fort !",
						"spanish": "Aquí... podemos luchar para siempre. ¡Podemos hacernos infinitamente más fuertes!",
						"vietnamese": "Ở đây... chúng ta có thể chiến đấu mãi mãi. Trở nên mạnh mẽ không ngừng!",
						"thai": "ที่นี่... เราสามารถต่อสู้ได้ตลอดไป. แข็งแกร่งขึ้นไม่รู้จบ!",
						"hindi": "यहाँ... हम हमेशा के लिए लड़ सकते हैं। अनंत तक मजबूत हो सकते हैं!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이바르! 정신 차려!",
						"english": "Ivar! Snap out of it!",
						"japanese": "イヴァル！しっかりしろ！",
						"chinese": "伊瓦尔！清醒过来！",
						"french": "Ivar ! Reprends tes esprits !",
						"spanish": "¡Ivar! ¡Recupera la cordura!",
						"vietnamese": "Ivar! Tỉnh táo lại đi!",
						"thai": "อิวาร์! ตั้งสติหน่อย!",
						"hindi": "इवर! होश में आओ!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "더 가까이! 저곳에 강함의 끝이 있다!",
						"english": "Closer! The peak of strength lies there!",
						"japanese": "もっと近くへ！あそこに強さの極みがある！",
						"chinese": "再近一点！那里是力量的尽头！",
						"french": "Plus près ! Le summum de la force est là-bas !",
						"spanish": "¡Más cerca! ¡Allí reside el límite de la fuerza!",
						"vietnamese": "Gần hơn nữa! Nơi đó có đỉnh cao của sức mạnh!",
						"thai": "ใกล้เข้ามา! ที่นั่นคือจุดสูงสุดของความแข็งแกร่ง!",
						"hindi": "और करीब! वहाँ शक्ति का अंत है!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이바르, 안 돼! 저건 함정이야!",
						"english": "Ivar, no! It's a trap!",
						"japanese": "イヴァル、だめだ！あれは罠だ！",
						"chinese": "伊瓦尔，不行！那是个陷阱！",
						"french": "Ivar, non ! C'est un piège !",
						"spanish": "¡Ivar, no! ¡Es una trampa!",
						"vietnamese": "Ivar, không được! Đó là một cái bẫy!",
						"thai": "อิวาร์, ไม่ได้นะ! นั่นมันกับดัก!",
						"hindi": "इवर, नहीं! वह एक जाल है!"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "폭풍 속에서 무릎 꿇는 전사의 모습이 잔향처럼 스쳐 지나갔다.",
						"english": "The image of a warrior kneeling in the storm flickered like an afterimage.",
						"japanese": "嵐の中で膝をつく戦士の姿が残像のように通り過ぎた。",
						"chinese": "暴风中，战士跪下的身影如残像般一闪而过。",
						"french": "L'image d'un guerrier agenouillé dans la tempête a traversé l'esprit comme une réminiscence.",
						"spanish": "La imagen de un guerrero arrodillado en la tormenta pasó como un eco.",
						"vietnamese": "Bóng dáng một chiến binh quỳ gối trong bão tố lướt qua như một dư ảnh.",
						"thai": "ภาพของนักรบที่คุกเข่าในพายุพัดผ่านไปราวกับภาพติดตา.",
						"hindi": "तूफान में घुटनों के बल बैठे एक योद्धा की छवि एक अवशेष की तरह गुज़र गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저 전사… 싸움의 끝에서조차 포기하지 않는군.",
						"english": "That warrior... doesn't give up, even at the fight's end.",
						"japanese": "あの戦士…戦いの終わりでさえ諦めない。",
						"chinese": "那个战士……即使在战斗的最后也从不放弃。",
						"french": "Ce guerrier... n'abandonne pas, même à la fin du combat.",
						"spanish": "Ese guerrero... no se rinde, ni siquiera al final de la batalla.",
						"vietnamese": "Chiến binh đó... không bỏ cuộc, ngay cả khi trận chiến kết thúc.",
						"thai": "นักรบคนนั้น... ไม่ยอมแพ้ แม้ในตอนจบของการต่อสู้.",
						"hindi": "वो योद्धा... युद्ध के अंत में भी हार नहीं मानता।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 당신의 모습이라고 생각해?",
						"english": "Do you think that's what you look like?",
						"japanese": "それがあなたの姿だとでも？",
						"chinese": "你觉得那就是你的样子吗？",
						"french": "Tu penses que c'est toi ?",
						"spanish": "¿Crees que esa es tu imagen?",
						"vietnamese": "Ngươi nghĩ đó là hình ảnh của ngươi ư?",
						"thai": "คุณคิดว่านั่นคือตัวคุณเหรอ?",
						"hindi": "क्या तुम्हें लगता है कि वह तुम्हारी छवि है?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "이 발걸음이, 강함의 증명이다!",
						"english": "These steps are proof of strength!",
						"japanese": "この足跡こそが、強さの証明だ！",
						"chinese": "这些步伐，就是力量的证明！",
						"french": "Ces pas sont la preuve de ma force !",
						"spanish": "¡Estos pasos son la prueba de mi fuerza!",
						"vietnamese": "Bước chân này chính là minh chứng cho sức mạnh!",
						"thai": "ทุกก้าวเดินนี้ คือเครื่องพิสูจน์ความแข็งแกร่ง!",
						"hindi": "ये कदम, मेरी शक्ति का प्रमाण हैं!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이바르, 멈춰! 이대로 가면 돌아올 수 없어!",
						"english": "Ivar, stop! If you go on like this, you can't come back!",
						"japanese": "イヴァル、止まれ！このままでは戻れないぞ！",
						"chinese": "伊瓦尔，住手！这样下去就回不来了！",
						"french": "Ivar, arrête ! Si tu continues comme ça, tu ne pourras pas revenir !",
						"spanish": "¡Ivar, detente! ¡Si sigues así, no podrás regresar!",
						"vietnamese": "Ivar, dừng lại! Cứ thế này thì không thể quay lại được!",
						"thai": "ไอวาร์ หยุดนะ! ถ้าไปต่อแบบนี้จะกลับมาไม่ได้!",
						"hindi": "इवार, रुको! अगर तुम ऐसे ही चलते रहे तो वापस नहीं आ पाओगे!"
					},
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "돌아올 필요 없지. 영원히 싸울 수 있다면!",
						"english": "No need to come back. If I can fight forever!",
						"japanese": "戻る必要はない。永遠に戦えるのなら！",
						"chinese": "没必要回来。如果能永远战斗的话！",
						"french": "Pas besoin de revenir. Si je peux me battre éternellement !",
						"spanish": "¡No hay necesidad de volver si puedo luchar para siempre!",
						"vietnamese": "Không cần quay lại. Nếu có thể chiến đấu mãi mãi!",
						"thai": "ไม่จำเป็นต้องกลับ ถ้าได้สู้ไปตลอดกาล!",
						"hindi": "वापस आने की ज़रूरत नहीं। अगर मैं हमेशा के लिए लड़ सकता हूँ!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폭풍의 중심은 모든 길을 삼키는 뫼비우스의 띠였다.",
						"english": "The eye of the storm was a Möbius strip, swallowing all paths.",
						"japanese": "嵐の中心は、すべての道を飲み込むメビウスの帯だった。",
						"chinese": "风暴的中心是一个吞噬所有道路的莫比乌斯带。",
						"french": "Le cœur de la tempête était un ruban de Möbius, dévorant tous les chemins.",
						"spanish": "El centro de la tormenta era una cinta de Möbius que devoraba todos los caminos.",
						"vietnamese": "Tâm bão là một dải Möbius nuốt chửng mọi con đường.",
						"thai": "ใจกลางพายุคือแถบเมอบิอุสที่กลืนกินทุกเส้นทาง",
						"hindi": "तूफान का केंद्र एक मोबियस पट्टी थी, जो सभी रास्तों को निगल रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "출구가 없어!",
						"english": "No exit!",
						"japanese": "出口がない！",
						"chinese": "没有出口！",
						"french": "Pas de sortie !",
						"spanish": "¡No hay salida!",
						"vietnamese": "Không có lối thoát!",
						"thai": "ไม่มีทางออก!",
						"hindi": "कोई रास्ता नहीं!"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "크하하! 영원히 싸워라! 죽음조차 너의 무대일 뿐!",
						"english": "Kwahaha! Fight forever! Even death is but your stage!",
						"japanese": "クハハ！永遠に戦え！死さえもお前の舞台に過ぎぬ！",
						"chinese": "哈哈哈！永远战斗吧！就连死亡也不过是你的舞台！",
						"french": "Hahaha ! Bats-toi pour l'éternité ! Même la mort n'est qu'une scène pour toi !",
						"spanish": "¡Jajaja! ¡Lucha para siempre! ¡Incluso la muerte es solo tu escenario!",
						"vietnamese": "Khà khà! Hãy chiến đấu mãi mãi! Ngay cả cái chết cũng chỉ là sân khấu của ngươi!",
						"thai": "คิกๆๆ! จงต่อสู้ตลอดไป! แม้แต่ความตายก็เป็นเพียงเวทีของเจ้า!",
						"hindi": "हाहाहा! हमेशा लड़ो! मौत भी बस तुम्हारा मंच है!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…다시 일어설 것이다. 진정한 강함은, 이런 것이 아니야!",
						"english": "...I will rise again. True strength is not this!",
						"japanese": "…再び立ち上がるだろう。真の強さとは、こういうものではない！",
						"chinese": "……我会再次站起来的。真正的强大，绝非如此！",
						"french": "...Je me relèverai. La vraie force, ce n'est pas ça !",
						"spanish": "...Me levantaré de nuevo. ¡La verdadera fuerza no es esto!",
						"vietnamese": "...Ta sẽ đứng dậy lần nữa. Sức mạnh thật sự không phải thế này!",
						"thai": "...ข้าจะลุกขึ้นยืนอีกครั้ง ความแข็งแกร่งที่แท้จริงไม่ใช่อย่างนี้!",
						"hindi": "...मैं फिर से खड़ा होऊंगा। सच्ची ताकत यह नहीं है!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 결국 이겼나. 하지만… 싸움은… 끝나지 않아….",
						"english": "Kwahaha... So I won. But... the fight... isn't over yet...",
						"japanese": "クハハ…ついに勝ったか。だが…戦いは…終わらない…。",
						"chinese": "哈哈哈……终究还是我赢了。但是……战斗……永无止境……",
						"french": "Hahaha… Alors j'ai gagné. Mais… le combat… n'est pas terminé…",
						"spanish": "Jajaja... Así que gané. Pero... la lucha... no ha terminado...",
						"vietnamese": "Khà khà… Cuối cùng cũng thắng. Nhưng… cuộc chiến… chưa kết thúc…",
						"thai": "คิกๆๆ... ในที่สุดก็ชนะแล้วงั้นรึ แต่ว่า... การต่อสู้... ยังไม่จบลง...",
						"hindi": "हाहाहा... तो मैं जीत गया। पर... लड़ाई... अभी खत्म नहीं हुई..."
					}
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이딴 환상에… 내가 속을 줄 알았더냐!",
						"english": "Did you think... I'd fall for such an illusion?!",
						"japanese": "こんな幻想に…私が騙されるとでも思ったか！",
						"chinese": "你以为……我会上这种幻象的当吗？！",
						"french": "Tu pensais… que je me ferais avoir par une telle illusion ?!",
						"spanish": "¿Creíste... que caería en una ilusión así?!",
						"vietnamese": "Ngươi nghĩ… ta sẽ bị lừa bởi ảo ảnh này ư?!",
						"thai": "คิดรึว่า... ข้าจะหลงกลกับภาพลวงตาแบบนี้?!",
						"hindi": "क्या तुम्हें लगा... मैं ऐसे भ्रम में फंस जाऊंगा?!"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이바르! 괜찮아?",
						"english": "Ivar! Are you okay?",
						"japanese": "イヴァール！大丈夫か？",
						"chinese": "伊瓦尔！你没事吧？",
						"french": "Ivar ! Ça va ?",
						"spanish": "¡Ivar! ¿Estás bien?",
						"vietnamese": "Ivar! Cậu không sao chứ?",
						"thai": "ไอบาร์! ไม่เป็นไรนะ?",
						"hindi": "इवर! तुम ठीक हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "...잠깐… 흔들렸군. 하지만 이제 진실을 봐야 한다.",
						"english": "...I wavered... for a moment. But now, I must face the truth.",
						"japanese": "…一瞬…揺らいだか。だが、もう真実を見るべきだ。",
						"chinese": "……刚才……我动摇了。但现在，必须面对真相。",
						"french": "...J'ai vacillé... un instant. Mais maintenant, je dois affronter la vérité.",
						"spanish": "...Vacilé... por un momento. Pero ahora, debo ver la verdad.",
						"vietnamese": "...Ta đã dao động... một khoảnh khắc. Nhưng giờ, ta phải đối mặt với sự thật.",
						"thai": "...เมื่อกี้... ข้าลังเลไปชั่วขณะ แต่ตอนนี้ถึงเวลาที่จะต้องเผชิญหน้ากับความจริงแล้ว",
						"hindi": "...मैं... एक पल के लिए डगमगा गया। पर अब, मुझे सच्चाई देखनी होगी।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "폭풍은 잠시 잦아들었지만, 그 안의 진실은 아직 드러나지 않았다.",
						"english": "The storm has subsided for a moment, but the truth within it is yet to be revealed.",
						"japanese": "嵐は一時的に収まったが、その中の真実はまだ明らかになっていない。",
						"chinese": "风暴暂时平息，但其中的真相尚未揭露。",
						"french": "La tempête s'est calmée un instant, mais la vérité qu'elle renferme n'a pas encore été révélée.",
						"spanish": "La tormenta ha amainado por un momento, pero la verdad que esconde aún no ha sido revelada.",
						"vietnamese": "Cơn bão đã tạm lắng, nhưng sự thật ẩn chứa bên trong vẫn chưa được hé lộ.",
						"thai": "พายุสงบลงชั่วขณะ แต่ความจริงที่อยู่ภายในยังไม่ถูกเปิดเผย",
						"hindi": "तूफान कुछ देर के लिए थम गया है, पर उसके अंदर की सच्चाई अभी सामने नहीं आई है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "폭풍의 심장이 거세게 뛰었다. 거대한 그림자가 나타났다.",
						"english": "The storm's heart pounded violently. A colossal shadow appeared.",
						"japanese": "嵐の心臓が激しく脈打った。巨大な影が現れた。",
						"chinese": "风暴之心剧烈跳动。一个巨大的影子出现了。",
						"french": "Le cœur de la tempête battait violemment. Une ombre gigantesque apparut.",
						"spanish": "El corazón de la tormenta latía con fuerza. Una sombra gigantesca apareció.",
						"vietnamese": "Trái tim bão đập dữ dội. Một cái bóng khổng lồ xuất hiện.",
						"thai": "ใจกลางพายุเต้นแรง เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "तूफान का दिल ज़ोरों से धड़क उठा। एक विशालकाय परछाई प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "왔는가, 강함을 좇는 자여.",
						"english": "So you've come, seeker of strength.",
						"japanese": "来たか、強さを求める者よ。",
						"chinese": "你来了，追求力量之人。",
						"french": "Ainsi tu es venu, toi qui cherches la force.",
						"spanish": "Has llegado, buscador de fuerza.",
						"vietnamese": "Ngươi đã đến rồi sao, kẻ tìm kiếm sức mạnh.",
						"thai": "มาแล้วสินะ ผู้แสวงหาความแข็งแกร่ง",
						"hindi": "तुम आ गए, शक्ति के साधक।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "네가 그 영원한 싸움의 주인인가?",
						"english": "Are you the master of that eternal battle?",
						"japanese": "お前がその永遠の戦いの主か？",
						"chinese": "你就是那永恒之战的主人吗？",
						"french": "Es-tu le maître de cette bataille éternelle ?",
						"spanish": "¿Eres tú el maestro de esa batalla eterna?",
						"vietnamese": "Ngươi là chủ nhân của cuộc chiến vĩnh cửu đó sao?",
						"thai": "เจ้าคือเจ้าของศึกนิรันดร์นั้นรึ?",
						"hindi": "क्या तुम उस अनंत युद्ध के स्वामी हो?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나? 나는 너의 욕망 그 자체. 끝없는 전장이다.",
						"english": "Me? I am your desire itself. An endless battlefield.",
						"japanese": "私？私はお前の欲望そのもの。終わりのない戦場だ。",
						"chinese": "我？我就是你欲望的化身。永无止境的战场。",
						"french": "Moi ? Je suis ton désir même. Un champ de bataille sans fin.",
						"spanish": "¿Yo? Yo soy tu propio deseo. Un campo de batalla interminable.",
						"vietnamese": "Ta ư? Ta chính là ham muốn của ngươi. Một chiến trường không hồi kết.",
						"thai": "ข้า? ข้าคือความปรารถนาของเจ้าเอง สนามรบที่ไม่มีวันสิ้นสุด",
						"hindi": "मैं? मैं तुम्हारी इच्छा का ही स्वरूप हूँ। एक अंतहीन युद्धक्षेत्र।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이바르! 싸우지 마! 이건 진짜가 아니야!",
						"english": "Ivar! Don't fight! This isn't real!",
						"japanese": "イヴァル！戦うな！これは本物じゃない！",
						"chinese": "伊瓦尔！别打了！这不是真的！",
						"french": "Ivar ! Ne te bats pas ! Ce n'est pas réel !",
						"spanish": "¡Ivar! ¡No luches! ¡Esto no es real!",
						"vietnamese": "Ivar! Đừng chiến đấu! Đây không phải sự thật!",
						"thai": "ไอวาร์! อย่าสู้! นี่ไม่ใช่เรื่องจริง!",
						"hindi": "इवार! लड़ो मत! यह असली नहीं है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기선… 끝없이 싸울 수 있다. 네가 원하는 대로.",
						"english": "Here... you can fight endlessly. As you wish.",
						"japanese": "ここでは… 終わりなく戦える。お前が望むように。",
						"chinese": "在这里……你可以无止境地战斗。如你所愿。",
						"french": "Ici... tu peux te battre sans fin. Comme tu le désires.",
						"spanish": "Aquí... puedes luchar sin fin. Como desees.",
						"vietnamese": "Ở đây... ngươi có thể chiến đấu bất tận. Như ngươi mong muốn.",
						"thai": "ที่นี่... เจ้าสามารถต่อสู้ได้ไม่รู้จบ ตามที่เจ้าปรารถนา",
						"hindi": "यहाँ... तुम अंतहीन रूप से लड़ सकते हो। जैसा तुम चाहो।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"멈추지 않는 마법 폭풍. 그 안에서 시간은 의미를 잃었다.",
			"여기서는 모든 것이 되풀이된다. 끝없는 싸움, 끝없는 죽음.",
			"그리고 그는, 가장 강한 자만이 가질 수 있는 유혹을 보았다.",
			"영원히 싸울 수 있는 곳. 전사의 심장을 울리는 약속이었다."
		],
		"english": [
			"The ceaseless magic storm. Within it, time lost all meaning.",
			"Here, everything repeats. Endless battles, endless deaths.",
			"And he saw the temptation that only the strongest could possess.",
			"A place to fight forever. It was a promise that stirred a warrior's heart."
		],
		"japanese": [
			"止まない魔法の嵐。その中で、時間は意味を失った。",
			"ここでは全てが繰り返される。終わりのない戦い、終わりのない死。",
			"そして彼は、最強の者だけが持ちうる誘惑を見た。",
			"永遠に戦い続けられる場所。それは戦士の心を揺さぶる約束だった。"
		],
		"chinese": [
			"不休的魔法风暴。在其中，时间失去了意义。",
			"在这里，一切都重复着。无尽的战斗，无尽的死亡。",
			"然后他看到了只有最强者才能拥有的诱惑。",
			"一个可以永远战斗的地方。这是一个激荡战士心灵的承诺。"
		],
		"french": [
			"La tempête magique incessante. En son sein, le temps perdait tout sens.",
			"Ici, tout se répète. Des batailles sans fin, des morts sans fin.",
			"Et il vit la tentation que seuls les plus forts pouvaient posséder.",
			"Un endroit pour combattre éternellement. C'était une promesse qui faisait vibrer le cœur d'un guerrier."
		],
		"spanish": [
			"La incesante tormenta mágica. Dentro de ella, el tiempo perdió todo significado.",
			"Aquí, todo se repite. Batallas interminables, muertes interminables.",
			"Y él vio la tentación que solo los más fuertes podían poseer.",
			"Un lugar para luchar eternamente. Era una promesa que resonó en el corazón de un guerrero."
		],
		"vietnamese": [
			"Cơn bão ma thuật không ngừng. Trong nó, thời gian mất hết ý nghĩa.",
			"Ở đây, mọi thứ lặp lại. Những trận chiến bất tận, những cái chết bất tận.",
			"Và anh ta đã nhìn thấy sự cám dỗ mà chỉ những kẻ mạnh nhất mới có thể sở hữu.",
			"Một nơi để chiến đấu mãi mãi. Đó là một lời hứa lay động trái tim chiến binh."
		],
		"thai": [
			"พายุเวทมนตร์ไม่สิ้นสุด ภายในนั้น เวลาได้สูญสิ้นความหมาย",
			"ที่นี่ ทุกสิ่งวนเวียนซ้ำรอย การต่อสู้ไม่สิ้นสุด ความตายไม่สิ้นสุด",
			"และเขาได้เห็นความเย้ายวนที่เพียงผู้ที่แข็งแกร่งที่สุดเท่านั้นที่จะได้ครอบครอง",
			"สถานที่ที่สามารถต่อสู้ได้ตลอดกาล มันเป็นคำสัญญาที่ปลุกเร้าหัวใจของนักรบ"
		],
		"hindi": [
			"न रुकने वाला जादुई तूफान। उसके भीतर, समय का कोई अर्थ नहीं रहा।",
			"यहां, सब कुछ दोहराया जाता है। अंतहीन लड़ाई, अंतहीन मौतें।",
			"और उसने वह लालच देखा जो केवल सबसे मजबूत ही पा सकते थे।",
			"हमेशा के लिए लड़ने की जगह। यह एक ऐसा वादा था जिसने एक योद्धा के दिल को झकझोर दिया।"
		]
	}
} as const;
