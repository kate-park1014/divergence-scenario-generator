export const scenario_snowy_cairn_46_02 = {
	"scenario_id": "snowy_cairn_46_02",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 동굴의 벽면 가득, 푸른 룬들이 빛났다. 수백 년의 기록이었다.",
						"english": "Blue runes glowed across the ice cave walls. A record of centuries.",
						"japanese": "氷の洞窟の壁一面に、青いルーンが輝いていた。数百年の記録だった。",
						"chinese": "冰之洞窟的墙壁上，蓝色符文熠熠生辉。那是数百年的记录。",
						"french": "Des runes bleues brillaient sur les murs de la grotte de glace. Des siècles d'histoire.",
						"spanish": "Runas azules brillaban por las paredes de la cueva de hielo. Un registro de siglos.",
						"vietnamese": "Các rune màu xanh lam phát sáng trên khắp vách hang băng. Một ghi chép hàng thế kỷ.",
						"thai": "รูนสีน้ำเงินเรืองรองอยู่ทั่วผนังถ้ำน้ำแข็ง เป็นบันทึกของหลายศตวรรษ",
						"hindi": "बर्फ़ की गुफा की दीवारों पर नीले रूण चमक रहे थे। सदियों का एक रिकॉर्ड था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 전부 맹세의 기록인가?",
						"english": "Is this all a record of vows?",
						"japanese": "これはすべて誓いの記録なのか？",
						"chinese": "这全是誓言的记录吗？",
						"french": "Tout ceci est-il un recueil de serments ?",
						"spanish": "¿Es todo esto un registro de juramentos?",
						"vietnamese": "Đây có phải là toàn bộ ghi chép về lời thề không?",
						"thai": "นี่คือบันทึกของคำสาบานทั้งหมดเลยเหรอ?",
						"hindi": "क्या यह सब प्रतिज्ञाओं का रिकॉर्ड है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니, 이것은….",
						"english": "No, these are...",
						"japanese": "いや、これは…。",
						"chinese": "不，这些是……",
						"french": "Non, ce sont...",
						"spanish": "No, estas son...",
						"vietnamese": "Không, đây là…",
						"thai": "ไม่ นี่มัน...",
						"hindi": "नहीं, ये हैं..."
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "깨어진 약속들이다.",
						"english": "Broken promises.",
						"japanese": "破られた約束だ。",
						"chinese": "被打破的约定。",
						"french": "Des promesses brisées.",
						"spanish": "Promesas rotas.",
						"vietnamese": "Những lời hứa đã bị phá vỡ.",
						"thai": "สัญญาที่แตกสลาย",
						"hindi": "टूटे हुए वादे।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "오래된 룬들이 더 선명해. 마치 생채기처럼.",
						"english": "The old runes are clearer now. Like fresh wounds.",
						"japanese": "古いルーンがより鮮明だ。まるで生傷のように。",
						"chinese": "古老的符文更加清晰了。如同新伤一般。",
						"french": "Les vieilles runes sont plus nettes. Comme des plaies fraîches.",
						"spanish": "Las runas antiguas son más claras. Como heridas frescas.",
						"vietnamese": "Các rune cổ giờ rõ ràng hơn. Như những vết sẹo mới.",
						"thai": "รูนเก่าๆ ชัดเจนขึ้น ราวกับบาดแผลสด",
						"hindi": "पुरानी रूण अब ज़्यादा साफ़ हैं। ताज़े घावों की तरह।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 내용인데?",
						"english": "What do they say?",
						"japanese": "どんな内容だ？",
						"chinese": "内容是什么？",
						"french": "Que disent-elles ?",
						"spanish": "¿Qué dicen?",
						"vietnamese": "Nội dung là gì?",
						"thai": "มันว่ายังไงบ้าง?",
						"hindi": "उनमें क्या लिखा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…한 전사의 이름. 그리고, 그가 어긴 맹세.",
						"english": "...A warrior's name. And the vow he broke.",
						"japanese": "…ある戦士の名。そして、彼が破った誓い。",
						"chinese": "…一名战士的名字。还有他违背的誓言。",
						"french": "...Le nom d'un guerrier. Et le serment qu'il a brisé.",
						"spanish": "...El nombre de un guerrero. Y el juramento que rompió.",
						"vietnamese": "...Tên của một chiến binh. Và lời thề anh ta đã phá vỡ.",
						"thai": "...ชื่อของนักรบผู้หนึ่ง และคำสาบานที่เขาผิดไป",
						"hindi": "...एक योद्धा का नाम। और वह प्रतिज्ञा जो उसने तोड़ी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "내가 알던 그분일 리 없어.",
						"english": "It can't be the person I knew.",
						"japanese": "私が知る彼であるはずがない。",
						"chinese": "不可能是我认识的那个人。",
						"french": "Ce ne peut être la personne que je connaissais.",
						"spanish": "No puede ser la persona que conocí.",
						"vietnamese": "Không thể nào là người tôi từng biết.",
						"thai": "ไม่น่าใช่คนที่ฉันเคยรู้จัก",
						"hindi": "वह वह व्यक्ति नहीं हो सकता जिसे मैं जानता था।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 룬은… 확실해.",
						"english": "This rune... it's unmistakable.",
						"japanese": "このルーンは…間違いない。",
						"chinese": "这个符文…肯定没错。",
						"french": "Cette rune... c'est indubitable.",
						"spanish": "Esta runa... es inconfundible.",
						"vietnamese": "Khắc ấn này... chắc chắn rồi.",
						"thai": "รูนนี้... แน่นอน",
						"hindi": "यह रूण... यह निश्चित है।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "‘레기온.’ 내가 따르던, 가장 위대한 전사.",
						"english": "'Legion.' The greatest warrior I ever followed.",
						"japanese": "「『レギオン。』私が従った、最も偉大な戦士。」",
						"chinese": "‘军团。’我曾追随的，最伟大的战士。",
						"french": "'Légion.' Le plus grand guerrier que j'aie jamais suivi.",
						"spanish": "'Legión.' El guerrero más grande al que seguí.",
						"vietnamese": "'Quân đoàn.' Chiến binh vĩ đại nhất mà tôi từng theo.",
						"thai": "'เลกิออน' นักรบผู้ยิ่งใหญ่ที่สุดที่ฉันเคยติดตาม",
						"hindi": "'लीजन।' वह महानतम योद्धा जिसका मैंने अनुसरण किया।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 이름이 왜 여기에 있어?",
						"english": "Why is his name here?",
						"japanese": "なぜ彼の名前がここにある？",
						"chinese": "为什么他的名字会在这里？",
						"french": "Pourquoi son nom est-il ici ?",
						"spanish": "¿Por qué su nombre está aquí?",
						"vietnamese": "Tại sao tên anh ta lại ở đây?",
						"thai": "ทำไมชื่อเขาถึงมาอยู่ที่นี่?",
						"hindi": "उसका नाम यहाँ क्यों है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "배신자 명부에… 새겨져 있다.",
						"english": "It's etched... in the traitors' registry.",
						"japanese": "裏切り者の名簿に…刻まれている。",
						"chinese": "刻在…叛徒名册上。",
						"french": "C'est gravé... dans le registre des traîtres.",
						"spanish": "Está grabado... en el registro de traidores.",
						"vietnamese": "Nó được khắc... trong sổ đăng ký của kẻ phản bội.",
						"thai": "มันถูกจารึก... ในบัญชีรายชื่อคนทรยศ",
						"hindi": "यह... देशद्रोहियों की सूची में खुदा हुआ है।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…그분이, 약속을 어겼다고?",
						"english": "...He broke his promise?",
						"japanese": "…彼が、約束を破ったと？",
						"chinese": "…他，违背了诺言？",
						"french": "...Il a rompu sa promesse ?",
						"spanish": "¿...Él rompió su promesa?",
						"vietnamese": "...Người đó, đã phá vỡ lời hứa?",
						"thai": "...เขาผิดคำสัญญา?",
						"hindi": "...उसने, अपना वादा तोड़ा?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이런… 믿을 수 없어.",
						"english": "Damn... I can't believe it.",
						"japanese": "くそ…信じられない。",
						"chinese": "该死…真不敢相信。",
						"french": "Mince... Je n'arrive pas à y croire.",
						"spanish": "Maldición... No puedo creerlo.",
						"vietnamese": "Chết tiệt... Không thể tin được.",
						"thai": "แย่จริง... ฉันไม่อยากเชื่อเลย",
						"hindi": "धिक्कार है... मुझे विश्वास नहीं हो रहा।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 맹세가 왜 깨진 것들 뿐이지?",
						"english": "Why are all these vows broken?",
						"japanese": "なぜこの誓いは全て破られているのだ？",
						"chinese": "为什么这些誓言都破碎了？",
						"french": "Pourquoi tous ces serments sont-ils brisés ?",
						"spanish": "¿Por qué todos estos juramentos están rotos?",
						"vietnamese": "Tại sao tất cả những lời thề này đều bị phá vỡ?",
						"thai": "ทำไมคำสาบานเหล่านี้ถึงถูกทำลายไปหมด?",
						"hindi": "ये सारी प्रतिज्ञाएँ क्यों टूट गईं?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이 문양. 전에 본 적이 있어.",
						"english": "...This emblem. I've seen it before.",
						"japanese": "…この紋様。以前見たことがある。",
						"chinese": "…这个图案。我以前见过。",
						"french": "...Cet emblème. Je l'ai déjà vu.",
						"spanish": "...Este emblema. Lo he visto antes.",
						"vietnamese": "...Biểu tượng này. Tôi từng thấy nó rồi.",
						"thai": "...สัญลักษณ์นี้ ฉันเคยเห็นมันมาก่อน",
						"hindi": "...यह प्रतीक। मैंने इसे पहले देखा है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저것은… 맹세를 깨뜨린 자의 표식.",
						"english": "That is... the mark of a broken vow.",
						"japanese": "あれは… 誓いを破りし者の証。",
						"chinese": "那是… 违誓者的印记。",
						"french": "C'est... la marque de celui qui a brisé son serment.",
						"spanish": "Esa es... la marca del que rompió su juramento.",
						"vietnamese": "Đó là… dấu vết của kẻ bội thề.",
						"thai": "นั่นคือ... ตราของผู้ที่ผิดคำสาบาน",
						"hindi": "वह है... शपथ तोड़ने वाले का निशान।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다. 얼음 동굴의 주인이었다.",
						"english": "A colossal shadow appeared. It was the master of the ice cave.",
						"japanese": "巨大な影が現れた。氷の洞窟の主だった。",
						"chinese": "一个巨大的身影出现了。它是冰洞的主人。",
						"french": "Une ombre colossale apparut. C'était le maître de la grotte de glace.",
						"spanish": "Una sombra colosal apareció. Era el amo de la cueva de hielo.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Đó là chủ nhân của hang động băng.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น มันคือเจ้าแห่งถ้ำน้ำแข็ง",
						"hindi": "एक विशाल छाया प्रकट हुई। वह बर्फ की गुफा का मालिक था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "깨어진 맹세의 무게를 감당할 수 있겠나?",
						"english": "Can you bear the weight of a broken vow?",
						"japanese": "破られた誓いの重さに耐えられるか？",
						"chinese": "你能承受违誓之重吗？",
						"french": "Peux-tu supporter le poids d'un serment brisé ?",
						"spanish": "¿Puedes soportar el peso de un juramento roto?",
						"vietnamese": "Ngươi có chịu nổi gánh nặng của lời thề đã vỡ không?",
						"thai": "เจ้าจะทนแบกรับน้ำหนักของคำสาบานที่แตกหักได้หรือไม่?",
						"hindi": "क्या तुम टूटी हुई शपथ का बोझ उठा सकते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸몄나!",
						"english": "Did you orchestrate all this!",
						"japanese": "お前が全てを仕組んだのか！",
						"chinese": "这一切都是你策划的吗！",
						"french": "C'est toi qui as orchestré tout ça !",
						"spanish": "¡¿Tú orquestaste todo esto?!",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao!",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ!",
						"hindi": "क्या तुमने यह सब रचा है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "후후… 부질없는 저항. 깨어진 맹세는 사라지지 않아. …새로운 이름이, 곧 새겨질 뿐.",
						"english": "Hmph... Futile resistance. A broken vow never disappears. ...Only a new name will soon be etched.",
						"japanese": "フフ… 無駄な抵抗だ。破られた誓いは消えぬ。…新たな名が、刻まれるだけだ。",
						"chinese": "哼… 徒劳的抵抗。破碎的誓言不会消失。…只是一个新的名字，很快就会被刻上。",
						"french": "Hmph... Résistance futile. Un serment brisé ne disparaît jamais. ...Seul un nouveau nom sera bientôt gravé.",
						"spanish": "Hmph... Resistencia inútil. Un juramento roto nunca desaparece. ...Solo un nuevo nombre será grabado pronto.",
						"vietnamese": "Hừm... Chống cự vô ích. Lời thề đã vỡ sẽ không biến mất. ...Chỉ là một cái tên mới, sẽ sớm được khắc lên thôi.",
						"thai": "ฮึ่ม... การต่อต้านที่ไร้ประโยชน์ คำสาบานที่แตกหักไม่มีวันหายไป ...เพียงแค่ชื่อใหม่จะถูกจารึกเท่านั้น",
						"hindi": "हम्फ... व्यर्थ प्रतिरोध। एक टूटी हुई शपथ कभी नहीं मिटती। ...बस एक नया नाम, जल्द ही अंकित किया जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이 모든 것이, 그저 시작이었나.",
						"english": "...Was all this, merely the beginning?",
						"japanese": "…この全てが、ただの始まりだったのか。",
						"chinese": "…这一切，都只是开始吗？",
						"french": "...Tout cela n'était-il que le début ?",
						"spanish": "...¿Todo esto, fue solo el principio?",
						"vietnamese": "...Tất cả những điều này, chỉ là khởi đầu thôi sao?",
						"thai": "…ทั้งหมดนี้เป็นเพียงจุดเริ่มต้นเท่านั้นหรือ",
						"hindi": "...क्या यह सब, महज़ शुरुआत थी?"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누군가 깨뜨린 맹세가 만들어낸 괴물이었다. 이바르는 홀로, 또 다른 진실을 예감했다.",
						"english": "It was a monster born from someone's broken vow. Ivar, alone, sensed another truth.",
						"japanese": "誰かが破った誓いが作り出した怪物だった。イヴァルは一人、また別の真実を予感した。",
						"chinese": "那是一个由某人破碎誓言所创造的怪物。伊瓦尔独自一人，预感到了另一个真相。",
						"french": "C'était un monstre né du serment brisé de quelqu'un. Ivar, seul, pressentait une autre vérité.",
						"spanish": "Era un monstruo nacido del juramento roto de alguien. Ivar, solo, presentía otra verdad.",
						"vietnamese": "Đó là một con quái vật được tạo ra từ lời thề bị phá vỡ của ai đó. Ivar, một mình, đã linh cảm một sự thật khác.",
						"thai": "มันเป็นสัตว์ประหลาดที่เกิดจากคำสาบานที่ถูกใครบางคนทำลาย ไอบาร์คนเดียว สัมผัสได้ถึงความจริงอีกอย่าง",
						"hindi": "यह किसी की टूटी हुई शपथ से पैदा हुआ राक्षस था। इवार ने अकेले ही, एक और सच्चाई का अनुमान लगाया।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "강함의 끝은 결국 허무뿐. 너희의 맹세도 언젠가 깨지리라.",
						"english": "The peak of strength is but emptiness. Your vows too shall one day shatter.",
						"japanese": "強さの果ては虚無のみ。お前たちの誓いも、いつか砕け散るだろう。",
						"chinese": "力量的尽头终是虚无。你们的誓言，也终将破碎。",
						"french": "Au bout de la force, il n'y a que le vide. Vos serments aussi se briseront un jour.",
						"spanish": "El culmen de la fuerza es solo vacío. Vuestros juramentos también se romperán algún día.",
						"vietnamese": "Đỉnh cao của sức mạnh cuối cùng chỉ là hư vô. Lời thề của các ngươi rồi cũng sẽ tan vỡ.",
						"thai": "จุดสูงสุดของพละกำลังคือความว่างเปล่าเท่านั้น คำสาบานของพวกเจ้าก็ย่อมแตกสลายในสักวัน",
						"hindi": "शक्ति का अंत केवल शून्य है। तुम्हारी शपथ भी कभी टूट जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…아직 끝나지 않았다. 이바르의 이름은, 배신으로 기록되지 않는다!",
						"english": "...It's not over yet. Ivar's name will not be etched in betrayal!",
						"japanese": "…まだ終わっていない。イヴァルの名は、裏切りとして記されぬ！",
						"chinese": "…尚未结束。伊瓦尔之名，绝不会被记作背叛！",
						"french": "...Ce n'est pas encore fini. Le nom d'Ivar ne sera pas gravé dans la trahison !",
						"spanish": "...Aún no ha terminado. ¡El nombre de Ivar no será registrado como traición!",
						"vietnamese": "...Vẫn chưa kết thúc. Tên của Ivar sẽ không bị ghi vào sự phản bội!",
						"thai": "...ยังไม่จบสิ้น ชื่อของไอบาร์ จะไม่ถูกจารึกด้วยการทรยศ!",
						"hindi": "...अभी खत्म नहीं हुआ है। इवर का नाम विश्वासघात के रूप में दर्ज नहीं होगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "푸른 핵이 격렬하게 고동쳤다. 균열이 사방으로 번졌다.",
						"english": "The blue core pulsed violently. Cracks spread in all directions.",
						"japanese": "青い核が激しく鼓動した。亀裂があらゆる方向に広がった。",
						"chinese": "蓝色核心剧烈跳动。裂缝向四面八方蔓延。",
						"french": "Le cœur bleu pulsa violemment. Des fissures se propagèrent dans toutes les directions.",
						"spanish": "El núcleo azul latió violentamente. Las grietas se extendieron en todas direcciones.",
						"vietnamese": "Lõi xanh đập dữ dội. Các vết nứt lan ra khắp nơi.",
						"thai": "แกนสีน้ำเงินเต้นระรัว รอยร้าวแพร่กระจายไปทุกทิศทาง",
						"hindi": "नीला कोर ज़ोर से धड़क उठा। दरारें चारों दिशाओं में फैल गईं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실은 언제나 고통스럽지. 특히 네가 믿던 영웅의 민낯은.",
						"english": "The truth is always painful. Especially the true face of the hero you believed in.",
						"japanese": "真実は常に苦痛だ。特に、お前が信じていた英雄の素顔は。",
						"chinese": "真相总是痛苦的。尤其是你所信仰的英雄的真面目。",
						"french": "La vérité est toujours douloureuse. Surtout le vrai visage du héros en qui tu croyais.",
						"spanish": "La verdad siempre es dolorosa. Especialmente la verdadera cara del héroe en quien creías.",
						"vietnamese": "Sự thật luôn đau đớn. Đặc biệt là bộ mặt thật của người hùng mà ngươi tin tưởng.",
						"thai": "ความจริงมักจะเจ็บปวดเสมอ โดยเฉพาะโฉมหน้าที่แท้จริงของวีรบุรุษที่เจ้าเคยศรัทธา",
						"hindi": "सच्चाई हमेशा दर्दनाक होती है। खासकर उस नायक का असली चेहरा जिस पर तुम भरोसा करते थे।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "닥쳐라! 내 손으로 이 굴레를 끊어내겠다!",
						"english": "Silence! I will break these shackles with my own hands!",
						"japanese": "黙れ！ この枷は俺の手で断ち切る！",
						"chinese": "住口！ 我会亲手斩断这些束缚！",
						"french": "Silence ! Je briserai ces chaînes de mes propres mains !",
						"spanish": "¡Cállate! ¡Romperé estas cadenas con mis propias manos!",
						"vietnamese": "Im đi! Ta sẽ tự tay phá vỡ xiềng xích này!",
						"thai": "เงียบซะ! ข้าจะทำลายพันธนาการนี้ด้วยมือของข้าเอง!",
						"hindi": "चुप रहो! मैं अपने हाथों से इन बेड़ियों को तोड़ दूंगा!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 동굴, 수백 년 맹세가 벽에 새겨졌다.",
			"이름과, 그 옆에 선명한 배신의 기록.",
			"이바르는 그 속에서, 잊고 싶었던 이름을 마주한다.",
			"강함의 끝을 쫓던 자에게 찾아온, 가장 잔인한 진실."
		],
		"english": [
			"Ice Cave, centuries-old vows etched on the walls.",
			"A name, and next to it, a vivid record of betrayal.",
			"Within it, Ivarr faces the name he wished to forget.",
			"The most cruel truth, revealed to one who pursued the pinnacle of strength."
		],
		"japanese": [
			"氷の洞窟、数百年の誓いが壁に刻まれていた。",
			"名と、その傍らに鮮明な裏切りの記録。",
			"イヴァルはその中で、忘れたかった名と向き合う。",
			"強さの果てを追い求めた者に訪れた、最も残酷な真実。"
		],
		"chinese": [
			"冰之洞窟，百年誓言刻于墙壁。",
			"姓名，以及旁边清晰的背叛记录。",
			"伊瓦尔在其中，面对着他想遗忘的名字。",
			"追逐力量极致之人所面临的最残酷真相。"
		],
		"french": [
			"Grotte de glace, des siècles de serments gravés dans les murs.",
			"Un nom, et à côté, le vif souvenir d'une trahison.",
			"Là-dedans, Ivarr fait face au nom qu'il souhaitait oublier.",
			"La vérité la plus cruelle, révélée à celui qui poursuivait l'apogée de la force."
		],
		"spanish": [
			"Cueva de Hielo, juramentos centenarios grabados en las paredes.",
			"Un nombre, y junto a él, un vívido registro de traición.",
			"En su interior, Ivarr se enfrenta al nombre que deseaba olvidar.",
			"La verdad más cruel, que encontró a quien perseguía el límite de la fuerza."
		],
		"vietnamese": [
			"Hang băng, lời thề trăm năm khắc trên vách đá.",
			"Một cái tên, và bên cạnh là ghi chép rõ ràng về sự phản bội.",
			"Trong đó, Ivarr đối mặt với cái tên anh ta muốn quên.",
			"Sự thật tàn khốc nhất, đến với kẻ theo đuổi tận cùng sức mạnh."
		],
		"thai": [
			"ถ้ำน้ำแข็ง คำสาบานนับร้อยปีสลักอยู่บนผนัง",
			"ชื่อหนึ่ง กับบันทึกการทรยศที่ชัดเจนข้างๆ",
			"ในนั้น อิวาร์ต้องเผชิญหน้ากับชื่อที่เขาอยากลืม",
			"ความจริงอันโหดร้ายที่สุด ที่มาถึงผู้ที่แสวงหาจุดสูงสุดของความแข็งแกร่ง"
		],
		"hindi": [
			"बर्फ़ की गुफा, सदियों पुरानी कसमें दीवारों पर खुदी हुई थीं।",
			"एक नाम, और उसके बगल में, विश्वासघात का एक स्पष्ट रिकॉर्ड।",
			"उसमें, इवर उस नाम का सामना करता है जिसे वह भूलना चाहता था।",
			"सबसे क्रूर सत्य, जो शक्ति की पराकाष्ठा का पीछा करने वाले को मिला।"
		]
	}
} as const;
