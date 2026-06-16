export const scenario_snowy_cairn_6_03 = {
	"scenario_id": "snowy_cairn_6_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"백색의 황야. 끝없이 이어진 침묵만이 우리를 맞았다.",
			"그 중심에 홀로 선 돌무덤.",
			"그저 돌덩어리가 아니었다.",
			"무언가 우리를 주시하는 듯한 차가운 시선."
		],
		"english": [
			"A white wilderness. Only an endless silence greeted us.",
			"At its center, a lone cairn stood.",
			"It wasn't just a pile of stones.",
			"A cold gaze, as if something was watching us."
		],
		"japanese": [
			"白き荒野。果てしない沈黙だけが我々を迎えた。",
			"その中心に、ただ一つ立つ石塚。",
			"それはただの石の塊ではなかった。",
			"何かが我々を見つめるような、冷たい視線。"
		],
		"chinese": [
			"白色的荒野。只有无尽的沉默迎接我们。",
			"在其中心，一座孤零零的石冢。",
			"它不只是一堆石头。",
			"一道冰冷的目光，仿佛有什么东西在注视着我们。"
		],
		"french": [
			"Une étendue sauvage blanche. Seul un silence infini nous accueillait.",
			"En son centre, un cairn solitaire se dressait.",
			"Ce n'était pas juste un tas de pierres.",
			"Un regard froid, comme si quelque chose nous observait."
		],
		"spanish": [
			"Un desierto blanco. Solo un silencio interminable nos recibió.",
			"En su centro, un mojón solitario.",
			"No era solo un montón de piedras.",
			"Una mirada fría, como si algo nos estuviera observando."
		],
		"vietnamese": [
			"Hoang dã trắng xóa. Chỉ có sự im lặng vô tận chào đón chúng tôi.",
			"Ở trung tâm của nó, một đống đá đơn độc.",
			"Nó không chỉ là một đống đá.",
			"Một ánh nhìn lạnh lùng, như thể có điều gì đó đang dõi theo chúng tôi."
		],
		"thai": [
			"ที่รกร้างสีขาว มีเพียงความเงียบงันไม่สิ้นสุดที่รอต้อนรับเรา",
			"ตรงกลางนั้น มีเพียงกองหินเดียวดาย",
			"มันไม่ใช่แค่ก้อนหิน",
			"สายตาเย็นชา ราวกับมีบางสิ่งจ้องมองเราอยู่"
		],
		"hindi": [
			"श्वेत बंजर भूमि। केवल एक अंतहीन खामोशी ने हमारा स्वागत किया।",
			"उसके केंद्र में, एक अकेला पत्थरों का ढेर खड़ा था।",
			"यह सिर्फ पत्थरों का ढेर नहीं था।",
			"एक ठंडी नज़र, जैसे कुछ हमें देख रहा हो।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "눈 덮인 황야, 발자국 하나 없는 백색의 공허.",
						"english": "Snow-covered wilderness, a white void without a single footprint.",
						"japanese": "雪に覆われた荒野、足跡一つない白の虚無。",
						"chinese": "白雪覆盖的荒野，一片没有足迹的白色虚无。",
						"french": "Désert enneigé, un vide blanc sans une seule empreinte.",
						"spanish": "Desierto nevado, un vacío blanco sin una sola huella.",
						"vietnamese": "Hoang dã phủ tuyết, một khoảng trống trắng xóa không một dấu chân.",
						"thai": "ที่รกร้างปกคลุมด้วยหิมะ ความว่างเปล่าสีขาวที่ไร้รอยเท้า",
						"hindi": "बर्फ से ढका जंगल, एक सफेद शून्य जिसमें कोई पदचिह्न नहीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "저게… 돌무덤인가.",
						"english": "Is that... a cairn?",
						"japanese": "あれが… 石塚なのか。",
						"chinese": "那是……一座石冢吗？",
						"french": "C'est... un cairn ?",
						"spanish": "¿Eso es... un mojón?",
						"vietnamese": "Đó là... một đống đá sao?",
						"thai": "นั่นมัน... กองหินเหรอ",
						"hindi": "क्या वह... एक पत्थरों का ढेर है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 표식은 아닌 것 같아.",
						"english": "It doesn't seem like a mere marker.",
						"japanese": "単なる標識ではないようだ。",
						"chinese": "它看起来不只是一个简单的标记。",
						"french": "Cela ne semble pas être un simple marqueur.",
						"spanish": "No parece una simple marca.",
						"vietnamese": "Nó không giống một dấu hiệu đơn giản.",
						"thai": "ดูเหมือนจะไม่ใช่แค่เครื่องหมายธรรมดา",
						"hindi": "यह सिर्फ एक निशान नहीं लगता।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "…침묵이 너무 깊어.",
						"english": "...The silence is too deep.",
						"japanese": "…沈黙が深すぎる。",
						"chinese": "……这寂静太深了。",
						"french": "...Le silence est trop profond.",
						"spanish": "...El silencio es demasiado profundo.",
						"vietnamese": "...Sự im lặng quá sâu sắc.",
						"thai": "ความเงียบงัน... ลึกเกินไป",
						"hindi": "...खामोशी बहुत गहरी है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이건 그냥 돌이 아니야. 무언가가 우리를 가늠하고 있어.",
						"english": "These aren't just stones. Something is assessing us.",
						"japanese": "これはただの石じゃない。何かが我々を値踏みしている。",
						"chinese": "这些不只是石头。有什么东西正在审视我们。",
						"french": "Ce ne sont pas de simples pierres. Quelque chose nous évalue.",
						"spanish": "No son solo piedras. Algo nos está evaluando.",
						"vietnamese": "Đây không chỉ là những viên đá. Có điều gì đó đang đánh giá chúng ta.",
						"thai": "นี่ไม่ใช่แค่ก้อนหิน มีบางอย่างกำลังประเมินเราอยู่",
						"hindi": "ये सिर्फ पत्थर नहीं हैं। कुछ हमें परख रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "가늠한다고?",
						"english": "Assessing us?",
						"japanese": "値踏みしている、と？",
						"chinese": "审视我们？",
						"french": "Nous évalue ?",
						"spanish": "¿Evaluarnos?",
						"vietnamese": "Đánh giá chúng ta ư?",
						"thai": "ประเมินเราเหรอ?",
						"hindi": "परख रहा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "짐승 발자국조차 이곳을 멀찍이 피해 나 있어.",
						"english": "Even beast footprints avoid this place.",
						"japanese": "獣の足跡すら、ここを避けている。",
						"chinese": "连野兽的足迹都远远避开了这里。",
						"french": "Même les bêtes évitent cet endroit de loin.",
						"spanish": "Hasta las bestias evitan este lugar.",
						"vietnamese": "Ngay cả dấu chân dã thú cũng tránh xa nơi này.",
						"thai": "แม้แต่รอยเท้าสัตว์ร้ายก็ยังหลีกเลี่ยงที่นี่ห่างๆ",
						"hindi": "यहां तक कि जानवरों के पदचिह्न भी इस जगह से दूर रहते हैं।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진짜네… 희한하다.",
						"english": "Indeed... peculiar.",
						"japanese": "本当だ… 不思議だ。",
						"chinese": "是真的… 真奇怪。",
						"french": "C'est vrai... étrange.",
						"spanish": "Es verdad... qué extraño.",
						"vietnamese": "Thật vậy… lạ lùng thật.",
						"thai": "จริงด้วย... แปลกจริงๆ",
						"hindi": "यह सच है... अजीब है।"
					}
				},
				{
					"content": {
						"korean": "무게를 재고 있는 거야. 우리의 존재 가치를.",
						"english": "It's weighing our worth.",
						"japanese": "重さを量っているんだ。私たちの存在価値を。",
						"chinese": "它在衡量着我们。我们存在的价值。",
						"french": "Il pèse notre valeur.",
						"spanish": "Está sopesando nuestro valor.",
						"vietnamese": "Nó đang cân đo. Giá trị tồn tại của chúng ta.",
						"thai": "มันกำลังชั่งน้ำหนัก. คุณค่าการมีอยู่ของเรา.",
						"hindi": "यह हमारे अस्तित्व का मूल्य तौल रहा है।"
					},
					"type": "speech",
					"speaker": "anuk",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌 틈에 새겨진 희미한 룬… 느껴져?",
						"english": "Faint runes carved in the rock... do you feel it?",
						"japanese": "岩の隙間に刻まれた、おぼろげなルーン… 感じるか？",
						"chinese": "刻在石缝里的微弱符文… 你感觉到了吗？",
						"french": "Des runes faibles gravées dans la roche… le sens-tu ?",
						"spanish": "Runas tenues grabadas en la roca... ¿lo sientes?",
						"vietnamese": "Những ký tự rune mờ nhạt khắc trên kẽ đá… ngươi cảm thấy không?",
						"thai": "อักษรรูนจางๆ ที่แกะสลักในรอยแยกของหิน... รู้สึกไหม?",
						"hindi": "पत्थर की दरार में खुदे हुए धुंधले runes... क्या तुम्हें महसूस होता है?"
					}
				},
				{
					"content": {
						"korean": "뭐라고 쓰여 있는지는 모르겠는데… 으스스하긴 해.",
						"english": "I don't know what it says... but it's eerie.",
						"japanese": "何が書いてあるかは分からないけど… 薄気味悪いね。",
						"chinese": "不知道写了什么… 但感觉很阴森。",
						"french": "Je ne sais pas ce que ça dit... mais c'est sinistre.",
						"spanish": "No sé qué dice... pero es espeluznante.",
						"vietnamese": "Không biết viết gì… nhưng mà rợn người thật.",
						"thai": "ไม่รู้ว่าเขียนว่าอะไร... แต่ก็น่าขนลุกนะ",
						"hindi": "मुझे नहीं पता कि क्या लिखा है... लेकिन यह डरावना है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "오래된 약속의 흔적이야. 맹세가 우리를 시험하는군.",
						"english": "It's a trace of an old promise. A vow testing us.",
						"japanese": "古い約束の痕跡だ。誓いが我々を試している。",
						"chinese": "是古老誓约的痕迹。誓言正在考验我们。",
						"french": "C'est la trace d'une ancienne promesse. Le serment nous met à l'épreuve.",
						"spanish": "Es el rastro de una antigua promesa. El juramento nos está poniendo a prueba.",
						"vietnamese": "Là dấu vết của một lời hứa cổ xưa. Lời thề đang thử thách chúng ta.",
						"thai": "มันคือร่องรอยของคำสัญญาเก่าแก่. คำสาบานกำลังทดสอบเรา.",
						"hindi": "यह एक पुराने वादे का निशान है। एक प्रतिज्ञा जो हमें परख रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "더 가까이 가야 할까?",
						"english": "Should we go closer?",
						"japanese": "もっと近づくべきか？",
						"chinese": "我们应该走近一点吗？",
						"french": "Devrions-nous nous approcher davantage ?",
						"spanish": "¿Deberíamos acercarnos más?",
						"vietnamese": "Chúng ta có nên đến gần hơn không?",
						"thai": "เราควรจะเข้าไปใกล้กว่านี้ไหม?",
						"hindi": "क्या हमें और करीब जाना चाहिए?"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌 틈 깊은 곳에서… 푸른빛이 어른거려.",
						"english": "Deep within the rock crevice... a blue light flickers.",
						"japanese": "岩の隙間の奥深くで… 青い光が揺らめいている。",
						"chinese": "在石缝深处… 闪烁着蓝色的光。",
						"french": "Au fond de la crevasse rocheuse... une lumière bleue vacille.",
						"spanish": "En lo profundo de la grieta de la roca... una luz azul parpadea.",
						"vietnamese": "Sâu trong kẽ đá… một ánh sáng xanh lập lòe.",
						"thai": "ลึกเข้าไปในรอยแยกของหิน... แสงสีน้ำเงินสั่นไหว",
						"hindi": "पत्थर की दरार की गहराई में... एक नीली रोशनी टिमटिमा रही है।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "햇빛은 아니지? 너무 차가운데.",
						"english": "It's not sunlight, is it? It's too cold.",
						"japanese": "日光じゃないだろ？ とても冷たい。",
						"chinese": "这不是阳光，对吧？太冷了。",
						"french": "Ce n'est pas la lumière du soleil, n'est-ce pas ? C'est trop froid.",
						"spanish": "No es luz solar, ¿verdad? Es demasiado fría.",
						"vietnamese": "Không phải ánh nắng mặt trời, đúng không? Lạnh quá.",
						"thai": "ไม่ใช่แสงอาทิตย์ใช่ไหม? มันเย็นเกินไป",
						"hindi": "यह सूरज की रोशनी नहीं है, है ना? यह बहुत ठंडा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "살아 있는 무언가의 흔적. 우리가 깨운 건가?",
						"english": "A trace of something alive. Did we awaken it?",
						"japanese": "生きている何かの痕跡。我々が目覚めさせたのか？",
						"chinese": "是某种活着的痕迹。是我们唤醒了它吗？",
						"french": "La trace de quelque chose de vivant. L'avons-nous réveillé ?",
						"spanish": "Un rastro de algo vivo. ¿Lo hemos despertado?",
						"vietnamese": "Dấu vết của thứ gì đó sống. Chúng ta đã đánh thức nó sao?",
						"thai": "ร่องรอยของบางสิ่งที่ยังมีชีวิต. เราปลุกมันขึ้นมาเหรอ?",
						"hindi": "किसी जीवित चीज़ का निशान। क्या हमने इसे जगाया है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "침묵의 무게는 더욱 짙어졌다. 이제 돌이킬 수 없다.",
						"english": "The weight of silence deepened. There's no turning back now.",
						"japanese": "沈黙の重みはさらに深まった。もう後戻りはできない。",
						"chinese": "沉默的重量愈发浓重。已无法回头。",
						"french": "Le poids du silence s'épaississait. Il n'y a plus de retour en arrière.",
						"spanish": "El peso del silencio se hizo más profundo. Ya no hay vuelta atrás.",
						"vietnamese": "Sức nặng của sự im lặng càng thêm nặng nề. Không thể quay đầu lại nữa rồi.",
						"thai": "น้ำหนักของความเงียบยิ่งทวีความรุนแรงขึ้น ไม่มีทางย้อนกลับแล้ว",
						"hindi": "खामोशी का बोझ और गहरा हो गया। अब कोई वापसी नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…계약은 지켜졌다. 너희의 무게… 인정하겠다.",
						"english": "...The contract has been upheld. Your weight... I acknowledge it.",
						"japanese": "…契約は守られた。お前たちの重み…認めよう。",
						"chinese": "……契约已履行。你们的份量……我认可。",
						"french": "...Le contrat a été respecté. Votre poids... je le reconnais.",
						"spanish": "...El contrato ha sido cumplido. Vuestro peso... lo reconozco.",
						"vietnamese": "...Khế ước đã được giữ. Trọng lượng của các ngươi... ta thừa nhận.",
						"thai": "...สัญญาได้รับการรักษาแล้ว น้ำหนักของพวกเจ้า... ข้ายอมรับ",
						"hindi": "…अनुबंध का पालन हो गया। तुम्हारा वज़न... मैं स्वीकार करता हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이겼지만… 개운하지 않아.",
						"english": "We won... but it doesn't feel right.",
						"japanese": "勝ったが…晴れ晴れしない。",
						"chinese": "虽然赢了……却不痛快。",
						"french": "Nous avons gagné... mais ce n'est pas satisfaisant.",
						"spanish": "Ganamos... pero no me siento bien.",
						"vietnamese": "Thắng rồi... nhưng không thấy vui vẻ gì.",
						"thai": "ชนะแล้ว...แต่ก็ไม่สบายใจเลย",
						"hindi": "हम जीत गए... लेकिन अच्छा महसूस नहीं हो रहा।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "돌무덤의 침묵은 다시 깊어졌다. 그러나 이제, 무언가 다른 감각이 우리를 부르고 있었다.",
						"english": "The silence of the stone tomb deepened once more. But now, a different sensation was calling to us.",
						"japanese": "石塚の沈黙は再び深まった。しかし今、何か別の感覚が私たちを呼んでいた。",
						"chinese": "石冢的沉默再次加深。然而此刻，某种不同的感知正在呼唤着我们。",
						"french": "Le silence du tumulus de pierre s'épaississait de nouveau. Mais à présent, une sensation différente nous appelait.",
						"spanish": "El silencio de la tumba de piedra se profundizó de nuevo. Pero ahora, una sensación diferente nos llamaba.",
						"vietnamese": "Sự im lặng của ngôi mộ đá lại càng sâu thêm. Nhưng giờ đây, một cảm giác khác đang gọi mời chúng ta.",
						"thai": "ความเงียบของหลุมศพหินกลับลึกซึ้งยิ่งขึ้น แต่บัดนี้ ความรู้สึกที่แตกต่างออกไปกำลังเรียกหาเราอยู่",
						"hindi": "पत्थरों के मकबरे की खामोशी फिर गहरी हो गई। लेकिन अब, कोई और एहसास हमें बुला रहा था।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아직 멀었군. 너희의 무게는… 이 정도인가.",
						"english": "Not yet. Is your weight... merely this much?",
						"japanese": "まだ遠いな。お前たちの重みは…この程度か。",
						"chinese": "差得远呢。你们的份量……就这点吗。",
						"french": "Pas encore. Votre poids... n'est-il que cela ?",
						"spanish": "Todavía no. ¿Vuestro peso es... solo esto?",
						"vietnamese": "Còn xa lắm. Trọng lượng của các ngươi... chỉ đến thế thôi sao?",
						"thai": "ยังห่างไกลนัก น้ำหนักของพวกเจ้า... แค่นี้เองหรือ?",
						"hindi": "अभी बहुत दूर है। तुम्हारा वज़न... क्या बस इतना ही है?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 간다!",
						"english": "Damn it... I'm going again!",
						"japanese": "くそ…もう一度行く！",
						"chinese": "该死……再来！",
						"french": "Bon sang... J'y retourne !",
						"spanish": "Maldita sea... ¡Voy de nuevo!",
						"vietnamese": "Chết tiệt... Lại đi!",
						"thai": "ให้ตายสิ...ไปอีกครั้ง!",
						"hindi": "धिक्कार है... मैं फिर जाता हूँ!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…왔는가. 너희의 무게는 충분한가.",
						"english": "...You've come. Is your weight sufficient?",
						"japanese": "…来たか。お前たちの重みは十分か。",
						"chinese": "……来了吗。你们的份量足够吗。",
						"french": "...Vous êtes venus. Votre poids est-il suffisant ?",
						"spanish": "...Has venido. ¿Vuestro peso es suficiente?",
						"vietnamese": "...Đến rồi à. Trọng lượng của các ngươi đã đủ chưa?",
						"thai": "...มาแล้วหรือ น้ำหนักของพวกเจ้าเพียงพอแล้วหรือยัง?",
						"hindi": "…आ गए। क्या तुम्हारा वज़न काफी है?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "누구냐! 네가 이 침묵의 주인인가?",
						"english": "Who are you?! Are you the master of this silence?",
						"japanese": "誰だ！お前がこの沈黙の主か？",
						"chinese": "你是谁！你就是这片沉默的主人吗？",
						"french": "Qui es-tu ?! Es-tu le maître de ce silence ?",
						"spanish": "¡¿Quién eres?! ¿Eres el amo de este silencio?",
						"vietnamese": "Ngươi là ai! Ngươi là chủ nhân của sự im lặng này sao?",
						"thai": "เจ้าเป็นใคร! เจ้าคือเจ้าของความเงียบนี้หรือ?",
						"hindi": "कौन हो तुम! क्या तुम इस खामोशी के मालिक हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 그저 가늠하는 자. 계약을 지키는 존재일 뿐.",
						"english": "I am merely a measurer. One who upholds the contract.",
						"japanese": "私はただの測り手。契約を守る存在に過ぎない。",
						"chinese": "我不过是衡量者。一个遵守契约的存在。",
						"french": "Je ne suis qu'un jaugeur. Un être qui respecte le contrat.",
						"spanish": "Solo soy quien juzga. Un ser que guarda el contrato.",
						"vietnamese": "Ta chỉ là kẻ định lượng. Một kẻ tuân giữ khế ước mà thôi.",
						"thai": "ข้าเป็นเพียงผู้ประเมิน ผู้ที่รักษาสัญญาเท่านั้น",
						"hindi": "मैं तो बस एक अनुमान लगाने वाला हूँ। एक ऐसा अस्तित्व जो अनुबंध का पालन करता है।"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야? 길을 비켜!",
						"english": "What are you talking about? Get out of the way!",
						"japanese": "何を言っている？道を空けろ！",
						"chinese": "什么意思？让开！",
						"french": "Qu'est-ce que tu racontes ? Dégage !",
						"spanish": "¿De qué hablas? ¡Apártate del camino!",
						"vietnamese": "Ngươi đang nói gì vậy? Tránh ra!",
						"thai": "เจ้าพูดอะไร? หลีกทางไปซะ!",
						"hindi": "क्या कह रहे हो तुम? रास्ते से हट जाओ!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
