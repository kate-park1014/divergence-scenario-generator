export const scenario_snowy_hagall_23_05 = {
	"scenario_id": "snowy_hagall_23_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_FrostCipher_Hagall_V1"
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
						"korean": "전당은 고요했다. 기억의 파편들이 얼어붙은 채 부유했다.",
						"english": "The hall was silent. Fragments of memory floated, frozen.",
						"japanese": "殿堂は静かだった。記憶の破片が凍りつき、漂っていた。",
						"chinese": "大殿一片寂静。记忆的碎片冻结着，漂浮不定。",
						"french": "Le hall était silencieux. Des fragments de mémoire flottaient, figés.",
						"spanish": "La sala estaba en silencio. Fragmentos de memoria flotaban, congelados.",
						"vietnamese": "Đại sảnh tĩnh lặng. Những mảnh ký ức đông cứng trôi nổi.",
						"thai": "โถงนั้นเงียบสงบ เศษเสี้ยวแห่งความทรงจำลอยนิ่งราวกับถูกแช่แข็ง",
						"hindi": "हॉल शांत था। यादों के टुकड़े जमे हुए तैर रहे थे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…드디어 도착했나.",
						"english": "...Have we finally arrived.",
						"japanese": "…ついに、着いたのか。",
						"chinese": "……终于到了吗。",
						"french": "...Nous sommes enfin arrivés.",
						"spanish": "...Finalmente hemos llegado.",
						"vietnamese": "…Cuối cùng cũng đã đến.",
						"thai": "...ในที่สุดก็มาถึงแล้วสินะ",
						"hindi": "...आखिरकार आ ही गए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "그래. 이곳이 모든 것의 시작이자 끝이다.",
						"english": "Yes. This is where everything begins and ends.",
						"japanese": "ええ。ここがすべての始まりであり、終わりだ。",
						"chinese": "是的。这里是所有一切的开始，也是结束。",
						"french": "Oui. C'est ici que tout commence et se termine.",
						"spanish": "Sí. Este es el principio y el fin de todo.",
						"vietnamese": "Đúng vậy. Nơi đây là khởi đầu và cũng là kết thúc của vạn vật.",
						"thai": "ใช่แล้ว ที่นี่คือจุดเริ่มต้นและจุดจบของทุกสิ่ง",
						"hindi": "हाँ। यही सब कुछ का आरंभ और अंत है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "하지만 조심해라. 망각은 달콤한 유혹이다.",
						"english": "But be careful. Oblivion is a sweet temptation.",
						"japanese": "だが、気をつけろ。忘却は甘い誘惑だ。",
						"chinese": "但是要小心。遗忘是一种甜蜜的诱惑。",
						"french": "Mais sois prudent. L'oubli est une douce tentation.",
						"spanish": "Pero ten cuidado. El olvido es una dulce tentación.",
						"vietnamese": "Nhưng hãy cẩn thận. Lãng quên là một cám dỗ ngọt ngào.",
						"thai": "แต่จงระวัง การหลงลืมคือสิ่งยั่วยวนอันหอมหวาน",
						"hindi": "परंतु सावधान रहना। विस्मृति एक मीठा प्रलोभन है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 뭘 아는 거지?",
						"english": "What do you know?",
						"japanese": "お前は何を知っている？",
						"chinese": "你都知道些什么？",
						"french": "Qu'est-ce que tu sais ?",
						"spanish": "¿Qué sabes tú?",
						"vietnamese": "Ngươi biết gì?",
						"thai": "เจ้ารู้อะไรบ้าง?",
						"hindi": "तुम क्या जानते हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "나는 그저, 주어진 임무를 따를 뿐.",
						"english": "I merely follow my assigned task.",
						"japanese": "私はただ、与えられた任務に従うだけだ。",
						"chinese": "我只是遵循被赋予的任务。",
						"french": "Je ne fais que suivre ma mission.",
						"spanish": "Yo solo sigo mi misión.",
						"vietnamese": "Ta chỉ tuân theo nhiệm vụ được giao.",
						"thai": "ข้าเพียงแค่ทำตามภารกิจที่ได้รับมอบหมาย",
						"hindi": "मैं तो बस अपने दिए गए कार्य का पालन करता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳의 기억은 계속해서 반복된다. 너희도 예외는 아닐 것이다.",
						"english": "Memories here repeat endlessly. You will be no exception.",
						"japanese": "ここの記憶は繰り返される。お前たちも例外ではない。",
						"chinese": "这里的记忆会不断重复。你们也不会是例外。",
						"french": "Les souvenirs ici se répètent sans cesse. Vous ne ferez pas exception.",
						"spanish": "Los recuerdos aquí se repiten sin cesar. Vosotros no seréis la excepción.",
						"vietnamese": "Những ký ức ở đây lặp đi lặp lại không ngừng. Các ngươi cũng không phải là ngoại lệ.",
						"thai": "ความทรงจำ ณ ที่นี้จะวนเวียนซ้ำไปซ้ำมา พวกเจ้าก็คงไม่ต่างกัน",
						"hindi": "यहाँ की यादें बार-बार दोहराई जाती हैं। तुम भी कोई अपवाद नहीं होगे।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "환상처럼 고통받는 이들의 잔상이 스쳐 지나갔다.",
						"english": "Lingering images of those who suffered flashed by like illusions.",
						"japanese": "苦しむ者たちの残像が幻のように通り過ぎた。",
						"chinese": "受苦之人的残像如幻影般闪过。",
						"french": "Des images persistantes de ceux qui ont souffert ont défilé comme des illusions.",
						"spanish": "Imágenes persistentes de quienes sufrieron pasaron como ilusiones.",
						"vietnamese": "Hình ảnh tàn dư của những người đã chịu đựng lướt qua như ảo ảnh.",
						"thai": "ภาพหลอนของผู้ที่ทนทุกข์ทรมานได้แวบผ่านไป",
						"hindi": "पीड़ितों की शेष छवियाँ भ्रम की तरह चमक गईं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건… 뭐지? 왠지 낯설지 않아.",
						"english": "What is this...? It feels strangely familiar.",
						"japanese": "これは…何だ？なんだか懐かしい気がする。",
						"chinese": "这是……什么？总觉得不陌生。",
						"french": "Qu'est-ce que c'est que ça...? Étrangement familier.",
						"spanish": "¿Qué es esto...? No me resulta desconocido.",
						"vietnamese": "Đây là... gì vậy? Sao cảm thấy quen thuộc.",
						"thai": "นี่มัน...อะไรกัน? ทำไมรู้สึกคุ้นเคยจัง",
						"hindi": "यह क्या है...? कुछ अजीब सा जाना-पहचाना लग रहा है।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "익숙할 수밖에. 너희 역시 루프의 일부였으니.",
						"english": "It has to be familiar. You too were part of the loop.",
						"japanese": "当然だ。お前たちもループの一部だったのだから。",
						"chinese": "当然会熟悉。你们也曾是循环的一部分。",
						"french": "C'est normal que ce soit familier. Vous faisiez aussi partie de la boucle.",
						"spanish": "Es inevitable que sea familiar. Vosotros también fuisteis parte del bucle.",
						"vietnamese": "Đương nhiên là quen thuộc. Các ngươi cũng từng là một phần của vòng lặp.",
						"thai": "ก็ต้องคุ้นเคยอยู่แล้ว พวกเจ้าเองก็เป็นส่วนหนึ่งของวงวนนี้",
						"hindi": "परि परिचित होना स्वाभाविक है। तुम भी लूप का हिस्सा थे।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอย่างไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "모든 질문에는 대가가 따르는 법. 진실은 때로… 감당하기 힘들다.",
						"english": "Every question comes with a price. The truth is sometimes... hard to bear.",
						"japanese": "すべての質問には代償が伴うものだ。真実は時に…耐え難い。",
						"chinese": "每个问题都有代价。真相有时……难以承受。",
						"french": "Chaque question a un prix. La vérité est parfois... difficile à supporter.",
						"spanish": "Cada pregunta tiene un precio. La verdad a veces... es difícil de soportar.",
						"vietnamese": "Mỗi câu hỏi đều phải trả giá. Sự thật đôi khi... khó có thể chịu đựng được.",
						"thai": "ทุกคำถามย่อมมีราคาที่ต้องจ่าย ความจริงนั้นบางครั้ง...ยากที่จะรับไหว",
						"hindi": "हर सवाल की कीमत होती है। सच कभी-कभी... सहना मुश्किल होता है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희의 나침반은 더 이상 길을 가리키지 못할 것이다.",
						"english": "Your compass will no longer guide your way.",
						"japanese": "お前たちの羅針盤はもう道を指し示さないだろう。",
						"chinese": "你们的指南针将不再指引方向。",
						"french": "Votre boussole ne vous guidera plus.",
						"spanish": "Vuestra brújula ya no os mostrará el camino.",
						"vietnamese": "La bàn của các ngươi sẽ không còn chỉ đường nữa.",
						"thai": "เข็มทิศของพวกเจ้าจะนำทางไม่ได้อีกต่อไปแล้ว",
						"hindi": "तुम्हारा कंपास अब और रास्ता नहीं दिखा पाएगा।"
					},
					"speaker": "anuk"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 나침반이 멋대로 돌아!",
						"english": "What? The compass is spinning wildly!",
						"japanese": "なんだって？羅針盤が勝手に回ってる！",
						"chinese": "什么？指南针乱转！",
						"french": "Quoi ? La boussole tourne follement !",
						"spanish": "¿Qué? ¡La brújula gira sin control!",
						"vietnamese": "Gì cơ? La bàn tự quay loạn xạ!",
						"thai": "อะไรนะ? เข็มทิศหมุนมั่วไปหมด!",
						"hindi": "क्या? कंपास बेकाबू होकर घूम रहा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주변의 공간은 비틀리고 있었다. 현실과 기억의 경계가 흐려졌다.",
						"english": "The surrounding space was distorting. The boundary between reality and memory blurred.",
						"japanese": "周囲の空間は歪んでいた。現実と記憶の境界が曖昧になった。",
						"chinese": "周围的空间正在扭曲。现实与记忆的界限变得模糊。",
						"french": "L'espace environnant se tordait. La frontière entre réalité et mémoire s'est estompée.",
						"spanish": "El espacio circundante se estaba distorsionando. La frontera entre la realidad y la memoria se difuminaba.",
						"vietnamese": "Không gian xung quanh đang méo mó. Ranh giới giữa thực tại và ký ức mờ đi.",
						"thai": "พื้นที่โดยรอบบิดเบี้ยว ขอบเขตระหว่างความจริงและความทรงจำพร่าเลือนไป",
						"hindi": "आस-पास की जगह विकृत हो रही थी। हकीकत और याददाश्त की सीमा धुंधली हो गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 공간 자체가 기억의 조작이다. 그의 힘은 상상을 초월해.",
						"english": "This space itself is a manipulation of memory. His power transcends imagination.",
						"japanese": "この空間自体が記憶の操作だ。彼の力は想像を絶する。",
						"chinese": "这个空间本身就是记忆的操纵。他的力量超越了想象。",
						"french": "Cet espace est une manipulation de la mémoire. Son pouvoir dépasse l'imagination.",
						"spanish": "Este espacio en sí mismo es una manipulación de la memoria. Su poder trasciende la imaginación.",
						"vietnamese": "Bản thân không gian này là sự thao túng ký ức. Sức mạnh của hắn vượt xa trí tưởng tượng.",
						"thai": "พื้นที่นี้เองคือการบิดเบือนความทรงจำ พลังของเขานั้นเกินกว่าจินตนาการ",
						"hindi": "यह जगह खुद याददाश्त का हेरफेर है। उसकी शक्ति कल्पना से परे है।"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 힘? 누구 말하는 거야?",
						"english": "His power? Who are you talking about?",
						"japanese": "彼の力？誰のことだ？",
						"chinese": "他的力量？你在说谁？",
						"french": "Son pouvoir ? De qui parles-tu ?",
						"spanish": "¿Su poder? ¿De quién hablas?",
						"vietnamese": "Sức mạnh của hắn? Ngươi đang nói về ai?",
						"thai": "พลังของเขา? เธอหมายถึงใคร?",
						"hindi": "उसकी शक्ति? तुम किसकी बात कर रहे हो?"
					},
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "기억의 조각사… 하갈. 그리고 나는… 그의 눈이다.",
						"english": "The Shaper of Memories... Hagar. And I... am his eyes.",
						"japanese": "記憶の彫刻師…ハガル。そして私は…彼の目だ。",
						"chinese": "记忆的塑造者……哈加尔。而我……是他的眼睛。",
						"french": "Le Sculpteur de Mémoires... Hagar. Et moi... je suis ses yeux.",
						"spanish": "El Escultor de Memorias... Hagar. Y yo... soy sus ojos.",
						"vietnamese": "Kẻ điêu khắc ký ức… Hagar. Và ta… là đôi mắt của hắn.",
						"thai": "ผู้ปั้นแต่งความทรงจำ... ฮากัล และข้า... คือดวงตาของเขา",
						"hindi": "यादों का गढ़ने वाला... हगार। और मैं... उसकी आँखें हूँ।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신… 처음부터 우리를 감시했던 거야?",
						"english": "You... you were watching us from the start?",
						"japanese": "あなた…最初から私たちを監視していたの？",
						"chinese": "你……你从一开始就在监视我们？",
						"french": "Vous... vous nous surveilliez depuis le début ?",
						"spanish": "¿Tú... nos estabas vigilando desde el principio?",
						"vietnamese": "Ngươi… ngươi đã theo dõi chúng ta ngay từ đầu sao?",
						"thai": "ท่าน... เฝ้าดูพวกเรามาตั้งแต่แรกหรือ?",
						"hindi": "तुम... तुम शुरुआत से ही हमें देख रहे थे?"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 이상 물러설 곳은 없다. 너희의 운명은 이미 정해졌다.",
						"english": "There's no turning back. Your fate is already sealed.",
						"japanese": "もう後戻りはできない。お前たちの運命はすでに決まっている。",
						"chinese": "没有退路了。你们的命运早已注定。",
						"french": "Il n'y a plus de retour en arrière. Votre destin est déjà scellé.",
						"spanish": "No hay vuelta atrás. Vuestro destino ya está sellado.",
						"vietnamese": "Không còn đường lui nữa. Số phận của các ngươi đã định đoạt.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว ชะตากรรมของพวกเจ้าถูกกำหนดไว้แล้ว",
						"hindi": "अब और पीछे हटने की जगह नहीं है। तुम्हारा भाग्य पहले ही तय हो चुका है।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아눅! 당신의 정체는 대체 뭐야?",
						"english": "Anuk! What in the world are you?",
						"japanese": "アヌク！お前の正体は一体何なんだ？",
						"chinese": "阿努克！你到底是谁？",
						"french": "Anuk ! Mais qui êtes-vous ?",
						"spanish": "¡Anuk! ¿Qué eres tú, al fin y al cabo?",
						"vietnamese": "Anuk! Rốt cuộc ngươi là ai?",
						"thai": "อานุก! ตัวตนที่แท้จริงของเจ้าคืออะไรกันแน่?",
						"hindi": "अनूक! आखिर तुम्हारी पहचान क्या है?"
					}
				},
				{
					"content": {
						"korean": "나는 하갈의 맹세를 지키는 자. 너희를 이곳으로 이끌라는 임무를 받았을 뿐.",
						"english": "I am the one who upholds Hagar's vow. I was merely tasked with leading you here.",
						"japanese": "私はハガルの誓いを守る者。お前たちをここへ導く使命を受けただけだ。",
						"chinese": "我是哈加尔誓言的守护者。我只是受命将你们带到这里。",
						"french": "Je suis celui qui respecte le serment de Hagar. J'ai seulement été chargé de vous guider ici.",
						"spanish": "Soy quien mantiene el juramento de Hagar. Solo se me encomendó la tarea de guiaros hasta aquí.",
						"vietnamese": "Ta là kẻ giữ lời thề của Hagar. Ta chỉ được giao nhiệm vụ dẫn các ngươi đến đây.",
						"thai": "ข้าคือผู้รักษาคำสาบานของฮากัล ข้าเพียงได้รับมอบหมายให้พพวกเจ้ามาที่นี่",
						"hindi": "मैं हगार की कसम निभाने वाला हूँ। मुझे बस तुम्हें यहाँ लाने का काम सौंपा गया था।"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "맹세? 그게 뭔데!",
						"english": "An oath? What's that?!",
						"japanese": "誓い？それ、何だ！",
						"chinese": "誓言？那是什么！",
						"french": "Un serment ? Qu'est-ce que c'est que ça !",
						"spanish": "¿Un juramento? ¡¿Qué es eso?!",
						"vietnamese": "Lời thề? Cái đó là gì vậy!",
						"thai": "คำสาบาน? นั่นมันอะไร!",
						"hindi": "शपथ? वह क्या है!"
					},
					"speaker": "character_3"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "이 비극은 반복되어야만 한다. 그것이 그의 서사를 완성하는 길.",
						"english": "This tragedy must repeat. It is the path to complete his narrative.",
						"japanese": "この悲劇は繰り返されるべきだ。それが彼の物語を完成させる道筋。",
						"chinese": "这场悲剧必须重演。那是完成他叙事的方式。",
						"french": "Cette tragédie doit se répéter. C'est le moyen d'achever son récit.",
						"spanish": "Esta tragedia debe repetirse. Es el camino para completar su narrativa.",
						"vietnamese": "Bi kịch này phải lặp lại. Đó là con đường để hoàn thành câu chuyện của anh ta.",
						"thai": "โศกนาฏกรรมนี้จะต้องดำเนินซ้ำ นั่นคือหนทางที่จะทำให้เรื่องราวของเขาสมบูรณ์",
						"hindi": "यह त्रासदी अवश्य दोहराई जानी चाहिए। यही उसकी गाथा को पूरा करने का मार्ग है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가… 이용당한 거야?",
						"english": "Were we... used?",
						"japanese": "私たちは…利用されたのか？",
						"chinese": "我们…被利用了吗？",
						"french": "Nous… avons été utilisés ?",
						"spanish": "¿Fuimos… utilizados?",
						"vietnamese": "Chúng ta… bị lợi dụng sao?",
						"thai": "พวกเรา… ถูกใช้เป็นเครื่องมือหรือ?",
						"hindi": "क्या हमारा… उपयोग किया गया?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "기억은… 언제나 가장 강력한 무기였다.",
						"english": "Memory... was always the most powerful weapon.",
						"japanese": "記憶は…常に最も強力な武器だった。",
						"chinese": "记忆…永远是最强大的武器。",
						"french": "La mémoire… a toujours été l'arme la plus puissante.",
						"spanish": "La memoria… siempre fue el arma más poderosa.",
						"vietnamese": "Ký ức… luôn là vũ khí mạnh nhất.",
						"thai": "ความทรงจำ… เป็นอาวุธที่ทรงพลังที่สุดเสมอ",
						"hindi": "स्मृति… हमेशा सबसे शक्तिशाली हथियार रही है।"
					}
				},
				{
					"duration_ms": 400,
					"direction": "up",
					"speaker": "anuk",
					"action": "exit",
					"type": "direction"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "전당 중앙에 거대한 서릿발 결정이 회오리쳤다. 그 중심에서 기억의 조각사, 하갈이 모습을 드러냈다. 희미한 형광 초록빛 안개가 짙어지며 과거의 기억 파편들을 어지럽게 투사했다.",
						"english": "A colossal frost crystal whirled in the center of the hall. From its core, Hagal, the Sculptor of Memories, emerged. A faint, fluorescent green mist thickened, projecting chaotic fragments of past memories.",
						"japanese": "広間の中心で巨大な霜の結晶が渦巻いた。その中心から記憶の彫刻家、ハガルが姿を現した。かすかな蛍光緑色の霧が濃くなり、過去の記憶の断片を乱雑に映し出した。",
						"chinese": "大厅中央，一块巨大的霜冻水晶旋转着。记忆雕刻师哈格尔从其核心显现。微弱的荧光绿雾气弥漫开来，混乱地投射出过去的记忆碎片。",
						"french": "Un cristal de givre colossal tourbillonnait au centre de la salle. De son cœur, Hagal, le Sculpteur de Mémoires, émergea. Une légère brume vert fluorescent s'épaissit, projetant des fragments chaotiques de souvenirs passés.",
						"spanish": "Un colosal cristal de escarcha giraba en el centro de la sala. De su núcleo, Hagal, el Escultor de Recuerdos, emergió. Una tenue niebla verde fluorescente se hizo más densa, proyectando fragmentos caóticos de recuerdos pasados.",
						"vietnamese": "Một tinh thể băng khổng lồ xoáy tròn giữa đại sảnh. Từ trung tâm của nó, Hagal, Thợ điêu khắc ký ức, xuất hiện. Một làn sương mù xanh lục huỳnh quang mờ nhạt dày đặc hơn, chiếu ra những mảnh ký ức hỗn loạn của quá khứ.",
						"thai": "ผลึกน้ำแข็งขนาดมหึมาหมุนวนอยู่ใจกลางโถง จากแกนกลางของมัน ฮากาล ผู้แกะสลักความทรงจำ ได้ปรากฏตัวขึ้น หมอกสีเขียวเรืองแสงจางๆ ข้นขึ้น ฉายภาพเศษเสี้ยวความทรงจำในอดีตอย่างอลหม่าน",
						"hindi": "हॉल के केंद्र में एक विशाल बर्फीला क्रिस्टल घूम रहा था। उसके केंद्र से, स्मृतियों का मूर्तिकार, हागल, प्रकट हुआ। एक धुंधली, फ्लोरोसेंट हरी धुंध घनी हो गई, जो अतीत की यादों के अराजक टुकड़ों को अव्यवस्थित रूप से प्रक्षेपित कर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "흥미로운 기억이었다, 여행자. 너의 절망은 꽤나 달콤했지.",
						"english": "An interesting memory, Traveler. Your despair was quite sweet.",
						"japanese": "興味深い記憶だった、旅人よ。お前の絶望はなかなか甘美だったな。",
						"chinese": "有趣的记忆，旅行者。你的绝望相当甜美。",
						"french": "Un souvenir intéressant, Voyageur. Ton désespoir était plutôt doux.",
						"spanish": "Un recuerdo interesante, Viajero. Tu desesperación fue bastante dulce.",
						"vietnamese": "Một ký ức thú vị, Lữ khách. Nỗi tuyệt vọng của ngươi khá ngọt ngào.",
						"thai": "ความทรงจำที่น่าสนใจทีเดียว นักเดินทาง ความสิ้นหวังของเจ้านั้นช่างหอมหวานนัก",
						"hindi": "एक दिलचस्प स्मृति थी, यात्री। तुम्हारी निराशा काफी मीठी थी।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "하갈! 당신이 이 모든 걸 꾸민 거야?",
						"english": "Hagal! You orchestrated all of this?",
						"japanese": "ハガル！お前がこの全てを仕組んだのか？",
						"chinese": "哈格尔！这一切都是你策划的吗？",
						"french": "Hagal ! C'est toi qui as tout orchestré ?",
						"spanish": "¡Hagal! ¿Tú orquestaste todo esto?",
						"vietnamese": "Hagal! Ngươi đã sắp đặt tất cả chuyện này sao?",
						"thai": "ฮากาล! นี่ทั้งหมดเป็นฝีมือของเจ้าใช่ไหม?",
						"hindi": "हागल! क्या तुमने यह सब रचा है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나의 서사는 파편화되어 눈 속에 묻혔으니… 네 삶의 마지막 장으로 그 빈칸을 채워야겠다.",
						"english": "My narrative lies fragmented, buried in snow... I shall fill those empty spaces with the final chapter of your life.",
						"japanese": "私の物語は断片化され、雪の中に埋もれた…お前の人生の最後の章で、その空白を埋めよう。",
						"chinese": "我的叙事已支离破碎，埋葬于雪中… 我将用你生命的最后一章来填补那些空白。",
						"french": "Mon récit est fragmenté, enseveli sous la neige… Je comblerai ces lacunes avec le dernier chapitre de ta vie.",
						"spanish": "Mi narrativa yace fragmentada, sepultada en la nieve… Llenaré esos espacios vacíos con el capítulo final de tu vida.",
						"vietnamese": "Câu chuyện của ta đã bị phân mảnh, chôn vùi trong tuyết… Ta sẽ lấp đầy những khoảng trống đó bằng chương cuối cùng của cuộc đời ngươi.",
						"thai": "เรื่องราวของข้าแตกสลาย ฝังอยู่ใต้หิมะ… ข้าจะเติมเต็มช่องว่างเหล่านั้นด้วยบทสุดท้ายในชีวิตของเจ้า",
						"hindi": "मेरी गाथा खंडित होकर बर्फ में दफन हो गई है… मैं तुम्हारी जिंदगी के आखिरी अध्याय से उन खाली स्थानों को भरूंगा।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그 말과 함께, 얼음 수정으로 이루어진 손이 뻗어오며 탐험대의 머리를 향했다.",
						"english": "With those words, a hand made of ice crystals reached out towards the expedition leader's head.",
						"japanese": "その言葉と共に、氷の結晶でできた手が伸び、探検隊長の頭へと向かった。",
						"chinese": "话音刚落，一只由冰晶组成的手伸向了探险队长的头部。",
						"french": "Avec ces mots, une main faite de cristaux de glace s'étira vers la tête du chef de l'expédition.",
						"spanish": "Con esas palabras, una mano hecha de cristales de hielo se extendió hacia la cabeza del líder de la expedición.",
						"vietnamese": "Cùng với những lời đó, một bàn tay làm bằng tinh thể băng vươn ra, hướng về phía đầu của trưởng đoàn thám hiểm.",
						"thai": "พร้อมกับคำพูดเหล่านั้น มือที่ทำจากผลึกน้ำแข็งก็ยื่นออกไปทางศีรษะของหัวหน้าคณะสำรวจ",
						"hindi": "उन शब्दों के साथ, बर्फ के क्रिस्टल से बना एक हाथ अभियान दल के नेता के सिर की ओर बढ़ा।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						4
					]
				},
				{
					"content": {
						"korean": "맹세는 지켜져야 한다. 이 루프는 영원할 것이다.",
						"english": "The oath must be upheld. This loop will be eternal.",
						"japanese": "誓いは守られねばならない。このループは永遠に続く。",
						"chinese": "誓言必须遵守。这个循环将是永恒的。",
						"french": "Le serment doit être respecté. Cette boucle sera éternelle.",
						"spanish": "El juramento debe cumplirse. Este bucle será eterno.",
						"vietnamese": "Lời thề phải được giữ. Vòng lặp này sẽ vĩnh cửu.",
						"thai": "คำสาบานจะต้องได้รับการรักษา วงวนนี้จะคงอยู่ตลอดไป",
						"hindi": "शपथ का पालन होना चाहिए। यह पाश शाश्वत रहेगा।"
					},
					"speaker": "anuk",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아눅, 당신도 한 패였어?!",
						"english": "Anouk, you were one of them?!",
						"japanese": "アヌーク、あなたも仲間だったの？！",
						"chinese": "阿努克，你也是一伙的？！",
						"french": "Anouk, tu étais des leurs ?!",
						"spanish": "¡Anouk, tú también eras uno de ellos?!",
						"vietnamese": "Anouk, cô cũng là một trong số chúng sao?!",
						"thai": "อนุก เธอเป็นพวกเดียวกับพวกเขาด้วยเหรอ?!",
						"hindi": "अनुक, तुम भी उनमें से एक थी?!"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "진실은… 결국… 기억 속에서만 살아남는 법.",
						"english": "Truth… ultimately… only survives in memory.",
						"japanese": "真実は…結局…記憶の中にしか残らない。",
						"chinese": "真相…终究…只存在于记忆之中。",
						"french": "La vérité… finalement… ne survit que dans la mémoire.",
						"spanish": "La verdad… finalmente… solo sobrevive en la memoria.",
						"vietnamese": "Sự thật… rốt cuộc… chỉ tồn tại trong ký ức.",
						"thai": "ความจริง… ในที่สุด… ก็มีชีวิตรอดได้แค่ในความทรงจำเท่านั้น",
						"hindi": "सच… अंततः… केवल यादों में ही जीवित रहता है।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리의 기억을 빼앗아갈 순 없어! 절대로!",
						"english": "You can't take away our memories! Never!",
						"japanese": "私たちの記憶を奪うことはできない！絶対に！",
						"chinese": "你不能夺走我们的记忆！绝不！",
						"french": "Vous ne pouvez pas nous priver de nos souvenirs ! Jamais !",
						"spanish": "¡No puedes arrebatarnos nuestros recuerdos! ¡Nunca!",
						"vietnamese": "Ngươi không thể cướp đi ký ức của chúng ta! Tuyệt đối không!",
						"thai": "นายจะเอาความทรงจำของเราไปไม่ได้! ไม่มีทาง!",
						"hindi": "तुम हमारी यादें नहीं छीन सकते! कभी नहीं!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "크윽… 이 루프는… 멈추지 않아… 또 다시… 반복될 뿐…",
						"english": "Ugh… This loop… it never stops… just repeats… again and again…",
						"japanese": "くっ…このループは…止まらない…また…繰り返されるだけだ…",
						"chinese": "呃…这个循环…永不停止…只是…再次重复…",
						"french": "Pff… Cette boucle… ne s'arrête jamais… elle ne fait que se répéter… encore et encore…",
						"spanish": "Uf… Este bucle… no se detiene… solo se repite… una y otra vez…",
						"vietnamese": "Khụ… Vòng lặp này… không ngừng lại… chỉ lặp đi lặp lại…",
						"thai": "อึก… วงวนนี้… มันไม่หยุด… แค่จะวนซ้ำ… อีกครั้ง…",
						"hindi": "उफ़… यह लूप… यह कभी नहीं रुकता… बस दोहराता रहता है… बार-बार…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났나… 우리가… 이긴 거야?",
						"english": "Is it over… Did we… win?",
						"japanese": "終わったのか…私たちが…勝ったのか？",
						"chinese": "结束了吗…我们…赢了吗？",
						"french": "Est-ce fini… Avons-nous… gagné ?",
						"spanish": "¿Ha terminado… Hemos… ganado?",
						"vietnamese": "Kết thúc rồi sao… Chúng ta… thắng rồi sao?",
						"thai": "จบแล้วเหรอ… พวกเรา… ชนะแล้วเหรอ?",
						"hindi": "क्या यह खत्म हो गया… क्या हम… जीत गए?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "그는 패배했지만… 시스템은 여전히 작동한다.",
						"english": "He was defeated… but the system still operates.",
						"japanese": "彼は敗北したが…システムは依然として作動している。",
						"chinese": "他失败了…但系统仍在运作。",
						"french": "Il a été vaincu… mais le système fonctionne toujours.",
						"spanish": "Fue derrotado… pero el sistema sigue funcionando.",
						"vietnamese": "Hắn ta đã bị đánh bại… nhưng hệ thống vẫn đang hoạt động.",
						"thai": "เขาพ่ายแพ้แล้ว… แต่ระบบก็ยังคงทำงานอยู่",
						"hindi": "वह हार गया… लेकिन सिस्टम अभी भी काम कर रहा है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그만해! 당신도 함께 사라져야 해!",
						"english": "Stop it! You must disappear with them!",
						"japanese": "やめて！あなたも一緒に消えるべきよ！",
						"chinese": "住手！你也必须和他们一起消失！",
						"french": "Arrête ! Tu dois disparaître avec eux !",
						"spanish": "¡Detente! ¡Tú también debes desaparecer con ellos!",
						"vietnamese": "Dừng lại! Ngươi cũng phải biến mất cùng bọn chúng!",
						"thai": "หยุดนะ! นายก็ต้องหายไปพร้อมกับพวกเขา!",
						"hindi": "बस करो! तुम्हें भी उनके साथ गायब हो जाना चाहिए!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 그저… 기억의 파수꾼. 이 비극은 너희와 함께… 또 다른 형태로 이어질 것이다.",
						"english": "I am merely… the guardian of memories. This tragedy will continue with you… in another form.",
						"japanese": "私はただの…記憶の番人。この悲劇は君たちと共に…また別の形で続いていくだろう。",
						"chinese": "我只是…记忆的守护者。这场悲剧将与你们一同…以另一种形式延续下去。",
						"french": "Je ne suis que… le gardien des souvenirs. Cette tragédie continuera avec vous… sous une autre forme.",
						"spanish": "Soy meramente… el guardián de los recuerdos. Esta tragedia continuará con ustedes… de otra forma.",
						"vietnamese": "Ta chỉ là… kẻ gác ký ức. Bi kịch này sẽ tiếp diễn cùng các ngươi… dưới một hình thức khác.",
						"thai": "ฉันเป็นแค่… ผู้พิทักษ์ความทรงจำ โศกนาฏกรรมนี้จะดำเนินต่อไปพร้อมกับพวกเธอ… ในรูปแบบอื่น",
						"hindi": "मैं केवल… यादों का संरक्षक हूँ। यह त्रासदी तुम्हारे साथ… एक और रूप में जारी रहेगी।"
					},
					"speaker": "anuk"
				},
				{
					"content": {
						"korean": "거대한 시스템의 균열. 승리했지만, 진정한 자유는 아직 멀었다.",
						"english": "A massive crack in the system. Victory, but true freedom is still far off.",
						"japanese": "巨大なシステムの亀裂。勝利したが、真の自由はまだ遠い。",
						"chinese": "系统中的巨大裂痕。胜利了，但真正的自由还很遥远。",
						"french": "Une fissure massive dans le système. Victoire, mais la vraie liberté est encore loin.",
						"spanish": "Una grieta masiva en el sistema. Victoria, pero la verdadera libertad aún está lejos.",
						"vietnamese": "Vết nứt lớn trong hệ thống. Chiến thắng, nhưng tự do thực sự vẫn còn xa vời.",
						"thai": "รอยร้าวขนาดใหญ่ในระบบ ชัยชนะ แต่เสรีภาพที่แท้จริงยังอีกยาวไกล",
						"hindi": "सिस्टम में एक बड़ी दरार। जीत, लेकिन सच्ची आज़ादी अभी भी दूर है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차가운 바람이 기억의 전당을 휩쓸었다. 모든 것이, 제자리로 돌아가는 듯했다.",
						"english": "A cold wind swept through the Hall of Memories. Everything seemed to return to its place.",
						"japanese": "冷たい風が記憶の殿堂を吹き抜けた。すべてが、元の場所に戻るようだった。",
						"chinese": "冷风吹过记忆殿堂。一切，似乎都回到了原位。",
						"french": "Un vent froid balaya le Hall des Souvenirs. Tout semblait revenir à sa place.",
						"spanish": "Un viento frío barrió el Salón de los Recuerdos. Todo parecía volver a su lugar.",
						"vietnamese": "Một làn gió lạnh quét qua Sảnh Ký ức. Mọi thứ dường như trở về vị trí cũ.",
						"thai": "ลมหนาวพัดผ่านโถงแห่งความทรงจำ ทุกสิ่งดูเหมือนจะกลับสู่ที่ของมัน",
						"hindi": "यादों के हॉल में एक ठंडी हवा चली। सब कुछ अपनी जगह पर वापस आ गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대의 기억이 서서히 하갈에게 흡수되었다. 저항할 수 없었다.",
						"english": "The expedition's memories were slowly absorbed by Hagal. Resistance was futile.",
						"japanese": "探検隊の記憶は徐々にハガルに吸収されていった。抵抗することはできなかった。",
						"chinese": "探险队的记忆逐渐被哈加尔吸收。无法抵抗。",
						"french": "Les souvenirs de l'expédition furent lentement absorbés par Hagal. Toute résistance était futile.",
						"spanish": "Los recuerdos de la expedición fueron absorbidos lentamente por Hagal. No pudieron resistir.",
						"vietnamese": "Ký ức của đội thám hiểm dần dần bị Hagal hấp thụ. Không thể kháng cự.",
						"thai": "ความทรงจำของคณะสำรวจถูกฮากัลดูดซับไปทีละน้อย ไม่อาจต้านทานได้",
						"hindi": "अभियान की यादें धीरे-धीरे हागल द्वारा सोख ली गईं। कोई प्रतिरोध नहीं हो सका।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "아주 완벽한 결말이군. 너희의 기억으로, 나의 서사는 영원할 것이다.",
						"english": "A truly perfect ending. With your memories, my narrative shall be eternal.",
						"japanese": "なんて完璧な結末だ。お前たちの記憶と共に、私の物語は永遠になるだろう。",
						"chinese": "多么完美的结局。有了你们的记忆，我的叙事将永垂不朽。",
						"french": "Une fin absolument parfaite. Avec vos souvenirs, mon récit sera éternel.",
						"spanish": "Un final verdaderamente perfecto. Con vuestros recuerdos, mi historia será eterna.",
						"vietnamese": "Một kết cục quá đỗi hoàn hảo. Với ký ức của các ngươi, câu chuyện của ta sẽ trường tồn mãi mãi.",
						"thai": "ช่างเป็นตอนจบที่สมบูรณ์แบบเหลือเกิน ด้วยความทรงจำของพวกเจ้า เรื่องราวของข้าจะคงอยู่ชั่วนิรันดร์",
						"hindi": "यह एक बिल्कुल सही अंत है। तुम्हारी यादों के साथ, मेरी कहानी अमर हो जाएगी।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아니야… 아직… 끝나지 않았어…!",
						"english": "...No... It's not... over yet...!",
						"japanese": "…いや… まだ… 終わってない…！",
						"chinese": "……不……还没……结束……！",
						"french": "...Non... Ce n'est pas... encore fini...!",
						"spanish": "...No... Todavía no... ha terminado...!",
						"vietnamese": "...Không... Vẫn chưa... kết thúc...!",
						"thai": "...ไม่... ยัง... ไม่จบ...!",
						"hindi": "...नहीं... अभी... खत्म नहीं हुआ...!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이것 또한… 운명이다.",
						"english": "This, too... is fate.",
						"japanese": "これもまた… 運命だ。",
						"chinese": "这也……是命运。",
						"french": "Ceci aussi... est le destin.",
						"spanish": "Esto también... es el destino.",
						"vietnamese": "Điều này cũng... là định mệnh.",
						"thai": "นี่ก็... เป็นโชคชะตา",
						"hindi": "यह भी... नियति है।"
					},
					"speaker": "anuk",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "anuk",
					"action": "exit"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"기억의 전당은 고요를 되찾았다. 하지만 루프는 정말 끊어진 걸까?",
			"하갈은 사라졌지만, 그가 남긴 질문은 깊은 상흔으로 남았다.",
			"구원이었는지, 아니면 새로운 비극의 시작이었는지. 누구도 알 수 없었다.",
			"다만, 차가운 바람만이, 끝없는 설원을 맴돌았다."
		],
		"english": [
			"The Hall of Memories regained its silence. But was the loop truly broken?",
			"Hagar vanished, but the questions he left behind became deep scars.",
			"Was it salvation, or the beginning of a new tragedy? No one knew.",
			"Only the cold wind, ceaselessly drifted across the endless snowfield."
		],
		"japanese": [
			"記憶の殿堂は静寂を取り戻した。しかし、ループは本当に断ち切られたのか？",
			"ハガルは姿を消したが、彼が残した問いは深い傷跡として残った。",
			"それは救済だったのか、あるいは新たな悲劇の始まりだったのか。誰も知る由もなかった。",
			"ただ、冷たい風だけが、終わりなき雪原を彷徨っていた。"
		],
		"chinese": [
			"记忆之殿恢复了宁静。但循环真的被打破了吗？",
			"哈加尔消失了，但他留下的疑问却成了深深的伤痕。",
			"是救赎，还是新悲剧的开始？无人知晓。",
			"唯有寒风，在无尽的雪原上盘旋。"
		],
		"french": [
			"Le Hall des Souvenirs retrouva son silence. Mais la boucle était-elle vraiment brisée ?",
			"Hagar disparut, mais les questions qu'il laissa devinrent de profondes cicatrices.",
			"Était-ce le salut, ou le début d'une nouvelle tragédie ? Nul ne le savait.",
			"Seul le vent froid errait, sans fin, à travers le champ de neige."
		],
		"spanish": [
			"El Salón de los Recuerdos recuperó su silencio. ¿Pero el bucle se había roto de verdad?",
			"Hagar desapareció, pero las preguntas que dejó se convirtieron en profundas cicatrices.",
			"Fue salvación, o el comienzo de una nueva tragedia? Nadie lo sabía.",
			"Solo el viento frío, sin cesar, vagaba por el campo de nieve interminable."
		],
		"vietnamese": [
			"Sảnh đường Ký Ức lấy lại sự tĩnh lặng. Nhưng liệu vòng lặp đã thực sự bị phá vỡ?",
			"Hagar biến mất, nhưng những câu hỏi anh ta để lại đã trở thành những vết sẹo sâu sắc.",
			"Liệu đó là sự cứu rỗi, hay khởi đầu của một bi kịch mới? Không ai biết.",
			"Chỉ có gió lạnh, không ngừng thổi quanh cánh đồng tuyết vô tận."
		],
		"thai": [
			"โถงแห่งความทรงจำกลับมาเงียบสงบอีกครั้ง แต่บ่วงนั้นถูกทำลายลงแล้วจริงหรือ?",
			"ฮาการ์หายไป แต่คำถามที่เขาทิ้งไว้กลับกลายเป็นบาดแผลลึก",
			"มันคือการไถ่บาป หรือจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่กันแน่? ไม่มีใครรู้",
			"เพียงแค่สายลมอันเหน็บหนาว พัดวนเวียนอยู่เหนือทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด"
		],
		"hindi": [
			"यादों के हॉल ने अपनी शांति पुनः प्राप्त की। लेकिन क्या पाश सचमुच टूट गया था?",
			"हागर गायब हो गया, लेकिन उसके छोड़े गए सवाल गहरे ज़ख्म बन गए।",
			"क्या यह मोक्ष था, या एक नई त्रासदी की शुरुआत? कोई नहीं जानता था।",
			"बस, ठंडी हवा ही अंतहीन बर्फीले मैदान में घूमती रही।"
		]
	},
	"prologue": {
		"korean": [
			"영원한 망각의 전당. 모든 기억이 수렴하는 곳.",
			"아눅의 안내는 결국 이곳으로 향했다.",
			"이 비극은 수없이 반복되었다. 우리는 그저 또 다른 파편일 뿐인가.",
			"진실은 차갑게 얼어붙어, 새로운 희생자를 기다렸다."
		],
		"english": [
			"The Hall of Eternal Oblivion. Where all memories converge.",
			"Anuk's guidance ultimately led here.",
			"This tragedy repeated countless times. Are we merely another fragment?",
			"The truth lay frozen, awaiting new victims."
		],
		"japanese": [
			"永遠なる忘却の殿堂。すべての記憶が収斂する場所。",
			"アヌークの導きは、結局ここへ向かった。",
			"この悲劇は幾度となく繰り返された。我々はただの別の破片に過ぎないのか。",
			"真実は冷たく凍りつき、新たな犠牲者を待っていた。"
		],
		"chinese": [
			"永恒遗忘之殿。所有记忆汇聚之地。",
			"阿努克的指引，最终指向了这里。",
			"这场悲剧无数次重演。我们不过是又一个碎片吗？",
			"真相冰冷地凝固着，等待着新的牺牲者。"
		],
		"french": [
			"Le Hall de l'Oubli Éternel. Là où toutes les mémoires convergent.",
			"Les conseils d'Anuk menèrent finalement ici.",
			"Cette tragédie s'est répétée d'innombrables fois. Ne sommes-nous qu'un autre fragment ?",
			"La vérité gisait gelée, attendant de nouvelles victimes."
		],
		"spanish": [
			"El Salón del Olvido Eterno. Donde todas las memorias convergen.",
			"La guía de Anuk finalmente nos trajo aquí.",
			"Esta tragedia se repitió incontables veces. ¿Somos solo otro fragmento?",
			"La verdad yacía congelada, esperando nuevas víctimas."
		],
		"vietnamese": [
			"Sảnh đường Lãng Quên Vĩnh Cửu. Nơi mọi ký ức hội tụ.",
			"Sự dẫn lối của Anuk cuối cùng đã đưa đến nơi này.",
			"Bi kịch này đã lặp đi lặp lại vô số lần. Chúng ta chỉ là một mảnh vỡ khác thôi sao?",
			"Sự thật đông cứng lại, chờ đợi những nạn nhân mới."
		],
		"thai": [
			"โถงแห่งการหลงลืมชั่วนิรันดร์ ที่ที่ความทรงจำทั้งมวลมาบรรจบกัน",
			"คำแนะนำของอนุกนำทางมาที่นี่ในที่สุด",
			"โศกนาฏกรรมนี้ซ้ำรอยนับครั้งไม่ถ้วน เราเป็นแค่เพียงเศษเสี้ยวอีกชิ้นหนึ่งเท่านั้นหรือ?",
			"ความจริงเย็นยะเยือกจับตัวเป็นน้ำแข็ง รอคอยเหยื่อรายใหม่"
		],
		"hindi": [
			"शाश्वत विस्मृति का हॉल। जहाँ सारी यादें एकत्रित होती हैं।",
			"अनुक का मार्गदर्शन अंततः यहीं लाया।",
			"यह त्रासदी अनगिनत बार दोहराई गई। क्या हम केवल एक और टुकड़ा हैं?",
			"सच बर्फ-सा जमा था, नए शिकार की प्रतीक्षा में।"
		]
	}
} as const;
