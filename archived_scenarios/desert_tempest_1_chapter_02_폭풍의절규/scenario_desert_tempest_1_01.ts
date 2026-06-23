export const scenario_desert_tempest_1_01 = {
	"scenario_id": "desert_tempest_1_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"끝없는 모래 폭풍, 모든 것을 집어삼키는 사막.",
			"갑작스러운 재앙, 마을을 덮친 의문의 그림자.",
			"'모래 폭풍의 신'? 그 이름이 불길하게 속삭인다.",
			"잃어버린 평화를 찾아, 이제 폭풍 속으로."
		],
		"english": [
			"Endless sandstorm, a desert devouring all.",
			"Sudden catastrophe, a mysterious shadow engulfing the village.",
			"'God of the Sandstorm'? The name whispers ominously.",
			"To find lost peace, now into the storm."
		],
		"japanese": [
			"終わりなき砂嵐、全てを飲み込む砂漠。",
			"突然の災厄、村を襲う謎の影。",
			"「砂嵐の神」？その名が不吉に囁かれる。",
			"失われた平和を求めて、いざ嵐の中へ。"
		],
		"chinese": [
			"无尽的沙尘暴，吞噬一切的沙漠。",
			"突如其来的灾难，笼罩村庄的神秘阴影。",
			"“沙尘暴之神”？那个名字不祥地低语着。",
			"寻找失去的和平，现在，进入风暴之中。"
		],
		"french": [
			"Tempête de sable sans fin, un désert qui engloutit tout.",
			"Catastrophe soudaine, une ombre mystérieuse enveloppant le village.",
			"« Dieu de la Tempête de Sable » ? Ce nom chuchote de manière sinistre.",
			"À la recherche de la paix perdue, maintenant dans la tempête."
		],
		"spanish": [
			"Tormenta de arena interminable, un desierto que lo devora todo.",
			"Catástrofe repentina, una sombra misteriosa que cubre el pueblo.",
			"¿«Dios de la Tormenta de Arena»? Ese nombre susurra ominosamente.",
			"Para encontrar la paz perdida, ahora hacia la tormenta."
		],
		"vietnamese": [
			"Bão cát vô tận, sa mạc nuốt chửng mọi thứ.",
			"Thảm họa bất ngờ, bóng đen bí ẩn bao trùm làng.",
			"'Thần Bão Cát'? Cái tên thì thầm đầy điềm gở.",
			"Tìm lại bình yên đã mất, giờ đây tiến vào bão tố."
		],
		"thai": [
			"พายุทรายไม่สิ้นสุด ทะเลทรายกลืนกินทุกสิ่ง",
			"ภัยพิบัติกะทันหัน เงาลึกลับปกคลุมหมู่บ้าน",
			"'เทพแห่งพายุทราย'? ชื่อนั้นกระซิบอย่างเป็นลางไม่ดี",
			"เพื่อตามหาสันติสุขที่หายไป บัดนี้มุ่งหน้าสู่พายุ"
		],
		"hindi": [
			"अंतहीन रेत का तूफान, सब कुछ निगलने वाला रेगिस्तान।",
			"अचानक आई आपदा, गांव पर छा गई रहस्यमयी परछाई।",
			"'रेत के तूफान का देवता'? वह नाम अशुभ रूप से फुसफुसाता है।",
			"खोई हुई शांति की तलाश में, अब तूफान में।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사막을 뒤덮은 모래 폭풍. 마을은 공포에 질려 침묵했다.",
						"english": "A sandstorm engulfed the desert. The village fell silent in terror.",
						"japanese": "砂漠を覆う砂嵐。村は恐怖に震え、沈黙した。",
						"chinese": "沙尘暴席卷沙漠。村庄因恐惧而沉默。",
						"french": "Une tempête de sable engloutit le désert. Le village se tut, terrifié.",
						"spanish": "Una tormenta de arena cubrió el desierto. El pueblo enmudeció de terror.",
						"vietnamese": "Bão cát bao trùm sa mạc. Làng chìm vào im lặng trong sợ hãi.",
						"thai": "พายุทรายปกคลุมทะเลทราย หมู่บ้านตกอยู่ในความเงียบงันด้วยความหวาดกลัว",
						"hindi": "रेत के तूफान ने रेगिस्तान को ढक लिया। गांव डर के मारे खामोश हो गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 폭풍… 평범하지 않아.",
						"english": "This storm... it's not normal.",
						"japanese": "この嵐…ただ事ではない。",
						"chinese": "这场风暴……不寻常。",
						"french": "Cette tempête... n'est pas normale.",
						"spanish": "Esta tormenta... no es normal.",
						"vietnamese": "Cơn bão này... không bình thường.",
						"thai": "พายุนี้...ไม่ธรรมดาเลย",
						"hindi": "यह तूफान... सामान्य नहीं है।"
					}
				},
				{
					"content": {
						"korean": "'모래 폭풍의 신'이 노했다는 소문이 파다해요.",
						"english": "Rumor has it the 'God of the Sandstorm' is enraged.",
						"japanese": "「砂嵐の神」が怒っているという噂が広まっている。",
						"chinese": "传闻“沙尘暴之神”发怒了。",
						"french": "La rumeur dit que le « Dieu de la Tempête de Sable » est en colère.",
						"spanish": "Se rumorea que el «Dios de la Tormenta de Arena» está enfurecido.",
						"vietnamese": "Tin đồn 'Thần Bão Cát' đang nổi giận lan truyền khắp nơi.",
						"thai": "มีข่าวลือว่า 'เทพแห่งพายุทราย' ทรงพิโรธ",
						"hindi": "अफवाह है कि 'रेत के तूफान का देवता' क्रोधित है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "쉿. 그런 이름은 함부로 부르는 게 아니지.",
						"english": "Shhh. You shouldn't utter such a name lightly.",
						"japanese": "シッ。そんな名前を軽々しく口にするものじゃない。",
						"chinese": "嘘。那种名字不能随便叫。",
						"french": "Chut. On ne prononce pas un tel nom à la légère.",
						"spanish": "Shhh. No se debe pronunciar ese nombre a la ligera.",
						"vietnamese": "Suỵt. Không nên tùy tiện gọi tên đó.",
						"thai": "ชู่... ไม่ควรเอ่ยชื่อนั้นอย่างไม่ระมัดระวัง",
						"hindi": "श्श्श। ऐसे नाम को हल्के में नहीं लेना चाहिए।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "…좋은 유물 찾으러 왔다가, 재앙만 만났군.",
						"english": "...Came to find good artifacts, only found disaster.",
						"japanese": "…良い遺物を探しに来たのに、災厄に遭うとはな。",
						"chinese": "……本来是来寻找好文物，结果却遭遇了灾难。",
						"french": "...Je suis venu chercher de bons artefacts, mais je n'ai trouvé que le désastre.",
						"spanish": "...Vine a buscar buenos artefactos, solo encontré desastre.",
						"vietnamese": "...Đến tìm di vật tốt, chỉ gặp toàn tai ương.",
						"thai": "...มาหาโบราณวัตถุดีๆ แต่กลับเจอแต่ภัยพิบัติ",
						"hindi": "...अच्छी कलाकृतियां ढूंढने आया था, लेकिन आपदा ही मिली।"
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
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "흐음… 이 휩쓸린 흔적은…",
						"english": "Hmm... These swept-away traces are...",
						"japanese": "ふむ…この押し流された痕跡は…",
						"chinese": "嗯……这些被冲刷的痕迹是……",
						"french": "Hmm... Ces traces balayées sont...",
						"spanish": "Hmm... Estas huellas barridas son...",
						"vietnamese": "Hừm... Những dấu vết bị cuốn trôi này là...",
						"thai": "หืม... ร่องรอยที่ถูกพัดไปนี่...",
						"hindi": "हुम्म... ये बह गए निशान..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 아는 것 같군. 말해봐.",
						"english": "You seem to know something. Tell me.",
						"japanese": "何か知っているようだな。話してみろ。",
						"chinese": "你好像知道些什么。说吧。",
						"french": "Tu sembles savoir quelque chose. Dis-moi.",
						"spanish": "Pareces saber algo. Dímelo.",
						"vietnamese": "Ngươi có vẻ biết gì đó. Nói đi.",
						"thai": "ดูเหมือนเจ้ารู้อะไรบางอย่าง บอกมาสิ",
						"hindi": "तुम कुछ जानते हो, लगता है। बताओ।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "급할 것 없어. 귀한 정보를 얻으려면… 귀한 것이 필요하지.",
						"english": "No need to rush. To gain valuable information... something valuable is needed.",
						"japanese": "急ぐことはない。貴重な情報を得るには…貴重なものが必要だ。",
						"chinese": "不急。要获得宝贵的情报…需要一些宝贵的东西。",
						"french": "Inutile de se presser. Pour obtenir des informations précieuses... il faut quelque chose de précieux.",
						"spanish": "No hay prisa. Para obtener información valiosa... se necesita algo valioso.",
						"vietnamese": "Không cần vội. Để có được thông tin quý giá… cần có thứ quý giá.",
						"thai": "ไม่รีบร้อนหรอกนะ การจะได้ข้อมูลล้ำค่า… ก็ต้องแลกด้วยของล้ำค่า",
						"hindi": "जल्दबाजी की ज़रूरत नहीं। बहुमूल्य जानकारी पाने के लिए... बहुमूल्य चीज़ चाहिए।"
					}
				},
				{
					"content": {
						"korean": "장사할 생각밖에 없나?",
						"english": "Is all you think about business?",
						"japanese": "商売のことしか考えていないのか？",
						"chinese": "你只想着做生意吗？",
						"french": "Tu ne penses qu'aux affaires ?",
						"spanish": "¿Solo piensas en hacer negocios?",
						"vietnamese": "Ngươi chỉ nghĩ đến chuyện làm ăn thôi sao?",
						"thai": "เจ้าคิดแต่เรื่องค้าขายหรือไง?",
						"hindi": "क्या तुम सिर्फ व्यापार के बारे में सोचते हो?"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하하. 하지만 이번 정보는 목숨 값일 수도 있어.",
						"english": "Haha. But this information might cost a life.",
						"japanese": "ハハ。だが、今回の情報は命の代償になるかもしれないぞ。",
						"chinese": "哈哈。但这次的情报，可能要付出生命的代价。",
						"french": "Haha. Mais cette information pourrait coûter une vie.",
						"spanish": "Jaja. Pero esta información podría costar una vida.",
						"vietnamese": "Haha. Nhưng thông tin lần này có thể đáng giá một mạng người.",
						"thai": "ฮ่าฮ่า แต่ข้อมูลคราวนี้อาจมีค่าเท่าชีวิตเลยนะ",
						"hindi": "हाहा। लेकिन यह जानकारी जान की कीमत पर भी मिल सकती है।"
					}
				},
				{
					"content": {
						"korean": "오래된 전설에 '절대 굴복하지 않는 검'이라 불리는 것이 있지.",
						"english": "In an ancient legend, there's something called 'the sword that never yields'.",
						"japanese": "古い伝説には、「決して屈しない剣」と呼ばれるものがある。",
						"chinese": "在古老的传说中，有一把被称为“永不屈服之剑”的东西。",
						"french": "Dans une ancienne légende, il y a ce qu'on appelle « l'épée qui ne cède jamais ».",
						"spanish": "En una antigua leyenda, existe algo llamado 'la espada que nunca se rinde'.",
						"vietnamese": "Trong một truyền thuyết cổ xưa, có một thứ được gọi là 'thanh kiếm không bao giờ khuất phục'.",
						"thai": "ในตำนานเก่าแก่ มีสิ่งที่เรียกว่า 'ดาบที่ไม่ยอมสยบ' อยู่",
						"hindi": "एक पुरानी किंवदंती में, 'कभी हार न मानने वाली तलवार' नाम की एक चीज़ है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "그 검이 사라진 후, 재앙이 시작되었다고 해.",
						"english": "They say after that sword vanished, disaster began.",
						"japanese": "その剣が消えた後、災厄が始まったと言われている。",
						"chinese": "据说那把剑消失后，灾难就开始了。",
						"french": "On dit qu'après la disparition de cette épée, le désastre a commencé.",
						"spanish": "Dicen que después de que esa espada desapareció, comenzó la calamidad.",
						"vietnamese": "Người ta nói rằng sau khi thanh kiếm đó biến mất, tai ương đã bắt đầu.",
						"thai": "ว่ากันว่าหลังจากดาบเล่มนั้นหายไป หายนะก็เริ่มต้นขึ้น",
						"hindi": "कहा जाता है कि उस तलवार के गायब होने के बाद, आपदा शुरू हो गई।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "이 유적, 황금 제국의 흔적이군.",
						"english": "These ruins... traces of the Golden Empire.",
						"japanese": "この遺跡、黄金帝国の痕跡か。",
						"chinese": "这遗迹，是黄金帝国的痕迹啊。",
						"french": "Ces ruines... les traces de l'Empire d'Or.",
						"spanish": "Estas ruinas... son rastros del Imperio Dorado.",
						"vietnamese": "Di tích này… là dấu tích của Đế chế Hoàng Kim.",
						"thai": "ซากปรักหักพังนี่... เป็นร่องรอยของอาณาจักรทองคำ",
						"hindi": "ये खंडहर... स्वर्ण साम्राज्य के निशान हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "amir"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "황금 제국?",
						"english": "The Golden Empire?",
						"japanese": "黄金帝国？",
						"chinese": "黄金帝国？",
						"french": "L'Empire d'Or ?",
						"spanish": "¿El Imperio Dorado?",
						"vietnamese": "Đế chế Hoàng Kim?",
						"thai": "อาณาจักรทองคำ?",
						"hindi": "स्वर्ण साम्राज्य?"
					}
				},
				{
					"content": {
						"korean": "과거 사막을 지배했던 거대한 제국. 오만함 때문에 파멸했다고들 하지.",
						"english": "A vast empire that once ruled the desert. They say it was destroyed by its own arrogance.",
						"japanese": "かつて砂漠を支配した巨大な帝国。傲慢さゆえに破滅したと言われている。",
						"chinese": "曾经统治沙漠的庞大帝国。据说因为傲慢而毁灭了。",
						"french": "Un vaste empire qui régnait autrefois sur le désert. On dit qu'il a été détruit par son arrogance.",
						"spanish": "Un vasto imperio que una vez dominó el desierto. Dicen que fue destruido por su propia arrogancia.",
						"vietnamese": "Một đế chế rộng lớn từng thống trị sa mạc. Người ta nói nó đã bị hủy diệt vì sự kiêu ngạo.",
						"thai": "อาณาจักรอันยิ่งใหญ่ที่เคยปกครองทะเลทราย ว่ากันว่าล่มสลายเพราะความโอหัง",
						"hindi": "एक विशाल साम्राज्य जिसने कभी रेगिस्तान पर राज किया था। कहते हैं कि वह अपने घमंड के कारण बर्बाद हो गया।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래서? 우리랑 무슨 상관인데?",
						"english": "So? What does that have to do with us?",
						"japanese": "それで？我々と何の関係があるんだ？",
						"chinese": "所以呢？和我们有什么关系？",
						"french": "Et alors ? Qu'est-ce que ça a à voir avec nous ?",
						"spanish": "¿Y qué? ¿Qué tiene que ver eso con nosotros?",
						"vietnamese": "Vậy thì sao? Liên quan gì đến chúng ta?",
						"thai": "แล้วไง? มันเกี่ยวอะไรกับพวกเรา?",
						"hindi": "तो? इसका हमसे क्या लेना-देना?"
					},
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "하지만… 모든 게 그들의 오만 때문만은 아니었어.",
						"english": "But... it wasn't all due to their arrogance.",
						"japanese": "しかし…すべてが彼らの傲慢さだけではなかった。",
						"chinese": "但是……并非所有都是因为他们的傲慢。",
						"french": "Mais... tout n'était pas dû à leur seule arrogance.",
						"spanish": "Pero... no todo fue por su arrogancia.",
						"vietnamese": "Nhưng... không phải tất cả đều do sự ngạo mạn của họ.",
						"thai": "แต่... ทั้งหมดนี้ไม่ใช่เพราะความหยิ่งยโสของพวกเขาเท่านั้น",
						"hindi": "लेकिन... यह सब उनके अहंकार के कारण नहीं था।"
					}
				},
				{
					"content": {
						"korean": "유적 벽화에는 희미하게… 검은 그림자의 흔적이 남아있지.",
						"english": "Faint traces of a dark shadow remain on the ruins' murals.",
						"japanese": "遺跡の壁画には、微かに…黒い影の痕跡が残っている。",
						"chinese": "遗迹壁画上依稀留有……黑色影子的痕迹。",
						"french": "De faibles traces d'une ombre noire subsistent sur les fresques des ruines.",
						"spanish": "En los murales de las ruinas quedan débiles rastros de una sombra oscura.",
						"vietnamese": "Trên những bức tranh tường của di tích, vẫn còn mờ nhạt... dấu vết của một bóng đen.",
						"thai": "บนจิตรกรรมฝาผนังของซากปรักหักพัง ยังคงมีร่องรอยจางๆ... ของเงาสีดำ",
						"hindi": "खंडहरों के भित्तिचित्रों पर... एक काली छाया के हल्के निशान अभी भी मौजूद हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "제국의 몰락 뒤에는 숨겨진 배신이 있었다고.",
						"english": "Behind the empire's fall, there was a hidden betrayal.",
						"japanese": "帝国の没落の裏には、隠された裏切りがあった。",
						"chinese": "帝国的陨落背后，隐藏着一场背叛。",
						"french": "Derrière la chute de l'empire, il y avait une trahison cachée.",
						"spanish": "Detrás de la caída del imperio, hubo una traición oculta.",
						"vietnamese": "Đằng sau sự sụp đổ của đế chế, có một sự phản bội ẩn giấu.",
						"thai": "เบื้องหลังการล่มสลายของจักรวรรดิ มีการทรยศหักหลังซ่อนอยู่",
						"hindi": "साम्राज्य के पतन के पीछे, एक छिपी हुई गद्दारी थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "amir"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "더 이상은… 발을 들이지 않는 게 좋을 텐데.",
						"english": "It would be best not to step any further.",
						"japanese": "これ以上は…足を踏み入れない方がいいだろう。",
						"chinese": "最好不要再向前了。",
						"french": "Mieux vaudrait ne pas aller plus loin.",
						"spanish": "Sería mejor no dar un paso más.",
						"vietnamese": "Sẽ tốt hơn nếu không bước thêm nữa.",
						"thai": "ไม่ควรที่จะก้าวไปไกลกว่านี้",
						"hindi": "बेहतर होगा कि तुम आगे न बढ़ो।"
					}
				},
				{
					"content": {
						"korean": "돌아갈 수 없어.",
						"english": "There's no turning back.",
						"japanese": "もう戻れない。",
						"chinese": "无法回头。",
						"french": "On ne peut plus reculer.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không thể quay lại.",
						"thai": "ไม่มีทางย้อนกลับ",
						"hindi": "वापस नहीं जा सकते।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 폭풍의 심연에는… 네가 감당 못 할 진실이 잠들어 있어.",
						"english": "In the abyss of that storm... a truth you cannot bear lies dormant.",
						"japanese": "あの嵐の深淵には…君が耐えられない真実が眠っている。",
						"chinese": "那风暴的深渊中……沉睡着你无法承受的真相。",
						"french": "Dans l'abîme de cette tempête... une vérité que tu ne pourras supporter sommeille.",
						"spanish": "En el abismo de esa tormenta... yace una verdad que no podrás soportar.",
						"vietnamese": "Trong vực sâu của cơn bão đó... một sự thật mà ngươi không thể chịu đựng đang ngủ yên.",
						"thai": "ในห้วงลึกของพายุนั้น... มีความจริงที่เจ้ามิอาจรับไหวหลับใหลอยู่",
						"hindi": "उस तूफ़ान के अथाह गड्ढे में... एक ऐसा सच सोया हुआ है जिसे तुम सह नहीं पाओगे।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "두렵지 않아.",
						"english": "I'm not afraid.",
						"japanese": "恐れていない。",
						"chinese": "我不害怕。",
						"french": "Je n'ai pas peur.",
						"spanish": "No tengo miedo.",
						"vietnamese": "Ta không sợ.",
						"thai": "ไม่กลัว",
						"hindi": "मुझे डर नहीं लगता।"
					},
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "후회할 거야. '모래 폭풍의 신'은… 그저 폭풍이 아니야."
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다…",
						"english": "Ugh… It's not… over yet…",
						"japanese": "ぐっ… まだ… 終わってない…",
						"chinese": "咳… 还没… 结束…",
						"french": "Argh… Ce n'est pas… encore fini…",
						"spanish": "Ugh… Todavía… no ha terminado…",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc…",
						"thai": "อึก… ยัง… ไม่จบ…",
						"hindi": "उफ़… अभी… खत्म नहीं हुआ…"
					}
				},
				{
					"content": {
						"korean": "…사라진 검의 전설… 잊지 마라…",
						"english": "…The legend of the lost sword… do not forget…",
						"japanese": "…消え去った剣の伝説… 忘れるな…",
						"chinese": "…失落之剑的传说… 别忘了…",
						"french": "…La légende de l'épée disparue… n'oubliez pas…",
						"spanish": "…La leyenda de la espada perdida… no olvidéis…",
						"vietnamese": "…Huyền thoại về thanh kiếm thất lạc… đừng quên…",
						"thai": "…ตำนานดาบที่หายสาบสูญ… อย่าลืมเลือน…",
						"hindi": "…गायब हुई तलवार की कहानी… मत भूलना…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…끝이 아니라고?",
						"english": "…Not the end?",
						"japanese": "…終わりじゃないだと？",
						"chinese": "…还没结束？",
						"french": "…Ce n'est pas la fin ?",
						"spanish": "…¿No es el final?",
						"vietnamese": "…Chưa kết thúc sao?",
						"thai": "…ยังไม่จบงั้นรึ?",
						"hindi": "…क्या यह अंत नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 거대한 존재. 하지만 폭풍은… 여전히 그들의 뒤를 쫓았다.",
						"english": "The colossal being fell. But the storm… still pursued them.",
						"japanese": "倒れた巨大な存在。しかし嵐は… 依然として彼らを追い続けた。",
						"chinese": "巨大的存在倒下了。但风暴… 仍在追逐他们。",
						"french": "L'être colossal tomba. Mais la tempête… les poursuivait toujours.",
						"spanish": "La colosal criatura cayó. Pero la tormenta… aún los perseguía.",
						"vietnamese": "Thực thể khổng lồ đã gục ngã. Nhưng cơn bão… vẫn tiếp tục truy đuổi họ.",
						"thai": "สิ่งมีชีวิตมหึมาล้มลง แต่พายุ… ก็ยังคงไล่ตามพวกเขาไป",
						"hindi": "विशालकाय अस्तित्व गिर गया। लेकिन तूफान… अभी भी उनका पीछा कर रहा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사막의 진정한 고통은… 이제 시작이었다.",
						"english": "The true agony of the desert… had only just begun.",
						"japanese": "砂漠の真の苦痛は… 今始まったばかりだった。",
						"chinese": "沙漠真正的痛苦… 现在才刚刚开始。",
						"french": "La véritable agonie du désert… ne faisait que commencer.",
						"spanish": "La verdadera agonía del desierto… apenas comenzaba.",
						"vietnamese": "Nỗi đau thực sự của sa mạc… chỉ vừa mới bắt đầu.",
						"thai": "ความทรมานที่แท้จริงของทะเลทราย… เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "रेगिस्तान की असली पीड़ा… अभी शुरू हुई थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 힘 앞에, 탐험대는 무릎 꿇었다.",
						"english": "Before the immense power, the expedition team knelt.",
						"japanese": "巨大な力の前に、探検隊はひざまずいた。",
						"chinese": "在巨大的力量面前，探险队跪下了。",
						"french": "Devant la puissance immense, l'équipe d'expédition s'agenouilla.",
						"spanish": "Ante el inmenso poder, el equipo de expedición se arrodilló.",
						"vietnamese": "Trước sức mạnh khổng lồ, đoàn thám hiểm đã quỳ gối.",
						"thai": "เบื้องหน้าพลังอันยิ่งใหญ่ ทีมสำรวจต่างคุกเข่าลง",
						"hindi": "विशाल शक्ति के सामने, अभियान दल घुटने टेक दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 인간들… 영원히 고통받을 것이다.",
						"english": "Foolish humans… you will suffer eternally.",
						"japanese": "愚かな人間ども… 永遠に苦しむがいい。",
						"chinese": "愚蠢的人类… 将永远受苦。",
						"french": "Humains insensés… vous souffrirez éternellement.",
						"spanish": "Humanos insensatos… sufriréis eternamente.",
						"vietnamese": "Loài người ngu xuẩn… các ngươi sẽ phải chịu đựng nỗi đau vĩnh viễn.",
						"thai": "มนุษย์ที่โง่เขลา… เจ้าจะต้องทนทุกข์ไปชั่วนิรันดร์",
						"hindi": "मूर्ख इंसान… तुम हमेशा के लिए कष्ट भोगोगे।"
					}
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어!",
						"english": "...It's not... over yet!",
						"japanese": "…まだ…終わってない！",
						"chinese": "…还没…结束！",
						"french": "...Ce n'est pas... encore fini !",
						"spanish": "...Aún no... ha terminado!",
						"vietnamese": "...Chưa... kết thúc đâu!",
						"thai": "...ยัง...ไม่จบ!",
						"hindi": "...अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "폭풍의 심장. 거대한 그림자가 모습을 드러냈다.",
						"english": "Heart of the Storm. A colossal shadow revealed itself.",
						"japanese": "嵐の心臓。巨大な影が姿を現した。",
						"chinese": "风暴之心。巨大的身影显现了。",
						"french": "Cœur de la Tempête. Une ombre colossale a fait son apparition.",
						"spanish": "Corazón de la Tormenta. Una sombra colosal se reveló.",
						"vietnamese": "Trái tim bão tố. Một bóng đen khổng lồ đã xuất hiện.",
						"thai": "ใจกลางพายุ เงาขนาดมหึมาปรากฏกายขึ้น",
						"hindi": "तूफ़ान का हृदय। एक विशालकाय छाया प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 내 영역을 침범하다니.",
						"english": "How dare you... trespass upon my domain.",
						"japanese": "よくも…私の領域を侵犯したな。",
						"chinese": "竟敢……入侵我的领地。",
						"french": "Comment oses-tu... empiéter sur mon domaine.",
						"spanish": "Cómo osas... invadir mi dominio.",
						"vietnamese": "Ngươi dám... xâm phạm lãnh địa của ta.",
						"thai": "กล้าดียังไง... มาบุกรุกอาณาเขตของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे क्षेत्र में घुसने की।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 오만이… 이 폭풍을 키웠다.",
						"english": "Your arrogance… fueled this storm.",
						"japanese": "お前たちの傲慢さが… この嵐を育てた。",
						"chinese": "你们的傲慢… 滋养了这场风暴。",
						"french": "Votre arrogance… a nourri cette tempête.",
						"spanish": "Vuestra arrogancia… alimentó esta tormenta.",
						"vietnamese": "Sự kiêu ngạo của các ngươi… đã châm ngòi cơn bão này.",
						"thai": "ความเย่อหยิ่งของพวกเจ้า… ได้ก่อให้เกิดพายุลูกนี้",
						"hindi": "तुम्हारा अहंकार… इस तूफान को बढ़ावा दिया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가… 모래 폭풍의 신인가?",
						"english": "Are you… the God of Sandstorms?",
						"japanese": "お前が… 砂嵐の神か？",
						"chinese": "你就是… 沙尘暴之神吗？",
						"french": "Es-tu… le Dieu des tempêtes de sable ?",
						"spanish": "¿Eres… el Dios de las tormentas de arena?",
						"vietnamese": "Ngươi… là Thần Bão Cát sao?",
						"thai": "เจ้าคือ… เทพแห่งพายุทรายงั้นรึ?",
						"hindi": "क्या तुम… रेत के तूफान के देवता हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "나는… 이 사막의 심판자다.",
						"english": "I am… this desert's judge.",
						"japanese": "私は… この砂漠の審判者だ。",
						"chinese": "我就是… 这片沙漠的审判者。",
						"french": "Je suis… le juge de ce désert.",
						"spanish": "Yo soy… el juez de este desierto.",
						"vietnamese": "Ta… là phán quan của sa mạc này.",
						"thai": "ข้าคือ… ผู้พิพากษาแห่งทะเลทรายนี้",
						"hindi": "मैं… इस रेगिस्तान का न्यायकर्ता हूँ।"
					}
				}
			]
		}
	]
} as const;
