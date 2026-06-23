export const scenario_desert_tempest_1_02 = {
	"scenario_id": "desert_tempest_1_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 황금빛 사막.",
			"그러나 아름다운 풍경 뒤엔, 잔혹한 모래 괴물이 숨어 있었다.",
			"분노가 타오르는 그곳에서, 앰버가 나타났다.",
			"그리고 드러나는 황금 제국의 오만."
		],
		"english": [
			"An endless golden desert.",
			"But behind the beautiful scenery, a cruel sand monster lurked.",
			"Where fury raged, Amber appeared.",
			"And the arrogance of the Golden Empire revealed."
		],
		"japanese": [
			"果てしなく広がる黄金の砂漠。",
			"しかし、美しい風景の裏には、残忍な砂の怪物が潜んでいた。",
			"怒りが燃え盛るその場所で、アンバーが現れた。",
			"そして、黄金帝国の傲慢が露わになる。"
		],
		"chinese": [
			"一望无际的金色沙漠。",
			"然而，在这美景背后，却潜藏着残忍的沙怪。",
			"在怒火燃烧之地，安柏出现了。",
			"以及黄金帝国的傲慢逐渐显现。"
		],
		"french": [
			"Un désert doré infini.",
			"Mais derrière ce magnifique paysage, un cruel monstre de sable se cachait.",
			"Là où la fureur faisait rage, Amber apparut.",
			"Et l'arrogance de l'Empire d'Or se révéla."
		],
		"spanish": [
			"Un desierto dorado interminable.",
			"Pero detrás del hermoso paisaje, acechaba un cruel monstruo de arena.",
			"Donde la furia rugía, Amber apareció.",
			"Y la arrogancia del Imperio Dorado se reveló."
		],
		"vietnamese": [
			"Một sa mạc vàng bất tận.",
			"Nhưng đằng sau phong cảnh tuyệt đẹp ấy, một quái vật cát tàn bạo ẩn mình.",
			"Nơi cơn thịnh nộ bùng cháy, Amber xuất hiện.",
			"Và sự kiêu ngạo của Đế chế Vàng dần lộ diện."
		],
		"thai": [
			"ทะเลทรายสีทองอันกว้างใหญ่ไร้ที่สิ้นสุด",
			"แต่เบื้องหลังทิวทัศน์อันงดงามนั้น สัตว์ประหลาดทรายสุดโหดได้ซ่อนตัวอยู่",
			"ณ ที่ที่ความโกรธเกรี้ยวปะทุขึ้น แอมเบอร์ก็ปรากฏตัว",
			"และโอหังของอาณาจักรทองคำก็ถูกเปิดเผย"
		],
		"hindi": [
			"एक अंतहीन सुनहरा रेगिस्तान।",
			"लेकिन खूबसूरत नज़ारे के पीछे, एक क्रूर रेत का राक्षस छिपा था।",
			"जहाँ क्रोध भड़क रहा था, एम्बर प्रकट हुई।",
			"और स्वर्ण साम्राज्य का अभिमान प्रकट हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "황폐한 오아시스. 모래 괴물이 주민들을 습격하고 있었다.",
						"english": "A desolate oasis. Sand monsters were attacking the villagers.",
						"japanese": "荒廃したオアシス。砂の怪物が住民を襲っていた。",
						"chinese": "荒芜的绿洲。沙怪正在袭击居民。",
						"french": "Une oasis désolée. Des monstres de sable attaquaient les villageois.",
						"spanish": "Un oasis desolado. Monstruos de arena atacaban a los aldeanos.",
						"vietnamese": "Một ốc đảo hoang tàn. Quái vật cát đang tấn công dân làng.",
						"thai": "โอเอซิสที่รกร้าง สัตว์ประหลาดทรายกำลังโจมตีชาวบ้าน",
						"hindi": "एक उजाड़ नखलिस्तान। रेत के राक्षस ग्रामीणों पर हमला कर रहे थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "비켜! 이 괴물!",
						"english": "Out of the way! You monster!",
						"japanese": "どけ！この怪物め！",
						"chinese": "滚开！你这怪物！",
						"french": "Écarte-toi ! Espèce de monstre !",
						"spanish": "¡Fuera! ¡Monstruo!",
						"vietnamese": "Tránh ra! Đồ quái vật!",
						"thai": "หลีกไป! ไอ้สัตว์ประหลาด!",
						"hindi": "रास्ते से हटो! तुम राक्षस!"
					}
				},
				{
					"content": {
						"korean": "주민들이 위험해요!",
						"english": "The villagers are in danger!",
						"japanese": "住民が危ない！",
						"chinese": "居民们有危险！",
						"french": "Les villageois sont en danger !",
						"spanish": "¡Los aldeanos están en peligro!",
						"vietnamese": "Dân làng đang gặp nguy hiểm!",
						"thai": "ชาวบ้านกำลังตกอยู่ในอันตราย!",
						"hindi": "ग्रामीण खतरे में हैं!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크아아아!",
						"english": "Grrrraah!",
						"japanese": "グアアアア！",
						"chinese": "吼啊啊啊！",
						"french": "Grrrraah !",
						"spanish": "¡Graaaah!",
						"vietnamese": "Grừừừừ!",
						"thai": "ครู๊ววว!",
						"hindi": "गर्ज गर्ज!"
					},
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ember",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "잠깐! 무모해! 저건 단순한 괴물이 아니야!",
						"english": "Wait! It's reckless! That's no mere monster!",
						"japanese": "待て！無謀だ！あれはただの怪物じゃない！",
						"chinese": "等等！太鲁莽了！那不是普通的怪物！",
						"french": "Attends ! C'est imprudent ! Ce n'est pas un simple monstre !",
						"spanish": "¡Espera! ¡Es imprudente! ¡Eso no es un simple monstruo!",
						"vietnamese": "Chờ đã! Liều lĩnh quá! Đó không phải là quái vật thông thường!",
						"thai": "เดี๋ยว! ใจร้อนไปแล้ว! นั่นไม่ใช่สัตว์ประหลาดธรรมดา!",
						"hindi": "रुको! यह लापरवाह है! वह सिर्फ एक राक्षस नहीं है!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상관 없어! 다 부숴버릴 거야!",
						"english": "I don't care! I'll smash them all!",
						"japanese": "関係ない！全部ぶっ壊してやる！",
						"chinese": "我才不管！我都要把它们全部摧毁！",
						"french": "Je m'en fiche ! Je vais tout briser !",
						"spanish": "¡No me importa! ¡Los haré pedazos a todos!",
						"vietnamese": "Không quan tâm! Tôi sẽ phá hủy tất cả!",
						"thai": "ไม่สนหรอก! ฉันจะทำลายมันให้หมด!",
						"hindi": "मुझे परवाह नहीं! मैं उन सबको तोड़ दूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "이 사막은 겉보기와 달라. 모래 괴물은 시작일 뿐이야.",
						"english": "This desert is not what it seems. Sand monsters are just the beginning.",
						"japanese": "この砂漠は見かけと違う。サンドモンスターは始まりに過ぎない。",
						"chinese": "这片沙漠并非表面那样。沙怪只是个开始。",
						"french": "Ce désert n'est pas ce qu'il semble. Les monstres de sable ne sont qu'un début.",
						"spanish": "Este desierto no es lo que parece. Los monstruos de arena son solo el principio.",
						"vietnamese": "Sa mạc này không như vẻ ngoài của nó. Quái vật cát chỉ là khởi đầu thôi.",
						"thai": "ทะเลทรายแห่งนี้ไม่เหมือนที่เห็น สัตว์ประหลาดทรายเป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "यह रेगिस्तान जैसा दिखता है, वैसा नहीं है। रेत के दानव तो बस शुरुआत हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래서? 더 큰 게 나온다는 소리인가.",
						"english": "So? You're saying something bigger is coming?",
						"japanese": "だから？もっと大きいのが出てくるってことか。",
						"chinese": "所以呢？你是说会有更厉害的出现？",
						"french": "Alors ? Tu dis que quelque chose de plus grand arrive ?",
						"spanish": "¿Y qué? ¿Dices que viene algo más grande?",
						"vietnamese": "Vậy sao? Ý anh là sẽ có thứ gì đó lớn hơn xuất hiện à?",
						"thai": "แล้วไง? หมายความว่าจะมีตัวที่ใหญ่กว่าออกมาเหรอ?",
						"hindi": "तो क्या? तुम्हारा मतलब है कि कुछ और बड़ा आने वाला है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오래된 저주가 깃들어 있어. '황금 제국의 오만'이라는 말이 있지…",
						"english": "An ancient curse lingers here. They speak of 'The Arrogance of the Golden Empire'...",
						"japanese": "古い呪いが宿っている。「黄金帝国の傲慢」という言葉がある…",
						"chinese": "这里寄宿着古老的诅咒。有句话叫做「黄金帝国的傲慢」…",
						"french": "Une ancienne malédiction plane ici. On parle de 'L'Arrogance de l'Empire Doré'...",
						"spanish": "Una antigua maldición reside aquí. Se dice 'La arrogancia del Imperio Dorado'...",
						"vietnamese": "Một lời nguyền cổ xưa đang ngự trị ở đây. Có lời nói về 'Sự kiêu ngạo của Đế chế Vàng'...",
						"thai": "คำสาปโบราณสถิตอยู่ที่นี่ มีคำกล่าวว่า 'ความโอหังของอาณาจักรทองคำ'...",
						"hindi": "यहाँ एक प्राचीन श्राप है। 'स्वर्ण साम्राज्य का अहंकार' नाम की एक कहावत है..."
					},
					"speaker": "ember"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "황금 제국? 그게 뭔데.",
						"english": "Golden Empire? What's that?",
						"japanese": "黄金帝国？それ、何だ。",
						"chinese": "黄金帝国？那是什么？",
						"french": "Empire Doré ? C'est quoi ?",
						"spanish": "¿Imperio Dorado? ¿Qué es eso?",
						"vietnamese": "Đế chế Vàng? Đó là gì?",
						"thai": "อาณาจักรทองคำ? นั่นคืออะไร?",
						"hindi": "स्वर्ण साम्राज्य? वह क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "ember",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "유적에 가면 알게 될 거야. '황금 제국의 오만'에 대한 벽화가 있어.",
						"english": "You'll find out when we reach the ruins. There's a mural about 'The Arrogance of the Golden Empire.'",
						"japanese": "遺跡に行けばわかるさ。「黄金帝国の傲慢」についての壁画がある。",
						"chinese": "到了遗迹你就会知道。「黄金帝国的傲慢」的壁画就在那里。",
						"french": "Tu le sauras en allant aux ruines. Il y a une fresque murale sur 'L'Arrogance de l'Empire Doré'.",
						"spanish": "Lo sabrás cuando lleguemos a las ruinas. Hay un mural sobre 'La arrogancia del Imperio Dorado'.",
						"vietnamese": "Đến tàn tích rồi anh sẽ biết. Có một bức bích họa về 'Sự kiêu ngạo của Đế chế Vàng'.",
						"thai": "เมื่อเราไปถึงซากปรักหักพังก็จะรู้เอง มีภาพจิตรกรรมฝาผนังเกี่ยวกับ 'ความโอหังของอาณาจักรทองคำ' อยู่ที่นั่น",
						"hindi": "खंडहरों में जाओगे तो पता चलेगा। 'स्वर्ण साम्राज्य के अहंकार' के बारे में एक भित्तिचित्र है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "황금 제국은 스스로의 오만으로 파멸했다고 해. 하지만…",
						"english": "The Golden Empire is said to have fallen due to its own arrogance. But...",
						"japanese": "黄金帝国は自らの傲慢で滅んだと言われている。だが…",
						"chinese": "黄金帝国据说因自己的傲慢而毁灭。但是…",
						"french": "L'Empire Doré aurait péri par sa propre arrogance. Mais...",
						"spanish": "Se dice que el Imperio Dorado cayó por su propia arrogancia. Pero...",
						"vietnamese": "Đế chế Vàng được cho là đã sụp đổ vì sự kiêu ngạo của chính họ. Nhưng...",
						"thai": "อาณาจักรทองคำว่ากันว่าล่มสลายเพราะความโอหังของตัวเอง แต่ว่า...",
						"hindi": "कहा जाता है कि स्वर्ण साम्राज्य अपने अहंकार के कारण नष्ट हो गया। लेकिन..."
					}
				},
				{
					"content": {
						"korean": "벽화에는 희미하게 검은 그림자가 남아있어. 진실은 더 추악할지도 몰라.",
						"english": "A faint black shadow remains on the mural. The truth might be far uglier.",
						"japanese": "壁画にはかすかに黒い影が残っている。真実はもっと醜いかもしれない。",
						"chinese": "壁画上隐约有黑影残留。真相或许更为丑恶。",
						"french": "Une faible ombre noire subsiste sur la fresque. La vérité pourrait être bien plus laide.",
						"spanish": "Una tenue sombra negra permanece en el mural. La verdad podría ser mucho más fea.",
						"vietnamese": "Trên bích họa vẫn còn một bóng đen mờ nhạt. Sự thật có lẽ còn tồi tệ hơn.",
						"thai": "ยังมีเงาดำจางๆ เหลืออยู่บนภาพจิตรกรรมฝาผนัง ความจริงอาจจะน่าเกลียดยิ่งกว่านั้น",
						"hindi": "भित्तिचित्र पर एक हल्की काली छाया शेष है। सच्चाई शायद और भी बदसूरत हो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ember"
				},
				{
					"content": {
						"korean": "검은 그림자… 가자. 유적으로.",
						"english": "Black shadow... Let's go. To the ruins.",
						"japanese": "黒い影… 行こう。遺跡へ。",
						"chinese": "黑影… 走吧。去遗迹。",
						"french": "Ombre noire... Allons-y. Aux ruines.",
						"spanish": "Sombra negra... Vamos. A las ruinas.",
						"vietnamese": "Bóng đen... Đi thôi. Đến tàn tích.",
						"thai": "เงาดำ... ไปกันเถอะ ไปที่ซากปรักหักพัง",
						"hindi": "काली छाया... चलो चलते हैं। खंडहरों की ओर।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ember"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이쯤에서 돌아가. 유적의 깊은 곳은… 사막의 모든 저주가 모인 곳이야.",
						"english": "Turn back here. The deep parts of the ruins... are where all the desert's curses gather.",
						"japanese": "ここで引き返せ。遺跡の奥深くは… 砂漠の全ての呪いが集まった場所だ。",
						"chinese": "到此为止，回去吧。遗迹的深处… 是沙漠所有诅咒聚集的地方。",
						"french": "Fais demi-tour ici. Les profondeurs des ruines... sont l'endroit où toutes les malédictions du désert se rassemblent.",
						"spanish": "Vuelve por aquí. Las profundidades de las ruinas... son el lugar donde se reúnen todas las maldiciones del desierto.",
						"vietnamese": "Quay lại đây đi. Sâu trong tàn tích... là nơi tập trung mọi lời nguyền của sa mạc.",
						"thai": "กลับไปซะตรงนี้เถอะ ส่วนลึกของซากปรักหักพัง...คือที่ที่คำสาปทั้งหมดของทะเลทรายรวมตัวกัน",
						"hindi": "यहीं से वापस मुड़ जाओ। खंडहरों की गहराई... रेगिस्तान के सभी श्रापों का जमावड़ा है।"
					},
					"speaker": "ember"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이제 와서 멈출 순 없어. 이곳에서 모든 걸 끝낼 거야.",
						"english": "I can't stop now. I'll end everything here.",
						"japanese": "今さら止まれない。ここで全てを終わらせる。",
						"chinese": "现在已经不能停下来了。我会在这里结束一切。",
						"french": "Je ne peux pas m'arrêter maintenant. Je vais tout terminer ici.",
						"spanish": "No puedo detenerme ahora. Terminaré con todo aquí.",
						"vietnamese": "Giờ thì không thể dừng lại được nữa. Tôi sẽ kết thúc mọi thứ ở đây.",
						"thai": "ตอนนี้หยุดไม่ได้แล้ว ฉันจะจบทุกอย่างที่นี่",
						"hindi": "अब मैं रुक नहीं सकता। मैं सब कुछ यहीं खत्म करूँगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ember",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네 분노가 너를 집어삼킬지도 몰라… 쯧.",
						"english": "Your rage might consume you... Tsk.",
						"japanese": "お前の怒りがお前を飲み込むかもしれない…ちっ。",
						"chinese": "你的怒火可能会吞噬你……啧。",
						"french": "Ta rage pourrait te consumer... Tss.",
						"spanish": "Tu ira podría consumirte... Tsk.",
						"vietnamese": "Cơn thịnh nộ của ngươi có thể nuốt chửng ngươi… Chậc.",
						"thai": "ความโกรธของเจ้าอาจกลืนกินเจ้า… หึ.",
						"hindi": "तुम्हारा क्रोध तुम्हें निगल सकता है… धत्।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크아아… 어리석은… 분노는… 너를… 삼킬… 것이다…",
						"english": "Grrraaah... Foolish... Rage... will... consume... you...",
						"japanese": "グアアア…愚かな…怒りは…お前を…飲み込む…だろう…",
						"chinese": "啊啊啊……愚蠢……愤怒会……吞噬……你……",
						"french": "Grrraaah... Stupide... La rage... te... consumera...",
						"spanish": "Grrraaah... Necio... La ira... te... consumirá...",
						"vietnamese": "Grrrraah… Ngu ngốc… Cơn thịnh nộ… sẽ… nuốt chửng… ngươi…",
						"thai": "ครืนนน… โง่เขลา… ความโกรธ… จะ… กลืนกิน… เจ้า…",
						"hindi": "ग्रर्राह... मूर्ख... क्रोध... तुम्हें... निगल... जाएगा..."
					}
				},
				{
					"content": {
						"korean": "이제… 끝이야…",
						"english": "Now... it's over...",
						"japanese": "もう…終わりだ…",
						"chinese": "现在……结束了……",
						"french": "Maintenant... c'est fini...",
						"spanish": "Ahora... se acabó...",
						"vietnamese": "Giờ… đã kết thúc…",
						"thai": "ตอนนี้… มันจบแล้ว…",
						"hindi": "अब... यह समाप्त हो गया है..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ember",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ember",
					"content": {
						"korean": "아니, 끝나지 않았어. 저건 그림자일 뿐. 진짜는… 저 너머에 있어.",
						"english": "No, it's not over. That was just a shadow. The real one... is beyond that.",
						"japanese": "いや、終わってない。あれは影にすぎない。本物は…その向こうにいる。",
						"chinese": "不，还没结束。那只是个影子。真正的……在那边。",
						"french": "Non, ce n'est pas fini. Ce n'était qu'une ombre. Le vrai... est au-delà.",
						"spanish": "No, no ha terminado. Eso era solo una sombra. El verdadero... está más allá.",
						"vietnamese": "Không, chưa kết thúc. Đó chỉ là cái bóng thôi. Kẻ thật sự… ở phía bên kia.",
						"thai": "ไม่ มันยังไม่จบ นั่นเป็นแค่เงา ตัวจริง… อยู่เลยไปกว่านั้น",
						"hindi": "नहीं, यह खत्म नहीं हुआ। वह सिर्फ एक छाया थी। असली... उस पार है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모래 폭풍은 잠시 잦아들었다. 그러나 사막의 저주는 끝나지 않았다. 복수심은… 더 깊은 곳으로 이끌었다.",
						"english": "The sandstorm subsided for a moment. But the desert's curse wasn't over. The thirst for revenge... led to deeper places.",
						"japanese": "砂嵐は一時的に収まった。しかし、砂漠の呪いは終わっていなかった。復讐心は…より深い場所へと導いた。",
						"chinese": "沙尘暴暂时平息了。但沙漠的诅咒并未结束。复仇心……将引导至更深之处。",
						"french": "La tempête de sable s'est calmée un instant. Mais la malédiction du désert n'était pas terminée. La soif de vengeance... menait à des endroits plus profonds.",
						"spanish": "La tormenta de arena amainó por un momento. Pero la maldición del desierto no había terminado. La sed de venganza... condujo a lugares más profundos.",
						"vietnamese": "Cơn bão cát tạm thời lắng xuống. Nhưng lời nguyền của sa mạc chưa kết thúc. Khát vọng báo thù… dẫn đến những nơi sâu hơn.",
						"thai": "พายุทรายสงบลงชั่วขณะ แต่คำสาปของทะเลทรายยังไม่สิ้นสุด ความกระหายการแก้แค้น… นำพาไปสู่สถานที่ที่ลึกกว่า",
						"hindi": "रेतीला तूफान कुछ देर के लिए शांत हो गया। लेकिन रेगिस्तान का श्राप खत्म नहीं हुआ था। प्रतिशोध की प्यास... और गहरे स्थानों तक ले गई।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "유적의 심장부. 거대한 모래 폭풍이 휘몰아쳤다.",
						"english": "Heart of the ruins. A colossal sandstorm raged.",
						"japanese": "遺跡の心臓部。巨大な砂嵐が荒れ狂っていた。",
						"chinese": "遗迹深处。一场巨大的沙尘暴肆虐着。",
						"french": "Cœur des ruines. Une tempête de sable colossale faisait rage.",
						"spanish": "Corazón de las ruinas. Una tormenta de arena colosal rugía.",
						"vietnamese": "Trái tim của tàn tích. Một cơn bão cát khổng lồ hoành hành.",
						"thai": "ใจกลางซากปรักหักพัง พายุทรายขนาดมหึมากำลังโหมกระหน่ำ",
						"hindi": "खंडहरों का हृदय। एक विशाल रेतीला तूफान उमड़ रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "누가 나의 잠을 깨우는가… 오만한 침입자들!",
						"english": "Who dares awaken me... Arrogant intruders!",
						"japanese": "誰が私の眠りを覚ますか…傲慢な侵入者どもめ！",
						"chinese": "谁敢打扰我的沉睡……傲慢的入侵者！",
						"french": "Qui ose me réveiller... Envahisseurs arrogants !",
						"spanish": "¿Quién se atreve a despertarme... Invasores arrogantes!",
						"vietnamese": "Kẻ nào dám đánh thức ta… Lũ xâm nhập kiêu ngạo!",
						"thai": "ผู้ใดบังอาจปลุกข้า… พวกผู้บุกรุกโอหัง!",
						"hindi": "कौन मेरी नींद भंग कर रहा है… अहंकारी घुसपैठियों!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 모래 괴물들의 근원인가!",
						"english": "Are you... the source of all these sand monsters!",
						"japanese": "お前が…これらすべての砂の怪物たちの根源なのか！",
						"chinese": "你就是……所有这些沙怪的源头吗！",
						"french": "Es-tu... la source de tous ces monstres de sable !",
						"spanish": "¿Eres tú... la fuente de todos estos monstruos de arena!",
						"vietnamese": "Ngươi… là nguồn gốc của tất cả quái vật cát này sao!",
						"thai": "เจ้าคือ… ต้นกำเนิดของสัตว์ประหลาดทรายพวกนี้ทั้งหมดหรือ!",
						"hindi": "क्या तुम... इन सभी रेत राक्षसों का स्रोत हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ember",
					"duration_ms": 500
				},
				{
					"speaker": "ember",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "조심해! 저건 사막의 분노 그 자체야!",
						"english": "Watch out! That's the desert's fury itself!",
						"japanese": "気をつけろ！あれは砂漠の怒りそのものだ！",
						"chinese": "小心！那是沙漠本身的愤怒！",
						"french": "Attention ! C'est la fureur du désert elle-même !",
						"spanish": "¡Cuidado! ¡Eso es la furia del desierto misma!",
						"vietnamese": "Cẩn thận! Đó chính là cơn thịnh nộ của sa mạc!",
						"thai": "ระวัง! นั่นคือความพิโรธของทะเลทรายเอง!",
						"hindi": "सावधान! वह स्वयं रेगिस्तान का क्रोध है!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두 모래가 되어 사라져라!",
						"english": "All of you, turn to sand and vanish!",
						"japanese": "すべて砂と化して消え失せろ！",
						"chinese": "都化为沙尘消失吧！",
						"french": "Que tous se transforment en sable et disparaissent !",
						"spanish": "¡Todos vosotros, convertíos en arena y desapareced!",
						"vietnamese": "Tất cả hãy biến thành cát và biến mất!",
						"thai": "พวกเจ้าทุกคนจงกลายเป็นทรายแล้วสลายไป!",
						"hindi": "तुम सब रेत बन जाओ और गायब हो जाओ!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "무릎 꿇어라… 오만한 자여… 너의 분노는… 나를 더 강하게 할 뿐!",
						"english": "Kneel… arrogant one… Your rage… only makes me stronger!",
						"japanese": "ひざまずけ…傲慢な者よ…お前の怒りは…私をさらに強くするだけだ！",
						"chinese": "跪下吧……傲慢的家伙……你的愤怒……只会让我更强大！",
						"french": "Agenouille-toi… arrogant… Ta rage… ne fait que me rendre plus fort !",
						"spanish": "Arrodíllate… arrogante… Tu ira… solo me hace más fuerte!",
						"vietnamese": "Hãy quỳ xuống… kẻ kiêu ngạo… Cơn thịnh nộ của ngươi… chỉ khiến ta mạnh hơn mà thôi!",
						"thai": "คุกเข่าลงซะ… เจ้าผู้โอหัง… ความโกรธของเจ้า… มีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น!",
						"hindi": "घुटने टेको… अहंकारी… तेरा क्रोध… मुझे और शक्तिशाली ही बनाएगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어…!",
						"english": "Ugh… It's not… over yet…!",
						"japanese": "ぐっ…まだ…終わってない…！",
						"chinese": "呃…还没…结束…！",
						"french": "Ugh… Ce n'est pas… encore fini…!",
						"spanish": "Ugh… ¡Aún no… ha terminado…!",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc…!",
						"thai": "อึก… ยัง… ไม่จบ…!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ…!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ember",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "포기하지 마! 저건 시작에 불과해!",
						"english": "Don't give up! That was just the beginning!",
						"japanese": "諦めるな！あれは始まりに過ぎない！",
						"chinese": "别放弃！那只是个开始！",
						"french": "N'abandonne pas ! Ce n'était que le début !",
						"spanish": "¡No te rindas! ¡Eso fue solo el principio!",
						"vietnamese": "Đừng bỏ cuộc! Đó chỉ là khởi đầu thôi!",
						"thai": "อย่ายอมแพ้! นั่นเป็นแค่จุดเริ่มต้นเท่านั้น!",
						"hindi": "हार मत मानो! वो तो बस शुरुआत थी!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래… 다시 일어설 거야…!",
						"english": "Yes… I'll rise again…!",
						"japanese": "ああ…また立ち上がるさ…！",
						"chinese": "对…我会再次站起来的…！",
						"french": "Oui… je me relèverai…!",
						"spanish": "Sí… ¡volveré a levantarme…!",
						"vietnamese": "Được… ta sẽ đứng dậy lần nữa…!",
						"thai": "ใช่… ข้าจะลุกขึ้นสู้ใหม่…!",
						"hindi": "हाँ… मैं फिर उठूँगा…!"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
