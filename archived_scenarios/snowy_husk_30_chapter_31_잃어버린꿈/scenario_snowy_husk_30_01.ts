export const scenario_snowy_husk_30_01 = {
	"scenario_id": "snowy_husk_30_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 휘몰아치는 눈보라. 마을은 고립되었고, 공포가 드리웠다.",
						"english": "An endless blizzard. The village is isolated, and fear looms.",
						"japanese": "絶え間なく吹き荒れる吹雪。村は孤立し、恐怖が迫っていた。",
						"chinese": "无尽的暴风雪。村庄被孤立，恐惧笼罩。",
						"french": "Un blizzard incessant. Le village est isolé, la peur plane.",
						"spanish": "Una ventisca interminable. El pueblo está aislado, el miedo acecha.",
						"vietnamese": "Bão tuyết không ngừng. Làng bị cô lập, nỗi sợ hãi bao trùm.",
						"thai": "พายุหิมะที่ไม่มีที่สิ้นสุด หมู่บ้านถูกตัดขาด ความกลัวคุกคาม",
						"hindi": "एक अंतहीन बर्फ़ीला तूफ़ान। गाँव अलग-थलग पड़ गया है, और डर मंडरा रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "허스크… 그 괴물이 나타났어요.",
						"english": "Husk… that monster appeared.",
						"japanese": "ハスク…あの怪物が現れたわ。",
						"chinese": "赫斯克……那个怪物出现了。",
						"french": "Husk… ce monstre est apparu.",
						"spanish": "Husk… ese monstruo apareció.",
						"vietnamese": "Husk… con quái vật đó đã xuất hiện rồi.",
						"thai": "ฮัสก์... สัตว์ประหลาดนั่นปรากฏตัวขึ้นแล้ว",
						"hindi": "हस्क... वह राक्षस प्रकट हुआ।"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…괴물? 그에게서 슬픔이 느껴져.",
						"english": "…A monster? I sense sorrow from him.",
						"japanese": "…怪物？彼から悲しみが感じられるわ。",
						"chinese": "……怪物？我从他身上感受到了悲伤。",
						"french": "…Un monstre ? Je ressens de la tristesse en lui.",
						"spanish": "…¿Un monstruo? Siento tristeza en él.",
						"vietnamese": "…Quái vật sao? Tôi cảm nhận được nỗi buồn từ hắn.",
						"thai": "...สัตว์ประหลาดหรือ? ฉันสัมผัสได้ถึงความเศร้าจากเขา",
						"hindi": "...एक राक्षस? मुझे उससे दुख महसूस होता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "슬픔이라니요. 우릴 공격했어요!",
						"english": "Sorrow? He attacked us!",
						"japanese": "悲しみですって？彼は私たちを襲ったんですよ！",
						"chinese": "悲伤？他攻击了我们！",
						"french": "De la tristesse ? Il nous a attaqués !",
						"spanish": "¿Tristeza? ¡Nos atacó!",
						"vietnamese": "Nỗi buồn ư? Hắn đã tấn công chúng ta!",
						"thai": "ความเศร้าหรือ? เขาโจมตีเรานะ!",
						"hindi": "दुख? उसने हम पर हमला किया!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "오래된 바이킹 유적을 조사하다가… 이걸 발견했어.",
						"english": "While investigating ancient Viking ruins… I found this.",
						"japanese": "古いバイキングの遺跡を調査しているうちに…これを見つけたの。",
						"chinese": "在调查古老的维京遗迹时……我发现了这个。",
						"french": "En enquêtant sur d'anciennes ruines vikings… j'ai trouvé ceci.",
						"spanish": "Mientras investigaba unas antiguas ruinas vikingas… encontré esto.",
						"vietnamese": "Khi đang điều tra tàn tích Viking cổ đại… tôi đã tìm thấy cái này.",
						"thai": "ขณะที่กำลังสำรวจซากปรักหักพังของไวกิ้งโบราณ... ฉันพบสิ่งนี้",
						"hindi": "प्राचीन वाइकिंग खंडहरों की जाँच करते हुए... मुझे यह मिला।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "낡은 어린이용 장신구가 눈 속에서 빛났다.",
						"english": "An old child's ornament gleamed in the snow.",
						"japanese": "古い子供用の装飾品が雪の中で輝いた。",
						"chinese": "一个旧的儿童饰品在雪中闪闪发光。",
						"french": "Un vieil ornement d'enfant brillait dans la neige.",
						"spanish": "Un viejo adorno de niño brillaba en la nieve.",
						"vietnamese": "Một món trang sức trẻ con cũ kỹ lấp lánh trong tuyết.",
						"thai": "เครื่องประดับเด็กชิ้นเก่าเปล่งประกายในหิมะ",
						"hindi": "बर्फ़ में एक पुराना बच्चों का गहना चमक रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 모든 것, 허스크와 관련 있을지도 몰라. 진실을 파헤쳐야 해.",
						"english": "All this... might be related to the Husk. We need to uncover the truth.",
						"japanese": "これら全て、ハスクと関係があるかもしれない。真実を暴かねば。",
						"chinese": "这一切，可能都与赫斯克有关。我必须查明真相。",
						"french": "Tout ceci... pourrait être lié au Spectre. Nous devons découvrir la vérité.",
						"spanish": "Todo esto... podría estar relacionado con el Cascarón. Debemos desenterrar la verdad.",
						"vietnamese": "Tất cả chuyện này... có thể liên quan đến Husk. Chúng ta phải tìm ra sự thật.",
						"thai": "ทั้งหมดนี้... อาจเกี่ยวข้องกับฮัสค์ เราต้องเปิดเผยความจริง",
						"hindi": "यह सब... हस्क से संबंधित हो सकता है। हमें सच्चाई उजागर करनी होगी।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "허스크의 울음소리는… 저주의 룬을 닮았어.",
						"english": "The Husk's cry... it resembles a cursed rune.",
						"japanese": "ハスクの鳴き声は…呪いのルーンに似ている。",
						"chinese": "赫斯克的哭声…像极了诅咒符文。",
						"french": "Le cri du Spectre... il ressemble à une rune maudite.",
						"spanish": "El lamento del Cascarón... se parece a una runa maldita.",
						"vietnamese": "Tiếng khóc của Husk... giống như một phù hiệu bị nguyền rủa.",
						"thai": "เสียงร้องของฮัสค์... เหมือนรูนต้องสาป",
						"hindi": "हस्क की चीख... एक शापित रुन जैसी लगती है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "저주…?",
						"english": "A curse...?",
						"japanese": "呪い…？",
						"chinese": "诅咒…？",
						"french": "Une malédiction... ?",
						"spanish": "¿Una maldición...?",
						"vietnamese": "Một lời nguyền...?",
						"thai": "คำสาป...?",
						"hindi": "एक शाप...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊힌 전설에 나오지. 슬픔이 응축되면 괴물이 된다고.",
						"english": "It's in forgotten legends. When sorrow condenses, it becomes a monster.",
						"japanese": "忘れられた伝説にある。悲しみが凝縮されれば、怪物になる、と。",
						"chinese": "在被遗忘的传说里有记载。悲伤凝聚时，会变成怪物。",
						"french": "Les légendes oubliées le disent. Quand la tristesse se condense, elle devient un monstre.",
						"spanish": "Lo dicen las leyendas olvidadas. Cuando la tristeza se condensa, se convierte en un monstruo.",
						"vietnamese": "Các truyền thuyết bị lãng quên kể rằng. Khi nỗi buồn tích tụ, nó sẽ biến thành quái vật.",
						"thai": "มันอยู่ในตำนานที่ถูกลืม เมื่อความโศกเศร้าควบแน่น มันจะกลายเป็นสัตว์ประหลาด",
						"hindi": "यह भूली हुई कहानियों में है। जब दुख गहरा होता है, तो वह एक राक्षस बन जाता है।"
					}
				},
				{
					"content": {
						"korean": "그럼 허스크도… 누군가의 슬픔이라는 거예요?",
						"english": "So the Husk is... someone's sorrow?",
						"japanese": "じゃあ、ハスクも…誰かの悲しみだというのですか？",
						"chinese": "那么赫斯克…也是某个人的悲伤吗？",
						"french": "Alors le Spectre... est la tristesse de quelqu'un ?",
						"spanish": "¿Entonces el Cascarón... es la tristeza de alguien?",
						"vietnamese": "Vậy Husk cũng là... nỗi buồn của ai đó ư?",
						"thai": "งั้นฮัสค์ก็... คือความเศร้าของใครบางคนเหรอคะ?",
						"hindi": "तो क्या हस्क भी... किसी का दुख है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어쩌면. 과거의 비극이 반복되고 있어.",
						"english": "Perhaps. A tragedy from the past is repeating itself.",
						"japanese": "おそらく。過去の悲劇が繰り返されているのだ。",
						"chinese": "也许吧。过去的悲剧正在重演。",
						"french": "Peut-être. Une tragédie du passé se répète.",
						"spanish": "Tal vez. Una tragedia del pasado se está repitiendo.",
						"vietnamese": "Có lẽ vậy. Một bi kịch trong quá khứ đang lặp lại.",
						"thai": "อาจจะนะ โศกนาฏกรรมจากอดีตกำลังซ้ำรอย",
						"hindi": "शायद। अतीत की एक त्रासदी खुद को दोहरा रही है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "룬의 흔적을 쫓아가면… 허스크의 움직임을 알 수 있어.",
						"english": "If we follow the rune's traces... we can know the Husk's movements.",
						"japanese": "ルーンの痕跡を追えば…ハスクの動きがわかる。",
						"chinese": "追踪符文的痕迹…就能知道赫斯克的动向。",
						"french": "En suivant les traces des runes... nous pourrons connaître les mouvements du Spectre.",
						"spanish": "Si seguimos las huellas de la runa... podremos conocer los movimientos del Cascarón.",
						"vietnamese": "Nếu theo dấu vết của phù hiệu... chúng ta sẽ biết được chuyển động của Husk.",
						"thai": "ถ้าเราตามรอยรูนไป... เราจะรู้การเคลื่อนไหวของฮัสค์",
						"hindi": "अगर हम रुन के निशानों का पीछा करें... तो हम हस्क की हरकतों को जान सकते हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 괴물이 움직이는 데 패턴이 있나요?",
						"english": "Does that monster have a pattern in its movements?",
						"japanese": "あの怪物が動くのにパターンがあるのですか？",
						"chinese": "那怪物行动有规律吗？",
						"french": "Ce monstre a-t-il un schéma de mouvement ?",
						"spanish": "¿Tiene ese monstruo un patrón en sus movimientos?",
						"vietnamese": "Con quái vật đó có di chuyển theo một quy luật nào không?",
						"thai": "สัตว์ประหลาดตัวนั้นมีการเคลื่อนไหวเป็นรูปแบบด้วยเหรอ?",
						"hindi": "क्या उस राक्षस के चलने का कोई पैटर्न है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 마치… 무언가를 찾는 것처럼.",
						"english": "Yes. As if... it's searching for something.",
						"japanese": "ああ。まるで…何かを探しているかのように。",
						"chinese": "是的。就好像…在寻找着什么。",
						"french": "Oui. Comme si... il cherchait quelque chose.",
						"spanish": "Sí. Como si... estuviera buscando algo.",
						"vietnamese": "Đúng vậy. Cứ như thể... nó đang tìm kiếm thứ gì đó.",
						"thai": "ใช่ เหมือนกับว่า... มันกำลังค้นหาบางสิ่ง",
						"hindi": "हाँ। जैसे... वह कुछ ढूंढ रहा हो।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "잃어버린 것을 찾는… 슬픈 괴물?",
						"english": "A sad monster... searching for what it lost?",
						"japanese": "失われたものを探す…悲しい怪物？",
						"chinese": "寻找失去之物的…悲伤怪物？",
						"french": "Un monstre triste... cherchant ce qu'il a perdu ?",
						"spanish": "¿Un monstruo triste... buscando lo que perdió?",
						"vietnamese": "Một con quái vật buồn bã... đang tìm kiếm thứ đã mất?",
						"thai": "สัตว์ประหลาดที่เศร้าโศก... กำลังตามหาสิ่งที่หายไป?",
						"hindi": "एक उदास राक्षस... अपनी खोई हुई चीज़ ढूंढ रहा है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "결국 모두 얼음 속에 잠든 비극일 뿐이야.",
						"english": "In the end, it's just a tragedy, all slumbering in ice.",
						"japanese": "結局、すべては氷の中に眠る悲劇に過ぎない。",
						"chinese": "最终，一切都只是沉睡在冰中的悲剧罢了。",
						"french": "Au final, ce n'est qu'une tragédie, tout endormi dans la glace.",
						"spanish": "Al final, es solo una tragedia, todo dormido en el hielo.",
						"vietnamese": "Cuối cùng, tất cả chỉ là một bi kịch chìm trong băng giá.",
						"thai": "สุดท้ายแล้ว มันก็เป็นเพียงโศกนาฏกรรมที่หลับใหลอยู่ในน้ำแข็ง",
						"hindi": "अंत में, यह बस एक त्रासदी है, सब बर्फ में सो गए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 길의 끝엔… 잊힌 영혼의 흔적이 있어.",
						"english": "At the end of this path... lie traces of a forgotten soul.",
						"japanese": "この道の果てには…忘れられた魂の痕跡がある。",
						"chinese": "这条路的尽头……有被遗忘灵魂的痕迹。",
						"french": "Au bout de ce chemin… se trouvent les traces d'une âme oubliée.",
						"spanish": "Al final de este camino… hay rastros de un alma olvidada.",
						"vietnamese": "Cuối con đường này… có dấu vết của một linh hồn bị lãng quên.",
						"thai": "สุดปลายทางนี้… มีร่องรอยของวิญญาณที่ถูกลืม",
						"hindi": "इस रास्ते के अंत में… एक भूली हुई आत्मा के निशान हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "허스크의 근원인가요?",
						"english": "Is this the origin of the Husk?",
						"japanese": "これがハスクの根源ですか？",
						"chinese": "这是哈斯克的根源吗？",
						"french": "Est-ce l'origine du Spectre ?",
						"spanish": "¡¿Es este el origen del Cascarón?!",
						"vietnamese": "Đây là nguồn gốc của Husk sao?",
						"thai": "นี่คือต้นกำเนิดของฮัสก์หรือเปล่า?",
						"hindi": "क्या यह हस्क का मूल है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "두려워하지 마. 진실은 항상 추악하지만… 해방의 열쇠가 돼.",
						"english": "Don't be afraid. Truth is always ugly, but... it's the key to liberation.",
						"japanese": "恐れるな。真実は常に醜いが…解放の鍵となる。",
						"chinese": "别害怕。真相总是丑陋的……但却是解放的钥匙。",
						"french": "N'aie pas peur. La vérité est toujours laide, mais… elle est la clé de la libération.",
						"spanish": "No temas. La verdad siempre es fea, pero… es la clave para la liberación.",
						"vietnamese": "Đừng sợ. Sự thật luôn tàn nhẫn, nhưng… đó là chìa khóa giải thoát.",
						"thai": "อย่ากลัวเลย ความจริงนั้นน่าเกลียดเสมอ แต่… มันคือกุญแจสู่การปลดปล่อย",
						"hindi": "डरो मत। सच हमेशा कड़वा होता है, लेकिन… यह मुक्ति की कुंजी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이제 돌아갈 수 없겠군요.",
						"english": "...I suppose there's no turning back now.",
						"japanese": "…もう引き返せないようですね。",
						"chinese": "……现在看来，已经无法回头了。",
						"french": "...Il n'y a plus de retour possible, n'est-ce pas ?",
						"spanish": "...Supongo que ya no hay vuelta atrás.",
						"vietnamese": "...Giờ thì không thể quay lại được nữa rồi.",
						"thai": "…คงจะกลับไปไม่ได้แล้วสินะ",
						"hindi": "…अब वापस नहीं जा सकते, है ना।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "눈보라가 모든 것을 지우기 전에… 기억해야 해.",
						"english": "Before the blizzard erases everything... you must remember.",
						"japanese": "吹雪がすべてを消し去る前に…記憶しなければならない。",
						"chinese": "在暴风雪抹去一切之前……你必须记住。",
						"french": "Avant que le blizzard n'efface tout… tu dois te souvenir.",
						"spanish": "Antes de que la ventisca lo borre todo… debes recordar.",
						"vietnamese": "Trước khi bão tuyết xóa sạch mọi thứ… ngươi phải nhớ.",
						"thai": "ก่อนที่พายุหิมะจะลบเลือนทุกสิ่ง… เจ้าต้องจดจำไว้",
						"hindi": "इससे पहले कि बर्फीला तूफान सब कुछ मिटा दे… तुम्हें याद रखना होगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "결국… 아무도… 기억하지 못하는구나….",
						"english": "In the end... no one remembers...",
						"japanese": "結局… 誰も… 覚えていないのか…。",
						"chinese": "最终……没有人……记得了……",
						"french": "Au final... personne... ne se souvient...",
						"spanish": "Al final... nadie... recuerda...",
						"vietnamese": "Cuối cùng... không ai... nhớ cả...",
						"thai": "ในที่สุด... ไม่มีใคร... จดจำได้เลย...",
						"hindi": "आखिर में... कोई भी... याद नहीं रखता..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 건가요?",
						"english": "...Is it over?",
						"japanese": "…終わったのですか？",
						"chinese": "……结束了吗？",
						"french": "...C'est fini ?",
						"spanish": "...¿Ha terminado?",
						"vietnamese": "...Kết thúc rồi sao?",
						"thai": "...จบแล้วหรือยัง?",
						"hindi": "...क्या यह खत्म हो गया है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 이건 시작에 불과해. 더 깊은 진실이 남아있어.",
						"english": "No. This is just the beginning. A deeper truth remains.",
						"japanese": "いいえ。これは始まりに過ぎない。もっと深い真実が残っている。",
						"chinese": "不。这只是个开始。更深的真相还在。",
						"french": "Non. Ce n'est que le début. Une vérité plus profonde subsiste.",
						"spanish": "No. Esto es solo el principio. Una verdad más profunda permanece.",
						"vietnamese": "Không. Đây chỉ là khởi đầu. Một sự thật sâu xa hơn vẫn còn đó.",
						"thai": "ไม่. นี่เป็นเพียงจุดเริ่มต้น. ความจริงที่ลึกซึ้งกว่ายังคงอยู่.",
						"hindi": "नहीं। यह तो बस शुरुआत है। एक गहरा सच अभी भी बाकी है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "허스크의 슬픔은 더 큰 비극의 파편이었다. 눈보라는 모든 것을 감추고 있었다.",
						"english": "Husk's sorrow was a fragment of a greater tragedy. The blizzard concealed everything.",
						"japanese": "ハスクの悲しみは、より大きな悲劇の断片だった。吹雪がすべてを隠していた。",
						"chinese": "赫斯克的悲伤是更大悲剧的碎片。暴风雪掩盖了一切。",
						"french": "La tristesse de Husk n'était qu'un fragment d'une plus grande tragédie. Le blizzard dissimulait tout.",
						"spanish": "La tristeza de Husk era un fragmento de una tragedia mayor. La tormenta de nieve lo ocultaba todo.",
						"vietnamese": "Nỗi buồn của Husk là một mảnh vỡ của bi kịch lớn hơn. Bão tuyết đã che giấu mọi thứ.",
						"thai": "ความเศร้าของฮัสก์เป็นเพียงส่วนหนึ่งของโศกนาฏกรรมที่ยิ่งใหญ่กว่า. พายุหิมะซ่อนทุกสิ่งไว้.",
						"hindi": "हस्क का दुख एक बड़ी त्रासदी का एक टुकड़ा था। बर्फीले तूफान ने सब कुछ छिपा रखा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "깊은 유적의 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "Deep within the ruins' heart. A colossal shadow blocked the path.",
						"japanese": "深き遺跡の心臓部。巨大な影が道を阻んだ。",
						"chinese": "深邃遗迹的深处。一个巨大的影子挡住了去路。",
						"french": "Au cœur des ruines profondes. Une ombre colossale barra le chemin.",
						"spanish": "En el corazón de las ruinas. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Sâu trong lòng di tích. Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "ใจกลางซากปรักหักพังอันลึกซึ้ง เงาขนาดมหึมาขวางกั้นทางไว้",
						"hindi": "गहरे खंडहर के दिल में। एक विशाल छाया ने रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…내 것을… 돌려줘….",
						"english": "...Give me... back what's mine...",
						"japanese": "…私のものを…返せ…。",
						"chinese": "……把我的东西……还给我……",
						"french": "...Rends-moi... ce qui est à moi...",
						"spanish": "...Devuélveme... lo que es mío...",
						"vietnamese": "...Trả lại... của ta...",
						"thai": "…คืนของฉันมา…",
						"hindi": "…मेरा… लौटा दो…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 허스크의 진짜 모습이군요!",
						"english": "This is the Husk's true form!",
						"japanese": "これがハスクの本当の姿か！",
						"chinese": "这才是哈斯克的真实面貌！",
						"french": "C'est la vraie forme du Spectre !",
						"spanish": "¡Esta es la verdadera forma del Cascarón!",
						"vietnamese": "Đây chính là hình dạng thật của Husk!",
						"thai": "นี่คือร่างที่แท้จริงของฮัสก์!",
						"hindi": "यह हस्क का असली रूप है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "슬픔이 분노로… 괴로워하는 영혼이야.",
						"english": "Sorrow turned to rage... A tormented soul.",
						"japanese": "悲しみが怒りへと…苦しむ魂だ。",
						"chinese": "悲伤化为愤怒……这是一个受折磨的灵魂。",
						"french": "La tristesse muée en rage… Une âme tourmentée.",
						"spanish": "La tristeza convertida en furia… Un alma atormentada.",
						"vietnamese": "Nỗi buồn hóa thành giận dữ… Một linh hồn đau khổ.",
						"thai": "ความโศกเศร้ากลายเป็นความโกรธ… วิญญาณที่ทรมาน",
						"hindi": "दुख क्रोध में बदल गया… एक पीड़ित आत्मा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다가오지 마… 내 아이에게….",
						"english": "Don't come near... my child...",
						"japanese": "近寄らないで… 私の子供に…。",
						"chinese": "别过来……我的孩子……",
						"french": "Ne t'approche pas... de mon enfant...",
						"spanish": "No te acerques... a mi hijo...",
						"vietnamese": "Đừng lại gần... con tôi...",
						"thai": "อย่าเข้ามาใกล้... ลูกของฉัน...",
						"hindi": "पास मत आओ... मेरे बच्चे के पास..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "싸워야만 하는 건가요?",
						"english": "Must we fight?",
						"japanese": "戦わなければならないのですか？",
						"chinese": "我们必须战斗吗？",
						"french": "Faut-il se battre ?",
						"spanish": "¿Debemos luchar?",
						"vietnamese": "Chúng ta nhất định phải chiến đấu sao?",
						"thai": "เราต้องสู้หรือ?",
						"hindi": "क्या हमें लड़ना ही होगा?"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "내 아이를… 찾을 때까지… 멈추지 않아….",
						"english": "I won't stop... until I find... my child...",
						"japanese": "私の子供を… 見つけるまで… 止まらない…。",
						"chinese": "在找到……我的孩子……之前……我不会停止……",
						"french": "Je ne m'arrêterai pas... avant d'avoir trouvé... mon enfant...",
						"spanish": "No pararé... hasta que encuentre... a mi hijo...",
						"vietnamese": "Tôi sẽ không dừng lại... cho đến khi tìm thấy... con tôi...",
						"thai": "ฉันจะไม่หยุด... จนกว่าจะพบ... ลูกของฉัน...",
						"hindi": "मैं नहीं रुकूंगा... जब तक मैं अपने बच्चे को... ढूंढ नहीं लेता..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시 싸울 거예요. 진실을 밝혀낼 때까지!",
						"english": "...I will fight again. Until the truth is revealed!",
						"japanese": "…また戦うでしょう。真実が明らかになるまで！",
						"chinese": "……我会再次战斗。直到真相大白！",
						"french": "...Je me battrai encore. Jusqu'à ce que la vérité éclate !",
						"spanish": "...Lucharé de nuevo. ¡Hasta que se revele la verdad!",
						"vietnamese": "...Tôi sẽ chiến đấu lại. Cho đến khi sự thật được hé lộ!",
						"thai": "...ฉันจะสู้ใหม่. จนกว่าความจริงจะถูกเปิดเผย!",
						"hindi": "...मैं फिर से लड़ूंगा। जब तक सच्चाई सामने नहीं आती!"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 잊힌 역사는… 늘 다시 쓰여지기를 기다려.",
						"english": "Don't give up. Forgotten history... always waits to be rewritten.",
						"japanese": "諦めるな。忘れられた歴史は… いつも書き換えられるのを待っている。",
						"chinese": "别放弃。被遗忘的历史……总是在等待被重写。",
						"french": "N'abandonne pas. L'histoire oubliée... attend toujours d'être réécrite.",
						"spanish": "No te rindas. La historia olvidada... siempre espera ser reescrita.",
						"vietnamese": "Đừng bỏ cuộc. Lịch sử bị lãng quên... luôn chờ đợi được viết lại.",
						"thai": "อย่าเพิ่งยอมแพ้. ประวัติศาสตร์ที่ถูกลืม... มักจะรอให้ถูกเขียนใหม่เสมอ.",
						"hindi": "हार मत मानो। भूला हुआ इतिहास... हमेशा फिर से लिखे जाने का इंतजार करता है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 삼킨 마을, 스콜드.",
			"고립된 땅에 나타난 괴물, 허스크.",
			"에이라는 그에게서 알 수 없는 슬픔을 읽었다.",
			"잊힌 진실을 쫓는 여정, 이제 시작이다."
		],
		"english": [
			"Skold, a village swallowed by a blizzard.",
			"A monster, Husk, appeared in the isolated land.",
			"Aira read an unknown sorrow in him.",
			"The journey to chase the forgotten truth, now begins."
		],
		"japanese": [
			"吹雪に飲み込まれた村、スコルド。",
			"孤立した土地に現れた怪物、ハスク。",
			"エイラは彼から知られざる悲しみを読み取った。",
			"忘れられた真実を追う旅が、今、始まる。"
		],
		"chinese": [
			"被暴风雪吞噬的村庄，斯科尔德。",
			"怪物赫斯克出现在这片孤立的土地上。",
			"艾拉从他身上读到了一种未知的悲伤。",
			"追寻被遗忘真相的旅程，现在开始。"
		],
		"french": [
			"Skold, un village englouti par la tempête de neige.",
			"Un monstre, Husk, est apparu sur cette terre isolée.",
			"Aira lut en lui une tristesse inconnue.",
			"La quête de la vérité oubliée, commence maintenant."
		],
		"spanish": [
			"Skold, un pueblo engullido por la ventisca.",
			"Un monstruo, Husk, apareció en la tierra aislada.",
			"Aira leyó en él una tristeza desconocida.",
			"La búsqueda de la verdad olvidada, ahora comienza."
		],
		"vietnamese": [
			"Skold, ngôi làng bị bão tuyết nuốt chửng.",
			"Quái vật Husk xuất hiện ở vùng đất bị cô lập.",
			"Aira đọc thấy một nỗi buồn không tên trong anh ta.",
			"Cuộc hành trình tìm kiếm sự thật bị lãng quên, bây giờ bắt đầu."
		],
		"thai": [
			"สกอลด์ หมู่บ้านที่ถูกกลืนกินด้วยพายุหิมะ",
			"ฮัสก์ สัตว์ประหลาดปรากฏขึ้นในดินแดนที่โดดเดี่ยว",
			"ไอราสัมผัสได้ถึงความเศร้าที่ไม่รู้จักในตัวเขา",
			"การเดินทางเพื่อตามล่าความจริงที่ถูกลืมเลือน บัดนี้ได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"स्कोल्ड, बर्फ़ीले तूफ़ान में समाया एक गाँव।",
			"एक राक्षस, हस्क, एकांत भूमि में प्रकट हुआ।",
			"ऐरा ने उसमें एक अज्ञात दुख पढ़ा।",
			"भुलाई हुई सच्चाई का पीछा करने की यात्रा, अब शुरू होती है।"
		]
	}
} as const;
