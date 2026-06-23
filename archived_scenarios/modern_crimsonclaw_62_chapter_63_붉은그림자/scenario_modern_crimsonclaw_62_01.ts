export const scenario_modern_crimsonclaw_62_01 = {
	"scenario_id": "modern_crimsonclaw_62_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"max": {
			"id": "mon_6e8c1577-89e2-49f6-a9f3-a6521b9e7f59",
			"name": {
				"korean": "맥스",
				"english": "Max",
				"japanese": "マックス",
				"chinese": "麦克斯",
				"french": "Max",
				"spanish": "Max",
				"vietnamese": "Max",
				"thai": "แม็กซ์",
				"hindi": "मैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8bd7f351-400b-46f9-828f-aa2542734900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/62971060-c904-4d96-afcd-d11f831b3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 붉은 녹에 잠겼다.",
			"남은 것은 폐허와 잊혀진 이야기뿐.",
			"우리는 그 속을 걷는다. 진실을 찾아서.",
			"그러나 도시는, 모든 것을 숨기고 있었다."
		],
		"english": [
			"The world was submerged in red rust.",
			"All that remained were ruins and forgotten tales.",
			"We walk through it, searching for the truth.",
			"But the city hid everything."
		],
		"japanese": [
			"世界は赤い錆に沈んだ。",
			"残されたのは廃墟と忘れ去られた物語だけ。",
			"私たちはその中を歩く。真実を求めて。",
			"しかし都市は、すべてを隠していた。"
		],
		"chinese": [
			"世界被红锈淹没。",
			"只剩下废墟和被遗忘的故事。",
			"我们穿行其中，寻找真相。",
			"然而，城市隐藏了一切。"
		],
		"french": [
			"Le monde fut submergé par la rouille rouge.",
			"Il ne restait que des ruines et des histoires oubliées.",
			"Nous y marchons, à la recherche de la vérité.",
			"Mais la ville cachait tout."
		],
		"spanish": [
			"El mundo se sumergió en óxido rojo.",
			"Solo quedaron ruinas e historias olvidadas.",
			"Caminamos a través de él, buscando la verdad.",
			"Pero la ciudad lo escondía todo."
		],
		"vietnamese": [
			"Thế giới chìm trong rỉ sét đỏ.",
			"Chỉ còn lại hoang tàn và những câu chuyện bị lãng quên.",
			"Chúng ta bước đi trong đó, tìm kiếm sự thật.",
			"Nhưng thành phố lại che giấu mọi thứ."
		],
		"thai": [
			"โลกจมดิ่งในสนิมแดง.",
			"เหลือเพียงซากปรักหักพังและเรื่องราวที่ถูกลืมเลือน.",
			"เราเดินผ่านมันไป เพื่อค้นหาความจริง.",
			"แต่เมืองนี้ซ่อนทุกสิ่งทุกอย่างไว้."
		],
		"hindi": [
			"दुनिया लाल जंग में डूब गई।",
			"बस खंडहर और भूली हुई कहानियाँ ही बची थीं।",
			"हम इसमें चलते हैं, सच की तलाश में।",
			"लेकिन शहर सब कुछ छिपा रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 도시. 붉은 녹이 모든 것을 집어삼켰다.",
						"english": "The ruined city. Red rust has swallowed everything.",
						"japanese": "廃墟と化した都市。赤い錆がすべてを飲み込んだ。",
						"chinese": "废墟之城。红锈吞噬了一切。",
						"french": "La ville en ruines. La rouille rouge a tout englouti.",
						"spanish": "La ciudad en ruinas. El óxido rojo lo ha devorado todo.",
						"vietnamese": "Thành phố hoang tàn. Rỉ sét đỏ đã nuốt chửng mọi thứ.",
						"thai": "เมืองที่พังทลาย. สนิมแดงกลืนกินทุกสิ่ง.",
						"hindi": "बर्बाद शहर। लाल जंग ने सब कुछ निगल लिया है।"
					}
				},
				{
					"speaker": "max",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "여기가 그 '미술 설치물'이 있는 곳이에요. 빛나긴 하는데… 그냥 고철 덩어리 같아요.",
						"english": "This is where that 'art installation' is. It glows, but... it just looks like a pile of scrap metal.",
						"japanese": "ここがその「美術インスタレーション」がある場所ですよ。光ってはいますけど…ただのガラクタの山みたいです。",
						"chinese": "这就是那个“艺术装置”所在的地方。它会发光，但…看起来就像一堆废铁。",
						"french": "C'est ici qu'est cette « installation artistique ». Ça brille, mais... on dirait juste un tas de ferraille.",
						"spanish": "Aquí es donde está esa \"instalación artística\". Brilla, pero... parece un montón de chatarra.",
						"vietnamese": "Đây là nơi có 'tác phẩm nghệ thuật' đó. Nó phát sáng, nhưng… chỉ giống như một đống sắt vụn thôi.",
						"thai": "นี่คือที่ที่ \"งานศิลปะจัดวาง\" นั้นอยู่ครับ. มันเรืองแสงนะ แต่...ก็แค่กองเศษเหล็กธรรมดาเอง.",
						"hindi": "यहीं वह 'कला स्थापना' है। यह चमकता तो है, पर… बस कबाड़ के ढेर जैसा लगता है।"
					},
					"speaker": "max",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…빛이 이상해. 그냥 고철은 아닌 것 같아.",
						"english": "...The light is strange. It doesn't seem like just scrap metal.",
						"japanese": "…光が変だ。ただのガラクタではないようだ。",
						"chinese": "……那光芒很奇怪。它似乎不是普通的废铁。",
						"french": "...La lumière est étrange. On dirait que ce n'est pas juste de la ferraille.",
						"spanish": "...La luz es extraña. No parece solo chatarra.",
						"vietnamese": "…Ánh sáng lạ thật. Dường như không phải chỉ là sắt vụn đâu.",
						"thai": "แสงมันแปลกๆ. ดูไม่เหมือนแค่เศษเหล็กธรรมดา.",
						"hindi": "रोशनी अजीब है। यह सिर्फ कबाड़ जैसा नहीं लगता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "max",
					"content": {
						"korean": "도시 사람들은 이상한 소문이 많아요. 저런 거에 영혼이 깃들었다느니….",
						"english": "City folks have a lot of strange rumors. Like spirits inhabiting things like that...",
						"japanese": "街の人たちは変な噂が多いんです。あんなものに魂が宿っているとか…。",
						"chinese": "城里人有很多奇怪的传闻。说什么那种东西里面寄宿着灵魂…。",
						"french": "Les gens de la ville ont beaucoup de rumeurs étranges. Comme quoi des esprits habiteraient des choses pareilles…",
						"spanish": "La gente de la ciudad tiene muchos rumores extraños. Como que hay espíritus habitando cosas así...",
						"vietnamese": "Người dân thành phố có nhiều tin đồn kỳ lạ lắm. Như là linh hồn trú ngụ trong mấy thứ đó…",
						"thai": "คนในเมืองมีข่าวลือแปลกๆ เยอะแยะไปหมด. อย่างกับว่ามีวิญญาณสิงสถิตอยู่ในของแบบนั้น...",
						"hindi": "शहर के लोगों में अजीबोगरीब अफवाहें हैं। जैसे ऐसी चीज़ों में आत्माएँ बसती हैं…।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "부서진 테이블 위, 빛바랜 금반지가 놓여 있었다. 한때 강렬했던 흔적.",
						"english": "On the broken table, a faded gold ring lay. A trace of what was once intense.",
						"japanese": "壊れたテーブルの上に、色褪せた金の指輪が置かれていた。かつて強烈だった痕跡。",
						"chinese": "破碎的桌子上，放着一枚褪色的金戒指。曾经炽烈的痕迹。",
						"french": "Sur la table brisée, une bague en or décolorée reposait. Une trace de ce qui fut autrefois intense.",
						"spanish": "Sobre la mesa rota, yacía un anillo de oro descolorido. Un rastro de lo que una vez fue intenso.",
						"vietnamese": "Trên chiếc bàn đổ nát, một chiếc nhẫn vàng phai màu nằm đó. Dấu vết của một quá khứ mãnh liệt.",
						"thai": "บนโต๊ะที่พังทลาย มีแหวนทองคำซีดจางวางอยู่. ร่องรอยของสิ่งที่เคยรุ่งเรือง.",
						"hindi": "टूटी मेज़ पर, एक फीकी सोने की अंगूठी रखी थी। कभी तीव्र रही किसी चीज़ का निशान।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "max",
					"content": {
						"korean": "이런 폐허에서 금반지라… 과거엔 갱단 은신처였다는 소문도 있어요.",
						"english": "A gold ring in these ruins... There are rumors it used to be a gang hideout.",
						"japanese": "こんな廃墟で金の指輪とはね… 昔はギャングの隠れ家だったなんて噂もありますよ。",
						"chinese": "在这样的废墟里发现金戒指… 有传闻说这里以前是帮派的藏身之处。",
						"french": "Une bague en or dans de telles ruines... On raconte que c'était autrefois une cachette de gang.",
						"spanish": "¿Un anillo de oro en estas ruinas? Hay rumores de que solía ser un escondite de pandillas.",
						"vietnamese": "Nhẫn vàng ở một nơi hoang tàn thế này… Có tin đồn đây từng là nơi ẩn náu của băng đảng.",
						"thai": "แหวนทองคำในซากปรักหักพังแบบนี้เหรอ... มีข่าวลือว่าในอดีตเคยเป็นที่ซ่อนตัวของแก๊งค์ด้วยนะ.",
						"hindi": "ऐसे खंडहर में सोने की अंगूठी... अफवाहें हैं कि यह पहले किसी गिरोह का ठिकाना था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "갱단…?",
						"english": "A gang...?",
						"japanese": "ギャング…？",
						"chinese": "帮派…？",
						"french": "Un gang… ?",
						"spanish": "¿Una pandilla…?",
						"vietnamese": "Băng đảng…?",
						"thai": "แก๊งค์…?",
						"hindi": "गिरोह…?"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "max",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "sad",
					"content": {
						"korean": "여긴 도시의 기록 보관소였다는데… 다 엉망이네요.",
						"english": "They say this was the city's archive... It's a mess.",
						"japanese": "ここがかつて街の記録保管所だったらしいけど…めちゃくちゃね。",
						"chinese": "据说这里曾是城市的档案馆…现在一团糟。",
						"french": "On dit que c'était les archives de la ville… C'est le chaos total.",
						"spanish": "Dicen que esto era el archivo de la ciudad... Es un desastre.",
						"vietnamese": "Nghe nói đây là kho lưu trữ của thành phố… Mọi thứ tan hoang rồi.",
						"thai": "ว่ากันว่านี่คือหอจดหมายเหตุของเมือง... เละเทะไปหมดเลย",
						"hindi": "कहते हैं ये शहर का अभिलेखागार था… सब कुछ गड़बड़ है।"
					}
				},
				{
					"content": {
						"korean": "낡은 신문 조각들이 여기저기 흩어져 있었다. 핏자국처럼 번진 잉크.",
						"english": "Old newspaper scraps were scattered everywhere. Ink bled like bloodstains.",
						"japanese": "古い新聞の切れ端があちこちに散らばっていた。血痕のように滲んだインク。",
						"chinese": "旧报纸碎片散落一地。墨水像血迹一样晕开。",
						"french": "De vieux morceaux de journaux étaient éparpillés. L'encre bavait comme des taches de sang.",
						"spanish": "Pedazos de periódicos viejos estaban esparcidos por todas partes. Tinta corrida como manchas de sangre.",
						"vietnamese": "Những mảnh báo cũ vương vãi khắp nơi. Mực nhòe nhoẹt như vết máu.",
						"thai": "เศษหนังสือพิมพ์เก่ากระจัดกระจายไปทั่ว หมึกเลอะเหมือนคราบเลือด",
						"hindi": "पुराने अख़बारों के टुकड़े हर जगह बिखरे हुए थे। स्याही खून के धब्बे की तरह फैली हुई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…'블러드핸드 갱단, 비극적 최후'. 이런 건 왜 아직 남아있는지.",
						"english": "...'Bloodhand Gang, Tragic End'. Why are these still here?",
						"japanese": "…「ブラッドハンドギャング、悲劇的な最期」。こんなものがなぜまだ残ってるのかしら。",
						"chinese": "…‘血手帮，悲剧结局’。这种东西为什么还留着。",
						"french": "...'Le Gang Main-de-Sang, fin tragique'. Pourquoi ces choses sont-elles encore là ?",
						"spanish": "...'La Banda Mano Sangrienta, fin trágico'. ¿Por qué esto sigue aquí?",
						"vietnamese": "...'Băng Bloodhand, kết cục bi thảm'. Sao mấy thứ này vẫn còn ở đây nhỉ.",
						"thai": "...'แก๊งมือโลหิต จุดจบที่น่าเศร้า' ทำไมถึงยังมีเรื่องแบบนี้อยู่",
						"hindi": "…'ब्लडहैंड गैंग, दुखद अंत'। ये सब अभी भी यहाँ क्यों है?"
					},
					"emotion": "base",
					"speaker": "max",
					"type": "speech"
				},
				{
					"content": {
						"korean": "블러드핸드… 그 금반지도 혹시 그 갱단 것일까.",
						"english": "Bloodhand... Could that gold ring belong to that gang too?",
						"japanese": "ブラッドハンド…あの金の指輪ももしかしてそのギャングのものかしら。",
						"chinese": "血手…那枚金戒指会不会也是那个帮派的。",
						"french": "Main-de-Sang… Cette bague en or, appartiendrait-elle aussi à ce gang ?",
						"spanish": "Mano Sangrienta... ¿Ese anillo de oro también será de esa pandilla?",
						"vietnamese": "Bloodhand… Liệu chiếc nhẫn vàng đó cũng thuộc về băng đảng đó không?",
						"thai": "มือโลหิต... แหวนทองนั่นก็อาจจะเป็นของแก๊งนั้นด้วยรึเปล่า",
						"hindi": "ब्लडहैंड… क्या वह सोने की अंगूठी भी उस गिरोह की है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모르겠어요. 그냥 옛날 이야기겠죠. 이런 도시에서 무슨 영웅 놀이를 한다고.",
						"english": "I don't know. Probably just old stories. What kind of heroics would happen in a city like this?",
						"japanese": "分からないわ。ただの昔話でしょ。こんな街で何の英雄ごっこよ。",
						"chinese": "我不知道。大概只是些老故事吧。在这种城市里，哪有什么英雄戏码。",
						"french": "Je ne sais pas. Juste de vieilles histoires, j'imagine. Quel genre d'héroïsme pourrait exister dans une ville pareille ?",
						"spanish": "No sé. Seguramente solo son viejas historias. ¿Qué tipo de heroísmo puede haber en una ciudad como esta?",
						"vietnamese": "Tôi không biết. Chắc chỉ là mấy chuyện ngày xưa thôi. Ở cái thành phố này thì làm gì có anh hùng nào.",
						"thai": "ไม่รู้สิคะ คงเป็นแค่เรื่องเล่าเก่าๆ ไม่มีทางที่จะมีวีรบุรุษอะไรในเมืองแบบนี้หรอก",
						"hindi": "मुझे नहीं पता। शायद बस पुरानी कहानियाँ होंगी। इस तरह के शहर में क्या नायकगिरी होगी?"
					},
					"speaker": "max",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "max",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이상한 형상의 벽화가 나타났다. 마치 살아있는 듯한 손.",
						"english": "A strange mural appeared. A hand, as if alive.",
						"japanese": "奇妙な形の壁画が現れた。まるで生きているかのような手。",
						"chinese": "一幅形状怪异的壁画出现了。一只手，栩栩如生。",
						"french": "Une étrange fresque est apparue. Une main, comme si elle était vivante.",
						"spanish": "Un mural de forma extraña apareció. Una mano, como si estuviera viva.",
						"vietnamese": "Một bức bích họa hình thù kỳ lạ hiện ra. Một bàn tay, cứ như còn sống.",
						"thai": "ภาพจิตรกรรมฝาผนังรูปร่างแปลกปรากฏขึ้น มือที่ดูเหมือนมีชีวิต",
						"hindi": "एक अजीबोगरीब भित्तिचित्र दिखाई दिया। एक हाथ, मानो जीवित हो।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 또 뭐야… 섬뜩해.",
						"english": "What's this now...? Creepy.",
						"japanese": "これ何よ…不気味ね。",
						"chinese": "这又是什么…真让人毛骨悚然。",
						"french": "Qu'est-ce que c'est encore ça… Horrible.",
						"spanish": "¿Y esto qué es...? Espeluznante.",
						"vietnamese": "Cái gì nữa đây…? Ghê rợn quá.",
						"thai": "นี่มันอะไรอีกเนี่ย... น่าขนลุก",
						"hindi": "ये अब क्या है…? डरावना है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "아, '저주받은 손' 전설이요? 도시를 떠도는 괴담 같은 거예요.",
						"english": "Oh, the legend of the 'Cursed Hand'? It's like a spooky urban myth.",
						"japanese": "ああ、「呪われた手」の伝説ですか？街をさまよう怪談みたいなものですよ。",
						"chinese": "啊，是‘诅咒之手’的传说吗？就是那种在城市里流传的怪谈。",
						"french": "Ah, la légende de la 'Main Maudite' ? C'est une sorte de mythe urbain effrayant qui circule en ville.",
						"spanish": "Ah, ¿la leyenda de la 'Mano Maldita'? Es como un cuento de fantasmas que ronda la ciudad.",
						"vietnamese": "À, truyền thuyết 'Bàn tay bị nguyền rủa' hả? Nó giống như một câu chuyện ma quái đô thị thôi.",
						"thai": "อ๋อ ตำนาน 'มือต้องคำสาป' น่ะเหรอคะ มันก็แค่เรื่องเล่าหลอนๆ ที่เล่าขานกันในเมืองน่ะค่ะ",
						"hindi": "ओह, 'शापित हाथ' की किंवदंती? यह शहर में फैली एक डरावनी कहानी जैसी है।"
					}
				},
				{
					"speaker": "max",
					"emotion": "base",
					"content": {
						"korean": "닿는 모든 것을 집어삼킨다나? 믿을 건 못 되죠.",
						"english": "It's said to swallow everything it touches? Can't really believe that.",
						"japanese": "触れるもの全てを飲み込む、ですって？信じられるものじゃないわ。",
						"chinese": "据说它能吞噬所有触碰到的东西？不可信啦。",
						"french": "On dit qu'elle dévore tout ce qu'elle touche ? On ne peut pas vraiment y croire.",
						"spanish": "¿Que se traga todo lo que toca? No se puede creer eso.",
						"vietnamese": "Nó nuốt chửng mọi thứ nó chạm vào à? Chẳng đáng tin đâu.",
						"thai": "บอกว่าจะกลืนกินทุกสิ่งที่สัมผัสเหรอคะ? ไม่น่าเชื่อถือหรอก",
						"hindi": "कहते हैं कि यह छूने वाली हर चीज़ को निगल जाती है? इस पर विश्वास नहीं किया जा सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…괴담 치고는 그림이 너무 생생한데.",
						"english": "...For a ghost story, the imagery is too vivid.",
						"japanese": "「…怪談にしては、描写がリアルすぎる。」",
						"chinese": "「…作为怪谈来说，这画面也太生动了。」",
						"french": "...Pour une histoire de fantômes, l'image est trop vivante.",
						"spanish": "...Para ser una historia de fantasmas, la imagen es demasiado vívida.",
						"vietnamese": "...Đối với một câu chuyện ma, hình ảnh này quá sống động.",
						"thai": "...สำหรับเรื่องผี ภาพมันดูสมจริงเกินไป",
						"hindi": "...एक भूतिया कहानी के लिए, यह चित्र बहुत सजीव है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "max",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "심장이 조여드는 듯한 폐허. 어딘가에서 피비린내가 났다.",
						"english": "Heart-wrenching ruins. The smell of blood hung in the air.",
						"japanese": "「心臓が締め付けられるような廃墟。どこからか血の匂いがした。」",
						"chinese": "「废墟令人心悸。空气中弥漫着血腥味。」",
						"french": "Des ruines à vous serrer le cœur. Une odeur de sang flottait quelque part.",
						"spanish": "Ruinas que te encogían el corazón. El olor a sangre flotaba en el aire.",
						"vietnamese": "Khu di tích khiến tim thắt lại. Mùi máu tanh thoang thoảng đâu đó.",
						"thai": "ซากปรักหักพังที่บีบรัดหัวใจ กลิ่นคาวเลือดโชยมาแต่ที่ไหนสักแห่ง",
						"hindi": "खंडहर जो दिल को जकड़ लेते थे। कहीं से खून की गंध आ रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "더 깊이 들어온 것 같아. 공기가 무거워.",
						"english": "We seem to have come deeper. The air is heavy.",
						"japanese": "「もっと奥に入り込んだみたいだ。空気が重い。」",
						"chinese": "「我们好像深入了。空气很沉重。」",
						"french": "Nous semblons être entrés plus profondément. L'air est lourd.",
						"spanish": "Parece que hemos entrado más profundo. El aire es pesado.",
						"vietnamese": "Chúng ta đã đi sâu hơn rồi. Không khí thật nặng nề.",
						"thai": "ดูเหมือนเราจะเข้ามาลึกกว่าเดิม อากาศมันหนักอึ้ง",
						"hindi": "लगता है हम और गहरे आ गए हैं। हवा भारी है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…저도 이런 느낌은 처음이에요. 뭔가… 잘못된 것 같아요.",
						"english": "...This feeling... I've never had it before. Something... feels wrong.",
						"japanese": "「…私もこんな感覚は初めてです。何か…間違っている気がします。」",
						"chinese": "「…我还是第一次有这种感觉。总觉得…不太对劲。」",
						"french": "...C'est la première fois que je ressens ça. Quelque chose... ne va pas.",
						"spanish": "...Nunca había sentido algo así. Algo... no está bien.",
						"vietnamese": "...Tôi cũng chưa từng có cảm giác này. Có gì đó... không đúng.",
						"thai": "...นี่เป็นความรู้สึกที่ไม่เคยเจอมาก่อนเลยค่ะ รู้สึกเหมือนมีบางอย่าง... ผิดปกติ",
						"hindi": "...मुझे भी ऐसा अनुभव पहली बार हो रहा है। कुछ... गलत लग रहा है।"
					},
					"speaker": "max",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 와서 돌아갈 순 없어.",
						"english": "There's no turning back now.",
						"japanese": "「今さら引き返せない。」",
						"chinese": "「现在已经无法回头了。」",
						"french": "Il est trop tard pour faire demi-tour.",
						"spanish": "Ya no podemos volver atrás.",
						"vietnamese": "Giờ không thể quay đầu lại được nữa.",
						"thai": "ตอนนี้จะถอยกลับก็ไม่ได้แล้ว",
						"hindi": "अब वापस नहीं जा सकते।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "아직도 이해하지 못하는군. 너희는 그저 먹잇감일 뿐.",
						"english": "Still don't understand, do you? You're just prey.",
						"japanese": "まだ理解できていないようだな。お前たちはただの獲物だ。",
						"chinese": "你们还是不明白吗？你们不过是猎物罢了。",
						"french": "Vous ne comprenez toujours pas ? Vous n'êtes que des proies.",
						"spanish": "¿Aún no lo entiendes? No sois más que presas.",
						"vietnamese": "Vẫn không hiểu sao? Các ngươi chỉ là con mồi thôi.",
						"thai": "ยังไม่เข้าใจอีกหรือ? พวกเจ้าเป็นแค่เหยื่อเท่านั้น",
						"hindi": "अभी भी नहीं समझे? तुम बस शिकार हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어…!",
						"english": "Ugh... I can't end it here...!",
						"japanese": "くっ…ここで終わらせるわけには…！",
						"chinese": "呃…不能在这里结束…！",
						"french": "Ugh... Ça ne peut pas se terminer ici...!",
						"spanish": "¡Ugh... no puedo terminar aquí...!",
						"vietnamese": "Khụ... không thể kết thúc ở đây được...!",
						"thai": "อึก... จะจบที่นี่ไม่ได้...!",
						"hindi": "उफ़... मैं इसे यहाँ खत्म नहीं कर सकता...!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이게 끝이 아니다. 붉은 피는… 계속 흐를 것이다.",
						"english": "...This isn't over. The crimson blood... will continue to flow.",
						"japanese": "…これで終わりではない。紅い血は…流れ続けるだろう。",
						"chinese": "…这还没完。赤红的鲜血…将继续流淌。",
						"french": "...Ce n'est pas la fin. Le sang écarlate... continuera de couler.",
						"spanish": "...Esto no es el final. La sangre carmesí... seguirá fluyendo.",
						"vietnamese": "...Đây chưa phải là kết thúc. Máu đỏ... sẽ tiếp tục chảy.",
						"thai": "...นี่ไม่ใช่จุดจบ เลือดสีชาด...จะยังคงหลั่งไหลต่อไป",
						"hindi": "...यह अंत नहीं है। लाल रक्त... बहता रहेगा।"
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "겨우… 끝낸 건가.",
						"english": "Finally... is it over?",
						"japanese": "やっと…終わったのか。",
						"chinese": "终于…结束了吗。",
						"french": "Enfin... c'est fini ?",
						"spanish": "¿Por fin... ha terminado?",
						"vietnamese": "Cuối cùng... cũng kết thúc rồi sao.",
						"thai": "ในที่สุด...ก็จบลงแล้วหรือ",
						"hindi": "आखिरकार... क्या यह खत्म हो गया?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재가 스러지자, 빛나던 미술 설치물도 빛을 잃었다.",
						"english": "As the unknown entity fell, the glowing art installation lost its light.",
						"japanese": "正体不明の存在が倒れると、輝いていた美術作品も光を失った。",
						"chinese": "随着不明生物的倒下，发光的艺术装置也失去了光芒。",
						"french": "Alors que l'entité inconnue s'effondrait, l'installation artistique lumineuse perdit son éclat.",
						"spanish": "Al caer la entidad desconocida, la brillante instalación artística también perdió su luz.",
						"vietnamese": "Khi thực thể bí ẩn ngã xuống, tác phẩm nghệ thuật phát sáng cũng mất đi ánh sáng của nó.",
						"thai": "เมื่อสิ่งมีชีวิตปริศนาล้มลง งานศิลปะที่เคยเรืองแสงก็ดับมืดลงด้วย",
						"hindi": "जैसे ही अज्ञात सत्ता गिरी, चमकती हुई कला स्थापना भी अपनी चमक खो बैठी।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 도시의 상처는 더 깊었다. 이것은 시작일 뿐이었다.",
						"english": "But the city's wounds ran deeper. This was only the beginning.",
						"japanese": "しかし、都市の傷はより深かった。これは始まりに過ぎなかった。",
						"chinese": "然而城市的伤痕更深了。这仅仅是开始。",
						"french": "Mais les blessures de la ville étaient plus profondes. Ce n'était que le début.",
						"spanish": "Pero las heridas de la ciudad eran más profundas. Esto era solo el principio.",
						"vietnamese": "Tuy nhiên, vết thương của thành phố còn sâu hơn. Đây chỉ mới là khởi đầu.",
						"thai": "แต่บาดแผลของเมืองกลับลึกกว่านั้น นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "लेकिन शहर के घाव गहरे थे। यह तो बस शुरुआत थी।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "가장 깊은 곳, 붉게 빛나는 심장부가 모습을 드러냈다.",
						"english": "In the deepest part, a crimson glowing core was revealed.",
						"japanese": "「最深部、赤く輝く心臓部が姿を現した。」",
						"chinese": "「最深处，赤红色的核心显露出来。」",
						"french": "Au plus profond, un cœur rougeoyant et palpitant se révéla.",
						"spanish": "En lo más profundo, un núcleo palpitante y rojo brillante se reveló.",
						"vietnamese": "Ở nơi sâu nhất, trái tim đỏ rực đã lộ diện.",
						"thai": "ในส่วนที่ลึกที่สุด หัวใจที่ส่องแสงสีแดงฉานได้ปรากฏตัวขึ้น",
						"hindi": "सबसे गहरे हिस्से में, एक लाल चमकता हुआ केंद्र सामने आया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						5,
						6
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "…침입자인가. 감히 이곳을 더럽히는구나.",
						"english": "...Intruders? How dare you defile this place.",
						"japanese": "「…侵入者か。よくもこの地を汚したな。」",
						"chinese": "「…是入侵者吗。竟敢玷污此地。」",
						"french": "...Des intrus ? Comment osez-vous souiller cet endroit.",
						"spanish": "¿...Intrusos? ¿Cómo osáis profanar este lugar?",
						"vietnamese": "...Kẻ xâm nhập à. Dám làm ô uế nơi này sao.",
						"thai": "...ผู้บุกรุกหรือ? กล้าดียังไงมาแปดเปื้อนที่นี่",
						"hindi": "...घुसपैठिए? तुम्हारी हिम्मत कैसे हुई इस जगह को अपवित्र करने की।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 것의 근원인가?",
						"english": "Are you the source of all this?",
						"japanese": "「お前がこの全ての根源なのか？」",
						"chinese": "「你就是这一切的根源吗？」",
						"french": "Es-tu la source de tout cela ?",
						"spanish": "¿Eres tú la fuente de todo esto?",
						"vietnamese": "Ngươi là nguồn gốc của tất cả những điều này sao?",
						"thai": "เจ้าคือต้นกำเนิดของทั้งหมดนี้ใช่ไหม?",
						"hindi": "क्या तुम इन सबका स्रोत हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "알려고 하지 마라. 너희 같은 필멸자가 감당할 수 있는 진실이 아니다.",
						"english": "Do not seek to know. It is a truth mortals like you cannot bear.",
						"japanese": "「知ろうとするな。お前たちのような、ただの人間が知っていい真実ではない。」",
						"chinese": "「别想知道。那不是你们这些凡人能够承受的真相。」",
						"french": "Ne cherchez pas à savoir. C'est une vérité que des mortels comme vous ne peuvent supporter.",
						"spanish": "No intentes saber. Es una verdad que mortales como vosotros no podéis soportar.",
						"vietnamese": "Đừng cố gắng tìm hiểu. Đó không phải là sự thật mà những kẻ phàm trần như các ngươi có thể chịu đựng.",
						"thai": "อย่าพยายามรู้เลย มันไม่ใช่ความจริงที่มนุษย์อย่างพวกเจ้าจะรับไหว",
						"hindi": "जानने की कोशिश मत करो। यह एक ऐसी सच्चाई है जिसे तुम जैसे नश्वर सहन नहीं कर सकते।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"speaker": "max",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "max",
					"content": {
						"korean": "이건 단순한 괴물이 아니에요! 너무 깊이 들어왔어요!",
						"english": "This isn't just a monster! We've come too deep!",
						"japanese": "「これはただの怪物じゃない！深入りしすぎました！」",
						"chinese": "「这不只是一只怪物！我们走得太深了！」",
						"french": "Ce n'est pas un simple monstre ! Nous sommes allés trop loin !",
						"spanish": "¡Esto no es un simple monstruo! ¡Hemos llegado demasiado lejos!",
						"vietnamese": "Đây không chỉ là một con quái vật! Chúng ta đã đi quá sâu rồi!",
						"thai": "นี่ไม่ใช่แค่สัตว์ประหลาดธรรมดา! พวกเราเข้ามาลึกเกินไปแล้ว!",
						"hindi": "यह सिर्फ एक राक्षस नहीं है! हम बहुत गहरे आ गए हैं!"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "max",
					"direction": "down",
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "물러설 수 없어. 여기서 끝내야 해.",
						"english": "No turning back. It ends here.",
						"japanese": "退けない。ここで終わらせる。",
						"chinese": "不能退缩。必须在这里结束。",
						"french": "Pas de retraite. Ça se termine ici.",
						"spanish": "No puedo retroceder. Debe terminar aquí.",
						"vietnamese": "Không thể lùi bước. Phải kết thúc ở đây.",
						"thai": "ถอยไม่ได้ ต้องจบที่นี่แหละ",
						"hindi": "पीछे नहीं हट सकता। इसे यहीं खत्म करना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것. 너희의 운명은 이미 정해졌다.",
						"english": "Fools. Your fate is already sealed.",
						"japanese": "愚か者め。お前たちの運命は既に定まっている。",
						"chinese": "愚蠢的家伙。你们的命运早已注定。",
						"french": "Imbéciles. Votre destin est déjà scellé.",
						"spanish": "Necios. Vuestro destino ya está sellado.",
						"vietnamese": "Đồ ngốc. Số phận của các ngươi đã định rồi.",
						"thai": "เจ้าพวกโง่ ชะตากรรมของพวกเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "मूर्खों। तुम्हारा भाग्य पहले ही तय हो चुका है।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
