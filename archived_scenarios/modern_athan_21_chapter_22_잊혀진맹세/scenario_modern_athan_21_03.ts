export const scenario_modern_athan_21_03 = {
	"scenario_id": "modern_athan_21_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "버려진 건물의 한쪽 벽이 무너져 내렸다. 과거의 상처가 고스란히 드러났다.",
						"english": "One wall of the abandoned building collapsed, revealing the wounds of the past.",
						"japanese": "廃墟の壁が崩れ落ち、過去の傷跡が露わになった。",
						"chinese": "废弃建筑的一面墙塌了。过去的伤疤，暴露无遗。",
						"french": "Un mur du bâtiment abandonné s'est effondré, révélant les blessures du passé.",
						"spanish": "Una pared del edificio abandonado se derrumbó, revelando las heridas del pasado.",
						"vietnamese": "Một bức tường của tòa nhà bỏ hoang sụp đổ, để lộ ra những vết thương của quá khứ.",
						"thai": "กำแพงด้านหนึ่งของอาคารที่ถูกทิ้งร้างพังทลายลง เผยให้เห็นบาดแผลจากอดีต",
						"hindi": "परित्यक्त इमारत की एक दीवार ढह गई, जिससे अतीत के घाव सामने आ गए।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기가… 그 조직의 은신처였나.",
						"english": "This was... their hideout, wasn't it?",
						"japanese": "ここが… あの組織のアジトだったのか。",
						"chinese": "这里是……那个组织的藏身之处吗？",
						"french": "C'était... leur cachette, n'est-ce pas ?",
						"spanish": "¿Este era... su escondite, verdad?",
						"vietnamese": "Đây là... nơi ẩn náu của tổ chức đó, phải không?",
						"thai": "ที่นี่คือ... ที่ซ่อนขององค์กรนั้นงั้นรึ?",
						"hindi": "यह... उनका ठिकाना था, है ना?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "…왔군. 지키지 못한 맹세가… 여기 나를 묶어 뒀지.",
						"english": "...You've come. The vow I couldn't keep... it binds me here.",
						"japanese": "…来たか。守れなかった誓いが… ここに私を縛り付けている。",
						"chinese": "……你来了。未能遵守的誓言……将我束缚于此。",
						"french": "...Tu es venu. Le serment que je n'ai pas pu tenir... il me lie ici.",
						"spanish": "...Has venido. La promesa que no pude cumplir... me ata aquí.",
						"vietnamese": "...Ngươi đã đến. Lời thề ta không giữ được... nó đã trói buộc ta ở đây.",
						"thai": "...มาแล้วสินะ คำสาบานที่มิอาจรักษา... มันผูกมัดฉันไว้ที่นี่",
						"hindi": "...तुम आ गए। वह वादा जिसे मैं निभा नहीं सका... उसने मुझे यहाँ बाँध रखा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은… Lin?",
						"english": "You are... Lin?",
						"japanese": "あなたは… リン？",
						"chinese": "你是……林？",
						"french": "Vous êtes... Lin ?",
						"spanish": "¿Eres... Lin?",
						"vietnamese": "Ngươi là... Lin?",
						"thai": "คุณคือ... หลิน?",
						"hindi": "तुम... लिन हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "매일 밤… 악몽을 꿔. 맹세를 저버린 날의 악몽.",
						"english": "Every night... I have nightmares. Nightmares of the day I broke my vow.",
						"japanese": "毎晩… 悪夢を見る。誓いを破った日の悪夢を。",
						"chinese": "每晚……我都会做噩梦。违背誓言那天的噩梦。",
						"french": "Chaque nuit... je fais des cauchemars. Des cauchemars du jour où j'ai rompu mon serment.",
						"spanish": "Cada noche... tengo pesadillas. Pesadillas del día en que rompí mi promesa.",
						"vietnamese": "Mỗi đêm... ta đều gặp ác mộng. Ác mộng về ngày ta đã phá vỡ lời thề.",
						"thai": "ทุกคืน... ฉันฝันร้าย ฝันร้ายถึงวันที่ฉันทำลายคำสาบาน",
						"hindi": "हर रात... मुझे बुरे सपने आते हैं। उस दिन के बुरे सपने जब मैंने अपना वादा तोड़ा था।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "무슨 맹세였는데?",
						"english": "What kind of vow was it?",
						"japanese": "どんな誓いだったんだ？",
						"chinese": "是什么誓言？",
						"french": "Quel genre de serment était-ce ?",
						"spanish": "¿Qué tipo de promesa era?",
						"vietnamese": "Lời thề đó là gì?",
						"thai": "คำสาบานอะไร?",
						"hindi": "वह कैसा वादा था?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그 애를 지키겠다는 맹세. 보스의… 유일한 딸을.",
						"english": "A vow to protect her. The Boss's... only daughter.",
						"japanese": "彼女を守るという誓い。ボスの…唯一の娘を。",
						"chinese": "保护她的誓言。老板……唯一的女儿。",
						"french": "Un serment de la protéger. La fille unique du Boss...",
						"spanish": "Un juramento para protegerla. La... única hija del Jefe.",
						"vietnamese": "Lời thề bảo vệ cô bé. Con gái độc nhất của Boss...",
						"thai": "คำสาบานว่าจะปกป้องเธอ ลูกสาวคนเดียวของบอส...",
						"hindi": "उसे बचाने की कसम। बॉस की... इकलौती बेटी को।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "가끔… 낡은 오르골 소리가 들리는 것 같아. 희미하게.",
						"english": "Sometimes... I feel like I hear an old music box. Faintly.",
						"japanese": "時々…古いオルゴールの音が聞こえる気がする。かすかに。",
						"chinese": "有时……我好像听到了旧八音盒的声音。模糊地。",
						"french": "Parfois... j'ai l'impression d'entendre une vieille boîte à musique. Faiblement.",
						"spanish": "A veces... creo escuchar una vieja caja de música. Débilmente.",
						"vietnamese": "Đôi khi... tôi cứ ngỡ nghe thấy tiếng hộp nhạc cũ. Mờ nhạt.",
						"thai": "บางครั้ง...เหมือนได้ยินเสียงกล่องดนตรีเก่าๆ แผ่วเบา",
						"hindi": "कभी-कभी... मुझे एक पुराने संगीत बॉक्स की आवाज़ सुनाई देती है। हल्की सी।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그 애는… 보스의 전부였어. 빛 같은 존재.",
						"english": "She was... the Boss's everything. A being like light.",
						"japanese": "彼女は…ボスの全てだった。光のような存在。",
						"chinese": "她……是老板的一切。像光一样的存在。",
						"french": "Elle était... tout pour le Boss. Une existence lumineuse.",
						"spanish": "Ella era... todo para el Jefe. Un ser como la luz.",
						"vietnamese": "Cô bé... là tất cả của Boss. Một sự tồn tại như ánh sáng.",
						"thai": "เธอคือ...ทุกสิ่งทุกอย่างของบอส เป็นเหมือนแสงสว่าง",
						"hindi": "वह... बॉस का सब कुछ थी। प्रकाश जैसी एक हस्ती।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "딸…?",
						"english": "Daughter...?",
						"japanese": "娘…？",
						"chinese": "女儿……？",
						"french": "Fille... ?",
						"spanish": "¿Hija...?",
						"vietnamese": "Con gái...?",
						"thai": "ลูกสาว...?",
						"hindi": "बेटी...?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "벽 한쪽에 오래된 낙서가 보였다. 아버지의 손을 잡은 어린 소녀.",
						"english": "An old drawing was visible on one side of the wall. A young girl holding her father's hand.",
						"japanese": "壁の片隅に古い落書きが見えた。父親の手を握る幼い少女。",
						"chinese": "墙的一侧看到了旧涂鸦。一个小女孩牵着她父亲的手。",
						"french": "Un vieux gribouillis était visible sur un pan de mur. Une jeune fille tenant la main de son père.",
						"spanish": "Un viejo garabato era visible en una pared. Una niña pequeña tomando la mano de su padre.",
						"vietnamese": "Một bức vẽ cũ trên tường. Một cô bé nắm tay cha mình.",
						"thai": "เห็นภาพวาดเก่าๆ บนผนัง เด็กหญิงตัวเล็กๆ จับมือพ่อของเธอ",
						"hindi": "दीवार के एक तरफ एक पुरानी कलाकृति दिखाई दी। एक छोटी लड़की अपने पिता का हाथ पकड़े हुए।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…이게 그 딸인가.",
						"english": "...Is this that daughter?",
						"japanese": "…これがその娘なのか。",
						"chinese": "……这就是那个女儿吗？",
						"french": "...C'est elle, la fille ?",
						"spanish": "¿...Es esta la hija?",
						"vietnamese": "...Đây là cô con gái đó sao?",
						"thai": "...นี่คือลูกสาวคนนั้นเหรอ?",
						"hindi": "...क्या यह वही बेटी है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "그 애가 죽고… 보스는 변했어. 아탄이 됐지.",
						"english": "After she died... the Boss changed. Became Ahtan.",
						"japanese": "彼女が死んで…ボスは変わった。アタンになったんだ。",
						"chinese": "她死了之后……老板变了。变成了阿坦。",
						"french": "Après sa mort... le Boss a changé. Il est devenu Ahtan.",
						"spanish": "Después de que ella murió... el Jefe cambió. Se convirtió en Ahtan.",
						"vietnamese": "Sau khi cô bé mất... Boss đã thay đổi. Trở thành Ahtan.",
						"thai": "หลังจากเธอตาย...บอสก็เปลี่ยนไป กลายเป็นอาทาน",
						"hindi": "उसकी मौत के बाद... बॉस बदल गया। अहतन बन गया।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "우린 그저… 아무것도 할 수 없었어.",
						"english": "We just... couldn't do anything.",
						"japanese": "俺たちはただ…何もできなかった。",
						"chinese": "我们只是……什么也做不了。",
						"french": "Nous... n'avons rien pu faire.",
						"spanish": "Nosotros... simplemente no pudimos hacer nada.",
						"vietnamese": "Chúng tôi chỉ là... không thể làm gì được.",
						"thai": "เราแค่...ทำอะไรไม่ได้เลย",
						"hindi": "हम बस... कुछ नहीं कर पाए।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그 죄책감이 당신을 여기 묶어 뒀다고?",
						"english": "That guilt has kept you tied here?",
						"japanese": "その罪悪感があなたをここに縛り付けているのか？",
						"chinese": "那份罪恶感把你困在这里了吗？",
						"french": "Cette culpabilité vous a retenu ici ?",
						"spanish": "¿Esa culpa te ha mantenido atado aquí?",
						"vietnamese": "Nỗi ám ảnh đó đã giữ chân anh ở đây sao?",
						"thai": "ความรู้สึกผิดนั้นผูกมัดคุณไว้ที่นี่หรือ?",
						"hindi": "क्या उस अपराधबोध ने तुम्हें यहाँ बाँध रखा है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 폐허에서… 나는 매일 벌을 받고 있어. 끝없는 악몽 속에서.",
						"english": "In these ruins... I'm punished every day. In an endless nightmare.",
						"japanese": "この廃墟で…俺は毎日罰を受けている。終わりのない悪夢の中で。",
						"chinese": "在这片废墟中……我每天都在受罚。在无尽的噩梦中。",
						"french": "Dans ces ruines... je suis puni chaque jour. Dans un cauchemar sans fin.",
						"spanish": "En estas ruinas... soy castigado cada día. En una pesadilla sin fin.",
						"vietnamese": "Trong đống đổ nát này... tôi bị trừng phạt mỗi ngày. Trong một cơn ác mộng không hồi kết.",
						"thai": "ในซากปรักหักพังเหล่านี้...ฉันถูกลงโทษทุกวัน ในฝันร้ายที่ไม่มีที่สิ้นสุด",
						"hindi": "इन खंडहरों में... मुझे हर दिन सज़ा मिलती है। एक अंतहीन दुःस्वप्न में।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "너희도… 그 애의 복수에 휘말린 거야.",
						"english": "You too... are caught in her revenge.",
						"japanese": "君たちも… 彼女の復讐に巻き込まれたのか。",
						"chinese": "你们也… 被卷入了她的复仇之中吗。",
						"french": "Vous aussi… vous êtes mêlés à sa vengeance.",
						"spanish": "Ustedes también... están envueltos en su venganza.",
						"vietnamese": "Các ngươi cũng… bị cuốn vào sự trả thù của cô ấy sao.",
						"thai": "พวกเจ้าก็… ถูกดึงเข้าไปพัวพันกับการแก้แค้นของนางสินะ",
						"hindi": "तुम भी… उसकी प्रतिशोध में फँस गए।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폐건물 가장 깊은 곳. 맹세의 그림자가 실체를 드러냈다.",
						"english": "Deepest part of the abandoned building. The Shadow of the Oath revealed its true form.",
						"japanese": "廃墟の最深部。誓いの影がその実体を現した。",
						"chinese": "废弃建筑最深处。誓约之影露出了真面目。",
						"french": "Au plus profond du bâtiment abandonné. L'Ombre du Serment a révélé sa véritable forme.",
						"spanish": "La parte más profunda del edificio abandonado. La Sombra del Juramento reveló su verdadera forma.",
						"vietnamese": "Nơi sâu nhất của tòa nhà bỏ hoang. Bóng tối của Lời thề đã lộ diện.",
						"thai": "ส่วนลึกที่สุดของอาคารร้าง เงาแห่งคำสาบานได้เผยตัวตนที่แท้จริงออกมา",
						"hindi": "परित्यक्त इमारत का सबसे गहरा हिस्सा। शपथ की छाया ने अपना असली रूप प्रकट किया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…누가 감히 이 땅을 침범하는가.",
						"english": "...Who dares invade this land?",
						"japanese": "…誰がこの地を侵すというのか。",
						"chinese": "…何人敢擅闯此地？",
						"french": "...Qui ose envahir cette terre ?",
						"spanish": "...¿Quién se atreve a invadir esta tierra?",
						"vietnamese": "...Kẻ nào dám xâm phạm vùng đất này?",
						"thai": "…ใครบังอาจรุกล้ำดินแดนนี้",
						"hindi": "…कौन इस भूमि पर आक्रमण करने की हिम्मत करता है?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 폐허의 수호자인가.",
						"english": "Are you... the guardian of these ruins?",
						"japanese": "お前が… この廃墟の守護者か。",
						"chinese": "你是… 这片废墟的守护者吗？",
						"french": "Es-tu… le gardien de ces ruines ?",
						"spanish": "¿Eres… el guardián de estas ruinas?",
						"vietnamese": "Ngươi… là người bảo hộ của phế tích này sao?",
						"thai": "เจ้าคือ… ผู้พิทักษ์ซากปรักหักพังเหล่านี้หรือ",
						"hindi": "क्या तुम… इन खंडहरों के संरक्षक हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "지키지 못한 맹세는… 파멸을 부를 뿐.",
						"english": "An oath unkept... only brings ruin.",
						"japanese": "守れなかった誓いは… 破滅を招くだけだ。",
						"chinese": "未能遵守的誓约… 只会招致毁灭。",
						"french": "Un serment non tenu… n'apporte que la ruine.",
						"spanish": "Un juramento incumplido… solo trae ruina.",
						"vietnamese": "Lời thề không giữ được… chỉ mang đến sự hủy diệt.",
						"thai": "คำสาบานที่มิได้รักษาไว้… มีแต่จะนำพาความพินาศมาให้",
						"hindi": "न निभाई गई शपथ… केवल विनाश लाती है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "맹세의 그림자가 탐험대를 집어삼켰다.",
						"english": "The Shadow of the Oath devoured the expedition team.",
						"japanese": "誓いの影が探検隊を飲み込んだ。",
						"chinese": "誓约之影吞噬了探险队。",
						"french": "L'Ombre du Serment a dévoré l'équipe d'expédition.",
						"spanish": "La Sombra del Juramento devoró al equipo de expedición.",
						"vietnamese": "Bóng tối của Lời thề đã nuốt chửng đội thám hiểm.",
						"thai": "เงาแห่งคำสาบานได้กลืนกินทีมสำรวจ",
						"hindi": "शपथ की छाया ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 진정한 고통을 알게 될 것이다.",
						"english": "Fools... you will know true suffering.",
						"japanese": "愚かな者たちめ… 真の苦痛を知るがいい。",
						"chinese": "愚蠢的东西… 你们将尝到真正的痛苦。",
						"french": "Imbéciles… vous connaîtrez la vraie souffrance.",
						"spanish": "Necios… conocerán el verdadero sufrimiento.",
						"vietnamese": "Lũ ngu ngốc… các ngươi sẽ biết thế nào là đau khổ thực sự.",
						"thai": "พวกโง่เขลา… พวกเจ้าจะได้รู้ถึงความทุกข์ทรมานที่แท้จริง",
						"hindi": "मूर्खों… तुम असली पीड़ा जानोगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…여기서 멈출 순 없어.",
						"english": "...I can't stop here.",
						"japanese": "…ここで止まるわけにはいかない。",
						"chinese": "…我不能止步于此。",
						"french": "...Je ne peux pas m'arrêter ici.",
						"spanish": "...No puedo detenerme aquí.",
						"vietnamese": "...Tôi không thể dừng lại ở đây.",
						"thai": "...ฉันหยุดอยู่แค่นี้ไม่ได้",
						"hindi": "...मैं यहाँ रुक नहीं सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이건… 시작에 불과해. 그 맹세는… 끝나지 않는다.",
						"english": "...This is... merely the beginning. That oath... will not end.",
						"japanese": "…これは… 始まりに過ぎない。その誓いは… 終わらない。",
						"chinese": "…这… 仅仅是开始。那个誓约… 永不终结。",
						"french": "...Ce n'est… qu'un début. Ce serment… ne prendra pas fin.",
						"spanish": "...Esto es… solo el comienzo. Ese juramento… no terminará.",
						"vietnamese": "...Đây… chỉ là khởi đầu. Lời thề đó… sẽ không bao giờ kết thúc.",
						"thai": "…นี่มัน… เป็นเพียงแค่จุดเริ่มต้นเท่านั้น คำสาบานนั้น… จะไม่มีวันสิ้นสุด",
						"hindi": "…यह… केवल शुरुआत है। वह शपथ… कभी खत्म नहीं होगी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "대체… 무엇을 말하는 거지?",
						"english": "What on earth... are you talking about?",
						"japanese": "一体… 何を言っているんだ？",
						"chinese": "到底… 在说什么？",
						"french": "Mais… de quoi parles-tu ?",
						"spanish": "¿Qué… estás diciendo?",
						"vietnamese": "Rốt cuộc… ngươi đang nói cái gì vậy?",
						"thai": "นี่มัน… กำลังพูดถึงอะไรกันแน่",
						"hindi": "आखिर… तुम क्या कह रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "과거의 무게는 그렇게 새로운 미스터리를 남겼다. 아직 밝혀지지 않은 진실이 존재했다.",
						"english": "The weight of the past left a new mystery. An unrevealed truth still existed.",
						"japanese": "過去の重みが新たな謎を残した。まだ明かされていない真実が存在していた。",
						"chinese": "过去的重负留下了新的谜团。仍有未被揭示的真相存在。",
						"french": "Le poids du passé laissa un nouveau mystère. Une vérité non révélée existait encore.",
						"spanish": "El peso del pasado dejó un nuevo misterio. Una verdad aún no revelada existía.",
						"vietnamese": "Gánh nặng của quá khứ đã để lại một bí ẩn mới. Một sự thật chưa được tiết lộ vẫn còn tồn tại.",
						"thai": "ภาระของอดีตได้ทิ้งปริศนาใหม่ไว้ ความจริงที่ยังไม่ถูกเปิดเผยยังคงมีอยู่",
						"hindi": "अतीत के बोझ ने एक नया रहस्य छोड़ दिया। एक अनकही सच्चाई अभी भी मौजूद थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"낡은 폐건물, 시간의 흔적이 켜켜이 쌓인 곳.",
			"지키지 못한 맹세는 죄책감의 그림자가 되어.",
			"악몽처럼 되살아나는 과거. 그 비극의 중심에…",
			"한없이 덧없었던 어린 생명의 흔적이 있었다."
		],
		"english": [
			"An old, derelict building, where traces of time have accumulated.",
			"A broken vow becomes the shadow of guilt.",
			"The past, relived like a nightmare. At the heart of that tragedy...",
			"There were traces of a fragile young life, endlessly fleeting."
		],
		"japanese": [
			"廃墟となった建物、時間の痕跡が積み重なった場所。",
			"守れなかった誓いは、罪悪感の影となる。",
			"悪夢のように蘇る過去。その悲劇の中心に…",
			"限りなく儚かった幼い命の痕跡があった。"
		],
		"chinese": [
			"废弃的老建筑，时间在这里层层堆积。",
			"未能遵守的誓言，化作了愧疚的阴影。",
			"噩梦般重现的过去。在那场悲剧的中心……",
			"曾有一个无比脆弱的幼小生命，留下痕迹。"
		],
		"french": [
			"Un bâtiment abandonné, où les marques du temps se sont accumulées.",
			"Un serment brisé devient l'ombre de la culpabilité.",
			"Le passé, qui revient comme un cauchemar. Au cœur de cette tragédie...",
			"Il y avait les traces d'une jeune vie éphémère."
		],
		"spanish": [
			"Un edificio antiguo y abandonado, donde las huellas del tiempo se han acumulado.",
			"Una promesa incumplida se convierte en la sombra de la culpa.",
			"El pasado, que revive como una pesadilla. En el centro de esa tragedia...",
			"Había rastros de una joven vida infinitamente efímera."
		],
		"vietnamese": [
			"Một tòa nhà bỏ hoang cũ kỹ, nơi dấu vết thời gian chồng chất.",
			"Lời thề không giữ được trở thành bóng ma của tội lỗi.",
			"Quá khứ tái hiện như một cơn ác mộng. Ở trung tâm của bi kịch đó...",
			"Có dấu vết của một sinh mệnh trẻ thơ vô cùng phù du."
		],
		"thai": [
			"ตึกร้างเก่าแก่ สถานที่ซึ่งร่องรอยแห่งกาลเวลาได้ทับถมกัน",
			"คำสาบานที่มิอาจรักษา กลายเป็นเงาแห่งความรู้สึกผิด",
			"อดีตที่หวนคืนมาเหมือนฝันร้าย ณ ใจกลางโศกนาฏกรรมนั้น...",
			"มีร่องรอยของชีวิตวัยเยาว์ที่เปราะบางและเลือนหายไป"
		],
		"hindi": [
			"एक पुरानी, ​​परित्यक्त इमारत, जहाँ समय के निशान जमा हो गए हैं।",
			"एक टूटा हुआ वादा, अपराधबोध की परछाई बन जाता है।",
			"अतीत, एक दुःस्वप्न की तरह फिर से जीवित हो उठा। उस त्रासदी के केंद्र में...",
			"एक अनन्त रूप से क्षणभंगुर, नन्हे जीवन के निशान थे।"
		]
	}
} as const;
