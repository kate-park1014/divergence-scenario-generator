export const scenario_snowy_anya_13_02 = {
	"scenario_id": "snowy_anya_13_02",
	"order": 2,
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 눈보라가 휘몰아치는 얼어붙은 유적. 고대의 흔적이 곳곳에 박혀 있었다.",
						"english": "Frozen ruins where a cold blizzard rages. Ancient traces were embedded everywhere.",
						"japanese": "冷たい吹雪が吹き荒れる凍てついた遺跡。至る所に古代の痕跡が残されていた。",
						"chinese": "冰冷的暴风雪肆虐的冰冻遗迹。古老的痕迹随处可见。",
						"french": "Ruines gelées où une froide tempête de neige fait rage. Des traces antiques étaient incrustées partout.",
						"spanish": "Ruinas heladas donde una fría ventisca ruge. Antiguas huellas estaban incrustadas por todas partes.",
						"vietnamese": "Di tích băng giá nơi bão tuyết lạnh giá hoành hành. Những dấu vết cổ xưa được khắc sâu khắp nơi.",
						"thai": "ซากปรักหักพังอันเยือกแข็งที่พายุหิมะอันหนาวเหน็บโหมกระหน่ำ ร่องรอยโบราณฝังแน่นอยู่ทุกหนแห่ง",
						"hindi": "जमे हुए खंडहर जहाँ बर्फीला तूफान raging है। प्राचीन निशान हर जगह जड़े हुए थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳은… 바이킹들의 정착지였을까요.",
						"english": "Could this have been... a Viking settlement?",
						"japanese": "ここは…バイキングたちの定住地だったのでしょうか。",
						"chinese": "这里是……维京人的定居点吗？",
						"french": "Serait-ce... un campement viking ?",
						"spanish": "¿Pudo haber sido esto... un asentamiento vikingo?",
						"vietnamese": "Đây có thể là... một khu định cư của người Viking?",
						"thai": "ที่นี่... เคยเป็นถิ่นฐานของชาวไวกิ้งหรือเปล่า",
						"hindi": "क्या यह... एक वाइकिंग बस्ती रही होगी?"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기, 부서진 배 조각들이 보여.",
						"english": "Look, broken ship fragments.",
						"japanese": "見て、壊れた船の破片が。",
						"chinese": "看，这里有破碎的船只碎片。",
						"french": "Regarde, des fragments de navire brisés.",
						"spanish": "Mira, fragmentos de barcos rotos.",
						"vietnamese": "Nhìn kìa, những mảnh thuyền vỡ.",
						"thai": "นี่ไง ชิ้นส่วนเรือที่แตกหัก",
						"hindi": "देखो, टूटे हुए जहाज के टुकड़े।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 유물들도… 과거의 이야기가 담겨 있겠죠.",
						"english": "And these old relics... they must hold stories from the past.",
						"japanese": "古い遺物も…過去の物語が込められているのでしょう。",
						"chinese": "这些古老的文物……也一定承载着过去的故事吧。",
						"french": "Et ces vieilles reliques... elles doivent contenir des histoires du passé.",
						"spanish": "Y estas viejas reliquias... deben contener historias del pasado.",
						"vietnamese": "Và những di vật cổ xưa này... chắc hẳn chứa đựng những câu chuyện từ quá khứ.",
						"thai": "วัตถุโบราณเหล่านี้... คงจะเก็บเรื่องราวในอดีตไว้ด้วย",
						"hindi": "और ये पुरानी कलाकृतियाँ... उनमें अतीत की कहानियाँ होंगी।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬 문자들… 해석하기 쉽지 않네요.",
						"english": "These runes... they're not easy to decipher.",
						"japanese": "このルーン文字…解読するのは簡単じゃないですね。",
						"chinese": "这些符文……可不好解读啊。",
						"french": "Ces runes... elles ne sont pas faciles à déchiffrer.",
						"spanish": "Estas runas... no son fáciles de descifrar.",
						"vietnamese": "Những ký tự rune này... không dễ giải mã chút nào.",
						"thai": "อักษรรูนเหล่านี้... ถอดความไม่ง่ายเลย",
						"hindi": "ये रूण अक्षर... इन्हें समझना आसान नहीं है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "안야의 빛이 더 강렬해진 것 같아.",
						"english": "Anya's light seems to have grown stronger.",
						"japanese": "アニャの光が、より強くなったようだ。",
						"chinese": "安雅的光芒似乎变得更强烈了。",
						"french": "La lumière d'Anya semble s'être intensifiée.",
						"spanish": "La luz de Anya parece haberse vuelto más intensa.",
						"vietnamese": "Ánh sáng của Anya dường như đã mạnh hơn.",
						"thai": "แสงของอันยาดูเหมือนจะเข้มข้นขึ้น",
						"hindi": "अन्या की रोशनी और तेज़ हो गई लगती है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "빛이 저 깎아지른 절벽 끝을 향하고 있어요. 무언가 중요한 단서가 있을지도…",
						"english": "The light points towards the edge of that steep cliff. There might be an important clue there…",
						"japanese": "光が、あの切り立った崖の端を指している。何か重要な手がかりがあるかも…",
						"chinese": "光指向那陡峭悬崖的尽头。那里可能有重要线索…",
						"french": "La lumière pointe vers le bord de cette falaise abrupte. Il y a peut-être un indice important là-bas…",
						"spanish": "La luz apunta hacia el borde de ese acantilado escarpado. Podría haber una pista importante allí…",
						"vietnamese": "Ánh sáng đang hướng về phía mép vách đá dựng đứng kia. Có thể có một manh mối quan trọng ở đó…",
						"thai": "แสงส่องไปที่ปลายหน้าผาชันนั้น อาจมีเบาะแสสำคัญอยู่ที่นั่น…",
						"hindi": "प्रकाश उस खड़ी चट्टान के किनारे की ओर इशारा कर रहा है। वहाँ कोई महत्वपूर्ण सुराग हो सकता है…"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 집터의 잔해 속에서 낡은 장난감이 발견되었다.",
						"english": "An old toy was found amidst the ruins of a frozen homestead.",
						"japanese": "凍りついた家屋の残骸の中から、古いおもちゃが発見された。",
						"chinese": "在冰冻的宅基地废墟中发现了一个旧玩具。",
						"french": "Un vieux jouet a été découvert parmi les ruines d'une demeure gelée.",
						"spanish": "Un juguete viejo fue encontrado entre los escombros de una casa congelada.",
						"vietnamese": "Một món đồ chơi cũ được tìm thấy giữa đống đổ nát của một ngôi nhà đóng băng.",
						"thai": "พบของเล่นเก่าท่ามกลางซากปรักหักพังของบ้านที่ถูกแช่แข็ง",
						"hindi": "एक जमा हुए घर के खंडहरों के बीच एक पुराना खिलौना मिला।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이건… 어린아이의 것 같아요. 오래전에 버려진…",
						"english": "This… it seems to belong to a child. Abandoned long ago…",
						"japanese": "これは…子供のものみたい。ずっと昔に捨てられた…",
						"chinese": "这…好像是小孩子的。很久以前就被遗弃了…",
						"french": "C'est… cela semble appartenir à un enfant. Abandonné il y a longtemps…",
						"spanish": "Esto… parece de un niño. Abandonado hace mucho tiempo…",
						"vietnamese": "Cái này… có vẻ là của một đứa trẻ. Bị bỏ rơi từ rất lâu rồi…",
						"thai": "นี่… ดูเหมือนเป็นของเด็กคนหนึ่ง ถูกทิ้งร้างมานานแล้ว…",
						"hindi": "यह… किसी बच्चे का लगता है। बहुत पहले छोड़ दिया गया था…"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "왠지 모르게 슬픔이 느껴져.",
						"english": "For some reason, I feel a sense of sadness.",
						"japanese": "なぜだか、悲しみがこみ上げてくる。",
						"chinese": "不知为何，感到一阵悲伤。",
						"french": "Je ressens une tristesse inexplicable.",
						"spanish": "Por alguna razón, siento tristeza.",
						"vietnamese": "Không hiểu sao, tôi cảm thấy một nỗi buồn.",
						"thai": "ไม่รู้ทำไม ฉันรู้สึกเศร้า",
						"hindi": "किसी अज्ञात कारण से, मुझे उदासी महसूस हो रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "벽 너머로… 희미하게… 어린아이의 형상이….",
						"english": "Beyond the wall… faintly… the form of a child…",
						"japanese": "壁の向こうに…かすかに…子供の姿が…。",
						"chinese": "墙壁那边…隐约…一个孩子的身影…",
						"french": "Au-delà du mur… faiblement… la forme d'un enfant…",
						"spanish": "Más allá de la pared… débilmente… la figura de un niño…",
						"vietnamese": "Phía sau bức tường… lờ mờ… hình bóng một đứa trẻ…",
						"thai": "หลังกำแพง… แผ่วๆ… ร่างเด็กคนหนึ่ง…",
						"hindi": "दीवार के उस पार… धुंधला सा… एक बच्चे का आकार…"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…안야의 슬픔과 연결된 걸까요?",
						"english": "…Could it be connected to Anya's sorrow?",
						"japanese": "…アーニャの悲しみと繋がっているのだろうか？",
						"chinese": "…这和安雅的悲伤有关吗？",
						"french": "…Serait-ce lié à la tristesse d'Anya ?",
						"spanish": "…¿Podría estar conectado con la tristeza de Anya?",
						"vietnamese": "…Liệu có phải nó liên quan đến nỗi buồn của Anya?",
						"thai": "…มันเชื่อมโยงกับความเศร้าของอันยาหรือเปล่า?",
						"hindi": "…क्या यह अन्या के दुःख से जुड़ा हो सकता है?"
					},
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "유적의 끝이 보인다. 이제 돌아갈 수 없어.",
						"english": "The end of the ruins is in sight. There's no turning back now.",
						"japanese": "遺跡の終わりが見える。もう引き返せない。",
						"chinese": "遗迹的尽头就在眼前。现在无法回头了。",
						"french": "La fin des ruines est en vue. Il n'y a plus de retour possible.",
						"spanish": "El final de las ruinas está a la vista. Ya no hay vuelta atrás.",
						"vietnamese": "Điểm cuối của tàn tích đã hiện ra. Không thể quay lại được nữa.",
						"thai": "ปลายสุดของซากปรักหักพังปรากฏขึ้นแล้ว ไม่มีทางย้อนกลับได้อีก",
						"hindi": "खंडहरों का अंत दिख रहा है। अब वापस नहीं जा सकते।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "고대 문헌 조각에… '추위'와 '기다림'이라는 단어가 계속 나와요.",
						"english": "In fragments of ancient texts… the words 'cold' and 'waiting' keep appearing.",
						"japanese": "古代文献の断片に…『寒さ』と『待つ』という言葉が繰り返し出てくる。",
						"chinese": "在古代文献碎片中…'寒冷'和'等待'这两个词反复出现。",
						"french": "Dans les fragments d'anciens textes… les mots 'froid' et 'attente' n'arrêtent pas d'apparaître.",
						"spanish": "En fragmentos de textos antiguos… las palabras 'frío' y 'espera' no dejan de aparecer.",
						"vietnamese": "Trong các mảnh văn bản cổ… các từ 'lạnh' và 'chờ đợi' cứ liên tục xuất hiện.",
						"thai": "ในเศษซากเอกสารโบราณ… คำว่า 'ความหนาวเย็น' และ 'การรอคอย' ปรากฏขึ้นเรื่อยๆ",
						"hindi": "प्राचीन ग्रंथों के टुकड़ों में… 'ठंड' और 'इंतज़ार' शब्द बार-बार आ रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "무언가를 기다리다… 얼어붙어 버린 역사가 이곳에 잠들어 있는 것 같아요.",
						"english": "Waiting for something… it seems a history frozen in time slumbers here.",
						"japanese": "何かを待ち続け…凍りついてしまった歴史が、ここに眠っているようだ。",
						"chinese": "等待着什么…一段被冰封的历史似乎沉睡在这里。",
						"french": "Attendant quelque chose… il semble qu'une histoire figée dans le temps sommeille ici.",
						"spanish": "Esperando algo… parece que una historia congelada en el tiempo yace aquí.",
						"vietnamese": "Chờ đợi điều gì đó… dường như một lịch sử đã đóng băng đang ngủ yên tại đây.",
						"thai": "รอคอยบางสิ่ง… ดูเหมือนว่าประวัติศาสตร์ที่ถูกแช่แข็งได้หลับใหลอยู่ที่นี่",
						"hindi": "कुछ का इंतज़ार करते हुए… लगता है यहाँ एक जमी हुई इतिहास सो रहा है।"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "유적의 가장 깊은 곳. 정체 모를 존재가 앞길을 막아섰다.",
						"english": "The deepest part of the ruins. An unknown entity blocks the path forward.",
						"japanese": "遺跡の最深部。正体不明の存在が道を阻んだ。",
						"chinese": "遗迹最深处。一个不明身份的存在挡住了去路。",
						"french": "La partie la plus profonde des ruines. Une entité inconnue bloque le chemin.",
						"spanish": "La parte más profunda de las ruinas. Una entidad desconocida bloquea el camino.",
						"vietnamese": "Nơi sâu nhất của tàn tích. Một thực thể không rõ danh tính đã chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง สิ่งมีชีวิตที่ไม่รู้จักขวางทางข้างหน้า",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक अज्ञात सत्ता ने आगे का रास्ता रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "침입자들… 이곳의 평화를 방해하는군.",
						"english": "Intruders... disturbing the peace here.",
						"japanese": "侵入者たち… ここの平和を乱す者たちめ。",
						"chinese": "入侵者… 竟敢打扰此地的宁静。",
						"french": "Intrus... vous troublez la paix de ce lieu.",
						"spanish": "Intrusos... perturbando la paz de este lugar.",
						"vietnamese": "Kẻ xâm nhập... đang quấy rầy sự bình yên nơi đây.",
						"thai": "ผู้บุกรุก... กำลังรบกวนความสงบสุขของที่นี่",
						"hindi": "घुसपैठिए... यहाँ की शांति भंग कर रहे हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜. 우린 진실을 찾아야 해.",
						"english": "Move. We must find the truth.",
						"japanese": "退け。我々は真実を探さねばならない。",
						"chinese": "让开。我们必须找到真相。",
						"french": "Écartez-vous. Nous devons trouver la vérité.",
						"spanish": "Apártate. Debemos encontrar la verdad.",
						"vietnamese": "Tránh ra. Chúng tôi phải tìm ra sự thật.",
						"thai": "หลีกไป เราต้องค้นหาความจริง",
						"hindi": "हटो। हमें सच खोजना है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 존재도… 잊힌 역사의 일부인 것 같아요.",
						"english": "This being... also seems to be a part of forgotten history.",
						"japanese": "この存在も… 忘れられた歴史の一部なのでしょうか。",
						"chinese": "这个存在… 似乎也是被遗忘历史的一部分。",
						"french": "Cet être... semble aussi faire partie d'une histoire oubliée.",
						"spanish": "Esta entidad... también parece ser parte de una historia olvidada.",
						"vietnamese": "Thực thể này... dường như cũng là một phần của lịch sử bị lãng quên.",
						"thai": "สิ่งมีชีวิตนี้... ดูเหมือนจะเป็นส่วนหนึ่งของประวัติศาสตร์ที่ถูกลืม",
						"hindi": "यह प्राणी... भी भूली हुई कहानी का हिस्सा लगता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희는… 알지 못하는 진실에 발을 들였다.",
						"english": "You have... stepped into a truth you do not know.",
						"japanese": "お前たちは… 知らぬ真実へ足を踏み入れた。",
						"chinese": "你们… 踏入了未知的真相。",
						"french": "Vous avez... mis le pied dans une vérité que vous ignorez.",
						"spanish": "Han... pisado una verdad que desconocen.",
						"vietnamese": "Các ngươi... đã bước vào một sự thật mà các ngươi không biết.",
						"thai": "พวกเจ้า... ได้ย่างกรายเข้าสู่ความจริงที่พวกเจ้าไม่รู้จัก",
						"hindi": "तुम... एक ऐसे सच में कदम रख चुके हो जिसे तुम नहीं जानते।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… 또 다른 진실이… 깨어나겠군….",
						"english": "Ugh... So... another truth... will awaken...",
						"japanese": "くっ… 結局… また別の真実が… 目覚めるのか…。",
						"chinese": "咳… 终究… 另一个真相… 会苏醒吗…。",
						"french": "Argh... Alors... une autre vérité... va s'éveiller...",
						"spanish": "Uf... Al final... otra verdad... despertará...",
						"vietnamese": "Khục... Rốt cuộc... một sự thật khác... sẽ thức tỉnh...",
						"thai": "อึก... ในที่สุด... ความจริงอีกอย่าง... ก็จะตื่นขึ้นมา...",
						"hindi": "उफ़... आख़िरकार... एक और सच... जाग जाएगा...।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝인가…",
						"english": "Is this the end...?",
						"japanese": "終わりか…。",
						"chinese": "结束了吗…",
						"french": "C'est la fin...?",
						"spanish": "¿Es el fin...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "สิ้นสุดแล้วหรือ...",
						"hindi": "क्या यह अंत है...?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "어린아이의 장난감… 그 환영… 안야의 슬픔이 점점 더 깊이 느껴져요.",
						"english": "A child's toy... that illusion... I feel Anya's sorrow deepening.",
						"japanese": "子供のおもちゃ… その幻影… アンヤの悲しみがますます深く感じられます。",
						"chinese": "孩子的玩具… 那幻影… 我感觉安雅的悲伤越来越深了。",
						"french": "Un jouet d'enfant... cette illusion... Je ressens la tristesse d'Anya s'approfondir.",
						"spanish": "Un juguete de niño... esa ilusión... Siento que la pena de Anya se profundiza.",
						"vietnamese": "Đồ chơi trẻ con... ảo ảnh đó... Tôi cảm nhận được nỗi buồn của Anya ngày càng sâu sắc.",
						"thai": "ของเล่นของเด็ก... ภาพลวงตานั้น... ฉันรู้สึกถึงความโศกเศร้าของอันย่าที่ลึกซึ้งขึ้นเรื่อยๆ",
						"hindi": "एक बच्चे का खिलौना... वह भ्रम... मुझे अन्या का दुख गहराता महसूस हो रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스를 쓰러뜨렸지만, 유적의 비밀은 더욱 미궁 속으로 빠져들었다.",
						"english": "We defeated the mysterious boss, but the ruins' secrets plunged deeper into a labyrinth.",
						"japanese": "正体不明のボスを倒したが、遺跡の秘密はさらに迷宮へと深く沈んでいった。",
						"chinese": "击败了身份不明的首领，但遗迹的秘密却更加陷入迷宫之中。",
						"french": "Nous avons vaincu le boss mystérieux, mais les secrets des ruines se sont enfoncés davantage dans un labyrinthe.",
						"spanish": "Derrotamos al jefe misterioso, pero los secretos de las ruinas se adentraron aún más en un laberinto.",
						"vietnamese": "Chúng tôi đã đánh bại tên trùm bí ẩn, nhưng bí mật của di tích lại càng chìm sâu vào mê cung.",
						"thai": "เราเอาชนะบอสปริศนาได้แล้ว แต่ความลับของซากปรักหักพังก็ยิ่งจมดิ่งลงสู่เขาวงกต",
						"hindi": "हमने रहस्यमय बॉस को हरा दिया, लेकिन खंडहरों के रहस्य और गहरे भूलभुलैया में खो गए।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안야의 진정한 정체는 무엇일까. 아직 끝나지 않은 이야기였다.",
						"english": "What is Anya's true identity? The story was not over yet.",
						"japanese": "アンヤの真の正体は何なのだろうか。物語はまだ終わっていなかった。",
						"chinese": "安雅的真实身份究竟是什么？故事还远没有结束。",
						"french": "Quelle est la véritable identité d'Anya ? L'histoire n'était pas encore terminée.",
						"spanish": "Cuál es la verdadera identidad de Anya? La historia aún no había terminado.",
						"vietnamese": "Thân phận thật sự của Anya là gì? Câu chuyện vẫn chưa kết thúc.",
						"thai": "ตัวตนที่แท้จริงของอันย่าคืออะไร? เรื่องราวนี้ยังไม่จบลง",
						"hindi": "अन्या की असली पहचान क्या है? कहानी अभी खत्म नहीं हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 유적의 수호자는 탐험대를 가로막았다.",
						"english": "The guardian of the frozen ruins blocked the expedition.",
						"japanese": "凍てついた遺跡の守護者は、探検隊の行く手を阻んだ。",
						"chinese": "冰封遗迹的守护者阻挡了探险队。",
						"french": "Le gardien des ruines gelées a bloqué l'expédition.",
						"spanish": "El guardián de las ruinas congeladas detuvo a la expedición.",
						"vietnamese": "Người bảo vệ di tích đóng băng đã chặn đứng đoàn thám hiểm.",
						"thai": "ผู้พิทักษ์ซากปรักหักพังที่เยือกแข็งได้ขัดขวางคณะสำรวจ",
						"hindi": "जमी हुई खंडहरों के रखवाले ने अभियान को रोक दिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이곳의 비밀은… 너희가 알 수 없다.",
						"english": "The secrets of this place… you cannot know.",
						"japanese": "この地の秘密…お前たちには明かされぬ。",
						"chinese": "此地的秘密…非尔等能知。",
						"french": "Les secrets de ce lieu… vous ne les percerez jamais.",
						"spanish": "Los secretos de este lugar… nunca los conoceréis.",
						"vietnamese": "Bí mật nơi đây… các ngươi không thể biết.",
						"thai": "ความลับของที่นี่… พวกเจ้าไม่อาจล่วงรู้ได้",
						"hindi": "इस जगह के रहस्य… तुम नहीं जान सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 포기할 수 없어.",
						"english": "…I can't give up yet.",
						"japanese": "…まだ、諦められない。",
						"chinese": "…我还没法放弃。",
						"french": "…Je ne peux pas encore abandonner.",
						"spanish": "…Todavía no puedo rendirme.",
						"vietnamese": "…Ta vẫn chưa thể bỏ cuộc.",
						"thai": "…ข้ายังยอมแพ้ไม่ได้",
						"hindi": "…मैं अभी हार नहीं मान सकता।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 유적. 시간마저 멈춘 듯한 곳.",
			"안야의 빛이 이끄는 대로 발걸음을 옮길수록,",
			"잊힌 비극의 그림자가 더욱 선명하게 다가왔다.",
			"…그리고 그 한가운데, 어린아이의 슬픔이 얼어붙어 있었다."
		],
		"english": [
			"Frozen ruins. A place where even time seems to have stopped.",
			"As I followed Anya's light,",
			"the shadow of a forgotten tragedy grew clearer.",
			"...And in its midst, a child's sorrow lay frozen."
		],
		"japanese": [
			"凍てついた遺跡。時間さえ止まっているかのようだ。",
			"アニャの光に導かれるまま、足を進めるほどに、",
			"忘れられた悲劇の影が、より鮮明に迫ってきた。",
			"…そしてその真ん中に、幼い子供の悲しみが凍てついていた。"
		],
		"chinese": [
			"冰封的遗迹。一个连时间都仿佛停滞的地方。",
			"随着安雅之光的指引，",
			"被遗忘的悲剧阴影愈发清晰。",
			"……而在那中心，一个孩子的悲伤凝结成冰。"
		],
		"french": [
			"Ruines gelées. Un endroit où même le temps semble s'être arrêté.",
			"Plus je suivais la lumière d'Anya,",
			"l'ombre d'une tragédie oubliée se faisait plus nette.",
			"...Et en son cœur, la tristesse d'un enfant était figée."
		],
		"spanish": [
			"Ruinas heladas. Un lugar donde incluso el tiempo parece haberse detenido.",
			"A medida que seguía la luz de Anya,",
			"la sombra de una tragedia olvidada se hacía más nítida.",
			"...Y en su centro, la tristeza de un niño yacía congelada."
		],
		"vietnamese": [
			"Di tích băng giá. Một nơi mà ngay cả thời gian cũng dường như ngừng lại.",
			"Càng bước theo ánh sáng của Anya,",
			"bóng dáng của một bi kịch bị lãng quên càng hiện rõ.",
			"…Và ngay giữa đó, nỗi buồn của một đứa trẻ đã đông cứng."
		],
		"thai": [
			"ซากปรักหักพังอันเยือกแข็ง สถานที่ที่แม้แต่เวลาก็ดูเหมือนจะหยุดนิ่ง",
			"ยิ่งก้าวเดินตามแสงของอันยาไปเท่าไหร่",
			"เงาแห่งโศกนาฏกรรมที่ถูกลืมก็ยิ่งปรากฏชัดเจนขึ้น",
			"…และท่ามกลางความหนาวเย็นนั้น ความเศร้าโศกของเด็กน้อยก็ถูกแช่แข็งไว้"
		],
		"hindi": [
			"जमे हुए खंडहर। एक ऐसी जगह जहाँ समय भी थम गया हो।",
			"जैसे-जैसे मैं अन्या की रोशनी का अनुसरण करता गया,",
			"एक भूली हुई त्रासदी की परछाई और स्पष्ट होती गई।",
			"...और उसके बीच में, एक बच्चे का दुख जम गया था।"
		]
	}
} as const;
