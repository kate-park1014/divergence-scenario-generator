export const scenario_snowy_skalhorn_45_02 = {
	"scenario_id": "snowy_skalhorn_45_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "뿔잔의 표면이 더욱 선명하게 빛났다. 신을 향한 기도인 줄 알았던 문양은, 계약의 조항들이었다.",
						"english": "The horn cup's surface shone even brighter. The emblem, once thought to be a prayer to a god, was actually the terms of a contract.",
						"japanese": "角杯の表面がより鮮明に輝いた。神への祈りだと思った紋様は、契約の条項だった。",
						"chinese": "角杯的表面闪耀得更加清晰。原以为是对神的祈祷的纹章，竟然是契约的条款。",
						"french": "La surface de la corne brillait plus distinctement encore. L'emblème, cru être une prière aux dieux, était en fait les termes d'un contrat.",
						"spanish": "La superficie del cuerno brillaba aún más nítidamente. El emblema, que creía una oración a los dioses, eran en realidad los términos de un contrato.",
						"vietnamese": "Bề mặt của sừng cốc sáng rõ hơn. Biểu tượng, tưởng là lời cầu nguyện gửi đến thần linh, hóa ra lại là các điều khoản của một hợp đồng.",
						"thai": "พื้นผิวของถ้วยเขาฉายแสงชัดเจนยิ่งขึ้น สัญลักษณ์ที่คิดว่าเป็นคำอธิษฐานต่อเทพเจ้า แท้จริงแล้วคือเงื่อนไขของสัญญา",
						"hindi": "सींग वाले प्याले की सतह और भी स्पष्ट रूप से चमक उठी। जिस प्रतीक को ईश्वर के लिए प्रार्थना समझा था, वह वास्तव में एक अनुबंध की शर्तें थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 또 다른 환영인가?",
						"english": "Is this... another vision?",
						"japanese": "これは…また別の幻影か？",
						"chinese": "这…是又一个幻象吗？",
						"french": "Est-ce… une autre vision ?",
						"spanish": "¿Es esto… otra visión?",
						"vietnamese": "Đây… lại là một ảo ảnh khác sao?",
						"thai": "นี่มัน… ภาพหลอนอีกแล้วหรือ?",
						"hindi": "क्या यह... एक और दर्शन है?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "주술사… 무릎을 꿇었군.",
						"english": "The shaman... knelt.",
						"japanese": "呪術師が…ひざまずいたな。",
						"chinese": "萨满…跪下了。",
						"french": "Le chaman… s'est agenouillé.",
						"spanish": "El chamán… se arrodilló.",
						"vietnamese": "Pháp sư… đã quỳ xuống.",
						"thai": "หมอผี… คุกเข่าแล้ว",
						"hindi": "तांत्रिक… घुटनों के बल बैठ गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영 속, 거대한 빙설 정령 앞에 한 주술사가 무릎 꿇은 채 무언가를 바치고 있었다.",
						"english": "In the vision, a shaman knelt before a colossal Ice Spirit, offering something.",
						"japanese": "幻影の中、巨大な氷雪の精霊の前に一人の呪術師がひざまずき、何かを捧げていた。",
						"chinese": "幻象中，一位萨满跪在巨大的冰雪精灵前，献上着什么。",
						"french": "Dans la vision, un chaman s'agenouillait devant un esprit de glace colossal, offrant quelque chose.",
						"spanish": "En la visión, un chamán se arrodillaba ante un espíritu de hielo colosal, ofreciendo algo.",
						"vietnamese": "Trong ảo ảnh, một pháp sư đang quỳ gối trước một Tinh linh Băng tuyết khổng lồ, dâng hiến thứ gì đó.",
						"thai": "ในภาพหลอน หมอผีคนหนึ่งคุกเข่าอยู่หน้าวิญญาณน้ำแข็งมหึมา กำลังถวายบางสิ่ง",
						"hindi": "दर्शन में, एक तांत्रिक एक विशाल हिम आत्मा के सामने घुटनों के बल बैठा कुछ अर्पित कर रहा था।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "부족을 위해… 저 정도로 절박했단 말인가.",
						"english": "For the tribe... was he that desperate?",
						"japanese": "部族のために…そこまで切羽詰まっていたというのか。",
						"chinese": "为了部落…他竟然如此绝望吗？",
						"french": "Pour la tribu… était-il à ce point désespéré ?",
						"spanish": "¿Por la tribu… estaba tan desesperado?",
						"vietnamese": "Vì bộ lạc… anh ta lại tuyệt vọng đến mức đó sao?",
						"thai": "เพื่อเผ่า… เขาหมดหวังถึงขนาดนั้นเลยหรือ?",
						"hindi": "जनजाति के लिए... क्या वह इतना हताश था?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 대가를 치르려는 거지?",
						"english": "What price is he going to pay?",
						"japanese": "どんな代償を払うつもりだ？",
						"chinese": "他打算付出什么代价？",
						"french": "Quel prix va-t-il payer ?",
						"spanish": "¿Qué precio va a pagar?",
						"vietnamese": "Anh ta định trả giá gì?",
						"thai": "เขาจะจ่ายอะไรเป็นการแลกเปลี่ยน?",
						"hindi": "वह क्या कीमत चुकाने वाला है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝은 결국… 이런 형태인가. 굴복.",
						"english": "Is this the ultimate form of strength... surrender?",
						"japanese": "強さの果ては…この形か。屈服。",
						"chinese": "力量的终点…竟是这般模样吗。屈服。",
						"french": "La fin de la force... est-ce cette forme, la capitulation ?",
						"spanish": "El fin de la fuerza… ¿es esto? Rendición.",
						"vietnamese": "Đỉnh cao của sức mạnh… rốt cuộc là hình thái này sao. Khuất phục.",
						"thai": "จุดสูงสุดของความแข็งแกร่ง... คือรูปแบบนี้งั้นหรือ? ยอมจำนน.",
						"hindi": "शक्ति का अंत... क्या यही रूप है? समर्पण।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "정령의 힘… 압도적이군.",
						"english": "The spirit's power... it's overwhelming.",
						"japanese": "精霊の力…圧倒的だな。",
						"chinese": "精灵的力量…势不可挡。",
						"french": "Le pouvoir de l'esprit… c'est écrasant.",
						"spanish": "El poder del espíritu… es abrumador.",
						"vietnamese": "Sức mạnh của tinh linh… thật áp đảo.",
						"thai": "พลังของวิญญาณ... มันช่างทรงพลังเหลือเกิน.",
						"hindi": "आत्मा की शक्ति... यह जबरदस्त है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "주술사의 표정이 점점… 변하고 있어.",
						"english": "The shaman's expression is slowly... changing.",
						"japanese": "呪術師の表情が徐々に…変わっていく。",
						"chinese": "萨满的表情渐渐…变了。",
						"french": "L'expression du chaman... change progressivement.",
						"spanish": "La expresión del chamán... está cambiando.",
						"vietnamese": "Biểu cảm của pháp sư dần dần… thay đổi.",
						"thai": "สีหน้าของหมอผีค่อยๆ... เปลี่ยนไป.",
						"hindi": "शमन का भाव धीरे-धीरे... बदल रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "절박함이 만들어낸… 광기인가.",
						"english": "Is this desperation-born... madness?",
						"japanese": "絶望が生み出した…狂気か。",
						"chinese": "这是绝望所造就的…疯狂吗。",
						"french": "Est-ce la folie... née du désespoir ?",
						"spanish": "¿Es locura... nacida de la desesperación?",
						"vietnamese": "Là sự điên loạn… do tuyệt vọng tạo ra sao.",
						"thai": "ความสิ้นหวังสร้าง... ความบ้าคลั่งงั้นหรือ?",
						"hindi": "क्या यह हताशा से जन्मा... पागलपन है?"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "결국 모두… 무엇인가에 굴복하는 건가.",
						"english": "In the end, does everyone... surrender to something?",
						"japanese": "結局、皆…何かに屈服するのか。",
						"chinese": "最终所有人都…要向某种事物屈服吗。",
						"french": "Au final, tout le monde... finit par se soumettre à quelque chose ?",
						"spanish": "Al final, ¿todos... se rinden a algo?",
						"vietnamese": "Rốt cuộc tất cả… đều phải khuất phục trước điều gì đó sao.",
						"thai": "สุดท้ายแล้วทุกคน... ก็ต้องยอมจำนนต่อบางสิ่งงั้นหรือ?",
						"hindi": "अंत में, क्या हर कोई... किसी चीज़ के सामने झुक जाता है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니. 이대로 당할 순 없어.",
						"english": "No. I can't be defeated like this.",
						"japanese": "いや。このままやられるわけにはいかない。",
						"chinese": "不。不能就这样认输。",
						"french": "Non. Je ne peux pas être vaincu ainsi.",
						"spanish": "No. No puedo ser derrotado así.",
						"vietnamese": "Không. Không thể bị đánh bại như thế này được.",
						"thai": "ไม่. ข้าจะยอมแพ้แบบนี้ไม่ได้!",
						"hindi": "नहीं। मैं ऐसे हार नहीं सकता।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그래… 나 또한, 내 방식대로 강함의 끝을 볼 뿐.",
						"english": "Yes... I too, will see the ultimate strength, in my own way.",
						"japanese": "そうだ…私も、私なりに強さの果てを見るだけだ。",
						"chinese": "没错…我亦将，以我自己的方式，见证力量的终点。",
						"french": "Oui... moi aussi, je verrai la limite de la force, à ma manière.",
						"spanish": "Sí... yo también, a mi manera, veré el fin de la fuerza.",
						"vietnamese": "Đúng vậy… Ta cũng vậy, sẽ nhìn thấy giới hạn của sức mạnh, theo cách của riêng mình.",
						"thai": "ใช่แล้ว... ข้าก็จะเห็นจุดสูงสุดของความแข็งแกร่งในแบบของข้าเช่นกัน.",
						"hindi": "हाँ... मैं भी, अपने तरीके से, शक्ति का चरम देखूँगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희 또한… 그 주술사처럼 무릎 꿇을 것이다. 언젠가는.",
						"english": "You too... will kneel like that sorcerer. Someday.",
						"japanese": "お前たちも…あの呪術師のように膝を屈するだろう。いずれはな。",
						"chinese": "你们也…会像那个巫师一样跪下。总有一天。",
						"french": "Vous aussi... vous vous agenouillerez comme ce sorcier. Un jour.",
						"spanish": "Vosotros también... os arrodillaréis como ese hechicero. Algún día.",
						"vietnamese": "Các ngươi cũng... sẽ quỳ gối như tên pháp sư đó. Rồi sẽ đến lúc.",
						"thai": "พวกเจ้าเองก็จะ...คุกเข่าเหมือนหมอผีนั่น สักวันหนึ่ง",
						"hindi": "तुम भी... उस जादूगर की तरह घुटने टेकोगे। किसी दिन।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "절대… 굴복하지 않아.",
						"english": "Never... I won't surrender.",
						"japanese": "決して…屈しない。",
						"chinese": "绝不…屈服。",
						"french": "Jamais... Je ne me soumettrai pas.",
						"spanish": "Jamás... no me rendiré.",
						"vietnamese": "Không đời nào... ta sẽ không đầu hàng.",
						"thai": "ไม่มีทาง...ฉันจะไม่ยอมแพ้",
						"hindi": "कभी नहीं... मैं हार नहीं मानूँगा।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 어리석은 자들… 결국 여기까지 왔는가.",
						"english": "These fools... have they finally come this far?",
						"japanese": "この愚か者ども…ついにここまで来たか。",
						"chinese": "这些愚蠢的家伙…终究还是走到这里了吗。",
						"french": "Ces imbéciles... sont-ils finalement arrivés jusqu'ici ?",
						"spanish": "Estos necios… ¿finalmente han llegado hasta aquí?",
						"vietnamese": "Những kẻ ngu ngốc này… cuối cùng cũng đã đến đây sao.",
						"thai": "พวกโง่เง่า... ในที่สุดก็มาถึงนี่แล้วรึ?",
						"hindi": "ये मूर्ख... क्या वे अंततः यहाँ तक आ गए हैं?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 주술사와 계약한 정령인가!",
						"english": "Are you the spirit contracted with that shaman!",
						"japanese": "貴様があの呪術師と契約した精霊か！",
						"chinese": "你就是那个和萨满签订契约的精灵吗！",
						"french": "Es-tu l'esprit lié par contrat à ce chaman ?",
						"spanish": "¡¿Eres tú el espíritu que pactó con ese chamán?!",
						"vietnamese": "Ngươi là tinh linh đã ký khế ước với pháp sư đó sao!",
						"thai": "เจ้าคือวิญญาณที่ทำสัญญากับหมอผีนั่นงั้นหรือ!",
						"hindi": "क्या तुम वह आत्मा हो जिसने उस शमन के साथ अनुबंध किया है?!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "계약? 흥… 그저 약속에 불과하지. 대가는 언제나 확실히 받았다.",
						"english": "Contract? Hmph... it's merely a promise. The price has always been paid in full.",
						"japanese": "契約？フン…ただの約束に過ぎん。代償は常に確実に受け取った。",
						"chinese": "契约？哼…那不过是约定罢了。代价我可是一直都收得清清楚楚。",
						"french": "Contrat ? Hmph... ce n'est qu'une promesse. Le prix a toujours été payé avec certitude.",
						"spanish": "¿Contrato? Hmph... es solo una promesa. El precio siempre ha sido pagado con certeza.",
						"vietnamese": "Khế ước? Hừm… đó chỉ là một lời hứa thôi. Cái giá ta nhận luôn rất rõ ràng.",
						"thai": "สัญญา? หึ... มันก็แค่คำสัญญาเท่านั้น. ค่าตอบแทนข้าได้รับมาตลอดอย่างแน่นอน.",
						"hindi": "अनुबंध? हँ... यह केवल एक वादा है। कीमत हमेशा निश्चित रूप से ली गई है।"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그 대가가… 모두를 파멸로 이끌었군.",
						"english": "That price... it led everyone to ruin.",
						"japanese": "その代償が…皆を破滅に導いたか。",
						"chinese": "那代价…将所有人引向了毁灭。",
						"french": "Ce prix... il a mené tout le monde à la ruine.",
						"spanish": "Ese precio... llevó a todos a la ruina.",
						"vietnamese": "Cái giá đó... đã dẫn tất cả đến diệt vong.",
						"thai": "ผลกรรมนั้น...นำพาทุกคนสู่ความพินาศ",
						"hindi": "उस कीमत ने... सबको बर्बादी की ओर धकेल दिया।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 고작 이 정도로… 계약은… 끝나지… 않는다…",
						"english": "Ugh... Is this all it takes...? The contract... it won't... end...",
						"japanese": "くっ…たかがこれしきで…契約は…終わらぬ…",
						"chinese": "呃啊…就凭这点…契约…不会…结束…",
						"french": "Urgh... Si peu suffira...? Le contrat... ne... prendra... pas fin...",
						"spanish": "Ugh... ¿Con solo esto...? El contrato... no... acabará...",
						"vietnamese": "Khốn kiếp... Chỉ bấy nhiêu thôi sao...? Giao kèo... sẽ không... kết thúc...",
						"thai": "อึก...แค่เท่านี้เองหรือ...สัญญา...ไม่...จบลง...",
						"hindi": "उफ़... बस इतनी सी बात...? अनुबंध... ख़त्म... नहीं... होगा..."
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "결국 스스로를 삼키는 힘이었군. 헛된 계약이었다.",
						"english": "In the end, it was a power that consumed itself. A futile contract.",
						"japanese": "結局、己を食い潰す力だったか。虚しい契約だったな。",
						"chinese": "最终，那是一种吞噬自身的力量。一场徒劳的契约。",
						"french": "Finalement, c'était une force qui se dévorait elle-même. Un contrat futile.",
						"spanish": "Al final, era un poder que se consumía a sí mismo. Un contrato inútil.",
						"vietnamese": "Rốt cuộc, đó là sức mạnh tự nuốt chửng chính mình. Một giao kèo vô ích.",
						"thai": "สุดท้ายแล้ว มันก็เป็นพลังที่กลืนกินตัวเอง สัญญาที่ไร้ค่า",
						"hindi": "अंततः, यह एक ऐसी शक्ति थी जिसने खुद को ही निगल लिया। एक व्यर्थ का अनुबंध था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 문양 하나가 희미해졌다. 하지만 아직 많은 조항이 남아 있었다. 대가의 윤곽이 더욱 선명해졌다.",
						"english": "One of the horn cup's patterns faded. But many clauses remained. The outline of the price became clearer.",
						"japanese": "角杯の模様が一つ薄れた。だが、まだ多くの条項が残っていた。代償の輪郭はさらに鮮明になった。",
						"chinese": "号角杯上的一个图案变得模糊。但仍有许多条款残留。那代价的轮廓愈发清晰了。",
						"french": "L'un des motifs de la corne s'est estompé. Mais de nombreuses clauses subsistaient. Les contours du prix devinrent plus nets.",
						"spanish": "Uno de los patrones del cuerno se desvaneció. Pero muchas cláusulas permanecían. El contorno del precio se hizo más claro.",
						"vietnamese": "Một hoa văn trên sừng đã mờ đi. Nhưng nhiều điều khoản vẫn còn. Hình bóng của cái giá trở nên rõ ràng hơn.",
						"thai": "ลวดลายหนึ่งบนถ้วยเขาจางลง แต่ยังมีเงื่อนไขอีกมาก รูปแบบของราคาเริ่มชัดเจนขึ้น",
						"hindi": "सींग के प्याले का एक निशान धुंधला पड़ गया। लेकिन अभी भी कई शर्तें बाकी थीं। कीमत की रूपरेखा और स्पष्ट हो गई।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 문양이 빛난다. 그것은 기도가 아니었다.",
			"빙설 정령과 맺은 계약의 조항들.",
			"환영 속에서, 한 주술사가 무릎 꿇고 있었다.",
			"그 절박함이 — 이바르의 마음을 무겁게 짓눌렀다."
		],
		"english": [
			"The horn cup's emblem shines. It was not a prayer.",
			"The terms of the contract made with the Ice Spirit.",
			"In a vision, a shaman knelt.",
			"That desperation — weighed heavily on Ivar's heart."
		],
		"japanese": [
			"角杯の紋様が輝く。それは祈りではなかった。",
			"氷雪の精霊と結んだ契約の条項。",
			"幻影の中で、一人の呪術師がひざまずいていた。",
			"その絶望が—イーヴァルの心を重く締め付けた。"
		],
		"chinese": [
			"角杯的纹章闪耀。那不是祈祷。",
			"与冰雪精灵签订的契约条款。",
			"幻象中，一位萨满跪着。",
			"那份绝望——沉重地压在伊瓦尔的心头。"
		],
		"french": [
			"L'emblème de la corne brillait. Ce n'était pas une prière.",
			"Les termes du contrat conclu avec l'Esprit de Glace.",
			"Dans une vision, un chaman s'agenouillait.",
			"Ce désespoir — pesait lourdement sur le cœur d'Ivar."
		],
		"spanish": [
			"El emblema del cuerno brilla. No era una oración.",
			"Los términos del contrato con el Espíritu de Hielo.",
			"En una visión, un chamán se arrodillaba.",
			"Esa desesperación — oprimía el corazón de Ivar."
		],
		"vietnamese": [
			"Biểu tượng trên sừng cốc phát sáng. Đó không phải là một lời cầu nguyện.",
			"Các điều khoản của hợp đồng đã ký với Tinh linh Băng tuyết.",
			"Trong ảo ảnh, một pháp sư đang quỳ gối.",
			"Sự tuyệt vọng đó — đè nặng lên trái tim Ivar."
		],
		"thai": [
			"สัญลักษณ์บนถ้วยเขาฉายแสง มันไม่ใช่คำอธิษฐาน",
			"ข้อตกลงในสัญญาที่ทำกับวิญญาณน้ำแข็ง",
			"ในภาพหลอน หมอผีคนหนึ่งกำลังคุกเข่า",
			"ความสิ้นหวังนั้น — กดทับหัวใจของอีวาร์อย่างหนัก"
		],
		"hindi": [
			"सींग वाले प्याले का प्रतीक चमकता है। वह प्रार्थना नहीं थी।",
			"हिम आत्मा के साथ हुए अनुबंध की शर्तें।",
			"एक दर्शन में, एक तांत्रिक घुटनों के बल बैठा था।",
			"वह हताशा — इवार के दिल पर भारी पड़ रही थी।"
		]
	}
} as const;
