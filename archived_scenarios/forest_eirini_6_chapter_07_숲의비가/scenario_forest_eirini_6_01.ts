export const scenario_forest_eirini_6_01 = {
	"scenario_id": "forest_eirini_6_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"음습한 기운이 숲을 감쌌다.",
			"알 수 없는 이끌림. 발걸음은 멈추지 않았다.",
			"고대 숲의 심장으로 향하는 길. 그곳에서, 숲은 침묵으로 답했다."
		],
		"english": [
			"A gloomy aura enveloped the forest.",
			"An unknown pull. My steps did not falter.",
			"The path to the heart of the ancient forest. There, the forest responded with silence."
		],
		"japanese": [
			"陰鬱な気が森を包んだ。",
			"未知の誘引。足取りは止まらなかった。",
			"古代の森の心臓へと続く道。そこで森は沈黙で応えた。"
		],
		"chinese": [
			"阴郁的气息笼罩了森林。",
			"未知的引力。脚步不曾停歇。",
			"通往古老森林之心。在那里，森林以沉默回应。"
		],
		"french": [
			"Une aura sinistre enveloppait la forêt.",
			"Une attraction inconnue. Mes pas ne s'arrêtèrent pas.",
			"Le chemin vers le cœur de la forêt ancienne. Là, la forêt répondit par le silence."
		],
		"spanish": [
			"Un aura sombría envolvía el bosque.",
			"Una atracción desconocida. Mis pasos no se detuvieron.",
			"El camino al corazón del bosque antiguo. Allí, el bosque respondió con silencio."
		],
		"vietnamese": [
			"Một luồng khí âm u bao trùm khu rừng.",
			"Một sức hút vô hình. Bước chân không ngừng lại.",
			"Con đường đến trái tim khu rừng cổ. Ở đó, khu rừng đáp lại bằng sự im lặng."
		],
		"thai": [
			"ออร่ามืดมิดปกคลุมป่า",
			"แรงดึงดูดลึกลับ ฝีเท้าไม่หยุดนิ่ง",
			"เส้นทางสู่ใจกลางป่าโบราณ ณ ที่นั้น ป่าตอบรับด้วยความเงียบงัน"
		],
		"hindi": [
			"एक उदास आभा ने जंगल को घेर लिया।",
			"एक अज्ञात खिंचाव। मेरे कदम नहीं रुके।",
			"प्राचीन वन के हृदय का मार्ग। वहाँ, वन ने मौन से उत्तर दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "짙은 안개가 길을 삼켰다. 고대 숲의 입구는 침묵으로 짓눌려 있었다.",
						"english": "Dense fog swallowed the path. The entrance to the ancient forest was stifled by silence.",
						"japanese": "濃い霧が道を飲み込んだ。古代の森の入り口は沈黙に押しつぶされていた。",
						"chinese": "浓雾吞噬了道路。古老森林的入口被沉默压抑着。",
						"french": "Un brouillard épais engloutissait le chemin. L'entrée de la forêt ancienne était écrasée par le silence.",
						"spanish": "Una densa niebla engulló el camino. La entrada al bosque antiguo estaba sofocada por el silencio.",
						"vietnamese": "Sương mù dày đặc nuốt chửng con đường. Lối vào khu rừng cổ bị sự im lặng đè nén.",
						"thai": "หมอกหนาทึบกลืนกินเส้นทาง ปากทางเข้าป่าโบราณถูกกดทับด้วยความเงียบ",
						"hindi": "घने कोहरे ने रास्ते को निगल लिया। प्राचीन वन का प्रवेश द्वार खामोशी से दबा हुआ था।"
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
						"korean": "이 숲… 심상치 않아.",
						"english": "This forest... something's not right.",
						"japanese": "この森…ただ事じゃない。",
						"chinese": "这片森林…不寻常。",
						"french": "Cette forêt… Ce n'est pas normal.",
						"spanish": "Este bosque… algo no está bien.",
						"vietnamese": "Khu rừng này… không bình thường.",
						"thai": "ป่าแห่งนี้… ไม่ชอบมาพากล",
						"hindi": "यह जंगल… कुछ ठीक नहीं है।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃지 마.",
						"english": "Don't get lost.",
						"japanese": "道に迷うな。",
						"chinese": "别迷路。",
						"french": "Ne te perds pas.",
						"spanish": "No te pierdas.",
						"vietnamese": "Đừng lạc lối.",
						"thai": "อย่าหลงทาง",
						"hindi": "भटकना मत।"
					},
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "您是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién es usted?",
						"vietnamese": "Ngài là ai?",
						"thai": "ท่านคือใคร",
						"hindi": "आप कौन हैं?"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "숲의 현자, 엘라. 이곳의 비밀을 지키는 자.",
						"english": "Ella, the Forest Sage. Guardian of its secrets.",
						"japanese": "森の賢者、エラ。ここの秘密を守る者。",
						"chinese": "森林贤者，艾拉。此地的秘密守护者。",
						"french": "Ella, la Sage de la Forêt. Gardienne de ses secrets.",
						"spanish": "Ella, la Sabia del Bosque. Guardiana de sus secretos.",
						"vietnamese": "Ella, Hiền giả của Rừng. Người bảo vệ bí mật nơi đây.",
						"thai": "เอลล่า, ปราชญ์แห่งป่า ผู้พิทักษ์ความลับของที่นี่",
						"hindi": "वन की साध्वी, एला। इस जगह के रहस्यों की रक्षक।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "이곳은… 너희가 알던 세상이 아니야.",
						"english": "This place… is not the world you knew.",
						"japanese": "ここは…お前たちが知る世界じゃない。",
						"chinese": "这里…已非你所知的世界。",
						"french": "Cet endroit… n'est pas le monde que vous connaissiez.",
						"spanish": "Este lugar… no es el mundo que conocíais.",
						"vietnamese": "Nơi đây… không phải thế giới các ngươi từng biết.",
						"thai": "ที่นี่… ไม่ใช่โลกที่พวกเจ้าเคยรู้จัก",
						"hindi": "यह जगह… वह दुनिया नहीं है जिसे तुम जानते थे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "그들은 과거를 반복하려 해.",
						"english": "They seek to repeat the past.",
						"japanese": "彼らは過去を繰り返そうとしている。",
						"chinese": "他们试图重蹈覆辙。",
						"french": "Ils cherchent à répéter le passé.",
						"spanish": "Intentan repetir el pasado.",
						"vietnamese": "Họ đang cố lặp lại quá khứ.",
						"thai": "พวกเขาพยายามทำซ้ำอดีต",
						"hindi": "वे अतीत को दोहराना चाहते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그들? 뭘 반복한다는 거죠?",
						"english": "Them? Repeating what?",
						"japanese": "彼ら？何を繰り返すって？",
						"chinese": "他们？重复什么？",
						"french": "Eux ? Répéter quoi ?",
						"spanish": "¿Ellos? ¿Repetir qué?",
						"vietnamese": "Họ? Lặp lại cái gì?",
						"thai": "พวกเขา? ซ้ำอะไรนะ?",
						"hindi": "वे? क्या दोहरा रहे हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "낡은 주술 도구의 잔해가 발에 밟혔다. 고대의 흔적이었다.",
						"english": "Remnants of old ritual tools crunched underfoot. Ancient traces.",
						"japanese": "古びた呪術道具の残骸が足元で軋んだ。古代の痕跡だった。",
						"chinese": "脚下踩到了古老巫术工具的残骸。那是远古的痕迹。",
						"french": "Des vestiges d'anciens outils rituels crissaient sous mes pieds. Des traces antiques.",
						"spanish": "Restos de antiguas herramientas rituales crujieron bajo mis pies. Huellas ancestrales.",
						"vietnamese": "Tàn tích của những công cụ nghi lễ cũ nát dưới chân. Dấu vết cổ xưa.",
						"thai": "เศษซากเครื่องมือประกอบพิธีกรรมเก่าแก่ถูกเหยียบย่ำ มันคือร่องรอยโบราณ",
						"hindi": "पुराने अनुष्ठान उपकरणों के अवशेष पैरों के नीचे कुचले गए। प्राचीन निशान थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲은 기억해. 모든 것을.",
						"english": "The forest remembers. Everything.",
						"japanese": "森は覚えている。すべてを。",
						"chinese": "森林记得。所有的一切。",
						"french": "La forêt se souvient. De tout.",
						"spanish": "El bosque recuerda. Todo.",
						"vietnamese": "Rừng nhớ. Tất cả.",
						"thai": "ป่าจดจำ. ทุกสิ่ง.",
						"hindi": "जंगल को याद है। सब कुछ।"
					},
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "이 도구들은… 뭐죠?",
						"english": "These tools... what are they?",
						"japanese": "これらの道具は…何？",
						"chinese": "这些工具…是什么？",
						"french": "Ces outils... qu'est-ce que c'est ?",
						"spanish": "Estas herramientas... ¿qué son?",
						"vietnamese": "Những công cụ này... là gì?",
						"thai": "เครื่องมือเหล่านี้... คืออะไร?",
						"hindi": "ये औज़ार... क्या हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잊혀진 의식의 조각들. 다시 깨어나고 있어.",
						"english": "Fragments of forgotten rituals. Awakening again.",
						"japanese": "忘れ去られた儀式の断片。再び目覚めつつある。",
						"chinese": "被遗忘仪式的碎片。正在再次苏醒。",
						"french": "Des fragments de rituels oubliés. Se réveillant à nouveau.",
						"spanish": "Fragmentos de rituales olvidados. Despertando de nuevo.",
						"vietnamese": "Những mảnh vụn của nghi lễ bị lãng quên. Đang thức tỉnh trở lại.",
						"thai": "ชิ้นส่วนของพิธีกรรมที่ถูกลืม. กำลังตื่นขึ้นมาอีกครั้ง.",
						"hindi": "भूले हुए अनुष्ठानों के टुकड़े। फिर से जागृत हो रहे हैं।"
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
					"speaker": "ela",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 병들고 있어. 너희의 탐욕 때문에.",
						"english": "The forest is ailing. Because of your greed.",
						"japanese": "森は病んでいる。お前たちの貪欲さゆえに。",
						"chinese": "森林正在生病。因为你们的贪婪。",
						"french": "La forêt souffre. À cause de votre cupidité.",
						"spanish": "El bosque está enfermo. Por vuestra codicia.",
						"vietnamese": "Rừng đang bệnh. Vì lòng tham của các ngươi.",
						"thai": "ป่ากำลังป่วย. เพราะความโลภของพวกเจ้า.",
						"hindi": "जंगल बीमार पड़ रहा है। तुम्हारे लालच के कारण।"
					},
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "탐욕이라니? 우린 단서를 찾으러 왔을 뿐인데.",
						"english": "Greed? We just came to find clues.",
						"japanese": "貪欲？我々はただ手がかりを探しに来ただけだ。",
						"chinese": "贪婪？我们只是来寻找线索的。",
						"french": "Cupidité ? Nous sommes juste venus chercher des indices.",
						"spanish": "¿Codicia? Solo vinimos a buscar pistas.",
						"vietnamese": "Tham lam ư? Chúng tôi chỉ đến để tìm manh mối.",
						"thai": "ความโลภงั้นหรือ? พวกเราแค่มาหาเบาะแสเท่านั้นเอง.",
						"hindi": "लालच? हम तो बस सुराग ढूंढने आए थे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진실을 향한 발걸음이, 때론 더 깊은 나락으로 이끌지.",
						"english": "Steps towards truth sometimes lead to a deeper abyss.",
						"japanese": "真実への一歩が、時にはより深き奈落へと導く。",
						"chinese": "迈向真相的脚步，有时会引向更深的深渊。",
						"french": "Les pas vers la vérité mènent parfois à un abîme plus profond.",
						"spanish": "Los pasos hacia la verdad a veces llevan a un abismo más profundo.",
						"vietnamese": "Những bước chân hướng về sự thật, đôi khi lại dẫn đến vực sâu hơn.",
						"thai": "ก้าวเดินสู่ความจริง, บางครั้งก็นำพาไปสู่ห้วงเหวที่ลึกกว่า.",
						"hindi": "सत्य की ओर कदम, कभी-कभी गहरे गर्त की ओर ले जाते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲이 위험하다는 건가요?",
						"english": "Is the forest dangerous?",
						"japanese": "森が危険だと？",
						"chinese": "森林很危险吗？",
						"french": "La forêt est dangereuse ?",
						"spanish": "¿Es peligroso el bosque?",
						"vietnamese": "Rừng nguy hiểm sao?",
						"thai": "ป่าอันตรายหรือครับ?",
						"hindi": "क्या जंगल खतरनाक है?"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "숲은 고통받고 있어. 곧, 비명을 지를 거야.",
						"english": "The forest is suffering. Soon, it will scream.",
						"japanese": "森は苦しんでいる。やがて、悲鳴を上げるだろう。",
						"chinese": "森林正在受苦。很快，它就会尖叫。",
						"french": "La forêt souffre. Bientôt, elle hurlera.",
						"spanish": "El bosque está sufriendo. Pronto, gritará.",
						"vietnamese": "Rừng đang chịu đựng. Chẳng mấy chốc, nó sẽ la hét.",
						"thai": "ป่ากำลังทนทุกข์. ในไม่ช้า, มันจะกรีดร้อง.",
						"hindi": "जंगल पीड़ा में है। जल्द ही, यह चीख उठेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "되돌아가. 지금이라도.",
						"english": "Turn back. While you still can.",
						"japanese": "引き返せ。今ならまだ間に合う。",
						"chinese": "回头。趁现在。",
						"french": "Fais demi-tour. Tant qu'il est encore temps.",
						"spanish": "Regresa. Aún estás a tiempo.",
						"vietnamese": "Quay lại đi. Vẫn còn kịp.",
						"thai": "กลับไปซะ. ตอนนี้ยังทัน.",
						"hindi": "वापस जाओ। अभी भी वक्त है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 이 숲의 비밀을 알아야만 해.",
						"english": "I can't stop. I must uncover this forest's secret.",
						"japanese": "止まれない。この森の秘密を知らなくては。",
						"chinese": "无法停止。我必须知道这片森林的秘密。",
						"french": "Je ne peux pas m'arrêter. Je dois découvrir le secret de cette forêt.",
						"spanish": "No puedo detenerme. Debo saber el secreto de este bosque.",
						"vietnamese": "Không thể dừng lại. Ta phải biết bí mật của khu rừng này.",
						"thai": "หยุดไม่ได้. ฉันต้องรู้ความลับของป่านี้.",
						"hindi": "मैं रुक नहीं सकता। मुझे इस जंगल का रहस्य जानना ही होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희가 찾는 진실은, 파멸을 부를 뿐이야.",
						"english": "The truth you seek will only bring ruin.",
						"japanese": "お前たちが求める真実は、破滅を招くだけだ。",
						"chinese": "你们所寻求的真相，只会带来毁灭。",
						"french": "La vérité que vous cherchez n'apportera que la ruine.",
						"spanish": "La verdad que buscáis solo traerá la ruina.",
						"vietnamese": "Sự thật các ngươi tìm kiếm, chỉ mang lại sự hủy diệt.",
						"thai": "ความจริงที่พวกเจ้าตามหา จะนำมาซึ่งความพินาศเท่านั้น.",
						"hindi": "तुम जो सच तलाश रहे हो, वह सिर्फ़ तबाही लाएगा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 공기는 더욱 차갑고 끈적해졌다. 되돌아갈 길은 보이지 않았다.",
						"english": "The forest air grew colder and denser. The path back was gone.",
						"japanese": "森の空気は一層冷たく粘り気を帯びた。戻る道は見えなかった。",
						"chinese": "森林的空气变得更加寒冷而黏稠。回去的路已不见踪影。",
						"french": "L'air de la forêt devint plus froid et plus épais. Le chemin du retour avait disparu.",
						"spanish": "El aire del bosque se volvió más frío y pegajoso. El camino de vuelta no se veía.",
						"vietnamese": "Không khí trong rừng trở nên lạnh và đặc quánh hơn. Lối về đã không còn.",
						"thai": "อากาศในป่าหนาวเย็นและเหนียวเหนอะหนะยิ่งขึ้น. เส้นทางกลับหายไปแล้ว.",
						"hindi": "जंगल की हवा और ठंडी और चिपचिपी हो गई। लौटने का रास्ता नहीं दिख रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…하지만 이미 너무 멀리 왔어.",
						"english": "...But I've already come too far.",
						"japanese": "……だが、もう遠くまで来すぎてしまった。",
						"chinese": "……但，我已经走得太远了。",
						"french": "...Mais je suis déjà allé trop loin.",
						"spanish": "...Pero ya he llegado demasiado lejos.",
						"vietnamese": "...Nhưng ta đã đi quá xa rồi.",
						"thai": "...แต่ฉันมาไกลเกินไปแล้ว.",
						"hindi": "...पर मैं पहले ही बहुत दूर आ चुका हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어리석은… 필멸자여… 숲의… 저주는… 끝나지 않아…",
						"english": "Foolish… mortal… The forest's… curse… will not end…",
						"japanese": "愚かな…定命の者よ…森の…呪いは…終わらない…",
						"chinese": "愚蠢的…凡人啊…森林的…诅咒…不会结束…",
						"french": "Mortel… insensé… La malédiction… de la forêt… ne prendra pas fin…",
						"spanish": "¡Estúpido… mortal…! La maldición… del bosque… no terminará…",
						"vietnamese": "Kẻ phàm trần… ngu ngốc… Lời nguyền của… rừng… sẽ không kết thúc…",
						"thai": "ไอ้…มนุษย์…โง่เง่า… คำสาปของ…ป่า…ไม่มีวันสิ้นสุด…",
						"hindi": "मूर्ख… नश्वर… वन का… श्राप… समाप्त नहीं होगा…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니라고?",
						"english": "…It's not over?",
						"japanese": "…終わってないのか？",
						"chinese": "…还没结束？",
						"french": "…Ce n'est pas fini ?",
						"spanish": "…¿No ha terminado?",
						"vietnamese": "…Chưa kết thúc sao?",
						"thai": "…ยังไม่จบอีกเหรอ?",
						"hindi": "…यह ख़त्म नहीं हुआ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "승리했나… 하지만 숲은… 여전히 고통받고 있어.",
						"english": "We won… But the forest… still suffers.",
						"japanese": "勝ったのか…しかし森は…まだ苦しんでいる。",
						"chinese": "胜利了…但森林…仍在受苦。",
						"french": "Nous avons gagné… Mais la forêt… souffre toujours.",
						"spanish": "Hemos ganado… Pero el bosque… sigue sufriendo.",
						"vietnamese": "Chúng ta thắng rồi… Nhưng khu rừng… vẫn đang đau khổ.",
						"thai": "เราชนะแล้ว… แต่ป่า…ก็ยังคงทุกข์ทรมานอยู่ดี",
						"hindi": "हम जीत गए… लेकिन वन… अब भी पीड़ित है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "정체 모를 그림자는 사라졌지만, 숲의 음울한 기운은 여전했다. 어쩌면, 이제 시작일지도 모른다.",
						"english": "The mysterious shadow vanished, but the forest's gloomy aura remained. Perhaps, this is just the beginning.",
						"japanese": "正体不明の影は消えたが、森の陰鬱な気配は依然として残っていた。もしかしたら、これは始まりに過ぎないのかもしれない。",
						"chinese": "神秘的影子消失了，但森林的阴郁气息依然存在。也许，这只是个开始。",
						"french": "L'ombre mystérieuse a disparu, mais l'aura sombre de la forêt persistait. Peut-être, ce n'est que le début.",
						"spanish": "La sombra misteriosa desapareció, pero el aura sombría del bosque permanecía. Quizás, esto sea solo el principio.",
						"vietnamese": "Bóng đen bí ẩn biến mất, nhưng khí u ám của khu rừng vẫn còn đó. Có lẽ, đây chỉ là khởi đầu.",
						"thai": "เงาลึกลับหายไปแล้ว แต่กลิ่นอายอันมืดมิดของป่ายังคงอยู่ บางที นี่อาจเป็นแค่จุดเริ่มต้น",
						"hindi": "रहस्यमयी छाया गायब हो गई, लेकिन वन का उदास माहौल बना रहा। शायद, यह तो बस शुरुआत है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳. 정체 모를 어둠이 도사리고 있었다.",
						"english": "The deepest part of the forest. An unknown darkness lurked.",
						"japanese": "森の最も深い場所。正体不明の闇が潜んでいた。",
						"chinese": "森林最深处。一股不明的黑暗潜伏着。",
						"french": "Le lieu le plus profond de la forêt. Une obscurité inconnue rôdait.",
						"spanish": "La parte más profunda del bosque. Una oscuridad desconocida acechaba.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một bóng tối vô danh đang ẩn mình.",
						"thai": "ส่วนที่ลึกที่สุดของป่า. ความมืดมิดที่ระบุไม่ได้ซ่อนตัวอยู่.",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक अज्ञात अँधेरा छिपा हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 숲의 부름이었나.",
						"english": "Is this... the forest's call?",
						"japanese": "これが……森の呼び声だったのか。",
						"chinese": "这难道是……森林的呼唤吗？",
						"french": "Est-ce... l'appel de la forêt ?",
						"spanish": "¿Es esto... la llamada del bosque?",
						"vietnamese": "Đây có phải là... tiếng gọi của rừng?",
						"thai": "นี่คือ... เสียงเรียกของป่าหรือ.",
						"hindi": "क्या यह... जंगल की पुकार थी?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 숲의 슬픔 그 자체. 건드려선 안 돼.",
						"english": "He is the forest's sorrow itself. Do not touch him.",
						"japanese": "彼は森の悲しみそのもの。触れてはならない。",
						"chinese": "他就是森林悲伤的化身。不可触碰。",
						"french": "Il est la tristesse même de la forêt. Ne le touchez pas.",
						"spanish": "Él es la tristeza misma del bosque. No lo toques.",
						"vietnamese": "Hắn là nỗi buồn của khu rừng. Không được động vào.",
						"thai": "เขาคือความโศกเศร้าของป่า. อย่าได้แตะต้อง.",
						"hindi": "वह जंगल का दुःख है। उसे छूना मत।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히, 침범하는 자들아. 숲의 고통을 맛보아라!",
						"english": "You who dare to trespass. Taste the forest's pain!",
						"japanese": "侵す者たちよ、森の苦痛を味わえ！",
						"chinese": "胆敢入侵者。尝尝森林的痛苦吧！",
						"french": "Osez, intrus. Goûtez la douleur de la forêt !",
						"spanish": "¡Osad, invasores! ¡Probad el dolor del bosque!",
						"vietnamese": "Kẻ nào dám xâm phạm, hãy nếm trải nỗi đau của khu rừng!",
						"thai": "พวกเจ้าผู้กล้าบุกรุก จงลิ้มรสความเจ็บปวดของป่า!",
						"hindi": "घुसपैठ करने वाले, हिम्मत है तो जंगल का दर्द चखो!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "물러설 수 없어!",
						"english": "I cannot retreat!",
						"japanese": "退けない！",
						"chinese": "无法后退！",
						"french": "Impossible de reculer !",
						"spanish": "¡No puedo retroceder!",
						"vietnamese": "Không thể lùi bước!",
						"thai": "ถอยไม่ได้!",
						"hindi": "पीछे नहीं हट सकता!"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "ela",
					"duration_ms": 400
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "숲이… 울고 있어…",
						"english": "The forest… is weeping…",
						"japanese": "森が…泣いている…",
						"chinese": "森林…在哭泣…",
						"french": "La forêt… pleure…",
						"spanish": "El bosque… está llorando…",
						"vietnamese": "Rừng… đang khóc…",
						"thai": "ป่า…กำลังร้องไห้…",
						"hindi": "वन… रो रहा है…"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "The colossal shadow swallowed everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的影子吞噬了一切。",
						"french": "L'ombre colossale a tout englouti.",
						"spanish": "La colosal sombra lo engulló todo.",
						"vietnamese": "Bóng đen khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาขนาดใหญ่กลืนกินทุกสิ่ง",
						"hindi": "विशाल छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "미약한 존재여… 숲의 분노 앞에 무릎 꿇어라!",
						"english": "Frail being… kneel before the forest's wrath!",
						"japanese": "か弱い存在よ…森の怒りの前にひざまずけ！",
						"chinese": "渺小的存在啊…在森林的愤怒面前跪下吧！",
						"french": "Être frêle… agenouille-toi devant la colère de la forêt !",
						"spanish": "¡Ser frágil… arrodíllate ante la ira del bosque!",
						"vietnamese": "Hỡi kẻ yếu ớt… hãy quỳ gối trước cơn thịnh nộ của khu rừng!",
						"thai": "เจ้าผู้ต่ำต้อย… จงคุกเข่าต่อหน้าความพิโรธของป่า!",
						"hindi": "कमजोर प्राणी… वन के क्रोध के सामने घुटने टेको!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…젠장. 여기서 멈출 순 없어!",
						"english": "…Damn it. I can't stop here!",
						"japanese": "…くそ。ここで止まるわけにはいかない！",
						"chinese": "…该死。我不能停在这里！",
						"french": "…Zut. Je ne peux pas m'arrêter ici !",
						"spanish": "…Maldita sea. ¡No puedo detenerme aquí!",
						"vietnamese": "…Chết tiệt. Không thể dừng lại ở đây được!",
						"thai": "…บ้าเอ๊ย ฉันหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "…धत् तेरे की। मैं यहाँ नहीं रुक सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
