export const scenario_snowy_skuld_2_01 = {
	"scenario_id": "snowy_skuld_2_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"북방의 잊힌 설원, 끝없는 눈보라 너머.",
			"푸른빛 거대 빙하가 압도적인 모습으로 솟아올랐다.",
			"태고의 정령이 침범자를 얼린다는 소문.",
			"장엄한 적막 속에, 알 수 없는 쓸쓸함이 감돌았다."
		],
		"english": [
			"Beyond the endless blizzard, in the forgotten northern snowfield.",
			"A colossal blue glacier rose majestically.",
			"Rumor has it an ancient spirit freezes intruders.",
			"In the solemn silence, an inexplicable loneliness lingered."
		],
		"japanese": [
			"終わりのない吹雪の向こう、忘れ去られた北の雪原。",
			"青く巨大な氷河が圧倒的な姿でそびえ立っていた。",
			"太古の精霊が侵入者を凍らせるという噂。",
			"荘厳な静寂の中に、言いようのない寂しさが漂っていた。"
		],
		"chinese": [
			"无尽暴雪之外，被遗忘的北方雪原。",
			"一座巨大的蓝色冰川拔地而起，气势磅礴。",
			"传闻太古的精灵会将入侵者冻结。",
			"庄严的寂静中，弥漫着一种莫名的凄凉。"
		],
		"french": [
			"Au-delà du blizzard sans fin, dans le champ de neige septentrional oublié.",
			"Un gigantesque glacier bleu s'élevait majestueusement.",
			"La rumeur dit qu'un esprit ancien gèle les intrus.",
			"Dans le silence solennel, une tristesse inexplicable persistait."
		],
		"spanish": [
			"Más allá de la ventisca interminable, en el olvidado campo de nieve del norte.",
			"Un glaciar azul colosal se alzaba imponente.",
			"Se rumorea que un espíritu ancestral congela a los intrusos.",
			"En el silencio solemne, una soledad inexplicable flotaba en el aire."
		],
		"vietnamese": [
			"Vượt ngoài bão tuyết vô tận, tại cánh đồng tuyết phương bắc bị lãng quên.",
			"Một sông băng khổng lồ màu xanh lam hùng vĩ vươn lên.",
			"Có lời đồn rằng linh hồn cổ xưa đóng băng những kẻ xâm nhập.",
			"Trong sự tĩnh lặng trang nghiêm, một nỗi cô đơn khó hiểu đọng lại."
		],
		"thai": [
			"พ้นจากพายุหิมะที่ไม่มีที่สิ้นสุด ณ ทุ่งน้ำแข็งทางเหนือที่ถูกลืมเลือน",
			"ธารน้ำแข็งสีน้ำเงินขนาดยักษ์สูงตระหง่านอย่างสง่างาม",
			"มีข่าวลือว่าวิญญาณโบราณจะแช่แข็งผู้บุกรุก",
			"ในความเงียบงันอันเคร่งขรึม ความเหงาที่อธิบายไม่ได้ยังคงอยู่"
		],
		"hindi": [
			"अनंत बर्फीले तूफान से परे, भूले हुए उत्तरी बर्फीले मैदान में।",
			"एक विशाल नीला ग्लेशियर राजसी रूप से उठा।",
			"अफवाह है कि एक प्राचीन आत्मा घुसपैठियों को जमा देती है।",
			"गंभीर सन्नाटे में, एक अवर्णनीय अकेलापन छाया हुआ था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 빙하가 눈보라를 뚫고 솟아 있었다. 그 푸른 빛이 시야를 가득 채웠다.",
						"english": "A colossal glacier rose through the blizzard, its blue light filling my vision.",
						"japanese": "巨大な氷河が吹雪を突き抜けてそびえ立っていた。その青い光が視界いっぱいに広がった。",
						"chinese": "巨大的冰川穿透暴雪拔地而起，其蓝色光芒充满了视野。",
						"french": "Un glacier colossal s'élevait à travers le blizzard, sa lumière bleue emplissant ma vision.",
						"spanish": "Un glaciar colosal se alzaba entre la ventisca, su luz azul llenando mi vista.",
						"vietnamese": "Một sông băng khổng lồ vươn lên xuyên qua bão tuyết, ánh sáng xanh của nó tràn ngập tầm nhìn của tôi.",
						"thai": "ธารน้ำแข็งมหึมาสูงตระหง่านท่ามกลางพายุหิมะ แสงสีน้ำเงินของมันเต็มสายตา",
						"hindi": "एक विशाल ग्लेशियर बर्फीले तूफान से ऊपर उठा, उसकी नीली रोशनी मेरी दृष्टि को भर रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이게 그 빙하인가.",
						"english": "...Is this the glacier?",
						"japanese": "…これが、その氷河か。",
						"chinese": "……这就是那座冰川吗？",
						"french": "...C'est ça, le glacier ?",
						"spanish": "¿...Es este el glaciar?",
						"vietnamese": "...Đây là sông băng đó sao?",
						"thai": "...นี่คือธารน้ำแข็งนั่นหรือเปล่า",
						"hindi": "...क्या यह वही ग्लेशियर है?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "빙하 표면에… 오래된 용머리 조각이 새겨져 있습니다.",
						"english": "On the glacier's surface... an ancient dragon head carving is etched.",
						"japanese": "氷河の表面に…古い竜の頭の彫刻が刻まれています。",
						"chinese": "冰川表面上……刻着一个古老的龙头雕塑。",
						"french": "Sur la surface du glacier... une ancienne sculpture de tête de dragon est gravée.",
						"spanish": "En la superficie del glaciar... hay grabada una antigua talla de cabeza de dragón.",
						"vietnamese": "Trên bề mặt sông băng... có một chạm khắc đầu rồng cổ xưa.",
						"thai": "บนพื้นผิวของธารน้ำแข็ง... มีรูปแกะสลักหัวมังกรโบราณสลักอยู่",
						"hindi": "ग्लेशियर की सतह पर... एक प्राचीन ड्रैगन-सिर की नक्काशी उकेरी गई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그리고 주변을 둘러싼 룬 문자들… 기록해야 합니다.",
						"english": "And the runes surrounding it... I must record them.",
						"japanese": "そして周囲を取り囲むルーン文字…記録しなければなりません。",
						"chinese": "以及周围环绕的符文……我必须记录下来。",
						"french": "Et les runes qui l'entourent... je dois les enregistrer.",
						"spanish": "Y las runas que lo rodean... debo registrarlas.",
						"vietnamese": "Và những ký tự rune xung quanh... tôi phải ghi lại chúng.",
						"thai": "และอักขระรูนที่ล้อมรอบ... ฉันต้องบันทึกไว้",
						"hindi": "और इसके चारों ओर के रून्स... मुझे उन्हें रिकॉर्ड करना होगा।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬 문양들… 단순한 장식이 아닙니다.",
						"english": "These rune patterns... they're not just simple decorations.",
						"japanese": "このルーン模様…単なる装飾ではありません。",
						"chinese": "这些符文图案……它们不仅仅是简单的装饰。",
						"french": "Ces motifs runiques... ce ne sont pas de simples décorations.",
						"spanish": "Estos patrones rúnicos... no son simples decoraciones.",
						"vietnamese": "Những hoa văn rune này... chúng không chỉ là những vật trang trí đơn giản.",
						"thai": "ลวดลายรูนเหล่านี้... ไม่ใช่แค่เครื่องประดับธรรมดา",
						"hindi": "ये रूण पैटर्न... ये सिर्फ साधारण सजावट नहीं हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어떤 의미지?",
						"english": "What do they mean?",
						"japanese": "どんな意味だ？",
						"chinese": "它们有什么意义？",
						"french": "Que signifient-ils ?",
						"spanish": "¿Qué significan?",
						"vietnamese": "Chúng có ý nghĩa gì?",
						"thai": "พวกมันหมายความว่าอะไร?",
						"hindi": "इनका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오랫동안 잊힌 언어입니다. 하지만… '경고'의 의미가 강합니다.",
						"english": "It's a long-forgotten language. But... it strongly means 'Warning'.",
						"japanese": "長い間忘れられた言語です。しかし…『警告』の意味合いが強いです。",
						"chinese": "这是一种被遗忘已久的语言。但是……'警告'的意味很强烈。",
						"french": "C'est une langue oubliée depuis longtemps. Mais... le sens de 'Avertissement' est fort.",
						"spanish": "Es un idioma olvidado hace mucho tiempo. Pero... el significado de 'Advertencia' es fuerte.",
						"vietnamese": "Đây là một ngôn ngữ bị lãng quên từ lâu. Nhưng... nó mang nặng ý nghĩa 'Cảnh báo'.",
						"thai": "เป็นภาษาที่ถูกลืมไปนานแล้ว แต่...มีความหมายที่ชัดเจนว่า 'คำเตือน'",
						"hindi": "यह एक लंबे समय से भूली हुई भाषा है। लेकिन… इसका अर्थ 'चेतावनी' है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "조금 해독했습니다. '침범자를 얼려라…'. 보호와 응징의 메시지입니다.",
						"english": "Deciphered a bit. 'Freeze the invaders...'. It's a message of protection and retribution.",
						"japanese": "少し解読しました。『侵入者を凍らせろ…』。保護と懲罰のメッセージです。",
						"chinese": "破译了一点。'冻结入侵者……'。这是一个保护和惩罚的信息。",
						"french": "J'ai déchiffré un peu. 'Gelez les envahisseurs...'. C'est un message de protection et de châtiment.",
						"spanish": "Descifré un poco. 'Congela a los invasores...'. Es un mensaje de protección y castigo.",
						"vietnamese": "Đã giải mã được một chút. 'Đóng băng những kẻ xâm lược...'. Đó là thông điệp bảo vệ và trừng phạt.",
						"thai": "ถอดรหัสได้บางส่วน 'แช่แข็งผู้บุกรุก...' มันคือข้อความของการปกป้องและการลงทัณฑ์",
						"hindi": "थोड़ा सा समझा गया। 'घुसपैठियों को जमा दो…'। यह सुरक्षा और प्रतिशोध का संदेश है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "태고의 정령이 진짜 있단 말인가.",
						"english": "Ancient spirits... do they really exist?",
						"japanese": "太古の精霊が本当にいるというのか。",
						"chinese": "远古的精灵……真的存在吗？",
						"french": "Des esprits anciens... existent-ils vraiment ?",
						"spanish": "Espíritus antiguos... ¿realmente existen?",
						"vietnamese": "Thần linh cổ đại... liệu có thật sự tồn tại?",
						"thai": "วิญญาณโบราณ...มีอยู่จริงหรือ?",
						"hindi": "प्राचीन आत्माएं... क्या वे सच में मौजूद हैं?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이런 고대의 기록이 거짓일 리는 없습니다.",
						"english": "Such ancient records cannot be false.",
						"japanese": "このような古代の記録が偽りであるはずがありません。",
						"chinese": "这些古代记录不可能是假的。",
						"french": "De tels registres anciens ne peuvent être faux.",
						"spanish": "Tales registros antiguos no pueden ser falsos.",
						"vietnamese": "Những ghi chép cổ xưa như vậy không thể là giả.",
						"thai": "บันทึกโบราณเช่นนี้ไม่น่าจะเป็นเรื่องโกหก",
						"hindi": "ऐसे प्राचीन रिकॉर्ड झूठे नहीं हो सकते।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "점점 더 복잡한 룬이 나타납니다. 단순한 자연현상이 아닙니다.",
						"english": "More and more complex runes appear. This is no mere natural phenomenon.",
						"japanese": "ますます複雑なルーンが現れています。これは単なる自然現象ではありません。",
						"chinese": "越来越复杂的符文出现了。这绝非单纯的自然现象。",
						"french": "Des runes de plus en plus complexes apparaissent. Ce n'est pas un simple phénomène naturel.",
						"spanish": "Aparecen runas cada vez más complejas. Esto no es un simple fenómeno natural.",
						"vietnamese": "Những ký tự rune ngày càng phức tạp xuất hiện. Đây không phải là hiện tượng tự nhiên đơn thuần.",
						"thai": "อักษรรูนที่ซับซ้อนขึ้นเรื่อยๆ ปรากฏขึ้น นี่ไม่ใช่ปรากฏการณ์ธรรมชาติธรรมดา",
						"hindi": "अधिक और अधिक जटिल रन प्रकट होते हैं। यह कोई सामान्य प्राकृतिक घटना नहीं है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 한기… 마치 살아있는 것 같아.",
						"english": "This chill... it feels alive.",
						"japanese": "この寒気…まるで生きているようだ。",
						"chinese": "这股寒意……仿佛是活的。",
						"french": "Ce froid... on dirait qu'il est vivant.",
						"spanish": "Este frío... parece estar vivo.",
						"vietnamese": "Cái lạnh này... cứ như có sự sống vậy.",
						"thai": "ความหนาวเย็นนี้...ราวกับมีชีวิต",
						"hindi": "यह ठंडक... ऐसा लगता है जैसे यह जीवित है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 빙하… 무언가를 지키고 있습니다.",
						"english": "This glacier... it's guarding something.",
						"japanese": "この氷河…何かを守っています。",
						"chinese": "这座冰川……正在守护着什么。",
						"french": "Ce glacier... il garde quelque chose.",
						"spanish": "Este glaciar... está custodiando algo.",
						"vietnamese": "Tảng băng này... đang bảo vệ một thứ gì đó.",
						"thai": "ธารน้ำแข็งนี้...กำลังปกป้องบางสิ่งอยู่",
						"hindi": "यह ग्लेशियर... कुछ की रखवाली कर रहा है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 이것이… 끝이 아니다.",
						"english": "Ugh… This is… not the end.",
						"japanese": "ぐっ…これが…終わりではない。",
						"chinese": "呃……这……还没结束。",
						"french": "Ugh… Ce n'est… pas la fin.",
						"spanish": "Ugh… Esto… no es el final.",
						"vietnamese": "Khụ… Đây… chưa phải là kết thúc.",
						"thai": "อึก… นี่… ไม่ใช่จุดจบ",
						"hindi": "उफ़… यह… अंत नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "푸른 빛은… 아직… 깨어나고 있다….",
						"english": "The blue light is… still… awakening…",
						"japanese": "青い光は…まだ…目覚めつつある…。",
						"chinese": "那蓝光…还在…苏醒……",
						"french": "La lumière bleue… s'éveille… encore…",
						"spanish": "La luz azul… aún… está despertando…",
						"vietnamese": "Ánh sáng xanh… vẫn đang… thức tỉnh…",
						"thai": "แสงสีคราม… ยังคง… ตื่นขึ้นมา…",
						"hindi": "नीली रोशनी… अभी भी… जागृत हो रही है…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났다…! 하지만 저 푸른 빛은 뭐지?",
						"english": "It's over…! But what is that blue light?",
						"japanese": "終わった…！しかし、あの青い光は何だ？",
						"chinese": "结束了……！但那蓝光是什么？",
						"french": "C'est fini… ! Mais qu'est-ce que cette lumière bleue ?",
						"spanish": "¡Se acabó…! Pero ¿qué es esa luz azul?",
						"vietnamese": "Kết thúc rồi…! Nhưng ánh sáng xanh đó là gì?",
						"thai": "จบแล้ว…! แต่แสงสีครามนั้นคืออะไร?",
						"hindi": "खत्म हो गया…! लेकिन वह नीली रोशनी क्या है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "빙하는 잠시 침묵했다. 그러나 얼음 깊은 곳에서… 옅은 푸른 빛이 피어오르고 있었다.",
						"english": "The glacier fell silent for a moment. But from deep within the ice… a faint blue light was rising.",
						"japanese": "氷河は一時静まった。しかし氷の奥深くから…淡い青い光が立ち昇っていた。",
						"chinese": "冰川暂时沉默了。然而在冰层深处……微弱的蓝光正在升起。",
						"french": "Le glacier se tut un instant. Mais des profondeurs de la glace… une faible lumière bleue s'élevait.",
						"spanish": "El glaciar guardó silencio por un momento. Pero desde lo profundo del hielo… una tenue luz azul estaba surgiendo.",
						"vietnamese": "Băng hà im lặng một lúc. Nhưng từ sâu thẳm trong băng… một ánh sáng xanh nhạt đang trỗi dậy.",
						"thai": "ธารน้ำแข็งเงียบงันชั่วขณะ แต่จากส่วนลึกของน้ำแข็ง… แสงสีครามจางๆ กำลังผลิบาน",
						"hindi": "ग्लेशियर एक पल के लिए शांत हो गया। लेकिन बर्फ की गहराई से… एक हल्की नीली रोशनी उठ रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나약한 침범자여… 빙하의 분노를 견뎌낼 수 없을 것이다.",
						"english": "Weak intruder… you will not withstand the glacier's wrath.",
						"japanese": "弱き侵入者よ…氷河の怒りには耐えられないだろう。",
						"chinese": "弱小的入侵者啊……你无法承受冰川的怒火。",
						"french": "Faible intrus… tu ne supporteras pas la colère du glacier.",
						"spanish": "Débil intruso… no podrás soportar la ira del glaciar.",
						"vietnamese": "Kẻ xâm phạm yếu ớt… ngươi sẽ không thể chịu đựng được cơn thịnh nộ của băng hà.",
						"thai": "ผู้บุกรุกที่อ่อนแอ… เจ้าจะทนความพิโรธของธารน้ำแข็งไม่ได้",
						"hindi": "कमजोर घुसपैठिए… तुम ग्लेशियर के क्रोध को सहन नहीं कर पाओगे।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다…!",
						"english": "Ugh… It's not… over yet…!",
						"japanese": "ぐっ…まだ…終わっていない…！",
						"chinese": "呃……还没……结束……！",
						"french": "Ugh… Ce n'est pas… encore fini… !",
						"spanish": "Ugh… ¡Aún… no ha terminado…!",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc…!",
						"thai": "อึก… ยัง… ไม่จบ…!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ है…!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙하의 심장부. 마침내 모든 것을 얼리는 자와 마주했다.",
						"english": "The heart of the massive glacier. Finally, I face the one who freezes all.",
						"japanese": "巨大な氷河の心臓部。ついに、すべてを凍らせる者と対峙した。",
						"chinese": "巨大冰川的心脏地带。终于，我面对了那个冰封一切的存在。",
						"french": "Au cœur du glacier massif. Enfin, j'ai affronté celui qui gèle tout.",
						"spanish": "El corazón del enorme glaciar. Finalmente, me enfrenté al que lo congela todo.",
						"vietnamese": "Trái tim của tảng băng khổng lồ. Cuối cùng, tôi đã đối mặt với kẻ đóng băng mọi thứ.",
						"thai": "ใจกลางธารน้ำแข็งขนาดใหญ่ ในที่สุดก็เผชิญหน้ากับผู้ที่แช่แข็งทุกสิ่ง",
						"hindi": "विशाल ग्लेशियर का हृदय। अंततः, मैंने उस व्यक्ति का सामना किया जो सब कुछ जमा देता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 여기까지 온 자가 누구냐.",
						"english": "Who dares... come this far?",
						"japanese": "よくも…ここまで来たな。",
						"chinese": "竟敢……来到此处的是何人？",
						"french": "Qui ose... venir jusqu'ici ?",
						"spanish": "¿Quién se atreve... a llegar tan lejos?",
						"vietnamese": "Kẻ nào... dám đến tận đây?",
						"thai": "ใครกัน...ที่กล้ามาถึงที่นี่?",
						"hindi": "कौन हिम्मत करता है... इतनी दूर आने की?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "빙하의 수호자여! 네 정체를 밝혀라!",
						"english": "Guardian of the Glacier! Reveal your true form!",
						"japanese": "氷河の守護者よ！その正体を現せ！",
						"chinese": "冰川的守护者啊！显露你的真面目！",
						"french": "Gardien du Glacier ! Révèle ta véritable forme !",
						"spanish": "¡Guardián del Glaciar! ¡Revela tu verdadera forma!",
						"vietnamese": "Hỡi người bảo vệ Băng Hà! Hãy tiết lộ thân phận thật sự của ngươi!",
						"thai": "ผู้พิทักษ์ธารน้ำแข็ง! จงเปิดเผยตัวตนที่แท้จริงของเจ้า!",
						"hindi": "ग्लेशियर के संरक्षक! अपनी असली पहचान बताओ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 땅을 더럽히는 침범자여… 후회하게 될 것이다.",
						"english": "Intruder defiling this land… you will regret this.",
						"japanese": "この地を汚す侵入者よ…後悔することになるだろう。",
						"chinese": "玷污这片土地的入侵者啊……你将会后悔的。",
						"french": "Intrus qui souille cette terre… tu le regretteras.",
						"spanish": "Intruso que profana esta tierra… te arrepentirás.",
						"vietnamese": "Kẻ xâm phạm làm ô uế vùng đất này… ngươi sẽ phải hối hận.",
						"thai": "ผู้บุกรุกที่แปดเปื้อนแผ่นดินนี้… เจ้าจะต้องเสียใจ",
						"hindi": "इस भूमि को अपवित्र करने वाले घुसपैठिए… तुम्हें इसका पछतावा होगा।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
