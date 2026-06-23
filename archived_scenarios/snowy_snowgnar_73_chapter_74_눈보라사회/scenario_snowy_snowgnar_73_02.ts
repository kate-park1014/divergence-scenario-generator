export const scenario_snowy_snowgnar_73_02 = {
	"scenario_id": "snowy_snowgnar_73_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 동굴 깊숙이 들어서자, 냉기가 온몸을 휘감았다.",
						"english": "As I stepped deeper into the ice cave, the cold enveloped my entire body.",
						"japanese": "氷の洞窟の奥深くへ足を踏み入れると、冷気が全身を包み込んだ。",
						"chinese": "当我深入冰洞时，寒气笼罩了我的全身。",
						"french": "Alors que je m'enfonçais dans la grotte de glace, le froid enveloppa tout mon corps.",
						"spanish": "Al adentrarme en la cueva de hielo, el frío envolvió todo mi cuerpo.",
						"vietnamese": "Khi tôi bước sâu hơn vào hang băng, cái lạnh bao trùm toàn thân.",
						"thai": "เมื่อก้าวลึกเข้าไปในถ้ำน้ำแข็ง ความหนาวเย็นก็โอบล้อมร่างกายทั้งหมด",
						"hindi": "जैसे ही मैं बर्फीली गुफा में और अंदर गया, ठंड ने मेरे पूरे शरीर को जकड़ लिया।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "으윽, 춥다... 이곳엔 뭔가 이상해.",
						"english": "Ugh, it's cold... something's strange about this place.",
						"japanese": "うぅ、寒い…ここは何かおかしい。",
						"chinese": "呃，好冷……这个地方有点奇怪。",
						"french": "Ugh, il fait froid... quelque chose cloche ici.",
						"spanish": "Uf, qué frío... algo raro pasa aquí.",
						"vietnamese": "Ôi, lạnh quá... nơi này có gì đó lạ.",
						"thai": "อึ๋ย หนาว... ที่นี่มีอะไรแปลกๆ",
						"hindi": "उफ़, ठंड है... इस जगह में कुछ अजीब है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳은... 과거의 영광이 갇힌 곳. 너희도 강함을 좇는 자들인가?",
						"english": "This is... where the glory of the past is trapped. Are you also seekers of strength?",
						"japanese": "ここは…過去の栄光が囚われた場所。お前たちも強さを追い求める者か？",
						"chinese": "这里是……过去荣耀被困的地方。你们也是追求力量的人吗？",
						"french": "C'est... là où la gloire du passé est piégée. Êtes-vous aussi des chercheurs de force ?",
						"spanish": "Este es... donde la gloria del pasado está atrapada. ¿Sois también buscadores de fuerza?",
						"vietnamese": "Đây là... nơi vinh quang quá khứ bị giam cầm. Các ngươi cũng là những kẻ tìm kiếm sức mạnh sao?",
						"thai": "ที่นี่คือ... ที่ซึ่งความรุ่งโรจน์ในอดีตถูกกักขังไว้ พวกเจ้าก็เป็นผู้แสวงหาความแข็งแกร่งหรือ?",
						"hindi": "यह वह जगह है... जहाँ अतीत की महिमा फँसी हुई है। क्या तुम भी शक्ति के अनुयायी हो?"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르. 이 얼어붙은 땅의 증인이지.",
						"english": "Ivar. A witness to this frozen land.",
						"japanese": "イヴァル。この凍てついた地の証人だ。",
						"chinese": "伊瓦尔。这片冰冻之地的见证者。",
						"french": "Ivar. Un témoin de cette terre gelée.",
						"spanish": "Ivar. Un testigo de esta tierra congelada.",
						"vietnamese": "Ivar. Một nhân chứng của vùng đất băng giá này.",
						"thai": "ไอวาร์ พยานของดินแดนน้ำแข็งแห่งนี้",
						"hindi": "इवर। इस जमी हुई भूमि का गवाह।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "유령 바이킹의 희미한 형상들이 의미 없는 움직임을 반복하고 있었다.",
						"english": "Faint figures of ghost Vikings repeated meaningless movements.",
						"japanese": "幽霊バイキングのぼんやりとした姿が、意味のない動きを繰り返していた。",
						"chinese": "幽灵维京人模糊的身影重复着毫无意义的动作。",
						"french": "Les silhouettes indistinctes des vikings fantômes répétaient des mouvements dénués de sens.",
						"spanish": "Las figuras tenues de los vikingos fantasmas repetían movimientos sin sentido.",
						"vietnamese": "Những bóng ma mờ ảo của các chiến binh Viking lặp đi lặp lại những chuyển động vô nghĩa.",
						"thai": "ร่างเลือนรางของไวกิ้งผีดิบเคลื่อนไหวซ้ำๆ อย่างไร้ความหมาย",
						"hindi": "भूतिया वाइकिंग की धुंधली आकृतियाँ अर्थहीन हरकतें दोहरा रही थीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저건 뭐야? 싸우는 건가?",
						"english": "What are those? Are they fighting?",
						"japanese": "あれは何だ？戦っているのか？",
						"chinese": "那是什么？他们在战斗吗？",
						"french": "Qu'est-ce que c'est ? Ils se battent ?",
						"spanish": "¿Qué es eso? ¿Están luchando?",
						"vietnamese": "Cái gì thế kia? Họ đang đánh nhau à?",
						"thai": "นั่นอะไรน่ะ? พวกเขากำลังต่อสู้กันเหรอ?",
						"hindi": "वो क्या है? क्या वो लड़ रहे हैं?"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그들은 매번 똑같은 전투를 벌이지. 이길 수 없는 싸움을.",
						"english": "They fight the same battle every time. An unwinnable fight.",
						"japanese": "彼らはいつも同じ戦いを繰り返している。勝てない戦いを。",
						"chinese": "他们每次都打着同样的仗。一场无法取胜的战斗。",
						"french": "Ils se battent toujours le même combat. Une lutte impossible à gagner.",
						"spanish": "Siempre libran la misma batalla. Una lucha imposible de ganar.",
						"vietnamese": "Họ luôn chiến đấu cùng một trận. Một trận chiến không thể thắng.",
						"thai": "พวกเขาต่อสู้การต่อสู้เดิมๆ ซ้ำแล้วซ้ำเล่า การต่อสู้ที่ไม่อาจชนะได้",
						"hindi": "वे हर बार एक ही लड़ाई लड़ते हैं। एक ऐसी लड़ाई जिसे जीता नहीं जा सकता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "왜요?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไมล่ะ?",
						"hindi": "क्यों?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영광에 대한 끝없는 갈망 때문에. 루프에 갇힌 거지.",
						"english": "Because of an endless craving for glory. Trapped in a loop.",
						"japanese": "栄光への飽くなき渇望のためだ。ループに囚われているのさ。",
						"chinese": "因为对荣耀无尽的渴望。被困在一个循环中。",
						"french": "À cause d'un désir insatiable de gloire. Piégés dans une boucle.",
						"spanish": "Por una sed interminable de gloria. Atrapados en un bucle.",
						"vietnamese": "Vì khát khao vinh quang vô tận. Bị mắc kẹt trong một vòng lặp.",
						"thai": "เพราะความกระหายในเกียรติยศที่ไม่มีที่สิ้นสุด ติดอยู่ในวังวน",
						"hindi": "महिमा की अंतहीन लालसा के कारण। एक लूप में फंसे हुए।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반복된다는 건… 이 세계의 규칙인가?",
						"english": "Repetition... Is that this world's rule?",
						"japanese": "繰り返されるというのは…この世界のルールなのか？",
						"chinese": "重复……是这个世界的法则吗？",
						"french": "La répétition... Est-ce la règle de ce monde ?",
						"spanish": "Repetición... ¿Es esa la regla de este mundo?",
						"vietnamese": "Sự lặp lại... Đó có phải là quy tắc của thế giới này không?",
						"thai": "การซ้ำซาก... เป็นกฎของโลกนี้งั้นหรือ?",
						"hindi": "दोहराव... क्या यह इस दुनिया का नियम है?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도 곧 알게 될 거다. 강함의 끝이 무엇인지.",
						"english": "You'll soon find out. What the end of strength truly is.",
						"japanese": "お前たちもすぐにわかるだろう。強さの果てが何なのかを。",
						"chinese": "你们很快就会明白。力量的尽头是什么。",
						"french": "Vous le découvrirez bientôt. Ce qu'est la fin de la force.",
						"spanish": "Pronto lo descubrirán. Cuál es el final de la fuerza.",
						"vietnamese": "Các ngươi sẽ sớm biết thôi. Cái kết của sức mạnh thực sự là gì.",
						"thai": "พวกเจ้าจะได้รู้ในไม่ช้า ว่าจุดจบของความแข็งแกร่งคืออะไร",
						"hindi": "तुम भी जल्द ही जान जाओगे। ताकत का अंत क्या होता है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "동굴 벽화에 새겨진 전투의 흔적은 시간의 의미를 잃은 듯했다.",
						"english": "The traces of battle carved into the cave murals seemed to have lost their meaning in time.",
						"japanese": "洞窟の壁画に刻まれた戦いの痕跡は、時間の意味を失ったかのようだった。",
						"chinese": "刻在洞穴壁画上的战斗痕迹，仿佛失去了时间的意义。",
						"french": "Les traces de bataille gravées sur les peintures rupestres semblaient avoir perdu leur sens avec le temps.",
						"spanish": "Las huellas de batalla grabadas en los murales de la cueva parecían haber perdido su significado con el tiempo.",
						"vietnamese": "Những dấu vết chiến trận khắc trên các bức tranh hang động dường như đã mất đi ý nghĩa theo thời gian.",
						"thai": "ร่องรอยการต่อสู้ที่สลักบนภาพเขียนผนังถ้ำดูเหมือนจะไร้ความหมายตามกาลเวลา",
						"hindi": "गुफा के भित्तिचित्रों पर उकेरे गए युद्ध के निशान समय के साथ अपना अर्थ खो चुके थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 흔적… 계속 반복되는 것 같아.",
						"english": "These traces... they seem to repeat endlessly.",
						"japanese": "この痕跡…ずっと繰り返されているようだ。",
						"chinese": "这些痕迹……似乎在不断重复。",
						"french": "Ces traces... elles semblent se répéter sans fin.",
						"spanish": "Estas huellas... parecen repetirse sin cesar.",
						"vietnamese": "Những dấu vết này... dường như lặp lại mãi.",
						"thai": "ร่องรอยเหล่านี้... ดูเหมือนจะซ้ำไปซ้ำมาไม่รู้จบ",
						"hindi": "ये निशान... वे लगातार दोहराए जा रहे हैं।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 강자들은 마지막에 질문을 받지. 과연, 이것이 진정한 영광인가?",
						"english": "All the strong are asked a question in the end: Is this truly glory?",
						"japanese": "全ての強者は最後に問いかけられる。果たして、これが真の栄光なのかと。",
						"chinese": "所有的强者最终都会被问到这个问题：这真的是真正的荣耀吗？",
						"french": "Tous les puissants sont interrogés à la fin : Est-ce vraiment la gloire ?",
						"spanish": "A todos los fuertes se les hace una pregunta al final: ¿Es esto verdaderamente gloria?",
						"vietnamese": "Tất cả những kẻ mạnh cuối cùng đều bị hỏi: Liệu đây có phải là vinh quang thực sự không?",
						"thai": "ผู้แข็งแกร่งทุกคนจะถูกตั้งคำถามในท้ายที่สุด: นี่คือเกียรติยศที่แท้จริงหรือ?",
						"hindi": "अंत में सभी शक्तिशाली लोगों से एक प्रश्न पूछा जाता है: क्या यह वास्तव में महिमा है?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신도 그 질문을 받았나요?",
						"english": "Did you also get that question?",
						"japanese": "あなたもその質問を受けましたか？",
						"chinese": "你也收到那个问题了吗？",
						"french": "Vous avez aussi eu cette question ?",
						"spanish": "¿A ti también te hicieron esa pregunta?",
						"vietnamese": "Bạn cũng nhận được câu hỏi đó à?",
						"thai": "คุณก็ถูกถามคำถามนั้นด้วยเหรอ?",
						"hindi": "क्या आपको भी वही सवाल पूछा गया था?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나는 이 끝없는 굶주림을 벗어날 수 없었다.",
						"english": "...I could not escape this endless hunger.",
						"japanese": "…私はこの終わりのない飢えから逃れられなかった。",
						"chinese": "……我无法摆脱这无尽的饥饿。",
						"french": "...Je n'ai pas pu échapper à cette faim sans fin.",
						"spanish": "...No pude escapar de esta hambre infinita.",
						"vietnamese": "...Tôi không thể thoát khỏi cơn đói vô tận này.",
						"thai": "...ฉันไม่สามารถหลุดพ้นจากความหิวโหยที่ไม่สิ้นสุดนี้ได้เลย",
						"hindi": "...मैं इस अंतहीन भूख से बच नहीं पाया।"
					}
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리도 똑같이 될 거라는 말인가요?",
						"english": "Are you saying we'll become the same?",
						"japanese": "私たちも同じになるというのですか？",
						"chinese": "你是说我们也会变成那样吗？",
						"french": "Vous voulez dire que nous allons devenir comme ça ?",
						"spanish": "¿Estás diciendo que nos volveremos iguales?",
						"vietnamese": "Anh đang nói chúng ta cũng sẽ trở nên như vậy sao?",
						"thai": "คุณกำลังจะบอกว่าเราก็จะกลายเป็นแบบนั้นด้วยเหรอ?",
						"hindi": "क्या आप कह रहे हैं कि हम भी वैसे ही हो जाएँगे?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네놈들의 의지를 시험해봐라.",
						"english": "Test your resolve.",
						"japanese": "お前たちの意志を試してみろ。",
						"chinese": "去测试你们的意志吧。",
						"french": "Mettez votre volonté à l'épreuve.",
						"spanish": "Pon a prueba tu voluntad.",
						"vietnamese": "Hãy thử thách ý chí của các ngươi đi.",
						"thai": "จงทดสอบเจตจำนงของพวกเจ้าซะ",
						"hindi": "अपनी इच्छाशक्ति का परीक्षण करो।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴 끝에서 거대한 그림자가 흔들렸다.",
						"english": "A giant shadow swayed at the end of the cave.",
						"japanese": "洞窟の奥で巨大な影が揺らめいた。",
						"chinese": "在洞穴的尽头，一个巨大的影子摇曳着。",
						"french": "Une ombre gigantesque vacillait au fond de la grotte.",
						"spanish": "Una sombra gigantesca se agitó al final de la cueva.",
						"vietnamese": "Một bóng đen khổng lồ lay động ở cuối hang.",
						"thai": "เงาขนาดใหญ่โยกไหวอยู่สุดปลายถ้ำ",
						"hindi": "गुफा के अंत में एक विशालकाय परछाई हिल रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 압박감… 설마.",
						"english": "This pressure... surely not.",
						"japanese": "この圧迫感… まさか。",
						"chinese": "这种压迫感……难道说。",
						"french": "Cette pression... Impossible.",
						"spanish": "Esta presión... No puede ser.",
						"vietnamese": "Cảm giác áp lực này... lẽ nào.",
						"thai": "แรงกดดันนี้... อย่าบอกนะว่า",
						"hindi": "यह दबाव... कहीं ऐसा तो नहीं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "드디어 만났군. 망각의 의식을 지키는 자.",
						"english": "Finally, we meet. The guardian of the Rite of Oblivion.",
						"japanese": "ついに会えたな。忘却の儀式を守る者よ。",
						"chinese": "终于见到你了。遗忘仪式的守护者。",
						"french": "Nous nous rencontrons enfin. Gardien du Rite de l'Oubli.",
						"spanish": "Finalmente nos encontramos. El guardián del Rito del Olvido.",
						"vietnamese": "Cuối cùng cũng gặp được ngươi. Kẻ bảo vệ Nghi thức Lãng quên.",
						"thai": "ในที่สุดก็ได้พบกัน ผู้พิทักษ์พิธีแห่งการลืมเลือนเอ๋ย",
						"hindi": "आखिरकार हम मिल ही गए। विस्मृति के अनुष्ठान के संरक्षक।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보스인가?",
						"english": "Is it the boss?",
						"japanese": "ボスか？",
						"chinese": "是首领吗？",
						"french": "C'est le boss ?",
						"spanish": "¿Es el jefe?",
						"vietnamese": "Là trùm sao?",
						"thai": "นี่คือบอสเหรอ?",
						"hindi": "क्या यह बॉस है?"
					}
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "저자는 너희의 가장 강한 그리움을 보여줄 거다. 너희가 무엇에 갇혀 있는지.",
						"english": "It will show you your strongest longing. What you are trapped by.",
						"japanese": "そいつはお前たちの最も強い郷愁を見せてくれるだろう。お前たちが何に囚われているのかをな。",
						"chinese": "他会向你们展示你们最强烈的思念。你们被什么所困。",
						"french": "Il vous montrera votre plus grand désir. Ce qui vous emprisonne.",
						"spanish": "Te mostrará tu anhelo más profundo. Aquello que te tiene atrapado.",
						"vietnamese": "Hắn ta sẽ cho các ngươi thấy nỗi khát khao mãnh liệt nhất của mình. Cái mà các ngươi bị mắc kẹt.",
						"thai": "มันจะแสดงความปรารถนาที่แรงกล้าที่สุดของพวกเจ้าให้เห็น ว่าพวกเจ้าถูกจองจำด้วยอะไร",
						"hindi": "वह तुम्हें तुम्हारी सबसे प्रबल लालसा दिखाएगा। कि तुम किसमें फंसे हो।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý gì vậy?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"speaker": "character_4"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "깨달음은 스스로 찾아야 하는 법.",
						"english": "Enlightenment must be sought within oneself.",
						"japanese": "悟りとは自ら見出すものだ。",
						"chinese": "顿悟需要自行探索。",
						"french": "L'illumination doit être trouvée par soi-même.",
						"spanish": "La iluminación debe ser buscada por uno mismo.",
						"vietnamese": "Sự giác ngộ phải tự tìm lấy.",
						"thai": "การตรัสรู้ต้องแสวงหาด้วยตนเอง",
						"hindi": "ज्ञान स्वयं ही खोजना पड़ता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 동굴 속에서, 탐험대는 망각의 의식에 갇혔다.",
						"english": "Within the frozen cave, the expedition team was trapped in a ritual of oblivion.",
						"japanese": "凍てついた洞窟の中で、探検隊は忘却の儀式に囚われた。",
						"chinese": "在冰冻的洞穴中，探险队被困于遗忘的仪式。",
						"french": "Au fond de la caverne gelée, l'équipe d'exploration fut piégée dans un rituel d'oubli.",
						"spanish": "Dentro de la cueva congelada, el equipo de expedición quedó atrapado en un ritual de olvido.",
						"vietnamese": "Trong hang động đóng băng, đội thám hiểm bị mắc kẹt trong nghi thức lãng quên.",
						"thai": "ในถ้ำที่เยือกแข็ง ทีมสำรวจถูกขังอยู่ในพิธีกรรมแห่งการลืมเลือน",
						"hindi": "जमी हुई गुफा के भीतर, अन्वेषण दल विस्मृति के अनुष्ठान में फंस गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하찮은 것들… 영광은 오직 반복 속에 존재한다.",
						"english": "Insignificant beings... Glory exists only in repetition.",
						"japanese": "取るに足らぬ者たちよ…栄光はただ、繰り返しの中にのみ存在する。",
						"chinese": "卑微之物…荣耀只存在于重复之中。",
						"french": "Êtres insignifiants... La gloire n'existe que dans la répétition.",
						"spanish": "Criaturas insignificantes... La gloria solo existe en la repetición.",
						"vietnamese": "Những kẻ hèn mọn... Vinh quang chỉ tồn tại trong sự lặp lại.",
						"thai": "สิ่งมีชีวิตไร้ค่า... เกียรติยศมีอยู่แต่ในการทำซ้ำเท่านั้น",
						"hindi": "तुच्छ प्राणी... महिमा केवल पुनरावृत्ति में ही निहित है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…くそ。まだ終わってない！",
						"chinese": "…该死。还没结束！",
						"french": "...Mince. Ce n'est pas encore fini !",
						"spanish": "...Maldita sea. ¡Todavía no ha terminado!",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc!",
						"thai": "...บ้าจริง. ยังไม่จบ!",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 오너라… 영광을 좇는 자여…",
						"english": "Return... seeker of glory...",
						"japanese": "再び来い…栄光を追う者よ…",
						"chinese": "再来吧…追寻荣耀者…",
						"french": "Reviens... ô toi qui poursuis la gloire...",
						"spanish": "Vuelve... oh, buscador de gloria...",
						"vietnamese": "Hãy quay lại đi... kẻ theo đuổi vinh quang...",
						"thai": "จงกลับมาอีกครั้ง... ผู้แสวงหาเกียรติยศเอ๋ย...",
						"hindi": "पुनः आओ... महिमा के अनुयायी..."
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 흩어지자, 유령 바이킹들의 의식이 멈췄다.",
						"english": "As the vast shadow dispersed, the ritual of the ghost Vikings ceased.",
						"japanese": "巨大な影が散ると、幽霊ヴァイキングたちの儀式が止まった。",
						"chinese": "随着巨大的阴影散去，幽灵维京人的仪式停止了。",
						"french": "Tandis que l'ombre immense se dispersait, le rituel des Vikings fantômes cessa.",
						"spanish": "A medida que la vasta sombra se dispersó, el ritual de los vikingos fantasmas cesó.",
						"vietnamese": "Khi bóng tối khổng lồ tan biến, nghi lễ của những chiến binh Viking ma đã dừng lại.",
						"thai": "เมื่อเงาขนาดมหึมาสลายไป พิธีกรรมของไวกิ้งผีก็หยุดลง",
						"hindi": "जैसे ही विशाल परछाईं बिखर गई, भूत वाइकिंग्स का अनुष्ठान रुक गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우… 여기까지…",
						"english": "Ugh... Barely... This far...",
						"japanese": "くっ…かろうじて…ここまでか…",
						"chinese": "呃啊…勉强…到这里了…",
						"french": "Ugh... À peine... jusque-là...",
						"spanish": "Ugh... Apenas... hasta aquí...",
						"vietnamese": "Khụ... Chỉ... đến đây thôi...",
						"thai": "อึก... แค่... มาถึงแค่นี้เอง...",
						"hindi": "उफ़... बस... यहीं तक..."
					}
				},
				{
					"content": {
						"korean": "이제… 끝난 건가?",
						"english": "Is it... over now?",
						"japanese": "これで…終わりなのか？",
						"chinese": "现在…结束了吗？",
						"french": "Est-ce... que c'est fini maintenant ?",
						"spanish": "¿Se... acabó ya?",
						"vietnamese": "Giờ thì... đã kết thúc rồi sao?",
						"thai": "ตอนนี้... มันจบแล้วเหรอ?",
						"hindi": "क्या... अब खत्म हो गया?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니… 시작에 불과하다… 이 루프는… 멈추지 않아…",
						"english": "No... it's just the beginning... This loop... won't stop...",
						"japanese": "いや…始まりに過ぎない…このループは…止まらない…",
						"chinese": "不…这只是个开始…这个循环…不会停止…",
						"french": "Non... ce n'est que le début... Cette boucle... ne s'arrêtera pas...",
						"spanish": "No... es solo el principio... Este bucle... no se detendrá...",
						"vietnamese": "Không... đây chỉ là khởi đầu thôi... Vòng lặp này... sẽ không dừng lại...",
						"thai": "ไม่... นี่เป็นแค่จุดเริ่มต้น... วงจรนี้... จะไม่หยุด...",
						"hindi": "नहीं... यह तो बस शुरुआत है... यह लूप... रुकेगा नहीं..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "루프?",
						"english": "A loop?",
						"japanese": "ループ？",
						"chinese": "循环？",
						"french": "Une boucle ?",
						"spanish": "¿Un bucle?",
						"vietnamese": "Vòng lặp ư?",
						"thai": "วงจรเหรอ?",
						"hindi": "लूप?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "유령들의 공허한 눈빛 속에서, 탐험대는 더 깊은 진실을 향해 나아가야 함을 직감했다.",
						"english": "Amidst the ghosts' hollow gazes, the expedition team instinctively knew they had to press onward towards a deeper truth.",
						"japanese": "亡霊たちの虚ろな眼差しの中で、探検隊はより深き真実へと進むべきだと直感した。",
						"chinese": "在幽灵们空洞的眼神中，探险队直觉地感到必须继续前行，探寻更深层的真相。",
						"french": "Au milieu des regards vides des fantômes, l'équipe d'exploration sentit instinctivement qu'elle devait s'enfoncer vers une vérité plus profonde.",
						"spanish": "En medio de las miradas huecas de los fantasmas, el equipo de expedición supo instintivamente que debían avanzar hacia una verdad más profunda.",
						"vietnamese": "Trong ánh mắt trống rỗng của những hồn ma, đội thám hiểm linh cảm rằng họ phải tiến sâu hơn vào sự thật.",
						"thai": "ท่ามกลางสายตาอันว่างเปล่าของเหล่าวิญญาณ ทีมสำรวจสัมผัสได้ว่าพวกเขาต้องก้าวไปสู่ความจริงที่ลึกซึ้งกว่าเดิม",
						"hindi": "भूले हुए प्रेतों की खोखली निगाहों के बीच, अन्वेषण दल ने सहज रूप से महसूस किया कि उन्हें एक गहरे सत्य की ओर बढ़ना होगा।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "침입자들이 감히… 나의 의식을 방해하는가.",
						"english": "Intruders dare... interrupt my ritual?",
						"japanese": "侵入者がよくも… 我が儀式を邪魔するとは。",
						"chinese": "闯入者竟敢… 打扰我的仪式。",
						"french": "Des intrus osent... interrompre mon rituel ?",
						"spanish": "¿Los intrusos se atreven... a interrumpir mi ritual?",
						"vietnamese": "Kẻ xâm nhập dám… làm gián đoạn nghi lễ của ta?",
						"thai": "ผู้บุกรุกกล้า… ขัดขวางพิธีกรรมของข้าหรือ",
						"hindi": "घुसपैठिए हिम्मत करते हैं... मेरे अनुष्ठान में बाधा डालने की?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 유령들을 조종하는 건가?",
						"english": "Are you controlling the spirits?",
						"japanese": "お前が幽霊たちを操っているのか？",
						"chinese": "是你在控制那些幽灵吗？",
						"french": "C'est toi qui contrôles les esprits ?",
						"spanish": "¿Estás controlando a los espíritus?",
						"vietnamese": "Ngươi đang điều khiển các linh hồn sao?",
						"thai": "เจ้าควบคุมวิญญาณพวกนั้นอยู่หรือ",
						"hindi": "क्या तुम भूतों को नियंत्रित कर रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 고통은 영원한 영광을 위한 제물이다.",
						"english": "This suffering is a sacrifice for eternal glory.",
						"japanese": "この苦痛は永遠の栄光のための供物だ。",
						"chinese": "这份痛苦是永恒荣耀的祭品。",
						"french": "Cette souffrance est un sacrifice pour la gloire éternelle.",
						"spanish": "Este sufrimiento es un sacrificio para la gloria eterna.",
						"vietnamese": "Nỗi đau này là vật tế cho vinh quang vĩnh cửu.",
						"thai": "ความทุกข์ทรมานนี้คือเครื่องบูชาเพื่อเกียรติยศนิรันดร์",
						"hindi": "यह पीड़ा अनंत महिमा के लिए एक बलिदान है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아직도 깨닫지 못했나? 네가 갇힌 것은 영광이 아니라…",
						"english": "Still haven't realized? What you're trapped in isn't glory, but...",
						"japanese": "まだ気づかないのか？ お前が囚われているのは栄光ではなく…",
						"chinese": "还没意识到吗？你被困住的不是荣耀，而是…",
						"french": "Tu n'as toujours pas compris ? Ce dans quoi tu es piégé n'est pas la gloire, mais...",
						"spanish": "¿Todavía no te has dado cuenta? En lo que estás atrapado no es gloria, sino...",
						"vietnamese": "Vẫn chưa nhận ra ư? Thứ ngươi đang mắc kẹt không phải vinh quang, mà là...",
						"thai": "ยังไม่รู้ตัวอีกหรือ? สิ่งที่เจ้าติดกับดักอยู่ไม่ใช่เกียรติยศ แต่เป็น...",
						"hindi": "अभी तक एहसास नहीं हुआ? जिसमें तुम फंसे हो, वह महिमा नहीं, बल्कि..."
					},
					"speaker": "ivar"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐라! 과거의 망령이여!",
						"english": "Silence! Specter of the past!",
						"japanese": "黙れ！過去の亡霊め！",
						"chinese": "住口！过去的亡灵！",
						"french": "Tais-toi ! Spectre du passé !",
						"spanish": "¡Cállate! ¡Espectro del pasado!",
						"vietnamese": "Câm mồm! Hồn ma của quá khứ!",
						"thai": "หุบปาก! วิญญาณร้ายแห่งอดีต!",
						"hindi": "चुप रहो! अतीत के प्रेत!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흐음…",
						"english": "Hmm...",
						"japanese": "ふむ…",
						"chinese": "嗯…",
						"french": "Hmm...",
						"spanish": "Hmm...",
						"vietnamese": "Hừm...",
						"thai": "หืม...",
						"hindi": "हम्म..."
					},
					"speaker": "ivar"
				},
				{
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르!",
						"english": "Ivar!",
						"japanese": "イヴァル！",
						"chinese": "伊瓦尔！",
						"french": "Ivar !",
						"spanish": "¡Ivar!",
						"vietnamese": "Ivar!",
						"thai": "ไอบาร์!",
						"hindi": "आईवर!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희도 곧 나의 일부가 될 것이다. 이 망각의 고통 속에서.",
						"english": "You too shall soon become part of me. In this torment of oblivion.",
						"japanese": "お前たちもすぐに私の一部となるだろう。この忘却の苦痛の中で。",
						"chinese": "你们也很快会成为我的一部分。在这遗忘的痛苦中。",
						"french": "Vous aussi, vous ferez bientôt partie de moi. Dans ce tourment d'oubli.",
						"spanish": "Vosotros también pronto seréis parte de mí. En este tormento de olvido.",
						"vietnamese": "Các ngươi cũng sẽ sớm trở thành một phần của ta. Trong nỗi thống khổ lãng quên này.",
						"thai": "พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของข้า ในความเจ็บปวดแห่งการลืมเลือนนี้",
						"hindi": "तुम भी जल्द ही मेरा हिस्सा बन जाओगे। इस विस्मृति की पीड़ा में।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 동굴, 과거의 전장이 깨어났다.",
			"유령 바이킹의 울부짖음이 메아리쳤다.",
			"반복되는 망각의 의식 속에서, 그들은 무엇을 그리워하는가?",
			"영광의 끝은 허무함일 뿐인가.",
			"진실은 더 깊은 곳에 얼어붙어 있었다."
		],
		"english": [
			"The frozen cave, a battlefield of the past, awakened.",
			"The ghostly cry of Vikings echoed.",
			"In the repeating ritual of oblivion, what do they long for?",
			"Is the end of glory merely emptiness?",
			"The truth was frozen deeper within."
		],
		"japanese": [
			"凍てついた洞窟、過去の戦場が目覚めた。",
			"亡霊ヴァイキングの咆哮が響き渡った。",
			"繰り返される忘却の儀式の中で、彼らは何を懐かしむのか？",
			"栄光の終焉は虚無に過ぎないのか。",
			"真実はもっと深い場所に凍てついていた。"
		],
		"chinese": [
			"冰冻的洞穴，过去的战场苏醒了。",
			"幽灵维京人的嚎叫声回荡。",
			"在重复的遗忘仪式中，他们渴望什么？",
			"荣耀的终结仅仅是虚无吗？",
			"真相被冰封在更深处。"
		],
		"french": [
			"La grotte gelée, un champ de bataille du passé, s'est réveillée.",
			"Le cri fantomatique des Vikings résonnait.",
			"Dans le rituel répétitif de l'oubli, que désirent-ils ?",
			"La fin de la gloire n'est-elle que vide ?",
			"La vérité était gelée plus profondément."
		],
		"spanish": [
			"La cueva congelada, un campo de batalla del pasado, despertó.",
			"El grito fantasmal de los vikingos resonó.",
			"En el ritual repetitivo del olvido, ¿qué anhelan?",
			"¿Es el final de la gloria solo vacío?",
			"La verdad estaba congelada en lo más profundo."
		],
		"vietnamese": [
			"Hang động băng giá, chiến trường quá khứ đã thức tỉnh.",
			"Tiếng gào thét của các Viking ma quái vang vọng.",
			"Trong nghi lễ lãng quên lặp đi lặp lại, họ khao khát điều gì?",
			"Liệu sự kết thúc của vinh quang chỉ là hư vô?",
			"Sự thật bị đóng băng sâu hơn bên trong."
		],
		"thai": [
			"ถ้ำน้ำแข็ง สนามรบในอดีตได้ตื่นขึ้นแล้ว",
			"เสียงครวญครางของไวกิ้งผีสิงก้องกังวาน",
			"ในพิธีกรรมแห่งการลืมเลือนที่ซ้ำซาก พวกเขาโหยหาอะไร?",
			"จุดจบของความรุ่งโรจน์เป็นเพียงความว่างเปล่าหรือ?",
			"ความจริงถูกแช่แข็งอยู่ในที่ลึกกว่านั้น"
		],
		"hindi": [
			"जमी हुई गुफा, अतीत का युद्धक्षेत्र जाग उठा।",
			"भूतिया वाइकिंग की चीखें गूँज उठीं।",
			"विस्मृति के दोहराए जाने वाले अनुष्ठान में, वे किस चीज़ के लिए तरसते हैं?",
			"क्या महिमा का अंत केवल खालीपन है?",
			"सच्चाई और गहरे में जमी हुई थी।"
		]
	}
} as const;
