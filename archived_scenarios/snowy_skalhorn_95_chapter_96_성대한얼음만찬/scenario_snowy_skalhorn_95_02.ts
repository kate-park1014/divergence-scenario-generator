export const scenario_snowy_skalhorn_95_02 = {
	"scenario_id": "snowy_skalhorn_95_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뿔잔의 광기가 서서히 모습을 드러내고 있었다.",
			"수정 속에 갇힌 영혼들의 얼굴이,",
			"이제, 탐험대를 향한다.",
			"새로운 손님을 맞이하기 위해.",
			"“절대, 초대를 받지 마.”"
		],
		"english": [
			"The madness of the Horned Chalice was slowly revealing itself.",
			"The faces of souls trapped in crystals,",
			"Now, turn towards the expedition team.",
			"To welcome new guests.",
			"\"Never, accept the invitation.\""
		],
		"japanese": [
			"角杯の狂気が徐々にその姿を現し始めていた。",
			"水晶に囚われた魂たちの顔が、",
			"今、探検隊の方を向く。",
			"新しい客を迎えるために。",
			"「決して、招待を受けてはならない。」"
		],
		"chinese": [
			"뿔잔的疯狂正逐渐显现。",
			"困在水晶中的灵魂的脸庞，",
			"如今，它们正转向探险队。",
			"为了迎接新的客人。",
			"“绝不，接受邀请。”"
		],
		"french": [
			"La folie du calice cornu se révélait peu à peu.",
			"Les visages des âmes piégées dans le cristal,",
			"Maintenant, elles se tournent vers l'équipe d'exploration.",
			"Pour accueillir de nouveaux invités.",
			"\"N'acceptez jamais l'invitation.\""
		],
		"spanish": [
			"La locura del Cáliz Cornudo se revelaba lentamente.",
			"Los rostros de las almas atrapadas en el cristal,",
			"Ahora, se dirigen hacia la expedición.",
			"Para dar la bienvenida a nuevos huéspedes.",
			"\"Nunca aceptes la invitación.\""
		],
		"vietnamese": [
			"Sự điên loạn của Chiếc Cốc Sừng đang dần hiện rõ.",
			"Những gương mặt của linh hồn bị giam cầm trong pha lê,",
			"Giờ đây, chúng hướng về phía đoàn thám hiểm.",
			"Để chào đón những vị khách mới.",
			"\"Tuyệt đối đừng chấp nhận lời mời.\""
		],
		"thai": [
			"ความบ้าคลั่งของถ้วยเขาค่อย ๆ เผยโฉมออกมา",
			"ใบหน้าของวิญญาณที่ถูกขังอยู่ในผลึก",
			"บัดนี้ หันหน้าเข้าหาคณะสำรวจ",
			"เพื่อต้อนรับแขกใหม่",
			"\"ห้ามรับคำเชิญเด็ดขาด\""
		],
		"hindi": [
			"सींग वाले प्याले का उन्माद धीरे-धीरे सामने आ रहा था।",
			"क्रिस्टल में फंसी आत्माओं के चेहरे,",
			"अब, अभियान दल की ओर।",
			"नए मेहमानों का स्वागत करने के लिए।",
			"“कभी भी निमंत्रण स्वीकार न करें।”"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔 주변의 수정이 어둡게 빛났다. 그 속에 갇힌 얼굴들이 보였다.",
						"english": "The crystals around the Horned Chalice glowed dimly. Faces trapped within were visible.",
						"japanese": "角杯の周りの水晶が鈍く光った。その中に閉じ込められた顔が見えた。",
						"chinese": "뿔잔周围的水晶发出暗淡的光芒。可以看到被困在其中的面孔。",
						"french": "Les cristaux autour du calice cornu luisaient faiblement. Des visages piégés à l'intérieur étaient visibles.",
						"spanish": "Los cristales alrededor del Cáliz Cornudo brillaban tenuemente. Rostros atrapados dentro eran visibles.",
						"vietnamese": "Những viên pha lê quanh Chiếc Cốc Sừng phát sáng mờ ảo. Những gương mặt bị kẹt bên trong hiện rõ.",
						"thai": "ผลึกรอบถ้วยเขาเรืองแสงสลัว ๆ ใบหน้าที่ถูกขังอยู่ข้างในปรากฏให้เห็น",
						"hindi": "सींग वाले प्याले के चारों ओर के क्रिस्टल हल्के से चमक उठे। उनके भीतर फंसे चेहरे दिखाई दे रहे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 얼굴들은… 뭐야?",
						"english": "These faces... what are they?",
						"japanese": "この顔たちは…何だ？",
						"chinese": "这些脸…是什么？",
						"french": "Ces visages... qu'est-ce que c'est ?",
						"spanish": "¿Estos rostros... qué son?",
						"vietnamese": "Những gương mặt này... là gì vậy?",
						"thai": "ใบหน้าพวกนี้... คืออะไร?",
						"hindi": "ये चेहरे... क्या हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "보통 귀신 놀음은 아니겠지. 뭔가 변화를 감지했군.",
						"english": "This isn't just a regular ghost trick. Something has sensed a change.",
						"japanese": "ただの幽霊遊びではないだろう。何か変化を察知したようだな。",
						"chinese": "这可不是普通的鬼把戏。有什么察觉到了变化。",
						"french": "Ce n'est pas un simple tour de fantôme. Quelque chose a détecté un changement.",
						"spanish": "Esto no es solo un truco de fantasmas. Algo ha detectado un cambio.",
						"vietnamese": "Đây không phải là trò ma quỷ bình thường đâu. Có gì đó đã cảm nhận được sự thay đổi.",
						"thai": "นี่ไม่ใช่แค่การเล่นผีธรรมดาแน่ มีบางอย่างสัมผัสได้ถึงการเปลี่ยนแปลง",
						"hindi": "यह कोई साधारण भूत-प्रेत का खेल नहीं है। किसी ने कोई बदलाव महसूस किया है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
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
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "얼굴들이… 우리를 보는 것 같군.",
						"english": "The faces... they seem to be looking at us.",
						"japanese": "顔たちが…私たちを見ているようだ。",
						"chinese": "那些脸…好像在看着我们。",
						"french": "Les visages... ils semblent nous regarder.",
						"spanish": "Los rostros... parece que nos miran.",
						"vietnamese": "Những gương mặt đó... dường như đang nhìn chúng ta.",
						"thai": "ใบหน้าเหล่านั้น... ดูเหมือนกำลังมองพวกเรา",
						"hindi": "चेहरे... वे हमें देख रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 550,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "점점 더 분명해지는군.",
						"english": "It's becoming clearer now.",
						"japanese": "だんだんとはっきりしてきたな。",
						"chinese": "越来越清楚了。",
						"french": "C'est de plus en plus clair.",
						"spanish": "Cada vez está más claro.",
						"vietnamese": "Càng ngày càng rõ ràng hơn.",
						"thai": "ชัดเจนขึ้นเรื่อยๆ แล้วสิเนี่ย",
						"hindi": "यह और स्पष्ट होता जा रहा है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 분명하다는 거야?",
						"english": "What's clear?",
						"japanese": "何がはっきりしたんだ？",
						"chinese": "什么清楚了？",
						"french": "Qu'est-ce qui est clair ?",
						"spanish": "¿Qué está claro?",
						"vietnamese": "Cái gì rõ ràng cơ?",
						"thai": "อะไรที่ชัดเจนขึ้น?",
						"hindi": "क्या स्पष्ट है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "저 수정 속 얼굴들 말이야. 죄다 우리를 향하고 있어.",
						"english": "Those faces in the crystal. They're all turned towards us.",
						"japanese": "あの水晶の中の顔だよ。全部こっちを向いてる。",
						"chinese": "就是水晶里的那些脸。全都面向我们。",
						"french": "Ces visages dans le cristal. Ils sont tous tournés vers nous.",
						"spanish": "Esos rostros en el cristal. Todos nos están mirando.",
						"vietnamese": "Là những khuôn mặt trong viên pha lê đó. Chúng đều hướng về phía chúng ta.",
						"thai": "ใบหน้าในคริสตัลนั่นไง พวกมันหันมาทางเราหมดเลย",
						"hindi": "क्रिस्टल में वो चेहरे। वे सब हमारी ओर मुड़े हुए हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "설마… 우리를 보고 있는 거야?",
						"english": "Surely not... Are they watching us?",
						"japanese": "まさか… 私たちを見てるのか？",
						"chinese": "不会吧… 它们在看着我们？",
						"french": "Impossible... Ils nous regardent ?",
						"spanish": "¿No será... que nos están mirando?",
						"vietnamese": "Không thể nào… chúng đang nhìn chúng ta sao?",
						"thai": "ไม่จริงน่า... พวกมันกำลังมองเราอยู่เหรอ?",
						"hindi": "कहीं... वे हमें देख तो नहीं रहे?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "새 손님을 맞이할 준비를 하는 게 아니라면.",
						"english": "Unless they're preparing to greet new guests.",
						"japanese": "新しい客を迎える準備でもしてるんじゃないなら。",
						"chinese": "除非它们正在准备迎接新客人。",
						"french": "À moins qu'ils ne se préparent à accueillir de nouveaux invités.",
						"spanish": "A menos que se estén preparando para recibir a nuevos invitados.",
						"vietnamese": "Trừ khi chúng đang chuẩn bị đón khách mới.",
						"thai": "เว้นแต่ว่าพวกมันกำลังเตรียมต้อนรับแขกใหม่",
						"hindi": "जब तक वे नए मेहमानों का स्वागत करने की तैयारी न कर रहे हों।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "광기의 환대는 곧 죽음이다. 명심해라.",
						"english": "The welcome of madness is death. Remember that.",
						"japanese": "狂気の歓待は死を意味する。心に留めておけ。",
						"chinese": "疯狂的欢迎即是死亡。切记。",
						"french": "L'accueil de la folie, c'est la mort. Garde ça en tête.",
						"spanish": "La bienvenida de la locura es la muerte. Recuérdalo.",
						"vietnamese": "Sự chào đón của sự điên rồ chính là cái chết. Hãy nhớ kỹ điều đó.",
						"thai": "การต้อนรับของความบ้าคลั่งคือความตาย จำไว้ให้ดี",
						"hindi": "पागलपन का स्वागत मृत्यु है। इसे याद रखना।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 450,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "…봤나. 저것들.",
						"english": "...Did you see them? Those things.",
						"japanese": "…見たか。あれを。",
						"chinese": "…看到了吗？那些东西。",
						"french": "...Tu as vu ? Ces choses.",
						"spanish": "...¿Las viste? Esas cosas.",
						"vietnamese": "...Thấy rồi chứ. Những thứ đó.",
						"thai": "...เห็นไหม? พวกมันน่ะ",
						"hindi": "...देखा उन्हें? वो चीजें।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우릴 부르는 것 같아.",
						"english": "They seem to be calling us.",
						"japanese": "私たちを呼んでいるようだ。",
						"chinese": "它们好像在呼唤我们。",
						"french": "Elles semblent nous appeler.",
						"spanish": "Parecen estar llamándonos.",
						"vietnamese": "Chúng dường như đang gọi chúng ta.",
						"thai": "พวกมันเหมือนกำลังเรียกเรา",
						"hindi": "वे हमें बुला रहे हैं, ऐसा लगता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "부르는 게 아니다. 잡아먹으려는 거지.",
						"english": "They're not calling. They're trying to devour us.",
						"japanese": "呼んでいるんじゃない。食い殺そうとしているんだ。",
						"chinese": "不是在呼唤。是想吞噬我们。",
						"french": "Elles n'appellent pas. Elles veulent nous dévorer.",
						"spanish": "No nos están llamando. Quieren devorarnos.",
						"vietnamese": "Không phải gọi đâu. Là muốn nuốt chửng chúng ta đấy.",
						"thai": "พวกมันไม่ได้เรียกหรอก พวกมันกำลังจะกินเราต่างหาก",
						"hindi": "वे बुला नहीं रहे हैं। वे हमें निगलने की कोशिश कर रहे हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "초대를… 거부하라고?",
						"english": "Refuse the... invitation?",
						"japanese": "招待を… 断るのか？",
						"chinese": "拒绝…邀请？",
						"french": "Refuser... l'invitation ?",
						"spanish": "¿Rechazar... la invitación?",
						"vietnamese": "Từ chối… lời mời ư?",
						"thai": "ให้ปฏิเสธ...คำเชิญเหรอ?",
						"hindi": "निमंत्रण को... मना कर दूं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "그래. 절대 손님이 되지 마라. 다음 차례는 우리야.",
						"english": "Right. Never become a guest. We're next.",
						"japanese": "そう。決して客になるな。次は私たちだ。",
						"chinese": "对。绝不能成为客人。下一个就是我们了。",
						"french": "Oui. Ne deviens jamais un invité. C'est notre tour.",
						"spanish": "Sí. Nunca te conviertas en un huésped. Somos los siguientes.",
						"vietnamese": "Đúng vậy. Đừng bao giờ trở thành khách. Đến lượt chúng ta rồi.",
						"thai": "ใช่. อย่าเป็นแขกเด็ดขาด. ตาต่อไปคือเรา.",
						"hindi": "हाँ। कभी मेहमान मत बनना। अगली बारी हमारी है。"
					}
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
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "시간이 없다. 저것들이 점점 다가오고 있어.",
						"english": "No time. They're getting closer.",
						"japanese": "時間がない。奴らが迫ってきている。",
						"chinese": "没时间了。它们越来越近了。",
						"french": "Plus le temps. Ils se rapprochent.",
						"spanish": "No hay tiempo. Se están acercando.",
						"vietnamese": "Không còn thời gian. Chúng đang đến gần.",
						"thai": "ไม่มีเวลาแล้ว. พวกมันเข้ามาใกล้ขึ้นเรื่อยๆ.",
						"hindi": "समय नहीं है। वे करीब आ रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 멈출 순 없어.",
						"english": "Can't stop here.",
						"japanese": "ここで止まるわけにはいかない。",
						"chinese": "不能停在这里。",
						"french": "Impossible de s'arrêter ici.",
						"spanish": "No podemos detenernos aquí.",
						"vietnamese": "Không thể dừng lại ở đây.",
						"thai": "หยุดตรงนี้ไม่ได้.",
						"hindi": "यहाँ रुक नहीं सकते।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "알아. 하지만… 절대 초대를 받지 마. 무슨 일이 있어도.",
						"english": "I know. But… never accept the invitation. No matter what.",
						"japanese": "分かってる。でも… 決して招待を受けるな。何があってもだ。",
						"chinese": "我知道。但是… 绝不能接受邀请。无论发生什么。",
						"french": "Je sais. Mais… n'accepte jamais l'invitation. Quoi qu'il arrive.",
						"spanish": "Lo sé. Pero… nunca aceptes la invitación. Pase lo que pase.",
						"vietnamese": "Tôi biết. Nhưng… đừng bao giờ chấp nhận lời mời. Dù có chuyện gì xảy ra đi nữa.",
						"thai": "ฉันรู้. แต่… อย่ารับคำเชิญเด็ดขาด. ไม่ว่าจะเกิดอะไรขึ้นก็ตาม.",
						"hindi": "मुझे पता है। लेकिन… कभी आमंत्रण स्वीकार मत करना। चाहे कुछ भी हो जाए।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_4",
					"content": {
						"korean": "죽으라는 소리잖아.",
						"english": "You're telling me to die.",
						"japanese": "死ねってことか。",
						"chinese": "那不是叫我去死吗？",
						"french": "C'est me dire de mourir.",
						"spanish": "Estás diciéndome que muera.",
						"vietnamese": "Ý anh là tôi phải chết sao.",
						"thai": "นั่นมันหมายความว่าให้ฉันตายไม่ใช่เหรอ.",
						"hindi": "इसका मतलब है मुझे मरना है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "죽음보다 더 끔찍한 게 될 거다.",
						"english": "It'll be worse than death.",
						"japanese": "死よりも恐ろしいことになるだろう。",
						"chinese": "那会比死亡更可怕。",
						"french": "Ce sera pire que la mort.",
						"spanish": "Será peor que la muerte.",
						"vietnamese": "Nó sẽ còn tệ hơn cả cái chết.",
						"thai": "มันจะเลวร้ายยิ่งกว่าความตาย.",
						"hindi": "यह मौत से भी बदतर होगा。"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 수정의 전당. 정체 모를 자가 기다리고 있었다.",
						"english": "A grand hall of crystals. An unknown entity awaited.",
						"japanese": "巨大な水晶の広間。正体不明の者が待ち構えていた。",
						"chinese": "巨大的水晶大厅。一个不明身份的实体正在等候。",
						"french": "Une immense salle de cristaux. Une entité inconnue attendait.",
						"spanish": "Un vasto salón de cristales. Una entidad desconocida esperaba.",
						"vietnamese": "Một đại sảnh pha lê khổng lồ. Một thực thể vô danh đang chờ đợi.",
						"thai": "โถงคริสตัลขนาดใหญ่. สิ่งมีชีวิตที่ไม่รู้จักกำลังรออยู่.",
						"hindi": "स्फटिकों का एक भव्य कक्ष। एक अज्ञात सत्ता प्रतीक्षा कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔구나. 나의 새로운… 손님들.",
						"english": "You've arrived. My new… guests.",
						"japanese": "来たな。私の新たな… 客たちよ。",
						"chinese": "你们来了。我的新… 客人们。",
						"french": "Vous êtes venus. Mes nouveaux… invités.",
						"spanish": "Han llegado. Mis nuevos… huéspedes.",
						"vietnamese": "Các ngươi đã đến rồi. Những… vị khách mới của ta.",
						"thai": "มาแล้วสินะ. แขกคนใหม่ของข้า…",
						"hindi": "तुम आ गए। मेरे नए… मेहमान।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "들었지? 절대 이 환대에 넘어가지 마라!",
						"english": "Did you hear that? Don't fall for this hospitality!",
						"japanese": "聞いたか？この歓待に決して惑わされるな！",
						"chinese": "听到了吗？绝不能被这份款待迷惑！",
						"french": "Tu as entendu ? Ne te laisse pas berner par cette hospitalité !",
						"spanish": "¿Oíste? ¡Nunca caigas en esta hospitalidad!",
						"vietnamese": "Nghe thấy chứ? Đừng bao giờ bị sự hiếu khách này lừa gạt!",
						"thai": "ได้ยินไหม? อย่าหลงกลการต้อนรับนี้เด็ดขาด!",
						"hindi": "सुना तुमने? इस आतिथ्य के जाल में मत फँसना!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "누가 너 같은 거랑 만찬을 해?",
						"english": "Who'd dine with the likes of you?",
						"japanese": "誰が貴様のような者と晩餐を共にするか？",
						"chinese": "谁会和你这种家伙共进晚餐？",
						"french": "Qui dînerait avec un être comme toi ?",
						"spanish": "¿Quién cenaría con alguien como tú?",
						"vietnamese": "Ai lại đi ăn tối với kẻ như ngươi chứ?",
						"thai": "ใครจะกินข้าวเย็นกับคนอย่างแกกัน?",
						"hindi": "तुम्हारे जैसे के साथ कौन खाना खाएगा?"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자가 쓰러졌다. 수정 속 얼굴들이 잠시 흔들렸다.",
						"english": "The unknown entity has fallen. Faces in the crystal shimmered briefly.",
						"japanese": "正体不明の者が倒れた。水晶の顔が一時揺らいだ。",
						"chinese": "未知之人倒下了。水晶中的面孔短暂地晃动了一下。",
						"french": "L'inconnu est tombé. Les visages dans le cristal ont vacillé un instant.",
						"spanish": "El desconocido ha caído. Los rostros en el cristal se agitaron brevemente.",
						"vietnamese": "Kẻ lạ mặt đã gục ngã. Những khuôn mặt trong tinh thể thoáng rung động.",
						"thai": "ผู้ไม่ประสงค์ออกนามล้มลงแล้ว ใบหน้าในผลึกสั่นไหวชั่วขณะ",
						"hindi": "अज्ञात व्यक्ति गिर गया। क्रिस्टल में चेहरे थोड़ी देर के लिए हिल गए।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 것들. 이미… 시작되었는데.",
						"english": "...Fools. It has already... begun.",
						"japanese": "…愚か者め。もう…始まっているのに。",
						"chinese": "……愚蠢的东西。已经……开始了。",
						"french": "...Imbéciles. C'est déjà... commencé.",
						"spanish": "...Necios. Ya... ha comenzado.",
						"vietnamese": "...Lũ ngốc. Nó đã... bắt đầu rồi.",
						"thai": "...พวกโง่. มัน...เริ่มแล้ว",
						"hindi": "...मूर्ख। यह तो पहले ही... शुरू हो चुका है।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "boris"
				},
				{
					"emotion": "happy",
					"speaker": "boris",
					"content": {
						"korean": "우린 네 손님이 될 리 없다. 영원히.",
						"english": "We will never be your guests. Never.",
						"japanese": "我々がお前の客になることなどない。永遠に。",
						"chinese": "我们绝不会成为你的客人。永远不会。",
						"french": "Nous ne serons jamais tes invités. Jamais.",
						"spanish": "Nunca seremos tus invitados. Jamás.",
						"vietnamese": "Chúng ta sẽ không bao giờ là khách của ngươi. Mãi mãi.",
						"thai": "เราจะไม่มีวันเป็นแขกของเจ้า ตลอดไป",
						"hindi": "हम कभी भी तुम्हारे मेहमान नहीं बनेंगे। कभी नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니라는 건가?",
						"english": "This isn't the end, is it?",
						"japanese": "これが終わりではないのか？",
						"chinese": "这不是结局吗？",
						"french": "Ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่จุดจบใช่ไหม?",
						"hindi": "क्या यह अंत नहीं है?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 만찬은 끝나지 않았다. 광기는 다른 형태로 다가올 뿐.",
						"english": "The ice banquet isn't over. Madness merely takes another form.",
						"japanese": "氷の饗宴は終わっていない。狂気はただ別の形で現れるだけだ。",
						"chinese": "冰之盛宴尚未结束。疯狂只会以另一种形式降临。",
						"french": "Le festin de glace n'est pas terminé. La folie prendra simplement une autre forme.",
						"spanish": "El banquete de hielo no ha terminado. La locura solo llegará en otra forma.",
						"vietnamese": "Bữa tiệc băng chưa kết thúc. Sự điên rồ sẽ chỉ đến dưới một hình thức khác.",
						"thai": "งานเลี้ยงน้ำแข็งยังไม่จบสิ้น ความบ้าคลั่งจะมาในรูปแบบอื่นเท่านั้น",
						"hindi": "बर्फ़ीला भोज समाप्त नहीं हुआ है। पागलपन बस दूसरे रूप में आएगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 자의 힘에 탐험대가 쓰러졌다. 수정 속 얼굴들이 만족한 듯 빛났다.",
						"english": "The expedition fell to the power of the unknown entity. Faces in the crystal glowed with satisfaction.",
						"japanese": "正体不明の者の力に探検隊は倒れた。水晶の中の顔は満足げに輝いた。",
						"chinese": "探险队倒在了未知之人的力量下。水晶中的面孔满意地闪耀着。",
						"french": "L'expédition est tombée sous le pouvoir de l'entité inconnue. Les visages dans le cristal brillaient de satisfaction.",
						"spanish": "La expedición cayó ante el poder del desconocido. Los rostros en el cristal brillaron con satisfacción.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh của kẻ lạ mặt. Những khuôn mặt trong tinh thể phát sáng đầy mãn nguyện.",
						"thai": "คณะสำรวจล้มลงด้วยพลังของผู้ไม่ประสงค์ออกนาม ใบหน้าในผลึกเปล่งประกายอย่างพึงพอใจ",
						"hindi": "अज्ञात व्यक्ति की शक्ति के सामने अभियान दल गिर गया। क्रिस्टल में चेहरे संतुष्टि से चमक उठे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 모두 나의 손님이 될 뿐.",
						"english": "In the end... all will merely become my guests.",
						"japanese": "結局…皆、私の客になるだけだ。",
						"chinese": "最终……所有人都只会成为我的客人。",
						"french": "Au final... tous deviendront simplement mes invités.",
						"spanish": "Al final... todos se convertirán simplemente en mis invitados.",
						"vietnamese": "Cuối cùng... tất cả sẽ chỉ trở thành khách của ta thôi.",
						"thai": "สุดท้ายแล้ว... ทุกคนก็แค่เป็นแขกของฉัน",
						"hindi": "अंत में... सभी मेरे मेहमान ही बनेंगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没……结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún... no ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
