export const scenario_hell_astraea_1_04 = {
	"scenario_id": "hell_astraea_1_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "겹겹이 쌓인 심연의 안개. 길을 잃은 듯 헤맨다.",
						"english": "Layers of abyssal fog. Wandering as if lost.",
						"japanese": "重なり合う深淵の霧。道に迷ったかのように彷徨う。",
						"chinese": "层层叠叠的深渊迷雾。仿佛迷失般地徘徊。",
						"french": "Des couches de brouillard abyssal. Errant comme perdu.",
						"spanish": "Capas de niebla abisal. Vagando como perdido.",
						"vietnamese": "Từng lớp sương mù vực thẳm. Lạc lối như đang lang thang.",
						"thai": "หมอกมฤตยูดซ้อนกันเป็นชั้นๆ พเนจรราวกับหลงทาง",
						"hindi": "रसातल के कोहरे की परतें। खोए हुए से भटक रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 시작인가…",
						"english": "Starting again...?",
						"japanese": "また始まるのか…",
						"chinese": "又要开始了…",
						"french": "Encore...?",
						"spanish": "¿Otra vez...?",
						"vietnamese": "Lại bắt đầu nữa sao...?",
						"thai": "เริ่มอีกแล้วเหรอ...",
						"hindi": "क्या यह फिर से शुरू हो रहा है...?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"speaker": "vex",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길을 잃으셨나요? 걱정 마세요. 제가 안내해 드릴게요.",
						"english": "Are you lost? Don't worry. I'll guide you.",
						"japanese": "道に迷われましたか？ご心配なく。私がご案内します。",
						"chinese": "你迷路了吗？别担心。我来引导你。",
						"french": "Vous êtes perdu ? Ne vous inquiétez pas. Je vais vous guider.",
						"spanish": "¿Está perdido? No se preocupe. Yo le guiaré.",
						"vietnamese": "Bạn lạc đường rồi sao? Đừng lo. Tôi sẽ dẫn đường cho bạn.",
						"thai": "คุณหลงทางเหรอ? ไม่ต้องกังวล ฉันจะนำทางให้",
						"hindi": "क्या आप रास्ता भटक गए हैं? चिंता मत कीजिए। मैं आपको रास्ता दिखाऊंगा।"
					},
					"speaker": "vex"
				},
				{
					"content": {
						"korean": "넌 누구야?",
						"english": "Who are you?",
						"japanese": "お前は誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벡스. 당신이 찾는 것을 보여줄 수 있는 자.",
						"english": "Vex. One who can show you what you seek.",
						"japanese": "ヴェックス。あなたが求めているものを示せる者。",
						"chinese": "维克斯。能向你展示你所寻求之物的人。",
						"french": "Vex. Celui qui peut vous montrer ce que vous cherchez.",
						"spanish": "Vex. Quien puede mostrarte lo que buscas.",
						"vietnamese": "Vex. Kẻ có thể cho ngươi thấy thứ ngươi tìm kiếm.",
						"thai": "เวกซ์ ผู้ที่สามารถแสดงสิ่งที่เจ้าต้องการได้",
						"hindi": "वेक्स। वह जो तुम्हें वह दिखा सकता है जो तुम चाहते हो।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 지옥의 굴레를 깨고 싶나요?",
						"english": "Do you wish to break this hellish cycle?",
						"japanese": "この地獄の輪廻を打ち破りたいですか？",
						"chinese": "你想打破这个地狱般的循环吗？",
						"french": "Voulez-vous briser ce cycle infernal ?",
						"spanish": "¿Deseas romper este ciclo infernal?",
						"vietnamese": "Ngươi có muốn phá vỡ vòng luân hồi địa ngục này không?",
						"thai": "เจ้าอยากจะทำลายวงจรนรกนี้ไหม?",
						"hindi": "क्या आप इस नरक के चक्र को तोड़ना चाहते हैं?"
					},
					"speaker": "vex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(망설임)",
						"english": "(Hesitation)",
						"japanese": "(ためらい)",
						"chinese": "(犹豫)",
						"french": "(Hésitation)",
						"spanish": "(Vacilación)",
						"vietnamese": "(Do dự)",
						"thai": "(ลังเล)",
						"hindi": "(हिचकिचाहट)"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "내가 방법을 알려줄게요. 당신이 진정으로 원하는 자유를.",
						"english": "I'll show you the way. The freedom you truly desire.",
						"japanese": "私が方法を教えてあげましょう。あなたが真に望む自由を。",
						"chinese": "我会告诉你方法。你真正渴望的自由。",
						"french": "Je vais vous montrer le chemin. La liberté que vous désirez vraiment.",
						"spanish": "Te mostraré el camino. La libertad que realmente deseas.",
						"vietnamese": "Tôi sẽ chỉ cho bạn cách. Tự do mà bạn thực sự khao khát.",
						"thai": "ฉันจะแสดงวิธีให้คุณดู อิสรภาพที่คุณปรารถนาอย่างแท้จริง",
						"hindi": "मैं तुम्हें रास्ता दिखाऊंगा। वह आज़ादी जिसकी तुम वाकई इच्छा रखते हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거짓말 마!",
						"english": "Don't lie!",
						"japanese": "嘘をつかないで！",
						"chinese": "别撒谎！",
						"french": "Ne mens pas !",
						"spanish": "¡No mientas!",
						"vietnamese": "Đừng nói dối!",
						"thai": "อย่าโกหก!",
						"hindi": "झूठ मत बोलो!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "거짓이라고요? 곧 알게 될 겁니다. 이 환상의 힘을.",
						"english": "A lie? You'll soon learn the power of this illusion.",
						"japanese": "嘘だと？すぐにわかるでしょう。この幻想の力を。",
						"chinese": "谎言？你很快就会明白这幻象的力量。",
						"french": "Un mensonge ? Vous découvrirez bientôt le pouvoir de cette illusion.",
						"spanish": "¿Una mentira? Pronto conocerás el poder de esta ilusión.",
						"vietnamese": "Nói dối ư? Bạn sẽ sớm biết sức mạnh của ảo ảnh này thôi.",
						"thai": "โกหกเหรอ? คุณจะได้รู้ถึงพลังของภาพลวงตานี้ในไม่ช้า",
						"hindi": "झूठ? तुम्हें जल्द ही इस भ्रम की शक्ति का पता चल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "vex"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "눈앞에 펼쳐진 환상. 루프가 깨지는 듯한 착각에 빠진다.",
						"english": "An illusion unfolds before your eyes. You fall into the delusion that the loop is breaking.",
						"japanese": "目の前に広がる幻想。ループが壊れるかのような錯覚に陥る。",
						"chinese": "幻象在眼前展开。你陷入了循环即将打破的错觉。",
						"french": "Une illusion se déroule sous vos yeux. Vous tombez dans l'illusion que la boucle se brise.",
						"spanish": "Una ilusión se despliega ante tus ojos. Caes en la ilusión de que el bucle se está rompiendo.",
						"vietnamese": "Một ảo ảnh mở ra trước mắt bạn. Bạn rơi vào ảo tưởng rằng vòng lặp đang bị phá vỡ.",
						"thai": "ภาพลวงตาแผ่ซ่านตรงหน้าคุณ คุณตกอยู่ในความเข้าใจผิดว่าวงจรนี้กำลังพังทลายลง",
						"hindi": "तुम्हारी आँखों के सामने एक भ्रम खुलता है। तुम इस भ्रम में पड़ जाते हो कि लूप टूट रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "보이나요? 굴레가 부서지는 모습이. 당신의 과거도, 미래도 바꿀 수 있어요.",
						"english": "Do you see it? The shackles breaking. You can change your past and your future.",
						"japanese": "見えますか？束縛が壊れる様子が。あなたの過去も、未来も変えられます。",
						"chinese": "看到了吗？枷锁正在破碎。你可以改变你的过去，你的未来。",
						"french": "Le voyez-vous ? Les chaînes se briser. Vous pouvez changer votre passé et votre avenir.",
						"spanish": "¿Lo ves? Los grilletes rompiéndose. Puedes cambiar tu pasado y tu futuro.",
						"vietnamese": "Bạn có thấy không? Vòng xiềng đang vỡ tan. Bạn có thể thay đổi quá khứ và tương lai của mình.",
						"thai": "คุณเห็นไหม? โซ่ตรวนกำลังแตกสลาย คุณสามารถเปลี่ยนอดีตและอนาคตของคุณได้",
						"hindi": "क्या तुम्हें दिख रहा है? बंधन टूटते हुए। तुम अपना अतीत और अपना भविष्य बदल सकते हो।"
					},
					"speaker": "vex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…정말 이걸 깰 수 있다고?",
						"english": "...Can you really break this?",
						"japanese": "…本当にこれを壊せるのか？",
						"chinese": "……你真的能打破这个吗？",
						"french": "...Peux-tu vraiment briser cela ?",
						"spanish": "...¿Realmente puedes romper esto?",
						"vietnamese": "...Bạn thực sự có thể phá vỡ điều này sao?",
						"thai": "...คุณทำลายมันได้จริงๆ เหรอ?",
						"hindi": "...क्या तुम वाकई इसे तोड़ सकते हो?"
					}
				},
				{
					"speaker": "vex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당연하죠. 다만, 그 대가를 치를 준비가 되었는지.",
						"english": "Of course. But, are you ready to pay the price?",
						"japanese": "当然です。ただし、その代償を支払う準備ができているかどうか。",
						"chinese": "当然。不过，你准备好付出代价了吗？",
						"french": "Bien sûr. Mais, êtes-vous prêt à en payer le prix ?",
						"spanish": "Por supuesto. Pero, ¿estás preparado para pagar el precio?",
						"vietnamese": "Chắc chắn rồi. Nhưng, bạn đã sẵn sàng trả giá chưa?",
						"thai": "แน่นอนอยู่แล้ว เพียงแต่ คุณพร้อมที่จะจ่ายราคาหรือไม่",
						"hindi": "बेशक। लेकिन, क्या तुम कीमत चुकाने के लिए तैयार हो?"
					}
				},
				{
					"content": {
						"korean": "뭘 바라는 거지?",
						"english": "What do you want?",
						"japanese": "何を望むんだ？",
						"chinese": "你想要什么？",
						"french": "Que voulez-vous ?",
						"spanish": "¿Qué quieres?",
						"vietnamese": "Bạn muốn gì?",
						"thai": "คุณต้องการอะไร?",
						"hindi": "तुम्हें क्या चाहिए?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "(미소) 당신의 모든 고통을 끝내는 것. 그리고… 이 심연의 영원한 평화.",
						"english": "(Smile) To end all your suffering. And... the eternal peace of this abyss.",
						"japanese": "(微笑み) あなたの全ての苦痛を終わらせること。そして…この深淵の永遠の平和を。",
						"chinese": "(微笑) 结束你所有的痛苦。还有……这深渊的永恒和平。",
						"french": "(Sourire) Mettre fin à toutes vos souffrances. Et... la paix éternelle de cet abîme.",
						"spanish": "(Sonrisa) Poner fin a todo tu sufrimiento. Y... la paz eterna de este abismo.",
						"vietnamese": "(Cười) Chấm dứt mọi đau khổ của bạn. Và... sự bình yên vĩnh cửu của vực sâu này.",
						"thai": "(ยิ้ม) การยุติความทุกข์ทั้งหมดของคุณ และ...สันติภาพนิรันดร์ของห้วงเหวนี้",
						"hindi": "(मुस्कान) तुम्हारे सभी कष्टों को समाप्त करना। और... इस अथाह कुंड की शाश्वत शांति।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "vex"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "vex",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거의 다 왔어요. 이 환상의 문을 열면, 모든 것이 끝납니다.",
						"english": "Almost there. Open this door of illusion, and it all ends.",
						"japanese": "もうすぐです。この幻想の扉を開けば、すべてが終わります。",
						"chinese": "快到了。打开这扇幻象之门，一切都将结束。",
						"french": "Nous y sommes presque. Ouvrez cette porte de l'illusion, et tout prendra fin.",
						"spanish": "Casi hemos llegado. Abre esta puerta de la ilusión y todo terminará.",
						"vietnamese": "Gần đến rồi. Mở cánh cửa ảo ảnh này, mọi thứ sẽ kết thúc.",
						"thai": "ใกล้ถึงแล้ว. เปิดประตูแห่งภาพลวงตานี้ แล้วทุกสิ่งจะจบลง.",
						"hindi": "बस पहुंचने ही वाले हैं। इस भ्रम के द्वार को खोलो, और सब कुछ समाप्त हो जाएगा।"
					},
					"speaker": "vex"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이대로 끝나도 되는 건가?",
						"english": "...Is this how it should end?",
						"japanese": "…このままで終わってもいいのか？",
						"chinese": "…就这样结束真的好吗？",
						"french": "...Est-ce que ça peut vraiment se terminer comme ça ?",
						"spanish": "...¿Está bien que termine así?",
						"vietnamese": "...Có nên kết thúc như thế này không?",
						"thai": "...จะจบลงแบบนี้ได้จริงหรือ?",
						"hindi": "...क्या यह ऐसे ही खत्म होना चाहिए?"
					}
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "망설이지 마세요. 당신의 고통은 끝날 겁니다.",
						"english": "Don't hesitate. Your suffering will end.",
						"japanese": "ためらわないでください。あなたの苦痛は終わります。",
						"chinese": "不要犹豫。你的痛苦将结束。",
						"french": "N'hésitez pas. Votre souffrance prendra fin.",
						"spanish": "No dudes. Tu sufrimiento terminará.",
						"vietnamese": "Đừng do dự. Nỗi đau của bạn sẽ kết thúc.",
						"thai": "อย่าลังเล. ความทุกข์ทรมานของคุณจะสิ้นสุดลง.",
						"hindi": "संकोच मत करो। तुम्हारी पीड़ा समाप्त हो जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "달콤한 속삭임에 정신이 아득해진다. 이것이 함정일지도 모른다는 의심은 사라진다.",
						"english": "Sweet whispers cloud my mind. Any suspicion of a trap vanishes.",
						"japanese": "甘いささやきに意識が遠のく。これが罠かもしれないという疑念は消え去る。",
						"chinese": "甜美的低语让我神志不清。这可能是陷阱的疑虑消失了。",
						"french": "Les doux murmures troublent mon esprit. Tout doute que ce soit un piège disparaît.",
						"spanish": "Los dulces susurros nublan mi mente. La sospecha de que esto podría ser una trampa desaparece.",
						"vietnamese": "Những lời thì thầm ngọt ngào làm tâm trí tôi mờ mịt. Mọi nghi ngờ rằng đây có thể là một cái bẫy đều tan biến.",
						"thai": "เสียงกระซิบหวานหูทำให้จิตใจพร่ามัว. ความสงสัยว่านี่อาจเป็นกับดักหายไป.",
						"hindi": "मीठी फुसफुसाहट से मेरा मन धुंधला हो जाता है। यह जाल हो सकता है, यह संदेह गायब हो जाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 루프가 끝나는 곳. 그곳으로 가세요.",
						"english": "The place where all loops end. Go there.",
						"japanese": "すべてのループが終わる場所。そこへ行きなさい。",
						"chinese": "所有循环的终点。去那里吧。",
						"french": "L'endroit où toutes les boucles prennent fin. Allez-y.",
						"spanish": "El lugar donde todos los bucles terminan. Ve allí.",
						"vietnamese": "Nơi mọi vòng lặp kết thúc. Hãy đến đó.",
						"thai": "ที่ที่ทุกวงจรจบลง. จงไปที่นั่น.",
						"hindi": "वह जगह जहाँ सभी लूप समाप्त होते हैं। वहाँ जाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "vex"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 사라지자, 환상은 더욱 짙어졌다.",
						"english": "As the giant shadow vanished, the illusion grew darker.",
						"japanese": "巨大な影が消えると、幻影はさらに濃くなった。",
						"chinese": "随着巨大的影子消失，幻象变得更加浓烈。",
						"french": "Alors que l'ombre gigantesque disparaissait, l'illusion s'épaississait.",
						"spanish": "Cuando la sombra gigante se desvaneció, la ilusión se hizo más densa.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, ảo ảnh càng trở nên đậm đặc hơn.",
						"thai": "เมื่อเงาขนาดยักษ์หายไป ภาพลวงตาก็ยิ่งชัดเจนขึ้น",
						"hindi": "जैसे ही विशाल छाया गायब हुई, भ्रम और गहरा हो गया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아니야. 아직 끝나지 않았어.",
						"english": "...No. It's not over yet.",
						"japanese": "…いや。まだ終わってない。",
						"chinese": "……不。还没有结束。",
						"french": "...Non. Ce n'est pas encore fini.",
						"spanish": "...No. Aún no ha terminado.",
						"vietnamese": "...Không. Vẫn chưa kết thúc.",
						"thai": "...ไม่สิ. ยังไม่จบ",
						"hindi": "...नहीं। यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "크하하… 넌 아무것도 바꿀 수 없어. 그저… 반복될 뿐.",
						"english": "Hahaha... You can't change anything. It will only... repeat.",
						"japanese": "クハハ… お前は何も変えられない。ただ…繰り返されるだけだ。",
						"chinese": "哈哈哈……你什么都改变不了。只会……重复。",
						"french": "Hahaha... Tu ne peux rien changer. Ça ne fera que... se répéter.",
						"spanish": "Jajaja... No puedes cambiar nada. Solo... se repetirá.",
						"vietnamese": "Khà khà... Ngươi không thể thay đổi bất cứ điều gì. Nó sẽ chỉ... lặp lại thôi.",
						"thai": "คิกคิก... เจ้าเปลี่ยนอะไรไม่ได้หรอก มันจะ... ซ้ำรอยเดิมเท่านั้น",
						"hindi": "हाहाहा... तुम कुछ भी नहीं बदल सकते। यह बस... दोहराया जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "(절망)",
						"english": "(Despair)",
						"japanese": "(絶望)",
						"chinese": "(绝望)",
						"french": "(Désespoir)",
						"spanish": "(Desesperación)",
						"vietnamese": "(Tuyệt vọng)",
						"thai": "(สิ้นหวัง)",
						"hindi": "(निराशा)"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "루프는 끊어지지 않았다. 오히려 더 깊은 혼란 속으로 빠져든다.",
						"english": "The loop wasn't broken. Instead, it plunged deeper into chaos.",
						"japanese": "ループは断ち切られなかった。むしろ、より深い混乱へと陥っていく。",
						"chinese": "循环并未中断。反而陷入更深的混乱之中。",
						"french": "La boucle n'était pas brisée. Au contraire, elle plongeait dans un chaos plus profond.",
						"spanish": "El bucle no se rompió. En cambio, se sumergió en un caos más profundo.",
						"vietnamese": "Vòng lặp không bị phá vỡ. Thay vào đó, nó chìm sâu hơn vào hỗn loạn.",
						"thai": "วงวนไม่ขาดลง แต่กลับจมดิ่งลงสู่ความสับสนวุ่นวายที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "लूप टूटा नहीं। बल्कि, यह और गहरे भ्रम में डूब गया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "눈앞에 거대한 그림자가 나타났다. 환상의 심연을 지배하는 존재.",
						"english": "A colossal shadow appeared. The entity ruling the abyss of illusion.",
						"japanese": "目の前に巨大な影が現れた。幻影の深淵を支配する存在。",
						"chinese": "一个巨大的影子出现在眼前。统治幻象深渊的存在。",
						"french": "Une ombre colossale apparut devant mes yeux. L'être qui règne sur l'abîme de l'illusion.",
						"spanish": "Una sombra colosal apareció ante mis ojos. El ser que domina el abismo de la ilusión.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện trước mắt. Thực thể cai trị vực sâu của ảo ảnh.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นตรงหน้า. ผู้ปกครองห้วงลึกแห่งภาพลวงตา.",
						"hindi": "मेरे सामने एक विशाल छाया प्रकट हुई। भ्रम के रसातल पर राज करने वाला प्राणी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간. 벡스의 유혹에 넘어갔군.",
						"english": "Foolish human. You've fallen for Vex's temptation.",
						"japanese": "愚かな人間。ベックスの誘惑に屈したな。",
						"chinese": "愚蠢的人类。你中了威克斯的诱惑。",
						"french": "Stupide humain. Tu as succombé à la tentation de Vex.",
						"spanish": "Humano estúpido. Has caído en la tentación de Vex.",
						"vietnamese": "Con người ngu xuẩn. Ngươi đã sa vào cám dỗ của Vex.",
						"thai": "มนุษย์โง่เขลา. เจ้าหลงกลการยั่วยวนของเว็กซ์.",
						"hindi": "मूर्ख मानव। तुम वेक्स के प्रलोभन में पड़ गए हो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…함정이었나!",
						"english": "...It was a trap!",
						"japanese": "…罠だったのか！",
						"chinese": "…是陷阱！",
						"french": "...C'était un piège !",
						"spanish": "...¡Era una trampa!",
						"vietnamese": "...Là một cái bẫy!",
						"thai": "...เป็นกับดักหรือนี่!",
						"hindi": "...यह एक जाल था!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 환상이 마음에 드나요? 영원히 갇힐 곳이에요.",
						"english": "Do you like this illusion? It's where you'll be trapped forever.",
						"japanese": "この幻想が気に入りましたか？永遠に閉じ込められる場所ですよ。",
						"chinese": "你喜欢这个幻象吗？这是你将永远被困住的地方。",
						"french": "Aimez-vous cette illusion ? C'est l'endroit où vous serez piégé pour l'éternité.",
						"spanish": "¿Te gusta esta ilusión? Es el lugar donde estarás atrapado para siempre.",
						"vietnamese": "Ngươi thích ảo ảnh này không? Đây là nơi ngươi sẽ bị mắc kẹt mãi mãi.",
						"thai": "ชอบภาพลวงตานี้ไหม? นี่คือที่ที่เจ้าจะถูกขังตลอดไป.",
						"hindi": "क्या तुम्हें यह भ्रम पसंद है? यह वह जगह है जहाँ तुम हमेशा के लिए फंसे रहोगे।"
					},
					"speaker": "vex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "벡스!",
						"english": "Vex!",
						"japanese": "ベックス！",
						"chinese": "威克斯！",
						"french": "Vex !",
						"spanish": "¡Vex!",
						"vietnamese": "Vex!",
						"thai": "เว็กซ์!",
						"hindi": "वेक्स!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(웃음) 영원한 평화를 얻는다고 했죠. 이제 저자와 함께.",
						"english": "(Laughs) You said eternal peace. Now, with the author.",
						"japanese": "(笑) 永遠の平和を得ると言ったな。今、著者と共に。",
						"chinese": "(笑) 你说过会得到永恒的平静。现在，与作者一起。",
						"french": "(Rires) Tu as parlé de paix éternelle. Maintenant, avec l'auteur.",
						"spanish": "(Risas) Dijiste paz eterna. Ahora, con el autor.",
						"vietnamese": "(Cười) Ngươi nói sẽ có được sự bình yên vĩnh cửu. Giờ đây, cùng tác giả.",
						"thai": "(หัวเราะ) เจ้าบอกว่าจะได้รับสันติสุขนิรันดร์ ตอนนี้อยู่กับผู้แต่งแล้ว",
						"hindi": "(हंसते हुए) तुमने कहा था अनंत शांति मिलेगी। अब, लेखक के साथ。"
					},
					"speaker": "vex"
				},
				{
					"duration_ms": 300,
					"speaker": "vex",
					"action": "exit",
					"type": "direction"
				},
				{
					"content": {
						"korean": "너는 절대 벗어날 수 없어. 이 심연의 일부가 될 뿐.",
						"english": "You can never escape. You'll only become part of this abyss.",
						"japanese": "決して逃れられない。この深淵の一部となるだけだ。",
						"chinese": "你永远无法逃脱。只会成为这深渊的一部分。",
						"french": "Tu ne pourras jamais t'échapper. Tu ne feras que devenir une partie de cet abîme.",
						"spanish": "Nunca podrás escapar. Solo te convertirás en parte de este abismo.",
						"vietnamese": "Ngươi sẽ không bao giờ thoát ra được. Ngươi sẽ chỉ trở thành một phần của vực thẳm này.",
						"thai": "เจ้าไม่มีทางหนีพ้น เจ้าจะเป็นเพียงส่วนหนึ่งของห้วงเหวนี้",
						"hindi": "तुम कभी नहीं बच पाओगे। बस इस रसातल का हिस्सा बन जाओगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심연의 어둠이 모든 것을 집어삼켰다.",
						"english": "The darkness of the abyss swallowed everything.",
						"japanese": "深淵の闇がすべてを飲み込んだ。",
						"chinese": "深渊的黑暗吞噬了一切。",
						"french": "L'obscurité de l'abîme a tout englouti.",
						"spanish": "La oscuridad del abismo lo devoró todo.",
						"vietnamese": "Bóng tối của vực thẳm nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดของห้วงเหวกลืนกินทุกสิ่ง",
						"hindi": "रसातल के अंधकार ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "가련한 영혼. 아직 멀었군.",
						"english": "Pitiful soul. You're not ready yet.",
						"japanese": "哀れな魂よ。まだ遠いな。",
						"chinese": "可怜的灵魂。还差得远呢。",
						"french": "Âme pitoyable. Tu n'es pas encore prêt.",
						"spanish": "Alma lamentable. Aún te falta mucho.",
						"vietnamese": "Linh hồn đáng thương. Ngươi vẫn còn kém lắm.",
						"thai": "วิญญาณที่น่าสงสาร เจ้ายังห่างไกลนัก",
						"hindi": "दयनीय आत्मा। अभी तुम्हें बहुत कुछ सीखना है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…나는, 포기하지 않아!",
						"english": "...I won't give up!",
						"japanese": "…私は、諦めない！",
						"chinese": "……我，不会放弃！",
						"french": "...Je n'abandonnerai pas !",
						"spanish": "...¡Yo no me rindo!",
						"vietnamese": "...Ta sẽ không bỏ cuộc!",
						"thai": "...ฉันจะไม่ยอมแพ้!",
						"hindi": "...मैं हार नहीं मानूंगा!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"심연은 거짓된 희망으로 가득했다.",
			"벗어날 수 있다는 속삭임은 달콤한 독.",
			"환상은 진실을 감추고, 절망은 더 깊숙이 파고든다.",
			"이곳은, 환상의 감옥이었다."
		],
		"english": [
			"The abyss was filled with false hope.",
			"The whispers of escape were sweet poison.",
			"Illusions hid the truth, and despair dug deeper.",
			"This was a prison of illusions."
		],
		"japanese": [
			"深淵は偽りの希望に満ちていた。",
			"逃れられるという囁きは甘い毒だった。",
			"幻想は真実を隠し、絶望はより深く食い込む。",
			"ここは、幻想の監獄だった。"
		],
		"chinese": [
			"深渊充满了虚假的希望。",
			"逃离的耳语是甜蜜的毒药。",
			"幻想掩盖了真相，绝望则深入骨髓。",
			"这里是幻想的牢笼。"
		],
		"french": [
			"L'abîme était rempli de faux espoirs.",
			"Les murmures de l'évasion étaient un doux poison.",
			"Les illusions cachaient la vérité, le désespoir s'enfonçait plus profondément.",
			"C'était une prison d'illusions."
		],
		"spanish": [
			"El abismo estaba lleno de falsas esperanzas.",
			"Los susurros de escape eran un dulce veneno.",
			"Las ilusiones ocultaban la verdad, y la desesperación se clavaba más hondo.",
			"Esto era una prisión de ilusiones."
		],
		"vietnamese": [
			"Vực thẳm tràn ngập những hy vọng giả dối.",
			"Lời thì thầm trốn thoát là thứ độc dược ngọt ngào.",
			"Ảo ảnh che giấu sự thật, tuyệt vọng đào sâu hơn.",
			"Nơi đây là ngục tù của ảo ảnh."
		],
		"thai": [
			"ห้วงเหวเต็มไปด้วยความหวังจอมปลอม",
			"เสียงกระซิบของการหลบหนีเป็นยาพิษอันหอมหวาน",
			"ภาพลวงตาซ่อนความจริง และความสิ้นหวังก็ดำดิ่งลึกลงไป",
			"ที่นี่คือคุกแห่งภาพลวงตา"
		],
		"hindi": [
			"रसातल झूठी आशाओं से भरा था।",
			"बचने की फुसफुसाहट मीठा ज़हर थी।",
			"भ्रम ने सच छुपाया, और निराशा और गहरी होती गई।",
			"यह भ्रमों का कारागार था।"
		]
	}
} as const;
