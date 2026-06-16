export const scenario_snowy_haraldr_31_02 = {
	"scenario_id": "snowy_haraldr_31_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"하랄드르의 깃발이 설원 곳곳에 꽂힌다.",
			"깃발 아래, 땅이 서서히 얼어붙기 시작했다.",
			"생명이 사라진다. 차가운 죽음의 침묵만이 남았다."
		],
		"english": [
			"Haraldr's banners are planted across the snowfield.",
			"Under the banners, the land slowly began to freeze.",
			"Life vanishes. Only the cold silence of death remains."
		],
		"japanese": [
			"ハラルドルの旗が雪原のあちこちに立てられる。",
			"旗の下、大地は徐々に凍り始めた。",
			"生命が消える。冷たい死の沈黙だけが残った。"
		],
		"chinese": [
			"哈拉尔德的旗帜插遍雪原。",
			"旗帜之下，大地开始缓缓冻结。",
			"生命消逝。只剩下冰冷的死亡寂静。"
		],
		"french": [
			"Les bannières de Haraldr sont plantées partout dans l'étendue enneigée.",
			"Sous les bannières, la terre commença à geler lentement.",
			"La vie disparaît. Seul le silence froid de la mort demeure."
		],
		"spanish": [
			"Las banderas de Haraldr se clavan por toda la llanura nevada.",
			"Bajo las banderas, la tierra comenzó a congelarse lentamente.",
			"La vida se desvanece. Solo queda el frío silencio de la muerte."
		],
		"vietnamese": [
			"Cờ của Haraldr cắm khắp tuyết nguyên.",
			"Dưới lá cờ, mặt đất dần dần đóng băng.",
			"Sự sống biến mất. Chỉ còn lại sự im lặng lạnh lẽo của cái chết."
		],
		"thai": [
			"ธงของฮาราลเดอร์ปักอยู่ทั่วทุ่งหิมะ",
			"ใต้ธงนั้น แผ่นดินเริ่มแข็งตัวช้าๆ",
			"ชีวิตหายไป เหลือเพียงความเงียบงันแห่งความตายอันหนาวเหน็บ"
		],
		"hindi": [
			"हेराल्ड्र के झंडे बर्फीले मैदान में हर जगह गाड़े गए हैं।",
			"झंडों के नीचे, ज़मीन धीरे-धीरे जमने लगी।",
			"जीवन लुप्त हो जाता है। केवल मौत की ठंडी ख़ामोशी बची है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 바람이 불어오는 설원. 낯선 깃발들이 곳곳에 박혀 있다.",
						"english": "A snowfield where cold winds blow. Strange banners are planted everywhere.",
						"japanese": "冷たい風が吹き荒れる雪原。見慣れない旗があちこちに突き刺さっている。",
						"chinese": "寒风凛冽的雪原。陌生的旗帜插遍各地。",
						"french": "Une étendue enneigée où soufflent des vents froids. Des bannières étranges sont plantées partout.",
						"spanish": "Un campo de nieve donde soplan vientos fríos. Extrañas banderas están clavadas por todas partes.",
						"vietnamese": "Tuyết nguyên nơi gió lạnh thổi. Những lá cờ lạ cắm khắp nơi.",
						"thai": "ทุ่งหิมะที่ลมหนาวพัดโชย ธงแปลกๆ ปักอยู่ทุกหนทุกแห่ง",
						"hindi": "बर्फीला मैदान जहाँ ठंडी हवाएँ चलती हैं। हर जगह अजीब झंडे लगे हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "깃발이 점점 더 많아지고 있어.",
						"english": "The banners are increasing.",
						"japanese": "旗がどんどん増えている。",
						"chinese": "旗帜越来越多了。",
						"french": "Les bannières augmentent.",
						"spanish": "Cada vez hay más banderas.",
						"vietnamese": "Cờ càng ngày càng nhiều.",
						"thai": "ธงกำลังเพิ่มขึ้นเรื่อยๆ",
						"hindi": "झंडे बढ़ते जा रहे हैं।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…저 깃발들 때문이야.",
						"english": "...It's because of those banners.",
						"japanese": "…あの旗のせいだ。",
						"chinese": "……是因为那些旗帜。",
						"french": "...C'est à cause de ces bannières.",
						"spanish": "...Es por esas banderas.",
						"vietnamese": "...Là do mấy lá cờ đó.",
						"thai": "...เป็นเพราะธงเหล่านั้น",
						"hindi": "...यह उन झंडों की वजह से है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "땅이, 죽어가고 있어.",
						"english": "The land is dying.",
						"japanese": "大地が、死んでいってる。",
						"chinese": "大地，正在死去。",
						"french": "La terre est en train de mourir.",
						"spanish": "La tierra está muriendo.",
						"vietnamese": "Mặt đất, đang chết dần.",
						"thai": "แผ่นดินกำลังจะตาย",
						"hindi": "ज़मीन मर रही है।"
					},
					"type": "speech",
					"emotion": "sad"
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
						2
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "봐. 저 풀들… 원래는 푸른 빛이었는데.",
						"english": "Look. Those grasses... they used to be green.",
						"japanese": "見て。あの草たち…元々は緑色だったのに。",
						"chinese": "看。那些草……原来是绿色的。",
						"french": "Regarde. Ces herbes... elles étaient vertes avant.",
						"spanish": "Mira. Esas hierbas... antes eran verdes.",
						"vietnamese": "Nhìn kìa. Mấy ngọn cỏ đó... vốn dĩ chúng màu xanh.",
						"thai": "ดูสิ หญ้าพวกนั้น... แต่ก่อนมันเป็นสีเขียว",
						"hindi": "देखो। वो घासें... पहले हरी थीं।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "깃발이 꽂힌 후부터, 얼어붙었어. 숨조차 쉬지 못하고.",
						"english": "Since the banners were planted, they've frozen. Unable to even breathe.",
						"japanese": "旗が立てられてから、凍りついてしまった。息すらできないまま。",
						"chinese": "旗帜插下后，它们就冻结了。连呼吸都不能。",
						"french": "Depuis que les bannières ont été plantées, elles ont gelé. Incapables même de respirer.",
						"spanish": "Desde que se clavaron las banderas, se han congelado. Sin poder siquiera respirar.",
						"vietnamese": "Kể từ khi cờ được cắm, chúng đã đóng băng. Không thể thở được.",
						"thai": "ตั้งแต่วันที่ธงปัก พวกมันก็แข็งตัว หายใจยังไม่ได้เลย",
						"hindi": "जब से झंडे गाड़े गए, वे जम गए हैं। साँस भी नहीं ले पा रहे।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말이네. 완전히 말라 비틀어졌어.",
						"english": "You're right. It's completely shriveled up.",
						"japanese": "本当にね。完全に干からびている。",
						"chinese": "是真的。完全枯萎了。",
						"french": "C'est vrai. C'est complètement desséché.",
						"spanish": "Es verdad. Está completamente marchito.",
						"vietnamese": "Thật vậy. Nó đã khô héo hoàn toàn.",
						"thai": "จริงด้วย มันเหี่ยวแห้งไปหมดแล้ว",
						"hindi": "सच में। यह पूरी तरह से सूख गया है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…얼어 죽은 게 아니라, 질식한 것 같아.",
						"english": "...It wasn't frozen to death, but suffocated.",
						"japanese": "…凍死ではなく、窒息したようだ。",
						"chinese": "……它不是冻死的，像是窒息而死。",
						"french": "...Il n'est pas mort de froid, mais étouffé.",
						"spanish": "...No murió congelado, sino asfixiado.",
						"vietnamese": "...Hình như không phải chết cóng, mà là chết ngạt.",
						"thai": "...ดูเหมือนไม่ได้ตายเพราะความเย็น แต่ตายเพราะขาดอากาศหายใจ",
						"hindi": "…यह जम कर नहीं मरा, बल्कि दम घुटने से मरा है।"
					},
					"speaker": "inka",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "땅이, 더 깊이 얼어붙고 있어.",
						"english": "The ground is freezing deeper.",
						"japanese": "地面が、さらに深く凍りついている。",
						"chinese": "大地，正在冻结得更深。",
						"french": "Le sol gèle plus profondément.",
						"spanish": "La tierra se está congelando más profundamente.",
						"vietnamese": "Mặt đất đang đóng băng sâu hơn.",
						"thai": "พื้นดินกำลังเยือกแข็งลงไปอีก",
						"hindi": "ज़मीन, और गहरी जमती जा रही है।"
					},
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "모든 생명을 앗아갈 거야. 이대로라면.",
						"english": "It will take all life. If it continues like this.",
						"japanese": "すべての命を奪うだろう。このままでは。",
						"chinese": "它会夺走所有生命。如果继续这样下去。",
						"french": "Cela emportera toute vie. Si ça continue comme ça.",
						"spanish": "Se llevará toda vida. Si esto continúa así.",
						"vietnamese": "Nó sẽ cướp đi mọi sự sống. Nếu cứ thế này.",
						"thai": "มันจะพรากทุกชีวิตไป ถ้าเป็นแบบนี้ต่อไป",
						"hindi": "यह सभी जीवन ले लेगा। अगर ऐसा ही चलता रहा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "깃발이 박힌 자리는 검게 변색되어, 생명의 흔적조차 찾을 수 없었다.",
						"english": "The spot where the flag was planted was blackened, and no trace of life could be found.",
						"japanese": "旗が刺さった場所は黒く変色し、生命の痕跡さえ見つけられなかった。",
						"chinese": "插着旗帜的地方变黑了，甚至找不到生命的痕迹。",
						"french": "L'endroit où le drapeau était planté était noirci, et aucune trace de vie ne pouvait être trouvée.",
						"spanish": "El lugar donde se clavó la bandera estaba ennegrecido, y no se encontraba ni rastro de vida.",
						"vietnamese": "Nơi cắm cờ bị biến đen, không tìm thấy dấu vết sự sống nào.",
						"thai": "จุดที่ปักธงดำคล้ำลง และไม่พบร่องรอยของสิ่งมีชีวิตเลย",
						"hindi": "जिस जगह पर झंडा गाड़ा गया था, वह काला पड़ गया था, और जीवन का कोई निशान नहीं मिला।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체 무슨 일이야.",
						"english": "What on earth is going on?",
						"japanese": "一体何が起こっているんだ。",
						"chinese": "这到底是怎么回事。",
						"french": "Qu'est-ce qui se passe ?",
						"spanish": "¿Qué demonios está pasando?",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy?",
						"thai": "นี่มันเกิดอะไรขึ้นเนี่ย",
						"hindi": "यह सब क्या हो रहा है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 설원은, 거대한 무덤이 될 거야.",
						"english": "This snowfield will become a giant tomb.",
						"japanese": "この雪原は、巨大な墓場になるだろう。",
						"chinese": "这片雪原，将成为一个巨大的坟墓。",
						"french": "Ce champ de neige deviendra une tombe géante.",
						"spanish": "Este campo nevado se convertirá en una tumba gigante.",
						"vietnamese": "Cánh đồng tuyết này sẽ trở thành một ngôi mộ khổng lồ.",
						"thai": "ทุ่งหิมะนี้จะกลายเป็นสุสานขนาดใหญ่",
						"hindi": "यह बर्फीला मैदान, एक विशाल कब्र बन जाएगा।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "깃발이, 죽음을 가져오고 있어.",
						"english": "The flag is bringing death.",
						"japanese": "旗が、死をもたらしている。",
						"chinese": "旗帜，正在带来死亡。",
						"french": "Le drapeau apporte la mort.",
						"spanish": "La bandera está trayendo la muerte.",
						"vietnamese": "Lá cờ đang mang đến cái chết.",
						"thai": "ธงกำลังนำความตายมาให้",
						"hindi": "झंडा, मौत ला रहा है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "막아야 해.",
						"english": "We have to stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Hay que detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน",
						"hindi": "इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…너무 늦은 걸지도 몰라. 이미 많은 것이 죽었어.",
						"english": "...It might be too late. A lot has already died.",
						"japanese": "…手遅れかもしれない。すでに多くのものが死んだ。",
						"chinese": "……也许已经太晚了。很多东西已经死了。",
						"french": "...Il est peut-être trop tard. Beaucoup de choses sont déjà mortes.",
						"spanish": "...Puede que sea demasiado tarde. Muchas cosas ya han muerto.",
						"vietnamese": "...Có lẽ đã quá muộn rồi. Nhiều thứ đã chết rồi.",
						"thai": "...อาจจะสายเกินไปแล้ว หลายสิ่งหลายอย่างตายไปแล้ว",
						"hindi": "…शायद बहुत देर हो चुकी है। बहुत कुछ पहले ही मर चुका है।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "포기할 수 없어.",
						"english": "I can't give up.",
						"japanese": "諦められない。",
						"chinese": "我不能放弃。",
						"french": "Je ne peux pas abandonner.",
						"spanish": "No puedo rendirme.",
						"vietnamese": "Không thể bỏ cuộc.",
						"thai": "ฉันยอมแพ้ไม่ได้",
						"hindi": "मैं हार नहीं मान सकता।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…이 고통스러운 비명 소리.",
						"english": "...This agonizing scream.",
						"japanese": "…この苦痛に満ちた悲鳴。",
						"chinese": "……这痛苦的尖叫声。",
						"french": "...Ce cri agonisant.",
						"spanish": "...Este grito agonizante.",
						"vietnamese": "...Tiếng thét đau đớn này.",
						"thai": "...เสียงกรีดร้องอันทรมานนี้",
						"hindi": "...यह दर्दनाक चीख।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저건…",
						"english": "That's...",
						"japanese": "あれは…",
						"chinese": "那是……",
						"french": "C'est...",
						"spanish": "Eso es...",
						"vietnamese": "Kia là...",
						"thai": "นั่นมัน...",
						"hindi": "वह तो..."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "흐흐흐… 새로운 경쟁자인가?",
						"english": "Hahaha... A new contender?",
						"japanese": "フフフ…新たな挑戦者か？",
						"chinese": "呵呵呵……新的竞争者吗？",
						"french": "Hahaha... Un nouveau rival ?",
						"spanish": "Jajaja... ¿Un nuevo competidor?",
						"vietnamese": "Hahaha... Một đối thủ mới à?",
						"thai": "ฮ่าฮ่าฮ่า... คู่แข่งรายใหม่รึ?",
						"hindi": "हाहाहा... एक नया दावेदार?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 땅은 이제 나의 프랜차이즈. 감히 침범하다니!",
						"english": "This land is now my franchise. How dare you trespass!",
						"japanese": "この地は今や私のフランチャイズ。よくも侵入したな！",
						"chinese": "这片土地现在是我的特许经营区。你竟敢侵犯！",
						"french": "Cette terre est maintenant ma franchise. Comment oses-tu t'y introduire !",
						"spanish": "Esta tierra es ahora mi franquicia. ¡Cómo te atreves a invadirla!",
						"vietnamese": "Mảnh đất này giờ là nhượng quyền của ta. Sao ngươi dám xâm phạm!",
						"thai": "ดินแดนนี้คือแฟรนไชส์ของข้าแล้ว เจ้ากล้าดียังไงมาบุกรุก!",
						"hindi": "यह भूमि अब मेरी फ़्रेंचाइज़ी है। तुम्हारी हिम्मत कैसे हुई घुसपैठ करने की!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 땅을 죽이고 있어!",
						"english": "You are killing this land!",
						"japanese": "お前がこの地を殺している！",
						"chinese": "你正在扼杀这片土地！",
						"french": "Tu es en train de tuer cette terre !",
						"spanish": "¡Estás matando esta tierra!",
						"vietnamese": "Ngươi đang hủy hoại mảnh đất này!",
						"thai": "เจ้ากำลังฆ่าดินแดนนี้!",
						"hindi": "तुम इस भूमि को मार रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "죽음? 아니, 이건 새로운 질서의 시작이다! 더 높은 가치를 위한 희생이지!",
						"english": "Death? No, this is the beginning of a new order! A sacrifice for a higher value!",
						"japanese": "死だと？いや、これは新たな秩序の始まりだ！より高き価値のための犠牲なのだ！",
						"chinese": "死亡？不，这是新秩序的开始！是为了更高价值的牺牲！",
						"french": "La mort ? Non, c'est le début d'un nouvel ordre ! Un sacrifice pour une valeur supérieure !",
						"spanish": "¿Muerte? ¡No, este es el comienzo de un nuevo orden! ¡Un sacrificio por un valor superior!",
						"vietnamese": "Cái chết ư? Không, đây là khởi đầu của một trật tự mới! Một sự hy sinh cho giá trị cao hơn!",
						"thai": "ความตายรึ? ไม่ นี่คือจุดเริ่มต้นของระเบียบใหม่! การเสียสละเพื่อคุณค่าที่สูงกว่า!",
						"hindi": "मृत्यु? नहीं, यह एक नई व्यवस्था की शुरुआत है! एक उच्च मूल्य के लिए बलिदान!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…그대도 고통받고 있나요?",
						"english": "...Are you suffering too?",
						"japanese": "…あなたも苦しんでいるのですか？",
						"chinese": "……你也痛苦吗？",
						"french": "...Vous souffrez aussi ?",
						"spanish": "...¿Usted también está sufriendo?",
						"vietnamese": "...Ngươi cũng đang đau khổ sao?",
						"thai": "...ท่านก็กำลังทุกข์ทรมานด้วยหรือเปล่า?",
						"hindi": "क्या तुम भी पीड़ित हो?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "쓸데없는 감정은 사업에 방해될 뿐! 사라져라!",
						"english": "Useless emotions only hinder business! Vanish!",
						"japanese": "無駄な感情はビジネスの邪魔になるだけだ！消え失せろ！",
						"chinese": "无用的情感只会妨碍生意！消失吧！",
						"french": "Les émotions inutiles ne font qu'entraver les affaires ! Disparais !",
						"spanish": "¡Las emociones inútiles solo estorban el negocio! ¡Desaparece!",
						"vietnamese": "Cảm xúc vô dụng chỉ cản trở công việc! Biến đi!",
						"thai": "อารมณ์ไร้ประโยชน์มีแต่จะขัดขวางธุรกิจ! จงหายไปซะ!",
						"hindi": "बेकार की भावनाएँ केवल व्यापार में बाधा डालती हैं! गायब हो जाओ!"
					},
					"emotion": "angry"
				},
				{
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "inka"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "비켜!",
						"english": "Get out of the way!",
						"japanese": "どけ！",
						"chinese": "让开！",
						"french": "Pousse-toi !",
						"spanish": "¡Quítate!",
						"vietnamese": "Tránh ra!",
						"thai": "หลีกไป!",
						"hindi": "हट जाओ!"
					},
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "inka",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도라니…",
						"english": "Ugh… Is this all you've got…?",
						"japanese": "くっ…たったこれだけとは…",
						"chinese": "呃…就这点程度吗…",
						"french": "Ugh… C'est tout ce que tu as à offrir… ?",
						"spanish": "Uf… ¿Es esto todo lo que tienes…?",
						"vietnamese": "Ư… Chỉ được đến thế này thôi sao…",
						"thai": "อึก… แค่แค่นี้เองรึ…",
						"hindi": "उफ़… बस इतना ही…?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 기억해라… 이 얼어붙은 땅은… 시작에 불과하다…",
						"english": "But remember… This frozen land… is just the beginning…",
						"japanese": "だが覚えておけ… この凍てつく大地は… 始まりに過ぎない…",
						"chinese": "但记住…这片冰冻的土地…只是个开始…",
						"french": "Mais souviens-toi… Cette terre gelée… n'est qu'un début…",
						"spanish": "Pero recuerda… Esta tierra helada… es solo el principio…",
						"vietnamese": "Nhưng hãy nhớ rằng… Vùng đất băng giá này… chỉ là khởi đầu mà thôi…",
						"thai": "แต่จำไว้เถอะ… ดินแดนน้ำแข็งแห่งนี้… เป็นแค่จุดเริ่มต้นเท่านั้น…",
						"hindi": "पर याद रखना… यह जमी हुई ज़मीन… महज़ शुरुआत है…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么。",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "พูดอะไรน่ะ",
						"hindi": "क्या कह रहे हो तुम?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "Haraldr님은… 더 큰 것을 원한다… 더 많은 땅… 더 많은 점포…",
						"english": "Lord Haraldr… desires something greater… More land… More outposts…",
						"japanese": "ハラルドル様は… もっと大きなものを望んでいらっしゃる… もっと多くの土地… もっと多くの拠点を…",
						"chinese": "哈拉尔德大人…渴望更大的东西…更多的土地…更多的据点…",
						"french": "Seigneur Haraldr… désire quelque chose de plus grand… Plus de terres… Plus de comptoirs…",
						"spanish": "El Señor Haraldr… desea algo más grande… Más tierras… Más puestos de avanzada…",
						"vietnamese": "Lãnh chúa Haraldr… khao khát những điều lớn lao hơn… Nhiều đất đai hơn… Nhiều tiền đồn hơn…",
						"thai": "ท่าน Haraldr… ต้องการสิ่งที่ยิ่งใหญ่กว่านั้น… ดินแดนที่มากขึ้น… จุดตั้งรับที่มากขึ้น…",
						"hindi": "लॉर्ड हैराल्ड्र… कुछ और बड़ा चाहते हैं… और ज़मीन… और चौकियां…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "으… 나의… 사업…",
						"english": "Ugh… My… business…",
						"japanese": "うぅ… 私の… 事業が…",
						"chinese": "唔…我的…事业…",
						"french": "Ugh… Mon… affaire…",
						"spanish": "Uf… Mi… negocio…",
						"vietnamese": "Ư… Việc… kinh doanh của ta…",
						"thai": "อึก… ธุรกิจ… ของข้า…",
						"hindi": "उफ़… मेरा… कारोबार…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 몸에서 차가운 기운이 사라졌다.",
						"english": "The cold energy vanished from the fallen {random_boss}'s body.",
						"japanese": "倒れた{random_boss}の体から冷たい気が消え去った。",
						"chinese": "倒下的{random_boss}身上，冰冷的气息消散了。",
						"french": "L'énergie froide disparut du corps du {random_boss} tombé au combat.",
						"spanish": "La energía fría desapareció del cuerpo del {random_boss} caído.",
						"vietnamese": "Năng lượng lạnh lẽo tan biến khỏi thân thể của {random_boss} đã ngã xuống.",
						"thai": "พลังงานเย็นเยือกจางหายไปจากร่างของ {random_boss} ที่ล้มลง",
						"hindi": "गिरे हुए {random_boss} के शरीर से ठंडी ऊर्जा गायब हो गई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "inka",
					"content": {
						"korean": "…또 하나의 희생자.",
						"english": "…Yet another victim.",
						"japanese": "…また一人の犠牲者か。",
						"chinese": "…又一个牺牲者。",
						"french": "…Encore une victime.",
						"spanish": "…Otra víctima más.",
						"vietnamese": "…Lại một nạn nhân nữa.",
						"thai": "…เหยื่ออีกคนหนึ่ง",
						"hindi": "…एक और शिकार।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "깃발 아래, 땅은 여전히 얼어붙어 있었다. 다음 깃발을 뽑아야 했다.",
						"english": "Beneath the banner, the land remained frozen. The next banner had to be claimed.",
						"japanese": "旗の下、大地は依然として凍てついていた。次の旗を抜かねばならなかった。",
						"chinese": "旗帜之下，大地依然冰封。必须拔起下一面旗帜。",
						"french": "Sous la bannière, la terre restait gelée. Le prochain étendard devait être arraché.",
						"spanish": "Bajo el estandarte, la tierra seguía helada. Había que tomar el siguiente estandarte.",
						"vietnamese": "Dưới lá cờ, mặt đất vẫn đóng băng. Phải cắm lá cờ tiếp theo.",
						"thai": "ใต้ธงนั้น ผืนดินยังคงถูกแช่แข็งอยู่ ต้องปักธงถัดไป",
						"hindi": "झंडे के नीचे, ज़मीन अभी भी जमी हुई थी। अगला झंडा उठाना पड़ा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하하! 어리석은 자들!",
						"english": "Hahahaha! Fools!",
						"japanese": "ハハハ！愚か者め！",
						"chinese": "哈哈哈！愚蠢的家伙们！",
						"french": "Hahahaha ! Imbéciles !",
						"spanish": "¡Jajajaja! ¡Tontos!",
						"vietnamese": "Hahahah! Lũ ngu xuẩn!",
						"thai": "ฮ่าฮ่าฮ่า! พวกโง่เอ๊ย!",
						"hindi": "हाहाहा! मूर्खों!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "나의 사업 확장을 막을 순 없다!",
						"english": "You cannot stop my business expansion!",
						"japanese": "私の事業拡大は止められない！",
						"chinese": "你们阻止不了我的事业扩张！",
						"french": "Vous ne pouvez pas arrêter l'expansion de mon affaire !",
						"spanish": "¡No podéis detener la expansión de mi negocio!",
						"vietnamese": "Ngươi không thể ngăn cản việc mở rộng kinh doanh của ta!",
						"thai": "พวกเจ้าหยุดการขยายธุรกิจของข้าไม่ได้หรอก!",
						"hindi": "तुम मेरे कारोबार के विस्तार को रोक नहीं सकते!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "깃발 아래 땅이 깊숙이 얼어붙는 것처럼, 탐험대의 몸도 굳어갔다.",
						"english": "Just as the ground beneath the flag froze deep, the expedition's bodies also stiffened.",
						"japanese": "旗の下、地が深く凍てつくように、探検隊の体もまた硬直していった。",
						"chinese": "旗帜下，大地深处结冰，探险队的身体也随之僵硬。",
						"french": "Sous le drapeau, tandis que la terre gelait profondément, les corps de l'expédition se raidissaient.",
						"spanish": "Bajo la bandera, así como la tierra se congelaba profundamente, los cuerpos de la expedición se endurecían.",
						"vietnamese": "Dưới lá cờ, mặt đất đóng băng sâu, thân thể đoàn thám hiểm cũng cứng đờ theo.",
						"thai": "ใต้ธง พื้นดินแข็งตัวลึกเข้าไป ร่างกายของคณะสำรวจก็แข็งทื่อตามไปด้วย",
						"hindi": "झंडे के नीचे, जैसे धरती गहराई तक जम गई, वैसे ही अभियान दल के शरीर भी अकड़ गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "...まだ終わってない！",
						"chinese": "...还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Todavía no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "다음에는 더 큰 대가를 치를 것이다!",
						"english": "Next time, the price will be much steeper!",
						"japanese": "次は、もっと大きな代償を払うことになるだろう！",
						"chinese": "下次，将付出更沉重的代价！",
						"french": "La prochaine fois, le prix sera bien plus lourd !",
						"spanish": "¡La próxima vez, el precio será mucho mayor!",
						"vietnamese": "Lần tới, sẽ phải trả một cái giá đắt hơn nhiều!",
						"thai": "ครั้งหน้า เจ้าจะต้องจ่ายราคาที่แพงกว่านี้!",
						"hindi": "अगली बार, तुम्हें बहुत बड़ी कीमत चुकानी पड़ेगी!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
