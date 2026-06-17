export const scenario_snowy_haraldr_20_02 = {
	"scenario_id": "snowy_haraldr_20_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
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
					"type": "speech",
					"content": {
						"korean": "전사의 허울이 벗겨지고, 거대한 빙수 괴물의 형체가 드러났다. 달콤한 비린내가 진동했다.",
						"english": "The warrior's facade peeled away, revealing the form of a giant shaved ice monster. A sweet, fishy stench permeated the air.",
						"japanese": "戦士の仮面が剥がれ落ち、巨大なかき氷怪物の姿が現れた。甘く生臭い匂いが立ち込めた。",
						"chinese": "战士的外壳剥落，露出巨型刨冰怪物的形态。甜腻的腥味弥漫开来。",
						"french": "Le masque du guerrier se décolla, révélant la forme d'un monstre géant de glace pilée. Une odeur douceâtre et poissonneuse imprégna l'air.",
						"spanish": "La fachada del guerrero se desprendió, revelando la forma de un monstruo gigante de hielo raspado. Un hedor dulce y a pescado impregnó el aire.",
						"vietnamese": "Vỏ bọc của chiến binh bong ra, lộ diện hình dạng của một quái vật đá bào khổng lồ. Một mùi tanh ngọt ngào lan tỏa trong không khí.",
						"thai": "หน้ากากของนักรบหลุดออก เผยให้เห็นร่างของสัตว์ประหลาดน้ำแข็งไสขนาดยักษ์ กลิ่นคาวหวานอบอวลไปทั่ว",
						"hindi": "योद्धा का मुखौटा उतर गया, एक विशाल बर्फ के दानव का रूप सामने आया। हवा में एक मीठी, मछली जैसी दुर्गंध फैल गई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "전부… 공짜로 시식시켜주마!",
						"english": "All of it... I'll let you taste for free!",
						"japanese": "全部…無料で試食させてやる！",
						"chinese": "所有的一切…我都会让你们免费品尝！",
						"french": "Tout ça... Je vous le ferai goûter gratuitement !",
						"spanish": "Todo... ¡Te dejaré probarlo gratis!",
						"vietnamese": "Tất cả… ta sẽ cho các ngươi nếm thử miễn phí!",
						"thai": "ทั้งหมด... ข้าจะให้เจ้าชิมฟรี!",
						"hindi": "सब कुछ... मैं तुम्हें मुफ्त में चखने दूँगा!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저게… {random_boss}라고?",
						"english": "Is that... {random_boss}?",
						"japanese": "あれが… {random_boss}だと？",
						"chinese": "那是… {random_boss}？",
						"french": "C'est ça... {random_boss} ?",
						"spanish": "¿Eso es... {random_boss}?",
						"vietnamese": "Đó là… {random_boss} ư?",
						"thai": "นั่น... {random_boss} หรือ?",
						"hindi": "क्या वह... {random_boss} है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "안 돼! 그를 자극하면 안 돼!",
						"english": "No! Don't provoke him!",
						"japanese": "駄目だ！彼を刺激するな！",
						"chinese": "不！别刺激他！",
						"french": "Non ! Ne le provoque pas !",
						"spanish": "¡No! ¡No lo provoques!",
						"vietnamese": "Không! Đừng chọc giận hắn!",
						"thai": "ไม่นะ! อย่าไปยั่วโมโหเขา!",
						"hindi": "नहीं! उसे भड़काओ मत!"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "브란! 대체 무슨 일이야!",
						"english": "Bran! What in the world is happening!",
						"japanese": "ブラン！一体どうしたんだ！",
						"chinese": "布兰！到底发生什么事了！",
						"french": "Bran ! Que se passe-t-il bon sang !",
						"spanish": "¡Bran! ¡¿Qué demonios está pasando?!",
						"vietnamese": "Bran! Chuyện gì đang xảy ra vậy!",
						"thai": "แบรน! เกิดอะไรขึ้นเนี่ย!",
						"hindi": "ब्रैन! ये सब क्या हो रहा है!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "설원은 끈적한 시럽으로 뒤덮였다. 괴물의 광기가 땅마저 물들였다.",
						"english": "The snowy field was covered in sticky syrup. The monster's madness even stained the ground.",
						"japanese": "雪原はねっとりとしたシロップで覆われた。怪物の狂気が大地までも染め上げた。",
						"chinese": "雪原被粘稠的糖浆覆盖。怪物的疯狂甚至染红了大地。",
						"french": "Le champ de neige fut recouvert d'un sirop collant. La folie du monstre macula même le sol.",
						"spanish": "El campo nevado estaba cubierto de jarabe pegajoso. La locura del monstruo incluso manchó el suelo.",
						"vietnamese": "Cánh đồng tuyết bị bao phủ bởi xi-rô dính. Sự điên rồ của quái vật thậm chí còn nhuộm màu cả mặt đất.",
						"thai": "ทุ่งหิมะถูกปกคลุมไปด้วยน้ำเชื่อมเหนียว ความบ้าคลั่งของสัตว์ประหลาดยังเปื้อนพื้นดิน",
						"hindi": "बर्फीला मैदान चिपचिपे सिरप से ढका हुआ था। राक्षस के पागलपन ने ज़मीन को भी दागदार कर दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내 새로운 프랜차이즈… 맛보아라!",
						"english": "My new franchise... taste it!",
						"japanese": "我が新しきフランチャイズ… 味わえ！",
						"chinese": "我的新品牌，尝尝鲜！",
						"french": "Ma nouvelle franchise... goûtez-la !",
						"spanish": "Mi nueva franquicia... ¡Pruébala!",
						"vietnamese": "Thương hiệu mới của ta… nếm thử đi!",
						"thai": "แฟรนไชส์ใหม่ของข้า... ลองลิ้มรสดูสิ!",
						"hindi": "मेरी नई फ्रेंचाइजी... इसका स्वाद चखो!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "피해! 시럽에 닿으면 위험해!",
						"english": "Dodge! The syrup is dangerous!",
						"japanese": "避けろ！シロップに触れると危険だ！",
						"chinese": "躲开！碰到糖浆会很危险！",
						"french": "Esquivez ! Le sirop est dangereux !",
						"spanish": "¡Esquiva! ¡Tocar el jarabe es peligroso!",
						"vietnamese": "Tránh ra! Chạm vào si-rô nguy hiểm đấy!",
						"thai": "หลบไป! โดนน้ำเชื่อมเป็นอันตราย!",
						"hindi": "बचो! सिरप छूना खतरनाक है!"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "이것은… 고대의 기록에 있던 변모와 비슷해.",
						"english": "This is... similar to the transformations in ancient records.",
						"japanese": "これは… 古代の記録にあった変貌に似ている。",
						"chinese": "这… 类似于古代记录中的变异。",
						"french": "C'est... similaire aux transformations des anciens écrits.",
						"spanish": "Esto es... similar a las transformaciones de los registros antiguos.",
						"vietnamese": "Cái này… giống với những biến đổi trong ghi chép cổ đại.",
						"thai": "นี่มัน... คล้ายกับการเปลี่ยนแปลงที่อยู่ในบันทึกโบราณเลย",
						"hindi": "यह... प्राचीन अभिलेखों में वर्णित परिवर्तन जैसा है।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "기록? 저게 뭔데?",
						"english": "Records? What's that?",
						"japanese": "記録？それ、何だ？",
						"chinese": "记录？那是什么？",
						"french": "Des écrits ? Qu'est-ce que c'est ?",
						"spanish": "¿Registros? ¿Qué son?",
						"vietnamese": "Ghi chép? Cái đó là cái gì?",
						"thai": "บันทึกเหรอ? นั่นมันอะไรน่ะ?",
						"hindi": "अभिलेख? वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "욕망이 극한에 달하면… 몸이 뒤틀린다. 특히 이런 식으로.",
						"english": "When desire reaches its peak... the body distorts. Especially like this.",
						"japanese": "欲望が極限に達すると… 体が歪む。特にこのように。",
						"chinese": "当欲望达到极致… 身体就会扭曲。特别是这样。",
						"french": "Quand le désir atteint son paroxysme... le corps se tord. Surtout de cette manière.",
						"spanish": "Cuando el deseo llega a su límite... el cuerpo se retuerce. Especialmente así.",
						"vietnamese": "Khi dục vọng đạt đến cực hạn… cơ thể sẽ biến dạng. Đặc biệt là thế này.",
						"thai": "เมื่อความปรารถนาถึงขีดสุด... ร่างกายจะบิดเบี้ยว โดยเฉพาะอย่างนี้",
						"hindi": "जब वासना चरम पर पहुँचती है... शरीर विकृत हो जाता है। खासकर इस तरह।"
					},
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "괴물의 팔에서 끈적한 시럽 덩어리가 튀어나와 사방에 흩뿌려졌다. 마치 스스로를 해체하는 듯했다.",
						"english": "Sticky lumps of syrup burst from the monster's arm, scattering everywhere. It was as if it was dismantling itself.",
						"japanese": "怪物の腕から粘着質なシロップの塊が飛び出し、四方に飛び散った。まるで自らを解体するかのようだった。",
						"chinese": "粘稠的糖浆块从怪物的手臂中喷出，四处飞溅。它仿佛在自我分解。",
						"french": "Des grumeaux de sirop collant jaillirent du bras du monstre, se dispersant partout. C'était comme s'il se démantelait lui-même.",
						"spanish": "Pegajosos trozos de jarabe brotaron del brazo del monstruo, esparciéndose por todas partes. Era como si se estuviera desmantelando a sí mismo.",
						"vietnamese": "Những khối si-rô dính nhớp nháp bắn ra từ cánh tay của quái vật, văng tung tóe khắp nơi. Cứ như thể nó đang tự phân hủy.",
						"thai": "ก้อนน้ำเชื่อมเหนียวหนืดพุ่งออกมาจากแขนของสัตว์ประหลาด กระจายไปทั่วราวกับว่ามันกำลังสลายตัวเอง",
						"hindi": "राक्षस की भुजा से चिपचिपी सिरप की गांठे निकलीं और चारों ओर बिखर गईं। मानो वह खुद को नष्ट कर रहा हो।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어차피… 썩어 없어질 몸… 이걸로… 즐겨라!",
						"english": "This body will rot away eventually... so enjoy this!",
						"japanese": "どうせ… 朽ち果てる体… これで… 楽しめ！",
						"chinese": "反正… 这具身体终将腐朽… 用它… 尽情享受吧！",
						"french": "De toute façon... ce corps pourrira... alors profitez-en !",
						"spanish": "De todos modos... este cuerpo se pudrirá... ¡así que disfruta de esto!",
						"vietnamese": "Dù sao thì… cơ thể này cũng sẽ mục rữa… cứ thế này… tận hưởng đi!",
						"thai": "ยังไงซะ... ร่างกายนี้ก็ต้องเน่าเปื่อยอยู่แล้ว... ด้วยสิ่งนี้... จงสนุกไปกับมัน!",
						"hindi": "वैसे भी... यह शरीर सड़ जाएगा... तो इसका आनंद लो!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "스스로 팔을 뜯어낸다고? 미쳤어!",
						"english": "Tearing off its own arm? Insane!",
						"japanese": "自分で腕をもぎ取るだと？正気か！",
						"chinese": "自己撕下手臂？疯了吧！",
						"french": "Il s'arrache le bras ? C'est fou !",
						"spanish": "¿Se arranca el brazo? ¡Está loco!",
						"vietnamese": "Tự xé cánh tay ra ư? Điên rồi!",
						"thai": "ฉีกแขนตัวเองเหรอ? บ้าไปแล้ว!",
						"hindi": "अपनी भुजा खुद फाड़ रहा है? पागलपन!"
					},
					"emotion": "angry",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그의 허풍과 초라한 모습은… 모두 이 변모를 위한 것이었나?",
						"english": "Were his bluster and pathetic appearance... all for this transformation?",
						"japanese": "彼の虚勢と見窄らしい姿は… 全てこの変貌のためだったのか？",
						"chinese": "他的虚张声势和落魄模样… 都是为了这次变异吗？",
						"french": "Son bluff et son apparence minable... étaient-ils tous pour cette transformation ?",
						"spanish": "¿Su fanfarronería y su apariencia lamentable... eran todo para esta transformación?",
						"vietnamese": "Sự khoác lác và vẻ ngoài tiều tụy của hắn… tất cả là vì sự biến đổi này ư?",
						"thai": "คำคุยโวและรูปลักษณ์ที่น่าสมเพชของเขา... ทั้งหมดนี้เป็นไปเพื่อการเปลี่ยนแปลงนี้หรือ?",
						"hindi": "क्या उसका दिखावा और दयनीय रूप... सब इस परिवर्तन के लिए था?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야, 브란?",
						"english": "What do you mean, Bran?",
						"japanese": "どういうことだ、ブラン？",
						"chinese": "什么意思，布兰？",
						"french": "Que veux-tu dire, Bran ?",
						"spanish": "¿Qué quieres decir, Bran?",
						"vietnamese": "Ý anh là gì, Bran?",
						"thai": "นายหมายความว่าอะไร บราน?",
						"hindi": "तुम्हारा क्या मतलब है, ब्रैन?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그는 '위대한 전사'라는 허울 뒤에… 이 광기를 숨기고 있었던 거야. 이 시럽… 그의 본질인가?",
						"english": "Behind the facade of a \"great warrior\"... he was hiding this madness. This syrup... is it his true nature?",
						"japanese": "「偉大な戦士」という虚像の裏で…こいつは、この狂気を隠していたのか。このシロップ…こいつの本質なのか？",
						"chinese": "他在“伟大战士”的虚名之下…隐藏着这份疯狂。这糖浆…是他的本质吗？",
						"french": "Derrière le masque du \"grand guerrier\"... il cachait cette folie. Ce sirop... est-il sa vraie nature ?",
						"spanish": "Detrás de la fachada de un \"gran guerrero\"... escondía esta locura. Este sirope... ¿es su verdadera esencia?",
						"vietnamese": "Đằng sau vỏ bọc \"chiến binh vĩ đại\"... hắn đã che giấu sự điên loạn này. Lớp si-rô này... là bản chất của hắn ư?",
						"thai": "เบื้องหลังฉากหน้าของ \"นักรบผู้ยิ่งใหญ่\"... เขากำลังซ่อนความบ้าคลั่งนี้ไว้ ไซรัปนี่... คือแก่นแท้ของเขาหรือ?",
						"hindi": "महान योद्धा\" के मुखौटे के पीछे... वह इस पागलपन को छिपा रहा था। यह सिरप... क्या यह उसका असली स्वरूप है?"
					},
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사방에서 시럽 괴물이 솟아났다. 더 이상 물러설 곳은 없었다.",
						"english": "Syrup monsters surged from all sides. There was nowhere left to retreat.",
						"japanese": "四方八方からシロップの怪物が湧き出した。もはや退路はなかった。",
						"chinese": "糖浆怪物从四面八方涌出。已无路可退。",
						"french": "Des monstres de sirop surgirent de toutes parts. Il n'y avait plus nulle part où reculer.",
						"spanish": "Monstruos de sirope surgieron por todas partes. Ya no quedaba ningún lugar para retroceder.",
						"vietnamese": "Quái vật si-rô trỗi dậy khắp nơi. Không còn đường lùi nữa.",
						"thai": "สัตว์ประหลาดน้ำเชื่อมผุดขึ้นจากทุกทิศทาง ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "हर तरफ से सिरप राक्षस उमड़ पड़े। पीछे हटने की कोई जगह नहीं बची थी।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "모두… 내 프랜차이즈의… 영원한 고객이 될지어다!",
						"english": "All of you... shall become... eternal customers... of my franchise!",
						"japanese": "全て…私のフランチャイズの…永遠の顧客となるのだ！",
						"chinese": "所有人…都将成为…我的连锁店的…永远的顾客！",
						"french": "Vous tous... deviendrez... les clients éternels... de ma franchise !",
						"spanish": "¡Todos vosotros... seréis... clientes eternos... de mi franquicia!",
						"vietnamese": "Tất cả các ngươi... sẽ trở thành... khách hàng vĩnh viễn... của nhượng quyền thương mại của ta!",
						"thai": "พวกเจ้าทั้งหมด... จงเป็น... ลูกค้านิรันดร์... ของแฟรนไชส์ของข้า!",
						"hindi": "तुम सब... मेरे फ्रैंचाइज़ी के... शाश्वत ग्राहक बनोगे!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "여기서 끝내야 해! 더 이상은 안 돼!",
						"english": "We have to end it here! No more!",
						"japanese": "ここで終わらせるんだ！これ以上はだめだ！",
						"chinese": "必须在这里结束！不能再这样下去了！",
						"french": "Il faut en finir ici ! Pas un pas de plus !",
						"spanish": "¡Tenemos que acabar con esto aquí! ¡No más!",
						"vietnamese": "Phải kết thúc ở đây thôi! Không thể chịu đựng thêm nữa!",
						"thai": "ต้องจบเรื่องที่นี่! ไม่ได้อีกแล้ว!",
						"hindi": "इसे यहीं खत्म करना होगा! और नहीं!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						1,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "그의 욕망은 끝이 없다… 하지만 모든 욕망에는… 반대편이 있는 법.",
						"english": "His desires are endless... but every desire has... an opposite side.",
						"japanese": "こいつの欲望は尽きない…だが、どんな欲望にも…裏があるものだ。",
						"chinese": "他的欲望无穷无尽…但所有欲望…都有其对立面。",
						"french": "Ses désirs sont infinis... mais chaque désir a... son revers.",
						"spanish": "Sus deseos son infinitos... pero todo deseo tiene... un lado opuesto.",
						"vietnamese": "Ham muốn của hắn là vô tận... nhưng mọi ham muốn đều có... một mặt đối lập.",
						"thai": "ความปรารถนาของเขาไม่มีที่สิ้นสุด... แต่ทุกความปรารถนา... ก็มีด้านตรงข้ามเสมอ",
						"hindi": "उसकी इच्छाएँ अनंत हैं... लेकिन हर इच्छा का... एक विपरीत पक्ष होता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "약점이 있다는 거야?",
						"english": "You mean... he has a weakness?",
						"japanese": "弱点があるってことか？",
						"chinese": "意思是说…他有弱点？",
						"french": "Tu veux dire... qu'il a une faiblesse ?",
						"spanish": "¿Quieres decir... que tiene una debilidad?",
						"vietnamese": "Ý ngươi là... hắn có điểm yếu?",
						"thai": "หมายความว่า... เขามีจุดอ่อนเหรอ?",
						"hindi": "क्या तुम्हारा मतलब है... उसकी कोई कमजोरी है?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "고대의 기록에는… '광기에 굴복한 자는… 가장 소중했던 것을 잊는다'고 했어.",
						"english": "Ancient records say... 'He who succumbs to madness... forgets what was most precious.'",
						"japanese": "古代の記録には…「狂気に屈した者は…最も大切なものを忘れる」とあった。",
						"chinese": "古代记录记载…“屈服于疯狂之人…会遗忘最珍贵之物。”",
						"french": "Les anciens écrits disent... \"Celui qui succombe à la folie... oublie ce qui lui était le plus précieux.\"",
						"spanish": "Los registros antiguos dicen... \"Aquel que sucumbe a la locura... olvida lo que más valoraba.\"",
						"vietnamese": "Sách cổ ghi rằng... 'Kẻ khuất phục trước sự điên loạn... sẽ quên đi điều quý giá nhất.'",
						"thai": "บันทึกโบราณกล่าวไว้ว่า... 'ผู้ที่ยอมจำนนต่อความบ้าคลั่ง... จะลืมสิ่งที่ล้ำค่าที่สุด'",
						"hindi": "प्राचीन अभिलेखों में कहा गया है... 'जो पागलपन के आगे झुकता है... वह सबसे अनमोल चीज़ भूल जाता है।'"
					},
					"type": "speech",
					"speaker": "bran"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙수 괴물이 포효했다. 달콤한 향은 이제 역겨운 악취가 되었다.",
						"english": "The gigantic bingsu monster roared. The sweet scent had now become a repulsive stench.",
						"japanese": "巨大なかき氷の怪物が咆哮した。甘い香りは今や吐き気を催す悪臭へと変わっていた。",
						"chinese": "巨大的刨冰怪物咆哮着。甜美的香气如今变成了令人作呕的恶臭。",
						"french": "L'énorme monstre bingsu rugit. Le doux parfum était devenu une puanteur répugnante.",
						"spanish": "El gigantesco monstruo de bingsu rugió. El dulce aroma se había convertido en un hedor repulsivo.",
						"vietnamese": "Quái vật bingsu khổng lồ gầm thét. Mùi hương ngọt ngào giờ đã biến thành mùi hôi thối kinh tởm.",
						"thai": "สัตว์ประหลาดบิงซูขนาดยักษ์คำราม กลิ่นหอมหวานกลายเป็นกลิ่นเหม็นน่ารังเกียจ",
						"hindi": "विशाल बिंगसू राक्षस दहाड़ा। मीठी सुगंध अब घिनौनी बदबू में बदल गई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 프랜차이즈는… 영원하리라! 너희도… 일부가 돼라!",
						"english": "My franchise... shall be eternal! You, too... shall become a part of it!",
						"japanese": "私のフランチャイズは…永遠なり！お前たちも…一部となれ！",
						"chinese": "我的连锁店…将永垂不朽！你们也…成为其中一部分吧！",
						"french": "Ma franchise... sera éternelle ! Vous aussi... en ferez partie !",
						"spanish": "¡Mi franquicia... será eterna! ¡Vosotros también... os convertiréis en parte de ella!",
						"vietnamese": "Nhượng quyền thương mại của ta... sẽ là vĩnh cửu! Các ngươi cũng... hãy trở thành một phần của nó!",
						"thai": "แฟรนไชส์ของข้า... จะคงอยู่ชั่วนิรันดร์! พวกเจ้าก็... จงเป็นส่วนหนึ่งด้วย!",
						"hindi": "मेरी फ्रैंचाइज़ी... शाश्वत रहेगी! तुम भी... इसका हिस्सा बनो!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 네 광기는 여기서 끝이다!",
						"english": "Shut up! Your madness ends here!",
						"japanese": "黙れ！お前の狂気はここで終わりだ！",
						"chinese": "住口！你的疯狂到此为止！",
						"french": "Tais-toi ! Ta folie prend fin ici !",
						"spanish": "¡Cállate! ¡Tu locura termina aquí!",
						"vietnamese": "Im đi! Sự điên loạn của ngươi kết thúc tại đây!",
						"thai": "หุบปาก! ความบ้าคลั่งของแกจะจบลงที่นี่!",
						"hindi": "चुप रहो! तुम्हारा पागलपन यहीं खत्म होता है!"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "끈적한 시럽이 탐험대를 집어삼켰다. 달콤한 지옥이 펼쳐졌다.",
						"english": "Sticky syrup swallowed the expedition team. A sweet hell unfolded.",
						"japanese": "べたつくシロップが探検隊を飲み込んだ。甘い地獄が広がった。",
						"chinese": "粘稠的糖浆吞噬了探险队。一个甜蜜的地狱展开了。",
						"french": "Un sirop collant a englouti l'équipe d'exploration. Un enfer doux s'est déroulé.",
						"spanish": "Un jarabe pegajoso devoró al equipo de expedición. Un dulce infierno se desató.",
						"vietnamese": "Si-rô dính dáp đã nuốt chửng đội thám hiểm. Một địa ngục ngọt ngào đã mở ra.",
						"thai": "น้ำเชื่อมเหนียวเหนอะกลืนกินทีมสำรวจไปแล้ว นรกหวานกำลังแผ่ขยาย",
						"hindi": "चिपचिपा सिरप ने अभियान दल को निगल लिया। एक मीठा नर्क खुल गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "이봐… 손님… 아직… 맛도 못 봤잖아?",
						"english": "Hey... guest... you haven't... even tasted it yet, have you?",
						"japanese": "おい…お客さん…まだ…味も見てないだろ？",
						"chinese": "嘿…客人…还没…尝到味道呢，是吧？",
						"french": "Hé… client… vous n'avez… même pas encore goûté, n'est-ce pas ?",
						"spanish": "Oye... invitado... ni siquiera... lo has probado aún, ¿verdad?",
						"vietnamese": "Này... khách... còn... chưa nếm thử mà?",
						"thai": "นี่... แขก... ยัง... ไม่ทันได้ชิมเลยไม่ใช่เหรอ?",
						"hindi": "अरे… मेहमान… तुमने… अभी तक चखा भी नहीं है ना?"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn... it's not... over yet!",
						"japanese": "くそっ…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Bon sang... ce n'est... pas encore fini !",
						"spanish": "Maldita sea... ¡aún... no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn... chưa kết thúc!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ!",
						"hindi": "धिक्कार है… अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 빙수 괴물이 녹아내렸다. 끈적한 시럽 웅덩이가 스며들었다.",
						"english": "The colossal Bingsu monster melted. A sticky pool of syrup seeped into the ground.",
						"japanese": "巨大なかき氷の怪物が溶け落ちた。べたつくシロップの沼が染み込んだ。",
						"chinese": "巨大的刨冰怪物融化了。粘稠的糖浆渗入地面。",
						"french": "Le monstre géant de bingsu a fondu. Une flaque de sirop collant s'est répandue.",
						"spanish": "El colosal monstruo de bingsu se derritió. Un pegajoso charco de sirope se filtró.",
						"vietnamese": "Quái vật Bingsu khổng lồ tan chảy. Một vũng si-rô dính dáp thấm xuống.",
						"thai": "สัตว์ประหลาดบิงซูยักษ์ละลายลงไปแล้ว แอ่งน้ำเชื่อมเหนียวเหนอะซึมซาบลงไป",
						"hindi": "विशाल बिंगसू राक्षस पिघल गया। एक चिपचिपा सिरप का तालाब रिस गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 아직… 멀었어… 진짜… 맛은… 이제부터야…",
						"english": "Heh heh... not... over yet... The real... taste... begins now...",
						"japanese": "クク…まだ…終わってない…本当の…味は…これからだ…",
						"chinese": "呵呵…还没…结束…真正的…味道…现在才…开始…",
						"french": "Huhu... pas... encore... Le vrai... goût... commence... maintenant...",
						"spanish": "Je je... todavía... no... El verdadero... sabor... empieza... ahora...",
						"vietnamese": "Khà khà... chưa... xong đâu... Hương vị... thật sự... bây giờ... mới bắt đầu...",
						"thai": "คิกๆ... ยัง... ไม่จบ... รสชาติ... ที่แท้จริง... เพิ่งจะ... เริ่มต้น...",
						"hindi": "ही ही… अभी… नहीं… असली… स्वाद… अब… शुरू… होगा…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini...?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Xong rồi sao...?",
						"thai": "จบแล้วเหรอ...?",
						"hindi": "क्या यह खत्म हो गया…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "아니. 이 변모는… 시작에 불과해. 그의 욕망이… 아직 남아있어.",
						"english": "No. This transformation... is just the beginning. His desire... still remains.",
						"japanese": "いいえ。この変貌は…始まりに過ぎない。彼の欲望が…まだ残っている。",
						"chinese": "不。这种转变…只是开始。他的欲望…依然存在。",
						"french": "Non. Cette transformation... n'est qu'un début. Son désir... demeure toujours.",
						"spanish": "No. Esta transformación... es solo el principio. Su deseo... aún permanece.",
						"vietnamese": "Không. Sự biến đổi này... chỉ là khởi đầu. Khao khát của hắn... vẫn còn đó.",
						"thai": "ไม่สิ การเปลี่ยนแปลงนี้... เป็นแค่จุดเริ่มต้น ความปรารถนาของเขา... ยังคงอยู่",
						"hindi": "नहीं। यह परिवर्तन… बस शुरुआत है। उसकी इच्छा… अभी भी बाकी है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "괴물은 쓰러졌지만, 설원의 광기는 가라앉지 않았다. 더 깊은 곳에서, 더 끈적한 것이 기다리는 듯했다.",
						"english": "The monster fell, but the snowfield's frenzy didn't subside. Something stickier seemed to await in the deeper depths.",
						"japanese": "怪物は倒れたが、雪原の狂気は収まらなかった。より深い場所で、さらにべたつくものが待ち受けているようだった。",
						"chinese": "怪物倒下了，但雪原的疯狂并未平息。在更深的地方，似乎有更粘稠的东西在等待。",
						"french": "Le monstre est tombé, mais la folie du champ de neige ne s'est pas apaisée. Quelque chose de plus collant semblait attendre dans les profondeurs.",
						"spanish": "El monstruo cayó, pero la locura del campo de nieve no disminuyó. Algo más pegajoso parecía esperar en las profundidades.",
						"vietnamese": "Quái vật đã ngã xuống, nhưng sự điên loạn của cánh đồng tuyết không lắng xuống. Dường như có thứ gì đó dính dáp hơn đang chờ đợi ở nơi sâu hơn.",
						"thai": "สัตว์ประหลาดล้มลง แต่ความบ้าคลั่งของทุ่งหิมะยังไม่สงบลง ราวกับมีบางสิ่งที่เหนียวกว่ากำลังรอคอยอยู่ในส่วนลึก",
						"hindi": "राक्षस गिर गया, लेकिन बर्फीले मैदान का पागलपन शांत नहीं हुआ। गहराइयों में कुछ और चिपचिपा इंतजार कर रहा था।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"초라한 상인의 가면은 산산조각났다.",
			"끈적한 시럽이 끓어오르며, 하랄드르는 새로운 형태로 재탄생했다.",
			"온몸을 뒤덮은 색색깔의 광기. 이제 그는 모든 것을 '시식'하려 한다.",
			"탐험대는 경악했지만, 물러설 곳은 없었다."
		],
		"english": [
			"The humble merchant's mask shattered.",
			"Sticky syrup boiled, and Haraldr was reborn in a new form.",
			"A colorful madness enveloped his entire body. Now, he intends to 'taste' everything.",
			"The expedition team was horrified, but there was nowhere to retreat."
		],
		"japanese": [
			"みすぼらしい商人の仮面は粉々に砕け散った。",
			"ねっとりとしたシロップが煮えたぎり、ハラルドルは新たな姿で生まれ変わった。",
			"全身を覆う色とりどりの狂気。今、彼はすべてを「試食」しようとしている。",
			"探検隊は驚愕したが、退路はなかった。"
		],
		"chinese": [
			"卑微商人的面具支离破碎。",
			"粘稠的糖浆沸腾，哈拉尔德以新形态重生。",
			"五彩斑斓的疯狂笼罩全身。现在，他打算“品尝”一切。",
			"探险队惊恐万分，但已无路可退。"
		],
		"french": [
			"Le masque de l'humble marchand se brisa en mille morceaux.",
			"Un sirop collant bouillit, et Haraldr renaquit sous une nouvelle forme.",
			"Une folie colorée enveloppa tout son corps. Maintenant, il a l'intention de 'goûter' à tout.",
			"L'équipe d'expédition fut horrifiée, mais il n'y avait nulle part où se retirer."
		],
		"spanish": [
			"La máscara del humilde mercader se hizo añicos.",
			"Un jarabe pegajoso hirvió, y Haraldr renació en una nueva forma.",
			"Una locura colorida envolvió todo su cuerpo. Ahora, él pretende 'degustar' todo.",
			"El equipo de expedición estaba horrorizado, pero no había dónde retirarse."
		],
		"vietnamese": [
			"Mặt nạ của thương nhân hèn mọn vỡ tan.",
			"Xi-rô dính sôi sục, và Haraldr tái sinh trong một hình dạng mới.",
			"Một sự điên rồ đầy màu sắc bao trùm toàn thân. Giờ đây, hắn dự định 'nếm thử' mọi thứ.",
			"Đoàn thám hiểm kinh hoàng, nhưng không còn đường lùi."
		],
		"thai": [
			"หน้ากากของพ่อค้าผู้ต่ำต้อยแตกเป็นเสี่ยงๆ",
			"น้ำเชื่อมเหนียวเดือดพล่าน และฮาราลดอร์ก็ถือกำเนิดใหม่ในร่างใหม่",
			"ความบ้าคลั่งหลากสีสันปกคลุมไปทั่วร่าง บัดนี้ เขาตั้งใจจะ 'ลิ้มรส' ทุกสิ่ง",
			"ทีมสำรวจตกใจกลัว แต่ไม่มีที่ให้ถอย"
		],
		"hindi": [
			"तुच्छ व्यापारी का मुखौटा टूट गया।",
			"चिपचिपा सिरप उबला, और हैराल्ड्र ने एक नए रूप में पुनर्जन्म लिया।",
			"एक रंगीन पागलपन ने उसके पूरे शरीर को घेर लिया। अब, वह सब कुछ 'चखने' का इरादा रखता है।",
			"अभियान दल भयभीत था, लेकिन पीछे हटने की कोई जगह नहीं थी।"
		]
	}
} as const;
