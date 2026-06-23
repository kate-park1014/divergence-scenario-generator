export const scenario_forest_verboria_49_01 = {
	"scenario_id": "forest_verboria_49_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 깊은 비밀을 품고 있었다.",
			"소원을 들어준다는 샘물, 베르보리아.",
			"하지만 모든 소원에는 대가가 따른다.",
			"그리고 숲은, 소문을 사랑했다.",
			"브라켄은 그 첫 번째 희생자였다."
		],
		"english": [
			"The forest held deep secrets.",
			"Verboria, the spring said to grant wishes.",
			"But every wish comes with a price.",
			"And the forest loved rumors.",
			"Bracken was its first victim."
		],
		"japanese": [
			"森は深い秘密を抱えていた。",
			"願いを叶える泉、ベルボリア。",
			"しかし、全ての願いには代償が伴う。",
			"そして森は、噂を愛した。",
			"ブラッケンは、その最初の犠牲者だった。"
		],
		"chinese": [
			"森林深藏着秘密。",
			"能实现愿望的泉水，维尔博利亚。",
			"然而，每个愿望都有代价。",
			"而森林，喜爱流言。",
			"布拉肯是它的第一个牺牲品。"
		],
		"french": [
			"La forêt gardait de profonds secrets.",
			"Verboria, la source exauçant les vœux.",
			"Mais tout vœu a son prix.",
			"Et la forêt aimait les rumeurs.",
			"Bracken en fut la première victime."
		],
		"spanish": [
			"El bosque guardaba profundos secretos.",
			"Verboria, el manantial que concede deseos.",
			"Pero cada deseo tiene un precio.",
			"Y el bosque amaba los rumores.",
			"Bracken fue su primera víctima."
		],
		"vietnamese": [
			"Khu rừng ẩn chứa những bí mật sâu thẳm.",
			"Verboria, dòng suối tương truyền ban điều ước.",
			"Nhưng mỗi điều ước đều có cái giá của nó.",
			"Và khu rừng, yêu những lời đồn.",
			"Bracken là nạn nhân đầu tiên của nó."
		],
		"thai": [
			"ป่าเก็บงำความลับลึกซึ้ง",
			"เวอร์โบเรีย น้ำพุที่กล่าวกันว่าให้พร",
			"แต่ทุกคำขอพรย่อมมีราคาที่ต้องจ่าย",
			"และป่าก็หลงรักข่าวลือ",
			"แบร็คเคนคือเหยื่อรายแรก"
		],
		"hindi": [
			"जंगल में गहरे रहस्य छिपे थे।",
			"वरबوریا، वह झरना जो इच्छाएँ पूरी करता है।",
			"परन्तु हर इच्छा की एक कीमत होती है।",
			"और जंगल को अफवाहें पसंद थीं।",
			"ब्रेकन उसका पहला शिकार था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깊은 숲 속, 영롱한 샘물이 빛났다. 소원을 들어준다는 베르보리아.",
						"english": "Deep in the forest, a shimmering spring glowed. Verboria, said to grant wishes.",
						"japanese": "深い森の中、煌めく泉が輝いていた。願いを叶えるというベルボリア。",
						"chinese": "幽深的森林中，一道清澈的泉水闪耀着。那是据说能实现愿望的维尔博利亚。",
						"french": "Au fond de la forêt, une source scintillante brillait. Verboria, celle qui exauce les vœux.",
						"spanish": "En lo profundo del bosque, un manantial reluciente brillaba. Verboria, que concede deseos.",
						"vietnamese": "Sâu trong rừng, một dòng suối lấp lánh tỏa sáng. Verboria, tương truyền ban điều ước.",
						"thai": "กลางป่าลึก น้ำพุที่ส่องประกายเรืองรอง นั่นคือเวอร์โบเรีย ที่กล่าวกันว่าจะให้พร",
						"hindi": "घने जंगल में, एक चमकता झरना दमक रहा था। वरबोरिया, कहा जाता है कि वह इच्छाएँ पूरी करता है।"
					}
				},
				{
					"content": {
						"korean": "정말 소원을 들어줄까? 그럼… 아무도 모르는 내 비밀이…",
						"english": "Will it really grant wishes? Then... my secret no one knows...",
						"japanese": "本当に願いを叶えるの？じゃあ…誰も知らない私の秘密が…",
						"chinese": "它真的能实现愿望吗？那…我无人知晓的秘密…",
						"french": "Va-t-elle vraiment exaucer les vœux ? Alors... mon secret que personne ne connaît...",
						"spanish": "¿De verdad concederá deseos? Entonces... mi secreto que nadie sabe...",
						"vietnamese": "Nó có thực sự ban điều ước không? Vậy thì… bí mật không ai biết của tôi…",
						"thai": "มันจะให้พรจริงเหรอ? งั้น…ความลับของฉันที่ไม่มีใครรู้…",
						"hindi": "क्या यह सच में इच्छाएँ पूरी करेगा? तो फिर… मेरा वो राज़ जो कोई नहीं जानता…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말해봐. 네 가장 은밀한 것을…",
						"english": "Tell me. Your most intimate secret...",
						"japanese": "教えて。君の最も秘密なものを…",
						"chinese": "说出来。你最隐秘的事情…",
						"french": "Dis-le. Ton secret le plus intime...",
						"spanish": "Dime. Lo más íntimo que guardas...",
						"vietnamese": "Hãy nói đi. Điều thầm kín nhất của ngươi…",
						"thai": "บอกมาสิ ความลับส่วนตัวที่สุดของเจ้า…",
						"hindi": "बताओ। तुम्हारा सबसे गहरा राज़…"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…나는 사실… 아주 어릴 때…",
						"english": "...I actually... when I was very young...",
						"japanese": "…私、実は…すごく幼い頃…",
						"chinese": "…我其实…很小的时候…",
						"french": "...En fait... quand j'étais très jeune...",
						"spanish": "...La verdad es que... cuando era muy joven...",
						"vietnamese": "…Thực ra tôi… khi còn rất nhỏ…",
						"thai": "…ฉันจริงๆแล้ว…ตอนเด็กๆมาก…",
						"hindi": "…मैं सच में… जब बहुत छोटा था…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bracken"
				},
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하! 숲이 들었어. 이제 모두가 알게 되겠지.",
						"english": "Haha! The forest heard it. Now everyone will know.",
						"japanese": "ハハ！森が聞いたぞ。これで皆が知ることになるだろう。",
						"chinese": "哈哈！森林听到了。现在所有人都知道了。",
						"french": "Haha ! La forêt a entendu. Maintenant tout le monde le saura.",
						"spanish": "¡Jaja! El bosque lo oyó. Ahora todos lo sabrán.",
						"vietnamese": "Haha! Khu rừng đã nghe thấy rồi. Bây giờ mọi người sẽ biết thôi.",
						"thai": "ฮ่าฮ่า! ป่าได้ยินแล้ว คราวนี้ทุกคนคงรู้กันหมดแล้วสินะ",
						"hindi": "हाहा! जंगल ने सुन लिया। अब सबको पता चल जाएगा।"
					}
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "뭐라고? 안 돼! 이건…!",
						"english": "What? No! This...!",
						"japanese": "なんだって？いやだ！これは…！",
						"chinese": "什么？不！这是……！",
						"french": "Quoi ? Non ! Ce n'est pas possible !",
						"spanish": "¿Qué? ¡No! ¡Esto es...!",
						"vietnamese": "Gì cơ? Không! Cái này...!",
						"thai": "อะไรนะ? ไม่นะ! นี่มัน...!",
						"hindi": "क्या? नहीं! यह तो...!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "브라켄은 수치심과 분노에 휩싸였다. 샘물은 조롱하듯 빛났다.",
						"english": "Braken was engulfed in shame and fury. The spring water gleamed mockingly.",
						"japanese": "ブラケンは羞恥と怒りに包まれた。泉は嘲るように輝いていた。",
						"chinese": "布拉肯被羞耻和愤怒吞噬。泉水嘲讽般地闪耀着。",
						"french": "Braken fut submergé par la honte et la fureur. L'eau de la source brillait d'un air moqueur.",
						"spanish": "Braken fue invadido por la vergüenza y la furia. El manantial brillaba burlonamente.",
						"vietnamese": "Braken chìm trong hổ thẹn và giận dữ. Dòng suối lấp lánh như trêu ngươi.",
						"thai": "บราเคนจมดิ่งในความอับอายและโทสะ น้ำพุส่องประกายเย้ยหยัน",
						"hindi": "ब्रेकेन शर्म और क्रोध से भर गया। झरने का पानी उपहास करता हुआ चमक रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "내 비밀이 숲에… 모두가 날 비웃을 거야.",
						"english": "My secret... in the forest. Everyone will laugh at me.",
						"japanese": "私の秘密が森に…みんなが私を嘲笑うだろう。",
						"chinese": "我的秘密在森林里…所有人都会嘲笑我。",
						"french": "Mon secret... dans la forêt. Tout le monde se moquera de moi.",
						"spanish": "Mi secreto... en el bosque. Todos se reirán de mí.",
						"vietnamese": "Bí mật của tôi... trong rừng. Mọi người sẽ cười nhạo tôi.",
						"thai": "ความลับของฉัน...อยู่ในป่า ทุกคนจะต้องหัวเราะเยาะฉันแน่",
						"hindi": "मेरा रहस्य जंगल में... सब मुझ पर हँसेंगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이상하네. 예전에도 이런 소문이 돌았었는데.",
						"english": "Strange. There were rumors like this before, too.",
						"japanese": "おかしいな。前にもこんな噂があったのに。",
						"chinese": "真奇怪。以前也有过这种传闻。",
						"french": "Étrange. Il y avait déjà des rumeurs comme ça avant.",
						"spanish": "Extraño. Ya hubo rumores así antes.",
						"vietnamese": "Lạ thật. Trước đây cũng có tin đồn như thế này mà.",
						"thai": "แปลกจัง เมื่อก่อนก็เคยมีข่าวลือแบบนี้",
						"hindi": "अजीब है। पहले भी ऐसी अफवाहें थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그게 무슨 상관이야! 내가 당했다고!",
						"english": "What does that matter! I'm the one who suffered!",
						"japanese": "それが何だというんだ！私がやられたんだ！",
						"chinese": "那有什么关系！我才是受害者！",
						"french": "Qu'est-ce que ça peut bien faire ! C'est moi qui en ai souffert !",
						"spanish": "¡Qué importa eso! ¡Fui yo quien sufrió!",
						"vietnamese": "Quan trọng gì chứ! Tôi mới là người bị hại!",
						"thai": "มันเกี่ยวอะไรด้วยเล่า! ฉันต่างหากที่โดน!",
						"hindi": "इससे क्या फर्क पड़ता है! मुझे नुकसान हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 반복되는 낡은 이야기 같아서…",
						"english": "It's like an old story, repeating itself...",
						"japanese": "まるで繰り返される古い物語のようで…",
						"chinese": "就像一个不断重复的旧故事……",
						"french": "C'est comme une vieille histoire qui se répète...",
						"spanish": "Es como una vieja historia que se repite...",
						"vietnamese": "Cứ như một câu chuyện cũ lặp đi lặp lại vậy...",
						"thai": "เหมือนเรื่องราวเก่าๆ ที่วนเวียนซ้ำรอย",
						"hindi": "मानो यह कोई पुरानी कहानी हो, जो दोहराई जा रही हो..."
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "아름다운 샘물이… 이렇게 잔인할 수가.",
						"english": "Such a beautiful spring... how could it be so cruel?",
						"japanese": "美しい泉が…こんなにも残酷だなんて。",
						"chinese": "美丽的泉水……竟然如此残忍。",
						"french": "Une si belle source... comment pourrait-elle être si cruelle ?",
						"spanish": "Un manantial tan hermoso... ¿cómo puede ser tan cruel?",
						"vietnamese": "Dòng suối đẹp đẽ này... sao có thể tàn nhẫn đến vậy chứ.",
						"thai": "น้ำพุที่งดงาม...ช่างโหดร้ายได้ถึงเพียงนี้",
						"hindi": "इतना सुंदर झरना... इतना क्रूर कैसे हो सकता है?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 평화로운 얼굴 뒤에 타인의 치부를 즐기는 감시망을 숨기고 있었다.",
						"english": "Behind its peaceful facade, the forest hid a surveillance network that reveled in others' vulnerabilities.",
						"japanese": "森は平和な顔の裏に、他人の弱みを楽しむ監視網を隠していた。",
						"chinese": "森林在宁静的外表下，隐藏着一个以他人隐私为乐的监视网。",
						"french": "Derrière son visage paisible, la forêt cachait un réseau de surveillance qui se délectait des faiblesses d'autrui.",
						"spanish": "Detrás de su fachada pacífica, el bosque ocultaba una red de vigilancia que se deleitaba con las vulnerabilidades ajenas.",
						"vietnamese": "Đằng sau vẻ mặt yên bình, khu rừng ẩn chứa một mạng lưới giám sát thích thú với những điểm yếu của người khác.",
						"thai": "เบื้องหลังใบหน้าที่สงบเงียบ ป่าซ่อนเครือข่ายสอดแนมที่ชื่นชมความอ่อนแอของผู้อื่นไว้",
						"hindi": "अपने शांत मुखौटे के पीछे, जंगल ने एक निगरानी नेटवर्क छुपा रखा था जो दूसरों की कमजोरियों का आनंद लेता था।"
					},
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "어떻게든… 복수할 거야.",
						"english": "Somehow... I'll get my revenge.",
						"japanese": "なんとしてでも…復讐してやる。",
						"chinese": "无论如何……我都会复仇的。",
						"french": "D'une manière ou d'une autre... je me vengerai.",
						"spanish": "De alguna manera... me vengaré.",
						"vietnamese": "Bằng mọi giá... tôi sẽ trả thù.",
						"thai": "ไม่ว่ายังไง...ฉันจะแก้แค้น",
						"hindi": "किसी भी तरह... मैं बदला लूँगा।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"speaker": "bracken",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 짓은… 더 이상 없어야 해. 내가 막을 거야.",
						"english": "This kind of thing... must not happen again. I'll stop it.",
						"japanese": "こんなことは…もう二度とあってはならない。私が止める。",
						"chinese": "这种事……绝不能再发生。我会阻止它的。",
						"french": "Ce genre de choses... ne doit plus jamais arriver. Je l'arrêterai.",
						"spanish": "Esto... no debe volver a pasar. Yo lo detendré.",
						"vietnamese": "Chuyện như thế này... không được xảy ra nữa. Tôi sẽ ngăn chặn nó.",
						"thai": "เรื่องแบบนี้...ต้องไม่เกิดขึ้นอีกแล้ว ฉันจะหยุดมันเอง",
						"hindi": "ऐसा अब और नहीं होना चाहिए। मैं इसे रोकूँगा।"
					},
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "샘물 아래… 뭔가 보여. 이상한 문양이야.",
						"english": "Under the spring... I see something. A strange pattern.",
						"japanese": "泉の下に…何かが見える。奇妙な模様だ。",
						"chinese": "泉水下面……我看到了一些东西。一个奇怪的图案。",
						"french": "Sous la source... je vois quelque chose. Un étrange motif.",
						"spanish": "Debajo del manantial... veo algo. Un patrón extraño.",
						"vietnamese": "Dưới suối... tôi thấy gì đó. Một hoa văn kỳ lạ.",
						"thai": "ใต้น้ำพุ... ฉันเห็นบางอย่าง ลวดลายแปลกๆ",
						"hindi": "झरने के नीचे... मुझे कुछ दिख रहा है। एक अजीब पैटर्न।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "흥. 아무것도 바꾸지 못해. 모두 즐길 뿐.",
						"english": "Hmph. Nothing changes. Everyone just enjoys.",
						"japanese": "フン。何も変わらない。皆が楽しむだけだ。",
						"chinese": "哼。什么都改变不了。大家只是享受而已。",
						"french": "Hmph. Rien ne change. Tout le monde s'amuse, c'est tout.",
						"spanish": "Hmph. Nada cambia. Todos simplemente disfrutan.",
						"vietnamese": "Hừ. Chẳng có gì thay đổi. Mọi người chỉ tận hưởng thôi.",
						"thai": "ฮึ่ม ไม่มีอะไรเปลี่ยนแปลง ทุกคนแค่สนุกสนาน",
						"hindi": "ह्म्फ। कुछ नहीं बदलता। सब बस आनंद लेते हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 너도 그 즐거움에 빠져있었겠지!",
						"english": "Shut up! You must have been enjoying it too!",
						"japanese": "黙れ！お前もその楽しみに浸っていたんだろう！",
						"chinese": "闭嘴！你肯定也沉浸在那种乐趣中了吧！",
						"french": "Tais-toi ! Tu t'y complaisais aussi, n'est-ce pas !",
						"spanish": "¡Cállate! ¡Tú también debiste estar disfrutando de eso!",
						"vietnamese": "Im đi! Ngươi chắc cũng đã chìm đắm trong niềm vui đó rồi!",
						"thai": "หุบปาก! แกก็คงสนุกกับมันเหมือนกัน!",
						"hindi": "चुप रहो! तुम भी उस मजे में डूबे होंगे!"
					},
					"emotion": "angry",
					"speaker": "bracken"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "멍청하군… 날 없애도… 소문은 계속돼…",
						"english": "Foolish... Even if you destroy me... the rumors will continue...",
						"japanese": "愚かだな…私を消しても…噂は続く…",
						"chinese": "愚蠢……即使你消灭了我……谣言也会继续……",
						"french": "Stupide... Même si tu me détruis... les rumeurs continueront...",
						"spanish": "Tonto... Incluso si me eliminas... los rumores continuarán...",
						"vietnamese": "Ngốc nghếch... Dù ngươi có diệt trừ ta... những lời đồn vẫn sẽ tiếp diễn...",
						"thai": "โง่เง่า... ถึงแม้จะกำจัดฉันได้... ข่าวลือก็ยังคงอยู่...",
						"hindi": "मूर्ख... भले ही तुम मुझे खत्म कर दो... अफवाहें जारी रहेंगी..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야! 이게 끝이야.",
						"english": "What are you talking about! This is the end.",
						"japanese": "何を言ってるんだ！これで終わりだ。",
						"chinese": "你在说什么！这就是结束。",
						"french": "Qu'est-ce que tu racontes ! C'est la fin.",
						"spanish": "¡De qué estás hablando! Este es el final.",
						"vietnamese": "Ngươi nói gì vậy! Đây là kết thúc rồi.",
						"thai": "แกพูดอะไร! นี่คือจุดจบแล้ว",
						"hindi": "तुम क्या कह रहे हो! यह अंत है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "브라켄은 승리했지만 숲의 속삭임은 멈추지 않았다.",
						"english": "Bracken was victorious, but the whispers of the forest did not cease.",
						"japanese": "ブラケンは勝利したが、森のささやきは止まらなかった。",
						"chinese": "布拉肯取得了胜利，但森林的低语并未停止。",
						"french": "Bracken fut victorieux, mais les murmures de la forêt ne cessèrent pas.",
						"spanish": "Bracken salió victorioso, pero los susurros del bosque no cesaron.",
						"vietnamese": "Bracken đã chiến thắng, nhưng tiếng thì thầm của khu rừng vẫn không ngừng.",
						"thai": "แบรคเคนได้รับชัยชนะ แต่เสียงกระซิบของป่าก็ยังไม่หยุดลง",
						"hindi": "ब्रेकन विजयी हुआ, लेकिन जंगल की फुसफुसाहटें बंद नहीं हुईं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "베르보리아의 잔혹한 심심풀이는 이제 시작이었다.",
						"english": "Verboria's cruel diversion had only just begun.",
						"japanese": "ヴェルボリアの残酷な気晴らしは、始まったばかりだった。",
						"chinese": "维博利亚的残酷消遣才刚刚开始。",
						"french": "Le cruel divertissement de Verboria ne faisait que commencer.",
						"spanish": "La cruel diversión de Verboria no había hecho más que empezar.",
						"vietnamese": "Trò tiêu khiển tàn nhẫn của Verboria chỉ vừa mới bắt đầu.",
						"thai": "ความบันเทิงอันโหดร้ายของเวอร์โบเรียเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "वेरबोरिया का क्रूर मनोरंजन अभी तो शुरू ही हुआ था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리가 멈춰야 해. 이 거짓과 비난의 순환을.",
						"english": "We must stop this cycle of lies and blame.",
						"japanese": "私たちは止めなければならない。この嘘と非難の連鎖を。",
						"chinese": "我们必须阻止这个谎言与指责的循环。",
						"french": "Nous devons arrêter ce cycle de mensonges et de reproches.",
						"spanish": "Debemos detener este ciclo de mentiras y culpas.",
						"vietnamese": "Chúng ta phải chấm dứt vòng luẩn quẩn của dối trá và đổ lỗi này.",
						"thai": "เราต้องหยุดวงจรของคำโกหกและการกล่าวหานี้",
						"hindi": "हमें इस झूठ और दोषारोपण के चक्र को रोकना होगा।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 비밀이 재미있었어. 더 많은 비밀을 원하지 않니?",
						"english": "Your secret was interesting. Don't you want more secrets?",
						"japanese": "お前の秘密は面白かった。もっと秘密が欲しくないか？",
						"chinese": "你的秘密很有趣。你不想要更多秘密吗？",
						"french": "Ton secret était intéressant. Tu ne veux pas d'autres secrets ?",
						"spanish": "Tu secreto fue interesante. ¿No quieres más secretos?",
						"vietnamese": "Bí mật của ngươi thật thú vị. Ngươi không muốn thêm nhiều bí mật sao?",
						"thai": "ความลับของแกน่าสนใจดี ไม่ต้องการความลับเพิ่มอีกหรือ?",
						"hindi": "तुम्हारा रहस्य मजेदार था। क्या तुम्हें और रहस्य नहीं चाहिए?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥쳐! 이 역겨운 장난을 끝낼 거야.",
						"english": "Shut up! I'm going to end this disgusting prank.",
						"japanese": "黙れ！この忌まわしい悪ふざけを終わらせてやる。",
						"chinese": "闭嘴！我要结束这场令人作呕的恶作剧。",
						"french": "Tais-toi ! Je vais mettre fin à cette farce répugnante.",
						"spanish": "¡Cállate! Voy a terminar con esta asquerosa broma.",
						"vietnamese": "Im đi! Ta sẽ chấm dứt trò đùa ghê tởm này.",
						"thai": "หุบปาก! ฉันจะหยุดการเล่นตลกที่น่ารังเกียจนี้",
						"hindi": "चुप रहो! मैं इस घिनौनी शरारत को खत्म कर दूंगा।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하하. 네가 뭘 할 수 있다고. 이 숲은 원래 이래.",
						"english": "Haha. What can you do? This forest is always like this.",
						"japanese": "ハハ。お前に何ができる。この森は元々こうだ。",
						"chinese": "哈哈。你能做什么？这片森林本来就是这样。",
						"french": "Haha. Que peux-tu faire ? Cette forêt est comme ça depuis toujours.",
						"spanish": "Jaja. ¿Qué puedes hacer? Este bosque siempre ha sido así.",
						"vietnamese": "Haha. Ngươi có thể làm gì chứ. Khu rừng này vốn dĩ là như vậy.",
						"thai": "ฮ่าฮ่า แกทำอะไรได้? ป่านี้เป็นแบบนี้มาตั้งแต่แรกแล้ว",
						"hindi": "हाहा। तुम क्या कर सकते हो? यह जंगल हमेशा से ऐसा ही है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "내가 널 쓰러뜨리면… 끝날 거야.",
						"english": "If I defeat you... it will end.",
						"japanese": "私がお前を倒せば…終わるだろう。",
						"chinese": "如果我打败你……一切就会结束。",
						"french": "Si je te vaincs... ce sera fini.",
						"spanish": "Si te derroto... se acabará.",
						"vietnamese": "Nếu ta đánh bại ngươi... mọi chuyện sẽ kết thúc.",
						"thai": "ถ้าฉันเอาชนะแกได้... มันก็จะจบลง",
						"hindi": "अगर मैं तुम्हें हरा दूंगा... तो यह खत्म हो जाएगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "봐. 네 비밀은 이미 퍼졌어. 넌 아무것도 바꾸지 못해.",
						"english": "See? Your secret is out. You can't change anything.",
						"japanese": "見ろ。お前の秘密はすでに広まった。何も変えられない。",
						"chinese": "看。你的秘密已经传开了。你什么也改变不了。",
						"french": "Vois. Ton secret est déjà répandu. Tu ne peux rien changer.",
						"spanish": "Mira. Tu secreto ya se ha extendido. No puedes cambiar nada.",
						"vietnamese": "Thấy không? Bí mật của ngươi đã lộ rồi. Ngươi không thể thay đổi được gì đâu.",
						"thai": "ดูสิ ความลับของเจ้าแพร่ไปแล้ว เจ้าเปลี่ยนอะไรไม่ได้หรอก",
						"hindi": "देखो। तुम्हारा रहस्य फैल चुका है। तुम कुछ भी नहीं बदल सकते।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니… 난 포기하지 않아. 절대.",
						"english": "No... I won't give up. Never.",
						"japanese": "いや… 私は諦めない。絶対に。",
						"chinese": "不……我不会放弃。绝不。",
						"french": "Non... Je n'abandonnerai pas. Jamais.",
						"spanish": "No... no me rendiré. Jamás.",
						"vietnamese": "Không... tôi sẽ không bỏ cuộc. Tuyệt đối không.",
						"thai": "ไม่… ฉันจะไม่ยอมแพ้ ไม่มีทาง",
						"hindi": "नहीं... मैं हार नहीं मानूंगा। कभी नहीं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bracken"
				}
			]
		}
	]
} as const;
