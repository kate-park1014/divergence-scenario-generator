export const scenario_forest_nyx_40_03 = {
	"scenario_id": "forest_nyx_40_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 균형이 무너지고 있다.",
			"수호자 시더는 오염원을 찾으라 했다.",
			"하지만 숲의 모든 진실은 — 가장 위험한 밀수품.",
			"그리고 그 밀수꾼은… 누구인가."
		],
		"english": [
			"The forest's balance is breaking.",
			"The guardian, Cidar, ordered me to find the source of corruption.",
			"But the whole truth of the forest is — the most dangerous contraband.",
			"And who is that smuggler...?"
		],
		"japanese": [
			"森の均衡が崩れている。",
			"守護者シダーは汚染源を探すよう命じた。",
			"しかし、森の真実のすべては — 最も危険な密輸品。",
			"そしてその密輸犯は…誰なのか。"
		],
		"chinese": [
			"森林的平衡正在瓦解。",
			"守护者希达命令我寻找污染源。",
			"然而，森林的所有真相——却是最危险的违禁品。",
			"那么，那个走私者…是谁？"
		],
		"french": [
			"L'équilibre de la forêt se brise.",
			"Cidar, le gardien, m'a ordonné de trouver la source de la corruption.",
			"Mais toute la vérité de la forêt est — la contrebande la plus dangereuse.",
			"Et qui est ce contrebandier… ?"
		],
		"spanish": [
			"El equilibrio del bosque se rompe.",
			"Cidar, el guardián, me ordenó encontrar la fuente de la corrupción.",
			"Pero toda la verdad del bosque es — el contrabando más peligroso.",
			"¿Y quién es ese contrabandista…?"
		],
		"vietnamese": [
			"Sự cân bằng của rừng đang sụp đổ.",
			"Người bảo vệ, Cidar, đã ra lệnh cho tôi tìm nguồn ô nhiễm.",
			"Nhưng toàn bộ sự thật về khu rừng là — món hàng lậu nguy hiểm nhất.",
			"Và kẻ buôn lậu đó là… ai?"
		],
		"thai": [
			"สมดุลของป่ากำลังพังทลาย",
			"ซิดาร์ผู้พิทักษ์สั่งให้ฉันหาสาเหตุของการปนเปื้อน",
			"แต่ความจริงทั้งหมดของป่าคือ — ของเถื่อนที่อันตรายที่สุด",
			"แล้วใครคือพ่อค้าของเถื่อนคนนั้น...?"
		],
		"hindi": [
			"वन का संतुलन बिगड़ रहा है।",
			"संरक्षक सिदार ने मुझे भ्रष्टाचार का स्रोत खोजने का आदेश दिया।",
			"लेकिन वन का पूरा सच — सबसे खतरनाक तस्करी।",
			"और वह तस्कर कौन है…?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲은 겉보기엔 평화로웠다. 하지만 어딘가 뒤틀려 있었다.",
						"english": "The forest seemed peaceful, but something was twisted.",
						"japanese": "森は表向きは平和だった。しかし、どこか歪んでいた。",
						"chinese": "森林表面上很平静。但某个地方却扭曲了。",
						"french": "La forêt semblait paisible. Mais quelque chose était tordu.",
						"spanish": "El bosque parecía pacífico, pero algo estaba retorcido.",
						"vietnamese": "Rừng trông có vẻ yên bình. Nhưng có điều gì đó không ổn.",
						"thai": "ป่าดูสงบสุข แต่มีบางอย่างผิดปกติ",
						"hindi": "वन देखने में शांत था। लेकिन कहीं न कहीं कुछ गड़बड़ थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "cedar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔군. 기다리고 있었어.",
						"english": "You've arrived. I've been waiting.",
						"japanese": "来たか。待っていたぞ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Vous êtes là. Je vous attendais.",
						"spanish": "Has llegado. Te estaba esperando.",
						"vietnamese": "Ngươi đã đến. Ta đã chờ.",
						"thai": "มาแล้วสินะ ฉันกำลังรออยู่",
						"hindi": "तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "당신이 시더인가?",
						"english": "Are you Cidar?",
						"japanese": "あなたがシダーですか？",
						"chinese": "你是希达吗？",
						"french": "Êtes-vous Cidar ?",
						"spanish": "¿Eres Cidar?",
						"vietnamese": "Ngươi là Cidar?",
						"thai": "คุณคือซิดาร์ใช่ไหม?",
						"hindi": "क्या तुम सिदार हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 이 숲의 수호자.",
						"english": "Yes. The guardian of this forest.",
						"japanese": "そうだ。この森の守護者だ。",
						"chinese": "是的。我是这片森林的守护者。",
						"french": "Oui. Le gardien de cette forêt.",
						"spanish": "Sí. El guardián de este bosque.",
						"vietnamese": "Phải. Người bảo vệ khu rừng này.",
						"thai": "ใช่ ฉันคือผู้พิทักษ์ป่าแห่งนี้",
						"hindi": "हाँ। इस वन का संरक्षक।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "숲의 균형이 무너지고 있어. 감지했나?",
						"english": "The forest's balance is breaking. Have you sensed it?",
						"japanese": "森の均衡が崩れている。感知したか？",
						"chinese": "森林的平衡正在瓦解。你感觉到了吗？",
						"french": "L'équilibre de la forêt se brise. L'avez-vous senti ?",
						"spanish": "El equilibrio del bosque se está rompiendo. ¿Lo has percibido?",
						"vietnamese": "Sự cân bằng của rừng đang sụp đổ. Ngươi đã cảm nhận được chưa?",
						"thai": "สมดุลของป่ากำลังพังทลาย คุณรู้สึกได้ไหม?",
						"hindi": "वन का संतुलन बिगड़ रहा है। क्या तुमने इसे महसूस किया है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이상한 기운이 느껴지긴 해.",
						"english": "...I do feel a strange energy.",
						"japanese": "…確かに奇妙な気配は感じる。",
						"chinese": "……我确实感觉到一股奇怪的气息。",
						"french": "...Je ressens une étrange énergie.",
						"spanish": "...Sí siento una energía extraña.",
						"vietnamese": "Ta quả thật cảm thấy một luồng năng lượng kỳ lạ.",
						"thai": "...ฉันรู้สึกถึงพลังงานประหลาด",
						"hindi": "...मुझे एक अजीब सी ऊर्जा महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "특정 지역에서 오염이 심해. 원인을 찾아주겠나?",
						"english": "A certain area is heavily polluted. Can you find the cause?",
						"japanese": "特定地域で汚染がひどい。原因を探してくれるか？",
						"chinese": "某个区域污染严重。你能找到原因吗？",
						"french": "La pollution est grave dans une certaine zone. Peux-tu en trouver la cause ?",
						"spanish": "La contaminación es grave en una zona. ¿Puedes encontrar la causa?",
						"vietnamese": "Ô nhiễm nghiêm trọng ở một khu vực. Ngươi có thể tìm ra nguyên nhân không?",
						"thai": "มลพิษรุนแรงในบางพื้นที่ ช่วยหาสาเหตุได้ไหม?",
						"hindi": "एक विशेष क्षेत्र में प्रदूषण गंभीर है। क्या तुम कारण ढूंढोगे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "알겠어.",
						"english": "Understood.",
						"japanese": "分かった。",
						"chinese": "明白了。",
						"french": "Compris.",
						"spanish": "Entendido.",
						"vietnamese": "Đã rõ.",
						"thai": "รับทราบ",
						"hindi": "समझ गया।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "명심해. 숲에서 진실은 가장 위험한 밀수품이야.",
						"english": "Remember this. In the forest, truth is the most dangerous contraband.",
						"japanese": "覚えておけ。森では、真実が最も危険な密輸品だ。",
						"chinese": "记住。在这片森林里，真相是最危险的违禁品。",
						"french": "N'oublie pas. Dans la forêt, la vérité est la contrebande la plus dangereuse.",
						"spanish": "Recuérdalo. En el bosque, la verdad es el contrabando más peligroso.",
						"vietnamese": "Hãy nhớ. Trong rừng, sự thật là món hàng cấm nguy hiểm nhất.",
						"thai": "จำไว้เลย ความจริงคือของเถื่อนที่อันตรายที่สุดในป่า",
						"hindi": "याद रखना। जंगल में, सच सबसे खतरनाक तस्करी का सामान है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오염원은 생각보다 깊숙한 곳에 있었다. 인위적인 흔적이었다.",
						"english": "The source of pollution was deeper than expected. It bore artificial traces.",
						"japanese": "汚染源は思ったよりも深部にあった。それは人為的な痕跡だった。",
						"chinese": "污染源比想象中更深。那是人为的痕迹。",
						"french": "La source de la pollution était plus profonde que prévu. Il y avait des traces artificielles.",
						"spanish": "La fuente de contaminación estaba más profunda de lo esperado. Había rastros artificiales.",
						"vietnamese": "Nguồn ô nhiễm sâu hơn dự kiến. Đó là dấu vết nhân tạo.",
						"thai": "แหล่งกำเนิดมลพิษอยู่ลึกกว่าที่คิด มันเป็นร่องรอยที่มนุษย์สร้างขึ้น",
						"hindi": "प्रदूषण का स्रोत अपेक्षा से अधिक गहरा था। यह कृत्रिम निशान था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 자연적인 오염이 아니야.",
						"english": "This isn't... natural pollution.",
						"japanese": "これは…自然な汚染ではない。",
						"chinese": "这不是…自然污染。",
						"french": "Ce n'est pas... une pollution naturelle.",
						"spanish": "Esto no es... contaminación natural.",
						"vietnamese": "Đây không phải… ô nhiễm tự nhiên.",
						"thai": "นี่ไม่ใช่... มลพิษธรรมชาติ",
						"hindi": "यह... प्राकृतिक प्रदूषण नहीं है।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "발견했군. 숲은 스스로 정화하지 못하고 있어.",
						"english": "You found it. The forest can't purify itself.",
						"japanese": "見つけたな。森は自らを浄化できていない。",
						"chinese": "你发现了。森林无法自行净化。",
						"french": "Tu l'as trouvé. La forêt ne peut pas se purifier seule.",
						"spanish": "Lo encontraste. El bosque no puede purificarse solo.",
						"vietnamese": "Ngươi đã tìm thấy rồi. Rừng không thể tự làm sạch.",
						"thai": "เจอแล้วสินะ ป่าไม่สามารถชำระล้างตัวเองได้",
						"hindi": "तुमने ढूंढ लिया। जंगल खुद को शुद्ध नहीं कर पा रहा है।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이건 누군가 의도적으로 만든 거야. 자원 추출 흔적도 보여.",
						"english": "Someone made this intentionally. There are also traces of resource extraction.",
						"japanese": "これは誰かが意図的に作ったものだ。資源抽出の痕跡もある。",
						"chinese": "这是某人故意制造的。还有资源开采的痕迹。",
						"french": "Quelqu'un a fait ça intentionnellement. Il y a aussi des traces d'extraction de ressources.",
						"spanish": "Alguien hizo esto intencionalmente. También hay rastros de extracción de recursos.",
						"vietnamese": "Ai đó đã cố ý tạo ra nó. Có cả dấu vết khai thác tài nguyên.",
						"thai": "นี่มีคนสร้างขึ้นมาโดยเจตนา แถมยังมีร่องรอยการสกัดทรัพยากรด้วย",
						"hindi": "यह किसी ने जानबूझकर बनाया है। संसाधन निष्कर्षण के निशान भी दिख रहे हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "…그럴 리가. 닉스는 공정한 중개자야.",
						"english": "...That can't be. Nyx is a fair mediator.",
						"japanese": "…まさか。ニュクスは公正な仲介者だ。",
						"chinese": "……不可能。尼克斯是公正的中间人。",
						"french": "...C'est impossible. Nyx est un médiateur équitable.",
						"spanish": "...Imposible. Nyx es un mediador justo.",
						"vietnamese": "…Không thể nào. Nyx là một người hòa giải công bằng.",
						"thai": "...เป็นไปไม่ได้ นิกซ์เป็นคนกลางที่ยุติธรรม",
						"hindi": "...ऐसा हो नहीं सकता। निक्स एक निष्पक्ष मध्यस्थ है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신도 모르는 진실이 있을지도 몰라.",
						"english": "There might be a truth you don't even know.",
						"japanese": "あなたも知らない真実があるのかもしれない。",
						"chinese": "也许有你不知道的真相。",
						"french": "Il y a peut-être une vérité que tu ignores.",
						"spanish": "Podría haber una verdad que ni siquiera tú conoces.",
						"vietnamese": "Có lẽ có một sự thật mà ngươi không biết.",
						"thai": "อาจจะมีบางความจริงที่คุณเองก็ไม่รู้",
						"hindi": "शायद कोई ऐसी सच्चाई हो जो तुम भी नहीं जानते।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내가 모르는 진실이라고? 감히….",
						"english": "A truth I don't know? How dare you...",
						"japanese": "私が知らない真実だと？よくも…。",
						"chinese": "我不知道的真相？你竟敢…。",
						"french": "Une vérité que j'ignore ? Comment oses-tu...",
						"spanish": "¿Una verdad que yo no conozco? ¿Cómo te atreves...?",
						"vietnamese": "Một sự thật mà ta không biết sao? Ngươi dám…",
						"thai": "ความจริงที่ฉันไม่รู้เหรอ? กล้าดียังไง...",
						"hindi": "ऐसी सच्चाई जो मैं नहीं जानता? तुम्हारी हिम्मत कैसे हुई..."
					},
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오염의 흔적은 더욱 분명해졌다. 닉스의 그림자가 짙게 드리워져 있었다.",
						"english": "The traces of corruption became clearer. Nyx's shadow loomed heavily.",
						"japanese": "汚染の痕跡はより明白になった。ニュクスの影が色濃く差していた。",
						"chinese": "污染的痕迹变得更加清晰。尼克斯的阴影浓重地笼罩着。",
						"french": "Les traces de la corruption devinrent plus évidentes. L'ombre de Nyx planait lourdement.",
						"spanish": "Las huellas de la corrupción se hicieron más claras. La sombra de Nix se cernía pesadamente.",
						"vietnamese": "Dấu vết ô nhiễm ngày càng rõ nét. Bóng tối của Nyx bao trùm nặng nề.",
						"thai": "ร่องรอยของการปนเปื้อนชัดเจนยิ่งขึ้น เงาของนิกซ์ปกคลุมอย่างหนาทึบ",
						"hindi": "प्रदूषण के निशान और भी स्पष्ट हो गए। निक्स की छाया गहराई से छाई हुई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "시더, 당신도 속고 있는 거야.",
						"english": "Cedar, you're being deceived too.",
						"japanese": "シダー、あなたも騙されているのよ。",
						"chinese": "西达，你也被骗了。",
						"french": "Cedar, toi aussi, tu es trompé.",
						"spanish": "Cedar, tú también estás siendo engañado.",
						"vietnamese": "Cedar, anh cũng đang bị lừa đấy.",
						"thai": "ซีดาร์ เธอเองก็กำลังถูกหลอก",
						"hindi": "सीजर, तुम्हें भी धोखा दिया जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "무슨 소리냐. 내가 이 숲을 얼마나 지켜왔는데!",
						"english": "What are you talking about? How long have I protected this forest!",
						"japanese": "何を言ってるんだ。私がこの森をどれだけ守ってきたと思ってる！",
						"chinese": "你在说什么？我守护这片森林多久了！",
						"french": "De quoi parles-tu ? J'ai protégé cette forêt pendant si longtemps !",
						"spanish": "¡De qué hablas? ¡Cuánto tiempo he protegido este bosque!",
						"vietnamese": "Ngươi nói gì vậy? Ta đã bảo vệ khu rừng này bao lâu rồi!",
						"thai": "นี่แกพูดอะไร? ฉันปกป้องป่านี้มานานแค่ไหนแล้ว!",
						"hindi": "तुम क्या कह रहे हो? मैंने इस जंगल की कितनी रक्षा की है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 오염은 닉스가 자원을 빼내려고 만든 거야. 당신은 그의 계획의 일부였다고!",
						"english": "This corruption was created by Nyx to extract resources. You were part of his plan!",
						"japanese": "この汚染はニュクスが資源を奪うために作ったものよ。あなたは彼の計画の一部だったのよ！",
						"chinese": "这污染是尼克斯为了掠夺资源而制造的。你就是他计划的一部分！",
						"french": "Cette corruption a été créée par Nyx pour extraire des ressources. Tu faisais partie de son plan !",
						"spanish": "Esta contaminación fue creada por Nix para extraer recursos. ¡Eras parte de su plan!",
						"vietnamese": "Ô nhiễm này là do Nyx tạo ra để khai thác tài nguyên. Ngươi là một phần trong kế hoạch của hắn!",
						"thai": "การปนเปื้อนนี้เกิดจากนิกซ์เพื่อแย่งชิงทรัพยากร เธอเป็นส่วนหนึ่งของแผนการเขา!",
						"hindi": "यह प्रदूषण निक्स ने संसाधनों को निकालने के लिए बनाया था। तुम उसकी योजना का हिस्सा थे!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "…말도 안 돼. 닉스는 숲의 질서를 지키는….",
						"english": "...That's impossible. Nyx protects the order of the forest...",
						"japanese": "…まさか。ニュクスは森の秩序を守る…。",
						"chinese": "……不可能。尼克斯是守护森林秩序的……",
						"french": "...C'est impossible. Nyx protège l'ordre de la forêt...",
						"spanish": "...No puede ser. Nix protege el orden del bosque...",
						"vietnamese": "...Không thể nào. Nyx là người giữ gìn trật tự của rừng...",
						"thai": "เป็นไปไม่ได้ นิกซ์เป็นผู้พิทักษ์ความสงบเรียบร้อยของป่า...",
						"hindi": "...यह असंभव है। निक्स जंगल की व्यवस्था की रक्षा करता है..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정신 차려! 당신도 이용당하고 있어!",
						"english": "Snap out of it! You're being used too!",
						"japanese": "目を覚まして！あなたも利用されているんだ！",
						"chinese": "清醒点！你也被利用了！",
						"french": "Reprends-toi ! Tu es aussi utilisé !",
						"spanish": "¡Despierta! ¡Tú también estás siendo utilizado!",
						"vietnamese": "Tỉnh táo lại đi! Ngươi cũng đang bị lợi dụng đấy!",
						"thai": "ตั้งสติหน่อย! เธอเองก็กำลังถูกหลอกใช้!",
						"hindi": "होश में आओ! तुम्हें भी इस्तेमाल किया जा रहा है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "…내가… 내가 뭘 잘못 안 거지….",
						"english": "...What... what did I misunderstand...?",
						"japanese": "…私が…何を間違えてたんだ…。",
						"chinese": "……我……我到底误解了什么……",
						"french": "...Qu'est-ce que... qu'ai-je mal compris...?",
						"spanish": "...Qué... qué entendí mal...?",
						"vietnamese": "...Mình... mình đã hiểu sai điều gì...?",
						"thai": "ฉัน... ฉันเข้าใจอะไรผิดไปกันแน่...",
						"hindi": "...मैंने... मैंने क्या गलत समझा...?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "시더는 충격에 빠진 듯했다. 그러나 오염은 멈추지 않고 숲을 잠식했다.",
						"english": "Cedar seemed to be in shock. But the corruption didn't stop, engulfing the forest.",
						"japanese": "シダーは衝撃を受けているようだった。しかし汚染は止まることなく森を侵食した。",
						"chinese": "西达似乎陷入了震惊。然而，污染并未停止，继续吞噬着森林。",
						"french": "Cedar semblait sous le choc. Mais la corruption ne s'arrêtait pas, engloutissant la forêt.",
						"spanish": "Cedar parecía estar en shock. Pero la corrupción no se detuvo, devorando el bosque.",
						"vietnamese": "Cedar dường như đang bị sốc. Nhưng sự ô nhiễm không ngừng lại, nuốt chửng khu rừng.",
						"thai": "ซีดาร์ดูเหมือนจะตกอยู่ในอาการช็อก แต่การปนเปื้อนก็ยังคงไม่หยุดยั้งและกลืนกินป่า",
						"hindi": "सीजर सदमे में लग रहा था। लेकिन प्रदूषण नहीं रुका, और जंगल को निगल गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "더 이상 물러날 곳은 없어. 진실을 밝혀야 해.",
						"english": "There's nowhere left to retreat. The truth must be revealed.",
						"japanese": "もう後には引けない。真実を明らかにしなければならない。",
						"chinese": "没有退路了。必须揭示真相。",
						"french": "Il n'y a plus de place pour reculer. La vérité doit être révélée.",
						"spanish": "No hay lugar para retroceder. La verdad debe ser revelada.",
						"vietnamese": "Không còn đường lui nữa. Phải làm sáng tỏ sự thật.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว ต้องเปิดเผยความจริง",
						"hindi": "पीछे हटने के लिए कोई जगह नहीं बची है। सच्चाई उजागर होनी चाहिए।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "cedar",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어쩌면… 내가 너무 안일했는지도 몰라.",
						"english": "Perhaps... I might have been too complacent.",
						"japanese": "もしかしたら…私が油断しすぎていたのかもしれない。",
						"chinese": "也许……我可能太 complacent 了。",
						"french": "Peut-être... que j'ai été trop complaisant.",
						"spanish": "Quizás... fui demasiado complaciente.",
						"vietnamese": "Có lẽ... mình đã quá tự mãn.",
						"thai": "บางที... ฉันอาจจะประมาทเกินไป",
						"hindi": "शायद... मैं बहुत आत्मसंतुष्ट था।"
					},
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제라도 깨달았으면 됐어. 함께 막아야 해.",
						"english": "It's good you realized it now. We must stop it together.",
						"japanese": "今、気づけたのならそれでいい。共に止めなければ。",
						"chinese": "现在醒悟也不晚。我们必须一同阻止它。",
						"french": "C'est bien que tu l'aies réalisé maintenant. Nous devons l'arrêter ensemble.",
						"spanish": "Está bien que lo hayas comprendido ahora. Debemos detenerlo juntos.",
						"vietnamese": "Giờ nhận ra cũng không muộn. Chúng ta phải cùng nhau ngăn chặn nó.",
						"thai": "ดีแล้วที่ตอนนี้เจ้าเข้าใจแล้ว เราต้องหยุดมันด้วยกัน",
						"hindi": "अब समझ गए तो ठीक है। हमें मिलकर इसे रोकना होगा。"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "…그림자가 너무 깊어서… 나 혼자서는….",
						"english": "...The shadow is too deep... I can't do it alone...",
						"japanese": "…影が深すぎて…私一人では…",
						"chinese": "…阴影太深了…我一个人…",
						"french": "...L'ombre est trop profonde... Je ne peux pas le faire seul...",
						"spanish": "...La sombra es demasiado profunda... Yo solo no puedo...",
						"vietnamese": "...Bóng tối quá sâu... Một mình tôi thì...",
						"thai": "...เงาช่างลึกนัก... ข้าคนเดียวคงไม่ไหว...",
						"hindi": "...छाया बहुत गहरी है... मैं अकेला नहीं कर सकता..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "혼자가 아니야. 우리는 멈추지 않아.",
						"english": "You're not alone. We won't stop.",
						"japanese": "一人じゃない。私たちは止まらない。",
						"chinese": "你不是一个人。我们不会停下。",
						"french": "Tu n'es pas seul. Nous ne nous arrêterons pas.",
						"spanish": "No estás solo. No nos detendremos.",
						"vietnamese": "Bạn không đơn độc. Chúng ta sẽ không dừng lại.",
						"thai": "เจ้าไม่ได้อยู่คนเดียว เราจะไม่หยุด",
						"hindi": "तुम अकेले नहीं हो। हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "오염된 기운이 탐험대를 집어삼켰다.",
						"english": "The corrupted energy swallowed the expedition.",
						"japanese": "「汚染された気が、探検隊を飲み込んだ。」",
						"chinese": "“被污染的气息吞噬了探险队。”",
						"french": "“L'énergie corrompue a englouti l'expédition.”",
						"spanish": "“La energía corrupta engulló a la expedición.”",
						"vietnamese": "“Luồng khí ô nhiễm đã nuốt chửng đoàn thám hiểm.”",
						"thai": "“พลังงานที่ปนเปื้อนกลืนกินคณะสำรวจ”",
						"hindi": "“दूषित ऊर्जा ने अभियान दल को निगल लिया।”"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항. 너희는 닉스의 손아귀에서 벗어날 수 없어.",
						"english": "Futile resistance. You cannot escape Nyx's grasp.",
						"japanese": "「取るに足らない抵抗だな。貴様らはニックスの手から逃れられん。」",
						"chinese": "“可笑的抵抗。你们逃不出尼克斯的手掌心。”",
						"french": "“Résistance futile. Vous ne pouvez échapper à l'emprise de Nyx.”",
						"spanish": "“Resistencia inútil. No podéis escapar del agarre de Nyx.”",
						"vietnamese": "“Sự kháng cự vô ích. Ngươi không thể thoát khỏi bàn tay của Nyx.”",
						"thai": "“การต่อต้านที่ไร้ค่า เจ้าไม่มีทางหนีพ้นจากเงื้อมมือของนิกซ์ได้หรอก”",
						"hindi": "“तुच्छ प्रतिरोध। तुम निक्स की पकड़ से बच नहीं सकते।”"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어!",
						"english": "...Damn it. It's not... over yet!",
						"japanese": "「…くそ。まだ…終わってない！」",
						"chinese": "“……该死。还没……结束！”",
						"french": "“...Maudits. Ce n'est pas... encore fini !”",
						"spanish": "“...Maldita sea. ¡Todavía no... ha terminado!”",
						"vietnamese": "“...Chết tiệt. Vẫn chưa... kết thúc!”",
						"thai": "“...บ้าจริง ยังไม่... จบ!”",
						"hindi": "“...धत् तेरे की। अभी... खत्म नहीं हुआ!”"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 네가… 감히….",
						"english": "Ugh... You... how dare you...",
						"japanese": "くっ…貴様…よくも…",
						"chinese": "呃…你…竟敢…",
						"french": "Ugh... Toi... comment oses-tu...",
						"spanish": "Ugh... Tú... cómo te atreves...",
						"vietnamese": "Khục... Ngươi... dám...",
						"thai": "อึ่ก... เจ้า... บังอาจ...",
						"hindi": "उफ़... तुमने... हिम्मत कैसे की..."
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하지만 명심해라… {random_boss}는… 하나의 그림자에 불과하다….",
						"english": "But remember... {random_boss} is... merely one shadow...",
						"japanese": "だが覚えておけ… {random_boss}は…一つの影に過ぎない…",
						"chinese": "但请记住… {random_boss}… 不过是一个影子…",
						"french": "Mais retiens bien... {random_boss} n'est... qu'une ombre...",
						"spanish": "Pero recuerda... {random_boss} es... solo una sombra...",
						"vietnamese": "Nhưng hãy nhớ rằng... {random_boss}... chỉ là một cái bóng...",
						"thai": "แต่จำไว้... {random_boss} เป็น... เพียงแค่เงาเดียว...",
						"hindi": "लेकिन याद रखना... {random_boss}... केवल एक छाया है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What was that!?",
						"japanese": "「何事だ！？」",
						"chinese": "“什么声音！？”",
						"french": "“Qu'est-ce que c'était !?”",
						"spanish": "“¡¿Qué fue eso?!”",
						"vietnamese": "“Cái gì thế!?”",
						"thai": "“อะไรน่ะ!?”",
						"hindi": "“यह क्या था!?”"
					},
					"emotion": "angry"
				},
				{
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "역시… 닉스… 그의 영향력은 생각보다 깊어.",
						"english": "As expected... Nyx... his influence runs deeper than we thought.",
						"japanese": "「やはり… ニックス… 奴の影響力は想像以上に深い…」",
						"chinese": "“果然是……尼克斯……他的影响力比想象中更深。”",
						"french": "“Comme prévu... Nyx... son influence est plus profonde qu'on ne le pensait.”",
						"spanish": "“Como esperaba... Nyx... su influencia es más profunda de lo que creíamos.”",
						"vietnamese": "“Quả nhiên... Nyx... Ảnh hưởng của hắn sâu xa hơn ta nghĩ.”",
						"thai": "“เป็นไปตามคาด... นิกซ์... อิทธิพลของมันลึกซึ้งกว่าที่คิด”",
						"hindi": "“जैसा कि सोचा था... निक्स... उसका प्रभाव हमारी सोच से भी गहरा है।”"
					},
					"type": "speech",
					"speaker": "cedar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "중간 보스를 쓰러뜨렸다. 하지만 숲의 오염은 여전했다.",
						"english": "The mid-boss fell. Yet the forest's corruption remained.",
						"japanese": "「中ボスを倒した。だが、森の汚染は依然として残っていた。」",
						"chinese": "“击败了中级头目。然而，森林的污染依然存在。”",
						"french": "“Le boss intermédiaire est tombé. Mais la corruption de la forêt persistait.”",
						"spanish": "“Derrotamos al jefe intermedio. Pero la corrupción del bosque persistía.”",
						"vietnamese": "“Đã hạ gục trùm giữa. Tuy nhiên, sự ô nhiễm của rừng vẫn còn đó.”",
						"thai": "“กำจัดบอสกึ่งกลางได้แล้ว แต่การปนเปื้อนของป่ายังคงอยู่”",
						"hindi": "“हमने मध्य-बॉस को हरा दिया। लेकिन जंगल का प्रदूषण अभी भी बरकरार था।”"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "더 깊은 진실이, 탐험대를 기다리고 있었다.",
						"english": "A deeper truth awaited the expedition.",
						"japanese": "「より深い真実が、探検隊を待ち受けていた。」",
						"chinese": "“更深层的真相，正等待着探险队。”",
						"french": "“Une vérité plus profonde attendait l'expédition.”",
						"spanish": "“Una verdad más profunda esperaba a la expedición.”",
						"vietnamese": "“Một sự thật sâu xa hơn đang chờ đợi đoàn thám hiểm.”",
						"thai": "“ความจริงที่ลึกซึ้งกว่า กำลังรอคณะสำรวจอยู่”",
						"hindi": "“एक गहरा सच अभियान दल का इंतजार कर रहा था।”"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오염의 근원지. 그곳에는 숲의 균형을 깨뜨린 주범이 기다리고 있었다.",
						"english": "The source of the corruption. There, the main culprit who broke the forest's balance awaited.",
						"japanese": "汚染の根源。そこには森の均衡を破った主犯が待ち構えていた。",
						"chinese": "污染的源头。在那里，打破森林平衡的元凶正在等待。",
						"french": "La source de la corruption. Là, le principal coupable qui avait rompu l'équilibre de la forêt attendait.",
						"spanish": "La fuente de la corrupción. Allí, esperaba el principal culpable que rompió el equilibrio del bosque.",
						"vietnamese": "Nguồn gốc của sự ô nhiễm. Ở đó, kẻ chủ mưu phá vỡ sự cân bằng của rừng đang chờ đợi.",
						"thai": "แหล่งกำเนิดของการปนเปื้อน ที่นั่น ผู้ร้ายตัวฉกาจที่ทำลายสมดุลของป่ากำลังรออยู่",
						"hindi": "प्रदूषण का स्रोत। वहाँ, जंगल का संतुलन बिगाड़ने वाला मुख्य अपराधी इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자. 숲의 균형은 이미 내가 정했다.",
						"english": "Fool. I have already decided the forest's balance.",
						"japanese": "愚か者め。森の均衡は既に私が定めた。",
						"chinese": "愚蠢之人。森林的平衡早已由我决定。",
						"french": "Imbécile. J'ai déjà décidé de l'équilibre de la forêt.",
						"spanish": "Necio. El equilibrio del bosque ya lo he decidido yo.",
						"vietnamese": "Kẻ ngốc. Ta đã quyết định sự cân bằng của rừng rồi.",
						"thai": "คนโง่ เขาสมดุลของป่า ข้ากำหนดไว้แล้ว",
						"hindi": "मूर्ख। जंगल का संतुलन मैंने पहले ही तय कर दिया है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 숲을 망쳤어!",
						"english": "You ruined this forest!",
						"japanese": "お前がこの森を滅茶苦茶にしたんだ！",
						"chinese": "你毁了这片森林！",
						"french": "Tu as ruiné cette forêt !",
						"spanish": "¡Tú arruinaste este bosque!",
						"vietnamese": "Ngươi đã phá hủy khu rừng này!",
						"thai": "เจ้าทำลายป่านี้!",
						"hindi": "तुमने इस जंगल को बर्बाद कर दिया!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "망친 것이 아니다. 새로운 질서를 세우는 중이지.",
						"english": "I didn't ruin it. I'm establishing a new order.",
						"japanese": "滅茶苦茶にしたのではない。新たな秩序を築いているのだ。",
						"chinese": "我没有毁掉它。我正在建立新的秩序。",
						"french": "Je ne l'ai pas ruiné. J'établis un nouvel ordre.",
						"spanish": "No lo he arruinado. Estoy estableciendo un nuevo orden.",
						"vietnamese": "Không phải phá hủy. Ta đang thiết lập một trật tự mới.",
						"thai": "ข้าไม่ได้ทำลาย ข้ากำลังสร้างระเบียบใหม่ต่างหาก",
						"hindi": "मैंने इसे बर्बाद नहीं किया। मैं एक नई व्यवस्था स्थापित कर रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네 거짓된 질서는 여기서 끝이야.",
						"english": "Your false order ends here.",
						"japanese": "お前の偽りの秩序はここで終わりだ。",
						"chinese": "你虚假的秩序到此为止。",
						"french": "Ton ordre mensonger prend fin ici.",
						"spanish": "Tu falso orden termina aquí.",
						"vietnamese": "Trật tự giả dối của ngươi kết thúc tại đây.",
						"thai": "ระเบียบจอมปลอมของเจ้าจะจบลงที่นี่",
						"hindi": "तुम्हारी झूठी व्यवस्था यहीं खत्म होती है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
