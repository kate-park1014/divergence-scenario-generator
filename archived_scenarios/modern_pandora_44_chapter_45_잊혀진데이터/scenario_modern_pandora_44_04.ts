export const scenario_modern_pandora_44_04 = {
	"scenario_id": "modern_pandora_44_04",
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
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 전광판이 일그러지고, 비명 같은 노이즈가 울려 퍼졌다.",
						"english": "The city's billboards distorted, and a scream-like noise echoed.",
						"japanese": "都市の電光掲示板が歪み、悲鳴のようなノイズが響き渡った。",
						"chinese": "城市的广告牌扭曲变形，尖叫般的噪音回荡。",
						"french": "Les panneaux d'affichage de la ville se déformaient, et un bruit semblable à un cri résonnait.",
						"spanish": "Los paneles luminosos de la ciudad se distorsionaron, y un ruido similar a un grito resonó.",
						"vietnamese": "Các bảng hiệu điện tử trong thành phố méo mó, và tiếng ồn như tiếng thét vang vọng khắp nơi.",
						"thai": "ป้ายโฆษณาในเมืองบิดเบี้ยว และเสียงรบกวนคล้ายเสียงกรีดร้องก็ดังก้อง",
						"hindi": "शहर के बिलबोर्ड विकृत हो गए, और चीख जैसी आवाज गूँज उठी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "린이 말했던 '팬텀 시티'의 흔적. 여기가 맞나?",
						"english": "Traces of the 'Phantom City' Rin spoke of. Is this it?",
						"japanese": "リンが言っていた「ファントムシティ」の痕跡。ここがそうなのか？",
						"chinese": "凛提到过的“幻影之城”的痕迹。就是这里吗？",
						"french": "Les traces de la \"Cité Fantôme\" dont parlait Rin. Est-ce bien ici ?",
						"spanish": "Las huellas de la \"Ciudad Fantasma\" de la que Rin habló. ¿Es este el lugar?",
						"vietnamese": "Dấu vết của 'Thành phố ảo ảnh' mà Rin đã nói. Có phải ở đây không?",
						"thai": "ร่องรอยของ 'เมืองมายา' ที่รินพูดถึง ที่นี่ใช่ไหม?",
						"hindi": "रिन ने जिस 'फैंटम सिटी' का जिक्र किया था, उसके निशान। क्या यह वही है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아니, 이젠 '유령 도시'가 됐지.",
						"english": "...No, it's a 'Ghost City' now.",
						"japanese": "…いや、今は「ゴーストシティ」になったか。",
						"chinese": "……不，现在它成了“幽灵之城”了。",
						"french": "...Non, c'est une 'Ville Fantôme' maintenant.",
						"spanish": "...No, ahora es una 'Ciudad Fantasma'.",
						"vietnamese": "...Không, bây giờ nó đã trở thành 'Thành phố Ma'.",
						"thai": "...ไม่สิ ตอนนี้มันกลายเป็น 'เมืองผี' ไปแล้ว",
						"hindi": "...नहीं, अब यह 'भूतों का शहर' बन गया है।"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "린?",
						"english": "Rin?",
						"japanese": "リン？",
						"chinese": "凛？",
						"french": "Rin ?",
						"spanish": "¿Rin?",
						"vietnamese": "Rin?",
						"thai": "ริน?",
						"hindi": "रिन?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "옛날에는… 여기도 활기 넘치는 곳이었어. 전부 사라지기 전까지는.",
						"english": "Back then... this place was lively too. Until everything disappeared.",
						"japanese": "昔は…ここも活気に満ちた場所だったんだ。全てが消えるまでは。",
						"chinese": "以前……这里也曾是充满活力的地方。直到一切都消失。",
						"french": "Avant... cet endroit était aussi plein de vie. Jusqu'à ce que tout disparaisse.",
						"spanish": "Antes... este lugar también era vibrante. Hasta que todo desapareció.",
						"vietnamese": "Ngày xưa... nơi đây cũng từng rất sôi động. Cho đến khi mọi thứ biến mất.",
						"thai": "เมื่อก่อน... ที่นี่ก็เคยเป็นที่ที่คึกคักนะ จนกระทั่งทุกอย่างหายไป",
						"hindi": "पहले... यह जगह भी जीवंत थी। जब तक सब कुछ गायब नहीं हो गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사라지다니요?",
						"english": "Disappear?",
						"japanese": "消えるって？",
						"chinese": "消失了？",
						"french": "Disparaître ?",
						"spanish": "¿Desaparecer?",
						"vietnamese": "Biến mất ư?",
						"thai": "หายไป?",
						"hindi": "गायब हो गया?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그때는 '대규모 데이터 소실 사건'이라고 불렀어.",
						"english": "Back then, we called it the 'Mass Data Loss Incident'.",
						"japanese": "当時は『大規模データ消失事件』と呼んでいた。",
						"chinese": "那时候，我们称之为‘大规模数据丢失事件’。",
						"french": "À l'époque, on a appelé ça l'« Incident de Perte Massive de Données ».",
						"spanish": "En aquel entonces, lo llamamos el 'Incidente de Pérdida Masiva de Datos'.",
						"vietnamese": "Khi đó, chúng tôi gọi nó là 'Sự cố Mất Dữ liệu Quy mô Lớn'.",
						"thai": "ตอนนั้น เราเรียกว่า 'เหตุการณ์ข้อมูลสูญหายครั้งใหญ่'",
						"hindi": "तब हमने इसे 'बड़े पैमाने पर डेटा हानि की घटना' कहा था।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "도시의 모든 기록이… 흔적도 없이 증발했지.",
						"english": "All records in the city... evaporated without a trace.",
						"japanese": "都市の全記録が…痕跡もなく蒸発したんだ。",
						"chinese": "城市里所有的记录……都蒸发了，没有留下任何痕迹。",
						"french": "Tous les registres de la ville... se sont évaporés sans laisser de trace.",
						"spanish": "Todos los registros de la ciudad... se evaporaron sin dejar rastro.",
						"vietnamese": "Tất cả hồ sơ của thành phố... bốc hơi không còn dấu vết.",
						"thai": "บันทึกทั้งหมดในเมือง... ระเหยหายไปอย่างไร้ร่องรอย",
						"hindi": "शहर के सभी रिकॉर्ड... बिना किसी निशान के गायब हो गए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어떻게 그런 일이? 사고였나요?",
						"english": "How could that happen? Was it an accident?",
						"japanese": "どうしてそんなことが？事故だったんですか？",
						"chinese": "怎么会那样？是事故吗？",
						"french": "Comment est-ce arrivé ? C'était un accident ?",
						"spanish": "¿Cómo pudo pasar eso? ¿Fue un accidente?",
						"vietnamese": "Sao lại thế được? Là tai nạn sao?",
						"thai": "มันเกิดขึ้นได้อย่างไร? เป็นอุบัติเหตุหรือเปล่า?",
						"hindi": "ऐसा कैसे हो सकता है? क्या यह एक दुर्घटना थी?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "사고…였을까? 난 그렇게 생각 안 해.",
						"english": "An accident...? I don't think so.",
						"japanese": "事故…だったのか？俺はそう思わない。",
						"chinese": "事故……吗？我不这么认为。",
						"french": "Un accident... ? Je ne pense pas.",
						"spanish": "¿Un accidente...? No lo creo.",
						"vietnamese": "Tai nạn...? Tôi không nghĩ vậy.",
						"thai": "อุบัติเหตุ...งั้นเหรอ? ฉันไม่คิดอย่างนั้น",
						"hindi": "एक दुर्घटना...? मुझे ऐसा नहीं लगता।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "특정 데이터만 사라진 게 아니었어.",
						"english": "It wasn't just specific data that disappeared.",
						"japanese": "特定のデータだけが消えたわけじゃなかった。",
						"chinese": "不只是特定数据消失了。",
						"french": "Ce n'est pas seulement des données spécifiques qui ont disparu.",
						"spanish": "No fue solo información específica lo que desapareció.",
						"vietnamese": "Không chỉ dữ liệu cụ thể biến mất.",
						"thai": "ไม่ใช่แค่ข้อมูลบางอย่างที่หายไป",
						"hindi": "केवल विशिष्ट डेटा ही गायब नहीं हुआ था।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마치… 모든 정보가, 존재 자체가, 무언가에 '흡수된' 것 같았어.",
						"english": "It was as if... all information, existence itself, was 'absorbed' by something.",
						"japanese": "まるで…全ての情報、存在そのものが、何かに『吸収された』ようだった。",
						"chinese": "就好像……所有的信息，甚至存在本身，都被某种东西‘吸收’了。",
						"french": "C'était comme si... toutes les informations, l'existence elle-même, avaient été 'absorbées' par quelque chose.",
						"spanish": "Fue como si... toda la información, la existencia misma, hubiera sido 'absorbida' por algo.",
						"vietnamese": "Cứ như thể... tất cả thông tin, sự tồn tại, đã bị thứ gì đó 'hấp thụ'.",
						"thai": "ราวกับว่า... ข้อมูลทุกอย่าง ตัวตนทั้งหมด ถูก 'ดูดซับ' ไปโดยบางสิ่ง",
						"hindi": "ऐसा लग रहा था जैसे... सारी जानकारी, अस्तित्व ही, किसी चीज़ ने 'सोख' लिया हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흡수요? 누가, 뭘 흡수했다는 거죠?",
						"english": "Absorbed? Who absorbed what?",
						"japanese": "吸収？誰が、何を吸収したんですか？",
						"chinese": "吸收？谁吸收了什么？",
						"french": "Absorbé ? Qui a absorbé quoi ?",
						"spanish": "¿Absorbido? ¿Quién absorbió qué?",
						"vietnamese": "Hấp thụ ư? Ai đã hấp thụ cái gì?",
						"thai": "ดูดซับ? ใครดูดซับอะไรไป?",
						"hindi": "सोख लिया? किसने, क्या सोख लिया?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "나도 몰라. 하지만 그건… 단순히 지워진 게 아니었어.",
						"english": "I don't know. But it wasn't... simply erased.",
						"japanese": "俺にも分からない。だがそれは…単に消去されたわけじゃなかった。",
						"chinese": "我也不知道。但那……不仅仅是被删除了。",
						"french": "Je ne sais pas. Mais ce n'était pas... simplement effacé.",
						"spanish": "No lo sé. Pero no fue... simplemente borrado.",
						"vietnamese": "Tôi cũng không biết. Nhưng đó không phải... chỉ đơn thuần là bị xóa.",
						"thai": "ฉันก็ไม่รู้ แต่ว่ามัน... ไม่ได้แค่ถูกลบไปเฉยๆ",
						"hindi": "मुझे नहीं पता। लेकिन यह... केवल मिटाया नहीं गया था।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "린의 눈에는 깊은 공포와 트라우마가 엿보였다.",
						"english": "Deep fear and trauma were visible in Lynn's eyes.",
						"japanese": "リンの目には深い恐怖とトラウマが垣間見えた。",
						"chinese": "林恩的眼中透露出深深的恐惧和创伤。",
						"french": "Une profonde peur et un traumatisme étaient visibles dans les yeux de Lynn.",
						"spanish": "Un profundo miedo y trauma eran visibles en los ojos de Lynn.",
						"vietnamese": "Nỗi sợ hãi và ám ảnh sâu sắc hiện rõ trong mắt Lynn.",
						"thai": "ในดวงตาของลินน์มีแต่ความหวาดกลัวและบาดแผลฝังลึก",
						"hindi": "लिन की आँखों में गहरा डर और सदमा झलक रहा था।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그때의 그 느낌은… 지금 이 도시의 혼돈과 닮았어.",
						"english": "That feeling back then... it's like the chaos in this city now.",
						"japanese": "あの時の感覚は…今のこの都市の混沌と似ている。",
						"chinese": "那时的感觉…与这座城市现在的混沌很像。",
						"french": "Ce sentiment d'alors... il ressemble au chaos de cette ville maintenant.",
						"spanish": "Esa sensación de entonces... se parece al caos de esta ciudad ahora.",
						"vietnamese": "Cảm giác lúc đó... giống như sự hỗn loạn của thành phố này bây giờ.",
						"thai": "ความรู้สึกตอนนั้น... คล้ายกับความสับสนวุ่นวายในเมืองนี้ตอนนี้เลย",
						"hindi": "उस समय की वह भावना... अब इस शहर की अराजकता जैसी है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마치… '그것'이 다시 깨어난 것 같아.",
						"english": "It's as if... 'it' has awakened again.",
						"japanese": "まるで…『それ』が再び目覚めたかのようだ。",
						"chinese": "就好像…“它”再次苏醒了。",
						"french": "C'est comme si... 'ça' s'était réveillé à nouveau.",
						"spanish": "Es como si... 'aquello' hubiera despertado de nuevo.",
						"vietnamese": "Cứ như thể... 'thứ đó' đã thức tỉnh trở lại.",
						"thai": "ราวกับว่า... 'สิ่งนั้น' ได้ตื่นขึ้นมาอีกครั้ง",
						"hindi": "जैसे... 'वह' फिर से जाग गया हो।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "'그것'이 뭔데요?",
						"english": "What is 'it'?",
						"japanese": "『それ』って何ですか？",
						"chinese": "“它”是什么？",
						"french": "Qu'est-ce que 'ça' ?",
						"spanish": "¿Qué es 'aquello'?",
						"vietnamese": "'Thứ đó' là gì?",
						"thai": "'สิ่งนั้น' คืออะไร?",
						"hindi": "'वह' क्या है?"
					}
				},
				{
					"content": {
						"korean": "넌 너무 깊이 들어왔어. 더 이상은… 위험해.",
						"english": "You've gone too deep. Anymore is... dangerous.",
						"japanese": "君は深入りしすぎた。これ以上は…危険だ。",
						"chinese": "你陷得太深了。再这样下去…很危险。",
						"french": "Tu es allé trop loin. Plus que ça... c'est dangereux.",
						"spanish": "Has ido demasiado lejos. Más allá... es peligroso.",
						"vietnamese": "Ngươi đã đi quá sâu rồi. Hơn nữa... nguy hiểm lắm.",
						"thai": "เจ้าเข้ามาลึกเกินไปแล้ว มากกว่านี้... เป็นอันตราย",
						"hindi": "तुम बहुत गहरे आ गए हो। इससे आगे... ख़तरनाक है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 내 눈으로 직접 봐야겠어.",
						"english": "I can't stop. I have to see it with my own eyes.",
						"japanese": "止められない。この目で直接確かめなければ。",
						"chinese": "我不能停。我必须亲眼看到。",
						"french": "Je ne peux pas m'arrêter. Je dois le voir de mes propres yeux.",
						"spanish": "No puedo parar. Tengo que verlo con mis propios ojos.",
						"vietnamese": "Không thể dừng lại. Tôi phải tận mắt chứng kiến.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องเห็นมันด้วยตาตัวเอง",
						"hindi": "मैं रुक नहीं सकता। मुझे अपनी आँखों से देखना होगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희의 정보는… 나의 양식이 될 뿐.",
						"english": "Your information… will only become my sustenance.",
						"japanese": "お前たちの情報は…私の糧となるだけだ。",
						"chinese": "你们的信息…只会成为我的养料。",
						"french": "Vos informations… ne feront que devenir ma subsistance.",
						"spanish": "Vuestra información… solo se convertirá en mi sustento.",
						"vietnamese": "Thông tin của các ngươi… chỉ là thức ăn cho ta mà thôi.",
						"thai": "ข้อมูลของพวกเจ้า…จะเป็นเพียงอาหารของข้าเท่านั้น",
						"hindi": "तुम्हारी जानकारी… केवल मेरा पोषण बनेगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over… yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다시 와라. 그때는… 너의 모든 기억을 빼앗아주마.",
						"english": "Come again. Then… I'll snatch all your memories.",
						"japanese": "また来い。その時は…お前の全ての記憶を奪ってやろう。",
						"chinese": "再来吧。到时候…我会夺走你所有的记忆。",
						"french": "Reviens. Alors… je te ravirai tous tes souvenirs.",
						"spanish": "Vuelve. Entonces… te arrebataré todos tus recuerdos.",
						"vietnamese": "Hãy trở lại đi. Khi đó… ta sẽ cướp đi tất cả ký ức của ngươi.",
						"thai": "กลับมาอีกครั้ง แล้วข้าจะ…แย่งชิงความทรงจำทั้งหมดของเจ้า",
						"hindi": "वापस आना। तब… मैं तुम्हारी सारी यादें छीन लूँगा।"
					},
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "과거의 흔적을 쫓던 중, 거대한 데이터의 덩어리가 길을 막아섰다.",
						"english": "While chasing traces of the past, a massive block of data blocked the way.",
						"japanese": "過去の痕跡を追っていた最中、巨大なデータのかたまりが道を塞いだ。",
						"chinese": "在追寻过去的痕迹时，一个巨大的数据块挡住了去路。",
						"french": "Alors que je traquais les traces du passé, un énorme bloc de données a barré la route.",
						"spanish": "Mientras perseguía las huellas del pasado, un enorme bloque de datos bloqueó el camino.",
						"vietnamese": "Khi đang lần theo dấu vết của quá khứ, một khối dữ liệu khổng lồ đã chắn đường.",
						"thai": "ขณะที่กำลังตามรอยอดีต ก้อนข้อมูลขนาดมหึมาก็ขวางทาง",
						"hindi": "अतीत के निशानों का पीछा करते हुए, एक विशाल डेटा ब्लॉक ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 망각의 영역을 들쑤시는가.",
						"english": "How dare you... disturb the realm of oblivion.",
						"japanese": "よくも…忘却の領域を掻き乱すか。",
						"chinese": "竟敢…搅动遗忘的领域。",
						"french": "Comment oses-tu... perturber le royaume de l'oubli.",
						"spanish": "¿Cómo osas... perturbar el reino del olvido?",
						"vietnamese": "Dám... khuấy động vương quốc lãng quên sao.",
						"thai": "กล้าดียังไง... มาแหย่ขอบเขตแห่งการลืมเลือน",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... विस्मृति के दायरे को परेशान करने की।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "모든 것은… 나에게 흡수될 뿐. 너희도 예외는 없다.",
						"english": "Everything... will merely be absorbed by me. You are no exception.",
						"japanese": "全ては…私に吸収されるだけだ。お前たちも例外ではない。",
						"chinese": "一切都…只会 V被我吸收。你们也不例外。",
						"french": "Tout... ne sera qu'absorbé par moi. Vous n'êtes pas une exception.",
						"spanish": "Todo... será simplemente absorbido por mí. Vosotros no sois una excepción.",
						"vietnamese": "Mọi thứ... chỉ bị ta hấp thụ. Các ngươi cũng không ngoại lệ.",
						"thai": "ทุกสิ่ง... จะถูกดูดซับโดยข้าเท่านั้น พวกเจ้าก็ไม่มีข้อยกเว้น",
						"hindi": "सब कुछ... मुझमें समा जाएगा। तुम भी कोई अपवाद नहीं हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "망각? 네가 꾸민 짓이구나!",
						"english": "Oblivion? You're behind this!",
						"japanese": "忘却？お前が仕組んだことだったのか！",
						"chinese": "遗忘？是你搞的鬼！",
						"french": "L'oubli ? C'est ton œuvre !",
						"spanish": "¿Olvido? ¡Tú eres el culpable!",
						"vietnamese": "Lãng quên? Ngươi là kẻ đứng đằng sau!",
						"thai": "การลืมเลือน? แกเป็นคนบงการนี่เอง!",
						"hindi": "विस्मृति? यह तुम्हारी करतूत है!"
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
						"korean": "…어리석군. 나를 쓰러뜨려도… '진정한 포식자'는…",
						"english": "...Foolish. Even if you defeat me... the 'true predator' is...",
						"japanese": "…愚かな。私を倒しても…『真の捕食者』は…",
						"chinese": "…愚蠢。即使你击败了我…“真正的捕食者”也…",
						"french": "...Stupide. Même si tu me vaincs... le 'véritable prédateur' est...",
						"spanish": "...Tonto. Incluso si me vences... el 'verdadero depredador' es...",
						"vietnamese": "...Ngu xuẩn. Ngay cả khi ngươi đánh bại ta... 'kẻ săn mồi thực sự' là...",
						"thai": "...โง่เขลา แม้ว่าเจ้าจะโค่นข้าได้... 'นักล่าที่แท้จริง' ก็ยัง...",
						"hindi": "...मूर्ख। भले ही तुम मुझे हरा दो... 'असली शिकारी' तो..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "'진정한 포식자'라니?",
						"english": "'True predator'?",
						"japanese": "「真の捕食者」だと？",
						"chinese": "“真正的捕食者”？",
						"french": "« Véritable prédateur » ?",
						"spanish": "¿Un 'depredador verdadero'?",
						"vietnamese": "'Kẻ săn mồi thực sự'?",
						"thai": "'นักล่าที่แท้จริง'?",
						"hindi": "एक 'सच्चा शिकारी'?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 사라졌다. 그러나 린의 회상과 보스의 마지막 말이 파편처럼 남아 머릿속을 맴돌았다.",
						"english": "The colossal shadow vanished. Yet, Lynn's recollections and the boss's final words lingered, fragments swirling in her mind.",
						"japanese": "巨大な影は消え去った。しかし、リンの記憶とボスの最後の言葉が、断片となって頭の中を巡っていた。",
						"chinese": "巨大的阴影消失了。然而，琳的回忆和首领的遗言像碎片一样，在她脑海中萦绕。",
						"french": "L'ombre colossale disparut. Pourtant, les souvenirs de Lynn et les derniers mots du boss persistaient, des fragments tourbillonnant dans son esprit.",
						"spanish": "La sombra colosal se desvaneció. Sin embargo, los recuerdos de Lynn y las últimas palabras del jefe persistían, fragmentos girando en su mente.",
						"vietnamese": "Bóng tối khổng lồ biến mất. Tuy nhiên, hồi ức của Lynn và những lời cuối của trùm vẫn còn đó, những mảnh vỡ vẩn vơ trong tâm trí cô.",
						"thai": "เงาขนาดมหึมาหายไป อย่างไรก็ตาม ความทรงจำของลินน์และคำพูดสุดท้ายของบอสยังคงวนเวียนเป็นเสี้ยวส่วนในใจเธอ",
						"hindi": "विशाल छाया गायब हो गई। फिर भी, लिन की यादें और बॉस के अंतिम शब्द, टुकड़ों की तरह उसके दिमाग में घूमते रहे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시는 여전히 디지털 광기 속에 잠겨 있었다.",
						"english": "The city remained steeped in digital madness.",
						"japanese": "都市は未だ、デジタルの狂気に沈んでいた。",
						"chinese": "城市依然沉浸在数字的疯狂之中。",
						"french": "La ville restait plongée dans la folie numérique.",
						"spanish": "La ciudad seguía sumida en la locura digital.",
						"vietnamese": "Thành phố vẫn chìm đắm trong sự điên loạn kỹ thuật số.",
						"thai": "เมืองยังคงจมดิ่งอยู่ในความบ้าคลั่งทางดิจิทัล",
						"hindi": "शहर अभी भी डिजिटल पागलपन में डूबा हुआ था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시 전체가 디지털 광기에 잠식된다.",
			"과거 '팬텀 시티'의 그림자가 드리운다.",
			"잊혀진 기록 속, 은퇴한 보안 전문가 린을 만난다.",
			"그녀의 고통스러운 회상은 단순한 데이터 소실이 아니었다.",
			"무언가, 흡수되고 있었다."
		],
		"english": [
			"The entire city is consumed by digital madness.",
			"The shadow of the former 'Phantom City' looms.",
			"In forgotten records, we meet Rin, a retired security expert.",
			"Her painful recollection was not just simple data loss.",
			"Something was being absorbed."
		],
		"japanese": [
			"都市全体がデジタル狂気に侵食される。",
			"かつての「ファントムシティ」の影が忍び寄る。",
			"忘れられた記録の中で、引退したセキュリティ専門家リンと出会う。",
			"彼女の苦痛な回想は、単なるデータ損失ではなかった。",
			"何かが、吸収されていた。"
		],
		"chinese": [
			"整个城市被数字狂潮吞噬。",
			"昔日“幻影之城”的阴影笼罩而来。",
			"在被遗忘的记录中，我们遇到了退休的安全专家凛。",
			"她痛苦的回忆并非仅仅是数据丢失。",
			"有些东西正在被吸收。"
		],
		"french": [
			"La ville entière est submergée par la folie numérique.",
			"L'ombre de l'ancienne \"Cité Fantôme\" plane.",
			"Dans des archives oubliées, nous rencontrons Rin, une experte en sécurité à la retraite.",
			"Son douloureux souvenir n'était pas une simple perte de données.",
			"Quelque chose était absorbé."
		],
		"spanish": [
			"La ciudad entera es consumida por la locura digital.",
			"La sombra de la antigua \"Ciudad Fantasma\" se cierne.",
			"En registros olvidados, conocemos a Rin, una experta en seguridad retirada.",
			"Su doloroso recuerdo no era una simple pérdida de datos.",
			"Algo estaba siendo absorbido."
		],
		"vietnamese": [
			"Cả thành phố bị nhấn chìm trong cơn điên loạn kỹ thuật số.",
			"Bóng ma của 'Thành phố ảo ảnh' ngày xưa bao trùm.",
			"Trong những ghi chép bị lãng quên, ta gặp Rin, một chuyên gia bảo mật đã nghỉ hưu.",
			"Hồi ức đau khổ của cô ấy không chỉ là mất dữ liệu đơn thuần.",
			"Có điều gì đó đang bị hấp thụ."
		],
		"thai": [
			"ทั้งเมืองถูกกลืนกินด้วยความบ้าคลั่งทางดิจิทัล",
			"เงาของ 'เมืองมายา' ในอดีตได้คืบคลานเข้ามา",
			"ในบันทึกที่ถูกลืม เราได้พบกับริน ผู้เชี่ยวชาญด้านความปลอดภัยที่เกษียณแล้ว",
			"ความทรงจำอันเจ็บปวดของเธอไม่ใช่แค่การสูญหายของข้อมูลธรรมดา",
			"บางสิ่งกำลังถูกดูดซับ"
		],
		"hindi": [
			"पूरा शहर डिजिटल उन्माद में समा जाता है।",
			"भूतपूर्व 'फैंटम सिटी' का साया मंडरा रहा है।",
			"भूले हुए अभिलेखों में, हमारी मुलाकात सेवानिवृत्त सुरक्षा विशेषज्ञ रिन से होती है।",
			"उसकी दर्दनाक याददाश्त केवल डेटा हानि नहीं थी।",
			"कुछ अवशोषित हो रहा था।"
		]
	}
} as const;
