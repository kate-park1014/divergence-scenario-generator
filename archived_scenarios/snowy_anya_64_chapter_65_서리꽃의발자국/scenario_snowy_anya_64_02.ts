export const scenario_snowy_anya_64_02 = {
	"scenario_id": "snowy_anya_64_02",
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
						"korean": "발자국마다 하얀 서리꽃이 피어 있었다. 마치 길이 된 듯.",
						"english": "White frost blossoms bloomed with every footprint, as if they formed a path.",
						"japanese": "足跡ごとに白い霜の花が咲いていた。まるで道になったかのように。",
						"chinese": "每个脚印都开满了白色的霜花，仿佛形成了一条路。",
						"french": "Des fleurs de givre blanches fleurissaient à chaque empreinte de pas, comme si elles formaient un chemin.",
						"spanish": "Flores de escarcha blancas florecían con cada huella, como si formaran un camino.",
						"vietnamese": "Những bông hoa băng giá trắng nở rộ theo mỗi dấu chân, như thể chúng tạo thành một con đường.",
						"thai": "ดอกไม้น้ำค้างแข็งสีขาวบานสะพรั่งตามรอยเท้าทุกย่าง, ราวกับว่าพวกมันได้กลายเป็นเส้นทาง.",
						"hindi": "हर पदचिह्न के साथ सफेद पाले के फूल खिले हुए थे, मानो वे एक रास्ता बन गए हों।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 꽃들이 안야의 흔적이야?",
						"english": "Are these blossoms Anya's traces?",
						"japanese": "これらの花がアーニャの痕跡なのか？",
						"chinese": "这些花是安雅的踪迹吗？",
						"french": "Ces fleurs sont-elles les traces d'Anya ?",
						"spanish": "¿Son estas flores las huellas de Anya?",
						"vietnamese": "Những bông hoa này là dấu vết của Anya sao?",
						"thai": "ดอกไม้เหล่านี้คือร่องรอยของอันย่าหรือ?",
						"hindi": "क्या ये फूल आन्या के निशान हैं?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "그래. 그런데… 좀 이상하군.",
						"english": "Yes. But... it's a bit strange.",
						"japanese": "ああ。だが…少しおかしいな。",
						"chinese": "是的。但是……有点奇怪。",
						"french": "Oui. Mais... c'est un peu étrange.",
						"spanish": "Sí. Pero... es un poco extraño.",
						"vietnamese": "Đúng vậy. Nhưng... có gì đó lạ.",
						"thai": "ใช่. แต่ว่า...มันแปลกๆนะ.",
						"hindi": "हाँ। लेकिन... यह थोड़ा अजीब है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "서리꽃들이… 모두 설원 바깥쪽을 향해 피어 있어.",
						"english": "The frost blossoms... are all blooming outwards from the snowfield.",
						"japanese": "霜の花が…すべて雪原の外側を向いて咲いている。",
						"chinese": "霜花……都朝着雪原外侧开放。",
						"french": "Les fleurs de givre... fleurissent toutes vers l'extérieur de la plaine enneigée.",
						"spanish": "Las flores de escarcha... están todas floreciendo hacia afuera del campo nevado.",
						"vietnamese": "Những bông hoa băng giá... đều nở hướng ra ngoài cánh đồng tuyết.",
						"thai": "ดอกไม้น้ำค้างแข็ง...ทั้งหมดหันออกไปทางด้านนอกของทุ่งหิมะ.",
						"hindi": "पाले के फूल... सभी बर्फीले मैदान के बाहर की ओर खिल रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "바깥쪽?",
						"english": "Outwards?",
						"japanese": "外側を？",
						"chinese": "外侧？",
						"french": "Vers l'extérieur ?",
						"spanish": "¿Hacia afuera?",
						"vietnamese": "Ra ngoài sao?",
						"thai": "ด้านนอก?",
						"hindi": "बाहर की ओर?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이 빛은 길을 인도하는 게 아니야.",
						"english": "This light isn't guiding the way.",
						"japanese": "この光は道を導いているのではない。",
						"chinese": "这光不是在指引道路。",
						"french": "Cette lumière ne guide pas le chemin.",
						"spanish": "Esta luz no está guiando el camino.",
						"vietnamese": "Ánh sáng này không dẫn lối.",
						"thai": "แสงนี้ไม่ได้นำทาง.",
						"hindi": "यह रोशनी रास्ता नहीं दिखा रही है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무언가를… 기다리고 있는 것 같아.",
						"english": "It seems to be waiting for something...",
						"japanese": "何かを…待っているようだ。",
						"chinese": "它似乎在等待着什么……",
						"french": "On dirait qu'il attend quelque chose...",
						"spanish": "Parece estar esperando algo...",
						"vietnamese": "Dường như nó đang chờ đợi điều gì đó...",
						"thai": "ดูเหมือนว่ากำลังรออะไรบางอย่างอยู่...",
						"hindi": "लगता है यह कुछ इंतज़ार कर रहा है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"content": {
						"korean": "기다린다고? 누가 뭘?",
						"english": "Waiting? Who for what?",
						"japanese": "待ってる？誰が何を？",
						"chinese": "等待？谁在等什么？",
						"french": "Attendre ? Qui attend quoi ?",
						"spanish": "¿Esperando? ¿Quién a qué?",
						"vietnamese": "Chờ đợi ư? Ai chờ gì?",
						"thai": "รออยู่เหรอ? ใครรออะไร?",
						"hindi": "इंतज़ार? कौन किसका?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "내 직감이 그래. 이 발자국은 수백 년째 멈춰 있어.",
						"english": "My gut tells me. These footprints have been stopped for centuries.",
						"japanese": "私の直感がそう言ってる。この足跡は何百年も止まったままだ。",
						"chinese": "我的直觉告诉我。这些脚印已经停滞了数百年。",
						"french": "Mon instinct me le dit. Ces empreintes sont figées depuis des siècles.",
						"spanish": "Mi intuición me lo dice. Estas huellas han estado detenidas durante siglos.",
						"vietnamese": "Trực giác của tôi mách bảo vậy. Những dấu chân này đã dừng lại hàng thế kỷ rồi.",
						"thai": "สัญชาตญาณของฉันบอกแบบนั้น รอยเท้าพวกนี้หยุดนิ่งมาหลายร้อยปีแล้ว",
						"hindi": "मेरी अंतरात्मा कहती है। ये पदचिह्न सदियों से रुके हुए हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝나지 않는 기다림… 누군가를 애타게 찾고 있는 거야.",
						"english": "An endless wait... desperately searching for someone.",
						"japanese": "終わらない待機…誰かを必死に探しているんだ。",
						"chinese": "无尽的等待……焦急地寻找着某人。",
						"french": "Une attente interminable... Cherchant désespérément quelqu'un.",
						"spanish": "Una espera interminable... buscando desesperadamente a alguien.",
						"vietnamese": "Một sự chờ đợi không hồi kết... đang tuyệt vọng tìm kiếm ai đó.",
						"thai": "การรอคอยที่ไม่มีที่สิ้นสุด... กำลังตามหาใครบางคนอย่างกระวนกระวาย",
						"hindi": "एक अंतहीन इंतज़ार... किसी को बेताबी से तलाश रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리는 뭘 해야 해?",
						"english": "So what should we do?",
						"japanese": "じゃあ、私たちは何をすればいいの？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces qué debemos hacer?",
						"vietnamese": "Vậy chúng ta nên làm gì?",
						"thai": "แล้วเราต้องทำอะไร?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 위압감.",
						"english": "A colossal shadow blocked the path. An unknown pressure.",
						"japanese": "巨大な影が道を遮った。得体の知れない威圧感。",
						"chinese": "一个巨大的身影挡住了去路。一种莫名的压迫感。",
						"french": "Une ombre colossale bloquait le chemin. Une pression inconnue.",
						"spanish": "Una sombra colosal bloqueaba el camino. Una opresión desconocida.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Một áp lực không thể lí giải.",
						"thai": "เงาขนาดยักษ์ขวางทางอยู่ ความกดดันที่ไม่รู้จัก",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात दबाव।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 것들. 감히 이곳을 거스르려 하는가?",
						"english": "Fools. Dare you defy this place?",
						"japanese": "愚かな者どもめ。あえてこの場所に逆らおうというのか？",
						"chinese": "愚蠢的东西。竟敢反抗这里？",
						"french": "Imbéciles. Osez-vous défier cet endroit ?",
						"spanish": "Estúpidos. ¿Os atrevéis a desafiar este lugar?",
						"vietnamese": "Những kẻ ngu ngốc. Dám chống lại nơi này sao?",
						"thai": "พวกโง่เง่า กล้าดีอย่างไรมาท้าทายที่นี่?",
						"hindi": "मूर्खों। क्या तुम इस जगह का अनादर करने की हिम्मत करते हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "물러서! 우리는 진실을 찾으러 왔어!",
						"english": "Stand back! We came to find the truth!",
						"japanese": "下がれ！私たちは真実を探しに来たんだ！",
						"chinese": "退下！我们是来寻找真相的！",
						"french": "Reculez ! Nous sommes venus chercher la vérité !",
						"spanish": "¡Retroceded! ¡Vinimos a buscar la verdad!",
						"vietnamese": "Lùi lại! Chúng tôi đến để tìm sự thật!",
						"thai": "ถอยไป! เรามาเพื่อค้นหาความจริง!",
						"hindi": "पीछे हटो! हम सच की तलाश में आए हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저 자가 이 기다림을 지키고 있는 건가…?",
						"english": "Is that one guarding this wait...?",
						"japanese": "あの者がこの待機を守っているのか…？",
						"chinese": "那家伙是在守护这份等待吗……？",
						"french": "Est-ce lui qui garde cette attente...?",
						"spanish": "¿Es ese quien guarda esta espera...?",
						"vietnamese": "Kẻ đó có phải đang canh giữ sự chờ đợi này không...?",
						"thai": "คนนั้นกำลังเฝ้ารอคอยสิ่งนี้อยู่หรือเปล่า...?",
						"hindi": "क्या वह इस इंतज़ार की रखवाली कर रहा है...?"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "끝나지 않는 기다림에 붙잡혔다.",
						"english": "Caught in an endless waiting.",
						"japanese": "終わりのない待ち時間に囚われた。",
						"chinese": "被困在了无尽的等待中。",
						"french": "Pris dans une attente sans fin.",
						"spanish": "Atrapado en una espera interminable.",
						"vietnamese": "Mắc kẹt trong sự chờ đợi không hồi kết.",
						"thai": "ติดอยู่ในการรอคอยที่ไม่มีที่สิ้นสุด",
						"hindi": "एक अंतहीन इंतज़ार में फंस गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 이곳을 떠나지 못할 것이다.",
						"english": "Insignificant beings. You will not leave this place.",
						"japanese": "取るに足らない者たちめ。ここを去ることはできないだろう。",
						"chinese": "卑微的东西。你们无法离开这里。",
						"french": "Êtres insignifiants. Vous ne quitterez pas cet endroit.",
						"spanish": "Seres insignificantes. No podréis abandonar este lugar.",
						"vietnamese": "Những kẻ hèn mọn. Các ngươi sẽ không thể rời khỏi nơi này.",
						"thai": "พวกไร้ค่า พวกเจ้าจะไม่มีทางออกจากที่นี่ได้",
						"hindi": "तुच्छ प्राणी। तुम इस जगह को नहीं छोड़ पाओगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직 포기 못 해. 다시 돌아온다!",
						"english": "Can't give up yet. I'll be back!",
						"japanese": "まだ諦めない。必ず戻ってくる！",
						"chinese": "还没放弃。我会回来的！",
						"french": "Pas question d'abandonner. Je reviendrai !",
						"spanish": "Aún no me rindo. ¡Volveré!",
						"vietnamese": "Chưa thể bỏ cuộc. Ta sẽ trở lại!",
						"thai": "ยังยอมแพ้ไม่ได้ ข้าจะกลับมา!",
						"hindi": "अभी हार नहीं मान सकता। मैं वापस आऊँगा!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "서리꽃이 가장 많이 핀 곳. 강렬한 냉기가 느껴진다.",
						"english": "The place where frost flowers bloom most abundantly. An intense chill can be felt.",
						"japanese": "霜の花が最も多く咲く場所。強烈な冷気が感じられる。",
						"chinese": "霜花盛开最多的地方。感受到了强烈的寒气。",
						"french": "L'endroit où les fleurs de givre fleurissent le plus. Une intense froideur se fait sentir.",
						"spanish": "El lugar donde más florecen las flores de escarcha. Se siente un frío intenso.",
						"vietnamese": "Nơi hoa băng nở rộ nhiều nhất. Cảm nhận được khí lạnh dữ dội.",
						"thai": "สถานที่ที่ดอกไม้น้ำแข็งบานสะพรั่งมากที่สุด สัมผัสได้ถึงความเย็นยะเยือก",
						"hindi": "वह जगह जहाँ सबसे अधिक पाले के फूल खिलते हैं। तीव्र ठंडक महसूस होती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누구도 이 기다림을 방해할 수 없어. 너희도 마찬가지다.",
						"english": "No one can disturb this waiting. Not even you.",
						"japanese": "誰もこの待ち時間を邪魔できない。お前たちもだ。",
						"chinese": "谁也无法打扰这份等待。你们也一样。",
						"french": "Personne ne peut perturber cette attente. Pas même vous.",
						"spanish": "Nadie puede perturbar esta espera. Vosotros tampoco.",
						"vietnamese": "Không ai có thể phá vỡ sự chờ đợi này. Kể cả các ngươi.",
						"thai": "ไม่มีใครขัดขวางการรอคอยนี้ได้ แม้แต่พวกเจ้า",
						"hindi": "कोई भी इस इंतज़ार में बाधा नहीं डाल सकता। तुम भी नहीं。"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "기다림? 대체 뭘 기다리는 건데!",
						"english": "Waiting? What exactly are you waiting for?!",
						"japanese": "待ち時間？一体何を待っているんだ！",
						"chinese": "等待？到底在等什么！",
						"french": "Attente ? Qu'est-ce que vous attendez, exactement ?!",
						"spanish": "¿Esperando? ¡¿Qué demonios estás esperando?!",
						"vietnamese": "Chờ đợi? Rốt cuộc đang chờ cái gì chứ!",
						"thai": "รอคอย? รออะไรกันแน่!",
						"hindi": "इंतज़ार? आखिर क्या इंतज़ार कर रहे हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "저 자가… 이 기다림의 감시자인가.",
						"english": "Is that person... the guardian of this waiting?",
						"japanese": "あの者が…この待ち時間の監視者なのか。",
						"chinese": "那家伙…是这等待的看守者吗？",
						"french": "Est-ce que cette personne... est le gardien de cette attente ?",
						"spanish": "¿Es esa persona... el guardián de esta espera?",
						"vietnamese": "Kẻ đó… là người giám sát sự chờ đợi này sao.",
						"thai": "คนผู้นั้น… เป็นผู้เฝ้าดูการรอคอยนี้หรือ",
						"hindi": "क्या वह शख्स... इस इंतज़ार का रखवाला है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뚫고 지나갈 수밖에 없어.",
						"english": "We have no choice but to break through.",
						"japanese": "突破して進むしかない。",
						"chinese": "只能闯过去。",
						"french": "Nous n'avons d'autre choix que de passer à travers.",
						"spanish": "No tenemos más remedio que abrirnos paso.",
						"vietnamese": "Không còn cách nào khác ngoài việc vượt qua.",
						"thai": "ไม่มีทางเลือกอื่นนอกจากฝ่าไป",
						"hindi": "हमें बस आगे बढ़ना होगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 어리석군. 결국… 되돌아올 것을…",
						"english": "Ugh... foolish. You'll... eventually return...",
						"japanese": "くっ…愚かな。結局…戻ってくるものを…",
						"chinese": "呃…愚蠢。终究…会回来的…",
						"french": "Ugh... insensé. Vous... finirez par revenir...",
						"spanish": "Ugh... tonto. Al final... volveréis...",
						"vietnamese": "Khục… Ngốc nghếch. Cuối cùng… rồi cũng sẽ trở lại thôi…",
						"thai": "อึก… โง่เขลา ในที่สุด… ก็จะต้องกลับมา…",
						"hindi": "उफ़... मूर्खतापूर्ण। तुम... आखिर लौट आओगे..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 뭘 되돌아와?",
						"english": "What are you talking about? Return to what?",
						"japanese": "何を言ってるんだ？何に戻るって？",
						"chinese": "你在说什么？回到哪里？",
						"french": "De quoi parlez-vous ? Revenir à quoi ?",
						"spanish": "¿De qué hablas? ¿Volver a qué?",
						"vietnamese": "Ngươi đang nói gì vậy? Trở lại cái gì?",
						"thai": "พูดอะไรน่ะ? กลับไปที่ไหน?",
						"hindi": "क्या बात कर रहे हो? क्या वापस आना है?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…빛이 우리를 인도하지만… 다시 원래 자리로 돌아오려 하는군.",
						"english": "...The light guides us... but it tries to bring us back to where we started.",
						"japanese": "…光が我々を導くが…再び元の場所に戻ろうとしているな。",
						"chinese": "…光指引着我们…但又想让我们回到原点。",
						"french": "...La lumière nous guide... mais elle essaie de nous ramener à notre point de départ.",
						"spanish": "...La luz nos guía... pero intenta traernos de vuelta al punto de partida.",
						"vietnamese": "…Ánh sáng dẫn lối chúng ta… nhưng lại muốn quay về chỗ cũ.",
						"thai": "…แสงนำทางเรา… แต่ก็พยายามจะพาเรากลับไปยังที่เดิม",
						"hindi": "...प्रकाश हमें राह दिखाता है... लेकिन यह हमें वापस वहीं लाने की कोशिश करता है जहाँ से हमने शुरुआत की थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "발자국은 여전히 맴돌았다. 다음 장소에서도 기다림은 계속될 것이다.",
						"english": "The footsteps still lingered. The waiting will continue in the next place.",
						"japanese": "足跡はまだ残っていた。次の場所でも待ち時間は続くだろう。",
						"chinese": "足迹依然徘徊。等待将在下一处继续。",
						"french": "Les pas persistaient encore. L'attente se poursuivra au prochain endroit.",
						"spanish": "Las huellas aún permanecían. La espera continuará en el próximo lugar.",
						"vietnamese": "Dấu chân vẫn còn vương vấn. Sự chờ đợi sẽ tiếp diễn ở nơi tiếp theo.",
						"thai": "รอยเท้ายังคงวนเวียน การรอคอยจะดำเนินต่อไปในสถานที่ถัดไป",
						"hindi": "पैरों के निशान अभी भी मौजूद थे। अगले स्थान पर भी इंतज़ार जारी रहेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 위, 작은 발자국이 남긴 서리꽃.",
			"그 꽃들이 한 방향을 보고 있었다.",
			"길을 인도하는 빛인가, 아니면… 무언가를 기다리는 희망인가.",
			"길잡이의 직감은 속삭였다. 이곳은 끝나지 않는 기다림의 땅이라고."
		],
		"english": [
			"Frost blossoms left by small footprints on the snowfield.",
			"Those blossoms were all facing one direction.",
			"Was it a light guiding the way, or... hope waiting for something?",
			"The guide's intuition whispered. This was a land of unending waiting."
		],
		"japanese": [
			"雪原に残された小さな足跡が作った霜の花。",
			"それらの花は皆、一方向を向いていた。",
			"道を導く光なのか、それとも…何かを待つ希望なのか。",
			"案内人の直感は囁いた。ここは終わりのない待つ土地だと。"
		],
		"chinese": [
			"雪原上，小小的脚印留下了霜花。",
			"那些花都朝向一个方向。",
			"是指引道路的光芒，还是……等待着什么的希望？",
			"向导的直觉低语着。这里是无尽等待之地。"
		],
		"french": [
			"Sur la plaine enneigée, des fleurs de givre laissées par de petites empreintes.",
			"Ces fleurs faisaient toutes face à une même direction.",
			"Était-ce une lumière guidant le chemin, ou... l'espoir d'attendre quelque chose ?",
			"L'intuition du guide chuchotait. C'était une terre d'attente interminable."
		],
		"spanish": [
			"En el campo nevado, pequeñas huellas dejaron flores de escarcha.",
			"Todas esas flores miraban en una misma dirección.",
			"¿Era una luz que guiaba el camino, o... la esperanza de esperar algo?",
			"La intuición del guía susurró. Esta era una tierra de espera interminable."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết, những bông hoa băng giá đọng lại từ dấu chân nhỏ.",
			"Những bông hoa đó đều hướng về một phía.",
			"Là ánh sáng dẫn lối, hay... hy vọng đang chờ đợi điều gì đó?",
			"Trực giác của người dẫn đường thì thầm. Đây là vùng đất của sự chờ đợi vô tận."
		],
		"thai": [
			"บนทุ่งหิมะ, ดอกไม้น้ำค้างแข็งที่ทิ้งไว้โดยรอยเท้าเล็กๆ.",
			"ดอกไม้เหล่านั้นหันไปทางเดียวกันทั้งหมด.",
			"มันคือแสงที่นำทางไป, หรือว่า...ความหวังที่รอคอยบางสิ่ง?",
			"สัญชาตญาณของผู้นำทางกระซิบ. นี่คือดินแดนแห่งการรอคอยที่ไม่มีที่สิ้นสุด."
		],
		"hindi": [
			"बर्फीले मैदान पर, छोटे पदचिह्नों द्वारा छोड़े गए पाले के फूल।",
			"वे फूल सभी एक ही दिशा में देख रहे थे।",
			"क्या यह रास्ता दिखाने वाली रोशनी थी, या... किसी चीज़ का इंतज़ार करने वाली उम्मीद?",
			"मार्गदर्शक की अंतर्ज्ञान फुसफुसाई। यह अंतहीन प्रतीक्षा की भूमि थी।"
		]
	}
} as const;
