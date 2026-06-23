export const scenario_modern_nomos_7_04 = {
	"scenario_id": "modern_nomos_7_04",
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
			"맹세의 도시, 찢어진 약속들이 그림자처럼 배회한다.",
			"강제된 순응의 공포. 그 대가는 처참했다.",
			"비극적인 맹세에 묶인 자, 린. 그녀는 무엇을 보았나.",
			"시간은 뒤틀리고, 진실은 미궁 속에 잠겨 있다."
		],
		"english": [
			"City of Oaths, where broken promises roam like shadows.",
			"The terror of forced conformity. The price was gruesome.",
			"Lyn, bound by a tragic oath. What did she witness?",
			"Time is warped, and truth is submerged in a labyrinth."
		],
		"japanese": [
			"誓いの都市、破られた約束が影のようにさまよう。",
			"強制された順応の恐怖。その代償は悲惨だった。",
			"悲劇的な誓いに縛られた者、リン。彼女は何を見たのか。",
			"時間は歪み、真実は迷宮の中に沈む。"
		],
		"chinese": [
			"誓约之城，破碎的诺言如影随形。",
			"强制顺从的恐惧。代价是惨痛的。",
			"被悲剧誓约束缚之人，琳。她看到了什么？",
			"时间扭曲，真相深埋迷宫。"
		],
		"french": [
			"Cité des Serments, où les promesses brisées rôdent comme des ombres.",
			"La terreur de la conformité forcée. Le prix fut macabre.",
			"Lyn, liée par un serment tragique. Qu'a-t-elle vu ?",
			"Le temps est distordu, et la vérité est engloutie dans un labyrinthe."
		],
		"spanish": [
			"Ciudad de los Juramentos, donde las promesas rotas deambulan como sombras.",
			"El terror de la conformidad forzada. El precio fue espantoso.",
			"Lyn, atada por un juramento trágico. ¿Qué presenció?",
			"El tiempo está distorsionado, y la verdad yace sumergida en un laberinto."
		],
		"vietnamese": [
			"Thành phố Lời thề, nơi những lời hứa tan vỡ lang thang như bóng đêm.",
			"Nỗi kinh hoàng của sự tuân thủ ép buộc. Cái giá phải trả thật thảm khốc.",
			"Lyn, bị ràng buộc bởi một lời thề bi thảm. Nàng đã thấy gì?",
			"Thời gian méo mó, sự thật chìm sâu trong mê cung."
		],
		"thai": [
			"นครแห่งคำสาบาน ที่ซึ่งคำสัญญาที่พังทลายวนเวียนราวกับเงา",
			"ความหวาดกลัวของการถูกบังคับให้ปฏิบัติตาม ผลลัพธ์นั้นน่าสยดสยอง",
			"ลิน ผู้ถูกผูกมัดด้วยคำสาบานอันน่าเศร้า เธอเห็นอะไร?",
			"เวลากลับตาลปัตร ความจริงจมดิ่งในเขาวงกต"
		],
		"hindi": [
			"शपथों का शहर, जहाँ टूटे हुए वादे परछाइयों की तरह भटकते हैं।",
			"थोपी गई अनुरूपता का आतंक। कीमत भयानक थी।",
			"दुखद शपथ से बंधी लिन। उसने क्या देखा?",
			"समय विकृत है, और सच भूलभुलैया में डूबा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "오래된 구역. 벽에는 찢겨진 맹세의 흔적들이 기이하게 들러붙어 있었다.",
						"english": "An old district. Traces of torn oaths clung eerily to the walls.",
						"japanese": "古い区画。壁には引き裂かれた誓いの痕跡が奇妙に貼り付いていた。",
						"chinese": "老旧的区域。墙上诡异地附着着撕裂誓约的痕迹。",
						"french": "Un vieux quartier. Des traces de serments déchirés s'accrochaient étrangement aux murs.",
						"spanish": "Un distrito antiguo. Rastros de juramentos rotos se adherían extrañamente a las paredes.",
						"vietnamese": "Khu vực cũ. Những dấu vết của lời thề bị xé nát bám víu kỳ lạ trên tường.",
						"thai": "เขตเก่าแก่ ร่องรอยของคำสาบานที่ฉีกขาดติดอยู่ตามกำแพงอย่างน่าขนลุก",
						"hindi": "एक पुराना ज़िला। दीवारों पर टूटे हुए शपथों के निशान अजीब तरह से चिपके हुए थे।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 흔적들은 뭐지? 맹세를 어긴 자들의 기록인가?",
						"english": "What are these traces? Records of those who broke their oaths?",
						"japanese": "この痕跡は何だ？誓いを破った者たちの記録か？",
						"chinese": "这些痕迹是什么？是违背誓约者的记录吗？",
						"french": "Que sont ces traces ? Des registres de ceux qui ont brisé leurs serments ?",
						"spanish": "¿Qué son estas huellas? ¿Registros de aquellos que rompieron sus juramentos?",
						"vietnamese": "Những dấu vết này là gì? Ghi chép của những kẻ đã phá vỡ lời thề ư?",
						"thai": "ร่องรอยพวกนี้คืออะไร? บันทึกของผู้ที่ผิดคำสาบานงั้นหรือ?",
						"hindi": "ये निशान क्या हैं? क्या ये उन लोगों के रिकॉर्ड हैं जिन्होंने अपनी शपथ तोड़ी?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…버려진 자들의 그림자.",
						"english": "...Shadows of the abandoned.",
						"japanese": "…見捨てられた者たちの影。",
						"chinese": "……被遗弃者的影子。",
						"french": "...Les ombres des abandonnés.",
						"spanish": "...Sombras de los abandonados.",
						"vietnamese": "...Bóng tối của những kẻ bị bỏ rơi.",
						"thai": "...เงาของผู้ถูกทอดทิ้ง",
						"hindi": "...छोड़े हुए लोगों की परछाइयाँ।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes... ?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "린. 나도 그들 중 하나였어. 맹세를 거역하려다… 여기까지 왔지.",
						"english": "Lyn. I was one of them. I tried to defy the oath... and ended up here.",
						"japanese": "リン。私も彼らの一人だった。誓いに背こうとして…ここまで来たのよ。",
						"chinese": "琳。我曾是他们中的一员。试图违抗誓约……才来到这里。",
						"french": "Lyn. J'étais l'une d'elles. J'ai tenté de défier le serment... et je suis arrivée ici.",
						"spanish": "Lyn. Yo era una de ellos. Intenté desafiar el juramento... y terminé aquí.",
						"vietnamese": "Lyn. Ta cũng là một trong số họ. Đã cố chống lại lời thề… và đến được đây.",
						"thai": "ลิน ฉันก็เป็นหนึ่งในนั้น ฉันพยายามจะฝ่าฝืนคำสาบาน... แล้วก็มาอยู่ที่นี่",
						"hindi": "लिन। मैं भी उनमें से एक थी। मैंने शपथ का उल्लंघन करने की कोशिश की... और यहीं आ गई।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무슨 맹세였는데?",
						"english": "What oath was it?",
						"japanese": "どんな誓いだったの？",
						"chinese": "是什么誓约？",
						"french": "Quel serment était-ce ?",
						"spanish": "¿Qué juramento era?",
						"vietnamese": "Lời thề nào vậy?",
						"thai": "คำสาบานอะไร?",
						"hindi": "वह कौन सी शपथ थी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "절대적인 순응. 거부하면… 모든 것을 잃어.",
						"english": "Absolute obedience. Refuse... and lose everything.",
						"japanese": "絶対的な服従。拒否すれば…全てを失う。",
						"chinese": "绝对服从。拒绝…将失去一切。",
						"french": "Obéissance absolue. Refusez... et perdez tout.",
						"spanish": "Obediencia absoluta. Si te niegas... lo pierdes todo.",
						"vietnamese": "Tuyệt đối tuân phục. Nếu từ chối... sẽ mất tất cả.",
						"thai": "การยอมจำนนโดยสิ้นเชิง ปฏิเสธ... แล้วจะสูญเสียทุกสิ่ง",
						"hindi": "पूर्ण आज्ञाकारिता। इनकार करो... और सब कुछ खो दो।"
					},
					"emotion": "angry",
					"speaker": "lin",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이곳은… 맹세를 깨고 도망치려 했던 자들의 마지막 흔적이야.",
						"english": "This place... is the last trace of those who broke their vows and tried to escape.",
						"japanese": "ここは…誓いを破り、逃げようとした者たちの最後の痕跡だ。",
						"chinese": "这里…是那些违背誓言、试图逃跑之人的最后痕迹。",
						"french": "Cet endroit... est la dernière trace de ceux qui ont brisé leurs vœux et tenté de s'échapper.",
						"spanish": "Este lugar... es el último rastro de quienes rompieron sus juramentos e intentaron escapar.",
						"vietnamese": "Nơi này... là dấu vết cuối cùng của những kẻ đã phá vỡ lời thề và cố gắng bỏ trốn.",
						"thai": "ที่นี่... คือร่องรอยสุดท้ายของผู้ที่หักล้างคำสาบานและพยายามหลบหนี",
						"hindi": "यह जगह... उन लोगों का आखिरी निशान है जिन्होंने अपनी प्रतिज्ञा तोड़ी और भागने की कोशिश की।"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비참한 최후라고 했지?",
						"english": "A miserable end, you said?",
						"japanese": "悲惨な最期、だと？",
						"chinese": "你说，是个悲惨的结局？",
						"french": "Une fin misérable, tu as dit ?",
						"spanish": "¿Un final miserable, dijiste?",
						"vietnamese": "Một kết cục bi thảm, phải không?",
						"thai": "จุดจบที่น่าอนาถ, คุณว่าใช่ไหม?",
						"hindi": "एक दुखद अंत, तुमने कहा?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "응. 심판자는 맹세를 어긴 자를 절대 용서하지 않아. 영혼까지 잠식시켜.",
						"english": "Yes. The Arbiter never forgives those who break their vows. They consume even their souls.",
						"japanese": "ええ。審判者は誓いを破った者を決して許さない。魂までも蝕む。",
						"chinese": "嗯。审判者绝不宽恕违背誓言之人。他们甚至会侵蚀灵魂。",
						"french": "Oui. L'Arbitre ne pardonne jamais à ceux qui brisent leurs vœux. Ils consument même leur âme.",
						"spanish": "Sí. El Arbitro nunca perdona a quienes rompen sus juramentos. Consumen hasta sus almas.",
						"vietnamese": "Đúng vậy. Kẻ phán xét không bao giờ tha thứ cho những kẻ phá vỡ lời thề. Họ ăn mòn cả linh hồn.",
						"thai": "ใช่ ผู้พิพากษาไม่มีวันให้อภัยผู้ที่หักล้างคำสาบาน พวกเขากลืนกินแม้กระทั่งจิตวิญญาณ",
						"hindi": "हाँ। निर्णायक उन लोगों को कभी माफ़ नहीं करता जो अपनी प्रतिज्ञा तोड़ते हैं। वे उनकी आत्माओं तक को खा जाते हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어떻게 영혼을 잠식시킨다는 거지?",
						"english": "How do they consume souls?",
						"japanese": "どうやって魂を蝕むんだ？",
						"chinese": "他们如何侵蚀灵魂？",
						"french": "Comment consument-ils les âmes ?",
						"spanish": "¿Cómo consumen las almas?",
						"vietnamese": "Họ ăn mòn linh hồn bằng cách nào?",
						"thai": "พวกเขาจะกลืนกินจิตวิญญาณได้อย่างไร?",
						"hindi": "वे आत्माओं को कैसे खा जाते हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "과거의 기억을 비틀고, 환영 속에 가둬. 영원히 고통받게 만들어.",
						"english": "They twist past memories and trap them in illusions. They make them suffer forever.",
						"japanese": "過去の記憶を歪め、幻影の中に閉じ込める。永遠に苦しませるんだ。",
						"chinese": "他们扭曲过去的记忆，并将他们困在幻象中。让他们永远受苦。",
						"french": "Ils tordent les souvenirs passés et les enferment dans des illusions. Ils les font souffrir pour l'éternité.",
						"spanish": "Retuercen los recuerdos pasados y los atrapan en ilusiones. Los hacen sufrir para siempre.",
						"vietnamese": "Họ bóp méo ký ức quá khứ và giam cầm họ trong ảo ảnh. Khiến họ đau khổ vĩnh viễn.",
						"thai": "พวกเขาบิดเบือนความทรงจำในอดีตและขังพวกเขาไว้ในภาพลวงตา ทำให้พวกเขาต้องทนทุกข์ตลอดไป",
						"hindi": "वे पिछली यादों को तोड़-मरोड़ देते हैं और उन्हें भ्रम में फंसा देते हैं। वे उन्हें हमेशा के लिए पीड़ित करते हैं।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "심판자의 결정은… 때론 불합리해 보여도… 결국 모두를 위한 길이라고 했어.",
						"english": "The Arbiter's decisions... though sometimes they seem unreasonable... are ultimately for the good of all, they said.",
						"japanese": "審判者の決定は…時に不合理に見えても…結局は皆のためになる道だと、言われた。",
						"chinese": "审判者的决定…虽然有时看起来不合理…但最终是为了所有人，他们说。",
						"french": "Les décisions de l'Arbitre... bien que parfois elles semblent déraisonnables... sont finalement pour le bien de tous, ont-ils dit.",
						"spanish": "Las decisiones del Arbitro... aunque a veces parezcan irrazonables... son, en última instancia, para el bien de todos, dijeron.",
						"vietnamese": "Quyết định của Kẻ phán xét... dù đôi khi có vẻ vô lý... nhưng cuối cùng là vì lợi ích của tất cả, họ nói.",
						"thai": "การตัดสินใจของผู้พิพากษา... แม้บางครั้งจะดูไม่สมเหตุสมผล... แต่ท้ายที่สุดแล้วก็เพื่อประโยชน์ของทุกคน พวกเขาว่าอย่างนั้น",
						"hindi": "निर्णायक के फैसले... भले ही कभी-कभी अनुचित लगें... अंततः सभी के भले के लिए होते हैं, उन्होंने कहा।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 정말 모두를 위한 길일까?",
						"english": "Is that truly for the good of all?",
						"japanese": "それが本当に皆のためになる道なのか？",
						"chinese": "这真的是为了所有人吗？",
						"french": "Est-ce vraiment pour le bien de tous ?",
						"spanish": "¿Es eso realmente para el bien de todos?",
						"vietnamese": "Đó có thực sự là con đường vì lợi ích của tất cả không?",
						"thai": "นั่นเป็นสิ่งที่ดีสำหรับทุกคนจริง ๆ หรือ?",
						"hindi": "क्या यह सचमुच सभी के भले के लिए है?"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "angry",
					"content": {
						"korean": "아니. 그건 강제된 순응일 뿐이야. 개인의 의지는… 중요하지 않아.",
						"english": "No. It's just forced obedience. Individual will... doesn't matter.",
						"japanese": "いいえ。それは強制された服従に過ぎない。個人の意志は…重要ではない。",
						"chinese": "不。那只是被强迫的顺从。个人的意志…并不重要。",
						"french": "Non. Ce n'est qu'une obéissance forcée. La volonté individuelle... n'a pas d'importance.",
						"spanish": "No. Es solo obediencia forzada. La voluntad individual... no importa.",
						"vietnamese": "Không. Đó chỉ là sự tuân phục bị ép buộc. Ý chí cá nhân... không quan trọng.",
						"thai": "ไม่ มันเป็นเพียงการยอมจำนนที่ถูกบังคับ เจตจำนงส่วนบุคคล... ไม่สำคัญ",
						"hindi": "नहीं। यह सिर्फ जबरन आज्ञाकारिता है। व्यक्तिगत इच्छा... मायने नहीं रखती।"
					}
				},
				{
					"content": {
						"korean": "당신도 그걸 따랐어?",
						"english": "Did you follow it too?",
						"japanese": "あなたもそれに従ったのか？",
						"chinese": "你也遵循了它吗？",
						"french": "Toi aussi, tu as suivi ?",
						"spanish": "¿Tú también lo seguiste?",
						"vietnamese": "Bạn cũng đã tuân theo điều đó sao?",
						"thai": "คุณก็ทำตามด้วยใช่ไหม?",
						"hindi": "क्या तुमने भी उसका पालन किया?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "어쩔 수 없었어. 살아남기 위해서… 하지만 후회해.",
						"english": "I had no choice. To survive... But I regret it.",
						"japanese": "仕方なかった。生き残るために…でも、後悔してる。",
						"chinese": "别无选择。为了生存……但我后悔了。",
						"french": "Je n'avais pas le choix. Pour survivre... Mais je le regrette.",
						"spanish": "No tuve elección. Para sobrevivir... Pero me arrepiento.",
						"vietnamese": "Tôi không còn lựa chọn nào khác. Để sống sót… Nhưng tôi hối hận.",
						"thai": "ไม่มีทางเลือก เพื่อความอยู่รอด... แต่ฉันเสียใจ",
						"hindi": "कोई चारा नहीं था। जीवित रहने के लिए... लेकिन मुझे अफ़सोस है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우린 그걸 멈출 거야.",
						"english": "We'll stop it.",
						"japanese": "私たちが止める。",
						"chinese": "我们会阻止它。",
						"french": "Nous allons l'arrêter.",
						"spanish": "Lo detendremos.",
						"vietnamese": "Chúng ta sẽ ngăn chặn nó.",
						"thai": "เราจะหยุดมัน",
						"hindi": "हम उसे रोकेंगे।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 이상은… 돌아갈 수 없어.",
						"english": "No more... No turning back.",
						"japanese": "もう…後戻りできない。",
						"chinese": "无法回头了……",
						"french": "Plus maintenant... Impossible de revenir en arrière.",
						"spanish": "Ya no más... No hay vuelta atrás.",
						"vietnamese": "Không thể… quay lại nữa.",
						"thai": "ไม่มีอีกแล้ว... กลับไม่ได้แล้ว",
						"hindi": "और नहीं... वापस नहीं जा सकते।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你说什么？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì?",
						"thai": "พูดอะไรน่ะ?",
						"hindi": "क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 길은 맹세를 거역한 자들의 절망이 겹쳐진 곳이야. 환영이… 더 강해지고 있어.",
						"english": "This path is where the despair of those who defied the oath converges. The illusions... are growing stronger.",
						"japanese": "この道は、誓いを破った者たちの絶望が重なり合う場所だ。幻影が…さらに強くなっている。",
						"chinese": "这条路是违背誓言之人绝望交织之地。幻象……变得更强了。",
						"french": "Ce chemin est l'endroit où le désespoir de ceux qui ont défié le serment se superpose. Les illusions... deviennent plus fortes.",
						"spanish": "Este camino es donde la desesperación de quienes desafiaron el juramento se superpone. Las ilusiones... se están haciendo más fuertes.",
						"vietnamese": "Con đường này là nơi nỗi tuyệt vọng của những kẻ bội thề chồng chất lên nhau. Ảo ảnh… đang mạnh hơn.",
						"thai": "เส้นทางนี้คือที่ที่ความสิ้นหวังของผู้ที่ฝ่าฝืนคำสาบานทับซ้อนกันอยู่ ภาพลวงตา... กำลังแข็งแกร่งขึ้น",
						"hindi": "यह मार्ग उन लोगों की निराशा का संगम है जिन्होंने शपथ का उल्लंघन किया। भ्रम... और प्रबल हो रहे हैं।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "우린 괜찮아.",
						"english": "We're fine.",
						"japanese": "私私たちは大丈夫だ。",
						"chinese": "我们没事。",
						"french": "On va bien.",
						"spanish": "Estamos bien.",
						"vietnamese": "Chúng ta ổn.",
						"thai": "เราไม่เป็นไร",
						"hindi": "हम ठीक हैं।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니. 이 공포는 너희 안에도 스며들 거야. 맹세의 본질이… 너희를 시험할 거야.",
						"english": "No. This terror will seep into you too. The essence of the oath... will test you.",
						"japanese": "いや。この恐怖は、お前たちの中にも忍び込むだろう。誓いの本質が…お前たちを試すだろう。",
						"chinese": "不。这种恐惧也会渗透到你们体内。誓言的本质……会考验你们。",
						"french": "Non. Cette terreur s'infiltrera aussi en vous. L'essence du serment... vous mettra à l'épreuve.",
						"spanish": "No. Este terror también se filtrará en vosotros. La esencia del juramento... os pondrá a prueba.",
						"vietnamese": "Không. Nỗi kinh hoàng này cũng sẽ thấm vào các ngươi. Bản chất của lời thề… sẽ thử thách các ngươi.",
						"thai": "ไม่ ความหวาดกลัวนี้จะซึมซับเข้าไปในตัวพวกเจ้าด้วย แก่นแท้ของคำสาบาน... จะทดสอบพวกเจ้า",
						"hindi": "नहीं। यह डर तुम्हारे अंदर भी समा जाएगा। शपथ का सार... तुम्हें परखेगा।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "우린 끝까지 갈 거야. 진실을 밝힐 때까지.",
						"english": "We'll go to the end. Until the truth is revealed.",
						"japanese": "私たちは最後まで行く。真実が明らかになるまで。",
						"chinese": "我们会走到最后。直到真相大白。",
						"french": "Nous irons jusqu'au bout. Jusqu'à ce que la vérité soit révélée.",
						"spanish": "Iremos hasta el final. Hasta que la verdad sea revelada.",
						"vietnamese": "Chúng ta sẽ đi đến cùng. Cho đến khi sự thật được tiết lộ.",
						"thai": "เราจะไปจนสุดทาง จนกว่าความจริงจะถูกเปิดเผย",
						"hindi": "हम अंत तक जाएंगे। जब तक सच सामने नहीं आता।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자에 의해 모든 것이 잠식되었다.",
						"english": "Everything was engulfed by the massive shadow.",
						"japanese": "全てが巨大な影に飲み込まれた。",
						"chinese": "一切都被巨大的阴影吞噬了。",
						"french": "Tout fut englouti par l'ombre gigantesque.",
						"spanish": "Todo fue engullido por la enorme sombra.",
						"vietnamese": "Mọi thứ đều bị bóng tối khổng lồ nuốt chửng.",
						"thai": "ทุกสิ่งถูกกลืนกินโดยเงาขนาดใหญ่",
						"hindi": "सब कुछ विशाल छाया ने निगल लिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹세를 거역한 자들의 운명이다. 순응하라.",
						"english": "This is the fate of those who defy the oath. Comply.",
						"japanese": "これは誓いを破りし者たちの運命だ。従え。",
						"chinese": "这是违誓者的命运。顺从吧。",
						"french": "Tel est le destin de ceux qui défient le serment. Obéissez.",
						"spanish": "Este es el destino de quienes desafían el juramento. Obedece.",
						"vietnamese": "Đây là số phận của kẻ dám chống lại lời thề. Hãy tuân theo.",
						"thai": "นี่คือชะตากรรมของผู้ที่ขัดขืนคำสาบาน จงคล้อยตาม",
						"hindi": "यह उन लोगों का भाग्य है जो शपथ का उल्लंघन करते हैं। अनुपालन करो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시… 이 맹세의 사슬을 끊을 것이다.",
						"english": "It's not over yet. I will surely… break these chains of oath.",
						"japanese": "まだ…終わってない。必ず…この誓いの鎖を断ち切る。",
						"chinese": "还没…结束。我必将…斩断这誓言的锁链。",
						"french": "Ce n'est pas encore fini. Je briserai sûrement… ces chaînes du serment.",
						"spanish": "Aún no ha terminado. Romperé sin duda… estas cadenas de juramento.",
						"vietnamese": "Chưa… kết thúc đâu. Ta nhất định… sẽ phá vỡ xiềng xích lời thề này.",
						"thai": "ยัง…ไม่จบแค่นี้แน่ ข้าจะ…ทำลายโซ่ตรวนแห่งคำสาบานนี้ให้ได้",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं निश्चित रूप से… इस शपथ की जंजीरों को तोड़ दूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "길의 끝. 거대한 그림자가 앞을 막아섰다. 정체 모를 자였다.",
						"english": "The end of the path. A colossal shadow blocked the way. It was an unknown entity.",
						"japanese": "道の終わり。巨大な影が道を阻んだ。正体不明の者だった。",
						"chinese": "道路的尽头。一道巨大的阴影挡住了去路。那是一个身份不明的家伙。",
						"french": "Le bout du chemin. Une ombre colossale bloquait le passage. C'était une entité inconnue.",
						"spanish": "El final del camino. Una sombra colosal bloqueó el paso. Era una entidad desconocida.",
						"vietnamese": "Cuối con đường. Một bóng đen khổng lồ chặn lối. Đó là một kẻ không rõ danh tính.",
						"thai": "สุดทางเดิน เงาร่างมหึมาขวางทางไว้ มันเป็นผู้ไม่ทราบตัวตน",
						"hindi": "मार्ग का अंत। एक विशाल छाया ने रास्ता रोक लिया। वह एक अज्ञात इकाई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 맹세를 거역한 대가를 치를 것이다.",
						"english": "Fools... You will pay the price for defying the oath.",
						"japanese": "愚か者ども…誓いを破った代償を払うことになるだろう。",
						"chinese": "愚蠢的家伙……你们将为违背誓言付出代价。",
						"french": "Imbéciles... Vous paierez le prix d'avoir défié le serment.",
						"spanish": "Necios... Pagaréis el precio por desafiar el juramento.",
						"vietnamese": "Lũ ngu ngốc… Các ngươi sẽ phải trả giá vì đã bội thề.",
						"thai": "พวกโง่... พวกเจ้าจะต้องชดใช้ในสิ่งที่ฝ่าฝืนคำสาบาน",
						"hindi": "मूर्खों... तुम्हें शपथ का उल्लंघन करने की कीमत चुकानी पड़ेगी।"
					}
				},
				{
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "도망쳐! 이자는… 맹세의 수호자… 거역할 수 없어!",
						"english": "Run! This one is... the Oathkeeper... We cannot defy!",
						"japanese": "逃げろ！こいつは…誓いの守護者…逆らえない！",
						"chinese": "快跑！他是…誓言的守护者…无法违抗！",
						"french": "Fuyez ! C'est... le Gardien du Serment... On ne peut pas le défier !",
						"spanish": "¡Huye! ¡Él es... el Guardián del Juramento... No podemos desobedecer!",
						"vietnamese": "Chạy đi! Hắn là… Kẻ Giữ Lời Thề… Không thể chống lại!",
						"thai": "หนีไป! นี่คือ...ผู้พิทักษ์คำสาบาน...ไม่อาจขัดขืนได้!",
						"hindi": "भागो! यह... शपथ का रखवाला है... हम विरोध नहीं कर सकते!"
					}
				},
				{
					"content": {
						"korean": "우린 도망치지 않아. 강제된 순응은 여기서 끝이야.",
						"english": "We won't run. Forced compliance ends here.",
						"japanese": "俺たちは逃げない。強制された服従はここで終わる。",
						"chinese": "我们不会逃跑。强制顺从到此为止。",
						"french": "Nous ne fuirons pas. L'obéissance forcée prend fin ici.",
						"spanish": "No huiremos. La sumisión forzada termina aquí.",
						"vietnamese": "Chúng ta sẽ không chạy trốn. Sự tuân thủ cưỡng bức kết thúc tại đây.",
						"thai": "เราจะไม่หนี การบังคับให้คล้อยตามสิ้นสุดลงที่นี่",
						"hindi": "हम भागेंगे नहीं। जबरन अनुपालन यहीं समाप्त होता है।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "후회할 것이다.",
						"english": "You will regret this.",
						"japanese": "後悔するだろう。",
						"chinese": "你会后悔的。",
						"french": "Tu le regretteras.",
						"spanish": "Lo lamentarás.",
						"vietnamese": "Ngươi sẽ hối hận.",
						"thai": "เจ้าจะต้องเสียใจ",
						"hindi": "तुम्हें पछताना पड़ेगा।"
					},
					"emotion": "base"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "lin"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 서서히 사라졌다. 맹세를 어긴 자의 절규만 남았다.",
						"english": "The massive shadow slowly vanished. Only the screams of the oathbreaker remained.",
						"japanese": "巨大な影がゆっくりと消え去った。誓いを破りし者の絶叫だけが残された。",
						"chinese": "巨大的阴影渐渐消失。只剩下违誓者的尖叫。",
						"french": "L'ombre gigantesque s'estompa lentement. Seuls les cris du parjure demeuraient.",
						"spanish": "La enorme sombra se desvaneció lentamente. Solo quedaron los gritos del rompe juramentos.",
						"vietnamese": "Bóng tối khổng lồ dần biến mất. Chỉ còn lại tiếng kêu gào của kẻ phá lời thề.",
						"thai": "เงาขนาดใหญ่ค่อยๆ หายไป เหลือเพียงเสียงกรีดร้องของผู้ละเมิดคำสาบาน",
						"hindi": "विशाल छाया धीरे-धीरे गायब हो गई। केवल शपथ तोड़ने वाले की चीखें रह गईं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "끝이 아니다… 심판자의 율법은… 영원하다….",
						"english": "It's not over... The Judge's law is... eternal....",
						"japanese": "終わりではない…裁定者の律法は…永遠だ…。",
						"chinese": "这不是结束…审判者的法则…永恒不灭…。",
						"french": "Ce n'est pas la fin... La loi du Juge est... éternelle...",
						"spanish": "No es el final... La ley del Juez es... eterna....",
						"vietnamese": "Chưa kết thúc đâu… Luật của Kẻ Phán Xét là… vĩnh cửu….",
						"thai": "ยังไม่จบ...กฎของผู้ตัดสิน...เป็นนิรันดร์...",
						"hindi": "यह अंत नहीं है... न्यायकर्ता का कानून... शाश्वत है...."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니, 이제 시작이야. 모든 것이 허무였다는 걸 밝혀낼 거야.",
						"english": "No, it's just the beginning. I'll reveal that everything was in vain.",
						"japanese": "いや、ここからが始まりだ。全てが無意味だったことを暴いてやる。",
						"chinese": "不，这只是开始。我会揭露一切都只是虚无。",
						"french": "Non, ce n'est que le début. Je vais révéler que tout n'était que vanité.",
						"spanish": "No, es solo el principio. Revelaré que todo fue en vano.",
						"vietnamese": "Không, đây mới chỉ là khởi đầu. Ta sẽ tiết lộ rằng mọi thứ đều vô nghĩa.",
						"thai": "ไม่ นี่เป็นเพียงจุดเริ่มต้น ฉันจะเปิดเผยว่าทุกสิ่งไร้ค่า",
						"hindi": "नहीं, यह तो बस शुरुआत है। मैं दिखाऊंगा कि सब कुछ व्यर्थ था।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "고마워… 이제… 내 맹세도… 풀릴 수 있을까.",
						"english": "Thank you... Now... can my oath also... be broken?",
						"japanese": "ありがとう…これで…私の誓いも…解かれるだろうか。",
						"chinese": "谢谢…现在…我的誓言…也能解除了吗？",
						"french": "Merci... Maintenant... mon serment peut-il aussi... être brisé ?",
						"spanish": "Gracias... Ahora... ¿mi juramento también... podrá romperse?",
						"vietnamese": "Cảm ơn… Giờ đây… lời thề của ta… cũng có thể được giải thoát chăng.",
						"thai": "ขอบคุณ...ตอนนี้...คำสาบานของฉัน...จะถูกคลายได้ไหม",
						"hindi": "धन्यवाद... अब... क्या मेरी शपथ भी... टूट सकती है?"
					},
					"emotion": "happy",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강제된 순응의 고리가 끊어졌다. 그러나 더 거대한 진실이 어둠 속에서 기다리고 있었다.",
						"english": "The chain of forced compliance was broken. But a greater truth awaited in the darkness.",
						"japanese": "強制された服従の輪は断ち切られた。しかし、より巨大な真実が闇の中で待っていた。",
						"chinese": "强制顺从的枷锁被打破了。然而，一个更宏大的真相在黑暗中等待着。",
						"french": "La chaîne de l'obéissance forcée était brisée. Mais une vérité plus grande attendait dans les ténèbres.",
						"spanish": "La cadena de la sumisión forzada se rompió. Pero una verdad aún mayor esperaba en la oscuridad.",
						"vietnamese": "Vòng xích của sự tuân thủ cưỡng bức đã bị phá vỡ. Nhưng một sự thật lớn hơn đang chờ đợi trong bóng tối.",
						"thai": "พันธนาการของการบังคับให้คล้อยตามถูกทำลายลงแล้ว แต่ความจริงที่ยิ่งใหญ่กว่ากำลังรออยู่ในความมืด",
						"hindi": "जबरन अनुपालन की श्रृंखला टूट गई। लेकिन अंधेरे में एक बड़ी सच्चाई इंतजार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
