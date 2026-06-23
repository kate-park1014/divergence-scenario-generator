export const scenario_modern_mrkjang_79_05 = {
	"scenario_id": "modern_mrkjang_79_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈춰버린 시간이 흐르는 편의점, 그 안에 감춰진 비밀을 찾는다.",
						"english": "A convenience store where time stands still, searching for the secrets hidden within.",
						"japanese": "時間が止まったコンビニ、その中に隠された秘密を探す。",
						"chinese": "时间停滞的便利店，寻找其中隐藏的秘密。",
						"french": "Une épicerie où le temps s'est arrêté, à la recherche des secrets cachés à l'intérieur.",
						"spanish": "Una tienda de conveniencia donde el tiempo se detuvo, buscando los secretos ocultos en su interior.",
						"vietnamese": "Cửa hàng tiện lợi nơi thời gian ngừng trôi, tìm kiếm những bí mật ẩn giấu bên trong.",
						"thai": "ร้านสะดวกซื้อที่เวลาหยุดนิ่ง, กำลังค้นหาความลับที่ซ่อนอยู่ข้างใน.",
						"hindi": "एक सुविधा स्टोर जहाँ समय ठहर गया है, उसके अंदर छिपे रहस्यों की तलाश।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가 Mr. K-jang의 금고라는데… 어디지?",
						"english": "They say this is Mr. K-jang's safe... Where is it?",
						"japanese": "ここがK-jang氏の金庫らしいが… どこだ？",
						"chinese": "据说这是K-jang先生的保险箱……在哪里？",
						"french": "On dit que c'est le coffre-fort de M. K-jang... Où est-il ?",
						"spanish": "Dicen que esta es la caja fuerte del Sr. K-jang... ¿Dónde está?",
						"vietnamese": "Họ nói đây là két sắt của Mr. K-jang... Nó ở đâu?",
						"thai": "ว่ากันว่านี่คือตู้เซฟของ Mr. K-jang... อยู่ที่ไหนนะ?",
						"hindi": "कहते हैं यह मिस्टर के-जंग का तिजोरी है... कहाँ है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "무엇을 찾는 거지? 재고는 완벽하게 정리되어 있어.",
						"english": "What are you looking for? Inventory is perfectly organized.",
						"japanese": "何を探している？在庫は完璧に整理されている。",
						"chinese": "你在找什么？库存整理得井井有条。",
						"french": "Que cherches-tu ? L'inventaire est parfaitement organisé.",
						"spanish": "¿Qué buscas? El inventario está perfectamente organizado.",
						"vietnamese": "Bạn đang tìm gì vậy? Hàng tồn kho đã được sắp xếp hoàn hảo.",
						"thai": "คุณกำลังหาสอะไรอยู่? สินค้าคงคลังจัดเรียงอย่างสมบูรณ์แบบแล้ว",
						"hindi": "तुम क्या ढूंढ रहे हो? स्टॉक पूरी तरह से व्यवस्थित है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "…여기, 공기가 이상해. 뭔가 숨 쉬고 있는 것 같아.",
						"english": "...The air here is strange. Something feels like it's breathing.",
						"japanese": "…ここ、空気がおかしい。何かが息をしているようだ。",
						"chinese": "……这里的空气很奇怪。感觉有什么东西在呼吸。",
						"french": "...L'air ici est étrange. On dirait que quelque chose respire.",
						"spanish": "...El aire aquí es extraño. Siento que algo está respirando.",
						"vietnamese": "...Không khí ở đây thật lạ. Cảm giác như có gì đó đang thở.",
						"thai": "...อากาศที่นี่แปลก ๆ เหมือนมีอะไรบางอย่างกำลังหายใจอยู่",
						"hindi": "यहां की हवा अजीब है। ऐसा लगता है जैसे कुछ सांस ले रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 서류철 속에서, 진짜 장부가 모습을 드러냈다.",
						"english": "From an old file, the true ledger revealed itself.",
						"japanese": "古いファイルの中から、本当の帳簿が姿を現した。",
						"chinese": "在旧档案中，真正的账簿显露出来。",
						"french": "D'un vieux dossier, le véritable grand livre s'est révélé.",
						"spanish": "De un archivo antiguo, el verdadero libro mayor se reveló.",
						"vietnamese": "Từ một tập tài liệu cũ, cuốn sổ cái thật sự đã lộ diện.",
						"thai": "จากแฟ้มเก่า ๆ สมุดบัญชีที่แท้จริงก็ปรากฏขึ้น",
						"hindi": "एक पुरानी फ़ाइल से, असली बही-खाता सामने आया।"
					}
				},
				{
					"content": {
						"korean": "이게… 진짜 장부라고?",
						"english": "This is... the real ledger?",
						"japanese": "これが…本当の帳簿だと？",
						"chinese": "这就是……真正的账簿？",
						"french": "C'est... le vrai grand livre ?",
						"spanish": "¿Este es... el verdadero libro mayor?",
						"vietnamese": "Đây là... cuốn sổ cái thật sao?",
						"thai": "นี่...คือสมุดบัญชีจริงเหรอ?",
						"hindi": "यह... असली बही-खाता है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "자네들이… 내 ‘매출’에 손을 대다니. 젠장, 재고가 안 맞아!",
						"english": "You... touched my 'revenue.' Damn it, the inventory's off!",
						"japanese": "お前たちが…私の「売上」に手を出すなんて。くそっ、在庫が合わない！",
						"chinese": "你们竟然……动了我的“营收”。该死，库存不符！",
						"french": "Vous... avez touché à mes 'revenus'. Zut, l'inventaire ne correspond pas !",
						"spanish": "¡Ustedes... tocaron mis 'ingresos'! ¡Maldita sea, el inventario no cuadra!",
						"vietnamese": "Các người... đã động vào 'doanh thu' của tôi. Chết tiệt, hàng tồn kho không khớp!",
						"thai": "พวกแก...แตะต้อง 'รายรับ' ของฉันงั้นเหรอ! ให้ตายเถอะ สินค้าคงคลังไม่ตรง!",
						"hindi": "तुम लोगों ने... मेरे 'राजस्व' को छुआ। धिक्कार है, स्टॉक मेल नहीं खा रहा!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "zoe"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "Mr. K-jang은… 그냥 숫자에 미친 사람이 아니야.",
						"english": "Mr. K-jang isn't... just a numbers fanatic.",
						"japanese": "K-jang氏は…ただの数字狂じゃない。",
						"chinese": "K-jang先生……不只是一个数字狂。",
						"french": "M. K-jang n'est pas... juste un fanatique des chiffres.",
						"spanish": "El Sr. K-jang no es... solo un fanático de los números.",
						"vietnamese": "Ông K-jang không phải... chỉ là một kẻ cuồng số.",
						"thai": "คุณ K-jang ไม่ใช่...แค่คนบ้าตัวเลข",
						"hindi": "मिस्टर के-जांग... सिर्फ़ संख्याओं के दीवाने नहीं हैं।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "zoe",
					"content": {
						"korean": "그의 장부는… 잃어버린 모든 것을 붙잡으려는 필사적인 기록이었어.",
						"english": "His ledger was... a desperate record to cling to everything he'd lost.",
						"japanese": "彼の帳簿は…失われたすべてを掴もうとする必死の記録だった。",
						"chinese": "他的账簿……是试图抓住所有失去之物的绝望记录。",
						"french": "Son grand livre était... un registre désespéré pour s'accrocher à tout ce qu'il avait perdu.",
						"spanish": "Su libro mayor era... un registro desesperado para aferrarse a todo lo que había perdido.",
						"vietnamese": "Cuốn sổ cái của ông ta là... một ghi chép tuyệt vọng nhằm níu giữ mọi thứ ông đã mất.",
						"thai": "สมุดบัญชีของเขาคือ...บันทึกอันสิ้นหวังเพื่อยึดติดกับทุกสิ่งที่เขาเสียไป",
						"hindi": "उसका बही-खाता... खोई हुई हर चीज़ को पकड़े रहने की एक हताश कोशिश थी।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "Mr. K-jang의 눈빛이 광기로 번뜩였다.",
						"english": "Mr. K-jang's eyes gleamed with madness.",
						"japanese": "K-jang氏の瞳が狂気にきらめいた。",
						"chinese": "K-jang先生的眼中闪烁着疯狂。",
						"french": "Les yeux de M. K-jang brillèrent de folie.",
						"spanish": "Los ojos del Sr. K-jang brillaron con locura.",
						"vietnamese": "Ánh mắt của ông K-jang lóe lên vẻ điên loạn.",
						"thai": "แววตาของคุณ K-jang เปล่งประกายด้วยความบ้าคลั่ง",
						"hindi": "मिस्टर के-जांग की आँखों में पागलपन चमक उठा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 장부의 조화를 깨뜨린 대가는… ‘미수금’으로 처리될 걸세.",
						"english": "The cost of disrupting my ledger's harmony will be... processed as 'accounts receivable.'",
						"japanese": "私の帳簿の調和を乱した代償は…「未収金」として処理されるだろう。",
						"chinese": "破坏我账簿和谐的代价……将以“应收账款”处理。",
						"french": "Le prix d'avoir brisé l'harmonie de mon grand livre sera... traité comme des 'créances'.",
						"spanish": "El costo de alterar la armonía de mi libro mayor será... procesado como 'cuentas por cobrar'.",
						"vietnamese": "Cái giá phải trả cho việc phá vỡ sự cân bằng trong sổ cái của ta sẽ được... xử lý như 'khoản phải thu'.",
						"thai": "ราคาของการทำลายความสมดุลของบัญชีข้า...จะถูกบันทึกเป็น 'ลูกหนี้ค้างรับ'",
						"hindi": "मेरे बही-खाते की सद्भाव को तोड़ने की कीमत... 'प्राप्य खातों' के रूप में संसाधित की जाएगी।"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "zoe",
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
					"emotion": "sad",
					"content": {
						"korean": "그의 죄책감은… 숫자로도 감당할 수 없을 만큼 커.",
						"english": "His guilt is... too great for even numbers to contain.",
						"japanese": "彼の罪悪感は…数字でも抱えきれないほど大きい。",
						"chinese": "他的罪恶感……大到连数字都无法承受。",
						"french": "Sa culpabilité est... trop grande pour être contenue par des chiffres.",
						"spanish": "Su culpa es... demasiado grande para ser contenida incluso por los números.",
						"vietnamese": "Tội lỗi của ông ta... lớn đến mức ngay cả những con số cũng không thể chứa đựng được.",
						"thai": "ความรู้สึกผิดของเขา...ใหญ่หลวงเกินกว่าที่ตัวเลขจะรับไหว",
						"hindi": "उसका अपराधबोध... इतना बड़ा है कि संख्याएँ भी इसे संभाल नहीं सकतीं।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "미수금… 대체 뭘 말하는 거야?",
						"english": "Unpaid debts... What are you talking about?",
						"japanese": "未収金… 一体何を言ってるんだ？",
						"chinese": "未收款… 到底在说什么？",
						"french": "Dettes impayées... De quoi parles-tu ?",
						"spanish": "Cuentas pendientes... ¿De qué estás hablando?",
						"vietnamese": "Khoản chưa thu... Rốt cuộc là gì vậy?",
						"thai": "หนี้ค้างชำระ... นี่มันหมายความว่าอะไรกันแน่?",
						"hindi": "बकाया... आख़िर तुम किस बारे में बात कर रहे हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "멈췄던 시계가 다시 움직이기 시작하면… 모든 것이 정산될 거야.",
						"english": "When the stopped clock starts ticking again... everything will be settled.",
						"japanese": "止まっていた時計が再び動き始めたら… 全てが精算されるだろう。",
						"chinese": "当停滞的时钟再次开始转动时… 一切都将清算。",
						"french": "Quand l'horloge arrêtée se remettra en marche... tout sera réglé.",
						"spanish": "Cuando el reloj detenido comience a moverse de nuevo... todo se saldará.",
						"vietnamese": "Khi chiếc đồng hồ đã ngừng lại bắt đầu chạy lần nữa... mọi thứ sẽ được thanh toán.",
						"thai": "เมื่อนาฬิกาที่หยุดนิ่งเริ่มเดินอีกครั้ง... ทุกอย่างก็จะถูกชำระสะสาง",
						"hindi": "जब रुकी हुई घड़ी फिर से चलने लगेगी... सब कुछ चुकता हो जाएगा।"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "편의점 전체가 거대한 정산 기계처럼 작동하기 시작했다.",
						"english": "The entire convenience store began to operate like a giant settlement machine.",
						"japanese": "コンビニ全体が巨大な精算機のように作動し始めた。",
						"chinese": "整个便利店开始像一台巨大的结算机器一样运作。",
						"french": "Tout le dépanneur commença à fonctionner comme une gigantesque machine de règlement.",
						"spanish": "Toda la tienda de conveniencia comenzó a funcionar como una gigantesca máquina de liquidación.",
						"vietnamese": "Toàn bộ cửa hàng tiện lợi bắt đầu hoạt động như một cỗ máy thanh toán khổng lồ.",
						"thai": "ร้านสะดวกซื้อทั้งร้านเริ่มทำงานเหมือนเครื่องคำนวณขนาดมหึมา",
						"hindi": "पूरा सुविधा स्टोर एक विशाल निपटान मशीन की तरह काम करना शुरू कर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "그리고 미수금은… 언제나 ‘강력하게’ 회수해야 하는 법이지!",
						"english": "And unpaid debts... must always be recovered 'forcefully'!",
						"japanese": "そして未収金は… いつだって「強力に」回収しなければならないものだ！",
						"chinese": "而未收款… 总是要“强力”回收的！",
						"french": "Et les dettes impayées... doivent toujours être récupérées « de force » !",
						"spanish": "Y las cuentas pendientes... ¡siempre deben recuperarse 'con fuerza'!",
						"vietnamese": "Và các khoản chưa thu... luôn phải được thu hồi 'mạnh mẽ'!",
						"thai": "และหนี้ค้างชำระ... ก็ต้องทวงคืน 'อย่างรุนแรง' เสมอไป!",
						"hindi": "और बकाया... हमेशा 'जबरदस्ती' वसूल किया जाना चाहिए!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "그에게 미수금은 돈이 아니야… 잃어버린 시간, 그리고…",
						"english": "To him, unpaid debts aren't money... they're lost time, and...",
						"japanese": "彼にとって未収金は金じゃない… 失われた時間、そして…",
						"chinese": "对他来说，未收款不是钱… 是失去的时间，还有…",
						"french": "Pour lui, les dettes impayées ne sont pas de l'argent... c'est du temps perdu, et...",
						"spanish": "Para él, las cuentas pendientes no son dinero... son tiempo perdido, y...",
						"vietnamese": "Đối với anh ta, khoản chưa thu không phải là tiền... mà là thời gian đã mất, và...",
						"thai": "สำหรับเขา หนี้ค้างชำระไม่ใช่เงิน... แต่มันคือเวลาที่หายไป และ...",
						"hindi": "उसके लिए, बकाया पैसा नहीं है... यह खोया हुआ समय है, और..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "잃어버린… 가족?",
						"english": "Lost... family?",
						"japanese": "失われた… 家族？",
						"chinese": "失去的… 家人？",
						"french": "Une famille... perdue ?",
						"spanish": "¿Familia... perdida?",
						"vietnamese": "Gia đình... đã mất?",
						"thai": "ครอบครัว... ที่หายไป?",
						"hindi": "खोया हुआ... परिवार?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "이 길 끝에… 그의 비극이 있어.",
						"english": "At the end of this path... lies his tragedy.",
						"japanese": "この道の先に… 彼の悲劇がある。",
						"chinese": "这条路的尽头… 是他的悲剧。",
						"french": "Au bout de ce chemin... se trouve sa tragédie.",
						"spanish": "Al final de este camino... yace su tragedia.",
						"vietnamese": "Cuối con đường này... là bi kịch của anh ta.",
						"thai": "สุดปลายทางนี้... มีโศกนาฏกรรมของเขา",
						"hindi": "इस रास्ते के अंत में... उसकी त्रासदी है।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "내 장부는… 결코 틀리지 않아! 너희는… 영원히 미수금으로 남을 거야!",
						"english": "My ledger… is never wrong! You… will forever remain uncollectible debts!",
						"japanese": "私の帳簿は…決して間違っていない！お前たちは…永遠に未収金のままだ！",
						"chinese": "我的账本…绝不会错！你们…将永远是未收款！",
						"french": "Mon grand livre… ne se trompe jamais ! Vous… resterez à jamais des créances irrécouvrables !",
						"spanish": "Mi libro de contabilidad… ¡nunca se equivoca! ¡Vosotros… seréis por siempre deudas incobrables!",
						"vietnamese": "Sổ cái của tôi… không bao giờ sai! Các ngươi… sẽ mãi mãi là khoản nợ khó đòi!",
						"thai": "สมุดบัญชีของฉัน… ไม่มีทางผิดพลาด! พวกแก… จะยังคงเป็นหนี้เสียตลอดไป!",
						"hindi": "मेरी बही… कभी गलत नहीं होती! तुम… हमेशा अनकलेक्टिबल कर्ज बने रहोगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어… 이 장부를… 다시 쓸 거야.",
						"english": "This isn't over... I'll rewrite this ledger.",
						"japanese": "まだ終わらん… この帳を… 書き直してやる。",
						"chinese": "还没结束… 这笔账… 我会重写。",
						"french": "Ce n'est pas encore terminé… Je réécrirai ce registre.",
						"spanish": "Esto no ha terminado... Reescribiré este registro.",
						"vietnamese": "Chưa hết đâu… Ta sẽ viết lại cuốn sổ này.",
						"thai": "ยังไม่จบ… ข้าจะเขียนบันทึกนี้ใหม่.",
						"hindi": "यह अभी खत्म नहीं हुआ है… मैं इस बही को फिर से लिखूँगा।"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Mr. K-jang은 낡은 서류철을 펼쳤다. 그 안에 모든 진실이 있었다.",
						"english": "Mr. K-jang opened an old file. All the truth was inside.",
						"japanese": "Kジャン氏は古いファイルを広げた。その中にすべての真実があった。",
						"chinese": "K先生打开了一个旧文件夹。所有的真相都在里面。",
						"french": "M. K-jang ouvrit un vieux dossier. Toute la vérité s'y trouvait.",
						"spanish": "El Sr. K-jang abrió un viejo archivador. Toda la verdad estaba dentro.",
						"vietnamese": "Ông K-jang mở một tập hồ sơ cũ. Mọi sự thật đều ở trong đó.",
						"thai": "คุณ K-jang เปิดแฟ้มเก่าออก ทุกความจริงอยู่ในนั้น",
						"hindi": "मिस्टर के-जंग ने एक पुरानी फ़ाइल खोली। सारी सच्चाई उसके अंदर थी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "이 장부의 조화는… 누구도 깰 수 없어!",
						"english": "The balance of this ledger... no one can break!",
						"japanese": "この帳簿の調和は… 誰にも破れない！",
						"chinese": "这本账簿的平衡… 谁也无法打破！",
						"french": "L'harmonie de ce grand livre... personne ne peut la briser !",
						"spanish": "¡La armonía de este libro de contabilidad... nadie puede romperla!",
						"vietnamese": "Sự hài hòa của cuốn sổ cái này... không ai có thể phá vỡ!",
						"thai": "ความสมดุลของบัญชีเล่มนี้... ไม่มีใครทำลายได้!",
						"hindi": "इस बहीखाते का सामंजस्य... कोई तोड़ नहीं सकता!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저 펜이… 칼처럼 빛나고 있어!",
						"english": "That pen... is shining like a sword!",
						"japanese": "あのペンが… 刀のように輝いている！",
						"chinese": "那支笔… 像刀一样闪耀着！",
						"french": "Ce stylo... brille comme une épée !",
						"spanish": "¡Esa pluma... brilla como una espada!",
						"vietnamese": "Cây bút đó... đang sáng lên như một thanh kiếm!",
						"thai": "ปากกาด้ามนั้น... ส่องประกายเหมือนดาบ!",
						"hindi": "वह पेन... तलवार की तरह चमक रहा है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "삼일회… 그 배신자들의 이름까지! 전부 여기에 기록되어 있지.",
						"english": "Samilhoe… even the names of those traitors! All recorded here.",
						"japanese": "三日会…あの裏切り者たちの名前まで！ここに全て記録されている。",
						"chinese": "三日会…甚至包括那些叛徒的名字！所有的一切都记录在这里。",
						"french": "Le Samilhoe… même les noms de ces traîtres ! Tout est enregistré ici.",
						"spanish": "El Samilhoe… ¡incluso los nombres de esos traidores! Todo está registrado aquí.",
						"vietnamese": "Hội Tam Nhật… ngay cả tên của những kẻ phản bội đó! Tất cả đều được ghi lại ở đây.",
						"thai": "สามอิลฮเว… แม้แต่ชื่อของคนทรยศเหล่านั้น! ทั้งหมดถูกบันทึกไว้ที่นี่",
						"hindi": "सामिलहोए… उन गद्दारों के नाम भी! सब यहाँ दर्ज है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Mr. K-jang은… 희생양이었어. 그의 광기는 슬픔에서 비롯된 거야.",
						"english": "Mr. K-jang was… a scapegoat. His madness stemmed from sorrow.",
						"japanese": "Kジャン氏は…生贄だった。彼の狂気は悲しみから生まれたものだ。",
						"chinese": "K-jang先生是…替罪羊。他的疯狂源于悲伤。",
						"french": "Monsieur K-jang était… un bouc émissaire. Sa folie provenait de la tristesse.",
						"spanish": "El Sr. K-jang fue… un chivo expiatorio. Su locura surgió de la tristeza.",
						"vietnamese": "Ông K-jang là… một vật tế thần. Sự điên loạn của ông ấy xuất phát từ nỗi buồn.",
						"thai": "คุณเค-จางเป็น… แพะรับบาป ความบ้าคลั่งของเขาเกิดจากความเศร้า",
						"hindi": "मिस्टर के-जंग… एक बलि का बकरा थे। उनका पागलपन दुख से उपजा था।"
					},
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "당신은… 그의 죄책감을 마주할 준비가 됐어?",
						"english": "Are you… ready to face his guilt?",
						"japanese": "あなたは…彼の罪悪感に立ち向かう準備ができたか？",
						"chinese": "你准备好…面对他的罪恶感了吗？",
						"french": "Êtes-vous… prêt à affronter sa culpabilité ?",
						"spanish": "¿Estás… listo para enfrentar su culpa?",
						"vietnamese": "Bạn… đã sẵn sàng đối mặt với tội lỗi của anh ấy chưa?",
						"thai": "คุณ… พร้อมที่จะเผชิญหน้ากับความรู้สึกผิดของเขาแล้วหรือยัง?",
						"hindi": "क्या तुम… उसकी ग्लानि का सामना करने के लिए तैयार हो?"
					}
				},
				{
					"content": {
						"korean": "멈췄던 벽시계가 다시 울리기 시작했다. 마지막 정산의 카운트다운이 비극적으로 흘렀다.",
						"english": "The stopped wall clock began to chime again. The countdown to the final settlement tragically unfolded.",
						"japanese": "止まっていた壁掛け時計が再び鳴り始めた。最後の清算へのカウントダウンが悲劇的に進行した。",
						"chinese": "停滞的挂钟再次开始敲响。最终清算的倒计时悲剧性地开始了。",
						"french": "L'horloge murale arrêtée se remit à sonner. Le compte à rebours du règlement final se déroula tragiquement.",
						"spanish": "El reloj de pared detenido comenzó a sonar de nuevo. La cuenta atrás para el ajuste de cuentas final se desarrolló trágicamente.",
						"vietnamese": "Đồng hồ treo tường đã dừng lại bắt đầu đổ chuông một lần nữa. Đồng hồ đếm ngược cho cuộc quyết toán cuối cùng đã diễn ra một cách bi thảm.",
						"thai": "นาฬิกาแขวนผนังที่หยุดไปเริ่มตีอีกครั้ง การนับถอยหลังสู่การชำระบัญชีครั้งสุดท้ายดำเนินไปอย่างโศกนาฏกรรม",
						"hindi": "रुकी हुई दीवार घड़ी फिर से बजने लगी। अंतिम निपटान की उलटी गिनती दुखद रूप से शुरू हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내 가족… 삼일회가 빼앗아 갔어… 숫자로라도 붙잡고 싶었는데…",
						"english": "My family… Samilhoe took them away… I wanted to hold onto them, even if just in numbers…",
						"japanese": "私の家族…三日会が奪っていった…数字だけでも掴んでおきたかったのに…",
						"chinese": "我的家人…被三日会夺走了…我多想留住他们，哪怕只是数字也好…",
						"french": "Ma famille… le Samilhoe me l'a prise… J'aurais voulu m'y accrocher, ne serait-ce que par les chiffres…",
						"spanish": "Mi familia… el Samilhoe me la quitó… Quería aferrarme a ellos, aunque solo fuera con números…",
						"vietnamese": "Gia đình tôi… Hội Tam Nhật đã cướp đi… Tôi muốn níu giữ họ, dù chỉ là những con số…",
						"thai": "ครอบครัวของฉัน… สามอิลฮเวเอาไปแล้ว… ฉันอยากจะยึดติดกับพวกเขา แม้จะเป็นแค่ตัวเลขก็ตาม…",
						"hindi": "मेरा परिवार… सामिलहोए ने छीन लिया… मैं उन्हें पकड़े रखना चाहता था, भले ही सिर्फ अंकों में…"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 광기는… 단순한 악이 아니었어.",
						"english": "His madness… wasn't mere evil.",
						"japanese": "彼の狂気は…単なる悪ではなかった。",
						"chinese": "他的疯狂…并非单纯的邪恶。",
						"french": "Sa folie… n'était pas un simple mal.",
						"spanish": "Su locura… no era pura maldad.",
						"vietnamese": "Sự điên loạn của anh ấy… không phải là ác độc đơn thuần.",
						"thai": "ความบ้าคลั่งของเขา… ไม่ใช่แค่ความชั่วร้าย",
						"hindi": "उसका पागलपन… केवल बुराई नहीं था।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "zoe",
					"content": {
						"korean": "죄책감은… 모든 것을 집어삼키는 그림자야.",
						"english": "Guilt is… a shadow that devours everything.",
						"japanese": "罪悪感は…全てを飲み込む影だ。",
						"chinese": "罪恶感是…吞噬一切的阴影。",
						"french": "La culpabilité est… une ombre qui dévore tout.",
						"spanish": "La culpa es… una sombra que devora todo.",
						"vietnamese": "Tội lỗi là… một cái bóng nuốt chửng mọi thứ.",
						"thai": "ความรู้สึกผิดคือ… เงาที่กลืนกินทุกสิ่ง",
						"hindi": "ग्लानि… सब कुछ निगलने वाली छाया है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 도시의 시계는… 이제 누가 다시 움직일까?",
						"english": "The clock of this city… who will make it tick again now?",
						"japanese": "この街の時計は…今、誰が再び動かすのだろうか？",
						"chinese": "这座城市的时钟…现在会由谁来再次拨动呢？",
						"french": "L'horloge de cette ville… qui la fera à nouveau tourner maintenant ?",
						"spanish": "El reloj de esta ciudad… ¿quién lo hará funcionar de nuevo ahora?",
						"vietnamese": "Đồng hồ của thành phố này… bây giờ ai sẽ làm nó quay trở lại?",
						"thai": "นาฬิกาของเมืองนี้… ตอนนี้ใครจะทำให้มันเดินอีกครั้ง?",
						"hindi": "इस शहर की घड़ी… अब कौन उसे फिर से चलाएगा?"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "쓰러진 Mr. K-jang의 손에서 낡은 장부가 떨어졌다. 그 안에는 아무도 갚을 수 없는 미수금이 적혀 있었다.",
						"english": "An old ledger fell from the hand of the collapsed Mr. K-jang. Inside, uncollectible debts that no one could ever repay were written.",
						"japanese": "倒れたKジャン氏の手から古い帳簿が落ちた。その中には、誰も返済できない未収金が記されていた。",
						"chinese": "一本旧账本从倒下的K-jang先生手中滑落。里面记录着无人能偿还的应收账款。",
						"french": "Un vieux registre tomba de la main de M. K-jang, effondré. À l'intérieur, des créances irrécouvrables que personne ne pourrait jamais rembourser étaient inscrites.",
						"spanish": "Un viejo libro de contabilidad cayó de la mano del Sr. K-jang. Dentro, estaban escritas deudas incobrables que nadie podría pagar jamás.",
						"vietnamese": "Một cuốn sổ cái cũ rơi ra từ tay của ông K-jang đã gục ngã. Bên trong, ghi chép những khoản nợ không thể thu hồi mà không ai có thể trả được.",
						"thai": "สมุดบัญชีเก่าเล่มหนึ่งหล่นจากมือของคุณเค-จางที่ล้มลง ภายในมีหนี้เสียที่ไม่มีใครสามารถชำระได้",
						"hindi": "गिरे हुए मिस्टर के-जंग के हाथ से एक पुरानी बही गिर गई। उसके अंदर, ऐसे अनकलेक्टिबल कर्ज लिखे थे जिन्हें कोई चुका नहीं सकता था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"회색빛 도시, 마지막 정산의 시간이 다가왔다.",
			"Mr. K-jang의 편의점, 그 차가운 계산대 아래 감춰진 비밀.",
			"진짜 장부가 열리는 순간, 멈췄던 시계는 다시 울린다.",
			"광기 뒤에 숨겨진 비극, 이제 모든 진실이 정산된다."
		],
		"english": [
			"Grey city, the final reckoning approaches.",
			"Mr. K-jang's convenience store, secrets hidden beneath the cold counter.",
			"The moment the real ledger opens, the stopped clock rings again.",
			"Tragedy hidden behind madness, now all truth is settled."
		],
		"japanese": [
			"灰色都市、最後の精算の時が来た。",
			"K-jang氏のコンビニ、冷たいレジの下に隠された秘密。",
			"本当の帳簿が開く瞬間、止まっていた時計が再び鳴り響く。",
			"狂気の裏に隠された悲劇、今すべての真実が清算される。"
		],
		"chinese": [
			"灰色都市，最终清算之时已至。",
			"K-jang先生的便利店，隐藏在冰冷收银台下的秘密。",
			"真实账本开启的瞬间，停摆的时钟再次响起。",
			"疯狂背后隐藏的悲剧，如今所有真相都将水落石出。"
		],
		"french": [
			"Ville grise, l'heure du décompte final approche.",
			"L'épicerie de M. K-jang, des secrets cachés sous le comptoir froid.",
			"Dès que le vrai grand livre s'ouvre, l'horloge arrêtée sonne à nouveau.",
			"Tragédie cachée derrière la folie, maintenant toute la vérité est réglée."
		],
		"spanish": [
			"Ciudad gris, el momento del ajuste de cuentas final se acerca.",
			"La tienda de conveniencia del Sr. K-jang, secretos ocultos bajo el mostrador frío.",
			"En el momento en que se abre el libro mayor real, el reloj detenido vuelve a sonar.",
			"Tragedia oculta tras la locura, ahora toda la verdad se liquida."
		],
		"vietnamese": [
			"Thành phố xám xịt, thời khắc thanh toán cuối cùng đang đến gần.",
			"Cửa hàng tiện lợi của Mr. K-jang, bí mật ẩn giấu dưới quầy tính tiền lạnh lẽo.",
			"Khoảnh khắc cuốn sổ cái thật sự mở ra, chiếc đồng hồ đã ngừng lại lại vang lên.",
			"Bi kịch ẩn sau sự điên loạn, giờ đây mọi sự thật sẽ được thanh toán."
		],
		"thai": [
			"เมืองสีเทา, เวลาของการชำระบัญชีสุดท้ายกำลังจะมาถึง.",
			"ร้านสะดวกซื้อของ Mr. K-jang, ความลับที่ซ่อนอยู่ใต้เคาน์เตอร์เย็นชา.",
			"ในขณะที่สมุดบัญชีจริงเปิดออก, นาฬิกาที่หยุดนิ่งก็จะดังขึ้นอีกครั้ง.",
			"โศกนาฏกรรมที่ซ่อนอยู่เบื้องหลังความวิกลจริต, ตอนนี้ความจริงทั้งหมดจะได้รับการชำระ."
		],
		"hindi": [
			"ग्रे शहर, अंतिम हिसाब का समय आ गया है।",
			"मिस्टर के-जंग की सुविधा स्टोर, ठंडे काउंटर के नीचे छिपे रहस्य।",
			"जैसे ही असली बही-खाता खुलता है, रुकी हुई घड़ी फिर से बजने लगती है।",
			"पागलपन के पीछे छिपी त्रासदी, अब सभी सच्चाई का हिसाब होगा।"
		]
	},
	"epilogue": {
		"korean": [
			"Mr. K-jang의 광기는 멈췄지만, 그의 슬픔은 도시에 깊이 스며들었다.",
			"낡은 장부는 더 이상 숫자를 기록하지 않았다. 다만, 잃어버린 시간과 가족의 흔적만이 남았다.",
			"멈췄던 시계는 다시 움직였다. 하지만, 누가 그 시간을 올바르게 기록할 수 있을까?",
			"정의를 되찾은 걸까, 아니면 또 다른 죄책감의 굴레에 빠진 걸까. 정산은, 아직 끝나지 않았다."
		],
		"english": [
			"Mr. K-jang's madness ceased, but his sorrow permeated deep into the city.",
			"The old ledger no longer recorded numbers. Only traces of lost time and family remained.",
			"The stopped clock moved again. But who can correctly record that time?",
			"Was justice restored, or did they fall into another cycle of guilt? The reckoning is not over yet."
		],
		"japanese": [
			"K-jang氏の狂気は止まったが、彼の悲しみは都市に深く染み込んだ。",
			"古い帳簿はもはや数字を記録しなかった。ただ、失われた時間と家族の痕跡だけが残った。",
			"止まっていた時計は再び動き出した。しかし、誰がその時間を正しく記録できるだろうか？",
			"正義を取り戻したのか、それともまた別の罪悪感の輪に陥ったのか。精算は、まだ終わっていない。"
		],
		"chinese": [
			"K-jang先生的疯狂止息了，但他的悲伤却深深渗透到这座城市。",
			"旧账本不再记录数字。只留下逝去的时间和家人的痕迹。",
			"停摆的时钟再次转动。然而，谁又能正确记录那段时光呢？",
			"是找回了正义，还是陷入了另一个愧疚的循环？清算，尚未结束。"
		],
		"french": [
			"La folie de M. K-jang cessa, mais sa tristesse imprégna profondément la ville.",
			"L'ancien grand livre ne consignait plus de chiffres. Seules les traces du temps perdu et de la famille demeuraient.",
			"L'horloge arrêtée se remit en marche. Mais qui pourra enregistrer correctement ce temps ?",
			"La justice a-t-elle été rétablie, ou sont-ils tombés dans un autre cycle de culpabilité ? Le décompte n'est pas encore terminé."
		],
		"spanish": [
			"La locura del Sr. K-jang cesó, pero su tristeza se filtró profundamente en la ciudad.",
			"El viejo libro mayor ya no registraba números. Solo quedaron rastros de tiempo perdido y de la familia.",
			"El reloj detenido volvió a moverse. Pero, ¿quién podrá registrar correctamente ese tiempo?",
			"¿Se restauró la justicia, o cayeron en otro ciclo de culpa? El ajuste de cuentas aún no ha terminado."
		],
		"vietnamese": [
			"Sự điên loạn của Mr. K-jang đã dừng lại, nhưng nỗi buồn của ông ấy thấm sâu vào thành phố.",
			"Cuốn sổ cái cũ không còn ghi lại những con số nữa. Chỉ còn lại dấu vết của thời gian đã mất và gia đình.",
			"Chiếc đồng hồ đã ngừng lại lại chuyển động. Nhưng ai có thể ghi lại đúng thời gian đó?",
			"Liệu công lý có được khôi phục, hay họ lại rơi vào một vòng lặp tội lỗi khác? Sự thanh toán, vẫn chưa kết thúc."
		],
		"thai": [
			"ความวิกลจริตของ Mr. K-jang หยุดลง, แต่ความเศร้าของเขากลับซึมลึกเข้าไปในเมือง.",
			"สมุดบัญชีเก่าไม่บันทึกตัวเลขอีกต่อไป. เหลือไว้เพียงร่องรอยของเวลาที่หายไปและครอบครัว.",
			"นาฬิกาที่หยุดนิ่งได้เคลื่อนไหวอีกครั้ง. แต่ใครจะสามารถบันทึกเวลานั้นได้อย่างถูกต้อง?",
			"ความยุติธรรมกลับคืนมาแล้วหรือ, หรือตกอยู่ในวงจรความรู้สึกผิดอีกครั้ง? การชำระบัญชียังไม่สิ้นสุด."
		],
		"hindi": [
			"मिस्टर के-जंग का पागलपन तो रुक गया, लेकिन उनका दुख शहर में गहराई तक फैल गया।",
			"पुराने बही-खाते में अब संख्याएँ दर्ज नहीं थीं। केवल खोए हुए समय और परिवार के निशान बाकी थे।",
			"रुकी हुई घड़ी फिर से चलने लगी। लेकिन, उस समय को सही ढंग से कौन दर्ज कर पाएगा?",
			"क्या न्याय बहाल हुआ, या वे अपराधबोध के एक और चक्र में फँस गए? हिसाब-किताब, अभी खत्म नहीं हुआ है।"
		]
	}
} as const;
