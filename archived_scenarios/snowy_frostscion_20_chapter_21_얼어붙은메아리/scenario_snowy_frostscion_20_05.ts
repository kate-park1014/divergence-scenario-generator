export const scenario_snowy_frostscion_20_05 = {
	"scenario_id": "snowy_frostscion_20_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "pool_Crystalline_Harbinger_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 동굴의 심연. 차가운 공기가 폐부를 찔렀다.",
						"english": "The abyss of a massive ice cave. Cold air pierced the lungs.",
						"japanese": "巨大な氷の洞窟の深淵。冷たい空気が肺を突き刺した。",
						"chinese": "巨大冰窟的深渊。冰冷的空气刺入肺腑。",
						"french": "L'abîme d'une immense grotte de glace. L'air froid transperçait les poumons.",
						"spanish": "El abismo de una enorme cueva de hielo. El aire frío perforaba los pulmones.",
						"vietnamese": "Vực sâu của một hang động băng khổng lồ. Không khí lạnh thấu phổi.",
						"thai": "หุบเหวของถ้ำน้ำแข็งขนาดใหญ่ อากาศเย็นยะเยือกเสียดแทงปอด",
						"hindi": "एक विशाल बर्फ़ीली गुफा का पाताल। ठंडी हवा फेफड़ों को भेद रही थी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "…왔구나. 또 다시.",
						"english": "…You've come. Again.",
						"japanese": "…来たか。また、お前が。",
						"chinese": "…你来了。又一次。",
						"french": "…Tu es venu. Encore.",
						"spanish": "…Has venido. Otra vez.",
						"vietnamese": "…Ngươi đã đến. Lại một lần nữa.",
						"thai": "…มาแล้วสินะ อีกครั้ง",
						"hindi": "…तुम आ गए। फिर से।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은… 글라세?",
						"english": "You are... Glace?",
						"japanese": "あなたは…グラッセ？",
						"chinese": "你是…格拉斯？",
						"french": "Vous êtes… Glace ?",
						"spanish": "¿Tú eres… Glace?",
						"vietnamese": "Ngươi là... Glace?",
						"thai": "คุณคือ... กลาเซ่?",
						"hindi": "तुम… ग्लेस हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 환상이었어. 이 세계도, 너희의 여정도.",
						"english": "All was an illusion. This world, and your journey.",
						"japanese": "すべては幻だった。この世界も、お前たちの旅も。",
						"chinese": "一切都是幻象。这个世界，还有你们的旅程。",
						"french": "Tout n'était qu'illusion. Ce monde, et votre périple.",
						"spanish": "Todo fue una ilusión. Este mundo, y vuestro viaje.",
						"vietnamese": "Tất cả đều là ảo ảnh. Thế giới này, và hành trình của các ngươi.",
						"thai": "ทั้งหมดเป็นเพียงภาพลวงตา โลกนี้และการเดินทางของพวกเจ้าด้วย",
						"hindi": "सब कुछ एक भ्रम था। यह दुनिया और तुम्हारी यात्रा भी।"
					},
					"emotion": "sad",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "คุณพูดเรื่องอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "용머리 장식은 미끼였을 뿐… 너희를 이곳으로 이끌기 위한.",
						"english": "The dragon head ornament was just bait... to lead you here.",
						"japanese": "竜の頭飾りはただの餌…お前たちをここへ誘い込むための。",
						"chinese": "龙首饰品只是诱饵…为了把你们引到这里。",
						"french": "L'ornement de tête de dragon n'était qu'un appât… pour vous attirer ici.",
						"spanish": "El ornamento de cabeza de dragón era solo un cebo… para traeros aquí.",
						"vietnamese": "Đồ trang sức đầu rồng chỉ là mồi nhử… để dẫn các ngươi đến đây.",
						"thai": "เครื่องประดับหัวมังกรเป็นแค่เหยื่อ... เพื่อล่อพวกเจ้ามาที่นี่",
						"hindi": "ड्रैगन सिर का आभूषण सिर्फ एक चारा था… तुम्हें यहाँ लाने के लिए।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "glace",
					"emotion": "sad",
					"content": {
						"korean": "온기를 찾으려 했겠지. 하지만 이곳은 온기를 흡수하는 감옥.",
						"english": "You sought warmth, perhaps. But this place is a prison that absorbs warmth.",
						"japanese": "温もりを求めたのだろう。だがここは温もりを吸い込む監獄だ。",
						"chinese": "你们或许想寻求温暖。但这里是吸收温暖的监狱。",
						"french": "Vous avez cherché la chaleur, peut-être. Mais cet endroit est une prison qui absorbe la chaleur.",
						"spanish": "Buscasteis calor, quizás. Pero este lugar es una prisión que absorbe el calor.",
						"vietnamese": "Các ngươi có lẽ đã tìm kiếm sự ấm áp. Nhưng nơi này là một nhà tù hút đi hơi ấm.",
						"thai": "พวกเจ้าคงค้นหาความอบอุ่น แต่ที่นี่คือคุกที่ดูดซับความอบอุ่น",
						"hindi": "तुमने शायद गर्मी की तलाश की होगी। लेकिन यह जगह एक ऐसी जेल है जो गर्मी को सोख लेती है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 핀이 말한 반복되는 길은…",
						"english": "Then the repeating path Pin spoke of was...",
						"japanese": "じゃあフィンが言ってた繰り返される道は…",
						"chinese": "那么芬恩说的重复之路是…",
						"french": "Alors le chemin répétitif dont Pin parlait était…",
						"spanish": "Entonces el camino repetitivo del que habló Pin era…",
						"vietnamese": "Vậy con đường lặp lại mà Pin đã nói là...",
						"thai": "ถ้างั้นทางวนเวียนที่ฟินน์พูดถึงก็คือ...",
						"hindi": "तो पिन ने जिस दोहराए जाने वाले रास्ते की बात की थी वह था…"
					}
				},
				{
					"speaker": "glace",
					"emotion": "sad",
					"content": {
						"korean": "모두 이 심연으로 향하는 길. 무한한 루프였어.",
						"english": "All paths leading to this abyss. An infinite loop.",
						"japanese": "すべてこの深淵へと続く道。無限のループだった。",
						"chinese": "所有通向这深渊的路。一个无限循环。",
						"french": "Tous les chemins mènent à cet abîme. Une boucle infinie.",
						"spanish": "Todos los caminos que conducen a este abismo. Un bucle infinito.",
						"vietnamese": "Tất cả các con đường đều dẫn đến vực thẳm này. Một vòng lặp vô hạn.",
						"thai": "ทั้งหมดคือทางที่นำไปสู่ห้วงลึกนี้ วงวนที่ไม่มีที่สิ้นสุด",
						"hindi": "सभी रास्ते इस खाई की ओर ले जा रहे थे। एक अनंत लूप।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글라세의 몸은 서서히 얼음 결정으로 변해갔다.",
						"english": "Glace's body slowly turned into ice crystals.",
						"japanese": "グラッセの体は、徐々に氷の結晶へと変わっていった。",
						"chinese": "格拉斯的身体渐渐变成了冰晶。",
						"french": "Le corps de Glace se transformait lentement en cristaux de glace.",
						"spanish": "El cuerpo de Glace se convirtió lentamente en cristales de hielo.",
						"vietnamese": "Cơ thể của Glace dần dần biến thành tinh thể băng.",
						"thai": "ร่างของกลาเซ่ค่อยๆ กลายเป็นผลึกน้ำแข็ง",
						"hindi": "ग्लेस का शरीर धीरे-धीरे बर्फ के क्रिस्टल में बदल गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"emotion": "sad",
					"content": {
						"korean": "너희의 온기, 너희의 희망… 모두 이곳의 주인을 위한 먹이.",
						"english": "Your warmth, your hope… all fodder for the master of this place.",
						"japanese": "お前たちの温もり、お前たちの希望…すべてここの主のための餌。",
						"chinese": "你们的温暖，你们的希望…都是这里主人的食粮。",
						"french": "Votre chaleur, votre espoir… tout est fourrage pour le maître de ce lieu.",
						"spanish": "Vuestro calor, vuestra esperanza… todo forraje para el señor de este lugar.",
						"vietnamese": "Hơi ấm của các ngươi, hy vọng của các ngươi… tất cả đều là thức ăn cho chủ nhân nơi đây.",
						"thai": "ความอบอุ่นของพวกเจ้า ความหวังของพวกเจ้า... ล้วนเป็นอาหารสำหรับนายของที่นี่",
						"hindi": "तुम्हारी गर्मी, तुम्हारी आशा… सब कुछ इस जगह के मालिक के लिए चारा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "에이라도… 기만이었어?",
						"english": "Even Eira… was a deception?",
						"japanese": "エイラも…欺瞞だったのか？",
						"chinese": "艾拉也是…欺骗吗？",
						"french": "Même Eira… était une tromperie ?",
						"spanish": "¿Incluso Eira… fue un engaño?",
						"vietnamese": "Ngay cả Eira… cũng là một sự lừa dối sao?",
						"thai": "แม้แต่เอร่า... ก็เป็นการหลอกลวงหรือ?",
						"hindi": "क्या एरा भी… एक धोखा था?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그녀 또한 루프의 일부. 너희를 유인하는 환영.",
						"english": "She's part of the loop, too. A mirage luring you in.",
						"japanese": "彼女もまた、ループの一部。お前たちを誘い込む幻影だ。",
						"chinese": "她也是循环的一部分。引诱你们的幻影。",
						"french": "Elle aussi fait partie de la boucle. Une illusion qui vous attire.",
						"spanish": "Ella también es parte del bucle. Un espejismo que os atrae.",
						"vietnamese": "Cô ta cũng là một phần của vòng lặp. Một ảo ảnh dụ dỗ các ngươi.",
						"thai": "นางก็เป็นส่วนหนึ่งของวงวน ภาพลวงตาที่ล่อลวงเจ้า",
						"hindi": "वह भी पाश का हिस्सा है। एक मृगतृष्णा जो तुम्हें लुभा रही है।"
					},
					"type": "speech",
					"speaker": "glace",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "말도 안 돼…",
						"english": "Impossible…",
						"japanese": "まさか…",
						"chinese": "不可能…",
						"french": "Impossible…",
						"spanish": "¡No puede ser…!",
						"vietnamese": "Không thể nào…",
						"thai": "เป็นไปไม่ได้…",
						"hindi": "यह तो हो नहीं सकता..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 절규를 들어봐. 이곳에 갇힌 자들의 영원한 고통.",
						"english": "Hear these screams. The eternal torment of those trapped here.",
						"japanese": "この叫びを聞け。ここに囚われし者たちの永遠の苦痛を。",
						"chinese": "听听这些惨叫。被困于此者永恒的痛苦。",
						"french": "Écoutez ces cris. La souffrance éternelle de ceux qui sont piégés ici.",
						"spanish": "Escuchad estos lamentos. El tormento eterno de los atrapados aquí.",
						"vietnamese": "Hãy nghe những tiếng thét này. Nỗi đau vĩnh cửu của những kẻ bị giam cầm nơi đây.",
						"thai": "จงฟังเสียงกรีดร้องเหล่านี้ ความทุกข์ทรมานชั่วนิรันดร์ของผู้ที่ติดกับดักที่นี่",
						"hindi": "इन चीखों को सुनो। यहाँ फंसे हुए लोगों की अनंत पीड़ा।"
					},
					"emotion": "sad",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 소리는…!",
						"english": "That sound…!",
						"japanese": "この音は…！",
						"chinese": "这声音是…！",
						"french": "Ce son… !",
						"spanish": "¡Ese sonido…!",
						"vietnamese": "Tiếng động này…!",
						"thai": "เสียงนี้…!",
						"hindi": "यह आवाज़…!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "프론트시온. 그는 너희의 모든 것을 얼릴 것이다.",
						"english": "Frontsion. He will freeze all that you are.",
						"japanese": "フロンシオン。彼は貴様らの全てを凍てつかせるだろう。",
						"chinese": "弗朗西翁。他将冰封你们的一切。",
						"french": "Frontsion. Il gèlera tout ce que vous êtes.",
						"spanish": "Frontsion. Él congelará todo lo que sois.",
						"vietnamese": "Frontsion. Hắn sẽ đóng băng mọi thứ của các ngươi.",
						"thai": "ฟรอนต์เซียน เขาจะแช่แข็งทุกสิ่งทุกอย่างของเจ้า",
						"hindi": "फ्रंटसियन। वह तुम्हारे हर एक चीज को जमा देगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…막아야 해.",
						"english": "…We must stop him.",
						"japanese": "…止めなければ。",
						"chinese": "…必须阻止他。",
						"french": "…Il faut l'arrêter.",
						"spanish": "…Hay que detenerlo.",
						"vietnamese": "…Phải ngăn chặn hắn.",
						"thai": "…ต้องหยุดเขา",
						"hindi": "…हमें उसे रोकना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 심장이 산산조각 났다. 모든 것이 멈췄다.",
						"english": "The giant ice heart shattered. Everything stopped.",
						"japanese": "巨大な氷の心臓が粉々に砕け散った。全てが止まった。",
						"chinese": "巨大的冰心碎裂了。一切都停止了。",
						"french": "L'énorme cœur de glace s'est brisé. Tout s'est arrêté.",
						"spanish": "El gigantesco corazón de hielo se hizo pedazos. Todo se detuvo.",
						"vietnamese": "Trái tim băng khổng lồ vỡ tan tành. Mọi thứ dừng lại.",
						"thai": "หัวใจน้ำแข็งยักษ์แตกสลาย ทุกสิ่งหยุดนิ่ง",
						"hindi": "विशाल बर्फीला दिल टूट गया। सब कुछ रुक गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하… 하지만… 이 순환은… 멈추지 않아…",
						"english": "Ha… But… This cycle… It won't stop…",
						"japanese": "ハ… しかし… この循環は… 止まらない…",
						"chinese": "哈… 但是… 这个循环… 不会停止…",
						"french": "Ha… Mais… Ce cycle… Il ne s'arrêtera pas…",
						"spanish": "Ja… Pero… Este ciclo… No se detendrá…",
						"vietnamese": "Ha… Nhưng… Vòng tuần hoàn này… sẽ không dừng lại…",
						"thai": "ฮ่า… แต่… วัฏจักรนี้… มันจะไม่หยุด…",
						"hindi": "हा… लेकिन… यह चक्र… रुकेगा नहीं…"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝났어… 이제 아무도 희생되지 않아.",
						"english": "It's over… No one will be sacrificed anymore.",
						"japanese": "終わった… もう誰も犠牲にならない。",
						"chinese": "结束了… 不会再有人牺牲了。",
						"french": "C'est fini… Plus personne ne sera sacrifié.",
						"spanish": "Se acabó… Nadie más será sacrificado.",
						"vietnamese": "Kết thúc rồi… Sẽ không còn ai phải hy sinh nữa.",
						"thai": "จบแล้ว… ไม่มีใครต้องเสียสละอีกแล้ว",
						"hindi": "यह खत्म हो गया… अब कोई बलिदान नहीं होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "얼어붙었던 바이킹들의 형상이 희미하게 빛나며 사라졌다.",
						"english": "The frozen figures of the Vikings faintly glowed and disappeared.",
						"japanese": "凍りついていたヴァイキングたちの姿が、かすかに輝きながら消えていった。",
						"chinese": "维京人的冰冻身躯微弱地发光，然后消失了。",
						"french": "Les figures gelées des Vikings brillèrent faiblement puis disparurent.",
						"spanish": "Las figuras congeladas de los vikingos brillaron débilmente y desaparecieron.",
						"vietnamese": "Những hình dáng của các chiến binh Viking bị đóng băng lờ mờ phát sáng rồi biến mất.",
						"thai": "ร่างของชาวไวกิ้งที่ถูกแช่แข็งเปล่งประกายจางๆ แล้วหายไป",
						"hindi": "वाइकिंग्स की जमी हुई आकृतियाँ मंद-मंद चमक कर गायब हो गईं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하지만 남은 것은 깊은 상흔과, 알 수 없는 공허였다.",
						"english": "But what remained were deep scars and an inexplicable emptiness.",
						"japanese": "しかし、残されたのは深い傷跡と、得体の知れない虚無だった。",
						"chinese": "然而留下的却是深深的伤痕和一种莫名的空虚。",
						"french": "Mais ce qui restait, c'était de profondes cicatrices et un vide inexplicable.",
						"spanish": "Pero lo que quedó fueron cicatrices profundas y un vacío inexplicable.",
						"vietnamese": "Nhưng những gì còn lại là những vết sẹo sâu và một khoảng trống không thể giải thích được.",
						"thai": "แต่สิ่งที่เหลืออยู่คือบาดแผลลึกและความว่างเปล่าที่อธิบายไม่ได้",
						"hindi": "लेकिन जो बचा वह गहरे निशान और एक अवर्णनीय खालीपन था।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 용머리 장식이 희미하게 빛났다.",
						"english": "The deepest part of the cave. A massive dragon head ornament glowed faintly.",
						"japanese": "洞窟の最深部。巨大な竜の頭部装飾がかすかに輝いていた。",
						"chinese": "洞穴最深处。巨大的龙头装饰发出微弱的光芒。",
						"french": "Au plus profond de la grotte. Un ornement géant en forme de tête de dragon brillait faiblement.",
						"spanish": "La parte más profunda de la cueva. Un enorme adorno con forma de cabeza de dragón brillaba tenuemente.",
						"vietnamese": "Nơi sâu nhất của hang động. Một tượng trang trí đầu rồng khổng lồ phát sáng mờ ảo.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำ เครื่องประดับรูปหัวมังกรขนาดใหญ่เปล่งแสงสลัวๆ",
						"hindi": "गुफा का सबसे गहरा हिस्सा। एक विशालकाय ड्रैगन सिर की सजावट हल्की-हल्की चमक रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "glace",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "glace",
					"content": {
						"korean": "…봐. 저것이 진정한 모습이야.",
						"english": "…Look. That is its true form.",
						"japanese": "…見ろ。あれが真の姿だ。",
						"chinese": "…看。那才是它的真实面貌。",
						"french": "…Regardez. C'est sa véritable forme.",
						"spanish": "…Mira. Esa es su verdadera forma.",
						"vietnamese": "…Nhìn kìa. Đó là hình dạng thật của nó.",
						"thai": "…ดูนั่นสิ นั่นคือร่างที่แท้จริงของมัน",
						"hindi": "…देखो। वह उसका असली रूप है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "용머리 장식이… 왜 저렇게?",
						"english": "The dragon head ornament… why is it like that?",
						"japanese": "竜の頭部装飾が…なぜあんな風に？",
						"chinese": "龙头装饰…为什么会这样？",
						"french": "L'ornement en forme de tête de dragon… pourquoi est-il comme ça ?",
						"spanish": "El adorno de cabeza de dragón… ¿por qué así?",
						"vietnamese": "Tượng đầu rồng… sao lại như vậy?",
						"thai": "เครื่องประดับรูปหัวมังกร… ทำไมถึงเป็นแบบนั้น?",
						"hindi": "ड्रैगन सिर की सजावट… यह ऐसे क्यों है?"
					}
				},
				{
					"speaker": "boss",
					"duration_ms": 1000,
					"type": "direction",
					"action": "shake"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "용머리 장식이 뒤틀리며 균열을 일으켰다. 수억 개의 얼음 결정이 튀어나오며 거대한 괴물로 변모했다.",
						"english": "The dragon head ornament twisted and cracked. Billions of ice crystals burst forth, transforming it into a colossal monster.",
						"japanese": "竜の頭部装飾がねじ曲がり、亀裂が入った。数億の氷の結晶が飛び出し、巨大な怪物へと変貌した。",
						"chinese": "龙头装饰扭曲开裂。数亿冰晶喷涌而出，化作一头巨大的怪物。",
						"french": "L'ornement en forme de tête de dragon s'est tordu et a craqué. Des milliards de cristaux de glace ont jailli, le transformant en un monstre colossal.",
						"spanish": "El adorno de cabeza de dragón se retorció y se agrietó. Cientos de millones de cristales de hielo brotaron, transformándolo en un monstruo colosal.",
						"vietnamese": "Tượng đầu rồng vặn vẹo và nứt ra. Hàng tỷ tinh thể băng bắn ra, biến nó thành một quái vật khổng lồ.",
						"thai": "เครื่องประดับรูปหัวมังกรบิดเบี้ยวและแตกเป็นรอยร้าว ผลึกน้ำแข็งนับล้านพุ่งออกมา เปลี่ยนเป็นสัตว์ประหลาดมหึมา",
						"hindi": "ड्रैगन सिर की सजावट मुड़ गई और उसमें दरारें आ गईं। अरबों बर्फीले क्रिस्टल फूट कर बाहर निकले, और यह एक विशालकाय राक्षस में बदल गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아아… 너희의 온기가, 너희의 기억이… 너무나도 달콤하구나.",
						"english": "Ah… Your warmth, your memories… So incredibly sweet.",
						"japanese": "ああ… 君たちの温もり、君たちの記憶が… あまりにも甘美だ。",
						"chinese": "啊… 你们的温暖，你们的记忆… 如此甜蜜。",
						"french": "Ah… Votre chaleur, vos souvenirs… Tellement doux.",
						"spanish": "Ah… Vuestro calor, vuestros recuerdos… Tan increíblemente dulces.",
						"vietnamese": "A… Hơi ấm của các ngươi, ký ức của các ngươi… Thật ngọt ngào làm sao.",
						"thai": "อา… ความอบอุ่นของพวกเจ้า ความทรงจำของพวกเจ้า… ช่างหอมหวานเหลือเกิน",
						"hindi": "आह… तुम्हारी गरमाहट, तुम्हारी यादें… इतनी मधुर।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 차가운 세계에서 내가 홀로 버틸 유일한 이유였다.",
						"english": "It was the only reason I could endure this cold world alone.",
						"japanese": "この冷たい世界で、私が一人で耐え抜く唯一の理由だった。",
						"chinese": "这是我在这寒冷世界中独自支撑的唯一理由。",
						"french": "C'était la seule raison pour laquelle je pouvais endurer ce monde froid seule.",
						"spanish": "Fue la única razón por la que pude soportar este mundo frío sola.",
						"vietnamese": "Đó là lý do duy nhất để ta có thể một mình chịu đựng thế giới lạnh lẽo này.",
						"thai": "มันเป็นเหตุผลเดียวที่ข้าจะทนอยู่ในโลกอันหนาวเย็นนี้ได้เพียงลำพัง",
						"hindi": "यह एकमात्र कारण था जिससे मैं इस ठंडी दुनिया में अकेला सह सका।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 안식처의 주인이었나!",
						"english": "You… You were the master of the sanctuary!",
						"japanese": "お前が… 安息所の主人だったのか！",
						"chinese": "你… 你是安息所的主人！",
						"french": "Toi… Tu étais le maître du sanctuaire !",
						"spanish": "¡Tú… Tú eras el dueño del santuario!",
						"vietnamese": "Ngươi… Ngươi là chủ nhân của nơi trú ẩn này!",
						"thai": "เจ้า… เจ้าคือเจ้าของสถานที่ศักดิ์สิทธิ์หรือ!",
						"hindi": "तुम… तुम ही अभयारण्य के स्वामी थे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 너희의 안식처가 아니다… 너희를 영원히 얼릴 차가운 숨결이다!",
						"english": "I am not your sanctuary… I am the cold breath that will freeze you forever!",
						"japanese": "私はお前たちの安息所ではない… お前たちを永遠に凍らせる冷たい息吹だ！",
						"chinese": "我不是你们的安息所… 我是会永远冻结你们的寒冷气息！",
						"french": "Je ne suis pas votre sanctuaire… Je suis le souffle froid qui vous figera pour l'éternité !",
						"spanish": "No soy vuestro santuario… ¡Soy el aliento frío que os congelará para siempre!",
						"vietnamese": "Ta không phải là nơi trú ẩn của các ngươi… Ta là hơi thở lạnh lẽo sẽ đóng băng các ngươi mãi mãi!",
						"thai": "ข้าไม่ใช่สถานที่ศักดิ์สิทธิ์ของพวกเจ้า… ข้าคือลมหายใจอันหนาวเย็นที่จะแช่แข็งพวกเจ้าไปตลอดกาล!",
						"hindi": "मैं तुम्हारा अभयारण्य नहीं हूँ… मैं वह ठंडी साँस हूँ जो तुम्हें हमेशा के लिए जमा देगी!"
					},
					"speaker": "boss",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 숨결이 모든 온기를 집어삼켰다.",
						"english": "The cold breath swallowed all warmth.",
						"japanese": "冷たい息吹が、全ての温もりを飲み込んだ。",
						"chinese": "寒冷的气息吞噬了所有的温暖。",
						"french": "Le souffle froid a englouti toute chaleur.",
						"spanish": "El aliento frío se tragó toda la calidez.",
						"vietnamese": "Hơi thở lạnh lẽo nuốt chửng mọi hơi ấm.",
						"thai": "ลมหายใจอันหนาวเย็นกลืนกินความอบอุ่นทั้งหมด",
						"hindi": "ठंडी साँस ने सारी गरमाहट निगल ली।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "영원히… 나의 일부가 되어라…",
						"english": "Forever... become a part of me...",
						"japanese": "永遠に… 私の一部となれ…",
						"chinese": "永远… 成为我的一部分吧…",
						"french": "Pour toujours... deviens une partie de moi...",
						"spanish": "Para siempre... sé parte de mí...",
						"vietnamese": "Mãi mãi... hãy trở thành một phần của ta...",
						"thai": "ตลอดกาล... จงเป็นส่วนหนึ่งของข้า...",
						"hindi": "हमेशा के लिए... मेरे अंश बन जाओ..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 여기서… 끝낼 수 없어…!",
						"english": "Ugh... I can't... end it here...!",
						"japanese": "くっ… ここで… 終わらせるわけにはいかない…！",
						"chinese": "呃… 我不能… 就此结束…！",
						"french": "Argh... Je ne peux pas... finir ici...!",
						"spanish": "Ugh... No puedo... terminar aquí...!",
						"vietnamese": "Khốn kiếp... Không thể... kết thúc ở đây được...!",
						"thai": "อึก... ข้าจะ... จบลงแค่นี้ไม่ได้...!",
						"hindi": "उफ़... मैं... यहाँ ख़त्म नहीं हो सकता...!"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"환상이 걷히고, 진실이 드러났다.",
			"프론트시온은 사라졌지만, 그가 남긴 얼어붙은 흔적은 영원할 듯했다.",
			"과거의 희생자들은 안식을 찾았을까, 혹은 새로운 루프에 갇힌 걸까.",
			"고요해진 설원에는 차가운 바람만이 속삭였다. 구원인가, 침해인가."
		],
		"english": [
			"Illusions faded, and truth was revealed.",
			"Frontsion vanished, yet the frozen traces he left seemed eternal.",
			"Did the past victims find peace, or are they trapped in a new loop?",
			"In the hushed snowfield, only the cold wind whispered. Salvation, or encroachment?"
		],
		"japanese": [
			"幻想は晴れ、真実が明らかになった。",
			"フロンツィオンは消え去ったが、彼が残した凍てついた痕跡は永遠に続くかのようだった。",
			"過去の犠牲者たちは安息を見つけたのか、あるいは新たなループに囚われているのか。",
			"静寂に包まれた雪原には、ただ冷たい風だけが囁いた。救いか、それとも侵食か。"
		],
		"chinese": [
			"幻象消散，真相显露。",
			"弗隆西翁消失了，但他留下的冰冷痕迹似乎永恒不灭。",
			"过去的牺牲者们是否找到了安息，抑或是被困在了新的循环中？",
			"在寂静的雪原中，只有寒风低语。是救赎，还是侵蚀？"
		],
		"french": [
			"Les illusions se dissipèrent, et la vérité fut révélée.",
			"Frontsion disparut, mais les traces gelées qu'il laissa semblaient éternelles.",
			"Les victimes du passé ont-elles trouvé le repos, ou sont-elles piégées dans une nouvelle boucle ?",
			"Dans l'étendue enneigée silencieuse, seul le vent froid murmurait. Salut, ou intrusion ?"
		],
		"spanish": [
			"Las ilusiones se desvanecieron, y la verdad fue revelada.",
			"Frontsion desapareció, pero las huellas heladas que dejó parecían eternas.",
			"¿Encontraron la paz las víctimas del pasado, o están atrapadas en un nuevo bucle?",
			"En el silencioso campo de nieve, solo el viento frío susurraba. ¿Salvación, o intrusión?"
		],
		"vietnamese": [
			"Ảo ảnh tan biến, sự thật được phơi bày.",
			"Frontsion đã biến mất, nhưng những dấu vết đóng băng mà hắn để lại dường như vĩnh cửu.",
			"Những nạn nhân trong quá khứ đã tìm thấy sự an nghỉ, hay họ bị mắc kẹt trong một vòng lặp mới?",
			"Trong cánh đồng tuyết tĩnh lặng, chỉ có làn gió lạnh thì thầm. Cứu rỗi, hay xâm lấn?"
		],
		"thai": [
			"ภาพลวงตาจางหายไป ความจริงได้ปรากฏ",
			"ฟรอนต์ซิออนหายไปแล้ว แต่ร่องรอยน้ำแข็งที่เขาทิ้งไว้ดูเหมือนจะเป็นนิรันดร์",
			"เหยื่อในอดีตได้พบความสงบแล้วหรือยัง หรือพวกเขาติดอยู่ในวงวนใหม่?",
			"ในทุ่งหิมะอันเงียบสงบ มีเพียงลมหนาวที่พัดกระซิบ ความรอด หรือการบุกรุกกันแน่?"
		],
		"hindi": [
			"भ्रम मिट गए, और सत्य सामने आया।",
			"फ्रोंटसियन गायब हो गया, फिर भी उसके छोड़े गए जमे हुए निशान शाश्वत लग रहे थे।",
			"क्या अतीत के पीड़ितों को शांति मिली, या वे एक नए लूप में फंसे हुए हैं?",
			"शांत बर्फ़ीले मैदान में, केवल ठंडी हवा फुसफुसा रही थी। मोक्ष है, या अतिक्रमण?"
		]
	},
	"prologue": {
		"korean": [
			"안식처. 그 이름에 모든 희망을 걸었다.",
			"에이라와 용머리 장식의 인도는 너무나 달콤했다.",
			"하지만 가장 깊은 곳에는— 진실을 목도할 자가 기다리고 있었다.",
			"온기를 잃어가는 세계. 그 끝에 기다리는 것은 구원인가, 또 다른 절망인가."
		],
		"english": [
			"Sanctuary. All hope rested on that name.",
			"The guidance of Aira and the dragon-headed ornament was intoxicatingly sweet.",
			"But in the deepest depths— one waited to witness the truth.",
			"A world losing its warmth. At its end, awaits salvation, or another despair?"
		],
		"japanese": [
			"安息所。その名に全ての希望を託した。",
			"アイラと龍頭飾りの導きは、あまりにも甘美だった。",
			"しかし、最も深い場所には— 真実を目撃する者が待っていた。",
			"温もりを失いゆく世界。その果てに待つのは、救いか、それとも新たな絶望か。"
		],
		"chinese": [
			"安息之地。所有的希望都寄托于此名。",
			"艾拉与龙首饰的指引，是如此的甜美。",
			"然而在最深处——等待着一个将要目睹真相之人。",
			"一个逐渐失去温度的世界。其尽头等待的，是救赎，还是另一个绝望？"
		],
		"french": [
			"Sanctuaire. Tout l'espoir reposait sur ce nom.",
			"La guidance d'Aira et de l'ornement à tête de dragon était si douce.",
			"Mais dans les profondeurs les plus sombres— quelqu'un attendait de témoigner de la vérité.",
			"Un monde perdant sa chaleur. À sa fin, qu'est-ce qui attend : le salut, ou un autre désespoir ?"
		],
		"spanish": [
			"Santuario. Toda la esperanza se depositó en ese nombre.",
			"La guía de Aira y el adorno con cabeza de dragón era demasiado dulce.",
			"Pero en lo más profundo, alguien esperaba para presenciar la verdad.",
			"Un mundo que pierde su calor. ¿Al final, espera la salvación, o otra desesperación?"
		],
		"vietnamese": [
			"Nơi ẩn náu. Mọi hy vọng đều đặt vào cái tên đó.",
			"Sự dẫn dắt của Aira và trang sức đầu rồng thật ngọt ngào đến ngây ngất.",
			"Nhưng ở nơi sâu thẳm nhất— một người đang chờ đợi để chứng kiến sự thật.",
			"Một thế giới đang mất đi sự ấm áp. Điều chờ đợi ở cuối con đường là sự cứu rỗi, hay một nỗi tuyệt vọng khác?"
		],
		"thai": [
			"สถานพักพิง ความหวังทั้งหมดฝากไว้กับชื่อนั้น",
			"การนำทางของเอร่าและเครื่องประดับหัวมังกรนั้นหอมหวานเหลือเกิน",
			"แต่ในส่วนลึกที่สุด— มีผู้หนึ่งรอคอยที่จะเป็นพยานในความจริง",
			"โลกที่กำลังสูญเสียความอบอุ่น ที่ปลายทางนั้นคือความรอด หรือความสิ้นหวังอีกครั้ง?"
		],
		"hindi": [
			"शरणस्थल। उस नाम पर सारी उम्मीदें टिकी थीं।",
			"ऐरा और ड्रैगन-मुख आभूषण का मार्गदर्शन बहुत मधुर था।",
			"परंतु सबसे गहरी जगह पर— कोई सत्य का साक्षी बनने का इंतजार कर रहा था।",
			"एक ऐसी दुनिया जो अपनी गरमाहट खो रही है। उसके अंत में, क्या मोक्ष है, या एक और निराशा?"
		]
	}
} as const;
