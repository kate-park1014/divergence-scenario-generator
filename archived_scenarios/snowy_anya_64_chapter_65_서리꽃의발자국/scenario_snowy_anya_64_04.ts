export const scenario_snowy_anya_64_04 = {
	"scenario_id": "snowy_anya_64_04",
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
					"content": {
						"korean": "빛을 따라온 길. 서리꽃이 수놓인 설원이 펼쳐졌다.",
						"english": "The path followed by light. A snowfield adorned with frost flowers unfolded.",
						"japanese": "光を追って来た道。霜の花が刺繍された雪原が広がっていた。",
						"chinese": "循光而来的路。霜花点缀的雪原展现在眼前。",
						"french": "Le chemin suivi par la lumière. Un champ de neige brodé de fleurs de givre se déployait.",
						"spanish": "El camino seguido por la luz. Un campo de nieve adornado con flores de escarcha se extendía.",
						"vietnamese": "Con đường theo ánh sáng. Một cánh đồng tuyết điểm xuyết hoa sương giá hiện ra.",
						"thai": "เส้นทางที่มาตามแสง ทุ่งหิมะที่ประดับประดาด้วยดอกไม้น้ำแข็งทอดยาวออกไป",
						"hindi": "प्रकाश द्वारा अनुसरण किया गया मार्ग। ठंढ के फूलों से सजा एक बर्फीला मैदान खुल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기에도 발자국이 있어.",
						"english": "There are footprints here too.",
						"japanese": "ここにも足跡がある。",
						"chinese": "这里也有足迹。",
						"french": "Il y a aussi des empreintes ici.",
						"spanish": "Aquí también hay huellas.",
						"vietnamese": "Ở đây cũng có dấu chân.",
						"thai": "ที่นี่ก็มีรอยเท้า",
						"hindi": "यहाँ भी पदचिह्न हैं।"
					}
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…잠시만요. 이 발자국은 어딘가 이상해요.",
						"english": "...Wait a moment. These footprints are somewhat strange.",
						"japanese": "…ちょっと待って。この足跡、どこかおかしいです。",
						"chinese": "……等等。这些足迹有些奇怪。",
						"french": "...Attendez un instant. Ces empreintes sont un peu étranges.",
						"spanish": "Esperen un momento. Estas huellas son algo extrañas.",
						"vietnamese": "Khoan đã. Dấu chân này có vẻ lạ.",
						"thai": "เดี๋ยวก่อน รอยเท้านี่ดูแปลกๆ นะคะ",
						"hindi": "...एक पल रुकिए। ये पदचिह्न कुछ अजीब हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "보시다시피, 앞으로 나아가지 않아요.",
						"english": "As you can see, they don't move forward.",
						"japanese": "ご覧の通り、前に進んでいません。",
						"chinese": "如您所见，它们没有向前。",
						"french": "Comme vous pouvez le voir, elles n'avancent pas.",
						"spanish": "Como pueden ver, no avanzan.",
						"vietnamese": "Như bạn thấy, chúng không tiến về phía trước.",
						"thai": "อย่างที่เห็น พวกมันไม่ได้เคลื่อนไปข้างหน้าเลย",
						"hindi": "जैसा कि आप देख सकते हैं, वे आगे नहीं बढ़ते।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "계속 같은 자리를 맴돌고 있어.",
						"english": "They keep circling the same spot.",
						"japanese": "ずっと同じ場所をぐるぐる回っています。",
						"chinese": "一直在同一个地方打转。",
						"french": "Elles tournent en rond au même endroit.",
						"spanish": "Siguen dando vueltas en el mismo lugar.",
						"vietnamese": "Chúng cứ loanh quanh một chỗ.",
						"thai": "มันวนเวียนอยู่กับที่เดิมตลอด",
						"hindi": "वे उसी जगह पर घूमते रहते हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "네. 무언가를… 아니, 누군가를 기다리는 흔적입니다.",
						"english": "Yes. It's a trace of waiting for something... no, for someone.",
						"japanese": "はい。何かを…いや、誰かを待っている痕跡です。",
						"chinese": "是的。这是在等待某物……不，等待某人的痕迹。",
						"french": "Oui. C'est une trace d'attente de quelque chose... non, de quelqu'un.",
						"spanish": "Sí. Es un rastro de espera por algo... no, por alguien.",
						"vietnamese": "Vâng. Đó là dấu vết của việc chờ đợi một thứ gì đó... không, một ai đó.",
						"thai": "ใช่ค่ะ มันเป็นร่องรอยของการรอคอยบางสิ่ง... ไม่สิ ใครบางคนต่างหาก",
						"hindi": "हाँ। यह किसी चीज़ का... नहीं, किसी का इंतज़ार करने का निशान है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "수백 년 동안?",
						"english": "For hundreds of years?",
						"japanese": "数百年もの間？",
						"chinese": "数百年了？",
						"french": "Pendant des centaines d'années ?",
						"spanish": "¿Durante cientos de años?",
						"vietnamese": "Suốt hàng trăm năm ư?",
						"thai": "เป็นร้อยปีแล้วเหรอ?",
						"hindi": "सैकड़ों सालों से?"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 룬들은… 기다림의 언어로 쓰여 있어요.",
						"english": "These runes… they are written in the language of waiting.",
						"japanese": "これらのルーンは… 待機（たいき）の言葉で書かれています。",
						"chinese": "这些符文……是用等待的语言写成的。",
						"french": "Ces runes… elles sont écrites dans la langue de l'attente.",
						"spanish": "Estas runas… están escritas en el lenguaje de la espera.",
						"vietnamese": "Những chữ rune này… được viết bằng ngôn ngữ của sự chờ đợi.",
						"thai": "รูนพวกนี้… เขียนด้วยภาษาแห่งการรอคอย",
						"hindi": "ये रुन्स… प्रतीक्षा की भाषा में लिखे गए हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "룬? 읽을 수 있어?",
						"english": "Runes? You can read them?",
						"japanese": "ルーン？読めるのか？",
						"chinese": "符文？你能读懂？",
						"french": "Des runes ? Tu peux les lire ?",
						"spanish": "¿Runas? ¿Puedes leerlas?",
						"vietnamese": "Chữ rune? Đọc được sao?",
						"thai": "รูน? อ่านได้เหรอ?",
						"hindi": "रुन्स? तुम उन्हें पढ़ सकते हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "완벽하진 않지만, 뜻은 알 것 같아요.",
						"english": "Not perfectly, but I think I understand the meaning.",
						"japanese": "完璧ではないけれど、意味はわかる気がします。",
						"chinese": "不完美，但我大概明白意思。",
						"french": "Pas parfaitement, mais je crois en comprendre le sens.",
						"spanish": "No perfectamente, pero creo que entiendo el significado.",
						"vietnamese": "Không hoàn hảo lắm, nhưng tôi nghĩ mình hiểu ý nghĩa.",
						"thai": "ไม่สมบูรณ์นัก แต่คิดว่าเข้าใจความหมาย",
						"hindi": "पूरी तरह से नहीं, लेकिन मुझे लगता है कि मैं अर्थ समझ गया हूँ।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "“오지 않는 자여, 나의 눈물이 얼어붙어 꽃이 될지라도….”",
						"english": "“O, one who does not come, even if my tears freeze and become flowers….”",
						"japanese": "「来ぬ者よ、我が涙が凍りて花となろうとも…。」",
						"chinese": "“不归之人啊，即使我的泪水凝结成花……”",
						"french": "« Ô toi qui ne viens pas, même si mes larmes gèlent et deviennent des fleurs… »",
						"spanish": "«Oh, tú que no vienes, incluso si mis lágrimas se congelan y se convierten en flores…»",
						"vietnamese": "“Hỡi người không đến, dẫu cho nước mắt ta đóng băng thành hoa….”",
						"thai": "“โอ้ ผู้ไม่มา ถึงแม้ว่าน้ำตาของข้าจะแข็งตัวกลายเป็นดอกไม้…”",
						"hindi": "“ओह, जो नहीं आता, भले ही मेरे आँसू जम कर फूल बन जाएँ…।”"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…자세히 보니, 이 발자국.",
						"english": "…Looking closely, these footprints.",
						"japanese": "…よく見ると、この足跡。",
						"chinese": "……仔细一看，这些脚印。",
						"french": "…En y regardant de plus près, ces empreintes.",
						"spanish": "…Mirando de cerca, estas huellas.",
						"vietnamese": "…Nhìn kỹ thì, những dấu chân này.",
						"thai": "…เมื่อมองใกล้ๆ รอยเท้าพวกนี้",
						"hindi": "…करीब से देखने पर, ये पैरों के निशान।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건… 아주 작은 아이의 발자국이에요.",
						"english": "These are… the footprints of a very small child.",
						"japanese": "これは… とても小さな子どもの足跡です。",
						"chinese": "这是……一个非常小的孩子的脚印。",
						"french": "Ce sont… les empreintes d'un très jeune enfant.",
						"spanish": "Estas son… las huellas de un niño muy pequeño.",
						"vietnamese": "Đây là… dấu chân của một đứa trẻ rất nhỏ.",
						"thai": "นี่คือ… รอยเท้าของเด็กตัวเล็กๆ",
						"hindi": "ये… एक बहुत छोटे बच्चे के पैरों के निशान हैं।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아이? 그럼 수호자가 아니었어?",
						"english": "A child? Then it wasn't the guardian?",
						"japanese": "子ども？じゃあ、守護者じゃなかったの？",
						"chinese": "孩子？那不是守护者？",
						"french": "Un enfant ? Alors ce n'était pas le gardien ?",
						"spanish": "¿Un niño? ¿Entonces no era el guardián?",
						"vietnamese": "Một đứa trẻ? Vậy không phải người bảo vệ sao?",
						"thai": "เด็ก? งั้นไม่ใช่ผู้พิทักษ์เหรอ?",
						"hindi": "एक बच्चा? तो वह संरक्षक नहीं था?"
					}
				},
				{
					"content": {
						"korean": "네. 길을 잃고 누군가를 기다리던… 작은 아이였습니다.",
						"english": "Yes. It was a small child… lost and waiting for someone.",
						"japanese": "はい。道を失い、誰かを待っていた… 小さな子どもでした。",
						"chinese": "是的。是一个迷路并等待着某个人的……小孩子。",
						"french": "Oui. C'était un petit enfant… perdu et attendant quelqu'un.",
						"spanish": "Sí. Era un niño pequeño… perdido y esperando a alguien.",
						"vietnamese": "Vâng. Đó là một đứa trẻ nhỏ… bị lạc và đang chờ đợi ai đó.",
						"thai": "ใช่ เป็นเด็กตัวเล็กๆ… ที่หลงทางและกำลังรอใครบางคนอยู่",
						"hindi": "हाँ। वह एक छोटा बच्चा था… खोया हुआ और किसी का इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 너희도 떠나는군. 안야는… 홀로 남겨질 거야.",
						"english": "…In the end, you too depart. Anya will… be left alone.",
						"japanese": "…結局、お前たちも去っていくのか。アーニャは…一人残されるだろう。",
						"chinese": "…最终，你们也要离开。安雅会…被独自留下。",
						"french": "…Finalement, vous aussi, vous partez. Anya sera… laissée seule.",
						"spanish": "…Al final, vosotros también os marcháis. Anya será… dejada sola.",
						"vietnamese": "…Cuối cùng, các ngươi cũng rời đi. Anya sẽ… bị bỏ lại một mình.",
						"thai": "…ในที่สุด พวกเจ้าก็จากไป อันย่าจะ… ถูกทิ้งให้อยู่คนเดียว",
						"hindi": "…आखिरकार, तुम भी जा रहे हो। आन्या… अकेली रह जाएगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "아니. 이제 그 아이는 혼자가 아니야.",
						"english": "No. That child is not alone anymore.",
						"japanese": "いや。もうその子は一人じゃない。",
						"chinese": "不。那孩子不再孤单了。",
						"french": "Non. Cet enfant n'est plus seul.",
						"spanish": "No. Esa niña ya no está sola.",
						"vietnamese": "Không. Giờ đây đứa bé ấy không còn cô đơn nữa.",
						"thai": "ไม่ เด็กคนนั้นไม่โดดเดี่ยวอีกแล้ว",
						"hindi": "नहीं। वह बच्चा अब अकेला नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 서리꽃들이… 이제야 제자리를 찾겠군요.",
						"english": "These frost flowers… will finally find their place.",
						"japanese": "この霜の花々が…ようやく居場所を見つけるでしょう。",
						"chinese": "这些霜花…现在终于找到它们的位置了。",
						"french": "Ces fleurs de givre… vont enfin trouver leur place.",
						"spanish": "Estas flores de escarcha… finalmente encontrarán su lugar.",
						"vietnamese": "Những bông hoa băng này… cuối cùng sẽ tìm thấy vị trí của mình.",
						"thai": "ดอกไม้น้ำแข็งเหล่านี้… ในที่สุดก็จะได้ที่ของมัน",
						"hindi": "ये बर्फीले फूल… अब अपनी जगह पा लेंगे।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "끝없는 기다림은 멈췄다. 작은 발자국은 비로소 자유를 찾았다.",
						"english": "The endless wait has stopped. The small footsteps have finally found freedom.",
						"japanese": "終わりのない待機は止まった。小さな足跡はついに自由を見つけた。",
						"chinese": "无尽的等待停止了。小小的足迹终于找到了自由。",
						"french": "L'attente interminable a cessé. Les petits pas ont enfin trouvé la liberté.",
						"spanish": "La espera interminable ha cesado. Las pequeñas huellas han encontrado por fin la libertad.",
						"vietnamese": "Cuộc chờ đợi vô tận đã dừng lại. Dấu chân nhỏ bé cuối cùng đã tìm thấy tự do.",
						"thai": "การรอคอยที่ไม่มีที่สิ้นสุดได้หยุดลงแล้ว รอยเท้าเล็กๆ ได้พบอิสรภาพในที่สุด",
						"hindi": "अंतहीन प्रतीक्षा रुक गई। छोटे कदमों ने आखिरकार आज़ादी पा ली।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만, 아직 풀리지 않은 이야기가 남아 있었다.",
						"english": "However, a story yet untold remained.",
						"japanese": "しかし、まだ解き明かされていない物語が残っていた。",
						"chinese": "但是，还有一个未解开的故事。",
						"french": "Cependant, une histoire non résolue demeurait.",
						"spanish": "Sin embargo, quedaba una historia sin resolver.",
						"vietnamese": "Tuy nhiên, vẫn còn một câu chuyện chưa được giải đáp.",
						"thai": "อย่างไรก็ตาม ยังคงมีเรื่องราวที่ยังไม่คลี่คลาย",
						"hindi": "हालांकि, एक अनकही कहानी अभी बाकी थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "맴도는 발자국의 끝. 거대한 그림자가 앞을 가로막았다.",
						"english": "The end of the circling footprints. A gigantic shadow blocked the way.",
						"japanese": "巡る足跡の終わり。巨大な影が道を塞いだ。",
						"chinese": "徘徊的脚印尽头。一道巨大的身影挡住了去路。",
						"french": "La fin des empreintes tournoyantes. Une ombre gigantesque barrait le chemin.",
						"spanish": "El final de las huellas que daban vueltas. Una sombra gigantesca bloqueaba el camino.",
						"vietnamese": "Cuối cùng của những dấu chân loanh quanh. Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "สิ้นสุดรอยเท้าที่วนเวียน เงาขนาดมหึมาขวางกั้นอยู่เบื้องหน้า",
						"hindi": "घूमते पैरों के निशान का अंत। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히… 나의 기다림을 방해하다니.",
						"english": "How dare you… interrupt my wait.",
						"japanese": "よくも…私の待ちを邪魔したな。",
						"chinese": "你竟敢…打扰我的等待。",
						"french": "Comment osez-vous… interrompre mon attente.",
						"spanish": "Cómo osas… interrumpir mi espera.",
						"vietnamese": "Ngươi dám… cản trở cuộc chờ đợi của ta.",
						"thai": "บังอาจ… มาขัดขวางการรอคอยของข้า",
						"hindi": "हिम्मत कैसे हुई तुम्हारी… मेरी प्रतीक्षा को बाधित करने की।"
					}
				},
				{
					"content": {
						"korean": "네가 안야를 가둔 거야?",
						"english": "Did you imprison Anya?",
						"japanese": "お前がアーニャを閉じ込めたのか？",
						"chinese": "是你囚禁了安雅吗？",
						"french": "C'est toi qui as emprisonné Anya ?",
						"spanish": "¿Tú fuiste quien encarceló a Anya?",
						"vietnamese": "Ngươi đã giam Anya ư?",
						"thai": "เจ้าขังอันย่าไว้หรือ?",
						"hindi": "क्या तुमने आन्या को कैद किया है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "가두다니… 나는 그저 돕고 있을 뿐. 영원한 기다림을.",
						"english": "Imprison? I am merely helping. An eternal wait.",
						"japanese": "閉じ込めるだと…私はただ手助けしているだけだ。永遠の待ち時間を。",
						"chinese": "囚禁？我只是在帮助。永恒的等待。",
						"french": "Emprisonner ? Je ne fais qu'aider. Une attente éternelle.",
						"spanish": "¿Encarcelar? Solo estoy ayudando. Una espera eterna.",
						"vietnamese": "Giam giữ? Ta chỉ đang giúp thôi. Một sự chờ đợi vĩnh cửu.",
						"thai": "ขังรึ… ข้าเพียงแค่ช่วยเหลือเท่านั้น การรอคอยชั่วนิรันดร์",
						"hindi": "कैद करना? मैं तो बस मदद कर रहा हूँ। एक अनंत प्रतीक्षा।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 존재는… 기억을 잃은 자를 수호하는 오랜 영혼 같아요.",
						"english": "This being… seems to be an ancient spirit guarding those who lost their memories.",
						"japanese": "この存在は…記憶を失った者を守る古い魂のようです。",
						"chinese": "这个存在…似乎是守护失忆者的古老灵魂。",
						"french": "Cette entité… semble être un ancien esprit gardant ceux qui ont perdu la mémoire.",
						"spanish": "Esta entidad… parece ser un espíritu antiguo que guarda a quienes perdieron sus recuerdos.",
						"vietnamese": "Thực thể này… dường như là một linh hồn cổ xưa bảo vệ những người mất trí nhớ.",
						"thai": "สิ่งมีชีวิตนี้… ดูเหมือนจะเป็นวิญญาณโบราณที่ปกป้องผู้ที่สูญเสียความทรงจำ",
						"hindi": "यह अस्तित्व… एक प्राचीन आत्मा लगता है जो अपनी यादें खो चुके लोगों की रक्षा करती है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "방해꾼들은… 사라져라.",
						"english": "Interferers… vanish.",
						"japanese": "邪魔者たちは…消え失せろ。",
						"chinese": "干扰者们…消失吧。",
						"french": "Ceux qui dérangent… disparaissez.",
						"spanish": "Molestadores… desapareced.",
						"vietnamese": "Những kẻ quấy rầy… hãy biến mất.",
						"thai": "พวกก่อกวน… จงหายไปซะ",
						"hindi": "बाधा डालने वाले… गायब हो जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영원한 기다림이 모든 것을 집어삼켰다.",
						"english": "Eternal waiting consumed all.",
						"japanese": "永遠の待機がすべてを飲み込んだ。",
						"chinese": "永恒的等待吞噬了一切。",
						"french": "L'attente éternelle a tout englouti.",
						"spanish": "La espera eterna lo consumió todo.",
						"vietnamese": "Sự chờ đợi vĩnh cửu đã nuốt chửng mọi thứ.",
						"thai": "การรอคอยชั่วนิรันดร์ได้กลืนกินทุกสิ่ง",
						"hindi": "अनंत प्रतीक्षा ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는… 이해할 수 없어. 이 영원한 기다림의 가치를.",
						"english": "You... cannot comprehend the worth of this eternal wait.",
						"japanese": "お前たちには…理解できない。この永遠の待機の価値が。",
						"chinese": "你们…无法理解。这永恒等待的价值。",
						"french": "Vous… ne pouvez pas comprendre. La valeur de cette attente éternelle.",
						"spanish": "Vosotros… no podéis entender. El valor de esta espera eterna.",
						"vietnamese": "Các ngươi... không thể hiểu. Giá trị của sự chờ đợi vĩnh cửu này.",
						"thai": "พวกเจ้า... ไม่เข้าใจหรอก คุณค่าของการรอคอยชั่วนิรันดร์นี้",
						"hindi": "तुम… समझ नहीं सकते। इस अनंत प्रतीक्षा के मूल्य को।"
					}
				},
				{
					"content": {
						"korean": "…포기하지 않아. 안야를 혼자 두지 않을 거야.",
						"english": "...I won't give up. I won't leave Anya alone.",
						"japanese": "…諦めない。アーニャを一人にはさせない。",
						"chinese": "…我不会放弃。我不会让安雅独自一人。",
						"french": "...Je n'abandonnerai pas. Je ne laisserai pas Anya seule.",
						"spanish": "...No me rendiré. No dejaré a Anya sola.",
						"vietnamese": "...Ta sẽ không bỏ cuộc. Ta sẽ không để Anya một mình.",
						"thai": "...ฉันจะไม่ยอมแพ้ ฉันจะไม่ทิ้งอันย่าไว้คนเดียว",
						"hindi": "…मैं हार नहीं मानूंगा। मैं अन्या को अकेला नहीं छोड़ूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"빛을 따라 도착한 설원.",
			"작은 발자국이 서리꽃을 피우며 끝없이 이어졌다.",
			"하지만 그 발자국은 어디로도 향하지 않고, 같은 자리를 맴돌 뿐이었다.",
			"끝나지 않는 기다림. 에이라가 그 흔적을 읽어낸다."
		],
		"english": [
			"A snowfield reached by following the light.",
			"Small footprints endlessly stretched, blooming frost flowers.",
			"But the footprints led nowhere, only circling the same spot.",
			"An endless wait. Eira reads the traces."
		],
		"japanese": [
			"光を辿り着いた雪原。",
			"小さな足跡が霜の花を咲かせながら、果てしなく続いていた。",
			"しかし、その足跡はどこへも向かわず、同じ場所をたださまよっていた。",
			"終わらない待機。アイラがその痕跡を読み取る。"
		],
		"chinese": [
			"循光而至的雪原。",
			"细小的足迹绽放着霜花，绵延不绝。",
			"然而那些足迹没有走向任何地方，只是在原地徘徊。",
			"无尽的等待。艾拉解读着那些痕迹。"
		],
		"french": [
			"Un champ de neige atteint en suivant la lumière.",
			"De petites empreintes s'étiraient à l'infini, faisant éclore des fleurs de givre.",
			"Mais ces empreintes ne menaient nulle part, tournant seulement en rond au même endroit.",
			"Une attente sans fin. Eira lit les traces."
		],
		"spanish": [
			"Un campo de nieve alcanzado siguiendo la luz.",
			"Pequeñas huellas se extendían sin fin, haciendo florecer flores de escarcha.",
			"Pero las huellas no llevaban a ninguna parte, solo daban vueltas en el mismo lugar.",
			"Una espera interminable. Eira lee las huellas."
		],
		"vietnamese": [
			"Cánh đồng tuyết đến theo ánh sáng.",
			"Những dấu chân nhỏ bé trải dài vô tận, nở rộ những bông hoa sương giá.",
			"Nhưng những dấu chân không dẫn đến đâu, chỉ loanh quanh một chỗ.",
			"Một sự chờ đợi không hồi kết. Eira đọc được những dấu vết đó."
		],
		"thai": [
			"ทุ่งหิมะที่มาถึงตามแสง",
			"รอยเท้าเล็กๆ ทอดยาวไม่สิ้นสุด เบ่งบานเป็นดอกไม้น้ำแข็ง",
			"แต่รอยเท้านั้นไม่ได้มุ่งหน้าไปไหน เพียงแค่วนเวียนอยู่กับที่เดิม",
			"การรอคอยที่ไม่มีวันสิ้นสุด เอร่าอ่านร่องรอยนั้น"
		],
		"hindi": [
			"प्रकाश का अनुसरण करते हुए एक बर्फ़ीला मैदान।",
			"छोटे पदचिह्न अंतहीन रूप से फैले हुए थे, ठंढ के फूल खिला रहे थे।",
			"लेकिन पदचिह्न कहीं नहीं ले गए, बस उसी जगह पर घूमते रहे।",
			"एक अंतहीन प्रतीक्षा। एरा उन निशानों को पढ़ती है।"
		]
	}
} as const;
