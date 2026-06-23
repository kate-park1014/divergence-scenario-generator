export const scenario_desert_aetherium_8_02 = {
	"scenario_id": "desert_aetherium_8_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막의 오아시스. 고요함 아래, 과거가 숨 쉬었다.",
			"고고학자 아슈르, 금지된 유물에 손을 댔다.",
			"뒤틀린 마나, 환영과 광기를 속삭였다.",
			"비명조차 사막에 흡수된다. 진실은 항상 잔혹하다."
		],
		"english": [
			"Desert oasis. Beneath the calm, the past breathed.",
			"Archaeologist Ashur touched the forbidden artifact.",
			"Twisted mana whispered illusions and madness.",
			"Even screams are absorbed by the desert. Truth is always cruel."
		],
		"japanese": [
			"砂漠のオアシス。静寂の下、過去が息づいていた。",
			"考古学者アシュル、禁断の遺物に手を出した。",
			"ねじれたマナ、幻影と狂気を囁いた。",
			"悲鳴さえ砂漠に吸い込まれる。真実は常に残酷だ。"
		],
		"chinese": [
			"沙漠绿洲。宁静之下，过去在呼吸。",
			"考古学家阿什尔，触碰了禁忌的遗物。",
			"扭曲的魔力，低语着幻象与疯狂。",
			"甚至连尖叫都被沙漠吞噬。真相总是残酷的。"
		],
		"french": [
			"Oasis du désert. Sous le calme, le passé respirait.",
			"L'archéologue Ashur toucha l'artefact interdit.",
			"Le mana tordu chuchotait des illusions et de la folie.",
			"Même les cris sont absorbés par le désert. La vérité est toujours cruelle."
		],
		"spanish": [
			"Oasis del desierto. Bajo la calma, el pasado respiraba.",
			"El arqueólogo Ashur tocó el artefacto prohibido.",
			"El maná retorcido susurró ilusiones y locura.",
			"Incluso los gritos son absorbidos por el desierto. La verdad siempre es cruel."
		],
		"vietnamese": [
			"Ốc đảo sa mạc. Dưới sự tĩnh lặng, quá khứ đang thì thầm.",
			"Nhà khảo cổ Ashur chạm vào di vật cấm.",
			"Mana méo mó thì thầm ảo ảnh và sự điên loạn.",
			"Ngay cả tiếng hét cũng bị sa mạc nuốt chửng. Sự thật luôn tàn khốc."
		],
		"thai": [
			"โอเอซิสกลางทะเลทราย ใต้ความสงบ อดีตได้หายใจอยู่",
			"อาร์คัส นักโบราณคดี สัมผัสวัตถุโบราณต้องห้าม",
			"มานาที่บิดเบือน กระซิบภาพลวงตาและความบ้าคลั่ง",
			"แม้แต่เสียงกรีดร้องก็ถูกดูดซับโดยทะเลทราย ความจริงมักจะโหดร้ายเสมอ"
		],
		"hindi": [
			"रेगिस्तानी नखलिस्तान। शांति के नीचे, अतीत साँस ले रहा था।",
			"पुरातत्वविद् अशुर ने वर्जित कलाकृति को छुआ।",
			"मुड़ी हुई मन ने भ्रम और पागलपन फुसफुसाए।",
			"यहाँ तक कि चीखें भी रेगिस्तान में समा जाती हैं। सत्य हमेशा क्रूर होता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "오아시스에 다다랐다. 사막 속 생명의 유일한 흔적.",
						"english": "Reached the oasis. The only trace of life in the desert.",
						"japanese": "オアシスに辿り着いた。砂漠における唯一の生命の痕跡。",
						"chinese": "抵达了绿洲。沙漠中唯一的生命痕迹。",
						"french": "Atteint l'oasis. La seule trace de vie dans le désert.",
						"spanish": "Llegué al oasis. El único rastro de vida en el desierto.",
						"vietnamese": "Đã đến ốc đảo. Dấu vết duy nhất của sự sống trong sa mạc.",
						"thai": "มาถึงโอเอซิสแล้ว ร่องรอยเดียวของชีวิตในทะเลทราย",
						"hindi": "नखलिस्तान पहुँच गया। रेगिस्तान में जीवन का एकमात्र निशान।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ashur",
					"content": {
						"korean": "아! 드디어! 이걸 찾았다고!",
						"english": "Ah! Finally! I found it!",
						"japanese": "ああ！ついに！これを見つけたぞ！",
						"chinese": "啊！终于！我找到了！",
						"french": "Ah ! Enfin ! Je l'ai trouvé !",
						"spanish": "¡Ah! ¡Finalmente! ¡Lo encontré!",
						"vietnamese": "A! Cuối cùng! Tôi tìm thấy nó rồi!",
						"thai": "อา! ในที่สุด! ฉันเจอแล้ว!",
						"hindi": "आह! आखिरकार! मुझे यह मिल गया!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은? 뭘 찾은 겁니까?",
						"english": "And you? What did you find?",
						"japanese": "あなたは？何を見つけたのですか？",
						"chinese": "你是谁？你找到了什么？",
						"french": "Vous ? Qu'avez-vous trouvé ?",
						"spanish": "¿Usted? ¿Qué encontró?",
						"vietnamese": "Bạn là ai? Bạn đã tìm thấy gì?",
						"thai": "คุณคือใคร? คุณเจออะไร?",
						"hindi": "आप? आपको क्या मिला?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ashur",
					"content": {
						"korean": "나는 아슈르. 고대 블레이드마스터들의 유물을 연구하는 자.",
						"english": "I am Ashur. One who studies the relics of ancient Blademasters.",
						"japanese": "私はアシュル。古代のブレードマスターたちの遺物を研究する者だ。",
						"chinese": "我是阿什尔。研究古代剑术大师遗物的人。",
						"french": "Je suis Ashur. Celui qui étudie les reliques des anciens Maîtres Lames.",
						"spanish": "Soy Ashur. Quien estudia las reliquias de los antiguos Maestros de la Espada.",
						"vietnamese": "Tôi là Ashur. Người nghiên cứu di vật của các Kiếm Sư cổ đại.",
						"thai": "ฉันคืออาร์ชัวร์ ผู้ศึกษาวัตถุโบราณของเหล่าเบลดมาสเตอร์โบราณ",
						"hindi": "मैं अशुर हूँ। प्राचीन ब्लेडमास्टर्स के अवशेषों का अध्ययन करने वाला।"
					}
				},
				{
					"speaker": "ashur",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이 칼날 조각, 심상치 않아!",
						"english": "This blade fragment, it's not ordinary!",
						"japanese": "この刀の破片、尋常ではない！",
						"chinese": "这块刀刃碎片，非同寻常！",
						"french": "Ce fragment de lame, il n'est pas ordinaire !",
						"spanish": "¡Este fragmento de hoja no es común!",
						"vietnamese": "Mảnh kiếm này, không tầm thường!",
						"thai": "ชิ้นส่วนดาบนี้ ไม่ธรรมดา!",
						"hindi": "यह ब्लेड का टुकड़ा, यह सामान्य नहीं है!"
					}
				},
				{
					"content": {
						"korean": "아슈르의 손에 들린 칼날 조각에서 섬뜩한 냉기가 느껴졌다.",
						"english": "A chilling cold emanated from the blade fragment in Ashur's hand.",
						"japanese": "アシュルの手に握られた刀の破片から、ぞっとするような冷気が感じられた。",
						"chinese": "阿什尔手中刀刃碎片散发出令人毛骨悚然的寒气。",
						"french": "Une froideur sinistre émanait du fragment de lame dans la main d'Ashur.",
						"spanish": "Un frío espeluznante emanaba del fragmento de hoja en la mano de Ashur.",
						"vietnamese": "Một luồng khí lạnh đáng sợ phát ra từ mảnh kiếm trong tay Ashur.",
						"thai": "สัมผัสได้ถึงความเย็นยะเยือกน่าขนลุกจากชิ้นส่วนดาบในมือของอาร์ชัวร์",
						"hindi": "अशुर के हाथ में मौजूद ब्लेड के टुकड़े से एक भयानक ठंडक महसूस हुई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…위험해 보여요.",
						"english": "...Looks dangerous.",
						"japanese": "...危険に見えます。",
						"chinese": "...看起来很危险。",
						"french": "...Ça a l'air dangereux.",
						"spanish": "...Parece peligroso.",
						"vietnamese": "...Trông nguy hiểm quá.",
						"thai": "...ดูอันตรายจังเลยค่ะ",
						"hindi": "...खतरनाक लग रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니, 이건… 진실을 보여줄 거야!",
						"english": "No, this... this will show the truth!",
						"japanese": "いや、これは…真実を見せてくれるだろう！",
						"chinese": "不，这…会揭示真相！",
						"french": "Non, ça… ça va révéler la vérité !",
						"spanish": "¡No, esto… esto mostrará la verdad!",
						"vietnamese": "Không, cái này... nó sẽ cho thấy sự thật!",
						"thai": "ไม่สิ นี่มัน... จะแสดงความจริงให้เห็น!",
						"hindi": "नहीं, यह... यह सच्चाई दिखाएगा!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ashur"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ashur"
				},
				{
					"emotion": "happy",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "들려? 이 칼날이 속삭이는 소리!",
						"english": "Hear that? The whisper of this blade!",
						"japanese": "聞こえるか？この刃のささやきが！",
						"chinese": "听到了吗？这刀刃的低语！",
						"french": "Tu entends ? Le murmure de cette lame !",
						"spanish": "¿Escuchas? ¡El susurro de esta hoja!",
						"vietnamese": "Nghe không? Tiếng thì thầm của lưỡi kiếm này!",
						"thai": "ได้ยินไหม? เสียงกระซิบของคมดาบนี้!",
						"hindi": "सुना? इस तलवार की फुसफुसाहट!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…무슨 소리 하는 거예요?",
						"english": "...What are you talking about?",
						"japanese": "...何を言ってるんですか？",
						"chinese": "...你在说什么？",
						"french": "...De quoi parlez-vous ?",
						"spanish": "...¿De qué estás hablando?",
						"vietnamese": "...Anh đang nói cái gì vậy?",
						"thai": "...คุณกำลังพูดถึงอะไรคะ?",
						"hindi": "...आप क्या कह रहे हैं?"
					}
				},
				{
					"content": {
						"korean": "아슈르의 눈동자가 흔들렸다. 광기에 잠식되는 것 같았다.",
						"english": "Ashur's eyes flickered. He seemed to be consumed by madness.",
						"japanese": "アシュルの瞳が揺れた。狂気に侵食されているようだった。",
						"chinese": "阿舒尔的眼睛闪烁不定。他似乎被疯狂吞噬了。",
						"french": "Les yeux d'Ashur vacillèrent. Il semblait être consumé par la folie.",
						"spanish": "Los ojos de Ashur temblaron. Parecía estar siendo consumido por la locura.",
						"vietnamese": "Đôi mắt của Ashur rung động. Anh ta dường như đang bị sự điên loạn nuốt chửng.",
						"thai": "ดวงตาของอชูร์สั่นไหว เขาดูเหมือนถูกความบ้าคลั่งกลืนกิน",
						"hindi": "आशूर की आँखें काँपीं। वह पागलपन में डूबा हुआ लग रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "사막이… 모든 것을 흡수한다고 했어. 그게… 진실이었어!",
						"english": "They said the desert... absorbs everything. That was... the truth!",
						"japanese": "砂漠が…すべてを吸い込むと言った。それが…真実だったんだ！",
						"chinese": "他们说沙漠…会吞噬一切。那就是…真相！",
						"french": "Ils ont dit que le désert… absorbe tout. C'était… la vérité !",
						"spanish": "Dijeron que el desierto… absorbe todo. ¡Esa era… la verdad!",
						"vietnamese": "Họ nói sa mạc... hút mọi thứ. Đó là... sự thật!",
						"thai": "พวกเขาบอกว่าทะเลทราย... ดูดกลืนทุกสิ่ง นั่นคือ... ความจริง!",
						"hindi": "उन्होंने कहा था कि रेगिस्तान... सब कुछ सोख लेता है। वही... सच्चाई थी!"
					}
				},
				{
					"content": {
						"korean": "정신 차려요, 아슈르!",
						"english": "Snap out of it, Ashur!",
						"japanese": "しっかりして、アシュル！",
						"chinese": "清醒一点，阿舒尔！",
						"french": "Reprenez-vous, Ashur !",
						"spanish": "¡Recupera la cordura, Ashur!",
						"vietnamese": "Tỉnh táo lại đi, Ashur!",
						"thai": "ตั้งสติหน่อยค่ะ อชูร์!",
						"hindi": "होश में आओ, आशूर!"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"speaker": "ashur",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "흐읍… 후회하는 건가? 늦었어… 이미…!",
						"english": "Hmph... regretting it? Too late... it's already...!",
						"japanese": "フッ…後悔しているのか？遅い…もう…！",
						"chinese": "哼…后悔了吗？太迟了…已经…！",
						"french": "Hmph… Tu regrettes ? Trop tard… c'est déjà… !",
						"spanish": "Hmph… ¿Te arrepientes? Demasiado tarde… ¡ya…!",
						"vietnamese": "Hừm... hối hận sao? Quá muộn rồi... đã...!",
						"thai": "ฮึ่ม... เสียใจงั้นเหรอ? สายไปแล้ว... มัน...!",
						"hindi": "हूँ… पछता रहे हो? बहुत देर हो चुकी है… पहले से ही…!"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "happy",
					"content": {
						"korean": "(광기 어린 웃음) 하하! 봤어? 이 환영! 너무 아름다워!",
						"english": "(Manic laughter) Hahaha! Did you see? This vision! So beautiful!",
						"japanese": "（狂気じみた笑い）ハハ！見たか？この幻影！なんて美しいんだ！",
						"chinese": "(狂笑)哈哈！看到了吗？这幻象！太美了！",
						"french": "(Rire dément) Hahaha ! Tu as vu ? Cette vision ! C'est si beau !",
						"spanish": "(Risa maniática) ¡Jajaja! ¿Lo viste? ¡Esta visión! ¡Es tan hermosa!",
						"vietnamese": "(Cười điên dại) Haha! Thấy không? Ảo ảnh này! Đẹp quá!",
						"thai": "(หัวเราะอย่างบ้าคลั่ง) ฮ่าฮ่า! เห็นไหม? ภาพหลอนนี้! ช่างสวยงามเหลือเกิน!",
						"hindi": "(पागलपन भरी हँसी) हाहा! देखा? यह भ्रम! कितना सुंदर है!"
					}
				},
				{
					"content": {
						"korean": "환영? 대체 뭐가 보여요?",
						"english": "Vision? What exactly do you see?",
						"japanese": "幻影？一体何が見えるんですか？",
						"chinese": "幻象？你到底看到了什么？",
						"french": "Vision ? Que voyez-vous exactement ?",
						"spanish": "¿Visión? ¿Qué ves exactamente?",
						"vietnamese": "Ảo ảnh? Anh thấy cái gì vậy?",
						"thai": "ภาพหลอนเหรอคะ? คุณเห็นอะไรกันแน่?",
						"hindi": "भ्रम? आपको असल में क्या दिख रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ashur",
					"content": {
						"korean": "그들은… 흡수된 게 아니었어! 사막의 일부가 된 거야! 영원히… 영원히…",
						"english": "They weren't... absorbed! They became part of the desert! Forever... forever...",
						"japanese": "彼らは…吸収されたわけじゃなかった！砂漠の一部になったんだ！永遠に…永遠に…",
						"chinese": "他们…不是被吸收了！他们成为了沙漠的一部分！永远…永远…",
						"french": "Ils n'ont pas été... absorbés ! Ils sont devenus une partie du désert ! Pour toujours... pour toujours...",
						"spanish": "¡No fueron... absorbidos! ¡Se convirtieron en parte del desierto! Para siempre... para siempre...",
						"vietnamese": "Họ không phải... bị hấp thụ! Họ đã trở thành một phần của sa mạc! Mãi mãi... mãi mãi...",
						"thai": "พวกเขาไม่ได้...ถูกดูดกลืน! พวกเขากลายเป็นส่วนหนึ่งของทะเลทราย! ตลอดไป...ตลอดไป...",
						"hindi": "वे...अवशोषित नहीं हुए थे! वे रेगिस्तान का हिस्सा बन गए थे! हमेशा के लिए... हमेशा के लिए..."
					}
				},
				{
					"content": {
						"korean": "그의 시선은 허공을 헤매고 있었다. 오아시스의 환영이 뒤틀리는 것처럼.",
						"english": "His gaze wandered aimlessly. Like an oasis's mirage twisting.",
						"japanese": "彼の視線は宙をさまよっていた。オアシスの幻影が歪むように。",
						"chinese": "他的目光在空中游荡。如同绿洲的幻影扭曲一般。",
						"french": "Son regard errait dans le vide. Comme le mirage d'une oasis se tordant.",
						"spanish": "Su mirada vagaba sin rumbo. Como la ilusión de un oasis retorciéndose.",
						"vietnamese": "Ánh mắt anh ta lạc lối vào hư không. Giống như ảo ảnh ốc đảo đang vặn vẹo.",
						"thai": "สายตาของเขาลอยเคว้งคว้างอยู่ในอากาศ เหมือนภาพลวงตาของโอเอซิสกำลังบิดเบี้ยว",
						"hindi": "उसकी नज़रें शून्य में भटक रही थीं। जैसे किसी नखलिस्तान का मृगतृष्णा मुड़ रहा हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그 유물을 당장 내려놔요!",
						"english": "Put down that artifact now!",
						"japanese": "その遺物を今すぐ置きなさい！",
						"chinese": "立刻放下那个古物！",
						"french": "Lâchez cet artefact immédiatement !",
						"spanish": "¡Suelta ese artefacto ahora mismo!",
						"vietnamese": "Hãy đặt vật phẩm đó xuống ngay!",
						"thai": "วางของโบราณนั่นลงเดี๋ยวนี้!",
						"hindi": "उस कलाकृति को अभी नीचे रखो!"
					},
					"emotion": "angry",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "싫어! 이건… 내가 찾아낸 진실이야!",
						"english": "No! This is... the truth I found!",
						"japanese": "嫌だ！これは…私が見つけ出した真実なんだ！",
						"chinese": "不！这是…我发现的真相！",
						"french": "Non ! C'est... la vérité que j'ai découverte !",
						"spanish": "¡No! ¡Esta es... la verdad que he encontrado!",
						"vietnamese": "Không! Đây là... sự thật mà tôi đã tìm ra!",
						"thai": "ไม่! นี่คือ...ความจริงที่ฉันค้นพบ!",
						"hindi": "नहीं! यह... वह सच है जो मैंने खोजा है!"
					}
				},
				{
					"content": {
						"korean": "이러다 당신까지…",
						"english": "If this continues, even you will...",
						"japanese": "このままだとあなたまで…",
						"chinese": "这样下去连你也会…",
						"french": "Si ça continue, même vous...",
						"spanish": "Si sigues así, incluso tú...",
						"vietnamese": "Nếu cứ thế này, đến cả bạn cũng sẽ...",
						"thai": "ถ้าเป็นแบบนี้ต่อไป แม้แต่คุณก็จะ...",
						"hindi": "अगर ऐसा चलता रहा, तो तुम भी..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "저기로… 날 부르고 있어!",
						"english": "Over there... it's calling me!",
						"japanese": "あそこが…私を呼んでいる！",
						"chinese": "那里…在呼唤我！",
						"french": "Là-bas... ça m'appelle !",
						"spanish": "¡Allá... me está llamando!",
						"vietnamese": "Đằng đó... nó đang gọi tôi!",
						"thai": "ตรงนั้น...มันกำลังเรียกฉัน!",
						"hindi": "वहाँ... वह मुझे बुला रहा है!"
					},
					"type": "speech",
					"speaker": "ashur",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어디로 가는 겁니까?",
						"english": "Where are you going?",
						"japanese": "どちらへ行かれるのですか？",
						"chinese": "你要去哪里？",
						"french": "Où allez-vous ?",
						"spanish": "¿Adónde va?",
						"vietnamese": "Bạn đang đi đâu vậy?",
						"thai": "คุณกำลังจะไปไหน?",
						"hindi": "आप कहाँ जा रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아슈르의 몸이 마치 실에 묶인 인형처럼 움직였다.",
						"english": "Ashur's body moved like a puppet on strings.",
						"japanese": "アシュルの体が、まるで糸で操られる人形のように動いた。",
						"chinese": "阿什尔的身体像被线牵引的木偶一样移动着。",
						"french": "Le corps d'Ashur bougeait comme une marionnette sur des fils.",
						"spanish": "El cuerpo de Ashur se movía como una marioneta con hilos.",
						"vietnamese": "Cơ thể của Ashur cử động như một con rối bị buộc dây.",
						"thai": "ร่างของอาชูร์ขยับราวกับหุ่นเชิด",
						"hindi": "आशुर का शरीर धागों से बंधी कठपुतली की तरह हिल रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ashur",
					"content": {
						"korean": "나는… 나는… 그들과 함께… 진실을…",
						"english": "I... I... with them... the truth...",
						"japanese": "私は…私は…彼らと共に…真実を…",
						"chinese": "我…我…和他们一起…真相…",
						"french": "Je... je... avec eux... la vérité...",
						"spanish": "Yo... yo... con ellos... la verdad...",
						"vietnamese": "Tôi... tôi... cùng với họ... sự thật...",
						"thai": "ฉัน...ฉัน...อยู่กับพวกเขา...ความจริง...",
						"hindi": "मैं... मैं... उनके साथ... सच..."
					}
				},
				{
					"content": {
						"korean": "안 돼요! 붙잡아!",
						"english": "No! Grab him!",
						"japanese": "だめだ！捕まえろ！",
						"chinese": "不行！抓住他！",
						"french": "Non ! Attrapez-le !",
						"spanish": "¡No! ¡Atrápenlo!",
						"vietnamese": "Không được! Giữ anh ta lại!",
						"thai": "ไม่นะ! จับเขาไว้!",
						"hindi": "नहीं! उसे पकड़ो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "사막 깊은 곳에서 거대한 공허함이 느껴졌다. 모든 것을 빨아들이는 듯한 기이한 기운.",
						"english": "A vast emptiness resonated from the deep desert. A strange aura, as if consuming all.",
						"japanese": "砂漠の深奥に巨大な虚無感が響いた。全てを吸い込むかのような奇妙な気配。",
						"chinese": "沙漠深处，巨大的虚无感袭来。一股仿佛能吞噬一切的诡异气息。",
						"french": "Au cœur du désert, un vide abyssal se fit sentir. Une aura étrange, comme si elle dévorait tout.",
						"spanish": "Desde lo profundo del desierto, una vasta nada se sintió. Un aura extraña, como si lo engullera todo.",
						"vietnamese": "Nơi sa mạc sâu thẳm, một hư vô khổng lồ lan tỏa. Một luồng khí quái dị, như thể nuốt chửng vạn vật.",
						"thai": "ในทะเลทรายลึก สัมผัสได้ถึงความว่างเปล่าอันใหญ่หลวง พลังงานแปลกประหลาด ราวกับจะกลืนกินทุกสิ่ง",
						"hindi": "रेगिस्तान की गहराइयों से, एक विशाल शून्य प्रतिध्वनित हुआ। एक अजीब आभा, मानो सब कुछ निगल रही हो।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "ashur",
					"type": "speech",
					"content": {
						"korean": "크아아아악!",
						"english": "Kroooaaah!",
						"japanese": "くあああああ！",
						"chinese": "啊啊啊啊啊！",
						"french": "Kroooaaah !",
						"spanish": "¡Graaaah!",
						"vietnamese": "Gràoooo!",
						"thai": "กร๊าซซซซซ!",
						"hindi": "क्राआआआआह!"
					}
				},
				{
					"direction": "down",
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "exit"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아슈르!",
						"english": "Ashur!",
						"japanese": "アシュール！",
						"chinese": "阿舒尔！",
						"french": "Ashur !",
						"spanish": "¡Ashur!",
						"vietnamese": "Ashur!",
						"thai": "อาชูร์!",
						"hindi": "अशूर!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 흩어지며 모래가 되었다.",
						"english": "The colossal shadow scattered, turning into sand.",
						"japanese": "巨大な影が散らばり、砂となった。",
						"chinese": "巨大的影子散开，化作了沙尘。",
						"french": "L'ombre colossale se dispersa, devenant du sable.",
						"spanish": "La sombra colosal se dispersó, convirtiéndose en arena.",
						"vietnamese": "Cái bóng khổng lồ tan biến, hóa thành cát.",
						"thai": "เงาขนาดมหึมาสลายไป กลายเป็นทราย",
						"hindi": "विशाल छाया बिखर गई और रेत बन गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크흐읍… 아직… 끝나지 않았다… 사막의… 의지는…",
						"english": "Urgh... It's not... over yet... The desert's... will...",
						"japanese": "くふっ… まだ… 終わっていない… 砂漠の… 意志は…",
						"chinese": "咳… 还未… 结束… 沙漠的… 意志……",
						"french": "Urgh... Ce n'est... pas encore fini... La volonté... du désert...",
						"spanish": "Ugh... Aún... no ha terminado... La voluntad... del desierto...",
						"vietnamese": "Khụ... Vẫn... chưa kết thúc... Ý chí... của sa mạc...",
						"thai": "เฮือก... ยัง... ไม่จบ... เจตจำนง... แห่งทะเลทราย...",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ... रेगिस्तान की... इच्छाशक्ति..."
					}
				},
				{
					"content": {
						"korean": "아슈르… 그는 어디로?",
						"english": "Ashur... where is he?",
						"japanese": "アシュル… 彼はどこへ？",
						"chinese": "阿舒尔……他去哪儿了？",
						"french": "Ashur... où est-il ?",
						"spanish": "Ashur... ¿dónde está?",
						"vietnamese": "Ashur... anh ta đâu rồi?",
						"thai": "อะชูร์...เขาไปไหน?",
						"hindi": "अशूर... वह कहाँ है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "사막은 대답하지 않았다. 다만, 멀리서 옅게 흐느끼는 듯한 소리가 들려올 뿐.",
						"english": "The desert did not answer. Only a faint, distant weeping sound could be heard.",
						"japanese": "砂漠は答えなかった。ただ、遠くから微かにすすり泣くような音が聞こえるだけだった。",
						"chinese": "沙漠没有回答。只有远处传来微弱的啜泣声。",
						"french": "Le désert ne répondit pas. Seul un faible sanglot lointain se fit entendre.",
						"spanish": "El desierto no respondió. Solo se escuchaba un débil lamento distante.",
						"vietnamese": "Sa mạc không trả lời. Chỉ có tiếng khóc thút thít yếu ớt từ xa vọng lại.",
						"thai": "ทะเลทรายไม่ตอบ มีเพียงเสียงสะอื้นแผ่วเบาจากที่ไกลๆ",
						"hindi": " रेगिस्तान ने जवाब नहीं दिया। दूर से बस एक हल्की सिसकने जैसी आवाज़ सुनाई दे रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이게 끝이 아닐 거야.",
						"english": "...This won't be the end.",
						"japanese": "…これで終わりじゃない。",
						"chinese": "……这不会是结束。",
						"french": "...Ce n'est pas la fin.",
						"spanish": "...Esto no será el final.",
						"vietnamese": "...Đây sẽ không phải là kết thúc.",
						"thai": "...นี่ไม่ใช่จุดจบหรอก",
						"hindi": "...यह अंत नहीं होगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래폭풍이 모든 것을 집어삼켰다.",
						"english": "The sandstorm devoured everything.",
						"japanese": "砂嵐がすべてを飲み込んだ。",
						"chinese": "沙尘暴吞噬了一切。",
						"french": "La tempête de sable a tout englouti.",
						"spanish": "La tormenta de arena lo devoró todo.",
						"vietnamese": "Bão cát nuốt chửng mọi thứ.",
						"thai": "พายุทรายกลืนกินทุกสิ่ง",
						"hindi": "रेतीले तूफान ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들… 사막의 위대함을 알지 못하는가…",
						"english": "Insignificant beings... Do you not know the desert's grandeur...?",
						"japanese": "愚かな者たちめ… 砂漠の偉大さを知らぬのか…",
						"chinese": "渺小的东西……你们不知道沙漠的伟大吗……",
						"french": "Créatures insignifiantes... Ne connaissez-vous pas la grandeur du désert...?",
						"spanish": "Seres insignificantes... ¿Acaso no conocéis la grandeza del desierto...?",
						"vietnamese": "Những kẻ hèn mọn... Ngươi không biết sự vĩ đại của sa mạc sao...?",
						"thai": "เจ้าพวกไร้ค่า... ไม่รู้จักความยิ่งใหญ่ของทะเลทรายรึไง...",
						"hindi": "तुच्छ प्राणी... क्या तुम रेगिस्तान की भव्यता नहीं जानते...?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직… 포기하지 않아…",
						"english": "...Not yet... I won't give up...",
						"japanese": "…まだ… 諦めない…",
						"chinese": "……还没……我不会放弃……",
						"french": "...Pas encore... Je n'abandonnerai pas...",
						"spanish": "...Todavía no... No me rendiré...",
						"vietnamese": "...Vẫn chưa... Tôi sẽ không bỏ cuộc...",
						"thai": "...ยัง... ไม่ยอมแพ้...",
						"hindi": "...अभी तक... मैंने हार नहीं मानी..."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "아슈르가 사라진 자리에, 거대한 그림자가 일렁였다.",
						"english": "Where Ashur vanished, a colossal shadow rippled.",
						"japanese": "アシュールが消えた場所に、巨大な影が揺らめいた。",
						"chinese": "阿舒尔消失的地方，一道巨大的影子波动着。",
						"french": "Là où Ashur avait disparu, une ombre colossale ondoyait.",
						"spanish": "Donde Ashur desapareció, una sombra colosal ondeó.",
						"vietnamese": "Nơi Ashur biến mất, một cái bóng khổng lồ chập chờn.",
						"thai": "ที่ที่อาชูร์หายไป เงาขนาดมหึมาก็ไหวระริก",
						"hindi": "जहाँ अशूर गायब हुआ था, एक विशाल छाया लहराई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흥… 또다시… 불순한 자들이…",
						"english": "Hmph... Impure beings, again...",
						"japanese": "フン… またか… 不純な者どもが…",
						"chinese": "哼……又是……这些不纯之徒……",
						"french": "Hmph... Encore... des impurs...",
						"spanish": "Hmph... otra vez... los impuros...",
						"vietnamese": "Hừm... Lại nữa... lũ tạp nham này...",
						"thai": "หึ... อีกแล้ว... พวกนอกรีต...",
						"hindi": "हम्फ... फिर... अपवित्र जीव..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…네가 아슈르를 끌고 간 거냐?",
						"english": "...Did you drag Ashur away?",
						"japanese": "…お前がアシュールを連れ去ったのか？",
						"chinese": "…是你把阿舒尔带走的吗？",
						"french": "...C'est toi qui as emmené Ashur ?",
						"spanish": "¿...Fuiste tú quien se llevó a Ashur?",
						"vietnamese": "...Ngươi đã kéo Ashur đi sao?",
						"thai": "...เจ้าลากอาชูร์ไปงั้นรึ?",
						"hindi": "...क्या तुम अशूर को खींच कर ले गए?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어리석은 자. 그는 이미… 사막의 일부다. 너희도… 곧 그렇게 될 것이다.",
						"english": "Fool. He is already... part of the desert. And you... will soon follow.",
						"japanese": "愚か者め。彼は既に… 砂漠の一部。お前たちも… 間もなくそうなるだろう。",
						"chinese": "愚蠢的家伙。他已然……是沙漠的一部分。你们也……很快就会如此。",
						"french": "Imbécile. Il fait déjà... partie du désert. Vous aussi... le deviendrez bientôt.",
						"spanish": "Necio. Él ya es... parte del desierto. Vosotros también... pronto lo seréis.",
						"vietnamese": "Kẻ ngu muội. Hắn đã... là một phần của sa mạc rồi. Các ngươi cũng... sẽ sớm theo bước.",
						"thai": "คนโง่ เขาน่ะ... เป็นส่วนหนึ่งของทะเลทรายไปแล้ว พวกเจ้าเองก็... จะเป็นเช่นนั้นในไม่ช้า",
						"hindi": "मूर्ख। वह पहले ही... रेगिस्तान का हिस्सा है। तुम भी... जल्द ही वैसे ही बन जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…용서 못 해.",
						"english": "...I won't forgive you.",
						"japanese": "…許さない。",
						"chinese": "…不可原谅。",
						"french": "...Je ne pardonnerai pas.",
						"spanish": "...No te lo perdonaré.",
						"vietnamese": "...Không thể tha thứ.",
						"thai": "...ไม่ให้อภัยหรอก",
						"hindi": "...मैं माफ़ नहीं करूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	]
} as const;
