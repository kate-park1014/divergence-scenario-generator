export const scenario_modern_kjang_4_02 = {
	"scenario_id": "modern_kjang_4_02",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "낡은 편의점. 희미한 불빛 아래, 한 여인이 그림자처럼 서 있었다.",
						"english": "The old convenience store. Under the dim light, a woman stood like a shadow.",
						"japanese": "古いコンビニ。薄暗い光の下、一人の女性が影のように立っていた。",
						"chinese": "老旧的便利店。昏暗的灯光下，一个女人像影子般站着。",
						"french": "La vieille supérette. Sous la faible lumière, une femme se tenait là, telle une ombre.",
						"spanish": "La vieja tienda de conveniencia. Bajo la luz tenue, una mujer estaba de pie como una sombra.",
						"vietnamese": "Cửa hàng tiện lợi cũ kỹ. Dưới ánh đèn mờ ảo, một người phụ nữ đứng như một cái bóng.",
						"thai": "ร้านสะดวกซื้อเก่า ภายใต้แสงไฟสลัว ผู้หญิงคนหนึ่งยืนอยู่ราวกับเงา",
						"hindi": "पुरानी सुविधा स्टोर। धीमी रोशनी में, एक औरत साये की तरह खड़ी थी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "저 사람이 K-jang인가.",
						"english": "Is that K-jang?",
						"japanese": "あの人がK-jangか。",
						"chinese": "那个人是K-jang吗？",
						"french": "Est-ce K-jang ?",
						"spanish": "¿Es ese K-jang?",
						"vietnamese": "Người đó là K-jang à?",
						"thai": "นั่นคือ K-jang เหรอ",
						"hindi": "क्या वह के-जंग है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "누구신데, K-jang을 찾아요?",
						"english": "Who are you, looking for K-jang?",
						"japanese": "どなたですか、K-jangをお探しですか？",
						"chinese": "你是谁，找K-jang？",
						"french": "Qui êtes-vous pour chercher K-jang ?",
						"spanish": "¿Quién eres, buscando a K-jang?",
						"vietnamese": "Ông là ai mà tìm K-jang?",
						"thai": "คุณเป็นใครถึงได้ตามหา K-jang?",
						"hindi": "आप कौन हैं, के-जंग को ढूंढ रहे हैं?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "그냥 지나가던 사람. …근데, 저 편의점, 뭔가 수상해.",
						"english": "Just passing by. ...But that convenience store, something's suspicious about it.",
						"japanese": "ただ通りがかりの者だ。…しかし、あのコンビニ、何か怪しいな。",
						"chinese": "只是路过的人。……但是，那家便利店，有些可疑。",
						"french": "Juste de passage. ...Mais cette supérette, quelque chose n'est pas clair.",
						"spanish": "Solo de paso. ...Pero esa tienda de conveniencia, algo es sospechoso.",
						"vietnamese": "Chỉ là người qua đường thôi. …Nhưng cái cửa hàng tiện lợi đó, có gì đó đáng ngờ.",
						"thai": "แค่คนผ่านทาง... แต่ร้านสะดวกซื้อนั่น ดูมีอะไรไม่ชอบมาพากล",
						"hindi": "बस राहगीर। ...लेकिन वह सुविधा स्टोर, कुछ संदिग्ध है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "겉으론 평범한데, 드나드는 손님들이 꽤 심상치 않아.",
						"english": "It looks ordinary on the outside, but the customers coming and going are quite unusual.",
						"japanese": "見た目は普通だが、出入りする客がかなり物騒だ。",
						"chinese": "表面上很普通，但进出的客人相当不寻常。",
						"french": "L'extérieur est ordinaire, mais les clients qui entrent et sortent sont plutôt inhabituels.",
						"spanish": "Parece normal por fuera, pero los clientes que entran y salen son bastante inusuales.",
						"vietnamese": "Bề ngoài thì bình thường, nhưng những vị khách ra vào thì khá bất thường.",
						"thai": "ดูภายนอกก็ธรรมดา แต่ลูกค้าที่เข้าออกนี่ไม่ธรรมดาเลย",
						"hindi": "बाहर से यह साधारण दिखता है, लेकिन आने-जाने वाले ग्राहक काफी असामान्य हैं।"
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
					"speaker": "nia",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "오늘도 똑같아. 저 소심한 K-jang의 태도가 영 거슬려.",
						"english": "Same old today. K-jang's timidity really grates on me.",
						"japanese": "今日も同じだ。K課長のあの臆病な態度がどうにも気に障る。",
						"chinese": "今天也一样。那个胆小的K科长，他的态度真让人不爽。",
						"french": "C'est pareil aujourd'hui. L'attitude timide de K-jang m'agace vraiment.",
						"spanish": "Hoy es igual. La actitud tímida de K-jang me molesta mucho.",
						"vietnamese": "Hôm nay cũng vậy. Cái thái độ nhút nhát của K-jang thật sự làm tôi khó chịu.",
						"thai": "วันนี้ก็เหมือนเดิม ท่าทางขี้ขลาดของ K-jang นั่นน่ารำคาญจริงๆ",
						"hindi": "आज भी वही। के-जांग का वह कायर रवैया वाकई मुझे परेशान करता है।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소심한 게 죄는 아니잖아요.",
						"english": "Being timid isn't a crime, is it?",
						"japanese": "小心なのが罪じゃないでしょう。",
						"chinese": "胆小又不是罪。",
						"french": "Être timide n'est pas un crime, n'est-ce pas ?",
						"spanish": "Ser tímido no es un crimen, ¿o sí?",
						"vietnamese": "Nhút nhát đâu phải là tội.",
						"thai": "ขี้ขลาดไม่ใช่เรื่องผิดนี่นา",
						"hindi": "शर्मीला होना कोई अपराध तो नहीं।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "과하게 소심한 건 의심스러워. 마치 뭔가를 감추려는 듯이.",
						"english": "Being *too* timid is suspicious. As if they're trying to hide something.",
						"japanese": "過度に小心なのは疑わしい。まるで何かを隠そうとしているかのように。",
						"chinese": "过于胆小就可疑了。好像在隐藏什么似的。",
						"french": "Être excessivement timide est suspect. Comme s'il essayait de cacher quelque chose.",
						"spanish": "Ser demasiado tímido es sospechoso. Como si intentara esconder algo.",
						"vietnamese": "Nhút nhát quá mức thì đáng ngờ. Cứ như thể đang che giấu điều gì đó.",
						"thai": "ขี้ขลาดเกินไปนั่นแหละน่าสงสัย เหมือนกำลังซ่อนอะไรบางอย่างอยู่",
						"hindi": "अत्यधिक शर्मीला होना संदिग्ध है। मानो कुछ छिपाने की कोशिश कर रहा हो।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그리고 저 계산 실수… 너무 반복되는 것 같지 않아?",
						"english": "And those calculation errors... don't they seem to be happening too often?",
						"japanese": "そしてあの計算ミス… あまりにも繰り返されてないか？",
						"chinese": "还有那个计算错误……是不是重复太多次了？",
						"french": "Et ces erreurs de calcul... ne se répètent-elles pas trop souvent ?",
						"spanish": "Y esos errores de cálculo... ¿no te parece que se repiten demasiado?",
						"vietnamese": "Và những lỗi tính toán đó... không phải là nó lặp lại quá nhiều sao?",
						"thai": "แล้วก็ความผิดพลาดในการคำนวณนั่น... มันดูเหมือนจะซ้ำซากเกินไปไหม?",
						"hindi": "और वह गणना की गलती... क्या वह बहुत बार दोहराई नहीं जा रही?"
					},
					"speaker": "nia",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 낡은 장부. K-jang은 그걸 절대 손에서 놓지 않아.",
						"english": "That old ledger. K-jang never lets it out of their hands.",
						"japanese": "あの古ぼけた帳簿。K課長は決して手放さない。",
						"chinese": "那本旧账簿。K科长从来不离手。",
						"french": "Ce vieux registre. K-jang ne le lâche jamais.",
						"spanish": "Ese viejo libro de contabilidad. K-jang nunca lo suelta.",
						"vietnamese": "Cuốn sổ cái cũ kỹ đó. K-jang không bao giờ rời tay khỏi nó.",
						"thai": "สมุดบัญชีเก่าๆ เล่มนั้น K-jang ไม่เคยปล่อยมันออกจากมือเลย",
						"hindi": "वह पुरानी खाता बही। के-जांग उसे कभी अपने हाथ से नहीं छोड़ता।"
					},
					"speaker": "nia",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "일기장이라도 되나 보죠.",
						"english": "Maybe it's a diary.",
						"japanese": "日記帳か何かじゃないですかね。",
						"chinese": "也许是日记本吧。",
						"french": "C'est peut-être un journal intime.",
						"spanish": "Quizás sea un diario.",
						"vietnamese": "Chắc là nhật ký.",
						"thai": "สงสัยจะเป็นสมุดบันทึกส่วนตัวมั้ง",
						"hindi": "शायद यह कोई डायरी है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니. 저건 단순한 장부가 아니야. 분명 뭔가 다른 기록이 있어.",
						"english": "No. That's not a simple ledger. There's definitely some other record in there.",
						"japanese": "いや。あれはただの帳簿じゃない。きっと何か別の記録がある。",
						"chinese": "不。那不是普通的账簿。里面肯定有其他的记录。",
						"french": "Non. Ce n'est pas un simple registre. Il y a clairement d'autres notes dedans.",
						"spanish": "No. Ese no es un simple libro de contabilidad. Definitivamente hay otro tipo de registro allí.",
						"vietnamese": "Không. Đó không phải là một cuốn sổ cái đơn thuần. Chắc chắn có ghi chép khác trong đó.",
						"thai": "ไม่ใช่หรอก นั่นไม่ใช่แค่สมุดบัญชีธรรมดาแน่ๆ ต้องมีบันทึกอื่นอยู่ในนั้นชัวร์",
						"hindi": "नहीं। वह कोई साधारण खाता बही नहीं है। उसमें निश्चित रूप से कुछ और रिकॉर्ड है।"
					},
					"speaker": "nia",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "며칠째 같은 남자들이 드나들어. 은밀하게 뭘 주고받는 걸 봤어.",
						"english": "The same men have been coming and going for days. I saw them secretly exchanging something.",
						"japanese": "何日も同じ男たちが出入りしてる。密かに何かやり取りしてるのを見たよ。",
						"chinese": "这几天都是那几个男人进进出出。我看到他们偷偷摸摸地交换东西。",
						"french": "Les mêmes hommes entrent et sortent depuis des jours. Je les ai vus échanger quelque chose en secret.",
						"spanish": "Los mismos hombres han estado entrando y saliendo durante días. Los vi intercambiando algo en secreto.",
						"vietnamese": "Mấy ngày nay, mấy người đàn ông đó cứ ra vào. Tôi thấy họ trao đổi gì đó một cách bí mật.",
						"thai": "มีผู้ชายกลุ่มเดิมเข้าออกอยู่หลายวันแล้ว ฉันเห็นพวกเขาแอบส่งของให้กันด้วย",
						"hindi": "कई दिनों से वही आदमी आ-जा रहे हैं। मैंने उन्हें गुप्त रूप से कुछ आदान-प्रदान करते देखा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "저 편의점은 '삼일회'의 자금 통로야.",
						"english": "That convenience store is a funding channel for 'Samilhoe'.",
						"japanese": "あのコンビニは「サムイル会」の資金ルートだ。",
						"chinese": "那家便利店是‘三日会’的资金通道。",
						"french": "Ce dépanneur est une voie de financement pour le 'Samilhoe'.",
						"spanish": "Esa tienda de conveniencia es un canal de financiación para 'Samilhoe'.",
						"vietnamese": "Cửa hàng tiện lợi đó là kênh tài trợ của 'Samilhoe'.",
						"thai": "ร้านสะดวกซื้อนั่นเป็นช่องทางส่งเงินของ 'ซัมอิลฮเว' (Samilhoe)",
						"hindi": "वह सुविधा स्टोर 'समील्हे' का फंडिंग चैनल है।"
					},
					"speaker": "nia",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "삼일회? 그게 뭔데요?",
						"english": "'Samilhoe'? What's that?",
						"japanese": "サムイル会？それ、何ですか？",
						"chinese": "三日会？那是什么？",
						"french": "'Samilhoe' ? Qu'est-ce que c'est ?",
						"spanish": "¿'Samilhoe'? ¿Qué es eso?",
						"vietnamese": "'Samilhoe'? Đó là gì?",
						"thai": "'ซัมอิลฮเว'? คืออะไรคะ?",
						"hindi": "'समील्हे'? वह क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "이 도시의 모든 뒷거래를 주도하는 그림자 조직. 상상 이상으로 거대해.",
						"english": "A shadowy organization orchestrating all black market deals in this city. It's far bigger than you imagine.",
						"japanese": "この都市の裏取引を牛耳る影の組織。想像を絶するほど巨大だ。",
						"chinese": "掌控这座城市所有黑市交易的幕后组织。比你想象的要庞大得多。",
						"french": "Une organisation secrète orchestrant toutes les affaires louches de cette ville. Elle est bien plus grande que vous ne l'imaginez.",
						"spanish": "Una organización en la sombra que maneja todos los trapicheos de esta ciudad. Es mucho más grande de lo que imaginas.",
						"vietnamese": "Một tổ chức ngầm thao túng mọi giao dịch chợ đen trong thành phố này. Nó lớn hơn bạn tưởng rất nhiều.",
						"thai": "องค์กรเงามืดที่บงการการค้าใต้ดินทั้งหมดในเมืองนี้ มันใหญ่เกินกว่าที่คุณจะจินตนาการ",
						"hindi": "एक रहस्यमयी संगठन जो इस शहर के सभी अवैध सौदों को नियंत्रित करता है। यह तुम्हारी कल्पना से कहीं बड़ा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "K-jang은 단순한 점원이 아니야. 그는 이 모든 움직임을 통제하고 있어.",
						"english": "K-jang isn't just a clerk. He's controlling all these movements.",
						"japanese": "K-jangはただの店員じゃない。彼はこの全ての動きを制御している。",
						"chinese": "K-jang不只是个店员。他掌控着这一切的动向。",
						"french": "K-jang n'est pas qu'un simple commis. Il contrôle tous ces mouvements.",
						"spanish": "K-jang no es solo un dependiente. Él está controlando todos estos movimientos.",
						"vietnamese": "K-jang không chỉ là một nhân viên. Hắn đang kiểm soát mọi động thái này.",
						"thai": "K-jang ไม่ใช่แค่พนักงาน เขาควบคุมการเคลื่อนไหวทั้งหมดนี้",
						"hindi": "के-जंग सिर्फ एक क्लर्क नहीं है। वह इन सभी गतिविधियों को नियंत्रित कर रहा है।"
					},
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 소심한 사람이?",
						"english": "That timid person?",
						"japanese": "あの臆病な奴が？",
						"chinese": "那个胆小的人？",
						"french": "Cette personne timide ?",
						"spanish": "¿Esa persona tan tímida?",
						"vietnamese": "Cái người nhút nhát đó sao?",
						"thai": "คนขี้ขลาดคนนั้นน่ะเหรอ?",
						"hindi": "वह डरपोक व्यक्ति?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그게 그의 가면이야. 진짜는 따로 있어.",
						"english": "That's his mask. There's a true self beneath.",
						"japanese": "それは彼の仮面だ。本当の姿は別にある。",
						"chinese": "那是他的伪装。他有另一个真面目。",
						"french": "C'est son masque. Sa véritable identité est ailleurs.",
						"spanish": "Esa es su máscara. Hay una verdadera identidad debajo.",
						"vietnamese": "Đó là mặt nạ của hắn. Có một con người thật khác ẩn sau.",
						"thai": "นั่นคือหน้ากากของเขา ตัวจริงอยู่เบื้องหลัง",
						"hindi": "वह उसका नकाब है। असली कोई और है।"
					},
					"speaker": "nia"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "감시자의 냉혹한 눈빛이 모든 것을 집어삼켰다.",
						"english": "The Watcher's cold gaze swallowed everything.",
						"japanese": "監視者の冷酷な眼差しがすべてを飲み込んだ。",
						"chinese": "监视者冰冷的眼神吞噬了一切。",
						"french": "Le regard glacial du Gardien engloutit tout.",
						"spanish": "La mirada fría del Vigilante lo devoró todo.",
						"vietnamese": "Ánh mắt lạnh lùng của Kẻ Giám Sát nuốt chửng tất cả.",
						"thai": "สายตาอันเย็นชาของผู้เฝ้ากลืนกินทุกสิ่ง.",
						"hindi": "रखवाले की ठंडी नज़र ने सब कुछ निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 나의 영역에 도전하다니. 어리석은 것들.",
						"english": "How dare you... challenge my domain. Foolish ones.",
						"japanese": "よくも… 我の領域に挑んだな。愚か者め。",
						"chinese": "竟敢… 挑战我的领域。愚蠢的东西。",
						"french": "Comment osez-vous... défier mon domaine. Imbéciles.",
						"spanish": "Cómo osas... desafiar mi dominio. Estúpidos.",
						"vietnamese": "Dám... thách thức lãnh địa của ta. Những kẻ ngu ngốc.",
						"thai": "บังอาจ… มาท้าทายอาณาเขตของข้า. พวกโง่เขลา.",
						"hindi": "हिम्मत कैसे हुई... मेरे क्षेत्र को चुनौती देने की। मूर्ख।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어! 반드시 진실을 밝혀낼 거야!",
						"english": "Damn it... it's not over yet! I will uncover the truth!",
						"japanese": "ちくしょう… まだ終わってない！必ず真実を暴いてやる！",
						"chinese": "该死… 还没结束！我一定会揭露真相！",
						"french": "Zut... ce n'est pas encore fini ! Je découvrirai la vérité !",
						"spanish": "Maldita sea... ¡todavía no ha terminado! ¡Desvelaré la verdad!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc! Tôi nhất định sẽ phơi bày sự thật!",
						"thai": "ให้ตายสิ… ยังไม่จบหรอก! ฉันจะต้องเปิดเผยความจริงให้ได้!",
						"hindi": "धिक्कार है... अभी खत्म नहीं हुआ है! मैं सच्चाई का पता लगाऊंगा!"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "편의점 지하. 어둡고 축축한 공간에서 낯선 기운이 느껴졌다.",
						"english": "Convenience store basement. A strange aura emanated from the dark, damp space.",
						"japanese": "コンビニの地下。暗く湿った空間から見慣れない気配がした。",
						"chinese": "便利店地下室。黑暗潮湿的空间里弥漫着一股异样的气息。",
						"french": "Sous-sol du dépanneur. Une étrange aura émanait de l'espace sombre et humide.",
						"spanish": "Sótano de la tienda de conveniencia. Una extraña aura emanaba del oscuro y húmedo espacio.",
						"vietnamese": "Tầng hầm cửa hàng tiện lợi. Một luồng khí lạ toát ra từ không gian tối tăm, ẩm ướt.",
						"thai": "ชั้นใต้ดินร้านสะดวกซื้อ สัมผัสได้ถึงพลังงานประหลาดจากพื้นที่มืดชื้น",
						"hindi": "सुविधा स्टोर का बेसमेंट। अंधेरे, नम स्थान से एक अजीब आभा निकल रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "여기가 모든 자금이 모이는 곳이야. '감시자'가 지키고 있어.",
						"english": "This is where all the funds gather. The 'Overseer' guards it.",
						"japanese": "ここが全ての資金が集まる場所だ。『監視者』が守っている。",
						"chinese": "这里是所有资金汇集的地方。『监视者』守护着它。",
						"french": "C'est ici que tous les fonds sont rassemblés. Le 'Gardien' le protège.",
						"spanish": "Aquí es donde se reúne todo el dinero. El 'Vigilante' lo custodia.",
						"vietnamese": "Đây là nơi tập trung mọi nguồn tiền. 'Kẻ Giám Sát' đang canh giữ nó.",
						"thai": "นี่คือที่ที่เงินทั้งหมดมารวมกัน 'ผู้เฝ้าดู' คุ้มกันมันอยู่",
						"hindi": "यहीं सारा फंड इकट्ठा होता है। 'निगरानीकर्ता' इसकी रखवाली करता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "시끄러운 쥐새끼들. 감히 나의 영역에 발을 들이다니.",
						"english": "Noisy rats. How dare you step into my domain.",
						"japanese": "うるさいネズミども。よくも私の領域に足を踏み入れたな。",
						"chinese": "吵闹的老鼠们。竟敢踏入我的领地。",
						"french": "Sales rats bruyants. Comment osez-vous pénétrer mon domaine.",
						"spanish": "Ratas ruidosas. Cómo osas pisar mi dominio.",
						"vietnamese": "Lũ chuột ồn ào. Dám đặt chân vào lãnh địa của ta.",
						"thai": "หนูโสโครกบังอาจเข้ามาในอาณาเขตของข้า",
						"hindi": "शोर मचाने वाले चूहे। मेरी हद में कदम रखने की तुम्हारी हिम्मत कैसे हुई।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 감시자냐?",
						"english": "Are you the Overseer?",
						"japanese": "お前が監視者か？",
						"chinese": "你就是监视者？",
						"french": "Es-tu le Gardien ?",
						"spanish": "¿Eres el Vigilante?",
						"vietnamese": "Ngươi là Kẻ Giám Sát à?",
						"thai": "แกคือผู้เฝ้าดูใช่ไหม?",
						"hindi": "क्या तुम निगरानीकर्ता हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "삼일회의 비밀을 캐려는 자, 아무도 살아서 돌아가지 못한다.",
						"english": "Those who seek the secrets of the Samilhoe, none shall return alive.",
						"japanese": "サムイルフェの秘密を暴こうとする者、誰も生きては帰れない。",
						"chinese": "想探究三日会秘密的人，没有人能活着回去。",
						"french": "Ceux qui cherchent les secrets du Samilhoe, aucun ne reviendra vivant.",
						"spanish": "Quienes busquen los secretos del Samilhoe, ninguno regresará con vida.",
						"vietnamese": "Kẻ nào muốn đào bới bí mật của Tam Nhật Hội, không một ai có thể trở về sống sót.",
						"thai": "ผู้ที่พยายามเปิดเผยความลับของซัมอิลฮเว ไม่มีใครจะรอดกลับไปได้",
						"hindi": "जो कोई भी सामिलहो के रहस्यों की तलाश करेगा, कोई भी जीवित वापस नहीं लौटेगा।"
					},
					"emotion": "angry"
				},
				{
					"direction": "up",
					"speaker": "nia",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "base",
					"speaker": "nia",
					"content": {
						"korean": "이 자를 막아줘! 난 K-jang의 장부를 확인할 방법을 찾아볼게!",
						"english": "Stop this guy! I'll find a way to check K-jang's ledger!",
						"japanese": "こいつを食い止めろ！俺はK-jangの帳簿を確認する方法を探す！",
						"chinese": "拦住这家伙！我去找查看K-jang账簿的方法！",
						"french": "Arrêtez ce type ! Je vais trouver un moyen de vérifier le registre de K-jang !",
						"spanish": "¡Detened a este tipo! ¡Yo buscaré la manera de revisar el libro de K-jang!",
						"vietnamese": "Chặn tên này lại! Tôi sẽ tìm cách kiểm tra sổ cái của K-jang!",
						"thai": "หยุดไอ้บ้านี่ไว้! ฉันจะหาทางตรวจสอบบัญชีของ K-jang!",
						"hindi": "इसे रोको! मैं के-जंग के बही-खाते की जांच करने का तरीका ढूंढूंगा!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "감시자가 쓰러지자, 거대한 금고 문이 열렸다.",
						"english": "As the Watcher fell, the massive vault door opened.",
						"japanese": "監視者が倒れると、巨大な金庫の扉が開いた。",
						"chinese": "随着监视者倒下，巨大的金库门打开了。",
						"french": "Alors que le Gardien tombait, l'énorme porte du coffre-fort s'ouvrit.",
						"spanish": "Al caer el Vigilante, la enorme puerta de la bóveda se abrió.",
						"vietnamese": "Khi Kẻ Giám Sát ngã xuống, cánh cửa két sắt khổng lồ mở ra.",
						"thai": "เมื่อผู้เฝ้าร่วงลง ประตูตู้นิรภัยขนาดใหญ่ก็เปิดออก",
						"hindi": "जैसे ही रखवाला गिरा, विशाल तिजोरी का दरवाज़ा खुल गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… K-jang… 그 장부에… 모든 것이….",
						"english": "Ugh... K-jang... in that ledger... everything...",
						"japanese": "くっ… K-jang… その帳簿に… すべてが…。",
						"chinese": "呃… K-jang… 那本账簿里… 一切都…",
						"french": "Urgh... K-jang... dans ce registre... tout est...",
						"spanish": "Ugh... K-jang... en ese libro... todo...",
						"vietnamese": "Khụ... K-jang... trong cuốn sổ đó... tất cả...",
						"thai": "อึก… K-jang… ในสมุดบัญชีเล่มนั้น… ทุกสิ่ง…",
						"hindi": "ऊह... के-जंग... उस बहीखाते में... सब कुछ..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "K-jang? 장부? 대체 뭐가 숨겨져 있는 거야?",
						"english": "K-jang? Ledger? What on earth is hidden?",
						"japanese": "K-jang？帳簿？一体何が隠されているんだ？",
						"chinese": "K-jang？账簿？到底藏着什么？",
						"french": "K-jang ? Registre ? Qu'est-ce qui est caché, bon sang ?",
						"spanish": "¿K-jang? ¿Libro? ¿Qué demonios se esconde?",
						"vietnamese": "K-jang? Sổ sách? Rốt cuộc cái gì đang bị giấu vậy?",
						"thai": "K-jang? สมุดบัญชี? มีอะไรซ่อนอยู่กันแน่?",
						"hindi": "के-जंग? बहीखाता? आखिर क्या छिपा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "결국 쓰러뜨렸군. 잘했어.",
						"english": "Finally defeated. Well done.",
						"japanese": "ついに倒したか。よくやった。",
						"chinese": "终于打败了。干得好。",
						"french": "Finalement vaincu. Bien joué.",
						"spanish": "Finalmente derrotado. Bien hecho.",
						"vietnamese": "Cuối cùng cũng đánh bại được rồi. Làm tốt lắm.",
						"thai": "ในที่สุดก็จัดการได้แล้ว. ทำได้ดีมาก.",
						"hindi": "आखिरकार हरा दिया। शाबाश।"
					},
					"speaker": "nia",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "저 자의 마지막 말… 역시 K-jang과 장부가 핵심이야.",
						"english": "His last words... K-jang and the ledger are indeed key.",
						"japanese": "あの者の最後の言葉… やはりK-jangと帳簿が核心だ。",
						"chinese": "那家伙的遗言… 果然K-jang和账簿是关键。",
						"french": "Ses derniers mots... K-jang et le registre sont bien la clé.",
						"spanish": "Sus últimas palabras... K-jang y el libro son la clave, sin duda.",
						"vietnamese": "Lời cuối của kẻ đó... Quả nhiên K-jang và cuốn sổ là mấu chốt.",
						"thai": "คำพูดสุดท้ายของเขา... K-jang และสมุดบัญชีคือหัวใจสำคัญจริงๆ.",
						"hindi": "उसके आखिरी शब्द... के-जंग और बहीखाता ही मुख्य हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감시자를 물리쳤지만, 편의점의 미스터리는 더욱 깊어졌다. K-jang의 낡은 장부 속엔 무엇이 감춰져 있을까?",
						"english": "Though the Watcher was defeated, the convenience store's mystery deepened. What secrets does K-jang's old ledger hold?",
						"japanese": "監視者を倒したが、コンビニの謎はさらに深まった。K-jangの古い帳簿の中には何が隠されているのだろうか？",
						"chinese": "虽然击败了监视者，但便利店的谜团却更深了。K-jang的旧账簿里到底藏着什么？",
						"french": "Bien que le Gardien ait été vaincu, le mystère du dépanneur s'est approfondi. Quels secrets le vieux registre de K-jang recèle-t-il ?",
						"spanish": "Aunque el Vigilante fue derrotado, el misterio de la tienda de conveniencia se profundizó. ¿Qué secretos guarda el viejo libro de K-jang?",
						"vietnamese": "Dù đã đánh bại Kẻ Giám Sát, nhưng bí ẩn của cửa hàng tiện lợi càng thêm sâu sắc. Cuốn sổ cũ của K-jang ẩn chứa điều gì?",
						"thai": "แม้จะจัดการผู้เฝ้าได้แล้ว แต่ปริศนาของร้านสะดวกซื้อก็ยิ่งลึกซึ้งขึ้น. สมุดบัญชีเก่าของ K-jang ซ่อนอะไรไว้กันแน่?",
						"hindi": "हालांकि रखवाले को हरा दिया गया, लेकिन सुविधा स्टोर का रहस्य और गहरा गया। के-जंग के पुराने बहीखाते में क्या राज़ छिपे हैं?"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"수상한 시선이 낡은 편의점을 맴돈다.",
			"소심한 점원, K-jang. 그의 일거수일투족이 감시당한다.",
			"겉으로는 평범해 보이는 공간, 그러나 숨겨진 거래의 그림자가 드리워져 있었다.",
			"모든 의심은 숫자로 향한다.",
			"그리고, 게임은 은밀하게 시작되었다."
		],
		"english": [
			"Suspicious eyes linger around the old convenience store.",
			"K-jang, the timid clerk. His every move is watched.",
			"A seemingly ordinary space, yet the shadow of a hidden deal loomed.",
			"All suspicions point to numbers.",
			"And so, the game began in secret."
		],
		"japanese": [
			"疑わしい視線が古いコンビニをさまよう。",
			"気弱な店員、K-jang。彼の一挙手一投足が監視されている。",
			"一見普通の空間だが、隠された取引の影が忍び寄っていた。",
			"すべての疑念は数字に向かう。",
			"そして、ゲームは密かに始まった。"
		],
		"chinese": [
			"可疑的目光盘旋在老旧的便利店周围。",
			"胆小的店员，K-jang。他的一举一动都受到监视。",
			"一个看似普通的空间，然而隐藏交易的阴影笼罩着。",
			"所有的疑虑都指向数字。",
			"于是，游戏秘密地开始了。"
		],
		"french": [
			"Des regards suspects rôdent autour de la vieille supérette.",
			"K-jang, le timide commis. Chacun de ses gestes est surveillé.",
			"Un espace d'apparence ordinaire, mais l'ombre d'un marché caché planait.",
			"Tous les soupçons mènent aux chiffres.",
			"Et ainsi, le jeu commença secrètement."
		],
		"spanish": [
			"Miradas sospechosas merodean la vieja tienda de conveniencia.",
			"K-jang, el dependiente tímido. Todos sus movimientos son vigilados.",
			"Un espacio aparentemente normal, pero la sombra de un trato oculto se cernía.",
			"Todas las sospechas apuntan a los números.",
			"Y así, el juego comenzó en secreto."
		],
		"vietnamese": [
			"Những ánh mắt đáng ngờ lảng vảng quanh cửa hàng tiện lợi cũ kỹ.",
			"K-jang, nhân viên nhút nhát. Mọi hành động của anh ta đều bị theo dõi.",
			"Một không gian tưởng chừng bình thường, nhưng bóng dáng của một giao dịch ngầm đang bao trùm.",
			"Mọi nghi ngờ đều hướng về những con số.",
			"Và rồi, trò chơi bắt đầu một cách bí mật."
		],
		"thai": [
			"สายตาที่น่าสงสัยจับจ้องอยู่รอบๆ ร้านสะดวกซื้อเก่า",
			"K-jang พนักงานขี้อาย ทุกการเคลื่อนไหวของเขาถูกจับตามอง",
			"สถานที่ที่ดูเหมือนธรรมดา แต่เงาของการค้าลับแฝงตัวอยู่",
			"ทุกข้อสงสัยมุ่งเป้าไปที่ตัวเลข",
			"และแล้ว เกมก็เริ่มขึ้นอย่างลับๆ"
		],
		"hindi": [
			"संदिग्ध नज़रें पुरानी सुविधा स्टोर के इर्द-गिर्द घूम रही हैं।",
			"शर्मीला क्लर्क, के-जंग। उसकी हर हरकत पर नज़र रखी जा रही है।",
			"एक सामान्य सी दिखने वाली जगह, फिर भी एक छिपे हुए सौदे की छाया मंडरा रही थी।",
			"सभी संदेह संख्याओं की ओर इशारा करते हैं।",
			"और, खेल गुपचुप तरीके से शुरू हुआ।"
		]
	}
} as const;
