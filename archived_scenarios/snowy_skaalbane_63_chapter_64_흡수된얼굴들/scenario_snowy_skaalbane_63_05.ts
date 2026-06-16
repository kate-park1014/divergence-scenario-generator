export const scenario_snowy_skaalbane_63_05 = {
	"scenario_id": "snowy_skaalbane_63_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_108"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음벽이 투명하게 빛났다. 그 안에는 수천 개의 얼굴이 영원히 멈춘 채 떠 있었다.",
						"english": "The ice wall shone transparently. Inside, thousands of faces floated, frozen forever.",
						"japanese": "氷壁は透明に輝いた。その中には、何千もの顔が永遠に停止したまま浮かんでいた。",
						"chinese": "冰墙透明地闪耀着。里面，数千张面孔永远静止地漂浮着。",
						"french": "Le mur de glace brillait de façon transparente. À l'intérieur, des milliers de visages flottaient, figés pour l'éternité.",
						"spanish": "La pared de hielo brillaba transparentemente. Dentro, miles de rostros flotaban, congelados para siempre.",
						"vietnamese": "Bức tường băng trong suốt phát sáng. Bên trong, hàng ngàn khuôn mặt lơ lửng, vĩnh viễn đóng băng.",
						"thai": "กำแพงน้ำแข็งส่องประกายโปร่งใส ภายในมีใบหน้านับพันลอยนิ่งอยู่ชั่วนิรันดร์",
						"hindi": "बर्फीली दीवार पारदर्शी रूप से चमक रही थी। अंदर, हजारों चेहरे हमेशा के लिए जमे हुए तैर रहे थे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 다 뭐야?",
						"english": "What… is all this?",
						"japanese": "これ…一体何だ？",
						"chinese": "这…都是什么？",
						"french": "Qu'est-ce que… tout ça ?",
						"spanish": "¿Qué… es todo esto?",
						"vietnamese": "Cái này… là gì vậy?",
						"thai": "นี่มัน…อะไรกัน?",
						"hindi": "ये सब… क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "이 비명… 들려? 슬퍼.",
						"english": "That scream… do you hear it? It's sad.",
						"japanese": "あの悲鳴…聞こえる？悲しい。",
						"chinese": "这尖叫声…你听到了吗？好悲伤。",
						"french": "Ce cri… tu l'entends ? C'est triste.",
						"spanish": "Ese grito… ¿lo oyes? Es triste.",
						"vietnamese": "Tiếng hét đó… bạn có nghe thấy không? Thật buồn.",
						"thai": "เสียงกรีดร้องนั้น…ได้ยินไหม? เศร้าจัง.",
						"hindi": "वो चीख… सुनाई दी? दुखद है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼굴들이 전부 한 방향으로 기울어져 있어. 마치… 어디론가 빨려가는 것 같아.",
						"english": "All the faces are tilted in one direction. As if… being sucked somewhere.",
						"japanese": "全ての顔が一方向へ傾いている。まるで…どこかに吸い込まれていくようだ。",
						"chinese": "所有的脸都朝一个方向倾斜。仿佛…被吸向某个地方。",
						"french": "Tous les visages sont penchés dans une seule direction. Comme s'ils… étaient aspirés quelque part.",
						"spanish": "Todos los rostros están inclinados en una dirección. Como si… fueran absorbidos a algún lugar.",
						"vietnamese": "Tất cả các khuôn mặt đều nghiêng về một hướng. Cứ như… đang bị hút vào đâu đó.",
						"thai": "ใบหน้าทั้งหมดเอียงไปทางเดียวกัน ราวกับว่า…กำลังถูกดูดไปที่ไหนสักแห่ง.",
						"hindi": "सारे चेहरे एक ही दिशा में झुके हुए हैं। जैसे… कहीं खींचे जा रहे हों।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "inka",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 사람들… 옷차림이 다 달라. 다른 시대의 사람들이야.",
						"english": "These people… their clothes are all different. They're from different eras.",
						"japanese": "この人たち…服装が皆違う。異なる時代の人間だ。",
						"chinese": "这些人…穿着各不相同。他们来自不同的时代。",
						"french": "Ces gens… leurs vêtements sont tous différents. Ils viennent d'époques différentes.",
						"spanish": "Esta gente… su ropa es toda diferente. Son de distintas épocas.",
						"vietnamese": "Những người này… trang phục đều khác nhau. Họ đến từ những thời đại khác nhau.",
						"thai": "คนพวกนี้…เสื้อผ้าต่างกันหมดเลย. เป็นคนจากยุคสมัยที่ต่างกัน.",
						"hindi": "ये लोग… सबके कपड़े अलग-अलग हैं। अलग-अलग युगों के लोग हैं।"
					},
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다 같은 탑에? 수천 년에 걸쳐….",
						"english": "All in the same tower? Over thousands of years…",
						"japanese": "皆同じ塔に？数千年に渡って…。",
						"chinese": "都 S在同一座塔里？跨越了数千年…",
						"french": "Tous dans la même tour ? Sur des milliers d'années…",
						"spanish": "¿Todos en la misma torre? A lo largo de miles de años…",
						"vietnamese": "Tất cả trong cùng một tòa tháp? Trải qua hàng ngàn năm…",
						"thai": "ทั้งหมดอยู่ในหอคอยเดียวกันเหรอ? ตลอดหลายพันปี…",
						"hindi": "सब एक ही मीनार में? हजारों सालों से…।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이들은… 삼켜진 거야. 탑에게.",
						"english": "They… were swallowed. By the tower.",
						"japanese": "彼らは…飲み込まれたんだ。塔に。",
						"chinese": "他们…被吞噬了。被塔。",
						"french": "Ils… ont été engloutis. Par la tour.",
						"spanish": "Ellos… fueron tragados. Por la torre.",
						"vietnamese": "Họ… đã bị nuốt chửng. Bởi tòa tháp.",
						"thai": "พวกเขา…ถูกกลืนกิน โดยหอคอย.",
						"hindi": "इन्हें… निगल लिया गया है। मीनार ने।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "가슴이 아파… 저들의 절규가 나한테 스며들어.",
						"english": "My chest aches… their screams seep into me.",
						"japanese": "胸が痛む…彼らの叫びが私に染み込んでくる。",
						"chinese": "心好痛…他们的绝望渗入我的内心。",
						"french": "J'ai mal à la poitrine… leurs cris s'infiltrent en moi.",
						"spanish": "Me duele el pecho… sus lamentos se filtran en mí.",
						"vietnamese": "Ngực tôi đau quá… tiếng thét của họ thấm vào tôi.",
						"thai": "เจ็บหน้าอก…เสียงกรีดร้องของพวกเขาซึมซับเข้ามาในตัวฉัน.",
						"hindi": "सीने में दर्द है… उनकी चीखें मुझमें समा रही हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 비명에 오래 노출되면… 우리도 홀릴지 몰라.",
						"english": "If we're exposed to those screams for too long… we might get entranced too.",
						"japanese": "あの悲鳴に長く晒されると…私たちも惑わされるかもしれない。",
						"chinese": "如果长时间暴露在那尖叫声中…我们也可能会被迷惑。",
						"french": "Si nous sommes exposés longtemps à ces cris… nous pourrions aussi être ensorcelés.",
						"spanish": "Si nos exponemos mucho a esos gritos… nosotros también podríamos ser seducidos.",
						"vietnamese": "Nếu tiếp xúc với tiếng hét đó quá lâu… chúng ta cũng có thể bị mê hoặc.",
						"thai": "ถ้าอยู่กับเสียงกรีดร้องนานเกินไป…เราก็อาจจะถูกหลอกได้เหมือนกัน.",
						"hindi": "अगर उन चीखों के संपर्क में ज्यादा देर रहे… तो हम भी मोहित हो सकते हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "두려워할 때가 아니야. 저들의 고통을 봐야 해.",
						"english": "This is no time for fear. We must see their suffering.",
						"japanese": "恐れている場合じゃない。彼らの苦痛を見なければ。",
						"chinese": "现在不是害怕的时候。我们必须正视他们的痛苦。",
						"french": "Ce n'est pas le moment d'avoir peur. Nous devons voir leur souffrance.",
						"spanish": "No es momento de tener miedo. Debemos ver su sufrimiento.",
						"vietnamese": "Đây không phải lúc để sợ hãi. Chúng ta phải nhìn vào nỗi đau của họ.",
						"thai": "ไม่ใช่เวลาที่จะต้องกลัว. เราต้องมองเห็นความเจ็บปวดของพวกเขา.",
						"hindi": "डरने का समय नहीं है। हमें उनके दुख को देखना होगा।"
					},
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탑은 침묵했지만, 그 안의 절규는 더욱 커져갔다.",
						"english": "The tower was silent, but the screams within grew louder.",
						"japanese": "塔は沈黙したが、その中の絶叫は一層大きくなっていった。",
						"chinese": "塔保持着沉默，但其中的绝望哭喊声却越来越大。",
						"french": "La tour était silencieuse, mais les hurlements à l'intérieur s'amplifiaient.",
						"spanish": "La torre estaba en silencio, pero los gritos en su interior se hicieron más fuertes.",
						"vietnamese": "Tòa tháp im lặng, nhưng tiếng thét tuyệt vọng bên trong càng lúc càng lớn.",
						"thai": "หอคอยเงียบงัน แต่เสียงกรีดร้องภายในกลับยิ่งดังขึ้น.",
						"hindi": "मीनार शांत थी, लेकिन उसके अंदर की चीखें और तेज होती गईं।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저기 봐. 안쪽의 얼굴들은 형체가 흐려졌어. 탑이랑 하나가 된 것 같아.",
						"english": "Look. The faces within are blurred, merged with the tower.",
						"japanese": "見て。中の顔がぼやけてる。塔と一体になったみたい。",
						"chinese": "看。里面的面孔模糊了。它们似乎和塔融为一体了。",
						"french": "Regarde. Les visages à l'intérieur sont flous. Ils semblent ne faire qu'un avec la tour.",
						"spanish": "Mira. Los rostros de dentro están borrosos. Parecen haberse fusionado con la torre.",
						"vietnamese": "Nhìn kìa. Những khuôn mặt bên trong mờ ảo. Dường như đã hòa làm một với tòa tháp.",
						"thai": "ดูนั่นสิ ใบหน้าข้างในเลือนลางไปแล้ว ดูเหมือนจะรวมเป็นหนึ่งเดียวกับหอคอย",
						"hindi": "देखो। अंदर के चेहरे धुंधले हो गए हैं। ऐसा लगता है जैसे वे मीनार से एक हो गए हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흡수된 자들… 완전히 동화된 거야?",
						"english": "The absorbed ones... completely assimilated?",
						"japanese": "吸収された者たち…完全に同化したの？",
						"chinese": "被吸收的人…完全同化了吗？",
						"french": "Ceux qui ont été absorbés... complètement assimilés ?",
						"spanish": "¿Los absorbidos... están completamente asimilados?",
						"vietnamese": "Những kẻ bị hấp thụ... đã hoàn toàn đồng hóa rồi sao?",
						"thai": "ผู้ที่ถูกดูดกลืน... กลายเป็นส่วนหนึ่งไปหมดแล้วหรือ?",
						"hindi": "शोषित हुए लोग... पूरी तरह से आत्मसात हो गए?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "탑은 무덤이 아니야. 죽음을 먹고 자라는 몸이야.",
						"english": "The tower isn't a tomb. It's a body that feeds on death, and grows.",
						"japanese": "塔は墓じゃない。死を喰らい、育つ体だ。",
						"chinese": "塔不是坟墓。它是一个吞噬死亡并成长的躯体。",
						"french": "La tour n'est pas une tombe. C'est un corps qui se nourrit de la mort et grandit.",
						"spanish": "La torre no es una tumba. Es un cuerpo que se alimenta de la muerte y crece.",
						"vietnamese": "Tòa tháp không phải là mộ. Nó là một cơ thể ăn cái chết và lớn lên.",
						"thai": "หอคอยไม่ใช่หลุมศพ แต่มันคือร่างกายที่กินความตายและเติบโต",
						"hindi": "मीनार कोई कब्र नहीं है। यह एक शरीर है जो मौत को खाकर बढ़ता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼… 우리가 이 탑을 멈추지 않으면….",
						"english": "Then... if we don't stop this tower...",
						"japanese": "じゃあ…私たちがこの塔を止めなければ…。",
						"chinese": "那么…如果我们不阻止这座塔…",
						"french": "Alors... si nous n'arrêtons pas cette tour...",
						"spanish": "Entonces... si no detenemos esta torre...",
						"vietnamese": "Vậy thì... nếu chúng ta không ngăn chặn tòa tháp này...",
						"thai": "ถ้าอย่างนั้น... ถ้าเราไม่หยุดหอคอยนี้...",
						"hindi": "तो... अगर हम इस मीनार को नहीं रोकते तो..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "또 다른 비명이… 이곳에 갇힐 거야.",
						"english": "Another scream... will be trapped here.",
						"japanese": "また別の悲鳴が…ここに閉じ込められるだろう。",
						"chinese": "又一声尖叫…将囚禁于此。",
						"french": "Un autre cri... sera piégé ici.",
						"spanish": "Otro grito... quedará atrapado aquí.",
						"vietnamese": "Một tiếng hét khác... sẽ bị giam cầm ở đây.",
						"thai": "เสียงกรีดร้องอื่น... จะถูกขังอยู่ที่นี่",
						"hindi": "एक और चीख... यहीं फंस जाएगी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 핵이 모습을 드러냈다. 그 안에서, 수천의 절규가 들려왔다.",
						"english": "A colossal ice core revealed itself. From within, thousands of screams echoed.",
						"japanese": "巨大な氷の核が姿を現した。その中から、数千の絶叫が聞こえてきた。",
						"chinese": "一个巨大的冰核显现出来。其中，传来数千声绝望的尖叫。",
						"french": "Un noyau de glace colossal apparut. De son sein, des milliers de hurlements s'échappèrent.",
						"spanish": "Un colosal núcleo de hielo se reveló. Desde su interior, miles de gritos se escucharon.",
						"vietnamese": "Một lõi băng khổng lồ hiện ra. Từ bên trong, hàng ngàn tiếng kêu gào vọng lại.",
						"thai": "แกนน้ำแข็งขนาดยักษ์ปรากฏขึ้น จากภายในนั้น เสียงกรีดร้องนับพันดังขึ้น",
						"hindi": "एक विशालकाय बर्फीला कोर प्रकट हुआ। उसके भीतर से, हज़ारों चीखें सुनाई दीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왔구나… 새로운 먹잇감들이.",
						"english": "You've come... new prey.",
						"japanese": "来たな…新たな獲物が。",
						"chinese": "来了啊…新的猎物。",
						"french": "Vous êtes venus... nouvelles proies.",
						"spanish": "Han llegado... nuevas presas.",
						"vietnamese": "Đã đến rồi... những con mồi mới.",
						"thai": "มาแล้วสินะ... เหยื่อรายใหม่",
						"hindi": "तुम आ गए... नए शिकार।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "inka"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신은… 이들의 고통을….",
						"english": "You... their suffering...",
						"japanese": "あなたは…彼らの苦痛を…。",
						"chinese": "你…这些人的痛苦…",
						"french": "Vous... leur souffrance...",
						"spanish": "Tú... el dolor de ellos...",
						"vietnamese": "Ngươi... nỗi đau của những kẻ này...",
						"thai": "เจ้า... ความทุกข์ทรมานของพวกเขา...",
						"hindi": "तुम... इनका दर्द..."
					},
					"speaker": "inka"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이 고통이… 나를 키웠다. 너희의 절규도 곧 나의 일부가 되리라.",
						"english": "This pain... nurtured me. Your screams too will soon become a part of me.",
						"japanese": "この苦痛が…私を育てた。お前たちの絶叫もすぐに私の M一部となるだろう。",
						"chinese": "这份痛苦…滋养了我。你们的绝望尖叫也将很快成为我的一部分。",
						"french": "Cette douleur... m'a nourri. Vos cris deviendront bientôt une partie de moi.",
						"spanish": "Este dolor... me nutrió. Vuestros gritos también se convertirán pronto en parte de mí.",
						"vietnamese": "Nỗi đau này... đã nuôi dưỡng ta. Tiếng thét của các ngươi cũng sẽ sớm trở thành một phần của ta.",
						"thai": "ความเจ็บปวดนี้... หล่อเลี้ยงข้า เสียงกรีดร้องของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า",
						"hindi": "इस दर्द ने... मुझे पाला है। तुम्हारी चीखें भी जल्द ही मेरा हिस्सा बन जाएंगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 너의 먹이가 될 줄 알아?",
						"english": "You think we'll be your prey?",
						"japanese": "私たちがあなたの餌になると思うのか？",
						"chinese": "你以为我们会成为你的猎物吗？",
						"french": "Penses-tu que nous serons ta proie ?",
						"spanish": "¿Crees que seremos tu presa?",
						"vietnamese": "Ngươi nghĩ chúng ta sẽ trở thành con mồi của ngươi sao?",
						"thai": "เจ้าคิดว่าเราจะเป็นเหยื่อของเจ้าหรือ?",
						"hindi": "क्या तुम्हें लगता है कि हम तुम्हारा शिकार बन जाएंगे?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리는 삼켜졌다… 우리의 마지막 비명이, 이것의 일부가 되었다… 너희도… 곧 알게 되리라.",
						"english": "We were swallowed... Our last screams became part of it... You too... will soon know.",
						"japanese": "我々は飲み込まれた… 我々の最後の叫びが、これの一部となった… お前たちも… すぐに知るだろう。",
						"chinese": "我们被吞噬了……我们最后的尖叫，成为了它的一部分……你们也……很快就会知道。",
						"french": "Nous avons été engloutis... Nos derniers cris sont devenus une partie de cela... Vous aussi... le saurez bientôt.",
						"spanish": "Fuimos engullidos... Nuestros últimos gritos se convirtieron en parte de esto... Vosotros también... pronto lo sabréis.",
						"vietnamese": "Chúng ta đã bị nuốt chửng... Tiếng hét cuối cùng của chúng ta đã trở thành một phần của nó... Các ngươi cũng... sẽ sớm biết thôi.",
						"thai": "เราถูกกลืนกิน... เสียงกรีดร้องสุดท้ายของเรา กลายเป็นส่วนหนึ่งของมัน... พวกเจ้าเองก็... จะได้รู้ในไม่ช้า",
						"hindi": "हमें निगल लिया गया... हमारी आखिरी चीखें, इसका हिस्सा बन गईं... तुम भी... जल्द ही जान जाओगे।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "멈춰! 이 고통을… 더 이상….",
						"english": "Stop! This pain... no more...",
						"japanese": "やめろ！この苦痛を…もうこれ以上は…",
						"chinese": "住手！这痛苦……不能再忍受了……",
						"french": "Arrêtez ! Cette douleur... plus jamais...",
						"spanish": "¡Detente! Este dolor... no más...",
						"vietnamese": "Dừng lại! Nỗi đau này... không thể nữa rồi...",
						"thai": "หยุดนะ! ความเจ็บปวดนี้... ไม่ไหวแล้ว...",
						"hindi": "रुको! यह दर्द... और नहीं..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 연민이군. 맛있는 먹이가 되겠어.",
						"english": "Pitiful empathy. You'll make a delicious meal.",
						"japanese": "取るに足らない哀れみだな。美味い餌になるだろう。",
						"chinese": "可怜的同情心。会成为美味的食物。",
						"french": "Piètre compassion. Tu feras un délicieux repas.",
						"spanish": "Lástima insignificante. Serás una presa deliciosa.",
						"vietnamese": "Thương hại hèn mọn. Ngươi sẽ là một bữa ăn ngon.",
						"thai": "ความเห็นอกเห็นใจที่น่าสมเพช. เจ้าจะเป็นอาหารอันโอชะ.",
						"hindi": "तुच्छ दया। स्वादिष्ट भोजन बनोगे।"
					},
					"speaker": "boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 핵이 산산조각 났다. 수천 개의 얼굴이 눈을 떴다.",
						"english": "The ice core shattered. Thousands of faces opened their eyes.",
						"japanese": "氷の核が粉々に砕けた。数千の顔が目を開けた。",
						"chinese": "冰核碎裂了。数千张脸睁开了眼睛。",
						"french": "Le cœur de glace s'est brisé. Des milliers de visages ont ouvert les yeux.",
						"spanish": "El núcleo de hielo se hizo añicos. Miles de rostros abrieron los ojos.",
						"vietnamese": "Lõi băng vỡ tan. Hàng ngàn khuôn mặt mở mắt.",
						"thai": "แกนน้ำแข็งแตกเป็นเสี่ยงๆ. ใบหน้าหลายพันคู่ลืมตาขึ้นมา.",
						"hindi": "बर्फ का कोर टूट गया। हजारों चेहरों ने आंखें खोलीं।"
					}
				},
				{
					"content": {
						"korean": "끝이라 생각하나… 어리석은 것들… 이 절규는… 사라지지 않아….",
						"english": "Do you think this is the end... You fools... This scream... will not fade...",
						"japanese": "終わりだと思うか… 愚か者め… この絶叫は… 消えぬ…",
						"chinese": "你以为结束了吗……愚蠢的东西……这尖叫……不会消失……",
						"french": "Croyez-vous que c'est la fin... Imbéciles... Ce hurlement... ne disparaîtra pas...",
						"spanish": "¿Crees que es el final...? Necios... Este grito... no desaparecerá...",
						"vietnamese": "Ngươi nghĩ đây là kết thúc sao... Lũ ngốc... Tiếng gào thét này... sẽ không biến mất...",
						"thai": "คิดว่านี่คือจุดจบงั้นหรือ... เจ้าพวกโง่... เสียงกรีดร้องนี้... จะไม่มีวันหายไป...",
						"hindi": "क्या तुम्हें लगता है कि यह अंत है... मूर्खों... यह चीख... मिटेगी नहीं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "비록 너는 쓰러졌지만… 이 비명은… 아직 남아있어.",
						"english": "Though you have fallen... this scream... still remains.",
						"japanese": "たとえお前は倒れても… この悲鳴は… まだ残っている。",
						"chinese": "虽然你倒下了……但这尖叫……仍然存在。",
						"french": "Bien que tu sois tombé... ce cri... demeure toujours.",
						"spanish": "Aunque hayas caído... este grito... aún permanece.",
						"vietnamese": "Dù ngươi đã ngã xuống... tiếng thét này... vẫn còn đó.",
						"thai": "แม้ว่าเจ้าจะล้มลง... เสียงกรีดร้องนี้... ก็ยังคงอยู่.",
						"hindi": "हालांकि तुम गिर गए हो... यह चीख... अभी भी बाकी है।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이젠… 쉬세요….",
						"english": "Now... rest...",
						"japanese": "もう… お休みください…",
						"chinese": "现在……请安息吧……",
						"french": "Maintenant... reposez-vous...",
						"spanish": "Ahora... descansa...",
						"vietnamese": "Bây giờ... hãy nghỉ ngơi...",
						"thai": "ตอนนี้... พักผ่อนเถอะ...",
						"hindi": "अब... आराम करो..."
					},
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "탑은 다시 침묵했다. 그러나 얼음 속 절규는, 누군가의 마음속에 영원히 새겨졌다. 끝나지 않은 이야기처럼.",
						"english": "The tower fell silent again. But the screams in the ice were forever etched in someone's heart. Like an unfinished story.",
						"japanese": "塔は再び沈黙した。しかし、氷の中の絶叫は、誰かの心に永遠に刻み込まれた。終わらない物語のように。",
						"chinese": "塔再次陷入沉寂。然而，冰中的尖叫，却永远铭刻在某人的心中。如同一个未完待续的故事。",
						"french": "La tour retomba dans le silence. Mais les hurlements dans la glace furent gravés à jamais dans le cœur de quelqu'un. Comme une histoire inachevée.",
						"spanish": "La torre volvió a silenciarse. Pero los gritos en el hielo quedaron grabados para siempre en el corazón de alguien. Como una historia inconclusa.",
						"vietnamese": "Tháp lại chìm vào im lặng. Nhưng tiếng gào thét trong băng, đã vĩnh viễn khắc sâu trong lòng ai đó. Như một câu chuyện chưa kết thúc.",
						"thai": "หอคอยกลับเข้าสู่ความเงียบอีกครั้ง. แต่เสียงกรีดร้องในน้ำแข็ง ได้สลักอยู่ในใจของใครบางคนตลอดไป. ดุจเรื่องราวที่ยังไม่จบสิ้น.",
						"hindi": "टावर फिर से शांत हो गया। लेकिन बर्फ में चीखें, किसी के दिल में हमेशा के लिए अंकित हो गईं। एक अधूरी कहानी की तरह।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "탑의 얼음 핵이 다시 모든 것을 집어삼켰다. 절규가 더 커졌다.",
						"english": "The tower's ice core swallowed everything again. The screams grew louder.",
						"japanese": "塔の氷の核が再び全てを飲み込んだ。絶叫はさらに大きくなった。",
						"chinese": "塔的冰核再次吞噬了一切。尖叫声变得更大了。",
						"french": "Le cœur de glace de la tour a tout englouti à nouveau. Les hurlements s'amplifièrent.",
						"spanish": "El núcleo de hielo de la torre lo devoró todo de nuevo. Los gritos se hicieron más fuertes.",
						"vietnamese": "Lõi băng của tháp lại nuốt chửng mọi thứ. Tiếng gào thét trở nên lớn hơn.",
						"thai": "แกนน้ำแข็งของหอคอยกลืนกินทุกสิ่งอีกครั้ง. เสียงกรีดร้องดังขึ้น.",
						"hindi": "टावर के बर्फ के कोर ने फिर से सब कुछ निगल लिया। चीखें और तेज हो गईं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 연민은… 죽음을 부를 뿐. 나의 일부가 되어라.",
						"english": "Foolish pity... only brings death. Become a part of me.",
						"japanese": "愚かな哀れみは… 死を招くだけ。私の糧となれ。",
						"chinese": "愚蠢的怜悯……只会招致死亡。成为我的一部分吧。",
						"french": "La pitié stupide... n'apporte que la mort. Devenez une partie de moi.",
						"spanish": "La piedad tonta... solo trae la muerte. Conviértete en parte de mí.",
						"vietnamese": "Lòng thương hại ngu ngốc... chỉ mang lại cái chết. Hãy trở thành một phần của ta.",
						"thai": "ความสงสารที่โง่เขลา... นำมาซึ่งความตายเท่านั้น. จงมาเป็นส่วนหนึ่งของข้า.",
						"hindi": "मूर्खतापूर्ण दया... केवल मौत लाती है। मेरा हिस्सा बनो।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそ… まだ終わってない！",
						"chinese": "该死… 还没结束！",
						"french": "Merde... ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt... chưa xong đâu!",
						"thai": "บ้าจริง... ยังไม่จบ!",
						"hindi": "लानत है... यह अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리는… 멈추지 않아….",
						"english": "We... won't stop...",
						"japanese": "私たちは… 止まらない…",
						"chinese": "我们… 不会停止…",
						"french": "Nous… ne nous arrêterons pas…",
						"spanish": "Nosotros… no nos detendremos…",
						"vietnamese": "Chúng ta… sẽ không dừng lại…",
						"thai": "เรา... จะไม่หยุด...",
						"hindi": "हम… रुकेंगे नहीं…"
					},
					"speaker": "inka"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 절규가 탑을 감쌌다.",
			"그들은 누구였나. 어떻게 이곳에 갇혔나.",
			"진실은 잔혹하게, 얼음 너머에서 기다렸다.",
			"우리는 그들의 마지막 비명을 듣고 있었다."
		],
		"english": [
			"Frozen screams enveloped the tower.",
			"Who were they? How were they trapped here?",
			"The cruel truth awaited beyond the ice.",
			"We were hearing their last screams."
		],
		"japanese": [
			"凍てつく叫びが塔を包んだ。",
			"彼らは誰だったのか。どうしてここに囚われたのか。",
			"真実は残酷に、氷の向こうで待っていた。",
			"私たちは彼らの最後の悲鳴を聞いていた。"
		],
		"chinese": [
			"冻结的尖叫声萦绕着高塔。",
			"他们是谁？为何被困于此？",
			"残酷的真相在冰层彼端等候着。",
			"我们听到了他们最后的尖叫。"
		],
		"french": [
			"Des cris gelés enveloppaient la tour.",
			"Qui étaient-ils ? Comment furent-ils piégés ici ?",
			"La cruelle vérité attendait au-delà de la glace.",
			"Nous entendions leurs derniers cris."
		],
		"spanish": [
			"Gritos congelados envolvieron la torre.",
			"¿Quiénes eran? ¿Cómo quedaron atrapados aquí?",
			"La cruel verdad aguardaba más allá del hielo.",
			"Estábamos escuchando sus últimos gritos."
		],
		"vietnamese": [
			"Những tiếng thét đóng băng bao trùm tòa tháp.",
			"Họ là ai? Sao họ lại bị mắc kẹt ở đây?",
			"Sự thật tàn khốc chờ đợi phía bên kia băng giá.",
			"Chúng tôi đang nghe những tiếng thét cuối cùng của họ."
		],
		"thai": [
			"เสียงกรีดร้องที่เยือกแข็งโอบล้อมหอคอย",
			"พวกเขาคือใคร? ติดอยู่ที่นี่ได้อย่างไร?",
			"ความจริงอันโหดร้ายรออยู่หลังน้ำแข็ง",
			"เรากำลังได้ยินเสียงกรีดร้องสุดท้ายของพวกเขา"
		],
		"hindi": [
			"जमी हुई चीखें बुर्ज को घेरे हुए थीं।",
			"वे कौन थे? वे यहां कैसे फंसे?",
			"क्रूर सत्य बर्फ के पार इंतजार कर रहा था।",
			"हम उनकी आखिरी चीखें सुन रहे थे।"
		]
	},
	"epilogue": {
		"korean": [
			"탑의 얼음 핵은 조각났지만, 그 비명은 사라지지 않았다.",
			"인카는 그들의 마지막 고통을 가슴에 품었다.",
			"구원이었을까, 아니면 또 다른 침해였을까.",
			"침묵 속에서, 숲은 또 다른 진실을 감추고 있었다.",
			"우리는 여전히, 답을 찾고 있었다."
		],
		"english": [
			"The tower's ice core shattered, but the screams lingered.",
			"Inka carried their final agony in her heart.",
			"Was it salvation, or another transgression?",
			"In silence, the forest hid another truth.",
			"We were still searching for answers."
		],
		"japanese": [
			"塔の氷核は砕けたが、その悲鳴は消えなかった。",
			"インカは彼らの最後の苦痛を胸に抱いた。",
			"それは救済だったのか、それとも新たな侵害だったのか。",
			"沈黙の中、森はもう一つの真実を隠していた。",
			"私たちはまだ、答えを探していた。"
		],
		"chinese": [
			"塔的冰核碎裂，但尖叫声并未消散。",
			"因卡将他们最后的痛苦铭记于心。",
			"是救赎，还是又一次侵犯？",
			"在寂静中，森林隐藏着另一个真相。",
			"我们仍在寻找答案。"
		],
		"french": [
			"Le cœur de glace de la tour fut brisé, mais les cris perdurèrent.",
			"Inka porta leur dernière agonie dans son cœur.",
			"Était-ce une rédemption, ou une autre transgression ?",
			"Dans le silence, la forêt cachait une autre vérité.",
			"Nous cherchions toujours des réponses."
		],
		"spanish": [
			"El núcleo de hielo de la torre se hizo pedazos, pero los gritos persistieron.",
			"Inka llevó su agonía final en su corazón.",
			"¿Fue salvación, o una transgresión más?",
			"En silencio, el bosque ocultaba otra verdad.",
			"Seguíamos buscando respuestas."
		],
		"vietnamese": [
			"Lõi băng của tòa tháp vỡ nát, nhưng tiếng thét vẫn còn đó.",
			"Inka mang nỗi đau cuối cùng của họ trong tim.",
			"Đó là sự cứu rỗi, hay một sự vi phạm khác?",
			"Trong im lặng, khu rừng ẩn chứa một sự thật khác.",
			"Chúng tôi vẫn đang tìm kiếm câu trả lời."
		],
		"thai": [
			"แกนน้ำแข็งของหอคอยแตกสลาย แต่เสียงกรีดร้องยังคงอยู่",
			"อินคาแบกรับความเจ็บปวดสุดท้ายของพวกเขาไว้ในใจ",
			"มันคือความรอด หรือการล่วงละเมิดอีกครั้ง?",
			"ในความเงียบงัน ป่าได้ซ่อนความจริงอีกอย่างไว้",
			"เรายังคงค้นหาคำตอบอยู่"
		],
		"hindi": [
			"बुर्ज का बर्फीला कोर टूट गया, लेकिन चीखें बनी रहीं।",
			"इंका ने अपने अंतिम दर्द को अपने दिल में रखा।",
			"क्या यह मोक्ष था, या एक और अतिक्रमण?",
			"खामोशी में, जंगल ने एक और सच छिपा रखा था।",
			"हम अभी भी जवाब ढूंढ रहे थे।"
		]
	}
} as const;
