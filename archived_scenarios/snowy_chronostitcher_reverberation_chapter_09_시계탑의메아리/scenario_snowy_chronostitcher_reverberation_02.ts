export const scenario_snowy_chronostitcher_reverberation_02 = {
	"scenario_id": "snowy_chronostitcher_reverberation_02",
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
						"korean": "시간의 굴곡이 가장 심한 곳. 어린 아이들의 환영이 떠돌았다.",
						"english": "Where time's distortions were most severe. Illusions of young children wandered.",
						"japanese": "時間の歪みが最も深い場所。幼い子供たちの幻影がさまよっていた。",
						"chinese": "时间扭曲最甚之地。幼童幻影游荡。",
						"french": "Là où les distorsions du temps étaient les plus fortes. Des fantômes d'enfants erraient.",
						"spanish": "El lugar donde las distorsiones del tiempo eran más severas. Vagaban las ilusiones de niños pequeños.",
						"vietnamese": "Nơi thời gian biến dạng nặng nề nhất. Những ảo ảnh trẻ thơ lang thang.",
						"thai": "สถานที่ซึ่งความบิดเบี้ยวของเวลารุนแรงที่สุด ภาพหลอนของเด็กๆ ล่องลอย",
						"hindi": "जहाँ समय की विकृतियाँ सबसे अधिक थीं। छोटे बच्चों के भ्रम भटकते रहे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아이들이… 왜 여기에?",
						"english": "Children... why are they here?",
						"japanese": "子供たちが…なぜここに？",
						"chinese": "孩子们…为何在此？",
						"french": "Des enfants... pourquoi sont-ils ici ?",
						"spanish": "¿Niños... por qué están aquí?",
						"vietnamese": "Bọn trẻ... sao lại ở đây?",
						"thai": "เด็กๆ... ทำไมถึงมาอยู่ที่นี่?",
						"hindi": "बच्चे... वे यहाँ क्यों हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐흑… 엄마… 아빠…",
						"english": "Sob... Mom... Dad...",
						"japanese": "うう…ママ…パパ…",
						"chinese": "呜呜…妈妈…爸爸…",
						"french": "Snif... Maman... Papa...",
						"spanish": "Snif... Mamá... Papá...",
						"vietnamese": "Hức... Mẹ... Cha...",
						"thai": "ฮึก... แม่... พ่อ...",
						"hindi": "सिसकियाँ... माँ... पिताजी..."
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "괜찮니?",
						"english": "Are you alright?",
						"japanese": "大丈夫？",
						"chinese": "你还好吗？",
						"french": "Ça va ?",
						"spanish": "¿Estás bien?",
						"vietnamese": "Con có sao không?",
						"thai": "ไม่เป็นไรนะ?",
						"hindi": "क्या तुम ठीक हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "계속… 이 순간만… 흐흑.",
						"english": "Always... just this moment... sob.",
						"japanese": "ずっと…この瞬間だけ…うう。",
						"chinese": "一直…只有这一刻…呜呜。",
						"french": "Toujours... juste cet instant... snif.",
						"spanish": "Siempre... solo este momento... snif.",
						"vietnamese": "Mãi mãi... chỉ khoảnh khắc này... hức.",
						"thai": "ตลอดไป... แค่ช่วงเวลานี้... ฮึก",
						"hindi": "हमेशा... बस यही पल... सिसकियाँ।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "저기 봐… 다른 아이들도… 계속 똑같은 놀이를 해.",
						"english": "Look... the other children too... they keep playing the same game.",
						"japanese": "あそこ見て…他の子たちも…ずっと同じ遊びをしてる。",
						"chinese": "你看…其他孩子们也…一直玩着同样的游戏。",
						"french": "Regarde... les autres enfants aussi... ils continuent à jouer au même jeu.",
						"spanish": "Mira... los otros niños también... siguen jugando el mismo juego.",
						"vietnamese": "Nhìn kìa... những đứa trẻ khác cũng... cứ chơi mãi một trò.",
						"thai": "ดูนั่นสิ... เด็กคนอื่นๆ ก็... เล่นเกมเดิมซ้ำๆ",
						"hindi": "देखो... दूसरे बच्चे भी... वही खेल खेलते रहते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "같은 행동만… 반복한다고?",
						"english": "Repeating the same actions... over and over?",
						"japanese": "「同じ行動ばかり…繰り返すって？」",
						"chinese": "“只是重复…同样的行为吗？”",
						"french": "« Répéter les mêmes actions... encore et encore ? »",
						"spanish": "¿Repetir las mismas acciones... una y otra vez?",
						"vietnamese": "Chỉ lặp đi lặp lại… cùng một hành động?",
						"thai": "ทำแต่สิ่งเดิมๆ… ซ้ำไปซ้ำมางั้นเหรอ?",
						"hindi": "वही हरकतें... दोहरा रहे हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "응… 무서워. 흐흑.",
						"english": "Yes... I'm scared. *sob*",
						"japanese": "「うん…怖いよ。しくしく。」",
						"chinese": "“嗯…好可怕。呜呜。”",
						"french": "« Oui... j'ai peur. *sanglots* »",
						"spanish": "Sí... tengo miedo. *sollozo*",
						"vietnamese": "Vâng… tôi sợ. *khóc thút thít*",
						"thai": "อือ… กลัวจัง. *สะอื้น*",
						"hindi": "हाँ... मैं डरा हुआ हूँ। *सिसकियाँ*"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "(갑자기 다른 목소리로) “시간의 균형을 위해… 필요한 희생이다.”",
						"english": "(Suddenly, in a different voice) “For the balance of time... it is a necessary sacrifice.”",
						"japanese": "「（突然、別の声で）「時間の均衡のために…必要な犠牲だ。」」",
						"chinese": " (突然，换了一种声音) “为了时间的平衡…这是必要的牺牲。”",
						"french": "« (Soudain, d'une autre voix) « Pour l'équilibre du temps... c'est un sacrifice nécessaire. » »",
						"spanish": "(De repente, con otra voz) “Por el equilibrio del tiempo... es un sacrificio necesario.”",
						"vietnamese": "(Đột nhiên, bằng một giọng nói khác) \"Vì sự cân bằng của thời gian… đây là sự hy sinh cần thiết.\"",
						"thai": "(ทันใดนั้น ด้วยเสียงที่ต่างออกไป) \"เพื่อความสมดุลของเวลา... นี่คือการเสียสละที่จำเป็น\"",
						"hindi": "(अचानक, एक अलग आवाज़ में) \"समय के संतुलन के लिए... यह एक आवश्यक बलिदान है।\""
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "방금 그 말은… 누구?",
						"english": "That voice just now... who was it?",
						"japanese": "「今の言葉は…誰？」",
						"chinese": "“刚才那个声音是…谁？”",
						"french": "« Ces mots à l'instant... qui était-ce ? »",
						"spanish": "Esas palabras de hace un momento... ¿quién fue?",
						"vietnamese": "Lời nói vừa rồi… là ai?",
						"thai": "คำพูดเมื่อกี้… ใครน่ะ?",
						"hindi": "वो आवाज़ अभी... कौन था?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "몰라… 꿈에서… 계속 들려…",
						"english": "I don't know... I keep hearing it... in my dreams...",
						"japanese": "「分からない…夢で…ずっと聞こえるんだ…」",
						"chinese": "“不知道…梦里…一直听到…”",
						"french": "« Je ne sais pas... Je l'entends toujours... dans mes rêves... »",
						"spanish": "No lo sé... Sigo oyéndolo... en mis sueños...",
						"vietnamese": "Tôi không biết… tôi cứ nghe thấy nó… trong giấc mơ…",
						"thai": "ไม่รู้สิ… ได้ยินในฝัน… ตลอดเลย…",
						"hindi": "पता नहीं... मुझे यह... सपनों में... सुनाई देता रहता है..."
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "또 그 꿈이야…",
						"english": "That dream again...",
						"japanese": "「またあの夢だ…」",
						"chinese": "“又是那个梦…”",
						"french": "« Encore ce rêve... »",
						"spanish": "Ese sueño otra vez...",
						"vietnamese": "Lại là giấc mơ đó…",
						"thai": "ฝันนั่นอีกแล้ว…",
						"hindi": "फिर वही सपना..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "“파괴만이… 새로운 시간을 만들 수 있다.”",
						"english": "“Only destruction... can create new time.”",
						"japanese": "「「破壊だけが…新たな時間を作り出せる。」」",
						"chinese": "“只有破坏…才能创造新的时间。”",
						"french": "« « Seule la destruction... peut créer un nouveau temps. » »",
						"spanish": "“Solo la destrucción... puede crear un nuevo tiempo.”",
						"vietnamese": "“Chỉ có sự phá hủy… mới có thể tạo ra thời gian mới.”",
						"thai": "“มีแต่การทำลายล้างเท่านั้น… ที่จะสร้างเวลาใหม่ได้”",
						"hindi": "“केवल विनाश... ही नया समय बना सकता है।”"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벨루스의 목소리인가?",
						"english": "Is that Bellus's voice?",
						"japanese": "「ベルスの声かな？」",
						"chinese": "“是贝尔斯的声音吗？”",
						"french": "« C'est la voix de Bellus ? »",
						"spanish": "¿Es la voz de Bellus?",
						"vietnamese": "Đó là giọng của Bellus sao?",
						"thai": "นั่นเสียงของเบลลัสเหรอ?",
						"hindi": "क्या वह बेलस की आवाज़ है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "으윽… 머리가… 아파.",
						"english": "Ugh... my head... it hurts.",
						"japanese": "「うぅ…頭が…痛い。」",
						"chinese": "“呃…头…好痛。”",
						"french": "« Ugh... ma tête... ça fait mal. »",
						"spanish": "Ugh... mi cabeza... me duele.",
						"vietnamese": "Ư… đầu tôi… đau quá.",
						"thai": "อึก… หัวฉัน… เจ็บจัง.",
						"hindi": "उफ़... मेरा सिर... दर्द कर रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "주인공의 시야가 잠깐 일그러졌다.",
						"english": "The protagonist's vision briefly distorted.",
						"japanese": "「主人公の視界が、一瞬歪んだ。」",
						"chinese": "“主角的视线短暂地扭曲了。”",
						"french": "« La vision du protagoniste s'est brièvement distordue. »",
						"spanish": "La visión del protagonista se distorsionó brevemente.",
						"vietnamese": "Tầm nhìn của nhân vật chính thoáng chốc bị méo mó.",
						"thai": "การมองเห็นของตัวเอกบิดเบี้ยวไปชั่วขณะ",
						"hindi": "नायक की दृष्टि क्षण भर के लिए विकृत हो गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…내 몸이 왜 이러지?",
						"english": "...Why is my body like this?",
						"japanese": "…私の体、どうしてこんなことに？",
						"chinese": "…我的身体怎么了？",
						"french": "…Qu'est-ce qui ne va pas avec mon corps ?",
						"spanish": "…¿Qué le pasa a mi cuerpo?",
						"vietnamese": "...Sao cơ thể mình lại thế này?",
						"thai": "...ทำไมร่างกายฉันถึงเป็นแบบนี้?",
						"hindi": "...मेरे शरीर को क्या हो रहा है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "저기… 저 그림자가… 계속 우리를 보고 있어.",
						"english": "Look… that shadow… it keeps watching us.",
						"japanese": "ねぇ…あの影が…ずっと私たちを見てるよ。",
						"chinese": "你瞧…那个影子…一直在盯着我们。",
						"french": "Regarde… cette ombre… elle nous observe sans cesse.",
						"spanish": "Mira… esa sombra… nos sigue mirando.",
						"vietnamese": "Kìa… cái bóng đó… nó cứ nhìn chúng ta mãi.",
						"thai": "ดูสิ... เงาตัวนั้น... มันจ้องมองเราอยู่ตลอดเลย",
						"hindi": "देखो... वह परछाई... लगातार हमें देख रही है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그림자?",
						"english": "A shadow?",
						"japanese": "影？",
						"chinese": "影子？",
						"french": "Une ombre ?",
						"spanish": "¿Una sombra?",
						"vietnamese": "Cái bóng?",
						"thai": "เงาเหรอ?",
						"hindi": "परछाई?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "응… 엄청 크고… 무서워. 흐흑.",
						"english": "Yeah… it's huge… and scary. *sob*",
						"japanese": "うん…すごく大きくて…怖いの。うぅ。",
						"chinese": "嗯…特别大…而且好可怕。呜呜。",
						"french": "Oui… elle est immense… et effrayante. *sanglots*",
						"spanish": "Sí… es enorme… y da miedo. *sollozo*",
						"vietnamese": "Vâng… nó rất lớn… và đáng sợ. Hức hức.",
						"thai": "อือ... ใหญ่มากเลย... แล้วก็น่ากลัวด้วย ฮือๆ",
						"hindi": "हाँ... वह बहुत बड़ी है... और डरावनी भी। *सिसकी*"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "저 아이들을 두고 갈 수 없어.",
						"english": "I can't leave those children behind.",
						"japanese": "あの子たちを置いていけない。",
						"chinese": "我不能丢下那些孩子们。",
						"french": "Je ne peux pas laisser ces enfants derrière moi.",
						"spanish": "No puedo dejar a esos niños atrás.",
						"vietnamese": "Tôi không thể bỏ lại những đứa trẻ đó.",
						"thai": "ฉันทิ้งเด็กพวกนั้นไปไม่ได้",
						"hindi": "मैं उन बच्चों को अकेला नहीं छोड़ सकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "저 그림자가 아이들을 가두고 있는 걸까?",
						"english": "Is that shadow trapping the children?",
						"japanese": "あの影が子どもたちを閉じ込めているのかな？",
						"chinese": "那个影子把孩子们困住了吗？",
						"french": "Cette ombre retient-elle les enfants prisonniers ?",
						"spanish": "¿Esa sombra está atrapando a los niños?",
						"vietnamese": "Liệu cái bóng đó có đang giam giữ những đứa trẻ không?",
						"thai": "เงาตัวนั้นกำลังกักขังเด็กๆ อยู่เหรอ?",
						"hindi": "क्या वह परछाई बच्चों को फँसा रही है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제… 돌아갈 수 없나.",
						"english": "Now… can we not go back?",
						"japanese": "もう…戻れないのかな。",
						"chinese": "现在…回不去了吗？",
						"french": "Maintenant… on ne peut plus revenir en arrière ?",
						"spanish": "Ahora… ¿ya no podemos volver?",
						"vietnamese": "Giờ… không thể quay lại được nữa sao?",
						"thai": "ตอนนี้... กลับไปไม่ได้แล้วเหรอ?",
						"hindi": "अब... क्या हम वापस नहीं जा सकते?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하지만… 아이들을 구할 거야.",
						"english": "But… I will save the children.",
						"japanese": "でも…子どもたちを救うよ。",
						"chinese": "但是…我会救那些孩子。",
						"french": "Mais… je vais sauver les enfants.",
						"spanish": "Pero… salvaré a los niños.",
						"vietnamese": "Nhưng… tôi sẽ cứu những đứa trẻ.",
						"thai": "แต่... ฉันจะช่วยเด็กๆ",
						"hindi": "लेकिन... मैं बच्चों को बचाऊँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "시간의 섭리를… 거스를 순 없다.",
						"english": "The providence of time... cannot be defied.",
						"japanese": "時間の摂理には…逆らえない。",
						"chinese": "时间的法则…无法违抗。",
						"french": "La providence du temps... est inéluctable.",
						"spanish": "La providencia del tiempo... no puede ser desafiada.",
						"vietnamese": "Không thể chống lại ý trời của thời gian...",
						"thai": "ลิขิตแห่งกาลเวลา...ไม่อาจฝืนได้",
						"hindi": "समय की नियति को... टाला नहीं जा सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃…还没…结束！",
						"french": "Argh... Ce n'est pas... fini !",
						"spanish": "Ugh... ¡Aún no... ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 발버둥…",
						"english": "A foolish struggle...",
						"japanese": "愚かな足掻き…",
						"chinese": "愚蠢的挣扎…",
						"french": "Une lutte vaine...",
						"spanish": "Una lucha insensata...",
						"vietnamese": "Cuộc giãy giụa ngu ngốc...",
						"thai": "การดิ้นรนที่โง่เขลา...",
						"hindi": "एक मूर्खतापूर्ण संघर्ष…"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "(쓰러지며) 멍청한… 짓이다. 시간은… 다시…",
						"english": "(Falling) Foolish… act. Time will… again…",
						"japanese": "(倒れながら) 愚かな… 行いだ。時間は… また…",
						"chinese": "(倒下) 愚蠢… 的举动。时间会… 再次…",
						"french": "(En tombant) Stupide… acte. Le temps… encore…",
						"spanish": "(Cayendo) Acto… estúpido. El tiempo… de nuevo…",
						"vietnamese": "(Ngã xuống) Hành động… ngu ngốc. Thời gian sẽ… lại…",
						"thai": "(ล้มลง) ช่างโง่… เขลานัก เวลาจะ… อีกครั้ง…",
						"hindi": "(गिरते हुए) मूर्खतापूर्ण… हरकत। समय… फिर से…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "…What?",
						"japanese": "…何だと？",
						"chinese": "…你说什么？",
						"french": "…Quoi ?",
						"spanish": "…¿Qué?",
						"vietnamese": "…Cái gì?",
						"thai": "…ว่าไงนะ?",
						"hindi": "…क्या कहा?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "고마워…",
						"english": "Thank you…",
						"japanese": "ありがとう…",
						"chinese": "谢谢…",
						"french": "Merci…",
						"spanish": "Gracias…",
						"vietnamese": "Cảm ơn…",
						"thai": "ขอบคุณนะ…",
						"hindi": "धन्यवाद…"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이제… 엄마 아빠를 찾을 수 있을까?",
						"english": "Now… can I find Mom and Dad?",
						"japanese": "もう…お母さんとお父さんを見つけられるかな？",
						"chinese": "现在…能找到爸爸妈妈了吗？",
						"french": "Maintenant… pourrai-je trouver Maman et Papa ?",
						"spanish": "Ahora… ¿podré encontrar a Mamá y Papá?",
						"vietnamese": "Bây giờ… con có thể tìm thấy bố mẹ không?",
						"thai": "ตอนนี้… ฉันจะหาแม่กับพ่อเจอไหมนะ?",
						"hindi": "अब… क्या मैं माँ और पिताजी को ढूंढ पाऊँगा?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간의 굴레가 풀린 듯, 아이들의 웃음소리가 과거와 현재를 오갔다.",
						"english": "As if the shackles of time were broken, the children's laughter echoed between past and present.",
						"japanese": "時の束縛が解けたかのように、子供たちの笑い声が過去と現在を行き交った。",
						"chinese": "仿佛时间的桎梏已解，孩子们的笑声穿梭于过去与现在。",
						"french": "Comme si les chaînes du temps s'étaient brisées, les rires des enfants traversaient le passé et le présent.",
						"spanish": "Como si las ataduras del tiempo se hubieran roto, las risas de los niños resonaron entre el pasado y el presente.",
						"vietnamese": "Như thể gông xiềng thời gian đã được tháo gỡ, tiếng cười của lũ trẻ vang vọng giữa quá khứ và hiện tại.",
						"thai": "ราวกับโซ่ตรวนแห่งเวลาได้คลายออก เสียงหัวเราะของเด็กๆ ก็ก้องกังวานไปมาระหว่างอดีตและปัจจุบัน",
						"hindi": "जैसे समय के बंधन टूट गए हों, बच्चों की हँसी अतीत और वर्तमान के बीच गूँज उठी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만, 벨루스의 그림자는 여전히 어딘가에 남아 있었다.",
						"english": "However, Bellus's shadow still remained somewhere.",
						"japanese": "しかし、ベルーシの影は依然としてどこかに残っていた。",
						"chinese": "然而，贝尔斯的影子依然残留在某个地方。",
						"french": "Cependant, l'ombre de Bellus subsistait toujours quelque part.",
						"spanish": "Sin embargo, la sombra de Bellus aún permanecía en algún lugar.",
						"vietnamese": "Tuy nhiên, bóng tối của Bellus vẫn còn tồn tại ở đâu đó.",
						"thai": "อย่างไรก็ตาม เงาของเบลลัสยังคงหลงเหลืออยู่ ณ ที่ใดที่หนึ่ง",
						"hindi": "हालांकि, बेलस की परछाई अभी भी कहीं बची हुई थी।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 시간의 잔해가 덩어리처럼 뭉쳐 있었다.",
						"english": "Massive remnants of time were clumped together like a solid mass.",
						"japanese": "巨大な時間の残骸が塊のように固まっていた。",
						"chinese": "巨大的时间残骸像团块一样聚集在一起。",
						"french": "D'énormes fragments de temps étaient agglomérés comme une masse.",
						"spanish": "Enormes vestigios del tiempo se amontonaban como una masa.",
						"vietnamese": "Những tàn dư khổng lồ của thời gian đã tụ lại thành một khối.",
						"thai": "ซากเวลาขนาดมหึมากองรวมกันเป็นก้อน",
						"hindi": "समय के विशाल अवशेष एक पिंड की तरह एकत्रित थे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "침입자여… 이곳은 시간의 정원.",
						"english": "Intruder… This is the Garden of Time.",
						"japanese": "侵入者よ…ここは時間の庭園だ。",
						"chinese": "入侵者啊…这里是时间的庭园。",
						"french": "Intrus… Ceci est le Jardin du Temps.",
						"spanish": "Intruso… Este es el Jardín del Tiempo.",
						"vietnamese": "Kẻ xâm nhập… Đây là Khu vườn Thời gian.",
						"thai": "ผู้บุกรุก... ที่นี่คือสวนแห่งกาลเวลา",
						"hindi": "घुसपैठिए... यह समय का बगीचा है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "함부로 꺾을 수 없다.",
						"english": "Cannot be easily broken.",
						"japanese": "安易に折ることはできない。",
						"chinese": "不可轻易折断。",
						"french": "Impossible à briser facilement.",
						"spanish": "No se puede romper fácilmente.",
						"vietnamese": "Không thể dễ dàng bị bẻ gãy.",
						"thai": "ไม่อาจหักหาญได้ง่ายๆ",
						"hindi": "इसे आसानी से तोड़ा नहीं जा सकता।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아이들을 돌려줘!",
						"english": "Give the children back!",
						"japanese": "子供たちを返して！",
						"chinese": "把孩子们还给我！",
						"french": "Rendez-moi les enfants !",
						"spanish": "¡Devuélveme a los niños!",
						"vietnamese": "Trả lại lũ trẻ!",
						"thai": "คืนเด็กๆ มา!",
						"hindi": "बच्चों को वापस करो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "흐흑… 무서워…",
						"english": "Sob… I'm scared…",
						"japanese": "うう…怖い…",
						"chinese": "呜呜…好可怕…",
						"french": "Snif… J'ai peur…",
						"spanish": "Snif… tengo miedo…",
						"vietnamese": "Hức hức… Sợ quá…",
						"thai": "ฮึก… กลัวจัง…",
						"hindi": "सिसक… मुझे डर लग रहा है…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간의 정체는… 영원한 평화.",
						"english": "The true nature of time is… eternal peace.",
						"japanese": "時の正体は…永遠の平和。",
						"chinese": "时间的真面目是…永恒的和平。",
						"french": "La véritable nature du temps est… la paix éternelle.",
						"spanish": "La verdadera naturaleza del tiempo es… la paz eterna.",
						"vietnamese": "Bản chất của thời gian là… hòa bình vĩnh cửu.",
						"thai": "แก่นแท้ของเวลาคือ… สันติภาพนิรันดร์",
						"hindi": "समय का असली रूप है… अनंत शांति।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시간의 잔해가 세상을 뒤덮었다.",
			"모든 것이 멈춘 듯, 혹은 영원히 반복되는 듯.",
			"그 속에서, 아이들의 웃음소리가 슬픈 노래처럼 들려왔다.",
			"고착된 시간, 갇힌 아이들."
		],
		"english": [
			"Time's remnants blanketed the world.",
			"Everything seemed to stop, or perhaps repeat endlessly.",
			"Amidst it all, children's laughter echoed like a mournful song.",
			"Time stood still, children trapped."
		],
		"japanese": [
			"時間の残骸が世界を覆った。",
			"すべてが止まったように、あるいは永遠に繰り返されるように。",
			"その中で、子供たちの笑い声が悲しい歌のように聞こえた。",
			"固着した時間、閉じ込められた子供たち。"
		],
		"chinese": [
			"时间的残骸覆盖了世界。",
			"万物仿佛停滞，亦或永恒循环。",
			"在其中，孩子们的笑声如悲歌般回荡。",
			"停滞的时间，受困的孩子们。"
		],
		"french": [
			"Les débris du temps ont recouvert le monde.",
			"Tout semblait figé, ou se répétait à l'infini.",
			"Au milieu de tout cela, le rire des enfants résonnait comme un chant triste.",
			"Le temps figé, des enfants piégés."
		],
		"spanish": [
			"Los vestigios del tiempo cubrieron el mundo.",
			"Todo parecía detenido, o quizás repetirse sin fin.",
			"En medio de ello, la risa de los niños sonaba como una triste melodía.",
			"Tiempo estancado, niños atrapados."
		],
		"vietnamese": [
			"Những tàn tích của thời gian bao trùm thế giới.",
			"Mọi thứ dường như ngừng lại, hoặc lặp đi lặp lại mãi mãi.",
			"Trong đó, tiếng cười của trẻ thơ vọng lên như một khúc ca buồn.",
			"Thời gian ngưng đọng, những đứa trẻ bị giam cầm."
		],
		"thai": [
			"เศษซากแห่งเวลากลืนกินโลกใบนี้",
			"ทุกสิ่งดูเหมือนหยุดนิ่ง หรือไม่ก็วนเวียนซ้ำไปซ้ำมาไม่รู้จบ",
			"ท่ามกลางสิ่งเหล่านั้น เสียงหัวเราะของเด็กๆ ดังก้องราวกับเพลงเศร้า",
			"เวลาที่หยุดนิ่ง เด็กๆ ที่ถูกขัง"
		],
		"hindi": [
			"समय के अवशेषों ने दुनिया को ढक लिया।",
			"सब कुछ रुका हुआ सा लगा, या शायद अनंत तक दोहराया जा रहा था।",
			"उसी में, बच्चों की हँसी एक दुखद गीत की तरह सुनाई दी।",
			"रुका हुआ समय, फँसे हुए बच्चे।"
		]
	}
} as const;
