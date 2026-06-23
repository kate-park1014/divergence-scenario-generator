export const scenario_modern_doninfluence_30_03 = {
	"scenario_id": "modern_doninfluence_30_03",
	"order": 3,
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
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "카운트다운 숫자는 더욱 빠르게 줄어들었다. 도시 전체가 광기에 휩싸였다.",
						"english": "The countdown numbers decreased even faster. The entire city was engulfed in madness.",
						"japanese": "カウントダウンの数字はさらに速く減っていった。都市全体が狂気に包まれた。",
						"chinese": "倒计时数字下降得更快了。整个城市被疯狂吞噬。",
						"french": "Les chiffres du compte à rebours diminuaient encore plus vite. La ville entière était plongée dans la folie.",
						"spanish": "Los números de la cuenta regresiva disminuían aún más rápido. Toda la ciudad estaba envuelta en locura.",
						"vietnamese": "Các con số đếm ngược giảm nhanh hơn nữa. Cả thành phố chìm trong điên loạn.",
						"thai": "ตัวเลขการนับถอยหลังลดลงเร็วยิ่งขึ้น เมืองทั้งเมืองถูกกลืนกินด้วยความบ้าคลั่ง",
						"hindi": "उलटी गिनती के अंक और भी तेज़ी से कम होते गए। पूरा शहर पागलपन में डूब गया था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "미쳤어… 저걸 막아야 해.",
						"english": "This is madness… I have to stop it.",
						"japanese": "正気じゃない…あれを止めなければ。",
						"chinese": "疯了…我必须阻止它。",
						"french": "C'est de la folie… Je dois l'arrêter.",
						"spanish": "Es una locura… Tengo que detenerlo.",
						"vietnamese": "Thật điên rồ… Tôi phải ngăn chặn nó.",
						"thai": "บ้าไปแล้ว…ฉันต้องหยุดมัน",
						"hindi": "यह पागलपन है… मुझे इसे रोकना होगा।"
					}
				},
				{
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "…멈출 수 없어. 하지만…",
						"english": "…Can't stop it. But…",
						"japanese": "…止められない。しかし…",
						"chinese": "…无法停止。但是…",
						"french": "…Je ne peux pas l'arrêter. Mais…",
						"spanish": "…No puedo detenerlo. Pero…",
						"vietnamese": "…Không thể dừng lại. Nhưng…",
						"thai": "…หยุดไม่ได้ แต่ว่า…",
						"hindi": "…इसे रोक नहीं सकता। लेकिन…"
					}
				},
				{
					"content": {
						"korean": "그가 진짜 누군지 알아야 해. 이건… 내가 도울 수 있어.",
						"english": "I need to know who he really is. This… I can help with this.",
						"japanese": "彼が本当は誰なのかを知る必要がある。これなら…私が手伝える。",
						"chinese": "我需要知道他到底是谁。这…我可以帮忙。",
						"french": "Je dois savoir qui il est vraiment. Cela… je peux aider avec ça.",
						"spanish": "Necesito saber quién es realmente. Esto… con esto puedo ayudar.",
						"vietnamese": "Tôi cần biết hắn ta thật sự là ai. Chuyện này… tôi có thể giúp được.",
						"thai": "ฉันต้องรู้ว่าเขาเป็นใครจริงๆ นี่…ฉันช่วยได้",
						"hindi": "मुझे जानना है कि वह असल में कौन है। इसमें… मैं मदद कर सकता हूँ।"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "그는 그냥 인플루언서가 아니야.",
						"english": "He's not just an influencer.",
						"japanese": "彼はただのインフルエンサーじゃない。",
						"chinese": "他不仅仅是一个网红。",
						"french": "Il n'est pas qu'un simple influenceur.",
						"spanish": "No es solo un influencer.",
						"vietnamese": "Hắn không chỉ là một người có ảnh hưởng.",
						"thai": "เขาไม่ใช่แค่อินฟลูเอนเซอร์ธรรมดา",
						"hindi": "वह सिर्फ एक इन्फ्लuencer नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What was that?",
						"japanese": "何のことだ？",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que c'est que ça ?",
						"spanish": "¿Qué fue eso?",
						"vietnamese": "Cái gì vậy?",
						"thai": "อะไรนะ?",
						"hindi": "क्या था वो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그의 라이브 방송… 가끔 이상한 게 스쳐 지나갈 거야.",
						"english": "His live stream... sometimes strange things flash by.",
						"japanese": "彼のライブ配信…たまに奇妙なものが映り込むんだ。",
						"chinese": "他的直播…偶尔会闪过一些奇怪的东西。",
						"french": "Son live stream... parfois des choses étranges y apparaissent.",
						"spanish": "En su transmisión en vivo... a veces pasan cosas extrañas.",
						"vietnamese": "Livestream của hắn... thỉnh thoảng có những thứ lạ lướt qua.",
						"thai": "ไลฟ์สตรีมของเขา...บางทีก็มีอะไรแปลกๆ แวบมา",
						"hindi": "उसकी लाइव स्ट्रीम... कभी-कभी अजीब चीजें चमकती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "찰나의 순간, 번개처럼… 사라지는 것들.",
						"english": "For a fleeting moment, like lightning... things that disappear.",
						"japanese": "一瞬の間に、稲妻のように…消えるものたち。",
						"chinese": "转瞬之间，如闪电般…消失的东西。",
						"french": "Un instant fugace, comme l'éclair... des choses qui disparaissent.",
						"spanish": "Un instante fugaz, como un rayo... cosas que desaparecen.",
						"vietnamese": "Trong khoảnh khắc, như tia chớp... những thứ biến mất.",
						"thai": "ชั่วพริบตาเดียว, เหมือนสายฟ้า... สิ่งที่หายไป",
						"hindi": "एक क्षण के लिए, बिजली की तरह... गायब होने वाली चीजें।"
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…(의심스러운 눈빛)",
						"english": "...(Suspicious gaze)",
						"japanese": "…（疑いの眼差し）",
						"chinese": "…（怀疑的眼神）",
						"french": "...(Regard suspicieux)",
						"spanish": "...(Mirada de sospecha)",
						"vietnamese": "...(Ánh mắt nghi ngờ)",
						"thai": "...(สายตาที่สงสัย)",
						"hindi": "...(संदेह भरी नज़र)"
					}
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "그건 마피아 심볼이야. 옛날, 이 도시를 지배하던…",
						"english": "That's a mafia symbol. From the old days, ruling this city...",
						"japanese": "あれはマフィアのシンボルだ。昔、この街を支配していた…",
						"chinese": "那是黑手党标志。很久以前，统治这座城市的…",
						"french": "C'est un symbole de la mafia. D'autrefois, ils régnaient sur cette ville...",
						"spanish": "Ese es un símbolo de la mafia. De antaño, gobernaban esta ciudad...",
						"vietnamese": "Đó là biểu tượng mafia. Ngày xưa, bọn chúng đã thống trị thành phố này...",
						"thai": "นั่นคือสัญลักษณ์มาเฟีย. สมัยก่อน, พวกเขาเคยปกครองเมืองนี้...",
						"hindi": "वह माफिया का प्रतीक है। पुराने समय में, इस शहर पर राज करने वाले..."
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "처음엔 나도 몰랐어. 그저 위대한 '돈'님의 열성 팔로워였지.",
						"english": "At first, I didn't know either. I was just a fervent follower of the great 'Don'.",
						"japanese": "最初は私も知らなかった。ただ偉大な『ドン』様の熱心なフォロワーだっただけさ。",
						"chinese": "一开始我也不知道。我只是伟大的“钱”先生的狂热追随者。",
						"french": "Au début, je ne savais pas non plus. J'étais juste un fervent adepte du grand 'Don'.",
						"spanish": "Al principio, yo tampoco lo sabía. Solo era un ferviente seguidor del gran 'Don'.",
						"vietnamese": "Ban đầu, tôi cũng không biết. Tôi chỉ là một fan hâm mộ cuồng nhiệt của 'Don' vĩ đại.",
						"thai": "ตอนแรกฉันก็ไม่รู้. ฉันก็แค่ผู้ติดตามตัวยงของ 'ดอน' ผู้ยิ่งใหญ่เท่านั้นเอง",
						"hindi": "शुरुआत में, मुझे भी नहीं पता था। मैं बस महान 'डॉन' का एक कट्टर अनुयायी था।"
					},
					"speaker": "kai"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왜 갑자기 배신하는 거지?",
						"english": "Why are you suddenly betraying him?",
						"japanese": "なぜ急に裏切るんだ？",
						"chinese": "你为什么要突然背叛？",
						"french": "Pourquoi le trahis-tu soudainement ?",
						"spanish": "¿Por qué lo traicionas de repente?",
						"vietnamese": "Sao tự nhiên lại phản bội vậy?",
						"thai": "ทำไมถึงทรยศกะทันหันล่ะ?",
						"hindi": "तुम अचानक धोखा क्यों दे रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…시키지 않을 짓까지 시켰어. 불법을 넘어서…",
						"english": "...He made me do things I shouldn't. Beyond illegal...",
						"japanese": "…やらせるべきではないことまでやらせた。違法を超えて…",
						"chinese": "…他让我做了不该做的事。超越了违法…",
						"french": "...Il m'a fait faire des choses que je n'aurais pas dû. Au-delà de l'illégalité...",
						"spanish": "...Me hizo hacer cosas que no debía. Más allá de lo ilegal...",
						"vietnamese": "...Hắn ta đã bắt tôi làm những việc không nên làm. Vượt quá cả phạm vi pháp luật...",
						"thai": "...เขาให้ฉันทำในสิ่งที่ฉันไม่ควรทำ. เกินกว่ากฎหมาย...",
						"hindi": "...उसने मुझसे ऐसे काम करवाए जो मुझे नहीं करने चाहिए थे। अवैध से भी बढ़कर..."
					},
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "이건 팬덤이 아니야. 마피아 조직이야. 디지털 가면을 쓴…",
						"english": "This isn't a fandom. It's a mafia organization. Wearing a digital mask...",
						"japanese": "これはファンダムじゃない。マフィア組織だ。デジタル仮面をかぶった…",
						"chinese": "这不是粉丝圈。这是一个黑手党组织。戴着数字面具的…",
						"french": "Ce n'est pas un fandom. C'est une organisation mafieuse. Portant un masque numérique...",
						"spanish": "Esto no es un fandom. Es una organización mafiosa. Llevando una máscara digital...",
						"vietnamese": "Đây không phải là fandom. Đây là một tổ chức mafia. Đeo mặt nạ kỹ thuật số...",
						"thai": "นี่ไม่ใช่แฟนด้อม. นี่คือองค์กรมาเฟีย. สวมหน้ากากดิจิทัล...",
						"hindi": "यह कोई फ़ैनडम नहीं है। यह एक माफिया संगठन है। डिजिटल नकाब पहने हुए..."
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그럼… 우리가 알던 '돈'은 가짜였어?",
						"english": "Then... the 'Don' we knew was fake?",
						"japanese": "じゃあ…私たちが知っていた『ドン』は偽物だったってことか？",
						"chinese": "那么…我们认识的“钱”先生是假的？",
						"french": "Alors... le 'Don' que nous connaissions était un imposteur ?",
						"spanish": "Entonces... ¿el 'Don' que conocíamos era falso?",
						"vietnamese": "Vậy thì... 'Don' mà chúng ta biết là giả sao?",
						"thai": "งั้น... 'ดอน' ที่เรารู้จักเป็นของปลอมเหรอ?",
						"hindi": "तो... जिस 'डॉन' को हम जानते थे, वह नकली था?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이제 돌이킬 수 없어. 그들이… 널 노리고 있어.",
						"english": "There's no turning back now. They're... after you.",
						"japanese": "もう後戻りはできない。彼らが…あなたを狙っている。",
						"chinese": "现在已经无法回头了。他们……盯上你了。",
						"french": "Il n'y a plus de retour en arrière. Ils... sont après toi.",
						"spanish": "Ya no hay vuelta atrás. Ellos... van por ti.",
						"vietnamese": "Không thể quay đầu nữa rồi. Bọn chúng... đang nhắm vào ngươi.",
						"thai": "ตอนนี้กลับตัวไม่ได้แล้ว พวกมัน... กำลังตามล่าคุณอยู่",
						"hindi": "अब पीछे हटना मुमकिन नहीं। वे... तुम्हें निशाना बना रहे हैं।"
					},
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "내가 막을 거야. 그가 꾸민 짓을 전부.",
						"english": "I'll stop it. Everything he's planned.",
						"japanese": "私が止める。彼が企んだこと全てを。",
						"chinese": "我会阻止这一切。他所有的阴谋。",
						"french": "Je l'arrêterai. Tout ce qu'il a tramé.",
						"spanish": "Lo detendré. Todo lo que ha planeado.",
						"vietnamese": "Ta sẽ ngăn chặn. Tất cả những gì hắn đã bày ra.",
						"thai": "ฉันจะหยุดมันเอง ทุกสิ่งที่เขาวางแผนไว้",
						"hindi": "मैं इसे रोकूँगा। उसके सभी षड्यंत्रों को।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "kai",
					"content": {
						"korean": "그럼… 조심해. {random_boss}는 가장 잔인한 놈이야.",
						"english": "Then... be careful. {random_boss} is the most cruel of them all.",
						"japanese": "なら…気をつけろ。{random_boss}は最も残忍なやつだ。",
						"chinese": "那么……小心。{random_boss}是最残忍的家伙。",
						"french": "Alors... sois prudent. {random_boss} est le plus cruel de tous.",
						"spanish": "Entonces... ten cuidado. {random_boss} es el más cruel de todos.",
						"vietnamese": "Vậy thì... hãy cẩn thận. {random_boss} là tên tàn nhẫn nhất.",
						"thai": "งั้น... ระวังตัวนะ {random_boss} เป็นคนที่โหดร้ายที่สุด",
						"hindi": "तो... सावधान रहना। {random_boss} सबसे क्रूर है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "돈 인플루언서의 가장 오래된 그림자…",
						"english": "The oldest shadow of Don Influencer...",
						"japanese": "ドン・インフルエンサーの最も古い影…",
						"chinese": "钱权影响者最古老的影子……",
						"french": "L'ombre la plus ancienne de Don Influencer...",
						"spanish": "La sombra más antigua de Don Influencer...",
						"vietnamese": "Bóng tối lâu đời nhất của Don Influencer...",
						"thai": "เงาที่เก่าแก่ที่สุดของดอน อินฟลูเอนเซอร์...",
						"hindi": "डॉन इन्फ्लुएंसर की सबसे पुरानी परछाई..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어디로 가야 해?",
						"english": "Where should I go?",
						"japanese": "どこへ行けばいい？",
						"chinese": "我该去哪儿？",
						"french": "Où dois-je aller ?",
						"spanish": "¿Adónde debo ir?",
						"vietnamese": "Tôi phải đi đâu?",
						"thai": "ฉันควรไปที่ไหน?",
						"hindi": "मुझे कहाँ जाना चाहिए?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 앞을 가로막았다. 정체 모를 자의 압도적인 기운.",
						"english": "In the darkness, a massive shadow blocked the way. The overwhelming aura of an unknown entity.",
						"japanese": "闇の中、巨大な影が道を阻んだ。正体不明の者の圧倒的な気配。",
						"chinese": "黑暗中，一个巨大的身影挡住了去路。一股不知名的压倒性气息。",
						"french": "Dans l'obscurité, une ombre massive bloquait le chemin. L'aura écrasante d'une entité inconnue.",
						"spanish": "En la oscuridad, una sombra gigantesca bloqueó el camino. La abrumadora aura de una entidad desconocida.",
						"vietnamese": "Trong bóng tối, một bóng đen khổng lồ chặn đường. Khí chất áp đảo của một kẻ vô danh.",
						"thai": "ในความมืด เงาขนาดมหึมาขวางทางอยู่ ออร่าอันน่าเกรงขามของสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "अंधेरे में, एक विशाल परछाई ने रास्ता रोक दिया। एक अज्ञात सत्ता की जबरदस्त आभा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 건가. 어리석은 것들.",
						"english": "So you've made it this far. Foolish ones.",
						"japanese": "ここまで来たか。愚かな者たちめ。",
						"chinese": "你们竟然走到这里了。愚蠢的家伙们。",
						"french": "Vous êtes arrivés jusqu'ici. Stupides créatures.",
						"spanish": "¿Así que habéis llegado hasta aquí? ¡Qué insensatos!",
						"vietnamese": "Ngươi đã đến được đây sao. Lũ ngu xuẩn.",
						"thai": "มาได้ถึงแค่นี้เองสินะ พวกโง่เอ๊ย",
						"hindi": "तो तुम यहाँ तक पहुँच गए। मूर्ख प्राणी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈들이… 사람들을 속였어! 도시를 망치고 있어!",
						"english": "You... you deceived the people! You're ruining the city!",
						"japanese": "お前たちが…人々を騙した！街をめちゃくちゃにしている！",
						"chinese": "你们……欺骗了人们！正在毁掉这座城市！",
						"french": "Vous... vous avez trompé les gens ! Vous êtes en train de détruire la ville !",
						"spanish": "¡Vosotros... engañasteis a la gente! ¡Estáis arruinando la ciudad!",
						"vietnamese": "Các ngươi... đã lừa dối mọi người! Đang hủy hoại thành phố!",
						"thai": "แก... แกหลอกลวงผู้คน! กำลังทำลายเมือง!",
						"hindi": "तुम लोगों ने... लोगों को धोखा दिया! तुम शहर को बर्बाद कर रहे हो!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우린, 그저 '영향력'을 보여준 것뿐. 약한 자들이 도태될 뿐이지.",
						"english": "We merely showed 'influence'. The weak are simply culled.",
						"japanese": "我々は、ただ『影響力』を示しただけだ。弱い者が淘汰されるだけのこと。",
						"chinese": "我们只是展现了‘影响力’。弱者不过是被淘汰罢了。",
						"french": "Nous n'avons fait que montrer notre 'influence'. Les faibles sont simplement éliminés.",
						"spanish": "Nosotros, simplemente mostramos 'influencia'. Los débiles son simplemente eliminados.",
						"vietnamese": "Chúng ta, chỉ là đã thể hiện 'sức ảnh hưởng' thôi. Kẻ yếu sẽ bị đào thải.",
						"thai": "เราแค่แสดง 'อิทธิพล' เท่านั้นเอง พวกที่อ่อนแอจะถูกคัดออกไปเอง",
						"hindi": "हमने तो बस 'प्रभाव' दिखाया है। कमज़ोर लोग बस खत्म हो जाते हैं।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout dévoré.",
						"spanish": "Una sombra gigantesca lo devoró todo.",
						"vietnamese": "Một cái bóng khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल छाया ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "후후… 네놈의 '좋아요'는 여기까지다.",
						"english": "Heh heh... Your 'likes' end here.",
						"japanese": "フフ…貴様の「いいね」はここまでだ。",
						"chinese": "呵呵……你的“喜欢”到此为止了。",
						"french": "Huhu... Tes \"j'aime\", c'est terminé.",
						"spanish": "Je je... Tus 'me gusta' terminan aquí.",
						"vietnamese": "Hahaha... 'Lượt thích' của ngươi đến đây là hết.",
						"thai": "ฮึ่ม... 'ไลก์' ของแกสิ้นสุดลงแค่นี้แหละ",
						"hindi": "हा हा... तुम्हारे 'लाइक' यहीं खत्म होते हैं।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "망할… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Maudit... Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... aún no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ... ยังไม่จบ!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 와봐라… 그땐 이 도시가 모두 '돈'님의 것이 될 테니.",
						"english": "Come back again... By then, this entire city will belong to Lord 'Money'.",
						"japanese": "また来るがいい…その時は、この街はすべて「金」様の物になっているだろうからな。",
						"chinese": "再来一次吧……届时，这座城市都将属于“钱”大人。",
						"french": "Reviens donc... D'ici là, toute cette ville appartiendra à Maître \"Argent\".",
						"spanish": "Vuelve a intentarlo... Para entonces, toda esta ciudad será del Señor 'Dinero'.",
						"vietnamese": "Hãy quay lại đi... Đến lúc đó, cả thành phố này sẽ thuộc về Ngài 'Tiền'.",
						"thai": "ลองกลับมาใหม่สิ... ตอนนั้นเมืองนี้ทั้งหมดจะกลายเป็นของท่าน 'เงิน'",
						"hindi": "दोबारा आओ... तब तक, यह पूरा शहर 'धन' स्वामी का हो जाएगा।"
					},
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 이 정도론… '돈'님을 막을 수… 없어.",
						"english": "Ugh... This won't be enough... to stop Lord 'Don'...",
						"japanese": "くっ…この程度では…「ドン」様を止められない…",
						"chinese": "呃……就凭这点……无法阻止‘唐’大人……",
						"french": "Ugh... Ce ne sera pas suffisant... pour arrêter Seigneur 'Don'...",
						"spanish": "Ugh... Esto no será suficiente... para detener al Señor 'Don'...",
						"vietnamese": "Khụ... Chỉ nhiêu đây thôi... không thể ngăn cản 'Don' đại nhân...",
						"thai": "อึก... แค่นี้... หยุดท่าน 'ดอน' ไม่ได้หรอก...",
						"hindi": "उफ़... यह काफी नहीं होगा... 'डॉन' साहब को रोकने के लिए..."
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니었어. 진짜는 아직…",
						"english": "...It's not over. The real thing is still...",
						"japanese": "「…終わってない。本当はまだ…」",
						"chinese": "“……还没结束。真正的挑战才刚开始……”",
						"french": "...Ce n'est pas fini. Le vrai défi est encore à venir...",
						"spanish": "...No ha terminado. Lo real aún...",
						"vietnamese": "...Chưa kết thúc. Điều thật sự vẫn còn...",
						"thai": "...ยังไม่จบ ของจริงยังคง...",
						"hindi": "...यह खत्म नहीं हुआ है। असली चीज़ अभी भी..."
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어둠 속에서 들려오는 목소리, “아직… 진짜 게임은 시작도 안 했다.”",
						"english": "A voice from the darkness, \"The real game hasn't even begun yet...\"",
						"japanese": "闇の中から声が聞こえる。「まだ…本当のゲームは始まってもいない。」",
						"chinese": "黑暗中传来一个声音，“还没……真正的游戏甚至还没开始。”",
						"french": "Une voix surgit des ténèbres : « Le vrai jeu n'a même pas encore commencé. »",
						"spanish": "Una voz desde la oscuridad: \"El juego real ni siquiera ha comenzado todavía...\"",
						"vietnamese": "Một giọng nói từ bóng tối, \"Trò chơi thực sự còn chưa bắt đầu...\"",
						"thai": "เสียงหนึ่งดังมาจากความมืด \"เกมของจริงยังไม่ได้เริ่มขึ้นด้วยซ้ำ...\"",
						"hindi": "अंधेरे से एक आवाज़ आती है, \"असली खेल तो अभी शुरू भी नहीं हुआ है...\""
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카운트다운은 멈추지 않았다. 도시를 삼키는 광적인 열기.",
			"돈 인플루언서의 '영향력'은 이제 공포가 되었다.",
			"하지만… 한때 그를 따르던 그림자가 다가왔다. 배신자의 고백.",
			"“그는… 디지털 가면을 쓴 마피아예요.”",
			"모든 것이 폭로될 순간이 다가온다."
		],
		"english": [
			"The countdown never stopped. A fervent heat engulfing the city.",
			"Don Influencer's 'influence' has now become terror.",
			"But… a shadow that once followed him approached. A traitor's confession.",
			"\"He's… a mafia in a digital mask.\"",
			"The moment everything will be exposed is approaching."
		],
		"japanese": [
			"カウントダウンは止まらなかった。都市を飲み込む狂気的な熱気。",
			"ドン・インフルエンサーの「影響力」は、今や恐怖と化した。",
			"しかし…かつて彼に従っていた影が迫ってきた。裏切り者の告白。",
			"「彼は…デジタルマスクを被ったマフィアだ。」",
			"全てが暴かれる瞬間が近づいている。"
		],
		"chinese": [
			"倒计时从未停止。吞噬这座城市的狂热。",
			"唐网红的“影响力”如今已成为恐怖。",
			"然而…一个曾追随他的影子正在逼近。叛徒的告白。",
			"“他…是一个戴着数字面具的黑手党。”",
			"一切都将被揭露的时刻即将到来。"
		],
		"french": [
			"Le compte à rebours ne s'est jamais arrêté. Une chaleur ardente engloutissant la ville.",
			"L'«influence» de Don l'influenceur est devenue terreur.",
			"Mais… une ombre qui le suivait autrefois s'approchait. La confession d'un traître.",
			"« Il est… un mafieux sous un masque numérique. »",
			"Le moment où tout sera révélé approche."
		],
		"spanish": [
			"La cuenta regresiva nunca se detuvo. Un calor ferviente que envolvía la ciudad.",
			"La «influencia» del Don Influyente ahora se ha convertido en terror.",
			"Pero… una sombra que una vez lo siguió se acercó. La confesión de un traidor.",
			"“Él es… un mafioso con una máscara digital.”",
			"El momento en que todo será expuesto se acerca."
		],
		"vietnamese": [
			"Đồng hồ đếm ngược không ngừng. Một cơn sốt cuồng nhiệt nuốt chửng thành phố.",
			"«Ảnh hưởng» của Don Người Có Ảnh Hưởng giờ đã trở thành nỗi kinh hoàng.",
			"Nhưng… một bóng hình từng theo dõi hắn đã đến gần. Lời thú tội của kẻ phản bội.",
			"“Hắn ta… là một tên mafia đội lốt kỹ thuật số.”",
			"Khoảnh khắc mọi thứ bị phơi bày đang đến gần."
		],
		"thai": [
			"การนับถอยหลังไม่เคยหยุดลง ความร้อนแรงที่กลืนกินเมือง",
			"'อิทธิพล' ของดอนอินฟลูเอนเซอร์บัดนี้ได้กลายเป็นความหวาดกลัว",
			"แต่…เงาที่เคยติดตามเขาได้เข้ามาใกล้ คำสารภาพของผู้ทรยศ",
			"“เขาคือ…มาเฟียที่สวมหน้ากากดิจิทัล”",
			"ช่วงเวลาที่ทุกสิ่งจะถูกเปิดเผยกำลังใกล้เข้ามา"
		],
		"hindi": [
			"उलटी गिनती कभी नहीं रुकी। शहर को निगलती एक उन्मत्त गर्मी।",
			"डॉन इन्फ्लुएंसर का 'प्रभाव' अब आतंक बन गया है।",
			"लेकिन… एक परछाई जो कभी उसका पीछा करती थी, पास आई। एक गद्दार का कबूलनामा।",
			"“वह… डिजिटल मास्क में एक माफिया है।”",
			"सब कुछ उजागर होने का क्षण आ रहा है।"
		]
	}
} as const;
