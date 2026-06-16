export const scenario_snowy_cairn_96_05 = {
	"scenario_id": "snowy_cairn_96_05",
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
		"pool_id": "pool_111"
	},
	"rooms": [
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 심판이 모든 것을 집어삼켰다.",
						"english": "Frozen judgment swallowed everything.",
						"japanese": "凍てついた審判が全てを飲み込んだ。",
						"chinese": "冰冷审判吞噬了一切。",
						"french": "Le jugement gelé engloutit tout.",
						"spanish": "El juicio helado lo devoró todo.",
						"vietnamese": "Phán quyết đóng băng nuốt chửng mọi thứ.",
						"thai": "คำพิพากษาที่เยือกแข็งกลืนกินทุกสิ่ง",
						"hindi": "जमा हुआ न्याय सब कुछ निगल गया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "나약한 맹세는 결국 부서지는 법. 너희는 그 무게를 감당할 수 없었다.",
						"english": "Fragile vows always shatter. You could not bear their weight.",
						"japanese": "弱き誓いはやがて砕け散る。お前たちにはその重みに耐えられなかった。",
						"chinese": "脆弱誓言终将破碎。尔等无法承受其重。",
						"french": "Les serments fragiles finissent par se briser. Vous n'avez pas pu supporter leur poids.",
						"spanish": "Las promesas débiles siempre se rompen. No pudisteis soportar su peso.",
						"vietnamese": "Lời thề yếu ớt cuối cùng cũng vỡ tan. Các ngươi không thể gánh vác nổi sức nặng đó.",
						"thai": "คำสาบานที่อ่อนแอในที่สุดก็แตกสลาย พวกเจ้าไม่อาจแบกรับน้ำหนักนั้นได้",
						"hindi": "कमज़ोर कसमें टूट ही जाती हैं। तुम उनका भार सह न सके।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas encore fini… !",
						"spanish": "¡Aún... no ha terminado...!",
						"vietnamese": "Vẫn… chưa kết thúc…!",
						"thai": "ยัง...ไม่จบ...!",
						"hindi": "अभी… ख़त्म नहीं हुआ…!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이바르는 여기서 꺾이지 않는다. 다시 한번… 명예를 걸겠다!",
						"english": "Ivar will not break here. Once more... I stake my honor!",
						"japanese": "イヴァルはここで折れない。もう一度…名誉を賭けよう！",
						"chinese": "伊瓦尔不会在此屈服。再赌一次…我的荣耀！",
						"french": "Ivar ne pliera pas ici. Encore une fois… je mise mon honneur !",
						"spanish": "Ivar no se doblegará aquí. ¡Una vez más... apostaré mi honor!",
						"vietnamese": "Ivar sẽ không gục ngã tại đây. Một lần nữa… ta sẽ đặt cược danh dự của mình!",
						"thai": "อิวาร์จะไม่ยอมแพ้ที่นี่ อีกครั้ง...ข้าจะเอาเกียรติเป็นเดิมพัน!",
						"hindi": "इवार यहाँ नहीं टूटेगा। एक बार फिर… मैं अपनी इज़्ज़त दाँव पर लगाऊँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도인가. 하지만, 너희의 맹세가…",
						"english": "...Is this all? But your vows...",
						"japanese": "…たったこれだけか。だが、お前たちの誓いが…。",
						"chinese": "……就这点程度吗。但是，你们的誓言……",
						"french": "...Ce n'est que ça ? Mais vos serments...",
						"spanish": "...¿Solo esto? Pero vuestros juramentos...",
						"vietnamese": "...Chỉ có vậy thôi sao. Nhưng lời thề của các ngươi...",
						"thai": "แค่นี้เองรึ? แต่คำสาบานของพวกเจ้า...",
						"hindi": "...बस इतना ही? लेकिन तुम्हारी शपथें..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 끝났다고 생각하나? 진정한 심판은 이제부터다.",
						"english": "Do you think it's all over? The true judgment begins now.",
						"japanese": "全てが終わったと思うか？真の審判はこれからだ。",
						"chinese": "你们以为一切都结束了吗？真正的审判才刚刚开始。",
						"french": "Pensez-vous que tout est fini ? Le véritable jugement commence maintenant.",
						"spanish": "¿Creéis que todo ha terminado? El verdadero juicio empieza ahora.",
						"vietnamese": "Các ngươi nghĩ mọi thứ đã kết thúc sao? Sự phán xét thật sự chỉ mới bắt đầu.",
						"thai": "เจ้าคิดว่าทุกสิ่งจบลงแล้วรึ? การพิพากษาที่แท้จริงเพิ่งจะเริ่มต้นขึ้นต่างหาก",
						"hindi": "क्या तुम्हें लगता है कि सब ख़त्म हो गया? असली न्याय अब शुरू होगा।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "끝났다! 우리가 증명했어!",
						"english": "It's over! We've proven it!",
						"japanese": "終わった！私たちが証明した！",
						"chinese": "结束了！我们证明了！",
						"french": "C'est fini ! Nous l'avons prouvé !",
						"spanish": "¡Se acabó! ¡Lo hemos demostrado!",
						"vietnamese": "Kết thúc rồi! Chúng ta đã chứng minh được!",
						"thai": "จบแล้ว! พวกเราพิสูจน์แล้ว!",
						"hindi": "ख़त्म! हमने साबित कर दिया!"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "happy",
					"content": {
						"korean": "맹세는 지켜졌다. 나의 명예는 여기서 빛났다.",
						"english": "The oath is kept. My honor shines here.",
						"japanese": "誓いは守られた。我が名誉はここで輝いた。",
						"chinese": "誓言已守。吾之荣耀在此闪耀。",
						"french": "Le serment est tenu. Mon honneur brille ici.",
						"spanish": "El juramento ha sido cumplido. Mi honor brilla aquí.",
						"vietnamese": "Lời thề đã được giữ. Danh dự của ta tỏa sáng nơi đây.",
						"thai": "คำสาบานถูกรักษาไว้ เกียรติของข้าส่องประกายที่นี่",
						"hindi": "शपथ निभाई गई। मेरा सम्मान यहाँ चमका।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 공기 속에 찢겨진 약속의 파편들이 흩날렸다.",
						"english": "Fragments of a torn promise scattered in the cold air.",
						"japanese": "冷たい空気の中、引き裂かれた約束の破片が舞い散った。",
						"chinese": "冰冷空气中，破碎的诺言碎片随风飘散。",
						"french": "Des fragments de promesse brisée s'éparpillèrent dans l'air froid.",
						"spanish": "Fragmentos de una promesa rota se esparcieron en el aire frío.",
						"vietnamese": "Những mảnh vỡ lời hứa tan vỡ bay lả tả trong không khí lạnh lẽo.",
						"thai": "เศษเสี้ยวคำสัญญาที่ฉีกขาดปลิวว่อนไปในอากาศอันหนาวเย็น",
						"hindi": "ठंडी हवा में टूटे वादे के टुकड़े बिखर गए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리했지만, 아직 끝나지 않은 심판의 그림자가 짙게 드리워져 있었다.",
						"english": "Victorious, yet the shadow of an unfinished judgment looms heavy.",
						"japanese": "勝利したが、まだ終わらぬ審判の影が色濃く差していた。",
						"chinese": "虽已胜利，未竟审判之影却依然浓重。",
						"french": "Victorieux, mais l'ombre d'un jugement inachevé planait lourdement.",
						"spanish": "Victorioso, pero la sombra de un juicio inconcluso se cernía pesadamente.",
						"vietnamese": "Đã chiến thắng, nhưng bóng tối của một phán quyết chưa kết thúc vẫn bao trùm dày đặc.",
						"thai": "ถึงแม้จะชนะ แต่เงาของการพิพากษาที่ยังไม่สิ้นสุดกลับทอดยาวลงมาอย่างหนาแน่น",
						"hindi": "विजयी हुआ, पर एक अधूरे न्याय की छाया गहरी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌무덤이 둔탁한 진동과 함께 꿈틀거렸다. 최후의 심판을 위해 본모습을 드러낼 전조였다.",
						"english": "The Stone Barrow quivered with a dull tremor. It was a prelude to revealing its true form for the final judgment.",
						"japanese": "石塚が鈍い振動と共にうごめいた。最後の審判のために真の姿を現す前兆だった。",
						"chinese": "石冢伴随着沉闷的震动而颤动。这是为最终审判显露其真面目的前兆。",
						"french": "Le Tumulus de Pierre frémit d'une sourde vibration. C'était un prélude à la révélation de sa vraie forme pour le jugement final.",
						"spanish": "El Túmulo de Piedra tembló con una sorda vibración. Era el preludio a la revelación de su verdadera forma para el juicio final.",
						"vietnamese": "Mộ Đá run rẩy với một chấn động trầm đục. Đó là điềm báo nó sẽ lộ diện hình hài thật để phán xét cuối cùng.",
						"thai": "สุสานหินสั่นสะเทือนด้วยแรงสั่นสะเทือนอื้ออึง มันเป็นลางบอกเหตุที่จะเผยร่างที่แท้จริงเพื่อการพิพากษาครั้งสุดท้าย",
						"hindi": "पत्थर का टीला एक मंद कंपन के साथ हिल उठा। यह अंतिम न्याय के लिए अपना वास्तविक रूप प्रकट करने का एक शगुन था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…드디어 올 것이 왔군.",
						"english": "...Finally, it has come.",
						"japanese": "…ついに、来るべきものが来たか。",
						"chinese": "……终于，该来的还是来了。",
						"french": "...Enfin, c'est arrivé.",
						"spanish": "...Finalmente, ha llegado.",
						"vietnamese": "...Cuối cùng, điều phải đến đã đến.",
						"thai": "...ในที่สุด สิ่งที่ควรมาก็มาถึงแล้ว",
						"hindi": "...आखिरकार, जो आना था, वह आ गया।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "우리의 맹세는 진짜다. 흔들림 없어.",
						"english": "Our vow is true. Unwavering.",
						"japanese": "私たちの誓いは本物だ。揺るぎない。",
						"chinese": "我们的誓言是真的。坚定不移。",
						"french": "Notre serment est vrai. Inébranlable.",
						"spanish": "Nuestro juramento es real. Inquebrantable.",
						"vietnamese": "Lời thề của chúng ta là thật. Vững vàng.",
						"thai": "คำสาบานของเราเป็นจริง ไม่สั่นคลอน",
						"hindi": "हमारी शपथ सच्ची है। अटल।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "돌 조각들이 얼음 결정처럼 솟아오르며 비명을 지르고 섬뜩한 푸른빛을 발했다.",
						"english": "Stone shards erupted like ice crystals, screaming and emitting an eerie blue light.",
						"japanese": "石の破片が氷の結晶のように噴き出し、悲鳴を上げ、不気味な青い光を放った。",
						"chinese": "碎石像冰晶般涌出，尖叫着发出诡异的蓝光。",
						"french": "Des éclats de pierre ont jailli comme des cristaux de glace, hurlant et émettant une lumière bleue étrange.",
						"spanish": "Fragmentos de piedra brotaron como cristales de hielo, gritando y emitiendo una luz azul inquietante.",
						"vietnamese": "Những mảnh đá vụn trỗi dậy như tinh thể băng, gào thét và phát ra ánh sáng xanh kỳ dị.",
						"thai": "ชิ้นส่วนหินผุดขึ้นมาราวกับผลึกน้ำแข็ง กรีดร้องและเปล่งแสงสีน้ำเงินชวนขนลุก",
						"hindi": "पत्थर के टुकड़े बर्फ के क्रिस्टल की तरह उछले, चीखते हुए और एक भयावह नीली रोशनी छोड़ते हुए।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…탐욕은 언제나 눈보라보다 빠르게 녹아내리지.",
						"english": "...Greed always melts faster than a blizzard.",
						"japanese": "…強欲はいつも吹雪より早く溶けるものだ。",
						"chinese": "……贪婪总是比暴风雪融化得更快。",
						"french": "...L'avidité fond toujours plus vite qu'un blizzard.",
						"spanish": "...La codicia siempre se derrite más rápido que una ventisca.",
						"vietnamese": "...Tham lam luôn tan chảy nhanh hơn bão tuyết.",
						"thai": "ความโลภมักจะละลายเร็วกว่าพายุหิมะเสมอ",
						"hindi": "...लालच हमेशा बर्फीले तूफान से भी तेज़ी से पिघलता है।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "너희의 맹세, 그 무게는 대체 얼마였을까?",
						"english": "Your vows, what was their true weight?",
						"japanese": "お前たちの誓い、その重さは一体どれほどだったのだろうか？",
						"chinese": "你们的誓言，究竟有多重？",
						"french": "Vos serments, quel était leur véritable poids ?",
						"spanish": "Vuestros juramentos, ¿cuál era su verdadero peso?",
						"vietnamese": "Lời thề của các ngươi, rốt cuộc nặng bao nhiêu?",
						"thai": "คำสาบานของพวกเจ้า น้ำหนักของมันคือเท่าใดกัน?",
						"hindi": "तुम्हारी शपथ, उनका असली वज़न कितना था?"
					}
				},
				{
					"content": {
						"korean": "흐윽… 내 몸이… 얼어붙어…!",
						"english": "Ugh... My body... it's freezing...!",
						"japanese": "うっ…体が…凍りつく…！",
						"chinese": "呃……我的身体……冻僵了……！",
						"french": "Ugh... Mon corps... il gèle...!",
						"spanish": "Uf... ¡Mi cuerpo... se está congelando...!",
						"vietnamese": "Ư... Người ta... đang đóng băng...!",
						"thai": "อึก... ร่างกายของข้า... กำลังแข็งตัว...!",
						"hindi": "उफ़... मेरा शरीर... जम रहा है...!"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "약속은… 깨지지 않아!",
						"english": "A promise... cannot be broken!",
						"japanese": "約束は…破れない！",
						"chinese": "承诺……不会被打破！",
						"french": "Une promesse... ne se brise pas !",
						"spanish": "¡Una promesa... no se rompe!",
						"vietnamese": "Lời hứa... không thể bị phá vỡ!",
						"thai": "คำสัญญา... ไม่มีวันแตกหัก!",
						"hindi": "वादा... टूटता नहीं है!"
					},
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "내 명예를 걸고, 이 시험에 맞서겠다!",
						"english": "By my honor, I shall face this trial!",
						"japanese": "我が名誉にかけて、この試練に立ち向かう！",
						"chinese": "以我之名誉，迎接这场考验！",
						"french": "Sur mon honneur, j'affronterai cette épreuve !",
						"spanish": "¡Por mi honor, me enfrentaré a esta prueba!",
						"vietnamese": "Với danh dự của ta, ta sẽ đối mặt với thử thách này!",
						"thai": "ข้าขอเดิมพันด้วยเกียรติของข้า เพื่อเผชิญหน้ากับการทดสอบนี้!",
						"hindi": "अपनी प्रतिष्ठा की क़सम, मैं इस परीक्षा का सामना करूँगा!"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"모든 약속이 산산조각 난 얼음 폐허 위로, 차가운 침묵이 흘렀다.",
			"심판은 끝났다. 그러나 무엇이 구원이었고, 무엇이 침해였을까.",
			"얼어붙은 파편들 사이로, 새로운 질문이 피어올랐다.",
			"이 맹세의 끝에서, 우리는 무엇을 얻고, 무엇을 잃었는가."
		],
		"english": [
			"Over the icy ruins where all promises lay shattered, a cold silence fell.",
			"The judgment was over. But what was salvation, and what was transgression?",
			"Among the frozen fragments, a new question arose.",
			"At the end of this vow, what did we gain, and what did we lose?"
		],
		"japanese": [
			"全ての約束が砕け散った氷の廃墟の上を、冷たい沈黙が流れた。",
			"審判は終わった。しかし何が救済で、何が侵害だったのだろうか。",
			"凍てついた破片の間から、新たな問いが浮かび上がった。",
			"この誓いの果てに、我々は何を得て、何を失ったのか。"
		],
		"chinese": [
			"在所有承诺破碎的冰冷废墟之上，一片死寂。",
			"审判结束了。但何为救赎，何为侵犯？",
			"在冰冷的碎片之间，一个新的问题浮现。",
			"在这誓言的尽头，我们获得了什么，又失去了什么？"
		],
		"french": [
			"Sur les ruines glacées où toutes les promesses gisaient brisées, un froid silence s'installa.",
			"Le jugement était terminé. Mais qu'était la rédemption, et qu'était la transgression ?",
			"Parmi les fragments gelés, une nouvelle question surgit.",
			"Au terme de ce serment, qu'avons-nous gagné et qu'avons-nous perdu ?"
		],
		"spanish": [
			"Sobre las ruinas heladas donde todas las promesas yacían destrozadas, cayó un frío silencio.",
			"El juicio había terminado. Pero, ¿qué fue la salvación y qué fue la transgresión?",
			"Entre los fragmentos congelados, surgió una nueva pregunta.",
			"Al final de este juramento, ¿qué ganamos y qué perdimos?"
		],
		"vietnamese": [
			"Trên đống đổ nát băng giá nơi mọi lời hứa tan vỡ, một sự im lặng lạnh lẽo bao trùm.",
			"Phán xét đã kết thúc. Nhưng điều gì là sự cứu rỗi, và điều gì là sự xâm phạm?",
			"Giữa những mảnh vỡ đóng băng, một câu hỏi mới nảy sinh.",
			"Ở cuối lời thề này, chúng ta đã được gì, và mất gì?"
		],
		"thai": [
			"เหนือซากปรักหักพังน้ำแข็งที่คำมั่นสัญญาทั้งหมดแตกสลาย ความเงียบเยือกเย็นก็ปกคลุม",
			"การพิพากษาจบลงแล้ว แต่สิ่งใดคือความรอด และสิ่งใดคือการล่วงละเมิดกัน?",
			"ท่ามกลางเศษซากที่จับตัวเป็นน้ำแข็ง คำถามใหม่ก็ผุดขึ้นมา",
			"ในตอนท้ายของคำปฏิญาณนี้ เราได้อะไร และเราสูญเสียอะไรไป?"
		],
		"hindi": [
			"उन बर्फीले खंडहरों पर जहाँ सभी वादे टूट गए थे, एक ठंडी खामोशी छा गई।",
			"न्याय समाप्त हो गया। परन्तु क्या मुक्ति थी और क्या उल्लंघन?",
			"जमे हुए टुकड़ों के बीच, एक नया प्रश्न उभरा।",
			"इस प्रतिज्ञा के अंत में, हमने क्या प्राप्त किया, और क्या खोया?"
		]
	},
	"prologue": {
		"korean": [
			"돌무덤. 깨어진 약속들이 얼어붙은 심판의 공간.",
			"우리는 그 앞에서 마지막 맹세를 나누려 했다.",
			"그러나 맹세의 무게는 — 언제나 시험받는 법.",
			"차가운 진동이 울리고, 모든 것이 산산조각 날 최후의 심판이 시작된다."
		],
		"english": [
			"Stone Barrow. A place of judgment where broken promises lie frozen.",
			"Before it, we sought to make our final vow.",
			"But the weight of a vow—it is always tested.",
			"A cold tremor rings out, and the final judgment, shattering all, begins."
		],
		"japanese": [
			"石塚。破られた約束が凍てつく審判の空間。",
			"我々はそこで最後の誓いを交わそうとした。",
			"しかし誓いの重みは――常に試されるもの。",
			"冷たい振動が鳴り響き、全てを打ち砕く最後の審判が始まる。"
		],
		"chinese": [
			"石冢。破碎的誓言冻结于此的审判之地。",
			"在它面前，我们试图许下最后的誓言。",
			"然而誓言的分量——总是受到考验。",
			"冰冷的震颤响起，万物破碎的最终审判开始。"
		],
		"french": [
			"Le Tumulus de Pierre. Un lieu de jugement où les promesses brisées gisent gelées.",
			"Devant lui, nous nous apprêtions à prononcer notre serment ultime.",
			"Mais le poids d'un serment – est toujours mis à l'épreuve.",
			"Une froide vibration retentit, et le jugement final, brisant tout, commence."
		],
		"spanish": [
			"El Túmulo de Piedra. Un espacio de juicio donde las promesas rotas yacen congeladas.",
			"Ante él, íbamos a hacer nuestro juramento final.",
			"Pero el peso de un juramento—siempre es puesto a prueba.",
			"Una fría vibración resuena, y el juicio final, que lo destrozará todo, comienza."
		],
		"vietnamese": [
			"Mộ Đá. Không gian phán xét nơi những lời hứa tan vỡ đóng băng.",
			"Trước nó, chúng ta đã định trao lời thề cuối cùng.",
			"Nhưng sức nặng của lời thề—luôn bị thử thách.",
			"Một rung chấn lạnh lẽo vang lên, và phán xét cuối cùng, phá hủy mọi thứ, bắt đầu."
		],
		"thai": [
			"สุสานหิน สถานแห่งการพิพากษาที่คำมั่นสัญญาที่แตกสลายถูกแช่แข็ง",
			"เบื้องหน้ามัน เราพยายามจะกล่าวคำปฏิญาณสุดท้าย",
			"แต่ภาระของคำปฏิญาณ—ย่อมถูกทดสอบเสมอ",
			"การสั่นสะเทือนเย็นยะเยือกดังขึ้น และการพิพากษาครั้งสุดท้ายที่ทำลายล้างทุกสิ่งก็เริ่มต้นขึ้น"
		],
		"hindi": [
			"पत्थर का टीला। टूटे वादों का एक बर्फीला न्याय स्थल।",
			"उसके सामने, हमने अपनी अंतिम प्रतिज्ञा लेनी चाही।",
			"परन्तु प्रतिज्ञा का भार—वह सदैव परखा जाता है।",
			"एक ठंडी कंपन गूँजती है, और सब कुछ तोड़ने वाला अंतिम न्याय आरंभ होता है।"
		]
	}
} as const;
