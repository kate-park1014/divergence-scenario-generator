export const scenario_modern_mrkjang_79_02 = {
	"scenario_id": "modern_mrkjang_79_02",
	"order": 2,
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Mr. K-jang의 편의점 창고는 유통기한 지난 상품들로 가득했다.",
						"english": "Mr. K-jang's convenience store warehouse was full of expired goods.",
						"japanese": "Kジャン氏のコンビニ倉庫は、賞味期限切れの商品でいっぱいだった。",
						"chinese": "K张先生的便利店仓库里堆满了过期商品。",
						"french": "L'entrepôt du dépanneur de M. K-jang était rempli de produits périmés.",
						"spanish": "El almacén de la tienda de conveniencia del Sr. K-jang estaba lleno de productos caducados.",
						"vietnamese": "Kho hàng của cửa hàng tiện lợi ông K-jang đầy ắp hàng quá hạn sử dụng.",
						"thai": "คลังสินค้าของร้านสะดวกซื้อคุณ K-jang เต็มไปด้วยสินค้าหมดอายุ",
						"hindi": "मिस्टर के-जांग के सुविधा स्टोर का गोदामexpired सामानों से भरा था।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 많은 재고를 어떻게 다 처리한담…",
						"english": "How am I going to deal with all this inventory...",
						"japanese": "この大量の在庫、どう処理するんだ…",
						"chinese": "这么多库存该怎么处理啊…",
						"french": "Comment vais-je gérer tout cet inventaire...",
						"spanish": "¿Cómo voy a lidiar con todo este inventario...?",
						"vietnamese": "Làm sao mà xử lý hết đống hàng tồn kho này đây…",
						"thai": "จะจัดการกับสต็อกสินค้ามากมายนี้ยังไงดีนะ...",
						"hindi": "मैं इस सारे इन्वेंट्री से कैसे निपटूं..."
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…이게 뭐야?",
						"english": "...What's this?",
						"japanese": "…これ、何だ？",
						"chinese": "…这是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "...Cái gì đây?",
						"thai": "...นี่อะไรน่ะ?",
						"hindi": "...यह क्या है?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유통기한 지난 상품들 틈새, 낡은 스프레드시트 인쇄물이 끼워져 있었다.",
						"english": "Tucked between the expired goods was an old spreadsheet printout.",
						"japanese": "賞味期限切れの商品と商品の隙間に、古いスプレッドシートの印刷物が挟まっていた。",
						"chinese": "在过期商品之间，夹着一张旧的电子表格打印件。",
						"french": "Entre les produits périmés, une vieille impression de feuille de calcul était glissée.",
						"spanish": "Entre los productos caducados, había una vieja impresión de hoja de cálculo.",
						"vietnamese": "Giữa những món hàng quá hạn, có kẹp một bản in bảng tính cũ kỹ.",
						"thai": "มีเอกสารสเปรดชีตเก่าๆ ซ่อนอยู่ท่ามกลางสินค้าหมดอายุ",
						"hindi": "एक्सपायर्ड सामानों के बीच, एक पुरानी स्प्रेडशीट की प्रिंटआउट फँसी हुई थी।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이건… 단순한 재고 목록이 아니야.",
						"english": "This is... no mere inventory list.",
						"japanese": "これは…単なる在庫リストじゃない。",
						"chinese": "这…不是简单的库存清单。",
						"french": "Ceci... n'est pas une simple liste d'inventaire.",
						"spanish": "Esto... no es una simple lista de inventario.",
						"vietnamese": "Đây… không phải là danh sách hàng tồn kho đơn thuần.",
						"thai": "นี่...ไม่ใช่แค่รายการสินค้าคงคลังธรรมดา",
						"hindi": "यह... सिर्फ एक इन्वेंट्री सूची नहीं है।"
					}
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
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "수상한 글씨체, 불규칙한 숫자… Mr. K-jang이 만들었을 리 없어.",
						"english": "Suspicious handwriting, irregular numbers... Mr. K-jang couldn't have made this.",
						"japanese": "怪しい筆跡、不規則な数字…Kジャン氏が作ったはずがない。",
						"chinese": "可疑的笔迹，不规则的数字…K张先生不可能做出来的。",
						"french": "Une écriture suspecte, des chiffres irréguliers… M. K-jang n'aurait pas pu faire ça.",
						"spanish": "Letra sospechosa, números irregulares... El Sr. K-jang no pudo haber hecho esto.",
						"vietnamese": "Chữ viết đáng ngờ, số liệu bất thường… Ông K-jang không thể nào là người đã tạo ra nó.",
						"thai": "ลายมือต้องสงสัย ตัวเลขไม่ปกติ... คุณ K-jang ไม่น่าจะเป็นคนทำสิ่งนี้",
						"hindi": "संदिग्ध लिखावट, अनियमित संख्याएँ... मिस्टर के-जांग ने इसे नहीं बनाया होगा।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 누가 이랬다는 거야?",
						"english": "Then who did this?",
						"japanese": "では、誰がこんなことを？",
						"chinese": "那这是谁做的？",
						"french": "Alors, qui a fait ça ?",
						"spanish": "¿Entonces quién hizo esto?",
						"vietnamese": "Vậy ai đã làm điều này?",
						"thai": "แล้วใครเป็นคนทำ?",
						"hindi": "तो यह किसने किया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 도시에 '정산 기간'이라는 소문이 돌고 있어. 이 장부랑… 관련이 있을 거야.",
						"english": "Rumors of a 'Settlement Period' are swirling in the city. It must be connected to this ledger...",
						"japanese": "この街では『清算期間』という噂が流れている。この帳簿と…関係があるはずだ。",
						"chinese": "城里有传言说，现在是‘清算期’。这应该和这本账簿…有关。",
						"french": "Des rumeurs de 'Période de Règlement' circulent en ville. Cela doit être lié à ce registre…",
						"spanish": "Corre el rumor en la ciudad sobre un 'Período de Liquidación'. Debe estar relacionado con este libro…",
						"vietnamese": "Có tin đồn về 'Thời kỳ Thanh toán' đang lan truyền trong thành phố. Nó chắc chắn có liên quan đến cuốn sổ này…",
						"thai": "มีข่าวลือเรื่อง 'ช่วงเวลาชำระบัญชี' กำลังแพร่สะพัดในเมือง ต้องเกี่ยวข้องกับสมุดบัญชีนี้แน่…",
						"hindi": "शहर में 'निपटान अवधि' नाम की अफवाह फैल रही है। इसका इस बहीखाते से… संबंध होगा।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "정산 기간? 그게 뭔데?",
						"english": "'Settlement Period'? What's that?",
						"japanese": "清算期間？それは何だ？",
						"chinese": "清算期？那是什么？",
						"french": "Période de Règlement ? Qu'est-ce que c'est ?",
						"spanish": "¿Período de Liquidación? ¿Qué es eso?",
						"vietnamese": "Thời kỳ Thanh toán? Đó là gì vậy?",
						"thai": "ช่วงเวลาชำระบัญชี? มันคืออะไร?",
						"hindi": "निपटान अवधि? वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "정체불명의 빚을 청구하는… 가혹한 시간.",
						"english": "A cruel time… demanding payment for unknown debts.",
						"japanese": "正体不明の借金を請求される…過酷な時。",
						"chinese": "一个清算不明债务的…严酷时期。",
						"french": "Une période cruelle… où l'on réclame des dettes inconnues.",
						"spanish": "Un tiempo cruel… donde se exigen deudas desconocidas.",
						"vietnamese": "Một thời gian khắc nghiệt… đòi hỏi những khoản nợ không rõ danh tính.",
						"thai": "ช่วงเวลาอันโหดร้าย… ที่เรียกเก็บหนี้สินที่ไม่รู้จัก.",
						"hindi": "अज्ञात ऋणों का दावा करने वाला… एक कठोर समय।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kai",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 장부는 진실을 숨기고 있어. 더 깊이 파고들어야 해.",
						"english": "This ledger hides the truth. We need to dig deeper.",
						"japanese": "この帳簿は真実を隠している。もっと深く掘り下げる必要がある。",
						"chinese": "这本账簿隐藏着真相。我们必须深入挖掘。",
						"french": "Ce registre cache la vérité. Nous devons creuser plus profondément.",
						"spanish": "Este libro oculta la verdad. Necesitamos investigar más a fondo.",
						"vietnamese": "Cuốn sổ này đang che giấu sự thật. Chúng ta cần đào sâu hơn nữa.",
						"thai": "สมุดบัญชีนี้ซ่อนความจริงอยู่ เราต้องเจาะลึกเข้าไปอีก.",
						"hindi": "यह बहीखाता सच छुपा रहा है। हमें और गहराई से पड़ताल करनी होगी।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실이라니…?",
						"english": "The truth…?",
						"japanese": "真実…だと？",
						"chinese": "真相…？",
						"french": "La vérité… ?",
						"spanish": "¿La verdad…?",
						"vietnamese": "Sự thật sao…?",
						"thai": "ความจริง…?",
						"hindi": "सच…?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "보통의 재고 목록 같지만, 글씨체가 미묘하게 다르지 않아? 뭔가 의도된 거야.",
						"english": "It looks like a normal inventory, but isn't the handwriting subtly different? It's intentional.",
						"japanese": "普通の在庫リストに見えるが、筆跡が微妙に違わないか？何らかの意図がある。",
						"chinese": "看起来像是普通的库存清单，但字迹是不是有些细微的不同？这是刻意为之的。",
						"french": "On dirait un inventaire ordinaire, mais l'écriture n'est-elle pas subtilement différente ? C'est intentionnel.",
						"spanish": "Parece una lista de inventario normal, pero ¿no es la letra sutilmente diferente? Hay una intención detrás.",
						"vietnamese": "Trông như một danh sách hàng tồn kho bình thường, nhưng nét chữ không khác biệt một cách tinh tế sao? Có ý đồ gì đó.",
						"thai": "ดูเหมือนรายการสินค้าคงคลังปกติ แต่ลายมือมันต่างกันเล็กน้อยไม่ใช่เหรอ? มันต้องมีเจตนาบางอย่าง.",
						"hindi": "यह सामान्य स्टॉक सूची जैसा लगता है, लेकिन क्या लिखावट थोड़ी अलग नहीं है? यह जानबूझकर किया गया है।"
					}
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시간이 없어. 정산의 그림자가… 점점 도시를 잠식하고 있어.",
						"english": "No time. The shadow of the Settlement… is slowly engulfing the city.",
						"japanese": "時間がない。清算の影が…徐々に街を蝕んでいる。",
						"chinese": "没时间了。清算的阴影…正逐渐吞噬着城市。",
						"french": "Plus le temps. L'ombre du Règlement… engloutit lentement la ville.",
						"spanish": "No hay tiempo. La sombra de la Liquidación… está devorando lentamente la ciudad.",
						"vietnamese": "Không còn thời gian nữa. Bóng ma của sự thanh toán… đang dần xâm chiếm thành phố.",
						"thai": "ไม่มีเวลาแล้ว เงาของการชำระบัญชี… กำลังกลืนกินเมืองไปเรื่อยๆ.",
						"hindi": "समय नहीं है। निपटान की छाया… धीरे-धीरे शहर को निगल रही है।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가 뭘 해야 하는데…?",
						"english": "What are we supposed to do…?",
						"japanese": "我々はどうすれば…？",
						"chinese": "我们该怎么办…？",
						"french": "Que devons-nous faire… ?",
						"spanish": "¿Qué se supone que debemos hacer…?",
						"vietnamese": "Chúng ta phải làm gì…?",
						"thai": "แล้วเราต้องทำอะไร…?",
						"hindi": "हमें क्या करना चाहिए…?"
					}
				},
				{
					"content": {
						"korean": "이 장부의 진짜 의미를 찾아야 해. 그게 핵심이야.",
						"english": "We need to find the true meaning of this ledger. That's the key.",
						"japanese": "この帳簿の本当の意味を見つけなければならない。それが核心だ。",
						"chinese": "我们必须找出这本账簿的真正含义。那才是关键。",
						"french": "Nous devons trouver la vraie signification de ce registre. C'est ça, la clé.",
						"spanish": "Necesitamos encontrar el verdadero significado de este libro. Esa es la clave.",
						"vietnamese": "Chúng ta phải tìm ra ý nghĩa thực sự của cuốn sổ này. Đó là mấu chốt.",
						"thai": "เราต้องค้นหาความหมายที่แท้จริงของสมุดบัญชีนี้ นั่นแหละคือหัวใจสำคัญ.",
						"hindi": "हमें इस बहीखाते का असली अर्थ खोजना होगा। वही मुख्य बात है।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "kai",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "어두운 골목, 거대한 그림자가 앞을 막아섰다.",
						"english": "Dark alley. A giant shadow blocks the path.",
						"japanese": "暗い路地、巨大な影が道を塞いだ。",
						"chinese": "昏暗的巷子里，一道巨大的身影挡住了去路。",
						"french": "Une ruelle sombre. Une ombre gigantesque barra le chemin.",
						"spanish": "Un callejón oscuro. Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Con hẻm tối. Một cái bóng khổng lồ chắn lối.",
						"thai": "ตรอกมืดมิด เงาร่างมหึมาขวางทาง",
						"hindi": "अंधेरी गली, एक विशाल छाया ने रास्ता रोक लिया।"
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
						"korean": "감히… 장부를 뒤지려 하는가?",
						"english": "You dare... tamper with the ledger?",
						"japanese": "まさか…帳簿をあさる気か？",
						"chinese": "你竟敢…翻查账簿？",
						"french": "Oserez-vous… fouiller le grand livre ?",
						"spanish": "¿Osas… hurgar en el libro de cuentas?",
						"vietnamese": "Dám... lục soát sổ sách sao?",
						"thai": "กล้า... ค้นหาบัญชีหรือ?",
						"hindi": "हिम्मत कैसे हुई… बही-खाता खंगालने की?"
					}
				},
				{
					"content": {
						"korean": "누구냐! 비켜!",
						"english": "Who are you! Get aside!",
						"japanese": "誰だ！退け！",
						"chinese": "谁！让开！",
						"french": "Qui êtes-vous ! Écartez-vous !",
						"spanish": "¡Quién eres! ¡Aparta!",
						"vietnamese": "Ai đó! Tránh ra!",
						"thai": "ใคร! หลีกไป!",
						"hindi": "कौन हो तुम! हट जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나는 빚의 관리자. 모든 것을 정산할 시간이다.",
						"english": "I am the Debt Administrator. Time to settle everything.",
						"japanese": "私は借りの管理者。すべてを精算する時が来た。",
						"chinese": "我是债务管理者。是时候清算一切了。",
						"french": "Je suis le Gestionnaire des Dettes. L'heure est venue de tout régler.",
						"spanish": "Soy el Administrador de Deudas. Es hora de saldarlo todo.",
						"vietnamese": "Ta là Người quản lý nợ. Đã đến lúc thanh toán mọi thứ.",
						"thai": "ข้าคือผู้จัดการหนี้ ถึงเวลาสะสางทุกสิ่ง",
						"hindi": "मैं ऋणों का प्रबंधक हूँ। अब सब कुछ चुकाने का समय है।"
					}
				},
				{
					"content": {
						"korean": "조심해! 이건… 이 장부의 수호자야!",
						"english": "Be careful! This is... the guardian of this ledger!",
						"japanese": "気をつけろ！これは…この帳簿の守護者だ！",
						"chinese": "小心！这是…这账簿的守护者！",
						"french": "Attention ! C'est… le gardien de ce grand livre !",
						"spanish": "¡Cuidado! ¡Es… el guardián de este libro de cuentas!",
						"vietnamese": "Cẩn thận! Đây là... người bảo vệ cuốn sổ này!",
						"thai": "ระวัง! นี่คือ... ผู้พิทักษ์บัญชีเล่มนี้!",
						"hindi": "सावधान! यह… इस बही-खाते का संरक्षक है!"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 9,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "빚은… 늘어날 뿐. 도망칠 수 없다.",
						"english": "Debt... only grows. There's no escape.",
						"japanese": "借りは…増えるばかり。逃れられない。",
						"chinese": "债务…只会增加。无法逃脱。",
						"french": "La dette… ne fait que croître. Impossible d'y échapper.",
						"spanish": "La deuda… solo crece. No hay escapatoria.",
						"vietnamese": "Nợ nần... chỉ có tăng lên. Không thể thoát khỏi.",
						"thai": "หนี้สิน... มีแต่เพิ่มพูน หนีไม่พ้น",
						"hindi": "ऋण… बस बढ़ता ही जाएगा। बच नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそ…まだ終わってない！",
						"chinese": "该死…还没结束！",
						"french": "Mince… ce n'est pas encore fini !",
						"spanish": "¡Maldita sea… aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "บ้าจริง... ยังไม่จบ!",
						"hindi": "धिक्कार है… यह अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다시 도전해야 해. 진실은… 저 너머에 있어.",
						"english": "You must challenge again. The truth… lies beyond.",
						"japanese": "再び挑戦しなければならない。真実は…その先に。",
						"chinese": "必须再次挑战。真相…就在那一边。",
						"french": "Il faut retenter. La vérité… est au-delà.",
						"spanish": "Debes volver a intentarlo. La verdad… está más allá.",
						"vietnamese": "Phải thử thách lại. Sự thật… nằm ở phía bên kia.",
						"thai": "ต้องท้าทายอีกครั้ง ความจริง… อยู่ที่นั่น.",
						"hindi": "तुम्हें फिर से कोशिश करनी होगी। सच… उस पार है।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 스러졌다. 그러나 빚의 그림자는 여전했다.",
						"english": "The giant shadow fell. But the shadow of debt remained.",
						"japanese": "巨大な影は消えた。しかし、借りの影は依然として残っていた。",
						"chinese": "巨大的身影倒下了。然而，债务的阴影依然存在。",
						"french": "L'ombre gigantesque tomba. Mais l'ombre de la dette demeurait.",
						"spanish": "La sombra gigantesca cayó. Pero la sombra de la deuda persistía.",
						"vietnamese": "Cái bóng khổng lồ sụp đổ. Nhưng bóng tối của nợ nần vẫn còn đó.",
						"thai": "เงาร่างมหึมาล้มลง ทว่าเงาแห่งหนี้สินยังคงอยู่",
						"hindi": "विशाल छाया ढह गई। लेकिन ऋण की छाया अभी भी बनी हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 끝이 아니라는 거지.",
						"english": "So, this isn't over.",
						"japanese": "これが終わりじゃないってことか。",
						"chinese": "看来这还没完。",
						"french": "Ce n'est pas la fin, n'est-ce pas ?",
						"spanish": "Esto no es el final, ¿verdad?",
						"vietnamese": "Vậy ra đây không phải là kết thúc.",
						"thai": "นี่ไม่ใช่จุดจบสินะ",
						"hindi": "तो, यह अंत नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 갈 길이 멀어. 진짜 장부는… 더 깊은 곳에 숨겨져 있어.",
						"english": "Still a long way to go. The real ledger... is hidden deeper.",
						"japanese": "まだ先は長い。本当の帳簿は…もっと奥に隠されている。",
						"chinese": "还有很长的路要走。真正的账簿…藏在更深的地方。",
						"french": "Il y a encore un long chemin à parcourir. Le vrai grand livre… est caché plus profondément.",
						"spanish": "Aún queda mucho camino. El verdadero libro de cuentas… está oculto más profundo.",
						"vietnamese": "Vẫn còn một chặng đường dài. Cuốn sổ thật... được giấu sâu hơn nữa.",
						"thai": "ยังอีกยาวไกล บัญชีที่แท้จริง... ซ่อนอยู่ในที่ลึกกว่านี้",
						"hindi": "अभी बहुत लंबा रास्ता तय करना है। असली बही-खाता… और गहराई में छिपा है।"
					},
					"emotion": "base",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "붉은 빛이 꺼지고, 장부의 마지막 페이지가 너덜거렸다.",
						"english": "The red light faded, and the last page of the ledger was tattered.",
						"japanese": "赤い光が消え、帳簿の最後のページがぼろぼろになった。",
						"chinese": "红光熄灭，账簿的最后一页破烂不堪。",
						"french": "La lumière rouge s'éteignit, et la dernière page du registre était déchirée.",
						"spanish": "La luz roja se apagó y la última página del libro de contabilidad estaba destrozada.",
						"vietnamese": "Ánh sáng đỏ tắt dần, trang cuối cùng của cuốn sổ bị rách nát.",
						"thai": "แสงสีแดงดับลง หน้าสุดท้ายของสมุดบัญชีก็ขาดรุ่งริ่ง.",
						"hindi": "लाल बत्ती बुझ गई, और बहीखाते का आखिरी पन्ना फटा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…하지만… 빚은… 사라지지 않아.",
						"english": "...But... the debt... doesn't disappear.",
						"japanese": "…しかし…借金は…消えない。",
						"chinese": "…但是…债务…不会消失。",
						"french": "...Mais... la dette... ne disparaît pas.",
						"spanish": "...Pero... la deuda... no desaparece.",
						"vietnamese": "…Nhưng… món nợ… không biến mất.",
						"thai": "...แต่...หนี้...ไม่หายไป.",
						"hindi": "...लेकिन...कर्ज...गायब नहीं होता।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "คุณพูดอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해. 진짜 빚은… Mr. K-jang의 마음속에.",
						"english": "This is just the beginning. The real debt… is in Mr. K-jang's heart.",
						"japanese": "これは始まりに過ぎない。本当の借金は…Kジャンさんの心の中に。",
						"chinese": "这只是开始。真正的债务…在K-jang先生的心中。",
						"french": "Ce n'est que le début. La vraie dette… est dans le cœur de M. K-jang.",
						"spanish": "Esto es solo el principio. La verdadera deuda… está en el corazón del Sr. K-jang.",
						"vietnamese": "Đây chỉ là khởi đầu. Món nợ thực sự… nằm trong trái tim của ông K-jang.",
						"thai": "นี่เป็นแค่จุดเริ่มต้น หนี้ที่แท้จริง...อยู่ในใจของ Mr. K-jang.",
						"hindi": "यह तो बस शुरुआत है। असली कर्ज… मिस्टर के-जांग के दिल में है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 전체에 알 수 없는 초조함이 퍼져나갔다. 정산 기간의 카운트다운은 계속되었다.",
						"english": "An unknown anxiety spread throughout the city. The countdown to the settlement period continued.",
						"japanese": "都市全体に未知の焦燥感が広まった。精算期間へのカウントダウンは続いた。",
						"chinese": "一种莫名的焦躁感蔓延了整个城市。结算期的倒计时仍在继续。",
						"french": "Une anxiété inconnue se répandit dans toute la ville. Le compte à rebours de la période de règlement continua.",
						"spanish": "Una ansiedad desconocida se extendió por toda la ciudad. La cuenta atrás para el período de liquidación continuó.",
						"vietnamese": "Một sự lo lắng không tên lan khắp thành phố. Cuộc đếm ngược đến kỳ thanh toán vẫn tiếp diễn.",
						"thai": "ความกังวลที่ไม่รู้จักแพร่กระจายไปทั่วทั้งเมือง การนับถอยหลังสู่ช่วงเวลาการชำระบัญชียังคงดำเนินต่อไป.",
						"hindi": "शहर भर में एक अज्ञात बेचैनी फैल गई। हिसाब-किताब की अवधि का उलटी गिनती जारी रही।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네게도 갚을 빚이 있군. 모든 것을 잃게 될 것이다.",
						"english": "You owe a debt. You will lose everything.",
						"japanese": "お前にも報いがある。全てを失うだろう。",
						"chinese": "你也有债要还。你将失去一切。",
						"french": "Tu as une dette. Tu perdras tout.",
						"spanish": "Tienes una deuda. Lo perderás todo.",
						"vietnamese": "Ngươi cũng có nợ phải trả. Ngươi sẽ mất tất cả.",
						"thai": "เจ้าก็มีหนี้ที่ต้องชดใช้ เจ้าจะสูญเสียทุกสิ่ง",
						"hindi": "तुम्हारा भी कर्ज है। तुम सब कुछ खो दोगे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Pas encore… Ce n'est pas fini !",
						"spanish": "Aún no… ¡No ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"content": {
						"korean": "다시 일어서야 해. 이 도시는… 너희를 기다리고 있어.",
						"english": "You must rise again. This city... awaits you.",
						"japanese": "再び立ち上がらねば。この街が… お前たちを待っている。",
						"chinese": "必须再次站起来。这座城市… 正在等待着你们。",
						"french": "Il faut se relever. Cette ville… vous attend.",
						"spanish": "Deben levantarse de nuevo. Esta ciudad... los espera.",
						"vietnamese": "Phải đứng dậy một lần nữa. Thành phố này… đang đợi các ngươi.",
						"thai": "ต้องลุกขึ้นยืนอีกครั้ง เมืองนี้… กำลังรอพวกเจ้าอยู่",
						"hindi": "तुम्हें फिर से उठना होगा। यह शहर… तुम्हारा इंतजार कर रहा है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "편의점 가장 깊숙한 곳, 낡은 장부 위로 붉은 빛이 일렁였다.",
						"english": "In the deepest part of the convenience store, a red light flickered over an old ledger.",
						"japanese": "コンビニの最も奥深く、古びた帳簿の上に赤い光が揺らめいた。",
						"chinese": "在便利店最深处，红光在旧账簿上闪烁。",
						"french": "Au plus profond du dépanneur, une lumière rouge vacillait sur un vieux registre.",
						"spanish": "En lo más profundo de la tienda de conveniencia, una luz roja parpadeó sobre un viejo libro de contabilidad.",
						"vietnamese": "Ở nơi sâu nhất của cửa hàng tiện lợi, ánh sáng đỏ lấp lánh trên một cuốn sổ cũ.",
						"thai": "ในส่วนที่ลึกที่สุดของร้านสะดวกซื้อ แสงสีแดงส่องระยิบระยับบนสมุดบัญชีเก่า",
						"hindi": "सुविधा स्टोर के सबसे गहरे हिस्से में, एक लाल बत्ती एक पुरानी बहीखाते पर झिलमिला रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "정산의 시간이 다가왔다. 너희도 예외는 아니다.",
						"english": "The time for reckoning has come. None of you are an exception.",
						"japanese": "精算の時が来た。お前たちも例外ではない。",
						"chinese": "结算时间到了。你们也概莫能外。",
						"french": "L'heure du règlement est venue. Vous n'êtes pas une exception.",
						"spanish": "Ha llegado la hora de la verdad. Vosotros tampoco sois la excepción.",
						"vietnamese": "Thời khắc thanh toán đã đến. Các ngươi cũng không phải ngoại lệ.",
						"thai": "เวลาชำระบัญชีมาถึงแล้ว พวกเจ้าก็ไม่มีข้อยกเว้น.",
						"hindi": "हिसाब-किताब का समय आ गया है। तुम भी अपवाद नहीं हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "비켜! 우린 진실을 알아야겠어!",
						"english": "Get out of the way! We need to know the truth!",
						"japanese": "どけ！私たちは真実を知る必要がある！",
						"chinese": "让开！我们必须知道真相！",
						"french": "Poussez-vous ! Nous devons connaître la vérité !",
						"spanish": "¡Apártate! ¡Necesitamos saber la verdad!",
						"vietnamese": "Tránh ra! Chúng ta cần biết sự thật!",
						"thai": "หลีกไป! เราต้องรู้ความจริง!",
						"hindi": "हट जाओ! हमें सच जानना होगा!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이자는 눈덩이처럼 불어날 거야. 막아야 해!",
						"english": "The interest will snowball. We must stop it!",
						"japanese": "利息は雪だるま式に増えるだろう。止めなければ！",
						"chinese": "利息会像滚雪球一样增长。必须阻止它！",
						"french": "Les intérêts vont s'accumuler comme une boule de neige. Il faut l'arrêter !",
						"spanish": "Los intereses crecerán como una bola de nieve. ¡Debemos detenerlo!",
						"vietnamese": "Lãi suất sẽ tăng lên như tuyết lăn. Phải ngăn chặn nó!",
						"thai": "ดอกเบี้ยจะเพิ่มพูนเหมือนลูกบอลหิมะ เราต้องหยุดมัน!",
						"hindi": "ब्याज हिमखंड की तरह बढ़ता जाएगा। हमें इसे रोकना होगा!"
					},
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"회색 도시의 그림자, 빚이라는 이름의 거미줄.",
			"Mr. K-jang의 완벽한 장부 아래 숨겨진 진실을 파헤쳐야 한다.",
			"시간은 기다려주지 않는 카운트다운처럼 흐르고,",
			"가혹한 정산의 그림자가 도시 전체를 덮쳐오고 있었다."
		],
		"english": [
			"Shadows of a grey city, a web called debt.",
			"We must uncover the truth hidden beneath Mr. K-jang's perfect ledger.",
			"Time flows like a relentless countdown,",
			"the shadow of a harsh settlement loomed over the entire city."
		],
		"japanese": [
			"灰色の都市の影、借金という名の蜘蛛の巣。",
			"Kジャン氏の完璧な帳簿の下に隠された真実を暴かねばならない。",
			"時間は容赦ないカウントダウンのように流れ、",
			"過酷な精算の影が街全体を覆い尽くそうとしていた。"
		],
		"chinese": [
			"灰色都市的阴影，名为债务的蛛网。",
			"我们必须揭露隐藏在K张先生完美账本下的真相。",
			"时间如无情的倒计时般流逝，",
			"严酷清算的阴影笼罩着整个城市。"
		],
		"french": [
			"Les ombres d'une ville grise, une toile appelée dette.",
			"Nous devons découvrir la vérité cachée sous le grand livre parfait de M. K-jang.",
			"Le temps s'écoule comme un compte à rebours impitoyable,",
			"l'ombre d'un règlement draconien planait sur toute la ville."
		],
		"spanish": [
			"Sombras de una ciudad gris, una red llamada deuda.",
			"Debemos descubrir la verdad oculta bajo el perfecto libro de contabilidad del Sr. K-jang.",
			"El tiempo fluye como una cuenta regresiva implacable,",
			"la sombra de una dura liquidación se cernía sobre toda la ciudad."
		],
		"vietnamese": [
			"Bóng tối thành phố xám, mạng nhện mang tên nợ nần.",
			"Chúng ta phải khám phá sự thật ẩn giấu dưới sổ sách hoàn hảo của ông K-jang.",
			"Thời gian trôi đi như một cuộc đếm ngược không ngừng nghỉ,",
			"bóng ma thanh toán khắc nghiệt đang bao trùm toàn thành phố."
		],
		"thai": [
			"เงาของเมืองสีเทา, ใยแมงมุมที่ชื่อว่าหนี้.",
			"เราต้องเปิดเผยความจริงที่ซ่อนอยู่ใต้บัญชีที่สมบูรณ์แบบของคุณ K-jang.",
			"เวลาไหลไปเหมือนการนับถอยหลังที่ไม่รอใคร,",
			"เงาของการชำระหนี้อันโหดร้ายกำลังปกคลุมไปทั่วเมือง"
		],
		"hindi": [
			"एक धूसर शहर की परछाई, कर्ज नामक मकड़जाल।",
			"हमें मिस्टर के-जांग के उत्तम खाते के नीचे छिपी सच्चाई को उजागर करना होगा।",
			"समय एक अथक उलटी गिनती की तरह बह रहा है,",
			"एक कठोर निपटान की छाया पूरे शहर पर छा रही थी।"
		]
	}
} as const;
