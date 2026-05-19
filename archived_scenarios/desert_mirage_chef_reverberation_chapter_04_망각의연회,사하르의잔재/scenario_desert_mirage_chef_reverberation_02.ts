export const scenario_desert_mirage_chef_reverberation_02 = {
	"scenario_id": "desert_mirage_chef_reverberation_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		},
		"amir": {
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
					"content": {
						"korean": "사막 한가운데, 마을은 잊혀진 꿈처럼 고요했다. 사람들의 눈빛은 흐릿했고, 이름은 메말랐다.",
						"english": "In the middle of the desert, the village was silent like a forgotten dream. People's eyes were blurry, and their names withered.",
						"japanese": "砂漠の真ん中、村は忘れ去られた夢のように静まり返っていた。人々の目はぼんやりとし、名前は枯れ果てていた。",
						"chinese": "在沙漠中央，村庄像被遗忘的梦一样寂静。人们的眼神模糊，名字也变得干枯。",
						"french": "Au milieu du désert, le village était silencieux comme un rêve oublié. Les yeux des gens étaient flous, et leurs noms se fanaient.",
						"spanish": "En medio del desierto, el pueblo estaba en silencio como un sueño olvidado. Los ojos de la gente estaban borrosos, y sus nombres se marchitaron.",
						"vietnamese": "Giữa sa mạc, ngôi làng im lìm như một giấc mơ bị lãng quên. Ánh mắt mọi người mờ mịt, và tên của họ héo mòn.",
						"thai": "กลางทะเลทราย หมู่บ้านเงียบสงบราวกับความฝันที่ถูกลืม สายตาของผู้คนพร่ามัว และชื่อของพวกเขาก็แห้งเหี่ยว",
						"hindi": "रेगिस्तान के बीच, गाँव एक भूले हुए सपने की तरह शांत था। लोगों की आँखें धुंधली थीं, और उनके नाम सूख गए थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기도 심각하군… 다들 제정신이 아니야.",
						"english": "It's serious here too... everyone's out of their minds.",
						"japanese": "ここもひどいな…みんな正気じゃない。",
						"chinese": "这里也很严重…大家都不清醒。",
						"french": "C'est grave ici aussi... tout le monde est fou.",
						"spanish": "Aquí también es grave... todos están locos.",
						"vietnamese": "Ở đây cũng nghiêm trọng... mọi người đều mất trí rồi.",
						"thai": "ที่นี่ก็ร้ายแรงเหมือนกัน... ทุกคนเสียสติไปแล้ว",
						"hindi": "यहां भी गंभीर है... सब पागल हो गए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ashur"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "…아, 햇살 좋은 날이구나. 곧 연회가 시작될 거야.",
						"english": "...Ah, it's a sunny day. The banquet will start soon.",
						"japanese": "…ああ、日差しが良い日だね。もうすぐ宴会が始まるよ。",
						"chinese": "……啊，真是个阳光明媚的日子。宴会很快就要开始了。",
						"french": "Ah, c'est une belle journée ensoleillée. Le banquet va bientôt commencer.",
						"spanish": "Ah, es un día soleado. El banquete comenzará pronto.",
						"vietnamese": "À, một ngày nắng đẹp. Bữa tiệc sắp bắt đầu rồi.",
						"thai": "อา เป็นวันที่แดดดีจังเลย งานเลี้ยงจะเริ่มแล้วนะ",
						"hindi": "आह, यह एक धूप वाला दिन है। दावत जल्द ही शुरू होगी।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르, 당신 이름 기억 안 나?",
						"english": "Ashur, don't you remember your name?",
						"japanese": "アシュル、自分の名前、覚えてないのかい？",
						"chinese": "阿舒尔，你不记得你的名字了吗？",
						"french": "Ashur, tu ne te souviens pas de ton nom ?",
						"spanish": "Ashur, ¿no recuerdas tu nombre?",
						"vietnamese": "Ashur, bạn không nhớ tên mình sao?",
						"thai": "อาชูร์ คุณจำชื่อตัวเองไม่ได้เหรอ?",
						"hindi": "अशूर, क्या तुम्हें अपना नाम याद नहीं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ashur",
					"content": {
						"korean": "이름? 그런 게 뭐가 중요해? 난 여기서 행복한데.",
						"english": "Name? What does that matter? I'm happy here.",
						"japanese": "名前？そんなもの、どうでもいいさ。ここで幸せなんだから。",
						"chinese": "名字？那有什么重要的？我在这里很幸福。",
						"french": "Nom ? Qu'est-ce que ça importe ? Je suis heureux ici.",
						"spanish": "¿Nombre? ¿Qué importa eso? Soy feliz aquí.",
						"vietnamese": "Tên? Điều đó quan trọng gì? Tôi hạnh phúc ở đây mà.",
						"thai": "ชื่อ? มันสำคัญอะไรล่ะ? ฉันมีความสุขที่นี่นะ",
						"hindi": "नाम? उससे क्या फर्क पड़ता है? मैं यहां खुश हूं।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "어서 와! 자네도 연회에 온 건가? 음식이 아주 풍성할 거야.",
						"english": "Welcome! Did you come to the banquet too? The food will be abundant.",
						"japanese": "ようこそ！君も宴会に来たのかい？ご馳走がたくさんあるぞ。",
						"chinese": "欢迎！你也是来参加宴会的吗？食物会非常丰盛的。",
						"french": "Bienvenue ! Tu es aussi venu au banquet ? La nourriture sera très abondante.",
						"spanish": "¡Bienvenido! ¿Tú también viniste al banquete? La comida será muy abundante.",
						"vietnamese": "Chào mừng! Bạn cũng đến dự tiệc sao? Thức ăn sẽ rất phong phú đấy.",
						"thai": "ยินดีต้อนรับ! คุณก็มาร่วมงานเลี้ยงด้วยเหรอ? อาหารจะเยอะแยะเลยล่ะ",
						"hindi": "स्वागत है! क्या तुम भी दावत में आए हो? खाना बहुत स्वादिष्ट होगा।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르, 정신 차려. 연회는 없어. 이봐, 이 묘한 향신료 냄새 안 나?",
						"english": "Ashur, snap out of it. There's no banquet. Hey, don't you smell this strange spice?",
						"japanese": "アシュル、しっかりして。宴会なんてないわ。ねえ、この妙な香辛料の匂い、しない？",
						"chinese": "阿舒尔，清醒点。没有什么宴会。喂，你没闻到这股奇怪的香料味吗？",
						"french": "Ashur, ressaisis-toi. Il n'y a pas de banquet. Dis, tu ne sens pas cette étrange odeur d'épices ?",
						"spanish": "Ashur, espabila. No hay ningún banquete. Oye, ¿no hueles esta extraña especia?",
						"vietnamese": "Ashur, tỉnh lại đi. Không có yến tiệc nào cả. Này, cậu không ngửi thấy mùi gia vị lạ này sao?",
						"thai": "อาชูร์ ได้สติหน่อย ไม่มีงานเลี้ยงอะไรทั้งนั้น เฮ้ ไม่ได้กลิ่นเครื่องเทศแปลกๆ นี้เหรอ?",
						"hindi": "आशुर, होश में आओ। कोई दावत नहीं है। सुनो, क्या तुम्हें इस अजीब मसाले की गंध नहीं आ रही?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "향신료? 아, 그 향은 언제 맡아도 황홀하지. 모든 것을 잊게 해줘.",
						"english": "Spices? Ah, that scent is always enchanting. It makes me forget everything.",
						"japanese": "香辛料？ああ、あの香りはいつ嗅いでもうっとりするね。すべてを忘れさせてくれる。",
						"chinese": "香料？啊，那香气无论何时闻起来都令人陶醉。它让我忘却一切。",
						"french": "Des épices ? Ah, cette odeur est toujours enivrante. Elle me fait tout oublier.",
						"spanish": "Especias? Ah, ese aroma siempre es embriagador. Me hace olvidar todo.",
						"vietnamese": "Gia vị ư? À, mùi hương đó lúc nào cũng mê hoặc. Nó khiến tôi quên đi tất cả.",
						"thai": "เครื่องเทศเหรอ? อา กลิ่นนั้นหอมน่าหลงใหลเสมอเลย มันทำให้ฉันลืมทุกสิ่ง",
						"hindi": "मसाले? आह, वह सुगंध हमेशा मंत्रमुग्ध कर देती है। यह मुझे सब कुछ भुला देती है।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "잊게 한다고? 당신, 계속 이러다간….",
						"english": "Forget? You keep going like this, and...",
						"japanese": "忘れさせるって？あなた、このままじゃ…。",
						"chinese": "忘却？你再这样下去的话……",
						"french": "Oublier ? Si tu continues comme ça…",
						"spanish": "¿Olvidar? Si sigues así...",
						"vietnamese": "Quên sao? Cậu cứ tiếp tục thế này thì...",
						"thai": "ลืมเหรอ? นายยังเป็นแบบนี้ต่อไปไม่ได้นะ...",
						"hindi": "भुला देता है? तुम ऐसे ही चलते रहे तो..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "난 행복해. 과거는 모두 아름다운 꿈이었어. 그걸로 충분해.",
						"english": "I'm happy. The past was all a beautiful dream. That's enough for me.",
						"japanese": "私は幸せだ。過去はすべて美しい夢だった。それで十分だ。",
						"chinese": "我很幸福。过去都只是一场美梦。这样就足够了。",
						"french": "Je suis heureux. Le passé n'était qu'un beau rêve. C'est suffisant.",
						"spanish": "Soy feliz. El pasado fue un hermoso sueño. Con eso me basta.",
						"vietnamese": "Tôi hạnh phúc. Quá khứ chỉ là một giấc mơ đẹp. Vậy là đủ rồi.",
						"thai": "ฉันมีความสุข อดีตเป็นแค่ฝันดี นั่นก็เพียงพอแล้ว",
						"hindi": "मैं खुश हूँ। अतीत सब एक खूबसूरत सपना था। मेरे लिए इतना काफी है।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"content": {
						"korean": "하하! 춤출 시간이야! 이 순간이 영원하길!",
						"english": "Haha! Time to dance! May this moment last forever!",
						"japanese": "ハハ！踊る時間だ！この瞬間が永遠に続きますように！",
						"chinese": "哈哈！是时候跳舞了！愿这一刻永恒！",
						"french": "Haha ! C'est l'heure de danser ! Que ce moment dure éternellement !",
						"spanish": "¡Jaja! ¡Es hora de bailar! ¡Que este momento dure para siempre!",
						"vietnamese": "Haha! Đến lúc nhảy rồi! Mong khoảnh khắc này kéo dài mãi mãi!",
						"thai": "ฮ่าฮ่า! ได้เวลาเต้นแล้ว! ขอให้ช่วงเวลานี้คงอยู่ตลอดไป!",
						"hindi": "हाहा! नाचने का समय है! यह पल हमेशा के लिए रहे!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아슈르… 완전히 가버렸어. 어떻게 해야 해…",
						"english": "Ashur… he's completely gone. What should I do…?",
						"japanese": "アシュル…完全にいってしまった。どうすればいい…。",
						"chinese": "阿舒尔……他彻底完了。我该怎么办……",
						"french": "Ashur… il est complètement parti. Que dois-je faire…",
						"spanish": "Ashur... se ha ido por completo. ¿Qué debo hacer...?",
						"vietnamese": "Ashur… cậu ấy hoàn toàn mất trí rồi. Tôi phải làm gì đây…?",
						"thai": "อาชูร์... เขาไปแล้วจริงๆ ฉันควรทำยังไงดี...",
						"hindi": "आशुर... वह पूरी तरह से चला गया। मुझे क्या करना चाहिए...?"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "늦었어. 망각에 잠식된 자는 되돌릴 수 없어.",
						"english": "It's too late. Those consumed by oblivion cannot be brought back.",
						"japanese": "手遅れだ。忘却に侵された者は、元に戻せない。",
						"chinese": "晚了。被遗忘吞噬的人无法挽回。",
						"french": "C'est trop tard. Ceux qui sont consumés par l'oubli ne peuvent être ramenés.",
						"spanish": "Es tarde. Aquellos consumidos por el olvido no pueden ser recuperados.",
						"vietnamese": "Quá muộn rồi. Những kẻ bị lãng quên chiếm lấy thì không thể quay lại được.",
						"thai": "สายเกินไปแล้ว ผู้ที่ถูกกลืนกินด้วยการหลงลืมไม่อาจย้อนกลับมาได้",
						"hindi": "बहुत देर हो चुकी है। विस्मृति में डूबे लोगों को वापस नहीं लाया जा सकता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아미르! 당신은 이걸 어떻게…?",
						"english": "Amir! How did you…?",
						"japanese": "アミル！あなたはこれをどうやって…？",
						"chinese": "阿米尔！你这是怎么……？",
						"french": "Amir ! Comment as-tu… ?",
						"spanish": "¡Amir! ¿Cómo es que tú...?",
						"vietnamese": "Amir! Làm sao cậu lại…?",
						"thai": "อามีร์! นายทำแบบนี้ได้ยังไง...?",
						"hindi": "अमीर! तुमने यह कैसे...?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "이 지역에서 이상한 향신료를 재배하고 있어. 그게 사람들의 기억을 지워버려.",
						"english": "They're cultivating strange spices in this area. They erase people's memories.",
						"japanese": "この地域では奇妙な香辛料を栽培している。それが人々の記憶を消してしまうんだ。",
						"chinese": "他们在这个区域种植着奇怪的香料。它会抹去人们的记忆。",
						"french": "Ils cultivent des épices étranges dans cette zone. Elles effacent les souvenirs des gens.",
						"spanish": "Están cultivando especias extrañas en esta zona. Borran los recuerdos de la gente.",
						"vietnamese": "Họ đang trồng những loại gia vị lạ trong khu vực này. Chúng xóa đi ký ức của mọi người.",
						"thai": "พวกเขากำลังปลูกเครื่องเทศแปลกๆ ในบริเวณนี้ มันลบความทรงจำของผู้คน",
						"hindi": "वे इस इलाके में अजीब मसाले उगा रहे हैं। वे लोगों की याददाश्त मिटा देते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"content": {
						"korean": "게다가… 사막 동물들도 이상해. 특정 장소에 모여서 아무것도 안 하고 앉아있어. 마치 뭔가를 기다리는 것처럼.",
						"english": "What's more… the desert animals are strange too. They gather in specific spots, just sitting there doing nothing. As if waiting for something.",
						"japanese": "さらに…砂漠の動物たちもおかしい。特定の場所に集まって、何もせずに座っている。まるで何かを待っているかのように。",
						"chinese": "而且……沙漠里的动物也很奇怪。它们聚集在特定的地方，什么也不做地坐着。仿佛在等待着什么。",
						"french": "De plus… les animaux du désert sont étranges aussi. Ils se regroupent à des endroits précis, assis sans rien faire. Comme s'ils attendaient quelque chose.",
						"spanish": "Además... los animales del desierto también son extraños. Se reúnen en lugares específicos, sentados sin hacer nada. Como si esperaran algo.",
						"vietnamese": "Hơn nữa… các loài động vật sa mạc cũng rất lạ. Chúng tập trung ở những nơi cụ thể, chỉ ngồi đó mà không làm gì cả. Cứ như đang chờ đợi điều gì đó.",
						"thai": "ยิ่งกว่านั้น... สัตว์ทะเลทรายก็แปลก พวกมันรวมตัวกันในที่เฉพาะ นั่งอยู่เฉยๆ ไม่ทำอะไรเลย ราวกับกำลังรอคอยบางสิ่ง",
						"hindi": "इसके अलावा... रेगिस्तानी जानवर भी अजीब हैं। वे कुछ खास जगहों पर इकट्ठे होते हैं, बस बैठे रहते हैं और कुछ नहीं करते। मानो किसी चीज़ का इंतज़ार कर रहे हों।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "향신료… 동물들까지? 이 사막, 뭔가 뒤틀리고 있어.",
						"english": "Spices... even animals? This desert is twisted.",
						"japanese": "香辛料に… 動物まで？この砂漠、何かが歪んでいる。",
						"chinese": "香料……连动物都？这片沙漠，有些不对劲。",
						"french": "Des épices... et même des animaux ? Ce désert est en train de se tordre.",
						"spanish": "¿Especias... incluso animales? Este desierto se está retorciendo.",
						"vietnamese": "Gia vị... cả động vật nữa? Sa mạc này, có gì đó đang bị vặn vẹo.",
						"thai": "เครื่องเทศ... แม้แต่สัตว์? ทะเลทรายแห่งนี้กำลังบิดเบี้ยว",
						"hindi": "मसाले… जानवर भी? इस रेगिस्तान में कुछ तो गड़बड़ है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사막의 바람은 기억을 흩뿌렸다. 잊혀진 이름들만이 모래 속에 묻혔다.",
						"english": "The desert winds scattered memories. Only forgotten names lay buried in the sand.",
						"japanese": "砂漠の風は記憶を散らした。忘れ去られた名だけが砂の中に埋もれた。",
						"chinese": "沙漠之风吹散了记忆。唯有被遗忘的名字深埋沙中。",
						"french": "Les vents du désert ont dispersé les souvenirs. Seuls les noms oubliés reposaient enfouis dans le sable.",
						"spanish": "Los vientos del desierto esparcieron los recuerdos. Solo nombres olvidados yacían sepultados en la arena.",
						"vietnamese": "Gió sa mạc cuốn đi ký ức. Chỉ những cái tên bị lãng quên vùi sâu trong cát.",
						"thai": "ลมทะเลทรายโปรยปรายความทรงจำ มีเพียงชื่อที่ถูกลืมเลือนเท่านั้นที่ถูกฝังอยู่ในทราย",
						"hindi": "रेगिस्तान की हवाओं ने यादें बिखेर दीं। केवल भूले हुए नाम रेत में दबे रह गए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…이제 정말 돌아갈 수 없어.",
						"english": "...Now, there's truly no turning back.",
						"japanese": "…もう、本当に戻れない。",
						"chinese": "……现在真的回不去了。",
						"french": "...Maintenant, il n'y a vraiment plus de retour possible.",
						"spanish": "...Ahora, realmente no hay vuelta atrás.",
						"vietnamese": "...Giờ thì, thật sự không thể quay về nữa rồi.",
						"thai": "...ตอนนี้ ไม่มีทางย้อนกลับไปได้แล้วจริงๆ",
						"hindi": "...अब, सचमुच वापसी का कोई रास्ता नहीं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 기억하지 못하면, 누가 이 모든 것을 기억해 줄까?",
						"english": "If we don't remember, who will remember all of this?",
						"japanese": "私たちが忘れれば、誰がこのすべてを覚えてくれるだろうか？",
						"chinese": "如果我们不铭记，谁会记住这一切？",
						"french": "Si nous n'y parvenons pas, qui se souviendra de tout cela ?",
						"spanish": "Si no recordamos, ¿quién recordará todo esto?",
						"vietnamese": "Nếu chúng ta không nhớ, ai sẽ nhớ tất cả những điều này đây?",
						"thai": "ถ้าเราไม่จดจำ ใครเล่าจะจดจำสิ่งเหล่านี้ทั้งหมด?",
						"hindi": "अगर हम याद नहीं रखेंगे, तो इन सबको कौन याद रखेगा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…잊지 않겠어. 이 고통, 이 절망. 전부 기억할 거야.",
						"english": "...I won't forget. This pain, this despair. I will remember it all.",
						"japanese": "…忘れない。この苦痛、この絶望。すべて記憶する。",
						"chinese": "……我不会忘记。这份痛苦，这份绝望。我会记住一切。",
						"french": "...Je n'oublierai pas. Cette douleur, ce désespoir. Je me souviendrai de tout.",
						"spanish": "...No lo olvidaré. Este dolor, esta desesperación. Lo recordaré todo.",
						"vietnamese": "...Ta sẽ không quên. Nỗi đau này, sự tuyệt vọng này. Ta sẽ nhớ tất cả.",
						"thai": "...จะไม่ลืม ความเจ็บปวดนี้ ความสิ้นหวังนี้ จะจดจำทุกอย่าง",
						"hindi": "...मैं नहीं भूलूंगा। यह दर्द, यह निराशा। मैं सब याद रखूंगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝까지 갈 거야. 이 망각의 근원을 찾을 때까지.",
						"english": "I'll go to the very end. Until I find the source of this oblivion.",
						"japanese": "最後まで行く。この忘却の根源を見つけるまで。",
						"chinese": "我会走到最后。直到找到这遗忘的根源。",
						"french": "J'irai jusqu'au bout. Jusqu'à ce que je trouve la source de cet oubli.",
						"spanish": "Llegaré hasta el final. Hasta que encuentre la fuente de este olvido.",
						"vietnamese": "Ta sẽ đi đến cùng. Cho đến khi tìm ra nguồn gốc của sự lãng quên này.",
						"thai": "จะไปจนสุดทาง จนกว่าจะพบต้นกำเนิดของความหลงลืมนี้",
						"hindi": "मैं अंत तक जाऊंगा। जब तक इस विस्मृति का स्रोत नहीं ढूंढ लेता।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 존재들이여. 뭘 찾으러 왔느냐?",
						"english": "Worthless beings. What have you come to seek?",
						"japanese": "くだらぬ者どもよ。何を探しに来た？",
						"chinese": "卑微的生灵啊。你们来此寻何物？",
						"french": "Misérables créatures. Que cherchez-vous ?",
						"spanish": "Seres insignificantes. ¿Qué venís a buscar?",
						"vietnamese": "Những sinh vật hèn mọn. Các ngươi đến tìm gì?",
						"thai": "พวกไร้ค่าเอ๋ย เจ้ามาหาอะไร?",
						"hindi": "तुच्छ प्राणियों। क्या ढूंढने आए हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "망각의 근원! 이 사막을 망치고 있는 너를!",
						"english": "The source of oblivion! You, who are ruining this desert!",
						"japanese": "忘却の根源！この砂漠を荒廃させているお前を！",
						"chinese": "遗忘的根源！就是你，毁掉这片沙漠的你！",
						"french": "La source de l'oubli ! Toi qui détruis ce désert !",
						"spanish": "¡La fuente del olvido! ¡A ti, que estás arruinando este desierto!",
						"vietnamese": "Nguồn gốc của sự lãng quên! Chính ngươi, kẻ đang hủy hoại sa mạc này!",
						"thai": "ต้นกำเนิดแห่งความหลงลืม! เจ้า ผู้ที่กำลังทำลายทะเลทรายแห่งนี้!",
						"hindi": "विस्मृति का स्रोत! तुम, जो इस रेगिस्तान को बर्बाद कर रहे हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "망각? 그것은 축복이다. 고통스러운 기억은 지워야 마땅하지.",
						"english": "Oblivion? It is a blessing. Painful memories deserve to be erased.",
						"japanese": "忘却？それは祝福だ。苦痛な記憶は消し去るべきだろう。",
						"chinese": "遗忘？那是一种祝福。痛苦的记忆本就该被抹去。",
						"french": "L'oubli ? C'est une bénédiction. Les souvenirs douloureux méritent d'être effacés.",
						"spanish": "¿Olvido? Es una bendición. Los recuerdos dolorosos merecen ser borrados.",
						"vietnamese": "Lãng quên? Đó là một lời ban phước. Ký ức đau khổ đáng lẽ phải bị xóa bỏ.",
						"thai": "ความหลงลืม? มันคือพร ความทรงจำที่เจ็บปวดสมควรถูกลบไป",
						"hindi": "विस्मृति? यह एक वरदान है। दर्दनाक यादों को मिटा देना ही उचित है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실은 환상보다 잔인하다. 너희도 곧 알게 될 것이다.",
						"english": "The truth is crueler than any illusion. You, too, will soon realize it.",
						"japanese": "真実は幻想よりも残酷だ。お前たちもすぐに知ることになるだろう。",
						"chinese": "真相比幻象更残酷。你们很快就会明白。",
						"french": "La vérité est plus cruelle que l'illusion. Vous le comprendrez bientôt.",
						"spanish": "La verdad es más cruel que la ilusión. Vosotros también lo descubriréis pronto.",
						"vietnamese": "Sự thật tàn khốc hơn ảo ảnh. Các ngươi cũng sẽ sớm nhận ra thôi.",
						"thai": "ความจริงโหดร้ายกว่าภาพลวงตา พวกเจ้าก็จะรู้ในไม่ช้า",
						"hindi": "सच्चाई भ्रम से कहीं ज़्यादा क्रूर होती है। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 헛된 몸부림… 망각은… 영원히….",
						"english": "Ugh... futile struggle... oblivion... forever...",
						"japanese": "ぐっ… 無駄な足掻き… 忘却は… 永遠に…。",
						"chinese": "呃...徒劳的挣扎...遗忘...永恒...",
						"french": "Ugh... lutte vaine... l'oubli... pour toujours...",
						"spanish": "Uf... lucha inútil... el olvido... para siempre...",
						"vietnamese": "Ư... vô ích... lãng quên... vĩnh viễn...",
						"thai": "อึก... การดิ้นรนที่เปล่าประโยชน์... การหลงลืม... ชั่วนิรันดร์...",
						"hindi": "उफ़... व्यर्थ का संघर्ष... विस्मृति... हमेशा के लिए..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "망각은 영원하지 않아! 우리는 기억할 거야!",
						"english": "Oblivion isn't eternal! We will remember!",
						"japanese": "忘却は永遠じゃない！私たちは覚えている！",
						"chinese": "遗忘并非永恒！我们会记住的！",
						"french": "L'oubli n'est pas éternel ! Nous nous souviendrons !",
						"spanish": "¡El olvido no es eterno! ¡Lo recordaremos!",
						"vietnamese": "Lãng quên không phải vĩnh viễn! Chúng ta sẽ nhớ!",
						"thai": "การหลงลืมไม่ใช่ชั่วนิรันดร์! เราจะจดจำ!",
						"hindi": "विस्मृति शाश्वत नहीं है! हम याद रखेंगे!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모래 폭풍 속에서 희미하게 속삭이는 소리가 들렸다. 망각의 정령이 완전히 잠들지는 않은 듯했다.",
						"english": "Faint whispers were heard amidst the sandstorm. The Spirit of Oblivion did not seem to be fully asleep.",
						"japanese": "砂嵐の中で微かな囁きが聞こえた。忘却の精霊は完全に眠りについていないようだった。",
						"chinese": "沙尘暴中传来微弱的低语声。遗忘之灵似乎并未完全沉睡。",
						"french": "De faibles murmures se firent entendre au milieu de la tempête de sable. L'Esprit de l'Oubli ne semblait pas être totalement endormi.",
						"spanish": "Se escucharon débiles susurros entre la tormenta de arena. El Espíritu del Olvido no parecía estar completamente dormido.",
						"vietnamese": "Những tiếng thì thầm yếu ớt vang lên giữa bão cát. Linh hồn Lãng quên dường như vẫn chưa hoàn toàn ngủ say.",
						"thai": "เสียงกระซิบแผ่วเบาได้ยินท่ามกลางพายุทราย วิญญาณแห่งการหลงลืมดูเหมือนจะยังไม่หลับใหลสนิท",
						"hindi": "रेत के तूफान के बीच हल्की फुसफुसाहट सुनाई दी। विस्मृति की आत्मा पूरी तरह से सोई हुई नहीं लग रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어쩌면, 이제 시작일지도 모른다. 더 깊은 곳에서, 더 큰 망각이 기다리고 있었다.",
						"english": "Perhaps, this is just the beginning. In deeper places, a greater oblivion awaited.",
						"japanese": "もしかしたら、これは始まりに過ぎないのかもしれない。もっと深い場所で、より大きな忘却が待ち受けていた。",
						"chinese": "也许，这只是开始。在更深之处，更大的遗忘正在等待。",
						"french": "Peut-être que ce n'est que le début. Dans des lieux plus profonds, un oubli plus grand attendait.",
						"spanish": "Quizás, esto sea solo el principio. En lugares más profundos, una mayor obligación esperaba.",
						"vietnamese": "Có lẽ, đây chỉ là khởi đầu. Nơi sâu hơn, một sự lãng quên lớn hơn đang chờ đợi.",
						"thai": "บางที นี่อาจเป็นเพียงจุดเริ่มต้น ในสถานที่ที่ลึกกว่านั้น การหลงลืมที่ยิ่งใหญ่กว่ากำลังรออยู่",
						"hindi": "शायद, यह तो बस शुरुआत है। गहरी जगहों में, एक बड़ी विस्मृति इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "결국… 너희도 잊혀질 운명이다. 모든 것을 놓아라.",
						"english": "In the end... you too are fated to be forgotten. Let go of everything.",
						"japanese": "結局… お前たちも忘れ去られる運命だ。全てを解き放て。",
						"chinese": "最终...你们也将被遗忘。放下一切吧。",
						"french": "Au final... vous aussi êtes destinés à être oubliés. Lâchez tout.",
						"spanish": "Al final... vosotros también estáis destinados a ser olvidados. Soltad todo.",
						"vietnamese": "Cuối cùng... các ngươi cũng sẽ bị lãng quên. Hãy buông bỏ tất cả.",
						"thai": "ในที่สุด... พวกเจ้าก็มีชะตากรรมที่จะถูกลืมเลือน ปล่อยวางทุกสิ่ง",
						"hindi": "अंततः... तुम भी भुला दिए जाओगे। सब कुछ छोड़ दो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "잊지 않아… 절대로…!",
						"english": "We won't forget... never...!",
						"japanese": "忘れない… 絶対に…！",
						"chinese": "不会忘记...绝不...!",
						"french": "Nous n'oublierons pas... jamais...!",
						"spanish": "¡No olvidaremos... nunca...!",
						"vietnamese": "Sẽ không quên... tuyệt đối không...!",
						"thai": "ไม่ลืม... ไม่มีวัน...!",
						"hindi": "नहीं भूलेंगे... कभी नहीं...!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "그래, 그 분노마저도… 곧 사라지리라.",
						"english": "Yes, even that rage... will soon fade.",
						"japanese": "そう、その怒りさえも… やがて消え去るだろう。",
						"chinese": "是的，就连那份愤怒...也很快会消失。",
						"french": "Oui, même cette rage... disparaîtra bientôt.",
						"spanish": "Sí, incluso esa ira... pronto desaparecerá.",
						"vietnamese": "Phải, ngay cả sự phẫn nộ đó... cũng sẽ sớm tan biến.",
						"thai": "ใช่ แม้แต่ความโกรธนั้น... ก็จะเลือนหายไปในไม่ช้า",
						"hindi": "हाँ, वह क्रोध भी... जल्द ही मिट जाएगा।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막에 드리운 망각의 그림자.",
			"사람들은 자신의 이름마저 잊어갔다.",
			"오직 행복했던 환상만이 진짜가 되고,",
			"현실은 점점 흐릿해져 갔다."
		],
		"english": [
			"The shadow of oblivion cast over the desert.",
			"People even forgot their own names.",
			"Only happy illusions became real,",
			"Reality gradually faded away."
		],
		"japanese": [
			"砂漠に覆いかぶさる忘却の影。",
			"人々は自分の名前すら忘れていった。",
			"ただ幸せだった幻想だけが現実となり、",
			"現実は次第に薄れていった。"
		],
		"chinese": [
			"遗忘的阴影笼罩着沙漠。",
			"人们甚至忘记了自己的名字。",
			"只有幸福的幻觉才是真实的，",
			"现实逐渐变得模糊。"
		],
		"french": [
			"L'ombre de l'oubli plane sur le désert.",
			"Les gens ont même oublié leurs propres noms.",
			"Seules les illusions heureuses devenaient réelles,",
			"La réalité s'est progressivement estompée."
		],
		"spanish": [
			"La sombra del olvido se cierne sobre el desierto.",
			"La gente incluso olvidó sus propios nombres.",
			"Solo las ilusiones felices se volvieron reales,",
			"La realidad se desvaneció gradualmente."
		],
		"vietnamese": [
			"Bóng tối lãng quên bao trùm sa mạc.",
			"Mọi người thậm chí còn quên tên của mình.",
			"Chỉ có những ảo ảnh hạnh phúc mới trở thành sự thật,",
			"Thực tại dần trở nên mờ nhạt."
		],
		"thai": [
			"เงาแห่งการหลงลืมปกคลุมทะเลทราย",
			"ผู้คนพากันลืมชื่อของตนเอง",
			"มีเพียงภาพลวงตาแห่งความสุขเท่านั้นที่เป็นจริง",
			"ความเป็นจริงค่อยๆ เลือนหายไป"
		],
		"hindi": [
			"रेगिस्तान पर छाया विस्मृति का साया।",
			"लोग अपने नाम तक भूल गए।",
			"केवल सुखी भ्रम ही वास्तविक हो गए,",
			"वास्तविकता धीरे-धीरे धूमिल होती गई।"
		]
	}
} as const;
