export const scenario_snowy_haraldr_20_05 = {
	"scenario_id": "snowy_haraldr_20_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_106"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹한의 설원, 광기로 물든 세계수 심장부였다.",
						"english": "The heart of the World Tree, a frozen wasteland steeped in madness.",
						"japanese": "酷寒の雪原、狂気に染まった世界樹の心臓部だった。",
						"chinese": "严寒的雪原，被疯狂浸染的世界树心脏。",
						"french": "Le cœur de l'Arbre-Monde, un désert gelé imprégné de folie.",
						"spanish": "El corazón del Árbol del Mundo, un páramo helado empapado de locura.",
						"vietnamese": "Trái tim của Cây Thế giới, một vùng đất hoang lạnh lẽo chìm trong điên cuồng.",
						"thai": "ใจกลางต้นไม้โลก ดินแดนหิมะอันโหดร้ายที่ถูกย้อมด้วยความบ้าคลั่ง",
						"hindi": "विश्व वृक्ष का हृदय, एक बर्फीला बंजर भूमि जो पागलपन में डूबी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "하랄드르. 그 녀석의 진짜 광기를 봐야만 한다.",
						"english": "Haraldr. We must see his true madness.",
						"japanese": "ハラルドル。奴の真の狂気を見る必要がある。",
						"chinese": "哈拉尔德。我们必须见识他真正的疯狂。",
						"french": "Haraldr. Nous devons voir sa vraie folie.",
						"spanish": "Haraldr. Debemos ver su verdadera locura.",
						"vietnamese": "Haraldr. Chúng ta phải chứng kiến sự điên loạn thật sự của hắn.",
						"thai": "ฮารัลเดอร์. เราต้องเห็นความบ้าคลั่งที่แท้จริงของมัน",
						"hindi": "हरलड्र। हमें उसकी असली दीवानगी देखनी ही होगी।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전리품을 거부한 대가인가.",
						"english": "Is this the price for refusing the spoils?",
						"japanese": "戦利品を拒んだ報いか。",
						"chinese": "这是拒绝战利品的代价吗？",
						"french": "Est-ce le prix à payer pour avoir refusé le butin ?",
						"spanish": "¿Es este el precio por rechazar el botín?",
						"vietnamese": "Đây có phải là cái giá cho việc từ chối chiến lợi phẩm?",
						"thai": "นี่คือราคาของการปฏิเสธของขวัญรึเปล่า?",
						"hindi": "क्या यह लूट का माल ठुकराने का नतीजा है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "놈은 이미 우리를 '고객'이 아닌 '방해자'로 본다.",
						"english": "He already sees us as 'obstacles,' not 'customers.'",
						"japanese": "奴はもう我々を「客」ではなく「邪魔者」と見ている。",
						"chinese": "他已经把我们看作是“障碍”，而不是“客户”了。",
						"french": "Il nous voit déjà comme des 'obstacles', pas des 'clients'.",
						"spanish": "Él ya nos ve como 'obstáculos', no como 'clientes'.",
						"vietnamese": "Hắn đã xem chúng ta là 'chướng ngại vật', chứ không phải 'khách hàng'.",
						"thai": "มันเห็นเราเป็น 'อุปสรรค' ไม่ใช่ 'ลูกค้า' แล้ว",
						"hindi": "वह हमें अब 'ग्राहक' नहीं, बल्कि 'बाधा' समझता है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "프랜차이즈, 끝내주지.",
						"english": "The franchise, it's incredible.",
						"japanese": "フランチャイズ、最高だ。",
						"chinese": "特许经营，太棒了。",
						"french": "La franchise, c'est génial.",
						"spanish": "La franquicia, es increíble.",
						"vietnamese": "Nhượng quyền, thật tuyệt vời.",
						"thai": "แฟรนไชส์, สุดยอดไปเลย",
						"hindi": "फ्रेंचाइजी, लाजवाब है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "놈의 몸에서 이상한 시럽 냄새가 난다.",
						"english": "A strange syrup smell emanates from his body.",
						"japanese": "奴の体から奇妙なシロップの匂いがする。",
						"chinese": "他身上散发着一股奇怪的糖浆味。",
						"french": "Une étrange odeur de sirop émane de son corps.",
						"spanish": "Un extraño olor a jarabe emana de su cuerpo.",
						"vietnamese": "Cơ thể hắn tỏa ra mùi si-rô kỳ lạ.",
						"thai": "มีกลิ่นน้ำเชื่อมประหลาดออกมาจากตัวมัน",
						"hindi": "उसके शरीर से अजीब सी सिरप की गंध आ रही है।"
					}
				},
				{
					"content": {
						"korean": "하랄드르의 몸이 변형되고 있어.",
						"english": "Haraldr's body is transforming.",
						"japanese": "ハラルドルの体が変形している。",
						"chinese": "哈拉尔德的身体正在变形。",
						"french": "Le corps d'Haraldr est en train de se transformer.",
						"spanish": "El cuerpo de Haraldr se está transformando.",
						"vietnamese": "Cơ thể Haraldr đang biến đổi.",
						"thai": "ร่างของฮารัลเดอร์กำลังแปรเปลี่ยน",
						"hindi": "हरलड्र का शरीर बदल रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "하하핫! 거부한다고? 내 프랜차이즈는 멈추지 않아!",
						"english": "Hahahaha! Refuse me? My franchise won't stop!",
						"japanese": "ハハハ！拒むだと？俺のフランチャイズは止まらない！",
						"chinese": "哈哈哈！拒绝我？我的特许经营不会停止！",
						"french": "Hahahaha ! Vous refusez ? Ma franchise ne s'arrêtera pas !",
						"spanish": "¡Jajajaja! ¿Rechazarme? ¡Mi franquicia no se detendrá!",
						"vietnamese": "Ha ha ha! Từ chối sao? Nhượng quyền của ta sẽ không dừng lại!",
						"thai": "ฮ่าฮ่าฮ่า! ปฏิเสธข้าเรอะ? แฟรนไชส์ของข้าไม่หยุดหรอก!",
						"hindi": "हाहाहा! मना कर रहे हो? मेरी फ्रेंचाइजी रुकेगी नहीं!"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "욕망이 만들어낸 환상. 그걸 깨야 한다.",
						"english": "An illusion born of desire. We must shatter it.",
						"japanese": "欲望が生み出した幻想。それを打ち破らねばならない。",
						"chinese": "欲望产生的幻象。我们必须打破它。",
						"french": "Une illusion née du désir. Il faut la briser.",
						"spanish": "Una ilusión creada por el deseo. Debemos romperla.",
						"vietnamese": "Một ảo ảnh sinh ra từ dục vọng. Chúng ta phải phá vỡ nó.",
						"thai": "ภาพลวงตาที่เกิดจากความปรารถนา เราต้องทำลายมัน",
						"hindi": "लालच से बना एक भ्रम। हमें इसे तोड़ना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "여기가 놈의 광기가 폭발하는 지점이다.",
						"english": "This is where his madness erupts.",
						"japanese": "ここが奴の狂気が爆発する地点だ。",
						"chinese": "这里是他的疯狂爆发点。",
						"french": "C'est ici que sa folie éclate.",
						"spanish": "Aquí es donde su locura estalla.",
						"vietnamese": "Đây là nơi sự điên loạn của hắn bùng nổ.",
						"thai": "นี่คือจุดที่ความบ้าคลั่งของมันปะทุขึ้น",
						"hindi": "यह वो जगह है जहाँ उसकी दीवानगी फूट पड़ती है।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"action": "shake",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하랄드르는 뿔피리를 내팽개쳤다. 초라한 장사꾼의 가면이 부서졌다.",
						"english": "Haraldr cast aside his horn. The mask of a pathetic merchant shattered.",
						"japanese": "ハラルドルは角笛を投げ捨てた。みすぼらしい商人の仮面が砕け散った。",
						"chinese": "哈拉尔德扔掉了他的号角。一个可怜商人的面具破碎了。",
						"french": "Haraldr a jeté sa corne. Le masque du misérable marchand s'est brisé.",
						"spanish": "Haraldr arrojó su cuerno. La máscara del patético mercader se hizo añicos.",
						"vietnamese": "Haraldr vứt bỏ chiếc sừng của mình. Mặt nạ của một tên thương gia thảm hại đã vỡ tan.",
						"thai": "ฮารัลเดอร์โยนเขาสัตว์ทิ้ง หน้ากากของพ่อค้าผู้หน้าสมเพชได้แตกสลายลง",
						"hindi": "हरलड्र ने अपनी सींग फेंक दी। एक दयनीय व्यापारी का मुखौटा टूट गया।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "흥! 이럴 줄 알았지! 어차피 내 몸이 곧 '궁극의 전리품'이다!",
						"english": "Hmph! Just as I thought! My body is the ultimate trophy anyway!",
						"japanese": "フン！やはりな！どうせ私の体こそが「究極の戦利品」だ！",
						"chinese": "哼！我就知道！反正我的身体就是“终极战利品”！",
						"french": "Hmph ! Je m'y attendais ! Mon corps est de toute façon le 'trophée ultime' !",
						"spanish": "¡Hmph! ¡Ya lo sabía! ¡Mi cuerpo es el 'trofeo definitivo' de todos modos!",
						"vietnamese": "Hừm! Ta biết ngay mà! Dù sao thì cơ thể của ta cũng là 'chiến lợi phẩm tối thượng'!",
						"thai": "หึ! ฉันรู้ดี! ยังไงซะร่างกายของฉันก็คือ 'สมบัติขั้นสุดยอด'!",
						"hindi": "हम्म! मुझे पता था! वैसे भी, मेरा शरीर ही 'अंतिम ट्रॉफी' है!"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "각오해라! 내 영혼까지 짜낸 '열정의 라즈베리 빙수' 맛을 보여주마!",
						"english": "Prepare yourself! I'll show you the taste of 'Passion Raspberry Bingsu,' squeezed from my very soul!",
						"japanese": "覚悟しろ！私の魂まで絞り出した「情熱のラズベリーかき氷」の味を見せてやる！",
						"chinese": "做好觉悟吧！让你尝尝我连灵魂都榨干的“热情覆盆子刨冰”的味道！",
						"french": "Prépare-toi ! Je vais te faire goûter la 'Bingsu Framboise Passion', extraite de mon âme !",
						"spanish": "¡Prepárate! ¡Te mostraré el sabor del 'Bingsu de Frambuesa Apasionada', exprimido de mi propia alma!",
						"vietnamese": "Hãy chuẩn bị tinh thần! Ta sẽ cho ngươi nếm thử hương vị của 'Bingsu Mâm Xôi Đam Mê', được vắt từ tận linh hồn của ta!",
						"thai": "เตรียมตัวไว้! ฉันจะแสดงให้เธอเห็นถึงรสชาติของ 'บิงซูราสเบอร์รี่แห่งความหลงใหล' ที่บีบเค้นมาจากวิญญาณของฉัน!",
						"hindi": "तैयार हो जाओ! मैं तुम्हें 'जुनून रास्पबेरी बिंग्सू' का स्वाद चखाऊंगा, जो मेरी आत्मा तक से निचोड़ा गया है!"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "내 프랜차이즈 확장을 막는 자는… 전부 공짜로 시식시켜주마! 맛있게 죽어라! 하하하핫!",
						"english": "Those who stop my franchise expansion... I'll give them all a free tasting! Die deliciously! Hahahaha!",
						"japanese": "私のフランチャイズ拡大を阻む者は…全員無料で試食させてやる！美味しく死ね！ハハハハッ！",
						"chinese": "凡是阻碍我特许经营扩展的人……我都会让他们免费试吃！美味地死去吧！哈哈哈！",
						"french": "Ceux qui m'empêchent d'étendre ma franchise... Je leur ferai tous goûter gratuitement ! Meurs délicieusement ! Hahahaha !",
						"spanish": "Aquellos que impidan la expansión de mi franquicia... ¡Les daré a todos una degustación gratuita! ¡Muere deliciosamente! ¡Jajajaja!",
						"vietnamese": "Kẻ nào ngăn cản việc mở rộng chuỗi cửa hàng của ta… ta sẽ cho chúng nếm thử miễn phí! Chết một cách ngon lành đi! Hahahahah!",
						"thai": "ใครที่ขัดขวางการขยายแฟรนไชส์ของฉัน... ฉันจะให้พวกเขาลองชิมฟรีทั้งหมด! ตายอย่างเอร็ดอร่อยไปเลย! ฮ่าฮ่าฮ่าฮ่า!",
						"hindi": "जो मेरे फ्रैंचाइज़ विस्तार को रोकेंगे... मैं उन सभी को मुफ़्त में चखाऊंगा! स्वादिष्ट तरीके से मरो! हाहाहाहा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "미쳤어…!",
						"english": "Insane...!",
						"japanese": "狂ってる…！",
						"chinese": "疯了……！",
						"french": "Fou... !",
						"spanish": "¡Loco...!",
						"vietnamese": "Điên rồi...!",
						"thai": "บ้าไปแล้ว...!",
						"hindi": "पागल हो गया है...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "본색을 드러냈군. 잘 봐라, 이게 바로 '강함의 끝'이다.",
						"english": "So, you show your true colors. Watch closely, this is the 'pinnacle of strength.'",
						"japanese": "本性を現したな。よく見ておけ、これこそが「強さの極み」だ。",
						"chinese": "你终于露出真面目了。看好了，这才是“力量的极致”。",
						"french": "Tu montres enfin ton vrai visage. Regarde bien, c'est ça le 'sommet de la puissance'.",
						"spanish": "Así que has mostrado tus verdaderos colores. Mira bien, esto es el 'pináculo de la fuerza'.",
						"vietnamese": "Ngươi đã lộ rõ bản chất rồi. Hãy nhìn kỹ đi, đây chính là 'đỉnh cao của sức mạnh'.",
						"thai": "เผยธาตุแท้ออกมาแล้วสินะ จงดูให้ดี นี่แหละคือ 'จุดสูงสุดของความแข็งแกร่ง'!",
						"hindi": "तुमने अपने असली रंग दिखा दिए। ध्यान से देखो, यही है 'ताकत की चरम सीमा'।"
					},
					"speaker": "ivar"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "놈의 공격은 예측할 수 없다. 하지만 약점은 반드시 있다.",
						"english": "His attacks are unpredictable. But he must have a weakness.",
						"japanese": "奴の攻撃は予測不可能だ。だが、弱点は必ずある。",
						"chinese": "那家伙的攻击无法预测。但弱点一定存在。",
						"french": "Ses attaques sont imprévisibles. Mais il a forcément une faiblesse.",
						"spanish": "Sus ataques son impredecibles. Pero debe tener una debilidad.",
						"vietnamese": "Đòn tấn công của hắn không thể đoán trước được. Nhưng chắc chắn hắn có điểm yếu.",
						"thai": "การโจมตีของมันคาดเดาไม่ได้ แต่ต้องมีจุดอ่อนแน่นอน",
						"hindi": "उसके हमले अप्रत्याशित हैं। पर उसकी कोई न कोई कमजोरी ज़रूर होगी।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boss",
					"content": {
						"korean": "내 빙수 괴물의 맛을 봐라! 이 설원 전체가 나의 프랜차이즈가 될 것이다!",
						"english": "Taste my Bingsu Monster! This entire snowfield will become my franchise!",
						"japanese": "私の氷菓モンスターの味を見ろ！この雪原全体が私のフランチャイズになるのだ！",
						"chinese": "尝尝我的刨冰怪物！这整个雪原都将成为我的特许经营地！",
						"french": "Goûte mon Monstre de Bingsu ! Tout ce champ de neige deviendra ma franchise !",
						"spanish": "¡Prueba mi Monstruo de Bingsu! ¡Todo este campo de nieve se convertirá en mi franquicia!",
						"vietnamese": "Nếm thử Quái Vật Bingsu của ta đi! Toàn bộ cánh đồng tuyết này sẽ trở thành chuỗi cửa hàng của ta!",
						"thai": "ชิมปีศาจบิงซูของฉันซะ! ทุ่งน้ำแข็งทั้งหมดนี้จะกลายเป็นแฟรนไชส์ของฉัน!",
						"hindi": "मेरे बिंग्सू मॉन्स्टर का स्वाद चखो! यह पूरा बर्फीला मैदान मेरी फ्रैंचाइज़ बन जाएगा!"
					}
				},
				{
					"content": {
						"korean": "시럽 덩어리 주제에…!",
						"english": "Just a lump of syrup...!",
						"japanese": "シロップの塊のくせに…！",
						"chinese": "区区一团糖浆……！",
						"french": "Juste un tas de sirop... !",
						"spanish": "¡Solo un montón de jarabe...!",
						"vietnamese": "Chỉ là một đống si-rô thôi mà...!",
						"thai": "แค่ก้อนน้ำเชื่อมแท้ๆ...!",
						"hindi": "सिर्फ़ सिरप का एक ढेला...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "끝까지 놈의 광기를 이용한다. 그것만이 승리하는 길이다.",
						"english": "I'll use his madness to the very end. That's the only way to win.",
						"japanese": "最後まで奴の狂気を利用する。それだけが勝利への道だ。",
						"chinese": "我会利用他的疯狂直到最后。那是唯一获胜的途径。",
						"french": "J'utiliserai sa folie jusqu'au bout. C'est la seule voie vers la victoire.",
						"spanish": "Usaré su locura hasta el final. Esa es la única manera de ganar.",
						"vietnamese": "Ta sẽ lợi dụng sự điên loạn của hắn đến cùng. Đó là con đường duy nhất để chiến thắng.",
						"thai": "ฉันจะใช้ความคลุ้มคลั่งของมันจนถึงที่สุด นั่นคือหนทางเดียวที่จะชนะ",
						"hindi": "मैं उसकी सनक का अंत तक इस्तेमाल करूंगा। वही जीतने का एकमात्र रास्ता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "하하하! 내 프랜차이즈는 무적이다! 너희는 그저 공짜 시식품일 뿐!",
						"english": "Hahaha! My franchise is invincible! You're just free samples!",
						"japanese": "ハハハ！私のフランチャイズは無敵だ！お前たちはただの試食品に過ぎない！",
						"chinese": "哈哈哈！我的特许经营是无敌的！你们不过是免费试用品！",
						"french": "Hahaha ! Ma franchise est invincible ! Vous n'êtes que des échantillons gratuits !",
						"spanish": "¡Jajajaja! ¡Mi franquicia es invencible! ¡No sois más que muestras gratis!",
						"vietnamese": "Hahaha! Thương hiệu của ta là bất khả chiến bại! Các ngươi chỉ là những món ăn thử miễn phí!",
						"thai": "ฮ่าๆๆๆ! แฟรนไชส์ของฉันไร้เทียมทาน! พวกแกก็แค่ตัวอย่างฟรีเท่านั้น!",
						"hindi": "हाहाहा! मेरी फ्रैंचाइज़ी अजेय है! तुम तो बस मुफ्त के नमूने हो!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"content": {
						"korean": "크윽… 아직… 끝나지 않았다!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ… まだ… 終わってない！",
						"chinese": "呃… 还没… 结束！",
						"french": "Ugh... Ce n'est pas... encore fini !",
						"spanish": "Ugh... ¡Aún... no ha terminado!",
						"vietnamese": "Khụ... Vẫn chưa... kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이대로 무릎 꿇을 수는 없어. 다시 일어선다!",
						"english": "I can't fall here. I'll rise again!",
						"japanese": "このままでは膝を折れない。再び立ち上がる！",
						"chinese": "我不能就此跪下。我会再次站起来！",
						"french": "Je ne peux pas m'agenouiller ici. Je me relèverai !",
						"spanish": "No puedo arrodillarme así. ¡Me levantaré de nuevo!",
						"vietnamese": "Không thể quỳ gối thế này. Ta sẽ đứng dậy một lần nữa!",
						"thai": "จะคุกเข่าแบบนี้ไม่ได้ ฉันจะลุกขึ้นอีกครั้ง!",
						"hindi": "मैं ऐसे घुटने नहीं टेक सकता। मैं फिर से खड़ा होऊंगा!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "하랄드르는 자신의 팔을 뜯어내며 거대한 빙수 괴물로 변모했다.",
						"english": "Haraldr tore off his own arm, transforming into a colossal Bingsu Monster.",
						"japanese": "ハラルドルは自分の腕を引きちぎり、巨大な氷菓モンスターへと変貌した。",
						"chinese": "哈拉尔德撕下了自己的手臂，变身成了巨大的刨冰怪物。",
						"french": "Haraldr arracha son propre bras, se transformant en un colossal Monstre de Bingsu.",
						"spanish": "Haraldr se arrancó el brazo, transformándose en un colosal Monstruo de Bingsu.",
						"vietnamese": "Haraldr đã tự xé nát cánh tay của mình, biến thành một Quái Vật Bingsu khổng lồ.",
						"thai": "ฮาราลด์ฉีกแขนตัวเองออก กลายร่างเป็นปีศาจบิงซูขนาดยักษ์",
						"hindi": "हाराल्ड ने अपना हाथ फाड़ दिया, और एक विशाल बिंग्सू मॉन्स्टर में बदल गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그의 몸에서 빨강, 초록, 파랑 온갖 색깔의 끈적한 시럽들이 분출했다.",
						"english": "Sticky syrups of red, green, blue, and all sorts of colors erupted from his body.",
						"japanese": "彼の体から赤、緑、青、あらゆる色のねばねばしたシロップが噴出した。",
						"chinese": "他的身体里喷涌出红色、绿色、蓝色等各种颜色的粘稠糖浆。",
						"french": "Des sirops collants de toutes les couleurs – rouge, vert, bleu – jaillirent de son corps.",
						"spanish": "Jarabes pegajosos de todos los colores, rojo, verde, azul, brotaron de su cuerpo.",
						"vietnamese": "Các loại si-rô dính màu đỏ, xanh lá, xanh dương và đủ mọi màu sắc khác trào ra từ cơ thể hắn.",
						"thai": "น้ำเชื่อมเหนียวหนืดสีแดง เขียว น้ำเงิน และทุกสีพุ่งออกมาจากร่างกายของเขา",
						"hindi": "उसके शरीर से लाल, हरे, नीले और हर तरह के चिपचिपे सिरप निकले।"
					}
				},
				{
					"content": {
						"korean": "자, '궁극의 전리품'을 맛볼 시간이다! 내 영혼까지 짜낸 이 맛을 거부할 수는 없을 거다!",
						"english": "Now, it's time to taste the 'Ultimate Trophy'! You won't be able to resist this flavor, squeezed from my very soul!",
						"japanese": "さあ、「究極の戦利品」を味わう時間だ！私の魂まで絞り出したこの味を、お前は拒めないだろう！",
						"chinese": "来吧，是时候品尝“究极战利品”了！你无法抗拒这倾注了我灵魂的味道！",
						"french": "Maintenant, il est temps de goûter au « Trophée Ultime » ! Tu ne pourras pas résister à cette saveur, extraite de mon âme même !",
						"spanish": "¡Ahora es el momento de saborear el 'Trofeo Definitivo'! ¡No podrás resistir este sabor, exprimido de mi propia alma!",
						"vietnamese": "Giờ là lúc nếm thử 'Chiến lợi phẩm tối thượng'! Ngươi sẽ không thể cưỡng lại hương vị này, được vắt kiệt từ linh hồn ta đâu!",
						"thai": "ได้เวลาลิ้มรส 'สุดยอดรางวัล' แล้ว! แกจะต้านทานรสชาติที่บีบคั้นมาจากวิญญาณของฉันไม่ได้หรอก!",
						"hindi": "अब, 'अंतिम ट्रॉफी' का स्वाद लेने का समय है! तुम मेरे दिल से निचोड़े गए इस स्वाद का विरोध नहीं कर पाओगे!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "놈의 욕망이 곧 약점이다! 집중 공격!",
						"english": "His desire is his weakness! Focus attack!",
						"japanese": "奴の欲望が弱点だ！集中攻撃！",
						"chinese": "他的欲望就是弱点！集中攻击！",
						"french": "Son désir est sa faiblesse ! Attaque concentrée !",
						"spanish": "¡Su deseo es su debilidad! ¡Ataque concentrado!",
						"vietnamese": "Ham muốn của hắn chính là điểm yếu! Tập trung tấn công!",
						"thai": "ความปรารถนาของมันคือจุดอ่อน! โจมตีแบบเน้นเป้าหมาย!",
						"hindi": "उसकी इच्छा ही उसकी कमजोरी है! केंद्रित हमला!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 전투를 끝내자!",
						"english": "Let's end this battle!",
						"japanese": "この戦いを終わらせよう！",
						"chinese": "结束这场战斗吧！",
						"french": "Finissons ce combat !",
						"spanish": "¡Terminemos esta batalla!",
						"vietnamese": "Hãy kết thúc trận chiến này!",
						"thai": "มาจบการต่อสู้นี้กันเถอะ!",
						"hindi": "इस लड़ाई को खत्म करते हैं!"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "승리했다. 이 광기의 끝에서.",
						"english": "Victory. At the end of this madness.",
						"japanese": "勝利した。この狂気の果てで。",
						"chinese": "胜利了。在这疯狂的尽头。",
						"french": "Victoire. Au terme de cette folie.",
						"spanish": "Victoria. Al final de esta locura.",
						"vietnamese": "Chiến thắng. Ở cuối sự điên cuồng này.",
						"thai": "ชนะแล้ว. ที่ปลายทางของความบ้าคลั่งนี้.",
						"hindi": "जीत गए। इस पागलपन के अंत में।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "boss",
					"content": {
						"korean": "크아아악…! 하지만… 내 프랜차이즈는… 영원하다…!",
						"english": "Ugh...! But... my franchise... is eternal...!",
						"japanese": "くあああっ…！しかし…私のフランチャイズは…永遠だ…！",
						"chinese": "啊啊啊啊……！但是……我的特许经营……是永恒的……！",
						"french": "Argh…! Mais… ma franchise… est éternelle…!",
						"spanish": "¡Argh...! Pero... ¡mi franquicia... es eterna...!",
						"vietnamese": "Ưaaagh...! Nhưng... thương hiệu của ta... là vĩnh cửu...!",
						"thai": "อ๊ากกก...! แต่... แฟรนไชส์ของฉัน... เป็นนิรันดร์...!",
						"hindi": "आह...! लेकिन... मेरी फ्रेंचाइजी... अमर है...!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "더 이상 시럽은 없어…!",
						"english": "No more syrup...!",
						"japanese": "もうシロップはない…！",
						"chinese": "没有更多的糖浆了……！",
						"french": "Plus de sirop…!",
						"spanish": "¡No más jarabe...!",
						"vietnamese": "Không còn si-rô nữa...!",
						"thai": "ไม่มีน้ำเชื่อมอีกแล้ว...!",
						"hindi": "और सिरप नहीं...!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강함과 영광의 끝… 이렇게 허무한 것인가.",
						"english": "The end of strength and glory... Is it truly this futile?",
						"japanese": "強さと栄光の終わり…こんなにも虚しいものなのか。",
						"chinese": "力量与荣耀的尽头……竟是如此虚无吗？",
						"french": "La fin de la force et de la gloire… Est-ce si vain ?",
						"spanish": "El fin de la fuerza y la gloria... ¿Es tan vano?",
						"vietnamese": "Kết thúc của sức mạnh và vinh quang... Rốt cuộc lại hư vô đến thế sao.",
						"thai": "จุดจบของความแข็งแกร่งและเกียรติยศ... ช่างว่างเปล่าเช่นนี้หรือ",
						"hindi": "शक्ति और महिमा का अंत... क्या यह इतना व्यर्थ है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "하랄드르의 저주가 풀리자, 설원 위로 따뜻한 바람이 불어왔다.",
						"english": "As Haraldr's curse was broken, a warm breeze blew over the snowfield.",
						"japanese": "ハラルドルの呪いが解けると、雪原に暖かい風が吹いた。",
						"chinese": "随着哈拉尔德的诅咒解除，一股温暖的风吹过雪原。",
						"french": "Alors que la malédiction de Haraldr était brisée, une brise chaude souffla sur la plaine enneigée.",
						"spanish": "Al romperse la maldición de Haraldr, una cálida brisa sopló sobre el campo de nieve.",
						"vietnamese": "Khi lời nguyền của Haraldr được giải, một làn gió ấm áp thổi qua cánh đồng tuyết.",
						"thai": "เมื่อคำสาปของฮาราลเดอร์ถูกทำลาย สายลมอุ่นก็พัดผ่านทุ่งหิมะ",
						"hindi": "जैसे ही हरलदर का शाप टूटा, बर्फ के मैदान पर एक गर्म हवा चलने लगी।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만 이바르는 알았다. 끝없는 굶주림은, 또 다른 형태로 다가올 것임을.",
						"english": "But Ivar knew. The endless hunger would come again, in another form.",
						"japanese": "しかしイヴァルは知っていた。終わりのない飢えは、また別の形で訪れるだろうと。",
						"chinese": "但伊瓦尔知道。无尽的饥饿，将会以另一种形式再次降临。",
						"french": "Mais Ivar le savait. La faim insatiable reviendrait, sous une autre forme.",
						"spanish": "Pero Ivar lo sabía. El hambre interminable volvería, en otra forma.",
						"vietnamese": "Nhưng Ivar biết. Cơn đói khát vô tận sẽ trở lại, dưới một hình dạng khác.",
						"thai": "แต่ไอวาร์รู้ดี. ความหิวโหยที่ไม่สิ้นสุดจะกลับมาอีกครั้ง ในรูปแบบอื่น.",
						"hindi": "लेकिन इवर जानता था। अंतहीन भूख फिर से, किसी और रूप में आएगी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"광활한 얼음 평원, 모든 환상의 중심.",
			"하랄드르, 그가 만든 허상의 프랜차이즈.",
			"이바르는 알고 있었다. 이곳의 '전리품'은 곧 그의 영혼임을.",
			"이제, 마지막 맛을 볼 시간이다. 달콤하고, 광기 어린."
		],
		"english": [
			"Vast ice plains, the heart of all illusions.",
			"Haraldr, his illusory franchise.",
			"Ivar knew. The 'trophy' here was his soul.",
			"Now, it's time for the final taste. Sweet, and mad."
		],
		"japanese": [
			"広大な氷の平原、全ての幻想の中心。",
			"ハラルドル、彼が創り出した虚像のフランチャイズ。",
			"イーヴァルは知っていた。ここの『戦利品』が彼の魂そのものであることを。",
			"今、最後の味をみる時だ。甘く、狂気に満ちた。"
		],
		"chinese": [
			"广阔的冰原，所有幻想的中心。",
			"哈拉尔德，他创造的虚假特许经营。",
			"伊瓦尔知道。这里的“战利品”就是他的灵魂。",
			"现在，是时候品尝最后的滋味了。甜美而疯狂。"
		],
		"french": [
			"Vastes plaines de glace, le cœur de toutes les illusions.",
			"Haraldr, sa franchise illusoire.",
			"Ivar le savait. Le 'trophée' ici était son âme.",
			"Maintenant, il est temps de savourer le dernier goût. Doux et fou."
		],
		"spanish": [
			"Vastas llanuras de hielo, el centro de todas las ilusiones.",
			"Haraldr, su franquicia ilusoria.",
			"Ivar lo sabía. El 'trofeo' aquí era su alma.",
			"Ahora, es hora de probar el último sabor. Dulce y loco."
		],
		"vietnamese": [
			"Đồng bằng băng rộng lớn, trung tâm của mọi ảo ảnh.",
			"Haraldr, thương hiệu ảo ảnh do anh ta tạo ra.",
			"Ivar biết. 'Chiến lợi phẩm' ở đây chính là linh hồn anh ta.",
			"Bây giờ, là lúc nếm trải hương vị cuối cùng. Ngọt ngào và điên cuồng."
		],
		"thai": [
			"ที่ราบน้ำแข็งอันกว้างใหญ่ ศูนย์กลางแห่งภาพลวงตาทั้งมวล",
			"ฮาราลด์ ผู้สร้างแฟรนไชส์ภาพลวงตาของเขา",
			"ไอนาร์รู้ดี 'รางวัล' ที่นี่คือจิตวิญญาณของเขาเอง",
			"ตอนนี้ ได้เวลาลิ้มรสสุดท้าย หวานล้ำ และบ้าคลั่ง"
		],
		"hindi": [
			"विशाल बर्फीले मैदान, सभी भ्रमों का केंद्र।",
			"हैरल्ड्र, उसकी बनाई हुई मायावी फ्रेंचाइजी।",
			"इवर जानता था। यहाँ का 'लूट' उसकी आत्मा थी।",
			"अब, आखिरी स्वाद लेने का समय है। मीठा और पागलपन से भरा।"
		]
	},
	"epilogue": {
		"korean": [
			"설원은 고요를 되찾았다. 시럽의 끈적임도 사라졌다.",
			"광기의 프랜차이즈는 막을 내렸지만, 남은 것은 허무함이었다.",
			"이바르는 그곳에서 자신의 욕망을 보았다. 끝없는 강함에 대한 갈증을.",
			"구원이었나, 침해였나. 차가운 바람만이 답을 알았다.",
			"모든 것은 끝났다. 그러나, 새로운 시작을 알리는 눈송이가 내렸다."
		],
		"english": [
			"The snowy plains regained their silence. The stickiness of syrup also vanished.",
			"The franchise of madness ended, but only emptiness remained.",
			"Ivar saw his own desire there. A thirst for endless strength.",
			"Was it salvation, or intrusion? Only the cold wind knew the answer.",
			"All was over. Yet, snowflakes fell, heralding a new beginning."
		],
		"japanese": [
			"雪原は静寂を取り戻した。シロップの粘りも消え失せた。",
			"狂気のフランチャイズは幕を閉じたが、残ったのは虚無感だけだった。",
			"イーヴァルはそこで自身の欲望を見た。終わりのない強さへの渇望を。",
			"それは救済だったのか、それとも侵略だったのか。冷たい風だけが答えを知っていた。",
			"全ては終わった。しかし、新たな始まりを告げる雪の結晶が舞い落ちた。"
		],
		"chinese": [
			"雪原恢复了宁静。糖浆的粘腻感也消失了。",
			"疯狂的特许经营落下了帷幕，但留下的只有虚无。",
			"伊瓦尔在那里看到了自己的欲望。对无尽力量的渴望。",
			"是救赎，还是侵犯？只有冷风知道答案。",
			"一切都结束了。然而，雪花飘落，预示着新的开始。"
		],
		"french": [
			"Les plaines enneigées ont retrouvé leur silence. La viscosité du sirop a également disparu.",
			"La franchise de la folie s'est terminée, mais seul le vide est resté.",
			"Ivar y a vu son propre désir. Une soif de force infinie.",
			"Était-ce le salut ou une intrusion ? Seul le vent froid connaissait la réponse.",
			"Tout était fini. Pourtant, des flocons de neige tombaient, annonçant un nouveau départ."
		],
		"spanish": [
			"Las llanuras nevadas recuperaron su silencio. La pegajosidad del jarabe también desapareció.",
			"La franquicia de la locura terminó, pero solo quedó el vacío.",
			"Ivar vio su propio deseo allí. Una sed de fuerza infinita.",
			"¿Fue salvación o intrusión? Solo el viento frío sabía la respuesta.",
			"Todo había terminado. Sin embargo, los copos de nieve caían, anunciando un nuevo comienzo."
		],
		"vietnamese": [
			"Đồng bằng tuyết đã lấy lại sự tĩnh lặng. Độ dính của si-rô cũng biến mất.",
			"Thương hiệu điên cuồng đã kết thúc, nhưng điều còn lại chỉ là sự trống rỗng.",
			"Ivar đã nhìn thấy ham muốn của mình ở đó. Khát khao sức mạnh vô tận.",
			"Đó là sự cứu rỗi, hay sự xâm phạm? Chỉ có làn gió lạnh mới biết câu trả lời.",
			"Mọi thứ đã kết thúc. Tuy nhiên, những bông tuyết rơi xuống, báo hiệu một khởi đầu mới."
		],
		"thai": [
			"ทุ่งหิมะกลับคืนสู่ความสงบ ความเหนียวเหนอะหนะของน้ำเชื่อมก็จางหายไป",
			"แฟรนไชส์แห่งความบ้าคลั่งปิดฉากลง ทว่าสิ่งที่เหลือไว้คือความว่างเปล่า",
			"ไอนาร์เห็นความปรารถนาของตนเองที่นั่น ความกระหายในพลังอันไร้ที่สิ้นสุด",
			"เป็นการไถ่บาป หรือการบุกรุก มีเพียงสายลมหนาวเท่านั้นที่รู้คำตอบ",
			"ทุกสิ่งจบลงแล้ว แต่เกล็ดหิมะก็โปรยปรายลงมา เป็นสัญญาณของการเริ่มต้นใหม่"
		],
		"hindi": [
			"बर्फीले मैदानों में शांति लौट आई। सिरप की चिपचिपाहट भी गायब हो गई।",
			"पागलपन की फ्रेंचाइजी खत्म हो गई, लेकिन केवल खालीपन बचा।",
			"इवर ने वहाँ अपनी इच्छा देखी। अंतहीन शक्ति की प्यास।",
			"क्या यह मोक्ष था, या अतिक्रमण? केवल ठंडी हवा ही उत्तर जानती थी।",
			"सब खत्म हो गया। फिर भी, नए सिरे का संकेत देते हुए बर्फीले टुकड़े गिर रहे थे।"
		]
	}
} as const;
