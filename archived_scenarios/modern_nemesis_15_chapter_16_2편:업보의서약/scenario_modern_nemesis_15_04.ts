export const scenario_modern_nemesis_15_04 = {
	"scenario_id": "modern_nemesis_15_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"네메시스의 완벽함 뒤에 숨겨진 진실.",
			"기자 닥스는 거대한 음모의 실체, '백년회'의 존재를 파헤쳤다.",
			"피로 맺어진 서약, 그리고 그 집행자 네메시스.",
			"진실을 폭로하려는 그의 시도는, 보이지 않는 힘에 가로막혔다.",
			"하지만, 폭로는 이제 시작일 뿐이다."
		],
		"english": [
			"The truth hidden behind Nemesis's perfection.",
			"Reporter Dax uncovered the true nature of a grand conspiracy: 'The Centennial'.",
			"A blood-bound pact, and Nemesis, its enforcer.",
			"His attempt to expose the truth was thwarted by an unseen force.",
			"But this exposure is just the beginning."
		],
		"japanese": [
			"ネメシスの完璧さの裏に隠された真実。",
			"記者ダックスは、巨大な陰謀の正体、「百年会」の存在を暴いた。",
			"血で結ばれた誓約、そしてその執行者ネメシス。",
			"真実を暴こうとする彼の試みは、見えない力に阻まれた。",
			"しかし、暴露はまだ始まったばかりだ。"
		],
		"chinese": [
			"涅墨西斯的完美背后隐藏的真相。",
			"记者达克斯揭露了一个巨大阴谋的真相，即“百年会”的存在。",
			"以血缔结的誓约，以及其执行者涅墨西斯。",
			"他揭露真相的尝试，被一股无形的力量所阻挠。",
			"然而，揭露才刚刚开始。"
		],
		"french": [
			"La vérité cachée derrière la perfection de Nemesis.",
			"Le journaliste Dax a démasqué la véritable nature d'une vaste conspiration : \"Le Centenaire\".",
			"Un pacte scellé dans le sang, et Nemesis, son exécuteur.",
			"Sa tentative de révéler la vérité fut contrecarrée par une force invisible.",
			"Cependant, la révélation ne fait que commencer."
		],
		"spanish": [
			"La verdad oculta tras la perfección de Némesis.",
			"El periodista Dax descubrió la verdadera naturaleza de una gran conspiración: \"La Centenaria\".",
			"Un pacto sellado con sangre, y Némesis, su ejecutor.",
			"Su intento de exponer la verdad fue frustrado por una fuerza invisible.",
			"Sin embargo, la exposición es solo el principio."
		],
		"vietnamese": [
			"Sự thật ẩn giấu đằng sau sự hoàn hảo của Nemesis.",
			"Phóng viên Dax đã phanh phui sự tồn tại của 'Hội Trăm Năm', bản chất thật sự của một âm mưu to lớn.",
			"Một hiệp ước ràng buộc bằng máu, và Nemesis, kẻ thực thi nó.",
			"Nỗ lực phơi bày sự thật của anh ta đã bị một thế lực vô hình cản trở.",
			"Nhưng, sự phơi bày này chỉ là khởi đầu."
		],
		"thai": [
			"ความจริงที่ซ่อนอยู่เบื้องหลังความสมบูรณ์แบบของเนเมซิส",
			"นักข่าวแด็กซ์เปิดเผยความจริงของการสมคบคิดครั้งใหญ่: 'สมาคมร้อยปี'",
			"พันธสัญญาที่ผูกมัดด้วยเลือด และเนเมซิส ผู้บังคับใช้",
			"ความพยายามของเขาที่จะเปิดเผยความจริงถูกขัดขวางโดยพลังที่มองไม่เห็น",
			"แต่การเปิดเผยนี้เป็นเพียงจุดเริ่มต้น"
		],
		"hindi": [
			"नेमेसिस की पूर्णता के पीछे छिपा सच।",
			"रिपोर्टर डैक्स ने एक विशाल साज़िश, 'द सेंटेनियल' के अस्तित्व का पर्दाफाश किया।",
			"एक रक्त-बंधित समझौता, और नेमेसिस, उसका प्रवर्तक।",
			"सच को उजागर करने की उसकी कोशिश एक अदृश्य शक्ति द्वारा विफल कर दी गई।",
			"लेकिन, यह खुलासा तो बस शुरुआत है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "찾았어! 드디어 그 증거를 찾았다고!",
						"english": "I found it! I finally found the evidence!",
						"japanese": "見つけたぞ！ついにその証拠を見つけた！",
						"chinese": "找到了！我终于找到那个证据了！",
						"french": "Je l'ai trouvé ! J'ai enfin trouvé la preuve !",
						"spanish": "¡Lo encontré! ¡Por fin encontré la evidencia!",
						"vietnamese": "Tôi tìm thấy rồi! Cuối cùng tôi cũng tìm thấy bằng chứng đó!",
						"thai": "เจอแล้ว! ในที่สุดฉันก็เจอหลักฐานนั่น!",
						"hindi": "मुझे मिल गया! आखिरकार मुझे वो सबूत मिल ही गया!"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "닥스? 또 뭘 발견했는데요?",
						"english": "Dax? What have you discovered now?",
						"japanese": "ダックス？また何を見つけたんですか？",
						"chinese": "达克斯？你又发现了什么？",
						"french": "Dax ? Qu'avez-vous découvert cette fois ?",
						"spanish": "¿Dax? ¿Qué has descubierto ahora?",
						"vietnamese": "Dax? Lần này anh lại phát hiện ra điều gì?",
						"thai": "แด็กซ์? คุณเจออะไรอีกแล้วเนี่ย?",
						"hindi": "डैक्स? आपने अब क्या खोज लिया?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네메시스 뒤에 '백년회'라는 그림자 조직이 있어. 피로 맺은 '서약'으로 움직이는 놈들이야.",
						"english": "Behind Nemesis is a shadow organization called 'The Centennial'. They operate under a 'pact' sealed with blood.",
						"japanese": "ネメシスの裏には「百年会」という影の組織がある。血で結ばれた「誓約」で動いている連中だ。",
						"chinese": "涅墨西斯背后有一个名为“百年会”的影子组织。他们通过“血之誓约”来行动。",
						"french": "Derrière Nemesis se trouve une organisation secrète appelée \"Le Centenaire\". Ils opèrent sous un \"pacte\" scellé par le sang.",
						"spanish": "Detrás de Némesis hay una organización en la sombra llamada \"La Centenaria\". Operan bajo un \"pacto\" sellado con sangre.",
						"vietnamese": "Đằng sau Nemesis là một tổ chức ngầm tên là 'Hội Trăm Năm'. Chúng hoạt động dưới một 'hiệp ước' ràng buộc bằng máu.",
						"thai": "เบื้องหลังเนเมซิสมีองค์กรลับที่เรียกว่า 'สมาคมร้อยปี' พวกมันดำเนินการภายใต้ 'พันธสัญญา' ที่ผูกมัดด้วยเลือด",
						"hindi": "नेमेसिस के पीछे 'द सेंटेनियल' नाम का एक छाया संगठन है। वे रक्त से बंधे 'समझौते' के तहत काम करते हैं।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "백년회? 그게 뭔데요?",
						"english": "The Centennial? What's that?",
						"japanese": "百年会？それは何ですか？",
						"chinese": "百年会？那是什么？",
						"french": "Le Centenaire ? Qu'est-ce que c'est ?",
						"spanish": "¿La Centenaria? ¿Qué es eso?",
						"vietnamese": "Hội Trăm Năm? Đó là gì vậy?",
						"thai": "สมาคมร้อยปี? นั่นคืออะไรเหรอ?",
						"hindi": "द सेंटेनियल? वो क्या है?"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 도시의 모든 계약이 그 서약과 연결되어 있었어.",
						"english": "Every contract in this city was connected to that pact.",
						"japanese": "この都市のすべての契約が、その誓約と繋がっていたんだ。",
						"chinese": "这个城市的所有契约都与那个誓约相连。",
						"french": "Tous les contrats de cette ville étaient liés à ce pacte.",
						"spanish": "Todos los contratos de esta ciudad estaban conectados a ese pacto.",
						"vietnamese": "Mọi hợp đồng trong thành phố này đều liên quan đến hiệp ước đó.",
						"thai": "สัญญาในเมืองนี้ทั้งหมดเชื่อมโยงกับพันธสัญญานั้น",
						"hindi": "इस शहर के हर अनुबंध का उस समझौते से संबंध था।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "네메시스는 단순한 기업이 아니야. 그들의 서약을 집행하는 도구일 뿐이라고!",
						"english": "Nemesis isn't just a corporation. It's merely a tool to enforce their vows!",
						"japanese": "ネメシスは単なる企業じゃない。彼らの誓約を執行する道具に過ぎない！",
						"chinese": "复仇女神不只是一个企业。它不过是执行他们誓约的工具！",
						"french": "Némésis n'est pas qu'une simple entreprise. C'est un simple outil pour faire respecter leurs serments !",
						"spanish": "Némesis no es solo una corporación. ¡Es meramente una herramienta para hacer cumplir sus juramentos!",
						"vietnamese": "Nemesis không chỉ là một tập đoàn. Nó chỉ là công cụ để thực thi lời thề của họ!",
						"thai": "เนเมซิสไม่ใช่แค่บริษัท มันเป็นแค่เครื่องมือในการบังคับใช้คำปฏิญาณของพวกเขา!",
						"hindi": "नेमेसिस सिर्फ एक निगम नहीं है। यह उनकी प्रतिज्ञाओं को लागू करने का मात्र एक उपकरण है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 네메시스가 저주를 퍼트린다는 게… 사실이라는 거예요?",
						"english": "So, Nemesis spreading curses… it's true?",
						"japanese": "じゃあ、ネメシスが呪いを広めているって…本当なんですか？",
						"chinese": "那么，复仇女神散布诅咒……是真的吗？",
						"french": "Alors, Némésis qui répand des malédictions… c'est vrai ?",
						"spanish": "Entonces, ¿que Némesis esparce maldiciones… es cierto?",
						"vietnamese": "Vậy là Nemesis gieo rắc lời nguyền… là thật sao?",
						"thai": "งั้นที่ว่าเนเมซิสกำลังแพร่คำสาป… เป็นเรื่องจริงเหรอ?",
						"hindi": "तो, नेमेसिस का श्राप फैलाना… सच है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "맞아. 난 이 사실을 세상에 폭로할 거야.",
						"english": "That's right. I'll expose this truth to the world.",
						"japanese": "そうだ。私はこの事実を世間に暴露する。",
						"chinese": "没错。我会把这个真相公之于众。",
						"french": "C'est exact. Je vais révéler cette vérité au monde.",
						"spanish": "Exacto. Expondré esta verdad al mundo.",
						"vietnamese": "Đúng vậy. Tôi sẽ phơi bày sự thật này ra thế giới.",
						"thai": "ใช่แล้ว ฉันจะเปิดเผยความจริงนี้ให้โลกได้รับรู้",
						"hindi": "ठीक है। मैं इस सच्चाई को दुनिया के सामने उजागर करूंगा।"
					},
					"type": "speech",
					"speaker": "dax",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "빌어먹을! 기사가 삭제됐어!",
						"english": "Damn it! The article's been deleted!",
						"japanese": "くそっ！記事が削除された！",
						"chinese": "该死！文章被删除了！",
						"french": "Bon sang ! L'article a été supprimé !",
						"spanish": "¡Maldita sea! ¡El artículo ha sido eliminado!",
						"vietnamese": "Chết tiệt! Bài báo đã bị xóa rồi!",
						"thai": "บ้าจริง! บทความถูกลบไปแล้ว!",
						"hindi": "धिक्कार है! लेख हटा दिया गया है!"
					}
				},
				{
					"content": {
						"korean": "삭제요? 무슨 일이 있었던 거죠?",
						"english": "Deleted? What happened?",
						"japanese": "削除ですか？何があったんですか？",
						"chinese": "删除了？发生什么事了？",
						"french": "Supprimé ? Que s'est-il passé ?",
						"spanish": "¿Eliminado? ¿Qué pasó?",
						"vietnamese": "Xóa sao? Chuyện gì đã xảy ra vậy?",
						"thai": "ลบเหรอ? เกิดอะไรขึ้น?",
						"hindi": "हटा दिया? क्या हुआ?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "'백년회'라는 단어가 통째로 사라졌어. 흔적도 없이.",
						"english": "The phrase 'Centennial Society' has completely vanished. Without a trace.",
						"japanese": "「百年会」という単語が丸ごと消えた。痕跡も残さずに。",
						"chinese": "“百年会”这个词语彻底消失了。毫无痕迹。",
						"french": "Le terme « Société Centenaire » a complètement disparu. Sans laisser de trace.",
						"spanish": "La frase \"Sociedad del Centenario\" ha desaparecido por completo. Sin dejar rastro.",
						"vietnamese": "Cụm từ 'Hội Trăm Năm' đã hoàn toàn biến mất. Không còn dấu vết.",
						"thai": "คำว่า 'สมาคมร้อยปี' หายไปทั้งยวง ไร้ร่องรอย",
						"hindi": "'शताब्दी समाज' वाक्यांश पूरी तरह से गायब हो गया है। बिना किसी निशान के।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 누군가 조작했다는 거예요?",
						"english": "So… someone manipulated it?",
						"japanese": "じゃあ…誰かが操作したってことですか？",
						"chinese": "那么……是有人做了手脚吗？",
						"french": "Alors… quelqu'un l'a manipulé ?",
						"spanish": "Entonces… ¿alguien lo manipuló?",
						"vietnamese": "Vậy là… có người đã thao túng nó sao?",
						"thai": "งั้น… มีคนบงการงั้นเหรอ?",
						"hindi": "तो… किसी ने इसमें हेरफेर किया?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 우리의 상상을 초월하는 힘이 이 도시에 존재하고 있어.",
						"english": "Yes. A power beyond our imagination exists in this city.",
						"japanese": "そうだ。私たちの想像をはるかに超える力がこの都市に存在している。",
						"chinese": "是的。一股超乎我们想象的力量存在于这座城市。",
						"french": "Oui. Un pouvoir qui dépasse notre imagination existe dans cette ville.",
						"spanish": "Sí. Un poder que supera nuestra imaginación existe en esta ciudad.",
						"vietnamese": "Đúng vậy. Một thế lực vượt quá sức tưởng tượng của chúng ta đang tồn tại trong thành phố này.",
						"thai": "ใช่แล้ว พลังที่เกินกว่าจินตนาการของเรากำลังมีอยู่ในเมืองนี้",
						"hindi": "हाँ। हमारी कल्पना से परे एक शक्ति इस शहर में मौजूद है।"
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						1,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로는 안 돼. 무슨 수를 써서라도 진실을 알려야 해.",
						"english": "We can't let this stand. We have to reveal the truth, no matter what.",
						"japanese": "このままではいけない。どんな手を使ってでも真実を伝えなければ。",
						"chinese": "这样下去不行。无论如何都要揭露真相。",
						"french": "Ça ne peut pas continuer comme ça. Nous devons révéler la vérité, coûte que coûte.",
						"spanish": "Esto no puede seguir así. Tenemos que revelar la verdad, cueste lo que cueste.",
						"vietnamese": "Không thể cứ như vậy được. Phải bằng mọi cách tiết lộ sự thật.",
						"thai": "ปล่อยไว้แบบนี้ไม่ได้ ต้องบอกความจริงออกไปไม่ว่าจะด้วยวิธีไหนก็ตาม",
						"hindi": "यह ऐसे नहीं चल सकता। हमें किसी भी कीमत पर सच्चाई को उजागर करना होगा।"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하지만 너무 위험해요, 닥스.",
						"english": "But it's too dangerous, Dax.",
						"japanese": "でも、危険すぎます、ダックス。",
						"chinese": "但这太危险了，达克斯。",
						"french": "Mais c'est trop dangereux, Dax.",
						"spanish": "Pero es demasiado peligroso, Dax.",
						"vietnamese": "Nhưng nó quá nguy hiểm, Dax.",
						"thai": "แต่มันอันตรายเกินไป ดากซ์",
						"hindi": "लेकिन यह बहुत खतरनाक है, डैक्स।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "포기할 순 없어. 이게 마지막 기회일지도 몰라.",
						"english": "I can't give up. This might be my last chance.",
						"japanese": "諦めるわけにはいかない。これが最後のチャンスかもしれない。",
						"chinese": "我不能放弃。这可能是最后的机会了。",
						"french": "Je ne peux pas abandonner. C'est peut-être ma dernière chance.",
						"spanish": "No puedo rendirme. Esta podría ser mi última oportunidad.",
						"vietnamese": "Tôi không thể bỏ cuộc. Đây có thể là cơ hội cuối cùng của tôi.",
						"thai": "ฉันยอมแพ้ไม่ได้ นี่อาจเป็นโอกาสสุดท้ายของฉัน",
						"hindi": "मैं हार नहीं मान सकता। यह मेरा आखिरी मौका हो सकता है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "우리가 닥스를 돕겠어요.",
						"english": "We will help Dax.",
						"japanese": "私たちがダックスを助けます。",
						"chinese": "我们会帮助达克斯的。",
						"french": "Nous allons aider Dax.",
						"spanish": "Ayudaremos a Dax.",
						"vietnamese": "Chúng tôi sẽ giúp Dax.",
						"thai": "เราจะช่วยแด็กซ์",
						"hindi": "हम डैक्स की मदद करेंगे।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 헛된 몸부림… 네메시스는… 서약은… 영원하다…",
						"english": "Ugh... a futile struggle... Nemesis is... the Covenant is... eternal...",
						"japanese": "くっ…無駄な足掻き…ネメシスは…誓約は…永遠だ…",
						"chinese": "呃……徒劳的挣扎……复仇女神是……誓约是……永恒的……",
						"french": "Ugh... une lutte futile... Némésis est... le Pacte est... éternel...",
						"spanish": "Ugh... una lucha inútil... Némesis es... el Pacto es... eterno...",
						"vietnamese": "Khặc... một cuộc giãy giụa vô ích... Nemesis là... Giao Ước là... vĩnh cửu...",
						"thai": "อึก... การดิ้นรนที่ไร้ประโยชน์... เนเมซิสคือ... พันธสัญญาคือ... นิรันดร์...",
						"hindi": "उफ़... व्यर्थ संघर्ष... नेमेसिस है... प्रतिज्ञा है... शाश्वत..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "쓰러뜨렸어….",
						"english": "We defeated it...",
						"japanese": "倒した…",
						"chinese": "我们击败了它……",
						"french": "Nous l'avons vaincu...",
						"spanish": "Lo derrotamos...",
						"vietnamese": "Chúng ta đã đánh bại nó...",
						"thai": "เราเอาชนะมันได้แล้ว...",
						"hindi": "हमने इसे हरा दिया..."
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 아직 끝나지 않았어. '백년회'의 뿌리는 더 깊어.",
						"english": "But it's not over yet. The roots of the 'Centennial Society' run deeper.",
						"japanese": "しかし、まだ終わっていない。『百年会』の根はもっと深い。",
						"chinese": "但还没结束。‘百年会’的根基更深。",
						"french": "Mais ce n'est pas encore fini. Les racines de la 'Société du Centenaire' sont plus profondes.",
						"spanish": "Pero aún no ha terminado. Las raíces de la 'Sociedad del Centenario' son más profundas.",
						"vietnamese": "Nhưng vẫn chưa kết thúc. Rễ của 'Hội Trăm Năm' còn sâu hơn.",
						"thai": "แต่มันยังไม่จบ รากฐานของ 'สมาคมศตวรรษ' นั้นลึกซึ้งกว่า",
						"hindi": "लेकिन यह अभी खत्म नहीं हुआ है। 'शताब्दी समाज' की जड़ें और गहरी हैं।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "폭로의 불씨는 꺼지지 않았다. 진실은 더 큰 그림자를 드리우고 있었다.",
						"english": "The spark of revelation never died. Truth cast a deeper shadow.",
						"japanese": "暴露の火花は消えず、真実はさらに大きな影を落としていた。",
						"chinese": "揭露的火花从未熄灭。真相投下了更大的阴影。",
						"french": "L'étincelle de la révélation ne s'est pas éteinte. La vérité projetait une ombre encore plus grande.",
						"spanish": "La chispa de la revelación no se extinguió. La verdad proyectaba una sombra aún mayor.",
						"vietnamese": "Tia lửa của sự thật không bao giờ tắt. Sự thật đã phủ một cái bóng lớn hơn.",
						"thai": "ประกายแห่งการเปิดเผยไม่เคยดับลง ความจริงได้ทอดเงาที่ยิ่งใหญ่กว่า",
						"hindi": "रहस्योद्घाटन की चिंगारी कभी नहीं बुझी। सत्य ने एक और भी बड़ी छाया डाली।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 향한 발걸음을 막아서는 자가 나타났다.",
						"english": "Someone has appeared to block the path to truth.",
						"japanese": "真実への歩みを阻む者が現れた。",
						"chinese": "有人出现阻碍了通往真相的脚步。",
						"french": "Quelqu'un est apparu pour bloquer le chemin vers la vérité.",
						"spanish": "Alguien ha aparecido para bloquear el camino hacia la verdad.",
						"vietnamese": "Kẻ nào đó đã xuất hiện để chặn đường đến sự thật.",
						"thai": "มีบางคนปรากฏตัวขึ้นเพื่อขัดขวางเส้นทางสู่ความจริง",
						"hindi": "सत्य की राह में कोई आ गया है।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "더 이상은 안 돼. 너의 호기심은 여기서 끝이다.",
						"english": "No more. Your curiosity ends here.",
						"japanese": "これ以上は許さない。お前の好奇心はここで終わりだ。",
						"chinese": "到此为止。你的好奇心就到此为止了。",
						"french": "Pas plus. Ta curiosité s'arrête ici.",
						"spanish": "No más. Tu curiosidad termina aquí.",
						"vietnamese": "Không hơn nữa. Sự tò mò của ngươi kết thúc tại đây.",
						"thai": "ไม่มากไปกว่านี้อีกแล้ว ความอยากรู้ของเจ้าจะสิ้นสุดลงที่นี่",
						"hindi": "और नहीं। तुम्हारी जिज्ञासा यहीं खत्म होती है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "누구냐 넌!",
						"english": "Who are you!",
						"japanese": "貴様は誰だ！",
						"chinese": "你是什么人！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "서약의 비밀은… 영원히 잠들어 있어야 해.",
						"english": "The secret of the Covenant... must remain dormant forever.",
						"japanese": "誓約の秘密は…永遠に眠り続けるべきだ。",
						"chinese": "誓约的秘密……必须永远沉睡。",
						"french": "Le secret du Pacte... doit rester endormi pour toujours.",
						"spanish": "El secreto del Pacto... debe permanecer inactivo para siempre.",
						"vietnamese": "Bí mật của Giao Ước... phải mãi mãi ngủ yên.",
						"thai": "ความลับของพันธสัญญา... จะต้องคงหลับใหลอยู่ตลอดไป",
						"hindi": "प्रतिज्ञा का रहस्य... हमेशा के लिए सोया रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "dax",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 너희의 거짓을 내가 폭로할 것이다!",
						"english": "Silence! I will expose your lies!",
						"japanese": "黙れ！お前たちの嘘を私が暴いてやる！",
						"chinese": "闭嘴！我将揭露你们的谎言！",
						"french": "Silence ! Je démasquerai vos mensonges !",
						"spanish": "¡Cállate! ¡Expondré vuestras mentiras!",
						"vietnamese": "Im đi! Ta sẽ vạch trần những lời dối trá của các ngươi!",
						"thai": "เงียบ! ข้าจะเปิดโปงคำโกหกของพวกเจ้า!",
						"hindi": "चुप रहो! मैं तुम्हारे झूठ का पर्दाफाश करूंगा!"
					},
					"type": "speech",
					"speaker": "dax"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "서약의 힘에 의해 모든 것이 압도되었다.",
						"english": "All was overwhelmed by the power of the oath.",
						"japanese": "誓約の力によって、すべてが圧倒された。",
						"chinese": "一切都被誓约的力量所压倒。",
						"french": "Tout fut submergé par le pouvoir du serment.",
						"spanish": "Todo fue abrumado por el poder del juramento.",
						"vietnamese": "Mọi thứ đã bị áp đảo bởi sức mạnh của lời thề.",
						"thai": "ทุกสิ่งถูกครอบงำด้วยพลังแห่งคำสาบาน",
						"hindi": "सब कुछ शपथ की शक्ति से अभिभूत हो गया।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들. 진실은 너희가 감당할 수 있는 것이 아니다.",
						"english": "Fools. The truth is beyond your comprehension.",
						"japanese": "愚か者め。真実はお前たちが耐えられるものではない。",
						"chinese": "愚蠢的家伙。真相不是你们能承受的。",
						"french": "Imbéciles. La vérité n'est pas quelque chose que vous pouvez supporter.",
						"spanish": "Necios. La verdad no es algo que podáis soportar.",
						"vietnamese": "Đồ ngốc. Sự thật không phải là thứ các ngươi có thể chịu đựng.",
						"thai": "พวกโง่เขลา ความจริงไม่ใช่สิ่งที่พวกเจ้าจะรับไหว",
						"hindi": "मूर्खों। सत्य वह नहीं है जिसे तुम संभाल सको।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "젠장… 이대로 물러설 순 없어!",
						"english": "Damn it... I can't retreat!",
						"japanese": "くそ…このままでは退けない！",
						"chinese": "该死……不能就这样退缩！",
						"french": "Bon sang... Je ne peux pas reculer comme ça !",
						"spanish": "¡Maldita sea... no puedo retirarme así!",
						"vietnamese": "Chết tiệt... không thể rút lui như thế này!",
						"thai": "ให้ตายสิ... ข้าถอยไม่ได้แบบนี้!",
						"hindi": "धिक्कार है... मैं ऐसे पीछे नहीं हट सकता!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "다시… 도전한다….",
						"english": "Again... I challenge.",
						"japanese": "再び…挑戦する。",
						"chinese": "再次……挑战……。",
						"french": "Encore... Je défie.",
						"spanish": "De nuevo... Desafío.",
						"vietnamese": "Lại nữa... ta thách thức...",
						"thai": "อีกครั้ง... ข้าจะท้าทาย...",
						"hindi": "फिर से… चुनौती देता हूँ…।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
