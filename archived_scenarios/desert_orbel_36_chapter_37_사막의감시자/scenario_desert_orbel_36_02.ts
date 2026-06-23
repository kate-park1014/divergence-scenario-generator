export const scenario_desert_orbel_36_02 = {
	"scenario_id": "desert_orbel_36_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
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
					"content": {
						"korean": "모래 속에 묻힌 고대 도시의 잔해. 끝없는 사막의 한가운데였다.",
						"english": "The ruins of an ancient city buried in sand. It was in the middle of an endless desert.",
						"japanese": "砂に埋もれた古代都市の残骸。それは果てしない砂漠の真ん中にあった。",
						"chinese": "埋在沙中的古老城市废墟。位于无尽沙漠的中央。",
						"french": "Les ruines d'une ancienne cité enfouie sous le sable. C'était au milieu d'un désert sans fin.",
						"spanish": "Las ruinas de una antigua ciudad enterrada en la arena. Estaba en medio de un desierto interminable.",
						"vietnamese": "Tàn tích của một thành phố cổ chôn vùi trong cát. Nó nằm giữa một sa mạc vô tận.",
						"thai": "ซากเมืองโบราณที่ถูกฝังอยู่ใต้ทราย มันอยู่กลางทะเลทรายอันกว้างใหญ่ไร้ที่สิ้นสุด.",
						"hindi": "रेत में दबे एक प्राचीन शहर के खंडहर। यह एक अंतहीन रेगिस्तान के बीच में था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "왔군. 기다렸어. 이곳에 중요한 기록이 있어.",
						"english": "You've come. I've been waiting. There's an important record here.",
						"japanese": "来たか。待っていたぞ。ここに重要な記録がある。",
						"chinese": "你来了。我等了很久。这里有一份重要的记录。",
						"french": "Tu es venu. Je t'attendais. Il y a un document important ici.",
						"spanish": "Has venido. Te estaba esperando. Hay un registro importante aquí.",
						"vietnamese": "Ngươi đã đến. Ta đã đợi. Có một ghi chép quan trọng ở đây.",
						"thai": "มาแล้วสินะ ฉันรออยู่ มีบันทึกสำคัญอยู่ที่นี่.",
						"hindi": "तुम आ गए। मैं इंतज़ार कर रहा था। यहाँ एक महत्वपूर्ण रिकॉर्ड है।"
					},
					"speaker": "kemet",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기록? 뭐에 대한 건데?",
						"english": "A record? About what?",
						"japanese": "記録？何についてだ？",
						"chinese": "记录？关于什么的？",
						"french": "Un document ? À propos de quoi ?",
						"spanish": "¿Un registro? ¿Sobre qué?",
						"vietnamese": "Ghi chép? Về cái gì?",
						"thai": "บันทึกเหรอ? เกี่ยวกับอะไร?",
						"hindi": "रिकॉर्ड? किसके बारे में?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "사라진 문명들에 대한 거야. '모든 것은 반복된다'…라고 적혀 있었지.",
						"english": "It's about lost civilizations. It read, 'Everything repeats...'",
						"japanese": "失われた文明についてだ。「全ては繰り返される」…と記されていた。",
						"chinese": "是关于失落文明的。上面写着，‘一切都在重复……’",
						"french": "C'est à propos des civilisations perdues. Il était écrit : 'Tout se répète...'",
						"spanish": "Es sobre civilizaciones perdidas. Decía: 'Todo se repite...'",
						"vietnamese": "Đó là về những nền văn minh đã mất. Nó ghi, 'Mọi thứ lặp lại...'",
						"thai": "มันเกี่ยวกับอารยธรรมที่สาบสูญ มีเขียนไว้ว่า 'ทุกสิ่งล้วนซ้ำรอย...'",
						"hindi": "यह खोई हुई सभ्यताओं के बारे में है। उसमें लिखा था, 'सब कुछ दोहराता है...'"
					},
					"speaker": "kemet"
				},
				{
					"content": {
						"korean": "반복된다니? 무슨 의미야?",
						"english": "Repeats? What does that mean?",
						"japanese": "繰り返される？どういう意味だ？",
						"chinese": "重复？什么意思？",
						"french": "Répète ? Qu'est-ce que ça veut dire ?",
						"spanish": "¿Se repite? ¿Qué significa eso?",
						"vietnamese": "Lặp lại? Ý nghĩa là gì?",
						"thai": "ซ้ำรอยเหรอ? หมายความว่ายังไง?",
						"hindi": "दोहराता है? इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "kemet",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "이상해… 어제 분명히 봤던 기록이… 어디 갔지?",
						"english": "Strange... The record I clearly saw yesterday... Where did it go?",
						"japanese": "おかしい…昨日確かに見た記録が…どこへ行ったんだ？",
						"chinese": "奇怪……我昨天明明看到过的记录……去哪了？",
						"french": "Étrange... Le document que j'ai clairement vu hier... Où est-il passé ?",
						"spanish": "Extraño... El registro que vi claramente ayer... ¿Dónde fue a parar?",
						"vietnamese": "Lạ thật… Ghi chép mà tôi rõ ràng đã thấy hôm qua… Nó đâu rồi?",
						"thai": "แปลกจัง... บันทึกที่ฉันเห็นเมื่อวานนี้... หายไปไหนนะ?",
						"hindi": "अजीब... वह रिकॉर्ड जो मैंने कल साफ देखा था... कहाँ चला गया?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "케메트, 무슨 소리야? 어제 봤던 '반복된다'는 기록 말하는 거야?",
						"english": "Kemet, what are you talking about? Are you referring to the record we saw yesterday, 'It repeats'?",
						"japanese": "ケメト、何を言ってるの？昨日見た「繰り返される」という記録のこと？",
						"chinese": "凯米特，你说什么？你说的是昨天看到的“重复”的记录吗？",
						"french": "Kemet, de quoi parles-tu ? Tu fais référence au document qu'on a vu hier, \"Ça se répète\" ?",
						"spanish": "Kemet, ¿de qué hablas? ¿Te refieres al registro que vimos ayer, \"Se repite\"?",
						"vietnamese": "Kemet, cậu đang nói gì vậy? Cậu đang nói về ghi chép 'Nó lặp lại' mà chúng ta thấy hôm qua à?",
						"thai": "เคเมท พูดอะไรน่ะ? หมายถึงบันทึก \"มันซ้ำรอย\" ที่เราเห็นเมื่อวานเหรอ?",
						"hindi": "केमेट, तुम क्या कह रहे हो? क्या तुम उस रिकॉर्ड की बात कर रहे हो जो हमने कल देखा था, 'यह दोहराता है'?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "분명… 있었는데… 머리가 왜 이렇게 흐릿하지?",
						"english": "It was definitely... there... Why is my head so hazy?",
						"japanese": "確かに…あったはず…なんでこんなに頭がぼんやりしてるんだ？",
						"chinese": "明明…在那里…为什么我的头这么模糊？",
						"french": "C'était bien... là... Pourquoi ma tête est-elle si confuse ?",
						"spanish": "Definitivamente... estaba allí... ¿Por qué mi cabeza está tan confusa?",
						"vietnamese": "Rõ ràng là... nó đã ở đó... Sao đầu mình lại mơ hồ thế này?",
						"thai": "แน่นอนว่า... มันอยู่ที่นั่น... ทำไมหัวฉันถึงมึนงงแบบนี้นะ?",
						"hindi": "वह निश्चित रूप से... वहाँ था... मेरा सिर इतना धुंधला क्यों है?"
					}
				},
				{
					"content": {
						"korean": "고대 유물의 형태가 미묘하게 변했다. 모래가 새롭게 문양을 새기는 듯했다.",
						"english": "The form of the ancient artifact subtly changed. It was as if the sand was carving new patterns.",
						"japanese": "古代遺物の形が微妙に変化した。砂が新たな模様を刻むかのようだった。",
						"chinese": "古代文物的形态发生了微妙的变化。沙子仿佛在刻画新的图案。",
						"french": "La forme de l'artefact ancien changea subtilement. C'était comme si le sable gravait de nouveaux motifs.",
						"spanish": "La forma del artefacto antiguo cambió sutilmente. Parecía como si la arena estuviera grabando nuevos patrones.",
						"vietnamese": "Hình dạng của cổ vật thay đổi một cách tinh vi. Cứ như thể cát đang khắc những hoa văn mới.",
						"thai": "รูปทรงของวัตถุโบราณเปลี่ยนไปอย่างละเอียดอ่อน ราวกับว่าทรายกำลังแกะสลักลวดลายใหม่",
						"hindi": "प्राचीन कलाकृति का स्वरूप सूक्ष्मता से बदल गया। ऐसा लग रहा था मानो रेत नए प्रतिमान गढ़ रही हो।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "무의미해… 내가 뭘 찾고 있었더라?",
						"english": "It's meaningless... What was I looking for again?",
						"japanese": "無意味だ…何を捜してたんだっけ？",
						"chinese": "毫无意义…我到底在找什么来着？",
						"french": "C'est sans signification... Qu'est-ce que je cherchais déjà ?",
						"spanish": "No tiene sentido... ¿Qué estaba buscando?",
						"vietnamese": "Vô nghĩa quá... Mình đã tìm gì ấy nhỉ?",
						"thai": "มันไร้ความหมาย... ฉันกำลังหาอะไรอยู่นะ?",
						"hindi": "यह अर्थहीन है… मैं क्या ढूंढ रहा था?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "케메트! 정신 차려! 사라진 문명 기록을 찾고 있었잖아!",
						"english": "Kemet! Snap out of it! We were looking for records of a lost civilization!",
						"japanese": "ケメト！しっかりして！失われた文明の記録を探してたじゃないか！",
						"chinese": "凯米特！清醒一点！我们不是在寻找失落文明的记录吗？！",
						"french": "Kemet ! Reprends-toi ! Nous cherchions les archives de la civilisation perdue !",
						"spanish": "¡Kemet! ¡Reacciona! ¡Estábamos buscando los registros de la civilización perdida!",
						"vietnamese": "Kemet! Tỉnh táo lại đi! Chúng ta đang tìm kiếm ghi chép về nền văn minh đã mất mà!",
						"thai": "เคเมท! มีสติหน่อย! เรากำลังตามหาบันทึกอารยธรรมที่สาบสูญอยู่นะ!",
						"hindi": "केमेट! होश में आओ! हम एक खोई हुई सभ्यता के रिकॉर्ड ढूंढ रहे थे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "kemet",
					"content": {
						"korean": "아니야… 아무것도 남지 않아… 모든 게 지워져…",
						"english": "No... nothing remains... Everything is erased...",
						"japanese": "違う…何も残らない…全てが消される…",
						"chinese": "不对…什么都不会留下…一切都会被抹去…",
						"french": "Non... il ne reste rien... Tout est effacé...",
						"spanish": "No... no queda nada... Todo se borra...",
						"vietnamese": "Không phải... sẽ chẳng còn gì... Mọi thứ đều bị xóa sạch...",
						"thai": "ไม่ใช่... ไม่มีอะไรเหลือเลย... ทุกอย่างถูกลบหายไป...",
						"hindi": "नहीं… कुछ भी नहीं बचेगा… सब कुछ मिटा दिया जाएगा…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마치 우리 노력도… 허무하게 지워지는 것 같아.",
						"english": "It feels as if our efforts are also... being erased in vain.",
						"japanese": "まるで私たちの努力も…虚しく消されていくようだ。",
						"chinese": "仿佛我们的努力…也徒劳地被抹去。",
						"french": "C'est comme si nos efforts aussi... étaient effacés en vain.",
						"spanish": "Es como si nuestros esfuerzos también... se borraran en vano.",
						"vietnamese": "Cứ như thể mọi nỗ lực của chúng ta cũng... bị xóa sạch một cách vô vọng.",
						"thai": "ราวกับว่าความพยายามของเรา... ก็ถูกลบหายไปอย่างสูญเปล่า",
						"hindi": "ऐसा लगता है जैसे हमारे प्रयास भी... व्यर्थ में मिटा दिए जा रहे हैं।"
					},
					"speaker": "character_1"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "나침반이 특정 방향을 가리키다 갑자기 멈추고 제자리에서 맴돌기 시작했다.",
						"english": "The compass pointed in a certain direction, then suddenly stopped and began to spin in place.",
						"japanese": "コンパスが特定の方向を指した後、突然止まってその場でぐるぐると回り始めた。",
						"chinese": "指南针指向某个方向后突然停止，并在原地打转。",
						"french": "La boussole pointa une certaine direction, puis s'arrêta soudainement et commença à tourner sur elle-même.",
						"spanish": "La brújula apuntó en una dirección específica, luego se detuvo de repente y comenzó a girar en el mismo lugar.",
						"vietnamese": "Chiếc la bàn chỉ về một hướng nhất định, rồi đột nhiên dừng lại và bắt đầu xoay tròn tại chỗ.",
						"thai": "เข็มทิศชี้ไปทางทิศหนึ่ง แล้วก็หยุดกะทันหันและเริ่มหมุนวนอยู่กับที่",
						"hindi": "कंपास एक निश्चित दिशा में इंगित करता रहा, फिर अचानक रुक गया और अपनी जगह पर घूमने लगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "여기도… 뭔가 이상해. 모래가 마치… 벽처럼 움직여.",
						"english": "Something's strange here too... The sand is moving like... a wall.",
						"japanese": "ここも…何かおかしい。砂がまるで…壁のように動いてる。",
						"chinese": "这里也…有点不对劲。沙子仿佛…像墙一样在移动。",
						"french": "Ici aussi... quelque chose ne va pas. Le sable bouge comme... un mur.",
						"spanish": "Aquí también... algo es extraño. La arena se mueve como... una pared.",
						"vietnamese": "Ở đây cũng... có gì đó lạ. Cát cứ như thể... đang di chuyển như một bức tường.",
						"thai": "ที่นี่ก็... มีบางอย่างแปลกๆ ทรายกำลังเคลื่อนที่ราวกับ... กำแพง",
						"hindi": "यहाँ भी… कुछ अजीब है। रेत मानो… दीवार की तरह हिल रही है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 모래 그림자가 서서히 형태를 드러냈다. 사막의 수호자였다.",
						"english": "A colossal sand shadow slowly took form. It was the Guardian of the Desert.",
						"japanese": "巨大な砂の影が徐々に姿を現した。それは砂漠の守護者だった。",
						"chinese": "一个巨大的沙影缓缓显现出形态。那是沙漠的守护者。",
						"french": "Une ombre de sable colossale prit lentement forme. C'était le Gardien du Désert.",
						"spanish": "Una colosal sombra de arena tomó forma lentamente. Era el Guardián del Desierto.",
						"vietnamese": "Một cái bóng cát khổng lồ từ từ hiện rõ hình dạng. Đó là Người bảo vệ Sa mạc.",
						"thai": "เงาทรายขนาดมหึมาค่อยๆ ปรากฏรูปร่าง มันคือผู้พิทักษ์แห่งทะเลทราย",
						"hindi": "एक विशालकाय रेत की छाया धीरे-धीरे आकार लेने लगी। वह रेगिस्तान का संरक्षक था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 흔적은 사라진다. 그것이 사막의 법칙.",
						"english": "All traces vanish. That is the law of the desert.",
						"japanese": "全ての痕跡は消える。それが砂漠の法則だ。",
						"chinese": "所有痕迹都会消失。那是沙漠的法则。",
						"french": "Toutes les traces disparaissent. Telle est la loi du désert.",
						"spanish": "Todo rastro se desvanece. Esa es la ley del desierto.",
						"vietnamese": "Mọi dấu vết đều biến mất. Đó là quy luật của sa mạc.",
						"thai": "ร่องรอยทั้งหมดจะหายไป นั่นคือกฎของทะเลทราย",
						"hindi": "सभी निशान मिट जाते हैं। यही रेगिस्तान का नियम है。"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… 케메트의 기억을 지운 거냐!",
						"english": "Did you… erase Kemet's memories?!",
						"japanese": "お前が… ケメトの記憶を消したのか！",
						"chinese": "你…抹去了凯麦特的记忆吗？！",
						"french": "C'est toi qui as… effacé la mémoire de Kemet ?!",
						"spanish": "Tú… borraste los recuerdos de Kemet?!",
						"vietnamese": "Ngươi… đã xóa ký ức của Kemet sao?!",
						"thai": "เจ้า… ลบความทรงจำของเคเมตหรือไง!",
						"hindi": "क्या तुमने… खेमेट की यादें मिटा दीं?!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "사막에 대항하려는 어리석은 노력은… 언제나 사라질 뿐이다.",
						"english": "Foolish attempts to defy the desert… will always fade away.",
						"japanese": "砂漠に抗う愚かな試みは… いつも消え去るだけだ。",
						"chinese": "任何对抗沙漠的愚蠢尝试… 终将消散。",
						"french": "Les tentatives insensées de défier le désert… ne feront que s'évanouir.",
						"spanish": "Los intentos tontos de desafiar al desierto… siempre se desvanecerán.",
						"vietnamese": "Những nỗ lực ngu xuẩn chống lại sa mạc… sẽ luôn tan biến mà thôi.",
						"thai": "ความพยายามโง่ๆ ที่จะต่อต้านทะเลทราย… จะหายไปเสมอ",
						"hindi": "रेगिस्तान का विरोध करने के मूर्खतापूर्ण प्रयास… हमेशा मिट जाते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이곳에 발을 들인 모든 자는… 흔적도 없이 사라질 것이다.",
						"english": "All who set foot here… will vanish without a trace.",
						"japanese": "ここに足を踏み入れた者は皆… 痕跡もなく消え去るだろう。",
						"chinese": "所有踏足此地之人… 都将消失得无影无踪。",
						"french": "Tous ceux qui poseront le pied ici… disparaîtront sans laisser de trace.",
						"spanish": "Todos los que pongan un pie aquí… desaparecerán sin dejar rastro.",
						"vietnamese": "Tất cả những kẻ đặt chân đến đây… sẽ biến mất không dấu vết.",
						"thai": "ผู้ใดที่ย่างกรายเข้ามาที่นี่… จะหายไปอย่างไร้ร่องรอย",
						"hindi": "जो भी यहाँ कदम रखेगा… बिना किसी निशान के गायब हो जाएगा।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 다르다! 역사를 지우려는 너의 시도는 여기서 끝이야!",
						"english": "We are different! Your attempt to erase history ends here!",
						"japanese": "我々は違う！歴史を消そうとするお前の試みはここで終わりだ！",
						"chinese": "我们不同！你抹去历史的企图到此为止！",
						"french": "Nous sommes différents ! Ta tentative d'effacer l'histoire s'arrête ici !",
						"spanish": "¡Somos diferentes! ¡Tu intento de borrar la historia termina aquí!",
						"vietnamese": "Chúng ta khác biệt! Nỗ lực xóa bỏ lịch sử của ngươi kết thúc tại đây!",
						"thai": "พวกเราไม่เหมือนกัน! ความพยายามของเจ้าที่จะลบประวัติศาสตร์จบลงตรงนี้!",
						"hindi": "हम अलग हैं! इतिहास मिटाने की तुम्हारी कोशिश यहीं खत्म होती है!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "보잘것없는 몸부림. 너희의 존재도… 곧 잊힐 것이다.",
						"english": "A pathetic struggle. Your existence too… will soon be forgotten.",
						"japanese": "取るに足らないもがき。お前たちの存在も… やがて忘れ去られるだろう。",
						"chinese": "微不足道的挣扎。你们的存在… 也将很快被遗忘。",
						"french": "Une lutte pathétique. Votre existence aussi… sera bientôt oubliée.",
						"spanish": "Una lucha patética. Vuestra existencia también… pronto será olvidada.",
						"vietnamese": "Sự giãy giụa vô ích. Sự tồn tại của các ngươi… cũng sẽ sớm bị lãng quên.",
						"thai": "การดิ้นรนที่ไร้ค่า การดำรงอยู่ของพวกเจ้า… จะถูกลืมในไม่ช้า",
						"hindi": "एक दयनीय संघर्ष। तुम्हारा अस्तित्व भी… जल्द ही भुला दिया जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "기억… 잊지 않아. 반드시… 돌아올 거야!",
						"english": "Memories… I won't forget. I will… definitely return!",
						"japanese": "記憶… 忘れない。必ず… 戻ってくる！",
						"chinese": "记忆… 我不会忘记。我一定会… 回来！",
						"french": "Les souvenirs… je n'oublierai pas. Je reviendrai… à coup sûr !",
						"spanish": "Recuerdos… no los olvidaré. ¡Definitivamente… regresaré!",
						"vietnamese": "Ký ức… ta sẽ không quên. Nhất định… sẽ quay lại!",
						"thai": "ความทรงจำ… ฉันจะไม่ลืม ฉันจะ… กลับมาแน่นอน!",
						"hindi": "यादें… मैं नहीं भूलूँगा। मैं निश्चित रूप से… वापस आऊँगा!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "하찮은 저항… 잠시 지연될 뿐. 모든 것은… 반복될 것이다.",
						"english": "Petty resistance… merely a delay. All will… repeat itself.",
						"japanese": "くだらない抵抗… 少し遅れるだけだ。全ては… 繰り返されるだろう。",
						"chinese": "微不足道的抵抗… 只是暂时的拖延。一切都将… 重复。",
						"french": "Résistance futile… un simple délai. Tout se… répétera.",
						"spanish": "Resistencia insignificante… solo un retraso. Todo se… repetirá.",
						"vietnamese": "Sự kháng cự nhỏ bé… chỉ là trì hoãn nhất thời. Mọi thứ… sẽ lặp lại thôi.",
						"thai": "การต่อต้านไร้สาระ… แค่ชะลอเวลาเท่านั้น ทุกสิ่ง… จะซ้ำรอยเดิม",
						"hindi": "मामूली प्रतिरोध… केवल एक देरी। सब कुछ… दोहराया जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "반복된다고? 다음엔… 대체 뭐가 나타날까?",
						"english": "Repeat? What… will appear next?",
						"japanese": "繰り返されるだと？次は… 一体何が現れるんだ？",
						"chinese": "重复？下一次… 究竟会出现什么？",
						"french": "Répéter ? Qu'est-ce qui… apparaîtra ensuite ?",
						"spanish": "¿Repetir? ¿Qué… aparecerá después?",
						"vietnamese": "Lặp lại sao? Lần tới… rốt cuộc cái gì sẽ xuất hiện?",
						"thai": "ซ้ำรอยเดิมงั้นเหรอ? แล้วครั้งต่อไป… จะมีอะไรปรากฏขึ้นมากัน?",
						"hindi": "दोहराया जाएगा? अगली बार… आखिर क्या आएगा?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "사막의 흔적은 지워지지 않았다. 오히려… 새로운 공포가 피어나는 듯했다.",
						"english": "The desert's traces weren't erased. Rather… a new terror seemed to bloom.",
						"japanese": "砂漠の痕跡は消えなかった。むしろ… 新たな恐怖が芽生えたようだった。",
						"chinese": "沙漠的痕迹并未被抹去。相反… 仿佛有新的恐惧正在滋生。",
						"french": "Les traces du désert n'ont pas été effacées. Au contraire… une nouvelle terreur semblait éclore.",
						"spanish": "Las huellas del desierto no fueron borradas. Más bien… un nuevo terror parecía florecer.",
						"vietnamese": "Dấu vết của sa mạc không bị xóa bỏ. Thay vào đó… một nỗi kinh hoàng mới dường như đang nở rộ.",
						"thai": "ร่องรอยของทะเลทรายไม่ได้ถูกลบเลือน แต่กลับกัน… ความหวาดกลัวครั้งใหม่ดูเหมือนจะเบ่งบาน",
						"hindi": "रेगिस्तान के निशान मिटे नहीं थे। बल्कि… एक नया डर पनप रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"모래폭풍이 할퀴고 간 고대 유적.",
			"그곳에서 시간조차 삼키는 사막의 진실을 마주한다.",
			"모든 것은 반복되고, 흔적은 사라진다.",
			"누군가의 노력은 또다시 허무하게 지워질 운명이었다."
		],
		"english": [
			"Ancient ruins scarred by sandstorms.",
			"There, one faces the desert's truth, swallowing even time.",
			"Everything repeats, and traces vanish.",
			"Someone's efforts were destined to be erased in vain once more."
		],
		"japanese": [
			"砂嵐が荒廃させた古代遺跡。",
			"そこで、時間さえも飲み込む砂漠の真実と向き合う。",
			"全ては繰り返され、痕跡は消え去る。",
			"誰かの努力は、再び虚しく消される運命だった。"
		],
		"chinese": [
			"饱受沙尘暴摧残的古代遗迹。",
			"在那里，你将面对吞噬时间的沙漠真相。",
			"一切都在重复，痕迹终将消失。",
			"某人的努力注定再次徒劳地被抹去。"
		],
		"french": [
			"Anciennes ruines balafrées par les tempêtes de sable.",
			"Là, on fait face à la vérité du désert, qui engloutit même le temps.",
			"Tout se répète, et les traces disparaissent.",
			"Les efforts de quelqu'un étaient voués à être effacés en vain une fois de plus."
		],
		"spanish": [
			"Antiguas ruinas marcadas por tormentas de arena.",
			"Allí, uno se enfrenta a la verdad del desierto, que se traga incluso el tiempo.",
			"Todo se repite y las huellas se desvanecen.",
			"Los esfuerzos de alguien estaban destinados a ser borrados en vano una vez más."
		],
		"vietnamese": [
			"Di tích cổ xưa bị bão cát tàn phá.",
			"Ở đó, ta đối mặt với sự thật của sa mạc, nuốt chửng cả thời gian.",
			"Mọi thứ lặp lại, và dấu vết biến mất.",
			"Nỗ lực của ai đó lại một lần nữa định mệnh bị xóa bỏ vô ích."
		],
		"thai": [
			"ซากปรักหักพังโบราณที่ถูกพายุทรายพัดถล่ม.",
			"ณ ที่แห่งนั้น เผชิญหน้ากับความจริงของทะเลทรายที่กลืนกินแม้กระทั่งเวลา.",
			"ทุกสิ่งล้วนซ้ำรอย และร่องรอยเลือนหายไป.",
			"ความพยายามของใครบางคนถูกลิขิตให้เลือนหายไปอย่างเปล่าประโยชน์อีกครั้ง."
		],
		"hindi": [
			"रेतीले तूफानों से तबाह प्राचीन खंडहर।",
			"वहाँ, कोई रेगिस्तान के सच का सामना करता है, जो समय को भी निगल जाता है।",
			"सब कुछ दोहराता है, और निशान मिट जाते हैं।",
			"किसी के प्रयास एक बार फिर व्यर्थ में मिटा दिए जाने थे।"
		]
	}
} as const;
