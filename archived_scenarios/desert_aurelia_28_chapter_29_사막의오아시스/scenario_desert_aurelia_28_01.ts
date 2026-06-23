export const scenario_desert_aurelia_28_01 = {
	"scenario_id": "desert_aurelia_28_01",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사막을 헤치고 오아시스에 도착했다. 생명의 물결이 환영처럼 아른거렸다.",
						"english": "After traversing the desert, I reached the oasis. Waves of life shimmered like a mirage.",
						"japanese": "砂漠を越え、オアシスに到着した。生命の波紋が幻のように揺らめいた。",
						"chinese": "跋涉沙漠之后，我抵达了绿洲。生命的波纹如幻影般闪烁。",
						"french": "Après avoir traversé le désert, j'ai atteint l'oasis. Des vagues de vie scintillaient comme un mirage.",
						"spanish": "Tras atravesar el desierto, llegué al oasis. Ondas de vida relucían como un espejismo.",
						"vietnamese": "Sau khi vượt qua sa mạc, tôi đã đến ốc đảo. Sóng sự sống lung linh như ảo ảnh.",
						"thai": "หลังจากเดินทางข้ามทะเลทราย ฉันก็มาถึงโอเอซิส คลื่นแห่งชีวิตระยิบระยับราวภาพลวงตา",
						"hindi": "रेगिस्तान पार करके, मैं नखलिस्तान पहुँचा। जीवन की लहरें मृगतृष्णा की तरह चमक रही थीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "드디어… 찾았어.",
						"english": "Finally... I found it.",
						"japanese": "ついに… 見つけた。",
						"chinese": "终于… 找到了。",
						"french": "Enfin… je l'ai trouvé.",
						"spanish": "Por fin… lo encontré.",
						"vietnamese": "Cuối cùng… đã tìm thấy.",
						"thai": "ในที่สุด… ก็เจอแล้ว",
						"hindi": "आखिरकार… मैंने इसे ढूंढ लिया।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "가지 마! 저 오아시스는… 위험해!",
						"english": "Don't go! That oasis is… dangerous!",
						"japanese": "行かないで！あのオアシスは…危険だ！",
						"chinese": "别去！那个绿洲…很危险！",
						"french": "N'y va pas ! Cette oasis est… dangereuse !",
						"spanish": "¡No vayas! Ese oasis es… ¡peligroso!",
						"vietnamese": "Đừng đi! Ốc đảo đó… nguy hiểm!",
						"thai": "อย่าไปนะ! โอเอซิสนั่น… อันตราย!",
						"hindi": "मत जाओ! वो नखलिस्तान… खतरनाक है!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 여기서 쉬지 않으면… 죽어.",
						"english": "What are you talking about? If we don't rest here… we'll die.",
						"japanese": "何を言っているんだ？ここで休まないと…死ぬぞ。",
						"chinese": "你说什么？如果不安息在这里…我们会死的。",
						"french": "De quoi parles-tu ? Si on ne se repose pas ici… on mourra.",
						"spanish": "¿De qué hablas? Si no descansamos aquí… moriremos.",
						"vietnamese": "Cậu đang nói gì vậy? Nếu không nghỉ ở đây… chúng ta sẽ chết.",
						"thai": "พูดอะไรน่ะ? ถ้าเราไม่พักที่นี่… เราจะตายนะ",
						"hindi": "क्या कह रहे हो? अगर हम यहाँ आराम नहीं करेंगे… तो मर जाएँगे।"
					}
				},
				{
					"content": {
						"korean": "여긴… 덫이야. 다들… 갇혀버렸어…",
						"english": "This place… is a trap. Everyone… is trapped…",
						"japanese": "ここは…罠だ。みんな…閉じ込められた…",
						"chinese": "这里…是个陷阱。大家…都被困住了…",
						"french": "C'est… un piège. Tout le monde… est piégé…",
						"spanish": "Esto… es una trampa. Todos… están atrapados…",
						"vietnamese": "Đây… là một cái bẫy. Mọi người… đều bị mắc kẹt…",
						"thai": "ที่นี่… คือกับดัก ทุกคน… ติดกับแล้ว…",
						"hindi": "यह जगह… एक जाल है। सब… फँस गए हैं…"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "여긴… 시간이 없어…",
						"english": "There's… no time left here…",
						"japanese": "ここには…時間がない…",
						"chinese": "这里…没有时间了。",
						"french": "Ici… il n'y a plus de temps…",
						"spanish": "Aquí… no hay tiempo…",
						"vietnamese": "Ở đây… không còn thời gian…",
						"thai": "ที่นี่… ไม่มีเวลาแล้ว…",
						"hindi": "यहाँ… समय नहीं बचा है…"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "시간? 무슨 소리야?",
						"english": "Time? What are you talking about?",
						"japanese": "「時間？何のこと？」",
						"chinese": "“时间？你说什么？”",
						"french": "“Le temps ? De quoi tu parles ?”",
						"spanish": "“¿Tiempo? ¿De qué hablas?”",
						"vietnamese": "“Thời gian? Cậu đang nói gì vậy?”",
						"thai": "“เวลา? พูดเรื่องอะไรน่ะ?”",
						"hindi": "“समय? तुम किस बारे में बात कर रहे हो?”"
					}
				},
				{
					"content": {
						"korean": "저 시계탑 그림자… 계속 멈춰있지 않아…?",
						"english": "That clock tower's shadow... isn't it still frozen...?",
						"japanese": "「あの時計塔の影…まだ止まったままじゃない…？」",
						"chinese": "“那个钟楼的影子……不是一直停滞不动吗……？”",
						"french": "“L'ombre de cette tour de l'horloge... n'est-elle pas toujours figée... ?”",
						"spanish": "“La sombra de esa torre del reloj... ¿no sigue congelada...?”",
						"vietnamese": "“Cái bóng của tháp đồng hồ kia... nó không ngừng lại sao...?”",
						"thai": "“เงาของหอนาฬิกานั่น... มันยังหยุดอยู่ไม่ใช่เหรอ...?”",
						"hindi": "“उस घड़ी टावर की छाया... क्या वह अभी भी जमी हुई नहीं है...?”"
					},
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "오아시스 주변의 멈춰버린 시계탑 그림자가 희미하게 보였다. 섬뜩한 고요함이 감돌았다.",
						"english": "The frozen shadow of the clock tower around the oasis was faintly visible. An eerie silence hung in the air.",
						"japanese": "「オアシス周辺の止まった時計塔の影がかすかに見えた。不気味な静寂が漂っていた。」",
						"chinese": "“绿洲周围停滞的钟楼影子依稀可见。一股诡异的寂静弥漫着。”",
						"french": "“L'ombre figée de la tour de l'horloge autour de l'oasis était à peine visible. Un silence inquiétant régnait.”",
						"spanish": "“La sombra congelada de la torre del reloj alrededor del oasis era apenas visible. Un silencio espeluznante flotaba en el aire.”",
						"vietnamese": "“Bóng của tháp đồng hồ bị đóng băng xung quanh ốc đảo lờ mờ hiện ra. Một sự tĩnh lặng kỳ lạ bao trùm.”",
						"thai": "“เงาของหอนาฬิกาที่หยุดนิ่งรอบโอเอซิสปรากฏให้เห็นจาง ๆ ความเงียบอันน่าขนลุกปกคลุมไปทั่ว”",
						"hindi": "“मरुद्यान के चारों ओर घड़ी टावर की जमी हुई छाया हल्की सी दिखाई दे रही थी। एक भयानक सन्नाटा छाया हुआ था।”"
					}
				},
				{
					"content": {
						"korean": "이상해…",
						"english": "It's strange...",
						"japanese": "「変だ…」",
						"chinese": "“好奇怪……”",
						"french": "“C'est étrange...”",
						"spanish": "“Es extraño...”",
						"vietnamese": "“Thật kỳ lạ...”",
						"thai": "“แปลกจัง...”",
						"hindi": "“यह अजीब है...”"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 400,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "빨리… 도망쳐야 해… 갇혀버려…",
						"english": "Hurry... I need to escape... I'm trapped...",
						"japanese": "「早く…逃げないと…閉じ込められちゃう…」",
						"chinese": "“快……必须逃走……会被困住的……”",
						"french": "“Vite... je dois m'échapper... je suis piégé...”",
						"spanish": "“Rápido... tengo que escapar... estoy atrapado...”",
						"vietnamese": "“Nhanh lên... phải trốn thoát... bị mắc kẹt rồi...”",
						"thai": "“เร็วเข้า... ต้องหนีไป... ฉันติดกับ...”",
						"hindi": "“जल्दी करो... मुझे भागना होगा... मैं फंस गया हूँ...”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "괜찮아. 너무 겁먹지 마.",
						"english": "It's okay. Don't be too scared.",
						"japanese": "「大丈夫。そんなに怖がらないで。」",
						"chinese": "“没关系。别太害怕。”",
						"french": "“Ça va. N'aie pas si peur.”",
						"spanish": "“Está bien. No tengas tanto miedo.”",
						"vietnamese": "“Không sao đâu. Đừng quá sợ hãi.”",
						"thai": "“ไม่เป็นไร. อย่ากลัวมากไปเลย.”",
						"hindi": "“ठीक है। ज़्यादा मत डरो।”"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 다들… 사라졌어… 여기서…",
						"english": "No... everyone... disappeared... from here...",
						"japanese": "「違う…みんな…消えちゃった…ここから…」",
						"chinese": "“不……大家都……消失了……从这里……”",
						"french": "“Non... tout le monde... a disparu... d'ici...”",
						"spanish": "“No... todos... desaparecieron... de aquí...”",
						"vietnamese": "“Không phải... mọi người... đã biến mất... khỏi đây...”",
						"thai": "“ไม่นะ... ทุกคน... หายไปแล้ว... จากที่นี่...”",
						"hindi": "“नहीं... सब लोग... गायब हो गए... यहाँ से...”"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…누가 사라졌다는 거야?",
						"english": "...Who disappeared?",
						"japanese": "「…誰が消えたって？」",
						"chinese": "“……谁消失了？”",
						"french": "“...Qui a disparu ?”",
						"spanish": "“¿...Quién desapareció?”",
						"vietnamese": "“...Ai đã biến mất?”",
						"thai": "“...ใครหายไป?”",
						"hindi": "“...कौन गायब हो गया?”"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 600,
					"action": "enter",
					"speaker": "amir",
					"type": "direction",
					"spot": [
						1,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은… 늦어… 여기서 나가야 해…",
						"english": "It's too late... I have to get out of here...",
						"japanese": "「もうこれ以上は…遅い…ここから出ないと…」",
						"chinese": "“再这样下去……就太迟了……必须离开这里……”",
						"french": "“C'est trop tard... je dois sortir d'ici...”",
						"spanish": "“Es demasiado tarde... tengo que salir de aquí...”",
						"vietnamese": "“Quá muộn rồi... phải rời khỏi đây...”",
						"thai": "“สายเกินไปแล้ว... ต้องออกไปจากที่นี่...”",
						"hindi": "“अब और नहीं... बहुत देर हो चुकी है... मुझे यहाँ से निकलना होगा...”"
					},
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이상해… 이 오아시스… 뭔가 우리를 붙잡고 있어.",
						"english": "It's strange... This oasis... something is holding us back.",
						"japanese": "「変だ…このオアシス…何かが私たちを捕らえている。」",
						"chinese": "“好奇怪……这个绿洲……有什么东西在困住我们。”",
						"french": "“C'est étrange... Cet oasis... quelque chose nous retient.”",
						"spanish": "“Es extraño... Este oasis... algo nos está reteniendo.”",
						"vietnamese": "“Thật kỳ lạ... Ốc đảo này... có gì đó đang níu giữ chúng ta.”",
						"thai": "“แปลกจัง... โอเอซิสนี้... มีบางอย่างกำลังกักขังเราไว้.”",
						"hindi": "“यह अजीब है... यह मरुद्यान... कुछ हमें रोक रहा है।”"
					}
				},
				{
					"content": {
						"korean": "시간이… 날 쫓아와…! 어서… 어서…!",
						"english": "Time... it's chasing me...! Quick... quick...!",
						"japanese": "時間が…私を追いかけてくる…！早く…早く…！",
						"chinese": "时间…它在追我…！快…快…！",
						"french": "Le temps… il me poursuit… ! Vite… vite… !",
						"spanish": "El tiempo… me persigue…! ¡Deprisa… deprisa…!",
						"vietnamese": "Thời gian… nó đang đuổi theo ta…! Nhanh lên… nhanh lên…!",
						"thai": "เวลา…มันกำลังไล่ตามฉัน…! เร็วเข้า…เร็วเข้า…!",
						"hindi": "समय… वो मेरा पीछा कर रहा है…! जल्दी… जल्दी…!"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 수 없어. 알아내야만 해.",
						"english": "Can't go back. Must find out.",
						"japanese": "戻れない。突き止めなければ。",
						"chinese": "无法回头。必须查明。",
						"french": "Impossible de revenir. Je dois découvrir la vérité.",
						"spanish": "No puedo volver. Debo averiguarlo.",
						"vietnamese": "Không thể quay lại. Ta phải tìm ra.",
						"thai": "กลับไปไม่ได้ ต้องค้นหาให้พบ",
						"hindi": "वापस नहीं जा सकता। पता लगाना होगा।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "오아시스 깊은 곳, 거대한 그림자가 나타났다.",
						"english": "Deep within the oasis, a colossal shadow emerged.",
						"japanese": "オアシスの深淵に、巨大な影が現れた。",
						"chinese": "绿洲深处，一道巨大的身影浮现。",
						"french": "Au plus profond de l'oasis, une ombre colossale apparut.",
						"spanish": "En las profundidades del oasis, una sombra gigantesca apareció.",
						"vietnamese": "Sâu trong ốc đảo, một bóng đen khổng lồ hiện ra.",
						"thai": "ลึกเข้าไปในโอเอซิส เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "नखलिस्तान की गहराई में, एक विशाल छाया प्रकट हुई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 안식을 깨우다니.",
						"english": "How dare you... disturb my slumber.",
						"japanese": "よくも…我が安息を妨げたな。",
						"chinese": "竟敢…扰我清梦。",
						"french": "Comment oses-tu… troubler mon repos.",
						"spanish": "¿Cómo osas… perturbar mi descanso?",
						"vietnamese": "Ngươi dám… quấy rầy giấc ngủ của ta sao.",
						"thai": "กล้าดีอย่างไร…มาปลุกข้าจากห้วงนิทรา",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरी शांति भंग करने की।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを仕組んだのか？",
						"chinese": "这一切，都是你策划的吗？",
						"french": "Est-ce toi qui as orchestré tout cela ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "นี่เจ้าเป็นคนบงการทั้งหมดหรือเปล่า?",
						"hindi": "क्या यह सब तुम्हारी ही करतूत है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 너도 곧… 모래의 일부가 될 뿐.",
						"english": "Foolish one. You too shall soon… become one with the sand.",
						"japanese": "愚かな者め。お前もじき…砂の一部となるだろう。",
						"chinese": "愚蠢的家伙。你很快…也会成为沙子的一部分。",
						"french": "Imbécile. Toi aussi, bientôt… tu ne seras plus qu'un avec le sable.",
						"spanish": "Necio. Tú también… pronto serás parte de la arena.",
						"vietnamese": "Kẻ ngốc. Ngươi cũng sẽ sớm… trở thành một phần của cát mà thôi.",
						"thai": "เจ้าช่างโง่เขลา. ไม่นานเจ้าก็…จะกลายเป็นส่วนหนึ่งของผืนทราย",
						"hindi": "मूर्ख। तुम भी जल्द ही… रेत का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크… 이럴 수는… {random_boss}의 힘이…!",
						"english": "Argh… No… {random_boss}'s power…!",
						"japanese": "くっ… まさか… {random_boss}の力が…！",
						"chinese": "呃…这不可能… {random_boss}的力量…！",
						"french": "Urgh… Impossible… La puissance de {random_boss}…!",
						"spanish": "Ugh… ¡No puede ser… el poder de {random_boss}…!",
						"vietnamese": "Khụ… Không thể nào… sức mạnh của {random_boss}…!",
						"thai": "อึก… เป็นไปไม่ได้… พลังของ {random_boss}…!",
						"hindi": "उफ़… ऐसा नहीं हो सकता… {random_boss} की शक्ति…!"
					}
				},
				{
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it over…?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini…?",
						"spanish": "¿Se acabó…?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วหรือ…?",
						"hindi": "क्या यह खत्म हो गया…?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "모래 환영이 걷혔다. 하지만 오아시스의 그림자는 — 여전히 깊었다.",
						"english": "The sand illusion faded. But the oasis's shadow — remained deep.",
						"japanese": "砂の幻影は晴れた。だがオアシスの影は — 未だ深かった。",
						"chinese": "沙之幻象消散了。然而绿洲的阴影 — 依然深邃。",
						"french": "L'illusion de sable se dissipa. Mais l'ombre de l'oasis — demeurait profonde.",
						"spanish": "La ilusión de arena se disipó. Pero la sombra del oasis — seguía siendo profunda.",
						"vietnamese": "Ảo ảnh cát tan biến. Nhưng bóng tối của ốc đảo — vẫn còn sâu thẳm.",
						"thai": "ภาพลวงตาจากผืนทรายจางหายไป. แต่เงาของโอเอซิส — ยังคงลึกล้ำ",
						"hindi": "रेत का भ्रम दूर हो गया। लेकिन नखलिस्तान की छाया — अभी भी गहरी थी।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것. 영원히 이 환영에 갇혀라.",
						"english": "Insignificant one. Be trapped forever in this illusion.",
						"japanese": "くだらぬ者め。永遠にこの幻影に囚われるがいい。",
						"chinese": "微不足道的东西。永远困在这幻象中吧。",
						"french": "Créature insignifiante. Sois à jamais prisonnier de cette illusion.",
						"spanish": "Insignificante. Queda atrapado para siempre en esta ilusión.",
						"vietnamese": "Kẻ tầm thường. Hãy bị mắc kẹt mãi mãi trong ảo ảnh này đi.",
						"thai": "เจ้าผู้ไร้ค่า. จงถูกกักขังอยู่ในภาพลวงตานี้ตลอดไป",
						"hindi": "तुच्छ प्राणी। हमेशा के लिए इस भ्रम में कैद रहो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそっ…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Mince… ce n'est pas… fini !",
						"spanish": "¡Maldita sea… aún no… ha terminado!",
						"vietnamese": "Khốn kiếp… chưa… xong đâu!",
						"thai": "บ้าเอ๊ย… ยัง… ไม่จบ!",
						"hindi": "धत्… अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막. 갈증은 죽음과 같았다.",
			"저 멀리, 빛나는 오아시스. 유일한 안식처.",
			"하지만 그 빛은 — 잔혹한 유혹이었다.",
			"모래와 시간, 모든 것을 삼키는 그곳으로 발을 내디뎠다."
		],
		"english": [
			"Endless desert. Thirst was like death.",
			"Far away, a glittering oasis. The only sanctuary.",
			"But that light — was a cruel temptation.",
			"Stepped into that place where sand and time devour everything."
		],
		"japanese": [
			"終わりのない砂漠。渇きは死と等しかった。",
			"遠くには、輝くオアシス。唯一の安息の地。",
			"しかし、その光は — 残酷な誘惑だった。",
			"砂と時間がすべてを飲み込むその場所へ足を踏み入れた。"
		],
		"chinese": [
			"无尽的沙漠。干渴如同死亡。",
			"遥远之处，闪耀的绿洲。唯一的安息之所。",
			"然而那光芒 — 却是残酷的诱惑。",
			"踏入了那个吞噬一切沙与时间的所在。"
		],
		"french": [
			"Désert sans fin. La soif était comme la mort.",
			"Au loin, une oasis scintillante. Le seul refuge.",
			"Mais cette lumière — était une tentation cruelle.",
			"J'ai mis les pieds dans ce lieu où le sable et le temps dévorent tout."
		],
		"spanish": [
			"Desierto interminable. La sed era como la muerte.",
			"A lo lejos, un oasis reluciente. El único santuario.",
			"Pero esa luz — era una cruel tentación.",
			"Di un paso hacia ese lugar donde la arena y el tiempo lo devoran todo."
		],
		"vietnamese": [
			"Sa mạc vô tận. Cơn khát như tử thần.",
			"Đằng xa, ốc đảo lấp lánh. Nơi trú ẩn duy nhất.",
			"Nhưng ánh sáng đó — là một cám dỗ tàn khốc.",
			"Bước chân vào nơi cát và thời gian nuốt chửng mọi thứ."
		],
		"thai": [
			"ทะเลทรายที่ไร้สิ้นสุด ความกระหายเฉกเช่นความตาย",
			"ไกลออกไป โอเอซิสที่ส่องประกาย ที่พึ่งเดียวดาย",
			"แต่แสงนั้น — คือสิ่งยั่วยวนอันโหดร้าย",
			"ก้าวเท้าเข้าไปในสถานที่ที่ผืนทรายและกาลเวลาจะกลืนกินทุกสิ่ง"
		],
		"hindi": [
			"अंतहीन रेगिस्तान। प्यास मौत के समान थी।",
			"दूर, एक चमकता नखलिस्तान। एकमात्र आश्रय।",
			"पर वो रोशनी — एक क्रूर प्रलोभन थी।",
			"उस जगह कदम रखा जहाँ रेत और समय सब कुछ निगल जाते हैं।"
		]
	}
} as const;
