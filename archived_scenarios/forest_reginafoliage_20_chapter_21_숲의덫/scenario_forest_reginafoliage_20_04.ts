export const scenario_forest_reginafoliage_20_04 = {
	"scenario_id": "forest_reginafoliage_20_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 기형적인 식물들이 길을 막았다.",
						"english": "The forest grew deeper. Deformed plants blocked the way.",
						"japanese": "森はさらに深くなった。奇形的な植物が道を塞いでいた。",
						"chinese": "森林愈发深邃。畸形的植物挡住了去路。",
						"french": "La forêt s'épaississait. Des plantes difformes bloquaient le chemin.",
						"spanish": "El bosque se hizo más profundo. Plantas deformes bloqueaban el camino.",
						"vietnamese": "Khu rừng càng sâu hơn. Những loài cây dị dạng chắn lối đi.",
						"thai": "ป่ายิ่งลึกเข้าไป พืชผิดรูปปิดกั้นเส้นทาง",
						"hindi": "जंगल और गहरा होता गया। विकृत पौधों ने रास्ता रोक दिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "briar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "이 길로 가야 합니다. 가장 빠른 지름길이죠.",
						"english": "We must take this path. It's the quickest shortcut.",
						"japanese": "この道を行きましょう。一番の近道です。",
						"chinese": "我们必须走这条路。这是最快的捷径。",
						"french": "Nous devons prendre ce chemin. C'est le raccourci le plus rapide.",
						"spanish": "Debemos tomar este camino. Es el atajo más rápido.",
						"vietnamese": "Chúng ta phải đi lối này. Đây là đường tắt nhanh nhất.",
						"thai": "เราต้องไปทางนี้ มันคือทางลัดที่เร็วที่สุด",
						"hindi": "हमें इस रास्ते से जाना चाहिए। यह सबसे छोटा रास्ता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기가 지름길이라고?",
						"english": "...This is a shortcut?",
						"japanese": "…ここが近道だと？",
						"chinese": "……这里是捷径？",
						"french": "...C'est un raccourci ?",
						"spanish": "...¿Esto es un atajo?",
						"vietnamese": "...Đây là đường tắt sao?",
						"thai": "...นี่คือทางลัดเหรอ?",
						"hindi": "...यह एक छोटा रास्ता है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "네. 저 촉수들은 독성이 있지만, 특정 부위를 노리면 무력화됩니다.",
						"english": "Yes. Those tentacles are poisonous, but if you aim for specific spots, they can be neutralized.",
						"japanese": "はい。あの触手は毒性がありますが、特定部位を狙えば無力化できます。",
						"chinese": "是的。那些触手有毒，但如果瞄准特定部位，就可以使其失效。",
						"french": "Oui. Ces tentacules sont venimeux, mais si vous visez des points spécifiques, elles peuvent être neutralisées.",
						"spanish": "Sí. Esos tentáculos son venenosos, pero si apuntas a puntos específicos, pueden ser neutralizados.",
						"vietnamese": "Vâng. Những xúc tu đó có độc, nhưng nếu nhắm vào các điểm cụ thể, chúng có thể bị vô hiệu hóa.",
						"thai": "ใช่ หนวดเหล่านั้นมีพิษ แต่ถ้าเล็งที่จุดเฉพาะ พวกมันก็สามารถถูกทำให้ไร้ผลได้",
						"hindi": "हाँ। उन टेंटेकल्स में जहर है, लेकिन अगर आप विशिष्ट स्थानों पर निशाना लगाते हैं, तो उन्हें बेअसर किया जा सकता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…아무도 없는 숲에서 어떻게 그걸 알지?",
						"english": "...How do you know that in a forest where no one else is around?",
						"japanese": "…誰もいない森でどうしてそれを知っているんだ？",
						"chinese": "……在这荒无人烟的森林里，你怎么会知道这些？",
						"french": "...Comment sais-tu ça dans une forêt où il n'y a personne ?",
						"spanish": "...¿Cómo sabes eso en un bosque donde no hay nadie más?",
						"vietnamese": "Làm sao anh biết điều đó trong một khu rừng không có ai khác?",
						"thai": "...คุณรู้ได้อย่างไรในป่าที่ไม่มีใครอยู่?",
						"hindi": "बिना किसी के जंगल में तुम्हें यह कैसे पता है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 기운은 더욱 섬뜩해졌다. 공기는 끈적했고, 불쾌한 냄새가 났다.",
						"english": "The forest's aura grew more sinister. The air was sticky and carried an unpleasant odor.",
						"japanese": "森の気配はさらに不気味になった。空気は粘りつき、不快な匂いがした。",
						"chinese": "森林的气息愈发诡异。空气黏腻，散发着令人不悦的气味。",
						"french": "L'aura de la forêt devint plus sinistre. L'air était collant et portait une odeur désagréable.",
						"spanish": "El aura del bosque se volvió más siniestra. El aire era pegajoso y desprendía un olor desagradable.",
						"vietnamese": "Hào quang của khu rừng trở nên đáng sợ hơn. Không khí dính nhớp và mang mùi khó chịu.",
						"thai": "บรรยากาศของป่ายิ่งน่าขนลุก อากาศเหนียวเหนอะหนะและมีกลิ่นไม่พึงประสงค์",
						"hindi": "जंगल का औरा और भी भयावह हो गया। हवा चिपचिपी थी और उसमें एक अप्रिय गंध थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "보세요. 이 가시 덩굴은 곧 터질 겁니다. 폭발하면 주변에 환각제를 퍼뜨리죠.",
						"english": "Look. These thorny vines are about to burst. When they explode, they'll spread hallucinogens around.",
						"japanese": "見て。この茨の蔓はもうすぐ破裂する。爆発すると、周囲に幻覚剤を撒き散らすだろう。",
						"chinese": "看。这些带刺的藤蔓很快就会爆裂。爆炸后，它们会将致幻剂散布到周围。",
						"french": "Regardez. Ces lianes épineuses sont sur le point d'éclater. Quand elles exploseront, elles répandront des hallucinogènes autour.",
						"spanish": "Mira. Estas enredaderas espinosas están a punto de estallar. Cuando exploten, esparcirán alucinógenos por los alrededores.",
						"vietnamese": "Nhìn kìa. Những dây leo đầy gai này sắp nổ tung. Khi chúng phát nổ, chúng sẽ phát tán chất gây ảo giác ra xung quanh.",
						"thai": "ดูสิ เถาวัลย์หนามเหล่านี้กำลังจะแตกออก เมื่อพวกมันระเบิด มันจะแพร่กระจายสารหลอนประสาทไปทั่วบริเวณ",
						"hindi": "देखो। ये कांटेदार लताएँ फटने वाली हैं। जब वे फटेंगी, तो आसपास मतिभ्रम करने वाली दवाएँ फैला देंगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "briar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너무 자세히 아는 거 아니야?",
						"english": "You know too much, don't you?",
						"japanese": "詳しすぎませんか？",
						"chinese": "你是不是知道得太多了？",
						"french": "Tu n'en sais pas un peu trop ?",
						"spanish": "¿No sabes demasiado?",
						"vietnamese": "Anh biết quá nhiều rồi đấy.",
						"thai": "คุณรู้ละเอียดเกินไปหรือเปล่า?",
						"hindi": "आप बहुत ज़्यादा नहीं जानते?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "오래 살다 보니 자연스럽게 알게 됐습니다.",
						"english": "Living long enough, one naturally learns.",
						"japanese": "長く生きているうちに、自然と知るようになりました。",
						"chinese": "活得久了，自然而然就知道了。",
						"french": "À force de vivre, on apprend naturellement.",
						"spanish": "Con el tiempo, uno aprende naturalmente.",
						"vietnamese": "Sống lâu rồi thì tự nhiên biết thôi.",
						"thai": "อยู่นานเข้าก็รู้เองตามธรรมชาติครับ",
						"hindi": "लंबे समय तक जीने से, स्वाभाविक रूप से पता चल गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…왠지 모르게 불길해.",
						"english": "...Somehow, I have a bad feeling.",
						"japanese": "…なんだか、不吉な予感がする。",
						"chinese": "……总觉得有点不祥。",
						"french": "...D'une certaine manière, c'est de mauvais augure.",
						"spanish": "...De alguna forma, presiento algo malo.",
						"vietnamese": "...Không hiểu sao, thấy bất ổn quá.",
						"thai": "บอกไม่ถูก แต่รู้สึกสังหรณ์ไม่ดีเลย",
						"hindi": "…किसी तरह, मुझे बुरा शगुन लग रहा है।"
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사방이 뒤틀린 식물로 가득했다. 출구가 보이지 않았다.",
						"english": "Twisted plants filled every direction. No exit was visible.",
						"japanese": "四方はねじれた植物で覆われていた。出口は見えなかった。",
						"chinese": "四周充满了扭曲的植物。看不见出口。",
						"french": "Des plantes tordues remplissaient les environs. Aucune sortie n'était visible.",
						"spanish": "Plantas retorcidas llenaban todo. No se veía salida.",
						"vietnamese": "Xung quanh tràn ngập những loài cây leo xoắn. Không thấy lối ra.",
						"thai": "ทุกทิศทางเต็มไปด้วยพืชที่บิดเบี้ยว มองไม่เห็นทางออก",
						"hindi": "मुड़े हुए पौधों से हर तरफ भरा हुआ था। कोई निकास नहीं दिख रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "briar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "브라이어, 여기가 지름길이라고?",
						"english": "Briar, this is a shortcut?",
						"japanese": "ブライア、ここが近道だって？",
						"chinese": "布莱尔，这里是捷径吗？",
						"french": "Briar, c'est un raccourci ?",
						"spanish": "Briar, ¿esto es un atajo?",
						"vietnamese": "Briar, đây là đường tắt à?",
						"thai": "ไบรเออร์ ที่นี่คือทางลัดเหรอ?",
						"hindi": "ब्रायर, क्या यह एक शॉर्टकट है?"
					}
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "후후… 네. 이 숲의 \"정원사\"가 가장 좋아하는 길이죠.",
						"english": "Hehe... Yes. It's the \"gardener's\" favorite path in this forest.",
						"japanese": "ふふ…ええ。この森の「庭師」が一番好きな道ですよ。",
						"chinese": "呵呵…是的。这是这片森林的“园丁”最喜欢的路。",
						"french": "Huhu... Oui. C'est le chemin préféré du \"jardinier\" de cette forêt.",
						"spanish": "Jeje... Sí. Es el camino favorito del \"jardinero\" de este bosque.",
						"vietnamese": "Hì hì... Vâng. Đây là con đường mà \"người làm vườn\" của khu rừng này thích nhất.",
						"thai": "ฮึฮึ... ครับ เป็นทางที่ \"คนสวน\" ของป่าแห่งนี้โปรดปรานที่สุดเลยล่ะครับ",
						"hindi": "हीही... हाँ। यह इस जंगल के \"माली\" का पसंदीदा रास्ता है।"
					},
					"speaker": "briar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…정원사?",
						"english": "...Gardener?",
						"japanese": "…庭師、ですって？",
						"chinese": "……园丁？",
						"french": "...Jardinier ?",
						"spanish": "...¿Jardinero?",
						"vietnamese": "...Người làm vườn?",
						"thai": "...คนสวนเหรอ?",
						"hindi": "...माली?"
					},
					"speaker": "character_3"
				},
				{
					"speaker": "briar",
					"emotion": "base",
					"content": {
						"korean": "아름답지 않나요? 완벽하게 통제된 혼돈.",
						"english": "Isn't it beautiful? Perfectly controlled chaos.",
						"japanese": "美しくないですか？完璧に制御された混沌。",
						"chinese": "不觉得很美吗？完美受控的混沌。",
						"french": "N'est-ce pas magnifique ? Un chaos parfaitement contrôlé.",
						"spanish": "¿No es hermoso? Caos perfectamente controlado.",
						"vietnamese": "Đẹp tuyệt phải không? Sự hỗn loạn được kiểm soát hoàn hảo.",
						"thai": "ไม่สวยงามหรือครับ? ความสับสนที่ถูกควบคุมอย่างสมบูรณ์แบบ",
						"hindi": "क्या यह सुंदर नहीं है? पूरी तरह से नियंत्रित अराजकता।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "설마… 우리를 속인 거야?",
						"english": "Surely... you tricked us?",
						"japanese": "まさか…私たちを騙したの？",
						"chinese": "难道……你骗了我们？",
						"french": "Tu ne serais pas... en train de nous tromper ?",
						"spanish": "No me digas... ¿Nos engañaste?",
						"vietnamese": "Chẳng lẽ... ngươi đã lừa chúng ta?",
						"thai": "ไม่นะ... เธอหลอกเราเหรอ?",
						"hindi": "कहीं... तुमने हमें धोखा दिया है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "믿었던 조력자의 가면이 벗겨졌다. 분노가 치밀었다.",
						"english": "The mask of the trusted ally was removed. Fury surged.",
						"japanese": "信じていた協力者の仮面が剥がされた。怒りがこみ上げた。",
						"chinese": "信任的助手的面具被揭开了。怒火中烧。",
						"french": "Le masque de l'allié de confiance tomba. La fureur monta.",
						"spanish": "La máscara del aliado de confianza cayó. La furia se desató.",
						"vietnamese": "Mặt nạ của người cộng sự đáng tin cậy đã bị lột bỏ. Cơn giận bùng lên.",
						"thai": "หน้ากากของผู้ช่วยที่ไว้ใจถูกถอดออก ความโกรธปะทุขึ้น",
						"hindi": "विश्वसनीय सहायक का मुखौटा उतर गया। क्रोध उमड़ पड़ा।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "처음부터 우리를 함정으로 몰아넣을 생각이었군!",
						"english": "You planned to trap us from the start!",
						"japanese": "最初から我々を罠にはめるつもりだったのか！",
						"chinese": "你从一开始就打算把我们引入陷阱！",
						"french": "Tu avais l'intention de nous piéger dès le début !",
						"spanish": "¡Planeaste tendernos una trampa desde el principio!",
						"vietnamese": "Ngươi đã định bẫy chúng ta ngay từ đầu!",
						"thai": "แกตั้งใจจะล่อเราเข้ากับดักตั้งแต่แรก!",
						"hindi": "तुमने हमें शुरुआत से ही फंसाने की सोची थी!"
					}
				},
				{
					"content": {
						"korean": "후회는 없어요. 그분께 바치는 작은 선물입니다.",
						"english": "No regrets. A small offering for them.",
						"japanese": "後悔はありません。あの方への小さな贈り物です。",
						"chinese": "我没有遗憾。这是献给祂的小小礼物。",
						"french": "Aucun regret. C'est un petit présent pour eux.",
						"spanish": "Sin remordimientos. Es un pequeño obsequio para Ellos.",
						"vietnamese": "Không hối tiếc. Đây là món quà nhỏ dành cho người đó.",
						"thai": "ไม่เสียใจ นี่คือของขวัญเล็กๆ น้อยๆ แด่ท่านผู้นั้น",
						"hindi": "कोई पछतावा नहीं। यह उनके लिए एक छोटा सा उपहार है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "그분이라니… 대체 누구야?!",
						"english": "Them...? Who are they?!",
						"japanese": "あの方だと…一体誰なんだ？！",
						"chinese": "祂们……到底是谁？！",
						"french": "Eux... Mais qui sont-ils ?!",
						"spanish": "¿Ellos...? ¿Quiénes son, después de todo?!",
						"vietnamese": "Người đó...? Rốt cuộc là ai?!",
						"thai": "ท่านผู้นั้น... ใครกันแน่?!",
						"hindi": "वे...? आखिर कौन हैं वे?!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "궁금하면… 더 깊이 들어오세요.",
						"english": "Curious...? Then come deeper.",
						"japanese": "気になるなら…もっと深くお入りなさい。",
						"chinese": "如果你好奇……那就深入一点吧。",
						"french": "Si tu es curieux... entre plus profondément.",
						"spanish": "Si tienes curiosidad... ven más adentro.",
						"vietnamese": "Nếu tò mò... hãy vào sâu hơn nữa.",
						"thai": "ถ้าอยากรู้... ก็เข้ามาให้ลึกกว่านี้สิ",
						"hindi": "अगर उत्सुक हो... तो और अंदर आओ।"
					},
					"emotion": "happy"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "up",
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "도망칠 생각 마!",
						"english": "Don't even think about escaping!",
						"japanese": "逃げようなどと思うな！",
						"chinese": "别想逃跑！",
						"french": "Ne pense pas à t'échapper !",
						"spanish": "¡Ni se te ocurra escapar!",
						"vietnamese": "Đừng hòng trốn thoát!",
						"thai": "อย่าคิดจะหนี!",
						"hindi": "भागने की सोचना भी मत!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뒤틀린 식물들이 탐험대를 집어삼켰다. 끝없는 어둠 속으로.",
						"english": "Twisted plants devoured the expedition team. Into endless darkness.",
						"japanese": "ねじれた植物が探検隊を飲み込んだ。終わりのない闇の中へ。",
						"chinese": "扭曲的植物吞噬了探险队。坠入无尽的黑暗之中。",
						"french": "Des plantes tordues ont dévoré l'équipe d'expédition. Dans l'obscurité sans fin.",
						"spanish": "Las plantas retorcidas devoraron al equipo de expedición. Hacia la oscuridad infinita.",
						"vietnamese": "Thực vật xoắn xuýt nuốt chửng đội thám hiểm. Vào bóng tối vô tận.",
						"thai": "พืชที่บิดเบี้ยวกลืนกินคณะสำรวจ เข้าสู่ความมืดมิดอันไร้ที่สิ้นสุด",
						"hindi": "मुड़ हुए पौधों ने अभियान दल को निगल लिया। अनंत अंधकार में।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아직 멀었군. 너희는 그분의 완벽함을 이해 못 해.",
						"english": "...Still a long way to go. You don't understand His perfection.",
						"japanese": "…まだまだだな。お前たちには、彼の完璧さが理解できない。",
						"chinese": "……还差得远呢。你们无法理解祂的完美。",
						"french": "...Encore un long chemin. Vous ne comprenez pas Sa perfection.",
						"spanish": "...Aún falta mucho. No entienden Su perfección.",
						"vietnamese": "...Vẫn còn xa lắm. Ngươi không hiểu được sự hoàn hảo của Ngài.",
						"thai": "...ยังอีกไกลนัก พวกเจ้าไม่เข้าใจความสมบูรณ์แบบของท่าน",
						"hindi": "...अभी बहुत दूर है। तुम उसकी पूर्णता को नहीं समझते।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 여기서 멈출 순 없어!",
						"english": "Urgh... I can't stop here!",
						"japanese": "くっ… ここで止まるわけにはいかない！",
						"chinese": "呃… 我不能停在这里！",
						"french": "Ugh... Je ne peux pas m'arrêter ici !",
						"spanish": "Uf... ¡No puedo parar aquí!",
						"vietnamese": "Ưgh... Không thể dừng lại ở đây được!",
						"thai": "อึก... ข้าหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "उफ़... मैं यहाँ रुक नहीं सकता!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"content": {
						"korean": "다시… 일어설 거야.",
						"english": "I'll... rise again.",
						"japanese": "もう一度… 立ち上がる。",
						"chinese": "我会… 再次站起来的。",
						"french": "Je vais... me relever.",
						"spanish": "Volveré... a levantarme.",
						"vietnamese": "Ta sẽ... đứng dậy một lần nữa.",
						"thai": "ข้าจะ... ลุกขึ้นอีกครั้ง",
						"hindi": "मैं... फिर से खड़ा हो जाऊँगा।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 심장이자, 모든 뒤틀린 질서의 중심.",
						"english": "The forest's heart, the core of all twisted order.",
						"japanese": "森の心臓であり、全ての歪んだ秩序の中心。",
						"chinese": "森林的心脏，所有扭曲秩序的中心。",
						"french": "Le cœur de la forêt, le centre de tout ordre tordu.",
						"spanish": "El corazón del bosque, el centro de todo orden retorcido.",
						"vietnamese": "Trái tim của khu rừng, trung tâm của mọi trật tự méo mó.",
						"thai": "หัวใจของป่า และศูนย์กลางของระเบียบที่บิดเบี้ยวทั้งมวล",
						"hindi": "जंगल का हृदय, और सभी विकृत व्यवस्थाओं का केंद्र।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…침입자들인가.",
						"english": "...Intruders.",
						"japanese": "…侵入者か。",
						"chinese": "……是入侵者吗。",
						"french": "...Des intrus, donc.",
						"spanish": "...¿Invasores?",
						"vietnamese": "...Kẻ xâm nhập à.",
						"thai": "...พวกผู้บุกรุกงั้นรึ",
						"hindi": "...घुसपैठिए, क्या?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 숲을 이렇게 만들었나!",
						"english": "You did this to the forest!",
						"japanese": "お前がこの森をこんな風にしたのか！",
						"chinese": "是你把这片森林变成这样的吗！",
						"french": "C'est toi qui as fait ça à cette forêt !",
						"spanish": "¡Tú hiciste esto con el bosque!",
						"vietnamese": "Ngươi đã biến khu rừng này thành ra thế này sao!",
						"thai": "แกเป็นคนทำให้ป่าแห่งนี้เป็นแบบนี้ใช่ไหม!",
						"hindi": "तुमने इस जंगल को ऐसा बनाया है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "완벽한 정원은… 희생을 요구하는 법.",
						"english": "A perfect garden... demands sacrifice.",
						"japanese": "完璧な庭は…犠牲を求めるものだ。",
						"chinese": "完美的庭园……总是需要牺牲。",
						"french": "Un jardin parfait... exige des sacrifices.",
						"spanish": "Un jardín perfecto... exige sacrificios.",
						"vietnamese": "Một khu vườn hoàn hảo... đòi hỏi sự hy sinh.",
						"thai": "สวนที่สมบูรณ์แบบ... ย่อมต้องมีการเสียสละ",
						"hindi": "एक उत्तम उद्यान... बलिदान मांगता है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 희생은 없어!",
						"english": "No more sacrifices!",
						"japanese": "これ以上の犠牲は許さない！",
						"chinese": "不会再有牺牲了！",
						"french": "Plus de sacrifices !",
						"spanish": "¡No más sacrificios!",
						"vietnamese": "Không còn sự hy sinh nào nữa!",
						"thai": "ไม่มีการเสียสละอีกแล้ว!",
						"hindi": "और कोई बलिदान नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_2"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 숲의 비명 소리가 잦아들었다.",
						"english": "The colossal shadow fell. The forest's screams subsided.",
						"japanese": "巨大な影が倒れた。森の悲鳴が静まった。",
						"chinese": "巨大的身影倒下了。森林的尖叫声也随之平息。",
						"french": "L'ombre colossale est tombée. Les cris de la forêt se sont tus.",
						"spanish": "La sombra colosal cayó. Los gritos del bosque cesaron.",
						"vietnamese": "Cái bóng khổng lồ sụp đổ. Tiếng la hét của rừng đã lắng xuống.",
						"thai": "เงาขนาดมหึมาล้มลง เสียงกรีดร้องของป่าสงบลง",
						"hindi": "विशालकाय छाया गिर गई। जंगल की चीखें शांत हो गईं。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크크… 이게 끝이라고… 생각하나…?",
						"english": "Heh heh... You think... this is the end...?",
						"japanese": "クク… これで…終わりだと…思うのか…？",
						"chinese": "呵呵… 你以为… 这就结束了吗…？",
						"french": "Huhu... Tu crois... que c'est la fin...?",
						"spanish": "Je je... ¿Crees... que este es el final...?",
						"vietnamese": "Khà khà... Ngươi nghĩ... đây là kết thúc ư...?",
						"thai": "ฮ่าๆ... เจ้าคิดว่า... นี่คือจุดจบ... อย่างนั้นหรือ...?",
						"hindi": "हँ हँ... तुम्हें लगता है... यह अंत है...?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 정원사는… 아직 살아있다…",
						"english": "The true gardener... still lives...",
						"japanese": "真の庭師は… まだ生きている…",
						"chinese": "真正的园丁… 还活着…",
						"french": "Le véritable jardinier... est toujours en vie...",
						"spanish": "El verdadero jardinero... aún vive...",
						"vietnamese": "Người làm vườn thực sự... vẫn còn sống...",
						"thai": "ชาวสวนที่แท้จริง... ยังมีชีวิตอยู่...",
						"hindi": "असली माली... अभी भी जीवित है..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니, 아직 끝나지 않았어.",
						"english": "No, it's not over yet.",
						"japanese": "いや、まだ終わってない。",
						"chinese": "不，还没结束。",
						"french": "Non, ce n'est pas encore fini.",
						"spanish": "No, aún no ha terminado.",
						"vietnamese": "Không, vẫn chưa kết thúc.",
						"thai": "ไม่สิ ยังไม่จบ",
						"hindi": "नहीं, अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "브라이어… 그리고 그 정원사.",
						"english": "Briar... and the gardener.",
						"japanese": "ブライアー… そしてあの庭師。",
						"chinese": "布莱尔… 还有那个园丁。",
						"french": "Briar... et le jardinier.",
						"spanish": "Briar... y el jardinero.",
						"vietnamese": "Briar... và người làm vườn đó.",
						"thai": "ไบรเออร์... และชาวสวนคนนั้น",
						"hindi": "ब्रायर... और वह माली।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "배후의 그림자는 여전히 숲 깊은 곳에 존재했다. 카운트다운은 계속되고 있었다.",
						"english": "The shadow behind it still existed deep within the forest. The countdown continued.",
						"japanese": "その背後の影は、依然として森の奥深くに存在していた。カウントダウンは続いていた。",
						"chinese": "幕后的黑影依然存在于森林深处。倒计时仍在继续。",
						"french": "L'ombre tapie derrière elle existait toujours au plus profond de la forêt. Le compte à rebours continuait.",
						"spanish": "La sombra detrás de todo aún existía en lo profundo del bosque. La cuenta regresiva continuaba.",
						"vietnamese": "Bóng tối đằng sau vẫn tồn tại sâu trong rừng. Đồng hồ đếm ngược vẫn tiếp diễn.",
						"thai": "เงาเบื้องหลังยังคงอยู่ในส่วนลึกของป่า การนับถอยหลังยังคงดำเนินต่อไป",
						"hindi": "उसके पीछे की छाया अभी भी जंगल में गहराई तक मौजूद थी। उलटी गिनती जारी थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"길은 점점 좁아졌다. 숲의 심장이 우릴 부르는 듯했다.",
			"믿었던 그림자가 칼날이 되어 돌아올 때, 모든 진실이 뒤틀리기 시작했다.",
			"이 숲의 정원사는… 대체 누구였을까."
		],
		"english": [
			"The path narrowed. The forest's heart seemed to call to us.",
			"When the trusted shadow returned as a blade, all truth began to twist.",
			"Who, then, was the gardener of this forest?"
		],
		"japanese": [
			"道は次第に狭くなった。森の心臓が私たちを呼んでいるようだった。",
			"信じていた影が刃となって戻ってきた時、全ての真実が歪み始めた。",
			"この森の庭師は…一体誰だったのだろうか。"
		],
		"chinese": [
			"道路越来越窄。森林的心脏仿佛在呼唤我们。",
			"当信任的影子化作刀刃归来时，所有真相开始扭曲。",
			"那么，这片森林的园丁……究竟是谁呢？"
		],
		"french": [
			"Le chemin se rétrécissait. Le cœur de la forêt semblait nous appeler.",
			"Quand l'ombre de confiance revint en lame, toute vérité commença à se tordre.",
			"Qui donc était le jardinier de cette forêt ?"
		],
		"spanish": [
			"El camino se estrechaba cada vez más. El corazón del bosque parecía llamarnos.",
			"Cuando la sombra de confianza regresó como una cuchilla, toda la verdad comenzó a distorsionarse.",
			"¿Quién era, entonces, el jardinero de este bosque?"
		],
		"vietnamese": [
			"Con đường dần hẹp lại. Trái tim khu rừng như đang gọi chúng tôi.",
			"Khi cái bóng đáng tin cậy trở thành lưỡi dao quay lại, mọi sự thật bắt đầu méo mó.",
			"Vậy, người làm vườn của khu rừng này... rốt cuộc là ai?"
		],
		"thai": [
			"เส้นทางค่อยๆ แคบลง หัวใจของป่าราวกับกำลังเรียกหาเรา",
			"เมื่อเงาที่เชื่อใจกลับมาเป็นคมดาบ ความจริงทั้งหมดก็เริ่มบิดเบือน",
			"แล้วใครกันคือคนสวนของป่าแห่งนี้?"
		],
		"hindi": [
			"रास्ता सिकुड़ता जा रहा था। जंगल का दिल हमें बुला रहा था।",
			"जब भरोसेमंद परछाई एक ब्लेड बनकर लौटी, तो सारा सच बिगड़ने लगा।",
			"तो, इस जंगल का माली… आखिर कौन था?"
		]
	}
} as const;
