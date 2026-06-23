export const scenario_hell_gigglesplat_0_02 = {
	"scenario_id": "hell_gigglesplat_0_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
					"content": {
						"korean": "기괴한 웃음소리가 폐허 속에서 울려 퍼졌다.",
						"english": "Bizarre laughter echoed through the ruins.",
						"japanese": "奇妙な笑い声が廃墟の中に響き渡った。",
						"chinese": "诡异的笑声在废墟中回荡。",
						"french": "Des rires étranges résonnaient dans les ruines.",
						"spanish": "Risas extrañas resonaron entre las ruinas.",
						"vietnamese": "Tiếng cười quái dị vang vọng trong đống đổ nát.",
						"thai": "เสียงหัวเราะประหลาดก้องกังวานไปทั่วซากปรักหักพัง",
						"hindi": "खंडहरों में अजीबोगरीब हँसी गूँज उठी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끔찍한데… 다들 웃고 있어.",
						"english": "It's horrible... but everyone's laughing.",
						"japanese": "恐ろしいのに… みんな笑っている。",
						"chinese": "真可怕…… 但大家都在笑。",
						"french": "C'est horrible... mais tout le monde rit.",
						"spanish": "Es terrible... pero todos están riendo.",
						"vietnamese": "Thật kinh khủng... nhưng mọi người đều đang cười.",
						"thai": "มันแย่มาก... แต่ทุกคนกำลังหัวเราะ",
						"hindi": "यह भयानक है... लेकिन हर कोई हँस रहा है।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "후후… 옛날엔… 흐읍, 너무 힘들었지.",
						"english": "Huhu... Back then... *gasp*, it was so hard.",
						"japanese": "ふふ… 昔は… ふぅ、とても辛かったわ。",
						"chinese": "呵呵…… 以前…… 呜，太难了。",
						"french": "Huhu... Avant... *soupir*, c'était si difficile.",
						"spanish": "Juju... Antes... *jadeo*, fue tan difícil.",
						"vietnamese": "Huhu... Ngày xưa... *thở dốc*, khó khăn lắm.",
						"thai": "ฮูฮู... เมื่อก่อน... *เฮือก*, มันยากมากเลยนะ",
						"hindi": "हुहु... पहले... *आह*, यह बहुत मुश्किल था।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "크하하하! 정말… 흐아아아! 죽을 만큼 행복했어!",
						"english": "Khahahahaha! It was really... *gasp/scream*! Happy enough to die!",
						"japanese": "クハハハハ！本当に… ふああああ！死ぬほど幸せだった！",
						"chinese": "哈哈哈！真的…… 呜啊啊啊！幸福得要死！",
						"french": "Hahahahaha ! C'était vraiment... *cri/soupir* ! Heureux à en mourir !",
						"spanish": "¡Jajajajaja! ¡Realmente... *grito*! ¡Fui feliz hasta morir!",
						"vietnamese": "Khahahaha! Thật sự là... *a a a*! Hạnh phúc muốn chết đi được!",
						"thai": "คุฮ่าฮ่าฮ่า! จริงๆ แล้ว... *ฮือออ*! มีความสุขจนแทบตายเลย!",
						"hindi": "खाहहाहा! यह सचमुच... *चीख*! मरने जितना खुश था!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "…何て？",
						"chinese": "……你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué dijiste?",
						"vietnamese": "...Cái gì cơ?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "여긴 다… 흐읍, 더 좋아졌어. 전부… 꺄르륵! 기글스플랫 덕분이야!",
						"english": "Everything here... *gasp*, got better. It's all... *giggle*! Thanks to Gigglesplat!",
						"japanese": "ここは全部… ふぅ、もっと良くなったわ。全部… キャルルルク！ギグレスプラットのおかげよ！",
						"chinese": "这里的一切…… 呜，变得更好了。全部…… 咯咯！多亏了吉格斯普拉特！",
						"french": "Tout ici... *soupir*, s'est amélioré. C'est tout... *rire aigu* ! Grâce à Gigglesplat !",
						"spanish": "Todo aquí... *jadeo*, mejoró. ¡Todo... *risita*! ¡Gracias a Gigglesplat!",
						"vietnamese": "Mọi thứ ở đây... *thở dốc*, tốt hơn rồi. Tất cả là... *cười khúc khích*! Nhờ có Gigglesplat!",
						"thai": "ทุกอย่างที่นี่... *เฮือก*, ดีขึ้นมากเลยล่ะ ทั้งหมด... *คิกคิก*! เป็นเพราะกิ๊กเกิลสแพล็ต!",
						"hindi": "यहाँ सब कुछ... *आह*, बेहतर हो गया है। यह सब... *खिलखिलाहट*! गिगल्सप्लेट की वजह से है!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기글스플랫이 뭔데 저렇게 웃는 거야?",
						"english": "What's a Giggle-splat that makes it laugh like that?",
						"japanese": "ギグルスプラットって何？なんであんな風に笑ってるの？",
						"chinese": "什么玩意儿叫咯咯飞溅？它为什么那样笑？",
						"french": "C'est quoi un Giggle-splat pour rire comme ça ?",
						"spanish": "¿Qué es un Giggle-splat para que se ría así?",
						"vietnamese": "Giggle-splat là cái quái gì mà nó cười như vậy?",
						"thai": "กิ๊กเกิลสแปลตคืออะไร ทำไมถึงหัวเราะแบบนั้น?",
						"hindi": "गिगल-स्प्लैट क्या है जो इसे ऐसे हँसाता है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 고통 속에서 울려 퍼지는 꺄르륵 웃음소리가 때로는 너무나 부자연스럽게 들렸다.",
						"english": "The cackling laughter echoing from the depths of hellish pain sometimes sounded unnaturally out of place.",
						"japanese": "地獄の苦痛の中から響くキャハハという笑い声は、時にはあまりにも不自然に聞こえた。",
						"chinese": "来自地狱般痛苦深处的咯咯笑声，有时听起来异常格格不入。",
						"french": "Les rires moqueurs résonnant des profondeurs de la douleur infernale semblaient parfois étrangement déplacés.",
						"spanish": "Las risas estridentes que resonaban desde las profundidades del dolor infernal a veces sonaban antinaturalmente fuera de lugar.",
						"vietnamese": "Tiếng cười khẩy vang vọng từ vực sâu của nỗi đau địa ngục đôi khi nghe có vẻ không tự nhiên.",
						"thai": "เสียงหัวเราะคิกคักที่สะท้อนมาจากความเจ็บปวดในนรก บางครั้งก็ฟังดูผิดธรรมชาติอย่างยิ่ง",
						"hindi": "नरकीय दर्द की गहराई से गूँजती हुई कर्कश हँसी कभी-कभी असामान्य रूप से अजीब लगती थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "후후… 미스틱 세계는… 으윽… 전부 무너졌지만! 꺄하하하! 괜찮아! 다 괜찮아졌어!",
						"english": "Hehe… The Mystic World… Ugh… It all crumbled! Kahahaha! It's okay! Everything's alright now!",
						"japanese": "フフ…ミスティック世界は…うぅ…全部崩れ去ったけど！キャハハハ！大丈夫！全部大丈夫になったよ！",
						"chinese": "呵呵……神秘世界……呃……它都崩塌了！哈哈哈！没关系！一切都好起来了！",
						"french": "Héhé… Le Monde Mystique… Ugh… Tout s'est écroulé ! Kahahaha ! C'est bon ! Tout va bien maintenant !",
						"spanish": "Jeje… ¡El Mundo Místico… Ugh… Todo se desmoronó! ¡Jajajaja! ¡Está bien! ¡Todo está bien ahora!",
						"vietnamese": "Hê hê… Thế giới Thần Bí… Ư… Tất cả sụp đổ rồi! Khà khà khà! Không sao đâu! Mọi thứ đều ổn rồi!",
						"thai": "ฮิฮิ… โลกมายา… อึก… มันพังทลายลงหมดแล้ว! คิกคักคิกคัก! ไม่เป็นไร! ทุกอย่างโอเคแล้ว!",
						"hindi": "हेहे… रहस्यवादी दुनिया… उह… सब कुछ ढह गया! कहकहा! ठीक है! सब कुछ अब ठीक हो गया है!"
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"content": {
						"korean": "미스틱 세계?",
						"english": "The Mystic World?",
						"japanese": "ミスティック世界？",
						"chinese": "神秘世界？",
						"french": "Le Monde Mystique ?",
						"spanish": "¿El Mundo Místico?",
						"vietnamese": "Thế giới Thần Bí?",
						"thai": "โลกมายา?",
						"hindi": "रहस्यवादी दुनिया?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "난… 흐읍… 미스틱 세계의 기억을 가지고 있어. 꺄하하하! 너무나 행복한 기억이지!",
						"english": "I… Hmph… I have memories of the Mystic World. Kahahaha! Such happy memories!",
						"japanese": "私…フゥ…ミスティック世界の記憶を持ってる。キャハハハ！とっても幸せな記憶よ！",
						"chinese": "我……哼……我拥有神秘世界的记忆。哈哈哈！多么幸福的记忆啊！",
						"french": "Je… Hmm… J'ai des souvenirs du Monde Mystique. Kahahaha ! De si heureux souvenirs !",
						"spanish": "Yo… Hmph… Tengo recuerdos del Mundo Místico. ¡Jajajaja! ¡Qué recuerdos tan felices!",
						"vietnamese": "Ta… Hừm… Ta có ký ức về Thế giới Thần Bí. Khà khà khà! Thật là những ký ức hạnh phúc!",
						"thai": "ฉัน… หึ… ฉันมีความทรงจำของโลกมายา คิกคักคิกคัก! ความทรงจำที่มีความสุขจริงๆ!",
						"hindi": "मैं… हँफ… मुझे रहस्यवादी दुनिया की यादें हैं। कहकहा! ऐसी सुखद यादें!"
					}
				},
				{
					"content": {
						"korean": "일부 '행복한' 존재들이 과거의 기억 조각을 읊조리다 갑자기 웃으며 왜곡시킨다.",
						"english": "Some 'happy' beings recall fragments of past memories, then suddenly laugh and distort them.",
						"japanese": "一部の「幸せな」存在たちが過去の記憶の断片を呟き、突然笑いながら歪ませる。",
						"chinese": "一些“快乐”的存在低语着过去的记忆碎片，然后突然笑着扭曲它们。",
						"french": "Certains êtres « heureux » se remémorent des fragments de souvenirs passés, puis rient soudainement et les déforment.",
						"spanish": "Algunos seres 'felices' recitan fragmentos de recuerdos pasados, luego de repente ríen y los distorsionan.",
						"vietnamese": "Một số thực thể 'hạnh phúc' lẩm bẩm những mảnh ký ức quá khứ, rồi đột nhiên cười và bóp méo chúng.",
						"thai": "สิ่งมีชีวิต 'มีความสุข' บางตัวรำลึกถึงเศษเสี้ยวความทรงจำในอดีต จากนั้นก็หัวเราะและบิดเบือนมันทันที",
						"hindi": "कुछ 'खुश' प्राणी अतीत की यादों के टुकड़ों को याद करते हैं, फिर अचानक हँसते हैं और उन्हें विकृत कर देते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저건 고통이잖아. 왜 웃는 건데.",
						"english": "That's pain. Why are you laughing?",
						"japanese": "あれは苦痛だろ。なんで笑ってるんだ。",
						"chinese": "那是痛苦。你为什么笑？",
						"french": "C'est de la douleur. Pourquoi tu ris ?",
						"spanish": "Eso es dolor. ¿Por qué te ríes?",
						"vietnamese": "Đó là nỗi đau. Tại sao ngươi lại cười?",
						"thai": "นั่นคือความเจ็บปวด ทำไมถึงหัวเราะ?",
						"hindi": "वह दर्द है। तुम क्यों हँस रहे हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "고통? 으윽… 고통은 없어! 꺄르륵! 오직 기쁨뿐이야! 하지만… 흐으읍…",
						"english": "Pain? Ugh… There's no pain! Giggle! Only joy! But… Hmph…",
						"japanese": "苦痛？うぅ…苦痛はない！キャルル！喜びだけだ！だけど…フゥ…",
						"chinese": "痛苦？呃……没有痛苦！咯咯！只有喜悦！但是……哼……",
						"french": "Douleur ? Ugh… Il n'y a pas de douleur ! Rire ! Seulement de la joie ! Mais… Hmm…",
						"spanish": "¿Dolor? Ugh… ¡No hay dolor! ¡Risita! ¡Solo alegría! Pero… Hmph…",
						"vietnamese": "Đau khổ? Ư… Không có đau khổ! Cười khúc khích! Chỉ có niềm vui thôi! Nhưng… Hừm…",
						"thai": "ความเจ็บปวด? อึก… ไม่มีความเจ็บปวด! คิกคัก! มีแต่ความสุข! แต่… หึ…",
						"hindi": "दर्द? उह… कोई दर्द नहीं है! गिगल! केवल खुशी है! लेकिन… हँफ…"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…정말 괜찮은 거야?",
						"english": "…Are you really okay?",
						"japanese": "…本当に大丈夫なのか？",
						"chinese": "……你真的没事吗？",
						"french": "…Tu vas vraiment bien ?",
						"spanish": "¿…Estás realmente bien?",
						"vietnamese": "…Ngươi có thật sự ổn không?",
						"thai": "…คุณโอเคจริงๆ เหรอ?",
						"hindi": "…क्या तुम सच में ठीक हो?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "mara",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "후후… 알아. 너희가 보기엔 내가 이상하지? 꺄하하하! 나도 알아!",
						"english": "Hehe… I know. You think I'm weird, don't you? Kahahaha! I know that too!",
						"japanese": "フフ…知ってる。君たちが私を奇妙だと思ってるだろ？キャハハハ！それも知ってる！",
						"chinese": "呵呵……我知道。你们觉得我奇怪，对吧？哈哈哈！我也知道！",
						"french": "Héhé… Je sais. Vous me trouvez bizarre, n'est-ce pas ? Kahahaha ! Je le sais aussi !",
						"spanish": "Jeje… Lo sé. Crees que soy raro, ¿verdad? ¡Jajajaja! ¡Yo también lo sé!",
						"vietnamese": "Hê hê… Ta biết. Ngươi nghĩ ta kỳ lạ phải không? Khà khà khà! Ta cũng biết điều đó!",
						"thai": "ฮิฮิ… ฉันรู้ นายคิดว่าฉันแปลกใช่ไหม? คิกคักคิกคัก! ฉันก็รู้เหมือนกัน!",
						"hindi": "हेहे… मुझे पता है। तुम सोचते हो कि मैं अजीब हूँ, है ना? कहकहा! मुझे भी पता है!"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "마라…",
						"english": "Mara...",
						"japanese": "マーラ…",
						"chinese": "玛拉…",
						"french": "Mara...",
						"spanish": "Mara...",
						"vietnamese": "Mara...",
						"thai": "มารา...",
						"hindi": "मारा..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "맹목적으로 웃는 존재들의 눈빛에서 알 수 없는 공허함과 슬픔이 스쳐 지나간다.",
						"english": "A nameless emptiness and sorrow flash through the eyes of those who laugh blindly.",
						"japanese": "盲目的に笑う存在たちの瞳から、未知の虚無感と悲しみが通り過ぎる。",
						"chinese": "在盲目笑着的存在们的眼中，掠过一丝莫名的空虚和悲伤。",
						"french": "Une vacuité et une tristesse inconnues traversent le regard de ceux qui rient aveuglément.",
						"spanish": "Una vacuidad y tristeza desconocidas cruzan los ojos de aquellos que ríen ciegamente.",
						"vietnamese": "Một sự trống rỗng và nỗi buồn không tên thoáng qua trong mắt những kẻ cười một cách mù quáng.",
						"thai": "ความว่างเปล่าและความโศกเศร้าที่ไม่รู้จักแวบผ่านดวงตาของผู้ที่หัวเราะอย่างมืดบอด",
						"hindi": "अंधे होकर हंसने वाले प्राणियों की आँखों से एक अनकहा खालीपन और दुःख गुजर जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "차라리… 으윽… 차라리 죽는 게 나아… 흐으읍… 이 행복보다… 꺄르륵! 죽음이 더 행복할 거야!",
						"english": "Rather... Ugh... I'd rather die... Hngh... Than this happiness... Tee-hee! Death will be happier!",
						"japanese": "いっそ… ううっ… 死んだ方がマシだ… はぁ… この幸せよりも… キャハハ！死の方がもっと幸せだろう！",
						"chinese": "宁愿… 呃… 宁愿死… 呜呜… 比起这种幸福… 咯咯！死亡会更幸福！",
						"french": "Plutôt... Ugh... Je préférerais mourir... Hngh... Que ce bonheur... Hi-hi ! La mort sera plus heureuse !",
						"spanish": "Prefiero... Ugh... Prefiero morir... Hngh... Que esta felicidad... ¡Jijiji! ¡La muerte será más feliz!",
						"vietnamese": "Thà... Ư... Thà chết còn hơn... Hức... Hơn hạnh phúc này... Keke! Cái chết sẽ hạnh phúc hơn!",
						"thai": "สู้... อึก... สู้ตายดีกว่า... ฮือ... ดีกว่าความสุขนี้... คิกคัก! ความตายจะมีความสุขกว่า!",
						"hindi": "इससे अच्छा... उह... इससे अच्छा मर जाऊं... हँ... इस खुशी से बेहतर... हीही! मौत ज़्यादा खुशी देगी!"
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저건 저주야.",
						"english": "...That's a curse.",
						"japanese": "…あれは呪いだ。",
						"chinese": "…那是一个诅咒。",
						"french": "...C'est une malédiction.",
						"spanish": "...Eso es una maldición.",
						"vietnamese": "...Đó là một lời nguyền.",
						"thai": "...นั่นมันคำสาป",
						"hindi": "...वह एक अभिशाप है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_3"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 중간보스에게서 기괴한 웃음소리가 멎었다.",
						"english": "The grotesque laughter ceased from the fallen mid-boss.",
						"japanese": "倒れた中ボスから、不気味な笑い声が止んだ。",
						"chinese": "从倒下的中Boss身上，怪异的笑声停止了。",
						"french": "Le rire grotesque cessa du boss intermédiaire tombé.",
						"spanish": "La risa grotesca cesó del jefe intermedio caído.",
						"vietnamese": "Tiếng cười kỳ dị đã ngừng từ tên trùm phụ đã ngã xuống.",
						"thai": "เสียงหัวเราะประหลาดจากหัวหน้ากึ่งบอสที่ล้มลงหยุดลงแล้ว",
						"hindi": "गिरे हुए मिड-बॉस से अजीबोगरीब हंसी रुक गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흐읍… 왜… 꺄하하하… 내가… 으윽… 왜 아픈 거지?",
						"english": "Hngh... Why... Kyahahaha... Am I... Ugh... Why am I hurting?",
						"japanese": "はぁ… なぜ… キャハハハ… 私は… ううっ… なぜ痛いんだ？",
						"chinese": "呜呜… 为什么… 咯哈哈哈哈… 我… 呃… 为什么会痛呢？",
						"french": "Hngh... Pourquoi... Kyahahaha... Ai-je... Ugh... Pourquoi est-ce que j'ai mal ?",
						"spanish": "Hngh... ¿Por qué... Kyahahaha... yo... Ugh... Por qué me duele?",
						"vietnamese": "Hức... Sao... Kyahahaha... Tôi... Ư... Sao tôi lại đau thế này?",
						"thai": "ฮือ... ทำไม... คิกคักคิกคัก... ฉัน... อึก... ทำไมถึงเจ็บล่ะ?",
						"hindi": "हँ... क्यों... क्युहाहाहा... मैं... उह... मुझे दर्द क्यों हो रहा है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게 진짜 네 모습이야.",
						"english": "This is your true self.",
						"japanese": "これが本当の君の姿だ。",
						"chinese": "这才是你真正的样子。",
						"french": "C'est votre véritable nature.",
						"spanish": "Esta es tu verdadera forma.",
						"vietnamese": "Đây mới là con người thật của ngươi.",
						"thai": "นี่คือตัวตนที่แท้จริงของคุณ",
						"hindi": "यही तुम्हारा असली रूप है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "비틀린 행복의 근원은 여전히 미궁 속에 있었다. 더 깊은 곳으로 가야 했다.",
						"english": "The source of twisted happiness remained a mystery. We had to go deeper.",
						"japanese": "歪んだ幸福の源は依然として迷宮の中だった。もっと深部へ進む必要があった。",
						"chinese": "扭曲的幸福之源仍是未解之谜。必须深入更深之处。",
						"french": "L'origine du bonheur tordu restait un mystère. Il fallait aller plus loin.",
						"spanish": "La fuente de la felicidad retorcida seguía siendo un misterio. Teníamos que ir más profundo.",
						"vietnamese": "Nguồn gốc của hạnh phúc méo mó vẫn còn trong mê cung. Chúng ta phải đi sâu hơn nữa.",
						"thai": "ต้นกำเนิดของความสุขที่บิดเบี้ยวยังคงเป็นปริศนา เราต้องลงไปให้ลึกกว่านี้",
						"hindi": "विकृत खुशी का स्रोत अभी भी एक रहस्य था। हमें और गहराई में जाना पड़ा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "다시금 기괴한 웃음이 공간을 채웠다.",
						"english": "Once again, grotesque laughter filled the space.",
						"japanese": "再び、奇怪な笑い声が空間を満たした。",
						"chinese": "怪异的笑声再次充斥着空间。",
						"french": "De nouveau, un rire grotesque emplit l'espace.",
						"spanish": "Una vez más, una risa grotesca llenó el espacio.",
						"vietnamese": "Một lần nữa, tiếng cười quái dị lại vang vọng khắp không gian.",
						"thai": "เสียงหัวเราะประหลาดกลับมาเติมเต็มพื้นที่อีกครั้ง",
						"hindi": "एक बार फिर, विकट हँसी ने जगह भर दी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "꺄르륵! 도망치는 거야? 어서 돌아와서 행복해져!",
						"english": "Giggle! Running away? Come back and be happy!",
						"japanese": "クスクス！逃げるのかい？早く戻ってきて幸せになりなさい！",
						"chinese": "咯咯！要逃跑吗？快回来，变得幸福吧！",
						"french": "Huhu ! Vous vous enfuyez ? Revenez vite et soyez heureux !",
						"spanish": "¡Jeje! ¿Huyendo? ¡Vuelve y sé feliz!",
						"vietnamese": "Cười khúc khích! Chạy trốn à? Mau quay lại và hạnh phúc đi!",
						"thai": "คิกคิก! หนีไปเหรอ? รีบกลับมาแล้วมีความสุขซะ!",
						"hindi": "खिलखिलाहट! भाग रहे हो? वापस आओ और खुश रहो!"
					}
				},
				{
					"content": {
						"korean": "이딴 행복… 절대 인정 못 해.",
						"english": "This kind of happiness... I can never accept it.",
						"japanese": "こんな幸福… 絶対に認めない。",
						"chinese": "这种幸福… 我绝不承认。",
						"french": "Ce genre de bonheur… jamais je ne l'accepterai.",
						"spanish": "Esta clase de felicidad… Jamás la aceptaré.",
						"vietnamese": "Thứ hạnh phúc này… tôi tuyệt đối không chấp nhận.",
						"thai": "ความสุขแบบนี้... ฉันไม่มีวันยอมรับเด็ดขาด",
						"hindi": "इस तरह की खुशी... मैं इसे कभी स्वीकार नहीं कर सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모든 웃음의 끝에, 왜곡된 행복의 중간보스가 기다리고 있었다.",
						"english": "At the end of all laughter, the mid-boss of distorted happiness awaited.",
						"japanese": "すべての笑いの果てに、歪んだ幸福の中ボスが待ち構えていた。",
						"chinese": "在所有笑容的尽头，扭曲幸福的中Boss正在等待。",
						"french": "Au bout de tous les rires, le boss intermédiaire du bonheur déformé attendait.",
						"spanish": "Al final de todas las risas, el jefe intermedio de la felicidad distorsionada esperaba.",
						"vietnamese": "Ở cuối mọi tiếng cười, tên trùm phụ của hạnh phúc méo mó đang chờ đợi.",
						"thai": "ที่ปลายสุดของเสียงหัวเราะทั้งหมด หัวหน้ากึ่งบอสแห่งความสุขที่บิดเบี้ยวรออยู่",
						"hindi": "सभी हंसी के अंत में, विकृत खुशी का मिड-बॉस इंतजार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "꺄하하하! 어서 와! 넌 여기서 영원한 행복을 얻을 거야!",
						"english": "Kyahahaha! Welcome! You'll find eternal happiness here!",
						"japanese": "キャハハハ！ようこそ！君はここで永遠の幸せを手に入れるだろう！",
						"chinese": "咯哈哈哈哈！欢迎！你将在这里获得永恒的幸福！",
						"french": "Kyahahaha ! Bienvenue ! Tu trouveras le bonheur éternel ici !",
						"spanish": "¡Jajajajaja! ¡Bienvenido! ¡Aquí encontrarás la felicidad eterna!",
						"vietnamese": "Kyahahaha! Chào mừng! Ngươi sẽ tìm thấy hạnh phúc vĩnh cửu ở đây!",
						"thai": "คิกคักคิกคัก! ยินดีต้อนรับ! เธอจะได้รับความสุขนิรันดร์ที่นี่!",
						"hindi": "क्युहाहाहा! स्वागत है! तुम्हें यहाँ शाश्वत खुशी मिलेगी!"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"type": "direction",
					"speaker": "mara"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "안돼… 흐읍… 도망쳐… 꺄르륵! 이곳은… 죽음보다… 흐아아아! 행복한 곳이니까!",
						"english": "No... Hngh... Run away... Tee-hee! This place is... more... Hwaaa! ...happier than death!",
						"japanese": "ダメだ… はぁ… 逃げろ… キャハハ！ここは… 死よりも… ふあああ！幸せな場所だから！",
						"chinese": "不… 呜呜… 快跑… 咯咯！这里比… 呜哇啊啊！…死亡更幸福！",
						"french": "Non... Hngh... Fuis... Hi-hi ! Cet endroit est... plus... Hwaaa ! ...heureux que la mort !",
						"spanish": "No... Hngh... Huye... ¡Jijiji! ¡Este lugar es... más... Hwaaa! ...feliz que la muerte!",
						"vietnamese": "Không... Hức... Chạy đi... Keke! Nơi này... còn... Hwaaa! ...hạnh phúc hơn cái chết!",
						"thai": "ไม่นะ... ฮือ... หนีไป... คิกคัก! ที่นี่... มัน... ฮือออ! ...มีความสุขกว่าความตายอีก!",
						"hindi": "नहीं... हँ... भागो... हीही! यह जगह... मौत से भी... हुवाआ! ...ज़्यादा खुशहाल है!"
					},
					"emotion": "sad"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"speaker": "mara",
					"direction": "down"
				},
				{
					"content": {
						"korean": "더 이상 안돼. 이 왜곡을 끝내겠어.",
						"english": "No more. I'll put an end to this distortion.",
						"japanese": "もうたくさんだ。この歪みを終わらせる。",
						"chinese": "不能再这样了。我要结束这种扭曲。",
						"french": "Plus maintenant. Je vais mettre fin à cette distorsion.",
						"spanish": "No más. Pondré fin a esta distorsión.",
						"vietnamese": "Không thể chịu đựng được nữa. Tôi sẽ chấm dứt sự méo mó này.",
						"thai": "ไม่แล้ว ฉันจะยุติความบิดเบี้ยวนี้ซะ",
						"hindi": "और नहीं। मैं इस विकृति को खत्म कर दूंगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"미스틱 세계의 잔혹한 기억들이, 이젠 웃음으로 덧칠된다.",
			"고통스러울수록 더 크게 웃어야 하는 지옥.",
			"마라는 그 모든 비극의 산증인이었다.",
			"그녀의 웃음 속엔, 찢겨진 비명이 숨어 있었다."
		],
		"english": [
			"The cruel memories of the Mystic World are now painted over with laughter.",
			"A hell where the more painful it is, the louder one must laugh.",
			"Mara was the living witness to all those tragedies.",
			"Within her laughter, a torn scream was hidden."
		],
		"japanese": [
			"ミスティック世界の残酷な記憶が、今は笑い声で塗り替えられる。",
			"苦痛であればあるほど、より大きく笑わなければならない地獄。",
			"マラは、その全ての悲劇の生き証人だった。",
			"彼女の笑いの中には、引き裂かれた悲鳴が隠されていた。"
		],
		"chinese": [
			"神秘世界中残酷的记忆，如今被欢笑所覆盖。",
			"越痛苦，就越要大笑的地狱。",
			"玛拉是所有这些悲剧的活生生的见证人。",
			"在她的笑声中，隐藏着撕裂的尖叫。"
		],
		"french": [
			"Les souvenirs cruels du Monde Mystique sont maintenant recouverts de rires.",
			"Un enfer où plus la douleur est grande, plus on doit rire fort.",
			"Mara était le témoin vivant de toutes ces tragédies.",
			"Dans son rire se cachait un cri déchiré."
		],
		"spanish": [
			"Los crueles recuerdos del Mundo Místico, ahora se tiñen de risas.",
			"Un infierno donde cuanto más doloroso es, más fuerte hay que reír.",
			"Mara fue la testigo viviente de todas esas tragedias.",
			"Dentro de su risa, se escondía un grito desgarrado."
		],
		"vietnamese": [
			"Những ký ức tàn khốc của Thế giới Thần bí, giờ đây được che đậy bằng tiếng cười.",
			"Địa ngục mà càng đau khổ, càng phải cười lớn.",
			"Mara là nhân chứng sống cho mọi bi kịch đó.",
			"Trong tiếng cười của cô ấy, ẩn chứa một tiếng hét xé lòng."
		],
		"thai": [
			"ความทรงจำอันโหดร้ายของโลกมิสติก บัดนี้ถูกระบายทับด้วยเสียงหัวเราะ",
			"นรกที่ยิ่งเจ็บปวด ยิ่งต้องหัวเราะดังขึ้น",
			"มาร่าคือพยานที่มีชีวิตของโศกนาฏกรรมทั้งหมดนั้น",
			"ภายในเสียงหัวเราะของเธอ ซ่อนเสียงกรีดร้องที่ฉีกขาดอยู่"
		],
		"hindi": [
			"रहस्यमयी दुनिया की क्रूर यादें, अब हँसी से ढँक दी गई हैं।",
			"एक ऐसा नर्क जहाँ जितना अधिक दर्द हो, उतना ही तेज़ी से हँसना पड़ता है।",
			"मारा उन सभी त्रासदियों की जीवित गवाह थी।",
			"उसकी हँसी में, एक फटी हुई चीख छिपी हुई थी।"
		]
	}
} as const;
