export const scenario_modern_mnemos_15_03 = {
	"scenario_id": "modern_mnemos_15_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"content": {
						"korean": "도시의 뒷골목은 언제나 과거의 속삭임으로 가득했다.",
						"english": "The city's back alleys were always filled with whispers of the past.",
						"japanese": "都市の裏路地はいつも過去の囁きで満たされていた。",
						"chinese": "城市的后巷总是充满过去的低语。",
						"french": "Les ruelles de la ville étaient toujours remplies des murmures du passé.",
						"spanish": "Los callejones traseros de la ciudad siempre estaban llenos de susurros del pasado.",
						"vietnamese": "Những con hẻm sau của thành phố luôn đầy ắp những lời thì thầm từ quá khứ.",
						"thai": "ตรอกซอกซอยของเมืองเต็มไปด้วยเสียงกระซิบของอดีตเสมอมา",
						"hindi": "शहर की गलियाँ हमेशा अतीत की फुसफुसाहटों से भरी रहती थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "린, 맞죠? 당신이 므네모스에게 빚을 회수당했다고 해서요.",
						"english": "Rin, right? I heard Mnemos took back a debt from you.",
						"japanese": "リンさん、ですよね？ムネモスに借金を取り立てられたとか。",
						"chinese": "琳，是吧？听说你被谟涅莫斯追讨债务了。",
						"french": "Rin, c'est ça ? On m'a dit que Mnemos t'avait réclamé une dette.",
						"spanish": "Rin, ¿verdad? Me enteré de que Mnemos te cobró una deuda.",
						"vietnamese": "Rin, phải không? Nghe nói Mnemos đã đòi nợ bạn.",
						"thai": "ริน ใช่ไหม? ได้ยินมาว่าคุณถูกเนมอสเรียกเก็บหนี้สิน",
						"hindi": "रिन, ठीक है? मैंने सुना है कि नेमोस ने आपसे कर्ज वसूल किया है।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						5,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "…당신도 그쪽에 고용된 건가요? 빚은… 이미 다 갚았어요.",
						"english": "...Are you working for them too? The debt... I already paid it all back.",
						"japanese": "…あなたもそっちに雇われたんですか？借金は…もう全部返しました。",
						"chinese": "…你也是他们雇的人吗？那笔债…我已经还清了。",
						"french": "...Vous travaillez pour eux aussi ? La dette... je l'ai déjà entièrement remboursée.",
						"spanish": "...¿Tú también trabajas para ellos? La deuda... ya la pagué toda.",
						"vietnamese": "...Anh cũng được họ thuê sao? Món nợ... tôi đã trả hết rồi.",
						"thai": "...คุณก็ถูกจ้างจากพวกเขาด้วยเหรอ? หนี้สิน...ฉันชำระคืนหมดแล้ว",
						"hindi": "...क्या तुम भी उनके लिए काम करते हो? कर्ज... मैंने पहले ही चुका दिया है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아뇨. 전 그 빚이 뭔지 알고 싶습니다.",
						"english": "No. I want to know what that debt is.",
						"japanese": "いいえ。私はその借金が何なのか知りたいのです。",
						"chinese": "不。我只想知道那笔债到底是什么。",
						"french": "Non. Je veux savoir ce qu'est cette dette.",
						"spanish": "No. Yo quiero saber qué es esa deuda.",
						"vietnamese": "Không. Tôi muốn biết món nợ đó là gì.",
						"thai": "ไม่ ผมแค่อยากรู้ว่าหนี้สินนั้นคืออะไร",
						"hindi": "नहीं। मैं जानना चाहता हूँ कि वह कर्ज क्या है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잊힌 맹세요. 기억도 안 나는 오래된 약속을 지키지 않았다고….",
						"english": "A forgotten vow. They say I didn't keep an old promise I don't even remember...",
						"japanese": "忘れられた誓い。覚えてもいない古い約束を守らなかったと…。",
						"chinese": "一个被遗忘的誓言。他们说我没有遵守一个连我都记不清的旧承诺……",
						"french": "Un serment oublié. Ils disent que je n'ai pas tenu une vieille promesse dont je ne me souviens même pas...",
						"spanish": "Una promesa olvidada. Dicen que no cumplí una vieja promesa que ni siquiera recuerdo...",
						"vietnamese": "Một lời thề bị lãng quên. Họ nói tôi đã không giữ một lời hứa cũ mà tôi thậm chí không nhớ...",
						"thai": "คำสาบานที่ถูกลืม พวกเขาบอกว่าฉันไม่ได้รักษาสัญญาเก่าที่ฉันจำไม่ได้ด้วยซ้ำ...",
						"hindi": "एक भूला हुआ वादा। वे कहते हैं कि मैंने एक पुराना वादा नहीं निभाया जो मुझे याद भी नहीं..."
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "기억나지 않는 맹세를 강요한다고요?",
						"english": "They're forcing a vow I don't remember?",
						"japanese": "覚えていない誓いを強制するって言うんですか？",
						"chinese": "他们要强迫我遵守一个不记得的誓言？",
						"french": "Ils me forcent à respecter un serment dont je ne me souviens pas ?",
						"spanish": "¿Me obligan a cumplir una promesa que no recuerdo?",
						"vietnamese": "Họ đang ép tôi thực hiện một lời thề mà tôi không nhớ?",
						"thai": "พวกเขากำลังบังคับให้ฉันรักษาสัญญาที่ฉันจำไม่ได้?",
						"hindi": "वे मुझे एक ऐसा वादा निभाने के लिए मजबूर कर रहे हैं जो मुझे याद नहीं?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네. 도시의 기록에는 제가 맹세를 어겼다고 해요. 모든 것이 그렇게… 되어버렸어요.",
						"english": "Yes. City records claim I broke my oath. It all just... happened.",
						"japanese": "はい。都市の記録には、私が誓いを破ったとあります。すべてがそう…なってしまいました。",
						"chinese": "是的。城市记录显示我违背了誓言。一切都……变成那样了。",
						"french": "Oui. Les registres de la ville indiquent que j'ai rompu mon serment. Tout... est arrivé comme ça.",
						"spanish": "Sí. Los registros de la ciudad dicen que rompí mi juramento. Todo simplemente... sucedió así.",
						"vietnamese": "Vâng. Hồ sơ thành phố ghi tôi đã phá vỡ lời thề. Mọi thứ... đã thành ra như vậy.",
						"thai": "ใช่ครับ/ค่ะ บันทึกของเมืองบอกว่าฉันทำลายคำสาบาน ทุกอย่างมัน…ก็เป็นไปแบบนั้น",
						"hindi": "हाँ। शहर के रिकॉर्ड कहते हैं कि मैंने अपनी शपथ तोड़ी। सब कुछ बस... ऐसे ही हो गया。"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시 기록이 불안정하다는 말은 들었습니다만…",
						"english": "I heard city records are unstable, though...",
						"japanese": "都市の記録が不安定だと聞きましたが…",
						"chinese": "我听说城市记录不稳定，但是…",
						"french": "J'avais entendu dire que les registres de la ville étaient instables, mais...",
						"spanish": "Había oído que los registros de la ciudad eran inestables, pero...",
						"vietnamese": "Tôi nghe nói hồ sơ thành phố không ổn định, nhưng...",
						"thai": "ฉันได้ยินมาว่าบันทึกของเมืองไม่เสถียร แต่ว่า...",
						"hindi": "मैंने सुना था कि शहर के रिकॉर्ड अस्थिर हैं, लेकिन..."
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "제 과거 데이터까지 멋대로 조작되었어요. 이게 말이 됩니까?",
						"english": "My past data was arbitrarily manipulated. Does this make sense?",
						"japanese": "私の過去のデータまで勝手に操作されたんです。こんなことってありますか？",
						"chinese": "甚至我的过去数据都被随意篡改了。这合理吗？",
						"french": "Même mes données passées ont été manipulées arbitrairement. Est-ce que cela a un sens ?",
						"spanish": "Incluso mis datos pasados fueron manipulados arbitrariamente. ¿Esto tiene sentido?",
						"vietnamese": "Ngay cả dữ liệu quá khứ của tôi cũng bị thao túng tùy tiện. Điều này có hợp lý không?",
						"thai": "แม้แต่ข้อมูลในอดีตของฉันก็ยังถูกบิดเบือนตามอำเภอใจ นี่มันเรื่องอะไรกัน?",
						"hindi": "यहाँ तक कि मेरे पिछले डेटा में भी मनमाने ढंग से हेरफेर किया गया। क्या यह समझ में आता है?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "lin",
					"content": {
						"korean": "그들은 '약속은 반드시 지켜진다'고 말해요.",
						"english": "They say, 'A promise is always kept.'",
						"japanese": "彼らは「約束は必ず守られる」と言います。",
						"chinese": "他们说，‘承诺必须遵守。’",
						"french": "Ils disent : « Les promesses doivent être tenues. »",
						"spanish": "Ellos dicen: «Las promesas deben cumplirse.»",
						"vietnamese": "Họ nói: 'Lời hứa nhất định phải được giữ.'",
						"thai": "พวกเขาบอกว่า 'คำมั่นสัญญาจะต้องถูกรักษาไว้เสมอ'",
						"hindi": "वे कहते हैं, 'वादे ज़रूर निभाए जाने चाहिए।'"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "어릴 적, 친구들끼리 장난으로 한 맹세조차도… 추적당했어요.",
						"english": "Even childhood oaths, made in jest with friends... were tracked.",
						"japanese": "子供の頃、友達と遊びで交わした誓いですら…追跡されたんです。",
						"chinese": "甚至小时候和朋友开玩笑许下的誓言……也被追踪了。",
						"french": "Même un serment que j'avais fait avec des amis quand j'étais enfant, juste pour le plaisir... a été retrouvé.",
						"spanish": "Incluso un juramento que hice con amigos de niño, solo por diversión... fue rastreado.",
						"vietnamese": "Ngay cả lời thề nghịch ngợm với bạn bè khi còn nhỏ... cũng bị truy tìm.",
						"thai": "แม้แต่คำสาบานเล่นๆ กับเพื่อนตอนเด็กๆ ก็ยัง...ถูกติดตาม",
						"hindi": "बचपन में दोस्तों के साथ मज़ाक में की गई कसम भी... ट्रैक की गई।"
					}
				},
				{
					"content": {
						"korean": "맹세가 어떻게 추적당합니까?",
						"english": "How can an oath be tracked?",
						"japanese": "誓いがどうやって追跡されるんですか？",
						"chinese": "誓言怎么会被追踪？",
						"french": "Comment un serment peut-il être retrouvé ?",
						"spanish": "¿Cómo puede rastrearse un juramento?",
						"vietnamese": "Lời thề làm sao có thể bị truy tìm?",
						"thai": "คำสาบานมันถูกติดตามได้ยังไงกัน?",
						"hindi": "एक शपथ को कैसे ट्रैक किया जा सकता है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "누군가 오래된 조직의 상징 같은 문양을 보여주며… 협박했어요.",
						"english": "Someone showed me a symbol, like one from an old organization... and threatened me.",
						"japanese": "誰かが古い組織の象徴のような紋様を見せてきて…脅迫してきたんです。",
						"chinese": "有人展示了一个类似古老组织象征的图案……并威胁了我。",
						"french": "Quelqu'un m'a montré un symbole, comme celui d'une ancienne organisation... et m'a menacé.",
						"spanish": "Alguien me mostró un símbolo, como el de una organización antigua... y me amenazó.",
						"vietnamese": "Ai đó đã cho tôi xem một biểu tượng, giống như của một tổ chức cổ xưa... rồi đe dọa tôi.",
						"thai": "มีใครบางคนแสดงสัญลักษณ์ที่ดูเหมือนจะเป็นขององค์กรเก่าแก่...และข่มขู่ฉัน",
						"hindi": "किसी ने मुझे एक प्रतीक दिखाया, जैसे किसी पुराने संगठन का... और मुझे धमकाया।"
					},
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "오래된 조직이라…",
						"english": "An old organization...",
						"japanese": "古い組織、ですか…",
						"chinese": "一个古老的组织啊…",
						"french": "Une ancienne organisation, donc...",
						"spanish": "Una organización antigua, dices...",
						"vietnamese": "Một tổ chức cổ xưa à...",
						"thai": "องค์กรเก่าแก่เหรอ...",
						"hindi": "एक पुराना संगठन, तो..."
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "믿을 수 없어요. 이 모든 것이… 불합리해요.",
						"english": "I can't believe it. This is all... irrational.",
						"japanese": "信じられない。このすべてが…不合理です。",
						"chinese": "我无法相信。这一切都……不合理。",
						"french": "Je n'arrive pas à y croire. Tout cela est... absurde.",
						"spanish": "No puedo creerlo. Todo esto es... irracional.",
						"vietnamese": "Tôi không thể tin được. Tất cả những điều này thật... vô lý.",
						"thai": "ฉันไม่อยากจะเชื่อเลย ทุกสิ่งทุกอย่างนี้...มันไร้เหตุผลสิ้นดี",
						"hindi": "मैं इस पर विश्वास नहीं कर सकता। यह सब... बेतुका है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 도망칠 곳이 없어요. 맹세의 추적자는… 항상 한 발 앞서요.",
						"english": "No more escape. The Oath Tracker is... always one step ahead.",
						"japanese": "もう逃げ場がない。誓いの追跡者は…常に一歩先を行っています。",
						"chinese": "再也没有地方可以逃了。誓言追踪者……总是领先一步。",
						"french": "Il n'y a plus nulle part où fuir. Le Traqueur de serments... a toujours une longueur d'avance.",
						"spanish": "Ya no hay adónde huir. El Rastreador de Juramentos... siempre está un paso por delante.",
						"vietnamese": "Không còn nơi nào để trốn thoát nữa. Kẻ truy dấu lời thề... luôn đi trước một bước.",
						"thai": "ไม่มีที่ให้หนีอีกแล้ว ผู้ติดตามคำสาบาน...ก้าวนำหน้าเสมอ",
						"hindi": "भागने के लिए अब कोई जगह नहीं है। शपथ ट्रैकर... हमेशा एक कदम आगे रहता है।"
					},
					"speaker": "lin",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "포기하지 마세요. 잊힌 맹세… 그게 뭔지 알아낼 겁니다.",
						"english": "Don't give up. We'll figure out what the forgotten vow is.",
						"japanese": "諦めないでください。忘れられた誓い…それが何なのか、突き止めましょう。",
						"chinese": "不要放弃。被遗忘的誓言……我们会查明那是什么。",
						"french": "N'abandonnez pas. Nous découvrirons ce qu'est ce vœu oublié.",
						"spanish": "No te rindas. Descubriremos qué es ese juramento olvidado.",
						"vietnamese": "Đừng bỏ cuộc. Chúng ta sẽ tìm ra lời thề bị lãng quên đó là gì.",
						"thai": "อย่ายอมแพ้ เราจะค้นหาว่าคำสาบานที่ถูกลืมคืออะไร",
						"hindi": "हार मत मानो। हम पता लगा लेंगे कि वह भूली हुई प्रतिज्ञा क्या है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "하지만… 그들은… 정체불명의 힘으로 맹세를 강제로 이행시키려 해요.",
						"english": "But... they are trying to enforce the vow with an unknown power.",
						"japanese": "しかし…彼らは…正体不明の力で誓いを強制的に履行させようとしています。",
						"chinese": "但是……他们正试图用一股不明力量强制执行誓言。",
						"french": "Mais… ils essaient de faire respecter le vœu par une force inconnue.",
						"spanish": "Pero… están intentando hacer cumplir el juramento con un poder desconocido.",
						"vietnamese": "Nhưng… họ đang cố gắng thực thi lời thề bằng một sức mạnh không rõ.",
						"thai": "แต่… พวกเขากำลังพยายามบังคับใช้คำสาบานด้วยพลังที่ไม่รู้จัก",
						"hindi": "लेकिन… वे एक अज्ञात शक्ति से प्रतिज्ञा को जबरन लागू करने की कोशिश कर रहे हैं।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "정체불명의 힘이라…",
						"english": "An unknown power, you say...",
						"japanese": "正体不明の力、だと…",
						"chinese": "不明力量啊……",
						"french": "Une force inconnue, hein…",
						"spanish": "Un poder desconocido, dices…",
						"vietnamese": "Một sức mạnh không rõ…",
						"thai": "พลังที่ไม่รู้จักงั้นหรือ…",
						"hindi": "एक अज्ञात शक्ति, तुम कहते हो…"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "맹세는… 반드시 지켜진다. 너 또한… 자유롭지 못할 것이다.",
						"english": "The oath... must be kept. You, too... will not be free.",
						"japanese": "誓いは…必ず守られる。お前もまた…自由にはなれないだろう。",
						"chinese": "誓言…必将实现。你…也无法获得自由。",
						"french": "Le serment... doit être tenu. Toi aussi... tu ne seras pas libre.",
						"spanish": "El juramento... debe ser cumplido. Tú tampoco... serás libre.",
						"vietnamese": "Lời thề... nhất định phải giữ. Ngươi cũng... sẽ không được tự do.",
						"thai": "คำสาบาน...ต้องถูกรักษาไว้ เจ้าเองก็...จะไม่มีวันเป็นอิสระ",
						"hindi": "शपथ… अवश्य निभाई जाएगी। तुम भी… स्वतंत्र नहीं होगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "안 돼… 모든 것이 끝났어….",
						"english": "No... Everything is over...",
						"japanese": "だめだ…全てが終わった…。",
						"chinese": "不…一切都结束了…。",
						"french": "Non... Tout est fini...",
						"spanish": "No... Todo ha terminado...",
						"vietnamese": "Không... Mọi thứ đã kết thúc rồi...",
						"thai": "ไม่นะ...ทุกอย่างจบสิ้นแล้ว...",
						"hindi": "नहीं… सब कुछ खत्म हो गया है…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아직 아니야. 나는… 이 도시의 빚을 끝낼 것이다.",
						"english": "Not yet. I... will end this city's debt.",
						"japanese": "まだだ。私は…この街の借金を終わらせるだろう。",
						"chinese": "还没。我…将终结这座城市的债务。",
						"french": "Pas encore. Je... mettrai fin aux dettes de cette ville.",
						"spanish": "Todavía no. Yo... acabaré con la deuda de esta ciudad.",
						"vietnamese": "Chưa. Tôi... sẽ kết thúc món nợ của thành phố này.",
						"thai": "ยังไม่ใช่ตอนนี้ ฉัน/ผม...จะยุติหนี้สินของเมืองนี้",
						"hindi": "अभी नहीं। मैं… इस शहर का कर्ज खत्म करूँगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "공간이 일그러졌다. 정체 모를 그림자가 린을 향해 다가왔다.",
						"english": "Space warped. An unknown shadow approached Lin.",
						"japanese": "空間が歪んだ。正体不明の影がリンに迫った。",
						"chinese": "空间扭曲了。一个不明的影子向琳走来。",
						"french": "L'espace se déforma. Une ombre inconnue s'approcha de Lin.",
						"spanish": "El espacio se distorsionó. Una sombra desconocida se acercó a Lin.",
						"vietnamese": "Không gian méo mó. Một bóng hình không rõ đang tiến về phía Lin.",
						"thai": "อวกาศบิดเบี้ยว เงาลึกลับเคลื่อนเข้าหาลิน",
						"hindi": "अंतरिक्ष विकृत हो गया। एक अज्ञात छाया लिन की ओर बढ़ी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…저거예요! 맹세의 추적자!",
						"english": "…That's it! The Vow Tracker!",
						"japanese": "…あれだ！誓いの追跡者！",
						"chinese": "……就是那个！誓约追踪者！",
						"french": "…C'est ça ! Le Traqueur de Serment !",
						"spanish": "…¡Es eso! ¡El rastreador de juramentos!",
						"vietnamese": "…Đó rồi! Kẻ theo dõi lời thề!",
						"thai": "…นั่นไง! ผู้ติดตามคำสาบาน!",
						"hindi": "…वह रहा! प्रतिज्ञा का पीछा करने वाला!"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신이 므네모스의 '빚'을 회수하는 자인가.",
						"english": "Are you the one who reclaims Mnemos's 'debt'?",
						"japanese": "お前がムネモスの「負債」を回収する者か。",
						"chinese": "你就是回收谟涅摩绪涅“债务”的人吗？",
						"french": "Es-tu celui qui recouvre la « dette » de Mnemos ?",
						"spanish": "¿Eres quien recupera la \"deuda\" de Mnemos?",
						"vietnamese": "Ngươi là kẻ thu hồi \"nợ\" của Mnemos sao?",
						"thai": "เจ้าคือผู้ทวง \"หนี้\" ของมเนมอสสินะ",
						"hindi": "क्या तुम हो जो निमोनिक के 'कर्ज' को वापस लेता है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 도시의 기록관. 잊힌 맹세를 찾아내, 대가를 치르게 할 뿐.",
						"english": "I am the Archivist of the City. I merely find forgotten vows and make them pay the price.",
						"japanese": "私は都市の記録官。忘れられた誓いを見つけ出し、代償を払わせるだけだ。",
						"chinese": "我是城市的记录官。我只是找出被遗忘的誓言，让他们付出代价。",
						"french": "Je suis l'archiviste de la Cité. Je ne fais que retrouver les vœux oubliés et leur faire payer le prix.",
						"spanish": "Soy el Archivista de la Ciudad. Solo encuentro juramentos olvidados y los hago pagar el precio.",
						"vietnamese": "Ta là Người lưu trữ của Thành phố. Ta chỉ tìm ra những lời thề bị lãng quên và bắt họ trả giá.",
						"thai": "ข้าคือผู้บันทึกแห่งเมือง ข้าเพียงแค่ตามหาคำสาบานที่ถูกลืม และทำให้พวกเขาต้องชดใช้",
						"hindi": "मैं शहर का अभिलेखागार हूँ। मैं केवल भूली हुई प्रतिज्ञाओं को ढूंढता हूँ और उनसे कीमत चुकाने के लिए कहता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이건 불합리해요! 제가 뭘 어겼다는 겁니까!",
						"english": "This is absurd! What did I violate?!",
						"japanese": "これは不合理です！私が何を破ったと言うんですか！",
						"chinese": "这太荒谬了！我违反了什么？！",
						"french": "C'est absurde ! Qu'ai-je violé ?!",
						"spanish": "¡Esto es absurdo! ¡¿Qué he violado yo?!",
						"vietnamese": "Thật vô lý! Tôi đã vi phạm điều gì?!",
						"thai": "นี่มันไร้เหตุผล! ข้าไปละเมิดอะไรกันแน่!",
						"hindi": "यह बेतुका है! मैंने क्या उल्लंघन किया?!"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "기록은 거짓말하지 않는다. 네가 잊었을 뿐.",
						"english": "Records do not lie. You merely forgot.",
						"japanese": "記録は嘘をつかない。お前が忘れただけだ。",
						"chinese": "记录不会说谎。只是你忘记了。",
						"french": "Les registres ne mentent pas. Tu as juste oublié.",
						"spanish": "Los registros no mienten. Solo tú lo olvidaste.",
						"vietnamese": "Hồ sơ không nói dối. Ngươi chỉ là đã quên.",
						"thai": "บันทึกไม่เคยโกหก เจ้าแค่ลืมไปเท่านั้น",
						"hindi": "रिकॉर्ड झूठ नहीं बोलते। तुम बस भूल गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 400,
					"action": "exit",
					"direction": "down"
				},
				{
					"content": {
						"korean": "기억 못 하는 맹세를 강요하는 게 정의인가!",
						"english": "Is it justice to enforce a vow one cannot remember?!",
						"japanese": "記憶にない誓いを強制するのが正義だというのか！",
						"chinese": "强迫履行一个不记得的誓言就是正义吗？！",
						"french": "Est-ce juste d'imposer un vœu dont on ne se souvient pas ?!",
						"spanish": "¡¿Es justicia imponer un juramento que uno no puede recordar?!",
						"vietnamese": "Cưỡng chế một lời thề không thể nhớ là công lý ư?!",
						"thai": "การบังคับใช้คำสาบานที่จำไม่ได้คือความยุติธรรมงั้นหรือ!",
						"hindi": "क्या यह न्याय है कि एक ऐसी प्रतिज्ञा को लागू किया जाए जिसे कोई याद नहीं कर सकता?!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "기록은… 지켜져야 한다.",
						"english": "The record... must be kept.",
						"japanese": "記録は…守られなければならない。",
						"chinese": "记录…必须被守护。",
						"french": "Le registre… doit être préservé.",
						"spanish": "El registro… debe ser protegido.",
						"vietnamese": "Kỷ lục… phải được giữ gìn.",
						"thai": "บันทึก...ต้องถูกรักษาไว้",
						"hindi": "रिकॉर्ड… रखा जाना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…네가 맹세를 깨도… 기록은 남아… 언젠가….",
						"english": "...Even if you break the oath... the record remains... someday...",
						"japanese": "…お前が誓いを破っても…記録は残る…いつか…。",
						"chinese": "…即使你违背誓言…记录仍在…终有一天…。",
						"french": "...Même si tu brises ton serment... le registre demeure... un jour...",
						"spanish": "...Aunque rompas tu juramento... el registro permanece... algún día...",
						"vietnamese": "...Dù ngươi phá vỡ lời thề... ghi chép vẫn còn... một ngày nào đó...",
						"thai": "...แม้เจ้าจะผิดคำสาบาน...บันทึกก็ยังคงอยู่...สักวันหนึ่ง...",
						"hindi": "…भले ही तुम शपथ तोड़ दो… रिकॉर्ड रहता है… किसी दिन…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야? 기록이 왜곡된 건 당신들 때문이잖아!",
						"english": "What are you talking about? The record was distorted because of you!",
						"japanese": "何を言ってるんだ？記録が歪められたのはお前たちのせいじゃないか！",
						"chinese": "你在说什么？记录被歪曲都是因为你们！",
						"french": "De quoi parlez-vous ? C'est à cause de vous que le registre a été déformé !",
						"spanish": "¿De qué estás hablando? ¡El registro fue distorsionado por culpa de ustedes!",
						"vietnamese": "Ngươi đang nói gì vậy? Kỷ lục bị xuyên tạc là do các ngươi!",
						"thai": "คุณพูดอะไรน่ะ? ที่บันทึกถูกบิดเบือนก็เพราะพวกคุณไม่ใช่เหรอ!",
						"hindi": "तुम क्या कह रहे हो? रिकॉर्ड तुम लोगों की वजह से विकृत हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "해치웠군요… 고마워요. 이제 빚에서 해방된 건가요?",
						"english": "You did it... Thank you. Am I finally free from debt?",
						"japanese": "やりましたね…ありがとう。これで借金から解放されたのでしょうか？",
						"chinese": "解决了呢…谢谢。现在我从债务中解脱了吗？",
						"french": "Vous avez réussi... Merci. Suis-je enfin libéré de ma dette ?",
						"spanish": "Lo lograste... Gracias. ¿Ahora estoy libre de deudas?",
						"vietnamese": "Ngươi đã làm được... Cảm ơn. Giờ tôi đã thoát khỏi nợ nần rồi sao?",
						"thai": "จัดการแล้วสินะ...ขอบคุณค่ะ/ครับ ตอนนี้ฉัน/ผมเป็นอิสระจากหนี้แล้วใช่ไหมคะ/ครับ?",
						"hindi": "तुमने कर दिखाया… धन्यवाद। क्या अब मैं कर्ज से मुक्त हो गया हूँ?"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아마도요. 하지만… 더 큰 맹세가 얽혀있는 것 같습니다.",
						"english": "Perhaps. But... it seems a greater oath is involved.",
						"japanese": "おそらく。しかし…もっと大きな誓いが絡んでいるようです。",
						"chinese": "也许吧。但是…似乎有更大的誓言牵扯其中。",
						"french": "Peut-être. Mais... il semble qu'un serment plus grand soit impliqué.",
						"spanish": "Quizás. Pero... parece que un juramento mayor está involucrado.",
						"vietnamese": "Có lẽ vậy. Nhưng... dường như có một lời thề lớn hơn đang vướng mắc.",
						"thai": "อาจจะใช่ค่ะ/ครับ แต่ว่า...ดูเหมือนจะมีคำสาบานที่ยิ่งใหญ่กว่านั้นเข้ามาเกี่ยวข้อง",
						"hindi": "शायद। लेकिन… ऐसा लगता है कि एक बड़ी शपथ इसमें शामिल है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "므네모스… 도시의 모든 빚을 알고, 모든 맹세를 기억하는 자. 그의 진정한 정체는 여전히 미궁 속에 있었다.",
						"english": "Mnemos... the one who knows all the city's debts and remembers all oaths. His true identity remained a mystery.",
						"japanese": "ムネモス…街のあらゆる借金を知り、あらゆる誓いを記憶する者。彼の真の正体は、依然として謎に包まれていた。",
						"chinese": "姆涅莫斯…知晓城市所有债务，记住所有誓言之人。他的真实身份仍然是个谜。",
						"french": "Mnémos... celui qui connaît toutes les dettes de la ville et se souvient de tous les serments. Sa véritable identité restait un mystère.",
						"spanish": "Mnemos... el que conoce todas las deudas de la ciudad y recuerda todos los juramentos. Su verdadera identidad seguía siendo un misterio.",
						"vietnamese": "Mnemos... kẻ biết mọi khoản nợ của thành phố, ghi nhớ mọi lời thề. Thân phận thật sự của hắn vẫn chìm trong bí ẩn.",
						"thai": "มเนมอส...ผู้รู้ทุกหนี้สินของเมืองและจดจำทุกคำสาบาน ตัวตนที่แท้จริงของเขายังคงเป็นปริศนา",
						"hindi": "न्मेमोस… वह जो शहर के सभी कर्ज जानता है और सभी शपथों को याद रखता है। उसकी असली पहचान अभी भी रहस्य में थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "주인공은 '잊힌 맹세'의 실체를 쫓아, 도시의 가장 깊은 곳으로 향한다.",
						"english": "The protagonist, chasing the truth of the 'Forgotten Oath', heads to the deepest part of the city.",
						"japanese": "主人公は「忘れられた誓い」の真実を追い、都市の最も深い場所へと向かう。",
						"chinese": "主人公追寻着“被遗忘的誓言”的真相，深入城市的深处。",
						"french": "Le protagoniste, à la poursuite de la vérité du « Serment oublié », se dirige vers les profondeurs de la ville.",
						"spanish": "El protagonista, persiguiendo la verdad del 'Juramento Olvidado', se dirige a la parte más profunda de la ciudad.",
						"vietnamese": "Nhân vật chính, đuổi theo sự thật của 'Lời thề bị lãng quên', tiến sâu vào phần sâu nhất của thành phố.",
						"thai": "ตัวเอกออกติดตามความจริงของ 'คำสาบานที่ถูกลืม' มุ่งหน้าสู่ส่วนที่ลึกที่สุดของเมือง",
						"hindi": "नायक 'भूली हुई शपथ' की सच्चाई का पीछा करते हुए, शहर के सबसे गहरे हिस्से की ओर बढ़ता है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 어둠 속, 잊혀진 맹세들이 되살아난다.",
			"사람들은 기억 못 해도, 도시는 모든 빚을 알고 있었다.",
			"그 빚은 잔혹한 그림자가 되어, 린의 모든 것을 빼앗으려 했다.",
			"이제 맹세는 추적자가 되어, 주인공을 미지의 심연으로 끌어들인다."
		],
		"english": [
			"In the city's darkness, forgotten vows awaken.",
			"Though people forgot, the city remembered every debt.",
			"That debt became a cruel shadow, threatening to take everything from Rin.",
			"Now, the vow becomes a pursuer, dragging the protagonist into an unknown abyss."
		],
		"japanese": [
			"都市の闇の中、忘れられた誓いが蘇る。",
			"人々が忘れても、都市はすべての借金を知っていた。",
			"その借金は残酷な影となり、リンの全てを奪おうとした。",
			"今、誓いは追跡者となり、主人公を未知の深淵へと引きずり込む。"
		],
		"chinese": [
			"在城市的黑暗中，被遗忘的誓言复苏。",
			"即使人们遗忘，城市也记得所有债务。",
			"那笔债务化作残酷的阴影，试图夺走琳的一切。",
			"如今，誓言化作追捕者，将主人公拖入未知的深渊。"
		],
		"french": [
			"Dans l'obscurité de la ville, des serments oubliés resurgissent.",
			"Même si les gens oubliaient, la ville se souvenait de chaque dette.",
			"Cette dette devint une ombre cruelle, menaçant de tout prendre à Rin.",
			"Désormais, le serment devient un traqueur, entraînant le protagoniste dans un abîme inconnu."
		],
		"spanish": [
			"En la oscuridad de la ciudad, promesas olvidadas reviven.",
			"Aunque la gente olvidara, la ciudad recordaba cada deuda.",
			"Esa deuda se convirtió en una sombra cruel, amenazando con arrebatarle todo a Rin.",
			"Ahora, la promesa se convierte en un perseguidor, arrastrando al protagonista a un abismo desconocido."
		],
		"vietnamese": [
			"Trong bóng tối thành phố, những lời thề bị lãng quên trỗi dậy.",
			"Dù người ta đã quên, thành phố vẫn ghi nhớ mọi món nợ.",
			"Món nợ đó hóa thành một bóng tối tàn nhẫn, đe dọa cướp đi mọi thứ của Rin.",
			"Giờ đây, lời thề trở thành kẻ truy đuổi, kéo nhân vật chính vào vực thẳm vô định."
		],
		"thai": [
			"ในความมืดมิดของเมือง คำสาบานที่ถูกลืมเลือนตื่นขึ้นมาอีกครั้ง",
			"แม้ผู้คนจะลืมเลือน แต่เมืองนี้รู้ทุกหนี้สิน",
			"หนี้สินนั้นกลายเป็นเงาอันโหดร้าย พยายามจะแย่งชิงทุกสิ่งไปจากริน",
			"บัดนี้ คำสาบานกลายเป็นผู้ไล่ล่า ลากตัวเอกเข้าสู่ห้วงลึกที่ไม่รู้จัก"
		],
		"hindi": [
			"शहर के अँधेरे में, भूले हुए वादे जाग उठते हैं।",
			"भले ही लोग भूल गए थे, शहर को हर कर्ज याद था।",
			"वह कर्ज एक क्रूर साया बन गया, जो रिन से सब कुछ छीनने की धमकी दे रहा था।",
			"अब, वह वादा एक शिकारी बन जाता है, जो नायक को एक अज्ञात खाई में खींच रहा है।"
		]
	}
} as const;
