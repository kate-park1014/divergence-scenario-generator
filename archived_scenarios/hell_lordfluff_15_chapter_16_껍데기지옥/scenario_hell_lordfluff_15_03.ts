export const scenario_hell_lordfluff_15_03 = {
	"scenario_id": "hell_lordfluff_15_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
						"korean": "지옥에 울려 퍼지는 카운트다운 소리. 모든 악마들이 공포에 질려 떨었다.",
						"english": "The sound of the countdown echoed through Hell. All demons trembled in fear.",
						"japanese": "地獄に響き渡るカウントダウンの音。すべての悪魔が恐怖に震えた。",
						"chinese": "倒计时声响彻地狱。所有恶魔都因恐惧而颤抖。",
						"french": "Le son du compte à rebours résonnait en Enfer. Tous les démons tremblaient de peur.",
						"spanish": "El sonido de la cuenta regresiva resonó por el Infierno. Todos los demonios temblaron de miedo.",
						"vietnamese": "Âm thanh đếm ngược vang vọng khắp Địa Ngục. Tất cả quỷ dữ đều run rẩy trong sợ hãi.",
						"thai": "เสียงนับถอยหลังก้องกังวานไปทั่วขุมนรก เหล่าปีศาจต่างตัวสั่นเทาด้วยความหวาดกลัว",
						"hindi": "नरक में उलटी गिनती की आवाज गूंज उठी। सभी दानव भय से कांप उठे।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "심판의 날… 대체 무슨 일이 일어나는 거지?",
						"english": "Judgment Day... What in the world is happening?",
						"japanese": "審判の日…一体何が起こっているんだ？",
						"chinese": "审判之日…到底发生了什么事？",
						"french": "Le Jour du Jugement... Mais qu'est-ce qui se passe ?",
						"spanish": "El Día del Juicio... ¿Qué demonios está pasando?",
						"vietnamese": "Ngày phán xét... Rốt cuộc chuyện gì đang xảy ra vậy?",
						"thai": "วันพิพากษา... เกิดอะไรขึ้นกันแน่?",
						"hindi": "न्याय का दिन... आखिर क्या हो रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "char",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간이 없다고? 그거야말로 가장 큰 거짓말이지.",
						"english": "No time? That's the biggest lie of all.",
						"japanese": "時間がないだと？それこそが最大の嘘だ。",
						"chinese": "没时间了？那才是最大的谎言。",
						"french": "Pas le temps ? C'est le plus grand des mensonges.",
						"spanish": "¿No hay tiempo? Esa es la mentira más grande de todas.",
						"vietnamese": "Không có thời gian ư? Đó mới là lời nói dối lớn nhất.",
						"thai": "ไม่มีเวลาเหรอ? นั่นแหละคือเรื่องโกหกที่ใหญ่ที่สุด",
						"hindi": "समय नहीं है? यह सबसे बड़ा झूठ है।"
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구냐, 넌.",
						"english": "Who are you?",
						"japanese": "お前は誰だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres tú?",
						"vietnamese": "Ngươi là ai?",
						"thai": "แกเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "진정한 지옥의 주인은 따로 있어. 이 모든 쇼를 기획한 자.",
						"english": "The true master of Hell is someone else. The one who orchestrated this entire show.",
						"japanese": "真の地獄の主は別にいる。この全てのショーを仕組んだ者だ。",
						"chinese": "真正的地狱主人另有其人。是策划了这一切的人。",
						"french": "Le véritable maître de l'Enfer est quelqu'un d'autre. Celui qui a orchestré tout ce spectacle.",
						"spanish": "El verdadero amo del Infierno es otro. Quien orquestó todo este espectáculo.",
						"vietnamese": "Chủ nhân thực sự của Địa Ngục là một người khác. Kẻ đã dàn dựng tất cả màn kịch này.",
						"thai": "เจ้าแห่งขุมนรกตัวจริงคือคนอื่น ผู้ที่บงการการแสดงทั้งหมดนี้",
						"hindi": "नरक का असली मालिक कोई और है। वह जिसने इस पूरे शो का आयोजन किया है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "char",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "char",
					"content": {
						"korean": "군주의 힘? 전부 과장된 허세에 불과해.",
						"english": "The Lord's power? It's all just an exaggerated bluff.",
						"japanese": "君主の力？すべては誇張された虚勢に過ぎない。",
						"chinese": "君主的力量？都不过是夸大其词的虚张声势。",
						"french": "Le pouvoir du Seigneur ? Ce n'est qu'une fanfaronnade exagérée.",
						"spanish": "¿El poder del Señor? Todo es una fanfarronada exagerada.",
						"vietnamese": "Sức mạnh của Chúa tể? Tất cả chỉ là một trò khoe khoang phóng đại.",
						"thai": "พลังของท่านลอร์ดเหรอ? ทั้งหมดเป็นแค่การโอ้อวดที่เกินจริง",
						"hindi": "प्रभु की शक्ति? यह सब सिर्फ एक अतिरंजित दिखावा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말을 하는 거야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parlez-vous !",
						"spanish": "¡¿De qué estás hablando?!",
						"vietnamese": "Ngươi đang nói cái gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "तुम क्या कह रहे हो!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "진실은 비싸. 아주 비싸지.",
						"english": "Truth is expensive. Very expensive.",
						"japanese": "真実は高い。とても高い。",
						"chinese": "真相很昂贵。非常昂贵。",
						"french": "La vérité coûte cher. Très cher.",
						"spanish": "La verdad es cara. Muy cara.",
						"vietnamese": "Sự thật rất đắt. Rất đắt.",
						"thai": "ความจริงมีราคาแพง แพงมาก.",
						"hindi": "सच महंगा है। बहुत महंगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정보를 팔겠다는 거야?",
						"english": "Are you selling information?",
						"japanese": "情報を売るつもりか？",
						"chinese": "你要卖情报？",
						"french": "Vous comptez vendre des informations ?",
						"spanish": "¿Vas a vender información?",
						"vietnamese": "Ngươi định bán thông tin à?",
						"thai": "คุณจะขายข้อมูลเหรอ?",
						"hindi": "क्या तुम जानकारी बेचोगे?"
					},
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희가 보고 듣는 모든 것… 믿을 수 있을까?",
						"english": "Everything you see and hear... can you trust it?",
						"japanese": "お前たちが見聞きするすべて… 信じられるか？",
						"chinese": "你们所见所闻的一切… 都能相信吗？",
						"french": "Tout ce que vous voyez et entendez… pouvez-vous le croire ?",
						"spanish": "Todo lo que veis y oís… ¿podéis confiar en ello?",
						"vietnamese": "Tất cả những gì các ngươi thấy và nghe… có thể tin được không?",
						"thai": "ทุกสิ่งที่คุณเห็นและได้ยิน... เชื่อได้จริงหรือ?",
						"hindi": "जो कुछ तुम देखते और सुनते हो… क्या उस पर भरोसा कर सकते हो?"
					},
					"speaker": "char",
					"type": "speech"
				}
			],
			"id": 3
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
					"speaker": "char",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "최근에 벌어진 기묘한 사건들? 우연이 아니야. 누군가 조종하고 있지.",
						"english": "The strange events lately? Not a coincidence. Someone's pulling the strings.",
						"japanese": "最近起きた奇妙な事件？偶然じゃない。誰かが操っている。",
						"chinese": "最近发生的奇怪事件？不是巧合。有人在操控。",
						"french": "Les étranges événements récents ? Pas une coïncidence. Quelqu'un tire les ficelles.",
						"spanish": "Los extraños sucesos recientes? No es casualidad. Alguien está manipulando.",
						"vietnamese": "Những sự kiện kỳ lạ gần đây? Không phải ngẫu nhiên. Có ai đó đang điều khiển.",
						"thai": "เหตุการณ์แปลกๆ ที่เกิดขึ้นเมื่อเร็วๆ นี้? ไม่ใช่เรื่องบังเอิญ มีคนบงการอยู่",
						"hindi": "हाल ही में हुई अजीब घटनाएँ? कोई संयोग नहीं। कोई तो इन्हें नियंत्रित कर रहा है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "조종? 누가?",
						"english": "Manipulating? Who?",
						"japanese": "操る？誰が？",
						"chinese": "操控？谁？",
						"french": "Manipuler ? Qui ?",
						"spanish": "¿Manipular? ¿Quién?",
						"vietnamese": "Điều khiển? Ai?",
						"thai": "บงการ? ใคร?",
						"hindi": "नियंत्रित? कौन?"
					},
					"type": "speech"
				},
				{
					"speaker": "char",
					"content": {
						"korean": "그 질문, 아주 값어치 있어. 하지만 답은 더 비싸.",
						"english": "That question is valuable. But the answer costs more.",
						"japanese": "その質問、とても価値がある。だが、答えはもっと高い。",
						"chinese": "那个问题很有价值。但答案更昂贵。",
						"french": "Cette question a beaucoup de valeur. Mais la réponse coûte plus cher.",
						"spanish": "Esa pregunta es muy valiosa. Pero la respuesta es más cara.",
						"vietnamese": "Câu hỏi đó rất đáng giá. Nhưng câu trả lời còn đắt hơn.",
						"thai": "คำถามนั้นมีค่ามาก แต่คำตอบแพงกว่า",
						"hindi": "वह सवाल बहुत कीमती है। लेकिन जवाब और भी महंगा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "우리가 싸우는 적이… 진짜 적이 아니라고?",
						"english": "The enemy we're fighting... isn't the real enemy?",
						"japanese": "我々が戦う敵が… 本当の敵じゃないと？",
						"chinese": "我们对抗的敌人… 不是真正的敌人？",
						"french": "L'ennemi que nous combattons… n'est pas le vrai ennemi ?",
						"spanish": "¿El enemigo contra el que luchamos… no es el verdadero enemigo?",
						"vietnamese": "Kẻ thù mà chúng ta đang chiến đấu… không phải là kẻ thù thật sự sao?",
						"thai": "ศัตรูที่เรากำลังต่อสู้... ไม่ใช่ศัตรูที่แท้จริงหรือ?",
						"hindi": "जिस दुश्मन से हम लड़ रहे हैं… वह असली दुश्मन नहीं है?"
					}
				},
				{
					"speaker": "char",
					"content": {
						"korean": "지옥의 자원과 정보는 철저히 통제되고 있거든.",
						"english": "Hell's resources and information are strictly controlled.",
						"japanese": "地獄の資源と情報は徹底的に統制されているからな。",
						"chinese": "地狱的资源和信息都受到严密控制。",
						"french": "Les ressources et les informations de l'Enfer sont strictement contrôlées.",
						"spanish": "Los recursos y la información del infierno están estrictamente controlados.",
						"vietnamese": "Tài nguyên và thông tin của địa ngục đang bị kiểm soát chặt chẽ.",
						"thai": "ทรัพยากรและข้อมูลของนรกถูกควบคุมอย่างเข้มงวด",
						"hindi": "नर्क के संसाधन और जानकारी पर कड़ा नियंत्रण है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "char",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "char",
					"content": {
						"korean": "카운트다운이 막바지에 이르렀어. 하지만 너희는 죽기 전까지 진짜 진실을 알게 될 거야.",
						"english": "The countdown is almost over. But you'll learn the real truth before you die.",
						"japanese": "カウントダウンが終盤に差し掛かった。だが、お前たちは死ぬ前に本当の真実を知るだろう。",
						"chinese": "倒计时已接近尾声。但你们会在死前知晓真正的真相。",
						"french": "Le compte à rebours est presque terminé. Mais vous connaîtrez la vraie vérité avant de mourir.",
						"spanish": "La cuenta atrás está a punto de terminar. Pero conoceréis la verdadera verdad antes de morir.",
						"vietnamese": "Đếm ngược đã đến hồi kết. Nhưng các ngươi sẽ biết sự thật trước khi chết.",
						"thai": "การนับถอยหลังใกล้จะสิ้นสุดแล้ว แต่พวกคุณจะได้รู้ความจริงก่อนที่จะตาย",
						"hindi": "उलटी गिनती आखिरी चरण में है। लेकिन तुम मरने से पहले असली सच्चाई जान जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "모든 게 다 거짓말이었다는 거야?",
						"english": "So, it was all a lie?",
						"japanese": "全てが嘘だったというのか？",
						"chinese": "所以，一切都是谎言吗？",
						"french": "Alors, tout était un mensonge ?",
						"spanish": "¿Así que todo fue una mentira?",
						"vietnamese": "Vậy ra, tất cả đều là dối trá sao?",
						"thai": "งั้นเหรอ, ทั้งหมดเป็นเรื่องโกหกสินะ?",
						"hindi": "तो, यह सब झूठ था?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "char",
					"content": {
						"korean": "지옥은 거대한 무대. 너희는 그저 꼭두각시.",
						"english": "Hell is a grand stage. You are merely puppets.",
						"japanese": "地獄は巨大な舞台。お前たちはただの操り人形だ。",
						"chinese": "地狱是一个巨大的舞台。你们不过是傀儡。",
						"french": "L'Enfer est une grande scène. Vous n'êtes que des marionnettes.",
						"spanish": "El infierno es un gran escenario. Solo sois marionetas.",
						"vietnamese": "Địa ngục là một sân khấu lớn. Các ngươi chỉ là những con rối.",
						"thai": "นรกคือเวทีอันยิ่งใหญ่ พวกเจ้าเป็นเพียงหุ่นเชิด.",
						"hindi": "नरक एक विशाल मंच है। तुम बस कठपुतलियाँ हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계속 속거나, 진짜 적을 찾거나. 선택은 너희 몫.",
						"english": "Keep being deceived, or find the real enemy. The choice is yours.",
						"japanese": "騙され続けるか、真の敵を見つけるか。選択はお前たち次第だ。",
						"chinese": "继续受骗，或者找出真正的敌人。选择权在你们手中。",
						"french": "Continuez à être trompés, ou trouvez le véritable ennemi. Le choix vous appartient.",
						"spanish": "Seguid siendo engañados, o encontrad al verdadero enemigo. La elección es vuestra.",
						"vietnamese": "Tiếp tục bị lừa dối, hoặc tìm ra kẻ thù thực sự. Lựa chọn là của các ngươi.",
						"thai": "จะถูกหลอกต่อไป หรือจะตามหาศัตรูที่แท้จริง. ทางเลือกเป็นของพวกเจ้า.",
						"hindi": "धोखा खाते रहो, या असली दुश्मन को ढूंढो। चुनाव तुम्हारा है।"
					},
					"speaker": "char",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of an unknown enemy swallowed everything.",
						"japanese": "正体不明の敵の影がすべてを飲み込んだ。",
						"chinese": "未知敌人的阴影吞噬了一切。",
						"french": "L'ombre d'un ennemi inconnu a tout englouti.",
						"spanish": "La sombra de un enemigo desconocido lo engulló todo.",
						"vietnamese": "Bóng tối của kẻ thù không rõ danh tính đã nuốt chửng mọi thứ.",
						"thai": "เงาของศัตรูที่ไม่รู้จักได้กลืนกินทุกสิ่ง",
						"hindi": "एक अज्ञात दुश्मन की परछाई ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것. 네 노력은 아무것도 바꾸지 못한다.",
						"english": "Foolish one. Your efforts change nothing.",
						"japanese": "愚かな者め。お前の努力は何も変えられない。",
						"chinese": "愚蠢的东西。你的努力改变不了任何事。",
						"french": "Imbécile. Tes efforts ne changeront rien.",
						"spanish": "Estúpido. Tus esfuerzos no cambiarán nada.",
						"vietnamese": "Đồ ngốc. Nỗ lực của ngươi chẳng thay đổi được gì.",
						"thai": "เจ้าโง่. ความพยายามของเจ้าไร้ผล",
						"hindi": "मूर्ख। तुम्हारे प्रयास कुछ नहीं बदलेंगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 이제 시작이야. 진실을 파헤칠 때까지 멈추지 않아!",
						"english": "No... I'm just getting started. I won't stop until I uncover the truth!",
						"japanese": "いいえ… 私はまだ始まったばかりだ。真実を暴くまで止まらない！",
						"chinese": "不… 我才刚刚开始。在揭露真相之前，我绝不会停下！",
						"french": "Non... Je ne fais que commencer. Je n'arrêterai pas tant que je n'aurai pas découvert la vérité !",
						"spanish": "No... apenas estoy comenzando. ¡No me detendré hasta desenterrar la verdad!",
						"vietnamese": "Không… Tôi mới chỉ bắt đầu thôi. Tôi sẽ không dừng lại cho đến khi khám phá ra sự thật!",
						"thai": "ไม่... ฉันเพิ่งจะเริ่มต้นเท่านั้น ฉันจะไม่หยุดจนกว่าจะเปิดเผยความจริง!",
						"hindi": "नहीं... मैं तो अभी शुरू हुआ हूँ। जब तक सच सामने नहीं आता, मैं रुकूँगा नहीं!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "char",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "아쉽군. 다음 판엔 더 좋은 정보를 줄까?",
						"english": "A pity. Shall I give you better information in the next round?",
						"japanese": "残念だな。次のゲームではもっと良い情報を教えてやろうか？",
						"chinese": "真可惜。下一局要不要给你更好的情报？",
						"french": "Dommage. Veux-tu que je te donne de meilleures informations au prochain tour ?",
						"spanish": "Lástima. ¿Te daré mejor información en la próxima partida?",
						"vietnamese": "Thật đáng tiếc. Ván sau ta sẽ cho ngươi thông tin tốt hơn chứ?",
						"thai": "น่าเสียดาย. รอบหน้าจะให้ข้อมูลที่ดีกว่านี้ไหม?",
						"hindi": "अफ़सोस। क्या मैं तुम्हें अगले दौर में बेहतर जानकारी दूँ?"
					},
					"speaker": "char",
					"emotion": "base"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "char"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "카운트다운은 끝났다. 심판의 시간이 도래했으니.",
						"english": "The countdown is over. The time of judgment has arrived.",
						"japanese": "カウントダウンは終わった。裁きの時が来た。",
						"chinese": "倒计时结束了。审判的时刻已经到来。",
						"french": "Le compte à rebours est terminé. L'heure du jugement est arrivée.",
						"spanish": "La cuenta atrás ha terminado. La hora del juicio ha llegado.",
						"vietnamese": "Đếm ngược đã kết thúc. Thời khắc phán xét đã đến.",
						"thai": "การนับถอยหลังสิ้นสุดลงแล้ว. เวลาแห่งการพิพากษามาถึงแล้ว.",
						"hindi": "उलटी गिनती खत्म हो गई। न्याय का समय आ गया है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "심판? 허세 떨지 마!",
						"english": "Judgment? Don't be so dramatic!",
						"japanese": "審判だと？虚勢を張るな！",
						"chinese": "审判？别虚张声势了！",
						"french": "Jugement ? Ne fais pas tant de manières !",
						"spanish": "¿Juicio? ¡No seas tan pretencioso!",
						"vietnamese": "Phán xét ư? Đừng có làm bộ!",
						"thai": "พิพากษา? อย่ามาอวดดี!",
						"hindi": "न्याय? ढोंग मत करो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "char",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "char",
					"content": {
						"korean": "자, 쇼는 시작이야. 누가 이길까?",
						"english": "Alright, the show begins. Who will win?",
						"japanese": "さあ、ショーの始まりだ。どちらが勝つかな？",
						"chinese": "好了，演出开始了。谁会赢呢？",
						"french": "Bien, le spectacle commence. Qui va gagner ?",
						"spanish": "Bien, el espectáculo empieza. ¿Quién ganará?",
						"vietnamese": "Được rồi, màn trình diễn bắt đầu. Ai sẽ thắng đây?",
						"thai": "เอาล่ะ, การแสดงเริ่มขึ้นแล้ว. ใครจะชนะกันนะ?",
						"hindi": "ठीक है, शो शुरू हो गया। कौन जीतेगा?"
					},
					"type": "speech"
				},
				{
					"speaker": "char",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적이 쓰러졌다. 하지만 의혹은 가시지 않았다.",
						"english": "The unknown enemy has fallen. Yet, the doubts linger.",
						"japanese": "正体不明の敵は倒れた。だが、疑惑は晴れない。",
						"chinese": "身份不明的敌人倒下了。然而，疑虑并未消除。",
						"french": "L'ennemi inconnu est tombé. Pourtant, les doutes persistent.",
						"spanish": "El enemigo desconocido ha caído. Sin embargo, las dudas persisten.",
						"vietnamese": "Kẻ thù không rõ danh tính đã ngã xuống. Nhưng những nghi ngờ vẫn còn đó.",
						"thai": "ศัตรูนิรนามล้มลงแล้ว. แต่ความสงสัยยังคงอยู่.",
						"hindi": "अज्ञात शत्रु गिर गया। फिर भी, संदेह बने हुए हैं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네가… 진실을 알게 될까…?",
						"english": "Will you… discover the truth…?",
						"japanese": "お前が…真実を知ることになるのか…？",
						"chinese": "你…会知道真相吗…？",
						"french": "Découvriras-tu… la vérité… ?",
						"spanish": "¿Llegarás a… saber la verdad…?",
						"vietnamese": "Ngươi… sẽ biết được sự thật…?",
						"thai": "เจ้าจะ… ได้รู้ความจริง… หรือไม่?",
						"hindi": "क्या तुम… सच जान पाओगे…?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실? 아직 멀었어. 난 끝까지 파헤칠 거야.",
						"english": "Truth? Not even close. I'll uncover it all.",
						"japanese": "真実？まだまだだ。俺はとことん暴いてやる。",
						"chinese": "真相？还早着呢。我会追查到底的。",
						"french": "La vérité ? Loin de là. Je vais tout déterrer.",
						"spanish": "¿La verdad? Ni de lejos. Lo desenterraré todo.",
						"vietnamese": "Sự thật ư? Vẫn còn xa lắm. Ta sẽ đào sâu đến cùng.",
						"thai": "ความจริง? ยังห่างไกลนัก. ฉันจะขุดคุ้ยมันออกมาให้หมด.",
						"hindi": "सच? अभी बहुत दूर है। मैं अंत तक इसका पता लगाऊंगा।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "char"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥미로운 결과였어. 다음 무대에서 만나자고.",
						"english": "An interesting outcome. Let's meet on the next stage.",
						"japanese": "興味深い結果だった。次の舞台で会おう。",
						"chinese": "一个有趣的结果。下个舞台再见吧。",
						"french": "Un résultat intéressant. On se retrouve sur la prochaine scène.",
						"spanish": "Un resultado interesante. Nos vemos en el próximo escenario.",
						"vietnamese": "Một kết quả thú vị. Hẹn gặp lại ở màn tiếp theo.",
						"thai": "ผลลัพธ์ที่น่าสนใจ. ไว้เจอกันบนเวทีหน้า.",
						"hindi": "एक दिलचस्प नतीजा था। अगले मंच पर मिलते हैं।"
					},
					"speaker": "char",
					"emotion": "base"
				},
				{
					"speaker": "char",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "카운트다운은 멈췄지만, 지옥의 허상은 더욱 깊어졌다.",
						"english": "The countdown stopped, but the illusion of hell deepened.",
						"japanese": "カウントダウンは止まったが、地獄の虚像はさらに深まった。",
						"chinese": "倒计时停止了，但地狱的幻象却更加深邃。",
						"french": "Le compte à rebours s'est arrêté, mais l'illusion de l'enfer s'est approfondie.",
						"spanish": "La cuenta regresiva se detuvo, pero la ilusión del infierno se hizo más profunda.",
						"vietnamese": "Đồng hồ đếm ngược đã dừng lại, nhưng ảo ảnh địa ngục càng thêm sâu sắc.",
						"thai": "การนับถอยหลังหยุดลงแล้ว แต่ภาพลวงตาแห่งขุมนรกกลับลึกซึ้งยิ่งขึ้น",
						"hindi": "उलटी गिनती रुक गई, लेकिन नर्क का भ्रम और गहरा गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥 전체에 울려 퍼지는 섬뜩한 소리.",
			"악마 군주의 심판의 날, 카운트다운이 시작됐다.",
			"혼란 속, 의뭉스러운 상인이 다가와 속삭였다.",
			"이 모든 게… 조작된 환상이라면?"
		],
		"english": [
			"An ominous sound echoes throughout Hell.",
			"Judgment Day for the Demon Lord, the countdown has begun.",
			"Amidst the chaos, a mysterious merchant approached and whispered.",
			"What if all of this... is a manipulated illusion?"
		],
		"japanese": [
			"地獄全体に響き渡る不気味な音。",
			"魔王の審判の日、カウントダウンが始まった。",
			"混乱の中、怪しい商人が近づき、ささやいた。",
			"もし、これらすべてが…仕組まれた幻覚だとしたら？"
		],
		"chinese": [
			"响彻地狱的诡异声音。",
			"魔王审判之日，倒计时已然开始。",
			"混乱之中，一个神秘商人走近低语。",
			"如果这一切…都是被操纵的幻象呢？"
		],
		"french": [
			"Un son sinistre résonne dans tout l'Enfer.",
			"Le jour du jugement du Seigneur Démon, le compte à rebours a commencé.",
			"Au milieu du chaos, un marchand énigmatique s'approcha et murmura.",
			"Et si tout cela... n'était qu'une illusion manipulée ?"
		],
		"spanish": [
			"Un sonido espeluznante resuena por todo el Infierno.",
			"El Día del Juicio del Señor Demonio, la cuenta regresiva ha comenzado.",
			"En medio del caos, un mercader enigmático se acercó y susurró.",
			"¿Y si todo esto... fuera una ilusión manipulada?"
		],
		"vietnamese": [
			"Một âm thanh ghê rợn vang vọng khắp địa ngục.",
			"Ngày phán xét của Quỷ Vương, đồng hồ đếm ngược đã bắt đầu.",
			"Giữa hỗn loạn, một thương nhân bí ẩn tiến đến thì thầm.",
			"Nếu tất cả những điều này... chỉ là một ảo ảnh bị thao túng?"
		],
		"thai": [
			"เสียงน่าขนลุกก้องกังวานไปทั่วขุมนรก",
			"วันพิพากษาของจอมมาร การนับถอยหลังได้เริ่มต้นขึ้นแล้ว",
			"ท่ามกลางความโกลาหล พ่อค้าลึกลับคนหนึ่งเดินเข้ามาและกระซิบ",
			"จะเกิดอะไรขึ้นถ้าทั้งหมดนี้...เป็นภาพลวงตาที่ถูกบิดเบือน?"
		],
		"hindi": [
			"पूरे नरक में गूँजती एक भयावह ध्वनि।",
			"दानव प्रभु का न्याय का दिन, उलटी गिनती शुरू हो गई है।",
			"अराजकता के बीच, एक रहस्यमय व्यापारी पास आया और फुसफुसाया।",
			"क्या होगा अगर यह सब... एक हेरफेर किया हुआ भ्रम है?"
		]
	}
} as const;
