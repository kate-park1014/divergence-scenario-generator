export const scenario_snowy_fjor_1_02 = {
	"scenario_id": "snowy_fjor_1_02",
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
					"content": {
						"korean": "차가운 바람이 고대 폐허의 돌 틈을 할퀴었다. 잊힌 왕국의 잔해만 남았다.",
						"english": "A cold wind clawed through the cracks of the ancient ruins. Only the remnants of a forgotten kingdom remained.",
						"japanese": "冷たい風が古代遺跡の石の隙間を吹き抜ける。忘れ去られた王国の残骸だけが残っていた。",
						"chinese": "寒风刮过古老废墟的石缝。只剩下被遗忘王国的残骸。",
						"french": "Un vent froid s'engouffrait dans les fissures des ruines antiques. Seuls les vestiges d'un royaume oublié subsistaient.",
						"spanish": "Un viento frío arañaba las grietas de las ruinas antiguas. Solo quedaban los vestigios de un reino olvidado.",
						"vietnamese": "Gió lạnh rít qua kẽ đá của phế tích cổ xưa. Chỉ còn lại tàn tích của một vương quốc bị lãng quên.",
						"thai": "ลมหนาวพัดผ่านรอยแยกของซากปรักหักพังโบราณ เหลือเพียงซากของอาณาจักรที่ถูกลืมเลือน",
						"hindi": "एक ठंडी हवा प्राचीन खंडहरों की दरारों से गुज़री। एक भूले हुए साम्राज्य के अवशेष ही बचे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기 어딘가에 유물이 있을 텐데...",
						"english": "The artifact must be here somewhere...",
						"japanese": "このどこかに、遺物があるはずだが...",
						"chinese": "遗物一定在这里的某个地方...",
						"french": "L'artefact doit être ici quelque part...",
						"spanish": "El artefacto debe estar por aquí...",
						"vietnamese": "Cổ vật chắc phải ở đâu đó quanh đây...",
						"thai": "สิ่งประดิษฐ์ต้องอยู่ที่นี่สักแห่ง...",
						"hindi": "कलाकृति यहीं कहीं होनी चाहिए..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "쓸데없는 걸 찾는군.",
						"english": "Searching for something useless, are we?",
						"japanese": "無駄なものを探しているようだな。",
						"chinese": "你在找些没用的东西。",
						"french": "Vous cherchez quelque chose d'inutile, n'est-ce pas ?",
						"spanish": "Buscas algo inútil.",
						"vietnamese": "Đang tìm thứ vô dụng à.",
						"thai": "กำลังหาสิ่งที่ไร้ประโยชน์อยู่สินะ",
						"hindi": "कुछ बेकार की चीज़ ढूंढ रहे हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누구냐.",
						"english": "Who are you?",
						"japanese": "誰だ。",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 폐허를 떠도는 브란이다. 너희는 여기서 길을 잃었군.",
						"english": "I am Bran, who wanders these ruins. You are lost here.",
						"japanese": "この廃墟をさまようブランだ。お前たちはここで道に迷ったようだな。",
						"chinese": "我是布兰，游荡在这片废墟中。你们在这里迷路了。",
						"french": "Je suis Bran, celui qui erre dans ces ruines. Vous êtes perdus ici.",
						"spanish": "Soy Bran, quien deambula por estas ruinas. Están perdidos aquí.",
						"vietnamese": "Ta là Bran, kẻ lang thang trong phế tích này. Các ngươi đã lạc lối ở đây.",
						"thai": "ข้าคือแบรน ผู้ร่อนเร่อยู่ในซากปรักหักพังแห่งนี้ พวกเจ้าหลงทางที่นี่สินะ",
						"hindi": "मैं ब्रान हूँ, जो इन खंडहरों में भटकता है। तुम यहाँ भटक गए हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "이런 걸 찾는 건가? '맹세에 얽매인 자들의 저주받은 유물'.",
						"english": "Are you looking for something like this? 'The Cursed Artifact of Those Bound by Oath'.",
						"japanese": "こんなものを探しているのか？『誓いに縛られし者たちの呪われた遺物』を。",
						"chinese": "你在找这样的东西吗？“受誓言束缚者的诅咒遗物”。",
						"french": "Cherchez-vous quelque chose comme ça ? « L'Artefact Maudit de Ceux Liés par un Serment ».",
						"spanish": "¿Buscan algo como esto? 'El Artefacto Maldito de los Atados por un Juramento'.",
						"vietnamese": "Các ngươi đang tìm thứ này à? 'Cổ vật bị nguyền rủa của những kẻ bị ràng buộc bởi lời thề'.",
						"thai": "กำลังหาสิ่งนี้อยู่หรือเปล่า? 'สิ่งประดิษฐ์ต้องสาปของผู้ที่ผูกพันด้วยคำสาบาน'",
						"hindi": "क्या तुम ऐसी कोई चीज़ ढूंढ रहे हो? 'शपथ से बंधे लोगों की शापित कलाकृति'।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "브란이 끊임없이 얼음 서리가 맺힌 낡은 검을 꺼내 보였다. 검은 기묘한 룬 문양으로 가득했다.",
						"english": "Bran drew an old sword, constantly covered in ice frost. The blade was filled with strange runic patterns.",
						"japanese": "ブランは常に氷霜に覆われた古い剣を引き抜いた。剣には奇妙なルーン模様が刻まれていた。",
						"chinese": "布兰抽出了一把老旧的剑，上面不断结着冰霜。剑身上刻满了奇特的符文。",
						"french": "Bran dégaina une vieille épée, constamment recouverte de givre. La lame était remplie d'étranges motifs runiques.",
						"spanish": "Bran desenvainó una espada vieja, cubierta constantemente de escarcha de hielo. La hoja estaba llena de extraños patrones rúnicos.",
						"vietnamese": "Bran rút ra một thanh kiếm cũ, liên tục phủ đầy băng giá. Lưỡi kiếm đầy những hoa văn rune kỳ lạ.",
						"thai": "บรานชักดาบเก่าแก่ที่ปกคลุมไปด้วยน้ำแข็งและน้ำค้างแข็งออกมา ดาบนั้นเต็มไปด้วยลวดลายรูนแปลกประหลาด",
						"hindi": "ब्रैन ने एक पुरानी तलवार निकाली, जो लगातार बर्फ से ढकी थी। तलवार अजीबोगरीब रनिक पैटर्न से भरी थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "그게 뭔데.",
						"english": "What is it?",
						"japanese": "それは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì?",
						"thai": "นั่นอะไร?",
						"hindi": "वह क्या है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "왕의 배신. 오래된 맹세를 깨뜨린 자의 대가다.",
						"english": "The king's betrayal. The price for breaking an ancient vow.",
						"japanese": "王の裏切り。古き誓いを破った者の代償だ。",
						"chinese": "国王的背叛。那是背弃古老誓言者的代价。",
						"french": "La trahison du roi. Le prix à payer pour avoir brisé un ancien serment.",
						"spanish": "La traición del rey. El precio por romper un antiguo juramento.",
						"vietnamese": "Sự phản bội của nhà vua. Cái giá phải trả cho kẻ đã phá vỡ lời thề cổ xưa.",
						"thai": "การทรยศของกษัตริย์ ค่าตอบแทนสำหรับผู้ที่ละเมิดคำสาบานโบราณ",
						"hindi": "राजा का विश्वासघात। एक प्राचीन प्रतिज्ञा तोड़ने वाले की कीमत।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "옛 왕국은 번영했다. 위대한 맹세로 뭉쳐 있었지.",
						"english": "The old kingdom prospered. United by a great vow.",
						"japanese": "古き王国は繁栄した。偉大な誓いによって結ばれていた。",
						"chinese": "古老的王国曾繁荣昌盛。因一个伟大的誓言而团结。",
						"french": "L'ancien royaume a prospéré. Uni par un grand serment.",
						"spanish": "El antiguo reino prosperó. Unido por un gran juramento.",
						"vietnamese": "Vương quốc cổ xưa từng thịnh vượng. Đoàn kết bởi một lời thề vĩ đại.",
						"thai": "อาณาจักรโบราณรุ่งเรือง รวมเป็นหนึ่งด้วยคำสาบานอันยิ่งใหญ่",
						"hindi": "प्राचीन साम्राज्य समृद्ध हुआ। एक महान प्रतिज्ञा से एकजुट।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "근데 왜 몰락했어?",
						"english": "But why did it fall?",
						"japanese": "でも、なぜ滅びたんだ？",
						"chinese": "但它为什么会陨落？",
						"french": "Mais pourquoi est-il tombé ?",
						"spanish": "¿Pero por qué cayó?",
						"vietnamese": "Nhưng tại sao nó lại sụp đổ?",
						"thai": "แต่ทำไมมันถึงล่มสลาย?",
						"hindi": "लेकिन वह क्यों गिरा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왕이 맹세를 깼다. 힘을 위해서. 대가는 가혹했지.",
						"english": "The king broke the vow. For power. The price was harsh.",
						"japanese": "王は誓いを破った。力を求めて。その代償は過酷だった。",
						"chinese": "国王背弃了誓言。为了力量。代价是残酷的。",
						"french": "Le roi a brisé le serment. Pour le pouvoir. Le prix fut sévère.",
						"spanish": "El rey rompió el juramento. Por poder. El precio fue cruel.",
						"vietnamese": "Nhà vua đã phá vỡ lời thề. Vì quyền lực. Cái giá phải trả thật nghiệt ngã.",
						"thai": "กษัตริย์ละเมิดคำสาบาน เพื่ออำนาจ ค่าตอบแทนนั้นโหดร้าย",
						"hindi": "राजा ने प्रतिज्ञा तोड़ी। शक्ति के लिए। कीमत बहुत कठोर थी।"
					},
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "온 땅이 얼어붙고, 영혼들은 폭풍 속에 갇혔다.",
						"english": "The whole land froze, and souls were trapped in the storm.",
						"japanese": "全地が凍りつき、魂は嵐の中に閉じ込められた。",
						"chinese": "整个大地被冰封，灵魂被困在暴风中。",
						"french": "Toute la terre a gelé, et les âmes ont été piégées dans la tempête.",
						"spanish": "Toda la tierra se congeló, y las almas quedaron atrapadas en la tormenta.",
						"vietnamese": "Cả vùng đất đóng băng, và các linh hồn bị mắc kẹt trong cơn bão.",
						"thai": "แผ่นดินทั้งหมดถูกแช่แข็ง และวิญญาณถูกกักขังอยู่ในพายุ",
						"hindi": "पूरी भूमि जम गई, और आत्माएँ तूफान में फंस गईं।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…맹세의 폭풍이 그거였어?",
						"english": "...Was that the Storm of Vows?",
						"japanese": "…それが誓いの嵐だったのか？",
						"chinese": "……那就是誓言风暴？",
						"french": "...C'était ça, la Tempête des Serments ?",
						"spanish": "...¿Era esa la Tormenta de los Juramentos?",
						"vietnamese": "...Đó là Bão Thề Nguyền sao?",
						"thai": "...นั่นคือพายุแห่งคำสาบานหรือ?",
						"hindi": "...क्या वह प्रतिज्ञाओं का तूफान था?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "사람들은 폭풍이 영혼들의 안식처라고 믿었지.",
						"english": "People believed the storm was a resting place for souls.",
						"japanese": "人々は嵐が魂の安息の地だと信じていた。",
						"chinese": "人们曾相信那风暴是灵魂的安息之所。",
						"french": "Les gens croyaient que la tempête était un lieu de repos pour les âmes.",
						"spanish": "La gente creía que la tormenta era un lugar de descanso para las almas.",
						"vietnamese": "Mọi người tin rằng cơn bão là nơi yên nghỉ của các linh hồn.",
						"thai": "ผู้คนเชื่อว่าพายุคือสถานที่พักผ่อนของวิญญาณ",
						"hindi": "लोगों का मानना था कि तूफान आत्माओं के लिए विश्राम स्थल था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "진실은 더 추악하다. 그건 배신자의 저주다.",
						"english": "The truth is uglier. It's the traitor's curse.",
						"japanese": "真実はもっと醜い。それは裏切り者の呪いだ。",
						"chinese": "真相更加丑恶。那是叛徒的诅咒。",
						"french": "La vérité est plus laide. C'est la malédiction du traître.",
						"spanish": "La verdad es más fea. Es la maldición del traidor.",
						"vietnamese": "Sự thật thì tồi tệ hơn. Đó là lời nguyền của kẻ phản bội.",
						"thai": "ความจริงนั้นน่าเกลียดกว่า มันคือคำสาปของคนทรยศ",
						"hindi": "सच्चाई और भी बदसूरत है। यह गद्दार का अभिशाप है।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "저주….",
						"english": "A curse...",
						"japanese": "呪い…",
						"chinese": "诅咒……",
						"french": "Une malédiction...",
						"spanish": "Una maldición...",
						"vietnamese": "Lời nguyền...",
						"thai": "คำสาป...",
						"hindi": "एक शाप..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이 검처럼, 맹세에 묶인 자들의 분노가 폭풍이 된 거지.",
						"english": "Like this sword, the rage of those bound by oaths became a storm.",
						"japanese": "この剣のように、誓いに縛られた者たちの怒りが嵐になったのだ。",
						"chinese": "如同这把剑，被誓言束缚之人的愤怒化作了风暴。",
						"french": "Comme cette épée, la fureur de ceux liés par des serments est devenue une tempête.",
						"spanish": "Como esta espada, la ira de aquellos atados por juramentos se convirtió en una tormenta.",
						"vietnamese": "Như thanh kiếm này, cơn thịnh nộ của những kẻ bị ràng buộc bởi lời thề đã hóa thành bão tố.",
						"thai": "เฉกเช่นดาบเล่มนี้ ความโกรธแค้นของผู้ที่ถูกผูกมัดด้วยคำสาบานได้กลายเป็นพายุ",
						"hindi": "इस तलवार की तरह, प्रतिज्ञाओं से बंधे हुए लोगों का क्रोध एक तूफान बन गया है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 그걸 멈출 방법도 있어?",
						"english": "Then is there a way to stop it?",
						"japanese": "では、それを止める方法はあるのか？",
						"chinese": "那么，有办法阻止它吗？",
						"french": "Alors, y a-t-il un moyen de l'arrêter ?",
						"spanish": "¿Entonces hay una forma de detenerlo?",
						"vietnamese": "Vậy có cách nào để ngăn chặn nó không?",
						"thai": "แล้วมีวิธีหยุดมันไหม?",
						"hindi": "तो क्या इसे रोकने का कोई तरीका है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "…진실을 찾는다고 세상이 바뀌진 않아. 그저 고통을 확인할 뿐.",
						"english": "...Seeking the truth won't change the world. It merely confirms the pain.",
						"japanese": "…真実を求めても世界は変わらない。ただ苦痛を確認するだけだ。",
						"chinese": "……寻找真相并不能改变世界。只会确认痛苦。",
						"french": "...Chercher la vérité ne changera pas le monde. Cela ne fait que confirmer la douleur.",
						"spanish": "...Buscar la verdad no cambiará el mundo. Solo confirma el dolor.",
						"vietnamese": "...Tìm kiếm sự thật sẽ không thay đổi thế giới. Chỉ là xác nhận thêm nỗi đau mà thôi.",
						"thai": "…การแสวงหาความจริงไม่เปลี่ยนแปลงโลก มันแค่ยืนยันความเจ็บปวด",
						"hindi": "...सत्य की तलाश दुनिया को नहीं बदलेगी। यह केवल दर्द की पुष्टि करती है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "더 이상 깊이 들어가면 안 돼. 저주의 심장부에 가까워질수록….",
						"english": "Don't go any deeper. The closer you get to the heart of the curse...",
						"japanese": "これ以上深く進んではならない。呪いの核心に近づくほど…",
						"chinese": "不能再深入了。越是接近诅咒的心脏……",
						"french": "N'allez pas plus loin. Plus vous approchez du cœur de la malédiction...",
						"spanish": "No vayas más profundo. Cuanto más te acerques al corazón de la maldición...",
						"vietnamese": "Đừng đi sâu hơn nữa. Càng đến gần trung tâm lời nguyền...",
						"thai": "อย่าเข้าไปลึกกว่านี้อีก ยิ่งเข้าใกล้แกนกลางของคำสาปมากเท่าไร...",
						"hindi": "और गहरा मत जाओ। जितना तुम शाप के दिल के करीब जाओगे..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 봐야 해.",
						"english": "I can't stop. I must see the truth.",
						"japanese": "止められない。真実を見なければ。",
						"chinese": "无法停止。必须看到真相。",
						"french": "Je ne peux pas m'arrêter. Je dois voir la vérité.",
						"spanish": "No puedo parar. Debo ver la verdad.",
						"vietnamese": "Không thể dừng lại. Ta phải thấy sự thật.",
						"thai": "หยุดไม่ได้ ต้องเห็นความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच्चाई देखनी होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "맹세의 그림자는 모든 것을 집어삼킨다. 너희마저도.",
						"english": "The shadow of the oath devours everything. Even you.",
						"japanese": "誓いの影はすべてを飲み込む。お前たちさえも。",
						"chinese": "誓言的阴影吞噬一切。包括你们在内。",
						"french": "L'ombre du serment dévore tout. Même vous.",
						"spanish": "La sombra del juramento lo devora todo. Incluso a vosotros.",
						"vietnamese": "Bóng tối của lời thề nuốt chửng mọi thứ. Ngay cả các ngươi.",
						"thai": "เงาแห่งคำสาบานกลืนกินทุกสิ่ง แม้กระทั่งพวกเจ้า",
						"hindi": "प्रतिज्ञा की छाया सब कुछ निगल जाती है। तुम्हें भी।"
					},
					"emotion": "angry",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 돌아가라. 어리석은 복수는 아무것도 남기지 않아.",
						"english": "Turn back. Foolish revenge leaves nothing.",
						"japanese": "ここから引き返せ。愚かな復讐は何も残さない。",
						"chinese": "从这里回去。愚蠢的复仇一无所获。",
						"french": "Rebroussez chemin. Une vengeance insensée ne laisse rien.",
						"spanish": "Regresad. Una venganza estúpida no deja nada.",
						"vietnamese": "Hãy quay lại. Sự báo thù ngu ngốc không để lại gì cả.",
						"thai": "กลับไปซะ การแก้แค้นที่โง่เขลาไม่เหลืออะไรไว้",
						"hindi": "यहां से वापस जाओ। मूर्खतापूर्ण बदला कुछ भी नहीं छोड़ता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "…늦었어.",
						"english": "...It's too late.",
						"japanese": "…もう遅い。",
						"chinese": "……太迟了。",
						"french": "...C'est trop tard.",
						"spanish": "...Es demasiado tarde.",
						"vietnamese": "...Đã quá muộn rồi.",
						"thai": "...สายเกินไปแล้ว",
						"hindi": "...बहुत देर हो चुकी है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…이게 끝이 아니다. 맹세의 심장은… 아직 뛰고 있다.",
						"english": "...This is not the end. The heart of the oath... still beats.",
						"japanese": "…これで終わりではない。誓いの心臓は…まだ鼓動している。",
						"chinese": "……这还不是结束。誓言之心……仍在跳动。",
						"french": "...Ce n'est pas la fin. Le cœur du serment... bat encore.",
						"spanish": "...Este no es el final. El corazón del juramento... aún late.",
						"vietnamese": "…Đây không phải là kết thúc. Trái tim của lời thề… vẫn đang đập.",
						"thai": "…นี่ไม่ใช่จุดจบ หัวใจแห่งคำสาบาน…ยังคงเต้นอยู่",
						"hindi": "...यह अंत नहीं है। शपथ का दिल... अभी भी धड़क रहा है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라고?",
						"english": "Not the end?",
						"japanese": "終わりではないだと？",
						"chinese": "还没结束？",
						"french": "Pas la fin ?",
						"spanish": "¿No es el final?",
						"vietnamese": "Chưa kết thúc sao?",
						"thai": "ยังไม่จบหรือ?",
						"hindi": "अंत नहीं?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "결국, 빈손이군. 진실은 더 깊이 숨겨져 있어.",
						"english": "Empty-handed, after all. The truth is hidden deeper.",
						"japanese": "結局、手ぶらか。真実はもっと深く隠されている。",
						"chinese": "结果，一无所获。真相隐藏得更深。",
						"french": "Les mains vides, après tout. La vérité est cachée plus profondément.",
						"spanish": "Con las manos vacías, después de todo. La verdad está oculta más profundamente.",
						"vietnamese": "Cuối cùng, tay trắng. Sự thật còn ẩn giấu sâu hơn.",
						"thai": "ท้ายที่สุด ก็มือเปล่า ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "आखिरकार, खाली हाथ। सच्चाई और गहरी छिपी है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "폭풍은 잠시 잦아들었지만, 맹세의 그림자는 여전히 북부 전역에 드리워져 있었다. 또 다른 단서가 기다리고 있다.",
						"english": "The storm had abated for a moment, but the shadow of the oath still loomed over the entire North. Another clue awaits.",
						"japanese": "嵐は一時的に収まったが、誓いの影は依然として北全域に覆いかぶさっていた。別の手がかりが待っている。",
						"chinese": "风暴暂时平息，但誓言的阴影依然笼罩着整个北部。另一个线索正在等待。",
						"french": "La tempête s'était calmée un instant, mais l'ombre du serment planait toujours sur tout le Nord. Un autre indice attend.",
						"spanish": "La tormenta amainó por un momento, pero la sombra del juramento aún se cernía sobre todo el Norte. Otra pista espera.",
						"vietnamese": "Cơn bão tạm thời lắng xuống, nhưng bóng tối của lời thề vẫn bao trùm khắp miền Bắc. Một manh mối khác đang chờ đợi.",
						"thai": "พายุสงบลงชั่วขณะ แต่เงามืดแห่งคำสาบานยังคงปกคลุมทั่วภาคเหนือ เบาะแสอื่นกำลังรออยู่",
						"hindi": "तूफान एक पल के लिए थम गया था, लेकिन शपथ की छाया अभी भी पूरे उत्तर में मंडरा रही थी। एक और सुराग इंतजार कर रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "폐허의 가장 깊은 곳. 거대한 그림자가 길을 막았다. 저주받은 맹세의 수호자였다.",
						"english": "The deepest part of the ruins. A colossal shadow blocked the way. It was the guardian of the cursed oath.",
						"japanese": "廃墟の最深部。巨大な影が道を阻んだ。それは呪われた誓いの守護者だった。",
						"chinese": "废墟的最深处。一个巨大的影子挡住了去路。那是被诅咒誓言的守护者。",
						"french": "La partie la plus profonde des ruines. Une ombre colossale bloquait le chemin. C'était le gardien du serment maudit.",
						"spanish": "La parte más profunda de las ruinas. Una sombra colosal bloqueaba el camino. Era el guardián del juramento maldito.",
						"vietnamese": "Nơi sâu thẳm nhất của phế tích. Một bóng đen khổng lồ chặn đường. Đó là người bảo hộ của lời thề bị nguyền rủa.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพัง เงาขนาดมหึมาขวางทางอยู่ มันคือผู้พิทักษ์ของคำสาบานที่ถูกสาป",
						"hindi": "खंडहरों का सबसे गहरा हिस्सा। एक विशाल छाया ने रास्ता रोक दिया था। यह शापित प्रतिज्ञा का संरक्षक था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 감히 이곳을 더럽히는가.",
						"english": "Fools. How dare you defile this place?",
						"japanese": "愚かな者たち。よくもここを汚したな。",
						"chinese": "愚蠢的东西。竟敢玷污此地。",
						"french": "Imbéciles. Comment osez-vous souiller ce lieu ?",
						"spanish": "Necios. ¿Cómo osáis profanar este lugar?",
						"vietnamese": "Lũ ngu ngốc. Dám làm ô uế nơi này sao?",
						"thai": "พวกโง่เขลา บังอาจมาทำให้ที่นี่แปดเปื้อนได้อย่างไร",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई इस जगह को अपवित्र करने की?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가… 그 저주받은 맹세의 파수꾼이냐?",
						"english": "Are you... the keeper of that cursed oath?",
						"japanese": "お前が…あの呪われた誓いの番人か？",
						"chinese": "你就是……那诅咒誓言的守护者吗？",
						"french": "Es-tu... le gardien de ce serment maudit ?",
						"spanish": "¿Eres tú... el guardián de ese juramento maldito?",
						"vietnamese": "Ngươi… là người giữ lời thề bị nguyền rủa đó sao?",
						"thai": "เจ้าคือ... ผู้พิทักษ์คำสาบานที่ถูกสาปนั้นหรือ?",
						"hindi": "क्या तुम... उस शापित शपथ के रखवाले हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "저 자가… 진정한 폭풍의 수호자다.",
						"english": "That one... is the true Guardian of the Storm.",
						"japanese": "あの者が…真の嵐の守護者だ。",
						"chinese": "那家伙……才是真正的风暴守护者。",
						"french": "Celui-là... est le véritable Gardien de la Tempête.",
						"spanish": "Ese... es el verdadero Guardián de la Tormenta.",
						"vietnamese": "Hắn… là Người Bảo Vệ Bão Tố đích thực.",
						"thai": "ผู้นั้น... คือผู้พิทักษ์พายุที่แท้จริง",
						"hindi": "वह... तूफान का सच्चा रखवाला है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"direction": "down"
				},
				{
					"content": {
						"korean": "맹세를 깨뜨린 자들을 심판할 뿐이다. 너희도 곧 알게 될 것이다.",
						"english": "I merely judge those who broke the oath. You too shall soon know.",
						"japanese": "誓いを破りし者たちを裁くだけだ。お前たちもじきに知ることになるだろう。",
						"chinese": "我只是审判那些违背誓言之人。你们很快就会明白的。",
						"french": "Je ne fais que juger ceux qui ont brisé le serment. Vous le saurez bientôt vous aussi.",
						"spanish": "Solo juzgo a quienes rompieron el juramento. Vosotros también lo sabréis pronto.",
						"vietnamese": "Ta chỉ phán xét những kẻ phá vỡ lời thề. Ngươi cũng sẽ sớm biết thôi.",
						"thai": "ข้าเพียงแค่ตัดสินผู้ที่ทำลายคำสาบาน พวกเจ้าก็จะรู้เช่นกันในไม่ช้า",
						"hindi": "मैं केवल उन लोगों को न्याय देता हूँ जिन्होंने शपथ तोड़ी है। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "저주받은 맹세의 힘이 모든 것을 압도했다.",
						"english": "The power of the cursed oath overwhelmed everything.",
						"japanese": "呪われた誓いの力がすべてを圧倒した。",
						"chinese": "诅咒誓言的力量压倒了一切。",
						"french": "Le pouvoir du serment maudit a tout submergé.",
						"spanish": "El poder del juramento maldito lo abrumó todo.",
						"vietnamese": "Sức mạnh của lời thề bị nguyền rủa đã áp đảo mọi thứ.",
						"thai": "พลังแห่งคำสาบานที่ถูกสาปได้ครอบงำทุกสิ่ง",
						"hindi": "शापित शपथ की शक्ति ने सब कुछ अभिभूत कर दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진정한 고통을 알게 될 것이다.",
						"english": "Fools. You shall know true suffering.",
						"japanese": "愚かな者たち。真の苦痛を知ることになるだろう。",
						"chinese": "愚蠢之人。你们将会尝到真正的痛苦。",
						"french": "Imbéciles. Vous connaîtrez la vraie souffrance.",
						"spanish": "Necios. Conoceréis el verdadero sufrimiento.",
						"vietnamese": "Lũ ngu ngốc. Ngươi sẽ biết đau khổ thật sự.",
						"thai": "พวกโง่เขลา เจ้าจะต้องรู้จักความทรมานที่แท้จริง",
						"hindi": "मूर्खों। तुम सच्चे दुख को जानोगे।"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "봤지? 이 길의 끝은 파멸뿐이다.",
						"english": "You saw? This path leads only to ruin.",
						"japanese": "見たか？この道の終わりは破滅だけだ。",
						"chinese": "看到了吗？这条路的尽头只有毁灭。",
						"french": "Tu as vu ? Cette voie ne mène qu'à la ruine.",
						"spanish": "¿Lo viste? Este camino solo lleva a la ruina.",
						"vietnamese": "Thấy chưa? Con đường này chỉ dẫn đến sự hủy diệt.",
						"thai": "เห็นไหม? ปลายทางของเส้นทางนี้มีแต่ความพินาศ",
						"hindi": "देखा? इस राह का अंत केवल विनाश है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았다. 다시 돌아올 것이다.",
						"english": "...Not over yet. I'll be back.",
						"japanese": "…まだ終わっていない。また戻ってくる。",
						"chinese": "…还没结束。我还会回来的。",
						"french": "...Ce n'est pas encore fini. Je reviendrai.",
						"spanish": "...Aún no ha terminado. Volveré.",
						"vietnamese": "...Chưa kết thúc đâu. Ta sẽ trở lại.",
						"thai": "...ยังไม่จบแค่นี้หรอก ข้าจะกลับมาอีกครั้ง",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं वापस आऊँगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북부의 얼어붙은 폐허.",
			"고대의 맹세가 새겨진 유물을 찾아 나선 자들.",
			"그곳에서 만난 냉소적인 추적자 브란.",
			"왕의 배신, 그리고 저주받은 유물의 비밀이 드러난다."
		],
		"english": [
			"Frozen ruins of the North.",
			"Those who set out to find the artifact etched with an ancient oath.",
			"There, they met Bran, the cynical tracker.",
			"The king's betrayal, and the secret of the cursed artifact are revealed."
		],
		"japanese": [
			"北部の凍てつく廃墟。",
			"古の誓いが刻まれた遺物を探し求める者たち。",
			"そこで出会ったのは、皮肉屋の追跡者ブラン。",
			"王の裏切り、そして呪われた遺物の秘密が明らかになる。"
		],
		"chinese": [
			"北方的冰冻废墟。",
			"寻找刻有古老誓言的遗物之人。",
			"在那里，他们遇到了玩世不恭的追踪者布兰。",
			"国王的背叛，以及被诅咒遗物的秘密被揭示。"
		],
		"french": [
			"Les ruines gelées du Nord.",
			"Ceux qui sont partis à la recherche de l'artefact gravé d'un ancien serment.",
			"Là, ils rencontrèrent Bran, le traqueur cynique.",
			"La trahison du roi, et le secret de l'artefact maudit sont révélés."
		],
		"spanish": [
			"Ruinas heladas del Norte.",
			"Aquellos que partieron en busca del artefacto grabado con un juramento ancestral.",
			"Allí, se encontraron con Bran, el cínico rastreador.",
			"La traición del rey, y el secreto del artefacto maldito son revelados."
		],
		"vietnamese": [
			"Phế tích băng giá phương Bắc.",
			"Những người lên đường tìm kiếm cổ vật khắc ghi lời thề cổ xưa.",
			"Tại đó, họ gặp Bran, kẻ truy lùng hoài nghi.",
			"Sự phản bội của nhà vua, và bí mật của cổ vật bị nguyền rủa được tiết lộ."
		],
		"thai": [
			"ซากปรักหักพังอันเยือกแข็งทางเหนือ",
			"ผู้ที่ออกเดินทางเพื่อค้นหาสิ่งประดิษฐ์ที่จารึกคำสาบานโบราณ",
			"ที่นั่น พวกเขาได้พบกับแบรน นักแกะรอยผู้เย้ยหยัน",
			"การทรยศของกษัตริย์และความลับของสิ่งประดิษฐ์ต้องสาปได้ถูกเปิดเผย"
		],
		"hindi": [
			"उत्तर के जमे हुए खंडहर।",
			"वे जो प्राचीन शपथ से खुदे हुए कलाकृति की तलाश में निकले।",
			"वहाँ, वे ब्रान से मिले, एक निंदक शिकारी।",
			"राजा का विश्वासघात, और शापित कलाकृति का रहस्य उजागर होता है।"
		]
	}
} as const;
