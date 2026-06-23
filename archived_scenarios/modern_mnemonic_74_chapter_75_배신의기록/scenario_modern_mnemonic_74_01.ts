export const scenario_modern_mnemonic_74_01 = {
	"scenario_id": "modern_mnemonic_74_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네온이 쏟아지는 도시, 그림자 속에서 모든 것이 거래된다.",
			"정체를 알 수 없는 브로커, 그의 이름은 Mnemonic.",
			"진실은 왜곡되고, 신뢰는 깨진다.",
			"잿더미가 된 첫 의뢰. 복수는 이렇게 시작되었다."
		],
		"english": [
			"In a neon-drenched city, everything is traded in the shadows.",
			"An unknown broker, his name is Mnemonic.",
			"Truth is twisted, trust is broken.",
			"The first mission in ashes. Vengeance begins now."
		],
		"japanese": [
			"ネオン輝く都市、影の中で全てが取引される。",
			"正体不明のブローカー、その名はMnemonic。",
			"真実は歪められ、信頼は裏切られる。",
			"灰と化した最初の依頼。復讐はこうして始まった。"
		],
		"chinese": [
			"霓虹闪烁的都市，一切都在暗影中交易。",
			"一位身份不明的掮客，他的名字是Mnemonic。",
			"真相被扭曲，信任被打破。",
			"首次委托化为灰烬。复仇就此开始。"
		],
		"french": [
			"Dans une ville baignée de néons, tout s'échange dans l'ombre.",
			"Un courtier inconnu, son nom est Mnemonic.",
			"La vérité est déformée, la confiance est brisée.",
			"La première mission réduite en cendres. La vengeance commence ainsi."
		],
		"spanish": [
			"En una ciudad de neón, todo se negocia en las sombras.",
			"Un corredor desconocido, su nombre es Mnemonic.",
			"La verdad se distorsiona, la confianza se rompe.",
			"El primer encargo en cenizas. Así comenzó la venganza."
		],
		"vietnamese": [
			"Trong thành phố ngập tràn ánh neon, mọi thứ được giao dịch trong bóng tối.",
			"Một kẻ môi giới bí ẩn, tên hắn là Mnemonic.",
			"Sự thật bị bóp méo, lòng tin bị đánh mất.",
			"Nhiệm vụ đầu tiên hóa thành tro bụi. Sự trả thù bắt đầu từ đây."
		],
		"thai": [
			"ในเมืองที่เต็มไปด้วยแสงนีออน ทุกสิ่งถูกซื้อขายในเงามืด",
			"นายหน้าปริศนา นามของเขาคือ Mnemonic",
			"ความจริงบิดเบี้ยว ความไว้ใจพังทลาย",
			"ภารกิจแรกที่กลายเป็นเถ้าถ่าน การแก้แค้นเริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"नियॉन से भरे शहर में, सब कुछ अँधेरे में कारोबार किया जाता है।",
			"एक अज्ञात दलाल, उसका नाम स्मरक है।",
			"सत्य विकृत हो गया है, विश्वास टूट गया है।",
			"पहला असाइनमेंट राख में बदल गया। बदला ऐसे शुरू हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어두운 골목, 낡은 스크린에서 섬뜩한 노이즈가 번뜩였다.",
						"english": "A dark alley, eerie static flashed on an old screen.",
						"japanese": "暗い路地、古いスクリーンに不気味なノイズが閃いた。",
						"chinese": "昏暗的小巷，旧屏幕上闪烁着诡异的噪音。",
						"french": "Dans une ruelle sombre, un bruit étrange crépitait sur un vieil écran.",
						"spanish": "Un callejón oscuro, un ruido espeluznante destelló en una pantalla vieja.",
						"vietnamese": "Trong con hẻm tối, tiếng nhiễu đáng sợ lóe lên trên màn hình cũ.",
						"thai": "ในตรอกมืด เสียงรบกวนน่าขนลุกกะพริบบนจอภาพเก่า",
						"hindi": "एक अँधेरी गली, एक पुरानी स्क्रीन पर भयानक शोर चमक उठा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 Mnemonic의 흔적을 찾을 수 있을까?",
						"english": "Can I find Mnemonic's traces here?",
						"japanese": "ここでMnemonicの痕跡を見つけられるか？",
						"chinese": "我能在这里找到Mnemonic的踪迹吗？",
						"french": "Puis-je trouver les traces de Mnemonic ici ?",
						"spanish": "¿Puedo encontrar las huellas de Mnemonic aquí?",
						"vietnamese": "Liệu tôi có thể tìm thấy dấu vết của Mnemonic ở đây không?",
						"thai": "จะหาเบาะแสของ Mnemonic เจอที่นี่ไหม?",
						"hindi": "क्या मैं यहां स्मरक के निशान ढूंढ सकता हूं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…당신이 그 정보원인가요? Mnemonic을 찾아야 해요.",
						"english": "...Are you the informant? I need to find Mnemonic.",
						"japanese": "…あなたがその情報源ですか？Mnemonicを見つけないと。",
						"chinese": "……你是那个情报员吗？我需要找到Mnemonic。",
						"french": "...Êtes-vous l'informateur ? Je dois trouver Mnemonic.",
						"spanish": "¿...Eres el informante? Necesito encontrar a Mnemonic.",
						"vietnamese": "...Anh là người cung cấp thông tin phải không? Tôi cần tìm Mnemonic.",
						"thai": "...คุณคือสายสืบคนนั้นใช่ไหม? ฉันต้องหา Mnemonic",
						"hindi": "...क्या आप वही मुखबिर हैं? मुझे स्मरक को ढूंढना होगा।"
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "내 가족을… 그들이 가져갔어.",
						"english": "My family... they took them.",
						"japanese": "私の家族を…彼らが連れて行った。",
						"chinese": "我的家人……他们把他们带走了。",
						"french": "Ma famille... ils les ont pris.",
						"spanish": "A mi familia... ellos se los llevaron.",
						"vietnamese": "Gia đình tôi... họ đã bắt họ đi rồi.",
						"thai": "ครอบครัวของฉัน...พวกเขาพรากมันไป",
						"hindi": "मेरे परिवार को... वे उन्हें ले गए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Mnemonic? 그 익명의 브로커를?",
						"english": "Mnemonic? That anonymous broker?",
						"japanese": "Mnemonic？あの匿名のブローカーを？",
						"chinese": "Mnemonic？那个匿名的掮客？",
						"french": "Mnemonic ? Ce courtier anonyme ?",
						"spanish": "¿Mnemonic? ¿Ese corredor anónimo?",
						"vietnamese": "Mnemonic? Kẻ môi giới ẩn danh đó à?",
						"thai": "Mnemonic? นายหน้าไร้ชื่อคนนั้นน่ะเหรอ?",
						"hindi": "स्मरक? वह गुमनाम दलाल?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "그들의 흔적을 쫓아 이 좌표로 가주세요. 전부 되찾아야 해.",
						"english": "Follow their traces to these coordinates. I need to get everything back.",
						"japanese": "彼らの痕跡を追って、この座標に行ってください。全て取り戻さないと。",
						"chinese": "请追踪他们的踪迹，前往这些坐标。我必须夺回一切。",
						"french": "Suivez leurs traces jusqu'à ces coordonnées. Je dois tout récupérer.",
						"spanish": "Sigue sus huellas hasta estas coordenadas. Tengo que recuperarlo todo.",
						"vietnamese": "Hãy theo dấu vết của họ đến tọa độ này. Tôi phải lấy lại tất cả.",
						"thai": "ตามรอยพวกเขาไปยังพิกัดนี้ ฉันต้องเอาทุกอย่างคืนมาให้ได้",
						"hindi": "उनके निशानों का पीछा करते हुए इन निर्देशांकों पर जाएं। मुझे सब कुछ वापस पाना है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "nia",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "말도 안 돼… 이게 대체 무슨…",
						"english": "Unbelievable... What in the world is this...",
						"japanese": "信じられない…一体これは何だ…",
						"chinese": "这不可能……这到底是什么……",
						"french": "Incroyable... Qu'est-ce que c'est que ça...",
						"spanish": "Increíble... ¿Qué demonios es esto...",
						"vietnamese": "Không thể tin được... Cái quái gì thế này...",
						"thai": "ไม่จริงน่า... นี่มันอะไรกัน...",
						"hindi": "अविश्वसनीय... यह सब क्या है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "현장이 엉망이 됐어.",
						"english": "The scene is a mess.",
						"japanese": "現場がめちゃくちゃになった。",
						"chinese": "现场变得一团糟。",
						"french": "La scène est sens dessus dessous.",
						"spanish": "La escena está hecha un desastre.",
						"vietnamese": "Hiện trường đã trở nên hỗn loạn.",
						"thai": "ที่เกิดเหตุพังยับเยินไปหมดแล้ว",
						"hindi": "दृश्य अस्त-व्यस्त हो गया है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 곳곳의 디지털 시스템에 알 수 없는 오류가 발생했다.",
						"english": "Unknown errors have occurred in digital systems throughout the city.",
						"japanese": "都市各地のデジタルシステムに未知のエラーが発生した。",
						"chinese": "城市各处的数字系统发生了未知错误。",
						"french": "Des erreurs inconnues sont survenues dans les systèmes numériques de toute la ville.",
						"spanish": "Han ocurrido errores desconocidos en los sistemas digitales de toda la ciudad.",
						"vietnamese": "Lỗi không xác định đã xảy ra trong các hệ thống kỹ thuật số khắp thành phố.",
						"thai": "เกิดข้อผิดพลาดที่ไม่รู้จักในระบบดิจิทัลทั่วเมือง",
						"hindi": "शहर भर के डिजिटल सिस्टम में अज्ञात त्रुटियां हुई हैं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "분명 Mnemonic이 손을 쓴 거야. 너무 늦었어…",
						"english": "Mnemonic must have done something. It's too late...",
						"japanese": "Mnemonicが手を出したに違いない。もう遅い…",
						"chinese": "Mnemonic肯定动了手脚。太迟了……",
						"french": "Mnemonic a dû agir. C'est trop tard...",
						"spanish": "Mnemonic debe haber hecho algo. Es demasiado tarde...",
						"vietnamese": "Mnemonic chắc chắn đã ra tay. Quá muộn rồi...",
						"thai": "Mnemonic ต้องลงมือแล้วแน่ๆ สายเกินไปแล้ว...",
						"hindi": "Mnemonic ने कुछ किया होगा। बहुत देर हो चुकी है..."
					},
					"speaker": "nia"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 Mnemonic의 방식인가.",
						"english": "Is this Mnemonic's way?",
						"japanese": "これがMnemonicのやり方なのか。",
						"chinese": "这就是Mnemonic的方式吗？",
						"french": "Est-ce la méthode de Mnemonic ?",
						"spanish": "¿Es esta la forma de Mnemonic?",
						"vietnamese": "Đây là cách Mnemonic làm ư?",
						"thai": "นี่คือวิธีของ Mnemonic หรือ?",
						"hindi": "क्या यह Mnemonic का तरीका है?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "nia",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "…그들이 전부 조작했어. 처음부터.",
						"english": "...They manipulated everything. From the start.",
						"japanese": "…彼らがすべてを操作していた。最初から。",
						"chinese": "……他们从一开始就操纵了一切。",
						"french": "...Ils ont tout manipulé. Depuis le début.",
						"spanish": "...Lo manipularon todo. Desde el principio.",
						"vietnamese": "...Họ đã thao túng mọi thứ. Ngay từ đầu.",
						"thai": "...พวกเขาบงการทุกอย่าง ตั้งแต่แรกแล้ว",
						"hindi": "...उन्होंने सब कुछ हेरफेर किया। शुरू से ही।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "나한테 준 정보 자체가 함정이었던 거야. Mnemonic의 함정.",
						"english": "The information they gave me was a trap itself. Mnemonic's trap.",
						"japanese": "私にくれた情報自体が罠だったんだ。Mnemonicの罠だ。",
						"chinese": "他们给我的信息本身就是个陷阱。Mnemonic的陷阱。",
						"french": "L'information qu'ils m'ont donnée était un piège en soi. Le piège de Mnemonic.",
						"spanish": "La información que me dieron era una trampa en sí misma. La trampa de Mnemonic.",
						"vietnamese": "Thông tin họ cho tôi vốn là một cái bẫy. Cái bẫy của Mnemonic.",
						"thai": "ข้อมูลที่พวกเขาให้มามันเป็นกับดัก Mnemonic วางกับดักไว้",
						"hindi": "उन्होंने जो जानकारी मुझे दी, वह खुद एक जाल था। Mnemonic का जाल।"
					},
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "가족을 찾을 수 있다고… 그 말을 믿었는데…",
						"english": "They said I could find my family... I believed them...",
						"japanese": "家族を見つけられると…その言葉を信じていたのに…",
						"chinese": "他们说我能找到家人……我竟然相信了……",
						"french": "Ils ont dit que je pouvais retrouver ma famille... J'y ai cru...",
						"spanish": "Dijeron que podría encontrar a mi familia... Y yo les creí...",
						"vietnamese": "Họ nói tôi có thể tìm thấy gia đình... Tôi đã tin họ...",
						"thai": "บอกว่าฉันจะได้เจอครอบครัว... ฉันเชื่อพวกเขาไปแล้ว...",
						"hindi": "उन्होंने कहा कि मैं अपने परिवार को ढूंढ सकता हूँ... मैंने उन पर विश्वास किया था..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Mnemonic… 절대 용서 못 해.",
						"english": "Mnemonic... I'll never forgive them.",
						"japanese": "Mnemonic…絶対に許さない。",
						"chinese": "Mnemonic……我绝不会原谅他们。",
						"french": "Mnemonic... Je ne leur pardonnerai jamais.",
						"spanish": "Mnemonic... Nunca los perdonaré.",
						"vietnamese": "Mnemonic... Tôi sẽ không bao giờ tha thứ cho họ.",
						"thai": "Mnemonic... ฉันจะไม่มีวันให้อภัยเด็ดขาด",
						"hindi": "Mnemonic... मैं उन्हें कभी माफ़ नहीं करूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
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
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이 자가… Mnemonic의 부하인가?",
						"english": "Is this person... Mnemonic's subordinate?",
						"japanese": "こいつは… Mnemonicの手下か？",
						"chinese": "难道这家伙是… Mnemonic的部下？",
						"french": "Cet individu… est-il un subordonné de Mnemonic ?",
						"spanish": "¿Es este tipo… un subordinado de Mnemonic?",
						"vietnamese": "Kẻ này… là thuộc hạ của Mnemonic sao?",
						"thai": "เจ้านี่... เป็นลูกน้องของ Mnemonic หรือ?",
						"hindi": "क्या यह व्यक्ति… Mnemonic का अधीनस्थ है?"
					},
					"speaker": "nia",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "random_boss",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Mnemonic의 계획은 완벽하다. 너희 따위가 막을 수 없어.",
						"english": "Mnemonic's plan is perfect. You insignificant beings can't stop it.",
						"japanese": "Mnemonicの計画は完璧だ。お前らごときが止められるものか。",
						"chinese": "Mnemonic的计划是完美的。你们这些家伙阻止不了。",
						"french": "Le plan de Mnemonic est parfait. Des êtres comme vous ne peuvent l'arrêter.",
						"spanish": "El plan de Mnemonic es perfecto. Seres insignificantes como ustedes no pueden detenerlo.",
						"vietnamese": "Kế hoạch của Mnemonic hoàn hảo. Bọn các ngươi không thể ngăn cản.",
						"thai": "แผนของ Mnemonic สมบูรณ์แบบ พวกแกไม่มีทางหยุดมันได้หรอก",
						"hindi": "Mnemonic की योजना त्रुटिहीन है। तुम जैसे तुच्छ लोग इसे रोक नहीं सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너희 때문에 모든 것이 망가졌어.",
						"english": "Everything is ruined because of you.",
						"japanese": "お前たちのせいで全てが台無しになった。",
						"chinese": "一切都因为你们而毁了。",
						"french": "Tout est gâché à cause de vous.",
						"spanish": "Todo se arruinó por su culpa.",
						"vietnamese": "Mọi thứ đã hỏng vì các ngươi.",
						"thai": "ทุกอย่างพังทลายเพราะพวกแก",
						"hindi": "सब कुछ तुम्हारी वजह से बर्बाद हो गया।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그것이 Mnemonic의 의지다.",
						"english": "That is Mnemonic's will.",
						"japanese": "それがMnemonicの意思だ。",
						"chinese": "那是Mnemonic的意志。",
						"french": "C'est la volonté de Mnemonic.",
						"spanish": "Esa es la voluntad de Mnemonic.",
						"vietnamese": "Đó là ý chí của Mnemonic.",
						"thai": "นั่นคือเจตจำนงของ Mnemonic",
						"hindi": "वही Mnemonic की इच्छा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "비겁한 자들…!",
						"english": "Cowards...!",
						"japanese": "卑怯者め…！",
						"chinese": "懦夫…！",
						"french": "Lâches… !",
						"spanish": "¡Cobardes...!",
						"vietnamese": "Đồ hèn nhát…!",
						"thai": "พวกขี้ขลาด...!",
						"hindi": "कायरों…!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 사라질 시간이다.",
						"english": "It's time to disappear.",
						"japanese": "もう消える時間だ。",
						"chinese": "是时候消失了。",
						"french": "Il est temps de disparaître.",
						"spanish": "Es hora de desaparecer.",
						"vietnamese": "Đã đến lúc biến mất.",
						"thai": "ได้เวลาหายไปแล้ว",
						"hindi": "अब अदृश्य होने का समय है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에 온 걸 후회하게 될 거다.",
						"english": "You'll regret coming here.",
						"japanese": "ここに来たことを後悔するだろう。",
						"chinese": "你会后悔来到这里。",
						"french": "Tu regretteras d'être venu ici.",
						"spanish": "Te arrepentirás de haber venido aquí.",
						"vietnamese": "Ngươi sẽ hối hận vì đã đến đây.",
						"thai": "แกจะต้องเสียใจที่มาที่นี่",
						"hindi": "तुम्हें यहाँ आने का पछतावा होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 잃을 건 없어!",
						"english": "There's nothing left to lose!",
						"japanese": "もう失うものはない！",
						"chinese": "我没有什么好失去的了！",
						"french": "Je n'ai plus rien à perdre !",
						"spanish": "¡Ya no tengo nada que perder!",
						"vietnamese": "Không còn gì để mất nữa!",
						"thai": "ไม่มีอะไรจะเสียอีกแล้ว!",
						"hindi": "अब कुछ भी खोने को नहीं है!"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Mnemonic, 네놈을 쓰러뜨릴 때까지 멈추지 않아.",
						"english": "Mnemonic, I won't stop until I defeat you.",
						"japanese": "Mnemonic、お前を倒すまで止まらない。",
						"chinese": "Mnemonic，不打倒你我不会停下。",
						"french": "Mnemonic, je ne m'arrêterai pas avant de t'avoir vaincu.",
						"spanish": "Mnemonic, no me detendré hasta derrotarte.",
						"vietnamese": "Mnemonic, ta sẽ không dừng lại cho đến khi đánh bại ngươi.",
						"thai": "Mnemonic, ฉันจะไม่หยุดจนกว่าจะโค่นแกได้",
						"hindi": "Mnemonic, मैं तुम्हें हराने तक नहीं रुकूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무의미한 저항이군.",
						"english": "Futile resistance.",
						"japanese": "無意味な抵抗だな。",
						"chinese": "毫无意义的抵抗。",
						"french": "Résistance inutile.",
						"spanish": "Resistencia inútil.",
						"vietnamese": "Sự kháng cự vô nghĩa.",
						"thai": "การต่อต้านที่ไร้ความหมาย",
						"hindi": "निरर्थक प्रतिरोध।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. Mnemonic의 손아귀에서 벗어날 수 없다.",
						"english": "Fools. You cannot escape Mnemonic's grasp.",
						"japanese": "愚か者め。Mnemonicの手から逃れることはできない。",
						"chinese": "愚蠢的家伙们。你们无法逃脱Mnemonic的掌控。",
						"french": "Fous. Vous ne pouvez échapper à l'emprise de Mnemonic.",
						"spanish": "Necios. No podéis escapar de las garras de Mnemonic.",
						"vietnamese": "Lũ ngu ngốc. Ngươi không thể thoát khỏi sự kìm kẹp của Mnemonic.",
						"thai": "พวกโง่เง่า! เจ้าไม่มีทางหนีพ้นเงื้อมมือของ Mnemonic ได้หรอก",
						"hindi": "मूर्खों। तुम Mnemonic की पकड़ से बच नहीं सकते।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还…没结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn… chưa kết thúc.",
						"thai": "ยัง…ไม่จบ",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시 일어설 거야. 반드시.",
						"english": "I will rise again. Definitely.",
						"japanese": "また立ち上がる。必ず。",
						"chinese": "我会再次站起来。一定会。",
						"french": "Je me relèverai. Absolument.",
						"spanish": "Me levantaré de nuevo. Definitivamente.",
						"vietnamese": "Tôi sẽ đứng dậy lần nữa. Nhất định.",
						"thai": "ฉันจะลุกขึ้นอีกครั้ง. อย่างแน่นอน.",
						"hindi": "मैं फिर से उठूंगा। निश्चित रूप से।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 이것으로 끝이라 생각하나… Mnemonic은… 영원하다…",
						"english": "Ugh... Do you think this is the end? Mnemonic... is eternal...",
						"japanese": "くっ…これで終わりだと思うな… Mnemonicは…永遠だ…",
						"chinese": "呃…你以为这就结束了吗…Mnemonic…是永恒的…",
						"french": "Ugh... Penses-tu que c'est la fin ? Mnemonic... est éternel...",
						"spanish": "Ugh... ¿Crees que este es el final? Mnemonic... es eterno...",
						"vietnamese": "Khụ… Ngươi nghĩ đây là kết thúc sao… Mnemonic… là vĩnh cửu…",
						"thai": "อึก... คิดว่านี่คือจุดจบงั้นรึ... Mnemonic... คือนิรันดร์...",
						"hindi": "उफ़… क्या तुम्हें लगता है कि यह अंत है? Mnemonic… शाश्वत है…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸다…",
						"english": "Defeated...",
						"japanese": "倒した…",
						"chinese": "击败了…",
						"french": "Vaincu...",
						"spanish": "Derrotado...",
						"vietnamese": "Đã đánh bại…",
						"thai": "ล้มลงแล้ว...",
						"hindi": "हरा दिया…"
					},
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "…내 가족은 돌아오지 않아. 아무것도 바뀌지 않아.",
						"english": "...My family won't return. Nothing changes.",
						"japanese": "…私の家族は戻らない。何も変わらない。",
						"chinese": "…我的家人回不来了。什么都没有改变。",
						"french": "...Ma famille ne reviendra pas. Rien ne change.",
						"spanish": "...Mi familia no regresará. Nada cambia.",
						"vietnamese": "…Gia đình tôi sẽ không trở lại. Không gì thay đổi.",
						"thai": "...ครอบครัวของฉันจะไม่กลับมา ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "…मेरा परिवार वापस नहीं आएगा। कुछ भी नहीं बदलेगा।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "잿더미 속에서, Mnemonic의 그림자는 더욱 깊게 드리워졌다.",
						"english": "From the ashes, Mnemonic's shadow deepened further.",
						"japanese": "灰燼の中で、Mnemonicの影はさらに深く伸びた。",
						"chinese": "在灰烬之中，Mnemonic的阴影变得更加深沉。",
						"french": "Des cendres, l'ombre de Mnemonic s'est encore approfondie.",
						"spanish": "Entre las cenizas, la sombra de Mnemonic se profundizó aún más.",
						"vietnamese": "Trong đống tro tàn, bóng tối của Mnemonic càng trở nên sâu thẳm.",
						"thai": "จากเถ้าถ่าน เงาของ Mnemonic ยิ่งทอดยาวลึกขึ้น",
						"hindi": "राख के बीच, Mnemonic की छाया और गहरी हो गई।"
					}
				}
			]
		}
	]
} as const;
