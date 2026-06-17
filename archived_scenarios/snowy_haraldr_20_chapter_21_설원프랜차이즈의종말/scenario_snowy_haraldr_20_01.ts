export const scenario_snowy_haraldr_20_01 = {
	"scenario_id": "snowy_haraldr_20_01",
	"order": 1,
	"act": "intro",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 설원. 바람은 칼날처럼 날카로웠다.",
						"english": "Bitter snowfield. The wind, sharp as a blade.",
						"japanese": "極寒の雪原。風は刃のように鋭かった。",
						"chinese": "严寒的雪原。风如刀刃般锋利。",
						"french": "L'étendue enneigée glaciale. Le vent, coupant comme une lame.",
						"spanish": "Gélida extensión nevada. El viento, afilado como una cuchilla.",
						"vietnamese": "Đồng tuyết khắc nghiệt. Gió sắc như lưỡi dao.",
						"thai": "ทุ่งหิมะอันหนาวเหน็บ ลมคมกริบราวใบมีด",
						"hindi": "कड़वा बर्फीला मैदान। हवा, एक ब्लेड की तरह तेज।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…하랄드르. 그대의 제안은 거절한다.",
						"english": "...Haraldr. Your offer, I refuse.",
						"japanese": "…ハラルドル。貴殿の提案は拒否する。",
						"chinese": "……哈拉尔德。你的提议，我拒绝。",
						"french": "...Haraldr. Votre offre, je la refuse.",
						"spanish": "...Haraldr. Tu oferta, la rechazo.",
						"vietnamese": "...Haraldr. Đề nghị của ngươi, ta từ chối.",
						"thai": "...ฮาราลด์ ข้อเสนอของท่าน ข้าปฏิเสธ",
						"hindi": "...हारल्ड्र। तुम्हारा प्रस्ताव, मैं अस्वीकार करता हूँ।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "뭐? 감히 내 '궁극의 전리품'을 거절한다고?",
						"english": "What? You dare refuse my 'Ultimate Trophy'?",
						"japanese": "何だと？よくも私の「究極の戦利品」を拒否する気か？",
						"chinese": "什么？你竟敢拒绝我的“终极战利品”？",
						"french": "Quoi ? Vous osez refuser mon 'Trophée Ultime' ?",
						"spanish": "¿Qué? ¿Osas rechazar mi 'Trofeo Definitivo'?",
						"vietnamese": "Gì cơ? Ngươi dám từ chối 'Chiến lợi phẩm tối thượng' của ta ư?",
						"thai": "อะไรนะ? เจ้ากล้าปฏิเสธ 'สุดยอดของรางวัล' ของข้าอย่างนั้นหรือ?",
						"hindi": "क्या? तुम मेरी 'अंतिम ट्रॉफी' को अस्वीकार करने की हिम्मत करते हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 어설픈 뿔피리가… 너희를 납득시키지 못하다니!",
						"english": "This crude horn... failed to sway you!",
						"japanese": "このお粗末な角笛が…お前たちを納得させられないとは！",
						"chinese": "这笨拙的号角……竟无法说服你们！",
						"french": "Cette corne rudimentaire... n'a pas réussi à vous convaincre !",
						"spanish": "¡Este tosco cuerno... no logró convenceros!",
						"vietnamese": "Cái tù và thô sơ này... lại không thể lay chuyển được các ngươi!",
						"thai": "แตรเขาสัตว์ที่ดูหยาบกร้านนี้... กลับไม่สามารถโน้มน้าวพวกเจ้าได้!",
						"hindi": "यह अनाड़ी सींग... तुम सबको मना नहीं सका!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "하랄드르는 낡은 뿔피리를 내팽개쳤다. 바람 빠진 소리가 설원에 울렸다.",
						"english": "Haraldr cast aside the old horn. A breathless sound echoed across the snowfield.",
						"japanese": "ハラルドルは古い角笛を投げ捨てた。空気が抜けるような音が雪原に響いた。",
						"chinese": "哈拉尔德扔掉了那破旧的号角。漏气的声音在雪原上回荡。",
						"french": "Haraldr jeta le vieux cor. Un son haletant résonna dans l'étendue enneigée.",
						"spanish": "Haraldr tiró el viejo cuerno. Un sonido sin aliento resonó en la extensión nevada.",
						"vietnamese": "Haraldr ném chiếc tù và cũ đi. Một âm thanh hụt hơi vang vọng khắp đồng tuyết.",
						"thai": "ฮาราลด์โยนแตรเขาสัตว์เก่าๆ ทิ้งไป เสียงลมรั่วก้องไปทั่วทุ่งหิมะ",
						"hindi": "हारल्ड्र ने पुराने सींग को फेंक दिया। एक बेदम आवाज बर्फीले मैदान में गूँज उठी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "초라한 가면 아래, 끈적한 시럽이 분출했다. 싸늘한 설원에 광기 어린 기운이 감돌았다.",
						"english": "Beneath the shabby mask, sticky syrup gushed forth. A mad aura permeated the chilly snowfield.",
						"japanese": "みすぼらしい仮面の下から、べたつくシロップが噴出した。冷たい雪原に狂気に満ちた気配が漂った。",
						"chinese": "在破旧的面具下，粘稠的糖浆喷涌而出。冰冷的雪原弥漫着疯狂的气息。",
						"french": "Sous le masque minable, un sirop collant jaillit. Une aura de folie imprégnait l'étendue enneigée glaciale.",
						"spanish": "Debajo de la máscara andrajosa, un jarabe pegajoso brotó. Un aura de locura impregnaba la gélida extensión nevada.",
						"vietnamese": "Dưới chiếc mặt nạ tồi tàn, si-rô dính nhớp nháp phun trào. Một luồng khí điên cuồng bao trùm đồng tuyết lạnh lẽo.",
						"thai": "ใต้หน้ากากที่ซอมซ่อ น้ำเชื่อมเหนียวหนืดพุ่งออกมา บรรยากาศแห่งความบ้าคลั่งปกคลุมทุ่งหิมะอันหนาวเหน็บ",
						"hindi": "फटे हुए नकाब के नीचे से चिपचिपा सिरप निकला। ठंडे बर्फीले मैदान में एक पागलपन भरी आभा फैल गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는… 모든 것을 파괴하는 광전사다!",
						"english": "I am… the berserker, destroyer of all!",
						"japanese": "私は… 全てを破壊する狂戦士だ！",
						"chinese": "我是… 毁灭一切的狂战士！",
						"french": "Je suis… le berserker qui détruit tout !",
						"spanish": "Soy… ¡el berserker que lo destruye todo!",
						"vietnamese": "Ta là… kẻ cuồng sát hủy diệt tất cả!",
						"thai": "ข้าคือ... เบอร์เซิร์กเกอร์ผู้ทำลายล้างทุกสิ่ง!",
						"hindi": "मैं... सब कुछ नष्ट करने वाला बर्सेकर हूँ!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "정신 차려! 저건… 더 이상 그저 상인이 아니야.",
						"english": "Snap out of it! That's… no longer just a merchant.",
						"japanese": "正気を取り戻せ！あれは…もはやただの商人ではない。",
						"chinese": "清醒点！那…不再只是一个商人了。",
						"french": "Reprends-toi ! Ce n'est… plus un simple marchand.",
						"spanish": "¡Espabila! Eso… ya no es solo un mercader.",
						"vietnamese": "Tỉnh táo lại đi! Kẻ đó… không còn là một thương nhân nữa rồi.",
						"thai": "ได้สติหน่อย! นั่น…ไม่เป็นแค่พ่อค้าอีกต่อไปแล้ว",
						"hindi": "होश में आओ! वह... अब सिर्फ एक व्यापारी नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "광기 어린 기운이… 온 설원을 뒤덮고 있어!",
						"english": "An aura of madness… is engulfing the entire snowfield!",
						"japanese": "狂気のオーラが… 雪原全体を覆っている！",
						"chinese": "疯狂的气息… 笼罩着整个雪原！",
						"french": "Une aura de folie… recouvre toute l'étendue enneigée !",
						"spanish": "Un aura de locura… está cubriendo todo el campo de nieve.",
						"vietnamese": "Một luồng khí điên loạn… đang bao trùm khắp cánh đồng tuyết!",
						"thai": "ออร่าแห่งความบ้าคลั่ง… ปกคลุมทั่วทั้งทุ่งหิมะ!",
						"hindi": "पागलपन की एक आभा... पूरे बर्फ के मैदान को ढँक रही है!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": []
		},
		{
			"id": 5,
			"dialogue": []
		},
		{
			"id": 9,
			"dialogue": []
		},
		{
			"lose_dialogue": [],
			"win_dialogue": [],
			"dialogue": [],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"광활한 설원. 눈보라가 모든 것을 집어삼킬 듯 몰아쳤다.",
			"그곳에, 자신을 '위대한 상인'이라 칭하는 자가 있었다.",
			"그의 달콤한 제안을 거부했을 때, 설원은 깨어나기 시작했다.",
			"이것은 거절할 수 없는 거래. 그리고 피할 수 없는 싸움의 시작이었다."
		],
		"english": [
			"Vast snowfield. A blizzard raged, threatening to swallow all.",
			"There stood one who called himself 'The Great Merchant'.",
			"His sweet offer refused, the snowfield began to awaken.",
			"This was a deal beyond refusal. And the dawn of an inevitable battle."
		],
		"japanese": [
			"広大な雪原。吹雪がすべてを飲み込むように荒れ狂った。",
			"そこに、自らを「偉大なる商人」と称する者がいた。",
			"彼の甘い誘いを拒否した時、雪原は目覚め始めた。",
			"これは拒絶できない取引。そして避けられない戦いの始まりだった。"
		],
		"chinese": [
			"广阔的雪原。暴风雪仿佛要吞噬一切般肆虐。",
			"在那里，有一个自称“伟大商人”的人。",
			"当他甜蜜的提议被拒绝时，雪原开始苏醒。",
			"这是一场无法拒绝的交易。以及一场无法避免的战斗的开始。"
		],
		"french": [
			"Vaste étendue enneigée. Un blizzard féroce menaçait d'engloutir tout.",
			"Là, un homme se faisant appeler 'Le Grand Marchand' se tenait.",
			"Son offre douce refusée, l'étendue enneigée commença à s'éveiller.",
			"C'était un marché inéluctable. Et l'aube d'un combat inévitable."
		],
		"spanish": [
			"Una vasta extensión nevada. Una ventisca furiosa amenazaba con engullirlo todo.",
			"Allí, había un hombre que se hacía llamar 'El Gran Mercader'.",
			"Rechazada su dulce oferta, la extensión nevada comenzó a despertar.",
			"Este era un trato irrefutable. Y el amanecer de una batalla inevitable."
		],
		"vietnamese": [
			"Đồng tuyết rộng lớn. Bão tuyết hoành hành như muốn nuốt chửng mọi thứ.",
			"Ở đó, có một kẻ tự xưng là 'Đại Thương Gia'.",
			"Lời đề nghị ngọt ngào của hắn bị từ chối, đồng tuyết bắt đầu thức tỉnh.",
			"Đây là một giao dịch không thể từ chối. Và là bình minh của một cuộc chiến không thể tránh khỏi."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ พายุหิมะโหมกระหน่ำราวกับจะกลืนกินทุกสิ่ง",
			"ณ ที่นั้น มีผู้หนึ่งเรียกตนเองว่า 'พ่อค้าผู้ยิ่งใหญ่'",
			"เมื่อข้อเสนออันหอมหวานของเขาถูกปฏิเสธ ทุ่งหิมะก็เริ่มตื่นขึ้น",
			"นี่คือข้อตกลงที่ไม่อาจปฏิเสธได้ และเป็นการเริ่มต้นของการต่อสู้ที่หลีกเลี่ยงไม่ได้"
		],
		"hindi": [
			"विशाल बर्फीला मैदान। बर्फीले तूफान ने सब कुछ निगलने की धमकी दी।",
			"वहाँ, एक व्यक्ति था जो खुद को 'महान व्यापारी' कहता था।",
			"उसके मीठे प्रस्ताव को ठुकरा दिया गया, बर्फीला मैदान जागने लगा।",
			"यह एक ऐसा सौदा था जिसे नकारा नहीं जा सकता था। और एक अपरिहार्य लड़ाई की शुरुआत।"
		]
	}
} as const;
