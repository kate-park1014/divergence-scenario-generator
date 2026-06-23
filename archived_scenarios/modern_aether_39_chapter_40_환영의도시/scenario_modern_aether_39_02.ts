export const scenario_modern_aether_39_02 = {
	"scenario_id": "modern_aether_39_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 아지트, 시간의 흔적만이 가득했다. 어둠 속, 과거의 피 냄새가 희미하게 풍겼다.",
						"english": "An old hideout, filled only with traces of time. In the darkness, the faint scent of past blood lingered.",
						"japanese": "古いアジトには、時間の痕跡だけが残されていた。闇の中、過去の血の匂いが微かに漂っていた。",
						"chinese": "旧据点，只留下时间的痕迹。黑暗中，过去血腥味若隐若现。",
						"french": "Un vieil antre, seulement rempli des traces du temps. Dans l'obscurité, la faible odeur du sang passé flottait.",
						"spanish": "Un viejo escondite, solo lleno de huellas del tiempo. En la oscuridad, el tenue olor a sangre del pasado perduraba.",
						"vietnamese": "Căn cứ cũ kỹ, chỉ toàn dấu vết thời gian. Trong bóng tối, mùi máu tanh của quá khứ thoang thoảng.",
						"thai": "รังเก่าแก่ มีเพียงร่องรอยของกาลเวลา ในความมืด กลิ่นคาวเลือดในอดีตลอยจางๆ",
						"hindi": "एक पुराना ठिकाना, केवल समय के निशान से भरा हुआ। अंधेरे में, अतीत के खून की हल्की गंध फैली हुई थी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그곳인가?",
						"english": "Is this... the place?",
						"japanese": "ここが…あの場所か？",
						"chinese": "这里是…那个地方吗？",
						"french": "Est-ce… cet endroit ?",
						"spanish": "¿Es este… el lugar?",
						"vietnamese": "Đây… là nơi đó sao?",
						"thai": "ที่นี่... คือที่นั่นหรือเปล่า?",
						"hindi": "क्या यह... वह जगह है?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "…이제 왔군. 기다리고 있었어.",
						"english": "...You're finally here. I've been waiting.",
						"japanese": "…やっと来たな。待っていたぞ。",
						"chinese": "...你终于来了。我一直在等你。",
						"french": "...Te voilà enfin. Je t'attendais.",
						"spanish": "...Finalmente estás aquí. Te he estado esperando.",
						"vietnamese": "...Cuối cùng cũng đến rồi. Ta đã đợi ngươi.",
						"thai": "...ในที่สุดก็มา ฉันรออยู่",
						"hindi": "...तुम आखिर आ ही गए। मैं इंतजार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "뭘 찾고 있지? 잊혀진 진실? 아니면… 또 다른 거짓?",
						"english": "What are you looking for? A forgotten truth? Or... another lie?",
						"japanese": "何を探している？忘れられた真実か？それとも…また別の嘘か？",
						"chinese": "你在找什么？被遗忘的真相？还是…另一个谎言？",
						"french": "Que cherches-tu ? Une vérité oubliée ? Ou... un autre mensonge ?",
						"spanish": "¿Qué buscas? ¿Una verdad olvidada? ¿O... otra mentira?",
						"vietnamese": "Ngươi đang tìm gì? Một sự thật bị lãng quên? Hay… một lời nói dối khác?",
						"thai": "กำลังหาสิ่งใดอยู่? ความจริงที่ถูกลืม? หรือ... คำโกหกอีกครั้ง?",
						"hindi": "तुम क्या ढूंढ रहे हो? एक भूला हुआ सच? या... एक और झूठ?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "나는 그저 목격자일 뿐. 모든 것을 보았고, 모든 것을 알지.",
						"english": "I am merely a witness. I saw everything, and I know everything.",
						"japanese": "私はただの目撃者。全てを見て、全てを知っている。",
						"chinese": "我只是一个目击者。我看到了一切，也知道一切。",
						"french": "Je ne suis qu'un témoin. J'ai tout vu, et je sais tout.",
						"spanish": "Solo soy un testigo. Lo vi todo, y lo sé todo.",
						"vietnamese": "Tôi chỉ là một nhân chứng. Tôi đã thấy mọi thứ, và tôi biết mọi thứ.",
						"thai": "ฉันเป็นเพียงพยาน ฉันเห็นทุกสิ่ง และรู้ทุกสิ่ง",
						"hindi": "मैं सिर्फ एक गवाह हूँ। मैंने सब कुछ देखा है, और मैं सब कुछ जानता हूँ।"
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
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "그들은 말하지. 피해자와 가해자가 명확하다고.",
						"english": "They say the victim and perpetrator are clear.",
						"japanese": "彼らは言う、被害者と加害者は明確だと。",
						"chinese": "他们说，受害者和施害者是明确的。",
						"french": "Ils disent que la victime et l'agresseur sont clairs.",
						"spanish": "Dicen que la víctima y el perpetrador son claros.",
						"vietnamese": "Họ nói nạn nhân và thủ phạm là rõ ràng.",
						"thai": "พวกเขาพูดว่าเหยื่อและผู้กระทำผิดนั้นชัดเจน",
						"hindi": "वे कहते हैं, पीड़ित और अपराधी स्पष्ट हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "하지만 진실은 달라. 빛과 그림자처럼, 언제나 양면이 존재하지.",
						"english": "But the truth is different. Like light and shadow, there are always two sides.",
						"japanese": "しかし真実は違う。光と影のように、常に両面が存在する。",
						"chinese": "但真相不同。就像光与影，总有两面。",
						"french": "Mais la vérité est différente. Comme la lumière et l'ombre, il y a toujours deux côtés.",
						"spanish": "Pero la verdad es diferente. Como la luz y la sombra, siempre hay dos caras.",
						"vietnamese": "Nhưng sự thật khác. Như ánh sáng và bóng tối, luôn có hai mặt.",
						"thai": "แต่ความจริงนั้นแตกต่าง เหมือนแสงและเงา มักจะมีสองด้านเสมอ",
						"hindi": "लेकिन सच अलग है। प्रकाश और छाया की तरह, हमेशा दो पहलू होते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"content": {
						"korean": "무슨 말을 하려는 거야? 똑바로 말해.",
						"english": "What are you trying to say? Speak clearly.",
						"japanese": "何を言いたいんだ？はっきり言え。",
						"chinese": "你想说什么？直说。",
						"french": "Qu'est-ce que tu essaies de dire ? Parle clairement.",
						"spanish": "¿Qué intentas decir? Habla claro.",
						"vietnamese": "Ngươi muốn nói gì? Nói thẳng ra.",
						"thai": "คุณพยายามจะพูดอะไร? พูดให้ชัดเจน",
						"hindi": "तुम क्या कहना चाहते हो? साफ-साफ कहो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "똑바로? 하… 너희는 너무 많은 것을 믿어. 보이는 것만을.",
						"english": "Clearly? Ha... You believe too much. Only what you see.",
						"japanese": "はっきり？ハ…お前たちは信じすぎている。見えるものだけを。",
						"chinese": "直说？哈…你们相信的太多了。只相信看到的。",
						"french": "Clairement ? Ha... Vous croyez trop de choses. Seulement ce que vous voyez.",
						"spanish": "¿Claro? Ja... Creéis demasiado. Solo lo que veis.",
						"vietnamese": "Rõ ràng? Ha… Ngươi tin quá nhiều. Chỉ những gì ngươi thấy.",
						"thai": "ชัดเจนเหรอ? ฮ่า… พวกคุณเชื่อมากเกินไป เพียงแค่สิ่งที่เห็น",
						"hindi": "साफ-साफ? हा… तुम बहुत कुछ मानते हो। केवल वही जो तुम देखते हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "중요한 건 말이지… 누가 진정한 가해자이고, 누가 피해자인지, 그 경계가 모호하다는 거야.",
						"english": "The important thing is... the line between who is the true perpetrator and who is the victim is blurred.",
						"japanese": "重要なのはね…誰が真の加害者で、誰が被害者なのか、その境界線が曖昧だということだ。",
						"chinese": "重要的是…谁是真正的施害者，谁是受害者，界限模糊不清。",
						"french": "L'important, c'est que... la frontière entre le véritable agresseur et la victime est floue.",
						"spanish": "Lo importante es... que la línea entre quién es el verdadero perpetrador y quién es la víctima es borrosa.",
						"vietnamese": "Điều quan trọng là… ranh giới giữa ai là thủ phạm thực sự và ai là nạn nhân là mơ hồ.",
						"thai": "สิ่งสำคัญคือ... เส้นแบ่งระหว่างใครคือผู้กระทำผิดที่แท้จริงและใครคือเหยื่อนั้นพร่ามัว",
						"hindi": "महत्वपूर्ण बात यह है कि... कौन असली अपराधी है और कौन पीड़ित, इसकी सीमा धुंधली है।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그게 무슨 소리야.",
						"english": "...What are you talking about?",
						"japanese": "…それはどういう意味だ。",
						"chinese": "……你什么意思。",
						"french": "...Qu'est-ce que tu racontes ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "…Ngươi nói gì vậy.",
						"thai": "...คุณกำลังพูดถึงอะไร",
						"hindi": "...यह क्या कह रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"emotion": "base",
					"content": {
						"korean": "너희가 찾는 진실은, 어쩌면 너희를 가해자로 만들지도 몰라.",
						"english": "The truth you seek might just make you the perpetrators.",
						"japanese": "お前たちが探す真実は、もしかしたらお前たちを加害者にするかもしれない。",
						"chinese": "你们所追寻的真相，也许会把你们变成施害者。",
						"french": "La vérité que vous cherchez pourrait bien faire de vous les agresseurs.",
						"spanish": "La verdad que buscáis podría convertiros en los perpetradores.",
						"vietnamese": "Sự thật mà các ngươi tìm kiếm, có lẽ sẽ biến các ngươi thành thủ phạm.",
						"thai": "ความจริงที่คุณแสวงหาอาจทำให้คุณกลายเป็นผู้กระทำผิด",
						"hindi": "जो सच तुम ढूंढ रहे हो, वह तुम्हें अपराधी भी बना सकता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "헛소리 하지 마!",
						"english": "Don't talk nonsense!",
						"japanese": "くだらないこと言うな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "อย่าพูดไร้สาระ!",
						"hindi": "बकवास मत करो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하하… 곧 알게 될 거다. 모든 것이 뒤바뀌는 순간.",
						"english": "Haha... You'll know soon enough. The moment everything turns upside down.",
						"japanese": "ハハ…すぐにわかるだろう。全てがひっくり返る瞬間。",
						"chinese": "哈哈…你们很快就会知道。一切颠倒的那一刻。",
						"french": "Haha... Vous le saurez bien assez tôt. Le moment où tout bascule.",
						"spanish": "Jaja... Pronto lo sabrás. El momento en que todo se ponga patas arriba.",
						"vietnamese": "Haha… Ngươi sẽ sớm biết thôi. Khoảnh khắc mọi thứ đảo lộn.",
						"thai": "ฮ่าฮ่า... คุณจะรู้ในไม่ช้า ช่วงเวลาที่ทุกสิ่งพลิกผัน",
						"hindi": "हाहा… तुम्हें जल्द ही पता चल जाएगा। वह पल जब सब कुछ उलट जाएगा।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "dax"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"content": {
						"korean": "다가오는 그림자를 조심해. 그들은 너희의 시선을 왜곡할 거다.",
						"english": "Beware the approaching shadows. They will distort your sight.",
						"japanese": "迫りくる影に気をつけろ。奴らはお前たちの視界を歪めるだろう。",
						"chinese": "小心逼近的阴影。它们会扭曲你的视线。",
						"french": "Méfiez-vous des ombres qui approchent. Elles déformeront votre vision.",
						"spanish": "Cuidado con las sombras que se acercan. Distorsionarán tu vista.",
						"vietnamese": "Hãy cẩn thận với những cái bóng đang đến gần. Chúng sẽ bóp méo tầm nhìn của ngươi.",
						"thai": "ระวังเงาที่กำลังเข้ามา พวกมันจะบิดเบือนการมองเห็นของเจ้า",
						"hindi": "आने वाली छायाओं से सावधान रहें। वे आपकी दृष्टि को विकृत कर देंगे。"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그림자… 네가 말하는 게 뭔데?",
						"english": "Shadows... What are you talking about?",
						"japanese": "影… 何の話だ？",
						"chinese": "阴影… 你在说什么？",
						"french": "Des ombres... De quoi parles-tu ?",
						"spanish": "¿Sombras...? ¿De qué estás hablando?",
						"vietnamese": "Bóng tối… Ngươi đang nói gì vậy?",
						"thai": "เงา... เจ้ากำลังพูดถึงอะไร?",
						"hindi": "छायाएं... तुम किस बारे में बात कर रहे हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 보려 할수록, 더 큰 혼란에 빠질 거야. 너희는 준비되지 않았어.",
						"english": "The more you try to see the truth, the deeper you'll fall into chaos. You are not ready.",
						"japanese": "真実を見ようとするほど、より大きな混乱に陥るだろう。お前たちは準備ができていない。",
						"chinese": "越是试图看清真相，就越会陷入更大的混乱。你们还没准备好。",
						"french": "Plus vous chercherez la vérité, plus vous tomberez dans le chaos. Vous n'êtes pas prêts.",
						"spanish": "Cuanto más intentes ver la verdad, mayor será el caos en el que caerás. No estáis preparados.",
						"vietnamese": "Càng cố gắng nhìn thấy sự thật, ngươi sẽ càng lún sâu vào hỗn loạn. Ngươi chưa sẵn sàng.",
						"thai": "ยิ่งพยายามจะเห็นความจริงมากเท่าไหร่ เจ้าก็จะยิ่งตกอยู่ในความวุ่นวายมากขึ้นเท่านั้น เจ้ายังไม่พร้อม",
						"hindi": "जितना अधिक तुम सच्चाई देखने की कोशिश करोगे, उतनी ही गहरी अराजकता में डूबोगे। तुम तैयार नहीं हो।"
					},
					"speaker": "dax"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "준비 같은 건 필요 없어. 우린 끝까지 간다.",
						"english": "No need for preparation. We'll go all the way.",
						"japanese": "準備なんていらない。俺たちは最後まで行く。",
						"chinese": "不需要什么准备。我们会走到最后。",
						"french": "Pas besoin de préparation. Nous irons jusqu'au bout.",
						"spanish": "No necesitamos preparación. Llegaremos hasta el final.",
						"vietnamese": "Không cần chuẩn bị. Chúng ta sẽ đi đến cùng.",
						"thai": "ไม่จำเป็นต้องเตรียมตัว เราจะไปให้สุดทาง",
						"hindi": "तैयारी की कोई ज़रूरत नहीं। हम आखिर तक जाएंगे।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…그래. 어디, 직접 확인해 봐.",
						"english": "...Very well. Go on, see for yourselves.",
						"japanese": "…そうか。さあ、自分の目で確かめてみろ。",
						"chinese": "...好吧。去吧，自己去确认一下。",
						"french": "...Très bien. Allez, voyez par vous-mêmes.",
						"spanish": "...Está bien. Id, comprobadlo vosotros mismos.",
						"vietnamese": "…Được thôi. Tự mình kiểm chứng đi.",
						"thai": "...ดีล่ะ ลองไปดูด้วยตาตัวเองสิ",
						"hindi": "...ठीक है। जाओ, खुद देख लो।"
					},
					"emotion": "base",
					"speaker": "dax"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들이… 진실을 찾겠다고?",
						"english": "Insignificant beings... seeking the truth?",
						"japanese": "取るに足らない奴らが… 真実を探すだと？",
						"chinese": "渺小的存在… 竟敢寻求真相？",
						"french": "Misérables créatures... cherchant la vérité ?",
						"spanish": "¿Seres insignificantes... buscando la verdad?",
						"vietnamese": "Những kẻ tầm thường… dám tìm kiếm sự thật?",
						"thai": "สิ่งมีชีวิตไร้ค่า... คิดจะแสวงหาความจริงงั้นหรือ?",
						"hindi": "तुच्छ प्राणी... सच्चाई ढूंढने आए हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희가 보고 있는 모든 것은, 그저 환상일 뿐이다. 누가 가해자인지, 누가 피해자인지? 그딴 건 중요하지 않아!",
						"english": "Everything you see is merely an illusion. Who is the aggressor, who is the victim? None of that matters!",
						"japanese": "お前たちが見ているもの全ては、ただの幻想に過ぎない。誰が加害者で、誰が被害者か？そんなことはどうでもいい！",
						"chinese": "你们所看到的一切，都不过是幻象。谁是加害者，谁是受害者？那种事根本不重要！",
						"french": "Tout ce que vous voyez n'est qu'une illusion. Qui est l'agresseur, qui est la victime ? Tout cela n'a aucune importance !",
						"spanish": "Todo lo que veis es simplemente una ilusión. ¿Quién es el agresor, quién la víctima? ¡Nada de eso importa!",
						"vietnamese": "Tất cả những gì ngươi thấy chỉ là ảo ảnh. Ai là kẻ gây hấn, ai là nạn nhân? Điều đó chẳng quan trọng!",
						"thai": "ทุกสิ่งที่พวกเจ้าเห็นเป็นเพียงภาพลวงตา ใครคือผู้กระทำ ใครคือเหยื่อ? เรื่องพวกนั้นไม่สำคัญหรอก!",
						"hindi": "जो कुछ भी तुम देख रहे हो, वह केवल एक भ्रम है। कौन अपराधी है, कौन पीड़ित? ये सब मायने नहीं रखता!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "시끄러워! 우리가 직접 확인할 거야!",
						"english": "Silence! We'll confirm it ourselves!",
						"japanese": "黙れ！俺たちが直接確認する！",
						"chinese": "闭嘴！我们会亲自确认的！",
						"french": "Silence ! Nous le confirmerons nous-mêmes !",
						"spanish": "¡Cállate! ¡Lo confirmaremos nosotros mismos!",
						"vietnamese": "Im đi! Chúng ta sẽ tự mình xác nhận!",
						"thai": "เงียบไปซะ! เราจะยืนยันด้วยตัวเอง!",
						"hindi": "चुप रहो! हम खुद इसकी पुष्टि करेंगे!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어디 한번… 발버둥 쳐봐라. 이 혼란 속에서!",
						"english": "Go on then... struggle amidst this chaos!",
						"japanese": "さあ… この混乱の中で足掻いてみろ！",
						"chinese": "那就… 在这混乱中挣扎吧！",
						"french": "Allez... débattez-vous au milieu de ce chaos !",
						"spanish": "¡Vamos... luchad en medio de este caos!",
						"vietnamese": "Cứ… vùng vẫy trong mớ hỗn độn này đi!",
						"thai": "เอาเลย... ดิ้นรนอยู่ในความวุ่นวายนี้ไปซะ!",
						"hindi": "तो जाओ... इस अराजकता में संघर्ष करो!"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하하! 이 어둠 속에서… 진실 따위는 사치일 뿐!",
						"english": "Haha! In this darkness... truth is but a luxury!",
						"japanese": "「ハハ！この闇の中では…真実など贅沢品に過ぎない！」",
						"chinese": "哈哈！在这黑暗中……真相不过是奢侈品！",
						"french": "Haha ! Dans ces ténèbres... la vérité n'est qu'un luxe !",
						"spanish": "¡Jaja! ¡En esta oscuridad... la verdad no es más que un lujo!",
						"vietnamese": "Haha! Trong bóng tối này... sự thật chỉ là một thứ xa xỉ!",
						"thai": "ฮ่าฮ่า! ในความมืดมิดนี้...ความจริงก็เป็นแค่เรื่องฟุ่มเฟือยเท่านั้น!",
						"hindi": "हाहा! इस अँधेरे में... सच्चाई तो बस एक विलासिता है!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희는 영원히 혼란 속에서 헤맬 것이다!",
						"english": "You shall wander in confusion forever!",
						"japanese": "「お前たちは永遠に混乱の中を彷徨うだろう！」",
						"chinese": "你们将永远在混乱中徘徊！",
						"french": "Vous errerez dans la confusion pour toujours !",
						"spanish": "¡Vagaréis en la confusión para siempre!",
						"vietnamese": "Các ngươi sẽ mãi mãi lang thang trong hỗn loạn!",
						"thai": "พวกเจ้าจะต้องหลงทางอยู่ในความสับสนตลอดไป!",
						"hindi": "तुम हमेशा भ्रम में भटकते रहोगे!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 반드시… 진짜 진실을 찾아낼 거야.",
						"english": "...No. I will... surely find the true truth.",
						"japanese": "「…いや。必ず…本当の真実を見つけ出す。」",
						"chinese": "……不。我一定会……找到真正的真相。",
						"french": "...Non. Je trouverai... la vraie vérité.",
						"spanish": "...No. Debo... encontrar la verdadera verdad.",
						"vietnamese": "...Không. Tôi nhất định... sẽ tìm ra sự thật thực sự.",
						"thai": "...ไม่. ฉันจะต้อง...ค้นหาความจริงที่แท้จริงให้เจอ",
						"hindi": "...नहीं। मैं... निश्चित रूप से सच्ची सच्चाई का पता लगाऊंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우… 이딴 것에…",
						"english": "Ugh... Defeated... by such... pathetic things...",
						"japanese": "ぐうぅ… まさか… こんなものに…",
						"chinese": "呃啊… 竟然… 败给这种东西…",
						"french": "Urgh... vaincu... par de telles... choses insignifiantes...",
						"spanish": "Ugh... apenas... por esto...",
						"vietnamese": "Khụ… Sao… lại bị thứ này…",
						"thai": "อึก... แค่... เรื่องแค่นี้เองหรือ...",
						"hindi": "उफ़... बस... इन जैसी चीज़ों से..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…기억해라. 너희의 시선은… 영원히… 뒤바뀔 것이다…",
						"english": "...Remember. Your gaze... shall forever... be twisted...",
						"japanese": "「…覚えておけ。お前たちの視線は…永遠に…歪むだろう…」",
						"chinese": "……记住。你们的视线……将永远……颠倒……",
						"french": "...Souvenez-vous. Votre regard... sera à jamais... déformé...",
						"spanish": "...Recordad. Vuestra mirada... será para siempre... distorsionada...",
						"vietnamese": "...Hãy nhớ lấy. Ánh mắt của các ngươi... sẽ vĩnh viễn... bị đảo lộn...",
						"thai": "...จงจำไว้. สายตาของพวกเจ้า...จะถูกบิดเบือน...ตลอดไป...",
						"hindi": "...याद रखना। तुम्हारी नज़रें... हमेशा के लिए... मुड़ जाएँगी..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...뭐였지? 또 다른 왜곡인가?",
						"english": "...What was that? Another distortion?",
						"japanese": "「…何だった？また別の歪みか？」",
						"chinese": "……那是什么？又一次扭曲吗？",
						"french": "...C'était quoi ? Une autre distorsion ?",
						"spanish": "...¿Qué fue eso? ¿Otra distorsión?",
						"vietnamese": "...Cái gì vậy? Lại một sự bóp méo khác sao?",
						"thai": "...เมื่อกี้อะไรน่ะ? การบิดเบือนอีกแล้วเหรอ?",
						"hindi": "...वो क्या था? एक और विकृति?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "중간보스는 쓰러졌다. 그러나 진실의 조각은 더욱 파편화되고, 주인공의 시선은 혼란 속에 잠겼다.",
						"english": "The mid-boss fell. Yet, fragments of truth shattered further, and the protagonist's vision sank into chaos.",
						"japanese": "「中ボスは倒れた。しかし真実の欠片はさらに砕け散り、主人公の視線は混乱に沈んだ。」",
						"chinese": "中头目倒下了。然而，真相的碎片更加支离破碎，主角的视线陷入了混乱。",
						"french": "Le boss intermédiaire est tombé. Pourtant, les fragments de vérité se sont encore plus brisés, et la vision du protagoniste a sombré dans le chaos.",
						"spanish": "El jefe intermedio cayó. Sin embargo, los fragmentos de la verdad se hicieron añicos aún más, y la visión del protagonista se sumió en el caos.",
						"vietnamese": "Trùm phụ đã ngã xuống. Tuy nhiên, các mảnh vỡ của sự thật càng thêm tan nát, và ánh nhìn của nhân vật chính chìm trong hỗn loạn.",
						"thai": "บอสรองพ่ายแพ้แล้ว แต่ชิ้นส่วนของความจริงกลับยิ่งแตกกระจาย และสายตาของตัวเอกก็จมดิ่งลงสู่ความสับสน",
						"hindi": "मध्य-बॉस गिर गया। फिर भी, सच्चाई के टुकड़े और बिखर गए, और नायक की दृष्टि अराजकता में डूब गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이 반복되는 비극의 끝은 어디인가?",
						"english": "Where does this repeating tragedy end?",
						"japanese": "「この繰り返される悲劇の終わりはどこだ？」",
						"chinese": "这场重复的悲剧何时才能结束？",
						"french": "Où se termine cette tragédie répétée ?",
						"spanish": "¿Dónde termina esta tragedia que se repite?",
						"vietnamese": "Điểm kết của bi kịch lặp đi lặp lại này ở đâu?",
						"thai": "โศกนาฏกรรมที่ซ้ำซากนี้จะไปสิ้นสุดลงที่ใด?",
						"hindi": "इस दोहराई जाने वाली त्रासदी का अंत कहाँ है?"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡은 아지트, 시간의 흔적만이 가득했다.",
			"목격자 닥스, 진실을 왜곡하며 속삭인다.",
			"누가 가해자인가, 누가 피해자인가.",
			"경계는 흐려지고, 시선은 뒤바뀐다.",
			"혼돈 속, 거대한 그림자가 나타났다."
		],
		"english": [
			"An old hideout, filled only with traces of time.",
			"Witness Daks, whispering, distorting the truth.",
			"Who is the perpetrator, who is the victim?",
			"Boundaries blur, gazes reverse.",
			"In the chaos, a colossal shadow appeared."
		],
		"japanese": [
			"古いアジトには、時間の痕跡だけが残されていた。",
			"目撃者ダックスは、真実を歪めながら囁く。",
			"加害者は誰か、被害者は誰か。",
			"境界は曖昧になり、視線は反転する。",
			"混沌の中、巨大な影が現れた。"
		],
		"chinese": [
			"旧据点，只留下时间的痕迹。",
			"目击者达克斯，低语着，扭曲着真相。",
			"谁是施害者，谁是受害者？",
			"界限模糊，视线颠倒。",
			"混乱中，一个巨大的身影出现。"
		],
		"french": [
			"Un vieil antre, seulement rempli des traces du temps.",
			"Le témoin Daks, chuchote, déformant la vérité.",
			"Qui est l'agresseur, qui est la victime ?",
			"Les frontières s'estompent, les regards s'inversent.",
			"Dans le chaos, une ombre colossale est apparue."
		],
		"spanish": [
			"Un viejo escondite, solo lleno de huellas del tiempo.",
			"El testigo Daks, susurra, distorsionando la verdad.",
			"¿Quién es el perpetrador, quién es la víctima?",
			"Los límites se difuminan, las miradas se invierten.",
			"En el caos, una sombra colosal apareció."
		],
		"vietnamese": [
			"Căn cứ cũ kỹ, chỉ toàn dấu vết thời gian.",
			"Nhân chứng Daks, thì thầm, bóp méo sự thật.",
			"Ai là kẻ gây án, ai là nạn nhân?",
			"Ranh giới mờ nhạt, ánh mắt đảo ngược.",
			"Trong hỗn loạn, một bóng đen khổng lồ xuất hiện."
		],
		"thai": [
			"รังเก่าแก่ มีเพียงร่องรอยของกาลเวลา",
			"พยานแด็กซ์ กระซิบ บิดเบือนความจริง",
			"ใครคือผู้กระทำ ใครคือผู้เสียหาย",
			"เส้นแบ่งเลือนลาง สายตาพลิกผัน",
			"ท่ามกลางความโกลาหล เงาขนาดมหึมาปรากฏขึ้น"
		],
		"hindi": [
			"एक पुराना ठिकाना, केवल समय के निशान से भरा हुआ।",
			"गवाह डैक्स, फुसफुसाते हुए, सच को तोड़-मरोड़ रहा है।",
			"कौन है अपराधी, कौन है पीड़ित?",
			"सीमाएँ धुंधली हो जाती हैं, नज़रें उलट जाती हैं।",
			"अराजकता में, एक विशाल छाया दिखाई दी।"
		]
	}
} as const;
