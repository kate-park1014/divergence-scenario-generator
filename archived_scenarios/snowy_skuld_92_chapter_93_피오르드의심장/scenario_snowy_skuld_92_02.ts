export const scenario_snowy_skuld_92_02 = {
	"scenario_id": "snowy_skuld_92_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 빙하 속, 척후선의 용머리가 드러났다.",
						"english": "Within the colossal glacier, the scout ship's Dragon's Head emerged.",
						"japanese": "巨大な氷河の中、斥候船の竜頭が姿を現した。",
						"chinese": "巨大的冰川中，侦察船的龙首显露出来。",
						"french": "Au sein du glacier colossal, la Tête de Dragon du navire éclaireur apparut.",
						"spanish": "Dentro del colosal glaciar, la Cabeza de Dragón del barco explorador emergió.",
						"vietnamese": "Trong lòng sông băng khổng lồ, Đầu Rồng của thuyền trinh sát đã lộ ra.",
						"thai": "ท่ามกลางธารน้ำแข็งมหึมา หัวมังกรของเรือลาดตระเวนก็ปรากฏขึ้น",
						"hindi": "विशाल हिमनदी के भीतर, टोही जहाज़ का ड्रैगन का सिर प्रकट हुआ।"
					}
				},
				{
					"content": {
						"korean": "용머리… 근데 왜 저 방향이지?",
						"english": "Dragon's Head... But why that direction?",
						"japanese": "竜頭… でも、なぜあの方向なんだ？",
						"chinese": "龙首……但为何是那个方向？",
						"french": "Tête de Dragon... Mais pourquoi cette direction ?",
						"spanish": "Cabeza de Dragón... ¿Pero por qué en esa dirección?",
						"vietnamese": "Đầu Rồng... Nhưng sao lại hướng về phía đó?",
						"thai": "หัวมังกร... แต่ทำไมถึงเป็นทิศนั้น?",
						"hindi": "ड्रैगन का सिर... पर उस दिशा में क्यों?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "…바다가 아니군. 설원 너머, 아스가르드를 향하고 있어.",
						"english": "...Not the sea. Beyond the snowy plains, it faces Asgard.",
						"japanese": "…海じゃない。雪原の向こう、アスガルドを向いている。",
						"chinese": "……不是大海。越过雪原，它正面向阿斯加德。",
						"french": "...Pas la mer. Au-delà des plaines enneigées, il fait face à Asgard.",
						"spanish": "...No es el mar. Más allá de las llanuras nevadas, apunta a Asgard.",
						"vietnamese": "...Không phải biển cả. Vượt qua đồng tuyết, nó đang hướng về Asgard.",
						"thai": "...ไม่ใช่ทะเล. มันหันหน้าไปทางแอสการ์ด พ้นจากทุ่งหิมะ",
						"hindi": "...समुद्र नहीं है। बर्फीले मैदानों के उस पार, वह अज़्गार्ड की ओर है।"
					}
				},
				{
					"content": {
						"korean": "아스가르드? 검을 돌려보낼 곳?",
						"english": "Asgard? The place to return the sword?",
						"japanese": "アスガルド？剣を返す場所か？",
						"chinese": "阿斯加德？归还剑的地方？",
						"french": "Asgard ? L'endroit où rendre l'épée ?",
						"spanish": "¿Asgard? ¿El lugar para devolver la espada?",
						"vietnamese": "Asgard? Nơi để trả lại thanh kiếm?",
						"thai": "แอสการ์ด? ที่ที่จะส่งดาบกลับคืน?",
						"hindi": "अज़्गार्ड? तलवार लौटाने की जगह?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "그래. 닿지 못할 곳을 향한 맹세. 이 배의 평생이 거기 걸려있어.",
						"english": "Yes. A vow towards an unreachable place. This ship's entire existence is bound to it.",
						"japanese": "そうだ。届かぬ場所への誓い。この船の生涯がそこにかかっている。",
						"chinese": "没错。一个面向不可及之地的誓言。这艘船的一生都系于此。",
						"french": "Oui. Un serment vers un lieu inaccessible. La vie entière de ce navire en dépend.",
						"spanish": "Sí. Un juramento hacia un lugar inalcanzable. Toda la vida de este barco depende de ello.",
						"vietnamese": "Đúng vậy. Một lời thề hướng về nơi không thể chạm tới. Cả đời con thuyền này đều gắn liền với nó.",
						"thai": "ใช่. คำสาบานที่มุ่งสู่สถานที่ที่ไม่อาจเอื้อมถึง ชีวิตทั้งชีวิตของเรือลำนี้ผูกติดอยู่กับสิ่งนั้น",
						"hindi": "हाँ। एक ऐसी जगह के लिए शपथ, जहाँ पहुँचा नहीं जा सकता। इस जहाज़ का पूरा जीवन उस पर टिका है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "지킬 수 없는 맹세에 평생을 바쳤다고?",
						"english": "Devoted a lifetime to a vow that couldn't be kept?",
						"japanese": "守れぬ誓いに一生を捧げたというのか？",
						"chinese": "将一生奉献给无法实现的誓言？",
						"french": "Consacré une vie entière à un serment impossible à tenir ?",
						"spanish": "¿Dedicó toda una vida a una promesa que no podía cumplirse?",
						"vietnamese": "Dâng cả đời mình cho một lời thề không thể giữ được sao?",
						"thai": "อุทิศทั้งชีวิตให้กับคำสาบานที่ไม่อาจรักษาไว้ได้งั้นหรือ?",
						"hindi": "एक ऐसी शपथ को पूरी ज़िंदगी समर्पित कर दी, जिसे निभाया नहीं जा सकता?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "힘의 끝을 시험받는 기분. 이 배가 그랬을 거다.",
						"english": "The limits of power are tested. This ship must've felt it too.",
						"japanese": "力の限界が試されているようだ。この船もそうだったのだろう。",
						"chinese": "感觉力量的极限正在被考验。这艘船也曾如此吧。",
						"french": "On dirait que les limites de la puissance sont mises à l'épreuve. Ce navire a dû ressentir la même chose.",
						"spanish": "Siento que los límites del poder están siendo puestos a prueba. Este barco debió sentir lo mismo.",
						"vietnamese": "Cảm giác như giới hạn của sức mạnh đang được thử thách. Con tàu này chắc cũng vậy.",
						"thai": "รู้สึกเหมือนขีดจำกัดของพลังกำลังถูกทดสอบ เรือลำนี้ก็คงรู้สึกเช่นกัน",
						"hindi": "शक्ति की सीमाएं परखी जा रही हैं, ऐसा लग रहा है। इस जहाज़ ने भी ऐसा ही महसूस किया होगा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "용머리 조각은 바다가 아닌 설원 너머, 아스가르드를 향하고 있었다.",
						"english": "The dragon figurehead pointed not to the sea, but beyond the snowfields, towards Asgard.",
						"japanese": "竜の船首像は海ではなく、雪原の向こう、アスガルドを指していた。",
						"chinese": "龙首雕塑并非指向大海，而是指向雪原之外的阿斯加德。",
						"french": "La figure de proue en forme de dragon ne pointait pas vers la mer, mais au-delà des champs de neige, vers Asgard.",
						"spanish": "La talla de la cabeza de dragón no apuntaba al mar, sino más allá de los campos de nieve, hacia Asgard.",
						"vietnamese": "Đầu rồng chạm khắc không hướng ra biển mà hướng về phía Asgard, vượt qua những cánh đồng tuyết.",
						"thai": "รูปแกะสลักหัวมังกรไม่ได้หันหน้าไปทางทะเล แต่หันหน้าไปยังแอสการ์ดที่อยู่นอกเหนือทุ่งหิมะ",
						"hindi": "ड्रैगन की आकृति समुद्र की ओर नहीं, बल्कि बर्फीले मैदानों से परे, असगार्ड की ओर इशारा कर रही थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "깊은 어둠 속에서 정체 모를 그림자가 나타났다.",
						"english": "From the deep darkness, an unknown shadow appeared.",
						"japanese": "深い闇の中から、正体不明の影が現れた。",
						"chinese": "深邃的黑暗中，一个不明身份的影子出现了。",
						"french": "Des ténèbres profondes, une ombre inconnue apparut.",
						"spanish": "De la oscuridad profunda, una sombra desconocida apareció.",
						"vietnamese": "Từ sâu trong bóng tối, một bóng đen không rõ danh tính xuất hiện.",
						"thai": "จากความมืดมิดลึกเข้าไป เงาปริศนาได้ปรากฏตัวขึ้น",
						"hindi": "गहरे अंधेरे से, एक अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "여긴 네놈들이 올 곳이 아니다. 돌아가라.",
						"english": "This is no place for you. Turn back.",
						"japanese": "ここは貴様らが来る場所ではない。引き返せ。",
						"chinese": "这里不是你们该来的地方。回去吧。",
						"french": "Ce n'est pas votre place ici. Retournez-vous.",
						"spanish": "Este no es vuestro lugar. Volved.",
						"vietnamese": "Đây không phải nơi các ngươi nên đến. Quay về đi.",
						"thai": "นี่ไม่ใช่ที่สำหรับพวกเจ้า กลับไปซะ",
						"hindi": "यह तुम्हारी जगह नहीं है। लौट जाओ।"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "도망칠 순 없어. 저것 역시… 이 배의 맹세를 지키는 자인가.",
						"english": "No escape. Is that thing... also a guardian of this ship's vow?",
						"japanese": "逃れられない。あれもまた… この船の誓いを守る者なのか。",
						"chinese": "无法逃脱。那东西也是… 这艘船誓言的守护者吗？",
						"french": "Pas d'échappatoire. Cela aussi... est-ce un gardien du serment de ce navire ?",
						"spanish": "No hay escape. ¿Eso también... es un guardián del juramento de este barco?",
						"vietnamese": "Không thể thoát được. Cái đó cũng... là người giữ lời thề của con tàu này sao?",
						"thai": "หนีไม่พ้น สิ่งนั้นก็... ผู้รักษาสัญญาของเรือลำนี้ด้วยหรือ?",
						"hindi": "कोई बच नहीं सकता। क्या वह भी... इस जहाज के वादे का रखवाला है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야, 이바르?",
						"english": "What are you talking about, Ivar?",
						"japanese": "何を言っているんだ、イーヴァル？",
						"chinese": "你在说什么，伊瓦尔？",
						"french": "De quoi parles-tu, Ivar ?",
						"spanish": "¿De qué hablas, Ivar?",
						"vietnamese": "Anh đang nói gì vậy, Ivar?",
						"thai": "นายกำลังพูดอะไรอยู่, อีวาร์?",
						"hindi": "क्या कह रहे हो, इवार?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은 어디인가? 이 배가 찾던 답을 내가 먼저 찾겠다.",
						"english": "Where is the end of strength? I will find the answer this ship sought, first.",
						"japanese": "強さの果てはどこにある？この船が求めた答えを、私が先に見つけよう。",
						"chinese": "力量的尽头在哪里？我会先找到这艘船曾寻找的答案。",
						"french": "Où est la limite de la force ? Je trouverai la réponse que ce navire cherchait, en premier.",
						"spanish": "¿Dónde está el fin de la fuerza? Yo encontraré primero la respuesta que este barco buscaba.",
						"vietnamese": "Giới hạn của sức mạnh ở đâu? Ta sẽ tìm ra câu trả lời mà con tàu này đang tìm kiếm, trước tiên.",
						"thai": "จุดจบของความแข็งแกร่งอยู่ที่ใด? ข้าจะหาคำตอบที่เรือลำนี้ตามหาก่อน",
						"hindi": "शक्ति का अंत कहाँ है? इस जहाज ने जो जवाब खोजा था, उसे मैं पहले ढूंढूंगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "수천 년을 견딘 맹세라… 버겁군.",
						"english": "A vow that has endured millennia... it's overwhelming.",
						"japanese": "数千年を耐え抜いた誓いか… 重いな。",
						"chinese": "一个延续了数千年的誓言… 真是沉重。",
						"french": "Un serment qui a duré des millénaires... c'est accablant.",
						"spanish": "Un juramento que ha durado milenios... es abrumador.",
						"vietnamese": "Một lời thề đã tồn tại hàng thiên niên kỷ... thật nặng nề.",
						"thai": "คำสาบานที่คงอยู่มาหลายพันปี... มันหนักอึ้งจริงๆ",
						"hindi": "एक शपथ जो सहस्राब्दियों तक चली... यह बहुत भारी है।"
					}
				},
				{
					"content": {
						"korean": "힘들면 쉬어도 돼.",
						"english": "If it's hard, you can rest.",
						"japanese": "辛いなら休んでもいいよ。",
						"chinese": "如果累了，可以休息。",
						"french": "Si c'est difficile, tu peux te reposer.",
						"spanish": "Si es difícil, puedes descansar.",
						"vietnamese": "Nếu khó khăn, bạn có thể nghỉ ngơi.",
						"thai": "ถ้าเหนื่อยก็พักได้นะ",
						"hindi": "अगर मुश्किल है, तो तुम आराम कर सकते हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 멈추면, 이 배의 맹세도 영원히 지켜지지 못한다.",
						"english": "No. If we stop here, this ship's vow will never be kept.",
						"japanese": "いや。ここで止まれば、この船の誓いも永遠に守られない。",
						"chinese": "不。如果就此止步，这艘船的誓言将永远无法实现。",
						"french": "Non. Si nous nous arrêtons ici, le serment de ce navire ne sera jamais tenu.",
						"spanish": "No. Si nos detenemos aquí, el juramento de este barco nunca se cumplirá.",
						"vietnamese": "Không. Nếu chúng ta dừng lại ở đây, lời thề của con tàu này sẽ không bao giờ được giữ.",
						"thai": "ไม่ ถ้าเราหยุดตรงนี้ คำสาบานของเรือลำนี้ก็จะไม่ถูกรักษาตลอดไป",
						"hindi": "नहीं। अगर हम यहाँ रुकते हैं, तो इस जहाज का वादा कभी पूरा नहीं होगा।"
					}
				},
				{
					"content": {
						"korean": "나는 지켜본 전사. 끝까지 함께 맞선다.",
						"english": "I am the vigilant warrior. I will fight with you to the end.",
						"japanese": "私は見守る戦士。最後まで共に戦う。",
						"chinese": "我是守护的战士。与你并肩作战，直到最后。",
						"french": "Je suis le guerrier vigilant. Je me tiendrai à vos côtés jusqu'à la fin.",
						"spanish": "Soy el guerrero vigilante. Lucharé a tu lado hasta el final.",
						"vietnamese": "Ta là chiến binh canh gác. Ta sẽ cùng ngươi chiến đấu đến cùng.",
						"thai": "ข้าคือนักรบผู้พิทักษ์ ข้าจะต่อสู้เคียงข้างเจ้าจนถึงที่สุด",
						"hindi": "मैं चौकस योद्धा हूँ। अंत तक तुम्हारे साथ लड़ूंगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 선체 가장 깊은 곳. 맹세의 끝이 모습을 드러냈다.",
						"english": "Deep within the frozen hull. The end of the vow reveals itself.",
						"japanese": "凍てついた船体最深部。誓いの終わりが姿を現した。",
						"chinese": "在冰冻船体最深处。誓言的终结显现了。",
						"french": "Au plus profond de la coque gelée. La fin du serment se révèle.",
						"spanish": "En lo más profundo del casco congelado. El fin del juramento se revela.",
						"vietnamese": "Sâu thẳm trong thân tàu đóng băng. Hồi kết của lời thề đã hiện hình.",
						"thai": "ลึกที่สุดในตัวเรือที่แข็งเป็นน้ำแข็ง จุดจบของคำสาบานปรากฏขึ้นแล้ว",
						"hindi": "जमे हुए पतवार के सबसे गहरे हिस्से में। शपथ का अंत प्रकट हो गया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 것들. 여기서 모든 것이 끝이다.",
						"english": "Fools. This is where it all ends.",
						"japanese": "愚かな者たち。ここで全てが終わる。",
						"chinese": "愚蠢的家伙们。一切都将在此终结。",
						"french": "Imbéciles. Tout se termine ici.",
						"spanish": "Necios. Aquí es donde todo termina.",
						"vietnamese": "Lũ ngốc. Mọi thứ sẽ kết thúc tại đây.",
						"thai": "พวกโง่เง่า! ทุกสิ่งจะจบลงที่นี่",
						"hindi": "मूर्खों। यहीं सब कुछ खत्म होता है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "끝? 아니. 이제야 시작이다. 이 배의 맹세를 위한 나의 증명.",
						"english": "End? No. This is just the beginning. My proof for this ship's vow.",
						"japanese": "終わり？違う。これは始まりに過ぎない。この船の誓いへの私の証明だ。",
						"chinese": "结束？不。这只是开始。我为此船誓言的证明。",
						"french": "Fin ? Non. Ce n'est que le début. Ma preuve pour le serment de ce navire.",
						"spanish": "¿Fin? No. Esto es solo el principio. Mi prueba para el juramento de esta nave.",
						"vietnamese": "Kết thúc? Không. Đây mới chỉ là khởi đầu. Bằng chứng của ta cho lời thề của con tàu này.",
						"thai": "จบ? ไม่. นี่เป็นเพียงจุดเริ่มต้น หลักฐานของข้าสำหรับคำสาบานของเรือลำนี้",
						"hindi": "अंत? नहीं। यह तो बस शुरुआत है। इस जहाज की प्रतिज्ञा के लिए मेरा प्रमाण।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "도망칠 생각은 마라!",
						"english": "Don't even think about escaping!",
						"japanese": "逃げようなどと考えるな！",
						"chinese": "别想逃跑！",
						"french": "Ne songez même pas à fuir !",
						"spanish": "¡Ni se te ocurra escapar!",
						"vietnamese": "Đừng hòng trốn thoát!",
						"thai": "อย่าแม้แต่จะคิดหนี!",
						"hindi": "भागने की सोचना भी मत!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "정체 모를 적의 거대한 힘에 탐험대는 무릎 꿇었다.",
						"english": "The expedition team knelt before the immense power of an unknown enemy.",
						"japanese": "正体不明の敵の絶大な力の前に、探検隊はひざまずいた。",
						"chinese": "探险队在不明敌人的巨大力量面前屈服了。",
						"french": "L'équipe d'exploration s'est agenouillée devant l'immense pouvoir d'un ennemi inconnu.",
						"spanish": "El equipo de exploración se arrodilló ante el inmenso poder de un enemigo desconocido.",
						"vietnamese": "Đội thám hiểm đã quỳ gối trước sức mạnh to lớn của kẻ thù không rõ danh tính.",
						"thai": "คณะสำรวจคุกเข่าลงต่อหน้าพลังมหาศาลของศัตรูที่ไม่ทราบที่มา",
						"hindi": "अज्ञात शत्रु की असीम शक्ति के आगे अभियान दल घुटने टेक गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하찮은 것들. 너희에겐 맹세를 이해할 자격조차 없다.",
						"english": "Insignificant creatures. You are unworthy of even understanding the oath.",
						"japanese": "取るに足らぬ者ども。誓いを理解する資格すら、貴様らにはない。",
						"chinese": "卑微之物。尔等甚至不配理解此誓言。",
						"french": "Créatures insignifiantes. Vous n'êtes même pas dignes de comprendre ce serment.",
						"spanish": "Seres insignificantes. Ni siquiera merecéis comprender el juramento.",
						"vietnamese": "Những kẻ hèn mọn. Các ngươi không xứng đáng hiểu lời thề này.",
						"thai": "พวกไร้ค่า. เจ้าไม่มีสิทธิ์แม้แต่จะเข้าใจคำสาบานนี้",
						"hindi": "तुच्छ प्राणी। तुम इस शपथ को समझने के भी लायक नहीं हो।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "…아니. 맹세는 여기서 끝이 아니다. 다시 일어설 것이다.",
						"english": "...No. The oath does not end here. I will rise again.",
						"japanese": "…いや。誓いはここで終わらん。必ず、再び立ち上がろう。",
						"chinese": "…不。誓言不会在此终结。我将再次崛起。",
						"french": "...Non. Le serment ne s'arrête pas ici. Je me relèverai.",
						"spanish": "...No. El juramento no termina aquí. Me levantaré de nuevo.",
						"vietnamese": "...Không. Lời thề không kết thúc ở đây. Ta sẽ trỗi dậy một lần nữa.",
						"thai": "...ไม่. คำสาบานไม่ได้จบลงแค่นี้. ข้าจะลุกขึ้นอีกครั้ง",
						"hindi": "...नहीं। शपथ यहाँ समाप्त नहीं होती। मैं फिर से उठ खड़ा हूँगा।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 여기까지 온 것이냐. 어리석은….",
						"english": "...So, you've come this far after all. Foolish...",
						"japanese": "…結局、ここまで来たのか。愚かな…。",
						"chinese": "…最终，你还是走到这里了吗。愚蠢的…",
						"french": "...Finalement, vous êtes arrivé jusqu'ici. Imbécile...",
						"spanish": "...Así que, has llegado hasta aquí después de todo. Tonto...",
						"vietnamese": "...Cuối cùng, ngươi cũng đã đến đây sao. Thật ngốc nghếch...",
						"thai": "...ในที่สุด เจ้าก็มาถึงจุดนี้จนได้ สินะ เจ้าช่างโง่เง่า...",
						"hindi": "...तो, तुम इतनी दूर तक आ ही गए। मूर्ख..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "up",
					"duration_ms": 400,
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "…강함의 끝은 영광이 아니었다. 맹세를 지키는 것, 그 자체였다.",
						"english": "...The end of strength was not glory. It was the act of upholding the vow itself.",
						"japanese": "…強さの果ては栄光ではなかった。誓いを守ること、それ自体だった。",
						"chinese": "…力量的终点并非荣耀。而是坚守誓言本身。",
						"french": "...La fin de la force n'était pas la gloire. C'était l'acte de tenir le serment lui-même.",
						"spanish": "...El fin de la fuerza no era la gloria. Era el acto de mantener el juramento en sí mismo.",
						"vietnamese": "...Điểm cuối của sức mạnh không phải là vinh quang. Mà là việc giữ vững lời thề, chính nó.",
						"thai": "...จุดสิ้นสุดของความแข็งแกร่งไม่ใช่ความรุ่งโรจน์ แต่มันคือการรักษาคำสาบานต่างหาก",
						"hindi": "...शक्ति का अंत महिमा नहीं था। यह स्वयं प्रतिज्ञा को बनाए रखना था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이바르… 이제 알겠어?",
						"english": "Ivar... Do you understand now?",
						"japanese": "イーヴァル… もう分かったか？",
						"chinese": "伊瓦尔… 现在明白了吗？",
						"french": "Ivar... Tu comprends maintenant ?",
						"spanish": "Ivar... ¿Lo entiendes ahora?",
						"vietnamese": "Ivar... Bây giờ ngươi đã hiểu chưa?",
						"thai": "ไอวาร์... ตอนนี้เจ้าเข้าใจแล้วใช่ไหม?",
						"hindi": "ईवार... अब समझे?"
					}
				},
				{
					"content": {
						"korean": "지킬 수 없는 맹세에 평생을 바친 배. 그 비극은 비로소 회수되었다.",
						"english": "A ship that dedicated its life to an unbreakable vow. That tragedy has finally been reclaimed.",
						"japanese": "守れぬ誓いに生涯を捧げた船。その悲劇は、ついに回収された。",
						"chinese": "一艘船将一生献给了无法守护的誓言。那悲剧终于被挽回了。",
						"french": "Un navire qui a dédié sa vie à un serment impossible à tenir. Cette tragédie a enfin été récupérée.",
						"spanish": "Un barco que dedicó su vida a un juramento imposible de cumplir. Esa tragedia finalmente ha sido recuperada.",
						"vietnamese": "Một con tàu đã cống hiến cả đời cho một lời thề không thể giữ. Bi kịch đó cuối cùng đã được hóa giải.",
						"thai": "เรือที่อุทิศชีวิตให้กับคำสาบานที่ไม่อาจรักษาไว้ได้ โศกนาฏกรรมนั้นได้รับการกอบกู้คืนมาแล้ว",
						"hindi": "एक ऐसा जहाज जिसने अपना जीवन एक ऐसी प्रतिज्ञा को समर्पित कर दिया जिसे निभाया नहीं जा सकता था। वह त्रासदी आखिरकार वापस ले ली गई है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"용머리. 언제나 바다를 보던 존재.",
			"그러나 이곳에서, 용머리는 다른 곳을 향하고 있었다.",
			"닿지 못한 아스가르드. 그 영광의 땅을.",
			"이바르는 알았다. 이 배의 맹세가, 영원히 지킬 수 없음을."
		],
		"english": [
			"Dragon's Head. Always gazing at the sea.",
			"But here, the Dragon's Head faced elsewhere.",
			"Asgard, forever out of reach. That glorious land.",
			"Ivar knew. This ship's vow could not be kept forever."
		],
		"japanese": [
			"竜頭。常に海を見つめる存在。",
			"しかしここでは、竜頭は別の場所を向いていた。",
			"届かぬアスガルド。その栄光の地を。",
			"イヴァールは知っていた。この船の誓いが、永遠に守られぬことを。"
		],
		"chinese": [
			"龙首。始终凝望着大海的存在。",
			"然而在此，龙首却朝向别处。",
			"未曾抵达的阿斯加德。那片荣耀之地。",
			"伊瓦尔知晓。这艘船的誓言，终将无法永远守护。"
		],
		"french": [
			"La Tête de Dragon. Toujours tournée vers la mer.",
			"Mais ici, la Tête de Dragon faisait face à un autre endroit.",
			"Asgard, inaccessible. Cette terre de gloire.",
			"Ivar savait. Le serment de ce navire ne pouvait être tenu éternellement."
		],
		"spanish": [
			"Cabeza de Dragón. Siempre mirando al mar.",
			"Pero aquí, la Cabeza de Dragón miraba a otro lugar.",
			"Asgard, inalcanzable. Esa gloriosa tierra.",
			"Ivar lo sabía. La promesa de este barco no podría cumplirse eternamente."
		],
		"vietnamese": [
			"Đầu Rồng. Luôn hướng về biển cả.",
			"Nhưng ở đây, Đầu Rồng lại hướng về một nơi khác.",
			"Asgard, nơi không thể chạm tới. Vùng đất vinh quang ấy.",
			"Ivar biết. Lời thề của con thuyền này, sẽ không thể giữ mãi mãi."
		],
		"thai": [
			"หัวมังกร ผู้เฝ้ามองทะเลอยู่เสมอ",
			"แต่ที่นี่ หัวมังกรกลับหันไปทางอื่น",
			"แอสการ์ด ที่ไม่อาจเอื้อมถึง ดินแดนแห่งเกียรติยศนั้น",
			"ไอวาร์รู้ดีว่า คำสาบานของเรือลำนี้ ไม่อาจรักษาไว้ได้ตลอดไป"
		],
		"hindi": [
			"ड्रैगन का सिर। हमेशा समुद्र की ओर देखता हुआ।",
			"परंतु यहाँ, ड्रैगन का सिर कहीं और देख रहा था।",
			"अज़्गार्ड, जो कभी न पहुँच सका। उस गौरवमयी भूमि को।",
			"इवार जानता था। इस जहाज़ की शपथ, सदा के लिए निभाई नहीं जा सकती थी।"
		]
	}
} as const;
