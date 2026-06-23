export const scenario_modern_mnemos_15_01 = {
	"scenario_id": "modern_mnemos_15_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 기억한다. 네가 잊은 빚까지도.",
			"도시의 그림자 아래, 이름 모를 채권자가 모든 것을 집어삼킨다.",
			"첫 단서는 오래된 장부 조각.",
			"그리고 진실을 쫓는 자는, 과거를 감춘 정보상 앞에 섰다."
		],
		"english": [
			"The world remembers. Even the debts you've forgotten.",
			"Beneath the city's shadows, an unknown creditor devours all.",
			"The first clue: a fragment of an old ledger.",
			"And he who chases truth stood before an informant who hid the past."
		],
		"japanese": [
			"世界は覚えている。君が忘れた借金までも。",
			"都市の影の下、名もなき債権者がすべてを飲み込む。",
			"最初の手がかりは、古い帳簿の切れ端。",
			"そして真実を追う者は、過去を隠す情報屋の前に立った。"
		],
		"chinese": [
			"世界铭记着。甚至你遗忘的债务。",
			"在城市的阴影下，无名债主吞噬一切。",
			"第一个线索：一本旧账簿的残页。",
			"而追逐真相之人，站到了一个隐藏着过去的情报贩子面前。"
		],
		"french": [
			"Le monde se souvient. Même des dettes que tu as oubliées.",
			"Sous l'ombre de la ville, un créancier inconnu dévore tout.",
			"Le premier indice : un fragment d'un vieux registre.",
			"Et celui qui poursuit la vérité se tint devant un informateur qui cachait le passé."
		],
		"spanish": [
			"El mundo recuerda. Incluso las deudas que has olvidado.",
			"Bajo las sombras de la ciudad, un acreedor anónimo lo devora todo.",
			"La primera pista: un fragmento de un viejo libro de contabilidad.",
			"Y quien persigue la verdad se paró ante un informante que ocultaba el pasado."
		],
		"vietnamese": [
			"Thế giới vẫn nhớ. Cả những món nợ bạn đã quên.",
			"Dưới bóng tối thành phố, một chủ nợ vô danh nuốt chửng mọi thứ.",
			"Manh mối đầu tiên: một mảnh sổ cái cũ.",
			"Và người theo đuổi sự thật đã đứng trước một kẻ cung cấp thông tin che giấu quá khứ."
		],
		"thai": [
			"โลกจดจำได้ แม้กระทั่งหนี้ที่คุณลืมไปแล้ว",
			"ใต้เงาเมือง เจ้าหนี้ไร้นามกลืนกินทุกสิ่ง",
			"เบาะแสแรก: เศษสมุดบัญชีเก่า",
			"และผู้ที่ไล่ล่าความจริงก็ยืนอยู่ต่อหน้าผู้ให้ข้อมูลที่ปกปิดอดีต"
		],
		"hindi": [
			"दुनिया याद रखती है। तुम्हारे भूले हुए कर्ज़ भी।",
			"शहर की परछाईं तले, एक गुमनाम लेनदार सब कुछ निगल जाता है।",
			"पहला सुराग: एक पुराने बहीखाते का टुकड़ा।",
			"और सच का पीछा करने वाला, अतीत छुपाने वाले एक मुखबिर के सामने खड़ा हुआ।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시는 거대한 거미줄. 잊힌 빚들이 미로처럼 얽혀 있었다.",
						"english": "The city, a giant web. Forgotten debts entwined like a maze.",
						"japanese": "都市は巨大な蜘蛛の巣。忘れ去られた借金が迷路のように絡み合っていた。",
						"chinese": "城市，一张巨大的蜘蛛网。被遗忘的债务像迷宫一样交织。",
						"french": "La ville, une toile d'araignée géante. Des dettes oubliées s'entremêlaient comme un labyrinthe.",
						"spanish": "La ciudad, una telaraña gigante. Las deudas olvidadas se entrelazaban como un laberinto.",
						"vietnamese": "Thành phố, một mạng nhện khổng lồ. Những món nợ bị lãng quên đan xen như một mê cung.",
						"thai": "เมืองนี้คือใยแมงมุมยักษ์ หนี้ที่ถูกลืมพันกันเหมือนเขาวงกต",
						"hindi": "शहर, एक विशाल मकड़ी का जाला। भूले हुए कर्ज़ एक भूलभुलैया की तरह उलझे हुए थे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사라진 사람들. 그들의 '잊힌 빚'을 찾고 있어.",
						"english": "Missing people. I'm looking for their 'forgotten debts'.",
						"japanese": "消えた人々。彼らの「忘れられた借金」を探している。",
						"chinese": "失踪的人们。我在寻找他们“被遗忘的债务”。",
						"french": "Des personnes disparues. Je cherche leurs 'dettes oubliées'.",
						"spanish": "Gente desaparecida. Estoy buscando sus 'deudas olvidadas'.",
						"vietnamese": "Những người biến mất. Tôi đang tìm 'những món nợ bị lãng quên' của họ.",
						"thai": "ผู้คนที่หายไป ฉันกำลังตามหา 'หนี้ที่ถูกลืม' ของพวกเขา",
						"hindi": "लापता लोग। मैं उनके 'भूले हुए कर्ज़' ढूंढ रहा हूँ।"
					}
				},
				{
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐음… 재밌는 걸 쫓는군.",
						"english": "Hmm... chasing something interesting, are we?",
						"japanese": "ふむ… 面白いものを追っているな。",
						"chinese": "嗯… 追逐着有趣的东西啊。",
						"french": "Hmm... vous poursuivez quelque chose d'intéressant, n'est-ce pas ?",
						"spanish": "Mmm... persigues algo interesante, ¿eh?",
						"vietnamese": "Hmm... đang theo đuổi điều gì đó thú vị đấy nhỉ.",
						"thai": "หืม... กำลังไล่ล่าสิ่งที่น่าสนใจอยู่สินะ",
						"hindi": "हम्म... कुछ दिलचस्प पीछा कर रहे हो।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "여기, 오래된 장부 조각. 우연히 발견했지.",
						"english": "Here, a fragment of an old ledger. Found it by chance.",
						"japanese": "これ、古い帳簿の切れ端。偶然見つけたんだ。",
						"chinese": "这儿，一张旧账簿的残页。偶然发现的。",
						"french": "Voici un fragment d'un vieux registre. Je l'ai trouvé par hasard.",
						"spanish": "Aquí, un fragmento de un viejo libro de contabilidad. Lo encontré por casualidad.",
						"vietnamese": "Đây, một mảnh sổ cái cũ. Tình cờ tìm thấy.",
						"thai": "นี่ เศษสมุดบัญชีเก่า ฉันบังเอิญเจอ",
						"hindi": "यह रहा, एक पुराने बहीखाते का टुकड़ा। मुझे यह इत्तेफाक से मिला।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 단서야?",
						"english": "Is this the clue?",
						"japanese": "これが手がかりか？",
						"chinese": "这是线索吗？",
						"french": "C'est ça l'indice ?",
						"spanish": "¿Es esta la pista?",
						"vietnamese": "Đây là manh mối à?",
						"thai": "นี่คือเบาะแสเหรอ?",
						"hindi": "क्या यह सुराग है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "글쎄. 모든 건 때가 되면 드러나는 법.",
						"english": "Who knows. Everything reveals itself in due time.",
						"japanese": "さあな。すべては時が来れば明らかになるものさ。",
						"chinese": "谁知道呢。一切都会在适当的时候揭露。",
						"french": "Qui sait. Tout se révèle en son temps.",
						"spanish": "Quién sabe. Todo se revela a su debido tiempo.",
						"vietnamese": "Ai biết. Mọi thứ sẽ tự bộc lộ khi đến lúc.",
						"thai": "ใครจะรู้ ทุกสิ่งจะถูกเปิดเผยเมื่อถึงเวลา",
						"hindi": "कौन जाने। सब कुछ समय आने पर सामने आ ही जाता है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "그 장부, 이상한 점 못 느꼈나?",
						"english": "Didn't you notice anything strange about that ledger?",
						"japanese": "あの帳簿、何かおかしいと思わなかったか？",
						"chinese": "那本账簿，你没觉得奇怪吗？",
						"french": "N'as-tu rien remarqué d'étrange dans ce grand livre ?",
						"spanish": "¿No notaste nada extraño en ese libro de contabilidad?",
						"vietnamese": "Ngươi không thấy có gì lạ về cuốn sổ cái đó sao?",
						"thai": "เจ้าไม่สังเกตเห็นอะไรแปลกๆ เกี่ยวกับสมุดบัญชีเล่มนั้นหรือ?",
						"hindi": "क्या तुम्हें उस खाते में कुछ अजीब नहीं लगा?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "기록이… 파편화되어 있어.",
						"english": "The records are… fragmented.",
						"japanese": "記録が…断片化されている。",
						"chinese": "记录……是碎片化的。",
						"french": "Les enregistrements sont… fragmentés.",
						"spanish": "Los registros están… fragmentados.",
						"vietnamese": "Các ghi chép… bị phân mảnh.",
						"thai": "บันทึก… ถูกทำให้กระจัดกระจาย",
						"hindi": "रिकॉर्ड… खंडित हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "므네모스… 그 이름이 종종 기록을 뒤흔들지.",
						"english": "Mnemos… that name often shakes the records.",
						"japanese": "ムネモス…その名はしばしば記録を揺るがす。",
						"chinese": "姆涅莫斯……那个名字常常动摇记录。",
						"french": "Mnemos… ce nom fait souvent trembler les registres.",
						"spanish": "Mnemos… ese nombre a menudo sacude los registros.",
						"vietnamese": "Mnemos… cái tên đó thường làm chấn động các ghi chép.",
						"thai": "เนมอส… ชื่อนั้นมักจะสั่นคลอนบันทึก",
						"hindi": "मनेमोस… वह नाम अक्सर रिकॉर्ड को हिला देता है।"
					}
				},
				{
					"content": {
						"korean": "므네모스? 그는 누구지?",
						"english": "Mnemos? Who is he?",
						"japanese": "ムネモス？彼は誰だ？",
						"chinese": "姆涅莫斯？他是谁？",
						"french": "Mnemos ? Qui est-il ?",
						"spanish": "¿Mnemos? ¿Quién es él?",
						"vietnamese": "Mnemos? Hắn là ai?",
						"thai": "เนมอส? เขาคือใคร?",
						"hindi": "मनेमोस? वह कौन है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "정확히는 모르겠어. 아무도 그의 진짜 모습을 본 적 없지.",
						"english": "I don't know exactly. No one has ever seen his true form.",
						"japanese": "正確には分からない。誰も彼の本当の姿を見たことがない。",
						"chinese": "我不知道确切。没人见过他的真面目。",
						"french": "Je ne sais pas exactement. Personne n'a jamais vu sa vraie forme.",
						"spanish": "No lo sé con exactitud. Nadie ha visto su verdadera forma.",
						"vietnamese": "Ta không biết rõ. Chưa ai từng thấy hình dạng thật của hắn.",
						"thai": "ฉันไม่รู้แน่ชัด ไม่มีใครเคยเห็นร่างที่แท้จริงของเขา",
						"hindi": "मुझे ठीक से नहीं पता। किसी ने भी उसका असली रूप नहीं देखा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "하지만… 그의 존재는 확실해. 도시의 모든 빚을 관리하는 자.",
						"english": "But… his existence is certain. The one who manages all the city's debts.",
						"japanese": "だが…彼の存在は確かだ。街のすべての借金を管理する者。",
						"chinese": "但是……他的存在是确凿的。管理着城市所有债务的人。",
						"french": "Mais… son existence est certaine. Celui qui gère toutes les dettes de la ville.",
						"spanish": "Pero… su existencia es segura. El que gestiona todas las deudas de la ciudad.",
						"vietnamese": "Nhưng… sự tồn tại của hắn là chắc chắn. Kẻ quản lý mọi khoản nợ của thành phố.",
						"thai": "แต่… การมีอยู่ของเขานั้นแน่นอน ผู้จัดการหนี้สินทั้งหมดของเมือง",
						"hindi": "लेकिन… उसका अस्तित्व निश्चित है। शहर के सभी कर्जों का प्रबंधन करने वाला।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시엔 오래된 소문이 있지. 잊힌 갱단의 그림자.",
						"english": "There's an old rumor in the city. The shadow of a forgotten gang.",
						"japanese": "街には古い噂がある。忘れ去られたギャングの影。",
						"chinese": "城里有个古老的传闻。一个被遗忘帮派的阴影。",
						"french": "Il y a une vieille rumeur en ville. L'ombre d'un gang oublié.",
						"spanish": "Hay un viejo rumor en la ciudad. La sombra de una pandilla olvidada.",
						"vietnamese": "Có một tin đồn cũ trong thành phố. Cái bóng của một băng đảng bị lãng quên.",
						"thai": "มีข่าวลือเก่าแก่ในเมือง เงาของแก๊งที่ถูกลืมเลือน",
						"hindi": "शहर में एक पुरानी अफवाह है। एक भूले हुए गिरोह की छाया।"
					},
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "갱단? 빚이랑 무슨 상관이지?",
						"english": "A gang? What does that have to do with debt?",
						"japanese": "ギャング？借金と何の関係があるんだ？",
						"chinese": "帮派？和债务有什么关系？",
						"french": "Un gang ? Quel rapport avec la dette ?",
						"spanish": "¿Una pandilla? ¿Qué tiene que ver eso con la deuda?",
						"vietnamese": "Băng đảng? Liên quan gì đến nợ nần?",
						"thai": "แก๊ง? เกี่ยวอะไรกับหนี้?",
						"hindi": "एक गिरोह? उसका कर्ज से क्या संबंध है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "모든 건 연결되어 있지. 빚, 권력, 그리고 과거.",
						"english": "Everything is connected. Debt, power, and the past.",
						"japanese": "すべては繋がっている。借金、権力、そして過去。",
						"chinese": "一切都相互关联。债务、权力，以及过去。",
						"french": "Tout est lié. La dette, le pouvoir, et le passé.",
						"spanish": "Todo está conectado. Deuda, poder y el pasado.",
						"vietnamese": "Mọi thứ đều được kết nối. Nợ, quyền lực, và quá khứ.",
						"thai": "ทุกสิ่งเชื่อมโยงกัน หนี้สิน อำนาจ และอดีต",
						"hindi": "सब कुछ जुड़ा हुआ है। कर्ज, सत्ता और अतीत।"
					}
				},
				{
					"content": {
						"korean": "당신은 뭘 숨기는 거지?",
						"english": "What are you hiding?",
						"japanese": "何を隠しているんだ？",
						"chinese": "你在隐瞒什么？",
						"french": "Que caches-tu ?",
						"spanish": "¿Qué estás ocultando?",
						"vietnamese": "Ngươi đang che giấu điều gì?",
						"thai": "เจ้ากำลังซ่อนอะไร?",
						"hindi": "तुम क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 정보를 팔 뿐이야. 진실은 네가 찾아야 할 몫.",
						"english": "I merely sell information. The truth is yours to find.",
						"japanese": "私はただ情報を売るだけだ。真実は君自身で見つけるものだ。",
						"chinese": "我只是出售信息。真相需要你自己去寻找。",
						"french": "Je ne fais que vendre des informations. La vérité est à toi de la trouver.",
						"spanish": "Yo solo vendo información. La verdad es tuya para encontrarla.",
						"vietnamese": "Ta chỉ bán thông tin. Sự thật là phần ngươi phải tìm.",
						"thai": "ฉันแค่ขายข้อมูล ความจริงคือสิ่งที่คุณต้องค้นหาเอง",
						"hindi": "मैं बस जानकारी बेचता हूँ। सच तुम्हें खुद ही खोजना होगा।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 길은 위험해. 한번 발을 들이면, 되돌릴 수 없어.",
						"english": "This path is dangerous. Once you step on it, there's no turning back.",
						"japanese": "この道は危険だ。一度足を踏み入れたら、もう引き返せない。",
						"chinese": "这条路很危险。一旦踏上，便无法回头。",
						"french": "Ce chemin est dangereux. Une fois engagé, on ne peut plus faire demi-tour.",
						"spanish": "Este camino es peligroso. Una vez que lo pisas, no hay vuelta atrás.",
						"vietnamese": "Con đường này nguy hiểm. Một khi đã đặt chân vào, không thể quay lại.",
						"thai": "เส้นทางนี้อันตราย เมื่อก้าวไปแล้ว จะย้อนกลับไม่ได้",
						"hindi": "यह रास्ता खतरनाक है। एक बार कदम रखा, तो वापस नहीं आ सकते।"
					},
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 사라진 사람들을 위해서라도.",
						"english": "I can't stop. Not even for the sake of those who disappeared.",
						"japanese": "止まれない。消えた人たちのためにも。",
						"chinese": "我不能停下。哪怕是为了那些消失的人。",
						"french": "Je ne peux pas m'arrêter. Même pour ceux qui ont disparu.",
						"spanish": "No puedo parar. Ni siquiera por los que desaparecieron.",
						"vietnamese": "Không thể dừng lại. Dù là vì những người đã biến mất.",
						"thai": "ฉันหยุดไม่ได้ แม้แต่เพื่อคนที่หายไป",
						"hindi": "मैं रुक नहीं सकता। उन लोगों के लिए भी जो गायब हो गए।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "므네모스는 모든 것을 기억해. 심지어 잊힌 맹세까지도.",
						"english": "Mnemos remembers everything. Even forgotten vows.",
						"japanese": "ムネモスは全てを記憶している。忘れ去られた誓いさえも。",
						"chinese": "姆涅莫斯记得一切。甚至是被遗忘的誓言。",
						"french": "Mnemos se souvient de tout. Même des serments oubliés.",
						"spanish": "Mnemos lo recuerda todo. Incluso los votos olvidados.",
						"vietnamese": "Mnemos nhớ mọi thứ. Kể cả những lời thề đã bị lãng quên.",
						"thai": "므เนมอสจดจำทุกสิ่ง แม้กระทั่งคำสาบานที่ถูกลืม",
						"hindi": "म्नेमोस सब कुछ याद रखता है। यहाँ तक कि भूले हुए वादे भी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 므네모스의 정체인가?",
						"english": "Is that Mnemos's true nature?",
						"japanese": "それがムネモスの正体なのか？",
						"chinese": "那就是姆涅莫斯的真面目吗？",
						"french": "Est-ce la véritable nature de Mnemos ?",
						"spanish": "¿Es esa la verdadera naturaleza de Mnemos?",
						"vietnamese": "Đó là bản chất thật của Mnemos sao?",
						"thai": "นั่นคือตัวตนที่แท้จริงของ므เนมอสหรือ?",
						"hindi": "क्या यही म्neमोस का असली स्वरूप है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 단순한 채권자가 아니야. …그림자일 뿐.",
						"english": "He's no mere creditor. ...Just a shadow.",
						"japanese": "彼は単なる債権者じゃない。…ただの影だ。",
						"chinese": "他不是一个简单的债权人。……只是一个影子。",
						"french": "Ce n'est pas un simple créancier. ...Juste une ombre.",
						"spanish": "Él no es un simple acreedor. ...Solo una sombra.",
						"vietnamese": "Hắn không chỉ là một chủ nợ. ...Chỉ là một cái bóng.",
						"thai": "เขาไม่ใช่แค่เจ้าหนี้ ...เป็นแค่เงาเท่านั้น",
						"hindi": "वह महज़ एक लेनदार नहीं है। ...बस एक परछाई।"
					},
					"speaker": "bex",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 하지만 므네모스는… 모든 것을 기억한다.",
						"english": "Ugh... But Mnemos... remembers everything.",
						"japanese": "ぐっ…だがムネモスは…すべてを記憶している。",
						"chinese": "呃…但姆涅莫斯…记得一切。",
						"french": "Ugh… Mais Mnemos… se souvient de tout.",
						"spanish": "Ugh... Pero Mnemos... lo recuerda todo.",
						"vietnamese": "Ư… nhưng Mnemos… nhớ tất cả mọi thứ.",
						"thai": "อึก… แต่ Mnemos… จดจำทุกสิ่ง",
						"hindi": "उफ़… लेकिन नेमोस… सब कुछ याद रखता है।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝났어. 넌 그저 꼭두각시에 불과해.",
						"english": "It's over. You're nothing but a puppet.",
						"japanese": "終わりだ。お前はただの操り人形に過ぎない。",
						"chinese": "结束了。你只不过是个傀儡。",
						"french": "C'est fini. Tu n'es qu'une marionnette.",
						"spanish": "Se acabó. No eres más que una marioneta.",
						"vietnamese": "Kết thúc rồi. Ngươi chỉ là một con rối.",
						"thai": "จบแล้ว. เจ้าเป็นแค่หุ่นเชิดเท่านั้น",
						"hindi": "यह खत्म हो गया। तुम बस एक कठपुतली हो।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "잘했어. 하지만 이건 시작일 뿐이야.",
						"english": "Well done. But this is just the beginning.",
						"japanese": "よくやった。だが、これは始まりに過ぎない。",
						"chinese": "做得好。但这只是个开始。",
						"french": "Bien joué. Mais ce n'est que le début.",
						"spanish": "Bien hecho. Pero esto es solo el principio.",
						"vietnamese": "Làm tốt lắm. Nhưng đây chỉ là khởi đầu thôi.",
						"thai": "ทำได้ดี. แต่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "शाबाश। लेकिन यह तो बस शुरुआत है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "므네모스는 생각보다 가까이에 있을지도 몰라.",
						"english": "Mnemos might be closer than you think.",
						"japanese": "ムネモスは、お前が思うより近くにいるかもしれない。",
						"chinese": "姆涅莫斯可能比你想象的更近。",
						"french": "Mnemos pourrait être plus proche que tu ne le penses.",
						"spanish": "Mnemos podría estar más cerca de lo que crees.",
						"vietnamese": "Mnemos có thể ở gần hơn ngươi nghĩ.",
						"thai": "Mnemos อาจจะอยู่ใกล้กว่าที่คิด",
						"hindi": "नेमोस तुम्हारी सोच से ज़्यादा करीब हो सकता है।"
					},
					"speaker": "bex",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…계속 추적할 거야.",
						"english": "...I will keep tracking.",
						"japanese": "…追跡を続ける。",
						"chinese": "…我会继续追踪的。",
						"french": "…Je continuerai de traquer.",
						"spanish": "...Seguiré rastreando.",
						"vietnamese": "…Tôi sẽ tiếp tục truy đuổi.",
						"thai": "…จะตามล่าต่อไป",
						"hindi": "…मैं पीछा करता रहूँगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 데이터는 불안정하게 파편화되어 갔다. 다음 단서는 기록의 미로 속에.",
						"english": "The city's data became unstable and fragmented. The next clue lies within the labyrinth of records.",
						"japanese": "都市のデータは不安定に断片化していった。次の手がかりは記録の迷宮の中に。",
						"chinese": "城市的数据不稳定地碎片化了。下一个线索在记录的迷宫中。",
						"french": "Les données de la ville sont devenues instables et fragmentées. Le prochain indice se trouve dans le labyrinthe des archives.",
						"spanish": "Los datos de la ciudad se fragmentaron inestablemente. La próxima pista está en el laberinto de los registros.",
						"vietnamese": "Dữ liệu của thành phố trở nên không ổn định và phân mảnh. manh mối tiếp theo nằm trong mê cung hồ sơ.",
						"thai": "ข้อมูลของเมืองแตกกระจายไม่เสถียร. เบาะแสต่อไปอยู่ในเขาวงกตของบันทึก.",
						"hindi": "शहर का डेटा अस्थिर और खंडित हो गया। अगला सुराग रिकॉर्ड के भूलभुलैया में है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "네 빚은… 너무 커. 영원히 갚지 못할 거야.",
						"english": "Your debt... is too great. You'll never repay it.",
						"japanese": "お前の借りは…あまりにも大きい。永遠に償えないだろう。",
						"chinese": "你的债…太大了。你永远也还不清。",
						"french": "Ta dette… est trop grande. Tu ne pourras jamais la rembourser.",
						"spanish": "Tu deuda… es demasiado grande. Nunca podrás pagarla.",
						"vietnamese": "Món nợ của ngươi… quá lớn. Ngươi sẽ không bao giờ trả hết được.",
						"thai": "หนี้ของเจ้า… มากเกินไป. จะไม่มีวันชดใช้ได้",
						"hindi": "तुम्हारा कर्ज… बहुत बड़ा है। तुम इसे कभी चुका नहीं पाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 포기하지 않아! 진짜 므네모스를 찾을 거야!",
						"english": "I won't give up yet! I'll find the real Mnemos!",
						"japanese": "まだ諦めない！本物のムネモスを見つけ出す！",
						"chinese": "我还没放弃！我会找到真正的姆涅莫斯！",
						"french": "Je n'abandonne pas encore ! Je trouverai le vrai Mnemos !",
						"spanish": "¡Aún no me rindo! ¡Encontraré al verdadero Mnemos!",
						"vietnamese": "Tôi chưa bỏ cuộc! Tôi sẽ tìm ra Mnemos thật!",
						"thai": "ยังไม่ยอมแพ้! จะต้องหา Mnemos ตัวจริงให้เจอ!",
						"hindi": "मैं अभी हार नहीं मानूँगा! मैं असली नेमोस को ढूँढूँगा!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "깊은 지하 네트워크의 끝. 거대한 그림자가 기다리고 있었다.",
						"english": "At the end of the deep underground network. A colossal shadow awaited.",
						"japanese": "深い地下ネットワークの果て。巨大な影が待ち構えていた。",
						"chinese": "在深层地下网络的尽头。一个巨大的影子正在等待。",
						"french": "Au bout du réseau souterrain profond. Une ombre colossale attendait.",
						"spanish": "Al final de la profunda red subterránea. Una sombra colosal esperaba.",
						"vietnamese": "Ở cuối mạng lưới ngầm sâu thẳm. Một cái bóng khổng lồ đang chờ đợi.",
						"thai": "สุดปลายเครือข่ายใต้ดินลึก เงาขนาดมหึมารออยู่",
						"hindi": "गहरे भूमिगत नेटवर्क के अंत में। एक विशाल परछाई इंतज़ार कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 여기까지 올 줄이야. 꽤 끈질기군.",
						"english": "To think you'd make it this far. Quite persistent, aren't you?",
						"japanese": "まさかここまで来るとはな。随分しぶとい奴だ。",
						"chinese": "没想到你能走到这里。真是够执着的。",
						"french": "Je n'aurais jamais cru que tu irais si loin. Tu es assez tenace.",
						"spanish": "Pensar que llegarías tan lejos. Eres bastante persistente.",
						"vietnamese": "Không ngờ ngươi lại đến được đây. Khá kiên trì đấy.",
						"thai": "ไม่คิดว่าเจ้าจะมาได้ถึงขนาดนี้ พากเพียรไม่เบาเลย",
						"hindi": "सोचा न था कि तुम यहाँ तक आ पाओगे। काफी दृढ़ हो तुम।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "므네모스의 부하인가?",
						"english": "Are you one of Mnemos's subordinates?",
						"japanese": "ムネモスの手下か？",
						"chinese": "你是姆涅莫斯的部下吗？",
						"french": "Es-tu un subordonné de Mnemos ?",
						"spanish": "¿Eres un subordinado de Mnemos?",
						"vietnamese": "Ngươi là thuộc hạ của Mnemos sao?",
						"thai": "เจ้าเป็นลูกน้องของ므เนมอสหรือ?",
						"hindi": "क्या तुम म्नेमोस के अधीनस्थ हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 도시의 균형을 지킬 뿐. 잊힌 빚을 청산하는 자.",
						"english": "I merely maintain the city's balance. One who settles forgotten debts.",
						"japanese": "私はただ都市の均衡を守るだけだ。忘れ去られた借りを清算する者。",
						"chinese": "我只是维护城市的平衡。一个清算被遗忘债务的人。",
						"french": "Je ne fais que maintenir l'équilibre de la ville. Celui qui solde les dettes oubliées.",
						"spanish": "Yo solo mantengo el equilibrio de la ciudad. Quien salda las deudas olvidadas.",
						"vietnamese": "Ta chỉ duy trì sự cân bằng của thành phố. Kẻ thanh toán những món nợ đã lãng quên.",
						"thai": "ฉันแค่รักษาสมดุลของเมือง ผู้ชำระหนี้ที่ถูกลืม",
						"hindi": "मैं बस शहर का संतुलन बनाए रखता हूँ। एक जो भूले हुए कर्ज चुकाता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 비겁한 채권자일 뿐이야!",
						"english": "Nonsense! You're just a cowardly loan shark!",
						"japanese": "戯言を！卑怯な債権者に過ぎない！",
						"chinese": "胡说八道！你只是个卑鄙的债主！",
						"french": "N'importe quoi ! Tu n'es qu'un lâche créancier !",
						"spanish": "¡Tonterías! ¡Solo eres un acreedor cobarde!",
						"vietnamese": "Vô lý! Ngươi chỉ là một chủ nợ hèn nhát!",
						"thai": "เหลวไหล! แกเป็นแค่เจ้าหนี้ขี้ขลาด!",
						"hindi": "बकवास बंद करो! तुम तो बस एक कायर कर्जदाता हो!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "네가 갚아야 할 빚은, 바로 너의… 존재다.",
						"english": "The debt you must repay is... your very existence.",
						"japanese": "お前が償うべき借りは、お前の…存在そのものだ。",
						"chinese": "你必须偿还的债，就是你的……存在本身。",
						"french": "La dette que tu dois rembourser, c'est ton… existence même.",
						"spanish": "La deuda que debes pagar es... tu propia existencia.",
						"vietnamese": "Món nợ ngươi phải trả, chính là… sự tồn tại của ngươi.",
						"thai": "หนี้ที่เจ้าต้องชดใช้คือ… การมีอยู่ของเจ้าเอง",
						"hindi": "जिस कर्ज को तुम्हें चुकाना है, वह है… तुम्हारा अस्तित्व।"
					}
				}
			]
		}
	]
} as const;
