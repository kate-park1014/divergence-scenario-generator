export const scenario_desert_mirageoath_9_02 = {
	"scenario_id": "desert_mirageoath_9_02",
	"order": 2,
	"act": "rising",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "황량한 사막. 뜨거운 태양이 머리 위를 짓눌렀다.",
						"english": "Desolate desert. The scorching sun pressed down.",
						"japanese": "荒涼たる砂漠。灼熱の太陽が頭上を圧迫した。",
						"chinese": "荒凉的沙漠。炽热的太阳压在头顶。",
						"french": "Désert désolé. Le soleil brûlant écrasait.",
						"spanish": "Desierto desolado. El sol abrasador oprimía.",
						"vietnamese": "Sa mạc hoang vắng. Mặt trời gay gắt đè nặng trên đầu.",
						"thai": "ทะเลทรายอันรกร้าง. ดวงอาทิตย์ที่ร้อนระอุแผดเผาเหนือศีรษะ",
						"hindi": "वीरान रेगिस्तान। जलता सूरज सिर पर दबाव डाल रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "길을 잃었나? 내가 안내해 주지.",
						"english": "Lost your way? I'll guide you.",
						"japanese": "道に迷ったのか？私が案内しよう。",
						"chinese": "迷路了吗？我来给你带路。",
						"french": "Vous êtes perdu ? Je vais vous guider.",
						"spanish": "¿Te has perdido? Yo te guiaré.",
						"vietnamese": "Lạc đường rồi à? Để ta dẫn đường cho.",
						"thai": "หลงทางหรือเปล่า? เดี๋ยวฉันจะนำทางให้",
						"hindi": "रास्ता भटक गए? मैं तुम्हें रास्ता दिखाऊँगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…누구지?",
						"english": "...Who are you?",
						"japanese": "…誰だ？",
						"chinese": "……你是谁？",
						"french": "...Qui êtes-vous ?",
						"spanish": "¿...Quién eres?",
						"vietnamese": "...Ngươi là ai?",
						"thai": "...ใครน่ะ?",
						"hindi": "...कौन हो तुम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르. 이 사막의 길을 아는 자.",
						"english": "Amir. The one who knows the paths of this desert.",
						"japanese": "アミール。この砂漠の道を知る者。",
						"chinese": "阿米尔。知晓这片沙漠之路的人。",
						"french": "Amir. Celui qui connaît les chemins de ce désert.",
						"spanish": "Amir. El que conoce los caminos de este desierto.",
						"vietnamese": "Amir. Kẻ biết đường sa mạc này.",
						"thai": "อามีร์. ผู้ที่รู้จักเส้นทางในทะเลทรายแห่งนี้",
						"hindi": "अमीर। इस रेगिस्तान के रास्ते जानने वाला।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "믿을 수 있나?",
						"english": "Can you be trusted?",
						"japanese": "信用できるのか？",
						"chinese": "可以相信吗？",
						"french": "Peut-on vous faire confiance ?",
						"spanish": "¿Se puede confiar en ti?",
						"vietnamese": "Có thể tin được không?",
						"thai": "ไว้ใจได้หรือเปล่า?",
						"hindi": "क्या तुम पर भरोसा किया जा सकता है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "선택은 너의 몫.",
						"english": "The choice is yours.",
						"japanese": "選択は君次第だ。",
						"chinese": "选择权在你。",
						"french": "Le choix t'appartient.",
						"spanish": "La elección es tuya.",
						"vietnamese": "Quyết định là của bạn.",
						"thai": "การตัดสินใจอยู่ที่คุณ",
						"hindi": "चुनाव तुम्हारा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 길은 끝없이 이어지는 듯하지만, 진실은 숨겨져 있지.",
						"english": "This path seems endless, but the truth is hidden.",
						"japanese": "この道は果てしなく続くように見えるが、真実は隠されている。",
						"chinese": "这条路看似无尽，但真相却隐藏其中。",
						"french": "Ce chemin semble sans fin, mais la vérité est cachée.",
						"spanish": "Este camino parece interminable, pero la verdad está oculta.",
						"vietnamese": "Con đường này dường như vô tận, nhưng sự thật lại bị che giấu.",
						"thai": "เส้นทางนี้ดูเหมือนจะไม่มีที่สิ้นสุด แต่ความจริงซ่อนอยู่",
						"hindi": "यह रास्ता अंतहीन लगता है, पर सच्चाई छिपी हुई है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý gì vậy?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "가끔은 왔던 길을 다시 걷는 기분이 들 거야.",
						"english": "Sometimes, you'll feel like you're walking the same path again.",
						"japanese": "時には、来た道をまた歩いているような気がするだろう。",
						"chinese": "有时你会觉得自己在走回头路。",
						"french": "Parfois, tu auras l'impression de revenir sur tes pas.",
						"spanish": "A veces, sentirás que vuelves a recorrer el camino.",
						"vietnamese": "Đôi khi, bạn sẽ cảm thấy như đang đi lại con đường cũ.",
						"thai": "บางครั้ง คุณจะรู้สึกเหมือนกำลังเดินย้อนรอยเดิม",
						"hindi": "कभी-कभी तुम्हें लगेगा कि तुम उसी रास्ते पर फिर से चल रहे हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…착각이겠지.",
						"english": "...Must be a trick of the mind.",
						"japanese": "…錯覚だろう。",
						"chinese": "……错觉吧。",
						"french": "...Ce doit être une illusion.",
						"spanish": "...Debe ser una ilusión.",
						"vietnamese": "...Chắc là ảo giác thôi.",
						"thai": "...คงเป็นแค่ภาพลวงตา",
						"hindi": "...यह सिर्फ़ भ्रम होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "착각? 아니면… 진실?",
						"english": "Illusion? Or... truth?",
						"japanese": "錯覚？それとも…真実？",
						"chinese": "错觉？还是……真相？",
						"french": "Illusion ? Ou... la vérité ?",
						"spanish": "¿Ilusión? ¿O... la verdad?",
						"vietnamese": "Ảo giác? Hay... sự thật?",
						"thai": "ภาพลวงตา? หรือ...ความจริง?",
						"hindi": "भ्रम? या... सच्चाई?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아미르의 미소가 섬뜩하게 느껴졌다.",
						"english": "Amir's smile felt chilling.",
						"japanese": "アミールの笑顔が不気味に感じられた。",
						"chinese": "阿米尔的笑容令人毛骨悚然。",
						"french": "Le sourire d'Amir était glaçant.",
						"spanish": "La sonrisa de Amir se sintió escalofriante.",
						"vietnamese": "Nụ cười của Amir khiến tôi rợn người.",
						"thai": "รอยยิ้มของอามีร์รู้สึกน่าขนลุก",
						"hindi": "अमीर की मुस्कान भयावह लगी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "오아시스에 도착했다. 잠시 쉬어갈 수 있었다.",
						"english": "Arrived at the oasis. I could rest for a while.",
						"japanese": "オアシスに到着した。しばらく休むことができた。",
						"chinese": "抵达了绿洲。可以稍作休息。",
						"french": "Arrivé à l'oasis. J'ai pu me reposer un moment.",
						"spanish": "Llegué al oasis. Pude descansar un rato.",
						"vietnamese": "Đã đến ốc đảo. Tôi có thể nghỉ ngơi một lát.",
						"thai": "มาถึงโอเอซิสแล้ว ได้พักผ่อนชั่วครู่",
						"hindi": "नखलिस्तान पहुँच गए। कुछ देर आराम कर सका।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "목마르지 않아? 이 물은 특별하거든.",
						"english": "Aren't you thirsty? This water is special.",
						"japanese": "喉が渇いてない？この水は特別なんだ。",
						"chinese": "不渴吗？这水很特别。",
						"french": "Tu n'as pas soif ? Cette eau est spéciale.",
						"spanish": "¿No tienes sed? Esta agua es especial.",
						"vietnamese": "Không khát sao? Nước này đặc biệt lắm đấy.",
						"thai": "ไม่กระหายน้ำเหรอ? น้ำนี้พิเศษนะ",
						"hindi": "प्यासे नहीं हो? यह पानी ख़ास है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "…",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오아시스 물에 비친 아미르의 모습이 일렁였다.",
						"english": "Amir's reflection shimmered in the oasis water.",
						"japanese": "オアシスの水面に映るアミールの姿が揺らめいた。",
						"chinese": "阿米尔的身影在绿洲的水中摇曳。",
						"french": "Le reflet d'Amir vacillait dans l'eau de l'oasis.",
						"spanish": "El reflejo de Amir tembló en el agua del oasis.",
						"vietnamese": "Bóng Amir lay động trong làn nước ốc đảo.",
						"thai": "เงาของอามีร์ไหวระริกในน้ำโอเอซิส",
						"hindi": "आमिर का प्रतिबिंब नखलिस्तान के पानी में टिमटिमा रहा था।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "순간, 전혀 다른 거대한 그림자가 아미르를 덮쳤다 사라졌다.",
						"english": "In an instant, a completely different, massive shadow engulfed Amir, then vanished.",
						"japanese": "一瞬、全く別の巨大な影がアミールを覆い、そして消えた。",
						"chinese": "瞬间，一个完全不同的巨大阴影笼罩了阿米尔，然后消失了。",
						"french": "Un instant, une ombre gigantesque et totalement différente enveloppa Amir, puis disparut.",
						"spanish": "En un instante, una sombra enorme y completamente diferente envolvió a Amir y luego desapareció.",
						"vietnamese": "Khoảnh khắc đó, một bóng đen khổng lồ hoàn toàn khác ập xuống Amir rồi biến mất.",
						"thai": "ในพริบตา เงาขนาดมหึมาที่แตกต่างออกไปอย่างสิ้นเชิงก็ปกคลุมอามีร์แล้วหายไป",
						"hindi": "पल भर में, एक पूरी तरह से अलग, विशाल छाया ने आमिर को घेर लिया और फिर गायब हो गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…방금 뭐였지?",
						"english": "...What was that just now?",
						"japanese": "…今のは何だった？",
						"chinese": "……刚才那是什么？",
						"french": "...C'était quoi, ça ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "...Vừa rồi là gì vậy?",
						"thai": "...เมื่อกี้มันอะไรน่ะ?",
						"hindi": "...अभी वह क्या था?"
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "환영이야. 사막은 언제나 너를 속이지.",
						"english": "An illusion. The desert always deceives you.",
						"japanese": "幻影だよ。砂漠はいつもお前を欺く。",
						"chinese": "幻觉。沙漠总是欺骗你。",
						"french": "Une illusion. Le désert te trompe toujours.",
						"spanish": "Una ilusión. El desierto siempre te engaña.",
						"vietnamese": "Ảo ảnh thôi. Sa mạc lúc nào cũng lừa dối ngươi.",
						"thai": "ภาพลวงตา ทะเลทรายมักจะหลอกลวงเจ้าเสมอ",
						"hindi": "एक भ्रम। रेगिस्तान हमेशा तुम्हें धोखा देता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거짓말!",
						"english": "Lies!",
						"japanese": "嘘だ！",
						"chinese": "骗人！",
						"french": "Mensonge !",
						"spanish": "¡Mentira!",
						"vietnamese": "Xạo!",
						"thai": "โกหก!",
						"hindi": "झूठ!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "점점 깊숙이 들어오는군. 후회하지 않겠어?",
						"english": "You're going deeper and deeper. Won't you regret it?",
						"japanese": "ますます深く入ってくるな。後悔しないのか？",
						"chinese": "你越陷越深了。不会后悔吗？",
						"french": "Tu t'enfonces de plus en plus. Ne le regretteras-tu pas ?",
						"spanish": "Te estás adentrando cada vez más. ¿No te arrepentirás?",
						"vietnamese": "Ngươi càng lúc càng vào sâu. Không hối hận sao?",
						"thai": "เจ้ากำลังเข้าไปลึกขึ้นเรื่อยๆ ไม่คิดจะเสียใจหรือ?",
						"hindi": "तुम और गहरे जा रहे हो। पछताओगे नहीं क्या?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 뭔데.",
						"english": "Who are you to ask?",
						"japanese": "お前は何様だ。",
						"chinese": "你算什么东西？",
						"french": "Qui es-tu pour demander ça ?",
						"spanish": "¿Quién eres tú para preguntar?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใครกัน?",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 그저… 길을 보여주는 자. 네가 원하는 곳으로.",
						"english": "I am merely... a guide. To where you wish to go.",
						"japanese": "私はただ…道を示す者。お前が望む場所へ。",
						"chinese": "我只是…指路人。去你想要去的地方。",
						"french": "Je ne suis que... celui qui montre le chemin. Vers là où tu désires aller.",
						"spanish": "Solo soy... quien te muestra el camino. Hacia donde desees ir.",
						"vietnamese": "Ta chỉ là... kẻ chỉ đường. Đến nơi ngươi muốn.",
						"thai": "ข้าเป็นเพียง... ผู้ชี้ทาง ไปยังที่ที่เจ้าต้องการ",
						"hindi": "मैं बस... एक मार्गदर्शक हूँ। जहाँ तुम जाना चाहते हो, वहाँ तक।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가 원하는 곳이 이 함정이었단 말인가?",
						"english": "Is this trap what I wished for?",
						"japanese": "私が望んだ場所が、この罠だったというのか？",
						"chinese": "我想要的地方就是这个陷阱吗？",
						"french": "L'endroit que je désirais, c'était ce piège ?",
						"spanish": "¿Era esta trampa lo que yo deseaba?",
						"vietnamese": "Nơi ta muốn là cái bẫy này sao?",
						"thai": "ที่ที่ข้าต้องการคือกับดักนี้หรือ?",
						"hindi": "क्या यह जाल वही जगह थी जो मैं चाहता था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "곧 알게 될 거야. 모든 진실을.",
						"english": "You will soon know. All the truth.",
						"japanese": "すぐに分かるだろう。全ての真実を。",
						"chinese": "你很快就会知道。所有的真相。",
						"french": "Tu sauras bientôt. Toute la vérité.",
						"spanish": "Pronto lo sabrás. Toda la verdad.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Mọi sự thật.",
						"thai": "เจ้าจะรู้ในไม่ช้า ความจริงทั้งหมด",
						"hindi": "तुम्हें जल्द ही पता चलेगा। सारी सच्चाई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "분노가 들끓었다. 이 길은 돌아갈 수 없었다.",
						"english": "Rage boiled. This path was irreversible.",
						"japanese": "怒りが沸き上がった。この道はもう引き返せない。",
						"chinese": "怒火中烧。此路无法回头。",
						"french": "La rage bouillait. Ce chemin était irréversible.",
						"spanish": "La ira bullía. Este camino no tenía vuelta atrás.",
						"vietnamese": "Cơn thịnh nộ bùng lên. Không thể quay lại con đường này.",
						"thai": "ความโกรธเดือดพล่าน เส้นทางนี้ไม่อาจย้อนกลับได้",
						"hindi": "क्रोध उबल पड़ा। इस राह से वापस नहीं जाया जा सकता था।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 분노… 환영을 뚫을 순 없어.",
						"english": "Foolish rage... It cannot pierce the illusion.",
						"japanese": "愚かな怒り…幻影を打ち破ることはできない。",
						"chinese": "愚蠢的愤怒…无法穿透幻象。",
						"french": "Rage insensée... Elle ne peut percer l'illusion.",
						"spanish": "Furia insensata... No puede atravesar la ilusión.",
						"vietnamese": "Cơn thịnh nộ ngu ngốc… không thể xuyên qua ảo ảnh.",
						"thai": "ความโกรธที่โง่เขลา... ไม่อาจเจาะทะลุภาพลวงตาได้",
						"hindi": "मूढ़ क्रोध... यह भ्रम को भेद नहीं सकता।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "계속 발버둥 쳐봐. 그 끝은 같을 테니.",
						"english": "Keep struggling. The end will be the same.",
						"japanese": "もがき続けてみろ。その結末は同じだろうから。",
						"chinese": "继续挣扎吧。结局会是一样的。",
						"french": "Continue de te débattre. La fin sera la même.",
						"spanish": "Sigue luchando. El final será el mismo.",
						"vietnamese": "Cứ tiếp tục vùng vẫy đi. Kết cục cũng sẽ như vậy thôi.",
						"thai": "ดิ้นรนต่อไปเถอะ จุดจบก็เหมือนเดิมนั่นแหละ",
						"hindi": "संघर्ष करते रहो। अंत वही होगा।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "강한 분노… 하지만 아직 멀었어.",
						"english": "Potent fury... but you're not there yet.",
						"japanese": "強い怒り…だが、まだ遠い。",
						"chinese": "强大的愤怒……但还差得远。",
						"french": "Une rage puissante... mais ce n'est pas encore ça.",
						"spanish": "Gran ira... pero aún te falta mucho.",
						"vietnamese": "Cơn thịnh nộ mạnh mẽ... nhưng vẫn còn xa lắm.",
						"thai": "ความโกรธเกรี้ยวอันแรงกล้า... แต่ยังไม่พอ",
						"hindi": "प्रबल क्रोध... लेकिन अभी भी बहुत दूर हो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 깬 건… 또 다른 환영일 뿐.",
						"english": "What you broke... was just another illusion.",
						"japanese": "お前が破ったのは…別の幻影に過ぎない。",
						"chinese": "你所打破的……不过是另一个幻象。",
						"french": "Ce que tu as brisé... n'était qu'une autre illusion.",
						"spanish": "Lo que rompiste... fue solo otra ilusión.",
						"vietnamese": "Cái ngươi phá vỡ... chỉ là một ảo ảnh khác mà thôi.",
						"thai": "สิ่งที่เจ้าทำลาย... เป็นเพียงภาพลวงตาอีกภาพหนึ่งเท่านั้น",
						"hindi": "जो तुमने तोड़ा... वह बस एक और भ्रम था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 거짓말 하지 마!",
						"english": "What are you talking about! Don't lie!",
						"japanese": "何を言ってるんだ！嘘をつくな！",
						"chinese": "你在说什么！别撒谎！",
						"french": "De quoi parles-tu ! Ne mens pas !",
						"spanish": "¡De qué hablas! ¡No mientas!",
						"vietnamese": "Ngươi nói gì vậy! Đừng nói dối!",
						"thai": "เจ้าพูดอะไร! อย่าโกหก!",
						"hindi": "क्या बक रहे हो! झूठ मत बोलो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모래처럼 흩어졌다. 하지만 사막은 여전히 침묵했다.",
						"english": "The massive shadow scattered like sand. But the desert remained silent.",
						"japanese": "巨大な影が砂のように散った。しかし砂漠は静寂に包まれたままだった。",
						"chinese": "巨大的黑影如沙般散去。然而沙漠依旧寂静。",
						"french": "L'ombre gigantesque s'est dispersée comme du sable. Mais le désert est resté silencieux.",
						"spanish": "La sombra gigantesca se dispersó como arena. Pero el desierto permaneció en silencio.",
						"vietnamese": "Bóng đen khổng lồ tan biến như cát. Nhưng sa mạc vẫn im lìm.",
						"thai": "เงาขนาดมหึมาสลายไปราวกับทราย แต่ทะเลทรายยังคงเงียบงัน",
						"hindi": "विशाल छाया रेत की तरह बिखर गई। लेकिन रेगिस्तान खामोश रहा。"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "길은 이어지는가. 아니면… 다시 시작되는가.",
						"english": "Does the path continue? Or... does it begin anew?",
						"japanese": "道は続くのか。それとも…再び始まるのか。",
						"chinese": "道路会延续吗？抑或…重新开始？",
						"french": "Le chemin continue-t-il ? Ou... recommence-t-il ?",
						"spanish": "¿Continúa el camino? O... ¿vuelve a empezar?",
						"vietnamese": "Con đường tiếp nối? Hay… lại bắt đầu?",
						"thai": "เส้นทางยังคงดำเนินต่อไปหรือ? หรือ... มันจะเริ่มต้นใหม่อีกครั้ง?",
						"hindi": "क्या रास्ता जारी रहता है? या... क्या यह फिर से शुरू होता है?"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 도착했어. 네가 찾던 진실이 여기 있군.",
						"english": "Finally arrived. The truth you sought is here.",
						"japanese": "ついに着いた。お前が探していた真実がここにある。",
						"chinese": "终于到了。你所寻的真相就在这里。",
						"french": "Enfin arrivé. La vérité que tu cherchais est ici.",
						"spanish": "Finalmente llegaste. La verdad que buscabas está aquí.",
						"vietnamese": "Cuối cùng cũng đến. Sự thật ngươi tìm kiếm ở đây.",
						"thai": "ในที่สุดก็มาถึง ความจริงที่เจ้าค้นหาอยู่ที่นี่",
						"hindi": "आखिरकार आ गए। जिस सच्चाई की तलाश तुम्हें थी, वह यहीं है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 안내한 곳이 여기였단 말이야?",
						"english": "This is where you led me?",
						"japanese": "お前が案内したのはここだったのか？",
						"chinese": "你指引的地方就是这里？",
						"french": "C'est ici que tu m'as mené ?",
						"spanish": "¿Este es el lugar al que me guiaste?",
						"vietnamese": "Nơi ngươi dẫn đường là đây sao?",
						"thai": "ที่นี่คือที่ที่เจ้าชี้ทางมาหรือ?",
						"hindi": "क्या यहीं वह जगह है जहाँ तुमने मुझे रास्ता दिखाया था?"
					},
					"speaker": "character_any"
				},
				{
					"action": "exit",
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"direction": "up"
				},
				{
					"content": {
						"korean": "아미르가 사라진 자리에 거대한 그림자가 나타났다.",
						"english": "A colossal shadow appeared where Amir vanished.",
						"japanese": "アミールが消えた場所に、巨大な影が現れた。",
						"chinese": "阿米尔消失的地方，一个巨大的影子出现了。",
						"french": "Une ombre colossale apparut là où Amir avait disparu.",
						"spanish": "Una sombra colosal apareció donde Amir desapareció.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện tại nơi Amir biến mất.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ณ จุดที่อามีร์หายไป",
						"hindi": "अमीर के गायब होते ही, एक विशालकाय छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영은 달콤한 거짓. 네 분노는 진짜구나.",
						"english": "Illusions are sweet lies. Your rage is real.",
						"japanese": "幻影は甘い嘘。お前の怒りは本物だ。",
						"chinese": "幻象是甜美的谎言。你的愤怒是真实的。",
						"french": "Les illusions sont de doux mensonges. Ta rage est réelle.",
						"spanish": "Las ilusiones son dulces mentiras. Tu ira es real.",
						"vietnamese": "Ảo ảnh là lời nói dối ngọt ngào. Cơn giận của ngươi là thật.",
						"thai": "ภาพลวงตาคือคำโกหกอันหอมหวาน ความโกรธของเจ้าคือของจริง",
						"hindi": "भ्रम मीठे झूठ हैं। तुम्हारा क्रोध असली है।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "누구냐, 너는!",
						"english": "Who are you!",
						"japanese": "貴様、何者だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres tú!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "कौन हो तुम!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 가르쳐줄 자.",
						"english": "The one who will teach you the truth.",
						"japanese": "真実を教えてやる者だ。",
						"chinese": "告知你真相之人。",
						"french": "Celui qui te révélera la vérité.",
						"spanish": "Quien te mostrará la verdad.",
						"vietnamese": "Kẻ sẽ dạy ngươi sự thật.",
						"thai": "ผู้ที่จะบอกความจริงแก่เจ้า",
						"hindi": "वह जो तुम्हें सच्चाई बताएगा।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 사막. 모래가 속삭이는 곳.",
			"길을 안내하는 자, 아미르.",
			"그의 말은 달콤했지만, 시선은 비틀려 있었다.",
			"진실과 환영, 그 경계가 모호해지는 길 위에서 —",
			"분노가 다시 타오르기 시작한다."
		],
		"english": [
			"Endless desert. Where sand whispers.",
			"The one who guides the way, Amir.",
			"His words were sweet, but his gaze was twisted.",
			"On a path where truth and illusion blur —",
			"Rage begins to burn anew."
		],
		"japanese": [
			"果てなく広がる砂漠。砂が囁く場所。",
			"道を導く者、アミール。",
			"彼の言葉は甘かったが、その視線は歪んでいた。",
			"真実と幻影、その境界が曖昧になる道の上で —",
			"怒りが再び燃え上がり始める。"
		],
		"chinese": [
			"一望无际的沙漠。沙子低语之地。",
			"指路人，阿米尔。",
			"他的话语甜蜜，眼神却扭曲。",
			"在真相与幻象的界限逐渐模糊的道路上——",
			"怒火再次开始燃烧。"
		],
		"french": [
			"Désert infini. Là où le sable murmure.",
			"Celui qui montre le chemin, Amir.",
			"Ses mots étaient doux, mais son regard était tordu.",
			"Sur un chemin où la frontière entre la vérité et l'illusion s'estompe —",
			"La colère recommence à brûler."
		],
		"spanish": [
			"Desierto sin fin. Donde la arena susurra.",
			"El que guía el camino, Amir.",
			"Sus palabras eran dulces, pero su mirada, retorcida.",
			"En un camino donde la verdad y la ilusión se difuminan —",
			"La furia comienza a arder de nuevo."
		],
		"vietnamese": [
			"Sa mạc vô tận. Nơi cát thì thầm.",
			"Người dẫn đường, Amir.",
			"Lời nói của hắn ngọt ngào, nhưng ánh mắt lại vặn vẹo.",
			"Trên con đường mà ranh giới giữa sự thật và ảo ảnh trở nên mơ hồ —",
			"Cơn giận bắt đầu bùng cháy trở lại."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด ที่ซึ่งผืนทรายกระซิบกระซาบ",
			"ผู้ชี้นำทาง, อามีร์",
			"คำพูดของเขาหวานหู แต่แววตานั้นบิดเบี้ยว",
			"บนเส้นทางที่ความจริงและมายาพร่าเลือน —",
			"ความโกรธเริ่มลุกโชนขึ้นอีกครั้ง"
		],
		"hindi": [
			"अनंत रेगिस्तान। जहाँ रेत फुसफुसाती है।",
			"राह दिखाने वाला, अमीर।",
			"उसके शब्द मीठे थे, लेकिन उसकी निगाहें मुड़ी हुई थीं।",
			"सत्य और भ्रम के बीच, जहाँ सीमाएँ धुँधली होती हैं —",
			"क्रोध फिर से जलने लगता है।"
		]
	}
} as const;
