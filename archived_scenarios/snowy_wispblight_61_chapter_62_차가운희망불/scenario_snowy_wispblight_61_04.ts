export const scenario_snowy_wispblight_61_04 = {
	"scenario_id": "snowy_wispblight_61_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 대지 위, 희미한 온기를 찾아 헤매는 탐험대.",
			"그러나 그리움은 가장 치명적인 덫이 된다.",
			"Finn은 잃어버린 가족의 환영에 사로잡히고—",
			"진실은 차가운 환상 아래 숨겨져 있었다."
		],
		"english": [
			"An expedition wanders a frozen land, searching for a faint warmth.",
			"But longing becomes the most fatal trap.",
			"Finn is caught by the illusion of his lost family—",
			"The truth was hidden beneath a cold illusion."
		],
		"japanese": [
			"凍てついた大地の上、微かな温もりを求めて彷徨う探検隊。",
			"しかし、郷愁は最も致命的な罠となる。",
			"フィンは失われた家族の幻影に囚われ—",
			"真実は冷たい幻想の下に隠されていた。"
		],
		"chinese": [
			"在冰冻的大地上，探险队在寻找一丝微弱的温暖。",
			"然而，思念却成了最致命的陷阱。",
			"芬恩被失去家人的幻象所困—",
			"真相隐藏在冰冷的幻象之下。"
		],
		"french": [
			"Une expédition erre sur des terres gelées, cherchant une faible chaleur.",
			"Mais la nostalgie devient le piège le plus fatal.",
			"Finn est capturé par l'illusion de sa famille perdue—",
			"La vérité était cachée sous une froide illusion."
		],
		"spanish": [
			"Una expedición vaga por una tierra helada, buscando un tenue calor.",
			"Pero el anhelo se convierte en la trampa más fatal.",
			"Finn es atrapado por la ilusión de su familia perdida—",
			"La verdad estaba oculta bajo una fría ilusión."
		],
		"vietnamese": [
			"Một đoàn thám hiểm lang thang trên vùng đất băng giá, tìm kiếm chút hơi ấm mong manh.",
			"Nhưng nỗi nhớ lại trở thành cái bẫy chí mạng nhất.",
			"Finn bị mắc kẹt trong ảo ảnh của gia đình đã mất—",
			"Sự thật bị ẩn giấu dưới một ảo ảnh lạnh lẽo."
		],
		"thai": [
			"คณะสำรวจรอนแรมไปทั่วดินแดนอันเยือกแข็ง เพื่อค้นหาความอบอุ่นอันริบหรี่",
			"แต่ความโหยหาได้กลายเป็นกับดักที่ร้ายกาจที่สุด",
			"ฟินน์ถูกจับโดยภาพลวงตาของครอบครัวที่หายไป—",
			"ความจริงถูกซ่อนอยู่ใต้ภาพลวงตาอันหนาวเย็น"
		],
		"hindi": [
			"जमी हुई धरती पर, एक अभियान दल हल्की गर्मी की तलाश में भटक रहा है。",
			"लेकिन लालसा सबसे घातक जाल बन जाती है。",
			"फिन अपने खोए हुए परिवार के भ्रम में फँस जाता है—",
			"सच एक ठंडे भ्रम के नीचे छिपा हुआ था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람이 지나간 자리, 희미한 온기가 느껴졌다.",
						"english": "Where the cold wind passed, a faint warmth was felt.",
						"japanese": "冷たい風が過ぎ去った場所に、微かな温もりが感じられた。",
						"chinese": "寒风吹过的地方，一丝微弱的温暖被感受到了。",
						"french": "Là où le vent froid était passé, une faible chaleur se faisait sentir.",
						"spanish": "Donde el viento frío pasó, se sintió un tenue calor.",
						"vietnamese": "Nơi cơn gió lạnh thổi qua, một hơi ấm mong manh được cảm nhận.",
						"thai": "ตรงที่ลมหนาวพัดผ่าน มีความอบอุ่นจางๆ ให้สัมผัสได้",
						"hindi": "जहां से ठंडी हवा गुजरी थी, वहां हल्की गर्मी महसूस हुई।"
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…온기가… 저쪽인 것 같아.",
						"english": "...The warmth... it seems to be over there.",
						"japanese": "…温かさが…あっちのようだ。",
						"chinese": "……温暖……好像在那边。",
						"french": "...La chaleur... semble être par là.",
						"spanish": "...El calor... parece estar por allá.",
						"vietnamese": "...Hơi ấm... hình như ở phía đó.",
						"thai": "…ความอบอุ่น…น่าจะอยู่ทางนั้น",
						"hindi": "...गर्मी...लगता है उधर है।"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "Finn, 괜찮아? 안색이 안 좋아.",
						"english": "Finn, are you okay? You don't look well.",
						"japanese": "フィン、大丈夫？顔色が悪いよ。",
						"chinese": "芬恩，你还好吗？你脸色不好。",
						"french": "Finn, ça va ? Tu n'as pas bonne mine.",
						"spanish": "¿Finn, estás bien? No te ves bien.",
						"vietnamese": "Finn, cậu ổn không? Trông cậu không khỏe.",
						"thai": "ฟินน์ ไม่เป็นไรนะ? ดูท่าทางไม่ค่อยดีเลย",
						"hindi": "फिन, तुम ठीक हो? तुम्हारा रंग उड़ा हुआ है।"
					},
					"type": "speech"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "괜찮아. 그냥… 환영이 또….",
						"english": "I'm fine. It's just... the illusion again...",
						"japanese": "大丈夫。ただ…また幻影が…。",
						"chinese": "我没事。只是……幻象又……",
						"french": "Je vais bien. C'est juste... l'illusion encore une fois...",
						"spanish": "Estoy bien. Es solo... la ilusión de nuevo...",
						"vietnamese": "Tôi ổn. Chỉ là... ảo ảnh lại...",
						"thai": "ฉันไม่เป็นไร แค่...ภาพลวงตาอีกแล้ว...",
						"hindi": "मैं ठीक हूँ। बस... वो भ्रम फिर से..."
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "Finn의 눈동자가 흔들렸다. 무언가에 홀린 듯했다.",
						"english": "Finn's eyes wavered. He seemed entranced by something.",
						"japanese": "フィンの瞳が揺らいだ。何かに魅入られたようだった。",
						"chinese": "芬恩的眼睛动摇了。他似乎被什么迷住了。",
						"french": "Les yeux de Finn vacillèrent. Il semblait envoûté par quelque chose.",
						"spanish": "Los ojos de Finn vacilaron. Parecía hechizado por algo.",
						"vietnamese": "Đôi mắt Finn dao động. Cậu ấy dường như bị mê hoặc bởi điều gì đó.",
						"thai": "แววตาของฟินน์สั่นไหว เขาเหมือนถูกสะกดโดยบางสิ่ง",
						"hindi": "फिन की आँखें डगमगा गईं। वह किसी चीज़ से मंत्रमुग्ध लग रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "엄마… 아빠… 여기 있었어?",
						"english": "Mom... Dad... were you here?",
						"japanese": "ママ…パパ…ここにいたの？",
						"chinese": "妈妈……爸爸……你们在这里吗？",
						"french": "Maman... Papa... étiez-vous ici ?",
						"spanish": "¿Mamá... Papá... estaban aquí?",
						"vietnamese": "Mẹ... Bố... hai người đã ở đây sao?",
						"thai": "แม่...พ่อ...พวกคุณอยู่ที่นี่เหรอ?",
						"hindi": "माँ... पापा... क्या तुम यहाँ थे?"
					},
					"type": "speech",
					"speaker": "finn",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "Finn! 정신 차려. 아무도 없어!",
						"english": "Finn! Snap out of it. No one's here!",
						"japanese": "フィン！目を覚まして。誰もいない！",
						"chinese": "芬恩！清醒过来。这里没人！",
						"french": "Finn ! Reprends tes esprits. Il n'y a personne !",
						"spanish": "¡Finn! ¡Espabila! ¡No hay nadie!",
						"vietnamese": "Finn! Tỉnh táo lại đi. Không có ai cả!",
						"thai": "ฟินน์! ตั้งสติหน่อย ไม่มีใครอยู่!",
						"hindi": "फिन! होश में आओ। कोई नहीं है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 여기 있잖아… 따뜻해…",
						"english": "No... they're here... it's warm...",
						"japanese": "違う…ここにいるよ…暖かい…",
						"chinese": "不…他们在这里…好温暖…",
						"french": "Non... ils sont là... c'est chaud...",
						"spanish": "No... están aquí... hace calor...",
						"vietnamese": "Không... họ ở đây mà... ấm áp...",
						"thai": "ไม่สิ…พวกเขาอยู่ที่นี่…มันอบอุ่น…",
						"hindi": "नहीं… वे यहीं हैं… गर्माहट है…"
					},
					"emotion": "sad",
					"speaker": "finn"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "finn"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "Finn이 손을 뻗었다. 허공을 맴도는 그리움.",
						"english": "Finn reached out. Longing lingered in the air.",
						"japanese": "フィンは手を伸ばした。空中に漂う郷愁。",
						"chinese": "芬恩伸出手。思念在空中盘旋。",
						"french": "Finn tendit la main. La nostalgie flottait dans l'air.",
						"spanish": "Finn extendió la mano. La nostalgia flotaba en el aire.",
						"vietnamese": "Finn vươn tay. Nỗi nhớ lởn vởn trong không khí.",
						"thai": "ฟินน์เอื้อมมือออกไป ความคิดถึงล่องลอยอยู่ในอากาศ",
						"hindi": "फिन ने हाथ बढ़ाया। हवा में तरस रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "…가족들… 보고 싶었어…",
						"english": "...My family... I missed you...",
						"japanese": "…家族たち…会いたかった…",
						"chinese": "…家人…我想你们了…",
						"french": "...Ma famille... vous m'avez manqué...",
						"spanish": "...Mi familia... os he echado de menos...",
						"vietnamese": "...Gia đình... con nhớ mọi người...",
						"thai": "…ครอบครัว…ฉันคิดถึงพวกคุณ…",
						"hindi": "…परिवार…मुझे तुम्हारी याद आई…"
					}
				},
				{
					"content": {
						"korean": "이건 함정이야! 정신 차려!",
						"english": "This is a trap! Snap out of it!",
						"japanese": "これは罠だ！目を覚ませ！",
						"chinese": "这是陷阱！清醒过来！",
						"french": "C'est un piège ! Reprends tes esprits !",
						"spanish": "¡Esto es una trampa! ¡Espabila!",
						"vietnamese": "Đây là bẫy! Tỉnh táo lại đi!",
						"thai": "นี่มันกับดัก! ตั้งสติหน่อย!",
						"hindi": "यह एक जाल है! होश में आओ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "shake",
					"duration_ms": 400,
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"emotion": "sad",
					"content": {
						"korean": "윽… 머리가… 아파…",
						"english": "Ugh... my head... it hurts...",
						"japanese": "うっ…頭が…痛い…",
						"chinese": "呃…我的头…好痛…",
						"french": "Ugh... ma tête... ça fait mal...",
						"spanish": "Uf... me duele... la cabeza...",
						"vietnamese": "Ư… đầu tôi… đau quá…",
						"thai": "อึก…หัวฉัน…ปวด…",
						"hindi": "उफ़… मेरा सिर… दर्द कर रहा है…"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "finn"
				},
				{
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "그리움을… 이용당했어. 온기가 아니라… 생명력을 빨아들이는 거야.",
						"english": "My longing... was exploited. It's not warmth... it's draining my life force.",
						"japanese": "郷愁を…利用された。温もりじゃなくて…生命力を吸い取っているんだ。",
						"chinese": "我的思念…被利用了。那不是温暖…是在吸取我的生命力。",
						"french": "Ma nostalgie... a été exploitée. Ce n'est pas de la chaleur... ça draine ma force vitale.",
						"spanish": "Mi anhelo... fue explotado. No es calor... está drenando mi fuerza vital.",
						"vietnamese": "Nỗi nhớ của tôi... bị lợi dụng rồi. Đó không phải hơi ấm... mà là đang hút sinh lực của tôi.",
						"thai": "ความคิดถึงของฉัน…ถูกใช้ประโยชน์ มันไม่ใช่อบอุ่น…แต่มันกำลังดูดพลังชีวิต",
						"hindi": "मेरी लालसा… का फायदा उठाया गया। यह गर्माहट नहीं… यह मेरी जीवन शक्ति को सोख रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "Wispblight… 그게 우리의 그리움을 노린다고?",
						"english": "Wispblight... it targets our longing?",
						"japanese": "ウィスプブライト…それが僕たちの郷愁を狙っているのか？",
						"chinese": "幽光疫病…它瞄准了我们的思念？",
						"french": "Wispblight... ça cible notre nostalgie ?",
						"spanish": "¿Wispblight... apunta a nuestro anhelo?",
						"vietnamese": "Wispblight… nó nhắm vào nỗi nhớ của chúng ta ư?",
						"thai": "วิสป์บไลท์…มันเล็งเป้าหมายที่ความคิดถึงของเราเหรอ?",
						"hindi": "विस्पब्लाइट… वह हमारी लालसा को निशाना बनाता है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"emotion": "angry",
					"content": {
						"korean": "그래. 환상으로 유인해서… 얼어붙게 만드는 거야.",
						"english": "Yes. It lures us with illusions... then freezes us.",
						"japanese": "そうだ。幻想で誘い込んで…凍りつかせるんだ。",
						"chinese": "是的。它用幻象引诱我们…然后让我们冻结。",
						"french": "Oui. Il nous attire avec des illusions... puis nous glace.",
						"spanish": "Sí. Nos atrae con ilusiones... y luego nos congela.",
						"vietnamese": "Đúng vậy. Nó dụ dỗ bằng ảo ảnh… rồi khiến chúng ta đóng băng.",
						"thai": "ใช่ มันล่อลวงเราด้วยภาพลวงตา…แล้วทำให้เรากลายเป็นน้ำแข็ง",
						"hindi": "हाँ। यह हमें भ्रम से बहकाता है… फिर हमें जमा देता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 온기는… 전부 거짓이었단 말이야?",
						"english": "So all that warmth... was a lie?",
						"japanese": "じゃああの温もりは…全部嘘だったってこと？",
						"chinese": "那么所有的温暖…都是假的吗？",
						"french": "Alors toute cette chaleur... n'était qu'un mensonge ?",
						"spanish": "¿Entonces todo ese calor... era una mentira?",
						"vietnamese": "Vậy tất cả hơi ấm đó… đều là giả dối ư?",
						"thai": "งั้นความอบอุ่นทั้งหมด…ก็เป็นเรื่องโกหกงั้นเหรอ?",
						"hindi": "तो वो सारी गर्माहट… सब झूठ थी?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…나약한 영혼들. 그리움에 잠식당할 뿐.",
						"english": "...Weak souls. Merely consumed by longing.",
						"japanese": "...弱き魂たち。ただ、郷愁に蝕まれるだけ。",
						"chinese": "…孱弱的灵魂。只会为思念所侵蚀。",
						"french": "...Âmes faibles. Simplement dévorées par la nostalgie.",
						"spanish": "...Almas débiles. Meramente consumidas por la añoranza.",
						"vietnamese": "...Những linh hồn yếu ớt. Chỉ bị gặm nhấm bởi nỗi nhớ.",
						"thai": "...วิญญาณที่อ่อนแอ. เพียงแค่ถูกกลืนกินด้วยความโหยหา.",
						"hindi": "...कमज़ोर आत्माएँ। बस लालसा से घिरी हुई।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우린 더 이상 속지 않아.",
						"english": "We won't be fooled anymore.",
						"japanese": "我々はもう騙されない。",
						"chinese": "我们不会再受骗了。",
						"french": "Nous ne serons plus dupés.",
						"spanish": "Ya no nos engañarán.",
						"vietnamese": "Chúng ta sẽ không bị lừa nữa.",
						"thai": "เราจะไม่ถูกหลอกอีกต่อไปแล้ว.",
						"hindi": "हम अब और मूर्ख नहीं बनेंगे।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "환상은 끝나지 않는다. 너희의 고통은 영원할 것이다.",
						"english": "The illusion never ends. Your suffering will be eternal.",
						"japanese": "幻想は終わらない。お前たちの苦痛は永遠だろう。",
						"chinese": "幻象永不终结。你们的痛苦将是永恒的。",
						"french": "L'illusion ne finit jamais. Votre souffrance sera éternelle.",
						"spanish": "La ilusión nunca termina. Vuestro sufrimiento será eterno.",
						"vietnamese": "Ảo ảnh không bao giờ kết thúc. Nỗi đau của các ngươi sẽ là vĩnh cửu.",
						"thai": "ภาพลวงตาไม่มีวันจบ. ความทุกข์ทรมานของพวกเจ้าจะเป็นนิรันดร์.",
						"hindi": "भ्रम कभी समाप्त नहीं होता। तुम्हारा दर्द शाश्वत रहेगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…네가 이긴 게 아니다. 단지 잠시… 물러설 뿐…",
						"english": "...You haven't won. We're merely... retreating for a moment...",
						"japanese": "...お前が勝ったわけではない。ただ一時的に…退くだけだ…",
						"chinese": "…你并未获胜。我们只是暂时…撤退而已…",
						"french": "...Tu n'as pas gagné. Nous ne faisons que... reculer un instant...",
						"spanish": "...No has ganado. Solo nos... retiramos un momento...",
						"vietnamese": "...Ngươi chưa thắng. Chúng ta chỉ tạm thời... rút lui thôi...",
						"thai": "...เจ้ายังไม่ชนะ. เราแค่... ถอยไปชั่วคราวเท่านั้น...",
						"hindi": "...तुम जीते नहीं हो। हम बस कुछ देर के लिए... पीछे हट रहे हैं..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그리움은 사라지지 않아. 하지만 그걸 이용하게 두진 않아.",
						"english": "The longing won't disappear. But we won't let you exploit it.",
						"japanese": "郷愁は消えない。だが、それを利用させはしない。",
						"chinese": "思念不会消失。但我们不会让它被利用。",
						"french": "La nostalgie ne disparaîtra pas. Mais nous ne te laisserons pas l'exploiter.",
						"spanish": "La añoranza no desaparecerá. Pero no permitiremos que la uses.",
						"vietnamese": "Nỗi nhớ không biến mất. Nhưng chúng ta sẽ không để ngươi lợi dụng nó.",
						"thai": "ความโหยหาไม่หายไป. แต่เราจะไม่ยอมให้มันถูกใช้ประโยชน์.",
						"hindi": "लालसा मिटेगी नहीं। लेकिन हम तुम्हें उसका फायदा उठाने नहीं देंगे।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리 마음속에… 진짜 온기를 되찾아야 해.",
						"english": "We must reclaim... the true warmth in our hearts.",
						"japanese": "我々の心に…本当の温もりを取り戻さなければならない。",
						"chinese": "我们必须找回…内心真正的温暖。",
						"french": "Nous devons retrouver... la vraie chaleur dans nos cœurs.",
						"spanish": "Debemos recuperar... el verdadero calor en nuestros corazones.",
						"vietnamese": "Chúng ta phải tìm lại... hơi ấm thật sự trong trái tim mình.",
						"thai": "เราต้องกอบกู้... ความอบอุ่นที่แท้จริงในใจของเรากลับคืนมา.",
						"hindi": "हमें अपने दिलों में... सच्ची गर्माहट वापस लानी होगी।"
					},
					"emotion": "base",
					"speaker": "finn"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그리움은 여전했다. 그러나 탐험대는 새로운 결의를 다졌다.",
						"english": "The longing remained. But the expedition force renewed its resolve.",
						"japanese": "郷愁は依然としてあった。しかし、探検隊は新たな決意を固めた。",
						"chinese": "思念依旧存在。然而，探险队却下定了新的决心。",
						"french": "La nostalgie persistait. Mais l'équipe d'exploration a renouvelé sa détermination.",
						"spanish": "La añoranza persistía. Pero la expedición renovó su determinación.",
						"vietnamese": "Nỗi nhớ vẫn còn đó. Nhưng đoàn thám hiểm đã thể hiện một quyết tâm mới.",
						"thai": "ความโหยหายังคงอยู่. แต่คณะสำรวจได้ตั้งปณิธานใหม่.",
						"hindi": "लालसा बनी रही। लेकिन अभियान दल ने अपना संकल्प दोहराया।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "결국, 너희는 그리움에 얼어붙을 것이다. 영원히.",
						"english": "Ultimately, you will be frozen by longing. Forever.",
						"japanese": "結局、お前たちは郷愁に凍てつくだろう。永遠に。",
						"chinese": "最终，你们将因思念而冻结。永恒地。",
						"french": "Finalement, vous serez figés par la nostalgie. Pour toujours.",
						"spanish": "Al final, seréis congelados por la añoranza. Para siempre.",
						"vietnamese": "Cuối cùng, các ngươi sẽ bị đóng băng bởi nỗi nhớ. Mãi mãi.",
						"thai": "ในที่สุด, พวกเจ้าจะถูกแช่แข็งด้วยความโหยหา. ตลอดไป.",
						"hindi": "अंततः, तुम लालसा से जम जाओगे। हमेशा के लिए।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어! 우린 포기하지 않아!",
						"english": "It's not over yet! We won't give up!",
						"japanese": "まだ終わってない！我々は諦めない！",
						"chinese": "还没结束！我们不会放弃！",
						"french": "Ce n'est pas encore fini ! Nous n'abandonnerons pas !",
						"spanish": "¡Todavía no ha terminado! ¡No nos rendiremos!",
						"vietnamese": "Chưa kết thúc đâu! Chúng ta sẽ không bỏ cuộc!",
						"thai": "ยังไม่จบ! เราจะไม่ยอมแพ้!",
						"hindi": "अभी खत्म नहीं हुआ है! हम हार नहीं मानेंगे!"
					}
				}
			]
		}
	]
} as const;
