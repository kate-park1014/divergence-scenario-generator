export const scenario_snowy_archduke_finn_aftermath_04 = {
	"scenario_id": "snowy_archduke_finn_aftermath_04",
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "설산 깊은 곳, 얼음 광맥이 희미하게 빛났다. 소유자는 없었다.",
						"english": "Deep within the snow mountain, an ice vein faintly glowed. It had no owner.",
						"japanese": "雪山の奥深く、氷の鉱脈がかすかに輝いていた。持ち主はいなかった。",
						"chinese": "雪山深处，冰矿脉发出微弱的光芒。它没有主人。",
						"french": "Au plus profond de la montagne enneigée, une veine de glace brillait faiblement. Elle n'avait pas de propriétaire.",
						"spanish": "En lo profundo de la montaña nevada, una veta de hielo brillaba débilmente. No tenía dueño.",
						"vietnamese": "Sâu trong núi tuyết, một mạch băng giá phát sáng mờ ảo. Không có chủ nhân.",
						"thai": "ลึกเข้าไปในภูเขาหิมะ สายแร่แข็งเรืองแสงจางๆ ไม่มีเจ้าของ",
						"hindi": "हिमपर्वत की गहराई में, एक बर्फीली शिरा हल्की चमक रही थी। उसका कोई मालिक नहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이런 곳에 광물이 있었네.",
						"english": "Minerals were here, of all places.",
						"japanese": "こんな場所に鉱物があったとは。",
						"chinese": "没想到这种地方竟然有矿物。",
						"french": "Des minerais, ici, de tous les endroits.",
						"spanish": "Minerales aquí, de todos los lugares.",
						"vietnamese": "Thật không ngờ lại có khoáng vật ở đây.",
						"thai": "มีแร่ธาตุอยู่ในที่แบบนี้ด้วยนะ",
						"hindi": "इस जगह पर भी खनिज थे।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이 귀한 걸… 아무나 갖게 할 순 없지.",
						"english": "Such a valuable thing... I can't let just anyone have it.",
						"japanese": "こんな貴重なもの…誰にでも持たせるわけにはいかないな。",
						"chinese": "如此珍贵之物……不能让任何人得到。",
						"french": "Une chose si précieuse... Je ne peux pas laisser n'importe qui l'avoir.",
						"spanish": "Algo tan valioso... No puedo dejar que cualquiera lo tenga.",
						"vietnamese": "Thứ quý giá này... không thể để ai cũng có được.",
						"thai": "ของมีค่าเช่นนี้... จะให้ใครก็ได้ไม่ได้หรอก",
						"hindi": "इतनी कीमती चीज़... मैं किसी को भी इसे पाने नहीं दे सकता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은 누구야?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "아눅. 이 설산의 모든 것을 사고파는 상인이지.",
						"english": "Anouk. The merchant who buys and sells everything in this snow mountain.",
						"japanese": "アヌークだ。この雪山の全てを売買する商人さ。",
						"chinese": "阿努克。我是买卖这座雪山一切的商人。",
						"french": "Anouk. Le marchand qui achète et vend tout dans cette montagne enneigée.",
						"spanish": "Anouk. El mercader que compra y vende todo en esta montaña nevada.",
						"vietnamese": "Anouk. Kẻ buôn bán mọi thứ trên núi tuyết này.",
						"thai": "อานุก พ่อค้าที่ซื้อขายทุกสิ่งในภูเขาหิมะแห่งนี้",
						"hindi": "अनूक। इस हिमपर्वत की हर चीज़ खरीदने और बेचने वाला व्यापारी।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "특히, 특별한 마법이 깃든 건 더 비싸게 팔려.",
						"english": "Especially, those imbued with special magic sell for a higher price.",
						"japanese": "特に、特別な魔法が宿るものはもっと高く売れる。",
						"chinese": "尤其是，蕴含特殊魔法的物品，能卖出更高的价格。",
						"french": "Surtout, ceux imprégnés d'une magie spéciale se vendent plus cher.",
						"spanish": "Especialmente, aquellos imbuidos con magia especial se venden a un precio más alto.",
						"vietnamese": "Đặc biệt, những thứ chứa ma thuật đặc biệt còn bán được giá cao hơn.",
						"thai": "โดยเฉพาะสิ่งของที่เปี่ยมด้วยเวทมนตร์พิเศษ ยิ่งขายได้ราคาสูง",
						"hindi": "खासकर, जिनमें विशेष जादू होता है, वे ज़्यादा कीमत पर बिकते हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "핀 대공의 얼음 마법… 훌륭하더군.",
						"english": "Grand Duke Finn's ice magic... Impressive.",
						"japanese": "フィン大公の氷魔法…見事なものだ。",
						"chinese": "芬恩大公的冰魔法……真是了不起。",
						"french": "La magie de glace du Grand Duc Finn... impressionnante.",
						"spanish": "La magia de hielo del Gran Duque Finn... impresionante.",
						"vietnamese": "Phép thuật băng của Đại Công tước Finn... thật đáng nể.",
						"thai": "เวทน้ำแข็งของแกรนด์ดยุกฟินน์... น่าประทับใจจริง ๆ",
						"hindi": "ग्रैंड ड्यूक फिन का बर्फीला जादू... प्रभावशाली।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대공은 이제 아니야.",
						"english": "He's no Grand Duke anymore.",
						"japanese": "もう大公ではない。",
						"chinese": "他已不再是大公了。",
						"french": "Il n'est plus Grand Duc.",
						"spanish": "Ya no es Gran Duque.",
						"vietnamese": "Ông ta không còn là Đại Công tước nữa.",
						"thai": "เขาไม่ใช่แกรนด์ดยุกอีกต่อไปแล้ว",
						"hindi": "वह अब ग्रैंड ड्यूक नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "힘은 그대로잖아? 그걸 내게 팔아. 원하는 걸 주지.",
						"english": "The power remains, doesn't it? Sell it to me. I'll give you what you want.",
						"japanese": "力はそのまま残ってるだろう？それを私に売れ。望むものをくれてやる。",
						"chinese": "力量还在，不是吗？把它卖给我。我会给你想要的。",
						"french": "Le pouvoir est toujours là, n'est-ce pas ? Vendez-le-moi. Je vous donnerai ce que vous voulez.",
						"spanish": "El poder sigue ahí, ¿no? Véndemelo. Te daré lo que quieras.",
						"vietnamese": "Sức mạnh vẫn còn, phải không? Bán nó cho tôi. Tôi sẽ cho anh bất cứ thứ gì anh muốn.",
						"thai": "พลังยังคงอยู่ไม่ใช่เหรอ? ขายมันให้ฉันสิ ฉันจะให้สิ่งที่นายต้องการ",
						"hindi": "शक्ति तो अभी भी है, है ना? इसे मुझे बेच दो। मैं तुम्हें तुम्हारी इच्छानुसार सब कुछ दूँगा।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "거래할 생각 없어.",
						"english": "I'm not interested in a deal.",
						"japanese": "取引する気はない。",
						"chinese": "我无意交易。",
						"french": "Je n'ai pas l'intention de négocier.",
						"spanish": "No tengo intención de negociar.",
						"vietnamese": "Tôi không có ý định giao dịch.",
						"thai": "ฉันไม่คิดจะทำข้อตกลง",
						"hindi": "मैं कोई सौदा करने का इच्छुक नहीं हूँ।"
					}
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아깝군. 돈으로 안 되면… 다른 방법도 있지.",
						"english": "A pity. If not with money... there are other ways.",
						"japanese": "惜しいな。金でダメなら…他の方法もある。",
						"chinese": "可惜了。如果钱不行……还有其他办法。",
						"french": "Dommage. Si ce n'est pas par l'argent... il y a d'autres moyens.",
						"spanish": "Qué lástima. Si no es con dinero... hay otras formas.",
						"vietnamese": "Thật đáng tiếc. Nếu tiền không được... thì còn có những cách khác.",
						"thai": "น่าเสียดาย ถ้าไม่ใช่ด้วยเงิน... ก็มีวิธีอื่น",
						"hindi": "अफसोस। अगर पैसे से नहीं... तो और भी तरीके हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "핀을 잘 설득하면 될 일이야. 안 그러면….",
						"english": "All we need to do is persuade Finn. Otherwise...",
						"japanese": "フィンをうまく説得すればいいだけだ。さもなければ…。",
						"chinese": "只要好好说服芬恩就行了。不然的话……",
						"french": "Il suffit de bien persuader Finn. Sinon...",
						"spanish": "Todo lo que tenemos que hacer es persuadir a Finn. Si no...",
						"vietnamese": "Chỉ cần thuyết phục Finn tốt là được. Nếu không thì...",
						"thai": "แค่เกลี้ยกล่อมฟินน์ดีๆ ก็พอแล้ว ไม่อย่างนั้น...",
						"hindi": "बस फिन को अच्छी तरह समझाना होगा। वरना..."
					},
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뭘 어쩌려는 거야?",
						"english": "What are you going to do?",
						"japanese": "何をしようって言うんだ？",
						"chinese": "你想做什么？",
						"french": "Qu'est-ce que tu vas faire ?",
						"spanish": "¿Qué vas a hacer?",
						"vietnamese": "Anh định làm gì?",
						"thai": "นายจะทำอะไร?",
						"hindi": "तुम क्या करने वाले हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "방법은 많아. 핀의 안전, 뭐 그런 거 말이야.",
						"english": "There are many ways. Finn's safety, things like that.",
						"japanese": "方法はいくらでもある。フィンの安全とか、そういうことだ。",
						"chinese": "办法多的是。比如芬恩的安全，诸如此类。",
						"french": "Il y a de nombreuses façons. La sécurité de Finn, des choses comme ça.",
						"spanish": "Hay muchas maneras. La seguridad de Finn, cosas así.",
						"vietnamese": "Có nhiều cách lắm. Sự an toàn của Finn, những thứ như vậy.",
						"thai": "มีหลายวิธีนะ ความปลอดภัยของฟินน์อะไรทำนองนั้นแห*ะ",
						"hindi": "कई तरीके हैं। फिन की सुरक्षा, ऐसी बातें।"
					},
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "강한 얼음 마법이 느껴지는 거대한 얼음 조형물. 미세한 균열이 보였다.",
						"english": "A colossal ice sculpture imbued with powerful ice magic. Fine cracks were visible.",
						"japanese": "強い氷の魔法が感じられる巨大な氷の彫刻。微細な亀裂が見えた。",
						"chinese": "一座蕴含强大冰魔法的巨大冰雕。可以看到细微的裂缝。",
						"french": "Une sculpture de glace colossale imprégnée d'une puissante magie de glace. De fines fissures étaient visibles.",
						"spanish": "Una colosal escultura de hielo imbuida de poderosa magia de hielo. Se veían finas grietas.",
						"vietnamese": "Một tác phẩm điêu khắc băng khổng lồ toát lên ma thuật băng mạnh mẽ. Những vết nứt nhỏ li ti có thể nhìn thấy được.",
						"thai": "ประติมากรรมน้ำแข็งขนาดมหึมาที่สัมผัสได้ถึงเวทมนตร์น้ำแข็งอันแข็งแกร่ง มีรอยร้าวเล็ก ๆ ปรากฏให้เห็น",
						"hindi": "एक विशाल बर्फीली प्रतिमा जिसमें शक्तिशाली बर्फीला जादू महसूस हो रहा था। उसमें महीन दरारें दिख रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저런 작품도… 내 것이 될 수 있다면 좋겠는데.",
						"english": "If only works like that... could be mine.",
						"japanese": "あのような作品も…私のものになればいいのに。",
						"chinese": "如果那样的作品……也能是我的就好了。",
						"french": "Si seulement de telles œuvres... pouvaient être miennes.",
						"spanish": "Si tan solo obras así... pudieran ser mías.",
						"vietnamese": "Nếu những tác phẩm như vậy... cũng có thể là của tôi thì tốt biết mấy.",
						"thai": "ถ้างานแบบนั้น... เป็นของฉันได้ก็คงดี",
						"hindi": "अगर ऐसी रचनाएँ भी... मेरी हो सकतीं तो कितना अच्छा होता।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "탐욕이 끝이 없네.",
						"english": "Greed knows no bounds.",
						"japanese": "強欲は限りないな。",
						"chinese": "贪婪永无止境。",
						"french": "L'avidité n'a pas de limites.",
						"spanish": "La avaricia no tiene fin.",
						"vietnamese": "Lòng tham vô đáy.",
						"thai": "ความโลภไม่มีที่สิ้นสุด",
						"hindi": "लालच की कोई सीमा नहीं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "내가 없는 설산은… 아무것도 할 수 없을걸?",
						"english": "This snowy mountain... what can it do without me?",
						"japanese": "私がいない雪山は…何もできないだろう？",
						"chinese": "没有我的雪山…什么也做不了吧？",
						"french": "Cette montagne enneigée... que peut-elle faire sans moi ?",
						"spanish": "Esta montaña nevada... ¿qué podrá hacer sin mí?",
						"vietnamese": "Ngọn núi tuyết này... liệu có thể làm gì nếu không có ta?",
						"thai": "ภูเขาหิมะแห่งนี้... ไม่มีข้าแล้วจะทำอะไรได้?",
						"hindi": "मेरे बिना यह बर्फीला पहाड़... कुछ नहीं कर पाएगा, है ना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 게 당신 짓이었어?",
						"english": "All this... was your doing?",
						"japanese": "これら全て、お前の仕業だったのか？",
						"chinese": "这一切都是你做的？",
						"french": "Tout ceci... était ton œuvre ?",
						"spanish": "¿Todo esto... fue obra tuya?",
						"vietnamese": "Tất cả là do ngươi gây ra ư?",
						"thai": "ทั้งหมดนี่... เป็นฝีมือเจ้าหรือ?",
						"hindi": "यह सब तुम्हारी करतूत थी?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "뭐, 그렇게 봐도 무방하지. 힘이 없으면 도태될 뿐.",
						"english": "Well, you could say that. Without power, you're merely eliminated.",
						"japanese": "まあ、そう見ても構わない。力無き者は淘汰されるだけだ。",
						"chinese": "呵，那样看也无妨。没有力量，就只能被淘汰。",
						"french": "Eh bien, on peut dire ça. Sans pouvoir, on est simplement éliminé.",
						"spanish": "Bueno, puedes verlo así. Sin poder, solo serás eliminado.",
						"vietnamese": "Hừm, nói vậy cũng không sai. Kẻ yếu thì bị đào thải thôi.",
						"thai": "เอาเถอะ จะคิดอย่างนั้นก็ได้ หากไร้ซึ่งพลังก็มีแต่จะถูกกำจัดไป",
						"hindi": "खैर, तुम ऐसे भी देख सकते हो। शक्तिहीन सिर्फ़ मिटा दिए जाते हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "낡은 고문서 조각. '빙하의 심장' 문양이 아눅의 손에 있었다.",
						"english": "A fragment of an old parchment. The 'Heart of the Glacier' emblem was in Anuk's hand.",
						"japanese": "古い古文書の断片。『氷河の心臓』の紋章がアヌークの手にあった。",
						"chinese": "一张古旧卷轴残片。'冰川之心'的纹章在阿努克手中。",
						"french": "Un fragment d'ancien manuscrit. L'emblème du 'Cœur du Glacier' était entre les mains d'Anuk.",
						"spanish": "Un fragmento de un antiguo manuscrito. El emblema del 'Corazón del Glaciar' estaba en la mano de Anuk.",
						"vietnamese": "Một mảnh cổ thư cũ. Biểu tượng 'Trái tim Băng hà' nằm trong tay Anuk.",
						"thai": "เศษเสี้ยวของเอกสารโบราณตราสัญลักษณ์ 'หัวใจแห่งธารน้ำแข็ง' อยู่ในมือของอนุก",
						"hindi": "एक पुराने प्राचीन दस्तावेज़ का टुकड़ा। 'ग्लेशियर का हृदय' का प्रतीक अनूक के हाथ में था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이것도 내 것이 될 거야. 언젠가는.",
						"english": "This, too, will be mine. Someday.",
						"japanese": "これも私のものとなる。いつか必ず。",
						"chinese": "这也会是我的。终有一天。",
						"french": "Ceci aussi sera mien. Un jour.",
						"spanish": "Esto también será mío. Algún día.",
						"vietnamese": "Cái này cũng sẽ là của ta. Một ngày nào đó.",
						"thai": "สิ่งนี้ก็จะกลายเป็นของข้าเช่นกัน สักวันหนึ่ง",
						"hindi": "यह भी मेरा होगा। किसी दिन।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "헛소리 마!",
						"english": "Enough of your nonsense!",
						"japanese": "戯言を抜かすな！",
						"chinese": "别胡说八道！",
						"french": "Arrête tes sornettes !",
						"spanish": "¡Deja de decir tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "หุบปากซะ!",
						"hindi": "बकवास बंद करो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 먹이가 되어라.",
						"english": "You fools... become my fodder.",
						"japanese": "愚か者め…餌食となるがいい。",
						"chinese": "愚蠢的家伙们…成为我的食粮吧。",
						"french": "Imbéciles... soyez ma proie.",
						"spanish": "¡Necios... convertíos en mi alimento!",
						"vietnamese": "Lũ ngu xuẩn... hãy làm mồi cho ta!",
						"thai": "ไอ้พวกงี่เง่า... จงเป็นเหยื่อของข้าซะ!",
						"hindi": "मूर्खों... मेरे निवाले बनो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 물러설 순 없어!",
						"english": "Blast... I can't retreat!",
						"japanese": "ちくしょう…退くわけにはいかない！",
						"chinese": "可恶…我不能退缩！",
						"french": "Bon sang... Je ne peux pas battre en retraite !",
						"spanish": "¡Joder... no puedo rendirme!",
						"vietnamese": "Khốn kiếp... không thể lùi bước!",
						"thai": "บ้าจริง... ฉันจะถอยไม่ได้!",
						"hindi": "अरे नहीं... मैं पीछे नहीं हट सकता!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "anuk",
					"emotion": "happy",
					"content": {
						"korean": "어때? 내 수하의 힘이. 핀의 힘을 더하면… 후훗.",
						"english": "How's that? The power of my minion. Add Finn's power... Heheheh.",
						"japanese": "どうだ？私の部下の力が。フィンンの力を加えれば…フフフ。",
						"chinese": "如何？我手下的力量。若再添上芬恩的力量…呵呵。",
						"french": "Alors ? Le pouvoir de mes subalternes. Si on y ajoute le pouvoir de Finn... Huhu.",
						"spanish": "¿Qué te parece? El poder de mis secuaces. Si añadimos el poder de Finn... Jeje.",
						"vietnamese": "Sao rồi? Sức mạnh của thuộc hạ ta. Nếu có thêm sức mạnh của Finn... Hahaha.",
						"thai": "เป็นไงล่ะ? พลังของลูกน้องข้า. ถ้าได้พลังของฟินน์มาเพิ่ม... คิกคิก.",
						"hindi": "कैसी लगी? मेरे सेवकों की शक्ति। अगर फिन की शक्ति भी मिल जाए... ही ही।"
					},
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "anuk"
				}
			],
			"win_dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이런… 내 계획이 망가졌잖아!",
						"english": "Ugh... My plan's shattered!",
						"japanese": "ちくしょう…俺の計画が台無しになった！",
						"chinese": "糟了…我的计划泡汤了！",
						"french": "Zut... mon plan est en ruine !",
						"spanish": "¡Vaya... mi plan se ha frustrado!",
						"vietnamese": "Ôi... kế hoạch của ta tiêu tan rồi!",
						"thai": "ให้ตายสิ... แผนของฉันพังไม่เป็นท่าเลย!",
						"hindi": "धत्... मेरी योजना चौपट हो गई!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네 탐욕은 여기까지야.",
						"english": "This is as far as your greed takes you.",
						"japanese": "お前の貪欲はここまでだ。",
						"chinese": "你的贪欲就到此为止吧。",
						"french": "Ton avarice prend fin ici.",
						"spanish": "Hasta aquí llega tu codicia.",
						"vietnamese": "Sự tham lam của ngươi chỉ đến đây thôi.",
						"thai": "ความโลภของแกมีแค่นี้แหละ!",
						"hindi": "तुम्हारी लालच की हद यहीं तक है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"emotion": "base",
					"content": {
						"korean": "크크… 아직 끝나지 않았어. 핀의 힘은… 생각보다 더 커.",
						"english": "Hehe... It's not over yet. Finn's power... is greater than you imagine.",
						"japanese": "クク…まだ終わってない。フィンンの力は…想像以上に強い。",
						"chinese": "呵呵…还没完。芬恩的力量…比想象的更强大。",
						"french": "Hé hé... Ce n'est pas fini. Le pouvoir de Finn... est bien plus grand qu'on ne le croit.",
						"spanish": "Je je... aún no ha acabado. El poder de Finn... es mayor de lo que imaginas.",
						"vietnamese": "Hì hì... chưa hết đâu. Sức mạnh của Finn... lớn hơn ngươi tưởng nhiều.",
						"thai": "คิกคิก... ยังไม่จบแค่นี้หรอก. พลังของฟินน์... ยิ่งใหญ่กว่าที่คิดนะ.",
						"hindi": "हाहा... अभी खत्म नहीं हुआ है। फिन की शक्ति... तुम्हारी कल्पना से भी कहीं ज़्यादा है।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "상인 아눅은 사라졌다. 그러나 그의 그림자는 여전히 설산에 드리워져 있었다.",
						"english": "Anuk the merchant disappeared. Yet his shadow still loomed over the snowy mountains.",
						"japanese": "商人アヌークは消え去った。しかし、彼の影は依然として雪山に覆いかぶさっていた。",
						"chinese": "商人阿努克消失了。但他的阴影依然盘旋在雪山之上。",
						"french": "Le marchand Anouk a disparu. Mais son ombre planait toujours sur la montagne enneigée.",
						"spanish": "El mercader Anuk desapareció. Pero su sombra seguía acechando las montañas nevadas.",
						"vietnamese": "Thương nhân Anuk đã biến mất. Nhưng bóng hình của hắn vẫn phủ khắp những ngọn núi tuyết.",
						"thai": "พ่อค้าอนุกหายตัวไปแล้ว แต่เงาของเขายังคงปกคลุมเทือกเขาหิมะอยู่",
						"hindi": "व्यापारी अनुक अदृश्य हो गया। पर उसकी परछाई अब भी बर्फीले पहाड़ों पर छाई हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "핀을 향한 탐욕은 더욱 커질 것이다. 우리는 아직 시작점에 불과했다.",
						"english": "The greed for Finn will only intensify. We were only at the beginning.",
						"japanese": "フィンへの貪欲はさらに募るだろう。我々はまだ出発点に過ぎなかったのだ。",
						"chinese": "对芬恩的贪欲会愈发强烈。我们才刚刚踏上征途。",
						"french": "La cupidité envers Finn ne fera que s'intensifier. Nous n'étions qu'au début.",
						"spanish": "La codicia por Finn solo aumentará. Apenas estábamos en el punto de partida.",
						"vietnamese": "Sự tham lam đối với Finn sẽ càng ngày càng lớn. Chúng ta mới chỉ ở điểm khởi đầu.",
						"thai": "ความโลภในตัวฟินน์จะยิ่งใหญ่ขึ้นอีก. เราเพิ่งจะเริ่มต้นเท่านั้นเอง.",
						"hindi": "फिन के प्रति लालच और गहरा होगा। हम तो अभी बस शुरुआत में थे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 거슬리게 하지 마. 내 수하가 처리할 거다.",
						"english": "Don't bother me any further. My minion will handle it.",
						"japanese": "これ以上私を煩わせるな。私の手下が始末するだろう。",
						"chinese": "别再碍我的事了。我的手下会解决的。",
						"french": "Ne m'ennuie plus. Mon subalterne s'en occupera.",
						"spanish": "No me molestes más. Mis secuaces se encargarán.",
						"vietnamese": "Đừng làm phiền ta nữa. Kẻ dưới của ta sẽ lo liệu.",
						"thai": "อย่ามารบกวนข้าอีก! ลูกน้องของข้าจะจัดการเอง",
						"hindi": "अब और परेशान मत करो। मेरे गुर्गे इससे निपटेंगे।"
					},
					"emotion": "angry",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크르르… 방해하지 마라.",
						"english": "Grrr... Don't disturb me.",
						"japanese": "グルル…邪魔をするな。",
						"chinese": "嘶…别打扰我。",
						"french": "Grrr... Ne me dérange pas.",
						"spanish": "Grrr... ¡No me molestes!",
						"vietnamese": "Gừ gừ... Đừng làm phiền ta.",
						"thai": "ครืน... อย่าขวางทางข้า",
						"hindi": "गर्र्र... मुझे परेशान मत करो।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 모든 걸 멈추겠어!",
						"english": "I'll put an end to all of this!",
						"japanese": "この全てを止めてみせる！",
						"chinese": "我将阻止这一切！",
						"french": "Je vais arrêter tout ça !",
						"spanish": "¡Voy a detener todo esto!",
						"vietnamese": "Ta sẽ ngăn chặn tất cả những chuyện này!",
						"thai": "ข้าจะหยุดทั้งหมดนี้!",
						"hindi": "मैं यह सब रोक दूंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"direction": "down"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"핀의 마법은 이제 소문이 아니었다.",
			"어둠 속 상인 '아눅'은 그 힘을 노렸다.",
			"설산의 귀한 자원, 얼음 마법이 깃든 광물.",
			"탐욕은 기회를 놓치지 않는다. 핀은 또다시 이용당할 위기에 처했다."
		],
		"english": [
			"Finn's magic was no longer just a rumor.",
			"Anouk, the merchant of shadows, coveted that power.",
			"A precious resource from the snow mountain, minerals imbued with ice magic.",
			"Greed never misses an opportunity. Finn was once again in danger of being exploited."
		],
		"japanese": [
			"フィンの魔法は、もはや噂ではなかった。",
			"闇の商人「アヌーク」はその力を狙っていた。",
			"雪山の貴重な資源、氷の魔法が宿る鉱物。",
			"強欲は機会を逃さない。フィンは再び利用される危機に瀕していた。"
		],
		"chinese": [
			"芬恩的魔法不再是传闻。",
			"黑暗商人“阿努克”觊觎着这份力量。",
			"雪山的珍贵资源，蕴含冰魔法的矿物。",
			"贪婪从不错过机会。芬恩再次面临被利用的危机。"
		],
		"french": [
			"La magie de Finn n'était plus une simple rumeur.",
			"Anouk, la marchande des ombres, convoitait ce pouvoir.",
			"Une ressource précieuse de la montagne enneigée, des minéraux imprégnés de magie de glace.",
			"La cupidité ne manque jamais une occasion. Finn était à nouveau en danger d'être exploité."
		],
		"spanish": [
			"La magia de Finn ya no era solo un rumor.",
			"Anouk, la mercader de las sombras, codiciaba ese poder.",
			"Un recurso precioso de la montaña nevada, minerales imbuidos de magia de hielo.",
			"La codicia nunca pierde una oportunidad. Finn estaba una vez más en peligro de ser explotado."
		],
		"vietnamese": [
			"Phép thuật của Finn không còn là tin đồn nữa.",
			"Anouk, thương nhân bóng đêm, đã thèm muốn sức mạnh đó.",
			"Tài nguyên quý giá của núi tuyết, khoáng vật chứa ma thuật băng giá.",
			"Lòng tham không bỏ lỡ cơ hội nào. Finn lại đứng trước nguy cơ bị lợi dụng."
		],
		"thai": [
			"เวทมนตร์ของฟินน์ไม่ใช่แค่ข่าวลืออีกต่อไป",
			"อานุก พ่อค้าแห่งความมืดมิด ได้จ้องมองพลังนั้น",
			"ทรัพยากรอันล้ำค่าจากภูเขาหิมะ แร่ธาตุที่เปี่ยมด้วยเวทมนตร์น้ำแข็ง",
			"ความโลภไม่เคยพลาดโอกาส ฟินน์ตกอยู่ในอันตรายที่จะถูกใช้ประโยชน์อีกครั้ง"
		],
		"hindi": [
			"फिन का जादू अब सिर्फ अफवाह नहीं था।",
			"अंधेरे का व्यापारी 'अनूक' उस शक्ति पर नज़र गड़ाए हुए था।",
			"हिमपर्वत का एक अनमोल संसाधन, बर्फ के जादू से भरे खनिज।",
			"लालच कभी मौका नहीं चूकता। फिन एक बार फिर इस्तेमाल होने के खतरे में था।"
		]
	}
} as const;
