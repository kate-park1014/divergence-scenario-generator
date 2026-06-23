export const scenario_snowy_screamveil_42_04 = {
	"scenario_id": "snowy_screamveil_42_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"혹한의 설원, 의심의 서리가 마음을 파고든다.",
			"믿었던 길잡이의 푸른 빛은 어둠을 드리우고.",
			"파편화된 기억들은 죄책감의 비명이 되어 돌아온다.",
			"과거의 그림자가 현재를 덮치고, 얼어붙은 진실이 기다린다."
		],
		"english": [
			"The bitter snowfield, frost of doubt gnaws at the heart.",
			"The trusted guide's blue light casts shadows.",
			"Fragmented memories return as screams of guilt.",
			"Shadows of the past engulf the present, and a frozen truth awaits."
		],
		"japanese": [
			"酷寒の雪原、疑念の霜が心を蝕む。",
			"信じた道標の青い光は闇を落とす。",
			"断片化された記憶は罪悪感の叫びとなって戻る。",
			"過去の影が現在を覆い、凍てついた真実が待つ。"
		],
		"chinese": [
			"严寒的雪原，怀疑的寒霜侵蚀着内心。",
			"曾信任的向导的蓝光投下阴影。",
			"支离破碎的记忆化作罪恶感的尖叫回归。",
			"过去的阴影笼罩现在，冰封的真相正在等待。"
		],
		"french": [
			"Dans le champ de neige glacial, le givre du doute ronge le cœur.",
			"La lumière bleue du guide de confiance projette des ombres.",
			"Les souvenirs fragmentés reviennent comme des cris de culpabilité.",
			"Les ombres du passé engloutissent le présent, et une vérité gelée attend."
		],
		"spanish": [
			"El páramo helado, la escarcha de la duda corroe el corazón.",
			"La luz azul del guía de confianza proyecta sombras.",
			"Los recuerdos fragmentados regresan como gritos de culpa.",
			"Las sombras del pasado envuelven el presente, y una verdad congelada aguarda."
		],
		"vietnamese": [
			"Cánh đồng tuyết giá rét, sương giá nghi ngờ gặm nhấm trái tim.",
			"Ánh sáng xanh của người dẫn đường đáng tin cậy phủ bóng tối.",
			"Những ký ức vụn vỡ trở về như tiếng thét của sự tội lỗi.",
			"Bóng tối quá khứ bao trùm hiện tại, và một sự thật đóng băng đang chờ đợi."
		],
		"thai": [
			"ทุ่งหิมะอันโหดร้าย เกล็ดน้ำแข็งแห่งความสงสัยกัดกินหัวใจ",
			"แสงสีน้ำเงินของผู้นำทางที่ไว้ใจกลับทอดเงา",
			"ความทรงจำที่แตกสลายย้อนกลับมาเป็นเสียงกรีดร้องของความรู้สึกผิด",
			"เงาอดีตปกคลุมปัจจุบัน และความจริงที่ถูกแช่แข็งกำลังรออยู่"
		],
		"hindi": [
			"कठोर बर्फीले मैदान, संदेह की पाला दिल को खाए जा रही है।",
			"विश्वसनीय मार्गदर्शक की नीली रोशनी अंधेरा कर देती है।",
			"खंडित यादें अपराधबोध की चीख बनकर लौट आती हैं।",
			"अतीत की छायाएँ वर्तमान को घेर लेती हैं, और एक जमी हुई सच्चाई इंतजार कर रही है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "혹한의 설원. 침묵만이 모든 것을 얼어붙게 했다.",
						"english": "The bitter snowfield. Only silence froze everything.",
						"japanese": "酷寒の雪原。沈黙だけが全てを凍らせた。",
						"chinese": "严寒的雪原。只有沉默将一切冻结。",
						"french": "Le champ de neige glacial. Seul le silence a tout gelé.",
						"spanish": "El páramo helado. Solo el silencio lo congeló todo.",
						"vietnamese": "Cánh đồng tuyết giá rét. Chỉ có sự im lặng đóng băng mọi thứ.",
						"thai": "ทุ่งหิมะอันโหดร้าย มีเพียงความเงียบงันที่ทำให้ทุกสิ่งแข็งตัว",
						"hindi": "कठोर बर्फीले मैदान। केवल खामोशी ने सब कुछ जमा दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "에이라… 그녀, 이상해. 너무 침착해.",
						"english": "Aira... she's strange. Too calm.",
						"japanese": "アイラ…彼女、おかしい。冷静すぎる。",
						"chinese": "艾拉…她很奇怪。太冷静了。",
						"french": "Aira... elle est étrange. Trop calme.",
						"spanish": "Aira... ella es extraña. Demasiado tranquila.",
						"vietnamese": "Aira... cô ấy lạ thật. Quá bình tĩnh.",
						"thai": "ไอรา... เธอแปลกไป สงบเกินไป",
						"hindi": "आयरा... वह अजीब है। बहुत शांत है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…무슨 말을 하는 거야.",
						"english": "...What are you talking about?",
						"japanese": "…何を言ってるんだ。",
						"chinese": "…你在说什么。",
						"french": "...De quoi parles-tu ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Bạn đang nói gì vậy.",
						"thai": "...คุณกำลังพูดถึงอะไร",
						"hindi": "...तुम क्या कह रहे हो।"
					}
				},
				{
					"content": {
						"korean": "아니야. 뭔가 숨기고 있어. …분명해.",
						"english": "No. She's hiding something. ...It's clear.",
						"japanese": "違う。何か隠している。…間違いない。",
						"chinese": "不。她在隐瞒什么。…很明显。",
						"french": "Non. Elle cache quelque chose. ...C'est évident.",
						"spanish": "No. Está escondiendo algo. ...Es evidente.",
						"vietnamese": "Không. Cô ấy đang giấu điều gì đó. ...Rõ ràng là vậy.",
						"thai": "ไม่ เธอซ่อนบางอย่างอยู่ ...ชัดเจนเลย",
						"hindi": "नहीं। वह कुछ छिपा रही है। ...यह स्पष्ट है।"
					},
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 동료들을 봤어? 에이라가 나타난 뒤로… 더 자주.",
						"english": "Did you see our frozen comrades? Since Aira appeared... more often.",
						"japanese": "凍りついた仲間たちを見たか？アイラが現れてから…もっと頻繁に。",
						"chinese": "你看到那些被冻住的同伴了吗？艾拉出现后…更频繁了。",
						"french": "As-tu vu nos camarades gelés ? Depuis l'apparition d'Aira... plus souvent.",
						"spanish": "¿Viste a nuestros compañeros congelados? Desde que apareció Aira... más a menudo.",
						"vietnamese": "Bạn có thấy những đồng đội bị đóng băng không? Kể từ khi Aira xuất hiện... thường xuyên hơn.",
						"thai": "เห็นเพื่อนร่วมทีมที่แข็งตายไหม? ตั้งแต่ไอราปรากฏตัว... บ่อยขึ้น",
						"hindi": "क्या तुमने हमारे जमे हुए साथियों को देखा? आयरा के आने के बाद से... और भी ज़्यादा।"
					},
					"speaker": "finn",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그건… 내 기억이잖아.",
						"english": "That's... my memory.",
						"japanese": "それは…俺の記憶だろ。",
						"chinese": "那是…我的记忆啊。",
						"french": "C'est... mon souvenir.",
						"spanish": "Eso es... mi recuerdo.",
						"vietnamese": "Đó là... ký ức của tôi mà.",
						"thai": "นั่นมัน... ความทรงจำของฉันนี่นา",
						"hindi": "वह... मेरी याददाश्त है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"emotion": "angry",
					"content": {
						"korean": "아니. 이 눈보라가… 과거를 되살리고 있어. 진실을 보라고.",
						"english": "No. This blizzard… it's bringing back the past. See the truth.",
						"japanese": "いや。この吹雪が…過去を呼び覚ましている。真実を見ろ。",
						"chinese": "不。这场暴风雪…正在唤醒过去。看清真相。",
						"french": "Non. Ce blizzard… ranime le passé. Regarde la vérité.",
						"spanish": "No. Esta ventisca… está reviviendo el pasado. Mira la verdad.",
						"vietnamese": "Không. Cơn bão tuyết này… đang gợi lại quá khứ. Hãy nhìn ra sự thật.",
						"thai": "ไม่. พายุหิมะนี้… กำลังนำอดีตกลับมา เห็นความจริงซะ.",
						"hindi": "नहीं। यह बर्फीला तूफ़ान… अतीत को वापस ला रहा है। सच देखो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…진실?",
						"english": "…Truth?",
						"japanese": "…真実？",
						"chinese": "…真相？",
						"french": "…La vérité ?",
						"spanish": "…¿Verdad?",
						"vietnamese": "…Sự thật ư?",
						"thai": "…ความจริง?",
						"hindi": "…सच?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"emotion": "angry",
					"content": {
						"korean": "믿지 마! 그녀의 푸른 빛은… 죽음의 유혹이야!",
						"english": "Don't believe it! Her blue light is… the temptation of death!",
						"japanese": "信じるな！彼女の青い光は…死の誘惑だ！",
						"chinese": "别相信！她的蓝光是…死亡的诱惑！",
						"french": "Ne le crois pas ! Sa lumière bleue est… la tentation de la mort !",
						"spanish": "¡No lo creas! Su luz azul es… ¡la tentación de la muerte!",
						"vietnamese": "Đừng tin! Ánh sáng xanh của cô ta là… cám dỗ của cái chết!",
						"thai": "อย่าเชื่อ! แสงสีน้ำเงินของนางคือ… คำล่อลวงแห่งความตาย!",
						"hindi": "विश्वास मत करो! उसकी नीली रोशनी… मौत का प्रलोभन है!"
					}
				},
				{
					"content": {
						"korean": "…아니야… 그럴 리 없어… (멀리서 들려오는 절규가 귓가를 맴돈다.)",
						"english": "…No… It can't be… (A distant scream echoes in my ears.)",
						"japanese": "…違う…そんなはずない…（遠くから聞こえる絶叫が耳元を맴どる。）",
						"chinese": "…不…不可能…（远处传来的尖叫声在我耳边回荡。）",
						"french": "…Non… Ce n'est pas possible… (Un hurlement lointain résonne à mes oreilles.)",
						"spanish": "…No… No puede ser… (Un grito lejano resuena en mis oídos.)",
						"vietnamese": "…Không… Không thể nào… (Tiếng kêu gào từ xa văng vẳng bên tai.)",
						"thai": "…ไม่จริง… ไม่มีทางเป็นไปได้… (เสียงกรีดร้องจากที่ไกลๆ ก้องอยู่ในหู.)",
						"hindi": "…नहीं… ऐसा नहीं हो सकता… (दूर से आती चीखें कानों में गूंजती हैं।)"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봤지? 얼음 벽에 비친 네 그림자가… (차가운 얼음 벽에 비친 자신의 모습이 순간 일그러져 다른 이의 그림자로 겹쳐 보인다.)",
						"english": "See? Your shadow on the ice wall… (My reflection on the cold ice wall distorts for a moment, overlapping with another's shadow.)",
						"japanese": "見ただろ？氷壁に映るお前の影が…（冷たい氷壁に映る自分の姿が、一瞬歪んで他者の影と重なって見える。）",
						"chinese": "看到了吗？冰墙上你的影子…（自己映照在冰冷的冰墙上的身影瞬间扭曲，与另一个人的影子重叠。）",
						"french": "Tu vois ? Ton ombre sur le mur de glace… (Mon reflet sur le froid mur de glace se déforme un instant, se superposant à l'ombre d'un autre.)",
						"spanish": "¿Ves? Tu sombra en la pared de hielo… (Mi reflejo en la fría pared de hielo se distorsiona por un momento, superponiéndose con la sombra de otro.)",
						"vietnamese": "Thấy chứ? Bóng của ngươi trên bức tường băng… (Bóng mình trên bức tường băng lạnh lẽo chợt biến dạng, chồng lên bóng của người khác.)",
						"thai": "เห็นไหม? เงาของเจ้าบนกำแพงน้ำแข็ง… (ภาพสะท้อนของตัวเองบนกำแพงน้ำแข็งอันเย็นยะเยือกบิดเบี้ยวไปชั่วขณะ กลายเป็นเงาของผู้อื่น.)",
						"hindi": "देखा? बर्फ की दीवार पर तुम्हारी परछाई… (बर्फ की ठंडी दीवार पर मेरा प्रतिबिंब क्षण भर के लिए विकृत हो जाता है, दूसरे की परछाई के साथ ओवरलैप हो जाता है।)"
					},
					"speaker": "finn",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "내… 내가 뭘 잘못한 거지…?",
						"english": "What… what did I do wrong…?",
						"japanese": "私…私が何を間違えたというんだ…？",
						"chinese": "我…我做错了什么…？",
						"french": "Qu'ai-je… qu'ai-je fait de mal… ?",
						"spanish": "¿Qué… qué hice mal…?",
						"vietnamese": "Tôi… tôi đã làm gì sai ư…?",
						"thai": "ฉัน… ฉันทำอะไรผิดไป… ?",
						"hindi": "मैंने… मैंने क्या गलत किया…?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 안 돼! 가면 안 돼…! 그 진실은… 널 망가뜨릴 거야!",
						"english": "No more! Don't go…! That truth will… destroy you!",
						"japanese": "もうこれ以上はだめだ！行ってはいけない…！その真実は…お前を壊すだろう！",
						"chinese": "不行了！不能去…！那个真相会…毁了你！",
						"french": "Plus maintenant ! N'y va pas… ! Cette vérité va… te détruire !",
						"spanish": "¡No más! ¡No vayas…! ¡Esa verdad te… destruirá!",
						"vietnamese": "Không được nữa! Đừng đi…! Sự thật đó sẽ… hủy hoại ngươi!",
						"thai": "ไม่ได้อีกแล้ว! อย่าไปนะ…! ความจริงนั้นจะ… ทำลายเจ้า!",
						"hindi": "और नहीं! मत जाओ…! वह सच… तुम्हें तबाह कर देगा!"
					},
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…그때… 부적이… 어둡게 변했어… 내 손에서…",
						"english": "…Then… the amulet… turned dark… in my hand…",
						"japanese": "…あの時…お守りが…暗く変わった…私の手の中で…",
						"chinese": "…那时…护符…变暗了…在我手中…",
						"french": "…Alors… l'amulette… a noirci… dans ma main…",
						"spanish": "…Entonces… el amuleto… se oscureció… en mi mano…",
						"vietnamese": "…Khi đó… bùa hộ mệnh… đã biến thành tối sẫm… trong tay tôi…",
						"thai": "…ตอนนั้น… เครื่องราง… มันเปลี่ยนเป็นสีดำ… ในมือฉัน…",
						"hindi": "…तब… ताबीज़… मेरे हाथ में… काला पड़ गया…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "내가… 내가 동료들을…!",
						"english": "I… I hurt my comrades…!",
						"japanese": "私が…私が仲間たちを…！",
						"chinese": "我…我害了同伴们…！",
						"french": "J'ai… j'ai blessé mes compagnons… !",
						"spanish": "Yo… ¡yo hice daño a mis compañeros…!",
						"vietnamese": "Tôi… tôi đã làm hại đồng đội…!",
						"thai": "ฉัน… ฉันทำให้เพื่อนร่วมทีม…!",
						"hindi": "मैंने… मैंने अपने साथियों को…!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "너무 늦었어… 이미 시작됐어.",
						"english": "It's too late… It has already begun.",
						"japanese": "もう遅い…すでに始まっている。",
						"chinese": "太迟了…已经开始了。",
						"french": "C'est trop tard… C'est déjà commencé.",
						"spanish": "Es demasiado tarde… Ya ha empezado.",
						"vietnamese": "Quá muộn rồi… Đã bắt đầu rồi.",
						"thai": "สายเกินไปแล้ว… มันเริ่มขึ้นแล้ว.",
						"hindi": "बहुत देर हो चुकी है… यह पहले ही शुरू हो चुका है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아니. 멈춰야 해.",
						"english": "No. I must stop.",
						"japanese": "いいえ。止めなければ。",
						"chinese": "不。我必须停下。",
						"french": "Non. Je dois arrêter.",
						"spanish": "No. Debo detenerme.",
						"vietnamese": "Không. Tôi phải dừng lại.",
						"thai": "ไม่สิ ฉันต้องหยุด",
						"hindi": "नहीं। मुझे रुकना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 손아귀가 모든 것을 덮쳤다.",
						"english": "The frozen grasp consumed everything.",
						"japanese": "凍てつく掌握がすべてを覆った。",
						"chinese": "冰冷的手掌握住了所有。",
						"french": "L'emprise glaciale a tout englouti.",
						"spanish": "La garra helada lo cubrió todo.",
						"vietnamese": "Bàn tay đóng băng đã bao trùm mọi thứ.",
						"thai": "เงื้อมมือที่เยือกแข็งปกคลุมทุกสิ่ง",
						"hindi": "जमी हुई पकड़ ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "네가 저지른 죄는… 영원히 널 묶을 것이다.",
						"english": "The sin you committed… will bind you forever.",
						"japanese": "お前が犯した罪は…永遠にお前を縛るだろう。",
						"chinese": "你所犯的罪…将永远束缚你。",
						"french": "Le péché que tu as commis… te liera pour l'éternité.",
						"spanish": "El pecado que cometiste… te atará para siempre.",
						"vietnamese": "Tội lỗi ngươi đã gây ra… sẽ trói buộc ngươi mãi mãi.",
						"thai": "บาปที่คุณได้ก่อไว้... จะผูกมัดคุณตลอดไป",
						"hindi": "जो पाप तुमने किया… वह तुम्हें हमेशा के लिए बांध देगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 아니야. 나는… 멈추지 않아.",
						"english": "Not yet… I won't stop.",
						"japanese": "まだ…だめだ。私は…止まらない。",
						"chinese": "还没…不。我不会停下。",
						"french": "Pas encore… Je ne m'arrêterai pas.",
						"spanish": "Todavía no… No me detendré.",
						"vietnamese": "Chưa… không. Ta sẽ không dừng lại.",
						"thai": "ยัง… ไม่ใช่ ฉัน… จะไม่หยุด",
						"hindi": "अभी तक… नहीं। मैं नहीं रुकूंगा।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "심연의 얼음 동굴. 과거의 그림자가 살아 숨 쉬는 곳.",
						"english": "The Abyssal Ice Cave. Where shadows of the past breathe.",
						"japanese": "深淵の氷の洞窟。過去の影が息づく場所。",
						"chinese": "深渊冰洞。过去之影在此呼吸。",
						"french": "La Caverne de Glace Abyssale. Où les ombres du passé respirent.",
						"spanish": "La Cueva de Hielo Abisal. Donde las sombras del pasado respiran.",
						"vietnamese": "Hang băng vực thẳm. Nơi những bóng ma quá khứ vẫn còn sống.",
						"thai": "ถ้ำน้ำแข็งแห่งห้วงลึก. ที่ซึ่งเงาของอดีตยังมีชีวิต.",
						"hindi": "अथाह बर्फीली गुफा। जहाँ अतीत की परछाइयाँ साँस लेती हैं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"emotion": "angry",
					"content": {
						"korean": "가지 마…! 이건 함정이야…! 네 죄책감을 노리고 있어!",
						"english": "Don't go...! It's a trap...! It's preying on your guilt!",
						"japanese": "行かないで…！罠よ…！あなたの罪悪感を狙っている！",
						"chinese": "别去……！这是陷阱……！它正利用你的罪恶感！",
						"french": "N'y va pas…! C'est un piège…! Il vise ta culpabilité !",
						"spanish": "¡No vayas...! ¡Es una trampa...! ¡Está atacando tu culpa!",
						"vietnamese": "Đừng đi...! Đó là một cái bẫy...! Nó đang lợi dụng cảm giác tội lỗi của ngươi!",
						"thai": "อย่าไปนะ...! มันคือกับดัก...! มันกำลังจ้องเล่นงานความรู้สึกผิดของเธอ!",
						"hindi": "मत जाओ...! यह एक जाल है...! यह तुम्हारे अपराधबोध का फायदा उठा रहा है!"
					}
				},
				{
					"action": "enter",
					"spot": [
						5,
						8
					],
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "거대한 그림자가 모습을 드러냈다.",
						"english": "A colossal shadow revealed itself.",
						"japanese": "巨大な影が姿を現した。",
						"chinese": "巨大的身影显现了。",
						"french": "Une ombre colossale s'est révélée.",
						"spanish": "Una sombra colosal se reveló.",
						"vietnamese": "Một cái bóng khổng lồ đã xuất hiện.",
						"thai": "เงาร่างมหึมาปรากฏขึ้น.",
						"hindi": "एक विशाल परछाई प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 인간. 네 죄책감의 무게를 감당할 수 있겠나?",
						"english": "Insignificant human. Can you bear the weight of your guilt?",
						"japanese": "くだらぬ人間よ。貴様の罪悪感の重さに耐えられるか？",
						"chinese": "卑微的人类。你能承受你罪恶感的重量吗？",
						"french": "Humain insignifiant. Peux-tu supporter le poids de ta culpabilité ?",
						"spanish": "Humano insignificante. ¿Puedes soportar el peso de tu culpa?",
						"vietnamese": "Con người nhỏ bé. Ngươi có thể gánh chịu sức nặng của tội lỗi mình không?",
						"thai": "มนุษย์ผู้ไร้ค่า. เจ้าแบกรับน้ำหนักแห่งความรู้สึกผิดของตนเองได้หรือ?",
						"hindi": "तुच्छ मानव। क्या तुम अपने अपराधबोध का बोझ सह सकते हो?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐. 내 죄는 내가 짊어져.",
						"english": "Shut up. I'll bear my own sins.",
						"japanese": "黙れ。私の罪は私が背負う。",
						"chinese": "闭嘴。我的罪孽我自己承担。",
						"french": "Tais-toi. Je porterai mes propres péchés.",
						"spanish": "Cállate. Yo cargaré con mis propios pecados.",
						"vietnamese": "Im đi. Tội lỗi của ta, ta sẽ gánh chịu.",
						"thai": "หุบปากซะ. บาปของฉัน ฉันจะแบกรับเอง.",
						"hindi": "चुप रहो। मैं अपने पाप स्वयं वहन करूँगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…조심해…!",
						"english": "...Be careful...!",
						"japanese": "…気をつけて…！",
						"chinese": "……小心……！",
						"french": "...Fais attention...!",
						"spanish": "...¡Ten cuidado...!",
						"vietnamese": "...Cẩn thận...!",
						"thai": "...ระวังนะ...!",
						"hindi": "...सावधान रहो...!"
					},
					"speaker": "finn",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"speaker": "finn",
					"action": "exit",
					"type": "direction",
					"direction": "down"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "흥… 발버둥 쳐 보시지.",
						"english": "Hmph... Struggle all you want.",
						"japanese": "ふん…足掻いてみせろ。",
						"chinese": "哼……挣扎吧。",
						"french": "Hmm... Lutte tant que tu veux.",
						"spanish": "Hmpf... Intenta resistirte.",
						"vietnamese": "Hừm... Cứ giãy giụa đi.",
						"thai": "หึ... ดิ้นรนไปเถอะ.",
						"hindi": "हँ... छटपटा लो जितना चाहो।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 얼음처럼 부서졌다.",
						"english": "The colossal shadow shattered like ice.",
						"japanese": "巨大な影が氷のように砕け散った。",
						"chinese": "巨大的身影如冰般破碎了。",
						"french": "L'ombre colossale s'est brisée comme de la glace.",
						"spanish": "La sombra colosal se hizo añicos como el hielo.",
						"vietnamese": "Cái bóng khổng lồ vỡ tan như băng.",
						"thai": "เงาร่างมหึมาแตกสลายราวกับน้ำแข็ง.",
						"hindi": "विशाल परछाई बर्फ की तरह टूट गई।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…겨우 이것으로… 과거가 지워질 줄 아나…?",
						"english": "...Do you think this alone... can erase the past...?",
						"japanese": "…たかだかこれしきで…過去が消えるとでも…？",
						"chinese": "……仅凭这个……就以为能抹去过去吗……？",
						"french": "…Penses-tu que cela seul… peut effacer le passé…?",
						"spanish": "¿Crees que con esto solo... el pasado se borrará...?",
						"vietnamese": "...Ngươi nghĩ chỉ vậy thôi... là có thể xóa bỏ quá khứ sao...?",
						"thai": "...แค่เพียงเท่านี้...คิดว่าจะลบล้างอดีตได้หรือ...?",
						"hindi": "...क्या तुम्हें लगता है कि सिर्फ इससे... अतीत मिट जाएगा...?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아니. 지울 수 없어. 하지만… 멈출 수 있어.",
						"english": "No. I can't erase it. But… I can stop it.",
						"japanese": "いや。消すことはできない。だが…止めることはできる。",
						"chinese": "不。无法抹去。但是…可以阻止它。",
						"french": "Non. Je ne peux pas l'effacer. Mais… je peux l'arrêter.",
						"spanish": "No. No puedo borrarlo. Pero… puedo detenerlo.",
						"vietnamese": "Không. Không thể xóa bỏ. Nhưng… có thể ngăn chặn.",
						"thai": "ไม่ ไม่สามารถลบมันได้ แต่... สามารถหยุดมันได้",
						"hindi": "नहीं। मैं इसे मिटा नहीं सकता। लेकिन… मैं इसे रोक सकता हूँ।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "끝났어… 하지만… 진짜는 이제부터야.",
						"english": "It's over… but… the real challenge starts now.",
						"japanese": "終わった…だが…本当の戦いはこれからだ。",
						"chinese": "结束了…但是…真正的挑战才刚刚开始。",
						"french": "C'est fini… mais… le vrai défi commence maintenant.",
						"spanish": "Se acabó… pero… lo verdadero empieza ahora.",
						"vietnamese": "Kết thúc rồi… nhưng… điều thật sự chỉ mới bắt đầu.",
						"thai": "จบแล้ว... แต่... ของจริงเพิ่งจะเริ่ม",
						"hindi": "यह खत्म हो गया… लेकिन… असली खेल अब शुरू होता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "눈보라는 잠시 잦아들었지만, 마음속 의심의 서리는 더욱 깊어졌다. 진정한 시험은 아직 오지 않았다.",
						"english": "The blizzard briefly subsided, but the frost of doubt in my heart deepened. The true trial has yet to come.",
						"japanese": "吹雪は一時的に収まったが、心中の疑念の霜はさらに深まった。真の試練はまだ来ていない。",
						"chinese": "暴风雪暂时平息，但内心疑虑的寒霜却更加深重。真正的考验尚未到来。",
						"french": "Le blizzard s'est brièvement calmé, mais le givre du doute dans mon cœur s'est approfondi. La véritable épreuve n'est pas encore venue.",
						"spanish": "La ventisca amainó brevemente, pero la escarcha de la duda en mi corazón se hizo más profunda. La verdadera prueba aún no ha llegado.",
						"vietnamese": "Bão tuyết tạm lắng xuống, nhưng sương giá nghi ngờ trong lòng càng thêm sâu sắc. Thử thách thực sự vẫn chưa đến.",
						"thai": "พายุหิมะสงบลงชั่วคราว แต่ความกังวลในใจกลับลึกซึ้งยิ่งขึ้น บททดสอบที่แท้จริงยังมาไม่ถึง",
						"hindi": "बर्फ़ीला तूफ़ान कुछ देर के लिए थम गया, लेकिन मेरे दिल में संदेह की ठंड और गहरी हो गई। असली परीक्षा अभी बाकी है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
