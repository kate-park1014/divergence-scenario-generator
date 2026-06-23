export const scenario_snowy_vendrick_5_02 = {
	"scenario_id": "snowy_vendrick_5_02",
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
	"prologue": {
		"korean": [
			"눈보라가 휘몰아치는 얼어붙은 땅, 그곳에 잊혀진 유적이 잠들어 있다.",
			"사냥꾼 핀과 함께, 우리는 고대의 그림자 속으로 발걸음을 옮긴다.",
			"기묘한 룬문자와 환영들이 속삭이는 잊혀진 맹세.",
			"숨겨진 진실은 거대한 대가를 요구할 것이다."
		],
		"english": [
			"In a frozen land scourged by blizzards, a forgotten ruin lies dormant.",
			"With Finn the Hunter, we step into the ancient shadows.",
			"Strange runes and specters whisper forgotten vows.",
			"The hidden truth will demand a great price."
		],
		"japanese": [
			"吹雪が荒れ狂う凍てつく大地、そこに忘れられた遺跡が眠っている。",
			"狩人フィンと共に、我々は古の影の中へと足を踏み入れる。",
			"奇妙なルーン文字と幻影が囁く、忘れ去られた誓い。",
			"隠された真実は、莫大な代償を要求するだろう。"
		],
		"chinese": [
			"在暴风雪肆虐的冰冻之地，沉睡着被遗忘的遗迹。",
			"与猎人芬恩一同，我们踏入古老的阴影之中。",
			"奇特的符文和幻象低语着被遗忘的誓言。",
			"隐藏的真相将要求巨大的代价。"
		],
		"french": [
			"Dans une terre gelée balayée par les blizzards, une ruine oubliée sommeille.",
			"Avec Finn le Chasseur, nous nous aventurons dans les ombres anciennes.",
			"D'étranges runes et apparitions murmurent des serments oubliés.",
			"La vérité cachée exigera un lourd tribut."
		],
		"spanish": [
			"En una tierra helada azotada por ventiscas, una ruina olvidada yace dormida.",
			"Con Finn el Cazador, nos adentramos en las sombras ancestrales.",
			"Extrañas runas y espectros susurran juramentos olvidados.",
			"La verdad oculta exigirá un gran precio."
		],
		"vietnamese": [
			"Trong một vùng đất băng giá bị bão tuyết hoành hành, một di tích bị lãng quên đang ngủ yên.",
			"Cùng với Thợ săn Finn, chúng ta bước vào bóng tối cổ xưa.",
			"Những chữ rune kỳ lạ và ảo ảnh thì thầm những lời thề bị lãng quên.",
			"Sự thật ẩn giấu sẽ đòi hỏi một cái giá đắt."
		],
		"thai": [
			"ในดินแดนน้ำแข็งที่ถูกพายุหิมะพัดกระหน่ำ ซากปรักหักพังที่ถูกลืมเลือนกำลังหลับใหล",
			"พร้อมกับฟินน์ นักล่า เราก้าวเข้าสู่เงามืดโบราณ",
			"อักษรรูนประหลาดและภาพหลอนกระซิบคำสาบานที่ถูกลืม",
			"ความจริงที่ซ่อนอยู่จะเรียกร้องราคาอันใหญ่หลวง"
		],
		"hindi": [
			"बर्फीले तूफानों से घिरी बर्फीली भूमि में, एक भूला हुआ खंडहर सोया हुआ है。",
			"शिकारी फिन के साथ, हम प्राचीन छाया में कदम रखते हैं।",
			"अजीबोगरीब रून्स और प्रेत भूले हुए प्रतिज्ञाएँ फुसफुसाते हैं।",
			"छिपी हुई सच्चाई एक बड़ी कीमत वसूलेगी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 유적의 입구, 서늘한 기운이 발목을 붙잡았다.",
						"english": "At the entrance to the frozen ruins, a chilling aura gripped my ankles.",
						"japanese": "凍てついた遺跡の入口、冷たい気が足首を掴んだ。",
						"chinese": "在冰冻遗迹的入口，一股寒意抓住了脚踝。",
						"french": "À l'entrée des ruines gelées, une aura glaciale me saisit les chevilles.",
						"spanish": "En la entrada de las ruinas congeladas, un aura helada me atenazó los tobillos.",
						"vietnamese": "Tại lối vào tàn tích đóng băng, một luồng khí lạnh lẽo nắm lấy mắt cá chân tôi.",
						"thai": "ที่ทางเข้ารูปร่างที่เยือกแข็ง มีออร่าเย็นยะเยือกจับที่ข้อเท้า",
						"hindi": "जमे हुए खंडहर के प्रवेश द्वार पर, एक सर्द आभा ने मेरे टखनों को जकड़ लिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이봐, 여기 심상치 않아. 옛 바이킹들의 유적이라고 하던데.",
						"english": "Hey, something's not right here. They say these are ancient Viking ruins.",
						"japanese": "おい、ここはただ事じゃない。昔のヴァイキングの遺跡だそうだ。",
						"chinese": "嘿，这里不寻常。据说这是古老的维京遗迹。",
						"french": "Hé, quelque chose cloche ici. On dit que ce sont d'anciennes ruines vikings.",
						"spanish": "Oye, algo no está bien aquí. Dicen que son ruinas vikingas antiguas.",
						"vietnamese": "Này, có gì đó không ổn ở đây. Người ta nói đây là tàn tích của người Viking cổ đại.",
						"thai": "เฮ้ ที่นี่ไม่ธรรมดาเลย พวกเขาบอกว่าเป็นซากปรักหักพังของไวกิ้งโบราณ",
						"hindi": "अरे, यहाँ कुछ ठीक नहीं है। वे कहते हैं कि ये प्राचीन वाइकिंग खंडहर हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기서 뭘 찾을 수 있을까?",
						"english": "What could we find here?",
						"japanese": "ここで何が見つかるだろう？",
						"chinese": "我们能在这里找到什么？",
						"french": "Que pourrions-nous trouver ici ?",
						"spanish": "¿Qué podríamos encontrar aquí?",
						"vietnamese": "Chúng ta có thể tìm thấy gì ở đây?",
						"thai": "เราจะพบอะไรที่นี่ได้บ้าง?",
						"hindi": "हमें यहाँ क्या मिल सकता है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "글쎄… 이상한 징표들이 보여. 조심해야 해.",
						"english": "Hmm... I see strange markings. We need to be careful.",
						"japanese": "うーん…奇妙な徴が見える。気をつけないと。",
						"chinese": "嗯……我看到奇怪的标记。我们得小心。",
						"french": "Hmm... Je vois des marques étranges. Il faut faire attention.",
						"spanish": "Hmm... Veo marcas extrañas. Tenemos que tener cuidado.",
						"vietnamese": "Hmm... Tôi thấy những dấu hiệu lạ. Chúng ta cần phải cẩn thận.",
						"thai": "อืม... ฉันเห็นสัญลักษณ์แปลกๆ เราต้องระวังตัวนะ",
						"hindi": "हम्म... मुझे अजीब निशान दिख रहे हैं। हमें सावधान रहना होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유적 깊은 곳, 금빛 룬문자가 새겨진 제단이 나타났다.",
						"english": "Deep within the ruins, an altar inscribed with golden runes appeared.",
						"japanese": "遺跡の奥深く、金色のルーン文字が刻まれた祭壇が現れた。",
						"chinese": "在遗迹深处，一座刻有金色符文的祭坛出现了。",
						"french": "Au plus profond des ruines, un autel orné de runes dorées apparut.",
						"spanish": "En lo profundo de las ruinas, apareció un altar con runas doradas.",
						"vietnamese": "Sâu trong tàn tích, một bàn thờ khắc chữ rune vàng xuất hiện.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง แท่นบูชาที่จารึกด้วยอักษรรูนสีทองก็ปรากฏขึ้น",
						"hindi": "खंडहर के गहरे भीतर, सुनहरे रून्स से खुदा एक वेदी प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "finn"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이런 룬문자들은 처음 봐. 예전부터 전해지는 미신이 있어. 맹세를 어기면 저주받는다고.",
						"english": "I've never seen runes like these. There's an old superstition: break an oath and be cursed.",
						"japanese": "こんなルーン文字は初めて見る。昔から伝わる迷信があるんだ。誓いを破れば呪われると。",
						"chinese": "我从未见过这样的符文。有一个古老的迷信：违背誓言就会受到诅咒。",
						"french": "Je n'ai jamais vu de runes comme celles-ci. Il y a une vieille superstition : rompre un serment, c'est être maudit.",
						"spanish": "Nunca había visto runas como estas. Hay una vieja superstición: romper un juramento y ser maldecido.",
						"vietnamese": "Tôi chưa bao giờ thấy những chữ rune như thế này. Có một mê tín cũ: phá vỡ lời thề sẽ bị nguyền rủa.",
						"thai": "ฉันไม่เคยเห็นอักษรรูนแบบนี้มาก่อน มีความเชื่อโบราณที่ว่า: ถ้าผิดคำสาบานจะถูกสาปแช่ง",
						"hindi": "मैंने ऐसे रून्स कभी नहीं देखे। एक पुरानी अंधविश्वास है: शपथ तोड़ो और शापित हो जाओ।"
					}
				},
				{
					"content": {
						"korean": "맹세? 마을에 들리던 자장가에도 빚과 약속 얘기가 나왔는데.",
						"english": "Oath? Even the lullabies in the village spoke of debts and promises.",
						"japanese": "誓い？村で聞いた子守唄にも、借りと約束の話が出てきたな。",
						"chinese": "誓言？村里听到的摇篮曲里也提到了债务和承诺。",
						"french": "Un serment ? Même les berceuses du village parlaient de dettes et de promesses.",
						"spanish": "¿Un juramento? Incluso las nanas del pueblo hablaban de deudas y promesas.",
						"vietnamese": "Lời thề? Ngay cả những bài hát ru trong làng cũng nhắc đến nợ nần và lời hứa.",
						"thai": "คำสาบาน? แม้แต่เพลงกล่อมเด็กในหมู่บ้านก็ยังพูดถึงหนี้สินและคำสัญญา",
						"hindi": "शपथ? गाँव में सुनी लोरी में भी क़र्ज़ और वादों की बात थी।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…요즘 자꾸 눈밭에 찢어진 두루마리가 보이는 꿈을 꿔. 피처럼 붉은 룬문자가 흘러.",
						"english": "...Lately, I keep dreaming of torn scrolls in a snowy field. Blood-red runes flow from them.",
						"japanese": "…最近、雪原に破れた巻物が見える夢ばかり見る。血のような赤いルーン文字が流れているんだ。",
						"chinese": "……最近我老是梦见雪地里有撕裂的卷轴。血红的符文在流淌。",
						"french": "...Ces temps-ci, je rêve sans cesse de parchemins déchirés dans un champ enneigé. Des runes rouge sang s'en écoulent.",
						"spanish": "...Últimamente, no paro de soñar con pergaminos rasgados en un campo nevado. Runas rojas como la sangre fluyen de ellos.",
						"vietnamese": "...Gần đây, tôi cứ mơ thấy những cuộn giấy bị xé rách trên cánh đồng tuyết. Các ký tự rune đỏ như máu đang chảy ra.",
						"thai": "...พักนี้ฉันฝันเห็นม้วนกระดาษที่ฉีกขาดกลางทุ่งหิมะบ่อยๆ มีอักษรรูนสีแดงฉานไหลออกมา",
						"hindi": "हाल ही में, मैं लगातार बर्फ़ीले मैदान में फटे हुए ताड़पत्रों का सपना देख रहा हूँ। खून जैसे लाल रूण उनमें से बह रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흐음… 좋지 않은 징조군. 더 깊이 들어가자. 단서가 더 있을 거야.",
						"english": "Hmm... A bad omen. Let's go deeper. There must be more clues.",
						"japanese": "ふむ…良くない兆候だな。もっと奥へ進もう。さらなる手がかりがあるはずだ。",
						"chinese": "嗯……这不是个好兆头。我们深入一点。应该会有更多线索。",
						"french": "Hmm... Un mauvais présage. Allons plus loin. Il doit y avoir d'autres indices.",
						"spanish": "Mmm... Un mal presagio. Vayamos más profundo. Debe haber más pistas.",
						"vietnamese": "Hừm… Một điềm xấu. Chúng ta đi sâu hơn nữa. Chắc chắn sẽ có thêm manh mối.",
						"thai": "อืม... เป็นลางไม่ดีเลยนะ เข้าไปลึกกว่านี้เถอะ ต้องมีเบาะแสมากกว่านี้แน่",
						"hindi": "हम्म... एक बुरा शगुन। चलो और गहराई में चलते हैं। और सुराग़ होने चाहिए।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환영이 아른거렸다. 거대한 그림자 아래, 족장들의 모습이 흐릿하게 스쳐 지나갔다.",
						"english": "A mirage flickered. Beneath colossal shadows, the figures of chieftains vaguely passed by.",
						"japanese": "幻影が揺らめいた。巨大な影の下、族長たちの姿がぼんやりと過ぎ去っていった。",
						"chinese": "幻影闪烁。在巨大的阴影下，族长们的模糊身影一闪而过。",
						"french": "Une illusion vacillait. Sous d'immenses ombres, les figures des chefs passèrent indistinctement.",
						"spanish": "Un espejismo parpadeó. Bajo sombras colosales, las figuras de los jefes pasaron vagamente.",
						"vietnamese": "Ảo ảnh chập chờn. Dưới những bóng tối khổng lồ, hình dáng của các thủ lĩnh lướt qua mờ ảo.",
						"thai": "ภาพลวงตาปรากฏขึ้น ภายใต้เงาขนาดมหึมา ร่างของหัวหน้าเผ่าปรากฏขึ้นเลือนลางแล้วหายไป",
						"hindi": "एक मृगतृष्णा टिमटिमाई। विशाल छायाओं के नीचे, सरदारों की आकृतियाँ अस्पष्ट रूप से गुज़र गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봤어? 족장들의 환영이 나타났어. 이 유적이 아직 살아있다는 증거야.",
						"english": "Did you see? The chieftains' phantoms appeared. It's proof this ruin is still alive.",
						"japanese": "見たか？族長たちの幻影が現れたぞ。この遺跡がまだ生きている証拠だ。",
						"chinese": "你看到了吗？族长们的幻影出现了。这是这座遗迹仍然活着的证据。",
						"french": "Tu as vu ? Les fantômes des chefs sont apparus. C'est la preuve que cette ruine est encore vivante.",
						"spanish": "¿Lo viste? Los fantasmas de los jefes aparecieron. Es la prueba de que esta ruina aún está viva.",
						"vietnamese": "Anh thấy không? Bóng ma của các thủ lĩnh đã xuất hiện. Đó là bằng chứng cho thấy di tích này vẫn còn sống.",
						"thai": "เห็นไหม? ภาพหลอนของหัวหน้าเผ่าปรากฏขึ้น เป็นหลักฐานว่าซากปรักหักพังแห่งนี้ยังคงมีชีวิต",
						"hindi": "देखा? सरदारों के प्रेत प्रकट हुए। यह इस बात का प्रमाण है कि यह खंडहर अभी भी जीवित है।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저들이 맹세의 주인이었나?",
						"english": "Were they the masters of the oath?",
						"japanese": "彼らが誓いの主だったのか？",
						"chinese": "他们是誓言的主人吗？",
						"french": "Étaient-ils les maîtres du serment ?",
						"spanish": "¿Eran ellos los dueños del juramento?",
						"vietnamese": "Họ có phải là chủ nhân của lời thề không?",
						"thai": "พวกเขาเป็นเจ้าของคำสาบานหรือเปล่า?",
						"hindi": "क्या वे शपथ के स्वामी थे?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마도. 저 룬문자들을 봐. 마을 어귀에서 봤던 푸른 오팔 꽃잎 무늬와 닮았어.",
						"english": "Probably. Look at those runes. They resemble the blue opal petal patterns we saw at the village entrance.",
						"japanese": "おそらく。あのルーン文字を見てみろ。村の入り口で見た青いオパール花びらの模様に似ている。",
						"chinese": "也许吧。看那些符文。它们和我们在村口看到的蓝色蛋白石花瓣图案很像。",
						"french": "Probablement. Regarde ces runes. Elles ressemblent aux motifs de pétales d'opale bleue que nous avons vus à l'entrée du village.",
						"spanish": "Probablemente. Mira esas runas. Se parecen a los patrones de pétalos de ópalo azul que vimos a la entrada del pueblo.",
						"vietnamese": "Có lẽ. Nhìn những chữ rune kia. Chúng giống với hoa văn cánh hoa opal xanh mà chúng ta đã thấy ở lối vào làng.",
						"thai": "น่าจะใช่ ลองดูอักษรรูนเหล่านั้นสิ มันคล้ายกับลวดลายกลีบดอกโอปอลสีน้ำเงินที่เราเห็นตรงทางเข้าหมู่บ้าน",
						"hindi": "शायद। उन रूणों को देखो। वे गाँव के प्रवेश द्वार पर हमने देखे नीले ओपल पंखुड़ी के पैटर्न से मिलते-जुलते हैं।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "점점 더 알 수 없게 돼… 이 유적은 뭘 숨기고 있는 거지?",
						"english": "It's getting more and more mysterious... What is this ruin hiding?",
						"japanese": "ますます分からなくなってきた…この遺跡は何を隠しているんだ？",
						"chinese": "越来越搞不懂了……这座遗迹到底藏着什么？",
						"french": "Ça devient de plus en plus mystérieux... Que cache cette ruine ?",
						"spanish": "Cada vez es más incomprensible... ¿Qué esconde esta ruina?",
						"vietnamese": "Càng ngày càng không hiểu được… Di tích này đang che giấu điều gì?",
						"thai": "ยิ่งไขปริศนายิ่งไม่เข้าใจ... ซากปรักหักพังนี้ซ่อนอะไรอยู่กันแน่?",
						"hindi": "यह और भी रहस्यमय होता जा रहा है... यह खंडहर क्या छिपा रहा है?"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "유적의 심장부, 공기가 무겁게 내려앉았다. 고대의 계약이 숨 쉬는 듯했다.",
						"english": "In the heart of the ruins, the air hung heavy. An ancient pact seemed to breathe.",
						"japanese": "遺跡の心臓部、空気が重く沈んでいた。古代の契約が息づいているかのようだった。",
						"chinese": "遗迹的深处，空气沉重地压了下来。古老的契约仿佛在呼吸。",
						"french": "Au cœur des ruines, l'air était lourd. Un pacte ancien semblait respirer.",
						"spanish": "En el corazón de las ruinas, el aire se sentía pesado. Un pacto antiguo parecía respirar.",
						"vietnamese": "Ở trung tâm di tích, không khí trở nên nặng nề. Một giao ước cổ xưa dường như đang thở.",
						"thai": "ในใจกลางซากปรักหักพัง อากาศดูหนักอึ้ง ราวกับพันธสัญญาโบราณกำลังหายใจ",
						"hindi": "खंडहरों के केंद्र में, हवा भारी थी। एक प्राचीन संधि साँस ले रही थी।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이봐, 이 이상은 위험해 보여. 뭔가 거대한 것이 깨어나려 하고 있어.",
						"english": "Hey, any further looks dangerous. Something massive is about to awaken.",
						"japanese": "おい、これ以上は危険そうだ。何か巨大なものが目覚めようとしている。",
						"chinese": "喂，再往前走就危险了。有什么巨大的东西要苏醒了。",
						"french": "Hé, aller plus loin semble dangereux. Quelque chose d'énorme est sur le point de s'éveiller.",
						"spanish": "Oye, ir más allá parece peligroso. Algo gigantesco está a punto de despertar.",
						"vietnamese": "Này, đi tiếp nữa có vẻ nguy hiểm. Có thứ gì đó khổng lồ sắp thức tỉnh.",
						"thai": "เฮ้ เกินกว่านี้อันตรายนะ มีบางสิ่งที่ยิ่งใหญ่กำลังจะตื่นขึ้นมา",
						"hindi": "हे, आगे जाना ख़तरनाक लग रहा है। कुछ बहुत बड़ा जागने वाला है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 멈출 수 없어. 마을의 진실을 알아야 해.",
						"english": "We can't stop. We need to uncover the truth of the village.",
						"japanese": "止まれない。村の真実を突き止めないと。",
						"chinese": "我们不能停下。必须查明村庄的真相。",
						"french": "Nous ne pouvons pas nous arrêter. Nous devons découvrir la vérité sur le village.",
						"spanish": "No podemos detenernos. Debemos descubrir la verdad del pueblo.",
						"vietnamese": "Chúng ta không thể dừng lại. Phải tìm ra sự thật của ngôi làng.",
						"thai": "เราหยุดไม่ได้ เราต้องรู้ความจริงของหมู่บ้าน",
						"hindi": "हम रुक नहीं सकते। हमें गाँव का सच जानना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "젠장, 이 기운… 무언가가 우릴 기다리고 있는 것 같아.",
						"english": "Damn, this aura... Something seems to be waiting for us.",
						"japanese": "くそ、この気配… 何かが俺たちを待っているようだ。",
						"chinese": "该死，这股气息… 好像有什么在等着我们。",
						"french": "Mince, cette aura… On dirait que quelque chose nous attend.",
						"spanish": "Maldita sea, esta aura... Parece que algo nos está esperando.",
						"vietnamese": "Chết tiệt, luồng khí này... Có vẻ như có thứ gì đó đang chờ chúng ta.",
						"thai": "แย่แล้ว, พลังงานนี้... เหมือนมีบางสิ่งกำลังรอเราอยู่",
						"hindi": "धिक्कार है, यह आभा… लगता है कुछ हमारा इंतज़ार कर रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대의 힘이 깃든 방. 정체 모를 그림자가 솟아올랐다.",
						"english": "A room imbued with ancient power. An unknown shadow emerged.",
						"japanese": "古代の力が宿る部屋。正体不明の影が浮かび上がった。",
						"chinese": "充斥着古老力量的房间。一个不明的影子浮现了。",
						"french": "Une pièce imprégnée de pouvoir ancien. Une ombre inconnue a surgi.",
						"spanish": "Una sala imbuida de poder ancestral. Una sombra desconocida emergió.",
						"vietnamese": "Căn phòng chứa sức mạnh cổ đại. Một bóng đen vô danh trỗi dậy.",
						"thai": "ห้องที่เต็มไปด้วยพลังโบราณ เงาลึกลับได้ปรากฏขึ้น",
						"hindi": "प्राचीन शक्ति से भरा कमरा। एक अज्ञात छाया उभरी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "누가 감히 잠든 맹세를 건드리는가?",
						"english": "Who dares disturb the slumbering oath?",
						"japanese": "誰が敢えて眠れる誓いを乱すのか？",
						"chinese": "谁敢触碰沉睡的誓约？",
						"french": "Qui ose troubler le serment endormi ?",
						"spanish": "¿Quién se atreve a perturbar el juramento dormido?",
						"vietnamese": "Ai dám chạm vào lời thề đang ngủ yên?",
						"thai": "ใครบังอาจปลุกคำสาบานที่หลับใหล?",
						"hindi": "कौन सोई हुई शपथ को छूने की हिम्मत करता है?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 이 유적을 지키는 존재인가?",
						"english": "Are you the guardian of these ruins?",
						"japanese": "お前がこの遺跡を守る者か？",
						"chinese": "你是这片遗迹的守护者吗？",
						"french": "Es-tu le gardien de ces ruines ?",
						"spanish": "¿Eres el guardián de estas ruinas?",
						"vietnamese": "Ngươi là kẻ bảo vệ di tích này sao?",
						"thai": "เจ้าคือผู้พิทักษ์ซากปรักหักพังเหล่านี้หรือ?",
						"hindi": "क्या तुम इन खंडहरों के रखवाले हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 잊혀진 약속의 파수꾼. 모든 침입자를 심판하리라.",
						"english": "I am the keeper of the forgotten promise. All intruders shall be judged.",
						"japanese": "我は忘れられた約束の番人。全ての侵入者を裁かん。",
						"chinese": "我是遗忘之约的守望者。所有入侵者都将受到审判。",
						"french": "Je suis le gardien de la promesse oubliée. Tous les intrus seront jugés.",
						"spanish": "Soy el guardián de la promesa olvidada. Todos los intrusos serán juzgados.",
						"vietnamese": "Ta là người canh giữ lời hứa đã lãng quên. Mọi kẻ xâm nhập sẽ bị phán xét.",
						"thai": "ข้าคือผู้เฝ้ารักษาสัญญาที่ถูกลืม ผู้บุกรุกทุกคนจะต้องถูกพิพากษา",
						"hindi": "मैं भूली हुई प्रतिज्ञा का रक्षक हूँ। सभी घुसपैठियों को न्याय मिलेगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "물러서, 이건 우리가 감당할 상대가 아니야!",
						"english": "Stand back, this is beyond our capabilities!",
						"japanese": "退け、こいつは俺たちが相手にするべきじゃない！",
						"chinese": "退后，这不是我们能对付的对手！",
						"french": "Reculez, ce n'est pas un adversaire que nous pouvons gérer !",
						"spanish": "¡Retrocede, este no es un oponente que podamos manejar!",
						"vietnamese": "Lùi lại, đây không phải đối thủ chúng ta có thể đối phó!",
						"thai": "ถอยไป, นี่ไม่ใช่คู่ต่อสู้ที่เราจะรับมือไหว!",
						"hindi": "पीछे हटो, यह वह नहीं है जिसका हम सामना कर सकते हैं!"
					},
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "늦었어, 핀. 맞서야 해.",
						"english": "Too late, Finn. We must face it.",
						"japanese": "遅い、フィン。戦うしかない。",
						"chinese": "晚了，芬恩。我们必须面对。",
						"french": "Trop tard, Finn. Nous devons l'affronter.",
						"spanish": "Demasiado tarde, Finn. Debemos enfrentarlo.",
						"vietnamese": "Muộn rồi, Finn. Chúng ta phải đối mặt.",
						"thai": "สายไปแล้ว, ฟินน์ เราต้องเผชิญหน้า",
						"hindi": "बहुत देर हो चुकी है, फिन। हमें इसका सामना करना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 맹세는… 파괴될 수 없다… 또 다른… 대가가… 찾아올 것이다…",
						"english": "Ugh... The oath... cannot be destroyed... Another... price... will come...",
						"japanese": "くぅ… 誓いは… 破壊されぬ… また別の… 代償が… 訪れるだろう…",
						"chinese": "呃… 誓约… 不可被摧毁… 另一个… 代价… 将会降临…",
						"french": "Ugh… Le serment… ne peut être détruit… Un autre… prix… viendra…",
						"spanish": "Ugh… El juramento… no puede ser destruido… Otro… precio… llegará…",
						"vietnamese": "Ư… Lời thề… không thể bị phá hủy… Một cái giá… khác… sẽ đến…",
						"thai": "อึก… คำสาบาน… ไม่อาจถูกทำลาย… ราคา… อื่น… จะมาถึง…",
						"hindi": "उफ़… शपथ… नष्ट नहीं हो सकती… एक और… कीमत… चुकानी होगी…"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 의미지? 또 다른 대가라니.",
						"english": "What does that mean? Another price?",
						"japanese": "どういう意味だ？ また別の代償だと？",
						"chinese": "这是什么意思？另一个代价？",
						"french": "Qu'est-ce que cela signifie ? Un autre prix ?",
						"spanish": "¿Qué significa eso? ¿Otro precio?",
						"vietnamese": "Có ý gì vậy? Một cái giá khác sao?",
						"thai": "หมายความว่าไง? ราคาอื่นอีกหรือ?",
						"hindi": "इसका क्या मतलब है? एक और कीमत?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "어쩌면… 이 유적의 진짜 주인은 따로 있을지도 몰라.",
						"english": "Perhaps... the true owner of these ruins is someone else.",
						"japanese": "もしかしたら… この遺跡の本当の持ち主は別にいるのかもしれない。",
						"chinese": "也许… 这座遗迹真正的主人另有其人。",
						"french": "Peut-être... que le véritable propriétaire de ces ruines est quelqu'un d'autre.",
						"spanish": "Quizás... el verdadero dueño de estas ruinas sea otra persona.",
						"vietnamese": "Có lẽ... chủ nhân thật sự của di tích này là một người khác.",
						"thai": "บางที... เจ้าของที่แท้จริงของซากปรักหักพังแห่งนี้อาจจะเป็นคนอื่นก็ได้",
						"hindi": "शायद... इन खंडहरों का असली मालिक कोई और है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숨겨진 진실은 더욱 깊은 곳에 있었다. 그들은 이제 돌이킬 수 없는 길을 걷고 있었다.",
						"english": "The hidden truth lay even deeper. They were now walking a path of no return.",
						"japanese": "隠された真実はさらに深い場所に。彼らはもう引き返せない道を歩んでいた。",
						"chinese": "隐藏的真相在更深处。他们正走在一条无法回头的路上。",
						"french": "La vérité cachée se trouvait encore plus profondément. Ils suivaient maintenant un chemin sans retour.",
						"spanish": "La verdad oculta yacía aún más profundo. Ahora estaban caminando por un camino sin retorno.",
						"vietnamese": "Sự thật ẩn giấu còn nằm sâu hơn nữa. Họ giờ đây đang bước trên con đường không thể quay lại.",
						"thai": "ความจริงที่ซ่อนอยู่ลึกซึ้งยิ่งกว่านั้น ตอนนี้พวกเขาเดินไปในเส้นทางที่ไม่อาจหวนกลับได้แล้ว",
						"hindi": "छिपी हुई सच्चाई और भी गहरी थी। वे अब ऐसे रास्ते पर चल रहे थे जिससे कोई वापसी नहीं थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들… 잊혀진 맹세는… 너희를 집어삼킬 것이다…",
						"english": "Fools... the forgotten vow... will consume you...",
						"japanese": "愚かな者たちよ… 忘れ去られた誓いが… お前たちを飲み込むだろう…",
						"chinese": "愚蠢的人们… 被遗忘的誓言… 将吞噬你们…",
						"french": "Fous... la promesse oubliée... vous consumera...",
						"spanish": "Necios... la promesa olvidada... os consumirá...",
						"vietnamese": "Những kẻ ngốc... lời thề bị lãng quên... sẽ nuốt chửng các ngươi...",
						"thai": "พวกคนโง่... คำสาบานที่ถูกลืมเลือน... จะกลืนกินพวกเจ้า...",
						"hindi": "मूर्खों... भूली हुई प्रतिज्ञा... तुम्हें निगल जाएगी..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Bon sang... Ce n'est pas... encore fini !",
						"spanish": "Maldita sea... ¡Todavía... no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "다시… 돌아올 거야.",
						"english": "I'll... be back.",
						"japanese": "また… 戻ってくる。",
						"chinese": "我会… 再回来。",
						"french": "Je... reviendrai.",
						"spanish": "Volveré...",
						"vietnamese": "Tôi sẽ... quay lại.",
						"thai": "ฉันจะ... กลับมา.",
						"hindi": "मैं... वापस आऊंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
