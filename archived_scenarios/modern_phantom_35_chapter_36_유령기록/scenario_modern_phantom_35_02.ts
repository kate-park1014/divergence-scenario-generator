export const scenario_modern_phantom_35_02 = {
	"scenario_id": "modern_phantom_35_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"type": "speech",
					"content": {
						"korean": "카운트다운이 시작되고, 도시는 데이터 파편으로 뒤덮였다.",
						"english": "The countdown began, and the city was engulfed in data fragments.",
						"japanese": "カウントダウンが始まり、都市はデータ破片に覆われた。",
						"chinese": "倒计时开始，城市被数据碎片吞噬。",
						"french": "Le compte à rebours a commencé, et la ville a été submergée par des fragments de données.",
						"spanish": "La cuenta regresiva comenzó, y la ciudad fue engullida por fragmentos de datos.",
						"vietnamese": "Đồng hồ đếm ngược bắt đầu, và thành phố bị bao phủ bởi các mảnh dữ liệu.",
						"thai": "การนับถอยหลังเริ่มขึ้น และเมืองถูกปกคลุมไปด้วยเศษข้อมูล",
						"hindi": "उलटी गिनती शुरू हुई, और शहर डेटा खंडों से घिर गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건 단순한 해킹이 아니야. 도시 전체가 혼란에 빠졌어.",
						"english": "This isn't just a hack. The entire city is in chaos.",
						"japanese": "これは単なるハッキングじゃない。都市全体が混乱に陥っている。",
						"chinese": "这不仅仅是黑客攻击。整个城市都陷入了混乱。",
						"french": "Ce n'est pas un simple piratage. La ville entière est dans le chaos.",
						"spanish": "Esto no es solo un hackeo. Toda la ciudad está en caos.",
						"vietnamese": "Đây không chỉ là một vụ hack. Cả thành phố đang chìm trong hỗn loạn.",
						"thai": "นี่ไม่ใช่แค่การแฮก เมืองทั้งเมืองกำลังวุ่นวาย",
						"hindi": "यह सिर्फ एक हैक नहीं है। पूरा शहर अराजकता में है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "팬텀이 남긴 암호. 해독해 줄게.",
						"english": "Phantom's cipher. I'll decrypt it for you.",
						"japanese": "ファントムが残した暗号。解読してあげる。",
						"chinese": "幻影留下的密码。我会帮你解密。",
						"french": "Le code de Phantom. Je vais le décrypter.",
						"spanish": "El cifrado de Phantom. Lo descifraré para ti.",
						"vietnamese": "Mật mã của Phantom. Tôi sẽ giải mã nó cho bạn.",
						"thai": "รหัสลับของแฟนธอม ฉันจะถอดรหัสให้",
						"hindi": "फैंटम का सिफर। मैं इसे तुम्हारे लिए डिक्रिप्ट करूँगा।"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "도와주는 거야?",
						"english": "Are you helping me?",
						"japanese": "手伝ってくれるの？",
						"chinese": "你要帮我吗？",
						"french": "Tu m'aides ?",
						"spanish": "¿Me estás ayudando?",
						"vietnamese": "Bạn đang giúp tôi à?",
						"thai": "คุณกำลังช่วยฉันเหรอ?",
						"hindi": "क्या तुम मेरी मदद कर रहे हो?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흥미로운 조각들이거든.",
						"english": "They're interesting pieces.",
						"japanese": "面白い断片だからね。",
						"chinese": "因为它们是些有趣的碎片。",
						"french": "Ce sont des pièces intéressantes.",
						"spanish": "Son piezas interesantes.",
						"vietnamese": "Vì chúng là những mảnh ghép thú vị.",
						"thai": "เพราะมันเป็นชิ้นส่วนที่น่าสนใจ",
						"hindi": "वे दिलचस्प टुकड़े हैं।"
					},
					"speaker": "nia"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "이 데이터… 오래된 갱단 기록과 겹쳐.",
						"english": "This data... it overlaps with old gang records.",
						"japanese": "このデータ…古いギャングの記録と重なる。",
						"chinese": "这份数据…与旧帮派记录重叠。",
						"french": "Ces données… elles recoupent d'anciens dossiers de gangs.",
						"spanish": "Estos datos… se superponen con viejos registros de pandillas.",
						"vietnamese": "Dữ liệu này… trùng khớp với hồ sơ băng đảng cũ.",
						"thai": "ข้อมูลนี้…ทับซ้อนกับบันทึกแก๊งเก่า",
						"hindi": "यह डेटा… पुराने गिरोह के रिकॉर्ड से मेल खाता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "갱단? 팬텀이랑 무슨 상관인데?",
						"english": "Gang? What does that have to do with Phantom?",
						"japanese": "ギャング？ファントムと何の関係があるの？",
						"chinese": "帮派？和幻影有什么关系？",
						"french": "Des gangs ? Quel est le rapport avec Phantom ?",
						"spanish": "¿Pandilla? ¿Qué tiene que ver eso con Phantom?",
						"vietnamese": "Băng đảng? Liên quan gì đến Phantom?",
						"thai": "แก๊ง? เกี่ยวอะไรกับแฟนทอม?",
						"hindi": "गिरोह? फैंटम से इसका क्या लेना-देना है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "사라진 인물들의 명단. 비극적인 기록들.",
						"english": "A list of disappeared individuals. Tragic records.",
						"japanese": "姿を消した者たちのリスト。悲劇的な記録だ。",
						"chinese": "消失人物的名单。悲剧的记录。",
						"french": "Une liste de personnes disparues. Des archives tragiques.",
						"spanish": "Una lista de personas desaparecidas. Registros trágicos.",
						"vietnamese": "Danh sách những người biến mất. Những ghi chép bi thảm.",
						"thai": "รายชื่อบุคคลที่หายไป บันทึกโศกนาฏกรรม",
						"hindi": "गायब हुए व्यक्तियों की सूची। दुखद रिकॉर्ड।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "과거의 질서가 깨져가는 증거야.",
						"english": "It's evidence that the old order is breaking down.",
						"japanese": "過去の秩序が崩れていく証拠だよ。",
						"chinese": "这是过去秩序正在瓦解的证据。",
						"french": "C'est la preuve que l'ancien ordre s'effondre.",
						"spanish": "Es la prueba de que el viejo orden se está desmoronando.",
						"vietnamese": "Đây là bằng chứng cho thấy trật tự cũ đang sụp đổ.",
						"thai": "เป็นหลักฐานว่าระเบียบเก่ากำลังล่มสลาย",
						"hindi": "यह इस बात का सबूत है कि पुरानी व्यवस्था टूट रही है।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "질서…?",
						"english": "Order...?",
						"japanese": "秩序…？",
						"chinese": "秩序…？",
						"french": "L'ordre… ?",
						"spanish": "¿Orden…?",
						"vietnamese": "Trật tự…?",
						"thai": "ระเบียบ…?",
						"hindi": "व्यवस्था…?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "디지털 데이터 속에서 낡은 장부의 흔적이 희미하게 감지된다.",
						"english": "Traces of an old ledger are faintly detected within the digital data.",
						"japanese": "デジタルデータの中に、古い帳簿の痕跡がかすかに感知される。",
						"chinese": "在数字数据中，隐约能察觉到旧账本的痕迹。",
						"french": "Des traces d'un vieux registre sont faiblement détectées dans les données numériques.",
						"spanish": "En los datos digitales se detectan débilmente rastros de un viejo libro de contabilidad.",
						"vietnamese": "Trong dữ liệu số, dấu vết của một cuốn sổ cái cũ được phát hiện mờ nhạt.",
						"thai": "ร่องรอยของสมุดบัญชีเก่าถูกตรวจพบอย่างจางๆ ในข้อมูลดิจิทัล",
						"hindi": "डिजिटल डेटा में एक पुराने बहीखाते के निशान धुंधले रूप से पाए गए हैं।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "nia",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "팬텀은 과거의 흔적을 쫓는 것 같아.",
						"english": "Phantom seems to be chasing after traces of the past.",
						"japanese": "ファントムは過去の痕跡を追っているようだ。",
						"chinese": "幻影似乎在追寻过去的痕迹。",
						"french": "Phantom semble traquer les traces du passé.",
						"spanish": "Phantom parece estar persiguiendo rastros del pasado.",
						"vietnamese": "Phantom dường như đang truy tìm dấu vết của quá khứ.",
						"thai": "แฟนทอมดูเหมือนกำลังตามรอยอดีต",
						"hindi": "फैंटम अतीत के निशानों का पीछा कर रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "어떤 흔적?",
						"english": "What traces?",
						"japanese": "どんな痕跡？",
						"chinese": "什么痕迹？",
						"french": "Quelles traces ?",
						"spanish": "¿Qué rastros?",
						"vietnamese": "Dấu vết gì?",
						"thai": "ร่องรอยอะไร?",
						"hindi": "कैसे निशान?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "도시의 오래된 뒷골목 전설… '해결사'의 기록.",
						"english": "The city's old back-alley legend... records of 'The Fixer'.",
						"japanese": "都市の古い裏路地の伝説…「解決屋」の記録。",
						"chinese": "城市老旧后巷的传说…“解决师”的记录。",
						"french": "La vieille légende des ruelles de la ville… les registres du « Dépannage ».",
						"spanish": "La vieja leyenda de los callejones de la ciudad... los registros de 'El Reparador'.",
						"vietnamese": "Truyền thuyết ngõ hẻm cũ của thành phố… hồ sơ của 'Người Giải Quyết'.",
						"thai": "ตำนานตรอกซอกซอยเก่าแก่ของเมือง…บันทึกของ 'นักแก้ปัญหา'",
						"hindi": "शहर की पुरानी गलियों का किस्सा… 'समाधानकर्ता' के रिकॉर्ड।"
					}
				},
				{
					"content": {
						"korean": "해결사…?",
						"english": "The Fixer...?",
						"japanese": "解決屋…？",
						"chinese": "解决师…？",
						"french": "Le Dépannage… ?",
						"spanish": "¿El Reparador…?",
						"vietnamese": "Người Giải Quyết…?",
						"thai": "นักแก้ปัญหา…?",
						"hindi": "समाधानकर्ता…?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "팬텀이 파괴하는 게, 전부가 아닐 수도 있어.",
						"english": "Phantom's destruction might not be everything.",
						"japanese": "ファントムが破壊しているのは、それだけではないのかもしれない。",
						"chinese": "幻影所破坏的，可能不止于此。",
						"french": "La destruction de Phantom n'est peut-être pas la seule chose.",
						"spanish": "Puede que la destrucción de Phantom no sea todo.",
						"vietnamese": "Những gì Phantom phá hủy có thể không phải là tất cả.",
						"thai": "สิ่งที่แฟนธอมทำลาย อาจไม่ใช่ทั้งหมด",
						"hindi": "फैंटम जो नष्ट कर रहा है, वह सब कुछ नहीं हो सकता है।"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭘 지키려는 건데?",
						"english": "Then what is it trying to protect?",
						"japanese": "じゃあ、何を護ろうとしているの？",
						"chinese": "那它到底想保护什么？",
						"french": "Alors, que cherche-t-il à protéger ?",
						"spanish": "¿Entonces qué intenta proteger?",
						"vietnamese": "Vậy thì nó đang cố bảo vệ cái gì?",
						"thai": "ถ้าอย่างนั้น มันกำลังปกป้องอะไร?",
						"hindi": "तो फिर वह क्या बचाने की कोशिश कर रहा है?"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "nia",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "시스템 붕괴가 가속되고 있어. 더 깊이 들어가면 위험해.",
						"english": "System collapse is accelerating. Going deeper is dangerous.",
						"japanese": "システム崩壊が加速している。これ以上深入りすれば危険だ。",
						"chinese": "系统崩溃正在加速。深入其中将很危险。",
						"french": "L'effondrement du système s'accélère. Aller plus profond est dangereux.",
						"spanish": "El colapso del sistema se acelera. Ir más profundo es peligroso.",
						"vietnamese": "Sự cố hệ thống đang tăng tốc. Đi sâu hơn sẽ rất nguy hiểm.",
						"thai": "ระบบกำลังพังทลายเร็วขึ้น การลงลึกกว่านี้อันตราย",
						"hindi": "सिस्टम का पतन तेज़ हो रहा है। और गहराई में जाना ख़तरनाक है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "멈출 수 없어. 팬텀의 진실을 알아야 해.",
						"english": "I can't stop. I must know Phantom's truth.",
						"japanese": "止められない。ファントムの真実を知る必要がある。",
						"chinese": "我不能停。我必须知道幻影的真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité sur Phantom.",
						"spanish": "No puedo parar. Debo saber la verdad de Phantom.",
						"vietnamese": "Không thể dừng lại. Tôi phải biết sự thật về Phantom.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องรู้ความจริงของแฟนธอม",
						"hindi": "मैं रुक नहीं सकता। मुझे फैंटम की सच्चाई जाननी होगी।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이건 단순한 데이터 파괴가 아니야. 팬텀은 뭔가에 묶여 있어.",
						"english": "This isn't just data destruction. Phantom is bound by something.",
						"japanese": "これは単なるデータ破壊じゃない。ファントムは何かによって縛られている。",
						"chinese": "这不只是简单的数据破坏。幻影被某种东西束缚着。",
						"french": "Ce n'est pas une simple destruction de données. Phantom est lié à quelque chose.",
						"spanish": "Esto no es solo destrucción de datos. Phantom está atado a algo.",
						"vietnamese": "Đây không chỉ là phá hủy dữ liệu. Phantom bị ràng buộc bởi thứ gì đó.",
						"thai": "นี่ไม่ใช่แค่การทำลายข้อมูล แฟนธอมถูกผูกมัดด้วยบางสิ่ง",
						"hindi": "यह सिर्फ़ डेटा का विनाश नहीं है। फैंटम किसी चीज़ से बंधा हुआ है।"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "묶여 있다고?",
						"english": "Bound?",
						"japanese": "縛られていると？",
						"chinese": "被束缚着？",
						"french": "Lié ?",
						"spanish": "¿Atado?",
						"vietnamese": "Bị ràng buộc sao?",
						"thai": "ถูกผูกมัดหรือ?",
						"hindi": "बंधा हुआ?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뒤섞인 과거의 데이터가 도시를 좀먹는 듯했다.",
						"english": "Jumbled past data seemed to gnaw at the city.",
						"japanese": "混じり合った過去のデータが都市を蝕んでいるようだった。",
						"chinese": "混杂的过去数据似乎正在侵蚀这座城市。",
						"french": "Les données passées mêlées semblaient ronger la ville.",
						"spanish": "Los datos mezclados del pasado parecían carcomer la ciudad.",
						"vietnamese": "Dữ liệu quá khứ lẫn lộn dường như đang ăn mòn thành phố.",
						"thai": "ข้อมูลในอดีตที่ปะปนกัน ดูเหมือนกำลังกัดกินเมือง",
						"hindi": "अतीत के मिले-जुले डेटा शहर को खोखला कर रहे थे।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우린… 모두 조각난 기억일 뿐….",
						"english": "We… are all just fragmented memories…",
						"japanese": "我々は…皆、断片化された記憶に過ぎない…。",
						"chinese": "我们…都只是破碎的记忆…",
						"french": "Nous… ne sommes tous que des souvenirs fragmentés…",
						"spanish": "Nosotros… solo somos recuerdos fragmentados…",
						"vietnamese": "Chúng ta… tất cả chỉ là những ký ức vụn vỡ…",
						"thai": "เรา… ล้วนเป็นเพียงความทรงจำที่แตกสลาย…",
						"hindi": "हम… सभी खंडित यादें भर हैं…"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…조각?",
						"english": "…Fragments?",
						"japanese": "…断片か？",
						"chinese": "…碎片？",
						"french": "…Fragments ?",
						"spanish": "¿…Fragmentos?",
						"vietnamese": "…Vụn vỡ?",
						"thai": "…เศษเสี้ยว?",
						"hindi": "…टुकड़े?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "디지털 그림자가 사라지자, 도시의 새로운 혼란이 시작되었다.",
						"english": "As the digital shadow faded, a new chaos began in the city.",
						"japanese": "デジタルな影が消え去ると、都市に新たな混乱が始まった。",
						"chinese": "随着数字阴影的消散，城市新的混乱开始了。",
						"french": "Alors que l'ombre numérique s'évanouissait, un nouveau chaos commença dans la ville.",
						"spanish": "Cuando la sombra digital se desvaneció, un nuevo caos comenzó en la ciudad.",
						"vietnamese": "Khi bóng tối kỹ thuật số tan biến, một sự hỗn loạn mới bắt đầu trong thành phố.",
						"thai": "เมื่อเงามืดดิจิทัลเลือนหายไป ความวุ่นวายครั้งใหม่ได้เริ่มต้นขึ้นในเมือง",
						"hindi": "जैसे ही डिजिटल छाया लुप्त हुई, शहर में एक नया अराजकता शुरू हो गया।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "잊혀진 약속을 감시하는 자가, 또 다른 단서를 기다린다.",
						"english": "The one who guards the forgotten promise awaits another clue.",
						"japanese": "忘れ去られた約束を監視する者が、さらなる手がかりを待つ。",
						"chinese": "守护被遗忘的约定之人，正在等待另一个线索。",
						"french": "Celui qui garde la promesse oubliée attend un autre indice.",
						"spanish": "Quien custodia la promesa olvidada, espera otra pista.",
						"vietnamese": "Kẻ canh giữ lời hứa bị lãng quên đang chờ đợi một manh mối khác.",
						"thai": "ผู้เฝ้ารักษาสัญญาที่ถูกลืมเลือน รอคอยเบาะแสอีกชิ้น",
						"hindi": "जो भूली हुई प्रतिज्ञा की रक्षा करता है, वह एक और सुराग का इंतजार कर रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "데이터의 폭풍이 모든 것을 집어삼켰다.",
						"english": "The data storm swallowed everything.",
						"japanese": "データの嵐がすべてを飲み込んだ。",
						"chinese": "数据风暴吞噬了一切。",
						"french": "La tempête de données a tout englouti.",
						"spanish": "La tormenta de datos lo devoró todo.",
						"vietnamese": "Cơn bão dữ liệu nuốt chửng mọi thứ.",
						"thai": "พายุข้อมูลกลืนกินทุกสิ่ง",
						"hindi": "डेटा के तूफान ने सब कुछ निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 늦지 않았다. 너도 조각이 될 뿐.",
						"english": "It's not too late. You'll just become a fragment too.",
						"japanese": "まだ遅くはない。お前もただの断片になるだけだ。",
						"chinese": "还不算晚。你也会变成碎片。",
						"french": "Il n'est pas trop tard. Tu ne feras que devenir un fragment toi aussi.",
						"spanish": "No es demasiado tarde. Tú también te convertirás en un fragmento.",
						"vietnamese": "Chưa quá muộn đâu. Ngươi cũng sẽ chỉ trở thành một mảnh vụn thôi.",
						"thai": "ยังไม่สายเกินไป เธอจะกลายเป็นเพียงเศษเสี้ยวเช่นกัน",
						"hindi": "अभी देर नहीं हुई है। तुम भी बस एक टुकड़ा बन जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…포기하지 않아.",
						"english": "…I won't give up.",
						"japanese": "…諦めない。",
						"chinese": "…我不会放弃。",
						"french": "…Je n'abandonnerai pas.",
						"spanish": "…No me rendiré.",
						"vietnamese": "…Tôi sẽ không bỏ cuộc.",
						"thai": "…ฉันจะไม่ยอมแพ้",
						"hindi": "…मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 디지털 에너지가 형체를 이뤘다. 정체 모를 그림자였다.",
						"english": "Vast digital energy took form. It was an unknown shadow.",
						"japanese": "巨大なデジタルエネルギーが形を成した。正体不明の影だった。",
						"chinese": "巨大的数字能量形成了形体。那是一个身份不明的影子。",
						"french": "Une immense énergie numérique prit forme. C'était une ombre inconnue.",
						"spanish": "Una vasta energía digital tomó forma. Era una sombra desconocida.",
						"vietnamese": "Năng lượng kỹ thuật số khổng lồ hình thành. Đó là một bóng tối vô danh.",
						"thai": "พลังงานดิจิทัลมหาศาลได้ก่อตัวขึ้น มันคือเงาปริศนา",
						"hindi": "विशाल डिजिटल ऊर्जा ने आकार लिया। यह एक अज्ञात छाया थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "오래된 질서를 깨뜨리려는 자인가.",
						"english": "One who seeks to shatter the old order?",
						"japanese": "古き秩序を打ち破ろうとする者か。",
						"chinese": "是意图打破旧秩序之人吗？",
						"french": "Celui qui cherche à briser l'ancien ordre ?",
						"spanish": "¿Eres el que busca romper el viejo orden?",
						"vietnamese": "Kẻ muốn phá vỡ trật tự cũ sao?",
						"thai": "ผู้ที่ต้องการทำลายระเบียบเก่าหรือ?",
						"hindi": "वह जो पुरानी व्यवस्था को तोड़ना चाहता है?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 팬텀이야? 왜 도시를 파괴하는 거야?",
						"english": "Are you Phantom? Why are you destroying the city?",
						"japanese": "お前がファントムか？なぜ都市を破壊する？",
						"chinese": "你就是幻影吗？为何要摧毁这座城市？",
						"french": "Tu es Phantom ? Pourquoi détruis-tu la ville ?",
						"spanish": "¿Eres Phantom? ¿Por qué destruyes la ciudad?",
						"vietnamese": "Ngươi là Phantom sao? Tại sao lại phá hủy thành phố?",
						"thai": "แกคือแฟนธอมหรือ? ทำไมถึงทำลายเมือง?",
						"hindi": "क्या तुम फैंटम हो? तुम शहर को क्यों नष्ट कर रहे हो?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "파괴가 아니다. 망각된 것을 되살릴 뿐.",
						"english": "Not destruction. Just revival of what's forgotten.",
						"japanese": "破壊ではない。ただ忘れ去られたものを蘇らせるだけだ。",
						"chinese": "这不是毁灭。只是唤醒被遗忘的事物。",
						"french": "Ce n'est pas de la destruction. Juste la renaissance de ce qui est oublié.",
						"spanish": "No es destrucción. Solo la resurrección de lo olvidado.",
						"vietnamese": "Không phải hủy diệt. Chỉ là hồi sinh những gì đã bị lãng quên.",
						"thai": "ไม่ใช่การทำลาย แค่ชุบชีวิตสิ่งที่ถูกลืมเลือน",
						"hindi": "विनाश नहीं। बस विस्मृत का पुनरुत्थान।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마!",
						"english": "Nonsense!",
						"japanese": "でたらめを言うな！",
						"chinese": "胡说八道！",
						"french": "N'importe quoi !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Đừng nói nhảm!",
						"thai": "ไร้สาระ!",
						"hindi": "बकवास!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카운트다운은 멈추지 않았다.",
			"도시는 과거의 유령에 갇혔고, 데이터는 비명을 질렀다.",
			"니아는 희망일까, 더 깊은 함정일까?",
			"팬텀의 조각난 기억들이 비극을 속삭였다.",
			"깨져가는 질서 속에서, 우리는 어디로 가야 하는가."
		],
		"english": [
			"The countdown continued.",
			"The city was trapped by ghosts of the past, and data screamed.",
			"Is Nia hope, or a deeper trap?",
			"Phantom's fragmented memories whispered tragedy.",
			"In this crumbling order, where do we go?"
		],
		"japanese": [
			"カウントダウンは止まらなかった。",
			"都市は過去の亡霊に囚われ、データは叫び声を上げた。",
			"ニアは希望か、それともより深い罠か？",
			"ファントムの断片的な記憶が悲劇を囁いた。",
			"崩壊する秩序の中で、我々はどこへ行くべきか。"
		],
		"chinese": [
			"倒计时仍在继续。",
			"城市被困于过去的幽灵，数据在尖叫。",
			"妮亚是希望，还是更深的陷阱？",
			"幻影破碎的记忆低语着悲剧。",
			"在这崩塌的秩序中，我们该何去何从。"
		],
		"french": [
			"Le compte à rebours ne s'est pas arrêté.",
			"La ville était piégée par les fantômes du passé, et les données hurlaient.",
			"Nia est-elle un espoir, ou un piège plus profond ?",
			"Les souvenirs fragmentés du Fantôme murmuraient la tragédie.",
			"Dans cet ordre qui s'effondre, où devons-nous aller ?"
		],
		"spanish": [
			"La cuenta regresiva no se detuvo.",
			"La ciudad estaba atrapada por fantasmas del pasado, y los datos gritaban.",
			"Es Nia esperanza, o una trampa más profunda?",
			"Los recuerdos fragmentados de Phantom susurraban tragedia.",
			"En este orden desmoronándose, ¿a dónde vamos?"
		],
		"vietnamese": [
			"Đồng hồ đếm ngược không ngừng lại.",
			"Thành phố bị mắc kẹt bởi bóng ma quá khứ, và dữ liệu gào thét.",
			"Nia là hy vọng, hay một cái bẫy sâu hơn?",
			"Ký ức vụn vỡ của Phantom thì thầm bi kịch.",
			"Trong trật tự đang sụp đổ này, chúng ta phải đi đâu?"
		],
		"thai": [
			"การนับถอยหลังไม่หยุดลง",
			"เมืองถูกขังโดยวิญญาณจากอดีต ข้อมูลกรีดร้อง",
			"เนียคือความหวัง หรือกับดักที่ลึกกว่ากัน?",
			"ความทรงจำที่แตกสลายของแฟนธอมกระซิบถึงโศกนาฏกรรม",
			"ในความไร้ระเบียบที่กำลังพังทลาย เราจะไปที่ไหนดี?"
		],
		"hindi": [
			"उलटी गिनती जारी रही।",
			"शहर अतीत के भूतों में फंसा था, और डेटा चीख रहा था।",
			"निया आशा है, या एक गहरा जाल?",
			"फैंटम की खंडित यादें त्रासदी फुसफुसा रही थीं।",
			"इस बिखरती व्यवस्था में, हम कहाँ जाएँ?"
		]
	}
} as const;
