export const scenario_snowy_anya_14_02 = {
	"scenario_id": "snowy_anya_14_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "어제의 능선을 넘어, 탐험대는 더 깊은 설원으로 들어섰다.",
						"english": "Beyond yesterday's ridge, the expedition ventured deeper into the snowfields.",
						"japanese": "昨日の稜線を越え、探検隊はさらに深い雪原へと足を踏み入れた。",
						"chinese": "越过昨日的山脊，探险队深入了更远的雪原。",
						"french": "Au-delà de la crête d'hier, l'expédition s'enfonça plus profondément dans les champs de neige.",
						"spanish": "Más allá de la cresta de ayer, la expedición se adentró más en los campos de nieve.",
						"vietnamese": "Vượt qua rặng núi hôm qua, đoàn thám hiểm tiến sâu hơn vào cánh đồng tuyết.",
						"thai": "เมื่อข้ามสันเขาเมื่อวาน ทีมสำรวจก็มุ่งหน้าลึกเข้าไปในทุ่งหิมะ",
						"hindi": "कल की चोटी को पार कर, अभियान दल बर्फीले मैदानों में और गहराई तक चला गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기도 서리꽃이 피었네. 빛의 자취를 따라.",
						"english": "Frost blossoms here too. Following the traces of light.",
						"japanese": "ここにも霜の花が咲いている。光の跡を辿って。",
						"chinese": "这里也开着霜花。循着光的轨迹。",
						"french": "Des fleurs de givre ici aussi. Suivant les traces de lumière.",
						"spanish": "Aquí también florecen las flores de escarcha. Siguiendo las huellas de la luz.",
						"vietnamese": "Hoa băng giá cũng nở ở đây. Theo dấu vết của ánh sáng.",
						"thai": "ที่นี่ก็มีดอกไม้น้ำแข็งบาน ตามร่องรอยของแสงสว่าง",
						"hindi": "यहाँ भी बर्फीले फूल खिले हैं। प्रकाश के निशान का अनुसरण करते हुए।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이상하군. 이 길… 이미 지나온 것 같지 않나?",
						"english": "Strange. This path... haven't we been here before?",
						"japanese": "おかしいな。この道…もう通ったことがあるような？",
						"chinese": "奇怪。这条路…我们是不是已经走过了？",
						"french": "Étrange. Ce chemin… n'avons-nous pas déjà été ici ?",
						"spanish": "Extraño. Este camino… ¿no lo hemos recorrido ya?",
						"vietnamese": "Lạ thật. Con đường này… hình như chúng ta đã đi qua rồi phải không?",
						"thai": "แปลกนะ ทางนี้... เหมือนเราเคยผ่านมาแล้วไม่ใช่เหรอ?",
						"hindi": "अजीब है। यह रास्ता... क्या हम पहले ही यहाँ से गुज़र चुके हैं?"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "응? 그런가?",
						"english": "Huh? Really?",
						"japanese": "え？そうなの？",
						"chinese": "嗯？是吗？",
						"french": "Hein ? Vraiment ?",
						"spanish": "¿Eh? ¿En serio?",
						"vietnamese": "Hả? Thật sao?",
						"thai": "หือ? อย่างนั้นเหรอ?",
						"hindi": "हूँ? सच में?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "느낌이 그래. 뭔가 익숙해.",
						"english": "It feels that way. Something feels familiar.",
						"japanese": "そんな気がするんだ。何だか見覚えがある。",
						"chinese": "我有这种感觉。总觉得很熟悉。",
						"french": "C'est mon impression. Quelque chose me semble familier.",
						"spanish": "Me da esa sensación. Algo me resulta familiar.",
						"vietnamese": "Cảm giác là vậy. Có gì đó quen thuộc.",
						"thai": "ฉันรู้สึกอย่างนั้นนะ รู้สึกคุ้นเคยยังไงไม่รู้",
						"hindi": "मुझे ऐसा ही लगता है। कुछ जाना-पहचाना सा लगता है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이 꽃들… 자세히 보니 겹겹이 피어있어.",
						"english": "These flowers... looking closely, they're blooming in layers.",
						"japanese": "この花々…よく見ると、何層にも重なって咲いている。",
						"chinese": "这些花…仔细看，是层层叠叠地开放着。",
						"french": "Ces fleurs… en y regardant de plus près, elles s'épanouissent en couches.",
						"spanish": "Estas flores… al mirarlas de cerca, florecen en capas.",
						"vietnamese": "Những bông hoa này… nhìn kỹ thì chúng nở thành từng lớp.",
						"thai": "ดอกไม้พวกนี้... พอมองใกล้ๆ ก็เห็นว่าบานซ้อนกันเป็นชั้นๆ",
						"hindi": "ये फूल... करीब से देखने पर, ये परतों में खिले हुए हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "겹겹이? 같은 자리에 계속 피어난 건가?",
						"english": "In layers? Did they keep blooming in the same spot?",
						"japanese": "幾重にも？同じ場所に咲き続けたの？",
						"chinese": "一层又一层？它们一直在同一个地方盛开吗？",
						"french": "Par couches ? Elles ont continué à fleurir au même endroit ?",
						"spanish": "¿En capas? ¿Siguieron floreciendo en el mismo lugar?",
						"vietnamese": "Từng lớp ư? Chúng cứ nở mãi ở cùng một chỗ sao?",
						"thai": "เป็นชั้นๆ? มันยังคงผลิบานอยู่ที่เดิมหรือ?",
						"hindi": "परतों में? क्या वे एक ही जगह पर खिलते रहे?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마치 같은 길을 몇 번이고 되풀이하는 것처럼.",
						"english": "As if repeating the same path over and over again.",
						"japanese": "まるで同じ道を何度も繰り返すように。",
						"chinese": "就像一遍又一遍地重复着同一条路。",
						"french": "Comme si on répétait le même chemin encore et encore.",
						"spanish": "Como si se repitiera el mismo camino una y otra vez.",
						"vietnamese": "Cứ như thể lặp đi lặp lại cùng một con đường hết lần này đến lần khác.",
						"thai": "ราวกับวนเวียนอยู่บนเส้นทางเดิมซ้ำแล้วซ้ำเล่า",
						"hindi": "जैसे एक ही रास्ते को बार-बार दोहराया जा रहा हो।"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정말이네… 뭔가 이상해.",
						"english": "You're right... something's strange.",
						"japanese": "本当だね… 何か変だよ。",
						"chinese": "真的… 有点不对劲。",
						"french": "C'est vrai... quelque chose est étrange.",
						"spanish": "Es verdad... algo es extraño.",
						"vietnamese": "Thật vậy… có gì đó không ổn.",
						"thai": "จริงด้วย... มีอะไรแปลกๆ",
						"hindi": "सच में... कुछ तो अजीब है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "빛은 결코 새로운 방향으로 나아가지 않아.",
						"english": "Light never moves in a new direction.",
						"japanese": "光は決して新しい方向へは進まない。",
						"chinese": "光从不朝新的方向前进。",
						"french": "La lumière ne va jamais dans une nouvelle direction.",
						"spanish": "La luz nunca avanza en una nueva dirección.",
						"vietnamese": "Ánh sáng không bao giờ đi theo một hướng mới.",
						"thai": "แสงไม่เคยเคลื่อนที่ไปในทิศทางใหม่",
						"hindi": "प्रकाश कभी नई दिशा में नहीं बढ़ता।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "늘 같은 길만 오간다는 뜻이야?",
						"english": "Does that mean it only travels the same path?",
						"japanese": "いつも同じ道を行き来するってこと？",
						"chinese": "意思是它只走同一条路吗？",
						"french": "Est-ce que ça veut dire qu'elle ne parcourt que le même chemin ?",
						"spanish": "¿Significa que solo recorre el mismo camino?",
						"vietnamese": "Ý bạn là nó chỉ đi cùng một con đường?",
						"thai": "หมายความว่ามันเดินทางแค่เส้นทางเดิมๆ หรือ?",
						"hindi": "क्या इसका मतलब है कि यह केवल एक ही रास्ते पर चलता है?"
					}
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "어딘가에서 멈춰, 다시 돌아오는 길. 혹은… 가지 못하고 맴도는 길.",
						"english": "A path that stops somewhere and returns. Or... a path that can't go forward and just circles.",
						"japanese": "どこかで止まって、また戻ってくる道。あるいは…進めずにさまよう道。",
						"chinese": "一条在某个地方停下，然后折返的路。或者…一条无法前进，只是盘旋的路。",
						"french": "Un chemin qui s'arrête quelque part et revient. Ou... un chemin qui ne peut pas avancer et tourne en rond.",
						"spanish": "Un camino que se detiene en algún lugar y regresa. O... un camino que no puede avanzar y solo da vueltas.",
						"vietnamese": "Một con đường dừng lại ở đâu đó rồi quay trở lại. Hoặc… một con đường không thể đi tiếp mà chỉ loanh quanh.",
						"thai": "เส้นทางที่หยุดลงที่ไหนสักแห่งแล้วย้อนกลับ หรือ... เส้นทางที่ไปต่อไม่ได้และวนเวียนอยู่กับที่",
						"hindi": "एक रास्ता जो कहीं रुक जाता है और वापस आता है। या... एक रास्ता जो आगे नहीं बढ़ पाता और बस चक्कर लगाता रहता है।"
					}
				},
				{
					"content": {
						"korean": "길이… 갇힌 건가?",
						"english": "Is the path... trapped?",
						"japanese": "道が…閉じ込められているの？",
						"chinese": "路… 被困住了吗？",
						"french": "Le chemin... est-il piégé ?",
						"spanish": "¿El camino... está atrapado?",
						"vietnamese": "Con đường… bị mắc kẹt sao?",
						"thai": "เส้นทาง... ถูกขังไว้หรือ?",
						"hindi": "क्या रास्ता... फंसा हुआ है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "이 길은… 누군가가 떠난 길이거나.",
						"english": "This path is... one someone left.",
						"japanese": "この道は…誰かが去った道か。",
						"chinese": "这条路… 是某人离开的路。",
						"french": "Ce chemin est... celui que quelqu'un a quitté.",
						"spanish": "Este camino es... el que alguien dejó.",
						"vietnamese": "Con đường này… là con đường ai đó đã rời đi.",
						"thai": "เส้นทางนี้... คือเส้นทางที่ใครบางคนจากไป",
						"hindi": "यह रास्ता... या तो किसी ने छोड़ दिया है।"
					}
				},
				{
					"content": {
						"korean": "혹은… 돌아오기를 바라는 길인가.",
						"english": "Or... a path hoping for their return.",
						"japanese": "あるいは…誰かの帰りを願う道なのか。",
						"chinese": "或者… 一条期盼着归来的路。",
						"french": "Ou... un chemin qui espère le retour.",
						"spanish": "O... un camino que espera el regreso.",
						"vietnamese": "Hoặc… là con đường mong chờ sự trở lại.",
						"thai": "หรือ... เส้นทางที่หวังให้ใครบางคนกลับมา",
						"hindi": "या... वापसी की उम्मीद का रास्ता है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 강한 염원이 느껴져. 이 길에서.",
						"english": "Yes. I feel a strong yearning on this path.",
						"japanese": "ああ。強い願いが感じられる。この道で。",
						"chinese": "是的。在这条路上，我感受到了强烈的愿望。",
						"french": "Oui. Je ressens un fort désir sur ce chemin.",
						"spanish": "Sí. Siento un fuerte anhelo en este camino.",
						"vietnamese": "Đúng vậy. Tôi cảm nhận được một khát khao mãnh liệt trên con đường này.",
						"thai": "ใช่แล้ว. ฉันสัมผัสได้ถึงความปรารถนาอันแรงกล้าบนเส้นทางนี้",
						"hindi": "हाँ। मुझे इस रास्ते पर एक तीव्र लालसा महसूस होती है।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누가… 뭘 그렇게 오래 기다리는 걸까.",
						"english": "Who... what are they waiting for so long?",
						"japanese": "誰が…何をそんなに長く待っているのだろう。",
						"chinese": "谁……在等什么呢？等了这么久。",
						"french": "Qui... qu'est-ce qu'ils attendent depuis si longtemps ?",
						"spanish": "¿Quién... qué estarán esperando tanto tiempo?",
						"vietnamese": "Ai... đang chờ đợi điều gì lâu đến vậy?",
						"thai": "ใคร...กำลังรออะไรมานานขนาดนี้?",
						"hindi": "कौन... क्या इतना लंबा इंतजार कर रहा होगा?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 흩어지며, 길은 잠시 고요해졌다.",
						"english": "The colossal shadow dispersed, and the path became quiet for a moment.",
						"japanese": "巨大な影が散らばり、道は一時的に静寂に包まれた。",
						"chinese": "巨大的阴影散去，道路暂时归于平静。",
						"french": "L'ombre colossale se dispersa, et le chemin devint silencieux un instant.",
						"spanish": "La sombra colosal se dispersó y el camino quedó en silencio por un momento.",
						"vietnamese": "Bóng đen khổng lồ tan biến, con đường trở nên tĩnh lặng trong chốc lát.",
						"thai": "เงาขนาดยักษ์สลายไป และเส้นทางก็เงียบสงบลงชั่วขณะ",
						"hindi": "विशाल छाया बिखर गई, और रास्ता पल भर के लिए शांत हो गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…기다림은… 영원히… 끝나지 않아….",
						"english": "...The waiting... never... ends...",
						"japanese": "…待機は…永遠に…終わらない…。",
						"chinese": "...等待...永远...不会结束...",
						"french": "...L'attente... ne finit... jamais...",
						"spanish": "...La espera... nunca... termina...",
						"vietnamese": "...Sự chờ đợi... không bao giờ... kết thúc...",
						"thai": "...การรอคอย...จะไม่มีวัน...สิ้นสุด...",
						"hindi": "...इंतजार... कभी... खत्म नहीं होता..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기다림이… 끝나지 않는다고?",
						"english": "The wait... never ends?",
						"japanese": "待つことが…終わらないと？",
						"chinese": "等待…永无止境？",
						"french": "L'attente... ne finit jamais ?",
						"spanish": "¿La espera... nunca termina?",
						"vietnamese": "Sự chờ đợi... không bao giờ kết thúc sao?",
						"thai": "การรอคอย... ไม่มีวันสิ้นสุดงั้นหรือ?",
						"hindi": "इंतज़ार… कभी ख़त्म नहीं होता?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 그림자도… 길의 일부였군. 상실의 감정인가.",
						"english": "This shadow... was part of the path. A feeling of loss?",
						"japanese": "この影も…道のM一部だったのか。喪失の感情か。",
						"chinese": "这片阴影…也是道路的一部分。是失落之情吗？",
						"french": "Cette ombre... faisait aussi partie du chemin. Un sentiment de perte ?",
						"spanish": "Esta sombra... también era parte del camino. ¿Un sentimiento de pérdida?",
						"vietnamese": "Bóng tối này... cũng là một phần của con đường. Một cảm giác mất mát chăng?",
						"thai": "เงาพวกนี้... ก็เป็นส่วนหนึ่งของเส้นทางด้วยรึนี่ ความรู้สึกสูญเสียหรือเปล่า?",
						"hindi": "यह परछाई भी… राह का हिस्सा थी। क्या यह खोने का अहसास है?"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "빛은 여전히 같은 길 위에서, 묵묵히 서리꽃을 피웠다.",
						"english": "The light, still on the same path, silently bloomed frost flowers.",
						"japanese": "光は依然として同じ道の上で、黙々と霜の花を咲かせた。",
						"chinese": "光芒仍在同一条路上，默默地绽放着霜花。",
						"french": "La lumière, toujours sur le même chemin, faisait silencieusement fleurir les fleurs de givre.",
						"spanish": "La luz, aún en el mismo camino, hacía florecer en silencio las flores de escarcha.",
						"vietnamese": "Ánh sáng vẫn trên cùng con đường, âm thầm nở những bông hoa sương giá.",
						"thai": "แสงสว่างยังคงอยู่บนเส้นทางเดิม ค่อยๆ เบ่งบานเป็นดอกไม้น้ำแข็งเงียบๆ",
						"hindi": "प्रकाश अभी भी उसी राह पर, खामोशी से तुषार पुष्प खिला रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "길의 끝. 거대한 그림자가 앞을 가로막았다.",
						"english": "End of the path. A colossal shadow blocked the way.",
						"japanese": "道の終わり。巨大な影が道を塞いだ。",
						"chinese": "路的尽头。巨大的阴影挡住了去路。",
						"french": "Fin du chemin. Une ombre colossale bloquait le passage.",
						"spanish": "El fin del camino. Una sombra colosal bloqueó el paso.",
						"vietnamese": "Cuối con đường. Một bóng đen khổng lồ chặn lối.",
						"thai": "สุดทาง. เงาขนาดยักษ์ขวางทางอยู่เบื้องหน้า",
						"hindi": "रास्ते का अंत। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈춰라. 이 길의 의미를 알아챌 순 없다.",
						"english": "Stop. You cannot grasp the meaning of this path.",
						"japanese": "止まれ。この道の意味を理解することはできない。",
						"chinese": "止步。你无法领会这条路的意义。",
						"french": "Arrêtez. Vous ne pouvez pas saisir le sens de ce chemin.",
						"spanish": "Detente. No puedes comprender el significado de este camino.",
						"vietnamese": "Dừng lại. Ngươi không thể hiểu ý nghĩa của con đường này.",
						"thai": "หยุด. เจ้าไม่อาจเข้าใจความหมายของเส้นทางนี้ได้",
						"hindi": "रुको। तुम इस रास्ते का अर्थ नहीं समझ सकते।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "누구냐! 비켜!",
						"english": "Who are you! Get out of the way!",
						"japanese": "誰だ！退け！",
						"chinese": "你是谁！让开！",
						"french": "Qui êtes-vous ! Écartez-vous !",
						"spanish": "¡Quién eres! ¡Quítate de en medio!",
						"vietnamese": "Ngươi là ai! Tránh ra!",
						"thai": "ใครน่ะ! หลีกไป!",
						"hindi": "कौन हो तुम! हट जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "이 자는… 이 길의 감정을 수호하는 건가?",
						"english": "Is this being… guarding the emotions of this path?",
						"japanese": "こいつは…この道の感情を守っているのか？",
						"chinese": "这家伙……是在守护这条路的感情吗？",
						"french": "Est-ce que cette entité… garde les émotions de ce chemin ?",
						"spanish": "¿Es esta criatura... la que custodia las emociones de este camino?",
						"vietnamese": "Kẻ này... có phải đang bảo vệ cảm xúc của con đường này không?",
						"thai": "นี่...คือผู้พิทักษ์ความรู้สึกของเส้นทางนี้หรือ?",
						"hindi": "क्या यह... इस रास्ते की भावनाओं का रक्षक है?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "무지한 자들. 너희는 이 감정을 방해할 뿐.",
						"english": "Ignorant fools. You only disrupt these emotions.",
						"japanese": "無知な者ども。お前たちはこの感情を邪魔するだけだ。",
						"chinese": "无知之徒。你们只会干扰这份感情。",
						"french": "Fous ignorants. Vous ne faites que perturber ces émotions.",
						"spanish": "Ignorantes. Solo perturbáis estas emociones.",
						"vietnamese": "Những kẻ ngu muội. Các ngươi chỉ đang quấy rầy những cảm xúc này.",
						"thai": "พวกโง่เขลา. เจ้าเป็นเพียงผู้ขัดขวางอารมณ์เหล่านี้เท่านั้น",
						"hindi": "अज्ञानी मूर्ख। तुम केवल इन भावनाओं को बाधित करते हो।"
					}
				},
				{
					"content": {
						"korean": "방해하지 않아! 우린 답을 찾을 뿐이야!",
						"english": "We're not disrupting! We're just looking for answers!",
						"japanese": "邪魔なんかしてない！俺たちはただ答えを探しているだけだ！",
						"chinese": "我们没有干扰！我们只是在寻找答案！",
						"french": "Nous ne perturbons rien ! Nous cherchons juste des réponses !",
						"spanish": "¡No estamos interrumpiendo! ¡Solo buscamos respuestas!",
						"vietnamese": "Chúng tôi không quấy rầy! Chúng tôi chỉ đang tìm kiếm câu trả lời!",
						"thai": "เราไม่ได้รบกวน! เราแค่กำลังมองหาคำตอบ!",
						"hindi": "हम बाधा नहीं डाल रहे हैं! हम बस जवाब ढूंढ रहे हैं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "길을 잃어라.",
						"english": "Lose your way.",
						"japanese": "道に迷え。",
						"chinese": "迷失方向吧。",
						"french": "Perdez votre chemin.",
						"spanish": "Piérdete.",
						"vietnamese": "Hãy lạc lối đi.",
						"thai": "จงหลงทางไป",
						"hindi": "भटक जाओ।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 눈보라가 탐험대를 집어삼켰다.",
						"english": "The cold blizzard swallowed the expedition party.",
						"japanese": "冷たい吹雪が探検隊を飲み込んだ。",
						"chinese": "冰冷的暴风雪吞噬了探险队。",
						"french": "Le froid blizzard a englouti l'expédition.",
						"spanish": "La fría ventisca engulló a la expedición.",
						"vietnamese": "Cơn bão tuyết lạnh giá đã nuốt chửng đoàn thám hiểm.",
						"thai": "พายุหิมะอันหนาวเหน็บได้กลืนกินคณะสำรวจ",
						"hindi": "ठंडे बर्फीले तूफान ने अभियान दल को निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "돌아가라. 너희는 이 길을 이해할 수 없어.",
						"english": "Go back. You cannot comprehend this path.",
						"japanese": "引き返せ。お前たちにはこの道は理解できない。",
						"chinese": "回去吧。你们无法理解这条路。",
						"french": "Retournez. Vous ne pouvez pas comprendre ce chemin.",
						"spanish": "Regresen. No pueden comprender este camino.",
						"vietnamese": "Hãy quay lại. Các ngươi không thể hiểu con đường này.",
						"thai": "กลับไปซะ พวกเจ้าไม่อาจเข้าใจเส้นทางนี้ได้",
						"hindi": "लौट जाओ। तुम इस राह को समझ नहीं सकते।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还…没结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "angry",
					"content": {
						"korean": "반드시… 길의 끝을 찾아낼 거야.",
						"english": "I will... surely find the end of the path.",
						"japanese": "必ず…道の終わりを見つけ出す。",
						"chinese": "我一定会…找到路的尽头。",
						"french": "Je vais... certainement trouver la fin du chemin.",
						"spanish": "¡Seguramente... encontraré el final del camino!",
						"vietnamese": "Nhất định... ta sẽ tìm ra cuối con đường.",
						"thai": "จะต้อง... หาจุดสิ้นสุดของเส้นทางให้พบ",
						"hindi": "मैं… राह का अंत अवश्य ढूंढ लूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라 속, 서리꽃은 늘 같은 자리에 피어났다.",
			"빛은 익숙한 길을 되풀이할 뿐, 새로운 방향으로 나아가지 않았다.",
			"누군가의 흔적은, 기다림의 길인가.",
			"아니면, 영원히 돌아오지 못할 상실의 길인가."
		],
		"english": [
			"Amidst the blizzard, frost blossoms always bloomed in the same spot.",
			"Light merely repeated the familiar path, never venturing in a new direction.",
			"Are someone's traces a path of waiting?",
			"Or is it a path of loss, never to return?"
		],
		"japanese": [
			"吹雪の中、霜の花はいつも同じ場所に咲いていた。",
			"光は慣れた道を繰り返すだけで、新たな方向へ進まなかった。",
			"誰かの痕跡は、待ち続ける道なのか。",
			"それとも、永遠に戻れない喪失の道なのか。"
		],
		"chinese": [
			"暴风雪中，霜花总是在同一个地方绽放。",
			"光线只是重复着熟悉的路径，并未走向新的方向。",
			"某人的痕迹，是等待之路吗？",
			"抑或是，永远无法归来的失落之路？"
		],
		"french": [
			"Au cœur du blizzard, les fleurs de givre fleurissaient toujours au même endroit.",
			"La lumière ne faisait que répéter le chemin familier, sans jamais s'aventurer dans une nouvelle direction.",
			"Les traces de quelqu'un, sont-elles un chemin d'attente ?",
			"Ou bien, un chemin de perte, sans retour possible ?"
		],
		"spanish": [
			"En medio de la ventisca, las flores de escarcha siempre florecían en el mismo lugar.",
			"La luz simplemente repetía el camino conocido, sin avanzar nunca en una nueva dirección.",
			"¿Son las huellas de alguien un camino de espera?",
			"¿O es un camino de pérdida, del que nunca se regresará?"
		],
		"vietnamese": [
			"Giữa bão tuyết, những bông hoa băng giá luôn nở rộ ở cùng một vị trí.",
			"Ánh sáng chỉ lặp lại con đường quen thuộc, không tiến về hướng mới.",
			"Dấu vết của ai đó, là con đường của sự chờ đợi sao?",
			"Hay là con đường mất mát, không thể quay về vĩnh viễn?"
		],
		"thai": [
			"ท่ามกลางพายุหิมะ ดอกไม้น้ำแข็งมักจะบานสะพรั่ง ณ ที่เดิมเสมอ",
			"แสงสว่างเพียงแค่ย้ำเส้นทางที่คุ้นเคย ไม่เคยก้าวไปในทิศทางใหม่",
			"ร่องรอยของใครบางคน คือเส้นทางแห่งการรอคอยหรือ?",
			"หรือเป็นเส้นทางแห่งการสูญเสียที่ไม่มีวันกลับ?"
		],
		"hindi": [
			"बर्फीले तूफान के बीच, बर्फीले फूल हमेशा एक ही जगह पर खिलते थे।",
			"प्रकाश केवल परिचित मार्ग को दोहराता रहा, कभी नई दिशा में नहीं बढ़ा।",
			"क्या किसी के निशान इंतज़ार का रास्ता हैं?",
			"या फिर, कभी न लौटने वाले नुकसान का रास्ता है?"
		]
	}
} as const;
