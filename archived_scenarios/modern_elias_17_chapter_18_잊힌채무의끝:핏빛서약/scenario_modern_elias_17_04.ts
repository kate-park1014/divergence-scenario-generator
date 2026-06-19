export const scenario_modern_elias_17_04 = {
	"scenario_id": "modern_elias_17_04",
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
	"prologue": {
		"korean": [
			"엘리아스 안에 잠든 '회한'의 본질.",
			"닥스는 데이터 속에서 진실을 꿰뚫었다.",
			"마침내 드러난 갱스터의 마지막 흔적.",
			"핏빛 서약의 조각들이, 속죄의 문턱에서 기다린다.",
			"이 모든 것이 엘리아스의 비극을 완성할 것이다."
		],
		"english": [
			"The essence of 'Regret' dormant within Elias.",
			"Dux pierced through the truth within the data.",
			"Finally, the gangster's last trace was revealed.",
			"Fragments of the blood pact await at the threshold of atonement.",
			"All of this will complete Elias's tragedy."
		],
		"japanese": [
			"エリアスの中に眠る「後悔」の本質。",
			"ダックスはデータの中で真実を見抜いた。",
			"ついに明かされたギャングの最後の痕跡。",
			"血塗られた誓約の破片が、贖罪の門で待つ。",
			"これら全てがエリアスの悲劇を完成させるだろう。"
		],
		"chinese": [
			"艾利亚斯体内沉睡的“悔恨”的本质。",
			"达克斯在数据中洞悉了真相。",
			"最终，黑帮的最后痕迹被揭露。",
			"血色誓约的碎片，在赎罪的门槛等待。",
			"这一切都将完成艾利亚斯的悲剧。"
		],
		"french": [
			"L'essence du 'Regret' qui sommeille en Elias.",
			"Dux a percé la vérité à travers les données.",
			"Enfin, la dernière trace du gangster fut révélée.",
			"Des fragments du pacte sanglant attendent au seuil de l'expiation.",
			"Tout ceci achèvera la tragédie d'Elias."
		],
		"spanish": [
			"La esencia del 'Arrepentimiento' latente en Elias.",
			"Dux desentrañó la verdad en los datos.",
			"Finalmente, el último rastro del gánster fue revelado.",
			"Fragmentos del pacto de sangre esperan en el umbral de la expiación.",
			"Todo esto completará la tragedia de Elias."
		],
		"vietnamese": [
			"Bản chất của 'Hối tiếc' đang ngủ sâu trong Elias.",
			"Dux đã nhìn thấu sự thật trong dữ liệu.",
			"Cuối cùng, dấu vết cuối cùng của tên gangster đã được hé lộ.",
			"Những mảnh vỡ của lời thề máu đang chờ đợi ở ngưỡng cửa chuộc tội.",
			"Tất cả những điều này sẽ hoàn thành bi kịch của Elias."
		],
		"thai": [
			"แก่นแท้ของ 'ความเสียใจ' ที่หลับใหลอยู่ในเอเลียส",
			"ดักซ์เจาะทะลุความจริงในข้อมูล",
			"ในที่สุด ร่องรอยสุดท้ายของแก๊งสเตอร์ก็ถูกเปิดเผย",
			"ชิ้นส่วนของพันธสัญญาโลหิต กำลังรออยู่ที่ธรณีประตูแห่งการไถ่บาป",
			"ทั้งหมดนี้จะเติมเต็มโศกนาฏกรรมของเอเลียส"
		],
		"hindi": [
			"इलियास के भीतर सोया 'पछतावा' का सार।",
			"डक्स ने डेटा के भीतर से सच को समझा।",
			"अंततः, गैंगस्टर का अंतिम निशान सामने आया।",
			"रक्त-प्रतिज्ञा के टुकड़े, प्रायश्चित्त की दहलीज पर प्रतीक्षा कर रहे हैं।",
			"यह सब इलियास की त्रासदी को पूरा करेगा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "엘리아스의 행동 패턴이… 심상치 않아요.",
						"english": "Elias's behavior patterns... are unusual.",
						"japanese": "エリアスの行動パターンが…尋常ではありません。",
						"chinese": "艾利亚斯的行为模式…很不寻常。",
						"french": "Les schémas de comportement d'Elias... sont inhabituels.",
						"spanish": "Los patrones de comportamiento de Elias... son inusuales.",
						"vietnamese": "Mẫu hành vi của Elias... thật bất thường.",
						"thai": "รูปแบบพฤติกรรมของเอเลียส... ไม่ปกติเลย",
						"hindi": "इलियास के व्यवहार के पैटर्न... असामान्य हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 의미야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là gì?",
						"thai": "หมายความว่าไง?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "그의 몸에 깃든 '회한'이 발현되는 조건. 그걸 찾고 있어요.",
						"english": "The conditions under which the 'Regret' residing in his body manifests. I'm looking for that.",
						"japanese": "彼の体に宿る「後悔」が発現する条件。それを探しています。",
						"chinese": "他体内寄宿的“悔恨”显现的条件。我正在寻找那个。",
						"french": "Les conditions dans lesquelles le 'Regret' logé dans son corps se manifeste. C'est ce que je cherche.",
						"spanish": "Las condiciones bajo las cuales el 'Arrepentimiento' que reside en su cuerpo se manifiesta. Estoy buscando eso.",
						"vietnamese": "Điều kiện để 'Hối tiếc' ẩn chứa trong cơ thể anh ta bộc phát. Tôi đang tìm kiếm điều đó.",
						"thai": "เงื่อนไขที่ 'ความเสียใจ' ที่สถิตอยู่ในร่างกายของเขาจะปรากฏออกมา ผมกำลังหาอยู่",
						"hindi": "उसके शरीर में मौजूद 'पछतावे' के प्रकट होने की शर्तें। मैं वही ढूंढ रहा हूँ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "회한이… 엘리아스를 조종하는 건가?",
						"english": "Is Regret... controlling Elias?",
						"japanese": "後悔が…エリアスを操っているのか？",
						"chinese": "悔恨…正在操控艾利亚斯吗？",
						"french": "Le Regret... contrôle-t-il Elias ?",
						"spanish": "¿El Arrepentimiento... está controlando a Elias?",
						"vietnamese": "Hối tiếc... đang điều khiển Elias sao?",
						"thai": "ความเสียใจ... กำลังควบคุมเอเลียสอยู่เหรอ?",
						"hindi": "क्या पछतावा... इलियास को नियंत्रित कर रहा है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "거의 그렇다고 봐야죠. 특히 그 망설임은….",
						"english": "Almost certainly. Especially that hesitation...",
						"japanese": "ほぼ間違いありません。特にその躊躇は…。",
						"chinese": "差不多可以这么说。特别是那种犹豫不决…。",
						"french": "Presque certainement. Surtout cette hésitation...",
						"spanish": "Casi con certeza. Especialmente esa vacilación...",
						"vietnamese": "Gần như chắc chắn rồi. Đặc biệt là sự do dự đó...",
						"thai": "เกือบจะใช่เลยครับ โดยเฉพาะอย่างยิ่งความลังเลนั้น...",
						"hindi": "लगभग निश्चित रूप से। खासकर वह झिझक..."
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "분석 결과, '회한'의 발현은 특정 감정과 기억에 반응합니다.",
						"english": "Analysis shows 'Regret' manifests in response to specific emotions and memories.",
						"japanese": "分析の結果、「後悔」の発現は特定の感情や記憶に反応します。",
						"chinese": "分析显示，“悔恨”的显现与特定的情感和记忆有关。",
						"french": "L'analyse montre que la manifestation du « Regret » réagit à des émotions et des souvenirs spécifiques.",
						"spanish": "El análisis revela que 'Arrepentimiento' se manifiesta en respuesta a emociones y recuerdos específicos.",
						"vietnamese": "Phân tích cho thấy 'Hối hận' biểu hiện khi phản ứng với những cảm xúc và ký ức cụ thể.",
						"thai": "ผลการวิเคราะห์เผยว่า 'ความเสียใจ' แสดงออกเมื่อตอบสนองต่ออารมณ์และความทรงจำที่เฉพาะเจาะจง",
						"hindi": "विश्लेषण से पता चलता है कि 'पछतावा' कुछ भावनाओं और यादों के जवाब में प्रकट होता है।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "감정과 기억… 그 갱스터의?",
						"english": "Emotions and memories... his, the gangster's?",
						"japanese": "感情と記憶…あのギャングスターの？",
						"chinese": "情感和记忆……那个黑帮的？",
						"french": "Émotions et souvenirs... du gangster ?",
						"spanish": "¿Emociones y recuerdos... del gánster?",
						"vietnamese": "Cảm xúc và ký ức... của tên xã hội đen đó?",
						"thai": "อารมณ์และความทรงจำ...ของนักเลงคนนั้น?",
						"hindi": "भावनाएं और यादें... उस गैंगस्टर की?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "네. 엘리아스는 그 '회한'의 그릇일 뿐이에요.",
						"english": "Yes. Elias is merely a vessel for that 'Regret'.",
						"japanese": "はい。エリアスは、その「後悔」の器にすぎません。",
						"chinese": "是的。埃利亚斯只是那“悔恨”的容器。",
						"french": "Oui. Elias n'est qu'un réceptacle pour ce « Regret ».",
						"spanish": "Sí. Elias es solo un recipiente para ese 'Arrepentimiento'.",
						"vietnamese": "Vâng. Elias chỉ là một vật chứa cho 'Hối hận' đó thôi.",
						"thai": "ใช่ เอลียสเป็นเพียงภาชนะของ 'ความเสียใจ' นั้น",
						"hindi": "हाँ। एलियास केवल उस 'पछतावे' का एक पात्र है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 엘리아스는… 그저 피해자라는 거야?",
						"english": "So Elias... is just a victim?",
						"japanese": "じゃあ、エリアスは…ただの被害者ってこと？",
						"chinese": "那么埃利亚斯……只是一个受害者吗？",
						"french": "Alors Elias... n'est qu'une victime ?",
						"spanish": "¿Entonces Elias... es solo una víctima?",
						"vietnamese": "Vậy Elias... chỉ là một nạn nhân thôi sao?",
						"thai": "งั้นเอลียส...ก็แค่เหยื่อเหรอ?",
						"hindi": "तो एलियास... बस एक पीड़ित है?"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "데이터를 종합하면… '회한'의 핵심은 갱스터의 죽음이에요.",
						"english": "Compiling the data... the core of 'Regret' is the gangster's death.",
						"japanese": "データを総合すると…「後悔」の核心は、ギャングスターの死です。",
						"chinese": "综合数据显示……“悔恨”的核心是那个黑帮的死亡。",
						"french": "En compilant les données... le cœur du « Regret » est la mort du gangster.",
						"spanish": "Al compilar los datos... el núcleo de 'Arrepentimiento' es la muerte del gánster.",
						"vietnamese": "Tổng hợp dữ liệu... cốt lõi của 'Hối hận' là cái chết của tên xã hội đen.",
						"thai": "จากการรวบรวมข้อมูล...แก่นแท้ของ 'ความเสียใจ' คือการตายของนักเลงคนนั้น",
						"hindi": "डेटा को संकलित करने पर... 'पछतावे' का मूल उस गैंगस्टर की मौत है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "죽음? 어디서 죽었는데?",
						"english": "Death? Where did he die?",
						"japanese": "死？どこで死んだって？",
						"chinese": "死亡？死在哪里？",
						"french": "Mort ? Où est-il mort ?",
						"spanish": "¿Muerte? ¿Dónde murió?",
						"vietnamese": "Chết? Chết ở đâu?",
						"thai": "ตาย? ตายที่ไหน?",
						"hindi": "मौत? वह कहाँ मरा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "도시의 가장 어둡고 잊힌 곳. 그곳에서 모든 비극이 시작됐죠.",
						"english": "The city's darkest, most forgotten place. That's where all the tragedy began.",
						"japanese": "街の最も暗く忘れられた場所。そこで全ての悲劇が始まったのです。",
						"chinese": "城市最黑暗、最被遗忘的地方。所有的悲剧都从那里开始。",
						"french": "L'endroit le plus sombre et oublié de la ville. C'est là que toute la tragédie a commencé.",
						"spanish": "El lugar más oscuro y olvidado de la ciudad. Allí comenzó toda la tragedia.",
						"vietnamese": "Nơi tối tăm và bị lãng quên nhất của thành phố. Mọi bi kịch đều bắt đầu từ đó.",
						"thai": "สถานที่ที่มืดมิดและถูกลืมที่สุดในเมือง ที่นั่นคือจุดเริ่มต้นของโศกนาฏกรรมทั้งหมด",
						"hindi": "शहर का सबसे अँधेरा, सबसे भूला हुआ स्थान। वहीं से सारी त्रासदी शुरू हुई।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 거기로 가야 해.",
						"english": "Then we must go there.",
						"japanese": "じゃあ、そこへ行かなきゃ。",
						"chinese": "那我们必须去那里。",
						"french": "Alors nous devons y aller.",
						"spanish": "Entonces debemos ir allí.",
						"vietnamese": "Vậy thì chúng ta phải đến đó.",
						"thai": "งั้นเราต้องไปที่นั่น",
						"hindi": "तो हमें वहाँ जाना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "낡은 지도에 갱스터가 최후를 맞이한 장소가 표시되었다.",
						"english": "The old map showed the place where the gangster met his end.",
						"japanese": "古い地図にギャングスターが最期を迎えた場所が示された。",
						"chinese": "旧地图上标示出了那个黑帮最终的死亡之地。",
						"french": "L'ancienne carte indiquait l'endroit où le gangster avait trouvé sa fin.",
						"spanish": "El viejo mapa mostraba el lugar donde el gánster encontró su fin.",
						"vietnamese": "Bản đồ cũ đã đánh dấu nơi tên xã hội đen đã kết thúc cuộc đời mình.",
						"thai": "แผนที่เก่าได้ระบุสถานที่ที่นักเลงคนนั้นจบชีวิตลง",
						"hindi": "पुराने नक्शे पर वह जगह दिखाई गई जहाँ गैंगस्टर का अंत हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "낡고 음침한 폐허. 핏빛 서약의 마지막 조각이 어둠 속에 놓여 있었다.",
						"english": "An old, gloomy ruin. The last fragment of the Blood Oath lay in the darkness.",
						"japanese": "古く陰鬱な廃墟。血の誓いの最後の破片が闇の中に置かれていた。",
						"chinese": "一处古老阴森的废墟。血誓的最后一片碎片躺在黑暗中。",
						"french": "Une vieille ruine sinistre. Le dernier fragment du Serment de Sang gisait dans l'obscurité.",
						"spanish": "Una ruina antigua y sombría. El último fragmento del Juramento de Sangre yacía en la oscuridad.",
						"vietnamese": "Một tàn tích cũ kỹ, u ám. Mảnh cuối cùng của Lời Thề Máu nằm trong bóng tối.",
						"thai": "ซากปรักหักพังเก่าแก่และมืดมิด ชิ้นส่วนสุดท้ายของสัตย์สาบานโลหิตวางอยู่ในความมืดมิด",
						"hindi": "एक पुराना, उदास खंडहर। रक्त शपथ का अंतिम टुकड़ा अँधेरे में पड़ा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 마지막 조각이야.",
						"english": "This... is the final piece.",
						"japanese": "これが…最後の破片だ。",
						"chinese": "这…是最后一片了。",
						"french": "C'est... le dernier fragment.",
						"spanish": "Esta... es la última pieza.",
						"vietnamese": "Đây... là mảnh ghép cuối cùng.",
						"thai": "นี่...คือชิ้นส่วนสุดท้าย.",
						"hindi": "यह... आखिरी टुकड़ा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "'회한'의 발현 조건이 모두 충족될 겁니다.",
						"english": "All conditions for the 'Regret' manifestation will be met.",
						"japanese": "「後悔」の発現条件がすべて満たされるだろう。",
						"chinese": "『悔恨』的显现条件都将满足。",
						"french": "Toutes les conditions pour la manifestation du 'Regret' seront remplies.",
						"spanish": "Todas las condiciones para la manifestación del 'Arrepentimiento' se cumplirán.",
						"vietnamese": "Tất cả điều kiện để 'Hối Hận' xuất hiện sẽ được đáp ứng.",
						"thai": "เงื่อนไขทั้งหมดสำหรับการสำแดงของ 'ความเสียใจ' จะสำเร็จสมบูรณ์",
						"hindi": "'पछतावा' के प्रकट होने की सभी शर्तें पूरी हो जाएंगी।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "엘리아스가… 변할 거야?",
						"english": "Elias... will change?",
						"japanese": "エリアスが…変わるのか？",
						"chinese": "伊莱亚斯…会变吗？",
						"french": "Elias... va changer ?",
						"spanish": "¿Elias... cambiará?",
						"vietnamese": "Elias... sẽ thay đổi sao?",
						"thai": "เอเลียส...จะเปลี่ยนไปเหรอ?",
						"hindi": "एलियास... बदल जाएगा?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 트위스트는… 피할 수 없어요.",
						"english": "That twist... is unavoidable.",
						"japanese": "その展開は…避けられない。",
						"chinese": "那个转折…无法避免。",
						"french": "Ce rebondissement... est inévitable.",
						"spanish": "Ese giro... es inevitable.",
						"vietnamese": "Biến cố đó... không thể tránh khỏi.",
						"thai": "การพลิกผันนั้น...หลีกเลี่ยงไม่ได้.",
						"hindi": "वह मोड़... टाला नहीं जा सकता।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "알고 있었어. 각오했어.",
						"english": "I knew. I was ready.",
						"japanese": "分かっていた。覚悟していた。",
						"chinese": "我早就知道。我已做好准备。",
						"french": "Je savais. J'étais préparé.",
						"spanish": "Lo sabía. Estaba preparado.",
						"vietnamese": "Tôi đã biết. Đã chuẩn bị sẵn.",
						"thai": "ฉันรู้แล้ว. ฉันเตรียมใจไว้แล้ว.",
						"hindi": "मैं जानता था। मैंने तैयारी कर ली थी।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "핏빛 서약의 마지막 조각을 손에 넣은 순간, 거대한 그림자가 나타났다.",
						"english": "The moment the final piece of the Blood Pact was obtained, a massive shadow appeared.",
						"japanese": "血の誓約の最後の破片を手に入れた瞬間、巨大な影が現れた。",
						"chinese": "获得血色誓约最后一片的瞬间，一个巨大的影子出现了。",
						"french": "Au moment où le dernier fragment du Pacte de Sang fut obtenu, une ombre gigantesque apparut.",
						"spanish": "En el instante en que se obtuvo la última pieza del Pacto de Sangre, una sombra gigantesca apareció.",
						"vietnamese": "Khoảnh khắc mảnh ghép cuối cùng của Lời Thề Máu được đạt được, một bóng đen khổng lồ xuất hiện.",
						"thai": "ทันทีที่ได้ชิ้นส่วนสุดท้ายของพันธสัญญาโลหิต เงาขนาดมหึมาก็ปรากฏขึ้น.",
						"hindi": "जैसे ही रक्त अनुबंध का अंतिम टुकड़ा प्राप्त हुआ, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 저주받은 곳에 발을 들이는가.",
						"english": "Dare you... set foot in this cursed place?",
						"japanese": "よくも…この呪われた場所に足を踏み入れたな。",
						"chinese": "你竟敢…踏入这受诅咒之地？",
						"french": "Oses-tu... poser le pied dans ce lieu maudit ?",
						"spanish": "¿Te atreves... a pisar este lugar maldito?",
						"vietnamese": "Dám sao... đặt chân vào nơi bị nguyền rủa này?",
						"thai": "เจ้ากล้า...เหยียบย่างเข้ามาในสถานที่ต้องสาปนี้รึ?",
						"hindi": "क्या तुम... इस शापित जगह में कदम रखने की हिम्मत करते हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "누구냐! 엘리아스를 막으려는 자는 누구든 쓰러뜨릴 거야.",
						"english": "Who are you?! I'll strike down anyone who tries to stop Elias!",
						"japanese": "誰だ！ エリアスを止めようとする者は誰でも倒す！",
						"chinese": "你是谁？！任何想阻止伊莱亚斯的人我都会击倒！",
						"french": "Qui êtes-vous ?! Je terrasserai quiconque tentera d'arrêter Elias !",
						"spanish": "¡¿Quién eres?! ¡Derribaré a cualquiera que intente detener a Elias!",
						"vietnamese": "Ngươi là ai! Kẻ nào dám cản Elias, ta sẽ hạ gục!",
						"thai": "เจ้าเป็นใคร?! ข้าจะโค่นทุกคนที่พยายามจะหยุดยั้งเอเลียส!",
						"hindi": "तुम कौन हो?! एलियास को रोकने वाले किसी भी व्यक्ति को मैं मार गिराऊंगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네놈들은 그저 비극을 완성하러 온 꼭두각시일 뿐.",
						"english": "You are merely puppets, here to complete the tragedy.",
						"japanese": "貴様らは、ただ悲劇を完成させるために来た操り人形に過ぎない。",
						"chinese": "你们不过是来完成悲剧的傀儡罢了。",
						"french": "Vous n'êtes que des marionnettes, venues achever la tragédie.",
						"spanish": "No sois más que marionetas, aquí para completar la tragedia.",
						"vietnamese": "Ngươi chỉ là những con rối đến để hoàn thành bi kịch.",
						"thai": "พวกเจ้าเป็นแค่หุ่นเชิดที่มาเพื่อทำให้โศกนาฏกรรมสมบูรณ์เท่านั้น.",
						"hindi": "तुम बस कठपुतलियाँ हो, यहाँ त्रासदी को पूरा करने के लिए आए हो।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥쳐!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Câm miệng!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 비극 앞에서 무릎 꿇어라.",
						"english": "You insignificant beings... Kneel before tragedy.",
						"japanese": "くだらない者たち… 悲劇の前でひざまずけ。",
						"chinese": "渺小的存在……在悲剧面前跪下吧。",
						"french": "Choses insignifiantes... Mettez-vous à genoux devant la tragédie.",
						"spanish": "Seres insignificantes... Arrodíllense ante la tragedia.",
						"vietnamese": "Những kẻ hèn mọn... Hãy quỳ gối trước bi kịch.",
						"thai": "พวกไร้ค่า... จงคุกเข่าต่อหน้าโศกนาฏกรรม",
						"hindi": "तुच्छ प्राणी... त्रासदी के सामने घुटने टेको।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어! 반드시 엘리아스를 구할 거야!",
						"english": "It's not over yet! I will save Elias, no matter what!",
						"japanese": "まだ終わってない！ 必ずエリアスを助ける！",
						"chinese": "还没结束！ 我一定会救出埃利亚斯！",
						"french": "Ce n'est pas encore fini ! Je sauverai Elias, quoi qu'il arrive !",
						"spanish": "¡Aún no ha terminado! ¡Salvaré a Elias, pase lo que pase!",
						"vietnamese": "Vẫn chưa kết thúc! Tôi nhất định sẽ cứu Elias!",
						"thai": "ยังไม่จบหรอก! ฉันจะต้องช่วยเอเลียสให้ได้!",
						"hindi": "अभी खत्म नहीं हुआ है! मैं एलियास को हर हाल में बचाऊंगा!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 어리석은… 결국… 비극은 반복될 뿐이다…",
						"english": "Ugh... Foolish... In the end... Tragedy will only repeat...",
						"japanese": "くうっ… 愚かな… 結局… 悲劇は繰り返されるだけだ…",
						"chinese": "呃啊……愚蠢的……最终……悲剧只会重演……",
						"french": "Ugh... Insensé... Au final... La tragédie ne fera que se répéter...",
						"spanish": "Ugh... Insensatos... Al final... la tragedia solo se repetirá...",
						"vietnamese": "Ư... Ngốc nghếch... Cuối cùng... Bi kịch sẽ chỉ lặp lại thôi...",
						"thai": "อึก... โง่เขลา... สุดท้าย... โศกนาฏกรรมจะวนซ้ำเท่านั้น...",
						"hindi": "उफ़... मूर्ख... अंततः... त्रासदी केवल दोहराई जाएगी..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야! 엘리아스는 구해낼 거야!",
						"english": "What are you talking about! We'll save Elias!",
						"japanese": "何を言ってるの！ エリアスは助け出すわ！",
						"chinese": "你在说什么！ 我们会救出埃利亚斯的！",
						"french": "De quoi parlez-vous ! Nous allons sauver Elias !",
						"spanish": "¡De qué hablas! ¡Salvaremos a Elias!",
						"vietnamese": "Anh đang nói cái gì vậy! Chúng ta sẽ cứu Elias!",
						"thai": "คุณพูดอะไรน่ะ! เราจะช่วยเอเลียสให้ได้!",
						"hindi": "तुम क्या कह रहे हो! हम एलियास को बचा लेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						1,
						3
					],
					"speaker": "dax",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이제 모든 조건이 충족됐어요… 엘리아스의 트위스트가 시작될 겁니다.",
						"english": "All conditions have been met... Elias's Twist will begin.",
						"japanese": "これですべての条件が満たされたわ… エリアスのツイストが始まる。",
						"chinese": "现在所有条件都已满足……埃利亚斯的“扭曲”即将开始。",
						"french": "Toutes les conditions sont remplies... Le \"Twist\" d'Elias va commencer.",
						"spanish": "Todas las condiciones se han cumplido... El \"Giro\" de Elias comenzará.",
						"vietnamese": "Mọi điều kiện đã được đáp ứng... Sự \"xoắn vặn\" của Elias sẽ bắt đầu.",
						"thai": "ตอนนี้เงื่อนไขทั้งหมดครบถ้วนแล้ว... การบิดเบือนของเอเลียสจะเริ่มต้นขึ้น",
						"hindi": "अब सभी शर्तें पूरी हो गई हैं... एलियास का ट्विस्ट शुरू होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 엘리아스의 비명과 함께, 도시 전체가 전율했다.",
						"english": "With Elias's scream in the darkness, the entire city trembled.",
						"japanese": "闇の中でエリアスの悲鳴と共に、都市全体が戦慄した。",
						"chinese": "伴随着埃利亚斯在黑暗中的尖叫，整座城市都为之颤抖。",
						"french": "Accompagné du cri d'Elias dans les ténèbres, la ville entière frissonna.",
						"spanish": "Con el grito de Elias en la oscuridad, toda la ciudad tembló.",
						"vietnamese": "Cùng với tiếng thét của Elias trong bóng tối, toàn bộ thành phố rung chuyển.",
						"thai": "พร้อมกับเสียงกรีดร้องของเอเลียสในความมืดมิด ทั่วทั้งเมืองก็สั่นสะท้าน",
						"hindi": "अँधेरे में एलियास की चीख के साथ, पूरा शहर काँप उठा।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
