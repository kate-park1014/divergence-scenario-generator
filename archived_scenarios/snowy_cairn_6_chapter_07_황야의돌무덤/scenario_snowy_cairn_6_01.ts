export const scenario_snowy_cairn_6_01 = {
	"scenario_id": "snowy_cairn_6_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "발자국 하나 없는 백색의 공허. 거대한 돌무덤 하나가 황야 한가운데 솟아 있었다.",
						"english": "A white void with no footprints. A colossal cairn stood in the middle of the wilderness.",
						"japanese": "足跡一つない白い虚無。巨大な石塚が荒野の真ん中にそびえ立っていた。",
						"chinese": "白色的虚空，没有一丝足迹。一座巨大的石冢矗立在荒野中央。",
						"french": "Un vide blanc sans empreintes. Un cairn colossal se dressait au milieu de la nature sauvage.",
						"spanish": "Un vacío blanco sin huellas. Un túmulo colosal se alzaba en medio del páramo.",
						"vietnamese": "Hư không trắng xóa không một dấu chân. Một gò đá khổng lồ sừng sững giữa hoang địa.",
						"thai": "ความว่างเปล่าสีขาวไร้รอยเท้า เจดีย์หินขนาดมหึมาตั้งตระหง่านอยู่กลางถิ่นทุรกันดาร",
						"hindi": "पैरों के निशान रहित एक श्वेत शून्यता। एक विशाल पत्थरों का ढेर बंजर भूमि के बीच में खड़ा था।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 그 돌무덤인가.",
						"english": "Is this... that cairn?",
						"japanese": "これが…あの石塚なのか。",
						"chinese": "这就是……那个石冢吗？",
						"french": "C'est... ce cairn ?",
						"spanish": "¿Es esto... ese túmulo?",
						"vietnamese": "Đây… là gò đá đó sao.",
						"thai": "นี่คือ... เจดีย์หินนั่นหรือ",
						"hindi": "क्या यह... वह पत्थरों का ढेर है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기록에 따르면, 이곳은 옛 탐험가들의 표식. 동시에… 잊힌 자들의 안식처라고도 해요.",
						"english": "According to records, this is a marker for old explorers. And simultaneously... a resting place for the forgotten.",
						"japanese": "記録によると、ここは古の探検家たちの目印。同時に…忘れ去られた者たちの安息の地でもあるそうです。",
						"chinese": "根据记载，这里是古代探险家的标记。同时……也是被遗忘者的安息之所。",
						"french": "Selon les archives, c'est un marqueur pour les anciens explorateurs. Et en même temps... un lieu de repos pour les oubliés.",
						"spanish": "Según los registros, este es un marcador para antiguos exploradores. Y a la vez... un lugar de descanso para los olvidados.",
						"vietnamese": "Theo ghi chép, đây là dấu hiệu của các nhà thám hiểm xưa. Đồng thời… cũng là nơi an nghỉ của những người bị lãng quên.",
						"thai": "ตามบันทึก ที่นี่คือสัญลักษณ์ของนักสำรวจยุคเก่า และในขณะเดียวกัน... ก็เป็นที่พำนักของผู้ที่ถูกลืม",
						"hindi": "अभिलेखों के अनुसार, यह पुराने खोजकर्ताओं का एक चिन्ह है। और साथ ही... भूले हुए लोगों का विश्राम स्थल भी है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "자세히 보니 돌 하나하나에 희미한 룬이 새겨져 있네요.",
						"english": "Looking closely, faint runes are carved into each stone.",
						"japanese": "よく見ると、石の一つ一つにかすかなルーンが刻まれていますね。",
						"chinese": "仔细一看，每块石头上都刻着模糊的符文。",
						"french": "En y regardant de plus près, de faibles runes sont gravées dans chaque pierre.",
						"spanish": "Mirando de cerca, hay runas débiles grabadas en cada piedra.",
						"vietnamese": "Nhìn kỹ thì thấy mỗi tảng đá đều có khắc những ký hiệu rune mờ nhạt.",
						"thai": "ดูใกล้ๆ พบว่ามีอักษรรูนจางๆ สลักอยู่บนหินแต่ละก้อน",
						"hindi": "करीब से देखने पर, हर पत्थर पर धुंधले रून्स खुदे हुए हैं।"
					}
				},
				{
					"content": {
						"korean": "룬?",
						"english": "Runes?",
						"japanese": "ルーン？",
						"chinese": "符文？",
						"french": "Des runes ?",
						"spanish": "¿Runas?",
						"vietnamese": "Rune?",
						"thai": "อักษรรูน?",
						"hindi": "रून्स?"
					},
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "누군가 남긴 말 같아요. 해독해봐야겠어요.",
						"english": "It looks like words left by someone. I should decipher them.",
						"japanese": "誰かが残した言葉のようです。解読してみなければ。",
						"chinese": "像是某人留下的信息。我得试着解读一下。",
						"french": "On dirait des mots laissés par quelqu'un. Je devrais les déchiffrer.",
						"spanish": "Parece un mensaje dejado por alguien. Debería descifrarlos.",
						"vietnamese": "Có vẻ là lời nhắn của ai đó. Tôi phải giải mã chúng.",
						"thai": "ดูเหมือนจะเป็นข้อความที่ใครบางคนทิ้งไว้ ต้องลองถอดรหัสดู",
						"hindi": "लगता है किसी ने कुछ शब्द छोड़े हैं। मुझे उन्हें समझना होगा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤에 다가갈수록 바람은 잦아들고, 침묵의 무게가 짙어졌다.",
						"english": "As I approached the stone cairn, the wind died down, and the weight of silence grew heavy.",
						"japanese": "石塚に近づくにつれて風は収まり、沈黙の重みが増していった。",
						"chinese": "越靠近石冢，风声越小，沉默的份量越发沉重。",
						"french": "À mesure que je m'approchais du cairn, le vent s'apaisait et le poids du silence s'épaississait.",
						"spanish": "A medida que me acercaba al mojón, el viento amainaba y el peso del silencio se hacía más denso.",
						"vietnamese": "Càng đến gần mộ đá, gió càng lặng, và sự tĩnh lặng càng nặng nề hơn.",
						"thai": "ยิ่งเข้าใกล้กองหิน ลมก็ยิ่งสงบลง และน้ำหนักของความเงียบก็ยิ่งหนักอึ้งขึ้น",
						"hindi": "जैसे-जैसे मैं पत्थर के ढेर के करीब आता गया, हवा शांत होती गई, और खामोशी का बोझ गहरा होता गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "…이상하네요. 이 룬, 단순히 길을 안내하는 표식이 아닌 것 같아요.",
						"english": "...Strange. This rune doesn't seem like just a simple path marker.",
						"japanese": "…おかしいですね。このルーン、ただの道しるべではないようです。",
						"chinese": "……奇怪。这符文，似乎不只是指路的标记。",
						"french": "...Étrange. Cette rune ne semble pas être qu'un simple repère.",
						"spanish": "...Extraño. Esta runa no parece ser solo una señal de camino.",
						"vietnamese": "...Lạ thật. Cổ tự này, dường như không phải chỉ là dấu hiệu chỉ đường.",
						"thai": "...แปลกจัง รูนนี้ไม่น่าจะเป็นแค่สัญลักษณ์บอกทางธรรมดาๆ",
						"hindi": "...अजीब है। यह रूण, सिर्फ़ रास्ता दिखाने वाला निशान नहीं लगता।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो फिर क्या है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "마치… 누군가가 이곳을 지키는 듯한 기운이 느껴져요. 모든 것을 지켜보는.",
						"english": "It's like... I feel a presence, as if someone is guarding this place. Watching everything.",
						"japanese": "まるで…誰かがここを守っているような気配がします。すべてを見守るように。",
						"chinese": "就像是……我感觉到有人在守护这里。注视着一切。",
						"french": "C'est comme si... je sentais une présence, quelqu'un qui garde cet endroit. Qui observe tout.",
						"spanish": "Es como si... sintiera una presencia, como si alguien estuviera custodiando este lugar. Observándolo todo.",
						"vietnamese": "Cứ như thể... tôi cảm thấy có một luồng khí, như thể ai đó đang canh giữ nơi này. Quan sát mọi thứ.",
						"thai": "เหมือนกับว่า... ฉันรู้สึกถึงพลังงานบางอย่าง ราวกับมีใครบางคนกำลังเฝ้ารักษาสถานที่แห่งนี้ จับตาดูทุกสิ่ง",
						"hindi": "ऐसा लगता है... जैसे कोई इस जगह की रखवाली कर रहा हो। सब कुछ देख रहा हो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "기분 탓이겠지.",
						"english": "It must be just your imagination.",
						"japanese": "気のせいだろう。",
						"chinese": "你多心了。",
						"french": "C'est sûrement ton imagination.",
						"spanish": "Debe ser tu imaginación.",
						"vietnamese": "Chắc là do cảm giác thôi.",
						"thai": "คิดมากไปเองมั้ง",
						"hindi": "यह बस तुम्हारा वहम होगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "주변 어디에도 생명체의 흔적은 없었다. 짐승의 발자국조차 돌무덤을 피해 있었다.",
						"english": "There were no traces of life anywhere around. Even animal footprints avoided the stone cairn.",
						"japanese": "周囲にはどこにも生命の痕跡がなかった。獣の足跡すら石塚を避けていた。",
						"chinese": "周围没有任何生命迹象。就连野兽的足迹都避开了石冢。",
						"french": "Il n'y avait aucune trace de vie aux alentours. Même les empreintes d'animaux évitaient le cairn.",
						"spanish": "No había rastros de vida en los alrededores. Ni siquiera las huellas de animales se acercaban al mojón.",
						"vietnamese": "Xung quanh không hề có dấu vết của sự sống. Ngay cả dấu chân của thú dữ cũng tránh xa mộ đá.",
						"thai": "ไม่มีร่องรอยของสิ่งมีชีวิตใดๆ ในบริเวณนั้น แม้แต่รอยเท้าสัตว์ก็ยังหลีกเลี่ยงกองหิน",
						"hindi": "आस-पास कहीं भी जीवन का कोई निशान नहीं था। जानवरों के पदचिह्न भी पत्थर के ढेर से दूर थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 침묵은… 자연스러운 것이 아니에요. 마치 숨죽이고 기다리는 것 같아요.",
						"english": "This silence... it's not natural. It feels like something is holding its breath, waiting.",
						"japanese": "この沈黙は…自然なものじゃない。まるで息を潜めて待っているかのようです。",
						"chinese": "这寂静……不自然。就像是屏息等待着什么。",
						"french": "Ce silence... n'est pas naturel. On dirait que quelque chose retient son souffle, attendant.",
						"spanish": "Este silencio... no es natural. Parece que algo está conteniendo la respiración, esperando.",
						"vietnamese": "Sự im lặng này... không tự nhiên chút nào. Cứ như thể có gì đó đang nín thở chờ đợi.",
						"thai": "ความเงียบนี้... มันไม่เป็นธรรมชาติเลย ราวกับมีบางสิ่งกำลังกลั้นหายใจรอคอยอยู่",
						"hindi": "यह ख़ामोशी... स्वाभाविक नहीं है। ऐसा लगता है जैसे कुछ साँस रोककर इंतज़ार कर रहा हो।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "누가?",
						"english": "Who?",
						"japanese": "誰が？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "룬의 내용이 점점 더 명확해져요. 경고의 메시지 같아요.",
						"english": "The rune's message is becoming clearer. It feels like a warning.",
						"japanese": "ルーンの内容がますます明確になってきました。警告のメッセージのようです。",
						"chinese": "符文的内容越来越清晰了。像是一个警告信息。",
						"french": "Le message de la rune devient de plus en plus clair. On dirait un avertissement.",
						"spanish": "El mensaje de la runa se está volviendo más claro. Parece una advertencia.",
						"vietnamese": "Nội dung của cổ tự ngày càng rõ ràng hơn. Dường như là một thông điệp cảnh báo.",
						"thai": "เนื้อหาของรูนเริ่มชัดเจนขึ้นเรื่อยๆ ดูเหมือนจะเป็นข้อความเตือนภัย",
						"hindi": "रूण का संदेश और भी स्पष्ट होता जा रहा है। यह एक चेतावनी जैसा लगता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "경고? 뭘 조심하라는 건데.",
						"english": "A warning? What should we be careful of?",
						"japanese": "警告？何を気をつけろって言うんだ。",
						"chinese": "警告？要小心什么？",
						"french": "Un avertissement ? De quoi devons-nous nous méfier ?",
						"spanish": "¿Una advertencia? ¿De qué debemos tener cuidado?",
						"vietnamese": "Cảnh báo? Cần phải cẩn thận điều gì?",
						"thai": "คำเตือน? ให้ระวังอะไรล่ะ?",
						"hindi": "चेतावनी? किस बात से सावधान रहना है?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "더 깊은 침묵이 우리를 짓눌렀다. 이제 돌아갈 수 없었다.",
						"english": "A deeper silence pressed upon us. There was no turning back now.",
						"japanese": "より深い沈黙が私たちを押し潰した。もう引き返せない。",
						"chinese": "更深的沉默压迫着我们。已无法回头。",
						"french": "Un silence plus profond nous oppressa. Il n'y avait plus de retour possible.",
						"spanish": "Un silencio más profundo nos oprimió. Ya no había vuelta atrás.",
						"vietnamese": "Sự im lặng sâu hơn đè nặng lên chúng tôi. Giờ không thể quay lại được nữa.",
						"thai": "ความเงียบที่ลึกซึ้งกว่าเดิมกดทับเรา ไม่มีทางย้อนกลับแล้ว",
						"hindi": "एक गहरा सन्नाटा हम पर छा गया। अब वापसी का कोई रास्ता नहीं था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "룬이… 더 선명해졌어요. 우리를 환영하는 동시에… 심판하는 듯한.",
						"english": "The runes... they grew clearer. As if welcoming us, yet... judging us.",
						"japanese": "ルーンが…より鮮明になった。私たちを歓迎すると同時に…裁いているかのように。",
						"chinese": "符文…变得更清晰了。仿佛在欢迎我们，又…像是在审判。",
						"french": "Les runes… elles sont devenues plus claires. Comme si elles nous accueillaient, et en même temps… nous jugeaient.",
						"spanish": "Las runas… se hicieron más claras. Como si nos dieran la bienvenida y, a la vez… nos juzgaran.",
						"vietnamese": "Các ký tự cổ… đã rõ hơn. Cứ như vừa chào đón chúng ta… vừa phán xét vậy.",
						"thai": "อักษรรูน... ชัดเจนขึ้น ราวกับต้อนรับเรา และ... กำลังตัดสินเราไปพร้อมกัน",
						"hindi": "रुन… और अधिक स्पष्ट हो गए। जैसे हमें स्वागत कर रहे हों और साथ ही… न्याय कर रहे हों।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "심판?",
						"english": "Judgment?",
						"japanese": "審判？",
						"chinese": "审判？",
						"french": "Jugement ?",
						"spanish": "¿Juicio?",
						"vietnamese": "Phán xét?",
						"thai": "ตัดสิน?",
						"hindi": "न्याय?"
					},
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "이곳을 지나려는 자, 그 의지를 가늠하려는 것 같아요.",
						"english": "It feels like it's gauging the will of those who dare to pass.",
						"japanese": "ここを通ろうとする者の意志を試しているようです。",
						"chinese": "似乎是想衡量通过此处之人的意志。",
						"french": "On dirait qu'il mesure la volonté de ceux qui tentent de passer.",
						"spanish": "Parece que está midiendo la voluntad de quienes intentan pasar.",
						"vietnamese": "Có vẻ nó muốn đánh giá ý chí của những kẻ muốn vượt qua nơi này.",
						"thai": "ดูเหมือนจะกำลังประเมินเจตจำนงของผู้ที่คิดจะผ่านที่นี่",
						"hindi": "ऐसा लगता है कि यह उन लोगों की इच्छा का आकलन कर रहा है जो यहां से गुजरना चाहते हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우린 돌아가지 않아.",
						"english": "We're not turning back.",
						"japanese": "私たちは引き返さない。",
						"chinese": "我们不会回头。",
						"french": "Nous ne reculerons pas.",
						"spanish": "No nos echaremos atrás.",
						"vietnamese": "Chúng ta sẽ không quay lại.",
						"thai": "เราจะไม่กลับไป",
						"hindi": "हम वापस नहीं जाएंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…단지 힘만으로는… 모든 것을 이룰 수 없다…",
						"english": "...Power alone... cannot achieve everything...",
						"japanese": "「…ただ力だけでは…全てを成し遂げることはできない…」",
						"chinese": "“……仅凭力量……无法成就一切……”",
						"french": "...Le pouvoir seul... ne peut pas tout accomplir...",
						"spanish": "...Solo con fuerza... no se puede lograr todo...",
						"vietnamese": "...Chỉ sức mạnh thôi... không thể đạt được mọi thứ...",
						"thai": "...แค่เพียงกำลัง... ไม่อาจสำเร็จทุกสิ่งได้...",
						"hindi": "...केवल शक्ति से... सब कुछ प्राप्त नहीं किया जा सकता..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이것으로 끝인가?",
						"english": "Is this the end?",
						"japanese": "「これで終わりか？」",
						"chinese": "“这就结束了吗？”",
						"french": "Est-ce la fin ?",
						"spanish": "¿Es este el final?",
						"vietnamese": "Đây là kết thúc sao?",
						"thai": "นี่คือจุดจบแล้วหรือ?",
						"hindi": "क्या यह अंत है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "아니요. 이 룬의 마지막 구절이… '끝은 곧 시작'이라고 말해요.",
						"english": "No. The last line of this rune... says 'The end is but a beginning.'",
						"japanese": "「いいえ。このルーンの最後の節が…『終わりは始まり』と告げています。」",
						"chinese": "“不。这符文的最后一句……说‘结束即是开始’。”",
						"french": "Non. Le dernier verset de cette rune... dit 'La fin n'est qu'un début'.",
						"spanish": "No. El último verso de esta runa... dice 'El fin es solo el comienzo'.",
						"vietnamese": "Không. Dòng cuối của rune này... nói rằng 'Kết thúc chính là khởi đầu'.",
						"thai": "ไม่. วรรคสุดท้ายของรูนนี้... กล่าวว่า 'จุดจบคือจุดเริ่มต้น'.",
						"hindi": "नहीं। इस रुन का आखिरी वाक्य... कहता है 'अंत ही आरंभ है'।"
					}
				},
				{
					"content": {
						"korean": "하나의 표식이 쓰러졌다. 그러나 황야의 침묵은 여전히 깊었다.",
						"english": "One marker fell. But the wilderness's silence remained profound.",
						"japanese": "「一つの標識は倒れた。しかし、荒野の静寂は依然として深かった。」",
						"chinese": "“一个标记倒下了。然而，荒野的寂静依然深沉。”",
						"french": "Un repère est tombé. Mais le silence de la nature sauvage restait profond.",
						"spanish": "Un marcador cayó. Pero el silencio del desierto seguía siendo profundo.",
						"vietnamese": "Một dấu hiệu đã sụp đổ. Nhưng sự im lặng của vùng hoang dã vẫn còn sâu thẳm.",
						"thai": "เครื่องหมายหนึ่งล้มลงแล้ว. แต่ความเงียบงันของป่ายังคงลึกซึ้ง.",
						"hindi": "एक निशान गिर गया। लेकिन जंगल की खामोशी अब भी गहरी थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "다음 길목에는 또 다른 시험이 기다리고 있었다.",
						"english": "Another trial awaited at the next crossroads.",
						"japanese": "「次の岐路には、また別の試練が待っていた。」",
						"chinese": "“下一个路口，还有另一场考验在等待着。”",
						"french": "Une autre épreuve attendait au prochain carrefour.",
						"spanish": "Otra prueba esperaba en el siguiente cruce de caminos.",
						"vietnamese": "Một thử thách khác đang chờ đợi ở ngã rẽ tiếp theo.",
						"thai": "ที่ทางแยกถัดไป มีบททดสอบอื่นรออยู่.",
						"hindi": "अगले मोड़ पर एक और परीक्षा इंतजार कर रही थी।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤 가장 깊은 곳. 거대한 그림자가 우리를 기다리고 있었다.",
						"english": "Deepest within the stone tomb. A colossal shadow awaited us.",
						"japanese": "石塚の最も深い場所。巨大な影が私たちを待ち受けていた。",
						"chinese": "石冢最深处。一道巨大的黑影正在等着我们。",
						"french": "Au plus profond du tumulus de pierre. Une ombre colossale nous attendait.",
						"spanish": "En lo más profundo del túmulo de piedra. Una sombra colosal nos esperaba.",
						"vietnamese": "Sâu nhất trong mộ đá. Một bóng hình khổng lồ đang đợi chúng tôi.",
						"thai": "ลึกที่สุดในสุสานหิน เงาขนาดยักษ์กำลังรอเราอยู่",
						"hindi": "पत्थरों के मकबरे की सबसे गहरी जगह। एक विशाल छाया हमारा इंतजार कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "침범하는 자들이여. 너희의 의지를 시험하겠다.",
						"english": "Intruders. I shall test your will.",
						"japanese": "侵入者よ。お前たちの意志を試そう。",
						"chinese": "闯入者。我将考验你们的意志。",
						"french": "Intrus. Je mettrai votre volonté à l'épreuve.",
						"spanish": "Intrusos. Pondré a prueba vuestra voluntad.",
						"vietnamese": "Những kẻ xâm phạm. Ta sẽ thử thách ý chí của các ngươi.",
						"thai": "ผู้รุกล้ำเอ๋ย ข้าจะทดสอบเจตจำนงของเจ้า",
						"hindi": "घुसपैठियों। मैं तुम्हारी इच्छाशक्ति की परीक्षा लूँगा।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 돌무덤의 정체였나.",
						"english": "So, you were the true essence of this stone tomb.",
						"japanese": "お前がこの石塚の正体だったのか。",
						"chinese": "你就是这石冢的真面目吗？",
						"french": "C'était donc toi, la véritable nature de ce tumulus de pierre.",
						"spanish": "Así que tú eras la verdadera identidad de este túmulo de piedra.",
						"vietnamese": "Ngươi chính là bản thể của ngôi mộ đá này sao.",
						"thai": "เจ้าคือตัวตนที่แท้จริงของสุสานหินนี้หรือ",
						"hindi": "तो तुम ही इस पत्थरों के मकबरे की असलियत थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기서 멈춰라. 그렇지 않으면…",
						"english": "Halt here. Otherwise...",
						"japanese": "ここで止まれ。さもなくば…",
						"chinese": "就此止步。否则…",
						"french": "Arrêtez-vous ici. Sinon…",
						"spanish": "Detente aquí. De lo contrario…",
						"vietnamese": "Dừng lại ở đây. Nếu không thì…",
						"thai": "หยุดตรงนี้ มิฉะนั้น...",
						"hindi": "यहीं रुक जाओ। वरना…"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 절대 멈추지 않아!",
						"english": "We will never stop!",
						"japanese": "私たちは決して止まらない！",
						"chinese": "我们绝不会停下！",
						"french": "Nous ne nous arrêterons jamais !",
						"spanish": "¡Jamás nos detendremos!",
						"vietnamese": "Chúng ta sẽ không bao giờ dừng lại!",
						"thai": "เราจะไม่มีวันหยุด!",
						"hindi": "हम कभी नहीं रुकेंगे!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직 멀었군. 너희의 의지는… 겨우 이 정도인가.",
						"english": "Not yet. Your will... is only this much?",
						"japanese": "「まだまだだな。お前たちの意志は…たったこれだけか。」",
						"chinese": "“还差得远。你们的意志……就只有这点程度吗？”",
						"french": "Pas encore. Votre volonté... n'est que cela ?",
						"spanish": "Todavía no. ¿Vuestra voluntad... es solo esto?",
						"vietnamese": "Chưa đủ. Ý chí của các ngươi... chỉ đến vậy thôi sao?",
						"thai": "ยังอีกนาน. เจตจำนงของพวกเจ้า... มีแค่นี้เองรึ.",
						"hindi": "अभी बहुत दूर है। तुम्हारी इच्छाशक्ति... क्या बस इतनी ही है?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…다시 온다. 반드시.",
						"english": "...I will return. Without fail.",
						"japanese": "「…また来る。必ず。」",
						"chinese": "“……我会再回来。必定。”",
						"french": "...Je reviendrai. Absolument.",
						"spanish": "...Volveré. Sin falta.",
						"vietnamese": "...Ta sẽ quay lại. Nhất định.",
						"thai": "...จะกลับมาอีกครั้ง. อย่างแน่นอน.",
						"hindi": "...मैं वापस आऊँगा। निश्चित रूप से।"
					},
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"백색의 공허. 발자국조차 없는 곳.",
			"홀로 선 돌무덤은 길의 표식일까.",
			"아니면, 잊힌 자의 무덤일까.",
			"차가운 침묵만이 질문에 답한다."
		],
		"english": [
			"White void. A place without even footprints.",
			"Is the lone cairn a signpost?",
			"Or a tomb of the forgotten?",
			"Only cold silence answers the question."
		],
		"japanese": [
			"白い虚無。足跡すらない場所。",
			"孤高に立つ石塚は道の標識だろうか。",
			"それとも、忘れ去られた者の墓なのだろうか。",
			"冷たい沈黙だけが問いに答える。"
		],
		"chinese": [
			"白色的虚空。一个连足迹都没有的地方。",
			"孤立的石冢是道路的标记吗？",
			"抑或是，被遗忘者的坟墓？",
			"只有冰冷的沉默回应着疑问。"
		],
		"french": [
			"Un vide blanc. Un lieu sans la moindre empreinte.",
			"Le cairn solitaire serait-il un repère ?",
			"Ou la tombe d'un oublié ?",
			"Seul un silence froid répond à la question."
		],
		"spanish": [
			"Un vacío blanco. Un lugar sin huellas.",
			"¿Es el túmulo solitario una señal en el camino?",
			"¿O la tumba de los olvidados?",
			"Solo el frío silencio responde a la pregunta."
		],
		"vietnamese": [
			"Hư không trắng xóa. Nơi không một dấu chân.",
			"Gò đá đơn độc là dấu hiệu của con đường sao?",
			"Hay là mộ của những người bị lãng quên?",
			"Chỉ có sự im lặng lạnh lẽo trả lời câu hỏi."
		],
		"thai": [
			"ความว่างเปล่าสีขาว สถานที่ที่ไม่มีแม้แต่รอยเท้า",
			"เจดีย์หินที่ตั้งโดดเดี่ยวคือป้ายบอกทางหรือ",
			"หรือว่าเป็นสุสานของผู้ถูกลืม",
			"ความเงียบงันอันหนาวเหน็บเท่านั้นที่ตอบคำถาม"
		],
		"hindi": [
			"श्वेत शून्यता। एक ऐसी जगह जहाँ पैरों के निशान भी नहीं हैं।",
			"क्या अकेला खड़ा पत्थरों का ढेर रास्ते का निशान है?",
			"या फिर, भूले हुए लोगों की कब्र है?",
			"केवल ठंडी चुप्पी ही सवाल का जवाब देती है।"
		]
	}
} as const;
