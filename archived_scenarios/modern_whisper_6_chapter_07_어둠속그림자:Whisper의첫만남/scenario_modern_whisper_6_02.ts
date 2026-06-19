export const scenario_modern_whisper_6_02 = {
	"scenario_id": "modern_whisper_6_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뒷골목의 유기견, 위스퍼.",
			"음식을 거부한 채 뒤틀린 움직임을 보였다.",
			"냉철한 분석가, 닥스는 직감했다.",
			"녀석은, 단순한 동물이 아니었다."
		],
		"english": [
			"Whisper, a stray dog from the back alley.",
			"It refused food, moving in twisted ways.",
			"Dax, the cold analyst, had a hunch.",
			"It wasn't just an animal."
		],
		"japanese": [
			"路地裏の野良犬、ウィスパー。",
			"食事を拒み、奇妙な動きを見せた。",
			"冷徹な分析官ダックスは直感した。",
			"奴は、ただの動物ではなかった。"
		],
		"chinese": [
			"后巷的流浪狗，维斯珀。",
			"它拒绝了食物，身体扭曲着。",
			"冷静的分析师，达克斯直觉到了。",
			"它，并非普通的动物。"
		],
		"french": [
			"Whisper, un chien errant de l'arrière-ruelle.",
			"Il a refusé la nourriture, se tordant étrangement.",
			"Dax, l'analyste froid, eut une intuition.",
			"Ce n'était pas un simple animal."
		],
		"spanish": [
			"Whisper, un perro callejero del callejón.",
			"Rechazó la comida, moviéndose de forma retorcida.",
			"Dax, el analista frío, lo intuyó.",
			"No era un simple animal."
		],
		"vietnamese": [
			"Whisper, chú chó hoang từ con hẻm sau.",
			"Nó từ chối thức ăn, cử động vặn vẹo.",
			"Dax, nhà phân tích lạnh lùng, đã linh cảm được.",
			"Nó không phải là một con vật đơn thuần."
		],
		"thai": [
			"วิสเปอร์ สุนัขจรจัดจากตรอกซอย",
			"มันปฏิเสธอาหาร เคลื่อนไหวบิดเบี้ยว",
			"แด็กซ์ นักวิเคราะห์ผู้เยือกเย็น สัมผัสได้",
			"มันไม่ใช่แค่สัตว์ธรรมดา"
		],
		"hindi": [
			"फुसफुस, गली का एक आवारा कुत्ता।",
			"उसने खाना ठुकरा दिया, अजीब तरह से हिलते हुए।",
			"ठंडे दिमाग वाले विश्लेषक, डैक्स को आभास हुआ।",
			"वह, एक साधारण जानवर नहीं था।"
		]
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
						"korean": "버려진 뒷골목. 베스가 건넨 음식은 바닥에 떨어졌다.",
						"english": "Abandoned alley. The food Beth offered fell to the ground.",
						"japanese": "廃れた裏路地。ベスが差し出した食べ物は地面に落ちた。",
						"chinese": "后巷被遗弃了。贝丝递出的食物掉在了地上。",
						"french": "Ruelle abandonnée. La nourriture que Beth offrait est tombée au sol.",
						"spanish": "Callejón abandonado. La comida que Beth ofreció cayó al suelo.",
						"vietnamese": "Hẻm sau bị bỏ hoang. Thức ăn Beth đưa rơi xuống đất.",
						"thai": "ตรอกร้าง อาหารที่เบธยื่นให้ตกลงพื้น",
						"hindi": "सुनसान गली। बेथ द्वारा दिया गया भोजन ज़मीन पर गिर गया。"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 먹네… 무서워하나?",
						"english": "It's not eating... Is it scared?",
						"japanese": "食べないね…怖がってるのかな？",
						"chinese": "不吃呢……是害怕吗？",
						"french": "Il ne mange pas... Il a peur ?",
						"spanish": "No come... ¿Está asustado?",
						"vietnamese": "Nó không ăn... Sợ ư?",
						"thai": "ไม่กินเลย…กลัวเหรอ?",
						"hindi": "नहीं खा रहा... डरा हुआ है क्या?"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "아니, 무서운 게 아냐. 저 움직임을 봐.",
						"english": "No, it's not fear. Look at its movements.",
						"japanese": "いや、怖いんじゃない。あの動きを見て。",
						"chinese": "不，它不是害怕。看看它的动作。",
						"french": "Non, ce n'est pas de la peur. Regarde ses mouvements.",
						"spanish": "No, no es miedo. Mira sus movimientos.",
						"vietnamese": "Không, không phải sợ đâu. Nhìn cử động đó kìa.",
						"thai": "ไม่ใช่ ไม่ใช่ความกลัว ดูการเคลื่อนไหวของมันสิ",
						"hindi": "नहीं, यह डर नहीं है। उसकी हरकतों को देखो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼는 기이하게 몸을 뒤틀며 그림자 속으로 사라졌다.",
						"english": "Whisper twisted its body strangely and vanished into the shadows.",
						"japanese": "ウィスパーは奇妙に体をねじり、影の中へ消えた。",
						"chinese": "维斯珀奇异地扭动着身体，消失在阴影中。",
						"french": "Whisper a tordu son corps étrangement et a disparu dans l'ombre.",
						"spanish": "Whisper retorció su cuerpo extrañamente y desapareció en las sombras.",
						"vietnamese": "Whisper vặn vẹo thân mình một cách kỳ lạ rồi biến mất vào bóng tối.",
						"thai": "วิสเปอร์บิดตัวอย่างประหลาดและหายไปในเงา",
						"hindi": "फुसफुस ने अजीब तरह से अपना शरीर मोड़ा और परछाई में गायब हो गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "방금… 이상했어.",
						"english": "That was... weird.",
						"japanese": "今の…変だった。",
						"chinese": "刚才……很奇怪。",
						"french": "C'était... étrange.",
						"spanish": "Eso fue... extraño.",
						"vietnamese": "Vừa rồi... lạ thật.",
						"thai": "เมื่อกี้…แปลกไปนะ",
						"hindi": "अभी-अभी... अजीब था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "…단순한 유기견이 아니야. 뭔가 이상해.",
						"english": "...It's not just a stray dog. Something's wrong.",
						"japanese": "…ただの野良犬じゃない。何かおかしい。",
						"chinese": "……它不是普通的流浪狗。有些不对劲。",
						"french": "...Ce n'est pas un simple chien errant. Quelque chose ne va pas.",
						"spanish": "...No es un simple perro callejero. Algo anda mal.",
						"vietnamese": "...Không phải là chó hoang bình thường. Có gì đó lạ lắm.",
						"thai": "...ไม่ใช่สุนัขจรจัดธรรมดา มีบางอย่างผิดปกติ",
						"hindi": "...यह सिर्फ एक आवारा कुत्ता नहीं है। कुछ अजीब है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이 근처에서 오래된 사건 기록들을 봤어.",
						"english": "I saw old case files around here.",
						"japanese": "この辺りで古い事件記録を見たよ。",
						"chinese": "我在这附近看到了旧案件记录。",
						"french": "J'ai vu de vieux dossiers d'affaires par ici.",
						"spanish": "Vi expedientes de casos antiguos por aquí.",
						"vietnamese": "Tôi đã thấy những hồ sơ vụ án cũ quanh đây.",
						"thai": "ฉันเห็นบันทึกคดีเก่าๆ แถวนี้",
						"hindi": "मैंने यहाँ आस-पास पुराने केस रिकॉर्ड देखे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "사건 기록? 유기견이랑 무슨 상관인데?",
						"english": "Case files? What does that have to do with stray dogs?",
						"japanese": "事件記録？野良犬と何の関係があるの？",
						"chinese": "案件记录？和流浪狗有什么关系？",
						"french": "Dossiers d'affaires ? Quel est le rapport avec les chiens errants ?",
						"spanish": "¿Expedientes? ¿Qué tiene que ver eso con los perros callejeros?",
						"vietnamese": "Hồ sơ vụ án? Liên quan gì đến chó hoang chứ?",
						"thai": "บันทึกคดี? แล้วมันเกี่ยวอะไรกับหมาจรจัด?",
						"hindi": "केस रिकॉर्ड? आवारा कुत्तों से इसका क्या लेना-देना है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "연결고리가 느껴져. 위스퍼 주변의 기운이… 심상치 않아.",
						"english": "I feel a connection. The aura around Whisper... it's unusual.",
						"japanese": "繋がりを感じる。ウィスパーの周りの気配が…尋常じゃない。",
						"chinese": "我感觉到了联系。威斯珀周围的气息……不寻常。",
						"french": "Je ressens un lien. L'aura autour de Whisper... n'est pas ordinaire.",
						"spanish": "Siento una conexión. El aura alrededor de Whisper... no es normal.",
						"vietnamese": "Tôi cảm thấy có mối liên hệ. Khí chất quanh Whisper... thật bất thường.",
						"thai": "ฉันรู้สึกถึงความเชื่อมโยง บรรยากาศรอบตัววิสเปอร์... มันไม่ธรรมดาเลย",
						"hindi": "मुझे एक संबंध महसूस हो रहा है। विस्पर के आस-पास का माहौल... कुछ अजीब है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "공기는 더욱 차갑게 가라앉았다.",
						"english": "The air grew colder.",
						"japanese": "空気はさらに冷たく沈んだ。",
						"chinese": "空气变得更加冰冷。",
						"french": "L'air devint plus froid.",
						"spanish": "El aire se volvió aún más frío.",
						"vietnamese": "Không khí càng trở nên lạnh lẽo.",
						"thai": "อากาศเย็นยะเยือกขึ้น",
						"hindi": "हवा और ठंडी होती गई।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "이곳은 예전에 '검은 새벽' 갱단이 활동하던 곳이야.",
						"english": "This used to be where the 'Black Dawn' gang operated.",
						"japanese": "ここは以前、『黒い夜明け』ギャングが活動していた場所だ。",
						"chinese": "这里以前是'黑黎明'帮派活动的地方。",
						"french": "C'était l'endroit où le gang 'Aube Noire' opérait.",
						"spanish": "Este solía ser el lugar donde operaba la pandilla 'Amanecer Negro'.",
						"vietnamese": "Đây từng là nơi băng đảng 'Bình Minh Đen' hoạt động.",
						"thai": "ที่นี่เคยเป็นแหล่งกบดานของแก๊ง 'รุ่งอรุณทมิฬ'",
						"hindi": "यह वही जगह है जहाँ पहले 'ब्लैक डॉन' गिरोह सक्रिय था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "검은 새벽? 들어본 적 없어.",
						"english": "Black Dawn? Never heard of them.",
						"japanese": "黒い夜明け？聞いたことないな。",
						"chinese": "黑黎明？没听说过。",
						"french": "Aube Noire ? Jamais entendu parler.",
						"spanish": "¿Amanecer Negro? Nunca he oído hablar de ellos.",
						"vietnamese": "Bình Minh Đen? Chưa từng nghe bao giờ.",
						"thai": "รุ่งอรุณทมิฬ? ไม่เคยได้ยินเลย",
						"hindi": "ब्लैक डॉन? मैंने कभी नहीं सुना।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "오래 전에 사라진 갱단이지. 하지만… 흔적이 남아있어.",
						"english": "They were a gang that disappeared long ago. But... traces remain.",
						"japanese": "ずっと昔に消えたギャングだ。だが…痕跡は残っている。",
						"chinese": "他们是很久以前就消失的帮派。但是……痕迹还留着。",
						"french": "C'était un gang disparu il y a longtemps. Mais... des traces subsistent.",
						"spanish": "Eran una pandilla que desapareció hace mucho tiempo. Pero... quedan rastros.",
						"vietnamese": "Họ là một băng đảng đã biến mất từ lâu. Nhưng... dấu vết vẫn còn.",
						"thai": "พวกเขาเป็นแก๊งที่หายไปนานแล้ว แต่... ยังมีร่องรอยเหลืออยู่",
						"hindi": "वे बहुत पहले गायब हो चुके थे। लेकिन... निशान अभी भी बाकी हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 위스퍼랑 무슨 관계인데?",
						"english": "What does that have to do with Whisper?",
						"japanese": "それがウィスパーと何の関係があるんだ？",
						"chinese": "那和威斯珀有什么关系？",
						"french": "Quel est le rapport avec Whisper ?",
						"spanish": "¿Qué tiene que ver eso con Whisper?",
						"vietnamese": "Thế thì liên quan gì đến Whisper chứ?",
						"thai": "แล้วมันเกี่ยวอะไรกับวิสเปอร์?",
						"hindi": "उसका विस्पर से क्या लेना-देना है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "dax",
					"content": {
						"korean": "…아직은 모르겠어. 하지만 이 모든 게 우연은 아닐 거야.",
						"english": "...I don't know yet. But none of this can be a coincidence.",
						"japanese": "…まだ分からない。だが、これが全て偶然ではないはずだ。",
						"chinese": "……我还不清楚。但这一切绝非偶然。",
						"french": "...Je ne sais pas encore. Mais tout cela ne peut pas être une coïncidence.",
						"spanish": "...Aún no lo sé. Pero nada de esto puede ser una coincidencia.",
						"vietnamese": "...Tôi vẫn chưa biết. Nhưng tất cả những điều này không thể là trùng hợp ngẫu nhiên.",
						"thai": "...ฉันยังไม่รู้ แต่ทั้งหมดนี้คงไม่ใช่เรื่องบังเอิญ",
						"hindi": "...मुझे अभी नहीं पता। लेकिन यह सब कोई संयोग नहीं हो सकता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "dax",
					"content": {
						"korean": "밤마다 들려오는 기묘한 소리들… 너희도 들었어?",
						"english": "The strange sounds every night... Did you hear them too?",
						"japanese": "毎晩聞こえる奇妙な音…君たちも聞いたかい？",
						"chinese": "每晚都能听到的奇怪声音……你们也听到了吗？",
						"french": "Les bruits étranges chaque nuit... Vous les avez entendus aussi ?",
						"spanish": "Los extraños sonidos cada noche... ¿Vosotros también los oísteis?",
						"vietnamese": "Những âm thanh kỳ lạ vang lên mỗi đêm... Các cậu cũng nghe thấy chứ?",
						"thai": "เสียงแปลกๆ ที่ได้ยินทุกคืน... พวกนายก็ได้ยินเหมือนกันใช่ไหม?",
						"hindi": "रात को आने वाली अजीब आवाजें... क्या तुमने भी सुनीं?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "악몽을 꿨어. 정체 모를 비명 소리….",
						"english": "I had a nightmare. Unidentified screams….",
						"japanese": "悪夢を見た。正体不明の悲鳴…。",
						"chinese": "我做了个噩梦。不知名的尖叫声……",
						"french": "J'ai fait un cauchemar. Des cris non identifiés….",
						"spanish": "Tuve una pesadilla. Gritos sin identificar….",
						"vietnamese": "Tôi gặp ác mộng. Những tiếng hét không rõ nguồn gốc….",
						"thai": "ฉันฝันร้าย เสียงกรีดร้องที่ระบุไม่ได้....",
						"hindi": "मैंने एक बुरा सपना देखा। अज्ञात चीखें…।"
					},
					"type": "speech"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "그건 단순한 꿈이 아닐 수도 있어. 위스퍼와 관련 있을지도.",
						"english": "It might not be just a dream. It could be related to Whisper.",
						"japanese": "それはただの夢ではないかもしれない。ウィスパーと関係があるのかも。",
						"chinese": "那可能不只是一个梦。可能与维斯珀有关。",
						"french": "Ce n'est peut-être pas qu'un simple rêve. Cela pourrait être lié à Whisper.",
						"spanish": "Puede que no sea solo un sueño. Podría estar relacionado con Whisper.",
						"vietnamese": "Đó có thể không chỉ là một giấc mơ. Nó có thể liên quan đến Whisper.",
						"thai": "มันอาจไม่ใช่แค่ฝัน มันอาจเกี่ยวข้องกับวิสเปอร์",
						"hindi": "यह सिर्फ एक सपना नहीं हो सकता है। यह व्हिस्पर से संबंधित हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더… 불길해지고 있어.",
						"english": "It's getting more and more… ominous.",
						"japanese": "ますます…不吉になってきている。",
						"chinese": "越来越…不祥了。",
						"french": "C'est de plus en plus… inquiétant.",
						"spanish": "Se está volviendo cada vez más… ominoso.",
						"vietnamese": "Nó ngày càng… đáng ngại hơn.",
						"thai": "มันเริ่มน่าขนลุกมากขึ้นเรื่อยๆ",
						"hindi": "यह और भी… अशुभ होता जा रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이건 시작일 뿐… 도시의 그림자는… 다시 일어날 것이다.",
						"english": "This is just the beginning… the city's shadows… will rise again.",
						"japanese": "これは始まりに過ぎない…都市の影は…再び立ち上がるだろう。",
						"chinese": "这只是开始…城市的阴影…会再次崛起。",
						"french": "Ce n'est que le début… les ombres de la ville… se relèveront.",
						"spanish": "Esto es solo el principio… las sombras de la ciudad… se levantarán de nuevo.",
						"vietnamese": "Đây chỉ là khởi đầu… bóng tối của thành phố… sẽ trỗi dậy lần nữa.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น...เงาของเมือง...จะกลับมาอีกครั้ง",
						"hindi": "यह तो बस शुरुआत है… शहर की परछाइयां… फिर से उठेंगी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "쓰러뜨렸어… 하지만 찝찝해.",
						"english": "We defeated it… but it feels unsettling.",
						"japanese": "倒した…だが、後味が悪い。",
						"chinese": "我们打败了它…但感觉不安。",
						"french": "Nous l'avons vaincu… mais c'est inquiétant.",
						"spanish": "Lo derrotamos… pero se siente inquietante.",
						"vietnamese": "Chúng ta đã đánh bại nó… nhưng cảm thấy không yên.",
						"thai": "เรากำจัดมันได้แล้ว...แต่ก็ยังรู้สึกไม่สบายใจ",
						"hindi": "हमने उसे हरा दिया… लेकिन यह unsettling लग रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "녀석은… 과거의 악몽을 재현하는 도구였을 뿐이야.",
						"english": "It was… merely a tool to re-enact past nightmares.",
						"japanese": "あれは…過去の悪夢を再現するための道具に過ぎなかった。",
						"chinese": "它…仅仅是重现过去噩梦的工具。",
						"french": "C'était… simplement un outil pour recréer les cauchemars passés.",
						"spanish": "Era… meramente una herramienta para recrear pesadillas pasadas.",
						"vietnamese": "Nó… chỉ là một công cụ để tái hiện những cơn ác mộng trong quá khứ.",
						"thai": "มันเป็นเพียง...เครื่องมือที่จะสร้างฝันร้ายในอดีตขึ้นมาใหม่เท่านั้น",
						"hindi": "यह… अतीत के दुःस्वप्नों को दोहराने का महज एक उपकरण था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "위스퍼는 사라졌지만, 도시는 더욱 깊은 그림자에 잠식되어 갔다.",
						"english": "Whisper vanished, but the city sank deeper into shadow.",
						"japanese": "ウィスパーは消え去ったが、都市はさらに深い影に侵食されていった。",
						"chinese": "尽管低语者消失了，城市却被更深的阴影吞噬。",
						"french": "Whisper a disparu, mais la ville s'enfonça dans des ombres plus profondes.",
						"spanish": "Whisper desapareció, pero la ciudad se sumió en sombras más profundas.",
						"vietnamese": "Whisper biến mất, nhưng thành phố chìm sâu hơn vào bóng tối.",
						"thai": "วิสเปอร์หายไปแล้ว แต่เมืองกลับจมดิ่งลงสู่เงามืดที่ลึกยิ่งกว่าเดิม",
						"hindi": "फुसफुसाहट गायब हो गई, लेकिन शहर और गहरी छाया में डूब गया।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 나의 공포를 이해하지 못하는군.",
						"english": "Insignificant fools... you don't comprehend my terror.",
						"japanese": "愚かな者たち…私の恐怖を理解できぬか。",
						"chinese": "渺小的存在…你们不懂我的恐惧。",
						"french": "Misérables… vous ne comprenez pas ma terreur.",
						"spanish": "Tontos insignificantes... no comprenden mi terror.",
						"vietnamese": "Những kẻ hèn mọn... các ngươi không hiểu nỗi kinh hoàng của ta.",
						"thai": "เจ้าพวกไร้ค่า... ไม่เข้าใจความหวาดกลัวของข้าเลย",
						"hindi": "तुच्छ प्राणी… तुम मेरी दहशत को नहीं समझते।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어!",
						"english": "Ugh... I can't end it here!",
						"japanese": "くっ…ここで終わらせるわけにはいかない！",
						"chinese": "呃…不能在这里结束！",
						"french": "Argh… ça ne peut pas finir ici !",
						"spanish": "¡Argh... no puedo terminar aquí!",
						"vietnamese": "Khụ... không thể kết thúc ở đây được!",
						"thai": "อึก…จะจบลงตรงนี้ไม่ได้!",
						"hindi": "उफ़… मैं इसे यहाँ खत्म नहीं कर सकता!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "다시… 분석해야 해. 녀석의 약점을 찾아야만 한다.",
						"english": "Again... I must analyze. I must find its weakness.",
						"japanese": "もう一度…分析せねば。奴の弱点を見つけ出さねばならない。",
						"chinese": "再次…必须分析。我必须找到它的弱点。",
						"french": "Encore… je dois analyser. Je dois trouver sa faiblesse.",
						"spanish": "De nuevo... debo analizar. Debo encontrar su debilidad.",
						"vietnamese": "Lại... phải phân tích. Phải tìm ra điểm yếu của nó.",
						"thai": "อีกครั้ง...ต้องวิเคราะห์ ต้องหาจุดอ่อนของมันให้เจอ",
						"hindi": "फिर से… मुझे विश्लेषण करना होगा। मुझे उसकी कमजोरी ढूंढनी होगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "가장 깊은 뒷골목. 뒤틀린 형체의 그림자가 나타났다.",
						"english": "The deepest alley. A twisted shadow appeared.",
						"japanese": "最も深い裏通り。歪んだ影が現れた。",
						"chinese": "最深的后巷。一个扭曲的影子出现了。",
						"french": "La ruelle la plus sombre. Une ombre tordue est apparue.",
						"spanish": "El callejón más profundo. Apareció una sombra retorcida.",
						"vietnamese": "Con hẻm sâu nhất. Một bóng hình méo mó xuất hiện.",
						"thai": "ตรอกลึกที่สุด เงาบิดเบี้ยวปรากฏขึ้น",
						"hindi": "सबसे गहरी गली। एक मुड़ी हुई छाया प्रकट हुई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…새로운 먹잇감인가.",
						"english": "…A new prey?",
						"japanese": "…新しい獲物か。",
						"chinese": "……新的猎物吗？",
						"french": "…Une nouvelle proie ?",
						"spanish": "…¿Una nueva presa?",
						"vietnamese": "…Một con mồi mới sao?",
						"thai": "...เหยื่อรายใหม่?",
						"hindi": "…एक नया शिकार?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "위스퍼… 네 정체가 뭐야!",
						"english": "Whisper… what is your true identity?",
						"japanese": "ウィスパー…お前の正体は何だ！",
						"chinese": "维斯珀…你的真面目是什么！",
						"french": "Whisper… quelle est ta véritable identité ?",
						"spanish": "Whisper… ¿cuál es tu verdadera identidad?",
						"vietnamese": "Whisper… thân phận thật sự của ngươi là gì?",
						"thai": "วิสเปอร์...ตัวตนที่แท้จริงของแกคืออะไร!",
						"hindi": "व्हिस्पर… तुम्हारी असली पहचान क्या है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 본질을 넘보려 하는가.",
						"english": "How dare you… try to fathom my essence.",
						"japanese": "よくも…私の本質を見抜こうとするか。",
						"chinese": "你竟敢…试图洞悉我的本质。",
						"french": "Comment oses-tu… essayer de sonder mon essence.",
						"spanish": "Cómo te atreves… a intentar comprender mi esencia.",
						"vietnamese": "Ngươi dám… mưu toan thấu hiểu bản chất của ta.",
						"thai": "แกกล้าดียังไง...มาพยายามเข้าใจแก่นแท้ของฉัน",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… मेरे सार को समझने की कोशिश करने की।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
