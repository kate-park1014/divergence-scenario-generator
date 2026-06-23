export const scenario_snowy_skalhorn_97_04 = {
	"scenario_id": "snowy_skalhorn_97_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
						"korean": "눈이 내리다 멈췄다. 모든 것이 얼어붙은 그림 같았다.",
						"english": "Snow fell, then stopped. Everything was like a frozen painting.",
						"japanese": "雪が降り、そして止んだ。全てが凍りついた絵のようだった。",
						"chinese": "雪落下了，又停了。一切都像一幅凝固的画。",
						"french": "La neige tomba, puis s'arrêta. Tout était comme un tableau figé.",
						"spanish": "Nevó y luego paró. Todo era como una pintura congelada.",
						"vietnamese": "Tuyết rơi rồi tạnh. Mọi thứ như một bức tranh đóng băng.",
						"thai": "หิมะตกแล้วหยุด ทุกสิ่งเหมือนภาพวาดที่แข็งตัว",
						"hindi": "बर्फ़ गिरी, फिर रुक गई। सब कुछ एक जमी हुई तस्वीर जैसा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여긴… 시간이 멈춘 거야?",
						"english": "...Is... time stopped here?",
						"japanese": "…ここは…時間が止まっているのか？",
						"chinese": "……这里……时间停止了吗？",
						"french": "...Est-ce que... le temps s'est arrêté ici ?",
						"spanish": "...Aquí... ¿el tiempo se detuvo?",
						"vietnamese": "...Nơi này... thời gian đã ngừng lại sao?",
						"thai": "...ที่นี่...เวลาหยุดนิ่งหรือ?",
						"hindi": "...क्या... यहाँ समय रुक गया है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 여기는 영원한 안식처.",
						"english": "Yes. This is an eternal resting place.",
						"japanese": "そうだ。ここは永遠の安息の地。",
						"chinese": "是的。这里是永恒的安息之地。",
						"french": "Oui. C'est un lieu de repos éternel.",
						"spanish": "Sí. Este es un lugar de descanso eterno.",
						"vietnamese": "Đúng vậy. Đây là nơi an nghỉ vĩnh hằng.",
						"thai": "ใช่ ที่นี่คือที่พักผ่อนนิรันดร์",
						"hindi": "हाँ। यह एक शाश्वत विश्राम स्थल है।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "아무것도 변하지 않는 곳.",
						"english": "A place where nothing ever changes.",
						"japanese": "何も変わらない場所。",
						"chinese": "一个什么都不会改变的地方。",
						"french": "Un endroit où rien ne change jamais.",
						"spanish": "Un lugar donde nada cambia jamás.",
						"vietnamese": "Nơi không có gì thay đổi.",
						"thai": "สถานที่ที่ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "एक ऐसी जगह जहाँ कुछ भी नहीं बदलता।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그들은 뿔잔에 맹세했지.",
						"english": "They swore an oath to the Horned Chalice.",
						"japanese": "彼らは角杯に誓いを立てた。",
						"chinese": "他们向角杯宣誓了。",
						"french": "Ils ont prêté serment au calice cornu.",
						"spanish": "Juraron al Cáliz Cornudo.",
						"vietnamese": "Họ đã thề với Chiếc Sừng Thề.",
						"thai": "พวกเขาสาบานต่อจอกเขานั้น",
						"hindi": "उन्होंने श्रृंगी प्याले की शपथ ली।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세?",
						"english": "An oath?",
						"japanese": "誓い？",
						"chinese": "誓言？",
						"french": "Un serment ?",
						"spanish": "¿Un juramento?",
						"vietnamese": "Lời thề?",
						"thai": "คำสาบาน?",
						"hindi": "एक शपथ?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "영원히 축복받으리라… 약속했다.",
						"english": "Blessed forever... I promised.",
						"japanese": "永遠に祝福されん… 約束した。",
						"chinese": "永远蒙福… 我承诺过。",
						"french": "Béni pour l'éternité... J'ai promis.",
						"spanish": "Bendito para siempre... Lo prometí.",
						"vietnamese": "Được ban phước mãi mãi... Ta đã hứa.",
						"thai": "ได้รับพรชั่วนิรันดร์... ข้าสัญญาแล้ว",
						"hindi": "हमेशा के लिए धन्य हो… मैंने वादा किया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 모습 그대로, 영원히.",
						"english": "As you are, forever.",
						"japanese": "その姿のまま、永遠に。",
						"chinese": "保持原样，直到永远。",
						"french": "Tel que tu es, pour l'éternité.",
						"spanish": "Tal como eres, para siempre.",
						"vietnamese": "Với hình hài đó, mãi mãi.",
						"thai": "ในรูปกายนั้น ชั่วนิรันดร์",
						"hindi": "उसी रूप में, हमेशा के लिए।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "너희가 찾는 진실.",
						"english": "The truth you seek.",
						"japanese": "お前たちが探す真実。",
						"chinese": "你们所寻的真相。",
						"french": "La vérité que vous cherchez.",
						"spanish": "La verdad que buscáis.",
						"vietnamese": "Sự thật các ngươi tìm.",
						"thai": "ความจริงที่พวกเจ้าตามหา",
						"hindi": "वह सत्य जिसे तुम खोजते हो।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 뭔데.",
						"english": "What is it?",
						"japanese": "それは何だ。",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Nó là gì?",
						"thai": "มันคืออะไร",
						"hindi": "वह क्या है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "뿔잔의 기원… 그것은 욕망이었다.",
						"english": "The origin of the Horned Chalice... it was desire.",
						"japanese": "角杯の起源… それは欲望だった。",
						"chinese": "角杯的起源… 那是欲望。",
						"french": "L'origine du Calice Cornu... c'était le désir.",
						"spanish": "El origen del Cáliz Cornudo... fue el deseo.",
						"vietnamese": "Nguồn gốc của Chiếc Ly Sừng... đó là dục vọng.",
						"thai": "ต้นกำเนิดของจอกเขานั้น... คือความปรารถนา",
						"hindi": "शृंग कप का मूल… वह लालसा थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영원히 살고 싶은… 인간의.",
						"english": "Humanity's... to live forever.",
						"japanese": "永遠に生きたい… 人間の。",
						"chinese": "人类的… 永生之欲。",
						"french": "Celui de l'homme... de vivre éternellement.",
						"spanish": "El de la humanidad... de vivir para siempre.",
						"vietnamese": "Của con người... muốn sống mãi.",
						"thai": "ของมนุษย์... ที่ต้องการมีชีวิตนิรันดร์",
						"hindi": "मनुष्य की… हमेशा जीने की।"
					},
					"speaker": "hild"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
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
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "맹세는 대가였다.",
						"english": "The oath was the price.",
						"japanese": "誓いは代償だった。",
						"chinese": "誓言就是代价。",
						"french": "Le serment était le prix.",
						"spanish": "El juramento fue el precio.",
						"vietnamese": "Lời thề là cái giá.",
						"thai": "คำสาบานคือราคา",
						"hindi": "शपथ ही कीमत थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대가? 무슨.",
						"english": "Price? What kind?",
						"japanese": "代償？何の。",
						"chinese": "代价？什么代价？",
						"french": "Prix ? Quel genre ?",
						"spanish": "¿Precio? ¿Qué tipo?",
						"vietnamese": "Giá? Giá gì?",
						"thai": "ราคา? ราคาอะไร",
						"hindi": "कीमत? कैसी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "뿔잔은 영원을 주었다. 육체는 박제하고, 영혼은… 축제의 일부로.",
						"english": "The Horned Chalice granted eternity. The body preserved, the soul... part of the festival.",
						"japanese": "角杯は永遠を与えた。肉体は剥製に、魂は… 祭りの一部として。",
						"chinese": "角杯赐予了永恒。肉体被保存，灵魂… 则成为庆典的一部分。",
						"french": "Le Calice Cornu a offert l'éternité. Le corps embaumé, l'âme... une partie de la fête.",
						"spanish": "El Cáliz Cornudo otorgó la eternidad. El cuerpo embalsamado, el alma... parte del festival.",
						"vietnamese": "Chiếc Ly Sừng ban sự vĩnh hằng. Thể xác được bảo quản, linh hồn... là một phần của lễ hội.",
						"thai": "จอกเขาได้มอบนิรันดร์ ร่างกายถูกเก็บรักษาไว้ วิญญาณ... เป็นส่วนหนึ่งของเทศกาล",
						"hindi": "शृंग कप ने अमरत्व दिया। शरीर को संरक्षित किया, आत्मा को… उत्सव का हिस्सा बनाया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이곳은 거대한 박물관. 망자들의 축제.",
						"english": "This place is a grand museum. A festival of the dead.",
						"japanese": "ここは巨大な博物館。亡者たちの祭り。",
						"chinese": "这里是一座巨大的博物馆。亡者们的庆典。",
						"french": "Cet endroit est un grand musée. Un festival des morts.",
						"spanish": "Este lugar es un gran museo. Un festival de los muertos.",
						"vietnamese": "Nơi đây là một bảo tàng vĩ đại. Một lễ hội của người chết.",
						"thai": "ที่นี่คือพิพิธภัณฑ์ขนาดใหญ่ งานเทศกาลของผู้ตาย",
						"hindi": "यह जगह एक विशाल संग्रहालय है। मृतकों का उत्सव।"
					},
					"speaker": "hild"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "감히… 이 신성한 박물관을 더럽히는가.",
						"english": "How dare you defile this sacred museum?",
						"japanese": "よくも… この神聖な博物館を汚すか。",
						"chinese": "你竟敢… 玷污这神圣的博物馆？",
						"french": "Comment oses-tu… profaner ce musée sacré ?",
						"spanish": "¿Cómo te atreves… a profanar este museo sagrado?",
						"vietnamese": "Dám… làm ô uế bảo tàng linh thiêng này sao.",
						"thai": "บังอาจ… มาแปดเปื้อนพิพิธภัณฑ์อันศักดิ์สิทธิ์แห่งนี้หรือ",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस पवित्र संग्रहालय को अपवित्र करने की?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거짓된 안식은 끝내야 해.",
						"english": "This false peace must end.",
						"japanese": "偽りの安息は終わらせねば。",
						"chinese": "虚假的安宁… 必须终结。",
						"french": "Ce faux repos doit cesser.",
						"spanish": "Este falso descanso debe terminar.",
						"vietnamese": "An nghỉ giả dối này phải kết thúc.",
						"thai": "ความสงบจอมปลอมนี้ต้องสิ้นสุดลง",
						"hindi": "इस झूठी शांति का अंत होना चाहिए।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 알게 될 진실은… 너를 영원히 멈출 것이다.",
						"english": "The truth you'll discover… will stop you forever.",
						"japanese": "お前が知る真実は… 永遠にお前を止めるだろう。",
						"chinese": "你将知晓的真相… 会永远阻止你。",
						"french": "La vérité que tu vas découvrir… t'arrêtera pour toujours.",
						"spanish": "La verdad que descubrirás… te detendrá para siempre.",
						"vietnamese": "Sự thật ngươi sẽ biết… sẽ chặn ngươi vĩnh viễn.",
						"thai": "ความจริงที่เจ้าจะได้รู้… จะหยุดเจ้าไปตลอดกาล",
						"hindi": "जो सच तुम जानोगे… वह तुम्हें हमेशा के लिए रोक देगा।"
					}
				},
				{
					"speaker": "hild",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "맹세는… 파괴할 수 없어. 너도 곧…",
						"english": "The vow… cannot be broken. You, too, soon…",
						"japanese": "誓いは… 破壊できない。お前もじきに…",
						"chinese": "誓言… 无法被摧毁。你很快也将…",
						"french": "Le serment… ne peut être brisé. Toi aussi, bientôt…",
						"spanish": "El juramento… no puede romperse. Tú también, pronto…",
						"vietnamese": "Lời thề… không thể bị phá hủy. Ngươi cũng sẽ sớm…",
						"thai": "คำสาบาน… ทำลายไม่ได้ เจ้าเองก็เช่นกัน… ในไม่ช้า",
						"hindi": "शपथ… तोड़ी नहीं जा सकती। तुम भी जल्द…"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 맹세는… 영원히…",
						"english": "Ugh… The vow… forever…",
						"japanese": "くっ… 誓いは… 永遠に…",
						"chinese": "呃… 誓言… 永恒…",
						"french": "Ugh… Le serment… éternellement…",
						"spanish": "Ugh… El juramento… para siempre…",
						"vietnamese": "Khụ… Lời thề… vĩnh viễn…",
						"thai": "อึก… คำสาบาน… ชั่วนิรันดร์…",
						"hindi": "उफ़… शपथ… हमेशा के लिए…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "진실은 도망가지 않아.",
						"english": "Truth does not escape.",
						"japanese": "真実は逃げない。",
						"chinese": "真相不会逃离。",
						"french": "La vérité ne s'échappe pas.",
						"spanish": "La verdad no escapa.",
						"vietnamese": "Sự thật không trốn thoát.",
						"thai": "ความจริงไม่หนีหาย",
						"hindi": "सच नहीं भागता।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "네가 맹세의 조각을 보았구나.",
						"english": "So you've seen fragments of the vow.",
						"japanese": "お前は誓いの破片を見たな。",
						"chinese": "你看到了誓言的碎片。",
						"french": "Tu as vu les fragments du serment.",
						"spanish": "Has visto fragmentos del juramento.",
						"vietnamese": "Ngươi đã thấy mảnh vỡ của lời thề.",
						"thai": "เจ้าเห็นชิ้นส่วนของคำสาบานแล้วสินะ",
						"hindi": "तुमने शपथ के टुकड़े देख लिए हैं।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이제 너도… 뿔잔의 일부가 될 거야.",
						"english": "Now you, too… shall become part of the Horned Chalice.",
						"japanese": "お前も今や… 角杯の一部となるだろう。",
						"chinese": "现在你也将… 成为角杯的一部分。",
						"french": "Maintenant toi aussi… tu feras partie du Calice Cornu.",
						"spanish": "Ahora tú también… serás parte del Cáliz Cornudo.",
						"vietnamese": "Giờ đây ngươi cũng… sẽ trở thành một phần của Sừng Rượu.",
						"thai": "ตอนนี้เจ้าเองก็… จะเป็นส่วนหนึ่งของจอกเขาสัตว์",
						"hindi": "अब तुम भी… हॉर्नड चालिस का हिस्सा बनोगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정지했던 시간이 섬뜩하게 흐르기 시작했다. 뿔잔의 저주는 아직 끝나지 않았다.",
						"english": "The frozen time eerily began to flow. The curse of the Horned Chalice is not yet over.",
						"japanese": "止まっていた時間が不気味に流れ始めた。角杯の呪いはまだ終わっていない。",
						"chinese": "静止的时间诡异地流动起来。角杯的诅咒尚未结束。",
						"french": "Le temps figé s'est remis à s'écouler étrangement. La malédiction du Calice Cornu n'est pas encore terminée.",
						"spanish": "El tiempo detenido comenzó a fluir de manera espeluznante. La maldición del Cáliz Cornudo aún no ha terminado.",
						"vietnamese": "Thời gian đã ngừng lại bắt đầu trôi đi một cách đáng sợ. Lời nguyền của Sừng Rượu vẫn chưa kết thúc.",
						"thai": "เวลาที่หยุดนิ่งเริ่มไหลเวียนอย่างน่าขนลุก คำสาปของจอกเขาสัตว์ยังไม่จบลง",
						"hindi": "रुका हुआ समय भयावह रूप से बहने लगा। हॉर्नड चालिस का अभिशाप अभी खत्म नहीं हुआ है।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자. 영원히 춤춰라.",
						"english": "Fool. Dance forever.",
						"japanese": "愚か者め。永遠に踊れ。",
						"chinese": "愚蠢之徒。永远起舞吧。",
						"french": "Imbécile. Danse éternellement.",
						"spanish": "Necio. Baila para siempre.",
						"vietnamese": "Kẻ ngốc. Nhảy múa vĩnh viễn đi.",
						"thai": "คนโง่เง่า จงเต้นรำไปชั่วนิรันดร์",
						"hindi": "मूर्ख। हमेशा के लिए नाचो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 시간 속에서, 또 한 명의 망자가 축제의 일부가 되었다.",
						"english": "In frozen time, another lost soul became part of the festival.",
						"japanese": "凍てついた時間の中で、また一人の亡者が祭りの一部となった。",
						"chinese": "在冻结的时间里，又一个亡者成为了庆典的一部分。",
						"french": "Dans le temps figé, une autre âme perdue est devenue partie du festival.",
						"spanish": "En el tiempo congelado, otra alma perdida se convirtió en parte del festival.",
						"vietnamese": "Trong thời gian đóng băng, một linh hồn lạc lối khác đã trở thành một phần của lễ hội.",
						"thai": "ในห้วงเวลาที่หยุดนิ่ง อีกหนึ่งวิญญาณที่หลงทางได้กลายเป็นส่วนหนึ่งของเทศกาล",
						"hindi": "जमे हुए समय में, एक और खोई हुई आत्मा उत्सव का हिस्सा बन गई।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간이 멈춘 세계.",
			"과거의 망령이 춤추는 곳.",
			"힐드는 그 안에서 모든 것을 지켰다.",
			"그리고 이제, 뿔잔의 맹세가 깨어난다."
		],
		"english": [
			"A world where time stands still.",
			"Where specters of the past dance.",
			"Hilde protected everything within it.",
			"And now, the Horned Chalice's oath awakens."
		],
		"japanese": [
			"時が止まった世界。",
			"過去の亡霊が舞う場所。",
			"ヒルデはその中で全てを守り抜いた。",
			"そして今、角杯の誓いが目覚める。"
		],
		"chinese": [
			"时间静止的世界。",
			"过去亡灵起舞之地。",
			"希尔德在其中守护了一切。",
			"而今，角杯的誓言苏醒了。"
		],
		"french": [
			"Un monde où le temps s'est arrêté.",
			"Là où les spectres du passé dansent.",
			"Hilde y protégeait tout.",
			"Et maintenant, le serment du calice cornu s'éveille."
		],
		"spanish": [
			"Un mundo donde el tiempo se detuvo.",
			"Donde los espectros del pasado danzan.",
			"Hilde lo protegía todo dentro.",
			"Y ahora, el juramento del Cáliz Cornudo despierta."
		],
		"vietnamese": [
			"Một thế giới nơi thời gian ngừng lại.",
			"Nơi những bóng ma quá khứ khiêu vũ.",
			"Hilde đã bảo vệ mọi thứ bên trong.",
			"Và giờ đây, lời thề của Chiếc Sừng Thề đã thức tỉnh."
		],
		"thai": [
			"โลกที่กาลเวลาหยุดนิ่ง",
			"ที่ซึ่งเงาอดีตเต้นรำ",
			"ฮิลเดอร์ปกป้องทุกสิ่งในนั้น",
			"และบัดนี้ คำสาบานแห่งจอกเขาก็ปลุกขึ้น"
		],
		"hindi": [
			"एक ऐसी दुनिया जहाँ समय ठहर गया है।",
			"जहाँ अतीत के प्रेत नाचते हैं।",
			"हिल्डे ने उसके भीतर सब कुछ संरक्षित रखा।",
			"और अब, श्रृंगी प्याले की शपथ जागृत होती है।"
		]
	}
} as const;
