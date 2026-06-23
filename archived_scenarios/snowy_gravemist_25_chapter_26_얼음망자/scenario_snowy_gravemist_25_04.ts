export const scenario_snowy_gravemist_25_04 = {
	"scenario_id": "snowy_gravemist_25_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라가 걷히자 얼어붙은 뱃머리가 나타났다. 거대한 선박은 침묵 속에 잠겨 있었다.",
						"english": "As the blizzard cleared, the frozen bow of the ship appeared. The massive vessel was shrouded in silence.",
						"japanese": "吹雪が晴れると、凍てついた船首が現れた。巨大な船は沈黙に包まれていた。",
						"chinese": "暴风雪消散后，冰冷的船头显现。巨大的船只沉浸在寂静之中。",
						"french": "Alors que le blizzard se dissipait, la proue gelée du navire apparut. L'immense vaisseau était enveloppé de silence.",
						"spanish": "Cuando la ventisca se disipó, apareció la proa congelada del barco. La enorme embarcación estaba sumida en el silencio.",
						"vietnamese": "Khi bão tuyết tan, mũi tàu đóng băng hiện ra. Con tàu khổng lồ chìm trong im lặng.",
						"thai": "เมื่อพายุหิมะสงบลง หัวเรือที่ถูกแช่แข็งก็ปรากฏขึ้น เรือขนาดมหึมาปกคลุมไปด้วยความเงียบ",
						"hindi": "जैसे ही बर्फीला तूफान साफ हुआ, जहाज का जमा हुआ अगला हिस्सा दिखाई दिया। विशाल पोत खामोशी में डूबा हुआ था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이 배에 망자들이 있다고?",
						"english": "Dead souls on this ship?",
						"japanese": "この船に、亡者たちがいるのか？",
						"chinese": "这艘船上有亡者？",
						"french": "Des âmes mortes sur ce navire ?",
						"spanish": "¿Almas muertas en este barco?",
						"vietnamese": "Linh hồn người chết trên con tàu này?",
						"thai": "วิญญาณคนตายอยู่บนเรือลำนี้หรือ?",
						"hindi": "इस जहाज पर मृत आत्माएं?"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "(나직이 흥얼거린다. '끝없는 여정, 정착할 수 없는 땅…')",
						"english": "(Humming softly. \"An endless journey, a land where one cannot settle...\")",
						"japanese": "(静かに鼻歌を歌う。「果てなき旅路、定まることなき地…」)",
						"chinese": "(轻声哼唱着。“无尽的旅程，无法安定的土地……”)",
						"french": "(Fredonne doucement. \"Un voyage sans fin, une terre où l'on ne peut s'établir...\")",
						"spanish": "(Tararea suavemente. \"Un viaje sin fin, una tierra donde uno no puede establecerse...\")",
						"vietnamese": "(Khẽ ngân nga. \"Một hành trình vô tận, một vùng đất không thể định cư...\")",
						"thai": "(ฮัมเพลงเบาๆ \"การเดินทางที่ไม่มีที่สิ้นสุด ดินแดนที่ไม่มีใครตั้งรกรากได้...\")",
						"hindi": "(धीमे से गुनगुनाता है। \"एक अंतहीन यात्रा, एक ऐसी भूमि जहां कोई बस नहीं सकता...\")"
					}
				},
				{
					"content": {
						"korean": "…누구야.",
						"english": "...Who's there?",
						"japanese": "……誰だ。",
						"chinese": "……是谁。",
						"french": "...Qui est là ?",
						"spanish": "...¿Quién está ahí?",
						"vietnamese": "...Ai đó.",
						"thai": "...ใครน่ะ",
						"hindi": "...कौन है?"
					},
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흐음? 아아, 이 배의 손님인가.",
						"english": "Hmm? Ah, a guest on this ship.",
						"japanese": "ふむ？ああ、この船の客か。",
						"chinese": "嗯？哦，是这艘船的客人啊。",
						"french": "Hmm ? Ah, un invité sur ce navire.",
						"spanish": "¿Hmm? Ah, ¿un invitado en este barco?",
						"vietnamese": "Hừm? À, là khách của con tàu này sao.",
						"thai": "หืม? อ้อ แขกของเรือลำนี้เหรอ",
						"hindi": "ह्म्म? ओह, इस जहाज का मेहमान।"
					}
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "난 힐드. 그저 이 슬픈 노래를 따라 표류하던 자.",
						"english": "I am Hild. Merely one who drifted along with this sorrowful song.",
						"japanese": "私はヒルド。ただ、この悲しい歌に導かれ漂流していた者。",
						"chinese": "我是希尔德。只是一个随着这悲伤之歌漂流的人。",
						"french": "Je suis Hild. Simplement quelqu'un qui a dérivé avec cette triste chanson.",
						"spanish": "Soy Hild. Simplemente alguien que se dejó llevar por esta triste canción.",
						"vietnamese": "Tôi là Hild. Chỉ là một kẻ trôi dạt theo bài hát buồn này.",
						"thai": "ฉันคือฮิลด์ เพียงผู้ที่ล่องลอยไปตามบทเพลงอันเศร้าโศกนี้",
						"hindi": "मैं हिल्ड हूं। बस वही जो इस दुखद गीत के साथ बहता रहा।"
					}
				},
				{
					"content": {
						"korean": "이 배의 영혼들은 멈출 줄 몰라. 영원히 이 얼음을 떠도는 순례자들.",
						"english": "The souls on this ship never stop. Pilgrims eternally adrift on this ice.",
						"japanese": "この船の魂は止まることを知らない。永遠にこの氷を彷徨う巡礼者たち。",
						"chinese": "这艘船上的灵魂永不停止。永远漂流在这冰上的朝圣者。",
						"french": "Les âmes de ce navire ne s'arrêtent jamais. Des pèlerins errant éternellement sur cette glace.",
						"spanish": "Las almas de este barco nunca se detienen. Peregrinos a la deriva eternamente en este hielo.",
						"vietnamese": "Những linh hồn trên con tàu này không ngừng nghỉ. Những lữ khách vĩnh viễn trôi dạt trên băng này.",
						"thai": "วิญญาณบนเรือลำนี้ไม่เคยหยุดนิ่ง ผู้แสวงบุญที่ล่องลอยอยู่บนน้ำแข็งนี้ตลอดไป",
						"hindi": "इस जहाज पर आत्माएं कभी नहीं रुकतीं। इस बर्फ पर हमेशा के लिए भटकने वाले तीर्थयात्री।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "오래전부터 그랬지. 배가 떠나려 할 때마다 합창이 들려와.",
						"english": "It's been like that for a long time. Every time the ship tries to leave, a chorus is heard.",
						"japanese": "ずっと昔からそうだった。船が出航しようとするたびに、合唱が聞こえてくる。",
						"chinese": "很久以前就是这样。每次船要启航时，都会听到一阵合唱。",
						"french": "Cela fait longtemps que c'est comme ça. Chaque fois que le navire tente de partir, on entend un chœur.",
						"spanish": "Ha sido así desde hace mucho. Cada vez que el barco intenta partir, se escucha un coro.",
						"vietnamese": "Đã từ rất lâu rồi. Mỗi khi con tàu muốn rời đi, một khúc ca lại vang lên.",
						"thai": "มันเป็นแบบนั้นมานานแล้ว ทุกครั้งที่เรือพยายามจะออกไป เสียงประสานก็จะดังขึ้น",
						"hindi": "यह बहुत पहले से ऐसा ही है। हर बार जब जहाज निकलने की कोशिश करता है, एक कोरस सुनाई देता है।"
					}
				},
				{
					"content": {
						"korean": "영원히 묶여있으라는… 저주 같은 노래.",
						"english": "A song like a curse... to be bound forever.",
						"japanese": "永遠に縛られろと…呪いのような歌。",
						"chinese": "一首像诅咒一样的歌……要永远被束缚。",
						"french": "Une chanson comme une malédiction... pour être lié à jamais.",
						"spanish": "Una canción como una maldición... para estar atado para siempre.",
						"vietnamese": "Một bài hát như lời nguyền... để bị ràng buộc vĩnh viễn.",
						"thai": "เพลงเหมือนคำสาป... ให้ถูกผูกมัดไว้ตลอดไป",
						"hindi": "एक शाप जैसा गीत... हमेशा के लिए बंधे रहने का।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "저주라고?",
						"english": "A curse?",
						"japanese": "呪いだと？",
						"chinese": "诅咒？",
						"french": "Une malédiction ?",
						"spanish": "¿Una maldición?",
						"vietnamese": "Lời nguyền ư?",
						"thai": "คำสาปเหรอ?",
						"hindi": "एक शाप?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "…그래. 끝나지 않는 순례의 징표.",
						"english": "...Yes. A mark of an endless pilgrimage.",
						"japanese": "…ああ。終わらない巡礼の証。",
						"chinese": "……是的。无尽朝圣的印记。",
						"french": "...Oui. Le signe d'un pèlerinage sans fin.",
						"spanish": "...Sí. La marca de una peregrinación interminable.",
						"vietnamese": "...Đúng vậy. Dấu hiệu của một cuộc hành hương không hồi kết.",
						"thai": "...ใช่ สัญลักษณ์ของการแสวงบุญที่ไม่มีที่สิ้นสุด",
						"hindi": "...हाँ। एक अंतहीन तीर्थयात्रा का निशान।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "우린 이걸 끊을 수 있어.",
						"english": "We can break this.",
						"japanese": "我々はこれを断ち切れる。",
						"chinese": "我们可以打破它。",
						"french": "Nous pouvons briser cela.",
						"spanish": "Podemos romper esto.",
						"vietnamese": "Chúng ta có thể phá vỡ điều này.",
						"thai": "เราสามารถทำลายสิ่งนี้ได้",
						"hindi": "हम इसे तोड़ सकते हैं।"
					},
					"speaker": "character_2",
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
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "(노래를 흥얼거린다. '끝없는 여정, 정착할 수 없는 땅. 망자의 순례는 끝나지 않으리…')",
						"english": "(Hums a song. 'Endless journey, land where one cannot settle. The pilgrimage of the dead shall not end...')",
						"japanese": "(歌を口ずさむ。「終わりのない旅路、定住できない地。死者の巡礼は終わらない…」)",
						"chinese": "（哼着歌。《无尽的旅程，无法安居的土地。亡者的朝圣永不结束……》）",
						"french": "(Fredonne une chanson. « Voyage sans fin, terre où l'on ne peut s'établir. Le pèlerinage des morts ne prendra pas fin... »)",
						"spanish": "(Tararea una canción. \"Viaje sin fin, tierra donde no se puede asentar. La peregrinación de los muertos no terminará...\")",
						"vietnamese": "(Ngâm nga một bài hát. 'Hành trình bất tận, vùng đất không thể định cư. Cuộc hành hương của người chết sẽ không kết thúc...')",
						"thai": "(ฮัมเพลง 'การเดินทางที่ไม่สิ้นสุด ดินแดนที่ไม่อาจตั้งรกราก การแสวงบุญของผู้ตายจะไม่มีวันสิ้นสุด...')",
						"hindi": "(एक गाना गुनगुनाता है। 'अंतहीन यात्रा, वह भूमि जहाँ कोई बस नहीं सकता। मृतकों की तीर्थयात्रा समाप्त नहीं होगी...')"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 노래… 무슨 뜻이야?",
						"english": "That song... what does it mean?",
						"japanese": "その歌…どういう意味だ？",
						"chinese": "那首歌……是什么意思？",
						"french": "Cette chanson... qu'est-ce que ça veut dire ?",
						"spanish": "Esa canción... ¿qué significa?",
						"vietnamese": "Bài hát đó... có ý nghĩa gì?",
						"thai": "เพลงนั้น... หมายความว่าอะไร?",
						"hindi": "वह गाना... उसका क्या मतलब है?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "말 그대로야. 이 배는 영원히 떠다녀야 해.",
						"english": "Exactly as it says. This ship must drift forever.",
						"japanese": "文字通りだ。この船は永遠に漂い続けなければならない。",
						"chinese": "字面意思。这艘船必须永远漂浮。",
						"french": "C'est littéralement ça. Ce navire doit dériver éternellement.",
						"spanish": "Literalmente. Este barco debe flotar para siempre.",
						"vietnamese": "Đúng như lời nói. Con tàu này phải trôi dạt mãi mãi.",
						"thai": "ตามตัวอักษร เรือลำนี้จะต้องลอยไปตลอดกาล",
						"hindi": "बिलकुल जैसा यह कहता है। इस जहाज को हमेशा तैरते रहना होगा।"
					}
				},
				{
					"content": {
						"korean": "망자들은 안식을 얻지 못하고, 살아있는 자도 이곳에 갇히면…",
						"english": "The dead find no rest, and if the living are trapped here...",
						"japanese": "死者は安息を得られず、生きている者もここに閉じ込められれば…",
						"chinese": "死者得不到安息，如果生者被困在这里……",
						"french": "Les morts ne trouvent pas le repos, et si les vivants sont piégés ici...",
						"spanish": "Los muertos no encuentran descanso, y si los vivos quedan atrapados aquí...",
						"vietnamese": "Người chết không tìm thấy sự yên nghỉ, và nếu người sống bị mắc kẹt ở đây...",
						"thai": "ผู้ตายไม่พบความสงบ และหากผู้ที่ยังมีชีวิตอยู่ติดอยู่ที่นี่...",
						"hindi": "मृतकों को शांति नहीं मिलती, और यदि जीवित लोग यहां फंस जाएं..."
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그들의 순례를 이어받게 될 거야.",
						"english": "You will inherit their pilgrimage.",
						"japanese": "彼らの巡礼を受け継ぐことになるだろう。",
						"chinese": "你将继承他们的朝圣。",
						"french": "Tu hériteras de leur pèlerinage.",
						"spanish": "Heredarás su peregrinaje.",
						"vietnamese": "Ngươi sẽ tiếp nối cuộc hành hương của họ.",
						"thai": "เจ้าจะสืบทอดการจาริกแสวงบุญของพวกเขา.",
						"hindi": "तुम उनकी तीर्थयात्रा विरासत में पाओगे।"
					}
				},
				{
					"content": {
						"korean": "그럴 리 없어!",
						"english": "No way!",
						"japanese": "まさか！",
						"chinese": "不可能！",
						"french": "Impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "ไม่มีทาง!",
						"hindi": "ऐसा हो नहीं सकता!"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…흐음. 부디 그러길 바라지.",
						"english": "...Hmm. I hope so.",
						"japanese": "…ふむ。そうだといいが。",
						"chinese": "……嗯。希望如此吧。",
						"french": "...Hmm. J'espère que oui.",
						"spanish": "...Mmm. Espero que así sea.",
						"vietnamese": "...Hmm. Mong là vậy.",
						"thai": "...อืมม์ หวังว่าจะเป็นอย่างนั้นนะ.",
						"hindi": "...हम्म। आशा करता हूँ।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "눈보라가 더 거세졌어. 망자들의 울음소리가 더 가까워지는군.",
						"english": "The blizzard has grown fiercer. The wails of the dead draw closer.",
						"japanese": "吹雪がさらに激しくなった。亡者たちの叫び声が近づいてくる。",
						"chinese": "暴风雪更猛烈了。亡者的哀嚎声越来越近。",
						"french": "Le blizzard s'est intensifié. Les gémissements des morts se rapprochent.",
						"spanish": "La ventisca se ha vuelto más feroz. Los lamentos de los muertos se acercan.",
						"vietnamese": "Bão tuyết dữ dội hơn rồi. Tiếng gào thét của người chết đang đến gần.",
						"thai": "พายุหิมะรุนแรงขึ้น เสียงร้องของเหล่าผู้ตายใกล้เข้ามาแล้ว.",
						"hindi": "बर्फीला तूफान और तेज़ हो गया है। मृतकों की चीखें करीब आ रही हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "젠장, 머리가 울려…",
						"english": "Damn, my head's throbbing...",
						"japanese": "くそ、頭が響く…",
						"chinese": "该死，我的头好痛……",
						"french": "Foutu, ma tête résonne...",
						"spanish": "Maldita sea, mi cabeza retumba...",
						"vietnamese": "Chết tiệt, đầu tôi nhức quá...",
						"thai": "ให้ตายสิ หัวฉันปวดไปหมดเลย...",
						"hindi": "धिक्कार है, मेरा सिर गूँज रहा है..."
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "이 저주는 모든 것을 집어삼켜. 너희의 의지마저도.",
						"english": "This curse devours everything. Even your will.",
						"japanese": "この呪いはすべてを飲み込む。お前たちの意志までも。",
						"chinese": "这个诅咒吞噬一切。甚至你们的意志。",
						"french": "Cette malédiction dévore tout. Même votre volonté.",
						"spanish": "Esta maldición lo devora todo. Incluso vuestra voluntad.",
						"vietnamese": "Lời nguyền này nuốt chửng mọi thứ. Ngay cả ý chí của các ngươi.",
						"thai": "คำสาปนี้กลืนกินทุกสิ่ง แม้กระทั่งเจตจำนงของพวกเจ้า.",
						"hindi": "यह श्राप सब कुछ निगल जाता है। यहाँ तक कि तुम्हारी इच्छाशक्ति भी।"
					}
				},
				{
					"content": {
						"korean": "우린 포기 안 해!",
						"english": "We won't give up!",
						"japanese": "俺たちは諦めない！",
						"chinese": "我们不会放弃！",
						"french": "On n'abandonnera pas !",
						"spanish": "¡No nos rendiremos!",
						"vietnamese": "Chúng tôi không bỏ cuộc!",
						"thai": "เราไม่ยอมแพ้!",
						"hindi": "हम हार नहीं मानेंगे!"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "…그 의지가, 또 다른 맹세가 될 수도 있다는 걸 잊지 마.",
						"english": "...Don't forget, that will could become another vow.",
						"japanese": "…その意志が、また別の誓いになるかもしれないということを忘れるな。",
						"chinese": "……别忘了，那种意志也可能成为另一种誓言。",
						"french": "...N'oubliez pas que cette volonté pourrait devenir un autre serment.",
						"spanish": "...No olvides que esa voluntad podría convertirse en otra promesa.",
						"vietnamese": "...Đừng quên, ý chí đó có thể trở thành một lời thề khác.",
						"thai": "...อย่าลืมว่าเจตจำนงนั้นอาจกลายเป็นคำสาบานอีกครั้งได้.",
						"hindi": "...यह मत भूलो, वह इच्छाशक्ति एक और शपथ बन सकती है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "얼음 결정이 산산이 부서졌다. 주변을 감싸던 한기가 옅어지는 듯했다.",
						"english": "The ice crystal shattered. The chilling air that enveloped the area seemed to recede.",
						"japanese": "氷の結晶が粉々に砕け散った。周囲を包んでいた冷気が薄れていくようだった。",
						"chinese": "冰晶破碎了。周围弥漫的寒气似乎也减弱了。",
						"french": "Le cristal de glace se brisa. L'air glacial qui enveloppait la zone sembla se dissiper.",
						"spanish": "El cristal de hielo se hizo añicos. El aire helado que envolvía la zona pareció disiparse.",
						"vietnamese": "Tấm băng vỡ tan tành. Cái lạnh bao trùm xung quanh dường như đang tan biến.",
						"thai": "ผลึกน้ำแข็งแตกละเอียด ความหนาวเย็นที่ปกคลุมดูเหมือนจะจางหายไป",
						"hindi": "बर्फ का क्रिस्टल टूट गया। आसपास की ठंडी हवा कम होती हुई महसूस हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크하하… 끝났다고 생각하나? …이 저주는 영원하다.",
						"english": "Hahaha... Do you think it's over? ...This curse is eternal.",
						"japanese": "クハハ… 終わったとでも？…この呪いは永遠だ。",
						"chinese": "哈哈哈……你以为结束了吗？……这个诅咒是永恒的。",
						"french": "Hahaha... Pensez-vous que c'est fini ? ...Cette malédiction est éternelle.",
						"spanish": "Jajaja... ¿Creéis que ha terminado? ...Esta maldición es eterna.",
						"vietnamese": "Khà khà... Ngươi nghĩ là đã kết thúc sao? ...Lời nguyền này là vĩnh cửu.",
						"thai": "ฮ่าฮ่าฮ่า... คิดว่ามันจบแล้วงั้นหรือ? ...คำสาปนี้เป็นนิรันดร์",
						"hindi": "हाहाहा... क्या तुम्हें लगता है कि यह खत्म हो गया? ...यह अभिशाप शाश्वत है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…무슨 소리야.",
						"english": "...What are you talking about?",
						"japanese": "…何を言っているんだ。",
						"chinese": "……你在说什么？",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué hablas?",
						"vietnamese": "...Ngươi đang nói gì vậy?",
						"thai": "...เจ้าพูดอะไรน่ะ",
						"hindi": "...क्या कह रहे हो।"
					}
				},
				{
					"content": {
						"korean": "(사라지며) 너희도… 언젠가… 노래하게 될 것이다… 끝없는 여정을.",
						"english": "(Fading) You too... someday... will sing... of an endless journey.",
						"japanese": "（消えながら）お前たちも… いつか… 歌うことになるだろう… 終わりのない旅を。",
						"chinese": "(逐渐消失) 你们也……终有一天……会歌唱……这场无尽的旅程。",
						"french": "(S'évanouissant) Vous aussi... un jour... chanterez... un voyage sans fin.",
						"spanish": "(Desvaneciéndose) Vosotros también... algún día... cantaréis... un viaje sin fin.",
						"vietnamese": "(Biến mất) Các ngươi cũng... một ngày nào đó... sẽ hát... về một cuộc hành trình vô tận.",
						"thai": "(ขณะที่หายไป) เจ้าเองก็... สักวันหนึ่ง... จะต้องขับขาน... การเดินทางอันไม่สิ้นสุด",
						"hindi": "(गायब होते हुए) तुम भी... किसी दिन... गाओगे... एक अंतहीन यात्रा का।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "빌어먹을… 아직도 끝나지 않았다는 건가?",
						"english": "Damn it... Does this mean it's still not over?",
						"japanese": "くそっ… まだ終わってないというのか？",
						"chinese": "该死……难道还没结束吗？",
						"french": "Maudit soit... Cela signifie-t-il que ce n'est toujours pas fini ?",
						"spanish": "Maldita sea... ¿Significa esto que aún no ha terminado?",
						"vietnamese": "Khốn kiếp... Chẳng lẽ vẫn chưa kết thúc sao?",
						"thai": "บ้าเอ๊ย... ยังไม่จบอีกงั้นหรือ?",
						"hindi": "धिक्कार है... क्या इसका मतलब है कि यह अभी भी खत्म नहीं हुआ?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "망자들의 울음소리는 잠시 멎었지만, 얼음 동굴 저편에서 또 다른 미지의 그림자가 다가오고 있었다.",
						"english": "The cries of the departed souls ceased for a moment, but another unknown shadow was approaching from the far end of the ice cave.",
						"japanese": "亡者たちの叫び声は一時的に止んだが、氷の洞窟の奥から、別の未知の影が近づいてきていた。",
						"chinese": "亡魂的哭泣声暂时停止了，但冰窟深处，另一个未知的身影正在逼近。",
						"french": "Les pleurs des âmes des défunts cessèrent un instant, mais une autre ombre inconnue approchait du fond de la grotte de glace.",
						"spanish": "Los lamentos de las almas de los muertos cesaron por un momento, pero otra sombra desconocida se acercaba desde el fondo de la cueva de hielo.",
						"vietnamese": "Tiếng khóc của vong hồn tạm ngừng, nhưng từ sâu trong hang băng, một bóng hình vô danh khác đang tiến đến.",
						"thai": "เสียงร้องของดวงวิญญาณเงียบลงชั่วขณะ แต่เงาประหลาดอีกตนกำลังคืบคลานมาจากสุดปลายถ้ำน้ำแข็ง",
						"hindi": "मृत आत्माओं की चीखें एक पल के लिए रुक गईं, लेकिन बर्फ की गुफा के दूर छोर से एक और अज्ञात परछाई आ रही थी।"
					}
				},
				{
					"content": {
						"korean": "순례는, 아직 끝나지 않았다.",
						"english": "The pilgrimage is not over yet.",
						"japanese": "巡礼は、まだ終わっていない。",
						"chinese": "朝圣尚未结束。",
						"french": "Le pèlerinage n'est pas encore terminé.",
						"spanish": "La peregrinación aún no ha terminado.",
						"vietnamese": "Cuộc hành hương vẫn chưa kết thúc.",
						"thai": "การแสวงบุญยังไม่สิ้นสุด",
						"hindi": "तीर्थयात्रा अभी समाप्त नहीं हुई है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "배의 심장부. 거대한 얼음 결정체가 빛나고 있었다.",
						"english": "The heart of the ship. A gigantic ice crystal glowed.",
						"japanese": "船の心臓部。巨大な氷の結晶が輝いていた。",
						"chinese": "飞船的心脏。一块巨大的冰晶闪耀着。",
						"french": "Le cœur du navire. Un gigantesque cristal de glace brillait.",
						"spanish": "El corazón de la nave. Un gigantesco cristal de hielo brillaba.",
						"vietnamese": "Trái tim của con tàu. Một tinh thể băng khổng lồ đang phát sáng.",
						"thai": "ใจกลางเรือ ผลึกน้ำแข็งขนาดยักษ์กำลังส่องแสง.",
						"hindi": "जहाज़ का हृदय। एक विशाल बर्फ का क्रिस्टल चमक रहा था।"
					}
				},
				{
					"content": {
						"korean": "드디어…",
						"english": "Finally...",
						"japanese": "ついに…",
						"chinese": "终于……",
						"french": "Enfin...",
						"spanish": "Por fin...",
						"vietnamese": "Cuối cùng...",
						"thai": "ในที่สุด...",
						"hindi": "आखिरकार..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "멈추지 않는 순례… 기어이 여기까지 왔는가.",
						"english": "An unceasing pilgrimage... Have you truly come this far?",
						"japanese": "止まらぬ巡礼… まさか、ここまで来たか。",
						"chinese": "不息的朝圣……竟让你走到了这里。",
						"french": "Un pèlerinage incessant... Es-tu vraiment venu jusqu'ici ?",
						"spanish": "Una peregrinación incesante... ¿De verdad has llegado tan lejos?",
						"vietnamese": "Cuộc hành hương không ngừng... Ngươi đã đến tận đây sao?",
						"thai": "การจาริกที่ไม่หยุดหย่อน... เจ้ามาถึงที่นี่แล้วหรือ?",
						"hindi": "एक अंतहीन तीर्थयात्रा... क्या तुम सच में इतनी दूर आ गए हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 망자들을 묶어둔 건가?",
						"english": "Did you bind these departed souls?",
						"japanese": "貴様がこの亡者たちを縛り付けているのか？",
						"chinese": "是你束缚了这些亡魂吗？",
						"french": "As-tu lié ces âmes des défunts ?",
						"spanish": "¿Has atado a estas almas de los muertos?",
						"vietnamese": "Ngươi đã trói buộc những vong hồn này ư?",
						"thai": "เจ้าผูกมัดดวงวิญญาณเหล่านี้ไว้หรือ?",
						"hindi": "क्या तुमने इन मृत आत्माओं को बांध रखा है?"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저 순리에 따를 뿐. 너희 또한 곧 그 순례의 일부가 될 테지.",
						"english": "I merely follow the natural order. You too shall soon become part of that pilgrimage.",
						"japanese": "私はただ摂理に従うのみ。お前たちもやがて、その巡礼の一部となるだろう。",
						"chinese": "我只是顺应天理。你们也很快会成为那场朝圣的一部分。",
						"french": "Je ne fais que suivre l'ordre naturel. Vous aussi ferez bientôt partie de ce pèlerinage.",
						"spanish": "Solo sigo el orden natural. Vosotros también seréis pronto parte de esa peregrinación.",
						"vietnamese": "Ta chỉ tuân theo lẽ tự nhiên. Các ngươi cũng sẽ sớm trở thành một phần của cuộc hành hương đó.",
						"thai": "ข้าเพียงทำตามครรลองธรรมชาติ เจ้าเองก็จะกลายเป็นส่วนหนึ่งของการจาริกนั้นในไม่ช้า",
						"hindi": "मैं बस प्राकृतिक व्यवस्था का पालन करता हूँ। तुम भी जल्द ही उस तीर्थयात्रा का हिस्सा बन जाओगे।"
					}
				},
				{
					"content": {
						"korean": "웃기지 마! 우리가 여기서 끝낼 거야!",
						"english": "Don't make me laugh! We'll end it here!",
						"japanese": "笑わせるな！我々がここで終わらせてやる！",
						"chinese": "别开玩笑了！我们会在Ε这里结束一切！",
						"french": "Ne me fais pas rire ! Nous allons en finir ici !",
						"spanish": "¡No me hagas reír! ¡Lo terminaremos aquí!",
						"vietnamese": "Đừng có đùa! Chúng ta sẽ kết thúc nó ở đây!",
						"thai": "อย่ามาหัวเราะ! เราจะยุติมันที่นี่แหละ!",
						"hindi": "हंसाओ मत! हम इसे यहीं खत्म करेंगे!"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "배의 심장이 다시 차갑게 얼어붙었다. 탐험대는 쓰러졌다.",
						"english": "The ship's heart froze cold again. The expedition fell.",
						"japanese": "船の心臓が再び冷たく凍りついた。探検隊は倒れた。",
						"chinese": "船之心再次冰冷冻结。探险队倒下了。",
						"french": "Le cœur du navire s'est de nouveau figé. L'expédition a échoué.",
						"spanish": "El corazón de la nave se congeló de nuevo. La expedición cayó.",
						"vietnamese": "Trái tim con tàu lại đóng băng. Đoàn thám hiểm đã ngã xuống.",
						"thai": "หัวใจของเรือกลับกลายเป็นน้ำแข็งอีกครั้ง คณะสำรวจล้มลง",
						"hindi": "जहाज़ का दिल फिर से ठंडा पड़ गया। अभियान दल गिर गया।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 너희도 똑같군. 이 순례에 영원히 갇힐 뿐.",
						"english": "In the end... you're all the same. Just trapped forever in this pilgrimage.",
						"japanese": "結局…お前たちも同じか。この巡礼に永遠に囚われるだけだ。",
						"chinese": "最终…你们都一样。永远被困在这场朝圣中。",
						"french": "Au final... vous êtes tous les mêmes. Juste piégés à jamais dans ce pèlerinage.",
						"spanish": "Al final... todos sois iguales. Solo atrapados para siempre en esta peregrinación.",
						"vietnamese": "Cuối cùng... các ngươi cũng vậy thôi. Mãi mãi bị mắc kẹt trong cuộc hành hương này.",
						"thai": "ในที่สุด...พวกเจ้าก็เหมือนกันหมด แค่ติดอยู่ในพิธีแสวงบุญนี้ตลอดไป",
						"hindi": "अंत में… तुम भी वैसे ही हो। बस इस तीर्थयात्रा में हमेशा के लिए फंसे हुए हो।"
					}
				},
				{
					"content": {
						"korean": "…아직… 끝나지 않았어…",
						"english": "...It's not... over yet...",
						"japanese": "…まだ…終わってない…",
						"chinese": "…还没…结束…",
						"french": "...Ce n'est pas... encore fini...",
						"spanish": "...Aún no... ha terminado...",
						"vietnamese": "...Vẫn chưa... kết thúc...",
						"thai": "...ยัง...ไม่จบ...",
						"hindi": "…अभी… ख़त्म नहीं हुआ है…"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 다음 생에선… 현명한 선택을 하길 바란다.",
						"english": "Yes. In the next life... I hope you make wiser choices.",
						"japanese": "そうだ。次の生では…賢明な選択をするよう願う。",
						"chinese": "是的。下辈子…希望你能做出更明智的选择。",
						"french": "Oui. Dans la prochaine vie... j'espère que tu feras des choix plus sages.",
						"spanish": "Sí. En la próxima vida... espero que tomes decisiones más sabias.",
						"vietnamese": "Phải. Ở kiếp sau... mong ngươi đưa ra lựa chọn sáng suốt hơn.",
						"thai": "ใช่ ในชาติหน้า...หวังว่าเจ้าจะเลือกสิ่งที่ดีกว่า",
						"hindi": "हाँ। अगले जन्म में… मुझे आशा है कि तुम और समझदार विकल्प चुनोगे।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 배, 그레이브미스트. 망자들의 울음소리가 눈보라와 섞여 들려왔다.",
			"이곳에 갇힌 영혼들은 끝없이 순례한다. 안식을 찾지 못한 채.",
			"그리고 우리 또한, 그들의 여정에 갇히게 될 것인가.",
			"힐드의 노래는, 저주받은 배의 진실을 속삭이고 있었다."
		],
		"english": [
			"The frozen ship, Gravemist. The wails of the dead mingled with the blizzard.",
			"The souls trapped here wander endlessly, never finding rest.",
			"And will we, too, be trapped on their journey?",
			"Hild's song was whispering the truth of the cursed ship."
		],
		"japanese": [
			"凍える船、グレイブミスト。亡者の慟哭が吹雪と混じり合った。",
			"ここに囚われた魂は、安らぎを見つけることなく、永遠に巡礼する。",
			"そして私たちもまた、彼らの旅路に囚われるのだろうか。",
			"ヒルドの歌は、呪われた船の真実を囁いていた。"
		],
		"chinese": [
			"冰封之船，格雷夫米斯特。亡者的哀嚎与暴风雪交织。",
			"被困于此的灵魂无休止地游荡，永无安息。",
			"而我们，也将被困于他们的旅程吗？",
			"希尔德的歌声，低语着诅咒之船的真相。"
		],
		"french": [
			"Le navire gelé, Gravemist. Les lamentations des morts se mêlaient au blizzard.",
			"Les âmes piégées ici errent sans fin, ne trouvant jamais le repos.",
			"Et serons-nous, nous aussi, piégés dans leur voyage ?",
			"La chanson de Hild murmurait la vérité sur le navire maudit."
		],
		"spanish": [
			"La nave congelada, Gravemist. Los lamentos de los muertos se mezclaban con la ventisca.",
			"Las almas atrapadas aquí vagan sin cesar, sin encontrar nunca el descanso.",
			"¿Y nosotros también quedaremos atrapados en su viaje?",
			"La canción de Hild susurraba la verdad del barco maldito."
		],
		"vietnamese": [
			"Con tàu đóng băng, Gravemist. Tiếng than khóc của người chết hòa cùng bão tuyết.",
			"Những linh hồn bị mắc kẹt nơi đây lang thang vô tận, không tìm thấy sự an nghỉ.",
			"Và liệu chúng ta cũng sẽ bị mắc kẹt trong cuộc hành trình của họ?",
			"Bài hát của Hild đang thì thầm sự thật về con tàu bị nguyền rủa."
		],
		"thai": [
			"เรือที่ถูกแช่แข็ง, เกรฟมิสต์ เสียงคร่ำครวญของผู้ตายปะปนกับพายุหิมะ",
			"วิญญาณที่ถูกขังอยู่ที่นี่เดินทางไม่รู้จบ ไม่เคยพบความสงบ",
			"และเราจะถูกขังอยู่ในการเดินทางของพวกเขาด้วยหรือไม่?",
			"เพลงของฮิลด์กำลังกระซิบความจริงของเรือต้องสาป"
		],
		"hindi": [
			"जमी हुई नाव, ग्रेवमिस्ट। मृतकों की चीखें बर्फीले तूफान के साथ घुल-मिल रही थीं।",
			"यहां फंसी आत्माएं अंतहीन भटकती रहती हैं, कभी आराम नहीं पातीं।",
			"और क्या हम भी, उनकी यात्रा में फंस जाएंगे?",
			"हिल्ड का गीत शापित जहाज की सच्चाई फुसफुसा रहा था।"
		]
	}
} as const;
