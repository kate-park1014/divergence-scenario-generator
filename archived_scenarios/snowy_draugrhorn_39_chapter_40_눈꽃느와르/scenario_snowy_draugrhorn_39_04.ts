export const scenario_snowy_draugrhorn_39_04 = {
	"scenario_id": "snowy_draugrhorn_39_04",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "드라우그혼의 환영이 뼈저리게 시야를 뒤흔들었다. 과거의 전장처럼 모든 것이 비틀렸다.",
						"english": "Draughhon's illusion shook my vision to the core. Everything twisted, like a battlefield of the past.",
						"japanese": "ドラウグホンの幻影が視界を根底から揺さぶった。すべてが歪み、まるで過去の戦場のようだった。",
						"chinese": "德拉格霍恩的幻象剧烈地动摇了视线。一切都扭曲了，就像过去的战场。",
						"french": "L'illusion de Draughhon a secoué ma vision jusqu'aux os. Tout se tordait, comme un champ de bataille du passé.",
						"spanish": "La ilusión de Draughhon sacudió mi visión hasta lo más profundo. Todo se retorció, como un campo de batalla del pasado.",
						"vietnamese": "Ảo ảnh của Draughhon làm chấn động tầm nhìn đến tận xương tủy. Mọi thứ méo mó, như một chiến trường trong quá khứ.",
						"thai": "ภาพลวงตาของดรอฟฮอนสั่นคลอนการมองเห็นจนถึงกระดูก ทุกสิ่งบิดเบี้ยว ราวกับสนามรบในอดีต",
						"hindi": "ड्रेगहॉन के भ्रम ने मेरी दृष्टि को गहराई से हिला दिया। सब कुछ मुड़ गया, जैसे अतीत का युद्धक्षेत्र।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…정신 차려. 이게 진짜라고 생각하지 마.",
						"english": "…Snap out of it. Don't think this is real.",
						"japanese": "…しっかりしろ。これが現実だと思うな。",
						"chinese": "……清醒点。别以为这是真的。",
						"french": "…Reprends-toi. Ne crois pas que ce soit réel.",
						"spanish": "…Despierta. No creas que esto es real.",
						"vietnamese": "…Tỉnh táo lại đi. Đừng nghĩ đây là thật.",
						"thai": "…ตั้งสติซะ อย่าคิดว่านี่คือเรื่องจริง",
						"hindi": "…होश में आओ। इसे सच मत समझो।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "저 영광을 봐! 우리가 해낸 거야!",
						"english": "Look at that glory! We did it!",
						"japanese": "あの栄光を見ろ！我々が成し遂げたんだ！",
						"chinese": "看那荣耀！我们做到了！",
						"french": "Regardez cette gloire ! Nous l'avons fait !",
						"spanish": "¡Mira esa gloria! ¡Lo logramos!",
						"vietnamese": "Nhìn vinh quang đó kìa! Chúng ta đã làm được!",
						"thai": "ดูความรุ่งโรจน์นั่นสิ! เราทำได้แล้ว!",
						"hindi": "उस महिमा को देखो! हमने कर दिखाया!"
					},
					"emotion": "happy"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "아니야! 이건 거짓이야! 그는… 이렇게 끝나지 않았어!",
						"english": "No! This is a lie! He… didn't end like this!",
						"japanese": "違う！これは偽りだ！彼は…こんな終わり方じゃなかった！",
						"chinese": "不！这是谎言！他…不是这样结束的！",
						"french": "Non ! C'est un mensonge ! Il… n'a pas fini comme ça !",
						"spanish": "¡No! ¡Esto es una mentira! ¡Él… no terminó así!",
						"vietnamese": "Không! Đây là dối trá! Anh ấy… không kết thúc như thế này!",
						"thai": "ไม่! นี่มันเรื่องโกหก! เขา…ไม่ได้จบลงแบบนี้!",
						"hindi": "नहीं! यह झूठ है! वह… ऐसे खत्म नहीं हुआ था!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아눅, 무슨 소리야?",
						"english": "Anuk, what are you talking about?",
						"japanese": "アヌーク、何を言ってるんだ？",
						"chinese": "阿努克，你在说什么？",
						"french": "Anouk, de quoi parles-tu ?",
						"spanish": "Anuk, ¿de qué estás hablando?",
						"vietnamese": "Anuk, cậu đang nói gì vậy?",
						"thai": "อานุก เธอพูดอะไรน่ะ?",
						"hindi": "अनुक, तुम क्या कह रही हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "속지 마! 이 환영은 너희를 잡아먹을 거야!",
						"english": "Don't be fooled! This illusion will devour you!",
						"japanese": "騙されるな！この幻影はお前たちを食い尽くすぞ！",
						"chinese": "别上当！这个幻象会吞噬你们的！",
						"french": "Ne vous laissez pas tromper ! Cette illusion vous dévorera !",
						"spanish": "¡No os dejéis engañar! ¡Esta ilusión os devorará!",
						"vietnamese": "Đừng mắc lừa! Ảo ảnh này sẽ nuốt chửng các ngươi!",
						"thai": "อย่าหลงกล! ภาพลวงตานี้จะกลืนกินพวกเธอ!",
						"hindi": "मूर्ख मत बनो! यह भ्रम तुम्हें निगल जाएगा!"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영은 달콤하게 속삭였다. 잊힌 영웅들의 승리가 눈앞에 펼쳐지는 듯했다.",
						"english": "The illusion whispered sweetly. The forgotten heroes' victory seemed to unfold before their eyes.",
						"japanese": "幻影が甘く囁いた。忘れ去られた英雄たちの勝利が目の前に広がるかのようだった。",
						"chinese": "幻象甜美地低语。仿佛遗忘英雄们的胜利就在眼前展开。",
						"french": "L'illusion murmura doucement. La victoire des héros oubliés semblait se dérouler sous leurs yeux.",
						"spanish": "La ilusión susurró dulcemente. La victoria de los héroes olvidados parecía desplegarse ante sus ojos.",
						"vietnamese": "Ảo ảnh thì thầm ngọt ngào. Chiến thắng của những anh hùng bị lãng quên dường như đang hiện ra trước mắt.",
						"thai": "ภาพลวงตากระซิบแผ่วเบา ชัยชนะของเหล่าฮีโร่ที่ถูกลืมเลือนดูเหมือนจะปรากฏขึ้นตรงหน้า",
						"hindi": "भ्रम ने मधुरता से फुसफुसाया। भूले हुए नायकों की विजय आँखों के सामने प्रकट होती लग रही थी।"
					}
				},
				{
					"content": {
						"korean": "…너무나 찬란해. 우리가 이겼던 그때처럼.",
						"english": "...So brilliant. Just like when we won.",
						"japanese": "…あまりにも輝かしい。我々が勝利したあの時のように。",
						"chinese": "……如此辉煌。就像我们获胜那时一样。",
						"french": "...Si brillant. Comme quand nous avons gagné.",
						"spanish": "...Tan brillante. Justo como cuando ganamos.",
						"vietnamese": "...Thật rực rỡ. Giống như cái ngày chúng ta chiến thắng.",
						"thai": "...ช่างเจิดจ้า เหมือนตอนที่เราชนะเลย",
						"hindi": "...बहुत शानदार। ठीक वैसे ही जैसे हमने जीता था।"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "승리? 무슨 승리! 약속을 어긴 대가는 혹독한 거야. 우리가 지불한 대가를 잊었어?",
						"english": "Victory? What victory! The price for breaking the promise is harsh. Have you forgotten the price we paid?",
						"japanese": "勝利？何の勝利だ！約束を破った代償は厳しいものだ。我々が支払った代償を忘れたのか？",
						"chinese": "胜利？什么胜利！违背诺言的代价是残酷的。你忘了我们付出的代价吗？",
						"french": "Victoire ? Quelle victoire ! Le prix pour avoir rompu la promesse est élevé. Avez-vous oublié le prix que nous avons payé ?",
						"spanish": "¿Victoria? ¡Qué victoria! El precio por romper la promesa es cruel. ¿Has olvidado el precio que pagamos?",
						"vietnamese": "Chiến thắng? Chiến thắng gì chứ! Cái giá phải trả cho việc phá vỡ lời hứa là nghiệt ngã. Ngươi đã quên cái giá mà chúng ta phải trả rồi sao?",
						"thai": "ชัยชนะเหรอ? ชัยชนะอะไรกัน! การผิดคำสัญญานั้นต้องชดใช้ด้วยราคาแสนแพง เจ้าลืมไปแล้วหรือว่าพวกเราต้องจ่ายอะไรไปบ้าง?",
						"hindi": "विजय? कैसी विजय! वादा तोड़ने का मोल कठोर होता है। क्या तुम वो कीमत भूल गए हो जो हमने चुकाई है?"
					}
				},
				{
					"content": {
						"korean": "무슨 약속?",
						"english": "What promise?",
						"japanese": "何の約束だ？",
						"chinese": "什么承诺？",
						"french": "Quelle promesse ?",
						"spanish": "¿Qué promesa?",
						"vietnamese": "Lời hứa gì?",
						"thai": "สัญญาอะไร?",
						"hindi": "कौन सा वादा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그는… 동료는… 여기에 갇힐 운명이 아니었어!",
						"english": "He... my comrade... was not destined to be trapped here!",
						"japanese": "彼が…仲間が…ここに閉じ込められる運命ではなかった！",
						"chinese": "他……我的同伴……不该被困在这里！",
						"french": "Lui... mon camarade... n'était pas destiné à être piégé ici !",
						"spanish": "¡Él... mi compañero... no estaba destinado a ser atrapado aquí!",
						"vietnamese": "Anh ấy... đồng đội của tôi... không phải định mệnh bị mắc kẹt ở đây!",
						"thai": "เขา... สหายของฉัน... ไม่ควรถูกขังอยู่ที่นี่!",
						"hindi": "वह... मेरा साथी... यहाँ फँसने के लिए नहीं था!"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "환영은 점차 탐험대를 전투의 한복판으로 밀어 넣었다. 피할 수 없는 광기였다.",
						"english": "The illusion gradually pushed the expedition team into the heart of battle. It was an inescapable madness.",
						"japanese": "幻影は探検隊を徐々に戦いの真っ只中へと突き進ませた。避けられない狂気だった。",
						"chinese": "幻象逐渐将探险队推向了战斗的中心。那是一种无法逃避的疯狂。",
						"french": "L'illusion poussa progressivement l'équipe d'expédition au cœur de la bataille. C'était une folie inévitable.",
						"spanish": "La ilusión empujó gradualmente al equipo de expedición al corazón de la batalla. Era una locura ineludible.",
						"vietnamese": "Ảo ảnh dần đẩy đoàn thám hiểm vào giữa trận chiến. Đó là một sự điên cuồng không thể tránh khỏi.",
						"thai": "ภาพลวงตาค่อยๆ ผลักดันคณะสำรวจเข้าสู่ใจกลางการต่อสู้ มันเป็นความบ้าคลั่งที่ไม่อาจหลีกเลี่ยงได้",
						"hindi": "भ्रम ने धीरे-धीरे अभियान दल को युद्ध के केंद्र में धकेल दिया। यह एक अपरिहार्य पागलपन था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "싸워야 해… 저들을 물리쳐야 해!",
						"english": "We must fight... we must defeat them!",
						"japanese": "戦わなければ…奴らを倒さなければ！",
						"chinese": "我们必须战斗……必须击败他们！",
						"french": "Nous devons nous battre... nous devons les vaincre !",
						"spanish": "¡Debemos luchar... debemos derrotarlos!",
						"vietnamese": "Phải chiến đấu... phải đánh bại chúng!",
						"thai": "เราต้องสู้... ต้องกำจัดพวกมันให้ได้!",
						"hindi": "हमें लड़ना होगा... उन्हें हराना होगा!"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "아니! 이건 죽은 자들을 위한 안식처가 아니야! 길 잃은 영혼을 영원히 붙잡는 감옥이라고!",
						"english": "No! This is no resting place for the dead! It's a prison that forever traps lost souls!",
						"japanese": "違う！これは死者のための安息の地ではない！迷える魂を永遠に閉じ込める監獄だ！",
						"chinese": "不！这不是死者的安息之地！这是一个永远囚禁迷失灵魂的监狱！",
						"french": "Non ! Ce n'est pas un lieu de repos pour les morts ! C'est une prison qui retient à jamais les âmes perdues !",
						"spanish": "¡No! ¡Este no es un lugar de descanso para los muertos! ¡Es una prisión que atrapa para siempre a las almas perdidas!",
						"vietnamese": "Không! Đây không phải là nơi an nghỉ cho người chết! Đây là một nhà tù giam giữ những linh hồn lạc lối mãi mãi!",
						"thai": "ไม่ใช่! นี่ไม่ใช่ที่พักผ่อนของผู้ตาย! มันคือคุกที่กักขังวิญญาณที่หลงทางไว้ตลอดกาล!",
						"hindi": "नहीं! यह मृतकों के लिए आरामगाह नहीं है! यह एक जेल है जो भटकी हुई आत्माओं को हमेशा के लिए फँसा कर रखती है!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "감옥…?",
						"english": "A prison...?",
						"japanese": "監獄…？",
						"chinese": "监狱……？",
						"french": "Une prison...?",
						"spanish": "¿Una prisión...?",
						"vietnamese": "Nhà tù...?",
						"thai": "คุก...?",
						"hindi": "एक जेल...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "핀이 말했던 그곳이야. 망자의 안식처… 진실은 늘 뒤틀려 있었어.",
						"english": "It's the place Finn talked about. The dead's sanctuary... The truth was always twisted.",
						"japanese": "フィンが言っていた場所だ。亡者の安息の地…真実はいつも歪められていた。",
						"chinese": "这就是芬恩提到过的地方。亡者的安息之地……真相总是被扭曲的。",
						"french": "C'est l'endroit dont Finn parlait. Le sanctuaire des morts... La vérité a toujours été tordue.",
						"spanish": "Es el lugar del que habló Finn. El santuario de los muertos... La verdad siempre estuvo distorsionada.",
						"vietnamese": "Đây là nơi Finn đã nói. Nơi an nghỉ của người chết... Sự thật luôn bị bóp méo.",
						"thai": "นี่คือสถานที่ที่ฟินน์พูดถึง ที่พำนักของคนตาย... ความจริงถูกบิดเบือนมาตลอด",
						"hindi": "यह वही जगह है जिसके बारे में फिन ने बताया था। मृतकों का अभयारण्य... सच्चाई हमेशा विकृत थी।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영은 현실을 완전히 대체했다. 탐험대는 과거의 망령이 되어 헤매었다.",
						"english": "The illusion completely replaced reality. The expedition team wandered as specters of the past.",
						"japanese": "幻影は現実を完全に置き換えた。探検隊は過去の亡霊となって彷徨った。",
						"chinese": "幻象完全取代了现实。探险队成为了过去的亡灵，四处徘徊。",
						"french": "L'illusion a complètement remplacé la réalité. L'équipe d'exploration errait comme des spectres du passé.",
						"spanish": "La ilusión reemplazó por completo la realidad. El equipo de expedición vagaba como espectros del pasado.",
						"vietnamese": "Ảo ảnh đã thay thế hoàn toàn thực tại. Đoàn thám hiểm lang thang như những bóng ma của quá khứ.",
						"thai": "ภาพลวงตาเข้าแทนที่ความจริงอย่างสมบูรณ์ ทีมสำรวจเร่ร่อนราวกับวิญญาณจากอดีต",
						"hindi": "भ्रम ने वास्तविकता को पूरी तरह से बदल दिया। अन्वेषण दल अतीत के प्रेतों की तरह भटकता रहा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "우리는… 승리한다!",
						"english": "We… will triumph!",
						"japanese": "我々は…勝利する！",
						"chinese": "我们…会胜利的！",
						"french": "Nous… triompherons !",
						"spanish": "¡Nosotros… triunfaremos!",
						"vietnamese": "Chúng ta… sẽ chiến thắng!",
						"thai": "เรา…จะชนะ!",
						"hindi": "हम… जीतेंगे!"
					},
					"emotion": "happy"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "제발… 멈춰! 우리가 이대로 사라지면… 누가 그들의 희생을 기억해 줄 건데?!",
						"english": "Please… stop! If we vanish like this… who will remember their sacrifice?!",
						"japanese": "お願い…やめて！このまま消えれば…誰が彼らの犠牲を覚えてくれるっていうの？！",
						"chinese": "拜托…住手！如果我们就这样消失…谁会记住他们的牺牲？！",
						"french": "S'il te plaît… arrête ! Si nous disparaissons comme ça… qui se souviendra de leur sacrifice ?!",
						"spanish": "¡Por favor… detente! Si desaparecemos así… ¿quién recordará su sacrificio?!",
						"vietnamese": "Làm ơn… dừng lại! Nếu chúng ta cứ thế biến mất… ai sẽ nhớ đến sự hy sinh của họ?!",
						"thai": "ได้โปรด…หยุด! ถ้าพวกเราหายไปแบบนี้…ใครจะจดจำการเสียสละของพวกเขาได้?!",
						"hindi": "कृपया… रुक जाओ! अगर हम ऐसे ही गायब हो गए… तो उनकी कुर्बानी को कौन याद रखेगा?!"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "…!",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "…!",
						"hindi": "…!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이 길은… 절대로 되돌릴 수 없어. 진실을 마주해야만 해.",
						"english": "This path… can never be reversed. We must face the truth.",
						"japanese": "この道は…決して引き返せない。真実と向き合うしかない。",
						"chinese": "这条路…绝不能回头。我们必须面对真相。",
						"french": "Ce chemin… ne peut jamais être inversé. Nous devons affronter la vérité.",
						"spanish": "Este camino… nunca podrá ser revertido. Debemos enfrentar la verdad.",
						"vietnamese": "Con đường này… tuyệt đối không thể quay lại. Chúng ta phải đối mặt với sự thật.",
						"thai": "เส้นทางนี้…ไม่มีวันย้อนกลับ เราต้องเผชิญหน้ากับความจริง",
						"hindi": "यह रास्ता… कभी वापस नहीं हो सकता। हमें सच्चाई का सामना करना होगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대는 거대한 그림자에게 짓눌렸다. 환영은 더욱 생생하게 되살아났다.",
						"english": "The expedition was crushed by the colossal shadow. The illusion revived even more vividly.",
						"japanese": "探検隊は巨大な影に押し潰された。幻影はさらに鮮やかに蘇った。",
						"chinese": "探险队被巨大的阴影压垮了。幻影更加生动地复苏了。",
						"french": "L'expédition fut écrasée par l'ombre colossale. L'illusion ressuscita avec encore plus de vivacité.",
						"spanish": "La expedición fue aplastada por la colosal sombra. La ilusión revivió aún más vívidamente.",
						"vietnamese": "Đoàn thám hiểm bị bóng tối khổng lồ nghiền nát. Ảo ảnh sống lại càng rõ nét hơn.",
						"thai": "คณะสำรวจถูกเงาขนาดมหึมากดทับ ภาพลวงตาฟื้นคืนชีพกลับมามีชีวิตชีวายิ่งขึ้น",
						"hindi": "अभियान दल विशालकाय छाया से कुचल गया। भ्रम और भी जीवंत रूप से पुनर्जीवित हो गया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 저항이군. 이 고통 속에서 영원히 허우적거려라!",
						"english": "What futile resistance. Flail in this agony forever!",
						"japanese": "取るに足らない抵抗だ。この苦痛の中で永遠にもがき苦しめ！",
						"chinese": "微不足道的抵抗。永远在这痛苦中挣扎吧！",
						"french": "Quelle résistance futile. Débattez-vous dans cette agonie pour l'éternité !",
						"spanish": "¡Qué resistencia tan inútil! ¡Revolcaos en esta agonía para siempre!",
						"vietnamese": "Sự phản kháng vô ích. Hãy mãi quằn quại trong nỗi đau này!",
						"thai": "การต่อต้านที่ไร้ค่า จงดิ้นรนในความทรมานนี้ไปชั่วนิรันดร์!",
						"hindi": "कितना व्यर्थ प्रतिरोध। इस पीड़ा में सदा के लिए तड़पते रहो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh… It's… not over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃……还没有……结束！",
						"french": "Urgh… Ce n'est… pas encore fini !",
						"spanish": "¡Ugh… Aún… no ha terminado!",
						"vietnamese": "Ưgh… Vẫn… chưa kết thúc!",
						"thai": "อึก… ยัง… ไม่จบ!",
						"hindi": "उह… अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이대로는… 안 돼. 맹세의 대가를 치러야 해.",
						"english": "Not like this... I must pay the price of the vow.",
						"japanese": "このままでは…。誓いの代償を払わねば。",
						"chinese": "绝不能这样... 必须偿还誓言的代价。",
						"french": "Pas comme ça... Je dois payer le prix du serment.",
						"spanish": "Así no... Debo pagar el precio del juramento.",
						"vietnamese": "Không thể như thế này... Ta phải trả giá cho lời thề.",
						"thai": "อย่างนี้ไม่ได้... ต้องชดใช้คำสาบาน.",
						"hindi": "ऐसे नहीं चलेगा... मुझे शपथ की कीमत चुकानी होगी।"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 쓰러졌다. 뒤틀린 환영은 한풀 꺾였다.",
						"english": "The colossal shadow fell. The twisted illusion weakened.",
						"japanese": "巨大な影は倒れた。歪んだ幻影は勢いを失った。",
						"chinese": "巨大的阴影倒下了。扭曲的幻影已然减弱。",
						"french": "L'ombre colossale est tombée. L'illusion tordue a faibli.",
						"spanish": "La colosal sombra cayó. La retorcida ilusión se debilitó.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ. Ảo ảnh vặn vẹo đã suy yếu.",
						"thai": "เงาขนาดมหึมาล้มลงแล้ว ภาพลวงตาอันบิดเบี้ยวได้อ่อนกำลังลง",
						"hindi": "विशालकाय छाया गिर गई। मुड़ा हुआ भ्रम कमजोर पड़ गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크크… 겨우 시작일 뿐… 망자의 안식처는… 너희를 기다린다…",
						"english": "Hehe… This is just the beginning… The sanctuary of the dead… awaits you…",
						"japanese": "クク… ほんの始まりにすぎん… 亡者の安息所が… お前たちを待つ…",
						"chinese": "呵呵……这仅仅是开始……亡者的安息之地……在等着你们……",
						"french": "Héhé… Ce n'est que le début… Le sanctuaire des morts… vous attend…",
						"spanish": "Jeje… Esto es solo el principio… El santuario de los muertos… os espera…",
						"vietnamese": "Hehe… Đây mới chỉ là bắt đầu… Nơi an nghỉ của người chết… đang chờ các ngươi…",
						"thai": "ฮึๆ… นี่เป็นเพียงจุดเริ่มต้นเท่านั้น… ที่พำนักของผู้ตาย… รอพวกเจ้าอยู่…",
						"hindi": "हेंहें… यह तो बस शुरुआत है… मृतकों का अभयारण्य… तुम्हारा इंतजार कर रहा है…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "망자의 안식처…?",
						"english": "The sanctuary of the dead…?",
						"japanese": "亡者の安息所…？",
						"chinese": "亡者的安息之地……？",
						"french": "Le sanctuaire des morts… ?",
						"spanish": "¿El santuario de los muertos…?",
						"vietnamese": "Nơi an nghỉ của người chết…?",
						"thai": "ที่พำนักของผู้ตาย…?",
						"hindi": "मृतकों का अभयारण्य…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 거짓을 말했어. 안식처는 없어. 그저 더 깊은 절망뿐…",
						"english": "He lied. There is no sanctuary. Only deeper despair…",
						"japanese": "彼は嘘をついた。安息所などない。ただ、より深い絶望だけが…",
						"chinese": "他说了谎。没有安息之地。只有更深的绝望……",
						"french": "Il a menti. Il n'y a pas de sanctuaire. Juste un désespoir plus profond…",
						"spanish": "Mintió. No hay santuario. Solo una desesperación más profunda…",
						"vietnamese": "Hắn đã nói dối. Không có nơi an nghỉ nào cả. Chỉ có tuyệt vọng sâu sắc hơn mà thôi…",
						"thai": "เขาโกหก ไม่มีที่พำนัก มีแต่ความสิ้นหวังที่ลึกซึ้งยิ่งกว่า…",
						"hindi": "उसने झूठ बोला। कोई अभयारण्य नहीं है। बस और गहरी निराशा…"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아직, 끝이 아니야.",
						"english": "…It's not over yet.",
						"japanese": "…まだ、終わりじゃない。",
						"chinese": "……还没有结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc đâu.",
						"thai": "…ยังไม่จบหรอก",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 절망은 더욱 깊어졌다. 진실은 과연 구원이 될 수 있을까.",
						"english": "The frozen despair deepened. Can truth truly be salvation?",
						"japanese": "凍てついた絶望はさらに深まった。真実が果たして救いとなるのだろうか。",
						"chinese": "冰冷的绝望更加深沉。真相果真能成为救赎吗？",
						"french": "Le désespoir gelé s'approfondit. La vérité peut-elle vraiment être un salut ?",
						"spanish": "La desesperación helada se profundizó. ¿Podrá la verdad ser la salvación?",
						"vietnamese": "Tuyệt vọng đóng băng càng thêm sâu sắc. Liệu sự thật có thể là cứu rỗi?",
						"thai": "ความสิ้นหวังที่เยือกแข็งยิ่งทวีความรุนแรงขึ้น ความจริงจะเป็นทางรอดได้จริงหรือ",
						"hindi": "जमी हुई निराशा और गहरी हो गई। क्या सचमुच सत्य मोक्ष हो सकता है?"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "뒤틀린 영광의 정점. 그곳에 거대한 그림자가 기다리고 있었다.",
						"english": "The pinnacle of twisted glory. A colossal shadow awaited there.",
						"japanese": "歪んだ栄光の頂点。そこに巨大な影が待ち受けていた。",
						"chinese": "扭曲荣耀的顶点。一个巨大的阴影在那里等待着。",
						"french": "L'apogée d'une gloire tordue. Une ombre colossale attendait là-bas.",
						"spanish": "La cúspide de una gloria retorcida. Una sombra colosal esperaba allí.",
						"vietnamese": "Đỉnh cao của vinh quang méo mó. Một bóng tối khổng lồ đang chờ đợi ở đó.",
						"thai": "จุดสูงสุดของความรุ่งโรจน์ที่บิดเบี้ยว เงาขนาดมหึมารออยู่ที่นั่น",
						"hindi": "विकृत महिमा का शिखर। वहाँ एक विशाल छाया प्रतीक्षा कर रही थी।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환영에 먹히지 않고 여기까지 오다니… 제법이군.",
						"english": "To come this far without being consumed by the illusion… Impressive.",
						"japanese": "幻影に喰われずにここまで来るとは…なかなかやるな。",
						"chinese": "竟然没有被幻象吞噬就来到了这里…还真有点本事。",
						"french": "Venir jusqu'ici sans être consumé par l'illusion… Impressionnant.",
						"spanish": "Llegar hasta aquí sin ser consumido por la ilusión… Impresionante.",
						"vietnamese": "Đến được đây mà không bị ảo ảnh nuốt chửng… Cũng khá đấy.",
						"thai": "มาถึงนี่ได้โดยไม่ถูกภาพลวงตากลืนกิน…ไม่เลวเลยนี่",
						"hindi": "भ्रम से भटके बिना यहाँ तक पहुँचना… प्रभावशाली है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "네놈이… 이 모든 것을 꾸민 건가! {random_boss}! 동료를… 우리의 맹세를 더럽혔어!",
						"english": "Was it you… who orchestrated all this?! {random_boss}! You defiled our comrades… our oath!",
						"japanese": "貴様が…この全てを仕組んだのか！{random_boss}！仲間を…我らの誓いを汚したな！",
						"chinese": "是你…一手策划了这一切？！{random_boss}！你玷污了我们的同伴…我们的誓言！",
						"french": "C'est toi… qui as orchestré tout cela ?! {random_boss} ! Tu as souillé nos camarades… notre serment !",
						"spanish": "¡¿Fuiste tú… quien orquestó todo esto?! ¡{random_boss}! ¡Profanaste a nuestros compañeros… nuestro juramento!",
						"vietnamese": "Là ngươi… đã sắp đặt tất cả chuyện này sao?! {random_boss}! Ngươi đã làm ô uế đồng đội của chúng ta… lời thề của chúng ta!",
						"thai": "แก…เป็นคนบงการทั้งหมดนี่หรือไง! {random_boss}! แกทำให้สหาย…และคำสาบานของเราแปดเปื้อน!",
						"hindi": "क्या यह तुम थे… जिसने यह सब रचा?! {random_boss}! तुमने हमारे साथियों को… हमारी कसम को अपवित्र किया!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "허울뿐인 맹세에 갇혀 있군. 진정한 영광을 보여주마.",
						"english": "You're trapped by an empty oath. I'll show you true glory.",
						"japanese": "空虚な誓いに囚われているな。真の栄光を見せてやろう。",
						"chinese": "你被空洞的誓言束缚了。我将向你展示真正的荣耀。",
						"french": "Tu es piégé par un serment vide. Je vais te montrer la véritable gloire.",
						"spanish": "Estás atrapado por un juramento vacío. Te mostraré la verdadera gloria.",
						"vietnamese": "Ngươi bị mắc kẹt bởi một lời thề trống rỗng. Ta sẽ cho ngươi thấy vinh quang thực sự.",
						"thai": "เจ้าติดอยู่ในคำสาบานที่ไร้สาระ ข้าจะแสดงความรุ่งโรจน์ที่แท้จริงให้เจ้าดู",
						"hindi": "तुम एक खोखले शपथ में फंसे हो। मैं तुम्हें सच्ची महिमा दिखाऊंगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "닥쳐! 네놈의 환영 따위에 속지 않아!",
						"english": "Shut up! I won't be fooled by your illusions!",
						"japanese": "黙れ！貴様の幻影などに騙されない！",
						"chinese": "闭嘴！我不会被你的幻象所欺骗！",
						"french": "Tais-toi ! Je ne me laisserai pas tromper par tes illusions !",
						"spanish": "¡Cállate! ¡No me engañarán tus ilusiones!",
						"vietnamese": "Im đi! Ta sẽ không bị ảo ảnh của ngươi lừa gạt!",
						"thai": "หุบปาก! ข้าไม่หลงกลภาพลวงตาของแกหรอก!",
						"hindi": "चुप रहो! मैं तुम्हारे भ्रम में नहीं फँसूंगा!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 절망을 깨달아라!",
						"english": "Fools… Realize despair!",
						"japanese": "愚かな者たち… 絶望を悟れ！",
						"chinese": "愚蠢的东西……领悟绝望吧！",
						"french": "Insensés… Réalisez le désespoir !",
						"spanish": "¡Necios… Reconoced la desesperación!",
						"vietnamese": "Đồ ngốc… Hãy nhận ra sự tuyệt vọng!",
						"thai": "พวกโง่เง่า… จงตระหนักถึงความสิ้นหวัง!",
						"hindi": "मूर्खों… निराशा को समझो!"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"점점 더 깊숙이, 드라우그혼의 환영이 탐험대를 집어삼켰다.",
			"대원들은 과거의 광기에 취해갔고, 현실은 희미해졌다.",
			"그러나 누군가는, 그 허상에 맞서 피눈물을 흘리고 있었다.",
			"이 영광의 흔적 속에서, 가장 잔인한 진실이 숨 쉬고 있었다."
		],
		"english": [
			"Deeper and deeper, Draughhon's illusion devoured the expedition.",
			"The members succumbed to the madness of the past, and reality blurred.",
			"Yet someone shed tears of blood, confronting the illusion.",
			"Within these traces of glory, the cruelest truth breathed."
		],
		"japanese": [
			"奥へ奥へと、ドラウグホンの幻影が探検隊を飲み込んでいった。",
			"隊員たちは過去の狂気に囚われ、現実は霞んでいった。",
			"しかし、誰かがその虚像に抗い、血の涙を流していた。",
			"この栄光の痕跡の中には、最も残酷な真実が息づいていた。"
		],
		"chinese": [
			"越来越深入，德拉格霍恩的幻象吞噬了探险队。",
			"队员们沉溺于过去的疯狂，现实变得模糊。",
			"然而，有人却流着血泪，对抗着那虚假的幻象。",
			"在这荣耀的痕迹中，最残酷的真相正在呼吸。"
		],
		"french": [
			"De plus en plus profondément, l'illusion de Draughhon dévorait l'expédition.",
			"Les membres succombaient à la folie du passé, et la réalité s'estompa.",
			"Pourtant, quelqu'un versait des larmes de sang, confrontant cette illusion.",
			"Au sein de ces traces de gloire, la vérité la plus cruelle respirait."
		],
		"spanish": [
			"Cada vez más profundo, la ilusión de Draughhon devoraba a la expedición.",
			"Los miembros sucumbieron a la locura del pasado, y la realidad se difuminó.",
			"Sin embargo, alguien derramaba lágrimas de sangre, enfrentándose a la ilusión.",
			"Entre estas huellas de gloria, la verdad más cruel respiraba."
		],
		"vietnamese": [
			"Càng lúc càng sâu, ảo ảnh của Draughhon nuốt chửng đoàn thám hiểm.",
			"Các thành viên chìm đắm trong sự điên loạn của quá khứ, và thực tại dần mờ ảo.",
			"Thế nhưng, có người lại rơi lệ máu, đối đầu với ảo ảnh ấy.",
			"Trong dấu vết vinh quang này, sự thật tàn khốc nhất đang ẩn mình."
		],
		"thai": [
			"ลึกเข้าไปเรื่อยๆ ภาพลวงตาของดรอฟฮอนกลืนกินคณะสำรวจ",
			"สมาชิกยอมจำนนต่อความบ้าคลั่งในอดีต และความเป็นจริงก็พร่ามัว",
			"ทว่า มีใครบางคนหลั่งน้ำตาเป็นเลือด เผชิญหน้ากับภาพลวงตา",
			"ภายในร่องรอยแห่งเกียรตินี้ ความจริงที่โหดร้ายที่สุดกำลังหายใจอยู่"
		],
		"hindi": [
			"गहरा और गहरा, ड्रेगहॉन का भ्रम अभियान को निगल गया।",
			"सदस्य अतीत के पागलपन में डूब गए, और वास्तविकता धुंधली हो गई।",
			"फिर भी कोई, उस भ्रम का सामना करते हुए, खून के आँसू बहा रहा था।",
			"इस गौरव के निशानों में, सबसे क्रूर सत्य साँस ले रहा था।"
		]
	}
} as const;
