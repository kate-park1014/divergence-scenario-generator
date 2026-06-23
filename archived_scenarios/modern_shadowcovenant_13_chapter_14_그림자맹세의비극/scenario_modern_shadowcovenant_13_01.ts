export const scenario_modern_shadowcovenant_13_01 = {
	"scenario_id": "modern_shadowcovenant_13_01",
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
					"content": {
						"korean": "도시의 가장 깊은 곳. 빛이 닿지 않는 그림자의 영역이었다.",
						"english": "The deepest part of the city. A realm of shadows untouched by light.",
						"japanese": "都市の最深部。光の届かない影の領域だった。",
						"chinese": "城市的至深之处。一个光线无法触及的阴影领域。",
						"french": "La partie la plus profonde de la ville. Un royaume d'ombres intouché par la lumière.",
						"spanish": "La parte más profunda de la ciudad. Un reino de sombras inalcanzable para la luz.",
						"vietnamese": "Nơi sâu nhất của thành phố. Một vương quốc bóng tối không có ánh sáng.",
						"thai": "ส่วนที่ลึกที่สุดของเมือง. อาณาจักรแห่งเงาที่แสงไม่อาจเอื้อมถึง.",
						"hindi": "शहर का सबसे गहरा हिस्सा। प्रकाश से अछूता छाया का क्षेत्र।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "유물의 흔적은 여기에…",
						"english": "Traces of the artifact are here...",
						"japanese": "遺物の痕跡はここに…",
						"chinese": "遗物的痕迹就在这里……",
						"french": "Les traces de l'artefact sont ici…",
						"spanish": "Los rastros del artefacto están aquí…",
						"vietnamese": "Dấu vết cổ vật ở đây…",
						"thai": "ร่องรอยของวัตถุโบราณอยู่ที่นี่…",
						"hindi": "कलाकृति के निशान यहीं हैं..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "왔군. 기다렸어.",
						"english": "You've arrived. I've been waiting.",
						"japanese": "来たか。待っていたぞ。",
						"chinese": "你来了。我一直在等你。",
						"french": "Te voilà. Je t'attendais.",
						"spanish": "Has llegado. Te estaba esperando.",
						"vietnamese": "Ngươi đến rồi. Ta đã chờ.",
						"thai": "มาแล้วสินะ. รออยู่เลย.",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신은?",
						"english": "And you are?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous êtes ?",
						"spanish": "¿Y tú eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벡스. 이 도시의 모든 그림자를 아는 자.",
						"english": "Vex. The one who knows all shadows of this city.",
						"japanese": "ヴェックス。この都市のあらゆる影を知る者。",
						"chinese": "维克斯。知晓这座城市所有阴影的人。",
						"french": "Vex. Celle qui connaît toutes les ombres de cette ville.",
						"spanish": "Vex. La que conoce todas las sombras de esta ciudad.",
						"vietnamese": "Vex. Người biết mọi bóng tối của thành phố này.",
						"thai": "เว็กซ์. ผู้รู้ทุกเงาของเมืองนี้.",
						"hindi": "भेड़िया। इस शहर की हर छाया को जानने वाली।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 찾는 건 유물이 아니야. 더 오래된 것.",
						"english": "It's not an artifact you seek. It's something older.",
						"japanese": "あなたが探しているのは遺物ではない。もっと古いものだ。",
						"chinese": "你寻找的不是文物。是更古老的东西。",
						"french": "Ce que tu cherches n'est pas un artefact. C'est quelque chose de plus ancien.",
						"spanish": "Lo que buscas no es un artefacto. Es algo mucho más antiguo.",
						"vietnamese": "Thứ bạn tìm không phải là di vật. Mà là thứ cổ xưa hơn.",
						"thai": "สิ่งที่คุณหาไม่ใช่โบราณวัตถุ แต่เป็นสิ่งที่เก่าแก่กว่านั้น",
						"hindi": "जो तुम ढूंढ रहे हो, वो कोई कलाकृति नहीं है। वो कुछ और पुराना है。"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bex",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 도시는 겉보기와 달라. 그림자 맹세가 모든 걸 지배하지.",
						"english": "This city isn't what it seems. The Shadow Covenant rules all.",
						"japanese": "この街は見かけと違う。影の誓いがすべてを支配している。",
						"chinese": "这座城市并非表面那样。影之誓约掌控一切。",
						"french": "Cette ville n'est pas ce qu'il paraît. Le Pacte de l'Ombre régit tout.",
						"spanish": "Esta ciudad no es lo que parece. El Pacto de las Sombras lo controla todo.",
						"vietnamese": "Thành phố này không như vẻ bề ngoài. Lời thề Bóng tối chi phối tất cả.",
						"thai": "เมืองนี้ไม่เหมือนที่เห็น คำสาบานแห่งเงาครอบงำทุกสิ่ง",
						"hindi": "यह शहर जैसा दिखता है, वैसा नहीं है। छाया का संकल्प सब कुछ नियंत्रित करता है।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그림자 맹세?",
						"english": "The Shadow Covenant?",
						"japanese": "影の誓い？",
						"chinese": "影之誓约？",
						"french": "Le Pacte de l'Ombre ?",
						"spanish": "¿El Pacto de las Sombras?",
						"vietnamese": "Lời thề Bóng tối?",
						"thai": "คำสาบานแห่งเงา?",
						"hindi": "छाया का संकल्प?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "수백 년 전 맺어진 피의 계약. 그걸 지키는 자들이 섀도우 코버넌트.",
						"english": "A blood pact made centuries ago. Those who uphold it are the Shadow Covenant.",
						"japanese": "数百年前の血の契約。それを守る者たちがシャドウ・コヴェナントだ。",
						"chinese": "数百年前缔结的血之契约。守护它的人就是暗影盟约者。",
						"french": "Un pacte de sang conclu il y a des siècles. Ceux qui le respectent sont le Pacte de l'Ombre.",
						"spanish": "Un pacto de sangre hecho hace siglos. Quienes lo cumplen son el Pacto de las Sombras.",
						"vietnamese": "Một khế ước máu đã được lập ra hàng trăm năm trước. Những người tuân thủ nó là Giao ước Bóng tối.",
						"thai": "พันธสัญญาโลหิตที่ทำไว้เมื่อหลายร้อยปีก่อน ผู้ที่รักษาสัญญาคือ Shadow Covenant",
						"hindi": "सदियों पहले हुई एक खून की संधि। जो इसे निभाते हैं, वे शैडो कोवनेंट हैं।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "고미술품 속에서 희미한 속삭임이 들려. '나는 하나의 비극이 아니다.'",
						"english": "A faint whisper echoes from ancient art. 'I am not a single tragedy.'",
						"japanese": "古美術品の中からかすかな囁きが聞こえる。「私は一つの悲劇ではない」",
						"chinese": "古董中传来微弱的低语。“我并非单一的悲剧。”",
						"french": "Un léger murmure émane des œuvres d'art anciennes. 'Je ne suis pas une simple tragédie.'",
						"spanish": "Un tenue susurro resuena en las obras de arte antiguas. 'No soy una sola tragedia.'",
						"vietnamese": "Một tiếng thì thầm yếu ớt vang lên từ tác phẩm nghệ thuật cổ xưa. 'Tôi không phải là một bi kịch đơn lẻ.'",
						"thai": "เสียงกระซิบแผ่วเบาเล็ดลอดออกมาจากวัตถุโบราณ 'ฉันไม่ใช่โศกนาฏกรรมเดียวดาย'",
						"hindi": "प्राचीन कलाकृतियों से एक धीमी फुसफुसाहट सुनाई देती है। 'मैं एक त्रासदी नहीं हूँ।'"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 무슨 뜻이지?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "맹세에 갇힌 영혼들의 고통.",
						"english": "The torment of souls trapped by the covenant.",
						"japanese": "誓いに囚われた魂たちの苦痛。",
						"chinese": "被誓约束缚的灵魂的痛苦。",
						"french": "Le tourment des âmes piégées par le pacte.",
						"spanish": "El tormento de las almas atrapadas por el pacto.",
						"vietnamese": "Sự giày vò của những linh hồn bị mắc kẹt bởi lời thề.",
						"thai": "ความทรมานของวิญญาณที่ถูกจองจำด้วยคำสาบาน",
						"hindi": "संकल्प में फंसी आत्माओं का कष्ट।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "맹세를 어기면 그림자 속으로 사라져. 그게 이 도시의 규칙이야.",
						"english": "Break the covenant, and you vanish into shadows. That's this city's rule.",
						"japanese": "誓いを破れば影の中に消える。それがこの街の掟だ。",
						"chinese": "违背誓约，就会消失在影子里。这是这座城市的规则。",
						"french": "Enfreins le pacte, et tu disparaîtras dans les ombres. C'est la règle de cette ville.",
						"spanish": "Rompe el pacto y desaparecerás en las sombras. Esa es la regla de esta ciudad.",
						"vietnamese": "Phá vỡ lời thề, bạn sẽ biến mất vào bóng tối. Đó là quy tắc của thành phố này.",
						"thai": "ถ้าละเมิดคำสาบาน เจ้าจะหายไปในเงามืด นั่นคือกฎของเมืองนี้",
						"hindi": "संकल्प तोड़ो, और तुम छाया में गायब हो जाओगे। यही इस शहर का नियम है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "사라진다니?",
						"english": "Vanish?",
						"japanese": "消えるって？",
						"chinese": "消失？",
						"french": "Disparaître ?",
						"spanish": "¿Desaparecer?",
						"vietnamese": "Biến mất ư?",
						"thai": "หายไป?",
						"hindi": "गायब हो जाओ?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "존재 자체가 지워지는 것. 섀도우 코버넌트가 그렇게 만들어.",
						"english": "Your very existence erased. The Shadow Covenant makes it so.",
						"japanese": "存在そのものが消される。シャドウ・コヴェナントがそうするんだ。",
						"chinese": "存在本身被抹去。暗影盟约者会做到这一点。",
						"french": "Ton existence même est effacée. Le Pacte de l'Ombre en est la cause.",
						"spanish": "Tu propia existencia borrada. El Pacto de las Sombras lo provoca.",
						"vietnamese": "Sự tồn tại của bạn bị xóa sổ. Giao ước Bóng tối làm điều đó.",
						"thai": "การดำรงอยู่ของคุณจะถูกลบเลือน Shadow Covenant ทำแบบนั้น",
						"hindi": "तुम्हारा अस्तित्व ही मिट जाएगा। शैडो कोवनेंट ऐसा ही करते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "오래된 시계탑을 봐. 시계바늘은 멈춰있고, 붉은 모래가 흐르고 있지.",
						"english": "Look at the old clock tower. Its hands are stopped, and red sand flows.",
						"japanese": "古い時計台を見て。針は止まり、赤い砂が流れている。",
						"chinese": "看那座旧钟楼。指针停滞，红沙流淌。",
						"french": "Regarde la vieille tour de l'horloge. Ses aiguilles sont arrêtées, le sable rouge s'écoule.",
						"spanish": "Mira la vieja torre del reloj. Las manecillas están paradas, y arena roja fluye.",
						"vietnamese": "Hãy nhìn tháp đồng hồ cũ. Kim đồng hồ đã ngừng, cát đỏ đang chảy.",
						"thai": "มองหอนาฬิกาเก่าสิ เข็มนาฬิกาหยุดนิ่ง และทรายแดงกำลังไหล",
						"hindi": "पुरानी घड़ी की मीनार को देखो। उसकी सुइयाँ रुकी हुई हैं, और लाल रेत बह रही है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그게 카운트다운인가?",
						"english": "Is that the countdown?",
						"japanese": "あれがカウントダウンなのか？",
						"chinese": "那是倒计时吗？",
						"french": "C'est le compte à rebours ?",
						"spanish": "¿Es esa la cuenta atrás?",
						"vietnamese": "Đó là đếm ngược sao?",
						"thai": "นั่นคือการนับถอยหลังหรือเปล่า?",
						"hindi": "क्या यह उलटी गिनती है?"
					}
				},
				{
					"content": {
						"korean": "그래. 모든 것이 시작될 시간.",
						"english": "Yes. The time for everything to begin.",
						"japanese": "そうだ。すべてが始まる時間だ。",
						"chinese": "是的。一切开始的时刻。",
						"french": "Oui. L'heure où tout commencera.",
						"spanish": "Sí. Es la hora de que todo empiece.",
						"vietnamese": "Đúng vậy. Thời điểm mọi thứ bắt đầu.",
						"thai": "ใช่ เวลาที่ทุกสิ่งจะเริ่มต้น",
						"hindi": "हाँ। सब कुछ शुरू होने का समय।"
					},
					"emotion": "base",
					"speaker": "bex",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "bex",
					"type": "direction"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어. 너도 이 맹세에 얽히게 될 거야.",
						"english": "No turning back now. You'll be bound by this oath too.",
						"japanese": "もう戻れない。君もこの誓いに囚われるだろう。",
						"chinese": "已无法回头。你也将被这誓言束缚。",
						"french": "Impossible de revenir en arrière. Tu seras toi aussi lié par ce serment.",
						"spanish": "Ya no hay vuelta atrás. Tú también quedarás ligado a este juramento.",
						"vietnamese": "Không thể quay lại nữa. Ngươi cũng sẽ bị ràng buộc bởi lời thề này.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว เจ้าก็จะถูกผูกมัดด้วยคำสาบานนี้เช่นกัน",
						"hindi": "अब वापस नहीं जा सकते। तुम भी इस शपथ में उलझ जाओगे।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "난 상관 없어.",
						"english": "I don't care.",
						"japanese": "構わない。",
						"chinese": "我无所谓。",
						"french": "Je m'en fiche.",
						"spanish": "No me importa.",
						"vietnamese": "Tôi không quan tâm.",
						"thai": "ฉันไม่สน",
						"hindi": "मुझे फ़र्क़ नहीं पड़ता।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그럴까? 넌 이미 이 그림자 세계의 일부가 됐어.",
						"english": "Oh really? You're already part of this shadow world.",
						"japanese": "そうかな？君は既にこの影の世界の一部となった。",
						"chinese": "是吗？你已是这暗影世界的一部分了。",
						"french": "Vraiment ? Tu fais déjà partie de ce monde d'ombres.",
						"spanish": "¿De verdad? Ya eres parte de este mundo de sombras.",
						"vietnamese": "Thật sao? Ngươi đã trở thành một phần của thế giới bóng tối này rồi.",
						"thai": "อย่างนั้นหรือ? เจ้าได้กลายเป็นส่วนหนึ่งของโลกแห่งเงาไปแล้ว",
						"hindi": "क्या ऐसा है? तुम पहले ही इस छाया दुनिया का हिस्सा बन चुके हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어둠 속에 갇힌 자의 슬픔을 담은 그림이 있어. 스스로를 찢어내려는 듯한 형상이었지.",
						"english": "There was a painting, full of the sorrow of one trapped in darkness. It depicted a figure tearing itself apart.",
						"japanese": "闇に囚われた者の悲しみを宿した絵があった。自らを千切ろうとするかのような姿だった。",
						"chinese": "有一幅画，承载着被困黑暗者的悲伤。那形象仿佛要将自身撕裂。",
						"french": "Il y avait une peinture, empreinte de la tristesse d'un être piégé dans les ténèbres. Elle dépeignait une silhouette se déchirant elle-même.",
						"spanish": "Había un cuadro que contenía la tristeza de alguien atrapado en la oscuridad. Tenía una forma como si intentara destrozarse a sí mismo.",
						"vietnamese": "Có một bức tranh chứa đựng nỗi buồn của kẻ bị nhốt trong bóng tối. Đó là một hình thù như thể đang cố gắng xé toạc chính mình.",
						"thai": "มีภาพวาดที่เก็บความเศร้าของผู้ที่ถูกขังในความมืด มันเป็นรูปร่างราวกับกำลังฉีกตัวเอง",
						"hindi": "एक चित्र था, जिसमें अंधेरे में फंसे हुए की उदासी थी। यह एक ऐसी आकृति थी जैसे वह खुद को फाड़ने की कोशिश कर रही हो।"
					},
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech"
				},
				{
					"content": {
						"korean": "섀도우 코버넌트의 모습인가?",
						"english": "Is that the Shadow Covenant?",
						"japanese": "シャドウコヴェナントの姿なのか？",
						"chinese": "那是暗影盟约的样子吗？",
						"french": "Est-ce là l'Alliance des ombres ?",
						"spanish": "¿Es esa la forma del Pacto Sombrío?",
						"vietnamese": "Đó là hình dáng của Giao Ước Bóng Tối sao?",
						"thai": "นั่นคือรูปร่างของพันธสัญญาแห่งเงาหรือ?",
						"hindi": "क्या वह शैडो कोवेनेंट का रूप है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "맹세에 갇힌 자들은 모두 그렇게 돼.",
						"english": "All those bound by the oath become like that.",
						"japanese": "誓いに囚われた者は皆、そうなる。",
						"chinese": "所有受誓言束缚者，皆是如此。",
						"french": "Tous ceux qui sont liés par le serment finissent ainsi.",
						"spanish": "Todos los que están atrapados por el juramento terminan así.",
						"vietnamese": "Tất cả những kẻ bị ràng buộc bởi lời thề đều trở nên như vậy.",
						"thai": "ทุกคนที่ถูกพันธนาการด้วยคำสาบานจะกลายเป็นเช่นนั้น",
						"hindi": "शपथ से बंधे सभी ऐसे ही हो जाते हैं।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 모든 것을 삼켰다.",
						"english": "An unknown shadow swallowed everything.",
						"japanese": "正体不明の影が全てを飲み込んだ。",
						"chinese": "不明身份的暗影吞噬了一切。",
						"french": "Une ombre inconnue a tout englouti.",
						"spanish": "Una sombra desconocida lo engulló todo.",
						"vietnamese": "Một bóng tối không rõ nguồn gốc đã nuốt chửng mọi thứ.",
						"thai": "เงาปริศนากลืนกินทุกสิ่ง",
						"hindi": "एक अज्ञात छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 인간. 맹세의 힘은 거스를 수 없다.",
						"english": "Foolish human. The power of the Vow cannot be defied.",
						"japanese": "愚かな人間め。誓いの力は逆らえぬ。",
						"chinese": "愚蠢的人类。誓约的力量不可违抗。",
						"french": "Humain stupide. Le pouvoir du Serment ne peut être défié.",
						"spanish": "Humano estúpido. El poder del Voto no puede ser desafiado.",
						"vietnamese": "Con người ngu xuẩn. Sức mạnh của Lời thề không thể bị chống lại.",
						"thai": "มนุษย์โง่เง่า พลังแห่งคำสาบานไม่อาจถูกฝ่าฝืน",
						"hindi": "मूर्ख इंसान। प्रतिज्ञा की शक्ति का उल्लंघन नहीं किया जा सकता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…尚未结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "도시의 가장 깊은 심연. 정체 모를 그림자가 기다리고 있었다.",
						"english": "The city's deepest abyss. An unknown shadow awaited.",
						"japanese": "都市の最も深い深淵。正体不明の影が待ち受けていた。",
						"chinese": "城市的至深深渊。一个不明的影子正在等待。",
						"french": "Le plus profond abysse de la ville. Une ombre inconnue attendait.",
						"spanish": "El abismo más profundo de la ciudad. Una sombra desconocida esperaba.",
						"vietnamese": "Vực sâu nhất của thành phố. Một bóng tối không rõ danh tính đang chờ đợi.",
						"thai": "ห้วงลึกที่สุดของเมือง เงาที่ระบุตัวตนไม่ได้กำลังรออยู่",
						"hindi": "शहर की सबसे गहरी खाई। एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					}
				},
				{
					"speaker": "bex",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "조심해. 저자는… 맹세의 그림자 그 자체야.",
						"english": "Be careful. That one... is the Shadow of the Vow itself.",
						"japanese": "気をつけろ。あれは…誓いの影そのものだ。",
						"chinese": "小心。那个…是誓约之影本身。",
						"french": "Attention. C'est... l'Ombre du Serment elle-même.",
						"spanish": "Ten cuidado. Ese... es la Sombra del Voto en persona.",
						"vietnamese": "Cẩn thận. Kẻ đó... chính là Bóng ma của Lời thề.",
						"thai": "ระวังให้ดี นั่นคือ... เงาแห่งคำสาบานเอง",
						"hindi": "सावधान रहो। वह... प्रतिज्ञा की छाया ही है।"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 인간. 여기까지 온 건가.",
						"english": "Foolish human. You've come this far?",
						"japanese": "愚かな人間め。ここまで来たか。",
						"chinese": "愚蠢的人类。竟敢来到这里。",
						"french": "Humain stupide. Tu es venu jusqu'ici ?",
						"spanish": "Humano estúpido. ¿Has llegado tan lejos?",
						"vietnamese": "Con người ngu xuẩn. Ngươi đã đến tận đây sao.",
						"thai": "มนุษย์โง่เง่า แกมาได้ถึงขนาดนี้เชียวหรือ",
						"hindi": "मूर्ख इंसान। क्या तुम यहाँ तक आ गए हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 그림자 세계의 주범인가?",
						"english": "Are you the master of this shadow world?",
						"japanese": "お前がこの影の世界の主犯か？",
						"chinese": "你就是这片暗影世界的主谋吗？",
						"french": "Es-tu le maître de ce monde d'ombres ?",
						"spanish": "¿Eres el artífice de este mundo de sombras?",
						"vietnamese": "Ngươi là chủ mưu của thế giới bóng tối này sao?",
						"thai": "แกคือตัวการของโลกแห่งเงาแห่งนี้ใช่ไหม",
						"hindi": "क्या तुम इस छाया-जगत के कर्ता-धर्ता हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 맹세를 거스르려는 자여. 그 대가를 치러라.",
						"english": "You who dare defy the Vow. Pay the price.",
						"japanese": "よくも誓いに逆らおうとするか。その代償を払え。",
						"chinese": "竟敢违抗誓约之人。付出代价吧。",
						"french": "Toi qui oses défier le Serment. Paie le prix.",
						"spanish": "Tú que osas desafiar el Voto. Paga el precio.",
						"vietnamese": "Kẻ dám chống lại Lời thề. Hãy trả giá đi.",
						"thai": "ผู้ใดที่กล้าฝ่าฝืนคำสาบาน จงชดใช้",
						"hindi": "जो प्रतिज्ञा का उल्लंघन करने का साहस करता है। कीमत चुकाओ।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 하나의 비극이 아니다…",
						"english": "Ugh... I am... not just one tragedy...",
						"japanese": "くっ…私は…一つの悲劇ではない…",
						"chinese": "呃…我…并非单一的悲剧…",
						"french": "Argh... Je ne suis... pas qu'une seule tragédie...",
						"spanish": "Ugh... Yo... no soy solo una tragedia...",
						"vietnamese": "Khụ... Ta... không phải chỉ là một bi kịch...",
						"thai": "อึก... ข้า... ไม่ใช่แค่โศกนาฏกรรมเดียว...",
						"hindi": "उफ़... मैं... सिर्फ एक त्रासदी नहीं हूँ..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹세의 저주를… 끝낼 거야.",
						"english": "I will... end the curse of the Vow.",
						"japanese": "誓いの呪いを…終わらせる。",
						"chinese": "我将…终结誓约的诅咒。",
						"french": "Je vais... mettre fin à la malédiction du Serment.",
						"spanish": "Voy a... acabar con la maldición del Voto.",
						"vietnamese": "Ta sẽ... kết thúc lời nguyền của Lời thề.",
						"thai": "ข้าจะ... ยุติคำสาปแห่งคำสาบาน",
						"hindi": "मैं... प्रतिज्ञा के अभिशाप को... समाप्त करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그림자는 잠시 물러났다. 그러나 도시의 시계는 여전히 붉은 모래를 흘리고 있었다.",
						"english": "The shadow receded for a moment. But the city's clock still spilled red sand.",
						"japanese": "影は一時的に退いた。だが、都市の時計は未だ赤い砂を零し続けていた。",
						"chinese": "暗影暂时退去。然而，城市的时钟仍在流淌着红色的沙粒。",
						"french": "L'ombre recula un instant. Mais l'horloge de la ville continuait de déverser du sable rouge.",
						"spanish": "La sombra retrocedió por un momento. Pero el reloj de la ciudad seguía derramando arena roja.",
						"vietnamese": "Bóng tối tạm thời rút lui. Nhưng đồng hồ của thành phố vẫn đang chảy cát đỏ.",
						"thai": "เงาถอยไปชั่วขณะ แต่เข็มนาฬิกาของเมืองยังคงหลั่งทรายสีแดง",
						"hindi": "छाया कुछ समय के लिए पीछे हट गई। लेकिन शहर की घड़ी अभी भी लाल रेत उगल रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둠이 도시를 집어삼켰다.",
			"사라진 유물, 그리고 고대 맹세의 흔적.",
			"정보상 벡스. 그녀는 그림자 세계의 모든 것을 알고 있었다.",
			"피의 맹세, 섀도우 코버넌트… 과거의 그림자가 현재를 잠식한다.",
			"멈춘 시계탑, 붉은 모래. 이제 카운트다운이 시작된다."
		],
		"english": [
			"Darkness swallowed the city.",
			"Lost artifacts, traces of an ancient vow.",
			"Vex, the informant. She knew everything of the shadow world.",
			"Blood Oath, Shadow Covenant... shadows of the past consume the present.",
			"The stopped clock tower, red sand. The countdown begins now."
		],
		"japanese": [
			"闇が都市を飲み込んだ。",
			"消えた遺物、そして古の誓いの痕跡。",
			"情報屋ヴェックス。彼女は影の世界のすべてを知っていた。",
			"血の誓い、シャドウコヴナント…過去の影が現在を蝕む。",
			"止まった時計塔、赤い砂。今、カウントダウンが始まる。"
		],
		"chinese": [
			"黑暗吞噬了城市。",
			"消失的遗物，以及古老誓言的痕迹。",
			"消息贩子维克斯。她知晓暗影世界的一切。",
			"血之誓约，暗影契约……过去的阴影正在侵蚀现在。",
			"停滞的钟楼，红色的沙砾。现在，倒计时开始了。"
		],
		"french": [
			"L'obscurité a englouti la ville.",
			"Artefacts perdus, traces d'un ancien serment.",
			"Vex l'informatrice. Elle savait tout du monde des ombres.",
			"Le Serment de Sang, le Pacte des Ombres… les ombres du passé rongent le présent.",
			"La tour de l'horloge arrêtée, le sable rouge. Le compte à rebours commence maintenant."
		],
		"spanish": [
			"La oscuridad engulló la ciudad.",
			"Artefactos perdidos, rastros de un antiguo juramento.",
			"Vex, la informante. Lo sabía todo del mundo de las sombras.",
			"Juramento de Sangre, Pacto Sombrío… las sombras del pasado consumen el presente.",
			"La torre del reloj detenida, arena roja. La cuenta regresiva comienza ahora."
		],
		"vietnamese": [
			"Bóng tối nuốt chửng thành phố.",
			"Cổ vật biến mất, dấu vết của lời thề cổ xưa.",
			"Vex, người cung cấp thông tin. Cô ấy biết mọi thứ về thế giới bóng tối.",
			"Lời thề máu, Giao ước Bóng tối… bóng tối quá khứ đang gặm nhấm hiện tại.",
			"Tháp đồng hồ dừng lại, cát đỏ. Giờ đây, đếm ngược bắt đầu."
		],
		"thai": [
			"ความมืดกลืนกินเมือง.",
			"วัตถุโบราณที่หายไป, ร่องรอยคำสาบานโบราณ.",
			"เว็กซ์, ผู้ให้ข้อมูล. เธอรู้ทุกสิ่งในโลกเงา.",
			"คำสาบานเลือด, พันธสัญญาแห่งเงา… เงาของอดีตกินปัจจุบัน.",
			"หอนาฬิกาที่หยุดนิ่ง, ทรายสีแดง. บัดนี้การนับถอยหลังได้เริ่มขึ้นแล้ว."
		],
		"hindi": [
			"अंधेरे ने शहर को निगल लिया।",
			"लुप्त कलाकृतियाँ, और प्राचीन प्रतिज्ञा के निशान।",
			"भेड़िया, जासूस। वह छाया जगत का सब कुछ जानती थी।",
			"रक्त की शपथ, छाया वाचा… अतीत की छायाएँ वर्तमान को निगल जाती हैं।",
			"रुकी हुई घड़ी की मीनार, लाल रेत। अब उलटी गिनती शुरू होती है।"
		]
	}
} as const;
