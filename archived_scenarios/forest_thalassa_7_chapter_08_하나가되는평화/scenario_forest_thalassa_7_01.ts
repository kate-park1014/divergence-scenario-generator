export const scenario_forest_thalassa_7_01 = {
	"scenario_id": "forest_thalassa_7_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
					"content": {
						"korean": "숲의 가장 깊은 곳. 치유의 노래가 희미하게 들려온다.",
						"english": "The deepest part of the forest. A faint healing song can be heard.",
						"japanese": "森の最も深い場所。癒やしの歌がかすかに聞こえてくる。",
						"chinese": "森林最深处。隐约传来治愈之歌。",
						"french": "La partie la plus profonde de la forêt. Un chant de guérison faible peut être entendu.",
						"spanish": "La parte más profunda del bosque. Se escucha una tenue canción de curación.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng. Một khúc ca chữa lành yếu ớt vọng lại.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เสียงเพลงแห่งการเยียวยาดังแว่วมาเบาๆ",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक मंद उपचार गीत सुनाई देता है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그 정령이 있는 곳인가?",
						"english": "Is this... where the spirit is?",
						"japanese": "ここが…その精霊がいる場所なのか？",
						"chinese": "这里就是……那个精灵所在的地方吗？",
						"french": "C'est ici... où se trouve l'esprit ?",
						"spanish": "¿Es aquí... donde está el espíritu?",
						"vietnamese": "Đây có phải... là nơi tinh linh đó trú ngụ?",
						"thai": "นี่คือ...ที่ที่วิญญาณนั้นอยู่หรือ?",
						"hindi": "क्या यह... वह जगह है जहाँ आत्मा है?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "…왔구나. 상처 입은 자들이여.",
						"english": "...You have come. O wounded ones.",
						"japanese": "…来たか。傷ついた者たちよ。",
						"chinese": "……你们来了。受伤的人们啊。",
						"french": "...Vous êtes venus. Ô blessés.",
						"spanish": "...Habéis venido. Oh, heridos.",
						"vietnamese": "...Các ngươi đã đến. Hỡi những kẻ bị thương.",
						"thai": "...เจ้ามาแล้วหรือ. โอ้ ผู้บาดเจ็บเอ๋ย.",
						"hindi": "...तुम आ गए। हे घायल लोगों।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "내 수액이… 그대들의 고통을 거두어 갈지니.",
						"english": "My sap shall... take away your suffering.",
						"japanese": "私の樹液が…お前たちの苦痛を取り去ろう。",
						"chinese": "我的树液……将带走你们的痛苦。",
						"french": "Ma sève... emportera vos souffrances.",
						"spanish": "Mi savia... quitará vuestro sufrimiento.",
						"vietnamese": "Nhựa của ta... sẽ xua đi nỗi đau của các ngươi.",
						"thai": "ยางไม้ของข้า...จะนำพาความทุกข์ทรมานของเจ้าออกไป",
						"hindi": "मेरा रस... तुम्हारे दुख को दूर करेगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "저게… 나무 정령인가….",
						"english": "Is that... the tree spirit...?",
						"japanese": "あれが…木の精霊なのか…。",
						"chinese": "那个……就是树精吗……。",
						"french": "C'est ça... l'esprit des arbres...?",
						"spanish": "¿Es ese... el espíritu del árbol...?",
						"vietnamese": "Đó có phải... là tinh linh cây...?",
						"thai": "นั่นคือ...วิญญาณต้นไม้หรือ...",
						"hindi": "क्या वह... वृक्ष आत्मा है...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "두려워 말라. 고통은 사라질 것이다.",
						"english": "Fear not. Your pain shall vanish.",
						"japanese": "恐れるな。苦痛は消え去るだろう。",
						"chinese": "毋需恐惧。痛苦将会消失。",
						"french": "Ne craignez rien. Votre douleur disparaîtra.",
						"spanish": "No temáis. Vuestro dolor desaparecerá.",
						"vietnamese": "Đừng sợ hãi. Nỗi đau của ngươi sẽ tan biến.",
						"thai": "อย่ากลัวเลย. ความเจ็บปวดของเจ้าจะหายไป.",
						"hindi": "डरो मत। तुम्हारा दर्द मिट जाएगा।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "정말… 괜찮을까?",
						"english": "Are you really... okay?",
						"japanese": "本当に…大丈夫かな？",
						"chinese": "真的…没事吗？",
						"french": "Vraiment… ça va aller ?",
						"spanish": "¿En serio… estará bien?",
						"vietnamese": "Thật sự… sẽ ổn chứ?",
						"thai": "จะ…ไม่เป็นไรจริงๆ เหรอ?",
						"hindi": "क्या यह… सच में ठीक होगा?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이제 평화로워질 거야.",
						"english": "...Now, it will be peaceful.",
						"japanese": "…これで平和になる。",
						"chinese": "…现在会平静下来。",
						"french": "...Maintenant, ce sera paisible.",
						"spanish": "...Ahora habrá paz.",
						"vietnamese": "...Bây giờ sẽ bình yên thôi.",
						"thai": "...ตอนนี้จะสงบแล้วล่ะ.",
						"hindi": "...अब शांति होगी।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "브라켄의 상처에 투명한 수액이 닿자, 고통이 사라졌다.",
						"english": "As the clear sap touched Bracken's wound, the pain vanished.",
						"japanese": "ブラッケンの傷に透明な樹液が触れると、痛みが消えた。",
						"chinese": "透明的树液触及布莱肯的伤口，痛苦便消失了。",
						"french": "Dès que la sève transparente toucha la blessure de Bracken, la douleur disparut.",
						"spanish": "Cuando la savia transparente tocó la herida de Bracken, el dolor desapareció.",
						"vietnamese": "Khi nhựa cây trong suốt chạm vào vết thương của Bracken, nỗi đau biến mất.",
						"thai": "เมื่อน้ำเลี้ยงใสแตะบาดแผลของแบรคเคน ความเจ็บปวดก็หายไป",
						"hindi": "जैसे ही पारदर्शी रस ब्रैकन के घाव को छूता है, दर्द गायब हो जाता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…평화로워.",
						"english": "...Peaceful.",
						"japanese": "…平和だ。",
						"chinese": "…很平静。",
						"french": "...Paisible.",
						"spanish": "...En paz.",
						"vietnamese": "...Bình yên.",
						"thai": "...สงบ.",
						"hindi": "...शांतिपूर्ण।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라켄…?",
						"english": "Bracken...?",
						"japanese": "ブラッケン…？",
						"chinese": "布莱肯…？",
						"french": "Bracken...?",
						"spanish": "¿Bracken...?",
						"vietnamese": "Bracken...?",
						"thai": "แบรคเคน...?",
						"hindi": "ब्रैकन...?"
					},
					"speaker": "character_2",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "브라켄, 정말 괜찮아? 뭔가… 달라진 것 같아.",
						"english": "Bracken, are you really okay? You seem... different.",
						"japanese": "ブラッケン、本当に大丈夫？何だか…変わったみたい。",
						"chinese": "布莱肯，你真的没事吗？你好像…变了。",
						"french": "Bracken, tu vas vraiment bien ? Tu sembles… différent.",
						"spanish": "Bracken, ¿estás bien de verdad? Parece que… has cambiado.",
						"vietnamese": "Bracken, cậu thực sự ổn chứ? Cậu có vẻ… khác lạ.",
						"thai": "แบรคเคน นายโอเคจริงๆ เหรอ? ดูเหมือน…จะเปลี่ยนไปนะ.",
						"hindi": "ब्रैकन, क्या तुम सच में ठीक हो? तुम कुछ... बदले हुए लग रहे हो।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아무것도 달라진 건 없어. 그저… 평화로워.",
						"english": "Nothing has changed. It's just... peaceful.",
						"japanese": "何も変わってない。ただ…平和だ。",
						"chinese": "什么都没变。只是…很平静。",
						"french": "Rien n'a changé. C'est juste… paisible.",
						"spanish": "Nada ha cambiado. Solo… hay paz.",
						"vietnamese": "Không có gì thay đổi cả. Chỉ là… bình yên.",
						"thai": "ไม่มีอะไรเปลี่ยนไปหรอก แค่…สงบ.",
						"hindi": "कुछ भी नहीं बदला है। बस… शांतिपूर्ण है।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "저건 평화가 아니야. 공허한 미소잖아.",
						"english": "That's not peace. That's an empty smile.",
						"japanese": "あれは平和じゃない。虚ろな笑顔だ。",
						"chinese": "那不是平静。那是一个空洞的微笑。",
						"french": "Ce n'est pas la paix. C'est un sourire vide.",
						"spanish": "Eso no es paz. Es una sonrisa vacía.",
						"vietnamese": "Đó không phải là bình yên. Đó là một nụ cười trống rỗng.",
						"thai": "นั่นไม่ใช่ความสงบหรอก นั่นมันรอยยิ้มที่ว่างเปล่าต่างหาก.",
						"hindi": "वह शांति नहीं है। वह एक खाली मुस्कान है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그의 눈동자는 생기를 잃고 멍하니 숲을 응시했다.",
						"english": "His eyes lost their vitality, staring blankly into the forest.",
						"japanese": "彼の瞳は生気を失い、ぼんやりと森を見つめていた。",
						"chinese": "他的眼睛失去了生机，茫然地凝视着森林。",
						"french": "Ses yeux avaient perdu leur éclat, fixant la forêt d'un air absent.",
						"spanish": "Sus ojos perdieron su vitalidad, mirando fijamente el bosque.",
						"vietnamese": "Đôi mắt anh ta mất đi sức sống, nhìn chằm chằm vào rừng một cách vô hồn.",
						"thai": "ดวงตาของเขาไร้ชีวิตชีวา จ้องมองป่าอย่างเหม่อลอย.",
						"hindi": "उसकी आँखों ने अपनी जीवंतता खो दी थी, वह जंगल को खालीपन से घूर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "정령의 수액… 그게 대체 뭐야?",
						"english": "Spirit sap... what exactly is that?",
						"japanese": "精霊の樹液…それはいったい何？",
						"chinese": "精灵之液…那到底是什么？",
						"french": "La sève des esprits... qu'est-ce que c'est exactement ?",
						"spanish": "La savia del espíritu... ¿qué es eso exactamente?",
						"vietnamese": "Nhựa tinh linh... đó rốt cuộc là cái gì?",
						"thai": "น้ำเลี้ยงวิญญาณ...นั่นมันอะไรกันแน่?",
						"hindi": "आत्मा का रस... वह आखिर क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"content": {
						"korean": "…우릴 감싸는… 따스함.",
						"english": "...The warmth... embracing us.",
						"japanese": "...私たちを包み込む...温かさ。",
						"chinese": "...包裹着我们的...温暖。",
						"french": "...La chaleur... nous enveloppant.",
						"spanish": "...El calor... que nos envuelve.",
						"vietnamese": "...Sự ấm áp... bao bọc chúng ta.",
						"thai": "...ความอบอุ่น...ที่โอบกอดเราไว้",
						"hindi": "...हमें घेरे हुए... गर्माहट।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저건 치유가 아니야. 영혼을 잠식하는 독이야!",
						"english": "That's not healing. It's a poison that devours the soul!",
						"japanese": "あれは癒しじゃない。魂を蝕む毒だ！",
						"chinese": "那不是治愈。那是侵蚀灵魂的毒药！",
						"french": "Ce n'est pas une guérison. C'est un poison qui dévore l'âme !",
						"spanish": "Eso no es curación. ¡Es un veneno que devora el alma!",
						"vietnamese": "Đó không phải là sự chữa lành. Đó là chất độc ăn mòn linh hồn!",
						"thai": "นั่นไม่ใช่การรักษา มันคือยาพิษที่กัดกินวิญญาณ!",
						"hindi": "वह उपचार नहीं है। वह आत्मा को निगलने वाला ज़हर है!"
					},
					"speaker": "character_4",
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "…따뜻해… 모두에게… 이 평화를….",
						"english": "...It's warm... To everyone... this peace...",
						"japanese": "...温かい...皆に...この平和を...",
						"chinese": "...好温暖...愿这份平静...降临给所有人...",
						"french": "...C'est chaud... À tous... cette paix...",
						"spanish": "...Es cálido... A todos... esta paz...",
						"vietnamese": "...Ấm áp quá... Ước gì... mọi người cũng có được sự bình yên này...",
						"thai": "...อบอุ่น...มอบความสงบนี้...แก่ทุกคน...",
						"hindi": "...गर्म है... सबको... यह शांति..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "브라켄은 숲의 일부가 되어가는 듯했다.",
						"english": "Bracken seemed to be becoming one with the forest.",
						"japanese": "ブラッケンは森の一部と化していくようだった。",
						"chinese": "布拉肯仿佛正在成为森林的一部分。",
						"french": "Bracken semblait devenir une partie de la forêt.",
						"spanish": "Bracken parecía estar fusionándose con el bosque.",
						"vietnamese": "Bracken dường như đang trở thành một phần của khu rừng.",
						"thai": "แบร็กเคนดูเหมือนกำลังจะกลายเป็นส่วนหนึ่งของป่า",
						"hindi": "ब्रैकेन वन का हिस्सा बनता जा रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 나무의 형상이 그림자처럼 드리워졌다.",
						"english": "In the deepest part of the forest. The shape of a colossal tree loomed like a shadow.",
						"japanese": "森の最も深い場所。巨大な木の形が影のようにそびえ立っていた。",
						"chinese": "森林最深处。一棵巨树的轮廓如影般笼罩。",
						"french": "Dans la partie la plus profonde de la forêt. La silhouette d'un arbre colossal se dessinait comme une ombre.",
						"spanish": "En la parte más profunda del bosque. La silueta de un árbol colosal se alzaba como una sombra.",
						"vietnamese": "Trong sâu thẳm nhất của khu rừng. Hình dáng một cái cây khổng lồ hiện lên như một bóng ma.",
						"thai": "ในส่วนลึกที่สุดของป่า รูปร่างของต้นไม้ขนาดมหึมาทอดเงาลงมา",
						"hindi": "वन के सबसे गहरे हिस्से में। एक विशाल वृक्ष की आकृति एक छाया की तरह मंडरा रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…왔구나. 길 잃은 양떼들이여.",
						"english": "...You've come. Lost sheep.",
						"japanese": "...来たか。迷える子羊たちよ。",
						"chinese": "...你们来了。迷途的羔羊们。",
						"french": "...Vous êtes venus. Âmes égarées.",
						"spanish": "...Habéis venido. Ovejas perdidas.",
						"vietnamese": "...Các ngươi đã đến rồi. Hỡi những con chiên lạc lối.",
						"thai": "...มาแล้วสินะ แกะหลงทางทั้งหลาย",
						"hindi": "...तुम आ गए। भटकी हुई भेड़ों।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 수액은 모든 고통을 거두어 갈지니.",
						"english": "My sap shall take away all suffering.",
						"japanese": "我が樹液は全ての苦痛を取り除かん。",
						"chinese": "我的树液将带走所有痛苦。",
						"french": "Ma sève ôtera toute souffrance.",
						"spanish": "Mi savia se llevará todo el sufrimiento.",
						"vietnamese": "Nhựa cây của ta sẽ gột rửa mọi đau khổ.",
						"thai": "น้ำเลี้ยงของข้าจะขจัดความเจ็บปวดทั้งหมด",
						"hindi": "मेरा रस सभी पीड़ाओं को हर लेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "브라켄을 그렇게 만든 게 너지!",
						"english": "You're the one who did that to Bracken!",
						"japanese": "ブラッケンをあんな風にしたのはお前か！",
						"chinese": "是你让布拉肯变成那样的！",
						"french": "C'est toi qui as fait ça à Bracken !",
						"spanish": "¡Tú eres quien le hizo eso a Bracken!",
						"vietnamese": "Ngươi chính là kẻ đã khiến Bracken ra nông nỗi đó!",
						"thai": "แกเป็นคนทำแบร็กเคนให้เป็นแบบนั้นใช่ไหม!",
						"hindi": "ब्रैकेन को ऐसा तुमने ही बनाया है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 그에게 평화를 주었다. 너희에게도… 줄 것이다.",
						"english": "I gave him peace. And I will give it... to you too.",
						"japanese": "私は彼に平和を与えた。お前たちにも...与えよう。",
						"chinese": "我赐予了他平静。我也会赐予...你们。",
						"french": "Je lui ai donné la paix. Et je la donnerai... à vous aussi.",
						"spanish": "Le di paz. Y os la daré... a vosotros también.",
						"vietnamese": "Ta đã ban cho hắn sự bình yên. Và ta cũng sẽ ban cho... các ngươi.",
						"thai": "ข้ามอบความสงบให้เขา และข้าจะมอบมัน...ให้พวกเจ้าด้วย",
						"hindi": "मैंने उसे शांति दी। और मैं तुम्हें भी... दूँगा।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "우린… 너의 평화를 거부하겠다!",
						"english": "We... reject your peace!",
						"japanese": "我々は...お前の平和を拒否する！",
						"chinese": "我们...拒绝你的平静！",
						"french": "Nous... rejetons ta paix !",
						"spanish": "¡Nosotros... rechazamos tu paz!",
						"vietnamese": "Chúng ta... sẽ từ chối sự bình yên của ngươi!",
						"thai": "เรา...ขอปฏิเสธความสงบของเจ้า!",
						"hindi": "हम... तुम्हारी शांति को अस्वीकार करते हैं!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "고통은… 너희의 운명이다.",
						"english": "Pain... is your destiny.",
						"japanese": "苦痛は… お前たちの運命だ。",
						"chinese": "痛苦… 是你们的命运。",
						"french": "La douleur... est votre destin.",
						"spanish": "El dolor... es vuestro destino.",
						"vietnamese": "Đau khổ... là số phận của các ngươi.",
						"thai": "ความเจ็บปวด... คือชะตากรรมของพวกเจ้า",
						"hindi": "दर्द... तुम्हारा भाग्य है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 포기하지 않아!",
						"english": "Ugh... Not yet... I won't give up!",
						"japanese": "くっ… まだだ… 諦めない！",
						"chinese": "呃… 还没… 我不会放弃！",
						"french": "Ugh... Pas encore... Je n'abandonnerai pas !",
						"spanish": "Ugh... Todavía no... ¡No me rindo!",
						"vietnamese": "Khụ... Vẫn chưa... Tôi sẽ không bỏ cuộc!",
						"thai": "อึก... ยัง... ไม่ยอมแพ้!",
						"hindi": "उफ़... अभी नहीं... मैं हार नहीं मानूँगा!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 모두 나의 품으로 돌아오리라.",
						"english": "In the end... all shall return to my embrace.",
						"japanese": "結局… 全ては私の元へ戻るだろう。",
						"chinese": "最终… 你们都将回到我的怀抱。",
						"french": "Finalement... tous reviendront à mon étreinte.",
						"spanish": "Al final... todos regresarán a mi abrazo.",
						"vietnamese": "Cuối cùng... tất cả sẽ trở về vòng tay của ta.",
						"thai": "ในที่สุด... ทุกคนจะกลับสู่อ้อมกอดของข้า",
						"hindi": "आखिरकार... सभी मेरी गोद में लौट आएंगे।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 선택이로다.",
						"english": "...A foolish choice.",
						"japanese": "...愚かな選択だ。",
						"chinese": "...愚蠢的选择。",
						"french": "...Un choix insensé.",
						"spanish": "...Una elección insensata.",
						"vietnamese": "...Một lựa chọn ngu ngốc.",
						"thai": "...เป็นการเลือกที่โง่เขลา",
						"hindi": "...एक मूर्खतापूर्ण चुनाव।"
					}
				},
				{
					"content": {
						"korean": "하지만 기억해라… 고통 없는 삶은… 없다.",
						"english": "But remember... a life without pain... does not exist.",
						"japanese": "だが、覚えておけ… 苦痛なき生は… ない。",
						"chinese": "但请记住… 没有痛苦的生活… 是不存在的。",
						"french": "Mais souviens-toi... une vie sans douleur... n'existe pas.",
						"spanish": "Pero recuerda... una vida sin dolor... no existe.",
						"vietnamese": "Nhưng hãy nhớ rằng... một cuộc sống không đau khổ... là không thể tồn tại.",
						"thai": "แต่จำไว้... ชีวิตที่ปราศจากความเจ็บปวด... ไม่มีอยู่จริง",
						"hindi": "पर याद रखना... दर्द रहित जीवन... नहीं होता।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…이겼다.",
						"english": "...I won.",
						"japanese": "...勝った。",
						"chinese": "...赢了。",
						"french": "...J'ai gagné.",
						"spanish": "...Gané.",
						"vietnamese": "...Đã thắng.",
						"thai": "...ชนะแล้ว",
						"hindi": "...जीत गया।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 희미해지자, 숲은 잠시 평온을 되찾았다.",
						"english": "As the unknown shadow faded, the forest briefly regained its peace.",
						"japanese": "正体不明の影が薄れると、森はしばし平穏を取り戻した。",
						"chinese": "随着不明身影的消逝，森林暂时恢复了平静。",
						"french": "Alors que l'ombre inconnue s'estompait, la forêt retrouva un instant sa paix.",
						"spanish": "Mientras la sombra desconocida se desvanecía, el bosque recuperó brevemente su paz.",
						"vietnamese": "Khi bóng hình vô danh mờ dần, khu rừng tạm thời lấy lại được sự yên bình.",
						"thai": "เมื่อเงาลึกลับจางหายไป ป่าก็กลับคืนสู่ความสงบชั่วขณะ",
						"hindi": "जैसे ही अनजान साया धुंधला हुआ, जंगल ने थोड़ी देर के लिए अपनी शांति वापस पा ली।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 평화는 오래가지 않았다. 치유의 끝에 무엇이 기다리는지… 알아내야만 했다.",
						"english": "But the peace did not last long. What awaited at the end of healing... had to be discovered.",
						"japanese": "だが、平和は長くは続かなかった。癒しの果てに何が待ち受けるのか… 知る必要があった。",
						"chinese": "然而，和平并未持续多久。治愈的尽头等待着什么… 必须查明。",
						"french": "Mais la paix fut de courte durée. Ce qui attendait à la fin de la guérison... devait être découvert.",
						"spanish": "Pero la paz no duró mucho. Lo que esperaba al final de la curación... tenía que ser descubierto.",
						"vietnamese": "Nhưng hòa bình không kéo dài. Điều gì đang chờ đợi ở cuối con đường chữa lành... phải được tìm ra.",
						"thai": "แต่ความสงบสุขอยู่ได้ไม่นาน สิ่งใดที่รออยู่ ณ ปลายทางของการเยียวยา... ต้องถูกค้นพบ",
						"hindi": "परंतु शांति ज़्यादा देर तक नहीं टिकी। उपचार के अंत में क्या इंतज़ार कर रहा था... यह जानना ज़रूरी था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲 깊은 곳, 슬픈 노래가 들려온다.",
			"상처 입은 자들을 치유한다는 고대의 나무 정령.",
			"우리는 그 자애로운 위안의 끝에 무엇이 기다리는지, 그 진실을 찾아 나섰다.",
			"고통이 사라지고 평온이 찾아온다는 그 수액은… 과연 구원일까."
		],
		"english": [
			"Deep in the forest, a mournful song can be heard.",
			"An ancient tree spirit, said to heal the wounded.",
			"We embarked on a quest to find the truth of what awaits at the end of its benevolent solace.",
			"Its sap, said to erase pain and bring serenity... is it truly salvation?"
		],
		"japanese": [
			"森の奥深くから、悲しい歌が聞こえてくる。",
			"傷ついた者たちを癒すという、古の木の精霊。",
			"我々は、その慈悲深い慰めの果てに何が待ち受けるのか、その真実を探しに出た。",
			"痛みが消え去り、平安が訪れるというその樹液は…果たして救済なのだろうか。"
		],
		"chinese": [
			"森林深处，传来悲伤的歌声。",
			"传说能治愈受伤者的古老树精。",
			"我们踏上了寻找真相的旅程，探寻那仁慈慰藉尽头等待着什么。",
			"传说能消除痛苦、带来平静的树液……果真是救赎吗？"
		],
		"french": [
			"Au plus profond de la forêt, un chant triste résonne.",
			"Un ancien esprit des arbres, dit-on, qui guérit les blessés.",
			"Nous sommes partis en quête de la vérité sur ce qui attend au bout de ce réconfort bienveillant.",
			"Sa sève, censée effacer la douleur et apporter la sérénité... est-ce vraiment le salut ?"
		],
		"spanish": [
			"En lo profundo del bosque, se escucha una canción triste.",
			"Un antiguo espíritu del árbol, que se dice que cura a los heridos.",
			"Nos embarcamos en una búsqueda para encontrar la verdad de lo que aguarda al final de su benévolo consuelo.",
			"Su savia, de la que se dice que elimina el dolor y trae serenidad... ¿es realmente la salvación?"
		],
		"vietnamese": [
			"Sâu trong rừng thẳm, một khúc ca buồn văng vẳng.",
			"Một tinh linh cây cổ thụ, tương truyền có thể chữa lành vết thương cho những kẻ bị thương.",
			"Chúng tôi đã lên đường tìm kiếm sự thật về những gì chờ đợi ở cuối sự an ủi nhân từ đó.",
			"Nhựa cây ấy, được cho là xóa tan đau đớn và mang lại sự thanh bình... liệu có thực sự là sự cứu rỗi?"
		],
		"thai": [
			"ลึกเข้าไปในป่า เสียงเพลงอันเศร้าโศกดังแว่วมา",
			"วิญญาณต้นไม้โบราณ ว่ากันว่ารักษาผู้บาดเจ็บ",
			"เราออกเดินทางเพื่อค้นหาความจริงว่าอะไรกำลังรออยู่ที่จุดสิ้นสุดของความปลอบโยนอันเมตตานั้น",
			"ยางไม้ของมัน ว่ากันว่าจะลบความเจ็บปวดและนำมาซึ่งความสงบ... มันคือความรอดจริงหรือ?"
		],
		"hindi": [
			"जंगल की गहराई से, एक उदास गीत सुनाई देता है।",
			"एक प्राचीन वृक्ष आत्मा, जिसके बारे में कहा जाता है कि वह घायलों को ठीक करती है।",
			"हमने उस दयालु सांत्वना के अंत में क्या इंतजार कर रहा है, उस सच्चाई को खोजने के लिए यात्रा शुरू की।",
			"उसका रस, जिसके बारे में कहा जाता है कि वह दर्द को मिटाता है और शांति लाता है... क्या यह वास्तव में मोक्ष है?"
		]
	}
} as const;
