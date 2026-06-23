export const scenario_forest_kaelen_19_04 = {
	"scenario_id": "forest_kaelen_19_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세상은 보이지 않는 실에 묶여 있다.",
			"숲의 순리를 거스르는 자, 글렌.",
			"그가 목격한 진실은 거대하고, 소름 끼치도록 완벽했다.",
			"이제 숲은 분노로 불타오른다."
		],
		"english": [
			"The world is bound by unseen threads.",
			"Glen, who defies the order of the forest.",
			"The truth he witnessed was vast and chillingly perfect.",
			"Now, the forest burns with fury."
		],
		"japanese": [
			"世界は見えざる糸に縛られている。",
			"森の摂理に逆らう者、グレン。",
			"彼が目撃した真実は、巨大で、ぞっとするほど完璧だった。",
			"今、森は怒りで燃え盛る。"
		],
		"chinese": [
			"世界被无形的线束缚着。",
			"格伦，那个违背森林法则之人。",
			"他所目睹的真相是巨大且令人毛骨悚然的完美。",
			"现在，森林被怒火焚烧着。"
		],
		"french": [
			"Le monde est lié par des fils invisibles.",
			"Glen, celui qui défie l'ordre de la forêt.",
			"La vérité dont il fut témoin était vaste et d'une perfection glaçante.",
			"Maintenant, la forêt brûle de fureur."
		],
		"spanish": [
			"El mundo está atado por hilos invisibles.",
			"Glen, quien desafía el orden del bosque.",
			"La verdad que presenció era vasta y espantosamente perfecta.",
			"Ahora, el bosque arde con furia."
		],
		"vietnamese": [
			"Thế giới bị ràng buộc bởi những sợi chỉ vô hình.",
			"Glen, kẻ chống lại quy luật của rừng.",
			"Sự thật mà anh ta chứng kiến thật rộng lớn và hoàn hảo đến rợn người.",
			"Giờ đây, khu rừng bùng cháy trong cơn thịnh nộ."
		],
		"thai": [
			"โลกถูกผูกมัดด้วยด้ายที่มองไม่เห็น",
			"เกล็น ผู้ท้าทายกฎเกณฑ์ของป่า",
			"ความจริงที่เขาได้เห็นนั้นกว้างใหญ่และสมบูรณ์แบบจนน่าขนลุก",
			"บัดนี้ ป่าลุกไหม้ด้วยความโกรธแค้น"
		],
		"hindi": [
			"दुनिया अदृश्य धागों से बंधी है।",
			"ग्लेन, जो जंगल के नियम को चुनौती देता है।",
			"उसने जो सच देखा वह विशाल और भयावह रूप से सही था।",
			"अब, जंगल क्रोध से जल रहा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 경계선, 오래된 감시탑이 낡은 눈처럼 서 있었다.",
						"english": "At the forest's edge, an old watchtower stood like a worn eye.",
						"japanese": "森の境界線には、古い監視塔が朽ちた目のように立っていた。",
						"chinese": "在森林的边缘，一座古老的瞭望塔像一只老旧的眼睛般矗立着。",
						"french": "À la lisière de la forêt, une vieille tour de guet se dressait comme un œil usé.",
						"spanish": "En el límite del bosque, una vieja torre de vigilancia se erguía como un ojo desgastado.",
						"vietnamese": "Ở rìa rừng, một tháp canh cũ đứng sừng sững như một con mắt mờ.",
						"thai": "ที่ชายป่า หอสังเกตการณ์เก่าแก่ตั้งตระหง่านราวกับดวงตาที่ร่วงโรย",
						"hindi": "जंगल के किनारे पर, एक पुराना निगरानी बुर्ज एक पुरानी आँख की तरह खड़ा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glen",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "…또 사라졌어. 어제 분명히 있었는데.",
						"english": "...It's gone again. It was definitely here yesterday.",
						"japanese": "…また消えた。昨日、確かにあったのに。",
						"chinese": "…又不见了。昨天明明还在的。",
						"french": "...C'est encore parti. C'était bien là hier.",
						"spanish": "...Ha desaparecido otra vez. Estaba aquí ayer, seguro.",
						"vietnamese": "...Lại biến mất rồi. Hôm qua rõ ràng là có mà.",
						"thai": "...มันหายไปอีกแล้ว เมื่อวานมันยังอยู่ตรงนี้เลย",
						"hindi": "यह फिर से चला गया। कल यह निश्चित रूप से यहीं था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "정보. 중요한 것만 쏙 빠져나가. 아무도 모르게.",
						"english": "Information. Only the crucial parts disappear. Without a trace.",
						"japanese": "情報だよ。重要なものだけが、誰も知らないうちに抜け落ちる。",
						"chinese": "信息。只有重要的部分悄无声息地消失了。无人知晓。",
						"french": "Des informations. Seules les parties cruciales disparaissent. Sans que personne ne le sache.",
						"spanish": "Información. Solo las partes cruciales desaparecen. Sin que nadie lo sepa.",
						"vietnamese": "Thông tin. Chỉ những phần quan trọng nhất biến mất. Không ai hay biết.",
						"thai": "ข้อมูลไง ส่วนสำคัญเท่านั้นที่หายไป โดยไม่มีใครรู้",
						"hindi": "जानकारी। केवल महत्वपूर्ण भाग गायब हो जाते हैं। किसी को पता चले बिना।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "glen",
					"duration_ms": 450,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 그냥 오류가 아니야. 조직적이야.",
						"english": "This isn't just an error. It's organized.",
						"japanese": "これは単なるエラーじゃない。組織的なものだ。",
						"chinese": "这不只是个错误。这是有组织的。",
						"french": "Ce n'est pas juste une erreur. C'est organisé.",
						"spanish": "Esto no es solo un error. Es algo organizado.",
						"vietnamese": "Đây không chỉ là lỗi. Đây là có tổ chức.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาด แต่มันเป็นระบบ",
						"hindi": "यह सिर्फ एक गलती नहीं है। यह संगठित है।"
					},
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누가 이런 짓을?",
						"english": "Who would do this?",
						"japanese": "誰がこんなことを？",
						"chinese": "谁会做这种事？",
						"french": "Qui ferait ça ?",
						"spanish": "¿Quién haría esto?",
						"vietnamese": "Ai đã làm chuyện này?",
						"thai": "ใครจะทำแบบนี้?",
						"hindi": "यह कौन करेगा?"
					}
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "누군가 숲의 정보를 통제하고 있어. 자기들 유리한 대로.",
						"english": "Someone's controlling the forest's information. For their own gain.",
						"japanese": "誰かが森の情報を操作している。自分たちに有利なように。",
						"chinese": "有人在操纵森林的信息。为了他们自己的利益。",
						"french": "Quelqu'un contrôle les informations de la forêt. À leur avantage.",
						"spanish": "Alguien está controlando la información del bosque. Para su propio beneficio.",
						"vietnamese": "Ai đó đang kiểm soát thông tin của khu rừng. Theo ý họ.",
						"thai": "มีคนควบคุมข้อมูลของป่า เพื่อประโยชน์ของพวกเขาเอง",
						"hindi": "कोई जंगल की जानकारी को नियंत्रित कर रहा है। अपने फायदे के लिए।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "말도 안 돼.",
						"english": "Unbelievable.",
						"japanese": "信じられない。",
						"chinese": "不可能。",
						"french": "Impossible.",
						"spanish": "Increíble.",
						"vietnamese": "Không thể tin được.",
						"thai": "ไม่น่าเชื่อ",
						"hindi": "यह तो असंभव है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 550,
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "봐. 이건 조작된 기록이야. 원래 이랬을 리 없어.",
						"english": "Look. These records are manipulated. It couldn't have been like this originally.",
						"japanese": "見て。これは操作された記録だ。元はこうだったはずがない。",
						"chinese": "看。这些记录被篡改了。本来不可能这样。",
						"french": "Regarde. Ces registres sont manipulés. Ça n'a jamais pu être comme ça à l'origine.",
						"spanish": "Mira. Estos registros están manipulados. Originalmente no pudo haber sido así.",
						"vietnamese": "Nhìn đi. Đây là những ghi chép đã bị thao túng. Ban đầu không thể nào như thế này.",
						"thai": "ดูสิ. บันทึกพวกนี้ถูกบิดเบือน ไม่น่าจะเป็นแบบนี้ตั้งแต่แรก",
						"hindi": "देखो। ये रिकॉर्ड्स तोड़-मरोड़ दिए गए हैं। मूल रूप से ऐसा नहीं हो सकता था。"
					},
					"speaker": "glen"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "글렌이 내민 자료에는 숲의 기록들이 교묘하게 뒤틀려 있었다.",
						"english": "The data Glen presented showed the forest's records cunningly twisted.",
						"japanese": "グレンが差し出した資料には、森の記録が巧妙に歪められていた。",
						"chinese": "格伦拿出的资料显示，森林的记录被巧妙地扭曲了。",
						"french": "Les données présentées par Glen montraient les archives de la forêt astucieusement déformées.",
						"spanish": "Los datos que Glen presentó mostraban los registros del bosque astutamente distorsionados.",
						"vietnamese": "Dữ liệu Glen đưa ra cho thấy các ghi chép về khu rừng đã bị bóp méo một cách tinh vi.",
						"thai": "ข้อมูลที่เกล็นนำเสนอแสดงให้เห็นว่าบันทึกของป่าถูกบิดเบือนอย่างฉลาด",
						"hindi": "ग्लेन द्वारा प्रस्तुत डेटा में जंगल के रिकॉर्ड चालाकी से तोड़-मरोड़ कर पेश किए गए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…진짜였어.",
						"english": "...It was true.",
						"japanese": "…本当だった。",
						"chinese": "…是真的。",
						"french": "...C'était vrai.",
						"spanish": "...Era verdad.",
						"vietnamese": "...Là thật.",
						"thai": "...มันเป็นเรื่องจริง",
						"hindi": "...यह सच था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen",
					"content": {
						"korean": "이 숲 전체가 거대한 거짓말 위에 세워졌어.",
						"english": "This entire forest was built upon a massive lie.",
						"japanese": "この森全体が、巨大な嘘の上に築かれている。",
						"chinese": "这整片森林都是建立在一个巨大的谎言之上。",
						"french": "Cette forêt entière a été construite sur un immense mensonge.",
						"spanish": "Todo este bosque fue construido sobre una gigantesca mentira.",
						"vietnamese": "Toàn bộ khu rừng này được xây dựng trên một lời nói dối khổng lồ.",
						"thai": "ป่าทั้งป่านี้ถูกสร้างขึ้นบนเรื่องโกหกครั้งใหญ่",
						"hindi": "यह पूरा जंगल एक बड़े झूठ पर खड़ा किया गया था।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 400,
					"speaker": "glen",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이게 숲의 진짜 모습이야. 모두가 침묵하는 동안, 진실은 찢겨나갔지.",
						"english": "This is the forest's true form. While everyone remained silent, the truth was torn apart.",
						"japanese": "これが森の本当の姿だ。皆が沈黙する間、真実は引き裂かれた。",
						"chinese": "这就是森林的真实面貌。在所有人保持沉默的时候，真相被撕裂了。",
						"french": "C'est la vraie nature de la forêt. Pendant que tout le monde se taisait, la vérité a été déchirée.",
						"spanish": "Esta es la verdadera forma del bosque. Mientras todos guardaban silencio, la verdad fue destrozada.",
						"vietnamese": "Đây là diện mạo thật của khu rừng. Trong khi mọi người im lặng, sự thật đã bị xé nát.",
						"thai": "นี่คือโฉมหน้าที่แท้จริงของป่า ในขณะที่ทุกคนนิ่งเงียบ ความจริงกลับถูกฉีกกระชาก",
						"hindi": "यह जंगल का असली रूप है। जब सब खामोश थे, तब सच्चाई को तार-तार कर दिया गया।"
					},
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "그래서 뭘 어쩌라는 거야?",
						"english": "So what do we do?",
						"japanese": "それで、どうしろって言うんだ？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, qu'est-ce qu'on fait ?",
						"spanish": "¿Y qué se supone que hagamos?",
						"vietnamese": "Vậy thì phải làm gì đây?",
						"thai": "แล้วจะให้ทำยังไง?",
						"hindi": "तो अब क्या करें?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실을 밝혀야 해. 그렇지 않으면… 영원히 이용당할 거야.",
						"english": "We must reveal the truth. Otherwise... we'll be exploited forever.",
						"japanese": "真実を明かさなければならない。さもなければ…永遠に利用されるだろう。",
						"chinese": "我们必须揭露真相。否则…我们将永远被利用。",
						"french": "Nous devons révéler la vérité. Sinon... nous serons exploités pour toujours.",
						"spanish": "Debemos revelar la verdad. De lo contrario... seremos explotados para siempre.",
						"vietnamese": "Chúng ta phải vạch trần sự thật. Nếu không… sẽ bị lợi dụng mãi mãi.",
						"thai": "เราต้องเปิดเผยความจริง ไม่เช่นนั้น... เราจะถูกเอาเปรียบไปตลอดกาล",
						"hindi": "हमें सच्चाई उजागर करनी होगी। नहीं तो… हमारा हमेशा के लिए फायदा उठाया जाएगा।"
					},
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "분노가 끓어올라. 저들을 용서 못 해.",
						"english": "My anger boils. I can't forgive them.",
						"japanese": "怒りがこみ上げる。彼らを許せない。",
						"chinese": "怒火中烧。我不能原谅他们。",
						"french": "La colère monte en moi. Je ne peux pas leur pardonner.",
						"spanish": "La ira me hierve. No puedo perdonarlos.",
						"vietnamese": "Cơn giận bùng lên. Không thể tha thứ cho bọn chúng.",
						"thai": "ความโกรธเดือดพล่าน ฉันให้อภัยพวกเขาไม่ได้",
						"hindi": "गुस्सा फूट पड़ा है। मैं उन्हें माफ नहीं कर सकता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 400
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 한낱 장기말이… 감히….",
						"english": "Ugh… A mere pawn… how dare…",
						"japanese": "くっ… 駒風情が… よくも…。",
						"chinese": "呃… 一个小小的棋子… 竟敢…。",
						"french": "Ugh… Un simple pion… comment oses-tu…",
						"spanish": "Ugh… Un simple peón… cómo se atreve…",
						"vietnamese": "Khụ… Một con tốt hèn mọn… dám…",
						"thai": "อึก… แค่เบี้ยตัวหนึ่ง… กล้าดียังไง…",
						"hindi": "उफ़... सिर्फ एक मोहरा... इतनी हिम्मत कैसे हुई..."
					}
				},
				{
					"content": {
						"korean": "거대한 그림자가 서서히 소멸했다.",
						"english": "The colossal shadow slowly vanished.",
						"japanese": "巨大な影が徐々に消滅した。",
						"chinese": "巨大的身影渐渐消散了。",
						"french": "L'ombre colossale disparut lentement.",
						"spanish": "La sombra colosal se desvaneció lentamente.",
						"vietnamese": "Cái bóng khổng lồ dần dần biến mất.",
						"thai": "เงาขนาดมหึมาได้ค่อยๆ สลายไป",
						"hindi": "विशालकाय परछाई धीरे-धीरे गायब हो गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝났다고 생각하지 마. 이건 시작일 뿐이야.",
						"english": "Don't think it's over. This is just the beginning.",
						"japanese": "終わったと思うな。これは始まりに過ぎない。",
						"chinese": "别以为结束了。这只是个开始。",
						"french": "Ne pense pas que c'est fini. Ce n'est que le début.",
						"spanish": "No creas que ha terminado. Esto es solo el principio.",
						"vietnamese": "Đừng nghĩ là đã kết thúc. Đây chỉ là khởi đầu thôi.",
						"thai": "อย่าคิดว่ามันจบแล้ว นี่เป็นแค่จุดเริ่มต้นเท่านั้น",
						"hindi": "यह मत सोचना कि यह खत्म हो गया है। यह तो बस शुरुआत है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드러난 진실은 더 깊은 곳으로 향하는 문을 열었다. 숲의 심장으로.",
						"english": "The revealed truth opened a door to a deeper place. To the heart of the forest.",
						"japanese": "明かされた真実は、より深い場所への扉を開いた。森の心臓部へ。",
						"chinese": "揭示的真相打开了通往更深处的大门。通往森林之心。",
						"french": "La vérité révélée ouvrit une porte vers un lieu plus profond. Vers le cœur de la forêt.",
						"spanish": "La verdad revelada abrió una puerta a un lugar más profundo. Al corazón del bosque.",
						"vietnamese": "Sự thật được hé lộ đã mở ra cánh cửa dẫn đến một nơi sâu thẳm hơn. Đến trái tim của khu rừng.",
						"thai": "ความจริงที่ถูกเปิดเผยได้เปิดประตูสู่สถานที่ที่ลึกซึ้งยิ่งขึ้น สู่ใจกลางป่า",
						"hindi": "उजागर हुए सत्य ने एक गहरे स्थान का द्वार खोल दिया। वन के हृदय की ओर।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 그림자가 모든 것을 집어삼켰다.",
						"english": "The forest's shadow swallowed everything.",
						"japanese": "森の影が全てを飲み込んだ。",
						"chinese": "森林的阴影吞噬了一切。",
						"french": "L'ombre de la forêt engloutit tout.",
						"spanish": "La sombra del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của khu rừng đã nuốt chửng mọi thứ.",
						"thai": "เงาของป่าได้กลืนกินทุกสิ่ง",
						"hindi": "वन की परछाई ने सब कुछ निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 진실은 너희의 것이 아니야.",
						"english": "Fools. The truth is not yours.",
						"japanese": "愚か者ども。真実は貴様らのものではない。",
						"chinese": "愚者。真相不属于你们。",
						"french": "Fous. La vérité ne vous appartient pas.",
						"spanish": "Necios. La verdad no es vuestra.",
						"vietnamese": "Lũ ngu ngốc. Sự thật không thuộc về các ngươi.",
						"thai": "พวกโง่เขลา. ความจริงไม่ใช่ของพวกเจ้า.",
						"hindi": "मूर्खों। सत्य तुम्हारा नहीं है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이대로… 끝낼 순 없어.",
						"english": "It can't end like this.",
						"japanese": "このままでは… 終われない。",
						"chinese": "绝不能就此… 终结。",
						"french": "Ça ne peut pas finir comme ça.",
						"spanish": "No puedo… terminar así.",
						"vietnamese": "Không thể… kết thúc như thế này.",
						"thai": "จะให้มัน… จบลงแบบนี้ไม่ได้.",
						"hindi": "ऐसे… खत्म नहीं कर सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "포기해라. 시스템은 완벽하다.",
						"english": "Give up. The System is perfect.",
						"japanese": "諦めろ。システムは完璧だ。",
						"chinese": "放弃吧。系统是完美的。",
						"french": "Abandonne. Le système est parfait.",
						"spanish": "Ríndete. El sistema es perfecto.",
						"vietnamese": "Hãy bỏ cuộc đi. Hệ thống là hoàn hảo.",
						"thai": "ยอมแพ้เสีย. ระบบสมบูรณ์แบบ.",
						"hindi": "हार मान लो। सिस्टम बिल्कुल सही है।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "눈앞에 거대한 그림자가 나타났다. 진실을 막으려는 존재.",
						"english": "A colossal shadow emerged. A being intent on obscuring the truth.",
						"japanese": "目の前に巨大な影が現れた。真実を阻もうとする存在。",
						"chinese": "巨大的身影出现在眼前。一个企图掩盖真相的存在。",
						"french": "Une ombre colossale apparut. Une entité cherchant à masquer la vérité.",
						"spanish": "Una sombra colosal apareció. Un ser que intenta ocultar la verdad.",
						"vietnamese": "Một cái bóng khổng lồ hiện ra. Một thực thể hòng che giấu sự thật.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นตรงหน้า สิ่งมีชีวิตที่ตั้งใจจะบดบังความจริง",
						"hindi": "सामने एक विशालकाय परछाई दिखाई दी। सत्य को रोकने वाला एक अस्तित्व।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 순리를 거스르려 하는가?",
						"english": "How dare you… defy the natural order?",
						"japanese": "貴様… 道理に逆らうつもりか？",
						"chinese": "竟敢… 违逆天理？",
						"french": "Comment oses-tu… défier l'ordre naturel ?",
						"spanish": "¿Cómo te atreves… a desafiar el orden natural?",
						"vietnamese": "Ngươi dám… đi ngược lại lẽ tự nhiên sao?",
						"thai": "เจ้ากล้าดีอย่างไร… ถึงได้ฝืนกฎธรรมชาติ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... प्राकृतिक व्यवस्था को चुनौती देने की?"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 진실을 가로막는 자인가!",
						"english": "Are you the one obstructing the truth!",
						"japanese": "貴様が真実を阻む者か！",
						"chinese": "你就是那个阻碍真相的人吗！",
						"french": "Es-tu celui qui obstrue la vérité !",
						"spanish": "¡¿Eres tú quien obstruye la verdad?!",
						"vietnamese": "Ngươi chính là kẻ cản trở sự thật!",
						"thai": "เจ้าคือผู้ที่ขัดขวางความจริงงั้นหรือ!",
						"hindi": "क्या तुम ही हो जो सत्य को रोक रहा है!"
					}
				},
				{
					"content": {
						"korean": "너희는 그저 어리석은 장기말일 뿐.",
						"english": "You are naught but foolish pawns.",
						"japanese": "お前たちはただの愚かな駒に過ぎない。",
						"chinese": "你们不过是愚蠢的棋子罢了。",
						"french": "Vous n'êtes que de simples pions insensés.",
						"spanish": "No sois más que peones insensatos.",
						"vietnamese": "Các ngươi chỉ là những con tốt ngốc nghếch mà thôi.",
						"thai": "พวกเจ้าเป็นแค่เบี้ยที่โง่เขลาเท่านั้น",
						"hindi": "तुम सिर्फ बेवकूफ मोहरे हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너희가 만든 거짓 세상을 부숴주겠어!",
						"english": "Silence! I will shatter the false world you created!",
						"japanese": "黙れ！貴様らが作った偽りの世界を破壊してやる！",
						"chinese": "闭嘴！我会摧毁你们创造的虚假世界！",
						"french": "Silence ! Je briserai le monde illusoire que vous avez créé !",
						"spanish": "¡Cállate! ¡Destruiré el mundo falso que creasteis!",
						"vietnamese": "Im đi! Ta sẽ phá tan thế giới giả dối mà các ngươi đã tạo ra!",
						"thai": "เงียบซะ! ข้าจะทำลายโลกหลอกลวงที่พวกเจ้าสร้างขึ้นเอง!",
						"hindi": "चुप रहो! मैं तुम्हारी बनाई झूठी दुनिया को तोड़ दूंगा!"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
