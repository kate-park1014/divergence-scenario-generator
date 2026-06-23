export const scenario_snowy_hildr_66_03 = {
	"scenario_id": "snowy_hildr_66_03",
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
			"끝없는 눈보라 속, 희미한 북극광이 길을 안내했다.",
			"그러나 그 빛은 길잡이가 아니었다. 광기에 사로잡힌 망상일 뿐.",
			"누군가 그 빛을 좇고 있었다. 영원히 사라진 가족을 찾아.",
			"그녀의 환상이 나의 발걸음을 멈추게 했다."
		],
		"english": [
			"In the endless blizzard, a faint aurora guided the way.",
			"But that light was no guide. Only a delusion born of madness.",
			"Someone was chasing that light. Searching for a family long lost.",
			"Her illusion stopped my steps."
		],
		"japanese": [
			"終わりのない吹雪の中、かすかなオーロラが道を導いた。",
			"しかし、その光は道標ではなかった。狂気に囚われた妄想に過ぎない。",
			"誰かがその光を追っていた。永遠に消えた家族を探して。",
			"彼女の幻影が私の足を止めた。"
		],
		"chinese": [
			"在无尽的暴风雪中，微弱的极光指引着道路。",
			"然而那光并非指引。不过是深陷疯狂的妄想。",
			"有人追逐着那光。寻找着永远逝去的家人。",
			"她的幻象止住了我的脚步。"
		],
		"french": [
			"Dans le blizzard incessant, une faible aurore guidait le chemin.",
			"Mais cette lumière n'était pas un guide. Seulement une illusion née de la folie.",
			"Quelqu'un suivait cette lumière. À la recherche d'une famille perdue à jamais.",
			"Son illusion a stoppé mes pas."
		],
		"spanish": [
			"En la ventisca interminable, una tenue aurora guiaba el camino.",
			"Pero esa luz no era una guía. Solo un delirio nacido de la locura.",
			"Alguien seguía esa luz. Buscando a una familia perdida para siempre.",
			"Su ilusión detuvo mis pasos."
		],
		"vietnamese": [
			"Giữa bão tuyết vô tận, cực quang mờ ảo dẫn lối.",
			"Nhưng ánh sáng đó không phải là chỉ dẫn. Chỉ là ảo tưởng sinh ra từ sự điên loạn.",
			"Ai đó đang đuổi theo ánh sáng đó. Tìm kiếm gia đình đã mất từ lâu.",
			"Ảo ảnh của cô ấy đã chặn bước chân tôi."
		],
		"thai": [
			"ท่ามกลางพายุหิมะไม่สิ้นสุด แสงออโรร่าจางๆ นำทาง",
			"แต่แสงนั้นไม่ใช่สิ่งนำทาง เป็นเพียงภาพลวงตาจากความบ้าคลั่ง",
			"มีบางคนกำลังไล่ตามแสงนั้น ตามหาครอบครัวที่หายไปตลอดกาล",
			"ภาพลวงตาของเธอหยุดยั้งก้าวเดินของฉัน"
		],
		"hindi": [
			"अंतहीन बर्फीले तूफान में, एक हल्की अरोरा ने रास्ता दिखाया।",
			"पर वो रोशनी राह दिखाने वाली नहीं थी। बस पागलपन से जन्मा एक भ्रम।",
			"कोई उस रोशनी का पीछा कर रहा था। अपने हमेशा के लिए खोए हुए परिवार को ढूंढने के लिए।",
			"उसकी कल्पना ने मेरे कदम रोक दिए।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 절벽 아래, 북극광이 춤추고 있었다.",
						"english": "Below the massive ice cliff, the aurora danced.",
						"japanese": "巨大な氷の崖の下、オーロラが舞っていた。",
						"chinese": "巨大的冰崖之下，极光翩翩起舞。",
						"french": "Sous l'immense falaise de glace, l'aurore dansait.",
						"spanish": "Bajo el acantilado de hielo masivo, la aurora danzaba.",
						"vietnamese": "Bên dưới vách băng khổng lồ, cực quang đang nhảy múa.",
						"thai": "ใต้หน้าผาน้ำแข็งขนาดใหญ่ แสงออโรร่ากำลังเต้นรำ",
						"hindi": "विशाल बर्फीली चट्टान के नीचे, अरोरा नाच रही थी।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "happy",
					"content": {
						"korean": "…왔구나. 나의 빛.",
						"english": "...You've come. My light.",
						"japanese": "…来たのね。私の光。",
						"chinese": "…你来了。我的光。",
						"french": "...Tu es venue. Ma lumière.",
						"spanish": "...Has venido. Mi luz.",
						"vietnamese": "...Ngươi đã đến. Ánh sáng của ta.",
						"thai": "...มาแล้วสินะ แสงสว่างของฉัน",
						"hindi": "...तुम आ गए। मेरी रोशनी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो तुम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라. 잊힌 것을 기록하는 자. 그리고… 잃어버린 자들을 찾는 자.",
						"english": "Eira. The one who records the forgotten. And... the one who seeks the lost.",
						"japanese": "エイラ。忘れられたものを記録する者。そして…失われた者たちを探す者。",
						"chinese": "艾拉。记录被遗忘之物者。以及…寻找迷失之人者。",
						"french": "Eira. Celle qui consigne l'oubli. Et... celle qui cherche les perdus.",
						"spanish": "Eira. La que registra lo olvidado. Y... la que busca a los perdidos.",
						"vietnamese": "Eira. Người ghi lại những điều bị lãng quên. Và... người tìm kiếm những kẻ đã mất.",
						"thai": "เอร่า ผู้บันทึกสิ่งที่ถูกลืม และ... ผู้ตามหาผู้ที่สาบสูญ",
						"hindi": "एरा। भूली हुई चीज़ों को दर्ज करने वाली। और... खोए हुए लोगों को ढूंढने वाली।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "북극광이 나를 불렀어. 가족들이 저 안에 있어.",
						"english": "The aurora called me. My family is in there.",
						"japanese": "オーロラが私を呼んだ。家族があの中にいる。",
						"chinese": "极光呼唤着我。我的家人在里面。",
						"french": "L'aurore m'a appelée. Ma famille est là-dedans.",
						"spanish": "La aurora me llamó. Mi familia está ahí dentro.",
						"vietnamese": "Cực quang đã gọi tôi. Gia đình tôi ở trong đó.",
						"thai": "แสงออโรร่าเรียกฉัน ครอบครัวของฉันอยู่ในนั้น",
						"hindi": "अरोरा ने मुझे बुलाया। मेरा परिवार वहाँ अंदर है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"emotion": "happy",
					"content": {
						"korean": "빛은 점점 강해지고 있어. 내가 가는 길이 맞아.",
						"english": "The light is growing stronger. I'm on the right path.",
						"japanese": "光はどんどん強くなっている。私の進む道は正しい。",
						"chinese": "光芒越来越强。我走的路没错。",
						"french": "La lumière devient de plus en plus forte. Je suis sur la bonne voie.",
						"spanish": "La luz se está haciendo más fuerte. Estoy en el camino correcto.",
						"vietnamese": "Ánh sáng đang ngày càng mạnh hơn. Con đường tôi đang đi là đúng.",
						"thai": "แสงยิ่งเข้มข้นขึ้นเรื่อยๆ ฉันมาถูกทางแล้ว",
						"hindi": "रोशनी तेज़ होती जा रही है। मैं सही रास्ते पर हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나침반이 이상해. 빛에 가까워질수록 제멋대로 돌아.",
						"english": "The compass is acting strange. It spins wildly as we approach the light.",
						"japanese": "羅針盤がおかしい。光に近づくほど、勝手に回る。",
						"chinese": "指南针不对劲。越靠近光，它转得越厉害。",
						"french": "La boussole est bizarre. Elle tourne follement plus on s'approche de la lumière.",
						"spanish": "La brújula está rara. Gira sin control cuanto más nos acercamos a la luz.",
						"vietnamese": "La bàn lạ quá. Càng đến gần ánh sáng, nó càng quay loạn xạ.",
						"thai": "เข็มทิศแปลกไป ยิ่งเข้าใกล้แสงมันก็ยิ่งหมุนเอง",
						"hindi": "कंपास अजीब व्यवहार कर रहा है। जैसे ही हम रोशनी के करीब आते हैं, यह बेतहाशा घूमने लगता है。"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "신경 쓰지 마. 진실은 눈으로 봐야 해. 기록으로 남겨야 하고.",
						"english": "Don't mind it. Truth must be seen with our own eyes. And recorded.",
						"japanese": "気にするな。真実はこの目で見るべきだ。そして記録に残すべきだ。",
						"chinese": "别管它。真相必须亲眼所见。并且要记录下来。",
						"french": "N'y prête pas attention. La vérité doit être vue de nos propres yeux. Et enregistrée.",
						"spanish": "No te preocupes. La verdad debe verse con los propios ojos. Y registrarse.",
						"vietnamese": "Đừng bận tâm. Sự thật phải được nhìn thấy bằng mắt. Và phải được ghi lại.",
						"thai": "อย่าไปสนใจ ความจริงต้องเห็นด้วยตา และต้องถูกบันทึกไว้",
						"hindi": "चिंता मत करो। सच अपनी आँखों से देखना होगा। और दर्ज भी करना होगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "오래된 룬이 말해주고 있어. 이 길의 끝에… 기다림이 있다고.",
						"english": "Ancient runes tell us. At the end of this path... waits something.",
						"japanese": "古のルーンが告げている。この道の先に… 待ち受けるものがあると。",
						"chinese": "古老的符文告诉我们。这条路的尽头… 有等待。",
						"french": "Les runes anciennes nous disent. Au bout de ce chemin… une attente.",
						"spanish": "Las runas antiguas nos dicen. Al final de este camino… hay una espera.",
						"vietnamese": "Những ký tự cổ xưa nói rằng. Ở cuối con đường này… có một sự chờ đợi.",
						"thai": "รูนโบราณบอกเราว่า... ที่สุดปลายทางนี้... มีการรอคอยอยู่",
						"hindi": "प्राचीन runes हमें बताते हैं। इस रास्ते के अंत में… इंतज़ार है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "눈보라 소리가… 슬픈 노래처럼 들려.",
						"english": "The blizzard's sound... It sounds like a sad song.",
						"japanese": "吹雪の音が… 悲しい歌のように聞こえる。",
						"chinese": "暴风雪的声音… 听起来像一首悲伤的歌。",
						"french": "Le son du blizzard… Ça ressemble à une chanson triste.",
						"spanish": "El sonido de la ventisca… Suena como una canción triste.",
						"vietnamese": "Tiếng bão tuyết… nghe như một bài hát buồn.",
						"thai": "เสียงพายุหิมะ... เหมือนบทเพลงที่เศร้าสร้อย",
						"hindi": "बर्फ़ीले तूफ़ान की आवाज़… एक दुखद गीत जैसी लगती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 가족들이 부르는 소리야. 저들이 나를 기다리고 있어.",
						"english": "It's my family calling. They're waiting for me.",
						"japanese": "家族が呼んでいる声だ。彼らが私を待っている。",
						"chinese": "是我家人在呼唤。他们在等我。",
						"french": "C'est ma famille qui appelle. Ils m'attendent.",
						"spanish": "Es mi familia la que llama. Me están esperando.",
						"vietnamese": "Là tiếng gia đình tôi gọi. Họ đang chờ tôi.",
						"thai": "เป็นเสียงครอบครัวฉันเรียก พวกเขากำลังรอฉันอยู่",
						"hindi": "यह मेरे परिवार की पुकार है। वे मेरा इंतज़ार कर रहे हैं।"
					},
					"emotion": "happy",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 이건… 뭔가 다른 소리 같아.",
						"english": "No, this... This sounds like something else.",
						"japanese": "いや、これは… 何か違う音のようだ。",
						"chinese": "不，这… 这听起来像别的声音。",
						"french": "Non, ça… Ça ressemble à autre chose.",
						"spanish": "No, esto… Esto suena a otra cosa.",
						"vietnamese": "Không, đây… hình như là một âm thanh khác.",
						"thai": "ไม่สิ นี่มัน... เหมือนเสียงอื่น",
						"hindi": "नहीं, यह… यह कुछ और ही आवाज़ लग रही है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럴 리 없어. 내가 틀릴 리 없어. 빛은… 나를 배신하지 않아.",
						"english": "That can't be. I can't be wrong. The light... it won't betray me.",
						"japanese": "そんなはずない。私が間違っているはずがない。光は… 私を裏切らない。",
						"chinese": "不可能。我不可能错。光… 不会背叛我。",
						"french": "C'est impossible. Je ne peux pas me tromper. La lumière… ne me trahira pas.",
						"spanish": "No puede ser. No puedo estar equivocado. La luz… no me traicionará.",
						"vietnamese": "Không thể nào. Tôi không thể sai được. Ánh sáng… sẽ không phản bội tôi.",
						"thai": "เป็นไปไม่ได้ ฉันไม่มีทางผิด แสงสว่าง... ไม่ทรยศฉัน",
						"hindi": "ऐसा नहीं हो सकता। मैं गलत नहीं हो सकता। रोशनी… मुझे धोखा नहीं देगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "발자국… 보여? 저 완벽한 흔적들. 저들이 지나간 길이야.",
						"english": "Footprints… See them? Those perfect tracks. That's where they went.",
						"japanese": "足跡… 見えるか？あの完璧な足跡。彼らが通った道だ。",
						"chinese": "脚印… 看到了吗？那些完美的痕迹。那是他们走过的路。",
						"french": "Des empreintes… Tu les vois ? Ces traces parfaites. C'est le chemin qu'ils ont pris.",
						"spanish": "¿Huellas… las ves? Esas marcas perfectas. Ese es el camino que tomaron.",
						"vietnamese": "Dấu chân… thấy không? Những dấu vết hoàn hảo đó. Đó là con đường họ đã đi qua.",
						"thai": "รอยเท้า... เห็นไหม? ร่องรอยที่สมบูรณ์แบบเหล่านั้น นั่นคือทางที่พวกเขาผ่านมา",
						"hindi": "पैरों के निशान… दिख रहे हैं? वे सही निशान। वह रास्ता है जिससे वे गए।"
					},
					"speaker": "eira",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 발자국이 눈 속에 완벽히 보존되어 있었다. 그러나 흔적은 절벽 끝에서 끊겨 있었다.",
						"english": "Ancient footprints were perfectly preserved in the snow. But the tracks ended at the cliff's edge.",
						"japanese": "古の足跡は雪の中に完璧に保存されていた。しかし、その痕跡は崖の先端で途絶えていた。",
						"chinese": "古老的脚印在雪中完美地保存着。然而，痕迹在悬崖边中断了。",
						"french": "D'anciennes empreintes étaient parfaitement conservées dans la neige. Mais les traces s'arrêtaient au bord de la falaise.",
						"spanish": "Antiguas huellas estaban perfectamente conservadas en la nieve. Pero las marcas terminaban en el borde del acantilado.",
						"vietnamese": "Dấu chân cổ xưa được bảo tồn hoàn hảo trong tuyết. Nhưng dấu vết đã dừng lại ở rìa vách đá.",
						"thai": "รอยเท้าโบราณถูกเก็บรักษาไว้อย่างสมบูรณ์แบบในหิมะ แต่รอยเท้าเหล่านั้นก็ขาดหายไปตรงสุดปลายผา",
						"hindi": "बर्फ में पुराने पैरों के निशान पूरी तरह से सुरक्षित थे। लेकिन निशान चट्टान के किनारे पर खत्म हो गए थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건 막다른 길이야. 발자국이 사라졌어.",
						"english": "This is a dead end. The footprints vanished.",
						"japanese": "これは行き止まりだ。足跡が消えた。",
						"chinese": "这是死路。脚印消失了。",
						"french": "C'est une impasse. Les empreintes ont disparu.",
						"spanish": "Esto es un callejón sin salida. Las huellas desaparecieron.",
						"vietnamese": "Đây là ngõ cụt. Dấu chân đã biến mất.",
						"thai": "นี่คือทางตัน รอยเท้าหายไปแล้ว",
						"hindi": "यह एक बंद गली है। पैरों के निशान गायब हो गए हैं।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "아니, 그럴 리 없어. 그들은 빛을 따라 더 깊이 들어간 거야. 빛이 나를 기다리고 있어.",
						"english": "No, that can't be. They followed the light deeper. The light is waiting for me.",
						"japanese": "いや、そんなはずない。彼らは光を追ってさらに奥へ進んだんだ。光が私を待っている。",
						"chinese": "不，不可能。他们跟着光线深入了。光在等我。",
						"french": "Non, ce n'est pas possible. Ils ont suivi la lumière plus profondément. La lumière m'attend.",
						"spanish": "No, no puede ser. Siguieron la luz más profundo. La luz me está esperando.",
						"vietnamese": "Không, không thể nào. Họ đã đi sâu hơn theo ánh sáng. Ánh sáng đang chờ tôi.",
						"thai": "ไม่ ไม่จริง พวกเขาตามแสงเข้าไปลึกกว่านั้น แสงกำลังรอฉันอยู่",
						"hindi": "नहीं, ऐसा नहीं हो सकता। वे रोशनी का पीछा करते हुए और गहरे चले गए। रोशनी मेरा इंतज़ार कर रही है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "빛 속에서… 설명할 수 없는 냉기가 느껴져. 단순히 추운 게 아니야.",
						"english": "In the light... I feel an inexplicable chill. It's not just cold.",
						"japanese": "光の中で…説明できない冷気を感じる。ただ寒いだけじゃない。",
						"chinese": "在光中…我感受到一种无法解释的寒意。不仅仅是冷。",
						"french": "Dans la lumière… je ressens une froideur inexplicable. Ce n'est pas juste du froid.",
						"spanish": "En la luz... siento un frío inexplicable. No es solo frío.",
						"vietnamese": "Trong ánh sáng... tôi cảm thấy một sự lạnh lẽo không thể giải thích. Không chỉ là lạnh thông thường.",
						"thai": "ในแสง…ฉันรู้สึกถึงความเย็นยะเยือกที่อธิบายไม่ได้ มันไม่ใช่แค่ความหนาวเย็นธรรมดา",
						"hindi": "रोशनी में... मुझे एक अजीब सी ठंडक महसूस हो रही है। यह सिर्फ़ ठंड नहीं है।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "길 잃은 자여. 빛은 너를 기다리지 않는다.",
						"english": "Lost one. The light awaits no one.",
						"japanese": "迷いし者よ。光は君を待たない。",
						"chinese": "迷失者啊。光不会等你。",
						"french": "Âme perdue. La lumière ne t'attend pas.",
						"spanish": "Oh, alma perdida. La luz no te espera.",
						"vietnamese": "Kẻ lạc lối. Ánh sáng sẽ không chờ đợi ngươi.",
						"thai": "ผู้หลงทางเอ๋ย แสงสว่างไม่รอเจ้าหรอก",
						"hindi": "हे भटके हुए। प्रकाश तुम्हारा इंतजार नहीं करता।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 나는 아직 끝나지 않았어. 진실을 찾을 거야.",
						"english": "No... I'm not done yet. I will find the truth.",
						"japanese": "いや…私はまだ終わってない。真実を見つける。",
						"chinese": "不……我还没结束。我会找到真相的。",
						"french": "Non... Je n'ai pas encore fini. Je trouverai la vérité.",
						"spanish": "No... Aún no he terminado. Encontraré la verdad.",
						"vietnamese": "Không… Tôi vẫn chưa kết thúc. Tôi sẽ tìm ra sự thật.",
						"thai": "ไม่… ฉันยังไม่จบ ฉันจะหาความจริงให้เจอ",
						"hindi": "नहीं… मैं अभी खत्म नहीं हुआ हूँ। मैं सच ढूंढूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 너도 같은 길을 걷겠지. 빛은… 모든 것을 삼킨다.",
						"english": "...Eventually, you too will walk the same path. The light... devours everything.",
						"japanese": "…結局、お前も同じ道を辿るだろう。光は…全てを飲み込む。",
						"chinese": "…最终，你也会走上同样的道路。光…吞噬一切。",
						"french": "...Finalement, toi aussi tu suivras le même chemin. La lumière... dévore tout.",
						"spanish": "...Al final, tú también seguirás el mismo camino. La luz... lo devora todo.",
						"vietnamese": "...Cuối cùng, ngươi cũng sẽ đi cùng con đường. Ánh sáng... nuốt chửng mọi thứ.",
						"thai": "…สุดท้ายแล้ว แกก็คงจะเดินตามทางเดียวกัน แสง…กลืนกินทุกสิ่ง",
						"hindi": "...आखिरकार, तुम भी वही रास्ता चुनोगे। रोशनी... सब कुछ निगल जाती है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 나는 답을 찾을 거야. 에이라처럼 되진 않아.",
						"english": "No. I will find the answer. I won't end up like Eira.",
						"japanese": "いいえ。私は答えを見つけます。エイラと同じにはならない。",
						"chinese": "不。我一定会找到答案。我不会像艾拉一样。",
						"french": "Non. Je trouverai la réponse. Je ne finirai pas comme Eira.",
						"spanish": "No. Encontraré la respuesta. No terminaré como Eira.",
						"vietnamese": "Không. Tôi sẽ tìm ra câu trả lời. Tôi sẽ không giống Eira.",
						"thai": "ไม่ ฉันจะหาคำตอบให้ได้ ฉันจะไม่เป็นเหมือนไอร่า",
						"hindi": "नहीं। मैं जवाब ढूंढ लूंगा। मैं एरा जैसा नहीं बनूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "허무하게 사라진 그림자. 그러나 북극광은 여전히 그들을 유혹하고 있었다.",
						"english": "Shadows vanished in vain. Yet, the aurora still beckoned them.",
						"japanese": "虚しく消えた影。しかし、オーロラは未だ彼らを誘っていた。",
						"chinese": "虚无地消失的影子。然而，北极光仍在诱惑着他们。",
						"french": "Des ombres disparues en vain. Pourtant, les aurores boréales les attiraient toujours.",
						"spanish": "Sombras desvanecidas en vano. Sin embargo, la aurora boreal aún los atraía.",
						"vietnamese": "Những bóng hình tan biến vô vọng. Nhưng cực quang vẫn đang quyến rũ họ.",
						"thai": "เงาที่เลือนหายไปอย่างไร้ค่า ทว่าแสงเหนือยังคงดึงดูดพวกเขาอยู่",
						"hindi": "व्यर्थ में लुप्त हुई परछाइयाँ। फिर भी, ध्रुवीय ज्योति उन्हें अब भी आकर्षित कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "발걸음은 무거웠다. 확신은 흔들렸다. 길은 여전히 미궁이었다.",
						"english": "Steps were heavy. Conviction wavered. The path remained a labyrinth.",
						"japanese": "足取りは重かった。確信は揺らいだ。道は未だ迷宮だった。",
						"chinese": "脚步沉重。信念动摇。前路仍是迷宫。",
						"french": "Les pas étaient lourds. La conviction vacillait. Le chemin restait un labyrinthe.",
						"spanish": "Los pasos eran pesados. La convicción vacilaba. El camino seguía siendo un laberinto.",
						"vietnamese": "Bước chân nặng nề. Niềm tin lay động. Con đường vẫn là một mê cung.",
						"thai": "ก้าวเดินหนักอึ้ง ความมั่นใจสั่นคลอน หนทางยังคงเป็นเขาวงกต",
						"hindi": "कदम भारी थे। निश्चय डगमगाया। रास्ता अब भी एक भूलभुलैया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳이야. 드디어 만났어. 나의 가족…",
						"english": "This is it. I've finally met them. My family...",
						"japanese": "ここだ。ついに会えた。私の家族…",
						"chinese": "就是这里。终于见面了。我的家人…",
						"french": "C'est ici. Je les ai enfin rencontrés. Ma famille...",
						"spanish": "Aquí es. Por fin los encontré. Mi familia...",
						"vietnamese": "Đây rồi. Cuối cùng cũng gặp được. Gia đình của ta...",
						"thai": "ที่นี่เอง ในที่สุดก็ได้พบ ครอบครัวของฉัน…",
						"hindi": "यहीं है। आख़िरकार मिल ही गए। मेरा परिवार..."
					},
					"speaker": "eira",
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…환상에 사로잡힌 어리석은 인간.",
						"english": "...A foolish human, trapped by illusions.",
						"japanese": "…幻想に囚われた愚かな人間め。",
						"chinese": "…被幻想迷惑的愚蠢人类。",
						"french": "...Un être humain stupide, piégé par des illusions.",
						"spanish": "...Un humano necio, atrapado por ilusiones.",
						"vietnamese": "...Một con người ngu ngốc, bị mắc kẹt bởi ảo ảnh.",
						"thai": "…มนุษย์โง่เขลาที่ถูกหลอกด้วยภาพลวงตา",
						"hindi": "...एक मूर्ख इंसान, भ्रम में फँसा हुआ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구냐! 내 가족에게서 떨어져!",
						"english": "Who are you! Get away from my family!",
						"japanese": "誰だ！私の家族から離れろ！",
						"chinese": "你是谁！离我的家人远点！",
						"french": "Qui es-tu ! Laisse ma famille tranquille !",
						"spanish": "¡Quién eres! ¡Aléjate de mi familia!",
						"vietnamese": "Ngươi là ai! Tránh xa gia đình ta ra!",
						"thai": "แกเป็นใคร! อย่าเข้าใกล้ครอบครัวของฉัน!",
						"hindi": "कौन हो तुम! मेरे परिवार से दूर रहो!"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네가 좇는 것은 허상일 뿐. 나를 넘을 순 없다.",
						"english": "What you chase is but an illusion. You cannot overcome me.",
						"japanese": "お前が追うのは虚像に過ぎない。私を超えることはできない。",
						"chinese": "你所追逐的不过是虚像。你无法超越我。",
						"french": "Ce que tu poursuis n'est qu'une illusion. Tu ne peux pas me dépasser.",
						"spanish": "Lo que persigues es solo una ilusión. No puedes superarme.",
						"vietnamese": "Những gì ngươi theo đuổi chỉ là hư ảo. Ngươi không thể vượt qua ta.",
						"thai": "สิ่งที่แกไล่ตามเป็นเพียงภาพลวงตา แกไม่มีทางเอาชนะฉันได้",
						"hindi": "तुम जिस चीज़ का पीछा कर रहे हो, वह बस एक भ्रम है। तुम मुझे पार नहीं कर सकते।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "eira",
					"direction": "up",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "에이라! 저 빛은 위험해!",
						"english": "Aira! That light is dangerous!",
						"japanese": "エイラ！あの光は危険だ！",
						"chinese": "艾拉！那光很危险！",
						"french": "Aira ! Cette lumière est dangereuse !",
						"spanish": "¡Aira! ¡Esa luz es peligrosa!",
						"vietnamese": "Aira! Ánh sáng đó nguy hiểm!",
						"thai": "ไอรา! แสงนั่นอันตราย!",
						"hindi": "ऐरा! वह रोशनी ख़तरनाक है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라는 북극광 속으로 사라졌다. 마치 홀린 듯 더 깊은 미로로 향했다.",
						"english": "Aira vanished into the aurora. As if possessed, she headed deeper into the labyrinth.",
						"japanese": "エイラはオーロラの中へと消えていった。まるで憑りつかれたかのように、さらに深い迷宮へと向かった。",
						"chinese": "艾拉消失在北极光中。仿佛着魔一般，她走向更深的迷宫。",
						"french": "Aira disparut dans l'aurore boréale. Comme possédée, elle se dirigea plus profondément dans le labyrinthe.",
						"spanish": "Aira desapareció en la aurora. Como poseída, se dirigió más profundo en el laberinto.",
						"vietnamese": "Aira biến mất vào cực quang. Cứ như bị mê hoặc, cô ấy đi sâu hơn vào mê cung.",
						"thai": "ไอราหายเข้าไปในแสงออโรรา ราวกับถูกครอบงำ เธอไปลึกเข้าไปในเขาวงกต",
						"hindi": "ऐरा अरोरा में ग़ायब हो गई। जैसे मंत्रमुग्ध होकर, वह भूलभुलैया में और गहरे चली गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…저 빛을 계속 쫓는 게 맞는 걸까.",
						"english": "...Is it right to keep chasing that light?",
						"japanese": "…あの光を追い続けるのが正しいのだろうか。",
						"chinese": "…一直追逐那道光是正确的吗？",
						"french": "...Est-ce que c'est bien de continuer à suivre cette lumière ?",
						"spanish": "...¿Está bien seguir persiguiendo esa luz?",
						"vietnamese": "...Việc tiếp tục đuổi theo ánh sáng đó có đúng không nhỉ?",
						"thai": "…การไล่ตามแสงนั้นต่อไปมันถูกแล้วเหรอ",
						"hindi": "...क्या उस रोशनी का पीछा करते रहना सही है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 15
		}
	]
} as const;
