export const scenario_snowy_anya_14_03 = {
	"scenario_id": "snowy_anya_14_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈밭 위, 사라지지 않는 흔적들.",
			"서리꽃은 다시 피고, 그 아래 겹겹이 쌓인 그림자.",
			"누구의 발자국인가. 이 길은, 어디로 향하는가."
		],
		"english": [
			"Traces on the snow, never fading.",
			"Frost flowers bloom anew, shadows layered beneath.",
			"Whose footsteps are these? Where does this path lead?"
		],
		"japanese": [
			"雪の上に、消えない足跡。",
			"霜花が再び咲き、その下に影が幾重にも重なる。",
			"これは誰の足跡か。この道は、どこへ続くのか。"
		],
		"chinese": [
			"雪地上，不灭的痕迹。",
			"霜花再次绽放，层层叠叠的影子在其下。",
			"这是谁的足迹？这条路，通向何方？"
		],
		"french": [
			"Sur la neige, des traces indélébiles.",
			"Les fleurs de givre refleurissent, des ombres s'accumulent en dessous.",
			"De qui sont ces pas ? Où mène ce chemin ?"
		],
		"spanish": [
			"En la nieve, huellas que no desaparecen.",
			"Las flores de escarcha florecen de nuevo, sombras apiladas debajo.",
			"¿De quién son estas huellas? ¿Adónde lleva este camino?"
		],
		"vietnamese": [
			"Trên tuyết, những dấu vết không phai.",
			"Hoa sương lại nở, bóng đêm chồng chất bên dưới.",
			"Dấu chân của ai? Con đường này dẫn đến đâu?"
		],
		"thai": [
			"ร่องรอยบนหิมะที่ไม่มีวันเลือนหายไป",
			"ดอกไม้น้ำค้างแข็งบานอีกครั้ง เงาทับซ้อนอยู่ข้างใต้",
			"นี่รอยเท้าใครกัน? หนทางนี้จะนำไปที่ใดกันแน่?"
		],
		"hindi": [
			"बर्फ़ पर, मिटते नहीं निशान।",
			"पाला फूल फिर खिलते हैं, नीचे परछाईं की परतें।",
			"ये किसके पदचिन्ह हैं? यह रास्ता कहाँ जाता है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈밭에 피어난 서리꽃. 자세히 보니, 몇 번이고 다시 핀 자국이었다.",
						"english": "Frost flowers bloomed in the snow. On closer look, they seemed to have bloomed multiple times.",
						"japanese": "雪原に咲いた霜花。よく見ると、何度も咲き直した跡だった。",
						"chinese": "雪地里盛开的霜花。仔细一看，是多次绽放的痕迹。",
						"french": "Des fleurs de givre ont fleuri dans la neige. En y regardant de plus près, elles semblaient avoir fleuri à plusieurs reprises.",
						"spanish": "Flores de escarcha florecieron en la nieve. Al mirar de cerca, parecían haber florecido varias veces.",
						"vietnamese": "Những bông hoa sương nở trên tuyết. Nhìn kỹ, đó là dấu vết của nhiều lần nở.",
						"thai": "ดอกไม้น้ำค้างแข็งบานสะพรั่งกลางหิมะ พอมองดูใกล้ๆ ก็พบว่าเป็นร่องรอยที่บานซ้ำแล้วซ้ำเล่า",
						"hindi": "बर्फ़ में खिले पाले के फूल। ध्यान से देखा, तो ये कई बार खिले हुए के निशान थे।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…이상해. 이 꽃들, 같은 자리에서 계속 피어났어.",
						"english": "...Strange. These flowers keep blooming in the same spot.",
						"japanese": "…変だ。この花々、同じ場所で何度も咲いている。",
						"chinese": "……奇怪。这些花，一直在同一个地方绽放。",
						"french": "...Bizarre. Ces fleurs n'arrêtent pas de pousser au même endroit.",
						"spanish": "...Extraño. Estas flores siguen floreciendo en el mismo lugar.",
						"vietnamese": "...Kỳ lạ. Những bông hoa này cứ nở mãi ở cùng một chỗ.",
						"thai": "...แปลกจัง ดอกไม้พวกนี้บานซ้ำที่เดิมไม่หยุดเลย",
						"hindi": "…अजीब है। ये फूल एक ही जगह पर बार-बार खिल रहे हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "겹겹이?",
						"english": "Layered?",
						"japanese": "幾重にも？",
						"chinese": "层层叠叠？",
						"french": "En couches ?",
						"spanish": "¿En capas?",
						"vietnamese": "Chồng chất?",
						"thai": "ทับซ้อนกัน?",
						"hindi": "परतों में?"
					}
				},
				{
					"content": {
						"korean": "응. 눈에 덮였다가, 다시 돋아나고. 수없이 반복된 흔적이야.",
						"english": "Yes. Covered by snow, then sprouting again. Traces of countless repetitions.",
						"japanese": "うん。雪に覆われては、また芽吹く。数えきれないほど繰り返された痕跡だよ。",
						"chinese": "嗯。被雪覆盖，又再次长出。是无数次重复的痕迹。",
						"french": "Oui. Couvertes par la neige, puis repoussant. Des traces d'innombrables répétitions.",
						"spanish": "Sí. Cubiertas por la nieve, y luego brotando de nuevo. Rastros de innumerables repeticiones.",
						"vietnamese": "Đúng vậy. Bị tuyết phủ, rồi lại nảy mầm. Dấu vết của vô số lần lặp lại.",
						"thai": "ใช่แล้ว ถูกหิมะปกคลุม แล้วก็งอกขึ้นมาใหม่ เป็นร่องรอยที่ซ้ำไปซ้ำมานับไม่ถ้วนเลยล่ะ",
						"hindi": "हाँ। बर्फ़ से ढँका, फिर दोबारा उग आया। अनगिनत बार दोहराए जाने के निशान हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "마치, 길을 잃은 누군가가 계속 같은 곳을 맴돈 것 같아.",
						"english": "It's as if someone lost their way and kept circling the same spot.",
						"japanese": "まるで、道を迷った誰かが同じ場所をずっとさまよっていたみたいだ。",
						"chinese": "就好像，有迷路的人一直在同一个地方打转一样。",
						"french": "C'est comme si quelqu'un s'était perdu et avait tourné en rond au même endroit.",
						"spanish": "Es como si alguien se hubiera perdido y siguiera dando vueltas en el mismo lugar.",
						"vietnamese": "Cứ như thể ai đó bị lạc đường và cứ quanh quẩn ở cùng một chỗ.",
						"thai": "ราวกับว่ามีใครบางคนที่หลงทางและวนเวียนอยู่แต่ที่เดิม",
						"hindi": "जैसे किसी ने रास्ता खो दिया हो और एक ही जगह पर घूमता रहा हो।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃어? 근데 서리꽃이 안내하잖아.",
						"english": "Lost their way? But the frost flowers guide them.",
						"japanese": "道を迷った？ でも霜花が案内しているじゃないか。",
						"chinese": "迷路了？可是霜花不是在指引方向吗？",
						"french": "Perdu leur chemin ? Mais les fleurs de givre les guident.",
						"spanish": "¿Perdido el camino? Pero las flores de escarcha los guían.",
						"vietnamese": "Lạc đường sao? Nhưng hoa sương đang dẫn lối mà.",
						"thai": "หลงทางเหรอ? แต่ดอกไม้น้ำค้างแข็งเป็นผู้นำทางไม่ใช่หรือไง?",
						"hindi": "रास्ता खो दिया? लेकिन पाले के फूल तो रास्ता दिखाते हैं।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니… 이 자국. 서리꽃 밑에, 흐릿하게 보여.",
						"english": "No... these marks. Under the frost flowers, faintly visible.",
						"japanese": "いや…この跡。霜花の下に、ぼんやりと見える。",
						"chinese": "不……这些痕迹。在霜花下面，模糊可见。",
						"french": "Non... ces marques. Sous les fleurs de givre, à peine visibles.",
						"spanish": "No... estas marcas. Debajo de las flores de escarcha, apenas visibles.",
						"vietnamese": "Không... những dấu vết này. Dưới những bông hoa sương, mờ ảo.",
						"thai": "ไม่สิ... ร่องรอยพวกนี้ ใต้ดอกไม้น้ำค้างแข็ง มองเห็นได้รางๆ",
						"hindi": "नहीं… ये निशान। पाले के फूलों के नीचे, धुँधले दिखाई दे रहे हैं।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…작은 발자국이야. 아주 어린아이의 것 같은데.",
						"english": "...Tiny footprints. Looks like a very young child's.",
						"japanese": "「…小さな足跡だ。幼い子供のもののようだ。」",
						"chinese": "…小小的脚印。好像是小孩子的。",
						"french": "...De minuscules empreintes. Elles semblent appartenir à un très jeune enfant.",
						"spanish": "...Huellas diminutas. Parecen de un niño muy pequeño.",
						"vietnamese": "...Những dấu chân nhỏ xíu. Có vẻ là của một đứa trẻ rất nhỏ.",
						"thai": "...รอยเท้าเล็กๆ เหมือนของเด็กเล็กมากเลย",
						"hindi": "...छोटे-छोटे पदचिह्न। किसी बहुत छोटे बच्चे के लगते हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아이?",
						"english": "A child?",
						"japanese": "「子供？」",
						"chinese": "孩子？",
						"french": "Un enfant ?",
						"spanish": "¿Un niño?",
						"vietnamese": "Đứa trẻ ư?",
						"thai": "เด็ก?",
						"hindi": "बच्चा?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 작은 발자국이, 이 겹겹이 핀 서리꽃 위에 새겨져 있어.",
						"english": "These tiny footprints are etched upon these layered frost flowers.",
						"japanese": "「この小さな足跡が、何層にも重なる霜の花の上に刻まれている。」",
						"chinese": "这些小小的脚印，印刻在这层层叠叠的霜花之上。",
						"french": "Ces minuscules empreintes sont gravées sur ces fleurs de givre superposées.",
						"spanish": "Estas diminutas huellas están grabadas sobre estas flores de escarcha superpuestas.",
						"vietnamese": "Những dấu chân nhỏ bé này in hằn trên những lớp hoa sương giá.",
						"thai": "รอยเท้าเล็กๆ พวกนี้ประทับอยู่บนดอกไม้น้ำแข็งที่บานซ้อนกัน",
						"hindi": "ये छोटे पदचिह्न इन परत-दर-परत खिले तुषार-पुष्पों पर अंकित हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "길이… 계속 반복되고 있어. 이 아이가 이 길을 수없이 오간 걸까?",
						"english": "The path... it keeps repeating. Did this child walk this way countless times?",
						"japanese": "「道が…何度も繰り返されている。この子がこの道を何度も行き来したのだろうか？」",
						"chinese": "这条路…一直在重复。是这个孩子无数次往返于此吗？",
						"french": "Le chemin... il se répète sans cesse. Cet enfant a-t-il parcouru ce chemin d'innombrables fois ?",
						"spanish": "El camino... se repite una y otra vez. ¿Este niño recorrió este camino incontables veces?",
						"vietnamese": "Con đường... nó cứ lặp đi lặp lại. Phải chăng đứa trẻ này đã đi qua đây vô số lần?",
						"thai": "เส้นทาง... มันวนซ้ำไปมา เด็กคนนี้เดินไปกลับบนเส้นทางนี้นับครั้งไม่ถ้วนหรือเปล่า?",
						"hindi": "रास्ता... यह लगातार दोहराया जा रहा है। क्या इस बच्चे ने अनगिनत बार यह रास्ता तय किया होगा?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "어린아이가 이 눈보라 속을?",
						"english": "A young child, in this blizzard?",
						"japanese": "「幼い子供がこの吹雪の中を？」",
						"chinese": "一个小孩，在这暴风雪中？",
						"french": "Un jeune enfant, dans ce blizzard ?",
						"spanish": "¿Un niño pequeño, en esta ventisca?",
						"vietnamese": "Một đứa trẻ, trong cơn bão tuyết này ư?",
						"thai": "เด็กเล็กๆ ในพายุหิมะแบบนี้เหรอ?",
						"hindi": "एक छोटा बच्चा, इस बर्फीले तूफ़ान में?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니면… 누군가 이 아이를 계속 기다리며, 같은 길을 만든 걸지도.",
						"english": "Or perhaps... someone kept waiting for this child, creating the same path.",
						"japanese": "「それとも…誰かがこの子をずっと待ち続け、同じ道を作ったのかもしれない。」",
						"chinese": "或者…可能有人一直在等着这个孩子，制造了同样的路径。",
						"french": "Ou peut-être... quelqu'un attendait sans cesse cet enfant, créant le même chemin.",
						"spanish": "O tal vez... alguien estuvo esperando a este niño, creando el mismo camino una y otra vez.",
						"vietnamese": "Hoặc có lẽ... ai đó cứ chờ đợi đứa trẻ này, tạo nên cùng một con đường.",
						"thai": "หรือว่า... มีใครบางคนเฝ้ารอเด็กคนนี้อยู่ตลอดเวลา จนสร้างเส้นทางเดิมๆ ขึ้นมา",
						"hindi": "या शायद... कोई इस बच्चे का इंतज़ार करता रहा होगा, और इसी रास्ते को बार-बार बनाया होगा।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 길은… 단순한 통로가 아니야.",
						"english": "This path... it's not just a simple passage.",
						"japanese": "「この道は…ただの通路ではない。」",
						"chinese": "这条路…不仅仅是一个简单的通道。",
						"french": "Ce chemin... ce n'est pas un simple passage.",
						"spanish": "Este camino... no es un simple pasaje.",
						"vietnamese": "Con đường này... không phải là một lối đi đơn thuần.",
						"thai": "เส้นทางนี้... ไม่ใช่แค่ทางผ่านธรรมดาๆ",
						"hindi": "यह रास्ता... सिर्फ़ एक साधारण मार्ग नहीं है।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그럼?",
						"english": "Then what?",
						"japanese": "「では？」",
						"chinese": "那是什么？",
						"french": "Alors ?",
						"spanish": "¿Entonces?",
						"vietnamese": "Vậy thì sao?",
						"thai": "แล้วอะไรล่ะ?",
						"hindi": "तो क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝없이 되풀이되는 흔적. 마치, 깨어나지 않는 꿈 같아.",
						"english": "Traces that repeat endlessly. Like an unending dream.",
						"japanese": "「果てしなく繰り返される痕跡。まるで、覚めない夢のようだ。」",
						"chinese": "无尽重复的痕迹。就像一个醒不过来的梦。",
						"french": "Des traces qui se répètent sans fin. Comme un rêve dont on ne se réveille pas.",
						"spanish": "Huellas que se repiten sin cesar. Como un sueño del que no se despierta.",
						"vietnamese": "Những dấu vết lặp đi lặp lại không ngừng. Giống như một giấc mơ không thể tỉnh dậy.",
						"thai": "ร่องรอยที่วนซ้ำไม่รู้จบ เหมือนกับความฝันที่ไม่ตื่นขึ้นมา",
						"hindi": "अंतहीन दोहराए जाने वाले निशान। मानो एक ऐसा सपना हो जिससे नींद न टूटे।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "겹겹이 쌓인 서리꽃과 작은 발자국. 이 길은 처음부터 끝을 알 수 없었다.",
						"english": "Layered frost flowers and tiny footprints. This path had no discernible beginning or end.",
						"japanese": "「幾重にも重なる霜の花と小さな足跡。この道は最初から終わりを知らなかった。」",
						"chinese": "层层叠叠的霜花和细小的脚印。这条路从一开始就无始无终。",
						"french": "Des fleurs de givre superposées et de minuscules empreintes. Ce chemin n'avait ni début ni fin.",
						"spanish": "Flores de escarcha superpuestas y diminutas huellas. Este camino no tenía un principio ni un fin discernible.",
						"vietnamese": "Những lớp hoa sương giá chồng chất và dấu chân nhỏ bé. Con đường này từ đầu đã không thể biết được điểm kết thúc.",
						"thai": "ดอกไม้น้ำแข็งที่ซ้อนกันเป็นชั้นๆ และรอยเท้าเล็กๆ เส้นทางนี้ไม่สามารถบอกจุดเริ่มต้นหรือจุดสิ้นสุดได้เลย",
						"hindi": "परत-दर-परत तुषार-पुष्प और छोटे पदचिह्न। इस रास्ते का न तो आदि था और न ही अंत।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…누군가는 기다리고, 누군가는 잊혀지고… 이 길의 끝은, 늘 같을 거야.",
						"english": "...Someone waits, someone is forgotten... The end of this path will always be the same.",
						"japanese": "...誰かが待ち、誰かが忘れ去られる... この道の終わりは、いつも同じだろう。",
						"chinese": "...有人等待，有人被遗忘... 这条路的尽头，总是相同的。",
						"french": "...Quelqu'un attend, quelqu'un est oublié... La fin de ce chemin sera toujours la même.",
						"spanish": "...Alguien espera, alguien es olvidado... El final de este camino siempre será el mismo.",
						"vietnamese": "...Ai đó chờ đợi, ai đó bị lãng quên... Cuối con đường này, chắc sẽ luôn giống nhau thôi.",
						"thai": "...ใครบางคนรอคอย, ใครบางคนถูกลืม... ปลายทางของเส้นทางนี้คงเหมือนเดิมเสมอ.",
						"hindi": "...कोई इंतज़ार करता है, कोई भूला दिया जाता है... इस रास्ते का अंत तो हमेशा एक ही होगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "기다림…?",
						"english": "Waiting...?",
						"japanese": "待ち...？",
						"chinese": "等待...？",
						"french": "Attente...?",
						"spanish": "¿Esperar...?",
						"vietnamese": "Chờ đợi...?",
						"thai": "การรอคอย...?",
						"hindi": "इंतज़ार...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 발자국은, 돌아올 누군가를 위한 길이었나.",
						"english": "Were these footsteps a path for someone to return?",
						"japanese": "この足跡は、戻ってくる誰かのための道だったのか。",
						"chinese": "这些脚印，是为归来之人铺设的道路吗？",
						"french": "Ces empreintes de pas, étaient-elles un chemin pour le retour de quelqu'un ?",
						"spanish": "¿Estas huellas eran un camino para que alguien regresara?",
						"vietnamese": "Những dấu chân này, là con đường dành cho ai đó quay về sao?",
						"thai": "รอยเท้าเหล่านี้ เป็นเส้นทางสำหรับใครบางคนที่กำลังจะกลับมารึ?",
						"hindi": "क्या ये पदचिह्न किसी के लौटने का रास्ता थे?"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "빛은 여전히 같은 길을 오갔다. 그 빛에 담긴 마음을 읽어야 했다.",
						"english": "The light still traveled the same path. I had to read the heart within that light.",
						"japanese": "光は相変わらず同じ道を行き来していた。その光に込められた心を読まねばならなかった。",
						"chinese": "光线依然在同一条路上穿梭。我必须解读那光线中蕴含的心意。",
						"french": "La lumière parcourait toujours le même chemin. Je devais lire le cœur contenu dans cette lumière.",
						"spanish": "La luz seguía el mismo camino. Tenía que leer el corazón contenido en esa luz.",
						"vietnamese": "Ánh sáng vẫn đi qua lại trên cùng một con đường. Ta phải đọc được tấm lòng ẩn chứa trong ánh sáng đó.",
						"thai": "แสงยังคงเดินทางไปมาบนเส้นทางเดิม. ข้าต้องอ่านใจที่อยู่ภายในแสงนั้น.",
						"hindi": "प्रकाश अभी भी उसी रास्ते पर आ-जा रहा था। मुझे उस प्रकाश में छिपे दिल को पढ़ना था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "…또 왔는가. 이 길의 끝은 늘 같을 텐데.",
						"english": "...You've come again. The end of this path will always be the same.",
						"japanese": "...また来たのか。この道の先は、いつも同じだろうに。",
						"chinese": "...又来了吗？这条路的尽头，总是相同的吧。",
						"french": "...Tu es revenu. La fin de ce chemin sera toujours la même.",
						"spanish": "...Has vuelto. El final de este camino siempre será el mismo.",
						"vietnamese": "...Lại đến rồi sao. Cuối con đường này, chắc sẽ luôn giống nhau thôi.",
						"thai": "...มาอีกแล้วรึ. ปลายทางของเส้นทางนี้คงเหมือนเดิมเสมอ.",
						"hindi": "...फिर आ गए? इस रास्ते का अंत तो हमेशा एक ही होगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 길을 지키고 있는 건가?",
						"english": "Are you guarding this path?",
						"japanese": "あなたがこの道を護っているのか？",
						"chinese": "你在守护这条路吗？",
						"french": "Est-ce toi qui gardes ce chemin ?",
						"spanish": "¿Estás guardando este camino?",
						"vietnamese": "Ngươi đang canh giữ con đường này sao?",
						"thai": "เจ้ากำลังเฝ้าทางนี้อยู่รึ?",
						"hindi": "क्या तुम इस रास्ते की रखवाली कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나 역시 이 길의 일부. 영원히 겹겹이 피어날 뿐.",
						"english": "I am also a part of this path. Merely blossoming endlessly, layer upon layer.",
						"japanese": "私もこの道の一部。ただ永遠に幾重にも咲き誇るだけ。",
						"chinese": "我也是这条路的一部分。只是永远层层绽放。",
						"french": "Moi aussi, je fais partie de ce chemin. Je ne fais que fleurir à l'infini, couche après couche.",
						"spanish": "Yo también soy parte de este camino. Simplemente floreciendo sin fin, capa tras capa.",
						"vietnamese": "Ta cũng là một phần của con đường này. Chỉ là vĩnh viễn nở rộ từng lớp mà thôi.",
						"thai": "ข้าก็เป็นส่วนหนึ่งของทางนี้. เพียงแค่เบ่งบานซ้อนทับกันไปชั่วนิรันดร์.",
						"hindi": "मैं भी इस रास्ते का एक हिस्सा हूँ। बस अनंत तक परत-दर-परत खिलता रहता हूँ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겹겹이 쌓인 자국처럼, 너희도 다시 쓰러질 뿐.",
						"english": "Like layers of accumulated marks, you too will simply fall again.",
						"japanese": "幾重にも積み重なった痕跡のように、お前たちもまた倒れるだけだ。",
						"chinese": "就像层层叠叠的印记一样，你们也只会再次倒下。",
						"french": "Comme des couches de marques accumulées, vous aussi ne ferez que tomber à nouveau.",
						"spanish": "Como capas de marcas acumuladas, vosotros también simplemente caeréis de nuevo.",
						"vietnamese": "Như những dấu vết chồng chất, các ngươi cũng chỉ lại ngã xuống mà thôi.",
						"thai": "เหมือนรอยที่ซ้อนทับกัน, พวกเจ้าก็จะล้มลงอีกครั้งเท่านั้น.",
						"hindi": "इकट्ठे हुए निशानों की परतों की तरह, तुम भी बस फिर से गिर जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わっていない。",
						"chinese": "...还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก.",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
