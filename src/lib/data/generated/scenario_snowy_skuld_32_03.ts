export const scenario_snowy_skuld_32_03 = {
	"scenario_id": "snowy_skuld_32_03",
	"order": 3,
	"act": "rising",
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
					"speaker": "narrator",
					"content": {
						"korean": "깊은 얼음 동굴. 벽면의 룬이 희미하게 빛났다.",
						"english": "A deep ice cave. Runes on the wall glowed faintly.",
						"japanese": "深い氷の洞窟。壁のルーンがかすかに光る。",
						"chinese": "一个幽深的冰洞。墙壁上的符文微弱地闪烁着。",
						"french": "Une profonde caverne de glace. Les runes murales brillaient faiblement.",
						"spanish": "Una profunda cueva de hielo. Las runas en la pared brillaban débilmente.",
						"vietnamese": "Hang băng sâu thẳm. Những ký tự trên tường phát sáng mờ ảo.",
						"thai": "ถ้ำน้ำแข็งลึก รูนบนผนังเปล่งแสงสลัว",
						"hindi": "एक गहरी बर्फीली गुफा। दीवार पर के रुन मंद-मंद चमक रहे थे।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						4
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이 룬… 전에 본 것과 달라.",
						"english": "...These runes... they're different from what I've seen before.",
						"japanese": "…このルーン…以前見たものとは違う。",
						"chinese": "……这些符文……和之前看到的不一样。",
						"french": "...Ces runes... elles sont différentes de celles que j'ai vues auparavant.",
						"spanish": "...Estas runas... son diferentes a las que vi antes.",
						"vietnamese": "...Những ký tự này... khác với những gì tôi từng thấy.",
						"thai": "…รูนพวกนี้… ไม่เหมือนกับที่เคยเห็นมาก่อน",
						"hindi": "...ये रुन... पहले देखे गए से अलग हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻인데?",
						"english": "What does it mean?",
						"japanese": "どういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Nghĩa là gì?",
						"thai": "มันหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "스쿌드… 가장 빠르고… 가장 멀리 내다보던 배.",
						"english": "Skjold... the fastest ship... that saw the farthest.",
						"japanese": "スヒョルド…最も速く…最も遠くまで見通していた船。",
						"chinese": "斯克约德……最快……看得最远的船。",
						"french": "Skjold... le navire le plus rapide... qui voyait le plus loin.",
						"spanish": "Skjold... el barco más rápido... que veía más lejos.",
						"vietnamese": "Skjold... con tàu nhanh nhất... nhìn xa nhất.",
						"thai": "สกยอลด์… เรือที่เร็วที่สุด… ที่มองเห็นได้ไกลที่สุด",
						"hindi": "स्कोल्ड... सबसे तेज़ जहाज़... जो सबसे दूर तक देखता था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "선단의 맨 앞에서 길을 열던… 척후선이었어.",
						"english": "It was a scout ship... leading the fleet from the very front.",
						"japanese": "船団の先頭で道を開いていた…斥候船だったんだ。",
						"chinese": "它是侦察船……在舰队的最前方开辟道路。",
						"french": "C'était un navire éclaireur... qui ouvrait la voie à la flotte depuis l'avant.",
						"spanish": "Era un barco explorador... que abría el camino para la flota desde el frente.",
						"vietnamese": "Đó là con tàu trinh sát... dẫn đường cho hạm đội từ phía trước.",
						"thai": "มันเป็นเรือลาดตระเวน… นำทางกองเรือจากด้านหน้าสุด",
						"hindi": "यह एक टोही जहाज़ था... जो बेड़े के सबसे आगे से रास्ता बनाता था।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…점점 선명해져. 이 룬의 내용은.",
						"english": "...It's becoming clearer. The meaning of these runes.",
						"japanese": "…だんだん鮮明になってくる。このルーンの内容が。",
						"chinese": "……越来越清晰了。这些符文的内容。",
						"french": "...Ça devient de plus en plus clair. Le contenu de ces runes.",
						"spanish": "...Cada vez está más claro. El contenido de estas runas.",
						"vietnamese": "...Càng ngày càng rõ ràng. Nội dung của những ký tự này.",
						"thai": "…มันเริ่มชัดเจนขึ้นเรื่อยๆ… เนื้อหาของรูนเหล่านี้",
						"hindi": "...यह अधिक स्पष्ट होता जा रहा है। इन रुन का अर्थ।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 이야기가 적혀 있는데?",
						"english": "What story is written here?",
						"japanese": "何が書かれているの？",
						"chinese": "这里写了什么故事？",
						"french": "Quelle histoire est écrite ici ?",
						"spanish": "¿Qué historia hay escrita aquí?",
						"vietnamese": "Chuyện gì được viết ở đây vậy?",
						"thai": "มีเรื่องราวอะไรเขียนอยู่?",
						"hindi": "यहाँ क्या कहानी लिखी है?"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "스쿌드가 속했던 선단의 이름은… '피오르드의 심장'.",
						"english": "The fleet Skuld belonged to was called… 'Heart of the Fjord'.",
						"japanese": "スクルドが所属していた船団の名前は…「フィヨルドの心臓」。",
						"chinese": "斯库尔德所属船队的名字是…“峡湾之心”。",
						"french": "Le nom de la flotte à laquelle Skuld appartenait était… « Cœur du Fjord ».",
						"spanish": "El nombre de la flota a la que pertenecía Skuld era… 'Corazón del Fiordo'.",
						"vietnamese": "Tên của hạm đội mà Skuld thuộc về là… 'Trái tim của Vịnh hẹp'.",
						"thai": "ชื่อของกองเรือที่ Skuld สังกัดอยู่คือ… 'หัวใจแห่งฟยอร์ด'.",
						"hindi": "स्कुल्ड जिस बेड़े का हिस्सा था उसका नाम था… 'फियोर्ड का दिल'।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "가장 명망 높았던 척후선. 파도를 가르며 선단의 길을 열었어.",
						"english": "The most renowned scout ship. It cut through the waves, forging a path for the fleet.",
						"japanese": "最も名高き斥候船。波を切り裂き、船団の道を切り開いた。",
						"chinese": "最负盛名的侦察船。劈波斩浪，为船队开辟道路。",
						"french": "Le navire éclaireur le plus renommé. Il fendait les vagues, ouvrant la voie à la flotte.",
						"spanish": "La nave exploradora más renombrada. Abría el camino a la flota, surcando las olas.",
						"vietnamese": "Con tàu trinh sát lừng danh nhất. Nó xé toang sóng biển, mở đường cho hạm đội.",
						"thai": "เรือลาดตระเวนที่โด่งดังที่สุด มันแหวกคลื่นเปิดทางให้กองเรือ.",
						"hindi": "सबसे प्रसिद्ध टोही जहाज। इसने लहरों को चीरते हुए बेड़े के लिए रास्ता बनाया।"
					}
				},
				{
					"content": {
						"korean": "…선단의 심장이라니.",
						"english": "…The heart of the fleet.",
						"japanese": "…船団の心臓、か。",
						"chinese": "……船队的心脏。",
						"french": "…Le cœur de la flotte.",
						"spanish": "…El corazón de la flota.",
						"vietnamese": "…Trái tim của hạm đội.",
						"thai": "…หัวใจของกองเรือ.",
						"hindi": "…बेड़े का दिल।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "척후선 스쿌드… 그들은 가장 먼저 위험을 감지하고, 가장 먼저 길을 개척했어.",
						"english": "The scout ship Skuld… they were the first to sense danger, the first to chart a path.",
						"japanese": "斥候船スクルド…彼らは最も早く危険を察知し、最も早く道を切り開いた。",
						"chinese": "侦察船斯库尔德……他们最先察觉危险，最先开辟道路。",
						"french": "Le navire éclaireur Skuld… ils étaient les premiers à sentir le danger, les premiers à tracer la voie.",
						"spanish": "La nave exploradora Skuld… fueron los primeros en detectar el peligro, los primeros en abrir el camino.",
						"vietnamese": "Tàu trinh sát Skuld… họ là những người đầu tiên nhận ra nguy hiểm, những người đầu tiên mở đường.",
						"thai": "เรือลาดตระเวน Skuld… พวกเขาเป็นคนแรกที่รับรู้ถึงอันตราย คนแรกที่บุกเบิกเส้นทาง.",
						"hindi": "टोही जहाज स्कुल्ड… वे सबसे पहले खतरा भांपते थे, सबसे पहले रास्ता बनाते थे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그만큼 위험한 역할이었겠지.",
						"english": "It must have been a dangerous role.",
						"japanese": "それだけ危険な役割だったのだろう。",
						"chinese": "想必那是多么危险的角色。",
						"french": "Ce devait être un rôle dangereux.",
						"spanish": "Debió de ser un papel peligroso.",
						"vietnamese": "Chắc hẳn đó là một vai trò nguy hiểm.",
						"thai": "คงเป็นบทบาทที่อันตรายมาก.",
						"hindi": "यह एक खतरनाक भूमिका रही होगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그래. 영광과 함께… 늘 그림자처럼 따라붙는 위험.",
						"english": "Yes. Glory, and… the ever-present shadow of danger.",
						"japanese": "そう。栄光と共に…常に影のように付きまとう危険。",
						"chinese": "是啊。伴随着荣耀……危险也如影随形。",
						"french": "Oui. La gloire, et… le danger qui la suit toujours comme une ombre.",
						"spanish": "Sí. La gloria, y… el peligro que siempre la acompaña como una sombra.",
						"vietnamese": "Đúng vậy. Vinh quang, và… nguy hiểm luôn bám theo như hình với bóng.",
						"thai": "ใช่ ความรุ่งโรจน์… และอันตรายที่ตามมาเหมือนเงา.",
						"hindi": "हाँ। गौरव के साथ… हमेशा छाया की तरह चिपका हुआ खतरा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 어둠 속에서도… 그들의 긍지가 느껴지는 것 같아.",
						"english": "Even in this darkness… I can feel their pride.",
						"japanese": "この暗闇の中でも…彼らの誇りが感じられるようだ。",
						"chinese": "即使在这黑暗中……我仿佛也能感受到他们的骄傲。",
						"french": "Même dans cette obscurité… je peux sentir leur fierté.",
						"spanish": "Incluso en esta oscuridad… puedo sentir su orgullo.",
						"vietnamese": "Ngay cả trong bóng tối này… tôi vẫn cảm nhận được niềm tự hào của họ.",
						"thai": "แม้ในความมืดนี้… ฉันก็ยังสัมผัสได้ถึงความภาคภูมิใจของพวกเขา.",
						"hindi": "इस अंधेरे में भी… मुझे उनकी शान महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 룬… 점점 내용이 깊어져. 하지만…",
						"english": "This rune… its meaning deepens. But…",
						"japanese": "このルーン…内容はどんどん深まっていく。だが…",
						"chinese": "这符文……内容越来越深奥了。但是……",
						"french": "Cette rune… son contenu s'approfondit. Mais…",
						"spanish": "Esta runa… su contenido se profundiza. Pero…",
						"vietnamese": "Rune này… nội dung ngày càng sâu sắc. Nhưng…",
						"thai": "รูนนี้… เนื้อหาลึกซึ้งขึ้นเรื่อยๆ แต่ว่า…",
						"hindi": "यह रून… इसका अर्थ गहरा होता जा रहा है। लेकिन…"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "갑자기 동굴 전체가 흔들렸다. 빙하가 비명을 지르는 듯했다.",
						"english": "Suddenly, the entire cave shook. The glacier seemed to scream.",
						"japanese": "突然、洞窟全体が揺れた。氷河が悲鳴を上げているようだった。",
						"chinese": "突然，整个洞穴都颤抖起来。冰川仿佛在尖叫。",
						"french": "Soudain, toute la grotte trembla. Le glacier semblait hurler.",
						"spanish": "De repente, toda la cueva tembló. El glaciar parecía gritar.",
						"vietnamese": "Đột nhiên, toàn bộ hang động rung chuyển. Dường như sông băng đang gào thét.",
						"thai": "ทันใดนั้น ถ้ำทั้งถ้ำก็สั่นสะเทือน ธารน้ำแข็งราวกับกรีดร้อง.",
						"hindi": "अचानक, पूरी गुफा हिल उठी। ग्लेशियर चीख रहा था।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "룬이… 파괴되고 있어. 누군가 이 기록을 지우려 해.",
						"english": "The runes... are being destroyed. Someone is trying to erase this record.",
						"japanese": "「ルーンが…破壊されている。誰かがこの記録を消そうとしている。」",
						"chinese": "「符文…正在被破坏。有人想抹去这份记录。」",
						"french": "« Les runes… sont en train d'être détruites. Quelqu'un essaie d'effacer ce registre. »",
						"spanish": "« Las runas… están siendo destruidas. Alguien intenta borrar este registro. »",
						"vietnamese": "« Các rune… đang bị phá hủy. Ai đó đang cố gắng xóa bỏ ghi chép này. »",
						"thai": "「รูน...กำลังถูกทำลาย มีใครบางคนพยายามลบ บันทึกนี้」",
						"hindi": "「रुन्स... नष्ट हो रहे हैं। कोई इस रिकॉर्ड को मिटाने की कोशिश कर रहा है। 」"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…누가?",
						"english": "...Who?",
						"japanese": "「…誰が？」",
						"chinese": "「…谁？」",
						"french": "« …Qui ? »",
						"spanish": "« …¿Quién? »",
						"vietnamese": "« …Ai? »",
						"thai": "「…ใคร?」",
						"hindi": "「…कौन?」"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "잊힌 것은… 잊힌 채로 두어야 한다.",
						"english": "The forgotten... should remain forgotten.",
						"japanese": "「忘れ去られたものは…忘れ去られたままにしておくべきだ。」",
						"chinese": "「被遗忘的…就应该让它被遗忘。」",
						"french": "« Ce qui est oublié… doit le rester. »",
						"spanish": "« Lo olvidado… debe permanecer olvidado. »",
						"vietnamese": "« Những gì đã quên… nên để nó chìm vào quên lãng. »",
						"thai": "「สิ่งที่ถูกลืม...ควรถูกทิ้งให้ถูกลืมไป」",
						"hindi": "「जो भूला दिया गया है… उसे भूला ही रहने देना चाहिए। 」"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…네가 기록을 망가뜨리고 있었어?",
						"english": "...You were destroying the records?",
						"japanese": "「…君が記録を破壊していたのか？」",
						"chinese": "「…你在破坏记录？」",
						"french": "« …C'est toi qui détruisais les registres ? »",
						"spanish": "« …¿Eras tú quien destruía los registros? »",
						"vietnamese": "« …Ngươi đã phá hủy các ghi chép sao? »",
						"thai": "「...นี่เจอกำลังทำลายบันทึกอยู่หรือ?」",
						"hindi": "「…तुम रिकॉर्ड्स को नष्ट कर रहे थे? 」"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "기록을 삼키려는 거대한 그림자가 앞을 막아섰다.",
						"english": "A colossal shadow, intent on devouring the records, blocked the path.",
						"japanese": "「記録を飲み込もうとする巨大な影が、行く手を阻んだ。」",
						"chinese": "「一个试图吞噬记录的巨大阴影挡住了去路。」",
						"french": "« Une ombre colossale, prête à dévorer les registres, bloquait le passage. »",
						"spanish": "« Una sombra colosal, con la intención de devorar los registros, bloqueó el camino. »",
						"vietnamese": "« Một bóng tối khổng lồ, định nuốt chửng các ghi chép, đã chặn đường. »",
						"thai": "「เงาขนาดมหึมาที่ตั้งใจจะกลืนกินบันทึกได้ขวางทางไว้」",
						"hindi": "「रिकॉर्ड्स को निगलने वाली एक विशाल छाया ने रास्ता रोक दिया। 」"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳의 진실은… 침묵 속에 잠들어야 할 운명.",
						"english": "The truth of this place... is destined to sleep in silence.",
						"japanese": "「この地の真実は…沈黙の中で眠る運命にある。」",
						"chinese": "「这里的真相…注定要在沉默中沉睡。」",
						"french": "« La vérité de ce lieu… est destinée à dormir dans le silence. »",
						"spanish": "« La verdad de este lugar… está destinada a dormir en el silencio. »",
						"vietnamese": "« Sự thật của nơi này… định mệnh phải ngủ yên trong im lặng. »",
						"thai": "「ความจริงของที่นี่...ถูกลิขิตให้หลับใหลอยู่ในความเงียบงัน」",
						"hindi": "「इस जगह का सच… खामोशी में सो जाने के लिए नियत है। 」"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 과거를 들추려는 자는… 이곳에서 사라질 것이다.",
						"english": "Those who dare to unearth the past... shall vanish from this place.",
						"japanese": "「あえて過去を暴こうとする者は…ここから消え去るだろう。」",
						"chinese": "「任何胆敢揭露过去的人…都将从这里消失。」",
						"french": "« Ceux qui oseront déterrer le passé… disparaîtront de ce lieu. »",
						"spanish": "« Aquellos que se atrevan a desenterrar el pasado… desaparecerán de este lugar. »",
						"vietnamese": "« Kẻ nào dám đào bới quá khứ… sẽ biến mất khỏi nơi này. »",
						"thai": "「ผู้ใดที่กล้าขุดคุ้ยอดีต...จะต้องหายไปจากที่นี่」",
						"hindi": "「जो अतीत को उजागर करने की हिम्मत करते हैं… वे इस जगह से गायब हो जाएंगे। 」"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가 뭔데 잊힌 역사를 가로막아?",
						"english": "Who are you to obstruct forgotten history?",
						"japanese": "「お前は何様だ、忘れ去られた歴史を阻むとは？」",
						"chinese": "「你算什么东西，竟敢阻碍被遗忘的历史？」",
						"french": "« Qui es-tu pour faire obstacle à une histoire oubliée ? »",
						"spanish": "« ¿Quién eres tú para obstruir la historia olvidada? »",
						"vietnamese": "« Ngươi là ai mà dám ngăn cản lịch sử đã bị lãng quên? »",
						"thai": "「เจ้าเป็นใครถึงได้มาขัดขวางประวัติศาสตร์ที่ถูกลืม?」",
						"hindi": "「तुम कौन होते हो भूली हुई हिस्ट्री को रोकने वाले? 」"
					}
				},
				{
					"content": {
						"korean": "우리는 진실을 밝힐 거야!",
						"english": "We will uncover the truth!",
						"japanese": "「私たちは真実を明らかにする！」",
						"chinese": "「我们会揭示真相！」",
						"french": "« Nous allons révéler la vérité ! »",
						"spanish": "« ¡Revelaremos la verdad! »",
						"vietnamese": "« Chúng ta sẽ làm sáng tỏ sự thật! »",
						"thai": "「พวกเราจะเปิดเผยความจริง!」",
						"hindi": "「हम सच्चाई उजागर करेंगे! 」"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하찮은 자들. 과거는 과거일 뿐. 넘볼 수 없어.",
						"english": "Insignificant beings. The past is just the past. You cannot grasp it.",
						"japanese": "取るに足らない者どもめ。過去は過去に過ぎない。手出しはさせない。",
						"chinese": "渺小的存在。过去只是过去。你们无法逾越。",
						"french": "Êtres insignifiants. Le passé n'est que le passé. Vous ne pouvez l'atteindre.",
						"spanish": "Seres insignificantes. El pasado es solo el pasado. No podéis alcanzarlo.",
						"vietnamese": "Những kẻ hèn mọn. Quá khứ chỉ là quá khứ. Các ngươi không thể chạm tới.",
						"thai": "พวกเจ้าช่างไร้ค่า อดีตก็คืออดีต ไม่อาจก้าวข้ามได้",
						"hindi": "तुच्छ प्राणी। अतीत सिर्फ अतीत है। तुम उसे छू नहीं सकते।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우리는… 이 룬의 모든 것을 밝혀낼 거야.",
						"english": "…It's not over yet. We will… uncover everything about this rune.",
						"japanese": "…まだ終わっていない。我々は… このルーンの全てを明らかにする。",
						"chinese": "…还没结束。我们将会… 揭示这枚符文的一切。",
						"french": "…Ce n'est pas encore fini. Nous allons… tout découvrir sur cette rune.",
						"spanish": "…Aún no ha terminado. Nosotros… desvelaremos todo sobre esta runa.",
						"vietnamese": "…Chưa kết thúc đâu. Chúng ta sẽ… khám phá tất cả về viên rune này.",
						"thai": "...ยังไม่จบหรอก เราจะ... เปิดเผยทุกสิ่งเกี่ยวกับรูนนี้",
						"hindi": "...अभी खत्म नहीं हुआ है। हम... इस रुन के बारे में सब कुछ उजागर करेंगे।"
					},
					"emotion": "angry",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다시 돌아올 거야. 반드시!",
						"english": "We'll be back. Absolutely!",
						"japanese": "必ず戻ってくる。絶対に！",
						"chinese": "我们会再回来的。绝对！",
						"french": "Nous reviendrons. Absolument !",
						"spanish": "¡Volveremos. Sin falta!",
						"vietnamese": "Chúng ta sẽ quay lại. Nhất định!",
						"thai": "เราจะกลับมาอีกครั้ง อย่างแน่นอน!",
						"hindi": "हम वापस आएंगे। ज़रूर!"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크으… 고작 인간들이… 과거의 사슬을 끊으려 하는가…",
						"english": "Ugh... mere humans... attempting to break the chains of the past...",
						"japanese": "「くぅ…たかが人間どもが…過去の鎖を断ち切ろうとするのか…」",
						"chinese": "「呃…区区人类…竟敢试图斩断过去的枷锁…」",
						"french": "« Ugh… de simples humains… essayant de briser les chaînes du passé… »",
						"spanish": "« Ugh… simples humanos… intentando romper las cadenas del pasado… »",
						"vietnamese": "« Khụ… chỉ là lũ người phàm… dám cố gắng phá vỡ xiềng xích của quá khứ… »",
						"thai": "「อึก...แค่พวกมนุษย์...คิดจะทำลายพันธนาการของอดีตงั้นหรือ...」",
						"hindi": "「उफ़… सिर्फ़ इंसान… अतीत की ज़ंजीरों को तोड़ने की कोशिश कर रहे हैं… 」"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 잊힌 진실은… 너희를 더 큰 비극으로 이끌 뿐.",
						"english": "But the forgotten truth… will only lead you to a greater tragedy.",
						"japanese": "だが、忘れられた真実は… お前たちをさらなる悲劇へと導くだけだ。",
						"chinese": "然而，被遗忘的真相… 只会将你们引向更大的悲剧。",
						"french": "Mais la vérité oubliée… ne vous mènera qu'à une plus grande tragédie.",
						"spanish": "Pero la verdad olvidada… solo os llevará a una tragedia mayor.",
						"vietnamese": "Nhưng sự thật bị lãng quên… sẽ chỉ dẫn các ngươi đến một bi kịch lớn hơn.",
						"thai": "แต่ความจริงที่ถูกลืมเลือน... จะนำพาเจ้าไปสู่โศกนาฏกรรมที่ยิ่งใหญ่กว่าเท่านั้น",
						"hindi": "लेकिन भूला हुआ सच... तुम्हें और बड़ी त्रासदी की ओर ही ले जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "…우리가 밝혀야 할 진실이… 더 남아 있다는 뜻인가.",
						"english": "…Does that mean there's more truth… for us to uncover?",
						"japanese": "…これは、我々が明らかにすべき真実が… まだ残っているという意味なのか。",
						"chinese": "…这是否意味着… 还有更多我们必须揭示的真相？",
						"french": "…Cela signifie-t-il qu'il y a plus de vérité… à découvrir pour nous ?",
						"spanish": "…¿Significa eso que aún hay más verdades… por descubrir?",
						"vietnamese": "…Liệu điều đó có nghĩa là… còn nhiều sự thật để chúng ta khám phá?",
						"thai": "...นั่นหมายความว่า... ยังมีความจริงที่เราต้องเปิดเผยอีกงั้นหรือ?",
						"hindi": "...क्या इसका मतलब है कि... हमें अभी और सच उजागर करने हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어떤 비극이든… 마주할 거야.",
						"english": "Whatever tragedy it is… I will face it.",
						"japanese": "どんな悲劇であろうと… 私は立ち向かう。",
						"chinese": "无论是什么样的悲剧… 我都会面对。",
						"french": "Quelle que soit la tragédie… je l'affronterai.",
						"spanish": "Cualquier tragedia… la enfrentaré.",
						"vietnamese": "Dù là bi kịch nào… tôi cũng sẽ đối mặt.",
						"thai": "ไม่ว่าจะโศกนาฏกรรมใด... ข้าจะเผชิญหน้ามัน",
						"hindi": "कोई भी त्रासदी हो... मैं उसका सामना करूंगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "스쿌드의 영광 뒤에 숨겨진 어두운 그림자. 비극의 전조가 드리웠다.",
						"english": "Dark shadows hidden behind Skuld's glory. The harbinger of tragedy looms.",
						"japanese": "スクルドの栄光の裏に隠された暗い影。悲劇の予兆が迫る。",
						"chinese": "隐藏在斯库尔德荣耀背后的黑暗阴影。悲剧的预兆已然降临。",
						"french": "Des ombres sombres cachées derrière la gloire de Skuld. Le présage de la tragédie se profile.",
						"spanish": "Sombras oscuras ocultas tras la gloria de Skuld. El presagio de la tragedia se cierne.",
						"vietnamese": "Bóng tối ẩn mình sau vinh quang của Skuld. Điềm báo bi kịch đã hiện hữu.",
						"thai": "เงาดำที่ซ่อนอยู่เบื้องหลังความรุ่งโรจน์ของสกุลด์ ลางบอกเหตุแห่งโศกนาฏกรรมคืบคลานเข้ามา",
						"hindi": "स्कुल्ड की महिमा के पीछे छिपी काली परछाइयाँ। त्रासदी का अग्रदूत मंडरा रहा है।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 얼음 동굴, 벽면의 룬이 깨어난다.",
			"잊힌 항해의 기억이 환영처럼 되살아났다.",
			"파도를 가르며 앞서가던 배, 스쿌드.",
			"그 영광의 끝에, 부서진 뱃머리가 그림자처럼 드리운다."
		],
		"english": [
			"In a cold ice cave, runes on the wall awaken.",
			"Memories of a forgotten voyage revived like a phantom.",
			"The ship that cleaved through waves, leading the way: Skjold.",
			"At the end of its glory, a shattered prow casts a shadow."
		],
		"japanese": [
			"冷たい氷の洞窟、壁のルーンが目覚める。",
			"忘れられた航海の記憶が幻影のように蘇る。",
			"波を切り裂き、先陣を切った船、スヒョルド。",
			"その栄光の果てに、砕けた船首が影のように覆いかぶさる。"
		],
		"chinese": [
			"寒冷的冰洞中，墙壁上的符文苏醒了。",
			"被遗忘的航海记忆如幻影般复苏。",
			"劈波斩浪、领先前行的船只，斯克约德。",
			"在其荣耀的尽头，破碎的船首如影般笼罩。"
		],
		"french": [
			"Dans une froide caverne de glace, les runes murales s'éveillent.",
			"Les souvenirs d'un voyage oublié revivent comme un fantôme.",
			"Le navire qui fendait les vagues, ouvrant la voie : Skjold.",
			"Au terme de sa gloire, une proue brisée jette une ombre."
		],
		"spanish": [
			"En una fría cueva de hielo, las runas en la pared despiertan.",
			"Recuerdos de un viaje olvidado revivieron como un fantasma.",
			"El barco que surcaba las olas, abriendo camino: Skjold.",
			"Al final de su gloria, una proa destrozada proyecta una sombra."
		],
		"vietnamese": [
			"Trong hang băng lạnh lẽo, những ký tự trên tường thức tỉnh.",
			"Ký ức về chuyến hải trình lãng quên sống lại như một ảo ảnh.",
			"Con tàu rẽ sóng dẫn lối, Skjold.",
			"Cuối cùng vinh quang, mũi thuyền vỡ nát phủ bóng đen."
		],
		"thai": [
			"ในถ้ำน้ำแข็งอันหนาวเย็น รูนบนผนังตื่นขึ้นมา",
			"ความทรงจำของการเดินทางที่ถูกลืมกลับมามีชีวิตอีกครั้งดุจภาพหลอน",
			"เรือที่แหวกคลื่นนำทางไปข้างหน้า สกยอลด์",
			"เมื่อถึงจุดสิ้นสุดของความรุ่งโรจน์ หัวเรือที่แตกหักกลับกลายเป็นเงา"
		],
		"hindi": [
			"एक ठंडी बर्फीली गुफा में, दीवार पर के रुन जागृत हो उठते हैं।",
			"एक भूले हुए सफर की यादें एक भूत की तरह जीवित हो उठीं।",
			"लहरों को चीरता हुआ आगे बढ़ता जहाज़, स्कोल्ड।",
			"उसकी महिमा के अंत में, एक टूटा हुआ जहाज़ का अगला हिस्सा एक छाया की तरह मंडराता है।"
		]
	}
} as const;
