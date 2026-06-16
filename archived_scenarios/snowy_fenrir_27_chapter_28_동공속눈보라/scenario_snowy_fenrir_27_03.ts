export const scenario_snowy_fenrir_27_03 = {
	"scenario_id": "snowy_fenrir_27_03",
	"order": 3,
	"act": "rising",
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
			"늑대의 동공은 모든 것을 삼키는 심연이었다.",
			"위장이 아닌 통로. 무엇이든 빨아들이는 길.",
			"에이라는 그 비밀을 기록하려 했다.",
			"그 끝없는 통로 속에서, 새로운 그림자가 나타났다."
		],
		"english": [
			"The wolf's pupil was an abyss that swallowed everything.",
			"Not a stomach, but a passage. A path that absorbed everything.",
			"Aira tried to record that secret.",
			"Within that endless passage, a new shadow appeared."
		],
		"japanese": [
			"狼の瞳孔はすべてを飲み込む深淵だった。",
			"胃ではなく通路。すべてを吸い込む道。",
			"エイラはその秘密を記録しようとした。",
			"その果てしない通路の中で、新たな影が現れた。"
		],
		"chinese": [
			"狼的瞳孔是吞噬一切的深渊。",
			"不是胃，而是通道。吸食一切的路径。",
			"艾拉试图记录那个秘密。",
			"在那无尽的通道中，一个新的影子出现了。"
		],
		"french": [
			"La pupille du loup était un abîme qui dévorait tout.",
			"Pas un estomac, mais un passage. Un chemin qui aspirait tout.",
			"Aira tenta de consigner ce secret.",
			"Dans ce passage sans fin, une nouvelle ombre apparut."
		],
		"spanish": [
			"La pupila del lobo era un abismo que lo devoraba todo.",
			"No un estómago, sino un pasaje. Un camino que absorbía todo.",
			"Aira intentó registrar ese secreto.",
			"Dentro de ese pasaje interminable, una nueva sombra apareció."
		],
		"vietnamese": [
			"Đồng tử của sói là vực thẳm nuốt chửng mọi thứ.",
			"Không phải dạ dày, mà là một lối đi. Con đường hút mọi thứ.",
			"Aira đã cố gắng ghi lại bí mật đó.",
			"Trong lối đi vô tận đó, một bóng tối mới đã xuất hiện."
		],
		"thai": [
			"ม่านตาของหมาป่าคือห้วงเหวที่กลืนกินทุกสิ่ง",
			"ไม่ใช่กระเพาะ แต่เป็นทางผ่าน ทางที่ดูดกลืนทุกสิ่ง",
			"ไอร่าพยายามจะบันทึกความลับนั้น",
			"ภายในทางเดินที่ไม่มีที่สิ้นสุดนั้น เงาใหม่ได้ปรากฏขึ้น"
		],
		"hindi": [
			"भेड़िये की पुतली सब कुछ निगलने वाली खाई थी।",
			"पेट नहीं, बल्कि एक मार्ग। सब कुछ सोखने वाला रास्ता।",
			"ऐरा ने उस रहस्य को रिकॉर्ड करने की कोशिश की।",
			"उस अंतहीन मार्ग के भीतर, एक नई छाया प्रकट हुई।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 거대한 입이 닫히자, 먹힌 사체가 그대로 동공 속으로 빨려 들어갔다.",
						"english": "As the wolf's colossal maw closed, the devoured corpse was sucked directly into its pupil.",
						"japanese": "狼の巨大な口が閉じると、食われた死体はそのまま瞳孔の中に吸い込まれていった。",
						"chinese": "随着狼的巨口闭合，被吞噬的尸体直接被吸入瞳孔中。",
						"french": "Quand la gueule colossale du loup se referma, le cadavre dévoré fut aspiré directement dans sa pupille.",
						"spanish": "Cuando la colosal boca del lobo se cerró, el cadáver devorado fue absorbido directamente por su pupila.",
						"vietnamese": "Khi cái miệng khổng lồ của sói khép lại, cái xác bị nuốt chửng đã bị hút thẳng vào đồng tử của nó.",
						"thai": "เมื่อปากอันมหึมาของหมาป่าปิดลง ศพที่ถูกกินก็ถูกดูดเข้าไปในม่านตาโดยตรง",
						"hindi": "जैसे ही भेड़िये का विशालकाय मुँह बंद हुआ, खाया गया शव सीधे उसकी पुतली में समा गया।"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "신기록이군요. 소화가 아니라… 증발에 가깝습니다.",
						"english": "A new record. It's not digestion... it's closer to evaporation.",
						"japanese": "新記録ですね。消化ではなく…蒸発に近い。",
						"chinese": "这是新纪录。不是消化……更像是蒸发。",
						"french": "Un nouveau record. Ce n'est pas de la digestion... c'est plus proche de l'évaporation.",
						"spanish": "Un nuevo récord. No es digestión... es más bien evaporación.",
						"vietnamese": "Một kỷ lục mới. Không phải tiêu hóa… mà gần như là bốc hơi.",
						"thai": "สถิติใหม่เลยนะครับ ไม่ใช่การย่อย... แต่มันใกล้เคียงกับการระเหย",
						"hindi": "एक नया रिकॉर्ड। यह पाचन नहीं है... यह वाष्पीकरण के करीब है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 안이 도대체 뭐길래 저렇게 순식간에?",
						"english": "What on earth is in there that makes it happen so instantaneously?",
						"japanese": "あの中は一体何なんだ、あんなに瞬時に？",
						"chinese": "里面到底是什么，竟然这么快？",
						"french": "Mais qu'y a-t-il là-dedans pour que ça se produise aussi instantanément ?",
						"spanish": "¿Qué hay ahí dentro para que ocurra tan instantáneamente?",
						"vietnamese": "Bên trong đó rốt cuộc là cái gì mà nhanh đến vậy?",
						"thai": "ข้างในนั้นมันคืออะไรกันแน่ ทำไมถึงเร็วขนาดนั้น?",
						"hindi": "आखिर उसके अंदर क्या है कि ऐसा पल भर में हो जाता है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "사라진 경로를 추적 중입니다. 내부의 눈보라가 흔적을 지워버리는군요.",
						"english": "Tracking the disappeared path. The internal blizzard is erasing the traces.",
						"japanese": "消滅した経路を追跡中です。内部の吹雪が痕跡を消し去っています。",
						"chinese": "正在追踪消失的路径。里面的暴风雪正在抹去痕迹。",
						"french": "Nous traquons le chemin disparu. La tempête de neige interne efface les traces.",
						"spanish": "Estamos rastreando la ruta desaparecida. La ventisca interna está borrando las huellas.",
						"vietnamese": "Đang theo dõi đường đi đã biến mất. Cơn bão tuyết bên trong đang xóa sạch dấu vết.",
						"thai": "กำลังติดตามเส้นทางที่หายไป พายุหิมะภายในกำลังลบร่องรอย",
						"hindi": "गायब हुए रास्ते का पता लगा रहे हैं। अंदरूनी बर्फीला तूफान निशानों को मिटा रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "위장이 아니란 소리야?",
						"english": "You mean it's not a stomach?",
						"japanese": "胃じゃないってことか？",
						"chinese": "你的意思是，这不是胃？",
						"french": "Tu veux dire que ce n'est pas un estomac ?",
						"spanish": "¿Quieres decir que no es un estómago?",
						"vietnamese": "Ý anh là đó không phải là dạ dày?",
						"thai": "หมายความว่าไม่ใช่กระเพาะเหรอ?",
						"hindi": "तुम्हारा मतलब है कि यह पेट नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "…아마도요. 이런 식으로 삼킨다면, 늑대의 몸은 이미 산맥만 해야 할 겁니다.",
						"english": "...Probably. If it swallowed things this way, the wolf's body would already have to be as large as a mountain range.",
						"japanese": "…おそらく。こんな風に飲み込んでいるなら、狼の体はもう山脈ほどになっているはずです。",
						"chinese": "……也许吧。如果它以这种方式吞噬，那狼的身体早就该像山脉一样大了。",
						"french": "...Probablement. S'il avalait les choses de cette manière, le corps du loup devrait déjà être aussi grand qu'une chaîne de montagnes.",
						"spanish": "...Probablemente. Si tragara cosas de esta manera, el cuerpo del lobo ya debería ser tan grande como una cadena montañosa.",
						"vietnamese": "…Có lẽ vậy. Nếu nó nuốt mọi thứ theo cách này, cơ thể của con sói đã phải to lớn như một dãy núi rồi.",
						"thai": "...น่าจะใช่ ถ้ามันกลืนกินแบบนี้ ตัวหมาป่าคงจะใหญ่เท่าเทือกเขาไปแล้ว",
						"hindi": "...शायद। अगर यह इस तरह से निगलता, तो भेड़िये का शरीर अब तक एक पर्वत श्रृंखला जितना बड़ा हो चुका होता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 저 안은… 그냥 길이라는 거야?",
						"english": "So that inside… it's just a path?",
						"japanese": "じゃあ、あの中は…ただの道だって言うの？",
						"chinese": "那么里面……就只是一条路吗？",
						"french": "Alors, là-dedans… c'est juste un chemin ?",
						"spanish": "¿Entonces eso de ahí… es solo un camino?",
						"vietnamese": "Vậy bên trong đó… chỉ là một con đường thôi sao?",
						"thai": "งั้นข้างในนั่น...ก็แค่ทางเดินงั้นเหรอ?",
						"hindi": "तो अंदर… बस एक रास्ता है?"
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 확실해졌습니다. 삼켜진 것들은 위장에 머물지 않고 동공 너머로 사라지는군요.",
						"english": "It's clearer now. What's swallowed doesn't stay in the stomach; it vanishes beyond the pupils.",
						"japanese": "よりはっきりしました。飲み込まれたものは胃に留まらず、瞳孔の向こうへ消えていくようです。",
						"chinese": "现在更清楚了。被吞噬的东西并没有留在胃里，而是消失在瞳孔之外。",
						"french": "C'est plus clair maintenant. Ce qui est avalé ne reste pas dans l'estomac ; ça disparaît au-delà des pupilles.",
						"spanish": "Ahora es más claro. Lo que es tragado no permanece en el estómago; desaparece más allá de las pupilas.",
						"vietnamese": "Đã rõ hơn rồi. Những thứ bị nuốt chửng không nằm trong dạ dày, mà biến mất sau đồng tử.",
						"thai": "ชัดเจนยิ่งขึ้นแล้ว สิ่งที่ถูกกลืนกินไม่ได้อยู่ในกระเพาะ แต่มันหายไปเลย ณ เบื้องหลังม่านตา",
						"hindi": "यह अब और स्पष्ट है। जो निगल लिया गया, वह पेट में नहीं रहता; वह पुतलियों से परे गायब हो जाता है।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "대체 어디로 가는 길인데?",
						"english": "A path to where, exactly?",
						"japanese": "一体どこへ続く道なんだ？",
						"chinese": "这究竟是通往何处的路？",
						"french": "Un chemin vers où, exactement ?",
						"spanish": "¿Un camino hacia dónde, exactamente?",
						"vietnamese": "Rốt cuộc là con đường đi đến đâu?",
						"thai": "ทางไปที่ไหนกันแน่?",
						"hindi": "आखिर यह रास्ता कहाँ जाता है?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 나의 통로를 엿보는가?",
						"english": "How dare you glimpse my passage?",
						"japanese": "よくも私の通路を覗き見るとは？",
						"chinese": "竟敢窥探我的通路？",
						"french": "Oserez-vous jeter un coup d'œil à mon passage ?",
						"spanish": "¿Te atreves a espiar mi pasaje?",
						"vietnamese": "Ngươi dám rình mò thông lộ của ta sao?",
						"thai": "บังอาจมาแอบมองทางเดินของข้ารึ?",
						"hindi": "मेरी सुरंग में झाँकने की हिम्मत कैसे हुई?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구냐!",
						"english": "Who are you!",
						"japanese": "誰だ！",
						"chinese": "你是谁！",
						"french": "Qui êtes-vous !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "ใครน่ะ!",
						"hindi": "कौन हो तुम!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 이 길의 수호자. {random_boss}다.",
						"english": "I am the guardian of this path. {random_boss}.",
						"japanese": "我はこの道の守護者、{random_boss}だ。",
						"chinese": "我是这条路的守护者，{random_boss}。",
						"french": "Je suis le gardien de ce chemin. {random_boss}.",
						"spanish": "Soy el guardián de este camino. {random_boss}.",
						"vietnamese": "Ta là kẻ bảo hộ con đường này. {random_boss}.",
						"thai": "ข้าคือผู้พิทักษ์เส้นทางนี้ {random_boss}",
						"hindi": "मैं इस रास्ते का रखवाला हूँ। {random_boss}।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "통로는 어둡고 차가웠다. 끝없이 빨려 드는 감각이 온몸을 조여왔다.",
						"english": "The passage was dark and cold. An endless sucking sensation gripped my entire body.",
						"japanese": "通路は暗く、冷たかった。果てしなく吸い込まれるような感覚が全身を締め付けた。",
						"chinese": "通道又黑又冷。无尽的吸力紧紧攫住了我的全身。",
						"french": "Le passage était sombre et froid. Une sensation d'aspiration infinie serrait tout mon corps.",
						"spanish": "El pasaje era oscuro y frío. Una sensación de succión interminable apretaba todo mi cuerpo.",
						"vietnamese": "Lối đi tối tăm và lạnh lẽo. Cảm giác bị hút vào vô tận siết chặt toàn thân.",
						"thai": "ทางเดินมืดมิดและหนาวเย็น ความรู้สึกเหมือนถูกดูดดึงไม่รู้จบได้รัดรึงทั่วร่างกาย",
						"hindi": "मार्ग अँधेरा और ठंडा था। एक अंतहीन खिंचाव की अनुभूति पूरे शरीर को जकड़ रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이것은 단순한 통로가 아닙니다. 어떤 목적을 가진… 길입니다.",
						"english": "This is no mere passage. It is a path… with a purpose.",
						"japanese": "これは単なる通路ではありません。ある目的を持った…道です。",
						"chinese": "这不是简单的通道。这是一条……有目的的路。",
						"french": "Ce n'est pas un simple passage. C'est un chemin… avec un but.",
						"spanish": "Esto no es un simple pasaje. Es un camino… con un propósito.",
						"vietnamese": "Đây không phải là một lối đi đơn thuần. Đây là một con đường… có mục đích.",
						"thai": "นี่ไม่ใช่แค่ทางเดินธรรมดา แต่มันคือเส้นทาง...ที่มีจุดประสงค์บางอย่าง",
						"hindi": "यह केवल एक मार्ग नहीं है। यह एक उद्देश्य वाला… रास्ता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "목적이라니? 어디로 이어지는데?",
						"english": "A purpose? Where does it lead?",
						"japanese": "目的だと？どこへ繋がっているんだ？",
						"chinese": "目的？通往何处？",
						"french": "Un but ? Où mène-t-il ?",
						"spanish": "¿Un propósito? ¿A dónde lleva?",
						"vietnamese": "Mục đích ư? Dẫn đến đâu?",
						"thai": "จุดประสงค์อะไร? มันนำไปที่ไหน?",
						"hindi": "एक उद्देश्य? यह कहाँ ले जाता है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희 같은 미물들이 알 필요 없는 곳이다. 그저… 사라지기만 하면 된다.",
						"english": "It's a place insignificant beings like you needn't know. You merely… need to vanish.",
						"japanese": "お前たちのような取るに足らない者たちが知る必要のない場所だ。ただ…消え去ればよい。",
						"chinese": "那是你们这些渺小的生物无需知道的地方。你们只需……消失就行了。",
						"french": "C'est un endroit que des êtres insignifiants comme vous n'ont pas besoin de connaître. Vous devez juste… disparaître.",
						"spanish": "Es un lugar que seres insignificantes como ustedes no necesitan conocer. Solo… tienen que desaparecer.",
						"vietnamese": "Đó là nơi mà những sinh vật nhỏ bé như các ngươi không cần phải biết. Các ngươi chỉ cần… biến mất mà thôi.",
						"thai": "มันคือสถานที่ที่สิ่งมีชีวิตเล็กน้อยอย่างพวกเจ้าไม่จำเป็นต้องรู้ แค่...หายไปก็พอแล้ว",
						"hindi": "यह ऐसी जगह है जिसे तुम जैसे तुच्छ प्राणियों को जानने की ज़रूरत नहीं। तुम्हें बस… गायब हो जाना है।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 사라진다고 끝날 줄 알아?",
						"english": "Do you think it'll end if we disappear?",
						"japanese": "私たちが消えれば終わると思う？",
						"chinese": "你们以为我们消失了就能结束吗？",
						"french": "Penses-tu que tout s'arrêtera si nous disparaissons ?",
						"spanish": "¿Crees que terminará si desaparecemos?",
						"vietnamese": "Ngươi nghĩ mọi chuyện sẽ kết thúc nếu chúng ta biến mất sao?",
						"thai": "คิดว่าจะจบถ้าเราหายไปเหรอ?",
						"hindi": "क्या तुम्हें लगता है कि हमारे गायब होने से सब खत्म हो जाएगा?"
					},
					"emotion": "angry",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "끝없는 통로에 온 것을 환영한다. 여기서 너희의 존재도 녹아내릴 것이다.",
						"english": "Welcome to the endless passage. Here, even your existence will melt away.",
						"japanese": "終わりなき通路へようこそ。ここでは、お前たちの存在も溶け落ちるだろう。",
						"chinese": "欢迎来到无尽的通道。在这里，你们的存在也会消融。",
						"french": "Bienvenue dans le passage sans fin. Ici, même votre existence s'évanouira.",
						"spanish": "Bienvenidos al pasaje interminable. Aquí, vuestra existencia misma se disolverá.",
						"vietnamese": "Chào mừng đến với hành lang vô tận. Tại đây, sự tồn tại của các ngươi cũng sẽ tan biến.",
						"thai": "ยินดีต้อนรับสู่ทางเดินที่ไม่มีที่สิ้นสุด ที่นี่แม้แต่การมีอยู่ของเจ้าก็จะละลายหายไป",
						"hindi": "अंतहीन गलियारे में तुम्हारा स्वागत है। यहाँ, तुम्हारा अस्तित्व भी पिघल जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 우린 여기서 답을 찾을 거야!",
						"english": "Don't make me laugh! We'll find the answer here!",
						"japanese": "ふざけるな！ここで答えを見つける！",
						"chinese": "别开玩笑了！我们会在Ε这里找到答案！",
						"french": "Ne me fais pas rire ! Nous trouverons la réponse ici !",
						"spanish": "¡No me hagas reír! ¡Encontraremos la respuesta aquí!",
						"vietnamese": "Đừng có đùa! Chúng ta sẽ tìm ra câu trả lời ở đây!",
						"thai": "อย่ามาล้อเล่น! เราจะหาคำตอบที่นี่แหละ!",
						"hindi": "हँसाओ मत! हम यहीं जवाब ढूँढेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석군. 이 길은 단지 모든 것을 되돌려보낼 뿐이다. 너희의 몸도, 마음도, 결국엔 시작점으로.",
						"english": "Foolish. This path merely returns everything. Your bodies, your minds, and eventually, to the starting point.",
						"japanese": "愚かだな。この道は、ただ全てを元に戻すだけだ。お前たちの体も、心も、そして結局は、始まりの場所へ。",
						"chinese": "愚蠢。这条路只会让一切回归。你们的身体，思想，最终都会回到起点。",
						"french": "Insensés. Ce chemin ne fait que tout ramener. Vos corps, vos esprits, et finalement, au point de départ.",
						"spanish": "Necios. Este camino simplemente devuelve todo. Vuestros cuerpos, vuestras mentes, y finalmente, al punto de partida.",
						"vietnamese": "Ngu xuẩn. Con đường này chỉ đơn thuần trả mọi thứ về. Cơ thể, tâm trí của các ngươi, và cuối cùng, về điểm khởi đầu.",
						"thai": "โง่เขลา เส้นทางนี้เพียงแค่ส่งทุกสิ่งกลับไป ร่างกายของเจ้า จิตใจของเจ้า และในที่สุดก็กลับสู่จุดเริ่มต้น",
						"hindi": "मूर्खता। यह रास्ता बस सब कुछ वापस लौटा देता है। तुम्हारे शरीर, तुम्हारा मन, और अंततः, शुरुआती बिंदु पर।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는… 그저… 길을 지키는 존재일 뿐… 진짜 시작은… 저 너머에…",
						"english": "Ugh… I… am merely… a guardian of the path… The true beginning… lies beyond…",
						"japanese": "くっ…私は…ただ…道を守る存在…本当の始まりは…その先に…",
						"chinese": "呃…我…只是…守护这条路的…存在…真正的开始…在那边…",
						"french": "Urgh… Je… ne suis… qu'un gardien du chemin… Le vrai début… est au-delà…",
						"spanish": "Ugh… Yo… solo soy… un guardián del camino… El verdadero comienzo… está más allá…",
						"vietnamese": "Ư… ta… chỉ là… kẻ canh giữ con đường… Khởi đầu thật sự… ở phía bên kia…",
						"thai": "อึก… ข้า… เป็นเพียง… ผู้พิทักษ์เส้นทาง… จุดเริ่มต้นที่แท้จริง… อยู่เหนือสิ่งนั้นไป…",
						"hindi": "उफ़… मैं… बस… रास्ते का रखवाला हूँ… असली शुरुआत… उस पार है…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 저 너머에 뭐가 있는데?",
						"english": "What are you talking about? What's beyond there?",
						"japanese": "何を言ってる？その先に何があるの？",
						"chinese": "你在说什么？那一边有什么？",
						"french": "De quoi parles-tu ? Qu'y a-t-il au-delà ?",
						"spanish": "¿De qué hablas? ¿Qué hay más allá?",
						"vietnamese": "Ngươi nói gì vậy? Phía bên kia có gì?",
						"thai": "พูดอะไรน่ะ? มีอะไรอยู่ตรงนั้น?",
						"hindi": "क्या कह रहे हो? उस पार क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "놀랍군요… 이 룬… 저 너머는… 늑대의 심장이 있던 자리와 연결되어 있습니다.",
						"english": "Amazing… This rune… the beyond… is connected to where the wolf's heart once was.",
						"japanese": "驚きだ…このルーン…その先は…狼の心臓があった場所と繋がっている。",
						"chinese": "真是惊人…这个符文…那一边…与狼的心脏所在之处相连。",
						"french": "Incroyable… Cette rune… l'au-delà… est connectée à l'endroit où se trouvait le cœur du loup.",
						"spanish": "Asombroso… Esta runa… el más allá… está conectada con el lugar donde estaba el corazón del lobo.",
						"vietnamese": "Thật kinh ngạc… Cổ ngữ này… phía bên kia… được kết nối với nơi trái tim của sói từng ở.",
						"thai": "น่าทึ่ง… รูนนี้… ที่อยู่เหนือสิ่งนั้นไป… เชื่อมต่อกับที่ที่หัวใจของหมาป่าเคยอยู่",
						"hindi": "आश्चर्यजनक… यह रुन… उस पार… वहीं से जुड़ा है जहाँ भेड़िये का दिल था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 몸을 관통하는 통로가 열렸다. 그 끝에는 거대한 심장이 뛰고 있었다.",
						"english": "A passage piercing the wolf's body has opened. At its end, a colossal heart was beating.",
						"japanese": "狼の体を貫く通路が開かれた。その先には、巨大な心臓が脈打っていた。",
						"chinese": "贯穿狼身体的通道打开了。它的尽头，一颗巨大的心脏正在跳动。",
						"french": "Un passage transperçant le corps du loup s'est ouvert. À son extrémité, un cœur colossal battait.",
						"spanish": "Se ha abierto un pasaje que atraviesa el cuerpo del lobo. Al final, un corazón colosal latía.",
						"vietnamese": "Một lối đi xuyên qua cơ thể sói đã mở ra. Ở cuối con đường đó, một trái tim khổng lồ đang đập.",
						"thai": "ทางเดินที่ทะลุผ่านร่างของหมาป่าได้เปิดออก ที่ปลายทางนั้นมีหัวใจขนาดยักษ์กำลังเต้นอยู่",
						"hindi": "भेड़िये के शरीर को भेदता हुआ एक मार्ग खुल गया। उसके अंत में, एक विशाल हृदय धड़क रहा था।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "포기해라. 이 통로는 모든 것을 집어삼킨다. 너희의 희망까지도.",
						"english": "Give up. This passage devours everything. Even your hope.",
						"japanese": "諦めろ。この通路は全てを飲み込む。お前たちの希望さえも。",
						"chinese": "放弃吧。这条通道吞噬一切。甚至你们的希望。",
						"french": "Abandonnez. Ce passage dévore tout. Même votre espoir.",
						"spanish": "Rendíos. Este pasaje devora todo. Incluso vuestra esperanza.",
						"vietnamese": "Bỏ cuộc đi. Lối đi này nuốt chửng mọi thứ. Ngay cả hy vọng của các ngươi.",
						"thai": "ยอมแพ้ซะ ทางเดินนี้กลืนกินทุกสิ่ง แม้แต่ความหวังของพวกเจ้า",
						"hindi": "हार मान लो। यह मार्ग सब कुछ निगल जाता है। तुम्हारी आशा भी।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 아직… 아니야… 우리는… 여기서 멈출 수 없어…!",
						"english": "No… not yet… no… We… cannot stop here…!",
						"japanese": "いや…まだ…違う…私たちは…ここで止まれない…！",
						"chinese": "不…还没…不行…我们…不能停在这里…！",
						"french": "Non… pas encore… non… Nous… ne pouvons pas nous arrêter ici… !",
						"spanish": "No… todavía no… no… ¡No podemos detenernos aquí…!",
						"vietnamese": "Không… vẫn chưa… không được… Chúng ta… không thể dừng lại ở đây…!",
						"thai": "ไม่… ยัง… ไม่ใช่… เรา… หยุดตรงนี้ไม่ได้…!",
						"hindi": "नहीं… अभी नहीं… नहीं… हम… यहाँ रुक नहीं सकते…!"
					}
				}
			]
		}
	]
} as const;
