export const scenario_forest_kallisto_15_03 = {
	"scenario_id": "forest_kallisto_15_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 여전히 아름다웠다. 그러나 그 완벽함은 위태롭게 느껴졌다.",
						"english": "The forest was still beautiful. But its perfection felt precarious.",
						"japanese": "森はまだ美しかった。しかし、その完璧さは危うく感じられた。",
						"chinese": "森林依然美丽。但那份完美却令人感到不安。",
						"french": "La forêt était toujours magnifique. Mais sa perfection semblait précaire.",
						"spanish": "El bosque seguía siendo hermoso. Pero su perfección se sentía precaria.",
						"vietnamese": "Rừng cây vẫn đẹp. Nhưng sự hoàn hảo của nó lại mang cảm giác bấp bênh.",
						"thai": "ป่ายังคงสวยงาม ทว่าความสมบูรณ์แบบนั้นกลับให้ความรู้สึกเปราะบาง",
						"hindi": "वन अभी भी सुंदर था। लेकिन उसकी पूर्णता अनिश्चित लग रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "브라이어가 준 열매... 왠지 몸이 나른해지는 기분이야.",
						"english": "The fruit Briar gave me... I feel strangely drowsy.",
						"japanese": "ブライアがくれた実…なんだか体がだるくなるような気がする。",
						"chinese": "布莱尔给的果实…总觉得身体有点发软。",
						"french": "Le fruit que Briar m'a donné... Je me sens étrangement somnolent.",
						"spanish": "La fruta que me dio Briar... Me siento extrañamente somnoliento.",
						"vietnamese": "Trái cây Briar đưa... Sao mình thấy người cứ lờ đờ thế nhỉ.",
						"thai": "ผลไม้ที่ไบรเออร์ให้... ทำไมรู้สึกง่วงๆ พิกล",
						"hindi": "ब्रायर ने जो फल दिया... मुझे अजीब सी सुस्ती महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이런 달콤함이... 오히려 의심스러워.",
						"english": "This sweetness... makes me suspicious, if anything.",
						"japanese": "こんな甘さ…かえって疑わしい。",
						"chinese": "这种甜美…反而让我感到可疑。",
						"french": "Une telle douceur... est plutôt suspecte.",
						"spanish": "Esta dulzura... es más bien sospechosa.",
						"vietnamese": "Sự ngọt ngào thế này... thật đáng ngờ.",
						"thai": "ความหวานแบบนี้... กลับทำให้สงสัย",
						"hindi": "यह मिठास... बल्कि संदेहजनक है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "작은 샘물가에서 한 여인이 노래하고 있었다.",
						"english": "A woman was singing by a small spring.",
						"japanese": "小さな泉のほとりで、一人の女が歌っていた。",
						"chinese": "一位女士在小泉水边唱歌。",
						"french": "Une femme chantait près d'une petite source.",
						"spanish": "Una mujer cantaba junto a un pequeño manantial.",
						"vietnamese": "Một người phụ nữ đang hát bên suối nhỏ.",
						"thai": "หญิงสาวคนหนึ่งกำลังร้องเพลงอยู่ที่ริมน้ำพุเล็กๆ",
						"hindi": "एक छोटी सी जलधारा के पास एक स्त्री गा रही थी।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ela",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "어서 와! 이곳은 축복받은 숲이야!",
						"english": "Welcome! This is a blessed forest!",
						"japanese": "ようこそ！ここは祝福された森だよ！",
						"chinese": "欢迎！这里是受祝福的森林！",
						"french": "Bienvenue ! C'est une forêt bénie !",
						"spanish": "¡Bienvenida! ¡Este es un bosque bendito!",
						"vietnamese": "Chào mừng! Đây là khu rừng may mắn đấy!",
						"thai": "ยินดีต้อนรับ! ที่นี่คือป่าที่ได้รับพร!",
						"hindi": "स्वागत है! यह एक धन्य वन है!"
					}
				},
				{
					"content": {
						"korean": "봐, 이 열매들! 숲이 우리에게 준 선물이라구.",
						"english": "Look at these fruits! They're gifts from the forest!",
						"japanese": "ほら、この実を見て！森が私たちにくれた贈り物だよ。",
						"chinese": "看，这些果实！这是森林给我们的礼物哦。",
						"french": "Regarde ces fruits ! Ce sont des cadeaux de la forêt !",
						"spanish": "¡Mira estas frutas! ¡Son regalos del bosque!",
						"vietnamese": "Nhìn những trái cây này xem! Là quà rừng ban tặng đó.",
						"thai": "ดูผลไม้พวกนี้สิ! มันคือของขวัญที่ป่ามอบให้เรานะ",
						"hindi": "देखो, ये फल! ये वन के उपहार हैं!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저렇게... 행복해 보이는군.",
						"english": "They look so... happy.",
						"japanese": "あんなに... 幸せそうに見える。",
						"chinese": "他们看起来... 好幸福啊。",
						"french": "Ils ont l'air si... heureux.",
						"spanish": "Se ven tan... felices.",
						"vietnamese": "Họ trông thật... hạnh phúc.",
						"thai": "พวกเขาดู... มีความสุขจังเลย",
						"hindi": "वे... कितने खुश लग रहे हैं।"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "너도 한입 먹어봐! 모든 피로가 사라질 거야!",
						"english": "Take a bite! All your fatigue will disappear!",
						"japanese": "君も一口食べてみて！疲れが全部吹っ飛ぶよ！",
						"chinese": "你也尝一口！所有疲劳都会消失的！",
						"french": "Mange-en un morceau ! Toute ta fatigue disparaîtra !",
						"spanish": "¡Toma un bocado! ¡Todo tu cansancio desaparecerá!",
						"vietnamese": "Ăn một miếng đi! Mọi mệt mỏi sẽ tan biến!",
						"thai": "ลองชิมสักคำสิ! ความเหนื่อยล้าทั้งหมดจะหายไปเลย!",
						"hindi": "तुम भी एक निवाला खाओ! तुम्हारी सारी थकान दूर हो जाएगी!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "...안 돼... 내가 뭘 한 거지?",
						"english": "...No... What have I done?",
						"japanese": "...だめだ... 私は何てことをしたんだ？",
						"chinese": "...不... 我做了什么？",
						"french": "...Non... Qu'est-ce que j'ai fait ?",
						"spanish": "...No... ¿Qué he hecho?",
						"vietnamese": "...Không... Mình đã làm gì thế này?",
						"thai": "...ไม่นะ... ฉันทำอะไรลงไป?",
						"hindi": "...नहीं... मैंने ये क्या कर दिया?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "순간, 숲의 풍경이 일그러졌다. 가장 깊은 죄책감이 떠올랐다.",
						"english": "For a moment, the forest warped. The deepest guilt surfaced.",
						"japanese": "一瞬、森の風景が歪んだ。最も深い罪悪感が込み上げた。",
						"chinese": "瞬间，森林的景象扭曲了。最深切的罪恶感涌上心头。",
						"french": "Un instant, le paysage de la forêt se déforma. La plus profonde culpabilité refit surface.",
						"spanish": "Por un momento, el paisaje del bosque se distorsionó. La culpa más profunda resurgió.",
						"vietnamese": "Trong khoảnh khắc, cảnh rừng méo mó. Nỗi ân hận sâu sắc nhất trỗi dậy.",
						"thai": "ชั่วขณะหนึ่ง ภาพป่าบิดเบี้ยว ความรู้สึกผิดที่ลึกที่สุดพลุ่งพล่านขึ้นมา",
						"hindi": "एक पल के लिए, जंगल का नज़ारा बिगड़ गया। गहरा अपराधबोध सतह पर आ गया।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "과거의 잔상이 주인공을 덮쳤다. 잊고 싶었던 순간들이었다.",
						"english": "Echoes of the past engulfed the protagonist. Moments they wished to forget.",
						"japanese": "過去の残像が主人公を襲った。忘れたかった瞬間だった。",
						"chinese": "过去的残影笼罩了主角。那是他们想忘记的瞬间。",
						"french": "Des échos du passé enveloppèrent le protagoniste. Des moments qu'ils voulaient oublier.",
						"spanish": "Ecos del pasado envolvieron al protagonista. Momentos que deseaba olvidar.",
						"vietnamese": "Dư âm quá khứ ập đến nhân vật chính. Đó là những khoảnh khắc họ muốn quên.",
						"thai": "เงาสะท้อนของอดีตครอบงำตัวเอก มันคือช่วงเวลาที่พวกเขาอยากจะลืม",
						"hindi": "अतीत की गूँज ने नायक को घेर लिया। वे पल थे जिन्हें वे भूलना चाहते थे।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(괴로워하며) 잊고 싶었어... 제발.",
						"english": "(In anguish) I wanted to forget... Please.",
						"japanese": "（苦悶しながら）忘れたかった... お願いだから。",
						"chinese": "(痛苦地) 我想忘记... 求你了。",
						"french": "(Avec angoisse) Je voulais oublier... S'il te plaît.",
						"spanish": "(Con angustia) Quería olvidar... Por favor.",
						"vietnamese": "(Đau khổ) Tôi muốn quên... Làm ơn.",
						"thai": "(ด้วยความทรมาน) ฉันอยากจะลืม... ได้โปรดเถอะ",
						"hindi": "(पीड़ा में) मैं भूलना चाहता था... कृपया।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왜 그래? 행복한 생각만 해. 숲이 우리에게 원하는 건 그거야!",
						"english": "What's wrong? Just think happy thoughts. That's what the forest wants from us!",
						"japanese": "どうしたの？楽しいことだけ考えなよ。森が私たちに望んでいるのはそれだよ！",
						"chinese": "怎么了？只想着开心的事。森林就是希望我们这样！",
						"french": "Qu'est-ce qui ne va pas ? Ne pense qu'à des choses joyeuses. C'est ce que la forêt attend de nous !",
						"spanish": "¿Qué pasa? Solo piensa en cosas felices. ¡Eso es lo que el bosque quiere de nosotros!",
						"vietnamese": "Sao vậy? Chỉ nghĩ đến những điều hạnh phúc thôi. Đó là điều rừng muốn ở chúng ta!",
						"thai": "เป็นอะไรไป? คิดแต่เรื่องดีๆ สิ ป่าต้องการให้เราทำอย่างนั้น!",
						"hindi": "क्या हुआ? बस खुशहाल बातें सोचो। जंगल हमसे यही चाहता है!"
					},
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이건... 함정이야. 숲이 우릴 가두고 있어.",
						"english": "This is... a trap. The forest is trapping us.",
						"japanese": "これは... 罠だ。森が私たちを閉じ込めている。",
						"chinese": "这是... 陷阱。森林正在困住我们。",
						"french": "C'est... un piège. La forêt nous retient prisonniers.",
						"spanish": "Esto es... una trampa. El bosque nos está atrapando.",
						"vietnamese": "Đây là... một cái bẫy. Rừng đang giam giữ chúng ta.",
						"thai": "นี่มัน... กับดัก ป่ากำลังขังเราไว้",
						"hindi": "यह... एक जाल है। जंगल हमें फँसा रहा है।"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "(웃음) 무슨 소리야. 여긴 낙원이야. 영원히 여기서 살 수 있어!",
						"english": "(Laughs) What are you talking about? This is paradise. We can live here forever!",
						"japanese": "（笑い）何を言ってるんだ。ここは楽園だよ。永遠にここで暮らせるんだ！",
						"chinese": "(笑) 你在说什么。这里是天堂。我们可以永远住在这里！",
						"french": "(Rire) De quoi tu parles ? C'est le paradis. Nous pouvons vivre ici pour toujours !",
						"spanish": "(Ríe) ¿De qué estás hablando? Esto es el paraíso. ¡Podemos vivir aquí para siempre!",
						"vietnamese": "(Cười) Cậu đang nói gì vậy. Đây là thiên đường. Chúng ta có thể sống ở đây mãi mãi!",
						"thai": "(หัวเราะ) พูดอะไรน่ะ ที่นี่คือสวรรค์ เราอยู่ที่นี่ได้ตลอดไปเลย!",
						"hindi": "(हँसते हुए) तुम क्या कह रहे हो। यह स्वर्ग है। हम हमेशा के लिए यहाँ रह सकते हैं!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니... 진실을 파헤쳐야 해.",
						"english": "No... I need to uncover the truth.",
						"japanese": "いや... 真実を暴かなければ。",
						"chinese": "不... 我必须揭露真相。",
						"french": "Non... Je dois découvrir la vérité.",
						"spanish": "No... Necesito descubrir la verdad.",
						"vietnamese": "Không... Tôi phải khám phá sự thật.",
						"thai": "ไม่... ฉันต้องเปิดเผยความจริง",
						"hindi": "नहीं... मुझे सच्चाई का पता लगाना होगा।"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 속삭임은 더욱 강해졌다. 벗어날 수 없는 미로처럼 느껴졌다.",
						"english": "The whispers of the forest grew stronger. It felt like an inescapable maze.",
						"japanese": "森のささやきはさらに強くなった。逃れられない迷宮のようだった。",
						"chinese": "森林的低语愈发强烈。感觉像一个无法逃脱的迷宫。",
						"french": "Les murmures de la forêt s'intensifièrent. Cela ressemblait à un labyrinthe sans issue.",
						"spanish": "Los susurros del bosque se hicieron más fuertes. Se sentía como un laberinto inescapable.",
						"vietnamese": "Tiếng thì thầm của rừng cây càng lúc càng mạnh. Cứ như một mê cung không lối thoát.",
						"thai": "เสียงกระซิบของป่าทวีความรุนแรงขึ้น รู้สึกเหมือนเขาวงกตที่หนีไม่พ้น",
						"hindi": "जंगल की फुसफुसाहट और तेज़ हो गई। यह एक ऐसी भूलभुलैया लगी जिससे बचा नहीं जा सकता।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기가 끝이 아니었어. 계속 반복되는 느낌이야.",
						"english": "This wasn't the end. It feels like it keeps repeating.",
						"japanese": "ここが終わりじゃなかった。ずっと繰り返されているようだ。",
						"chinese": "这里不是终点。感觉一直在重复。",
						"french": "Ce n'était pas la fin. On dirait que ça se répète sans cesse.",
						"spanish": "Este no era el final. Parece que se repite constantemente.",
						"vietnamese": "Đây không phải là kết thúc. Cứ như mọi thứ lặp đi lặp lại.",
						"thai": "นี่ไม่ใช่จุดจบ รู้สึกเหมือนมันเกิดขึ้นซ้ำๆ",
						"hindi": "यह अंत नहीं था। लगता है यह बार-बार दोहराया जा रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 숲은... 살아있는 감옥이야.",
						"english": "This forest... it's a living prison.",
						"japanese": "この森は... 生きた牢獄だ。",
						"chinese": "这片森林……是一个活生生的监狱。",
						"french": "Cette forêt... c'est une prison vivante.",
						"spanish": "Este bosque... es una prisión viviente.",
						"vietnamese": "Rừng này... là một nhà tù sống.",
						"thai": "ป่านี้... คือคุกที่มีชีวิต",
						"hindi": "यह जंगल... एक जीवित कारागार है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직도 발버둥 치는군.",
						"english": "Still struggling, I see.",
						"japanese": "まだ足掻いているのか。",
						"chinese": "还在挣扎啊。",
						"french": "Tu luttes encore, je vois.",
						"spanish": "Todavía te revuelves, ¿eh?",
						"vietnamese": "Vẫn còn vùng vẫy à.",
						"thai": "ยังคงดิ้นรนอยู่สินะ",
						"hindi": "अभी भी संघर्ष कर रहे हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...네가 이 숲의 수호자인가.",
						"english": "...Are you the guardian of this forest?",
						"japanese": "...お前がこの森の守護者か。",
						"chinese": "……你就是这片森林的守护者吗？",
						"french": "...Es-tu le gardien de cette forêt ?",
						"spanish": "¿Eres el guardián de este bosque?",
						"vietnamese": "Ngươi là người bảo hộ khu rừng này sao?",
						"thai": "เจ้าคือผู้พิทักษ์ป่านี้หรือ",
						"hindi": "...क्या तुम इस जंगल के संरक्षक हो?"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 존재가 스러졌다. 그러나 숲의 환영은 사라지지 않았다.",
						"english": "The unknown entity fell. Yet, the forest's illusion remained.",
						"japanese": "正体不明の存在が倒れた。しかし、森の幻影は消えなかった。",
						"chinese": "未知存在倒下了。然而，森林的幻象并未消散。",
						"french": "L'entité inconnue est tombée. Pourtant, l'illusion de la forêt persistait.",
						"spanish": "La entidad desconocida cayó. Sin embargo, la ilusión del bosque permaneció.",
						"vietnamese": "Thực thể không rõ danh tính đã gục ngã. Nhưng ảo ảnh của khu rừng vẫn không tan biến.",
						"thai": "สิ่งลึกลับได้ล้มลงแล้ว ทว่าภาพลวงตาของป่าก็ยังไม่หายไป",
						"hindi": "अज्ञात सत्ता गिर गई। फिर भी, जंगल का भ्रम बना रहा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝난 줄 알았는데... 여전히 이 무기력함은 뭐야?",
						"english": "I thought it was over... What is this helplessness I still feel?",
						"japanese": "終わったと思ったのに…この無力感はまだ何だ？",
						"chinese": "我以为结束了……这种无力感为何依然存在？",
						"french": "Je pensais que c'était fini... Qu'est-ce que cette impuissance que je ressens encore ?",
						"spanish": "Pensé que había terminado... ¿Qué es esta impotencia que aún siento?",
						"vietnamese": "Tưởng rằng đã kết thúc... Nhưng cảm giác bất lực này vẫn là gì đây?",
						"thai": "นึกว่าจบแล้วแท้ๆ... ความรู้สึกไร้เรี่ยวแรงนี้มันยังไงกันนะ?",
						"hindi": "मैंने सोचा था कि यह खत्म हो गया है... यह लाचारी अभी भी क्या है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(마지막 속삭임처럼) 탐욕은... 순환한다...",
						"english": "(Like a final whisper) Greed... cycles...",
						"japanese": "(最後のささやきのように) 貪欲は…循環する…",
						"chinese": "(如最后的低语) 贪婪……循环不息……",
						"french": "(Comme un dernier murmure) La cupidité... tourne en rond...",
						"spanish": "(Como un último susurro) La avaricia... es un ciclo...",
						"vietnamese": "(Như một lời thì thầm cuối cùng) Tham lam... tuần hoàn...",
						"thai": "(ราวกับเสียงกระซิบสุดท้าย) ความโลภ... หมุนเวียน...",
						"hindi": "अंतिम फुसफुसाहट की तरह लालच... घूमता रहता है..."
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲은 숨 쉬는 감옥이었다. 하나의 덫이 사라져도, 또 다른 덫이 기다리고 있었다.",
						"english": "The forest was a breathing prison. One trap vanished, only for another to await.",
						"japanese": "森は息をする監獄だった。一つの罠が消えても、また別の罠が待ち構えていた。",
						"chinese": "森林是座会呼吸的监狱。一个陷阱消失，另一个陷阱却在等待。",
						"french": "La forêt était une prison vivante. Un piège disparaissait, un autre attendait.",
						"spanish": "El bosque era una prisión que respiraba. Una trampa desaparecía, solo para que otra esperara.",
						"vietnamese": "Khu rừng là một nhà tù biết thở. Một cái bẫy biến mất, chỉ để một cái khác chờ đợi.",
						"thai": "ป่าคือคุกมีชีวิต กับดักหนึ่งหายไป อีกกับดักหนึ่งก็รออยู่",
						"hindi": "जंगल एक साँस लेती हुई जेल थी। एक जाल गायब हुआ, बस दूसरा इंतजार कर रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 어둠이 모든 것을 집어삼켰다.",
						"english": "The forest's darkness swallowed everything.",
						"japanese": "森の闇が全てを飲み込んだ。",
						"chinese": "森林的黑暗吞噬了一切。",
						"french": "L'obscurité de la forêt a tout englouti.",
						"spanish": "La oscuridad del bosque lo devoró todo.",
						"vietnamese": "Bóng tối của khu rừng nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดของป่ากลืนกินทุกสิ่ง",
						"hindi": "जंगल के अँधेरे ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네 죄책감이 너를 놓아주지 않을 것이다. 영원히 숲에 갇히게 될 테니.",
						"english": "Your guilt will not release you. You will be trapped in the forest forever.",
						"japanese": "お前の罪悪感がお前を解放することはないだろう。永遠に森に閉じ込められるだろうからな。",
						"chinese": "你的罪恶感不会放过你。你将被永远困在森林里。",
						"french": "Ta culpabilité ne te libérera pas. Tu seras piégé dans la forêt pour toujours.",
						"spanish": "Tu culpa no te liberará. Quedarás atrapado en el bosque para siempre.",
						"vietnamese": "Tội lỗi của ngươi sẽ không buông tha ngươi. Ngươi sẽ bị mắc kẹt trong rừng mãi mãi.",
						"thai": "ความรู้สึกผิดของเจ้าจะไม่ปล่อยเจ้าไป เจ้าจะต้องติดอยู่ในป่าตลอดไป",
						"hindi": "तुम्हारा अपराधबोध तुम्हें मुक्त नहीं करेगा। तुम हमेशा के लिए जंगल में फँस जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(분노) 아니야... 여기서 나갈 거야! 절대 포기 안 해!",
						"english": "(Angrily) No... I'll get out of here! I'll never give up!",
						"japanese": "(怒り) 違う…ここから出てやる！絶対に諦めない！",
						"chinese": "(愤怒) 不……我要出去！我绝不放弃！",
						"french": "(Avec colère) Non... Je sortirai d'ici ! Je n'abandonnerai jamais !",
						"spanish": "(Con ira) ¡No... saldré de aquí! ¡Nunca me rendiré!",
						"vietnamese": "(Tức giận) Không... Ta sẽ thoát khỏi đây! Ta sẽ không bao giờ bỏ cuộc!",
						"thai": "(ด้วยความโกรธ) ไม่... ฉันจะออกไปจากที่นี่! ไม่มีวันยอมแพ้!",
						"hindi": "(गुस्से में) नहीं... मैं यहाँ से निकलूँगा! मैं कभी हार नहीं मानूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 정체 모를 존재였다.",
						"english": "A massive shadow blocked the way. It was an unknown entity.",
						"japanese": "巨大な影が道を阻んだ。正体不明の存在だった。",
						"chinese": "一个巨大的影子挡住了去路。那是一个身份不明的存在。",
						"french": "Une ombre gigantesque bloqua le passage. C'était une entité inconnue.",
						"spanish": "Una sombra gigantesca bloqueó el camino. Era una entidad desconocida.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang. Đó là một thực thể vô danh.",
						"thai": "เงาขนาดใหญ่ขวางทางไว้ เป็นสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। यह एक अज्ञात इकाई थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 자는 네가 처음이 아니다. 그리고 마지막도 아니겠지.",
						"english": "You are not the first to reach this place. And you won't be the last.",
						"japanese": "ここまで来たのはお前が初めてではない。そして、最後でもないだろう。",
						"chinese": "你不是第一个来到这里的人。也不会是最后一个。",
						"french": "Tu n'es pas le premier à atteindre cet endroit. Et tu ne seras pas le dernier.",
						"spanish": "No eres el primero en llegar aquí. Y no serás el último.",
						"vietnamese": "Ngươi không phải người đầu tiên đến được đây. Và cũng sẽ không phải người cuối cùng.",
						"thai": "เจ้าไม่ใช่คนแรกที่มาถึงที่นี่ และคงไม่ใช่คนสุดท้าย",
						"hindi": "तुम यहां पहुंचने वाले पहले नहीं हो। और न ही आखिरी होगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 이 숲의 덫을 지키는 존재인가.",
						"english": "Are you the one who guards this forest's trap?",
						"japanese": "お前がこの森の罠を守る存在なのか。",
						"chinese": "你就是守护这片森林陷阱的存在吗？",
						"french": "Es-tu celui qui garde le piège de cette forêt ?",
						"spanish": "¿Eres tú quien custodia la trampa de este bosque?",
						"vietnamese": "Ngươi là kẻ canh giữ cạm bẫy của khu rừng này sao?",
						"thai": "เจ้าคือผู้เฝ้ากับดักของป่านี้หรือ",
						"hindi": "क्या तुम इस जंगल के जाल के संरक्षक हो?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 질문. 나는 숲의 의지 그 자체다. 너희의 죄가 나를 만들었지.",
						"english": "Foolish question. I am the will of the forest itself. Your sins created me.",
						"japanese": "愚かな問いだ。私は森の意志そのもの。お前たちの罪が私を創り出した。",
						"chinese": "愚蠢的问题。我就是森林的意志本身。是你们的罪孽创造了我。",
						"french": "Question idiote. Je suis la volonté de la forêt elle-même. Vos péchés m'ont créé.",
						"spanish": "Pregunta estúpida. Soy la voluntad del bosque mismo. Vuestros pecados me crearon.",
						"vietnamese": "Câu hỏi ngu ngốc. Ta là ý chí của khu rừng này. Tội lỗi của các ngươi đã tạo ra ta.",
						"thai": "คำถามโง่ๆ ข้าคือเจตจำนงของป่านี้เอง บาปของพวกเจ้าต่างหากที่สร้างข้าขึ้นมา",
						"hindi": "मूर्खतापूर्ण प्रश्न। मैं स्वयं जंगल की इच्छा हूँ। तुम्हारे पापों ने मुझे बनाया।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "헛소리 마! 널 쓰러뜨리고 진실을 밝히겠어.",
						"english": "Nonsense! I'll defeat you and uncover the truth.",
						"japanese": "戯言を！ お前を倒して真実を暴いてやる。",
						"chinese": "少废话！我会打败你，揭露真相。",
						"french": "Absurdités ! Je vais te vaincre et révéler la vérité.",
						"spanish": "¡Tonterías! Te derribaré y revelaré la verdad.",
						"vietnamese": "Vớ vẩn! Ta sẽ đánh bại ngươi và phơi bày sự thật.",
						"thai": "ไร้สาระ! ข้าจะโค่นเจ้าและเปิดเผยความจริง",
						"hindi": "बकवास मत करो! मैं तुम्हें हराऊंगा और सच्चाई उजागर करूंगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 달콤한 속삭임으로 영혼을 유혹했다.",
			"눈앞의 풍요에 취해 진실을 외면하는 자들.",
			"그러나 그 환락 뒤에는 지독한 덫이 숨겨져 있었다.",
			"그리고 숲은, 가장 깊은 죄책감을 들춰내려 했다."
		],
		"english": [
			"The forest lured souls with sweet whispers.",
			"Those who, intoxicated by the abundance before them, turned away from the truth.",
			"Yet, behind that delight, a terrible trap lay hidden.",
			"And the forest sought to unearth the deepest guilt."
		],
		"japanese": [
			"森は甘い囁きで魂を誘惑した。",
			"目の前の豊かさに酔いしれ、真実から目を背ける者たち。",
			"しかし、その歓楽の裏には恐ろしい罠が隠されていた。",
			"そして森は、最も深い罪悪感を暴こうとした。"
		],
		"chinese": [
			"森林以甜蜜的低语诱惑着灵魂。",
			"那些沉醉于眼前丰饶，却对真相视而不见的人。",
			"然而，在那欢愉的背后，隐藏着一个可怕的陷阱。",
			"而森林，试图揭露最深层的罪恶感。"
		],
		"french": [
			"La forêt tentait les âmes de doux murmures.",
			"Ceux qui, enivrés par l'abondance devant eux, se détournaient de la vérité.",
			"Pourtant, derrière cette joie, un piège terrible était caché.",
			"Et la forêt cherchait à déterrer la plus profonde culpabilité."
		],
		"spanish": [
			"El bosque atraía a las almas con dulces susurros.",
			"Aquellos que, ebrios de la abundancia ante ellos, daban la espalda a la verdad.",
			"Sin embargo, detrás de ese deleite, se ocultaba una trampa terrible.",
			"Y el bosque buscaba desenterrar la culpa más profunda."
		],
		"vietnamese": [
			"Rừng cây đã dụ dỗ những linh hồn bằng những lời thì thầm ngọt ngào.",
			"Những kẻ say mê sự phong phú trước mắt, quay lưng lại với sự thật.",
			"Tuy nhiên, đằng sau sự vui thú đó, một cái bẫy kinh hoàng đã ẩn giấu.",
			"Và rừng cây đã cố gắng phơi bày cảm giác tội lỗi sâu sắc nhất."
		],
		"thai": [
			"ป่าเย้ายวนวิญญาณด้วยเสียงกระซิบอันแสนหวาน",
			"ผู้ที่มัวเมาในความอุดมสมบูรณ์ตรงหน้า ปฏิเสธที่จะมองเห็นความจริง",
			"ทว่าเบื้องหลังความสุขนั้น กับดักอันร้ายกาจได้ซ่อนเร้นอยู่",
			"และป่าพยายามที่จะเปิดเผยความรู้สึกผิดที่ลึกที่สุด"
		],
		"hindi": [
			"वन ने मीठी फुसफुसाहट से आत्माओं को लुभाया।",
			"वे जो सामने की प्रचुरता से मदहोश होकर सच्चाई से मुँह मोड़ लेते हैं।",
			"फिर भी, उस आनंद के पीछे, एक भयानक जाल छिपा था।",
			"और वन ने सबसे गहरे अपराधबोध को उजागर करने का प्रयास किया।"
		]
	}
} as const;
