export const scenario_forest_luminaflutter_35_02 = {
	"scenario_id": "forest_luminaflutter_35_02",
	"order": 2,
	"act": "rising",
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 화려한 빛깔의 환영들이 아른거렸다.",
						"english": "The forest deepened. Vivid illusions shimmered.",
						"japanese": "森はさらに深まった。鮮やかな色の幻影が揺らめいた。",
						"chinese": "森林更深了。绚丽的幻象闪烁不定。",
						"french": "La forêt s'épaississait. Des illusions aux couleurs vives scintillaient.",
						"spanish": "El bosque se hizo más profundo. Ilusiones de colores vivos parpadeaban.",
						"vietnamese": "Rừng càng sâu. Những ảo ảnh rực rỡ lấp lánh.",
						"thai": "ป่าลึกเข้าไปอีก ภาพลวงตาหลากสีสันพร่ามัว",
						"hindi": "जंगल और गहरा हो गया। चमकीले रंग के भ्रम टिमटिमा रहे थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 뭔가 지나간 것 같은데.",
						"english": "Something just passed by...",
						"japanese": "今…何かが通り過ぎたような。",
						"chinese": "刚才……好像有什么东西过去了。",
						"french": "Quelque chose vient de passer, il me semble.",
						"spanish": "Algo acaba de pasar...",
						"vietnamese": "Vừa rồi… hình như có gì đó đi qua.",
						"thai": "เมื่อกี้... เหมือนมีอะไรบางอย่างผ่านไป",
						"hindi": "अभी-अभी... कुछ गुजरा है, ऐसा लगता है।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐읍… 흐읍… 여긴… 원래 이렇지 않았어.",
						"english": "Hmph... Hmph... This place... It wasn't like this before.",
						"japanese": "はぁ…はぁ…ここは…元々こんなじゃなかった。",
						"chinese": "呼……呼……这里……以前不是这样的。",
						"french": "Hmph... Hmph... Cet endroit... Il n'était pas comme ça avant.",
						"spanish": "Uf... Uf... Este lugar... No era así antes.",
						"vietnamese": "Hức... Hức... Chỗ này... Ban đầu không như vậy.",
						"thai": "เฮือก... เฮือก... ที่นี่... แต่ก่อนไม่เป็นแบบนี้",
						"hindi": "हुंह... हुंह... यह जगह... पहले ऐसी नहीं थी।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은 누구시죠? 여기서 뭘 하고 있나요?",
						"english": "Who are you? What are you doing here?",
						"japanese": "あなたは誰ですか？ここで何をしていますか？",
						"chinese": "你 是谁？在这里做什么？",
						"french": "Qui êtes-vous ? Que faites-vous ici ?",
						"spanish": "¿Quién es usted? ¿Qué hace aquí?",
						"vietnamese": "Ông/bà là ai? Đang làm gì ở đây?",
						"thai": "คุณคือใคร? มาทำอะไรที่นี่?",
						"hindi": "आप कौन हैं? यहाँ क्या कर रहे हैं?"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "난 브라켄… 약초를 캐는 사람인데… 며칠 전부터 숲이 이상해.",
						"english": "I'm Bracken... an herb gatherer... The forest has been strange for days.",
						"japanese": "私はブラッケン…薬草採りです…数日前から森がおかしい。",
						"chinese": "我 是布拉肯……一个采药人……几天前开始森林就很奇怪。",
						"french": "Je suis Bracken… un herboriste… La forêt est étrange depuis quelques jours.",
						"spanish": "Soy Bracken... un recolector de hierbas... El bosque ha estado extraño desde hace días.",
						"vietnamese": "Tôi là Bracken... một người hái thuốc... Rừng đã lạ lùng mấy ngày nay rồi.",
						"thai": "ฉันชื่อแบร็คเคน... คนเก็บสมุนไพร... ป่ามันแปลกไปตั้งแต่เมื่อหลายวันก่อนแล้ว",
						"hindi": "मैं ब्रैकेन हूँ... एक जड़ी-बूटी इकट्ठा करने वाला... जंगल कई दिनों से अजीब है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"content": {
						"korean": "자꾸… 환영이 보여. 진짜인지 가짜인지 모르겠어.",
						"english": "I keep... seeing illusions. I don't know if they're real or fake.",
						"japanese": "度々…幻影が見える。本物か偽物か分からない。",
						"chinese": "我总是……看到幻象。分不清是真是假。",
						"french": "Je continue… à voir des illusions. Je ne sais pas si elles sont réelles ou fausses.",
						"spanish": "Sigo... viendo ilusiones. No sé si son reales o falsas.",
						"vietnamese": "Tôi cứ... thấy ảo ảnh. Không biết là thật hay giả nữa.",
						"thai": "ฉันเห็น... ภาพลวงตาอยู่เรื่อยๆ ไม่รู้ว่าจริงหรือปลอม",
						"hindi": "मुझे बार-बार... भ्रम दिखते हैं। मुझे नहीं पता कि वे असली हैं या नकली।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "또… 또 저거 보여? 저 빛… 날 따라오는 것 같지 않아?",
						"english": "Again... Do you see that again? That light... Doesn't it seem to be following me?",
						"japanese": "また… またあれが見える？ あの光… 私を追いかけているように見えない？",
						"chinese": "又… 又看到那个了吗？那束光… 它是不是在跟着我？",
						"french": "Encore... Tu le revois ? Cette lumière... On dirait qu'elle me suit, non ?",
						"spanish": "¿Otra vez...? ¿Ves eso de nuevo? Esa luz... ¿No crees que me está siguiendo?",
						"vietnamese": "Lại… lại thấy nó nữa rồi? Ánh sáng đó… không phải nó đang theo dõi tôi sao?",
						"thai": "อีกแล้ว... คุณเห็นมันอีกแล้วเหรอ? แสงนั่น... ไม่เหมือนมันกำลังตามฉันอยู่เหรอ?",
						"hindi": "फिर... फिर से वो दिख रहा है? वो रोशनी... क्या वो मेरा पीछा नहीं कर रही?"
					}
				},
				{
					"content": {
						"korean": "아무것도 안 보이는데요?",
						"english": "I don't see anything.",
						"japanese": "何も見えませんけど？",
						"chinese": "我什么都没看到啊？",
						"french": "Je ne vois rien.",
						"spanish": "No veo nada.",
						"vietnamese": "Tôi không thấy gì cả.",
						"thai": "ฉันไม่เห็นอะไรเลยนี่?",
						"hindi": "मुझे कुछ नहीं दिख रहा है।"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "아니야! 분명히 있었어! 방금… 내 옆을 스쳐 지나갔다고!",
						"english": "No! It was definitely there! Just now... it brushed past me!",
						"japanese": "違う！確かにあった！今… 私のそばを通り過ぎたんだ！",
						"chinese": "不！它明明就在那儿！刚才… 它擦着我的身边过去了！",
						"french": "Non ! C'était bien là ! Tout à l'heure... ça m'a frôlé !",
						"spanish": "¡No! ¡Definitivamente estaba ahí! ¡Justo ahora... pasó rozándome!",
						"vietnamese": "Không! Chắc chắn là có! Vừa rồi… nó lướt qua bên cạnh tôi!",
						"thai": "ไม่ใช่! มันอยู่ตรงนั้นแน่! เมื่อกี้... มันเฉียดข้างฉันไปเลย!",
						"hindi": "नहीं! वो पक्का वहीं था! अभी-अभी... मेरे बगल से होकर गुजरा!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "숲이 당신을 놀리는 것 같네요.",
						"english": "The forest seems to be toying with you.",
						"japanese": "森があなたをからかっているようですね。",
						"chinese": "森林好像在捉弄你呢。",
						"french": "La forêt semble se moquer de vous.",
						"spanish": "Parece que el bosque se está burlando de ti.",
						"vietnamese": "Có vẻ khu rừng đang trêu chọc bạn.",
						"thai": "ดูเหมือนป่ากำลังแกล้งคุณอยู่เลยนะ.",
						"hindi": "लगता है जंगल आपको चिढ़ा रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "놀리는 게 아니야… 숲이… 우리를 삼키려고 해.",
						"english": "It's not toying... The forest... it's trying to swallow us.",
						"japanese": "からかっているんじゃない… 森が… 私たちを飲み込もうとしているんだ。",
						"chinese": "不是捉弄… 森林… 它想吞噬我们。",
						"french": "Ce n'est pas une moquerie... La forêt... elle essaie de nous engloutir.",
						"spanish": "No se está burlando... El bosque... está intentando tragarnos.",
						"vietnamese": "Không phải trêu chọc… Khu rừng… nó đang muốn nuốt chửng chúng ta.",
						"thai": "มันไม่ใช่การแกล้งหรอก... ป่ากำลัง... จะกลืนกินพวกเรา.",
						"hindi": "ये चिढ़ा नहीं रहा... जंगल... हमें निगलने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여긴… 내가 어릴 때 뛰어놀던 곳인데… 전부 바뀌었어.",
						"english": "This place... it's where I used to play as a child... everything's changed.",
						"japanese": "ここは… 私が子供の頃に駆け回っていた場所なのに… 全部変わってしまった。",
						"chinese": "这里… 是我小时候玩耍的地方… 全都变了。",
						"french": "Ici... c'est là où je jouais quand j'étais enfant... tout a changé.",
						"spanish": "Aquí... es donde solía jugar de niño... todo ha cambiado.",
						"vietnamese": "Nơi này… là nơi tôi từng vui chơi hồi nhỏ… tất cả đã thay đổi rồi.",
						"thai": "ที่นี่... คือที่ที่ฉันเคยวิ่งเล่นตอนเด็ก... ทุกอย่างเปลี่ยนไปหมดแล้ว.",
						"hindi": "ये जगह... जहाँ मैं बचपन में खेला करता था... सब कुछ बदल गया है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환영 때문에 혼란스러우신가 봐요.",
						"english": "You seem confused by illusions.",
						"japanese": "幻覚のせいで混乱されているようですね。",
						"chinese": "您好像被幻象迷惑了。",
						"french": "Vous semblez être troublé par des illusions.",
						"spanish": "Parece que las ilusiones te están confundiendo.",
						"vietnamese": "Có vẻ bạn đang bối rối vì ảo ảnh.",
						"thai": "คุณคงสับสนเพราะภาพหลอนสินะ.",
						"hindi": "लगता है आप भ्रम के कारण भ्रमित हैं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "아니야… 이건 단순한 환상이 아니야. 너무… 너무 생생해.",
						"english": "No... This isn't just a simple illusion. It's too... too vivid.",
						"japanese": "違う… これは単なる幻じゃない。あまりにも… あまりにも鮮明だ。",
						"chinese": "不… 这不是简单的幻觉。太… 太真实了。",
						"french": "Non... Ce n'est pas une simple illusion. C'est trop... trop vivant.",
						"spanish": "No... Esto no es una simple ilusión. Es demasiado... demasiado vívido.",
						"vietnamese": "Không… Đây không phải là ảo ảnh đơn thuần. Nó quá… quá sống động.",
						"thai": "ไม่หรอก... นี่ไม่ใช่แค่ภาพลวงตาธรรมดา. มัน... มันสมจริงเกินไป.",
						"hindi": "नहीं... ये सिर्फ एक भ्रम नहीं है। ये बहुत... बहुत जीवंत है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "마치… 다른 세상이 여기 투영되는 것 같아.",
						"english": "It's as if... another world is being projected here.",
						"japanese": "まるで… 別の世界がここに投影されているようだ。",
						"chinese": "就像… 另一个世界被投射到这里一样。",
						"french": "C'est comme si... un autre monde se projetait ici.",
						"spanish": "Es como si... otro mundo se estuviera proyectando aquí.",
						"vietnamese": "Cứ như… một thế giới khác đang được chiếu rọi vào đây vậy.",
						"thai": "เหมือนกับว่า... โลกอื่นกำลังฉายภาพมาที่นี่เลย.",
						"hindi": "जैसे कि... कोई और दुनिया यहाँ प्रक्षेपित हो रही है।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "투영이라니… 그럼 우리가 보는 게 실제라는 건가요?",
						"english": "Projection... So what we're seeing is real?",
						"japanese": "投影だって… じゃあ、私たちが見ているのは現実だっていうの？",
						"chinese": "投射… 那我们看到的都是真的吗？",
						"french": "Projection... Alors ce que nous voyons est réel ?",
						"spanish": "¿Proyección...? Entonces, ¿lo que estamos viendo es real?",
						"vietnamese": "Chiếu rọi sao… Vậy là những gì chúng ta đang thấy là thật ư?",
						"thai": "การฉายภาพงั้นเหรอ... งั้นสิ่งที่เราเห็นนี่คือของจริงเหรอ?",
						"hindi": "प्रक्षेपण... तो क्या जो हम देख रहे हैं वो सच है?"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "모르겠어… 뭘 믿어야 할지… 이제 나도 내가 누군지 모르겠어….",
						"english": "I don't know... what to believe... Now I don't even know who I am anymore...",
						"japanese": "分からない…何を信じればいいのか…もう自分が誰なのかも分からない…。",
						"chinese": "我不知道…该相信什么…现在我甚至不知道我是谁了…。",
						"french": "Je ne sais pas… que croire… Maintenant, je ne sais même plus qui je suis…",
						"spanish": "No lo sé… qué creer… Ahora ni siquiera sé quién soy…",
						"vietnamese": "Tôi không biết… phải tin vào điều gì… Bây giờ tôi còn không biết mình là ai nữa…",
						"thai": "ฉันไม่รู้…ว่าจะเชื่ออะไรดี…ตอนนี้ฉันไม่รู้ด้วยซ้ำว่าฉันเป็นใครแล้ว…",
						"hindi": "मुझे नहीं पता… क्या मानना है… अब तो मुझे ये भी नहीं पता कि मैं कौन हूँ…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bracken",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "가면 안 돼… 더 깊이 들어가면… 돌아올 수 없어.",
						"english": "Don't go... If you go deeper... you can't come back.",
						"japanese": "行かないで…もっと深く行けば…戻って来られない。",
						"chinese": "别去…如果再深入…就回不来了。",
						"french": "N'y va pas… Si tu t'enfonces plus profondément… tu ne pourras plus revenir.",
						"spanish": "No vayas… Si te adentras más… no podrás volver.",
						"vietnamese": "Đừng đi… Nếu đi sâu hơn nữa… sẽ không thể quay lại đâu.",
						"thai": "อย่าไปนะ…ถ้าเข้าไปลึกกว่านี้…จะกลับมาไม่ได้แล้วนะ",
						"hindi": "मत जाओ… अगर तुम और गहरे गए… तो वापस नहीं आ पाओगे।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우린 진실을 찾아야 해요.",
						"english": "We must find the truth.",
						"japanese": "私たちは真実を見つけなければなりません。",
						"chinese": "我们必须找到真相。",
						"french": "Nous devons trouver la vérité.",
						"spanish": "Debemos encontrar la verdad.",
						"vietnamese": "Chúng ta phải tìm ra sự thật.",
						"thai": "เราต้องค้นหาความจริง",
						"hindi": "हमें सच ढूंढना होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실? 진실이… 뭔데? 보이는 게 진짜가 아니라면… 뭘 믿어야 해?",
						"english": "Truth? What is... truth? If what we see isn't real... what should we believe?",
						"japanese": "真実？真実って…何？見えているものが本当じゃないなら…何を信じればいいの？",
						"chinese": "真相？真相…是什么？如果眼前所见并非真实…那该相信什么？",
						"french": "La vérité ? Qu'est-ce que… la vérité ? Si ce que l'on voit n'est pas réel… que doit-on croire ?",
						"spanish": "¿Verdad? ¿Qué es… la verdad? Si lo que vemos no es real… ¿qué debemos creer?",
						"vietnamese": "Sự thật? Sự thật là… gì cơ? Nếu những gì nhìn thấy không phải là thật… thì phải tin vào điều gì?",
						"thai": "ความจริง? ความจริงคือ…อะไร? ถ้าสิ่งที่เห็นไม่ใช่เรื่องจริง…เราควรเชื่ออะไร?",
						"hindi": "सच? सच क्या है…? अगर जो दिख रहा है वो असली नहीं है… तो क्या मानना चाहिए?"
					},
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_4",
					"content": {
						"korean": "당신은… 여기서 뭘 기다리고 있는 거죠?",
						"english": "What are you... waiting for here?",
						"japanese": "あなたは…ここで何を待っているのですか？",
						"chinese": "你…在这里等什么？",
						"french": "Qu'attendez-vous… ici ?",
						"spanish": "¿Qué estás… esperando aquí?",
						"vietnamese": "Bạn… đang đợi điều gì ở đây vậy?",
						"thai": "คุณ…กำลังรออะไรอยู่ที่นี่?",
						"hindi": "तुम… यहाँ क्या इंतजार कर रहे हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "나도… 내가 뭘 기다리는지 모르겠어. 그냥… 너무 무서워…",
						"english": "I don't know… what I'm waiting for either. It's just… I'm so scared…",
						"japanese": "私も…何を待っているのか分からない。ただ…とても怖い…。",
						"chinese": "我也不知道…我在等什么。只是…太害怕了…。",
						"french": "Je ne sais pas non plus… ce que j'attends. C'est juste… j'ai tellement peur…",
						"spanish": "Yo tampoco… sé qué estoy esperando. Es solo que… tengo mucho miedo…",
						"vietnamese": "Tôi cũng… không biết mình đang đợi điều gì. Chỉ là… tôi quá sợ hãi…",
						"thai": "ฉันก็…ไม่รู้เหมือนกันว่ากำลังรออะไรอยู่ แค่…กลัวมากเลย…",
						"hindi": "मुझे भी… नहीं पता कि मैं क्या इंतजार कर रहा हूँ। बस… बहुत डर लग रहा है…"
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"direction": "down",
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라켄은 공포에 질려 뒤돌아 도망쳤다. 그 모습마저 환영처럼 희미했다.",
						"english": "Braken turned and fled in terror. Even his figure was faint, like a phantom.",
						"japanese": "ブラッケンは恐怖に駆られて振り返り、逃げ出した。その姿さえ幻影のように薄かった。",
						"chinese": "布拉肯惊恐地转身逃跑。他的身影也如幻影般模糊。",
						"french": "Braken tourna les talons et s'enfuit, terrifié. Même sa silhouette était floue, comme une illusion.",
						"spanish": "Braken se dio la vuelta y huyó aterrorizado. Incluso su figura era tenue, como una ilusión.",
						"vietnamese": "Braken kinh hoàng quay lưng bỏ chạy. Ngay cả bóng dáng của anh ta cũng mờ nhạt như một ảo ảnh.",
						"thai": "บราเคนหันหลังวิ่งหนีด้วยความหวาดกลัว แม้แต่ร่างของเขาก็เลือนลางราวกับภาพลวงตา",
						"hindi": "ब्रैकेन डर के मारे पीछे मुड़कर भाग गया। उसकी आकृति भी किसी भ्रम की तरह धुंधली थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…계속 가야 해.",
						"english": "...I have to keep going.",
						"japanese": "…進み続けなければ。",
						"chinese": "…必须继续前进。",
						"french": "…Je dois continuer.",
						"spanish": "…Tengo que seguir.",
						"vietnamese": "…Phải tiếp tục đi thôi.",
						"thai": "…ต้องไปต่อ",
						"hindi": "…मुझे आगे बढ़ते रहना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환상의 심연에 갇혔다. 보이는 모든 것이 혼란스러웠다.",
						"english": "Trapped in the abyss of illusion. Everything seen was disorienting.",
						"japanese": "幻覚の深淵に囚われた。見えるもの全てが混乱を招いた。",
						"chinese": "被困在幻象的深渊中。所见的一切都令人困惑。",
						"french": "Piégé dans l'abîme de l'illusion. Tout ce qui était visible était déroutant.",
						"spanish": "Atrapado en el abismo de la ilusión. Todo lo que se veía era desconcertante.",
						"vietnamese": "Bị mắc kẹt trong vực thẳm của ảo ảnh. Mọi thứ nhìn thấy đều hỗn loạn.",
						"thai": "ติดอยู่ในห้วงลึกของภาพลวงตา ทุกสิ่งที่เห็นล้วนสับสนวุ่นวาย",
						"hindi": "भ्रम के अथाह कुंड में फंस गया। जो कुछ भी दिखाई दे रहा था, वह भ्रामक था।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 현실은… 내가 정해주는 것이다…",
						"english": "Your reality... is what I dictate...",
						"japanese": "お前の現実は… 私が定めてやる…",
						"chinese": "你的现实… 由我来决定…",
						"french": "Ta réalité... c'est moi qui la dicte...",
						"spanish": "Tu realidad... es lo que yo dicto...",
						"vietnamese": "Thực tại của ngươi... là do ta định đoạt...",
						"thai": "ความเป็นจริงของเจ้า... ข้าจะเป็นผู้กำหนดมัน...",
						"hindi": "तुम्हारी वास्तविकता... मैं तय करूंगा..."
					}
				},
				{
					"content": {
						"korean": "아니야… 내가… 내가 진실을 밝혀낼 거야!",
						"english": "No... I... I will uncover the truth!",
						"japanese": "違う… 私が… 私が真実を暴いてやる！",
						"chinese": "不… 我… 我会揭露真相！",
						"french": "Non... Je... je découvrirai la vérité !",
						"spanish": "¡No... yo... yo descubriré la verdad!",
						"vietnamese": "Không... Ta... ta sẽ vén màn sự thật!",
						"thai": "ไม่... ข้า... ข้าจะเปิดเผยความจริง!",
						"hindi": "नहीं... मैं... मैं सच्चाई का पता लगाऊंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest part of the forest. A colossal shadow awaited the expedition team.",
						"japanese": "森の最も深い場所。巨大な影が探検隊を待ち受けていた。",
						"chinese": "森林最深处。一个巨大的影子正等待着探险队。",
						"french": "Le plus profond de la forêt. Une ombre colossale attendait l'équipe d'expédition.",
						"spanish": "La parte más profunda del bosque. Una sombra colosal esperaba al equipo de expedición.",
						"vietnamese": "Nơi sâu nhất của khu rừng. Một bóng đen khổng lồ đang chờ đợi đội thám hiểm.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมารอคอยคณะสำรวจอยู่",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशाल परछाईं अभियान दल का इंतजार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "환영이 진짜가 되는 곳… 여기가 너희의 무덤이다.",
						"english": "Where illusions become real... This is your grave.",
						"japanese": "幻影が現実となる場所…ここがお前たちの墓場だ。",
						"chinese": "幻象变为真实之处…这里就是你们的坟墓。",
						"french": "Là où les illusions deviennent réelles… Ceci est votre tombe.",
						"spanish": "Donde las ilusiones se hacen realidad… Esta es vuestra tumba.",
						"vietnamese": "Nơi ảo ảnh trở thành sự thật… Đây là mồ chôn của các ngươi.",
						"thai": "ที่ที่ภาพลวงตากลายเป็นความจริง…นี่คือหลุมศพของพวกเจ้า",
						"hindi": "जहाँ भ्रम सच हो जाते हैं… यह तुम्हारी कब्र है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "또 다른 환상일 뿐이야!",
						"english": "Just another illusion!",
						"japanese": "また幻想か！",
						"chinese": "这不过是又一个幻象！",
						"french": "Juste une autre illusion !",
						"spanish": "¡Es solo otra ilusión!",
						"vietnamese": "Chỉ là một ảo ảnh khác thôi!",
						"thai": "เป็นแค่ภาพลวงตาอีกอัน!",
						"hindi": "बस एक और भ्रम!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석군. 너희가 믿는 모든 것을 빼앗아 주마.",
						"english": "Foolish. I'll take everything you believe in.",
						"japanese": "愚かな。お前たちが信じるもの、全て奪ってやろう。",
						"chinese": "愚蠢。我会夺走你们所相信的一切。",
						"french": "Imbéciles. Je vous prendrai tout ce que vous croyez.",
						"spanish": "Estúpidos. Les arrebataré todo lo que creen.",
						"vietnamese": "Ngốc nghếch. Ta sẽ cướp đi tất cả những gì các ngươi tin tưởng.",
						"thai": "โง่เขลา ข้าจะพรากทุกสิ่งที่เจ้าเชื่อไปจากเจ้า",
						"hindi": "मूर्ख। मैं तुमसे वह सब छीन लूंगा जिस पर तुम विश्वास करते हो।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크으… 끝난 줄 아느냐… 이건… 시작일 뿐…",
						"english": "Hmph... You think it's over...? This... is just the beginning...",
						"japanese": "くっ… 終わったとでも？これは…始まりに過ぎぬ…",
						"chinese": "呵… 你们以为结束了吗… 这… 只是开始…",
						"french": "Hmph... Vous croyez que c'est fini... ? Ce n'est... que le début...",
						"spanish": "Hmph... ¿Crees que ha terminado...? Esto... es solo el principio...",
						"vietnamese": "Hừ... Ngươi nghĩ nó đã kết thúc sao...? Đây... chỉ là khởi đầu thôi...",
						"thai": "ฮึ่ม... เจ้าคิดว่ามันจบแล้วหรือ... นี่... เป็นแค่จุดเริ่มต้นเท่านั้น...",
						"hindi": "हूँ... क्या तुम्हें लगता है कि यह खत्म हो गया...? यह... तो बस शुरुआत है..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 본 환영은… 모두… 미래의 조각들…",
						"english": "The illusions you saw... they were all... fragments of the future...",
						"japanese": "お前たちが見た幻影は… 全て… 未来の断片…",
						"chinese": "你们所看到的幻象… 都… 是未来的碎片…",
						"french": "Les visions que vous avez vues... n'étaient que... des fragments du futur...",
						"spanish": "Las visiones que visteis... eran todas... fragmentos del futuro...",
						"vietnamese": "Những ảo ảnh mà các ngươi đã thấy... tất cả... đều là những mảnh ghép của tương lai...",
						"thai": "ภาพหลอนที่เจ้าเห็น... ทั้งหมด... คือเศษเสี้ยวของอนาคต...",
						"hindi": "जो भ्रम तुमने देखे... वे सब... भविष्य के अंश थे..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재는 스러졌다. 그러나 환상의 잔재는 탐험대의 마음에 깊이 남았다.",
						"english": "The unknown entity fell. But the remnants of the illusion lingered deep within the expedition team's minds.",
						"japanese": "正体不明の存在は消え去った。しかし、幻覚の残滓は探検隊の心に深く残った。",
						"chinese": "不明实体消散了。然而，幻象的残余深植于探险队的心中。",
						"french": "L'entité inconnue s'est effondrée. Mais les vestiges de l'illusion ont persisté au plus profond de l'esprit de l'équipe d'expédition.",
						"spanish": "La entidad desconocida cayó. Pero los restos de la ilusión permanecieron profundamente en las mentes del equipo de expedición.",
						"vietnamese": "Thực thể vô danh đã gục ngã. Nhưng tàn dư của ảo ảnh vẫn còn đọng lại sâu trong tâm trí đội thám hiểm.",
						"thai": "สิ่งมีชีวิตลึกลับได้ล้มตายลง แต่เศษเสี้ยวของภาพลวงตายังคงฝังลึกอยู่ในจิตใจของคณะสำรวจ",
						"hindi": "अज्ञात सत्ता गिर गई। लेकिन भ्रम के अवशेष अभियान दल के मन में गहरे तक रह गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "숲은 이제 생명체들을 재료로 삼아 기묘한 작품을 만들고 있었다. 다음 단계의 공포가 기다린다.",
						"english": "The forest was now using living beings as material to create bizarre artworks. The next phase of horror awaited.",
						"japanese": "森は今や、生命体を材料に奇妙な作品を作り出していた。次の段階の恐怖が待っている。",
						"chinese": "森林现在正以生物为材料，创造着诡异的艺术品。下一阶段的恐惧正在等待着。",
						"french": "La forêt utilisait désormais des êtres vivants comme matériaux pour créer des œuvres d'art étranges. La prochaine phase d'horreur attendait.",
						"spanish": "El bosque ahora estaba usando seres vivos como material para crear obras de arte bizarras. La siguiente fase de horror esperaba.",
						"vietnamese": "Rừng giờ đây đang dùng các sinh vật sống làm nguyên liệu để tạo ra những tác phẩm kỳ lạ. Giai đoạn kinh hoàng tiếp theo đang chờ đợi.",
						"thai": "ป่ากำลังใช้สิ่งมีชีวิตเป็นวัตถุดิบในการสร้างผลงานศิลปะแปลกประหลาด ความหวาดกลัวขั้นต่อไปกำลังรออยู่",
						"hindi": "जंगल अब जीवित प्राणियों को सामग्री के रूप में उपयोग करके अजीबोगरीब कलाकृतियाँ बना रहा था। डर का अगला चरण इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 변해 있었다. 아름다운 환영 속에 감춰진 진짜 얼굴.",
			"보이는 것이 전부가 아니었다. 믿었던 감각조차 왜곡되기 시작했다.",
			"심연으로 향하는 길목에서, 한 목격자가 속삭였다.",
			"“이건 꿈이 아니야… 아니, 꿈인가?”"
		],
		"english": [
			"The forest had changed. Its true face hidden beneath beautiful illusions.",
			"What was seen wasn't all. Even trusted senses began to distort.",
			"At the threshold of the abyss, a witness whispered.",
			"“This isn't a dream... Or is it?”"
		],
		"japanese": [
			"森は変わっていた。美しい幻影に隠された本当の顔。",
			"見えるものがすべてではなかった。信じていた感覚さえも歪み始めた。",
			"深淵へと続く道で、ある目撃者が囁いた。",
			"「これは夢じゃない…いや、夢なのか？」"
		],
		"chinese": [
			"森林变了。美丽幻象下隐藏的真实面貌。",
			"所见并非全部。连曾信任的感官都开始扭曲。",
			"在通往深渊的路上，一位目击者低语道。",
			"“这不是梦……不，是梦吗？”"
		],
		"french": [
			"La forêt avait changé. Son vrai visage caché sous de belles illusions.",
			"Ce qui était visible n'était pas tout. Même les sens auxquels on faisait confiance commençaient à se déformer.",
			"Au seuil de l'abîme, un témoin murmura.",
			"« Ce n'est pas un rêve… Ou est-ce un rêve ? »"
		],
		"spanish": [
			"El bosque había cambiado. Su verdadera faz oculta tras bellas ilusiones.",
			"Lo que se veía no era todo. Incluso los sentidos en los que confiaba empezaron a distorsionarse.",
			"En el umbral del abismo, un testigo susurró.",
			"¿Esto no es un sueño...? ¿O sí lo es?"
		],
		"vietnamese": [
			"Rừng đã thay đổi. Khuôn mặt thật ẩn sau những ảo ảnh đẹp đẽ.",
			"Những gì nhìn thấy không phải là tất cả. Ngay cả giác quan tin cậy cũng bắt đầu biến dạng.",
			"Tại ngưỡng cửa vực thẳm, một nhân chứng thì thầm.",
			"“Đây không phải là mơ... Hay là mơ thật?”"
		],
		"thai": [
			"ป่าเปลี่ยนไปแล้ว ใบหน้าแท้จริงซ่อนอยู่ใต้ภาพลวงตาอันงดงาม",
			"สิ่งที่เห็นไม่ใช่ทั้งหมด แม้แต่ประสาทสัมผัสที่เชื่อใจก็เริ่มบิดเบือน",
			"ที่ทางเข้าสู่ห้วงลึก พยานคนหนึ่งกระซิบ",
			"“นี่ไม่ใช่ความฝัน... หรือว่ามันคือความฝันกันแน่?”"
		],
		"hindi": [
			"जंगल बदल गया था। सुंदर भ्रमों के पीछे छिपा उसका असली चेहरा।",
			"जो दिख रहा था वह सब कुछ नहीं था। यहाँ तक कि विश्वसनीय इंद्रियाँ भी विकृत होने लगी थीं।",
			"अतल गहराइयों की ओर जाते रास्ते में, एक गवाह ने फुसफुसाया।",
			"“यह कोई सपना नहीं है... नहीं, क्या यह सपना है?”"
		]
	}
} as const;
