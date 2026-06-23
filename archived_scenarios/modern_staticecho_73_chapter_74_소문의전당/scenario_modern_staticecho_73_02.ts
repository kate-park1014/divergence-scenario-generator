export const scenario_modern_staticecho_73_02 = {
	"scenario_id": "modern_staticecho_73_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"StaticEcho의 경고, 이제 개인을 지목한다.",
			"도시는 소문과 억측으로 들끓고, 진실은 뒷전이다.",
			"정보상 카이, 혼란 속에서 자신의 이득을 챙긴다.",
			"감시의 눈은 도시를 집어삼키고 있었다."
		],
		"english": [
			"StaticEcho's warning now targets individuals.",
			"The city seethes with rumors and speculation, truth is secondary.",
			"Kai, the informant, profits amidst the chaos.",
			"The eye of surveillance was devouring the city."
		],
		"japanese": [
			"StaticEchoの警告、今度は個人を指名する。",
			"街は噂と憶測で沸き立ち、真実は二の次だ。",
			"情報屋カイは、混乱の中で自身の利益を確保する。",
			"監視の目は都市を飲み込んでいた。"
		],
		"chinese": [
			"StaticEcho的警告，现在指向个人。",
			"城市充斥着谣言和猜测，真相被抛诸脑后。",
			"线人凯，在混乱中牟取私利。",
			"监视之眼正在吞噬这座城市。"
		],
		"french": [
			"L'avertissement de StaticEcho cible désormais des individus.",
			"La ville bouillonne de rumeurs et de spéculations, la vérité est secondaire.",
			"Kai, l'informateur, tire profit du chaos.",
			"L'œil de la surveillance dévorait la ville."
		],
		"spanish": [
			"La advertencia de StaticEcho ahora apunta a individuos.",
			"La ciudad hierve con rumores y especulaciones, la verdad es secundaria.",
			"Kai, el informante, saca provecho del caos.",
			"El ojo de la vigilancia devoraba la ciudad."
		],
		"vietnamese": [
			"Cảnh báo của StaticEcho, giờ đây nhắm vào cá nhân.",
			"Thành phố sôi sục với tin đồn và suy đoán, sự thật bị bỏ lại phía sau.",
			"Kai, kẻ cung cấp thông tin, trục lợi giữa sự hỗn loạn.",
			"Con mắt giám sát đang nuốt chửng thành phố."
		],
		"thai": [
			"คำเตือนของ StaticEcho ตอนนี้พุ่งเป้าไปที่บุคคล",
			"เมืองนี้เต็มไปด้วยข่าวลือและการคาดเดา ความจริงเป็นเรื่องรอง",
			"ไค พ่อค้าข้อมูล หาผลประโยชน์ท่ามกลางความโกลาหล",
			"สายตาของการเฝ้าระวังกำลังกลืนกินเมือง"
		],
		"hindi": [
			"StaticEcho की चेतावनी, अब व्यक्तियों को लक्षित करती है।",
			"शहर अफवाहों और अटकलों से भरा है, सच्चाई गौण है।",
			"काई, सूचना देने वाला, अराजकता के बीच लाभ कमाता है।",
			"निगरानी की आँखें शहर को निगल रही थीं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 스크린마다 개인을 지목하는 경고가 떴다. 불안이 번졌다.",
						"english": "Warnings targeting individuals appeared on every city screen. Unease spread.",
						"japanese": "都市のスクリーンごとに個人を指名する警告が点灯し、不安が広がった。",
						"chinese": "城市每个屏幕都出现了针对个人的警告。不安蔓延开来。",
						"french": "Des avertissements ciblant des individus sont apparus sur chaque écran de la ville. L'inquiétude s'est répandue.",
						"spanish": "Advertencias que señalaban a individuos aparecieron en cada pantalla de la ciudad. La inquietud se extendió.",
						"vietnamese": "Cảnh báo nhắm vào cá nhân xuất hiện trên mọi màn hình thành phố. Sự bất an lan rộng.",
						"thai": "คำเตือนที่พุ่งเป้าไปที่บุคคลปรากฏขึ้นบนหน้าจอทุกแห่งในเมือง ความไม่สบายใจแพร่กระจายไปทั่ว",
						"hindi": "शहर के हर स्क्रीन पर व्यक्तियों को लक्षित करने वाली चेतावनियाँ दिखाई दीं। बेचैनी फैल गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "또 누구야? 이제 개인까지?",
						"english": "Who now? Even individuals?",
						"japanese": "また誰だ？今度は個人までか？",
						"chinese": "又轮到谁了？现在连个人都成了目标？",
						"french": "Qui d'autre maintenant ? Même des individus ?",
						"spanish": "¿Quién ahora? ¿Incluso individuos?",
						"vietnamese": "Ai nữa đây? Giờ đến cả cá nhân ư?",
						"thai": "ใครอีกแล้วล่ะ? คราวนี้ถึงบุคคลเลยเหรอ?",
						"hindi": "अब कौन? अब तो व्यक्तियों को भी?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "들었어? StaticEcho가 사실 옛날 조직 보스라던데. 배신자들 숙청한다고.",
						"english": "Heard that? StaticEcho is supposedly an old gang boss. Purging traitors.",
						"japanese": "聞いた？ StaticEchoって実は昔の組織のボスらしいよ。裏切り者を粛清してるんだって。",
						"chinese": "听说了吗？StaticEcho其实是以前的帮派头目。正在清除叛徒。",
						"french": "Tu as entendu ? StaticEcho serait un ancien chef de gang. Il purge les traîtres.",
						"spanish": "¿Escuchaste eso? StaticEcho es supuestamente un antiguo jefe de banda. Purgando traidores.",
						"vietnamese": "Nghe nói chưa? StaticEcho thực ra là một ông trùm băng đảng cũ. Đang thanh trừng những kẻ phản bội.",
						"thai": "ได้ยินไหม? StaticEcho เป็นหัวหน้าแก๊งเก่า เขาจะกำจัดคนทรยศ",
						"hindi": "सुना क्या? StaticEcho कथित तौर पर एक पुराना गिरोह का बॉस है। देशद्रोहियों को शुद्ध कर रहा है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "말도 안 돼. 그런 찌라시를 왜 퍼뜨려?",
						"english": "Nonsense. Why spread such rumors?",
						"japanese": "馬鹿な。そんなガセネタをなぜ広める？",
						"chinese": "胡说。为什么要散布这种谣言？",
						"french": "N'importe quoi. Pourquoi répandre de telles rumeurs ?",
						"spanish": "Tonterías. ¿Por qué esparcir tales rumores?",
						"vietnamese": "Vô lý. Tại sao lại lan truyền tin đồn thất thiệt như vậy?",
						"thai": "ไร้สาระ ทำไมต้องปล่อยข่าวลือแบบนั้นด้วย?",
						"hindi": "बकवास। ऐसी अफवाहें क्यों फैलाते हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "돈이 되거든. 믿는 사람이 많을수록.",
						"english": "Because it makes money. The more people believe.",
						"japanese": "金になるからさ。信じる人が多ければ多いほど。",
						"chinese": "因为有利可图。相信的人越多。",
						"french": "Parce que ça rapporte. Plus il y a de gens qui y croient.",
						"spanish": "Porque genera dinero. Cuanta más gente cree.",
						"vietnamese": "Vì nó tạo ra tiền. Càng nhiều người tin.",
						"thai": "เพราะมันทำเงิน ยิ่งคนเชื่อมากเท่าไหร่",
						"hindi": "क्योंकि इससे पैसा बनता है। जितने ज़्यादा लोग मानते हैं।"
					},
					"emotion": "happy",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내가 파악한 바로는, 통신망 마비될 때마다 옛 조직 로고 비슷한 디지털 문양이 뜬대.",
						"english": "From what I gather, a digital pattern resembling an old gang logo appears whenever the network crashes.",
						"japanese": "私が把握している限りでは、通信網が麻痺するたびに、古い組織のロゴに似たデジタル模様が浮かび上がるらしい。",
						"chinese": "据我所知，每当通信网络瘫痪时，就会出现一个类似于旧帮派标志的数字图案。",
						"french": "D'après ce que j'ai compris, un motif numérique ressemblant à un ancien logo de gang apparaît chaque fois que le réseau tombe en panne.",
						"spanish": "Por lo que sé, un patrón digital que se parece a un antiguo logo de banda aparece cada vez que la red se cae.",
						"vietnamese": "Theo những gì tôi biết, một mẫu kỹ thuật số giống logo của một băng đảng cũ xuất hiện mỗi khi mạng bị tê liệt.",
						"thai": "เท่าที่ฉันรู้ ทุกครั้งที่เครือข่ายล่ม จะมีลวดลายดิจิทัลคล้ายโลโก้แก๊งเก่าปรากฏขึ้น",
						"hindi": "मेरी जानकारी के अनुसार, जब भी संचार नेटवर्क ठप होता है, तो एक पुराना गिरोह के लोगो जैसा डिजिटल पैटर्न दिखाई देता है।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 StaticEcho가 그 조직이랑 관련 있다는 거야?",
						"english": "So StaticEcho is connected to that organization?",
						"japanese": "じゃあ、StaticEchoはその組織と関係があるってこと？",
						"chinese": "所以StaticEcho和那个组织有关系？",
						"french": "Alors StaticEcho est lié à cette organisation ?",
						"spanish": "¿Así que StaticEcho está conectado a esa organización?",
						"vietnamese": "Vậy StaticEcho có liên quan đến tổ chức đó sao?",
						"thai": "งั้น StaticEcho ก็เกี่ยวข้องกับองค์กรนั้นเหรอ?",
						"hindi": "तो StaticEcho उस संगठन से जुड़ा है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진실? 그게 뭐가 중요해. 찌라시는 돈이 될 때 가장 강력해.",
						"english": "Truth? What does it matter? Rumors are most powerful when they make money.",
						"japanese": "真実？そんなもの、どうでもいい。デマは金になる時が一番強い。",
						"chinese": "真相？那有什么重要。谣言只有在能赚钱时才最有力量。",
						"french": "La vérité ? Quelle importance ? Les ragots sont les plus puissants quand ils rapportent de l'argent.",
						"spanish": "¿La verdad? ¿Qué importa? Los rumores son más poderosos cuando dan dinero.",
						"vietnamese": "Sự thật? Có quan trọng gì đâu. Tin đồn mạnh nhất khi nó kiếm ra tiền.",
						"thai": "ความจริงเหรอ? มันสำคัญอะไรล่ะ ข่าวลือมีพลังที่สุดตอนที่มันทำเงินได้ต่างหาก",
						"hindi": "सच? क्या फर्क पड़ता है। अफवाहें तब सबसे शक्तिशाली होती हैं जब वे पैसा बनाती हैं।"
					},
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "StaticEcho의 음성은 점점 긁히는 듯한 소리를 섞기 시작했다.",
						"english": "StaticEcho's voice grew increasingly raspy.",
						"japanese": "StaticEchoの声は、だんだん擦れるような音を混ぜ始めた。",
						"chinese": "StaticEcho的声音开始变得沙哑，夹杂着刮擦声。",
						"french": "La voix de StaticEcho commença à prendre un son de plus en plus éraillé.",
						"spanish": "La voz de StaticEcho empezó a mezclarse con un sonido cada vez más áspero.",
						"vietnamese": "Giọng của StaticEcho bắt đầu xen lẫn những âm thanh rè rẹt.",
						"thai": "เสียงของ StaticEcho เริ่มมีเสียงขูดขีดเจือปนเข้ามา",
						"hindi": "StaticEcho की आवाज़ में धीरे-धीरे एक खुरखुरापन आने लगा।"
					},
					"speaker": "narrator",
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
						3,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "재밌는 건, StaticEcho 메시지에 '복종'이랑 '질서'가 유독 강조된다는 거야.",
						"english": "What's interesting is how 'obedience' and 'order' are uniquely emphasized in StaticEcho's messages.",
						"japanese": "面白いのは、StaticEchoのメッセージで『服従』と『秩序』が特に強調されていることだよ。",
						"chinese": "有趣的是，StaticEcho的消息中，‘服从’和‘秩序’被特别强调。",
						"french": "Ce qui est intéressant, c'est que les messages de StaticEcho insistent particulièrement sur 'l'obéissance' et 'l'ordre'.",
						"spanish": "Lo interesante es que los mensajes de StaticEcho enfatizan de forma única 'obediencia' y 'orden'.",
						"vietnamese": "Điều thú vị là, trong tin nhắn của StaticEcho, 'phục tùng' và 'trật tự' lại đặc biệt được nhấn mạnh.",
						"thai": "ที่น่าสนใจคือ ข้อความของ StaticEcho เน้นย้ำคำว่า 'เชื่อฟัง' และ 'ระเบียบ' เป็นพิเศษ",
						"hindi": "दिलचस्प बात यह है कि StaticEcho के संदेशों में 'आज्ञाकारिता' और 'व्यवस्था' पर विशेष जोर दिया गया है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그게 무슨 의미인데?",
						"english": "What does that mean?",
						"japanese": "それ、どういう意味なの？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Nó có ý nghĩa gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "글쎄. 잘 따르면 살려주고, 아니면… 숙청이겠지.",
						"english": "Well, obey and you live. Otherwise... purification, I suppose.",
						"japanese": "さあな。従えば生かされ、そうでなければ…粛清だろうな。",
						"chinese": "嗯。乖乖听话就活命，不然…就是清除。",
						"french": "Eh bien. Obéis et tu vivras. Sinon... la purge, je suppose.",
						"spanish": "Pues bien. Si obedeces, vivirás. Si no... será una purga, supongo.",
						"vietnamese": "À. Nếu nghe theo thì được sống, còn không... thì sẽ là thanh trừng.",
						"thai": "อืม ถ้าทำตามก็รอดไป ไม่งั้นก็... การกวาดล้างล่ะมั้ง",
						"hindi": "पता नहीं। अगर मानोगे तो बच जाओगे, वरना... सफाया होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소문만 퍼뜨리는 거 아니었어?",
						"english": "Weren't they just spreading rumors?",
						"japanese": "ただの噂を広めてるだけじゃなかったの？",
						"chinese": "不只是散布谣言吗？",
						"french": "Ils ne faisaient que répandre des rumeurs, non ?",
						"spanish": "¿No estaban solo esparciendo rumores?",
						"vietnamese": "Chẳng phải họ chỉ lan truyền tin đồn thôi sao?",
						"thai": "ไม่ใช่แค่กระจายข่าวลือเหรอ?",
						"hindi": "क्या वे सिर्फ अफवाहें नहीं फैला रहे थे?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "소문도 믿음이 되면, 그게 현실이 되는 거야.",
						"english": "When a rumor becomes belief, it becomes reality.",
						"japanese": "噂も信仰になれば、それが現実になるのさ。",
						"chinese": "当谣言变成信仰，它就变成了现实。",
						"french": "Quand une rumeur devient une croyance, elle devient la réalité.",
						"spanish": "Cuando un rumor se convierte en creencia, se convierte en realidad.",
						"vietnamese": "Khi tin đồn trở thành niềm tin, nó sẽ trở thành hiện thực.",
						"thai": "เมื่อข่าวลือกลายเป็นความเชื่อ มันก็จะกลายเป็นความจริง",
						"hindi": "जब एक अफवाह विश्वास बन जाती है, तो वह हकीकत बन जाती है।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도시가 이 소문들 때문에 미쳐가고 있어. 진실은 아무도 모르고.",
						"english": "The city is going mad because of these rumors. No one knows the truth.",
						"japanese": "街はこの噂のせいで狂乱状態だよ。真実は誰も知らない。",
						"chinese": "这座城市因为这些谣言而疯狂。没有人知道真相。",
						"french": "La ville devient folle à cause de ces rumeurs. Personne ne connaît la vérité.",
						"spanish": "La ciudad se está volviendo loca por estos rumores. Nadie sabe la verdad.",
						"vietnamese": "Thành phố đang hóa điên vì những tin đồn này. Chẳng ai biết sự thật.",
						"thai": "เมืองกำลังบ้าคลั่งเพราะข่าวลือเหล่านี้ ไม่มีใครรู้ความจริง",
						"hindi": "इन अफवाहों की वजह से शहर पागल हो रहा है। सच कोई नहीं जानता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "사람들은 항상 믿고 싶은 걸 믿는 법. 난 그걸 팔 뿐이고.",
						"english": "People always believe what they want to believe. I just sell it.",
						"japanese": "人はいつも信じたいものを信じるものさ。俺はそれを売るだけだ。",
						"chinese": "人们总是相信他们想相信的。我只是贩卖这些。",
						"french": "Les gens croient toujours ce qu'ils veulent croire. Je ne fais que le vendre.",
						"spanish": "La gente siempre cree lo que quiere creer. Yo solo lo vendo.",
						"vietnamese": "Người ta luôn tin vào điều họ muốn tin. Tôi chỉ bán điều đó thôi.",
						"thai": "คนเรามักจะเชื่อในสิ่งที่อยากเชื่อเสมอ ฉันก็แค่ขายมัน",
						"hindi": "लोग हमेशा वही मानते हैं जो वे मानना चाहते हैं। मैं बस उसे बेचता हूँ।"
					}
				},
				{
					"content": {
						"korean": "디지털 화면에 찢어진 양복 자락이나 오래된 시계 같은 파편이 스쳤다.",
						"english": "Fragments, like a torn suit lapel or an old watch, flickered across the digital screen.",
						"japanese": "デジタル画面に、破れたスーツの襟や古い時計のような破片がかすかに映った。",
						"chinese": "数字屏幕上闪过撕裂的西装碎片或老旧的手表。",
						"french": "Des fragments, comme un revers de costume déchiré ou une vieille montre, ont traversé l'écran numérique.",
						"spanish": "Fragmentos, como la solapa de un traje rasgado o un reloj antiguo, destellaron en la pantalla digital.",
						"vietnamese": "Những mảnh vỡ, như vạt áo rách hay chiếc đồng hồ cũ, lướt qua màn hình kỹ thuật số.",
						"thai": "ชิ้นส่วนอย่างชายเสื้อสูทที่ขาดรุ่งริ่ง หรือนาฬิกาเก่าแก่ปรากฏขึ้นวูบหนึ่งบนหน้าจอ ",
						"hindi": "डिजital स्क्रीन पर फटे हुए सूट या पुरानी घड़ी जैसे टुकड़े झिलमिला उठे।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "대체 StaticEcho, 너의 진짜 정체는 뭐야?",
						"english": "StaticEcho, what is your true identity?",
						"japanese": "一体StaticEcho、お前の本当の正体は何だ？",
						"chinese": "StaticEcho，你的真实身份到底是什么？",
						"french": "StaticEcho, quelle est ta véritable identité ?",
						"spanish": "StaticEcho, ¿cuál es tu verdadera identidad?",
						"vietnamese": "StaticEcho, rốt cuộc thân phận thật sự của ngươi là gì?",
						"thai": "StaticEcho ตกลงแล้วตัวตนที่แท้จริงของแกคืออะไรกันแน่?",
						"hindi": "StaticEcho, तुम्हारी असली पहचान क्या है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알아서 뭐하게? 난 다음 돈벌이를 찾으러 가봐야겠네.",
						"english": "What good would that do you? I need to find my next score.",
						"japanese": "知ってどうする？俺は次の金儲けを探しに行かないと。",
						"chinese": "知道了又怎样？我得去找下一个发财的机会了。",
						"french": "À quoi bon ? Je dois trouver ma prochaine cible.",
						"spanish": "¿De qué te sirve saberlo? Tengo que ir a buscar mi próxima ganancia.",
						"vietnamese": "Biết để làm gì? Ta phải đi tìm phi vụ kiếm tiền tiếp theo rồi.",
						"thai": "รู้ไปก็เท่านั้น ฉันต้องไปหาเงินก้อนต่อไปแล้วล่ะ",
						"hindi": "जानकर क्या करोगे? मुझे अपना अगला दांव ढूंढना है।"
					},
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"duration_ms": 400
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "내가 사라져도… 감시는 끝나지 않아… 너희 안에 심어진 불안은… 영원히.",
						"english": "Even if I vanish… the surveillance never ends… the unease planted within you… forever.",
						"japanese": "たとえ私が消えても…監視は終わらない…お前たちの中に植え付けられた不安は…永遠に。",
						"chinese": "即使我消失了…监视也不会结束…植入你们心中的不安…将永远存在。",
						"french": "Même si je disparais… la surveillance ne s'arrête jamais… l'inquiétude plantée en vous… pour toujours.",
						"spanish": "Incluso si desaparezco… la vigilancia nunca termina… la inquietud sembrada en ustedes… para siempre.",
						"vietnamese": "Dù ta có biến mất… sự giám sát sẽ không kết thúc… nỗi bất an gieo vào các ngươi… mãi mãi.",
						"thai": "แม้ฉันจะหายไป… การเฝ้าระวังก็ไม่มีวันสิ้นสุด… ความไม่สบายใจที่ถูกฝังไว้ในตัวพวกแก… จะคงอยู่ตลอดไป",
						"hindi": "भले ही मैं गायब हो जाऊं… निगरानी कभी खत्म नहीं होगी… तुम्हारे अंदर बोई गई बेचैनी… हमेशा के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…사라졌지만, 이 찝찝함은 뭐지? 끝난 게 아닌가?",
						"english": "...They vanished, but what is this lingering unease? Is it not over?",
						"japanese": "…消え去ったが、この胸騒ぎは何だ？終わっていないのか？",
						"chinese": "…消失了，但这种不舒服的感觉是怎么回事？难道还没结束？",
						"french": "...Ils ont disparu, mais qu'est-ce que ce malaise persistant ? Ce n'est pas fini ?",
						"spanish": "...Desaparecieron, pero ¿qué es esta inquietud persistente? ¿No ha terminado?",
						"vietnamese": "...Họ biến mất rồi, nhưng cảm giác khó chịu này là gì? Chẳng lẽ chưa kết thúc sao?",
						"thai": "…หายไปแล้ว แต่ความรู้สึกอึดอัดใจนี่มันอะไรกัน? ยังไม่จบงั้นเหรอ?",
						"hindi": "...वे गायब हो गए, लेकिन यह बेचैनी क्या है? क्या यह खत्म नहीं हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "봐. 내가 말했잖아. 결국 이 혼란이 내 돈이 된다니까.",
						"english": "See? I told you. This chaos will eventually turn into my profit.",
						"japanese": "ほら見ろ。言った通りだ。結局この混乱が俺の金になるんだよ。",
						"chinese": "看吧。我早就说过。这场混乱最终会变成我的财富。",
						"french": "Tu vois ? Je te l'avais dit. Ce chaos finira par devenir mon profit.",
						"spanish": "¡Mira! Te lo dije. Este caos, al final, se convertirá en mi beneficio.",
						"vietnamese": "Thấy chưa? Ta đã nói rồi mà. Cuối cùng sự hỗn loạn này sẽ thành tiền của ta thôi.",
						"thai": "เห็นไหม? ฉันบอกแล้วไงว่าความวุ่นวายนี้จะกลายเป็นเงินของฉันในที่สุด",
						"hindi": "देखा? मैंने तुमसे कहा था। यह अराजकता अंततः मेरा मुनाफा बन जाएगी।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "StaticEcho의 그림자는 물러났지만, 도시는 여전히 소음에 시달렸다.",
						"english": "StaticEcho's shadow receded, but the city still suffered from the noise.",
						"japanese": "StaticEchoの影は退いたが、都市は依然として騒音に悩まされていた。",
						"chinese": "StaticEcho的阴影退去了，但城市仍然饱受噪音的困扰。",
						"french": "L'ombre de StaticEcho s'est retirée, mais la ville souffrait toujours du bruit.",
						"spanish": "La sombra de StaticEcho retrocedió, pero la ciudad seguía sufriendo el ruido.",
						"vietnamese": "Bóng dáng StaticEcho đã rút lui, nhưng thành phố vẫn phải chịu đựng sự ồn ào.",
						"thai": "เงาของ StaticEcho ถอยไปแล้ว แต่เมืองก็ยังคงถูกรบกวนด้วยเสียงอึกทึก",
						"hindi": "StaticEcho की छाया पीछे हट गई, लेकिन शहर अभी भी शोर से पीड़ित था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 감시는 계속될 것이다. 영원히 나를 볼 것이다.",
						"english": "Your watch continues. You will see me forever.",
						"japanese": "監視は続く。永遠に私を見るだろう。",
						"chinese": "你的监视会继续，你将永远看见我。",
						"french": "Ta surveillance continuera. Tu me verras pour toujours.",
						"spanish": "Tu vigilancia continuará. Me verás para siempre.",
						"vietnamese": "Sự giám sát của ngươi sẽ tiếp tục. Ngươi sẽ thấy ta mãi mãi.",
						"thai": "การเฝ้าระวังของเจ้าจะดำเนินต่อไป เจ้าจะได้เห็นข้าตลอดไป",
						"hindi": "तुम्हारी निगरानी जारी रहेगी। तुम मुझे हमेशा देखोगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 진실을 밝힐 때까지!",
						"english": "Damn... It's not over yet. Not until I reveal the truth!",
						"japanese": "ちくしょう… まだ終わってない。真実を明らかにするまでは！",
						"chinese": "该死…… 还没结束。直到我揭露真相为止！",
						"french": "Merde... Ce n'est pas encore fini. Pas avant que je ne révèle la vérité !",
						"spanish": "Maldita sea... Esto no ha terminado aún. ¡Hasta que revele la verdad!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc. Cho đến khi ta phơi bày sự thật!",
						"thai": "ให้ตายสิ... มันยังไม่จบ จนกว่าข้าจะเปิดเผยความจริง!",
						"hindi": "धिक्कार है… यह अभी खत्म नहीं हुआ है। जब तक मैं सच का खुलासा नहीं करता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이런, 망했네. 이번 판은 내가 틀렸나.",
						"english": "Ugh, I blew it. Was I wrong this round?",
						"japanese": "しまった、やられたな。今回の勝負、俺が間違ったか。",
						"chinese": "啊，糟了。这次我失算了吗？",
						"french": "Ah, zut. Me serais-je trompé cette fois ?",
						"spanish": "Ay, demonios. ¿Me equivoqué esta vez?",
						"vietnamese": "Ôi, chết tiệt. Lần này ta đã sai sao?",
						"thai": "โอ๊ย แย่แล้ว. รอบนี้ข้าคิดผิดไปหรือเปล่าเนี่ย?",
						"hindi": "अरे यार, मैं फंस गया। क्या इस बार मैं गलत था?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "내 감시의 눈은 모든 것을 본다. 네가 숨긴 진실까지도.",
						"english": "My watchful eye sees all. Even the truth you hide.",
						"japanese": "我が監視の目は全てを見通す。お前が隠した真実さえも。",
						"chinese": "我的监视之眼洞察一切。包括你隐藏的真相。",
						"french": "Mon œil vigilant voit tout. Même la vérité que tu caches.",
						"spanish": "Mi ojo vigilante lo ve todo. Incluso la verdad que ocultas.",
						"vietnamese": "Con mắt giám sát của ta nhìn thấy tất cả. Kể cả sự thật ngươi giấu kín.",
						"thai": "ดวงตาแห่งการเฝ้าระวังของฉันมองเห็นทุกสิ่ง แม้แต่ความจริงที่แกซ่อนไว้",
						"hindi": "मेरी निगरानी की आंखें सब कुछ देखती हैं। यहां तक कि वह सच्चाई भी जो तुम छिपाते हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 퍼뜨리는 혼란은 여기서 끝낼 거야!",
						"english": "The chaos you spread ends here!",
						"japanese": "お前がばらまく混乱はここで終わらせる！",
						"chinese": "你散布的混乱到此为止！",
						"french": "Le chaos que tu répands prend fin ici !",
						"spanish": "¡El caos que propagas termina aquí!",
						"vietnamese": "Sự hỗn loạn mà ngươi gieo rắc sẽ kết thúc tại đây!",
						"thai": "ความวุ่นวายที่แกแพร่กระจายจะจบลงตรงนี้แหละ!",
						"hindi": "जो अराजकता तुम फैलाते हो, वह यहीं खत्म होगी!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것. 질서는 반드시 필요하다. 그것이 혼돈을 막는 유일한 길.",
						"english": "Foolish one. Order is essential. It is the only way to prevent chaos.",
						"japanese": "愚かな者め。秩序は必ず必要だ。それが混沌を防ぐ唯一の道。",
						"chinese": "愚蠢的东西。秩序是必需的。那是阻止混乱的唯一途径。",
						"french": "Imbécile. L'ordre est essentiel. C'est le seul moyen d'empêcher le chaos.",
						"spanish": "Tonto. El orden es esencial. Es la única forma de prevenir el caos.",
						"vietnamese": "Kẻ ngốc. Trật tự là điều cần thiết. Đó là con đường duy nhất để ngăn chặn hỗn loạn.",
						"thai": "เจ้าโง่เอ๊ย! ระเบียบนั้นจำเป็น มันเป็นทางเดียวที่จะยับยั้งความโกลาหลได้!",
						"hindi": "मूर्ख। व्यवस्था आवश्यक है। यही अराजकता को रोकने का एकमात्र तरीका है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
