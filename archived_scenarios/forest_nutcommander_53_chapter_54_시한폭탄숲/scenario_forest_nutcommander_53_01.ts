export const scenario_forest_nutcommander_53_01 = {
	"scenario_id": "forest_nutcommander_53_01",
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
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "고대 숲의 입구. 웅장한 생명력이 가득했지만, 어딘가 스산했다.",
						"english": "Entrance to the ancient forest. Full of magnificent vitality, yet somehow eerie.",
						"japanese": "古の森の入り口。壮大な生命力に満ちていたが、どこか不気味だった。",
						"chinese": "古老森林的入口。充满了磅礴的生命力，却又有些阴森。",
						"french": "L'entrée de la forêt ancienne. Pleine d'une magnifique vitalité, mais étrangement sinistre.",
						"spanish": "Entrada al bosque antiguo. Llena de una vitalidad magnífica, pero de alguna manera inquietante.",
						"vietnamese": "Lối vào khu rừng cổ. Tràn đầy sức sống hùng vĩ, nhưng có gì đó rờn rợn.",
						"thai": "ทางเข้าป่าโบราณ เต็มไปด้วยพลังชีวิตอันยิ่งใหญ่ แต่ก็แฝงความวังเวง",
						"hindi": "प्राचीन वन का प्रवेश द्वार। शानदार जीवन शक्ति से भरा, फिर भी कहीं न कहीं डरावना।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숲이… 뭔가 이상해.",
						"english": "The forest... something's wrong with it.",
						"japanese": "森が… 何かおかしい。",
						"chinese": "森林...有些不对劲。",
						"french": "La forêt... quelque chose ne va pas.",
						"spanish": "El bosque... algo anda mal.",
						"vietnamese": "Rừng... có gì đó không ổn.",
						"thai": "ป่า... มีบางอย่างแปลกไป",
						"hindi": "वन... कुछ गड़बड़ है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔는가. 너희도 느꼈겠지. 숲의 저주가 시작됐어.",
						"english": "You've arrived. You must have felt it too. The forest's curse has begun.",
						"japanese": "来たか。お前たちも感じただろう。森の呪いが始まったぞ。",
						"chinese": "来了吗。你们也感觉到了吧。森林的诅咒已经开始了。",
						"french": "Vous êtes arrivés. Vous l'avez sûrement senti aussi. La malédiction de la forêt a commencé.",
						"spanish": "Habéis llegado. Vosotros también lo habréis sentido. La maldición del bosque ha comenzado.",
						"vietnamese": "Đã đến rồi à. Chắc các ngươi cũng cảm nhận được. Lời nguyền của rừng đã bắt đầu.",
						"thai": "มาแล้วสินะ พวกเจ้าคงรู้สึกได้ คำสาปของป่าได้เริ่มขึ้นแล้ว",
						"hindi": "आ गए तुम। तुमने भी महसूस किया होगा। वन का अभिशाप शुरू हो गया है।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저주라고? 믿기지 않아.",
						"english": "A curse? I can't believe it.",
						"japanese": "呪いだと？信じられない。",
						"chinese": "诅咒？难以置信。",
						"french": "Une malédiction ? Je n'arrive pas à y croire.",
						"spanish": "¿Una maldición? No puedo creerlo.",
						"vietnamese": "Lời nguyền sao? Không thể tin được.",
						"thai": "คำสาปหรือ? ไม่น่าเชื่อ",
						"hindi": "अभिशाप? मुझे विश्वास नहीं हो रहा।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "시간이 얼마 없어. '심장의 씨앗'을 찾아야만 숲을 구할 수 있어.",
						"english": "There's not much time. Only by finding 'The Seed of the Heart' can we save the forest.",
						"japanese": "時間がない。『心の種』を見つけなければ森を救えない。",
						"chinese": "时间不多了。只有找到'心脏之种'才能拯救森林。",
						"french": "Il ne reste plus beaucoup de temps. Ce n'est qu'en trouvant 'La Graine du Cœur' que nous pourrons sauver la forêt.",
						"spanish": "No queda mucho tiempo. Solo encontrando 'La Semilla del Corazón' podremos salvar el bosque.",
						"vietnamese": "Không còn nhiều thời gian. Chỉ khi tìm thấy 'Hạt giống của Trái tim' mới có thể cứu khu rừng.",
						"thai": "มีเวลาไม่มากแล้ว เราต้องหา 'เมล็ดพันธุ์แห่งหัวใจ' ให้พบถึงจะช่วยป่าไว้ได้",
						"hindi": "समय कम है। 'हृदय का बीज' ढूंढने पर ही हम वन को बचा सकते हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심장의 씨앗?",
						"english": "The Seed of the Heart?",
						"japanese": "心の種？",
						"chinese": "心脏之种？",
						"french": "La Graine du Cœur ?",
						"spanish": "¿La Semilla del Corazón?",
						"vietnamese": "Hạt giống của Trái tim?",
						"thai": "เมล็ดพันธุ์แห่งหัวใจ?",
						"hindi": "हृदय का बीज?"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저주가 깊어지고 있어. 식물들이… 죽는 게 아니야. 변하고 있어.",
						"english": "The curse is deepening. The plants… they aren't dying. They're changing.",
						"japanese": "呪いが深まっている。植物たちが…死んでいるんじゃない。変化しているんだ。",
						"chinese": "诅咒正在加深。植物们……它们不是在死去。它们正在变化。",
						"french": "La malédiction s'intensifie. Les plantes… elles ne meurent pas. Elles changent.",
						"spanish": "La maldición se está haciendo más profunda. Las plantas… no están muriendo. Están cambiando.",
						"vietnamese": "Lời nguyền đang sâu sắc hơn. Thực vật… chúng không chết. Chúng đang biến đổi.",
						"thai": "คำสาปกำลังลึกซึ้งขึ้น พืชพรรณ… พวกมันไม่ได้กำลังตาย พวกมันกำลังเปลี่ยนแปลง",
						"hindi": "शाप गहरा रहा है। पौधे… वे मर नहीं रहे हैं। वे बदल रहे हैं।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "변한다고?",
						"english": "Changing?",
						"japanese": "変化しているって？",
						"chinese": "变化？",
						"french": "Changer ?",
						"spanish": "¿Cambiando?",
						"vietnamese": "Biến đổi sao?",
						"thai": "เปลี่ยนแปลง?",
						"hindi": "बदल रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "오래된 존재들이 숲의 일부로 뒤틀리는 것 같아. 조심해야 해.",
						"english": "Ancient beings seem to be twisting into parts of the forest. Be careful.",
						"japanese": "古き存在が森の一部として歪んでいるようだ。気をつけろ。",
						"chinese": "远古的存在似乎正在扭曲，变成森林的一部分。你得小心。",
						"french": "D'anciennes entités semblent se tordre pour faire partie de la forêt. Sois prudent.",
						"spanish": "Parece que seres antiguos se están retorciendo, convirtiéndose en parte del bosque. Ten cuidado.",
						"vietnamese": "Những sinh vật cổ xưa dường như đang bị vặn vẹo, trở thành một phần của khu rừng. Phải cẩn thận.",
						"thai": "ดูเหมือนสิ่งมีชีวิตโบราณกำลังบิดเบี้ยวกลายเป็นส่วนหนึ่งของป่า ต้องระวัง",
						"hindi": "प्राचीन सत्ताएँ वन का हिस्सा बन कर विकृत हो रही हैं। तुम्हें सावधान रहना होगा।"
					}
				},
				{
					"content": {
						"korean": "이대로 보고만 있을 순 없어. 씨앗을 찾아야 해.",
						"english": "I can't just stand by. We need to find the seed.",
						"japanese": "このまま見てるわけにはいかない。種を見つけないと。",
						"chinese": "我不能袖手旁观。我们必须找到种子。",
						"french": "Je ne peux pas rester les bras croisés. Nous devons trouver la graine.",
						"spanish": "No puedo quedarme de brazos cruzados. Tenemos que encontrar la semilla.",
						"vietnamese": "Ta không thể đứng nhìn như thế này. Phải tìm hạt giống.",
						"thai": "ฉันจะยืนดูอยู่เฉยๆ ไม่ได้ เราต้องหาเมล็ดพันธุ์",
						"hindi": "मैं ऐसे ही खड़ा नहीं रह सकता। हमें बीज ढूँढना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "쉬운 일은 아닐 거야. 숲이 너희를 막으려 들 거야.",
						"english": "It won't be easy. The forest will try to stop you.",
						"japanese": "簡単なことではないだろう。森がお前たちを止めようとするはずだ。",
						"chinese": "这不会容易。森林会试图阻止你们。",
						"french": "Ce ne sera pas facile. La forêt essaiera de vous arrêter.",
						"spanish": "No será fácil. El bosque intentará deteneros.",
						"vietnamese": "Sẽ không dễ đâu. Khu rừng sẽ cố gắng ngăn cản ngươi.",
						"thai": "มันจะไม่ง่าย ป่าจะพยายามหยุดยั้งพวกเจ้า",
						"hindi": "यह आसान नहीं होगा। वन तुम्हें रोकने की कोशिश करेगा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 딱정벌레들, 도토리를 너무 많이 모으고 있어. 비정상적이야.",
						"english": "These beetles are collecting too many acorns. It's unnatural.",
						"japanese": "このカブトムシたち、ドングリを集めすぎている。異常だ。",
						"chinese": "这些甲虫收集了太多的橡子。这很不正常。",
						"french": "Ces coléoptères collectent trop de glands. C'est anormal.",
						"spanish": "Estos escarabajos están recogiendo demasiadas bellotas. Es antinatural.",
						"vietnamese": "Những con bọ này đang thu thập quá nhiều hạt sồi. Thật bất thường.",
						"thai": "ด้วงพวกนี้กำลังเก็บลูกโอ๊กมากเกินไป มันผิดปกติ",
						"hindi": "ये भृंग बहुत ज़्यादा शाहबलूत जमा कर रहे हैं। यह असामान्य है।"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저주가 숲의 질서를 깨고 있어. '심장의 씨앗'은 강력하지만… 대가가 따를 거야.",
						"english": "The curse is breaking the forest's order. The 'Seed of the Heart' is powerful, but… there will be a price.",
						"japanese": "呪いが森の秩序を破っている。「心の種」は強力だが…代償が伴うだろう。",
						"chinese": "诅咒正在打破森林的秩序。‘心脏之种’很强大，但……会有代价。",
						"french": "La malédiction brise l'ordre de la forêt. La 'Graine du Cœur' est puissante, mais… il y aura un prix à payer.",
						"spanish": "La maldición está rompiendo el orden del bosque. La 'Semilla del Corazón' es poderosa, pero… habrá un precio.",
						"vietnamese": "Lời nguyền đang phá vỡ trật tự của khu rừng. 'Hạt giống Trái tim' rất mạnh mẽ, nhưng… sẽ có một cái giá phải trả.",
						"thai": "คำสาปกำลังทำลายระเบียบของป่า 'เมล็ดพันธุ์แห่งหัวใจ' ทรงพลังแต่… จะต้องมีราคาที่ต้องจ่าย",
						"hindi": "शाप वन के व्यवस्था को भंग कर रहा है। 'हृदय का बीज' शक्तिशाली है, परंतु… इसकी एक कीमत चुकानी पड़ेगी।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "대가? 무슨 대가?",
						"english": "Price? What price?",
						"japanese": "代償？何の代償だ？",
						"chinese": "代价？什么代价？",
						"french": "Un prix ? Quel prix ?",
						"spanish": "¿Precio? ¿Qué precio?",
						"vietnamese": "Cái giá? Cái giá nào?",
						"thai": "ราคา? ราคาอะไร?",
						"hindi": "कीमत? कौन सी कीमत?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 소중한 것을 바쳐야 할지도 몰라. 그게 씨앗의 진정한 힘이야.",
						"english": "You might have to sacrifice the forest's most precious thing. That's the seed's true power.",
						"japanese": "森の最も大切なものを捧げなければならないかもしれない。それが種の真の力だ。",
						"chinese": "你可能需要献祭森林最珍贵的东西。那才是种子的真正力量。",
						"french": "Vous devrez peut-être sacrifier la chose la plus précieuse de la forêt. C'est le véritable pouvoir de la graine.",
						"spanish": "Puede que tengas que sacrificar lo más preciado del bosque. Ese es el verdadero poder de la semilla.",
						"vietnamese": "Ngươi có thể phải hy sinh thứ quý giá nhất của khu rừng. Đó là sức mạnh thật sự của hạt giống.",
						"thai": "เจ้าอาจจะต้องบูชายัญสิ่งที่ล้ำค่าที่สุดของป่า นั่นคือพลังที่แท้จริงของเมล็ดพันธุ์",
						"hindi": "तुम्हें वन के सबसे अनमोल चीज़ का बलिदान देना पड़ सकता है। वही बीज की सच्ची शक्ति है।"
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "어떤 대가든 치를 거야. 숲을 살려야 해.",
						"english": "I'll pay any price. The forest must be saved.",
						"japanese": "どんな代償でも払う。森を救わなければ。",
						"chinese": "无论什么代价，我都会付出。森林必须被拯救。",
						"french": "Je paierai n'importe quel prix. La forêt doit être sauvée.",
						"spanish": "Pagaré cualquier precio. El bosque debe ser salvado.",
						"vietnamese": "Ta sẽ trả bất kỳ cái giá nào. Phải cứu khu rừng.",
						"thai": "ไม่ว่าราคาเท่าไหร่ฉันก็จะจ่าย ป่าจะต้องได้รับการช่วยชีวิต",
						"hindi": "मैं कोई भी कीमत चुकाऊँगा। वन को बचाना होगा।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…부디 너희가 후회하지 않기를.",
						"english": "May you not regret this.",
						"japanese": "どうか、後悔なさいませんように。",
						"chinese": "愿你们不会后悔。",
						"french": "Puissiez-vous ne pas le regretter.",
						"spanish": "Que no os arrepintáis.",
						"vietnamese": "Mong rằng các ngươi sẽ không hối hận.",
						"thai": "ขอให้พวกเจ้าไม่เสียใจกับเรื่องนี้",
						"hindi": "आशा है कि तुम्हें पछतावा नहीं होगा।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장부에 가까워질수록 활력은 더욱 빠르게 스러졌다.",
						"english": "As we neared the forest's heart, our vitality withered ever more swiftly.",
						"japanese": "森の心臓部に近づくにつれて、活力はさらに急速に失われていった。",
						"chinese": "越接近森林之心，活力消逝得越快。",
						"french": "Plus nous nous approchions du cœur de la forêt, plus notre vitalité s'estompait rapidement.",
						"spanish": "Cuanto más nos acercábamos al corazón del bosque, más rápido se desvanecía nuestra vitalidad.",
						"vietnamese": "Càng gần trái tim khu rừng, sức sống càng mất đi nhanh chóng.",
						"thai": "ยิ่งเข้าใกล้ใจกลางป่ามากเท่าไหร่ พลังชีวิตก็ยิ่งร่วงโรยเร็วขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे हम जंगल के दिल के करीब आते गए, हमारी जीवन शक्ति उतनी ही तेज़ी से कम होती गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숨쉬기도 힘들어… 숲이 우리를 밀어내는 것 같아.",
						"english": "It's hard to breathe... It's like the forest is pushing us away.",
						"japanese": "息をするのも苦しい…森が私たちを拒絶しているようだ。",
						"chinese": "呼吸都困难了……森林好像在排斥我们。",
						"french": "C'est difficile de respirer... On dirait que la forêt nous repousse.",
						"spanish": "Es difícil respirar... Parece que el bosque nos está echando.",
						"vietnamese": "Khó thở quá... Cứ như khu rừng đang đẩy chúng ta ra vậy.",
						"thai": "หายใจยังลำบาก... เหมือนป่ากำลังผลักไสเราออกไป",
						"hindi": "सांस लेना भी मुश्किल हो रहा है... लगता है जंगल हमें दूर धकेल रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 돌아갈 수 없어. 저주는 이미 숲 전체를 집어삼켰어.",
						"english": "We can't go back now. The curse has already engulfed the entire forest.",
						"japanese": "もう戻れない。呪いはすでに森全体を飲み込んだ。",
						"chinese": "已经回不去了。诅咒已经吞噬了整片森林。",
						"french": "On ne peut plus revenir en arrière. La malédiction a déjà englouti toute la forêt.",
						"spanish": "Ya no podemos volver. La maldición ya ha devorado todo el bosque.",
						"vietnamese": "Không thể quay lại được nữa. Lời nguyền đã nuốt chửng cả khu rừng rồi.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว คำสาปได้กลืนกินป่าไปทั้งหมดแล้ว",
						"hindi": "अब हम वापस नहीं जा सकते। अभिशाप ने पहले ही पूरे जंगल को निगल लिया है।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "여기까지 왔는데 포기할 순 없어. 끝까지 갈 거야.",
						"english": "We've come this far, we can't give up. We'll go all the way.",
						"japanese": "ここまで来たのに、諦めるわけにはいかない。最後まで行くぞ。",
						"chinese": "都走到这里了，不能放弃。我要走到最后。",
						"french": "Nous sommes arrivés si loin, nous ne pouvons pas abandonner. Nous irons jusqu'au bout.",
						"spanish": "Hemos llegado hasta aquí, no podemos rendirnos. Iremos hasta el final.",
						"vietnamese": "Đến nước này rồi, không thể bỏ cuộc được. Chúng ta sẽ đi đến cùng.",
						"thai": "มาถึงขนาดนี้แล้ว จะยอมแพ้ไม่ได้ ฉันจะไปให้สุดทาง",
						"hindi": "हम इतनी दूर आ गए हैं, हार नहीं मान सकते। हम अंत तक जाएंगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 앞에, 숲의 첫 번째 수호자가 길을 막고 있을 거야. 조심해.",
						"english": "Up ahead, the forest's first guardian will be blocking the way. Be careful.",
						"japanese": "あの先に、森の最初の守護者が道を塞いでいるはずだ。気をつけろ。",
						"chinese": "前面，森林的第一个守护者会挡住去路。小心。",
						"french": "Devant, le premier gardien de la forêt bloquera le chemin. Fais attention.",
						"spanish": "Más adelante, el primer guardián del bosque estará bloqueando el camino. Ten cuidado.",
						"vietnamese": "Phía trước, người bảo hộ đầu tiên của khu rừng sẽ chặn đường. Cẩn thận đấy.",
						"thai": "ข้างหน้า ผู้พิทักษ์คนแรกของป่าจะขวางทางอยู่ ระวังตัวด้วย",
						"hindi": "आगे, जंगल का पहला संरक्षक रास्ता रोक रहा होगा। सावधान रहना।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 스러졌다. 그러나 숲의 침묵은 여전했다.",
						"english": "The colossal shadow fell. Yet, the forest remained silent.",
						"japanese": "巨大な影は倒れた。しかし、森の沈黙は変わらなかった。",
						"chinese": "巨大的黑影倒下了。然而，森林依旧寂静。",
						"french": "L'ombre colossale s'est effondrée. Pourtant, le silence de la forêt persistait.",
						"spanish": "La sombra colosal cayó. Sin embargo, el silencio del bosque permaneció.",
						"vietnamese": "Cái bóng khổng lồ đã gục ngã. Thế nhưng, sự tĩnh lặng của khu rừng vẫn còn đó.",
						"thai": "เงาร่างมหึมาล้มลงแล้ว แต่ความเงียบงันของป่าก็ยังคงอยู่",
						"hindi": "विशाल छाया गिर गई। फिर भी, जंगल में सन्नाटा पसरा रहा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 겨우 시작일 뿐… 씨앗의 진정한 의미는… 너희를 절망시킬 것이다…",
						"english": "Heh heh... This is just the beginning... The true meaning of the seed... will drive you to despair...",
						"japanese": "クク…まだ始まりに過ぎぬ… 種の真の意味が…お前たちを絶望させるだろう…",
						"chinese": "呵呵……这不过是开始……种子的真正意义……会把你们推向绝望……",
						"french": "Hahaha... Ce n'est que le début... Le véritable sens de la graine... vous mènera au désespoir...",
						"spanish": "Je je... Esto es solo el principio... El verdadero significado de la semilla... os llevará a la desesperación...",
						"vietnamese": "Khà khà... Đây mới chỉ là khởi đầu thôi... Ý nghĩa thật sự của hạt giống... sẽ đẩy các ngươi vào tuyệt vọng...",
						"thai": "คิกๆ... นี่เป็นแค่จุดเริ่มต้นเท่านั้น... ความหมายที่แท้จริงของเมล็ด... จะผลักดันพวกเจ้าสู่ความสิ้นหวัง...",
						"hindi": "ही ही... यह तो बस शुरुआत है... बीज का असली अर्थ... तुम्हें निराशा में धकेल देगा..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났나? 하지만… 여전히 숲은….",
						"english": "Is it over? But... the forest still...",
						"japanese": "終わったのか？だが…まだ森は…。",
						"chinese": "结束了吗？但是……森林依然……",
						"french": "Est-ce fini ? Mais... la forêt est toujours...",
						"spanish": "¿Se acabó? Pero... el bosque sigue...",
						"vietnamese": "Xong rồi sao? Nhưng... khu rừng vẫn còn...",
						"thai": "จบแล้วหรือ? แต่... ป่ายังคง...",
						"hindi": "क्या यह खत्म हो गया? लेकिन... जंगल अभी भी..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "해냈구나… 하지만 저 말이 마음에 걸려.",
						"english": "You did it... But those words bother me.",
						"japanese": "やったな…だが、あの言葉が気になる。",
						"chinese": "你们做到了……但那些话让我很不安。",
						"french": "Vous avez réussi... Mais ces mots me tracassent.",
						"spanish": "Lo lograsteis... Pero esas palabras me inquietan.",
						"vietnamese": "Các ngươi đã làm được... Nhưng những lời đó khiến ta bận tâm.",
						"thai": "พวกเจ้าทำได้แล้ว... แต่คำพูดเหล่านั้นทำให้ข้ากังวล",
						"hindi": "तुमने कर दिखाया... लेकिन वे शब्द मुझे परेशान कर रहे हैं।"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 저주는 더 깊은 곳에서 시작된 걸지도 몰라.",
						"english": "The forest's curse might have begun from a deeper place.",
						"japanese": "森の呪いは、もっと深い場所から始まったのかもしれない。",
						"chinese": "森林的诅咒也许是从更深的地方开始的。",
						"french": "La malédiction de la forêt a peut-être commencé plus profondément.",
						"spanish": "La maldición del bosque podría haber comenzado en un lugar más profundo.",
						"vietnamese": "Lời nguyền của khu rừng có lẽ đã bắt nguồn từ một nơi sâu thẳm hơn.",
						"thai": "คำสาปของป่าอาจเริ่มต้นจากที่ลึกกว่านั้น",
						"hindi": "जंगल का अभिशाप शायद कहीं गहरे से शुरू हुआ हो।"
					},
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "첫 번째 저주의 수호자가 쓰러졌다. 그러나 숲의 소멸을 막을 시간은 얼마 남지 않았다. '심장의 씨앗'을 향한 여정은 계속된다.",
						"english": "The first guardian of the curse has fallen. However, little time remains to prevent the forest's demise. The journey towards the 'Heart Seed' continues.",
						"japanese": "最初の呪いの守護者は倒れた。しかし、森の消滅を食い止める時間は残り少ない。「心の種」を求めて、旅は続く。",
						"chinese": "第一个诅咒的守护者倒下了。然而，阻止森林消亡的时间所剩无几。“心脏之种”的旅程仍在继续。",
						"french": "Le premier gardien de la malédiction est tombé. Cependant, il reste peu de temps pour empêcher la disparition de la forêt. Le voyage vers la « Graine du Cœur » continue.",
						"spanish": "El primer guardián de la maldición ha caído. Sin embargo, queda poco tiempo para evitar la desaparición del bosque. El viaje hacia la \"Semilla del Corazón\" continúa.",
						"vietnamese": "Kẻ bảo hộ lời nguyền đầu tiên đã gục ngã. Thế nhưng, thời gian để ngăn chặn sự hủy diệt của khu rừng không còn nhiều. Cuộc hành trình đến \"Hạt giống Trái tim\" vẫn tiếp diễn.",
						"thai": "ผู้พิทักษ์คำสาปตนแรกได้ล้มลงแล้ว อย่างไรก็ตาม เหลือเวลาไม่มากนักที่จะหยุดยั้งการล่มสลายของป่า การเดินทางสู่ 'เมล็ดแห่งหัวใจ' ยังคงดำเนินต่อไป",
						"hindi": "शाप का पहला संरक्षक गिर गया है। हालांकि, जंगल के विनाश को रोकने के लिए बहुत कम समय बचा है। 'हृदय बीज' की ओर यात्रा जारी है।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 변형된 의지가 모든 것을 압도했다.",
						"english": "The mutated will of the forest overwhelmed everything.",
						"japanese": "森の変異した意志が、すべてを圧倒した。",
						"chinese": "森林变异的意志吞噬了一切。",
						"french": "La volonté mutée de la forêt a tout submergé.",
						"spanish": "La voluntad mutada del bosque lo abrumó todo.",
						"vietnamese": "Ý chí biến dị của khu rừng đã lấn át tất cả.",
						"thai": "เจตจำนงที่ผิดเพี้ยนของป่าได้ครอบงำทุกสิ่ง",
						"hindi": "जंगल की परिवर्तित इच्छा ने सब कुछ अभिभूत कर दिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기해라. 너희는 숲의 저주를 막을 수 없어. 어리석은 발버둥일 뿐.",
						"english": "Give up. You cannot stop the forest's curse. It's a foolish struggle.",
						"japanese": "諦めろ。お前たちに森の呪いを止めることはできない。愚かな足掻きにすぎない。",
						"chinese": "放弃吧。你们无法阻止森林的诅咒。这只是徒劳的挣扎。",
						"french": "Abandonnez. Vous ne pouvez pas arrêter la malédiction de la forêt. C'est une lutte insensée.",
						"spanish": "Ríndanse. No pueden detener la maldición del bosque. Es una lucha inútil.",
						"vietnamese": "Hãy từ bỏ đi. Các ngươi không thể ngăn chặn lời nguyền của khu rừng. Đó chỉ là sự giãy giụa ngu ngốc.",
						"thai": "ยอมแพ้ซะ พวกเจ้าหยุดยั้งคำสาปของป่าไม่ได้ มันก็แค่การดิ้นรนที่โง่เขลาเท่านั้น",
						"hindi": "हार मान लो। तुम जंगल के श्राप को नहीं रोक सकते। यह सिर्फ एक मूर्खतापूर्ण संघर्ष है。"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "크윽… 이대로… 포기할 순 없어!",
						"english": "Ugh... I can't... give up like this!",
						"japanese": "くっ… このまま… 諦めるわけにはいかない！",
						"chinese": "呃啊… 这样… 不能放弃！",
						"french": "Ugh... Je ne peux pas... abandonner comme ça !",
						"spanish": "Ugh... ¡No puedo... rendirme así!",
						"vietnamese": "Khụ... Không thể... bỏ cuộc thế này được!",
						"thai": "อึก... จะยอม... แพ้แบบนี้ไม่ได้!",
						"hindi": "उफ़... मैं ऐसे... हार नहीं मान सकता!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 물러나! 여기서 죽을 순 없어! 다시 준비해야 해!",
						"english": "Retreat now! We can't die here! We need to prepare again!",
						"japanese": "早く退け！ここで死ぬわけにはいかない！もう一度準備を整えなければ！",
						"chinese": "快撤！不能死在这里！必须重新准备！",
						"french": "Retirez-vous vite ! On ne peut pas mourir ici ! Il faut se préparer à nouveau !",
						"spanish": "¡Retírense rápido! ¡No podemos morir aquí! ¡Tenemos que prepararnos de nuevo!",
						"vietnamese": "Mau rút lui! Không thể chết ở đây! Phải chuẩn bị lại!",
						"thai": "รีบถอยไป! จะตายที่นี่ไม่ได้! ต้องเตรียมตัวใหม่!",
						"hindi": "जल्दी पीछे हटो! हम यहाँ मर नहीं सकते! हमें फिर से तैयारी करनी होगी!"
					},
					"speaker": "bracken",
					"emotion": "sad"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "The heart of the forest. A giant shadow blocked the way.",
						"japanese": "森の心臓部。巨大な影が道を阻んだ。",
						"chinese": "森林之心。一个巨大的影子挡住了去路。",
						"french": "Le cœur de la forêt. Une ombre gigantesque bloquait le chemin.",
						"spanish": "El corazón del bosque. Una sombra gigante bloqueó el camino.",
						"vietnamese": "Trái tim khu rừng. Một bóng đen khổng lồ chặn đường.",
						"thai": "ใจกลางป่า เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जंगल का दिल। एक विशालकाय परछाई ने रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 침입자들. 이 숲의 저주는 거스를 수 없다.",
						"english": "Foolish intruders. The curse of this forest cannot be defied.",
						"japanese": "愚かな侵入者たちめ。この森の呪いは抗えぬ。",
						"chinese": "愚蠢的入侵者。这片森林的诅咒无法违抗。",
						"french": "Stupides intrus. La malédiction de cette forêt ne peut être déjouée.",
						"spanish": "Estúpidos intrusos. La maldición de este bosque no se puede desafiar.",
						"vietnamese": "Lũ xâm nhập ngu ngốc. Lời nguyền của khu rừng này không thể chống lại được.",
						"thai": "ผู้บุกรุกโง่เขลา คำสาปของป่านี้ไม่อาจต้านทานได้",
						"hindi": "मूर्ख घुसपैठियों। इस जंगल के अभिशाप को टाला नहीं जा सकता।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구냐! 우리 앞을 막지 마!",
						"english": "Who are you?! Don't block our way!",
						"japanese": "何者だ！我らの邪魔をするな！",
						"chinese": "你是谁！别挡我们的路！",
						"french": "Qui es-tu ?! Ne nous barre pas la route !",
						"spanish": "¡¿Quién eres?! ¡No nos bloquees el paso!",
						"vietnamese": "Ngươi là ai! Đừng cản đường chúng ta!",
						"thai": "แกเป็นใคร! อย่ามาขวางทางเรา!",
						"hindi": "कौन हो तुम! हमारा रास्ता मत रोको!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 숲의 변형된 의지. 너희의 희망은 절망으로 끝날 것이다.",
						"english": "I am the mutated will of the forest. Your hope will end in despair.",
						"japanese": "我は森の変容した意思。お前たちの希望は絶望に終わるだろう。",
						"chinese": "我是森林变异的意志。你们的希望将以绝望告终。",
						"french": "Je suis la volonté mutée de la forêt. Votre espoir s'achèvera dans le désespoir.",
						"spanish": "Soy la voluntad mutada del bosque. Vuestra esperanza terminará en desesperación.",
						"vietnamese": "Ta là ý chí biến dị của khu rừng. Hy vọng của các ngươi sẽ kết thúc trong tuyệt vọng.",
						"thai": "ข้าคือเจตจำนงที่แปรเปลี่ยนของป่า ความหวังของพวกเจ้าจะจบลงด้วยความสิ้นหวัง",
						"hindi": "मैं जंगल की परिवर्तित इच्छा हूं। तुम्हारी आशा निराशा में समाप्त होगी।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "도망쳐! 저건 네가 감당할 수 없어!",
						"english": "Run! You can't handle this!",
						"japanese": "逃げろ！あれはお前には荷が重い！",
						"chinese": "快跑！你对付不了那个！",
						"french": "Fuyez ! Vous ne pouvez pas gérer ça !",
						"spanish": "¡Huye! ¡No puedes con eso!",
						"vietnamese": "Chạy đi! Ngươi không đấu lại nó đâu!",
						"thai": "หนีไป! เจ้าต้านทานสิ่งนั้นไม่ไหวหรอก!",
						"hindi": "भागो! तुम इसका सामना नहीं कर सकते!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서, 브라켄! 우리가 해낼 거야!",
						"english": "Back off, Braken! We've got this!",
						"japanese": "下がって、ブラーケン！私たちがやるんだ！",
						"chinese": "退下，布莱肯！我们能行的！",
						"french": "Recule, Braken ! Nous allons y arriver !",
						"spanish": "¡Apártate, Braken! ¡Lo lograremos!",
						"vietnamese": "Lùi lại, Braken! Chúng ta sẽ làm được thôi!",
						"thai": "ถอยไป, บราเคน! เราจะจัดการเอง!",
						"hindi": "पीछे हटो, ब्राकेन! हम इसे कर लेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…안 돼!",
						"english": "...No!",
						"japanese": "…だめだ！",
						"chinese": "…不！",
						"french": "...Non !",
						"spanish": "¡...No!",
						"vietnamese": "...Không!",
						"thai": "...ไม่นะ!",
						"hindi": "...नहीं!"
					},
					"speaker": "bracken"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 숲에 드리워진 그림자. 생명의 활력이 점차 사라져간다.",
			"원인 모를 저주. 숲은 서서히 죽어가고 있었다.",
			"탐험대, 숲의 희망을 찾아 나선다. '심장의 씨앗'.",
			"그러나 저주는 예상보다 훨씬 깊고 어두웠다."
		],
		"english": [
			"Shadows loom over the ancient forest. Its vibrant life force slowly fades.",
			"A mysterious curse. The forest was slowly dying.",
			"The expedition sets out to find the forest's hope: 'The Seed of the Heart'.",
			"But the curse was far deeper and darker than expected."
		],
		"japanese": [
			"古の森に影が差す。生命の活力が次第に失われていく。",
			"原因不明の呪い。森は徐々に死んでいった。",
			"探検隊は森の希望、『心の種』を探しに出る。",
			"しかし、呪いは予想よりもはるかに深く暗かった。"
		],
		"chinese": [
			"古老森林笼罩着阴影。生命活力逐渐消逝。",
			"不明诅咒。森林正在缓慢死去。",
			"探险队出发寻找森林的希望：'心脏之种'。",
			"然而，诅咒比预想的要深沉黑暗得多。"
		],
		"french": [
			"Des ombres planent sur la forêt ancienne. La vitalité de la vie s'estompe peu à peu.",
			"Une malédiction inconnue. La forêt se mourait lentement.",
			"L'expédition part à la recherche de l'espoir de la forêt : 'La Graine du Cœur'.",
			"Mais la malédiction était bien plus profonde et sombre que prévu."
		],
		"spanish": [
			"Sombras se ciernen sobre el bosque antiguo. La vitalidad de la vida se desvanece lentamente.",
			"Una maldición desconocida. El bosque moría lentamente.",
			"La expedición parte en busca de la esperanza del bosque: 'La Semilla del Corazón'.",
			"Pero la maldición era mucho más profunda y oscura de lo esperado."
		],
		"vietnamese": [
			"Bóng tối bao trùm khu rừng cổ đại. Sức sống dần lụi tàn.",
			"Lời nguyền vô danh. Khu rừng đang dần chết đi.",
			"Đoàn thám hiểm lên đường tìm kiếm hy vọng của rừng: 'Hạt giống của Trái tim'.",
			"Nhưng lời nguyền sâu sắc và tăm tối hơn nhiều so với dự kiến."
		],
		"thai": [
			"เงาทมึนปกคลุมป่าโบราณ พลังชีวิตค่อยๆ จางหายไป",
			"คำสาปที่หาสาเหตุไม่ได้ ป่ากำลังจะตายอย่างช้าๆ",
			"หน่วยสำรวจออกเดินทางตามหาความหวังของป่า: 'เมล็ดพันธุ์แห่งหัวใจ'",
			"แต่คำสาปนั้นลึกและมืดมิดกว่าที่คาดไว้มาก"
		],
		"hindi": [
			"प्राचीन वन पर छाए साये। जीवन की शक्ति धीरे-धीरे मिट रही है।",
			"एक अज्ञात अभिशाप। वन धीरे-धीरे मर रहा था।",
			"अभियान दल वन की आशा खोजने निकला: 'हृदय का बीज'।",
			"लेकिन अभिशाप अपेक्षा से कहीं अधिक गहरा और अंधकारमय था।"
		]
	}
} as const;
