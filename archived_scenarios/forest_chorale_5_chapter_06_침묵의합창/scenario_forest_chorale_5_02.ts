export const scenario_forest_chorale_5_02 = {
	"scenario_id": "forest_chorale_5_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모든 소리가 사라진 침묵의 구역에 들어섰다. 발소리조차 들리지 않았다.",
						"english": "I entered a silent zone where all sounds vanished. Not even my footsteps could be heard.",
						"japanese": "全ての音が消えた沈黙の区域に入った。足音さえ聞こえなかった。",
						"chinese": "我进入了所有声音都消失的寂静区域。连脚步声都听不到。",
						"french": "J'entrai dans une zone silencieuse où tous les sons avaient disparu. Pas même mes pas ne pouvaient être entendus.",
						"spanish": "Entré en una zona de silencio donde todos los sonidos desaparecían. Ni siquiera mis pasos se oían.",
						"vietnamese": "Tôi bước vào khu vực im lặng nơi mọi âm thanh biến mất. Ngay cả tiếng bước chân cũng không nghe thấy.",
						"thai": "ฉันได้เข้ามาในโซนเงียบงันที่ทุกเสียงหายไป แม้แต่เสียงฝีเท้าก็ไม่ได้ยิน",
						"hindi": "मैं एक ऐसे खामोश क्षेत्र में दाखिल हुआ जहाँ सभी ध्वनियाँ लुप्त हो गईं। यहाँ तक कि मेरे कदमों की आहट भी नहीं सुनाई दी।"
					}
				},
				{
					"content": {
						"korean": "진짜 아무 소리도 안 나. 기분 나빠.",
						"english": "There's really no sound at all. It feels unsettling.",
						"japanese": "本当に何の音もしない。気持ち悪い。",
						"chinese": "真的什么声音都没有。感觉很不舒服。",
						"french": "Il n'y a vraiment aucun son. C'est troublant.",
						"spanish": "Realmente no hay ningún sonido. Se siente inquietante.",
						"vietnamese": "Thật sự không có tiếng động gì cả. Cảm giác thật khó chịu.",
						"thai": "ไม่มีเสียงอะไรเลยจริงๆ รู้สึกไม่สบายใจ",
						"hindi": "सचमुच कोई आवाज़ नहीं है। यह असहज महसूस होता है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…방금, 누군가 내 이름을 부른 것 같았는데.",
						"english": "...Just now, I thought someone called my name.",
						"japanese": "…今、誰かが私の名前を呼んだような気がした。",
						"chinese": "……刚才，我好像听到有人叫我的名字。",
						"french": "...Tout à l'heure, j'ai cru que quelqu'un avait appelé mon nom.",
						"spanish": "...Justo ahora, me pareció que alguien me llamó por mi nombre.",
						"vietnamese": "...Vừa nãy, tôi cứ ngỡ có người gọi tên mình.",
						"thai": "...เมื่อกี้ ฉันคิดว่ามีคนเรียกชื่อฉัน",
						"hindi": "...अभी, मुझे लगा किसी ने मेरा नाम पुकारा।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "착각일 거야. 아무도 없었어.",
						"english": "It must be my imagination. No one was there.",
						"japanese": "錯覚だろう。誰もいなかった。",
						"chinese": "应该是错觉。没人在这里。",
						"french": "Ce doit être mon imagination. Il n'y avait personne.",
						"spanish": "Debe ser mi imaginación. No había nadie.",
						"vietnamese": "Chắc là ảo giác thôi. Không có ai ở đó cả.",
						"thai": "คงคิดไปเอง ไม่มีใครอยู่หรอก",
						"hindi": "यह मेरी कल्पना होगी। वहाँ कोई नहीं था।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "…또 들렸어. 분명 그 사람 목소리였어.",
						"english": "...I heard it again. It was definitely that person's voice.",
						"japanese": "…また聞こえた。間違いなくあの人の声だった。",
						"chinese": "……我又听到了。那绝对是那个人的声音。",
						"french": "...Je l'ai encore entendu. C'était bien la voix de cette personne.",
						"spanish": "Lo escuché de nuevo. Era definitivamente la voz de esa persona.",
						"vietnamese": "...Tôi lại nghe thấy rồi. Chắc chắn là giọng của người đó.",
						"thai": "...ได้ยินอีกแล้ว เป็นเสียงของคนนั้นจริงๆ ด้วย",
						"hindi": "...मुझे फिर सुनाई दिया। वह निश्चित रूप से उस व्यक्ति की आवाज़ थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "브라이어, 정신 차려. 환청이야.",
						"english": "Briar, snap out of it. It's an auditory hallucination.",
						"japanese": "ブライアー、しっかりして。幻聴よ。",
						"chinese": "布莱尔，清醒点。那是幻听。",
						"french": "Briar, ressaisis-toi. C'est une hallucination auditive.",
						"spanish": "Briar, recapacita. Es una alucinación auditiva.",
						"vietnamese": "Briar, tỉnh táo lại đi. Đó là ảo thanh thôi.",
						"thai": "ไบรอา, ตั้งสติหน่อย นี่มันหูแว่ว",
						"hindi": "ब्रायर, होश में आओ। यह एक श्रवण मतिभ्रम है।"
					}
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "환청 아니야… 나를 부르고 있어.",
						"english": "It's not an auditory hallucination... It's calling me.",
						"japanese": "幻聴じゃない… 私を呼んでいる。",
						"chinese": "不是幻听… 它在呼唤我。",
						"french": "Ce n'est pas une hallucination... Ça m'appelle.",
						"spanish": "No es una alucinación... Me está llamando.",
						"vietnamese": "Không phải ảo giác... Nó đang gọi tôi.",
						"thai": "ไม่ใช่เสียงหลอน... มันกำลังเรียกฉันอยู่",
						"hindi": "यह मतिभ्रम नहीं है... यह मुझे बुला रहा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 우리도 듣는 건가.",
						"english": "No way... Are we hearing it too?",
						"japanese": "まさか… 私たちも聞こえているのか。",
						"chinese": "不会吧… 我们也听到了吗？",
						"french": "Impossible... Est-ce qu'on l'entend nous aussi ?",
						"spanish": "No puede ser... ¿Nosotros también lo oímos?",
						"vietnamese": "Không lẽ... Chúng ta cũng nghe thấy sao?",
						"thai": "ไม่จริงน่า... เราก็ได้ยินด้วยเหรอเนี่ย",
						"hindi": "कहीं... हम भी तो नहीं सुन रहे?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "…점점 가까워져. 날 기다리고 있어.",
						"english": "...It's getting closer. It's waiting for me.",
						"japanese": "…だんだん近づいてくる。私を待っている。",
						"chinese": "…越来越近了。它在等我。",
						"french": "...Ça se rapproche. Ça m'attend.",
						"spanish": "...Se acerca cada vez más. Me está esperando.",
						"vietnamese": "...Nó đang đến gần hơn. Nó đang đợi tôi.",
						"thai": "...ใกล้เข้ามาเรื่อยๆ มันกำลังรอฉันอยู่",
						"hindi": "...यह करीब आ रहा है। यह मेरा इंतज़ार कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "브라이어! 정신 차려! 그쪽으로 가면 안 돼!",
						"english": "Briar! Snap out of it! Don't go that way!",
						"japanese": "ブライアー！しっかりしろ！そっちに行っちゃダメだ！",
						"chinese": "布莱尔！清醒点！别往那边去！",
						"french": "Briar ! Reprends-toi ! N'y va pas !",
						"spanish": "¡Briar! ¡Despierta! ¡No vayas por ahí!",
						"vietnamese": "Briar! Tỉnh táo lại! Đừng đi về phía đó!",
						"thai": "ไบรเออร์! ตั้งสติ! อย่าไปทางนั้น!",
						"hindi": "ब्रायर! होश में आओ! उस तरफ मत जाओ!"
					},
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "나뭇가지 사이, 사람의 귀를 닮은 돌기들이 돋아나 꿈틀거렸다.",
						"english": "Between the branches, protrusions resembling human ears sprouted and writhed.",
						"japanese": "枝の間から、人の耳に似た突起が蠢きながら生えてきた。",
						"chinese": "树枝之间，长出了形似人耳的突起，蠕动着。",
						"french": "Entre les branches, des excroissances ressemblant à des oreilles humaines poussaient et frémissaient.",
						"spanish": "Entre las ramas, brotaban protuberancias que parecían orejas humanas y se retorcían.",
						"vietnamese": "Giữa những cành cây, những khối u nhú giống tai người mọc ra và cựa quậy.",
						"thai": "ท่ามกลางกิ่งไม้ มีติ่งเนื้อคล้ายหูมนุษย์งอกออกมาและบิดตัว",
						"hindi": "शाखाओं के बीच, इंसानी कान जैसी उभरी हुई चीज़ें उग आईं और रेंगने लगीं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장, 저게 뭐야… 우리 소리를 먹는 건가.",
						"english": "Damn, what is that... Is it devouring our sounds?",
						"japanese": "くそ、あれは何だ… 俺たちの音を食っているのか。",
						"chinese": "该死，那是什么… 它在吞噬我们的声音吗？",
						"french": "Merde, qu'est-ce que c'est... Ça dévore nos sons ?",
						"spanish": "Maldita sea, ¿qué es eso... Nos está robando los sonidos?",
						"vietnamese": "Chết tiệt, đó là cái gì... Nó đang nuốt chửng âm thanh của chúng ta sao?",
						"thai": "บ้าเอ๊ย, นั่นมันอะไรกัน... มันกำลังกินเสียงของเราอยู่เหรอ",
						"hindi": "धत्त तेरे की, यह क्या है... क्या यह हमारी आवाज़ें खा रहा है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…따뜻해. 그리워.",
						"english": "...It's warm. I miss it.",
						"japanese": "…暖かい。懐かしい。",
						"chinese": "…好温暖。好想念。",
						"french": "...C'est chaud. Ça me manque.",
						"spanish": "...Es cálido. Lo añoro.",
						"vietnamese": "...Ấm áp quá. Tôi nhớ nó.",
						"thai": "...อบอุ่นจัง คิดถึง",
						"hindi": "...यह गर्म है। मुझे इसकी याद आती है।"
					},
					"speaker": "briar",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "…보고 싶어. 너무 보고 싶어….",
						"english": "...I miss you. I miss you so much...",
						"japanese": "…会いたい。とても会いたい…",
						"chinese": "…好想你。非常想你…",
						"french": "...Tu me manques. Tu me manques tellement...",
						"spanish": "...Te echo de menos. Te echo mucho de menos...",
						"vietnamese": "...Tôi nhớ bạn. Tôi nhớ bạn rất nhiều...",
						"thai": "...อยากเจอจัง คิดถึงมากเลย...",
						"hindi": "...तुम्हारी याद आ रही है। बहुत याद आ रही है।"
					},
					"speaker": "briar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"emotion": "angry",
					"content": {
						"korean": "브라이어가 완전히 홀렸어! 이대로 두면 안 돼!",
						"english": "Briar is completely entranced! We can't leave her like this!",
						"japanese": "ブライアーが完全に魅入られている！このまま放っておけない！",
						"chinese": "布莱尔完全被迷惑了！不能就这么放着不管！",
						"french": "Briar est complètement envoûtée ! On ne peut pas la laisser comme ça !",
						"spanish": "¡Briar está completamente hechizada! ¡No podemos dejarla así!",
						"vietnamese": "Briar đã bị mê hoặc hoàn toàn rồi! Không thể để cô ấy như vậy được!",
						"thai": "ไบรเออร์ถูกสะกดจิตไปแล้ว! เราปล่อยเธอไว้อย่างนี้ไม่ได้!",
						"hindi": "ब्रायर पूरी तरह से मोहित हो गई है! हम उसे ऐसे नहीं छोड़ सकते!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라진 자들이 남긴 물건들이 모두 구역 안쪽을 향해 놓여 있었다.",
						"english": "The items left by the vanished were all arranged facing the inner area.",
						"japanese": "消えた者たちが残した物が、すべて区画の内側を向いて置かれていた。",
						"chinese": "失踪者留下的物品都朝向区域内部摆放着。",
						"french": "Les objets laissés par les disparus étaient tous disposés face à l'intérieur de la zone.",
						"spanish": "Los objetos dejados por los desaparecidos estaban todos orientados hacia el interior de la zona.",
						"vietnamese": "Những vật phẩm mà những người biến mất để lại đều được đặt hướng về phía bên trong khu vực.",
						"thai": "สิ่งของที่ผู้หายสาบสูญทิ้งไว้ ล้วนถูกวางหันเข้าหาด้านในของพื้นที่",
						"hindi": "गायब हुए लोगों द्वारा छोड़ी गई सभी वस्तुएँ क्षेत्र के अंदर की ओर रखी हुई थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그들은 끌려간 게 아니었어. 스스로, 이 소리를 따라 걸어 들어간 거야.",
						"english": "They weren't dragged away. They willingly walked in, following this sound.",
						"japanese": "彼らは引きずり込まれたんじゃない。自ら、この音に導かれて入っていったんだ。",
						"chinese": "他们不是被拖走的。他们是自愿跟着这声音走进去的。",
						"french": "Ils n'ont pas été traînés. Ils sont entrés d'eux-mêmes, suivant ce son.",
						"spanish": "No fueron arrastrados. Entraron por su propia voluntad, siguiendo este sonido.",
						"vietnamese": "Họ không bị lôi đi. Họ tự mình đi theo âm thanh này mà vào.",
						"thai": "พวกเขาไม่ได้ถูกลากไป พวกเขาเดินตามเสียงนี้เข้าไปเอง",
						"hindi": "उन्हें घसीटा नहीं गया था। वे खुद इस आवाज़ के पीछे चले गए थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "…기다리고 있어. 어서.",
						"english": "...Waiting. Hurry.",
						"japanese": "…待ってるよ。早く。",
						"chinese": "……等着呢。快点。",
						"french": "...J'attends. Dépêche-toi.",
						"spanish": "...Esperando. Date prisa.",
						"vietnamese": "...Đang đợi. Nhanh lên.",
						"thai": "...กำลังรออยู่ รีบมาสิ",
						"hindi": "...इंतज़ार कर रहा हूँ। जल्दी आओ।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 너희의 그리움은… 사라지지 않아….",
						"english": "...Foolish ones. Your longing will not... disappear...",
						"japanese": "…愚かな者たちめ。お前たちの渇望は…消えない…。",
						"chinese": "……愚蠢的家伙们。你们的思念……不会消失……",
						"french": "...Stupides créatures. Votre désir ardent ne... disparaîtra pas...",
						"spanish": "...Necios. Vuestro anhelo no... desaparecerá...",
						"vietnamese": "...Những kẻ ngu ngốc. Nỗi nhớ của các ngươi sẽ không... biến mất...",
						"thai": "...พวกโง่เขลา ความปรารถนาของพวกเจ้า... ไม่มีทางหายไป...",
						"hindi": "...नासमझों। तुम्हारी लालसा... गायब नहीं होगी..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "브라이어! 정신이 들어?",
						"english": "Briar! Are you awake?",
						"japanese": "ブライア！意識が戻ったか？",
						"chinese": "布莱尔！你醒了吗？",
						"french": "Briar ! Tu es réveillé ?",
						"spanish": "¡Briar! ¿Estás despierto?",
						"vietnamese": "Briar! Cậu tỉnh rồi à?",
						"thai": "ไบรอาร์! ได้สติแล้วเหรอ?",
						"hindi": "ब्रायर! क्या तुम जाग गए?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "…아무 소리도… 안 들려….",
						"english": "...I can't... hear anything...",
						"japanese": "…何も…聞こえない…。",
						"chinese": "……什么声音也……听不到……",
						"french": "...Je n'entends... rien...",
						"spanish": "...No... oigo nada...",
						"vietnamese": "...Không nghe... thấy gì cả...",
						"thai": "...ไม่ได้ยิน... เสียงอะไรเลย...",
						"hindi": "...कुछ भी... सुनाई नहीं दे रहा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "침묵의 구역에 다시금 희미한 소리가 돌아왔다. 그러나 모두가 잊었던 것들이었다.",
						"english": "Faint sounds returned to the silent zone, but they were things everyone had forgotten.",
						"japanese": "静寂の区域にかすかな音が再び戻った。しかし、それは皆が忘れていたものだった。",
						"chinese": "寂静的区域里微弱的声音再次响起。然而，那些都是被遗忘的事物。",
						"french": "De faibles sons revinrent dans la zone silencieuse. Mais c'étaient des choses que tout le monde avait oubliées.",
						"spanish": "Débiles sonidos regresaron a la zona silenciosa. Pero eran cosas que todos habían olvidado.",
						"vietnamese": "Những âm thanh mờ nhạt trở lại khu vực im lặng. Nhưng đó là những điều mọi người đã lãng quên.",
						"thai": "เสียงอันแผ่วเบากลับมายังเขตแดนที่เงียบงัน แต่ทว่ามันคือสิ่งที่ทุกคนลืมเลือนไปแล้ว",
						"hindi": "खामोश क्षेत्र में धीमी आवाज़ें लौट आईं, पर वे ऐसी बातें थीं जिन्हें सब भूल चुके थे।"
					}
				},
				{
					"content": {
						"korean": "여전히 숲은 속삭인다. 사라진 자들의 기억을 모아, 다음 제물을 기다리고 있었다.",
						"english": "The forest still whispers, gathering memories of the lost, awaiting the next offering.",
						"japanese": "森は未だ囁く。失われた者たちの記憶を集め、次の生贄を待っていた。",
						"chinese": "森林仍在低语，收集着逝去者的记忆，等待着下一个祭品。",
						"french": "La forêt murmure encore, recueillant les souvenirs des disparus, attendant la prochaine offrande.",
						"spanish": "El bosque aún susurra, reuniendo los recuerdos de los perdidos, esperando la próxima ofrenda.",
						"vietnamese": "Rừng vẫn thì thầm, gom góp ký ức của những người đã khuất, chờ đợi vật hiến tế tiếp theo.",
						"thai": "ป่ายังคงกระซิบ รวบรวมความทรงจำของผู้ที่หายไป รอคอยเครื่องสังเวยรายต่อไป",
						"hindi": "जंगल अब भी फुसफुसाता है, खोए हुए लोगों की यादें बटोरता हुआ, अगली भेंट की प्रतीक्षा में।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 나약한 마음이… 이 숲의 일부가 될 것이다.",
						"english": "Your weak hearts… shall become part of this forest.",
						"japanese": "お前たちの脆い心が…この森の一部となるだろう。",
						"chinese": "你们脆弱的心…将成为这片森林的一部分。",
						"french": "Vos cœurs faibles… feront partie de cette forêt.",
						"spanish": "Vuestros débiles corazones… formarán parte de este bosque.",
						"vietnamese": "Trái tim yếu đuối của ngươi… sẽ trở thành một phần của khu rừng này.",
						"thai": "จิตใจที่อ่อนแอของพวกเจ้า… จะกลายเป็นส่วนหนึ่งของป่านี้",
						"hindi": "तुम्हारे कमज़ोर दिल… इस जंगल का हिस्सा बन जाएँगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어! 다시 올 거야!",
						"english": "…It's not over yet! I'll be back!",
						"japanese": "…まだ終わってない！また戻ってくる！",
						"chinese": "……还没结束！我会回来的！",
						"french": "…Ce n'est pas encore fini ! Je reviendrai !",
						"spanish": "…¡Aún no ha terminado! ¡Volveré!",
						"vietnamese": "…Chưa kết thúc đâu! Ta sẽ quay lại!",
						"thai": "…ยังไม่จบ! ฉันจะกลับมา!",
						"hindi": "…अभी खत्म नहीं हुआ! मैं वापस आऊँगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때는 더 깊은 욕망을 가지고.",
						"english": "Come again. With deeper desires next time.",
						"japanese": "また来るがいい。その時は、もっと深い欲望を抱いて。",
						"chinese": "再来吧。下次带着更深的欲望。",
						"french": "Revenez. Avec des désirs plus profonds la prochaine fois.",
						"spanish": "Vuelve. Con deseos más profundos la próxima vez.",
						"vietnamese": "Hãy quay lại. Với những ham muốn sâu sắc hơn vào lần tới.",
						"thai": "จงกลับมาใหม่ คราวหน้าจงนำความปรารถนาที่ลึกซึ้งยิ่งกว่ามาด้วย",
						"hindi": "फिर आना। अगली बार और गहरी इच्छाओं के साथ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "왔구나. 너희의 그리움이 여기까지 이끌었지.",
						"english": "You've come. Your longing led you here.",
						"japanese": "来たか。お前たちの渇望がここまで導いたのだ。",
						"chinese": "你们来了。是你们的思念把你们引到这里来的。",
						"french": "Vous êtes venus. Votre désir ardent vous a menés ici.",
						"spanish": "Habéis llegado. Vuestro anhelo os ha traído hasta aquí.",
						"vietnamese": "Các ngươi đã đến. Nỗi nhớ của các ngươi đã dẫn lối đến đây.",
						"thai": "มาแล้วสินะ ความปรารถนาของพวกเจ้าพาทุกคนมาถึงที่นี่",
						"hindi": "तुम आ गए। तुम्हारी लालसा तुम्हें यहाँ ले आई।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "이 목소리의 주인이… 너였어?",
						"english": "The owner of this voice... was it you?",
						"japanese": "この声の主が… お前だったのか？",
						"chinese": "这声音的主人……是你？",
						"french": "La propriétaire de cette voix... c'était toi ?",
						"spanish": "¿El dueño de esta voz... eras tú?",
						"vietnamese": "Chủ nhân của giọng nói này... là ngươi sao?",
						"thai": "เจ้าของเสียงนี้... คือเจ้าหรือ?",
						"hindi": "इस आवाज़ का मालिक... तुम थे?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그래. 너희의 가장 깊은 욕망. 내가 그걸 들려줄 뿐.",
						"english": "Yes. Your deepest desires. I merely show them to you.",
						"japanese": "そうだ。お前たちの最も深い欲望。それを聞かせているだけだ。",
						"chinese": "是的。你们最深层的欲望。我只是让它们显现。",
						"french": "Oui. Vos désirs les plus profonds. Je ne fais que vous les montrer.",
						"spanish": "Sí. Vuestros deseos más profundos. Yo solo os los muestro.",
						"vietnamese": "Đúng vậy. Khao khát sâu thẳm nhất của các ngươi. Ta chỉ cho các ngươi thấy điều đó.",
						"thai": "ใช่ ความปรารถนาที่ลึกที่สุดของพวกเจ้า ข้าแค่เผยให้เห็นเท่านั้น",
						"hindi": "हाँ। तुम्हारी सबसे गहरी इच्छाएँ। मैं बस उन्हें दिखाता हूँ।"
					}
				},
				{
					"type": "speech",
					"speaker": "briar",
					"emotion": "sad",
					"content": {
						"korean": "…거짓말… 그럴 리 없어….",
						"english": "...A lie... That can't be...",
						"japanese": "…嘘だ…そんなはずない…。",
						"chinese": "……谎言……不可能……",
						"french": "...Un mensonge... C'est impossible...",
						"spanish": "...Una mentira... Eso no puede ser...",
						"vietnamese": "...Nói dối... Không thể nào...",
						"thai": "...โกหก... ไม่จริงน่า...",
						"hindi": "...झूठ... ऐसा नहीं हो सकता..."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "부정해도 소용없다. 이 침묵 속에서 영원히 잠들어라.",
						"english": "Denying it is useless. Sleep forever in this silence.",
						"japanese": "否定しても無駄だ。この沈黙の中で永遠に眠れ。",
						"chinese": "否认也无济于事。在这寂静中永远沉睡吧。",
						"french": "Le nier est inutile. Dors éternellement dans ce silence.",
						"spanish": "Negarlo es inútil. Duerme para siempre en este silencio.",
						"vietnamese": "Phủ nhận cũng vô ích thôi. Hãy ngủ vĩnh viễn trong sự im lặng này.",
						"thai": "การปฏิเสธก็ไร้ประโยชน์ หลับใหลชั่วนิรันดร์ในความเงียบนี้เสียเถิด",
						"hindi": "इनकार करना बेकार है। इस खामोशी में हमेशा के लिए सो जाओ।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계수 숲, 깊은 곳에 모든 소리가 멎은 구역이 있었다.",
			"정적이 지배하는 그곳에서, 알 수 없는 속삭임이 들려온다.",
			"그리운 이의 목소리. 다정한 부름.",
			"그것은 유혹인가, 아니면 저주인가."
		],
		"english": [
			"Deep within the World Tree Forest, there was a zone where all sounds ceased.",
			"In that place dominated by silence, an unknown whisper could be heard.",
			"The voice of a longed-for person. A gentle call.",
			"Is it a temptation, or a curse?"
		],
		"japanese": [
			"世界樹の森の奥深く、全ての音が止んだ区域があった。",
			"静寂に支配されたその場所で、未知のささやきが聞こえてくる。",
			"懐かしい人の声。優しい呼びかけ。",
			"それは誘惑か、あるいは呪いか。"
		],
		"chinese": [
			"世界树森林深处，有一片万籁俱寂的区域。",
			"在那片被寂静主宰的地方，传来不知名的低语。",
			"思念之人的声音。温柔的呼唤。",
			"这是诱惑，还是诅咒？"
		],
		"french": [
			"Au plus profond de la Forêt de l'Arbre-Monde, il y avait une zone où tous les sons cessaient.",
			"Dans ce lieu dominé par le silence, un murmure inconnu se faisait entendre.",
			"La voix d'un être cher. Un doux appel.",
			"Est-ce une tentation, ou une malédiction ?"
		],
		"spanish": [
			"En lo profundo del Bosque del Árbol del Mundo, había una zona donde todo sonido cesaba.",
			"En ese lugar dominado por el silencio, se escuchaba un susurro desconocido.",
			"La voz de un ser añorado. Una dulce llamada.",
			"Es una tentación, o una maldición?"
		],
		"vietnamese": [
			"Sâu trong Rừng Cây Thế Giới, có một khu vực nơi mọi âm thanh đều ngừng lại.",
			"Tại nơi bị sự tĩnh lặng bao trùm, một tiếng thì thầm không rõ nguồn gốc vang lên.",
			"Giọng nói của người thương nhớ. Một lời gọi dịu dàng.",
			"Đó là cám dỗ, hay là lời nguyền?"
		],
		"thai": [
			"ลึกเข้าไปในป่าเวิลด์ทรี มีโซนที่ทุกเสียงเงียบสงัด",
			"ในที่ที่ความเงียบงันครอบงำ มีเสียงกระซิบที่ไม่รู้จักเล็ดลอดมา",
			"เสียงของคนที่คิดถึง เสียงเรียกที่อ่อนโยน",
			"มันคือการยั่วยวน หรือคำสาปกันแน่"
		],
		"hindi": [
			"विश्व वृक्ष वन के गहरे भीतर, एक ऐसा क्षेत्र था जहाँ सभी ध्वनियाँ थम गई थीं।",
			"उस मौन से घिरे स्थान में, एक अज्ञात फुसफुसाहट सुनाई दी।",
			"एक प्रियजन की आवाज़। एक कोमल पुकार।",
			"क्या यह एक प्रलोभन है, या एक अभिशाप?"
		]
	}
} as const;
