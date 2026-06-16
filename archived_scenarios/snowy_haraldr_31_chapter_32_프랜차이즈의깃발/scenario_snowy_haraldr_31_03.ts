export const scenario_snowy_haraldr_31_03 = {
	"scenario_id": "snowy_haraldr_31_03",
	"order": 3,
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
					"emotion": "base",
					"content": {
						"korean": "설원 곳곳에 꽂힌 깃발. 땅이 차갑게 얼어붙었다.",
						"english": "Flags pierce the snowfield. The ground is frozen solid.",
						"japanese": "雪原のあちこちに刺さった旗。大地は冷たく凍りついた。",
						"chinese": "雪原上插满了旗帜。大地冰冷冻结。",
						"french": "Des drapeaux transpercent le champ de neige. Le sol est gelé.",
						"spanish": "Banderas se clavan en el campo de nieve. La tierra está congelada.",
						"vietnamese": "Cờ cắm khắp đồng tuyết. Đất đai đóng băng lạnh lẽo.",
						"thai": "ธงปักอยู่ทั่วทุ่งหิมะ ผืนดินเยือกแข็ง",
						"hindi": "बर्फीले मैदान में झंडे गड़े हैं। ज़मीन ठंड से जम गई है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Haraldr의 깃발이 또 늘었어.",
						"english": "Haraldr's flags have increased again.",
						"japanese": "ハラルドルの旗がまた増えた。",
						"chinese": "哈拉尔德的旗帜又增加了。",
						"french": "Les drapeaux de Haraldr ont encore augmenté.",
						"spanish": "Las banderas de Haraldr han aumentado de nuevo.",
						"vietnamese": "Cờ của Haraldr lại tăng thêm rồi.",
						"thai": "ธงของฮาราลด์เพิ่มขึ้นอีกแล้ว",
						"hindi": "हैराल्डर के झंडे फिर बढ़ गए हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "…대단한 집념이군. 영토를 확장하는 방식이.",
						"english": "...What persistence. The way he expands his territory.",
						"japanese": "…すごい執念だな。領土を広げるやり方が。",
						"chinese": "…真是惊人的执着。他扩张领土的方式。",
						"french": "...Quelle persévérance. Sa manière d'étendre son territoire.",
						"spanish": "...Qué persistencia. Su forma de expandir el territorio.",
						"vietnamese": "...Thật là một sự kiên trì đáng kinh ngạc. Cách hắn mở rộng lãnh thổ.",
						"thai": "...ช่างเป็นความมุ่งมั่นที่น่าทึ่ง วิธีการขยายอาณาเขตของเขา",
						"hindi": "...कितनी लगन है। जिस तरह से वह अपने क्षेत्र का विस्तार करता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "점포를 넓힌다고 하던데.",
						"english": "They say he's expanding his shops.",
						"japanese": "店を広げると言っていたが。",
						"chinese": "据说他正在扩大店铺。",
						"french": "On dit qu'il agrandit ses boutiques.",
						"spanish": "Dicen que está expandiendo sus tiendas.",
						"vietnamese": "Nghe nói hắn đang mở rộng cửa hàng.",
						"thai": "เขาบอกว่าจะขยายร้านค้า",
						"hindi": "वे कहते हैं कि वह अपनी दुकानें बढ़ा रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "판매가 곧 정복이라… 꽤나 익숙한 말이군.",
						"english": "Sales are conquest... A rather familiar phrase.",
						"japanese": "販売がすなわち征服とは…随分と聞き覚えのある言葉だな。",
						"chinese": "销售即征服……真是耳熟能详的话。",
						"french": "Les ventes sont une conquête... Une phrase assez familière.",
						"spanish": "Vender es conquistar... Una frase bastante familiar.",
						"vietnamese": "Bán hàng là chinh phục... Một câu nói khá quen thuộc.",
						"thai": "การขายคือการพิชิต... เป็นคำที่คุ้นเคยดี",
						"hindi": "बिक्री ही विजय है... यह काफी परिचित बात है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "깃발을 꽂는 자세… 저건 전사의 자세다.",
						"english": "The posture of planting flags... That's a warrior's stance.",
						"japanese": "旗を立てる姿勢…あれは戦士の姿勢だ。",
						"chinese": "插旗的姿势……那是个战士的姿势。",
						"french": "La posture de planter des drapeaux... C'est la posture d'un guerrier.",
						"spanish": "La postura de plantar banderas... Esa es la postura de un guerrero.",
						"vietnamese": "Tư thế cắm cờ... Đó là tư thế của một chiến binh.",
						"thai": "ท่าทางการปักธง... นั่นคือท่าทางของนักรบ",
						"hindi": "झंडे गाड़ने का तरीका... वह एक योद्धा की मुद्रा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "장사꾼이 아니라?",
						"english": "Not a merchant?",
						"japanese": "商人ではないのか？",
						"chinese": "不是商人？",
						"french": "Pas un marchand ?",
						"spanish": "¿No es un comerciante?",
						"vietnamese": "Không phải thương nhân sao?",
						"thai": "ไม่ใช่พ่อค้าหรือ?",
						"hindi": "व्यापारी नहीं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "영광을 좇는 자들의 몸짓이지.",
						"english": "It's the gesture of those who chase glory.",
						"japanese": "栄光を追う者たちの身振りだ。",
						"chinese": "这是追逐荣耀者的姿态。",
						"french": "C'est le geste de ceux qui cherchent la gloire.",
						"spanish": "Es el gesto de quienes persiguen la gloria.",
						"vietnamese": "Đó là động thái của những kẻ theo đuổi vinh quang.",
						"thai": "มันคือท่าทีของผู้ที่ไล่ตามความรุ่งโรจน์",
						"hindi": "यह गौरव के पीछे भागने वालों का हावभाव है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…내가 추구하던 것과 다를 바 없나.",
						"english": "...Is it no different from what I pursued?",
						"japanese": "…私が追い求めていたものと変わらないのか。",
						"chinese": "……这和我追求的没什么不同吗？",
						"french": "...N'est-ce pas différent de ce que je recherchais ?",
						"spanish": "¿...No es diferente de lo que yo buscaba?",
						"vietnamese": "...Liệu nó có khác gì so với những gì ta theo đuổi?",
						"thai": "...นี่ไม่ต่างจากสิ่งที่ฉันเคยแสวงหาเลยหรือ?",
						"hindi": "...क्या यह उससे अलग नहीं है जिसे मैं खोज रहा था?"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 끝없는 굶주림의 끝이… 저런 모습인가.",
						"english": "Is the end of this endless hunger... like that?",
						"japanese": "この終わりのない飢えの果てが…あの姿なのか。",
						"chinese": "这无尽饥饿的尽头……就是那副模样吗？",
						"french": "La fin de cette faim sans fin… est-ce cette forme ?",
						"spanish": "¿El fin de esta hambre insaciable... es así?",
						"vietnamese": "Cái kết của cơn đói khát vô tận này… là một hình hài như thế ư?",
						"thai": "จุดจบของความหิวโหยไม่สิ้นสุดนี้... คือรูปลักษณ์เช่นนั้นหรือ?",
						"hindi": "क्या इस अंतहीन भूख का अंत... वैसा ही है?"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. Haraldr의 그림자였다.",
						"english": "A giant shadow blocked the way. It was Haraldr's shadow.",
						"japanese": "巨大な影が道を塞いだ。Haraldrの影だった。",
						"chinese": "一道巨大的身影挡住了去路。那是Haraldr的影子。",
						"french": "Une ombre gigantesque bloquait le chemin. C'était l'ombre de Haraldr.",
						"spanish": "Una sombra gigante bloqueó el camino. Era la sombra de Haraldr.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là bóng của Haraldr.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือเงาของ Haraldr",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह Haraldr की छाया थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 영광은 끝없이 확장될 것이다.",
						"english": "The glory of {random_boss} will expand endlessly.",
						"japanese": "{random_boss}の栄光は限りなく広がるだろう。",
						"chinese": "{random_boss}的荣耀将无限扩张。",
						"french": "La gloire de {random_boss} s'étendra à l'infini.",
						"spanish": "La gloria de {random_boss} se expandirá sin fin.",
						"vietnamese": "Vinh quang của {random_boss} sẽ mở rộng vô tận.",
						"thai": "ความรุ่งโรจน์ของ {random_boss} จะขยายไปอย่างไม่มีที่สิ้นสุด",
						"hindi": "{random_boss} का गौरव अनंत तक फैलेगा।"
					}
				},
				{
					"content": {
						"korean": "모든 것을 사고팔아, 모든 것을 정복하리라.",
						"english": "Buy and sell everything, conquer everything.",
						"japanese": "全てを売り買いし、全てを征服するだろう。",
						"chinese": "可通过买卖一切来征服一切。",
						"french": "Tout acheter et vendre, tout conquérir.",
						"spanish": "Comprar y venderlo todo, conquistarlo todo.",
						"vietnamese": "Mua bán mọi thứ, chinh phục mọi thứ.",
						"thai": "ซื้อขายทุกสิ่ง, พิชิตทุกสิ่ง",
						"hindi": "सब कुछ खरीदो और बेचो, सब कुछ जीत लो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "…저것이 강함의 끝인가.",
						"english": "...Is that the end of strength?",
						"japanese": "…あれが強さの果てなのか。",
						"chinese": "……那就是强大的终点吗？",
						"french": "...Est-ce la fin de la force ?",
						"spanish": "¿...Es ese el fin de la fuerza?",
						"vietnamese": "...Đó có phải là giới hạn của sức mạnh?",
						"thai": "...นั่นคือจุดสิ้นสุดของความแข็งแกร่งหรือ?",
						"hindi": "...क्या वही शक्ति का अंत है?"
					}
				},
				{
					"content": {
						"korean": "아니야. 그럴 리 없어.",
						"english": "No. It can't be.",
						"japanese": "違う。そんなはずはない。",
						"chinese": "不。不可能。",
						"french": "Non. Ce n'est pas possible.",
						"spanish": "No. No puede ser.",
						"vietnamese": "Không. Không thể nào.",
						"thai": "ไม่ ไม่จริง",
						"hindi": "नहीं। ऐसा नहीं हो सकता।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "나의 영광도, 결국 이 길을 따라가는 건가.",
						"english": "Will my glory, too, follow this path in the end?",
						"japanese": "私の栄光も、結局この道を辿るのか。",
						"chinese": "我的荣耀，最终也会沿着这条路走下去吗？",
						"french": "Ma gloire, elle aussi, finira par suivre cette voie ?",
						"spanish": "¿Mi gloria también seguirá este camino al final?",
						"vietnamese": "Liệu vinh quang của ta, cuối cùng cũng sẽ theo con đường này?",
						"thai": "เกียรติยศของข้า, ในที่สุดก็จะตามทางนี้ไปเช่นกันหรือ?",
						"hindi": "क्या मेरी महिमा भी, अंततः इसी मार्ग का अनुसरण करेगी?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "깃발 아래, 땅은 더 깊이 얼어붙었다. 생명의 흔적이 사라졌다.",
						"english": "Under the banner, the land froze deeper. Traces of life vanished.",
						"japanese": "旗の下、大地はさらに深く凍てついた。生命の痕跡は消え去った。",
						"chinese": "在旗帜下，大地冻结得更深。生命的痕迹消失了。",
						"french": "Sous la bannière, la terre gela plus profondément. Toute trace de vie disparut.",
						"spanish": "Bajo el estandarte, la tierra se congeló más profundamente. Los rastros de vida desaparecieron.",
						"vietnamese": "Dưới lá cờ, mặt đất đóng băng sâu hơn. Dấu vết của sự sống biến mất.",
						"thai": "ใต้ธง, พื้นดินเยือกแข็งลึกลงไปอีก. ร่องรอยของชีวิตหายไปหมดสิ้น.",
						"hindi": "झंडे के नीचे, धरती और गहरी जम गई। जीवन के निशान मिट गए।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "정말 모든 걸 얼려버릴 작정인가.",
						"english": "Do they truly intend to freeze everything?",
						"japanese": "本当に全てを凍らせるつもりなのか。",
						"chinese": "他们真的打算把一切都冻结吗？",
						"french": "Ont-ils vraiment l'intention de tout geler ?",
						"spanish": "¿De verdad pretenden congelarlo todo?",
						"vietnamese": "Họ thực sự định đóng băng mọi thứ sao?",
						"thai": "พวกเขาตั้งใจจะแช่แข็งทุกสิ่งอย่างนั้นหรือ?",
						"hindi": "क्या वे सचमुच सब कुछ जमा देने वाले हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "…저항하는 자는 모두 '경쟁자'라 불리고 묻혔더군.",
						"english": "...All who resisted were called 'rivals' and buried.",
						"japanese": "…抵抗する者は皆、『競争者』と呼ばれ葬られたそうだ。",
						"chinese": "……所有反抗者都被称为“竞争者”并被埋葬了。",
						"french": "...Tous ceux qui résistèrent furent appelés 'rivaux' et enterrés.",
						"spanish": "...Todos los que se resistieron fueron llamados 'rivales' y enterrados.",
						"vietnamese": "...Tất cả những ai chống đối đều bị gọi là 'đối thủ' và bị chôn vùi.",
						"thai": "...ทุกคนที่ต่อต้านถูกเรียกว่า 'คู่แข่ง' และถูกฝังไปแล้ว.",
						"hindi": "...सभी विरोधियों को 'प्रतिद्वंद्वी' कहा गया और दफना दिया गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "영광을 좇던 내 과거와 다를 바 없는 모습에… 역겨움이 치민다.",
						"english": "This sight, no different from my glory-seeking past... fills me with disgust.",
						"japanese": "栄光を追い求めた私の過去と何ら変わらない姿に…吐き気がする。",
						"chinese": "这景象，与我追求荣耀的过去并无二致……令我作呕。",
						"french": "Cette vision, si semblable à mon passé en quête de gloire... m'emplit de dégoût.",
						"spanish": "Esta visión, idéntica a mi pasado buscando gloria... me llena de asco.",
						"vietnamese": "Cảnh tượng này, không khác gì quá khứ theo đuổi vinh quang của ta... khiến ta ghê tởm.",
						"thai": "ภาพนี้, ไม่ต่างอะไรกับอดีตที่ข้าไล่ตามเกียรติยศ... ทำให้ข้ารู้สึกขยะแขยง.",
						"hindi": "यह नज़ारा, मेरे गौरव-खोजी अतीत से अलग नहीं... मुझे घृणा से भर देता है।"
					},
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우린 그게 아니잖아.",
						"english": "We're not like them, are we?",
						"japanese": "我々はそうじゃないだろう。",
						"chinese": "我们不是那样的，对吧？",
						"french": "Nous ne sommes pas comme ça, n'est-ce pas ?",
						"spanish": "Nosotros no somos así, ¿verdad?",
						"vietnamese": "Chúng ta không phải như vậy, phải không?",
						"thai": "เราไม่เหมือนพวกเขา, ใช่ไหม?",
						"hindi": "हम वैसे नहीं हैं, है ना?"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "…아직은.",
						"english": "...Not yet.",
						"japanese": "…まだは。",
						"chinese": "……还没。",
						"french": "...Pas encore.",
						"spanish": "...Todavía no.",
						"vietnamese": "...Chưa.",
						"thai": "...ยังไม่.",
						"hindi": "...अभी तक नहीं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "Haraldr의 가장 큰 깃발이 꽂힌 곳. 그 거대한 그림자가 나타났다.",
						"english": "Where Haraldr's largest banner was planted. Its colossal shadow appeared.",
						"japanese": "Haraldrの最も大きな旗が立てられた場所。その巨大な影が現れた。",
						"chinese": "Haraldr最大旗帜插立之地。那巨大的阴影出现了。",
						"french": "Là où la plus grande bannière de Haraldr était plantée. Son ombre colossale apparut.",
						"spanish": "Donde la bandera más grande de Haraldr fue plantada. Su sombra colosal apareció.",
						"vietnamese": "Nơi lá cờ lớn nhất của Haraldr được cắm. Bóng tối khổng lồ của nó xuất hiện.",
						"thai": "ที่ซึ่งธงผืนใหญ่ที่สุดของ Haraldr ปักอยู่. เงาอันมหึมาของมันปรากฏขึ้น.",
						"hindi": "जहाँ हरल्ड्र का सबसे बड़ा झंडा फहराया गया था। उसकी विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 눈에 욕망이 보인다. 우리와 같은 전사여.",
						"english": "I see desire in your eyes, warrior, just like us.",
						"japanese": "貴様の目に欲望が見える。我々と同じ戦士よ。",
						"chinese": "我看到你眼中欲望，和我们一样的战士。",
						"french": "Je vois le désir dans tes yeux, guerrier, comme nous.",
						"spanish": "Veo deseo en tus ojos, guerrero, igual que en los nuestros.",
						"vietnamese": "Ta thấy dục vọng trong mắt ngươi, hỡi chiến binh, giống như chúng ta.",
						"thai": "ข้าเห็นความปรารถนาในดวงตาของเจ้า, นักรบ, เหมือนพวกเรา.",
						"hindi": "तुम्हारी आँखों में वासना दिखती है, योद्धा, ठीक हम जैसी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "판매는 정복이고, 정복은 영광이다. 너도 결국 이 길을 따를 것이다.",
						"english": "Sales are conquest, and conquest is glory. You, too, will eventually follow this path.",
						"japanese": "販売は征服であり、征服は栄光だ。貴様も結局この道を辿るだろう。",
						"chinese": "销售是征服，征服是荣耀。你最终也会走上这条路。",
						"french": "La vente est conquête, et la conquête est gloire. Toi aussi, tu finiras par suivre cette voie.",
						"spanish": "La venta es conquista, y la conquista es gloria. Tú también seguirás este camino al final.",
						"vietnamese": "Bán hàng là chinh phục, và chinh phục là vinh quang. Ngươi cũng sẽ theo con đường này thôi.",
						"thai": "การขายคือการพิชิต, และการพิชิตคือเกียรติยศ. เจ้าเองก็จะตามทางนี้ในที่สุด.",
						"hindi": "बिक्री विजय है, और विजय महिमा है। तुम भी अंततः इसी मार्ग का अनुसरण करोगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 이바르는 그렇게 되지 않아.",
						"english": "No. Ivar won't become like that.",
						"japanese": "いや。イヴァールはそうはならない。",
						"chinese": "不。伊瓦尔不会变成那样。",
						"french": "Non. Ivar ne finira pas comme ça.",
						"spanish": "No. Ivar no terminará así.",
						"vietnamese": "Không. Ivar sẽ không như vậy đâu.",
						"thai": "ไม่. ไอบาร์จะไม่เป็นอย่างนั้นหรอก.",
						"hindi": "नहीं। इवर वैसा नहीं होगा।"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우린 너희와 달라!",
						"english": "We're not like you!",
						"japanese": "我々は貴様らとは違う！",
						"chinese": "我们和你们不一样！",
						"french": "Nous sommes différents de vous !",
						"spanish": "¡Somos diferentes a vosotros!",
						"vietnamese": "Chúng ta khác với các ngươi!",
						"thai": "เราไม่เหมือนพวกเจ้า!",
						"hindi": "हम तुमसे अलग हैं!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네가 아무리 발버둥쳐도… 끝은 똑같다. 영광은 이 길뿐이다.",
						"english": "No matter how much you struggle... the end is the same. Glory is only through this path.",
						"japanese": "お前がどれだけもがいても… 終わりは同じだ。栄光はこの道だけだ。",
						"chinese": "无论你如何挣扎……结局都一样。荣耀只此一途。",
						"french": "Peu importe combien tu luttes... la fin est la même. La gloire ne passe que par ce chemin.",
						"spanish": "Por mucho que te esfuerces... el final es el mismo. La gloria solo está en este camino.",
						"vietnamese": "Ngươi có vùng vẫy thế nào đi nữa... kết cục cũng vậy thôi. Vinh quang chỉ có con đường này.",
						"thai": "ไม่ว่าเจ้าจะดิ้นรนแค่ไหน... จุดจบก็เหมือนกัน เกียรติยศมีแต่เส้นทางนี้เท่านั้น",
						"hindi": "तुम कितना भी संघर्ष कर लो... अंत वही है। महिमा का मार्ग केवल यही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 아직 끝나지 않았어.",
						"english": "...No. It's not over yet.",
						"japanese": "…いや。まだ終わってない。",
						"chinese": "……不。还没结束。",
						"french": "...Non. Ce n'est pas encore fini.",
						"spanish": "...No. Aún no ha terminado.",
						"vietnamese": "...Không. Vẫn chưa kết thúc đâu.",
						"thai": "...ไม่. ยังไม่จบ.",
						"hindi": "...नहीं। अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "다시… 다시 시작한다.",
						"english": "Again... I'll start again.",
						"japanese": "もう一度… やり直す。",
						"chinese": "再次… 再次开始。",
						"french": "Encore... je recommence.",
						"spanish": "De nuevo... empezaré de nuevo.",
						"vietnamese": "Lại một lần nữa... ta sẽ bắt đầu lại.",
						"thai": "อีกครั้ง... จะเริ่มใหม่อีกครั้ง.",
						"hindi": "फिर से... फिर से शुरू करता हूँ।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크으… 언젠가… 너의 영광도… 우리와 같아질 것이다….",
						"english": "Ugh... Someday... your glory too... will be like ours...",
						"japanese": "くぅ… いつか… お前の栄光も… 我らと同じになるだろう…。",
						"chinese": "哼… 总有一天… 你的荣耀… 也会像我们一样……",
						"french": "Ugh... Un jour... ta gloire aussi... sera comme la nôtre...",
						"spanish": "Ugh... Algún día... tu gloria también... será como la nuestra...",
						"vietnamese": "Khừ... Một ngày nào đó... vinh quang của ngươi... cũng sẽ giống như của chúng ta...",
						"thai": "อึก... สักวัน... เกียรติยศของเจ้า... ก็จะเหมือนของเรา...",
						"hindi": "उफ़... किसी दिन... तुम्हारी महिमा भी... हमारी जैसी होगी..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…헛소리 마라.",
						"english": "...Stop spouting nonsense.",
						"japanese": "…戯言を言うな。",
						"chinese": "……别胡说八道了。",
						"french": "...Ne dis pas de bêtises.",
						"spanish": "...No digas tonterías.",
						"vietnamese": "...Đừng nói nhảm.",
						"thai": "...อย่าพูดเหลวไหล.",
						"hindi": "...बकवास बंद करो।"
					},
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것으로 하나 막았다.",
						"english": "That's one down.",
						"japanese": "これで一つ防いだ。",
						"chinese": "这下我们挡住了一个。",
						"french": "C'est un de moins.",
						"spanish": "Uno menos.",
						"vietnamese": "Vậy là đã ngăn chặn được một.",
						"thai": "นี่คือหนึ่งที่เราสกัดไว้ได้แล้ว.",
						"hindi": "एक को रोक दिया।"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하나의 깃발이 쓰러졌지만, 더 많은 경쟁자들이 눈밭에 묻혀 있었다.",
						"english": "One flag fell, but more rivals lay buried in the snow.",
						"japanese": "一つの旗は倒れたが、より多くの競争者たちが雪の中に埋もれていた。",
						"chinese": "一面旗帜倒下了，但更多的竞争者们被埋在雪地里。",
						"french": "Un drapeau est tombé, mais d'autres rivaux gisaient enfouis dans la neige.",
						"spanish": "Una bandera cayó, pero más rivales yacían enterrados en la nieve.",
						"vietnamese": "Một lá cờ đã đổ, nhưng nhiều đối thủ khác vẫn còn vùi trong tuyết.",
						"thai": "ธงหนึ่งผืนล้มลง แต่คู่แข่งอีกมากมายถูกฝังอยู่ในหิมะ",
						"hindi": "एक झंडा गिर गया, लेकिन और भी प्रतिद्वंद्वी बर्फ में दबे पड़े थे।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원, 깃발이 꽂힌 땅은 전부 그의 것이 된다.",
			"장사꾼의 탈을 쓴 정복자, Haraldr.",
			"그러나 그에게서 익숙한 얼굴을 본 이가 있었다.",
			"영광을 좇던 자신, 그리고 얼어붙은 숲의 진실."
		],
		"english": [
			"Snowfield. Every land marked by a flag becomes his.",
			"Haraldr, a conqueror in merchant's disguise.",
			"Yet, there was one who saw a familiar face in him.",
			"His former self, pursuing glory, and the truth of the frozen forest."
		],
		"japanese": [
			"雪原。旗が刺さった土地は全て彼のものとなる。",
			"商人の仮面をかぶった征服者、ハラルドル。",
			"しかし、彼に馴染みのある顔を見た者がいた。",
			"栄光を追い求めていた自分自身、そして凍てついた森の真実。"
		],
		"chinese": [
			"雪原。插上旗帜的土地，都将归他所有。",
			"商人面具下的征服者，哈拉尔德。",
			"然而，有人在他身上看到了熟悉的面孔。",
			"追逐荣耀的自己，以及冰冻森林的真相。"
		],
		"french": [
			"Champ de neige. Chaque terre marquée d'un drapeau devient sienne.",
			"Haraldr, un conquérant déguisé en marchand.",
			"Pourtant, quelqu'un reconnut en lui un visage familier.",
			"Son ancien lui, en quête de gloire, et la vérité de la forêt gelée."
		],
		"spanish": [
			"Campo de nieve. Toda tierra marcada con una bandera se convierte en suya.",
			"Haraldr, un conquistador disfrazado de mercader.",
			"Sin embargo, hubo quien vio un rostro familiar en él.",
			"Su antiguo yo, persiguiendo la gloria, y la verdad del bosque congelado."
		],
		"vietnamese": [
			"Đồng tuyết. Mọi vùng đất cắm cờ đều trở thành của hắn.",
			"Haraldr, kẻ chinh phục đội lốt thương nhân.",
			"Tuy nhiên, có người đã nhìn thấy một gương mặt quen thuộc ở hắn.",
			"Bản thân từng theo đuổi vinh quang, và sự thật về khu rừng đóng băng."
		],
		"thai": [
			"ทุ่งหิมะ ดินแดนใดที่ปักธงลงไป ล้วนเป็นของเขา",
			"ฮาราลด์ ผู้พิชิตในคราบพ่อค้า",
			"ทว่า มีผู้หนึ่งมองเห็นใบหน้าที่คุ้นเคยในตัวเขา",
			"ตัวตนในอดีตที่เคยแสวงหาเกียรติยศ และความจริงของป่าที่ถูกแช่แข็ง"
		],
		"hindi": [
			"बर्फीला मैदान। हर वह ज़मीन जहाँ झंडा गड़ा है, उसकी हो जाती है।",
			"व्यापारी के वेश में एक विजेता, हैराल्डर।",
			"फिर भी, कोई ऐसा था जिसने उसमें एक परिचित चेहरा देखा।",
			"स्वयं को गौरव की तलाश में, और जमे हुए जंगल का सच।"
		]
	}
} as const;
