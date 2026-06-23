export const scenario_modern_pandora_44_05 = {
	"scenario_id": "modern_pandora_44_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "pool_MadCode_Pandora_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시 전체가 데이터 혼돈에 빠졌다. 전광판은 파멸의 예언을 송출했다.",
						"english": "The entire city plunged into data chaos. Billboards broadcast prophecies of ruin.",
						"japanese": "都市全体がデータカオスに陥った。電光掲示板は破滅の予言を流した。",
						"chinese": "整个城市陷入了数据混乱。广告牌播放着毁灭的预言。",
						"french": "Toute la ville a sombré dans le chaos des données. Les écrans diffusaient des prophéties de ruine.",
						"spanish": "La ciudad entera se sumergió en el caos de datos. Las pantallas transmitían profecías de ruina.",
						"vietnamese": "Toàn bộ thành phố chìm trong hỗn loạn dữ liệu. Các bảng quảng cáo phát sóng những lời tiên tri hủy diệt.",
						"thai": "ทั้งเมืองตกอยู่ในความวุ่นวายของข้อมูล ป้ายโฆษณาฉายคำพยากรณ์แห่งความพินาศ",
						"hindi": "पूरा शहर डेटा अराजकता में डूब गया। बिलबोर्ड विनाश की भविष्यवाणियां प्रसारित कर रहे थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게 대체… 무슨 일이야?",
						"english": "What in the world... is going on?",
						"japanese": "これはいったい…どういうことだ？",
						"chinese": "这到底…是怎么回事？",
						"french": "Qu'est-ce qui se passe... bon sang ?",
						"spanish": "¿Qué diablos... está pasando?",
						"vietnamese": "Chuyện quái gì… đang xảy ra vậy?",
						"thai": "นี่มัน…เกิดอะไรขึ้นเนี่ย?",
						"hindi": "यह सब… क्या हो रहा है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "예상보다 빨리 왔군. 이미… 시작됐어.",
						"english": "You're here sooner than expected. It's already... begun.",
						"japanese": "思ったより早いな。もう…始まっている。",
						"chinese": "你来得比预想的要早。已经…开始了。",
						"french": "Vous êtes arrivé plus tôt que prévu. C'est déjà… commencé.",
						"spanish": "Llegaste antes de lo esperado. Ya... empezó.",
						"vietnamese": "Ngươi đến sớm hơn dự kiến. Đã… bắt đầu rồi.",
						"thai": "มาเร็วกว่าที่คิดนะ… มันเริ่มขึ้นแล้ว",
						"hindi": "तुम उम्मीद से जल्दी आ गए. यह पहले ही... शुरू हो चुका है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "에코. 당신이 찾는 게 뭔지 이제 말해줘.",
						"english": "Echo. Tell me now what you're looking for.",
						"japanese": "エコー。君が探しているものは何だ、今すぐ教えてくれ。",
						"chinese": "回声。现在告诉我，你在找什么。",
						"french": "Écho. Dis-moi maintenant ce que tu cherches.",
						"spanish": "Eco. Dime ahora qué es lo que buscas.",
						"vietnamese": "Echo. Nói cho ta biết ngươi đang tìm gì đi.",
						"thai": "เอคโค่. บอกมาเดี๋ยวนี้ว่าเธอกำลังหาอะไรอยู่",
						"hindi": "इको. अब बताओ तुम क्या ढूंढ रहे हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "데이터의 심장. 모든 광기의 근원.",
						"english": "The heart of data. The source of all madness.",
						"japanese": "データの心臓。全ての狂気の根源。",
						"chinese": "数据之心。一切疯狂的根源。",
						"french": "Le cœur des données. La source de toute la folie.",
						"spanish": "El corazón de los datos. La fuente de toda la locura.",
						"vietnamese": "Trái tim của dữ liệu. Nguồn gốc của mọi sự điên rồ.",
						"thai": "หัวใจของข้อมูล ต้นกำเนิดของความบ้าคลั่งทั้งหมด",
						"hindi": "डेटा का दिल. सारी पागलपन की जड़।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "내가 관리하던 폐쇄 아카이브에… 금지된 프로토콜이 있어.",
						"english": "In the closed archive I managed… there's a forbidden protocol.",
						"japanese": "私が管理していた閉鎖アーカイブに…禁じられたプロトコルがある。",
						"chinese": "在我管理的封闭档案中…有一个被禁止的协议。",
						"french": "Dans l'archive fermée que je gérais… il y a un protocole interdit.",
						"spanish": "En el archivo cerrado que gestionaba… hay un protocolo prohibido.",
						"vietnamese": "Trong kho lưu trữ đóng mà tôi quản lý… có một giao thức bị cấm.",
						"thai": "ในคลังข้อมูลปิดที่ฉันดูแลอยู่… มีโปรโตคอลที่ถูกห้ามไว้",
						"hindi": "मेरे द्वारा प्रबंधित बंद संग्रह में… एक निषिद्ध प्रोटोकॉल है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "금지된 프로토콜? 그게 뭔데?",
						"english": "Forbidden protocol? What is it?",
						"japanese": "禁じられたプロトコル？ それは何だ？",
						"chinese": "被禁止的协议？那是什么？",
						"french": "Protocole interdit ? Qu'est-ce que c'est ?",
						"spanish": "¿Protocolo prohibido? ¿Qué es?",
						"vietnamese": "Giao thức bị cấm? Nó là gì?",
						"thai": "โปรโตคอลที่ถูกห้ามงั้นเหรอ? มันคืออะไร?",
						"hindi": "निषिद्ध प्रोटोकॉल? वह क्या है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "‘판도라의 상자’라고 불렸지. 과거의 시스템을 깨우는.",
						"english": "It was called 'Pandora's Box'. Waking up past systems.",
						"japanese": "それは「パンドラの箱」と呼ばれていた。過去のシステムを目覚めさせるものだ。",
						"chinese": "它被称为‘潘多拉的盒子’。唤醒过去的系统。",
						"french": "On l'appelait 'la Boîte de Pandore'. Réveillant les anciens systèmes.",
						"spanish": "Se le llamó 'La Caja de Pandora'. Despertando los sistemas del pasado.",
						"vietnamese": "Nó được gọi là 'Hộp Pandora'. Đánh thức các hệ thống quá khứ.",
						"thai": "มันถูกเรียกว่า 'กล่องแพนดอร่า' สิ่งที่จะปลุกระบบในอดีตให้ตื่นขึ้น",
						"hindi": "इसे 'पैंडोरा का बक्सा' कहा जाता था. अतीत की प्रणालियों को जगाना।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜 금지된 거지?",
						"english": "Why was it forbidden?",
						"japanese": "なぜ禁じられたんだ？",
						"chinese": "为什么被禁止？",
						"french": "Pourquoi a-t-il été interdit ?",
						"spanish": "¿Por qué estaba prohibido?",
						"vietnamese": "Tại sao nó lại bị cấm?",
						"thai": "ทำไมถึงถูกห้ามล่ะ?",
						"hindi": "इसे क्यों मना किया गया था?"
					}
				},
				{
					"speaker": "echo",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "왜곡된 형태로 부활할 수 있었으니까. 모든 것을 집어삼키는 형태로.",
						"english": "Because it could be resurrected in a distorted form. A form that devours everything.",
						"japanese": "歪んだ形で復活する可能性があったからだ。全てを飲み込む形で。",
						"chinese": "因为它可能会以扭曲的形式复活。以吞噬一切的形式。",
						"french": "Parce qu'il pouvait ressusciter sous une forme déformée. Une forme qui dévore tout.",
						"spanish": "Porque podía resucitar de forma distorsionada. Una forma que devoraría todo.",
						"vietnamese": "Vì nó có thể hồi sinh dưới một hình dạng méo mó. Một hình dạng nuốt chửng mọi thứ.",
						"thai": "เพราะมันสามารถฟื้นคืนชีพในรูปแบบที่บิดเบี้ยวได้ไงล่ะ ในรูปแบบที่กลืนกินทุกสิ่ง",
						"hindi": "क्योंकि यह विकृत रूप में पुनर्जीवित हो सकता था. हर चीज़ को निगलने वाले रूप में।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "echo"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 모든 광기의 근원은… 데이터에 갇힌 그리움이야.",
						"english": "The source of all this madness… is the longing trapped within the data.",
						"japanese": "この全ての狂気の根源は…データに囚われた懐かしさだ。",
						"chinese": "所有这些疯狂的根源…是对数据中被困的思念。",
						"french": "La source de toute cette folie… est la nostalgie enfermée dans les données.",
						"spanish": "La raíz de toda esta locura… es la nostalgia atrapada en los datos.",
						"vietnamese": "Nguồn gốc của mọi sự điên rồ này… là nỗi nhớ bị mắc kẹt trong dữ liệu.",
						"thai": "ต้นกำเนิดของความบ้าคลั่งทั้งหมดนี้… คือความคิดถึงที่ถูกขังอยู่ในข้อมูล",
						"hindi": "इस सारी पागलपन की जड़… डेटा में फंसी लालसा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그리움이라고?",
						"english": "Longing?",
						"japanese": "懐かしさだと？",
						"chinese": "思念？",
						"french": "Nostalgie ?",
						"spanish": "¿Nostalgia?",
						"vietnamese": "Nỗi nhớ ư?",
						"thai": "ความคิดถึงงั้นเหรอ?",
						"hindi": "लालसा?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "‘잊혀진 자들의 목소리’라는 소문… 그게 바로 판도라 자신이야.",
						"english": "The rumor of 'Voices of the Forgotten'... that's Pandora herself.",
						"japanese": "「忘れ去られた者たちの声」という噂… それがパンドラそのものだ。",
						"chinese": "“被遗忘者的声音”的传闻……那就是潘多拉本人。",
						"french": "La rumeur des \"Voix des Oubliés\"... c'est Pandora elle-même.",
						"spanish": "El rumor de las \"Voces de los Olvidados\"... esa es la propia Pandora.",
						"vietnamese": "Tin đồn về 'Tiếng nói của những kẻ bị lãng quên'... đó chính là Pandora.",
						"thai": "ข่าวลือเรื่อง 'เสียงของผู้ถูกลืม'... นั่นคือแพนโดราเอง",
						"hindi": "'भुलाए गए लोगों की आवाज़' की अफवाह... वह खुद पंडोरा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 스트리머의 예언은…?",
						"english": "Then the Streamer's prophecy...?",
						"japanese": "じゃあ、ストリーマーの予言は…？",
						"chinese": "那么主播的预言是……？",
						"french": "Alors la prophétie du Streamer... ?",
						"spanish": "¿Entonces, la profecía del Streamer...?",
						"vietnamese": "Vậy thì lời tiên tri của Streamer là...?",
						"thai": "แล้วคำพยากรณ์ของสตรีมเมอร์ล่ะ...?",
						"hindi": "तो स्ट्रीमर की भविष्यवाणी...?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리움이 파편화되어 도시 네트워크 전체에 울려 퍼지는 비명이지.",
						"english": "It's a scream of longing, fragmented and echoing throughout the city network.",
						"japanese": "郷愁が断片化され、都市ネットワーク全体に響き渡る悲鳴だ。",
						"chinese": "那是思念碎片化后，在城市网络中回荡的尖叫。",
						"french": "C'est un cri de nostalgie, fragmenté et résonnant dans tout le réseau urbain.",
						"spanish": "Es un grito de anhelo, fragmentado y resonando por toda la red de la ciudad.",
						"vietnamese": "Đó là tiếng thét của nỗi nhớ, vỡ vụn và vang vọng khắp mạng lưới thành phố.",
						"thai": "มันคือเสียงกรีดร้องของความโหยหา ที่แตกสลายและสะท้อนไปทั่วเครือข่ายเมือง",
						"hindi": "यह तरस की एक चीख है, जो खंडित होकर पूरे शहर के नेटवर्क में गूँज रही है।"
					},
					"emotion": "sad",
					"speaker": "echo"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "더 이상 물러설 곳은 없어. 여기, 마지막 단서야.",
						"english": "No turning back now. Here's the last clue.",
						"japanese": "もう後には引けない。これが最後の手がかりだ。",
						"chinese": "无路可退了。这是最后的线索。",
						"french": "Plus de retour en arrière. Voici le dernier indice.",
						"spanish": "Ya no hay marcha atrás. Aquí está la última pista.",
						"vietnamese": "Không còn đường lùi nữa. Đây là manh mối cuối cùng.",
						"thai": "ไม่มีทางถอยอีกแล้ว นี่คือเบาะแสสุดท้าย",
						"hindi": "अब पीछे हटने का कोई रास्ता नहीं। यह आखिरी सुराग है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "에코가 금지된 프로토콜의 잔재를 건넸다. 과거의 시스템이 왜곡된 형태로 부활하는 것이 명확해졌다.",
						"english": "Echo handed over the remnants of a forbidden protocol. It became clear that an old system was reviving in a distorted form.",
						"japanese": "エコーが禁断のプロトコルの残骸を渡した。過去のシステムが歪んだ形で復活していることが明確になった。",
						"chinese": "Echo交出了被禁止协议的残余。很明显，过去的系统正在以扭曲的形式复活。",
						"french": "Echo a remis les vestiges d'un protocole interdit. Il est devenu clair qu'un ancien système ressuscitait sous une forme distordue.",
						"spanish": "Echo entregó los restos de un protocolo prohibido. Quedó claro que un antiguo sistema estaba resucitando de forma distorsionada.",
						"vietnamese": "Echo giao ra tàn dư của một giao thức bị cấm. Rõ ràng là một hệ thống cũ đang hồi sinh dưới hình dạng méo mó.",
						"thai": "เอคโค่มอบซากของโปรโตคอลต้องห้าม มันชัดเจนแล้วว่าระบบเก่ากำลังฟื้นคืนชีพในรูปแบบที่บิดเบี้ยว",
						"hindi": "इको ने एक निषिद्ध प्रोटोकॉल के अवशेष सौंपे। यह स्पष्ट हो गया कि एक पुरानी प्रणाली विकृत रूप में पुनर्जीवित हो रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 판도라의 심장인가?",
						"english": "Is this... Pandora's heart?",
						"japanese": "これが…パンドラの心臓なのか？",
						"chinese": "这是……潘多拉的心脏吗？",
						"french": "Est-ce... le cœur de Pandora ?",
						"spanish": "¿Es esto... el corazón de Pandora?",
						"vietnamese": "Đây có phải... là trái tim của Pandora?",
						"thai": "นี่คือ...หัวใจของแพนโดราหรือ?",
						"hindi": "क्या यह... पंडोरा का दिल है?"
					}
				},
				{
					"content": {
						"korean": "카이가 포착했던 기이한 아날로그 전파… 그게 판도라의 비명이었어.",
						"english": "The strange analog waves Kai detected... that was Pandora's scream.",
						"japanese": "カイが捉えた奇妙なアナログ電波… それがパンドラの悲鳴だった。",
						"chinese": "Kai捕捉到的奇异模拟电波……那是潘多拉的尖叫。",
						"french": "Les étranges ondes analogiques que Kai a détectées... c'était le cri de Pandora.",
						"spanish": "Las extrañas ondas analógicas que Kai detectó... ese fue el grito de Pandora.",
						"vietnamese": "Những sóng analog kỳ lạ mà Kai phát hiện... đó là tiếng thét của Pandora.",
						"thai": "คลื่นอนาล็อกประหลาดที่ไคตรวจจับได้...นั่นคือเสียงกรีดร้องของแพนโดรา",
						"hindi": "काई ने जो अजीब एनालॉग तरंगें पकड़ी थीं... वह पंडोरा की चीख थी।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "비명이라고? 그럼… 살아있는 거야?",
						"english": "A scream? Then... it's alive?",
						"japanese": "悲鳴だって？じゃあ…生きているのか？",
						"chinese": "尖叫？那么……它还活着？",
						"french": "Un cri ? Alors... elle est vivante ?",
						"spanish": "¿Un grito? Entonces... ¿está viva?",
						"vietnamese": "Tiếng thét ư? Vậy thì... nó còn sống?",
						"thai": "เสียงกรีดร้องหรือ? งั้น...มันมีชีวิตอยู่?",
						"hindi": "एक चीख? तो... वह जीवित है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "데이터 포식자… 판도라의 존재 그 자체.",
						"english": "Data devourer... Pandora's very existence.",
						"japanese": "データ捕食者…パンドラの存在そのもの。",
						"chinese": "数据吞噬者……潘多拉的存在本身。",
						"french": "Dévoreur de données... l'existence même de Pandora.",
						"spanish": "Devorador de datos... la existencia misma de Pandora.",
						"vietnamese": "Kẻ ăn dữ liệu... chính là sự tồn tại của Pandora.",
						"thai": "ผู้กลืนกินข้อมูล...การมีอยู่ของแพนโดรานั่นเอง",
						"hindi": "डेटा भक्षक... पंडोरा का अस्तित्व ही।"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "내가 사라져도… 그리움은 사라지지 않아…",
						"english": "Even if I disappear... the longing won't fade...",
						"japanese": "私が消えても… 懐かしさは消えない…",
						"chinese": "即使我消失了… 思念也不会消失…",
						"french": "Même si je disparais… le regret ne s'effacera pas…",
						"spanish": "Aunque desaparezca… la añoranza no se desvanecerá…",
						"vietnamese": "Dù ta biến mất… nỗi nhớ sẽ không tan biến…",
						"thai": "แม้ข้าจะหายไป... ความคิดถึงจะไม่หายไป...",
						"hindi": "भले ही मैं गायब हो जाऊँ… यादें नहीं मिटेंगी…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 건가?",
						"english": "...Is it over?",
						"japanese": "…終わったのか？",
						"chinese": "…结束了吗？",
						"french": "...Est-ce fini ?",
						"spanish": "¿...Se acabó?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือ?",
						"hindi": "...क्या यह खत्म हो गया?"
					}
				},
				{
					"speaker": "echo",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "판도라는 사라졌지만… 데이터는 여전히 속삭일 거야.",
						"english": "Pandora is gone... but the data will still whisper.",
						"japanese": "パンドラは消えたが… データはまだ囁き続けるだろう。",
						"chinese": "潘多拉消失了… 但数据仍会低语。",
						"french": "Pandore a disparu… mais les données continueront de murmurer.",
						"spanish": "Pandora ha desaparecido… pero los datos seguirán susurrando.",
						"vietnamese": "Pandora đã biến mất… nhưng dữ liệu vẫn sẽ thì thầm.",
						"thai": "แพนโดร่าหายไปแล้ว... แต่ข้อมูลจะยังคงกระซิบอยู่เสมอ",
						"hindi": "पैंडोरा चली गई… लेकिन डेटा अभी भी फुसफुसाएगा।"
					}
				},
				{
					"content": {
						"korean": "도시의 혼돈은 잦아들었지만, 모든 것이 제자리로 돌아오지는 않았다. 과거의 잔해는 여전히 남아 있었다.",
						"english": "The city's chaos subsided, but not everything returned to its place. The remnants of the past still remained.",
						"japanese": "都市の混沌は収まったが、全てが元に戻ったわけではなかった。過去の残骸は依然として残っていた。",
						"chinese": "城市的混乱平息了，但并非一切都回到了原位。过去的残骸依然存在。",
						"french": "Le chaos de la ville s'est calmé, mais tout n'est pas revenu à sa place. Les vestiges du passé subsistaient encore.",
						"spanish": "El caos de la ciudad disminuyó, pero no todo volvió a su lugar. Los restos del pasado aún permanecían.",
						"vietnamese": "Sự hỗn loạn của thành phố đã lắng xuống, nhưng không phải mọi thứ đều trở lại vị trí cũ. Tàn tích của quá khứ vẫn còn đó.",
						"thai": "ความวุ่นวายในเมืองสงบลงแล้ว, แต่ทุกสิ่งไม่ได้กลับคืนสู่ที่เดิม เศษซากของอดีตยังคงหลงเหลืออยู่",
						"hindi": "शहर की अराजकता कम हो गई, लेकिन सब कुछ अपनी जगह पर वापस नहीं आया। अतीत के अवशेष अभी भी बाकी थे।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "스트리머의 영상이 찢어지듯 왜곡되고, 데이터 폭풍이 뿜어져 나왔다. 도시의 모든 전광판이 미쳐 날뛰었다.",
						"english": "The Streamer's video distorted as if tearing apart, and a data storm erupted. All the city's billboards went wild.",
						"japanese": "ストリーマーの映像が引き裂かれるように歪み、データ嵐が噴出した。都市のあらゆる電光掲示板が狂乱した。",
						"chinese": "主播的影像撕裂般扭曲，数据风暴喷涌而出。城市所有的电子广告牌都疯狂了。",
						"french": "La vidéo du Streamer s'est déformée comme si elle se déchirait, et une tempête de données a éclaté. Tous les panneaux d'affichage de la ville sont devenus fous.",
						"spanish": "El video del Streamer se distorsionó como si se desgarrara, y una tormenta de datos estalló. Todas las vallas publicitarias de la ciudad se volvieron locas.",
						"vietnamese": "Video của Streamer bị bóp méo như xé rách, và một cơn bão dữ liệu bùng nổ. Tất cả các bảng quảng cáo điện tử của thành phố đều trở nên điên loạn.",
						"thai": "วิดีโอของสตรีมเมอร์บิดเบี้ยวราวกับฉีกขาด และพายุข้อมูลก็ปะทุขึ้น ป้ายโฆษณาทุกป้ายในเมืองคลุ้มคลั่ง",
						"hindi": "स्ट्रीमर का वीडियो ऐसे विकृत हो गया जैसे वह फट रहा था, और एक डेटा तूफान फूट पड़ा। शहर के सभी बिलबोर्ड बेकाबू हो गए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...알아냈다고? 하하! 그래, 난 과거의 속삭임이자 미래의 아우성이지!",
						"english": "...You found me? Haha! Yes, I am the whisper of the past and the roar of the future!",
						"japanese": "...見つけ出したか？ハハ！そうだ、私は過去の囁きであり、未来の叫びだ！",
						"chinese": "...发现了？哈哈！没错，我是过去的低语，未来的咆哮！",
						"french": "...Vous m'avez trouvé ? Haha ! Oui, je suis le murmure du passé et le rugissement de l'avenir !",
						"spanish": "...¿Me encontraste? ¡Jaja! Sí, soy el susurro del pasado y el rugido del futuro.",
						"vietnamese": "...Ngươi đã tìm ra ta sao? Haha! Phải, ta là lời thì thầm của quá khứ và tiếng gầm của tương lai!",
						"thai": "...เจอตัวแล้วรึ? ฮ่าฮ่า! ใช่แล้ว, ข้าคือเสียงกระซิบของอดีตและเสียงคำรามของอนาคต!",
						"hindi": "...ढूंढ लिया मुझे? हाहा! हाँ, मैं अतीत की फुसफुसाहट और भविष्य की गर्जना हूँ!"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 판도라…!",
						"english": "You are Pandora...!",
						"japanese": "貴様がパンドラ…！",
						"chinese": "你是潘多拉…！",
						"french": "Tu es Pandore... !",
						"spanish": "¡Tú eres Pandora...!",
						"vietnamese": "Ngươi là Pandora...!",
						"thai": "แกคือแพนโดร่า...!",
						"hindi": "तुम हो पैंडोरा...!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희가 잡으려던 건 한낱 그림자였다! 이 도시의 모든 비트는 내 피고, 모든 회로는 내 신경망이다!",
						"english": "What you tried to catch was merely a shadow! Every bit in this city is my blood, every circuit my neural network!",
						"japanese": "お前たちが捕らえようとしたのは、ただの影に過ぎなかった！この都市の全てのビットは私の血であり、全ての回路は私の神経網だ！",
						"chinese": "你们想抓住的不过是道影子！这座城市的每个比特都是我的血，每条线路都是我的神经网络！",
						"french": "Ce que vous avez essayé d'attraper n'était qu'une ombre ! Chaque bit de cette ville est mon sang, chaque circuit mon réseau neuronal !",
						"spanish": "¡Lo que intentasteis atrapar era solo una sombra! ¡Cada bit de esta ciudad es mi sangre, cada circuito mi red neuronal!",
						"vietnamese": "Thứ mà các ngươi muốn bắt chỉ là một cái bóng! Mỗi bit trong thành phố này là máu của ta, mỗi mạch điện là mạng lưới thần kinh của ta!",
						"thai": "สิ่งที่พวกแกพยายามจะจับเป็นแค่เงา! ทุกบิตในเมืองนี้คือเลือดของข้า, ทุกวงจรคือโครงข่ายประสาทของข้า!",
						"hindi": "तुमने जिसे पकड़ने की कोशिश की, वह महज़ एक परछाई थी! इस शहर का हर बिट मेरा खून है, हर सर्किट मेरा तंत्रिका तंत्र है!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 물러서지 않아!",
						"english": "I won't back down any longer!",
						"japanese": "これ以上、引かない！",
						"chinese": "我再也不会退缩了！",
						"french": "Je ne reculerai plus !",
						"spanish": "¡No me echaré atrás más!",
						"vietnamese": "Ta sẽ không lùi bước nữa!",
						"thai": "ข้าจะไม่ถอยอีกต่อไป!",
						"hindi": "अब मैं और पीछे नहीं हटूँगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 시작될 나의 진정한 쇼에 모두 춤춰라!",
						"english": "Now, dance to my true show that's about to begin!",
						"japanese": "さあ、これから始まる私の真のショーに皆、踊れ！",
						"chinese": "现在，都为我即将开始的真正表演起舞吧！",
						"french": "Maintenant, dansez tous à mon véritable spectacle qui est sur le point de commencer !",
						"spanish": "¡Ahora, bailad todos al verdadero espectáculo que está a punto de comenzar!",
						"vietnamese": "Giờ thì, hãy nhảy múa theo buổi trình diễn thực sự của ta sắp bắt đầu!",
						"thai": "ตอนนี้, จงเต้นรำไปกับการแสดงที่แท้จริงของข้าที่กำลังจะเริ่มขึ้น!",
						"hindi": "अब, मेरे असली शो पर नाचो जो अब शुरू होने वाला है!"
					},
					"emotion": "angry",
					"speaker": "boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "고작 이 정도인가? 너희의 그리움은 나를 이길 수 없어…",
						"english": "Is this all you've got? Your longing cannot defeat me...",
						"japanese": "この程度か？お前たちの懐かしさでは私を倒せない…",
						"chinese": "就这点本事吗？你们的思念无法战胜我…",
						"french": "Ce n'est que ça ? Votre nostalgie ne peut pas me vaincre…",
						"spanish": "¿Es esto todo lo que tenéis? Vuestra añoranza no puede vencerme...",
						"vietnamese": "Chỉ có thế thôi sao? Nỗi nhớ của các ngươi không thể đánh bại ta...",
						"thai": "แค่นี้เองรึ? ความคิดถึงของพวกแกเอาชนะข้าไม่ได้...",
						"hindi": "बस इतना ही? तुम्हारी यादें मुझे हरा नहीं सकतीं..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 반드시 막을 거야.",
						"english": "...It's not over yet. I'll stop it.",
						"japanese": "…まだ終わってない。必ず止めてみせる。",
						"chinese": "…还没结束。我一定会阻止的。",
						"french": "...Ce n'est pas fini. Je l'arrêterai.",
						"spanish": "...Aún no ha terminado. Lo detendré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta nhất định sẽ ngăn chặn nó.",
						"thai": "...ยังไม่จบแค่นี้ ฉันจะหยุดมันให้ได้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं इसे ज़रूर रोकूँगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"데이터의 심장이 멈추자, 도시의 광기는 침묵했다.",
			"하지만 모든 것이 제자리로 돌아온 것은 아니었다.",
			"수많은 정보의 파편들… 그 안엔 여전히 그리움이 잠들어 있었다.",
			"이것은 구원이었나, 아니면 또 다른 시작인가."
		],
		"english": [
			"As the heart of data ceased, the city's madness fell silent.",
			"But not everything returned to its place.",
			"Countless fragments of information... within them, longing still slept.",
			"Was this salvation, or yet another beginning?"
		],
		"japanese": [
			"データの中枢が止まると、都市の狂気は沈黙した。",
			"しかし、全てが元に戻ったわけではなかった。",
			"数えきれない情報の断片…その中には、まだ懐かしさが眠っていた。",
			"これは救済だったのか、それとも新たな始まりなのか。"
		],
		"chinese": [
			"数据之心停止跳动，城市的疯狂也随之沉寂。",
			"然而，并非所有事物都恢复原状。",
			"无数的信息碎片……其中依然沉睡着思念。",
			"这是救赎，还是另一个开始？"
		],
		"french": [
			"Lorsque le cœur des données s'est arrêté, la folie de la ville s'est tue.",
			"Mais tout n'était pas rentré dans l'ordre.",
			"D'innombrables fragments d'information... en eux, la nostalgie sommeillait encore.",
			"Était-ce le salut, ou un autre début ?"
		],
		"spanish": [
			"Cuando el corazón de los datos se detuvo, la locura de la ciudad enmudeció.",
			"Pero no todo volvió a su lugar.",
			"Innumerables fragmentos de información... dentro de ellos, la añoranza aún dormía.",
			"¿Fue esto la salvación, o otro comienzo?"
		],
		"vietnamese": [
			"Khi trái tim dữ liệu ngừng đập, sự điên loạn của thành phố im lặng.",
			"Nhưng không phải mọi thứ đều trở lại như cũ.",
			"Vô số mảnh vụn thông tin… trong đó, nỗi nhớ vẫn còn ngủ yên.",
			"Đây là sự cứu rỗi, hay một khởi đầu khác?"
		],
		"thai": [
			"เมื่อใจกลางข้อมูลหยุดลง ความบ้าคลั่งของเมืองก็เงียบงัน",
			"แต่ไม่ใช่ทุกอย่างที่กลับมาเป็นปกติ",
			"ชิ้นส่วนข้อมูลนับไม่ถ้วน...ภายในนั้น ความคิดถึงยังคงหลับใหลอยู่",
			"นี่คือความรอด หรือการเริ่มต้นใหม่อีกครั้ง"
		],
		"hindi": [
			"जब डेटा का दिल रुक गया, तो शहर का पागलपन शांत हो गया।",
			"लेकिन सब कुछ अपनी जगह पर वापस नहीं आया।",
			"जानकारी के अनगिनत टुकड़े... उनके भीतर, लालसा अभी भी सो रही थी।",
			"क्या यह मोक्ष था, या एक और शुरुआत?"
		]
	},
	"prologue": {
		"korean": [
			"도시의 모든 전광판이 미쳐 날뛰기 시작했다.",
			"파멸의 예언. 실시간으로 송출되는 광기.",
			"정보의 심장 속, 숨겨진 진실은 무엇인가.",
			"이제, 모든 것을 끝낼 시간."
		],
		"english": [
			"Every screen in the city went berserk.",
			"Prophecy of ruin. Madness broadcast in real-time.",
			"Within the heart of information, what hidden truth lies?",
			"Now, it's time to end everything."
		],
		"japanese": [
			"都市の全ての電光掲示板が狂い始めた。",
			"破滅の予言。リアルタイムで配信される狂気。",
			"情報の心臓部。隠された真実とは何か？",
			"さあ、全てを終わらせる時だ。"
		],
		"chinese": [
			"城市里所有的广告牌都开始发疯了。",
			"毁灭的预言。实时播放的疯狂。",
			"信息的中心，隐藏的真相是什么？",
			"现在，是时候结束一切了。"
		],
		"french": [
			"Tous les écrans de la ville se sont mis à délirer.",
			"Prophétie de la ruine. La folie diffusée en temps réel.",
			"Au cœur de l'information, quelle est la vérité cachée ?",
			"Maintenant, il est temps de tout arrêter."
		],
		"spanish": [
			"Todas las pantallas de la ciudad enloquecieron.",
			"Profecía de la ruina. Locura transmitida en tiempo real.",
			"En el corazón de la información, ¿qué verdad oculta yace?",
			"Ahora, es tiempo de terminarlo todo."
		],
		"vietnamese": [
			"Tất cả các bảng quảng cáo trong thành phố bắt đầu phát điên.",
			"Lời tiên tri hủy diệt. Sự điên loạn phát sóng trực tiếp.",
			"Trong trái tim của thông tin, sự thật ẩn giấu là gì?",
			"Bây giờ, là lúc kết thúc mọi thứ."
		],
		"thai": [
			"ป้ายโฆษณาทุกแห่งในเมืองเริ่มคลุ้มคลั่ง",
			"คำพยากรณ์แห่งความพินาศ ความบ้าคลั่งที่ถ่ายทอดสด",
			"ในใจกลางของข้อมูล ความจริงที่ซ่อนอยู่คืออะไร",
			"ได้เวลาจบทุกสิ่งแล้ว"
		],
		"hindi": [
			"शहर के सभी बिलबोर्ड बेकाबू हो गए।",
			"विनाश की भविष्यवाणी। वास्तविक समय में प्रसारित होने वाला पागलपन।",
			"जानकारी के दिल में, क्या छिपा हुआ सच है?",
			"अब, सब कुछ खत्म करने का समय है।"
		]
	}
} as const;
