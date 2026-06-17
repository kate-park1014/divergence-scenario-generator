export const scenario_snowy_haraldr_0_02 = {
	"scenario_id": "snowy_haraldr_0_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
						"korean": "거대한 눈보라 속, 허수아비 같은 존재가 나타났다.",
						"english": "In the colossal blizzard, a scarecrow-like being emerged.",
						"japanese": "巨大な吹雪の中、かかしのような存在が現れた。",
						"chinese": "在巨大的暴风雪中，一个稻草人般的存在出现了。",
						"french": "Dans le blizzard colossal, une entité semblable à un épouvantail a émergé.",
						"spanish": "En la colosal ventisca, una criatura parecida a un espantapájaros emergió.",
						"vietnamese": "Trong trận bão tuyết khổng lồ, một sinh vật giống bù nhìn xuất hiện.",
						"thai": "ท่ามกลางพายุหิมะอันกว้างใหญ่ มีสิ่งมีชีวิตคล้ายหุ่นไล่กาปรากฏขึ้น",
						"hindi": "विशाल बर्फीले तूफान में, एक बिजूका जैसा प्राणी प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"type": "direction",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "위대한 전사, {random_boss}님이 가져온 전리품이다!",
						"english": "This is a trophy brought by the great warrior, {random_boss}!",
						"japanese": "これは偉大な戦士、{random_boss}様が持ち帰った戦利品だ！",
						"chinese": "这是伟大的战士，{random_boss}大人带来的战利品！",
						"french": "C'est un trophée apporté par le grand guerrier, {random_boss} !",
						"spanish": "¡Este es un trofeo traído por el gran guerrero, {random_boss}!",
						"vietnamese": "Đây là chiến lợi phẩm do chiến binh vĩ đại, {random_boss} mang đến!",
						"thai": "นี่คือของรางวัลที่นักรบผู้ยิ่งใหญ่ {random_boss} นำมา!",
						"hindi": "यह महान योद्धा, {random_boss} द्वारा लाया गया एक खजाना है!"
					},
					"speaker": "random_boss",
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "전리품? 저 눈 결정 말이야?",
						"english": "A trophy? You mean that snowflake?",
						"japanese": "戦利品？あの雪の結晶のことか？",
						"chinese": "战利品？你说的是那片雪花吗？",
						"french": "Un trophée ? Tu veux dire ce flocon de neige ?",
						"spanish": "¿Un trofeo? ¿Te refieres a ese copo de nieve?",
						"vietnamese": "Chiến lợi phẩm? Ý bạn là bông tuyết đó à?",
						"thai": "ของรางวัล? หมายถึงเกล็ดหิมะนั่นเหรอ?",
						"hindi": "एक खजाना? तुम्हारा मतलब वह बर्फ का टुकड़ा है?"
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "...이상해. 달콤한 냄새가 나.",
						"english": "...Strange. It smells sweet.",
						"japanese": "…変だ。甘い匂いがする。",
						"chinese": "……奇怪。闻起来很甜。",
						"french": "...Étrange. Ça sent le doux.",
						"spanish": "...Extraño. Huele dulce.",
						"vietnamese": "...Kỳ lạ. Nó có mùi ngọt.",
						"thai": "...แปลกจัง มันมีกลิ่นหอมหวาน",
						"hindi": "अजीब है। इसमें से मीठी गंध आ रही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그러게. 눈 결정에서 단내가 난다고?",
						"english": "Yeah. A snowflake smelling sweet?",
						"japanese": "そうだな。雪の結晶から甘い匂いだと？",
						"chinese": "是啊。雪花会散发甜味吗？",
						"french": "Oui. Un flocon de neige qui sent le doux ?",
						"spanish": "Sí. ¿Un copo de nieve que huele dulce?",
						"vietnamese": "Đúng vậy. Bông tuyết lại có mùi ngọt sao?",
						"thai": "นั่นสิ เกล็ดหิมะมีกลิ่นหวานเนี่ยนะ?",
						"hindi": "हाँ। एक बर्फ के टुकड़े से मीठी गंध आ रही है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "게다가... 저 몸에 보이는 저건 뭐지?",
						"english": "Besides... what's that on its body?",
						"japanese": "それに…あの体に見えるのは何だ？",
						"chinese": "而且……它身上看到的是什么？",
						"french": "De plus... qu'est-ce que c'est que ça sur son corps ?",
						"spanish": "Además... ¿qué es eso que se ve en su cuerpo?",
						"vietnamese": "Hơn nữa... cái thứ trên người nó là gì vậy?",
						"thai": "แถม... ที่เห็นบนตัวนั่นมันอะไรกัน?",
						"hindi": "इसके अलावा... उसके शरीर पर वह क्या है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재의 몸에 알록달록한 시럽 자국이 보였다.",
						"english": "Colorful syrup stains were visible on the unknown entity's body.",
						"japanese": "正体不明の存在の体に、色とりどりのシロップの染みが見えた。",
						"chinese": "在未知存在的身体上，看到了五颜六色的糖浆痕迹。",
						"french": "Des taches de sirop colorées étaient visibles sur le corps de l'entité inconnue.",
						"spanish": "Manchas de jarabe de colores eran visibles en el cuerpo de la entidad desconocida.",
						"vietnamese": "Những vết siro đầy màu sắc hiện rõ trên cơ thể của thực thể không rõ.",
						"thai": "รอยเปื้อนน้ำเชื่อมหลากสีปรากฏอยู่บนร่างของสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "अज्ञात सत्ता के शरीर पर रंगीन सिरप के दाग दिखाई दे रहे थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "흥! 위대한 전사의 흔적일 뿐이다!",
						"english": "Hmph! Just the traces of a great warrior!",
						"japanese": "ふん！偉大な戦士の痕跡に過ぎない！",
						"chinese": "哼！这不过是伟大战士的痕迹！",
						"french": "Hmph ! Ce ne sont que les traces d'un grand guerrier !",
						"spanish": "¡Hmph! ¡Solo son las huellas de un gran guerrero!",
						"vietnamese": "Hừ! Chỉ là dấu vết của một chiến binh vĩ đại thôi!",
						"thai": "หึ! นี่เป็นเพียงร่องรอยของนักรบผู้ยิ่งใหญ่เท่านั้น!",
						"hindi": "हम्फ! बस एक महान योद्धा के निशान हैं!"
					}
				},
				{
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "끈적해 보이는데... 저게 흔적이라고?",
						"english": "Looks sticky... Are those really just traces?",
						"japanese": "ベタベタしてるけど...あれが痕跡だと？",
						"chinese": "看起来黏糊糊的... 那就是痕迹？",
						"french": "Ça a l'air collant... Ce ne sont que des traces ?",
						"spanish": "Parece pegajoso... ¿Eso son solo rastros?",
						"vietnamese": "Trông có vẻ dính... Đó là dấu vết sao?",
						"thai": "ดูเหนียวๆ... นี่คือร่องรอยเหรอ?",
						"hindi": "चिपचिपा लग रहा है... क्या ये सिर्फ निशान हैं?"
					}
				},
				{
					"content": {
						"korean": "기록에 없는 현상이야. 분석해야 해.",
						"english": "This phenomenon isn't in the records. I need to analyze it.",
						"japanese": "記録にない現象だ。分析する必要がある。",
						"chinese": "这是记录中没有的现象。需要分析。",
						"french": "Ce phénomène ne figure pas dans les registres. Je dois l'analyser.",
						"spanish": "Este fenómeno no está en los registros. Necesito analizarlo.",
						"vietnamese": "Hiện tượng này không có trong hồ sơ. Cần phải phân tích.",
						"thai": "ปรากฏการณ์นี้ไม่มีในบันทึก ต้องวิเคราะห์",
						"hindi": "यह घटना रिकॉर्ड में नहीं है। मुझे इसका विश्लेषण करना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "시럽에서 나는 냄새와 전리품 냄새가 비슷해.",
						"english": "The smell of the syrup is similar to the smell of loot.",
						"japanese": "シロップの匂いと戦利品の匂いが似ている。",
						"chinese": "糖浆的气味和战利品的气味很相似。",
						"french": "L'odeur du sirop est similaire à celle du butin.",
						"spanish": "El olor del jarabe es similar al olor del botín.",
						"vietnamese": "Mùi của siro và mùi của chiến lợi phẩm tương tự nhau.",
						"thai": "กลิ่นของน้ำเชื่อมคล้ายกับกลิ่นของของรางวัล",
						"hindi": "सिरप की गंध और लूट की गंध समान है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼 저 눈 결정도... 설마.",
						"english": "Then those snowflakes too... No way.",
						"japanese": "だとするとあの雪の結晶も...まさか。",
						"chinese": "那么那些雪花也是... 不会吧。",
						"french": "Alors ces flocons de neige aussi... Impossible.",
						"spanish": "Entonces esos copos de nieve también... No puede ser.",
						"vietnamese": "Vậy thì những bông tuyết đó cũng... Không thể nào.",
						"thai": "ถ้างั้นเกล็ดหิมะพวกนั้นก็... ไม่นะ",
						"hindi": "तो वे बर्फ के टुकड़े भी... नहीं हो सकता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "모든 것이 서로 연결되어 있어. 이 존재의 본질이 이 달콤함 안에 있을지도 몰라.",
						"english": "Everything is connected. The essence of this being might lie within this sweetness.",
						"japanese": "全てが繋がっている。この存在の本質が、この甘さの中にあるのかもしれない。",
						"chinese": "一切都相互关联。这个存在的本质可能就在这种甜味之中。",
						"french": "Tout est lié. L'essence de cet être pourrait résider dans cette douceur.",
						"spanish": "Todo está conectado. La esencia de este ser podría residir en esta dulzura.",
						"vietnamese": "Mọi thứ đều được kết nối. Bản chất của thực thể này có thể nằm trong vị ngọt này.",
						"thai": "ทุกสิ่งเชื่อมโยงกัน แก่นแท้ของสิ่งมีชีวิตนี้อาจอยู่ในความหอมหวานนี้",
						"hindi": "सब कुछ जुड़ा हुआ है। इस अस्तित्व का सार इस मिठास में निहित हो सकता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥! 너희가 감히 위대한 {random_boss}의 비밀을 안다고?",
						"english": "Hmph! You dare claim to know the secrets of the great {random_boss}?",
						"japanese": "ふん！お前たちが、この偉大な{random_boss}の秘密を知っているとでも？",
						"chinese": "哼！你们竟敢说知道伟大的{random_boss}的秘密？",
						"french": "Hmph ! Vous osez prétendre connaître les secrets du grand {random_boss} ?",
						"spanish": "¡Hmph! ¿Osáis afirmar que conocéis los secretos del gran {random_boss}?",
						"vietnamese": "Hừ! Các ngươi dám nói biết bí mật của {random_boss} vĩ đại sao?",
						"thai": "หึ! พวกเจ้ากล้าอ้างว่ารู้ความลับของ {random_boss} ผู้ยิ่งใหญ่รึ?",
						"hindi": "हम्फ! तुम महान {random_boss} के रहस्य जानने का दावा करते हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수상하군. 더 알아내야겠어.",
						"english": "Suspicious. I need to find out more.",
						"japanese": "怪しいな。もっと探る必要がある。",
						"chinese": "可疑。我需要了解更多。",
						"french": "Suspect. Je dois en savoir plus.",
						"spanish": "Sospechoso. Necesito averiguar más.",
						"vietnamese": "Đáng ngờ. Tôi cần tìm hiểu thêm.",
						"thai": "น่าสงสัย ต้องหาข้อมูลเพิ่มเติม",
						"hindi": "संदिग्ध। मुझे और पता लगाना होगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 달콤함은... 매혹적이지만 동시에 불길해.",
						"english": "This sweetness... is alluring, yet ominous.",
						"japanese": "この甘さは...魅惑的だが、同時に不吉だ。",
						"chinese": "这种甜味... 既迷人又 ominious。",
						"french": "Cette douceur... est séduisante, mais en même temps sinistre.",
						"spanish": "Esta dulzura... es seductora, pero a la vez ominosa.",
						"vietnamese": "Vị ngọt này... quyến rũ, nhưng đồng thời cũng đáng sợ.",
						"thai": "ความหอมหวานนี้... น่าหลงใหล แต่ก็เป็นลางไม่ดี",
						"hindi": "यह मिठास... लुभावना है, फिर भी अशुभ है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어서 전리품을 사라! 그렇지 않으면...!",
						"english": "Hurry, take the loot! Or else...!",
						"japanese": "早く戦利品を取れ！さもないと…！",
						"chinese": "快拿走战利品！不然…！",
						"french": "Vite, prends le butin ! Ou alors... !",
						"spanish": "¡Rápido, toma el botín! ¡O si no...!",
						"vietnamese": "Nhanh lên, lấy chiến lợi phẩm đi! Nếu không thì...!",
						"thai": "รีบเอาของรางวัลไปซะ! ไม่อย่างนั้น...!",
						"hindi": "जल्दी करो, लूट ले लो! वरना...!"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"content": {
						"korean": "점점 더 광기에 가까워지는군.",
						"english": "He's getting closer to madness.",
						"japanese": "だんだん狂気に近づいているな。",
						"chinese": "他离疯狂越来越近了。",
						"french": "Il approche de plus en plus de la folie.",
						"spanish": "Se está acercando cada vez más a la locura.",
						"vietnamese": "Hắn ta đang ngày càng gần với sự điên loạn.",
						"thai": "เขากำลังเข้าใกล้ความบ้าคลั่งมากขึ้นเรื่อยๆ",
						"hindi": "वह पागलपन के करीब आ रहा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "...조심해야 해. 이 허세 뒤에 뭔가 맹렬한 것이 느껴져.",
						"english": "...Be careful. I sense something fierce behind this bluff.",
						"japanese": "…気をつけろ。この虚勢の裏に何か猛烈なものを感じる。",
						"chinese": "……小心。我感觉到这虚张声势背后有什么凶猛的东西。",
						"french": "...Sois prudent. Je sens quelque chose de féroce derrière cette fanfaronnade.",
						"spanish": "...Ten cuidado. Siento algo feroz detrás de esta fanfarronería.",
						"vietnamese": "...Hãy cẩn thận. Ta cảm thấy có điều gì đó dữ dội đằng sau vẻ khoa trương này.",
						"thai": "...ระวังตัวให้ดี. ฉันรู้สึกได้ถึงบางสิ่งที่ดุร้ายอยู่เบื้องหลังการโอ้อวดนี้.",
						"hindi": "...सावधान रहना। मुझे इस दिखावे के पीछे कुछ भयंकर महसूस होता है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "이제 더 이상 물러설 곳은 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "现在已无路可退。",
						"french": "Il n'y a plus de retour en arrière possible.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không còn đường lui nữa.",
						"thai": "ตอนนี้ไม่มีทางถอยแล้ว.",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하하하! 너희는 나의 전리품이 될 것이다!",
						"english": "Hahaha! You will be my spoils!",
						"japanese": "ハハハ！お前たちは私の戦利品となるだろう！",
						"chinese": "哈哈哈！你们将成为我的战利品！",
						"french": "Hahaha ! Vous serez mon butin !",
						"spanish": "¡Jajaja! ¡Serán mi botín!",
						"vietnamese": "Hahaha! Các ngươi sẽ là chiến lợi phẩm của ta!",
						"thai": "ฮ่าฮ่าฮ่า! พวกเจ้าจะเป็นของข้า!",
						"hindi": "हाहाहा! तुम मेरी जीत का इनाम बनोगे!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장... 아직 끝나지 않았어!",
						"english": "Damn it... it's not over yet!",
						"japanese": "くそっ…まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Bon sang... ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... aún no ha terminado!",
						"vietnamese": "Chết tiệt... vẫn chưa kết thúc!",
						"thai": "บ้าจริง... ยังไม่จบ!",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와라! 그때는 나의 진정한 전리품을 보게 될 것이다!",
						"english": "Come back! Then you will see my true spoils!",
						"japanese": "また来い！その時は私の真の戦利品を見ることになるだろう！",
						"chinese": "再来吧！那时你将看到我真正的战利品！",
						"french": "Revenez ! Alors vous verrez mes vrais butins !",
						"spanish": "¡Vuelve! ¡Entonces verás mi verdadero botín!",
						"vietnamese": "Quay lại đi! Khi đó ngươi sẽ thấy chiến lợi phẩm thực sự của ta!",
						"thai": "กลับมาอีก! แล้วเจ้าจะได้เห็นของข้าที่แท้จริง!",
						"hindi": "वापस आओ! तब तुम मेरी असली जीत का इनाम देखोगे!"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "달콤한 냄새가 진동하는 방. 정체 모를 존재가 앞을 가로막았다.",
						"english": "A room filled with a sweet scent. An unknown entity blocked the way.",
						"japanese": "甘い香りが漂う部屋。正体不明の存在が進路を阻んだ。",
						"chinese": "一个弥漫着甜美气味的房间。一个不明身份的存在挡住了去路。",
						"french": "Une pièce imprégnée d'une douce odeur. Une entité inconnue a bloqué le passage.",
						"spanish": "Una habitación impregnada de un dulce aroma. Una entidad desconocida bloqueó el camino.",
						"vietnamese": "Căn phòng tràn ngập mùi hương ngọt ngào. Một thực thể không rõ danh tính đã chặn đường.",
						"thai": "ห้องที่อบอวลไปด้วยกลิ่นหอมหวาน. สิ่งมีชีวิตปริศนาได้ขวางทางไว้.",
						"hindi": "एक मीठी सुगंध से भरा कमरा। एक अज्ञात सत्ता ने रास्ता रोक दिया।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히 위대한 전사, {random_boss}의 길을 막으려 하다니!",
						"english": "How dare you block the path of the great warrior, {random_boss}!",
						"japanese": "よくも偉大な戦士、{random_boss}の道を阻もうとするか！",
						"chinese": "你竟敢阻挡伟大战士{random_boss}的去路！",
						"french": "Comment oses-tu bloquer le chemin du grand guerrier, {random_boss} !",
						"spanish": "¡Cómo te atreves a bloquear el camino del gran guerrero, {random_boss}!",
						"vietnamese": "Ngươi dám cản đường của chiến binh vĩ đại, {random_boss} sao!",
						"thai": "แกกล้าดียังไงมาขวางทางของนักรบผู้ยิ่งใหญ่, {random_boss}!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई महान योद्धा, {random_boss} का रास्ता रोकने की!"
					}
				},
				{
					"content": {
						"korean": "네 전리품은 필요 없어. 이제 네 진짜 정체를 밝혀라!",
						"english": "I don't need your loot. Now, reveal your true self!",
						"japanese": "お前の戦利品は必要ない。さあ、本当の正体を現せ！",
						"chinese": "我不需要你的战利品。现在，揭示你的真实身份吧！",
						"french": "Je n'ai pas besoin de ton butin. Maintenant, révèle ta véritable identité !",
						"spanish": "No necesito tu botín. ¡Ahora, revela tu verdadera identidad!",
						"vietnamese": "Ta không cần chiến lợi phẩm của ngươi. Bây giờ, hãy tiết lộ thân phận thật sự của ngươi đi!",
						"thai": "ฉันไม่ต้องการของรางวัลของแก. ตอนนี้, เผยตัวจริงของแกออกมาซะ!",
						"hindi": "मुझे तुम्हारे लूट की ज़रूरत नहीं है। अब, अपनी असली पहचान बताओ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "후회하게 해주마! 나의 진정한 힘을 맛보아라!",
						"english": "I'll make you regret it! Taste my true power!",
						"japanese": "後悔させてやる！私の真の力を味わえ！",
						"chinese": "我会让你后悔的！尝尝我真正的力量吧！",
						"french": "Tu vas le regretter ! Goûte à ma véritable puissance !",
						"spanish": "¡Te haré arrepentirte! ¡Prueba mi verdadero poder!",
						"vietnamese": "Ta sẽ khiến ngươi hối hận! Hãy nếm thử sức mạnh thật sự của ta!",
						"thai": "ฉันจะทำให้แกเสียใจ! ลิ้มรสพลังที่แท้จริงของฉันซะ!",
						"hindi": "मैं तुम्हें पछताने पर मजबूर कर दूँगा! मेरी असली शक्ति का स्वाद चखो!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽... 겨우 이 정도라니...!",
						"english": "Ugh... Is this all you've got...!",
						"japanese": "くっ…これだけだと…！",
						"chinese": "呃……就这点本事吗……！",
						"french": "Urgh... C'est tout ce que tu as... !",
						"spanish": "Ugh... ¿Eso es todo lo que tienes...?",
						"vietnamese": "Ưm... Chỉ có thế này thôi sao...!",
						"thai": "อึก...แค่นี้เองหรอ...!",
						"hindi": "उफ़... बस इतना ही...!"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나의 전리품은... 무한하다... 언젠가...!",
						"english": "My loot is... endless... Someday...!",
						"japanese": "私の戦利品は…無限だ…いつか…！",
						"chinese": "我的战利品……是无限的……总有一天……！",
						"french": "Mon butin est... infini... Un jour... !",
						"spanish": "Mi botín es... infinito... ¡Algún día...!",
						"vietnamese": "Chiến lợi phẩm của ta... là vô tận... Một ngày nào đó...!",
						"thai": "ของรางวัลของฉัน...ไร้ขีดจำกัด...สักวันหนึ่ง...!",
						"hindi": "मेरी लूट... अनंत है... किसी दिन...!"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "시럽이 굳어버렸어... 하지만 본질은 여전히 달콤해.",
						"english": "The syrup has hardened... but its essence remains sweet.",
						"japanese": "シロップが固まってしまった…だが、本質はまだ甘い。",
						"chinese": "糖浆凝固了……但本质依然甜美。",
						"french": "Le sirop a durci... mais son essence reste douce.",
						"spanish": "El sirope se ha endurecido... pero su esencia sigue siendo dulce.",
						"vietnamese": "Siro đã đông cứng... nhưng bản chất vẫn ngọt ngào.",
						"thai": "ไซรัปแข็งตัวแล้ว... แต่แก่นแท้ยังคงหอมหวาน.",
						"hindi": "सिरप जम गया है... लेकिन इसका सार अभी भी मीठा है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 다음 단서를 찾아야 해.",
						"english": "Now we must find the next clue.",
						"japanese": "次なる手がかりを見つけなければ。",
						"chinese": "现在我们必须找到下一个线索。",
						"french": "Nous devons maintenant trouver l'indice suivant.",
						"spanish": "Ahora debemos encontrar la siguiente pista.",
						"vietnamese": "Bây giờ chúng ta phải tìm manh mối tiếp theo.",
						"thai": "ตอนนี้เราต้องหาเบาะแสต่อไป.",
						"hindi": "अब हमें अगला सुराग ढूंढना होगा।"
					}
				},
				{
					"content": {
						"korean": "달콤하지만 불길한 흔적을 남긴 채, 탐험대는 더 깊은 설원으로 향했다.",
						"english": "Leaving a sweet but ominous trail, the expedition ventured deeper into the snowfields.",
						"japanese": "甘くも不吉な痕跡を残し、探検隊はさらに深い雪原へと進んだ。",
						"chinese": "留下甜蜜却不祥的痕迹，探险队深入雪原。",
						"french": "Laissant une trace douce mais sinistre, l'expédition s'aventura plus profondément dans les champs de neige.",
						"spanish": "Dejando un rastro dulce pero ominoso, la expedición se adentró más en los campos de nieve.",
						"vietnamese": "Để lại một dấu vết ngọt ngào nhưng đáng ngại, đoàn thám hiểm tiến sâu hơn vào vùng tuyết.",
						"thai": "ทิ้งร่องรอยหวานแต่เป็นลางไม่ดีไว้เบื้องหลัง, คณะสำรวจมุ่งหน้าสู่ทุ่งหิมะที่ลึกเข้าไปอีก.",
						"hindi": "एक मीठा लेकिन अशुभ निशान छोड़कर, अभियान दल बर्फीले मैदानों में और गहराई तक चला गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 한가운데, 기이한 눈사람이 나타났다.",
			"달콤한 냄새가 나는 '전리품'을 강매하려 한다.",
			"어설픈 허세 뒤에 숨겨진 불길한 끈적함.",
			"이 의문스러운 거래의 끝은 어디일까?"
		],
		"english": [
			"In the middle of a snowy field, a bizarre snowman appeared.",
			"It tries to force a 'trophy' with a sweet scent upon you.",
			"An ominous stickiness hidden behind clumsy bluster.",
			"Where will this questionable transaction lead?"
		],
		"japanese": [
			"雪原の真ん中に、奇妙な雪だるまが現れた。",
			"甘い匂いのする「戦利品」を押し付けようとしている。",
			"ぎこちない虚勢の裏に隠された不吉なねばつき。",
			"この疑わしい取引の結末はどこへ向かうのか？"
		],
		"chinese": [
			"雪原中央，一个奇异的雪人出现了。",
			"它试图强行推销一种散发着甜味的“战利品”。",
			"笨拙的虚张声势背后隐藏着不祥的粘腻。",
			"这笔可疑交易的结局会是什么？"
		],
		"french": [
			"Au milieu de l'étendue enneigée, un étrange bonhomme de neige est apparu.",
			"Il tente de vous vendre de force un 'trophée' à l'odeur douceâtre.",
			"Une viscosité sinistre cachée derrière une vantardise maladroite.",
			"Où mènera cette transaction douteuse ?"
		],
		"spanish": [
			"En medio de la llanura nevada, apareció un extraño muñeco de nieve.",
			"Intenta forzarle a comprar un 'trofeo' con un dulce aroma.",
			"Una viscosidad siniestra oculta tras una torpe fanfarronada.",
			"¿A dónde llevará esta dudosa transacción?"
		],
		"vietnamese": [
			"Giữa cánh đồng tuyết, một người tuyết kỳ lạ xuất hiện.",
			"Nó cố gắng ép buộc bạn mua một 'chiến lợi phẩm' có mùi ngọt ngào.",
			"Một sự dính nhớp đáng sợ ẩn sau vẻ kiêu ngạo vụng về.",
			"Cuộc giao dịch đáng ngờ này sẽ dẫn đến đâu?"
		],
		"thai": [
			"กลางทุ่งหิมะ มีตุ๊กตาหิมะประหลาดปรากฏขึ้น",
			"มันพยายามจะยัดเยียด 'ของรางวัล' ที่มีกลิ่นหอมหวานให้",
			"ความเหนียวเหนอะหนะที่น่ากลัวซ่อนอยู่เบื้องหลังความโอ้อวดที่ดูงุ่มง่าม",
			"การแลกเปลี่ยนที่น่าสงสัยนี้จะจบลงที่ไหน?"
		],
		"hindi": [
			"बर्फीले मैदान के बीच में, एक अजीब स्नोमैन प्रकट हुआ।",
			"यह मीठी गंध वाले 'खजाने' को जबरदस्ती बेचने की कोशिश कर रहा है।",
			"अनाड़ी दिखावे के पीछे छिपा एक अशुभ चिपचिपापन।",
			"इस संदिग्ध लेन-देन का अंत कहाँ होगा?"
		]
	}
} as const;
