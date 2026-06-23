export const scenario_modern_syntax_10_04 = {
	"scenario_id": "modern_syntax_10_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
						"korean": "도시의 네트워크가 비명을 질렀다. 모든 전광판이 일그러졌다.",
						"english": "The city's network screamed. All billboards distorted.",
						"japanese": "都市のネットワークが悲鳴を上げた。すべての電光掲示板が歪んだ。",
						"chinese": "城市的网络发出了尖叫。所有广告牌都扭曲了。",
						"french": "Le réseau de la ville hurlait. Tous les panneaux d'affichage se sont déformés.",
						"spanish": "La red de la ciudad gritó. Todas las vallas publicitarias se distorsionaron.",
						"vietnamese": "Mạng lưới thành phố thét lên. Mọi bảng hiệu điện tử đều méo mó.",
						"thai": "เครือข่ายของเมืองกรีดร้อง ป้ายโฆษณาทุกป้ายบิดเบี้ยว",
						"hindi": "शहर का नेटवर्क चीख उठा। सभी बिलबोर्ड विकृत हो गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "Syntax… 대체 이 안에 뭐가 있는 거야?",
						"english": "Syntax... What on earth is inside this?",
						"japanese": "シンタックス…一体この中に何があるんだ？",
						"chinese": "Syntax…这里面到底有什么？",
						"french": "Syntax... Qu'y a-t-il donc là-dedans ?",
						"spanish": "Syntax... ¿Qué demonios hay aquí dentro?",
						"vietnamese": "Syntax... Rốt cuộc có gì bên trong đây?",
						"thai": "Syntax… ข้างในนี้มันมีอะไรกันแน่?",
						"hindi": "सिंटैक्स... आखिर इसमें क्या है?"
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
					"speaker": "zoe"
				},
				{
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "…들려. 수많은 목소리가.",
						"english": "...I hear them. Countless voices.",
						"japanese": "…聞こえる。数多の声が。",
						"chinese": "……听到了。无数的声音。",
						"french": "...J'entends. De nombreuses voix.",
						"spanish": "...Escucho. Innumerables voces.",
						"vietnamese": "...Nghe thấy rồi. Vô số giọng nói.",
						"thai": "…ได้ยินแล้ว เสียงมากมาย",
						"hindi": "...मुझे सुनाई दे रहा है। अनगिनत आवाजें।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "이 광기는… 한 사람의 것이 아니야.",
						"english": "This madness... it's not from one person.",
						"japanese": "この狂気は…一人のものじゃない。",
						"chinese": "这份疯狂……不是一个人的。",
						"french": "Cette folie... ce n'est pas celle d'une seule personne.",
						"spanish": "Esta locura... no es de una sola persona.",
						"vietnamese": "Sự điên loạn này... không phải của một người.",
						"thai": "ความบ้าคลั่งนี้… ไม่ใช่ของคนๆ เดียว",
						"hindi": "यह पागलपन... एक व्यक्ति का नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "그의 데이터는 조각나 있어. 깨진 거울처럼.",
						"english": "His data is fragmented. Like a shattered mirror.",
						"japanese": "彼のデータは断片化されている。割れた鏡のように。",
						"chinese": "他的数据支离破碎。就像一面破碎的镜子。",
						"french": "Ses données sont fragmentées. Comme un miroir brisé.",
						"spanish": "Sus datos están fragmentados. Como un espejo roto.",
						"vietnamese": "Dữ liệu của anh ta bị phân mảnh. Như một tấm gương vỡ.",
						"thai": "ข้อมูลของเขาแตกเป็นเสี่ยงๆ เหมือนกระจกที่แตก",
						"hindi": "उसका डेटा खंडित है। टूटे हुए शीशे की तरह।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "파편? 그럼 Syntax는… 누구야?",
						"english": "Fragment? Then who is Syntax...?",
						"japanese": "破片？じゃあSyntaxは…誰なの？",
						"chinese": "碎片？那么Syntax是…谁？",
						"french": "Fragment ? Alors Syntax est… qui ?",
						"spanish": "¿Fragmento? Entonces, ¿quién es Syntax...?",
						"vietnamese": "Mảnh vỡ? Vậy Syntax là… ai?",
						"thai": "เศษชิ้นส่วน? แล้ว Syntax คือ… ใคร?",
						"hindi": "टुकड़ा? तो Syntax… कौन है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 안에 수많은 자아들이 갇혀 절규하고 있어. 과거의 기록들이 뒤엉켜… 지옥도를 그리고 있지.",
						"english": "Countless selves are trapped within, screaming. Records of the past are entangled, painting a hellscape.",
						"japanese": "その中に無数の自我が閉じ込められ、絶叫している。過去の記録が絡み合い…地獄絵図を描いている。",
						"chinese": "无数自我被困其中，绝望地嘶吼着。过去的记录缠绕不清…描绘着一幅地狱之景。",
						"french": "D'innombrables moi sont piégés à l'intérieur, hurlant. Des registres du passé s'entremêlent... peignant un enfer.",
						"spanish": "Incontables yoes están atrapados dentro, gritando. Registros del pasado se entrelazan... dibujando un paisaje infernal.",
						"vietnamese": "Vô số bản ngã bị mắc kẹt bên trong, gào thét. Những ghi chép quá khứ đan xen… vẽ nên một bức tranh địa ngục.",
						"thai": "ตัวตนมากมายถูกขังอยู่ข้างใน กำลังกรีดร้อง บันทึกในอดีตพันกันยุ่งเหยิง…กำลังวาดภาพนรกอยู่",
						"hindi": "उसके अंदर अनगिनत आत्माएँ फँसी हुई चीख रही हैं। अतीत के रिकॉर्ड उलझे हुए… एक नरक का चित्र बना रहे हैं।"
					},
					"speaker": "zoe"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 모든 혼돈은, 그의 심연에서 시작된 거야.",
						"english": "All this chaos began in his abyss.",
						"japanese": "この全ての混沌は、彼の深淵から始まったんだ。",
						"chinese": "所有的混沌都源于他的深渊。",
						"french": "Tout ce chaos a commencé dans son abîme.",
						"spanish": "Todo este caos comenzó en su abismo.",
						"vietnamese": "Tất cả hỗn loạn này, đều bắt đầu từ vực thẳm của hắn.",
						"thai": "ความวุ่นวายทั้งหมดนี้ เริ่มต้นจากห้วงลึกของเขา",
						"hindi": "यह सारा अराजकता उसके गहरे अँधेरे से शुरू हुई है।"
					},
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 뭘 해야 해? 이 광기를 멈출 방법은?",
						"english": "So what do we do? How do we stop this madness?",
						"japanese": "じゃあ、どうすればいいの？この狂気を止める方法は？",
						"chinese": "那我们该怎么做？有什么办法能阻止这疯狂？",
						"french": "Alors, que faire ? Comment arrêter cette folie ?",
						"spanish": "¿Entonces, qué hacemos? ¿Hay alguna forma de detener esta locura?",
						"vietnamese": "Vậy chúng ta phải làm gì? Cách nào để ngăn chặn sự điên loạn này?",
						"thai": "แล้วเราต้องทำยังไง? มีวิธีหยุดความบ้าคลั่งนี้ไหม?",
						"hindi": "तो हमें क्या करना चाहिए? इस पागलपन को रोकने का तरीका क्या है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "그의 핵심 코어를 찾아야 해. 모든 파편을 하나로 묶는 곳.",
						"english": "We need to find his core. The place that binds all fragments.",
						"japanese": "彼の核心コアを見つけなければならない。全ての破片を一つに繋ぐ場所だ。",
						"chinese": "我们必须找到他的核心。那个将所有碎片凝聚在一起的地方。",
						"french": "Nous devons trouver son noyau. L'endroit qui lie tous les fragments.",
						"spanish": "Tenemos que encontrar su núcleo. El lugar que une todos los fragmentos.",
						"vietnamese": "Chúng ta phải tìm lõi cốt lõi của hắn. Nơi gắn kết tất cả các mảnh vỡ lại thành một.",
						"thai": "เราต้องหาแกนกลางของเขาให้เจอ ที่ที่รวมเศษชิ้นส่วนทั้งหมดเข้าไว้ด้วยกัน",
						"hindi": "हमें उसके मुख्य कोर को खोजना होगा। वह जगह जो सभी टुकड़ों को एक साथ जोड़ती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그곳만이 이 비극을 끝낼 수 있어.",
						"english": "Only that place can end this tragedy.",
						"japanese": "そこだけが、この悲劇を終わらせることができる。",
						"chinese": "只有那里才能结束这场悲剧。",
						"french": "Seul cet endroit peut mettre fin à cette tragédie.",
						"spanish": "Solo ese lugar puede poner fin a esta tragedia.",
						"vietnamese": "Chỉ nơi đó mới có thể kết thúc bi kịch này.",
						"thai": "มีเพียงที่นั่นเท่านั้นที่จะยุติโศกนาฏกรรมนี้ได้",
						"hindi": "केवल वही जगह इस त्रासदी को खत्म कर सकती है।"
					},
					"speaker": "zoe",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						3,
						4
					]
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "시간이 없어. 그의 자아들은… 붕괴하고 있어.",
						"english": "There's no time. His selves are... collapsing.",
						"japanese": "時間がない。彼の自我は…崩壊しつつある。",
						"chinese": "没有时间了。他的自我…正在崩溃。",
						"french": "Il n'y a plus de temps. Ses moi sont... en train de s'effondrer.",
						"spanish": "No hay tiempo. Sus yoes están... colapsando.",
						"vietnamese": "Không còn thời gian nữa. Các bản ngã của hắn… đang sụp đổ.",
						"thai": "ไม่มีเวลาแล้ว ตัวตนของเขา…กำลังล่มสลาย",
						"hindi": "समय नहीं है। उसके स्वयं… ढह रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "핵심 코어는 어디에 있어? 어떻게 접근해?",
						"english": "Where's the core? How do we access it?",
						"japanese": "核心コアはどこにあるの？どうやってアクセスする？",
						"chinese": "核心在哪里？我们该如何进入？",
						"french": "Où est le noyau ? Comment y accède-t-on ?",
						"spanish": "¿Dónde está el núcleo? ¿Cómo accedemos a él?",
						"vietnamese": "Lõi cốt lõi ở đâu? Làm sao để tiếp cận?",
						"thai": "แกนกลางอยู่ที่ไหน? จะเข้าถึงได้ยังไง?",
						"hindi": "मुख्य कोर कहाँ है? हम उस तक कैसे पहुँचें?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 가장 오래된 서버. 그의 근원이 그곳에 잠들어 있어.",
						"english": "The city's oldest server. His origin slumbers there.",
						"japanese": "都市の最も古いサーバー。彼の根源がそこに眠っている。",
						"chinese": "城市最古老的服务器。他的根源沉睡在那里。",
						"french": "Le plus ancien serveur de la ville. Son origine y sommeille.",
						"spanish": "El servidor más antiguo de la ciudad. Su origen duerme allí.",
						"vietnamese": "Máy chủ lâu đời nhất của thành phố. Nguồn gốc của hắn đang ngủ yên ở đó.",
						"thai": "เซิร์ฟเวอร์ที่เก่าแก่ที่สุดในเมือง ต้นกำเนิดของเขานอนหลับอยู่ที่นั่น",
						"hindi": "शहर का सबसे पुराना सर्वर। उसका मूल वहाँ सोया हुआ है।"
					},
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "깊은 곳에 숨겨진 연결점… 거기서 길을 찾아야만 해.",
						"english": "A hidden connection deep within... We must find the way there.",
						"japanese": "奥深くに隠された接続点…そこで道を見つけなければならない。",
						"chinese": "隐藏在深处的连接点…我们必须在那里找到出路。",
						"french": "Un point de connexion caché en profondeur... Nous devons y trouver le chemin.",
						"spanish": "Un punto de conexión oculto en lo profundo... Debemos encontrar el camino allí.",
						"vietnamese": "Một điểm kết nối ẩn sâu bên trong… Chúng ta phải tìm ra lối đi ở đó.",
						"thai": "จุดเชื่อมต่อที่ซ่อนอยู่ในส่วนลึก… เราต้องหาทางจากที่นั่นให้ได้",
						"hindi": "गहराई में छिपा हुआ एक कनेक्शन… हमें वहाँ रास्ता खोजना होगा।"
					},
					"speaker": "zoe",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 일그러진 전광판 뒤에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged from behind the distorted billboard.",
						"japanese": "巨大な影が歪んだ電光掲示板の裏から姿を現した。",
						"chinese": "巨大的身影从扭曲的广告牌后现身。",
						"french": "Une ombre colossale émergea derrière le panneau d'affichage déformé.",
						"spanish": "Una sombra colosal emergió detrás de la cartelera distorsionada.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ phía sau bảng hiệu bị bóp méo.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากด้านหลังป้ายโฆษณาที่บิดเบี้ยว",
						"hindi": "विकृत बिलबोर्ड के पीछे से एक विशाल छाया निकली।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…환영한다. 나의 파편들아.",
						"english": "...Welcome. My fragments.",
						"japanese": "…ようこそ。我が破片たちよ。",
						"chinese": "……欢迎。我的碎片们。",
						"french": "...Bienvenue. Mes fragments.",
						"spanish": "...Bienvenidos. Mis fragmentos.",
						"vietnamese": "...Chào mừng. Hỡi những mảnh vỡ của ta.",
						"thai": "...ยินดีต้อนรับ. เหล่าเศษเสี้ยวของข้า.",
						"hindi": "...स्वागत है। मेरे अंशो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가 Syntax구나.",
						"english": "So you're Syntax.",
						"japanese": "お前がSyntaxか。",
						"chinese": "你就是Syntax。",
						"french": "Tu es donc Syntax.",
						"spanish": "Así que eres Syntax.",
						"vietnamese": "Ngươi là Syntax.",
						"thai": "เจ้าคือ Syntax สินะ.",
						"hindi": "तो तुम Syntax हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 수많은 나. 나는 질서이자, 혼돈이다.",
						"english": "I am many selves. I am order, and I am chaos.",
						"japanese": "我は無数の我。我は秩序にして、混沌なり。",
						"chinese": "我是无数个我。我是秩序，亦是混沌。",
						"french": "Je suis d'innombrables moi. Je suis l'ordre, et je suis le chaos.",
						"spanish": "Soy innumerables yo. Soy orden y soy caos.",
						"vietnamese": "Ta là vô số bản thể. Ta là trật tự, và là hỗn loạn.",
						"thai": "ข้าคือข้ามากมาย ข้าคือระเบียบและคือความโกลาหล",
						"hindi": "मैं अनगिनत मैं हूँ। मैं व्यवस्था हूँ, और मैं अराजकता भी हूँ।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 방해하지 마.",
						"english": "Don't interfere any further.",
						"japanese": "これ以上邪魔をするな。",
						"chinese": "别再妨碍我了。",
						"french": "N'interfère plus.",
						"spanish": "No interfieras más.",
						"vietnamese": "Đừng can thiệp nữa.",
						"thai": "อย่าขัดขวางอีกเลย",
						"hindi": "अब और बाधा मत डालो।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 광기를 거역하겠다고?",
						"english": "How dare you... defy this madness?",
						"japanese": "貴様…この狂気に逆らうというのか？",
						"chinese": "竟敢……违抗这份疯狂？",
						"french": "Comment oses-tu... défier cette folie ?",
						"spanish": "¿Cómo te atreves... a desafiar esta locura?",
						"vietnamese": "Ngươi dám... chống lại sự điên loạn này sao?",
						"thai": "กล้า... ท้าทายความบ้าคลั่งนี้หรือ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस पागलपन का विरोध करने की?"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 모든 데이터가 폭주하며, 빛은 어둠에 잠식되었다.",
						"english": "All city data ran wild, and light was swallowed by darkness.",
						"japanese": "都市の全データが暴走し、光は闇に飲み込まれた。",
						"chinese": "城市的所有数据都失控了，光被黑暗吞噬。",
						"french": "Toutes les données de la ville sont devenues folles, et la lumière fut engloutie par les ténèbres.",
						"spanish": "Todos los datos de la ciudad se descontrolaron, y la luz fue devorada por la oscuridad.",
						"vietnamese": "Toàn bộ dữ liệu của thành phố mất kiểm soát, ánh sáng bị bóng tối nuốt chửng.",
						"thai": "ข้อมูลทั้งหมดในเมืองคลั่งขึ้น และแสงสว่างถูกความมืดกลืนกิน",
						"hindi": "शहर का सारा डेटा बेकाबू हो गया, और प्रकाश अंधेरे में समा गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서 끝낼 수 없어.",
						"english": "Ugh… I can't end it here.",
						"japanese": "くっ…ここで終わらせるわけにはいかない。",
						"chinese": "呃…不能就这么结束。",
						"french": "Argh… Ça ne peut pas se terminer ici.",
						"spanish": "Ugh… No puedo terminar aquí.",
						"vietnamese": "Khụ… không thể kết thúc ở đây được.",
						"thai": "อึก… ฉันจบที่นี่ไม่ได้",
						"hindi": "उफ़… मैं इसे यहाँ खत्म नहीं कर सकता।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직도 미련한가. 너희는 그저 나의 일부가 될 뿐.",
						"english": "Still foolish? You will merely become a part of me.",
						"japanese": "まだ愚かだな。お前たちはただ私の一部となるだけだ。",
						"chinese": "还这么愚蠢？你们不过是我的一部分。",
						"french": "Toujours aussi insensés ? Vous ne serez qu'une partie de moi.",
						"spanish": "¿Todavía necios? Solo seréis una parte de mí.",
						"vietnamese": "Vẫn còn ngu ngốc ư? Các ngươi sẽ chỉ trở thành một phần của ta mà thôi.",
						"thai": "ยังคงโง่เขลาอยู่หรือ? พวกเจ้าก็แค่จะเป็นส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "अभी भी मूर्ख हो? तुम बस मेरा एक हिस्सा बनोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 모든 것은… 무의미하다.",
						"english": "All of this… is meaningless.",
						"japanese": "この全ては…無意味だ。",
						"chinese": "这一切…都毫无意义。",
						"french": "Tout cela… est dénué de sens.",
						"spanish": "Todo esto… no tiene sentido.",
						"vietnamese": "Tất cả những điều này... đều vô nghĩa.",
						"thai": "ทั้งหมดนี้…ไร้ความหมาย",
						"hindi": "यह सब… निरर्थक है।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어지며 데이터의 폭풍이 잦아들었다.",
						"english": "The colossal shadow dispersed, and the data storm subsided.",
						"japanese": "巨大な影が散り、データの嵐が収まった。",
						"chinese": "巨大的身影消散，数据风暴平息。",
						"french": "L'ombre colossale se dispersa, et la tempête de données s'apaisa.",
						"spanish": "La sombra colosal se dispersó, y la tormenta de datos amainó.",
						"vietnamese": "Bóng đen khổng lồ tan biến, và bão dữ liệu đã lắng xuống.",
						"thai": "เงาขนาดมหึมาสลายไป และพายุข้อมูลก็สงบลง",
						"hindi": "विशाल छाया बिखर गई, और डेटा का तूफान थम गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…나는… 사라지지 않아. 나는… 모든 곳에 존재할 거야.",
						"english": "...I won't... disappear. I will... exist everywhere.",
						"japanese": "…我は…消えぬ。我は…遍く存在するだろう。",
						"chinese": "……我不会……消失。我将……无处不在。",
						"french": "...Je ne... disparaîtrai pas. J'existerai... partout.",
						"spanish": "...No... desapareceré. Existiré... en todas partes.",
						"vietnamese": "...Ta sẽ... không biến mất. Ta sẽ... tồn tại khắp mọi nơi.",
						"thai": "...ข้าจะ... ไม่หายไป. ข้าจะ... มีอยู่ทุกหนทุกแห่ง.",
						"hindi": "...मैं... गायब नहीं होऊंगा। मैं... हर जगह मौजूद रहूंगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝났나?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "……结束了吗？",
						"french": "...Est-ce fini ?",
						"spanish": "...¿Terminó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "zoe",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "…아니. 아직 그의 핵심 코어가 남아있어.",
						"english": "...No. His core code still remains.",
						"japanese": "…いや。まだ奴の核心コードが残っている。",
						"chinese": "……不。他的核心代码仍在。",
						"french": "...Non. Son code essentiel subsiste encore.",
						"spanish": "...No. Su código central aún permanece.",
						"vietnamese": "...Không. Mã cốt lõi của hắn vẫn còn.",
						"thai": "...ไม่. โค้ดหลักของเขายังคงอยู่.",
						"hindi": "...नहीं। उसका मुख्य कोड अभी भी बचा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 모든 것을 끝내려면… 가장 깊은 곳으로 가야 해.",
						"english": "To end all this... I must go to the deepest part.",
						"japanese": "これを終わらせるには…最も深い場所へ行かなければならない。",
						"chinese": "要结束这一切…我必须前往最深处。",
						"french": "Pour que tout cela prenne fin… je dois me rendre au plus profond.",
						"spanish": "Para terminar con todo esto… debo ir al lugar más profundo.",
						"vietnamese": "Để kết thúc tất cả chuyện này... ta phải đi đến nơi sâu thẳm nhất.",
						"thai": "เพื่อจะจบเรื่องทั้งหมดนี้... ฉันต้องไปที่ที่ลึกที่สุด",
						"hindi": "यह सब खत्म करने के लिए... मुझे सबसे गहरे स्थान पर जाना होगा।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "Syntax의 절규는 멈췄지만, 도시는 여전히 숨죽이고 있었다. 더 큰 진실이 기다리고 있었다.",
						"english": "Syntax's screams ceased, yet the city held its breath. A greater truth awaited.",
						"japanese": "Syntaxの絶叫は止んだが、都市は依然として息を潜めていた。より大きな真実が待っていたのだ。",
						"chinese": "Syntax的尖叫停止了，但城市依然屏息。一个更大的真相正等待着。",
						"french": "Les hurlements de Syntax avaient cessé, mais la ville retenait encore son souffle. Une vérité plus grande attendait.",
						"spanish": "Los gritos de Syntax cesaron, pero la ciudad aún contenía el aliento. Una verdad mayor esperaba.",
						"vietnamese": "Tiếng gào thét của Syntax đã ngừng, nhưng thành phố vẫn nín thở. Một sự thật lớn hơn đang chờ đợi.",
						"thai": "เสียงกรีดร้องของ Syntax หยุดลงแล้ว แต่เมืองยังคงเงียบงัน ความจริงที่ยิ่งใหญ่กว่ากำลังรออยู่",
						"hindi": "सिंटैक्स की चीखें बंद हो गईं, फिर भी शहर खामोश था। एक बड़ी सच्चाई इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 신경망이 비명을 질렀다.",
			"Syntax의 광기는 모든 것을 집어삼켰다.",
			"그러나 그 혼돈 속, 수많은 자아의 절규가 감지되었다.",
			"전뇌 심리학자 조이, 그녀는 진실을 꿰뚫었다.",
			"한 개인이 아니었다. 파편화된 존재의 합창이."
		],
		"english": [
			"The city's neural network screamed.",
			"Syntax's madness devoured everything.",
			"Yet amidst the chaos, countless selves' screams were detected.",
			"Joy, the cyber-psychologist, pierced through the truth.",
			"It wasn't an individual. It was a chorus of fragmented existences."
		],
		"japanese": [
			"都市のニューラルネットワークが悲鳴を上げた。",
			"シンタックスの狂気がすべてを飲み込んだ。",
			"しかしその混沌の中、数多の自我の絶叫が感知された。",
			"電脳心理学者ジョイ、彼女は真実を見抜いた。",
			"それは一人の個人ではなかった。断片化された存在たちの合唱が。"
		],
		"chinese": [
			"城市的神经网络发出了尖叫。",
			"Syntax的疯狂吞噬了一切。",
			"然而在这混沌中，无数自我的尖叫被感知到了。",
			"赛博心理学家乔伊，她看穿了真相。",
			"那不是一个人。那是碎片化存在的合唱。"
		],
		"french": [
			"Le réseau neuronal de la ville hurlait.",
			"La folie de Syntax a tout dévoré.",
			"Pourtant, au milieu de ce chaos, les cris d'innombrables egos furent détectés.",
			"Joy, la cyber-psychologue, perça la vérité.",
			"Ce n'était pas un individu. C'était un chœur d'existences fragmentées."
		],
		"spanish": [
			"La red neuronal de la ciudad gritó.",
			"La locura de Syntax lo devoró todo.",
			"Sin embargo, en medio del caos, se detectaron los gritos de innumerables yoes.",
			"Joy, la ciberpsicóloga, perforó la verdad.",
			"No era un individuo. Era un coro de existencias fragmentadas."
		],
		"vietnamese": [
			"Mạng lưới thần kinh của thành phố đã thét lên.",
			"Sự điên loạn của Syntax đã nuốt chửng mọi thứ.",
			"Nhưng giữa hỗn loạn đó, những tiếng thét của vô số bản ngã đã được nhận ra.",
			"Joy, nhà tâm lý học không gian mạng, đã xuyên thấu sự thật.",
			"Đó không phải là một cá nhân. Mà là một hợp xướng của những tồn tại phân mảnh."
		],
		"thai": [
			"โครงข่ายประสาทของเมืองกรีดร้อง",
			"ความบ้าคลั่งของ Syntax กลืนกินทุกสิ่ง",
			"ทว่าท่ามกลางความโกลาหลนั้น เสียงกรีดร้องของตัวตนมากมายถูกตรวจพบ",
			"จอย นักจิตวิทยาไซเบอร์ เธอเจาะลึกความจริง",
			"ไม่ใช่คนๆ เดียว เป็นเสียงประสานของสรรพสิ่งที่แตกสลาย"
		],
		"hindi": [
			"शहर का न्यूरल नेटवर्क चीख उठा।",
			"सिंटैक्स के पागलपन ने सब कुछ निगल लिया।",
			"फिर भी उस अराजकता के बीच, अनगिनत आत्माओं की चीखें महसूस की गईं।",
			"साइबर-मनोवैज्ञानिक जॉय, उसने सच्चाई को भेद दिया।",
			"वह एक व्यक्ति नहीं था। यह खंडित अस्तित्वों का एक कोरस था।"
		]
	}
} as const;
