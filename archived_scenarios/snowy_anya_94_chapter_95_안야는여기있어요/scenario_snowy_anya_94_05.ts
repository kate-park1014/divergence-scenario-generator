export const scenario_snowy_anya_94_05 = {
	"scenario_id": "snowy_anya_94_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_109"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "절벽 끝, 거대한 얼음 조각상이 빛을 머금고 서 있었다.",
						"english": "At the cliff's edge, a massive ice sculpture stood, imbued with light.",
						"japanese": "崖の端に、巨大な氷の彫像が光を宿して立っていた。",
						"chinese": "悬崖边，一座巨大的冰雕沐浴在光中。",
						"french": "Au bord de la falaise, une immense sculpture de glace se dressait, imprégnée de lumière.",
						"spanish": "Al borde del acantilado, una gigantesca escultura de hielo se alzaba, irradiando luz.",
						"vietnamese": "Bên rìa vách đá, một bức tượng băng khổng lồ đứng đó, rực rỡ ánh sáng.",
						"thai": "ที่ปลายผา รูปปั้นน้ำแข็งขนาดใหญ่ยืนอยู่ท่ามกลางแสงสว่าง",
						"hindi": "चट्टान के किनारे पर, एक विशाल बर्फ की मूर्ति रोशनी से चमक रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저게… 안야의 빛?",
						"english": "Is that... Anya's light?",
						"japanese": "あれは…アンヤの光？",
						"chinese": "那是……安雅的光芒？",
						"french": "Est-ce... la lumière d'Anya ?",
						"spanish": "¿Es eso... la luz de Anya?",
						"vietnamese": "Đó có phải... ánh sáng của Anya?",
						"thai": "นั่นคือ... แสงของอันยา?",
						"hindi": "क्या वह... अन्या की रोशनी है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "빛이 굳어가고 있어. 투명한 얼음처럼.",
						"english": "The light is solidifying. Like transparent ice.",
						"japanese": "光が固まっていく。透明な氷のように。",
						"chinese": "光芒正在凝固。如同透明的冰。",
						"french": "La lumière se solidifie. Comme de la glace transparente.",
						"spanish": "La luz se está solidificando. Como hielo transparente.",
						"vietnamese": "Ánh sáng đang đông đặc lại. Như băng trong suốt.",
						"thai": "แสงกำลังแข็งตัวขึ้น เหมือนน้ำแข็งใส",
						"hindi": "प्रकाश जम रहा है। पारदर्शी बर्फ की तरह।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "그럼 안에… 아이가?",
						"english": "Then inside... a child?",
						"japanese": "なら中に… 子供が？",
						"chinese": "那么里面… 是个孩子？",
						"french": "Alors à l'intérieur... un enfant ?",
						"spanish": "¿Entonces dentro... un niño?",
						"vietnamese": "Vậy bên trong… có một đứa trẻ ư?",
						"thai": "แล้วข้างใน... มีเด็ก?",
						"hindi": "तो अंदर... एक बच्चा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "흐릿하게… 보여.",
						"english": "It's blurry... I can see it.",
						"japanese": "ぼんやりと… 見える。",
						"chinese": "模模糊糊地… 看得见。",
						"french": "Flou... je le vois.",
						"spanish": "Borroso... lo veo.",
						"vietnamese": "Mờ mịt… tôi thấy rồi.",
						"thai": "เลือนลาง... มองเห็น",
						"hindi": "धुंधला... दिख रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "눈보라 속에 희미한 환영들이…",
						"english": "Faint illusions in the blizzard...",
						"japanese": "吹雪の中に、かすかな幻影が…。",
						"chinese": "暴风雪中，模糊的幻影…",
						"french": "De faibles illusions dans le blizzard...",
						"spanish": "Débiles ilusiones en la ventisca...",
						"vietnamese": "Những ảo ảnh mờ nhạt trong bão tuyết…",
						"thai": "ภาพลวงตาจางๆ ท่ามกลางพายุหิมะ...",
						"hindi": "बर्फीले तूफान में धुंधले भ्रम..."
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "사람이잖아? 저 멀리…",
						"english": "Is that a person? Far in the distance...",
						"japanese": "人だろ？ あの遠くに…。",
						"chinese": "是人吗？在那遥远的地方…",
						"french": "C'est une personne, non ? Au loin...",
						"spanish": "¿Es una persona? Allá a lo lejos...",
						"vietnamese": "Là người ư? Tít đằng xa kia…",
						"thai": "นั่นคนใช่ไหม? ไกลออกไป...",
						"hindi": "वो कोई इंसान है? बहुत दूर..."
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안야의 가족일까… 이젠 닿을 수 없는.",
						"english": "Anya's family, perhaps... unreachable now.",
						"japanese": "アーニャの家族だろうか… もう届かない。",
						"chinese": "也许是安雅的家人… 如今已无法触及。",
						"french": "La famille d'Anya, peut-être... inatteignable maintenant.",
						"spanish": "La familia de Anya, quizás... inalcanzable ahora.",
						"vietnamese": "Có lẽ là gia đình của Anya… giờ đã không thể chạm tới.",
						"thai": "ครอบครัวของอันยาหรือเปล่า... ที่ตอนนี้เอื้อมไม่ถึงแล้ว",
						"hindi": "शायद अन्या का परिवार... अब पहुंच से बाहर।"
					},
					"type": "speech",
					"speaker": "inka"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "얼음 속 아이의 손이… 바깥을 향해 뻗고 있어.",
						"english": "The child's hand in the ice... reaching outwards.",
						"japanese": "氷の中の子供の手が… 外へ伸びている。",
						"chinese": "冰中的孩子的手… 正向外伸展。",
						"french": "La main de l'enfant dans la glace... tendue vers l'extérieur.",
						"spanish": "La mano del niño en el hielo... se extiende hacia afuera.",
						"vietnamese": "Bàn tay của đứa trẻ trong băng… đang vươn ra ngoài.",
						"thai": "มือของเด็กในน้ำแข็ง... กำลังเอื้อมออกไปข้างนอก",
						"hindi": "बर्फ में बच्चे का हाथ... बाहर की ओर बढ़ रहा है।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구를 향한 거지?",
						"english": "Who is it reaching for?",
						"japanese": "誰に向けてだろう？",
						"chinese": "是伸向谁呢？",
						"french": "Vers qui est-elle tendue ?",
						"spanish": "¿Hacia quién va dirigida?",
						"vietnamese": "Là vươn về phía ai?",
						"thai": "เอื้อมไปหาใคร?",
						"hindi": "यह किसकी ओर है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "떠나간 가족을… 마지막으로 붙잡으려는 거겠죠.",
						"english": "To grasp their departed family... for the last time.",
						"japanese": "逝ってしまった家族を… 最後にもう一度掴もうとしているのだろう。",
						"chinese": "可能是想最后一次抓住… 已经离去的家人吧。",
						"french": "Pour retenir sa famille partie... une dernière fois.",
						"spanish": "Para aferrarse a su familia partida... por última vez.",
						"vietnamese": "Chắc là muốn níu giữ gia đình đã ra đi… lần cuối cùng.",
						"thai": "คงจะพยายามคว้าครอบครัวที่จากไป... เป็นครั้งสุดท้าย",
						"hindi": "शायद बिछड़े हुए परिवार को... आखिरी बार पकड़ने की कोशिश।"
					},
					"type": "speech",
					"speaker": "inka"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "안야의 속삭임이… 점점 작아져.",
						"english": "Anya's whispers... are growing fainter.",
						"japanese": "アーニャのささやきが… だんだん小さくなっていく。",
						"chinese": "安雅的低语… 渐渐变小了。",
						"french": "Les murmures d'Anya... s'amenuisent.",
						"spanish": "Los susurros de Anya... se hacen cada vez más débiles.",
						"vietnamese": "Lời thì thầm của Anya… đang nhỏ dần.",
						"thai": "เสียงกระซิบของอันยา... ค่อยๆ เบาลง",
						"hindi": "अन्या की फुसफुसाहट... धीरे-धीरे कम होती जा रही है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "눈보라에 흩어지는 것 같아.",
						"english": "Scattering in the blizzard, it seems.",
						"japanese": "吹雪に散るようだ。",
						"chinese": "仿佛在暴风雪中消散。",
						"french": "Dispersé par le blizzard.",
						"spanish": "Disperso en la ventisca.",
						"vietnamese": "Cứ như tan biến trong bão tuyết.",
						"thai": "ราวกับโปรยปรายในพายุหิมะ",
						"hindi": "बर्फीले तूफान में बिखरता-सा।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "영원한 작별 인사를… 하는 거야.",
						"english": "Saying an eternal farewell...",
						"japanese": "永遠の別れを告げる…",
						"chinese": "正在…永别。",
						"french": "C'est un adieu éternel...",
						"spanish": "Es una despedida eterna...",
						"vietnamese": "Đang nói lời… vĩnh biệt.",
						"thai": "กำลัง… กล่าวลาชั่วนิรันดร์",
						"hindi": "एक अनंत विदाई… कह रहा हूँ।"
					},
					"type": "speech",
					"speaker": "inka"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…이젠… 안 추워… 따뜻해…",
						"english": "...Now... not cold... warm...",
						"japanese": "…もう…寒くない…暖かい…",
						"chinese": "…现在…不冷了…暖和了…",
						"french": "...Maintenant... plus froid... chaud...",
						"spanish": "...Ahora... no hace frío... cálido...",
						"vietnamese": "…Giờ thì… không lạnh nữa… ấm rồi…",
						"thai": "…ตอนนี้… ไม่หนาวแล้ว… อบอุ่น…",
						"hindi": "…अब… ठंड नहीं… गर्म है…"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안야…",
						"english": "Anya...",
						"japanese": "アーニャ…",
						"chinese": "安雅…",
						"french": "Anya…",
						"spanish": "Anya…",
						"vietnamese": "Anya…",
						"thai": "อันยา…",
						"hindi": "अनया..."
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "잘 가, 안야. 이젠 편히 쉬렴.",
						"english": "Farewell, Anya. Rest now.",
						"japanese": "さようなら、アーニャ。安らかに眠りなさい。",
						"chinese": "再见了，安雅。安息吧。",
						"french": "Adieu, Anya. Repose en paix maintenant.",
						"spanish": "Adiós, Anya. Descansa en paz ahora.",
						"vietnamese": "Vĩnh biệt, Anya. Hãy yên nghỉ.",
						"thai": "ลาก่อน อันยา หลับให้สบายนะ",
						"hindi": "अलविदा, अनया। अब आराम करो।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼음 조각상이 완전히 투명해지며, 빛은 영원한 안식으로 사라졌다.",
						"english": "The ice sculpture became completely transparent, and the light faded into eternal rest.",
						"japanese": "氷像は完全に透明になり、光は永遠の安息へと消えていった。",
						"chinese": "冰雕变得完全透明，光芒也消逝于永恒的安息之中。",
						"french": "La sculpture de glace devint complètement transparente, et la lumière s'éteignit dans un repos éternel.",
						"spanish": "La escultura de hielo se volvió completamente transparente, y la luz se desvaneció en el descanso eterno.",
						"vietnamese": "Bức tượng băng hoàn toàn trong suốt, ánh sáng tan biến vào cõi an nghỉ vĩnh hằng.",
						"thai": "รูปปั้นน้ำแข็งโปร่งใสสมบูรณ์ และแสงสลายไปสู่การพักผ่อนชั่วนิรันดร์",
						"hindi": "बर्फ की मूर्ति पूरी तरह पारदर्शी हो गई, और प्रकाश अनंत शांति में विलीन हो गया।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "아이의 작은 손은 더 이상 무언가를 잡으려 애쓰지 않았다.",
						"english": "The child's small hand no longer strained to grasp anything.",
						"japanese": "子供の小さな手は、もう何も掴もうとすることはなかった。",
						"chinese": "孩子的小手不再试图抓住什么。",
						"french": "La petite main de l'enfant ne tentait plus de s'agripper à quoi que ce soit.",
						"spanish": "La pequeña mano del niño ya no se esforzaba por agarrar nada.",
						"vietnamese": "Bàn tay nhỏ của đứa trẻ không còn cố gắng nắm giữ bất cứ thứ gì nữa.",
						"thai": "มือเล็กๆ ของเด็กไม่พยายามไขว่คว้าอะไรอีกแล้ว",
						"hindi": "बच्चे का छोटा हाथ अब कुछ भी पकड़ने की कोशिश नहीं कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 공기 속에… 희미한 작별의 온기만이 남았다.",
						"english": "In the cold air... only a faint warmth of farewell remained.",
						"japanese": "冷たい空気の中に… かすかな別れの温もりだけが残った。",
						"chinese": "在冰冷的空气中……只剩下微弱的告别余温。",
						"french": "Dans l'air froid… seule une faible chaleur d'adieu subsistait.",
						"spanish": "En el aire frío… solo quedó un tenue calor de despedida.",
						"vietnamese": "Trong không khí lạnh giá… chỉ còn lại chút hơi ấm ly biệt mờ nhạt.",
						"thai": "ในอากาศที่หนาวเย็น… เหลือเพียงความอบอุ่นจางๆ ของการจากลา",
						"hindi": "ठंडी हवा में... केवल विदाई की हल्की गर्माहट बाकी थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "우리는… 안야의 마지막을 지켰어.",
						"english": "We... watched over Anya's last moments.",
						"japanese": "私たちは… アーニャの最期を見届けた。",
						"chinese": "我们……守护了安雅的最后一刻。",
						"french": "Nous… avons veillé sur les derniers instants d'Anya.",
						"spanish": "Nosotros… custodiamos los últimos momentos de Anya.",
						"vietnamese": "Chúng ta… đã ở bên Anya đến phút cuối.",
						"thai": "เรา… เฝ้าดูช่วงเวลาสุดท้ายของอันยา",
						"hindi": "हमने... अनया के अंतिम पलों की निगरानी की।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 조각상 안에서, 희미한 목소리가 절규처럼 울렸다.",
						"english": "From the ice sculpture, a faint voice echoed like a scream.",
						"japanese": "氷像の中から、か細い声が叫びのように響いた。",
						"chinese": "冰雕中，微弱之声如尖叫般回荡。",
						"french": "De la sculpture de glace, une voix faible résonna tel un cri.",
						"spanish": "De la escultura de hielo, una voz débil resonó como un grito.",
						"vietnamese": "Từ tượng băng, một giọng yếu ớt vang lên như tiếng thét.",
						"thai": "จากประติมากรรมน้ำแข็ง เสียงแผ่วเบาดังก้องราวกับเสียงกรีดร้อง",
						"hindi": "हिम प्रतिमा से, एक धीमी आवाज़ चीख-सी गूँजी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "…아빠, 엄마… 어디 계세요?",
						"english": "...Dad, Mom... where are you?",
						"japanese": "…パパ、ママ…どこ？",
						"chinese": "…爸爸，妈妈…你们在哪？",
						"french": "...Papa, Maman... où êtes-vous ?",
						"spanish": "...Papá, Mamá... ¿dónde están?",
						"vietnamese": "…Bố, mẹ… ở đâu ạ?",
						"thai": "…พ่อคะ, แม่คะ… อยู่ไหนคะ?",
						"hindi": "…पापा, माँ… कहाँ हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안야…",
						"english": "Anya...",
						"japanese": "アーニャ…",
						"chinese": "安雅…",
						"french": "Anya...",
						"spanish": "Anya...",
						"vietnamese": "Anya…",
						"thai": "อันยา…",
						"hindi": "अन्या…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "안야는… 여기 있어요… 추워요…",
						"english": "Anya is... here... so cold...",
						"japanese": "アーニャは…ここにいるよ…寒い…",
						"chinese": "安雅…在这里…好冷…",
						"french": "Anya est... ici... J'ai froid...",
						"spanish": "Anya está... aquí... Qué frío...",
						"vietnamese": "Anya… ở đây… lạnh quá…",
						"thai": "อันยา… อยู่ที่นี่… หนาวจังเลย…",
						"hindi": "अन्या… यहीं है… बहुत ठंड है…"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안야… 그동안 혼자였구나.",
						"english": "Anya... you've been alone this whole time.",
						"japanese": "アーニャ…ずっと一人だったんだね。",
						"chinese": "安雅…你一直都是一个人啊。",
						"french": "Anya... tu étais seule tout ce temps.",
						"spanish": "Anya... estuviste sola todo este tiempo.",
						"vietnamese": "Anya… con đã cô đơn suốt ngần ấy thời gian.",
						"thai": "อันยา… อยู่คนเดียวมาตลอดเลยนะ",
						"hindi": "अन्या… तुम इतने समय से अकेली थी।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "이제, 우리가 함께 할게.",
						"english": "Now, we'll be with you.",
						"japanese": "これからは、私たちが一緒だよ。",
						"chinese": "现在，我们会和你在一起。",
						"french": "Maintenant, nous serons avec toi.",
						"spanish": "Ahora, estaremos contigo.",
						"vietnamese": "Giờ thì, chúng ta sẽ ở bên con.",
						"thai": "ทีนี้ เราจะอยู่กับเธอแล้วนะ",
						"hindi": "अब, हम तुम्हारे साथ रहेंगे।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 이상… 혼자 두지 않을 거야.",
						"english": "We won't leave you alone... anymore.",
						"japanese": "もう…一人にはさせない。",
						"chinese": "不会再…让你一个人。",
						"french": "Nous ne te laisserons plus... seule.",
						"spanish": "No te dejaremos sola... nunca más.",
						"vietnamese": "Sẽ không… để con một mình nữa.",
						"thai": "จะไม่… ทิ้งให้อยู่คนเดียวอีกแล้ว",
						"hindi": "अब और… अकेला नहीं छोड़ेंगे।"
					},
					"emotion": "base",
					"speaker": "inka",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…아직… 추워요… 너무 추워요…",
						"english": "...Still... cold... so cold...",
						"japanese": "…まだ… 寒い… とても寒い…",
						"chinese": "……还是……好冷……太冷了……",
						"french": "…Encore… froid… si froid…",
						"spanish": "…Aún… frío… demasiado frío…",
						"vietnamese": "…Vẫn còn… lạnh… quá lạnh…",
						"thai": "…ยัง… หนาว… หนาวมากเลย…",
						"hindi": "...अभी भी... ठंड... बहुत ठंड है..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "안야… 안 돼…",
						"english": "Anya... no...",
						"japanese": "アーニャ… ダメだ…",
						"chinese": "安雅……不行……",
						"french": "Anya… non…",
						"spanish": "Anya… no…",
						"vietnamese": "Anya… đừng…",
						"thai": "อันยา… ไม่นะ…",
						"hindi": "अनया... नहीं..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "inka",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "안야… 아직은… 안 돼.",
						"english": "Anya... not yet.",
						"japanese": "アーニャ… まだ… ダメだ。",
						"chinese": "安雅……还不行。",
						"french": "Anya… pas encore.",
						"spanish": "Anya… aún no.",
						"vietnamese": "Anya… chưa được đâu.",
						"thai": "อันยา… ยังไม่ถึงเวลา…",
						"hindi": "अनया... अभी नहीं।"
					},
					"emotion": "sad",
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아이의 애처로운 속삭임이 눈보라에 흩어졌다.",
						"english": "The child's piteous whisper scattered in the blizzard.",
						"japanese": "子供の哀れな囁きが吹雪に散っていった。",
						"chinese": "孩子哀伤的低语消散在暴风雪中。",
						"french": "Le murmure plaintif de l'enfant se dispersa dans le blizzard.",
						"spanish": "El lastimero susurro del niño se dispersó en la ventisca.",
						"vietnamese": "Lời thì thầm đáng thương của đứa trẻ tan biến trong bão tuyết.",
						"thai": "เสียงกระซิบอันน่าเวทนาของเด็กสลายไปในพายุหิมะ",
						"hindi": "बच्चे की दयनीय फुसफुसाहट बर्फीले तूफान में बिखर गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"수백 년의 기다림. 이제 그 끝이 보인다.",
			"빛은 얼음이 되고, 아이의 시간은 멈췄다.",
			"영원한 작별 앞에서, 우리는 무엇을 할 것인가.",
			"이 비극을, 그저 지켜볼 수밖에 없을까."
		],
		"english": [
			"Centuries of waiting. The end is now in sight.",
			"Light turned to ice, and the child's time stood still.",
			"Before an eternal farewell, what shall we do?",
			"Must we simply watch this tragedy unfold?"
		],
		"japanese": [
			"数百年間の待機。ついにその終わりが見える。",
			"光は氷となり、子供の時間は止まった。",
			"永遠の別れを前に、我々は何をするのか。",
			"この悲劇を、ただ見守るしかないのか。"
		],
		"chinese": [
			"数百年来的等待。现在，终点已近。",
			"光芒化为冰霜，孩子的时光停滞了。",
			"面对永恒的告别，我们该何去何从？",
			"难道我们只能眼睁睁看着这场悲剧发生吗？"
		],
		"french": [
			"Des siècles d'attente. La fin est proche.",
			"La lumière devint glace, et le temps de l'enfant s'arrêta.",
			"Face à des adieux éternels, que ferons-nous ?",
			"Devons-nous simplement assister à cette tragédie ?"
		],
		"spanish": [
			"Cientos de años de espera. El final está a la vista.",
			"La luz se volvió hielo, y el tiempo del niño se detuvo.",
			"Ante un adiós eterno, ¿qué haremos?",
			"¿Acaso solo podemos observar esta tragedia?"
		],
		"vietnamese": [
			"Hàng trăm năm chờ đợi. Giờ đây, kết thúc đã gần kề.",
			"Ánh sáng hóa băng, thời gian của đứa trẻ ngưng đọng.",
			"Trước lời từ biệt vĩnh cửu, chúng ta sẽ làm gì?",
			"Lẽ nào chúng ta chỉ có thể đứng nhìn bi kịch này?"
		],
		"thai": [
			"การรอคอยนับร้อยปี บัดนี้ จุดจบปรากฏแล้ว",
			"แสงกลายเป็นน้ำแข็ง และเวลาของเด็กน้อยหยุดลง",
			"ต่อหน้าการจากลาชั่วนิรันดร์ เราจะทำอะไรได้",
			"หรือเราจะต้องเฝ้าดูโศกนาฏกรรมนี้อย่างเดียวดาย"
		],
		"hindi": [
			"सैकड़ों वर्षों का इंतज़ार। अब अंत निकट है।",
			"प्रकाश बर्फ बन गया, और बच्चे का समय ठहर गया।",
			"एक अनंत विदाई के सामने, हम क्या करेंगे?",
			"क्या हमें इस त्रासदी को सिर्फ देखना होगा?"
		]
	},
	"epilogue": {
		"korean": [
			"모든 빛이 사라진 자리, 차가운 공기만이 감돌았다.",
			"수백 년의 기다림은 끝났고, 한 아이는 비로소 안식에 들었다.",
			"그것은 구원이었을까, 아니면 또 다른 침해였을까.",
			"다만, 겨울 숲은 고요했다. 길고 긴 침묵 속으로."
		],
		"english": [
			"Where all light vanished, only cold air lingered.",
			"Centuries of waiting ended, and a child finally found peace.",
			"Was it salvation, or yet another violation?",
			"Only the winter forest was silent. Into a long, deep quiet."
		],
		"japanese": [
			"全ての光が消えた場所に、冷たい空気だけが漂っていた。",
			"数百年間の待機は終わり、一人の子供はついに安息を得た。",
			"それは救済だったのか、それとも新たな侵害だったのか。",
			"ただ、冬の森は静かだった。長く、深い沈黙の中へ。"
		],
		"chinese": [
			"所有光芒消逝之处，只余冰冷的空气弥漫。",
			"数百年来的等待终结，一个孩子终于得到了安息。",
			"那是救赎，还是又一次侵犯？",
			"只是，冬日森林一片寂静。陷入漫长而深沉的沉默中。"
		],
		"french": [
			"Là où toute lumière avait disparu, seul l'air froid persistait.",
			"Des siècles d'attente s'achevèrent, et un enfant trouva enfin la paix.",
			"Était-ce le salut, ou une autre profanation ?",
			"Seule la forêt hivernale était silencieuse. Dans un long, profond silence."
		],
		"spanish": [
			"Donde toda luz se desvaneció, solo el aire frío perduraba.",
			"Cientos de años de espera terminaron, y un niño finalmente encontró la paz.",
			"¿Fue salvación, o una intrusión más?",
			"Sin embargo, el bosque invernal estaba silencioso. Hacia un largo y profundo silencio."
		],
		"vietnamese": [
			"Nơi mọi ánh sáng biến mất, chỉ còn không khí lạnh lẽo vương vấn.",
			"Hàng trăm năm chờ đợi đã kết thúc, một đứa trẻ cuối cùng cũng tìm thấy sự an nghỉ.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác?",
			"Chỉ có khu rừng mùa đông yên tĩnh. Chìm vào sự im lặng dài và sâu thẳm."
		],
		"thai": [
			"ในที่ที่แสงทั้งหมดหายไป เหลือเพียงอากาศที่หนาวเย็น",
			"การรอคอยนับร้อยปีสิ้นสุดลง และเด็กคนหนึ่งก็ได้พักผ่อนอย่างสงบ",
			"มันคือความรอด หรือการบุกรุกอีกครั้งกันแน่",
			"เพียงแต่ป่าฤดูหนาวกลับเงียบงัน เข้าสู่ความเงียบงันอันยาวนาน"
		],
		"hindi": [
			"जहाँ सारी रोशनी गायब हो गई, केवल ठंडी हवा ही बची थी।",
			"सैकड़ों वर्षों का इंतज़ार खत्म हुआ, और एक बच्चे को आखिरकार शांति मिली।",
			"क्या यह मोक्ष था, या एक और उल्लंघन?",
			"हालांकि, शीतकालीन वन शांत था। एक लंबी, गहरी खामोशी में।"
		]
	}
} as const;
