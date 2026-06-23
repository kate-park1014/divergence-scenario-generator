export const scenario_modern_staticecho_73_01 = {
	"scenario_id": "modern_staticecho_73_01",
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
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "도시의 모든 스크린이 섬광처럼 번뜩였다. 'StaticEcho'의 경고가 도시를 뒤덮었다.",
						"english": "All city screens flickered like flashes. 'StaticEcho' warnings engulfed the city.",
						"japanese": "都市中のスクリーンが閃光のように点滅した。「StaticEcho」の警告が都市を覆った。",
						"chinese": "城市所有屏幕闪烁如电光。“StaticEcho”的警告笼罩城市。",
						"french": "Tous les écrans de la ville scintillèrent comme des éclairs. Les avertissements de 'StaticEcho' envahirent la ville.",
						"spanish": "Todas las pantallas de la ciudad parpadearon como relámpagos. Las advertencias de 'StaticEcho' envolvieron la ciudad.",
						"vietnamese": "Mọi màn hình trong thành phố nhấp nháy như chớp. Cảnh báo của 'StaticEcho' bao trùm thành phố.",
						"thai": "ทุกหน้าจอในเมืองกะพริบราวกับแสงวาบ คำเตือนของ 'StaticEcho' ปกคลุมทั่วเมือง",
						"hindi": "शहर की सभी स्क्रीनें बिजली की तरह चमकीं। 'स्टेटिकइको' की चेतावनियों ने शहर को घेर लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체 무슨 일이야? 다들 미쳐가는 것 같아.",
						"english": "What in the world is happening? Everyone seems to be losing their minds.",
						"japanese": "いったい何が起こってるの？ みんなおかしくなってるみたい。",
						"chinese": "这到底是怎么回事？大家好像都疯了。",
						"french": "Qu'est-ce qui se passe ? Tout le monde semble devenir fou.",
						"spanish": "¿Qué diablos está pasando? Todos parecen estar perdiendo la cabeza.",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy? Mọi người dường như đang phát điên.",
						"thai": "เกิดอะไรขึ้นเนี่ย? ทุกคนดูเหมือนจะเสียสติไปแล้ว",
						"hindi": "यह सब क्या हो रहा है? सब लोग पागल होते जा रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하긴. 쟤들은 뭘 믿어야 할지 모르니까, 아무거나 믿는 거지.",
						"english": "Well, since they don't know what to believe, they'll believe anything.",
						"japanese": "まあね。あいつらは何を信じたらいいかわからないから、何でも信じるのさ。",
						"chinese": "也是。他们不知道该相信什么，所以什么都信。",
						"french": "C'est vrai. Puisqu'ils ne savent pas quoi croire, ils croient n'importe quoi.",
						"spanish": "Cierto. Como no saben qué creer, creen cualquier cosa.",
						"vietnamese": "Phải. Vì họ không biết nên tin vào cái gì, nên họ tin vào bất cứ điều gì.",
						"thai": "ก็จริงนะ พวกนั้นไม่รู้จะเชื่ออะไร ก็เลยเชื่อไปหมดทุกอย่าง",
						"hindi": "हाँ। क्योंकि उन्हें नहीं पता कि क्या मानना है, इसलिए वे कुछ भी मान लेते हैं।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "린? 너는 괜찮아 보여.",
						"english": "Lin? You seem fine.",
						"japanese": "リン？ あなたは大丈夫そうだね。",
						"chinese": "琳？你看起来没事。",
						"french": "Lin ? Tu as l'air d'aller bien.",
						"spanish": "¿Lin? Pareces estar bien.",
						"vietnamese": "Lin? Bạn trông có vẻ ổn.",
						"thai": "ลิน? เธอดูสบายดีนะ",
						"hindi": "लिन? तुम ठीक लग रही हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "소문은 소문일 뿐이야. 진짜 문제는 따로 있지.",
						"english": "Rumors are just rumors. The real problem lies elsewhere.",
						"japanese": "噂はただの噂さ。本当の問題は別にある。",
						"chinese": "谣言只是谣言。真正的问题另有所在。",
						"french": "Les rumeurs ne sont que des rumeurs. Le vrai problème est ailleurs.",
						"spanish": "Los rumores son solo rumores. El verdadero problema está en otra parte.",
						"vietnamese": "Tin đồn chỉ là tin đồn thôi. Vấn đề thật sự nằm ở chỗ khác.",
						"thai": "ข่าวลือก็แค่ข่าวลือ ปัญหาที่แท้จริงอยู่ที่อื่น",
						"hindi": "अफवाहें सिर्फ अफवाहें हैं। असली समस्या कहीं और है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "일부 통신망이 마비됐다. 불안감은 극에 달했다.",
						"english": "Some communication networks were down. Anxiety reached its peak.",
						"japanese": "一部の通信網が麻痺した。不安感は頂点に達した。",
						"chinese": "部分通讯网络瘫痪。不安情绪达到了顶点。",
						"french": "Certains réseaux de communication étaient paralysés. L'anxiété atteignit son paroxysme.",
						"spanish": "Algunas redes de comunicación colapsaron. La ansiedad alcanzó su punto máximo.",
						"vietnamese": "Một số mạng truyền thông đã bị tê liệt. Sự lo lắng lên đến đỉnh điểm.",
						"thai": "เครือข่ายการสื่อสารบางส่วนหยุดชะงัก ความวิตกกังวลพุ่งถึงขีดสุด",
						"hindi": "कुछ संचार नेटवर्क ठप हो गए। चिंता चरम पर पहुंच गई।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "봤어? 마비될 때마다 옛날 조직 로고가 떴다는 소문.",
						"english": "Did you see? The rumor about the old organization's logo appearing every time one gets paralyzed.",
						"japanese": "見た？麻痺するたびに、昔の組織のロゴが浮かび上がったって噂。",
						"chinese": "你听说了吗？每次麻痹的时候，都会出现以前组织标志的传闻。",
						"french": "Tu as vu ? La rumeur dit que l'ancien logo de l'organisation apparaît à chaque fois qu'on est paralysé.",
						"spanish": "¿Viste? El rumor de que el antiguo logo de la organización aparecía cada vez que te paralizabas.",
						"vietnamese": "Nghe nói chưa? Có tin đồn là mỗi khi bị tê liệt, logo của tổ chức cũ lại hiện lên.",
						"thai": "เห็นยัง? ข่าวลือที่ว่าโลโก้องค์กรเก่าปรากฏขึ้นทุกครั้งที่ถูกทำให้เป็นอัมพาต",
						"hindi": "देखा? अफवाह है कि जब भी कोई लकवाग्रस्त होता है, तो पुरानी संस्था का लोगो दिखता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "또 시작이네. 무슨 근거도 없는 소문을.",
						"english": "Here we go again. Another baseless rumor.",
						"japanese": "また始まったよ。何の根拠もない噂を。",
						"chinese": "又来了。一些毫无根据的谣言。",
						"french": "Ça recommence. Encore une rumeur sans fondement.",
						"spanish": "Aquí vamos de nuevo. Otro rumor sin fundamento.",
						"vietnamese": "Lại nữa rồi. Toàn mấy tin đồn vô căn cứ.",
						"thai": "มาอีกแล้วเหรอ? ข่าวลือที่ไม่มีมูลความจริงอะไรเลย",
						"hindi": "फिर से वही। कोई आधारहीन अफवाह।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그치만 왠지 진짜 같잖아?",
						"english": "But somehow, it feels real, doesn't it?",
						"japanese": "でも、なんだか本当のことみたいじゃない？",
						"chinese": "但是不知怎么的，感觉像是真的，不是吗？",
						"french": "Mais on dirait que c'est vrai, non ?",
						"spanish": "Pero de alguna manera, parece real, ¿no?",
						"vietnamese": "Nhưng sao nghe cứ như thật ấy nhỉ?",
						"thai": "แต่ทำไมมันถึงรู้สึกเหมือนจริงจังเลยล่ะ?",
						"hindi": "पर किसी तरह, यह सच लगता है, है ना?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 제일 위험한 거야. 보고 싶은 것만 믿는 거.",
						"english": "That's the most dangerous thing. Believing only what you want to see.",
						"japanese": "それが一番危険なんだ。見たいものだけを信じること。",
						"chinese": "那才是最危险的。只相信你想要看到的东西。",
						"french": "C'est la chose la plus dangereuse. Ne croire que ce que l'on veut voir.",
						"spanish": "Eso es lo más peligroso. Creer solo lo que quieres ver.",
						"vietnamese": "Đó mới là điều nguy hiểm nhất. Chỉ tin vào những gì mình muốn thấy.",
						"thai": "นั่นแหละคือสิ่งที่อันตรายที่สุด การเชื่อแต่สิ่งที่อยากจะเห็น",
						"hindi": "वही सबसे खतरनाक है। केवल वही मानना जो तुम देखना चाहते हो।"
					},
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "StaticEcho의 메시지는 점점 더 노골적으로 도시를 휘감았다.",
						"english": "StaticEcho's messages increasingly enveloped the city with blatant intent.",
						"japanese": "StaticEchoのメッセージは、ますます露骨に都市を包み込んだ。",
						"chinese": "StaticEcho 的信息越来越露骨地笼罩着这座城市。",
						"french": "Les messages de StaticEcho enveloppaient la ville de manière de plus en plus flagrante.",
						"spanish": "Los mensajes de StaticEcho envolvían la ciudad de forma cada vez más descarada.",
						"vietnamese": "Những thông điệp của StaticEcho ngày càng công khai bao trùm lấy thành phố.",
						"thai": "ข้อความของ StaticEcho ยิ่งชัดเจนและแพร่หลายไปทั่วเมือง",
						"hindi": "StaticEcho के संदेश खुले तौर पर शहर को घेर रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이번 메시지 들었어? '복종'이랑 '질서'를 계속 강조하더라.",
						"english": "Did you hear this message? It kept emphasizing 'obedience' and 'order'.",
						"japanese": "今回のメッセージ聞いた？「服従」と「秩序」をずっと強調してたよ。",
						"chinese": "你听到这次的信息了吗？它一直在强调“服从”和“秩序”。",
						"french": "Tu as entendu ce message ? Il n'arrêtait pas de souligner 'obéissance' et 'ordre'.",
						"spanish": "¿Escuchaste este mensaje? No dejaba de enfatizar 'obediencia' y 'orden'.",
						"vietnamese": "Cậu nghe tin nhắn này chưa? Nó cứ nhấn mạnh 'phục tùng' và 'trật tự' mãi.",
						"thai": "ได้ยินข้อความนี้ไหม? มันเน้นย้ำแต่เรื่อง 'การเชื่อฟัง' และ 'ระเบียบ' ตลอดเลย",
						"hindi": "यह संदेश सुना? यह 'आज्ञाकारिता' और 'व्यवस्था' पर लगातार जोर दे रहा था।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 단어들만 반복하는 게 우연일까? 사람들을 길들이려는 수작이지.",
						"english": "Is it a coincidence that they keep repeating those words? It's a ploy to tame people.",
						"japanese": "その言葉だけを繰り返すのが偶然だと思う？人々を手なずけようとする策略だよ。",
						"chinese": "他们反复重复这些词是巧合吗？这是一种驯服人们的策略。",
						"french": "Est-ce un hasard qu'ils répètent ces mots ? C'est une ruse pour apprivoiser les gens.",
						"spanish": "¿Es una coincidencia que sigan repitiendo esas palabras? Es una estratagema para domesticar a la gente.",
						"vietnamese": "Việc chúng cứ lặp đi lặp lại những từ đó là ngẫu nhiên sao? Đó là một âm mưu để thuần hóa mọi người.",
						"thai": "การที่พวกมันเอาแต่พูดคำพวกนั้นซ้ำๆ เป็นเรื่องบังเอิญเหรอ? มันเป็นอุบายที่จะควบคุมผู้คนต่างหาก",
						"hindi": "क्या यह सिर्फ उन शब्दों को दोहराना एक संयोग है? यह लोगों को वश में करने की चाल है।"
					},
					"emotion": "angry",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼 우리는 그냥 당해야 해?",
						"english": "So, are we just supposed to endure it?",
						"japanese": "じゃあ、私たちはただやられっぱなしなの？",
						"chinese": "那我们只能束手就擒吗？",
						"french": "Alors, on doit juste subir ?",
						"spanish": "¿Entonces solo tenemos que aguantar?",
						"vietnamese": "Vậy chúng ta cứ phải chịu đựng thôi sao?",
						"thai": "งั้นพวกเราก็ต้องยอมทนอย่างนั้นเหรอ?",
						"hindi": "तो, हमें बस सहना होगा?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 저들이 원하는 대로 생각하지 않는 것. 그게 시작이야.",
						"english": "No. Not thinking the way they want us to. That's the beginning.",
						"japanese": "違う。彼らが望むように考えないこと。それが始まりだ。",
						"chinese": "不。不要按照他们想要的方式思考。那就是开始。",
						"french": "Non. Ne pas penser comme ils veulent. C'est le début.",
						"spanish": "No. No pensar como ellos quieren. Ese es el comienzo.",
						"vietnamese": "Không. Không nghĩ theo cách chúng muốn. Đó mới là sự khởi đầu.",
						"thai": "ไม่ การไม่คิดไปตามที่พวกมันต้องการ นั่นแหละคือจุดเริ่มต้น",
						"hindi": "नहीं। वैसे नहीं सोचना जैसे वे चाहते हैं। वही शुरुआत है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 혼란은 걷잡을 수 없었다. 모든 것이 흐릿해졌다.",
						"english": "The city's chaos was uncontrollable. Everything became blurred.",
						"japanese": "都市の混乱は手に負えなかった。すべてがぼやけていった。",
						"chinese": "城市的混乱无法控制。一切都变得模糊不清。",
						"french": "Le chaos de la ville était incontrôlable. Tout devenait flou.",
						"spanish": "El caos de la ciudad era incontrolable. Todo se volvió borroso.",
						"vietnamese": "Sự hỗn loạn của thành phố không thể kiểm soát được. Mọi thứ trở nên mờ mịt.",
						"thai": "ความวุ่นวายในเมืองไม่สามารถควบคุมได้ ทุกสิ่งเริ่มเลือนราง",
						"hindi": "शहर की अराजकता अनियंत्रित थी। सब कुछ धुंधला हो गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "StaticEcho 잔상에… 찢어진 양복이나 낡은 시계가 보인대.",
						"english": "StaticEcho's afterimage... shows torn suits or old clocks.",
						"japanese": "StaticEchoの残像に…破れたスーツや古い時計が見えるらしい。",
						"chinese": "StaticEcho的残影中…似乎能看到破旧的西装或老旧的时钟。",
						"french": "Dans le rémanence de StaticEcho... on verrait des costumes déchirés ou de vieilles horloges.",
						"spanish": "En la estela de StaticEcho... se ven trajes rotos o relojes antiguos.",
						"vietnamese": "Trong tàn dư của StaticEcho... người ta thấy những bộ vest rách hay đồng hồ cũ.",
						"thai": "ในภาพติดตาของ StaticEcho... มีคนเห็นชุดสูทขาดๆ หรือนาฬิกาเก่าๆ",
						"hindi": "स्टैटिकइको की अनुकृति में... फटे सूट या पुरानी घड़ियाँ दिखती हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "디지털 세상에 어울리지 않는 아날로그 파편이라니. 이상하지 않아?",
						"english": "Analog fragments that don't fit a digital world. Isn't that odd?",
						"japanese": "デジタル世界に似つかわしくないアナログの破片なんて。おかしいと思わない？",
						"chinese": "与数字世界格格不入的模拟碎片。你不觉得很奇怪吗？",
						"french": "Des fragments analogiques qui ne collent pas avec un monde numérique. Bizarre, non ?",
						"spanish": "Fragmentos analógicos que no encajan en un mundo digital. ¿No es extraño?",
						"vietnamese": "Những mảnh analog không hợp với thế giới kỹ thuật số. Không kỳ lạ sao?",
						"thai": "เศษเสี้ยวแอนะล็อกที่ไม่เข้ากับโลกดิจิทัล ไม่แปลกเหรอ?",
						"hindi": "डिजिटल दुनिया में बेमेल एनालॉग टुकड़े। अजीब नहीं है क्या?"
					}
				},
				{
					"content": {
						"korean": "그냥 오류 아닐까?",
						"english": "Maybe it's just a glitch?",
						"japanese": "ただのエラーじゃないの？",
						"chinese": "会不会只是个错误？",
						"french": "C'est peut-être juste une erreur ?",
						"spanish": "¿No será solo un error?",
						"vietnamese": "Chỉ là lỗi thôi chăng?",
						"thai": "อาจจะเป็นแค่ความผิดพลาด?",
						"hindi": "शायद यह सिर्फ एक गड़बड़ है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "세상에 완벽한 오류는 없어. 모든 소문엔 시작점이 있지.",
						"english": "There's no perfect glitch. Every rumor has a source.",
						"japanese": "完璧なエラーなんてない。全ての噂には始まりがある。",
						"chinese": "世上没有完美的错误。所有传闻都有其开端。",
						"french": "Il n'y a pas d'erreur parfaite. Chaque rumeur a une origine.",
						"spanish": "No hay errores perfectos. Todo rumor tiene un origen.",
						"vietnamese": "Không có lỗi nào là hoàn hảo. Mọi tin đồn đều có điểm khởi đầu.",
						"thai": "ไม่มีข้อผิดพลาดที่สมบูรณ์แบบ ทุกข่าวลือมีจุดเริ่มต้น",
						"hindi": "दुनिया में कोई भी गलती परफेक्ट नहीं होती। हर अफवाह का एक स्रोत होता है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 나는 그저 시스템… 또 다른… '질서'가… 올 것이다…",
						"english": "Ugh... I am merely the system... Another... 'Order'... will come...",
						"japanese": "くぅ… 私はただのシステム… また別の… 「秩序」が… 来るだろう…",
						"chinese": "咳… 我只是系统… 另一个… “秩序”… 将会到来…",
						"french": "Urgh... Je ne suis qu'un système... Un autre... 'Ordre'... viendra...",
						"spanish": "Uf... Solo soy el sistema... Otro... 'Orden'... vendrá...",
						"vietnamese": "Khụ... Ta chỉ là hệ thống... Một 'Trật tự' khác... sẽ đến...",
						"thai": "อึก... ข้าเป็นเพียงระบบ... 'ระเบียบ' อื่น... จะมาถึง...",
						"hindi": "उफ़... मैं बस सिस्टम हूँ... एक और... 'व्यवस्था'... आएगी..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 다른 질서? 대체 뭘 말하는 거야?",
						"english": "Another Order? What exactly are you talking about?",
						"japanese": "別の秩序？一体何を言っているんだ？",
						"chinese": "另一个秩序？你到底在说什么？",
						"french": "Un autre Ordre ? De quoi parlez-vous exactement ?",
						"spanish": "¿Otro Orden? ¿De qué estás hablando exactamente?",
						"vietnamese": "Một Trật tự khác? Ngươi đang nói về cái gì vậy?",
						"thai": "ระเบียบอื่น? คุณกำลังพูดถึงอะไรกันแน่?",
						"hindi": "एक और व्यवस्था? तुम ठीक-ठीक किस बारे में बात कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "저게 끝이 아니었나봐. 더 거대한 무언가가 있을지도 몰라.",
						"english": "That wasn't the end, it seems. Something greater might be out there.",
						"japanese": "あれは終わりじゃなかったみたいだ。もっと巨大な何かが存在するのかもしれない。",
						"chinese": "看来那不是结束。也许有更宏大的事物存在。",
						"french": "Ce n'était pas la fin, semble-t-il. Quelque chose de plus grand pourrait exister.",
						"spanish": "Parece que no fue el final. Algo más grande podría estar ahí fuera.",
						"vietnamese": "Hình như đó không phải là kết thúc. Có thể có một thứ gì đó vĩ đại hơn.",
						"thai": "ดูเหมือนว่านั่นไม่ใช่จุดจบ อาจมีบางสิ่งที่ยิ่งใหญ่กว่าอยู่ข้างนอกนั่น",
						"hindi": "लगता है वह अंत नहीं था। कुछ और भी बड़ा हो सकता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "혼란은 잠시 잦아들었지만, 도시는 여전히 불안했다.",
						"english": "The chaos subsided for a moment, but the city remained uneasy.",
						"japanese": "混乱は一時的に収まったが、都市は依然として不安だった。",
						"chinese": "混乱暂时平息，但城市依然不安。",
						"french": "Le chaos s'apaisa un instant, mais la ville restait inquiète.",
						"spanish": "El caos disminuyó por un momento, pero la ciudad seguía inquieta.",
						"vietnamese": "Hỗn loạn tạm thời lắng xuống, nhưng thành phố vẫn bất an.",
						"thai": "ความโกลาหลลดลงชั่วขณะ แต่เมืองยังคงไม่สงบสุข",
						"hindi": "अशांति कुछ देर के लिए थम गई, लेकिन शहर अभी भी अशांत था।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "소문의 뒤에 숨겨진 진실은, 이제 막 그 모습을 드러내기 시작했다.",
						"english": "The truth hidden behind the rumors was just beginning to reveal itself.",
						"japanese": "噂の裏に隠された真実が、今、その姿を現し始めた。",
						"chinese": "隐藏在谣言背后的真相，现在才刚刚开始显现。",
						"french": "La vérité cachée derrière les rumeurs commençait tout juste à se révéler.",
						"spanish": "La verdad oculta tras los rumores estaba empezando a revelarse.",
						"vietnamese": "Sự thật ẩn giấu đằng sau những tin đồn, giờ đây mới bắt đầu hé lộ.",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลังข่าวลือ เพิ่งจะเริ่มเผยโฉมออกมา",
						"hindi": "अफवाहों के पीछे छिपा सच, अब अपनी पहचान दिखाना शुरू कर रहा था।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 저항이군. 너는 결국 혼란 속에서 아무것도 바꾸지 못한다.",
						"english": "A pathetic resistance. You can change nothing in this chaos.",
						"japanese": "取るに足らない抵抗だ。お前は結局、この混乱の中で何も変えられない。",
						"chinese": "微不足道的抵抗。你最终无法在这混乱中改变任何事情。",
						"french": "Une résistance pathétique. Tu ne peux rien changer dans ce chaos.",
						"spanish": "Una resistencia patética. Al final, no podrás cambiar nada en este caos.",
						"vietnamese": "Một sự kháng cự đáng thương. Ngươi rốt cuộc không thể thay đổi được gì trong hỗn loạn này.",
						"thai": "การต่อต้านที่น่าสมเพช เจ้าไม่สามารถเปลี่ยนแปลงอะไรได้เลยในความวุ่นวายนี้",
						"hindi": "एक दयनीय प्रतिरोध। तुम इस अराजकता में कुछ भी नहीं बदल सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니, 끝나지 않았어. 진실을 파헤칠 때까지 멈추지 않아!",
						"english": "No, it's not over. I won't stop until I uncover the truth!",
						"japanese": "いや、終わってない。真実を暴くまで、私は止まらない！",
						"chinese": "不，还没有结束。在揭露真相之前，我不会停止！",
						"french": "Non, ce n'est pas fini. Je ne m'arrêterai pas avant d'avoir découvert la vérité !",
						"spanish": "No, no ha terminado. ¡No me detendré hasta desenterrar la verdad!",
						"vietnamese": "Không, chưa kết thúc. Tôi sẽ không dừng lại cho đến khi tìm ra sự thật!",
						"thai": "ไม่ มันยังไม่จบ ฉันจะไม่หยุดจนกว่าจะเปิดเผยความจริง!",
						"hindi": "नहीं, यह खत्म नहीं हुआ है। मैं सच का पर्दाफाश करने तक नहीं रुकूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "좌절 속에서도, 의지는 꺾이지 않았다.",
						"english": "Even in despair, the will remained unbroken.",
						"japanese": "挫折の中にあっても、意志は折れなかった。",
						"chinese": "即使在挫折中，意志也没有被动摇。",
						"french": "Même dans la frustration, la volonté ne fut pas brisée.",
						"spanish": "Incluso en la frustración, la voluntad no se rompió.",
						"vietnamese": "Ngay cả trong tuyệt vọng, ý chí vẫn không hề lung lay.",
						"thai": "แม้จะอยู่ในความสิ้นหวัง แต่เจตจำนงก็ยังไม่แตกสลาย",
						"hindi": "निराशा में भी, इच्छाशक्ति नहीं टूटी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마침내, 혼란의 근원과 마주했다. 거대한 그림자가 도시를 뒤덮었다.",
						"english": "Finally, I faced the source of chaos. A giant shadow enveloped the city.",
						"japanese": "ついに、混乱の根源と対峙した。巨大な影が都市を覆った。",
						"chinese": "终于，我面对了混乱的根源。巨大的阴影笼罩了城市。",
						"french": "Enfin, j'ai fait face à la source du chaos. Une ombre gigantesque enveloppait la ville.",
						"spanish": "Finalmente, me enfrenté al origen del caos. Una sombra gigantesca cubrió la ciudad.",
						"vietnamese": "Cuối cùng, tôi đối mặt với nguồn gốc của hỗn loạn. Một bóng đen khổng lồ bao trùm thành phố.",
						"thai": "ในที่สุด ก็เผชิญหน้ากับต้นตอของความวุ่นวาย เงาขนาดมหึมาปกคลุมทั่วเมือง",
						"hindi": "अंततः, मैंने अराजकता के स्रोत का सामना किया। एक विशाल परछाई ने शहर को ढक लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔군. 소문은 진실이 된다. 네가 믿든 믿지 않든.",
						"english": "You've come. Rumors become truth. Believe it or not.",
						"japanese": "来たか。噂は真実となる。信じようと信じまいと。",
						"chinese": "你来了。传闻终将成为现实。无论你信与不信。",
						"french": "Tu es venu. Les rumeurs deviennent vérité. Que tu le croies ou non.",
						"spanish": "Has venido. Los rumores se vuelven verdad. Lo creas o no.",
						"vietnamese": "Ngươi đã đến. Tin đồn sẽ trở thành sự thật. Dù ngươi có tin hay không.",
						"thai": "มาแล้วสินะ ข่าวลือจะกลายเป็นความจริง ไม่ว่าเจ้าจะเชื่อหรือไม่ก็ตาม",
						"hindi": "तुम आ गए। अफवाहें सच बन जाती हैं। चाहे तुम मानो या न मानो।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 StaticEcho의 근원이야? 이 모든 혼란의 주범이 너냐고!",
						"english": "You're the source of StaticEcho? You're behind all this chaos?!",
						"japanese": "お前がStaticEchoの根源か？この混乱全ての元凶はお前なのか！",
						"chinese": "你就是StaticEcho的根源？所有这些混乱都是你造成的？！",
						"french": "Tu es la source de StaticEcho ? C'est toi le maître d'œuvre de tout ce chaos ?!",
						"spanish": "¿Eres el origen de StaticEcho? ¿Eres el cerebro detrás de todo este caos?",
						"vietnamese": "Ngươi là nguồn gốc của StaticEcho sao? Ngươi là kẻ chủ mưu gây ra mọi hỗn loạn này à!",
						"thai": "แกคือต้นกำเนิดของ StaticEcho งั้นเหรอ? แกคือตัวการของความวุ่นวายทั้งหมดนี่สินะ!",
						"hindi": "तुम स्टैटिकइको का स्रोत हो? इस सारी अराजकता के पीछे तुम हो क्या?!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 질서를 바로잡는 자. 왜곡된 정보 속에서, 진실을 부여하는 자다.",
						"english": "I am merely... one who restores order. One who grants truth amidst distorted information.",
						"japanese": "私はただ…秩序を正す者。歪んだ情報の中で、真実を与える者だ。",
						"chinese": "我只不过是…拨乱反正之人。在扭曲的信息中，赋予真相之人。",
						"french": "Je ne suis que... celui qui restaure l'ordre. Celui qui accorde la vérité au milieu des informations déformées.",
						"spanish": "No soy más que... quien restablece el orden. Quien otorga la verdad en medio de la información distorsionada.",
						"vietnamese": "Ta chỉ là... kẻ lập lại trật tự. Kẻ ban sự thật giữa thông tin sai lệch.",
						"thai": "ข้าเป็นเพียง... ผู้ฟื้นฟูระเบียบ ผู้มอบความจริงท่ามกลางข้อมูลที่บิดเบือน",
						"hindi": "मैं केवल... व्यवस्था बहाल करने वाला हूँ। विकृत जानकारी के बीच सत्य प्रदान करने वाला।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 개소리야! 너 때문에 사람들이 고통받고 있어!",
						"english": "What nonsense! People are suffering because of you!",
						"japanese": "何をふざけたことを！お前のせいで人々が苦しんでいるんだぞ！",
						"chinese": "这算什么鬼话！人们都因为你而受苦！",
						"french": "Quelles conneries ! Les gens souffrent à cause de toi !",
						"spanish": "¡Qué tonterías! ¡La gente sufre por tu culpa!",
						"vietnamese": "Ngươi đang nói cái quái gì vậy! Mọi người đang đau khổ vì ngươi đấy!",
						"thai": "เหลวไหลสิ้นดี! ผู้คนกำลังเจ็บปวดเพราะแกนะ!",
						"hindi": "यह क्या बकवास है! तुम्हारी वजह से लोग पीड़ित हैं!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고통? 그것 또한 진실의 일부. 너도 곧 깨닫게 될 것이다.",
						"english": "Suffering? That too is part of the truth. You'll soon realize it.",
						"japanese": "苦痛？それもまた真実の一部。お前もいずれ気づくだろう。",
						"chinese": "痛苦？那也是真相的一部分。你很快就会明白的。",
						"french": "La souffrance ? C'est aussi une part de la vérité. Tu le comprendras bientôt.",
						"spanish": "¿Sufrimiento? Eso también es parte de la verdad. Pronto lo comprenderás.",
						"vietnamese": "Đau khổ ư? Đó cũng là một phần của sự thật. Ngươi rồi cũng sẽ sớm nhận ra thôi.",
						"thai": "ความเจ็บปวด? นั่นก็เป็นส่วนหนึ่งของความจริง เจ้าเองก็จะตระหนักได้ในไม่ช้า",
						"hindi": "पीड़ा? वह भी सत्य का एक हिस्सा है। तुम्हें भी जल्द ही इसका एहसास होगा।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시를 뒤덮은 디지털 혼란. 끝없이 경고 메시지가 흘러나왔다.",
			"'StaticEcho'. 정체불명의 존재에 대한 억측이 난무했다.",
			"사람들은 패닉에 빠졌다. 진실은 아무도 몰랐다.",
			"오직 소문만이, 현실이 되었다."
		],
		"english": [
			"Digital chaos engulfed the city. Warning messages streamed endlessly.",
			"'StaticEcho'. Speculation about an unknown entity ran wild.",
			"People panicked. No one knew the truth.",
			"Only rumors became reality."
		],
		"japanese": [
			"デジタルな混乱が都市を覆った。警告メッセージが絶え間なく流れ続けた。",
			"「StaticEcho」。正体不明の存在に関する憶測が飛び交った。",
			"人々はパニックに陥った。真実を知る者はいなかった。",
			"噂だけが現実となった。"
		],
		"chinese": [
			"数字化混乱笼罩城市。警告信息源源不断。",
			"“StaticEcho”。关于不明实体的猜测甚嚣尘上。",
			"人们陷入恐慌。真相无人知晓。",
			"唯有谣言，成了现实。"
		],
		"french": [
			"Un chaos numérique a englouti la ville. Des messages d'avertissement défilaient sans fin.",
			"\"StaticEcho\". Les spéculations sur une entité inconnue allaient bon train.",
			"Les gens ont paniqué. Personne ne connaissait la vérité.",
			"Seules les rumeurs devinrent réalité."
		],
		"spanish": [
			"Un caos digital cubrió la ciudad. Mensajes de advertencia fluían sin cesar.",
			"\"StaticEcho\". Las especulaciones sobre una entidad desconocida se desataron.",
			"La gente entró en pánico. Nadie sabía la verdad.",
			"Solo los rumores se hicieron realidad."
		],
		"vietnamese": [
			"Hỗn loạn kỹ thuật số bao trùm thành phố. Thông điệp cảnh báo không ngừng tuôn ra.",
			"'StaticEcho'. Những suy đoán về một thực thể vô danh lan tràn.",
			"Mọi người hoảng loạn. Không ai biết sự thật.",
			"Chỉ có tin đồn trở thành hiện thực."
		],
		"thai": [
			"ความวุ่นวายทางดิจิทัลปกคลุมเมือง ข้อความเตือนภัยหลั่งไหลไม่หยุด",
			"'StaticEcho' การคาดเดาเกี่ยวกับสิ่งมีชีวิตปริศนาแพร่สะพัด",
			"ผู้คนตื่นตระหนก ไม่มีใครรู้ความจริง",
			"มีเพียงข่าวลือเท่านั้นที่กลายเป็นความจริง"
		],
		"hindi": [
			"डिजिटल अराजकता ने शहर को अपनी चपेट में ले लिया। चेतावनी संदेश लगातार बह रहे थे।",
			"'स्टेटिकइको'। एक अज्ञात इकाई के बारे में अटकलें तेज़ हो गईं।",
			"लोग घबरा गए। सच कोई नहीं जानता था।",
			"केवल अफवाहें ही हकीकत बन गईं।"
		]
	}
} as const;
