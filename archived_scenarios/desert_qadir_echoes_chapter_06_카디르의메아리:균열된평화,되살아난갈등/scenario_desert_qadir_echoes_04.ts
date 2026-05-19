export const scenario_desert_qadir_echoes_04 = {
	"scenario_id": "desert_qadir_echoes_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"khan": {
			"id": "mon_77d18883-7711-4fc4-b04e-7b29652e0ab2",
			"name": {
				"korean": "칸",
				"english": "Khan",
				"japanese": "カーン",
				"chinese": "可汗",
				"french": "Khan",
				"spanish": "Khan",
				"vietnamese": "Khan",
				"thai": "ข่าน",
				"hindi": "खान"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d2797cf2-a388-4974-97e4-54e6af8a0000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9c40ef7d-3388-44dd-29b3-9ba716fe8b00/public"
		},
		"amir": {
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사막의 균형은 조각났다. 약탈의 피바람이 불어닥친다.",
			"희망이라 믿었던 손길, 그 안에 숨겨진 진짜 칼날.",
			"배신과 절망 속에서, 길은 더욱 어두워진다."
		],
		"english": [
			"The desert's balance shattered. A bloody storm of plunder descends.",
			"The hand believed to be hope, a true blade hidden within.",
			"Amidst betrayal and despair, the path grows darker."
		],
		"japanese": [
			"砂漠の均衡は砕け散った。略奪の血風が吹き荒れる。",
			"希望と信じた手、その中に隠された真の刃。",
			"裏切りと絶望の中、道はさらに暗くなる。"
		],
		"chinese": [
			"沙漠的平衡被打破。劫掠的血腥风暴降临。",
			"曾被视为希望之手，其中却隐藏着真正的刀刃。",
			"在背叛与绝望中，道路变得更加黑暗。"
		],
		"french": [
			"L'équilibre du désert est brisé. Un vent sanglant de pillage s'abat.",
			"La main que l'on croyait porteuse d'espoir, une vraie lame cachée en son sein.",
			"Au milieu de la trahison et du désespoir, le chemin s'obscurcit davantage."
		],
		"spanish": [
			"El equilibrio del desierto se hizo añicos. Una tormenta sangrienta de saqueo se desata.",
			"La mano que se creía esperanza, una verdadera hoja oculta en su interior.",
			"Entre la traición y la desesperación, el camino se vuelve más oscuro."
		],
		"vietnamese": [
			"Cân bằng sa mạc tan vỡ. Cơn bão cướp bóc đẫm máu ập đến.",
			"Bàn tay tưởng là hy vọng, ẩn chứa bên trong là lưỡi dao thật.",
			"Giữa sự phản bội và tuyệt vọng, con đường càng trở nên tăm tối."
		],
		"thai": [
			"สมดุลแห่งทะเลทรายถูกทำลาย พายุโลหิตแห่งการปล้นสะดมโหมกระหน่ำ",
			"มือที่เชื่อว่าเป็นความหวัง, ใบมีดที่แท้จริงซ่อนอยู่ภายใน",
			"ท่ามกลางการทรยศและความสิ้นหวัง หนทางยิ่งมืดมิดลง"
		],
		"hindi": [
			"रेगिस्तान का संतुलन टूट गया। लूटपाट का खूनी तूफान उमड़ पड़ा है।",
			"आशा समझी गई हथेली, उसके भीतर छिपा असली खंजर।",
			"विश्वासघात और निराशा के बीच, रास्ता और भी गहरा होता जाता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "황폐한 사막, 부서진 유적들만이 과거의 영광을 말해주었다.",
						"english": "A desolate desert, only shattered ruins spoke of past glory.",
						"japanese": "荒廃した砂漠、壊れた遺跡だけが過去の栄光を物語っていた。",
						"chinese": "荒凉的沙漠，只有破碎的遗迹诉说着昔日的辉煌。",
						"french": "Un désert désolé, seules des ruines brisées témoignaient de la gloire passée.",
						"spanish": "Un desierto desolado, solo ruinas destrozadas hablaban de la gloria pasada.",
						"vietnamese": "Sa mạc hoang tàn, chỉ còn những tàn tích vỡ nát kể về vinh quang xưa.",
						"thai": "ทะเลทรายอันรกร้าง มีเพียงซากปรักหักพังที่บอกเล่าถึงความรุ่งโรจน์ในอดีต",
						"hindi": "एक उजाड़ रेगिस्तान, केवल टूटे हुए खंडहर ही अतीत की महिमा बताते थे।"
					}
				},
				{
					"content": {
						"korean": "이게… 카디르가 남긴 세상인가.",
						"english": "Is this... the world Kadir left behind?",
						"japanese": "これが…カディルが残した世界なのか。",
						"chinese": "这就是……卡迪尔留下的世界吗？",
						"french": "Est-ce… le monde que Kadir a laissé derrière lui ?",
						"spanish": "¿Es este... el mundo que dejó Kadir?",
						"vietnamese": "Đây có phải là... thế giới mà Kadir đã để lại?",
						"thai": "นี่คือ... โลกที่คาดีร์ทิ้งไว้หรือ?",
						"hindi": "क्या यही... वो दुनिया है जो कादिर छोड़ गया?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "아직 끝이 아닐세. 이 파괴는 시작에 불과해.",
						"english": "It's not over yet. This destruction is just the beginning.",
						"japanese": "まだ終わりではない。この破壊は始まりに過ぎない。",
						"chinese": "还没结束。这场破坏只是个开始。",
						"french": "Ce n'est pas encore la fin. Cette destruction n'est que le début.",
						"spanish": "Aún no ha terminado. Esta destrucción es solo el principio.",
						"vietnamese": "Chưa kết thúc đâu. Sự hủy diệt này chỉ là khởi đầu.",
						"thai": "ยังไม่จบสิ้นหรอก การทำลายล้างนี้เป็นเพียงจุดเริ่มต้น",
						"hindi": "अभी खत्म नहीं हुआ है। यह विनाश तो बस शुरुआत है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳에는… 우리가 모르는 무언가가 잠들어 있네.",
						"english": "Deeper still… something unknown slumbers.",
						"japanese": "さらに奥には…我々が知らない何かが眠っている。",
						"chinese": "更深处……沉睡着我们不知道的东西。",
						"french": "Plus profondément encore… quelque chose d'inconnu sommeille.",
						"spanish": "Más profundo aún… algo desconocido yace dormido.",
						"vietnamese": "Sâu hơn nữa... có thứ gì đó chúng ta không biết đang ngủ say.",
						"thai": "ลึกลงไป... มีบางสิ่งที่เราไม่รู้จักหลับใหลอยู่",
						"hindi": "और गहराई में… कुछ ऐसा है जिसे हम नहीं जानते, जो सोया हुआ है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "khan"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "khan",
					"content": {
						"korean": "여기까지 기어들어왔군. 겁 없는 것들.",
						"english": "You've crawled all the way here. Fearless fools.",
						"japanese": "よくもここまで這い上がってきたな。恐れ知らずめ。",
						"chinese": "竟然爬到这里来了。不知死活的东西。",
						"french": "Vous avez rampé jusqu'ici. Imprudent.",
						"spanish": "Han logrado arrastrarse hasta aquí. Necios sin miedo.",
						"vietnamese": "Các ngươi đã bò đến tận đây. Những kẻ không biết sợ hãi.",
						"thai": "แกคลานมาถึงนี่แล้วรึ? พวกไม่รู้จักกลัว",
						"hindi": "तुम यहां तक रेंगते हुए आ गए। निडर मूर्खों।"
					}
				},
				{
					"content": {
						"korean": "약탈을 멈춰라! 이 이상 파괴해봤자 얻을 건 없어!",
						"english": "Stop the plunder! You'll gain nothing more from this destruction!",
						"japanese": "略奪をやめろ！これ以上破壊しても何も得られないぞ！",
						"chinese": "停止掠夺！再这样破坏下去也一无所获！",
						"french": "Arrêtez le pillage ! Vous ne gagnerez rien de plus avec cette destruction !",
						"spanish": "¡Detengan el saqueo! ¡No obtendrán nada más de esta destrucción!",
						"vietnamese": "Dừng ngay việc cướp bóc! Các ngươi sẽ chẳng được gì nếu tiếp tục phá hủy!",
						"thai": "หยุดปล้นสะดม! ทำลายต่อไปก็ไม่ได้อะไรหรอก!",
						"hindi": "लूटपाट बंद करो! इस विनाश से तुम्हें और कुछ नहीं मिलेगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "파괴만이 유일한 진실이다. 카디르가 내 모든 걸 앗아갔어!",
						"english": "Destruction is the only truth. Kadir took everything from me!",
						"japanese": "破壊こそが唯一の真実だ。カディルが私の全てを奪った！",
						"chinese": "破坏才是唯一的真相。卡迪尔夺走了我的一切！",
						"french": "La destruction est la seule vérité. Kadir m'a tout pris !",
						"spanish": "La destrucción es la única verdad. ¡Kadir me lo arrebató todo!",
						"vietnamese": "Hủy diệt là chân lý duy nhất. Kadir đã cướp đi tất cả của ta!",
						"thai": "การทำลายล้างคือความจริงเดียว คาดีร์เอาทุกอย่างไปจากฉัน!",
						"hindi": "विनाश ही एकमात्र सत्य है। कादिर ने मेरा सब कुछ छीन लिया!"
					}
				},
				{
					"content": {
						"korean": "모래 폭풍 속에서 오래된 속삭임이 들려왔다. '평화는… 껍데기일 뿐…'",
						"english": "An old whisper echoed in the sandstorm. \"Peace... is but a shell...\"",
						"japanese": "砂嵐の中、古の囁きが響いた。「平和は…ただの殻に過ぎない…」",
						"chinese": "沙暴中回荡着古老的低语。“和平……不过是空壳……”",
						"french": "Un vieux murmure résonna dans la tempête de sable. « La paix... n'est qu'une coquille... »",
						"spanish": "Un viejo susurro resonó en la tormenta de arena. \"La paz... no es más que una cáscara...\"",
						"vietnamese": "Một tiếng thì thầm cổ xưa vang vọng trong bão cát. \"Hòa bình... chỉ là một cái vỏ rỗng...\"",
						"thai": "เสียงกระซิบเก่าแก่ก้องกังวานในพายุทราย \"สันติ... เป็นแค่เปลือกนอก...\"",
						"hindi": "रेत के तूफान में एक पुरानी फुसफुसाहट गूँज उठी। \"शांति... केवल एक खोल है...\""
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "칸, 이성적으로 생각하게! 복수는 더 큰 재앙을 부를 뿐이야!",
						"english": "Khan, be rational! Vengeance will only bring greater disaster!",
						"japanese": "カーン、冷静になれ！復讐はさらなる災厄を招くだけだ！",
						"chinese": "可汗，理智一点！复仇只会带来更大的灾难！",
						"french": "Khan, sois raisonnable ! La vengeance n'apportera qu'une plus grande catastrophe !",
						"spanish": "¡Khan, sé racional! ¡La venganza solo traerá una catástrofe mayor!",
						"vietnamese": "Khan, hãy lí trí lên! Báo thù sẽ chỉ mang đến thảm họa lớn hơn thôi!",
						"thai": "คาน, จงมีเหตุผล! การแก้แค้นจะนำมาซึ่งหายนะที่ยิ่งใหญ่กว่าเท่านั้น!",
						"hindi": "खान, तर्कसंगत बनो! प्रतिशोध केवल बड़ी आपदा लाएगा!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "닥쳐라! 너희가 뭘 안다고 지껄여!",
						"english": "Silence! What do you know to babble on about!",
						"japanese": "黙れ！お前たちに何がわかる！",
						"chinese": "闭嘴！你们懂什么，胡说八道！",
						"french": "Silence ! Qu'en savez-vous pour jacasser ainsi !",
						"spanish": "¡Cállate! ¡Qué sabéis vosotros para charlar!",
						"vietnamese": "Câm miệng! Ngươi biết cái quái gì mà nói!",
						"thai": "หุบปาก! พวกแกรู้อะไรถึงได้พล่ามไปเรื่อย!",
						"hindi": "चुप रहो! तुम क्या जानते हो बकवास करने के लिए!"
					},
					"speaker": "khan",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "khan"
				},
				{
					"emotion": "sad",
					"speaker": "khan",
					"type": "speech",
					"content": {
						"korean": "내 가족… 내 마을… 모두 카디르 때문에 잃었다. 이제 파괴만이 남았을 뿐.",
						"english": "My family... my village... all lost because of Kadir. Now, only destruction remains.",
						"japanese": "私の家族…私の村…すべてカディールのせいで失った。今や残されたのは破壊だけだ。",
						"chinese": "我的家人……我的村庄……都因卡迪尔而失去。现在，只剩下毁灭。",
						"french": "Ma famille... mon village... tout perdu à cause de Kadir. Maintenant, seule la destruction demeure.",
						"spanish": "Mi familia... mi pueblo... todo perdido por culpa de Kadir. Ahora, solo queda la destrucción.",
						"vietnamese": "Gia đình tôi... làng của tôi... tất cả đều mất vì Kadir. Giờ đây, chỉ còn lại sự hủy diệt.",
						"thai": "ครอบครัวของข้า... หมู่บ้านของข้า... สูญสิ้นไปเพราะคาดีร์ บัดนี้ เหลือเพียงความพินาศเท่านั้น",
						"hindi": "मेरा परिवार... मेरा गाँव... सब कादिर की वजह से खो गया। अब, केवल विनाश बचा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그렇다고 이 모든 걸 부술 수는 없어!",
						"english": "Even so, you can't destroy all of this!",
						"japanese": "だからといって、すべてを破壊することはできない！",
						"chinese": "就算如此，你也不能毁掉这一切！",
						"french": "Même ainsi, tu ne peux pas tout détruire !",
						"spanish": "¡Aun así, no puedes destruir todo esto!",
						"vietnamese": "Dù vậy, ngươi không thể phá hủy tất cả những thứ này!",
						"thai": "ถึงกระนั้น, เจ้าก็ทำลายทุกสิ่งนี้ไม่ได้!",
						"hindi": "इसके बावजूद, तुम यह सब नष्ट नहीं कर सकते!"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"action": "focus",
					"duration_ms": 1000,
					"speaker": "amir",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "아미르의 시선이 잠시 부서진 유적의 한 조각에 머물렀다. 희미한 불안감이 전해지는 문양이었다.",
						"english": "Amir's gaze lingered on a fragment of the shattered ruins. It was a pattern that conveyed a faint unease.",
						"japanese": "アミールの視線が、砕かれた遺跡の破片にしばらく留まった。それは、かすかな不安感を伝える模様だった。",
						"chinese": "阿米尔的目光短暂地停留在破碎遗迹的一块碎片上。那是一个传递着微弱不安感的图案。",
						"french": "Le regard d'Amir s'attarda un instant sur un fragment des ruines brisées. C'était un motif qui transmettait un léger malaise.",
						"spanish": "La mirada de Amir se detuvo un momento en un fragmento de las ruinas destrozadas. Era un patrón que transmitía una leve inquietud.",
						"vietnamese": "Ánh mắt của Amir dừng lại trên một mảnh vỡ của đống đổ nát. Đó là một hoa văn truyền tải một nỗi bất an mơ hồ.",
						"thai": "สายตาของอามีรจ้องมองชิ้นส่วนของซากปรักหักพังที่แตกสลายชั่วขณะ มันเป็นลวดลายที่สื่อถึงความไม่สบายใจเลือนราง",
						"hindi": "अमीर की नज़र टूटे हुए खंडहर के एक टुकड़े पर ठहर गई। यह एक ऐसा पैटर्न था जो हल्की बेचैनी को व्यक्त करता है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은… 파괴 너머에 있네. 칸도, 자네들도, 모두 진실을 보지 못하고 있어.",
						"english": "The truth... lies beyond destruction. Khan, and all of you, cannot see the truth.",
						"japanese": "真実は…破壊の彼方にある。カーンも、君たちも、誰も真実を見ることができていない。",
						"chinese": "真相……在毁灭之外。可汗，还有你们，都看不到真相。",
						"french": "La vérité... est au-delà de la destruction. Khan, et vous tous, ne pouvez pas voir la vérité.",
						"spanish": "La verdad... está más allá de la destrucción. Khan, y todos vosotros, no podéis ver la verdad.",
						"vietnamese": "Sự thật... nằm ngoài sự hủy diệt. Khan, và tất cả các ngươi, đều không thấy được sự thật.",
						"thai": "ความจริง... อยู่เหนือการทำลายล้าง คานและพวกเจ้าทุกคน มองไม่เห็นความจริง",
						"hindi": "सच... विनाश से परे है। खान, और तुम सब, सच को नहीं देख पा रहे हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "헛소리 마라! 나는 내 눈으로 본 것만 믿는다!",
						"english": "Stop spouting nonsense! I only believe what I see with my own eyes!",
						"japanese": "でたらめを言うな！私は自分の目で見たものだけを信じる！",
						"chinese": "少胡说八道！我只相信我亲眼所见！",
						"french": "Arrête de dire des bêtises ! Je ne crois que ce que je vois de mes propres yeux !",
						"spanish": "¡Deja de decir tonterías! ¡Solo creo lo que veo con mis propios ojos!",
						"vietnamese": "Đừng nói nhảm! Ta chỉ tin vào những gì ta thấy bằng chính mắt mình!",
						"thai": "หยุดพูดไร้สาระ! ข้าเชื่อแต่สิ่งที่เห็นกับตาตัวเองเท่านั้น!",
						"hindi": "बकवास बंद करो! मैं वही मानता हूँ जो अपनी आँखों से देखता हूँ!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "khan"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "khan",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "너희도 결국 똑같아! 이 사막은 구원받을 수 없어!",
						"english": "You're all the same in the end! This desert cannot be saved!",
						"japanese": "お前たちも結局同じだ！この砂漠は救われない！",
						"chinese": "你们终究都一样！这片沙漠无法被拯救！",
						"french": "Vous êtes tous les mêmes au final ! Ce désert ne peut être sauvé !",
						"spanish": "¡Al final, todos sois iguales! ¡Este desierto no puede ser salvado!",
						"vietnamese": "Cuối cùng thì các ngươi cũng vậy thôi! Sa mạc này không thể được cứu rỗi!",
						"thai": "สุดท้ายพวกแกก็เหมือนกันหมด! ทะเลทรายแห่งนี้ไม่อาจกอบกู้ได้!",
						"hindi": "तुम सब आखिर में एक जैसे हो! इस रेगिस्तान को बचाया नहीं जा सकता!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "khan"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니야! 우리는 너와 달라!",
						"english": "No! We are different from you!",
						"japanese": "違う！私たちは君とは違う！",
						"chinese": "不！我们和你不一样！",
						"french": "Non ! Nous sommes différents de toi !",
						"spanish": "¡No! ¡Somos diferentes a ti!",
						"vietnamese": "Không! Chúng tôi khác ngươi!",
						"thai": "ไม่ใช่! พวกเราไม่เหมือนเจ้า!",
						"hindi": "नहीं! हम तुमसे अलग हैं!"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미안하군. 하지만 나에게는… 더 중요한 계획이 있네.",
						"english": "My apologies. But I… have a more important plan.",
						"japanese": "すまない。だが私には…もっと重要な計画があるのだ。",
						"chinese": "抱歉。但我有…更重要的计划。",
						"french": "Mes excuses. Mais j'ai… un plan plus important.",
						"spanish": "Lo siento. Pero yo… tengo un plan más importante.",
						"vietnamese": "Xin lỗi. Nhưng ta… có một kế hoạch quan trọng hơn.",
						"thai": "ขออภัย แต่ข้ามี…แผนการที่สำคัญกว่า",
						"hindi": "मुझे माफ़ करना। लेकिन मेरे पास… एक और महत्वपूर्ण योजना है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아미르! 너 대체 무슨 짓을…!",
						"english": "Amir! What in the world are you…!",
						"japanese": "アミール！一体何をするつもりだ…！",
						"chinese": "阿米尔！你到底在做什么…！",
						"french": "Amir ! Qu'est-ce que tu… !",
						"spanish": "¡Amir! ¡Qué demonios estás…!",
						"vietnamese": "Amir! Ngươi rốt cuộc đang làm gì…!",
						"thai": "อามีร์! แกกำลังทำอะไรกัน…!",
						"hindi": "अमीर! तुम यह सब क्या कर रहे हो…!"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 저주받은 사막을 진정으로 해방시킬 유일한 방법은…",
						"english": "The only way to truly free this cursed desert is…",
						"japanese": "この呪われた砂漠を真に解放する唯一の方法は…",
						"chinese": "真正解放这片被诅咒的沙漠的唯一方法是…",
						"french": "La seule façon de véritablement libérer ce désert maudit est…",
						"spanish": "La única forma de liberar verdaderamente este desierto maldito es…",
						"vietnamese": "Cách duy nhất để thực sự giải phóng sa mạc bị nguyền rủa này là…",
						"thai": "วิธีเดียวที่จะปลดปล่อยทะเลทรายที่ถูกสาปนี้ได้อย่างแท้จริงคือ…",
						"hindi": "इस शापित रेगिस्तान को वास्तव में आज़ाद करने का एकमात्र तरीका है…"
					}
				},
				{
					"type": "direction",
					"direction": "down",
					"speaker": "amir",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "흥, 결국 다들 똑같지. 혼돈만이 사막을 지배할 진정한 힘이다!",
						"english": "Hmph, everyone's the same in the end. Only chaos is the true power to rule the desert!",
						"japanese": "ふん、結局皆同じだ。混沌こそが砂漠を支配する真の力なのだ！",
						"chinese": "哼，到头来大家都一样。只有混沌才是统治沙漠的真正力量！",
						"french": "Hmph, tout le monde est pareil au final. Seul le chaos est le véritable pouvoir pour régner sur le désert !",
						"spanish": "Hmph, al final todos son iguales. ¡Solo el caos es el verdadero poder para gobernar el desierto!",
						"vietnamese": "Hừm, rốt cuộc thì ai cũng như nhau. Chỉ có hỗn loạn mới là sức mạnh thật sự để thống trị sa mạc!",
						"thai": "หึ สุดท้ายทุกคนก็เหมือนกัน มีเพียงความโกลาหลเท่านั้นที่เป็นพลังที่แท้จริงในการปกครองทะเลทราย!",
						"hindi": "हम्म, आखिर में सब एक जैसे होते हैं। केवल अराजकता ही रेगिस्तान पर राज करने की सच्ची शक्ति है!"
					},
					"emotion": "angry",
					"speaker": "khan",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 보여주마! 이 사막의 심장을 울릴 진정한 파괴를!",
						"english": "Now I'll show you! The true destruction that will make this desert's heart tremble!",
						"japanese": "今こそ見せてやろう！この砂漠の心臓を揺るがす真の破壊を！",
						"chinese": "现在我就让你们看看！让这片沙漠之心颤抖的真正破坏！",
						"french": "Maintenant, je vais vous montrer ! La véritable destruction qui fera trembler le cœur de ce désert !",
						"spanish": "¡Ahora les mostraré! ¡La verdadera destrucción que hará temblar el corazón de este desierto!",
						"vietnamese": "Giờ ta sẽ cho các ngươi thấy! Sự hủy diệt thật sự sẽ làm rung chuyển trái tim của sa mạc này!",
						"thai": "ตอนนี้ข้าจะแสดงให้เจ้าดู! การทำลายล้างที่แท้จริงที่จะทำให้หัวใจของทะเลทรายนี้สั่นสะเทือน!",
						"hindi": "अब मैं तुम्हें दिखाऊंगा! वह सच्चा विनाश जो इस रेगिस्तान के दिल को हिला देगा!"
					},
					"type": "speech",
					"speaker": "khan",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 몰아치는 전장, 거대한 그림자가 나타났다. 알 수 없는 힘이 대지를 뒤흔들었다.",
						"english": "On a battlefield ravaged by sandstorms, a colossal shadow appeared. An unknown power shook the earth.",
						"japanese": "砂嵐が吹き荒れる戦場に、巨大な影が現れた。未知の力が大地を揺るがした。",
						"chinese": "在沙尘暴肆虐的战场上，一个巨大的身影出现了。一股未知的力量撼动了大地。",
						"french": "Sur un champ de bataille ravagé par les tempêtes de sable, une ombre colossale apparut. Une puissance inconnue ébranla la terre.",
						"spanish": "En un campo de batalla asolado por tormentas de arena, apareció una sombra colosal. Un poder desconocido sacudió la tierra.",
						"vietnamese": "Trên chiến trường bị bão cát tàn phá, một bóng đen khổng lồ xuất hiện. Một sức mạnh vô danh đã làm rung chuyển mặt đất.",
						"thai": "ในสนามรบที่ถูกพายุทรายพัดถล่ม เงาขนาดยักษ์ปรากฏขึ้น พลังที่ไม่รู้จักสั่นสะเทือนแผ่นดิน",
						"hindi": "रेत के तूफानों से तबाह युद्ध के मैदान में, एक विशाल छाया प्रकट हुई। एक अज्ञात शक्ति ने धरती को हिला दिया।"
					}
				},
				{
					"content": {
						"korean": "이것이… 너희의 끝이다. 새로운 균형은 파괴 후에 찾아오리라.",
						"english": "This is… your end. A new balance will emerge after destruction.",
						"japanese": "これが…お前たちの終わりだ。新たな均衡は破壊の後に訪れる。",
						"chinese": "这就是…你们的终结。新的平衡将在毁灭之后到来。",
						"french": "C'est… votre fin. Un nouvel équilibre émergera après la destruction.",
						"spanish": "Este es… vuestro fin. Un nuevo equilibrio surgirá después de la destrucción.",
						"vietnamese": "Đây là… kết thúc của các ngươi. Một sự cân bằng mới sẽ xuất hiện sau sự hủy diệt.",
						"thai": "นี่คือ…จุดจบของพวกเจ้า ความสมดุลใหม่จะเกิดขึ้นหลังจากการทำลายล้าง",
						"hindi": "यह है… तुम्हारा अंत। विनाश के बाद एक नया संतुलन उभरेगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "헛소리 마! 넌 그저 파괴를 부추길 뿐이야!",
						"english": "Nonsense! You're just inciting destruction!",
						"japanese": "馬鹿なこと言うな！お前はただ破壊を煽っているだけだ！",
						"chinese": "胡说八道！你只是在煽动破坏！",
						"french": "Quelle bêtise ! Tu ne fais qu'inciter à la destruction !",
						"spanish": "¡Tonterías! ¡Solo estás incitando a la destrucción!",
						"vietnamese": "Vớ vẩn! Ngươi chỉ đang kích động sự hủy diệt!",
						"thai": "เหลวไหล! แกแค่ยุยงให้เกิดการทำลายล้าง!",
						"hindi": "बकवास! तुम बस विनाश को भड़का रहे हो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "khan",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래, 보여줘라! 이 어리석은 자들에게 사막의 진정한 힘을!",
						"english": "Yes, show them! Show these fools the true power of the desert!",
						"japanese": "そうだ、見せてやれ！この愚か者たちに砂漠の真の力を！",
						"chinese": "没错，让他们看看！让这些愚蠢的家伙见识一下沙漠的真正力量！",
						"french": "Oui, montre-leur ! Montre à ces imbéciles le véritable pouvoir du désert !",
						"spanish": "¡Sí, muéstrales! ¡Muéstrales a estos tontos el verdadero poder del desierto!",
						"vietnamese": "Đúng vậy, hãy cho họ thấy! Cho những kẻ ngu ngốc này thấy sức mạnh thật sự của sa mạc!",
						"thai": "ใช่แล้ว แสดงให้พวกเขาเห็น! แสดงพลังที่แท้จริงของทะเลทรายให้คนโง่เหล่านี้ได้เห็น!",
						"hindi": "हाँ, उन्हें दिखाओ! इन मूर्खों को रेगिस्तान की सच्ची शक्ति दिखाओ!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하찮은 존재들… 너희의 노력은… 부질없다…",
						"english": "Insignificant beings... Your efforts are... futile...",
						"japanese": "取るに足らない存在ども…お前たちの努力は…無駄だ…",
						"chinese": "渺小的存在…你们的努力…毫无意义…",
						"french": "Êtres insignifiants... Vos efforts sont... futiles...",
						"spanish": "Seres insignificantes... Vuestros esfuerzos son... inútiles...",
						"vietnamese": "Những kẻ nhỏ bé... Nỗ lực của các ngươi... vô ích thôi...",
						"thai": "พวกสิ่งมีชีวิตไร้ค่า... ความพยายามของพวกเจ้า... ไร้ประโยชน์...",
						"hindi": "तुच्छ प्राणी... तुम्हारे प्रयास... व्यर्थ हैं..."
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 우리는… 포기하지 않아!",
						"english": "No... it's not over yet. We... won't give up!",
						"japanese": "いや…まだ終わってない。私たちは…諦めない！",
						"chinese": "不…还没结束。我们…不会放弃！",
						"french": "Non... ce n'est pas encore fini. Nous... n'abandonnerons pas !",
						"spanish": "No... aún no ha terminado. ¡Nosotros... no nos rendiremos!",
						"vietnamese": "Không... vẫn chưa kết thúc. Chúng ta... sẽ không bỏ cuộc!",
						"thai": "ไม่... ยังไม่จบหรอก เรา... จะไม่ยอมแพ้!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है। हम... हार नहीं मानेंगे!"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 나는… 그저… 메아리일 뿐… 진짜 어둠은… 아직… 잠들어 있다…",
						"english": "Ugh… I am… merely… an echo… The true darkness… still… slumbers…",
						"japanese": "くっ…私は…ただ…こだまにすぎない…本当の闇は…まだ…眠っている…",
						"chinese": "呃…我…只是…一个回声…真正的黑暗…还在…沉睡…",
						"french": "Ugh… Je ne suis… qu'un… écho… La véritable obscurité… sommeille… encore…",
						"spanish": "Ugh… Yo soy… meramente… un eco… La verdadera oscuridad… aún… duerme…",
						"vietnamese": "Ư… Ta… chỉ là… một tiếng vọng… Bóng tối thật sự… vẫn còn… ngủ yên…",
						"thai": "อึก…ข้าเป็นเพียง…เสียงสะท้อน…ความมืดที่แท้จริง…ยังคง…หลับใหล…",
						"hindi": "उफ़… मैं… बस… एक गूँज हूँ… असली अँधेरा… अभी भी… सो रहा है…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "진짜 어둠? 또 다른 존재가 있다고?",
						"english": "True darkness? There's another being?",
						"japanese": "本当の闇？また別の存在がいると？",
						"chinese": "真正的黑暗？还有另一个存在？",
						"french": "La vraie obscurité ? Il y a une autre entité ?",
						"spanish": "¿La verdadera oscuridad? ¿Hay otro ser?",
						"vietnamese": "Bóng tối thật sự? Có một thực thể khác sao?",
						"thai": "ความมืดที่แท้จริง? มีสิ่งมีชีวิตอื่นอีกหรือ?",
						"hindi": "वास्तविक अँधेरा? क्या कोई और अस्तित्व है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 잠잠해졌다. 그러나 사막의 심층에서는 또 다른 균열이 시작되고 있었다. 진정한 평화를 위한 싸움은… 이제부터였다.",
						"english": "The sandstorm subsided. But in the desert's depths, another rift was opening. The fight for true peace... had just begun.",
						"japanese": "砂嵐は収まった。しかし、砂漠の深層では、別の亀裂が開き始めていた。真の平和のための戦いは…これからだった。",
						"chinese": "沙尘暴平息了。然而，在沙漠深处，另一道裂痕正在开启。为真正和平而战的战斗……才刚刚开始。",
						"french": "La tempête de sable s'est calmée. Mais dans les profondeurs du désert, une autre faille s'ouvrait. La lutte pour la vraie paix... ne faisait que commencer.",
						"spanish": "La tormenta de arena amainó. Pero en las profundidades del desierto, otra grieta se abría. La lucha por la verdadera paz... acababa de empezar.",
						"vietnamese": "Bão cát đã lắng xuống. Nhưng sâu thẳm trong sa mạc, một vết nứt khác đang hình thành. Cuộc chiến vì hòa bình thật sự... chỉ vừa mới bắt đầu.",
						"thai": "พายุทรายสงบลงแล้ว แต่ในห้วงลึกของทะเลทราย รอยแยกอีกแห่งกำลังก่อตัวขึ้น การต่อสู้เพื่อสันติภาพที่แท้จริง... เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "रेत का तूफान थम गया। लेकिन रेगिस्तान की गहराइयों में, एक और दरार खुल रही थी। सच्ची शांति के लिए लड़ाई... अभी शुरू हुई थी।"
					}
				}
			]
		}
	]
} as const;
