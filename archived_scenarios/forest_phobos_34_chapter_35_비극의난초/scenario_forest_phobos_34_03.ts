export const scenario_forest_phobos_34_03 = {
	"scenario_id": "forest_phobos_34_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
						"korean": "난초의 향기가 짙어지는 숲의 심장부. 모든 것이 보랏빛 환영에 물들었다.",
						"english": "The heart of the forest, where the scent of orchids deepened. Everything was tinged with a violet illusion.",
						"japanese": "蘭の香りが濃くなる森の心臓部。すべてが紫色の幻影に染まった。",
						"chinese": "森林深处，兰花香气愈发浓郁。一切都被紫色的幻象浸染。",
						"french": "Au cœur de la forêt, où le parfum des orchidées s'intensifiait. Tout était teinté d'une illusion violette.",
						"spanish": "El corazón del bosque, donde el aroma de las orquídeas se intensificaba. Todo estaba teñido de una ilusión violeta.",
						"vietnamese": "Trái tim của khu rừng, nơi hương lan càng lúc càng nồng. Mọi thứ đều nhuộm màu ảo ảnh tím.",
						"thai": "ใจกลางป่าที่กลิ่นหอมของกล้วยไม้เข้มข้นขึ้น ทุกสิ่งถูกแต่งแต้มด้วยภาพลวงตาสีม่วง",
						"hindi": "जंगल का हृदय, जहाँ ऑर्किड की खुशबू गहरी होती गई। सब कुछ एक बैंगनी भ्रम से रंगा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "난초의 힘이 느껴져. 심상치 않아.",
						"english": "I feel the power of the orchid. It's unusual.",
						"japanese": "蘭の力を感じる。ただ事ではない。",
						"chinese": "我感受到了兰花的力量。非同寻常。",
						"french": "Je sens le pouvoir de l'orchidée. C'est inhabituel.",
						"spanish": "Siento el poder de la orquídea. Es inusual.",
						"vietnamese": "Tôi cảm nhận được sức mạnh của hoa lan. Không bình thường.",
						"thai": "สัมผัสได้ถึงพลังของกล้วยไม้ ไม่ธรรมดาเลย",
						"hindi": "मुझे ऑर्किड की शक्ति महसूस हो रही है। यह असामान्य है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ivy",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구냐. 이곳은 숲의 수호신, 난초님의 영역.",
						"english": "Who are you? This is the domain of the forest guardian, Lord Orchid.",
						"japanese": "誰だ。ここは森の守護神、蘭様の領域だ。",
						"chinese": "谁？这里是森林守护神，兰花大人的领域。",
						"french": "Qui êtes-vous ? C'est le domaine du gardien de la forêt, Seigneur Orchidée.",
						"spanish": "¿Quién eres? Este es el dominio del guardián del bosque, Lord Orquídea.",
						"vietnamese": "Ngươi là ai? Đây là lãnh địa của thần hộ mệnh rừng, Orchid đại nhân.",
						"thai": "เจ้าคือใคร? นี่คืออาณาเขตของเทพผู้พิทักษ์ป่า ท่านกล้วยไม้",
						"hindi": "तुम कौन हो? यह वन के संरक्षक, भगवान ऑर्किड का क्षेत्र है।"
					},
					"emotion": "angry",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "함부로 침범할 수 없는 성지다.",
						"english": "It's a sacred place that cannot be trespassed upon carelessly.",
						"japanese": "軽々しく侵すことのできない聖地だ。",
						"chinese": "这是不可随意侵犯的圣地。",
						"french": "C'est un lieu sacré qu'on ne peut pas profaner imprudemment.",
						"spanish": "Es un lugar sagrado que no puede ser profanado a la ligera.",
						"vietnamese": "Đây là thánh địa không thể tùy tiện xâm phạm.",
						"thai": "นี่คือสถานที่ศักดิ์สิทธิ์ที่ไม่สามารถบุกรุกโดยประมาทได้",
						"hindi": "यह एक पवित्र स्थान है जहाँ लापरवाही से अतिक्रमण नहीं किया जा सकता।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리는 길을 잃었을 뿐이야.",
						"english": "We simply lost our way.",
						"japanese": "私たちは道に迷っただけだ。",
						"chinese": "我们只是迷路了。",
						"french": "Nous avons simplement perdu notre chemin.",
						"spanish": "Simplemente nos perdimos.",
						"vietnamese": "Chúng tôi chỉ lạc đường thôi.",
						"thai": "เราแค่หลงทางเท่านั้น",
						"hindi": "हम बस रास्ता भटक गए थे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "거짓말. 외부인은 늘 이 숲의 평화를 깨뜨려 왔다.",
						"english": "Lies. Outsiders have always shattered this forest's peace.",
						"japanese": "嘘だ。部外者はいつもこの森の平和を壊してきた。",
						"chinese": "谎言。外来者总是破坏这片森林的和平。",
						"french": "Mensonges. Les étrangers ont toujours brisé la paix de cette forêt.",
						"spanish": "Mentiras. Los forasteros siempre han roto la paz de este bosque.",
						"vietnamese": "Dối trá. Người ngoài luôn phá vỡ hòa bình của khu rừng này.",
						"thai": "โกหก! คนนอกมักจะทำลายความสงบของป่าแห่งนี้เสมอ",
						"hindi": "झूठ। बाहरी लोगों ने हमेशा इस जंगल की शांति भंग की है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivy",
					"duration_ms": 500
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난초님은 이 숲의 유일한 수호신.",
						"english": "Orchid is the sole guardian of this forest.",
						"japanese": "ランチョ様は、この森唯一の守護神です。",
						"chinese": "兰草大人是这片森林唯一的守护神。",
						"french": "L'Orchidée est la seule gardienne de cette forêt.",
						"spanish": "Orquídea es la única guardiana de este bosque.",
						"vietnamese": "Lan Nương là vị thần bảo hộ duy nhất của khu rừng này.",
						"thai": "ท่านกล้วยไม้คือเทพารักษ์เพียงหนึ่งเดียวของป่าแห่งนี้",
						"hindi": "ऑर्किड ही इस वन की एकमात्र संरक्षक हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 오염된 것들로부터 숲을 지키셨다.",
						"english": "She protected the forest from all corruption.",
						"japanese": "すべての穢れたものから森をお守りになった。",
						"chinese": "她保护着森林免受一切污染。",
						"french": "Elle a protégé la forêt de toute corruption.",
						"spanish": "Protegió el bosque de toda corrupción.",
						"vietnamese": "Người đã bảo vệ khu rừng khỏi mọi ô uế.",
						"thai": "ท่านปกป้องป่าจากสิ่งแปดเปื้อนทั้งมวล",
						"hindi": "उन्होंने वन को सभी दूषित चीज़ों से बचाया।"
					},
					"emotion": "base",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "오염이라니? 우리는 아무것도 해치지 않았어.",
						"english": "Corruption? We haven't harmed anything.",
						"japanese": "穢れだと？私たちは何も傷つけていない。",
						"chinese": "污染？我们什么也没伤害。",
						"french": "Corruption ? Nous n'avons rien fait de mal.",
						"spanish": "¿Corrupción? No hemos dañado nada.",
						"vietnamese": "Ô uế ư? Chúng tôi đâu có làm hại gì.",
						"thai": "สิ่งแปดเปื้อนอะไร? เราไม่ได้ทำร้ายอะไรเลยนะ",
						"hindi": "प्रदूषण? हमने कुछ भी नुकसान नहीं पहुँचाया।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "너희 존재 자체가 오염이다. 당장 돌아가라.",
						"english": "Your very existence is corruption. Return at once.",
						"japanese": "お前たちの存在そのものが穢れだ。すぐに立ち去れ。",
						"chinese": "你们的存在本身就是污染。立刻回去！",
						"french": "Votre existence même est une corruption. Rentrez immédiatement.",
						"spanish": "Vuestra misma existencia es corrupción. Volved de inmediato.",
						"vietnamese": "Sự tồn tại của các ngươi chính là ô uế. Quay về ngay!",
						"thai": "การมีอยู่ของพวกเจ้าคือสิ่งแปดเปื้อน จงกลับไปเดี๋ยวนี้",
						"hindi": "तुम्हारा अस्तित्व ही प्रदूषण है। तुरंत वापस जाओ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 숲의 평화를 위협하지 마.",
						"english": "Stop threatening the forest's peace.",
						"japanese": "これ以上、森の平和を脅かすな。",
						"chinese": "不要再威胁森林的和平了。",
						"french": "Ne menacez plus la paix de la forêt.",
						"spanish": "No amenaces más la paz del bosque.",
						"vietnamese": "Đừng đe dọa hòa bình của khu rừng nữa.",
						"thai": "อย่าคุกคามสันติสุขของป่าอีกต่อไป",
						"hindi": "अब और वन की शांति को खतरे में मत डालो।"
					},
					"emotion": "angry",
					"speaker": "ivy"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "ivy",
					"type": "speech",
					"content": {
						"korean": "난초님은 모든 것을 알고 계신다.",
						"english": "Orchid knows everything.",
						"japanese": "ランチョ様はすべてをご存知です。",
						"chinese": "兰草大人无所不知。",
						"french": "L'Orchidée sait tout.",
						"spanish": "Orquídea lo sabe todo.",
						"vietnamese": "Lan Nương biết hết mọi chuyện.",
						"thai": "ท่านกล้วยไม้รู้ทุกสิ่ง",
						"hindi": "ऑर्chid सब कुछ जानती हैं।"
					}
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲을 위협하는 자들은 결국 숲의 일부가 될 뿐.",
						"english": "Those who threaten the forest will eventually become part of it.",
						"japanese": "森を脅かす者たちは、いずれ森の一部となるのみ。",
						"chinese": "威胁森林的人最终只会成为森林的一部分。",
						"french": "Ceux qui menacent la forêt finiront par en faire partie.",
						"spanish": "Aquellos que amenazan el bosque, al final, se convertirán en parte de él.",
						"vietnamese": "Kẻ nào đe dọa khu rừng cuối cùng cũng sẽ trở thành một phần của nó.",
						"thai": "ผู้ที่คุกคามป่าจะกลายเป็นส่วนหนึ่งของป่าในที่สุด",
						"hindi": "जो वन को धमकी देते हैं, वे अंततः वन का ही हिस्सा बन जाएँगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 일부가 된다고? 그게 무슨 뜻이야?",
						"english": "Become part of the forest? What does that mean?",
						"japanese": "森の一部に？どういう意味だ？",
						"chinese": "成为森林的一部分？那是什么意思？",
						"french": "Devenir une partie de la forêt ? Qu'est-ce que cela signifie ?",
						"spanish": "¿Convertirse en parte del bosque? ¿Qué significa eso?",
						"vietnamese": "Trở thành một phần của khu rừng ư? Ý đó là sao?",
						"thai": "กลายเป็นส่วนหนึ่งของป่า? หมายความว่าไง",
						"hindi": "वन का हिस्सा बन जाना? इसका क्या मतलब है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…평화를 위한 희생. 아름다운 순리다.",
						"english": "...A sacrifice for peace. A beautiful natural order.",
						"japanese": "……平和のための犠牲。美しい摂理です。",
						"chinese": "……为了和平的牺牲。这是美丽的自然法则。",
						"french": "...Un sacrifice pour la paix. Un bel ordre naturel.",
						"spanish": "...Un sacrificio por la paz. Un hermoso orden natural.",
						"vietnamese": "...Sự hy sinh vì hòa bình. Một lẽ tự nhiên đẹp đẽ.",
						"thai": "...การเสียสละเพื่อสันติสุข ช่างเป็นวิถีทางที่งดงาม",
						"hindi": "...शांति के लिए बलिदान। एक सुंदर प्राकृतिक व्यवस्था है।"
					},
					"speaker": "ivy",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그녀의 믿음이… 어딘가 섬뜩해.",
						"english": "Her faith... it's somewhat eerie.",
						"japanese": "彼女の信念が…どこか薄気味悪い。",
						"chinese": "她的信仰……有点令人毛骨悚然。",
						"french": "Sa foi... est un peu effrayante.",
						"spanish": "Su fe... es algo inquietante.",
						"vietnamese": "Niềm tin của cô ấy... thật rùng rợn ở một khía cạnh nào đó.",
						"thai": "ความเชื่อของนาง... ช่างน่าขนลุก",
						"hindi": "उसका विश्वास... कुछ अजीब सा है।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 더 이상 물러설 곳은 없다.",
						"english": "No more turning back.",
						"japanese": "もう後には引けない。",
						"chinese": "已无退路。",
						"french": "Plus de retour en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không còn đường lui nữa.",
						"thai": "ไม่มีทางถอยอีกแล้ว",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					},
					"speaker": "ivy",
					"emotion": "angry"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "너희는 숲의 심장을 향하고 있어. 그곳은… 금지된 영역이다.",
						"english": "You're heading for the heart of the forest. That place is... forbidden.",
						"japanese": "君たちは森の心臓に向かっている。そこは…禁断の領域だ。",
						"chinese": "你们正前往森林之心。那里是……禁忌之地。",
						"french": "Vous vous dirigez vers le cœur de la forêt. C'est… un domaine interdit.",
						"spanish": "Se dirigen al corazón del bosque. Ese lugar es... un área prohibida.",
						"vietnamese": "Các ngươi đang tiến vào trái tim của khu rừng. Nơi đó… là vùng cấm.",
						"thai": "พวกเจ้ากำลังมุ่งหน้าสู่ใจกลางป่า ที่นั่นคือ… เขตต้องห้าม",
						"hindi": "तुम जंगल के दिल की ओर बढ़ रहे हो। वह जगह… निषिद्ध क्षेत्र है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "막아서지 마. 우리는 진실을 찾아야 해.",
						"english": "Don't stand in our way. We must find the truth.",
						"japanese": "邪魔をするな。我々は真実を見つけなければならない。",
						"chinese": "别挡路。我们必须找到真相。",
						"french": "Ne nous barrez pas la route. Nous devons trouver la vérité.",
						"spanish": "No nos detengas. Debemos encontrar la verdad.",
						"vietnamese": "Đừng cản đường. Chúng ta phải tìm ra sự thật.",
						"thai": "อย่าขวางทาง เราต้องค้นหาความจริง",
						"hindi": "हमें मत रोको। हमें सच्चाई का पता लगाना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실? 너희가 원하는 진실은 숲의 파멸뿐이다!",
						"english": "Truth? The only truth you seek is the forest's destruction!",
						"japanese": "真実？君たちが求める真実は森の破滅だけだ！",
						"chinese": "真相？你们想要的真相只会是森林的毁灭！",
						"french": "La vérité ? La seule vérité que vous voulez, c'est la destruction de la forêt !",
						"spanish": "¿Verdad? ¡La única verdad que quieren es la ruina del bosque!",
						"vietnamese": "Sự thật? Sự thật mà các ngươi muốn chỉ là sự hủy diệt của khu rừng!",
						"thai": "ความจริง? ความจริงที่พวกเจ้าต้องการมีแต่ความพินาศของป่าเท่านั้น!",
						"hindi": "सच्चाई? तुम जो सच्चाई चाहते हो वह केवल जंगल का विनाश है!"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ivy",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 온 건가. 어리석은 자들!",
						"english": "So you finally made it this far. Foolish ones!",
						"japanese": "ついにここまで来たか。愚かな者たちめ！",
						"chinese": "终究还是走到这里了吗？愚蠢的家伙们！",
						"french": "Alors vous êtes enfin arrivés. Stupides créatures !",
						"spanish": "Así que al final llegaron hasta aquí. ¡Necios!",
						"vietnamese": "Cuối cùng các ngươi cũng đến đây. Những kẻ ngu ngốc!",
						"thai": "ในที่สุดก็มาถึงที่นี่จนได้ พวกโง่เอ๊ย!",
						"hindi": "तो तुम आखिरकार यहाँ तक आ ही गए। मूर्ख लोग!"
					},
					"emotion": "angry",
					"speaker": "ivy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아이비, 물러서. 네가 속고 있는 거야.",
						"english": "Ivy, stand down. You're being deceived.",
						"japanese": "アイビー、退け。お前は騙されているんだ。",
						"chinese": "艾维，退下。你被骗了。",
						"french": "Ivy, recule. Tu es trompée.",
						"spanish": "Ivy, apártate. Estás siendo engañada.",
						"vietnamese": "Ivy, lùi lại. Cô đang bị lừa dối.",
						"thai": "ไอวี่, ถอยไป เธอถูกหลอกอยู่",
						"hindi": "आइवी, पीछे हट जाओ। तुम्हें धोखा दिया जा रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "속고 있다고? 난초님만이 진실이다! 외부인이 바로 숲의 질병!",
						"english": "Deceived? Lady Orchid is the only truth! Outsiders are the forest's disease!",
						"japanese": "騙されているだと？ランチョ様こそが真実だ！部外者こそ森の病！",
						"chinese": "被骗？只有兰花大人才是真相！外来者才是森林的疾病！",
						"french": "Trompée ? Dame Orchidée est la seule vérité ! Les étrangers sont la maladie de la forêt !",
						"spanish": "¿Engañada? ¡Solo Lady Orchid es la verdad! ¡Los forasteros son la enfermedad del bosque!",
						"vietnamese": "Bị lừa dối? Chỉ có Ngài Lan là sự thật! Kẻ ngoại lai chính là bệnh dịch của khu rừng!",
						"thai": "ถูกหลอกงั้นเหรอ? ท่านกล้วยไม้เท่านั้นคือความจริง! พวกนอกรีตต่างหากคือโรคร้ายของป่า!",
						"hindi": "धोखा दिया जा रहा है? केवल लेडी ऑर्किड ही सच्चाई है! बाहरी लोग ही जंगल की बीमारी हैं!"
					},
					"emotion": "angry",
					"speaker": "ivy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아이비의 뒤틀린 신념이 어둠을 불러냈다. 거대한 그림자가 모습을 드러냈다.",
						"english": "Ivy's twisted beliefs summoned the darkness. A colossal shadow revealed itself.",
						"japanese": "アイビーの歪んだ信念が闇を呼び出した。巨大な影が姿を現した。",
						"chinese": "艾维扭曲的信仰召唤了黑暗。一个巨大的身影显露出来。",
						"french": "Les croyances tordues d'Ivy ont invoqué les ténèbres. Une ombre colossale s'est révélée.",
						"spanish": "Las retorcidas creencias de Ivy invocaron la oscuridad. Una sombra colosal se reveló.",
						"vietnamese": "Niềm tin lệch lạc của Ivy đã triệu hồi bóng tối. Một cái bóng khổng lồ hiện ra.",
						"thai": "ความเชื่ออันบิดเบี้ยวของไอวี่ได้อัญเชิญความมืดออกมา เงาขนาดมหึมาได้ปรากฏตัวขึ้น",
						"hindi": "आइवी की विकृत मान्यताओं ने अंधेरे को बुलाया। एक विशाल छाया सामने आई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…침입자. 숲의 평화를 깨는 자, 죽음뿐.",
						"english": "...Intruder. Those who disturb the forest's peace shall only find death.",
						"japanese": "…侵入者め。森の平和を乱す者には、死あるのみ。",
						"chinese": "……入侵者。破坏森林和平者，只有死路一条。",
						"french": "...Intrus. Ceux qui troublent la paix de la forêt ne connaîtront que la mort.",
						"spanish": "...Intruso. Quienes alteran la paz del bosque, solo les espera la muerte.",
						"vietnamese": "...Kẻ xâm nhập. Kẻ phá hoại sự bình yên của rừng, chỉ có cái chết.",
						"thai": "...ผู้บุกรุก ผู้ใดรบกวนความสงบของป่า จะมีแต่ความตาย",
						"hindi": "...घुसपैठिया। जंगल की शांति भंग करने वालों को केवल मौत मिलेगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 아이비를 이용한 거냐!",
						"english": "Did you use Ivy!",
						"japanese": "お前がアイビーを利用したのか！",
						"chinese": "是你利用了艾维吗！",
						"french": "C'est toi qui as utilisé Ivy !",
						"spanish": "¡¿Tú utilizaste a Ivy?!",
						"vietnamese": "Ngươi đã lợi dụng Ivy phải không!",
						"thai": "แกหลอกใช้ไอวี่งั้นเหรอ!",
						"hindi": "क्या तुमने आइवी का इस्तेमाल किया था!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "ivy",
					"type": "direction",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나 또한 숲의 일부. 파괴하려는 자들을 막을 뿐.",
						"english": "I am part of the forest. I only stop those who seek to destroy it.",
						"japanese": "私も森の一部。破壊しようとする者を止めるだけだ。",
						"chinese": "我也是森林的一部分。我只会阻止那些试图摧毁它的人。",
						"french": "Je fais partie de la forêt. Je ne fais que stopper ceux qui cherchent à la détruire.",
						"spanish": "Soy parte del bosque. Solo detengo a quienes buscan destruirlo.",
						"vietnamese": "Tôi là một phần của rừng. Tôi chỉ ngăn cản những kẻ muốn phá hủy nó.",
						"thai": "ฉันเป็นส่วนหนึ่งของป่า ฉันแค่หยุดยั้งผู้ที่ต้องการทำลายมัน",
						"hindi": "मैं भी जंगल का एक हिस्सा हूँ। मैं केवल उन लोगों को रोकता हूँ जो इसे नष्ट करना चाहते हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…나는 그저… 숲을 지키려…했을 뿐….",
						"english": "…I merely… sought to protect… the forest…",
						"japanese": "…私はただ…森を守ろうと…しただけなのに…。",
						"chinese": "…我只是…想保护…森林…。",
						"french": "…Je n'ai fait que… chercher à protéger… la forêt…",
						"spanish": "…Yo solo… quería proteger… el bosque…",
						"vietnamese": "…Ta chỉ… muốn bảo vệ… khu rừng mà thôi…",
						"thai": "…ฉันแค่… ต้องการปกป้อง… ป่า…",
						"hindi": "…मैं तो बस… जंगल की रक्षा… करना चाहता था…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아이비는… 대체 뭘 믿었던 걸까.",
						"english": "What… did Ivy truly believe in?",
						"japanese": "アイビーは…一体何を信じていたのだろう。",
						"chinese": "艾薇…到底相信了什么？",
						"french": "En quoi… Ivy croyait-elle vraiment ?",
						"spanish": "¿En qué… creía realmente Ivy?",
						"vietnamese": "Ivy… rốt cuộc tin vào điều gì?",
						"thai": "ไอวี่… เชื่อมั่นในอะไรกันแน่?",
						"hindi": "आइवी… वास्तव में किस बात पर विश्वास करती थी?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아이비의 뒤틀린 신념은 비극으로 끝났다.",
						"english": "Ivy's twisted belief ended in tragedy.",
						"japanese": "アイビーの歪んだ信念は悲劇に終わった。",
						"chinese": "艾薇扭曲的信念以悲剧告终。",
						"french": "La croyance tordue d'Ivy s'est terminée en tragédie.",
						"spanish": "La retorcida creencia de Ivy terminó en tragedia.",
						"vietnamese": "Niềm tin sai lệch của Ivy đã kết thúc trong bi kịch.",
						"thai": "ความเชื่อที่บิดเบี้ยวของไอวี่จบลงด้วยโศกนาฏกรรม",
						"hindi": "आइवी की विकृत धारणा का अंत त्रासदी में हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "난초의 그림자는 더욱 깊숙이 뻗어 있었다. 진실은 아직 멀다.",
						"english": "The shadow of the orchid stretched even deeper. The truth is still far off.",
						"japanese": "蘭の影はさらに深く伸びていた。真実はまだ遠い。",
						"chinese": "兰花的阴影延伸得更深了。真相仍遥不可及。",
						"french": "L'ombre de l'orchidée s'étendait encore plus profondément. La vérité est encore lointaine.",
						"spanish": "La sombra de la orquídea se extendía aún más. La verdad aún está lejos.",
						"vietnamese": "Bóng tối của hoa lan càng lúc càng sâu. Chân tướng vẫn còn xa vời.",
						"thai": "เงามืดของกล้วยไม้ทอดยาวลึกลงไปอีก ความจริงยังอีกยาวไกล",
						"hindi": "ऑर्किड की छाया और भी गहरी हो गई थी। सच्चाई अभी भी बहुत दूर है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 수호자는 쓰러지지 않았다. 난초의 힘이 더욱 강해졌다.",
						"english": "The guardian of the forest did not fall. The power of the orchid grew stronger.",
						"japanese": "森の守護者は倒れなかった。蘭の力はさらに強くなった。",
						"chinese": "森林的守护者并未倒下。兰花的力量变得更强了。",
						"french": "La gardienne de la forêt n'est pas tombée. Le pouvoir de l'orchidée s'est renforcé.",
						"spanish": "El guardián del bosque no cayó. El poder de la orquídea se hizo más fuerte.",
						"vietnamese": "Người bảo vệ rừng không gục ngã. Sức mạnh của hoa lan càng trở nên mạnh hơn.",
						"thai": "ผู้พิทักษ์ป่าไม่ล้มลง พลังของกล้วยไม้แข็งแกร่งขึ้น",
						"hindi": "जंगल का रक्षक नहीं गिरा। ऑर्किड की शक्ति और मजबूत हो गई।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…숲의 평화를 깨려는 자는… 이곳에서 영원히 잠들 것이다.",
						"english": "…Those who disturb the peace of the forest… shall sleep here forever.",
						"japanese": "…森の平和を乱す者は…ここで永遠に眠るだろう。",
						"chinese": "…那些扰乱森林和平的人…将永远沉睡于此。",
						"french": "…Ceux qui troubleront la paix de la forêt… dormiront ici pour l'éternité.",
						"spanish": "…Quienes perturben la paz del bosque… dormirán aquí para siempre.",
						"vietnamese": "…Những kẻ phá vỡ sự bình yên của rừng… sẽ ngủ yên tại đây mãi mãi.",
						"thai": "…ผู้ที่รบกวนความสงบสุขของป่า… จะหลับใหลที่นี่ตลอดไป",
						"hindi": "…जो जंगल की शांति भंग करेंगे… वे यहाँ हमेशा के लिए सो जाएंगे।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어.",
						"english": "Damn it… I still… can't give up.",
						"japanese": "くそ…まだ…諦められない。",
						"chinese": "该死…我 still…不能放弃。",
						"french": "Mince… Je ne peux pas… encore abandonner.",
						"spanish": "Maldita sea… Todavía… no puedo rendirme.",
						"vietnamese": "Chết tiệt… Ta vẫn… không thể bỏ cuộc.",
						"thai": "ให้ตายสิ… ฉันยัง… ยอมแพ้ไม่ได้",
						"hindi": "धिक्कार है… मैं अभी भी… हार नहीं मान सकता।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 난초의 기운으로 뒤덮였다. 이 모든 것을 지켜보는 눈이 있었다.",
			"숲의 수호자를 자처하는 여인, 아이비.",
			"그녀의 신념은 난초처럼 아름답지만, 어딘가 뒤틀려 있었다.",
			"평화를 외치는 목소리 속, 비극의 씨앗이 자라나고 있었다."
		],
		"english": [
			"The forest was enveloped in the aura of orchids. Eyes watched all of this.",
			"Ivy, a woman who claims to be the forest's guardian.",
			"Her conviction was beautiful like an orchid, yet twisted somehow.",
			"Amidst voices calling for peace, the seeds of tragedy were growing."
		],
		"japanese": [
			"森は蘭の気配に覆われた。そのすべてを見つめる目があった。",
			"森の守護者を自称する女、アイビー。",
			"彼女の信念は蘭のように美しいが、どこか歪んでいた。",
			"平和を叫ぶ声の中、悲劇の種が育っていた。"
		],
		"chinese": [
			"森林被兰花的气息笼罩。有眼睛注视着这一切。",
			"自称森林守护者的女人，艾薇。",
			"她的信念像兰花一样美丽，却又有些扭曲。",
			"在呼唤和平的声音中，悲剧的种子正在生长。"
		],
		"french": [
			"La forêt était enveloppée de l'aura des orchidées. Des yeux observaient tout cela.",
			"Ivy, une femme qui se prétend la gardienne de la forêt.",
			"Sa conviction était belle comme une orchidée, mais tordue d'une certaine manière.",
			"Au milieu des voix appelant à la paix, les graines de la tragédie germaient."
		],
		"spanish": [
			"El bosque estaba envuelto en el aura de las orquídeas. Ojos observaban todo esto.",
			"Ivy, una mujer que se autoproclama guardiana del bosque.",
			"Su convicción era hermosa como una orquídea, pero de alguna manera retorcida.",
			"Entre las voces que pedían paz, las semillas de la tragedia crecían."
		],
		"vietnamese": [
			"Rừng được bao phủ bởi khí chất của hoa lan. Có những con mắt đang dõi theo tất cả điều này.",
			"Ivy, người phụ nữ tự xưng là người bảo hộ của rừng.",
			"Niềm tin của cô ấy đẹp như hoa lan, nhưng lại có gì đó méo mó.",
			"Giữa những tiếng kêu gọi hòa bình, hạt giống của bi kịch đang nảy mầm."
		],
		"thai": [
			"ป่าถูกปกคลุมไปด้วยกลิ่นอายของกล้วยไม้ มีดวงตาที่จับจ้องมองทุกสิ่ง",
			"ไอวี่ หญิงสาวที่อ้างตัวว่าเป็นผู้พิทักษ์ป่า",
			"ความเชื่อของเธอสวยงามราวกับกล้วยไม้ แต่ก็บิดเบี้ยวไปบ้าง",
			"ท่ามกลางเสียงเรียกหาความสงบ เมล็ดพันธุ์แห่งโศกนาฏกรรมกำลังเติบโต"
		],
		"hindi": [
			"जंगल ऑर्किड की आभा से ढका हुआ था। इन सब पर नज़र रखने वाली आँखें थीं।",
			"आइवी, एक महिला जो खुद को जंगल की संरक्षक बताती है।",
			"उसकी आस्था ऑर्किड की तरह सुंदर थी, फिर भी कहीं न कहीं विकृत थी।",
			"शांति की पुकार के बीच, त्रासदी के बीज उग रहे थे।"
		]
	}
} as const;
