export const scenario_PasswordWarden_V0_02 = {
	"scenario_id": "PasswordWarden_V0_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"jett": {
			"id": "mon_129bd4b6-0b1d-4e25-bfc4-da7441ad43a8",
			"name": {
				"korean": "제트",
				"english": "Jett",
				"japanese": "ジェット",
				"chinese": "杰特",
				"french": "Jett",
				"spanish": "Jett",
				"vietnamese": "Jett",
				"thai": "เจ็ตต์",
				"hindi": "जेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/02a8321f-49c9-45d8-c220-28553a15db00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6b917950-a990-478e-3874-228e44853800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사무실은 미로 같았다. 끝없이 이어진 복도.",
			"모두의 손에 쥐어진 서류가 답답함을 더했다.",
			"그리고 그 종이 한 장이, 끔찍한 비명으로 변했다.",
			"이 답답함은… 뭔가 잘못된 시작이었다."
		],
		"english": [
			"The office was a labyrinth. Endless corridors.",
			"The documents clutched in everyone's hands added to the stifling atmosphere.",
			"Then, a single sheet of paper transformed into a horrifying scream.",
			"This suffocation... was a wrong beginning."
		],
		"japanese": [
			"オフィスは迷宮のようだった。終わりのない廊下。",
			"皆の手に握られた書類が、息苦しさを増幅させた。",
			"そして、その一枚の紙が、恐ろしい悲鳴へと変わった。",
			"この息苦しさは…何かが間違った始まりだった。"
		],
		"chinese": [
			"办公室像迷宫一样。无尽的走廊。",
			"每个人手中的文件，让压抑感更甚。",
			"突然，一张纸变成了一声可怕的尖叫。",
			"这股压抑感… 是一个错误的开始。"
		],
		"french": [
			"Le bureau était un labyrinthe. Des couloirs sans fin.",
			"Les documents serrés dans les mains de chacun ajoutaient à l'étouffement.",
			"Puis, une simple feuille de papier se transforma en un hurlement terrifiant.",
			"Cette étouffement... était un mauvais début."
		],
		"spanish": [
			"La oficina era un laberinto. Pasillos interminables.",
			"Los documentos en las manos de todos aumentaban la asfixia.",
			"Y esa hoja de papel se convirtió en un grito horrible.",
			"Esta asfixia... era un comienzo equivocado."
		],
		"vietnamese": [
			"Văn phòng như một mê cung. Hành lang bất tận.",
			"Những tài liệu trong tay mỗi người càng làm tăng thêm sự ngột ngạt.",
			"Rồi một tờ giấy biến thành tiếng hét kinh hoàng.",
			"Sự ngột ngạt này… là một khởi đầu sai lầm."
		],
		"thai": [
			"ออฟฟิศเหมือนเขาวงกต. ทางเดินที่ไม่มีที่สิ้นสุด.",
			"เอกสารในมือของทุกคนยิ่งเพิ่มความอึดอัด.",
			"แล้วกระดาษแผ่นหนึ่งก็กลายเป็นเสียงกรีดร้องอันน่าสะพรึงกลัว.",
			"ความอึดอัดนี้... คือจุดเริ่มต้นที่ผิดพลาด."
		],
		"hindi": [
			"कार्यालय एक भूलभुलैया जैसा था। अंतहीन गलियारे।",
			"सबके हाथों में पकड़े दस्तावेज़ों ने घुटन बढ़ा दी।",
			"और वही कागज़ का एक टुकड़ा, एक भयानक चीख़ में बदल गया।",
			"यह घुटन… एक गलत शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사람들은 조용히 줄을 섰다. 각자의 서류를 든 채.",
						"english": "People stood quietly in line, each holding their documents.",
						"japanese": "人々は静かに列に並んだ。各自の書類を手に。",
						"chinese": "人们安静地排着队。手里拿着各自的文件。",
						"french": "Les gens faisaient la queue en silence, chacun tenant ses documents.",
						"spanish": "La gente hacía fila en silencio, cada uno con sus documentos.",
						"vietnamese": "Mọi người lặng lẽ xếp hàng. Tay cầm tài liệu của mình.",
						"thai": "ผู้คนยืนเข้าแถวอย่างเงียบ ๆ พร้อมเอกสารในมือ.",
						"hindi": "लोग चुपचाप कतार में खड़े थे। अपने-अपने दस्तावेज़ लिए हुए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "언제까지 기다려야 하지? 답답해 죽겠네.",
						"english": "How long do we have to wait? I'm suffocating.",
						"japanese": "いつまで待たされるんだ？息が詰まりそうだ。",
						"chinese": "还要等多久？快闷死了。",
						"french": "Combien de temps faut-il attendre ? C'est étouffant.",
						"spanish": "¿Cuánto tiempo hay que esperar? Me ahogo.",
						"vietnamese": "Phải chờ đến bao giờ đây? Chết ngạt mất thôi.",
						"thai": "ต้องรออีกนานแค่ไหนเนี่ย? อึดอัดจะตายอยู่แล้ว.",
						"hindi": "कब तक इंतज़ार करना है? दम घुट रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그때였다. 웅성거림이 시작된 건.",
						"english": "That's when the murmurs began.",
						"japanese": "その時だった。ざわめきが始まったのは。",
						"chinese": "就在那时。嘈杂声开始了。",
						"french": "C'est à ce moment-là que les murmures ont commencé.",
						"spanish": "Fue entonces. Cuando el murmullo comenzó.",
						"vietnamese": "Chính lúc đó. Tiếng xì xào bắt đầu.",
						"thai": "ตอนนั้นเอง ที่เสียงซุบซิบเริ่มขึ้น.",
						"hindi": "तभी। फुसफुसाहट शुरू हुई।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "jett",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "jett",
					"type": "speech",
					"content": {
						"korean": "…이상해. 저 서류, 움직이고 있어.",
						"english": "...Strange. That document, it's moving.",
						"japanese": "…おかしい。あの書類、動いている。",
						"chinese": "…奇怪。那份文件，在动。",
						"french": "...Étrange. Ce document, il bouge.",
						"spanish": "...Extraño. Ese documento, se está moviendo.",
						"vietnamese": "…Lạ thật. Tờ tài liệu kia, nó đang cử động.",
						"thai": "...แปลกนะ. เอกสารนั่น, กำลังขยับ.",
						"hindi": "...अजीब है। वह दस्तावेज़, हिल रहा है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "jett",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "jett",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저것 봐! 서류가 사람들을 잡아먹고 있어!",
						"english": "Look! The documents are devouring people!",
						"japanese": "あれを見ろ！書類が人々を食い荒らしている！",
						"chinese": "快看！文件在吞噬人类！",
						"french": "Regardez ! Les documents dévorent les gens !",
						"spanish": "¡Mira! ¡Los documentos se están comiendo a la gente!",
						"vietnamese": "Nhìn kìa! Tài liệu đang nuốt chửng mọi người!",
						"thai": "ดูนั่นสิ! เอกสารกำลังเขมือบผู้คน!",
						"hindi": "देखो! दस्तावेज़ लोगों को निगल रहे हैं!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "대기 중이던 사람들의 서류가 꿈틀거렸다. 빈 칸이 거대한 입처럼 벌어졌다.",
						"english": "The documents of those waiting squirmed. The blank space gaped open like a giant mouth.",
						"japanese": "待機していた人々の書類が蠢いた。空白の欄が巨大な口のように開いた。",
						"chinese": "正在等待的人们的文件蠕动起来。空白处像一张巨大的嘴巴张开了。",
						"french": "Les documents des personnes en attente se sont tordus. Le champ vide s'est ouvert comme une gueule géante.",
						"spanish": "Los documentos de la gente que esperaba se retorcieron. El espacio en blanco se abrió como una boca gigante.",
						"vietnamese": "Tài liệu của những người đang chờ đợi co giật. Chỗ trống mở ra như một cái miệng khổng lồ.",
						"thai": "เอกสารของผู้คนที่รออยู่บิดตัวไปมา. ช่องว่างเปิดกว้างเหมือนปากยักษ์.",
						"hindi": "इंतज़ार कर रहे लोगों के दस्तावेज़ रेंगने लगे। खाली जगह एक विशाल मुँह की तरह खुल गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "괴물이야! 서류가 사람들을 빨아들이고 있어!",
						"english": "It's a monster! The documents are sucking people in!",
						"japanese": "怪物だ！書類が人々を吸い込んでいる！",
						"chinese": "是怪物！文件在吸食人类！",
						"french": "C'est un monstre ! Les documents aspirent les gens !",
						"spanish": "¡Es un monstruo! ¡Los documentos están succionando a la gente!",
						"vietnamese": "Là quái vật! Tài liệu đang hút người vào!",
						"thai": "มันคือสัตว์ประหลาด! เอกสารกำลังดูดคนเข้าไป!",
						"hindi": "यह एक राक्षस है! दस्तावेज़ लोगों को अंदर खींच रहे हैं!"
					},
					"type": "speech"
				},
				{
					"speaker": "jett",
					"type": "speech",
					"content": {
						"korean": "이 사무실, 그냥 있는 게 아니야. 당장 베어내야 해!",
						"english": "This office isn't just an office. We have to cut it down now!",
						"japanese": "このオフィス、ただの場所じゃない。すぐに切り裂かなければ！",
						"chinese": "这办公室不简单。我们得立刻把它砍掉！",
						"french": "Ce bureau n'est pas qu'un simple bureau. Il faut l'abattre immédiatement !",
						"spanish": "Esta oficina no es lo que parece. ¡Tenemos que derribarla ahora mismo!",
						"vietnamese": "Văn phòng này không chỉ là văn phòng. Chúng ta phải chặt nó ra ngay!",
						"thai": "ออฟฟิศนี้ไม่ใช่แค่ออฟฟิศธรรมดา เราต้องทำลายมันเดี๋ยวนี้!",
						"hindi": "यह दफ्तर सिर्फ एक दफ्तर नहीं है। हमें इसे अभी खत्म करना होगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "벽에는 복잡한 비밀번호 정책 안내문이 붙어 있었다. 이해하기 힘든 모순투성이였다.",
						"english": "A complex password policy notice was plastered on the wall. It was full of contradictions, hard to understand.",
						"japanese": "壁には複雑なパスワードポリシーの案内が貼られていた。理解しがたい矛盾だらけだった。",
						"chinese": "墙上贴着一张复杂的密码政策通知。它充满了矛盾，难以理解。",
						"french": "Une notice de politique de mot de passe complexe était affichée au mur. Elle était pleine de contradictions, difficile à comprendre.",
						"spanish": "Un aviso de política de contraseñas complejo estaba pegado en la pared. Estaba lleno de contradicciones, difícil de entender.",
						"vietnamese": "Trên tường dán một thông báo chính sách mật khẩu phức tạp. Nó đầy rẫy mâu thuẫn, khó hiểu.",
						"thai": "มีประกาศนโยบายรหัสผ่านที่ซับซ้อนติดอยู่บนผนัง มันเต็มไปด้วยความขัดแย้ง ยากที่จะเข้าใจ",
						"hindi": "दीवार पर एक जटिल पासवर्ड नीति का नोटिस लगा था। यह विरोधाभासों से भरा था, समझना मुश्किल था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "jett",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "양식 괴물… 저게 여기 보스인가.",
						"english": "The Form Monster... Is that the boss here?",
						"japanese": "様式怪物…あれがここのボスか。",
						"chinese": "格式怪物… 那就是这里的头目吗？",
						"french": "Le Monstre Formulaire... C'est le boss d'ici ?",
						"spanish": "El Monstruo de los Formularios... ¿Es ese el jefe de aquí?",
						"vietnamese": "Quái vật Biểu mẫu... Đó là trùm ở đây sao?",
						"thai": "ปีศาจฟอร์ม... นั่นคือบอสที่นี่เหรอ?",
						"hindi": "फॉर्म राक्षस... क्या वह यहाँ का बॉस है?"
					},
					"type": "speech",
					"speaker": "jett"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나의 서식은 완벽하다. 너희는 그저 채워질 빈 칸일 뿐.",
						"english": "My form is perfect. You are merely empty spaces to be filled.",
						"japanese": "私の様式は完璧だ。お前たちはただ埋められる空白に過ぎない。",
						"chinese": "我的格式是完美的。你们不过是待填的空白。",
						"french": "Mon formulaire est parfait. Vous n'êtes que des espaces vides à remplir.",
						"spanish": "Mi formulario es perfecto. Vosotros sois solo espacios vacíos que deben ser llenados.",
						"vietnamese": "Biểu mẫu của ta là hoàn hảo. Các ngươi chỉ là những khoảng trống để được điền vào.",
						"thai": "แบบฟอร์มของข้าสมบูรณ์แบบ พวกเจ้าเป็นเพียงช่องว่างที่จะถูกเติมเต็ม",
						"hindi": "मेरा फॉर्म एकदम सही है। तुम तो बस भरे जाने वाले खाली स्थान हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빈 칸이라고? 웃기지 마!",
						"english": "Empty spaces? Don't make me laugh!",
						"japanese": "空白だと？笑わせるな！",
						"chinese": "空白？别开玩笑了！",
						"french": "Des espaces vides ? Ne me fais pas rire !",
						"spanish": "¿Espacios vacíos? ¡No me hagas reír!",
						"vietnamese": "Khoảng trống á? Đừng có đùa!",
						"thai": "ช่องว่างเหรอ? อย่ามาหัวเราะให้ยาก!",
						"hindi": "खाली स्थान? मुझे हँसाओ मत!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히 우리를 양식으로 쓰려고 해? 그 잘난 서식을 찢어주지!",
						"english": "How dare you try to use us as a form? I'll tear that glorious form of yours to shreds!",
						"japanese": "よくも我々を様式として使おうと？その立派な様式を破り捨ててやる！",
						"chinese": "你竟敢把我们当作格式来用？我撕碎你那自命不凡的格式！",
						"french": "Comment oses-tu nous utiliser comme un formulaire ? Je vais déchirer ton formulaire si prétentieux !",
						"spanish": "¿Cómo te atreves a usarnos como un formulario? ¡Destrozaré ese magnífico formulario tuyo!",
						"vietnamese": "Dám dùng chúng ta làm biểu mẫu à? Ta sẽ xé nát cái biểu mẫu tự mãn đó của ngươi!",
						"thai": "แกกล้าดียังไงมาใช้พวกเราเป็นแบบฟอร์ม? ข้าจะฉีกแบบฟอร์มจอมโอ้อวดนั่นให้เป็นชิ้นๆ!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई हमें एक फॉर्म की तरह इस्तेमाल करने की? मैं तुम्हारे उस शानदार फॉर्म को फाड़ दूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "jett"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "jett",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "발버둥 쳐봐라. 결국 모든 칸은 채워질 것이다.",
						"english": "Struggle all you want. In the end, every space will be filled.",
						"japanese": "もがいてみろ。結局、全ての欄は埋まるだろう。",
						"chinese": "挣扎吧。最终，所有的空格都会被填满。",
						"french": "Débats-toi tant que tu veux. Au final, toutes les cases seront remplies.",
						"spanish": "Lucha todo lo que quieras. Al final, cada espacio será llenado.",
						"vietnamese": "Hãy vùng vẫy đi. Cuối cùng, mọi ô trống sẽ được điền đầy.",
						"thai": "ดิ้นรนไปเถอะ สุดท้ายแล้ว ทุกช่องก็จะถูกเติมเต็ม",
						"hindi": "जितना चाहो संघर्ष कर लो। आखिर में, हर जगह भर जाएगी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "jett",
					"content": {
						"korean": "헛소리 집어치워! 네놈이 만든 서식은 파괴할 뿐이다!",
						"english": "Shut your nonsense! We will only destroy the form you created!",
						"japanese": "くだらないこと言うな！お前が作った様式は破壊するだけだ！",
						"chinese": "闭嘴胡说！我们只会摧毁你创造的格式！",
						"french": "Arrête tes bêtises ! Nous ne ferons que détruire le formulaire que tu as créé !",
						"spanish": "¡Cállate con tus tonterías! ¡Solo destruiremos el formulario que creaste!",
						"vietnamese": "Im đi nói nhảm! Chúng ta sẽ chỉ phá hủy biểu mẫu ngươi tạo ra!",
						"thai": "หุบปากไร้สาระ! เราจะทำลายแบบฟอร์มที่แกสร้างขึ้นมาเท่านั้น!",
						"hindi": "अपनी बकवास बंद करो! हम केवल तुम्हारे बनाए हुए फॉर्म को नष्ट करेंगे!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "더 강해졌어! 조심해!",
						"english": "It got stronger! Be careful!",
						"japanese": "もっと強くなった！気をつけろ！",
						"chinese": "它变得更强了！小心！",
						"french": "Il est devenu plus fort ! Attention !",
						"spanish": "¡Se ha vuelto más fuerte! ¡Ten cuidado!",
						"vietnamese": "Nó mạnh hơn rồi! Cẩn thận!",
						"thai": "มันแข็งแกร่งขึ้นแล้ว! ระวัง!",
						"hindi": "यह और मज़बूत हो गया है! सावधान रहो!"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "jett",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "드디어 마지막 칸이로군. 너희의 존재가 이 서식을 완성한다.",
						"english": "Finally, the last cell. Your existence completes this form.",
						"japanese": "ついに最後のマスだ。お前たちの存在がこの書式を完成させる。",
						"chinese": "终于到了最后一格。你们的存在将完成这份表格。",
						"french": "Enfin, la dernière case. Votre existence complète ce formulaire.",
						"spanish": "Finalmente, la última casilla. Vuestra existencia completa este formulario.",
						"vietnamese": "Cuối cùng cũng là ô cuối cùng. Sự tồn tại của các ngươi sẽ hoàn thành biểu mẫu này.",
						"thai": "ในที่สุดก็ถึงช่องสุดท้าย การมีอยู่ของพวกเจ้าจะทำให้แบบฟอร์มนี้สมบูรณ์",
						"hindi": "आखिरकार, आखिरी खाना। तुम्हारा अस्तित्व इस फॉर्म को पूरा करता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이젠 더 이상 참을 수 없어! 다 부숴버릴 거야!",
						"english": "I can't take it anymore! I'm going to smash everything!",
						"japanese": "もう我慢できない！全部ぶち壊してやる！",
						"chinese": "我受够了！我要把一切都毁掉！",
						"french": "Je n'en peux plus ! Je vais tout détruire !",
						"spanish": "¡No puedo más! ¡Voy a destrozarlo todo!",
						"vietnamese": "Tôi không thể chịu đựng thêm nữa! Tôi sẽ phá hủy tất cả!",
						"thai": "ฉันทนไม่ไหวแล้ว! ฉันจะทำลายทุกอย่าง!",
						"hindi": "अब और नहीं सह सकता! मैं सब कुछ तोड़ दूंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "jett",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 그 누구도 네 서식에 놀아나게 두지 않을 거야! 끝장을 보자, 양식 괴물!",
						"english": "No one else will be toyed with by your forms! Let's end this, Form Monster!",
						"japanese": "もう誰もあんたの書式に弄ばせはしない！決着をつけよう、様式怪物！",
						"chinese": "我不会再让任何人被你的表格玩弄了！让我们做个了断吧，表格怪物！",
						"french": "Plus personne ne sera manipulé par tes formulaires ! Finissons-en, monstre du formulaire !",
						"spanish": "¡Nadie más será manipulado por tus formularios! ¡Acabemos con esto, Monstruo del Formulario!",
						"vietnamese": "Không ai khác sẽ bị chơi đùa bởi các biểu mẫu của ngươi nữa! Hãy kết thúc chuyện này, Quái vật Biểu mẫu!",
						"thai": "ไม่มีใครจะถูกแบบฟอร์มของแกหลอกล่ออีกแล้ว! มาจบเรื่องนี้กันเถอะ เจ้าสัตว์ประหลาดแบบฟอร์ม!",
						"hindi": "अब कोई और तुम्हारे फॉर्मों से नहीं खेलेगा! खत्म करते हैं इसे, फॉर्म मॉन्स्टर!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…완성되지 못한 서식… 하지만… 이것은….",
						"english": "...An incomplete form... But... this is...",
						"japanese": "…完成しなかった書式…だが…これは…。",
						"chinese": "……未完成的表格……但是……这是……。",
						"french": "...Un formulaire incomplet... Mais... c'est...",
						"spanish": "...Un formulario incompleto... Pero... esto es...",
						"vietnamese": "...Một biểu mẫu chưa hoàn thành... Nhưng... đây là...",
						"thai": "...แบบฟอร์มที่ไม่สมบูรณ์... แต่... นี่มัน...",
						"hindi": "...एक अधूरा फॉर्म... लेकिन... यह है..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "jett",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "끝났다. 더 이상 아무도 당하지 않아.",
						"english": "It's over. No one else will suffer.",
						"japanese": "終わった。もう誰も苦しまない。",
						"chinese": "结束了。不会再有人受苦了。",
						"french": "C'est fini. Plus personne ne souffrira.",
						"spanish": "Se acabó. Nadie más sufrirá.",
						"vietnamese": "Kết thúc rồi. Sẽ không còn ai phải chịu đựng nữa.",
						"thai": "จบแล้ว. จะไม่มีใครต้องทนทุกข์อีกต่อไป.",
						"hindi": "खत्म हो गया। अब कोई और पीड़ित नहीं होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "jett"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숨통이 트이는 것 같아… 진짜 끝난 건가?",
						"english": "I feel like I can breathe... Is it really over?",
						"japanese": "息ができるような気がする…本当に終わったのか？",
						"chinese": "我感觉可以呼吸了……真的结束了吗？",
						"french": "J'ai l'impression de pouvoir respirer... Est-ce vraiment fini ?",
						"spanish": "Siento que puedo respirar... ¿Realmente ha terminado?",
						"vietnamese": "Tôi cảm thấy mình có thể thở được... Thực sự kết thúc rồi sao?",
						"thai": "ฉันรู้สึกเหมือนหายใจได้... มันจบลงจริงๆแล้วเหรอ?",
						"hindi": "लगता है सांस ले पा रहा हूं... क्या यह सच में खत्म हो गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만 사무실은 여전히 끝이 보이지 않았다. 다음 서류가 기다리는 듯했다.",
						"english": "But the office still seemed endless. The next document seemed to be waiting.",
						"japanese": "しかし、オフィスは依然として終わりが見えなかった。次の書類が待っているようだった。",
						"chinese": "然而，办公室似乎仍然没有尽头。下一份文件似乎还在等待着。",
						"french": "Mais le bureau semblait toujours sans fin. Le prochain document semblait attendre.",
						"spanish": "Pero la oficina aún parecía interminable. El siguiente documento parecía estar esperando.",
						"vietnamese": "Nhưng văn phòng vẫn dường như vô tận. Tài liệu tiếp theo dường như đang chờ đợi.",
						"thai": "แต่สำนักงานก็ยังคงดูเหมือนไม่มีที่สิ้นสุด เอกสารฉบับต่อไปกำลังรออยู่",
						"hindi": "लेकिन ऑफिस अभी भी अंतहीन लग रहा था। अगला दस्तावेज़ इंतज़ार कर रहा था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 너희도… 내 서식의 일부가 될 뿐이다.",
						"english": "Ultimately... you too... will only become a part of my form.",
						"japanese": "結局…お前たちも…私の書式の一部になるだけだ。",
						"chinese": "最终……你们也……只会成为我表格的一部分。",
						"french": "Finalement... vous aussi... ne ferez que devenir une partie de mon formulaire.",
						"spanish": "Finalmente... vosotros también... solo seréis parte de mi formulario.",
						"vietnamese": "Cuối cùng... các ngươi cũng... chỉ trở thành một phần của biểu mẫu của ta.",
						"thai": "ในที่สุด... พวกเจ้าก็... จะเป็นเพียงส่วนหนึ่งของแบบฟอร์มของข้า",
						"hindi": "आखिरकार... तुम भी... मेरे फॉर्म का हिस्सा बनोगे।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "jett",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそ…まだ…終わってない！",
						"chinese": "该死……还没……结束！",
						"french": "Bon sang... Ce n'est pas... encore fini !",
						"spanish": "Maldita sea... ¡Aún... no ha terminado!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc!",
						"thai": "ให้ตายเถอะ... มันยังไม่... จบ!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "jett",
					"emotion": "angry",
					"content": {
						"korean": "포기하지 마! 다시 일어서야 해!",
						"english": "Don't give up! You have to get back up!",
						"japanese": "諦めるな！もう一度立ち上がるんだ！",
						"chinese": "别放弃！你必须重新站起来！",
						"french": "N'abandonnez pas ! Vous devez vous relever !",
						"spanish": "¡No te rindas! ¡Tienes que volver a levantarte!",
						"vietnamese": "Đừng bỏ cuộc! Các ngươi phải đứng dậy một lần nữa!",
						"thai": "อย่ายอมแพ้! คุณต้องลุกขึ้นอีกครั้ง!",
						"hindi": "हार मत मानो! तुम्हें फिर से खड़ा होना होगा!"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
