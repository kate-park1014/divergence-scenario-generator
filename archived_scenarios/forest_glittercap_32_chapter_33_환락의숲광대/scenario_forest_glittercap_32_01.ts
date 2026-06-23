export const scenario_forest_glittercap_32_01 = {
	"scenario_id": "forest_glittercap_32_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"깊은 숲, 모든 것이 화려하게 치장된 곳.",
			"정화의 여왕 글리터캡, 그녀의 쇼가 막을 올렸다.",
			"모두가 그녀를 찬양해야 한다. 그렇지 않으면…",
			"이 완벽한 연극, 과연 진실일까?"
		],
		"english": [
			"Deep in the forest, where everything is lavishly adorned.",
			"Queen Glittercap of Purity, her show has begun.",
			"Everyone must praise her. Otherwise…",
			"Is this perfect play truly real?"
		],
		"japanese": [
			"深い森、全てが華やかに飾られた場所。",
			"浄化の女王グリッターキャップ、彼女のショーが開幕した。",
			"皆が彼女を称賛しなければならない。さもなくば…",
			"この完璧な演劇、果たして真実なのだろうか？"
		],
		"chinese": [
			"密林深处，万物皆华丽装点。",
			"净化女王闪光帽，她的演出拉开了帷幕。",
			"所有人必须赞美她。否则…",
			"这场完美的戏剧，果真如此真实吗？"
		],
		"french": [
			"Au cœur de la forêt profonde, où tout est somptueusement paré.",
			"La Reine Paillette de la Pureté, son spectacle a commencé.",
			"Tout le monde doit la louer. Sinon…",
			"Cette pièce parfaite, est-elle vraiment vraie ?"
		],
		"spanish": [
			"En lo profundo del bosque, donde todo está espléndidamente adornado.",
			"La Reina Purificadora Glittercap, su espectáculo ha comenzado.",
			"Todos deben alabarla. De lo contrario…",
			"Esta obra perfecta, ¿será realmente cierta?"
		],
		"vietnamese": [
			"Sâu trong rừng, nơi mọi thứ được trang hoàng lộng lẫy.",
			"Nữ hoàng Thanh lọc Glittercap, buổi diễn của cô ấy đã bắt đầu.",
			"Mọi người phải ca ngợi cô ấy. Nếu không…",
			"Vở kịch hoàn hảo này, liệu có thật không?"
		],
		"thai": [
			"ลึกเข้าไปในป่า ที่ซึ่งทุกสิ่งประดับประดาอย่างหรูหรา.",
			"ราชินีแห่งความบริสุทธิ์ กลิตเตอร์แคป, การแสดงของนางได้เปิดฉากขึ้นแล้ว.",
			"ทุกคนต้องสรรเสริญนาง มิฉะนั้น…",
			"ละครที่สมบูรณ์แบบนี้ จริงหรือเปล่า?"
		],
		"hindi": [
			"घने जंगल में, जहाँ सब कुछ भव्यता से सजाया गया है。",
			"शुद्धता की रानी ग्लिटरकैप, उनका शो शुरू हो गया है。",
			"सभी को उसकी स्तुति करनी चाहिए। अन्यथा...",
			"क्या यह उत्तम नाटक सच है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "화려한 숲에 발을 들였다. 눈을 뗄 수 없는 색채의 향연.",
						"english": "Stepped into the opulent forest. A feast of colors impossible to look away from.",
						"japanese": "華やかな森に足を踏み入れた。目を奪われる色彩の饗宴。",
						"chinese": "踏入华丽的森林。一场令人目不暇接的色彩盛宴。",
						"french": "J'ai pénétré dans la forêt opulente. Un festin de couleurs dont on ne peut détourner le regard.",
						"spanish": "Entré en el opulento bosque. Un festín de colores del que es imposible apartar la vista.",
						"vietnamese": "Bước vào khu rừng lộng lẫy. Một bữa tiệc màu sắc không thể rời mắt.",
						"thai": "ย่างเท้าเข้าสู่ป่าอันงดงาม งานเลี้ยงแห่งสีสันที่ละสายตาไม่ได้.",
						"hindi": "भव्य जंगल में कदम रखा। रंगों का एक ऐसा उत्सव जिससे नज़रें नहीं हटतीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 그 여왕의 숲?",
						"english": "Is this… the Queen's forest?",
						"japanese": "ここが… あの女王の森？",
						"chinese": "这里是… 那位女王的森林？",
						"french": "C'est ici… la forêt de la Reine ?",
						"spanish": "¿Es este… el bosque de la Reina?",
						"vietnamese": "Đây là… khu rừng của Nữ hoàng?",
						"thai": "นี่คือ… ป่าของราชินีหรือ?",
						"hindi": "क्या यह… उस रानी का जंगल है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "환영합니다. 여왕 폐하의 완벽한 왕국에.",
						"english": "Welcome. To Her Majesty the Queen's perfect kingdom.",
						"japanese": "ようこそ。女王陛下の完璧な王国へ。",
						"chinese": "欢迎来到女王陛下的完美王国。",
						"french": "Bienvenue. Dans le royaume parfait de Sa Majesté la Reine.",
						"spanish": "Bienvenidos. Al reino perfecto de Su Majestad la Reina.",
						"vietnamese": "Chào mừng. Đến vương quốc hoàn hảo của Nữ hoàng bệ hạ.",
						"thai": "ยินดีต้อนรับ สู่ราชอาณาจักรที่สมบูรณ์แบบของสมเด็จพระราชินี.",
						"hindi": "स्वागत है। महारानी के पूर्ण राज्य में।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "폐하? 지금 여기 계신가요?",
						"english": "Her Majesty? Is she here now?",
						"japanese": "陛下？今ここにいらっしゃいますか？",
						"chinese": "陛下？她现在在这里吗？",
						"french": "Sa Majesté ? Est-elle ici maintenant ?",
						"spanish": "¿Su Majestad? ¿Está aquí ahora?",
						"vietnamese": "Bệ hạ? Ngài có ở đây không?",
						"thai": "ฝ่าบาท? ตอนนี้ทรงอยู่ที่นี่หรือไม่?",
						"hindi": "महारानी? क्या वह अभी यहाँ हैं?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "늘 함께하시죠. 이 모든 환희 속에.",
						"english": "She is always with us. In all this joy.",
						"japanese": "いつも共にいらっしゃいます。この全ての歓喜の中に。",
						"chinese": "她永远与我们同在。在这所有的欢愉之中。",
						"french": "Elle est toujours avec nous. Dans toute cette joie.",
						"spanish": "Ella siempre está con nosotros. En toda esta alegría.",
						"vietnamese": "Cô ấy luôn ở bên chúng ta. Trong tất cả niềm vui này.",
						"thai": "นางอยู่กับเราเสมอ ในความยินดีทั้งหมดนี้.",
						"hindi": "वह हमेशा हमारे साथ हैं। इस सारी खुशी में।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "…뭔가 기묘한데.",
						"english": "…Something feels strange.",
						"japanese": "…何か奇妙だ。",
						"chinese": "…总觉得有些奇怪。",
						"french": "…Quelque chose est étrange.",
						"spanish": "…Algo se siente extraño.",
						"vietnamese": "…Có gì đó thật kỳ lạ.",
						"thai": "…รู้สึกแปลกๆ",
						"hindi": "…कुछ अजीब लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 숲의 유일한 규칙은 여왕님을 찬양하는 것입니다. 끊임없이.",
						"english": "The only rule of this forest is to praise the Queen. Ceaselessly.",
						"japanese": "この森唯一の掟は、女王様を称賛すること。絶え間なく。",
						"chinese": "这片森林唯一的规则，就是歌颂女王。永不停歇地歌颂。",
						"french": "La seule règle de cette forêt est de louer la Reine. Sans cesse.",
						"spanish": "La única regla de este bosque es alabar a la Reina. Sin cesar.",
						"vietnamese": "Luật duy nhất của khu rừng này là ca tụng Nữ hoàng. Không ngừng nghỉ.",
						"thai": "กฎเดียวของป่านี้คือการสรรเสริญองค์ราชินี ไม่หยุดยั้ง",
						"hindi": "इस जंगल का एकमात्र नियम महारानी की स्तुति करना है। निरंतर।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "cedar",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "여왕님은 완벽한 아름다움 그 자체. 흠잡을 데 없는 지배자.",
						"english": "The Queen is perfect beauty itself. A flawless ruler.",
						"japanese": "女王様は完璧なる美そのもの。非の打ちどころのない支配者。",
						"chinese": "女王陛下是完美的化身。无可挑剔的统治者。",
						"french": "La Reine est la beauté parfaite incarnée. Une souveraine irréprochable.",
						"spanish": "La Reina es la belleza perfecta misma. Una gobernante impecable.",
						"vietnamese": "Nữ hoàng là hiện thân của vẻ đẹp hoàn mỹ. Một người cai trị không tì vết.",
						"thai": "องค์ราชินีคือความงามที่สมบูรณ์แบบ ผู้ปกครองที่ไร้ที่ติ",
						"hindi": "महारानी स्वयं परिपूर्ण सुंदरता हैं। एक त्रुटिहीन शासक।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "모두가 그렇게 말해야 한다고?",
						"english": "Everyone must say that?",
						"japanese": "皆、そう言わなければならないの？",
						"chinese": "所有人都必须这么说吗？",
						"french": "Tout le monde doit dire ça ?",
						"spanish": "¿Todos deben decir eso?",
						"vietnamese": "Mọi người đều phải nói thế à?",
						"thai": "ทุกคนต้องพูดอย่างนั้นเหรอ?",
						"hindi": "क्या सबको ऐसा कहना चाहिए?"
					},
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "물론입니다! 칭찬이 부족하면… 숲의 불순물이 되죠.",
						"english": "Of course! A lack of praise... makes one an impurity of the forest.",
						"japanese": "もちろんです！称賛が足りなければ…森の不純物になります。",
						"chinese": "当然！如果缺乏赞美……就会成为森林的杂质。",
						"french": "Bien sûr ! Un manque de louanges... et on devient une impureté de la forêt.",
						"spanish": "¡Por supuesto! La falta de alabanzas... te convierte en una impureza del bosque.",
						"vietnamese": "Tất nhiên! Thiếu lời ca tụng... sẽ trở thành tạp chất của khu rừng.",
						"thai": "แน่นอน! ถ้าขาดคำสรรเสริญ... ก็จะกลายเป็นสิ่งเจือปนของป่า",
						"hindi": "बेशक! स्तुति की कमी... आपको जंगल की अशुद्धि बना देती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "불순물?",
						"english": "Impurity?",
						"japanese": "不純物？",
						"chinese": "杂质？",
						"french": "Une impureté ?",
						"spanish": "¿Impureza?",
						"vietnamese": "Tạp chất?",
						"thai": "สิ่งเจือปน?",
						"hindi": "अशुद्धि?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "화려한 꽃들 사이에, 어딘가 생기를 잃어가는 풀들이 보였다.",
						"english": "Amongst the vibrant flowers, I saw some grass losing its vitality.",
						"japanese": "華やかな花々の間に、どこか生気を失っていく草が見えた。",
						"chinese": "在华丽的花朵之间，看到了某种逐渐失去生机的草。",
						"french": "Parmi les fleurs éclatantes, je vis de l'herbe perdre peu à peu sa vitalité.",
						"spanish": "Entre las flores vibrantes, vi algunas hierbas perdiendo su vitalidad.",
						"vietnamese": "Giữa những bông hoa rực rỡ, tôi thấy vài ngọn cỏ đang dần mất đi sức sống.",
						"thai": "ท่ามกลางดอกไม้ที่สวยงาม ฉันเห็นหญ้าบางส่วนที่เริ่มสูญเสียความมีชีวิตชีวา",
						"hindi": "शानदार फूलों के बीच, मैंने कुछ घास को अपनी जीवटता खोते हुए देखा।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"type": "speech",
					"content": {
						"korean": "걱정 마세요. 여왕님은 모두에게 구원을 주시니까요.",
						"english": "Don't worry. The Queen grants salvation to everyone.",
						"japanese": "ご心配なく。女王様は皆に救いを与えてくださいますから。",
						"chinese": "别担心。女王陛下会赐予所有人救赎的。",
						"french": "Ne vous inquiétez pas. La Reine accorde le salut à tout le monde.",
						"spanish": "No te preocupes. La Reina concede la salvación a todos.",
						"vietnamese": "Đừng lo. Nữ hoàng ban ơn cứu rỗi cho tất cả mọi người.",
						"thai": "ไม่ต้องกังวล องค์ราชินีประทานความรอดแก่ทุกคน",
						"hindi": "चिंता मत करो। महारानी सबको मुक्ति देती हैं।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "칭찬 안 하면… 정말 죽는 거야?",
						"english": "If I don't praise... will I really die?",
						"japanese": "称賛しないと…本当に死ぬの？",
						"chinese": "如果不赞美……真的会死吗？",
						"french": "Si je ne loue pas... je vais vraiment mourir ?",
						"spanish": "Si no alabo... ¿realmente moriré?",
						"vietnamese": "Nếu không ca tụng... tôi có thực sự chết không?",
						"thai": "ถ้าไม่สรรเสริญ... จะตายจริงเหรอ?",
						"hindi": "अगर मैं स्तुति नहीं करूँगा... तो क्या मैं सच में मर जाऊँगा?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "죽음은 아름다운 정화의 과정. 새로운 시작이랍니다.",
						"english": "Death is a beautiful process of purification. A new beginning.",
						"japanese": "死は美しい浄化の過程。新たな始まりなのです。",
						"chinese": "死亡是美丽的净化过程。是新的开始。",
						"french": "La mort est un magnifique processus de purification. Un nouveau commencement.",
						"spanish": "La muerte es un hermoso proceso de purificación. Un nuevo comienzo.",
						"vietnamese": "Cái chết là một quá trình thanh lọc tuyệt đẹp. Là một khởi đầu mới.",
						"thai": "ความตายคือกระบวนการชำระล้างที่สวยงาม เป็นการเริ่มต้นใหม่",
						"hindi": "मृत्यु शुद्धिकरण की एक सुंदर प्रक्रिया है। एक नई शुरुआत।"
					},
					"emotion": "happy",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 그냥 섬뜩하다고.",
						"english": "What are you talking about? That's just creepy.",
						"japanese": "何を言ってるんだ。ただぞっとするだけだ。",
						"chinese": "你在说什么。这简直令人毛骨悚然。",
						"french": "De quoi parlez-vous ? C'est juste effrayant.",
						"spanish": "¿De qué estás hablando? Eso es simplemente espeluznante.",
						"vietnamese": "Bạn đang nói gì vậy? Điều đó thật đáng sợ.",
						"thai": "คุณกำลังพูดอะไรอยู่? มันน่าขนลุก",
						"hindi": "तुम क्या बात कर रहे हो? यह बस डरावना है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이해할 필요 없습니다. 오직 찬양하세요.",
						"english": "No need to understand. Only praise.",
						"japanese": "理解する必要はありません。ただ、崇拝しなさい。",
						"chinese": "无需理解。只需赞美。",
						"french": "Nul besoin de comprendre. Adorez simplement.",
						"spanish": "No hay necesidad de entender. Solo alabad.",
						"vietnamese": "Không cần hiểu. Chỉ cần ca ngợi.",
						"thai": "ไม่จำเป็นต้องเข้าใจ เพียงแค่สรรเสริญ",
						"hindi": "समझने की ज़रूरत नहीं है। बस स्तुति करो।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "화려한 가면 뒤로 섬뜩한 진실이 숨어 있었다.",
						"english": "Behind the splendid mask, a chilling truth lay hidden.",
						"japanese": "華やかな仮面の下に、恐ろしい真実が隠されていた。",
						"chinese": "华丽的面具后，隐藏着一个令人毛骨悚然的真相。",
						"french": "Derrière le masque splendide se cachait une vérité effrayante.",
						"spanish": "Detrás de la espléndida máscara, se escondía una verdad escalofriante.",
						"vietnamese": "Đằng sau chiếc mặt nạ lộng lẫy, một sự thật rợn người ẩn giấu.",
						"thai": "เบื้องหลังหน้ากากอันงดงาม ความจริงอันน่าขนลุกซ่อนอยู่",
						"hindi": "शानदार मुखौटे के पीछे, एक भयावह सच्चाई छिपी थी।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						1,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 깊이 들어오셨군요. 이제 되돌릴 수 없습니다.",
						"english": "You've come deeper. There's no turning back now.",
						"japanese": "さらに深く来ましたね。もう引き返せません。",
						"chinese": "你已深入。现在无法回头了。",
						"french": "Vous êtes venu plus profondément. Il n'y a plus de retour en arrière.",
						"spanish": "Has entrado más profundamente. Ahora no hay vuelta atrás.",
						"vietnamese": "Ngươi đã vào sâu hơn rồi. Giờ không thể quay lại được nữa.",
						"thai": "คุณเข้ามาลึกกว่าเดิมแล้ว ไม่มีทางย้อนกลับแล้ว",
						"hindi": "तुम और गहरे आ गए हो। अब पीछे नहीं हट सकते।"
					},
					"emotion": "base",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 진실을 찾아야 해.",
						"english": "We must find the truth.",
						"japanese": "私たちは真実を見つけなければならない。",
						"chinese": "我们必须找到真相。",
						"french": "Nous devons trouver la vérité.",
						"spanish": "Debemos encontrar la verdad.",
						"vietnamese": "Chúng ta phải tìm ra sự thật.",
						"thai": "เราต้องค้นหาความจริง",
						"hindi": "हमें सच खोजना होगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실은 여왕님의 아름다움. 그게 전부입니다.",
						"english": "The truth is the Queen's beauty. That is all.",
						"japanese": "真実は女王様の美しさ。それだけです。",
						"chinese": "真相是女王的美丽。仅此而已。",
						"french": "La vérité est la beauté de la Reine. C'est tout.",
						"spanish": "La verdad es la belleza de la Reina. Eso es todo.",
						"vietnamese": "Sự thật là vẻ đẹp của Nữ hoàng. Chỉ vậy thôi.",
						"thai": "ความจริงคือความงามของราชินี นั่นคือทั้งหมด",
						"hindi": "सच रानी की खूबसूरती है। बस इतना ही।"
					},
					"emotion": "happy",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "아니. 이 불편한 기분은 뭐야.",
						"english": "No. What is this unsettling feeling?",
						"japanese": "いや。この不穏な気分は何だ。",
						"chinese": "不。这不安的感觉是什么？",
						"french": "Non. Qu'est-ce que ce sentiment inconfortable ?",
						"spanish": "No. ¿Qué es esta sensación incómoda?",
						"vietnamese": "Không. Cảm giác khó chịu này là gì vậy?",
						"thai": "ไม่สิ ความรู้สึกไม่สบายใจนี้คืออะไร",
						"hindi": "नहीं। यह असहज अहसास क्या है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳으로, 발걸음은 멈추지 않았다.",
						"english": "Deeper still, their steps did not falter.",
						"japanese": "さらに奥深くへ、足取りは止まらなかった。",
						"chinese": "走向更深处，脚步不曾停歇。",
						"french": "Plus profondément encore, leurs pas ne s'arrêtèrent pas.",
						"spanish": "Más profundamente, los pasos no se detuvieron.",
						"vietnamese": "Càng đi sâu hơn, bước chân không ngừng lại.",
						"thai": "ลึกเข้าไปอีก ก้าวเดินไม่หยุดยั้ง",
						"hindi": "और गहरे में, कदम रुके नहीं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 존재가 모습을 드러냈다.",
						"english": "The deepest part of the forest. A colossal entity revealed itself.",
						"japanese": "森の最も深い場所。巨大な存在が姿を現した。",
						"chinese": "森林最深处。一个巨大的存在现身了。",
						"french": "Au plus profond de la forêt. Une entité colossale se révéla.",
						"spanish": "La parte más profunda del bosque. Una entidad colosal se reveló.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một thực thể khổng lồ đã lộ diện.",
						"thai": "ส่วนที่ลึกที่สุดของป่า สิ่งมีชีวิตขนาดมหึมาปรากฏตัว",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशालकाय सत्ता प्रकट हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영한다, 나의 새로운 정원수들아.",
						"english": "Welcome, my new gardeners.",
						"japanese": "ようこそ、私の新しい庭師たちよ。",
						"chinese": "欢迎，我的新园丁们。",
						"french": "Bienvenue, mes nouveaux jardiniers.",
						"spanish": "Bienvenidos, mis nuevos jardineros.",
						"vietnamese": "Chào mừng, những người làm vườn mới của ta.",
						"thai": "ยินดีต้อนรับ ผู้ดูแลสวนคนใหม่ของข้า",
						"hindi": "स्वागत है, मेरे नए माली।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 여왕?",
						"english": "You... the Queen?",
						"japanese": "あなたが…女王？",
						"chinese": "你是…女王？",
						"french": "Vous… la Reine ?",
						"spanish": "¿Tú... la Reina?",
						"vietnamese": "Ngươi… là Nữ hoàng?",
						"thai": "ท่าน… ราชินี?",
						"hindi": "तुम... रानी?"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래. 이 숲의 아름다움이자, 파괴자.",
						"english": "Yes. The forest's beauty, and its destroyer.",
						"japanese": "ええ。この森の美しさであり、破壊者でもある。",
						"chinese": "是的。既是这森林的美丽，也是它的破坏者。",
						"french": "Oui. La beauté de cette forêt, et sa destructrice.",
						"spanish": "Sí. La belleza de este bosque, y su destructor.",
						"vietnamese": "Phải. Vẻ đẹp của khu rừng này, và kẻ hủy diệt nó.",
						"thai": "ใช่ ความงามของป่านี้ และผู้ทำลายมัน",
						"hindi": "हाँ। इस जंगल की सुंदरता, और इसका विनाशक।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "감히 여왕님의 이름을 함부로 부르다니!",
						"english": "How dare you utter the Queen's name so carelessly!",
						"japanese": "よくも女王様の名を軽々しく呼んだな！",
						"chinese": "你竟敢如此轻率地直呼女王之名！",
						"french": "Comment osez-vous prononcer le nom de Sa Majesté si cavalièrement !",
						"spanish": "¡Cómo osas pronunciar el nombre de la Reina tan a la ligera!",
						"vietnamese": "Ngươi dám tùy tiện gọi tên Nữ hoàng!",
						"thai": "บังอาจเรียกชื่อราชินีอย่างไม่เกรงใจ!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई रानी का नाम इतनी लापरवाही से लेने की!"
					},
					"emotion": "angry",
					"speaker": "cedar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시더, 괜찮다. 이들은 아직 나의 진정한 아름다움을 모를 뿐.",
						"english": "Cedar, it's alright. They just don't know my true beauty yet.",
						"japanese": "シダー、大丈夫よ。彼らはまだ私の真の美しさを知らないだけ。",
						"chinese": "西达，没关系。他们只是还不懂我真正的美丽。",
						"french": "Cedar, ce n'est rien. Ils ne connaissent pas encore ma vraie beauté.",
						"spanish": "Cedar, está bien. Simplemente no conocen mi verdadera belleza aún.",
						"vietnamese": "Cedar, không sao đâu. Chúng chỉ là chưa biết vẻ đẹp thật sự của ta thôi.",
						"thai": "ซีดาร์ ไม่เป็นไรหรอก พวกเขายังไม่รู้ความงามที่แท้จริงของข้าเท่านั้นเอง",
						"hindi": "सेडर, ठीक है। वे बस अभी मेरी सच्ची सुंदरता नहीं जानते।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네 광기를 멈출 거야.",
						"english": "I'll stop your madness.",
						"japanese": "お前の狂気を止めてやる。",
						"chinese": "我会阻止你的疯狂。",
						"french": "Je vais arrêter ta folie.",
						"spanish": "Detendré tu locura.",
						"vietnamese": "Ta sẽ ngăn chặn sự điên rồ của ngươi.",
						"thai": "ข้าจะหยุดความบ้าคลั่งของเจ้า",
						"hindi": "मैं तुम्हारी इस पागलपन को रोकूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 광기? 이것이 진정한 평화다. 자, 너희도 숲의 일부가 되어라.",
						"english": "My madness? This is true peace. Come, you too shall become part of the forest.",
						"japanese": "私の狂気？これが真の平和だ。さあ、お前たちも森の一部となれ。",
						"chinese": "我的疯狂？这才是真正的和平。来吧，你们也成为森林的一部分吧。",
						"french": "Ma folie ? C'est la vraie paix. Venez, vous aussi ferez partie de la forêt.",
						"spanish": "¿Mi locura? Esto es la verdadera paz. Venid, vosotros también seréis parte del bosque.",
						"vietnamese": "Sự điên rồ của ta ư? Đây mới là hòa bình thật sự. Nào, các ngươi cũng hãy trở thành một phần của khu rừng đi.",
						"thai": "ความบ้าคลั่งของข้ารึ? นี่แหละคือสันติที่แท้จริง มาเถิด เจ้าเองก็จงเป็นส่วนหนึ่งของป่านี้ซะ",
						"hindi": "मेरा पागलपन? यह सच्ची शांति है। आओ, तुम भी जंगल का हिस्सा बनो।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "cedar",
					"direction": "down",
					"type": "direction"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 감히 나에게 대항해?",
						"english": "Insignificant beings. How dare you defy me?",
						"japanese": "取るに足らない奴らめ。よくもこの私に逆らったな？",
						"chinese": "卑微的家伙们。竟敢反抗我？",
						"french": "Créatures insignifiantes. Comment osez-vous me défier ?",
						"spanish": "Seres insignificantes. ¿Cómo osáis desafiarme?",
						"vietnamese": "Những kẻ hèn mọn. Dám chống đối ta ư?",
						"thai": "พวกไร้ค่า บังอาจต่อต้านข้ารึ?",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई मुझसे टकराने की?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "젠장… 다시 간다!",
						"english": "Damn it... I'm going again!",
						"japanese": "くそ…また行くぞ！",
						"chinese": "该死…再去一次！",
						"french": "Maudit... J'y retourne !",
						"spanish": "Maldita sea... ¡Voy de nuevo!",
						"vietnamese": "Chết tiệt... Ta đi tiếp đây!",
						"thai": "บ้าเอ๊ย... ไปอีกครั้ง!",
						"hindi": "धिक्कार है... मैं फिर जाता हूँ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원히 이 숲의 정원수가 되어라.",
						"english": "Become this forest's eternal ornament.",
						"japanese": "永遠にこの森の庭木となれ。",
						"chinese": "永远成为这片森林的观赏树吧。",
						"french": "Deviens l'ornement éternel de cette forêt.",
						"spanish": "Sé el adorno eterno de este bosque.",
						"vietnamese": "Hãy là cây cảnh vĩnh viễn của khu rừng này đi.",
						"thai": "จงเป็นไม้ประดับนิรันดร์ของป่านี้ซะ",
						"hindi": "सदैव इस वन का शोभा वृक्ष बनो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으… 아직 끝나지 않았다. 이 숲은… 나의 것이다.",
						"english": "Ugh... It's not over yet. This forest... is mine.",
						"japanese": "くう…まだ終わってない。この森は…私のものだ。",
						"chinese": "呃…还没结束。这片森林…是我的。",
						"french": "Ugh... Ce n'est pas encore fini. Cette forêt... est à moi.",
						"spanish": "Ugh... Aún no ha terminado. Este bosque... es mío.",
						"vietnamese": "Khụ… Vẫn chưa kết thúc đâu. Khu rừng này… là của ta.",
						"thai": "อึ๊ก... ยังไม่จบแค่นี้ ป่านี้... เป็นของข้า",
						"hindi": "उफ़… अभी खत्म नहीं हुआ है। यह जंगल… मेरा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…쓰러뜨렸지만, 뭔가 찝찝해.",
						"english": "...We defeated it, but something feels off.",
						"japanese": "…倒したけど、なんだか後味が悪い。",
						"chinese": "…虽然击败了，但总觉得有点不对劲。",
						"french": "...Nous l'avons vaincu, mais quelque chose cloche.",
						"spanish": "...Lo derrotamos, pero algo no me cuadra.",
						"vietnamese": "…Đã đánh bại rồi, nhưng sao cứ thấy khó chịu.",
						"thai": "...โค่นลงได้แล้ว แต่รู้สึกไม่ค่อยสบายใจเลย",
						"hindi": "…उसे हरा दिया, पर कुछ ठीक नहीं लग रहा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "잠시 숲의 환영이 걷혔다. 드러나는 것은 불안한 평화.",
						"english": "For a moment, the forest's illusion lifted. What emerged was an unsettling peace.",
						"japanese": "一時、森の幻影が晴れた。現れたのは不穏な平和だった。",
						"chinese": "森林的幻象暂时消散了。显露出来的是一种不安的平静。",
						"french": "Un instant, l'illusion de la forêt se dissipa. Ce qui apparut était une paix troublante.",
						"spanish": "Por un momento, la ilusión del bosque se disipó. Lo que reveló fue una paz inquietante.",
						"vietnamese": "Trong chốc lát, ảo ảnh của khu rừng tan biến. Hiện ra là một sự bình yên bất an.",
						"thai": "ชั่วขณะ ภาพลวงตาของป่าก็จางหายไป สิ่งที่ปรากฏคือสันติที่ชวนให้กระวนกระวาย",
						"hindi": "एक पल के लिए जंगल का भ्रम हट गया। जो सामने आया वह एक बेचैन कर देने वाली शांति थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 쇼는 이제 막 시작된 것 같았다.",
						"english": "It felt like the show had just begun.",
						"japanese": "このショーは、まだ始まったばかりのようだった。",
						"chinese": "这场表演似乎才刚刚开始。",
						"french": "On aurait dit que le spectacle venait de commencer.",
						"spanish": "Parecía que el espectáculo acababa de comenzar.",
						"vietnamese": "Có vẻ như màn trình diễn này chỉ mới bắt đầu.",
						"thai": "รู้สึกเหมือนว่าการแสดงนี้เพิ่งจะเริ่มต้นเท่านั้นเอง",
						"hindi": "ऐसा लगा जैसे यह खेल अभी शुरू ही हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
