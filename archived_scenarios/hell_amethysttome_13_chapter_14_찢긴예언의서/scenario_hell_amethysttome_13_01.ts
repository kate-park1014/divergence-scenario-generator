export const scenario_hell_amethysttome_13_01 = {
	"scenario_id": "hell_amethysttome_13_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
						"korean": "불타는 심연의 입구. 찢겨진 진실이 조각난 예언과 뒤엉킨 영원한 고통의 서고.",
						"english": "Gateway to the Burning Abyss. Archives of Eternal Suffering, where shattered truths intertwine with fragmented prophecies.",
						"japanese": "燃え盛る深淵の入り口。引き裂かれた真実が断片的な予言と絡み合う永遠の苦痛の書庫。",
						"chinese": "燃烧深渊的入口。永恒苦痛的档案，破碎的真相与残缺的预言交织。",
						"french": "Porte de l'Abysse en Feu. Archives de la Souffrance Éternelle, où les vérités déchirées s'entremêlent aux prophéties fragmentées.",
						"spanish": "Entrada al Abismo Ardiente. Archivos del Sufrimiento Eterno, donde verdades desgarradas se entrelazan con profecías fragmentadas.",
						"vietnamese": "Cổng vào Vực Sâu Rực Lửa. Thư viện Khổ Đau Vĩnh Hằng, nơi những sự thật tan vỡ đan xen với những lời tiên tri vụn vỡ.",
						"thai": "ทางเข้าสู่ห้วงเหวเพลิงไหม้ คลังบันทึกแห่งความทุกข์ทรมานนิรันดร์ ที่ซึ่งความจริงที่แตกสลายพันกันอยู่กับคำพยากรณ์ที่เป็นเสี่ยงๆ",
						"hindi": "जलते हुए पाताल का प्रवेश द्वार। शाश्वत पीड़ा के अभिलेखागार, जहाँ टूटे हुए सत्य खंडित भविष्यवाणियों से गुंथे हुए हैं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 지옥의 서고?",
						"english": "Is this... the Archives of Hell?",
						"japanese": "ここが…地獄の書庫か？",
						"chinese": "这里是……地狱的档案室吗？",
						"french": "C'est ici... les Archives de l'Enfer ?",
						"spanish": "¿Es esto... los Archivos del Infierno?",
						"vietnamese": "Đây là... Thư viện Địa ngục?",
						"thai": "นี่คือ... คลังบันทึกแห่งนรก?",
						"hindi": "क्या यह... नर्क के अभिलेखागार हैं?"
					}
				},
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…왔군. 환영한다. 반복되는 비극의 기록 속에.",
						"english": "...You've come. Welcome. Into the records of repeating tragedy.",
						"japanese": "…来たか。歓迎する。繰り返される悲劇の記録の中へ。",
						"chinese": "……你来了。欢迎。来到这重复悲剧的记录之中。",
						"french": "...Vous êtes venu. Bienvenue. Dans les annales de la tragédie répétée.",
						"spanish": "...Has llegado. Bienvenido. A los registros de la tragedia recurrente.",
						"vietnamese": "...Ngươi đã đến. Chào mừng. Vào những ghi chép của bi kịch lặp lại.",
						"thai": "...เจ้ามาแล้ว ยินดีต้อนรับ สู่บันทึกแห่งโศกนาฏกรรมที่ซ้ำรอย",
						"hindi": "...तुम आ गए। स्वागत है। दोहराई जाने वाली त्रासदी के अभिलेखों में।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你在说什么？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "หมายความว่าอย่างไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "이곳은 모든 것이 반복되는 감옥. 과거가 현재를 낳고, 미래를 예견하지.",
						"english": "This is a prison where everything repeats. The past gives birth to the present, and foretells the future.",
						"japanese": "ここはすべてが繰り返される牢獄だ。過去が現在を生み、未来を予見する。",
						"chinese": "这里是一切重复的监狱。过去孕育现在，并预示未来。",
						"french": "C'est une prison où tout se répète. Le passé engendre le présent et prédit l'avenir.",
						"spanish": "Esta es una prisión donde todo se repite. El pasado da a luz al presente y predice el futuro.",
						"vietnamese": "Đây là nhà tù nơi mọi thứ lặp lại. Quá khứ sinh ra hiện tại, và tiên đoán tương lai.",
						"thai": "ที่นี่คือคุกที่ทุกสิ่งซ้ำรอย อดีตก่อกำเนิดปัจจุบันและทำนายอนาคต",
						"hindi": "यह एक ऐसी जेल है जहाँ सब कुछ दोहराया जाता है। अतीत वर्तमान को जन्म देता है, और भविष्य की भविष्यवाणी करता है।"
					},
					"emotion": "base",
					"speaker": "ash",
					"type": "speech"
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
					"speaker": "ash",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ash",
					"content": {
						"korean": "이 서고의 진실은 너희를 찢을 것이다. 영원히.",
						"english": "The truth of these archives will tear you apart. Forever.",
						"japanese": "この書庫の真実は、お前たちを引き裂くだろう。永遠に。",
						"chinese": "这档案室的真相会撕裂你们。永恒地。",
						"french": "La vérité de ces archives vous déchirera. Pour toujours.",
						"spanish": "La verdad de estos archivos os destrozará. Para siempre.",
						"vietnamese": "Sự thật của thư viện này sẽ xé nát các ngươi. Mãi mãi.",
						"thai": "ความจริงของคลังบันทึกนี้จะฉีกกระชากเจ้าให้เป็นชิ้นๆ ตลอดไป",
						"hindi": "इन अभिलेखागारों का सत्य तुम्हें चीर देगा। हमेशा के लिए।"
					}
				},
				{
					"content": {
						"korean": "진실? 뭘 숨기고 있는데?",
						"english": "Truth? What are you hiding?",
						"japanese": "真実？何を隠しているの？",
						"chinese": "真相？你藏着什么？",
						"french": "La vérité ? Que caches-tu ?",
						"spanish": "¿La verdad? ¿Qué estás ocultando?",
						"vietnamese": "Sự thật? Ngươi đang giấu điều gì?",
						"thai": "ความจริง? คุณซ่อนอะไรอยู่?",
						"hindi": "सच? क्या छुपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ash",
					"type": "speech",
					"content": {
						"korean": "숨겨진 것이 아니야. 다만, 너무나도 명백해서 아무도 믿지 못할 뿐.",
						"english": "It's not hidden. It's just too obvious for anyone to believe.",
						"japanese": "隠されているわけではない。ただ、あまりにも明白すぎて、誰も信じられないだけだ。",
						"chinese": "这不是隐藏的。只是太明显了，没有人会相信。",
						"french": "Ce n'est pas caché. C'est juste trop évident pour que quiconque y croie.",
						"spanish": "No está oculto. Es simplemente demasiado obvio para que alguien lo crea.",
						"vietnamese": "Không phải là giấu giếm. Chỉ là quá rõ ràng đến mức không ai tin nổi.",
						"thai": "มันไม่ได้ถูกซ่อนไว้ แค่มันชัดเจนเกินไปจนไม่มีใครเชื่อ",
						"hindi": "यह छिपा हुआ नहीं है। बस इतना स्पष्ट है कि कोई भी विश्वास नहीं कर पाएगा।"
					}
				},
				{
					"content": {
						"korean": "고통스러운 루프는 이미 시작되었다.",
						"english": "The painful loop has already begun.",
						"japanese": "苦痛のループは既に始まっている。",
						"chinese": "痛苦的循环已经开始了。",
						"french": "La boucle douloureuse a déjà commencé.",
						"spanish": "El doloroso bucle ya ha comenzado.",
						"vietnamese": "Vòng lặp đau khổ đã bắt đầu rồi.",
						"thai": "วงจรแห่งความเจ็บปวดได้เริ่มต้นขึ้นแล้ว",
						"hindi": "दर्दनाक चक्र पहले ही शुरू हो चुका है।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ash",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "오래된 석판에 새겨진 잊혀진 예언자의 형상… 그가 처음으로 고통을 기록했지.",
						"english": "The forgotten prophet etched on an ancient stone tablet... He was the first to record the suffering.",
						"japanese": "古い石板に刻まれた忘れられた預言者の姿… 彼が最初に苦痛を記録した。",
						"chinese": "刻在古老石板上的被遗忘的先知形象… 他是第一个记录痛苦的人。",
						"french": "La figure du prophète oublié gravée sur une ancienne tablette de pierre... Il fut le premier à consigner la souffrance.",
						"spanish": "La figura del profeta olvidado grabada en una antigua tablilla de piedra... Él fue el primero en registrar el sufrimiento.",
						"vietnamese": "Hình ảnh nhà tiên tri bị lãng quên khắc trên tấm bia đá cổ... Người đã ghi lại nỗi đau đầu tiên.",
						"thai": "รูปปั้นของศาสดาผู้ถูกลืมที่แกะสลักบนแผ่นหินโบราณ... เขาเป็นคนแรกที่บันทึกความทุกข์ทรมาน",
						"hindi": "एक प्राचीन शिला पर खुदी हुई भूले हुए पैगंबर की आकृति... उसने सबसे पहले पीड़ा को दर्ज किया था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "예언자? 그는 누군데?",
						"english": "A prophet? Who is he?",
						"japanese": "預言者？彼は誰だ？",
						"chinese": "先知？他是谁？",
						"french": "Un prophète ? Qui est-il ?",
						"spanish": "¿Un profeta? ¿Quién es él?",
						"vietnamese": "Một nhà tiên tri? Ông ta là ai?",
						"thai": "ศาสดา? เขาเป็นใคร?",
						"hindi": "एक पैगंबर? वह कौन है?"
					}
				},
				{
					"content": {
						"korean": "시간이 모든 것을 삼켰다. 이름마저도.",
						"english": "Time has swallowed everything. Even his name.",
						"japanese": "時間はすべてを飲み込んだ。名前さえも。",
						"chinese": "时间吞噬了一切。甚至连名字也不例外。",
						"french": "Le temps a tout englouti. Même son nom.",
						"spanish": "El tiempo lo ha devorado todo. Incluso su nombre.",
						"vietnamese": "Thời gian đã nuốt chửng mọi thứ. Kể cả tên của người đó.",
						"thai": "กาลเวลาได้กลืนกินทุกสิ่ง แม้กระทั่งชื่อ",
						"hindi": "समय ने सब कुछ निगल लिया है। यहाँ तक कि उसका नाम भी।"
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다만, 그 고통은 여전히 이 서고에 울려 퍼지고 있어.",
						"english": "However, that suffering still echoes in this library.",
						"japanese": "だが、その苦痛は今もこの書庫に響き渡っている。",
						"chinese": "然而，那份痛苦依然在这座图书馆里回荡。",
						"french": "Cependant, cette souffrance résonne toujours dans cette bibliothèque.",
						"spanish": "Sin embargo, ese sufrimiento todavía resuena en esta biblioteca.",
						"vietnamese": "Tuy nhiên, nỗi đau đó vẫn còn vang vọng trong thư viện này.",
						"thai": "อย่างไรก็ตาม ความทุกข์ทรมานนั้นยังคงก้องกังวานอยู่ในหอสมุดแห่งนี้",
						"hindi": "हालांकि, वह पीड़ा अभी भी इस पुस्तकालय में गूंज रही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ash"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ash",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ash",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이곳에 들어선 순간, 너희는 이미 그 기록의 일부가 된 거다.",
						"english": "The moment you entered here, you became part of that record.",
						"japanese": "ここに入った瞬間、君たちは既にその記録の一部となったのだ。",
						"chinese": "当你踏入这里的那一刻，你已经成为那份记录的一部分。",
						"french": "Dès l'instant où vous êtes entrés ici, vous êtes devenus une partie de ce registre.",
						"spanish": "En el momento en que entraste aquí, ya te convertiste en parte de ese registro.",
						"vietnamese": "Khoảnh khắc ngươi bước vào đây, ngươi đã trở thành một phần của ký ức đó rồi.",
						"thai": "เมื่อคุณก้าวเข้ามาที่นี่ คุณก็กลายเป็นส่วนหนึ่งของบันทึกนั้นแล้ว",
						"hindi": "जिस पल तुम यहाँ आए, तुम उस रिकॉर्ड का हिस्सा बन गए।"
					}
				},
				{
					"content": {
						"korean": "우린 루프를 끊으러 왔어!",
						"english": "We came to break the loop!",
						"japanese": "私たちはループを断ち切るために来た！",
						"chinese": "我们来打破循环！",
						"french": "Nous sommes venus briser la boucle !",
						"spanish": "¡Hemos venido a romper el bucle!",
						"vietnamese": "Chúng ta đến để phá vỡ vòng lặp!",
						"thai": "เรามาที่นี่เพื่อทำลายวงจร!",
						"hindi": "हम लूप को तोड़ने आए हैं!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ash",
					"content": {
						"korean": "어리석군. 끊는다고? 이 지옥은 모든 것을 집어삼키는 심연이야.",
						"english": "Foolish. Break it? This hell is an abyss that devours everything.",
						"japanese": "愚かだ。断ち切るだと？この地獄はすべてを飲み込む深淵だ。",
						"chinese": "愚蠢。打破它？这个地狱是一个吞噬一切的深渊。",
						"french": "Stupide. Le briser ? Cet enfer est un abîme qui dévore tout.",
						"spanish": "Necio. ¿Romperlo? Este infierno es un abismo que lo devora todo.",
						"vietnamese": "Ngốc nghếch. Phá vỡ sao? Địa ngục này là một vực thẳm nuốt chửng mọi thứ.",
						"thai": "โง่เขลา ตัดมันทิ้งเหรอ? นรกนี้คือเหวลึกที่กลืนกินทุกสิ่ง",
						"hindi": "मूर्ख। इसे तोड़ना है? यह नरक एक अतल गहराई है जो सब कुछ निगल जाती है।"
					}
				},
				{
					"content": {
						"korean": "…그럼 너도 포기한 거야?",
						"english": "…So you've given up too?",
						"japanese": "「…お前も諦めたのか？」",
						"chinese": "“……你也放弃了吗？”",
						"french": "...Alors tu as abandonné aussi ?",
						"spanish": "...¿Así que tú también te rendiste?",
						"vietnamese": "...Vậy là ngươi cũng bỏ cuộc rồi sao?",
						"thai": "...งั้นเจ้าก็ยอมแพ้แล้วหรือ?",
						"hindi": "...तो तुमने भी हार मान ली?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이미 늦었다는 것을 알 뿐.",
						"english": "I just know it's already too late.",
						"japanese": "「もう手遅れだと知っているだけだ。」",
						"chinese": "“我只是知道已经太迟了。”",
						"french": "Je sais juste qu'il est déjà trop tard.",
						"spanish": "Solo sé que ya es demasiado tarde.",
						"vietnamese": "Chỉ là ta biết đã quá muộn rồi.",
						"thai": "แค่รู้ว่ามันสายเกินไปแล้ว",
						"hindi": "बस इतना जानता हूँ कि अब बहुत देर हो चुकी है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석군… 파편은… 다시… 모인다… 흐흐…",
						"english": "Foolish... The fragments... gather... again... Heh heh...",
						"japanese": "「愚か者め… 破片は… 再び… 集まる… フフ…」",
						"chinese": "“愚蠢……碎片……再次……聚集……呵呵……”",
						"french": "Stupide... Les fragments... se rassemblent... à nouveau... Heh heh...",
						"spanish": "Estúpido... Los fragmentos... se reúnen... de nuevo... Je je...",
						"vietnamese": "Ngốc nghếch... Các mảnh vỡ... lại... tụ hợp... Hề hề...",
						"thai": "ช่างโง่เขลา... ชิ้นส่วน... จะ... รวมกัน... อีกครั้ง... ฮึฮึ...",
						"hindi": "मूर्ख... टुकड़े... फिर से... इकट्ठा... होते हैं... ही ही..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "뭐라고…?",
						"english": "What...?",
						"japanese": "「な、なんだって…？」",
						"chinese": "“你说什么……？”",
						"french": "Quoi... ?",
						"spanish": "¿Qué...?",
						"vietnamese": "Ngươi nói gì...?",
						"thai": "ว่าไงนะ...?",
						"hindi": "क्या...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 정체 모를 자. 그러나 기록된 비극은 아직 끝나지 않았다. 다음 장이 시작된다.",
						"english": "The unknown figure falls. But the recorded tragedy is not yet over. The next chapter begins.",
						"japanese": "「倒れた正体不明の者。しかし、記録された悲劇はまだ終わっていない。次の章が始まる。」",
						"chinese": "“倒下的无名之人。然而，被记录的悲剧尚未结束。下一章即将开始。”",
						"french": "L'inconnu tombe. Mais la tragédie enregistrée n'est pas encore terminée. Le prochain chapitre commence.",
						"spanish": "La figura desconocida cae. Pero la tragedia registrada aún no ha terminado. El próximo capítulo comienza.",
						"vietnamese": "Kẻ bí ẩn ngã xuống. Nhưng bi kịch đã được ghi lại vẫn chưa kết thúc. Chương tiếp theo bắt đầu.",
						"thai": "ร่างปริศนาร่วงหล่นลง แต่โศกนาฏกรรมที่ถูกบันทึกไว้ยังไม่จบสิ้น บทต่อไปกำลังจะเริ่มขึ้น",
						"hindi": "अज्ञात आकृति गिर जाती है। लेकिन दर्ज की गई त्रासदी अभी खत्म नहीं हुई है। अगला अध्याय शुरू होता है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "영원히… 이 기록에 갇혀라…!",
						"english": "Forever… trapped in this record…!",
						"japanese": "永遠に… この記録に囚われろ…！",
						"chinese": "永恒地…被困在这记录中吧…!",
						"french": "Pour toujours… emprisonné dans cette chronique… !",
						"spanish": "¡Para siempre… atrapado en este registro…!",
						"vietnamese": "Mãi mãi… bị giam cầm trong ký ức này…!",
						"thai": "ตลอดกาล… ถูกขังอยู่ในบันทึกนี้…!",
						"hindi": "हमेशा के लिए… इस अभिलेख में कैद हो जाओ…!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc.",
						"thai": "…ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"content": {
						"korean": "심연의 틈새로 빨려 들어가는 그림자. 비극의 기록은 다시 이어진다.",
						"english": "A shadow, drawn into the abyss's rift. The tragic record continues.",
						"japanese": "深淵の狭間へ吸い込まれる影。悲劇の記録は再び続く。",
						"chinese": "被吸入深渊裂隙的影子。悲剧的记录再次延续。",
						"french": "Une ombre aspirée dans la faille de l'abîme. La chronique tragique se poursuit.",
						"spanish": "Una sombra, arrastrada al abismo. El registro trágico continúa.",
						"vietnamese": "Bóng hình bị hút vào khe nứt vực sâu. Biên niên sử bi kịch lại tiếp diễn.",
						"thai": "เงาที่ถูกดูดเข้าไปในรอยแยกแห่งห้วงเหว. บันทึกโศกนาฏกรรมดำเนินต่อไป.",
						"hindi": "गहराई की दरार में खींची जाती छाया। दुखद अभिलेख जारी रहता है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "고대 서고의 가장 깊은 곳. 섬뜩한 기운이 지배한다.",
						"english": "The deepest part of the ancient archive. A chilling aura dominates.",
						"japanese": "「古の書庫の最奥。不気味な気配が支配する。」",
						"chinese": "“古老书库的最深处。一股森冷的气息弥漫着。”",
						"french": "La partie la plus profonde des archives antiques. Une aura glaçante domine.",
						"spanish": "La parte más profunda del archivo antiguo. Un aura escalofriante domina.",
						"vietnamese": "Nơi sâu thẳm nhất của thư khố cổ. Một luồng khí lạnh lẽo bao trùm.",
						"thai": "ส่วนที่ลึกที่สุดของหอจดหมายเหตุโบราณ บรรยากาศอันน่าขนลุกครอบงำ",
						"hindi": "प्राचीन अभिलेखागार का सबसे गहरा हिस्सा। एक भयानक आभा हावी है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어… 나타났군.",
						"english": "Finally... you've appeared.",
						"japanese": "「ついに…現れたか。」",
						"chinese": "“终于……出现了。”",
						"french": "Enfin... vous êtes apparu.",
						"spanish": "Finalmente... apareciste.",
						"vietnamese": "Cuối cùng... ngươi cũng xuất hiện rồi.",
						"thai": "ในที่สุด...เจ้าก็ปรากฏตัว",
						"hindi": "आखिरकार... तुम आ ही गए।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "…가장 끔찍한 기록이 너희를 기다린다.",
						"english": "...The most horrific record awaits you.",
						"japanese": "「…最も恐ろしい記録が、お前たちを待っている。」",
						"chinese": "“……最恐怖的记录正等着你们。”",
						"french": "...Le plus horrible des récits vous attend.",
						"spanish": "...El registro más horrible os espera.",
						"vietnamese": "...Kỷ lục kinh hoàng nhất đang chờ đợi các ngươi.",
						"thai": "...บันทึกที่น่ากลัวที่สุดกำลังรอพวกเจ้าอยู่",
						"hindi": "...सबसे भयानक अभिलेख तुम्हारा इंतजार कर रहा है।"
					},
					"emotion": "sad",
					"speaker": "ash",
					"type": "speech"
				},
				{
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit",
					"speaker": "ash"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						4
					],
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "새로운 기록인가. 이번엔 어떤 절망을 써 내려갈 텐가?",
						"english": "A new record? What despair will you write this time?",
						"japanese": "「新たな記録か。今度はどんな絶望を書き記すつもりだ？」",
						"chinese": "“是新的记录吗？这次又将书写怎样的绝望？”",
						"french": "Un nouveau récit ? Quelle désespoir écrirez-vous cette fois ?",
						"spanish": "¿Un nuevo registro? ¿Qué desesperación escribirás esta vez?",
						"vietnamese": "Một kỷ lục mới sao? Lần này ngươi sẽ viết nên sự tuyệt vọng nào?",
						"thai": "บันทึกใหม่หรือ? ครั้งนี้เจ้าจะเขียนความสิ้นหวังแบบไหนลงไป?",
						"hindi": "एक नया अभिलेख? इस बार तुम कौन सी निराशा लिखोगे?"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네 비극적인 운명은 우리가 끝낼 것이다!",
						"english": "We will end your tragic fate!",
						"japanese": "「お前の悲劇的な運命は、我々が終わらせる！」",
						"chinese": "“你的悲剧命运将由我们终结！”",
						"french": "Nous mettrons fin à votre destin tragique !",
						"spanish": "¡Nosotros pondremos fin a tu trágico destino!",
						"vietnamese": "Chúng ta sẽ chấm dứt số phận bi thảm của ngươi!",
						"thai": "โชคชะตาอันน่าเศร้าของเจ้า เราจะยุติมัน!",
						"hindi": "हम तुम्हारे दुखद भाग्य का अंत करेंगे!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"불타는 심연의 입구. 영원한 고통의 서고.",
			"과거의 기록은 현재를 반복하고, 모든 미래는 이미 쓰여 있다.",
			"고대 파수꾼 애쉬는 경고했다. 이 지옥의 끔찍한 진실을.",
			"절망 속에서, 멈출 수 없는 비극이 시작된다."
		],
		"english": [
			"Gateway to the Burning Abyss. Archives of Eternal Suffering.",
			"Records of the past repeat the present, and all futures are already written.",
			"Ancient Warden Ash warned. Of this hell's terrifying truth.",
			"In despair, an unstoppable tragedy begins."
		],
		"japanese": [
			"燃え盛る深淵の入り口。永遠の苦痛の書庫。",
			"過去の記録は現在を繰り返し、すべての未来は既に書かれている。",
			"古の番人アッシュは警告した。この地獄の恐ろしい真実を。",
			"絶望の中、止められない悲劇が始まる。"
		],
		"chinese": [
			"燃烧深渊的入口。永恒苦痛的档案。",
			"过去的记录重复着现在，所有的未来都已注定。",
			"远古守望者艾什曾警告。关于这地狱的可怕真相。",
			"绝望之中，一场不可阻挡的悲剧开始了。"
		],
		"french": [
			"Porte de l'Abysse en Feu. Archives de la Souffrance Éternelle.",
			"Les annales du passé répètent le présent, et tout avenir est déjà écrit.",
			"L'Ancienne Gardienne Ash a averti. De l'effroyable vérité de cet enfer.",
			"Dans le désespoir, une tragédie inéluctable commence."
		],
		"spanish": [
			"Entrada al Abismo Ardiente. Archivos del Sufrimiento Eterno.",
			"Los registros del pasado repiten el presente, y todo futuro ya está escrito.",
			"La Antigua Guardiana Ash advirtió. De la terrible verdad de este infierno.",
			"En la desesperación, una tragedia imparable comienza."
		],
		"vietnamese": [
			"Cổng vào Vực Sâu Rực Lửa. Thư viện Khổ Đau Vĩnh Hằng.",
			"Ký ức quá khứ lặp lại hiện tại, và mọi tương lai đều đã được định đoạt.",
			"Người Canh Gác Cổ Đại Ash đã cảnh báo. Về sự thật kinh hoàng của địa ngục này.",
			"Trong tuyệt vọng, một bi kịch không thể ngăn cản bắt đầu."
		],
		"thai": [
			"ทางเข้าสู่ห้วงเหวเพลิงไหม้ คลังบันทึกแห่งความทุกข์ทรมานนิรันดร์",
			"บันทึกแห่งอดีตซ้ำรอยปัจจุบัน และอนาคตทั้งหมดถูกลิขิตไว้แล้ว",
			"ผู้พิทักษ์โบราณแอชเตือนแล้ว ถึงความจริงอันน่าสะพรึงของนรกนี้",
			"ท่ามกลางความสิ้นหวัง โศกนาฏกรรมที่ไม่อาจหยุดยั้งได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"जलते हुए पाताल का प्रवेश द्वार। शाश्वत पीड़ा के अभिलेखागार।",
			"अतीत के अभिलेख वर्तमान को दोहराते हैं, और सभी भविष्य पहले ही लिखे जा चुके हैं।",
			"प्राचीन वार्डन ऐश ने चेतावनी दी थी। इस नर्क के भयानक सत्य की।",
			"निराशा में, एक अदम्य त्रासदी शुरू होती है।"
		]
	}
} as const;
