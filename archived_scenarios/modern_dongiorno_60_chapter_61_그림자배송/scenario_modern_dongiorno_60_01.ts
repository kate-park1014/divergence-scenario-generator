export const scenario_modern_dongiorno_60_01 = {
	"scenario_id": "modern_dongiorno_60_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 밤은 비로 젖어 있었다. '지오르노' 빌딩의 네온사인이 유난히 차갑게 빛났다.",
						"english": "The city night was soaked with rain. The 'Giorno' building's neon sign glowed with an unusual coldness.",
						"japanese": "都市の夜は雨に濡れていた。「ジョルノ」ビルのネオンサインがひときわ冷たく輝いた。",
						"chinese": "城市的夜晚被雨水浸湿。“乔尔诺”大楼的霓虹灯异常冰冷地闪烁着。",
						"french": "La nuit de la ville était trempée par la pluie. L'enseigne néon du bâtiment 'Giorno' brillait d'une froideur inhabituelle.",
						"spanish": "La noche de la ciudad estaba empapada por la lluvia. El letrero de neón del edificio 'Giorno' brillaba con una frialdad inusual.",
						"vietnamese": "Đêm thành phố ướt đẫm mưa. Đèn neon của tòa nhà 'Giorno' phát sáng một cách lạnh lẽo lạ thường.",
						"thai": "ค่ำคืนในเมืองเปียกชุ่มไปด้วยฝน ป้ายนีออนของอาคาร 'จอร์โน' ส่องแสงเย็นยะเยือกเป็นพิเศษ",
						"hindi": "शहर की रात बारिश से भीगी हुई थी। 'जिओर्नो' बिल्डिंग की नियॉन साइन असामान्य रूप से ठंडी चमक रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "...드디어 와주셨군요. 기다렸습니다.",
						"english": "...You've finally arrived. I've been waiting.",
						"japanese": "…ついに来てくれましたね。待っていました。",
						"chinese": "……您终于来了。我一直在等您。",
						"french": "...Vous êtes enfin là. Je vous attendais.",
						"spanish": "...Finalmente has llegado. Te he estado esperando.",
						"vietnamese": "...Cuối cùng anh cũng đến rồi. Tôi đã đợi anh.",
						"thai": "...ในที่สุดคุณก็มา ผมรออยู่เลย",
						"hindi": "...आप आखिरकार आ गए। मैं इंतजार कर रहा था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신이 린? 제보 내용이 사실이라면...",
						"english": "You're Lin? If the information you provided is true...",
						"japanese": "あなたがリン？ 提供された情報が事実なら…",
						"chinese": "你是琳？如果举报内容属实……",
						"french": "Vous êtes Lin ? Si les informations que vous avez fournies sont vraies...",
						"spanish": "¿Tú eres Lin? Si la información que proporcionaste es cierta...",
						"vietnamese": "Cô là Lin? Nếu thông tin tố giác là thật...",
						"thai": "คุณคือหลิน? ถ้าข้อมูลที่แจ้งมาเป็นเรื่องจริง...",
						"hindi": "आप लिन हैं? यदि आपके द्वारा दी गई जानकारी सच है तो..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네, 보십시오. '지오르노'는 겉으로만 깨끗한 척합니다.",
						"english": "Yes, look. 'Giorno' only pretends to be clean on the surface.",
						"japanese": "ええ、見てください。「ジョルノ」は表面上だけ潔白を装っているんです。",
						"chinese": "是的，请看。“乔尔诺”只是表面上装作清白。",
						"french": "Oui, regardez. 'Giorno' ne fait que semblant d'être propre en surface.",
						"spanish": "Sí, mire. 'Giorno' solo finge ser limpio en la superficie.",
						"vietnamese": "Vâng, hãy xem. 'Giorno' chỉ giả vờ trong sạch bên ngoài thôi.",
						"thai": "ใช่แล้ว ดูนี่สิ 'จอร์โน' แค่แสร้งทำเป็นสะอาดภายนอกเท่านั้นแหง่ะ",
						"hindi": "हाँ, देखो। 'जिओर्नो' केवल ऊपर से साफ होने का ढोंग करता है।"
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
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "어젯밤, '지오르노'의 프리미엄 트럭에서 이걸 발견했습니다.",
						"english": "Last night, I found this in 'Giorno''s premium truck.",
						"japanese": "昨晩、「ジョルノ」のプレミアムトラックでこれを見つけました。",
						"chinese": "昨晚，我在“乔尔诺”的高级卡车里发现了这个。",
						"french": "Hier soir, j'ai trouvé ceci dans le camion premium de 'Giorno'.",
						"spanish": "Anoche, encontré esto en el camión premium de 'Giorno'.",
						"vietnamese": "Đêm qua, tôi đã tìm thấy cái này trong chiếc xe tải cao cấp của 'Giorno'.",
						"thai": "เมื่อคืนนี้ ฉันเจอสิ่งนี้ในรถบรรทุกพรีเมียมของ 'จอร์โน'",
						"hindi": "कल रात, मैंने यह 'जिओर्नो' के प्रीमियम ट्रक में पाया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "땅에 떨어진 상자가 깨지며 내용물이 흩어졌다. 평범한 기념품이 아니었다.",
						"english": "The fallen box broke open, scattering its contents. It wasn't an ordinary souvenir.",
						"japanese": "地面に落ちた箱が壊れ、中身が散らばった。それはただの記念品ではなかった。",
						"chinese": "掉在地上的箱子破裂了，里面的东西散落一地。那不是普通的纪念品。",
						"french": "La boîte tombée au sol s'est brisée, dispersant son contenu. Ce n'était pas un souvenir ordinaire.",
						"spanish": "La caja caída se rompió, esparciendo su contenido. No era un recuerdo común.",
						"vietnamese": "Chiếc hộp rơi xuống đất vỡ tan, làmContents bên trong rơi vãi. Đó không phải là một món quà lưu niệm bình thường.",
						"thai": "กล่องที่ตกลงพื้นแตกออก ข้าวของข้างในกระจัดกระจาย มันไม่ใช่ของที่ระลึกธรรมดา",
						"hindi": "गिरा हुआ डिब्बा टूट गया, और उसकी सामग्री बिखर गई। यह कोई साधारण स्मृति चिन्ह नहीं था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정교하게 위조된 신분증입니다. 단순한 배송 사고가 아니라는 뜻이죠.",
						"english": "This is an elaborately forged ID. This wasn't just a delivery error.",
						"japanese": "これは精巧に偽造された身分証です。単なる配送事故ではありませんね。",
						"chinese": "这是精心伪造的身份证。这意味着这并非简单的配送事故。",
						"french": "C'est une carte d'identité minutieusement falsifiée. Ce n'est pas un simple accident de livraison.",
						"spanish": "Esta es una identificación elaboradamente falsificada. Esto significa que no fue un simple error de entrega.",
						"vietnamese": "Đây là một thẻ căn cước giả mạo tinh vi. Điều này có nghĩa đây không phải là một tai nạn giao hàng đơn thuần.",
						"thai": "นี่คือบัตรประจำตัวที่ปลอมแปลงมาอย่างประณีต นั่นหมายความว่านี่ไม่ใช่แค่อุบัติเหตุการจัดส่งธรรมดา",
						"hindi": "यह एक बड़ी सावधानी से जाली बनाई गई आईडी है। इसका मतलब है कि यह सिर्फ एक डिलीवरी की गलती नहीं थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위조 신분증... 이걸로 뭘 하려는 거지?",
						"english": "A forged ID... What are they trying to do with this?",
						"japanese": "偽造身分証... これで何をしようとしているんだ？",
						"chinese": "伪造的身份证... 他们想用这个做什么？",
						"french": "Une carte d'identité falsifiée... Que comptent-ils en faire ?",
						"spanish": "Una identificación falsificada... ¿Qué intentan hacer con esto?",
						"vietnamese": "Thẻ căn cước giả... Chúng định làm gì với cái này?",
						"thai": "บัตรประจำตัวปลอม... พวกเขาจะใช้มันทำอะไร?",
						"hindi": "एक जाली आईडी... वे इससे क्या करना चाहते हैं?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "이 신분증은 빙산의 일각일 겁니다. '지오르노'는 도시의 모든 것을 통제합니다.",
						"english": "This ID is just the tip of the iceberg. 'Giorno' controls everything in the city.",
						"japanese": "この身分証は氷山の一角でしょう。『ジョルノ』は街のすべてを支配しています。",
						"chinese": "这张身份证只是冰山一角。'乔尔诺'控制着这座城市的一切。",
						"french": "Cette carte d'identité n'est que la partie émergée de l'iceberg. 'Giorno' contrôle tout en ville.",
						"spanish": "Esta identificación es solo la punta del iceberg. 'Giorno' controla todo en la ciudad.",
						"vietnamese": "Thẻ căn cước này chỉ là phần nổi của tảng băng chìm. 'Giorno' kiểm soát mọi thứ trong thành phố.",
						"thai": "บัตรประจำตัวนี้เป็นแค่ยอดของภูเขาน้ำแข็ง 'จอร์โน' ควบคุมทุกอย่างในเมือง",
						"hindi": "यह आईडी केवल हिमखंड का सिरा है। 'जिओर्नो' शहर की हर चीज़ को नियंत्रित करता है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...너무 거대한 조직이야.",
						"english": "...It's too massive an organization.",
						"japanese": "...あまりに巨大な組織だ。",
						"chinese": "...这是一个太过庞大的组织。",
						"french": "...C'est une organisation trop vaste.",
						"spanish": "...Es una organización demasiado grande.",
						"vietnamese": "...Một tổ chức quá lớn.",
						"thai": "...เป็นองค์กรที่ใหญ่เกินไป",
						"hindi": "...यह बहुत बड़ी संस्था है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "조심하십시오. '지오르노'의 그림자는 생각보다 깊습니다. 섣불리 움직이면 위험합니다.",
						"english": "Be careful. 'Giorno's' shadow runs deeper than you think. Moving rashly is dangerous.",
						"japanese": "気を付けてください。『ジョルノ』の影は思ったより深い。軽率に動けば危険です。",
						"chinese": "请小心。'乔尔诺'的势力比你想象的要深。轻举妄动很危险。",
						"french": "Soyez prudent. L'ombre de 'Giorno' est plus profonde que vous ne le pensez. Agir imprudemment est dangereux.",
						"spanish": "Tenga cuidado. La sombra de 'Giorno' es más profunda de lo que cree. Moverse precipitadamente es peligroso.",
						"vietnamese": "Hãy cẩn thận. Cái bóng của 'Giorno' sâu hơn bạn nghĩ. Hành động hấp tấp sẽ rất nguy hiểm.",
						"thai": "ระวังให้ดี เงาของ 'จอร์โน' ลึกกว่าที่คุณคิด การเคลื่อนไหวโดยประมาทเป็นอันตราย",
						"hindi": "सावधान रहें। 'जिओर्नो' की छाया जितनी आप सोचते हैं, उससे कहीं अधिक गहरी है। जल्दबाज़ी में कदम उठाना खतरनाक है।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 순 없어.",
						"english": "I can't stop.",
						"japanese": "止まるわけにはいかない。",
						"chinese": "我不能停下。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo detenerme.",
						"vietnamese": "Tôi không thể dừng lại.",
						"thai": "ฉันหยุดไม่ได้",
						"hindi": "मैं रुक नहीं सकता।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "이제 정말 돌아갈 수 없습니다. 그들은 당신이 움직인다는 걸 알 겁니다.",
						"english": "There's no turning back now. They'll know you're making a move.",
						"japanese": "もう後戻りはできません。彼らはあなたが動いていることを知るでしょう。",
						"chinese": "现在真的无法回头了。他们会知道你正在采取行动。",
						"french": "Il n'y a plus de retour en arrière possible. Ils sauront que vous êtes en mouvement.",
						"spanish": "Ya no hay vuelta atrás. Sabrán que te estás moviendo.",
						"vietnamese": "Bây giờ thật sự không thể quay lại được nữa. Họ sẽ biết bạn đang hành động.",
						"thai": "ตอนนี้คุณกลับไปไม่ได้แล้ว พวกเขาจะรู้ว่าคุณกำลังเคลื่อนไหว",
						"hindi": "अब वाकई कोई वापसी नहीं है। वे जान जाएंगे कि आप आगे बढ़ रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "알아. 하지만 멈출 순 없어.",
						"english": "I know. But I can't stop.",
						"japanese": "分かってる。でも、止まるわけにはいかない。",
						"chinese": "我知道。但我不能停下。",
						"french": "Je sais. Mais je ne peux pas m'arrêter.",
						"spanish": "Lo sé. Pero no puedo detenerme.",
						"vietnamese": "Tôi biết. Nhưng tôi không thể dừng lại.",
						"thai": "ฉันรู้ แต่ฉันหยุดไม่ได้",
						"hindi": "मुझे पता है। लेकिन मैं रुक नहीं सकता।"
					}
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "제보했던 걸 후회하게 될지도 모릅니다...",
						"english": "You might regret informing them...",
						"japanese": "通報したことを後悔するかもしれません...",
						"chinese": "你可能会后悔告发他们...",
						"french": "Vous pourriez regretter de les avoir informés...",
						"spanish": "Puede que se arrepienta de haberlos informado...",
						"vietnamese": "Bạn có thể sẽ hối hận vì đã báo cáo...",
						"thai": "คุณอาจจะเสียใจที่แจ้งเบาะแสไป...",
						"hindi": "आप उन्हें सूचित करने पर पछता सकते हैं..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "후회 안 해. 진실을 밝혀야 해.",
						"english": "I won't regret it. I have to reveal the truth.",
						"japanese": "後悔しない。真実を明かさなければならない。",
						"chinese": "我不会后悔。我必须揭露真相。",
						"french": "Je ne le regretterai pas. Je dois révéler la vérité.",
						"spanish": "No me arrepentiré. Debo revelar la verdad.",
						"vietnamese": "Tôi sẽ không hối hận. Tôi phải phơi bày sự thật.",
						"thai": "ฉันไม่เสียใจ ฉันต้องเปิดเผยความจริง",
						"hindi": "मुझे पछतावा नहीं होगा। मुझे सच्चाई उजागर करनी है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "낡은 창고, 희미한 불빛 아래 거대한 그림자가 움직였다.",
						"english": "In the old warehouse, a colossal shadow stirred under dim light.",
						"japanese": "廃倉庫、薄明かりの下で巨大な影が動いた。",
						"chinese": "废弃的仓库里，昏暗的灯光下，一个巨大的身影晃动着。",
						"french": "Dans le vieil entrepôt, une ombre colossale bougeait sous une lumière tamisée.",
						"spanish": "En el viejo almacén, una sombra colosal se movió bajo una luz tenue.",
						"vietnamese": "Trong nhà kho cũ, một bóng đen khổng lồ chuyển động dưới ánh đèn lờ mờ.",
						"thai": "ในโกดังเก่า เงาขนาดมหึมาขยับภายใต้แสงไฟสลัว",
						"hindi": "पुराने गोदाम में, मंद रोशनी के नीचे एक विशाल परछाई हिली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 '지오르노'의 배송망에 손대려는 자는... 제거될 뿐.",
						"english": "Whoever dares to touch Giorno's delivery network... will simply be eliminated.",
						"japanese": "敢えて「ジョルノ」の配送網に手を出そうとする者は…排除されるのみ。",
						"chinese": "胆敢染指“乔尔诺”配送网者…只有被清除的份。",
						"french": "Quiconque ose toucher au réseau de livraison de Giorno... sera simplement éliminé.",
						"spanish": "Quien se atreva a tocar la red de entrega de Giorno... simplemente será eliminado.",
						"vietnamese": "Kẻ nào dám động vào mạng lưới giao hàng của Giorno... sẽ chỉ bị loại bỏ mà thôi.",
						"thai": "ผู้ใดบังอาจแตะต้องเครือข่ายการจัดส่งของ 'จิออร์โน่'... จะถูกกำจัดทิ้งเท่านั้น",
						"hindi": "जो कोई भी 'जियोर्नो' के वितरण नेटवर्क को छूने की हिम्मत करेगा... उसे बस खत्म कर दिया जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 '지오르노'의 개로구나.",
						"english": "So you're Giorno's dog.",
						"japanese": "お前が「ジョルノ」の犬か。",
						"chinese": "你就是“乔尔诺”的走狗。",
						"french": "Alors, tu es le chien de Giorno.",
						"spanish": "Así que eres el perro de Giorno.",
						"vietnamese": "Thì ra ngươi là chó săn của Giorno.",
						"thai": "แกคือหมาของ 'จิออร์โน่' สินะ",
						"hindi": "तो तुम 'जियोर्नो' के कुत्ते हो।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "...건방진. 이 도시의 모든 배달은 곧 나의 법이다.",
						"english": "...Impudent. All deliveries in this city are my law.",
						"japanese": "...生意気な。この街の全ての配達は、即ち私の法だ。",
						"chinese": "……狂妄。这座城市的所有配送，都将是我的律法。",
						"french": "...Impertinent. Toutes les livraisons de cette ville sont ma loi.",
						"spanish": "...Imprudente. Todas las entregas en esta ciudad son mi ley.",
						"vietnamese": "...Vô lễ. Mọi chuyến giao hàng trong thành phố này đều là luật của ta.",
						"thai": "...บังอาจ การจัดส่งทั้งหมดในเมืองนี้คือกฎของข้า",
						"hindi": "...बदतमीज़। इस शहर की सभी डिलीवरी मेरा कानून है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 배달, 내가 멈춰주지.",
						"english": "I'll stop that delivery.",
						"japanese": "その配達、俺が止めてやる。",
						"chinese": "那趟配送，我会让它停止。",
						"french": "Cette livraison, je l'arrêterai.",
						"spanish": "Esa entrega, yo la detendré.",
						"vietnamese": "Chuyến giao hàng đó, ta sẽ chặn lại.",
						"thai": "การจัดส่งนั้น ข้าจะหยุดมันเอง",
						"hindi": "वह डिलीवरी, मैं रोक दूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "그림자는 더욱 짙어졌다. 도시는 침묵했다.",
						"english": "The shadow deepened. The city fell silent.",
						"japanese": "影はさらに濃くなった。街は沈黙した。",
						"chinese": "阴影愈发浓重。城市陷入了沉寂。",
						"french": "L'ombre s'épaissit. La ville se tut.",
						"spanish": "La sombra se hizo más densa. La ciudad enmudeció.",
						"vietnamese": "Bóng tối càng trở nên dày đặc. Thành phố chìm vào im lặng.",
						"thai": "เงาเข้มข้นขึ้น เมืองตกอยู่ในความเงียบงัน",
						"hindi": "परछाई और गहरी हो गई। शहर खामोश हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "훗... 주제를 알아라. '지오르노'의 질서는 깨지지 않는다.",
						"english": "Hmph... Know your place. Giorno's order shall not be broken.",
						"japanese": "フッ... 身の程を知れ。「ジョルノ」の秩序は乱れない。",
						"chinese": "哼... 认清你的位置。「乔鲁诺」的秩序不可打破。",
						"french": "Pff... Connais ta place. L'ordre de Giorno ne sera pas brisé.",
						"spanish": "Hmpf... Conoce tu lugar. El orden de Giorno no será quebrado.",
						"vietnamese": "Hừm... Biết thân biết phận đi. Trật tự của 'Giorno' sẽ không bị phá vỡ.",
						"thai": "หึ... รู้จักฐานะของเจ้าซะบ้าง ระเบียบของ 'จิออร์โน่' จะไม่มีวันถูกทำลาย",
						"hindi": "हुँह... अपनी औकात जानो। 'जियोर्नो' की व्यवस्था नहीं तोड़ी जा सकती।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "...아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "...まだ終わってない。諦めない。",
						"chinese": "...还没结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Aún no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบแค่นี้หรอก ฉันไม่ยอมแพ้หรอกนะ",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽... 이건 끝이 아니다... '지오르노'의 그림자는... 상상 이상이다.",
						"english": "Ugh... This isn't the end... Giorno's shadow... is beyond imagination.",
						"japanese": "くっ...これで終わりではない...「ジョルノ」の影は...想像以上だ。",
						"chinese": "呃啊……这还没完……“乔尔诺”的阴影……超乎想象。",
						"french": "Ugh... Ce n'est pas la fin... L'ombre de Giorno... dépasse l'imagination.",
						"spanish": "Ugh... Esto no es el final... La sombra de Giorno... está más allá de la imaginación.",
						"vietnamese": "Khụ... Đây chưa phải là kết thúc... Bóng tối của Giorno... vượt xa tưởng tượng.",
						"thai": "อึก... นี่ไม่ใช่จุดจบ... เงาของ 'จิออร์โน่'... เหนือกว่าจินตนาการ",
						"hindi": "उफ़... यह अंत नहीं है... 'जियोर्नो' की परछाई... कल्पना से परे है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "허튼소리. 네 그림자부터 걷어낼 테니.",
						"english": "Nonsense. I'll get rid of your shadow first.",
						"japanese": "馬鹿な。お前の影から振り払ってやる。",
						"chinese": "胡说八道。我先抹去你的阴影。",
						"french": "Absurde. Je vais d'abord dissiper ton ombre.",
						"spanish": "Tonterías. Primero me desharé de tu sombra.",
						"vietnamese": "Vô lý. Ta sẽ loại bỏ bóng tối của ngươi trước.",
						"thai": "ไร้สาระ ข้าจะกำจัดเงาของเจ้าก่อน",
						"hindi": "बकवास। मैं पहले तुम्हारी परछाई हटा दूंगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 자를 쓰러뜨렸다. 그러나 도시를 옥죄는 어둠은 여전했다.",
						"english": "An unknown assailant was defeated. Yet, the darkness gripping the city remained.",
						"japanese": "正体不明の者を倒した。しかし、街を締め付ける闇は依然として残っていた。",
						"chinese": "击败了不明身份者。然而，笼罩城市的黑暗依旧。",
						"french": "Un assaillant inconnu fut vaincu. Pourtant, l'obscurité qui étreignait la ville persistait.",
						"spanish": "Un asaltante desconocido fue derrotado. Sin embargo, la oscuridad que oprimía la ciudad persistía.",
						"vietnamese": "Đã hạ gục kẻ không rõ danh tính. Thế nhưng, bóng tối kìm kẹp thành phố vẫn còn đó.",
						"thai": "ปราบผู้ไม่ทราบชื่อลงได้ แต่ความมืดที่ครอบงำเมืองยังคงอยู่",
						"hindi": "एक अज्ञात हमलावर को हरा दिया। फिर भी, शहर को जकड़े हुए अंधेरा कायम रहा।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "위조된 신분증은 또 다른 단서로 이어질 것이다.",
						"english": "The forged ID will lead to another clue.",
						"japanese": "偽造された身分証は、また別の手がかりへと繋がるだろう。",
						"chinese": "伪造的身份证明将引向另一条线索。",
						"french": "La fausse carte d'identité mènera à un autre indice.",
						"spanish": "La identificación falsificada llevará a otra pista.",
						"vietnamese": "Thẻ căn cước giả sẽ dẫn đến một manh mối khác.",
						"thai": "บัตรประจำตัวปลอมจะนำไปสู่เบาะแสอื่น",
						"hindi": "जाली पहचान पत्र एक और सुराग की ओर ले जाएगा।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"이 도시의 모든 것은 '지오르노'를 통해 움직였다.",
			"비 내리는 밤, 한 줄기 빛이 드리운 듯했다.",
			"익명의 제보자 '린', 그녀의 손에 도시의 비밀이 있었다.",
			"그러나 진실은 언제나 그림자 속에 숨어있었다."
		],
		"english": [
			"Everything in this city moved through 'Giorno'.",
			"On a rainy night, a ray of light seemed to appear.",
			"The anonymous informant 'Lin', the city's secrets were in her hands.",
			"But the truth was always hidden in the shadows."
		],
		"japanese": [
			"この街のすべては「ジョルノ」を介して動いていた。",
			"雨降る夜、一条の光が差し込んだようだった。",
			"匿名の情報提供者「リン」、彼女の手に都市の秘密があった。",
			"しかし、真実は常に影の中に隠されていた。"
		],
		"chinese": [
			"这座城市的一切都通过“乔尔诺”运作着。",
			"在一个下雨的夜晚，一道光束仿佛降临了。",
			"匿名举报者“琳”，城市秘密掌握在她手中。",
			"然而，真相总是隐藏在阴影之中。"
		],
		"french": [
			"Tout dans cette ville était géré par 'Giorno'.",
			"Par une nuit pluvieuse, une lueur d'espoir semblait poindre.",
			"L'informatrice anonyme 'Lin', les secrets de la ville étaient entre ses mains.",
			"Mais la vérité était toujours cachée dans l'ombre."
		],
		"spanish": [
			"Todo en esta ciudad se movía a través de 'Giorno'.",
			"En una noche lluviosa, un rayo de luz pareció asomarse.",
			"La informante anónima 'Lin', los secretos de la ciudad estaban en sus manos.",
			"Pero la verdad siempre estuvo oculta en las sombras."
		],
		"vietnamese": [
			"Mọi thứ trong thành phố này đều vận hành thông qua 'Giorno'.",
			"Trong đêm mưa, một tia sáng dường như đã chiếu rọi.",
			"Người tố giác ẩn danh 'Lin', bí mật của thành phố nằm trong tay cô ấy.",
			"Tuy nhiên, sự thật luôn ẩn mình trong bóng tối."
		],
		"thai": [
			"ทุกสิ่งในเมืองนี้ขับเคลื่อนโดย 'จอร์โน'.",
			"ในคืนที่ฝนตก เหมือนมีแสงสว่างสาดส่องลงมา",
			"หลิน ผู้ให้ข้อมูลนิรนาม ความลับของเมืองอยู่ในมือเธอ",
			"แต่ความจริงมักจะซ่อนอยู่ในเงามืดเสมอ"
		],
		"hindi": [
			"इस शहर में सब कुछ 'जिओर्नो' के माध्यम से चलता था।",
			"एक बरसात की रात, प्रकाश की एक किरण छाई हुई लग रही थी।",
			"गुमनाम मुखबिर 'लिन', शहर के रहस्य उसके हाथों में थे।",
			"लेकिन सच्चाई हमेशा छाया में छिपी रहती थी।"
		]
	}
} as const;
