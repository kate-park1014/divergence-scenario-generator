export const scenario_modern_scrivener_23_01 = {
	"scenario_id": "modern_scrivener_23_01",
	"order": 1,
	"act": "intro",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 공공 스크린들이 일제히 붉게 물들었다. 알 수 없는 경고 메시지가 깜빡인다.",
						"english": "The city's public screens simultaneously turned red. An unknown warning message flashes.",
						"japanese": "都市の公共スクリーンが一斉に赤く染まった。未知の警告メッセージが点滅する。",
						"chinese": "城市的公共屏幕同时变红。一条未知的警告信息闪烁着。",
						"french": "Les écrans publics de la ville sont devenus rouges simultanément. Un message d'avertissement inconnu clignote.",
						"spanish": "Las pantallas públicas de la ciudad se tiñeron de rojo simultáneamente. Un mensaje de advertencia desconocido parpadea.",
						"vietnamese": "Các màn hình công cộng của thành phố đồng loạt chuyển sang màu đỏ. Một thông điệp cảnh báo không rõ đang nhấp nháy.",
						"thai": "หน้าจอสาธารณะของเมืองเปลี่ยนเป็นสีแดงพร้อมกัน ข้อความเตือนที่ไม่รู้จักกะพริบ",
						"hindi": "शहर की सार्वजनिक स्क्रीनें एक साथ लाल हो गईं। एक अज्ञात चेतावनी संदेश चमक रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 다 뭐야? 무슨 오류라도 난 건가?",
						"english": "What is all this? Is it some kind of error?",
						"japanese": "これ、一体何？何かエラーでも起きたの？",
						"chinese": "这都是什么？是出了什么错误吗？",
						"french": "Qu'est-ce que c'est que tout ça ? Est-ce une sorte d'erreur ?",
						"spanish": "¿Qué es todo esto? ¿Es algún tipo de error?",
						"vietnamese": "Tất cả những điều này là gì? Có phải là một lỗi nào đó không?",
						"thai": "นี่มันอะไรกัน? เกิดข้อผิดพลาดอะไรขึ้นเหรอ?",
						"hindi": "यह सब क्या है? क्या यह कोई त्रुटि है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "아니요… 저건 오류가 아니에요. '정산'… 이라는 이름의 재앙이죠.",
						"english": "No... that's not an error. It's a disaster called 'Settlement'.",
						"japanese": "いいえ…あれはエラーではありません。『清算』…という名の災厄です。",
						"chinese": "不……那不是错误。那是一场名为“清算”的灾难。",
						"french": "Non... ce n'est pas une erreur. C'est une catastrophe appelée 'Règlement'.",
						"spanish": "No... eso no es un error. Es un desastre llamado 'Ajuste'.",
						"vietnamese": "Không… đó không phải là lỗi. Đó là một thảm họa mang tên 'Thanh toán'.",
						"thai": "ไม่หรอก... นั่นไม่ใช่ข้อผิดพลาด มันคือหายนะที่เรียกว่า 'การชำระหนี้' ต่างหาก",
						"hindi": "नहीं... वह कोई त्रुटि नहीं है। वह 'निपटान' नाम की एक आपदा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정산? 당신은…?",
						"english": "Settlement? And you are...?",
						"japanese": "清算？あなたは…？",
						"chinese": "清算？你是……？",
						"french": "Règlement ? Et vous êtes...?",
						"spanish": "¿Ajuste? ¿Y tú eres...?",
						"vietnamese": "Thanh toán? Và bạn là…?",
						"thai": "การชำระหนี้? แล้วคุณคือ...?",
						"hindi": "निपटान? और तुम कौन हो...?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "니아예요. 이 불운한 도시의 한 시민일 뿐…",
						"english": "I'm Nia. Just a citizen of this unfortunate city...",
						"japanese": "ニアです。この不運な都市の、ただの一市民に過ぎません…",
						"chinese": "我是妮娅。只是这个不幸城市的一个市民而已……",
						"french": "Je suis Nia. Juste une citoyenne de cette ville malheureuse...",
						"spanish": "Soy Nia. Solo una ciudadana de esta desafortunada ciudad...",
						"vietnamese": "Tôi là Nia. Chỉ là một công dân của thành phố không may này…",
						"thai": "ฉันคือนีอา ก็แค่พลเมืองคนหนึ่งของเมืองที่โชคร้ายแห่งนี้...",
						"hindi": "मैं निया हूँ। बस इस दुर्भाग्यपूर्ण शहर की एक नागरिक..."
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "nia",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "지난 밤엔 제 이웃이… 그저 오래된 고서를 읽었다는 이유로.",
						"english": "Last night, my neighbor... just for reading an old book.",
						"japanese": "昨夜、私の隣人が…ただ古い書物を読んだという理由で。",
						"chinese": "昨晚，我的邻居…仅仅因为读了一本古书。",
						"french": "La nuit dernière, mon voisin... juste pour avoir lu un vieux livre.",
						"spanish": "Anoche, mi vecino... solo por leer un libro antiguo.",
						"vietnamese": "Đêm qua, hàng xóm của tôi… chỉ vì đọc một cuốn sách cổ.",
						"thai": "เมื่อคืนนี้ เพื่อนบ้านของฉัน... เพียงเพราะอ่านหนังสือเก่าเล่มหนึ่ง",
						"hindi": "कल रात, मेरे पड़ोसी... सिर्फ़ एक पुरानी किताब पढ़ने के लिए।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "집과 모든 재산을 '정산'당했어요. 스크린엔 붉은 고문자들과 함께 '정산 완료'가 뜨더군요.",
						"english": "His house and all his property were 'settled'. The screen displayed 'Settlement Complete' with red tormentor symbols.",
						"japanese": "家と全財産を「精算」させられました。画面には赤い拷問者たちの記号と共に「精算完了」と表示されていました。",
						"chinese": "他的房子和所有财产都被“结算”了。屏幕上显示“结算完成”，伴随着红色的折磨者符号。",
						"french": "Sa maison et tous ses biens ont été 'réglés'. L'écran affichait 'Règlement Terminé' avec des symboles de tourmenteurs rouges.",
						"spanish": "Su casa y todas sus propiedades fueron 'liquidadas'. La pantalla mostraba 'Liquidación Completa' con símbolos rojos de torturadores.",
						"vietnamese": "Nhà cửa và toàn bộ tài sản của anh ấy đã bị 'thanh lý'. Màn hình hiện lên 'Thanh lý hoàn tất' cùng với các ký hiệu tra tấn màu đỏ.",
						"thai": "บ้านและทรัพย์สินทั้งหมดของเขาถูก 'ชำระ' หน้าจอแสดง 'ชำระเสร็จสิ้น' พร้อมสัญลักษณ์ผู้ทรมานสีแดง",
						"hindi": "उसके घर और सारी संपत्ति का 'निपटान' हो गया। स्क्रीन पर लाल रंग के यातना देने वाले प्रतीकों के साथ 'निपटान पूर्ण' दिख रहा था।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "고문자? 핏자국 같은 건 없어?",
						"english": "Tormentors? No bloodstains or anything?",
						"japanese": "拷問者？血痕のようなものはないの？",
						"chinese": "折磨者？没有血迹什么的吗？",
						"french": "Des tourmenteurs ? Pas de taches de sang ou quoi que ce soit ?",
						"spanish": "¿Torturadores? ¿No había manchas de sangre ni nada?",
						"vietnamese": "Kẻ tra tấn? Không có vết máu hay gì à?",
						"thai": "ผู้ทรมาน? ไม่มีรอยเลือดอะไรเหรอ?",
						"hindi": "यातना देने वाले? कोई खून के धब्बे वगैरह नहीं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "희미하게… 스쳐 지나가는 디지털 오류처럼. 기분 나쁜 붉은 기운만…",
						"english": "Faintly... like a fleeting digital glitch. Only an unsettling red aura...",
						"japanese": "かすかに…デジタルエラーが過ぎ去るように。不気味な赤い気配だけが…",
						"chinese": "模糊地…像一闪而过的数字错误。只有一种令人不安的红色气息…",
						"french": "Faiblement... comme un bug numérique éphémère. Juste une aura rouge dérangeante...",
						"spanish": "Débilmente... como un error digital fugaz. Solo un aura roja inquietante...",
						"vietnamese": "Mờ nhạt… như một lỗi kỹ thuật số thoáng qua. Chỉ có một luồng khí đỏ đáng sợ…",
						"thai": "จางๆ... เหมือนข้อผิดพลาดทางดิจิทัลที่ผ่านไปอย่างรวดเร็ว มีเพียงออร่าสีแดงที่น่าขนลุก...",
						"hindi": "धुंधला... जैसे एक fleeting डिजिटल गड़बड़। सिर्फ एक परेशान करने वाली लाल आभा..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "대체 누가 이런 말도 안 되는 짓을…?",
						"english": "Who on earth would do something so absurd...?",
						"japanese": "一体誰がこんな馬鹿げたことを…？",
						"chinese": "到底是谁会做这种荒谬的事情…？",
						"french": "Qui diable ferait une chose aussi absurde...?",
						"spanish": "¿Quién demonios haría algo tan absurdo...?",
						"vietnamese": "Rốt cuộc ai lại làm điều vô lý như vậy…?",
						"thai": "ใครกันแน่ที่ทำเรื่องไร้สาระแบบนี้...?",
						"hindi": "आख़िर कौन ऐसा बेतुका काम करेगा...?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그들은… '선조의 빚'이라고 말해요.",
						"english": "They... call it 'Ancestral Debt'.",
						"japanese": "彼らは…「先祖の負債」だと言っています。",
						"chinese": "他们…称之为“祖先的债务”。",
						"french": "Ils... appellent ça la 'Dette Ancestrale'.",
						"spanish": "Ellos... lo llaman la 'Deuda Ancestral'.",
						"vietnamese": "Họ… gọi đó là 'Nợ Tổ Tiên'.",
						"thai": "พวกเขา... เรียกมันว่า 'หนี้บรรพบุรุษ'",
						"hindi": "वे... इसे 'पूर्वजों का कर्ज' कहते हैं।"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "nia",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "오늘은 제 발자취마다… 불운이 따라붙었어요. 횡단보도를 건너다 흙탕물을 뒤집어쓰고…",
						"english": "Today, misfortune followed my every step. I got splashed with mud crossing the street...",
						"japanese": "今日は私の足跡すべてに…不運がつきまといました。横断歩道を渡っていて泥水をかけられ…",
						"chinese": "今天，厄运如影随形。过马路时被泥水溅到…",
						"french": "Aujourd'hui, le malheur a suivi chacun de mes pas. J'ai été éclaboussé de boue en traversant la rue...",
						"spanish": "Hoy, la mala suerte me ha seguido a cada paso. Me salpicaron con barro al cruzar la calle...",
						"vietnamese": "Hôm nay, vận rủi theo sát từng bước chân tôi. Tôi bị văng bùn khi băng qua đường…",
						"thai": "วันนี้ โชคร้ายตามติดทุกย่างก้าวของฉัน ฉันโดนน้ำโคลนกระเด็นใส่ตอนข้ามถนน...",
						"hindi": "आज, बदकिस्मती मेरे हर कदम पर साथ थी। सड़क पार करते हुए मुझ पर कीचड़ उछल गया..."
					},
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "점심은 주문 실수로… 두 배가 청구됐죠. 사소하지만, 끝나지 않는 악몽 같아요.",
						"english": "Lunch was double-charged due to an order error... Minor things, but it feels like an endless nightmare.",
						"japanese": "昼食は注文ミスで…二重に請求されました。些細なことですが、終わりのない悪夢のようです。",
						"chinese": "午餐因为点餐失误…被收了两倍的钱。虽然是小事，但感觉像是一场无止尽的噩梦。",
						"french": "Le déjeuner a été facturé en double à cause d'une erreur de commande... Des petites choses, mais ça ressemble à un cauchemar sans fin.",
						"spanish": "El almuerzo me lo cobraron el doble por un error en el pedido... Cosas pequeñas, pero se siente como una pesadilla interminable.",
						"vietnamese": "Bữa trưa bị tính tiền gấp đôi vì lỗi đặt món… Những chuyện nhỏ nhặt, nhưng cứ như một cơn ác mộng không hồi kết.",
						"thai": "มื้อกลางวันถูกคิดเงินเป็นสองเท่าเพราะความผิดพลาดในการสั่ง... เรื่องเล็กๆ น้อยๆ แต่รู้สึกเหมือนฝันร้ายที่ไม่สิ้นสุด",
						"hindi": "लंच में ऑर्डर की गलती से... दुगना बिल आ गया। छोटी-छोटी बातें, पर यह एक अंतहीन बुरे सपने जैसा लगता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그게 다 '정산' 때문이라고?",
						"english": "All because of 'settlement'?",
						"japanese": "それ全部「精算」のせいだと？",
						"chinese": "都因为“结算”？",
						"french": "Tout ça à cause du 'règlement' ?",
						"spanish": "¿Todo por la 'liquidación'?",
						"vietnamese": "Tất cả là do 'thanh lý' ư?",
						"thai": "ทั้งหมดเป็นเพราะ 'การชำระ' เหรอ?",
						"hindi": "यह सब 'निपटान' की वजह से है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "점점 확실해져요. 마치 보이지 않는 누군가가… 제 주변의 모든 것을 계산하고 있는 것 같아요.",
						"english": "It's becoming clearer. It's as if someone invisible... is calculating everything around me.",
						"japanese": "だんだん確信に変わってきました。まるで目に見えない誰かが…私の周りのすべてを計算しているようです。",
						"chinese": "越来越确定了。就好像有某个看不见的人…正在计算我身边的一切。",
						"french": "Ça devient de plus en plus clair. C'est comme si quelqu'un d'invisible... calculait tout autour de moi.",
						"spanish": "Cada vez está más claro. Es como si alguien invisible... estuviera calculando todo a mi alrededor.",
						"vietnamese": "Nó ngày càng trở nên rõ ràng hơn. Cứ như có ai đó vô hình… đang tính toán mọi thứ xung quanh tôi vậy.",
						"thai": "มันเริ่มชัดเจนขึ้นเรื่อยๆ เหมือนมีใครบางคน... ที่มองไม่เห็น กำลังคำนวณทุกสิ่งรอบตัวฉัน",
						"hindi": "यह और साफ होता जा रहा है। मानो कोई अदृश्य व्यक्ति... मेरे आसपास की हर चीज की गणना कर रहा हो।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "누군가…?",
						"english": "Someone…?",
						"japanese": "「誰か…？」",
						"chinese": "“有人…？”",
						"french": "« Quelqu'un… ? »",
						"spanish": "« ¿Alguien…? »",
						"vietnamese": "“Ai đó…?”",
						"thai": "“ใครบางคน…?”",
						"hindi": "“कोई…?”"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 이상… 피할 수 없을 것 같아요.",
						"english": "I don't think… we can avoid it anymore.",
						"japanese": "「もう…避けられないようです。」",
						"chinese": "“我恐怕…无法再逃避了。”",
						"french": "« Je ne crois pas… que nous puissions l'éviter plus longtemps. »",
						"spanish": "« Me parece que… ya no podremos evitarlo. »",
						"vietnamese": "“Tôi e rằng… không thể tránh được nữa rồi.”",
						"thai": "“ฉันว่า…คงเลี่ยงไม่ได้อีกแล้ว”",
						"hindi": "“मुझे लगता है कि… अब हम इससे बच नहीं सकते।”"
					},
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭘 피할 수 없어?",
						"english": "What are you talking about? Avoid what?",
						"japanese": "「何を言ってるんだ？何を避けられないって？」",
						"chinese": "“你在说什么？避开什么？”",
						"french": "« De quoi parles-tu ? Éviter quoi ? »",
						"spanish": "« ¿De qué hablas? ¿Evitar qué? »",
						"vietnamese": "“Cô nói gì vậy? Tránh cái gì cơ?”",
						"thai": "“นายพูดอะไรน่ะ? เลี่ยงอะไรไม่ได้?”",
						"hindi": "“क्या बक रहे हो? किससे बच नहीं सकते?”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "이 도시의 모든 이들이… 곧 청구서를 받을 거예요. 저처럼, 제 이웃처럼.",
						"english": "Everyone in this city… will soon receive their bill. Like me, like my neighbors.",
						"japanese": "「この街の誰もが…もうすぐ請求書を受け取ることになるでしょう。私のように、私の隣人のように。」",
						"chinese": "“这座城市里的每个人…很快都会收到账单。像我一样，像我的邻居一样。”",
						"french": "« Tout le monde dans cette ville… recevra bientôt sa facture. Comme moi, comme mes voisins. »",
						"spanish": "« Todos en esta ciudad… pronto recibirán su factura. Como yo, como mis vecinos. »",
						"vietnamese": "“Mọi người trong thành phố này… sẽ sớm nhận được hóa đơn thôi. Giống như tôi, giống như hàng xóm của tôi.”",
						"thai": "“ทุกคนในเมืองนี้…อีกไม่นานก็จะได้รับใบเรียกเก็บเงิน เหมือนฉัน เหมือนเพื่อนบ้านฉัน”",
						"hindi": "“इस शहर में हर कोई… जल्द ही अपना बिल प्राप्त करेगा। मेरी तरह, मेरे पड़ोसियों की तरह।”"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "스크리브너가… 모든 것을 기록하고 있어요. 당신들의 빚까지도.",
						"english": "The Scribner… is recording everything. Even your debts.",
						"japanese": "「スクリブナーが…全てを記録している。あなた方の借金までも。」",
						"chinese": "“斯克里布纳…正在记录一切。甚至你们的债务。”",
						"french": "« Le Scribener… enregistre tout. Même vos dettes. »",
						"spanish": "« El Scribner… lo está registrando todo. Incluso vuestras deudas. »",
						"vietnamese": "“Scribner… đang ghi lại tất cả. Kể cả khoản nợ của các người.”",
						"thai": "“สไครบเนอร์…กำลังบันทึกทุกสิ่ง แม้กระทั่งหนี้ของพวกนาย”",
						"hindi": "“स्क्रिवनर… सब कुछ दर्ज कर रहा है। यहाँ तक कि तुम्हारे कर्ज भी।”"
					},
					"speaker": "nia"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "스크리브너? 그게 뭔데!",
						"english": "Scribner? What's that!",
						"japanese": "「スクリブナー？それは何だ！」",
						"chinese": "“斯克里布纳？那是什么！”",
						"french": "« Scribener ? C'est quoi ça ! »",
						"spanish": "« ¿Scribner? ¡¿Qué es eso?! »",
						"vietnamese": "“Scribner? Nó là cái gì chứ!”",
						"thai": "“สไครบเนอร์? นั่นมันอะไร!”",
						"hindi": "“स्क्रिवनर? वो क्या है!”"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "그 이름이… 도시의 모든 그림자 속에서 울려요.",
						"english": "That name… echoes in every shadow of the city.",
						"japanese": "「その名前が…街の全ての影の中で響き渡る。」",
						"chinese": "“那个名字…在城市的每一个阴影中回荡。”",
						"french": "« Ce nom… résonne dans chaque ombre de la ville. »",
						"spanish": "« Ese nombre… resuena en cada sombra de la ciudad. »",
						"vietnamese": "“Cái tên đó… vang vọng trong mọi ngóc ngách bóng tối của thành phố.”",
						"thai": "“ชื่อนั้น…สะท้อนอยู่ในทุกเงาของเมือง”",
						"hindi": "“वह नाम… शहर की हर परछाई में गूंजता है।”"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 심장부, 거대한 디지털 고문자가 회전하며 그림자를 드리웠다.",
						"english": "In the heart of the city, a colossal digital tormentor rotated, casting shadows.",
						"japanese": "「街の中心部、巨大なデジタル拷問者が回転し、影を落とした。」",
						"chinese": "“城市的心脏地带，一个巨大的数字拷问者旋转着，投下阴影。”",
						"french": "« Au cœur de la ville, un colossal tortionnaire numérique tournait, projetant des ombres. »",
						"spanish": "« En el corazón de la ciudad, un colosal torturador digital giraba, proyectando sombras. »",
						"vietnamese": "“Tại trung tâm thành phố, một cỗ máy tra tấn kỹ thuật số khổng lồ xoay tròn, phủ bóng tối.”",
						"thai": "“ใจกลางเมือง เครื่องทรมานดิจิทัลขนาดมหึมากำลังหมุนวน พาดเงาไปทั่ว”",
						"hindi": "“शहर के हृदय में, एक विशाल डिजिटल यातना देने वाला घूम रहा था, छायाएँ डाल रहा था।”"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "오셨군. 때가 되었다. 모든 미지불금은… 정산될지니.",
						"english": "You've arrived. The time has come. All unpaid dues… shall be settled.",
						"japanese": "「来たか。時が来た。全ての未払い金は…清算されるだろう。」",
						"chinese": "“你来了。是时候了。所有未付款项…都将结清。”",
						"french": "« Vous êtes arrivé. Le moment est venu. Toutes les dettes impayées… seront réglées. »",
						"spanish": "« Has llegado. Ha llegado el momento. Todas las deudas impagas… serán saldadas. »",
						"vietnamese": "“Ngươi đã đến rồi. Đã đến lúc. Mọi khoản nợ chưa thanh toán… sẽ được giải quyết.”",
						"thai": "“มาแล้วสินะ ได้เวลาแล้ว หนี้ที่ค้างชำระทั้งหมด…จะถูกสะสาง”",
						"hindi": "“तुम आ गए। समय आ गया है। सभी लंबित भुगतान… निपटा दिए जाएंगे।”"
					}
				},
				{
					"content": {
						"korean": "네가 스크리브너의… 부하인가!",
						"english": "Are you… Scribner's subordinate!",
						"japanese": "「お前がスクリブナーの…部下か！」",
						"chinese": "“你就是斯克里布纳的…手下吗！”",
						"french": "« Tu es le… subordonné de Scribner ! »",
						"spanish": "« ¿Eres tú el… subordinado de Scribner? »",
						"vietnamese": "“Ngươi là… thuộc hạ của Scribner sao!”",
						"thai": "“แกเป็น…ลูกน้องของสไครบเนอร์หรือ!”",
						"hindi": "“क्या तुम… स्क्रिवनर के अधीन हो!”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "난 그저… 질서를 수호하는 자. 너희의 존재 자체가… 빚이다.",
						"english": "I merely... uphold order. Your very existence... is a debt.",
						"japanese": "私はただ… 秩序を守る者。お前たちの存在そのものが… 負債だ。",
						"chinese": "我只是… 秩序的守护者。你们的存在本身… 就是债务。",
						"french": "Je ne fais que… maintenir l'ordre. Votre existence même… est une dette.",
						"spanish": "Yo solo… mantengo el orden. Vuestra existencia misma… es una deuda.",
						"vietnamese": "Ta chỉ là… kẻ giữ gìn trật tự. Sự tồn tại của các ngươi… chính là nợ.",
						"thai": "ข้าแค่… ผู้พิทักษ์ความสงบเรียบร้อย การมีอยู่ของพวกเจ้า… คือหนี้สิน",
						"hindi": "मैं बस… व्यवस्था का संरक्षक हूँ। तुम्हारा अस्तित्व ही… एक ऋण है。"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "말도 안 되는 소리 하지 마! 다 부숴버릴 거야!",
						"english": "Don't talk nonsense! I'll smash everything!",
						"japanese": "くだらないこと言うな！全部ぶっ壊してやる！",
						"chinese": "别胡说八道！我会把一切都摧毁！",
						"french": "Ne dis pas de bêtises ! Je vais tout détruire !",
						"spanish": "¡No digas tonterías! ¡Lo destrozaré todo!",
						"vietnamese": "Đừng nói nhảm nữa! Ta sẽ phá nát tất cả!",
						"thai": "อย่าพูดไร้สาระ! ฉันจะทำลายทุกอย่างทิ้งซะ!",
						"hindi": "बकवास मत करो! मैं सब कुछ तोड़ दूँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크윽… 잠시… 유예될 뿐이다. 진짜 빚은… 아직… 시작도 안 했어.",
						"english": "Urgh... It's merely... postponed. The real debt... hasn't... even begun.",
						"japanese": "ぐう… 少し… 猶予されただけだ。本当の負債は… まだ… 始まってもいない。",
						"chinese": "呃… 这只是… 暂时的延期。真正的债务… 甚至… 都还没开始。",
						"french": "Ugh... Ce n'est que... reporté. La vraie dette... n'a... même pas commencé.",
						"spanish": "Ugh... Solo es... un aplazamiento. La verdadera deuda... ni siquiera... ha empezado.",
						"vietnamese": "Khục... Chỉ là... tạm hoãn thôi. Món nợ thực sự... còn chưa... bắt đầu.",
						"thai": "อึก... แค่... ถูกเลื่อนไปชั่วคราวเท่านั้น หนี้ที่แท้จริง... ยัง... ไม่ได้เริ่มด้วยซ้ำ",
						"hindi": "उफ़… यह बस… कुछ देर की मोहलत है। असली कर्ज़… अभी… शुरू भी नहीं हुआ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 개소리야! 끝났어!",
						"english": "What the hell are you talking about! It's over!",
						"japanese": "何言ってんだ！終わったんだよ！",
						"chinese": "你在胡说八道什么！已经结束了！",
						"french": "Qu'est-ce que tu racontes ?! C'est fini !",
						"spanish": "¡¿Qué tonterías dices?! ¡Se acabó!",
						"vietnamese": "Nói cái quái gì vậy! Kết thúc rồi!",
						"thai": "พูดบ้าอะไร! มันจบแล้ว!",
						"hindi": "यह क्या बकवास है! यह ख़त्म हो गया!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자는 디지털 잔상처럼 흩어졌다. 도시의 붉은 경고는 잠시 멈췄다.",
						"english": "The unknown shadow scattered like a digital afterimage. The city's red alert ceased for a moment.",
						"japanese": "正体不明の影はデジタル残像のように散っていった。都市の赤い警告は一時的に止まった。",
						"chinese": "不明身份的影子如数字残像般消散。城市的红色警报暂时停止了。",
						"french": "L'ombre inconnue se dispersa comme une image rémanente numérique. L'alerte rouge de la ville s'arrêta un instant.",
						"spanish": "La sombra desconocida se dispersó como una imagen residual digital. La alerta roja de la ciudad se detuvo por un momento.",
						"vietnamese": "Bóng đen không rõ danh tính tan biến như tàn dư kỹ thuật số. Cảnh báo đỏ của thành phố tạm thời ngừng lại.",
						"thai": "เงาลึกลับกระจัดกระจายไปราวกับภาพติดตาแบบดิจิทัล สัญญาณเตือนสีแดงของเมืองหยุดลงชั่วขณะ",
						"hindi": "अज्ञात परछाई डिजिटल आभास की तरह बिखर गई। शहर की लाल चेतावनी एक पल के लिए थम गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 안도감은 잠시. 도시의 깊은 곳에서는, 또 다른 부채의 장부가 조용히 열리고 있었다.",
						"english": "But relief was short-lived. Deep within the city, another ledger of debt was quietly opening.",
						"japanese": "しかし安堵は束の間。都市の奥深くでは、別の負債の帳簿が静かに開かれつつあった。",
						"chinese": "然而，宽慰只是暂时的。在城市的深处，另一本债务账簿正悄然开启。",
						"french": "Mais le soulagement fut de courte durée. Au plus profond de la ville, un autre registre de dettes s'ouvrait silencieusement.",
						"spanish": "Pero el alivio duró poco. En lo profundo de la ciudad, otro libro de deudas se abría silenciosamente.",
						"vietnamese": "Tuy nhiên, sự nhẹ nhõm chỉ là tạm thời. Sâu thẳm trong thành phố, một cuốn sổ nợ khác đang lặng lẽ mở ra.",
						"thai": "แต่ความโล่งใจอยู่ได้ไม่นาน ลึกเข้าไปในเมือง สมุดบัญชีหนี้สินอีกเล่มกำลังถูกเปิดออกอย่างเงียบงัน",
						"hindi": "किन्तु राहत क्षणिक थी। शहर के गहरे भीतर, ऋण का एक और बहीखाता चुपचाप खुल रहा था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 발버둥. 너희의 빚은… 더욱 늘어날 뿐이다.",
						"english": "Worthless struggle. Your debt... will only grow.",
						"japanese": "つまらないもがきだ。お前たちの負債は… さらに増えるだけだ。",
						"chinese": "无谓的挣扎。你们的债务… 只会越积越多。",
						"french": "Lutte futile. Votre dette… ne fera que s'accroître.",
						"spanish": "Lucha inútil. Vuestra deuda… solo crecerá.",
						"vietnamese": "Sự vùng vẫy vô nghĩa. Món nợ của các ngươi… sẽ chỉ càng tăng thêm.",
						"thai": "การดิ้นรนที่ไร้ค่า หนี้สินของพวกเจ้า... จะยิ่งเพิ่มพูนขึ้นเท่านั้น",
						"hindi": "तुच्छ संघर्ष। तुम्हारा ऋण… बस और बढ़ेगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시… 다시 올 거야!",
						"english": "Damn it... I'll... I'll be back!",
						"japanese": "くそ… また… また来るからな！",
						"chinese": "该死… 我会… 我会再回来！",
						"french": "Maudits... Je... Je reviendrai !",
						"spanish": "¡Maldita sea...! ¡Volveré...!",
						"vietnamese": "Khỉ thật... Ta sẽ... Ta sẽ quay lại!",
						"thai": "ให้ตายสิ... ฉันจะ... กลับมาอีก!",
						"hindi": "लानत है… मैं… मैं फिर आऊँगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은… 계산은 끝났다.",
						"english": "Foolish... The reckoning is over.",
						"japanese": "愚かな… 計算は終わった。",
						"chinese": "愚蠢的… 计算结束了。",
						"french": "Idiots... Le calcul est terminé.",
						"spanish": "Estúpido... El ajuste de cuentas ha terminado.",
						"vietnamese": "Ngu ngốc... Cuộc tính toán đã kết thúc.",
						"thai": "โง่เขลา... การคำนวณสิ้นสุดลงแล้ว",
						"hindi": "मूर्ख… हिसाब पूरा हुआ।"
					},
					"speaker": "random_boss"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 곳곳, 알 수 없는 '정산'이 시작됐다.",
			"디지털의 강물 속에 고대의 맹세가 스며들고.",
			"누구도 피할 수 없는 빚의 굴레 속에서,",
			"불운에 시달리는 한 소녀가 진실을 마주한다.",
			"이 모든 것이 우연일 리 없다. 파국은 이미 시작되었다."
		],
		"english": [
			"Across the city, an unknown 'Settlement' has begun.",
			"Within the digital river, an ancient vow seeps in.",
			"In the inescapable shackles of debt,",
			"A girl plagued by misfortune faces the truth.",
			"None of this can be a coincidence. The catastrophe has already begun."
		],
		"japanese": [
			"街のあちこちで、未知の「清算」が始まった。",
			"デジタルの川に、古の誓いが染み渡る。",
			"誰も逃れられない負債の鎖の中で、",
			"不運に苛まれる一人の少女が、真実と向き合う。",
			"これら全てが偶然のはずがない。破局は既に始まっている。"
		],
		"chinese": [
			"城市的各个角落，未知的“清算”开始了。",
			"在数字的河流中，古老的誓言渗透着。",
			"在无人能逃的债务枷锁中，",
			"一个被不幸困扰的少女，面对着真相。",
			"这一切不可能是巧合。灾难已经开始。"
		],
		"french": [
			"Partout dans la ville, un 'Règlement' inconnu a commencé.",
			"Dans la rivière numérique, un ancien serment s'infiltre.",
			"Dans le carcan inévitable de la dette,",
			"Une fille accablée par le malheur fait face à la vérité.",
			"Tout cela ne peut être une coïncidence. La catastrophe a déjà commencé."
		],
		"spanish": [
			"Por toda la ciudad, un 'Ajuste' desconocido ha comenzado.",
			"En el río digital, un antiguo juramento se filtra.",
			"En la ineludible cadena de la deuda,",
			"Una chica asediada por la desgracia se enfrenta a la verdad.",
			"Nada de esto puede ser una coincidencia. La catástrofe ya ha comenzado."
		],
		"vietnamese": [
			"Khắp thành phố, một 'Thanh toán' không rõ đã bắt đầu.",
			"Trong dòng sông kỹ thuật số, một lời thề cổ xưa đang thấm vào.",
			"Trong vòng xoáy nợ nần không thể thoát khỏi,",
			"Một cô gái gặp phải bất hạnh đối mặt với sự thật.",
			"Tất cả những điều này không thể là sự trùng hợp. Thảm họa đã bắt đầu."
		],
		"thai": [
			"ทั่วเมือง 'การชำระหนี้' ที่ไม่รู้จักได้เริ่มต้นขึ้นแล้ว",
			"ในกระแสธารดิจิทัล คำสาบานโบราณได้ซึมซับเข้าไป",
			"ในวงวนของหนี้สินที่ไม่มีใครหลีกเลี่ยงได้",
			"เด็กสาวผู้โชคร้ายคนหนึ่งกำลังเผชอิญหน้ากับความจริง",
			"ทั้งหมดนี้ไม่น่าจะใช่เรื่องบังเอิญ หายนะได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"शहर भर में, एक अज्ञात 'निपटान' शुरू हो गया है。",
			"डिजिटल नदी के भीतर, एक प्राचीन प्रतिज्ञा समा रही है।",
			"कर्ज के उस चंगुल में जिससे कोई बच नहीं सकता,",
			"बदनसीबी से घिरी एक लड़की सच्चाई का सामना करती है।",
			"यह सब संयोग नहीं हो सकता। तबाही पहले ही शुरू हो चुकी है।"
		]
	}
} as const;
