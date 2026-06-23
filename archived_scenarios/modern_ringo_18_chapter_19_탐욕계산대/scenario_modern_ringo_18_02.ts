export const scenario_modern_ringo_18_02 = {
	"scenario_id": "modern_ringo_18_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "번화가 한가운데, 카페 링고의 광고판이 번쩍였다.",
						"english": "In the middle of the bustling street, Café Ringo's billboard gleamed.",
						"japanese": "繁華街の真ん中で、カフェリンゴの看板が輝いた。",
						"chinese": "在繁华街区中央，瑞ngo咖啡的广告牌闪闪发光。",
						"french": "Au milieu de la rue animée, le panneau publicitaire du Café Ringo brillait.",
						"spanish": "En medio de la concurrida calle, el letrero del Café Ringo brillaba.",
						"vietnamese": "Giữa con phố sầm uất, biển quảng cáo của Cafe Ringo lấp lánh.",
						"thai": "ใจกลางย่านการค้า ป้ายโฆษณาของคาเฟ่ริงโกะส่องประกาย",
						"hindi": "व्यस्त सड़क के बीच में, कैफे रिंगो का बिलबोर्ड चमक उठा।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "무한 적립? 이거 완전 꿀이잖아?",
						"english": "Infinite rewards? This is a total goldmine!",
						"japanese": "無限ポイント？これは完全に美味しい話じゃないか？",
						"chinese": "无限积分？这不是天上掉馅饼吗？",
						"french": "Récompenses infinies ? C'est une vraie aubaine !",
						"spanish": "¿Acumulación infinita? ¡Esto es una ganga total!",
						"vietnamese": "Tích điểm vô hạn? Ngon thế này cơ à?",
						"thai": "สะสมไม่อั้นเหรอ? นี่มันของหวานชัดๆ เลยนี่!",
						"hindi": "असीमित रिवॉर्ड? ये तो पूरी तरह से सोने की खान है!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "또 꼼수 부릴 생각만 한다.",
						"english": "He's already thinking of another trick.",
						"japanese": "また何か企んでいるな。",
						"chinese": "他又在想歪点子了。",
						"french": "Il ne pense qu'à un nouveau stratagème.",
						"spanish": "Solo piensa en otra estratagema.",
						"vietnamese": "Hắn lại đang nghĩ mưu mẹo rồi.",
						"thai": "เขากำลังคิดจะเล่นลูกไม้สกปรกอีกแล้ว",
						"hindi": "वह फिर से कोई चाल चलने की सोच रहा है।"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "이 시스템의 허점을 내가 찾아내주지.",
						"english": "I'll find a loophole in this system.",
						"japanese": "このシステムの抜け穴を見つけてやる。",
						"chinese": "我会找出这个系统的漏洞。",
						"french": "Je vais trouver la faille de ce système.",
						"spanish": "Encontraré el punto débil de este sistema.",
						"vietnamese": "Ta sẽ tìm ra sơ hở của hệ thống này.",
						"thai": "ฉันจะหาช่องโหว่ของระบบนี้ให้ได้",
						"hindi": "मैं इस सिस्टम की खामी ढूंढ निकालूँगा।"
					},
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "계정 세 개로 돌리면 공짜 커피가 몇 잔이야?",
						"english": "With three accounts, how many free coffees can I get?",
						"japanese": "アカウントを3つ使えば、タダのコーヒーが何杯になるんだ？",
						"chinese": "用三个账号，能拿到多少杯免费咖啡？",
						"french": "Avec trois comptes, combien de cafés gratuits puis-je avoir ?",
						"spanish": "Con tres cuentas, ¿cuántos cafés gratis puedo conseguir?",
						"vietnamese": "Dùng ba tài khoản thì được mấy cốc cà phê miễn phí nhỉ?",
						"thai": "ถ้าใช้สามบัญชี จะได้กาแฟฟรีเท่าไหร่กันนะ?",
						"hindi": "तीन अकाउंट से मुझे कितनी मुफ्त कॉफ़ी मिलेंगी?"
					},
					"emotion": "happy"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "벌써 이만큼 쌓였어! 완벽해.",
						"english": "It's already piled up this much! Perfect.",
						"japanese": "もうこんなに貯まった！完璧だ。",
						"chinese": "已经积累了这么多！完美。",
						"french": "J'ai déjà accumulé autant ! Parfait.",
						"spanish": "¡Ya he acumulado tanto! Perfecto.",
						"vietnamese": "Đã tích được chừng này rồi! Hoàn hảo.",
						"thai": "สะสมได้เยอะขนาดนี้แล้ว! เยี่ยมเลย",
						"hindi": "इतना जमा हो गया है! एकदम सही।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "링고가 그렇게 호락호락할까?",
						"english": "Will Ringo be so easy?",
						"japanese": "リンゴはそんなに甘いのか？",
						"chinese": "林果会那么轻易吗？",
						"french": "Ringo sera-t-il si facile à berner ?",
						"spanish": "¿Será Ringo tan fácil?",
						"vietnamese": "Liệu Ringo có dễ dàng như vậy không?",
						"thai": "ริงโกะจะง่ายดายขนาดนั้นเลยเหรอ?",
						"hindi": "क्या रिंगो इतना आसान होगा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하! 시스템은 내가 지배한다!",
						"english": "Haha! I dominate the system!",
						"japanese": "ハハ！システムは私が支配する！",
						"chinese": "哈哈！系统由我主宰！",
						"french": "Haha ! Je domine le système !",
						"spanish": "¡Jaja! ¡Yo domino el sistema!",
						"vietnamese": "Haha! Ta thống trị hệ thống!",
						"thai": "ฮ่าฮ่า! ระบบอยู่ใต้การควบคุมของฉัน!",
						"hindi": "हाहा! मैं सिस्टम पर हावी हूँ!"
					},
					"speaker": "dax"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "어? 왜 포인트가 다 사라졌지?",
						"english": "Huh? Why are all my points gone?",
						"japanese": "え？なんでポイントが全部消えたの？",
						"chinese": "咦？我的积分怎么都消失了？",
						"french": "Hein ? Pourquoi tous mes points ont-ils disparu ?",
						"spanish": "¿Eh? ¿Por qué desaparecieron todos mis puntos?",
						"vietnamese": "Hả? Sao tất cả điểm của tôi biến mất rồi?",
						"thai": "อ้าว? ทำไมแต้มทั้งหมดหายไปไหนหมด?",
						"hindi": "अरे? मेरे सारे पॉइंट्स क्यों गायब हो गए?"
					},
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "화면이 일순 섬광처럼 번쩍였다. 'BLACK MAMBA'.",
						"english": "The screen flashed like lightning for a moment. 'BLACK MAMBA'.",
						"japanese": "画面が一瞬閃光のように輝いた。「ブラックマンバ」。",
						"chinese": "屏幕一闪而过，像一道闪电。'BLACK MAMBA'。",
						"french": "L'écran a brillé comme un éclair un instant. \"BLACK MAMBA\".",
						"spanish": "La pantalla brilló como un relámpago por un instante. \"BLACK MAMBA\".",
						"vietnamese": "Màn hình lóe sáng như một tia chớp. 'BLACK MAMBA'.",
						"thai": "หน้าจอวาบขึ้นเหมือนแสงแฟลชชั่วขณะ 'BLACK MAMBA'",
						"hindi": "स्क्रीन एक पल के लिए बिजली की तरह चमकी। 'ब्लैक माम्बा'।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "고객님의 모든 계정은 통합되었습니다.",
						"english": "All your accounts have been merged.",
						"japanese": "お客様の全アカウントは統合されました。",
						"chinese": "您的所有账户都已合并。",
						"french": "Tous vos comptes ont été fusionnés.",
						"spanish": "Todas sus cuentas han sido fusionadas.",
						"vietnamese": "Tất cả tài khoản của quý khách đã được hợp nhất.",
						"thai": "บัญชีทั้งหมดของท่านได้ถูกรวมเข้าด้วยกันแล้ว",
						"hindi": "आपके सभी खाते एकीकृत कर दिए गए हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 합산된 금액을 지불하세요.",
						"english": "Now, please pay the combined amount.",
						"japanese": "さあ、合算された金額をお支払いください。",
						"chinese": "现在请支付合并后的金额。",
						"french": "Veuillez maintenant payer le montant total.",
						"spanish": "Ahora, por favor, pague la cantidad total.",
						"vietnamese": "Bây giờ, hãy thanh toán số tiền đã gộp.",
						"thai": "โปรดชำระเงินตามจำนวนที่รวมไว้แล้ว",
						"hindi": "अब, कृपया कुल राशि का भुगतान करें।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "뭐라고? 이만큼이나?",
						"english": "What? This much?!",
						"japanese": "なんだって？こんなに！？",
						"chinese": "什么？这么多？",
						"french": "Quoi ? Autant que ça ?",
						"spanish": "¿Qué? ¿Tanto así?",
						"vietnamese": "Cái gì? Nhiều đến mức này ư?",
						"thai": "อะไรนะ? มากขนาดนี้เลยเหรอ?",
						"hindi": "क्या? इतना सारा?"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "시스템을 우롱한 대가죠.",
						"english": "It's the price for deceiving the system.",
						"japanese": "システムを愚弄した代償です。",
						"chinese": "这是愚弄系统的代价。",
						"french": "C'est le prix à payer pour avoir berné le système.",
						"spanish": "Es el precio por engañar al sistema.",
						"vietnamese": "Đó là cái giá phải trả cho việc lừa dối hệ thống.",
						"thai": "นี่คือค่าตอบแทนของการหลอกลวงระบบ",
						"hindi": "यह सिस्टम को धोखा देने की कीमत है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이건 사기야! 내 돈 다 어디 갔어?",
						"english": "This is a scam! Where did all my money go?",
						"japanese": "これは詐欺だ！私の金はどこへ行った！？",
						"chinese": "这是诈骗！我的钱都去哪了？",
						"french": "C'est une arnaque ! Où est passé tout mon argent ?",
						"spanish": "¡Esto es una estafa! ¿Dónde está todo mi dinero?",
						"vietnamese": "Đây là lừa đảo! Tiền của tôi đâu hết rồi?",
						"thai": "นี่มันหลอกลวง! เงินของฉันหายไปไหนหมด?",
						"hindi": "यह धोखा है! मेरे सारे पैसे कहाँ गए?"
					},
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "시스템의 허점은, 곧 새로운 규칙이 됩니다.",
						"english": "A flaw in the system soon becomes a new rule.",
						"japanese": "システムの欠陥は、やがて新しいルールとなる。",
						"chinese": "系统的漏洞，很快就会成为新的规则。",
						"french": "La faille du système devient bientôt une nouvelle règle.",
						"spanish": "Las lagunas del sistema pronto se convierten en nuevas reglas.",
						"vietnamese": "Lỗ hổng của hệ thống, chẳng mấy chốc sẽ trở thành quy tắc mới.",
						"thai": "จุดอ่อนของระบบ จะกลายเป็นกฎใหม่ในไม่ช้า",
						"hindi": "सिस्टम की खामी, जल्द ही एक नया नियम बन जाती है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 로봇, 너무 소름 끼쳐.",
						"english": "That robot, it's so creepy.",
						"japanese": "あのロボット、不気味すぎる。",
						"chinese": "那个机器人，太令人毛骨悚然了。",
						"french": "Ce robot est tellement effrayant.",
						"spanish": "Ese robot es tan espeluznante.",
						"vietnamese": "Con robot đó, đáng sợ quá.",
						"thai": "หุ่นยนต์นั่นน่าขนลุกชะมัด",
						"hindi": "वह रोबोट, बहुत डरावना है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 돈 내놔!",
						"english": "Give me my money back!",
						"japanese": "お金を返せ！",
						"chinese": "把我的钱还给我！",
						"french": "Rendez-moi mon argent !",
						"spanish": "¡Devuélveme mi dinero!",
						"vietnamese": "Trả tiền của tôi đây!",
						"thai": "คืนเงินฉันมา!",
						"hindi": "मेरा पैसा वापस दो!"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "자본은 언제나 새로운 길을 찾습니다.",
						"english": "Capital always finds a new path.",
						"japanese": "資本は常に新たな道を見つける。",
						"chinese": "资本总能找到新的出路。",
						"french": "Le capital trouve toujours un nouveau chemin.",
						"spanish": "El capital siempre encuentra un nuevo camino.",
						"vietnamese": "Tư bản luôn tìm ra con đường mới.",
						"thai": "ทุนมักจะหาทางใหม่ๆ เสมอ",
						"hindi": "पूंजी हमेशा एक नया रास्ता खोजती है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "어서 오세요, 고객님.",
						"english": "Welcome, customer.",
						"japanese": "ようこそ、お客様。",
						"chinese": "欢迎光临，顾客。",
						"french": "Bienvenue, client.",
						"spanish": "Bienvenido, cliente.",
						"vietnamese": "Chào mừng, quý khách.",
						"thai": "ยินดีต้อนรับครับ/ค่ะลูกค้า",
						"hindi": "आपका स्वागत है, ग्राहक।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 고객이 이렇게 돈을 뜯겨!",
						"english": "What kind of customer gets ripped off like this!",
						"japanese": "こんなに金をむしり取られる客がいるか！",
						"chinese": "哪有客户这样被敲诈的！",
						"french": "Quel genre de client se fait arnaquer comme ça !",
						"spanish": "¡Qué clase de cliente es estafado así!",
						"vietnamese": "Khách hàng kiểu gì mà bị moi tiền thế này!",
						"thai": "ลูกค้าแบบไหนกันที่โดนรีดไถเงินขนาดนี้!",
						"hindi": "ऐसा कौन सा ग्राहक है जिससे इस तरह पैसे लूटे जाते हैं!"
					},
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐욕은 가장 비싼 대가를 치르게 하죠.",
						"english": "Greed exacts the highest price.",
						"japanese": "貪欲は最も高価な代償を払わせる。",
						"chinese": "贪婪会让你付出最昂贵的代价。",
						"french": "La cupidité exige le prix le plus élevé.",
						"spanish": "La codicia cobra el precio más alto.",
						"vietnamese": "Lòng tham sẽ phải trả giá đắt nhất.",
						"thai": "ความโลภทำให้ต้องจ่ายราคาแพงที่สุด",
						"hindi": "लालच सबसे महंगी कीमत वसूलता है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "닥스가 드디어 정신 차리나?",
						"english": "Is Daks finally coming to his senses?",
						"japanese": "ダクスはついに正気に戻るのか？",
						"chinese": "达克斯终于清醒了吗？",
						"french": "Daks reprend-il enfin ses esprits ?",
						"spanish": "¿Daks finalmente recobra el sentido?",
						"vietnamese": "Daks cuối cùng cũng tỉnh ngộ ư?",
						"thai": "แด็กซ์ได้สติแล้วงั้นรึ?",
						"hindi": "क्या डैक्स आखिरकार होश में आ रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "자, 이제 남은 건 이 시스템을 지키는 것.",
						"english": "Now, all that's left is to protect this system.",
						"japanese": "さて、残るはこのシステムを守ることだ。",
						"chinese": "好了，现在剩下的就是保护这个系统了。",
						"french": "Maintenant, il ne reste plus qu'à protéger ce système.",
						"spanish": "Ahora, lo único que queda es proteger este sistema.",
						"vietnamese": "Thôi nào, giờ chỉ còn việc bảo vệ hệ thống này thôi.",
						"thai": "เอาล่ะ ที่เหลือก็แค่ปกป้องระบบนี้",
						"hindi": "अब, बस इस सिस्टम की रक्षा करना बाकी है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 시스템의 벽은 높습니다.",
						"english": "Fool. The system's walls are high.",
						"japanese": "愚か者め。システムの壁は高いのだ。",
						"chinese": "愚蠢的家伙。系统的壁垒很高。",
						"french": "Imbécile. Les murs du système sont infranchissables.",
						"spanish": "Necio. Los muros del sistema son altos.",
						"vietnamese": "Kẻ ngốc. Bức tường của hệ thống rất cao.",
						"thai": "เจ้าคนโง่ กำแพงของระบบนั้นสูงนัก",
						"hindi": "मूर्ख। सिस्टम की दीवारें ऊंची हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "젠장… 이대로 끝낼 순 없어!",
						"english": "Damn it... I can't end it like this!",
						"japanese": "くそっ…このまま終わらせるわけにはいかない！",
						"chinese": "该死…不能就这样结束！",
						"french": "Maudit... Je ne peux pas en finir comme ça !",
						"spanish": "Maldita sea... ¡No puedo terminar así!",
						"vietnamese": "Chết tiệt... Không thể kết thúc như thế này được!",
						"thai": "บ้าจริง... ฉันจะจบแบบนี้ไม่ได้!",
						"hindi": "धिक्कार है... मैं इसे ऐसे खत्म नहीं कर सकता!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥스, 포기하지 마!",
						"english": "Daks, don't give up!",
						"japanese": "ダックス、諦めるな！",
						"chinese": "Daks，别放弃！",
						"french": "Daks, n'abandonne pas !",
						"spanish": "¡Daks, no te rindas!",
						"vietnamese": "Daks, đừng bỏ cuộc!",
						"thai": "แด็กซ์ อย่ายอมแพ้!",
						"hindi": "डैक्स, हार मत मानो!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "더 많은 돈을 가져오세요. 고객님의 재도전을 기다립니다.",
						"english": "Bring more money. We await your rematch.",
						"japanese": "もっと金を持ってこい。お客様の再挑戦をお待ちしております。",
						"chinese": "带更多的钱来吧。我们期待您的再次挑战。",
						"french": "Apportez plus d'argent. Nous attendons votre revanche.",
						"spanish": "Traiga más dinero. Esperamos su revancha.",
						"vietnamese": "Hãy mang thêm tiền đến. Chúng tôi chờ đợi thử thách lại của quý khách.",
						"thai": "นำเงินมาเพิ่ม เรากำลังรอการท้าทายอีกครั้งของคุณ",
						"hindi": "और पैसे लाओ। हम आपके दोबारा प्रयास का इंतजार कर रहे हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "닥스는 쓰러진 {random_boss} 앞에서 빈 지갑을 움켜쥐었다.",
						"english": "Daks clutched an empty wallet in front of the fallen {random_boss}.",
						"japanese": "ダクスは倒れた{random_boss}の前で空の財布を握りしめた。",
						"chinese": "达克斯在倒下的{random_boss}面前紧握着一个空钱包。",
						"french": "Daks serra un portefeuille vide devant le {random_boss} tombé.",
						"spanish": "Daks apretó una cartera vacía frente al {random_boss} caído.",
						"vietnamese": "Daks nắm chặt chiếc ví rỗng trước {random_boss} đã gục ngã.",
						"thai": "แด็กซ์กำกระเป๋าสตางค์เปล่าไว้ต่อหน้า {random_boss} ที่ล้มลง",
						"hindi": "डैक्स ने गिरे हुए {random_boss} के सामने एक खाली बटुआ पकड़ रखा था।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "결국… 내가 이긴 거야?",
						"english": "In the end... did I win?",
						"japanese": "結局…俺が勝ったのか？",
						"chinese": "到头来……是我赢了吗？",
						"french": "Finalement… j'ai gagné ?",
						"spanish": "Al final… ¿gané yo?",
						"vietnamese": "Rốt cuộc... tôi đã thắng sao?",
						"thai": "สุดท้าย... ฉันชนะงั้นเหรอ?",
						"hindi": "आखिरकार... क्या मैं जीता?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이겼지만, 이긴 것 같지 않다.",
						"english": "A hollow victory.",
						"japanese": "虚しい勝利だ。",
						"chinese": "一场空虚的胜利。",
						"french": "Une victoire amère.",
						"spanish": "Una victoria vacía.",
						"vietnamese": "Một chiến thắng rỗng tuếch.",
						"thai": "ชัยชนะที่ว่างเปล่า",
						"hindi": "एक खोखली जीत।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…다음엔, 더 큰 대가를 치르게 될 겁니다.",
						"english": "...You'll pay a heavier price next time.",
						"japanese": "…次は、もっと大きな代償を払うことになるでしょう。",
						"chinese": "…下次，你将付出更大的代价。",
						"french": "...La prochaine fois, le prix sera bien plus élevé.",
						"spanish": "...La próxima vez, el costo será mucho mayor.",
						"vietnamese": "...Lần tới, cái giá sẽ đắt hơn nhiều.",
						"thai": "...ครั้งหน้า คุณจะต้องจ่ายแพงกว่านี้มาก",
						"hindi": "...अगली बार, कीमत बहुत ज़्यादा होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "링고의 시스템은 닥스의 모든 것을 흡수했다. 이 도시의 탐욕은 멈추지 않았다.",
						"english": "Ringo's system absorbed everything from Daks. The city's greed knew no bounds.",
						"japanese": "リンゴのシステムはダックスのすべてを吸い込んだ。この都市の貪欲は止まらなかった。",
						"chinese": "Ringo的系统吞噬了Daks的一切。这座城市的贪婪永无止境。",
						"french": "Le système de Ringo a tout absorbé de Daks. La cupidité de cette ville ne connaissait aucune limite.",
						"spanish": "El sistema de Ringo absorbió todo de Daks. La codicia de esta ciudad no tuvo límites.",
						"vietnamese": "Hệ thống của Ringo đã nuốt chửng mọi thứ của Daks. Lòng tham của thành phố này không ngừng lại.",
						"thai": "ระบบของริงโก้ดูดกลืนทุกสิ่งจากแด็กซ์ ความโลภของเมืองนี้ไม่หยุดยั้ง",
						"hindi": "रिंगो के सिस्टम ने डैक्स का सब कुछ सोख लिया। इस शहर का लालच रुका नहीं।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"무한 적립 시스템!",
			"카페 링고의 달콤한 유혹이 번화가를 뒤덮었다.",
			"그러나 탐욕에는, 반드시 대가가 따른다.",
			"어리석은 기회주의자, 닥스. 그의 꼼수가 시작된다."
		],
		"english": [
			"Infinite Rewards System!",
			"Café Ringo's sweet temptation swept through the bustling street.",
			"But greed always comes with a price.",
			"Dax, the foolish opportunist. His scheme begins."
		],
		"japanese": [
			"無限ポイントシステム！",
			"カフェリンゴの甘い誘惑が繁華街を覆った。",
			"しかし、貪欲には必ず代償が伴う。",
			"愚かな日和見主義者、ダックス。彼の企みが始まる。"
		],
		"chinese": [
			"无限积分系统！",
			"瑞ngo咖啡的甜蜜诱惑席卷了繁华街区。",
			"然而，贪婪总要付出代价。",
			"愚蠢的机会主义者，达克斯。他的诡计开始了。"
		],
		"french": [
			"Système de récompenses infinies !",
			"La douce tentation du Café Ringo a envahi la rue animée.",
			"Mais la cupidité a toujours un prix.",
			"Dax, l'opportuniste idiot. Son plan commence."
		],
		"spanish": [
			"¡Sistema de acumulación infinita!",
			"La dulce tentación del Café Ringo invadió la concurrida calle.",
			"Pero la codicia siempre tiene un precio.",
			"Dax, el oportunista tonto. Su plan comienza."
		],
		"vietnamese": [
			"Hệ thống tích điểm vô hạn!",
			"Sự cám dỗ ngọt ngào của Cafe Ringo bao trùm con phố sầm uất.",
			"Nhưng lòng tham luôn phải trả giá.",
			"Dax, kẻ cơ hội ngu ngốc. Mưu mẹo của hắn bắt đầu."
		],
		"thai": [
			"ระบบสะสมไม่จำกัด!",
			"เสน่ห์เย้ายวนของคาเฟ่ริงโกะปกคลุมย่านการค้าไปทั่ว",
			"แต่ความโลภนั้น ต้องจ่ายด้วยราคาเสมอ",
			"แด็กซ์ ผู้ฉวยโอกาสที่โง่เขลา แผนการของเขาเริ่มต้นขึ้น"
		],
		"hindi": [
			"असीमित रिवॉर्ड सिस्टम!",
			"कैफे रिंगो के मीठे प्रलोभन ने व्यस्त सड़क को घेर लिया।",
			"लेकिन लालच का हमेशा एक मोल होता है।",
			"डैक्स, मूर्ख अवसरवादी। उसकी चाल शुरू होती है।"
		]
	}
} as const;
