export const scenario_snowy_grumpyherring_33_02 = {
	"scenario_id": "snowy_grumpyherring_33_02",
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 바람이 부는 시장. 낡은 물건들만 뒹굴었다.",
						"english": "A market with a cold wind blowing. Only old things lay scattered.",
						"japanese": "冷たい風が吹く市場。古びた物だけが転がっていた。",
						"chinese": "寒风凛冽的市场。只有旧物散落一地。",
						"french": "Un marché où souffle un vent froid. Seuls de vieux objets traînaient.",
						"spanish": "Un mercado donde soplaba un viento frío. Solo objetos viejos yacían esparcidos.",
						"vietnamese": "Chợ gió lạnh thổi. Chỉ có đồ cũ lăn lóc.",
						"thai": "ตลาดที่มีลมหนาวพัดโชย มีแต่ของเก่าเกลื่อนกลาด",
						"hindi": "एक बाज़ार जहाँ ठंडी हवा चल रही थी। केवल पुरानी चीज़ें बिखरी पड़ी थीं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여긴… 더 이상 삶의 흔적이 없네.",
						"english": "Here... there's no trace of life anymore.",
						"japanese": "ここには… もう、生命の痕跡がないな。",
						"chinese": "这里… 再也没有生命的痕迹了。",
						"french": "Ici… plus aucune trace de vie.",
						"spanish": "Aquí… ya no hay rastro de vida.",
						"vietnamese": "Nơi này… không còn dấu vết của sự sống nữa rồi.",
						"thai": "ที่นี่... ไม่มีร่องรอยของชีวิตอีกแล้ว",
						"hindi": "यहाँ… अब जीवन का कोई निशान नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "길을 잃었군. 자네도 '그것'을 찾으러 왔나?",
						"english": "Lost, aren't you? Have you also come looking for 'it'?",
						"japanese": "道に迷ったのか。君も「それ」を探しに来たのか？",
						"chinese": "迷路了。你也是来找“那个”的吗？",
						"french": "Perdu, n'est-ce pas ? Toi aussi, tu cherches 'ça' ?",
						"spanish": "Estás perdido, ¿verdad? ¿Tú también vienes buscando 'eso'?",
						"vietnamese": "Lạc đường à? Cậu cũng đến tìm 'thứ đó' sao?",
						"thai": "หลงทางสินะ นายก็มาตามหา 'สิ่งนั้น' ด้วยเหรอ?",
						"hindi": "भटक गए हो। क्या तुम भी 'उसे' ढूंढने आए हो?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "'그것'이라니?",
						"english": "'It'? What 'it'?",
						"japanese": "「それ」とは？",
						"chinese": "“那个”是什么？",
						"french": "'Ça' ? Qu'est-ce que 'ça' ?",
						"spanish": "¿'Eso'? ¿Qué 'eso'?",
						"vietnamese": "'Thứ đó' là gì?",
						"thai": "'สิ่งนั้น' คืออะไร?",
						"hindi": "'वह'? क्या 'वह'?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "'훈제 청어 저주' 말일세. 모든 걸 얼려버리는.",
						"english": "The 'Smoked Herring Curse', of course. The one that freezes everything.",
						"japanese": "「燻製ニシンの呪い」のことだよ。すべてを凍らせてしまう。",
						"chinese": "是“烟熏鲱鱼诅咒”。它会冻结一切。",
						"french": "La 'Malédiction du hareng fumé', bien sûr. Celle qui gèle tout.",
						"spanish": "La 'Maldición del arenque ahumado', por supuesto. Esa que lo congela todo.",
						"vietnamese": "'Lời nguyền cá trích hun khói' ấy. Thứ đóng băng mọi thứ.",
						"thai": "'คำสาปปลาเฮอร์ริ่งรมควัน' ไงล่ะ ที่ทำให้ทุกอย่างกลายเป็นน้ำแข็ง",
						"hindi": "'स्मोक्ड हेरिंग का श्राप', जो सब कुछ जमा देता है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "훈제 청어 저주라니. 그런 게 정말 있어?",
						"english": "The Smoked Herring Curse? Does such a thing really exist?",
						"japanese": "燻製ニシンの呪いだって？本当にそんなものがあるのか？",
						"chinese": "烟熏鲱鱼诅咒？真有那种东西吗？",
						"french": "La malédiction du hareng fumé ? Ça existe vraiment, une chose pareille ?",
						"spanish": "¿La Maldición del arenque ahumado? ¿De verdad existe algo así?",
						"vietnamese": "Lời nguyền cá trích hun khói ư? Thật sự có thứ đó sao?",
						"thai": "คำสาปปลาเฮอร์ริ่งรมควันเหรอ? มันมีอยู่จริงหรือนี่?",
						"hindi": "स्मोक्ड हेरिंग का श्राप? क्या वाकई ऐसी कोई चीज़ है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소문은 그렇게 부르지. 하지만… 그건 저주가 아닐세.",
						"english": "Rumor calls it that. But... it's not a curse.",
						"japanese": "噂ではそう呼ばれている。だが…それは呪いではない。",
						"chinese": "传闻是这么叫的。但是…那并非诅咒。",
						"french": "La rumeur l'appelle ainsi. Mais... ce n'est pas une malédiction.",
						"spanish": "El rumor lo llama así. Pero... no es una maldición.",
						"vietnamese": "Tin đồn gọi nó là vậy. Nhưng… đó không phải là lời nguyền.",
						"thai": "ข่าวลือเรียกมันว่าอย่างนั้น แต่…นั่นไม่ใช่คำสาป",
						"hindi": "अफवाहें इसे यही कहती हैं। लेकिन... यह कोई अभिशाप नहीं है।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, c'est quoi ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "강제 시식. 오래 전부터 이어진… 시스템이야.",
						"english": "Forced tasting. A system that's been around for a long time...",
						"japanese": "強制試食。古くから続く…システムだ。",
						"chinese": "强制试吃。是自古流传下来的…系统。",
						"french": "Dégustation forcée. Un système qui existe depuis longtemps...",
						"spanish": "Degustación forzada. Un sistema que ha existido desde hace mucho tiempo...",
						"vietnamese": "Nếm thử bắt buộc. Một hệ thống đã tồn tại từ rất lâu rồi…",
						"thai": "การชิมแบบบังคับ เป็นระบบที่มีมานานแล้ว…",
						"hindi": "ज़बरदस्ती चखना। एक प्रणाली जो बहुत पहले से चली आ रही है..."
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "강제로 먹어야만 해? 거부하면 어떻게 되는데?",
						"english": "Do I have to eat it by force? What happens if I refuse?",
						"japanese": "強制的に食べなきゃならないの？拒否したらどうなる？",
						"chinese": "非要强制吃吗？拒绝的话会怎么样？",
						"french": "Dois-je le manger de force ? Que se passe-t-il si je refuse ?",
						"spanish": "¿Tengo que comerlo a la fuerza? ¿Qué pasa si me niego?",
						"vietnamese": "Phải ăn bằng được ư? Nếu từ chối thì sẽ thế nào?",
						"thai": "ต้องกินแบบบังคับเหรอ? ถ้าปฏิเสธจะเกิดอะไรขึ้น?",
						"hindi": "क्या मुझे इसे ज़बरदस्ती खाना होगा? अगर मैं मना करूँ तो क्या होगा?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "얼어붙지. 영혼까지 꽁꽁 얼어붙는다고.",
						"english": "You freeze. Your very soul will be frozen solid.",
						"japanese": "凍りつく。魂まで凍りつくんだ。",
						"chinese": "会冻结。连灵魂都会被冻住。",
						"french": "Tu gèles. Ton âme même sera gelée à jamais.",
						"spanish": "Te congelas. Tu alma misma se congelará por completo.",
						"vietnamese": "Sẽ bị đóng băng. Đóng băng tận cả linh hồn.",
						"thai": "คุณจะแข็งตาย วิญญาณของคุณจะแข็งจนเป็นน้ำแข็ง",
						"hindi": "तुम जम जाओगे। तुम्हारी आत्मा तक जम जाएगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "폐허가 된 오두막. 시간이 멈춘 듯 모든 것이 얼어붙어 있었다.",
						"english": "A ruined cabin. Everything was frozen as if time had stopped.",
						"japanese": "廃墟となった小屋。時が止まったかのように、全てが凍りついていた。",
						"chinese": "废弃的小屋。一切仿佛时间停止般冻结着。",
						"french": "Une cabane en ruine. Tout était figé comme si le temps s'était arrêté.",
						"spanish": "Una cabaña en ruinas. Todo estaba congelado como si el tiempo se hubiera detenido.",
						"vietnamese": "Một căn lều hoang tàn. Mọi thứ đóng băng như thể thời gian đã ngừng lại.",
						"thai": "กระท่อมร้าง ทุกอย่างแข็งตัวราวกับเวลาหยุดนิ่ง",
						"hindi": "एक खंडहर बनी झोपड़ी। सब कुछ जम गया था जैसे समय रुक गया हो।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기, 낡은 일기장이 있어.",
						"english": "Here, there's an old diary.",
						"japanese": "ここに、古びた日記がある。",
						"chinese": "这里有一本旧日记。",
						"french": "Tiens, il y a un vieux journal ici.",
						"spanish": "Aquí hay un viejo diario.",
						"vietnamese": "Ở đây có một cuốn nhật ký cũ.",
						"thai": "นี่ มีบันทึกเก่าๆ เล่มหนึ่ง",
						"hindi": "यहाँ, एक पुरानी डायरी है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "종이 파편이 손에 닿자마자 바스러졌다. 하지만 글자는 또렷했다.",
						"english": "As soon as the paper fragment touched my hand, it crumbled. But the writing was clear.",
						"japanese": "紙の破片が手に触れた途端、砕け散った。しかし文字ははっきりと読めた。",
						"chinese": "纸片一碰到手就碎了。但字迹却很清晰。",
						"french": "Dès que le fragment de papier toucha ma main, il s'effrita. Mais l'écriture était claire.",
						"spanish": "Tan pronto como el fragmento de papel tocó mi mano, se desmoronó. Pero la escritura era clara.",
						"vietnamese": "Mảnh giấy vừa chạm vào tay đã vụn ra. Nhưng chữ viết thì vẫn rõ ràng.",
						"thai": "ทันทีที่เศษกระดาษแตะมือ มันก็ร่วนเป็นผง แต่ตัวอักษรยังคงชัดเจน",
						"hindi": "जैसे ही कागज़ का टुकड़ा मेरे हाथ लगा, वह बिखर गया। लेकिन लिखावट साफ़ थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "'추위... 끔찍한 추위... 내가 만든 청어가 나를 얼게 할 줄이야...'",
						"english": "'The cold... a terrible cold... To think the herring I made would freeze me...'",
						"japanese": "「寒さ…恐ろしい寒さ…まさか、私が作ったニシンが私を凍らせるとは…」",
						"chinese": "“寒冷…可怕的寒冷…没想到我做的鲱鱼会把我冻住…”",
						"french": "'Le froid... un froid terrible... Dire que le hareng que j'ai fait allait me geler...'",
						"spanish": "'El frío... un frío terrible... Pensar que el arenque que hice me congelaría...'",
						"vietnamese": "'Cái lạnh... cái lạnh khủng khiếp... Không ngờ món cá trích mình làm lại khiến mình đông cứng...'",
						"thai": "ความหนาวเย็น…ความหนาวเย็นอันน่ากลัว…ไม่คิดเลยว่าปลาเฮอร์ริ่งที่ฉันทำจะทำให้ฉันแข็งตาย…",
						"hindi": "'ठंड... एक भयानक ठंड... यह सोचकर कि मैंने जो हेरिंग बनाई थी, वह मुझे जमा देगी...'"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "요리사의 일기 파편이군. 그분도 결국….",
						"english": "A fragment from the chef's diary. He too, in the end...",
						"japanese": "料理人の日記の破片か。彼も結局…。",
						"chinese": "是厨师的日记残片啊。他最终也…",
						"french": "Un fragment du journal du chef. Lui aussi, finalement...",
						"spanish": "Un fragmento del diario del chef. Él también, al final...",
						"vietnamese": "Mảnh nhật ký của người đầu bếp. Cuối cùng ông ấy cũng…",
						"thai": "เศษบันทึกของเชฟนี่นา เขาก็ด้วย สุดท้ายแล้ว…",
						"hindi": "यह रसोइए की डायरी का एक टुकड़ा है। आखिर में वह भी..."
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "대체 무슨 일이 있었던 거지?",
						"english": "What in the world happened?",
						"japanese": "一体何があったの？",
						"chinese": "到底发生什么事了？",
						"french": "Mais qu'est-ce qui s'est passé ?",
						"spanish": "¿Qué demonios pasó?",
						"vietnamese": "Rốt cuộc chuyện gì đã xảy ra?",
						"thai": "เกิดอะไรขึ้นกันแน่?",
						"hindi": "आख़िर क्या हुआ था?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이 시스템은 생각보다 오래됐어. 뿌리가 깊어.",
						"english": "This system is older than it looks. Its roots run deep.",
						"japanese": "このシステムは見た目より古い。根が深い。",
						"chinese": "这个系统比想象的要旧。根深蒂固。",
						"french": "Ce système est plus ancien qu'il n'y paraît. Ses racines sont profondes.",
						"spanish": "Este sistema es más antiguo de lo que parece. Sus raíces son profundas.",
						"vietnamese": "Hệ thống này đã cũ hơn tôi nghĩ. Rễ của nó ăn sâu rồi.",
						"thai": "ระบบนี้เก่ากว่าที่คิด รากหยั่งลึกมาก",
						"hindi": "यह सिस्टम जितना दिखता है, उससे कहीं ज़्यादा पुराना है। इसकी जड़ें बहुत गहरी हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누가, 왜 이런 짓을 벌이는 건데!",
						"english": "Who's doing this, and why?!",
						"japanese": "誰が、なぜこんなことを！",
						"chinese": "到底是谁，为什么要这么做！",
						"french": "Qui fait ça, et pourquoi ?!",
						"spanish": "¿Quién está haciendo esto y por qué?",
						"vietnamese": "Ai đang làm chuyện này, và tại sao chứ!",
						"thai": "ใครทำเรื่องนี้ ทำไมถึงทำแบบนี้!",
						"hindi": "कौन और क्यों कर रहा है ये सब!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "그건… 나도 모르겠어. 하지만 분명한 건.",
						"english": "I don't know that... but one thing is clear.",
						"japanese": "それは… 私にもわからない。だが、一つ確かなのは。",
						"chinese": "那个嘛… 我也不知道。但有一点很明确。",
						"french": "Ça… je ne sais pas. Mais une chose est sûre.",
						"spanish": "Eso… yo tampoco lo sé. Pero una cosa está clara.",
						"vietnamese": "Chuyện đó… tôi cũng không biết. Nhưng có một điều rõ ràng.",
						"thai": "นั่น… ฉันก็ไม่รู้เหมือนกัน แต่ที่แน่ๆ คือ",
						"hindi": "वो… मुझे भी नहीं पता। लेकिन एक बात साफ है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기서 멈춰야 해. 더 깊이 들어가면… 돌아올 수 없어.",
						"english": "You have to stop here. Go any deeper... and you can't come back.",
						"japanese": "ここで止まるべきだ。これ以上深く進めば… 戻れなくなる。",
						"chinese": "必须到此为止。再深入下去… 就回不来了。",
						"french": "Il faut s'arrêter ici. Si tu vas plus loin… tu ne pourras plus revenir.",
						"spanish": "Debes detenerte aquí. Si vas más profundo… no podrás regresar.",
						"vietnamese": "Phải dừng lại ở đây thôi. Nếu đi sâu hơn nữa… sẽ không thể quay lại được đâu.",
						"thai": "ต้องหยุดตรงนี้ ถ้าเข้าไปลึกกว่านี้… จะกลับมาไม่ได้แล้ว",
						"hindi": "तुम्हें यहीं रुकना होगा। और गहराई में गए तो… वापस नहीं आ पाओगे।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 곳은 없어. 진실을 알아야 해.",
						"english": "There's no turning back. I need to know the truth.",
						"japanese": "もう後戻りはできない。真実を知る必要がある。",
						"chinese": "没有回头路了。我必须知道真相。",
						"french": "Il n'y a pas de retour en arrière. Je dois connaître la vérité.",
						"spanish": "No hay vuelta atrás. Debo saber la verdad.",
						"vietnamese": "Không còn đường quay lại nữa. Phải biết sự thật.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ฉันต้องรู้ความจริง",
						"hindi": "वापस जाने का कोई रास्ता नहीं। मुझे सच जानना होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "차가운 기운이 응축된 방. 거대한 그림자가 앞을 가로막았다.",
						"english": "A room filled with condensed cold energy. A colossal shadow blocked the way.",
						"japanese": "冷たい気が凝縮された部屋。巨大な影が道を塞いだ。",
						"chinese": "一个充满寒气的房间。巨大的黑影挡住了去路。",
						"french": "Une pièce remplie d'énergie froide condensée. Une ombre colossale barra le chemin.",
						"spanish": "Una habitación con energía fría condensada. Una sombra gigantesca bloqueó el camino.",
						"vietnamese": "Căn phòng ngưng tụ khí lạnh. Một cái bóng khổng lồ chắn ngang đường.",
						"thai": "ห้องที่เต็มไปด้วยพลังงานความเย็นเข้มข้น เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक कमरा जिसमें ठंडी ऊर्जा संघनित थी। एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 감히 '명품 훈제 청어'를 거부하는가?",
						"english": "Fools. Do you dare refuse 'Premium Smoked Herring'?",
						"japanese": "愚かな者たちめ。よくも「逸品スモークニシン」を拒むか？",
						"chinese": "愚蠢的东西。竟敢拒绝“极品烟熏鲱鱼”？",
						"french": "Imbéciles. Osez-vous refuser le 'Hareng Fumé de Luxe' ?",
						"spanish": "Necios. ¿Os atrevéis a rechazar el 'Arenque Ahumado Premium'?",
						"vietnamese": "Đồ ngốc. Dám từ chối 'Cá trích hun khói thượng hạng' ư?",
						"thai": "พวกโง่เง่า กล้าปฏิเสธ 'ปลาเฮอร์ริ่งรมควันชั้นเลิศ' อย่างนั้นหรือ?",
						"hindi": "मूर्खों। क्या तुम 'प्रीमियम स्मोक्ड हेरिंग' को अस्वीकार करने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 시스템의 수호자냐? 당장 멈춰!",
						"english": "Are you the guardian of this system? Stop this at once!",
						"japanese": "お前がこのシステムの守護者か？今すぐ止めろ！",
						"chinese": "你就是这个系统的守护者吗？立刻住手！",
						"french": "Es-tu le gardien de ce système ? Arrête ça tout de suite !",
						"spanish": "¿Eres el guardián de este sistema? ¡Detente ahora mismo!",
						"vietnamese": "Ngươi là người bảo hộ của hệ thống này ư? Dừng lại ngay!",
						"thai": "แกคือผู้พิทักษ์ของระบบนี้เหรอ? หยุดเดี๋ยวนี้!",
						"hindi": "क्या तुम इस सिस्टम के संरक्षक हो? तुरंत रोको इसे!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이건 함정일세… 조심하게!",
						"english": "This is a trap... Be careful!",
						"japanese": "これは罠だ… 気をつけろ！",
						"chinese": "这是个陷阱… 小心点！",
						"french": "C'est un piège… Fais attention !",
						"spanish": "Esto es una trampa… ¡Ten cuidado!",
						"vietnamese": "Đây là một cái bẫy… Cẩn thận đấy!",
						"thai": "นี่มันกับดัก… ระวังตัวด้วย!",
						"hindi": "यह एक जाल है… सावधान रहना!"
					}
				},
				{
					"speaker": "bran",
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "냉혹한 한기가 온몸을 덮쳐왔다. 움직일 수 없었다.",
						"english": "A ruthless chill enveloped his entire body. He couldn't move.",
						"japanese": "冷酷な寒気が全身を覆った。動くことができなかった。",
						"chinese": "无情的寒气笼罩全身。无法动弹。",
						"french": "Une froideur impitoyable envahit tout son corps. Il ne pouvait plus bouger.",
						"spanish": "Un frío implacable envolvió todo su cuerpo. No podía moverse.",
						"vietnamese": "Một luồng khí lạnh tàn nhẫn bao trùm toàn thân. Không thể cử động được.",
						"thai": "ความหนาวเหน็บไร้ปรานีปกคลุมทั่วร่าง เขาขยับไม่ได้",
						"hindi": "एक बेरहम ठंडक ने उसके पूरे शरीर को ढक लिया। वह हिल नहीं सका।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 반항. 너희도 결국 얼어붙을 운명이다.",
						"english": "Petty defiance. You too are destined to freeze.",
						"japanese": "取るに足らない反抗。お前たちも結局は凍りつく運命なのだ。",
						"chinese": "微不足道的反抗。你们也注定会被冻结。",
						"french": "Misérable défi. Vous aussi êtes destinés à geler.",
						"spanish": "Inútil desafío. Vosotros también estáis destinados a congelaros.",
						"vietnamese": "Sự phản kháng nhỏ bé. Các ngươi rồi cũng sẽ bị đóng băng thôi.",
						"thai": "การต่อต้านที่ไร้ค่า พวกเจ้าก็ต้องถูกแช่แข็งในที่สุด",
						"hindi": "तुच्छ अवज्ञा। तुम भी जमने के लिए नियत हो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not... over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没……结束……！",
						"french": "Ce n'est pas... encore fini... !",
						"spanish": "Aún no... ha terminado...!",
						"vietnamese": "Vẫn chưa... kết thúc đâu...!",
						"thai": "ยัง… ไม่จบ…!",
						"hindi": "अभी... खत्म नहीं हुआ है...!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크으… 네가 이겼다고 생각하나? 이건… 시작에 불과해….",
						"english": "Hmph... You think you've won? This is... just the beginning...",
						"japanese": "くっ…勝ったとでも思っているのか？これは…始まりに過ぎない…",
						"chinese": "哼……你以为你赢了吗？这……只不过是开始……",
						"french": "Hmpf... Tu penses avoir gagné ? Ce n'est... que le début...",
						"spanish": "Hmpf... ¿Crees que has ganado? Esto es... solo el principio...",
						"vietnamese": "Khặc... Ngươi nghĩ mình thắng rồi sao? Đây... chỉ mới là khởi đầu thôi...",
						"thai": "อืมม… เจ้าคิดว่าเจ้าชนะแล้วรึ? นี่มัน… เป็นแค่จุดเริ่มต้นเท่านั้น…",
						"hindi": "हम्म... तुम्हें लगता है कि तुम जीत गए? यह... बस शुरुआत है..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "시작이라고? 그럼 누가….",
						"english": "The beginning? Then who...",
						"japanese": "始まりだと？なら誰が…",
						"chinese": "开始？那谁……",
						"french": "Le début ? Alors qui...",
						"spanish": "¿El principio? Entonces quién...",
						"vietnamese": "Khởi đầu sao? Vậy ai...",
						"thai": "จุดเริ่มต้นรึ? แล้วใครกัน...",
						"hindi": "शुरुआत? तो फिर कौन..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 더 거대한 의문이 모습을 드러냈다.",
						"english": "Behind the fallen shadow, a greater mystery emerged.",
						"japanese": "倒れた影の向こうに、さらに巨大な疑問が姿を現した。",
						"chinese": "倒下的影子背后，一个更大的疑问浮现出来。",
						"french": "Derrière l'ombre tombée, une plus grande énigme apparut.",
						"spanish": "Detrás de la sombra caída, una incógnita mayor surgió.",
						"vietnamese": "Đằng sau bóng tối ngã xuống, một nghi vấn lớn hơn hiện ra.",
						"thai": "เบื้องหลังเงาที่ล้มลง ปริศนาที่ยิ่งใหญ่กว่าก็ปรากฏขึ้น",
						"hindi": "गिरी हुई छाया के पीछे, एक बड़ा रहस्य सामने आया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 진실은 멀리 있었다. 차가운 얼음 심장의 단서를 찾아야만 했다.",
						"english": "The truth was still far off. They had to find clues to the cold, icy heart.",
						"japanese": "まだ真実は遠かった。冷たい氷の心の手がかりを見つけなければならなかった。",
						"chinese": "真相仍遥远。必须找到那颗冰冷之心的线索。",
						"french": "La vérité était encore lointaine. Ils devaient trouver les indices du cœur de glace froid.",
						"spanish": "La verdad aún estaba lejos. Debían encontrar las pistas del frío corazón de hielo.",
						"vietnamese": "Sự thật vẫn còn xa vời. Phải tìm ra manh mối của trái tim băng giá.",
						"thai": "ความจริงยังคงอยู่ห่างไกล ต้องหาเบาะแสของหัวใจน้ำแข็งอันเย็นชาให้พบ",
						"hindi": "सच्चाई अभी भी दूर थी। उन्हें ठंडे, बर्फीले दिल के सुराग खोजने थे।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"황량한 시장, 잿빛 소문만이 떠돌았다.",
			"얼어붙은 청어. 그건 저주일까, 시스템일까.",
			"길을 잃은 이를 찾아온 옛 어부.",
			"그의 이야기는, 진실을 향한 첫 단서였다."
		],
		"english": [
			"A desolate market, where only gray rumors lingered.",
			"Frozen herring. Is it a curse, or a system?",
			"An old fisherman came, seeking the lost.",
			"His story was the first clue towards the truth."
		],
		"japanese": [
			"荒涼とした市場、灰色の噂だけが漂っていた。",
			"凍りついたニシン。それは呪いか、それともシステムなのか。",
			"道に迷った者を探しに来た、老いた漁師。",
			"彼の話は、真実への最初の手がかりだった。"
		],
		"chinese": [
			"荒凉的市场，只有灰色谣言在流传。",
			"冰冻的鲱鱼。那是诅咒，还是系统？",
			"一位老渔夫前来寻找迷失之人。",
			"他的故事是通往真相的第一个线索。"
		],
		"french": [
			"Un marché désert, où seules des rumeurs grises planaient.",
			"Le hareng gelé. Est-ce une malédiction, ou un système ?",
			"Un vieil pêcheur vint, cherchant les égarés.",
			"Son histoire était le premier indice vers la vérité."
		],
		"spanish": [
			"Un mercado desolado, donde solo circulaban rumores sombríos.",
			"Arenques congelados. ¿Es una maldición, o un sistema?",
			"Un viejo pescador vino, buscando a los perdidos.",
			"Su historia fue la primera pista hacia la verdad."
		],
		"vietnamese": [
			"Chợ hoang tàn, chỉ có tin đồn xám xịt trôi nổi.",
			"Cá trích đông cứng. Đó là lời nguyền, hay một hệ thống?",
			"Lão ngư dân tìm đến người lạc lối.",
			"Câu chuyện của ông là manh mối đầu tiên dẫn đến sự thật."
		],
		"thai": [
			"ตลาดร้าง มีเพียงข่าวลือสีเทาเล็ดลอดไปทั่ว",
			"ปลาเฮอร์ริ่งแช่แข็ง. มันคือคำสาป หรือระบบกันแน่?",
			"ชาวประมงเฒ่ามาตามหาผู้หลงทาง",
			"เรื่องราวของเขาคือเบาะแสแรกสู่ความจริง"
		],
		"hindi": [
			"एक उजाड़ बाज़ार, जहाँ केवल फीकी अफवाहें तैर रही थीं।",
			"जमी हुई हेरिंग। क्या यह एक अभिशाप है, या एक व्यवस्था?",
			"एक बूढ़ा मछुआरा, खोए हुए को खोजने आया।",
			"उसकी कहानी, सच्चाई की ओर पहला सुराग थी।"
		]
	}
} as const;
