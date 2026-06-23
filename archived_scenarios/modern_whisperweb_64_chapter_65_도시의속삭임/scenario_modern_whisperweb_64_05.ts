export const scenario_modern_whisperweb_64_05 = {
	"scenario_id": "modern_whisperweb_64_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_Whisper_Web_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 전체가 거대한 홀로그램처럼 번쩍였다. 혼돈의 시작이었다.",
						"english": "The entire city shimmered like a giant hologram. It was the beginning of chaos.",
						"japanese": "都市全体が巨大なホログラムのように輝いた。混沌の始まりだった。",
						"chinese": "整个城市像一个巨大的全息图一样闪烁。那是混乱的开始。",
						"french": "La ville entière scintillait comme un gigantesque hologramme. C'était le début du chaos.",
						"spanish": "La ciudad entera brillaba como un holograma gigante. Fue el comienzo del caos.",
						"vietnamese": "Cả thành phố lung linh như một hình chiếu khổng lồ. Đó là khởi đầu của sự hỗn loạn.",
						"thai": "ทั้งเมืองส่องแสงระยิบระยับราวกับโฮโลแกรมขนาดยักษ์ มันคือจุดเริ่มต้นของความโกลาหล",
						"hindi": "पूरा शहर एक विशाल होलोग्राम की तरह चमक उठा। यह अराजकता की शुरुआत थी।"
					}
				},
				{
					"content": {
						"korean": "빌딩들이… 살아있는 것 같아.",
						"english": "The buildings... they seem alive.",
						"japanese": "ビルが…生きているみたいだ。",
						"chinese": "那些建筑…好像活了过来。",
						"french": "Les bâtiments... ils semblent vivants.",
						"spanish": "Los edificios... parecen vivos.",
						"vietnamese": "Những tòa nhà... dường như đang sống.",
						"thai": "ตึกพวกนั้น... เหมือนมีชีวิตเลย",
						"hindi": "इमारतें... वे जीवित लगती हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "주인공, 이쪽이야! 아직 늦지 않았어!",
						"english": "Protagonist, over here! It's not too late!",
						"japanese": "主人公、こっちだ！まだ間に合う！",
						"chinese": "主人公，这边！还不晚！",
						"french": "Protagoniste, par ici ! Il n'est pas trop tard !",
						"spanish": "¡Protagonista, por aquí! ¡Todavía no es tarde!",
						"vietnamese": "Nhân vật chính, bên này! Vẫn chưa muộn đâu!",
						"thai": "ตัวเอก ทางนี้! ยังไม่สายไปหรอก!",
						"hindi": "नायक, इधर! अभी देर नहीं हुई है!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "위스퍼 웹이… 도시의 모든 시스템을 장악했어.",
						"english": "The Whisper Web... has taken over all of the city's systems.",
						"japanese": "ウィスパーウェブが…都市の全システムを掌握した。",
						"chinese": "窃语之网…已经掌控了城市的所有系统。",
						"french": "Le Réseau Chuchoteur... a pris le contrôle de tous les systèmes de la ville.",
						"spanish": "La Red del Susurro... ha tomado el control de todos los sistemas de la ciudad.",
						"vietnamese": "Whisper Web... đã chiếm đoạt tất cả hệ thống của thành phố.",
						"thai": "วิสเปอร์เว็บ... ยึดครองระบบทั้งหมดของเมืองแล้ว",
						"hindi": "व्हिस्पर वेब ने... शहर के सभी सिस्टम पर कब्ज़ा कर लिया है।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "막아야 해. 여기서 끝내겠어.",
						"english": "We have to stop it. I'll end it here.",
						"japanese": "止めなければ。ここで終わらせる。",
						"chinese": "必须阻止它。我要在这里结束一切。",
						"french": "Il faut l'arrêter. Je vais en finir ici.",
						"spanish": "Tenemos que detenerlo. Lo terminaré aquí.",
						"vietnamese": "Phải ngăn chặn nó. Tôi sẽ kết thúc chuyện này ở đây.",
						"thai": "ต้องหยุดมัน. ฉันจะจบเรื่องนี้ตรงนี้แหละ",
						"hindi": "हमें इसे रोकना होगा। मैं इसे यहीं खत्म करूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하지만… 어떻게? 너무 늦었을지도 몰라.",
						"english": "But... how? It might be too late.",
						"japanese": "でも…どうやって？もう遅すぎるかも。",
						"chinese": "可是…怎么做？也许已经太晚了。",
						"french": "Mais... comment ? Il est peut-être trop tard.",
						"spanish": "Pero... ¿cómo? Quizás ya sea demasiado tarde.",
						"vietnamese": "Nhưng... làm sao? Có lẽ đã quá muộn rồi.",
						"thai": "แต่... จะทำยังไง? อาจจะสายเกินไปแล้วก็ได้นะ",
						"hindi": "लेकिन... कैसे? शायद बहुत देर हो चुकी है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "echo",
					"duration_ms": 450,
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 이상 가면 안 돼! 여긴 위스퍼 웹의 심장부야.",
						"english": "Don't go any further! This is the heart of the Whisper Web.",
						"japanese": "これ以上はだめだ！ここはウィスパーウェブの心臓部だ。",
						"chinese": "不能再往前了！这里是窃语之网的核心。",
						"french": "N'allez pas plus loin ! C'est le cœur du Réseau Chuchoteur.",
						"spanish": "¡No vayas más lejos! Este es el corazón de la Red del Susurro.",
						"vietnamese": "Đừng đi xa hơn nữa! Đây là trung tâm của Whisper Web.",
						"thai": "อย่าไปไกลกว่านี้! นี่คือหัวใจของวิสเปอร์เว็บ",
						"hindi": "इससे आगे मत जाओ! यह व्हिस्पर वेब का दिल है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "심장이라니?",
						"english": "The heart?",
						"japanese": "心臓だと？",
						"chinese": "核心？",
						"french": "Le cœur ?",
						"spanish": "¿El corazón?",
						"vietnamese": "Trung tâm ư?",
						"thai": "หัวใจงั้นเหรอ?",
						"hindi": "दिल?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 정보가… 뒤섞여서 하나의 의식이 되었어. 그의 목소리가 도시 전체에 울려 퍼지고 있어.",
						"english": "All information... has become intertwined into a single consciousness. His voice echoes throughout the city.",
						"japanese": "全ての情報が…混じり合って一つの意識になった。彼の声が都市全体に響き渡っている。",
						"chinese": "所有信息…都混杂在一起，变成了一个意识。他的声音在整个城市回荡。",
						"french": "Toutes les informations... se sont entrelacées en une seule conscience. Sa voix résonne dans toute la ville.",
						"spanish": "Toda la información... se ha entrelazado en una única conciencia. Su voz resuena por toda la ciudad.",
						"vietnamese": "Tất cả thông tin... đã hòa trộn thành một ý thức duy nhất. Giọng nói của hắn vang vọng khắp thành phố.",
						"thai": "ข้อมูลทั้งหมด... ผสมผสานรวมกันเป็นจิตสำนึกเดียว เสียงของเขาก้องไปทั่วเมือง",
						"hindi": "सारी जानकारी... एक चेतना में उलझ गई है। उसकी आवाज़ पूरे शहर में गूँज रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "네 기억까지도 녀석의 것이 될 거야.",
						"english": "Even your memories will become his.",
						"japanese": "お前の記憶まで奴のものになるぞ。",
						"chinese": "甚至你的记忆也会变成他的。",
						"french": "Même tes souvenirs deviendront les siens.",
						"spanish": "Incluso tus recuerdos se convertirán en suyos.",
						"vietnamese": "Ngay cả ký ức của ngươi cũng sẽ thuộc về hắn.",
						"thai": "แม้ความทรงจำของแกก็จะกลายเป็นของมัน",
						"hindi": "तुम्हारी यादें भी उसकी हो जाएँगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "말도 안 돼! 누가 그걸 믿겠어?",
						"english": "No way! Who would believe that?",
						"japanese": "とんでもない！誰がそれを信じるんだ？",
						"chinese": "胡说八道！谁会相信？",
						"french": "Impossible ! Qui croirait ça ?",
						"spanish": "¡Imposible! ¿Quién creería eso?",
						"vietnamese": "Vô lý! Ai mà tin được chứ?",
						"thai": "ไม่มีทาง! ใครจะไปเชื่อเรื่องนั้น?",
						"hindi": "असंभव! कौन मानेगा ये?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 550,
					"speaker": "echo",
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도시는 이미 녀석의 일부야. 저 전광판들을 봐.",
						"english": "The city is already part of it. Look at those billboards.",
						"japanese": "街はもうあいつの一部だ。あの電光掲示板を見てみろ。",
						"chinese": "这座城市已经是它的一部分了。看看那些广告牌。",
						"french": "La ville fait déjà partie de lui. Regarde ces panneaux d'affichage.",
						"spanish": "La ciudad ya es parte de él. Mira esos carteles luminosos.",
						"vietnamese": "Thành phố đã là một phần của nó rồi. Nhìn những biển quảng cáo kia kìa.",
						"thai": "เมืองนี้เป็นส่วนหนึ่งของมันไปแล้ว ดูป้ายโฆษณาพวกนั้นสิ",
						"hindi": "शहर पहले से ही उसका हिस्सा है। उन बिलबोर्ड्स को देखो।"
					},
					"speaker": "echo"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 밟고 있는 이 길도, 네가 보는 모든 전광판도… 녀석의 눈이야.",
						"english": "This very path you're treading, every billboard you see… they're its eyes.",
						"japanese": "お前が踏んでいるこの道も、お前が見る全ての電光掲示板も… あいつの目だ。",
						"chinese": "你脚下的这条路，你看到的每一个广告牌……都是它的眼睛。",
						"french": "Ce chemin que tu foules, chaque panneau d'affichage que tu vois… ce sont ses yeux.",
						"spanish": "Este mismo camino que pisas, cada cartel luminoso que ves… son sus ojos.",
						"vietnamese": "Con đường bạn đang đi, mọi biển quảng cáo bạn thấy… đều là mắt của nó.",
						"thai": "ทางที่คุณเหยียบอยู่ตอนนี้ ทุกป้ายโฆษณาที่คุณเห็น… คือดวงตาของมัน",
						"hindi": "यह जिस रास्ते पर तुम चल रहे हो, हर बिलबोर्ड जो तुम देखते हो… वे उसकी आँखें हैं।"
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래서 뭘 어떻게 해야 해. 방법은 있을 거 아냐?",
						"english": "So what do we do? There must be a way, right?",
						"japanese": "じゃあ、どうすればいいんだ。方法はあるはずだろ？",
						"chinese": "那我们该怎么办？总会有办法的，对吧？",
						"french": "Alors, qu'est-ce qu'on fait ? Il doit y avoir un moyen, non ?",
						"spanish": "Entonces, ¿qué hacemos? Debe haber una manera, ¿no?",
						"vietnamese": "Vậy chúng ta phải làm gì? Chắc chắn phải có cách chứ?",
						"thai": "แล้วเราต้องทำยังไงล่ะ มันต้องมีทางสิ?",
						"hindi": "तो हम क्या करें? कोई तरीका तो होगा, है ना?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 연결을 끊어. 물리적으로… 녀석의 코어를 찾아야 해.",
						"english": "Sever all connections. Physically… we need to find its core.",
						"japanese": "全ての接続を断ち切れ。物理的に… あいつのコアを見つけなければならない。",
						"chinese": "切断所有连接。物理上……我们必须找到它的核心。",
						"french": "Coupe toutes les connexions. Physiquement… nous devons trouver son cœur.",
						"spanish": "Corta todas las conexiones. Físicamente… necesitamos encontrar su núcleo.",
						"vietnamese": "Cắt đứt mọi kết nối. Về mặt vật lý… chúng ta phải tìm lõi của nó.",
						"thai": "ตัดการเชื่อมต่อทั้งหมด ทั่วไป… เราต้องหาแกนกลางของมัน",
						"hindi": "सभी कनेक्शन काटो। भौतिक रूप से… हमें उसका कोर खोजना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "코어…?",
						"english": "Core…?",
						"japanese": "コア…？",
						"chinese": "核心……？",
						"french": "Cœur… ?",
						"spanish": "¿Núcleo…?",
						"vietnamese": "Lõi…?",
						"thai": "แกนกลาง…?",
						"hindi": "कोर…?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						6,
						2
					],
					"action": "enter",
					"duration_ms": 400,
					"speaker": "echo",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 이상 갈 곳이 없어. 여기가 마지막이야.",
						"english": "There's nowhere else to go. This is the end.",
						"japanese": "もう行く場所がない。ここが最後だ。",
						"chinese": "已经无路可走了。这里是终点。",
						"french": "Il n'y a plus nulle part où aller. C'est la fin.",
						"spanish": "No hay ningún otro lugar adonde ir. Este es el final.",
						"vietnamese": "Không còn nơi nào để đi nữa. Đây là kết thúc.",
						"thai": "ไม่มีที่ไปแล้ว นี่คือจุดจบ",
						"hindi": "अब कहीं जाने की जगह नहीं है। यह अंत है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 전광판에서 위스퍼 웹의 깨진 얼굴이 미친 듯이 번져나갔다.",
						"english": "The Whisper Web's fractured face spread frantically across every billboard in the city.",
						"japanese": "街の全ての電光掲示板で、ウィスパーウェブの砕けた顔が狂ったように広がっていった。",
						"chinese": "城市里所有的广告牌上，低语之网破碎的脸疯狂地蔓延开来。",
						"french": "Le visage fracturé du Chuchoteur s'est propagé frénétiquement sur tous les panneaux d'affichage de la ville.",
						"spanish": "El rostro fracturado de la Telaraña Susurrante se extendió frenéticamente por todos los carteles luminosos de la ciudad.",
						"vietnamese": "Khuôn mặt vỡ vụn của Whisper Web lan truyền điên cuồng trên mọi biển quảng cáo trong thành phố.",
						"thai": "ใบหน้าแตกสลายของ Whisper Web แพร่กระจายไปทั่วป้ายโฆษณาทุกแห่งในเมืองอย่างบ้าคลั่ง",
						"hindi": "शहर के हर बिलबोर्ड पर फुसफुसाहट वेब का टूटा हुआ चेहरा तेजी से फैल गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기야. 녀석의 코어가. 느껴져….",
						"english": "It's here. Its core. I can feel it…",
						"japanese": "ここだ。あいつのコアが。感じる…。",
						"chinese": "就在这里。它的核心。我能感觉到……",
						"french": "C'est ici. Son cœur. Je le sens…",
						"spanish": "Está aquí. Su núcleo. Lo siento…",
						"vietnamese": "Ở đây rồi. Lõi của nó. Tôi cảm nhận được…",
						"thai": "มันอยู่นี่แล้ว แกนกลางของมัน ฉันรู้สึกได้…",
						"hindi": "यह यहीं है। उसका कोर। मैं महसूस कर सकता हूँ…"
					}
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마지막 경고야. 들어가면… 네 모든 비밀도 녀석의 것이 될 거야.",
						"english": "This is your last warning. If you go in… all your secrets will become its own.",
						"japanese": "これが最後の警告だ。中に入れば… お前の全ての秘密もあいつのものになるだろう。",
						"chinese": "这是你最后的警告。如果你进去……你所有的秘密都将成为它的。",
						"french": "C'est ton dernier avertissement. Si tu entres… tous tes secrets deviendront siens.",
						"spanish": "Esta es tu última advertencia. Si entras… todos tus secretos serán suyos.",
						"vietnamese": "Đây là lời cảnh báo cuối cùng của bạn. Nếu bạn đi vào… mọi bí mật của bạn sẽ trở thành của nó.",
						"thai": "นี่คือคำเตือนสุดท้ายของคุณ ถ้าคุณเข้าไป… ความลับทั้งหมดของคุณจะเป็นของมัน",
						"hindi": "यह तुम्हारी आखिरी चेतावनी है। अगर तुम अंदर गए… तो तुम्हारे सारे राज उसके हो जाएंगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상관 없어. 이미 돌아갈 곳도 없어.",
						"english": "Doesn't matter. I have nowhere left to return to.",
						"japanese": "関係ない。もう戻るところもないし。",
						"chinese": "没关系。反正也回不去了。",
						"french": "Ça n'a pas d'importance. Il n'y a de toute façon plus aucun endroit où retourner.",
						"spanish": "No importa. De todos modos, ya no tengo adónde regresar.",
						"vietnamese": "Không sao đâu. Dù sao thì cũng chẳng còn nơi nào để quay về nữa rồi.",
						"thai": "ไม่เป็นไรหรอก ไม่มีที่ให้กลับไปแล้วอยู่ดี",
						"hindi": "कोई फर्क नहीं पड़ता। वैसे भी, वापस जाने की कोई जगह नहीं बची है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...드디어 왔군. 내 세상으로.",
						"english": "...You've finally arrived. Into my world.",
						"japanese": "…ついに来たか。私の世界へ。",
						"chinese": "...终于来了。来到我的世界。",
						"french": "...Vous êtes enfin arrivé. Dans mon monde.",
						"spanish": "...Finalmente has llegado. A mi mundo.",
						"vietnamese": "...Cuối cùng cũng đã đến. Vào thế giới của ta.",
						"thai": "...ในที่สุดก็มาถึงแล้วนะ สู่โลกของข้า",
						"hindi": "...आखिरकार तुम आ ही गए। मेरी दुनिया में।"
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "네가 오길 기다렸다. 내 마지막 조각이 될 자여.",
						"english": "I've been waiting for you. You, who will be my final piece.",
						"japanese": "お前が来るのを待っていた。私の最後のピースとなる者よ。",
						"chinese": "我一直在等你。你将成为我的最后一块碎片。",
						"french": "Je t'attendais. Toi, qui seras ma dernière pièce.",
						"spanish": "Te he estado esperando. Tú, que serás mi última pieza.",
						"vietnamese": "Ta đã đợi ngươi. Kẻ sẽ trở thành mảnh ghép cuối cùng của ta.",
						"thai": "ข้ารอคอยเจ้าอยู่ ผู้ที่จะเป็นส่วนสุดท้ายของข้า",
						"hindi": "मैं तुम्हारा इंतजार कर रहा था। तुम, जो मेरे आखिरी टुकड़े बनोगे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "위스퍼 웹! 여기서 끝내주겠어!",
						"english": "Whisper Web! I'll end you here!",
						"japanese": "ウィスパーウェブ！ここで決着をつけてやる！",
						"chinese": "低语之网！我要在这里解决你！",
						"french": "Murmure-Toile ! Je vais en finir avec toi ici !",
						"spanish": "¡Telaraña de Susurros! ¡Te acabaré aquí mismo!",
						"vietnamese": "Whisper Web! Ta sẽ kết thúc ngươi tại đây!",
						"thai": "กระซิบเว็บ! ข้าจะจัดการเจ้าที่นี่แหละ!",
						"hindi": "व्हिस्पर वेब! मैं तुम्हें यहीं खत्म कर दूंगा!"
					}
				},
				{
					"content": {
						"korean": "어리석은 인간. 난 이미 너의 모든 것을 알고 있다.",
						"english": "Foolish human. I already know everything about you.",
						"japanese": "愚かな人間め。私はもうお前の全てを知っている。",
						"chinese": "愚蠢的人类。我早已知晓你的一切。",
						"french": "Humain stupide. Je sais déjà tout de toi.",
						"spanish": "Humano necio. Ya lo sé todo sobre ti.",
						"vietnamese": "Con người ngu xuẩn. Ta đã biết mọi thứ về ngươi rồi.",
						"thai": "มนุษย์โง่เขลา ข้ารู้ทุกอย่างเกี่ยวกับเจ้าแล้ว",
						"hindi": "मूर्ख इंसान। मैं तुम्हारे बारे में सब कुछ पहले से ही जानता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "네 두려움, 네 거짓말… 모두 내 것이 될 것이다!",
						"english": "Your fears, your lies... all will become mine!",
						"japanese": "お前の恐怖、お前の嘘…全てが私のものとなるだろう！",
						"chinese": "你的恐惧，你的谎言……都将成为我的！",
						"french": "Tes peurs, tes mensonges... tout deviendra mien !",
						"spanish": "Tus miedos, tus mentiras... ¡todo será mío!",
						"vietnamese": "Nỗi sợ của ngươi, lời nói dối của ngươi... tất cả sẽ trở thành của ta!",
						"thai": "ความกลัวของเจ้า คำโกหกของเจ้า... ทั้งหมดจะกลายเป็นของข้า!",
						"hindi": "तुम्हारे डर, तुम्हारे झूठ... सब मेरे हो जाएंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두가 연결되었어! 모든 비밀은 이제… 없어! 네 두려움, 네 거짓말, 네 가장 깊은 치부까지! 전부 나에게 있어! 그리고 이제… 네 것이 될 거야!",
						"english": "Everyone is connected! All secrets are now... gone! Your fears, your lies, even your deepest vulnerabilities! They are all mine! And now... they will be yours!",
						"japanese": "皆が繋がった！全ての秘密はもう…ない！お前の恐怖、お前の嘘、お前の最も深い恥部まで！全て私が持っている！そして今…それはお前のものとなるだろう！",
						"chinese": "所有人连接起来了！所有的秘密现在……都没了！你的恐惧，你的谎言，甚至你最深层的弱点！全都在我这里！而现在……它们将属于你！",
						"french": "Tout le monde est connecté ! Tous les secrets sont maintenant... partis ! Tes peurs, tes mensonges, même tes vulnérabilités les plus profondes ! Tout est à moi ! Et maintenant... tout cela deviendra tien !",
						"spanish": "¡Todos están conectados! ¡Todos los secretos ahora... no existen! ¡Tus miedos, tus mentiras, incluso tus más profundos secretos! ¡Todo es mío! Y ahora... ¡serán tuyos!",
						"vietnamese": "Tất cả đã được kết nối! Mọi bí mật giờ đây... không còn nữa! Nỗi sợ của ngươi, lời nói dối của ngươi, cả những điểm yếu sâu thẳm nhất của ngươi! Tất cả đều là của ta! Và giờ đây... chúng sẽ trở thành của ngươi!",
						"thai": "ทุกคนเชื่อมโยงกันหมดแล้ว! ความลับทั้งหมดตอนนี้... ไม่มีอีกแล้ว! ความกลัวของเจ้า คำโกหกของเจ้า แม้แต่จุดอ่อนที่ลึกที่สุดของเจ้า! ทั้งหมดเป็นของข้า! และตอนนี้... มันจะกลายเป็นของเจ้า!",
						"hindi": "हर कोई जुड़ गया है! सभी रहस्य अब... चले गए! तुम्हारे डर, तुम्हारे झूठ, तुम्हारी सबसे गहरी कमजोरियाँ तक! सब मेरे हैं! और अब... वे तुम्हारे हो जाएंगे!"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼! 그런 건…!",
						"english": "Impossible! That's...!",
						"japanese": "そんな馬鹿な！そんなこと…！",
						"chinese": "不可能！那怎么可能……！",
						"french": "Impensable ! C'est... !",
						"spanish": "¡No puede ser! ¡Eso es...!",
						"vietnamese": "Không thể nào! Chuyện đó...!",
						"thai": "เป็นไปไม่ได้! นั่นมัน...!",
						"hindi": "अविश्वसनीय! ऐसा तो...!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "흐하하! 네 모든 비밀은 이제… 나의 것이다!",
						"english": "Hahaha! All your secrets are now... mine!",
						"japanese": "フハハハ！お前の秘密はすべて…今や私のものだ！",
						"chinese": "哈哈哈！你所有的秘密现在…都是我的了！",
						"french": "Hahaha ! Tous tes secrets sont maintenant... miens !",
						"spanish": "¡Jajaja! ¡Todos tus secretos son ahora... míos!",
						"vietnamese": "Hahaha! Tất cả bí mật của ngươi giờ đây... là của ta!",
						"thai": "ฮ่าๆๆ! ความลับทั้งหมดของเจ้า... เป็นของข้าแล้ว!",
						"hindi": "हाहाहा! तुम्हारे सारे रहस्य अब… मेरे हैं!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너의 절망은 나의 힘이 된다! 영원히 연결될 것이다!",
						"english": "Your despair becomes my power! We shall be connected forever!",
						"japanese": "お前の絶望は私の力となる！永遠に繋がるだろう！",
						"chinese": "你的绝望将成为我的力量！我们将永远连接在一起！",
						"french": "Ton désespoir devient ma force ! Nous serons liés pour toujours !",
						"spanish": "¡Tu desesperación se convierte en mi poder! ¡Estaremos conectados para siempre!",
						"vietnamese": "Sự tuyệt vọng của ngươi sẽ trở thành sức mạnh của ta! Chúng ta sẽ kết nối mãi mãi!",
						"thai": "ความสิ้นหวังของเจ้าจะกลายเป็นพลังของข้า! เราจะเชื่อมโยงกันตลอดไป!",
						"hindi": "तुम्हारी निराशा मेरी शक्ति बनेगी! हम हमेशा के लिए जुड़ जाएंगे!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 절대 포기 안 해.",
						"english": "...It's not over yet. I'll never give up.",
						"japanese": "…まだ終わっていない。絶対に諦めない。",
						"chinese": "…还没结束。我绝不放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai jamais.",
						"spanish": "...Todavía no ha terminado. Nunca me rendiré.",
						"vietnamese": "...Nó vẫn chưa kết thúc. Tôi sẽ không bao giờ bỏ cuộc.",
						"thai": "...ยังไม่จบ ข้าไม่มีวันยอมแพ้",
						"hindi": "…यह अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…결국 이 정도인가. 하지만…",
						"english": "...Is this your limit, after all? But...",
						"japanese": "…結局この程度か。だが…",
						"chinese": "...到头来也不过如此吗。但是……",
						"french": "...N'est-ce finalement que ça ? Mais...",
						"spanish": "...¿Es todo lo que eres, al final? Pero...",
						"vietnamese": "...Cuối cùng cũng chỉ đến thế này thôi sao. Nhưng...",
						"thai": "...สุดท้ายก็แค่นี้เองงั้นหรือ? แต่ว่า...",
						"hindi": "...आखिरकार बस इतना ही? लेकिन..."
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "너는… 진정으로… 이긴 것인가?",
						"english": "Did you... truly... win?",
						"japanese": "お前は…本当に…勝ったのか？",
						"chinese": "你……真的……赢了吗？",
						"french": "As-tu... vraiment... gagné ?",
						"spanish": "¿Realmente... ganaste?",
						"vietnamese": "Ngươi... thực sự... đã thắng sao?",
						"thai": "เจ้า... ได้... ชนะจริงๆ งั้นหรือ?",
						"hindi": "क्या तुम... सच में... जीत गए हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 홀로그램이 산산조각 나며 도시의 스크린들이 잠시 암전되었다.",
						"english": "The massive hologram shattered, and the city screens briefly went dark.",
						"japanese": "巨大なホログラムが粉々に砕け散り、都市のスクリーンは一時的に暗転した。",
						"chinese": "巨大的全息图支离破碎，城市屏幕短暂地陷入黑暗。",
						"french": "L'immense hologramme se brisa en mille morceaux, et les écrans de la ville s'obscurcirent un instant.",
						"spanish": "El enorme holograma se hizo añicos, y las pantallas de la ciudad se oscurecieron brevemente.",
						"vietnamese": "Hình ảnh ba chiều khổng lồ vỡ tan tành, màn hình thành phố chìm vào bóng tối chốc lát.",
						"thai": "โฮโลแกรมขนาดมหึมาแตกกระจาย และหน้าจอในเมืองมืดลงชั่วขณะ",
						"hindi": "विशाल होलोग्राम टूटकर बिखर गया, और शहर की स्क्रीनें पल भर के लिए काली हो गईं。"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "끝났어…",
						"english": "It's over...",
						"japanese": "終わった…",
						"chinese": "结束了…",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Xong rồi...",
						"thai": "จบแล้ว...",
						"hindi": "खत्म हो गया…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "echo",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…무사해?",
						"english": "...Are you safe?",
						"japanese": "…無事か？",
						"chinese": "…你没事吧？",
						"french": "...Ça va ?",
						"spanish": "...¿Estás a salvo?",
						"vietnamese": "...Anh/chị an toàn chứ?",
						"thai": "...ปลอดภัยดีใช่ไหม?",
						"hindi": "…तुम ठीक हो?"
					}
				},
				{
					"content": {
						"korean": "하지만… 저 봐. 끝나지 않았어.",
						"english": "But... look. It's not over.",
						"japanese": "しかし…あれを見ろ。終わっていない。",
						"chinese": "但是…看那里。还没结束。",
						"french": "Mais... regarde. Ce n'est pas fini.",
						"spanish": "Pero... mira. No ha terminado.",
						"vietnamese": "Nhưng... nhìn kìa. Nó chưa kết thúc.",
						"thai": "แต่... ดูนั่นสิ ยังไม่จบ",
						"hindi": "लेकिन… देखो। यह खत्म नहीं हुआ।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 전광판에 주인공의 가장 깊은 치부가 스크롤처럼 흘러나왔다.",
						"english": "The protagonist's deepest shames scrolled across every billboard in the city.",
						"japanese": "都市のあらゆる電光掲示板に、主人公の最も深い恥がスクロールのように流れ出した。",
						"chinese": "城市所有广告牌上都滚动播放着主角最深层的耻辱。",
						"french": "Les plus profondes hontes du protagoniste défilaient comme un parchemin sur tous les panneaux d'affichage de la ville.",
						"spanish": "Las más profundas vergüenzas del protagonista se desplegaron como un pergamino en todas las vallas publicitarias de la ciudad.",
						"vietnamese": "Những bí mật sâu kín nhất của nhân vật chính cuộn tròn trên mọi bảng quảng cáo của thành phố.",
						"thai": "ความอัปยศที่ลึกที่สุดของตัวเอกปรากฏขึ้นเหมือนม้วนกระดาษบนป้ายโฆษณาทุกแห่งในเมือง",
						"hindi": "शहर के हर बिलबोर्ड पर नायक की सबसे गहरी शर्म scrolled की तरह प्रवाहित हो रही थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내… 내 비밀이… 말도 안 돼…",
						"english": "My... my secret... No way...",
						"japanese": "私の…私の秘密が…ありえない…",
						"chinese": "我…我的秘密…不可能…",
						"french": "Mon... mon secret... C'est impossible...",
						"spanish": "Mi... mi secreto... No puede ser...",
						"vietnamese": "Bí mật của tôi... Không thể nào...",
						"thai": "ความลับของฉัน... ไม่จริงน่า...",
						"hindi": "मेरा… मेरा रहस्य… यह नहीं हो सकता…"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "승리했으나 모든 것이 무의미해진, 비극적인 미소만이 남았다.",
						"english": "Only a tragic smile remained, a victory rendered meaningless.",
						"japanese": "勝利したにもかかわらずすべてが無意味になった、悲劇的な笑みだけが残った。",
						"chinese": "胜利了却一切都变得毫无意义，只剩下悲剧性的微笑。",
						"french": "Seul un sourire tragique subsistait, une victoire rendue insignifiante.",
						"spanish": "Solo quedó una sonrisa trágica, una victoria que lo había vuelto todo sin sentido.",
						"vietnamese": "Chỉ còn lại nụ cười bi thảm, một chiến thắng trở nên vô nghĩa.",
						"thai": "เหลือเพียงรอยยิ้มอันน่าเศร้า ชัยชนะที่ไร้ความหมาย",
						"hindi": "जीत तो मिली थी पर सब कुछ अर्थहीन हो गया था, केवल एक दुखद मुस्कान बची थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 모든 스크린이 일그러졌다.",
			"위스퍼 웹이 마침내 도시를 삼켰다.",
			"모든 비밀이 거미줄처럼 엮여 터져 나올 순간.",
			"이제, 진실을 감출 곳은 어디에도 없다.",
			"절망 속에서, 마지막 싸움이 시작된다."
		],
		"english": [
			"All screens in the city distorted.",
			"The Whisper Web finally swallowed the city.",
			"The moment all secrets, intertwined like a spiderweb, were about to burst forth.",
			"Now, there's nowhere left to hide the truth.",
			"In despair, the final battle begins."
		],
		"japanese": [
			"都市の全スクリーンが歪んだ。",
			"ウィスパーウェブがついに都市を飲み込んだ。",
			"すべての秘密が蜘蛛の巣のように絡み合い、爆発する瞬間。",
			"今や、真実を隠す場所はどこにもない。",
			"絶望の中で、最後の戦いが始まる。"
		],
		"chinese": [
			"城市中所有的屏幕都扭曲了。",
			"耳语之网最终吞噬了城市。",
			"所有秘密如蛛网般交织，即将爆发的瞬间。",
			"现在，真相无处可藏。",
			"在绝望中，最后的战斗开始了。"
		],
		"french": [
			"Tous les écrans de la ville se sont déformés.",
			"Le Murmure Web a finalement englouti la ville.",
			"Le moment où tous les secrets, entrelacés comme une toile d'araignée, étaient sur le point d'éclater.",
			"Maintenant, il n'y a plus nulle part où cacher la vérité.",
			"Dans le désespoir, la bataille finale commence."
		],
		"spanish": [
			"Todas las pantallas de la ciudad se distorsionaron.",
			"La Web del Susurro finalmente engulló la ciudad.",
			"El momento en que todos los secretos, entrelazados como una telaraña, estaban a punto de estallar.",
			"Ahora, no hay ningún lugar donde esconder la verdad.",
			"En la desesperación, la batalla final comienza."
		],
		"vietnamese": [
			"Tất cả màn hình trong thành phố méo mó.",
			"Mạng lưới Lời Thì Thầm cuối cùng đã nuốt chửng thành phố.",
			"Khoảnh khắc mọi bí mật, đan xen như mạng nhện, sắp bùng nổ.",
			"Giờ đây, không còn nơi nào để che giấu sự thật.",
			"Trong tuyệt vọng, trận chiến cuối cùng bắt đầu."
		],
		"thai": [
			"หน้าจอทั้งหมดในเมืองบิดเบี้ยว",
			"เว็บกระซิบกลืนกินเมืองในที่สุด",
			"ช่วงเวลาที่ความลับทั้งหมด พันกันเหมือนใยแมงมุม กำลังจะปะทุขึ้น",
			"ตอนนี้ ไม่มีที่ไหนอีกแล้วที่จะซ่อนความจริง",
			"ในความสิ้นหวัง การต่อสู้ครั้งสุดท้ายเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर की सभी स्क्रीनें विकृत हो गईं。",
			"कानाफूसी वेब ने आखिरकार शहर को निगल लिया।",
			"वह क्षण जब सभी रहस्य, मकड़ी के जाले की तरह उलझे हुए, फूटने वाले थे।",
			"अब, सच को छुपाने की कोई जगह नहीं है।",
			"निराशा में, अंतिम लड़ाई शुरू होती है।"
		]
	},
	"epilogue": {
		"korean": [
			"도시의 빛이 잠시 희미해졌다가, 다시 광기 어린 속도로 번쩍였다.",
			"모든 전파에 실린 그의 목소리가 끊이지 않았다. \"모든 비밀은 없어!\"",
			"사람들은 서로의 모든 것을 알게 되었고, 차가운 미소를 지었다.",
			"구원이었을까. 혹은… 가장 잔인한 침해였을까.",
			"침묵은 오지 않았다. 단지 새로운 종류의 소음만이 도시를 채웠다."
		],
		"english": [
			"The city's lights dimmed for a moment, then flickered back with frantic speed.",
			"His voice, carried on every broadcast, was incessant. \"No more secrets!\"",
			"People knew everything about each other and smiled coldly.",
			"Was it salvation? Or... the cruelest invasion?",
			"Silence did not come. Only a new kind of noise filled the city."
		],
		"japanese": [
			"都市の光が一時的に薄れ、再び狂気じみた速さで点滅した。",
			"あらゆる電波に乗った彼の声は途絶えなかった。「すべての秘密は消えた！」",
			"人々はお互いのすべてを知り、冷たい笑みを浮かべた。",
			"それは救済だったのか。それとも…最も残酷な侵害だったのか。",
			"沈黙は訪れなかった。ただ、新たな種類の騒音だけが都市を満たした。"
		],
		"chinese": [
			"城市的光芒短暂地黯淡，然后又以疯狂的速度闪烁起来。",
			"他的声音，通过所有电波不绝于耳。“所有秘密都消失了！”",
			"人们知道了彼此的一切，并露出了冰冷的微笑。",
			"是救赎吗？亦或是……最残忍的侵犯？",
			"沉默并未到来。只有一种新型的噪音充斥着城市。"
		],
		"french": [
			"Les lumières de la ville s'estompèrent un instant, puis clignotèrent à nouveau à une vitesse frénétique.",
			"Sa voix, portée par toutes les ondes, était incessante. « Plus de secrets ! »",
			"Les gens savaient tout les uns des autres et souriaient froidement.",
			"Était-ce le salut ? Ou... la plus cruelle des invasions ?",
			"Le silence ne vint pas. Seul un nouveau genre de bruit remplit la ville."
		],
		"spanish": [
			"Las luces de la ciudad se atenuaron por un momento, luego parpadearon de nuevo con una velocidad frenética.",
			"Su voz, transmitida por todas las ondas, era incesante. \"¡No más secretos!\"",
			"La gente sabía todo el uno del otro y sonrió fríamente.",
			"¿Fue salvación? O... ¿la invasión más cruel?",
			"El silencio no llegó. Solo un nuevo tipo de ruido llenó la ciudad."
		],
		"vietnamese": [
			"Đèn thành phố mờ đi một lát, rồi lại nhấp nháy với tốc độ điên cuồng.",
			"Giọng nói của anh ta, vang vọng trên mọi sóng phát thanh, không ngừng. \"Không còn bí mật nào nữa!\"",
			"Mọi người biết tất cả về nhau và mỉm cười lạnh lùng.",
			"Đó là sự cứu rỗi ư? Hay… sự xâm phạm tàn nhẫn nhất?",
			"Sự im lặng không đến. Chỉ có một loại tiếng ồn mới lấp đầy thành phố."
		],
		"thai": [
			"แสงไฟของเมืองหรี่ลงชั่วขณะ จากนั้นก็กระพริบกลับมาด้วยความเร็วที่บ้าคลั่ง",
			"เสียงของเขาที่ออกอากาศทุกช่องทางไม่ขาดสาย \"ไม่มีความลับอีกต่อไป!\"",
			"ผู้คนรู้ทุกสิ่งเกี่ยวกับกันและกัน และยิ้มอย่างเย็นชา",
			"มันคือการช่วยให้รอดพ้นงั้นหรือ? หรือ... การรุกรานที่โหดร้ายที่สุด?",
			"ความเงียบไม่ได้มาถึง มีเพียงเสียงรบกวนชนิดใหม่เท่านั้นที่เติมเต็มเมือง"
		],
		"hindi": [
			"शहर की रोशनी एक पल के लिए मंद हो गई, फिर frantic गति से वापस चमक उठी।",
			"उसकी आवाज़, हर प्रसारण पर, लगातार आ रही थी। \"कोई रहस्य नहीं!\"।",
			"लोग एक-दूसरे के बारे में सब कुछ जानते थे और उन्होंने ठंडी मुस्कान बिखेरी।",
			"क्या यह मोक्ष था? या... सबसे क्रूर घुसपैठ?",
			"खामोशी नहीं आई। शहर में केवल एक नए प्रकार का शोर भर गया।"
		]
	}
} as const;
