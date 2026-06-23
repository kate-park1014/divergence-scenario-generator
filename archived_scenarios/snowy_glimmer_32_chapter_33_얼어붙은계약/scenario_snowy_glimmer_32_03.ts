export const scenario_snowy_glimmer_32_03 = {
	"scenario_id": "snowy_glimmer_32_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		},
		"glimmer": {
			"name": "Glimmer"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 교역소. 탐험대는 더 큰 욕망에 끌려 Glimmer를 마주했다.",
						"english": "The frigid trading post. Drawn by greater desires, the expedition faced Glimmer.",
						"japanese": "極寒の交易所。探検隊は、より大きな欲望に駆られGlimmerと対峙した。",
						"chinese": "极寒的贸易站。探险队被更大的欲望驱使，与Glimmer对峙。",
						"french": "Le comptoir glacial. Attirée par des désirs plus grands, l'expédition fit face à Glimmer.",
						"spanish": "El puesto comercial gélido. Atraída por mayores deseos, la expedición se encontró con Glimmer.",
						"vietnamese": "Trạm giao dịch lạnh giá. Đoàn thám hiểm bị cuốn hút bởi những ham muốn lớn hơn, đối mặt với Glimmer.",
						"thai": "จุดแลกเปลี่ยนที่หนาวเหน็บ คณะสำรวจถูกดึงดูดด้วยความปรารถนาอันยิ่งใหญ่ เผชิญหน้ากับ Glimmer",
						"hindi": "बर्फीली व्यापारिक चौकी। बड़ी इच्छाओं से आकर्षित होकर, अभियान ने Glimmer का सामना किया।"
					}
				},
				{
					"content": {
						"korean": "Glimmer. 우리는… 더 큰 이득을 원해.",
						"english": "Glimmer. We... desire greater gains.",
						"japanese": "Glimmer。我々は…より大きな利益を望む。",
						"chinese": "Glimmer。我们……想要更大的利益。",
						"french": "Glimmer. Nous... désirons des gains plus importants.",
						"spanish": "Glimmer. Nosotros... deseamos mayores ganancias.",
						"vietnamese": "Glimmer. Chúng tôi... muốn lợi ích lớn hơn.",
						"thai": "Glimmer พวกเรา... ต้องการผลกำไรที่มากขึ้น",
						"hindi": "Glimmer। हम... अधिक लाभ चाहते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이번엔 놓치지 않을 거야. 무엇이든 감수하겠어.",
						"english": "We won't miss this chance. I'll risk anything.",
						"japanese": "今度こそ逃さない。何を犠牲にしても構わない。",
						"chinese": "这次绝不会错过。我愿承担一切。",
						"french": "Cette fois, nous ne laisserons rien passer. Je suis prêt à tout risquer.",
						"spanish": "Esta vez no lo perderemos. Arriesgaré lo que sea.",
						"vietnamese": "Lần này sẽ không bỏ lỡ. Tôi sẽ chấp nhận mọi rủi ro.",
						"thai": "ครั้งนี้จะไม่พลาด ฉันจะยอมแลกทุกอย่าง",
						"hindi": "इस बार नहीं चूकेंगे। मैं कुछ भी जोखिम लेने को तैयार हूँ।"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "좋습니다. 그만한 대가는 지불할 의향이 있으신지요.",
						"english": "Very well. Are you willing to pay the commensurate price?",
						"japanese": "よろしい。それ相応の対価を支払うご用意はありますか？",
						"chinese": "很好。你们愿意支付相应的代价吗？",
						"french": "Très bien. Êtes-vous prêt à payer le prix correspondant ?",
						"spanish": "Muy bien. ¿Están dispuestos a pagar el precio correspondiente?",
						"vietnamese": "Được thôi. Các bạn có sẵn lòng trả cái giá tương xứng không?",
						"thai": "ดีมาก คุณยินดีที่จะจ่ายในราคาที่สมน้ำสมเนื้อหรือไม่",
						"hindi": "बहुत अच्छा। क्या आप उचित कीमत चुकाने को तैयार हैं?"
					},
					"emotion": "base",
					"speaker": "glimmer",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물론이지! 당장 계약을 체결해.",
						"english": "Of course! Let's sign the contract immediately.",
						"japanese": "もちろんだ！すぐに契約を結ぼう。",
						"chinese": "当然！立刻签订契约。",
						"french": "Bien sûr ! Signons le contrat immédiatement.",
						"spanish": "¡Por supuesto! Firmemos el contrato de inmediato.",
						"vietnamese": "Tất nhiên! Hãy ký hợp đồng ngay lập tức.",
						"thai": "แน่นอน! รีบเซ็นสัญญาเลย",
						"hindi": "बिल्कुल! चलो तुरंत अनुबंध पर हस्ताक्षर करते हैं।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "…멈춰. 이 이상은… 가지 마.",
						"english": "...Stop. Don't go... any further.",
						"japanese": "…止まれ。これ以上は…行くな。",
						"chinese": "……停下。不要……再往前了。",
						"french": "...Arrête. Ne va... pas plus loin.",
						"spanish": "...Detente. No vayas... más allá.",
						"vietnamese": "...Dừng lại. Đừng đi... xa hơn nữa.",
						"thai": "...หยุด อย่าไป... มากกว่านี้",
						"hindi": "...रुको। इससे आगे... मत जाओ।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "누구야? 방해하지 마.",
						"english": "Who's there? Don't disturb me.",
						"japanese": "誰だ？邪魔するな。",
						"chinese": "谁？别打扰我。",
						"french": "Qui est là ? Ne me dérange pas.",
						"spanish": "¿Quién eres? No me molestes.",
						"vietnamese": "Ai đó? Đừng làm phiền.",
						"thai": "ใครน่ะ? อย่ามารบกวน.",
						"hindi": "कौन हो? मुझे परेशान मत करो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "힐드… 시스템의 잔해…",
						"english": "Hild... remnants of the System...",
						"japanese": "ヒルド… システムの残骸…",
						"chinese": "希尔德……系统的残骸……",
						"french": "Hild... les vestiges du Système...",
						"spanish": "Hild... los restos del Sistema...",
						"vietnamese": "Hild... tàn tích của Hệ Thống...",
						"thai": "ฮิลด์... เศษซากของระบบ...",
						"hindi": "हिल्ड... सिस्टम के अवशेष..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 빛에… 속지 마. 모든 걸 잃게 될 거야.",
						"english": "Don't be deceived by that light... You'll lose everything.",
						"japanese": "あの光に… 騙されるな。全てを失うぞ。",
						"chinese": "别被那道光……迷惑了。你会失去一切的。",
						"french": "Ne te laisse pas abuser par cette lumière... Tu perdras tout.",
						"spanish": "No te dejes engañar por esa luz... Lo perderás todo.",
						"vietnamese": "Đừng tin vào ánh sáng đó... Ngươi sẽ mất tất cả.",
						"thai": "อย่าหลงกลแสงนั่น... เจ้าจะเสียทุกสิ่งไป.",
						"hindi": "उस रोशनी से... धोखा मत खाना। तुम सब कुछ खो दोगे।"
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "무슨 소리 하는 거야. 우리는 원하는 걸 얻을 거야.",
						"english": "What are you talking about? We'll get what we want.",
						"japanese": "何を言ってるんだ。我々は望むものを手に入れるぞ。",
						"chinese": "你在说什么。我们会得到我们想要的一切。",
						"french": "De quoi tu parles ? Nous obtiendrons ce que nous voulons.",
						"spanish": "¿De qué hablas? Conseguiremos lo que queremos.",
						"vietnamese": "Ngươi đang nói gì vậy. Chúng ta sẽ đạt được điều mình muốn.",
						"thai": "พูดอะไรน่ะ? เราจะได้ในสิ่งที่เราต้องการ.",
						"hindi": "क्या बक रहे हो। हमें जो चाहिए वो मिलेगा।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "Glimmer… 그녀는 단순한 교역자가 아니야.",
						"english": "Glimmer... she's no mere trader.",
						"japanese": "グリマー… 彼女はただの交易者じゃない。",
						"chinese": "微光……她可不是简单的商人。",
						"french": "Glimmer... ce n'est pas une simple commerçante.",
						"spanish": "Glimmer... no es una simple comerciante.",
						"vietnamese": "Glimmer... cô ta không phải một thương nhân bình thường.",
						"thai": "กลิมเมอร์... เธอไม่ใช่แค่พ่อค้าธรรมดา.",
						"hindi": "ग्लिमर... वह सिर्फ एक व्यापारी नहीं है।"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도 한때는… 모든 걸 얻을 줄 알았지. 영광과 힘을…",
						"english": "I, too, once thought... I'd gain everything. Glory and power...",
						"japanese": "私もかつては… 全てを手に入れると思っていた。栄光と力を…",
						"chinese": "我也曾一度以为……我会得到一切。荣耀和力量……",
						"french": "Moi aussi, j'ai cru autrefois... que j'obtiendrais tout. Gloire et pouvoir...",
						"spanish": "Yo también creí una vez... que lo obtendría todo. Gloria y poder...",
						"vietnamese": "Ta cũng từng nghĩ... sẽ đạt được mọi thứ. Vinh quang và sức mạnh...",
						"thai": "ฉันเองก็เคยคิด... ว่าจะได้ทุกสิ่ง. ทั้งเกียรติยศและอำนาจ...",
						"hindi": "मैंने भी कभी सोचा था... कि मुझे सब कुछ मिल जाएगा। महिमा और शक्ति..."
					},
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "하지만 남은 건… 이 비참한 모습뿐. 시스템의 노예처럼…",
						"english": "But all that remains... is this miserable form. Like a slave to the System...",
						"japanese": "だが残ったのは… この惨めな姿だけ。システムの奴隷のように…",
						"chinese": "但剩下的……只有这悲惨的模样。如同系统的奴隶……",
						"french": "Mais tout ce qui reste... c'est cette forme misérable. Comme un esclave du Système...",
						"spanish": "Pero todo lo que queda... es esta forma miserable. Como un esclavo del Sistema...",
						"vietnamese": "Nhưng tất cả những gì còn lại... chỉ là hình hài thảm hại này. Như một nô lệ của Hệ Thống...",
						"thai": "แต่สิ่งที่เหลืออยู่... มีเพียงร่างอันน่าสมเพชนี้. ราวกับทาสของระบบ...",
						"hindi": "परंतु जो बचा है... वह बस यह दयनीय रूप है। सिस्टम के गुलाम की तरह..."
					},
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…너도 당한 거야?",
						"english": "...You were also victimized?",
						"japanese": "…お前もやられたのか？",
						"chinese": "……你也中招了？",
						"french": "...Toi aussi, tu as été victime ?",
						"spanish": "...¿Tú también fuiste una víctima?",
						"vietnamese": "...Ngươi cũng bị hại sao?",
						"thai": "...เจ้าก็โดนหลอกหรือ?",
						"hindi": "...क्या तुम भी शिकार हुए?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "이 시스템은… 네 영혼까지 집어삼킬 거야. 모든 약속은 거짓…",
						"english": "This System will... devour your very soul. All promises are lies...",
						"japanese": "このシステムは… お前の魂まで飲み込むぞ。全ての約束は嘘だ…",
						"chinese": "这个系统会……吞噬你的灵魂。所有的承诺都是谎言……",
						"french": "Ce Système va... dévorer ton âme même. Toutes les promesses sont des mensonges...",
						"spanish": "Este Sistema... devorará tu propia alma. Todas las promesas son mentiras...",
						"vietnamese": "Hệ Thống này sẽ... nuốt chửng cả linh hồn ngươi. Mọi lời hứa đều là dối trá...",
						"thai": "ระบบนี้จะ... กลืนกินแม้กระทั่งจิตวิญญาณของเจ้า. ทุกคำสัญญาล้วนเป็นเรื่องโกหก...",
						"hindi": "यह सिस्टम... तुम्हारी आत्मा तक निगल जाएगा। सारे वादे झूठे हैं..."
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "…시간이 없어. 네 안의 시계가… 빠르게 흐르고 있어.",
						"english": "...There's no time. The clock within you... is ticking fast.",
						"japanese": "…時間がない。お前の中の時計が… 速く進んでいる。",
						"chinese": "……时间不多了。你体内的时钟……正在快速流逝。",
						"french": "...Il n'y a plus de temps. L'horloge en toi... tourne vite.",
						"spanish": "...No hay tiempo. El reloj dentro de ti... corre rápido.",
						"vietnamese": "...Không còn thời gian. Đồng hồ bên trong ngươi... đang chạy rất nhanh.",
						"thai": "...ไม่มีเวลาแล้ว. นาฬิกาในตัวเจ้า... กำลังเดินเร็วขึ้น.",
						"hindi": "...समय नहीं है। तुम्हारे अंदर की घड़ी... तेजी से चल रही है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "시간이 없다고? 대체 무슨 소리야?",
						"english": "No time? What are you talking about?",
						"japanese": "時間がない？一体どういうことだ？",
						"chinese": "没时间了？你到底在说什么？",
						"french": "Plus le temps ? De quoi parles-tu ?",
						"spanish": "¿No hay tiempo? ¿De qué estás hablando?",
						"vietnamese": "Không có thời gian? Ngươi đang nói cái gì vậy?",
						"thai": "ไม่มีเวลาเหรอ? แกพูดเรื่องอะไรน่ะ?",
						"hindi": "समय नहीं है? तुम क्या बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "Glimmer의 계약은… 널 서서히 파멸로 이끌 거야.",
						"english": "Glimmer's contract... will slowly lead you to ruin.",
						"japanese": "Glimmerとの契約は… お前をゆっくりと破滅へと導くだろう。",
						"chinese": "Glimmer的契约… 会慢慢将你引向毁灭。",
						"french": "Le contrat de Glimmer... te mènera lentement à ta perte.",
						"spanish": "El contrato de Glimmer... te llevará lentamente a la ruina.",
						"vietnamese": "Khế ước của Glimmer... sẽ dần dần đẩy ngươi vào diệt vong.",
						"thai": "สัญญาสีจาง... จะค่อยๆ นำเจ้าไปสู่ความพินาศ",
						"hindi": "Glimmer का अनुबंध... तुम्हें धीरे-धीरे बर्बादी की ओर ले जाएगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "주변의 얼음이 빠르게 녹아내린다. 알 수 없는 불길한 징조였다.",
						"english": "The surrounding ice melts rapidly. It was an ominous sign.",
						"japanese": "周囲の氷が急速に溶けていく。不吉な予兆だった。",
						"chinese": "周围的冰迅速融化。这是一个不祥的预兆。",
						"french": "La glace environnante fond rapidement. C'était un signe inquiétant.",
						"spanish": "El hielo circundante se derrite rápidamente. Era un signo ominoso.",
						"vietnamese": "Băng xung quanh tan chảy nhanh chóng. Đó là một điềm báo gở.",
						"thai": "น้ำแข็งรอบๆ ละลายอย่างรวดเร็ว นี่คือลางบอกเหตุร้ายที่ไม่อาจทราบได้",
						"hindi": "आस-पास की बर्फ तेजी से पिघल रही है। यह एक अशुभ संकेत था।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 덫에 걸린 건가…",
						"english": "...Damn it. Am I trapped...?",
						"japanese": "…ちくしょう。罠にはまったのか…",
						"chinese": "…该死。中陷阱了吗…",
						"french": "...Mince. Suis-je piégé...?",
						"spanish": "...Maldita sea. ¿Caí en una trampa...?",
						"vietnamese": "...Chết tiệt. Bị mắc bẫy rồi sao...",
						"thai": "...ให้ตายสิ ติดกับดักเข้าแล้วเหรอ...",
						"hindi": "...धिक्कार है। क्या मैं फंस गया...?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어리석은 인간들. 탐욕은 결국 너희를 집어삼킬 것이다.",
						"english": "Foolish humans. Greed will eventually consume you.",
						"japanese": "愚かな人間ども。強欲はやがてお前たちを飲み込むだろう。",
						"chinese": "愚蠢的人类。贪婪终将吞噬你们。",
						"french": "Humains insensés. La cupidité finira par vous consumer.",
						"spanish": "Humanos necios. La codicia acabará por consumiros.",
						"vietnamese": "Những kẻ ngu ngốc. Lòng tham cuối cùng sẽ nuốt chửng các ngươi.",
						"thai": "มนุษย์ที่โง่เขลา ความโลภจะกลืนกินพวกเจ้าในที่สุด",
						"hindi": "मूर्ख इंसानो। लालच तुम्हें अंततः निगल जाएगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 뭔데 우리 앞을 막아서!",
						"english": "Shut up! Who are you to block our way!",
						"japanese": "黙れ！お前は何様だ、我々の邪魔をするな！",
						"chinese": "闭嘴！你算什么东西，竟敢挡我们的路！",
						"french": "Tais-toi ! Qui es-tu pour nous barrer la route !",
						"spanish": "¡Cállate! ¡¿Quién eres tú para interponerte en nuestro camino?!",
						"vietnamese": "Im đi! Ngươi là ai mà dám chặn đường chúng ta!",
						"thai": "หุบปาก! แกเป็นใครถึงมาขวางทางพวกเรา!",
						"hindi": "चुप रहो! तुम कौन होते हो हमारा रास्ता रोकने वाले!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 시스템의 수호자. 너희의 어리석음을 심판할 자다.",
						"english": "I am the guardian of the system. The one who will judge your foolishness.",
						"japanese": "私はシステムの守護者。お前たちの愚かさを裁く者だ。",
						"chinese": "我是系统的守护者。审判你们愚蠢之人。",
						"french": "Je suis le gardien du système. Celui qui jugera votre folie.",
						"spanish": "Soy el guardián del sistema. Quien juzgará vuestra necedad.",
						"vietnamese": "Ta là người bảo hộ hệ thống. Kẻ sẽ phán xét sự ngu ngốc của các ngươi.",
						"thai": "ข้าคือผู้พิทักษ์ระบบ ผู้ที่จะตัดสินความโง่เขลาของพวกเจ้า",
						"hindi": "मैं सिस्टम का संरक्षक हूँ। जो तुम्हारी मूर्खता का न्याय करेगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "비켜! 우리가 갈 길을 막지 마!",
						"english": "Get out of the way! Don't block our path!",
						"japanese": "どけ！我々の行く手を阻むな！",
						"chinese": "让开！别挡我们的路！",
						"french": "Écarte-toi ! Ne bloque pas notre chemin !",
						"spanish": "¡Apártate! ¡No nos bloquees el camino!",
						"vietnamese": "Tránh ra! Đừng cản đường chúng ta!",
						"thai": "หลีกไป! อย่าขวางทางเรา!",
						"hindi": "हट जाओ! हमारा रास्ता मत रोको!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "후회하게 될 것이다. 탐욕의 끝을 보여주마.",
						"english": "You will regret it. I will show you the end of greed.",
						"japanese": "後悔することになるだろう。強欲の末路を見せてやる。",
						"chinese": "你会后悔的。我将向你展示贪婪的结局。",
						"french": "Tu le regretteras. Je te montrerai la fin de la cupidité.",
						"spanish": "Lo lamentarás. Te mostraré el fin de la codicia.",
						"vietnamese": "Ngươi sẽ phải hối hận. Ta sẽ cho ngươi thấy kết cục của lòng tham.",
						"thai": "เจ้าจะต้องเสียใจ ข้าจะแสดงจุดจบของความโลภให้เจ้าเห็น",
						"hindi": "तुम्हें पछताना पड़ेगा। मैं तुम्हें लालच का अंत दिखाऊंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…아직 끝나지 않았다. Glimmer의 계약은… 네 영혼에 새겨졌으니…",
						"english": "...It's not over yet. Glimmer's contract... is etched into your soul...",
						"japanese": "…まだ終わっていない。Glimmerとの契約は… お前の魂に刻み込まれているからな…",
						"chinese": "…还没结束。Glimmer的契约… 已刻在你的灵魂深处…",
						"french": "...Ce n'est pas encore fini. Le contrat de Glimmer... est gravé dans ton âme...",
						"spanish": "...Aún no ha terminado. El contrato de Glimmer... está grabado en tu alma...",
						"vietnamese": "...Chưa kết thúc đâu. Khế ước của Glimmer... đã khắc sâu vào linh hồn ngươi rồi...",
						"thai": "...ยังไม่จบ Glimmer's contract... ถูกสลักไว้ในวิญญาณของเจ้าแล้ว...",
						"hindi": "...अभी खत्म नहीं हुआ है। Glimmer का अनुबंध... तुम्हारी आत्मा में अंकित हो चुका है..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 줄 알았는데. 또 다른 시작인가.",
						"english": "...I thought it was over. Is this another beginning?",
						"japanese": "…終わったと思ったのに。また別の始まりなのか。",
						"chinese": "……我还以为结束了。这又是另一个开始吗？",
						"french": "...Je croyais que c'était fini. Est-ce un autre commencement ?",
						"spanish": "...Pensé que había terminado. ¿Es este otro comienzo?",
						"vietnamese": "...Tưởng đã kết thúc rồi. Đây lại là một khởi đầu khác sao?",
						"thai": "...นึกว่าจะจบแล้ว. นี่คือการเริ่มต้นอีกครั้งงั้นหรือ?",
						"hindi": "...मुझे लगा कि यह खत्म हो गया है। क्या यह एक और शुरुआत है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'시스템의 수호자'는 그렇게 사라졌다. 그러나 불길한 예감은 더욱 짙어졌다.",
						"english": "The 'System's Guardian' vanished just like that. But an ominous premonition grew stronger.",
						"japanese": "『システムの守護者』はそうして消え去った。しかし、不吉な予感はさらに濃くなった。",
						"chinese": "“系统的守护者”就这样消失了。然而，不祥的预感却越来越强烈。",
						"french": "Le 'Gardien du Système' disparut ainsi. Mais une prémonition sinistre s'intensifia.",
						"spanish": "El 'Guardián del Sistema' desapareció así. Pero una premonición ominosa se hizo más fuerte.",
						"vietnamese": "'Người bảo hộ hệ thống' đã biến mất như vậy. Nhưng điềm báo gở ngày càng trở nên rõ rệt.",
						"thai": "'ผู้พิทักษ์ระบบ' ได้หายไปเช่นนั้น. แต่ลางสังหรณ์อันน่ากลัวกลับเข้มข้นขึ้น.",
						"hindi": "'सिस्टम का संरक्षक' ऐसे ही गायब हो गया। लेकिन एक अशुभ पूर्वसूचना और गहरी हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "계약의 덫은 더 깊숙이 박혔고, 시간은 더욱 빠르게 흐르고 있었다.",
						"english": "The trap of the contract was set deeper, and time was flowing even faster.",
						"japanese": "契約の罠はさらに深く仕掛けられ、時間はより速く流れていた。",
						"chinese": "契约的陷阱埋得更深了，时间也流逝得更快了。",
						"french": "Le piège du contrat était enfoncé plus profondément, et le temps s'écoulait encore plus vite.",
						"spanish": "La trampa del contrato estaba más arraigada, y el tiempo corría aún más rápido.",
						"vietnamese": "Cái bẫy của khế ước đã cắm sâu hơn, và thời gian trôi đi nhanh hơn nữa.",
						"thai": "กับดักของสัญญาถูกฝังลึกขึ้น, และเวลาก็ไหลผ่านไปเร็วยิ่งขึ้น.",
						"hindi": "अनुबंध का जाल और गहरा होता गया, और समय और तेजी से बह रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "다음은… 어디로 가야 하는 거지…",
						"english": "Next... where should I go...?",
						"japanese": "次は…どこへ行けばいいんだ…",
						"chinese": "接下来……我该去哪里……",
						"french": "Ensuite... où dois-je aller... ?",
						"spanish": "Luego... ¿a dónde debo ir...?",
						"vietnamese": "Tiếp theo... phải đi đâu đây...",
						"thai": "ต่อไป... ฉันควรจะไปที่ไหนดี...",
						"hindi": "अगला... मुझे कहाँ जाना चाहिए...?"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "하찮은 저항… 결국 너희는 시스템의 먹이가 될 뿐.",
						"english": "Useless resistance... In the end, you'll just be fodder for the System.",
						"japanese": "取るに足らない抵抗…結局お前たちはシステムの餌食になるだけだ。",
						"chinese": "微不足道的抵抗……最终你们只会成为系统的饵食。",
						"french": "Résistance futile... Au final, vous ne serez que de la chair à canon pour le Système.",
						"spanish": "Resistencia insignificante... Al final, solo seréis pasto para el Sistema.",
						"vietnamese": "Sự kháng cự vô ích... Cuối cùng, các ngươi sẽ chỉ là con mồi của Hệ thống.",
						"thai": "การต่อต้านที่ไร้ค่า... สุดท้ายพวกเจ้าก็จะเป็นเพียงเหยื่อของระบบเท่านั้น.",
						"hindi": "तुच्छ प्रतिरोध... अंत में, तुम सिर्फ़ सिस्टम का शिकार बनोगे।"
					}
				},
				{
					"content": {
						"korean": "…다시, 반드시 돌아온다! 이대로 포기할 순 없어!",
						"english": "...I will definitely return! I can't give up like this!",
						"japanese": "…必ず、また戻ってくる！このまま諦めるわけにはいかない！",
						"chinese": "……我一定会回来！不能就这样放弃！",
						"french": "...Je reviendrai absolument ! Je ne peux pas abandonner comme ça !",
						"spanish": "...¡Definitivamente regresaré! ¡No puedo rendirme así!",
						"vietnamese": "...Nhất định sẽ trở lại! Không thể bỏ cuộc như thế này!",
						"thai": "...ฉันจะกลับมาแน่นอน! จะยอมแพ้แบบนี้ไม่ได้!",
						"hindi": "...मैं ज़रूर वापस आऊँगा! मैं ऐसे हार नहीं मान सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기대하마, 너희의 파멸을. 어리석은 용기여.",
						"english": "I await your destruction. O foolish courage.",
						"japanese": "期待しているぞ、お前たちの破滅を。愚かな勇気よ。",
						"chinese": "我期待着你们的毁灭。啊，愚蠢的勇气。",
						"french": "J'attends votre destruction. Ô courage insensé.",
						"spanish": "Espero vuestra destrucción. Oh, estúpida valentía.",
						"vietnamese": "Ta chờ đợi sự diệt vong của các ngươi. Ôi, lòng dũng cảm ngu xuẩn.",
						"thai": "ข้าจะรอคอยการล่มสลายของพวกเจ้า. โอ้ ความกล้าหาญอันโง่เขลา.",
						"hindi": "मैं तुम्हारी तबाही का इंतज़ार कर रहा हूँ। हे मूर्ख साहस।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"북방의 혹독한 얼음 대지. 또 다른 거래의 그림자가 드리웠다.",
			"더 큰 것을 탐하는 순간, Glimmer의 미소는 차갑게 변했다.",
			"희생된 자들의 비극. 그리고 멈추지 않는 시간.",
			"계약의 덫은 점점 더 깊숙이 파고들었다."
		],
		"english": [
			"The harsh, icy lands of the North. Another shadow of a deal loomed.",
			"The moment they craved something greater, Glimmer's smile turned cold.",
			"The tragedy of the sacrificed. And time, ceaseless.",
			"The trap of the contract dug ever deeper."
		],
		"japanese": [
			"北の過酷な氷の大地。新たな取引の影が忍び寄る。",
			"より大きなものを貪欲に求めた瞬間、Glimmerの微笑みは冷たく変わった。",
			"犠牲となった者たちの悲劇。そして止まらない時間。",
			"契約の罠は、ますます深く食い込んだ。"
		],
		"chinese": [
			"北方严酷的冰冻大地。另一场交易的阴影笼罩。",
			"贪图更大之物时，Glimmer的笑容变得冰冷。",
			"牺牲者的悲剧。以及永不停歇的时间。",
			"契约的陷阱越陷越深。"
		],
		"french": [
			"Les terres glacées et rudes du Nord. L'ombre d'une autre transaction planait.",
			"Au moment où ils convoitaient quelque chose de plus grand, le sourire de Glimmer devint froid.",
			"La tragédie des sacrifiés. Et le temps, incessant.",
			"Le piège du contrat s'enfonçait de plus en plus profondément."
		],
		"spanish": [
			"Las duras y gélidas tierras del Norte. La sombra de otro trato se cernía.",
			"En el instante en que anhelaron algo mayor, la sonrisa de Glimmer se volvió fría.",
			"La tragedia de los sacrificados. Y el tiempo, implacable.",
			"La trampa del contrato se hundía cada vez más."
		],
		"vietnamese": [
			"Vùng đất băng giá khắc nghiệt phương Bắc. Một cái bóng giao dịch khác bao trùm.",
			"Khoảnh khắc họ khao khát điều gì đó lớn lao hơn, nụ cười của Glimmer trở nên lạnh lùng.",
			"Bi kịch của những kẻ hy sinh. Và thời gian không ngừng trôi.",
			"Cái bẫy của hợp đồng ngày càng đào sâu."
		],
		"thai": [
			"ดินแดนน้ำแข็งอันโหดร้ายทางเหนือ เงาของการค้าขายอีกครั้งปกคลุม",
			"ทันทีที่พวกเขาโลภมาก Glimmer ก็ยิ้มเย็นชา",
			"โศกนาฏกรรมของผู้ที่ถูกสังเวย และเวลาที่ไม่เคยหยุดนิ่ง",
			"กับดักแห่งสัญญายิ่งหยั่งลึกขึ้นเรื่อยๆ"
		],
		"hindi": [
			"उत्तर की कठोर, बर्फीली भूमि। एक और सौदे की परछाई मंडरा रही थी。",
			"जैसे ही उन्होंने कुछ बड़ा चाहा, Glimmer की मुस्कान ठंडी हो गई।",
			"बलिदानियों की त्रासदी। और समय, अथक।",
			"अनुबंध का जाल और गहरा होता गया।"
		]
	}
} as const;
