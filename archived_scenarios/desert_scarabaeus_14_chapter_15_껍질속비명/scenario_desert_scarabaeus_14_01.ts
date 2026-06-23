export const scenario_desert_scarabaeus_14_01 = {
	"scenario_id": "desert_scarabaeus_14_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "시간이 멈춘 듯한 고대 유적이 눈앞에 나타났다.",
						"english": "Ancient ruins, as if time had stopped, appeared before my eyes.",
						"japanese": "時間が止まったかのような古代遺跡が目の前に現れた。",
						"chinese": "仿佛时间停滞的古老遗迹出现在眼前。",
						"french": "Des ruines antiques, comme si le temps s'était arrêté, sont apparues devant mes yeux.",
						"spanish": "Ante mis ojos aparecieron ruinas antiguas, como si el tiempo se hubiera detenido.",
						"vietnamese": "Những di tích cổ xưa, như thể thời gian đã ngừng lại, hiện ra trước mắt tôi.",
						"thai": "ซากปรักหักพังโบราณราวกับเวลาหยุดนิ่งปรากฏขึ้นตรงหน้า",
						"hindi": "प्राचीन खंडहर, मानो समय रुक गया हो, मेरी आँखों के सामने प्रकट हुए।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여… 여기는 어디지?",
						"english": "Wh-where am I?",
						"japanese": "こ… ここはどこだ？",
						"chinese": "这… 这里是哪里？",
						"french": "O-où suis-je ?",
						"spanish": "¿D-dónde estoy?",
						"vietnamese": "Đ-đây là đâu?",
						"thai": "ท-ที่นี่ที่ไหนกัน?",
						"hindi": "य-यह कहाँ है?"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 필멸자여, 길을 잃었구나.",
						"english": "Foolish mortal, you are lost.",
						"japanese": "愚かなる定命の者よ、道を見失ったな。",
						"chinese": "愚蠢的凡人，你迷路了。",
						"french": "Mortel insensé, tu es perdu.",
						"spanish": "Mortal insensato, estás perdido.",
						"vietnamese": "Phàm nhân ngu ngốc, ngươi đã lạc lối.",
						"thai": "มนุษย์ผู้โง่เขลา เจ้าหลงทางแล้ว",
						"hindi": "मूर्ख नश्वर, तुम भटक गए हो।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구냐, 너는!",
						"english": "Who are you!",
						"japanese": "何者だ、貴様！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¿Quién eres tú?",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아미르. 이 사막의 진실을 아는 자.",
						"english": "Amir. The one who knows the truth of this desert.",
						"japanese": "アミール。この砂漠の真実を知る者。",
						"chinese": "阿米尔。知晓这片沙漠真相之人。",
						"french": "Amir. Celui qui connaît la vérité de ce désert.",
						"spanish": "Amir. El que conoce la verdad de este desierto.",
						"vietnamese": "Amir. Kẻ biết sự thật về sa mạc này.",
						"thai": "อามีร์ ผู้ที่รู้ความจริงของทะเลทรายแห่งนี้",
						"hindi": "अमीर। वह जो इस रेगिस्तान का सच जानता है।"
					},
					"speaker": "amir",
					"emotion": "base",
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "귓가에 들려오는 속삭임이 없더냐?",
						"english": "Do you not hear the whispers in your ear?",
						"japanese": "耳元に聞こえる囁きはないのか？",
						"chinese": "你没听到耳边的低语吗？",
						"french": "N'entends-tu pas les murmures à ton oreille ?",
						"spanish": "¿No oyes los susurros en tu oído?",
						"vietnamese": "Ngươi không nghe thấy tiếng thì thầm bên tai sao?",
						"thai": "เจ้าไม่ได้ยินเสียงกระซิบที่ข้างหูหรือ?",
						"hindi": "क्या तुम्हें अपने कान में फुसफुसाहट सुनाई नहीं देती?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "희미한 소리가… 들리는 것 같기도 하고.",
						"english": "A faint sound... I think I hear it.",
						"japanese": "かすかな音が…聞こえるような気がする。",
						"chinese": "好像听到了微弱的声音…",
						"french": "Un son lointain... J'ai l'impression de l'entendre.",
						"spanish": "Un sonido débil… creo que lo oigo.",
						"vietnamese": "Một âm thanh yếu ớt… hình như tôi nghe thấy.",
						"thai": "เสียงแผ่วๆ... เหมือนจะได้ยิน.",
						"hindi": "एक हल्की सी आवाज़... जैसे सुन रहा हूँ।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "존재하지 않는 수호자의 헛된 노래.",
						"english": "The futile song of a guardian that doesn't exist.",
						"japanese": "存在しない守護者の虚しい歌。",
						"chinese": "不存在的守护者徒劳的歌。",
						"french": "Le chant vain d'un gardien inexistant.",
						"spanish": "El canto inútil de un guardián que no existe.",
						"vietnamese": "Bài ca vô vọng của người bảo hộ không tồn tại.",
						"thai": "บทเพลงที่ไร้ค่าของผู้พิทักษ์ที่ไม่มีอยู่จริง.",
						"hindi": "एक ऐसे संरक्षक का व्यर्थ गीत जो अस्तित्व में नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이 사막은 스스로를 지키는 법을 잊었으니.",
						"english": "For this desert has forgotten how to protect itself.",
						"japanese": "この砂漠は自らを守る術を忘れたからな。",
						"chinese": "因为这片沙漠已经忘记了如何保护自己。",
						"french": "Car ce désert a oublié comment se défendre.",
						"spanish": "Pues este desierto ha olvidado cómo protegerse.",
						"vietnamese": "Vì sa mạc này đã quên cách tự bảo vệ mình.",
						"thai": "เพราะทะเลทรายนี้ได้ลืมวิธีการปกป้องตนเองไปแล้ว.",
						"hindi": "क्योंकि इस रेगिस्तान ने खुद को बचाना भुला दिया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What was that sound!?",
						"japanese": "何の音だ！？",
						"chinese": "什么声音？！",
						"french": "Qu'est-ce que c'était que ça !?",
						"spanish": "¡¿Qué fue eso?!",
						"vietnamese": "Tiếng gì vậy!?",
						"thai": "เสียงอะไรน่ะ!?",
						"hindi": "ये कैसी आवाज़ है!?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탐험은 오만이요, 구원은 허상.",
						"english": "Exploration is hubris, salvation is an illusion.",
						"japanese": "探検は傲慢、救済は虚像。",
						"chinese": "探索是傲慢，救赎是虚妄。",
						"french": "L'exploration est orgueil, le salut est une illusion.",
						"spanish": "La exploración es soberbia, la salvación es una ilusión.",
						"vietnamese": "Thám hiểm là kiêu ngạo, cứu rỗi là ảo ảnh.",
						"thai": "การสำรวจคือความโอหัง, การไถ่บาปคือภาพลวงตา.",
						"hindi": "अन्वेषण अहंकार है, मोक्ष एक भ्रम है।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "저주에 대해 알려줘!",
						"english": "Tell me about the curse!",
						"japanese": "呪いについて教えて！",
						"chinese": "告诉我关于诅咒的事！",
						"french": "Parle-moi de la malédiction !",
						"spanish": "¡Háblame de la maldición!",
						"vietnamese": "Nói cho tôi biết về lời nguyền!",
						"thai": "บอกฉันเรื่องคำสาปหน่อย!",
						"hindi": "मुझे श्राप के बारे बारे में बताओ!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…알려줘도, 이해할 수 없을 테지.",
						"english": "...Even if I tell you, you wouldn't understand.",
						"japanese": "…教えても、理解できないだろう。",
						"chinese": "……即使告诉你，你也不会理解的。",
						"french": "...Même si je te le disais, tu ne comprendrais pas.",
						"spanish": "...Aunque te lo dijera, no lo entenderías.",
						"vietnamese": "…Dù có nói cho ngươi, ngươi cũng sẽ không hiểu.",
						"thai": "...บอกไปก็คงไม่เข้าใจอยู่ดี.",
						"hindi": "....बता भी दूँ, तो भी तुम समझ नहीं पाओगे।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "오만으로 시작된 모든 것들이, 결국 너희를 집어삼킬 테니.",
						"english": "For all that began with hubris, will ultimately consume you.",
						"japanese": "傲慢から始まった全てのものが、結局は貴様らを飲み込むだろうからな。",
						"chinese": "始于傲慢的一切，终将吞噬你们。",
						"french": "Car tout ce qui a commencé par l'orgueil, finira par vous dévorer.",
						"spanish": "Porque todo lo que empezó con soberbia, finalmente os consumirá.",
						"vietnamese": "Vì tất cả những gì bắt đầu từ sự kiêu ngạo, cuối cùng sẽ nuốt chửng các ngươi.",
						"thai": "เพราะทุกสิ่งที่เริ่มต้นด้วยความโอหัง, ท้ายที่สุดก็จะกลืนกินพวกเจ้า.",
						"hindi": "क्योंकि अहंकार से शुरू हुई हर चीज़, अंततः तुम्हें निगल जाएगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "되돌릴 수 없는 길을 걷고 있구나.",
						"english": "You are walking a path of no return.",
						"japanese": "もう引き返せない道を歩いているんだな。",
						"chinese": "你正在走一条无法回头的路。",
						"french": "Tu suis un chemin sans retour.",
						"spanish": "Estás siguiendo un camino sin retorno.",
						"vietnamese": "Ngươi đang đi trên con đường không thể quay lại.",
						"thai": "เจ้ากำลังเดินอยู่บนเส้นทางที่ย้อนกลับไม่ได้.",
						"hindi": "तुम एक ऐसे रास्ते पर चल रहे हो जहाँ से वापसी नहीं है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 말을 해도 나는 포기 안 해!",
						"english": "No matter what you say, I won't give up!",
						"japanese": "何を言われても、私は諦めない！",
						"chinese": "不管你说什么，我都不会放弃！",
						"french": "Peu importe ce que tu dis, je n'abandonnerai pas !",
						"spanish": "¡Diga lo que diga, no me rendiré!",
						"vietnamese": "Dù ngươi nói gì, ta cũng sẽ không từ bỏ!",
						"thai": "ไม่ว่าคุณจะพูดอะไร, ฉันจะไม่ยอมแพ้!",
						"hindi": "तुम कुछ भी कहो, मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…좋아, 그 용기가 어디까지 갈지 지켜보마.",
						"english": "...Alright, let's see how far that courage takes you.",
						"japanese": "…よかろう、その勇気がどこまで続くか見せてもらおうか。",
						"chinese": "……好吧，我倒要看看你的勇气能持续到何时。",
						"french": "...Bien, voyons jusqu'où ton courage te mènera.",
						"spanish": "...Bien, veremos hasta dónde te lleva ese coraje.",
						"vietnamese": "...Được thôi, để xem sự dũng cảm đó của ngươi đi được bao xa.",
						"thai": "...ดีล่ะ, ข้าจะรอดูว่าความกล้าหาญนั้นจะพาเจ้าไปได้ไกลแค่ไหน",
						"hindi": "...ठीक है, देखता हूँ तुम्हारी यह हिम्मत कहाँ तक जाती है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이곳의 주인은 너희를 반기지 않을 터.",
						"english": "The master of this place will not welcome you.",
						"japanese": "この地の主はお前たちを歓迎しないだろう。",
						"chinese": "这里的主人可不会欢迎你们。",
						"french": "Le maître des lieux ne vous accueillera pas.",
						"spanish": "El dueño de este lugar no os dará la bienvenida.",
						"vietnamese": "Chủ nhân nơi đây sẽ không hoan nghênh các ngươi đâu.",
						"thai": "เจ้าของที่นี่ไม่ต้อนรับพวกเจ้าหรอก",
						"hindi": "इस जगह का मालिक तुम्हारा स्वागत नहीं करेगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "흐흐… 드디어 만났군.",
						"english": "Heh heh... We finally meet.",
						"japanese": "フフ…ついに会えたな。",
						"chinese": "呵呵……终于见面了。",
						"french": "Hé hé... Enfin nous nous rencontrons.",
						"spanish": "Je je... Finalmente nos encontramos.",
						"vietnamese": "Hừ hừ... Cuối cùng cũng gặp được ngươi.",
						"thai": "ฮิฮิ... ในที่สุดก็ได้พบกัน",
						"hindi": "हहह... आख़िरकार मिल ही गए।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이 사막의 진정한 지배자께서 너희를 기다리고 있었다.",
						"english": "The true ruler of this desert has been waiting for you.",
						"japanese": "この砂漠の真の支配者がお前たちを待っていたのだ。",
						"chinese": "这片沙漠的真正支配者一直在等着你们。",
						"french": "Le véritable souverain de ce désert vous attendait.",
						"spanish": "El verdadero gobernante de este desierto os estaba esperando.",
						"vietnamese": "Chúa tể thực sự của sa mạc này đã chờ đợi các ngươi.",
						"thai": "ผู้ปกครองที่แท้จริงของทะเลทรายนี้กำลังรอพวกเจ้าอยู่",
						"hindi": "इस रेगिस्तान का असली शासक तुम्हारा इंतज़ार कर रहा था।"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍과 함께 거대한 그림자가 나타났다.",
						"english": "A colossal shadow emerged with the sandstorm.",
						"japanese": "砂嵐と共に巨大な影が現れた。",
						"chinese": "伴随着沙尘暴，一个巨大的身影出现了。",
						"french": "Une ombre colossale apparut avec la tempête de sable.",
						"spanish": "Una sombra gigantesca apareció con la tormenta de arena.",
						"vietnamese": "Cùng với bão cát, một bóng đen khổng lồ đã xuất hiện.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นพร้อมกับพายุทราย",
						"hindi": "रेत के तूफ़ान के साथ एक विशाल परछाईं प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "침입자여… 네 어리석음을 후회하게 될 것이다.",
						"english": "Intruder... You will regret your foolishness.",
						"japanese": "侵入者よ…その愚かさを後悔することになるだろう。",
						"chinese": "入侵者啊……你会为你的愚蠢而后悔的。",
						"french": "Intrus... Tu regretteras ta folie.",
						"spanish": "Intruso... lamentarás tu necedad.",
						"vietnamese": "Kẻ xâm nhập... Ngươi sẽ phải hối hận vì sự ngu xuẩn của mình.",
						"thai": "ผู้บุกรุก... เจ้าจะต้องเสียใจกับการกระทำที่โง่เขลาของเจ้า",
						"hindi": "घुसपैठिए... तुम्हें अपनी मूर्खता पर पछतावा होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "닥쳐! 너를 쓰러뜨리고 진실을 밝히겠다!",
						"english": "Silence! I'll defeat you and uncover the truth!",
						"japanese": "黙れ！貴様を倒し、真実を暴いてやる！",
						"chinese": "闭嘴！我会打败你，揭露真相的！",
						"french": "Tais-toi ! Je te vaincrai et découvrirai la vérité !",
						"spanish": "¡Cállate! ¡Te derrotaré y revelaré la verdad!",
						"vietnamese": "Im đi! Ta sẽ đánh bại ngươi và phơi bày sự thật!",
						"thai": "เงียบไป! ข้าจะโค่นเจ้าและเปิดเผยความจริง!",
						"hindi": "चुप हो जाओ! मैं तुम्हें हरा कर सच्चाई सामने लाऊँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 모래 폭풍이 모든 것을 삼켰다.",
						"english": "A colossal sandstorm swallowed everything.",
						"japanese": "巨大な砂嵐が全てを飲み込んだ。",
						"chinese": "巨大的沙尘暴吞噬了一切。",
						"french": "Une tempête de sable colossale engloutit tout.",
						"spanish": "Una tormenta de arena colosal lo engulló todo.",
						"vietnamese": "Một cơn bão cát khổng lồ đã nuốt chửng mọi thứ.",
						"thai": "พายุทรายขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल रेत के तूफान ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 필멸자여… 네 운명을 받아들여라.",
						"english": "Foolish mortal... accept your fate.",
						"japanese": "愚かなる定命の者よ… 汝の運命を受け入れろ。",
						"chinese": "愚蠢的凡人啊……接受你的命运吧。",
						"french": "Mortel insensé... accepte ton destin.",
						"spanish": "Mortal insensato... acepta tu destino.",
						"vietnamese": "Kẻ phàm trần ngu ngốc... hãy chấp nhận số phận của ngươi.",
						"thai": "เจ้ามนุษย์ผู้โง่เขลา... จงยอมรับชะตากรรมของเจ้าซะ",
						"hindi": "मूर्ख नश्वर... अपना भाग्य स्वीकार करो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직… 아직이야!",
						"english": "Ugh... Not yet... Not yet!",
						"japanese": "くっ… まだだ… まだだ！",
						"chinese": "呃……还没……还没完！",
						"french": "Ugh... Pas encore... Pas encore !",
						"spanish": "Ugh... Aún no... ¡Aún no!",
						"vietnamese": "Khụ... Chưa... Chưa xong đâu!",
						"thai": "อึก... ยัง... ยังไม่จบ!",
						"hindi": "उफ़... अभी नहीं... अभी नहीं!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크흐… 헛된 몸부림….",
						"english": "Kuh... A futile struggle...",
						"japanese": "クフ…無駄な足掻き…。",
						"chinese": "呃……徒劳的挣扎……",
						"french": "Hmph... Une lutte vaine...",
						"spanish": "Ugh... Un esfuerzo inútil...",
						"vietnamese": "Khụ... Một sự giãy giụa vô ích...",
						"thai": "คิก... การดิ้นรนที่ไร้ประโยชน์...",
						"hindi": "ख्ख... व्यर्थ का संघर्ष..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내가 사라져도… {random_boss}는 사라지지 않는다….",
						"english": "Even if I vanish... {random_boss} will not disappear...",
						"japanese": "私が消えても…{random_boss}は消えぬ…。",
						"chinese": "即使我消失了……{random_boss}也不会消失……",
						"french": "Même si je disparais... {random_boss} ne disparaîtra pas...",
						"spanish": "Aunque yo desaparezca... {random_boss} no desaparecerá...",
						"vietnamese": "Dù ta có biến mất... {random_boss} sẽ không biến mất...",
						"thai": "แม้ข้าจะหายไป... {random_boss} ก็จะไม่หายไป...",
						"hindi": "भले ही मैं मिट जाऊँ... {random_boss} मिटेगा नहीं..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "{random_boss}… 그게 무슨 소리야?",
						"english": "{random_boss}... What do you mean?",
						"japanese": "{random_boss}…どういうことだ？",
						"chinese": "{random_boss}……那是什么意思？",
						"french": "{random_boss}... Qu'est-ce que tu veux dire ?",
						"spanish": "{random_boss}... ¿Qué quieres decir?",
						"vietnamese": "{random_boss}... Đó là ý gì?",
						"thai": "{random_boss}... นั่นหมายความว่าอะไร?",
						"hindi": "{random_boss}... उसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막은 잠시 침묵했다. 그러나 보스의 마지막 말은 깊은 의문을 남겼다.",
						"english": "The desert fell silent for a moment. But the boss's last words left a profound question.",
						"japanese": "砂漠はしばらく沈黙した。しかし、ボスの最後の言葉は深い疑問を残した。",
						"chinese": "沙漠短暂地沉默了。然而，首领的遗言却留下了深刻的疑问。",
						"french": "Le désert se tut un instant. Mais les derniers mots du boss laissèrent une profonde interrogation.",
						"spanish": "El desierto enmudeció un instante. Pero las últimas palabras del jefe dejaron una profunda duda.",
						"vietnamese": "Sa mạc im lặng trong chốc lát. Nhưng những lời cuối của trùm đã để lại một câu hỏi sâu sắc.",
						"thai": "ทะเลทรายเงียบสงัดชั่วขณะ แต่คำพูดสุดท้ายของบอสกลับทิ้งคำถามที่ลึกซึ้งไว้",
						"hindi": "रेगिस्तान एक पल के लिए शांत हो गया। लेकिन बॉस के आखिरी शब्दों ने एक गहरा सवाल छोड़ दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어쩌면… 이 모든 것은 시작에 불과했다.",
						"english": "Perhaps... this was all just the beginning.",
						"japanese": "もしかしたら… これら全ては始まりに過ぎなかったのかもしれない。",
						"chinese": "也许……这所有的一切，都只是个开始。",
						"french": "Peut-être... que tout cela n'était qu'un début.",
						"spanish": "Quizás... todo esto fue solo el principio.",
						"vietnamese": "Có lẽ... tất cả chỉ mới là khởi đầu.",
						"thai": "บางที... ทั้งหมดนี้เป็นเพียงแค่จุดเริ่มต้น",
						"hindi": "शायद... यह सब बस शुरुआत थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래 폭풍이 몰아치는 끝없는 사막.",
			"사방이 환영뿐. 갈 길을 잃었다.",
			"귓가에 들려오는 희미한 속삭임.",
			"이 모든 건… 비극의 시작이었다."
		],
		"english": [
			"Endless desert, where sandstorms rage.",
			"Illusions all around. Lost my way.",
			"Faint whispers in my ear.",
			"All of this… was the beginning of a tragedy."
		],
		"japanese": [
			"砂嵐が吹き荒れる終わりのない砂漠。",
			"あたり一面幻影ばかり。道を見失った。",
			"耳元に聞こえるかすかな囁き。",
			"このすべては… 悲劇の始まりだった。"
		],
		"chinese": [
			"沙尘暴肆虐的无尽沙漠。",
			"四处皆幻影。迷失了方向。",
			"耳边传来微弱的低语。",
			"这一切… 都是悲剧的开始。"
		],
		"french": [
			"Désert sans fin, balayé par les tempêtes de sable.",
			"Illusions partout. J'ai perdu mon chemin.",
			"De faibles murmures à mon oreille.",
			"Tout cela… fut le début d'une tragédie."
		],
		"spanish": [
			"Desierto infinito, donde rugen las tormentas de arena.",
			"Todo son ilusiones. He perdido el camino.",
			"Débiles susurros en mi oído.",
			"Todo esto… fue el principio de una tragedia."
		],
		"vietnamese": [
			"Sa mạc vô tận, nơi bão cát hoành hành.",
			"Ảo ảnh khắp nơi. Lạc mất lối.",
			"Những lời thì thầm yếu ớt bên tai.",
			"Tất cả những điều này… là khởi đầu của một bi kịch."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ที่พายุทรายพัดกระหน่ำไม่หยุดหย่อน",
			"มีแต่ภาพลวงตาอยู่รอบกาย หลงทางแล้ว",
			"เสียงกระซิบแผ่วเบาที่ได้ยินในหู",
			"ทั้งหมดนี้… คือจุดเริ่มต้นของโศกนาฏกรรม"
		],
		"hindi": [
			"अंतहीन रेगिस्तान, जहाँ रेत के तूफान उमड़ते हैं।",
			"चारों ओर भ्रम। रास्ता भटक गया।",
			"कानों में धीमी फुसफुसाहट।",
			"यह सब… एक त्रासदी की शुरुआत थी।"
		]
	}
} as const;
