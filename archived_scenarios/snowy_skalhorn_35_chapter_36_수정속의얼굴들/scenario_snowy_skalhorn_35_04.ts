export const scenario_snowy_skalhorn_35_04 = {
	"scenario_id": "snowy_skalhorn_35_04",
	"order": 4,
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "뿔잔의 표면이 투명해졌다. 얼음 속에서 수많은 얼굴이 아른거린다.",
						"english": "The surface of the horn chalice became transparent. Countless faces shimmer in the ice.",
						"japanese": "角杯の表面が透明になった。氷の中で数多くの顔がちらつく。",
						"chinese": "角杯的表面变得透明了。无数张脸在冰中若隐若现。",
						"french": "La surface du calice en corne est devenue transparente. D'innombrables visages scintillent dans la glace.",
						"spanish": "La superficie del cáliz de cuerno se volvió transparente. Innumerables rostros brillan en el hielo.",
						"vietnamese": "Bề mặt chiếc sừng cúp đã trong suốt. Vô số khuôn mặt lấp lánh trong băng.",
						"thai": "ผิวของถ้วยเขาโปร่งใสขึ้น ใบหน้าจำนวนมากส่องประกายในน้ำแข็ง",
						"hindi": "सींग के प्याले की सतह पारदर्शी हो गई। बर्फ में अनगिनत चेहरे झिलमिला रहे हैं।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 얼굴들… 마치 역사의 한 조각 같군요.",
						"english": "These faces... they're like a piece of history.",
						"japanese": "これらの顔… まるで歴史の一片のようです。",
						"chinese": "这些面孔……仿佛是历史的碎片。",
						"french": "Ces visages... on dirait un fragment d'histoire.",
						"spanish": "Estos rostros... parecen un fragmento de la historia.",
						"vietnamese": "Những khuôn mặt này… cứ như một mảnh lịch sử vậy.",
						"thai": "ใบหน้าเหล่านี้... เหมือนเศษเสี้ยวหนึ่งของประวัติศาสตร์",
						"hindi": "ये चेहरे... मानो इतिहास का एक टुकड़ा हों।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저게 대체 뭐야? 다 환영 아니었어?",
						"english": "What in the world is that? Weren't they all illusions?",
						"japanese": "あれは一体何だ？全部幻じゃなかったのか？",
						"chinese": "那到底是什么？不都是幻影吗？",
						"french": "Qu'est-ce que c'est que ça ? Ce n'étaient pas des illusions ?",
						"spanish": "¿Qué demonios es eso? ¿No eran todas ilusiones?",
						"vietnamese": "Cái quái gì thế kia? Không phải tất cả đều là ảo ảnh sao?",
						"thai": "นั่นมันอะไรกันแน่? พวกมันไม่ใช่ภาพลวงตาเหรอ?",
						"hindi": "आखिर वो क्या है? क्या वो सब भ्रम नहीं थे?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니요. 환영이 아니에요. 이건… 기억이에요.",
						"english": "No. They're not illusions. These are... memories.",
						"japanese": "いいえ。幻ではありません。これは… 記憶です。",
						"chinese": "不。它们不是幻影。这是……记忆。",
						"french": "Non. Ce ne sont pas des illusions. Ce sont... des souvenirs.",
						"spanish": "No. No son ilusiones. Esto es... memoria.",
						"vietnamese": "Không. Chúng không phải ảo ảnh. Đây là… ký ức.",
						"thai": "ไม่ใช่ค่ะ ไม่ใช่ภาพลวงตา นี่คือ... ความทรงจำ",
						"hindi": "नहीं। वे भ्रम नहीं हैं। ये... यादें हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낯선 기억이 스쳐요. 누군가의 마지막 순간인 것 같아요.",
						"english": "An unfamiliar memory flashes by. It feels like someone's last moment.",
						"japanese": "見知らぬ記憶がよぎる。誰かの最期の瞬間のようだ。",
						"chinese": "陌生的记忆闪过。这似乎是某人的最后时刻。",
						"french": "Un souvenir étranger me traverse l'esprit. On dirait le dernier instant de quelqu'un.",
						"spanish": "Un recuerdo desconocido me atraviesa. Parece el último momento de alguien.",
						"vietnamese": "Một ký ức xa lạ thoáng qua. Dường như là khoảnh khắc cuối cùng của ai đó.",
						"thai": "ความทรงจำที่ไม่คุ้นเคยแล่นผ่านไป เหมือนช่วงเวลาสุดท้ายของใครบางคน",
						"hindi": "एक अपरिचित स्मृति कौंध रही है। ऐसा लगता है जैसे किसी का अंतिम क्षण हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억? 누가 우리한테 그걸 보낸 거야?",
						"english": "Memories? Who sent them to us?",
						"japanese": "記憶？誰が私たちにそれを送ったんだ？",
						"chinese": "记忆？谁把它们发送给我们的？",
						"french": "Des souvenirs ? Qui nous les a envoyés ?",
						"spanish": "¿Memorias? ¿Quién nos las envió?",
						"vietnamese": "Ký ức ư? Ai đã gửi chúng cho chúng ta?",
						"thai": "ความทรงจำ? ใครส่งมาให้เรา?",
						"hindi": "यादें? हमें वो किसने भेजीं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록해야 해요. 이들의 목소리를 들어야만 해.",
						"english": "I must record them. I must hear their voices.",
						"japanese": "記録しなければ。彼らの声を聞かなければならない。",
						"chinese": "我必须记录下来。必须倾听他们的声音。",
						"french": "Je dois les enregistrer. Je dois entendre leurs voix.",
						"spanish": "Debo registrarlos. Debo escuchar sus voces.",
						"vietnamese": "Tôi phải ghi lại. Tôi phải nghe giọng nói của họ.",
						"thai": "ฉันต้องบันทึกไว้ ฉันต้องได้ยินเสียงของพวกเขา",
						"hindi": "मुझे उन्हें रिकॉर्ड करना होगा। मुझे उनकी आवाज़ें सुननी होंगी।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 저 얼굴들이… 한때 살아있던 사람들이라고?",
						"english": "So those faces... were once living people?",
						"japanese": "じゃああの顔は… かつて生きていた人たちだったの？",
						"chinese": "所以那些面孔……曾经是活生生的人？",
						"french": "Alors ces visages... étaient autrefois des personnes vivantes ?",
						"spanish": "¿Así que esas caras... fueron una vez personas vivas?",
						"vietnamese": "Vậy những khuôn mặt đó... từng là người sống sao?",
						"thai": "งั้นใบหน้าเหล่านั้น... เคยเป็นคนที่มีชีวิตอยู่เหรอ?",
						"hindi": "तो वो चेहरे... कभी जीवित लोग थे?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 기억은… 얼어붙던 마을의 모습이에요.",
						"english": "This memory... is of a frozen village.",
						"japanese": "この記憶は… 凍りついた村の姿です。",
						"chinese": "这段记忆……是一个冰封村庄的景象。",
						"french": "Ce souvenir... est celui d'un village gelé.",
						"spanish": "Este recuerdo... es de un pueblo congelado.",
						"vietnamese": "Ký ức này... là hình ảnh một ngôi làng đóng băng.",
						"thai": "ความทรงจำนี้... คือภาพของหมู่บ้านที่ถูกแช่แข็ง",
						"hindi": "यह याद... एक जमे हुए गाँव की है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "얼어붙어? 설마 우리 마을처럼?",
						"english": "Frozen? Like our village, perhaps?",
						"japanese": "凍りつく？ まさか、私たちの村のように？",
						"chinese": "冰封？难道像我们村庄一样？",
						"french": "Gelé ? Comme notre village, peut-être ?",
						"spanish": "¿Congelado? ¿Quizás como nuestro pueblo?",
						"vietnamese": "Đóng băng ư? Chẳng lẽ giống làng của chúng ta?",
						"thai": "ถูกแช่แข็ง? ไม่นะ, เหมือนหมู่บ้านของเราเหรอ?",
						"hindi": "जमा हुआ? कहीं हमारे गाँव की तरह तो नहीं?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "비명, 그리고 차가운 침묵. 분명히 누군가가 살던 곳이에요.",
						"english": "Screams, then cold silence. Someone definitely lived here.",
						"japanese": "悲鳴、そして冷たい沈黙。きっと誰かが住んでいた場所だ。",
						"chinese": "尖叫声，然后是冰冷的沉默。这里肯定有人住过。",
						"french": "Des cris, puis un silence froid. Quelqu'un vivait clairement ici.",
						"spanish": "Gritos, y luego un silencio frío. Definitivamente alguien vivió aquí.",
						"vietnamese": "Tiếng thét, rồi sự im lặng lạnh lẽo. Rõ ràng đã có người sống ở đây.",
						"thai": "เสียงกรีดร้อง แล้วความเงียบอันเย็นเยียบ แน่นอนว่าเคยมีคนอยู่ที่นี่",
						"hindi": "चीखें, और फिर ठंडी खामोशी। यकीनन कोई यहाँ रहता था।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…충분해. 이제 저것들이 뭘 원하는지 알겠어.",
						"english": "...Enough. I know what they want now.",
						"japanese": "…もう十分だ。やつらが何を望んでいるのか、もう分かった。",
						"chinese": "……够了。我现在知道它们想要什么了。",
						"french": "...Ça suffit. Je sais maintenant ce qu'ils veulent.",
						"spanish": "...Basta. Ahora sé lo que quieren.",
						"vietnamese": "...Đủ rồi. Giờ tôi biết chúng muốn gì.",
						"thai": "...พอแล้ว ฉันรู้แล้วว่าพวกมันต้องการอะไร",
						"hindi": "...बस करो। अब मैं जानता हूँ कि वे क्या चाहते हैं।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "뿔잔에서 들려오는 노래. 그 가락이 점점 비명처럼 들려요.",
						"english": "A song from the horn cup. Its melody sounds more and more like a scream.",
						"japanese": "角杯から聞こえる歌。その調べが、だんだん悲鳴のように聞こえる。",
						"chinese": "号角杯中传来的歌声。那旋律越来越像尖叫。",
						"french": "Une chanson venant de la coupe en corne. Sa mélodie ressemble de plus en plus à un cri.",
						"spanish": "Una canción que emana del cuerno. Su melodía suena cada vez más a un grito.",
						"vietnamese": "Bài hát từ chiếc cốc sừng. Giai điệu đó ngày càng nghe như tiếng thét.",
						"thai": "เพลงที่ดังมาจากถ้วยเขา เสียงเพลงนั้นเริ่มฟังดูเหมือนเสียงกรีดร้องมากขึ้นเรื่อยๆ",
						"hindi": "सींग के प्याले से आता गीत। उसकी धुन धीरे-धीरे चीख जैसी लगने लगी है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 노래가 아니야. 저주 같은 거였어.",
						"english": "This isn't a song. It was more like a curse.",
						"japanese": "これは歌じゃない。呪いのようなものだったんだ。",
						"chinese": "这不是歌。这更像是一种诅咒。",
						"french": "Ce n'est pas une chanson. C'était plutôt une malédiction.",
						"spanish": "Esto no es una canción. Era más bien una maldición.",
						"vietnamese": "Đây không phải là một bài hát. Nó giống như một lời nguyền.",
						"thai": "นี่ไม่ใช่เพลง มันเหมือนคำสาปต่างหาก",
						"hindi": "यह कोई गाना नहीं है। यह एक श्राप जैसा था।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이들은 잊히는 것을 두려워했어요. 그래서 제게 기억을 보낸 거예요.",
						"english": "They were afraid of being forgotten. That's why they sent me these memories.",
						"japanese": "彼らは忘れられることを恐れていた。だから私に記憶を送ってきたんだ。",
						"chinese": "他们害怕被遗忘。所以他们把记忆送给了我。",
						"french": "Ils avaient peur d'être oubliés. C'est pourquoi ils m'ont envoyé ces souvenirs.",
						"spanish": "Tenían miedo de ser olvidados. Por eso me enviaron estos recuerdos.",
						"vietnamese": "Họ sợ bị lãng quên. Đó là lý do họ gửi những ký ức này cho tôi.",
						"thai": "พวกเขากลัวที่จะถูกลืม นั่นคือเหตุผลที่พวกเขาส่งความทรงจำเหล่านี้มาให้ฉัน",
						"hindi": "वे भूले जाने से डरते थे। इसलिए उन्होंने मुझे ये यादें भेजीं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "저것들을 멈춰야 해. 더는 누구도 갇히게 할 수 없어.",
						"english": "I have to stop them. No one else can be trapped.",
						"japanese": "やつらを止めなければ。これ以上、誰も閉じ込めさせるわけにはいかない。",
						"chinese": "我必须阻止它们。不能再让任何人被困住了。",
						"french": "Je dois les arrêter. Plus personne ne peut être piégé.",
						"spanish": "Debo detenerlos. Nadie más puede quedar atrapado.",
						"vietnamese": "Tôi phải ngăn chúng lại. Không thể để ai khác bị mắc kẹt nữa.",
						"thai": "ฉันต้องหยุดพวกมัน จะไม่มีใครถูกกักขังอีกต่อไป",
						"hindi": "मुझे उन्हें रोकना होगा। अब कोई और फँस नहीं सकता।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "…나조차도 잊었던 기억… 고통만이 남아있을 뿐인데…",
						"english": "...Memories even I had forgotten... only pain remains...",
						"japanese": "…私さえ忘れていた記憶…苦痛だけが残っているだけなのに…",
						"chinese": "……连我也遗忘的记忆……只剩下痛苦了……",
						"french": "...Des souvenirs que même moi j'avais oubliés... seule la douleur demeure...",
						"spanish": "...Recuerdos que incluso yo había olvidado... solo queda dolor...",
						"vietnamese": "...Những ký ức ngay cả ta cũng đã quên... chỉ còn lại nỗi đau...",
						"thai": "...ความทรงจำที่แม้แต่ข้าก็ลืมเลือนไปแล้ว...เหลือเพียงความเจ็บปวดเท่านั้น...",
						"hindi": "...यादें जो मैं भी भूल चुका था... केवल दर्द ही बचा है..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "결국 모두가 피해자였어.",
						"english": "In the end, everyone was a victim.",
						"japanese": "結局、誰もが被害者だった。",
						"chinese": "最终，所有人都是受害者。",
						"french": "Au final, tout le monde était victime.",
						"spanish": "Al final, todos eran víctimas.",
						"vietnamese": "Cuối cùng, mọi người đều là nạn nhân.",
						"thai": "ท้ายที่สุดแล้ว ทุกคนก็เป็นเหยื่อ",
						"hindi": "अंत में, हर कोई पीड़ित था।"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 기억들… 뿔잔의 심장과 연결되어 있어요.",
						"english": "These memories... are connected to the heart of the Horned Chalice.",
						"japanese": "この記憶たち…角杯の心臓と繋がっている。",
						"chinese": "这些记忆……与号角圣杯的心脏相连。",
						"french": "Ces souvenirs... sont liés au cœur du Calice Cornu.",
						"spanish": "Estos recuerdos... están conectados al corazón del Cáliz Cornudo.",
						"vietnamese": "Những ký ức này... được kết nối với trái tim của Chén Sừng.",
						"thai": "ความทรงจำเหล่านี้...เชื่อมโยงกับหัวใจของจอกเขา",
						"hindi": "ये यादें... सींग वाले प्याले के दिल से जुड़ी हुई हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "갇힌 자들의 기억은 뿔잔의 가장 깊은 곳을 가리켰다.",
						"english": "The memories of the imprisoned pointed to the deepest part of the Horned Chalice.",
						"japanese": "囚われた者たちの記憶は、角杯の最も深い場所を指し示した。",
						"chinese": "被囚禁者的记忆指向了号角圣杯最深处。",
						"french": "Les souvenirs des prisonniers indiquaient la partie la plus profonde du Calice Cornu.",
						"spanish": "Los recuerdos de los encarcelados señalaban la parte más profunda del Cáliz Cornudo.",
						"vietnamese": "Ký ức của những kẻ bị giam cầm đã chỉ đến nơi sâu thẳm nhất của Chén Sừng.",
						"thai": "ความทรงจำของผู้ถูกจองจำชี้ไปยังส่วนที่ลึกที่สุดของจอกเขา",
						"hindi": "कैद किए गए लोगों की यादें सींग वाले प्याले के सबसे गहरे हिस्से की ओर इशारा करती हैं।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "기억의 파도가 모든 것을 집어삼켰다.",
						"english": "The wave of memories swallowed everything.",
						"japanese": "記憶の波が全てを飲み込んだ。",
						"chinese": "记忆之潮吞噬了一切。",
						"french": "La vague de souvenirs a tout englouti.",
						"spanish": "La ola de recuerdos lo engulló todo.",
						"vietnamese": "Làn sóng ký ức đã nuốt chửng mọi thứ.",
						"thai": "คลื่นแห่งความทรงจำกลืนกินทุกสิ่ง",
						"hindi": "यादों की लहर ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희 또한 잊힐 뿐이다… 영원히.",
						"english": "You too shall be forgotten... forever.",
						"japanese": "お前たちも忘れ去られる…永遠に。",
						"chinese": "你们也只会被遗忘……永生永世。",
						"french": "Vous aussi serez oubliés... pour toujours.",
						"spanish": "Vosotros también seréis olvidados... para siempre.",
						"vietnamese": "Các ngươi cũng sẽ bị lãng quên... mãi mãi.",
						"thai": "พวกเจ้าก็จะถูกลืมเลือน... ตลอดกาล",
						"hindi": "तुम भी भुला दिए जाओगे... हमेशा के लिए।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니, 절대 잊지 않아. 반드시 밝혀낼 거야.",
						"english": "No, I'll never forget. I'll uncover the truth.",
						"japanese": "いや、決して忘れない。必ず突き止める。",
						"chinese": "不，我绝不会忘记。我一定会查明真相。",
						"french": "Non, je n'oublierai jamais. Je découvrirai la vérité.",
						"spanish": "No, nunca olvidaré. Descubriré la verdad.",
						"vietnamese": "Không, tôi sẽ không bao giờ quên. Tôi sẽ tìm ra sự thật.",
						"thai": "ไม่ ฉันจะไม่มีวันลืม ฉันจะเปิดเผยความจริงให้ได้",
						"hindi": "नहीं, मैं कभी नहीं भूलूंगा। मैं ज़रूर पता लगाऊंगा।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기억이 응축된 방. 정체 모를 존재가 길을 막아섰다.",
						"english": "A room where memories condense. An unknown entity bars the way.",
						"japanese": "記憶が凝縮された部屋。正体不明の存在が道を塞いでいる。",
						"chinese": "记忆凝结之室。不明存在阻挡了去路。",
						"french": "Une pièce où les souvenirs se condensent. Une entité inconnue bloque le passage.",
						"spanish": "Una sala donde los recuerdos se condensan. Una entidad desconocida bloquea el camino.",
						"vietnamese": "Căn phòng ký ức ngưng đọng. Một thực thể vô danh chắn lối.",
						"thai": "ห้องที่ความทรงจำควบแน่น สิ่งดำรงอยู่ที่ไม่รู้จักปิดกั้นหนทาง",
						"hindi": "एक कमरा जहाँ यादें घनीभूत होती हैं। एक अज्ञात सत्ता ने रास्ता रोक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…누가 감히 잠든 자들의 평화를 깨는가.",
						"english": "...Who dares disturb the peace of the slumbering?",
						"japanese": "…誰が、眠れる者たちの安寧を乱すというのか。",
						"chinese": "……谁敢扰乱沉睡者的安宁？",
						"french": "...Qui ose troubler la paix de ceux qui sommeillent ?",
						"spanish": "...¿Quién se atreve a perturbar la paz de los durmientes?",
						"vietnamese": "...Ai dám phá vỡ sự yên bình của những kẻ đang ngủ say?",
						"thai": "...ใครบังอาจมารบกวนความสงบของผู้หลับใหล?",
						"hindi": "...कौन सोए हुए लोगों की शांति भंग करने की हिम्मत करता है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 모든 기억을 가두고 있는 거지?",
						"english": "You're the one trapping all these memories, aren't you?",
						"japanese": "お前が、この全ての記憶を閉じ込めているのだろう？",
						"chinese": "是你禁锢了所有这些记忆，对吧？",
						"french": "C'est toi qui retiens tous ces souvenirs, n'est-ce pas ?",
						"spanish": "Tú eres quien está atrapando todos estos recuerdos, ¿verdad?",
						"vietnamese": "Ngươi đang giam giữ tất cả ký ức này, đúng không?",
						"thai": "เจ้าเป็นคนกักขังความทรงจำทั้งหมดนี้ไว้ใช่ไหม?",
						"hindi": "तुम ही हो जिसने इन सभी यादों को कैद कर रखा है, है ना?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것은 잊혀야 할 진실. 그것을 왜 되살리려 하는가.",
						"english": "All of it is truth that should be forgotten. Why revive it?",
						"japanese": "全ては忘れ去られるべき真実。なぜそれを呼び戻そうとする。",
						"chinese": "一切都是应该被遗忘的真相。为何要将其复活？",
						"french": "Tout cela est une vérité qui devrait être oubliée. Pourquoi la raviver ?",
						"spanish": "Todo es una verdad que debería ser olvidada. ¿Por qué revivirla?",
						"vietnamese": "Tất cả là sự thật nên bị lãng quên. Sao lại muốn hồi sinh nó?",
						"thai": "ทั้งหมดคือความจริงที่ควรถูกลืม เหตุใดจึงต้องการชุบชีวิตมันขึ้นมา?",
						"hindi": "यह सब वह सच है जिसे भुला दिया जाना चाहिए। इसे क्यों पुनर्जीवित करना चाहते हो?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬은… 당신도 갇힌 자들의 일부라는 기록이군요.",
						"english": "This rune... it records that you too are part of the imprisoned.",
						"japanese": "このルーンは…あなたも囚われた者たちの一部であるという記録なのですね。",
						"chinese": "这符文……记录着你也是被囚禁者的一部分。",
						"french": "Cette rune... elle indique que vous aussi faites partie des prisonniers.",
						"spanish": "Esta runa... registra que tú también eres parte de los encarcelados.",
						"vietnamese": "Dấu ấn này... ghi lại rằng ngươi cũng là một phần của những kẻ bị giam cầm.",
						"thai": "อักขระนี้...มันบันทึกว่าท่านเองก็เป็นส่วนหนึ่งของผู้ถูกจองจำเช่นกัน",
						"hindi": "यह रुन... यह दर्ज करता है कि तुम भी कैद किए गए लोगों का हिस्सा हो।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 수정이 더욱 투명해졌다.",
			"그 안에서 일그러진 얼굴들이 어른거린다.",
			"이들은 누구인가. 왜 이곳에 갇혔는가.",
			"에이라는 기록한다. 잊힌 자들의 마지막 기억을."
		],
		"english": [
			"The horn chalice's crystal grew clearer.",
			"Within it, distorted faces shimmer.",
			"Who are they? Why are they trapped here?",
			"Aira records. The last memories of the forgotten."
		],
		"japanese": [
			"角杯の水晶がさらに透明になった。",
			"その中に歪んだ顔がちらつく。",
			"彼らは誰なのか。なぜここに閉じ込められているのか。",
			"アイラは記録する。忘れられた者たちの最後の記憶を。"
		],
		"chinese": [
			"角杯的水晶变得更加透明了。",
			"其中扭曲的面孔若隐若现。",
			"他们是谁？为何被困于此？",
			"艾拉记录。被遗忘者们的最后记忆。"
		],
		"french": [
			"Le cristal du calice s'est éclairci.",
			"Des visages déformés y scintillent.",
			"Qui sont-ils ? Pourquoi sont-ils piégés ici ?",
			"Aira enregistre. Les derniers souvenirs des oubliés."
		],
		"spanish": [
			"El cristal del cáliz de cuerno se volvió más transparente.",
			"Rostros distorsionados se vislumbran en su interior.",
			"¿Quiénes son? ¿Por qué están atrapados aquí?",
			"Aira registra. Los últimos recuerdos de los olvidados."
		],
		"vietnamese": [
			"Tinh thể của chiếc sừng cúp trở nên trong suốt hơn.",
			"Những khuôn mặt méo mó lờ mờ hiện ra bên trong.",
			"Họ là ai? Tại sao họ bị mắc kẹt ở đây?",
			"Aira ghi lại. Những ký ức cuối cùng của những người bị lãng quên."
		],
		"thai": [
			"คริสตัลในจอกเขาโปร่งใสขึ้น",
			"ใบหน้าบิดเบี้ยวปรากฏอยู่ในนั้น",
			"พวกเขาคือใคร ทำไมถึงถูกขังอยู่ที่นี่?",
			"ไอราบันทึก ความทรงจำสุดท้ายของผู้ถูกลืม"
		],
		"hindi": [
			"सींग के प्याले का क्रिस्टल और भी पारदर्शी हो गया।",
			"उसके अंदर विकृत चेहरे झिलमिला रहे हैं।",
			"ये कौन हैं? इन्हें यहाँ क्यों फँसाया गया है?",
			"ऐरा दर्ज करती है। भूले हुए लोगों की अंतिम यादें।"
		]
	}
} as const;
