export const scenario_modern_pool_101_04 = {
	"scenario_id": "modern_pool_101_04",
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
			"로한 칸나의 그림자, 뭄바이에서 시작됐다.",
			"그곳에는 모든 것을 아는 자, 닥스가 숨어 있었다.",
			"과거의 배신은 가장 깊은 증오를 낳고.",
			"진실은 언제나 예상보다 잔혹했다."
		],
		"english": [
			"Rohan Khanna's shadow began in Mumbai.",
			"There, Dax, the one who knows all, was hidden.",
			"Betrayal in the past breeds the deepest hatred.",
			"The truth was always more brutal than expected."
		],
		"japanese": [
			"ロハン・カンナの影はムンバイで始まった。",
			"そこには、すべてを知る者、ダックスが潜んでいた。",
			"過去の裏切りは最も深い憎しみを生む。",
			"真実はいつも予想よりも残酷だった。"
		],
		"chinese": [
			"罗汉·坎纳的阴影始于孟买。",
			"在那里，知晓一切的达克斯藏身其中。",
			"过去的背叛滋生了最深的仇恨。",
			"真相总是比预想的更加残酷。"
		],
		"french": [
			"L'ombre de Rohan Khanna a commencé à Mumbai.",
			"Là, Dax, celui qui sait tout, était caché.",
			"La trahison passée engendre la haine la plus profonde.",
			"La vérité était toujours plus brutale que prévu."
		],
		"spanish": [
			"La sombra de Rohan Khanna comenzó en Mumbai.",
			"Allí, Dax, el que todo lo sabe, estaba escondido.",
			"La traición del pasado engendra el odio más profundo.",
			"La verdad siempre fue más brutal de lo esperado."
		],
		"vietnamese": [
			"Bóng dáng của Rohan Khanna bắt đầu ở Mumbai.",
			"Ở đó, Dax, người biết tất cả, đang ẩn mình.",
			"Sự phản bội trong quá khứ sinh ra lòng thù hận sâu sắc nhất.",
			"Sự thật luôn tàn khốc hơn mong đợi."
		],
		"thai": [
			"เงาของโรฮาน คันนาเริ่มต้นที่มุมไบ",
			"ที่นั่น แด็กซ์ ผู้รู้ทุกสิ่ง ซ่อนตัวอยู่",
			"การทรยศในอดีตสร้างความเกลียดชังที่ฝังลึกที่สุด",
			"ความจริงมักจะโหดร้ายกว่าที่คาดไว้เสมอ"
		],
		"hindi": [
			"रोहन खन्ना की परछाई मुंबई में शुरू हुई।",
			"वहाँ, डैक्स, वह जो सब कुछ जानता है, छिपा हुआ था।",
			"अतीत का विश्वासघात गहरी नफरत पैदा करता है।",
			"सच्चाई हमेशा उम्मीद से ज़्यादा क्रूर थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "로한 칸나의 과거를 쫓아 뭄바이 뒷골목에 도착했다.",
						"english": "Following Rohan Khanna's past, I arrived in the back alleys of Mumbai.",
						"japanese": "ロハン・カンナの過去を追い、ムンバイの裏路地にたどり着いた。",
						"chinese": "追寻罗汉·坎纳的过去，我来到了孟买的后巷。",
						"french": "À la poursuite du passé de Rohan Khanna, je suis arrivé dans les ruelles de Mumbai.",
						"spanish": "Siguiendo el pasado de Rohan Khanna, llegué a los callejones traseros de Mumbai.",
						"vietnamese": "Theo dấu quá khứ của Rohan Khanna, tôi đã đến các con hẻm phía sau của Mumbai.",
						"thai": "ตามรอยอดีตของโรฮาน คันนา ฉันมาถึงตรอกซอกซอยของมุมไบ",
						"hindi": "रोहन खन्ना के अतीत का पीछा करते हुए, मैं मुंबई की गलियों में पहुँचा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…누구냐. 어떻게 날 찾아냈지?",
						"english": "...Who are you? How did you find me?",
						"japanese": "…誰だ。どうやって俺を見つけた？",
						"chinese": "……你是谁？你怎么找到我的？",
						"french": "...Qui es-tu ? Comment m'as-tu trouvé ?",
						"spanish": "...¿Quién eres? ¿Cómo me encontraste?",
						"vietnamese": "...Ngươi là ai? Sao ngươi tìm thấy ta?",
						"thai": "...แกเป็นใคร? หาฉันเจอได้ยังไง?",
						"hindi": "...तुम कौन हो? तुमने मुझे कैसे ढूँढा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "닥스 씨? 로한 칸나에 대해 묻고 싶은 게 있습니다.",
						"english": "Mr. Dax? I have some questions about Rohan Khanna.",
						"japanese": "ダックスさん？ロハン・カンナについてお聞きしたいことがあります。",
						"chinese": "达克斯先生？我有些关于罗汉·坎纳的问题想问。",
						"french": "Monsieur Dax ? J'ai quelques questions sur Rohan Khanna.",
						"spanish": "¿Señor Dax? Tengo algunas preguntas sobre Rohan Khanna.",
						"vietnamese": "Ông Dax? Tôi có vài điều muốn hỏi về Rohan Khanna.",
						"thai": "คุณแด็กซ์? ผมมีเรื่องอยากถามเกี่ยวกับโรฮาน คันนา",
						"hindi": "मिस्टर डैक्स? मुझे रोहन खन्ना के बारे में कुछ सवाल पूछने हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "칸나? 그 이름은… 다시 듣고 싶지 않아.",
						"english": "Khanna? That name... I don't want to hear it again.",
						"japanese": "カンナ？その名前は…二度と聞きたくない。",
						"chinese": "坎纳？那个名字……我不想再听到。",
						"french": "Khanna ? Ce nom... je ne veux plus l'entendre.",
						"spanish": "¿Khanna? Ese nombre... no quiero volver a escucharlo.",
						"vietnamese": "Khanna? Cái tên đó... tôi không muốn nghe lại nữa.",
						"thai": "คันนา? ชื่อนั้น... ฉันไม่อยากได้ยินมันอีกแล้ว",
						"hindi": "खन्ना? वह नाम... मैं उसे फिर से नहीं सुनना चाहता।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "칸나가 왜 그렇게까지 하는지 궁금합니다.",
						"english": "I wonder why Khanna is going to such lengths.",
						"japanese": "カンナがなぜそこまでやるのか気になります。",
						"chinese": "我很好奇坎纳为什么会做到那种地步。",
						"french": "Je me demande pourquoi Khanna va si loin.",
						"spanish": "Me pregunto por qué Khanna llega tan lejos.",
						"vietnamese": "Tôi tự hỏi tại sao Khanna lại làm như vậy.",
						"thai": "ฉันสงสัยว่าทำไมคันนาถึงทำถึงขนาดนั้น",
						"hindi": "मुझे आश्चर्य है कि खन्ना ऐसा क्यों कर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그는 복수하는 거야. 모든 것에 대해.",
						"english": "He's taking revenge. For everything.",
						"japanese": "彼は復讐しているんだ。すべてに対して。",
						"chinese": "他正在复仇。为了所有的一切。",
						"french": "Il se venge. Pour tout.",
						"spanish": "Se está vengando. Por todo.",
						"vietnamese": "Anh ta đang trả thù. Cho tất cả mọi thứ.",
						"thai": "เขากำลังแก้แค้น สำหรับทุกสิ่ง",
						"hindi": "वह बदला ले रहा है। हर चीज के लिए।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "복수? 사업 경쟁 때문이 아니고요?",
						"english": "Revenge? Not business competition?",
						"japanese": "復讐？事業競争のためではないのですか？",
						"chinese": "复仇？不是因为商业竞争吗？",
						"french": "La vengeance ? Pas la concurrence commerciale ?",
						"spanish": "¿Venganza? ¿No es por competencia comercial?",
						"vietnamese": "Trả thù? Không phải vì cạnh tranh kinh doanh sao?",
						"thai": "การแก้แค้น? ไม่ใช่เพราะการแข่งขันทางธุรกิจเหรอ?",
						"hindi": "बदला? व्यवसायिक प्रतिस्पर्धा के कारण नहीं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그를 봐왔어. '과거'나 '배신'이란 단어에, 그의 눈이 변하는 걸.",
						"english": "I've watched him. His eyes change at the words 'past' or 'betrayal'.",
						"japanese": "彼を見てきた。「過去」や「裏切り」という言葉に、彼の目が変わるのを。",
						"chinese": "我一直看着他。在“过去”或“背叛”这些词上，他的眼神会变。",
						"french": "Je l'ai observé. Ses yeux changent aux mots 'passé' ou 'trahison'.",
						"spanish": "Lo he observado. Sus ojos cambian con las palabras 'pasado' o 'traición'.",
						"vietnamese": "Tôi đã quan sát anh ta. Ánh mắt anh ta thay đổi khi nghe những từ 'quá khứ' hay 'phản bội'.",
						"thai": "ฉันเฝ้ามองเขามาตลอด ดวงตาของเขาเปลี่ยนไปเมื่อได้ยินคำว่า 'อดีต' หรือ 'การทรยศ'",
						"hindi": "मैंने उसे देखा है। 'अतीत' या 'धोखा' शब्दों पर उसकी आँखें बदल जाती हैं।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"content": {
						"korean": "깊은 증오가 그의 피를 끓게 하는 걸.",
						"english": "A deep hatred makes his blood boil.",
						"japanese": "深い憎悪が彼の血を滾らせる。",
						"chinese": "深深的仇恨让他热血沸腾。",
						"french": "Une haine profonde fait bouillir son sang.",
						"spanish": "Un odio profundo hace hervir su sangre.",
						"vietnamese": "Một sự thù hận sâu sắc khiến máu anh ta sôi sục.",
						"thai": "ความเกลียดชังอันลึกซึ้งทำให้เลือดของเขาเดือดพล่าน",
						"hindi": "गहरी नफरत उसके खून को खौला देती है।"
					},
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "그 증오가 어디서 온 거죠?",
						"english": "Where did that hatred come from?",
						"japanese": "その憎悪はどこから来たのですか？",
						"chinese": "那份仇恨从何而来？",
						"french": "D'où vient cette haine ?",
						"spanish": "¿De dónde vino ese odio?",
						"vietnamese": "Sự thù hận đó đến từ đâu?",
						"thai": "ความเกลียดชังนั้นมาจากไหน?",
						"hindi": "वह नफरत कहाँ से आई?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "칸나의 가족… 뭄바이에서 모두 잃었어.",
						"english": "Kanna's family... lost them all in Mumbai.",
						"japanese": "カンナの家族… ムンバイで全て失った。",
						"chinese": "坎纳的家人……在孟买全部失去了。",
						"french": "La famille de Kanna... tous perdus à Mumbai.",
						"spanish": "La familia de Kanna... los perdió a todos en Mumbai.",
						"vietnamese": "Gia đình Kanna... mất tất cả ở Mumbai.",
						"thai": "ครอบครัวของคันนา... เสียทั้งหมดที่มุมไบ",
						"hindi": "कन्ना का परिवार... मुंबई में सब खो दिया।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "가족을요? 왜…?",
						"english": "His family? Why...?",
						"japanese": "家族をですか？なぜ…？",
						"chinese": "他的家人？为什么……？",
						"french": "Sa famille ? Pourquoi...?",
						"spanish": "¿Su familia? ¿Por qué...?",
						"vietnamese": "Gia đình anh ta ư? Tại sao...?",
						"thai": "ครอบครัวเขาเหรอ? ทำไม...?",
						"hindi": "उसका परिवार? क्यों...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "배신당했어. 가장 믿었던 이들에게.",
						"english": "Betrayed. By those he trusted most.",
						"japanese": "裏切られた。最も信頼していた者たちに。",
						"chinese": "被背叛了。被他最信任的人。",
						"french": "Trahi. Par ceux en qui il avait le plus confiance.",
						"spanish": "Traicionado. Por aquellos en quienes más confiaba.",
						"vietnamese": "Bị phản bội. Bởi những người anh ta tin tưởng nhất.",
						"thai": "ถูกทรยศ โดยคนที่เขาไว้ใจที่สุด",
						"hindi": "धोखा दिया गया। उन लोगों द्वारा जिन पर उसे सबसे ज़्यादा भरोसा था।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "그는 그때부터 모든 것을 잃었고, 모든 것을 되찾으려 해.",
						"english": "Since then, he lost everything, and now seeks to reclaim it all.",
						"japanese": "彼はその時から全てを失い、全てを取り戻そうとしている。",
						"chinese": "从那时起，他失去了一切，现在正试图夺回所有。",
						"french": "Depuis, il a tout perdu et cherche à tout récupérer.",
						"spanish": "Desde entonces, lo perdió todo, y ahora busca recuperarlo todo.",
						"vietnamese": "Kể từ đó, anh ta mất tất cả, và giờ đây đang tìm cách đòi lại tất cả.",
						"thai": "ตั้งแต่นั้นมา เขาสูญเสียทุกสิ่ง และตอนนี้กำลังพยายามทวงคืนทุกอย่าง",
						"hindi": "तब से, उसने सब कुछ खो दिया है, और अब सब कुछ वापस पाना चाहता है।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						4,
						4
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "닥스의 이야기는 로한 칸나의 비극적인 과거를 드러냈다.",
						"english": "Dax's story revealed Rohan Kanna's tragic past.",
						"japanese": "ダックスの物語は、ロハン・カンナの悲劇的な過去を明らかにした。",
						"chinese": "达克斯的故事揭示了罗汉·坎纳的悲惨过去。",
						"french": "L'histoire de Dax a révélé le passé tragique de Rohan Kanna.",
						"spanish": "La historia de Dax reveló el trágico pasado de Rohan Kanna.",
						"vietnamese": "Câu chuyện của Dax đã tiết lộ quá khứ bi thảm của Rohan Kanna.",
						"thai": "เรื่องราวของแด็กซ์เผยให้เห็นอดีตอันน่าเศร้าของโรฮัน คันนา",
						"hindi": "डैक्स की कहानी ने रोहन खन्ना के दुखद अतीत का खुलासा किया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그들은 칸나의 가족을… 잔인하게 빼앗았어.",
						"english": "They cruelly took Kanna's family... from him.",
						"japanese": "彼らはカンナの家族を… 残酷に奪った。",
						"chinese": "他们残忍地夺走了坎纳的家人……",
						"french": "Ils ont cruellement enlevé la famille de Kanna...",
						"spanish": "Ellos cruelmente le arrebataron la familia a Kanna...",
						"vietnamese": "Họ đã tàn nhẫn cướp đi gia đình của Kanna...",
						"thai": "พวกเขาช่วงชิงครอบครัวของคันนาไปอย่างโหดร้าย",
						"hindi": "उन्होंने कन्ना के परिवार को... बेरहमी से छीन लिया।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "세상에… 너무 끔찍하군요.",
						"english": "Oh my god... This is terrible.",
						"japanese": "なんてことだ… ひどすぎる。",
						"chinese": "天啊……太可怕了。",
						"french": "Mon Dieu… c'est horrible.",
						"spanish": "Dios mío… qué terrible.",
						"vietnamese": "Trời ơi… thật kinh khủng.",
						"thai": "โอ้พระเจ้า… มันแย่มากเลย",
						"hindi": "हे भगवान... यह बहुत भयानक है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그날 이후, 칸나는 변했어. 그림자 속에서 모든 것을 계획했지.",
						"english": "After that day, Kanna changed. She planned everything in the shadows.",
						"japanese": "あの日の後、カンナは変わった。影で全てを企てたんだ。",
						"chinese": "从那天起，坎娜变了。她在暗中策划了一切。",
						"french": "Depuis ce jour, Kanna a changé. Elle a tout planifié dans l'ombre.",
						"spanish": "Desde ese día, Kanna cambió. Lo planeó todo en las sombras.",
						"vietnamese": "Từ ngày đó, Kanna đã thay đổi. Cô ta đã lên kế hoạch mọi thứ trong bóng tối.",
						"thai": "ตั้งแต่วันนั้น คันนะก็เปลี่ยนไป เธอวางแผนทุกอย่างในเงามืด",
						"hindi": "उस दिन के बाद, कान्ना बदल गई। उसने सब कुछ छाया में प्लान किया।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그의 복수심은… 단순한 사업 경쟁이 아니었어.",
						"english": "His thirst for revenge... it wasn't just a business rivalry.",
						"japanese": "彼の復讐心は…単なるビジネス競争ではなかった。",
						"chinese": "他的复仇之心……不仅仅是简单的商业竞争。",
						"french": "Sa soif de vengeance… n'était pas une simple rivalité commerciale.",
						"spanish": "Su sed de venganza… no era una simple rivalidad de negocios.",
						"vietnamese": "Khao khát báo thù của anh ta… không phải là một sự cạnh tranh kinh doanh đơn thuần.",
						"thai": "แรงแค้นของเขา… ไม่ใช่แค่การแข่งขันทางธุรกิจธรรมดา",
						"hindi": "उसकी बदले की भावना... सिर्फ़ एक बिज़नेस की प्रतिद्वंद्विता नहीं थी।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이 도시를 움직이는 건, 결국 그의 상처였어.",
						"english": "What truly moved this city, in the end, was his pain.",
						"japanese": "この街を動かしているのは、結局彼の傷だったんだ。",
						"chinese": "最终，驱动这座城市的，是他的伤痛。",
						"french": "Ce qui a vraiment fait bouger cette ville, au final, c'était sa blessure.",
						"spanish": "Lo que realmente movía esta ciudad, al final, era su herida.",
						"vietnamese": "Điều thực sự thúc đẩy thành phố này, cuối cùng, là vết thương của anh ta.",
						"thai": "สิ่งที่ขับเคลื่อนเมืองนี้ ท้ายที่สุดแล้วคือบาดแผลของเขา",
						"hindi": "इस शहर को जो चला रहा था, आखिरकार, वह उसका दर्द था।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 칸나의 복수는… 멈추지 않아….",
						"english": "Ugh... Kanna's revenge... it won't stop...",
						"japanese": "くっ…カンナの復讐は…止まらない…。",
						"chinese": "呃……坎娜的复仇……不会停止的……。",
						"french": "Ugh… La vengeance de Kanna… ne s'arrêtera pas….",
						"spanish": "Ugh… La venganza de Kanna… no se detendrá….",
						"vietnamese": "Khụ… Sự trả thù của Kanna… sẽ không dừng lại….",
						"thai": "อึก… การแก้แค้นของคันนะ… จะไม่หยุด…",
						"hindi": "उह... कान्ना का बदला... नहीं रुकेगा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "결국 모두가 칸나의 그림자 속에 있었어.",
						"english": "Everyone was in Kanna's shadow after all.",
						"japanese": "結局、皆がカンナの影の中にいた。",
						"chinese": "最终，所有人都在坎纳的阴影之下。",
						"french": "Au final, tout le monde était dans l'ombre de Kanna.",
						"spanish": "Al final, todos estaban a la sombra de Kanna.",
						"vietnamese": "Cuối cùng, tất cả đều ở trong bóng tối của Kanna.",
						"thai": "ในที่สุด ทุกคนก็อยู่ในเงามืดของคันนะ",
						"hindi": "आखिरकार, सब कन्ना की परछाई में थे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "이제 알겠나? 그의 고통이 얼마나 깊은지.",
						"english": "Do you understand now? How deep his pain is.",
						"japanese": "もう分かったか？彼の苦しみがどれほど深いか。",
						"chinese": "现在你明白了吗？他的痛苦有多深。",
						"french": "Comprends-tu maintenant ? À quel point sa douleur est profonde.",
						"spanish": "Ahora entiendes, ¿verdad? Cuán profundo es su dolor.",
						"vietnamese": "Bây giờ ngươi đã hiểu chưa? Nỗi đau của hắn sâu sắc đến nhường nào.",
						"thai": "ตอนนี้เข้าใจหรือยัง? ว่าความเจ็บปวดของเขาช่างลึกซึ้งเพียงใด",
						"hindi": "अब समझे? उसका दर्द कितना गहरा है।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "로한 칸나의 복수심은 단순한 개인의 비극을 넘어, 도시 전체를 뒤흔들고 있었다.",
						"english": "Rohan Kanna's vendetta transcended a mere personal tragedy, shaking the entire city.",
						"japanese": "ローハン・カンナの復讐心は、単なる個人的な悲劇を超え、都市全体を揺るがしていた。",
						"chinese": "罗汉·坎纳的复仇之心超越了单纯的个人悲剧，震撼了整个城市。",
						"french": "La vendetta de Rohan Kanna, bien plus qu'une simple tragédie personnelle, ébranlait la ville entière.",
						"spanish": "La venganza de Rohan Kanna, más allá de una simple tragedia personal, estaba sacudiendo a toda la ciudad.",
						"vietnamese": "Mối thù của Rohan Kanna không chỉ là một bi kịch cá nhân đơn thuần, mà còn đang làm rung chuyển cả thành phố.",
						"thai": "ความแค้นของโรฮัน คันนะ ไม่ใช่แค่โศกนาฏกรรมส่วนตัว แต่มันกำลังสั่นคลอนไปทั้งเมือง",
						"hindi": "रोहन कन्ना का बदला सिर्फ़ एक व्यक्तिगत त्रासदी से कहीं बढ़कर था, जो पूरे शहर को हिला रहा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그의 그림자는 예상보다 훨씬 거대했다. 아직 끝난 게 아니다.",
						"english": "His shadow was far greater than expected. It's not over yet.",
						"japanese": "彼の影は予想よりもはるかに巨大だった。まだ終わっていない。",
						"chinese": "他的阴影比预想的要巨大得多。一切尚未结束。",
						"french": "Son ombre était bien plus grande que prévu. Ce n'est pas encore fini.",
						"spanish": "Su sombra era mucho más grande de lo esperado. Aún no ha terminado.",
						"vietnamese": "Bóng tối của hắn lớn hơn nhiều so với dự kiến. Vẫn chưa kết thúc đâu.",
						"thai": "เงาของเขายิ่งใหญ่เกินกว่าที่คาดไว้มาก ยังไม่จบลงแค่นี้",
						"hindi": "उसकी परछाई अपेक्षा से कहीं ज़्यादा विशाल थी। यह अभी ख़त्म नहीं हुआ है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석군. 칸나의 그림자는… 네가 감당할 수 없어.",
						"english": "Foolish. Kanna's shadow... you cannot handle it.",
						"japanese": "愚か者め。カンナの影は…お前には手に負えない。",
						"chinese": "愚蠢。坎纳的阴影……你无法承受。",
						"french": "Stupide. L'ombre de Kanna... tu ne peux pas la supporter.",
						"spanish": "Estúpido. La sombra de Kanna... no puedes con ella.",
						"vietnamese": "Ngươi thật ngu ngốc. Bóng tối của Kanna... ngươi không thể gánh vác nổi đâu.",
						"thai": "โง่เขลา เงามืดของคันนะ...เจ้าไม่อาจรับมือได้",
						"hindi": "मूर्ख। कन्ना की परछाई… तुम संभाल नहीं सकते।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 칸나의 진실을 밝힐 거야.",
						"english": "...It's not over yet. I will reveal Kanna's truth.",
						"japanese": "…まだ終わっていない。カンナの真実を明らかにする。",
						"chinese": "……一切尚未结束。我将揭示坎纳的真相。",
						"french": "...Ce n'est pas encore fini. Je révélerai la vérité de Kanna.",
						"spanish": "...Aún no ha terminado. Revelaré la verdad de Kanna.",
						"vietnamese": "...Vẫn chưa kết thúc đâu. Ta sẽ tiết lộ sự thật về Kanna.",
						"thai": "...ยังไม่จบลงแค่นี้ ฉันจะเปิดเผยความจริงของคันนะ",
						"hindi": "…यह अभी ख़त्म नहीं हुआ है। मैं कन्ना की सच्चाई उजागर करूँगा।"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						1,
						3
					],
					"speaker": "dax",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "포기하지 마. 진실은 더 깊은 곳에 있어.",
						"english": "Don't give up. The truth lies deeper.",
						"japanese": "諦めるな。真実はもっと深いところにある。",
						"chinese": "不要放弃。真相隐藏在更深之处。",
						"french": "N'abandonne pas. La vérité se trouve plus profondément.",
						"spanish": "No te rindas. La verdad está más profunda.",
						"vietnamese": "Đừng bỏ cuộc. Sự thật nằm ở nơi sâu thẳm hơn.",
						"thai": "อย่ายอมแพ้ ความจริงซ่อนอยู่ในที่ที่ลึกกว่านั้น",
						"hindi": "हार मत मानो। सच्चाई और गहरी है।"
					},
					"emotion": "base",
					"speaker": "dax",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 정체 모를 그림자가 나타났다.",
						"english": "An unknown shadow appeared from the darkness.",
						"japanese": "闇の中から正体不明の影が現れた。",
						"chinese": "一个不明身份的影子从黑暗中出现。",
						"french": "Une ombre inconnue est apparue de l'obscurité.",
						"spanish": "Una sombra desconocida apareció de la oscuridad.",
						"vietnamese": "Một bóng đen không rõ danh tính xuất hiện từ bóng tối.",
						"thai": "เงาลึกลับปรากฏขึ้นจากความมืด",
						"hindi": "अंधेरे से एक अनजान परछाई निकली।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						5
					],
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "닥스, 네가 감히 여길 데려왔나? 칸나의 복수는… 아직 끝나지 않았어.",
						"english": "Daks, how dare you bring them here? Kanna's revenge... it's not over yet.",
						"japanese": "ダックス、よくもここに連れてきたな？ カンナの復讐は…まだ終わっていない。",
						"chinese": "达克斯，你竟敢把他们带来这里？坎娜的复仇……尚未结束。",
						"french": "Daks, comment oses-tu les amener ici ? La vengeance de Kanna… n'est pas encore terminée.",
						"spanish": "¿Daks, cómo te atreves a traerlos aquí? La venganza de Kanna… aún no ha terminado.",
						"vietnamese": "Daks, ngươi dám đưa chúng đến đây sao? Sự trả thù của Kanna… vẫn chưa kết thúc.",
						"thai": "แด็กซ์ แกกล้าดียังไงที่พาพวกเขามาที่นี่? การแก้แค้นของคันนะ… ยังไม่จบ",
						"hindi": "डैक्स, तुम्हारी हिम्मत कैसे हुई इन्हें यहाँ लाने की? कान्ना का बदला... अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"spot": [
						1,
						3
					]
				},
				{
					"content": {
						"korean": "이 자는… {random_boss}의 충성스러운 부하다. 조심해.",
						"english": "This one is... {random_boss}'s loyal subordinate. Be careful.",
						"japanese": "こいつは…{random_boss}の忠実な部下だ。気をつけろ。",
						"chinese": "这个家伙是……{random_boss}的忠实部下。小心。",
						"french": "Celui-ci est… le fidèle subordonné de {random_boss}. Fais attention.",
						"spanish": "Este es… el leal subordinado de {random_boss}. Ten cuidado.",
						"vietnamese": "Kẻ này là… thuộc hạ trung thành của {random_boss}. Hãy cẩn thận.",
						"thai": "หมอนี่คือ… ผู้ติดตามที่ภักดีของ {random_boss} ระวังตัวให้ดี",
						"hindi": "यह... {random_boss} का वफादार अधीनस्थ है। सावधान रहना।"
					},
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 칸나의 과거에 대한 증인인가? 물러서.",
						"english": "Are you a witness to Kanna's past? Stand back.",
						"japanese": "お前がカンナの過去の証人か？ 退がれ。",
						"chinese": "你是坎娜过去的见证者吗？退下。",
						"french": "Es-tu un témoin du passé de Kanna ? Recule.",
						"spanish": "¿Eres testigo del pasado de Kanna? Apártate.",
						"vietnamese": "Ngươi là nhân chứng cho quá khứ của Kanna sao? Hãy lùi lại.",
						"thai": "แกคือพยานเรื่องอดีตของคันนะเหรอ? ถอยไปซะ",
						"hindi": "क्या तुम कान्ना के अतीत के गवाह हो? पीछे हटो।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "나를 쓰러뜨려도, 진실은 변하지 않아. 칸나의 그림자는… 더 깊이 파고들 거다.",
						"english": "Even if you defeat me, the truth won't change. Kanna's shadow... will dig deeper.",
						"japanese": "私を倒しても、真実は変わらない。カンナの影は…もっと深く潜り込むだろう。",
						"chinese": "即使你打败我，真相也不会改变。坎娜的阴影……会深入骨髓。",
						"french": "Même si tu me vaincs, la vérité ne changera pas. L'ombre de Kanna… s'enfoncera plus profondément.",
						"spanish": "Aunque me derrotes, la verdad no cambiará. La sombra de Kanna… se adentrará más.",
						"vietnamese": "Dù ngươi có đánh bại ta, sự thật cũng sẽ không thay đổi. Bóng tối của Kanna… sẽ đào sâu hơn nữa.",
						"thai": "ถึงแม้จะล้มฉันได้ ความจริงก็ไม่เปลี่ยน เงาของคันนะ… จะยิ่งฝังลึก",
						"hindi": "अगर तुम मुझे हरा भी दो, तो भी सच नहीं बदलेगा। कान्ना की परछाई... और गहरी होती जाएगी।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
