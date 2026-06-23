export const scenario_snowy_mortifera_71_04 = {
	"scenario_id": "snowy_mortifera_71_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모르티페라의 고통이 눈보라를 휘몰아쳤다.",
						"english": "Mortifera's pain raged through the blizzard.",
						"japanese": "モルティフェラの苦痛が吹雪を巻き起こした。",
						"chinese": "莫提费拉的痛苦在暴雪中肆虐。",
						"french": "La douleur de Mortifera faisait rage dans le blizzard.",
						"spanish": "El dolor de Mortifera se desató en la ventisca.",
						"vietnamese": "Nỗi đau của Mortifera hoành hành trong bão tuyết.",
						"thai": "ความเจ็บปวดของมอร์ติเฟร่าโหมกระหน่ำไปทั่วพายุหิมะ",
						"hindi": "मोर्टीफेरा का दर्द बर्फीले तूफान में फैल गया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 파괴해야 해? 뭔가 이상해.",
						"english": "Must I destroy more? Something feels wrong.",
						"japanese": "もっと破壊すべきなのか？ 何かおかしい。",
						"chinese": "我必须摧毁更多吗？感觉不对劲。",
						"french": "Dois-je détruire plus ? Quelque chose ne va pas.",
						"spanish": "¿Debo destruir más? Algo no está bien.",
						"vietnamese": "Tôi phải phá hủy thêm sao? Có gì đó không ổn.",
						"thai": "ฉันต้องทำลายอีกเหรอ? บางอย่างผิดปกติ",
						"hindi": "क्या मुझे और नष्ट करना होगा? कुछ गलत लग रहा है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "잠시 멈춰! '겨울의 신'의 진노를 부를라.",
						"english": "Stop for a moment! You'll incur the wrath of the 'Winter God'.",
						"japanese": "少し待て！ 『冬の神』の怒りを買うぞ。",
						"chinese": "停一下！你会招致“冬之神”的愤怒。",
						"french": "Arrête-toi un instant ! Tu vas provoquer la colère du 'Dieu de l'Hiver'.",
						"spanish": "¡Detente un momento! Provocarás la ira del 'Dios del Invierno'.",
						"vietnamese": "Dừng lại một chút! Ngươi sẽ chọc giận 'Thần Mùa Đông'.",
						"thai": "หยุดเดี๋ยวนี้! เจ้าจะทำให้ 'เทพแห่งฤดูหนาว' โกรธแค้น",
						"hindi": "एक पल रुक जाओ! तुम 'शीतकाल के देवता' के क्रोध को बुलाओगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "진노? 예전엔 평화로운 제물이라며.",
						"english": "Wrath? They used to call it a peaceful sacrifice.",
						"japanese": "怒り？ 昔は平和な生贄だと言っていたのに。",
						"chinese": "愤怒？他们以前称之为和平献祭。",
						"french": "Colère ? Avant, ils appelaient ça un sacrifice paisible.",
						"spanish": "¿Ira? Antes lo llamaban un sacrificio pacífico.",
						"vietnamese": "Phẫn nộ? Trước đây họ gọi đó là một vật tế yên bình mà.",
						"thai": "ความโกรธแค้น? เมื่อก่อนพวกเขาเคยเรียกมันว่าเครื่องบูชาอันสงบสุขไม่ใช่หรือไง",
						"hindi": "क्रोध? वे इसे पहले एक शांतिपूर्ण बलिदान कहते थे।"
					}
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "...진실은 복잡하다.",
						"english": "...The truth is complicated.",
						"japanese": "…真実は複雑だ。",
						"chinese": "……真相很复杂。",
						"french": "...La vérité est complexe.",
						"spanish": "...La verdad es complicada.",
						"vietnamese": "...Sự thật phức tạp lắm.",
						"thai": "...ความจริงมันซับซ้อน",
						"hindi": "...सच जटिल है।"
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
					"content": {
						"korean": "얼음 결정의 비명 소리가 더 커졌다.",
						"english": "The screams of the ice crystals grew louder.",
						"japanese": "氷の結晶の悲鳴がさらに大きくなった。",
						"chinese": "冰晶的尖叫声越来越大。",
						"french": "Les cris des cristaux de glace s'intensifièrent.",
						"spanish": "Los gritos de los cristales de hielo se hicieron más fuertes.",
						"vietnamese": "Tiếng hét của các tinh thể băng ngày càng lớn.",
						"thai": "เสียงกรีดร้องของผลึกน้ำแข็งดังขึ้นเรื่อยๆ",
						"hindi": "बर्फ के क्रिस्टल की चीखें तेज होती गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이 이상은 위험하다! '겨울의 신'께서는 부족에게 약속하셨다.",
						"english": "It's too dangerous! The 'Winter God' promised the tribe.",
						"japanese": "これ以上は危険だ！「冬の神」は部族に約束された。",
						"chinese": "再往前就危险了！‘冬之神’向部落许下了诺言。",
						"french": "C'est trop dangereux ! Le 'Dieu de l'Hiver' a fait une promesse à la tribu.",
						"spanish": "¡Más allá es peligroso! El 'Dios del Invierno' prometió a la tribu.",
						"vietnamese": "Nguy hiểm lắm rồi! 'Thần Mùa Đông' đã hứa với bộ lạc.",
						"thai": "อันตรายเกินไปแล้ว! 'เทพแห่งเหมันต์' ได้ให้สัญญาไว้กับเผ่า",
						"hindi": "इससे आगे ख़तरनाक है! 'शीतकालीन देवता' ने जनजाति से वादा किया था।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신, 뭘 숨기고 있는 거지?",
						"english": "What are you hiding?",
						"japanese": "あなた、何を隠しているの？",
						"chinese": "你，在隐瞒什么？",
						"french": "Qu'est-ce que tu caches ?",
						"spanish": "¿Qué escondes?",
						"vietnamese": "Ngươi đang giấu cái gì?",
						"thai": "คุณกำลังซ่อนอะไรอยู่?",
						"hindi": "तुम क्या छिपा रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "나는… 부족의 맹세를 지키는 자.",
						"english": "I am... the one who keeps the tribe's vow.",
						"japanese": "私は… 部族の誓いを守る者。",
						"chinese": "我… 是守护部落誓言之人。",
						"french": "Je suis... celle qui tient la promesse de la tribu.",
						"spanish": "Yo soy... quien guarda el juramento de la tribu.",
						"vietnamese": "Ta là... người giữ lời thề của bộ lạc.",
						"thai": "ข้าคือ... ผู้พิทักษ์คำสาบานของเผ่า",
						"hindi": "मैं... जनजाति की प्रतिज्ञा का रक्षक हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "그 맹세가 우리를 위험하게 해.",
						"english": "That vow endangers us.",
						"japanese": "その誓いが私たちを危険に晒す。",
						"chinese": "那个誓言让我们身处险境。",
						"french": "Ce serment nous met en danger.",
						"spanish": "Ese juramento nos pone en peligro.",
						"vietnamese": "Lời thề đó đang đặt chúng ta vào nguy hiểm.",
						"thai": "คำสาบานนั้นทำให้เราตกอยู่ในอันตราย",
						"hindi": "वह प्रतिज्ञा हमें ख़तरे में डालती है।"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 바이킹 유적의 문양이 얼음 속에서 빛났다. 왜곡된 희생의 그림자.",
						"english": "Ancient Viking ruins' patterns glowed in the ice. A shadow of twisted sacrifice.",
						"japanese": "古代ヴァイキング遺跡の文様が氷の中で輝いた。歪んだ犠牲の影。",
						"chinese": "古代维京遗迹的纹样在冰中闪耀。扭曲牺牲的阴影。",
						"french": "Les motifs des anciennes ruines vikings brillaient dans la glace. Une ombre de sacrifice déformé.",
						"spanish": "Los patrones de las antiguas ruinas vikingas brillaban en el hielo. Una sombra de sacrificio retorcido.",
						"vietnamese": "Hoa văn của di tích Viking cổ đại phát sáng trong băng. Bóng tối của sự hy sinh méo mó.",
						"thai": "ลวดลายของซากปรักหักพังไวกิ้งโบราณเรืองรองในน้ำแข็ง เงาแห่งการเสียสละที่บิดเบี้ยว",
						"hindi": "प्राचीन वाइकिंग खंडहरों के पैटर्न बर्फ में चमक रहे थे। विकृत बलिदान की छाया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 문양… 희생을 강조하는 것 같아.",
						"english": "This pattern... seems to emphasize sacrifice.",
						"japanese": "この文様… 犠牲を強調しているようだ。",
						"chinese": "这个纹样… 似乎在强调牺牲。",
						"french": "Ce motif... semble insister sur le sacrifice.",
						"spanish": "Este patrón... parece enfatizar el sacrificio.",
						"vietnamese": "Hoa văn này... dường như nhấn mạnh sự hy sinh.",
						"thai": "ลวดลายนี้... ดูเหมือนจะเน้นย้ำถึงการเสียสละ",
						"hindi": "यह पैटर्न... बलिदान पर ज़ोर देता है।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…나는 바이킹 부족의 마지막 후손이다.",
						"english": "...I am the last descendant of the Viking tribe.",
						"japanese": "…私はヴァイキング部族の最後の末裔だ。",
						"chinese": "…我是维京部落的最后血脉。",
						"french": "...Je suis la dernière descendante de la tribu viking.",
						"spanish": "...Soy el último descendiente de la tribu vikinga.",
						"vietnamese": "...Ta là hậu duệ cuối cùng của bộ lạc Viking.",
						"thai": "...ข้าคือทายาทคนสุดท้ายของเผ่าไวกิ้ง",
						"hindi": "...मैं वाइकिंग जनजाति का आखिरी वंशज हूँ।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "부족을 구원하기 위해, 모르티페라를 '겨울의 신'께 바치려 했어.",
						"english": "To save the tribe, I intended to offer Mortifera to the 'Winter God'.",
						"japanese": "部族を救うため、モルティフェラを「冬の神」に捧げようとした。",
						"chinese": "为了拯救部落，我曾想将莫蒂费拉献给‘冬之神’。",
						"french": "Pour sauver la tribu, j'avais l'intention d'offrir Mortifera au 'Dieu de l'Hiver'.",
						"spanish": "Para salvar a la tribu, intenté ofrecer a Mortifera al 'Dios del Invierno'.",
						"vietnamese": "Để cứu bộ lạc, ta đã định hiến Mortifera cho 'Thần Mùa Đông'.",
						"thai": "เพื่อช่วยเผ่า ข้าตั้งใจจะถวายมอร์ติเฟร่าแก่ 'เทพแห่งเหมันต์'",
						"hindi": "जनजाति को बचाने के लिए, मैंने मॉर्टिफेरा को 'शीतकालीन देवता' को अर्पित करने का इरादा किया था।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "구원이라고? 이 고통이?",
						"english": "Salvation? This suffering?",
						"japanese": "救済だと？この苦痛が？",
						"chinese": "救赎？这种痛苦？",
						"french": "Le salut ? Cette souffrance ?",
						"spanish": "¿Salvación? ¿Este sufrimiento?",
						"vietnamese": "Cứu rỗi ư? Nỗi đau này sao?",
						"thai": "การไถ่บาปเหรอ? ความทุกข์ทรมานนี้เนี่ยนะ?",
						"hindi": "मुक्ति? यह पीड़ा?"
					},
					"speaker": "character_2"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "그게 우리의 유일한 길이었다.",
						"english": "That was our only path.",
						"japanese": "それが私たちの唯一の道だった。",
						"chinese": "那是我们唯一的出路。",
						"french": "C'était notre seule voie.",
						"spanish": "Ese era nuestro único camino.",
						"vietnamese": "Đó là con đường duy nhất của chúng ta.",
						"thai": "นั่นคือหนทางเดียวของเรา",
						"hindi": "वही हमारा एकमात्र मार्ग था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 진실이 서서히 드러났다.",
						"english": "The frozen truth slowly revealed itself.",
						"japanese": "凍てついた真実が徐々に明らかになった。",
						"chinese": "冰封的真相逐渐浮现。",
						"french": "La vérité gelée se révéla lentement.",
						"spanish": "La verdad congelada se reveló lentamente.",
						"vietnamese": "Sự thật đóng băng dần dần hé lộ.",
						"thai": "ความจริงที่เยือกแข็งค่อยๆ เผยออกมา",
						"hindi": "जमी हुई सच्चाई धीरे-धीरे सामने आई।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "너희는 모르티페라의 진정한 의미를 모른다!",
						"english": "You don't know the true meaning of Mortifera!",
						"japanese": "お前たちはモルティフェラの真の意味を知らない！",
						"chinese": "你们不知道莫蒂费拉的真正含义！",
						"french": "Vous ne connaissez pas la véritable signification de Mortifera !",
						"spanish": "¡No conocéis el verdadero significado de Mortifera!",
						"vietnamese": "Các ngươi không biết ý nghĩa thật sự của Mortifera!",
						"thai": "พวกเจ้าไม่รู้ความหมายที่แท้จริงของมอร์ติเฟร่า!",
						"hindi": "तुम मोर्टिफेरा का असली मतलब नहीं जानते!"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "당신의 확신은… 그저 도피 아냐?",
						"english": "Is your conviction... merely an escape?",
						"japanese": "あなたの確信は… ただの逃避ではないのか？",
						"chinese": "你的确信… 难道只是逃避吗？",
						"french": "Votre conviction… n'est-elle pas qu'une fuite ?",
						"spanish": "¿Tu convicción… no es más que una huida?",
						"vietnamese": "Niềm tin của ngươi… chẳng phải chỉ là sự trốn tránh sao?",
						"thai": "ความมั่นใจของเจ้า… เป็นแค่การหลบหนีหรือเปล่า?",
						"hindi": "क्या तुम्हारा दृढ़ विश्वास… महज़ एक पलायन नहीं है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "도피… 나는 약속을 지켰을 뿐!",
						"english": "Escape… I merely kept my promise!",
						"japanese": "逃避… 私は約束を守っただけだ！",
						"chinese": "逃避… 我只是遵守了诺言！",
						"french": "Fuite… j'ai juste tenu ma promesse !",
						"spanish": "¿Huida? ¡Solo cumplí mi promesa!",
						"vietnamese": "Trốn tránh… ta chỉ giữ lời hứa thôi!",
						"thai": "หลบหนี… ข้าแค่รักษาสัญญา!",
						"hindi": "पलायन… मैंने बस अपना वादा निभाया है!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "당신은 모르티페라의 고통을 외면하고 있어.",
						"english": "You're ignoring Mortifera's suffering.",
						"japanese": "あなたはモルティフェラの苦痛から目を背けている。",
						"chinese": "你在回避莫蒂费拉的痛苦。",
						"french": "Vous ignorez la souffrance de Mortifera.",
						"spanish": "Estás ignorando el sufrimiento de Mortifera.",
						"vietnamese": "Ngươi đang phớt lờ nỗi đau của Mortifera.",
						"thai": "เจ้ากำลังเมินเฉยต่อความทุกข์ทรมานของมอร์ติเฟร่า",
						"hindi": "तुम मोर्टिफेरा की पीड़ा को नज़रअंदाज़ कर रहे हो।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "...아니다. 나는…!",
						"english": "...No. I...!",
						"japanese": "…違う。私は…！",
						"chinese": "…不。我…！",
						"french": "…Non. Je… !",
						"spanish": "¡…No. Yo…!",
						"vietnamese": "…Không. Ta…!",
						"thai": "...ไม่ใช่ ข้า...!",
						"hindi": "…नहीं। मैं…!"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음처럼 부서졌다.",
						"english": "The colossal shadow shattered like ice.",
						"japanese": "巨大な影が氷のように砕け散った。",
						"chinese": "巨大的影子如冰般破碎。",
						"french": "L'ombre colossale se brisa comme de la glace.",
						"spanish": "La sombra colosal se hizo pedazos como el hielo.",
						"vietnamese": "Cái bóng khổng lồ vỡ tan như băng.",
						"thai": "เงาอันมหึมาแตกสลายราวกับน้ำแข็ง",
						"hindi": "विशाल छाया बर्फ की तरह टूट गई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…진실은… 너희를… 얼릴 것이다…",
						"english": "...The truth... will... freeze you...",
						"japanese": "…真実が… お前たちを… 凍らせるだろう…",
						"chinese": "…真相… 将… 冻结你们…",
						"french": "...La vérité... vous... glacera...",
						"spanish": "...La verdad... os... helará...",
						"vietnamese": "…Sự thật… sẽ… đóng băng các ngươi…",
						"thai": "...ความจริง...จะ...แช่แข็งพวกเจ้า...",
						"hindi": "...सच्चाई... तुम्हें... जमा देगी..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실? 아직도 뭘 숨기는 거야?",
						"english": "Truth? What are you still hiding?",
						"japanese": "真実？まだ何を隠しているんだ？",
						"chinese": "真相？你还在隐藏什么？",
						"french": "La vérité ? Qu'est-ce que tu caches encore ?",
						"spanish": "¿Verdad? ¿Qué sigues ocultando?",
						"vietnamese": "Sự thật ư? Ngươi còn giấu giếm điều gì nữa?",
						"thai": "ความจริงรึ? เจ้ายังซ่อนอะไรไว้อีก?",
						"hindi": "सच? तुम अभी भी क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "내가… 내가 뭘 한 거지?",
						"english": "What... what have I done?",
						"japanese": "私が… 私が何をしたんだ？",
						"chinese": "我… 我做了什么？",
						"french": "Qu'est-ce que... qu'ai-je fait ?",
						"spanish": "¿Qué... qué he hecho?",
						"vietnamese": "Ta… ta đã làm gì thế này?",
						"thai": "ข้า... ข้าทำอะไรลงไป?",
						"hindi": "मैंने... मैंने क्या किया?"
					}
				},
				{
					"speaker": "character_4",
					"content": {
						"korean": "당신의 맹세는… 파멸을 불렀어.",
						"english": "Your oath... brought ruin.",
						"japanese": "あなたの誓いは… 破滅を招いた。",
						"chinese": "你的誓言… 带来了毁灭。",
						"french": "Votre serment... a causé la ruine.",
						"spanish": "Tu juramento... trajo la ruina.",
						"vietnamese": "Lời thề của ngươi… đã mang đến sự hủy diệt.",
						"thai": "คำสาบานของเจ้า... นำมาซึ่งความพินาศ",
						"hindi": "तुम्हारी शपथ... विनाश लेकर आई।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아눅의 고백은 진실의 일부일 뿐이었다. 이 비극의 뿌리는 더 깊었다.",
						"english": "Anuk's confession was only part of the truth. The roots of this tragedy ran deeper.",
						"japanese": "アヌークの告白は真実の一部に過ぎなかった。この悲劇の根はもっと深かった。",
						"chinese": "阿努克的供述只是真相的一部分。这场悲剧的根源更深。",
						"french": "La confession d'Anouk n'était qu'une partie de la vérité. Les racines de cette tragédie étaient plus profondes.",
						"spanish": "La confesión de Anuk era solo una parte de la verdad. Las raíces de esta tragedia eran más profundas.",
						"vietnamese": "Lời thú tội của Anuk chỉ là một phần sự thật. Cội rễ của bi kịch này sâu hơn nhiều.",
						"thai": "คำสารภาพของอนุกเป็นเพียงส่วนหนึ่งของความจริง รากเหง้าของโศกนาฏกรรมนี้หยั่งลึกกว่านั้น",
						"hindi": "अनुक का कबूलनामा सच का सिर्फ एक हिस्सा था। इस त्रासदी की जड़ें कहीं गहरी थीं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼음 결정이 다시 한번 모든 것을 삼켰다.",
						"english": "Ice crystals swallowed everything once more.",
						"japanese": "氷の結晶が再びすべてを飲み込んだ。",
						"chinese": "冰晶再次吞噬了一切。",
						"french": "Les cristaux de glace engloutirent à nouveau tout.",
						"spanish": "Los cristales de hielo lo engulleron todo una vez más.",
						"vietnamese": "Tinh thể băng lại một lần nữa nuốt chửng mọi thứ.",
						"thai": "ผลึกน้ำแข็งกลืนกินทุกสิ่งอีกครั้ง",
						"hindi": "बर्फ के क्रिस्टल ने एक बार फिर सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 어리석음이… 이 비극을 끝없이 반복할 것이다.",
						"english": "Your foolishness... will repeat this tragedy endlessly.",
						"japanese": "お前たちの愚かさが… この悲劇を際限なく繰り返すだろう。",
						"chinese": "你们的愚蠢… 将无休止地重复这场悲剧。",
						"french": "Votre folie... répétera cette tragédie sans fin.",
						"spanish": "Vuestra estupidez... repetirá esta tragedia sin cesar.",
						"vietnamese": "Sự ngu ngốc của các ngươi… sẽ lặp lại bi kịch này không ngừng.",
						"thai": "ความโง่เขลาของพวกเจ้า... จะทำให้โศกนาฏกรรมนี้ซ้ำรอยไม่รู้จบ",
						"hindi": "तुम्हारी मूर्खता... इस त्रासदी को अंतहीन रूप से दोहराएगी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "안 돼… 이대로는…!",
						"english": "No... not like this...!",
						"japanese": "だめだ…このままじゃ！",
						"chinese": "不行…不能这样下去！",
						"french": "Non... pas comme ça !",
						"spanish": "¡No... así no!",
						"vietnamese": "Không... không thể như thế này được!",
						"thai": "ไม่นะ... จะเป็นแบบนี้ไม่ได้!",
						"hindi": "नहीं... ऐसे नहीं!"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포기할 순 없어. 당신이 숨긴 진실을 밝혀낼 거야!",
						"english": "I can't give up. I'll uncover the truth you've hidden!",
						"japanese": "諦めるものか。お前が隠した真実を暴いてやる！",
						"chinese": "我不能放弃。我会揭露你隐藏的真相！",
						"french": "Je ne peux pas abandonner. Je découvrirai la vérité que tu as cachée !",
						"spanish": "No puedo rendirme. ¡Revelaré la verdad que has ocultado!",
						"vietnamese": "Không thể bỏ cuộc. Tôi sẽ vạch trần sự thật mà ngươi đã che giấu!",
						"thai": "ฉันยอมแพ้ไม่ได้ ฉันจะเปิดเผยความจริงที่นายซ่อนไว้!",
						"hindi": "मैं हार नहीं मान सकता। मैं तुम्हारे छिपाए हुए सच को बेनकाब करूँगा!"
					}
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "…아직도… 나를 믿지 못하는가.",
						"english": "...Still... you don't trust me?",
						"japanese": "…まだ…私を信じられぬのか。",
						"chinese": "…你…还是不相信我吗。",
						"french": "...Tu... ne me crois toujours pas ?",
						"spanish": "...¿Todavía... no confías en mí?",
						"vietnamese": "...Vẫn còn... không tin tôi sao?",
						"thai": "...ยัง... ไม่เชื่อใจฉันอีกเหรอ?",
						"hindi": "…क्या तुम्हें… अभी भी मुझ पर भरोसा नहीं?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다. 그 실체를 알 수 없었다.",
						"english": "A colossal shadow appeared. Its true form was unknown.",
						"japanese": "巨大な影が現れた。その実体は知れなかった。",
						"chinese": "一个巨大的影子出现了。其真面目不得而知。",
						"french": "Une ombre colossale apparut. Sa véritable nature était inconnue.",
						"spanish": "Una sombra colosal apareció. Su verdadera forma era desconocida.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Không thể biết được thực thể của nó.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ไม่ทราบถึงรูปร่างที่แท้จริง",
						"hindi": "एक विशालकाय परछाई उभरी। उसका असली स्वरूप अज्ञात था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자들이여… 겨울의 맹세를 깬 대가를 치러라.",
						"english": "Intruders… Pay the price for breaking the Winter's Oath.",
						"japanese": "侵入者たちよ… 冬の誓いを破った代償を払え。",
						"chinese": "入侵者们… 为打破冬之誓言付出代价吧。",
						"french": "Intrus… Payez le prix d'avoir brisé le Serment d'Hiver.",
						"spanish": "Invasores… Pagad el precio por romper el Juramento de Invierno.",
						"vietnamese": "Những kẻ xâm nhập… Hãy trả giá cho việc phá vỡ Lời Thề Mùa Đông.",
						"thai": "พวกผู้บุกรุก… จงชดใช้ที่ละเมิดคำสาบานแห่งเหมันต์",
						"hindi": "घुसपैठियो… शीत ऋतु की शपथ तोड़ने का परिणाम भुगतो।"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "'겨울의 신'의 사자여! 이들은 모르고 한 짓입니다!",
						"english": "Emissary of the 'Winter God'! They acted unknowingly!",
						"japanese": "「冬の神」の使者よ！彼らは知らずに行ったことです！",
						"chinese": "“冬之神”的使者啊！他们是无心之过！",
						"french": "Émissaire du « Dieu de l'Hiver » ! Ils ont agi sans le savoir !",
						"spanish": "¡Emisario del 'Dios del Invierno'! ¡Actuaron sin saber!",
						"vietnamese": "Sứ giả của 'Thần Mùa Đông'! Họ đã hành động mà không biết!",
						"thai": "ทูตแห่ง 'เทพแห่งฤดูหนาว'! พวกเขาทำไปโดยไม่รู้ตัว!",
						"hindi": "'शीत के देवता' के दूत! इन्होंने अनजाने में किया है!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이게 다 너 때문이잖아, 아눅!",
						"english": "This is all your fault, Anuk!",
						"japanese": "これ全部お前のせいじゃないか、アヌク！",
						"chinese": "这都是你的错，阿努克！",
						"french": "Tout ça c'est de ta faute, Anuk !",
						"spanish": "¡Todo esto es por tu culpa, Anuk!",
						"vietnamese": "Tất cả là lỗi của ngươi, Anuk!",
						"thai": "นี่มันทั้งหมดเป็นความผิดของเจ้านี่, อานุก!",
						"hindi": "यह सब तुम्हारी वजह से है, अनूक!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는 깨졌고, 고통은 계속될 것이다.",
						"english": "The oath is broken, and the suffering will continue.",
						"japanese": "誓いは破られ、苦痛は続くだろう。",
						"chinese": "誓言已破，痛苦将持续。",
						"french": "Le serment est brisé, et la souffrance perdurera.",
						"spanish": "El juramento ha sido roto y el sufrimiento continuará.",
						"vietnamese": "Lời thề đã bị phá vỡ, và nỗi đau sẽ tiếp tục.",
						"thai": "คำสาบานถูกทำลาย และความเจ็บปวดจะดำเนินต่อไป",
						"hindi": "शपथ टूट गई है, और दर्द जारी रहेगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "모르티페라는… 나의 부족을 위한 희생이었다!",
						"english": "Mortifera... was a sacrifice for my tribe!",
						"japanese": "モルティフェラは… 私の部族のための犠牲だった！",
						"chinese": "莫提费拉… 是为了我的部族而牺牲！",
						"french": "Mortifera... fut un sacrifice pour ma tribu !",
						"spanish": "¡Mortifera... fue un sacrificio para mi tribu!",
						"vietnamese": "Mortifera… là một sự hy sinh cho bộ lạc của tôi!",
						"thai": "มอร์ติเฟรา... เป็นการเสียสละเพื่อเผ่าของข้า!",
						"hindi": "मोर्टिफेरा... मेरे कबीले के लिए एक बलिदान थी!"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원한 눈보라 속, 길잡이 아눅의 말은 점차 흐려졌다.",
			"모르티페라를 파괴하려는 시도. 그러나 얼음의 반응은 예상과 달랐다.",
			"깨져가는 신뢰, 드러나는 과거. 비극의 진실이 얼음처럼 갈라졌다.",
			"그가 숨긴 슬픈 약속. 모든 것이 왜곡된 이 길 끝에, 무엇이 기다릴까."
		],
		"english": [
			"Amidst the eternal blizzard, Anuk's words faded.",
			"Attempting to destroy Mortifera. But the ice reacted unexpectedly.",
			"Fading trust, revealing past. The tragic truth split like ice.",
			"The sad promise he hid. At the end of this twisted path, what awaits?"
		],
		"japanese": [
			"永遠の吹雪の中、案内人アヌクの言葉は次第にかすれていった。",
			"モルティフェラを破壊しようとする試み。しかし、氷の反応は予想とは異なっていた。",
			"崩れゆく信頼、露わになる過去。悲劇の真実が氷のように裂けた。",
			"彼が隠した悲しい約束。すべてが歪んだこの道の果てに、何が待つのか。"
		],
		"chinese": [
			"在永恒的暴雪中，向导阿努克的声音渐渐模糊。",
			"试图摧毁莫提费拉。然而，冰的反应出乎意料。",
			"信任破碎，过往浮现。悲剧的真相如冰般裂开。",
			"他隐藏的悲伤诺言。在这条扭曲的道路尽头，等待着什么？"
		],
		"french": [
			"Au milieu du blizzard éternel, les mots d'Anuk s'estompaient.",
			"Tentative de destruction de Mortifera. Mais la glace réagit différemment que prévu.",
			"La confiance s'effrite, le passé se révèle. La vérité tragique se fend comme la glace.",
			"La triste promesse qu'il a cachée. Au bout de ce chemin tordu, qu'est-ce qui attend ?"
		],
		"spanish": [
			"En la eterna ventisca, las palabras de Anuk se desvanecieron.",
			"Intentando destruir Mortifera. Pero el hielo reaccionó de forma inesperada.",
			"La confianza se desmorona, el pasado se revela. La trágica verdad se partió como el hielo.",
			"La triste promesa que ocultó. Al final de este camino retorcido, ¿qué nos espera?"
		],
		"vietnamese": [
			"Giữa bão tuyết vĩnh cửu, lời của Anuk dần mờ nhạt.",
			"Cố gắng phá hủy Mortifera. Nhưng phản ứng của băng không như mong đợi.",
			"Niềm tin rạn nứt, quá khứ hé lộ. Sự thật bi thảm vỡ tan như băng.",
			"Lời hứa buồn anh ấy che giấu. Cuối con đường méo mó này, điều gì đang chờ đợi?"
		],
		"thai": [
			"ท่ามกลางพายุหิมะนิรันดร์ คำพูดของอานุกผู้ชี้นำค่อยๆ เลือนหายไป",
			"ความพยายามที่จะทำลายมอร์ติเฟร่า แต่ปฏิกิริยาของน้ำแข็งกลับไม่เป็นไปตามที่คาดไว้",
			"ความเชื่อใจที่พังทลาย อดีตที่เปิดเผย ความจริงอันน่าเศร้าแยกออกจากกันเหมือนน้ำแข็ง",
			"คำมั่นสัญญาอันน่าเศร้าที่เขาซ่อนไว้ ที่ปลายทางอันบิดเบี้ยวนี้ มีอะไรรออยู่?"
		],
		"hindi": [
			"अनन्त बर्फीले तूफान के बीच, अनुक के शब्द धीरे-धीरे फीके पड़ गए।",
			"मोर्टीफेरा को नष्ट करने का प्रयास। लेकिन बर्फ की प्रतिक्रिया अप्रत्याशित थी।",
			"विश्वास टूट रहा है, अतीत सामने आ रहा है। दुखद सच बर्फ की तरह बिखर गया।",
			"वह दुखद वादा जो उसने छिपाया था। इस मुड़े हुए रास्ते के अंत में, क्या इंतजार कर रहा है?"
		]
	}
} as const;
