export const scenario_snowy_skaalbane_23_04 = {
	"scenario_id": "snowy_skaalbane_23_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 공동. 선체와 시신이 얼음에 녹아 뒤엉켜 있었다.",
						"english": "A vast void. Hulls and corpses melted and intertwined in the ice.",
						"japanese": "巨大な空洞。船体と死体が氷に溶けて絡み合っていた。",
						"chinese": "巨大的空洞。船体和尸体在冰中融化交织。",
						"french": "Un vaste vide. Coques et cadavres fondus et entremêlés dans la glace.",
						"spanish": "Un vasto vacío. Cascos y cadáveres fundidos y entrelazados en el hielo.",
						"vietnamese": "Một khoảng trống rộng lớn. Vỏ tàu và xác chết tan chảy, quấn vào nhau trong băng.",
						"thai": "ช่องว่างขนาดใหญ่ โครงเรือและศพละลายพันกันอยู่ในน้ำแข็ง",
						"hindi": "एक विशाल रिक्ति। पतवार और शव बर्फ में पिघलकर आपस में उलझे हुए थे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이… 이상한 곳이야.",
						"english": "This… is a strange place.",
						"japanese": "ここ… 変な場所だ。",
						"chinese": "这… 是个奇怪的地方。",
						"french": "C'est… un endroit étrange.",
						"spanish": "Este… es un lugar extraño.",
						"vietnamese": "Đây… là một nơi kỳ lạ.",
						"thai": "ที่นี่… เป็นที่ที่แปลกประหลาด",
						"hindi": "यह… एक अजीब जगह है।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "벽의 형상들을 기록하겠습니다. 뭔가 특이한 점이 있다면 알려주시길.",
						"english": "I will record the figures on the walls. Please inform me if anything seems unusual.",
						"japanese": "壁の形状を記録します。何か特異な点があれば教えてください。",
						"chinese": "我将记录墙壁上的形状。如果有什么特殊之处，请告知。",
						"french": "Je vais enregistrer les figures sur les murs. Veuillez me faire savoir si quelque chose semble inhabituel.",
						"spanish": "Registraré las figuras en las paredes. Por favor, infórmenme si algo parece inusual.",
						"vietnamese": "Tôi sẽ ghi lại những hình dáng trên tường. Xin hãy cho tôi biết nếu có bất cứ điều gì bất thường.",
						"thai": "ฉันจะบันทึกรูปร่างบนกำแพง หากมีสิ่งผิดปกติโปรดแจ้งให้ทราบ",
						"hindi": "मैं दीवारों पर बनी आकृतियों को रिकॉर्ड करूँगा। यदि कुछ असामान्य लगे तो कृपया मुझे सूचित करें।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흡수된 것 같아….",
						"english": "Looks like they were absorbed….",
						"japanese": "吸収されたみたいだ…。",
						"chinese": "好像被吸收了…",
						"french": "On dirait qu'ils ont été absorbés….",
						"spanish": "Parece que fueron absorbidos….",
						"vietnamese": "Có vẻ như đã bị hút vào…",
						"thai": "ดูเหมือนจะถูกดูดกลืนไปแล้ว…",
						"hindi": "लगता है वे समाहित हो गए थे…।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 형상들은… 움직임을 멈춘 채로 고정되어 있습니다.",
						"english": "These figures… are fixed, their movements stopped.",
						"japanese": "これらの形は…動きを止めたまま固定されています。",
						"chinese": "这些形状… 停止了移动，被固定住了。",
						"french": "Ces figures… sont figées, leurs mouvements arrêtés.",
						"spanish": "Estas figuras… están fijas, sus movimientos detenidos.",
						"vietnamese": "Những hình dáng này… đã ngừng chuyển động và bị cố định.",
						"thai": "รูปร่างเหล่านี้… หยุดนิ่งและถูกตรึงไว้",
						"hindi": "ये आकृतियाँ… अपनी गति रोककर स्थिर हो गई हैं।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안에서 온기가 느껴지지 않아.",
						"english": "No warmth can be felt from within.",
						"japanese": "中から温かさが感じられない。",
						"chinese": "从里面感觉不到一丝暖意。",
						"french": "Aucune chaleur ne se fait sentir de l'intérieur.",
						"spanish": "No se siente calor desde el interior.",
						"vietnamese": "Không cảm nhận được hơi ấm từ bên trong.",
						"thai": "ไม่รู้สึกถึงความอบอุ่นจากภายในเลย",
						"hindi": "अंदर से कोई गर्मी महसूस नहीं हो रही है।"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말 죽은 시신인 걸까?",
						"english": "Is it really a dead body?",
						"japanese": "本当に死体なのか？",
						"chinese": "这真的是一具尸体吗？",
						"french": "Est-ce vraiment un cadavre ?",
						"spanish": "¿Es realmente un cadáver?",
						"vietnamese": "Đây thật sự là một xác chết sao?",
						"thai": "นี่มันศพจริง ๆ เหรอ?",
						"hindi": "क्या यह वाकई एक मृत शरीर है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시신이라기엔… 내부가 비어 있는 듯합니다.",
						"english": "For a body... it seems to be empty inside.",
						"japanese": "死体というには… 内部が空っぽのようです。",
						"chinese": "说它是尸体… 内部似乎是空的。",
						"french": "Pour un corps... l'intérieur semble vide.",
						"spanish": "Para ser un cadáver... parece estar vacío por dentro.",
						"vietnamese": "Nói là xác chết thì... bên trong hình như rỗng tuếch.",
						"thai": "ถ้าเป็นศพ… ข้างในดูเหมือนว่างเปล่า",
						"hindi": "एक शव के लिए… अंदर से खाली लग रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "하나를 자세히 살펴봤습니다.",
						"english": "I examined one closely.",
						"japanese": "一つを詳しく調べてみました。",
						"chinese": "我仔细检查了一个。",
						"french": "J'en ai examiné un de près.",
						"spanish": "Examiné uno de cerca.",
						"vietnamese": "Tôi đã kiểm tra kỹ một cái.",
						"thai": "ฉันตรวจสอบอันหนึ่งอย่างละเอียดแล้ว",
						"hindi": "मैंने एक की बारीकी से जांच की।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "안에 아무것도 없습니다. 시신도, 온기도.",
						"english": "There's nothing inside. No body, no warmth.",
						"japanese": "中には何もありません。死体も、温もりも。",
						"chinese": "里面什么都没有。没有尸体，也没有温度。",
						"french": "Il n'y a rien à l'intérieur. Ni corps, ni chaleur.",
						"spanish": "No hay nada dentro. Ni cuerpo, ni calor.",
						"vietnamese": "Bên trong không có gì cả. Không xác chết, không hơi ấm.",
						"thai": "ไม่มีอะไรอยู่ข้างในเลย ไม่มีศพ ไม่มีไออุ่น",
						"hindi": "अंदर कुछ भी नहीं है। न शव, न गर्माहट।"
					}
				},
				{
					"content": {
						"korean": "그럼… 저건 뭐야?",
						"english": "Then... what is that?",
						"japanese": "じゃあ… あれは何だ？",
						"chinese": "那么… 那是什么？",
						"french": "Alors... qu'est-ce que c'est ?",
						"spanish": "Entonces... ¿qué es eso?",
						"vietnamese": "Vậy thì... cái đó là gì?",
						"thai": "ถ้าอย่างนั้น… นั่นคืออะไร?",
						"hindi": "तो… वह क्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "안식한 시신이 아닙니다. 단순히 눌어붙은 형상이 아니에요.",
						"english": "It's not a resting body. It's not merely a solidified form.",
						"japanese": "安らかな死体ではありません。単に押し固められた形ではありません。",
						"chinese": "这不是一具安息的尸体。它不仅仅是凝固的形状。",
						"french": "Ce n'est pas un corps au repos. Ce n'est pas simplement une forme figée.",
						"spanish": "No es un cuerpo en reposo. No es simplemente una forma solidificada.",
						"vietnamese": "Đây không phải là một xác chết đang an nghỉ. Nó không chỉ đơn thuần là một hình dạng bị nén chặt.",
						"thai": "นี่ไม่ใช่ศพที่สงบสุข มันไม่ใช่แค่รูปร่างที่ไหม้เกรียม",
						"hindi": "यह एक शांत शव नहीं है। यह सिर्फ एक जमी हुई आकृति नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이것은… 빨리고 남은 빈 껍데기입니다.",
						"english": "This is... an empty shell, drained and left behind.",
						"japanese": "これは… 吸い取られて残った空っぽの殻です。",
						"chinese": "这是… 被吸食后留下的空壳。",
						"french": "C'est... une coquille vide, vidée et abandonnée.",
						"spanish": "Esto es... un cascarón vacío, drenado y abandonado.",
						"vietnamese": "Đây là... một cái vỏ rỗng đã bị hút cạn và bỏ lại.",
						"thai": "นี่คือ… เปลือกที่ว่างเปล่าที่ถูกดูดและทิ้งไว้",
						"hindi": "यह… एक खाली खोल है, जिसे चूसकर छोड़ दिया गया है।"
					}
				},
				{
					"content": {
						"korean": "빈 껍데기?",
						"english": "An empty shell?",
						"japanese": "空っぽの殻？",
						"chinese": "空壳？",
						"french": "Une coquille vide ?",
						"spanish": "¿Un cascarón vacío?",
						"vietnamese": "Vỏ rỗng ư?",
						"thai": "เปลือกว่างเปล่าเหรอ?",
						"hindi": "खाली खोल?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무언가가 이들을 흡수해 왔다는 증거입니다.",
						"english": "It's evidence that something has been absorbing them.",
						"japanese": "何かがこれらを吸収してきたという証拠です。",
						"chinese": "这是有某种东西一直在吸收它们的证据。",
						"french": "C'est la preuve que quelque chose les a absorbés.",
						"spanish": "Es la evidencia de que algo los ha estado absorbiendo.",
						"vietnamese": "Đây là bằng chứng cho thấy có thứ gì đó đã hấp thụ chúng.",
						"thai": "นี่คือหลักฐานว่ามีบางสิ่งบางอย่างกำลังดูดกลืนพวกมันอยู่",
						"hindi": "यह इस बात का सबूत है कि कुछ इन्हें सोख रहा था।"
					}
				},
				{
					"content": {
						"korean": "그럼… 우리의 온기도?",
						"english": "Then... our warmth too?",
						"japanese": "じゃあ… 私たちの温もりも？",
						"chinese": "那么… 我们的体温呢？",
						"french": "Alors... notre chaleur aussi ?",
						"spanish": "Entonces... ¿nuestro calor también?",
						"vietnamese": "Vậy thì... hơi ấm của chúng ta cũng vậy sao?",
						"thai": "ถ้าอย่างนั้น… ความอบอุ่นของเราด้วยเหรอ?",
						"hindi": "तो… हमारी गर्माहट भी?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "공동의 가장 깊은 곳. 거대한 그림자가 움직였다.",
						"english": "Deepest part of the abyss. A massive shadow stirred.",
						"japanese": "奈落の最も深い場所。巨大な影が動いた。",
						"chinese": "深渊最深处。一个巨大的影子在移动。",
						"french": "Au plus profond de l'abîme. Une ombre immense remua.",
						"spanish": "En lo más profundo del abismo. Una sombra gigantesca se movió.",
						"vietnamese": "Nơi sâu thẳm nhất của vực thẳm. Một bóng đen khổng lồ đã chuyển động.",
						"thai": "ส่วนที่ลึกที่สุดของหุบเหว เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "रसातल के सबसे गहरे हिस्से में। एक विशाल छाया हिल उठी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…또 먹잇감인가.",
						"english": "...Another prey?",
						"japanese": "...また獲物か。",
						"chinese": "...又是猎物吗？",
						"french": "...Encore une proie ?",
						"spanish": "...¿Otra presa?",
						"vietnamese": "...Lại một con mồi nữa sao?",
						"thai": "...เหยื่ออีกแล้วรึ?",
						"hindi": "...एक और शिकार?"
					}
				},
				{
					"content": {
						"korean": "네가… 흡수한 거야?",
						"english": "Did you... absorb it?",
						"japanese": "お前が… 吸収したのか？",
						"chinese": "是你…吸收了吗？",
						"french": "Tu l'as... absorbé ?",
						"spanish": "¿Tú... lo absorbiste?",
						"vietnamese": "Ngươi... đã hấp thụ nó sao?",
						"thai": "เจ้า... ดูดกลืนมันไปแล้วรึ?",
						"hindi": "क्या तुमने... उसे सोख लिया?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 온기도… 내 것이 될 것이다.",
						"english": "Your warmth... will also be mine.",
						"japanese": "お前の温もりも… 私のものとなるだろう。",
						"chinese": "你的温暖…也将属于我。",
						"french": "Ta chaleur... deviendra aussi mienne.",
						"spanish": "Tu calor... también será mío.",
						"vietnamese": "Hơi ấm của ngươi... cũng sẽ là của ta.",
						"thai": "ความอบอุ่นของเจ้า... ก็จะเป็นของข้าเช่นกัน",
						"hindi": "तुम्हारी गर्माहट... भी मेरी हो जाएगी।"
					}
				},
				{
					"content": {
						"korean": "절대 안 돼!",
						"english": "Never!",
						"japanese": "絶対だめだ！",
						"chinese": "绝不！",
						"french": "Jamais !",
						"spanish": "¡Jamás!",
						"vietnamese": "Không đời nào!",
						"thai": "ไม่มีทาง!",
						"hindi": "कभी नहीं!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 온기는… 영원히 내 것이다.",
						"english": "Your warmth... forever mine.",
						"japanese": "貴方の温もり… 永遠に私のものだ。",
						"chinese": "你的温暖……永远是我的了。",
						"french": "Ta chaleur... à jamais mienne.",
						"spanish": "Tu calor... mío para siempre.",
						"vietnamese": "Hơi ấm của ngươi... vĩnh viễn là của ta.",
						"thai": "ความอบอุ่นของเจ้า... จะเป็นของข้าตลอดไป",
						"hindi": "तुम्हारी गर्माहट... हमेशा के लिए मेरी है।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 포기할 수 없어.",
						"english": "...Still can't give up.",
						"japanese": "…まだ諦められない。",
						"chinese": "……我不能就此放弃。",
						"french": "...Je ne peux pas abandonner si tôt.",
						"spanish": "...No puedo rendirme aún.",
						"vietnamese": "...Vẫn chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...मैं अभी हार नहीं मान सकता।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이곳의 힘은… 영원하다….",
						"english": "...The power of this place... is eternal...",
						"japanese": "...この地の力は… 永遠だ…",
						"chinese": "...这里之力…永恒不灭…",
						"french": "...Le pouvoir de ce lieu... est éternel...",
						"spanish": "...El poder de este lugar... es eterno...",
						"vietnamese": "...Sức mạnh nơi đây... là vĩnh cửu...",
						"thai": "...พลังแห่งที่นี่... เป็นนิรันดร์...",
						"hindi": "...इस स्थान की शक्ति... अनंत है..."
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸어… 하지만….",
						"english": "I defeated it... but...",
						"japanese": "倒した… しかし…",
						"chinese": "击败了…但是…",
						"french": "Je l'ai vaincu... mais...",
						"spanish": "Lo derroté... pero...",
						"vietnamese": "Đã đánh bại rồi... nhưng...",
						"thai": "เอาชนะได้แล้ว... แต่ว่า...",
						"hindi": "मैंने उसे हरा दिया... लेकिन..."
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "온기가 완전히 사라진 건 아닙니다. 아직… 희망이 있습니다.",
						"english": "The warmth hasn't completely vanished. There's still... hope.",
						"japanese": "温もりが完全に消えたわけではありません。まだ…希望があります。",
						"chinese": "温暖并未完全消散。仍有…希望。",
						"french": "La chaleur n'a pas complètement disparu. Il y a encore... de l'espoir.",
						"spanish": "El calor no ha desaparecido por completo. Todavía hay... esperanza.",
						"vietnamese": "Hơi ấm chưa hoàn toàn biến mất. Vẫn còn... hy vọng.",
						"thai": "ความอบอุ่นยังไม่หายไปทั้งหมด ยังคงมี...ความหวัง",
						"hindi": "गर्मी पूरी तरह से गायब नहीं हुई है। अभी भी... उम्मीद है।"
					}
				},
				{
					"content": {
						"korean": "빈 껍데기만 남은 자들. 그들의 슬픔이 공간을 채웠다.",
						"english": "Those who remained as empty husks. Their sorrow filled the space.",
						"japanese": "空っぽの殻だけが残った者たち。彼らの悲しみが空間を満たした。",
						"chinese": "只剩下空壳的人们。他们的悲伤充斥着空间。",
						"french": "Ceux qui n'étaient plus que des coquilles vides. Leur tristesse remplit l'espace.",
						"spanish": "Aquellos que quedaron como cascarones vacíos. Su tristeza llenó el espacio.",
						"vietnamese": "Những kẻ chỉ còn lại lớp vỏ rỗng. Nỗi buồn của họ lấp đầy không gian.",
						"thai": "ผู้ที่เหลือเพียงเปลือกว่างเปล่า ความเศร้าโศกของพวกเขาเติมเต็มพื้นที่",
						"hindi": "केवल खाली खोल रह गए लोग। उनके दुख ने अंतरिक्ष को भर दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이곳의 진정한 안식은 언제쯤 찾아올까.",
						"english": "When will true peace come to this place?",
						"japanese": "この地に真の安息はいつ訪れるのだろうか。",
						"chinese": "这里的真正安宁何时才能到来？",
						"french": "Quand la véritable paix viendra-t-elle en ce lieu ?",
						"spanish": "¿Cuándo llegará la verdadera paz a este lugar?",
						"vietnamese": "Khi nào bình yên thực sự mới đến nơi này?",
						"thai": "เมื่อไรความสงบสุขที่แท้จริงจะมาเยือนที่นี่",
						"hindi": "इस स्थान पर सच्ची शांति कब आएगी?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"잔해탑 깊은 곳. 얼어붙은 시간 속에 묻힌 거대한 공동.",
			"벽마다 사람 형상들이 박혀 있었다. 흡수된 것처럼.",
			"그것은 안식이 아니었다. 무언가에게 빨리고 남은 흔적.",
			"그리고 이 흔적은, 우리에게도 스며들고 있었다."
		],
		"english": [
			"Deep within the Tower of Wreckage. A vast void, buried in frozen time.",
			"Human figures were embedded in every wall. As if absorbed.",
			"It was not rest. Traces left after being sucked dry by something.",
			"And these traces were seeping into us as well."
		],
		"japanese": [
			"残骸の塔の奥深く。凍りついた時間の中に埋もれた巨大な空洞。",
			"壁には人型が埋め込まれていた。まるで吸収されたかのように。",
			"それは安息ではなかった。何かに吸い尽くされ、残された痕跡。",
			"そしてこの痕跡は、私たちにも浸透しつつあった。"
		],
		"chinese": [
			"残骸之塔深处。埋藏在冰封时间中的巨大空洞。",
			"墙壁上镶嵌着人形。仿佛被吸收了一般。",
			"那不是安息。是被某种东西吸食殆尽后留下的痕迹。",
			"而这些痕迹，也正渗透到我们身上。"
		],
		"french": [
			"Au plus profond de la Tour des Épaves. Un vaste vide, enfoui dans le temps gelé.",
			"Des formes humaines étaient incrustées dans chaque mur. Comme absorbées.",
			"Ce n'était pas le repos. Des traces laissées après avoir été aspirées par quelque chose.",
			"Et ces traces s'infiltraient aussi en nous."
		],
		"spanish": [
			"En lo profundo de la Torre de los Restos. Un vasto vacío, sepultado en el tiempo congelado.",
			"Figuras humanas estaban incrustadas en cada pared. Como si hubieran sido absorbidas.",
			"No era un descanso. Eran rastros dejados después de ser succionados por algo.",
			"Y estas huellas también se estaban infiltrando en nosotros."
		],
		"vietnamese": [
			"Sâu thẳm trong Tháp Phế Tích. Một khoảng trống rộng lớn, chôn vùi trong thời gian đóng băng.",
			"Hình dáng con người bị đính chặt vào mỗi bức tường. Như thể bị hút vào.",
			"Đó không phải là sự yên nghỉ. Chỉ là dấu vết còn lại sau khi bị thứ gì đó hút cạn.",
			"Và những dấu vết này, cũng đang thấm vào chúng tôi."
		],
		"thai": [
			"ลึกเข้าไปในหอคอยแห่งซากปรักหักพัง ช่องว่างขนาดใหญ่ที่ฝังอยู่ในกาลเวลาที่หยุดนิ่ง",
			"ร่างมนุษย์ฝังอยู่ในทุกกำแพง ราวกับถูกดูดกลืน",
			"นั่นไม่ใช่การพักผ่อน ร่องรอยที่เหลือหลังจากถูกบางสิ่งดูดกลืน",
			"และร่องรอยเหล่านี้ ก็กำลังซึมซับเข้ามาในตัวเราเช่นกัน"
		],
		"hindi": [
			"मलबे के टावर के भीतर गहरा। जमे हुए समय में दबी एक विशाल रिक्ति।",
			"हर दीवार में मानव आकृतियाँ जड़ी हुई थीं। मानो समाहित हो गई हों।",
			"वह आराम नहीं था। किसी चीज़ द्वारा चूस लिए जाने के बाद बचे हुए निशान।",
			"और ये निशान, हम में भी रिस रहे थे।"
		]
	}
} as const;
