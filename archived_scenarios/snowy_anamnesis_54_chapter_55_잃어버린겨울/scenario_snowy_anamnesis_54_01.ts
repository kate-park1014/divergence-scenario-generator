export const scenario_snowy_anamnesis_54_01 = {
	"scenario_id": "snowy_anamnesis_54_01",
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
	"prologue": {
		"korean": [
			"끝없는 눈보라가 휘몰아치는 설원.",
			"잊힌 전설의 속삭임은 얼음 속에 갇혀 있었다.",
			"그곳에서, 묘하게 따스한 기운을 풍기는 소녀가 그들을 기다렸다.",
			"이 비극은, 이제 시작일 뿐."
		],
		"english": [
			"A blizzard rages across an endless snowy field.",
			"Whispers of a forgotten legend were trapped in the ice.",
			"There, a girl exuding a strangely warm aura awaited them.",
			"This tragedy is but the beginning."
		],
		"japanese": [
			"終わりのない吹雪が吹き荒れる雪原。",
			"忘れられた伝説の囁きは、氷の中に閉じ込められていた。",
			"そこでは、妙に温かい気配を漂わせる少女が彼らを待っていた。",
			"この悲劇は、まだ序章に過ぎない。"
		],
		"chinese": [
			"漫天飞雪的无尽雪原。",
			"遗忘传说的低语被困于冰中。",
			"在那，一个散发着奇特温暖气息的少女等待着他们。",
			"这场悲剧，才刚刚开始。"
		],
		"french": [
			"Une tempête de neige sans fin fait rage sur l'étendue enneigée.",
			"Les murmures d'une légende oubliée étaient piégés dans la glace.",
			"Là, une fille dégageant une aura étrangement chaleureuse les attendait.",
			"Cette tragédie n'est que le début."
		],
		"spanish": [
			"Una ventisca interminable azota el campo nevado.",
			"Los susurros de una leyenda olvidada estaban atrapados en el hielo.",
			"Allí, una chica que desprendía un aura extrañamente cálida los esperaba.",
			"Esta tragedia es solo el principio."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận với bão tuyết cuồng nộ.",
			"Những lời thì thầm của một truyền thuyết bị lãng quên bị mắc kẹt trong băng.",
			"Ở đó, một cô gái toát ra khí chất ấm áp kỳ lạ đang đợi họ.",
			"Bi kịch này, chỉ là khởi đầu."
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ที่พายุหิมะโหมกระหน่ำไม่สิ้นสุด",
			"เสียงกระซิบของตำนานที่ถูกลืมเลือนถูกขังอยู่ในน้ำแข็ง",
			"ณ ที่นั่น เด็กสาวผู้มีออร่าอบอุ่นแปลกประหลาดกำลังรอพวกเขาอยู่",
			"โศกนาฏกรรมนี้เป็นเพียงจุดเริ่มต้นเท่านั้น"
		],
		"hindi": [
			"एक अंतहीन बर्फीले मैदान में बर्फीला तूफ़ान भड़क रहा है।",
			"एक भूली हुई किंवदंती की फुसफुसाहट बर्फ में फँसी हुई थी।",
			"वहाँ, एक अजीबोगरीब गर्म आभा वाली लड़की उनका इंतजार कर रही थी।",
			"यह त्रासदी बस शुरुआत है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "혹독한 추위가 대지를 감쌌다. 모든 것이 얼어붙은 설원.",
						"english": "Harsh cold enveloped the land. A snowy field where everything was frozen.",
						"japanese": "厳しい寒さが大地を包んだ。すべてが凍りついた雪原。",
						"chinese": "严寒笼罩大地。万物冻结的雪原。",
						"french": "Un froid rigoureux enveloppait la terre. Une étendue enneigée où tout était gelé.",
						"spanish": "Un frío implacable envolvía la tierra. Un campo nevado donde todo estaba congelado.",
						"vietnamese": "Cái lạnh khắc nghiệt bao trùm mặt đất. Một vùng tuyết phủ mọi thứ đóng băng.",
						"thai": "ความหนาวเย็นเข้าปกคลุมแผ่นดิน ทุ่งหิมะที่ทุกสิ่งแข็งตัว",
						"hindi": "कठोर ठंड ने धरती को घेर लिया। सब कुछ जमा हुआ एक बर्फीला मैदान।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "젠장, 발이 떨어지지 않아… 이 추위는 뭐지?",
						"english": "Damn it, I can't move my feet... What is this cold?",
						"japanese": "くそ、足が動かない…この寒さは何だ？",
						"chinese": "该死，脚都动不了了……这鬼天气怎么回事？",
						"french": "Bon sang, je ne peux plus bouger mes pieds... C'est quoi ce froid ?",
						"spanish": "Maldita sea, no puedo mover los pies... ¿Qué es este frío?",
						"vietnamese": "Chết tiệt, chân tôi không nhấc lên được… Cái lạnh này là gì vậy?",
						"thai": "บ้าจริง ขาฉันก้าวไม่ออก... ความหนาวเย็นอะไรกันนี่?",
						"hindi": "धिक्कार है, मेरे पैर हिल नहीं रहे... यह कैसी ठंड है?"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기에… 오셨군요. 어쩐지… 기다렸던 것 같아요.",
						"english": "You've... arrived here. Somehow... I felt like I was waiting for you.",
						"japanese": "ここに… いらしたんですね。どういうわけか… 待っていたような気がします。",
						"chinese": "你……终于来了。不知为何……我仿佛一直在等你。",
						"french": "Vous êtes... arrivé ici. D'une certaine manière... j'avais l'impression de vous attendre.",
						"spanish": "Has... llegado aquí. De alguna manera... sentí que te estaba esperando.",
						"vietnamese": "Anh… đã đến đây. Không hiểu sao… tôi cứ ngỡ mình đang đợi anh.",
						"thai": "คุณ... มาถึงที่นี่แล้วสินะ ทำไมไม่รู้... ฉันรู้สึกเหมือนรอคุณอยู่เลย",
						"hindi": "आप... यहाँ आ गए। पता नहीं क्यों... मुझे लगा कि मैं आपका इंतजार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "넌 누구야? 이 얼음 지옥에 네가 왜…?",
						"english": "Who are you? Why are you in this icy hell...?",
						"japanese": "お前は誰だ？ この氷の地獄に、お前がなぜ…？",
						"chinese": "你是谁？为什么会出现在这冰天雪地里……？",
						"french": "Qui es-tu ? Pourquoi es-tu dans cet enfer glacé...?",
						"spanish": "¿Quién eres? ¿Por qué estás en este infierno helado...?",
						"vietnamese": "Ngươi là ai? Tại sao ngươi lại ở cái địa ngục băng giá này…?",
						"thai": "เธอเป็นใคร? ทำไมถึงมาอยู่ในนรกน้ำแข็งนี่...?",
						"hindi": "तुम कौन हो? तुम इस बर्फीले नर्क में क्यों हो...?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에이라. 이 땅의 모든 것을 기억하고… 기록하는 자.",
						"english": "Eira. The one who remembers... and records everything on this land.",
						"japanese": "エイラ。この地のすべてを記憶し… 記録する者。",
						"chinese": "艾拉。这片土地上所有事物的记忆者……以及记录者。",
						"french": "Eira. Celle qui se souvient... et enregistre tout sur cette terre.",
						"spanish": "Eira. La que recuerda... y registra todo en esta tierra.",
						"vietnamese": "Eira. Người ghi nhớ… và ghi chép lại mọi thứ trên mảnh đất này.",
						"thai": "ไอรา ผู้จดจำ... และบันทึกทุกสิ่งบนดินแดนแห่งนี้",
						"hindi": "ऐरा। वह जो इस भूमि पर सब कुछ याद रखता है... और दर्ज करता है।"
					}
				},
				{
					"content": {
						"korean": "이곳에는… 오래된 전설과 저주가 깃들어 있어요. 얼음 정령이… 이 모든 것을 지배하죠.",
						"english": "Here... an old legend and a curse reside. The ice spirit... rules over all of this.",
						"japanese": "ここには… 古い伝説と呪いが宿っています。氷の精霊が… このすべてを支配しています。",
						"chinese": "这里……寄宿着古老的传说和诅咒。冰霜精灵……支配着这一切。",
						"french": "Ici... une ancienne légende et une malédiction résident. L'esprit de glace... règne sur tout cela.",
						"spanish": "Aquí... residen una antigua leyenda y una maldición. El espíritu de hielo... domina todo esto.",
						"vietnamese": "Nơi đây… ẩn chứa một truyền thuyết và lời nguyền cổ xưa. Tinh linh băng giá… cai trị tất cả những thứ này.",
						"thai": "ที่นี่... มีตำนานเก่าแก่และคำสาปสิงสถิตอยู่ วิญญาณน้ำแข็ง... เป็นผู้ปกครองทุกสิ่ง",
						"hindi": "यहाँ... एक पुरानी किंवदंती और एक अभिशाप निवास करता है। बर्फ की आत्मा... इन सब पर राज करती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "정령…?",
						"english": "Spirit...?",
						"japanese": "精霊…？",
						"chinese": "精灵…？",
						"french": "Esprit...?",
						"spanish": "¿Espíritu...?",
						"vietnamese": "Tinh linh...?",
						"thai": "ภูต...?",
						"hindi": "आत्मा…?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "근데… 어디선가, 아이의 노랫소리가 들리는 것 같지 않아?",
						"english": "But... don't you hear a child's song from somewhere?",
						"japanese": "でも…どこかから、子供の歌声が聞こえてこない？",
						"chinese": "可是…你有没有觉得，好像听到哪里有孩子的歌声？",
						"french": "Mais... n'entends-tu pas le chant d'un enfant, quelque part ?",
						"spanish": "¿Pero... no escuchas el canto de un niño en algún lugar?",
						"vietnamese": "Nhưng... không phải anh/chị nghe thấy tiếng hát của một đứa trẻ từ đâu đó sao?",
						"thai": "แต่...ไม่ได้ยินเสียงเพลงของเด็กมาจากที่ไหนสักแห่งเหรอ?",
						"hindi": "पर… क्या तुम्हें कहीं से किसी बच्चे के गाने की आवाज़ नहीं आ रही?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"duration_ms": 400,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "가면 안 돼요. 얼음 정령은… 잊힌 맹세에 갇혀 있어요.",
						"english": "You must not go. The Ice Spirit is... bound by a forgotten vow.",
						"japanese": "行ってはいけません。氷の精霊は…忘れられた誓いに囚われています。",
						"chinese": "不能去。冰之精灵…被遗忘的誓言束缚着。",
						"french": "Vous ne devez pas y aller. L'Esprit de Glace est... lié par un vœu oublié.",
						"spanish": "No deben ir. El Espíritu de Hielo está... atrapado por un juramento olvidado.",
						"vietnamese": "Không được đi. Tinh linh Băng giá... bị mắc kẹt bởi một lời thề đã lãng quên.",
						"thai": "ไปไม่ได้ ห้ามไป ภูตน้ำแข็ง...ถูกจองจำด้วยคำสาบานที่ถูกลืมเลือน",
						"hindi": "तुम्हें नहीं जाना चाहिए। बर्फीली आत्मा… एक भूली हुई प्रतिज्ञा से बंधी हुई है।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "맹세? 무슨 맹세인데?",
						"english": "A vow? What kind of vow?",
						"japanese": "誓い？何の誓いなんだ？",
						"chinese": "誓言？什么誓言？",
						"french": "Un vœu ? Quel vœu ?",
						"spanish": "¿Un juramento? ¿Qué juramento?",
						"vietnamese": "Lời thề? Lời thề gì vậy?",
						"thai": "คำสาบาน? คำสาบานอะไร?",
						"hindi": "प्रतिज्ञा? कैसी प्रतिज्ञा?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 땅을… 지키기 위한… 하지만 비극적으로 왜곡되어 버린…",
						"english": "To protect this land... but tragically distorted...",
						"japanese": "この地を…守るための…しかし、悲劇的に歪められてしまった…",
						"chinese": "为了守护这片土地…但却被悲剧性地扭曲了…",
						"french": "Pour protéger cette terre... mais tragiquement déformé...",
						"spanish": "Para proteger esta tierra... pero trágicamente distorsionado...",
						"vietnamese": "Để bảo vệ mảnh đất này... nhưng đã bị bóp méo một cách bi thảm...",
						"thai": "เพื่อปกป้องดินแดนแห่งนี้...แต่ถูกบิดเบือนอย่างน่าเศร้า...",
						"hindi": "इस भूमि की… रक्षा के लिए… लेकिन दुखद रूप से विकृत हो गई…"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 순간, 거대한 얼음 결정이 솟구치며 땅이 울렸다.",
						"english": "At that moment, a colossal ice crystal surged forth, and the ground trembled.",
						"japanese": "その瞬間、巨大な氷の結晶が突き上がり、大地が震えた。",
						"chinese": "那一刻，巨大的冰晶冲天而起，大地为之震颤。",
						"french": "À cet instant, un cristal de glace colossal jaillit, et la terre trembla.",
						"spanish": "En ese instante, un cristal de hielo colosal surgió y la tierra tembló.",
						"vietnamese": "Khoảnh khắc đó, một tinh thể băng khổng lồ trồi lên, khiến mặt đất rung chuyển.",
						"thai": "ในชั่วพริบตานั้น ผลึกน้ำแข็งขนาดมหึมาพุ่งขึ้นมา และแผ่นดินก็สั่นสะเทือน",
						"hindi": "उसी पल, एक विशाल बर्फ़ का क्रिस्टल ऊपर उठा और धरती कांप उठी।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 이 신성한 땅을 더럽히려는 자들…!",
						"english": "How dare you... those who defile this sacred land...!",
						"japanese": "よくも…この神聖な地を汚そうとする者たちよ…！",
						"chinese": "竟敢…玷污这片神圣的土地的家伙们…！",
						"french": "Comment osez-vous... ceux qui souillent cette terre sacrée...!",
						"spanish": "¡Cómo se atreven... aquellos que profanan esta tierra sagrada...!",
						"vietnamese": "Dám... những kẻ dám làm ô uế vùng đất thiêng này...!",
						"thai": "กล้าดียังไง...พวกที่คิดจะแปดเปื้อนดินแดนอันศักดิ์สิทธิ์แห่งนี้...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस पवित्र भूमि को अपवित्र करने वालों…!"
					}
				},
				{
					"content": {
						"korean": "이게… 정령이야?",
						"english": "Is this... a spirit?",
						"japanese": "これが…精霊なの？",
						"chinese": "这就是…精灵吗？",
						"french": "Est-ce... un esprit ?",
						"spanish": "¿Esto es... un espíritu?",
						"vietnamese": "Đây là... tinh linh sao?",
						"thai": "นี่คือ...ภูตเหรอ?",
						"hindi": "क्या यह… एक आत्मा है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "안 돼… 아직… 말해야 할 것이…",
						"english": "No... not yet... I still have something to say...",
						"japanese": "だめだ…まだ…言わなければならないことが…",
						"chinese": "不行…我还有话…要说…",
						"french": "Non... pas encore... J'ai encore quelque chose à dire...",
						"spanish": "No... todavía no... Todavía tengo algo que decir...",
						"vietnamese": "Không được... vẫn còn... điều phải nói...",
						"thai": "ไม่นะ...ยัง...มีสิ่งที่ต้องพูด...",
						"hindi": "नहीं… अभी नहीं… मुझे अभी कुछ कहना है…"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "무사하신가요? 방금 그 존재는… 이 설원의 수호자예요.",
						"english": "Are you alright? That being just now... is the guardian of this snowfield.",
						"japanese": "ご無事ですか？今のあの存在は…この雪原の守護者です。",
						"chinese": "您没事吧？刚才那个存在…是这片雪原的守护者。",
						"french": "Êtes-vous sain et sauf ? Cette entité de tout à l'heure... est la gardienne de cette étendue enneigée.",
						"spanish": "¿Están a salvo? Esa criatura de hace un momento... es la guardiana de este campo nevado.",
						"vietnamese": "Các vị an toàn chứ? Sinh vật vừa rồi... là người bảo hộ của cánh đồng tuyết này.",
						"thai": "คุณปลอดภัยดีไหม? สิ่งมีชีวิตเมื่อกี้...คือผู้พิทักษ์ของทุ่งหิมะแห่งนี้",
						"hindi": "क्या आप ठीक हैं? अभी जो था… वह इस बर्फीले मैदान का संरक्षक है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "수호자가 우릴 공격한다고?",
						"english": "The Guardian is attacking us?",
						"japanese": "「守護者が私たちを攻撃するって？」",
						"chinese": "「守护者在攻击我们？」",
						"french": "« Le Gardien nous attaque ? »",
						"spanish": "¿El Guardián nos está atacando?",
						"vietnamese": "Kẻ bảo hộ đang tấn công chúng ta ư?",
						"thai": "ผู้พิทักษ์กำลังโจมตีเราเหรอ?",
						"hindi": "क्या संरक्षक हम पर हमला कर रहा है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "네… 모든 침입자를 배척하도록… 고대의 맹세에 묶여 있죠.",
						"english": "Yes... bound by an ancient vow... to reject all intruders.",
						"japanese": "「はい… 古代の誓いに縛られて… すべての侵入者を排除するようにと。」",
						"chinese": "「是的……被古老的誓言束缚……要驱逐所有入侵者。」",
						"french": "« Oui... lié par un ancien serment... à rejeter tous les intrus. »",
						"spanish": "Sí... atado por un antiguo juramento... a rechazar a todos los intrusos.",
						"vietnamese": "Vâng... bị ràng buộc bởi một lời thề cổ xưa... để xua đuổi tất cả kẻ xâm nhập.",
						"thai": "ใช่... ผูกมัดด้วยคำสาบานโบราณ... เพื่อขับไล่ผู้บุกรุกทุกคน",
						"hindi": "हाँ... एक प्राचीन शपथ से बंधा हुआ... सभी घुसपैठियों को अस्वीकार करने के लिए।"
					}
				},
				{
					"content": {
						"korean": "그런 슬픈 눈으로… 우리를 보는 이유는 뭐야?",
						"english": "With such sad eyes... why do you look at us?",
						"japanese": "「そんな悲しい目で… なぜ私たちを見るの？」",
						"chinese": "「用那样悲伤的眼神……看着我们是为了什么？」",
						"french": "« Avec des yeux si tristes... pourquoi nous regardes-tu ? »",
						"spanish": "Con esos ojos tan tristes... ¿por qué nos miras?",
						"vietnamese": "Với đôi mắt buồn như vậy... tại sao lại nhìn chúng tôi?",
						"thai": "ด้วยดวงตาที่เศร้าสร้อยเช่นนั้น... ทำไมถึงมองมาที่เรา?",
						"hindi": "ऐसी उदास आँखों से... तुम हमें क्यों देख रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…저 존재의 슬픔이… 저의 슬픔이니까요.",
						"english": "...Because the sorrow of that being... is my sorrow.",
						"japanese": "「…あの存在の悲しみが… 私の悲しみだからです。」",
						"chinese": "「……因为那个存在的悲伤……就是我的悲伤。」",
						"french": "« ...Parce que la tristesse de cet être... est ma tristesse. »",
						"spanish": "...Porque la tristeza de ese ser... es mi tristeza.",
						"vietnamese": "...Bởi vì nỗi buồn của sinh vật đó... là nỗi buồn của tôi.",
						"thai": "...เพราะความเศร้าของสิ่งนั้น... คือความเศร้าของฉัน",
						"hindi": "...क्योंकि उस सत्ता का दुख... मेरा दुख है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 400,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 깊이 들어가면… 돌이킬 수 없어요. 이 저주는… 끝없이 반복될 거예요.",
						"english": "Go deeper... and there's no turning back. This curse... will repeat endlessly.",
						"japanese": "「これ以上深淵へ進めば… 後戻りできません。この呪いは… 終わりなく繰り返されるでしょう。」",
						"chinese": "「再深入下去……就无法回头了。这个诅咒……会无休止地重复。」",
						"french": "« Si vous allez plus profond... il n'y aura plus de retour en arrière. Cette malédiction... se répétera sans fin. »",
						"spanish": "Si vas más profundo... no habrá vuelta atrás. Esta maldición... se repetirá sin fin.",
						"vietnamese": "Đi sâu hơn nữa... sẽ không thể quay lại. Lời nguyền này... sẽ lặp lại vô tận.",
						"thai": "ถ้าลึกเข้าไปกว่านี้... จะไม่มีทางย้อนกลับได้ คำสาปนี้... จะวนเวียนไม่รู้จบ",
						"hindi": "और गहरे जाओगे... तो वापसी नहीं होगी। यह अभिशाप... अनंत तक दोहराया जाएगा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 잃어버린 온기를 되찾아야 해.",
						"english": "We must reclaim the lost warmth.",
						"japanese": "「私たちは失われた温もりを取り戻さなければなりません。」",
						"chinese": "「我们必须找回失去的温暖。」",
						"french": "« Nous devons retrouver la chaleur perdue. »",
						"spanish": "Debemos recuperar el calor perdido.",
						"vietnamese": "Chúng ta phải tìm lại sự ấm áp đã mất.",
						"thai": "เราต้องฟื้นคืนความอบอุ่นที่หายไป",
						"hindi": "हमें खोई हुई गर्माहट वापस पानी होगी।"
					}
				},
				{
					"content": {
						"korean": "…그 온기가… 무엇으로부터 왔는지… 아셔야 할 텐데.",
						"english": "...You should know... where that warmth came from.",
						"japanese": "「…その温もりが… 何から来たのか… 知っておくべきでしょうに。」",
						"chinese": "「……你该知道……那份温暖……来自何处。」",
						"french": "« ...Vous devriez savoir... d'où vient cette chaleur. »",
						"spanish": "...Deberías saber... de dónde vino ese calor.",
						"vietnamese": "...Bạn nên biết... sự ấm áp đó đến từ đâu.",
						"thai": "...คุณควรจะรู้... ว่าความอบอุ่นนั้นมาจากไหน",
						"hindi": "...आपको पता होना चाहिए... वह गर्माहट कहाँ से आई थी।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "「それはどういう意味ですか？」",
						"chinese": "「那是什么意思？」",
						"french": "« Qu'est-ce que tu veux dire ? »",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "에이라의 눈빛은 너무나 깊은 슬픔을 담고 있었다. 그러나 탐험대는 멈추지 않았다.",
						"english": "Aira's eyes held a sorrow so deep. Yet, the expedition team did not stop.",
						"japanese": "「エイラの瞳にはあまりにも深い悲しみが宿っていた。しかし、探検隊は立ち止まらなかった。」",
						"chinese": "「艾拉的眼神中充满了深深的悲伤。然而，探险队没有停下。」",
						"french": "« Les yeux d'Aira contenaient une tristesse si profonde. Pourtant, l'équipe d'expédition ne s'arrêta pas. »",
						"spanish": "Los ojos de Aira contenían una tristeza tan profunda. Sin embargo, el equipo de expedición no se detuvo.",
						"vietnamese": "Ánh mắt của Aira chứa đựng nỗi buồn sâu thẳm. Tuy nhiên, đoàn thám hiểm vẫn không dừng lại.",
						"thai": "ดวงตาของไอราเต็มไปด้วยความเศร้าโศกอย่างสุดซึ้ง แต่คณะสำรวจก็ไม่หยุดยั้ง",
						"hindi": "ऐरा की आँखों में गहरा दुख था। फिर भी, अभियान दल रुका नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "마침내 설원의 심장부. 모든 것을 얼리는 거대한 그림자가 나타났다.",
						"english": "Finally, the heart of the snowfield. A colossal shadow appeared, freezing everything.",
						"japanese": "「ついに雪原の心臓部。すべてを凍てつかせる巨大な影が現れた。」",
						"chinese": "「终于，来到了雪原的深处。一个能冻结一切的巨大阴影出现了。」",
						"french": "« Finalement, le cœur de la toundra. Une ombre colossale apparut, gelant tout. »",
						"spanish": "Finalmente, el corazón del campo de nieve. Una sombra colosal apareció, congelando todo.",
						"vietnamese": "Cuối cùng, trái tim của vùng tuyết. Một bóng đen khổng lồ xuất hiện, đóng băng mọi thứ.",
						"thai": "ในที่สุดก็มาถึงใจกลางทุ่งน้ำแข็ง เงาขนาดมหึมาปรากฏขึ้น แช่แข็งทุกสิ่ง",
						"hindi": "अंततः, बर्फ के मैदान का हृदय। एक विशाल छाया प्रकट हुई, जिसने सब कुछ जमा दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "또다시… 침입자들이… 이 땅을 더럽히려는가.",
						"english": "Again... intruders... dare to defile this land?",
						"japanese": "またしても… 侵入者どもが… この地を汚そうというのか。",
						"chinese": "又一次… 入侵者们… 想要玷污这片土地吗？",
						"french": "Encore... des intrus... qui osent souiller cette terre ?",
						"spanish": "¿De nuevo... intrusos... intentando profanar esta tierra?",
						"vietnamese": "Lại một lần nữa… những kẻ xâm nhập… muốn làm ô uế vùng đất này sao?",
						"thai": "อีกแล้วหรือ… ผู้บุกรุก… พวกมันจะแปดเปื้อนแผ่นดินนี้อีกหรือ",
						"hindi": "फिर से… घुसपैठिए… क्या वे इस भूमि को अपवित्र करना चाहते हैं?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 비극의 원흉인가!",
						"english": "Are you the cause of all this tragedy!",
						"japanese": "貴様がこの全ての悲劇の元凶か！",
						"chinese": "你就是这一切悲剧的元凶吗！",
						"french": "Es-tu la cause de toute cette tragédie !",
						"spanish": "¡¿Eres tú la causa de toda esta tragedia?!",
						"vietnamese": "Ngươi là kẻ gây ra tất cả bi kịch này sao!",
						"thai": "เจ้าคือต้นเหตุของโศกนาฏกรรมทั้งหมดนี้หรือ!",
						"hindi": "क्या तुम ही हो इस सारी त्रासदी का कारण!"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아니요… {random_boss}는… 그저… (말잇못)",
						"english": "No... {random_boss} is... merely... (speechless)",
						"japanese": "いいえ… {random_boss}は… ただ… (言葉を失う)",
						"chinese": "不… {random_boss}只是… (无言)",
						"french": "Non... {random_boss} est... simplement... (sans voix)",
						"spanish": "No... {random_boss} es... simplemente... (sin palabras)",
						"vietnamese": "Không… {random_boss} chỉ là… (không nói nên lời)",
						"thai": "ไม่… {random_boss} เป็นเพียง… (พูดไม่ออก)",
						"hindi": "नहीं… {random_boss} तो बस… (निःशब्द)"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "무의미한 싸움이다. 모든 것은… 얼어붙을 운명.",
						"english": "This is a meaningless fight. Everything is... destined to freeze.",
						"japanese": "無意味な戦いだ。全ては… 凍てつく運命。",
						"chinese": "这是一场毫无意义的战斗。一切都… 注定要冻结。",
						"french": "C'est un combat insignifiant. Tout est... destiné à geler.",
						"spanish": "Esta es una lucha sin sentido. Todo está... destinado a congelarse.",
						"vietnamese": "Đây là một cuộc chiến vô nghĩa. Mọi thứ… đều định sẵn sẽ đóng băng.",
						"thai": "นี่เป็นการต่อสู้ที่ไร้ความหมาย ทุกสิ่ง… ล้วนถูกกำหนดให้เยือกแข็ง",
						"hindi": "यह एक व्यर्थ की लड़ाई है। सब कुछ… जमने के लिए नियत है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 얼음이 모든 것을 집어삼켰다.",
						"english": "The cold ice consumed everything.",
						"japanese": "冷たい氷が全てを飲み込んだ。",
						"chinese": "寒冷的冰吞噬了一切。",
						"french": "La glace froide a tout englouti.",
						"spanish": "El hielo frío lo consumió todo.",
						"vietnamese": "Băng giá lạnh lẽo đã nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งอันเยือกเย็นกลืนกินทุกสิ่ง",
						"hindi": "ठंडी बर्फ ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 존재들… 얼어붙어라.",
						"english": "Insignificant beings... freeze.",
						"japanese": "取るに足らない存在ども… 凍りつけ。",
						"chinese": "卑微的生灵… 冻结吧。",
						"french": "Êtres insignifiants... gelez.",
						"spanish": "Seres insignificantes... congélense.",
						"vietnamese": "Những kẻ nhỏ bé… hãy đóng băng đi.",
						"thai": "สิ่งมีชีวิตอันไร้ค่า… จงแข็งตัวซะ",
						"hindi": "तुच्छ प्राणी… जम जाओ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 400,
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…아직, 기회는 있어요. 이 땅은… 당신들을 원하고 있어요.",
						"english": "...There's still a chance. This land... desires you.",
						"japanese": "…まだ、チャンスはあります。この地は…あなたたちを求めています。",
						"chinese": "…还有机会。这片土地…渴望着你们。",
						"french": "...Il y a encore une chance. Cette terre... vous désire.",
						"spanish": "...Todavía hay una oportunidad. Esta tierra... los desea.",
						"vietnamese": "...Vẫn còn cơ hội. Mảnh đất này... đang khao khát các bạn.",
						"thai": "...ยังคงมีโอกาส. ดินแดนแห่งนี้... ต้องการพวกคุณ.",
						"hindi": "…अभी भी मौका है। यह भूमि… तुम्हें चाहती है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나는… 사라지지 않아… 이 얼음… 이 슬픔은… 영원히…",
						"english": "Ugh... I... will not vanish... This ice... this sorrow... forever...",
						"japanese": "くっ… 私は… 消えたりはしない… この氷… この悲しみは… 永遠に…",
						"chinese": "嘶… 我… 不会消失… 这冰… 这悲伤… 将永存…",
						"french": "Ugh... Je... ne disparaîtrai pas... Cette glace... cette tristesse... pour toujours...",
						"spanish": "Ugh... Yo... no desapareceré... Este hielo... esta tristeza... por siempre...",
						"vietnamese": "Ư… ta… sẽ không biến mất… Băng giá này… nỗi buồn này… mãi mãi…",
						"thai": "อึก… ข้า… จะไม่หายไป… น้ำแข็งนี้… ความเศร้าโศกนี้… ตลอดไป…",
						"hindi": "उफ़… मैं… गायब नहीं होऊँगा… यह बर्फ… यह दुख… हमेशा के लिए…"
					}
				},
				{
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "Est-ce fini...?",
						"spanish": "¿Ha terminado...?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วหรือ…?",
						"hindi": "क्या यह खत्म हो गया…?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 400,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아니요. 그저… 잠시 멈춘 것뿐.",
						"english": "No. It's just... paused for a moment.",
						"japanese": "いいえ。ただ… 少し止まっただけ。",
						"chinese": "不。只是… 暂时停滞了而已。",
						"french": "Non. C'est juste... une pause momentanée.",
						"spanish": "No. Es solo... una pausa momentánea.",
						"vietnamese": "Không. Chỉ là… tạm dừng một chút thôi.",
						"thai": "ไม่ เพียงแค่… หยุดชั่วคราวเท่านั้น",
						"hindi": "नहीं। यह तो बस… कुछ देर के लिए रुका है।"
					}
				},
				{
					"content": {
						"korean": "에이라의 눈빛은 더욱 깊은 슬픔을 담고 있었다. 이 비극은, 이제 시작일 뿐.",
						"english": "Eira's eyes held an even deeper sorrow. This tragedy, it's only just begun.",
						"japanese": "エイラの瞳は、より深い悲しみを湛えていた。この悲劇は、まだ始まったばかりに過ぎない。",
						"chinese": "艾拉的眼神中充满了更深的悲伤。这场悲剧，才刚刚开始。",
						"french": "Les yeux d'Eira contenaient une tristesse encore plus profonde. Cette tragédie, elle ne fait que commencer.",
						"spanish": "Los ojos de Eira contenían una tristeza aún más profunda. Esta tragedia, apenas acaba de comenzar.",
						"vietnamese": "Ánh mắt của Eira chứa đựng nỗi buồn sâu sắc hơn nữa. Bi kịch này, chỉ mới là khởi đầu.",
						"thai": "ดวงตาของไอรามีความเศร้าที่ลึกซึ้งยิ่งขึ้น โศกนาฏกรรมนี้ เพิ่งเริ่มต้นขึ้นเท่านั้น",
						"hindi": "एरा की आँखों में और भी गहरा दुख था। यह त्रासदी, अभी तो बस शुरू हुई है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
