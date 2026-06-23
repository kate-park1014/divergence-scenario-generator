export const scenario_desert_buff_31_01 = {
	"scenario_id": "desert_buff_31_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없는 모래바람 속, 오아시스가 나타났다.",
						"english": "In the endless sandstorms, an oasis appeared.",
						"japanese": "終わりなき砂嵐の中、オアシスが現れた。",
						"chinese": "在无尽的沙尘暴中，一片绿洲出现了。",
						"french": "Au milieu des tempêtes de sable infinies, une oasis apparut.",
						"spanish": "Entre las interminables tormentas de arena, apareció un oasis.",
						"vietnamese": "Giữa bão cát không ngừng, một ốc đảo hiện ra.",
						"thai": "ท่ามกลางพายุทรายไม่สิ้นสุด, โอเอซิสปรากฏขึ้น.",
						"hindi": "अंतहीन रेतीले तूफानों के बीच, एक नखलिस्तान दिखाई दिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저거 봐! 오아시스야!",
						"english": "Look! An oasis!",
						"japanese": "見て！ オアシスだ！",
						"chinese": "看！ 是绿洲！",
						"french": "Regardez ! Une oasis !",
						"spanish": "¡Mira! ¡Un oasis!",
						"vietnamese": "Nhìn kìa! Một ốc đảo!",
						"thai": "ดูนั่นสิ! โอเอซิส!",
						"hindi": "देखो! एक नखलिस्तान है!"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정말… 깨끗해. 이렇게 맑은 물은 처음 봐.",
						"english": "It's so... clean. I've never seen such clear water.",
						"japanese": "本当に…きれいだ。こんなに澄んだ水は初めて見る。",
						"chinese": "真的…好干净。我从未见过如此清澈的水。",
						"french": "C'est tellement... propre. Je n'ai jamais vu une eau aussi claire.",
						"spanish": "Es tan... limpio. Nunca había visto agua tan clara.",
						"vietnamese": "Thật... trong lành. Tôi chưa từng thấy nước trong thế này.",
						"thai": "มัน... สะอาดมาก. ไม่เคยเห็นน้ำใสขนาดนี้มาก่อน.",
						"hindi": "यह बहुत... साफ है। मैंने कभी इतना साफ पानी नहीं देखा।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "멈춰요. 저곳은… 완벽합니다.",
						"english": "Stop. That place is... perfect.",
						"japanese": "止まってください。あそこは…完璧です。",
						"chinese": "停下。那个地方…太完美了。",
						"french": "Arrêtez. Cet endroit est... parfait.",
						"spanish": "Detenganse. Ese lugar es... perfecto.",
						"vietnamese": "Dừng lại. Nơi đó... hoàn hảo.",
						"thai": "หยุด. ที่นั่น... สมบูรณ์แบบเกินไป.",
						"hindi": "रुकिए। वह जगह... बिल्कुल सही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "완벽한 게 뭐가 문제야, 현자님?",
						"english": "What's wrong with being perfect, Sage?",
						"japanese": "完璧であることに何の問題があるのですか、賢者様？",
						"chinese": "完美有什么问题吗，贤者大人？",
						"french": "Qu'y a-t-il de mal à être parfait, Sage ?",
						"spanish": "¿Qué hay de malo en ser perfecto, Sabio?",
						"vietnamese": "Hoàn hảo thì có vấn đề gì, Hiền nhân?",
						"thai": "ความสมบูรณ์แบบมีปัญหาอะไรหรือ, ท่านปราชญ์?",
						"hindi": "पूर्ण होने में क्या दिक्कत है, ऋषि?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고대부터 전해오는 이야기가 있습니다. 너무 완벽한 것은…",
						"english": "There's a tale from ancient times. Something too perfect...",
						"japanese": "古代から伝わる話があります。あまりにも完璧なものは…",
						"chinese": "有一个自古流传的故事。过于完美的事物…",
						"french": "Il y a une histoire qui nous vient des temps anciens. Ce qui est trop parfait...",
						"spanish": "Hay una historia que viene de los tiempos antiguos. Algo demasiado perfecto...",
						"vietnamese": "Có một câu chuyện được truyền lại từ xa xưa. Cái gì quá hoàn hảo...",
						"thai": "มีเรื่องเล่าสืบทอดมาจากสมัยโบราณ. สิ่งที่สมบูรณ์แบบเกินไป...",
						"hindi": "प्राचीन काल से एक कहानी चली आ रही है। कोई चीज़ जो बहुत सही है..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "항상 대가를 치르게 합니다.",
						"english": "It always exacts a price.",
						"japanese": "いつも代償を払わせる。",
						"chinese": "总是要付出代价的。",
						"french": "Ça a toujours un prix.",
						"spanish": "Siempre cobra un precio.",
						"vietnamese": "Luôn phải trả giá.",
						"thai": "มันเรียกค่าตอบแทนเสมอ",
						"hindi": "इसकी कीमत हमेशा चुकानी पड़ती है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何のことだ？",
						"chinese": "你说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณพูดอะไร?",
						"hindi": "क्या कह रहे हो तुम?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"content": {
						"korean": "오아시스 안쪽, 먼지 하나 없는 바위 조각이 섬뜩하게 빛나고 있었다.",
						"english": "Inside the oasis, a dust-free rock shard glowed eerily.",
						"japanese": "オアシスの奥、塵一つない岩の破片が不気味に輝いていた。",
						"chinese": "绿洲深处，一块一尘不染的岩石碎片散发着诡异的光芒。",
						"french": "Au cœur de l'oasis, un éclat de roche immaculé brillait étrangement.",
						"spanish": "En el interior del oasis, un fragmento de roca impecable brillaba de forma inquietante.",
						"vietnamese": "Sâu bên trong ốc đảo, một mảnh đá không một hạt bụi phát sáng một cách kỳ lạ.",
						"thai": "ภายในโอเอซิส เศษหินที่ปราศจากฝุ่นส่องประกายอย่างน่าขนลุก",
						"hindi": "मरूद्यान के भीतर, धूल रहित चट्टान का एक टुकड़ा अजीब तरह से चमक रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저 바위… 누가 닦아놓은 것 같아.",
						"english": "That rock... looks like someone cleaned it.",
						"japanese": "あの岩…誰かが磨いたみたいだ。",
						"chinese": "那块石头……好像被人擦过。",
						"french": "Cette roche... on dirait que quelqu'un l'a nettoyée.",
						"spanish": "Esa roca... parece que alguien la limpió.",
						"vietnamese": "Hòn đá đó... trông như có người đã lau chùi.",
						"thai": "หินก้อนนั้น... ดูเหมือนมีคนทำความสะอาด",
						"hindi": "वह पत्थर... लगता है किसी ने उसे साफ़ किया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…만져서는 안 됩니다. 너무나도 깨끗한 것들은…",
						"english": "...Don't touch it. Things that are too clean...",
						"japanese": "…触ってはいけません。あまりにも綺麗なものは…",
						"chinese": "……别碰。过于干净的东西……",
						"french": "...Il ne faut pas y toucher. Les choses trop propres...",
						"spanish": "...No lo toques. Las cosas demasiado limpias...",
						"vietnamese": "...Đừng chạm vào. Những thứ quá sạch sẽ...",
						"thai": "...ห้ามแตะต้อง ของที่สะอาดเกินไป...",
						"hindi": "...इसे मत छुओ। जो चीजें बहुत ज़्यादा साफ होती हैं..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것을 지워버리죠. 흔적까지도.",
						"english": "...erase everything. Even traces.",
						"japanese": "全てを消し去る。痕跡すらも。",
						"chinese": "……会抹去一切。甚至连痕迹都不留。",
						"french": "...effacent tout. Même les traces.",
						"spanish": "...lo borran todo. Hasta el rastro.",
						"vietnamese": "...xóa sạch mọi thứ. Ngay cả dấu vết.",
						"thai": "...ลบทุกสิ่ง แม้กระทั่งร่องรอย",
						"hindi": "...सब कुछ मिटा देती हैं। निशान तक।"
					},
					"speaker": "amir",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 근처에서 누군가 사라졌다는 소문이 있었는데…",
						"english": "There were rumors someone disappeared near here...",
						"japanese": "この近くで誰かが消えたという噂があったが…",
						"chinese": "曾有传言说，附近有人消失了……",
						"french": "Il y avait des rumeurs de disparitions par ici...",
						"spanish": "Había rumores de que alguien desapareció por aquí...",
						"vietnamese": "Có tin đồn rằng ai đó đã biến mất gần đây...",
						"thai": "มีข่าวลือว่ามีคนหายไปแถวนี้...",
						"hindi": "अफवाह थी कि कोई यहाँ पास से गायब हो गया था..."
					},
					"type": "speech"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "몇몇 부족이, 이 오아시스에 매혹되어 접근했다가…",
						"english": "Some tribes, enchanted by this oasis, approached it, and...",
						"japanese": "いくつかの部族が、このオアシスに魅せられて近づき…",
						"chinese": "几个部落被这片绿洲吸引，靠近后……",
						"french": "Plusieurs tribus, fascinées par cette oasis, s'en sont approchées, et...",
						"spanish": "Algunas tribus, cautivadas por este oasis, se acercaron, y...",
						"vietnamese": "Một vài bộ lạc, bị ốc đảo này mê hoặc, đã tiếp cận và...",
						"thai": "ชนเผ่าบางกลุ่ม หลงใหลในโอเอซิสนี้ จึงเข้าใกล้ และ...",
						"hindi": "कुछ जनजातियाँ, इस मरूद्यान से मंत्रमुग्ध होकर, पास आईं और..."
					}
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "흔적조차 남기지 않고 사라졌습니다.",
						"english": "...disappeared without a trace.",
						"japanese": "痕跡すら残さず消えました。",
						"chinese": "……消失得无影无踪。",
						"french": "...ont disparu sans laisser de trace.",
						"spanish": "...desaparecieron sin dejar rastro.",
						"vietnamese": "...biến mất không để lại dấu vết.",
						"thai": "...หายไปโดยไม่ทิ้งร่องรอยไว้เลย",
						"hindi": "...बिना कोई निशान छोड़े गायब हो गए।"
					}
				},
				{
					"content": {
						"korean": "흔적조차 없이? 모래 폭풍도 아닌데?",
						"english": "Without a trace? Not even a sandstorm?",
						"japanese": "痕跡すらなく？砂嵐でもないのに？",
						"chinese": "连痕迹都没有？也不是沙尘暴？",
						"french": "Sans laisser de trace ? Pas même une tempête de sable ?",
						"spanish": "¿Sin dejar rastro? ¿Y no fue una tormenta de arena?",
						"vietnamese": "Không để lại dấu vết ư? Mà không phải bão cát?",
						"thai": "ไม่มีร่องรอยเลย? ไม่ใช่พายุทรายด้วย?",
						"hindi": "बिना किसी निशान के? और कोई रेत का तूफान भी नहीं था?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "완벽한 정화는… 모든 것을 지웁니다. 존재 자체를.",
						"english": "Perfect purification... erases everything. Existence itself.",
						"japanese": "完璧な浄化は…全てを消し去る。存在そのものを。",
						"chinese": "完美的净化…抹去一切。甚至存在本身。",
						"french": "Une purification parfaite... efface tout. L'existence même.",
						"spanish": "La purificación perfecta... borra todo. La existencia misma.",
						"vietnamese": "Thanh tẩy hoàn hảo… xóa sạch mọi thứ. Ngay cả sự tồn tại.",
						"thai": "การทำให้บริสุทธิ์ที่สมบูรณ์แบบ... ลบทุกสิ่ง แม้กระทั่งการดำรงอยู่.",
						"hindi": "पूर्ण शुद्धि... सब कुछ मिटा देती है। अस्तित्व को भी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 오아시스, 뭔가 이상해.",
						"english": "This oasis, something's off.",
						"japanese": "このオアシス、何かがおかしい。",
						"chinese": "这个绿洲，有些不对劲。",
						"french": "Cet oasis, quelque chose cloche.",
						"spanish": "Este oasis, algo anda mal.",
						"vietnamese": "Ốc đảo này, có gì đó không ổn.",
						"thai": "โอเอซิสนี้, มีบางอย่างผิดปกติ.",
						"hindi": "यह नखलिस्तान, कुछ अजीब है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "마음이… 불안해져. 너무 조용해서 더 무서워.",
						"english": "My heart... it's uneasy. The silence makes it even scarier.",
						"japanese": "心が…不安になる。静かすぎて、余計に怖い。",
						"chinese": "心里…不安起来。太安静了，反而更可怕。",
						"french": "Mon cœur... est inquiet. Ce silence est encore plus effrayant.",
						"spanish": "Mi corazón... se inquieta. El silencio lo hace aún más aterrador.",
						"vietnamese": "Lòng tôi… bất an. Quá yên tĩnh càng đáng sợ hơn.",
						"thai": "หัวใจของฉัน... กระสับกระส่าย ความเงียบทำให้มันน่ากลัวยิ่งขึ้น.",
						"hindi": "मेरा मन... बेचैन है। इतनी खामोशी और भी डरावनी है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "돌아가야 합니다! 이대로는…!",
						"english": "We must go back! Not like this...!",
						"japanese": "戻らなければ！このままでは…！",
						"chinese": "我们必须回去！再这样下去…！",
						"french": "Nous devons y retourner ! Pas comme ça… !",
						"spanish": "¡Tenemos que volver! ¡Así no podemos…!",
						"vietnamese": "Chúng ta phải quay lại! Cứ thế này thì…!",
						"thai": "เราต้องกลับไป! ไม่ใช่แบบนี้...!",
						"hindi": "हमें वापस जाना होगा! ऐसे नहीं…!"
					},
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우린 멈출 수 없어. 이 미스터리를 풀어야 해.",
						"english": "We can't stop. We have to solve this mystery.",
						"japanese": "私たちは止まれない。この謎を解き明かさなければ。",
						"chinese": "我们不能停下。必须解开这个谜团。",
						"french": "Nous ne pouvons pas nous arrêter. Nous devons résoudre ce mystère.",
						"spanish": "No podemos detenernos. Debemos resolver este misterio.",
						"vietnamese": "Chúng ta không thể dừng lại. Phải giải mã bí ẩn này.",
						"thai": "เราหยุดไม่ได้ เราต้องไขปริศนานี้.",
						"hindi": "हम रुक नहीं सकते। हमें इस रहस्य को सुलझाना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "겨우… 이 정도 불완전함에…",
						"english": "Such... mere imperfection...",
						"japanese": "たかが…この程度の不完全さで…",
						"chinese": "仅仅…这种程度的不完美…",
						"french": "Juste... cette imperfection...",
						"spanish": "Con tan... solo esta imperfección...",
						"vietnamese": "Chỉ là… sự không hoàn hảo này…",
						"thai": "แค่…ความไม่สมบูรณ์แบบแค่นี้…",
						"hindi": "बस… इतनी सी अपूर्णता से…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…완벽이 무너질 리 없어.",
						"english": "...perfection would never crumble.",
						"japanese": "…完璧が崩れるはずがない。",
						"chinese": "…完美绝不会崩塌。",
						"french": "...la perfection ne s'effondrera jamais.",
						"spanish": "...la perfección jamás se desmoronaría.",
						"vietnamese": "…sự hoàn hảo sẽ không bao giờ sụp đổ.",
						"thai": "…ความสมบูรณ์แบบไม่มีทางพังทลาย",
						"hindi": "…पूर्णता कभी नहीं टूटेगी।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아닐 거라고?",
						"english": "This isn't the end, is it?",
						"japanese": "これが終わりじゃないって？",
						"chinese": "这不是结束，对吗？",
						"french": "Ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "¿Esto no es el final, verdad?",
						"vietnamese": "Đây không phải là kết thúc, phải không?",
						"thai": "นี่ไม่ใช่จุดจบใช่ไหม?",
						"hindi": "यह अंत नहीं है, है ना?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라는 경고… 어둠은 또 다른 형태로 다가올 것입니다.",
						"english": "A warning that it's not the end... Darkness will approach in another form.",
						"japanese": "終わりではないという警告… 闇はまた別の形で訪れるだろう。",
						"chinese": "这不是结束的警告… 黑暗将以另一种形式降临。",
						"french": "Un avertissement que ce n'est pas la fin... L'obscurité approchera sous une autre forme.",
						"spanish": "Una advertencia de que no es el final... La oscuridad se acercará de otra forma.",
						"vietnamese": "Một lời cảnh báo rằng đây chưa phải là kết thúc… Bóng tối sẽ đến dưới một hình thức khác.",
						"thai": "คำเตือนว่ามันยังไม่จบ… ความมืดจะกลับมาในอีกรูปแบบหนึ่ง",
						"hindi": "यह अंत नहीं है इसकी चेतावनी… अंधेरा एक और रूप में आएगा।"
					}
				},
				{
					"content": {
						"korean": "빛나는 오아시스의 유혹은 끝났지만, 사막의 '완벽함'은 아직 그 속내를 다 드러내지 않았다.",
						"english": "The allure of the shining oasis is over, but the desert's \"perfection\" has yet to reveal its true nature.",
						"japanese": "輝くオアシスの誘惑は終わったが、砂漠の「完璧さ」はまだその本性をすべて現していない。",
						"chinese": "闪耀绿洲的诱惑已逝，但沙漠的“完美”尚未完全显露其真面目。",
						"french": "La séduction de l'oasis brillante est terminée, mais la \"perfection\" du désert n'a pas encore révélé sa vraie nature.",
						"spanish": "La tentación del oasis brillante ha terminado, pero la \"perfección\" del desierto aún no ha revelado su verdadera naturaleza.",
						"vietnamese": "Sự cám dỗ của ốc đảo lấp lánh đã kết thúc, nhưng \"sự hoàn hảo\" của sa mạc vẫn chưa bộc lộ hết bản chất của nó.",
						"thai": "การล่อลวงของโอเอซิสที่ส่องประกายได้สิ้นสุดลงแล้ว แต่ \"ความสมบูรณ์แบบ\" ของทะเลทรายยังไม่ได้เผยโฉมที่แท้จริงออกมาทั้งหมด",
						"hindi": "चमकते नखलिस्तान का आकर्षण खत्म हो गया है, लेकिन रेगिस्तान की \"पूर्णता\" ने अभी तक अपनी असली प्रकृति का खुलासा नहीं किया है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "다음 여정은, 사라진 흔적을 쫓는 미스터리 속으로 이어질 것이다.",
						"english": "The next journey will lead into a mystery, chasing vanished traces.",
						"japanese": "次の旅は、消えた痕跡を追うミステリーへと続く。",
						"chinese": "下一段旅程将进入一个追寻消失痕迹的谜团之中。",
						"french": "La prochaine étape mènera à un mystère, à la poursuite de traces disparues.",
						"spanish": "El próximo viaje nos llevará a un misterio, persiguiendo rastros desvanecidos.",
						"vietnamese": "Cuộc hành trình tiếp theo sẽ dẫn vào một bí ẩn, theo dấu vết đã biến mất.",
						"thai": "การเดินทางครั้งต่อไปจะนำไปสู่ความลึกลับ ตามร่องรอยที่หายไป",
						"hindi": "अगली यात्रा, गायब हुए निशानों का पीछा करते हुए, एक रहस्य में ले जाएगी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희는… 너무 더럽다.",
						"english": "You are... too defiled.",
						"japanese": "お前たちは…あまりにも汚れている。",
						"chinese": "你们…太肮脏了。",
						"french": "Vous êtes... trop souillés.",
						"spanish": "Ustedes... están demasiado sucios.",
						"vietnamese": "Các ngươi… quá dơ bẩn.",
						"thai": "พวกเจ้า…สกปรกเกินไป",
						"hindi": "तुम लोग… बहुत गंदे हो।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "완벽해질 때까지… 사라져라.",
						"english": "Vanish... until you are perfect.",
						"japanese": "完璧になるまで…消え失せろ。",
						"chinese": "直到完美…消失吧。",
						"french": "Disparaissez... jusqu'à ce que vous soyez parfaits.",
						"spanish": "Desaparezcan... hasta que sean perfectos.",
						"vietnamese": "Biến mất đi… cho đến khi các ngươi hoàn hảo.",
						"thai": "จงหายไป…จนกว่าจะสมบูรณ์แบบ",
						"hindi": "जब तक तुम सिद्ध न हो जाओ… गायब हो जाओ।"
					}
				},
				{
					"content": {
						"korean": "다시 돌아올 거야!",
						"english": "I'll be back!",
						"japanese": "また戻ってくる！",
						"chinese": "我会回来的！",
						"french": "Je reviendrai !",
						"spanish": "¡Volveré!",
						"vietnamese": "Ta sẽ quay lại!",
						"thai": "ฉันจะกลับมา!",
						"hindi": "मैं वापस आऊंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자들이 감히 완벽함을 더럽히려 하는가?",
						"english": "Do intruders dare defile perfection?",
						"japanese": "侵入者どもが、完璧を汚そうと企むのか？",
						"chinese": "入侵者竟敢玷污完美？",
						"french": "Les intrus osent-ils souiller la perfection ?",
						"spanish": "¿Se atreven los intrusos a profanar la perfección?",
						"vietnamese": "Những kẻ xâm nhập dám làm ô uế sự hoàn hảo sao?",
						"thai": "ผู้บุกรุกกล้าที่จะทำให้ความสมบูรณ์แบบแปดเปื้อนหรือ?",
						"hindi": "क्या घुसपैठिए पूर्णता को अपवित्र करने की हिम्मत करते हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 오아시스를 이렇게 만든 거야?",
						"english": "Did you make this oasis like this?",
						"japanese": "お前がこのオアシスをこんな風にしたのか？",
						"chinese": "是你把这个绿洲变成这样的吗？",
						"french": "Est-ce toi qui as rendu cet oasis ainsi ?",
						"spanish": "¿Fuiste tú quien convirtió este oasis en esto?",
						"vietnamese": "Ngươi đã biến ốc đảo này thành ra thế này sao?",
						"thai": "คุณทำให้โอเอซิสนี้เป็นแบบนี้หรือ?",
						"hindi": "क्या तुमने इस नखलिस्तान को ऐसा बना दिया?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 그저… 정화할 뿐. 모든 불순물을.",
						"english": "I merely... purify. All impurities.",
						"japanese": "私はただ…浄化するだけ。全ての不純物を。",
						"chinese": "我只是…净化。所有不纯之物。",
						"french": "Je ne fais que... purifier. Toutes les impuretés.",
						"spanish": "Yo solo... purifico. Todas las impurezas.",
						"vietnamese": "Ta chỉ… thanh tẩy. Tất cả tạp chất.",
						"thai": "ฉันแค่... ทำให้บริสุทธิ์ สิ่งสกปรกทั้งหมด.",
						"hindi": "मैं बस... शुद्ध करता हूँ। सभी अशुद्धियों को।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불순물? 우리가?",
						"english": "Impurities? Us?",
						"japanese": "不純物？私たちが？",
						"chinese": "不纯之物？我们吗？",
						"french": "Des impuretés ? Nous ?",
						"spanish": "¿Impurezas? ¿Nosotros?",
						"vietnamese": "Tạp chất? Chúng ta ư?",
						"thai": "สิ่งสกปรก? พวกเราหรือ?",
						"hindi": "अशुद्धियाँ? हम?"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "그래. 너희의 불완전함이… 나를 더럽힌다.",
						"english": "Yes. Your imperfection... defiles me.",
						"japanese": "そうだ。お前たちの不完全さが…私を汚す。",
						"chinese": "是的。你们的不完美…玷污了我。",
						"french": "Oui. Votre imperfection... me souille.",
						"spanish": "Sí. Vuestra imperfección... me profana.",
						"vietnamese": "Đúng vậy. Sự không hoàn hảo của các ngươi… làm ô uế ta.",
						"thai": "ใช่ ความไม่สมบูรณ์แบบของพวกเจ้า... ทำให้ฉันแปดเปื้อน.",
						"hindi": "हाँ। तुम्हारी अपूर्णता... मुझे अपवित्र करती है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼!",
						"english": "No way!",
						"japanese": "まさか！",
						"chinese": "不可能！",
						"french": "Impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "ไม่จริงน่า!",
						"hindi": "नामुमकिन!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황량한 사막, 끝없는 모래바람.",
			"신기루 같던 오아시스가 눈앞에 나타났다.",
			"너무 완벽하게, 너무 고요하게 빛나는.",
			"그 이질적인 아름다움은, 침묵하는 비명 같았다."
		],
		"english": [
			"Desolate desert, endless sandstorms.",
			"An oasis, like a mirage, appeared before my eyes.",
			"Shining too perfectly, too serenely.",
			"Its alien beauty was like a silent scream."
		],
		"japanese": [
			"荒涼たる砂漠、終わりなき砂嵐。",
			"蜃気楼のようなオアシスが目の前に現れた。",
			"あまりにも完璧に、あまりにも静かに輝く。",
			"その異質な美しさは、沈黙の叫びのようだった。"
		],
		"chinese": [
			"荒凉的沙漠，无尽的沙尘暴。",
			"海市蜃楼般的绿洲出现在眼前。",
			"如此完美，如此宁静地闪耀着。",
			"那异样的美丽，如同无声的尖叫。"
		],
		"french": [
			"Désert désolé, tempêtes de sable infinies.",
			"Une oasis, tel un mirage, apparut sous mes yeux.",
			"Brillante avec trop de perfection, trop de sérénité.",
			"Sa beauté étrange était comme un cri silencieux."
		],
		"spanish": [
			"Desierto desolado, tormentas de arena interminables.",
			"Un oasis, como un espejismo, apareció ante mis ojos.",
			"Brillando con demasiada perfección, con demasiada serenidad.",
			"Su belleza extraña era como un grito silencioso."
		],
		"vietnamese": [
			"Sa mạc hoang vắng, bão cát không ngừng.",
			"Một ốc đảo, như ảo ảnh, hiện ra trước mắt.",
			"Tỏa sáng quá hoàn hảo, quá tĩnh lặng.",
			"Vẻ đẹp dị thường đó, giống như một tiếng hét câm lặng."
		],
		"thai": [
			"ทะเลทรายอันว่างเปล่า, พายุทรายไม่สิ้นสุด.",
			"โอเอซิส, ราวกับภาพลวงตา, ปรากฏขึ้นตรงหน้า.",
			"ส่องแสงอย่างสมบูรณ์แบบเกินไป, อย่างสงบเงียบเกินไป.",
			"ความงามแปลกประหลาดนั้น, เหมือนเสียงกรีดร้องที่เงียบงัน."
		],
		"hindi": [
			"उजाड़ रेगिस्तान, अंतहीन रेतीले तूफान।",
			"एक मृगतृष्णा जैसा नखलिस्तान मेरी आँखों के सामने आ गया।",
			"इतनी पूर्णता से, इतनी शांति से चमक रहा था।",
			"उसकी अजीबोगरीब सुंदरता एक खामोश चीख जैसी थी।"
		]
	}
} as const;
