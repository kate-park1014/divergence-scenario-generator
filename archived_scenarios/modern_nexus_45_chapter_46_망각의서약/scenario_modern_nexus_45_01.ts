export const scenario_modern_nexus_45_01 = {
	"scenario_id": "modern_nexus_45_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "밤의 도시는 언제나 계약으로 숨 쉰다.",
						"english": "Night City always breathes by contracts.",
						"japanese": "夜の街は常に契約で息づいている。",
						"chinese": "夜之城总是靠契约维生。",
						"french": "La Ville Nocturne respire toujours par les contrats.",
						"spanish": "La Ciudad Nocturna siempre respira a través de contratos.",
						"vietnamese": "Thành phố đêm luôn sống nhờ những hợp đồng.",
						"thai": "นครรัตติกาลหายใจด้วยพันธสัญญาเสมอ",
						"hindi": "रात का शहर हमेशा समझौतों से साँस लेता है।"
					}
				},
				{
					"content": {
						"korean": "(불안한 듯 주위를 둘러본다)",
						"english": "(Looks around anxiously)",
						"japanese": "(不安そうに周囲を見回す)",
						"chinese": "(不安地环顾四周)",
						"french": "(Regarde autour de lui avec anxiété)",
						"spanish": "(Mira a su alrededor con ansiedad)",
						"vietnamese": "(Nhìn quanh đầy lo lắng)",
						"thai": "(มองไปรอบๆ อย่างกระวนกระวาย)",
						"hindi": "(चिंतित होकर चारों ओर देखता है)"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "익숙한 듯 낯선 불안감이 엄습한다.",
						"english": "A familiar yet strange sense of unease creeps in.",
						"japanese": "見慣れているようで、見慣れない不安感が襲いかかる。",
						"chinese": "熟悉又陌生的不安感袭来。",
						"french": "Une inquiétude familière mais étrange s'empare de lui.",
						"spanish": "Una inquietud familiar pero extraña se apodera de él.",
						"vietnamese": "Một cảm giác bất an vừa quen vừa lạ ập đến.",
						"thai": "ความรู้สึกไม่สบายใจที่คุ้นเคยแต่แปลกใหม่เข้าคุกคาม",
						"hindi": "एक परिचित फिर भी अजीब बेचैनी छा जाती है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "기다리고 있었습니다. 당신의 '정의로운 계약'을 위해.",
						"english": "I've been waiting. For your 'righteous contract'.",
						"japanese": "お待ちしておりました。あなたの「正義の契約」のために。",
						"chinese": "我一直在等。为了您的“正义契约”。",
						"french": "Je vous attendais. Pour votre 'contrat juste'.",
						"spanish": "Le he estado esperando. Por su 'contrato justo'.",
						"vietnamese": "Tôi đã chờ đợi. Vì 'hợp đồng chính nghĩa' của ngài.",
						"thai": "ผมรออยู่ เพื่อ 'พันธสัญญาแห่งความยุติธรรม' ของคุณ",
						"hindi": "मैं इंतज़ार कर रहा था। आपके 'धार्मिक समझौते' के लिए।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신이 벡스?",
						"english": "You're Vex?",
						"japanese": "あなたがベックスですか？",
						"chinese": "你是维克斯？",
						"french": "Vous êtes Vex ?",
						"spanish": "¿Es usted Vex?",
						"vietnamese": "Anh là Vex?",
						"thai": "คุณคือเว็กซ์?",
						"hindi": "तुम वेक्स हो?"
					}
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. 이 도시의 모든 것이 계약으로 이루어져 있죠. 당신의 과거도.",
						"english": "Yes. Everything in this city is made of contracts. Your past, too.",
						"japanese": "はい。この街の全ては契約で成り立っています。あなたの過去も。",
						"chinese": "是的。这座城市的一切都由契约构成。包括你的过去。",
						"french": "Oui. Tout dans cette ville est fait de contrats. Votre passé aussi.",
						"spanish": "Sí. Todo en esta ciudad está hecho de contratos. Su pasado también.",
						"vietnamese": "Vâng. Mọi thứ trong thành phố này đều được tạo nên từ các hợp đồng. Kể cả quá khứ của ngài.",
						"thai": "ใช่ ทุกสิ่งในเมืองนี้ล้วนเกิดจากพันธสัญญา อดีตของคุณด้วย",
						"hindi": "हाँ। इस शहर में सब कुछ समझौतों से बना है। आपका अतीत भी।"
					}
				},
				{
					"content": {
						"korean": "어렴풋한 기억? 아닙니다. 이건 '절대적 계약'입니다.",
						"english": "Faint memory? No. This is an 'Absolute Contract'.",
						"japanese": "曖昧な記憶？違います。これは「絶対契約」です。",
						"chinese": "模糊的记忆？不。这是“绝对契约”。",
						"french": "Un vague souvenir ? Non. C'est un 'Contrat Absolu'.",
						"spanish": "¿Un recuerdo borroso? No. Esto es un 'Contrato Absoluto'.",
						"vietnamese": "Ký ức mờ nhạt? Không. Đây là 'Khế ước Tuyệt đối'.",
						"thai": "ความทรงจำที่เลือนลาง? ไม่ใช่ นี่คือ 'สัญญาสมบูรณ์'",
						"hindi": "धुंधली याददाश्त? नहीं। यह एक 'पूर्ण अनुबंध' है।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "(왠지 모르게 가슴이 아프다)",
						"english": "(My chest aches for some reason)",
						"japanese": "(なぜか胸が痛む)",
						"chinese": "(不知为何心口作痛)",
						"french": "(Mon cœur me fait mal sans raison)",
						"spanish": "(Por alguna razón, me duele el pecho)",
						"vietnamese": "(Không hiểu sao lòng đau nhói)",
						"thai": "(รู้สึกเจ็บหน้าอกโดยไม่ทราบสาเหตุ)",
						"hindi": "(किसी कारण से मेरा सीना दर्द कर रहा है)"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "서명하십시오. 당신의 새로운 시작을 위해.",
						"english": "Sign. For your new beginning.",
						"japanese": "署名してください。あなたの新しい始まりのために。",
						"chinese": "请签名。为了你的全新开始。",
						"french": "Signez. Pour votre nouveau départ.",
						"spanish": "Firma. Para tu nuevo comienzo.",
						"vietnamese": "Ký tên. Vì một khởi đầu mới của bạn.",
						"thai": "เซ็นชื่อ. เพื่อการเริ่มต้นใหม่ของคุณ",
						"hindi": "हस्ताक्षर करें। आपकी नई शुरुआत के लिए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "(망설이지만, 서명한다)",
						"english": "(Hesitates, but signs)",
						"japanese": "(躊躇するが、署名する)",
						"chinese": "(犹豫了一下，但还是签了名)",
						"french": "(Hésite, mais signe)",
						"spanish": "(Duda, pero firma)",
						"vietnamese": "(Do dự, nhưng vẫn ký)",
						"thai": "(ลังเล แต่ก็เซ็นชื่อ)",
						"hindi": "(हिचकिचाता है, लेकिन हस्ताक्षर करता है)"
					}
				},
				{
					"speaker": "bex",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "첫 계약. 알 수 없는 굴레가 시작됐다.",
						"english": "First contract. An unknown chain has begun.",
						"japanese": "初めての契約。未知の束縛が始まった。",
						"chinese": "首次契约。未知的束缚开始了。",
						"french": "Premier contrat. Un joug inconnu a commencé.",
						"spanish": "Primer contrato. Una atadura desconocida ha comenzado.",
						"vietnamese": "Khế ước đầu tiên. Một ràng buộc không rõ đã bắt đầu.",
						"thai": "สัญญาแรก. บ่วงรัดที่ไม่รู้จักได้เริ่มต้นขึ้นแล้ว",
						"hindi": "पहला अनुबंध। एक अज्ञात बंधन शुरू हो गया है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "계약서의 잉크가 마르자, 잊혀진 약속의 잔향이 느껴진다.",
						"english": "As the contract's ink dries, the lingering scent of a forgotten promise is felt.",
						"japanese": "契約書のインクが乾くと、忘れられた約束の残響が感じられる。",
						"chinese": "契约墨迹干涸，遗忘的承诺余韵萦绕。",
						"french": "L'encre du contrat sèche, et l'écho d'une promesse oubliée se fait sentir.",
						"spanish": "Al secarse la tinta del contrato, se siente el eco de una promesa olvidada.",
						"vietnamese": "Mực hợp đồng khô, dư âm của lời hứa bị lãng quên hiện về.",
						"thai": "เมื่อหมึกในสัญญานั้นแห้ง กลิ่นอายของคำสัญญาที่ถูกลืมเลือนก็ปรากฏขึ้น",
						"hindi": "जैसे ही अनुबंध की स्याही सूखती है, एक भूले हुए वादे की गूँज महसूस होती है।"
					}
				},
				{
					"content": {
						"korean": "(오래된 종이 냄새가 난다. 낯설지 않아.)",
						"english": "(Smells like old paper. Not unfamiliar.)",
						"japanese": "(古い紙の匂いがする。馴染みがある。)",
						"chinese": "(有股旧纸的味道。不陌生。)",
						"french": "(Ça sent le vieux papier. Ce n'est pas inconnu.)",
						"spanish": "(Huele a papel viejo. No me es desconocido.)",
						"vietnamese": "(Mùi giấy cũ. Không xa lạ.)",
						"thai": "(กลิ่นกระดาษเก่า. ไม่ใช่กลิ่นแปลก.)",
						"hindi": "(पुरानी कागज़ की गंध आती है। अपरिचित नहीं।)"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bex"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "계약은 당신에게 새로운 길을 열어줄 겁니다.",
						"english": "The contract will open a new path for you.",
						"japanese": "契約はあなたに新しい道を開くでしょう。",
						"chinese": "契约会为你开启新的道路。",
						"french": "Le contrat vous ouvrira une nouvelle voie.",
						"spanish": "El contrato te abrirá un nuevo camino.",
						"vietnamese": "Hợp đồng sẽ mở ra một con đường mới cho bạn.",
						"thai": "สัญญานี้จะเปิดเส้นทางใหม่ให้คุณ",
						"hindi": "अनुबंध आपके लिए एक नया मार्ग प्रशस्त करेगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말 그럴까요?",
						"english": "Is that really true?",
						"japanese": "本当にそうでしょうか？",
						"chinese": "真的会吗？",
						"french": "Vraiment ?",
						"spanish": "¿De verdad?",
						"vietnamese": "Thật sao?",
						"thai": "จริงหรือ?",
						"hindi": "क्या सचमुच ऐसा होगा?"
					}
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템은 완벽합니다. 의심하지 마세요.",
						"english": "The system is perfect. Do not doubt.",
						"japanese": "システムは完璧です。疑わないでください。",
						"chinese": "系统是完美的。请勿怀疑。",
						"french": "Le système est parfait. Ne doutez pas.",
						"spanish": "El sistema es perfecto. No dudes.",
						"vietnamese": "Hệ thống hoàn hảo. Đừng nghi ngờ.",
						"thai": "ระบบสมบูรณ์แบบ. อย่าสงสัย",
						"hindi": "प्रणाली एकदम सही है। संदेह न करें।"
					}
				},
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "그러나 주인공의 마음속에는 의문이 피어난다.",
						"english": "Yet, a question blooms in the protagonist's heart.",
						"japanese": "しかし、主人公の心には疑問が芽生える。",
						"chinese": "然而，主角心中萌生疑问。",
						"french": "Cependant, une question naît dans le cœur du protagoniste.",
						"spanish": "Sin embargo, una pregunta florece en el corazón del protagonista.",
						"vietnamese": "Tuy nhiên, một câu hỏi nảy nở trong lòng nhân vật chính.",
						"thai": "ทว่า, คำถามผุดขึ้นในใจของตัวเอก",
						"hindi": "हालांकि, नायक के दिल में एक सवाल पनपता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 불빛은 여전히 차갑게 빛난다.",
						"english": "The city lights still glow coldly.",
						"japanese": "街の灯りは相変わらず冷たく輝いている。",
						"chinese": "城市的灯光依旧冰冷地闪烁。",
						"french": "Les lumières de la ville brillent toujours froidement.",
						"spanish": "Las luces de la ciudad aún brillan fríamente.",
						"vietnamese": "Đèn thành phố vẫn sáng lạnh lẽo.",
						"thai": "แสงไฟในเมืองยังคงส่องประกายเย็นชา",
						"hindi": "शहर की रोशनी अभी भी ठंडी चमक रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "(새로운 계약서를 훑어본다. 설명할 수 없는 슬픔이 밀려온다.)",
						"english": "(He scans the new contract. An inexplicable sadness washes over him.)",
						"japanese": "(新しい契約書に目を通す。説明できない悲しみが押し寄せる。)",
						"chinese": "(他浏览着新合同。一股莫名的悲伤涌上心头。)",
						"french": "(Il parcourt le nouveau contrat. Une tristesse inexplicable l'envahit.)",
						"spanish": "(Examina el nuevo contrato. Una tristeza inexplicable lo inunda.)",
						"vietnamese": "(Anh ta lướt qua hợp đồng mới. Một nỗi buồn khó tả ập đến.)",
						"thai": "(เขากวาดสายตาดูสัญญาฉบับใหม่ ความเศร้าที่อธิบายไม่ได้เข้าครอบงำ)",
						"hindi": "(वह नए अनुबंध को स्कैन करता है। एक अकथनीय उदासी उसे घेर लेती है।)"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "당신의 감정은 시스템의 일부입니다.",
						"english": "Your emotions are part of the system.",
						"japanese": "あなたの感情はシステムの一部です。",
						"chinese": "你的情感是系统的一部分。",
						"french": "Vos émotions font partie du système.",
						"spanish": "Tus emociones son parte del sistema.",
						"vietnamese": "Cảm xúc của bạn là một phần của hệ thống.",
						"thai": "อารมณ์ของคุณเป็นส่วนหนึ่งของระบบ",
						"hindi": "आपकी भावनाएँ सिस्टम का हिस्सा हैं।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 슬픔도요?",
						"english": "Even this sadness?",
						"japanese": "この悲しみも？",
						"chinese": "这份悲伤也是吗？",
						"french": "Même cette tristesse ?",
						"spanish": "¿Incluso esta tristeza?",
						"vietnamese": "Cả nỗi buồn này nữa sao?",
						"thai": "แม้แต่ความเศร้าครั้งนี้?",
						"hindi": "क्या यह दुख भी?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…모든 것은 계약으로 정의됩니다. 고통조차도.",
						"english": "...Everything is defined by contract. Even pain.",
						"japanese": "…すべては契約によって定義される。苦痛さえも。",
						"chinese": "……一切都由契约定义。甚至痛苦也是。",
						"french": "...Tout est défini par contrat. Même la douleur.",
						"spanish": "...Todo se define por contrato. Incluso el dolor.",
						"vietnamese": "...Mọi thứ đều được định nghĩa bằng hợp đồng. Ngay cả nỗi đau.",
						"thai": "...ทุกสิ่งถูกกำหนดโดยสัญญา แม้แต่ความเจ็บปวด",
						"hindi": "...सब कुछ अनुबंध द्वारा परिभाषित होता है। यहां तक कि दर्द भी।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "믿을 수 없어.",
						"english": "I can't believe it.",
						"japanese": "信じられない。",
						"chinese": "难以置信。",
						"french": "Je n'y crois pas.",
						"spanish": "No puedo creerlo.",
						"vietnamese": "Không thể tin được.",
						"thai": "ไม่น่าเชื่อ",
						"hindi": "मैं इस पर विश्वास नहीं कर सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "주인공은 계약의 이면에 드리운 어둠을 직감한다.",
						"english": "The protagonist senses the darkness lurking behind the contract.",
						"japanese": "主人公は契約の裏に潜む闇を直感する。",
						"chinese": "主角直觉感受到契约背后潜伏的黑暗。",
						"french": "Le protagoniste pressent l'obscurité qui se cache derrière le contrat.",
						"spanish": "El protagonista intuye la oscuridad que acecha tras el contrato.",
						"vietnamese": "Nhân vật chính linh cảm được bóng tối ẩn sau hợp đồng.",
						"thai": "ตัวเอกสัมผัสได้ถึงความมืดที่ซ่อนอยู่เบื้องหลังสัญญา",
						"hindi": "नायक अनुबंध के पीछे छिपी अंधेरे को महसूस करता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "계약의 그물망이 점차 주인공을 옥죄어온다.",
						"english": "The web of the contract slowly tightens around the protagonist.",
						"japanese": "契約の網が徐々に主人公を締め付けてくる。",
						"chinese": "契约的罗网逐渐束缚住主角。",
						"french": "Le filet du contrat se resserre peu à peu autour du protagoniste.",
						"spanish": "La red del contrato se ciñe poco a poco sobre el protagonista.",
						"vietnamese": "Mạng lưới hợp đồng dần siết chặt lấy nhân vật chính.",
						"thai": "ใยแมงมุมของสัญญาค่อยๆ รัดตัวเอกให้แน่นขึ้น",
						"hindi": "अनुबंध का जाल धीरे-धीरे नायक को जकड़ लेता है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(더 이상 돌아갈 수 없음을 직감한다)",
						"english": "(He senses there's no turning back now.)",
						"japanese": "(もう後戻りできないことを直感する)",
						"chinese": "(他直觉感到已无法回头)",
						"french": "(Il pressent qu'il n'y a plus de retour en arrière possible)",
						"spanish": "(Intuye que ya no hay vuelta atrás)",
						"vietnamese": "(Anh ta linh cảm không thể quay đầu lại được nữa)",
						"thai": "(เขาสัมผัสได้ว่าไม่มีทางย้อนกลับได้แล้ว)",
						"hindi": "(वह महसूस करता है कि अब पीछे मुड़ना असंभव है।)"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "당신은 이미 시스템의 일부입니다. 거부할 수 없어요.",
						"english": "You are already part of the system. You cannot refuse.",
						"japanese": "あなたは既にシステムの一部です。拒否することはできません。",
						"chinese": "你已经是系统的一部分了。无法拒绝。",
						"french": "Vous faites déjà partie du système. Vous ne pouvez pas refuser.",
						"spanish": "Ya eres parte del sistema. No puedes negarte.",
						"vietnamese": "Ngươi đã là một phần của hệ thống rồi. Không thể từ chối.",
						"thai": "คุณเป็นส่วนหนึ่งของระบบแล้ว คุณไม่สามารถปฏิเสธได้",
						"hindi": "तुम पहले से ही सिस्टम का हिस्सा हो। तुम मना नहीं कर सकते।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "나는 나를 포기하지 않아!",
						"english": "I won't give up on myself!",
						"japanese": "私は自分を諦めない！",
						"chinese": "我不会放弃我自己！",
						"french": "Je ne m'abandonnerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Ta sẽ không từ bỏ bản thân!",
						"thai": "ฉันจะไม่ยอมแพ้ตัวเอง!",
						"hindi": "मैं खुद को नहीं छोड़ूँगा!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "무의미한 저항입니다.",
						"english": "Your resistance is futile.",
						"japanese": "無意味な抵抗です。",
						"chinese": "徒劳的抵抗。",
						"french": "Toute résistance est futile.",
						"spanish": "Es una resistencia inútil.",
						"vietnamese": "Chống cự vô ích thôi.",
						"thai": "การต่อต้านนั้นไร้ความหมาย",
						"hindi": "यह व्यर्थ का प्रतिरोध है।"
					}
				},
				{
					"speaker": "bex",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "알 수 없는 힘이 주인공을 끌어당긴다.",
						"english": "An unknown force pulls the protagonist.",
						"japanese": "未知の力が主人公を引き寄せる。",
						"chinese": "未知力量牵引着主人公。",
						"french": "Une force inconnue attire le protagoniste.",
						"spanish": "Una fuerza desconocida atrae al protagonista.",
						"vietnamese": "Một sức mạnh vô hình kéo nhân vật chính.",
						"thai": "พลังงานบางอย่างดึงดูดตัวละครหลัก",
						"hindi": "एक अज्ञात शक्ति नायक को खींचती है।"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 주인공을 집어삼킨다.",
						"english": "The giant shadow devours the protagonist.",
						"japanese": "巨大な影が主人公を飲み込む。",
						"chinese": "巨大的影子吞噬了主角。",
						"french": "L'ombre gigantesque dévore le protagoniste.",
						"spanish": "La sombra gigante devora al protagonista.",
						"vietnamese": "Bóng tối khổng lồ nuốt chửng nhân vật chính.",
						"thai": "เงามืดมหึมากินตัวเอกเข้าไป",
						"hindi": "विशाल परछाई नायक को निगल जाती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "보잘것없는 저항… 너는 영원히 계약의 노예다.",
						"english": "Futile resistance… You are forever a slave to the contract.",
						"japanese": "些細な抵抗… お前は永遠に契約の奴隷だ。",
						"chinese": "微不足道的抵抗… 你将永远是契约的奴隶。",
						"french": "Résistance futile… Tu seras éternellement l'esclave du contrat.",
						"spanish": "Resistencia inútil… Eres para siempre un esclavo del contrato.",
						"vietnamese": "Sự kháng cự vô ích… Ngươi sẽ mãi là nô lệ của hợp đồng.",
						"thai": "การต่อต้านที่ไร้ค่า… เจ้าเป็นทาสแห่งสัญญาตลอดไป",
						"hindi": "व्यर्थ प्रतिरोध… तुम हमेशा के लिए अनुबंध के गुलाम हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "나는 포기하지 않아!",
						"english": "I won't give up!",
						"japanese": "諦めない！",
						"chinese": "我不会放弃！",
						"french": "Je n'abandonnerai pas !",
						"spanish": "¡No me rendiré!",
						"vietnamese": "Tôi sẽ không bỏ cuộc!",
						"thai": "ฉันจะไม่ยอมแพ้!",
						"hindi": "मैं हार नहीं मानूंगा!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자의 그림자가 흩어진다.",
						"english": "The shadow of the unknown entity disperses.",
						"japanese": "正体不明の者の影が霧散する。",
						"chinese": "身份不明者的影子消散了。",
						"french": "L'ombre de l'entité inconnue se dissipe.",
						"spanish": "La sombra del ente desconocido se dispersa.",
						"vietnamese": "Bóng tối của thực thể vô danh tan biến.",
						"thai": "เงาของผู้ไม่ประสงค์ออกนามสลายไป",
						"hindi": "अज्ञात सत्ता की परछाई बिखर जाती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 계약은… 영원하다…",
						"english": "Ugh… The contract… is eternal…",
						"japanese": "くっ… 契約は… 永遠だ…",
						"chinese": "呃… 契约… 是永恒的…",
						"french": "Ugh… Le contrat… est éternel…",
						"spanish": "Ugh… El contrato… es eterno…",
						"vietnamese": "Ư… Hợp đồng… là vĩnh cửu…",
						"thai": "อึก… สัญญา… เป็นนิรันดร์…",
						"hindi": "उफ़… अनुबंध… शाश्वत है…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어.",
						"english": "It's over.",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini.",
						"spanish": "Se acabó.",
						"vietnamese": "Xong rồi.",
						"thai": "จบแล้ว",
						"hindi": "यह खत्म हो गया।"
					}
				},
				{
					"content": {
						"korean": "하지만… 이 텅 빈 기분은 뭐지?",
						"english": "But… what is this empty feeling?",
						"japanese": "しかし… この空虚な気持ちは何だ？",
						"chinese": "但是… 这种空虚感是什么？",
						"french": "Mais… qu'est-ce que ce sentiment de vide ?",
						"spanish": "Pero… ¿qué es esta sensación de vacío?",
						"vietnamese": "Nhưng… cảm giác trống rỗng này là gì?",
						"thai": "แต่… ความรู้สึกว่างเปล่านี้คืออะไร?",
						"hindi": "लेकिन… यह खालीपन की भावना क्या है?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "계약의 사슬은 끊어졌지만, 더 깊은 진실이 주인공을 기다리고 있었다.",
						"english": "The chains of the contract were broken, but a deeper truth awaited the protagonist.",
						"japanese": "契約の鎖は断ち切られたが、より深い真実が主人公を待っていた。",
						"chinese": "契约的枷锁被打破了，但更深层的真相正在等待着主角。",
						"french": "Les chaînes du contrat furent brisées, mais une vérité plus profonde attendait le protagoniste.",
						"spanish": "Las cadenas del contrato se rompieron, pero una verdad más profunda esperaba al protagonista.",
						"vietnamese": "Dây xích hợp đồng đã bị phá vỡ, nhưng một sự thật sâu sắc hơn đang chờ đợi nhân vật chính.",
						"thai": "โซ่ตรวนแห่งสัญญาถูกทำลาย แต่ความจริงที่ลึกซึ้งกว่านั้นกำลังรอตัวเอกอยู่",
						"hindi": "अनुबंध की जंजीरें टूट गईं, लेकिन एक गहरा सच नायक का इंतजार कर रहा था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "균열이 시작된다.",
						"english": "The rift begins.",
						"japanese": "亀裂が始まる。",
						"chinese": "裂缝开始了。",
						"french": "La faille commence.",
						"spanish": "La grieta comienza.",
						"vietnamese": "Vết nứt bắt đầu.",
						"thai": "รอยแยกเริ่มขึ้น",
						"hindi": "दरार शुरू होती है।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "드디어 마주한, 계약의 그림자.",
						"english": "Finally facing the shadow of the contract.",
						"japanese": "ついに相対した、契約の影。",
						"chinese": "终于面对，契约的阴影。",
						"french": "Enfin face à l'ombre du contrat.",
						"spanish": "Finalmente, cara a cara con la sombra del contrato.",
						"vietnamese": "Cuối cùng cũng đối mặt với cái bóng của khế ước.",
						"thai": "ในที่สุดก็เผชิญหน้ากับเงาของพันธสัญญา",
						"hindi": "अंततः सामना हुआ, अनुबंध की परछाई से।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…왔는가. 새로운 계약자여.",
						"english": "...You've arrived, new contractor.",
						"japanese": "…来たか。新たな契約者よ。",
						"chinese": "……你来了吗。新的契约者。",
						"french": "...Vous êtes arrivé, nouveau contractant.",
						"spanish": "...Has llegado, nuevo contratista.",
						"vietnamese": "...Ngươi đã đến rồi sao, khế ước giả mới.",
						"thai": "...มาแล้วหรือ ผู้ทำพันธสัญญาคนใหม่",
						"hindi": "...आ गए तुम। नए अनुबंधित।"
					}
				},
				{
					"content": {
						"korean": "너의 모든 것은 이미 내 손 안에 있다.",
						"english": "All that you are is already in my hands.",
						"japanese": "お前の全ては、既に私の手の中にある。",
						"chinese": "你的一切尽在我掌控之中。",
						"french": "Tout ce que tu es est déjà entre mes mains.",
						"spanish": "Todo lo que eres ya está en mis manos.",
						"vietnamese": "Mọi thứ của ngươi đã nằm trong tay ta rồi.",
						"thai": "ทุกสิ่งทุกอย่างของเจ้าอยู่ในกำมือข้าแล้ว",
						"hindi": "तुम्हारा सब कुछ पहले से ही मेरे हाथ में है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 내 의지는 내가 정해!",
						"english": "Silence! My will is my own!",
						"japanese": "黙れ！私の意志は私が決める！",
						"chinese": "闭嘴！我的意志由我自己决定！",
						"french": "Tais-toi ! Ma volonté m'appartient !",
						"spanish": "¡Cállate! ¡Mi voluntad la decido yo!",
						"vietnamese": "Im đi! Ý chí của ta do ta quyết định!",
						"thai": "หุบปาก! เจตจำนงของข้า ข้าเป็นคนกำหนด!",
						"hindi": "चुप रहो! मेरी इच्छा मेरी है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은… 그 또한 계약의 일부다.",
						"english": "Foolish... That too is part of the contract.",
						"japanese": "愚かな…それもまた、契約の一部だ。",
						"chinese": "愚蠢……那也是契约的一部分。",
						"french": "Imbécile... Cela aussi fait partie du contrat.",
						"spanish": "Necio... Eso también es parte del contrato.",
						"vietnamese": "Ngây thơ... Đó cũng là một phần của khế ước.",
						"thai": "โง่เขลา...นั่นก็เป็นส่วนหนึ่งของพันธสัญญา",
						"hindi": "मूर्ख... वह भी अनुबंध का हिस्सा है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저항은 무의미합니다.",
						"english": "Resistance is futile.",
						"japanese": "抵抗は無意味です。",
						"chinese": "抵抗是徒劳的。",
						"french": "Toute résistance est inutile.",
						"spanish": "La resistencia es inútil.",
						"vietnamese": "Chống cự là vô nghĩa.",
						"thai": "การต่อต้านไร้ความหมาย",
						"hindi": "प्रतिरोध व्यर्थ है।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "정체 모를 그림자가 주인공을 삼키려 한다.",
						"english": "An unknown shadow attempts to swallow the protagonist.",
						"japanese": "正体不明の影が主人公を飲み込もうとしている。",
						"chinese": "身份不明的影子试图吞噬主角。",
						"french": "Une ombre inconnue tente d'engloutir le protagoniste.",
						"spanish": "Una sombra desconocida intenta tragar al protagonista.",
						"vietnamese": "Một bóng tối vô danh cố nuốt chửng nhân vật chính.",
						"thai": "เงามืดนิรนามพยายามกลืนกินตัวเอก",
						"hindi": "एक अज्ञात परछाई नायक को निगलने का प्रयास करती है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"밤의 도시, 계약의 그림자가 드리운다.",
			"주인공은 잊혀진 약속의 감각 속에서 첫 발을 내딛는다.",
			"정의를 가장한 덫, 그 안에서 모든 것이 시작된다.",
			"설명할 수 없는 슬픔이, 계약서 위에 번진다."
		],
		"english": [
			"Night City. Shadows of contracts loom.",
			"The protagonist steps forth, a forgotten promise lingering.",
			"A trap, cloaked in justice. There, it all begins.",
			"An inexplicable sorrow spreads across the contract."
		],
		"japanese": [
			"夜の街、契約の影が迫る。",
			"主人公は忘れられた約束の感覚の中で最初の一歩を踏み出す。",
			"正義を装った罠、その中で全てが始まる。",
			"説明しがたい悲しみが、契約書の上に滲む。"
		],
		"chinese": [
			"夜之城，契约的阴影笼罩。",
			"主人公在遗忘的约定感中迈出第一步。",
			"以正义为名的陷阱，一切由此开始。",
			"难以言喻的悲伤，在契约书上蔓延。"
		],
		"french": [
			"Ville nocturne, l'ombre des contrats plane.",
			"Le protagoniste fait ses premiers pas, un sentiment de promesse oubliée l'envahit.",
			"Un piège déguisé en justice ; en son sein, tout commence.",
			"Une tristesse inexplicable s'étale sur le contrat."
		],
		"spanish": [
			"Ciudad nocturna, la sombra de los contratos se cierne.",
			"El protagonista da su primer paso, sintiendo una promesa olvidada.",
			"Una trampa disfrazada de justicia; dentro de ella, todo comienza.",
			"Una tristeza inexplicable se extiende sobre el contrato."
		],
		"vietnamese": [
			"Thành phố đêm, bóng tối khế ước bao trùm.",
			"Nhân vật chính bước đi đầu tiên giữa cảm giác một lời hứa bị lãng quên.",
			"Một cái bẫy trá hình công lý, mọi thứ bắt đầu từ đó.",
			"Một nỗi buồn khó tả lan tỏa trên hợp đồng."
		],
		"thai": [
			"นครรัตติกาล เงาแห่งพันธสัญญาปกคลุม",
			"ตัวเอกก้าวแรกท่ามกลางความรู้สึกถึงคำสัญญาที่ถูกลืม",
			"กับดักที่แฝงด้วยความยุติธรรม ทุกสิ่งเริ่มต้นขึ้นที่นั่น",
			"ความเศร้าที่ไม่อาจอธิบายได้ แผ่ซ่านบนพันธสัญญา"
		],
		"hindi": [
			"रात का शहर, समझौतों की छाया मंडराती है।",
			"नायक एक भूली हुई प्रतिज्ञा के अहसास में अपना पहला कदम रखता है।",
			"न्याय के वेश में एक जाल, उसी में सब कुछ शुरू होता है।",
			"एक अवर्णनीय दुख, समझौते के कागज़ पर फैलता है।"
		]
	}
} as const;
