export const scenario_forest_mossenigma_48_03 = {
	"scenario_id": "forest_mossenigma_48_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "짙은 어둠이 깔린 밀림. 고대 부족의 유적이 숨겨진 곳.",
						"english": "A jungle shrouded in deep darkness. The hidden ruins of an ancient tribe.",
						"japanese": "濃い闇に包まれた密林。古代部族の遺跡が隠された場所。",
						"chinese": "密林深处，黑暗笼罩。古老部落的遗迹隐藏于此。",
						"french": "Une jungle enveloppée d'une obscurité profonde. Le lieu où sont cachées les ruines d'une ancienne tribu.",
						"spanish": "Una jungla envuelta en una oscuridad profunda. El lugar donde se esconden las ruinas de una antigua tribu.",
						"vietnamese": "Rừng già chìm trong bóng tối. Nơi ẩn giấu di tích bộ tộc cổ đại.",
						"thai": "ป่าทึบปกคลุมด้วยความมืดมิด สถานที่ซ่อนเร้นของซากปรักหักพังของชนเผ่าโบราณ",
						"hindi": "घना अंधेरा छाया हुआ जंगल। प्राचीन जनजाति के खंडहर छिपे हुए।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Moss Enigma의 흔적은 대체 어디에…",
						"english": "Where on earth are the traces of the Moss Enigma...?",
						"japanese": "Moss Enigmaの痕跡は一体どこに…",
						"chinese": "苔藓之谜的踪迹到底在哪…？",
						"french": "Où sont donc les traces de l'Énigme Mousse...?",
						"spanish": "¿Dónde están las huellas del Enigma del Musgo...?",
						"vietnamese": "Dấu vết của Moss Enigma rốt cuộc ở đâu…?",
						"thai": "ร่องรอยของ Moss Enigma อยู่ที่ไหนกันแน่...",
						"hindi": "आखिर मॉस एनिग्मा के निशान कहाँ हैं...?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "길을 잃은 듯 보이는군요. 제가 안내해 드릴 수 있습니다.",
						"english": "You seem lost. I can guide you.",
						"japanese": "道に迷われたようですね。私がご案内できます。",
						"chinese": "你似乎迷路了。我可以为你指路。",
						"french": "Vous semblez perdu. Je peux vous guider.",
						"spanish": "Parece que se ha perdido. Yo puedo guiarle.",
						"vietnamese": "Có vẻ như bạn đã lạc đường. Tôi có thể dẫn đường cho bạn.",
						"thai": "คุณดูเหมือนหลงทาง ผมสามารถนำทางให้คุณได้",
						"hindi": "आप खोए हुए लगते हैं। मैं आपकी मदद कर सकता हूँ।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién es usted?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시더라고 합니다. 이 숲의 길을 누구보다 잘 알죠.",
						"english": "I am Sidero. I know the paths of this forest better than anyone.",
						"japanese": "シデロと申します。この森の道を誰よりもよく知っています。",
						"chinese": "我是希德罗。这片森林的路径我比谁都清楚。",
						"french": "Je suis Sidero. Je connais les chemins de cette forêt mieux que quiconque.",
						"spanish": "Soy Sidero. Conozco los caminos de este bosque mejor que nadie.",
						"vietnamese": "Tôi là Sidero. Tôi biết những con đường trong khu rừng này rõ hơn bất kỳ ai.",
						"thai": "ผมชื่อซีเดโร่ ผมรู้เส้นทางในป่านี้ดีกว่าใครๆ",
						"hindi": "मेरा नाम साइडरो है। मैं इस जंगल के रास्तों को किसी और से बेहतर जानता हूँ।"
					},
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…믿을 수 있을까요?",
						"english": "...Can I trust you?",
						"japanese": "…信じてもいいのでしょうか？",
						"chinese": "…我能相信你吗？",
						"french": "...Puis-je vous faire confiance ?",
						"spanish": "...¿Puedo confiar en usted?",
						"vietnamese": "…Tôi có thể tin bạn không?",
						"thai": "...ผมจะเชื่อคุณได้ไหม?",
						"hindi": "...क्या मैं तुम पर भरोसा कर सकता हूँ?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실을 원한다면, 절 따르세요.",
						"english": "If you seek the truth, follow me.",
						"japanese": "真実を望むなら、私に従いなさい。",
						"chinese": "如果你想要真相，就跟我来。",
						"french": "Si vous voulez la vérité, suivez-me.",
						"spanish": "Si quiere la verdad, sígame.",
						"vietnamese": "Nếu bạn muốn sự thật, hãy đi theo tôi.",
						"thai": "ถ้าคุณต้องการความจริง จงตามผมมา",
						"hindi": "अगर तुम सच चाहते हो, तो मेरे पीछे आओ।"
					},
					"type": "speech",
					"speaker": "cedar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 Moss Enigma의 과거가 묻힌 곳입니다. 조심해야 해요.",
						"english": "This is where Moss Enigma's past is buried. You must be careful.",
						"japanese": "ここはモスエニグマの過去が葬られた場所です。気を付けてください。",
						"chinese": "这里埋藏着苔藓之谜的过去。你必须小心。",
						"french": "C'est ici que le passé de Moss Enigma est enfoui. Vous devez être prudent.",
						"spanish": "Aquí es donde está enterrado el pasado de Moss Enigma. Debes tener cuidado.",
						"vietnamese": "Đây là nơi chôn giấu quá khứ của Moss Enigma. Ngươi phải cẩn thận.",
						"thai": "ที่นี่คือที่ที่อดีตของ Moss Enigma ถูกฝังไว้ คุณต้องระวังให้มาก",
						"hindi": "यह वह जगह है जहाँ मॉस एनिग्मा का अतीत दफन है। आपको सावधान रहना होगा।"
					},
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그녀의 흔적을 찾는 중입니다. 중요한 지도를 봤다는 소문이 있던데…",
						"english": "I'm looking for her traces. There are rumors she saw an important map...",
						"japanese": "彼女の足跡を追っています。彼女が重要な地図を見たという噂がありますが…",
						"chinese": "我正在寻找她的踪迹。有传言说她见过一张重要的地图…",
						"french": "Je suis à la recherche de ses traces. On raconte qu'elle a vu une carte importante...",
						"spanish": "Estoy buscando sus huellas. Se rumorea que vio un mapa importante...",
						"vietnamese": "Tôi đang tìm dấu vết của cô ấy. Có tin đồn cô ấy đã nhìn thấy một tấm bản đồ quan trọng...",
						"thai": "ฉันกำลังตามหาร่องรอยของเธอ มีข่าวลือว่าเธอเห็นแผนที่สำคัญ...",
						"hindi": "मैं उसके निशान ढूंढ रहा हूँ। अफवाहें हैं कि उसने एक महत्वपूर्ण नक्शा देखा था..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "아, 그 지도요? 제가 본 적 있습니다. 제가 찾아드리죠.",
						"english": "Oh, that map? I've seen it. I'll find it for you.",
						"japanese": "ああ、その地図ですか？見たことがあります。私が探して差し上げましょう。",
						"chinese": "哦，那张地图？我见过。我来帮你找。",
						"french": "Oh, cette carte ? Je l'ai déjà vue. Je vais vous la trouver.",
						"spanish": "Oh, ¿ese mapa? Lo he visto. Te lo buscaré.",
						"vietnamese": "À, tấm bản đồ đó à? Tôi đã thấy rồi. Tôi sẽ tìm nó cho bạn.",
						"thai": "โอ้ แผนที่นั่นเหรอ? ฉันเคยเห็นมันแล้ว ฉันจะหามันให้คุณเอง",
						"hindi": "ओह, वह नक्शा? मैंने उसे देखा है। मैं उसे तुम्हारे लिए ढूंढूंगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 이 숲에선 눈에 보이는 모든 걸 믿으면 안 돼요.",
						"english": "But... in this forest, you can't trust everything you see.",
						"japanese": "しかし…この森では、目に見えるもの全てを信じてはいけません。",
						"chinese": "但是…在这片森林里，你不能相信你所看到的一切。",
						"french": "Mais… dans cette forêt, vous ne devez pas croire tout ce que vous voyez.",
						"spanish": "Pero... en este bosque, no puedes confiar en todo lo que ves.",
						"vietnamese": "Nhưng... trong khu rừng này, ngươi không thể tin vào tất cả những gì mình thấy.",
						"thai": "แต่...ในป่านี้ คุณไม่สามารถเชื่อทุกสิ่งที่คุณเห็นได้",
						"hindi": "लेकिन... इस जंगल में, आप अपनी आँखों से देखे हर चीज़ पर भरोसा नहीं कर सकते।"
					},
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 소리죠?",
						"english": "What do you mean?",
						"japanese": "どういうことですか？",
						"chinese": "你什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý ngươi là gì?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "지도는 저기 고대 제단에 있습니다. 제가 먼저 가보죠.",
						"english": "The map is at that ancient altar. I'll go ahead.",
						"japanese": "地図はあの古代の祭壇にあります。私が行きましょう。",
						"chinese": "地图就在那个古老的祭坛上。我先过去。",
						"french": "La carte est à cet ancien autel. Je vais y aller en premier.",
						"spanish": "El mapa está en ese altar antiguo. Iré yo primero.",
						"vietnamese": "Bản đồ ở trên bàn thờ cổ đó. Để tôi đi trước.",
						"thai": "แผนที่อยู่ที่แท่นบูชาโบราณนั่น ฉันจะไปก่อน",
						"hindi": "नक्शा उस प्राचीन वेदी पर है। मैं पहले जाता हूँ।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠깐, 뭔가 이상해…!",
						"english": "Wait, something's wrong...!",
						"japanese": "待って、何かおかしい…！",
						"chinese": "等等，有些不对劲…！",
						"french": "Attendez, quelque chose ne va pas… !",
						"spanish": "¡Espera, algo anda mal...!",
						"vietnamese": "Khoan đã, có gì đó không đúng...!",
						"thai": "เดี๋ยวนะ มีบางอย่างผิดปกติ...!",
						"hindi": "रुको, कुछ तो गड़बड़ है...!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "갑자기 거대한 그림자가 앞을 가로막았다.",
						"english": "Suddenly, a giant shadow blocked the way.",
						"japanese": "突然、巨大な影が道を塞いだ。",
						"chinese": "突然，一个巨大的影子挡住了去路。",
						"french": "Soudain, une ombre gigantesque barra le chemin.",
						"spanish": "De repente, una sombra gigante bloqueó el camino.",
						"vietnamese": "Bất ngờ, một cái bóng khổng lồ chắn ngang đường.",
						"thai": "ทันใดนั้น เงาขนาดใหญ่ก็ขวางทางไว้",
						"hindi": "अचानक, एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "크아아아! 어리석은 인간들… 나의 영역에 발을 들이다니.",
						"english": "GRAAAAH! Foolish mortals... daring to set foot in my domain.",
						"japanese": "グアアアア！愚かな人間ども…私の領域に足を踏み入れるとは。",
						"chinese": "吼啊啊啊！愚蠢的人类…竟敢踏入我的领域。",
						"french": "GRAAAAH ! Mortels insensés… oser pénétrer mon domaine.",
						"spanish": "¡GRAAAAH! ¡Mortales estúpidos... osando poner un pie en mi dominio!",
						"vietnamese": "GRÀO OOO! Lũ phàm nhân ngu ngốc... dám đặt chân vào lãnh địa của ta.",
						"thai": "กร๊าซซซซ! มนุษย์โง่เง่า... กล้าดียังไงมาเหยียบย่ำอาณาเขตของข้า",
						"hindi": "गर्रर्रर्रर्र! मूर्ख नश्वर... मेरे क्षेत्र में पैर रखने की हिम्मत की।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이자가 {random_boss}로군! 시더, 지도는 찾았습니까?",
						"english": "So this is {random_boss}! Cinder, did you find the map?",
						"japanese": "こいつが{random_boss}か！シダー、地図は見つかりましたか？",
						"chinese": "原来这就是{random_boss}！西德，找到地图了吗？",
						"french": "C'est donc ça, {random_boss} ! Cinder, avez-vous trouvé la carte ?",
						"spanish": "¡Así que este es {random_boss}! Cinder, ¿encontraste el mapa?",
						"vietnamese": "Đây chính là {random_boss}! Cinder, đã tìm thấy bản đồ chưa?",
						"thai": "นี่คือ {random_boss} สินะ! ซินเดอร์ คุณหาแผนที่เจอไหม?",
						"hindi": "तो यह {random_boss} है! सिंडर, क्या तुम्हें नक्शा मिला?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "이런! 지도를 떨어뜨렸어요! 먼저 저 녀석부터 처리하죠!",
						"english": "Oh no! I dropped the map! Let's deal with that guy first!",
						"japanese": "しまった！地図を落としちゃった！まずはあいつを片付けよう！",
						"chinese": "糟了！我把地图弄掉了！先解决掉那个家伙！",
						"french": "Mince ! J'ai fait tomber la carte ! Occupons-nous de ce type d'abord !",
						"spanish": "¡No! ¡Se me cayó el mapa! ¡Primero ocupémonos de ese tipo!",
						"vietnamese": "Ôi không! Tôi làm rơi bản đồ rồi! Xử lý tên đó trước đã!",
						"thai": "แย่แล้ว! ทำแผนที่ตก! จัดการเจ้าหมอนั่นก่อน!",
						"hindi": "ओह नहीं! मैंने नक्शा गिरा दिया! पहले उस वाले से निपटते हैं!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장! 일단 저 녀석부터 처리한다!",
						"english": "Damn it! First, I'll take care of that guy!",
						"japanese": "ちくしょう！まずはあいつを片付けるぞ！",
						"chinese": "可恶！先解决掉那个家伙！",
						"french": "Maudit ! D'abord, je vais m'occuper de ce type !",
						"spanish": "¡Maldita sea! ¡Primero me encargaré de ese tipo!",
						"vietnamese": "Chết tiệt! Trước hết, tôi sẽ xử lý tên đó!",
						"thai": "ให้ตายสิ! จัดการเจ้าหมอนั่นก่อน!",
						"hindi": "धिक्कार है! पहले मैं उस वाले से निपटता हूँ!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "격렬한 전투 끝에, 정체 모를 자가 쓰러졌다.",
						"english": "After a fierce battle, the unknown figure fell.",
						"japanese": "激しい戦闘の末、正体不明の者が倒れた。",
						"chinese": "经过激烈的战斗，一个不明身份的人倒下了。",
						"french": "Après une bataille féroce, l'inconnu est tombé.",
						"spanish": "Tras una feroz batalla, la figura desconocida cayó.",
						"vietnamese": "Sau một trận chiến khốc liệt, kẻ không rõ danh tính đã ngã xuống.",
						"thai": "หลังจากการต่อสู้อันดุเดือด บุคคลนิรนามก็ล้มลง",
						"hindi": "एक भयंकर युद्ध के बाद, अज्ञात व्यक्ति गिर गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(주변을 둘러보며) 지도가 없어졌어…!",
						"english": "(Looking around) The map is gone...!",
						"japanese": "（周囲を見回し）地図がない…！",
						"chinese": "(环顾四周) 地图不见了...!",
						"french": "(Regardant autour) La carte a disparu... !",
						"spanish": "(Mirando alrededor) ¡El mapa ha desaparecido...!",
						"vietnamese": "(Nhìn quanh) Bản đồ đâu mất rồi...!",
						"thai": "(มองไปรอบๆ) แผนที่หายไปแล้ว...!",
						"hindi": "(आस-पास देखते हुए) नक्शा गायब है...!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "cedar",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시더, 당신…!",
						"english": "Cedar, you...!",
						"japanese": "シダー、お前…！",
						"chinese": "西达，你...！",
						"french": "Cedar, vous... !",
						"spanish": "¡Cedar, tú...!",
						"vietnamese": "Cedar, bạn...!",
						"thai": "ซีดาร์, คุณ...!",
						"hindi": "सीडर, तुम...!"
					}
				},
				{
					"emotion": "base",
					"speaker": "cedar",
					"content": {
						"korean": "…들켰군요. 미안하지만, 그 지도는 제가 가져가겠습니다.",
						"english": "...You caught me. Sorry, but I'll be taking that map.",
						"japanese": "…バレましたか。申し訳ありませんが、その地図は私がいただきます。",
						"chinese": "…被你发现了。抱歉，那张地图我收下了。",
						"french": "...Vous m'avez découvert. Désolé, mais je prendrai cette carte.",
						"spanish": "...Me has descubierto. Lo siento, pero me llevaré ese mapa.",
						"vietnamese": "...Bạn đã phát hiện ra. Xin lỗi, nhưng tôi sẽ lấy bản đồ đó.",
						"thai": "...ถูกจับได้แล้วสินะ ขอโทษนะ แต่ฉันจะเอาแผนที่นั่นไป",
						"hindi": "...तुमने मुझे पकड़ लिया। माफ़ करना, लेकिन वह नक्शा मैं ले जा रहा हूँ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "배신자! Moss Enigma의 부하였다니!",
						"english": "Traitor! You were a subordinate of Moss Enigma!",
						"japanese": "裏切り者！Moss Enigmaの手下だったとは！",
						"chinese": "叛徒！你竟然是Moss Enigma的部下！",
						"french": "Traître ! Vous étiez un subordonné de Moss Enigma !",
						"spanish": "¡Traidor! ¡Eras un subordinado de Moss Enigma!",
						"vietnamese": "Kẻ phản bội! Ngươi là thuộc hạ của Moss Enigma sao!",
						"thai": "คนทรยศ! แกเป็นลูกน้องของ Moss Enigma งั้นเหรอ!",
						"hindi": "गद्दार! तुम मॉस एनिग्मा के अधीनस्थ थे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "전 그저 제 역할을 했을 뿐. Moss Enigma 님께 약속한 대로.",
						"english": "I merely played my part. As promised to Lord Moss Enigma.",
						"japanese": "私はただ、約束通り、Moss Enigma様のために役割を果たしただけです。",
						"chinese": "我只是尽了我的职责。正如向Moss Enigma大人承诺的那样。",
						"french": "J'ai simplement joué mon rôle. Comme promis à Lord Moss Enigma.",
						"spanish": "Simplemente hice mi parte. Tal como le prometí a Lord Moss Enigma.",
						"vietnamese": "Tôi chỉ làm tròn vai của mình. Như đã hứa với Chúa tể Moss Enigma.",
						"thai": "ฉันแค่ทำตามหน้าที่ ตามที่ได้สัญญากับท่าน Moss Enigma ไว้",
						"hindi": "मैंने बस अपनी भूमिका निभाई। जैसा कि लॉर्ड मॉस एनिग्मा से वादा किया था।"
					},
					"type": "speech",
					"speaker": "cedar",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "cedar",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 곧 알게 될 겁니다. 이 숲의 진실을.",
						"english": "You'll soon learn the truth of this forest.",
						"japanese": "じきに、この森の真実を知ることになるでしょう。",
						"chinese": "你很快就会知道这片森林的真相。",
						"french": "Vous découvrirez bientôt la vérité sur cette forêt.",
						"spanish": "Pronto descubrirás la verdad de este bosque.",
						"vietnamese": "Bạn sẽ sớm biết được sự thật về khu rừng này.",
						"thai": "ไม่นานคุณก็จะรู้ความจริงของป่านี้",
						"hindi": "आपको जल्द ही इस जंगल का सच पता चल जाएगा।"
					},
					"speaker": "cedar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 놓쳤어!",
						"english": "Damn it... I missed him!",
						"japanese": "ちくしょう…逃がした！",
						"chinese": "可恶…让他跑了！",
						"french": "Maudit... je l'ai raté !",
						"spanish": "¡Maldita sea... lo perdí!",
						"vietnamese": "Chết tiệt... tôi để hắn trốn thoát rồi!",
						"thai": "ให้ตายสิ... พลาดไปแล้ว!",
						"hindi": "धिक्कार है... मैं चूक गया!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시더의 배신. 지도는 빼앗겼고, 분노가 치밀어 올랐다.",
						"english": "Cedar's betrayal. The map was stolen, and fury surged.",
						"japanese": "シダーの裏切り。地図は奪われ、怒りが込み上げてきた。",
						"chinese": "西达的背叛。地图被夺走了，愤怒涌上心头。",
						"french": "La trahison de Cedar. La carte a été volée, et la fureur a monté.",
						"spanish": "La traición de Cedar. El mapa fue robado, y la ira se apoderó de mí.",
						"vietnamese": "Sự phản bội của Cedar. Bản đồ bị cướp đi, cơn giận trào dâng.",
						"thai": "การทรยศของซีดาร์ แผนที่ถูกชิงไป ความโกรธก็พลุ่งพล่าน",
						"hindi": "सेडर का विश्वासघात। नक्शा छीन लिया गया, और क्रोध उमड़ पड़ा।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "빌어먹을 시더…!",
						"english": "Damn you, Cedar...!",
						"japanese": "ちくしょう、シダー…！",
						"chinese": "该死的西达……！",
						"french": "Maudit Cedar… !",
						"spanish": "¡Maldito Cedar...!",
						"vietnamese": "Đồ khốn Cedar...!",
						"thai": "ซีดาร์บ้าเอ๊ย...!",
						"hindi": "धिक्कार है तुम पर, सेडर...!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 어리석은 자여. 이 숲에서 누구를 믿는다는 말인가?",
						"english": "Hehehe... Foolish one. Who do you trust in this forest?",
						"japanese": "ククク… 愚か者め。この森で誰を信じるというのだ？",
						"chinese": "呵呵呵……愚蠢的家伙。在这片森林里，你相信谁呢？",
						"french": "Hahaha… Imbécile. Qui crois-tu en cette forêt ?",
						"spanish": "Jajaja... Tonto. ¿En quién confías en este bosque?",
						"vietnamese": "Khà khà khà… Đồ ngốc. Ngươi tin ai trong khu rừng này chứ?",
						"thai": "คิกๆๆ... เจ้าคนโง่เง่า เจ้าจะเชื่อใจใครในป่านี้กัน?",
						"hindi": "हाहहा... मूर्ख। इस जंगल में तुम किस पर भरोसा करते हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신도 Moss Enigma의 부하인가!",
						"english": "Are you also a subordinate of Moss Enigma?!",
						"japanese": "お前もモスエニグマの手下か！",
						"chinese": "你也是苔藓谜团的手下吗？！",
						"french": "Toi aussi, tu es un subordonné de Moss Enigma !",
						"spanish": "¿Tú también eres un subordinado de Moss Enigma?!",
						"vietnamese": "Ngươi cũng là thuộc hạ của Moss Enigma sao?!",
						"thai": "แกก็เป็นลูกน้องของมอสเอนิกม่าด้วยงั้นรึ?!",
						"hindi": "क्या तुम भी मॉस एनिग्मा के अधीनस्थ हो?!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네 분노는 결국 그분께 바쳐질 제물이 될 뿐.",
						"english": "Your rage will merely become an offering to him.",
						"japanese": "お前の怒りは、結局あの方に捧げられる生贄となるだけだ。",
						"chinese": "你的愤怒最终只会成为献给那位大人的祭品。",
						"french": "Ta rage ne sera finalement qu'un sacrifice offert à lui.",
						"spanish": "Tu ira no será más que un sacrificio ofrecido a él.",
						"vietnamese": "Cơn giận của ngươi cuối cùng cũng chỉ là vật tế hiến cho người đó mà thôi.",
						"thai": "ความโกรธของเจ้าจะกลายเป็นเพียงเครื่องสังเวยแด่ท่านผู้นั้นเท่านั้น",
						"hindi": "तुम्हारा क्रोध अंततः केवल उसे अर्पित किया गया एक बलिदान होगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비켜라! 당장 Moss Enigma에게 데려가!",
						"english": "Get out of my way! Take me to Moss Enigma right now!",
						"japanese": "退け！今すぐモスエニグマの元へ連れて行け！",
						"chinese": "让开！立刻带我去见苔藓谜团！",
						"french": "Dégage ! Amène-moi à Moss Enigma tout de suite !",
						"spanish": "¡Apártate! ¡Llévame a Moss Enigma ahora mismo!",
						"vietnamese": "Tránh ra! Đưa ta đến gặp Moss Enigma ngay lập tức!",
						"thai": "หลีกไป! พาข้าไปหามอสเอนิกม่าเดี๋ยวนี้!",
						"hindi": "हट जाओ! मुझे तुरंत मॉस एनिग्मा के पास ले चलो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크크… 그분께 갈 자격도 없는 녀석이.",
						"english": "Hehehe... A wretch unworthy to even approach him.",
						"japanese": "ククク… あの方に会う資格もない奴が。",
						"chinese": "呵呵呵…… 一个连见那位大人的资格都没有的家伙。",
						"french": "Hahaha… Une vermine indigne de l'approcher.",
						"spanish": "Jajaja... Un miserable indigno de acercarse a él.",
						"vietnamese": "Khà khà khà… Một kẻ không có tư cách gặp người đó.",
						"thai": "คิกๆๆ... เจ้าคนที่ไม่คู่ควรแม้แต่จะไปหาท่านผู้นั้น",
						"hindi": "हाहहा... एक तुच्छ व्यक्ति जो उसके पास जाने के भी योग्य नहीं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…내 분노를 보여주지.",
						"english": "...I'll show you my rage.",
						"japanese": "…俺の怒りを見せてやろう。",
						"chinese": "……我将让你见识我的愤怒。",
						"french": "...Je vais te montrer ma rage.",
						"spanish": "...Te mostraré mi ira.",
						"vietnamese": "…Ta sẽ cho ngươi thấy cơn giận của ta.",
						"thai": "...ข้าจะแสดงความโกรธของข้าให้เจ้าเห็น",
						"hindi": "...मैं तुम्हें अपना क्रोध दिखाऊंगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 적이 쓰러지자, 숲의 고요함이 잠시 찾아왔다.",
						"english": "As the unknown enemy fell, a temporary silence descended upon the forest.",
						"japanese": "正体不明の敵が倒れると、森に一時的な静寂が訪れた。",
						"chinese": "当身份不明的敌人倒下时，森林暂时恢复了宁静。",
						"french": "Alors que l'ennemi inconnu tombait, un silence temporaire s'installa dans la forêt.",
						"spanish": "Cuando el enemigo desconocido cayó, un silencio temporal se apoderó del bosque.",
						"vietnamese": "Khi kẻ thù không rõ danh tính gục ngã, một sự tĩnh lặng tạm thời bao trùm khu rừng.",
						"thai": "เมื่อศัตรูที่ไม่รู้จักล้มลง ความเงียบสงบก็เข้ามาปกคลุมป่าชั่วขณะ",
						"hindi": "जब अज्ञात शत्रु गिर गया, तो जंगल में कुछ देर के लिए शांति छा गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 아무것도… 모르는군…",
						"english": "Urgh... You still... know nothing...",
						"japanese": "くっ…まだ…何も…分かっていないようだな…",
						"chinese": "呃……你还……一无所知……",
						"french": "Argh… Tu ne… sais encore… rien…",
						"spanish": "Argh... Todavía... no sabes... nada...",
						"vietnamese": "Khụ… Ngươi vẫn… chưa biết… gì cả…",
						"thai": "อึก… เจ้ายัง… ไม่รู้… อะไรเลย…",
						"hindi": "उफ़... तुम्हें अभी भी... कुछ भी... नहीं पता..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "지도도 뺏기고… 모든 게 엉망이 됐어.",
						"english": "Lost the map... Everything's a mess.",
						"japanese": "地図も奪われ…全てが台無しになった。",
						"chinese": "地图也被抢走了…一切都搞砸了。",
						"french": "La carte perdue... Tout est un gâchis.",
						"spanish": "Perdí el mapa... Todo es un desastre.",
						"vietnamese": "Mất cả bản đồ... Mọi thứ đều rối tung.",
						"thai": "เสียแผนที่ไปแล้ว... ทุกอย่างพังทลาย",
						"hindi": "मानचित्र भी छिन गया... सब कुछ गड़बड़ हो गया है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 멈출 순 없어. Moss Enigma… 반드시 진실을 밝혀낼 거야.",
						"english": "But I can't stop. Moss Enigma... I will uncover the truth.",
						"japanese": "しかし、止まるわけにはいかない。モスエニグマ…必ず真実を明らかにする。",
						"chinese": "但我不能停下。苔藓之谜…我一定会揭示真相。",
						"french": "Mais je ne peux pas m'arrêter. Moss Enigma... Je découvrirai la vérité.",
						"spanish": "Pero no puedo detenerme. Moss Enigma... Descubriré la verdad.",
						"vietnamese": "Nhưng tôi không thể dừng lại. Moss Enigma... Tôi nhất định sẽ tìm ra sự thật.",
						"thai": "แต่ฉันหยุดไม่ได้ Moss Enigma... ฉันจะเปิดเผยความจริงให้ได้",
						"hindi": "पर मैं रुक नहीं सकता। मॉस एनिग्मा... मैं सच का पता लगाकर रहूंगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "빼앗긴 지도. 그리고 두 얼굴의 인도자. 숲의 진실은 더욱 깊은 어둠 속에 감춰져 있었다.",
						"english": "The stolen map. And the two-faced guide. The truth of the forest was hidden in deeper shadows.",
						"japanese": "奪われた地図。そして二つの顔を持つ案内人。森の真実は、さらに深い闇の中に隠されていた。",
						"chinese": "被夺走的地图。以及两面派的引路人。森林的真相隐藏在更深的黑暗中。",
						"french": "La carte volée. Et le guide à deux visages. La vérité de la forêt était cachée dans des ombres plus profondes.",
						"spanish": "El mapa robado. Y el guía de dos caras. La verdad del bosque estaba oculta en sombras más profundas.",
						"vietnamese": "Bản đồ bị cướp. Và người dẫn đường hai mặt. Sự thật của khu rừng bị che giấu trong bóng tối sâu thẳm hơn.",
						"thai": "แผนที่ที่ถูกช่วงชิง และผู้นำทางสองหน้า ความจริงของป่าถูกซ่อนไว้ในเงามืดที่ลึกยิ่งกว่า",
						"hindi": "छिना हुआ नक्शा। और दोहरे चेहरे वाला मार्गदर्शक। जंगल का सच और गहरे अंधेरे में छिपा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "In the darkness, a colossal shadow swallowed the expedition.",
						"japanese": "闇の中で、巨大な影が探検隊を飲み込んだ。",
						"chinese": "在黑暗中，巨大的影子吞噬了探险队。",
						"french": "Dans l'obscurité, une ombre colossale a englouti l'expédition.",
						"spanish": "En la oscuridad, una sombra colosal engulló a la expedición.",
						"vietnamese": "Trong bóng tối, một bóng đen khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "ในความมืด เงาขนาดมหึมาได้กลืนกินคณะสำรวจ",
						"hindi": "अंधेरे में, एक विशालकाय परछाई ने अभियान दल को निगल लिया।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "크하하하! 넌 그저 꼭두각시에 불과하다! 믿음이 네 약점이 될 줄이야!",
						"english": "Hahahaha! You are merely a puppet! Who knew trust would be your weakness!",
						"japanese": "クハハハ！お前はただの操り人形に過ぎない！信頼がお前の弱点になるとはな！",
						"chinese": "哈哈哈！你不过是个傀儡！没想到信任会成为你的弱点！",
						"french": "Hahahaha ! Tu n'es qu'une marionnette ! Qui aurait cru que la confiance serait ta faiblesse !",
						"spanish": "¡Jajajaja! ¡Solo eres una marioneta! ¡Quién iba a pensar que la confianza sería tu debilidad!",
						"vietnamese": "Khà khà khà! Ngươi chỉ là con rối thôi! Ai ngờ lòng tin lại là điểm yếu của ngươi!",
						"thai": "คิกคิกคิก! แกเป็นแค่หุ่นเชิด! ใครจะรู้ว่าความเชื่อใจจะเป็นจุดอ่อนของแก!",
						"hindi": "हाहाहाहा! तुम बस एक कठपुतली हो! किसने सोचा था कि विश्वास ही तुम्हारी कमजोरी बन जाएगा!"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 식으로… 끝낼 순 없어!",
						"english": "It can't end like this!",
						"japanese": "こんな形で…終わらせるわけにはいかない！",
						"chinese": "这种方式…我不能就这样结束！",
						"french": "Pas comme ça... Je ne peux pas finir comme ça !",
						"spanish": "¡No puedo terminar así!",
						"vietnamese": "Không thể kết thúc thế này được!",
						"thai": "แบบนี้... จบไม่ได้!",
						"hindi": "इस तरह... मैं खत्म नहीं कर सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시 싸울 거야!",
						"english": "I'll fight again!",
						"japanese": "もう一度戦う！",
						"chinese": "我会再次战斗！",
						"french": "Je me battrai à nouveau !",
						"spanish": "¡Lucharé de nuevo!",
						"vietnamese": "Tôi sẽ chiến đấu lại!",
						"thai": "ฉันจะสู้ใหม่!",
						"hindi": "मैं फिर लड़ूंगा!"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"밀림은 겉과 속이 달랐다. 맹렬히 위협하거나, 다정한 손짓으로 유혹했다.",
			"Moss Enigma의 흔적을 쫓아 더 깊이 들어갈수록, 보이지 않는 그림자가 드리웠다.",
			"믿었던 인도자는 두 얼굴을 하고 있었다. 그 손에 들린 지도는 과연 진실로 이끌까?"
		],
		"english": [
			"The jungle was deceptive, threatening fiercely one moment, luring with a gentle hand the next.",
			"The deeper we delved, chasing the traces of the Moss Enigma, the more an unseen shadow loomed.",
			"The guide we trusted had two faces. Would the map in their hand truly lead to the truth?"
		],
		"japanese": [
			"密林は表と裏の顔を持っていた。激しく威嚇するかと思えば、優しい手招きで誘惑した。",
			"Moss Enigmaの痕跡を追って深く進むほど、見えない影が忍び寄った。",
			"信じていた案内人は二つの顔を持っていた。その手に持つ地図は、果たして真実へと導くのだろうか？"
		],
		"chinese": [
			"丛林表里不一。时而猛烈威胁，时而温柔诱惑。",
			"追寻着苔藓之谜的踪迹深入，无形的阴影笼罩而下。",
			"信任的向导竟有两副面孔。他手中的地图，究竟能否指引真相？"
		],
		"french": [
			"La jungle était double. Elle menaçait férocement, ou séduisait d'un geste amical.",
			"Plus nous nous enfoncions, à la poursuite des traces de l'Énigme Mousse, plus une ombre invisible planait.",
			"Le guide que nous avions cru sincère avait deux visages. La carte dans sa main mènerait-elle vraiment à la vérité ?"
		],
		"spanish": [
			"La jungla era engañosa, amenazaba ferozmente o atraía con un gesto amable.",
			"Cuanto más nos adentrábamos siguiendo las huellas del Enigma del Musgo, más se cernía una sombra invisible.",
			"El guía en quien confiábamos tenía dos caras. ¿Nos conduciría el mapa en su mano realmente a la verdad?"
		],
		"vietnamese": [
			"Rừng già thật giả khó lường. Lúc thì đe dọa dữ dội, lúc lại vẫy gọi dịu dàng.",
			"Càng theo dấu Moss Enigma tiến sâu, bóng tối vô hình càng bao trùm.",
			"Người dẫn đường ta tin tưởng lại có hai mặt. Liệu tấm bản đồ trên tay người ấy có thực sự dẫn đến sự thật?"
		],
		"thai": [
			"ป่าลึกมีความลับซับซ้อน มันคุกคามอย่างดุเดือด หรือเย้ายวนด้วยท่าทีอ่อนโยน",
			"ยิ่งไล่ตามร่องรอยของ Moss Enigma เข้าไปลึกเท่าไหร่ เงาที่มองไม่เห็นก็ยิ่งคืบคลานเข้ามา",
			"ผู้นำทางที่เชื่อใจกลับมีสองหน้า แผนที่ในมือเขาจะนำไปสู่ความจริงหรือไม่?"
		],
		"hindi": [
			"जंगल ऊपर से कुछ और अंदर से कुछ और था। वह कभी भयंकर रूप से डराता, तो कभी प्यारे इशारों से लुभाता था।",
			"मॉस एनिग्मा के निशानों का पीछा करते हुए जितना गहरा जाते, उतनी ही एक अनदेखी छाया मंडराती जाती।",
			"जिस मार्गदर्शक पर भरोसा किया था, उसके दो चेहरे थे। क्या उसके हाथ में मौजूद नक्शा सचमुच सच्चाई की ओर ले जाएगा?"
		]
	}
} as const;
