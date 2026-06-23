export const scenario_desert_sandstitch_2_01 = {
	"scenario_id": "desert_sandstitch_2_01",
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
					"type": "speech",
					"content": {
						"korean": "끝없이 변하는 모래 언덕. 방향을 잃었다.",
						"english": "Endless shifting dunes. Lost my way.",
						"japanese": "絶え間なく変わる砂丘。道に迷った。",
						"chinese": "无尽变幻的沙丘。迷失了方向。",
						"french": "Dunes changeantes infinies. J'ai perdu mon chemin.",
						"spanish": "Dunas cambiantes sin fin. He perdido el rumbo.",
						"vietnamese": "Cồn cát biến đổi không ngừng. Đã lạc lối.",
						"thai": "เนินทรายที่เปลี่ยนแปลงไม่สิ้นสุด หลงทางแล้ว",
						"hindi": "अंतहीन बदलती रेत के टीले। रास्ता भटक गया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여긴… 대체 어디지?",
						"english": "Where... am I?",
						"japanese": "ここは…いったいどこだ？",
						"chinese": "这里…到底是哪里？",
						"french": "Où suis-je… au juste ?",
						"spanish": "¿Dónde… estoy exactamente?",
						"vietnamese": "Đây… rốt cuộc là đâu?",
						"thai": "ที่นี่… ที่ไหนกันแน่?",
						"hindi": "यह… आखिर कहाँ है?"
					}
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "왔군. 예상대로.",
						"english": "You're here. As expected.",
						"japanese": "来たか。予想通りだ。",
						"chinese": "来了。不出所料。",
						"french": "Vous êtes là. Comme prévu.",
						"spanish": "Has llegado. Como esperaba.",
						"vietnamese": "Ngươi đã đến. Đúng như dự đoán.",
						"thai": "มาแล้วสินะ สมกับที่คาดไว้",
						"hindi": "तुम आ गए। जैसा कि अपेक्षित था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Qui êtes-vous… ?",
						"spanish": "¿Usted es…?",
						"vietnamese": "Ngươi là…?",
						"thai": "ท่านคือ…?",
						"hindi": "तुम कौन हो…?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "아미르. 이 사막의 길을 아는 자.",
						"english": "Amir. One who knows the paths of this desert.",
						"japanese": "アミール。この砂漠の道を知る者だ。",
						"chinese": "阿米尔。知晓这片沙漠之路的人。",
						"french": "Amir. Celui qui connaît les chemins de ce désert.",
						"spanish": "Amir. El que conoce los caminos de este desierto.",
						"vietnamese": "Amir. Kẻ biết những con đường của sa mạc này.",
						"thai": "อามีร์ ผู้ที่รู้เส้นทางของทะเลทรายแห่งนี้",
						"hindi": "अमीर। जो इस रेगिस्तान के रास्ते जानता है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "…이상한 소문 들었나? 고독한 검사에 대한.",
						"english": "Heard a strange rumor? About the lone swordsman.",
						"japanese": "奇妙な噂を聞いたか？孤独な剣士についての。",
						"chinese": "你听说过奇怪的传闻吗？关于那个孤独的剑士。",
						"french": "Tu as entendu une étrange rumeur ? À propos du bretteur solitaire.",
						"spanish": "¿Escuchaste un rumor extraño? Sobre el espadachín solitario.",
						"vietnamese": "Nghe tin đồn lạ chưa? Về kiếm sĩ cô độc ấy.",
						"thai": "ได้ยินข่าวลือแปลกๆ ไหม? เกี่ยวกับนักดาบผู้โดดเดี่ยวคนนั้น",
						"hindi": "क्या तुमने कोई अजीब अफवाह सुनी? उस अकेले तलवारबाज़ के बारे में।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "소문? 어떤 소문인데.",
						"english": "Rumor? What kind?",
						"japanese": "噂？どんな噂だ？",
						"chinese": "传闻？什么传闻？",
						"french": "Rumeur ? Quelle sorte ?",
						"spanish": "¿Rumor? ¿Qué clase?",
						"vietnamese": "Tin đồn? Tin đồn gì?",
						"thai": "ข่าวลือ? ข่าวลือแบบไหนกัน",
						"hindi": "अफवाह? कैसी अफवाह?"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 사막, 모든 게 연극이야.",
						"english": "This desert, it's all a play.",
						"japanese": "この砂漠、すべてが芝居だ。",
						"chinese": "这片沙漠，一切都是一场戏。",
						"french": "Ce désert, tout est une pièce de théâtre.",
						"spanish": "Este desierto, todo es una obra.",
						"vietnamese": "Sa mạc này, tất cả chỉ là một vở kịch.",
						"thai": "ทะเลทรายแห่งนี้ ทุกสิ่งล้วนเป็นละคร",
						"hindi": "यह रेगिस्तान, सब एक नाटक है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "연극?",
						"english": "A play?",
						"japanese": "芝居だと？",
						"chinese": "一场戏？",
						"french": "Une pièce de théâtre ?",
						"spanish": "¿Una obra?",
						"vietnamese": "Một vở kịch ư?",
						"thai": "ละคร?",
						"hindi": "एक नाटक?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "고독한 검사, 그도 대본을 따르는 배우일 뿐.",
						"english": "The lone swordsman, he's just an actor following a script.",
						"japanese": "孤独な剣士も、台本通りの役者に過ぎない。",
						"chinese": "那个孤独的剑士，他也不过是个按剧本行事的演员。",
						"french": "Le bretteur solitaire, il n'est qu'un acteur suivant un script.",
						"spanish": "El espadachín solitario, él es solo un actor siguiendo un guion.",
						"vietnamese": "Kiếm sĩ cô độc ấy, cũng chỉ là một diễn viên theo kịch bản.",
						"thai": "นักดาบผู้โดดเดี่ยว เขาก็แค่เป็นนักแสดงที่ทำตามบทบาท",
						"hindi": "वह अकेला तलवारबाज़, वह तो बस एक अभिनेता है जो पटकथा का पालन कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "우리는… 거대한 이야기의 일부야.",
						"english": "We are… part of a grand story.",
						"japanese": "我々は…壮大な物語の一部だ。",
						"chinese": "我们是……一个宏大故事的一部分。",
						"french": "Nous sommes… une partie d'une grande histoire.",
						"spanish": "Somos… parte de una gran historia.",
						"vietnamese": "Chúng ta là… một phần của câu chuyện vĩ đại.",
						"thai": "เราคือ… ส่วนหนึ่งของเรื่องราวอันยิ่งใหญ่",
						"hindi": "हम हैं… एक भव्य कहानी का हिस्सा।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야 그게?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你这是什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý của ngươi là gì?",
						"thai": "คุณหมายความว่าอย่างไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "amir",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "환영을 봤을 거야. 사막이 보여주는.",
						"english": "You must have seen the mirages. The desert's show.",
						"japanese": "幻影を見たのだろう。砂漠が見せるそれを。",
						"chinese": "你一定看到了幻象。沙漠所呈现的。",
						"french": "Tu as dû voir les mirages. Le spectacle du désert.",
						"spanish": "Debes haber visto los espejismos. El espectáculo del desierto.",
						"vietnamese": "Ngươi hẳn đã thấy ảo ảnh. Của sa mạc hiện ra.",
						"thai": "คุณคงได้เห็นภาพลวงตาแล้ว สิ่งที่ทะเลทรายแสดงให้เห็น",
						"hindi": "तुमने ज़रूर मृगतृष्णा देखी होगी। रेगिस्तान का दिखावा।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "환영? 그건….",
						"english": "Mirages? That's…",
						"japanese": "幻影？それは…。",
						"chinese": "幻象？那是……",
						"french": "Mirages ? C'est…",
						"spanish": "¿Espejismos? Eso es…",
						"vietnamese": "Ảo ảnh? Đó là…",
						"thai": "ภาพลวงตา? นั่นมัน...",
						"hindi": "मृगतृष्णा? वह तो..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모두가 그렇게 믿지. 하지만… 그게 다가 아니야.",
						"english": "Everyone believes that. But… that's not all.",
						"japanese": "誰もがそう信じている。だが…それだけではない。",
						"chinese": "所有人都相信这一点。但是……那不是全部。",
						"french": "Tout le monde le croit. Mais… ce n'est pas tout.",
						"spanish": "Todos creen eso. Pero… eso no es todo.",
						"vietnamese": "Ai cũng tin như vậy. Nhưng… đó không phải là tất cả.",
						"thai": "ทุกคนเชื่ออย่างนั้น แต่... นั่นไม่ใช่ทั้งหมด",
						"hindi": "हर कोई यही मानता है। लेकिन… वह सब कुछ नहीं है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 사막은, 누군가의 뜻대로 움직여.",
						"english": "This desert moves according to someone's will.",
						"japanese": "この砂漠は、誰かの意思で動いている。",
						"chinese": "这片沙漠，听从着某个人的意志。",
						"french": "Ce désert obéit à la volonté de quelqu'un.",
						"spanish": "Este desierto se mueve según la voluntad de alguien.",
						"vietnamese": "Sa mạc này di chuyển theo ý muốn của ai đó.",
						"thai": "ทะเลทรายแห่งนี้เคลื่อนไหวตามเจตจำนงของใครบางคน",
						"hindi": "यह रेगिस्तान किसी की मर्जी से चलता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구의 뜻대로?",
						"english": "Whose will?",
						"japanese": "誰の意思で？",
						"chinese": "谁的意志？",
						"french": "La volonté de qui ?",
						"spanish": "¿La voluntad de quién?",
						"vietnamese": "Ý muốn của ai?",
						"thai": "เจตจำนงของใคร?",
						"hindi": "किसकी मर्जी से?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어.",
						"english": "No turning back now.",
						"japanese": "もう戻れない。",
						"chinese": "已经无法回头了。",
						"french": "On ne peut plus revenir en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không thể quay lại được nữa.",
						"thai": "ไม่มีทางย้อนกลับแล้ว",
						"hindi": "अब वापस नहीं जा सकते।"
					},
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실에 다가설수록, 이야기는 너를 집어삼킬 거야.",
						"english": "The closer you get to the truth, the more the story will consume you.",
						"japanese": "真実に近づくほど、物語は君を飲み込むだろう。",
						"chinese": "越接近真相，故事就越会吞噬你。",
						"french": "Plus tu approcheras de la vérité, plus l'histoire te dévorera.",
						"spanish": "Cuanto más te acerques a la verdad, más te consumirá la historia.",
						"vietnamese": "Càng đến gần sự thật, câu chuyện sẽ càng nuốt chửng bạn.",
						"thai": "ยิ่งเข้าใกล้ความจริงเท่าไร เรื่องราวก็จะกลืนกินเจ้ามากเท่านั้น",
						"hindi": "जितना तुम सच के करीब जाओगे, कहानी तुम्हें उतना ही निगल लेगी।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…그래도 가야 해.",
						"english": "...I still have to go.",
						"japanese": "…それでも、行かなければならない。",
						"chinese": "……但我还是要去。",
						"french": "...Je dois quand même y aller.",
						"spanish": "...Aun así, debo ir.",
						"vietnamese": "...Dù sao thì tôi vẫn phải đi.",
						"thai": "...แต่ฉันก็ยังต้องไป",
						"hindi": "...फिर भी मुझे जाना होगा।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 조종당하고 있어. 너도… 나도.",
						"english": "Everything is being controlled. You... and me too.",
						"japanese": "全てが操られている。君も…私も。",
						"chinese": "一切都被操控着。你……我也是。",
						"french": "Tout est contrôlé. Toi... et moi aussi.",
						"spanish": "Todo está siendo controlado. Tú... y yo también.",
						"vietnamese": "Mọi thứ đều đang bị thao túng. Cả bạn... và tôi nữa.",
						"thai": "ทุกสิ่งกำลังถูกควบคุม เจ้าด้วย... ข้าด้วย",
						"hindi": "सब कुछ नियंत्रित किया जा रहा है। तुम भी... मैं भी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "모래폭풍의 심장부, 거대한 그림자가 일렁였다.",
						"english": "In the heart of the sandstorm, a colossal shadow shimmered.",
						"japanese": "砂嵐の心臓部、巨大な影が揺らめいた。",
						"chinese": "沙暴的中心，一个巨大的影子在晃动。",
						"french": "Au cœur de la tempête de sable, une ombre gigantesque vacillait.",
						"spanish": "En el corazón de la tormenta de arena, una sombra colosal se estremeció.",
						"vietnamese": "Tại tâm bão cát, một cái bóng khổng lồ chập chờn.",
						"thai": "ในใจกลางพายุทราย เงาร่างมหึมาปรากฏขึ้นระลอกๆ",
						"hindi": "रेतीले तूफान के केंद्र में, एक विशालकाय परछाई लहराई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자. 이야기는 이미 정해져 있다.",
						"english": "Fool. The story is already set.",
						"japanese": "愚か者め。物語は既に決まっている。",
						"chinese": "愚蠢的家伙。故事早已注定。",
						"french": "Imbécile. L'histoire est déjà écrite.",
						"spanish": "Necio. La historia ya está escrita.",
						"vietnamese": "Kẻ ngu xuẩn. Câu chuyện đã được định sẵn rồi.",
						"thai": "เจ้าคนโง่ เรื่องราวถูกกำหนดไว้แล้ว",
						"hindi": "मूर्ख। कहानी पहले ही तय हो चुकी है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너의 역할은… 여기서 끝이야.",
						"english": "Your role... ends here.",
						"japanese": "君の役割は…ここで終わりだ。",
						"chinese": "你的角色……到此为止。",
						"french": "Ton rôle... s'arrête ici.",
						"spanish": "Tu papel... termina aquí.",
						"vietnamese": "Vai trò của ngươi... kết thúc tại đây.",
						"thai": "บทบาทของเจ้า... สิ้นสุดลงแค่นี้",
						"hindi": "तुम्हारी भूमिका... यहीं खत्म होती है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "누가 그런 소리를.",
						"english": "Who said that?",
						"japanese": "誰がそんなことを。",
						"chinese": "谁说的？",
						"french": "Qui a dit ça ?",
						"spanish": "¿Quién dijo eso?",
						"vietnamese": "Ai nói vậy?",
						"thai": "ใครพูดอย่างนั้น",
						"hindi": "यह किसने कहा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 이야기는 내가 만들어!",
						"english": "I make my own story!",
						"japanese": "私の物語は私が作る！",
						"chinese": "我的故事我来创造！",
						"french": "Mon histoire, c'est moi qui la crée !",
						"spanish": "¡Mi historia la creo yo!",
						"vietnamese": "Tôi tự tạo câu chuyện của mình!",
						"thai": "ฉันสร้างเรื่องราวของฉันเอง!",
						"hindi": "मेरी कहानी मैं खुद बनाता हूँ!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "봐. 너의 연극은 여기서 막을 내리는군.",
						"english": "See? Your play ends here.",
						"japanese": "見ろ。お前の演劇はここで幕を閉じる。",
						"chinese": "看。你的戏到此为止了。",
						"french": "Vois. Ton spectacle s'achève ici.",
						"spanish": "Mira. Tu obra termina aquí.",
						"vietnamese": "Nhìn xem. Vở kịch của ngươi kết thúc tại đây.",
						"thai": "ดูสิ ละครของเจ้าจบลงตรงนี้แล้ว",
						"hindi": "देखो। तुम्हारा नाटक यहीं समाप्त होता है।"
					},
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "운명을 거스를 순 없어.",
						"english": "You can't defy fate.",
						"japanese": "運命には逆らえない。",
						"chinese": "你无法违抗命运。",
						"french": "On ne peut pas défier le destin.",
						"spanish": "No puedes desafiar al destino.",
						"vietnamese": "Không thể chống lại số phận.",
						"thai": "เจ้าไม่อาจท้าทายโชคชะตาได้",
						"hindi": "तुम भाग्य को बदल नहीं सकते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 아직 끝나지 않았어.",
						"english": "No... it's not over yet.",
						"japanese": "いや…まだ終わってない。",
						"chinese": "不…还没结束。",
						"french": "Non... ce n'est pas encore fini.",
						"spanish": "No... aún no ha terminado.",
						"vietnamese": "Không... vẫn chưa kết thúc.",
						"thai": "ไม่... ยังไม่จบ",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "난… 진실을 밝힐 거야.",
						"english": "I... will reveal the truth.",
						"japanese": "私… 真実を明かすわ。",
						"chinese": "我… 会揭露真相的。",
						"french": "Je... vais révéler la vérité.",
						"spanish": "Yo... revelaré la verdad.",
						"vietnamese": "Tôi... sẽ tiết lộ sự thật.",
						"thai": "ฉัน...จะเปิดเผยความจริง",
						"hindi": "मैं... सच उजागर करूँगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으… 아직… 끝나지 않았어.",
						"english": "Ugh... It's not... over yet.",
						"japanese": "くっ…まだ…終わってない。",
						"chinese": "呃…还没…结束。",
						"french": "Grr... Ce n'est pas... encore fini.",
						"spanish": "Ugh... Todavía no... ha terminado.",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc.",
						"thai": "อึก... ยัง... ไม่จบ",
						"hindi": "ऊह... अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 사막의… 거대한 이야기는… 계속될 거야.",
						"english": "The grand story... of this desert... will continue.",
						"japanese": "この砂漠の…壮大な物語は…続くんだ。",
						"chinese": "这片沙漠的…宏大故事…将继续。",
						"french": "La grande histoire... de ce désert... continuera.",
						"spanish": "La gran historia... de este desierto... continuará.",
						"vietnamese": "Câu chuyện vĩ đại... của sa mạc này... sẽ tiếp diễn.",
						"thai": "เรื่องราวอันยิ่งใหญ่... ของทะเลทรายนี้... จะดำเนินต่อไป",
						"hindi": "इस रेगिस्तान की... विशाल कहानी... जारी रहेगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게 끝이 아니라고?",
						"english": "This isn't the end?",
						"japanese": "これが終わりじゃないって？",
						"chinese": "这还没结束？",
						"french": "Ce n'est pas la fin ?",
						"spanish": "¿Esto no es el final?",
						"vietnamese": "Đây không phải là kết thúc sao?",
						"thai": "นี่ไม่ใช่ตอนจบเหรอ?",
						"hindi": "यह अंत नहीं है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 적을 쓰러뜨렸다. 그러나 사막의 진정한 의지는 아직 모습을 드러내지 않았다.",
						"english": "Defeated an unknown foe. But the true will of the desert has yet to reveal itself.",
						"japanese": "正体不明の敵を倒した。しかし、砂漠の真の意思はまだ姿を現していない。",
						"chinese": "击败了不明身份的敌人。然而，沙漠的真正意志尚未显现。",
						"french": "Un ennemi inconnu a été vaincu. Mais la véritable volonté du désert ne s'est pas encore manifestée.",
						"spanish": "Se derrotó a un enemigo desconocido. Pero la verdadera voluntad del desierto aún no se ha revelado.",
						"vietnamese": "Đã đánh bại một kẻ thù không rõ danh tính. Nhưng ý chí thực sự của sa mạc vẫn chưa lộ diện.",
						"thai": "เอาชนะศัตรูที่ไม่รู้จักได้แล้ว แต่เจตจำนงที่แท้จริงของทะเลทรายยังไม่ปรากฏตัว",
						"hindi": "एक अज्ञात शत्रु को परास्त किया। परन्तु रेगिस्तान की सच्ची इच्छा अभी तक प्रकट नहीं हुई है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "새로운 단서가 다음 무대를 암시했다. 이야기는 계속된다.",
						"english": "New clues hinted at the next stage. The story continues.",
						"japanese": "新たな手がかりが次の舞台を暗示していた。物語は続く。",
						"chinese": "新线索暗示了下一个阶段。故事还在继续。",
						"french": "De nouveaux indices laissaient présager la prochaine étape. L'histoire continue.",
						"spanish": "Nuevas pistas insinuaron el siguiente escenario. La historia continúa.",
						"vietnamese": "Những manh mối mới đã ám chỉ sân khấu tiếp theo. Câu chuyện tiếp diễn.",
						"thai": "เบาะแสใหม่บ่งบอกถึงเวทีต่อไป เรื่องราวยังคงดำเนินต่อไป",
						"hindi": "नए सुरागों ने अगले चरण का संकेत दिया। कहानी जारी है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래는 끝없이 변하고, 길은 사라졌다.",
			"환영이 현실처럼 눈앞에 펼쳐진다.",
			"이곳 모든 것이 기묘한 이야기의 일부라고 —",
			"사막의 속삭임은 멈추지 않았다.",
			"진실은 어디에 있을까?"
		],
		"english": [
			"Sands shift endlessly, paths vanish.",
			"Illusions unfold before my eyes, as if real.",
			"Everything here feels like part of a strange tale —",
			"The desert's whispers never ceased.",
			"Where does the truth lie?"
		],
		"japanese": [
			"砂は無限に変わり、道は消えた。",
			"幻影が現実のように目の前に広がる。",
			"ここにある全てが、奇妙な物語の一部だと —",
			"砂漠の囁きは止まらなかった。",
			"真実はどこにあるのか？"
		],
		"chinese": [
			"沙漠无尽变幻，道路已然消失。",
			"幻象如现实般在眼前展开。",
			"这里的一切都像是一个离奇故事的一部分——",
			"沙漠的低语从未停止。",
			"真相何在？"
		],
		"french": [
			"Le sable change à l'infini, les chemins disparaissent.",
			"Des illusions se déploient devant mes yeux, comme la réalité.",
			"Tout ici fait partie d'une étrange histoire —",
			"Les murmures du désert ne cessaient jamais.",
			"Où se trouve la vérité ?"
		],
		"spanish": [
			"La arena cambia sin cesar, los caminos se desvanecieron.",
			"Ilusiones se despliegan ante mis ojos, como si fueran reales.",
			"Todo aquí es parte de una extraña historia —",
			"Los susurros del desierto nunca cesaron.",
			"¿Dónde reside la verdad?"
		],
		"vietnamese": [
			"Cát không ngừng đổi thay, đường đã biến mất.",
			"Ảo ảnh hiện ra trước mắt như thật.",
			"Mọi thứ ở đây đều như một phần của câu chuyện kỳ lạ —",
			"Tiếng thì thầm của sa mạc không ngừng.",
			"Sự thật nằm ở đâu?"
		],
		"thai": [
			"ทรายเปลี่ยนแปลงไม่สิ้นสุด หนทางเลือนหายไป",
			"ภาพลวงตาปรากฏขึ้นตรงหน้า ราวกับเป็นจริง",
			"ทุกสิ่ง ณ ที่นี้ ราวกับเป็นส่วนหนึ่งของเรื่องราวแปลกประหลาด —",
			"เสียงกระซิบของทะเลทรายไม่เคยหยุด",
			"ความจริงอยู่ที่ไหน?"
		],
		"hindi": [
			"रेत अंतहीन बदलती है, रास्ते गायब हो गए।",
			"भ्रम वास्तविकता की तरह आँखों के सामने फैल जाते हैं।",
			"यहाँ सब कुछ एक अजीब कहानी का हिस्सा है —",
			"रेगिस्तान की फुसफुसाहट कभी नहीं रुकी।",
			"सत्य कहाँ है?"
		]
	}
} as const;
