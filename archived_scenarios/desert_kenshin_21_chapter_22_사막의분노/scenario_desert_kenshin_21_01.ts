export const scenario_desert_kenshin_21_01 = {
	"scenario_id": "desert_kenshin_21_01",
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
	"prologue": {
		"korean": [
			"메마른 오아시스, 타들어 가는 갈증.",
			"모두가 '수호자'를 탓했지만, 그들은 침묵했다.",
			"숨겨진 진실, 그 부조리한 소문이 시작되었다.",
			"사막의 분노가, 이제 막 깨어나려 한다."
		],
		"english": [
			"A parched oasis, a burning thirst.",
			"Everyone blamed the 'Guardians', but they remained silent.",
			"The hidden truth, the unreasonable rumor began.",
			"The desert's wrath is about to awaken."
		],
		"japanese": [
			"乾いたオアシス、燃えるような渇き。",
			"誰もが「守護者」を責めたが、彼らは沈黙した。",
			"隠された真実、不条理な噂が始まった。",
			"砂漠の怒りが、今まさに目覚めようとしている。"
		],
		"chinese": [
			"干涸的绿洲，焦灼的干渴。",
			"所有人都指责“守护者”，但他们保持沉默。",
			"隐藏的真相，那不合理的谣言开始了。",
			"沙漠的愤怒，现在即将觉醒。"
		],
		"french": [
			"Une oasis asséchée, une soif brûlante.",
			"Tout le monde blâmait les 'Gardiens', mais ils sont restés silencieux.",
			"La vérité cachée, cette rumeur absurde a commencé.",
			"La colère du désert est sur le point de s'éveiller."
		],
		"spanish": [
			"Un oasis reseco, una sed abrasadora.",
			"Todos culparon a los 'Guardianes', pero ellos guardaron silencio.",
			"La verdad oculta, ese rumor irrazonable comenzó.",
			"La ira del desierto está a punto de despertar."
		],
		"vietnamese": [
			"Ốc đảo khô cằn, cơn khát cháy bỏng.",
			"Mọi người đổ lỗi cho 'Người bảo vệ', nhưng họ vẫn im lặng.",
			"Sự thật ẩn giấu, tin đồn phi lý ấy đã bắt đầu.",
			"Cơn thịnh nộ của sa mạc, sắp thức tỉnh."
		],
		"thai": [
			"โอเอซิสที่แห้งผาก ความกระหายที่แผดเผา",
			"ทุกคนโทษ 'ผู้พิทักษ์' แต่พวกเขากลับเงียบงัน",
			"ความจริงที่ซ่อนอยู่ ข่าวลือที่ไม่สมเหตุสมผลได้เริ่มต้นขึ้นแล้ว",
			"ความโกรธแค้นของทะเลทราย กำลังจะตื่นขึ้น"
		],
		"hindi": [
			"सूखा नखलिस्तान, जलती हुई प्यास।",
			"सबने 'संरक्षकों' को दोषी ठहराया, पर वे चुप रहे।",
			"छिपी हुई सच्चाई, वह बेबुनियाद अफवाह शुरू हुई।",
			"रेगिस्तान का क्रोध, अब जागने वाला है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "황량한 사막, 오아시스의 물줄기는 가늘었다. 사람들은 목마름에 지쳐갔다.",
						"english": "A desolate desert, the oasis's water stream was thin. People were exhausted from thirst.",
						"japanese": "荒涼とした砂漠、オアシスの水流は細かった。人々は喉の渇きに疲れ果てていた。",
						"chinese": "荒凉的沙漠，绿洲的水流很细。人们因口渴而疲惫不堪。",
						"french": "Un désert désolé, le filet d'eau de l'oasis était mince. Les gens étaient épuisés par la soif.",
						"spanish": "Un desierto desolado, el chorro de agua del oasis era escaso. La gente estaba exhausta por la sed.",
						"vietnamese": "Sa mạc hoang vắng, dòng nước ốc đảo cạn kiệt. Con người kiệt sức vì khát.",
						"thai": "ทะเลทรายอันรกร้าง น้ำจากโอเอซิสไหลริน ผู้คนอ่อนล้าจากความกระหาย",
						"hindi": "एक उजाड़ रेगिस्तान, नखलिस्तान की जलधारा पतली थी। लोग प्यास से थक गए थे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "물… 물이 없어. 수호자들이 오아시스를 다 막았어.",
						"english": "Water... there's no water. The Guardians blocked all the oasis.",
						"japanese": "水…水がない。守護者たちがオアシスを全て塞いだ。",
						"chinese": "水……没水了。守护者们把绿洲都堵住了。",
						"french": "De l'eau… il n'y a plus d'eau. Les Gardiens ont bloqué toute l'oasis.",
						"spanish": "Agua... no hay agua. Los Guardianes bloquearon todo el oasis.",
						"vietnamese": "Nước… không có nước. Những Người bảo vệ đã chặn hết ốc đảo rồi.",
						"thai": "น้ำ... ไม่มีน้ำ ผู้พิทักษ์ปิดโอเอซิสไว้หมดแล้ว",
						"hindi": "पानी... पानी नहीं है। संरक्षकों ने सभी नखलिस्तानों को रोक दिया है।"
					}
				},
				{
					"content": {
						"korean": "수호자라고? 그들이 왜?",
						"english": "Guardians? Why would they?",
						"japanese": "守護者だと？なぜ彼らが？",
						"chinese": "守护者？他们为什么会那样做？",
						"french": "Les Gardiens ? Pourquoi feraient-ils ça ?",
						"spanish": "¿Los Guardianes? ¿Por qué harían eso?",
						"vietnamese": "Người bảo vệ ư? Sao họ lại làm vậy?",
						"thai": "ผู้พิทักษ์หรือ? ทำไมพวกเขาถึงทำเช่นนั้น?",
						"hindi": "संरक्षक? वे क्यों ऐसा करेंगे?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "소문이 파다해. 그들이 물을 독점하고 있다고.",
						"english": "The rumor is widespread. They're monopolizing the water.",
						"japanese": "噂が広まっている。彼らが水を独占していると。",
						"chinese": "谣言传开了。他们正在垄断水源。",
						"french": "La rumeur est répandue. Ils monopolisent l'eau.",
						"spanish": "El rumor es generalizado. Están monopolizando el agua.",
						"vietnamese": "Tin đồn lan rộng. Họ đang độc chiếm nguồn nước.",
						"thai": "มีข่าวลือแพร่สะพัด พวกเขากำลังผูกขาดน้ำ",
						"hindi": "अफवाह फैल रही है। वे पानी पर एकाधिकार कर रहे हैं।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "말도 안 돼…!",
						"english": "That's impossible...!",
						"japanese": "そんなはずない…！",
						"chinese": "不可能……！",
						"french": "C'est impossible… !",
						"spanish": "¡Eso es imposible...!",
						"vietnamese": "Không thể nào…!",
						"thai": "เป็นไปไม่ได้...!",
						"hindi": "यह असंभव है...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이 사막은 원래 이렇지 않았어. 옛날에는…",
						"english": "This desert wasn't always like this. In the past...",
						"japanese": "この砂漠は元々こんなじゃなかった。昔は…",
						"chinese": "这个沙漠以前不是这样的。以前……",
						"french": "Ce désert n'a pas toujours été comme ça. Autrefois...",
						"spanish": "Este desierto no siempre fue así. En el pasado...",
						"vietnamese": "Sa mạc này trước đây không như vậy. Ngày xưa...",
						"thai": "ทะเลทรายนี้ไม่เคยเป็นแบบนี้มาก่อน สมัยก่อน...",
						"hindi": "यह रेगिस्तान हमेशा ऐसा नहीं था। पहले..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "옛날? 뭐가 달랐는데?",
						"english": "The old days? What was different then?",
						"japanese": "昔？何が違ったの？",
						"chinese": "以前？有什么不同？",
						"french": "Avant ? Qu'est-ce qui était différent ?",
						"spanish": "¿El pasado? ¿Qué era diferente?",
						"vietnamese": "Ngày xưa? Có gì khác biệt?",
						"thai": "อดีตเหรอ? มีอะไรแตกต่างกัน?",
						"hindi": "पहले? क्या अलग था?"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "어딘가에 기록이 있을 거야. 블레이드마스터 왕가에 대한.",
						"english": "There must be records somewhere. About the Blademaster Royal Family.",
						"japanese": "どこかに記録があるはずだ。ブレードマスター王家についての。",
						"chinese": "某个地方应该有记录。关于剑圣王室的。",
						"french": "Il doit y avoir des archives quelque part. Sur la famille royale des Maîtres-Lames.",
						"spanish": "Debe haber registros en alguna parte. Sobre la Familia Real de los Maestros de la Espada.",
						"vietnamese": "Chắc chắn có ghi chép ở đâu đó. Về Hoàng tộc Kiếm Sư.",
						"thai": "ต้องมีบันทึกอยู่ที่ไหนสักแห่ง เรื่องราชวงศ์ผู้ใช้ดาบ.",
						"hindi": "कहीं न कहीं रिकॉर्ड होगा। ब्लेडमास्टर शाही परिवार के बारे में।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "블레이드마스터? 그게 뭔데?",
						"english": "Blademaster? What's that?",
						"japanese": "ブレードマスター？それ何？",
						"chinese": "剑圣？那是什么？",
						"french": "Maître-Lames ? C'est quoi ?",
						"spanish": "¿Maestro de la Espada? ¿Qué es eso?",
						"vietnamese": "Kiếm Sư? Đó là gì?",
						"thai": "ผู้ใช้ดาบเหรอ? นั่นมันอะไร?",
						"hindi": "ब्लेडमास्टर? वह क्या है?"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "모두가 기억에서 지워진 왕가. 뭔가 감추고 싶은 게 있는 거지.",
						"english": "A royal family erased from memory. They must be hiding something.",
						"japanese": "皆の記憶から消された王家。何か隠したいことがあるのだろう。",
						"chinese": "一个从所有记忆中抹去的王室。他们肯定有想隐藏的东西。",
						"french": "Une famille royale effacée de toutes les mémoires. Ils doivent cacher quelque chose.",
						"spanish": "Una familia real borrada de la memoria. Deben estar ocultando algo.",
						"vietnamese": "Một hoàng tộc bị xóa khỏi ký ức. Họ chắc chắn đang che giấu điều gì đó.",
						"thai": "ราชวงศ์ที่ถูกลบไปจากความทรงจำของทุกคน พวกเขาต้องปิดบังอะไรบางอย่างอยู่แน่ๆ",
						"hindi": "एक शाही परिवार जिसे यादों से मिटा दिया गया। वे कुछ छिपाना चाहते होंगे।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "물 한 모금에 목숨을 거는 시대야. 저들은 오아시스에서 잔치를 벌이고 있는데.",
						"english": "It's an era where a sip of water costs a life. Yet they feast at the oasis.",
						"japanese": "水一口に命を賭ける時代だ。なのに彼らはオアシスで宴を開いている。",
						"chinese": "这是一个为了一口水都能赌上性命的时代。而他们却在绿洲狂欢。",
						"french": "C'est une époque où une gorgée d'eau coûte une vie. Pourtant, ils festoient à l'oasis.",
						"spanish": "Es una era donde un sorbo de agua cuesta una vida. Y ellos festejan en el oasis.",
						"vietnamese": "Đây là thời đại mà một ngụm nước cũng phải đánh đổi bằng cả mạng sống. Thế mà bọn chúng lại mở tiệc ở ốc đảo.",
						"thai": "เป็นยุคที่น้ำอึกเดียวก็ต้องเอาชีวิตเข้าแลก แต่พวกเขากลับจัดงานเลี้ยงที่โอเอซิส",
						"hindi": "यह वह युग है जहाँ एक घूंट पानी के लिए जान जोखिम में डालते हैं। और वे नखलिस्तान में दावत कर रहे हैं।"
					},
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 두고 볼 수 없어.",
						"english": "I can't stand by any longer.",
						"japanese": "これ以上、見ていられない。",
						"chinese": "我不能再坐视不管了。",
						"french": "Je ne peux plus rester les bras croisés.",
						"spanish": "No puedo seguir soportándolo.",
						"vietnamese": "Không thể chịu đựng thêm nữa.",
						"thai": "ทนดูต่อไปไม่ไหวแล้ว.",
						"hindi": "अब और बर्दाश्त नहीं कर सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "수호자라는 이름 아래, 모두가 착취당하고 있어.",
						"english": "Under the name of 'Guardians,' everyone is being exploited.",
						"japanese": "守護者という名の下、皆が搾取されている。",
						"chinese": "在守护者的名义下，所有人都在被剥削。",
						"french": "Sous le nom de 'Gardiens', tout le monde est exploité.",
						"spanish": "Bajo el nombre de 'Guardianes', todos están siendo explotados.",
						"vietnamese": "Dưới danh nghĩa 'Người bảo hộ', tất cả mọi người đều bị bóc lột.",
						"thai": "ภายใต้ชื่อของผู้พิทักษ์ ทุกคนกำลังถูกเอารัดเอาเปรียบ.",
						"hindi": "'अभि अभिभावकों' के नाम पर, सभी का शोषण हो रहा है।"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 밝혀야 해.",
						"english": "The truth must be revealed.",
						"japanese": "真実を明かさなければならない。",
						"chinese": "必须揭露真相。",
						"french": "La vérité doit être révélée.",
						"spanish": "Hay que revelar la verdad.",
						"vietnamese": "Phải phơi bày sự thật.",
						"thai": "ต้องเปิดเผยความจริง.",
						"hindi": "सच उजागर करना होगा।"
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
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "이 깊은 곳에 들어온 건 위험한 일이야. 저들은 침묵하지 않을 거야.",
						"english": "Coming this deep is dangerous. They won't stay silent.",
						"japanese": "こんな深くまで来たのは危険なことだ。奴らは黙っていないだろう。",
						"chinese": "深入此处是危险的。他们不会保持沉默。",
						"french": "S'aventurer si profondément est dangereux. Ils ne resteront pas silencieux.",
						"spanish": "Entrar tan profundo es peligroso. No se quedarán en silencio.",
						"vietnamese": "Đi sâu vào đây là một việc nguy hiểm. Bọn chúng sẽ không im lặng đâu.",
						"thai": "การเข้ามาลึกถึงขนาดนี้เป็นอันตราย พวกนั้นไม่เงียบแน่.",
						"hindi": "इतनी गहराई में आना खतरनाक है। वे चुप नहीं बैठेंगे।"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상관없어. 여기서 멈추지 않아.",
						"english": "Doesn't matter. I won't stop here.",
						"japanese": "構わない。ここで止まらない。",
						"chinese": "无所谓。我不会就此止步。",
						"french": "Peu importe. Je ne m'arrêterai pas là.",
						"spanish": "No importa. No me detendré aquí.",
						"vietnamese": "Không sao cả. Tôi sẽ không dừng lại ở đây.",
						"thai": "ไม่เป็นไร. ฉันจะไม่หยุดอยู่แค่นี้.",
						"hindi": "कोई बात नहीं। मैं यहाँ नहीं रुकूँगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "메마른 사막의 공기가 분노로 타올랐다. 돌아갈 길은 없었다.",
						"english": "The arid desert air blazed with fury. There was no turning back.",
						"japanese": "乾いた砂漠の空気が怒りに燃え上がった。引き返す道はなかった。",
						"chinese": "干燥的沙漠空气因愤怒而燃烧。已无回头之路。",
						"french": "L'air aride du désert s'enflamma de fureur. Il n'y avait plus de retour possible.",
						"spanish": "El aire árido del desierto ardió con furia. No había vuelta atrás.",
						"vietnamese": "Không khí sa mạc khô cằn bùng cháy trong giận dữ. Không còn đường quay lại.",
						"thai": "อากาศแห้งแล้งในทะเลทรายลุกโชนด้วยความโกรธ ไม่มีทางย้อนกลับแล้ว",
						"hindi": "सूखी रेगिस्तानी हवा क्रोध से जल उठी। पीछे हटने का कोई रास्ता नहीं था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 어리석은… 아직 아무것도 모른다…",
						"english": "Urgh... Foolish... You still know nothing...",
						"japanese": "ぐうう…愚かな…まだ何も分かっていない…",
						"chinese": "呃…愚蠢…你还一无所知…",
						"french": "Urgh… Idiot… Tu ne sais encore rien…",
						"spanish": "Argh... Tonto... Aún no sabes nada...",
						"vietnamese": "Ưgh... Ngu ngốc... Ngươi vẫn chưa biết gì cả...",
						"thai": "อึ่ก... โง่เขลา... เจ้ายังไม่รู้อะไรเลย...",
						"hindi": "उफ़... मूर्ख... तुम्हें अभी भी कुछ नहीं पता..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 말해!",
						"english": "What do you mean? Speak!",
						"japanese": "何を言ってるんだ？話せ！",
						"chinese": "你说什么？快说！",
						"french": "Qu'est-ce que tu veux dire ? Parle !",
						"spanish": "¿Qué quieres decir? ¡Habla!",
						"vietnamese": "Ngươi nói gì? Nói đi!",
						"thai": "เจ้าหมายความว่าไง? พูดมา!",
						"hindi": "तुम्हारा क्या मतलब है? बोलो!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "{random_boss}… 그 이름은… 곧… 사라질 것이다…",
						"english": "{random_boss}... That name... will soon... vanish...",
						"japanese": "{random_boss}…その名は…いずれ…消えるだろう…",
						"chinese": "{random_boss}…那个名字…很快就会…消失…",
						"french": "{random_boss}… Ce nom… bientôt… disparaîtra…",
						"spanish": "{random_boss}... Ese nombre... pronto... desaparecerá...",
						"vietnamese": "{random_boss}... Tên đó... sẽ sớm... biến mất...",
						"thai": "{random_boss}... นามนั้น... จะ... หายไปในไม่ช้า...",
						"hindi": "{random_boss}... वह नाम... जल्द ही... मिट जाएगा..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 수호자. 그러나 그의 마지막 말은 더 큰 미스터리를 남겼다.",
						"english": "The fallen guardian. But his last words left a greater mystery.",
						"japanese": "倒れた守護者。しかし、彼の最期の言葉は、より大きな謎を残した。",
						"chinese": "倒下的守护者。然而他的遗言留下了更大的谜团。",
						"french": "Le gardien tombé. Mais ses derniers mots ont laissé un plus grand mystère.",
						"spanish": "El guardián caído. Pero sus últimas palabras dejaron un misterio aún mayor.",
						"vietnamese": "Người bảo hộ đã ngã xuống. Nhưng những lời cuối cùng của hắn để lại một bí ẩn lớn hơn.",
						"thai": "ผู้พิทักษ์ที่ล้มลง แต่คำพูดสุดท้ายของเขาได้ทิ้งปริศนาที่ใหญ่กว่าไว้",
						"hindi": "गिरा हुआ संरक्षक। लेकिन उसके अंतिम शब्द एक बड़ा रहस्य छोड़ गए।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게 끝이 아니구나….",
						"english": "This isn't the end....",
						"japanese": "これで終わりじゃないな…。",
						"chinese": "这还不是结局…。",
						"french": "Ce n'est pas la fin....",
						"spanish": "Esto no es el final....",
						"vietnamese": "Đây không phải là kết thúc....",
						"thai": "นี่ไม่ใช่จุดจบ...",
						"hindi": "यह अंत नहीं है...."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "메마른 오아시스에 드리운 거대한 그림자. 진실은 이제 시작이었다.",
						"english": "A colossal shadow cast over the parched oasis. The truth had only just begun.",
						"japanese": "乾いたオアシスに差し込む巨大な影。真実は今始まったばかりだった。",
						"chinese": "巨大的阴影笼罩着干涸的绿洲。真相才刚刚开始。",
						"french": "Une ombre colossale planait sur l'oasis desséchée. La vérité ne faisait que commencer.",
						"spanish": "Una sombra colosal se cernía sobre el oasis reseco. La verdad apenas comenzaba.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm ốc đảo khô cằn. Sự thật chỉ mới bắt đầu.",
						"thai": "เงามหึมาทอดทาบบนโอเอซิสที่แห้งผาก ความจริงเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "सूखे नखलिस्तान पर एक विशाल छाया पड़ी। सच्चाई तो अभी शुरू ही हुई थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가? 헛된 저항이군.",
						"english": "Is this all you've got? Futile resistance.",
						"japanese": "せいぜいこの程度か？無駄な抵抗だな。",
						"chinese": "就这点本事吗？徒劳的抵抗。",
						"french": "C'est tout ce que tu as ? Résistance futile.",
						"spanish": "¿Es todo lo que tienes? Resistencia inútil.",
						"vietnamese": "Chỉ có thế thôi sao? Kháng cự vô ích.",
						"thai": "ได้แค่นี้เองหรือ? การต่อต้านที่ไร้ค่า",
						"hindi": "बस इतना ही है क्या? व्यर्थ का प्रतिरोध।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 포기하지 않아… 반드시 돌아온다!",
						"english": "Ugh... I won't give up... I'll definitely be back!",
						"japanese": "くっ… 諦めない… 必ず戻ってくる！",
						"chinese": "唔… 我不会放弃… 我一定会回来的！",
						"french": "Argh... Je n'abandonnerai pas... Je reviendrai, c'est sûr !",
						"spanish": "Ugh... No me rindo... ¡Volveré, lo juro!",
						"vietnamese": "Khụ... Ta sẽ không từ bỏ... Nhất định sẽ trở lại!",
						"thai": "อึก… ข้าจะไม่ยอมแพ้… ข้าจะกลับมาแน่!",
						"hindi": "उफ़… मैं हार नहीं मानूँगा… मैं ज़रूर वापस आऊँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어디서 감히 여기까지 기어들어 왔는가.",
						"english": "How dare you crawl all the way here?",
						"japanese": "どこからよくもここまで這い上がってきたな。",
						"chinese": "你竟敢爬到这里来？",
						"french": "Comment oses-tu ramper jusqu'ici ?",
						"spanish": "¿Cómo te atreves a arrastrarte hasta aquí?",
						"vietnamese": "Ngươi dám bò đến tận đây ư?",
						"thai": "แกกล้าดียังไงถึงคลานมาถึงนี่?",
						"hindi": "तुम यहाँ तक आने की हिम्मत कैसे कर सकते हो?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사막의 진실을 파헤치러 왔다.",
						"english": "I came to unearth the desert's truth.",
						"japanese": "砂漠の真実を暴きに来た。",
						"chinese": "我来揭示沙漠的真相。",
						"french": "Je suis venu déterrer la vérité du désert.",
						"spanish": "Vine a desenterrar la verdad del desierto.",
						"vietnamese": "Ta đến để khám phá sự thật của sa mạc.",
						"thai": "ข้ามาเพื่อเปิดเผยความจริงของทะเลทราย",
						"hindi": "मैं रेगिस्तान का सच उजागर करने आया हूँ।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하찮은 것. 그 진실은 네가 감당할 수 없을 것이다.",
						"english": "Insignificant creature. That truth is more than you can handle.",
						"japanese": "くだらん奴。その真実は貴様には耐えられぬだろう。",
						"chinese": "微不足道的家伙。那个真相你承受不起。",
						"french": "Créature insignifiante. Cette vérité est plus que ce que tu peux supporter.",
						"spanish": "Criatura insignificante. Esa verdad es más de lo que puedes soportar.",
						"vietnamese": "Kẻ tầm thường. Ngươi không thể chịu đựng được sự thật đó đâu.",
						"thai": "เจ้ากระจอก ความจริงนั้นเจ้าไม่อาจรับมือได้หรอก",
						"hindi": "तुच्छ प्राणी। वह सच तुम संभाल नहीं पाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 너희의 탐욕 때문에 모두가 고통받고 있어!",
						"english": "Shut up! Everyone is suffering because of your greed!",
						"japanese": "黙れ！貴様らの貪欲のせいで皆が苦しんでいるんだ！",
						"chinese": "闭嘴！你们的贪婪让所有人都在受苦！",
						"french": "Tais-toi ! Tout le monde souffre à cause de votre cupidité !",
						"spanish": "¡Cállate! ¡Todos están sufriendo por tu codicia!",
						"vietnamese": "Câm mồm! Tất cả mọi người đang phải chịu đựng vì sự tham lam của các ngươi!",
						"thai": "หุบปาก! ทุกคนต้องทนทุกข์เพราะความโลภของพวกแก!",
						"hindi": "चुप हो जाओ! तुम्हारी लालच की वजह से सब पीड़ित हैं!"
					}
				}
			]
		}
	]
} as const;
