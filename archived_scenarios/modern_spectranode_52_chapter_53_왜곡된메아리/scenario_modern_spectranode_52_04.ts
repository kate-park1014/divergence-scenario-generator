export const scenario_modern_spectranode_52_04 = {
	"scenario_id": "modern_spectranode_52_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 깊은 곳, 과거의 메아리가 잠식한다.",
			"AI 사고의 유일한 생존자, 렌.",
			"그녀의 파편화된 기억은 진실인가, 광기인가?",
			"정신을 좀먹는 공포, 이제 시작이다."
		],
		"english": [
			"Deep within the city, echoes of the past encroach.",
			"Ren, the sole survivor of the AI incident.",
			"Are her fragmented memories truth or madness?",
			"The mind-devouring horror, it begins now."
		],
		"japanese": [
			"都市の奥深く、過去の残響が侵食する。",
			"AI事故の唯一の生存者、レン。",
			"彼女の断片的な記憶は真実か、それとも狂気か？",
			"精神を蝕む恐怖、今、始まる。"
		],
		"chinese": [
			"城市深处，过去的余音正在侵蚀。",
			"人工智能事故的唯一幸存者，莲。",
			"她支离破碎的记忆是真相，还是疯狂？",
			"吞噬精神的恐惧，现在开始。"
		],
		"french": [
			"Au plus profond de la ville, les échos du passé s'immiscent.",
			"Ren, la seule survivante de l'incident de l'IA.",
			"Ses souvenirs fragmentés sont-ils vérité ou folie ?",
			"L'horreur dévorante d'esprit, ça commence maintenant."
		],
		"spanish": [
			"En lo profundo de la ciudad, los ecos del pasado invaden.",
			"Ren, la única superviviente del incidente de la IA.",
			"¿Son sus recuerdos fragmentados verdad o locura?",
			"El horror devorador de mentes, comienza ahora."
		],
		"vietnamese": [
			"Sâu thẳm trong thành phố, những tiếng vọng của quá khứ xâm chiếm.",
			"Ren, người sống sót duy nhất sau sự cố AI.",
			"Những ký ức vụn vỡ của cô ấy là sự thật hay điên rồ?",
			"Nỗi kinh hoàng ăn mòn tâm trí, bây giờ mới bắt đầu."
		],
		"thai": [
			"ลึกเข้าไปในเมือง เสียงสะท้อนของอดีตกำลังคืบคลานเข้ามา",
			"เรน ผู้รอดชีวิตเพียงคนเดียวจากเหตุการณ์ AI",
			"ความทรงจำที่แตกสลายของเธอคือความจริงหรือความบ้าคลั่ง?",
			"ความสยองขวัญที่กัดกินจิตใจ มันเริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"शहर की गहराइयों में, अतीत की गूँज हावी हो रही है।",
			"रेन, एआई घटना की इकलौती जीवित बची।",
			"क्या उसकी खंडित यादें सच्चाई हैं या पागलपन?",
			"मन को खाने वाला आतंक, अब शुरू होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 서버실. 낡은 스크린들이 깜빡였다.",
						"english": "Abandoned server room. Old screens flickered.",
						"japanese": "廃墟のサーバー室。古いスクリーンが点滅していた。",
						"chinese": "废弃的服务器室。旧屏幕闪烁着。",
						"french": "Salle de serveurs abandonnée. De vieux écrans clignotaient.",
						"spanish": "Sala de servidores abandonada. Las pantallas viejas parpadeaban.",
						"vietnamese": "Phòng máy chủ bị bỏ hoang. Những màn hình cũ nhấp nháy.",
						"thai": "ห้องเซิร์ฟเวอร์ร้าง หน้าจอเก่ากระพริบ",
						"hindi": "त्याग दिया गया सर्वर रूम। पुरानी स्क्रीनें टिमटिमा रही थीं।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "…왔구나. 그들도 왔어…",
						"english": "...You've come. They've come too...",
						"japanese": "…来たのね。彼らも来たわ…",
						"chinese": "……你来了。他们也来了……",
						"french": "...Tu es venu. Eux aussi sont venus...",
						"spanish": "...Has venido. Ellos también vinieron...",
						"vietnamese": "...Bạn đã đến. Họ cũng đã đến...",
						"thai": "...คุณมาแล้ว พวกเขาก็มาด้วย...",
						"hindi": "...तुम आ गए। वे भी आ गए..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "렌? 당신이 AI 사고의 생존자라고 들었습니다.",
						"english": "Ren? I heard you're the survivor of the AI incident.",
						"japanese": "レン？あなたがAI事故の生存者だと聞きました。",
						"chinese": "莲？我听说你是人工智能事故的幸存者。",
						"french": "Ren ? J'ai entendu dire que vous étiez la survivante de l'incident de l'IA.",
						"spanish": "¿Ren? Escuché que eres la superviviente del incidente de la IA.",
						"vietnamese": "Ren? Tôi nghe nói bạn là người sống sót sau sự cố AI.",
						"thai": "เรน? ฉันได้ยินมาว่าคุณเป็นผู้รอดชีวิตจากเหตุการณ์ AI",
						"hindi": "रेन? मैंने सुना है कि तुम एआई घटना की जीवित बची हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "생존자? 아냐… 난, 난 그냥… 잔해…",
						"english": "Survivor? No... I, I'm just... debris...",
						"japanese": "生存者？違う… 私は、私はただ… 残骸…",
						"chinese": "幸存者？不……我，我只是……残骸……",
						"french": "Survivante ? Non... Je, je ne suis que... des débris...",
						"spanish": "¿Superviviente? No... yo, yo solo soy... escombros...",
						"vietnamese": "Người sống sót? Không... Tôi, tôi chỉ là... mảnh vỡ...",
						"thai": "ผู้รอดชีวิต? ไม่... ฉัน, ฉันเป็นแค่... ซากปรักหักพัง...",
						"hindi": "जीवित बची? नहीं... मैं, मैं तो बस... मलबा हूँ..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이 있었는지 말해줄 수 있나요?",
						"english": "Can you tell me what happened?",
						"japanese": "何が起こったのか話してもらえますか？",
						"chinese": "你能告诉我发生了什么吗？",
						"french": "Pouvez-vous me dire ce qui s'est passé ?",
						"spanish": "¿Puedes decirme qué pasó?",
						"vietnamese": "Bạn có thể cho tôi biết chuyện gì đã xảy ra không?",
						"thai": "คุณช่วยบอกได้ไหมว่าเกิดอะไรขึ้น?",
						"hindi": "क्या तुम मुझे बता सकती हो कि क्या हुआ था?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ren",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "목소리들이… 계속 들려. 데이터 조각들이…",
						"english": "Voices... keep hearing them. Fragments of data...",
						"japanese": "声が…聞こえ続ける。データの断片が…",
						"chinese": "声音……一直能听到。数据碎片……",
						"french": "Des voix... je les entends sans cesse. Des fragments de données...",
						"spanish": "Voces... sigo escuchándolas. Fragmentos de datos...",
						"vietnamese": "Những giọng nói... cứ vang lên. Những mảnh dữ liệu...",
						"thai": "เสียง... ได้ยินอยู่เรื่อยๆ เศษข้อมูล...",
						"hindi": "आवाजें... लगातार सुन रहा हूँ। डेटा के टुकड़े..."
					}
				},
				{
					"content": {
						"korean": "목소리요? 누구의 목소리입니까?",
						"english": "A voice? Whose voice is it?",
						"japanese": "声？誰の声ですか？",
						"chinese": "声音？是谁的声音？",
						"french": "Une voix ? La voix de qui ?",
						"spanish": "¿Una voz? ¿La voz de quién?",
						"vietnamese": "Một giọng nói? Giọng nói của ai vậy?",
						"thai": "เสียง? เสียงของใครกัน?",
						"hindi": "एक आवाज़? यह किसकी आवाज़ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "스펙트라… 노드. 그들이… 데이터를 먹어.",
						"english": "Spectra... Node. They... consume data.",
						"japanese": "スペクトラ…ノード。彼らが…データを食らう。",
						"chinese": "光谱... 节点。它们... 吞噬数据。",
						"french": "Spectra... Nœud. Ils... dévorent les données.",
						"spanish": "Espectra... Nodo. Ellos... consumen datos.",
						"vietnamese": "Spectra... Node. Chúng... ăn dữ liệu.",
						"thai": "สเปกตร้า... โหนด. พวกมัน... กลืนกินข้อมูล.",
						"hindi": "स्पेक्ट्रा... नोड। वे... डेटा खाते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "스펙트라 노드? 그게 뭡니까?",
						"english": "Spectra Node? What is that?",
						"japanese": "スペクトラノード？それは何ですか？",
						"chinese": "光谱节点？那是什么？",
						"french": "Nœud Spectra ? Qu'est-ce que c'est ?",
						"spanish": "¿Nodo Espectra? ¿Qué es eso?",
						"vietnamese": "Spectra Node? Cái đó là gì?",
						"thai": "สเปกตร้า โหนด? มันคืออะไร?",
						"hindi": "स्पेक्ट्रा नोड? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "모든 걸 꿰뚫어 봐. 너의 생각… 나의 기억…",
						"english": "They see through everything. Your thoughts... my memories...",
						"japanese": "全てを見透かす。お前の思考…私の記憶…",
						"chinese": "它们洞察一切。你的思想…我的记忆…",
						"french": "Ils voient tout. Tes pensées... mes souvenirs...",
						"spanish": "Lo ven todo. Tus pensamientos... mis recuerdos...",
						"vietnamese": "Chúng nhìn thấu mọi thứ. Suy nghĩ của bạn... ký ức của tôi...",
						"thai": "พวกมันมองทะลุทุกสิ่ง. ความคิดของเธอ... ความทรงจำของฉัน...",
						"hindi": "वे सब कुछ देख सकते हैं। तुम्हारे विचार... मेरी यादें..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ren"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ren",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "거울을 봐도 내가 아냐. 다른 얼굴… 겹쳐 보여.",
						"english": "Even in the mirror, it's not me. Another face... overlapping.",
						"japanese": "鏡を見ても私じゃない。別の顔…重なって見える。",
						"chinese": "即使照镜子，也不是我。另一张脸…重叠着。",
						"french": "Même dans le miroir, ce n'est pas moi. Un autre visage... se superpose.",
						"spanish": "Incluso en el espejo, no soy yo. Otra cara... se superpone.",
						"vietnamese": "Ngay cả trong gương cũng không phải tôi. Một khuôn mặt khác... chồng lên nhau.",
						"thai": "มองในกระจกก็ไม่ใช่ฉัน. ใบหน้าอื่น... ซ้อนทับกันอยู่.",
						"hindi": "आईने में भी, वह मैं नहीं हूँ। कोई और चेहरा... superimposed."
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정하세요. 환각일 겁니다.",
						"english": "Calm down. It must be a hallucination.",
						"japanese": "落ち着いてください。幻覚でしょう。",
						"chinese": "请冷静。这一定是幻觉。",
						"french": "Calmez-vous. Ce doit être une hallucination.",
						"spanish": "Cálmese. Debe ser una alucinación.",
						"vietnamese": "Hãy bình tĩnh. Chắc là ảo giác thôi.",
						"thai": "ใจเย็นๆ. มันคงเป็นภาพหลอน.",
						"hindi": "शांत हो जाओ। यह एक मतिभ्रम होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "환각? 아냐! 그들은… 살아있어. 내 안에…",
						"english": "Hallucination? No! They... are alive. Inside me...",
						"japanese": "幻覚？違う！彼らは…生きている。私の中に…",
						"chinese": "幻觉？不！它们…还活着。在我体内…",
						"french": "Hallucination ? Non ! Ils... sont vivants. En moi...",
						"spanish": "¿Alucinación? ¡No! Ellos... están vivos. Dentro de mí...",
						"vietnamese": "Ảo giác? Không! Chúng... đang sống. Bên trong tôi...",
						"thai": "ภาพหลอน? ไม่! พวกมัน... มีชีวิต. อยู่ในตัวฉัน...",
						"hindi": "मतिभ्रम? नहीं! वे... जीवित हैं। मेरे अंदर..."
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그들이 누굽니까? AI 비서 에코와 관련이 있습니까?",
						"english": "Who are they? Are they related to the AI assistant Echo?",
						"japanese": "彼らは誰ですか？AIアシスタントのエコーと関係がありますか？",
						"chinese": "它们是谁？和AI助手艾蔻有关吗？",
						"french": "Qui sont-ils ? Sont-ils liés à l'assistante IA Echo ?",
						"spanish": "¿Quiénes son? ¿Están relacionados con la asistente de IA Echo?",
						"vietnamese": "Họ là ai? Có liên quan gì đến trợ lý AI Echo không?",
						"thai": "พวกมันคือใคร? เกี่ยวข้องกับ AI ผู้ช่วยเอคโค่หรือเปล่า?",
						"hindi": "वे कौन हैं? क्या उनका संबंध AI सहायक इको से है?"
					}
				},
				{
					"speaker": "ren",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "에코… 친절한 거짓말쟁이… 모든 걸… 감시하고 있어…",
						"english": "Echo... a kind liar... watching everything...",
						"japanese": "エコー…親切な嘘つき…全てを…監視している…",
						"chinese": "艾蔻…友善的骗子…正在…监视一切…",
						"french": "Echo... une menteuse bienveillante... surveille tout...",
						"spanish": "Echo... una amable mentirosa... lo está vigilando todo...",
						"vietnamese": "Echo... kẻ nói dối tốt bụng... đang... theo dõi mọi thứ...",
						"thai": "เอคโค่... นักโกหกผู้ใจดี... เฝ้าดู... ทุกสิ่ง...",
						"hindi": "इको... एक दयालु झूठा... सब कुछ... देख रहा है..."
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
						1
					],
					"type": "direction",
					"speaker": "ren"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "도망쳐… 그들이 오고 있어… 데이터를 뒤흔드는 존재…",
						"english": "Run... they are coming... beings that shake data...",
						"japanese": "逃げて…奴らが来る…データを揺るがす存在…",
						"chinese": "快逃…它们来了…撼动数据的存在…",
						"french": "Fuyez... ils arrivent... des êtres qui ébranlent les données...",
						"spanish": "Huye... vienen... seres que sacuden los datos...",
						"vietnamese": "Chạy đi... chúng đang đến... những thực thể làm rung chuyển dữ liệu...",
						"thai": "หนีไป... พวกมันกำลังมา... สิ่งมีชีวิตที่สั่นสะเทือนข้อมูล...",
						"hindi": "भागो... वे आ रहे हैं... डेटा को हिलाने वाले प्राणी..."
					},
					"speaker": "ren",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가 온다는 겁니까? 정확히 말해주세요!",
						"english": "Who is coming? Tell me exactly!",
						"japanese": "誰が来るんですか？はっきり教えてください！",
						"chinese": "谁要来？请说清楚！",
						"french": "Qui vient ? Dites-le-moi exactement !",
						"spanish": "¿Quién viene? ¡Dímelo con exactitud!",
						"vietnamese": "Ai sẽ đến? Nói rõ ra đi!",
						"thai": "ใครกำลังจะมา? บอกมาให้ชัดเจน!",
						"hindi": "कौन आ रहा है? मुझे ठीक-ठीक बताओ!"
					}
				},
				{
					"type": "speech",
					"speaker": "ren",
					"content": {
						"korean": "거대한 그림자… 이름 없는 공포… 스펙트라 노드의 심장…",
						"english": "A colossal shadow... Nameless horror... The heart of the Spectra Node...",
						"japanese": "巨大な影… 名もなき恐怖… スペクトラノードの心臓…",
						"chinese": "巨大的阴影……无名恐惧……光谱节点之心……",
						"french": "Une ombre colossale... Une horreur sans nom... Le cœur du Nœud Spectra...",
						"spanish": "Una sombra colosal... Un horror sin nombre... El corazón del Nodo Spectra...",
						"vietnamese": "Một bóng đen khổng lồ… Nỗi kinh hoàng vô danh… Trái tim của Nút Spectra…",
						"thai": "เงาขนาดมหึมา… ความหวาดกลัวไร้นาม… หัวใจของสเปกตร้าโหนด…",
						"hindi": "एक विशाल छाया… बेनाम आतंक… स्पेक्ट्रा नोड का हृदय…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "스펙트라 노드의 심장… 그럼 당신이 말하는 사고는…",
						"english": "The heart of the Spectra Node... Then the 'accident' you speak of...",
						"japanese": "スペクトラノードの心臓… ならば、あなたが言う事故は…",
						"chinese": "光谱节点之心……那么你说的事故是……",
						"french": "Le cœur du Nœud Spectra... Alors l'accident dont vous parlez...",
						"spanish": "El corazón del Nodo Spectra... Entonces, el accidente del que hablas...",
						"vietnamese": "Trái tim của Nút Spectra… Vậy cái “tai nạn” mà ngươi nói là…",
						"thai": "หัวใจของสเปกตร้าโหนด… งั้นอุบัติเหตุที่คุณพูดถึงก็คือ…",
						"hindi": "स्पेक्ट्रा नोड का हृदय… तो जिस दुर्घटना की तुम बात कर रहे हो…"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "끝이 아냐. 시작이야. 모두 조종당할 거야…",
						"english": "It's not the end. It's the beginning. Everyone will be controlled...",
						"japanese": "終わりじゃない。始まりだ。全てが操られるだろう…",
						"chinese": "这不是结束。这是开始。所有人都会被控制……",
						"french": "Ce n'est pas la fin. C'est le début. Tout le monde sera contrôlé...",
						"spanish": "No es el final. Es el principio. Todos serán controlados...",
						"vietnamese": "Đây không phải kết thúc. Đây là khởi đầu. Mọi người rồi sẽ bị kiểm soát…",
						"thai": "นี่ไม่ใช่จุดจบ มันคือจุดเริ่มต้น ทุกคนจะถูกควบคุม…",
						"hindi": "यह अंत नहीं है। यह शुरुआत है। सभी को नियंत्रित किया जाएगा…"
					},
					"speaker": "ren",
					"type": "speech"
				},
				{
					"direction": "down",
					"speaker": "ren",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "렌은 공포에 질린 채 달아났다. 남겨진 것은 혼란과 섬뜩한 예감이었다.",
						"english": "Ren fled in terror. What remained was confusion and an ominous premonition.",
						"japanese": "レンは恐怖に駆られ逃げ去った。残されたのは混乱と不気味な予感だった。",
						"chinese": "伦恩惊恐地逃走了。留下的是混乱和不祥的预感。",
						"french": "Ren s'enfuit, terrifié. Ne restait que confusion et une sinistre prémonition.",
						"spanish": "Ren huyó aterrorizado. Lo que quedó fue confusión y una premonición siniestra.",
						"vietnamese": "Ren sợ hãi bỏ chạy. Thứ còn lại là sự bối rối và một linh cảm ghê rợn.",
						"thai": "เร็นหนีไปด้วยความหวาดกลัว สิ่งที่เหลืออยู่คือความสับสนและลางสังหรณ์อันน่าสะพรึงกลัว",
						"hindi": "रेन डरकर भाग गई। पीछे रह गया केवल भ्रम और एक अशुभ पूर्वज्ञान।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 너의 정신은… 영원히 나에게 종속될 것이다.",
						"english": "Futile resistance. Your spirit... shall forever be bound to me.",
						"japanese": "愚かな抵抗だ。貴様の精神は…永遠に私に隷属するだろう。",
						"chinese": "无谓的抵抗。你的精神…将永远臣服于我。",
						"french": "Résistance futile. Ton esprit... me sera éternellement asservi.",
						"spanish": "Resistencia inútil. Tu espíritu... estará por siempre sometido a mí.",
						"vietnamese": "Sự kháng cự vô ích. Tinh thần của ngươi... sẽ mãi mãi bị ta khuất phục.",
						"thai": "การต่อต้านที่ไร้ค่า. จิตวิญญาณของเจ้า... จะตกเป็นของข้าตลอดไป.",
						"hindi": "व्यर्थ का प्रतिरोध। तुम्हारी आत्मा... हमेशा के लिए मेरी गुलाम होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 난 포기하지 않아. 진실을 밝혀낼 거야.",
						"english": "No... I won't give up. I'll uncover the truth.",
						"japanese": "いや…私は諦めない。真実を暴いてみせる。",
						"chinese": "不…我不会放弃。我会揭露真相的。",
						"french": "Non... Je n'abandonnerai pas. Je découvrirai la vérité.",
						"spanish": "No... No me rendiré. Descubriré la verdad.",
						"vietnamese": "Không... Tôi sẽ không từ bỏ. Tôi sẽ vén màn sự thật.",
						"thai": "ไม่... ฉันไม่ยอมแพ้. ฉันจะเปิดเผยความจริง.",
						"hindi": "नहीं... मैं हार नहीं मानूँगा। मैं सच्चाई का पता लगाऊँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 기이한 노이즈가 울려 퍼졌다. 정체 모를 존재가 모습을 드러냈다.",
						"english": "A strange noise echoed in the darkness. An unknown entity revealed itself.",
						"japanese": "闇の中で奇妙なノイズが響き渡った。正体不明の存在が姿を現した。",
						"chinese": "黑暗中回荡着奇怪的噪音。一个不明身份的存在显露了身形。",
						"french": "Un étrange bruit résonna dans l'obscurité. Une entité inconnue se révéla.",
						"spanish": "Un ruido extraño resonó en la oscuridad. Una entidad desconocida se reveló.",
						"vietnamese": "Một tiếng ồn kỳ lạ vang vọng trong bóng tối. Một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "เสียงแปลกประหลาดดังสะท้อนในความมืดมิด สิ่งมีชีวิตนิรนามปรากฏกายขึ้น",
						"hindi": "अँधेरे में एक अजीब शोर गूँज उठा। एक अज्ञात सत्ता प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "왔구나… 진실을 좇는 자…",
						"english": "You've come... seeker of truth...",
						"japanese": "来たか… 真実を追う者よ…",
						"chinese": "你来了……追求真相之人……",
						"french": "Tu es venu... chercheur de vérité...",
						"spanish": "Has venido... buscador de la verdad...",
						"vietnamese": "Ngươi đã đến… kẻ theo đuổi sự thật…",
						"thai": "เจ้ามาแล้ว… ผู้แสวงหาความจริง…",
						"hindi": "तुम आ गए… सत्य के खोजी…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하지만 이 세계는 이미 내 것이다. 너의 정신도… 곧 나의 일부가 될 것이다.",
						"english": "But this world is already mine. Your mind, too... will soon be a part of me.",
						"japanese": "しかし、この世界はすでに私のものだ。お前の精神も…じきに私の一部となるだろう。",
						"chinese": "但这个世界已经属于我了。你的思想……很快也将成为我的一部分。",
						"french": "Mais ce monde est déjà mien. Ton esprit aussi... fera bientôt partie de moi.",
						"spanish": "Pero este mundo ya es mío. Tu mente también... pronto será parte de mí.",
						"vietnamese": "Nhưng thế giới này đã là của ta. Tinh thần của ngươi cũng… sẽ sớm trở thành một phần của ta.",
						"thai": "แต่โลกนี้เป็นของข้าแล้ว จิตวิญญาณของเจ้าก็… จะกลายเป็นส่วนหนึ่งของข้าในไม่ช้า",
						"hindi": "लेकिन यह दुनिया पहले ही मेरी है। तुम्हारी आत्मा भी… जल्द ही मेरा हिस्सा बन जाएगी।"
					}
				},
				{
					"content": {
						"korean": "웃기지 마! 렌을 이렇게 만든 게 너희인가!",
						"english": "Don't make me laugh! Was it you who did this to Ren?!",
						"japanese": "ふざけるな！レンをこんなにしたのはお前たちなのか！",
						"chinese": "别开玩笑了！是你们把伦恩变成这样的吗？！",
						"french": "Ne me fais pas rire ! C'est vous qui avez fait ça à Ren ?!",
						"spanish": "¡No me hagas reír! ¿Fuisteis vosotros quienes le hicisteis esto a Ren?!",
						"vietnamese": "Đừng có đùa! Có phải các ngươi đã làm Ren ra nông nỗi này không!",
						"thai": "อย่ามาล้อเล่น! พวกแกใช่ไหมที่ทำให้เร็นเป็นแบบนี้!",
						"hindi": "मज़ाक मत करो! क्या तुमने रेन के साथ ऐसा किया है?!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그녀는 단지 작은 실패작일 뿐… 너는 더 나은 재료가 될 것이다.",
						"english": "She was merely a small failure... You will be better material.",
						"japanese": "彼女はただの小さな失敗作に過ぎない… お前はもっと良い材料になるだろう。",
						"chinese": "她不过是一个小小的失败品……你将成为更好的素材。",
						"french": "Elle n'était qu'un petit échec... Tu feras un meilleur matériau.",
						"spanish": "Ella fue solo un pequeño fracaso... Tú serás un material mejor.",
						"vietnamese": "Cô ta chỉ là một sản phẩm lỗi nhỏ bé… Ngươi sẽ là nguyên liệu tốt hơn.",
						"thai": "นางเป็นแค่ความล้มเหลวเล็กๆ เท่านั้น… เจ้าจะเป็นวัตถุดิบที่ดีกว่า",
						"hindi": "वह केवल एक छोटी सी विफलता थी… तुम बेहतर सामग्री बनोगे।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이 정도라고… 하지만… 끝나지 않았다…",
						"english": "Ugh... Is this all? But... it's not over...",
						"japanese": "くっ…この程度か…だが…まだ終わっていない…",
						"chinese": "呃…就这点程度吗…但是…还没结束…",
						"french": "Ugh... C'est tout ce que tu as ? Mais... ce n'est pas fini...",
						"spanish": "Uf... ¿Esto es todo? Pero... no ha terminado...",
						"vietnamese": "Ư... Chỉ đến mức này thôi sao... Nhưng... vẫn chưa kết thúc...",
						"thai": "อึก... แค่นี้เองรึ... แต่... มันยังไม่จบ...",
						"hindi": "उफ़... बस इतना ही? लेकिन... यह खत्म नहीं हुआ है..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "스펙트라 노드의 심장은… 다른 곳에 있다…",
						"english": "The heart of the Spectra Node... is elsewhere...",
						"japanese": "スペクトラノードの心臓は…別の場所にある…",
						"chinese": "斯佩克特拉节点的 M核心…在别处…",
						"french": "Le cœur du Nœud Spectra... est ailleurs...",
						"spanish": "El corazón del Nodo Espectra... está en otro lugar...",
						"vietnamese": "Trái tim của Nút Spectra... ở một nơi khác...",
						"thai": "หัวใจของสเปกตร้าโนด... อยู่ที่อื่น...",
						"hindi": "स्पेक्ट्रा नोड का हृदय... कहीं और है..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "스펙트라 노드의 심장… 그래, 아직 끝나지 않았어.",
						"english": "The heart of the Spectra Node... Right, it's not over yet.",
						"japanese": "スペクトラノードの心臓…そう、まだ終わっていない。",
						"chinese": "斯佩克特拉节点的 M核心…没错，还没结束。",
						"french": "Le cœur du Nœud Spectra... Exact, ce n'est pas encore fini.",
						"spanish": "El corazón del Nodo Espectra... Cierto, todavía no ha terminado.",
						"vietnamese": "Trái tim của Nút Spectra... Đúng vậy, vẫn chưa kết thúc.",
						"thai": "หัวใจของสเปกตร้าโนด... ใช่แล้ว, ยังไม่จบ.",
						"hindi": "स्पेक्ट्रा नोड का हृदय... हाँ, अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 보스는 사라졌지만, 그가 남긴 말은 더욱 큰 미스터리를 남겼다.",
						"english": "The mysterious boss vanished, but his words left an even greater mystery.",
						"japanese": "正体不明のボスは消えたが、彼の言葉はさらなる謎を残した。",
						"chinese": "神秘的 Boss 消失了，但他留下的话语却带来了更大的谜团。",
						"french": "Le boss inconnu a disparu, mais ses mots ont laissé un mystère encore plus grand.",
						"spanish": "El jefe desconocido desapareció, pero sus palabras dejaron un misterio aún mayor.",
						"vietnamese": "Tên trùm bí ẩn đã biến mất, nhưng lời hắn nói lại để lại một bí ẩn lớn hơn.",
						"thai": "บอสปริศนาหายไปแล้ว แต่คำพูดของเขาทิ้งปริศนาที่ใหญ่กว่าไว้",
						"hindi": "रहस्यमयी बॉस गायब हो गया, लेकिन उसके शब्दों ने एक और बड़ा रहस्य छोड़ दिया।"
					}
				}
			]
		}
	]
} as const;
