export const scenario_desert_mirage_chef_04 = {
	"scenario_id": "desert_mirage_chef_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"Sahar": {
			"monster_id": "mon_3b008714-9abd-4927-88bb-6d8a32ec8805",
			"name": {
				"korean": "사하르",
				"english": "Sahar",
				"japanese": "サハル",
				"chinese": "萨哈尔",
				"french": "Sahar",
				"spanish": "Sahar",
				"vietnamese": "Sahar",
				"thai": "ซาฮาร์",
				"hindi": "साหर"
			},
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/94c19f1a-b435-427a-01bf-5e87c55a0200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1d10bedd-8042-4ef7-47c6-c2d6ac0e5100/public"
		},
		"Donkey": {
			"name": {
				"korean": "당키",
				"english": "Donkey",
				"japanese": "ドンキー",
				"chinese": "唐基",
				"french": "Donkey",
				"spanish": "Donkey",
				"vietnamese": "Donkey",
				"thai": "ดอนกี้",
				"hindi": "डंकी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/1b034791-7d67-4730-0730-3e1ea3e48c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7e4c81be-8c78-41fe-7692-6277d4bb0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_024"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "황금빛 연회장은 여전히 눈부셨다. 달콤한 향기가 가득했다.",
						"english": "The golden banquet hall was still dazzling. A sweet scent filled the air.",
						"japanese": "黄金の宴会場は相変わらず眩しかった。甘い香りが満ちていた。",
						"chinese": "金色的宴会厅依然璀璨夺目。空气中弥漫着甜美的香气。",
						"french": "La salle de banquet dorée était toujours éblouissante. Un doux parfum emplissait l'air.",
						"spanish": "El salón de banquetes dorado seguía deslumbrante. Un dulce aroma llenaba el aire.",
						"vietnamese": "Sảnh tiệc vàng son vẫn rực rỡ. Hương thơm ngọt ngào tràn ngập.",
						"thai": "ห้องจัดเลี้ยงสีทองยังคงระยิบระยับ กลิ่นหอมหวานอบอวล",
						"hindi": "सुनहरी भोजशाला अब भी चकाचौंध कर रही थी। हवा में मीठी खुशबू भरी थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직도 배가 고픈 것 같아.",
						"english": "I still feel hungry.",
						"japanese": "まだお腹が空いているみたい。",
						"chinese": "我好像还是饿。",
						"french": "J'ai encore faim.",
						"spanish": "Todavía tengo hambre.",
						"vietnamese": "Hình như tôi vẫn còn đói.",
						"thai": "ฉันยังรู้สึกหิวอยู่เลย",
						"hindi": "मुझे अभी भी भूख लगी है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad",
					"content": {
						"korean": "이상해. 분명 배부른데.",
						"english": "Strange. I'm clearly full.",
						"japanese": "おかしいな。絶対にお腹はいっぱいなのに。",
						"chinese": "真奇怪。明明已经饱了。",
						"french": "Bizarre. Je suis clairement rassasié.",
						"spanish": "Extraño. Estoy claramente lleno.",
						"vietnamese": "Lạ thật. Rõ ràng là tôi đã no rồi.",
						"thai": "แปลกจัง ฉันอิ่มแล้วแท้ๆ",
						"hindi": "अजीब है। मैं स्पष्ट रूप से भरा हुआ हूँ।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "Donkey"
				},
				{
					"speaker": "Donkey",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이 접시도 비었네요! 더 주세요, 더!",
						"english": "This plate is empty too! More, please, more!",
						"japanese": "このお皿も空っぽですね！もっと、もっとください！",
						"chinese": "这个盘子也空了！再来点，再来点！",
						"french": "Cette assiette est vide aussi ! Encore, s'il vous plaît, encore !",
						"spanish": "¡Este plato también está vacío! ¡Más, por favor, más!",
						"vietnamese": "Đĩa này cũng hết rồi! Cho thêm nữa, nữa đi!",
						"thai": "จานนี้ก็ว่างเปล่าแล้ว! ขออีก, ขออีก!",
						"hindi": "यह प्लेट भी खाली है! और दो, और!"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "Donkey",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "다른 손님들은 계속 저러고 있네. 정말 괜찮은 걸까?",
						"english": "The other guests keep doing that. Are they really okay?",
						"japanese": "他の客はずっとああしてる。本当に大丈夫なのかな？",
						"chinese": "其他客人一直那样。他们真的没事吗？",
						"french": "Les autres invités continuent comme ça. Est-ce qu'ils vont vraiment bien ?",
						"spanish": "Los otros invitados siguen así. ¿Están realmente bien?",
						"vietnamese": "Các vị khách khác cứ tiếp tục như vậy. Họ có thật sự ổn không?",
						"thai": "แขกคนอื่นๆ ยังคงเป็นแบบนั้น พวกเขาโอเคจริงๆ หรือเปล่า?",
						"hindi": "दूसरे मेहमान ऐसे ही कर रहे हैं। क्या वे सचमुच ठीक हैं?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "만찬을 즐기는 중이랍니다. 걱정 마세요.",
						"english": "They're enjoying the feast. Don't worry.",
						"japanese": "晩餐を楽しんでいらっしゃいますよ。ご心配なく。",
						"chinese": "他们正在享用晚餐。别担心。",
						"french": "Ils profitent du festin. Ne vous inquiétez pas.",
						"spanish": "Están disfrutando del banquete. No te preocupes.",
						"vietnamese": "Họ đang thưởng thức bữa tiệc. Đừng lo lắng.",
						"thai": "พวกเขากำลังเพลิดเพลินกับงานเลี้ยง ไม่ต้องห่วง",
						"hindi": "वे दावत का आनंद ले रहे हैं। चिंता मत करो।"
					},
					"emotion": "base",
					"speaker": "Sahar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Donkey",
					"content": {
						"korean": "와! 저건 뭔가요? 정말 먹음직스러워요!",
						"english": "Wow! What is that? It looks so delicious!",
						"japanese": "わあ！あれは何ですか？とても美味しそうです！",
						"chinese": "哇！那是什么？看起来真好吃！",
						"french": "Waouh ! Qu'est-ce que c'est que ça ? Ça a l'air délicieux !",
						"spanish": "¡Vaya! ¿Qué es eso? ¡Se ve delicioso!",
						"vietnamese": "Oa! Cái gì thế kia? Trông ngon quá đi!",
						"thai": "ว้าว! นั่นอะไรน่ะ? ดูน่าอร่อยจัง!",
						"hindi": "वाह! वह क्या है? बहुत स्वादिष्ट लग रहा है!"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "Donkey",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "화려한 샹들리에 아래, 당키가 접시를 들고 이동했다.",
						"english": "Under the splendid chandelier, Dunky moved, carrying a plate.",
						"japanese": "華やかなシャンデリアの下、ダンキーは皿を持って移動した。",
						"chinese": "在华丽的吊灯下，邓奇端着盘子移动了。",
						"french": "Sous le magnifique lustre, Dunky se déplaçait, un plat à la main.",
						"spanish": "Bajo el espléndido candelabro, Dunky se movía, llevando un plato.",
						"vietnamese": "Dưới chiếc đèn chùm lộng lẫy, Dunky bưng đĩa đi lại.",
						"thai": "ใต้โคมระย้าอันหรูหรา ดันกี้ถือจานและเคลื่อนที่ไป",
						"hindi": "शानदार झूमर के नीचे, डंकी एक थाली लिए चल रहा था।"
					}
				},
				{
					"type": "speech",
					"speaker": "Donkey",
					"emotion": "sad",
					"content": {
						"korean": "어잇차! 조심해야지… 으악!",
						"english": "Whoops! Gotta be careful... Agh!",
						"japanese": "よいしょっと！気をつけないと… うわっ！",
						"chinese": "哎呀！得小心… 呃啊！",
						"french": "Oups ! Faut faire attention… Aïe !",
						"spanish": "¡Uy! Tengo que tener cuidado... ¡Aargh!",
						"vietnamese": "Ấy chà! Phải cẩn thận chứ… Á!",
						"thai": "อ๊ะ! ต้องระวังหน่อยสิ… อ๊าก!",
						"hindi": "ओहो! मुझे सावधान रहना चाहिए... आह!"
					}
				},
				{
					"action": "shake",
					"type": "direction",
					"speaker": "narrator",
					"duration_ms": 300
				},
				{
					"content": {
						"korean": "접시가 산산조각 났다. 황금빛 파편 대신, 모래가 쏟아져 내렸다.",
						"english": "The plate shattered into pieces. Instead of golden shards, sand poured out.",
						"japanese": "皿は粉々に砕け散った。金色の破片の代わりに、砂が流れ落ちた。",
						"chinese": "盘子碎成了碎片。没有金色的碎片，取而代之的是沙子倾泻而出。",
						"french": "L'assiette se brisa en mille morceaux. Au lieu d'éclats dorés, du sable s'en échappa.",
						"spanish": "El plato se hizo pedazos. En lugar de fragmentos dorados, se derramó arena.",
						"vietnamese": "Chiếc đĩa vỡ tan tành. Thay vì mảnh vỡ vàng óng, cát đổ ra.",
						"thai": "จานแตกเป็นเสี่ยงๆ แทนที่จะเป็นเศษสีทอง กลับเป็นทรายที่ไหลทะลักออกมา",
						"hindi": "थाली टूटकर बिखर गई। सुनहरे टुकड़ों की जगह, रेत बहने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모… 모래?",
						"english": "Sa... Sand?",
						"japanese": "す… 砂？",
						"chinese": "沙… 沙子？",
						"french": "Du… du sable ?",
						"spanish": "¿Are... arena?",
						"vietnamese": "Cát… cát ư?",
						"thai": "ทราย… ทรายเหรอ?",
						"hindi": "रे... रेत?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "이것도… 설마.",
						"english": "This too... Don't tell me.",
						"japanese": "これも… まさか。",
						"chinese": "这也… 不会吧。",
						"french": "Ça aussi… Ne me dis pas.",
						"spanish": "Esto también… No me digas.",
						"vietnamese": "Cái này cũng… Chẳng lẽ nào.",
						"thai": "นี่ก็… ไม่จริงน่า.",
						"hindi": "यह भी... कहीं ऐसा तो नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "character_3",
					"action": "focus",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "흐읍… 으스러져. 전부 모래야!",
						"english": "Hmph… It crumbles. It's all sand!",
						"japanese": "はぁ… 崩れる。全部砂だ！",
						"chinese": "呼… 碎了。全是沙子！",
						"french": "Huff… Ça s'effrite. Tout est du sable !",
						"spanish": "Uff… Se desmorona. ¡Todo es arena!",
						"vietnamese": "Hừm… Nó vỡ vụn. Toàn là cát!",
						"thai": "หึ่ม… มันร่วนหมดเลย. ทั้งหมดเป็นทราย!",
						"hindi": "उफ़… यह टूट रहा है। सब रेत है!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "Sahar",
					"type": "direction",
					"action": "focus"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…안 되는 것을 보고 말았군요.",
						"english": "...I've seen something I shouldn't have.",
						"japanese": "…見てはいけないものを見てしまったようですね。",
						"chinese": "…看来我看到了不该看的东西。",
						"french": "…J'ai vu ce que je n'aurais pas dû voir.",
						"spanish": "…He visto algo que no debería haber visto.",
						"vietnamese": "…Hình như tôi đã nhìn thấy thứ không nên thấy rồi.",
						"thai": "…ดูเหมือนผมได้เห็นสิ่งที่ไม่ควรเห็นเข้าแล้วสิ.",
						"hindi": "...मैंने कुछ ऐसा देख लिया है जो मुझे नहीं देखना चाहिए था।"
					},
					"type": "speech",
					"speaker": "Sahar"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "Donkey",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "이게 다 가짜였다니… 너무해!",
						"english": "So all of this was fake... How awful!",
						"japanese": "これが全部偽物だったなんて… ひどい！",
						"chinese": "原来这一切都是假的… 太过分了！",
						"french": "Tout ça était faux… C'est inadmissible !",
						"spanish": "¡Así que todo esto era falso… Qué horrible!",
						"vietnamese": "Vậy mà tất cả đều là giả… Quá đáng thật!",
						"thai": "ทั้งหมดนี่เป็นของปลอมงั้นเหรอ… แย่จริง!",
						"hindi": "यह सब नकली था… यह तो बहुत बुरा है!"
					},
					"emotion": "sad",
					"speaker": "Donkey",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사하르, 이게 대체 무슨 짓이야?",
						"english": "Sahar, what on earth have you done?",
						"japanese": "サハル、一体何を企んでるの？",
						"chinese": "萨哈尔，你这到底在搞什么鬼？",
						"french": "Sahar, qu'est-ce que tu as fait ?",
						"spanish": "Sahar, ¿qué demonios has hecho?",
						"vietnamese": "Sahar, rốt cuộc là cô đang làm cái quái gì vậy?",
						"thai": "ซาฮาร์, นี่มันเรื่องอะไรกันแน่?",
						"hindi": "सहर, यह सब क्या कर रही हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "Sahar",
					"spot": [
						7,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "Sahar",
					"emotion": "base",
					"content": {
						"korean": "환상은 현실을 잊게 해주는 아름다운 장막. 왜 그걸 깨려 하는가?",
						"english": "Illusions are beautiful veils that make you forget reality. Why try to break them?",
						"japanese": "幻想は現実を忘れさせる美しい帳。なぜそれを破ろうとするのですか？",
						"chinese": "幻象是让人忘记现实的美丽帷幕。你为何要打破它？",
						"french": "Les illusions sont de beaux voiles qui font oublier la réalité. Pourquoi chercher à les briser ?",
						"spanish": "Las ilusiones son hermosos velos que te hacen olvidar la realidad. ¿Por qué intentas romperlas?",
						"vietnamese": "Ảo ảnh là bức màn đẹp đẽ khiến bạn quên đi thực tại. Sao lại muốn phá vỡ nó?",
						"thai": "ภาพลวงตาคือม่านที่สวยงามที่ทำให้คุณลืมความจริง ทำไมถึงพยายามจะทำลายมัน?",
						"hindi": "भ्रम सुंदर परदे हैं जो आपको वास्तविकता भुला देते हैं। आप उन्हें क्यों तोड़ना चाहते हैं?"
					}
				},
				{
					"content": {
						"korean": "환상으로 사람들을 속이고 가두었잖아!",
						"english": "You deceived and trapped people with illusions!",
						"japanese": "幻想で人々を騙し、閉じ込めたじゃないか！",
						"chinese": "你用幻象欺骗并困住了人们！",
						"french": "Vous avez trompé et piégé des gens avec des illusions !",
						"spanish": "¡Engañaste y atrapaste a la gente con ilusiones!",
						"vietnamese": "Ngươi đã lừa dối và giam cầm mọi người bằng ảo ảnh!",
						"thai": "คุณหลอกลวงและกักขังผู้คนด้วยภาพลวงตา!",
						"hindi": "आपने भ्रम से लोगों को धोखा दिया और फँसाया!"
					},
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "Sahar",
					"content": {
						"korean": "원하는 것을 준 것뿐. 영원한 안식.",
						"english": "I merely gave them what they wanted. Eternal rest.",
						"japanese": "望むものを与えただけ。永遠の安息を。",
						"chinese": "我只是给了他们想要的。永恒的安息。",
						"french": "Je ne leur ai donné que ce qu'ils voulaient. Le repos éternel.",
						"spanish": "Solo les di lo que querían. El descanso eterno.",
						"vietnamese": "Ta chỉ cho họ thứ họ muốn. Sự an nghỉ vĩnh hằng.",
						"thai": "ฉันแค่ให้สิ่งที่พวกเขาต้องการ การพักผ่อนชั่วนิรันดร์",
						"hindi": "मैंने उन्हें वही दिया जो वे चाहते थे। शाश्वत शांति।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼! 이건 그냥… 가짜야!",
						"english": "Nonsense! This is just... fake!",
						"japanese": "馬鹿な！これはただの…偽物だ！",
						"chinese": "胡说！这只是……假的！",
						"french": "C'est absurde ! Ce n'est que... faux !",
						"spanish": "¡Disparates! ¡Esto es solo... falso!",
						"vietnamese": "Vô lý! Đây chỉ là... giả thôi!",
						"thai": "ไร้สาระ! นี่มันแค่... ของปลอม!",
						"hindi": "बकवास! यह बस... नकली है!"
					}
				},
				{
					"type": "speech",
					"speaker": "Sahar",
					"content": {
						"korean": "그래, 가짜지. 하지만 때로는 가짜가 더 편안하답니다.",
						"english": "Yes, it's fake. But sometimes, fakes are more comforting.",
						"japanese": "ええ、偽物です。しかし、時には偽物の方が心地よいものですよ。",
						"chinese": "是的，是假的。但有时，假的更令人舒适。",
						"french": "Oui, c'est faux. Mais parfois, le faux est plus réconfortant.",
						"spanish": "Sí, es falso. Pero a veces, lo falso es más reconfortante.",
						"vietnamese": "Đúng, là giả đấy. Nhưng đôi khi, cái giả lại thoải mái hơn.",
						"thai": "ใช่ มันปลอม แต่บางครั้งของปลอมก็สบายใจกว่านะ",
						"hindi": "हाँ, यह नकली है। लेकिन कभी-कभी नकली चीजें ज़्यादा आरामदायक होती हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실을 마주할 용기가 없다면, 영원히 이곳에 머무세요.",
						"english": "If you lack the courage to face the truth, remain here forever.",
						"japanese": "真実と向き合う勇気がないのなら、永遠にここに留まりなさい。",
						"chinese": "如果你没有勇气面对真相，就永远留在这里吧。",
						"french": "Si vous n'avez pas le courage d'affronter la vérité, restez ici pour toujours.",
						"spanish": "Si no tienes el valor de enfrentar la verdad, quédate aquí para siempre.",
						"vietnamese": "Nếu không có dũng khí đối mặt với sự thật, hãy ở lại đây mãi mãi.",
						"thai": "ถ้าไม่มีความกล้าที่จะเผชิญหน้ากับความจริง ก็จงอยู่ที่นี่ตลอดไป",
						"hindi": "अगर आप में सच्चाई का सामना करने की हिम्मत नहीं है, तो हमेशा के लिए यहीं रहो।"
					},
					"type": "speech",
					"speaker": "Sahar"
				},
				{
					"direction": "up",
					"speaker": "Sahar",
					"duration_ms": 500,
					"action": "exit",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "도망치지 마!",
						"english": "Don't run away!",
						"japanese": "逃げるな！",
						"chinese": "别逃跑！",
						"french": "Ne fuyez pas !",
						"spanish": "¡No huyas!",
						"vietnamese": "Đừng chạy trốn!",
						"thai": "อย่าหนีไป!",
						"hindi": "भागो मत!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "Donkey",
					"content": {
						"korean": "저 사람이… 나쁜 사람이었구나.",
						"english": "That person... was a bad person after all.",
						"japanese": "あの人…悪い人だったんだな。",
						"chinese": "那个人……原来是坏人啊。",
						"french": "Cette personne… était une mauvaise personne après tout.",
						"spanish": "Esa persona... era una mala persona después de todo.",
						"vietnamese": "Người đó... hóa ra là một kẻ xấu.",
						"thai": "คนนั้น... เป็นคนไม่ดีนี่นา",
						"hindi": "वह व्यक्ति... आखिरकार एक बुरा इंसान था।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막의 환상이 뒤틀린다. 거대한 그림자가 연회장 중앙에 섰다.",
						"english": "The desert's illusion twists. A colossal shadow stands in the center of the banquet hall.",
						"japanese": "砂漠の幻想が歪む。巨大な影が宴会場の中央に立った。",
						"chinese": "沙漠的幻象扭曲了。一道巨大的阴影矗立在宴会厅中央。",
						"french": "L'illusion du désert se tord. Une ombre colossale se tient au centre de la salle de banquet.",
						"spanish": "La ilusión del desierto se retuerce. Una sombra colosal se alza en el centro del salón de banquetes.",
						"vietnamese": "Ảo ảnh sa mạc méo mó. Một cái bóng khổng lồ đứng giữa sảnh tiệc.",
						"thai": "ภาพลวงตาของทะเลทรายบิดเบี้ยว เงาขนาดยักษ์ยืนอยู่กลางห้องจัดเลี้ยง",
						"hindi": "रेगिस्तान का भ्रम मुड़ जाता है। एक विशाल छाया भोज हॉल के केंद्र में खड़ी है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 환상을 깨뜨린 자들이여… 대가를 치러라.",
						"english": "Those who shattered my illusion... pay the price.",
						"japanese": "私の幻想を打ち破った者たちよ…代償を払え。",
						"chinese": "打破我幻象的人们啊……付出代价吧。",
						"french": "Ceux qui ont brisé mon illusion… payez le prix.",
						"spanish": "Aquellos que destrozaron mi ilusión... paguen el precio.",
						"vietnamese": "Những kẻ đã phá vỡ ảo ảnh của ta... hãy trả giá đi.",
						"thai": "พวกเจ้าที่ทำลายภาพลวงตาของข้า... จงชดใช้!",
						"hindi": "जिन्होंने मेरे भ्रम को तोड़ा है... कीमत चुकाओ।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사하르의 조종을 받는 건가!",
						"english": "Under Sahar's control!",
						"japanese": "サハルの操り人形か！",
						"chinese": "被萨哈尔操控了吗！",
						"french": "Sous le contrôle de Sahar !",
						"spanish": "¡Bajo el control de Sahar!",
						"vietnamese": "Bị Sahar điều khiển à!",
						"thai": "ถูกซาฮาร์ควบคุมงั้นรึ!",
						"hindi": "सहार के नियंत्रण में हो क्या!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이곳의 모든 것은… 나를 위해 존재한다.",
						"english": "Everything here... exists for me.",
						"japanese": "ここにある全ては… 私のために存在する。",
						"chinese": "这里的一切… 都为我而存在。",
						"french": "Tout ici... existe pour moi.",
						"spanish": "Todo aquí... existe para mí.",
						"vietnamese": "Mọi thứ ở đây... đều tồn tại vì ta.",
						"thai": "ทุกสิ่ง ณ ที่นี้... มีอยู่เพื่อข้า",
						"hindi": "यहाँ सब कुछ... मेरे लिए है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "우리가… 널 부수면 끝나겠지!",
						"english": "We break you... and it ends!",
						"japanese": "私たちが… お前を壊せば終わる！",
						"chinese": "我们… 毁了你，就结束了！",
						"french": "Si nous... te brisons, ça se terminera !",
						"spanish": "Si te destrozamos... ¡esto terminará!",
						"vietnamese": "Chúng ta... phá hủy ngươi, là xong!",
						"thai": "ถ้าเรา... ทำลายเจ้าได้ ก็จะจบสิ้น!",
						"hindi": "अगर हम... तुम्हें तोड़ दें, तो यह खत्म हो जाएगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 환상이 서서히 무너져 내렸다. 사막의 뜨거운 공기가 다시 폐를 채운다.",
						"english": "A grand illusion slowly crumbled. The hot desert air filled our lungs again.",
						"japanese": "巨大な幻想がゆっくりと崩れ落ちた。砂漠の熱い空気が再び肺を満たす。",
						"chinese": "巨大的幻象缓缓崩塌。沙漠的热空气再次充满肺腑。",
						"french": "La grande illusion s'est lentement effondrée. L'air chaud du désert remplit à nouveau nos poumons.",
						"spanish": "La gran ilusión se desmoronó lentamente. El aire caliente del desierto llenó nuestros pulmones de nuevo.",
						"vietnamese": "Ảo ảnh khổng lồ từ từ sụp đổ. Không khí nóng bỏng của sa mạc lại tràn vào phổi.",
						"thai": "ภาพลวงตาอันยิ่งใหญ่ค่อย ๆ พังทลายลง อากาศร้อนระอุของทะเลทรายกลับมาเติมเต็มปอดอีกครั้ง",
						"hindi": "विशाल भ्रम धीरे-धीरे ढह गया। रेगिस्तान की गर्म हवा ने फिर से फेफड़ों को भर दिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 부서진 건… 너희의 현실도 마찬가지…",
						"english": "Heh heh... what's broken... is your reality too...",
						"japanese": "クク… 壊れたのは… お前たちの現実も同じだ…",
						"chinese": "呵呵… 破碎的… 还有你们的现实…",
						"french": "Hé hé... ce qui est brisé... c'est aussi votre réalité...",
						"spanish": "Je je... lo que se rompió... también es vuestra realidad...",
						"vietnamese": "Khà khà... thứ bị phá vỡ... cũng là hiện thực của các ngươi...",
						"thai": "ฮึฮึ...สิ่งที่พังทลายลง...ก็คือความเป็นจริงของพวกเจ้าเช่นกัน...",
						"hindi": "हँ हँ... जो टूटा है... वह तुम्हारी वास्तविकता भी है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…なんだと？",
						"chinese": "…你说什么？",
						"french": "...Quoi ?",
						"spanish": "¿...Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "Donkey"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "모든 게 꿈이었을까요? 아직도 배가 고픈 것 같아요…",
						"english": "Was it all a dream? I still feel hungry...",
						"japanese": "全て夢だったのでしょうか？ まだお腹が空いている気がします…",
						"chinese": "一切都是梦吗？我好像还是觉得饿…",
						"french": "Tout n'était qu'un rêve ? J'ai encore faim...",
						"spanish": "¿Fue todo un sueño? Todavía siento hambre...",
						"vietnamese": "Tất cả là mơ ư? Tôi vẫn cảm thấy đói...",
						"thai": "ทั้งหมดเป็นแค่ฝันรึเปล่านะ? ฉันยังรู้สึกหิวเลย...",
						"hindi": "क्या यह सब एक सपना था? मुझे अभी भी भूख लग रही है..."
					},
					"type": "speech",
					"speaker": "Donkey"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환상은 깨졌지만, 무언가 석연찮았다. 아직 풀리지 않은 실마리가 남아있었다.",
						"english": "The illusion shattered, but something felt amiss. Unresolved threads remained.",
						"japanese": "幻想は破れたが、何かが釈然としなかった。まだ解き明かされていない手がかりが残っていた。",
						"chinese": "幻象破灭了，但总觉得哪里不对劲。还有未解开的线索。",
						"french": "L'illusion était brisée, mais quelque chose clochait. Des indices non résolus demeuraient.",
						"spanish": "La ilusión se rompió, pero algo no cuadraba. Todavía quedaban cabos sueltos.",
						"vietnamese": "Ảo ảnh đã tan vỡ, nhưng vẫn có gì đó không ổn. Vẫn còn những manh mối chưa được giải quyết.",
						"thai": "ภาพลวงตาได้แตกสลายไปแล้ว แต่ก็ยังมีบางอย่างที่คลางแคลงใจ ยังคงมีเบาะแสที่ยังไม่คลี่คลายหลงเหลืออยู่",
						"hindi": "भ्रम टूट गया था, लेकिन कुछ ठीक नहीं लग रहा था। अभी भी अनसुलझे सुराग बाकी थे।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들이여… 환상은 영원하다.",
						"english": "Fools... the illusion is eternal.",
						"japanese": "愚か者どもよ… 幻想は永遠だ。",
						"chinese": "愚蠢的人们啊… 幻象永恒。",
						"french": "Imbéciles... l'illusion est éternelle.",
						"spanish": "Necios... la ilusión es eterna.",
						"vietnamese": "Đồ ngu... ảo ảnh là vĩnh cửu.",
						"thai": "พวกโง่เง่า... ภาพลวงตาเป็นนิรันดร์",
						"hindi": "मूर्खों... भ्रम शाश्वत है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わっていない！",
						"chinese": "还没… 结束呢！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc đâu!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈앞의 모든 것이 다시 연회장의 환상으로 되돌아간다. 다시 시작해야 한다.",
						"english": "Everything before your eyes reverts to the banquet hall's illusion. You must start over.",
						"japanese": "目の前の全てが再び宴の幻想に戻る。最初からやり直せ。",
						"chinese": "眼前的一切又变回了宴会厅的幻象。你必须重新开始。",
						"french": "Tout redevient l'illusion de la salle de banquet. Vous devez recommencer.",
						"spanish": "Todo vuelve a ser la ilusión del salón de banquetes. Debes empezar de nuevo.",
						"vietnamese": "Mọi thứ trước mắt bạn quay trở lại ảo ảnh của sảnh tiệc. Bạn phải bắt đầu lại.",
						"thai": "ทุกสิ่งตรงหน้ากลับกลายเป็นภาพลวงตาของห้องจัดเลี้ยง คุณต้องเริ่มต้นใหม่",
						"hindi": "आपकी आँखों के सामने सब कुछ वापस बैंक्वेट हॉल के भ्रम में बदल जाता है। आपको फिर से शुरू करना होगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 신기루는 달콤했다.",
			"환상적인 연회. 완벽한 요리.",
			"그러나 묘한 허기가 모두를 덮쳤다.",
			"그리고, 한순간의 실수로 모든 것이 무너져내렸다."
		],
		"english": [
			"The desert's mirage was sweet.",
			"A fantastic banquet. Perfect cuisine.",
			"But a strange hunger overcame everyone.",
			"And then, a single mistake brought everything crashing down."
		],
		"japanese": [
			"砂漠の蜃気楼は甘美だった。",
			"幻想的な宴。完璧な料理。",
			"しかし、奇妙な空腹感が皆を襲った。",
			"そして、一瞬の過ちですべてが崩れ落ちた。"
		],
		"chinese": [
			"沙漠的海市蜃楼是甜美的。",
			"梦幻般的盛宴。完美的菜肴。",
			"然而，一种奇怪的饥饿感笼罩了所有人。",
			"然后，一个瞬间的错误让一切都崩溃了。"
		],
		"french": [
			"Le mirage du désert était doux.",
			"Un banquet fantastique. Des plats parfaits.",
			"Cependant, une étrange faim envahit tout le monde.",
			"Et puis, une seule erreur a tout fait s'effondrer."
		],
		"spanish": [
			"El espejismo del desierto era dulce.",
			"Un banquete fantástico. Platos perfectos.",
			"Sin embargo, un hambre extraña los invadió a todos.",
			"Y luego, un solo error hizo que todo se derrumbara."
		],
		"vietnamese": [
			"Ảo ảnh sa mạc thật ngọt ngào.",
			"Yến tiệc lộng lẫy. Món ăn hoàn hảo.",
			"Nhưng một cơn đói lạ ập đến tất cả.",
			"Và rồi, một sai lầm trong khoảnh khắc đã khiến mọi thứ sụp đổ."
		],
		"thai": [
			"ภาพลวงตาในทะเลทรายนั้นหอมหวาน",
			"งานเลี้ยงที่น่าอัศจรรย์ อาหารที่สมบูรณ์แบบ",
			"แต่ความหิวโหยแปลกประหลาดได้เข้าครอบงำทุกคน",
			"และแล้ว ความผิดพลาดเพียงชั่วขณะก็ทำให้ทุกสิ่งพังทลายลงมา"
		],
		"hindi": [
			"रेगिस्तान का मृগতृष्णा मीठा था।",
			"एक शानदार दावत। उत्तम व्यंजन।",
			"लेकिन एक अजीब भूख सब पर छा गई।",
			"और फिर, एक पल की गलती से सब कुछ बिखर गया।"
		]
	}
} as const;
