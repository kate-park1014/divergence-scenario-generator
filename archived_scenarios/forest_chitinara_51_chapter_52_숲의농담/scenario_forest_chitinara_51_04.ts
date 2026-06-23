export const scenario_forest_chitinara_51_04 = {
	"scenario_id": "forest_chitinara_51_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
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
					"content": {
						"korean": "오래된 석실. 벽마다 기괴한 문양이 새겨져 있었다.",
						"english": "An old stone chamber. Grotesque symbols carved on every wall.",
						"japanese": "古びた石室。壁一面に奇怪な文様が刻まれていた。",
						"chinese": "古老的石室。每面墙上都刻着诡异的图案。",
						"french": "Une ancienne chambre de pierre. Des symboles grotesques gravés sur chaque mur.",
						"spanish": "Una antigua cámara de piedra. Símbolos grotescos grabados en cada pared.",
						"vietnamese": "Một căn phòng đá cổ. Các biểu tượng kỳ quái được chạm khắc trên mỗi bức tường.",
						"thai": "ห้องหินเก่าแก่ สัญลักษณ์ประหลาดแกะสลักอยู่บนผนังทุกด้าน",
						"hindi": "एक पुराना पत्थर का कक्ष। हर दीवार पर भयावह प्रतीक खुदे हुए थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"speaker": "glen",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 문양들은… 고대 부족의 기록이야.",
						"english": "These symbols... they're records of an ancient tribe.",
						"japanese": "この文様は… 古代部族の記録だ。",
						"chinese": "这些图案… 是古代部落的记录。",
						"french": "Ces symboles... sont des archives d'une ancienne tribu.",
						"spanish": "Estos símbolos... son registros de una tribu antigua.",
						"vietnamese": "Những biểu tượng này… là ghi chép của một bộ tộc cổ đại.",
						"thai": "สัญลักษณ์เหล่านี้... เป็นบันทึกของชนเผ่าโบราณ",
						"hindi": "ये प्रतीक... एक प्राचीन जनजाति के अभिलेख हैं।"
					},
					"type": "speech",
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 기원과… 금지된 의식에 대한 단서가 있을 거야.",
						"english": "There might be clues about the forest's origin and... forbidden rituals.",
						"japanese": "森の起源と… 禁忌の儀式に関する手がかりがあるはずだ。",
						"chinese": "可能会有关于森林起源和… 禁忌仪式的线索。",
						"french": "Il pourrait y avoir des indices sur l'origine de la forêt et... des rituels interdits.",
						"spanish": "Podría haber pistas sobre el origen del bosque y... rituales prohibidos.",
						"vietnamese": "Có thể có manh mối về nguồn gốc của khu rừng và… các nghi lễ cấm.",
						"thai": "น่าจะมีเบาะแสเกี่ยวกับกำเนิดของป่าและ... พิธีกรรมต้องห้าม",
						"hindi": "वन के उद्गम और... वर्जित अनुष्ठानों के बारे में सुराग हो सकते हैं।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "금지된 의식?",
						"english": "Forbidden rituals?",
						"japanese": "禁忌の儀式？",
						"chinese": "禁忌仪式？",
						"french": "Rituels interdits ?",
						"spanish": "¿Rituales prohibidos?",
						"vietnamese": "Nghi lễ cấm?",
						"thai": "พิธีกรรมต้องห้าม?",
						"hindi": "वर्जित अनुष्ठान?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "glen",
					"duration_ms": 500,
					"spot": [
						2,
						1
					]
				},
				{
					"content": {
						"korean": "해독해봤는데… 처음엔 숲의 수호를 기원하는 내용 같았어.",
						"english": "I deciphered them... At first, it seemed like prayers for the forest's protection.",
						"japanese": "解読してみたんだが… 最初は森の守護を祈る内容のようだった。",
						"chinese": "我试着解读了一下… 一开始，它似乎是祈求森林守护的内容。",
						"french": "Je les ai déchiffrés... Au début, ça semblait être des prières pour la protection de la forêt.",
						"spanish": "Los descifré... Al principio, parecían oraciones por la protección del bosque.",
						"vietnamese": "Tôi đã giải mã chúng… Lúc đầu, có vẻ như đó là những lời cầu nguyện cho sự bảo vệ của khu rừng.",
						"thai": "ฉันถอดรหัสแล้ว... ตอนแรกดูเหมือนจะเป็นคำอธิษฐานเพื่อปกป้องป่า",
						"hindi": "मैंने उन्हें समझा... पहले, वे जंगल की रक्षा के लिए प्रार्थनाएं लग रहे थे।"
					},
					"emotion": "base",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"content": {
						"korean": "근데 자세히 보니… 피의 제물과… 기괴한 합체를 연상시키는 불길한 그림들이 섞여 있어.",
						"english": "But looking closer... I found ominous drawings depicting blood sacrifices and grotesque fusions.",
						"japanese": "だがよく見ると… 血の生贄と… 奇怪な合体を連想させる不吉な絵が混じっている。",
						"chinese": "但仔细一看… 混杂着血祭和… 令人联想到诡异融合的不祥画作。",
						"french": "Mais en y regardant de plus près... j'ai trouvé des dessins sinistres dépeignant des sacrifices de sang et des fusions grotesques.",
						"spanish": "Pero al mirar de cerca... encontré dibujos ominosos que representaban sacrificios de sangre y fusiones grotescas.",
						"vietnamese": "Nhưng khi nhìn kỹ hơn… tôi thấy những bức vẽ đáng sợ mô tả việc hiến tế máu và những sự hợp nhất kỳ quái.",
						"thai": "แต่เมื่อดูใกล้ๆ... กลับมีภาพวาดลางร้ายปะปนอยู่ แสดงถึงการบูชายัญเลือดและการรวมร่างอันน่าขนลุก",
						"hindi": "लेकिन करीब से देखने पर... मुझे रक्त बलिदान और भयावह संलयन को दर्शाने वाले अशुभ चित्र मिले।"
					},
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "피의 제물… 합체?",
						"english": "Blood sacrifices... fusions?",
						"japanese": "血の生贄… 合体？",
						"chinese": "血祭… 融合？",
						"french": "Sacrifices de sang... fusions ?",
						"spanish": "¿Sacrificios de sangre... fusiones?",
						"vietnamese": "Hiến tế máu… hợp nhất?",
						"thai": "บูชายัญเลือด... รวมร่าง?",
						"hindi": "रक्त बलिदान... संलयन?"
					}
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 '수호'가… 평범한 의미가 아닌 것 같아.",
						"english": "The forest's 'protection'... it doesn't seem to be a normal kind.",
						"japanese": "森の「守護」が… 普通の意味ではないようだ。",
						"chinese": "森林的“守护”… 似乎不是普通意义上的。",
						"french": "La 'protection' de la forêt… ne semble pas être ordinaire.",
						"spanish": "La 'protección' del bosque… no parece ser en el sentido común.",
						"vietnamese": "Sự 'bảo hộ' của rừng… có vẻ không phải là ý nghĩa thông thường.",
						"thai": "'การคุ้มครอง' ของป่า… ดูเหมือนจะไม่ใช่ความหมายธรรมดา.",
						"hindi": "जंगल की 'सुरक्षा'... सामान्य अर्थ में नहीं लगती।"
					}
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
						1
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glen",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 그림들은… 숲이 모든 생명을 흡수해서… '완벽한 존재'를 만들려는 의식을 보여주고 있어.",
						"english": "These paintings… depict a ritual where the forest absorbs all life… to create a 'perfect being'.",
						"japanese": "これらの絵は… 森がすべての生命を吸収して… 「完璧な存在」を作ろうとする儀式を示している。",
						"chinese": "这些画… 揭示了森林吸收所有生命… 创造“完美存在”的仪式。",
						"french": "Ces peintures… montrent un rituel où la forêt absorbe toute vie… pour créer un 'être parfait'.",
						"spanish": "Estas pinturas… muestran un ritual donde el bosque absorbe toda la vida… para crear un 'ser perfecto'.",
						"vietnamese": "Những bức tranh này… cho thấy một nghi lễ mà khu rừng hấp thụ mọi sự sống… để tạo ra một 'thực thể hoàn hảo'.",
						"thai": "ภาพเหล่านี้… แสดงถึงพิธีกรรมที่ป่าดูดซับทุกชีวิต… เพื่อสร้าง 'สิ่งมีชีวิตที่สมบูรณ์แบบ'.",
						"hindi": "ये चित्र… एक अनुष्ठान दिखाते हैं जहाँ जंगल सभी जीवन को अवशोषित करता है… एक 'पूर्ण प्राणी' बनाने के लिए।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "glen"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 생명을 흡수해서…?",
						"english": "Absorbing all life…?",
						"japanese": "すべての生命を吸収して…？",
						"chinese": "吸收所有生命…？",
						"french": "Absorber toute vie…?",
						"spanish": "¿Absorbiendo toda la vida…?",
						"vietnamese": "Hấp thụ mọi sự sống…?",
						"thai": "ดูดซับทุกชีวิต…?",
						"hindi": "सभी जीवन को अवशोषित करके…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마존 부족은 숲의 일부가 되는 것을 '구원'이라고 믿었던 것 같아.",
						"english": "It seems the Amazonian tribes believed becoming part of the forest was 'salvation'.",
						"japanese": "アマゾンの部族は、森の一部になることを「救済」と信じていたようだ。",
						"chinese": "亚马逊部落似乎相信成为森林的一部分就是“救赎”。",
						"french": "Il semble que les tribus amazoniennes croyaient que devenir une partie de la forêt était le 'salut'.",
						"spanish": "Parece que las tribus amazónicas creían que volverse parte del bosque era la 'salvación'.",
						"vietnamese": "Có vẻ như các bộ lạc Amazon tin rằng trở thành một phần của khu rừng là 'sự cứu rỗi'.",
						"thai": "ดูเหมือนชนเผ่าอเมซอนจะเชื่อว่าการได้เป็นส่วนหนึ่งของป่าคือ 'ความรอด'.",
						"hindi": "लगता है अमेज़न जनजातियाँ जंगल का हिस्सा बनने को 'मुक्ति' मानती थीं।"
					},
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "구원… 이라니.",
						"english": "Salvation… huh.",
						"japanese": "救済… だと。",
						"chinese": "救赎… 吗。",
						"french": "Le salut… vraiment.",
						"spanish": "¿Salvación… dices?",
						"vietnamese": "Cứu rỗi… ư.",
						"thai": "ความรอด… อย่างนั้นหรือ.",
						"hindi": "मुक्ति… भला।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						1
					],
					"duration_ms": 500,
					"speaker": "glen",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "숲은… 단순한 생존을 넘어선 광기 어린 집착으로 유지되고 있어.",
						"english": "The forest… is sustained by a mad obsession beyond mere survival.",
						"japanese": "森は… 単なる生存を超えた狂気じみた執着によって維持されている。",
						"chinese": "森林… 维系于超越单纯生存的疯狂执念。",
						"french": "La forêt… est maintenue par une obsession folle, au-delà de la simple survie.",
						"spanish": "El bosque… se mantiene por una obsesión insana que va más allá de la mera supervivencia.",
						"vietnamese": "Khu rừng… được duy trì bởi một nỗi ám ảnh điên cuồng, vượt qua sự sống còn đơn thuần.",
						"thai": "ป่า… ถูกค้ำจุนด้วยความหลงใหลคลั่งไคล้ที่เกินกว่าการเอาชีวิตรอดธรรมดา.",
						"hindi": "जंगल… केवल अस्तित्व से परे एक पागलपन भरी सनक से टिका हुआ है।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "이들이 말하는 '구원'은 사실… 모든 것을 집어삼키는 잔혹한 농담이었던 거지.",
						"english": "Their 'salvation' was, in fact… a cruel joke that devoured everything.",
						"japanese": "彼らが言う「救済」は実は… すべてを飲み込む残酷な冗談だったんだ。",
						"chinese": "他们所谓的“救赎”实际上… 是一个吞噬一切的残酷玩笑。",
						"french": "Leur 'salut' était, en fait… une blague cruelle qui dévorait tout.",
						"spanish": "Su 'salvación' era, en realidad… una broma cruel que lo devoraba todo.",
						"vietnamese": "'Sự cứu rỗi' mà họ nói thực ra… là một trò đùa tàn nhẫn nuốt chửng mọi thứ.",
						"thai": "'ความรอด' ที่พวกเขาพูดถึง แท้จริงแล้ว… เป็นเรื่องตลกร้ายที่กลืนกินทุกสิ่ง.",
						"hindi": "उनकी 'मुक्ति' दरअसल… सब कुछ निगल जाने वाला एक क्रूर मज़ाक था।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 결국 우릴 조롱한 거잖아!",
						"english": "Damn it… they were mocking us all along!",
						"japanese": "ちくしょう… 結局俺たちを嘲笑ってただけじゃないか！",
						"chinese": "该死… 他们最终只是在嘲弄我们！",
						"french": "Merde… ils se moquaient de nous depuis le début !",
						"spanish": "¡Maldita sea… al final solo se estaban burlando de nosotros!",
						"vietnamese": "Chết tiệt… rốt cuộc họ chỉ đang chế nhạo chúng ta!",
						"thai": "ให้ตายสิ… สุดท้ายพวกมันก็แค่เยาะเย้ยเรา!",
						"hindi": "धिक्कार है… आखिर में वे हमारा मज़ाक ही उड़ा रहे थे!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "역겹지만… 이젠 알았으니 통쾌하기도 하군.",
						"english": "Disgusting… but now that I know, it's also satisfying.",
						"japanese": "吐き気がするが… もう分かったから、むしろ清々しいくらいだ。",
						"chinese": "真恶心… 但现在知道了，也算是一种痛快。",
						"french": "Dégueulasse… mais maintenant que je sais, c'est aussi un soulagement.",
						"spanish": "Asqueroso… pero ahora que lo sé, también es satisfactorio.",
						"vietnamese": "Thật ghê tởm… nhưng giờ đã biết, cũng thấy hả hê.",
						"thai": "น่ารังเกียจ… แต่เมื่อรู้แล้วก็รู้สึกสะใจ.",
						"hindi": "घिनौना है… पर अब जब जान लिया है, तो तसल्ली भी है।"
					},
					"emotion": "base",
					"speaker": "glen",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "아직도… 깨닫지 못했나? 숲의 위대함을….",
						"english": "Still... haven't you realized? The forest's greatness...",
						"japanese": "まだ…気づかぬか？森の偉大さを…。",
						"chinese": "还没…明白吗？森林的伟大…",
						"french": "Toujours pas... compris ? La grandeur de la forêt...",
						"spanish": "¿Todavía... no lo has comprendido? La grandeza del bosque...",
						"vietnamese": "Vẫn chưa... nhận ra sao? Sự vĩ đại của rừng...",
						"thai": "ยัง... ไม่รู้ตัวอีกหรือ? ความยิ่งใหญ่ของป่า...",
						"hindi": "क्या... अभी भी समझे नहीं? वन की महानता को..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 반드시 끝장을 낼 거야!",
						"english": "Don't make me laugh! I'll definitely put an end to this!",
						"japanese": "笑わせるな！必ずケリをつけてやる！",
						"chinese": "别开玩笑了！我一定会了结这一切！",
						"french": "Ne me fais pas rire ! Je vais en finir avec ça !",
						"spanish": "¡No me hagas reír! ¡Voy a acabar con esto!",
						"vietnamese": "Đừng có đùa! Ta nhất định sẽ kết thúc chuyện này!",
						"thai": "อย่ามาตลก! ฉันจะจัดการให้เด็ดขาด!",
						"hindi": "हंसाओ मत! मैं इसे निश्चित रूप से खत्म करूँगा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하하… 숲의 심장은… 널 기다린다.",
						"english": "Hahahaha... The heart of the forest... awaits you.",
						"japanese": "ハハハ… 森の心臓が… お前を待っている。",
						"chinese": "哈哈哈… 森林的心脏… 在等着你。",
						"french": "Hahahaha... Le cœur de la forêt... t'attend.",
						"spanish": "Jajajaja... El corazón del bosque... te espera.",
						"vietnamese": "Hahahaha... Trái tim của rừng... đang chờ ngươi.",
						"thai": "ฮ่าฮ่าฮ่า... หัวใจของป่า... กำลังรอเจ้าอยู่",
						"hindi": "हाहाहा... वन का हृदय... तुम्हारा इंतज़ार कर रहा है।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "큭큭… 숲은… 영원히….",
						"english": "Hehehe... The forest... forever...",
						"japanese": "ククク… 森は… 永遠に…。",
						"chinese": "嘿嘿… 森林… 永恒…",
						"french": "Héhé… La forêt… pour toujours…",
						"spanish": "Jejeje… El bosque… para siempre…",
						"vietnamese": "Khà khà… Rừng thì… vĩnh viễn…",
						"thai": "คิกคิก... ป่าจะ... คงอยู่ตลอดไป...",
						"hindi": "खिखिखि… जंगल… हमेशा…"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…다음엔… 더 완벽하게….",
						"english": "...Next time... more perfectly...",
						"japanese": "…次は… もっと完璧に…。",
						"chinese": "…下次… 会更完美…",
						"french": "…La prochaine fois… plus parfaitement…",
						"spanish": "…La próxima vez… más perfectamente…",
						"vietnamese": "…Lần tới… sẽ hoàn hảo hơn…",
						"thai": "...ครั้งหน้า... จะสมบูรณ์แบบยิ่งกว่า...",
						"hindi": "…अगली बार… और भी पूर्णता से…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 네 광기도 끝이야.",
						"english": "Shut up! Your madness ends here.",
						"japanese": "黙れ！お前の狂気も終わりだ。",
						"chinese": "闭嘴！你的疯狂也到此为止了。",
						"french": "Tais-toi ! Ta folie prend fin ici.",
						"spanish": "¡Cállate! Tu locura termina aquí.",
						"vietnamese": "Im đi! Cơn điên của ngươi kết thúc rồi.",
						"thai": "หุบปาก! ความบ้าคลั่งของแกจบแค่นี้!",
						"hindi": "चुप हो जा! तेरा पागलपन यहीं खत्म होता है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기괴하게 뒤틀린 그림자는 소멸했다. 숲의 블랙코미디는 잠시 멈춘 듯 보였다.",
						"english": "The grotesquely twisted shadow vanished. The forest's black comedy seemed to pause for a moment.",
						"japanese": "奇怪に歪んだ影は消滅した。森のブラックコメディは一時的に止まったようだった。",
						"chinese": "怪诞扭曲的影子消失了。森林的黑色喜剧似乎暂时停歇了。",
						"french": "L'ombre grotesquement tordue disparut. La comédie noire de la forêt sembla s'interrompre un instant.",
						"spanish": "La sombra grotescamente retorcida se desvaneció. La comedia negra del bosque pareció detenerse por un momento.",
						"vietnamese": "Bóng ma méo mó kỳ quái đã biến mất. Vở hài kịch đen của khu rừng dường như tạm dừng lại.",
						"thai": "เงาบิดเบี้ยวพิกลหายไปแล้ว ดูเหมือนเรื่องตลกหม่นของป่าจะหยุดลงชั่วขณะ",
						"hindi": "विकृत, भयंकर छाया लुप्त हो गई। जंगल की ब्लैक कॉमेडी कुछ देर के लिए रुक गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그러나 진정한 광기는 아직 모습을 드러내지 않았다. 숲은… 여전히 숨을 쉬고 있었다.",
						"english": "But the true madness had not yet revealed itself. The forest... was still breathing.",
						"japanese": "しかし、真の狂気はまだ姿を現していなかった。森は… 未だ息をしていた。",
						"chinese": "然而，真正的疯狂尚未显现。森林… 依然在呼吸。",
						"french": "Mais la véritable folie ne s'était pas encore révélée. La forêt… respirait toujours.",
						"spanish": "Pero la verdadera locura aún no se había revelado. El bosque… seguía respirando.",
						"vietnamese": "Nhưng cơn điên thật sự vẫn chưa lộ diện. Khu rừng… vẫn đang thở.",
						"thai": "แต่ความบ้าคลั่งที่แท้จริงยังไม่ปรากฏตัว ป่า... ยังคงหายใจอยู่",
						"hindi": "परंतु असली पागलपन अभी तक सामने नहीं आया था। जंगल… अब भी साँस ले रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "glen",
					"action": "enter",
					"spot": [
						2,
						1
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "마지막 문양까지 해석했어. 이제 확실해.",
						"english": "I've deciphered the last symbol. Now it's certain.",
						"japanese": "最後の文様まで解読した。これで確実だ。",
						"chinese": "我已经解读了最后一个图案。现在可以确定了。",
						"french": "J'ai déchiffré le dernier symbole. Maintenant, c'est certain.",
						"spanish": "He descifrado el último símbolo. Ahora es seguro.",
						"vietnamese": "Tôi đã giải mã được ký hiệu cuối cùng. Giờ thì chắc chắn rồi.",
						"thai": "ฉันถอดรหัสลวดลายสุดท้ายได้แล้ว. ตอนนี้แน่ใจแล้ว.",
						"hindi": "मैंने आखिरी प्रतीक भी समझ लिया है। अब यह निश्चित है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "이 숲은… 너희도 '구원'할 거야. 자신들의 방식으로.",
						"english": "This forest... will 'save' you too. In its own way.",
						"japanese": "この森は… お前たちも「救済」するだろう。自分たちのやり方で。",
						"chinese": "这片森林… 也会“拯救”你们。以它自己的方式。",
						"french": "Cette forêt… elle vous 'sauvera' aussi. À sa manière.",
						"spanish": "Este bosque… también os 'salvará'. A su manera.",
						"vietnamese": "Khu rừng này... cũng sẽ 'cứu rỗi' các ngươi. Theo cách riêng của nó.",
						"thai": "ป่าแห่งนี้... จะ 'ช่วย' พวกเจ้าด้วยเช่นกัน ในแบบของมันเอง",
						"hindi": "यह जंगल… तुम्हें भी 'बचाएगा'। अपने ही तरीके से।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그딴 구원 필요 없어!",
						"english": "We don't need that kind of salvation!",
						"japanese": "そんな救済、いらない！",
						"chinese": "那种救赎，我们不需要！",
						"french": "On n'a pas besoin de ce genre de salut !",
						"spanish": "¡No necesitamos esa clase de salvación!",
						"vietnamese": "Không cần loại cứu rỗi đó!",
						"thai": "ไม่ต้องการการช่วยเหลือแบบนั้น!",
						"hindi": "हमें ऐसी मुक्ति नहीं चाहिए!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크하하… 그래. 거부할 순 없지.",
						"english": "Kahaha... Indeed. You can't refuse.",
						"japanese": "クハハ… そうだ。拒否することはできない。",
						"chinese": "哈哈哈… 是啊。你们无法拒绝。",
						"french": "Hahaha… Oui. Vous ne pouvez pas refuser.",
						"spanish": "Jajaja... Así es. No podéis negaros.",
						"vietnamese": "Khà khà… Đúng vậy. Không thể từ chối đâu.",
						"thai": "คิกคิก... ใช่แล้ว ปฏิเสธไม่ได้หรอก",
						"hindi": "कहाहा… हाँ। तुम मना नहीं कर सकते।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "곧 너희도… 숲의 완벽한 일부가 될 테니까.",
						"english": "Soon, you too... will become a perfect part of the forest.",
						"japanese": "すぐに、お前たちも… 森の完璧な一部になるだろうからな。",
						"chinese": "很快你们也会… 成为森林完美的一部分。",
						"french": "Bientôt, vous aussi… ferez partie intégrante de la forêt.",
						"spanish": "Pronto vosotros también… seréis una parte perfecta del bosque.",
						"vietnamese": "Chẳng mấy chốc các ngươi cũng sẽ… trở thành một phần hoàn hảo của khu rừng.",
						"thai": "อีกไม่นานพวกเจ้าก็... จะกลายเป็นส่วนหนึ่งที่สมบูรณ์แบบของป่า",
						"hindi": "जल्द ही तुम भी… जंगल का एक पूर्ण हिस्सा बन जाओगे।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "glen",
					"type": "direction",
					"action": "exit"
				},
				{
					"content": {
						"korean": "이게 숲의 진정한 얼굴이야! 조심해!",
						"english": "This is the forest's true face! Be careful!",
						"japanese": "これが森の本当の顔だ！気をつけろ！",
						"chinese": "这才是森林的真面目！小心！",
						"french": "C'est le vrai visage de la forêt ! Attention !",
						"spanish": "¡Esta es la verdadera cara del bosque! ¡Cuidado!",
						"vietnamese": "Đây chính là bộ mặt thật của khu rừng! Cẩn thận đó!",
						"thai": "นี่คือโฉมหน้าที่แท้จริงของป่า! ระวังตัวด้วย!",
						"hindi": "यह जंगल का असली चेहरा है! सावधान!"
					},
					"emotion": "sad",
					"speaker": "glen",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 유적의 벽화. 숲의 가장 깊은 진실이 거기 새겨져 있었다.",
			"'구원'이라는 이름 뒤에 숨겨진 피와 광기.",
			"이 숲은 거대한 블랙코미디였다."
		],
		"english": [
			"Ancient murals. The forest's deepest truth etched within.",
			"Blood and madness hidden behind the name 'Salvation'.",
			"This forest was a grand black comedy."
		],
		"japanese": [
			"古代遺跡の壁画。森の最も深き真実がそこに刻まれていた。",
			"'救済'という名の裏に隠された血と狂気。",
			"この森は壮大なブラックコメディだった。"
		],
		"chinese": [
			"古老遗迹的壁画。森林最深处的真相刻印其中。",
			"隐藏在'救赎'之名下的鲜血与疯狂。",
			"这片森林，是一场巨大的黑色喜剧。"
		],
		"french": [
			"Fresques anciennes. La plus profonde vérité de la forêt y était gravée.",
			"Sang et folie, cachés derrière le nom de 'Salut'.",
			"Cette forêt était une immense comédie noire."
		],
		"spanish": [
			"Murales antiguos. La verdad más profunda del bosque, grabada en ellos.",
			"Sangre y locura, ocultas tras el nombre de 'Salvación'.",
			"Este bosque era una gran comedia negra."
		],
		"vietnamese": [
			"Bích họa cổ xưa. Sự thật sâu thẳm nhất của khu rừng được khắc ghi ở đó.",
			"Máu và sự điên loạn ẩn sau cái tên 'Cứu Rỗi'.",
			"Khu rừng này là một vở hài kịch đen khổng lồ."
		],
		"thai": [
			"จิตรกรรมฝาผนังโบราณ ความจริงอันลึกซึ้งที่สุดของป่าสลักอยู่ ณ ที่นั้น",
			"เลือดและความวิปลาสซ่อนอยู่เบื้องหลังนาม 'ความรอด'",
			"ป่าแห่งนี้คือโศกนาฏกรรมตลกสีดำอันยิ่งใหญ่"
		],
		"hindi": [
			"प्राचीन भित्तिचित्र। वन का सबसे गहरा सत्य उनमें अंकित था।",
			"'मुक्ति' के नाम के पीछे छिपा रक्त और उन्माद।",
			"यह जंगल एक विशाल ब्लैक कॉमेडी था।"
		]
	}
} as const;
