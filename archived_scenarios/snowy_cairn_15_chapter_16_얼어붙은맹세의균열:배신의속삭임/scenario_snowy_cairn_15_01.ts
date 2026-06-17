export const scenario_snowy_cairn_15_01 = {
	"scenario_id": "snowy_cairn_15_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈보라는 더욱 거세졌다. 캠프의 온기는 희미했다.",
						"english": "The blizzard intensified. The warmth of the camp was faint.",
						"japanese": "吹雪はさらに激しくなった。キャンプの温かさは微かだった。",
						"chinese": "暴风雪愈发猛烈。营地的温暖微弱。",
						"french": "La tempête de neige s'est intensifiée. La chaleur du camp était faible.",
						"spanish": "La ventisca se intensificó. El calor del campamento era tenue.",
						"vietnamese": "Bão tuyết càng dữ dội. Hơi ấm của trại mờ nhạt.",
						"thai": "พายุหิมะรุนแรงขึ้น ความอบอุ่นในแคมป์ริบหรี่",
						"hindi": "बर्फीला तूफान और तेज हो गया। शिविर की गर्माहट फीकी पड़ गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더는 못 가. 식량도 없어…",
						"english": "Can't go on. No food left...",
						"japanese": "もう無理だ。食料もない…",
						"chinese": "走不动了。也没食物了……",
						"french": "Je n'en peux plus. Plus de nourriture...",
						"spanish": "No puedo seguir. No queda comida...",
						"vietnamese": "Không thể đi tiếp. Hết thức ăn rồi…",
						"thai": "ไปต่อไม่ไหวแล้ว อาหารก็ไม่มี...",
						"hindi": "अब और नहीं जा सकता। खाना भी नहीं है..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이럴 때일수록 정신 차려야 해.",
						"english": "Especially now, we must keep our wits about us.",
						"japanese": "こんな時だからこそ、気を引き締めなければ。",
						"chinese": "越是这种时候，越要保持清醒。",
						"french": "C'est précisément maintenant que nous devons garder la tête froide.",
						"spanish": "Precisamente ahora, debemos mantener la cabeza fría.",
						"vietnamese": "Chính lúc này càng phải giữ tỉnh táo.",
						"thai": "ยิ่งตอนนี้แหละยิ่งต้องตั้งสติ",
						"hindi": "ऐसे समय में हमें और भी अधिक सतर्क रहना चाहिए।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…이바르님. 대원들이 지쳐갑니다.",
						"english": "...Ivar. The crew is getting exhausted.",
						"japanese": "…イヴァール様。隊員たちが疲弊しています。",
						"chinese": "……伊瓦尔大人。队员们快撑不住了。",
						"french": "...Ivar. L'équipage s'épuise.",
						"spanish": "...Ivar. Los miembros de la expedición están agotados.",
						"vietnamese": "...Thưa Ivar. Các thành viên đang kiệt sức.",
						"thai": "...ท่านไอบาร์ ลูกทีมกำลังอ่อนล้าครับ/ค่ะ",
						"hindi": "...इवार। दल के सदस्य थक रहे हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "결정을 내려주세요.",
						"english": "Please make a decision.",
						"japanese": "ご決断ください。",
						"chinese": "请您做出决定。",
						"french": "Prenez une décision, s'il vous plaît.",
						"spanish": "Por favor, tome una decisión.",
						"vietnamese": "Xin hãy đưa ra quyết định.",
						"thai": "โปรดตัดสินใจด้วยครับ/ค่ะ",
						"hindi": "कृपया निर्णय लें।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이바르. 대원들의 사기가 바닥이야. 당신마저 흔들리면 안 돼.",
						"english": "Ivar. The crew's morale is at rock bottom. You can't waver too.",
						"japanese": "イヴァール。隊員たちの士気がどん底だ。あなたまで揺らいではいけない。",
						"chinese": "伊瓦尔。队员们的士气低落到了极点。你不能再动摇了。",
						"french": "Ivar. Le moral de l'équipage est au plus bas. Tu ne peux pas vaciller toi aussi.",
						"spanish": "Ivar. La moral de la tripulación está por los suelos. Tú tampoco puedes flaquear.",
						"vietnamese": "Ivar. Tinh thần của các thành viên đang xuống dốc. Cả anh cũng không được dao động.",
						"thai": "ไอบาร์ ขวัญกำลังใจของลูกทีมตกต่ำมาก คุณเองก็ห้ามหวั่นไหว",
						"hindi": "इवार। दल के सदस्यों का मनोबल बहुत गिर गया है। तुम्हें भी नहीं डगमगाना चाहिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 폭풍 속에 답이 보이지 않아. 진짜 끝인가…",
						"english": "I see no answer in this storm. Is this truly the end...?",
						"japanese": "この嵐の中に答えが見えない。本当に終わりなのか…",
						"chinese": "在这场风暴中我找不到答案。这真是终结吗……",
						"french": "Je ne vois aucune réponse dans cette tempête. Est-ce vraiment la fin… ?",
						"spanish": "No veo ninguna respuesta en esta tormenta. ¿Es este realmente el final…?",
						"vietnamese": "Tôi không thấy câu trả lời trong cơn bão này. Đây có thật là kết thúc không…?",
						"thai": "ฉันไม่เห็นคำตอบในพายุนี้ นี่คือจุดจบจริงๆ หรือเปล่า...",
						"hindi": "इस तूफ़ान में कोई जवाब नहीं दिख रहा। क्या यह सचमुच अंत है...?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "리더라면 뭔가 해야 할 거 아니야.",
						"english": "As a leader, shouldn't you do something?",
						"japanese": "リーダーなら、何かすべきじゃないのか？",
						"chinese": "作为领导者，你不该做点什么吗？",
						"french": "En tant que leader, ne devrais-tu pas faire quelque chose ?",
						"spanish": "Como líder, ¿no deberías hacer algo?",
						"vietnamese": "Là một thủ lĩnh, chẳng phải anh nên làm gì đó sao?",
						"thai": "ในฐานะผู้นำ คุณไม่ควรทำอะไรบ้างเหรอ?",
						"hindi": "एक नेता के तौर पर, तुम्हें कुछ करना चाहिए, है ना?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "돌무덤 'Cairn'에서 불길한 기운이 느껴져. 뭔가… 약속이 깨지는 듯한 느낌이 들어.",
						"english": "I feel an ominous aura from the 'Cairn' stone mound. It feels like... a promise is breaking.",
						"japanese": "ケルンから不吉な気配がする。まるで…約束が破られているような気がする。",
						"chinese": "我从石冢'Cairn'中感受到不祥的气息。感觉…好像有什么约定被打破了。",
						"french": "Je ressens une aura sinistre émanant du cairn. On dirait... qu'une promesse est brisée.",
						"spanish": "Siento un aura ominosa en el túmulo de piedras 'Cairn'. Siento como si... una promesa se estuviera rompiendo.",
						"vietnamese": "Tôi cảm thấy một luồng khí đáng ngại từ đống đá 'Cairn'. Cảm giác như... một lời hứa đang bị phá vỡ.",
						"thai": "ฉันรู้สึกถึงลางร้ายจากกองหิน 'Cairn' ราวกับว่า... คำสัญญาบางอย่างกำลังถูกทำลาย",
						"hindi": "मुझे 'कैरन' पत्थर के टीले से एक अशुभ आभा महसूस हो रही है। ऐसा लग रहा है... जैसे कोई वादा टूट रहा है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그냥 피로 때문일 거야, 에이라. 모두 지쳤어.",
						"english": "It's just fatigue, Ayra. Everyone's exhausted.",
						"japanese": "ただの疲れだよ、エイラ。みんな疲れているんだ。",
						"chinese": "那只是疲劳罢了，艾拉。大家都累了。",
						"french": "C'est juste la fatigue, Ayra. Tout le monde est épuisé.",
						"spanish": "Es solo cansancio, Ayra. Todos estamos agotados.",
						"vietnamese": "Chỉ là mệt mỏi thôi, Ayra. Mọi người đều kiệt sức rồi.",
						"thai": "มันก็แค่ความเหนื่อยล้า เอร่า ทุกคนอ่อนเพลียหมดแล้ว",
						"hindi": "यह सिर्फ़ थकान है, आयरा। सब थके हुए हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "아무것도 느껴지지 않아.",
						"english": "I don't feel anything.",
						"japanese": "何も感じない。",
						"chinese": "我什么都感觉不到。",
						"french": "Je ne ressens rien.",
						"spanish": "No siento nada.",
						"vietnamese": "Tôi không cảm thấy gì cả.",
						"thai": "ฉันไม่รู้สึกอะไรเลย",
						"hindi": "मुझे कुछ महसूस नहीं हो रहा।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "돌무덤의 굉음이 더 선명해졌어. 약속이 깨지고 있어… 이대로는 안 돼.",
						"english": "The rumble from the stone mound has grown clearer. The promise is breaking... We can't let this continue.",
						"japanese": "ケルンの轟音がもっとはっきり聞こえる。約束が破られている…このままではいけない。",
						"chinese": "石冢的轰鸣声变得更加清晰了。约定正在被打破…不能再这样下去了。",
						"french": "Le grondement du cairn est devenu plus net. La promesse est brisée... Ça ne peut pas continuer ainsi.",
						"spanish": "El estruendo del túmulo de piedras se ha vuelto más claro. La promesa se está rompiendo... Esto no puede seguir así.",
						"vietnamese": "Tiếng ầm ầm từ đống đá đã rõ hơn. Lời hứa đang bị phá vỡ... Không thể cứ thế này được.",
						"thai": "เสียงคำรามจากกองหินชัดเจนขึ้นแล้ว คำสัญญาถูกทำลาย... เราจะปล่อยให้เป็นแบบนี้ไม่ได้",
						"hindi": "पत्थर के टीले की गड़गड़ाहट और स्पष्ट हो गई है। वादा टूट रहा है... यह ऐसे नहीं चल सकता।"
					},
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야, 에이라? 난 아무것도 못 들었어.",
						"english": "What are you talking about, Ayra? I didn't hear anything.",
						"japanese": "何を言ってるんだ、エイラ？何も聞こえなかったよ。",
						"chinese": "你在说什么，艾拉？我什么都没听到。",
						"french": "De quoi parles-tu, Ayra ? Je n'ai rien entendu.",
						"spanish": "¿De qué hablas, Ayra? No he oído nada.",
						"vietnamese": "Cậu đang nói gì vậy, Ayra? Tớ chẳng nghe thấy gì cả.",
						"thai": "คุณกำลังพูดถึงอะไร เอร่า? ฉันไม่ได้ยินอะไรเลยนะ",
						"hindi": "क्या बात कर रही हो, आयरा? मैंने कुछ नहीं सुना।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "브란은 텐트 구석에서 작은 송신기를 꺼내 누군가와 은밀히 교신했다.",
						"english": "Bran took out a small transmitter from the corner of the tent and secretly communicated with someone.",
						"japanese": "ブランはテントの隅から小さな送信機を取り出し、誰かと密かに交信した。",
						"chinese": "布兰从帐篷角落里掏出一个小型发射器，秘密地与某人进行了通讯。",
						"french": "Bran sortit un petit transmetteur du coin de la tente et communiqua secrètement avec quelqu'un.",
						"spanish": "Bran sacó un pequeño transmisor del rincón de la tienda y se comunicó en secreto con alguien.",
						"vietnamese": "Bran lấy ra một thiết bị liên lạc nhỏ từ góc lều và bí mật liên lạc với ai đó.",
						"thai": "แบรนหยิบเครื่องส่งสัญญาณเล็กๆ ออกมาจากมุมเต็นท์และแอบติดต่อกับใครบางคน",
						"hindi": "ब्रान ने टेंट के कोने से एक छोटा ट्रांसमीटर निकाला और किसी से गुप्त रूप से बात की।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…브란, 뭘 하는 거야?",
						"english": "...Bran, what are you doing?",
						"japanese": "…ブラン、何をしているの？",
						"chinese": "……布兰，你在做什么？",
						"french": "...Bran, que fais-tu ?",
						"spanish": "...Bran, ¿qué estás haciendo?",
						"vietnamese": "...Bran, anh đang làm gì vậy?",
						"thai": "...แบรน คุณกำลังทำอะไรอยู่?",
						"hindi": "...ब्रान, तुम क्या कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "대체 누구랑 얘기하는 건데?",
						"english": "Who exactly are you talking to?",
						"japanese": "一体誰と話しているんだ？",
						"chinese": "你到底在和谁说话？",
						"french": "Avec qui parles-tu, au juste ?",
						"spanish": "¿Con quién estás hablando exactamente?",
						"vietnamese": "Rốt cuộc anh đang nói chuyện với ai vậy?",
						"thai": "คุณกำลังคุยกับใครกันแน่?",
						"hindi": "आखिर तुम किससे बात कर रहे हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "지금 같은 때에…",
						"english": "At a time like this...",
						"japanese": "こんな時に…",
						"chinese": "就在这种时候...",
						"french": "En un tel moment...",
						"spanish": "En un momento así...",
						"vietnamese": "Vào lúc này...",
						"thai": "ในเวลาแบบนี้...",
						"hindi": "ऐसे समय में..."
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "누가 감히 얼어붙은 맹세를 깨려 하는가?",
						"english": "Who dares break the frozen oath?",
						"japanese": "誰が凍てついた誓いを破ろうとするのか？",
						"chinese": "谁敢打破冰封的誓言？",
						"french": "Qui ose briser le serment gelé ?",
						"spanish": "¿Quién se atreve a romper el juramento congelado?",
						"vietnamese": "Ai dám phá vỡ lời thề băng giá?",
						"thai": "ใครกล้าทำลายคำสาบานที่แข็งตัว?",
						"hindi": "कौन जमा हुआ शपथ तोड़ने की हिम्मत करता है?"
					}
				},
				{
					"content": {
						"korean": "저게 뭐야… 괴물인가!",
						"english": "What is that... A monster!",
						"japanese": "あれは何だ… 化け物か！",
						"chinese": "那是什么… 是怪物吗！",
						"french": "Qu'est-ce que c'est... Un monstre !",
						"spanish": "¿Qué es eso... Un monstruo!",
						"vietnamese": "Cái gì thế kia... Quái vật sao!",
						"thai": "นั่นอะไร... สัตว์ประหลาดเหรอ!",
						"hindi": "वह क्या है... एक राक्षस!"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저건… 돌무덤의 분노. 깨진 약속의 대가야!",
						"english": "That's... the cairn's wrath. The price of a broken promise!",
						"japanese": "あれは… 石塚の怒り。破られた約束の代償だ！",
						"chinese": "那是… 石冢的愤怒。是打破约定的代价！",
						"french": "C'est... la colère du cairn. Le prix d'une promesse brisée !",
						"spanish": "Eso es... la ira del mojón. ¡El precio de una promesa rota!",
						"vietnamese": "Đó là... cơn thịnh nộ của đống đá. Cái giá của một lời hứa bị phá vỡ!",
						"thai": "นั่นคือ... ความโกรธแค้นของกองหิน. ค่าชดเชยสำหรับคำสัญญาที่แตกสลาย!",
						"hindi": "वह... पत्थर के ढेर का क्रोध। टूटे वादे की कीमत है!"
					},
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "대가는 치러야 하는 법.",
						"english": "The price must be paid.",
						"japanese": "代償は支払われねばならない。",
						"chinese": "代价是必须付出的。",
						"french": "Le prix doit être payé.",
						"spanish": "El precio debe ser pagado.",
						"vietnamese": "Cái giá phải được trả.",
						"thai": "ต้องชดใช้ราคา.",
						"hindi": "कीमत चुकानी ही पड़ती है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "약속을 저버린 자들이여… 대가를 치러라.",
						"english": "Those who abandon their promise... pay the price.",
						"japanese": "約束を破りし者たちよ… 代償を払え。",
						"chinese": "那些背弃誓言之人… 付出代价吧。",
						"french": "Vous qui avez trahi votre promesse... payez le prix.",
						"spanish": "Aquellos que abandonan su promesa... paguen el precio.",
						"vietnamese": "Những kẻ bội ước... hãy trả giá.",
						"thai": "ผู้ที่ละทิ้งคำสัญญา... จงชดใช้.",
						"hindi": "जिन्होंने वादा तोड़ा है... कीमत चुकाओ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어!",
						"english": "Ugh... It's not over yet!",
						"japanese": "ぐっ… まだ… 終わってない！",
						"chinese": "呃… 还没… 结束！",
						"french": "Urgh... Ce n'est pas encore fini !",
						"spanish": "Uf... ¡Aún no ha terminado!",
						"vietnamese": "Khốn kiếp... Vẫn chưa... kết thúc đâu!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "आह... अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이대로 포기할 순 없어. 우리는… 약속을 지켜야 해.",
						"english": "I can't give up like this. We... must keep our promise.",
						"japanese": "このまま諦めるわけにはいかない。俺たちは… 約束を守らなければならない。",
						"chinese": "不能就这样放弃。我们… 必须遵守约定。",
						"french": "Je ne peux pas abandonner comme ça. Nous… devons tenir notre promesse.",
						"spanish": "No puedo rendirme así. Nosotros… debemos cumplir nuestra promesa.",
						"vietnamese": "Không thể bỏ cuộc thế này được. Chúng ta… phải giữ lời hứa.",
						"thai": "จะยอมแพ้แบบนี้ไม่ได้ เรา… ต้องรักษาสัญญา",
						"hindi": "मैं ऐसे हार नहीं मान सकता। हमें… अपना वादा निभाना है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이건… 그저 시작일 뿐이다. 진정한 약속은… 아직 깨지지 않았다.",
						"english": "This is... just the beginning. The true promise... is yet unbroken.",
						"japanese": "これは… 始まりに過ぎない。真の約束は… まだ破られていない。",
						"chinese": "这只是… 开始。真正的约定… 尚未打破。",
						"french": "Ce n'est... que le début. La vraie promesse... n'est pas encore brisée.",
						"spanish": "Esto es... solo el principio. La verdadera promesa... aún no se ha roto.",
						"vietnamese": "Đây chỉ là... khởi đầu. Lời hứa thật sự... vẫn chưa bị phá vỡ.",
						"thai": "นี่เป็น... เพียงจุดเริ่มต้นเท่านั้น. คำสัญญาที่แท้จริง... ยังไม่ถูกทำลาย.",
						"hindi": "यह... बस शुरुआत है। सच्चा वादा... अभी टूटा नहीं है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "해냈다… 하지만… 끝난 걸까?",
						"english": "We did it... but... is it over?",
						"japanese": "やった… しかし… 終わったのか？",
						"chinese": "成功了… 但是… 结束了吗？",
						"french": "On l'a fait... mais... est-ce fini ?",
						"spanish": "Lo logramos... pero... ¿habrá terminado?",
						"vietnamese": "Chúng ta đã làm được... nhưng... đã kết thúc chưa?",
						"thai": "ทำสำเร็จแล้ว... แต่... จบแล้วเหรอ?",
						"hindi": "हमने कर दिखाया... लेकिन... क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "승리했지만… 이 싸움은 끝나지 않았어. 더 큰 진실이 숨어 있어.",
						"english": "We won... but this fight isn't over. A greater truth lies hidden.",
						"japanese": "勝利したが… この戦いは終わっていない。もっと大きな真実が隠されている。",
						"chinese": "胜利了… 但这场战斗并未结束。更大的真相隐藏其中。",
						"french": "Nous avons gagné... mais ce combat n'est pas terminé. Une vérité plus grande est cachée.",
						"spanish": "Ganamos... pero esta lucha no ha terminado. Una verdad más grande se oculta.",
						"vietnamese": "Chúng ta đã thắng... nhưng cuộc chiến này chưa kết thúc. Một sự thật lớn hơn đang ẩn giấu.",
						"thai": "เราชนะแล้ว... แต่การต่อสู้ครั้งนี้ยังไม่จบ. ความจริงที่ยิ่งใหญ่กว่าซ่อนอยู่.",
						"hindi": "हम जीत गए... लेकिन यह लड़ाई खत्म नहीं हुई। एक बड़ी सच्चाई छिपी है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "눈보라가 잠시 잦아들었지만, 불신의 그림자는 더욱 짙어졌다. 탐험대는 알 수 없는 위협을 향해 나아가야 했다.",
						"english": "The blizzard briefly subsided, but the shadow of distrust deepened. The expedition had to press on towards an unknown threat.",
						"japanese": "吹雪は一時的に収まったが、不信の影はさらに色濃くなった。探検隊は未知の脅威に向かって進まねばならなかった。",
						"chinese": "暴风雪暂时平息，但怀疑的阴影却愈发浓重。探险队不得不继续前行，面对未知的威胁。",
						"french": "Le blizzard s'est calmé un instant, mais l'ombre de la méfiance s'est épaissie. L'expédition a dû avancer vers une menace inconnue.",
						"spanish": "La tormenta de nieve amainó brevemente, pero la sombra de la desconfianza se hizo más profunda. La expedición tuvo que avanzar hacia una amenaza desconocida.",
						"vietnamese": "Bão tuyết tạm lắng xuống, nhưng bóng tối của sự ngờ vực càng dày đặc hơn. Đoàn thám hiểm phải tiến về phía một mối đe dọa không xác định.",
						"thai": "พายุหิมะสงบลงชั่วคราว, แต่เงามืดแห่งความไม่ไว้วางใจกลับลึกซึ้งยิ่งขึ้น. คณะสำรวจต้องก้าวไปข้างหน้าเผชิญกับภัยคุกคามที่ไม่รู้จัก.",
						"hindi": "बर्फीला तूफान कुछ देर के लिए थम गया, लेकिन अविश्वास की छाया और गहरी हो गई। अभियान दल को एक अज्ञात खतरे की ओर बढ़ना पड़ा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 모든 것을 집어삼킬 듯 몰아쳤다.",
			"식량은 바닥났고, 온기는 사라졌다.",
			"고립된 탐험대, 그들 사이엔 불신의 그림자가 드리운다.",
			"돌무덤 'Cairn'의 침묵 속에서, 기이한 굉음이 약속의 종말을 예고한다."
		],
		"english": [
			"The blizzard raged as if to swallow everything.",
			"Food ran out, and warmth vanished.",
			"The isolated expedition, a shadow of distrust looms among them.",
			"In the silence of the 'Cairn', a strange roar heralds the end of the promise."
		],
		"japanese": [
			"吹雪がすべてを飲み込むように荒れ狂った。",
			"食料は尽き、温かさは失われた。",
			"孤立した探検隊、彼らの間に不信の影が差す。",
			"積石塚「ケルン」の沈黙の中、奇妙な轟音が約束の終わりを告げる。"
		],
		"chinese": [
			"暴风雪咆哮着，似乎要吞噬一切。",
			"食物耗尽，温暖消散。",
			"孤立的探险队，不信任的阴影笼罩在他们之间。",
			"在石冢“Cairn”的寂静中，奇异的轰鸣预示着承诺的终结。"
		],
		"french": [
			"La tempête de neige faisait rage, prête à tout engloutir.",
			"La nourriture était épuisée, la chaleur disparue.",
			"L'expédition isolée, une ombre de méfiance plane parmi eux.",
			"Dans le silence du « Cairn », un étrange grondement annonce la fin de la promesse."
		],
		"spanish": [
			"La ventisca rugía, como si fuera a tragarse todo.",
			"La comida se acabó y el calor desapareció.",
			"La expedición aislada, una sombra de desconfianza se cierne sobre ellos.",
			"En el silencio del 'Cairn', un extraño rugido anuncia el fin de la promesa."
		],
		"vietnamese": [
			"Bão tuyết hoành hành như muốn nuốt chửng mọi thứ.",
			"Lương thực cạn kiệt, hơi ấm tan biến.",
			"Đoàn thám hiểm bị cô lập, bóng tối ngờ vực bao trùm giữa họ.",
			"Trong sự im lặng của 'Cairn', một tiếng gầm kỳ lạ báo hiệu sự kết thúc của lời hứa."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำราวกับจะกลืนกินทุกสิ่ง",
			"เสบียงหมดสิ้น ความอบอุ่นหายไป",
			"คณะสำรวจที่โดดเดี่ยว เงาแห่งความไม่ไว้วางใจปกคลุมอยู่ระหว่างพวกเขา",
			"ในความเงียบของ 'Cairn' เสียงคำรามประหลาดประกาศการสิ้นสุดของคำสัญญา"
		],
		"hindi": [
			"बर्फीला तूफान सब कुछ निगलने को आतुर था।",
			"भोजन समाप्त हो गया, गर्माहट गायब हो गई।",
			"अलग-थलग पड़ा अभियान दल, उनके बीच अविश्वास की छाया मंडरा रही है।",
			"केयर्न' की खामोशी में, एक अजीब गर्जना वादे के अंत का संकेत देती है।"
		]
	}
} as const;
