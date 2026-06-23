export const scenario_modern_cipherpact_31_05 = {
	"scenario_id": "modern_cipherpact_31_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_AncientPact_CipherPact_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "도시의 가장 깊은 곳. 진실이 잠든 심장부다.",
						"english": "The city's deepest place. The heart where truth slumbers.",
						"japanese": "都市の最も深い場所。真実が眠る心臓部だ。",
						"chinese": "城市最深处。真相沉睡的心脏。",
						"french": "L'endroit le plus profond de la ville. Le cœur où la vérité sommeille.",
						"spanish": "El lugar más profundo de la ciudad. El corazón donde la verdad duerme.",
						"vietnamese": "Nơi sâu nhất của thành phố. Trái tim nơi sự thật đang ngủ yên.",
						"thai": "ที่ที่ลึกที่สุดของเมือง หัวใจที่ความจริงหลับใหล",
						"hindi": "शहर का सबसे गहरा स्थान। वह दिल जहाँ सत्य सोता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기까지 왔어. 모든 조각을 모았어.",
						"english": "You've made it. All pieces gathered.",
						"japanese": "ここまで来たか。全てのピースを集めたな。",
						"chinese": "你走到这里了。所有的碎片都集齐了。",
						"french": "Tu es arrivé. Toutes les pièces sont réunies.",
						"spanish": "Llegaste. Todas las piezas reunidas.",
						"vietnamese": "Ngươi đã đến đây. Tất cả các mảnh đã được thu thập.",
						"thai": "เจ้ามาถึงที่นี่แล้ว รวบรวมชิ้นส่วนทั้งหมดแล้ว",
						"hindi": "तुम यहाँ तक आ गए। सभी टुकड़े इकट्ठा कर लिए।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…왔구나. 그 진실의 조각들을 들고.",
						"english": "...You're here. With those fragments of truth.",
						"japanese": "…来たか。その真実の欠片を携えて。",
						"chinese": "…你来了。带着那些真相的碎片。",
						"french": "...Tu es là. Avec ces fragments de vérité.",
						"spanish": "...Llegaste. Con esos fragmentos de verdad.",
						"vietnamese": "...Ngươi đã đến. Mang theo những mảnh sự thật đó.",
						"thai": "...มาถึงแล้วสินะ พร้อมเศษเสี้ยวแห่งความจริงเหล่านั้น",
						"hindi": "...तुम आ गए। उन सच के टुकड़ों के साथ।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "기억나니? 내가 말했지. 모든 것은 반복될 뿐이라고.",
						"english": "Remember? I told you. Everything just repeats.",
						"japanese": "覚えているか？言ったはずだ。全ては繰り返されるだけだと。",
						"chinese": "还记得吗？我说过。一切都只是重复而已。",
						"french": "Tu te souviens ? Je te l'avais dit. Tout ne fait que se répéter.",
						"spanish": "¿Recuerdas? Te lo dije. Todo solo se repite.",
						"vietnamese": "Ngươi có nhớ không? Ta đã nói rồi. Mọi thứ chỉ là sự lặp lại.",
						"thai": "จำได้ไหม? ข้าเคยบอกแล้ว ทุกสิ่งล้วนแค่ซ้ำรอยเดิม",
						"hindi": "याद है? मैंने कहा था। सब कुछ बस दोहराया जाता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "반복이라니? 우리가 밝혀낸 건 새로운 진실이야.",
						"english": "Repeats? What we uncovered is a new truth.",
						"japanese": "繰り返しだと？我々が解き明かしたのは、新しい真実だ。",
						"chinese": "重复？我们揭示的是新的真相。",
						"french": "Répétition ? Ce que nous avons découvert est une nouvelle vérité.",
						"spanish": "¿Repetir? Lo que descubrimos es una nueva verdad.",
						"vietnamese": "Lặp lại ư? Những gì chúng ta đã khám phá là một sự thật mới.",
						"thai": "ซ้ำรอยงั้นรึ? สิ่งที่เราค้นพบคือความจริงใหม่",
						"hindi": "दोहराना? हमने जो उजागर किया है वह एक नया सच है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "새로운 진실? 어리석은 아이들. 진실은 늘 제자리걸음.",
						"english": "A new truth? Foolish children. Truth always stands still.",
						"japanese": "新しい真実？愚かな子供たちめ。真実など常に堂々巡り。",
						"chinese": "新的真相？愚蠢的孩子。真相总是原地踏步。",
						"french": "Une nouvelle vérité ? Enfants stupides. La vérité ne bouge jamais.",
						"spanish": "¿Una nueva verdad? Niños tontos. La verdad siempre se queda quieta.",
						"vietnamese": "Một sự thật mới ư? Những đứa trẻ ngu ngốc. Sự thật luôn dậm chân tại chỗ.",
						"thai": "ความจริงใหม่รึ? เด็กน้อยโง่เขลา ความจริงก็อยู่กับที่เสมอ",
						"hindi": "एक नया सच? मूर्ख बच्चे। सच हमेशा स्थिर रहता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 겪은 모든 일들이… 예전에도 일어났던 것 같지 않니?",
						"english": "Don't all the things you've experienced... feel like they've happened before?",
						"japanese": "お前たちが経験した全ての出来事が…以前にも起こったように感じないか？",
						"chinese": "你们所经历的一切…难道不觉得以前也发生过吗？",
						"french": "Toutes les choses que vous avez vécues... ne donnent-elles pas l'impression de s'être déjà produites ?",
						"spanish": "Todas las cosas que habéis experimentado... ¿no os parece que ya han sucedido antes?",
						"vietnamese": "Không phải tất cả những gì các ngươi đã trải qua... đều giống như đã từng xảy ra trước đây sao?",
						"thai": "เรื่องราวทั้งหมดที่พวกเจ้าเผชิญ… ไม่รู้สึกเหมือนเคยเกิดขึ้นมาก่อนเลยหรือไง?",
						"hindi": "क्या तुम्हें नहीं लगता कि तुमने जो कुछ भी अनुभव किया है... वह पहले भी हो चुका है?"
					},
					"emotion": "sad",
					"speaker": "zoe"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…소름 돋게.",
						"english": "...Chillingly so.",
						"japanese": "…ゾッとするほどに。",
						"chinese": "…令人毛骨悚然。",
						"french": "...À en glacer le sang.",
						"spanish": "...Escalofriante.",
						"vietnamese": "...Nổi da gà.",
						"thai": "...น่าขนลุก",
						"hindi": "...रूह कंपा देने वाला।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "zoe",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "나는 기억의 파편. Cipher Pact의 일부.",
						"english": "I am a fragment of memory. Part of the Cipher Pact.",
						"japanese": "私は記憶の破片。Cipher Pactの一部。",
						"chinese": "我是记忆的碎片。Cipher Pact的一部分。",
						"french": "Je suis un fragment de mémoire. Une partie du Pacte du Chiffre.",
						"spanish": "Soy un fragmento de memoria. Parte del Pacto Cifrado.",
						"vietnamese": "Ta là mảnh vỡ của ký ức. Một phần của Giao Ước Mật Mã.",
						"thai": "ข้าคือเศษเสี้ยวแห่งความทรงจำ ส่วนหนึ่งของ Cipher Pact",
						"hindi": "मैं स्मृति का एक टुकड़ा हूँ। सिफर पैक्ट का हिस्सा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭐라고? 네가…!",
						"english": "What? You...!",
						"japanese": "何だと？お前が…！",
						"chinese": "什么？你…！",
						"french": "Quoi ? Tu... !",
						"spanish": "¿Qué? ¡Tú...!",
						"vietnamese": "Cái gì? Ngươi...!",
						"thai": "ว่าไงนะ? เจ้าคือ…!",
						"hindi": "क्या? तुम...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너희가 찾아낸 진실은 결국 나를 이루는 조각일 뿐.",
						"english": "The truth you've found is ultimately just a piece that makes up me.",
						"japanese": "お前たちが探し出した真実など、結局は私を構成する一片に過ぎない。",
						"chinese": "你们找到的真相，最终不过是构成我的碎片而已。",
						"french": "La vérité que vous avez découverte n'est finalement qu'une pièce qui me compose.",
						"spanish": "La verdad que habéis encontrado es, en última instancia, solo una pieza que me forma.",
						"vietnamese": "Sự thật mà các ngươi tìm thấy cuối cùng cũng chỉ là một mảnh ghép tạo nên ta.",
						"thai": "ความจริงที่พวกเจ้าค้นพบ ก็เป็นเพียงชิ้นส่วนที่ประกอบสร้างตัวข้าเท่านั้น",
						"hindi": "तुम्हें जो सच मिला है, वह अंततः सिर्फ एक टुकड़ा है जो मुझे बनाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 모든 노력이 나를 더 선명하게 만들었다.",
						"english": "All your efforts only made me clearer.",
						"japanese": "君たちのすべての努力が、私をより鮮明にした。",
						"chinese": "你们所有的努力都让我更加清晰。",
						"french": "Tous vos efforts m'ont rendu plus clair.",
						"spanish": "Todos vuestros esfuerzos solo me hicieron más claro.",
						"vietnamese": "Mọi nỗ lực của các ngươi chỉ khiến ta rõ ràng hơn.",
						"thai": "ความพยายามทั้งหมดของพวกเจ้าทำให้ข้าชัดเจนขึ้น",
						"hindi": "तुम्हारे सारे प्रयासों ने मुझे और स्पष्ट कर दिया।"
					},
					"emotion": "happy",
					"speaker": "zoe"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리가 이용당한 거야? 모든 게 거짓이었어?",
						"english": "Were we used? Was everything a lie?",
						"japanese": "私たちは利用されたのか？すべて嘘だったのか？",
						"chinese": "我们被利用了吗？一切都是谎言吗？",
						"french": "Avons-nous été utilisés ? Tout n'était qu'un mensonge ?",
						"spanish": "¿Fuimos utilizados? ¿Todo era una mentira?",
						"vietnamese": "Chúng ta đã bị lợi dụng sao? Tất cả đều là dối trá ư?",
						"thai": "เราถูกหลอกใช้หรือ? ทุกอย่างเป็นเรื่องโกหกหรือ?",
						"hindi": "क्या हमें इस्तेमाल किया गया था? क्या सब झूठ था?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거짓? 진실이란 결국 누군가의 믿음이 깨진 파편일 뿐.",
						"english": "Lies? Truth is merely the shattered fragments of someone's broken belief.",
						"japanese": "嘘？真実とは結局、誰かの信じる心が砕けた破片に過ぎない。",
						"chinese": "谎言？真相不过是某人破碎信念的残片而已。",
						"french": "Mensonges ? La vérité n'est que les fragments brisés de la croyance de quelqu'un.",
						"spanish": "¿Mentiras? La verdad es simplemente los fragmentos rotos de la fe de alguien.",
						"vietnamese": "Dối trá? Sự thật rốt cuộc chỉ là những mảnh vỡ từ niềm tin tan vỡ của một ai đó mà thôi.",
						"thai": "โกหก? แท้จริงแล้วความจริงเป็นเพียงเศษเสี้ยวของความเชื่อที่พังทลายของใครบางคนเท่านั้น",
						"hindi": "झूठ? सत्य तो बस किसी के टूटे हुए विश्वास के टुकड़े मात्र हैं।"
					},
					"speaker": "zoe"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "모든 맹세는 배신으로 돌아왔고, 그 고통이 나를 만들었다.",
						"english": "Every vow returned as betrayal, and that pain created me.",
						"japanese": "すべての誓いは裏切りとなり、その苦痛が私を創り出した。",
						"chinese": "所有的誓言都变成了背叛，那痛苦造就了我。",
						"french": "Chaque serment est revenu en trahison, et cette douleur m'a créé.",
						"spanish": "Cada juramento se convirtió en traición, y ese dolor me creó.",
						"vietnamese": "Mọi lời thề đều trở thành phản bội, và nỗi đau đó đã tạo nên ta.",
						"thai": "ทุกคำสาบานกลับกลายเป็นการทรยศ และความเจ็บปวดนั้นได้สร้างข้าขึ้นมา",
						"hindi": "हर कसम धोखे में बदल गई, और उसी दर्द ने मुझे बनाया।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희가 밝힌 진실도, 또 다른 배신을 낳을 뿐이야.",
						"english": "Even the truth you've uncovered will only breed further betrayal.",
						"japanese": "お前たちが暴いた真実も、また新たな裏切りを生むだけだ。",
						"chinese": "你们揭示的真相，也只会滋生更多的背叛。",
						"french": "Même la vérité que vous avez révélée ne fera qu'engendrer de nouvelles trahisons.",
						"spanish": "Incluso la verdad que habéis revelado solo engendrará más traición.",
						"vietnamese": "Ngay cả sự thật mà các ngươi đã phơi bày cũng chỉ sinh ra thêm những phản bội khác mà thôi.",
						"thai": "แม้ความจริงที่พวกเจ้าเปิดเผยก็จะก่อให้เกิดการทรยศเพิ่มเติมเท่านั้น",
						"hindi": "जो सच तुमने उजागर किया है, वह भी केवल और धोखे को ही जन्म देगा।"
					},
					"emotion": "base",
					"speaker": "zoe"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 심장부, Cipher Pact가 잠들어 있는 곳.",
						"english": "The heart of the city, where the Cipher Pact slumbers.",
						"japanese": "都市の心臓部、Cipher Pactが眠る場所。",
						"chinese": "城市的中心，Cipher Pact沉睡之地。",
						"french": "Le cœur de la ville, où le Pacte Chiffré sommeille.",
						"spanish": "El corazón de la ciudad, donde el Pacto Cifrado yace dormido.",
						"vietnamese": "Trung tâm thành phố, nơi Cipher Pact đang ngủ say.",
						"thai": "ใจกลางเมือง ที่ซึ่ง Cipher Pact หลับใหลอยู่",
						"hindi": "शहर का दिल, जहाँ सिफर पैक्ट सोया हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔구나. 나의 오랜 벗들.",
						"english": "...You've come. My old friends.",
						"japanese": "…来たか。我が旧友たちよ。",
						"chinese": "…你们来了。我的老朋友们。",
						"french": "...Vous êtes venus. Mes vieux amis.",
						"spanish": "...Habéis llegado. Mis viejos amigos.",
						"vietnamese": "...Các ngươi đã đến. Hỡi những người bạn cũ của ta.",
						"thai": "...ในที่สุดก็มาถึง. สหายเก่าของข้า.",
						"hindi": "...तुम आ गए। मेरे पुराने दोस्तो।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 Cipher Pact… 우리가 진실을 밝혀냈어!",
						"english": "You're the Cipher Pact... We've uncovered the truth!",
						"japanese": "お前がCipher Pact… 私たちが真実を暴いたぞ！",
						"chinese": "你就是Cipher Pact… 我们揭示了真相！",
						"french": "Tu es le Pacte Chiffré... Nous avons découvert la vérité !",
						"spanish": "Eres el Pacto Cifrado... ¡Hemos descubierto la verdad!",
						"vietnamese": "Ngươi là Cipher Pact... Chúng ta đã phơi bày sự thật rồi!",
						"thai": "เจ้าคือ Cipher Pact... เราเปิดเผยความจริงได้แล้ว!",
						"hindi": "तुम ही सिफर पैक्ट हो... हमने सच उजागर कर दिया!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실? 그건 나의 유일한 벗이자 감옥.",
						"english": "Truth? It's my only friend and my prison.",
						"japanese": "真実？それは私の唯一の友であり、監獄だ。",
						"chinese": "真相？那是我的唯一朋友，也是我的牢笼。",
						"french": "La vérité ? C'est mon seul ami et ma prison.",
						"spanish": "¿Verdad? Es mi único amigo y mi prisión.",
						"vietnamese": "Sự thật? Đó là người bạn duy nhất và cũng là nhà tù của ta.",
						"thai": "ความจริง? มันคือเพื่อนคนเดียวและคุกของข้า",
						"hindi": "सच? वह मेरा इकलौता दोस्त और मेरी जेल है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희가 짊어질 새로운 사슬일 뿐이다.",
						"english": "It's merely a new chain for you to bear.",
						"japanese": "それはお前たちが背負う新たな鎖に過ぎない。",
						"chinese": "那不过是你们将要背负的新枷锁罢了。",
						"french": "Ce n'est qu'une nouvelle chaîne que vous devrez porter.",
						"spanish": "No es más que una nueva cadena que tendréis que soportar.",
						"vietnamese": "Nó chỉ là một xiềng xích mới để các ngươi gánh chịu mà thôi.",
						"thai": "มันเป็นเพียงโซ่ตรวนใหม่ที่พวกเจ้าต้องแบกรับ",
						"hindi": "यह बस एक नई ज़ंजीर है जिसे तुम्हें उठाना होगा।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "zoe",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "zoe",
					"emotion": "sad",
					"content": {
						"korean": "…결국, 또다시.",
						"english": "...Again, in the end.",
						"japanese": "…結局、またしても。",
						"chinese": "…最终，又一次。",
						"french": "…En fin de compte, encore une fois.",
						"spanish": "…Al final, otra vez.",
						"vietnamese": "…Cuối cùng, lại nữa rồi.",
						"thai": "…ในที่สุดก็อีกครั้ง.",
						"hindi": "…अंत में, फिर से।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "zoe",
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어리석은 필멸자들아.",
						"english": "...Foolish mortals.",
						"japanese": "…愚かなる定命の者たちよ。",
						"chinese": "…愚蠢的凡人啊。",
						"french": "…Mortels insensés.",
						"spanish": "…¡Mortales necios!",
						"vietnamese": "…Hỡi những kẻ phàm trần ngu xuẩn.",
						"thai": "…พวกมนุษย์ผู้โง่เขลาเอ๋ย.",
						"hindi": "…मूर्ख नश्वर प्राणियों।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너희가 쫓던 진실은 나의 유일한 벗이자 감옥이었으니.",
						"english": "The truth you sought was my only friend and prison.",
						"japanese": "お前たちが追っていた真実は、私の唯一の友であり、監獄であったのだから。",
						"chinese": "你们所追寻的真相，既是我唯一的挚友，也是我的牢笼。",
						"french": "La vérité que vous cherchiez était mon unique amie et ma prison.",
						"spanish": "La verdad que perseguíais era mi única amiga y mi prisión.",
						"vietnamese": "Sự thật mà các ngươi theo đuổi vừa là người bạn duy nhất, vừa là nhà tù của ta.",
						"thai": "ความจริงที่พวกเจ้าตามหานั้นคือเพื่อนและคุกเพียงหนึ่งเดียวของข้า.",
						"hindi": "जिस सत्य की तुम तलाश कर रहे थे, वह मेरा एकमात्र मित्र और कारावास था।"
					}
				},
				{
					"content": {
						"korean": "보라, 너희가 밝힌 모든 비밀의 밑바닥에는… 나를 낳은 태초의 배신이 잠들어 있을 뿐이니!",
						"english": "Behold, beneath all the secrets you've uncovered... lies only the primordial betrayal that birthed me!",
						"japanese": "見よ、お前たちが暴いた全ての秘密の底には… 私を産み落とした太古の裏切りが眠っているに過ぎない！",
						"chinese": "看啊，在你们揭露的所有秘密的深处……只有孕育了我的太初背叛沉睡着！",
						"french": "Voyez, sous tous les secrets que vous avez révélés... seule la trahison primordiale qui m'a enfanté sommeille !",
						"spanish": "¡Contemplad, bajo todos los secretos que habéis revelado... solo yace la traición primordial que me dio origen!",
						"vietnamese": "Hãy nhìn xem, tận cùng của mọi bí mật mà các ngươi đã phơi bày... chỉ là sự phản bội nguyên thủy đã sinh ra ta đang ngủ yên!",
						"thai": "ดูเถิด ใต้เบื้องลึกของความลับทั้งหมดที่พวกเจ้าเปิดเผย... มีเพียงการทรยศดั้งเดิมที่ให้กำเนิดข้าหลับใหลอยู่!",
						"hindi": "देखो, उन सभी रहस्यों के नीचे, जिन्हें तुमने उजागर किया है... केवल वही आदिम विश्वासघात सोया हुआ है जिसने मुझे जन्म दिया!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "direction",
					"action": "shake",
					"duration_ms": 800,
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Cipher Pact의 형상이 무한히 증식하는 데이터 파편으로 폭발했다. 그 파편들이 거대한 감옥을 형성하며 오르보로스 문양을 그렸다.",
						"english": "The form of the Cipher Pact exploded into infinitely proliferating data fragments. These fragments formed a colossal prison, drawing the Ouroboros symbol.",
						"japanese": "サイファーパクトの姿は、無限に増殖するデータ破片へと爆発した。その破片は巨大な監獄を形成し、ウロボロスの紋様を描いた。",
						"chinese": "密约的形态爆裂成无限增殖的数据碎片。这些碎片形成了巨大的牢笼，描绘出衔尾蛇的图样。",
						"french": "La forme du Pacte Chiffré explosa en fragments de données se proliférant à l'infini. Ces fragments formèrent une prison colossale, dessinant le symbole de l'Ouroboros.",
						"spanish": "La forma del Pacto Cifrado explotó en fragmentos de datos que se multiplicaban infinitamente. Estos fragmentos formaron una prisión colosal, dibujando el símbolo del Uroboros.",
						"vietnamese": "Hình dạng của Hiệp Ước Mật Mã đã nổ tung thành những mảnh dữ liệu nhân bản vô hạn. Những mảnh vỡ này tạo thành một nhà tù khổng lồ, vẽ nên biểu tượng Ouroboros.",
						"thai": "ร่างของสนธิสัญญาไซเฟอร์ระเบิดออกเป็นชิ้นส่วนข้อมูลที่เพิ่มจำนวนไม่สิ้นสุด ชิ้นส่วนเหล่านี้ก่อตัวเป็นคุกขนาดมหึมา วาดสัญลักษณ์อุโรบอรอส.",
						"hindi": "सिफर पैक्ट का स्वरूप अनंत रूप से प्रवर्धित डेटा खंडों में फट गया। ये खंड एक विशाल कारावास बन गए, और ओरोबोरोस प्रतीक बनाया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이게 승리라고?",
						"english": "...Is this victory?",
						"japanese": "…これが勝利だと？",
						"chinese": "…这就是胜利？",
						"french": "…C'est ça, la victoire ?",
						"spanish": "…¿Esto es la victoria?",
						"vietnamese": "…Đây là chiến thắng sao?",
						"thai": "…นี่คือชัยชนะงั้นหรือ?",
						"hindi": "…क्या यह विजय है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 그저… 새로운 감옥에 갇힌 기분이야.",
						"english": "We just... feel trapped in a new prison.",
						"japanese": "私たちはただ…新たな監獄に閉じ込められた気分だ。",
						"chinese": "我们只是…感觉被困在一个新的牢笼里。",
						"french": "Nous nous sentons juste... piégés dans une nouvelle prison.",
						"spanish": "Solo... nos sentimos atrapados en una nueva prisión.",
						"vietnamese": "Chúng ta chỉ là... cảm thấy bị mắc kẹt trong một nhà tù mới.",
						"thai": "พวกเราแค่... รู้สึกเหมือนถูกขังอยู่ในคุกแห่งใหม่.",
						"hindi": "हम बस... एक नई जेल में फंसे हुए महसूस कर रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실은 드러났지만, 도시는 여전히 어두웠다. 영원한 순환은 계속될 것이다.",
						"english": "The truth was revealed, but the city remained dark. The eternal cycle will continue.",
						"japanese": "真実は明らかになったが、都市は依然として暗闇の中だった。永遠の循環は続くだろう。",
						"chinese": "真相大白，但城市依旧黑暗。永恒的循环将继续下去。",
						"french": "La vérité fut révélée, mais la ville demeura sombre. Le cycle éternel continuera.",
						"spanish": "La verdad fue revelada, pero la ciudad permaneció oscura. El ciclo eterno continuará.",
						"vietnamese": "Sự thật đã được phơi bày, nhưng thành phố vẫn u tối. Vòng lặp vĩnh cửu sẽ tiếp diễn.",
						"thai": "ความจริงได้ถูกเปิดเผยแล้ว แต่เมืองยังคงมืดมิด วงจรนิรันดร์จะดำเนินต่อไป.",
						"hindi": "सत्य प्रकट हो गया था, लेकिन शहर अभी भी अंधेरा था। शाश्वत चक्र जारी रहेगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희의 모든 노력은 무의미하다. 이 순환은 영원할 것이다.",
						"english": "All your efforts are meaningless. This cycle will be eternal.",
						"japanese": "お前たちの全ての努力は無意味だ。この循環は永遠に続くだろう。",
						"chinese": "你们所有的努力都毫无意义。这个循环将是永恒的。",
						"french": "Tous vos efforts sont vains. Ce cycle sera éternel.",
						"spanish": "Todos vuestros esfuerzos son inútiles. Este ciclo será eterno.",
						"vietnamese": "Mọi nỗ lực của các ngươi đều vô nghĩa. Vòng lặp này sẽ là vĩnh cửu.",
						"thai": "ความพยายามทั้งหมดของพวกเจ้าไร้ความหมาย วงจรนี้จะเป็นนิรันดร์.",
						"hindi": "तुम्हारे सभी प्रयास अर्थहीन हैं। यह चक्र शाश्वत होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 우린 여기서 멈추지 않아.",
						"english": "No... we won't stop here.",
						"japanese": "いや…私たちはここで止まらない。",
						"chinese": "不…我们不会止步于此。",
						"french": "Non... nous ne nous arrêterons pas ici.",
						"spanish": "No... no nos detendremos aquí.",
						"vietnamese": "Không... chúng ta sẽ không dừng lại ở đây.",
						"thai": "ไม่... พวกเราจะไม่หยุดอยู่แค่นี้.",
						"hindi": "नहीं... हम यहीं नहीं रुकेंगे।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…재밌군. 결국 너희도 나의 일부가 될 뿐.",
						"english": "...Amusing. In the end, you too will simply become a part of me.",
						"japanese": "…面白い。結局、お前たちも私の一部となるだけだ。",
						"chinese": "…有意思。最终，你们也不过是成为我的一部分。",
						"french": "…Amusant. Au final, vous aussi ne ferez qu'une partie de moi.",
						"spanish": "…Curioso. Al final, vosotros también seréis una parte de mí.",
						"vietnamese": "…Thú vị. Cuối cùng, các ngươi cũng chỉ trở thành một phần của ta mà thôi.",
						"thai": "...น่าสนใจ สุดท้ายแล้ว พวกเจ้าก็เป็นแค่ส่วนหนึ่งของข้าเท่านั้น",
						"hindi": "…दिलचस्प। अंत में, तुम भी बस मेरा एक हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"Cipher Pact가 사라진 도시의 심장부는, 깊은 침묵에 잠겼다.",
			"진실은 드러났지만, 그 끝에 다다른 것은 승리가 아니었다.",
			"오히려, 모든 것은 반복될 뿐이라는 허무한 깨달음만이 남았다.",
			"탐험대는 거대한 진실의 감옥에 갇힌 듯, 끝없는 순환의 그림자를 느꼈다.",
			"과연, 이 싸움은 끝난 것일까. 아니면… 또 다른 시작일까."
		],
		"english": [
			"The city's heart, where the Cipher Pact vanished, was plunged into deep silence.",
			"The truth was revealed, but what awaited them at the end was not victory.",
			"Instead, only the hollow realization remained: everything would simply repeat.",
			"The expedition felt the shadow of an endless cycle, as if trapped in a colossal prison of truth.",
			"Has this fight truly ended? Or... is it just another beginning?"
		],
		"japanese": [
			"サイファーパクトが消えた都市の心臓部は、深い沈黙に包まれた。",
			"真実は明らかになったが、その先にあったのは勝利ではなかった。",
			"むしろ、全ては繰り返されるだけだという虚無的な悟りだけが残った。",
			"探検隊は、まるで巨大な真実の監獄に囚われたかのように、終わりのない循環の影を感じた。",
			"果たして、この戦いは終わったのだろうか。それとも…新たな始まりなのだろうか。"
		],
		"chinese": [
			"Cipher Pact消失后，城市的心脏陷入了深深的沉默。",
			"真相大白，但等待他们的并非胜利。",
			"相反，只剩下一切都将循环往复的虚无感。",
			"探险队仿佛被困在巨大的真相监狱中，感受着无尽循环的阴影。",
			"这场战斗真的结束了吗？抑或…只是另一个开始？"
		],
		"french": [
			"Le cœur de la ville, où le Pacte Chiffré avait disparu, fut plongé dans un silence profond.",
			"La vérité fut révélée, mais ce qui les attendait à la fin n'était pas la victoire.",
			"Au lieu de cela, seule la triste réalisation demeurait : tout ne ferait que se répéter.",
			"L'expédition ressentait l'ombre d'un cycle sans fin, comme piégée dans une prison colossale de vérité.",
			"Ce combat est-il vraiment terminé ? Ou... n'est-ce qu'un autre début ?"
		],
		"spanish": [
			"El corazón de la ciudad, donde el Pacto Cifrado desapareció, se sumió en un profundo silencio.",
			"La verdad fue revelada, pero lo que les esperaba al final no era la victoria.",
			"En cambio, solo quedó la vana comprensión de que todo simplemente se repetiría.",
			"La expedición sintió la sombra de un ciclo interminable, como atrapada en una colosal prisión de la verdad.",
			"¿Realmente ha terminado esta lucha? O... ¿es solo otro comienzo?"
		],
		"vietnamese": [
			"Trái tim thành phố, nơi Cipher Pact biến mất, chìm vào im lặng sâu thẳm.",
			"Sự thật đã được phơi bày, nhưng điều chờ đợi ở cuối không phải là chiến thắng.",
			"Thay vào đó, chỉ còn lại sự nhận thức vô vọng rằng mọi thứ sẽ chỉ lặp lại.",
			"Đoàn thám hiểm cảm thấy bóng dáng của một vòng lặp vô tận, như thể bị mắc kẹt trong nhà tù vĩ đại của sự thật.",
			"Liệu cuộc chiến này đã thực sự kết thúc? Hay... đây chỉ là một khởi đầu khác?"
		],
		"thai": [
			"ใจกลางเมืองที่ Cipher Pact หายไป ตกอยู่ในความเงียบงันลึกซึ้ง",
			"ความจริงเปิดเผย แต่สิ่งที่รออยู่ ณ จุดสิ้นสุดไม่ใช่ชัยชนะ",
			"แต่กลับเหลือเพียงความตระหนักอันว่างเปล่าว่าทุกสิ่งจะซ้ำรอยเดิม",
			"คณะสำรวจรู้สึกถึงเงาของวัฏจักรที่ไม่มีที่สิ้นสุด ราวกับถูกขังอยู่ในคุกแห่งความจริงอันใหญ่หลวง",
			"สงครามนี้จบลงแล้วจริงหรือ? หรือ... เป็นเพียงการเริ่มต้นใหม่?"
		],
		"hindi": [
			"शहर का दिल, जहाँ सिफर पैक्ट गायब हो गया था, गहरे सन्नाटे में डूब गया।",
			"सत्य सामने आया, लेकिन अंत में जो मिला वह जीत नहीं थी।",
			"बल्कि, केवल यह खोखला एहसास रह गया कि सब कुछ बस दोहराया जाएगा।",
			"अभियान दल ने एक विशाल सत्य की जेल में फंसे होने जैसा महसूस किया, एक अंतहीन चक्र की छाया।",
			"क्या यह लड़ाई सच में खत्म हो गई है? या... यह सिर्फ एक और शुरुआत है?"
		]
	},
	"prologue": {
		"korean": [
			"도시의 심장부. 모든 진실이 한데 모이는 곳.",
			"탐험대는 마지막 진실을 찾아 헤맸다.",
			"그곳에서 다시 만난 노파 조이. 그녀는 예언을 읊조렸다.",
			"그리고 모든 진실은, 영원한 순환의 시작에 불과했다."
		],
		"english": [
			"The city's heart. Where all truths converge.",
			"The expedition searched for the ultimate truth.",
			"There, they met old Joy again. She murmured a prophecy.",
			"And all truths were merely the start of an eternal cycle."
		],
		"japanese": [
			"都市の心臓部。全ての真実が集う場所。",
			"探検隊は最後の真実を求め彷徨った。",
			"そこで、再び出会った老婦人ジョイ。彼女は予言を囁いた。",
			"そして全ての真実は、永遠の循環の始まりに過ぎなかった。"
		],
		"chinese": [
			"城市的心脏。所有真相汇聚之地。",
			"探险队四处寻找最终的真相。",
			"在那里，他们再次遇见了老婆婆乔伊。她低声念着预言。",
			"而所有的真相，不过是永恒循环的开始。"
		],
		"french": [
			"Le cœur de la ville. Là où toutes les vérités convergent.",
			"L'expédition cherchait la vérité ultime.",
			"Là, ils retrouvèrent la vieille Joy. Elle murmura une prophétie.",
			"Et toutes les vérités n'étaient que le début d'un cycle éternel."
		],
		"spanish": [
			"El corazón de la ciudad. Donde todas las verdades convergen.",
			"La expedición buscaba la verdad final.",
			"Allí, se encontraron de nuevo con la anciana Joy. Ella murmuró una profecía.",
			"Y todas las verdades eran solo el comienzo de un ciclo eterno."
		],
		"vietnamese": [
			"Trái tim của thành phố. Nơi mọi sự thật hội tụ.",
			"Đoàn thám hiểm đã tìm kiếm sự thật cuối cùng.",
			"Ở đó, họ gặp lại bà lão Joy. Bà thì thầm một lời tiên tri.",
			"Và mọi sự thật chỉ là khởi đầu của một vòng lặp vĩnh cửu."
		],
		"thai": [
			"ใจกลางเมือง ที่ซึ่งทุกความจริงมารวมกัน",
			"คณะสำรวจค้นหาความจริงสุดท้าย",
			"ที่นั่น พวกเขาพบกับคุณยายจอยอีกครั้ง เธอกระซิบคำทำนาย",
			"และทุกความจริงเป็นเพียงจุดเริ่มต้นของวัฏจักรนิรันดร์"
		],
		"hindi": [
			"शहर का दिल। जहाँ सभी सत्य एकत्रित होते हैं।",
			"अभियान दल अंतिम सत्य की तलाश में भटकता रहा।",
			"वहाँ, उनकी मुलाकात फिर से बूढ़ी जॉय से हुई। उसने एक भविष्यवाणी बुदबुदाई।",
			"और सभी सत्य, एक अनंत चक्र की शुरुआत मात्र थे।"
		]
	}
} as const;
