export const scenario_modern_whisper_71_01 = {
	"scenario_id": "modern_whisper_71_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"content": {
						"korean": "도시의 뒷골목, 오래된 벽돌 건물들이 빽빽하게 늘어서 있었다.",
						"english": "City back alleys, dense with old brick buildings.",
						"japanese": "都市の裏路地には、古いレンガの建物が密集していた。",
						"chinese": "城市后巷，老旧的砖房密密麻麻。",
						"french": "Dans les ruelles de la ville, de vieux bâtiments en briques s'entassaient.",
						"spanish": "En los callejones de la ciudad, viejos edificios de ladrillo se apilaban.",
						"vietnamese": "Hẻm sau thành phố, những tòa nhà gạch cũ kỹ san sát.",
						"thai": "ตรอกซอยเมืองเก่า อาคารอิฐเก่าแก่เรียงรายหนาแน่น",
						"hindi": "शहर की पिछली गलियाँ, पुरानी ईंटों की इमारतों से घनी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…음산한 기운이 느껴져.",
						"english": "...A chilling aura.",
						"japanese": "…陰鬱な気配がする。",
						"chinese": "……感觉有股阴森的气息。",
						"french": "...Une aura sinistre.",
						"spanish": "...Una atmósfera lúgubre.",
						"vietnamese": "...Cảm giác một luồng khí âm u.",
						"thai": "…สัมผัสได้ถึงกลิ่นอายที่น่าขนลุก",
						"hindi": "...एक भयावह आभा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이곳입니다. 사라진 사람들이 마지막으로 목격된 곳.",
						"english": "This is it. The last place the missing were seen.",
						"japanese": "ここです。行方不明者たちが最後に目撃された場所。",
						"chinese": "就是这里。失踪者最后被目击的地方。",
						"french": "C'est ici. Le dernier endroit où les disparus ont été vus.",
						"spanish": "Es aquí. El último lugar donde fueron vistos los desaparecidos.",
						"vietnamese": "Chính là đây. Nơi cuối cùng những người mất tích được nhìn thấy.",
						"thai": "ที่นี่แหละ สถานที่ที่ผู้หายสาบสูญถูกพบเห็นครั้งสุดท้าย",
						"hindi": "यह वही जगह है। जहाँ ग़ायब हुए लोगों को आख़िरी बार देखा गया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "밤마다 이상한 소리가 들린다는 제보가 끊이지 않아요.",
						"english": "Reports of strange sounds every night just keep coming.",
						"japanese": "夜ごと奇妙な音がするという通報が絶えません。",
						"chinese": "关于每晚都有奇怪声音的报告络绎不绝。",
						"french": "Les rapports de sons étranges chaque nuit ne cessent d'affluer.",
						"spanish": "No cesan los informes de ruidos extraños cada noche.",
						"vietnamese": "Những báo cáo về tiếng động lạ mỗi đêm không ngừng.",
						"thai": "มีรายงานเรื่องเสียงแปลกๆ ทุกคืนไม่ขาดสาย",
						"hindi": "हर रात अजीब आवाज़ों की रिपोर्टें आती रहती हैं।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떤 소리요?",
						"english": "What kind of sounds?",
						"japanese": "どんな音ですか？",
						"chinese": "什么声音？",
						"french": "Quels genres de sons ?",
						"spanish": "¿Qué clase de ruidos?",
						"vietnamese": "Loại âm thanh gì?",
						"thai": "เสียงแบบไหน?",
						"hindi": "किस तरह की आवाज़ें?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…애처로운 울음소리, 혹은 비명처럼.",
						"english": "...Mournful cries, or perhaps screams.",
						"japanese": "…哀れな鳴き声、あるいは悲鳴のように。",
						"chinese": "……凄惨的哭声，或者像尖叫声。",
						"french": "...Des pleurs déchirants, ou des cris.",
						"spanish": "...Llantos lastimeros, o como gritos.",
						"vietnamese": "...Tiếng khóc ai oán, hoặc như tiếng thét.",
						"thai": "…เสียงคร่ำครวญน่าเวทนา หรือไม่ก็เหมือนเสียงกรีดร้อง",
						"hindi": "...दुखभरी चीख़ें, या शायद चीखें।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 주변 폐건물에서 밤마다 괴이한 비명과 웃음소리가 들린다고 해요.",
						"english": "They say strange screams and laughter can be heard every night from the abandoned building around here.",
						"japanese": "この辺りの廃墟から夜な夜な奇妙な悲鳴や笑い声が聞こえるそうです。",
						"chinese": "听说这附近的废弃建筑每晚都会传来诡异的尖叫声和笑声。",
						"french": "On dit que des cris et des rires étranges se font entendre toutes les nuits depuis le bâtiment abandonné du coin.",
						"spanish": "Dicen que cada noche se escuchan gritos y risas extrañas desde el edificio abandonado de por aquí.",
						"vietnamese": "Người ta nói rằng có những tiếng hét và tiếng cười kỳ lạ vọng ra từ tòa nhà bỏ hoang gần đây vào mỗi đêm.",
						"thai": "พวกเขาบอกว่ามีเสียงกรีดร้องและเสียงหัวเราะแปลก ๆ ดังขึ้นทุกคืนจากตึกร้างแถวนี้",
						"hindi": "कहते हैं कि इस आसपास की वीरान इमारत से हर रात अजीब चीखें और हँसी की आवाज़ें आती हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "괴담 같은데요.",
						"english": "Sounds like a ghost story.",
						"japanese": "怪談みたいですね。",
						"chinese": "听起来像个鬼故事。",
						"french": "On dirait une histoire de fantômes.",
						"spanish": "Suena a cuento de fantasmas.",
						"vietnamese": "Nghe cứ như chuyện ma ấy.",
						"thai": "ฟังดูเหมือนเรื่องผีเลย",
						"hindi": "भूतों की कहानी जैसी लगती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그 괴담 때문에 사라진 사람들이 벌써 셋입니다.",
						"english": "Three people have already disappeared because of that ghost story.",
						"japanese": "その怪談のせいで、もう三人もの人が行方不明になっています。",
						"chinese": "就因为那个鬼故事，已经有三个人失踪了。",
						"french": "Trois personnes ont déjà disparu à cause de cette histoire de fantômes.",
						"spanish": "Ya son tres las personas que han desaparecido a causa de esa historia de fantasma.",
						"vietnamese": "Đã có ba người mất tích vì cái chuyện ma đó rồi.",
						"thai": "มีคนหายไปแล้วสามคนเพราะเรื่องผีนั่นแหละ",
						"hindi": "उस भूत की कहानी की वजह से पहले ही तीन लोग गायब हो चुके हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "더 깊이 들어갈수록 위험해질 겁니다.",
						"english": "The deeper you go, the more dangerous it will get.",
						"japanese": "深く進むほど危険になりますよ。",
						"chinese": "越深入，就越危险。",
						"french": "Plus vous irez loin, plus ce sera dangereux.",
						"spanish": "Cuanto más te adentres, más peligroso se pondrá.",
						"vietnamese": "Càng đi sâu vào, càng nguy hiểm.",
						"thai": "ยิ่งเข้าไปลึกเท่าไหร่ ยิ่งอันตรายมากขึ้นเท่านั้น",
						"hindi": "जितना गहरा जाओगे, उतना ही खतरनाक होता जाएगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "최근 이 구역의 길고양이와 들개들이 이상하게 쇠약해지고 있어요.",
						"english": "Lately, the stray cats and dogs in this area have been strangely weakened.",
						"japanese": "最近、この区域の野良猫や野犬が妙に衰弱しています。",
						"chinese": "最近这个区域的流浪猫狗都异常虚弱。",
						"french": "Récemment, les chats et les chiens errants de ce quartier sont étrangement affaiblis.",
						"spanish": "Últimamente, los gatos y perros callejeros de esta zona están extrañamente debilitados.",
						"vietnamese": "Gần đây, mèo và chó hoang trong khu vực này trở nên yếu ớt một cách kỳ lạ.",
						"thai": "พักนี้แมวจรจัดกับหมาข้างถนนในละแวกนี้อ่อนแอลงอย่างผิดปกติ",
						"hindi": "हाल ही में, इस इलाके की आवारा बिल्लियाँ और कुत्ते अजीब तरह से कमजोर हो रहे हैं।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "…동물들도 영향을 받아요?",
						"english": "...Animals are affected too?",
						"japanese": "…動物たちも影響を受けているんですか？",
						"chinese": "……动物也受到了影响？",
						"french": "...Les animaux sont aussi affectés ?",
						"spanish": "...¿Los animales también se ven afectados?",
						"vietnamese": "…Động vật cũng bị ảnh hưởng sao?",
						"thai": "...สัตว์ก็ได้รับผลกระทบด้วยเหรอ?",
						"hindi": "...जानवरों पर भी असर पड़ रहा है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 그리고 비정상적으로 공격적이 됐습니다.",
						"english": "Yes. And they've become abnormally aggressive.",
						"japanese": "ええ。それに、異常なほど攻撃的になっています。",
						"chinese": "是的。而且它们变得异常具有攻击性。",
						"french": "Oui. Et ils sont devenus anormalement agressifs.",
						"spanish": "Sí. Y se han vuelto anormalmente agresivos.",
						"vietnamese": "Vâng. Và chúng trở nên hung hăng một cách bất thường.",
						"thai": "ใช่ครับ แล้วพวกมันก็ดุร้ายผิดปกติด้วย",
						"hindi": "हाँ। और वे असामान्य रूप से आक्रामक हो गए हैं।"
					},
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치… 무언가에 감염된 것처럼.",
						"english": "As if... they've been infected by something.",
						"japanese": "まるで…何かに感染したかのように。",
						"chinese": "就像是……被什么东西感染了一样。",
						"french": "Comme si... ils avaient été infectés par quelque chose.",
						"spanish": "Como si... hubieran sido infectados por algo.",
						"vietnamese": "Cứ như thể... chúng bị nhiễm bệnh gì đó.",
						"thai": "ราวกับว่า... พวกมันติดเชื้อบางอย่าง",
						"hindi": "जैसे कि... वे किसी चीज़ से संक्रमित हो गए हों।"
					},
					"emotion": "sad",
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "이 골목에 들어서면 축축한 흙냄새와 함께 비릿하고 퀴퀴한, 오래된 피 냄새가 난다는 소문이 있어요.",
						"english": "There's a rumor that if you enter this alley, you'll smell damp earth along with a metallic, musty, old blood smell.",
						"japanese": "この路地に入ると、湿った土の匂いに混じって、生臭くてカビ臭い、古い血の匂いがするという噂があります。",
						"chinese": "有传闻说，走进这条小巷，你会闻到潮湿的泥土味，以及一股腥臭发霉的陈旧血腥味。",
						"french": "On raconte que si vous entrez dans cette ruelle, vous sentirez une odeur de terre humide mêlée à une odeur de sang vieux, rance et moisi.",
						"spanish": "Se rumorea que si entras en este callejón, sentirás un olor a tierra húmeda junto con un olor metálico, rancio y a sangre vieja.",
						"vietnamese": "Có tin đồn rằng nếu bước vào con hẻm này, bạn sẽ ngửi thấy mùi đất ẩm cùng với mùi máu cũ tanh tưởi, mốc meo.",
						"thai": "มีข่าวลือว่าถ้าคุณเข้ามาในซอยนี้ จะได้กลิ่นดินชื้นผสมกับกลิ่นเลือดเก่า ๆ เหม็นคาวอับชื้น",
						"hindi": "एक अफवाह है कि इस गली में घुसने पर नम मिट्टी के साथ-साथ एक अजीब सी, बासी और पुराने खून की गंध आती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "윽, 진짜 역겨운 냄새가 나는데?",
						"english": "Ugh, it really smells disgusting, doesn't it?",
						"japanese": "うっ、本当に嫌な匂いがするんだけど？",
						"chinese": "呃，这味道真恶心，不是吗？",
						"french": "Beurk, ça sent vraiment dégoûtant, non ?",
						"spanish": "Uf, huele realmente asqueroso, ¿verdad?",
						"vietnamese": "Ưm, đúng là có mùi kinh tởm thật đấy?",
						"thai": "โอ๊ย เหม็นขยะแขยงจริง ๆ เลยว่าไหม?",
						"hindi": "उफ़, सच में घिनौनी गंध आ रही है, है ना?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "더 이상 진행하는 건 위험해요. 돌아가야 합니다.",
						"english": "It's too dangerous to go on. We must turn back.",
						"japanese": "これ以上進むのは危険です。引き返しましょう。",
						"chinese": "继续前进很危险。我们必须回去。",
						"french": "Il est trop dangereux de continuer. Nous devons faire demi-tour.",
						"spanish": "Es demasiado peligroso seguir. Debemos regresar.",
						"vietnamese": "Tiếp tục nữa rất nguy hiểm. Chúng ta phải quay lại.",
						"thai": "การไปต่ออันตรายเกินไป เราต้องกลับไป",
						"hindi": "आगे बढ़ना खतरनाक है। हमें वापस जाना होगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기까지 와서 포기할 순 없어.",
						"english": "We can't give up after coming all this way.",
						"japanese": "ここまで来て諦めるわけにはいかない。",
						"chinese": "走到这里不能放弃。",
						"french": "Nous ne pouvons pas abandonner après être arrivés si loin.",
						"spanish": "No podemos rendirnos después de haber llegado hasta aquí.",
						"vietnamese": "Không thể bỏ cuộc sau khi đã đi xa đến vậy.",
						"thai": "เราจะยอมแพ้หลังจากมาถึงที่นี่ไม่ได้",
						"hindi": "इतनी दूर आकर हार नहीं मान सकते।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…후회하지 마세요.",
						"english": "...Don't regret it.",
						"japanese": "…後悔しないでください。",
						"chinese": "…别后悔。",
						"french": "...Ne le regrettez pas.",
						"spanish": "...No te arrepientas.",
						"vietnamese": "...Đừng hối hận.",
						"thai": "...อย่าเสียใจทีหลัง",
						"hindi": "...पछताना मत।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…결국, 너희도… 고통받게 될 것이다…",
						"english": "...Ultimately, you too... will suffer...",
						"japanese": "…結局、お前たちも…苦しむことになるだろう…",
						"chinese": "…最终，你们也会…受苦的…",
						"french": "...Finalement, vous aussi... souffrirez...",
						"spanish": "...Al final, vosotros también... sufriréis...",
						"vietnamese": "...Cuối cùng, các ngươi cũng... sẽ phải chịu đựng...",
						"thai": "...ท้ายที่สุดแล้ว พวกเจ้าก็จะ...ต้องทนทุกข์...",
						"hindi": "...आखिरकार, तुम भी... कष्ट सहोगे..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Kết thúc rồi.",
						"thai": "จบแล้ว",
						"hindi": "खत्म।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그림자는 사라졌지만, 도시의 불안은 여전했다.",
						"english": "The shadow vanished, but the city's unease remained.",
						"japanese": "影は消え去ったが、都市の不安は依然として残っていた。",
						"chinese": "阴影消失了，但城市的不安依然存在。",
						"french": "L'ombre a disparu, mais l'inquiétude de la ville demeurait.",
						"spanish": "La sombra desapareció, pero la inquietud de la ciudad persistió.",
						"vietnamese": "Bóng tối tan biến, nhưng nỗi bất an của thành phố vẫn còn đó.",
						"thai": "เงาได้หายไปแล้ว แต่ความไม่สงบในเมืองยังคงอยู่",
						"hindi": "छाया गायब हो गई, लेकिन शहर की बेचैनी बनी रही।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠은 또 다른 형태로, 다시 찾아올 것이다.",
						"english": "Darkness will return, in another form.",
						"japanese": "闇は、また別の形で、再び訪れるだろう。",
						"chinese": "黑暗将以另一种形式再次降临。",
						"french": "L'obscurité reviendra, sous une autre forme.",
						"spanish": "La oscuridad regresará, de otra forma.",
						"vietnamese": "Bóng tối sẽ trở lại, dưới một hình hài khác.",
						"thai": "ความมืดจะกลับมาในรูปแบบอื่น",
						"hindi": "अंधेरा दूसरे रूप में फिर आएगा।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "…정말 끝난 걸까요?",
						"english": "...Is it truly over?",
						"japanese": "…本当に終わったのでしょうか？",
						"chinese": "…真的结束了吗？",
						"french": "...Est-ce vraiment terminé ?",
						"spanish": "...¿Realmente ha terminado?",
						"vietnamese": "...Liệu mọi chuyện đã thật sự kết thúc?",
						"thai": "...มันจบลงแล้วจริงๆ เหรอ?",
						"hindi": "...क्या यह वाकई खत्म हो गया है?"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가장 깊은 곳, 거대한 그림자가 움직였다.",
						"english": "In the deepest abyss, a colossal shadow stirred.",
						"japanese": "最も深い場所で、巨大な影が蠢いた。",
						"chinese": "在最深处，巨大的影子开始移动。",
						"french": "Dans les profondeurs, une ombre colossale s'est agitée.",
						"spanish": "En lo más profundo, una sombra colosal se movió.",
						"vietnamese": "Ở nơi sâu thẳm nhất, một bóng tối khổng lồ đã chuyển động.",
						"thai": "ในที่ที่ลึกที่สุด เงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "सबसे गहरे में, एक विशालकाय छाया हिलने लगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…또다시 침입자들이.",
						"english": "...Intruders again.",
						"japanese": "…またしても侵入者か。",
						"chinese": "…又是入侵者。",
						"french": "...Encore des intrus.",
						"spanish": "...Intrusos otra vez.",
						"vietnamese": "...Lại là những kẻ xâm nhập.",
						"thai": "...พวกผู้บุกรุกอีกแล้ว",
						"hindi": "...फिर से घुसपैठिए।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이 도시의 어둠을 감히 마주하려 하는가.",
						"english": "Do you dare face the darkness of this city?",
						"japanese": "この都市の闇に敢えて立ち向かうというのか。",
						"chinese": "竟敢面对这座城市的黑暗吗？",
						"french": "Osez-vous affronter les ténèbres de cette ville ?",
						"spanish": "¿Osas enfrentar la oscuridad de esta ciudad?",
						"vietnamese": "Ngươi dám đối mặt với bóng tối của thành phố này sao?",
						"thai": "เจ้ากล้าที่จะเผชิญหน้ากับความมืดมิดของเมืองนี้งั้นรึ",
						"hindi": "क्या तुम इस शहर के अंधेरे का सामना करने की हिम्मत करते हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 모든 것의 원흉이구나.",
						"english": "So you are the cause of all this.",
						"japanese": "お前が全ての元凶か。",
						"chinese": "你就是这一切的元凶。",
						"french": "C'est donc toi la cause de tout cela.",
						"spanish": "Así que tú eres la raíz de todo.",
						"vietnamese": "Ngươi chính là kẻ chủ mưu của mọi chuyện.",
						"thai": "เจ้าคือต้นเหตุของทุกสิ่งสินะ",
						"hindi": "तुम ही इन सबकी जड़ हो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너희는 그저 먹잇감일 뿐.",
						"english": "You are merely prey.",
						"japanese": "お前たちはただの獲物だ。",
						"chinese": "你们不过是猎物。",
						"french": "Vous n'êtes que de la proie.",
						"spanish": "No sois más que presas.",
						"vietnamese": "Các ngươi chỉ là con mồi mà thôi.",
						"thai": "พวกเจ้าเป็นแค่เหยื่อเท่านั้น",
						"hindi": "तुम सब बस शिकार हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자가 탐험대를 집어삼켰다.",
						"english": "The city's shadow engulfed the expedition team.",
						"japanese": "都市の影が探検隊を飲み込んだ。",
						"chinese": "城市的阴影吞噬了探险队。",
						"french": "L'ombre de la ville a englouti l'équipe d'expédition.",
						"spanish": "La sombra de la ciudad devoró al equipo de expedición.",
						"vietnamese": "Bóng tối thành phố đã nuốt chửng đội thám hiểm.",
						"thai": "เงามืดของเมืองได้กลืนกินทีมสำรวจไปแล้ว",
						"hindi": "शहर की छाया ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들. 너희의 고통은… 영원할 것이다.",
						"english": "Fools. Your suffering... will be eternal.",
						"japanese": "愚かな者たちめ。お前たちの苦痛は…永遠に続くだろう。",
						"chinese": "愚蠢的东西。你们的痛苦…将是永恒的。",
						"french": "Fous. Votre souffrance... sera éternelle.",
						"spanish": "Estúpidos. Vuestro sufrimiento... será eterno.",
						"vietnamese": "Đồ ngu ngốc. Nỗi đau của các ngươi... sẽ là vĩnh cửu.",
						"thai": "พวกโง่เขลา. ความเจ็บปวดของพวกเจ้า... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "मूर्खों। तुम्हारी पीड़ा… शाश्वत होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没有结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...มันยังไม่จบ",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "다시 돌아올 거야.",
						"english": "I will return.",
						"japanese": "また戻ってくるだろう。",
						"chinese": "我会再回来的。",
						"french": "Je reviendrai.",
						"spanish": "Volveré.",
						"vietnamese": "Ta sẽ trở lại.",
						"thai": "ฉันจะกลับมา",
						"hindi": "मैं वापस आऊंगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 어둠 속, 기이한 소문이 떠돈다.",
			"밤마다 들려오는 애처로운 울음소리, 사라지는 사람들.",
			"조사관 Lin, 그녀는 진실을 쫓아 이 그늘 속으로 들어섰다.",
			"그리고 도시의 공포는, 이제 막 시작되고 있었다."
		],
		"english": [
			"Strange rumors haunt the city's shadows.",
			"Each night, mournful cries, disappearing people.",
			"Investigator Lin steps into this shadow, chasing truth.",
			"And the city's terror, was just beginning."
		],
		"japanese": [
			"都市の闇の中、奇妙な噂が囁かれる。",
			"夜ごと聞こえる哀れな鳴き声、消えゆく人々。",
			"調査官リン、彼女は真実を追い、この影の中へと足を踏み入れた。",
			"そして、都市の恐怖は、今始まったばかりだった。"
		],
		"chinese": [
			"都市的黑暗中，诡异的传闻甚嚣尘上。",
			"夜夜传来凄惨哭声，人们接连失踪。",
			"调查员林，为追寻真相，踏入这片阴影。",
			"而城市的恐惧，才刚刚开始。"
		],
		"french": [
			"Dans l'obscurité de la ville, d'étranges rumeurs circulent.",
			"Chaque nuit, des pleurs déchirants, des disparitions.",
			"L'enquêtrice Lin pénètre cette ombre, en quête de vérité.",
			"Et la terreur de la ville, ne faisait que commencer."
		],
		"spanish": [
			"En la oscuridad de la ciudad, extraños rumores circulan.",
			"Cada noche, llantos lastimeros, gente que desaparece.",
			"La investigadora Lin se adentra en esta sombra, persiguiendo la verdad.",
			"Y el terror de la ciudad, apenas comenzaba."
		],
		"vietnamese": [
			"Trong bóng đêm thành phố, những tin đồn kỳ lạ lan truyền.",
			"Mỗi đêm, tiếng khóc than ai oán, những người mất tích.",
			"Điều tra viên Lin, cô ấy bước vào bóng tối này, truy tìm sự thật.",
			"Và nỗi kinh hoàng của thành phố, chỉ vừa mới bắt đầu."
		],
		"thai": [
			"ในเงามืดของเมือง ลือกันถึงเรื่องประหลาด",
			"ทุกคืน เสียงคร่ำครวญน่าเวทนา ผู้คนหายสาบสูญ",
			"สารวัตรหลิน ก้าวเข้าสู่เงามืดนี้ เพื่อตามล่าความจริง",
			"และความหวาดกลัวของเมือง กำลังจะเริ่มต้นขึ้น"
		],
		"hindi": [
			"शहर के अँधेरे में, अजीब अफ़वाहें फैल रही हैं।",
			"हर रात, दुखभरी चीख़ें, ग़ायब होते लोग।",
			"जाँचकर्ता लिन, सच की तलाश में इस साए में दाखिल हुई।",
			"और शहर का डर, अभी शुरू ही हुआ था।"
		]
	}
} as const;
