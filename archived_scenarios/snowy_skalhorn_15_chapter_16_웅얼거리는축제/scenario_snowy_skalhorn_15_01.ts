export const scenario_snowy_skalhorn_15_01 = {
	"scenario_id": "snowy_skalhorn_15_01",
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
			"뿔잔. 눈밭에 박힌 미지의 유물.",
			"어디선가 웅얼거리는 축제의 가락.",
			"귓가에 들러붙는 멜로디는, 잊히지 않는 주문 같았다.",
			"탐험대는 이 노래의 끝을 찾아 나섰다."
		],
		"english": [
			"Horned cup. An unknown artifact stuck in the snow.",
			"A humming festival tune from somewhere.",
			"The melody clinging to my ears felt like an unforgettable spell.",
			"The expedition set out to find the end of this song."
		],
		"japanese": [
			"角杯。雪原に突き刺さった未知の遺物。",
			"どこからか聞こえる、ざわめく祭りの調べ。",
			"耳元にまとわりつくメロディーは、忘れられない呪文のようだった。",
			"探検隊はこの歌の終わりを探しに出発した。"
		],
		"chinese": [
			"角杯。刺入雪地的未知遗物。",
			"不知从何处传来的，嗡嗡作响的节日旋律。",
			"萦绕耳畔的旋律，如同一段挥之不去的咒语。",
			"探险队出发寻找这首歌的尽头。"
		],
		"french": [
			"Corne de boisson. Un artefact inconnu planté dans la neige.",
			"Une mélodie festive murmurée venant de quelque part.",
			"La mélodie qui s'accrochait à mes oreilles ressemblait à un sort inoubliable.",
			"L'expédition partit à la recherche de la fin de cette chanson."
		],
		"spanish": [
			"Cuerno. Un artefacto desconocido clavado en la nieve.",
			"Una melodía festiva murmurada de algún lugar.",
			"La melodía que se aferraba a mis oídos parecía un hechizo inolvidable.",
			"La expedición partió en busca del final de esta canción."
		],
		"vietnamese": [
			"Sừng uống. Một cổ vật bí ẩn cắm trong tuyết.",
			"Một giai điệu lễ hội ngân nga từ đâu đó.",
			"Giai điệu vương vấn bên tai như một câu thần chú không thể quên.",
			"Đoàn thám hiểm lên đường tìm kiếm điểm cuối của bài hát này."
		],
		"thai": [
			"ถ้วยเขา สสารโบราณลึกลับปักอยู่บนพื้นหิมะ",
			"ทำนองเทศกาลที่ฮัมออกมาจากที่ใดที่หนึ่ง",
			"ท่วงทำนองที่ติดอยู่ในหูนั้นราวกับเป็นมนตร์สะกดที่ไม่มีวันลืม",
			"คณะสำรวจออกเดินทางเพื่อตามหาจุดสิ้นสุดของเพลงนี้"
		],
		"hindi": [
			"सींग का प्याला। बर्फ में धंसा एक अज्ञात अवशेष।",
			"कहीं से गुनगुनाते उत्सव की धुन।",
			"कानों में चिपकी धुन, एक अविस्मरणीय मंत्र जैसी थी।",
			"अभियान दल इस गीत के अंत की तलाश में निकल पड़ा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 눈밭 위로, 웅얼거리는 노랫소리가 낮게 깔렸다.",
						"english": "Over the endlessly stretching snowfield, a murmuring song lay low.",
						"japanese": "どこまでも広がる雪原に、ざわめく歌声が低く響いていた。",
						"chinese": "在无尽蔓延的雪地之上，低沉的歌声嗡嗡作响。",
						"french": "Sur la plaine enneigée infinie, une chanson murmurée résonnait doucement.",
						"spanish": "Sobre el campo de nieve interminable, una canción murmurada se extendía suavemente.",
						"vietnamese": "Trên cánh đồng tuyết trải dài vô tận, một khúc ca ngân nga trải dài thấp thoáng.",
						"thai": "บนทุ่งหิมะที่กว้างใหญ่ไม่มีที่สิ้นสุด เสียงเพลงที่พึมพำแผ่วเบาคลอเคลียอยู่",
						"hindi": "अंतहीन फैले बर्फ के मैदान पर, एक गुनगुनाता हुआ गीत धीरे-धीरे फैला हुआ था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…정말 이상한 노래야.",
						"english": "...It's a really strange song.",
						"japanese": "…本当に奇妙な歌だ。",
						"chinese": "……真是奇怪的歌。",
						"french": "...C'est une chanson vraiment étrange.",
						"spanish": "...Es una canción realmente extraña.",
						"vietnamese": "...Đúng là một bài hát kỳ lạ.",
						"thai": "...เพลงนี้แปลกจริงๆ",
						"hindi": "...यह वाकई एक अजीब गाना है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "들으면 들을수록 머리에 들러붙는 것 같아.",
						"english": "The more I listen, the more it seems to stick in my head.",
						"japanese": "聞けば聞くほど、頭にまとわりつくようだ。",
						"chinese": "越听越觉得它缠绕在脑海里。",
						"french": "Plus je l'écoute, plus elle semble s'accrocher à ma tête.",
						"spanish": "Cuanto más la escucho, más parece pegarse a mi cabeza.",
						"vietnamese": "Càng nghe càng thấy nó cứ bám chặt vào đầu.",
						"thai": "ยิ่งฟังยิ่งเหมือนมันติดอยู่ในหัว",
						"hindi": "जितना सुनता हूं, उतना ही यह मेरे सिर में अटक जाता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록하겠습니다. ‘들러붙는 가락’.",
						"english": "I will record it. 'Clinging Melody'.",
						"japanese": "記録しておきます。「まとわりつく調べ」。",
						"chinese": "我会记录下来。‘缠绕的旋律’。",
						"french": "Je vais le noter. 'Mélodie Persistante'.",
						"spanish": "Lo registraré. 'Melodía Pegadiza'.",
						"vietnamese": "Tôi sẽ ghi lại. 'Giai điệu đeo bám'.",
						"thai": "จะบันทึกไว้ว่า 'ทำนองติดหู'",
						"hindi": "मैं इसे दर्ज करूंगा। 'चिपकी हुई धुन'।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "소리의 근원은… 저 뿔잔. 틀림없군요.",
						"english": "The source of the sound is... that horned cup. No doubt about it.",
						"japanese": "音の根源は…あの角杯。間違いありませんね。",
						"chinese": "声音的来源是……那个角杯。没错。",
						"french": "La source du son est... cette corne de boisson. Sans aucun doute.",
						"spanish": "La fuente del sonido es... ese cuerno. No hay duda.",
						"vietnamese": "Nguồn gốc của âm thanh là... chiếc sừng đó. Chắc chắn rồi.",
						"thai": "ต้นกำเนิดของเสียงคือ... ถ้วยเขานั่นเอง ไม่มีผิด",
						"hindi": "ध्वनि का स्रोत... वह सींग का प्याला है। इसमें कोई शक नहीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 뿔잔에서 노래가 나오는 거라고?",
						"english": "The song is coming from that horned cup?",
						"japanese": "あの角杯から歌が聞こえるのか？",
						"chinese": "歌声是从那个角杯里发出来的吗？",
						"french": "La chanson vient de cette corne de boisson ?",
						"spanish": "¿La canción sale de ese cuerno?",
						"vietnamese": "Bài hát phát ra từ chiếc sừng đó sao?",
						"thai": "เพลงออกมาจากถ้วยเขาอันนั้นเหรอ?",
						"hindi": "वह गाना उस सींग के प्याले से आ रहा है?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 더 또렷하게 들리는 것 같아.",
						"english": "It sounds clearer and clearer.",
						"japanese": "だんだんとはっきり聞こえてくるようだ。",
						"chinese": "听起来越来越清晰了。",
						"french": "Ça me semble de plus en plus clair.",
						"spanish": "Parece que se escucha cada vez más claro.",
						"vietnamese": "Nghe có vẻ ngày càng rõ ràng hơn.",
						"thai": "ดูเหมือนว่าจะได้ยินชัดขึ้นเรื่อยๆ",
						"hindi": "यह और भी स्पष्ट सुनाई दे रहा है।"
					}
				},
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"duration_ms": 550,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 가락은 잊힌 축제의 노래. 하지만… 무언가 달라요.",
						"english": "This melody is a forgotten festival song. But... something's different.",
						"japanese": "この調べは忘れられた祭りの歌。でも…何かが違う。",
						"chinese": "这曲调是遗忘庆典之歌。但是……有些不对劲。",
						"french": "Cette mélodie est un chant de fête oublié. Mais... quelque chose a changé.",
						"spanish": "Esta melodía es una canción de festival olvidada. Pero... algo es diferente.",
						"vietnamese": "Giai điệu này là bài hát của lễ hội bị lãng quên. Nhưng... có gì đó khác lạ.",
						"thai": "ทำนองนี้คือเพลงเทศกาลที่ถูกลืมเลือน แต่... มีบางอย่างไม่เหมือนเดิม",
						"hindi": "यह धुन एक भूली हुई उत्सव गीत है। लेकिन... कुछ अलग है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "달라? 뭐가?",
						"english": "Different? What is?",
						"japanese": "違う？何が？",
						"chinese": "不同？什么不同？",
						"french": "Différent ? Quoi ?",
						"spanish": "¿Diferente? ¿Qué?",
						"vietnamese": "Khác lạ? Cái gì?",
						"thai": "แตกต่าง? อะไรล่ะ?",
						"hindi": "अलग? क्या?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록해야 합니다. 이 미묘한 변화를.",
						"english": "This subtle change must be recorded.",
						"japanese": "記録しなければなりません。この微妙な変化を。",
						"chinese": "必须记录下来。这个微妙的变化。",
						"french": "Il faut que je le note. Ce changement subtil.",
						"spanish": "Debo registrarlo. Este sutil cambio.",
						"vietnamese": "Phải ghi lại. Sự thay đổi tinh tế này.",
						"thai": "ต้องบันทึกไว้ การเปลี่ยนแปลงที่ละเอียดอ่อนนี้",
						"hindi": "मुझे इसे रिकॉर्ड करना होगा। यह सूक्ष्म परिवर्तन।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "이젠 나도 모르게 흥얼거리게 돼.",
						"english": "Now I hum it unconsciously.",
						"japanese": "今では私も知らず知らずのうちに口ずさんでいる。",
						"chinese": "现在我不知不觉地哼唱起来了。",
						"french": "Maintenant, je me surprends à le fredonner.",
						"spanish": "Ahora me encuentro tarareándola sin darme cuenta.",
						"vietnamese": "Giờ tôi vô thức ngân nga theo.",
						"thai": "ตอนนี้ฉันฮัมเพลงนี้โดยไม่รู้ตัวเลย",
						"hindi": "अब मैं अनजाने में ही इसे गुनगुनाने लगता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 450,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "노랫말이 없는데, 의미가 읽히는군요.",
						"english": "No words, yet the meaning is clear.",
						"japanese": "歌詞はないのに、意味が読み取れる。",
						"chinese": "没有歌词，却能读懂其含义。",
						"french": "Il n'y a pas de paroles, et pourtant, le sens est lisible.",
						"spanish": "No hay letra, pero el significado se puede leer.",
						"vietnamese": "Không có lời bài hát, nhưng ý nghĩa lại đọc được.",
						"thai": "ไม่มีเนื้อร้อง แต่กลับอ่านความหมายได้",
						"hindi": "कोई बोल नहीं हैं, फिर भी अर्थ पढ़ा जा सकता है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "의미?",
						"english": "Meaning?",
						"japanese": "意味？",
						"chinese": "含义？",
						"french": "Un sens ?",
						"spanish": "¿Significado?",
						"vietnamese": "Ý nghĩa?",
						"thai": "ความหมาย?",
						"hindi": "अर्थ?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "오래된 룬의 언어. 기억하려는 자들의 염원이 담겨 있습니다.",
						"english": "The language of old runes. It carries the wishes of those who strive to remember.",
						"japanese": "古のルーンの言葉。記憶しようとする者たちの願いが込められている。",
						"chinese": "古老符文的语言。其中蕴含着渴望铭记者的愿望。",
						"french": "Le langage des runes anciennes. Il contient les vœux de ceux qui cherchent à se souvenir.",
						"spanish": "El lenguaje de las runas antiguas. Contiene los deseos de quienes buscan recordar.",
						"vietnamese": "Ngôn ngữ của các chữ rune cổ xưa. Nó chứa đựng nguyện vọng của những người muốn ghi nhớ.",
						"thai": "ภาษารูนโบราณ บรรจุความปรารถนาของผู้ที่พยายามจดจำไว้",
						"hindi": "प्राचीन रुन की भाषा। इसमें उन लोगों की इच्छाएँ समाहित हैं जो याद रखना चाहते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "노래가 점점… 커지는 것 같아.",
						"english": "The song seems to be getting... louder.",
						"japanese": "歌がだんだん…大きくなっているようだ。",
						"chinese": "歌声似乎越来越……响亮了。",
						"french": "Le chant semble devenir… plus fort.",
						"spanish": "La canción parece… hacerse más fuerte.",
						"vietnamese": "Bài hát dường như ngày càng... to hơn.",
						"thai": "เสียงเพลงดูเหมือนจะ... ดังขึ้นเรื่อยๆ",
						"hindi": "गाना धीरे-धीरे… तेज़ होता जा रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "온몸으로 울리는군요. 마치 뿔잔 자체가 노래하는 것처럼.",
						"english": "It resonates through my entire body. As if the horn itself is singing.",
						"japanese": "全身に響き渡る。まるで角杯そのものが歌っているかのように。",
						"chinese": "它在全身回响。仿佛号角本身在歌唱。",
						"french": "Ça résonne dans tout mon corps. Comme si la corne elle-même chantait.",
						"spanish": "Resuena en todo mi cuerpo. Como si el cuerno mismo cantara.",
						"vietnamese": "Nó vang vọng khắp cơ thể. Cứ như thể chiếc sừng đang tự hát vậy.",
						"thai": "มันก้องกังวานไปทั่วร่าง เหมือนกับว่าแก้วเขาเองกำลังร้องเพลง",
						"hindi": "यह मेरे पूरे शरीर में गूँज रहा है। मानो सींग ही गा रहा हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 멈출까?",
						"english": "Stop here?",
						"japanese": "ここで止める？",
						"chinese": "到此为止吗？",
						"french": "On s'arrête ici ?",
						"spanish": "¿Nos detenemos aquí?",
						"vietnamese": "Dừng lại ở đây à?",
						"thai": "หยุดแค่นี้ไหม?",
						"hindi": "क्या यहीं रुकें?"
					},
					"emotion": "base",
					"speaker": "character_4"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니요. 이 가락의 끝을 봐야 합니다.",
						"english": "No. We must see this tune to its end.",
						"japanese": "いいえ。この調べの終わりを見るべきです。",
						"chinese": "不。我们必须看到这调子的尽头。",
						"french": "Non. Nous devons voir la fin de cet air.",
						"spanish": "No. Debemos ver el final de esta melodía.",
						"vietnamese": "Không. Chúng ta phải đi đến cuối khúc nhạc này.",
						"thai": "ไม่สิ เราต้องดูจุดจบของเพลงนี้ให้ได้",
						"hindi": "नहीं। हमें इस धुन का अंत देखना होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 가장 깊은 곳. 노랫소리가 하나의 형태로 뭉쳐 있었다.",
						"english": "Deepest in the horn. The song coalesced into a form.",
						"japanese": "角杯の最深部。歌声が一つの形に凝り固まっていた。",
						"chinese": "鹿角杯最深处。歌声凝聚成了一个形态。",
						"french": "Au plus profond du cor. Le chant s'était aggloméré en une forme.",
						"spanish": "En lo más profundo del cuerno. Un canto se había unido en una forma.",
						"vietnamese": "Sâu nhất trong sừng. Tiếng hát kết thành một hình hài.",
						"thai": "ส่วนที่ลึกที่สุดของเขาสัตว์ เสียงเพลงรวมตัวกันเป็นรูปร่าง",
						"hindi": "सींग के सबसे गहरे हिस्से में। एक गीत एक रूप में एकत्र हो गया था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…온 것을 환영한다.",
						"english": "...Welcome.",
						"japanese": "…よく来た。",
						"chinese": "……欢迎到来。",
						"french": "...Bienvenue.",
						"spanish": "...Bienvenido.",
						"vietnamese": "...Chào mừng đã đến.",
						"thai": "...ยินดีต้อนรับ",
						"hindi": "...स्वागत है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 노래의 주인인가!",
						"english": "You are the master of this song?!",
						"japanese": "お前がこの歌の主か！",
						"chinese": "你是这首歌的主人吗？！",
						"french": "Tu es le maître de ce chant ?!",
						"spanish": "¿Eres el dueño de esta canción?!",
						"vietnamese": "Ngươi là chủ nhân của bài hát này sao?!",
						"thai": "เจ้าคือเจ้าของเพลงนี้หรือ?!",
						"hindi": "क्या तुम इस गीत के स्वामी हो?!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래. 나의 즐거운 축제에 동참해라.",
						"english": "Yes. Join my joyous festival.",
						"japanese": "そうだ。我が楽しい祭りに加わるが良い。",
						"chinese": "是的。加入我的欢乐庆典吧。",
						"french": "Oui. Joins-toi à ma joyeuse fête.",
						"spanish": "Sí. Únete a mi alegre festival.",
						"vietnamese": "Phải. Hãy tham gia vào lễ hội vui vẻ của ta.",
						"thai": "ใช่ เข้าร่วมเทศกาลอันสนุกสนานของข้าสิ",
						"hindi": "हाँ। मेरे आनंदमय उत्सव में शामिल हो जाओ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록하겠습니다. 잊힌 노래의… 수호자.",
						"english": "I'll record this. Guardian of the Forgotten Song...",
						"japanese": "記録しておこう。忘れられた歌の…守護者。",
						"chinese": "我将记录下来。被遗忘之歌的……守护者。",
						"french": "Je vais le noter. Gardien du chant oublié...",
						"spanish": "Lo registraré. Guardián de la Canción Olvidada...",
						"vietnamese": "Tôi sẽ ghi lại. Người bảo hộ của Khúc Ca Bị Lãng Quên...",
						"thai": "ข้าจะบันทึกไว้ ผู้พิทักษ์ของเพลงที่ถูกลืม...",
						"hindi": "मैं इसे दर्ज करूँगा। भूले हुए गीत का... संरक्षक।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "노래는 더욱 거대해졌고, 탐험대는 그 압도적인 가락에 휩쓸렸다.",
						"english": "The song grew ever mightier, sweeping the expedition into its overwhelming melody.",
						"japanese": "歌はさらに巨大になり、探検隊はその圧倒的な調べに飲み込まれた。",
						"chinese": "歌声变得更加宏大，探险队被那压倒性的旋律吞噬。",
						"french": "Le chant devint de plus en plus puissant, emportant l'expédition dans sa mélodie écrasante.",
						"spanish": "La canción se hizo aún más grande, y la expedición fue arrastrada por su abrumadora melodía.",
						"vietnamese": "Bài hát trở nên hùng vĩ hơn, cuốn đội thám hiểm vào giai điệu áp đảo của nó.",
						"thai": "บทเพลงยิ่งใหญ่ขึ้นเรื่อยๆ คณะสำรวจถูกพัดพาไปในท่วงทำนองอันท่วมท้น",
						"hindi": "गीत और भी विशाल हो गया, और अभियान दल उसकी圧倒的な धुन में बह गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흥겨운 축제는 이제 시작이다. 너희는… 영원히 함께할 것이다.",
						"english": "The joyous festival has just begun. You... will be together forever.",
						"japanese": "楽しい祭りは今始まったばかりだ。お前たちは…永遠に共にあるだろう。",
						"chinese": "欢乐的节日才刚刚开始。你们…将永远在一起。",
						"french": "La joyeuse fête ne fait que commencer. Vous… serez ensemble pour toujours.",
						"spanish": "El alegre festival acaba de empezar. Vosotros… estaréis juntos para siempre.",
						"vietnamese": "Lễ hội vui vẻ chỉ mới bắt đầu. Các ngươi… sẽ bên nhau mãi mãi.",
						"thai": "เทศกาลอันรื่นเริงเพิ่งจะเริ่มต้นขึ้น พวกเจ้า…จะได้อยู่ด้วยกันตลอดไป",
						"hindi": "आनंदमय उत्सव अभी शुरू हुआ है। तुम… हमेशा साथ रहोगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직은 안 돼.",
						"english": "Damn it... not yet.",
						"japanese": "くそっ…まだだ。",
						"chinese": "该死…还没到时候。",
						"french": "Mince… pas encore.",
						"spanish": "Maldita sea... aún no.",
						"vietnamese": "Chết tiệt… chưa được.",
						"thai": "ให้ตายสิ… ยังไม่ทัน",
						"hindi": "धत् तेरे की… अभी नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "패배의 기록은… 잠시 미루겠습니다. 아직 해독할 부분이 남았어요.",
						"english": "The record of defeat... I'll postpone it for a while. There are still parts left to decipher.",
						"japanese": "敗北の記録は…一時保留とします。まだ解読すべき部分が残っています。",
						"chinese": "失败的记录…暂时搁置。还有部分需要解读。",
						"french": "Le compte-rendu de la défaite… Je le reporterai un instant. Il reste encore des parties à déchiffrer.",
						"spanish": "El registro de la derrota... lo pospondré por un tiempo. Aún quedan partes por descifrar.",
						"vietnamese": "Biên bản thất bại… tôi sẽ tạm hoãn. Vẫn còn những phần cần giải mã.",
						"thai": "บันทึกความพ่ายแพ้… จะขอเลื่อนไปก่อน ยังมีบางส่วนที่ต้องถอดรหัส",
						"hindi": "हार का लेखा-जोखा… मैं कुछ समय के लिए टाल देता हूँ। अभी भी कुछ हिस्से समझने बाकी हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "노래가 멎자, 거대한 그림자가 서서히 흩어졌다.",
						"english": "As the song stopped, the giant shadow slowly dispersed.",
						"japanese": "歌が止まると、巨大な影が徐々に散っていった。",
						"chinese": "歌声停止后，巨大的影子渐渐散去。",
						"french": "Lorsque le chant cessa, l'ombre gigantesque se dissipa lentement.",
						"spanish": "Al cesar la canción, la gigantesca sombra se dispersó lentamente.",
						"vietnamese": "Khi bài hát ngừng lại, bóng tối khổng lồ dần tan biến.",
						"thai": "เมื่อเพลงหยุดลง เงาขนาดยักษ์ก็ค่อยๆ สลายไป",
						"hindi": "जैसे ही गीत रुका, विशाल छाया धीरे-धीरे बिखर गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이 축제는 끝나지 않아. 다시 시작될 뿐…",
						"english": "...This festival doesn't end. It only begins anew...",
						"japanese": "…この祭りは終わらない。再び始まるだけだ…",
						"chinese": "……这场庆典不会结束。它只会重新开始……",
						"french": "...Cette fête ne se termine pas. Elle ne fait que recommencer...",
						"spanish": "...Este festival no termina. Solo vuelve a empezar...",
						"vietnamese": "...Lễ hội này không kết thúc. Nó chỉ bắt đầu lại mà thôi...",
						"thai": "...เทศกาลนี้ไม่จบลง มันแค่เริ่มต้นใหม่อีกครั้ง...",
						"hindi": "...यह उत्सव समाप्त नहीं होता। यह बस फिर से शुरू होगा..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "何だと？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าอะไรนะ?",
						"hindi": "क्या कहा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "사라지면서도 룬의 잔영이 남습니다. 이 가락은… 계속될 겁니다.",
						"english": "Even as it fades, the rune's afterglow remains. This melody... will continue.",
						"japanese": "消えゆくも、ルーンの残光は残る。この調べは…続くでしょう。",
						"chinese": "即使消逝，符文的余晖仍在。这旋律…将继续下去。",
						"french": "Même en s'estompant, la rémanence de la rune persiste. Cette mélodie… continuera.",
						"spanish": "Incluso al desvanecerse, el resplandor de la runa permanece. Esta melodía... continuará.",
						"vietnamese": "Dù biến mất, dư ảnh của rune vẫn còn. Giai điệu này… sẽ tiếp diễn.",
						"thai": "แม้จะเลือนหายไป ร่องรอยของรูนยังคงอยู่ ท่วงทำนองนี้...จะดำเนินต่อไป",
						"hindi": "लुप्त होते हुए भी, रूण की आभा शेष है। यह धुन… जारी रहेगी。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고요해진 눈밭 위. 새로운 의문이 피어났다.",
						"english": "Upon the silenced snowfield, a new question arose.",
						"japanese": "静寂の雪原に、新たな疑問が芽生えた。",
						"chinese": "寂静的雪原上，新的疑问浮现。",
						"french": "Sur l'étendue enneigée et silencieuse, une nouvelle question surgit.",
						"spanish": "Sobre el silencioso campo de nieve, una nueva pregunta surgió.",
						"vietnamese": "Trên cánh đồng tuyết im lìm, một câu hỏi mới nảy sinh.",
						"thai": "บนทุ่งหิมะอันเงียบสงบ คำถามใหม่ได้ผุดขึ้นมา",
						"hindi": "शांत बर्फ़ीले मैदान पर, एक नया प्रश्न उभरा।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
