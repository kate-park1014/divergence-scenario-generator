export const scenario_snowy_skaldswail_77_02 = {
	"scenario_id": "snowy_skaldswail_77_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"type": "speech",
					"content": {
						"korean": "희망을 속삭이는 노래가 멀리서 들려온다. 그러나 그 소리는 왜곡되어 있었다.",
						"english": "A song whispering hope echoes from afar. But its sound was distorted.",
						"japanese": "希望を囁く歌が遠くから聞こえる。しかし、その声は歪んでいた。",
						"chinese": "低语希望的歌声从远处传来。然而，那声音已被扭曲。",
						"french": "Une chanson murmurant l'espoir résonne de loin. Mais son son était déformé.",
						"spanish": "Una canción que susurra esperanza resuena desde lejos. Pero su sonido estaba distorsionado.",
						"vietnamese": "Một khúc ca thì thầm hy vọng vọng lại từ xa. Nhưng âm thanh đó đã bị bóp méo.",
						"thai": "บทเพลงที่กระซิบความหวังดังแว่วมาจากที่ไกล แต่เสียงนั้นบิดเบี้ยว",
						"hindi": "आशा फुसफुसाता हुआ एक गीत दूर से गूँजता है। लेकिन उसकी आवाज़ विकृत थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"content": {
						"korean": "드디어… 길을 찾은 것 같아.",
						"english": "Finally… I think I've found the way.",
						"japanese": "ついに…道を見つけたようだ。",
						"chinese": "终于…我好像找到路了。",
						"french": "Enfin… Je crois que j'ai trouvé le chemin.",
						"spanish": "Finalmente… creo que he encontrado el camino.",
						"vietnamese": "Cuối cùng… tôi nghĩ mình đã tìm thấy lối đi.",
						"thai": "ในที่สุด… ฉันคิดว่าฉันเจอทางแล้ว",
						"hindi": "आखिरकार… मुझे लगता है कि मुझे रास्ता मिल गया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "잠깐만. 이 노래… 어딘가 이상해.",
						"english": "Wait. This song… something's off.",
						"japanese": "待って。この歌…どこかおかしい。",
						"chinese": "等等。这首歌…有点不对劲。",
						"french": "Attends. Cette chanson… il y a quelque chose qui cloche.",
						"spanish": "Espera. Esta canción… algo anda mal.",
						"vietnamese": "Khoan đã. Bài hát này… có gì đó lạ.",
						"thai": "เดี๋ยวสิ เพลงนี้… มีอะไรแปลกๆ",
						"hindi": "रुको। यह गीत… कुछ अजीब है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "뭐가 이상해? 구원의 소리 같잖아!",
						"english": "What's off? It sounds like salvation!",
						"japanese": "何がおかしいの？救いの声みたいじゃない！",
						"chinese": "有什么不对劲？这听起来像是救赎之声啊！",
						"french": "Qu'est-ce qui cloche ? Ça sonne comme le salut !",
						"spanish": "¡Qué tiene de malo? ¡Suena a salvación!",
						"vietnamese": "Có gì lạ đâu? Nghe như tiếng gọi cứu rỗi mà!",
						"thai": "มีอะไรแปลก? มันฟังดูเหมือนเสียงแห่งความรอดนะ!",
						"hindi": "क्या अजीब है? यह तो मोक्ष की आवाज़ लगती है!"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너무… 달콤해. 이런 곳에서.",
						"english": "Too… sweet. In a place like this.",
						"japanese": "あまりにも…甘すぎる。こんな場所で。",
						"chinese": "太…甜了。在这种地方。",
						"french": "Trop… doux. Dans un endroit pareil.",
						"spanish": "Demasiado… dulce. En un lugar como este.",
						"vietnamese": "Quá… ngọt ngào. Ở một nơi như thế này.",
						"thai": "หวานเกินไป… ในที่แบบนี้",
						"hindi": "बहुत… मीठा। ऐसी जगह में।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "기억나지 않아? 이 길… 분명 지나왔던 것 같은데.",
						"english": "Don't you remember? This path… I'm sure we've been here before.",
						"japanese": "覚えてない？この道…きっと前に通ったはずだけど。",
						"chinese": "你不记得了吗？这条路…我们之前肯定来过。",
						"french": "Tu ne te souviens pas ? Ce chemin… nous l'avons sûrement déjà parcouru.",
						"spanish": "¿No recuerdas? Este camino… estoy seguro de que ya lo hemos recorrido.",
						"vietnamese": "Không nhớ sao? Con đường này… hình như chúng ta đã đi qua rồi mà.",
						"thai": "จำไม่ได้เหรอ? ทางนี้… ฉันแน่ใจว่าเราเคยผ่านมาแล้วนะ",
						"hindi": "याद नहीं है? यह रास्ता… मुझे यकीन है कि हम यहाँ से पहले भी गुजरे हैं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 콧노래… 환청인가? 어딘가 익숙한데…",
						"english": "That humming… is it a hallucination? It sounds familiar somehow…",
						"japanese": "あの鼻歌…幻聴か？どこか聞き覚えがある…",
						"chinese": "那哼唱声…是幻听吗？总觉得有点耳熟…",
						"french": "Ce fredonnement… Est-ce une hallucination ? Ça me dit quelque chose…",
						"spanish": "Ese tarareo… ¿es una alucinación? Me suena de algo…",
						"vietnamese": "Tiếng ngân nga đó… là ảo giác à? Nghe quen quen…",
						"thai": "เสียงฮัมเพลงนั้น… ประสาทหลอนรึเปล่า? เหมือนจะคุ้นๆ นะ…",
						"hindi": "वह गुनगुनाहट… क्या यह मतिभ्रम है? कहीं सुना हुआ-सा लग रहा है…"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "얼음 표면에 비친 우리 얼굴이… 뭔가 뒤틀린 것 같아.",
						"english": "Our faces reflected on the ice… they look distorted somehow.",
						"japanese": "氷の表面に映った私たちの顔が…なんだか歪んでる。",
						"chinese": "冰面上映出的我们的脸…好像有些扭曲。",
						"french": "Nos visages reflétés sur la glace… ils semblent déformés.",
						"spanish": "Nuestras caras reflejadas en el hielo… parecen distorsionadas.",
						"vietnamese": "Khuôn mặt của chúng ta phản chiếu trên mặt băng… trông thật méo mó.",
						"thai": "ใบหน้าของเราที่สะท้อนบนผิวน้ำแข็ง… ดูเหมือนจะบิดเบี้ยวไปหน่อย",
						"hindi": "बर्फ़ की सतह पर हमारे चेहरे… कुछ विकृत दिख रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "그것 봐. 이 노래는 우리를 속이고 있어. 환상이 아니야!",
						"english": "See? This song is deceiving us. It's not an illusion!",
						"japanese": "ほら見ろ。この歌は私たちを騙してる。幻なんかじゃない！",
						"chinese": "你看。这首歌在欺骗我们。这不是幻觉！",
						"french": "Tu vois ? Cette chanson nous trompe. Ce n'est pas une illusion !",
						"spanish": "¡Lo ves? Esta canción nos está engañando. ¡No es una ilusión!",
						"vietnamese": "Thấy chưa. Bài hát này đang lừa dối chúng ta. Đây không phải ảo ảnh!",
						"thai": "เห็นไหม เพลงนี้กำลังหลอกเราอยู่ นี่ไม่ใช่ภาพลวงตา!",
						"hindi": "देखो। यह गाना हमें धोखा दे रहा है। यह कोई भ्रम नहीं है!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그만해! 자꾸 찬물 끼얹지 마!",
						"english": "Stop it! Don't ruin everything!",
						"japanese": "やめて！水を差さないで！",
						"chinese": "住手！别再泼冷水了！",
						"french": "Arrête ! Ne gâche pas tout !",
						"spanish": "¡Basta! ¡No sigas aguándonos la fiesta!",
						"vietnamese": "Dừng lại! Đừng dội gáo nước lạnh nữa!",
						"thai": "หยุดนะ! อย่ามาทำให้เสียบรรยากาศ!",
						"hindi": "बस करो! हर बात पर पानी मत फेरो!"
					},
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "저것 좀 봐. 저 사람들은… 죽어있는데 웃고 있어. 손엔… 부서진 장난감?",
						"english": "Look at that. Those people… they're dead, but smiling. In their hands… a broken toy?",
						"japanese": "あれを見て。あの人たち…死んでるのに笑ってる。手には…壊れたおもちゃ？",
						"chinese": "快看。那些人…明明死了却在笑。手里…拿着破碎的玩具？",
						"french": "Regarde ça. Ces gens… ils sont morts, mais ils sourient. Dans leurs mains… un jouet cassé ?",
						"spanish": "Mira eso. Esa gente… están muertos, pero sonríen. En sus manos… ¿un juguete roto?",
						"vietnamese": "Nhìn kìa. Những người đó… họ chết rồi mà vẫn đang cười. Trong tay họ… một món đồ chơi bị vỡ?",
						"thai": "ดูนั่นสิ. คนพวกนั้น… ตายไปแล้วแต่กลับยิ้มอยู่. ในมือมี… ของเล่นพังๆ?",
						"hindi": "वह देखो। वे लोग… मर चुके हैं, फिर भी मुस्कुरा रहे हैं। हाथों में… टूटा हुआ खिलौना?"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 시신이… 이렇게 평온하지?",
						"english": "What kind of corpses… are this peaceful?",
						"japanese": "なんでこんなに…穏やかな遺体なんだ？",
						"chinese": "什么尸体…会如此平静？",
						"french": "Quel genre de cadavres… sont si paisibles ?",
						"spanish": "¿Qué clase de cadáveres… están tan en paz?",
						"vietnamese": "Xác chết nào lại… bình yên thế này?",
						"thai": "ศพอะไรกัน… ทำไมถึงได้ดูสงบขนาดนี้?",
						"hindi": "कैसे शव… इतने शांत हो सकते हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "아무것도 아니야. 환상일 뿐이야. 노래를 들어봐, 마음이 편안해지잖아.",
						"english": "It's nothing. Just an illusion. Listen to the song, it makes you feel peaceful.",
						"japanese": "なんでもないよ。ただの幻想だ。歌を聴いてごらん、心が落ち着くでしょ。",
						"chinese": "没什么。这只是幻觉。听听这首歌，你的心会平静下来。",
						"french": "Ce n'est rien. Juste une illusion. Écoute la chanson, ça apaise ton esprit.",
						"spanish": "No es nada. Solo una ilusión. Escucha la canción, te tranquilizará.",
						"vietnamese": "Không có gì đâu. Chỉ là ảo ảnh thôi. Nghe bài hát đi, tâm hồn sẽ bình yên thôi mà.",
						"thai": "ไม่มีอะไรหรอก. แค่ภาพลวงตาเท่านั้นเอง. ฟังเพลงสิ, มันทำให้ใจสงบลงนะ.",
						"hindi": "कुछ नहीं है। बस एक भ्रम है। गाना सुनो, तुम्हारा मन शांत हो जाएगा।"
					}
				},
				{
					"content": {
						"korean": "이건 환상이 아니야! 우리가 보고 싶은 것만 보여주는 거라고!",
						"english": "This isn't an illusion! It's only showing us what we want to see!",
						"japanese": "これは幻想なんかじゃない！私たちが見たいものだけを見せているんだ！",
						"chinese": "这不是幻觉！它只展示我们想看到的东西！",
						"french": "Ce n'est pas une illusion ! Ça ne nous montre que ce que nous voulons voir !",
						"spanish": "¡Esto no es una ilusión! ¡Solo nos está mostrando lo que queremos ver!",
						"vietnamese": "Đây không phải ảo ảnh! Nó chỉ cho chúng ta thấy những gì chúng ta muốn thấy thôi!",
						"thai": "นี่ไม่ใช่ภาพลวงตา! มันแค่แสดงสิ่งที่เราอยากเห็นเท่านั้นแหละ!",
						"hindi": "यह भ्रम नहीं है! यह सिर्फ वही दिखा रहा है जो हम देखना चाहते हैं!"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"content": {
						"korean": "너 대체 왜 그래? 너야말로 괴물 같아 보여.",
						"english": "What's wrong with you? You're the one who looks like a monster.",
						"japanese": "お前一体どうしたんだ？お前こそ化物みたいだぞ。",
						"chinese": "你到底怎么了？你才像个怪物。",
						"french": "Qu'est-ce qui ne va pas chez toi ? C'est toi qui ressembles à un monstre.",
						"spanish": "¿Qué te pasa? Eres tú quien parece un monstruo.",
						"vietnamese": "Cậu bị sao vậy? Cậu mới giống một con quái vật đấy.",
						"thai": "นายเป็นอะไรไป? นายต่างหากที่ดูเหมือนสัตว์ประหลาด.",
						"hindi": "तुम्हें हुआ क्या है? तुम ही एक राक्षस जैसे दिख रहे हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "안 돼…! 나침반이 계속 엉뚱한 곳을 가리켜! 무전기도 안 잡혀!",
						"english": "No…! The compass keeps pointing in the wrong direction! The radio's not picking up either!",
						"japanese": "だめだ…！コンパスがずっとおかしな方向を指してる！無線も繋がらない！",
						"chinese": "不行…！指南针一直指向错误的方向！无线电也收不到信号！",
						"french": "Non… ! La boussole continue de pointer dans la mauvaise direction ! La radio ne capte rien non plus !",
						"spanish": "¡No…! ¡La brújula sigue apuntando en la dirección equivocada! ¡La radio tampoco funciona!",
						"vietnamese": "Không được…! La bàn cứ chỉ sai hướng! Máy bộ đàm cũng không bắt được sóng!",
						"thai": "ไม่นะ…! เข็มทิศมันชี้ไปผิดทางตลอดเลย! วิทยุก็ใช้ไม่ได้!",
						"hindi": "नहीं…! कंपास लगातार गलत दिशा दिखा रहा है! वॉकी-टॉकी भी काम नहीं कर रहा!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 길을 잃었잖아!",
						"english": "Damn it! We're lost!",
						"japanese": "くそっ！道に迷ったじゃないか！",
						"chinese": "搞砸了！我们迷路了！",
						"french": "Merde ! On est perdus !",
						"spanish": "¡Maldita sea! ¡Nos hemos perdido!",
						"vietnamese": "Chết tiệt! Chúng ta lạc đường rồi!",
						"thai": "บ้าจริง! เราหลงทางแล้ว!",
						"hindi": "धिक्कार है! हम रास्ता भटक गए हैं!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다 아눅 때문이야! 자꾸 이상한 소리 하니까 집중이 안 되잖아!",
						"english": "It's all Anouk's fault! You keep spouting nonsense, I can't concentrate!",
						"japanese": "全部アヌークのせいだ！変なことばかり言うから集中できないじゃないか！",
						"chinese": "都怪阿努克！你老是说些奇怪的话，害我无法集中注意力！",
						"french": "Tout est de la faute d'Anouk ! Tu n'arrêtes pas de dire des bêtises, je n'arrive pas à me concentrer !",
						"spanish": "¡Todo es culpa de Anouk! ¡No paras de decir tonterías, no puedo concentrarme!",
						"vietnamese": "Tất cả là lỗi của Anouk! Mày cứ nói mấy chuyện vớ vẩn nên tao không thể tập trung được!",
						"thai": "เป็นความผิดของอนุกทั้งหมด! แกเอาแต่พูดจาแปลกๆ ฉันเลยไม่มีสมาธิเลย!",
						"hindi": "यह सब अनूक की गलती है! तुम हमेशा अजीब बातें करते रहते हो, मैं ध्यान केंद्रित नहीं कर सकता!"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "벗어날 방법은 없어…! 이건 루프라고! 계속 반복되는 함정이야!",
						"english": "There's no way out...! This is a loop! A repeating trap!",
						"japanese": "逃れる術はない…！これはループだ！繰り返される罠なんだ！",
						"chinese": "根本没有办法逃出去…！这是一个循环！一个不断重复的陷阱！",
						"french": "Il n'y a pas d'échappatoire… ! C'est une boucle ! Un piège sans fin !",
						"spanish": "¡No hay forma de escapar…! ¡Esto es un bucle! ¡Una trampa que se repite sin cesar!",
						"vietnamese": "Không có cách nào thoát ra được…! Đây là một vòng lặp! Một cái bẫy lặp đi lặp lại!",
						"thai": "ไม่มีทางออกแล้ว…! นี่มันวงวน! กับดักที่วนซ้ำไม่หยุด!",
						"hindi": "बाहर निकलने का कोई रास्ता नहीं है…! यह एक लूप है! एक बार-बार दोहराया जाने वाला जाल!"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 너만 없으면 돼!",
						"english": "Shut up! We just need to get rid of you!",
						"japanese": "黙れ！お前さえいなければいいんだ！",
						"chinese": "闭嘴！只要没有你就行了！",
						"french": "Tais-toi ! On a juste besoin de se débarrasser de toi !",
						"spanish": "¡Cállate! ¡Solo necesitamos librarnos de ti!",
						"vietnamese": "Câm mồm! Chỉ cần không có mày là được!",
						"thai": "หุบปาก! ขอแค่ไม่มีแกก็พอแล้ว!",
						"hindi": "चुप रहो! बस तुम न होते तो काफी होता!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "동료들의 비난 속, 아눅의 외침은 허공에 흩어졌다. 그때였다.",
						"english": "Amidst his comrades' accusations, Anouk's cries scattered into the void. It was then.",
						"japanese": "仲間たちの非難の中、アヌークの叫びは虚空に散った。その時だった。",
						"chinese": "在同伴们的指责声中，阿努克的叫喊声消散在虚空中。就在那时。",
						"french": "Au milieu des reproches de ses camarades, les cris d'Anouk se sont dispersés dans le vide. C'est alors.",
						"spanish": "Entre las acusaciones de sus compañeros, los gritos de Anouk se dispersaron en el vacío. Fue entonces.",
						"vietnamese": "Giữa những lời buộc tội của đồng đội, tiếng kêu của Anouk tan biến vào hư không. Chính lúc đó.",
						"thai": "ท่ามกลางเสียงตำหนิจากพรรคพวก เสียงตะโกนของอนุกก็เลือนหายไปในความว่างเปล่า เมื่อนั้นเอง.",
						"hindi": "अपने साथियों के आरोपों के बीच, अनूक की चीखें शून्य में बिखर गईं। तभी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "갑작스러운 얼음 폭풍이 모든 것을 집어삼킬 듯 덮쳤다. 그 중심에, 거대한 그림자가 나타났다.",
						"english": "A sudden ice storm descended, threatening to swallow everything. At its heart, a colossal shadow emerged.",
						"japanese": "突如、すべてを飲み込むかのような氷の嵐が襲いかかった。その中心に、巨大な影が現れた。",
						"chinese": "一场突如其来的冰风暴席卷而来，仿佛要吞噬一切。在它的中心，一个巨大的身影出现了。",
						"french": "Une tempête de glace soudaine s'abattit, menaçant d'engloutir toute chose. En son cœur, une ombre colossale apparut.",
						"spanish": "Una tormenta de hielo repentina se abatió, amenazando con engullir todo. En su centro, una sombra colosal emergió.",
						"vietnamese": "Một cơn bão băng đột ngột ập đến, như muốn nuốt chửng mọi thứ. Ở trung tâm của nó, một cái bóng khổng lồ xuất hiện.",
						"thai": "พายุหิมะอันฉับพลันพัดกระหน่ำ ราวกับจะกลืนกินทุกสิ่ง ตรงใจกลางนั้น เงาร่างมหึมาได้ปรากฏขึ้น.",
						"hindi": "एक अचानक बर्फीले तूफान ने सब कुछ निगलने की धमकी देते हुए घेर लिया। उसके केंद्र में, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 존재들이여… 이곳에서 영원히 헤매어라.",
						"english": "You insignificant beings… Wander here forever.",
						"japanese": "愚かな存在たちよ… ここで永遠にさまよえ。",
						"chinese": "渺小的存在们… 在此永远徘徊吧。",
						"french": "Êtres insignifiants… Errez ici pour l'éternité.",
						"spanish": "Seres insignificantes… Vagar aquí para siempre.",
						"vietnamese": "Những kẻ nhỏ bé kia… Hãy lang thang ở đây mãi mãi đi.",
						"thai": "พวกสิ่งมีชีวิตชั้นต่ำเอ๋ย… จงหลงทางอยู่ที่นี่ตลอดไปเถิด.",
						"hindi": "तुम तुच्छ प्राणी… यहाँ हमेशा के लिए भटकते रहो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						1,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "끝까지… 우리를 조롱하는군…! 이 모든 게… 너의 농간이었어!",
						"english": "To the very end… you mock us…! All of this… was your doing!",
						"japanese": "最後まで… 我々を嘲笑うつもりか…！この全てが… お前の策略だったのか！",
						"chinese": "直到最后… 你还在嘲弄我们…！这一切… 都是你的诡计！",
						"french": "Jusqu'au bout… tu te moques de nous… ! Tout cela… était ton manigance !",
						"spanish": "¡Hasta el final… te burlas de nosotros…! ¡Todo esto… fue tu artimaña!",
						"vietnamese": "Đến cùng… ngươi vẫn cứ chế giễu chúng ta…! Tất cả chuyện này… đều là trò của ngươi!",
						"thai": "จนถึงที่สุด… เจ้ายังคงเยาะเย้ยพวกเรา…! ทั้งหมดนี่… เป็นแผนการของเจ้าสินะ!",
						"hindi": "अंत तक… तुम हमारा मज़ाक उड़ाते रहे…! यह सब… तुम्हारी चाल थी!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비웃지 마라! 여기서 끝내주겠어!",
						"english": "Don't you dare laugh! I'll end you here!",
						"japanese": "笑うな！ここで終わらせてやる！",
						"chinese": "别嘲笑！我会在T这里了结你！",
						"french": "Ne ris pas ! Je vais en finir avec toi ici !",
						"spanish": "¡No te rías! ¡Te acabaré aquí mismo!",
						"vietnamese": "Đừng có cười nhạo! Ta sẽ kết thúc ngươi tại đây!",
						"thai": "อย่ามาหัวเราะ! ฉันจะจบเรื่องนี้ที่นี่แหละ!",
						"hindi": "हँसो मत! मैं तुम्हें यहीं खत्म कर दूँगा!"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "포기해라. 너희의 희망은 이곳에서 영원히 얼어붙을 것이다. 발버둥 쳐봐야 소용없어."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니…! 아직… 끝나지 않았어!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "anuk",
					"content": {
						"korean": "아직 기회는 있어…! 이대로 끝낼 순 없어!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 어리석기는… 이것은 시작일 뿐… 영원히 반복될… 운명이다…"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 이젠 정말… 끝난 건가?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "폭풍은 잦아들었지만, 텅 빈 설원에는 여전히 기만적인 노랫소리가 희미하게 울렸다. 이 구원이 과연 진정한 해방일까. 혹은 또 다른 환상의 시작일까."
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"환상의 노래가 속삭이는 얼어붙은 대지.",
			"현실과 거짓의 경계가 무너지고, 길을 잃은 자들은 헤맨다.",
			"벗어날 수 없는 미로. 그 끝에 기다리는 것은…",
			"차가운 비웃음, 혹은 또 다른 환상의 시작."
		],
		"english": [
			"Frozen land where the song of illusion whispers.",
			"The boundary between reality and falsehood crumbles, and the lost wander.",
			"An inescapable labyrinth. What awaits at its end…",
			"A cold sneer, or the beginning of another illusion."
		],
		"japanese": [
			"幻想の歌が囁く凍てついた大地。",
			"現実と虚偽の境界が崩れ、道を見失った者たちは彷徨う。",
			"逃れられない迷路。その先に待つものは…",
			"冷たい嘲笑、あるいは新たな幻想の始まり。"
		],
		"chinese": [
			"幻象之歌低语的冰封大地。",
			"现实与谎言的界限崩塌，迷失者们彷徨。",
			"无法逃脱的迷宫。在其尽头等待的将是…",
			"冷酷的嘲笑，抑或是另一场幻象的开始。"
		],
		"french": [
			"Terre gelée où murmure le chant de l'illusion.",
			"La frontière entre réalité et mensonge s'effondre, et les égarés errent.",
			"Un labyrinthe inéluctable. Ce qui attend à sa fin…",
			"Un ricanement froid, ou le début d'une autre illusion."
		],
		"spanish": [
			"Tierra helada donde susurra la canción de la ilusión.",
			"La frontera entre realidad y falsedad se desmorona, y los perdidos vagan.",
			"Un laberinto ineludible. Lo que aguarda al final…",
			"Una burla fría, o el comienzo de otra ilusión."
		],
		"vietnamese": [
			"Vùng đất băng giá nơi khúc ca ảo ảnh thì thầm.",
			"Ranh giới giữa thực tại và dối trá sụp đổ, những kẻ lạc lối lang thang.",
			"Một mê cung không lối thoát. Điều gì đang chờ đợi ở cuối con đường…",
			"Một nụ cười khẩy lạnh lùng, hoặc khởi đầu của một ảo ảnh khác."
		],
		"thai": [
			"ดินแดนเยือกแข็งที่บทเพลงแห่งมายาพร่ำกระซิบ",
			"เส้นแบ่งระหว่างความจริงกับความเท็จพังทลาย และผู้หลงทางก็เร่ร่อน",
			"เขาวงกตที่หนีไม่พ้น สิ่งที่รออยู่ ณ ปลายทางคือ…",
			"การเย้ยหยันอันเย็นชา หรือจุดเริ่มต้นของภาพลวงตาอีกครั้ง"
		],
		"hindi": [
			"जमी हुई भूमि जहाँ भ्रम का गीत फुसफुसाता है।",
			"वास्तविकता और झूठ की सीमा टूट जाती है, और खोए हुए भटकते हैं।",
			"एक अपरिहार्य भूलभुलैया। इसके अंत में क्या इंतजार कर रहा है…",
			"एक ठंडी मुस्कान, या एक और भ्रम की शुरुआत।"
		]
	}
} as const;
