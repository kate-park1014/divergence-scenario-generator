export const scenario_snowy_skalhorn_95_05 = {
	"scenario_id": "snowy_skalhorn_95_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_110"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "오랜 여정의 끝. 광기의 뿔잔이 탐험대 앞에 거대한 그림자로 서 있었다.",
						"english": "The end of a long journey. The Horn of Madness stood before the expedition as a colossal shadow.",
						"japanese": "長き旅の終わり。狂気の角杯が探検隊の前に巨大な影となって立ちはだかっていた。",
						"chinese": "漫长旅程的终点。疯狂号角作为巨大的阴影立于探险队面前。",
						"french": "La fin d'un long voyage. La Corne de la Folie se dressait devant l'expédition telle une ombre colossale.",
						"spanish": "El fin de un largo viaje. El Cuerno de la Locura se alzaba ante la expedición como una sombra colosal.",
						"vietnamese": "Kết thúc một hành trình dài. Chiếc Sừng của Sự Điên Rồ đứng trước đoàn thám hiểm như một cái bóng khổng lồ.",
						"thai": "จุดจบของการเดินทางอันยาวนาน แตรปีศาจแห่งความบ้าคลั่งยืนตระหง่านอยู่เบื้องหน้าคณะสำรวจราวกับเงาอันมหึมา",
						"hindi": "एक लंबी यात्रा का अंत। पागलपन का हॉर्न एक विशाल छाया के रूप में अभियान के सामने खड़ा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게… 뿔잔인가?",
						"english": "Is that... a horn cup?",
						"japanese": "あれは… 角杯か？",
						"chinese": "那是……号角杯吗？",
						"french": "C'est... une corne à boire ?",
						"spanish": "¿Es eso... un cuerno para beber?",
						"vietnamese": "Đó là... một chiếc sừng uống rượu sao?",
						"thai": "นั่น... คือจอกเขาสัตว์หรือ?",
						"hindi": "क्या वह... एक सींग का प्याला है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "그래. 보기만 해도 역겹군. 저게 축제라고? 얼어붙은 비명에 불과해.",
						"english": "Yes. Just looking at it makes me sick. Is that a festival? It's nothing but frozen screams.",
						"japanese": "ああ。見るだけで吐き気がする。あれが祭りだと？凍りついた悲鳴に過ぎない。",
						"chinese": "是的。光是看着就让人作呕。那是节日吗？不过是凝固的尖叫罢了。",
						"french": "Oui. Rien que de voir ça me rend malade. C'est ça, une fête ? Ce ne sont que des cris gelés.",
						"spanish": "Sí. Solo verlo me da asco. ¿Eso es un festival? No es más que gritos congelados.",
						"vietnamese": "Phải. Nhìn thôi đã thấy ghê tởm. Đó là lễ hội ư? Chẳng qua chỉ là những tiếng thét đông cứng.",
						"thai": "ใช่. แค่เห็นก็ขยะแขยงแล้ว นั่นคืองานเทศกาลหรือ? มันก็แค่เสียงกรีดร้องที่แข็งตัวเท่านั้นเอง.",
						"hindi": "हाँ। उसे देखकर ही घिन आती है। क्या वह कोई त्योहार है? वह तो बस जमी हुई चीखें हैं।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "비명과 찬가가 섞여 들고 있어...",
						"english": "Screams and hymns are mixing...",
						"japanese": "悲鳴と賛歌が入り混じっている…",
						"chinese": "尖叫和赞歌混杂在一起……",
						"french": "Cris et hymnes se mêlent...",
						"spanish": "Gritos e himnos se mezclan...",
						"vietnamese": "Tiếng thét và thánh ca đang hòa lẫn vào nhau...",
						"thai": "เสียงกรีดร้องและเพลงสรรเสริญปะปนกัน...",
						"hindi": "चीखें और स्तोत्र मिल रहे हैं..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이미 시작된 만찬에 우릴 초대하려는 게 뻔해.",
						"english": "It's obvious they're trying to invite us to an already started banquet.",
						"japanese": "すでに始まった晩餐に、我々を招こうとしているのが明らかだ。",
						"chinese": "很明显，他们是想邀请我们参加一场已经开始的盛宴。",
						"french": "Il est évident qu'ils essaient de nous inviter à un banquet déjà commencé.",
						"spanish": "Es obvio que intentan invitarnos a un banquete ya empezado.",
						"vietnamese": "Rõ ràng là họ đang cố mời chúng ta đến một bữa tiệc đã bắt đầu.",
						"thai": "ชัดเจนว่าพวกเขากำลังพยายามเชิญเราไปงานเลี้ยงที่เริ่มไปแล้ว.",
						"hindi": "साफ है कि वे हमें एक पहले से शुरू हुई दावत में बुलाना चाहते हैं।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "하지만 우린 손님이 아니야.",
						"english": "But we are not guests.",
						"japanese": "しかし、我々は客ではない。",
						"chinese": "但我们不是客人。",
						"french": "Mais nous ne sommes pas des invités.",
						"spanish": "Pero no somos invitados.",
						"vietnamese": "Nhưng chúng ta không phải là khách.",
						"thai": "แต่เราไม่ใช่แขก.",
						"hindi": "पर हम मेहमान नहीं हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "boris",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "초대는 항상 달콤한 미끼였다. 그 끝은 결국 파멸이었지.",
						"english": "Invitations were always sweet bait. Their end was always ruin.",
						"japanese": "招待は常に甘い誘いだった。その結末はいつも破滅だった。",
						"chinese": "邀请总是甜蜜的诱饵。它的结局终归是毁灭。",
						"french": "Les invitations ont toujours été des appâts doux. Leur fin était toujours la ruine.",
						"spanish": "Las invitaciones siempre fueron un dulce cebo. Su final siempre fue la ruina.",
						"vietnamese": "Lời mời luôn là một cái bẫy ngọt ngào. Cuối cùng, đó luôn là sự hủy diệt.",
						"thai": "คำเชิญมักจะเป็นเหยื่อล่อที่หอมหวาน. จุดจบของมันคือความพินาศเสมอ.",
						"hindi": "निमंत्रण हमेशा एक मीठा चारा था। उसका अंत हमेशा बर्बादी थी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "보리스, 이번에도 그럴 거라 확신하는 거야?",
						"english": "Boris, are you sure it'll be the same this time?",
						"japanese": "ボリス、今回もそうだと確信しているのか？",
						"chinese": "鲍里斯，你确定这次也会是这样吗？",
						"french": "Boris, es-tu sûr que ce sera pareil cette fois ?",
						"spanish": "Boris, ¿estás seguro de que esta vez será igual?",
						"vietnamese": "Boris, anh có chắc lần này cũng sẽ như vậy không?",
						"thai": "บอริส, คุณแน่ใจหรือว่าครั้งนี้ก็จะเป็นแบบนั้น?",
						"hindi": "बोरिस, क्या तुम्हें यकीन है कि इस बार भी ऐसा ही होगा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "확신이 아니야. 경험이야. 저 광기는 널 영원히 가둘 뿐이야.",
						"english": "It's not certainty. It's experience. That madness will only trap you forever.",
						"japanese": "確信ではない。経験だ。あの狂気は、お前を永遠に閉じ込めるだけだ。",
						"chinese": "不是确信。是经验。那份疯狂只会将你永远囚禁。",
						"french": "Ce n'est pas de la certitude. C'est de l'expérience. Cette folie ne fera que t'emprisonner pour toujours.",
						"spanish": "No es certeza. Es experiencia. Esa locura solo te atrapará para siempre.",
						"vietnamese": "Không phải là chắc chắn. Đó là kinh nghiệm. Sự điên rồ đó sẽ chỉ giam cầm anh mãi mãi.",
						"thai": "ไม่ใช่ความแน่ใจ. มันคือประสบการณ์. ความบ้าคลั่งนั้นจะกักขังคุณไว้ตลอดไป.",
						"hindi": "यह निश्चितता नहीं है। यह अनुभव है। वह पागलपन तुम्हें हमेशा के लिए फंसा लेगा।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "만약 우리의 의지를 꺾으려 한다면...",
						"english": "If they try to break our will...",
						"japanese": "もし我々の意志を挫こうとするなら…",
						"chinese": "如果他们试图挫败我们的意志……",
						"french": "S'ils tentent de briser notre volonté...",
						"spanish": "Si intentan doblegar nuestra voluntad...",
						"vietnamese": "Nếu họ cố gắng bẻ gãy ý chí của chúng ta...",
						"thai": "ถ้าพวกเขาพยายามที่จะหักล้างเจตจำนงของเรา...",
						"hindi": "अगर वे हमारी इच्छाशक्ति को तोड़ने की कोशिश करते हैं..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 싸워야지. 손님이 되지 않는 유일한 방법이니까.",
						"english": "Then we must fight. Because that's the only way not to become guests.",
						"japanese": "ならば戦うしかない。客にならない唯一の方法だからな。",
						"chinese": "那就必须战斗。因为那是唯一不成为客人的方法。",
						"french": "Alors il faut se battre. Parce que c'est le seul moyen de ne pas devenir des invités.",
						"spanish": "Entonces debemos luchar. Porque es la única forma de no convertirnos en invitados.",
						"vietnamese": "Vậy thì phải chiến đấu. Vì đó là cách duy nhất để không trở thành khách.",
						"thai": "ถ้าอย่างนั้นเราก็ต้องสู้. เพราะนั่นเป็นวิธีเดียวที่จะไม่เป็นแขก.",
						"hindi": "तो हमें लड़ना होगा। क्योंकि यही एकमात्र तरीका है जिससे हम मेहमान नहीं बनेंगे।"
					},
					"type": "speech",
					"speaker": "boris"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "boris"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뿔잔 표면의 수정들이 섬뜩하게 빛났다.",
						"english": "The crystals on the horn cup's surface gleamed ominously.",
						"japanese": "角杯の表面の水晶が不気味に輝いた。",
						"chinese": "角杯表面的水晶不祥地闪烁着。",
						"french": "Les cristaux à la surface de la corne brillaient sinistrement.",
						"spanish": "Los cristales en la superficie del cuerno brillaban ominosamente.",
						"vietnamese": "Các tinh thể trên bề mặt chiếc sừng phát sáng một cách đáng sợ.",
						"thai": "ผลึกบนผิวเขาถ้วยส่องประกายชวนขนลุก",
						"hindi": "सींग के प्याले की सतह पर क्रिस्टल भयावह रूप से चमक रहे थे。"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "수정 속 얼굴들이… 우리를 보고 있어.",
						"english": "The faces in the crystals... they're watching us.",
						"japanese": "水晶の中の顔が…私たちを見ている。",
						"chinese": "水晶里的脸…在看着我们。",
						"french": "Les visages dans les cristaux… ils nous regardent.",
						"spanish": "Las caras en los cristales… nos están mirando.",
						"vietnamese": "Những gương mặt trong tinh thể… chúng đang nhìn chúng ta.",
						"thai": "ใบหน้าในผลึก…กำลังจ้องมองเราอยู่",
						"hindi": "क्रिस्टल में चेहरे... वे हमें देख रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 네가 다음 손님이란 뜻이지. 저것들처럼 얼어붙길 바라는 거야.",
						"english": "Yes. That means you're the next guest. They want you to freeze like them.",
						"japanese": "そうだ。お前が次の客という意味だ。あれらのように凍りつくことを望んでいるのだ。",
						"chinese": "没错。这意味着你就是下一个客人。它们希望你像它们一样冻结。",
						"french": "Oui. Cela signifie que tu es le prochain invité. Ils veulent que tu gèles comme eux.",
						"spanish": "Sí. Eso significa que eres el próximo invitado. Quieren que te congeles como ellos.",
						"vietnamese": "Đúng vậy. Điều đó có nghĩa là ngươi là vị khách tiếp theo. Chúng muốn ngươi đóng băng như chúng.",
						"thai": "ใช่ นั่นหมายความว่าเจ้าคือแขกคนต่อไป พวกมันต้องการให้เจ้าแข็งตายเหมือนพวกมัน",
						"hindi": "हाँ। इसका मतलब है कि आप अगले मेहमान हैं। वे चाहते हैं कि आप उनकी तरह जम जाएँ।"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad",
					"content": {
						"korean": "이것 봐. 모든 얼굴이 우리를 향하고 있어.",
						"english": "Look. Every face is turned toward us.",
						"japanese": "これを見ろ。全ての顔が我々に向かっている。",
						"chinese": "看。所有的脸都朝向我们。",
						"french": "Regarde. Tous les visages sont tournés vers nous.",
						"spanish": "Mira. Todas las caras están hacia nosotros.",
						"vietnamese": "Nhìn kìa. Tất cả các gương mặt đều hướng về phía chúng ta.",
						"thai": "ดูสิ ทุกใบหน้าหันมาทางเรา",
						"hindi": "देखो। हर चेहरा हमारी तरफ मुड़ा हुआ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "저게 저들의 '환영' 방식이다. 절대 받아들여선 안 돼.",
						"english": "That's their way of 'welcoming' us. We must never accept it.",
						"japanese": "あれが奴らの「歓迎」の仕方だ。決して受け入れてはならない。",
						"chinese": "那是它们“欢迎”的方式。我们绝不能接受。",
						"french": "C'est leur façon de nous 'accueillir'. Nous ne devons jamais l'accepter.",
						"spanish": "Esa es su forma de 'bienvenida'. Nunca debemos aceptarlo.",
						"vietnamese": "Đó là cách chúng 'chào đón'. Tuyệt đối không được chấp nhận.",
						"thai": "นั่นคือวิธี 'ต้อนรับ' ของพวกมัน เราต้องไม่ยอมรับมันเด็ดขาด",
						"hindi": "वह उनका 'स्वागत' करने का तरीका है। हमें इसे कभी स्वीकार नहीं करना चाहिए।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "boris",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "푸른 광채가 맹렬히 타오르고, 주변의 눈보라가 폭주하기 시작했다.",
						"english": "The blue radiance blazed furiously, and the surrounding blizzard began to rage.",
						"japanese": "青い光が猛烈に燃え盛り、周囲の吹雪が暴走し始めた。",
						"chinese": "蓝色光芒猛烈地燃烧，周围的暴风雪开始肆虐。",
						"french": "La radiance bleue flamboyait furieusement, et la tempête de neige environnante commença à faire rage.",
						"spanish": "El resplandor azul ardía furiosamente, y la tormenta de nieve circundante comenzó a descontrolarse.",
						"vietnamese": "Ánh sáng xanh bùng cháy dữ dội, và bão tuyết xung quanh bắt đầu hoành hành.",
						"thai": "แสงสีน้ำเงินลุกโชนอย่างรุนแรง และพายุหิมะรอบข้างก็เริ่มบ้าคลั่ง",
						"hindi": "नीली चमक उग्र रूप से जल रही थी, और आसपास का बर्फीला तूफान उग्र होने लगा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "공기가 얼어붙고 있어… 숨쉬기 힘들어.",
						"english": "The air is freezing... it's hard to breathe.",
						"japanese": "空気が凍りついている…息をするのが辛い。",
						"chinese": "空气正在结冰…呼吸困难。",
						"french": "L'air gèle… il est difficile de respirer.",
						"spanish": "El aire se está congelando… es difícil respirar.",
						"vietnamese": "Không khí đang đóng băng… thật khó thở.",
						"thai": "อากาศกำลังแข็งตัว…หายใจลำบาก",
						"hindi": "हवा जम रही है... साँस लेना मुश्किल है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "폭주하고 있어. 이젠 이성조차 없어 보이는군.",
						"english": "It's rampaging. It seems to have lost all reason now.",
						"japanese": "暴走している。もう理性すらなさそうだ。",
						"chinese": "它正在失控。现在看来它甚至失去了理智。",
						"french": "Il est enragé. Il semble avoir perdu toute raison maintenant.",
						"spanish": "Está descontrolado. Parece que ha perdido toda la razón ahora.",
						"vietnamese": "Nó đang bùng phát. Giờ đây dường như nó đã mất hết lý trí.",
						"thai": "มันกำลังอาละวาด ตอนนี้ดูเหมือนมันจะไร้ซึ่งเหตุผลแล้ว",
						"hindi": "यह अनियंत्रित हो रहा है। अब तो इसमें कोई समझदारी भी नहीं दिख रही है।"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "저 눈보라가… 모든 것을 집어삼키려 해.",
						"english": "That blizzard... it's trying to swallow everything.",
						"japanese": "あの吹雪が…全てを飲み込もうとしている。",
						"chinese": "那场暴风雪…它正试图吞噬一切。",
						"french": "Cette tempête de neige… elle essaie de tout engloutir.",
						"spanish": "Esa tormenta de nieve… está tratando de devorarlo todo.",
						"vietnamese": "Cơn bão tuyết đó… nó đang cố nuốt chửng mọi thứ.",
						"thai": "พายุหิมะนั่น…กำลังพยายามกลืนกินทุกสิ่ง",
						"hindi": "वह बर्फीला तूफान... सब कुछ निगलने की कोशिश कर रहा है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "더 이상 도망칠 곳은 없어. 이 광란의 만찬을 끝내야만 해.",
						"english": "There's no escape now. We must end this frenzied banquet.",
						"japanese": "もう逃げ場はない。この狂乱の宴を終わらせなければならない。",
						"chinese": "再也没有地方可逃了。我们必须结束这场疯狂的盛宴。",
						"french": "Il n'y a plus d'échappatoire. Nous devons mettre fin à ce banquet frénétique.",
						"spanish": "Ya no hay dónde escapar. Debemos poner fin a este frenético banquete.",
						"vietnamese": "Không còn nơi nào để trốn thoát nữa. Chúng ta phải kết thúc bữa tiệc điên loạn này.",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว เราต้องยุติงานเลี้ยงอันบ้าคลั่งนี้",
						"hindi": "अब और भागने की कोई जगह नहीं है। हमें इस उन्मत्त दावत को समाप्त करना होगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그래. 여기서 끝내자.",
						"english": "Right. Let's end this.",
						"japanese": "ああ。ここで終わらせよう。",
						"chinese": "好吧。到此为止吧。",
						"french": "Oui. Terminons-en ici.",
						"spanish": "Sí. Terminemos esto aquí.",
						"vietnamese": "Được. Kết thúc tại đây thôi.",
						"thai": "ใช่ จบมันตรงนี้แหละ",
						"hindi": "हाँ। यहीं ख़त्म करते हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "뿔잔이 격렬히 진동하며, 갇힌 영혼들의 비명과 왜곡된 찬가가 뒤섞여 울려 퍼졌다.",
						"english": "The horn violently vibrated, echoing with a mix of captive souls' screams and distorted hymns.",
						"japanese": "角杯が激しく振動し、囚われた魂たちの悲鳴と歪んだ賛歌が混じり合って響き渡った。",
						"chinese": "号角剧烈震动，囚禁灵魂的尖叫与扭曲的赞歌交织回荡。",
						"french": "Le cor vibrait violemment, résonnant d'un mélange de cris d'âmes captives et d'hymnes déformés.",
						"spanish": "El cuerno vibró violentamente, resonando con una mezcla de gritos de almas cautivas e himnos distorsionados.",
						"vietnamese": "Sừng rung lên dữ dội, tiếng la hét của những linh hồn bị giam cầm và những bài thánh ca méo mó hòa vào nhau vang vọng.",
						"thai": "เขาสั่นสะเทือนอย่างรุนแรง เสียงกรีดร้องของวิญญาณที่ถูกกักขังและเพลงสรรเสริญที่บิดเบี้ยวผสมผสานกันดังก้อง",
						"hindi": "सींग ज़ोर से कंपन करने लगा, जिसमें बंदी आत्माओं की चीखें और विकृत भजन गूँज उठे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "축복받으라! 나의 영원한 손님들이여!",
						"english": "Be blessed! My eternal guests!",
						"japanese": "祝福あれ！我が永遠の客たちよ！",
						"chinese": "蒙受祝福吧！我永恒的客人们！",
						"french": "Soyez bénis ! Mes invités éternels !",
						"spanish": "¡Sean benditos! ¡Mis invitados eternos!",
						"vietnamese": "Hãy được ban phước! Hỡi những vị khách vĩnh cửu của ta!",
						"thai": "จงได้รับพร! แขกผู้เป็นนิรันดร์ของข้า!",
						"hindi": "धन्य हो! मेरे शाश्वत मेहमानो!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "모든 고통은 눈 속에 묻히고, 모든 삶은 얼음 아래 영원히 노래하리라!",
						"english": "All suffering buried in snow, all life forever singing beneath the ice!",
						"japanese": "全ての苦痛は雪の中に埋もれ、全ての命は氷の下で永遠に歌うだろう！",
						"chinese": "所有苦痛皆埋于雪中，所有生命皆于冰下永恒歌唱！",
						"french": "Toute souffrance enterrée dans la neige, toute vie chantant éternellement sous la glace !",
						"spanish": "¡Todo sufrimiento enterrado en la nieve, toda vida cantando eternamente bajo el hielo!",
						"vietnamese": "Mọi đau khổ sẽ chôn vùi trong tuyết, mọi sự sống sẽ mãi mãi ca hát dưới băng!",
						"thai": "ความทุกข์ทรมานทั้งมวลจะถูกฝังในหิมะ ชีวิตทั้งปวงจะขับขานนิรันดร์ใต้ธารน้ำแข็ง!",
						"hindi": "सारा दुख बर्फ में दफन हो जाए, सारी ज़िंदगी बर्फ के नीचे हमेशा गाती रहे!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장! 저 광기!",
						"english": "Damn it! That madness!",
						"japanese": "くそっ！あの狂気め！",
						"chinese": "该死！那疯劲！",
						"french": "Maudit ! Cette folie !",
						"spanish": "¡Maldita sea! ¡Esa locura!",
						"vietnamese": "Chết tiệt! Sự điên rồ đó!",
						"thai": "บ้าจริง! ความบ้าคลั่งนั่น!",
						"hindi": "धिक्कार है! वह पागलपन!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "이 얼음 찬미를 받아들여라! …환영하노라, 나의 성대한 얼음 만찬에!",
						"english": "Accept this ice hymn! ...Welcome, to my grand ice feast!",
						"japanese": "この氷の賛歌を受け入れよ！…歓迎する、我が壮大な氷の饗宴へ！",
						"chinese": "接受这冰之赞歌吧！……欢迎来到，我盛大的冰之盛宴！",
						"french": "Acceptez cet hymne de glace ! ...Bienvenue à mon grand festin de glace !",
						"spanish": "¡Aceptad este himno de hielo! ...¡Bienvenidos a mi gran festín de hielo!",
						"vietnamese": "Hãy chấp nhận bài thánh ca băng này! ...Chào mừng, đến với bữa tiệc băng hoành tráng của ta!",
						"thai": "จงรับเพลงสรรเสริญน้ำแข็งนี้! ...ยินดีต้อนรับสู่ งานเลี้ยงน้ำแข็งอันยิ่งใหญ่ของข้า!",
						"hindi": "इस बर्फ़ीले भजन को स्वीकार करो! ...स्वागत है, मेरी भव्य बर्फ़ीली दावत में!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "boris",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 우린 네 손님이 아니야!",
						"english": "Don't make me laugh! We're not your guests!",
						"japanese": "笑わせるな！俺たちはお前の客じゃない！",
						"chinese": "别开玩笑了！我们不是你的客人！",
						"french": "Ne me fais pas rire ! Nous ne sommes pas tes invités !",
						"spanish": "¡No me hagas reír! ¡No somos tus invitados!",
						"vietnamese": "Đừng có đùa! Chúng ta không phải khách của ngươi!",
						"thai": "อย่ามาตลก! เราไม่เป็นแขกของเจ้า!",
						"hindi": "हँसाओ मत! हम तुम्हारे मेहमान नहीं हैं!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "만찬은 없어. 파괴만이 있을 뿐!",
						"english": "No feast. Only destruction!",
						"japanese": "饗宴はない。あるのは破壊のみ！",
						"chinese": "没有什么盛宴。只有毁灭！",
						"french": "Pas de festin. Seulement la destruction !",
						"spanish": "¡No hay festín. Solo destrucción!",
						"vietnamese": "Không có bữa tiệc nào hết. Chỉ có sự hủy diệt mà thôi!",
						"thai": "ไม่มีงานเลี้ยง มีแต่ความพินาศเท่านั้น!",
						"hindi": "कोई दावत नहीं। केवल विनाश!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그렇다면… 불청객은 영원히 얼어붙을 것이다!",
						"english": "Then... the uninvited shall be frozen forever!",
						"japanese": "ならば…招かれざる客は永遠に凍てつくがいい！",
						"chinese": "既然如此……不速之客将永远被冰封！",
						"french": "Alors... les intrus seront gelés pour l'éternité !",
						"spanish": "¡Entonces... los intrusos serán congelados para siempre!",
						"vietnamese": "Vậy thì... những kẻ không mời sẽ bị đóng băng vĩnh viễn!",
						"thai": "ถ้าอย่างนั้น... ผู้ไม่ได้รับเชิญจะต้องถูกแช่แข็งชั่วนิรันดร์!",
						"hindi": "तो फिर... बिन बुलाए मेहमान हमेशा के लिए जम जाएंगे!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 이 얼음은… 영원히… 노래하리라…",
						"english": "Ugh... This ice... will sing... forever...",
						"japanese": "くっ…この氷は…永遠に…歌うだろう…",
						"chinese": "呃……这冰……将永远……歌唱……",
						"french": "Ugh... Cette glace... chantera... pour toujours...",
						"spanish": "Ugh... Este hielo... cantará... para siempre...",
						"vietnamese": "Ư... Băng này... sẽ mãi mãi... ca hát...",
						"thai": "อึก... น้ำแข็งนี้... จะขับขาน... ชั่วนิรันดร์...",
						"hindi": "उफ़... यह बर्फ़... हमेशा... गाएगी..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝났다…",
						"english": "It's over...",
						"japanese": "終わった…",
						"chinese": "结束了…",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Xong rồi...",
						"thai": "จบแล้ว...",
						"hindi": "खत्म हो गया..."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "겨우 끝냈군. 하지만 저 얼음은… 아직 사라지지 않았어.",
						"english": "Finally done. But that ice... it hasn't disappeared yet.",
						"japanese": "ようやく終わった。しかし、あの氷は…まだ消えていない。",
						"chinese": "总算解决了。但那冰块…还没有消失。",
						"french": "C'est enfin fini. Mais cette glace… elle n'a pas encore disparu.",
						"spanish": "Por fin terminado. Pero ese hielo… aún no ha desaparecido.",
						"vietnamese": "Cuối cùng cũng xong. Nhưng tảng băng kia… vẫn chưa tan biến.",
						"thai": "ในที่สุดก็เสร็จสิ้น แต่ว่าน้ำแข็งนั่น… ยังไม่หายไป",
						"hindi": "आखिरकार हो गया। लेकिन वह बर्फ… अभी तक गायब नहीं हुई।"
					}
				},
				{
					"content": {
						"korean": "광기의 뿔잔은 침묵했다. 하지만 그 얼음은 여전히 숲에 남아, 새로운 그림자를 드리우는 듯했다.",
						"english": "The Goblet of Madness fell silent. Yet the ice remained in the forest, casting new shadows.",
						"japanese": "狂気の杯は沈黙した。しかし、あの氷は森に残り、新たな影を落としているようだった。",
						"chinese": "疯狂的号角沉默了。然而那冰块依然留在森林中，仿佛投下了新的阴影。",
						"french": "Le Calice de la Folie se tut. Pourtant, la glace demeura dans la forêt, projetant de nouvelles ombres.",
						"spanish": "El Cáliz de la Locura se silenció. Sin embargo, el hielo permaneció en el bosque, proyectando nuevas sombras.",
						"vietnamese": "Chiếc Cốc Điên Cuồng im lặng. Nhưng băng vẫn còn đó trong rừng, như thể đang phủ một bóng đen mới.",
						"thai": "ถ้วยแห่งความบ้าคลั่งเงียบลง แต่ว่าน้ำแข็งยังคงอยู่ในป่า ราวกับกำลังสร้างเงามืดใหม่",
						"hindi": "पागलपन का प्याला खामोश हो गया। फिर भी बर्फ जंगल में बनी रही, नई परछाइयाँ डालती हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진정한 해방은… 아직 멀었나.",
						"english": "True liberation... is it still far off?",
						"japanese": "真の解放は…まだ遠いのか。",
						"chinese": "真正的解放…还很遥远吗？",
						"french": "La vraie libération… est-elle encore loin ?",
						"spanish": "¿La verdadera liberación… aún está lejos?",
						"vietnamese": "Sự giải thoát thực sự… vẫn còn xa ư?",
						"thai": "การปลดปล่อยที่แท้จริง… ยังอีกไกลหรือ?",
						"hindi": "क्या सच्ची मुक्ति… अभी भी दूर है?"
					},
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다. 영원한 만찬에 초대되었다.",
						"english": "The cold ice consumed all. You are invited to an eternal feast.",
						"japanese": "冷たい氷がすべてを飲み込んだ。永遠の晩餐に招待された。",
						"chinese": "冰冷的寒气吞噬了一切。你被邀请参加一场永恒的盛宴。",
						"french": "La glace froide a tout englouti. Vous êtes invité à un festin éternel.",
						"spanish": "El frío hielo lo consumió todo. Estás invitado a un festín eterno.",
						"vietnamese": "Băng giá lạnh lẽo nuốt chửng tất cả. Ngươi được mời đến một bữa tiệc vĩnh hằng.",
						"thai": "น้ำแข็งอันเย็นยะเยือกกลืนกินทุกสิ่ง คุณได้รับเชิญสู่พิธีเลี้ยงอันเป็นนิรันดร์",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया। आपको एक शाश्वत दावत में आमंत्रित किया गया है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영원히 나의 성대한 만찬의 일부가 되어라! 하하하!",
						"english": "Forever be a part of my grand feast! Hahaha!",
						"japanese": "永遠に私の盛大な晩餐の一部となれ！ハハハ！",
						"chinese": "永远成为我盛大宴会的一部分吧！哈哈哈！",
						"french": "Fais partie de mon grand festin pour l'éternité ! Hahaha !",
						"spanish": "¡Sé parte de mi gran festín para siempre! ¡Jajaja!",
						"vietnamese": "Hãy mãi mãi là một phần của bữa tiệc lớn của ta! Hahaha!",
						"thai": "จงเป็นส่วนหนึ่งของงานเลี้ยงอันยิ่งใหญ่ของข้าไปตลอดกาล! ฮ่าฮ่าฮ่า!",
						"hindi": "हमेशा के लिए मेरी भव्य दावत का हिस्सा बनो! हाहाहा!"
					},
					"emotion": "happy",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Argh… Ce n'est pas… encore fini !",
						"spanish": "Uf… ¡Aún… no ha terminado!",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc!",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시… 반드시…!",
						"english": "Damn it... Again... I must...!",
						"japanese": "くそ…また…必ず…！",
						"chinese": "该死…再来…一定要…！",
						"french": "Maudit… Encore… Je dois… !",
						"spanish": "¡Maldita sea… Otra vez… ¡Debo…!",
						"vietnamese": "Chết tiệt… Lần nữa… Nhất định phải…!",
						"thai": "ให้ตายสิ… อีกครั้ง… ต้องให้ได้…!",
						"hindi": "धिक्कार है… फिर से… मुझे अवश्य…!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시리즈의 끝. 금기의 계약도, 끝나지 않는 축제도 모두 마주한 탐험대가 뿔잔 앞에 섰다.",
			"뿔잔이 격렬히 진동하며, 갇힌 영혼들의 비명과 왜곡된 찬가가 뒤섞여 울리기 시작했다.",
			"광기는 완전한 형태를 갖추고, 마지막 손님들을 기다리고 있었다.",
			"나의 성대한 얼음 만찬에. 초대받은 자, 영원히 얼어붙으리라."
		],
		"english": [
			"The end of the series. The expedition, having faced forbidden pacts and endless festivals, stood before the Horn of Madness.",
			"The Horn vibrated violently, and the screams of trapped souls mingled with distorted hymns, beginning to echo.",
			"Madness had taken its complete form, awaiting its final guests.",
			"To my grand ice feast. Those invited shall be frozen forever."
		],
		"japanese": [
			"シリーズの終わり。禁断の契約も、終わらない祝祭も全てを経験した探検隊が、角杯の前に立った。",
			"角杯が激しく振動し、囚われた魂の叫びと歪んだ賛歌が混じり合い、鳴り響き始めた。",
			"狂気は完全な形を成し、最後の客たちを待ち構えていた。",
			"我が壮大な氷の饗宴へ。招かれし者、永遠に凍てつくべし。"
		],
		"chinese": [
			"系列的终结。探险队直面禁忌的契约与永无止境的庆典，如今立于号角之前。",
			"号角剧烈震动，被困灵魂的尖叫与扭曲的颂歌交织回荡。",
			"疯狂已然成形，等待着最后的客人。",
			"赴我盛大的冰霜晚宴。受邀者，将永远被冰封。"
		],
		"french": [
			"La fin de la série. L'expédition, ayant affronté pactes interdits et fêtes sans fin, se tenait devant la Corne.",
			"La Corne vibra violemment, et les cris des âmes captives se mêlèrent à des hymnes déformés, commençant à résonner.",
			"La folie avait pris sa forme complète, attendant ses derniers invités.",
			"À mon grand festin de glace. Ceux qui sont invités seront gelés pour l'éternité."
		],
		"spanish": [
			"El fin de la saga. La expedición, que había enfrentado pactos prohibidos y festividades interminables, se encontraba ante el Cuerno.",
			"El Cuerno vibró violentamente, y los gritos de almas atrapadas se mezclaron con himnos distorsionados, comenzando a resonar.",
			"La locura había tomado su forma completa, esperando a sus últimos invitados.",
			"A mi gran banquete de hielo. Los invitados serán congelados para siempre."
		],
		"vietnamese": [
			"Kết thúc của loạt truyện. Đoàn thám hiểm, đã đối mặt với những giao ước cấm kỵ và lễ hội không hồi kết, giờ đứng trước Chiếc Sừng.",
			"Chiếc Sừng rung động dữ dội, và tiếng la hét của những linh hồn bị mắc kẹt hòa lẫn với những bài thánh ca méo mó, bắt đầu vang vọng.",
			"Sự điên rồ đã thành hình hoàn chỉnh, chờ đợi những vị khách cuối cùng.",
			"Đến bữa tiệc băng lộng lẫy của ta. Kẻ được mời sẽ bị đóng băng vĩnh viễn."
		],
		"thai": [
			"จุดจบของเรื่องราว คณะสำรวจที่ได้เผชิญหน้าทั้งพันธสัญญาต้องห้ามและเทศกาลอันไม่สิ้นสุด ได้ยืนอยู่หน้าแตรปีศาจ",
			"แตรปีศาจสั่นสะท้านอย่างรุนแรง เสียงกรีดร้องของวิญญาณที่ถูกจองจำปะปนกับบทเพลงสรรเสริญที่บิดเบี้ยว เริ่มก้องกังวาน",
			"ความบ้าคลั่งได้ก่อร่างสมบูรณ์แล้ว รอคอยแขกกลุ่มสุดท้าย",
			"สู่มื้อค่ำน้ำแข็งอันยิ่งใหญ่ของข้า ผู้ได้รับเชิญจักถูกแช่แข็งชั่วนิรันดร์"
		],
		"hindi": [
			"श्रृंखला का अंत। वर्जित संधियों और अंतहीन उत्सवों का सामना करने वाली अभियान दल हॉर्न के सामने खड़ी थी।",
			"हॉर्न हिंसक रूप से कंपन करने लगा, और फंसी हुई आत्माओं की चीखें विकृत भजनों के साथ घुलमिल कर गूंजने लगीं।",
			"पागलपन ने अपना पूर्ण रूप ले लिया था, अपने अंतिम मेहमानों का इंतजार कर रहा था।",
			"मेरी भव्य बर्फ की दावत में। आमंत्रित लोग हमेशा के लिए जम जाएंगे।"
		]
	},
	"epilogue": {
		"korean": [
			"광기의 뿔잔이 침묵하고, 숲은 다시 고요해졌다.",
			"하지만 얼음은 녹지 않았다. 그 차가운 흔적은 여전히 모든 것을 감싸고 있었다.",
			"그들은 얼음 만찬에서 벗어났지만, 진정한 끝은 아니었다.",
			"구원이었는가, 또 다른 침해였는가. 답은, 얼어붙은 시간 속에 있었다.",
			"아직 노래하고 있었다. 얼음 아래 갇힌 영혼들의 작은 메아리가."
		],
		"english": [
			"The Horn of Madness fell silent, and the forest grew still again.",
			"But the ice did not melt. Its cold traces still enveloped everything.",
			"They escaped the ice feast, but it was not the true end.",
			"Was it salvation, or another transgression? The answer lay in frozen time.",
			"They were still singing. Small echoes of souls trapped beneath the ice."
		],
		"japanese": [
			"狂気の角杯が沈黙し、森は再び静寂に包まれた。",
			"しかし、氷は溶けなかった。その冷たい痕跡は、依然として全てを包み込んでいた。",
			"彼らは氷の饗宴から逃れたが、それは真の終わりではなかった。",
			"それは救済だったのか、それとも新たな侵犯だったのか。答えは、凍てついた時間の中にあった。",
			"まだ歌っていた。氷の下に囚われた魂たちの小さなこだまが。"
		],
		"chinese": [
			"疯狂号角归于沉寂，森林重归宁静。",
			"然而冰未融化。那冰冷的痕迹依然笼罩一切。",
			"他们摆脱了冰霜晚宴，但这并非真正的终结。",
			"是救赎，还是又一次侵犯？答案，在冻结的时间里。",
			"它们仍在歌唱。冰下被困灵魂的微弱回响。"
		],
		"french": [
			"La Corne de la Folie se tut, et la forêt retrouva son calme.",
			"Mais la glace ne fondit pas. Ses traces froides enveloppaient encore tout.",
			"Ils s'échappèrent du festin de glace, mais ce n'était pas la vraie fin.",
			"Était-ce le salut, ou une autre transgression ? La réponse gisait dans le temps gelé.",
			"Ils chantaient encore. De petits échos d'âmes piégées sous la glace."
		],
		"spanish": [
			"El Cuerno de la Locura enmudeció, y el bosque volvió a estar en calma.",
			"Pero el hielo no se derritió. Sus frías huellas aún lo envolvían todo.",
			"Escaparon del banquete de hielo, pero no fue el verdadero final.",
			"¿Fue salvación o una nueva transgresión? La respuesta yacía en el tiempo congelado.",
			"Todavía cantaban. Pequeños ecos de almas atrapadas bajo el hielo."
		],
		"vietnamese": [
			"Chiếc Sừng của Sự Điên Rồ im lặng, và khu rừng trở lại yên tĩnh.",
			"Nhưng băng không tan chảy. Dấu vết lạnh lẽo của nó vẫn bao trùm mọi thứ.",
			"Họ thoát khỏi bữa tiệc băng, nhưng đó không phải là kết thúc thực sự.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác? Câu trả lời nằm trong thời gian đóng băng.",
			"Chúng vẫn đang hát. Những tiếng vọng nhỏ của linh hồn bị mắc kẹt dưới lớp băng."
		],
		"thai": [
			"แตรปีศาจแห่งความบ้าคลั่งเงียบงันลง และป่าก็กลับมาสงบอีกครั้ง",
			"แต่ว่าน้ำแข็งไม่ละลาย ร่องรอยอันเยือกเย็นนั้นยังคงปกคลุมทุกสิ่ง",
			"พวกเขาหลบหนีจากมื้อค่ำน้ำแข็งได้ แต่มันไม่ใช่จุดจบที่แท้จริง",
			"นั่นคือการไถ่บาป หรือการล่วงละเมิดอีกครั้ง? คำตอบอยู่ในกาลเวลาที่ถูกแช่แข็ง",
			"พวกเขายังคงร้องเพลงอยู่ เสียงสะท้อนเล็กๆ ของวิญญาณที่ถูกจองจำใต้น้ำแข็ง"
		],
		"hindi": [
			"पागलपन का हॉर्न शांत हो गया, और जंगल फिर से शांत हो गया।",
			"लेकिन बर्फ नहीं पिघली। उसके ठंडे निशान अभी भी सब कुछ घेरे हुए थे।",
			"वे बर्फ की दावत से बच निकले, लेकिन यह असली अंत नहीं था।",
			"क्या यह मुक्ति थी, या एक और अतिक्रमण? जवाब जमे हुए समय में था।",
			"वे अभी भी गा रहे थे। बर्फ के नीचे फंसी आत्माओं की छोटी गूँज।"
		]
	}
} as const;
