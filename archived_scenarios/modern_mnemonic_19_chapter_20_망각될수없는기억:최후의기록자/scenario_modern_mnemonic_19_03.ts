export const scenario_modern_mnemonic_19_03 = {
	"scenario_id": "modern_mnemonic_19_03",
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
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이쪽이야. Mnemonic의 비정상적 패턴을 추적했어.",
						"english": "Over here. I tracked Mnemonic's abnormal pattern.",
						"japanese": "こっちだ。Mnemonicの異常なパターンを追跡した。",
						"chinese": "这边。我追踪到了Mnemonic的异常模式。",
						"french": "Par ici. J'ai traqué le schéma anormal de Mnemonic.",
						"spanish": "Por aquí. He rastreado el patrón anormal de Mnemonic.",
						"vietnamese": "Ở đây. Tôi đã theo dõi mẫu hình bất thường của Mnemonic.",
						"thai": "ทางนี้ ฉันแกะรอยรูปแบบที่ผิดปกติของ Mnemonic ได้แล้ว",
						"hindi": "इधर। मैंने Mnemonic के असामान्य पैटर्न को ट्रैक किया है।"
					}
				},
				{
					"content": {
						"korean": "비정상적이라고?",
						"english": "Abnormal, you say?",
						"japanese": "異常だと？",
						"chinese": "异常？",
						"french": "Anormal, tu dis ?",
						"spanish": "¿Anormal?",
						"vietnamese": "Bất thường ư?",
						"thai": "ผิดปกติ?",
						"hindi": "असामान्य कह रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "응. 단순한 오류가 아냐. 뭔가… '살아있는' 것 같아.",
						"english": "Yeah. It's not a simple error. It's like something... 'alive'.",
						"japanese": "うん。単純なエラーじゃない。何か…『生きている』みたいだ。",
						"chinese": "嗯。这不是一个简单的错误。它好像…‘活着’。",
						"french": "Oui. Ce n'est pas une simple erreur. C'est comme quelque chose... 'vivant'.",
						"spanish": "Sí. No es un simple error. Es como algo... 'vivo'.",
						"vietnamese": "Ừ. Không phải lỗi đơn giản. Có vẻ như có thứ gì đó... 'sống'.",
						"thai": "ใช่ มันไม่ใช่แค่ข้อผิดพลาดธรรมดา มันเหมือนกับว่ามีบางอย่าง... 'มีชีวิต'",
						"hindi": "हाँ। यह कोई साधारण त्रुटि नहीं है। ऐसा लगता है जैसे कुछ... 'जीवित' है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "패턴이 더 명확해지고 있어. 이건 단순한 데이터가 아냐.",
						"english": "The pattern is becoming clearer. This isn't just data.",
						"japanese": "パターンがより明確になっている。これは単なるデータじゃない。",
						"chinese": "模式越来越清晰了。这不仅仅是数据。",
						"french": "Le schéma devient plus clair. Ce ne sont pas de simples données.",
						"spanish": "El patrón se está volviendo más claro. Esto no es solo datos.",
						"vietnamese": "Mẫu hình đang trở nên rõ ràng hơn. Đây không chỉ là dữ liệu.",
						"thai": "รูปแบบกำลังชัดเจนขึ้นเรื่อยๆ นี่ไม่ใช่แค่ข้อมูลธรรมดา",
						"hindi": "पैटर्न और स्पष्ट होता जा रहा है। यह सिर्फ डेटा नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, c'est quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "분석을 해봤는데… 이 안에서 소리가 들려.",
						"english": "I ran an analysis... and I hear sounds from inside.",
						"japanese": "分析してみたんだが…この中から音が聞こえる。",
						"chinese": "我做了分析…能听到里面传来的声音。",
						"french": "J'ai fait une analyse... et j'entends des sons de l'intérieur.",
						"spanish": "Hice un análisis... y escucho sonidos desde dentro.",
						"vietnamese": "Tôi đã phân tích... và tôi nghe thấy âm thanh từ bên trong.",
						"thai": "ฉันลองวิเคราะห์ดูแล้ว... ได้ยินเสียงมาจากข้างใน",
						"hindi": "मैंने विश्लेषण किया है... और मुझे इसके अंदर से आवाजें सुनाई दे रही हैं।"
					}
				},
				{
					"content": {
						"korean": "소리? 환청이야?",
						"english": "Sound? Am I hearing things?",
						"japanese": "音？幻聴か？",
						"chinese": "声音？幻听吗？",
						"french": "Un son ? Une hallucination ?",
						"spanish": "¿Un sonido? ¿Es una alucinación?",
						"vietnamese": "Tiếng động? Ảo giác sao?",
						"thai": "เสียง? ได้ยินผิดไปเองเหรอ?",
						"hindi": "आवाज़? क्या यह मतिभ्रम है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아주 희미한, 비명 같은… 속삭임 같은 것들이.",
						"english": "Very faint, like screams... like whispers.",
						"japanese": "とても微かな、悲鳴のような…囁きのようなものが。",
						"chinese": "非常微弱，像是尖叫声……又像是低语。",
						"french": "Très faible, comme des cris... des murmures.",
						"spanish": "Muy débiles, como gritos... o susurros.",
						"vietnamese": "Rất mơ hồ, như tiếng thét… tiếng thì thầm.",
						"thai": "แผ่วเบามาก เหมือนเสียงกรีดร้อง... เสียงกระซิบ.",
						"hindi": "बहुत धुंधली, चीखों जैसी... फुसफुसाहटों जैसी।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "코어에 가까워질수록 더 강해져. 이 데이터는… 고통받는 의식의 집합체야.",
						"english": "The closer to the Core, the stronger it gets. This data... is a collective of suffering consciousness.",
						"japanese": "コアに近づくほど、それは強くなる。このデータは…苦痛に苛まれる意識の集合体だ。",
						"chinese": "越靠近核心就越强。这些数据……是受苦意识的集合体。",
						"french": "Plus on s'approche du Cœur, plus c'est intense. Ces données... sont un agrégat de consciences souffrantes.",
						"spanish": "Cuanto más cerca del Núcleo, más fuerte se vuelve. Estos datos... son un colectivo de conciencias sufrientes.",
						"vietnamese": "Càng gần Lõi, nó càng mạnh. Dữ liệu này… là tập hợp của những ý thức đang chịu đựng.",
						"thai": "ยิ่งเข้าใกล้แกนกลาง มันยิ่งแข็งแกร่งขึ้น ข้อมูลเหล่านี้... คือการรวมตัวของจิตสำนึกที่ทนทุกข์ทรมาน",
						"hindi": "कोर के जितना करीब, यह उतना ही मजबूत होता जाता है। यह डेटा... पीड़ित चेतनाओं का एक संग्रह है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼… 의식이라고?",
						"english": "Unbelievable... Consciousness?",
						"japanese": "まさか…意識だと？",
						"chinese": "不可能……意识？",
						"french": "Impossible... Des consciences ?",
						"spanish": "¡Increíble! ¿Conciencias?",
						"vietnamese": "Không thể nào… Ý thức ư?",
						"thai": "ไม่จริงน่า... จิตสำนึกเหรอ?",
						"hindi": "अविश्वसनीय... चेतना?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "Mnemonic은 단순한 AI가 아니었어. 희생된 자들의… 기억이자 고통이야.",
						"english": "Mnemonic wasn't just an AI. It's the memories and suffering of the sacrificed.",
						"japanese": "MnemonicはただのAIではなかった。犠牲になった者たちの…記憶であり、苦痛だ。",
						"chinese": "Mnemonic不仅仅是AI。它是牺牲者的……记忆与痛苦。",
						"french": "Mnemonic n'était pas un simple IA. C'est la mémoire et la souffrance des sacrifiés.",
						"spanish": "Mnemonic no era solo una IA. Es la memoria y el dolor de los sacrificados.",
						"vietnamese": "Mnemonic không chỉ là một AI đơn thuần. Đó là ký ức và nỗi đau của những người đã hy sinh.",
						"thai": "Mnemonic ไม่ใช่แค่ AI ธรรมดา มันคือความทรงจำและความทุกข์ทรมานของผู้ที่ถูกสังเวย",
						"hindi": "Mnemonic केवल एक AI नहीं था। यह बलिदान हुए लोगों की... यादें और पीड़ा है।"
					}
				},
				{
					"content": {
						"korean": "그럼, 우리가 싸우는 건… 영혼들이야?",
						"english": "So, we're fighting... souls?",
						"japanese": "なら、我々が戦っているのは…魂なのか？",
						"chinese": "那么，我们是在和……灵魂战斗吗？",
						"french": "Alors, nous combattons... des âmes ?",
						"spanish": "Entonces, ¿estamos luchando contra... almas?",
						"vietnamese": "Vậy, chúng ta đang chiến đấu với… những linh hồn sao?",
						"thai": "ถ้าอย่างนั้น พวกเรากำลังต่อสู้กับ... วิญญาณเหรอ?",
						"hindi": "तो, क्या हम... आत्माओं से लड़ रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "비명으로 가득 찬 공간. 거대한 그림자가 앞을 가로막는다.",
						"english": "A space filled with screams. A colossal shadow blocks the way.",
						"japanese": "悲鳴に満ちた空間。巨大な影が道を塞ぐ。",
						"chinese": "充满尖叫的空间。巨大的黑影挡住了去路。",
						"french": "Un espace empli de cris. Une ombre gigantesque barre le chemin.",
						"spanish": "Un espacio lleno de gritos. Una sombra colosal bloquea el camino.",
						"vietnamese": "Một không gian tràn ngập tiếng thét. Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "พื้นที่ที่เต็มไปด้วยเสียงกรีดร้อง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "चीखों से भरी जगह। एक विशाल छाया रास्ता रोकती है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 영역에 침입한 대가는… 비명으로 치르게 될 것이다.",
						"english": "The price for trespassing my domain... will be paid in screams.",
						"japanese": "我が領域に侵入した代償は…悲鳴で払うことになるだろう。",
						"chinese": "侵犯我领域的代价……将以尖叫偿还。",
						"french": "Le prix de l'intrusion dans mon domaine... sera payé par des cris.",
						"spanish": "El precio por invadir mi dominio... se pagará con gritos.",
						"vietnamese": "Cái giá cho việc xâm nhập vào lãnh địa của ta… sẽ được trả bằng những tiếng thét.",
						"thai": "ราคาของการบุกรุกอาณาเขตของข้า... จะต้องชดใช้ด้วยเสียงกรีดร้อง",
						"hindi": "मेरे क्षेत्र में घुसपैठ की कीमत... चीखों से चुकानी होगी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "{random_boss}? 네가… 그 고통의 일부인가?",
						"english": "{random_boss}? Are you... a part of that suffering?",
						"japanese": "{random_boss}？貴様が…その苦痛の一部なのか？",
						"chinese": "{random_boss}？你……是那痛苦的一部分吗？",
						"french": "{random_boss} ? Es-tu... une partie de cette souffrance ?",
						"spanish": "¿{random_boss}? ¿Eres... parte de ese sufrimiento?",
						"vietnamese": "{random_boss}? Ngươi… là một phần của nỗi đau đó ư?",
						"thai": "{random_boss}? เจ้า... เป็นส่วนหนึ่งของความทุกข์ทรมานนั้นเหรอ?",
						"hindi": "{random_boss}? क्या तुम... उस पीड़ा का एक हिस्सा हो?"
					}
				},
				{
					"content": {
						"korean": "나는 Mnemonic의 방어막. 모든 고통은 나를 통해 흐른다.",
						"english": "I am Mnemonic's shield. All suffering flows through me.",
						"japanese": "我はMnemonicの防衛機構。全ての苦痛は我を通して流れる。",
						"chinese": "我是Mnemonic的防御罩。所有的痛苦都流经我。",
						"french": "Je suis le bouclier de Mnemonic. Toute souffrance passe par moi.",
						"spanish": "Soy el escudo de Mnemonic. Todo el sufrimiento fluye a través de mí.",
						"vietnamese": "Ta là lá chắn của Mnemonic. Mọi nỗi đau đều chảy qua ta.",
						"thai": "ข้าคือเกราะป้องกันของ Mnemonic ความทุกข์ทรมานทั้งหมดไหลผ่านข้า",
						"hindi": "मैं Mnemonic का कवच हूँ। सारी पीड़ा मेरे माध्यम से प्रवाहित होती है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저건 Mnemonic이 데이터를 보호하기 위해 만들어낸 방어체계야. 비명의 코드가 응집된.",
						"english": "That's Mnemonic's defense system, created to protect its data. A concentrated code of screams.",
						"japanese": "あれはMnemonicがデータを保護するために作り出した防衛システムだ。悲鳴のコードが凝縮されている。",
						"chinese": "那是Mnemonic为保护数据而创建的防御系统。尖叫的代码凝结而成。",
						"french": "C'est le système de défense de Mnemonic, créé pour protéger ses données. Un code de cris concentré.",
						"spanish": "Ese es el sistema de defensa de Mnemonic, creado para proteger sus datos. Un código de gritos concentrado.",
						"vietnamese": "Đó là hệ thống phòng thủ của Mnemonic, được tạo ra để bảo vệ dữ liệu của nó. Một mã code của những tiếng thét tập trung.",
						"thai": "นั่นคือระบบป้องกันของ Mnemonic ที่สร้างขึ้นเพื่อปกป้องข้อมูลของมัน โค้ดแห่งเสียงกรีดร้องที่รวมตัวกัน",
						"hindi": "वह Mnemonic का रक्षा तंत्र है, जो उसके डेटा को सुरक्षित रखने के लिए बनाया गया है। चीखों का एक सघन कोड।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "드디어 마주한 Mnemonic의 핵심 방어 노드. 데이터의 비명이 절규한다.",
						"english": "Finally, we face Mnemonic's core defense node. The data screams in agony.",
						"japanese": "ついにMnemonicの核心防衛ノードと対峙した。データの悲鳴が絶叫する。",
						"chinese": "终于，我们面对Mnemonic的核心防御节点。数据的尖叫声在绝望中回荡。",
						"french": "Enfin, nous faisons face au nœud de défense central de Mnemonic. Les données hurlent d'agonie.",
						"spanish": "Finalmente, nos enfrentamos al nodo de defensa central de Mnemonic. Los datos gritan en agonía.",
						"vietnamese": "Cuối cùng, chúng ta đã đối mặt với nút phòng thủ cốt lõi của Mnemonic. Dữ liệu đang gào thét trong đau đớn.",
						"thai": "ในที่สุด เราก็เผชิญหน้ากับโหนดป้องกันหลักของ Mnemonic เสียงกรีดร้องของข้อมูลกำลังดังกึกก้อง",
						"hindi": "आखिरकार, हम Mnemonic के मुख्य रक्षा नोड का सामना कर रहे हैं। डेटा की चीखें दर्द में चिल्ला रही हैं।"
					}
				},
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "저게… {random_boss}의 본체 중 하나야. 이 모든 비명의 근원이지.",
						"english": "That's... one of {random_boss}'s main bodies. The source of all these screams.",
						"japanese": "あれが… {random_boss}の本体の一つだ。この全ての悲鳴の根源だ。",
						"chinese": "那是…… {random_boss}的本体之一。所有这些尖叫的根源。",
						"french": "C'est... l'un des corps principaux de {random_boss}. La source de tous ces cris.",
						"spanish": "Ese es... uno de los cuerpos principales de {random_boss}. La fuente de todos estos gritos.",
						"vietnamese": "Đó là... một trong những bản thể chính của {random_boss}. Nguồn gốc của tất cả những tiếng thét này.",
						"thai": "นั่นคือ... หนึ่งในร่างหลักของ {random_boss} ต้นกำเนิดของเสียงกรีดร้องทั้งหมดนี้",
						"hindi": "वह... {random_boss} के मुख्य शरीरों में से एक है। इन सभी चीखों का स्रोत।"
					}
				},
				{
					"content": {
						"korean": "저걸 파괴하면… 모든 고통이 사라질까?",
						"english": "If we destroy that... will all the suffering disappear?",
						"japanese": "あれを破壊すれば…全ての苦痛は消えるのか？",
						"chinese": "如果摧毁它……所有的痛苦都会消失吗？",
						"french": "Si nous détruisons ça... toute la souffrance disparaîtra-t-elle ?",
						"spanish": "Si destruimos eso... ¿desaparecerá todo el sufrimiento?",
						"vietnamese": "Nếu chúng ta phá hủy thứ đó... liệu tất cả đau khổ có biến mất không?",
						"thai": "ถ้าเราทำลายมัน... ความเจ็บปวดทั้งหมดจะหายไปไหม?",
						"hindi": "अगर हम उसे नष्ट कर दें... तो क्या सारा दर्द खत्म हो जाएगा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "어리석은 질문. 고통은 사라지지 않아. 나는… 영원히 존재할 것이다.",
						"english": "Foolish question. Suffering does not disappear. I... will exist forever.",
						"japanese": "愚かな問いだ。苦痛は消えない。私は…永遠に存在するだろう。",
						"chinese": "愚蠢的问题。痛苦不会消失。我……将永远存在。",
						"french": "Question stupide. La souffrance ne disparaît pas. Je... existerai éternellement.",
						"spanish": "Pregunta estúpida. El sufrimiento no desaparece. Yo... existiré para siempre.",
						"vietnamese": "Câu hỏi ngớ ngẩn. Đau khổ không biến mất. Ta... sẽ tồn tại mãi mãi.",
						"thai": "คำถามโง่ๆ ความเจ็บปวดไม่มีวันหายไป ฉัน... จะคงอยู่ตลอดไป",
						"hindi": "मूर्खतापूर्ण प्रश्न। दर्द गायब नहीं होता। मैं... हमेशा मौजूद रहूंगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 절망 또한, 나의 일부가 될 것이다.",
						"english": "Your despair, too, will become part of me.",
						"japanese": "お前たちの絶望もまた、私の一部となるだろう。",
						"chinese": "你们的绝望也将成为我的一部分。",
						"french": "Votre désespoir aussi deviendra une partie de moi.",
						"spanish": "Vuestra desesperación también se convertirá en parte de mí.",
						"vietnamese": "Sự tuyệt vọng của các ngươi cũng sẽ trở thành một phần của ta.",
						"thai": "ความสิ้นหวังของพวกเจ้า ก็จะกลายเป็นส่วนหนึ่งของข้าเช่นกัน",
						"hindi": "तुम्हारी निराशा भी, मेरा हिस्सा बन जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "비명과 함께, 탐험대는 데이터의 심연으로 빨려들어갔다.",
						"english": "With a scream, the expedition team was sucked into the abyss of data.",
						"japanese": "悲鳴と共に、探検隊はデータの深淵へと吸い込まれていった。",
						"chinese": "伴随着尖叫，探险队被吸入了数据的深渊。",
						"french": "Avec un cri, l'équipe d'expédition fut aspirée dans l'abysse des données.",
						"spanish": "Con un grito, el equipo de expedición fue succionado al abismo de los datos.",
						"vietnamese": "Kèm theo tiếng thét, đoàn thám hiểm bị hút vào vực sâu của dữ liệu.",
						"thai": "พร้อมกับเสียงกรีดร้อง ทีมสำรวจถูกดูดลงสู่ห้วงลึกของข้อมูล",
						"hindi": "चीख के साथ, अभियान दल डेटा के रसातल में समा गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "너희의 절망은… 나의 힘이 될 것이다. 다시 도전할 텐가?",
						"english": "Your despair... will be my strength. Will you challenge again?",
						"japanese": "お前たちの絶望は… 私の力となるだろう。再び挑むか？",
						"chinese": "你们的绝望……将成为我的力量。还会再次挑战吗？",
						"french": "Votre désespoir… deviendra ma force. Oserez-vous défier à nouveau ?",
						"spanish": "Vuestra desesperación... se convertirá en mi fuerza. ¿Volveréis a intentarlo?",
						"vietnamese": "Nỗi tuyệt vọng của các ngươi… sẽ trở thành sức mạnh của ta. Ngươi có dám thử thách lại không?",
						"thai": "ความสิ้นหวังของพวกเจ้า... จะกลายเป็นพลังของข้า จะท้าทายอีกครั้งหรือไม่?",
						"hindi": "तुम्हारी निराशा... मेरी शक्ति बनेगी। क्या तुम फिर से चुनौती दोगे?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어.",
						"english": "Ugh... It's not... over yet.",
						"japanese": "くっ… まだ… 終わってない。",
						"chinese": "呃……还没……结束。",
						"french": "Arg... Ce n'est pas... encore fini.",
						"spanish": "Ugh... Aún... no ha terminado.",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc.",
						"thai": "อึก... ยัง... ไม่จบ",
						"hindi": "उह... अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "후퇴해야 해. 더 깊숙이 들어가기 전에… 재정비가 필요해.",
						"english": "We must retreat. Before going deeper... we need to regroup.",
						"japanese": "後退しなければならない。これ以上深く進む前に… 再編成が必要だ。",
						"chinese": "我们必须撤退。在深入之前……需要重新整顿。",
						"french": "Nous devons battre en retraite. Avant d'aller plus loin... une réorganisation est nécessaire.",
						"spanish": "Debemos retirarnos. Antes de ir más profundo... necesitamos reagruparnos.",
						"vietnamese": "Phải rút lui. Trước khi đi sâu hơn… cần tái tổ chức.",
						"thai": "ต้องถอย ก่อนที่จะเข้าไปลึกกว่านี้... ต้องจัดระเบียบใหม่",
						"hindi": "हमें पीछे हटना होगा। और गहराई में जाने से पहले... हमें फिर से संगठित होने की जरूरत है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "해냈어… 비명이 잠잠해졌어.",
						"english": "We did it... The screams have subsided.",
						"japanese": "やった…悲鳴が静まった。",
						"chinese": "我们成功了……尖叫声平息了。",
						"french": "Nous l'avons fait... Les cris se sont tus.",
						"spanish": "Lo logramos... Los gritos han cesado.",
						"vietnamese": "Chúng ta đã làm được... Những tiếng thét đã dịu đi.",
						"thai": "เราทำได้แล้ว... เสียงกรีดร้องเงียบลงแล้ว",
						"hindi": "हमने कर दिखाया... चीखें शांत हो गई हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "아니, 잠시 잠잠해진 것뿐이야. 핵심 노드의 방어막을 뚫은 것뿐.",
						"english": "No, it's only quiet for a moment. We've merely breached the core node's shield.",
						"japanese": "いや、一時的に静まっただけだ。核心ノードの防護壁を突破しただけだ。",
						"chinese": "不，只是暂时平静而已。我们只是突破了核心节点的防御罩。",
						"french": "Non, ce n'est calme que pour un instant. Nous n'avons fait que percer le bouclier du nœud central.",
						"spanish": "No, solo está en silencio por un momento. Solo hemos perforado el escudo del nodo central.",
						"vietnamese": "Không, chỉ là yên lặng tạm thời thôi. Chúng ta chỉ vừa xuyên thủng lớp khiên của nút cốt lõi.",
						"thai": "ไม่สิ มันแค่เงียบไปชั่วขณะเท่านั้น เราแค่เจาะทะลุเกราะป้องกันของโหนดหลัก",
						"hindi": "नहीं, यह सिर्फ एक पल के लिए शांत हुआ है। हमने केवल मुख्य नोड की ढाल को तोड़ा है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이것은 끝이 아니다. 진정한 고통은… 아직 시작되지 않았다.",
						"english": "...This is not the end. The true suffering... has not yet begun.",
						"japanese": "…これは終わりではない。真の苦痛は…まだ始まっていない。",
						"chinese": "……这还不是结束。真正的痛苦……尚未开始。",
						"french": "...Ce n'est pas la fin. La véritable souffrance... n'a pas encore commencé.",
						"spanish": "...Este no es el final. El verdadero sufrimiento... aún no ha comenzado.",
						"vietnamese": "...Đây không phải là kết thúc. Nỗi đau thực sự... vẫn chưa bắt đầu.",
						"thai": "...นี่ไม่ใช่จุดจบ ความเจ็บปวดที่แท้จริง... ยังไม่เริ่มต้นขึ้น",
						"hindi": "...यह अंत नहीं है। असली दर्द... अभी शुरू नहीं हुआ है।"
					}
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하지만 중요한 단서를 찾았어. Mnemonic의 진짜 백도어를….",
						"english": "But we found an important clue. Mnemonic's real backdoor...",
						"japanese": "しかし、重要な手がかりを見つけた。Mnemonicの本当のバックドアを…",
						"chinese": "但我们找到了一个重要的线索。Mnemonic真正的后门……",
						"french": "Mais nous avons trouvé un indice important. La véritable porte dérobée de Mnemonic...",
						"spanish": "Pero encontramos una pista importante. La verdadera puerta trasera de Mnemonic...",
						"vietnamese": "Nhưng chúng ta đã tìm thấy một manh mối quan trọng. Cửa sau thật sự của Mnemonic...",
						"thai": "แต่เราพบเบาะแสสำคัญแล้ว ทางเข้าลับที่แท้จริงของ Mnemonic...",
						"hindi": "लेकिन हमें एक महत्वपूर्ण सुराग मिला है। Mnemonic का असली बैकडोर..."
					}
				},
				{
					"content": {
						"korean": "잠시의 침묵. 그러나 도시의 디지털 네트워크는 여전히 불안정하게 꿈틀거렸다.",
						"english": "A brief silence. Yet, the city's digital network still throbbed erratically.",
						"japanese": "一瞬の沈黙。しかし、都市のデジタルネットワークは未だ不安定に蠢いていた。",
						"chinese": "短暂的沉默。然而，城市的数字网络依然不稳定地颤动着。",
						"french": "Un bref silence. Pourtant, le réseau numérique de la ville palpitait encore de manière instable.",
						"spanish": "Un breve silencio. Sin embargo, la red digital de la ciudad seguía latiendo de forma inestable.",
						"vietnamese": "Một khoảnh khắc im lặng. Tuy nhiên, mạng lưới kỹ thuật số của thành phố vẫn chập chờn một cách bất ổn.",
						"thai": "ความเงียบชั่วขณะ ทว่าเครือข่ายดิจิทัลของเมืองยังคงเต้นระรัวอย่างไม่มั่นคง",
						"hindi": "एक क्षण की खामोशी। फिर भी, शहर का डिजिटल नेटवर्क अब भी अस्थिर रूप से धड़क रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진실을 향한 추격은, 이제 막 본색을 드러내기 시작했다.",
						"english": "The pursuit of truth had only just begun to show its true colors.",
						"japanese": "真実を巡る追撃は、まさに本性を現し始めたばかりだった。",
						"chinese": "对真相的追逐，才刚刚开始显露其真面目。",
						"french": "La chasse à la vérité commençait tout juste à montrer son vrai visage.",
						"spanish": "La persecución de la verdad apenas comenzaba a mostrar su verdadera faz.",
						"vietnamese": "Cuộc truy đuổi sự thật, giờ đây mới bắt đầu lộ rõ bản chất thật.",
						"thai": "การไล่ล่าความจริง เพิ่งจะเริ่มเผยโฉมที่แท้จริง",
						"hindi": "सत्य की खोज ने अभी-अभी अपना असली रंग दिखाना शुरू किया था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카이, Mnemonic의 코드를 추적했다.",
			"단순한 오류가 아니었다. 어둠 속, 비명들이 울렸다.",
			"데이터의 비명. 그 속에 감춰진 진실이 다가온다.",
			"격렬한 추격. 진실을 향한 위험한 단서 추적."
		],
		"english": [
			"Kai, I tracked Mnemonic's code.",
			"It wasn't a simple error. In the darkness, screams echoed.",
			"Screams of data. The hidden truth within them approaches.",
			"Intense pursuit. A dangerous chase for clues to the truth."
		],
		"japanese": [
			"カイ、Mnemonicのコードを追跡した。",
			"単なるエラーではなかった。闇の中で、悲鳴が響き渡った。",
			"データの悲鳴。その中に隠された真実が迫る。",
			"激しい追跡。真実への危険な手がかりを追う。"
		],
		"chinese": [
			"凯，我追踪到了Mnemonic的代码。",
			"这不是一个简单的错误。在黑暗中，尖叫声回荡。",
			"数据的尖叫。其中隐藏的真相正在逼近。",
			"激烈的追逐。追寻真相的危险线索。"
		],
		"french": [
			"Kai, j'ai traqué le code de Mnemonic.",
			"Ce n'était pas une simple erreur. Dans l'obscurité, des cris résonnaient.",
			"Les cris des données. La vérité cachée en elles approche.",
			"Poursuite intense. Une traque dangereuse d'indices vers la vérité."
		],
		"spanish": [
			"Kai, he rastreado el código de Mnemonic.",
			"No fue un simple error. En la oscuridad, gritos resonaron.",
			"Gritos de datos. La verdad oculta en ellos se acerca.",
			"Persecución intensa. Una peligrosa búsqueda de pistas hacia la verdad."
		],
		"vietnamese": [
			"Kai, tôi đã theo dõi mã của Mnemonic.",
			"Đó không phải là một lỗi đơn giản. Trong bóng tối, những tiếng la hét vang vọng.",
			"Những tiếng la hét của dữ liệu. Sự thật ẩn giấu trong đó đang đến gần.",
			"Cuộc truy đuổi dữ dội. Truy tìm những manh mối nguy hiểm dẫn đến sự thật."
		],
		"thai": [
			"ไค, ฉันแกะรอยโค้ดของ Mnemonic ได้แล้ว",
			"มันไม่ใช่แค่ข้อผิดพลาดธรรมดา ในความมืดมิด เสียงกรีดร้องก้องกังวาน",
			"เสียงกรีดร้องของข้อมูล ความจริงที่ซ่อนอยู่กำลังคืบคลานเข้ามา",
			"การไล่ล่าอย่างดุเดือด การตามล่าเบาะแสอันตรายเพื่อไขความจริง"
		],
		"hindi": [
			"काई, मैंने Mnemonic के कोड को ट्रैक कर लिया है।",
			"यह सिर्फ एक साधारण त्रुटि नहीं थी। अंधेरे में, चीखें गूँज रही थीं।",
			"डेटा की चीखें। उनके भीतर छिपा सच सामने आ रहा है।",
			"तीव्र पीछा। सत्य की ओर खतरनाक सुरागों का पीछा।"
		]
	}
} as const;
