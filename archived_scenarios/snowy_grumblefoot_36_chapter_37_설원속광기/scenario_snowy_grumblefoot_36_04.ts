export const scenario_snowy_grumblefoot_36_04 = {
	"scenario_id": "snowy_grumblefoot_36_04",
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
	"prologue": {
		"korean": [
			"끝없는 설원, 광기가 그림자처럼 따라붙었다.",
			"심약한 아눅은 눈보라 속에서 점점 무너져갔다.",
			"얼음 궁전의 환영, 그리고 – 서로를 향한 의심.",
			"진실인가, 환상인가. 아무도 믿을 수 없었다."
		],
		"english": [
			"Endless snowfield, madness followed like a shadow.",
			"Faint-hearted Anuk slowly crumbled in the blizzard.",
			"An illusion of an ice palace, and – mutual suspicion.",
			"Truth or illusion. No one could be trusted."
		],
		"japanese": [
			"果てしない雪原、狂気が影のように付き纏った。",
			"気弱なアヌークは吹雪の中で次第に崩れていった。",
			"氷の宮殿の幻影、そして──互いへの不信。",
			"真実か、幻か。誰も信じられなかった。"
		],
		"chinese": [
			"无尽的雪原，疯狂如影随形。",
			"胆怯的阿努克在暴风雪中逐渐崩溃。",
			"冰宫的幻影，以及——彼此的猜疑。",
			"真实还是幻象。无人可信。"
		],
		"french": [
			"Plaine enneigée infinie, la folie me talonnait.",
			"Le timide Anuk s'effondrait peu à peu dans le blizzard.",
			"L'illusion d'un palais de glace, et – la suspicion mutuelle.",
			"Vérité ou illusion. On ne pouvait faire confiance à personne."
		],
		"spanish": [
			"Campo de nieve interminable, la locura me seguía como una sombra.",
			"El débil Anuk se desmoronaba lentamente en la tormenta de nieve.",
			"La ilusión de un palacio de hielo, y – la desconfianza mutua.",
			"¿Verdad o ilusión? Nadie podía ser de confianza."
		],
		"vietnamese": [
			"Tuyết nguyên vô tận, sự điên loạn bám riết như hình với bóng.",
			"Anuk yếu đuối dần gục ngã trong bão tuyết.",
			"Ảo ảnh cung điện băng, và – sự nghi ngờ lẫn nhau.",
			"Thật hay ảo ảnh. Không ai có thể tin được."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด ความบ้าคลั่งติดตามมาดุจเงา",
			"อนุกผู้ใจเสาะค่อยๆ ทรุดโทรมลงท่ามกลางพายุหิมะ",
			"ภาพลวงตาของปราสาทน้ำแข็ง และ – ความสงสัยซึ่งกันและกัน",
			"ความจริงหรือภาพลวงตา ไม่มีใครน่าเชื่อถือ"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान, पागलपन एक छाया की तरह पीछा कर रहा था।",
			"कमज़ोर दिल वाला अनूक बर्फीले तूफ़ान में धीरे-धीरे बिखर रहा था।",
			"बर्फ के महल का भ्रम, और - एक-दूसरे पर शक।",
			"सच या भ्रम। किसी पर भरोसा नहीं किया जा सकता था।"
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
						"korean": "설원은 모든 것을 삼켰다. 시야는 한 치 앞도 보이지 않았다.",
						"english": "The snowfield swallowed everything. Visibility was zero.",
						"japanese": "雪原はすべてを飲み込んだ。視界は遮られ、何も見えなかった。",
						"chinese": "雪原吞噬了一切。眼前一片漆黑。",
						"french": "La plaine enneigée a tout englouti. La visibilité était nulle.",
						"spanish": "El campo de nieve lo devoró todo. La visibilidad era nula.",
						"vietnamese": "Tuyết nguyên nuốt chửng mọi thứ. Tầm nhìn bằng không.",
						"thai": "ทุ่งหิมะกลืนกินทุกสิ่ง ทัศนวิสัยเป็นศูนย์",
						"hindi": "बर्फीले मैदान ने सब कुछ निगल लिया। एक इंच भी दिखाई नहीं दे रहा था।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "…이거, 뭔가 이상해. 전부 나를 노리고 있어.",
						"english": "...Something's wrong. Everything's targeting me.",
						"japanese": "…何かおかしい。全部私を狙ってる。",
						"chinese": "……有些不对劲。一切都冲着我来。",
						"french": "...C'est bizarre. Tout me vise.",
						"spanish": "...Algo está mal. Todo me está apuntando.",
						"vietnamese": "...Có gì đó không ổn. Mọi thứ đang nhắm vào tôi.",
						"thai": "…นี่มันแปลกๆ ทุกอย่างกำลังจ้องเล่นงานฉัน",
						"hindi": "...कुछ तो गड़बड़ है। सब मुझे निशाना बना रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "아눅, 무슨 소리야.",
						"english": "Anuk, what are you talking about?",
						"japanese": "アヌーク、何を言ってるんだ。",
						"chinese": "阿努克，你在说什么。",
						"french": "Anuk, de quoi parles-tu ?",
						"spanish": "Anuk, ¿de qué estás hablando?",
						"vietnamese": "Anuk, cậu đang nói gì vậy?",
						"thai": "อนุก เธอพูดอะไรน่ะ",
						"hindi": "अनूक, तुम क्या कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "저 눈보라도, 저 속삭임도… 전부 날 조롱하고 있어!",
						"english": "That blizzard, those whispers... they're all mocking me!",
						"japanese": "あの吹雪も、あの囁きも…全部私を嘲笑っている！",
						"chinese": "那暴风雪，那些耳语……全都在嘲笑我！",
						"french": "Ce blizzard, ces murmures... ils se moquent tous de moi !",
						"spanish": "Esa tormenta de nieve, esos susurros... ¡todos se están burlando de mí!",
						"vietnamese": "Cơn bão tuyết đó, những lời thì thầm đó... tất cả đang chế nhạo tôi!",
						"thai": "ทั้งพายุหิมะ ทั้งเสียงกระซิบ… ทุกสิ่งกำลังเย้ยหยันฉัน!",
						"hindi": "वह बर्फीला तूफ़ान भी, वह फुसफुसाहट भी... सब मेरा मज़ाक उड़ा रहे हैं!"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잠시 눈보라가 걷혔다. 저 멀리, 거대한 얼음 궁전이 아른거렸다.",
						"english": "The blizzard briefly cleared. In the distance, a massive ice palace shimmered.",
						"japanese": "束の間、吹雪が晴れた。遠くに、巨大な氷の宮殿が揺らめいていた。",
						"chinese": "暴风雪暂时停了。远处，一座巨大的冰宫若隐若现。",
						"french": "Le blizzard s'est dissipé un instant. Au loin, un immense palais de glace scintillait.",
						"spanish": "La tormenta de nieve se disipó brevemente. A lo lejos, un enorme palacio de hielo relucía.",
						"vietnamese": "Bão tuyết tạm lắng. Từ xa, một cung điện băng khổng lồ lấp lánh.",
						"thai": "พายุหิมะสงบลงชั่วครู่ ไกลออกไป ปราสาทน้ำแข็งขนาดมหึมากำลังส่องประกาย",
						"hindi": "बर्फीला तूफ़ान थोड़ी देर के लिए थम गया। दूर, एक विशाल बर्फीला महल चमक रहा था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "봤어? 저거… 저거 진짜야? 나만 본 거야?",
						"english": "Did you see it? That... is that real? Did only I see it?",
						"japanese": "見た？あれ…あれ、本物？私だけが見たの？",
						"chinese": "你看到了吗？那个……那个是真的吗？只有我看到了吗？",
						"french": "Tu l'as vu ? Ça... c'est réel ? Est-ce que je suis le seul à l'avoir vu ?",
						"spanish": "¿Lo viste? Eso... ¿eso es real? ¿Solo yo lo vi?",
						"vietnamese": "Bạn thấy không? Đó... đó là thật sao? Chỉ mình tôi thấy sao?",
						"thai": "เห็นไหม นั่น… นั่นของจริงเหรอ? มีแค่ฉันที่เห็นเหรอ?",
						"hindi": "देखा तुमने? वह... क्या वह असली है? क्या मैंने ही देखा?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아무것도 없는데?",
						"english": "...But there's nothing here?",
						"japanese": "「…何も、ないけど？」",
						"chinese": "……什么都没有？",
						"french": "...Il n'y a rien ici ?",
						"spanish": "¿...No hay nada aquí?",
						"vietnamese": "...Không có gì cả?",
						"thai": "...ไม่มีอะไรเลยนี่?",
						"hindi": "...यहां कुछ भी तो नहीं है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "아니! 분명히 있었어! 너희가 날 속이는 거지?",
						"english": "No! It was here! You're tricking me, aren't you?",
						"japanese": "「違う！確かにあったんだ！俺を騙してるんだろ？」",
						"chinese": "不！明明就在那儿！你们在骗我，对不对？",
						"french": "Non ! C'était bien là ! Vous me trompez, n'est-ce pas ?",
						"spanish": "¡No! ¡Estaba ahí! ¿Me están engañando, verdad?",
						"vietnamese": "Không! Rõ ràng nó ở đó! Các người đang lừa tôi phải không?",
						"thai": "ไม่ใช่! มันต้องมีสิ! พวกนายกำลังหลอกฉันใช่ไหม?",
						"hindi": "नहीं! वह पक्का वहीं था! तुम सब मुझे धोखा दे रहे हो, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "아눅, 진정해. 환각일 수도 있어.",
						"english": "Anuk, calm down. It might be a hallucination.",
						"japanese": "「アヌク、落ち着いて。幻覚かもしれない。」",
						"chinese": "阿努克，冷静点。那可能是幻觉。",
						"french": "Anuk, calme-toi. Ce pourrait être une hallucination.",
						"spanish": "Anuk, tranquilízate. Podría ser una alucinación.",
						"vietnamese": "Anuk, bình tĩnh đi. Có thể đó là ảo giác.",
						"thai": "อนุก, ใจเย็นๆ อาจจะเป็นภาพหลอนก็ได้นะ.",
						"hindi": "अनुक, शांत हो जाओ। शायद ये मतिभ्रम है।"
					}
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "환각? 아니, 진실이야! 너희도 한패지?",
						"english": "Hallucination? No, it's real! You're all in on it too, aren't you?",
						"japanese": "「幻覚？違う、真実だ！お前たちもグルだろう？」",
						"chinese": "幻觉？不，那是真的！你们也是一伙的，对吧？",
						"french": "Hallucination ? Non, c'est la vérité ! Vous êtes tous complices, n'est-ce pas ?",
						"spanish": "¿Alucinación? ¡No, es la verdad! ¡Ustedes también están involucrados, verdad?",
						"vietnamese": "Ảo giác? Không, đó là sự thật! Các người cũng thông đồng phải không?",
						"thai": "ภาพหลอน? ไม่ใช่! นี่คือความจริง! พวกนายก็เป็นพวกเดียวกันใช่ไหม?",
						"hindi": "मतिभ्रम? नहीं, ये सच है! तुम सब भी मिले हुए हो, है ना?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고립감은 탐험대를 잠식했다. 서로의 눈빛에서 의심이 싹텼다.",
						"english": "Isolation gnawed at the expedition. Suspicion bloomed in their eyes.",
						"japanese": "「孤立感が探検隊を蝕んだ。互いの視線に疑念が芽生えた。」",
						"chinese": "孤立感侵蚀着探险队。怀疑在彼此的目光中滋生。",
						"french": "L'isolement rongeait l'expédition. La méfiance germait dans leurs regards.",
						"spanish": "El aislamiento carcomía a la expedición. La sospecha brotaba en sus miradas.",
						"vietnamese": "Sự cô lập gặm nhấm đoàn thám hiểm. Nghi ngờ nảy mầm trong ánh mắt của nhau.",
						"thai": "ความโดดเดี่ยวกัดกินคณะสำรวจ ความสงสัยก่อตัวขึ้นในแววตาของกันและกัน.",
						"hindi": "एकांत ने अभियान दल को घेर लिया। एक-दूसरे की नज़रों में शक पनपने लगा।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…다들 날 이상하게 봐. 다들 날 버리려는 거지?",
						"english": "...Everyone's looking at me strangely. You're going to abandon me, aren't you?",
						"japanese": "「…みんな、俺を奇妙な目で見てる。俺を見捨てるつもりなんだろ？」",
						"chinese": "……大家看我的眼神都怪怪的。你们是不是都想抛弃我？",
						"french": "...Tout le monde me regarde bizarrement. Vous allez tous m'abandonner, n'est-ce pas ?",
						"spanish": "...Todos me miran raro. ¿Me van a abandonar todos, verdad?",
						"vietnamese": "...Mọi người đều nhìn tôi lạ lắm. Các người định bỏ rơi tôi phải không?",
						"thai": "...ทุกคนมองฉันแปลกๆ พวกนายจะทิ้งฉันไปใช่ไหม?",
						"hindi": "...सब मुझे अजीब नज़र से देख रहे हैं। क्या तुम सब मुझे छोड़ने वाले हो?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아눅, 우린 널 걱정하는 거야. 너무 지쳤어.",
						"english": "Anuk, we're just worried about you. You're too exhausted.",
						"japanese": "「アヌク、俺たちは君を心配してるんだ。君は疲れすぎてる。」",
						"chinese": "阿努克，我们是担心你。你太累了。",
						"french": "Anuk, nous nous inquiétons pour toi. Tu es épuisé.",
						"spanish": "Anuk, nos preocupamos por ti. Estás demasiado agotado.",
						"vietnamese": "Anuk, chúng tôi lo cho cậu. Cậu quá kiệt sức rồi.",
						"thai": "อนุก, พวกเราเป็นห่วงนายนะ นายเหนื่อยเกินไปแล้ว.",
						"hindi": "अनुक, हम तुम्हारी चिंता कर रहे हैं। तुम बहुत थक गए हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "거짓말! 전부 거짓말이야! 내 말을 믿지 않잖아!",
						"english": "Lies! It's all lies! You don't believe me!",
						"japanese": "「嘘だ！全部嘘だ！俺の言葉を信じてないだろ！」",
						"chinese": "谎话！全都是谎话！你们根本不相信我的话！",
						"french": "Mensonges ! Tout est mensonge ! Vous ne me croyez pas !",
						"spanish": "¡Mentiras! ¡Todo es mentira! ¡No me creen!",
						"vietnamese": "Dối trá! Toàn là dối trá! Các người không tin lời tôi nói!",
						"thai": "โกหก! ทั้งหมดนั่นโกหก! พวกนายไม่เชื่อฉัน!",
						"hindi": "झूठ! सब झूठ है! तुम मेरी बातों पर विश्वास नहीं करते!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "정말 괜찮은 거야? 갈수록 이상해지잖아.",
						"english": "Are you really okay? You're acting stranger and stranger.",
						"japanese": "「本当に大丈夫なのか？ますますおかしくなってるぞ。」",
						"chinese": "你真的还好吗？你越来越不对劲了。",
						"french": "Tu vas vraiment bien ? Tu deviens de plus en plus étrange.",
						"spanish": "¿De verdad estás bien? Cada vez estás más extraño.",
						"vietnamese": "Cậu thực sự ổn chứ? Cậu càng ngày càng lạ rồi đấy.",
						"thai": "นายโอเคจริงๆ เหรอ? นายเริ่มแปลกไปเรื่อยๆ แล้วนะ.",
						"hindi": "क्या तुम सच में ठीक हो? तुम दिन-ब-दिन अजीब होते जा रहे हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어쩌면… 정말 모든 게 환각일지도 몰라.",
						"english": "Perhaps... maybe everything truly is a hallucination.",
						"japanese": "「もしかしたら…本当に全てが幻覚なのかもしれない。」",
						"chinese": "也许……也许一切真的都只是幻觉。",
						"french": "Peut-être... que tout n'est vraiment qu'une hallucination.",
						"spanish": "Quizás... quizás todo sea realmente una alucinación.",
						"vietnamese": "Có lẽ... có lẽ mọi thứ thực sự chỉ là ảo giác.",
						"thai": "บางที... ทุกอย่างอาจจะเป็นภาพหลอนจริงๆ ก็ได้.",
						"hindi": "शायद... शायद सब कुछ सच में मतिभ्रम है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "시간의 흐름조차 잊었다. 모든 것이 환상이자 현실이었다.",
						"english": "Lost track of time. All was illusion and reality.",
						"japanese": "時間の流れさえ忘れた。すべてが幻想であり現実だった。",
						"chinese": "连时间流逝都忘了。一切都是幻象亦是现实。",
						"french": "Oublié le temps. Tout était illusion et réalité.",
						"spanish": "Olvidé el tiempo. Todo era ilusión y realidad.",
						"vietnamese": "Quên cả dòng thời gian. Mọi thứ đều là ảo ảnh và hiện thực.",
						"thai": "ลืมเลือนแม้กระทั่งกาลเวลา ทุกสิ่งเป็นทั้งภาพลวงตาและความจริง",
						"hindi": "समय का भान भी भूल गया। सब कुछ भ्रम और वास्तविकता थी。"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						2,
						4
					]
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "어둠이… 나를 부르고 있어. 모두를 삼킬 거야.",
						"english": "Darkness... calls to me. It will swallow all.",
						"japanese": "闇が…私を呼んでいる。すべてを飲み込むだろう。",
						"chinese": "黑暗…在呼唤我。它将吞噬一切。",
						"french": "L'obscurité… m'appelle. Elle engloutira tout.",
						"spanish": "La oscuridad… me llama. Lo tragará todo.",
						"vietnamese": "Bóng tối… đang gọi ta. Nó sẽ nuốt chửng tất cả.",
						"thai": "ความมืด… กำลังเรียกหาข้า มันจะกลืนกินทุกสิ่ง",
						"hindi": "अंधेरा… मुझे बुला रहा है। वह सबको निगल जाएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아눅! 정신 차려! 널 버리지 않아!",
						"english": "Anuk! Snap out of it! I won't abandon you!",
						"japanese": "アヌク！しっかりしろ！お前を見捨てない！",
						"chinese": "阿努克！清醒点！我不会抛弃你！",
						"french": "Anuk ! Reprends-toi ! Je ne t'abandonnerai pas !",
						"spanish": "¡Anuk! ¡Reacciona! ¡No te abandonaré!",
						"vietnamese": "Anuk! Tỉnh táo lại! Ta sẽ không bỏ rơi ngươi!",
						"thai": "อนุก! ได้สติเดี๋ยวนี้! ข้าไม่ทิ้งเจ้าหรอก!",
						"hindi": "अनुक! होश में आओ! मैं तुम्हें नहीं छोडूंगा!"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "다 소용없어! 우린 모두 미쳐버릴 거야! 결국엔…!",
						"english": "It's useless! We'll all go mad! In the end…!",
						"japanese": "もう無駄だ！我々は皆、狂ってしまうだろう！結局は…！",
						"chinese": "都白费了！我们都会疯掉的！到头来…！",
						"french": "C'est inutile ! Nous allons tous devenir fous ! À la fin… !",
						"spanish": "¡Es inútil! ¡Todos enloqueceremos! Al final…!",
						"vietnamese": "Vô ích thôi! Chúng ta rồi sẽ hóa điên! Cuối cùng thì…!",
						"thai": "มันไร้ประโยชน์! เราจะบ้ากันหมด! ในที่สุดก็…!",
						"hindi": "सब व्यर्थ है! हम सब पागल हो जाएँगे! अंत में…!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "이제 돌아갈 수 없어. 방법은 하나뿐이야.",
						"english": "No turning back now. Only one way.",
						"japanese": "もう戻れない。方法は一つだけだ。",
						"chinese": "已无法回头。只有一条路可走。",
						"french": "Plus de retour possible. Un seul chemin.",
						"spanish": "Ya no hay vuelta atrás. Solo hay una forma.",
						"vietnamese": "Giờ không thể quay lại được nữa. Chỉ có một cách thôi.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว มีทางเดียวเท่านั้น",
						"hindi": "अब वापस नहीं जा सकते। बस एक ही रास्ता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…앞으로 나갈 수밖에 없어.",
						"english": "...Must press onward.",
						"japanese": "…前に進むしかない。",
						"chinese": "…只能向前走了。",
						"french": "…Il faut avancer.",
						"spanish": "...Debemos seguir adelante.",
						"vietnamese": "…Chỉ có thể tiến về phía trước.",
						"thai": "...ต้องเดินหน้าต่อไป",
						"hindi": "...आगे बढ़ना ही होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 흩어졌다. 환각의 근원이 사라졌다.",
						"english": "The colossal shadow slowly dissipated. The source of the illusion vanished.",
						"japanese": "巨大な影が徐々に消え去った。幻覚の根源が消滅した。",
						"chinese": "巨大的黑影渐渐消散。幻觉的根源消失了。",
						"french": "L'ombre colossale se dissipa lentement. La source de l'illusion s'est évanouie.",
						"spanish": "La sombra colosal se disipó lentamente. La fuente de la ilusión desapareció.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Nguồn gốc của ảo ảnh đã biến mất.",
						"thai": "เงาขนาดมหึมาค่อยๆ สลายไป ต้นตอของภาพลวงตาได้หายไปแล้ว",
						"hindi": "विशाल छाया धीरे-धीरे बिखर गई। भ्रम का स्रोत गायब हो गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이것으로… 끝낼 수 있을 거라 생각했나….",
						"english": "...Did you truly think... this would be enough to end it...?",
						"japanese": "…たったこれっぽっちで…終わらせられるとでも…思ったか…。",
						"chinese": "…你以为…这样就能结束吗…？",
						"french": "...Pensiez-vous vraiment... que cela suffirait à y mettre fin...?",
						"spanish": "...¿De verdad creíste... que con esto bastaría para terminarlo...?",
						"vietnamese": "...Ngươi nghĩ rằng... chỉ thế này là có thể kết thúc sao...?",
						"thai": "...คิดว่าแค่นี้...จะจบแล้วงั้นหรือ...?",
						"hindi": "...क्या तुम्हें लगा... कि बस इसी से... सब खत्म हो जाएगा...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "진정한 공포는… 아직 시작되지 않았다….",
						"english": "The true terror... has yet to begin...",
						"japanese": "真の恐怖は…まだ始まっていない…。",
						"chinese": "真正的恐惧…尚未开始…。",
						"french": "La véritable terreur... n'a pas encore commencé...",
						"spanish": "El verdadero terror... aún no ha comenzado...",
						"vietnamese": "Nỗi kinh hoàng thực sự... vẫn chưa bắt đầu...",
						"thai": "ความหวาดกลัวที่แท้จริง...ยังไม่ได้เริ่มต้นขึ้นเลย...",
						"hindi": "असली डर... अभी शुरू नहीं हुआ है..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어….",
						"english": "It's over...",
						"japanese": "終わった…。",
						"chinese": "结束了…。",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Kết thúc rồi...",
						"thai": "จบแล้ว...",
						"hindi": "खत्म हो गया..."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만, 깊어진 의심과 광기는 쉽게 사라지지 않았다. 다음 여정은 더욱 혼돈 속으로.",
						"english": "However, the deepening doubt and madness did not easily fade. The next journey leads deeper into chaos.",
						"japanese": "しかし、深まる疑念と狂気は容易に消えなかった。次の旅は、さらなる混沌の中へ。",
						"chinese": "然而，深化的疑虑与疯狂并未轻易消散。下一段旅程将深入更深的混沌。",
						"french": "Cependant, le doute et la folie grandissants ne disparurent pas si facilement. Le prochain voyage mène plus profondément dans le chaos.",
						"spanish": "Sin embargo, la duda y la locura profundas no se desvanecieron fácilmente. El siguiente viaje se adentra más en el caos.",
						"vietnamese": "Tuy nhiên, sự nghi ngờ và điên loạn đã ăn sâu không dễ dàng biến mất. Hành trình tiếp theo sẽ càng lún sâu vào hỗn loạn.",
						"thai": "ทว่า ความสงสัยและความบ้าคลั่งที่ฝังลึกกลับไม่จางหายไปง่ายๆ การเดินทางครั้งต่อไปจะนำพาสู่ความโกลาหลยิ่งกว่าเดิม",
						"hindi": "हालांकि, गहरा होता संदेह और पागलपन आसानी से दूर नहीं हुआ। अगली यात्रा और भी अराजकता में ले जाती है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 눈보라 속에서 천천히 모습을 드러냈다.",
						"english": "A massive shadow slowly emerged from the blizzard.",
						"japanese": "巨大な影が吹雪の中からゆっくりと姿を現した。",
						"chinese": "巨大的黑影在暴风雪中缓缓现身。",
						"french": "Une ombre immense apparut lentement dans la tempête de neige.",
						"spanish": "Una sombra gigantesca emergió lentamente de la ventisca.",
						"vietnamese": "Một cái bóng khổng lồ từ từ xuất hiện giữa bão tuyết.",
						"thai": "เงาขนาดมหึมาค่อยๆ ปรากฏขึ้นท่ามกลางพายุหิมะ",
						"hindi": "एक विशालकाय छाया बर्फीले तूफान में धीरे-धीरे प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "안 돼…! 도망쳐야 해…! 저건 진짜가 아니야…!",
						"english": "No…! We have to escape…! That's not real…!",
						"japanese": "だめだ…！逃げなければ…！あれは本物じゃない…！",
						"chinese": "不行…！快逃…！那不是真的…！",
						"french": "Non… ! Il faut fuir… ! Ce n'est pas réel… !",
						"spanish": "¡No…! ¡Tenemos que escapar…! ¡Eso no es real…!",
						"vietnamese": "Không…! Phải chạy trốn…! Đó không phải là thật…!",
						"thai": "ไม่นะ…! ต้องหนีไป…! นั่นไม่ใช่ของจริง…!",
						"hindi": "नहीं…! भागना होगा…! वह असली नहीं है…!"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이 어리석은 인간들이여….",
						"english": "O, foolish mortals…",
						"japanese": "ああ、愚かな人間たちよ…。",
						"chinese": "哦，愚蠢的人类啊…。",
						"french": "Ô, stupides mortels…",
						"spanish": "Oh, estúpidos mortales…",
						"vietnamese": "Hỡi những kẻ phàm trần ngu ngốc kia…",
						"thai": "โอ้ มนุษย์ที่โง่เขลาเอ๋ย…",
						"hindi": "ओह, मूर्ख नश्वर प्राणियों…"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "exit",
					"speaker": "anuk",
					"direction": "down"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "저것이… 원흉인가!",
						"english": "Is that… the culprit!",
						"japanese": "あれが…元凶か！",
						"chinese": "那便是…元凶吗！",
						"french": "C'est ça… la cause !",
						"spanish": "¡Es eso… el origen!",
						"vietnamese": "Đó chính là… kẻ chủ mưu sao!",
						"thai": "นั่นคือ… ต้นเหตุหรือนี่!",
						"hindi": "क्या वह… मूल कारण है!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "환각의 폭풍이 탐험대를 집어삼켰다. 모든 것이 흐릿해졌다.",
						"english": "A storm of illusions engulfed the expedition team. Everything blurred.",
						"japanese": "幻覚の嵐が探検隊を飲み込んだ。すべてがぼやけた。",
						"chinese": "幻觉的风暴吞噬了探险队。一切都变得模糊。",
						"french": "Une tempête d'illusions engloutit l'équipe d'expédition. Tout devint flou.",
						"spanish": "Una tormenta de ilusiones engulló al equipo de expedición. Todo se volvió borroso.",
						"vietnamese": "Cơn bão ảo ảnh nuốt chửng đội thám hiểm. Mọi thứ trở nên mờ ảo.",
						"thai": "พายุแห่งภาพลวงตาได้กลืนกินทีมสำรวจไปแล้ว ทุกสิ่งพร่ามัว",
						"hindi": "भ्रम के तूफान ने अभियान दल को निगल लिया। सब कुछ धुंधला हो गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 자들이여… 영원히 헤매어라….",
						"english": "Weaklings... Wander forever...",
						"japanese": "弱き者たちよ…永遠に彷徨え…。",
						"chinese": "弱者们啊…永远迷失吧…。",
						"french": "Faibles... Errez pour l'éternité...",
						"spanish": "Débiles... Vagad por siempre...",
						"vietnamese": "Hỡi những kẻ yếu đuối... Hãy lang thang mãi mãi...",
						"thai": "พวกเจ้าผู้ด้อยปัญญา...จงหลงทางชั่วนิรันดร์...",
						"hindi": "कमजोरों... हमेशा के लिए भटकते रहो..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어!",
						"english": "...It's not over, yet!",
						"japanese": "…まだ、終わってない！",
						"chinese": "…还没，结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Todavía no ha terminado!",
						"vietnamese": "...Chưa, kết thúc đâu!",
						"thai": "...ยังไม่จบนะ!",
						"hindi": "...अभी, खत्म नहीं हुआ है!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
