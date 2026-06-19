export const scenario_modern_kjang_14_05 = {
	"scenario_id": "modern_kjang_14_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"ren": {
			"id": "mon_ff398cb9-43e1-44ff-acbe-3d45a3bc6997",
			"name": {
				"korean": "렌",
				"english": "Ren",
				"japanese": "レン",
				"chinese": "仁",
				"french": "Ren",
				"spanish": "Ren",
				"vietnamese": "Ren",
				"thai": "เร็น",
				"hindi": "रेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/147a5f29-8f8d-4531-cc9b-f86c9f45f000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d88aa7-877f-43e6-919b-ee77e6c58e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_Spreadsheet_Accountant_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "편의점의 낡은 계산대. K-jang의 손에 쥐어진 서류철이 열렸다.",
						"english": "The convenience store's old counter. The binder in K-jang's hand opened.",
						"japanese": "コンビニの古いレジ。K-jangの手に握られたファイルが開かれた。",
						"chinese": "便利店的旧收银台。K-jang手中的文件夹打开了。",
						"french": "Le vieux comptoir de la supérette. Le classeur dans la main de K-jang s'ouvrit.",
						"spanish": "El viejo mostrador de la tienda de conveniencia. El archivador en la mano de K-jang se abrió.",
						"vietnamese": "Quầy tính tiền cũ của cửa hàng tiện lợi. Tập tài liệu trong tay K-jang mở ra.",
						"thai": "เคาน์เตอร์เก่าของร้านสะดวกซื้อ แฟ้มในมือของ K-jang เปิดออก.",
						"hindi": "सुविधा स्टोर का पुराना काउंटर। के-जांग के हाथ में रखा फाइल खुल गया।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자네들이… 내 ‘매출’에 손을 대다니. 젠장, 재고가 안 맞아!",
						"english": "You… you touched my 'sales'! Damn it, the inventory doesn't match!",
						"japanese": "お前たちが… 私の『売上』に手を出すとは。ちくしょう、在庫が合わない！",
						"chinese": "你们… 竟敢动我的‘销售额’。该死，库存对不上！",
						"french": "Vous… vous avez touché à mes 'ventes' ! Bon sang, l'inventaire ne correspond pas !",
						"spanish": "¡Vosotros… habéis tocado mis 'ventas'! Maldita sea, ¡el inventario no cuadra!",
						"vietnamese": "Các ngươi… dám động vào 'doanh thu' của ta. Chết tiệt, tồn kho không khớp!",
						"thai": "พวกแก… บังอาจแตะต้อง 'ยอดขาย' ของฉัน! บ้าจริง, สต็อกไม่ตรง!",
						"hindi": "तुम लोगों ने… मेरी 'बिक्री' को हाथ लगाया। धत् तेरे की, इन्वेंटरी मेल नहीं खा रही!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 장부의 조화를 깨뜨린 대가는… ‘미수금’으로 처리될 걸세.",
						"english": "The price for disrupting the harmony of my ledger… will be treated as 'accounts receivable'.",
						"japanese": "私の帳簿の調和を乱した代償は… 『未収金』として処理されるだろう。",
						"chinese": "破坏我账簿平衡的代价… 将作为‘应收账款’处理。",
						"french": "Le prix à payer pour avoir brisé l'équilibre de mon registre… sera traité comme des 'créances'.",
						"spanish": "El precio por alterar la armonía de mi libro… se tratará como 'cuentas por cobrar'.",
						"vietnamese": "Cái giá phải trả vì phá vỡ sự cân bằng trong sổ sách của ta… sẽ được coi là 'khoản phải thu'.",
						"thai": "ค่าเสียหายที่ทำลายความสมดุลของบัญชีฉัน… จะถูกจัดการในฐานะ 'ลูกหนี้การค้า'.",
						"hindi": "मेरे बहीखाते की समरसता भंग करने की कीमत… 'प्राप्य खातों' के रूप में मानी जाएगी।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…이게 뭐야. 단순한 재고 목록이 아니잖아.",
						"english": "…What is this? This isn't just a simple inventory list.",
						"japanese": "…これは何だ。ただの在庫リストじゃない。",
						"chinese": "…这是什么。这不仅仅是简单的库存清单。",
						"french": "…Qu'est-ce que c'est ? Ce n'est pas une simple liste d'inventaire.",
						"spanish": "…¿Qué es esto? No es una simple lista de inventario.",
						"vietnamese": "…Cái gì thế này. Đây không phải chỉ là một danh sách tồn kho đơn giản.",
						"thai": "…นี่มันอะไรกัน ไม่ใช่แค่รายการสินค้าคงคลังธรรมดาๆ นี่นา",
						"hindi": "…यह क्या है। यह सिर्फ एक साधारण इन्वेंटरी सूची नहीं है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "'삼일회'의 문양…! 이 장부는… 모든 불법 자금 흐름이야!",
						"english": "The emblem of the 'Sam-il Guild'…! This ledger… is all illegal money flow!",
						"japanese": "「サムイル会」の紋章…！この帳簿は… 全ての違法な資金の流れだ！",
						"chinese": "‘三日会’的纹章…！这账簿… 是所有的非法资金流向！",
						"french": "L'emblème de la 'Guilde Sam-il'…! Ce registre… c'est tout le flux d'argent illégal !",
						"spanish": "¡El emblema del 'Gremio Sam-il'! ¡Este libro… es todo el flujo de dinero ilegal!",
						"vietnamese": "Biểu tượng của 'Tam Nhật Hội'…! Cuốn sổ này… là tất cả các dòng tiền bất hợp pháp!",
						"thai": "ตราสัญลักษณ์ของ 'สามอิลฮเว'... ! บัญชีเล่มนี้... คือเส้นทางการเงินที่ผิดกฎหมายทั้งหมด!",
						"hindi": "'साम-इल गिल्ड' का प्रतीक…! यह बहीखाता… सभी अवैध धन का प्रवाह है!"
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
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "미수금은… 언제나 ‘강력하게’ 회수해야 하는 법이지.",
						"english": "Accounts receivable… must always be recovered 'forcefully'.",
						"japanese": "未収金は… いつだって『強力に』回収すべきものだ。",
						"chinese": "应收账款… 总是要‘强力’收回的。",
						"french": "Les créances… doivent toujours être recouvrées 'avec force'.",
						"spanish": "Las cuentas por cobrar… siempre deben recuperarse 'con firmeza'.",
						"vietnamese": "Các khoản phải thu… luôn phải được thu hồi 'một cách mạnh mẽ'.",
						"thai": "ลูกหนี้การค้า… จะต้องถูกทวงคืน 'อย่างแข็งกร้าว' เสมอ",
						"hindi": "प्राप्य खाते… हमेशा 'जोर-जबरदस्ती' से ही वसूले जाने चाहिए।"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나 K-jang은 '회계사'. 이 장부가 나의 질서다.",
						"english": "I, K-jang, am an 'accountant'. This ledger is my order.",
						"japanese": "私、K-jangは『会計士』だ。この帳簿が私の秩序だ。",
						"chinese": "我，K-jang，是‘会计师’。这账簿是我的秩序。",
						"french": "Moi, K-jang, je suis un 'comptable'. Ce registre est mon ordre.",
						"spanish": "Yo, K-jang, soy un 'contable'. Este libro es mi orden.",
						"vietnamese": "Tôi, K-jang, là một 'kế toán'. Cuốn sổ này là trật tự của tôi.",
						"thai": "ฉัน, K-jang, คือ 'นักบัญชี' สมุดบัญชีเล่มนี้คือระเบียบของฉัน",
						"hindi": "मैं, के-जांग, एक 'अकाउंटेंट' हूँ। यह बहीखाता ही मेरी व्यवस्था है।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "ren",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼… 편의점 알바생이 아니었어.",
						"english": "No way… he wasn't just a convenience store part-timer.",
						"japanese": "まさか… コンビニのバイトじゃなかったのか。",
						"chinese": "不可能… 他不是便利店的兼职生。",
						"french": "Impossible… ce n'était pas juste un employé de supérette.",
						"spanish": "Imposible… no era solo un dependiente de tienda.",
						"vietnamese": "Không thể nào… hắn không phải là nhân viên bán thời gian ở cửa hàng tiện lợi.",
						"thai": "ไม่จริงน่า... เขาไม่ใช่แค่พนักงานพาร์ทไทม์ร้านสะดวกซื้อ",
						"hindi": "नहीं हो सकता… वह सिर्फ एक सुविधा स्टोर का अंशकालिक कर्मचारी नहीं था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그동안… 우릴 속인 거야?",
						"english": "All this time… you've been deceiving us?",
						"japanese": "これまで… 私たちを騙していたのか？",
						"chinese": "这段时间… 你一直在欺骗我们？",
						"french": "Pendant tout ce temps… tu nous as trompés ?",
						"spanish": "Todo este tiempo… ¿nos has estado engañando?",
						"vietnamese": "Suốt thời gian qua… ngươi đã lừa dối chúng ta?",
						"thai": "ตลอดเวลาที่ผ่านมา... คุณหลอกพวกเรามาตลอดเหรอ?",
						"hindi": "इतने समय से… तुम हमें धोखा दे रहे थे?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "내 장부의 한 칸이라도 비면… 나는 잠들 수 없어.",
						"english": "If even one space in my ledger is empty… I cannot sleep.",
						"japanese": "私の帳簿に一行でも空きがあれば… 私は眠れない。",
						"chinese": "如果我的账簿哪怕有一格是空的… 我就无法入睡。",
						"french": "Si ne serait-ce qu'une seule case de mon registre est vide… je ne peux pas dormir.",
						"spanish": "Si incluso un solo espacio en mi libro está vacío… no puedo dormir.",
						"vietnamese": "Nếu dù chỉ một ô trong sổ sách của ta trống… ta không thể ngủ được.",
						"thai": "ถ้าบัญชีของฉันว่างเปล่าไปแม้แต่ช่องเดียว... ฉันก็หลับไม่ลง",
						"hindi": "अगर मेरे बहीखाते में एक भी जगह खाली होगी… तो मैं सो नहीं पाऊँगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "ren",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 복잡한 숫자들… '삼일회'의 검은돈 흐름이 그대로 녹아있어.",
						"english": "These complex numbers… perfectly encapsulate the 'Sam-il Guild's' black money flow.",
						"japanese": "この複雑な数字… 「サムイル会」の闇金の流れがそのまま溶け込んでいる。",
						"chinese": "这些复杂的数字… '三日会'的黑钱流向完全渗透其中。",
						"french": "Ces chiffres complexes… le flux d'argent sale de la 'Guilde Sam-il' y est entièrement intégré.",
						"spanish": "Estos números complejos… el flujo de dinero negro del 'Gremio Sam-il' está perfectamente reflejado.",
						"vietnamese": "Những con số phức tạp này… dòng tiền đen của 'Tam Nhật Hội' đã được ghi lại hoàn toàn.",
						"thai": "ตัวเลขที่ซับซ้อนพวกนี้... สะท้อนให้เห็นถึงเส้นทางการเงินที่ผิดกฎหมายของ 'สามอิลฮเว' ได้อย่างสมบูรณ์",
						"hindi": "ये जटिल संख्याएँ… 'साम-इल गिल्ड' के काले धन के प्रवाह को पूरी तरह दर्शाती हैं।"
					},
					"type": "speech",
					"speaker": "ren",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "K-jang… 모든 걸 계산했겠지. 우리가 뭘 할지까지도.",
						"english": "K-jang... He must have calculated everything. Even what we'll do.",
						"japanese": "K-jang… すべて計算済みか。我々の行動までも。",
						"chinese": "K-jang… 他肯定计算好了一切。甚至包括我们会做什么。",
						"french": "K-jang... Il a tout calculé. Même ce que nous ferons.",
						"spanish": "K-jang... Debe haberlo calculado todo. Incluso lo que haremos.",
						"vietnamese": "K-jang... Hắn chắc đã tính toán mọi thứ rồi. Kể cả việc chúng ta sẽ làm gì.",
						"thai": "K-jang... เขาต้องคำนวณทุกอย่างไว้แล้วแน่ๆ แม้กระทั่งสิ่งที่เราจะทำ",
						"hindi": "K-jang... उसने सब कुछ गणना कर लिया होगा। यहाँ तक कि हम क्या करेंगे, यह भी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "boss",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "이제 더 이상 돌이킬 수 없어. 너희의 존재 자체가 오류다.",
						"english": "There's no turning back now. Your very existence is an error.",
						"japanese": "もう後戻りはできない。お前たちの存在そのものがエラーだ。",
						"chinese": "现在已经无法回头了。你们的存在本身就是个错误。",
						"french": "Il n'y a plus de retour en arrière possible. Votre existence même est une erreur.",
						"spanish": "Ya no hay vuelta atrás. Vuestra propia existencia es un error.",
						"vietnamese": "Giờ không còn đường lui nữa. Sự tồn tại của các ngươi đã là một lỗi sai.",
						"thai": "ไม่มีทางย้อนกลับไปแล้ว การมีอยู่ของพวกแกคือข้อผิดพลาดเอง",
						"hindi": "अब कोई वापसी नहीं है। तुम्हारा अस्तित्व ही एक त्रुटि है।"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내가 직접… 정정해주지.",
						"english": "I'll... correct it myself.",
						"japanese": "私が直接…正してやろう。",
						"chinese": "我会亲手…修正你们。",
						"french": "Je vais... le corriger moi-même.",
						"spanish": "Yo mismo... lo corregiré.",
						"vietnamese": "Ta sẽ đích thân... sửa chữa.",
						"thai": "ฉันจะ…แก้ไขมันเอง",
						"hindi": "मैं खुद ही... इसे ठीक करूँगा।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그의 눈빛… 완전히 광기에 사로잡혔어. 피할 수 없어.",
						"english": "His eyes... completely consumed by madness. There's no escaping him.",
						"japanese": "彼の目…完全に狂気に囚われている。避けられない。",
						"chinese": "他的眼神…完全被疯狂吞噬了。避无可避。",
						"french": "Son regard... complètement dévoré par la folie. On ne peut pas l'éviter.",
						"spanish": "Su mirada... completamente atrapada por la locura. No podemos escapar.",
						"vietnamese": "Ánh mắt hắn… hoàn toàn chìm trong sự điên loạn. Không thể tránh được.",
						"thai": "แววตาของเขา…ถูกความบ้าคลั่งเข้าครอบงำอย่างสมบูรณ์ หนีไม่พ้น",
						"hindi": "उसकी आँखें... पूरी तरह से पागलपन में डूबी हुई हैं। बच नहीं सकते।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "피하지 않아. 모든 걸 끝낼 거야.",
						"english": "I won't avoid it. I'll end everything.",
						"japanese": "逃げない。すべてを終わらせる。",
						"chinese": "我不会逃避。我会结束这一切。",
						"french": "Je n'éviterai pas. Je vais tout arrêter.",
						"spanish": "No huiré. Acabaré con todo.",
						"vietnamese": "Ta sẽ không trốn tránh. Ta sẽ kết thúc mọi thứ.",
						"thai": "ฉันจะไม่หลีกเลี่ยง ฉันจะจบทุกอย่าง",
						"hindi": "मैं बचूँगा नहीं। मैं सब कुछ खत्म कर दूँगा।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"emotion": "happy",
					"content": {
						"korean": "크크큭… 미수금은… 반드시 회수된다….",
						"english": "Heheheh... Uncollected debts... will surely be recovered...",
						"japanese": "ククク… 未収金は… 必ず回収される…。",
						"chinese": "呵呵呵… 未收款… 必将收回…。",
						"french": "Hahaha... Les créances non perçues... seront sûrement recouvrées...",
						"spanish": "Jejeje... Las deudas impagadas... serán recuperadas sin falta...",
						"vietnamese": "Khà khà khà... Khoản nợ chưa thu... nhất định sẽ được thu hồi...",
						"thai": "ฮ่าฮ่าฮ่า... หนี้ค้างรับ... จะถูกเรียกเก็บคืนมาแน่นอน...",
						"hindi": "हीहीही... बकाया राशि... निश्चित रूप से वसूल की जाएगी...।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ren"
				},
				{
					"content": {
						"korean": "젠장! 여기서 멈출 수 없어!",
						"english": "Damn it! I can't stop here!",
						"japanese": "くそっ！ここで止まれない！",
						"chinese": "该死！我不能止步于此！",
						"french": "Bon sang ! Je ne peux pas m'arrêter ici !",
						"spanish": "¡Maldita sea! ¡No puedo parar aquí!",
						"vietnamese": "Chết tiệt! Không thể dừng lại ở đây được!",
						"thai": "ให้ตายสิ! ฉันหยุดอยู่ตรงนี้ไม่ได้!",
						"hindi": "धिक्कार है! मैं यहाँ रुक नहीं सकता!"
					},
					"type": "speech",
					"speaker": "ren",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 계산할 시간이다!",
						"english": "Again... It's time to recalculate!",
						"japanese": "もう一度… 再計算する時だ！",
						"chinese": "再来… 是时候重新计算了！",
						"french": "Encore... Il est temps de recalculer !",
						"spanish": "¡De nuevo... es hora de recalcular!",
						"vietnamese": "Lại nữa... Đã đến lúc tính toán lại rồi!",
						"thai": "อีกครั้ง... ถึงเวลาต้องคำนวณใหม่แล้ว!",
						"hindi": "फिर से... फिर से गणना करने का समय है!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "내 장부의 '조화'를 깬 대가는… 죽음으로 결산될 걸세.",
						"english": "The price for breaking the 'harmony' of my ledger... will be settled with death.",
						"japanese": "私の帳簿の「調和」を破った代償は…死で決算されるだろう。",
						"chinese": "打破我账簿“和谐”的代价…将以死亡结算。",
						"french": "Le prix à payer pour avoir brisé « l'harmonie » de mon registre... sera réglé par la mort.",
						"spanish": "El precio por romper la 'armonía' de mi libro... se saldará con la muerte.",
						"vietnamese": "Cái giá cho việc phá vỡ 'hòa hợp' trong sổ sách của ta... sẽ được thanh toán bằng cái chết.",
						"thai": "ค่าตอบแทนสำหรับการทำลาย 'ความสมดุล' ในบัญชีของฉัน…จะถูกชำระด้วยความตาย",
						"hindi": "मेरे बहीखाते की 'समरसता' तोड़ने की कीमत... मौत से चुकाई जाएगी।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 볼펜이… 모든 미수금을 회수한다!",
						"english": "This pen... will recover all outstanding debts!",
						"japanese": "このボールペンが…すべての未収金を回収する！",
						"chinese": "这支圆珠笔…将收回所有未收账款！",
						"french": "Ce stylo... va recouvrer toutes les créances !",
						"spanish": "¡Este bolígrafo... recuperará todas las deudas pendientes!",
						"vietnamese": "Cây bút bi này… sẽ thu hồi tất cả các khoản nợ chưa đòi!",
						"thai": "ปากกาลูกลื่นด้ามนี้…จะทวงคืนหนี้ค้างชำระทั้งหมด!",
						"hindi": "यह बॉलपॉइंट पेन... सभी बकाया वसूल करेगा!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ren"
				},
				{
					"speaker": "ren",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "젠장! 저 볼펜… 칼처럼 날아와!",
						"english": "Damn it! That pen... it flies like a knife!",
						"japanese": "くそっ！あのボールペン…ナイフのように飛んでくる！",
						"chinese": "该死！那支圆珠笔…像刀子一样飞过来！",
						"french": "Mince ! Ce stylo... il vole comme un couteau !",
						"spanish": "¡Maldita sea! ¡Ese bolígrafo... vuela como un cuchillo!",
						"vietnamese": "Chết tiệt! Cây bút bi đó… bay đến như một con dao!",
						"thai": "บ้าจริง! ปากกาลูกลื่นนั่น…พุ่งมาเหมือนมีด!",
						"hindi": "धिक्कार है! वह बॉलपॉइंट पेन... चाकू की तरह उड़ रहा है!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 밝히고, 이 광기를 끝내자!",
						"english": "Let's reveal the truth and end this madness!",
						"japanese": "真実を明かし、この狂気を終わらせよう！",
						"chinese": "揭露真相，结束这场疯狂吧！",
						"french": "Révélons la vérité et mettons fin à cette folie !",
						"spanish": "¡Revelemos la verdad y acabemos con esta locura!",
						"vietnamese": "Hãy tiết lộ sự thật và chấm dứt sự điên rồ này!",
						"thai": "มาเปิดเผยความจริงและยุติความบ้าคลั่งนี้กันเถอะ!",
						"hindi": "चलो सच्चाई का खुलासा करें और इस पागलपन को खत्म करें!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "크윽… 내 장부… 마지막… '미수금'은… 너희들의….",
						"english": "Ugh... My ledger... The last... 'outstanding debt' is... yours...",
						"japanese": "くっ…私の帳簿…最後の…「未収金」は…お前たちの…。",
						"chinese": "呃…我的账簿…最后的…“未收账款”是…你们的…。",
						"french": "Urgh... Mon registre... La dernière... « créance » est... la vôtre...",
						"spanish": "Ugh... Mi libro... La última... 'deuda pendiente' es... la vuestra...",
						"vietnamese": "Ưgh… Sổ sách của ta… Khoản 'nợ chưa đòi' cuối cùng… là của các ngươi…",
						"thai": "อึก…บัญชีของฉัน… 'หนี้ค้างชำระ' สุดท้าย…คือพวกแก…",
						"hindi": "उह... मेरा बहीखाता... अंतिम... 'बकाया' है... तुम्हारा..."
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"speaker": "ren",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝났어… 드디어.",
						"english": "It's over... Finally.",
						"japanese": "終わった… ついに。",
						"chinese": "结束了… 终于。",
						"french": "C'est fini... Enfin.",
						"spanish": "Se acabó... Por fin.",
						"vietnamese": "Xong rồi... Cuối cùng thì.",
						"thai": "จบแล้ว... ในที่สุดก็.",
						"hindi": "खत्म हो गया... आखिरकार।"
					},
					"speaker": "ren",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… '삼일회'의 진실이 드러날 시간이야.",
						"english": "Now... it's time for the truth of 'Samilhoe' to be revealed.",
						"japanese": "さあ… 「三日会」の真実が明かされる時だ。",
						"chinese": "现在… 是揭露“三日会”真相的时候了。",
						"french": "Maintenant... il est temps que la vérité sur 'Samilhoe' soit révélée.",
						"spanish": "Ahora... es hora de que la verdad de 'Samilhoe' sea revelada.",
						"vietnamese": "Bây giờ... là lúc sự thật về 'Sam-il-hoe' được phơi bày.",
						"thai": "ตอนนี้... ถึงเวลาที่ความจริงของ 'ซัมอิลฮเว' จะถูกเปิดเผยแล้ว.",
						"hindi": "अब... 'सामिलहो' का सच सामने आने का वक्त है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "회계사의 결산은 끝났다. 그러나 장부의 여백은, 새로운 시작을 예고하고 있었다.",
						"english": "The accountant's settlement is complete. But the blank spaces in the ledger foretold a new beginning.",
						"japanese": "会計士の決算は終わった。しかし、帳簿の余白は新たな始まりを予感させていた。",
						"chinese": "会计师的结算已完成。然而，账簿的空白处预示着新的开始。",
						"french": "Le bilan du comptable est terminé. Mais les marges du registre annonçaient un nouveau commencement.",
						"spanish": "La liquidación del contable ha terminado. Pero los espacios en blanco del libro de contabilidad presagiaban un nuevo comienzo.",
						"vietnamese": "Kế toán đã hoàn tất việc quyết toán. Nhưng những khoảng trống trên sổ cái lại báo hiệu một khởi đầu mới.",
						"thai": "การชำระบัญชีของนักบัญชีเสร็จสิ้นแล้ว แต่พื้นที่ว่างในบัญชีกลับบ่งบอกถึงการเริ่มต้นใหม่.",
						"hindi": "अकाउंटेंट का निपटान पूरा हो गया है। लेकिन खाता-बही में खाली जगहें एक नई शुरुआत का संकेत दे रही थीं।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"편의점의 불은 꺼졌다. K-jang의 광적인 결산은 끝을 맞이했다.",
			"장부 속 '삼일회'의 거대한 비리는 이제 세상에 드러날 것이다.",
			"하지만 모든 것이 끝난 것일까? 혹은… 새로운 장부가 열린 것일까.",
			"밤은 깊고, 아직 편의점의 문은 굳게 닫혀 있었다."
		],
		"english": [
			"The convenience store's lights went out. K-jang's frenzied reckoning had come to an end.",
			"The massive corruption of 'Samilhoe' in the ledger will now be exposed to the world.",
			"But is everything over? Or… has a new ledger been opened?",
			"The night was deep, and the convenience store's door remained tightly shut."
		],
		"japanese": [
			"コンビニの灯りは消えた。K-jangの狂気的な清算は終わりを迎えた。",
			"帳簿の中の「三日会」の巨大な不正は、今、世に暴かれるだろう。",
			"しかし、すべてが終わったのだろうか？それとも…新しい帳簿が開かれたのだろうか。",
			"夜は更け、コンビニの扉はまだ固く閉ざされていた。"
		],
		"chinese": [
			"便利店的灯光熄灭了。K-jang 疯狂的清算结束了。",
			"账本中“三日会”的巨大腐败，现在将公之于众。",
			"但一切都结束了吗？或者……一本新账本已经开启？",
			"夜色已深，便利店的门仍紧闭着。"
		],
		"french": [
			"Les lumières de la supérette se sont éteintes. Le règlement frénétique de K-jang était terminé.",
			"L'énorme corruption de 'Samilhoe' dans le registre sera désormais révélée au monde.",
			"Mais est-ce que tout est fini ? Ou… un nouveau registre a-t-il été ouvert ?",
			"La nuit était profonde, et la porte de la supérette restait fermement close."
		],
		"spanish": [
			"Las luces de la tienda de conveniencia se apagaron. El frenético ajuste de cuentas de K-jang había llegado a su fin.",
			"La enorme corrupción de 'Samilhoe' en el libro de contabilidad ahora será expuesta al mundo.",
			"¿Pero ha terminado todo? ¿O… se ha abierto un nuevo libro de contabilidad?",
			"La noche era profunda y la puerta de la tienda de conveniencia permanecía bien cerrada."
		],
		"vietnamese": [
			"Đèn của cửa hàng tiện lợi đã tắt. Cuộc thanh toán điên cuồng của K-jang đã kết thúc.",
			"Sự tham nhũng khổng lồ của 'Samilhoe' trong sổ sách giờ đây sẽ bị phơi bày ra thế giới.",
			"Nhưng mọi thứ đã kết thúc chưa? Hay… một cuốn sổ mới đã được mở ra?",
			"Đêm đã khuya, và cửa hàng tiện lợi vẫn đóng chặt."
		],
		"thai": [
			"ไฟร้านสะดวกซื้อดับลง การชำระบัญชีอันบ้าคลั่งของ K-jang ได้สิ้นสุดลงแล้ว.",
			"การทุจริตครั้งใหญ่ของ 'ซัมอิลฮเว' ในสมุดบัญชีจะถูกเปิดเผยต่อโลกแล้ว.",
			"แต่ทุกอย่างจบลงแล้วหรือ? หรือว่า...สมุดบัญชีเล่มใหม่ได้เปิดขึ้นแล้ว?",
			"ค่ำคืนลึกสงัด และประตูร้านสะดวกซื้อยังคงปิดสนิท."
		],
		"hindi": [
			"सुविधा स्टोर की बत्तियां बुझ गईं। के-जांग का उन्मादी हिसाब-किताब समाप्त हो गया था।",
			"बहीखाते में 'सामिलहो' का विशाल भ्रष्टाचार अब दुनिया के सामने उजागर होगा।",
			"लेकिन क्या सब खत्म हो गया है? या… क्या एक नया बहीखाता खुल गया है?",
			"रात गहरी थी, और सुविधा स्टोर का दरवाजा अभी भी कसकर बंद था।"
		]
	},
	"prologue": {
		"korean": [
			"평범한 편의점, 그 뒤에 숨겨진 거대한 그림자.",
			"K-jang, 그는 평범한 알바생이 아니었다.",
			"낡은 장부 속, '삼일회'의 모든 비리가 춤추고 있었다.",
			"미수금의 대가. 이제, 그의 결산이 시작된다.",
			"진실을 마주할 시간. 최종 결전만이 남았다."
		],
		"english": [
			"A mundane convenience store, a vast shadow hidden behind it.",
			"K-jang was no ordinary part-time worker.",
			"In the old ledger, all the misdeeds of 'Samilhoe' were laid bare.",
			"Unpaid debts. Now, his reckoning begins.",
			"Time to face the truth. Only the final showdown remains."
		],
		"japanese": [
			"平凡なコンビニ、その裏に隠された巨大な影。",
			"K-jang、彼はただのアルバイトではなかった。",
			"古びた帳簿の中、「三日会」のあらゆる不正が蠢いていた。",
			"未収金の代償。今、彼の清算が始まる。",
			"真実と向き合う時。残されたのは最終決戦のみ。"
		],
		"chinese": [
			"一家平凡的便利店，背后隐藏着巨大的阴影。",
			"K-jang，他并非一个普通的兼职生。",
			"在旧账本中，'三日会'的所有腐败都显露无遗。",
			"未收款的代价。现在，他的清算开始了。",
			"是时候面对真相了。只剩下最终决战。"
		],
		"french": [
			"Une supérette ordinaire, derrière elle se cache une immense ombre.",
			"K-jang, il n'était pas un simple employé à temps partiel.",
			"Dans le vieux registre, toutes les malversations de 'Samilhoe' dansaient.",
			"Le prix des créances impayées. Maintenant, son règlement commence.",
			"Il est temps d'affronter la vérité. Seule la confrontation finale demeure."
		],
		"spanish": [
			"Una tienda de conveniencia ordinaria, detrás de ella se esconde una sombra inmensa.",
			"K-jang, él no era un empleado a tiempo parcial cualquiera.",
			"En el viejo libro de contabilidad, toda la corrupción de 'Samilhoe' bailaba.",
			"El precio de las deudas pendientes. Ahora, su ajuste de cuentas comienza.",
			"Es hora de enfrentar la verdad. Solo queda el enfrentamiento final."
		],
		"vietnamese": [
			"Một cửa hàng tiện lợi bình thường, nhưng phía sau ẩn chứa một bóng đen khổng lồ.",
			"K-jang, anh ta không phải là một nhân viên bán thời gian bình thường.",
			"Trong cuốn sổ cũ, mọi sự tham nhũng của 'Samilhoe' đều lộ rõ.",
			"Cái giá của những khoản nợ chưa thu. Giờ đây, sự thanh toán của anh ta bắt đầu.",
			"Đã đến lúc đối mặt với sự thật. Chỉ còn lại trận quyết chiến cuối cùng."
		],
		"thai": [
			"ร้านสะดวกซื้อธรรมดา แต่เบื้องหลังซ่อนเงาอันยิ่งใหญ่.",
			"K-jang เขาไม่ใช่พนักงานพาร์ทไทม์ธรรมดา.",
			"ในสมุดบัญชีเก่า ความทุจริตทั้งหมดของ 'ซัมอิลฮเว' เต้นระบำอยู่.",
			"ค่าตอบแทนสำหรับหนี้ค้างชำระ ตอนนี้ การชำระบัญชีของเขาเริ่มต้นขึ้นแล้ว.",
			"ถึงเวลาเผชิญหน้าความจริง เหลือเพียงการเผชิญหน้าครั้งสุดท้าย."
		],
		"hindi": [
			"एक साधारण सुविधा स्टोर, जिसके पीछे एक विशाल छाया छिपी है।",
			"के-जांग, वह कोई साधारण अंशकालिक कर्मचारी नहीं था।",
			"पुराने बहीखाते में, 'सामिलहो' के सभी भ्रष्टाचार नाच रहे थे।",
			"अदा न हुए कर्ज का हिसाब। अब, उसका हिसाब-किताब शुरू होता है।",
			"सच का सामना करने का समय। केवल अंतिम मुकाबला बाकी है।"
		]
	}
} as const;
