export const scenario_hell_kismet_5_01 = {
	"scenario_id": "hell_kismet_5_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"pyre": {
			"id": "mon_096a199b-d878-4daf-ab59-8a5fc3c32a37",
			"name": {
				"korean": "화염",
				"english": "Pyre",
				"japanese": "炎",
				"chinese": "烈焰",
				"french": "Bûcher",
				"spanish": "Pira",
				"vietnamese": "Hỏa đài",
				"thai": "เชิงตะกอน",
				"hindi": "चिता"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d9f42f57-c664-48aa-b280-498d0f92a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/3d10334d-d2d4-441b-14bd-cd9fba035800/public"
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
					"content": {
						"korean": "끝없는 검은 실타래가 눈앞을 가렸다. 지옥의 심연이었다.",
						"english": "Endless black threads obscured our view. It was the abyss of hell.",
						"japanese": "無限の黒い糸玉が視界を遮った。それは地獄の深淵だった。",
						"chinese": "无尽的黑色线团遮蔽了视线。那是地狱的深渊。",
						"french": "Des fils noirs infinis masquaient la vue. C'était l'abysse de l'enfer.",
						"spanish": "Hilos negros interminables ocultaban la vista. Era el abismo del infierno.",
						"vietnamese": "Cuộn chỉ đen vô tận che khuất tầm nhìn. Đó là vực sâu địa ngục.",
						"thai": "เส้นด้ายสีดำอันไม่สิ้นสุดบดบังสายตา มันคือขุมนรก",
						"hindi": "अंतहीन काले धागों ने हमारी दृष्टि को अवरुद्ध कर दिया। यह नरक की खाई थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 직조자가 있는 곳?",
						"english": "Is this... where the Weaver is?",
						"japanese": "ここが… 織り手のいる場所か？",
						"chinese": "这里是…织工所在的地方吗？",
						"french": "Est-ce ici... l'emplacement du Tisserand ?",
						"spanish": "¿Es aquí... donde está el Tejedor?",
						"vietnamese": "Đây là… nơi Thợ dệt ở sao?",
						"thai": "ที่นี่... คือที่ที่จอมทอผ้าอยู่หรือ?",
						"hindi": "क्या यह... बुनकर का स्थान है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "pyre",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그래. 저 실을 봐. 죽은 자들의 비명이 담겨 있지.",
						"english": "Yes. Look at those threads. They hold the screams of the dead.",
						"japanese": "ああ。あの糸を見てみろ。死者たちの悲鳴が込められている。",
						"chinese": "是的。看那些线。它们蕴含着死者的尖叫。",
						"french": "Oui. Regarde ces fils. Ils contiennent les cris des morts.",
						"spanish": "Sí. Mira esos hilos. Contienen los gritos de los muertos.",
						"vietnamese": "Phải. Nhìn những sợi chỉ đó đi. Chúng chứa đựng tiếng gào thét của người chết.",
						"thai": "ใช่แล้ว. ดูเส้นด้ายเหล่านั้นสิ. พวกมันมีเสียงกรีดร้องของผู้ตายอยู่",
						"hindi": "हाँ। उन धागों को देखो। उनमें मृतकों की चीखें समाई हुई हैं।"
					},
					"speaker": "pyre"
				},
				{
					"speaker": "pyre",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우린 저 운명의 진실을 밝혀야 해.",
						"english": "We must uncover the truth of that fate.",
						"japanese": "我々はあの運命の真実を明らかにしなければならない。",
						"chinese": "我们必须揭示那个命运的真相。",
						"french": "Nous devons découvrir la vérité de ce destin.",
						"spanish": "Debemos descubrir la verdad de ese destino.",
						"vietnamese": "Chúng ta phải hé lộ sự thật của vận mệnh đó.",
						"thai": "เราต้องเปิดเผยความจริงของโชคชะตานั้น",
						"hindi": "हमें उस भाग्य के सत्य को उजागर करना होगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "pyre",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 실타래… 자세히 봐.",
						"english": "These threads... look closely.",
						"japanese": "この糸玉… 詳しく見てみろ。",
						"chinese": "这些线团…仔细看。",
						"french": "Ces fils... regarde attentivement.",
						"spanish": "Estos hilos... mira de cerca.",
						"vietnamese": "Cuộn chỉ này… nhìn kỹ đi.",
						"thai": "เส้นด้ายพวกนี้... ดูให้ดี",
						"hindi": "ये धागे... ध्यान से देखो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐가 보여?",
						"english": "What do you see?",
						"japanese": "何が見える？",
						"chinese": "你看到了什么？",
						"french": "Que vois-tu ?",
						"spanish": "¿Qué ves?",
						"vietnamese": "Ngươi thấy gì?",
						"thai": "เห็นอะไรบ้าง?",
						"hindi": "तुम्हें क्या दिखता है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아직 일어나지 않은, 너희의 미래가… 비치고 있어.",
						"english": "Your future, yet to unfold, is being reflected.",
						"japanese": "まだ起こっていない、君たちの未来が…映っている。",
						"chinese": "尚未发生的，你们的未来…正在映照。",
						"french": "Votre futur, qui n'est pas encore arrivé… est en train de se refléter.",
						"spanish": "Vuestro futuro, el que aún no ha ocurrido… se está reflejando.",
						"vietnamese": "Tương lai của các ngươi, điều chưa xảy ra… đang phản chiếu.",
						"thai": "อนาคตของพวกเจ้าที่ยังไม่เกิดขึ้น… กำลังฉายภาพอยู่",
						"hindi": "तुम्हारा भविष्य, जो अभी तक हुआ नहीं… प्रतिध्वनित हो रहा है。"
					},
					"speaker": "pyre"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 미래가…?",
						"english": "My future...?",
						"japanese": "私の未来が…？",
						"chinese": "我的未来…？",
						"french": "Mon futur…?",
						"spanish": "¿Mi futuro…?",
						"vietnamese": "Tương lai của ta…?",
						"thai": "อนาคตของข้า…?",
						"hindi": "मेरा भविष्य…?"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "pyre",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "운명의 실은 한번 엮이면 풀리지 않아.",
						"english": "Once woven, the threads of fate cannot be undone.",
						"japanese": "運命の糸は一度織り交ぜられると、解けない。",
						"chinese": "命运之线一旦编织，便无法解开。",
						"french": "Une fois tissés, les fils du destin ne peuvent être défaits.",
						"spanish": "Una vez tejidas, los hilos del destino no se pueden deshacer.",
						"vietnamese": "Sợi chỉ định mệnh, một khi đã dệt, không thể tháo gỡ.",
						"thai": "เมื่อด้ายแห่งโชคชะตาถูกถักทอแล้ว จะคลี่คลายไม่ได้",
						"hindi": "एक बार बुने जाने पर, भाग्य के धागे सुलझाए नहीं जा सकते।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 저걸 막아야 해.",
						"english": "Then we must stop it.",
						"japanese": "それなら、あれを止めなければならない。",
						"chinese": "那我们必须阻止它。",
						"french": "Alors nous devons l'arrêter.",
						"spanish": "Entonces debemos detenerlo.",
						"vietnamese": "Vậy thì phải ngăn chặn nó.",
						"thai": "ถ้าอย่างนั้นเราต้องหยุดมัน",
						"hindi": "तो हमें उसे रोकना होगा।"
					}
				},
				{
					"content": {
						"korean": "쉽지 않을 거야. 직조자는… 절망 그 자체니까.",
						"english": "It won't be easy. The Weaver is... despair itself.",
						"japanese": "簡単ではないだろう。織り手は…絶望そのものだから。",
						"chinese": "不会容易的。织造者…就是绝望本身。",
						"french": "Ce ne sera pas facile. Le Tisserand est… le désespoir incarné.",
						"spanish": "No será fácil. El Tejedor es… la desesperación misma.",
						"vietnamese": "Sẽ không dễ dàng đâu. Kẻ dệt… chính là sự tuyệt vọng.",
						"thai": "มันจะไม่ง่ายหรอก ผู้ทอ… คือความสิ้นหวังในตัวเอง",
						"hindi": "यह आसान नहीं होगा। बुनकर… स्वयं निराशा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "pyre"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "pyre",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 이상 돌아갈 수 없어. 여기까지 왔다면…",
						"english": "There's no turning back. If you've come this far...",
						"japanese": "もう後戻りはできない。ここまで来たら…",
						"chinese": "无法回头了。如果已经走到这里…",
						"french": "On ne peut plus revenir en arrière. Si vous êtes venu jusqu'ici…",
						"spanish": "No hay vuelta atrás. Si has llegado hasta aquí…",
						"vietnamese": "Không thể quay lại nữa. Nếu đã đến đây…",
						"thai": "ไม่อาจย้อนกลับได้แล้ว หากมาถึงจุดนี้…",
						"hindi": "अब पीछे नहीं हटा जा सकता। यदि तुम यहाँ तक आ गए हो तो…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "알아. 멈출 수 없어.",
						"english": "I know. I can't stop.",
						"japanese": "分かってる。止められない。",
						"chinese": "我知道。无法停止。",
						"french": "Je sais. On ne peut pas s'arrêter.",
						"spanish": "Lo sé. No puedo parar.",
						"vietnamese": "Ta biết. Không thể dừng lại.",
						"thai": "รู้แล้ว. หยุดไม่ได้",
						"hindi": "मैं जानता हूँ। रुक नहीं सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 움직였다. 심연의 직조자가 모습을 드러냈다.",
						"english": "A colossal shadow stirred. The Weaver of the Abyss revealed itself.",
						"japanese": "巨大な影が動いた。深淵の織り手が姿を現した。",
						"chinese": "巨大的阴影动了。深渊的织造者现身了。",
						"french": "Une ombre colossale s'agita. Le Tisserand des Abysses se révéla.",
						"spanish": "Una sombra colosal se movió. El Tejedor del Abismo se reveló.",
						"vietnamese": "Một cái bóng khổng lồ đã di chuyển. Kẻ Dệt Vải Vực Thẳm đã xuất hiện.",
						"thai": "เงาขนาดมหึมาเคลื่อนไหว ผู้ทอแห่งห้วงลึกปรากฏตัวขึ้น",
						"hindi": "एक विशाल छाया हिल उठी। अथाह कुंड के बुनकर ने अपना रूप प्रकट किया।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 운명은… 이미 엮여 있다. 발버둥 쳐봐야 소용없다.",
						"english": "Your destiny... is already woven. Struggling is useless.",
						"japanese": "お前の運命は…すでに織られている。もがいても無駄だ。",
						"chinese": "你的命运…早已编织而成。挣扎也无济于事。",
						"french": "Ton destin... est déjà tissé. Lutter est inutile.",
						"spanish": "Tu destino... ya está tejido. Luchar es inútil.",
						"vietnamese": "Số phận của ngươi... đã được dệt sẵn rồi. Vùng vẫy cũng vô ích.",
						"thai": "โชคชะตาของเจ้า...ถูกถักทอไว้แล้ว ดิ้นรนไปก็ไร้ประโยชน์",
						"hindi": "तुम्हारी नियति... पहले से बुनी हुई है। संघर्ष करना व्यर्थ है।"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "pyre",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"content": {
						"korean": "아직… 기회가 있어. 포기하지 마.",
						"english": "There's still... a chance. Don't give up.",
						"japanese": "まだ…機会はある。諦めるな。",
						"chinese": "还有…机会。别放弃。",
						"french": "Il y a encore... une chance. Ne lâche pas.",
						"spanish": "Todavía... hay una oportunidad. No te rindas.",
						"vietnamese": "Vẫn còn... cơ hội. Đừng bỏ cuộc.",
						"thai": "ยังมี...โอกาส อย่าเพิ่งยอมแพ้",
						"hindi": "अभी भी... एक मौका है। हार मत मानो।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…다시 한번. 운명을 바꿀 거야.",
						"english": "...One more time. I will change destiny.",
						"japanese": "…もう一度。運命を変える。",
						"chinese": "…再来一次。我要改变命运。",
						"french": "…Une fois de plus. Je changerai le destin.",
						"spanish": "…Una vez más. Cambiaré el destino.",
						"vietnamese": "...Một lần nữa. Ta sẽ thay đổi số phận.",
						"thai": "...อีกครั้ง ข้าจะเปลี่ยนโชคชะตา",
						"hindi": "...एक बार फिर। मैं नियति बदलूंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "심연의 가장 깊은 곳. 거대한 직조자가 모습을 드러냈다.",
						"english": "The deepest part of the Abyss. The colossal Weaver revealed itself.",
						"japanese": "深淵の最も深い場所。巨大な織り手が姿を現した。",
						"chinese": "深渊最深处。巨大的织造者现身了。",
						"french": "L'endroit le plus profond de l'Abîme. Le colossal Tisserand se révéla.",
						"spanish": "La parte más profunda del Abismo. El colosal Tejedor se reveló.",
						"vietnamese": "Nơi sâu nhất của Vực Thẳm. Kẻ dệt khổng lồ đã xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของห้วงลึก ผู้ทอขนาดมหึมาปรากฏตัวขึ้น",
						"hindi": "अथाह कुंड का सबसे गहरा स्थान। विशाल बुनकर ने अपना रूप प्रकट किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 운명의 실타래를 보려 하는가.",
						"english": "Dare you... gaze upon the threads of fate?",
						"japanese": "よくも…運命の糸を覗こうとするか。",
						"chinese": "竟敢…窥视命运的丝线。",
						"french": "Osez-vous… contempler les fils du destin ?",
						"spanish": "¿Osas… contemplar los hilos del destino?",
						"vietnamese": "Dám… nhìn vào cuộn chỉ định mệnh sao.",
						"thai": "กล้าดีอย่างไร… ถึงจะมองดูด้ายแห่งโชคชะตา",
						"hindi": "क्या तुम हिम्मत करते हो… भाग्य के धागों को देखने की?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "pyre",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저게… 직조자야. 이 앞은 더 위험해.",
						"english": "That's... the Weaver. It's more dangerous ahead.",
						"japanese": "あれが…織り手だ。この先はもっと危険だ。",
						"chinese": "那个…是编织者。前面更危险。",
						"french": "C'est... la Tisserande. C'est plus dangereux devant.",
						"spanish": "Es... la Tejedora. Es más peligroso adelante.",
						"vietnamese": "Đó là... Thợ dệt. Phía trước còn nguy hiểm hơn.",
						"thai": "นั่น...คือผู้ถักทอ ข้างหน้าอันตรายยิ่งกว่า",
						"hindi": "वह... बुनकर है। आगे और भी खतरा है।"
					},
					"speaker": "pyre"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "피하지 않아.",
						"english": "I won't back down.",
						"japanese": "避けはしない。",
						"chinese": "我不会躲避。",
						"french": "Je n'éviterai pas.",
						"spanish": "No lo evitaré.",
						"vietnamese": "Ta sẽ không trốn tránh.",
						"thai": "ข้าจะไม่หลบเลี่ยง",
						"hindi": "मैं पीछे नहीं हटूंगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 이 실도 끊어내는군. 하지만… 운명은 계속될 것이다.",
						"english": "So... you cut this thread too. But... destiny will continue.",
						"japanese": "結局…この糸も断ち切るのか。だが…運命は続く。",
						"chinese": "最终…你也斩断了这条线。但是…命运仍将继续。",
						"french": "Finalement... tu as coupé ce fil aussi. Mais... le destin continuera.",
						"spanish": "Así que... también cortas este hilo. Pero... el destino continuará.",
						"vietnamese": "Cuối cùng... ngươi cũng cắt đứt sợi chỉ này. Nhưng... số phận sẽ tiếp diễn.",
						"thai": "ในที่สุด...เจ้าก็ตัดด้ายเส้นนี้ได้ แต่...โชคชะตาจะยังคงดำเนินต่อไป",
						"hindi": "आखिर... तुमने यह धागा भी काट दिया। लेकिन... नियति जारी रहेगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "どういう意味だ。",
						"chinese": "你说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì?",
						"thai": "เจ้าหมายความว่าอะไร",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "pyre",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "pyre",
					"emotion": "sad",
					"content": {
						"korean": "느껴져… 다른 실타래가 움직이는 소리가.",
						"english": "I feel it... the sound of other threads moving.",
						"japanese": "感じる…別の糸玉が動く音が。",
						"chinese": "我感觉到了…其他线团移动的声音。",
						"french": "Je le sens... le bruit d'autres écheveaux qui bougent.",
						"spanish": "Lo siento... el sonido de otros ovillos moviéndose.",
						"vietnamese": "Ta cảm nhận được... tiếng của những cuộn chỉ khác đang chuyển động.",
						"thai": "ข้ารู้สึกได้...เสียงของด้ายม้วนอื่นกำลังเคลื่อนไหว",
						"hindi": "मुझे महसूस हो रहा है... दूसरे धागों के हिलने की आवाज।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 다른 절망이 엮이기 시작했다. 운명의 실은 계속 이어질 것이다.",
						"english": "Another despair has begun to weave. The thread of destiny will continue.",
						"japanese": "また別の絶望が織られ始めた。運命の糸は繋がり続けるだろう。",
						"chinese": "另一种绝望开始编织。命运的线将继续延续。",
						"french": "Un autre désespoir a commencé à se tisser. Le fil du destin continuera.",
						"spanish": "Otra desesperación ha comenzado a tejerse. El hilo del destino continuará.",
						"vietnamese": "Một nỗi tuyệt vọng khác đã bắt đầu dệt nên. Sợi chỉ định mệnh sẽ tiếp tục.",
						"thai": "ความสิ้นหวังอีกครั้งได้เริ่มถักทอ ด้ายแห่งโชคชะตาจะยังคงดำเนินต่อไป",
						"hindi": "एक और निराशा बुनी जाने लगी है। नियति का धागा चलता रहेगा।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥 심연. 죄인들의 절망을 엮어내는 곳.",
			"거대한 직조자가 검은 실타래를 움직인다.",
			"그 실에 죽은 자들의 비명이 배어 있다.",
			"우리는 운명의 진실을 밝히러 왔다."
		],
		"english": [
			"Abyss of Hell. Where the despair of sinners is woven.",
			"The grand weaver moves the black threads.",
			"The screams of the dead are steeped in those threads.",
			"We have come to uncover the truth of fate."
		],
		"japanese": [
			"地獄の深淵。罪人たちの絶望が織りなされる場所。",
			"巨大な織り手が黒い糸玉を動かす。",
			"その糸には死者たちの悲鳴が染み込んでいる。",
			"我々は運命の真実を明らかにするために来た。"
		],
		"chinese": [
			"地狱深渊。编织罪人绝望之地。",
			"巨大的织工牵动着黑色线团。",
			"那些线中渗透着死者的尖叫。",
			"我们来揭示命运的真相。"
		],
		"french": [
			"Abysse infernal. Le lieu où le désespoir des pécheurs est tissé.",
			"Le grand tisserand manipule les fils noirs.",
			"Les cris des morts sont imprégnés dans ces fils.",
			"Nous sommes venus révéler la vérité du destin."
		],
		"spanish": [
			"Abismo infernal. Donde la desesperación de los pecadores se teje.",
			"El gran tejedor mueve los hilos negros.",
			"Los gritos de los muertos están impregnados en esos hilos.",
			"Hemos venido a revelar la verdad del destino."
		],
		"vietnamese": [
			"Vực sâu địa ngục. Nơi dệt nên nỗi tuyệt vọng của tội nhân.",
			"Thợ dệt khổng lồ di chuyển cuộn chỉ đen.",
			"Tiếng gào thét của người chết thấm đẫm trong sợi chỉ đó.",
			"Chúng ta đến để hé lộ sự thật của vận mệnh."
		],
		"thai": [
			"ขุมนรก. ที่ซึ่งความสิ้นหวังของคนบาปถูกถักทอ",
			"จอมทอผ้าผู้ยิ่งใหญ่เคลื่อนไหวเส้นด้ายสีดำ",
			"เสียงกรีดร้องของผู้ตายถูกดูดซับอยู่ในเส้นด้ายเหล่านั้น",
			"เรามาเพื่อเปิดเผยความจริงของโชคชะตา"
		],
		"hindi": [
			"नरक की खाई। जहां पापियों की निराशा बुनी जाती है।",
			"महान बुनकर काले धागों को हिलाता है।",
			"उन धागों में मृतकों की चीखें समाई हुई हैं।",
			"हम भाग्य के सत्य को उजागर करने आए हैं।"
		]
	}
} as const;
