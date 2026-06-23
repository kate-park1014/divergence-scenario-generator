export const scenario_modern_alonzo_11_03 = {
	"scenario_id": "modern_alonzo_11_03",
	"order": 3,
	"act": "rising",
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 혈관이 끊기듯, 주요 시스템들이 멈춰 섰다.",
						"english": "Like severed city veins, the main systems ground to a halt.",
						"japanese": "都市の血管が断ち切られたかのように、主要なシステムが停止した。",
						"chinese": "如同城市血管被切断，主要系统纷纷停摆。",
						"french": "Comme des veines urbaines sectionnées, les systèmes principaux s'arrêtèrent.",
						"spanish": "Como venas urbanas cortadas, los sistemas principales se detuvieron.",
						"vietnamese": "Như thể mạch máu của thành phố bị cắt đứt, các hệ thống chính đã dừng hoạt động.",
						"thai": "ราวกับเส้นเลือดของเมืองถูกตัด ระบบหลักก็หยุดทำงานลง",
						"hindi": "शहर की नसें कटने की तरह, मुख्य सिस्टम रुक गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대체 무슨 일이… 빌딩 전광판이!",
						"english": "What in the world... the building's billboard!",
						"japanese": "一体何が… ビルボードが！",
						"chinese": "到底发生了什么… 楼体广告牌！",
						"french": "Mais qu'est-ce qui... Le panneau d'affichage du bâtiment !",
						"spanish": "Pero qué... ¡La valla publicitaria del edificio!",
						"vietnamese": "Chuyện quái gì đang xảy ra... Biển quảng cáo của tòa nhà!",
						"thai": "เกิดอะไรขึ้น... ป้ายโฆษณาของตึกนั่น!",
						"hindi": "ये क्या... बिल्डिंग का बिलबोर्ड!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "'블러드 오키드' 갱단 마크?!",
						"english": "'Blood Orchid' gang mark?!",
						"japanese": "「ブラッドオーキッド」ギャングのマーク！？",
						"chinese": "‘血兰’帮派标志？！",
						"french": "La marque du gang 'Blood Orchid' ?!",
						"spanish": "¡¿La marca de la pandilla 'Blood Orchid'?!",
						"vietnamese": "Dấu hiệu băng đảng 'Blood Orchid'?!",
						"thai": "เครื่องหมายแก๊ง 'Blood Orchid' ?!",
						"hindi": "'ब्लड ऑर्chid' गैंग का निशान?!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "…알론조. 당신이었어?",
						"english": "...Alonzo. Was it you?",
						"japanese": "…アロンゾ。あなただったの？",
						"chinese": "…阿隆索。是你吗？",
						"french": "...Alonzo. C'était toi ?",
						"spanish": "...Alonzo. ¿Eras tú?",
						"vietnamese": "...Alonzo. Là anh sao?",
						"thai": "...อลอนโซ่ เป็นนายเองเหรอ?",
						"hindi": "...अलोंजो। क्या तुम थे?"
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이런 식으로… 우리를 덮칠 줄이야.",
						"english": "To think you'd attack us like this...",
						"japanese": "こんなやり方で…私たちを襲うなんて。",
						"chinese": "竟然以这种方式…袭击我们。",
						"french": "Attaquer de cette manière... Je n'aurais jamais cru.",
						"spanish": "Que nos atacarías de esta manera...",
						"vietnamese": "Không ngờ anh lại tấn công chúng tôi theo cách này...",
						"thai": "ไม่คิดเลยว่าจะโจมตีเราแบบนี้...",
						"hindi": "इस तरह... हम पर हमला करोगे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "린, 무슨 소리야? 알론조는 죽었잖아?",
						"english": "Lynn, what are you talking about? Alonzo is dead, isn't he?",
						"japanese": "リン、何を言ってるの？アロンゾは死んだはずでしょ？",
						"chinese": "琳，你在说什么？阿隆索不是死了吗？",
						"french": "Lynn, de quoi tu parles ? Alonzo est mort, n'est-ce pas ?",
						"spanish": "Lynn, ¿de qué hablas? Alonzo está muerto, ¿no?",
						"vietnamese": "Lynn, cậu đang nói gì vậy? Alonzo đã chết rồi mà?",
						"thai": "ลิน เธอพูดอะไร? อลอนโซ่ตายไปแล้วไม่ใช่เหรอ?",
						"hindi": "लिन, तुम क्या कह रही हो? अलोंजो मर चुका है, है ना?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "죽지 않았어. 그의 시스템이, 살아있어.",
						"english": "He's not dead. His system... it's alive.",
						"japanese": "死んでない。彼のシステムが、生きている。",
						"chinese": "他没死。他的系统，还活着。",
						"french": "Il n'est pas mort. Son système... est toujours vivant.",
						"spanish": "No está muerto. Su sistema... sigue vivo.",
						"vietnamese": "Hắn chưa chết. Hệ thống của hắn, vẫn còn sống.",
						"thai": "เขายังไม่ตาย ระบบของเขา... ยังทำงานอยู่",
						"hindi": "वह मरा नहीं है। उसका सिस्टम, अभी भी ज़िंदा है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거의 그림자가, 우리를 덮치고 있어.",
						"english": "The shadows of the past are engulfing us.",
						"japanese": "過去の影が、私たちを襲っている。",
						"chinese": "过去的阴影，正在笼罩我们。",
						"french": "Les ombres du passé nous envahissent.",
						"spanish": "Las sombras del pasado nos están alcanzando.",
						"vietnamese": "Bóng tối của quá khứ đang bao trùm lấy chúng ta.",
						"thai": "เงาจากอดีตกำลังเข้าคุกคามเรา",
						"hindi": "अतीत की परछाइयाँ हमें घेर रही हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신도… 블러드 오키드 갱단이었어?",
						"english": "Were you... also part of the Blood Orchid gang?",
						"japanese": "あなたも… ブラッドオーキッドギャングだったの？",
						"chinese": "你也是… 血兰花帮的吗？",
						"french": "Toi aussi... tu faisais partie du gang Blood Orchid ?",
						"spanish": "¿Tú también... eras parte de la pandilla Blood Orchid?",
						"vietnamese": "Bạn cũng… từng là thành viên của băng Blood Orchid sao?",
						"thai": "คุณก็... เคยเป็นส่วนหนึ่งของแก๊ง Blood Orchid ด้วยเหรอ?",
						"hindi": "क्या तुम भी... ब्लड ऑर्किड गैंग के सदस्य थे?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 한때는… 그의 심복이었지.",
						"english": "Yes. Once... I was his confidant.",
						"japanese": "ええ。かつては… 彼の腹心だった。",
						"chinese": "是的。曾经… 我是他的心腹。",
						"french": "Oui. Autrefois... j'étais son homme de confiance.",
						"spanish": "Sí. Una vez... fui su mano derecha.",
						"vietnamese": "Đúng vậy. Đã từng… tôi là tâm phúc của hắn.",
						"thai": "ใช่ ครั้งหนึ่ง... ฉันเคยเป็นคนสนิทของเขา",
						"hindi": "हाँ। कभी... मैं उसका खास आदमी था।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이제 와서… 다 무슨 소용이야. 그의 손아귀에서, 벗어날 수 없어…",
						"english": "What's the point now...? We can't escape his grasp...",
						"japanese": "今さら… 何の意味がある。彼の支配から、逃れられない…",
						"chinese": "现在说这些… 又有什么用。我们无法摆脱他的掌控…",
						"french": "À quoi bon maintenant...? On ne peut pas échapper à son emprise...",
						"spanish": "¿De qué sirve ahora...? No podemos escapar de sus garras...",
						"vietnamese": "Bây giờ… còn ích gì nữa. Chúng ta không thể thoát khỏi tay hắn…",
						"thai": "ตอนนี้... มันจะไปมีประโยชน์อะไร เราหนีจากเงื้อมมือของเขาไม่ได้หรอก...",
						"hindi": "अब क्या फ़ायदा...? हम उसकी पकड़ से बच नहीं सकते..."
					},
					"speaker": "lin"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "알론조는 변했어. 예전의 그가 아니야.",
						"english": "Alonzo has changed. He's not the man he used to be.",
						"japanese": "アロンゾは変わった。もう、昔の彼じゃない。",
						"chinese": "阿隆佐变了。他不再是以前的他了。",
						"french": "Alonzo a changé. Il n'est plus l'homme qu'il était.",
						"spanish": "Alonzo ha cambiado. Ya no es el mismo de antes.",
						"vietnamese": "Alonzo đã thay đổi. Anh ta không còn là người như trước nữa.",
						"thai": "อลอนโซ่เปลี่ยนไปแล้ว เขาไม่ใช่คนเดิมอีกต่อไป",
						"hindi": "अलोंजो बदल गया है। वह अब पहले जैसा नहीं है।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "왜? 무슨 일이 있었는데?",
						"english": "Why? What happened?",
						"japanese": "なぜ？何があったの？",
						"chinese": "为什么？发生什么事了？",
						"french": "Pourquoi ? Que s'est-il passé ?",
						"spanish": "¿Por qué? ¿Qué pasó?",
						"vietnamese": "Tại sao? Chuyện gì đã xảy ra?",
						"thai": "ทำไม? เกิดอะไรขึ้น?",
						"hindi": "क्यों? क्या हुआ था?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 배신당했어. 모든 것을 잃었지.",
						"english": "He was betrayed. He lost everything.",
						"japanese": "彼は裏切られた。すべてを失ったんだ。",
						"chinese": "他被背叛了。失去了一切。",
						"french": "Il a été trahi. Il a tout perdu.",
						"spanish": "Fue traicionado. Lo perdió todo.",
						"vietnamese": "Anh ta đã bị phản bội. Anh ta mất tất cả.",
						"thai": "เขาถูกหักหลัง เขาสูญเสียทุกสิ่ง",
						"hindi": "उसे धोखा दिया गया था। उसने सब कुछ खो दिया।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "lin",
					"content": {
						"korean": "우리도… 똑같이 고통받았다고!",
						"english": "We... suffered just as much!",
						"japanese": "私たちも… 同じように苦しんだのよ！",
						"chinese": "我们… 也同样遭受了痛苦！",
						"french": "Nous aussi... nous avons souffert tout autant !",
						"spanish": "¡Nosotros también... sufrimos igual!",
						"vietnamese": "Chúng ta cũng… đã chịu đựng nỗi đau tương tự!",
						"thai": "พวกเราก็... เจ็บปวดไม่แพ้กัน!",
						"hindi": "हम भी... उतना ही पीड़ित हुए हैं!"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "제발… 그의 고통을 이해해 줘…",
						"english": "Please... understand his pain...",
						"japanese": "お願い… 彼の苦しみを理解してあげて…",
						"chinese": "拜托… 请理解他的痛苦…",
						"french": "S'il te plaît... comprends sa douleur...",
						"spanish": "Por favor... entiende su dolor...",
						"vietnamese": "Làm ơn… hãy hiểu nỗi đau của anh ấy…",
						"thai": "ได้โปรด... เข้าใจความเจ็บปวดของเขาด้วย...",
						"hindi": "कृपया... उसके दर्द को समझो..."
					},
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시 전역에 경고음이 울린다. 데이터 마비의 시한이 임박했다.",
						"english": "Alarms blare city-wide. Data paralysis is imminent.",
						"japanese": "全市に警報が鳴り響く。データ麻痺の時限が迫っている。",
						"chinese": "全城警报响起。数据瘫痪的期限已迫近。",
						"french": "Les alarmes retentissent dans toute la ville. La paralysie des données est imminente.",
						"spanish": "Las alarmas suenan en toda la ciudad. La parálisis de datos es inminente.",
						"vietnamese": "Còi báo động vang khắp thành phố. Thời hạn tê liệt dữ liệu đã cận kề.",
						"thai": "เสียงเตือนดังทั่วเมือง กำหนดเส้นตายของข้อมูลเป็นอัมพาตใกล้เข้ามาแล้ว",
						"hindi": "शहर भर में अलार्म बज रहे हैं। डेटा पक्षाघात का समय निकट है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늦었어… 모든 게 끝날 거야.",
						"english": "Too late… it's all over.",
						"japanese": "遅すぎた…全てが終わる。",
						"chinese": "太迟了…一切都将结束。",
						"french": "Trop tard… tout est fini.",
						"spanish": "Demasiado tarde… todo terminará.",
						"vietnamese": "Quá muộn rồi… mọi thứ sẽ kết thúc.",
						"thai": "สายเกินไปแล้ว…ทุกอย่างจะจบลง",
						"hindi": "बहुत देर हो चुकी है… सब खत्म हो जाएगा।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기하지 마!",
						"english": "Don't give up!",
						"japanese": "諦めるな！",
						"chinese": "别放弃！",
						"french": "N'abandonne pas !",
						"spanish": "¡No te rindas!",
						"vietnamese": "Đừng bỏ cuộc!",
						"thai": "อย่ายอมแพ้!",
						"hindi": "हार मत मानो!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는… 모든 것을 파괴할 생각이야.",
						"english": "He… intends to destroy everything.",
						"japanese": "彼は…全てを破壊するつもりだ。",
						"chinese": "他…打算摧毁一切。",
						"french": "Il… a l'intention de tout détruire.",
						"spanish": "Él… piensa destruirlo todo.",
						"vietnamese": "Hắn… định phá hủy mọi thứ.",
						"thai": "เขา…ตั้งใจจะทำลายทุกสิ่ง",
						"hindi": "वह… सब कुछ नष्ट करने वाला है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "막아야 해.",
						"english": "We must stop him.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止他。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn hắn lại.",
						"thai": "เราต้องหยุดเขา",
						"hindi": "हमें उसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "...그를 막는 건… 더 큰 고통을 불러올지도 몰라.",
						"english": "...Stopping him… might bring even greater pain.",
						"japanese": "…彼を止めることは…より大きな苦痛を招くかもしれない。",
						"chinese": "…阻止他…也许会带来更大的痛苦。",
						"french": "...L'arrêter… pourrait causer une douleur encore plus grande.",
						"spanish": "...Detenerlo… podría traer un dolor aún mayor.",
						"vietnamese": "...Ngăn cản hắn… có thể sẽ gây ra nỗi đau lớn hơn.",
						"thai": "...การหยุดเขา…อาจนำมาซึ่งความเจ็บปวดที่ยิ่งใหญ่กว่า",
						"hindi": "...उसे रोकना… और भी अधिक दर्द ला सकता है।"
					},
					"speaker": "lin",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거슬리는 벌레들이… 기어이 여기까지 왔군.",
						"english": "Annoying bugs… have finally crawled all the way here.",
						"japanese": "忌々しい虫けらどもめ…よくもここまで来たな。",
						"chinese": "烦人的虫子们…居然爬到这里来了。",
						"french": "Ces insectes agaçants… sont finalement arrivés jusqu'ici.",
						"spanish": "Molestos insectos… finalmente han llegado hasta aquí.",
						"vietnamese": "Lũ côn trùng đáng ghét… cuối cùng cũng bò tới đây rồi.",
						"thai": "พวกแมลงน่ารำคาญ…ในที่สุดก็คลานมาถึงที่นี่แล้ว",
						"hindi": "परेशान करने वाले कीड़े… आखिर यहाँ तक आ ही गए।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 모든 걸 조종하는 거야?",
						"english": "Are you… controlling everything?",
						"japanese": "お前が…全てを操っているのか？",
						"chinese": "你…在操控一切吗？",
						"french": "C'est toi… qui contrôles tout ?",
						"spanish": "¿Tú… controlas todo?",
						"vietnamese": "Ngươi… là kẻ điều khiển mọi thứ ư?",
						"thai": "คุณ…เป็นผู้ควบคุมทุกสิ่งใช่ไหม?",
						"hindi": "क्या तुम… सब कुछ नियंत्रित कर रहे हो?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "{random_boss}의 의지는… 이 도시 그 자체다.",
						"english": "The will of {random_boss}… is the city itself.",
						"japanese": "{random_boss}の意志は…この都市そのものだ。",
						"chinese": "{random_boss}的意志…就是这座城市本身。",
						"french": "La volonté de {random_boss}… est la ville elle-même.",
						"spanish": "La voluntad de {random_boss}… es la ciudad misma.",
						"vietnamese": "Ý chí của {random_boss}… chính là bản thân thành phố này.",
						"thai": "เจตจำนงของ {random_boss}…คือตัวเมืองนี้เอง",
						"hindi": "{random_boss} की इच्छा… यह शहर ही है।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서… 끝내주겠어.",
						"english": "I'll… end you here.",
						"japanese": "ここで…終わりにしてやる。",
						"chinese": "就在这里…结束你。",
						"french": "Je vais… en finir avec toi ici.",
						"spanish": "Aquí… te acabaré.",
						"vietnamese": "Tại đây… ta sẽ kết thúc ngươi.",
						"thai": "ฉันจะ…จบเรื่องนายตรงนี้",
						"hindi": "मैं… तुम्हें यहीं खत्म कर दूंगा।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…결국, 너희도 똑같군.",
						"english": "...So, you're all the same after all.",
						"japanese": "…結局、お前たちも同じか。",
						"chinese": "……看来，你们也一样。",
						"french": "...Au final, vous êtes tous pareils.",
						"spanish": "...Al final, todos sois iguales.",
						"vietnamese": "...Cuối cùng, các ngươi cũng giống nhau thôi.",
						"thai": "...สุดท้ายแล้ว พวกเจ้าก็เหมือนกันหมด",
						"hindi": "...आखिरकार, तुम सब भी एक जैसे ही हो।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "ท่านกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "배신. 파괴. 인간의 본질은… 변하지 않아.",
						"english": "Betrayal. Destruction. The essence of humanity... never changes.",
						"japanese": "裏切り。破壊。人間の本質は… 変わらない。",
						"chinese": "背叛。毁灭。人类的本质……永不改变。",
						"french": "Trahison. Destruction. L'essence de l'humanité... ne change jamais.",
						"spanish": "Traición. Destrucción. La esencia de la humanidad... nunca cambia.",
						"vietnamese": "Phản bội. Hủy diệt. Bản chất con người... không bao giờ thay đổi.",
						"thai": "การทรยศ การทำลายล้าง แก่นแท้ของมนุษย์...ไม่เคยเปลี่ยน",
						"hindi": "धोखा। विनाश। इंसान का सार... कभी नहीं बदलता।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 사라지자, 도시의 경고음이 잠시 멈췄다.",
						"english": "As the colossal shadow vanished, the city's alarms briefly ceased.",
						"japanese": "巨大な影が消え去ると、都市の警報は一時的に鳴り止んだ。",
						"chinese": "随着巨大的阴影消失，城市的警报声暂时停止了。",
						"french": "Alors que l'ombre colossale disparaissait, les alarmes de la ville s'arrêtèrent un instant.",
						"spanish": "Cuando la colosal sombra se desvaneció, las alarmas de la ciudad cesaron brevemente.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, còi báo động của thành phố tạm thời ngừng lại.",
						"thai": "เมื่อเงาขนาดมหึมาหายไป เสียงเตือนภัยของเมืองก็เงียบลงชั่วขณะ",
						"hindi": "जैसे ही विशालकाय परछाई गायब हुई, शहर के अलार्म थोड़ी देर के लिए रुक गए।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하지만 진정한 배후는, 여전히 어둠 속에 잠들어 있었다.",
						"english": "But the true mastermind still lay dormant in the shadows.",
						"japanese": "しかし、真の黒幕は、依然として闇の中に眠っていた。",
						"chinese": "然而，真正的幕后黑手，依然沉睡在黑暗中。",
						"french": "Mais le véritable cerveau dormait encore dans l'ombre.",
						"spanish": "Pero el verdadero cerebro aún yacía dormido en las sombras.",
						"vietnamese": "Nhưng kẻ chủ mưu thực sự vẫn còn ngủ yên trong bóng tối.",
						"thai": "แต่เบื้องหลังที่แท้จริงยังคงหลับใหลอยู่ในเงามืด",
						"hindi": "लेकिन असली मास्टरमाइंड अभी भी अंधेरे में सोया हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아직 멀었다.",
						"english": "Not good enough yet.",
						"japanese": "まだまだだな。",
						"chinese": "还差得远呢。",
						"french": "Pas encore assez bon.",
						"spanish": "Todavía no es suficiente.",
						"vietnamese": "Còn kém xa lắm.",
						"thai": "ยังห่างไกลนัก",
						"hindi": "अभी बहुत दूर है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어!",
						"english": "Ugh... I can't end it here!",
						"japanese": "くっ…ここで終わるわけにはいかない！",
						"chinese": "呃……不能在这里结束！",
						"french": "Ugh... Je ne peux pas en finir ici !",
						"spanish": "Ugh... ¡No puedo terminar aquí!",
						"vietnamese": "Khụ... Ta không thể kết thúc ở đây được!",
						"thai": "อึก... จะจบแค่นี้ไม่ได้!",
						"hindi": "उह... मैं इसे यहाँ खत्म नहीं कर सकता!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…다음에 다시 와라. 절망의 끝을 보여주마.",
						"english": "...Come back next time. I'll show you the depths of despair.",
						"japanese": "…次に戻ってこい。絶望の果てを見せてやろう。",
						"chinese": "……下次再来吧。我将让你见识绝望的尽头。",
						"french": "...Revenez la prochaine fois. Je vous montrerai les profondeurs du désespoir.",
						"spanish": "...Vuelve la próxima vez. Te mostraré los abismos de la desesperación.",
						"vietnamese": "...Lần sau hãy quay lại. Ta sẽ cho ngươi thấy tận cùng của sự tuyệt vọng.",
						"thai": "...กลับมาใหม่คราวหน้า ข้าจะแสดงให้เจ้าเห็นจุดจบของความสิ้นหวัง",
						"hindi": "...अगली बार फिर आना। मैं तुम्हें निराशा का अंत दिखाऊंगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 시스템이, 하나둘 침묵하기 시작했다.",
			"알론조의 복수극은, 옛 갱단원들의 숨통을 죄었다.",
			"충직했던 부하 '린'마저, 절망의 손아귀에 갇혔다.",
			"모든 데이터가 멈추기까지, 시간은 얼마 남지 않았다."
		],
		"english": [
			"The city's systems began to fall silent, one by one.",
			"Alonzo's revenge began to choke the former gang members.",
			"Even his loyal subordinate, 'Lynn', was trapped in the grip of despair.",
			"Little time remained until all data ceased."
		],
		"japanese": [
			"都市のシステムが、一つ、また一つと沈黙し始めた。",
			"アロンゾの復讐劇は、かつてのギャングたちの息の根を止めた。",
			"忠実な部下「リン」までもが、絶望の手に囚われた。",
			"全てのデータが停止するまで、残された時間は僅かだった。"
		],
		"chinese": [
			"城市的系统，一个接一个地陷入了沉寂。",
			"阿隆索的复仇，扼住了昔日帮派成员的咽喉。",
			"就连忠诚的部下“琳”，也被困在绝望的魔掌中。",
			"所有数据停止之前，时间所剩无几。"
		],
		"french": [
			"Les systèmes de la ville commençaient à s'éteindre, un par un.",
			"La vengeance d'Alonzo étranglait les anciens membres du gang.",
			"Même son fidèle subordonné, 'Lynn', était pris dans l'étreinte du désespoir.",
			"Il ne restait que peu de temps avant que toutes les données ne cessent."
		],
		"spanish": [
			"Los sistemas de la ciudad, uno a uno, empezaron a silenciarse.",
			"La venganza de Alonzo comenzó a asfixiar a los antiguos miembros de la pandilla.",
			"Incluso su leal subordinada, 'Lynn', quedó atrapada en las garras de la desesperación.",
			"Poco tiempo quedaba hasta que todos los datos cesaran."
		],
		"vietnamese": [
			"Các hệ thống của thành phố, lần lượt, bắt đầu chìm vào im lặng.",
			"Cuộc báo thù của Alonzo đã siết chặt cổ họng những cựu thành viên băng đảng.",
			"Ngay cả cấp dưới trung thành 'Lynn' cũng bị mắc kẹt trong vòng tay của sự tuyệt vọng.",
			"Không còn nhiều thời gian cho đến khi tất cả dữ liệu ngừng hoạt động."
		],
		"thai": [
			"ระบบของเมืองเริ่มเงียบลงทีละระบบ",
			"การแก้แค้นของอลอนโซ่เริ่มรัดคออดีตสมาชิกแก๊ง",
			"แม้แต่ 'ลิน' ผู้ใต้บังคับบัญชาที่ภักดี ก็ยังติดอยู่ในกำมือของความสิ้นหวัง",
			"เหลือเวลาอีกไม่มากจนกว่าข้อมูลทั้งหมดจะหยุดลง"
		],
		"hindi": [
			"शहर के सिस्टम, एक-एक करके खामोश होने लगे।",
			"अलोंजो का बदला पुराने गैंग के सदस्यों का दम घोंटने लगा।",
			"यहां तक कि उसकी वफादार अधीनस्थ, 'लिन', भी निराशा की पकड़ में फंस गई थी।",
			"सभी डेटा के बंद होने तक, बहुत कम समय बचा था।"
		]
	}
} as const;
