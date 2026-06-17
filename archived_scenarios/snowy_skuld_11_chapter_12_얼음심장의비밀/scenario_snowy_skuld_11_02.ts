export const scenario_snowy_skuld_11_02 = {
	"scenario_id": "snowy_skuld_11_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"거대한 빙하 미궁. 끝없이 얼어붙은 푸른 심장.",
			"탐험대는 더 깊이 들어섰다. 숨겨진 진실을 찾아.",
			"차가운 얼음 속, 고대의 전설이 숨 쉬고 있었다.",
			"그러나 진실은 언제나 위험을 동반하는 법."
		],
		"english": [
			"Vast glacial labyrinth. An endlessly frozen blue heart.",
			"The expedition delved deeper, seeking the hidden truth.",
			"Within the cold ice, an ancient legend breathed.",
			"But truth always accompanies danger."
		],
		"japanese": [
			"巨大な氷河の迷宮。果てなく凍りついた青い心臓。",
			"探検隊は、隠された真実を求めてさらに奥へと進んだ。",
			"冷たい氷の中、古代の伝説が息づいていた。",
			"しかし、真実は常に危険を伴うものだ。"
		],
		"chinese": [
			"巨大的冰川迷宫。无尽冻结的蓝色心脏。",
			"探险队深入其中，探寻隐藏的真相。",
			"在冰冷的寒冰中，古老的传说正在呼吸。",
			"然而，真相总是伴随着危险。"
		],
		"french": [
			"Vaste labyrinthe glaciaire. Un cœur bleu figé à l'infini.",
			"L'expédition s'enfonça plus profondément, à la recherche de la vérité cachée.",
			"Dans la glace froide, une ancienne légende respirait.",
			"Cependant, la vérité s'accompagne toujours de danger."
		],
		"spanish": [
			"Un vasto laberinto glacial. Un corazón azul infinitamente congelado.",
			"La expedición se adentró más, buscando la verdad oculta.",
			"Dentro del frío hielo, una antigua leyenda respiraba.",
			"Pero la verdad siempre va acompañada de peligro."
		],
		"vietnamese": [
			"Mê cung băng khổng lồ. Trái tim xanh bị đóng băng vô tận.",
			"Đoàn thám hiểm tiến sâu hơn, tìm kiếm sự thật ẩn giấu.",
			"Trong lớp băng giá lạnh, một truyền thuyết cổ xưa đang sống dậy.",
			"Tuy nhiên, sự thật luôn đi kèm với nguy hiểm."
		],
		"thai": [
			"เขาวงกตธารน้ำแข็งขนาดมหึมา หัวใจสีน้ำเงินที่เยือกแข็งไม่รู้จบ",
			"คณะสำรวจเจาะลึกเข้าไปอีก เพื่อค้นหาความจริงที่ซ่อนอยู่",
			"ภายใต้น้ำแข็งที่เย็นยะเยือก ตำนานโบราณยังคงมีชีวิต",
			"แต่ความจริงมักมาพร้อมกับอันตรายเสมอ"
		],
		"hindi": [
			"विशाल हिमनद भूलभुलैया। एक अंतहीन जमी हुई नीली धड़कन。",
			"अभियान दल छिपी हुई सच्चाई की तलाश में और गहराई तक गया।",
			"ठंडी बर्फ़ के भीतर, एक प्राचीन किंवदंती साँस ले रही थी।",
			"परन्तु सत्य हमेशा खतरे के साथ आता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "태고의 빙하 미궁. 그 안으로 깊숙이 발을 들였다.",
						"english": "The primeval glacial labyrinth. We stepped deep inside.",
						"japanese": "太古の氷河迷宮。その奥深くへと足を踏み入れた。",
						"chinese": "太古的冰川迷宫。我们深入其中。",
						"french": "Le labyrinthe glaciaire primordial. Nous y sommes entrés profondément.",
						"spanish": "El laberinto glacial primordial. Nos adentramos profundamente.",
						"vietnamese": "Mê cung băng hà nguyên thủy. Chúng tôi đã bước sâu vào trong.",
						"thai": "เขาวงกตธารน้ำแข็งโบราณ เราก้าวลึกเข้าไปข้างใน",
						"hindi": "आदिम हिमनद भूलभुलैया। हमने उसके अंदर गहराई तक कदम रखा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 길이 없어… 얼음 벽뿐이야.",
						"english": "No more path... only ice walls.",
						"japanese": "もう道がない…ただの氷の壁だけだ。",
						"chinese": "没有路了……只有冰墙。",
						"french": "Plus de chemin... seulement des murs de glace.",
						"spanish": "No hay más camino... solo paredes de hielo.",
						"vietnamese": "Không còn đường nữa... chỉ có những bức tường băng.",
						"thai": "ไม่มีทางไปแล้ว... มีแต่กำแพงน้ำแข็ง",
						"hindi": "और कोई रास्ता नहीं... बस बर्फ़ की दीवारें हैं।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…아니, 저건.",
						"english": "...No, wait, that's...",
						"japanese": "…いや、あれは。",
						"chinese": "……不，那是。",
						"french": "...Non, ça c'est...",
						"spanish": "...No, eso es.",
						"vietnamese": "...Không, cái kia là.",
						"thai": "...ไม่สิ นั่นมัน",
						"hindi": "...नहीं, वह तो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 벽 사이, 거대한 나무 선박의 잔해가 드러났다.",
						"english": "Between the frozen walls, the wreckage of a massive wooden ship emerged.",
						"japanese": "凍てついた壁の間から、巨大な木造船の残骸が現れた。",
						"chinese": "在冰冻的墙壁之间，一艘巨大木制船只的残骸显露出来。",
						"french": "Entre les murs gelés, l'épave d'un immense navire en bois apparut.",
						"spanish": "Entre las paredes congeladas, los restos de un enorme barco de madera emergieron.",
						"vietnamese": "Giữa những bức tường băng giá, tàn tích của một con tàu gỗ khổng lồ hiện ra.",
						"thai": "ระหว่างกำแพงน้ำแข็ง ซากเรือไม้ขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "जमी हुई दीवारों के बीच, एक विशाल लकड़ी के जहाज का मलबा दिखाई दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이게 대체… 언제 적 배지?",
						"english": "What in the world... how old is this ship?",
						"japanese": "これは一体…いつの時代の船なんだ？",
						"chinese": "这到底……是什么时候的船？",
						"french": "Mais qu'est-ce que c'est... de quelle époque date ce navire ?",
						"spanish": "¿Qué demonios...? ¿De cuándo es este barco?",
						"vietnamese": "Cái này rốt cuộc... là con tàu từ thời nào?",
						"thai": "นี่มันอะไรกัน... เรือสมัยไหนเนี่ย?",
						"hindi": "यह आखिर... किस ज़माने का जहाज़ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "전설로만 듣던… 얼음 속의 배인가.",
						"english": "Is this the fabled... ship in the ice?",
						"japanese": "伝説に聞く…氷の中の船か。",
						"chinese": "难道这就是传说中的……冰中之船吗？",
						"french": "Est-ce le navire légendaire... dans la glace ?",
						"spanish": "¿Es este el legendario... barco en el hielo?",
						"vietnamese": "Có phải đây là con tàu trong truyền thuyết... con tàu trong băng?",
						"thai": "นี่คือ... เรือในน้ำแข็งที่เล่าขานกันในตำนานหรือ?",
						"hindi": "क्या यह वही पौराणिक... बर्फ़ में दबा जहाज़ है?"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "내가 어릴 적 들었던 전설이 있어.",
						"english": "I heard a legend when I was young.",
						"japanese": "幼い頃、ある伝説を聞いたことがある。",
						"chinese": "我小时候听过一个传说。",
						"french": "J'ai entendu une légende quand j'étais enfant.",
						"spanish": "De pequeño, escuché una leyenda.",
						"vietnamese": "Khi còn nhỏ, tôi đã nghe một truyền thuyết.",
						"thai": "ตอนเด็กๆ ฉันเคยได้ยินตำนานเรื่องหนึ่ง",
						"hindi": "जब मैं छोटा था, मैंने एक किंवदंती सुनी थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "전설?",
						"english": "A legend?",
						"japanese": "伝説？",
						"chinese": "传说？",
						"french": "Une légende ?",
						"spanish": "¿Una leyenda?",
						"vietnamese": "Truyền thuyết?",
						"thai": "ตำนาน?",
						"hindi": "एक किंवदंती?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "얼음의 여왕이 사랑한 배. 그녀는 배와 함께 영원히 잠들었지.",
						"english": "The ship the Ice Queen loved. She sleeps forever with it.",
						"japanese": "氷の女王が愛した船。彼女は船と共に永遠に眠りについた。",
						"chinese": "冰雪女王所爱的船。她与船一起永远沉睡了。",
						"french": "Le navire que la Reine des Glaces aimait. Elle dort à jamais avec lui.",
						"spanish": "El barco que amaba la Reina de Hielo. Ella duerme con él para siempre.",
						"vietnamese": "Con thuyền mà Nữ hoàng Băng giá yêu quý. Nàng đã ngủ yên mãi mãi cùng nó.",
						"thai": "เรือที่ราชินีน้ำแข็งรัก นางหลับใหลไปชั่วนิรันดร์พร้อมกับมัน",
						"hindi": "बर्फ की रानी का प्रिय जहाज़। वह उसके साथ हमेशा के लिए सो गई।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼… Skuld가 이 배를 지키는 거야?",
						"english": "So... Skuld protects this ship?",
						"japanese": "じゃあ… スクルドがこの船を守っているの？",
						"chinese": "那么… Skuld在守护这艘船吗？",
						"french": "Alors... Skuld protège ce navire ?",
						"spanish": "Entonces... ¿Skuld protege este barco?",
						"vietnamese": "Vậy... Skuld đang bảo vệ con thuyền này sao?",
						"thai": "ถ้าอย่างนั้น... Skuld กำลังปกป้องเรือลำนี้อยู่หรือ?",
						"hindi": "तो... स्कल्ड इस जहाज़ की रक्षा कर रही है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "갑자기 빙하 전체가 흔들렸다. Skuld의 분노가 느껴졌다.",
						"english": "Suddenly, the entire glacier shook. Skuld's wrath was felt.",
						"japanese": "突然、氷河全体が揺れた。スクルドの怒りを感じた。",
						"chinese": "突然，整座冰川都在颤抖。我感受到了Skuld的愤怒。",
						"french": "Soudain, le glacier entier a tremblé. La colère de Skuld s'est fait sentir.",
						"spanish": "De repente, todo el glaciar tembló. Se sintió la ira de Skuld.",
						"vietnamese": "Đột nhiên, toàn bộ sông băng rung chuyển. Cảm nhận được sự phẫn nộ của Skuld.",
						"thai": "ทันใดนั้น ธารน้ำแข็งทั้งหมดก็สั่นสะเทือน สัมผัสได้ถึงความโกรธของ Skuld",
						"hindi": "अचानक, पूरा ग्लेशियर हिल गया। स्कल्ड का क्रोध महसूस हुआ।"
					},
					"emotion": "base"
				},
				{
					"action": "shake",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "narrator"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…단순한 자연 현상이 아니었어. 그녀는… 지키고 있어.",
						"english": "...It wasn't just a natural phenomenon. She's... protecting it.",
						"japanese": "…ただの自然現象じゃなかった。彼女は…守っているんだ。",
						"chinese": "…这不只是一个自然现象。她…在守护着它。",
						"french": "...Ce n'était pas un simple phénomène naturel. Elle... le protège.",
						"spanish": "...No era un simple fenómeno natural. Ella... lo está protegiendo.",
						"vietnamese": "...Đó không chỉ là một hiện tượng tự nhiên. Nàng ấy... đang bảo vệ nó.",
						"thai": "...มันไม่ใช่แค่ปรากฏการณ์ทางธรรมชาติ เธอ...กำลังปกป้องมันอยู่",
						"hindi": "...यह सिर्फ एक प्राकृतिक घटना नहीं थी। वह... इसकी रक्षा कर रही है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "얼음 벽에 이상한 문양이 보여.",
						"english": "I see strange patterns on the ice wall.",
						"japanese": "氷の壁に変な模様が見える。",
						"chinese": "冰墙上看到了奇怪的图案。",
						"french": "Je vois d'étranges motifs sur le mur de glace.",
						"spanish": "Veo extraños patrones en la pared de hielo.",
						"vietnamese": "Tôi thấy những hoa văn kỳ lạ trên bức tường băng.",
						"thai": "ฉันเห็นลวดลายแปลกๆ บนกำแพงน้ำแข็ง",
						"hindi": "मुझे बर्फ की दीवार पर अजीबोगरीब पैटर्न दिख रहे हैं।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게 대체 뭘까… 고대 언어 같아.",
						"english": "What could this be...? It looks like an ancient language.",
						"japanese": "これ一体何だろう…古代言語みたいだ。",
						"chinese": "这到底是什么…好像是古老的语言。",
						"french": "Qu'est-ce que cela peut bien être...? Ça ressemble à une langue ancienne.",
						"spanish": "¿Qué podría ser esto...? Parece un idioma antiguo.",
						"vietnamese": "Cái này rốt cuộc là gì...? Trông như một ngôn ngữ cổ đại.",
						"thai": "นี่มันอะไรกันนะ...ดูเหมือนจะเป็นภาษาโบราณเลย",
						"hindi": "यह क्या हो सकता है...? यह एक प्राचीन भाषा जैसा लगता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "전설 속 여왕의 기록일지도 몰라.",
						"english": "It might be the record of the queen from the legend.",
						"japanese": "伝説の女王の記録かもしれない。",
						"chinese": "这可能是传说中女王的记录。",
						"french": "Ce pourrait être le récit de la reine de la légende.",
						"spanish": "Podrían ser los registros de la reina de la leyenda.",
						"vietnamese": "Có thể là ghi chép của nữ hoàng trong truyền thuyết.",
						"thai": "นี่อาจจะเป็นบันทึกของราชินีในตำนานก็ได้",
						"hindi": "यह किंवदंती की रानी का अभिलेख हो सकता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "Skuld는 이 배를 지키는 수호자야. 슬픈… 수호자.",
						"english": "Skuld is the guardian of this ship. A sad... guardian.",
						"japanese": "スクルドはこの船を守る守護者だ。悲しい…守護者。",
						"chinese": "Skuld是这艘船的守护者。一个悲伤的…守护者。",
						"french": "Skuld est la gardienne de ce navire. Une triste... gardienne.",
						"spanish": "Skuld es la guardiana de este barco. Una triste... guardiana.",
						"vietnamese": "Skuld là người bảo vệ con thuyền này. Một người bảo vệ... buồn bã.",
						"thai": "Skuld คือผู้พิทักษ์เรือลำนี้ ผู้พิทักษ์ที่...เศร้าโศก",
						"hindi": "स्कल्ड इस जहाज़ की रक्षक है। एक दुखद... रक्षक।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 진실에 가까워질수록, 더 격렬해지는 것 같아.",
						"english": "The closer we get to the truth, the more intense it seems to get.",
						"japanese": "真実に近づくほど、激しさが増しているようだ。",
						"chinese": "我们越接近真相，它似乎就越激烈。",
						"french": "Plus nous approchons de la vérité, plus cela semble s'intensifier.",
						"spanish": "Cuanto más nos acercamos a la verdad, más intenso parece volverse.",
						"vietnamese": "Càng gần sự thật, mọi thứ càng trở nên dữ dội hơn.",
						"thai": "ยิ่งเราเข้าใกล้ความจริงเท่าไหร่ มันก็ยิ่งรุนแรงขึ้นเท่านั้น",
						"hindi": "हम जितना सच के करीब आते हैं, उतनी ही तीव्रता बढ़ती जाती है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "탐험대는 더욱 깊은 미궁으로. 얼어붙은 심장부로.",
						"english": "The expedition delves deeper into the labyrinth. Towards its frozen heart.",
						"japanese": "探検隊は、さらに深い迷宮へ。凍てついた心臓部へ。",
						"chinese": "探险队深入迷宫。前往冰封的核心。",
						"french": "L'expédition s'enfonce plus profondément dans le labyrinthe. Vers son cœur gelé.",
						"spanish": "La expedición se adentra más en el laberinto. Hacia su corazón helado.",
						"vietnamese": "Đoàn thám hiểm tiến sâu hơn vào mê cung. Hướng về trái tim băng giá của nó.",
						"thai": "คณะสำรวจดำดิ่งลงสู่เขาวงกตที่ลึกกว่าเดิม มุ่งหน้าสู่แกนกลางที่เยือกแข็ง",
						"hindi": "अभियान और गहरे भूलभुलैया में। जमे हुए दिल की ओर।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "돌아갈 길은 없어. 전설의 끝을 봐야 해.",
						"english": "There's no turning back. We must see the legend's end.",
						"japanese": "もう後戻りはできない。伝説の結末を見届けなければ。",
						"chinese": "没有回头路了。我们必须看到传奇的结局。",
						"french": "Il n'y a pas de retour en arrière. Nous devons voir la fin de la légende.",
						"spanish": "No hay vuelta atrás. Debemos ver el final de la leyenda.",
						"vietnamese": "Không còn đường quay lại. Chúng ta phải chứng kiến kết cục của truyền thuyết.",
						"thai": "ไม่มีทางหวนกลับ เราต้องเห็นจุดจบของตำนาน",
						"hindi": "वापस जाने का कोई रास्ता नहीं है। हमें किंवदंती का अंत देखना होगा।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "Skuld가 계속 우릴 막고 있어. 뭘 숨기려는 거지?",
						"english": "Skuld keeps blocking our way. What is she trying to hide?",
						"japanese": "Skuldがずっと邪魔をしてくる。何を隠そうとしているんだ？",
						"chinese": "Skuld一直在阻挠我们。她想隐藏什么？",
						"french": "Skuld continue de nous bloquer. Que tente-t-elle de cacher ?",
						"spanish": "Skuld sigue bloqueándonos. ¿Qué intenta esconder?",
						"vietnamese": "Skuld cứ ngăn cản chúng ta. Cô ta đang cố giấu điều gì?",
						"thai": "สกุลด์คอยขวางทางเราอยู่ เธอพยายามซ่อนอะไรกันแน่?",
						"hindi": "स्कल्ड हमें लगातार रोक रही है। वह क्या छिपाने की कोशिश कर रही है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어쩌면… 그녀는 자신이 지키는 것을 우리에게 보여주고 싶지 않은 걸지도.",
						"english": "Perhaps... she doesn't want to show us what she's protecting.",
						"japanese": "もしかしたら… 彼女は自分が守るものを、私たちに見せたくないのかもしれない。",
						"chinese": "也许……她不想让我们看到她所守护的东西。",
						"french": "Peut-être... qu'elle ne veut pas nous montrer ce qu'elle protège.",
						"spanish": "Quizás... no quiera mostrarnos lo que protege.",
						"vietnamese": "Có lẽ... cô ta không muốn cho chúng ta thấy những gì cô ta đang bảo vệ.",
						"thai": "บางที... เธออาจจะไม่ต้องการให้เราเห็นสิ่งที่เธอกำลังปกป้องอยู่ก็ได้",
						"hindi": "शायद... वह हमें वह नहीं दिखाना चाहती जो वह बचा रही है।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그래도 가야 해. 진실을 알아야 하니까.",
						"english": "Still, we must go on. Because we need to know the truth.",
						"japanese": "それでも、進まなければならない。真実を知る必要があるからだ。",
						"chinese": "尽管如此，我们必须继续前进。因为我们需要知道真相。",
						"french": "Malgré tout, nous devons continuer. Car nous devons connaître la vérité.",
						"spanish": "Aun así, debemos seguir. Porque necesitamos saber la verdad.",
						"vietnamese": "Dù vậy, chúng ta vẫn phải đi tiếp. Vì chúng ta cần biết sự thật.",
						"thai": "ถึงอย่างนั้น เราก็ต้องไปต่อ เพราะเราจำเป็นต้องรู้ความจริง",
						"hindi": "फिर भी, हमें आगे बढ़ना होगा। क्योंकि हमें सच जानना है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미궁의 심장부. 거대한 그림자가 나타났다.",
						"english": "The heart of the labyrinth. A colossal shadow appeared.",
						"japanese": "迷宮の心臓部。巨大な影が現れた。",
						"chinese": "迷宫之心。一道巨大的阴影出现了。",
						"french": "Le cœur du labyrinthe. Une ombre colossale est apparue.",
						"spanish": "El corazón del laberinto. Una sombra colosal apareció.",
						"vietnamese": "Trái tim của mê cung. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ใจกลางเขาวงกต เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "भूलभुलैया का दिल। एक विशाल छाया दिखाई दी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "To come this far... foolish mortals.",
						"japanese": "ここまで来るとは… 愚かな人間どもめ。",
						"chinese": "竟敢来到这里……愚蠢的人类。",
						"french": "Oser venir jusqu'ici... Fous mortels.",
						"spanish": "Llegar hasta aquí... estúpidos mortales.",
						"vietnamese": "Dám đến tận đây... những kẻ phàm trần ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่... มนุษย์โง่เขลา",
						"hindi": "इतनी दूर तक आना... मूर्ख इंसान।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 내 영역을 침범하려 하는가.",
						"english": "Do you dare trespass upon my domain?",
						"japanese": "よくも私の領域を侵そうとするか。",
						"chinese": "竟敢侵犯我的领域。",
						"french": "Osez-vous envahir mon domaine ?",
						"spanish": "¿Osas invadir mi dominio?",
						"vietnamese": "Ngươi dám xâm phạm lãnh địa của ta sao?",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตของข้า",
						"hindi": "क्या तुम मेरे क्षेत्र में घुसपैठ करने की हिम्मत करते हो?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 Skuld의 수호자냐?",
						"english": "Are you Skuld's guardian?",
						"japanese": "お前がSkuldの守護者か？",
						"chinese": "你是Skuld的守护者吗？",
						"french": "Es-tu le gardien de Skuld ?",
						"spanish": "¿Eres el guardián de Skuld?",
						"vietnamese": "Ngươi là người bảo hộ của Skuld sao?",
						"thai": "เจ้าคือผู้พิทักษ์ของสกุลด์ใช่หรือไม่?",
						"hindi": "क्या तुम स्कल्ड के संरक्षक हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth… you cannot handle.",
						"japanese": "真実は… お前たちには耐えられないだろう。",
						"chinese": "真相…你们无法承受。",
						"french": "La vérité… vous ne pourrez pas la supporter.",
						"spanish": "La verdad… no podréis soportarla.",
						"vietnamese": "Sự thật… các ngươi sẽ không thể chịu đựng được.",
						"thai": "ความจริง…พวกเจ้าจะรับมือไม่ไหวหรอก",
						"hindi": "सच्चाई… तुम सहन नहीं कर पाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 감히….",
						"english": "Ugh… How dare you…",
						"japanese": "くっ…よくも…。",
						"chinese": "呃…竟敢…",
						"french": "Ugh… Comment osez-vous…",
						"spanish": "Ugh… ¿Cómo osáis…?",
						"vietnamese": "Khặc… Dám ư….",
						"thai": "อึก…บังอาจ…",
						"hindi": "उफ़… तुम्हारी हिम्मत कैसे हुई…"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 이것은 시작일 뿐… Skuld의 진정한 분노를….",
						"english": "But… this is just the beginning… Skuld's true wrath…",
						"japanese": "だが…これは始まりに過ぎない… Skuldの真の怒りを…",
						"chinese": "但是…这只是开始…Skuld真正的愤怒…",
						"french": "Mais… ce n'est que le début… la véritable colère de Skuld…",
						"spanish": "Pero… esto es solo el principio… la verdadera ira de Skuld…",
						"vietnamese": "Nhưng… đây chỉ là khởi đầu thôi… cơn thịnh nộ thực sự của Skuld…",
						"thai": "แต่…นี่เป็นเพียงจุดเริ่มต้น…ความโกรธแค้นที่แท้จริงของ Skuld…",
						"hindi": "लेकिन… यह तो बस शुरुआत है… स्कुल्ड का असली क्रोध…"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진정한 분노라고?",
						"english": "True wrath?",
						"japanese": "真の怒りだと？",
						"chinese": "真正的愤怒？",
						"french": "Une véritable colère ?",
						"spanish": "¿Verdadera ira?",
						"vietnamese": "Cơn thịnh nộ thực sự sao?",
						"thai": "ความโกรธแค้นที่แท้จริงงั้นรึ?",
						"hindi": "असली क्रोध?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 자가 지키려던 것은… 무엇이었을까.",
						"english": "What was this one trying to protect…?",
						"japanese": "この者が守ろうとしていたものは…何だったのだろうか。",
						"chinese": "这个人想守护的…究竟是什么？",
						"french": "Qu'est-ce que cette personne essayait de protéger… ?",
						"spanish": "¿Qué intentaba proteger esta persona…?",
						"vietnamese": "Kẻ này muốn bảo vệ… thứ gì đây?",
						"thai": "สิ่งที่ผู้นี้พยายามจะปกป้องคือ…อะไรกันนะ",
						"hindi": "यह शख्स क्या बचाने की कोशिश कर रहा था…?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "얼음 속의 배 전설은 진실이었다. 그러나 그것은 일부에 불과했다.",
						"english": "The legend of the ship in the ice was true. But it was only part of it.",
						"japanese": "氷の中の船の伝説は真実だった。しかし、それは一部に過ぎなかった。",
						"chinese": "冰中之船的传说果然是真的。然而那只是一部分。",
						"french": "La légende du navire dans la glace était vraie. Mais ce n'était qu'une partie de la vérité.",
						"spanish": "La leyenda del barco en el hielo era cierta. Pero era solo una parte.",
						"vietnamese": "Huyền thoại về con tàu trong băng là sự thật. Nhưng đó chỉ là một phần.",
						"thai": "ตำนานเรือในน้ำแข็งเป็นความจริง ทว่ามันเป็นเพียงส่วนหนึ่งเท่านั้น",
						"hindi": "बर्फ में फंसे जहाज की कहानी सच थी। लेकिन वह केवल एक हिस्सा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "Skuld의 진정한 정체는 여전히 베일에 싸여 있었다. 탐험대는 더 깊이 나아갔다.",
						"english": "Skuld's true identity remained veiled. The expedition pressed deeper.",
						"japanese": "Skuldの真の正体は、依然として謎に包まれていた。探検隊はさらに深く進んだ。",
						"chinese": "Skuld的真正身份依然笼罩在迷雾之中。探险队继续深入。",
						"french": "La véritable identité de Skuld restait voilée de mystère. L'expédition s'enfonça plus profondément.",
						"spanish": "La verdadera identidad de Skuld seguía envuelta en misterio. La expedición avanzó más profundamente.",
						"vietnamese": "Danh tính thực sự của Skuld vẫn còn trong vòng bí ẩn. Đoàn thám hiểm tiếp tục tiến sâu hơn.",
						"thai": "ตัวตนที่แท้จริงของ Skuld ยังคงเป็นปริศนา ทีมสำรวจจึงรุดหน้าลึกเข้าไปอีก",
						"hindi": "स्कुल्ड की असली पहचान अभी भी रहस्य में डूबी थी। अभियान दल और गहराई में चला गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은… 인간들. 여기서 끝이다.",
						"english": "Foolish… humans. This is the end.",
						"japanese": "愚かな…人間どもめ。ここで終わりだ。",
						"chinese": "愚蠢的…人类。到此为止了。",
						"french": "Stupides… humains. C'est la fin.",
						"spanish": "Estúpidos… humanos. Aquí termina todo.",
						"vietnamese": "Bọn người… ngu xuẩn. Kết thúc rồi.",
						"thai": "พวกมนุษย์…โง่เขลา นี่คือจุดจบ",
						"hindi": "मूर्ख… इंसान। यहीं तुम्हारा अंत है।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는 포기하지 않아!",
						"english": "…It's not over yet. We won't give up!",
						"japanese": "…まだ終わってない。私たちは諦めない！",
						"chinese": "…还没结束。我们不会放弃！",
						"french": "…Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "…Aún no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta sẽ không bỏ cuộc!",
						"thai": "…ยังไม่จบ เราไม่ยอมแพ้หรอก!",
						"hindi": "…अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "다시 와도… 결과는 같을 것이다.",
						"english": "Even if you return… the outcome will be the same.",
						"japanese": "また来ても…結果は同じだろう。",
						"chinese": "即使再来…结果也一样。",
						"french": "Même si vous revenez… le résultat sera le même.",
						"spanish": "Aunque volváis… el resultado será el mismo.",
						"vietnamese": "Dù có quay lại… kết quả cũng sẽ như vậy thôi.",
						"thai": "แม้จะกลับมา…ผลลัพธ์ก็จะเหมือนเดิม",
						"hindi": "अगर तुम वापस भी आओगे… तो भी नतीजा वही रहेगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
