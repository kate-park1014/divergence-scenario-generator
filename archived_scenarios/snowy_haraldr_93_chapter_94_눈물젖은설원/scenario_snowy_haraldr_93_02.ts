export const scenario_snowy_haraldr_93_02 = {
	"scenario_id": "snowy_haraldr_93_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사방이 눈과 얼음으로 뒤덮인 설원. 하랄드르의 기묘한 상점 앞에 멈춰 섰다.",
						"english": "A snowfield covered in snow and ice. We stopped before Haraldr's strange shop.",
						"japanese": "あたり一面雪と氷に覆われた雪原。ハラルドルの奇妙な店先に立ち止まった。",
						"chinese": "四面八方都被雪和冰覆盖的雪原。我们停在了哈拉尔德的奇怪商店前。",
						"french": "Une toundra enneigée couverte de neige et de glace. Nous nous sommes arrêtés devant la curieuse boutique de Haraldr.",
						"spanish": "Un campo nevado cubierto de nieve y hielo. Nos detuvimos frente a la extraña tienda de Haraldr.",
						"vietnamese": "Một tuyết nguyên phủ đầy tuyết và băng. Chúng tôi dừng lại trước cửa hàng kỳ lạ của Haraldr.",
						"thai": "ทุ่งหิมะที่ปกคลุมไปด้วยหิมะและน้ำแข็ง เราหยุดอยู่หน้าร้านแปลกๆ ของฮาราลเดอร์",
						"hindi": "चारों ओर बर्फ और बर्फ़ से ढका बर्फीला मैदान। हम हेराल्ड्र की अजीब दुकान के सामने रुक गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하랄드르의 '전리품'… 저 얼음 결정들에서 달콤한 향이 나.",
						"english": "Haraldr's 'trophies'... those ice crystals have a sweet scent.",
						"japanese": "ハラルドルの「戦利品」…あの氷の結晶からは甘い香りがする。",
						"chinese": "哈拉尔德的“战利品”……那些冰晶散发着甜美的香气。",
						"french": "Les « trophées » de Haraldr… ces cristaux de glace ont un doux parfum.",
						"spanish": "Los 'trofeos' de Haraldr... esos cristales de hielo tienen un dulce aroma.",
						"vietnamese": "'Chiến lợi phẩm' của Haraldr... Những tinh thể băng kia tỏa ra mùi hương ngọt ngào.",
						"thai": "'ของรางวัล' ของฮาราลเดอร์... ผลึกน้ำแข็งเหล่านั้นมีกลิ่นหอมหวาน",
						"hindi": "हेराल्ड्र की 'लूट'... उन बर्फीले क्रिस्टलों से मीठी खुशबू आ रही है।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "흥미롭지 않아? 저 상인, 하랄드르. 그가 파는 '전리품' 말이야.",
						"english": "Isn't it intriguing? That merchant, Haraldr. And the 'trophies' he sells.",
						"japanese": "興味深くはないか？あの商人、ハラルドル。彼が売る「戦利品」のことだ。",
						"chinese": "难道不觉得有趣吗？那个商人，哈拉尔德。还有他出售的“战利品”。",
						"french": "N'est-ce pas intrigant ? Ce marchand, Haraldr. Et les « trophées » qu'il vend.",
						"spanish": "¿No es intrigante? Ese mercader, Haraldr. Y los 'trofeos' que vende.",
						"vietnamese": "Không phải rất thú vị sao? Thương nhân kia, Haraldr. Và những 'chiến lợi phẩm' mà hắn bán.",
						"thai": "ไม่น่าสนใจเหรอ? พ่อค้าคนนั้น ฮาราลเดอร์ และ 'ของรางวัล' ที่เขาขาย",
						"hindi": "दिलचस्प नहीं है? वह व्यापारी, हेराल्ड्र। और वह जो 'लूट' बेचता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "수상하잖아. 평범한 눈 결정이 아닌 것 같아.",
						"english": "It's suspicious. They don't seem like ordinary snow crystals.",
						"japanese": "怪しいな。普通の雪の結晶ではないようだ。",
						"chinese": "很可疑。那些似乎不是普通的雪晶。",
						"french": "C'est suspect. On dirait que ce ne sont pas des cristaux de neige ordinaires.",
						"spanish": "Es sospechoso. No parecen cristales de nieve ordinarios.",
						"vietnamese": "Thật đáng ngờ. Chúng không giống những tinh thể tuyết bình thường.",
						"thai": "มันน่าสงสัยนะ ดูเหมือนจะไม่ใช่ผลึกหิมะธรรมดา",
						"hindi": "यह संदिग्ध है। वे सामान्य बर्फ के क्रिस्टल नहीं लगते।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "소문으로는… 그가 한때 전설적인 전사였다고 해. 저 얼음들이 그 과거와 관련 있다는 소문도.",
						"english": "Rumor has it... he was once a legendary warrior. And these ice formations are said to be connected to his past.",
						"japanese": "噂では…彼がかつて伝説的な戦士だったという。あの氷たちが彼の過去と関係しているという噂も。",
						"chinese": "传闻说……他曾是一位传奇战士。也有传闻说，那些冰与他的过去有关。",
						"french": "La rumeur dit… qu'il était autrefois un guerrier légendaire. Et que ces formations de glace seraient liées à son passé.",
						"spanish": "Se rumorea... que una vez fue un guerrero legendario. Y se dice que estas formaciones de hielo están relacionadas con su pasado.",
						"vietnamese": "Nghe đồn... hắn từng là một chiến binh huyền thoại. Cũng có lời đồn rằng những khối băng kia có liên quan đến quá khứ của hắn.",
						"thai": "มีข่าวลือว่า... เขาเคยเป็นนักรบในตำนาน และน้ำแข็งเหล่านี้ก็มีข่าวลือว่าเกี่ยวข้องกับอดีตของเขาด้วย",
						"hindi": "अफवाह है कि... वह कभी एक महान योद्धा था। और इन बर्फीली आकृतियों का उसके अतीत से संबंध बताया जाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "전설적인 전사?",
						"english": "A legendary warrior?",
						"japanese": "伝説の戦士？",
						"chinese": "传说中的战士？",
						"french": "Un guerrier légendaire ?",
						"spanish": "¿Un guerrero legendario?",
						"vietnamese": "Một chiến binh huyền thoại?",
						"thai": "นักรบในตำนาน?",
						"hindi": "एक महान योद्धा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "그래. 하지만 지금은… 그저 상인일 뿐.",
						"english": "Yes. But now… just a merchant.",
						"japanese": "ああ。だが今は…ただの商人だ。",
						"chinese": "是的。但现在…只是个商人而已。",
						"french": "Oui. Mais maintenant… juste un marchand.",
						"spanish": "Sí. Pero ahora… solo un mercader.",
						"vietnamese": "Đúng vậy. Nhưng giờ… chỉ là một thương nhân thôi.",
						"thai": "ใช่ แต่ตอนนี้…ก็แค่พ่อค้าคนหนึ่งเท่านั้น",
						"hindi": "हाँ। पर अब… बस एक व्यापारी।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왠지 섬뜩해.",
						"english": "Gives me the creeps.",
						"japanese": "なんだか不気味だ。",
						"chinese": "总觉得毛骨悚然。",
						"french": "Ça me donne des frissons.",
						"spanish": "Me da escalofríos.",
						"vietnamese": "Sao mà rợn người thế.",
						"thai": "รู้สึกน่าขนลุกยังไงไม่รู้",
						"hindi": "कुछ अजीब सा डर लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "저 얼음 결정들… 자세히 보면 시럽처럼 끈적이는 부분이 보여.",
						"english": "Those ice crystals… if you look closely, you can see sticky parts, like syrup.",
						"japanese": "あの氷の結晶…よく見ると、シロップみたいに粘つく部分が見える。",
						"chinese": "那些冰晶…仔细看，能看到像糖浆一样黏稠的部分。",
						"french": "Ces cristaux de glace… si tu regardes bien, tu peux voir des parties collantes, comme du sirop.",
						"spanish": "Esos cristales de hielo… si los miras de cerca, se ven partes pegajosas, como jarabe.",
						"vietnamese": "Những tinh thể băng đó… nhìn kỹ sẽ thấy những phần dính nhớp, như siro vậy.",
						"thai": "ผลึกน้ำแข็งพวกนั้น…ถ้าดูใกล้ๆ จะเห็นส่วนที่เหนียวเหนอะหนะเหมือนน้ำเชื่อมเลย",
						"hindi": "वे बर्फ के क्रिस्टल… अगर तुम ध्यान से देखो, तो सिरप जैसे चिपचिपे हिस्से दिखते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말이네. 마치 뭔가 갇혀있는 것 같아.",
						"english": "You're right. It's as if something is trapped inside.",
						"japanese": "本当だ。まるで何かが閉じ込められているみたいだ。",
						"chinese": "是真的。仿佛有什么东西被困在里面。",
						"french": "C'est vrai. On dirait que quelque chose est piégé à l'intérieur.",
						"spanish": "Tienes razón. Es como si algo estuviera atrapado dentro.",
						"vietnamese": "Thật vậy. Cứ như có thứ gì đó bị mắc kẹt bên trong.",
						"thai": "จริงด้วย เหมือนมีอะไรบางอย่างถูกขังอยู่ข้างใน",
						"hindi": "सही कह रहे हो। ऐसा लग रहा है जैसे कुछ अंदर फँसा हुआ है।"
					}
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "누군가의 기억이, 슬픔이… 얼어붙어 있는 걸지도 몰라.",
						"english": "Perhaps someone's memories, their sorrow… are frozen within.",
						"japanese": "誰かの記憶が、悲しみが…凍りついているのかもしれない。",
						"chinese": "也许是某人的记忆，悲伤…被冰封在了里面。",
						"french": "Peut-être les souvenirs de quelqu'un, sa tristesse… sont-ils gelés à l'intérieur.",
						"spanish": "Quizás los recuerdos de alguien, su tristeza… estén congelados dentro.",
						"vietnamese": "Có lẽ ký ức của ai đó, nỗi buồn của họ… đang bị đóng băng ở đó.",
						"thai": "บางทีความทรงจำของใครบางคน ความเศร้าของพวกเขา…อาจถูกแช่แข็งอยู่ในนั้น",
						"hindi": "शायद किसी की यादें, उनका दुख… अंदर जमे हुए हों।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하랄드르가 왜 이런 걸 파는 거지?",
						"english": "Why is Haraldr selling things like this?",
						"japanese": "ハラルドルはなんでこんなものを売っているんだ？",
						"chinese": "哈拉尔德为什么要卖这种东西？",
						"french": "Pourquoi Haraldr vend-il ce genre de choses ?",
						"spanish": "¿Por qué Haraldr vende cosas así?",
						"vietnamese": "Tại sao Haraldr lại bán những thứ như thế này?",
						"thai": "ทำไมฮาราล์ดร์ถึงขายของแบบนี้ล่ะ?",
						"hindi": "हरलद्र ऐसी चीजें क्यों बेच रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그의 광기 어린 집착을 보지 못했나? '최고의 전리품'이라고 말할 때마다 섬뜩해.",
						"english": "Haven't you seen his mad obsession? Every time he says 'the finest spoils,' it's chilling.",
						"japanese": "彼の狂気じみた執着を見なかったのか？ '最高の戦利品'と言うたびにゾッとする。",
						"chinese": "你没看到他那疯狂的执着吗？每次他说‘最棒的战利品’时，都让人毛骨悚然。",
						"french": "N'as-tu pas vu son obsession folle ? Chaque fois qu'il dit 'le plus beau butin', c'est glaçant.",
						"spanish": "¿No has visto su obsesión demencial? Cada vez que dice 'los mejores despojos', es escalofriante.",
						"vietnamese": "Cậu không thấy sự ám ảnh điên cuồng của hắn sao? Mỗi lần hắn nói 'chiến lợi phẩm tuyệt vời nhất', tôi lại thấy rợn người.",
						"thai": "นายไม่เห็นความหมกมุ่นคลุ้มคลั่งของเขาหรือไง? ทุกครั้งที่เขาพูดว่า 'ของรางวัลที่ดีที่สุด' มันน่าขนลุกนะ",
						"hindi": "क्या तुमने उसका पागलपन भरा जुनून नहीं देखा? हर बार जब वह 'सबसे बेहतरीन लूट' कहता है, तो रोंगटे खड़े हो जाते हैं।"
					},
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "광기…?",
						"english": "Madness…?",
						"japanese": "狂気…？",
						"chinese": "疯狂…？",
						"french": "Folie…?",
						"spanish": "¿Locura…?",
						"vietnamese": "Điên cuồng…?",
						"thai": "ความคลุ้มคลั่ง…?",
						"hindi": "पागलपन…?"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "하랄드르의 '전리품'을 자세히 살펴보니… 얼음 속에서 희미하게 고대 룬 문양이 비쳐 보여.",
						"english": "Upon closer inspection of Haraldr's 'spoils'... faint ancient runic patterns shimmer through the ice.",
						"japanese": "ハラルドルが言う『戦利品』を詳しく調べてみると…氷の中からかすかに古代のルーン文字の模様が透けて見えた。",
						"chinese": "仔细检查哈拉尔德的‘战利品’…冰中隐约透出古老的符文图案。",
						"french": "En y regardant de plus près les 'butins' d'Haraldr… de faibles motifs runiques anciens transparaissent à travers la glace.",
						"spanish": "Al examinar de cerca los 'despojos' de Haraldr… tenues patrones rúnicos antiguos brillan a través del hielo.",
						"vietnamese": "Kiểm tra kỹ lưỡng 'chiến lợi phẩm' của Haraldr… những hoa văn rune cổ đại mờ nhạt xuyên qua lớp băng.",
						"thai": "เมื่อตรวจสอบ 'ของรางวัล' ของฮาราล์ดร์อย่างใกล้ชิด…พบว่ามีลวดลายอักษรรูนโบราณเลือนรางส่องประกายผ่านน้ำแข็งออกมา",
						"hindi": "हरलद्र की 'लूट' का करीब से निरीक्षण करने पर… बर्फ के अंदर से प्राचीन रनिक पैटर्न हल्के से चमकते हुए दिखाई दिए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "룬 문양? 그런 건 처음 봐.",
						"english": "Rune patterns? I've never seen anything like them.",
						"japanese": "ルーン模様？初めて見るわ。",
						"chinese": "符文图案？我从未见过这种东西。",
						"french": "Des motifs runiques ? Je n'ai jamais vu ça.",
						"spanish": "¿Patrones rúnicos? Nunca había visto algo así.",
						"vietnamese": "Hoa văn rune? Tôi chưa từng thấy cái này bao giờ.",
						"thai": "ลวดลายรูน? ฉันไม่เคยเห็นอะไรแบบนี้มาก่อนเลย",
						"hindi": "रून के निशान? मैंने ऐसा कुछ पहले कभी नहीं देखा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "오래된 전설에 따르면, 룬 문양은 강한 영혼이나 저주를 봉인할 때 사용되었다고 해.",
						"english": "According to ancient legends, rune patterns were used to seal powerful spirits or curses.",
						"japanese": "古い伝説によれば、ルーン模様は強大な魂や呪いを封印する際に使われたらしいわ。",
						"chinese": "根据古老传说，符文图案曾被用来封印强大的灵魂或诅咒。",
						"french": "Selon d'anciennes légendes, les motifs runiques servaient à sceller de puissants esprits ou des malédictions.",
						"spanish": "Según antiguas leyendas, los patrones rúnicos se usaban para sellar espíritus poderosos o maldiciones.",
						"vietnamese": "Theo truyền thuyết cổ xưa, hoa văn rune được dùng để phong ấn linh hồn mạnh mẽ hoặc lời nguyền.",
						"thai": "ตามตำนานเก่าแก่ ลวดลายรูนถูกใช้เพื่อผนึกวิญญาณอันทรงพลังหรือคำสาป",
						"hindi": "पुरानी कहानियों के अनुसार, रून के निशानों का उपयोग शक्तिशाली आत्माओं या शापों को सील करने के लिए किया जाता था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "설마… 저 얼음 안에 뭐가 봉인되어 있다는 거야?",
						"english": "Don't tell me... something's sealed inside that ice?",
						"japanese": "まさか…あの氷の中に何かが封印されているっていうの？",
						"chinese": "不会吧……那冰里面封印着什么东西吗？",
						"french": "Ne me dis pas que... quelque chose est scellé dans cette glace ?",
						"spanish": "No me digas... ¿hay algo sellado dentro de ese hielo?",
						"vietnamese": "Đừng nói là... có gì đó bị phong ấn trong tảng băng đó chứ?",
						"thai": "อย่าบอกนะ...ว่ามีบางสิ่งถูกผนึกอยู่ข้างในน้ำแข็งนั่น?",
						"hindi": "कहीं ऐसा तो नहीं... उस बर्फ़ के अंदर कुछ सील किया हुआ है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모르지. 하지만 하랄드르가 그 얼음에 집착하는 이유는 분명해 보여.",
						"english": "I don't know. But it's clear why Haraldr is so obsessed with that ice.",
						"japanese": "分からないわ。でも、ハラルドルがあの氷に執着する理由ははっきりしているようね。",
						"chinese": "不知道。但哈拉尔德对那块冰如此痴迷的原因似乎很明显。",
						"french": "Je ne sais pas. Mais il est clair pourquoi Haraldr est si obsédé par cette glace.",
						"spanish": "No lo sé. Pero está claro por qué Haraldr está tan obsesionado con ese hielo.",
						"vietnamese": "Tôi không biết. Nhưng rõ ràng Haraldr ám ảnh với tảng băng đó có lý do.",
						"thai": "ฉันไม่รู้สิ แต่เหตุผลที่ Haraldr หมกมุ่นอยู่กับน้ำแข็งนั่นดูเหมือนจะชัดเจน",
						"hindi": "मुझे नहीं पता। लेकिन यह साफ़ है कि हैराल्ड्र उस बर्फ़ के प्रति इतने जुनूनी क्यों हैं।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 의심스러워.",
						"english": "It's getting more and more suspicious.",
						"japanese": "だんだん怪しくなってきたわ。",
						"chinese": "这越来越可疑了。",
						"french": "C'est de plus en plus suspect.",
						"spanish": "Cada vez es más sospechoso.",
						"vietnamese": "Càng ngày càng đáng ngờ.",
						"thai": "มันชักจะน่าสงสัยขึ้นเรื่อยๆ แล้วสิ",
						"hindi": "यह और भी ज़्यादा संदिग्ध होता जा रहा है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bran",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "여긴… 얼어붙은 기억의 파편들이 가장 강하게 느껴지는 곳이야.",
						"english": "This is... where the frozen fragments of memory feel strongest.",
						"japanese": "ここは…凍てついた記憶の破片が最も強く感じられる場所ね。",
						"chinese": "这里……是冻结的记忆碎片感触最强烈的地方。",
						"french": "C'est ici... que les fragments de mémoire gelés se font le plus sentir.",
						"spanish": "Aquí es... donde los fragmentos de memoria congelados se sienten con más fuerza.",
						"vietnamese": "Đây là... nơi cảm nhận mạnh mẽ nhất những mảnh ký ức đóng băng.",
						"thai": "ที่นี่...คือที่ที่เศษเสี้ยวความทรงจำที่แข็งตัวสัมผัสได้ชัดเจนที่สุด",
						"hindi": "यह वो जगह है... जहाँ जमी हुई यादों के टुकड़े सबसे ज़्यादा महसूस होते हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "으스스해. 마치 누군가의 슬픔이 직접 느껴지는 것 같아.",
						"english": "It's eerie. It feels as if someone's sorrow is palpable here.",
						"japanese": "不気味ね。まるで誰かの悲しみが直接伝わってくるようだわ。",
						"chinese": "毛骨悚然。就好像能直接感受到某人的悲伤一样。",
						"french": "C'est étrange. On dirait que la tristesse de quelqu'un est palpable ici.",
						"spanish": "Es espeluznante. Como si la tristeza de alguien se sintiera directamente.",
						"vietnamese": "Thật rợn người. Cứ như thể nỗi buồn của ai đó đang trực tiếp lan tỏa.",
						"thai": "มันช่างน่าขนลุก ราวกับว่าความเศร้าของใครบางคนกำลังสัมผัสได้โดยตรง",
						"hindi": "यह डरावना है। ऐसा लगता है जैसे किसी का दुख सीधे महसूस हो रहा हो।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하랄드르는… 무언가를 잊고 싶거나, 혹은 영원히 간직하고 싶어 하는 걸지도 몰라.",
						"english": "Haraldr... might want to forget something, or perhaps cherish it forever.",
						"japanese": "ハラルドルは…何かを忘れたいのか、あるいは永遠に大切にしたいと思っているのかもしれないわね。",
						"chinese": "哈拉尔德……也许是想忘记什么，又或是想永远珍藏什么。",
						"french": "Haraldr... pourrait vouloir oublier quelque chose, ou peut-être le chérir pour toujours.",
						"spanish": "Haraldr... quizás quiera olvidar algo, o tal vez conservarlo para siempre.",
						"vietnamese": "Haraldr... có thể muốn quên đi điều gì đó, hoặc có lẽ muốn giữ nó mãi mãi.",
						"thai": "Haraldr... อาจจะอยากลืมบางสิ่ง หรือไม่ก็อยากจะเก็บรักษามันไว้ตลอดไป",
						"hindi": "हैराल्ड्र... शायद कुछ भूलना चाहते हैं, या शायद उसे हमेशा के लिए संजोना चाहते हैं।"
					},
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "그의 뿔피리 소리가… 가끔씩 슬프게 들려오는 것 같지 않아?",
						"english": "Doesn't his horn's sound... sometimes seem to carry a hint of sadness?",
						"japanese": "彼の角笛の音が…時々、悲しげに聞こえると思わない？",
						"chinese": "他的号角声……你不觉得偶尔听起来很悲伤吗？",
						"french": "Le son de sa corne... ne semble-t-il pas parfois triste ?",
						"spanish": "¿El sonido de su cuerno... no parece a veces triste?",
						"vietnamese": "Tiếng tù và của anh ấy... thỉnh thoảng nghe thật buồn, phải không?",
						"thai": "เสียงแตรของเขา...บางครั้งมันก็ฟังดูเศร้าๆ ไม่ใช่เหรอ?",
						"hindi": "उनकी सींग की आवाज़... क्या कभी-कभी उदास नहीं लगती?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그 뿔피리… 단순한 장식품이 아닐 거야.",
						"english": "That horn... it's not just a simple ornament.",
						"japanese": "あの角笛…ただの飾り物じゃないはずよ。",
						"chinese": "那个号角……它不会只是个简单的装饰品。",
						"french": "Cette corne... ce n'est pas qu'un simple ornement.",
						"spanish": "Ese cuerno... no debe ser un simple adorno.",
						"vietnamese": "Cái tù và đó... nó không phải là một vật trang trí đơn thuần đâu.",
						"thai": "แตรนั่น...มันคงไม่ใช่แค่เครื่องประดับธรรมดา",
						"hindi": "वो सींग... वो सिर्फ़ एक साधारण आभूषण नहीं होगी।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없을 것 같아. 이 미스터리를 풀기 전까진.",
						"english": "I can't go back. Not until this mystery is solved.",
						"japanese": "戻れない…この謎を解き明かすまでは。",
						"chinese": "我不能回去。除非解开这个谜团。",
						"french": "Je ne peux pas rentrer. Pas avant d'avoir résolu ce mystère.",
						"spanish": "No puedo volver. No hasta que resuelva este misterio.",
						"vietnamese": "Ta không thể quay về. Trừ khi giải mã được bí ẩn này.",
						"thai": "ฉันกลับไปไม่ได้ จนกว่าจะไขปริศนานี้ได้",
						"hindi": "मैं वापस नहीं जा सकता। जब तक यह रहस्य सुलझ नहीं जाता।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 덩어리가 흔들리더니, 정체 모를 그림자가 모습을 드러냈다.",
						"english": "The massive ice block trembled, revealing an unknown shadow.",
						"japanese": "巨大な氷塊が揺らめき、正体不明の影が姿を現した。",
						"chinese": "巨大的冰块颤动着，一个不明的影子显现出来。",
						"french": "L'énorme bloc de glace trembla, révélant une ombre inconnue.",
						"spanish": "El enorme bloque de hielo tembló, revelando una sombra desconocida.",
						"vietnamese": "Khối băng khổng lồ rung chuyển, một cái bóng không rõ danh tính xuất hiện.",
						"thai": "ก้อนน้ำแข็งมหึมาสั่นสะเทือน เงามืดนิรนามปรากฏตัวขึ้น",
						"hindi": "विशाल बर्फ का टुकड़ा कांप उठा, और एक अज्ञात छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하랄드르의 기억은… 누구도 건드릴 수 없다.",
						"english": "Haraldr's memories... no one can touch them.",
						"japanese": "ハラルドルの記憶は…誰にも触れさせない。",
						"chinese": "哈拉尔德的记忆…无人能触碰。",
						"french": "Les souvenirs d'Haraldr... personne ne peut y toucher.",
						"spanish": "Los recuerdos de Haraldr... nadie puede tocarlos.",
						"vietnamese": "Ký ức của Haraldr... không ai được chạm vào.",
						"thai": "ความทรงจำของฮาราลเดอร์... ไม่มีใครแตะต้องได้",
						"hindi": "हरल्ड्र की यादें... कोई उन्हें छू नहीं सकता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 이 모든 걸 지키고 있는 거야?",
						"english": "Are you protecting all of this?",
						"japanese": "お前がこれを全て守っているのか？",
						"chinese": "你在守护这一切吗？",
						"french": "C'est toi qui protèges tout ça ?",
						"spanish": "¿Estás protegiendo todo esto?",
						"vietnamese": "Ngươi đang bảo vệ tất cả những thứ này sao?",
						"thai": "เจ้ากำลังปกป้องทั้งหมดนี่อยู่หรือ?",
						"hindi": "क्या तुम इन सबकी रक्षा कर रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…침입자들. 얼음 속에서 영원히 잠들어라.",
						"english": "...Intruders. Sleep forever in the ice.",
						"japanese": "…侵入者たちよ。氷の中で永遠に眠れ。",
						"chinese": "……入侵者。永远沉睡在冰中吧。",
						"french": "...Intrus. Dormez pour toujours dans la glace.",
						"spanish": "...Intrusos. Dormid para siempre en el hielo.",
						"vietnamese": "...Những kẻ xâm nhập. Hãy ngủ vùi vĩnh viễn trong băng giá.",
						"thai": "...ผู้บุกรุก จงหลับใหลชั่วนิรันดร์ในน้ำแข็ง",
						"hindi": "...घुसपैठिए। बर्फ में हमेशा के लिए सो जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "bran",
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심해. 저건… 하랄드르의 얼어붙은 광기 그 자체야.",
						"english": "Be careful. That's... Haraldr's frozen madness itself.",
						"japanese": "気をつけろ。あれは…ハラルドルの凍てついた狂気そのものだ。",
						"chinese": "小心。那正是……哈拉尔德冻结的疯狂。",
						"french": "Fais attention. C'est... la folie gelée d'Haraldr elle-même.",
						"spanish": "Ten cuidado. Eso es... la locura helada de Haraldr en sí misma.",
						"vietnamese": "Cẩn thận. Đó là... chính sự điên loạn đóng băng của Haraldr.",
						"thai": "ระวังให้ดี นั่นคือ... ความบ้าคลั่งที่แข็งตัวของฮาราลเดอร์เอง",
						"hindi": "सावधान। वह... हरल्ड्र का जमा हुआ पागलपन है।"
					},
					"speaker": "bran"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "bran",
					"direction": "down",
					"type": "direction"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음의 파편들이 탐험대를 집어삼켰다.",
						"english": "Ice shards engulfed the expedition.",
						"japanese": "氷の破片が探検隊を飲み込んだ。",
						"chinese": "冰晶碎片吞噬了探险队。",
						"french": "Les éclats de glace ont englouti l'expédition.",
						"spanish": "Los fragmentos de hielo engulleron a la expedición.",
						"vietnamese": "Những mảnh băng đã nuốt chửng đoàn thám hiểm.",
						"thai": "เศษน้ำแข็งกลืนกินคณะสำรวจ",
						"hindi": "बर्फ के टुकड़ों ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들… 하랄드르의 고통을 알지 못한다.",
						"english": "Insignificant fools... they know not Haraldr's pain.",
						"japanese": "取るに足らぬ者ども… ハラルドルの苦痛を知らぬとは。",
						"chinese": "渺小之辈……岂知哈拉尔德之苦痛。",
						"french": "Créatures insignifiantes... elles ignorent la souffrance d'Haraldr.",
						"spanish": "Insignificantes criaturas... no conocen el dolor de Haraldr.",
						"vietnamese": "Những kẻ nhỏ bé... chúng không biết nỗi đau của Haraldr.",
						"thai": "พวกไร้ค่า... ไม่รู้จักความเจ็บปวดของฮาราลดร์",
						"hindi": "तुच्छ प्राणी... वे हारल्ड्र के दर्द को नहीं जानते।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직 끝나지 않았어. 반드시 진실을 밝혀낼 거야.",
						"english": "It's not over yet. I will uncover the truth.",
						"japanese": "まだ終わってない。必ず真実を突き止める。",
						"chinese": "尚未结束。我必揭示真相。",
						"french": "Ce n'est pas encore fini. Je découvrirai la vérité.",
						"spanish": "Aún no ha terminado. Desvelaré la verdad.",
						"vietnamese": "Chưa kết thúc đâu. Ta nhất định sẽ khám phá ra sự thật.",
						"thai": "ยังไม่จบ ฉันจะเปิดเผยความจริงให้ได้",
						"hindi": "अभी खत्म नहीं हुआ है। मैं सच्चाई का पता लगाऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐흐… 다시 와라. 그때도, 너희는 아무것도 얻지 못할 테니.",
						"english": "Heh heh... Come again. You'll gain nothing then either.",
						"japanese": "フフ… また来るがいい。その時も、お前たちは何も得られぬだろうがな。",
						"chinese": "呵呵……再来吧。届时，你们也一无所获。",
						"french": "Hé hé... Revenez. Vous n'y gagnerez rien non plus.",
						"spanish": "Je je... Volved. Tampoco entonces obtendréis nada.",
						"vietnamese": "Hê hê... Cứ quay lại đi. Khi đó, các ngươi cũng sẽ chẳng đạt được gì.",
						"thai": "ฮิฮิ... กลับมาอีกสิ ครั้งนั้นพวกเจ้าก็ไม่ได้อะไรเลย",
						"hindi": "हे हे... फिर आओ। तब भी तुम्हें कुछ कुछ नहीं मिलेगा।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스가 산산조각 나며, 달콤한 시럽 향이 더욱 진하게 풍겼다.",
						"english": "The unknown boss shattered, and the sweet scent of syrup grew stronger.",
						"japanese": "正体不明のボスが粉々に砕け散り、甘いシロップの香りが一層強く漂った。",
						"chinese": "不明身份的Boss支离破碎，甜美的糖浆香气愈发浓郁。",
						"french": "Le boss inconnu se brisa en morceaux, et le doux parfum de sirop devint plus intense.",
						"spanish": "El jefe desconocido se hizo añicos, y el dulce aroma a jarabe se intensificó.",
						"vietnamese": "Con boss không rõ danh tính vỡ tan tành, mùi siro ngọt ngào càng thêm nồng nặc.",
						"thai": "บอสนิรนามแตกเป็นเสี่ยงๆ กลิ่นน้ำเชื่อมหวานหอมยิ่งโชยแรงขึ้น",
						"hindi": "अज्ञात बॉस टूट कर बिखर गया, और मीठे सिरप की गंध और तेज हो गई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하랄드르… 그가… 영원히… 기억될… 것이다…",
						"english": "Haraldr... he will... be remembered... forever...",
						"japanese": "ハラルドル…彼が…永遠に…記憶される…だろう…",
						"chinese": "哈拉尔德……他将……永远……被铭记……",
						"french": "Haraldr... il sera... souvenu... pour toujours...",
						"spanish": "Haraldr... él será... recordado... para siempre...",
						"vietnamese": "Haraldr... anh ấy... sẽ... được nhớ... mãi mãi...",
						"thai": "ฮาราลเดอร์... เขาจะ... ถูกจดจำ... ตลอดไป...",
						"hindi": "हरल्ड्र... उसे... हमेशा... याद... रखा जाएगा..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하랄드르의 기억… 무엇 때문에 이렇게까지 하는 거지?",
						"english": "Haraldr's memories... what's causing all this?",
						"japanese": "ハラルドルの記憶…何のためにここまで？",
						"chinese": "哈拉尔德的记忆……这一切是为了什么？",
						"french": "Les souvenirs d'Haraldr... qu'est-ce qui cause tout ça ?",
						"spanish": "Los recuerdos de Haraldr... ¿qué está causando todo esto?",
						"vietnamese": "Ký ức của Haraldr... vì điều gì mà phải đến mức này?",
						"thai": "ความทรงจำของฮาราลเดอร์... ทำไมถึงทำถึงขนาดนี้?",
						"hindi": "हरल्ड्र की यादें... यह सब किस लिए हो रहा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 의혹은 더욱 깊어졌다. 하랄드르의 진실은… 얼어붙은 설원 깊은 곳에 숨겨져 있었다.",
						"english": "We won, but the doubts only deepened. Haraldr's truth... was hidden deep within the frozen wasteland.",
						"japanese": "勝利したが、疑惑はさらに深まった。ハラルドルの真実は…凍てつく雪原の奥深くに隠されていた。",
						"chinese": "虽胜，疑虑却更深。哈拉尔德的真相……隐藏在冰封雪原的深处。",
						"french": "Nous avons gagné, mais les doutes se sont approfondis. La vérité d'Haraldr... était cachée au plus profond du désert gelé.",
						"spanish": "Ganamos, pero las dudas solo se profundizaron. La verdad de Haraldr... estaba oculta en lo profundo del páramo helado.",
						"vietnamese": "Chúng ta đã thắng, nhưng nghi ngờ càng thêm sâu sắc. Sự thật về Haraldr... bị ẩn giấu sâu trong vùng đất hoang băng giá.",
						"thai": "เราชนะแล้ว แต่ความสงสัยยิ่งเพิ่มพูน ความจริงของฮาราลเดอร์... ถูกซ่อนอยู่ในส่วนลึกของทุ่งน้ำแข็ง",
						"hindi": "हम जीत गए, लेकिन संदेह और गहरे हो गए। हरल्ड्र का सच... जमी हुई बंजर भूमि में गहराई में छिपा था।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"하랄드르의 '전리품'… 그 속에 숨겨진 것은 무엇인가?",
			"달콤한 얼음 결정들, 그 끈적임은 과거의 비명처럼 들렸다.",
			"브란은 속삭였다. '그가, 한때 전설이었다고…'",
			"설원의 미스터리, 얼어붙은 기억의 조각들이 깨어나기 시작한다.",
			"의심은 깊어지고, 공포는 서서히 다가왔다."
		],
		"english": [
			"Haraldr's 'trophies'... what secrets do they hold?",
			"Sweet ice crystals, their stickiness echoed past screams.",
			"Bran whispered, 'He was once a legend...'",
			"The mystery of the snowfield, frozen fragments of memory begin to awaken.",
			"Doubt deepened, and fear slowly approached."
		],
		"japanese": [
			"ハラルドルの「戦利品」…その中に隠されたものとは？",
			"甘い氷の結晶、その粘りは過去の悲鳴のように聞こえた。",
			"ブランはささやいた。「彼は、かつて伝説だったと…」",
			"雪原のミステリー、凍てついた記憶の断片が目覚め始める。",
			"疑念は深まり、恐怖はゆっくりと近づいてきた。"
		],
		"chinese": [
			"哈拉尔德的“战利品”……其中隐藏着什么？",
			"甜美的冰晶，那黏腻感听起来像过去的尖叫声。",
			"布兰低语道：“他，曾是一位传奇……”",
			"雪原的谜团，冰封的记忆碎片开始苏醒。",
			"疑虑加深，恐惧悄然逼近。"
		],
		"french": [
			"Les « trophées » de Haraldr… Que recèlent-ils ?",
			"De doux cristaux de glace, leur viscosité semblait faire écho à des cris passés.",
			"Bran murmura : « Il fut, autrefois, une légende… »",
			"Le mystère de la toundra enneigée, des fragments de mémoire gelés commencent à s'éveiller.",
			"Le doute s'épaissit, et la peur approcha lentement."
		],
		"spanish": [
			"Los 'trofeos' de Haraldr... ¿Qué se esconde en ellos?",
			"Dulces cristales de hielo, su pegajosidad resonaba como gritos del pasado.",
			"Bran susurró: 'Él, una vez, fue una leyenda...'",
			"El misterio del campo nevado, fragmentos congelados de la memoria comienzan a despertar.",
			"La duda se profundizó, y el miedo se acercó lentamente."
		],
		"vietnamese": [
			"'Chiến lợi phẩm' của Haraldr... Điều gì ẩn giấu bên trong?",
			"Những tinh thể băng ngọt ngào, sự dính bám của chúng như tiếng thét của quá khứ.",
			"Bran thì thầm. 'Hắn, từng là một huyền thoại...'",
			"Bí ẩn của tuyết nguyên, những mảnh ký ức đóng băng bắt đầu thức tỉnh.",
			"Nghi ngờ chồng chất, và nỗi sợ hãi dần ập đến."
		],
		"thai": [
			"'ของรางวัล' ของฮาราลเดอร์... มีอะไรซ่อนอยู่ในนั้น?",
			"ผลึกน้ำแข็งหอมหวาน ความเหนียวหนืดของมันราวกับเสียงกรีดร้องจากอดีต",
			"แบรนกระซิบว่า 'เขาเคยเป็นตำนาน...'",
			"ปริศนาแห่งทุ่งหิมะ เศษเสี้ยวความทรงจำที่แข็งตัวเริ่มตื่นขึ้น",
			"ความสงสัยทวีความรุนแรงขึ้น และความกลัวก็คืบคลานเข้ามาอย่างช้าๆ"
		],
		"hindi": [
			"हेराल्ड्र की 'लूट'... उसके भीतर क्या छिपा है?",
			"मीठे बर्फीले क्रिस्टल, उनकी चिपचिपाहट अतीत की चीखों जैसी लग रही थी।",
			"ब्रैन ने फुसफुसाया, 'वह, कभी एक किंवदंती था...'",
			"बर्फीले मैदान का रहस्य, जमी हुई यादों के टुकड़े जागने लगे हैं।",
			"संदेह गहराता गया, और डर धीरे-धीरे पास आता गया।"
		]
	}
} as const;
