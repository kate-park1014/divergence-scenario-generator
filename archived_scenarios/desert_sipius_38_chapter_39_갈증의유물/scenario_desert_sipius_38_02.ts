export const scenario_desert_sipius_38_02 = {
	"scenario_id": "desert_sipius_38_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막은 모든 것을 집어삼켰다.",
			"뜨거운 모래, 타는 목마름. 더 이상 버틸 수 없었다.",
			"그때, 그림자처럼 나타난 한 사람.",
			"그는 구원자일까, 아니면 또 다른 함정일까."
		],
		"english": [
			"The desert swallowed everything.",
			"Burning sand, scorching thirst. I couldn't endure it anymore.",
			"Then, a person appeared like a shadow.",
			"Is he a savior, or another trap?"
		],
		"japanese": [
			"砂漠はすべてを飲み込んだ。",
			"燃えるような砂、焼け付くような喉の渇き。もう耐えられなかった。",
			"その時、影のように一人の人物が現れた。",
			"彼は救世主なのか、それとも別の罠なのか。"
		],
		"chinese": [
			"沙漠吞噬了一切。",
			"灼热的沙，炙烤的干渴。我再也无法忍受了。",
			"就在那时，一个人影般出现了。",
			"他是救世主，还是另一个陷阱？"
		],
		"french": [
			"Le désert a tout englouti.",
			"Sable brûlant, soif ardente. Je ne pouvais plus le supporter.",
			"Alors, une personne apparut comme une ombre.",
			"Est-il un sauveur, ou un autre piège ?"
		],
		"spanish": [
			"El desierto lo engulló todo.",
			"Arena ardiente, sed abrasadora. No pude soportarlo más.",
			"Entonces, una persona apareció como una sombra.",
			"¿Es un salvador, o otra trampa?"
		],
		"vietnamese": [
			"Sa mạc nuốt chửng mọi thứ.",
			"Cát nóng, khát cháy cổ. Không thể chịu đựng thêm được nữa.",
			"Lúc đó, một người xuất hiện như một cái bóng.",
			"Anh ta là một vị cứu tinh, hay một cái bẫy khác?"
		],
		"thai": [
			"ทะเลทรายกลืนกินทุกสิ่ง",
			"ทรายร้อนระอุ, กระหายน้ำแทบขาดใจ. ไม่อาจทนได้อีกต่อไป.",
			"ทันใดนั้นเอง, มีคนหนึ่งปรากฏขึ้นราวกับเงา.",
			"เขาเป็นผู้กอบกู้, หรือกับดักอีกอันกันแน่?"
		],
		"hindi": [
			"रेगिस्तान ने सब कुछ निगल लिया।",
			"जलती रेत, तीव्र प्यास। मैं अब और सहन नहीं कर सका।",
			"तभी, एक व्यक्ति परछाई की तरह प्रकट हुआ।",
			"क्या वह एक उद्धारकर्ता है, या एक और जाल?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뜨거운 태양이 작열했다. 물 한 방울 없는 사막. 포기 직전이었다.",
						"english": "The scorching sun blazed. A desert with not a drop of water. I was on the verge of giving up.",
						"japanese": "灼熱の太陽が照りつけた。水一滴もない砂漠。諦める寸前だった。",
						"chinese": "烈日炙烤。一滴水都没有的沙漠。我快要放弃了。",
						"french": "Le soleil ardent brûlait. Un désert sans une goutte d'eau. J'étais sur le point d'abandonner.",
						"spanish": "El sol abrasador ardía. Un desierto sin una gota de agua. Estaba a punto de rendirme.",
						"vietnamese": "Mặt trời nóng như thiêu đốt. Sa mạc không một giọt nước. Tôi đã gần như bỏ cuộc.",
						"thai": "ดวงอาทิตย์แผดเผา. ทะเลทรายที่ปราศจากน้ำ. ฉันกำลังจะยอมแพ้แล้ว.",
						"hindi": "जलता हुआ सूरज चमक रहा था। पानी की एक बूंद भी नहीं थी रेगिस्तान में। मैं हार मानने वाला था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…더는 못 가. 죽을 것 같아.",
						"english": "...I can't go on. I feel like I'm going to die.",
						"japanese": "…もう無理だ。死にそうだ。",
						"chinese": "……我走不动了。我快死了。",
						"french": "...Je ne peux plus. J'ai l'impression que je vais mourir.",
						"spanish": "...No puedo más. Siento que voy a morir.",
						"vietnamese": "...Tôi không thể đi tiếp được nữa. Tôi cảm thấy mình sắp chết rồi.",
						"thai": "...ฉันไปต่อไม่ไหวแล้ว. ฉันรู้สึกเหมือนจะตาย.",
						"hindi": "...मैं अब और नहीं चल सकता। मुझे लग रहा है कि मैं मर जाऊँगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "정신 차려. 여기서 죽을 셈이야?",
						"english": "Snap out of it. Are you going to die here?",
						"japanese": "しっかりしろ。ここで死ぬつもりか？",
						"chinese": "振作起来。你打算死在这里吗？",
						"french": "Reprends-toi. Vas-tu mourir ici ?",
						"spanish": "¡Espabila! ¿Vas a morir aquí?",
						"vietnamese": "Tỉnh táo lại đi. Bạn định chết ở đây sao?",
						"thai": "ตั้งสติหน่อย. นายจะตายที่นี่เหรอ?",
						"hindi": "होश में आओ। क्या तुम यहीं मरने वाले हो?"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "자, 이거 마셔.",
						"english": "Here, drink this.",
						"japanese": "さあ、これを飲め。",
						"chinese": "来，喝了它。",
						"french": "Tiens, bois ça.",
						"spanish": "Aquí, bebe esto.",
						"vietnamese": "Này, uống cái này đi.",
						"thai": "เอ้านี่, ดื่มซะ.",
						"hindi": "लो, इसे पी लो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "물… 고마워…",
						"english": "Water... Thank you...",
						"japanese": "水…ありがとう…",
						"chinese": "水……谢谢……",
						"french": "De l'eau... Merci...",
						"spanish": "Agua... Gracias...",
						"vietnamese": "Nước... Cảm ơn...",
						"thai": "น้ำ... ขอบคุณ...",
						"hindi": "पानी... धन्यवाद..."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "아미르는 노련했다. 사막의 길을 아는 자였다.",
						"english": "Amir was experienced. He knew the ways of the desert.",
						"japanese": "アミールは熟練していた。彼は砂漠の道を知る者だった。",
						"chinese": "阿米尔经验丰富。他是了解沙漠之路的人。",
						"french": "Amir était expérimenté. Il connaissait les chemins du désert.",
						"spanish": "Amir era experimentado. Conocía los caminos del desierto.",
						"vietnamese": "Amir rất có kinh nghiệm. Anh ấy là người biết đường đi của sa mạc.",
						"thai": "อามีร์มีประสบการณ์มาก. เขาเป็นผู้ที่รู้เส้นทางของทะเลทราย.",
						"hindi": "आमिर अनुभवी था। वह रेगिस्तान के रास्ते जानता था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이게 사막에서 버티는 법이야. 움직임을 최소화하고, 밤에 이동하는 게 좋아.",
						"english": "This is how you survive in the desert. Minimize movement, and it's best to travel at night.",
						"japanese": "これが砂漠で生き延びる方法だ。動きを最小限にし、夜に移動するのがいい。",
						"chinese": "这是在沙漠中生存的方法。尽量减少活动，最好在夜间行动。",
						"french": "C'est ainsi que l'on survit dans le désert. Minimisez vos mouvements, et il est préférable de voyager la nuit.",
						"spanish": "Así es como sobrevives en el desierto. Minimiza el movimiento y es mejor viajar de noche.",
						"vietnamese": "Đây là cách sống sót ở sa mạc. Hạn chế di chuyển, tốt nhất là đi vào ban đêm.",
						"thai": "นี่คือวิธีเอาชีวิตรอดในทะเลทราย ลดการเคลื่อนไหวให้น้อยที่สุด และควรเดินทางตอนกลางคืน",
						"hindi": "रेगिस्तान में ऐसे ही टिकते हैं। कम से कम हिलना-डुलना चाहिए, और रात में चलना बेहतर है।"
					},
					"speaker": "amir",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "정말 고마워… 당신 덕분에 살았어.",
						"english": "Thank you so much... You saved my life.",
						"japanese": "本当にありがとう… あなたのおかげで助かった。",
						"chinese": "真是太感谢了……多亏了你，我才活下来。",
						"french": "Merci beaucoup... Vous m'avez sauvé la vie.",
						"spanish": "Muchas gracias... Me salvaste la vida.",
						"vietnamese": "Cảm ơn rất nhiều... Nhờ bạn mà tôi sống sót.",
						"thai": "ขอบคุณมาก... ฉันรอดมาได้เพราะคุณ",
						"hindi": "बहुत-बहुत धन्यवाद… आपकी वजह से मैं बच गया।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "걱정 마. 내가 널 안전하게 데려다줄게.",
						"english": "Don't worry. I'll get you to safety.",
						"japanese": "心配ない。私が君を安全な場所へ連れて行ってやる。",
						"chinese": "别担心。我会把你安全送到的。",
						"french": "Ne t'inquiète pas. Je vais te conduire en sécurité.",
						"spanish": "No te preocupes. Te llevaré a un lugar seguro.",
						"vietnamese": "Đừng lo. Tôi sẽ đưa bạn đến nơi an toàn.",
						"thai": "ไม่ต้องห่วง ฉันจะพาคุณไปส่งอย่างปลอดภัย",
						"hindi": "चिंता मत करो। मैं तुम्हें सुरक्षित स्थान पर पहुँचा दूँगा।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…목마르네. 벌써?",
						"english": "...Thirsty already?",
						"japanese": "…もう喉が渇いた？",
						"chinese": "……已经渴了？",
						"french": "...Déjà soif ?",
						"spanish": "...¿Ya tienes sed?",
						"vietnamese": "…Khát nước rồi à? Mới vậy thôi sao?",
						"thai": "...หิวน้ำแล้วเหรอ? เร็วขนาดนี้เลย?",
						"hindi": "...अभी से प्यास लग गई?"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "사막은 원래 그래. 익숙해질 거야.",
						"english": "That's how the desert is. You'll get used to it.",
						"japanese": "砂漠はそういうものだ。慣れるさ。",
						"chinese": "沙漠就是这样。你会习惯的。",
						"french": "Le désert est comme ça. Tu t'y habitueras.",
						"spanish": "Así es el desierto. Te acostumbrarás.",
						"vietnamese": "Sa mạc vốn dĩ là vậy. Bạn sẽ quen thôi.",
						"thai": "ทะเลทรายก็เป็นแบบนี้แหละ เดี๋ยวก็ชิน",
						"hindi": "रेगिस्तान ऐसा ही होता है। तुम्हें इसकी आदत हो जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "며칠 밤낮을 함께 했다. 아미르를 의심할 여지는 없었다.",
						"english": "We spent several days and nights together. There was no room to doubt Amir.",
						"japanese": "何日も昼夜を共にした。アミールを疑う余地はなかった。",
						"chinese": "我们昼夜相伴多日。对阿米尔的怀疑荡然无存。",
						"french": "Nous avons passé plusieurs jours et nuits ensemble. Il n'y avait aucune raison de douter d'Amir.",
						"spanish": "Pasamos varios días y noches juntos. No había lugar para dudar de Amir.",
						"vietnamese": "Chúng tôi đã ở bên nhau nhiều ngày đêm. Không có lý do gì để nghi ngờ Amir.",
						"thai": "เราใช้เวลาอยู่ด้วยกันหลายวันหลายคืน ไม่มีเหตุผลอะไรให้สงสัยอาเมียร์",
						"hindi": "हमने कई दिन-रात साथ बिताए। अमीर पर शक करने की कोई गुंजाइश नहीं थी।"
					}
				},
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신 물통은 특이하네. 오래된 것 같아.",
						"english": "Your canteen is unusual. It looks old.",
						"japanese": "あなたの水筒、珍しいね。古そうに見える。",
						"chinese": "你的水壶真特别。看起来很旧了。",
						"french": "Ta gourde est inhabituelle. Elle a l'air vieille.",
						"spanish": "Tu cantimplora es inusual. Parece vieja.",
						"vietnamese": "Bình nước của bạn trông lạ thật. Có vẻ đã cũ rồi.",
						"thai": "กระติกน้ำของคุณดูแปลกนะ ดูเหมือนเก่าแล้ว",
						"hindi": "तुम्हारी पानी की बोतल अनोखी है। पुरानी लगती है।"
					}
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "…그냥 오래 쓴 거야. 별거 아니야.",
						"english": "...I've just used it for a long time. It's nothing special.",
						"japanese": "…ただ長く使ってるだけだよ。たいしたことない。",
						"chinese": "……只是用了很久而已。没什么特别的。",
						"french": "...Je l'utilise depuis longtemps, c'est tout. Rien de spécial.",
						"spanish": "...Solo la he usado mucho tiempo. No es nada especial.",
						"vietnamese": "…Chỉ là tôi đã dùng nó lâu rồi thôi. Không có gì đặc biệt đâu.",
						"thai": "ก็แค่ใช้มานานแล้วน่ะ ไม่มีอะไรพิเศษหรอก",
						"hindi": "बस बहुत समय से इस्तेमाल कर रहा हूँ। कोई खास बात नहीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "근데 왜 자꾸 사막 깊숙이 가는 거야? 위험하지 않아?",
						"english": "But why do you keep going deeper into the desert? Isn't it dangerous?",
						"japanese": "でも、なんでそんなに砂漠の奥深くへ行くの？危険じゃないの？",
						"chinese": "可是你为什么老是往沙漠深处走？不危险吗？",
						"french": "Mais pourquoi continues-tu à t'enfoncer dans le désert ? N'est-ce pas dangereux ?",
						"spanish": "Pero, ¿por qué sigues adentrándote en el desierto? ¿No es peligroso?",
						"vietnamese": "Nhưng tại sao bạn cứ đi sâu hơn vào sa mạc vậy? Không nguy hiểm sao?",
						"thai": "แต่ทำไมคุณถึงเอาแต่เข้าไปลึกในทะเลทรายล่ะ? มันไม่อันตรายเหรอ?",
						"hindi": "लेकिन तुम बार-बार रेगिस्तान में इतनी गहराई में क्यों जा रहे हो? क्या यह खतरनाक नहीं है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "더 좋은 오아시스를 찾으려면 이 길밖에 없어. 날 믿어.",
						"english": "To find a better oasis, this is the only way. Trust me.",
						"japanese": "もっと良いオアシスを見つけるには、この道しかない。私を信じて。",
						"chinese": "要想找到更好的绿洲，就只有这条路了。相信我。",
						"french": "Pour trouver une meilleure oasis, c'est le seul chemin. Fais-moi confiance.",
						"spanish": "Para encontrar un oasis mejor, este es el único camino. Confía en mí.",
						"vietnamese": "Để tìm một ốc đảo tốt hơn, chỉ có con đường này thôi. Tin tôi đi.",
						"thai": "หากจะหาโอเอซิสที่ดีกว่า ก็มีแต่ทางนี้เท่านั้น เชื่อใจฉันสิ",
						"hindi": "बेहतर नखलिस्तान ढूँढ़ने के लिए यही एक रास्ता है। मुझ पर विश्वास करो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "점점 더 깊은 사막으로 향했다. 발걸음마다 불안이 스며들었다.",
						"english": "We journeyed deeper into the desert. Each step filled with unease.",
						"japanese": "砂漠の奥深くへと進んだ。足を踏み出すたびに不安が募る。",
						"chinese": "我们深入沙漠。每一步都充满了不安。",
						"french": "Nous nous enfoncions plus profondément dans le désert. Chaque pas était empreint d'inquiétude.",
						"spanish": "Nos adentramos más en el desierto. Cada paso teñido de inquietud.",
						"vietnamese": "Chúng tôi tiến sâu hơn vào sa mạc. Mỗi bước chân đều thấm đẫm sự bất an.",
						"thai": "เราเดินทางลึกเข้าไปในทะเลทราย ความกังวลแฝงอยู่ในทุกย่างก้าว",
						"hindi": "हम रेगिस्तान में और गहराई तक गए। हर कदम में बेचैनी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 근처에… 고대 유적이 있을지도 몰라. 엄청난 보물이 잠들어 있다고.",
						"english": "Nearby... there might be ancient ruins. With immense treasures hidden within.",
						"japanese": "この近くに… 古代遺跡があるかもしれない。莫大な宝が眠っていると。",
						"chinese": "这附近… 可能有古代遗迹。据说里面藏着巨大的宝藏。",
						"french": "Par ici... il pourrait y avoir d'anciennes ruines. Avec d'immenses trésors cachés.",
						"spanish": "Por aquí... podría haber ruinas antiguas. Con tesoros inmensos dormidos en su interior.",
						"vietnamese": "Gần đây... có thể có di tích cổ xưa. Với vô số kho báu ẩn chứa bên trong.",
						"thai": "แถวนี้... อาจมีซากปรักหักพังโบราณอยู่ ข้างในมีสมบัติมหาศาลหลับใหลอยู่",
						"hindi": "आस-पास... शायद प्राचीन खंडहर हों। जिनमें अपार खजाना छिपा है।"
					},
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "유적…?",
						"english": "Ruins...?",
						"japanese": "遺跡…？",
						"chinese": "遗迹…？",
						"french": "Des ruines... ?",
						"spanish": "Ruinas...?",
						"vietnamese": "Di tích...?",
						"thai": "ซากปรักหักพัง...?",
						"hindi": "खंडहर...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "그래. 거기에 분명 우리가 원하는 게 있을 거야.",
						"english": "Yes. We'll surely find what we're looking for there.",
						"japanese": "ああ。そこにきっと、俺たちが求めているものがある。",
						"chinese": "没错。我们想要的东西肯定在那里。",
						"french": "Oui. Nous y trouverons sûrement ce que nous cherchons.",
						"spanish": "Sí. Seguro que encontraremos lo que buscamos allí.",
						"vietnamese": "Đúng vậy. Chắc chắn chúng ta sẽ tìm thấy thứ mình muốn ở đó.",
						"thai": "ใช่แล้ว ที่นั่นต้องมีสิ่งที่เราต้องการแน่",
						"hindi": "हाँ। हमें वहां निश्चित रूप से वही मिलेगा जो हम चाहते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…갑자기 너무 목이 말라. 물이… 더 필요해.",
						"english": "...Suddenly, I'm incredibly thirsty. I need... more water.",
						"japanese": "…急に喉が渇いた。水が… もっと必要だ。",
						"chinese": "…突然好渴。我需要… 更多的水。",
						"french": "...Soudain, j'ai terriblement soif. J'ai besoin... de plus d'eau.",
						"spanish": "...De repente, tengo muchísima sed. Necesito... más agua.",
						"vietnamese": "Đột nhiên, tôi khát khô cả cổ. Tôi cần... thêm nước.",
						"thai": "...ทันใดนั้น ฉันก็กระหายน้ำมาก ฉันต้องการ... น้ำเพิ่ม",
						"hindi": "...अचानक मुझे बहुत प्यास लगी है। मुझे... और पानी चाहिए।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "조금만 더 가면 돼. 기다려봐.",
						"english": "Just a little further. Hold on.",
						"japanese": "もう少しだ。待っていろ。",
						"chinese": "再走一点点就行。等等看。",
						"french": "Encore un peu. Tiens bon.",
						"spanish": "Solo un poco más. Espera.",
						"vietnamese": "Chỉ một chút nữa thôi. Đợi đã.",
						"thai": "อีกนิดเดียวก็ถึงแล้ว รอหน่อยนะ",
						"hindi": "बस थोड़ी दूर और। इंतज़ार करो।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자… 사막은 너를 삼킬 것이다.",
						"english": "Foolish one... the desert will claim you.",
						"japanese": "愚か者め…砂漠がお前を飲み込むだろう。",
						"chinese": "愚蠢的家伙……沙漠会吞噬你。",
						"french": "Insensé... le désert t'engloutira.",
						"spanish": "Necio... el desierto te engullirá.",
						"vietnamese": "Kẻ ngu muội... sa mạc sẽ nuốt chửng ngươi.",
						"thai": "เจ้าคนโง่... ทะเลทรายจะกลืนกินเจ้า",
						"hindi": "मूर्ख... रेगिस्तान तुम्हें निगल जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 물….",
						"english": "Damn... Water...",
						"japanese": "くそ… 水…",
						"chinese": "该死… 水…",
						"french": "Merde... De l'eau...",
						"spanish": "Maldita sea... Agua...",
						"vietnamese": "Chết tiệt... Nước...",
						"thai": "บ้าจริง... น้ำ...",
						"hindi": "लानत है... पानी..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "겨우 이 정도인가? 아직 멀었군.",
						"english": "Is this all you've got? Not even close.",
						"japanese": "たったこれだけか？まだまだだな。",
						"chinese": "就这点本事吗？还差得远呢。",
						"french": "C'est tout ce que tu as ? Loin de là.",
						"spanish": "¿Esto es todo lo que tienes? Ni de cerca.",
						"vietnamese": "Chỉ có vậy thôi sao? Còn xa lắm.",
						"thai": "มีแค่นี้เองเหรอ? ยังห่างไกลนัก.",
						"hindi": "बस इतना ही है? अभी बहुत दूर है।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "죽음의 그림자가 드리웠다. 아미르의 눈빛이 싸늘했다.",
						"english": "The shadow of death loomed. Amir's eyes were cold.",
						"japanese": "死の影が忍び寄る。アミールの瞳は冷酷だった。",
						"chinese": "死亡的阴影笼罩。阿米尔的眼神冰冷。",
						"french": "L'ombre de la mort planait. Le regard d'Amir était glacial.",
						"spanish": "La sombra de la muerte se cernía. La mirada de Amir era fría.",
						"vietnamese": "Bóng tử thần bao trùm. Ánh mắt Amir lạnh lẽo.",
						"thai": "เงาแห่งความตายคืบคลาน ดวงตาของอาเมียร์เย็นชา.",
						"hindi": "मृत्यु का साया मंडराया। आमिर की आँखें ठंडी थीं।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "마침내 도착한 곳은… 죽음의 기운이 감도는 폐허였다.",
						"english": "The place we finally reached... was a ruin emanating a aura of death.",
						"japanese": "ついにたどり着いた場所は… 死の気配が漂う廃墟だった。",
						"chinese": "我们终于到达的地方… 是一片弥漫着死亡气息的废墟。",
						"french": "L'endroit que nous avons enfin atteint... était une ruine dégageant une aura de mort.",
						"spanish": "El lugar al que finalmente llegamos... era una ruina que emanaba un aura de muerte.",
						"vietnamese": "Nơi cuối cùng chúng tôi đến... là một tàn tích tỏa ra một luồng khí chết chóc.",
						"thai": "สถานที่ที่เรามาถึงในที่สุด... คือซากปรักหักพังที่อบอวลไปด้วยกลิ่นอายแห่งความตาย",
						"hindi": "आखिरकार हम जिस जगह पहुँचे... वह मौत की आभा से भरी एक खंडहर थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 바로… 네가 강해질 장소야.",
						"english": "This is it... the place where you'll grow stronger.",
						"japanese": "ここがまさに… お前が強くなる場所だ。",
						"chinese": "这里就是… 你将变强的地方。",
						"french": "C'est ici... l'endroit où tu deviendras plus fort.",
						"spanish": "Este es... el lugar donde te harás más fuerte.",
						"vietnamese": "Đây chính là... nơi ngươi sẽ trở nên mạnh mẽ hơn.",
						"thai": "ที่นี่แหละ... คือสถานที่ที่แกจะแข็งแกร่งขึ้น",
						"hindi": "यही वह जगह है... जहाँ तुम मजबूत बनोगे।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "뭐…?",
						"english": "What...?",
						"japanese": "何…？",
						"chinese": "什么…？",
						"french": "Quoi...?",
						"spanish": "¿Qué...?",
						"vietnamese": "Cái gì...?",
						"thai": "อะไรนะ...?",
						"hindi": "क्या...?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 모래 폭풍을 뚫고 나타났다.",
						"english": "A colossal shadow emerged from the sandstorm.",
						"japanese": "巨大な影が砂嵐を突き破って現れた。",
						"chinese": "巨大的身影穿透沙尘暴出现了。",
						"french": "Une ombre colossale a émergé de la tempête de sable.",
						"spanish": "Una sombra colosal emergió de la tormenta de arena.",
						"vietnamese": "Một cái bóng khổng lồ hiện ra xuyên qua bão cát.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้นท่ามกลางพายุทราย",
						"hindi": "एक विशालकाय परछाई रेत के तूफान से होकर प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 영역에 발을 들이다니… 어리석군.",
						"english": "You dare tread upon my domain... Foolish.",
						"japanese": "我が領域に足を踏み入れるとは…愚か者め。",
						"chinese": "竟敢踏入我的领域……真是愚蠢。",
						"french": "Oser fouler mon domaine... Insensé.",
						"spanish": "Te atreves a pisar mi dominio... Qué necio.",
						"vietnamese": "Dám đặt chân vào lãnh địa của ta... Thật ngu xuẩn.",
						"thai": "เจ้ากล้าเข้ามาในอาณาเขตของข้า... ช่างโง่เขลา",
						"hindi": "मेरे क्षेत्र में कदम रखने की हिम्मत की... मूर्ख।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저건 또 뭐야!",
						"english": "What in the world is that?!",
						"japanese": "あれは一体何だ！",
						"chinese": "那又是什么鬼东西！",
						"french": "Qu'est-ce que c'est encore que ça !",
						"spanish": "¿Qué es eso ahora?!",
						"vietnamese": "Cái quái gì thế này!",
						"thai": "นั่นมันอะไรอีกเนี่ย!",
						"hindi": "वह अब क्या है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 자를 쓰러뜨려야 해. 강해져야만 살아남을 수 있어.",
						"english": "I must defeat him. Only strength will ensure my survival.",
						"japanese": "あいつを倒さねば。強くなければ生き残れない。",
						"chinese": "我必须打倒他。唯有变强才能活下去。",
						"french": "Je dois l'abattre. Seule la force me permettra de survivre.",
						"spanish": "Debo derrotarlo. Solo siendo fuerte podré sobrevivir.",
						"vietnamese": "Phải đánh bại hắn ta. Chỉ có mạnh hơn mới sống sót được.",
						"thai": "ข้าต้องโค่นมันลง. มีแต่ความแข็งแกร่งเท่านั้นที่จะทำให้ข้ารอดชีวิต",
						"hindi": "मुझे उसे हराना होगा। केवल मजबूत होकर ही मैं जीवित रह सकता हूँ।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "amir"
				}
			],
			"win_dialogue": [
				{
					"speaker": "character_any",
					"content": {
						"korean": "해냈어….",
						"english": "I did it...",
						"japanese": "やったぞ…。",
						"chinese": "我做到了……",
						"french": "J'ai réussi...",
						"spanish": "Lo logré...",
						"vietnamese": "Mình đã làm được...",
						"thai": "ทำได้แล้ว...",
						"hindi": "मैंने कर दिखाया..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 이대로… 끝나지 않는다…",
						"english": "Urgh... this isn't... the end...",
						"japanese": "くっ…このままでは…終わらない…",
						"chinese": "呃啊……不会……就这样结束……",
						"french": "Ugh... ça ne finira pas... comme ça...",
						"spanish": "Ugh... no terminará... así...",
						"vietnamese": "Khụ... sẽ không... kết thúc thế này đâu...",
						"thai": "อึก... ไม่จบ... แค่นี้หรอก...",
						"hindi": "उफ़... यह... ऐसे... खत्म नहीं होगा..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봤지? 넌 강해. 이제 더 깊은 곳으로 가야 해.",
						"english": "See? You are strong. Now, you must go deeper.",
						"japanese": "見ただろ？お前は強い。もっと奥へ進むんだ。",
						"chinese": "看到了吗？你很强。现在你必须前往更深处。",
						"french": "Tu vois ? Tu es fort. Maintenant, tu dois aller plus loin.",
						"spanish": "¿Lo ves? Eres fuerte. Ahora, debes ir más profundo.",
						"vietnamese": "Thấy chưa? Ngươi rất mạnh. Bây giờ phải đi sâu hơn nữa.",
						"thai": "เห็นไหม? เจ้าแข็งแกร่ง. ตอนนี้เจ้าต้องไปให้ลึกกว่านี้",
						"hindi": "देखा? तुम मजबूत हो। अब तुम्हें और गहराई में जाना होगा।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "갈증이… 더 심해졌어.",
						"english": "The thirst... it's grown stronger.",
						"japanese": "渇きが…さらに強くなった。",
						"chinese": "饥渴感……变得更强烈了。",
						"french": "La soif... s'est intensifiée.",
						"spanish": "La sed... se ha intensificado.",
						"vietnamese": "Cơn khát... càng dữ dội hơn.",
						"thai": "ความกระหาย... รุนแรงขึ้น",
						"hindi": "प्यास... और बढ़ गई है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "승리했지만, 갈증은 더욱 깊어졌다. 아미르의 미소가 섬뜩했다.",
						"english": "Victory, yet the thirst deepened. Amir's smile was chilling.",
						"japanese": "勝利したが、渇きはさらに深まった。アミールの笑みは不気味だった。",
						"chinese": "虽胜犹渴。阿米尔的笑容令人毛骨悚然。",
						"french": "La victoire, mais la soif s'intensifia. Le sourire d'Amir était glaçant.",
						"spanish": "Victoria, pero la sed se hizo más profunda. La sonrisa de Amir era escalofriante.",
						"vietnamese": "Chiến thắng, nhưng cơn khát càng sâu sắc hơn. Nụ cười của Amir thật đáng sợ.",
						"thai": "ชนะแล้ว, แต่ความกระหายกลับรุนแรงขึ้น. รอยยิ้มของอามีร์น่าขนลุก",
						"hindi": "विजय मिली, पर प्यास और गहरी हो गई। आमिर की मुस्कान भयानक थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
