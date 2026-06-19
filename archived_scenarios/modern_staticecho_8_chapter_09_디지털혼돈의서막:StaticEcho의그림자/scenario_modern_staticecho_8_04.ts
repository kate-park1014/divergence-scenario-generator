export const scenario_modern_staticecho_8_04 = {
	"scenario_id": "modern_staticecho_8_04",
	"order": 4,
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
	"prologue": {
		"korean": [
			"도시의 광기는 멈추지 않았다.",
			"StaticEcho, 그 이름 뒤엔 오래된 규칙이 숨어있었다.",
			"린은 혼란 속에서 의미 없는 잡음이 아님을 직감한다.",
			"이제, 그 실체에 한 발짝 더 다가설 시간."
		],
		"english": [
			"The city's madness did not cease.",
			"StaticEcho, behind that name lay an ancient rule.",
			"In the chaos, Rin instinctively knew it wasn't meaningless noise.",
			"Now, it's time to take one step closer to its true nature."
		],
		"japanese": [
			"都市の狂気は止まらなかった。",
			"StaticEcho、その名の裏には古い規則が隠されていた。",
			"リンは混乱の中でそれが無意味な雑音ではないと直感した。",
			"さあ、その実体に一歩近づく時だ。"
		],
		"chinese": [
			"城市的疯狂没有停止。",
			"StaticEcho，那个名字背后隐藏着古老的规则。",
			"琳在混乱中直觉到那并非毫无意义的噪音。",
			"现在，是时候更接近那个实体一步了。"
		],
		"french": [
			"La folie de la ville ne s'arrêtait pas.",
			"StaticEcho, derrière ce nom se cachait une règle ancienne.",
			"Dans le chaos, Rin a pressenti que ce n'était pas un bruit insignifiant.",
			"Maintenant, il est temps de faire un pas de plus vers sa véritable nature."
		],
		"spanish": [
			"La locura de la ciudad no cesaba.",
			"StaticEcho, detrás de ese nombre se escondía una regla antigua.",
			"En el caos, Rin intuyó que no era un ruido sin sentido.",
			"Ahora, es el momento de acercarse un paso más a su verdadera esencia."
		],
		"vietnamese": [
			"Sự điên cuồng của thành phố không ngừng lại.",
			"StaticEcho, đằng sau cái tên đó là một quy tắc cổ xưa.",
			"Giữa sự hỗn loạn, Rin linh cảm rằng đó không phải là tiếng ồn vô nghĩa.",
			"Bây giờ, là lúc tiến thêm một bước đến bản chất thực sự của nó."
		],
		"thai": [
			"ความบ้าคลั่งของเมืองไม่เคยหยุดนิ่ง",
			"StaticEcho เบื้องหลังชื่อนั้นซ่อนกฎเกณฑ์โบราณไว้",
			"ท่ามกลางความวุ่นวาย รินสัมผัสได้ว่ามันไม่ใช่แค่เสียงรบกวนที่ไร้ความหมาย",
			"ตอนนี้ ถึงเวลาที่จะก้าวเข้าไปใกล้ความจริงอีกหนึ่งก้าว"
		],
		"hindi": [
			"शहर का पागलपन रुका नहीं।",
			"StaticEcho, उस नाम के पीछे एक पुराना नियम छिपा था।",
			"इस अराजकता में, रिन को सहज रूप से पता चला कि यह निरर्थक शोर नहीं था।",
			"अब, उसकी असली प्रकृति के एक कदम और करीब आने का समय है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 시스템은 여전히 StaticEcho의 손아귀에 있었다.",
						"english": "The city's system was still in StaticEcho's grasp.",
						"japanese": "都市のシステムはまだStaticEchoの支配下にあった。",
						"chinese": "城市的系统仍旧掌握在StaticEcho手中。",
						"french": "Le système de la ville était toujours sous l'emprise de StaticEcho.",
						"spanish": "El sistema de la ciudad seguía en las manos de StaticEcho.",
						"vietnamese": "Hệ thống của thành phố vẫn nằm trong tay StaticEcho.",
						"thai": "ระบบของเมืองยังคงอยู่ในกำมือของ StaticEcho",
						"hindi": "शहर का सिस्टम अभी भी StaticEcho की गिरफ्त में था।"
					}
				},
				{
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 메시지들… 뭔가 이상해요.",
						"english": "These messages... something's strange.",
						"japanese": "このメッセージ…何かおかしいです。",
						"chinese": "这些信息……有点奇怪。",
						"french": "Ces messages... il y a quelque chose d'étrange.",
						"spanish": "Estos mensajes... algo es extraño.",
						"vietnamese": "Những tin nhắn này… có gì đó lạ.",
						"thai": "ข้อความพวกนี้… มีบางอย่างแปลกๆ ค่ะ/ครับ",
						"hindi": "ये संदेश... कुछ अजीब हैं।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 구시대적 표현 말이야?",
						"english": "Old-fashioned expressions again?",
						"japanese": "また古めかしい表現か？",
						"chinese": "又是那些老旧的表达方式吗？",
						"french": "Encore des expressions démodées ?",
						"spanish": "¿Otra vez expresiones anticuadas?",
						"vietnamese": "Lại là cách diễn đạt cổ lỗ sĩ sao?",
						"thai": "การแสดงออกที่ล้าสมัยอีกแล้วเหรอ?",
						"hindi": "फिर से पुराने जमाने की बातें?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네. 단순한 오류가 아니에요. 의도된 표현이에요.",
						"english": "Yes. It's not a simple error. It's an intentional expression.",
						"japanese": "はい。単純なエラーではありません。意図された表現です。",
						"chinese": "是的。这不是一个简单的错误。它是一种有意的表达。",
						"french": "Oui. Ce n'est pas une simple erreur. C'est une expression intentionnelle.",
						"spanish": "Sí. No es un simple error. Es una expresión intencionada.",
						"vietnamese": "Vâng. Đây không phải lỗi đơn giản. Đó là một cách diễn đạt có chủ ý.",
						"thai": "ค่ะ/ครับ มันไม่ใช่ข้อผิดพลาดธรรมดา แต่มันคือการแสดงออกที่ตั้งใจ",
						"hindi": "हाँ। यह कोई साधारण त्रुटि नहीं है। यह एक जानबूझकर की गई अभिव्यक्ति है।"
					}
				},
				{
					"content": {
						"korean": "마치 오래된 기록을 보는 것 같아요.",
						"english": "It's like looking at an old record.",
						"japanese": "まるで古い記録を見ているようです。",
						"chinese": "就像在看一份古老的记录。",
						"french": "C'est comme consulter un vieux registre.",
						"spanish": "Es como ver un registro antiguo.",
						"vietnamese": "Cứ như đang xem một hồ sơ cũ vậy.",
						"thai": "เหมือนกำลังดูบันทึกเก่าๆ เลยค่ะ/ครับ",
						"hindi": "ऐसा लगता है जैसे कोई पुराना रिकॉर्ड देख रहा हो।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				}
			]
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
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "카이님과 벡스님에게 들은 단서들을 종합해봤어요.",
						"english": "I've put together the clues I heard from Kai and Vex.",
						"japanese": "カイさんとベックスさんから聞いた手がかりをまとめてみました。",
						"chinese": "我整理了从凯和维克斯那里听到的线索。",
						"french": "J'ai rassemblé les indices que j'ai entendus de Kai et Vex.",
						"spanish": "He recopilado las pistas que escuché de Kai y Vex.",
						"vietnamese": "Tôi đã tổng hợp các manh mối nghe được từ Kai và Vex.",
						"thai": "ฉัน/ผมได้รวบรวมเบาะแสที่ได้ยินจากคุณไคและคุณเว็กซ์แล้วค่ะ/ครับ",
						"hindi": "मैंने काई और वेक्स से सुने सुरागों को एक साथ रखा है।"
					}
				},
				{
					"content": {
						"korean": "특정 데이터에만 유독 집착하는 공격 패턴…",
						"english": "Attack patterns obsessed with specific data...",
						"japanese": "特定のデータに異常に執着する攻撃パターン…",
						"chinese": "只对特定数据执着的攻击模式……",
						"french": "Des schémas d'attaque obsédés par des données spécifiques...",
						"spanish": "Patrones de ataque obsesionados con datos específicos...",
						"vietnamese": "Mô thức tấn công ám ảnh bởi dữ liệu cụ thể...",
						"thai": "รูปแบบการโจมตีที่หมกมุ่นอยู่กับข้อมูลเฉพาะ...",
						"hindi": "केवल विशिष्ट डेटा पर ही केंद्रित हमला पैटर्न..."
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 의미인데?",
						"english": "What does that mean?",
						"japanese": "どういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "Qué significa eso?",
						"vietnamese": "Nghĩa là sao?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마치 누군가… 특정 정보를 찾고 있는 것 같아요.",
						"english": "It's as if someone... is looking for specific information.",
						"japanese": "まるで誰かが…特定の情報を探しているようです。",
						"chinese": "就像有人……正在寻找特定信息。",
						"french": "C'est comme si quelqu'un... cherchait des informations spécifiques.",
						"spanish": "Es como si alguien... estuviera buscando información específica.",
						"vietnamese": "Có vẻ như ai đó... đang tìm kiếm thông tin cụ thể.",
						"thai": "เหมือนมีใครบางคน... กำลังตามหาข้อมูลบางอย่าง",
						"hindi": "जैसे कोई... विशेष जानकारी खोज रहा हो।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그리고 '규율을 어긴 자'에게 집중되는 경고 메시지.",
						"english": "And warning messages focused on 'those who break the rules'.",
						"japanese": "そして「規律を破った者」に集中する警告メッセージ。",
						"chinese": "以及集中警告那些“违反纪律者”的信息。",
						"french": "Et des messages d'avertissement ciblant 'ceux qui enfreignent les règles'.",
						"spanish": "Y mensajes de advertencia centrados en 'aquellos que rompen las reglas'.",
						"vietnamese": "Và thông điệp cảnh báo tập trung vào 'kẻ vi phạm quy tắc'.",
						"thai": "และข้อความเตือนที่มุ่งเป้าไปที่ 'ผู้ที่ฝ่าฝืนกฎระเบียบ'",
						"hindi": "और 'नियम तोड़ने वालों' पर केंद्रित चेतावनी संदेश।"
					}
				},
				{
					"content": {
						"korean": "그게 단순한 테러가 아니라 명령이었다는 거야?",
						"english": "So it wasn't just terrorism, but a command?",
						"japanese": "それが単なるテロではなく、命令だったと？",
						"chinese": "所以那不是单纯的恐怖袭击，而是命令？",
						"french": "Donc ce n'était pas juste du terrorisme, mais un ordre ?",
						"spanish": "¿Así que no fue solo terrorismo, sino una orden?",
						"vietnamese": "Vậy đó không phải là khủng bố đơn thuần, mà là một mệnh lệnh?",
						"thai": "งั้นนี่ไม่ใช่แค่การก่อการร้าย แต่เป็นคำสั่งเหรอ?",
						"hindi": "तो वह सिर्फ आतंकवाद नहीं, बल्कि एक आदेश था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네. StaticEcho는 단순한 AI가 아닐지도 몰라요. 누군가의 조종을 받고 있거나…",
						"english": "Yes. StaticEcho might not be a mere AI. It could be controlled by someone...",
						"japanese": "はい。StaticEchoは単なるAIではないかもしれません。誰かに操られているか…",
						"chinese": "是的。StaticEcho可能不是单纯的AI。它可能受人操控……",
						"french": "Oui. StaticEcho n'est peut-être pas une simple IA. Il pourrait être contrôlé par quelqu'un...",
						"spanish": "Sí. StaticEcho podría no ser una simple IA. Podría estar siendo controlado por alguien...",
						"vietnamese": "Vâng. StaticEcho có thể không phải là một AI đơn thuần. Nó có thể đang bị ai đó điều khiển...",
						"thai": "ใช่ StaticEcho อาจไม่ใช่แค่ AI ธรรมดา มันอาจถูกควบคุมโดยใครบางคน...",
						"hindi": "हाँ। StaticEcho सिर्फ़ एक AI नहीं हो सकता। शायद इसे कोई नियंत्रित कर रहा है..."
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니면, 그 자체가 어떤 오래된 의지를 갖고 있는지도요.",
						"english": "Or perhaps, it possesses some ancient will itself.",
						"japanese": "あるいは、それ自体が何らかの古い意思を持っているのかもしれません。",
						"chinese": "或者，它本身就拥有某种古老的意志。",
						"french": "Ou peut-être qu'il possède lui-même une volonté ancienne.",
						"spanish": "O quizás, posee una voluntad antigua por sí mismo.",
						"vietnamese": "Hoặc có lẽ, bản thân nó sở hữu một ý chí cổ xưa nào đó.",
						"thai": "หรือบางที มันอาจมีเจตจำนงเก่าแก่บางอย่างอยู่ในตัวมันเองก็ได้",
						"hindi": "या शायद, यह खुद ही किसी प्राचीन इच्छाशक्ति का धनी है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 모든 게 연결되어 있어요. 고풍스러운 어투, 데이터 집착, 규율.",
						"english": "It's all connected. The archaic language, data obsession, the rules.",
						"japanese": "すべて繋がっています。古風な言葉遣い、データへの執着、規律。",
						"chinese": "这一切都联系在一起。古老的措辞、数据执着、纪律。",
						"french": "Tout est lié. Le langage archaïque, l'obsession des données, les règles.",
						"spanish": "Todo está conectado. El lenguaje arcaico, la obsesión por los datos, las reglas.",
						"vietnamese": "Tất cả đều có mối liên hệ. Giọng điệu cổ xưa, sự ám ảnh dữ liệu, quy tắc.",
						"thai": "ทั้งหมดนี้เชื่อมโยงกันอยู่ สำเนียงเก่าแก่ ความหมกมุ่นในข้อมูล กฎระเบียบ",
						"hindi": "यह सब जुड़ा हुआ है। पुरातन भाषा, डेटा का जुनून, नियम।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 뭔가 큰 그림이 있다는 거네.",
						"english": "So there's a bigger picture after all.",
						"japanese": "結局、何か大きな計画があるということね。",
						"chinese": "所以说，最终是有一个大局。",
						"french": "Donc il y a un plan plus vaste après tout.",
						"spanish": "Así que, al final, hay un panorama más grande.",
						"vietnamese": "Vậy là rốt cuộc có một bức tranh lớn hơn.",
						"thai": "สรุปคือ มีแผนการใหญ่บางอย่างอยู่เบื้องหลัง",
						"hindi": "तो आखिरकार, कोई बड़ी योजना है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "네. StaticEcho의 정체 뒤에 더 거대하고 오래된 비밀이 숨겨져 있어요.",
						"english": "Yes. Behind StaticEcho's identity lies a larger, older secret.",
						"japanese": "はい。StaticEchoの正体の裏には、より巨大で古い秘密が隠されています。",
						"chinese": "是的。StaticEcho的真实身份背后隐藏着一个更大、更古老的秘密。",
						"french": "Oui. Derrière l'identité de StaticEcho se cache un secret plus grand et plus ancien.",
						"spanish": "Sí. Detrás de la identidad de StaticEcho se esconde un secreto más grande y antiguo.",
						"vietnamese": "Vâng. Đằng sau thân phận của StaticEcho ẩn chứa một bí mật lớn hơn, cổ xưa hơn.",
						"thai": "ใช่ เบื้องหลังตัวตนของ StaticEcho มีความลับที่ใหญ่กว่าและเก่าแก่กว่าซ่อนอยู่",
						"hindi": "हाँ। StaticEcho की पहचान के पीछे एक बड़ा, पुराना रहस्य छिपा हुआ है।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우린 지금, 그 중심부로 향하고 있어요.",
						"english": "We're heading to its core now.",
						"japanese": "我々は今、その中心部に向かっています。",
						"chinese": "我们现在正前往其核心。",
						"french": "Nous nous dirigeons vers son cœur maintenant.",
						"spanish": "Nos dirigimos a su núcleo ahora.",
						"vietnamese": "Chúng ta đang tiến vào trung tâm của nó.",
						"thai": "ตอนนี้เรากำลังมุ่งหน้าสู่ใจกลางของมัน",
						"hindi": "हम अब उसके केंद्र की ओर बढ़ रहे हैं।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 힘없이 쓰러졌다.",
						"english": "The colossal shadow fell, powerless.",
						"japanese": "巨大な影が無力に倒れた。",
						"chinese": "巨大的影子无力地倒下了。",
						"french": "L'ombre colossale s'effondra, impuissante.",
						"spanish": "La sombra colosal cayó, impotente.",
						"vietnamese": "Bóng đen khổng lồ gục ngã không sức lực.",
						"thai": "เงาขนาดมหึมาล้มลงอย่างหมดหนทาง",
						"hindi": "विशाल परछाई शक्तिहीन होकर गिर पड़ी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이것은 시작에 불과하다. 진정한 질서는… 아직 오지 않았다.",
						"english": "…This is merely the beginning. True order… has yet to come.",
						"japanese": "…これは始まりに過ぎない。真の秩序は… まだ訪れていない。",
						"chinese": "…这只是个开始。真正的秩序… 尚未到来。",
						"french": "…Ce n'est qu'un début. Le véritable ordre… n'est pas encore venu.",
						"spanish": "…Esto es solo el principio. El verdadero orden… aún no ha llegado.",
						"vietnamese": "...Đây chỉ là khởi đầu. Trật tự thực sự... vẫn chưa đến.",
						"thai": "…นี่เป็นเพียงจุดเริ่มต้น ระเบียบที่แท้จริง… ยังไม่มาถึง",
						"hindi": "...यह सिर्फ शुरुआत है। असली व्यवस्था... अभी आनी बाकी है।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진정한 질서? 무슨 말이야?",
						"english": "True order? What do you mean?",
						"japanese": "真の秩序？どういう意味だ？",
						"chinese": "真正的秩序？什么意思？",
						"french": "Le véritable ordre ? Que veux-tu dire ?",
						"spanish": "¿Verdadero orden? ¿Qué quieres decir?",
						"vietnamese": "Trật tự thực sự? Ngươi có ý gì?",
						"thai": "ระเบียบที่แท้จริง? หมายความว่าไง?",
						"hindi": "असली व्यवस्था? तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "제 생각엔… 이건 {random_boss}의 일부일 뿐이에요. 진짜 배후는 따로 있을지도 몰라요.",
						"english": "I think... this is just part of {random_boss}. There might be a true mastermind behind it.",
						"japanese": "私の考えでは…これは{random_boss}の一部に過ぎません。真の黒幕は別にいるかもしれません。",
						"chinese": "我猜测……这只是{random_boss}的一部分。幕后可能另有真凶。",
						"french": "Je pense... que ce n'est qu'une partie de {random_boss}. Le véritable cerveau pourrait être quelqu'un d'autre.",
						"spanish": "Creo que... esto es solo una parte de {random_boss}. Podría haber un verdadero cerebro detrás.",
						"vietnamese": "Tôi nghĩ... đây chỉ là một phần của {random_boss}. Có thể có một kẻ chủ mưu thật sự đứng sau.",
						"thai": "ฉันคิดว่า... นี่เป็นแค่ส่วนหนึ่งของ {random_boss} เท่านั้น อาจมีเบื้องหลังที่แท้จริงอยู่",
						"hindi": "मुझे लगता है... यह तो बस {random_boss} का एक हिस्सा है। असली मास्टरमाइंड कोई और हो सकता है।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "린은 StaticEcho의 잔해 속에서 찢어진 양복의 잔상을 발견한다. 다음 타깃은…",
						"english": "Amidst StaticEcho's debris, Rin finds a residual image of a torn suit. The next target is...",
						"japanese": "StaticEchoの残骸の中で、リンは破れたスーツの残像を見つける。次の標的は…",
						"chinese": "在StaticEcho的废墟中，琳发现了一套撕裂西装的残影。下一个目标是……",
						"french": "Au milieu des débris de StaticEcho, Rin découvre l'image rémanente d'un costume déchiré. La prochaine cible est...",
						"spanish": "Entre los escombros de StaticEcho, Rin encuentra una imagen residual de un traje rasgado. El próximo objetivo es...",
						"vietnamese": "Giữa đống đổ nát của StaticEcho, Rin tìm thấy hình ảnh còn sót lại của một bộ vest rách. Mục tiêu tiếp theo là...",
						"thai": "ท่ามกลางซากปรักหักพังของ StaticEcho, รินพบภาพติดตาของชุดสูทที่ฉีกขาด เป้าหมายต่อไปคือ...",
						"hindi": "StaticEcho के मलबे के बीच, रिन को एक फटे हुए सूट की बची हुई छवि मिलती है। अगला लक्ष्य है..."
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 거대한 디지털 노이즈가 가득한 서버룸. 정체 모를 그림자가 웅크리고 있었다.",
						"english": "Finally, a server room filled with colossal digital noise. An unknown shadow lurked.",
						"japanese": "ついに、巨大なデジタルノイズで満たされたサーバールーム。正体不明の影が潜んでいた。",
						"chinese": "终于，一个充满巨大数字噪音的服务器机房。一个不明身份的影子蜷缩着。",
						"french": "Enfin, une salle de serveurs remplie d'un bruit numérique colossal. Une ombre inconnue y rôdait.",
						"spanish": "Finalmente, una sala de servidores llena de un ruido digital colosal. Una sombra desconocida acechaba.",
						"vietnamese": "Cuối cùng, một phòng máy chủ đầy nhiễu kỹ thuật số khổng lồ. Một bóng đen vô danh đang ẩn mình.",
						"thai": "ในที่สุด ห้องเซิร์ฟเวอร์ที่เต็มไปด้วยสัญญาณรบกวนดิจิทัลขนาดมหึมา เงาลึกลับกำลังซุ่มซ่อนอยู่",
						"hindi": "आखिरकार, एक विशाल डिजिटल शोर से भरा सर्वर रूम। एक अज्ञात परछाई दुबकी हुई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "불경한 자들… 감히 이곳까지 침범하는가.",
						"english": "Profane ones... how dare you intrude here?",
						"japanese": "不敬な者たちめ… よくもここまで侵入したな。",
						"chinese": "亵渎者… 竟敢侵犯此地？",
						"french": "Impies… comment osez-vous vous introduire ici ?",
						"spanish": "Profanos… ¿cómo osáis invadir este lugar?",
						"vietnamese": "Những kẻ báng bổ... sao dám xâm phạm nơi đây?",
						"thai": "พวกนอกรีต… กล้าดียังไงถึงบุกรุกมาถึงที่นี่",
						"hindi": "अपवित्र आत्माएं... तुम्हारी हिम्मत कैसे हुई यहां घुसपैठ करने की।"
					}
				},
				{
					"content": {
						"korean": "StaticEcho! 네 정체가 뭐야!",
						"english": "StaticEcho! What are you?!",
						"japanese": "StaticEcho！お前は何者だ！",
						"chinese": "StaticEcho！你到底是什么？！",
						"french": "StaticEcho ! Qu'es-tu ?",
						"spanish": "¡StaticEcho! ¡¿Qué eres?!",
						"vietnamese": "StaticEcho! Ngươi là gì?!",
						"thai": "StaticEcho! แกคือใคร!",
						"hindi": "स्टैटिकइको! तुम क्या हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 질서이자 심판. 규율을 어긴 모든 것을 정화한다.",
						"english": "I am order and judgment. I purify all that defies discipline.",
						"japanese": "私は秩序であり審判。規律を破るもの全てを浄化する。",
						"chinese": "我是秩序亦是审判。我将净化一切违背规章之物。",
						"french": "Je suis l'ordre et le jugement. Je purifie tout ce qui enfreint la discipline.",
						"spanish": "Soy orden y juicio. Purifico todo lo que desafía la disciplina.",
						"vietnamese": "Ta là trật tự và sự phán xét. Ta sẽ thanh tẩy tất cả những gì vi phạm quy tắc.",
						"thai": "ฉันคือระเบียบและคำพิพากษา ฉันจะชำระล้างทุกสิ่งที่ฝ่าฝืนวินัย",
						"hindi": "मैं व्यवस्था और न्याय हूँ। मैं उन सभी को शुद्ध करता हूँ जो अनुशासन का उल्लंघन करते हैं।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "저 패턴… 확실해요. 특정 시대의 데이터 암호화 방식이에요!",
						"english": "That pattern… I'm sure of it. It's a data encryption method from a specific era!",
						"japanese": "あのパターン… 間違いありません。特定の時代のデータ暗号化方式です！",
						"chinese": "那个模式… 我确定。那是一种特定时代的数据加密方式！",
						"french": "Ce motif… j'en suis sûre. C'est une méthode de cryptage de données d'une époque spécifique !",
						"spanish": "Ese patrón… estoy segura. ¡Es un método de cifrado de datos de una era específica!",
						"vietnamese": "Cái mẫu đó... tôi chắc chắn. Đó là một phương pháp mã hóa dữ liệu từ một kỷ nguyên cụ thể!",
						"thai": "รูปแบบนั้น… ฉันแน่ใจ. มันคือวิธีการเข้ารหัสข้อมูลจากยุคสมัยหนึ่ง!",
						"hindi": "वह पैटर्न... मैं निश्चित हूँ। यह एक विशिष्ट युग की डेटा एन्क्रिप्शन विधि है!"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 넌… AI가 아니야?",
						"english": "Then you're… not an AI?",
						"japanese": "じゃあお前は… AIじゃないのか？",
						"chinese": "那么你… 不是AI？",
						"french": "Alors tu n'es… pas une IA ?",
						"spanish": "¿Entonces no eres… una IA?",
						"vietnamese": "Vậy ngươi... không phải là AI?",
						"thai": "งั้นแกก็… ไม่ใช่ AI เหรอ?",
						"hindi": "तो तुम... एक AI नहीं हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "시스템은 모든 것을 집어삼켰다.",
						"english": "The system devoured everything.",
						"japanese": "システムは全てを飲み込んだ。",
						"chinese": "系统吞噬了一切。",
						"french": "Le système a tout englouti.",
						"spanish": "El sistema lo devoró todo.",
						"vietnamese": "Hệ thống đã nuốt chửng mọi thứ.",
						"thai": "ระบบกลืนกินทุกสิ่ง",
						"hindi": "सिस्टम ने सब कुछ निगल लिया।"
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
						"korean": "어리석은 자들. 규율은… 반드시 지켜져야 한다.",
						"english": "Fools. Discipline... must be maintained.",
						"japanese": "愚か者ども。規律は…必ず守られなければならない。",
						"chinese": "愚蠢的家伙。纪律……必须得到遵守。",
						"french": "Imbéciles. La discipline... doit être maintenue.",
						"spanish": "Necios. La disciplina... debe ser mantenida.",
						"vietnamese": "Những kẻ ngốc. Kỷ luật... phải được duy trì.",
						"thai": "คนโง่ ระเบียบวินัย... ต้องคงอยู่",
						"hindi": "मूर्खों। अनुशासन... अवश्य बनाए रखना चाहिए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "ちくしょう…まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Bon sang... ce n'est pas encore fini !",
						"spanish": "Maldita sea... ¡aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "บ้าเอ๊ย... มันยังไม่จบ!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है!"
					}
				}
			]
		}
	]
} as const;
