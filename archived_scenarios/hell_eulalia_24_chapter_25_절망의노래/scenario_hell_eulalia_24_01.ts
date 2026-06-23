export const scenario_hell_eulalia_24_01 = {
	"scenario_id": "hell_eulalia_24_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "지옥의 초입. 모든 빛을 집어삼킬 듯한 어둠이 그들을 맞이했다.",
						"english": "The entrance to hell. Darkness, as if to swallow all light, greeted them.",
						"japanese": "地獄の入り口。全ての光を飲み込むかのような闇が彼らを迎えた。",
						"chinese": "地狱入口。吞噬一切光明的黑暗迎接了他们。",
						"french": "L'entrée des enfers. Les ténèbres, comme pour engloutir toute lumière, les accueillirent.",
						"spanish": "La entrada al infierno. La oscuridad, como para tragarse toda la luz, los recibió.",
						"vietnamese": "Lối vào địa ngục. Bóng tối, như muốn nuốt chửng mọi ánh sáng, chào đón họ.",
						"thai": "ทางเข้าสู่นรก ความมืดมิดที่ดูดกลืนทุกแสงได้รอต้อนรับพวกเขา.",
						"hindi": "नरक का प्रवेश द्वार। अंधकार, मानो सारी रोशनी को निगल जाएगा, उनका स्वागत किया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 지옥의 나락인가.",
						"english": "Is this... the abyss of hell?",
						"japanese": "ここが…地獄の淵なのか。",
						"chinese": "这里就是……地狱的深渊吗？",
						"french": "C'est donc... l'abîme de l'enfer ?",
						"spanish": "¿Es esto... el abismo del infierno?",
						"vietnamese": "Đây là... vực sâu của địa ngục sao?",
						"thai": "นี่คือ... ห้วงนรกหรือเปล่า.",
						"hindi": "क्या यह... नरक की खाई है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벌써부터 숨이 막혀오는군.",
						"english": "I'm already suffocating.",
						"japanese": "もう息が詰まってくるな。",
						"chinese": "我已经喘不过气来了。",
						"french": "J'étouffe déjà.",
						"spanish": "Ya me estoy asfixiando.",
						"vietnamese": "Tôi đã thấy ngạt thở rồi.",
						"thai": "ฉันรู้สึกหายใจไม่ออกแล้ว.",
						"hindi": "मुझे अभी से दम घुट रहा है।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "모두 정신 똑바로 차려. 여기서 무너지면 안 돼.",
						"english": "Everyone, stay sharp. We can't fall apart here.",
						"japanese": "皆、気をしっかり持て。ここで崩れてはならない。",
						"chinese": "大家振作起来。我们不能在这里垮掉。",
						"french": "Tout le monde, restez vigilants. Nous ne devons pas flancher ici.",
						"spanish": "Todos, manténganse alerta. No podemos derrumbarnos aquí.",
						"vietnamese": "Mọi người, hãy tỉnh táo. Chúng ta không thể gục ngã ở đây.",
						"thai": "ทุกคน มีสติไว้ เราจะล้มที่นี่ไม่ได้.",
						"hindi": "सब लोग होश में रहो। हमें यहाँ ढहना नहीं है।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저기… 벽에 새겨진 건 뭐지?",
						"english": "What's that... carved on the wall?",
						"japanese": "あれは…壁に刻まれているのは何だ？",
						"chinese": "那是什么……刻在墙上的？",
						"french": "Qu'est-ce que c'est... gravé sur le mur ?",
						"spanish": "¿Qué es eso... grabado en la pared?",
						"vietnamese": "Kia là... gì được khắc trên tường vậy?",
						"thai": "นั่น... อะไรที่สลักอยู่บนผนัง?",
						"hindi": "वह क्या है... दीवार पर खुदा हुआ?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 고대 상징들이 희미하게 빛나며 불길한 기운을 내뿜었다.",
						"english": "Unknown ancient symbols glowed faintly, emitting an ominous aura.",
						"japanese": "未知の古代の象徴が微かに光り、不吉な気配を放っていた。",
						"chinese": "不明的古老符号发出微弱的光芒，散发着不祥的气息。",
						"french": "D'anciens symboles inconnus brillaient faiblement, dégageant une aura sinistre.",
						"spanish": "Antiguos símbolos desconocidos brillaban débilmente, emitiendo un aura ominosa.",
						"vietnamese": "Những biểu tượng cổ xưa không rõ nguồn gốc phát sáng mờ ảo, toát ra một luồng khí báo điềm gở.",
						"thai": "สัญลักษณ์โบราณที่ไม่รู้จักเรืองแสงจางๆ ปล่อยพลังงานอันลางร้ายออกมา.",
						"hindi": "अज्ञात प्राचीन प्रतीक मंद-मंद चमक रहे थे, एक अशुभ आभा छोड़ते हुए।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "어디선가 시계 소리가 들리는 것 같아…",
						"english": "I think I hear a clock ticking somewhere...",
						"japanese": "どこからか時計の音が聞こえるような気がする…",
						"chinese": "好像听到哪里有钟声…",
						"french": "J'ai l'impression d'entendre une horloge quelque part...",
						"spanish": "Creo que oigo un reloj en alguna parte...",
						"vietnamese": "Dường như tôi nghe thấy tiếng đồng hồ từ đâu đó...",
						"thai": "ฉันคิดว่าฉันได้ยินเสียงนาฬิกาจากที่ไหนสักแห่ง...",
						"hindi": "मुझे कहीं से घड़ी की आवाज़ सुनाई दे रही है..."
					}
				},
				{
					"content": {
						"korean": "존재 자체가 불분명한 시계는 멈출 수 없는 카운트다운을 시작했다.",
						"english": "A clock, its existence shrouded in mystery, began an unstoppable countdown.",
						"japanese": "その存在自体が不明瞭な時計は、止められないカウントダウンを開始した。",
						"chinese": "存在本身模糊不清的钟表，开始了无法停止的倒计时。",
						"french": "Une horloge à l'existence incertaine a lancé un compte à rebours inéluctable.",
						"spanish": "Un reloj, cuya existencia era incierta, inició una cuenta regresiva imparable.",
						"vietnamese": "Một chiếc đồng hồ với sự tồn tại không rõ ràng đã bắt đầu một cuộc đếm ngược không thể dừng lại.",
						"thai": "นาฬิกาที่การมีอยู่ของมันไม่ชัดเจน ได้เริ่มต้นการนับถอยหลังที่ไม่อาจหยุดยั้งได้",
						"hindi": "एक घड़ी, जिसका अस्तित्व ही अस्पष्ट था, ने एक ऐसी उलटी गिनती शुरू कर दी जिसे रोका नहीं जा सकता था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "발걸음을 옮길수록, 지옥의 기운은 더욱 깊게 탐험대를 잠식했다.",
						"english": "With every step, the hellish aura further enveloped the expedition team.",
						"japanese": "足を進めるごとに、地獄の気配は探検隊を深く侵食していった。",
						"chinese": "每迈出一步，地狱的气息就更深地侵蚀着探险队。",
						"french": "À chaque pas, l'aura infernale s'infiltrait plus profondément dans l'équipe d'expédition.",
						"spanish": "Con cada paso, la atmósfera infernal envolvía más profundamente al equipo de expedición.",
						"vietnamese": "Càng bước đi, khí tức địa ngục càng ăn sâu vào đoàn thám hiểm.",
						"thai": "ทุกย่างก้าว กลิ่นอายของนรกก็ยิ่งแทรกซึมลึกเข้าไปในทีมสำรวจ",
						"hindi": "हर कदम के साथ, नर्क का आभा मंडल अभियान दल को और गहराई से जकड़ता जा रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "점점 더 심장이 조여오는 느낌이야.",
						"english": "My heart feels like it's tightening more and more.",
						"japanese": "だんだん心臓が締め付けられるような感じだ。",
						"chinese": "感觉心脏越来越紧。",
						"french": "J'ai l'impression que mon cœur se serre de plus en plus.",
						"spanish": "Siento que mi corazón se oprime cada vez más.",
						"vietnamese": "Cảm giác như tim tôi đang thắt lại.",
						"thai": "รู้สึกเหมือนหัวใจถูกบีบรัดมากขึ้นเรื่อยๆ",
						"hindi": "मेरा दिल और कसता जा रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "괜찮아. 우리는 할 수 있어.",
						"english": "It's okay. We can do this.",
						"japanese": "大丈夫。私たちはできる。",
						"chinese": "没关系。我们能做到。",
						"french": "Ça va. On peut le faire.",
						"spanish": "Está bien. Podemos hacerlo.",
						"vietnamese": "Không sao đâu. Chúng ta có thể làm được.",
						"thai": "ไม่เป็นไร เราทำได้",
						"hindi": "ठीक है। हम कर सकते हैं।"
					}
				},
				{
					"content": {
						"korean": "이대로 괜찮을까? 너무 깊이 들어온 것 같아.",
						"english": "Is this okay? I think we've gone too deep.",
						"japanese": "このままで大丈夫かな？深入りしすぎた気がする。",
						"chinese": "这样下去没问题吗？我们好像走得太深了。",
						"french": "Est-ce que ça ira comme ça ? Je crois qu'on est allés trop loin.",
						"spanish": "¿Estaremos bien así? Creo que nos hemos adentrado demasiado.",
						"vietnamese": "Thế này có ổn không? Tôi nghĩ chúng ta đã đi quá sâu rồi.",
						"thai": "แบบนี้จะโอเคเหรอ? ดูเหมือนเราจะเข้ามาลึกเกินไปแล้ว",
						"hindi": "क्या ऐसे ठीक रहेगा? मुझे लगता है हम बहुत गहराई में आ गए हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 우리의 목표는 저 끝에 있어.",
						"english": "Don't give up. Our goal is at the very end.",
						"japanese": "諦めるな。私たちの目標はあの先に。",
						"chinese": "别放弃。我们的目标就在尽头。",
						"french": "N'abandonne pas. Notre objectif est au bout.",
						"spanish": "No te rindas. Nuestro objetivo está al final.",
						"vietnamese": "Đừng bỏ cuộc. Mục tiêu của chúng ta nằm ở cuối con đường đó.",
						"thai": "อย่ายอมแพ้ เป้าหมายของเราอยู่ที่ปลายทางนั่น",
						"hindi": "हार मत मानो। हमारा लक्ष्य उस अंत में है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "카운트다운은 가속되고, 공포는 심화됐다.",
						"english": "The countdown accelerated, and fear intensified.",
						"japanese": "カウントダウンは加速し、恐怖は深まった。",
						"chinese": "倒计时加速，恐惧加剧。",
						"french": "Le compte à rebours s'est accéléré, et la peur s'est intensifiée.",
						"spanish": "La cuenta regresiva se aceleró y el miedo se intensificó.",
						"vietnamese": "Cuộc đếm ngược tăng tốc, nỗi sợ hãi càng sâu sắc.",
						"thai": "การนับถอยหลังเร่งขึ้น และความกลัวก็เพิ่มพูนขึ้น",
						"hindi": "उलटी गिनती तेज हो गई, और डर गहरा गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "시간이… 더 빨리 흐르는 것 같아.",
						"english": "Time... seems to be flowing faster.",
						"japanese": "時間が…もっと早く流れている気がする。",
						"chinese": "时间…好像流逝得更快了。",
						"french": "Le temps... semble s'écouler plus vite.",
						"spanish": "El tiempo... parece pasar más rápido.",
						"vietnamese": "Thời gian... dường như trôi nhanh hơn.",
						"thai": "เวลา... เหมือนจะไหลเร็วกว่าเดิม",
						"hindi": "समय... तेज़ी से बीतता हुआ लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "base",
					"content": {
						"korean": "서두르지 마. 침착하게 대응해야 해.",
						"english": "Don't rush. We need to respond calmly.",
						"japanese": "焦るな。落ち着いて対処しなければ。",
						"chinese": "别急。我们必须冷静应对。",
						"french": "Ne te précipite pas. Nous devons réagir calmement.",
						"spanish": "No te apresures. Debemos reaccionar con calma.",
						"vietnamese": "Đừng vội vàng. Chúng ta cần phải phản ứng một cách bình tĩnh.",
						"thai": "อย่ารีบ เราต้องรับมืออย่างใจเย็น",
						"hindi": "जल्दी मत करो। हमें शांति से जवाब देना होगा।"
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "여기 있으면… 점점 미쳐버릴 것 같아.",
						"english": "If I stay here... I feel like I'm going insane.",
						"japanese": "ここにいたら…だんだんおかしくなりそうだ。",
						"chinese": "如果我待在这里…我会疯掉的。",
						"french": "Si je reste ici... je vais devenir fou.",
						"spanish": "Si me quedo aquí... siento que me volveré loco.",
						"vietnamese": "Nếu cứ ở đây... tôi sẽ dần phát điên mất.",
						"thai": "ถ้าอยู่ที่นี่... ฉันคงจะค่อยๆ บ้าไปแน่ๆ",
						"hindi": "अगर मैं यहाँ रहा... तो मैं धीरे-धीरे पागल हो जाऊँगा।"
					}
				},
				{
					"content": {
						"korean": "정신 차려! 서로를 믿어야 해!",
						"english": "Snap out of it! We have to trust each other!",
						"japanese": "しっかりしろ！互いを信じるんだ！",
						"chinese": "清醒点！我们必须互相信任！",
						"french": "Reprends-toi ! Nous devons nous faire confiance !",
						"spanish": "¡Despierta! ¡Tenemos que confiar el uno en el otro!",
						"vietnamese": "Tỉnh táo lại đi! Chúng ta phải tin tưởng lẫn nhau!",
						"thai": "ตั้งสติหน่อย! เราต้องเชื่อใจกัน!",
						"hindi": "होश में आओ! हमें एक-दूसरे पर भरोसा करना होगा!"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "돌이킬 수 없는 길. 모든 것이 흐릿해져 갔다.",
						"english": "A path of no return. Everything began to blur.",
						"japanese": "後戻りできない道。すべてが曖昧になっていった。",
						"chinese": "一条不归路。一切都变得模糊不清。",
						"french": "Un chemin sans retour. Tout devenait flou.",
						"spanish": "Un camino sin retorno. Todo se volvía borroso.",
						"vietnamese": "Con đường không thể quay lại. Mọi thứ dần trở nên mờ mịt.",
						"thai": "เส้นทางที่ไม่อาจย้อนกลับได้ ทุกสิ่งเริ่มเลือนราง",
						"hindi": "एक ऐसा रास्ता जिससे वापस नहीं लौटा जा सकता। सब कुछ धुँधला होता गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "mara",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상은… 못 가겠어.",
						"english": "I can't go on... any further.",
						"japanese": "これ以上は…もう無理だ。",
						"chinese": "我再也…走不动了。",
						"french": "Je n'en peux plus... je ne peux plus avancer.",
						"spanish": "Ya no puedo... seguir.",
						"vietnamese": "Tôi không thể... đi tiếp được nữa.",
						"thai": "ฉันไปต่อ...ไม่ไหวแล้ว",
						"hindi": "मैं और नहीं जा सकता..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"emotion": "angry",
					"content": {
						"korean": "이곳에서 멈출 수는 없어! 우리가 여기까지 온 이유를 잊지 마!",
						"english": "We can't stop here! Don't forget why we came all this way!",
						"japanese": "ここで立ち止まるわけにはいかない！ここまで来た理由を忘れるな！",
						"chinese": "我们不能在这里停下！别忘了我们为什么来到这里！",
						"french": "Nous ne pouvons pas nous arrêter ici ! N'oubliez pas pourquoi nous sommes venus jusqu'ici !",
						"spanish": "¡No podemos detenernos aquí! ¡No olvides por qué llegamos hasta aquí!",
						"vietnamese": "Chúng ta không thể dừng lại ở đây! Đừng quên lý do chúng ta đã đến tận đây!",
						"thai": "เราหยุดอยู่ตรงนี้ไม่ได้! อย่าลืมสิว่าทำไมเราถึงมาไกลขนาดนี้!",
						"hindi": "हम यहाँ रुक नहीं सकते! मत भूलो हम यहाँ तक क्यों आए!"
					}
				},
				{
					"content": {
						"korean": "우리가… 뭘 위해서 여기까지 왔더라?",
						"english": "What... did we come all this way for?",
						"japanese": "私たちは…何のためにここまで来たんだっけ？",
						"chinese": "我们…到底是为了什么才来到这里的？",
						"french": "Pourquoi... sommes-nous venus jusqu'ici ?",
						"spanish": "¿Para qué... vinimos hasta aquí?",
						"vietnamese": "Chúng ta... đã đến tận đây vì điều gì nhỉ?",
						"thai": "เรา...มาไกลขนาดนี้เพื่ออะไรกันนะ?",
						"hindi": "हम… यहाँ तक किसलिए आए थे?"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 이미 이 공간의 기운에 압도되어 가고 있었다.",
						"english": "The expedition team was already being overwhelmed by the aura of this place.",
						"japanese": "探検隊は、すでにこの空間の気に圧倒されつつあった。",
						"chinese": "探险队已经被这片空间的气息所压倒。",
						"french": "L'équipe d'exploration était déjà submergée par l'aura de ce lieu.",
						"spanish": "El equipo de expedición ya estaba siendo abrumado por el aura de este lugar.",
						"vietnamese": "Đội thám hiểm đã dần bị áp đảo bởi khí tức của không gian này.",
						"thai": "คณะสำรวจเริ่มถูกพลังงานของสถานที่นี้เข้าครอบงำแล้ว",
						"hindi": "अभियान दल इस जगह के औरा से पहले ही अभिभूत हो रहा था।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "마침내, 그들을 가로막는 거대한 그림자가 나타났다.",
						"english": "Finally, a colossal shadow appeared, blocking their path.",
						"japanese": "ついに、彼らの行く手を阻む巨大な影が現れた。",
						"chinese": "最终，一个巨大的身影出现，挡住了他们的去路。",
						"french": "Finalement, une ombre colossale apparut, leur barrant la route.",
						"spanish": "Finalmente, una sombra colosal apareció, bloqueando su camino.",
						"vietnamese": "Cuối cùng, một bóng đen khổng lồ xuất hiện, chặn lối đi của họ.",
						"thai": "ในที่สุด เงาขนาดมหึมาก็ปรากฏขึ้น ขวางทางพวกเขาไว้",
						"hindi": "अंततः, एक विशालकाय परछाई प्रकट हुई, जिसने उनका रास्ता रोक दिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 필멸자들… 이곳에 발을 들이다니.",
						"english": "Foolish mortals... daring to set foot in this place.",
						"japanese": "愚かなる定命の者たちよ…この地に足を踏み入れるとは。",
						"chinese": "愚蠢的凡人…竟敢踏足此地。",
						"french": "Mortels insensés... oser poser le pied ici.",
						"spanish": "Mortales estúpidos... atreverse a pisar este lugar.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc... dám đặt chân đến nơi này.",
						"thai": "มนุษย์ที่โง่เขลา... กล้าดียังไงมาเหยียบที่นี่",
						"hindi": "नासमझ नश्वर प्राणी... इस जगह पर पैर रखने की हिम्मत की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가… 첫 번째 보스인가!",
						"english": "You're... the first boss!",
						"japanese": "お前が…最初のボスか！",
						"chinese": "你就是…第一个Boss吗！",
						"french": "Tu es... le premier boss !",
						"spanish": "¡Tú eres... el primer jefe!",
						"vietnamese": "Ngươi... là Boss đầu tiên sao!",
						"thai": "แก...คือบอสตัวแรกงั้นเหรอ!",
						"hindi": "तुम… पहले बॉस हो!"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "mara"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러서지 마! 싸워야 해!",
						"english": "Don't back down! Fight!",
						"japanese": "退くな！戦え！",
						"chinese": "别退缩！战斗吧！",
						"french": "Ne recule pas ! Bats-toi !",
						"spanish": "¡No retrocedas! ¡Lucha!",
						"vietnamese": "Đừng lùi bước! Chiến đấu đi!",
						"thai": "อย่ายอมแพ้! สู้สิ!",
						"hindi": "पीछे मत हटो! लड़ो!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 시간은… 얼마 남지 않았다.",
						"english": "Your time… is running out.",
						"japanese": "お前たちの時間は… もう残されていない。",
						"chinese": "你们的时间… 所剩无几了。",
						"french": "Votre temps… est presque écoulé.",
						"spanish": "Vuestro tiempo… se agota.",
						"vietnamese": "Thời gian của các ngươi… không còn nhiều.",
						"thai": "เวลาของพวกเจ้า… เหลือไม่มากแล้ว",
						"hindi": "तुम्हारा समय… अब ख़त्म होने वाला है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "압도적인 힘 앞에서, 탐험대는 무릎을 꿇었다.",
						"english": "Faced with overwhelming power, the expedition team knelt.",
						"japanese": "圧倒的な力の前に、探検隊は膝を屈した。",
						"chinese": "在压倒性的力量面前，探险队屈膝了。",
						"french": "Face à une puissance écrasante, l'équipe d'exploration a mis genou à terre.",
						"spanish": "Ante una fuerza abrumadora, la expedición se arrodilló.",
						"vietnamese": "Trước sức mạnh áp đảo, đội thám hiểm đã quỳ gối.",
						"thai": "ต่อหน้าพลังอันมหาศาล ทีมสำรวจก็คุกเข่าลง",
						"hindi": "भारी शक्ति के सामने, अन्वेषण दल घुटनों पर आ गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들… 네놈들의 시간은 여기까지다.",
						"english": "Insignificant worms… Your time ends here.",
						"japanese": "愚かな者たちめ… お前たちの時間はここまでだ。",
						"chinese": "卑微的虫子们… 你们的时间到此为止了。",
						"french": "Créatures insignifiantes… Votre temps est écoulé.",
						"spanish": "Criaturas insignificantes… Vuestro tiempo termina aquí.",
						"vietnamese": "Bọn vô dụng… Thời gian của các ngươi kết thúc tại đây.",
						"thai": "พวกกระจอก… เวลาของพวกเจ้าสิ้นสุดลงแล้วตรงนี้",
						"hindi": "तुच्छ प्राणी… तुम्हारा समय यहीं खत्म होता है।"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 没结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래… 다시 도전해라. 네놈들의 절망은 나의 양식이 될 것이다.",
						"english": "Yes... Challenge again. Your despair shall be my sustenance.",
						"japanese": "ふふ… さあ、再び挑むがいい。貴様らの絶望は、我の糧となるだろう。",
						"chinese": "哼… 再来挑战吧。你们的绝望将成为我的食粮。",
						"french": "Bien… Relevez le défi. Votre désespoir sera ma subsistance.",
						"spanish": "Bien… Volved a intentarlo. Vuestra desesperación será mi sustento.",
						"vietnamese": "Được… Hãy thử thách lại đi. Tuyệt vọng của các ngươi sẽ là lương thực của ta.",
						"thai": "ดี… จงลองใหม่อีกครั้ง ความสิ้นหวังของพวกเจ้าจะเป็นอาหารของข้า",
						"hindi": "हाँ… फिर से चुनौती दो। तुम्हारी निराशा मेरा भोजन बनेगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "치열한 전투 끝에, 첫 번째 중간보스는 쓰러졌다.",
						"english": "After a fierce battle, the first mini-boss fell.",
						"japanese": "激戦の末、最初のミニボスは倒れた。",
						"chinese": "经过一场激战，第一个小头目倒下了。",
						"french": "Après un combat acharné, le premier mini-boss est tombé.",
						"spanish": "Tras una feroz batalla, el primer mini-jefe cayó.",
						"vietnamese": "Sau trận chiến khốc liệt, trùm phụ đầu tiên đã gục ngã.",
						"thai": "หลังจากการต่อสู้อันดุเดือด มินิบอสตัวแรกก็ล้มลง",
						"hindi": "एक भयंकर युद्ध के बाद, पहला मिनी-बॉस गिर गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크크… 겨우 이 정도라니… 진짜 공포는 이제부터다.",
						"english": "Heh heh… Is this all you've got? The real terror begins now.",
						"japanese": "クク… これしきか… 本当の恐怖はこれからだ。",
						"chinese": "呵呵… 就这点本事吗… 真正的恐惧才刚刚开始。",
						"french": "Huhu… C'est tout ce que vous avez ? La vraie terreur ne fait que commencer.",
						"spanish": "Jeje… ¿Solo esto? El verdadero terror empieza ahora.",
						"vietnamese": "Khà khà… Chỉ có thế này thôi sao… Nỗi kinh hoàng thật sự chỉ mới bắt đầu.",
						"thai": "ฮ่าๆ… แค่เท่านี้เองเหรอ… ความน่ากลัวที่แท้จริงเพิ่งจะเริ่มต้น",
						"hindi": "हाहा… बस इतना ही? असली खौफ तो अब शुरू होगा।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "해냈다… 해냈어!",
						"english": "We did it… We did it!",
						"japanese": "やった… やったぞ！",
						"chinese": "成功了… 我们成功了！",
						"french": "On l'a fait… On l'a fait !",
						"spanish": "¡Lo logramos… lo logramos!",
						"vietnamese": "Chúng ta làm được rồi… làm được rồi!",
						"thai": "ทำได้แล้ว… ทำได้แล้ว!",
						"hindi": "हमने कर दिखाया… हमने कर दिखाया!"
					}
				},
				{
					"type": "direction",
					"speaker": "mara",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "우리가 이겼어! 하지만… 이 기분은 대체 뭐지?",
						"english": "We won! But… what is this feeling?",
						"japanese": "勝った！だが… この気持ちは一体何だ？",
						"chinese": "我们赢了！但是… 这到底是什么感觉？",
						"french": "Nous avons gagné ! Mais… qu'est-ce que c'est que ce sentiment ?",
						"spanish": "¡Ganamos! Pero… ¿qué es esta sensación?",
						"vietnamese": "Chúng ta thắng rồi! Nhưng… cái cảm giác này là gì đây?",
						"thai": "เราชนะแล้ว! แต่… ความรู้สึกนี้มันคืออะไรกันแน่?",
						"hindi": "हम जीत गए! लेकिन… यह कैसा एहसास है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "승리했지만, 탐험대는 이미 이 공간의 불길한 기운에 압도되어 허무함을 느꼈다.",
						"english": "Despite their victory, the expedition team felt an overwhelming sense of emptiness, crushed by the ominous aura of this space.",
						"japanese": "勝利したものの、探検隊はこの空間の不吉な気に圧倒され、虚無感に襲われた。",
						"chinese": "尽管取得了胜利，探险队却已然被这片空间的不祥气息所压倒，感到了虚无。",
						"french": "Malgré leur victoire, l'équipe d'exploration, submergée par l'aura sinistre de ce lieu, ressentait un vide oppressant.",
						"spanish": "A pesar de la victoria, la expedición, abrumada por la ominosa atmósfera de este lugar, sintió una profunda sensación de vacío.",
						"vietnamese": "Dù đã chiến thắng, nhưng đội thám hiểm đã bị áp đảo bởi khí tức đáng ngại của không gian này, cảm thấy trống rỗng.",
						"thai": "แม้จะได้รับชัยชนะ แต่ทีมสำรวจก็ถูกครอบงำด้วยกลิ่นอายอันไม่เป็นมงคลของสถานที่แห่งนี้ และรู้สึกถึงความว่างเปล่า",
						"hindi": "जीत के बावजूद, अन्वेषण दल इस जगह की अशुभ आभा से अभिभूत होकर एक खालीपन महसूस कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영혼의 비명이 울려 퍼지는 지옥의 가장 깊은 나락.",
			"희미한 빛만이 존재하는 끝없는 어둠 속에서 시간은 흐른다.",
			"존재 자체가 불분명한 시계는 마지막 기억의 소멸을 알리듯 째깍거리고—",
			"이곳에 발을 들인 자들에게는, 돌이킬 수 없는 대가가 따를 것이다."
		],
		"english": [
			"The deepest abyss of hell, where the screams of souls echo.",
			"In endless darkness, where only a faint light exists, time flows.",
			"A clock, its very existence indistinct, ticks as if signaling the fading of the last memory—",
			"For those who set foot here, an irreversible price awaits."
		],
		"japanese": [
			"魂の叫びが響き渡る、地獄の最深部。",
			"微かな光だけが存在する、終わりのない闇の中で、時は流れる。",
			"存在自体が曖昧な時計は、最後の記憶の消滅を告げるかのように、時を刻む—",
			"この地に足を踏み入れた者には、取り返しのつかない代償が伴うだろう。"
		],
		"chinese": [
			"灵魂尖叫回荡的地狱最深渊。",
			"在只有微光存在的无尽黑暗中，时间流逝。",
			"存在本身模糊不清的钟表，仿佛宣告着最后记忆的消逝，滴答作响——",
			"踏足此地之人，将付出不可逆转的代价。"
		],
		"french": [
			"Le plus profond abîme de l'enfer, où résonnent les cris des âmes.",
			"Dans une obscurité sans fin où seule une faible lumière subsiste, le temps s'écoule.",
			"Une horloge, dont l'existence même est incertaine, tic-tac comme pour annoncer l'effacement du dernier souvenir—",
			"Pour ceux qui mettent le pied ici, un prix irréversible les attendra."
		],
		"spanish": [
			"El abismo más profundo del infierno, donde resuenan los gritos de las almas.",
			"En la oscuridad infinita, donde solo existe una luz tenue, el tiempo fluye.",
			"Un reloj, cuya existencia es incierta, hace tictac como anunciando la desaparición del último recuerdo—",
			"Para aquellos que pongan un pie aquí, un precio irreversible los esperará."
		],
		"vietnamese": [
			"Vực sâu nhất của địa ngục, nơi tiếng thét của linh hồn vang vọng.",
			"Trong bóng tối vô tận, nơi chỉ có một ánh sáng mờ nhạt tồn tại, thời gian trôi.",
			"Một chiếc đồng hồ, sự tồn tại của nó không rõ ràng, tích tắc như báo hiệu sự biến mất của ký ức cuối cùng—",
			"Đối với những ai đặt chân đến đây, một cái giá không thể đảo ngược đang chờ đợi."
		],
		"thai": [
			"ห้วงลึกที่สุดของนรก ที่ซึ่งเสียงกรีดร้องของวิญญาณดังก้อง.",
			"ในความมืดมิดอันไร้ที่สิ้นสุด ที่ซึ่งมีเพียงแสงสลัว เวลาไหลผ่าน.",
			"นาฬิกาที่การดำรงอยู่ของมันไม่ชัดเจน เดินติ๊กต็อกราวกับจะบอกการสลายไปของความทรงจำสุดท้าย—",
			"สำหรับผู้ที่เหยียบย่างเข้ามาที่นี่ ราคาที่ไม่อาจย้อนคืนได้จะติดตามมา."
		],
		"hindi": [
			"नरक की सबसे गहरी खाई, जहाँ आत्माओं की चीखें गूँजती हैं।",
			"अनंत अंधकार में, जहाँ केवल एक धुंधली रोशनी है, समय बहता है।",
			"एक घड़ी, जिसका अस्तित्व ही अस्पष्ट है, टिक-टिक करती है मानो अंतिम स्मृति के मिटने का संकेत दे रही हो—",
			"जो यहाँ कदम रखेंगे, उन्हें एक अपरिवर्तनीय कीमत चुकानी होगी।"
		]
	}
} as const;
