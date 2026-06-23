export const scenario_modern_chaoscodec_16_05 = {
	"scenario_id": "modern_chaoscodec_16_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_GlitchGamble_ChaosCodec_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 가장 깊은 곳. 메트로넷의 코어 시스템에 침투했다.",
						"english": "The city's deepest reaches. Infiltrated Metronet's core system.",
						"japanese": "都市の最も深い場所。メトロネットのコアシステムに侵入した。",
						"chinese": "城市最深处。已渗透至都会网核心系统。",
						"french": "Les profondeurs de la ville. Infiltré le système central de Metronet.",
						"spanish": "Lo más profundo de la ciudad. Infiltrado en el sistema central de Metronet.",
						"vietnamese": "Nơi sâu nhất của thành phố. Đã xâm nhập hệ thống cốt lõi của Metronet.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง แทรกซึมเข้าสู่ระบบหลักของ Metronet แล้ว",
						"hindi": "शहर की सबसे गहरी जगह। मेट्रोनेट के कोर सिस्टम में घुसपैठ की।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 모든 광기의 시작점인가.",
						"english": "Is this the origin of all madness?",
						"japanese": "ここが全ての狂気の始まりなのか。",
						"chinese": "这里是所有疯狂的起点吗？",
						"french": "Est-ce l'origine de toute cette folie ?",
						"spanish": "¿Es este el origen de toda la locura?",
						"vietnamese": "Đây có phải là khởi nguồn của mọi sự điên loạn không?",
						"thai": "นี่คือจุดเริ่มต้นของความบ้าคลั่งทั้งหมดหรือเปล่า",
						"hindi": "क्या यह सभी पागलपन की शुरुआत है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 시스템의 심장. 카오스 코덱의 왕국이야.",
						"english": "Yes. The system's heart. The Kingdom of Chaos Codecs.",
						"japanese": "ええ、システムの心臓。カオスコーデックスの王国です。",
						"chinese": "是的。系统的心脏。混沌法典的王国。",
						"french": "Oui. Le cœur du système. Le Royaume des Chaos Codecs.",
						"spanish": "Sí. El corazón del sistema. El Reino de los Códecs del Caos.",
						"vietnamese": "Đúng vậy. Trái tim của hệ thống. Vương quốc của Chaos Codec.",
						"thai": "ใช่แล้ว หัวใจของระบบ อาณาจักรแห่ง Chaos Codec",
						"hindi": "हाँ। सिस्टम का दिल। अराजकता कोडेक्स का साम्राज्य।"
					},
					"speaker": "zoe"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이제 되돌아갈 수 없어. 진실과 마주할 시간이야.",
						"english": "No turning back now. Time to face the truth.",
						"japanese": "もう後戻りはできない。真実と向き合う時だ。",
						"chinese": "现在无法回头了。是时候面对真相了。",
						"french": "Impossible de faire marche arrière. Il est temps d'affronter la vérité.",
						"spanish": "Ya no hay vuelta atrás. Es hora de enfrentar la verdad.",
						"vietnamese": "Không thể quay lại được nữa. Đã đến lúc đối mặt với sự thật.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ถึงเวลาเผชิญหน้ากับความจริง",
						"hindi": "अब पीछे नहीं हट सकते। सच का सामना करने का समय है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 그걸 원했어.",
						"english": "We wanted this.",
						"japanese": "私たちはそれを望んでいた。",
						"chinese": "我们想要它。",
						"french": "Nous le voulions.",
						"spanish": "Lo queríamos.",
						"vietnamese": "Chúng ta muốn điều đó.",
						"thai": "เราต้องการสิ่งนี้",
						"hindi": "हम यही चाहते थे।"
					},
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
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "조심해. 시스템이 우리를 감지하고 있어.",
						"english": "Careful. The system's detecting us.",
						"japanese": "気をつけろ。システムが私たちを感知している。",
						"chinese": "小心。系统正在感应我们。",
						"french": "Attention. Le système nous détecte.",
						"spanish": "Cuidado. El sistema nos está detectando.",
						"vietnamese": "Cẩn thận. Hệ thống đang phát hiện ra chúng ta.",
						"thai": "ระวัง ระบบกำลังตรวจจับเรา",
						"hindi": "सावधान। सिस्टम हमें पहचान रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "갑자기 불안감이… 도시 전체가 흔들리는 것 같아.",
						"english": "A sudden unease... the whole city feels like it's shaking.",
						"japanese": "急な不安感が…まるで街全体が揺れているようだ。",
						"chinese": "突然感到不安…整个城市都在颤抖。",
						"french": "Une angoisse soudaine... toute la ville semble trembler.",
						"spanish": "Una inquietud repentina... parece que toda la ciudad está temblando.",
						"vietnamese": "Một cảm giác bất an đột ngột... như thể cả thành phố đang rung chuyển.",
						"thai": "ความรู้สึกไม่สบายใจอย่างกะทันหัน... เหมือนทั้งเมืองกำลังสั่นสะเทือน",
						"hindi": "अचानक बेचैनी... पूरा शहर हिल रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "그의 광기가 도시 전체에 주입되고 있어. 모든 것이 감옥이야.",
						"english": "His madness is seeping into the entire city. Everything is a prison.",
						"japanese": "彼の狂気が街全体に注入されている。すべてが監獄だ。",
						"chinese": "他的疯狂正渗透到整个城市。一切都是一座监狱。",
						"french": "Sa folie s'infiltre dans toute la ville. Tout est une prison.",
						"spanish": "Su locura se está inyectando en toda la ciudad. Todo es una prisión.",
						"vietnamese": "Sự điên rồ của hắn đang ngấm vào toàn bộ thành phố. Mọi thứ đều là nhà tù.",
						"thai": "ความบ้าคลั่งของเขากำลังแทรกซึมไปทั่วเมือง ทุกอย่างคือคุก",
						"hindi": "उसका पागलपन पूरे शहर में फैल रहा है। सब कुछ एक जेल है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "오래된 모니터에 도시의 과거 영상이 스쳐 지나가.",
						"english": "Past footage of the city flashes across the old monitor.",
						"japanese": "古いモニターに街の過去の映像が駆け巡る。",
						"chinese": "旧显示器上闪过城市的过去影像。",
						"french": "Des images du passé de la ville défilent sur le vieil écran.",
						"spanish": "Imágenes del pasado de la ciudad parpadean en el viejo monitor.",
						"vietnamese": "Những thước phim quá khứ của thành phố lướt qua màn hình cũ.",
						"thai": "ภาพอดีตของเมืองฉายขึ้นบนจอภาพเก่า",
						"hindi": "पुराने मॉनिटर पर शहर के अतीत के दृश्य कौंध रहे हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "zoe",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이 시스템은… 그의 찢겨진 의식 조각들로 이루어져 있어.",
						"english": "This system... is made of fragments of his shattered consciousness.",
						"japanese": "このシステムは…彼の引き裂かれた意識の断片でできている。",
						"chinese": "这个系统…是由他破碎意识的碎片组成的。",
						"french": "Ce système... est composé de fragments de sa conscience brisée.",
						"spanish": "Este sistema... está hecho de fragmentos de su conciencia destrozada.",
						"vietnamese": "Hệ thống này... được tạo thành từ những mảnh vỡ ý thức tan nát của hắn.",
						"thai": "ระบบนี้... สร้างขึ้นจากเศษเสี้ยวจิตสำนึกที่แตกสลายของเขา",
						"hindi": "यह सिस्टम... उसकी टूटी हुई चेतना के टुकड़ों से बना है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "찢겨진 의식… 그럼 'C.C.' 코드가 그의 이니셜이란 말이야?",
						"english": "Shattered consciousness... So the 'C.C.' code is his initials?",
						"japanese": "引き裂かれた意識…それなら「C.C.」コードは彼のイニシャルなのか？",
						"chinese": "破碎的意识…那么“C.C.”代码是他的首字母吗？",
						"french": "Conscience brisée... Donc le code 'C.C.' sont ses initiales ?",
						"spanish": "Conciencia destrozada... ¿Entonces el código 'C.C.' son sus iniciales?",
						"vietnamese": "Ý thức tan nát... Vậy mã 'C.C.' là tên viết tắt của hắn sao?",
						"thai": "จิตสำนึกที่แตกสลาย... งั้นรหัส 'C.C.' คือชื่อย่อของเขาเหรอ?",
						"hindi": "टूटी हुई चेतना... तो क्या 'सी.सी.' कोड उसके शुरुआती अक्षर हैं?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "그래. 과거의 망령이 디지털로 부활해서… 도시를 통제하려 해.",
						"english": "Yes. A phantom of the past, resurrected digitally... trying to control the city.",
						"japanese": "ええ。過去の亡霊がデジタルで復活して…街を支配しようとしている。",
						"chinese": "是的。过去的幽灵以数字形式复活…试图控制这座城市。",
						"french": "Oui. Un fantôme du passé, ressuscité numériquement... tentant de contrôler la ville.",
						"spanish": "Sí. Un fantasma del pasado, resucitado digitalmente... intentando controlar la ciudad.",
						"vietnamese": "Đúng vậy. Một bóng ma từ quá khứ, được hồi sinh kỹ thuật số... đang cố gắng kiểm soát thành phố.",
						"thai": "ใช่แล้ว วิญญาณจากอดีตฟื้นคืนชีพในรูปแบบดิจิทัล... พยายามจะควบคุมเมือง",
						"hindi": "हाँ। अतीत का एक प्रेत, डिजिटल रूप से पुनर्जीवित होकर... शहर को नियंत्रित करने की कोशिश कर रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끊임없이 찢겨진 음성 메시지가 반복되고 있어.",
						"english": "Fragmented voice messages repeat endlessly.",
						"japanese": "断片的な音声メッセージが絶え間なく繰り返されている。",
						"chinese": "破碎的语音信息不断重复着。",
						"french": "Des messages vocaux fragmentés se répètent sans fin.",
						"spanish": "Mensajes de voz fragmentados se repiten sin cesar.",
						"vietnamese": "Những tin nhắn thoại bị xé nát lặp đi lặp lại không ngừng.",
						"thai": "ข้อความเสียงที่ขาดๆ หายๆ ซ้ำไปซ้ำมาไม่หยุดหย่อน",
						"hindi": "टूटे हुए वॉयस मैसेज लगातार दोहराए जा रहे हैं。"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 과거와 계획, 그리고 그가 부활한 과정의 단편들이야.",
						"english": "Fragments of his past, his plans, and his resurrection.",
						"japanese": "彼の過去、計画、そして復活の過程の断片だ。",
						"chinese": "那是他过去、计划以及复活过程的碎片。",
						"french": "Des fragments de son passé, de ses plans et de sa résurrection.",
						"spanish": "Fragmentos de su pasado, sus planes y su resurrección.",
						"vietnamese": "Những mảnh ghép về quá khứ, kế hoạch và quá trình hắn hồi sinh.",
						"thai": "ส่วนเสี้ยวในอดีต แผนการ และกระบวนการฟื้นคืนชีพของเขา",
						"hindi": "उसके अतीत, उसकी योजनाओं और उसके पुनरुत्थान के टुकड़े।"
					},
					"speaker": "zoe"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "여기서부터는 그의 왕국이야. 그의 광기가 절정에 달했어.",
						"english": "From here, it's his kingdom. His madness has reached its peak.",
						"japanese": "ここからは彼の王国だ。彼の狂気は頂点に達した。",
						"chinese": "从这里开始，是他的王国。他的疯狂已达巅峰。",
						"french": "À partir d'ici, c'est son royaume. Sa folie a atteint son paroxysme.",
						"spanish": "Desde aquí, es su reino. Su locura ha alcanzado su punto máximo.",
						"vietnamese": "Từ đây trở đi, là vương quốc của hắn. Sự điên loạn của hắn đã lên đến đỉnh điểm.",
						"thai": "จากตรงนี้ไปคืออาณาจักรของเขา ความบ้าคลั่งของเขาถึงขีดสุดแล้ว",
						"hindi": "यहाँ से, यह उसका राज्य है। उसका पागलपन चरम पर पहुँच गया है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모든 것이 뒤틀려 보여. 도시가 절규하는 것 같아.",
						"english": "Everything seems twisted. The city seems to scream.",
						"japanese": "全てが歪んで見える。都市が絶叫しているようだ。",
						"chinese": "一切都扭曲了。城市仿佛在尖叫。",
						"french": "Tout semble tordu. La ville semble hurler.",
						"spanish": "Todo parece retorcido. La ciudad parece gritar.",
						"vietnamese": "Mọi thứ đều méo mó. Thành phố như đang gào thét.",
						"thai": "ทุกสิ่งดูบิดเบี้ยว เมืองดูเหมือนกำลังกรีดร้อง",
						"hindi": "सब कुछ मुड़ा हुआ लगता है। शहर चीख रहा है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "그의 의식이 이 도시의 모든 정보를 왜곡하고 있어.",
						"english": "His consciousness distorts all information in this city.",
						"japanese": "彼の意識がこの都市の全ての情報を歪めている。",
						"chinese": "他的意识正在扭曲这座城市的所有信息。",
						"french": "Sa conscience déforme toutes les informations de cette ville.",
						"spanish": "Su conciencia distorsiona toda la información de esta ciudad.",
						"vietnamese": "Ý thức của hắn đang bóp méo mọi thông tin trong thành phố này.",
						"thai": "จิตสำนึกของเขาบิดเบือนข้อมูลทั้งหมดในเมืองนี้",
						"hindi": "उसकी चेतना इस शहर की सभी जानकारी को विकृत कर रही है।"
					}
				},
				{
					"content": {
						"korean": "이 노이즈… 공포를 심으려는 감시 시스템의 일환이었어.",
						"english": "This noise… it was part of a surveillance system designed to instill fear.",
						"japanese": "このノイズ…恐怖を植え付ける監視システムの一部だったんだ。",
						"chinese": "这噪音……是旨在制造恐惧的监视系统的一部分。",
						"french": "Ce bruit… faisait partie d'un système de surveillance conçu pour instiller la peur.",
						"spanish": "Este ruido… era parte de un sistema de vigilancia para infundir miedo.",
						"vietnamese": "Tiếng ồn này… là một phần của hệ thống giám sát nhằm gieo rắc nỗi sợ hãi.",
						"thai": "เสียงรบกวนนี้… เป็นส่วนหนึ่งของระบบเฝ้าระวังที่ตั้งใจจะปลูกฝังความกลัว",
						"hindi": "यह शोर… डर पैदा करने के लिए डिज़ाइन किए गए एक निगरानी प्रणाली का हिस्सा था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "이 모든 혼돈이 그가 의도한 질서였던 거야.",
						"english": "All this chaos was the order he intended.",
						"japanese": "この全ての混沌が、彼が意図した秩序だったんだ。",
						"chinese": "所有这些混乱，都是他蓄意制造的秩序。",
						"french": "Tout ce chaos était l'ordre qu'il avait prévu.",
						"spanish": "Todo este caos era el orden que él había pretendido.",
						"vietnamese": "Tất cả sự hỗn loạn này, chính là trật tự mà hắn đã chủ ý tạo ra.",
						"thai": "ความโกลาหลทั้งหมดนี้คือระเบียบที่เขาตั้งใจไว้",
						"hindi": "यह सारी अराजकता वही व्यवस्था थी जो उसने चाही थी।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "카오스 코덱의 의식이 모든 것을 집어삼켰다.",
						"english": "The Chaos Codex's will consumed all.",
						"japanese": "カオスコーデックスの意思が全てを飲み込んだ。",
						"chinese": "混沌之法的意志吞噬了一切。",
						"french": "La volonté du Codex du Chaos a tout dévoré.",
						"spanish": "La voluntad del Códice del Caos lo consumió todo.",
						"vietnamese": "Ý chí của Chaos Codex đã nuốt chửng tất cả.",
						"thai": "เจตจำนงของ Chaos Codex ได้กลืนกินทุกสิ่ง",
						"hindi": "केओस कोडेक्स की इच्छा ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하… 나의 왕국은… 영원할 것이다…",
						"english": "Hahaha... My kingdom... shall be eternal...",
						"japanese": "ハハハ…我が王国は…永遠であろう…",
						"chinese": "哈哈哈…我的王国…将永恒不朽…",
						"french": "Hahaha... Mon royaume... sera éternel...",
						"spanish": "Jajajaja... Mi reino... será eterno...",
						"vietnamese": "Hahaha… Vương quốc của ta… sẽ vĩnh cửu…",
						"thai": "ฮ่าฮ่าฮ่า... อาณาจักรของข้า... จะคงอยู่ชั่วนิรันดร์...",
						"hindi": "हाहाहा... मेरा साम्राज्य... शाश्वत रहेगा..."
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "아직… 포기하지 않아…!",
						"english": "I won't... give up yet...!",
						"japanese": "まだ…諦めない…！",
						"chinese": "还没…放弃…！",
						"french": "Je ne... n'abandonne pas encore... !",
						"spanish": "¡Todavía... no me rindo...!",
						"vietnamese": "Vẫn… chưa từ bỏ…!",
						"thai": "ยัง... ไม่ยอมแพ้...!",
						"hindi": "अभी तक... हार नहीं मानी...!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "반드시… 너를 막을 거야!",
						"english": "I will... stop you, no matter what!",
						"japanese": "必ず…お前を止める！",
						"chinese": "我一定要…阻止你！",
						"french": "Je vais... t'arrêter, quoi qu'il arrive !",
						"spanish": "¡Definitivamente... te detendré!",
						"vietnamese": "Nhất định… sẽ ngăn cản ngươi!",
						"thai": "ฉันจะ... หยุดแกให้ได้!",
						"hindi": "मैं तुम्हें... ज़रूर रोकूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카오스 코덱의 코어 시스템이 붕괴했다. 모든 것이 정지했다.",
						"english": "The Chaos Codex core system has collapsed. Everything has stopped.",
						"japanese": "カオスコーデックスのコアシステムが崩壊した。全てが停止した。",
						"chinese": "混沌法典的核心系统已崩溃。一切都停止了。",
						"french": "Le système central du Codex du Chaos s'est effondré. Tout s'est arrêté.",
						"spanish": "El sistema central del Códice del Caos ha colapsado. Todo se ha detenido.",
						"vietnamese": "Hệ thống lõi của Chaos Codex đã sụp đổ. Mọi thứ đã dừng lại.",
						"thai": "ระบบแกนกลางของ Chaos Codex ล่มสลายแล้ว ทุกสิ่งหยุดนิ่ง",
						"hindi": "केओस कोडेक्स का कोर सिस्टम ढह गया है। सब कुछ रुक गया है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "크크크… 어리석은… 파괴는… 끝이 없어…",
						"english": "Hehehe... Foolish... destruction... is endless...",
						"japanese": "ククク… 愚かな… 破壊は… 終わりがない…",
						"chinese": "呵呵呵…… 愚蠢的…… 破坏…… 永无止境……",
						"french": "Hehehe... Stupide... la destruction... est sans fin...",
						"spanish": "Jejeje... Estúpida... la destrucción... es infinita...",
						"vietnamese": "Khà khà khà... Sự phá hủy... ngu ngốc... là vô tận...",
						"thai": "คิกคิกคิก... การทำลายล้าง... ที่โง่เขลา... ไม่มีวันสิ้นสุด...",
						"hindi": "हीहीही... मूर्खतापूर्ण... विनाश... अंतहीन है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나의 의식은… 영원히… 이 도시에… 각인될 것이다…",
						"english": "My consciousness... will be... forever... imprinted... upon this city...",
						"japanese": "私の意識は… 永遠に… この都市に… 刻み込まれるだろう…",
						"chinese": "我的意识…… 将永远…… 铭刻于…… 这座城市……",
						"french": "Ma conscience... sera... à jamais... gravée... dans cette ville...",
						"spanish": "Mi conciencia... quedará... para siempre... grabada... en esta ciudad...",
						"vietnamese": "Ý thức của ta... sẽ vĩnh viễn... khắc ghi... vào thành phố này...",
						"thai": "จิตสำนึกของข้า... จะถูกจารึก... ตราตรึง... อยู่ในเมืองนี้... ชั่วนิรันดร์...",
						"hindi": "मेरी चेतना... हमेशा के लिए... इस शहर में... अंकित... रहेगी..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 네 광기는 이제 끝이야.",
						"english": "No... Your madness ends now.",
						"japanese": "いや… お前の狂気はもう終わりだ。",
						"chinese": "不…… 你的疯狂到此为止。",
						"french": "Non... Ta folie se termine maintenant.",
						"spanish": "No... Tu locura termina ahora.",
						"vietnamese": "Không... Sự điên loạn của ngươi chấm dứt ngay bây giờ.",
						"thai": "ไม่... ความบ้าคลั่งของแกจบลงแล้ว",
						"hindi": "नहीं... तुम्हारा पागलपन अब खत्म होता है।"
					}
				},
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "끝이 아니야. 그의 흔적은… 시스템 곳곳에 남아있어.",
						"english": "It's not over. His traces... remain throughout the system.",
						"japanese": "終わりじゃない。彼の痕跡は…システム中に残っている。",
						"chinese": "还没结束。他的痕迹…散布在系统的每个角落。",
						"french": "Ce n'est pas fini. Ses traces... sont partout dans le système.",
						"spanish": "No ha terminado. Sus rastros... permanecen por todo el sistema.",
						"vietnamese": "Chưa kết thúc. Dấu vết của hắn… vẫn còn khắp hệ thống.",
						"thai": "ยังไม่จบ ร่องรอยของเขา... ยังคงอยู่ทั่วทั้งระบบ",
						"hindi": "यह खत्म नहीं हुआ है। उसके निशान... सिस्टम भर में मौजूद हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "우리가 감시의 고리를… 정말 끊어낼 수 있을까?",
						"english": "Can we truly break... the chains of surveillance?",
						"japanese": "我々は監視の鎖を…本当に断ち切れるのか？",
						"chinese": "我们真的能斩断…监视的枷锁吗？",
						"french": "Pouvons-nous vraiment briser... les chaînes de la surveillance ?",
						"spanish": "¿Podremos realmente romper... el ciclo de vigilancia?",
						"vietnamese": "Liệu chúng ta có thể thực sự cắt đứt… vòng kìm kẹp của sự giám sát không?",
						"thai": "เราจะสามารถทำลาย... วงจรการเฝ้าระวังได้จริงหรือ?",
						"hindi": "क्या हम वास्तव में... निगरानी की बेड़ियों को तोड़ सकते हैं?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 스크린은 정지했지만, 정적 속에 알 수 없는 여운이 감돌았다.",
						"english": "The city's screens went dark, but an unknown lingering feeling pervaded the silence.",
						"japanese": "都市のスクリーンは停止したが、静寂の中に未知の余韻が漂っていた。",
						"chinese": "城市的屏幕停止了，但在寂静中弥漫着一种莫名的余韵。",
						"french": "Les écrans de la ville se sont éteints, mais un sentiment indéfinissable persistait dans le silence.",
						"spanish": "Las pantallas de la ciudad se detuvieron, pero una resonancia desconocida flotaba en el silencio.",
						"vietnamese": "Màn hình thành phố đã dừng lại, nhưng một dư vị không thể lý giải vẫn còn trong sự tĩnh lặng.",
						"thai": "หน้าจอของเมืองหยุดนิ่ง แต่ความรู้สึกที่ค้างคาบางอย่างยังคงอบอวลอยู่ในความเงียบงัน",
						"hindi": "शहर की स्क्रीन रुक गईं, लेकिन खामोशी में एक अज्ञात एहसास छाया रहा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 모든 스크린이 발작하듯 번뜩였다.",
						"english": "All screens in the city flickered erratically.",
						"japanese": "都市の全てのスクリーンが発作のように点滅した。",
						"chinese": "城市的所有屏幕都抽搐般地闪烁着。",
						"french": "Tous les écrans de la ville vacillaient frénétiquement.",
						"spanish": "Todas las pantallas de la ciudad parpadearon convulsivamente.",
						"vietnamese": "Tất cả màn hình trong thành phố nhấp nháy điên cuồng như đang co giật.",
						"thai": "หน้าจอทั้งหมดในเมืองกะพริบถี่ๆ เหมือนเป็นลมบ้าหมู",
						"hindi": "शहर की सभी स्क्रीनें अचानक चमक उठीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수많은 인물들이 피와 살덩이로 변모하는 잔혹한 환영들이 터져 나왔다.",
						"english": "Cruel visions erupted: countless figures transforming into blood and gore.",
						"japanese": "数えきれない人々が血と肉塊に変貌する残酷な幻影が噴出した。",
						"chinese": "无数人变成血肉的残酷幻象爆发了。",
						"french": "Des visions cruelles éclatèrent : d'innombrables figures se transformant en sang et en chair.",
						"spanish": "Estallaron visiones crueles: incontables figuras transformándose en sangre y vísceras.",
						"vietnamese": "Vô số ảo ảnh tàn khốc hiện ra: những nhân vật biến thành máu và thịt nát.",
						"thai": "ภาพหลอนอันโหดร้ายปะทุขึ้น: ผู้คนนับไม่ถ้วนกลายสภาพเป็นเลือดและเนื้อ",
						"hindi": "क्रूर दृश्य फूट पड़े: अनगिनत आकृतियाँ खून और मांस में बदल गईं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그의 이름이 적힌 오래된 신문 기사 조각들이 흩날리고, 무수한 감시 카메라의 눈동자가 기이하게 정렬된 채 탐험대를 응시했다.",
						"english": "Scraps of old newspaper articles with his name scattered, and countless surveillance camera eyes, strangely aligned, stared at the expedition team.",
						"japanese": "彼の名前が書かれた古い新聞記事の切れ端が舞い散り、無数の監視カメラの眼が奇妙に整列して探検隊を見つめていた。",
						"chinese": "写有他名字的旧报纸碎片四处飘散，无数监控摄像头的眼睛，诡异地排列着，凝视着探险队。",
						"french": "Des fragments d'anciens articles de journaux portant son nom s'éparpillaient, et d'innombrables yeux de caméras de surveillance, étrangement alignés, fixaient l'équipe d'expédition.",
						"spanish": "Fragmentos de viejos artículos de periódico con su nombre se esparcieron, y los ojos de innumerables cámaras de vigilancia, extrañamente alineados, miraron fijamente al equipo de expedición.",
						"vietnamese": "Những mảnh báo cũ có tên hắn bay lả tả, và vô số mắt camera giám sát, được sắp xếp một cách kỳ lạ, nhìn chằm chằm vào đoàn thám hiểm.",
						"thai": "เศษกระดาษจากบทความในหนังสือพิมพ์เก่าที่มีชื่อของเขากระจัดกระจาย และดวงตาของกล้องวงจรปิดจำนวนนับไม่ถ้วนเรียงตัวกันอย่างแปลกประหลาด จ้องมองทีมสำรวจ",
						"hindi": "उसके नाम वाले पुराने अख़बारों के टुकड़े बिखर गए, और अनगिनत निगरानी कैमरों की आँखें, अजीब तरह से संरेखित होकर, अभियान दल को घूर रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 내 감시망에… 침투한 자들이… 누구냐…",
						"english": "Who dares... invade... my surveillance network...?",
						"japanese": "よくも… 私の監視網に… 侵入した者は… 誰だ…",
						"chinese": "竟敢…… 闯入我的…… 监视网…… 究竟…… 是何方神圣……",
						"french": "Qui... ose... infiltrer... mon réseau de surveillance...?",
						"spanish": "¿Quién... se atreve... a infiltrarse... en mi red de vigilancia...?",
						"vietnamese": "Kẻ nào... dám xâm nhập... vào mạng lưới giám sát của ta...?",
						"thai": "ใครกัน... ที่กล้า... บุกรุก... เข้ามาในระบบเฝ้าระวังของข้า...?",
						"hindi": "हिम्मत कैसे हुई... मेरी निगरानी प्रणाली में... घुसपैठ करने वालों की...?"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 나의… 영역을… 더럽히다니…",
						"english": "How dare you... defile... my domain...!",
						"japanese": "よくも… 私の領域を… 汚したな…",
						"chinese": "竟敢…… 玷污我的…… 领地……",
						"french": "Comment... osez-vous... souiller... mon domaine...!",
						"spanish": "¡Cómo... osas... profanar... mi dominio...!",
						"vietnamese": "Dám... vấy bẩn... lãnh địa của ta...!",
						"thai": "บังอาจ... มาแปดเปื้อน... อาณาเขตของข้า...!",
						"hindi": "हिम्मत कैसे हुई... मेरे क्षेत्र को... अपवित्र करने की...!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈의 광기는 여기까지다!",
						"english": "Your madness ends here!",
						"japanese": "貴様の狂気はここまでだ！",
						"chinese": "你的疯狂到此为止！",
						"french": "Ta folie s'arrête ici !",
						"spanish": "¡Tu locura termina aquí!",
						"vietnamese": "Sự điên loạn của ngươi chấm dứt tại đây!",
						"thai": "ความบ้าคลั่งของแกจะจบลงตรงนี้!",
						"hindi": "तुम्हारा पागलपन यहीं खत्म होता है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "피로… 새겨진… 나의 코드… 이 도시는… 나의… 영원한… 왕국…",
						"english": "My code... carved... in blood... This city... my... eternal... kingdom...",
						"japanese": "血で… 刻まれし… 我がコード… この都市は… 我が… 永遠の… 王国…",
						"chinese": "以血…… 铭刻的…… 我的代码…… 这座城市…… 是我的…… 永恒…… 王国……",
						"french": "Mon code... gravé... dans le sang... Cette ville... mon... éternel... royaume...",
						"spanish": "Mi código... grabado... en sangre... Esta ciudad... mi... eterno... reino...",
						"vietnamese": "Mã của ta... khắc bằng... máu... Thành phố này... là vương quốc... vĩnh cửu... của ta...",
						"thai": "รหัสของข้า... จารึกด้วย... โลหิต... เมืองนี้... คืออาณาจักร... นิรันดร์... ของข้า...",
						"hindi": "खून से... खुदा हुआ... मेरा कोड... यह शहर... मेरा... शाश्वत... साम्राज्य..."
					}
				},
				{
					"content": {
						"korean": "하하하… 이… 혼돈이… 바로… 질서다…!",
						"english": "Hahaha... This... chaos... is... order...!",
						"japanese": "ハハハ… この… 混沌こそが… 秩序だ…！",
						"chinese": "哈哈哈…… 这…… 混沌…… 就是…… 秩序……！",
						"french": "Hahaha... Ce... chaos... est... l'ordre...!",
						"spanish": "Jajaja... ¡Este... caos... es... el orden...!",
						"vietnamese": "Hahaha... Sự... hỗn loạn này... chính là... trật tự...!",
						"thai": "ฮ่าฮ่าฮ่า... ความ... วุ่นวายนี้... คือ... ระเบียบ...!",
						"hindi": "हाहाहा... यह... अराजकता... ही... व्यवस्था है...!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 광기를 봉인해주겠어!",
						"english": "I will seal away your madness!",
						"japanese": "貴様の狂気を封印してやる！",
						"chinese": "我将封印你的疯狂！",
						"french": "Je vais sceller ta folie !",
						"spanish": "¡Sellare tu locura!",
						"vietnamese": "Ta sẽ phong ấn sự điên loạn của ngươi!",
						"thai": "ข้าจะผนึกความบ้าคลั่งของแก!",
						"hindi": "मैं तुम्हारे पागलपन को सील कर दूंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"카오스 코덱의 광기는 잠시 멈췄다.",
			"그러나 시스템 곳곳에 새겨진 그의 잔상은 사라지지 않았다.",
			"구원이었을까, 아니면 또 다른 침해의 시작이었을까.",
			"도시의 밤은 길었다. 진정한 자유는 아직 오지 않았다."
		],
		"english": [
			"The madness of Chaos Codex paused for a moment.",
			"But his afterimages etched throughout the system did not vanish.",
			"Was it salvation, or the beginning of another intrusion?",
			"The city's night was long. True freedom had not yet come."
		],
		"japanese": [
			"カオスコーデックスの狂気は一時的に止まった。",
			"しかし、システム各地に刻まれた彼の残像は消えなかった。",
			"それは救済だったのか、それとも新たな侵犯の始まりだったのか。",
			"都市の夜は長かった。真の自由はまだ訪れていない。"
		],
		"chinese": [
			"混沌法典的疯狂暂时停歇。",
			"然而，他刻在系统各处的残影并未消散。",
			"是救赎，还是另一次侵犯的开始？",
			"城市的夜晚漫长。真正的自由尚未到来。"
		],
		"french": [
			"La folie du Chaos Codex s'est arrêtée un instant.",
			"Mais ses rémanences, gravées dans tout le système, ne disparurent pas.",
			"Était-ce le salut, ou le début d'une autre intrusion ?",
			"La nuit de la ville fut longue. La vraie liberté n'était pas encore venue."
		],
		"spanish": [
			"La locura del Códice del Caos se detuvo por un momento.",
			"Pero sus imágenes residuales grabadas por todo el sistema no desaparecieron.",
			"¿Fue salvación, o el comienzo de otra intrusión?",
			"La noche de la ciudad fue larga. La verdadera libertad aún no había llegado."
		],
		"vietnamese": [
			"Sự điên loạn của Chaos Codex tạm dừng.",
			"Nhưng những tàn dư của hắn, khắc sâu khắp hệ thống, vẫn chưa biến mất.",
			"Đó là sự cứu rỗi, hay khởi đầu của một cuộc xâm nhập khác?",
			"Đêm của thành phố thật dài. Tự do thực sự vẫn chưa đến."
		],
		"thai": [
			"ความบ้าคลั่งของ Chaos Codex หยุดลงชั่วขณะ",
			"แต่ภาพติดตาของเขาที่สลักไว้ทั่วระบบไม่ได้หายไป",
			"มันคือความรอด หรือจุดเริ่มต้นของการบุกรุกครั้งใหม่อีกครั้ง",
			"ค่ำคืนของเมืองช่างยาวนาน อิสรภาพที่แท้จริงยังมาไม่ถึง"
		],
		"hindi": [
			"केओस कोडेक्स का पागलपन कुछ देर के लिए रुक गया।",
			"लेकिन सिस्टम में हर जगह अंकित उसकी परछाइयाँ गायब नहीं हुईं।",
			"क्या यह मोक्ष था, या एक और घुसपैठ की शुरुआत?",
			"शहर की रात लंबी थी। सच्ची आज़ादी अभी नहीं आई थी।"
		]
	},
	"prologue": {
		"korean": [
			"도시의 심장부. 그곳에서 모든 진실이 잠들어 있었다.",
			"'카오스 코덱'의 광기가 도시를 집어삼키는 순간.",
			"조이의 경고는 현실이 되고, 우리는 마침내 그의 왕국에 도달했다.",
			"마지막 싸움. 모든 것을 끝내야 한다."
		],
		"english": [
			"The city's heart. There, all truths slept.",
			"The moment the madness of 'Chaos Codex' devoured the city.",
			"Joy's warning became reality, and we finally reached his kingdom.",
			"The final battle. Everything must end."
		],
		"japanese": [
			"都市の心臓部。全ての真実がそこで眠っていた。",
			"「カオスコーデックス」の狂気が都市を飲み込む瞬間。",
			"ジョイの警告は現実となり、我々はついに彼の王国に到達した。",
			"最後の戦い。全てを終わらせなければならない。"
		],
		"chinese": [
			"城市的中心。所有真相都沉睡于此。",
			"‘混沌法典’的疯狂吞噬城市的瞬间。",
			"乔伊的警告变为现实，我们终于抵达了他的王国。",
			"最后一战。必须结束一切。"
		],
		"french": [
			"Au cœur de la ville. Toutes les vérités y dormaient.",
			"L'instant où la folie du 'Chaos Codex' a dévoré la ville.",
			"L'avertissement de Joy devint réalité, et nous atteignîmes enfin son royaume.",
			"La bataille finale. Tout doit prendre fin."
		],
		"spanish": [
			"El corazón de la ciudad. Allí, todas las verdades dormían.",
			"El momento en que la locura del 'Códice del Caos' devoró la ciudad.",
			"La advertencia de Joy se hizo realidad, y finalmente llegamos a su reino.",
			"La batalla final. Todo debe terminar."
		],
		"vietnamese": [
			"Trái tim của thành phố. Mọi sự thật đều ngủ yên ở đó.",
			"Khoảnh khắc sự điên loạn của 'Chaos Codex' nuốt chửng thành phố.",
			"Lời cảnh báo của Joy trở thành sự thật, và chúng ta cuối cùng đã đến vương quốc của hắn.",
			"Trận chiến cuối cùng. Mọi thứ phải kết thúc."
		],
		"thai": [
			"ใจกลางเมือง ที่นั่น ความจริงทั้งหมดหลับใหลอยู่",
			"ชั่วขณะที่ความบ้าคลั่งของ 'Chaos Codex' กลืนกินเมือง",
			"คำเตือนของจอยกลายเป็นความจริง และเราก็มาถึงอาณาจักรของเขาในที่สุด",
			"การต่อสู้ครั้งสุดท้าย ทุกสิ่งต้องสิ้นสุดลง"
		],
		"hindi": [
			"शहर का दिल। वहाँ, सभी सत्य सो रहे थे।",
			"'केओस कोडेक्स' के पागलपन ने शहर को निगल लिया।",
			"जॉय की चेतावनी हकीकत बन गई, और हम आखिरकार उसके राज्य में पहुँच गए।",
			"अंतिम युद्ध। सब कुछ खत्म होना चाहिए।"
		]
	}
} as const;
