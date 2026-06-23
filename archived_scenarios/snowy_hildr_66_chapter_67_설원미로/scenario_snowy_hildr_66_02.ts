export const scenario_snowy_hildr_66_02 = {
	"scenario_id": "snowy_hildr_66_02",
	"order": 2,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 눈보라 속, 거대한 유적의 그림자가 드러났다.",
						"english": "Amidst the cold blizzard, the shadow of a colossal ruin emerged.",
						"japanese": "厳しい吹雪の中、巨大な遺跡の影が姿を現した。",
						"chinese": "在寒冷的暴风雪中，巨大遗迹的阴影显现出来。",
						"french": "Au milieu du froid blizzard, l'ombre d'une ruine colossale est apparue.",
						"spanish": "En medio de la fría ventisca, la sombra de una ruina colosal emergió.",
						"vietnamese": "Giữa trận bão tuyết lạnh giá, bóng dáng một di tích khổng lồ hiện ra.",
						"thai": "ท่ามกลางพายุหิมะที่หนาวเย็น, เงาของซากปรักหักพังขนาดมหึมาปรากฏขึ้น",
						"hindi": "बर्फीले तूफान के बीच, एक विशाल खंडहर की छाया उभरी।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…또 왔군. 미련한 사냥개들.",
						"english": "...You've come again. Foolish hounds.",
						"japanese": "…また来たな。愚かな猟犬ども。",
						"chinese": "……又来了。愚蠢的猎犬们。",
						"french": "...Vous revoilà. Chiens stupides.",
						"spanish": "...Han vuelto. Perros tontos.",
						"vietnamese": "...Lại đến nữa rồi. Lũ chó săn ngu ngốc.",
						"thai": "...มาอีกแล้วสินะ. พวกหมาล่าเนื้อโง่เขลา.",
						"hindi": "...फिर आ गए। मूर्ख शिकारी कुत्ते।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "당신은 누구지?",
						"english": "Who are you?",
						"japanese": "あなたは誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "오래 버틴 생존자. 그 이상도 이하도 아니야.",
						"english": "A long-enduring survivor. Nothing more, nothing less.",
						"japanese": "長く生き残った者だ。それ以上でも以下でもない。",
						"chinese": "一个长久幸存者。不多不少。",
						"french": "Une survivante de longue date. Ni plus ni moins.",
						"spanish": "Una superviviente que ha resistido mucho. Ni más, ni menos.",
						"vietnamese": "Kẻ sống sót đã trụ vững lâu rồi. Không hơn, không kém.",
						"thai": "ผู้รอดชีวิตที่ยืนหยัดมานาน. ไม่มีอะไรมากไปกว่านั้น.",
						"hindi": "एक लंबे समय तक जीवित रहने वाला। न इससे अधिक, न इससे कम।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "북극광을 쫓아왔겠지. 항상 똑같아.",
						"english": "You must be chasing the aurora. Always the same.",
						"japanese": "オーロラを追ってきたんだろう。いつも同じだ。",
						"chinese": "你们一定是追着北极光来的吧。总是这样。",
						"french": "Vous devez chasser les aurores. Toujours la même chose.",
						"spanish": "Deben estar persiguiendo la aurora. Siempre es lo mismo.",
						"vietnamese": "Chắc là theo đuổi cực quang. Lúc nào cũng vậy.",
						"thai": "คงจะไล่ตามแสงเหนือมาสินะ. เหมือนเดิมเสมอ.",
						"hindi": "तुम उत्तरी रोशनी का पीछा कर रहे होगे। हमेशा एक जैसा।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "그 빛은 널 구원하지 않아. 길을 잃게 만들 뿐이지.",
						"english": "That light won't save you. It'll only lead you astray.",
						"japanese": "その光はお前を救わない。ただ道に迷わせるだけだ。",
						"chinese": "那束光不会拯救你。只会让你迷失方向。",
						"french": "Cette lumière ne te sauvera pas. Elle ne fera que t'égarer.",
						"spanish": "Esa luz no te salvará. Solo te hará perder el rumbo.",
						"vietnamese": "Ánh sáng đó sẽ không cứu ngươi đâu. Nó chỉ khiến ngươi lạc lối thôi.",
						"thai": "แสงนั้นไม่ได้ช่วยคุณหรอก. มันแค่ทำให้คุณหลงทางเท่านั้น.",
						"hindi": "वह प्रकाश तुम्हें बचाएगा नहीं। यह तुम्हें केवल भटकाएगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 저게 유일한 길잡인데.",
						"english": "What are you talking about? That's the only guide.",
						"japanese": "何を言っているんだ？あれが唯一の道標なのに。",
						"chinese": "你说什么？那是唯一的指引啊。",
						"french": "Qu'est-ce que tu racontes ? C'est le seul guide.",
						"spanish": "¿De qué hablas? Esa es la única guía.",
						"vietnamese": "Anh đang nói gì vậy? Đó là la bàn duy nhất mà.",
						"thai": "พูดอะไรน่ะ? นั่นคือสิ่งนำทางเดียวแท้ๆ",
						"hindi": "क्या कह रहे हो? वही तो हमारा इकलौता मार्गदर्शक है。"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나침반이 빛을 향하자 격렬하게 회전하며 방향을 잃었다.",
						"english": "The compass spun wildly towards the light, losing its direction.",
						"japanese": "羅針盤は光に向かって激しく回転し、方向を見失った。",
						"chinese": "指南针剧烈地旋转着指向光芒，然后迷失了方向。",
						"french": "La boussole tourna frénétiquement vers la lumière, perdant son chemin.",
						"spanish": "La brújula giró salvajemente hacia la luz, perdiendo su dirección.",
						"vietnamese": "La bàn quay cuồng về phía ánh sáng, mất phương hướng.",
						"thai": "เข็มทิศหมุนติ้วอย่างรุนแรงไปทางแสงและหลงทิศทางไป",
						"hindi": "कंपास रोशनी की ओर तेज़ी से घूमा और अपनी दिशा खो दी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "봐. 거짓말은 안 해. 그저 보여줄 뿐이지. 진실을.",
						"english": "Look. It doesn't lie. It just shows. The truth.",
						"japanese": "見て。嘘はつかない。ただ示すだけだ。真実を。",
						"chinese": "看。它不会说谎。它只是在展示。真相。",
						"french": "Regarde. Ça ne ment pas. Ça montre juste. La vérité.",
						"spanish": "Mira. No miente. Solo muestra. La verdad.",
						"vietnamese": "Nhìn đi. Nó không nói dối. Nó chỉ cho thấy. Sự thật.",
						"thai": "ดูสิ. มันไม่โกหก. มันแค่แสดงให้เห็น. ความจริง.",
						"hindi": "देखो। यह झूठ नहीं बोलता। बस दिखाता है। सच।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "오래전 동료들도 저 빛을 쫓았어. 모두 사라졌지.",
						"english": "Long ago, my comrades chased that light too. All vanished.",
						"japanese": "昔、仲間たちもあの光を追った。皆、消えた。",
						"chinese": "很久以前，我的同伴们也追逐过那道光。他们都消失了。",
						"french": "Il y a longtemps, mes camarades ont aussi poursuivi cette lumière. Tous ont disparu.",
						"spanish": "Hace mucho tiempo, mis compañeros también persiguieron esa luz. Todos desaparecieron.",
						"vietnamese": "Ngày xưa, đồng đội tôi cũng đuổi theo ánh sáng đó. Tất cả đều biến mất.",
						"thai": "นานมาแล้ว, สหายของข้าก็ไล่ตามแสงนั้น. ทั้งหมดหายไปหมดแล้ว.",
						"hindi": "बहुत पहले, मेरे साथी भी उस रोशनी का पीछा करते थे। सब गायब हो गए।"
					}
				},
				{
					"content": {
						"korean": "…왜 당신만 남았지?",
						"english": "...Why are you the only one left?",
						"japanese": "…なぜお前だけ残った？",
						"chinese": "……为什么只有你留了下来？",
						"french": "...Pourquoi es-tu le seul à être resté ?",
						"spanish": "¿...Por qué solo tú quedaste?",
						"vietnamese": "…Tại sao chỉ còn mỗi anh?",
						"thai": "...ทำไมเหลือแค่เจ้าคนเดียว?",
						"hindi": "...तुम अकेले क्यों बचे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "나는 믿지 않았으니까. 저 달콤한 속삭임을.",
						"english": "Because I didn't believe. Those sweet whispers.",
						"japanese": "私は信じなかったからだ。あの甘い囁きを。",
						"chinese": "因为我不相信。那些甜蜜的低语。",
						"french": "Parce que je n'ai pas cru. À ces doux murmures.",
						"spanish": "Porque no creí. Esos dulces susurros.",
						"vietnamese": "Vì tôi không tin. Những lời thì thầm ngọt ngào đó.",
						"thai": "เพราะข้าไม่เชื่อ. เสียงกระซิบอันหอมหวานนั่น.",
						"hindi": "क्योंकि मैंने विश्वास नहीं किया। उन मीठी फुसफुसाहटों पर।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "바람 소리가 때때로 들려와. 슬픈 자장가처럼.",
						"english": "Sometimes the wind's sound reaches me. Like a sad lullaby.",
						"japanese": "風の音が時々聞こえてくる。悲しい子守唄のように。",
						"chinese": "风声时而传来。像一首悲伤的摇篮曲。",
						"french": "Le bruit du vent m'arrive parfois. Comme une triste berceuse.",
						"spanish": "A veces el sonido del viento me llega. Como una triste nana.",
						"vietnamese": "Đôi khi tiếng gió vọng đến. Như một bài ru buồn.",
						"thai": "บางครั้งเสียงลมก็พัดมาถึงฉัน. ราวกับเพลงกล่อมเด็กที่เศร้าสร้อย.",
						"hindi": "कभी-कभी हवा की आवाज़ मुझ तक पहुँचती है। एक उदास लोरी की तरह।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "날 붙잡으려 해. 하지만 난 알아. 그 끝은 허무뿐이라는 걸.",
						"english": "It tries to hold me. But I know. Its end is only emptiness.",
						"japanese": "私を捕らえようとする。だが私は知っている。その終わりは虚無だけだと。",
						"chinese": "它试图抓住我。但我知道。它的结局只有虚无。",
						"french": "Ça essaie de me retenir. Mais je sais. Sa fin n'est que vide.",
						"spanish": "Intenta retenerme. Pero sé. Su final es solo el vacío.",
						"vietnamese": "Nó cố giữ tôi lại. Nhưng tôi biết. Cuối cùng chỉ là hư vô.",
						"thai": "มันพยายามจะรั้งฉันไว้. แต่ฉันรู้ดี. จุดจบของมันมีแต่ความว่างเปล่า.",
						"hindi": "यह मुझे पकड़ने की कोशिश करता है। लेकिन मैं जानता हूँ। इसका अंत केवल शून्य है।"
					},
					"speaker": "finn"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter"
				},
				{
					"content": {
						"korean": "아직도 믿어? 저 빛이 너의 희망이라고?",
						"english": "Do you still believe? That light is your hope?",
						"japanese": "まだ信じるか？あの光がお前の希望だと？",
						"chinese": "你还相信吗？那道光是你的希望？",
						"french": "Tu y crois encore ? Que cette lumière est ton espoir ?",
						"spanish": "¿Todavía crees? ¿Que esa luz es tu esperanza?",
						"vietnamese": "Anh vẫn tin ư? Ánh sáng đó là hy vọng của anh sao?",
						"thai": "เจ้ายังคงเชื่ออีกหรือ? ว่าแสงนั้นคือความหวังของเจ้า?",
						"hindi": "क्या तुम्हें अभी भी विश्वास है? कि वह रोशनी तुम्हारी आशा है?"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…어쩌면. 아닐지도.",
						"english": "...Perhaps. Perhaps not.",
						"japanese": "…もしかしたら。違うかもしれない。",
						"chinese": "……也许。也许不是。",
						"french": "...Peut-être. Peut-être pas.",
						"spanish": "...Quizás. Quizás no.",
						"vietnamese": "…Có lẽ. Cũng có thể không.",
						"thai": "...บางที. อาจจะไม่ใช่.",
						"hindi": "...शायद। शायद नहीं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 돌아가. 지금이 마지막 기회야.",
						"english": "Then go back. This is your last chance.",
						"japanese": "なら戻れ。これが最後の機会だ。",
						"chinese": "那就回去吧。这是你最后的机会了。",
						"french": "Alors retourne-t'en. C'est ta dernière chance.",
						"spanish": "Entonces regresa. Esta es tu última oportunidad.",
						"vietnamese": "Vậy thì quay lại đi. Đây là cơ hội cuối cùng của ngươi.",
						"thai": "ถ้าอย่างนั้นก็กลับไปซะ นี่คือโอกาสสุดท้ายของเจ้าแล้ว",
						"hindi": "तो वापस जाओ। यह तुम्हारा आखिरी मौका है।"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아니. 끝까지 가야 해.",
						"english": "...No. I must go to the very end.",
						"japanese": "…いや。最後まで行かねばならない。",
						"chinese": "…不。我必须走到最后。",
						"french": "...Non. Je dois aller jusqu'au bout.",
						"spanish": "...No. Debo ir hasta el final.",
						"vietnamese": "...Không. Ta phải đi đến cùng.",
						"thai": "...ไม่ ข้าต้องไปให้สุดทาง",
						"hindi": "...नहीं। मुझे अंत तक जाना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…후회할 거다. 결국 모든 것이 녹아내릴 거야.",
						"english": "...You will regret it. In the end, everything will melt away.",
						"japanese": "…後悔するぞ。結局、すべてが溶けて消えるだろう。",
						"chinese": "…你会后悔的。最终，一切都将消融。",
						"french": "...Tu le regretteras. Au final, tout fondra.",
						"spanish": "...Lo lamentarás. Al final, todo se derretirá.",
						"vietnamese": "...Ngươi sẽ hối hận thôi. Cuối cùng, mọi thứ sẽ tan chảy.",
						"thai": "...เจ้าจะต้องเสียใจ ในที่สุดทุกสิ่งจะละลายหายไป",
						"hindi": "...तुम्हें पछतावा होगा। अंत में, सब कुछ पिघल जाएगा।"
					},
					"speaker": "finn"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "흥… 잠시 피했을 뿐. 너희는 결국… 사라진다.",
						"english": "Hmph... Merely a temporary evasion. You will all... vanish eventually.",
						"japanese": "フン…ほんの束の間の回避にすぎん。お前たちは結局…消え去るのだ。",
						"chinese": "哼…不过是暂时躲避。你们终将…消逝。",
						"french": "Hmpf... Une simple évasion temporaire. Vous finirez tous par... disparaître.",
						"spanish": "Hmph... Solo una evasión temporal. Al final... desapareceréis.",
						"vietnamese": "Hừm... Chỉ là tạm thời tránh né thôi. Các ngươi rốt cuộc... sẽ biến mất.",
						"thai": "หึ... แค่หลบเลี่ยงได้ชั่วคราวเท่านั้น พวกเจ้าทุกคน... ก็จะหายไปในที่สุด",
						"hindi": "हम्म... बस एक अस्थायी बचाव। तुम सब... आखिर में गायब हो जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…뭘 숨기고 있지?",
						"english": "...What are you hiding?",
						"japanese": "…何を隠している？",
						"chinese": "…你在隐藏什么？",
						"french": "...Que caches-tu ?",
						"spanish": "¿...Qué estás ocultando?",
						"vietnamese": "...Ngươi đang che giấu điều gì?",
						"thai": "...เจ้ากำลังซ่อนอะไรอยู่?",
						"hindi": "...तुम क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "승리했지만, 마음속은 더욱 차가워졌다. 빛은 여전히 기만적이었다.",
						"english": "Though victorious, my heart grew colder. The light remained deceitful.",
						"japanese": "勝利したが、心はさらに冷え込んだ。光は相変わらず欺瞞的だった。",
						"chinese": "虽已胜利，但内心却更加冰冷。光芒依然充满欺骗。",
						"french": "Bien que victor, mon cœur s'est refroidi davantage. La lumière restait trompeuse.",
						"spanish": "Aunque victorioso, mi corazón se enfrió aún más. La luz seguía siendo engañosa.",
						"vietnamese": "Dù đã chiến thắng, nhưng lòng ta lại càng lạnh giá. Ánh sáng vẫn lừa dối.",
						"thai": "แม้จะได้รับชัยชนะ แต่ใจก็ยิ่งหนาวเย็นลง แสงสว่างยังคงหลอกลวง",
						"hindi": "यद्यपि विजयी, मेरा हृदय और भी ठंडा हो गया। प्रकाश अभी भी कपटपूर्ण था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "허무의 발자국이 눈밭에 새겨졌다. 돌아갈 길은 없었다.",
						"english": "Footprints of emptiness etched in the snow. There was no way back.",
						"japanese": "虚無の足跡が雪原に刻まれた。引き返す道はなかった。",
						"chinese": "虚无的足迹刻在雪地上。已无归路。",
						"french": "Les empreintes du néant gravées dans la neige. Il n'y avait pas de retour possible.",
						"spanish": "Las huellas del vacío grabadas en la nieve. No había camino de regreso.",
						"vietnamese": "Dấu chân hư vô in hằn trên tuyết. Không còn đường quay lại.",
						"thai": "รอยเท้าแห่งความว่างเปล่าสลักอยู่บนหิมะ ไม่มีทางย้อนกลับแล้ว",
						"hindi": "शून्यता के पदचिह्न बर्फ पर अंकित हो गए। लौटने का कोई रास्ता नहीं था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 유적의 가장 깊은 곳에서 깨어났다.",
						"english": "A colossal shadow awakened in the deepest part of the ruins.",
						"japanese": "巨大な影が、遺跡の最も深い場所で目覚めた。",
						"chinese": "一道巨大的黑影在遗迹最深处苏醒了。",
						"french": "Une ombre colossale s'est éveillée dans la partie la plus profonde des ruines.",
						"spanish": "Una sombra colosal despertó en lo más profundo de las ruinas.",
						"vietnamese": "Một bóng tối khổng lồ đã thức tỉnh ở nơi sâu thẳm nhất của di tích.",
						"thai": "เงามหึมาตื่นขึ้นในส่วนที่ลึกที่สุดของซากปรักหักพัง",
						"hindi": "खंडहरों के सबसे गहरे हिस्से में एक विशाल छाया जागृत हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "드디어 여기까지 왔군. 어리석은 인간들.",
						"english": "So you've finally arrived. Foolish mortals.",
						"japanese": "ついにここまで来たか。愚かな人間どもめ。",
						"chinese": "你们终于走到这里了。愚蠢的人类。",
						"french": "Vous êtes enfin arrivés. Mortels insensés.",
						"spanish": "Así que finalmente habéis llegado. Mortales necios.",
						"vietnamese": "Cuối cùng ngươi cũng đến đây rồi. Những kẻ phàm trần ngu ngốc.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ มนุษย์โง่เขลาเอ๋ย",
						"hindi": "तो तुम आखिरकार आ गए। मूर्ख मनुष्य।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 것을 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこのすべてを企んだのか？",
						"chinese": "这一切都是你策划的吗？",
						"french": "Est-ce toi qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao?",
						"thai": "เจ้าเป็นคนบงการเรื่องทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने यह सब रचा था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "꾸민 것이 아니라, 보여준 것뿐. 너희의 운명을.",
						"english": "Not orchestrated, merely revealed. Your destiny.",
						"japanese": "企んだのではない、ただ見せつけただけだ。お前たちの運命を。",
						"chinese": "不是策划，只是展现。你们的命运。",
						"french": "Non pas orchestré, seulement révélé. Votre destin.",
						"spanish": "No orquestado, solo revelado. Vuestro destino.",
						"vietnamese": "Không phải dàn xếp, chỉ là đã cho thấy. Vận mệnh của các ngươi.",
						"thai": "ไม่ได้บงการ เพียงแค่แสดงให้เห็นเท่านั้น ชะตากรรมของพวกเจ้า",
						"hindi": "रचा नहीं, बस दिखाया। तुम्हारा भाग्य।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "finn",
					"direction": "down",
					"type": "direction"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 발걸음은 파멸을 향할 뿐. 멈출 수 없어.",
						"english": "Your steps lead only to ruin. You cannot stop.",
						"japanese": "お前の足取りは破滅へと向かうだけ。止めることはできない。",
						"chinese": "你的脚步只会走向毁灭。无法停止。",
						"french": "Tes pas ne mènent qu'à la ruine. Tu ne peux pas t'arrêter.",
						"spanish": "Tus pasos solo conducen a la ruina. No puedes detenerte.",
						"vietnamese": "Bước chân ngươi chỉ hướng về sự hủy diệt. Không thể dừng lại.",
						"thai": "ก้าวเดินของเจ้ามีแต่จะนำไปสู่ความพินาศ หยุดไม่ได้แล้ว",
						"hindi": "तुम्हारे कदम केवल विनाश की ओर बढ़ेंगे। रुक नहीं सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기 안 해.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わってない。諦めない。",
						"chinese": "……还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบหรอก. ฉันไม่ยอมแพ้.",
						"hindi": "...अभी खत्म नहीं हुआ। मैं हार नहीं मानूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "그럼 계속 헤매어라. 영원히.",
						"english": "Then keep wandering. Forever.",
						"japanese": "ならば、永遠に彷徨い続けろ。",
						"chinese": "那就继续彷徨吧。永无止境。",
						"french": "Alors, continue d'errer. Pour toujours.",
						"spanish": "Entonces, sigue vagando. Para siempre.",
						"vietnamese": "Vậy thì hãy tiếp tục lang thang đi. Mãi mãi.",
						"thai": "ถ้าอย่างนั้นก็จงหลงทางต่อไป. ชั่วนิรันดร์.",
						"hindi": "तो भटकते रहो। हमेशा के लिए।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 설원, 얼어붙은 고대 유적.",
			"북극광이 이끄는 길은, 과연 희망일까.",
			"냉소적인 생존자는 속삭였다. 파멸뿐이라고.",
			"점점 더 깊어지는 의심 속에서, 우리는 나아갔다."
		],
		"english": [
			"Endless snowfield, frozen ancient ruins.",
			"Is the path guided by the aurora borealis truly hope?",
			"The cynical survivor whispered, \"Only ruin.\"",
			"Amidst deepening doubt, we pressed on."
		],
		"japanese": [
			"果てしない雪原、凍てついた古代遺跡。",
			"オーロラが導く道は、果たして希望なのか。",
			"冷笑的な生存者は囁いた。「破滅あるのみだ。」",
			"深まる疑念の中、私たちは進んだ。"
		],
		"chinese": [
			"无尽的雪原，冰封的古代遗迹。",
			"北极光指引的道路，果真是希望吗？",
			"玩世不恭的幸存者低语道：“唯有毁灭。”",
			"在日益加深的疑虑中，我们继续前行。"
		],
		"french": [
			"Plaine enneigée infinie, ruines antiques gelées.",
			"Le chemin guidé par les aurores boréales est-il vraiment l'espoir ?",
			"Le survivant cynique murmura : \"Seule la ruine.\"",
			"Au milieu d'un doute grandissant, nous avons continué."
		],
		"spanish": [
			"Campo de nieve interminable, ruinas antiguas congeladas.",
			"¿Es el camino guiado por la aurora boreal realmente esperanza?",
			"El cínico superviviente susurró: \"Sólo la ruina.\"",
			"En medio de una duda cada vez más profunda, seguimos adelante."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, tàn tích cổ đại đóng băng.",
			"Con đường cực quang dẫn lối, liệu có phải là hy vọng?",
			"Người sống sót hoài nghi thì thầm. \"Chỉ có sự hủy diệt.\"",
			"Trong sự nghi ngờ ngày càng sâu sắc, chúng tôi tiếp tục tiến lên."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด, ซากปรักหักพังโบราณที่เยือกแข็ง",
			"เส้นทางที่แสงเหนือชี้นำนั้น, แท้จริงแล้วคือความหวังหรือเปล่า",
			"ผู้รอดชีวิตที่เย้ยหยันกระซิบว่า \"มีแต่ความพินาศเท่านั้น\"",
			"ท่ามกลางความสงสัยที่ลึกซึ้งขึ้น, เรายังคงก้าวต่อไป"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान, जमी हुई प्राचीन खंडहर।",
			"क्या उत्तरी रोशनी द्वारा निर्देशित मार्ग वास्तव में आशा है?",
			"सनकी उत्तरजीवी ने फुसफुसाया, \"केवल विनाश।\"",
			"गहराते संदेह के बीच, हम आगे बढ़ते रहे।"
		]
	}
} as const;
