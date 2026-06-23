export const scenario_modern_staticecho_73_04 = {
	"scenario_id": "modern_staticecho_73_04",
	"order": 4,
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
					"content": {
						"korean": "도시를 덮친 StaticEcho의 패턴. 그 안에서 기묘한 흔적이 발견된다.",
						"english": "StaticEcho's pattern engulfs the city. Strange traces are found within.",
						"japanese": "街を覆うStaticEchoのパターン。その中に奇妙な痕跡が発見される。",
						"chinese": "StaticEcho的模式笼罩着城市。其中发现了奇怪的痕迹。",
						"french": "Le schéma de StaticEcho envahit la ville. D'étranges traces y sont découvertes.",
						"spanish": "El patrón de StaticEcho envuelve la ciudad. Se encuentran extrañas huellas dentro.",
						"vietnamese": "Mô hình của StaticEcho bao trùm thành phố. Những dấu vết kỳ lạ được tìm thấy bên trong.",
						"thai": "รูปแบบของ StaticEcho ปกคลุมทั่วเมือง พบร่องรอยแปลกประหลาดอยู่ภายใน",
						"hindi": "StaticEcho का पैटर्न शहर को घेर लेता है। उसके भीतर अजीब निशान मिलते हैं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이걸 봐요. StaticEcho의 코드를 분석하다가… 소름 돋는 걸 발견했어요.",
						"english": "Look at this. While analyzing StaticEcho's code... I found something chilling.",
						"japanese": "これを見てください。StaticEchoのコードを分析していたら…鳥肌が立つものを見つけました。",
						"chinese": "看这个。分析StaticEcho代码时…我发现了一个令人毛骨悚然的东西。",
						"french": "Regardez ça. En analysant le code de StaticEcho... j'ai découvert quelque chose d'effrayant.",
						"spanish": "Mira esto. Analizando el código de StaticEcho... encontré algo escalofriante.",
						"vietnamese": "Nhìn này. Trong khi phân tích mã của StaticEcho… tôi đã tìm thấy một điều rùng rợn.",
						"thai": "ดูนี่สิ ขณะวิเคราะห์โค้ดของ StaticEcho... ฉันเจออะไรที่น่าขนลุก",
						"hindi": "इसे देखो। StaticEcho के कोड का विश्लेषण करते हुए... मुझे कुछ भयावह मिला।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "뭔데 그렇게 떨어요?",
						"english": "What is it? Why are you trembling?",
						"japanese": "何なの？そんなに震えて。",
						"chinese": "什么事让你抖成这样？",
						"french": "Qu'est-ce que c'est ? Pourquoi tremblez-vous comme ça ?",
						"spanish": "¿Qué pasa? ¿Por qué tiemblas tanto?",
						"vietnamese": "Cái gì mà run rẩy thế?",
						"thai": "อะไรกัน ทำไมตัวสั่นขนาดนั้น?",
						"hindi": "क्या है? तुम इतनी क्यों कांप रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "옛날 자료인데… '매서운 혀' 박상구 조직 관련 코드와 너무 유사해요.",
						"english": "It's old data... but it's too similar to code related to 'Sharp Tongue' Park Sang-gu's organization.",
						"japanese": "古い資料なんですけど…「鋭い舌」パク・サング組織関連のコードと、あまりにも似ています。",
						"chinese": "这是旧资料…但和‘毒舌’朴相久组织相关的代码太相似了。",
						"french": "Ce sont de vieilles données... mais c'est trop similaire au code lié à l'organisation de Park Sang-gu, 'Langue Acerbe'.",
						"spanish": "Son datos antiguos... pero es demasiado similar al código relacionado con la organización de 'Lengua Afilada' Park Sang-gu.",
						"vietnamese": "Đây là dữ liệu cũ… nhưng nó quá giống với mã liên quan đến tổ chức 'Lưỡi Dao Sắc' Park Sang-gu.",
						"thai": "มันเป็นข้อมูลเก่า... แต่คล้ายกับโค้ดที่เกี่ยวข้องกับองค์กร 'ลิ้นคม' พัคซังกูมากเกินไป",
						"hindi": "यह पुराना डेटा है... लेकिन यह 'तीखी जुबान' पार्क सांग-कू के संगठन से संबंधित कोड के बहुत करीब है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "박상구요? 그 전설의 보스?",
						"english": "Park Sang-gu? The legendary boss?",
						"japanese": "パク・サング？あの伝説のボスが？",
						"chinese": "朴相久？那个传说中的老大？",
						"french": "Park Sang-gu ? Le boss légendaire ?",
						"spanish": "¿Park Sang-gu? ¿Ese jefe legendario?",
						"vietnamese": "Park Sang-gu ư? Ông trùm huyền thoại đó?",
						"thai": "พัคซังกูเหรอ? บอสในตำนานคนนั้นน่ะ?",
						"hindi": "पार्क सांग-कू? वह पौराणिक बॉस?"
					}
				},
				{
					"content": {
						"korean": "네. 숙청 방식, 정보 통제… 지금 StaticEcho가 하는 짓이랑 똑같아요.",
						"english": "Yes. The purge methods, information control... it's exactly what StaticEcho is doing now.",
						"japanese": "はい。粛清の方法、情報統制…今のStaticEchoがやっていることと全く同じです。",
						"chinese": "是的。清洗方式、信息控制…和现在StaticEcho的做法一模一样。",
						"french": "Oui. Les méthodes d'épuration, le contrôle de l'information... c'est exactement ce que StaticEcho fait maintenant.",
						"spanish": "Sí. Los métodos de purga, el control de la información... es exactamente lo que StaticEcho está haciendo ahora.",
						"vietnamese": "Đúng vậy. Phương pháp thanh trừng, kiểm soát thông tin… y hệt những gì StaticEcho đang làm bây giờ.",
						"thai": "ใช่ วิธีการกวาดล้าง การควบคุมข้อมูล... เหมือนกับสิ่งที่ StaticEcho กำลังทำอยู่ตอนนี้เลย",
						"hindi": "हाँ। शुद्धिकरण के तरीके, सूचना नियंत्रण... यह वही है जो StaticEcho अब कर रहा है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "통신망 마비 때마다 보이던 문양… 그것도 박상구 조직의 로고와 거의 일치해요.",
						"english": "That symbol seen during every network blackout... it's almost identical to Park Sang-gu's gang logo.",
						"japanese": "通信網麻痺のたびに現れたあの紋様…あれもパク・サング組織のロゴとほぼ一致しています。",
						"chinese": "每次通信网络瘫痪时出现的那个图案……它和朴相久的组织徽标几乎一致。",
						"french": "Ce symbole, vu à chaque panne du réseau... il est presque identique au logo du gang de Park Sang-gu.",
						"spanish": "Ese símbolo que aparecía cada vez que la red se caía... es casi idéntico al logo de la banda de Park Sang-gu.",
						"vietnamese": "Biểu tượng đó, xuất hiện mỗi khi mạng bị tê liệt... nó gần như giống hệt logo băng đảng của Park Sang-gu.",
						"thai": "สัญลักษณ์ที่เห็นทุกครั้งที่เครือข่ายล่ม... มันเกือบจะเหมือนกับโลโก้ของแก๊งค์พัคซังกูเลยค่ะ",
						"hindi": "नेटवर्क ब्लैकआउट के दौरान दिखने वाला वह प्रतीक... वह पार्क संग-गू के गिरोह के लोगो से लगभग मिलता-जुलता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 StaticEcho가 박상구랑 관련 있다는 건가요?",
						"english": "So, StaticEcho is connected to Park Sang-gu?",
						"japanese": "じゃあ、StaticEchoはパク・サングと関係があるってことですか？",
						"chinese": "那StaticEcho和朴相久有关系吗？",
						"french": "Alors, StaticEcho est lié à Park Sang-gu ?",
						"spanish": "¿Entonces StaticEcho está relacionado con Park Sang-gu?",
						"vietnamese": "Vậy StaticEcho có liên quan đến Park Sang-gu sao?",
						"thai": "งั้น StaticEcho ก็เกี่ยวข้องกับพัคซังกูเหรอคะ?",
						"hindi": "तो, क्या StaticEcho का पार्क संग-गू से कोई संबंध है?"
					}
				},
				{
					"content": {
						"korean": "…아직은… 단정할 수 없지만, 이건 너무 우연치 않아요.",
						"english": "...I can't say for sure yet... but this is too much of a coincidence.",
						"japanese": "...まだ断定はできませんが、これは偶然とは言い難い。",
						"chinese": "……虽然还不能下定论……但这绝非巧合。",
						"french": "...Je ne peux pas encore l'affirmer... mais ce n'est pas une simple coïncidence.",
						"spanish": "...Aún no puedo asegurarlo... pero esto no es una coincidencia.",
						"vietnamese": "...Chưa thể khẳng định... nhưng đây không phải là trùng hợp ngẫu nhiên.",
						"thai": "...ยังสรุปไม่ได้... แต่นี่ไม่ใช่เรื่องบังเอิญเลยค่ะ",
						"hindi": "...अभी तक... मैं निश्चित रूप से नहीं कह सकता, लेकिन यह बहुत अधिक संयोग नहीं है।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이걸 대중에 알리면… 도시는 더 큰 혼란에 빠질 거예요.",
						"english": "If this gets out to the public... the city will fall into even greater chaos.",
						"japanese": "これを公にしたら…都市はさらなる混乱に陥るでしょう。",
						"chinese": "如果让大众知道这个……城市会陷入更大的混乱。",
						"french": "Si cela se sait... la ville sombrera dans un chaos encore plus grand.",
						"spanish": "Si esto se hace público... la ciudad caerá en un caos aún mayor.",
						"vietnamese": "Nếu điều này bị tiết lộ cho công chúng... thành phố sẽ rơi vào hỗn loạn lớn hơn nữa.",
						"thai": "ถ้าเรื่องนี้ถูกเปิดเผยต่อสาธารณะ... เมืองจะตกอยู่ในความโกลาหลที่ยิ่งกว่าเดิม",
						"hindi": "अगर यह बात जनता तक पहुँची... तो शहर और भी बड़ी अराजकता में डूब जाएगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숨길 순 없어요. 진실은 밝혀져야 해요.",
						"english": "We can't hide it. The truth must come out.",
						"japanese": "隠し通すことはできません。真実は明らかにされなければ。",
						"chinese": "不能隐藏。真相必须被揭露。",
						"french": "On ne peut pas le cacher. La vérité doit éclater.",
						"spanish": "No podemos ocultarlo. La verdad debe salir a la luz.",
						"vietnamese": "Không thể giấu được. Sự thật phải được phơi bày.",
						"thai": "เราซ่อนมันไม่ได้ ความจริงต้องถูกเปิดเผย",
						"hindi": "हम इसे छिपा नहीं सकते। सच सामने आना चाहिए।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "StaticEcho의 경고 메시지에 '복종'과 '질서'가 유독 많았죠?",
						"english": "StaticEcho's warning messages had an unusual amount of 'obedience' and 'order', right?",
						"japanese": "StaticEchoの警告メッセージには、「服従」と「秩序」がやけに多かったですよね？",
						"chinese": "StaticEcho的警告信息中，‘服从’和‘秩序’是不是特别多？",
						"french": "Les messages d'avertissement de StaticEcho contenaient beaucoup trop de 'soumission' et d''ordre', n'est-ce pas ?",
						"spanish": "Los mensajes de advertencia de StaticEcho tenían una cantidad inusual de 'obediencia' y 'orden', ¿verdad?",
						"vietnamese": "Thông điệp cảnh báo của StaticEcho có rất nhiều từ 'tuân lệnh' và 'trật tự', phải không?",
						"thai": "ข้อความเตือนของ StaticEcho มีคำว่า 'เชื่อฟัง' กับ 'ระเบียบ' เยอะเป็นพิเศษเลยใช่ไหม?",
						"hindi": "StaticEcho के चेतावनी संदेशों में 'आज्ञाकारिता' और 'व्यवस्था' शब्द बहुत ज़्यादा थे, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 거슬릴 정도로요.",
						"english": "Yes. Annoyingly so.",
						"japanese": "はい。不快なほどに。",
						"chinese": "是的。多到令人厌烦。",
						"french": "Oui. À un point irritant.",
						"spanish": "Sí. Hasta un punto molesto.",
						"vietnamese": "Vâng. Đến mức khó chịu.",
						"thai": "ใช่ค่ะ จนน่ารำคาญเลย",
						"hindi": "हाँ। परेशान करने वाले हद तक।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "박상구는 '질서'를 명분으로 '복종'을 강요했어요. 반항하는 자는 가차없이 숙청했죠.",
						"english": "Park Sang-gu enforced 'obedience' under the guise of 'order'. Those who resisted were mercilessly purged.",
						"japanese": "パク・サングは「秩序」を名目に「服従」を強要しました。反抗する者は容赦なく粛清したのです。",
						"chinese": "朴相久以‘秩序’为借口，强迫‘服从’。反抗者都被无情地清除掉了。",
						"french": "Park Sang-gu a imposé l''obéissance' sous prétexte d''ordre'. Ceux qui résistaient étaient impitoyablement purgés.",
						"spanish": "Park Sang-gu impuso la 'obediencia' bajo el pretexto del 'orden'. Aquellos que se resistían fueron purgados sin piedad.",
						"vietnamese": "Park Sang-gu đã ép buộc 'tuân lệnh' dưới chiêu bài 'trật tự'. Kẻ nào chống đối đều bị thanh trừng không thương tiếc.",
						"thai": "พัคซังกูบังคับให้ 'เชื่อฟัง' โดยอ้าง 'ระเบียบ' ใครที่ต่อต้านก็ถูกกวาดล้างอย่างไม่ปรานี",
						"hindi": "पार्क संग-गू ने 'व्यवस्था' के नाम पर 'आज्ञाकारिता' थोपी थी। जिन्होंने विरोध किया, उन्हें बेरहमी से खत्म कर दिया गया।"
					},
					"emotion": "angry",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그때의 공포가… 다시 찾아올까 두려워요.",
						"english": "I'm afraid that fear... might return.",
						"japanese": "あの時の恐怖が…また戻ってくるのではないかと恐ろしい。",
						"chinese": "我担心那时的恐惧……会再次降临。",
						"french": "J'ai peur que cette terreur... ne revienne.",
						"spanish": "Temo que ese miedo... pueda volver.",
						"vietnamese": "Tôi sợ rằng nỗi sợ hãi đó... có thể quay trở lại.",
						"thai": "ฉันกลัวว่าความหวาดกลัวในตอนนั้น... จะกลับมาอีกครั้ง",
						"hindi": "मुझे डर है कि वह दहशत... फिर से लौट सकती है।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래서 숨기자는 거예요? 같은 일이 반복되게요?",
						"english": "So you're saying we should hide it? To let the same thing happen again?",
						"japanese": "だから隠そうっていうんですか？同じことを繰り返させるために？",
						"chinese": "所以你建议我们隐瞒？让同样的事情再次发生？",
						"french": "Alors, vous voulez le cacher ? Pour que la même chose se reproduise ?",
						"spanish": "¿Así que sugieres que lo ocultemos? ¿Para que la misma historia se repita?",
						"vietnamese": "Vậy là bạn muốn giấu đi sao? Để chuyện cũ lặp lại à?",
						"thai": "งั้นจะซ่อนมันไว้เหรอคะ? เพื่อให้เรื่องเดิมๆ ซ้ำรอยอีก?",
						"hindi": "तो आप इसे छिपाना चाहते हैं? ताकि वही बात फिर से दोहराई जाए?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "StaticEcho의 잔상에서 찢어진 양복 자락이나 오래된 시계가 보였다는 증언…",
						"english": "Witness accounts of torn suit fragments or old watches seen in StaticEcho's afterimage…",
						"japanese": "StaticEchoの残像に、破れたスーツの切れ端や古い時計が見えたという証言…",
						"chinese": "据证词，在StaticEcho的残像中看到了撕裂的西装碎片或旧手表…",
						"french": "Témoignages de fragments de costume déchirés ou de vieilles montres aperçus dans le rémanence de StaticEcho…",
						"spanish": "Testimonios de trozos de traje rasgados o relojes antiguos vistos en la postimagen de StaticEcho…",
						"vietnamese": "Lời khai cho rằng đã thấy những mảnh vest rách hay đồng hồ cũ trong tàn dư của StaticEcho…",
						"thai": "คำให้การระบุว่าเห็นเศษชุดสูทขาดรุ่งริ่งหรือนาฬิกาเก่าแก่ในภาพติดตาของ StaticEcho…",
						"hindi": "StaticEcho के अवशेषों में फटे सूट के टुकड़े या पुरानी घड़ियाँ दिखने की गवाही…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그리고 메시지에서 긁히는 듯한 소리… 고통받는 자의 비명 같기도 하고.",
						"english": "And a scratching sound from the message… like the scream of one in pain.",
						"japanese": "そしてメッセージから聞こえる引っ掻くような音…苦しむ者の悲鳴のようにも。",
						"chinese": "信息中传来刮擦声… 像是受苦者的尖叫。",
						"french": "Et un grattement dans le message… comme le cri d'une âme en peine.",
						"spanish": "Y un sonido rasposo en el mensaje… como el grito de un ser sufriente.",
						"vietnamese": "Và âm thanh cào xé từ tin nhắn… giống như tiếng kêu của kẻ đang chịu đựng.",
						"thai": "และเสียงขูดขีดจากข้อความ… ราวกับเสียงกรีดร้องของผู้ทรมาน",
						"hindi": "और संदेश से आती एक खरोंच की आवाज़… जैसे किसी पीड़ित की चीख़।"
					},
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 이건 단순한 디지털 현상이 아니라는 건가요?",
						"english": "So… this isn't just a simple digital phenomenon?",
						"japanese": "では…これは単なるデジタル現象ではないと？",
						"chinese": "那么… 这不只是一个简单的数字现象吗？",
						"french": "Alors… ce n'est pas qu'un simple phénomène numérique ?",
						"spanish": "¿Entonces… esto no es solo un simple fenómeno digital?",
						"vietnamese": "Vậy… đây không phải chỉ là hiện tượng kỹ thuật số đơn thuần sao?",
						"thai": "ถ้าอย่างนั้น… นี่ไม่ใช่แค่ปรากฏการณ์ดิจิทัลธรรมดาหรือ?",
						"hindi": "तो… यह सिर्फ़ एक साधारण डिजिटल घटना नहीं है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어쩌면… 박상구라는 인간의… 잔재가 만들어낸 것일 수도 있어요.",
						"english": "Perhaps… it could be created by the remnants of a human named Park Sang-gu.",
						"japanese": "もしかしたら…パク・サングという人間の…残滓が生み出したのかもしれません。",
						"chinese": "也许… 这可能是由名叫朴相九的人类的… 残存意识所创造。",
						"french": "Peut-être… que cela a été créé par les vestiges d'un humain nommé Park Sang-gu.",
						"spanish": "Quizás… podría haber sido creado por los restos de un humano llamado Park Sang-gu.",
						"vietnamese": "Có lẽ… nó được tạo ra bởi tàn dư của một người tên Park Sang-gu.",
						"thai": "บางที… มันอาจถูกสร้างขึ้นจากเศษซากของมนุษย์ที่ชื่อ พัคซังกู ก็ได้",
						"hindi": "शायद… यह पार्क सांग-गू नामक व्यक्ति के… अवशेषों द्वारा बनाया गया हो।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "진실을 알면 더 괴로워질 거예요. 정말… 끝까지 갈 건가요?",
						"english": "Knowing the truth will only bring more suffering. Are you truly… going all the way?",
						"japanese": "真実を知れば、もっと苦しむことになるでしょう。本当に…最後まで行きますか？",
						"chinese": "知道了真相只会更痛苦。你真的… 要走到最后吗？",
						"french": "Connaître la vérité ne fera qu'apporter plus de souffrance. Allez-vous vraiment… aller jusqu'au bout ?",
						"spanish": "Conocer la verdad solo traerá más sufrimiento. ¿De verdad… vas a ir hasta el final?",
						"vietnamese": "Biết sự thật sẽ chỉ khiến bạn đau khổ hơn. Bạn thực sự… sẽ đi đến cùng sao?",
						"thai": "การรู้ความจริงจะยิ่งทำให้คุณเจ็บปวด คุณจะ… ไปให้สุดทางจริงๆ หรือ?",
						"hindi": "सच्चाई जानने से सिर्फ़ और पीड़ा होगी। क्या तुम सचमुच… अंत तक जाओगे?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "피할 수 없어요. 이 진실을 외면하면 우리는 아무것도 바꿀 수 없어요.",
						"english": "There's no avoiding it. If we turn away from this truth, we can change nothing.",
						"japanese": "避けては通れません。この真実から目を背ければ、何も変えられないでしょう。",
						"chinese": "无法逃避。如果我们对这个真相视而不见，就什么也改变不了。",
						"french": "Il n'y a pas moyen de l'éviter. Si nous ignorons cette vérité, nous ne pourrons rien changer.",
						"spanish": "No se puede evitar. Si ignoramos esta verdad, no podremos cambiar nada.",
						"vietnamese": "Không thể tránh khỏi. Nếu chúng ta quay lưng lại với sự thật này, chúng ta sẽ không thể thay đổi bất cứ điều gì.",
						"thai": "หลีกเลี่ยงไม่ได้ หากเราหันหลังให้ความจริงนี้ เราก็เปลี่ยนอะไรไม่ได้เลย",
						"hindi": "इसे टाला नहीं जा सकता। अगर हम इस सच्चाई से मुँह मोड़ते हैं, तो हम कुछ भी नहीं बदल सकते।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "디지털 공간이 붕괴된다. 어둠이 모든 것을 집어삼킨다.",
						"english": "The digital space collapses. Darkness devours everything.",
						"japanese": "デジタル空間が崩壊する。闇がすべてを飲み込む。",
						"chinese": "数字空间崩溃了。黑暗吞噬一切。",
						"french": "L'espace numérique s'effondre. Les ténèbres dévorent tout.",
						"spanish": "El espacio digital colapsa. La oscuridad lo devora todo.",
						"vietnamese": "Không gian số sụp đổ. Bóng tối nuốt chửng mọi thứ.",
						"thai": "พื้นที่ดิจิทัลพังทลายลง ความมืดกลืนกินทุกสิ่ง",
						"hindi": "डिजिटल स्पेस ढह जाता है। अंधेरा सब कुछ निगल जाता है।"
					}
				},
				{
					"content": {
						"korean": "이런 하찮은 힘으로… 감히 진실을 마주하려 하다니.",
						"english": "With such trivial power... how dare you try to face the truth.",
						"japanese": "このような取るに足らない力で…よくも真実と向き合おうとするな。",
						"chinese": "凭这种微不足道的力量…竟敢试图面对真相。",
						"french": "Avec une force si insignifiante... comment osez-vous tenter d'affronter la vérité.",
						"spanish": "Con un poder tan trivial... cómo osas intentar enfrentar la verdad.",
						"vietnamese": "Với sức mạnh tầm thường như vậy… mà dám đối mặt với sự thật.",
						"thai": "ด้วยพลังอันน้อยนิดเช่นนี้... กล้าดียังไงมาเผชิญหน้ากับความจริง",
						"hindi": "इतनी तुच्छ शक्ति से... सच का सामना करने की हिम्मत कैसे हुई।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다…!",
						"english": "Ugh... It's not... over yet...!",
						"japanese": "クッ…まだ…終わってない…！",
						"chinese": "呃…还没…结束…！",
						"french": "Argh... Ce n'est pas... encore fini...!",
						"spanish": "Ugh... ¡Todavía no... ha terminado...!",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc đâu…!",
						"thai": "อึก...ยัง...ไม่จบ...!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ...!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스가 쓰러진다. 그러나 디지털 공간의 혼란은 여전하다.",
						"english": "The unknown boss falls. But the chaos in the digital space remains.",
						"japanese": "正体不明のボスが倒れた。しかし、デジタル空間の混乱は依然として続いている。",
						"chinese": "未知首领倒下了。但数字空间的混乱依然存在。",
						"french": "Le boss inconnu tombe. Mais le chaos dans l'espace numérique persiste.",
						"spanish": "El jefe desconocido cae. Pero el caos en el espacio digital persiste.",
						"vietnamese": "Trùm không rõ danh tính gục ngã. Nhưng sự hỗn loạn trong không gian số vẫn còn.",
						"thai": "บอสปริศนาร่วงลง แต่ความสับสนวุ่นวายในพื้นที่ดิจิทัลยังคงอยู่",
						"hindi": "अज्ञात बॉस गिर जाता है। लेकिन डिजिटल स्पेस में अराजकता अभी भी बनी हुई है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크크… 이건… 시작일 뿐….",
						"english": "Heh heh... This is... just the beginning...",
						"japanese": "クク…これは…始まりにすぎない…。",
						"chinese": "呵呵…这…只是个开始…。",
						"french": "Hahaha... Ce n'est... que le début...",
						"spanish": "Jejeje... Esto es... solo el principio...",
						"vietnamese": "Khà khà… Đây… chỉ là khởi đầu thôi…",
						"thai": "คิกๆ...นี่มัน...แค่เริ่มต้นเท่านั้น...",
						"hindi": "ही ही... यह... बस शुरुआत है..."
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실은… 너희가 아는 것보다… 더 깊은 곳에…",
						"english": "The truth is... deeper than... you know...",
						"japanese": "真実は…お前たちが知るよりも…もっと深いところに…。",
						"chinese": "真相…比你们所知的…更深…。",
						"french": "La vérité est... plus profonde que... vous ne le savez...",
						"spanish": "La verdad está... más profunda de lo que... sabéis...",
						"vietnamese": "Sự thật… nằm sâu hơn… những gì các ngươi biết…",
						"thai": "ความจริงนั้น...ลึกซึ้งกว่า...ที่พวกเจ้าคิด...",
						"hindi": "सच... तुम्हारी जानकारी से... कहीं गहरा है..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 박상구가 아니란 말인가…",
						"english": "What are you saying? You're not Park Sang-goo...?",
						"japanese": "何を言ってるんだ？パク・サングじゃないのか…。",
						"chinese": "你在说什么？不是朴尚久吗…",
						"french": "Que dis-tu ? Ce n'est pas Park Sang-goo...?",
						"spanish": "¿Qué dices? ¿No eres Park Sang-goo...?",
						"vietnamese": "Ngươi nói gì vậy? Không phải Park Sang-goo sao…?",
						"thai": "พูดอะไรน่ะ? ไม่ใช่พัคซังกูเหรอ...",
						"hindi": "क्या कह रहे हो? क्या तुम पार्क सांग-कू नहीं हो...?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "StaticEcho의 본질은 아직 드러나지 않았다. 더 깊은 혼란의 중심을 향해.",
						"english": "The true nature of StaticEcho has not yet been revealed. Towards the heart of deeper chaos.",
						"japanese": "StaticEchoの本質はまだ明らかになっていない。より深い混乱の中心へと向かえ。",
						"chinese": "StaticEcho的本质尚未揭示。走向更深层混乱的中心。",
						"french": "La véritable nature de StaticEcho n'a pas encore été révélée. Vers le cœur d'un chaos plus profond.",
						"spanish": "La verdadera naturaleza de StaticEcho aún no ha sido revelada. Hacia el corazón de un caos más profundo.",
						"vietnamese": "Bản chất của StaticEcho vẫn chưa được tiết lộ. Hướng tới trung tâm của sự hỗn loạn sâu sắc hơn.",
						"thai": "แก่นแท้ของ StaticEcho ยังไม่ถูกเปิดเผย มุ่งหน้าสู่ใจกลางของความวุ่นวายที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "StaticEcho का असली स्वरूप अभी तक सामने नहीं आया है। गहरे अराजकता के केंद्र की ओर।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 디지털 공간을 일그러뜨린다. 잊힌 과거의 그림자처럼.",
						"english": "A colossal shadow distorts the digital space. Like the shadow of a forgotten past.",
						"japanese": "巨大な影がデジタル空間を歪ませる。忘れ去られた過去の影のように。",
						"chinese": "巨大的影子扭曲着数字空间。如同被遗忘的过去的影子。",
						"french": "Une ombre colossale déforme l'espace numérique. Telle l'ombre d'un passé oublié.",
						"spanish": "Una sombra colosal distorsiona el espacio digital. Como la sombra de un pasado olvidado.",
						"vietnamese": "Một bóng đen khổng lồ làm méo mó không gian kỹ thuật số. Giống như bóng ma của một quá khứ bị lãng quên.",
						"thai": "เงาขนาดมหึมาบิดเบือนพื้นที่ดิจิทัล ราวกับเงาของอดีตที่ถูกลืม",
						"hindi": "एक विशाल छाया डिजिटल स्पेस को विकृत कर रही है। एक भूले हुए अतीत की छाया की तरह।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 진실을 파헤치는 어리석은 자여.",
						"english": "You fool, digging up ancient truths.",
						"japanese": "古き真実を暴く愚か者よ。",
						"chinese": "挖掘古老真相的愚蠢之人。",
						"french": "Imbécile, à déterrer d'anciennes vérités.",
						"spanish": "Necio, desenterrando verdades antiguas.",
						"vietnamese": "Kẻ ngu ngốc, đào bới những sự thật cổ xưa.",
						"thai": "เจ้าคนโง่ ผู้ขุดคุ้ยความจริงโบราณ",
						"hindi": "ओ मूर्ख, पुराने सच खोदने वाले।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감당할 준비는 되었나? {random_boss}의 시대는 끝나지 않았다.",
						"english": "Are you ready to bear it? The era of {random_boss} is not over.",
						"japanese": "受け止める覚悟はできたか？ {random_boss}の時代は終わっていない。",
						"chinese": "你准备好承担了吗？{random_boss}的时代尚未结束。",
						"french": "Es-tu prêt à le supporter ? L'ère de {random_boss} n'est pas révolue.",
						"spanish": "¿Estás listo para soportarlo? La era de {random_boss} no ha terminado.",
						"vietnamese": "Ngươi đã sẵn sàng chịu đựng chưa? Kỷ nguyên của {random_boss} vẫn chưa kết thúc.",
						"thai": "เจ้าพร้อมที่จะแบกรับมันแล้วหรือ? ยุคสมัยของ {random_boss} ยังไม่สิ้นสุด",
						"hindi": "क्या तुम इसे सहने को तैयार हो? {random_boss} का युग समाप्त नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네놈이 박상구의 망령이든 뭐든… 여기서 끝낼 거다!",
						"english": "Whether you're Park Sang-gu's wraith or whatever… I'll end you here!",
						"japanese": "貴様がパク・サングの亡霊であろうと何であろうと…ここで終わらせてやる！",
						"chinese": "无论你是朴相九的亡魂还是什么… 我都会在这里终结你！",
						"french": "Que tu sois le spectre de Park Sang-gu ou n'importe quoi d'autre… je t'arrêterai ici !",
						"spanish": "Seas el espectro de Park Sang-gu o lo que sea… ¡te acabaré aquí!",
						"vietnamese": "Dù ngươi là linh hồn của Park Sang-gu hay bất cứ thứ gì… ta sẽ kết thúc ngươi tại đây!",
						"thai": "ไม่ว่าแกจะเป็นวิญญาณของพัคซังกูหรืออะไรก็ตาม… ฉันจะหยุดแกที่นี่!",
						"hindi": "तुम पार्क सांग-गू का प्रेत हो या कुछ और… मैं तुम्हें यहीं ख़त्म कर दूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"duration_ms": 500,
					"type": "direction",
					"action": "shake"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"디지털 혼돈 속, 잊힌 진실이 깨어난다.",
			"StaticEcho의 발자취는 너무나 익숙했다.",
			"과거의 그림자, 박상구의 망령인가.",
			"진실을 마주할 용기가 필요했다. 그러나 감당할 수 있을까."
		],
		"english": [
			"In digital chaos, a forgotten truth awakens.",
			"StaticEcho's footprints were eerily familiar.",
			"A shadow of the past, is it Park Sang-gu's ghost?",
			"I needed courage to face the truth. But could I bear it?"
		],
		"japanese": [
			"デジタルカオスの中、忘れられた真実が目覚める。",
			"StaticEchoの足跡は、あまりにも見覚えがあった。",
			"過去の影、パク・サングの亡霊か。",
			"真実と向き合う勇気が必要だった。しかし、耐えられるだろうか。"
		],
		"chinese": [
			"在数字混沌中，被遗忘的真相苏醒。",
			"StaticEcho的足迹，是如此熟悉。",
			"过去的阴影，是朴相久的亡灵吗？",
			"需要勇气面对真相。但我能承受吗？"
		],
		"french": [
			"Au cœur du chaos numérique, une vérité oubliée s'éveille.",
			"Les traces de StaticEcho étaient étrangement familières.",
			"Une ombre du passé, le spectre de Park Sang-gu ?",
			"Il fallait du courage pour affronter la vérité. Mais pourrais-je le supporter ?"
		],
		"spanish": [
			"En el caos digital, una verdad olvidada despierta.",
			"Las huellas de StaticEcho eran demasiado familiares.",
			"Una sombra del pasado, ¿es el fantasma de Park Sang-gu?",
			"Necesitaba valor para enfrentar la verdad. ¿Pero podría soportarlo?"
		],
		"vietnamese": [
			"Trong hỗn loạn kỹ thuật số, một sự thật bị lãng quên thức tỉnh.",
			"Dấu chân của StaticEcho quá đỗi quen thuộc.",
			"Bóng ma của quá khứ, là hồn ma của Park Sang-gu ư?",
			"Cần dũng khí để đối mặt sự thật. Nhưng liệu tôi có chịu đựng được không?"
		],
		"thai": [
			"ท่ามกลางความโกลาหลทางดิจิทัล ความจริงที่ถูกลืมตื่นขึ้นมา",
			"ร่องรอยของ StaticEcho คุ้นเคยเกินไป",
			"เงาอดีต หรือนี่คือวิญญาณของพัคซังกู?",
			"ต้องการความกล้าหาญเพื่อเผชิญหน้าความจริง แต่จะรับมือได้ไหม?"
		],
		"hindi": [
			"डिजिटल अराजकता में, एक भूला हुआ सच जागता है।",
			"StaticEcho के पदचिह्न बहुत परिचित थे।",
			"अतीत की एक छाया, क्या यह पार्क सांग-कू का भूत है?",
			"सच का सामना करने के लिए हिम्मत चाहिए थी। लेकिन क्या मैं इसे सह पाऊंगा?"
		]
	}
} as const;
