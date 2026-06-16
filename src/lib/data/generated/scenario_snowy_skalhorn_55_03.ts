export const scenario_snowy_skalhorn_55_03 = {
	"scenario_id": "snowy_skalhorn_55_03",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "골짜기는 잠시 고요했다. 그러나 그 고요는 더 큰 소리의 전조였다.",
						"english": "The valley was quiet for a moment. But that quiet was a prelude to a greater sound.",
						"japanese": "谷は一時静寂に包まれた。しかし、その静寂はより大きな音の前触れだった。",
						"chinese": "山谷短暂地归于平静。然而，那份平静预示着更大的声响。",
						"french": "La vallée fut silencieuse un instant. Mais ce silence était le prélude d'un son plus grand.",
						"spanish": "El valle estuvo en silencio por un momento. Pero ese silencio fue el preludio de un sonido mayor.",
						"vietnamese": "Thung lũng yên tĩnh một lúc. Nhưng sự yên tĩnh đó là điềm báo cho một âm thanh lớn hơn.",
						"thai": "หุบเขานิ่งสงบอยู่ครู่หนึ่ง แต่ความสงบนั้นเป็นลางบอกเหตุของเสียงที่ใหญ่กว่า",
						"hindi": "घाटी पल भर के लिए शांत थी। लेकिन वह शांति एक बड़ी आवाज का पूर्वाभ्यास थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…드디어 잠잠해졌군.",
						"english": "...It finally quieted down.",
						"japanese": "…ようやく静かになったな。",
						"chinese": "……终于安静下来了。",
						"french": "...Ça s'est enfin calmé.",
						"spanish": "...Finalmente se calmó.",
						"vietnamese": "...Cuối cùng thì nó cũng yên lặng rồi.",
						"thai": "...ในที่สุดก็สงบลงแล้ว",
						"hindi": "...आखिरकार यह शांत हो गया।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니요. 더 잘 들려요. 이전엔 섞여서 구별 못 했던 소리가.",
						"english": "No. I can hear it better now. Sounds I couldn't distinguish before because they were mixed.",
						"japanese": "いいえ。前よりもよく聞こえます。以前は混ざって区別できなかった音が。",
						"chinese": "不。我听得更清楚了。那些以前混杂在一起，无法分辨的声音。",
						"french": "Non. Je l'entends mieux. Des sons que je ne pouvais pas distinguer avant car ils étaient mélangés.",
						"spanish": "No. Lo escucho mejor ahora. Sonidos que antes no podía distinguir porque estaban mezclados.",
						"vietnamese": "Không. Tôi nghe rõ hơn rồi. Những âm thanh mà trước đây tôi không thể phân biệt vì chúng lẫn vào nhau.",
						"thai": "ไม่ค่ะ ฉันได้ยินชัดขึ้นแล้ว เสียงที่เมื่อก่อนปะปนจนแยกไม่ออก",
						"hindi": "नहीं। मुझे अब बेहतर सुनाई दे रहा है। ऐसी आवाजें जिन्हें मैं पहले मिलावट की वजह से पहचान नहीं पाता था।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리?",
						"english": "What sound?",
						"japanese": "何の音だ？",
						"chinese": "什么声音？",
						"french": "Quel son ?",
						"spanish": "¿Qué sonido?",
						"vietnamese": "Âm thanh gì?",
						"thai": "เสียงอะไร?",
						"hindi": "कैसी आवाज?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "불협. 찬가 속에 숨겨진 비명.",
						"english": "Discord. Screams hidden within hymns.",
						"japanese": "不協和音。賛歌の中に隠された悲鳴。",
						"chinese": "不和谐。赞歌中隐藏的尖叫。",
						"french": "La discorde. Des cris cachés dans les hymnes.",
						"spanish": "Discordia. Gritos ocultos en los himnos.",
						"vietnamese": "Bất hòa. Những tiếng hét ẩn chứa trong thánh ca.",
						"thai": "ความไม่ลงรอย เสียงกรีดร้องที่ซ่อนอยู่ในเพลงสรรเสริญ",
						"hindi": "विसंगति। भजनों में छिपी चीखें।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 가락, 어딘가 틀어져 있어요.",
						"english": "This melody, it's off somehow.",
						"japanese": "この旋律、どこか狂っています。",
						"chinese": "这旋律，有些不对劲。",
						"french": "Cette mélodie, elle est fausse quelque part.",
						"spanish": "Esta melodía, algo anda mal.",
						"vietnamese": "Giai điệu này, có gì đó lệch lạc.",
						"thai": "ทำนองนี้ มันเพี้ยนไปแล้ว",
						"hindi": "यह धुन, कहीं न कहीं गड़बड़ है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "틀어져 있다니?",
						"english": "Off? How so?",
						"japanese": "狂っていると？",
						"chinese": "不对劲？",
						"french": "Fausse ? Comment ça ?",
						"spanish": "¿Mal? ¿En qué sentido?",
						"vietnamese": "Lệch lạc sao?",
						"thai": "เพี้ยนยังไง?",
						"hindi": "गड़बड़ है? कैसे?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "음표 하나하나가 엇나가고, 화음은… 부조화로 가득해요.",
						"english": "Each note is astray, and the harmony… it's full of discord.",
						"japanese": "音符一つ一つがずれていて、和音は…不協和音に満ちています。",
						"chinese": "每个音符都错位了，和弦…充满了不和谐。",
						"french": "Chaque note est décalée, et l'harmonie… elle est pleine de discorde.",
						"spanish": "Cada nota está fuera de lugar, y la armonía… está llena de discordia.",
						"vietnamese": "Mỗi nốt nhạc đều lệch lạc, và hợp âm… đầy sự bất hòa.",
						"thai": "แต่ละโน้ตมันผิดเพี้ยนไปหมด และฮาร์โมนี… เต็มไปด้วยความไม่ลงรอย",
						"hindi": "हर नोट बेमेल है, और सामंजस्य… यह कलह से भरा है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그게 무엇을 의미하지?",
						"english": "What does that mean?",
						"japanese": "それは何を意味する？",
						"chinese": "那意味着什么？",
						"french": "Qu'est-ce que ça signifie ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa là gì?",
						"thai": "นั่นหมายความว่ายังไง?",
						"hindi": "इसका क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 신의 찬가가 아니에요. 광기의 울림이 섞여 있어요.",
						"english": "This isn't… a hymn to a god. It's mixed with the echoes of madness.",
						"japanese": "これは…神の賛歌ではありません。狂気の響きが混じっています。",
						"chinese": "这不…是神的赞歌。它混杂着疯狂的回响。",
						"french": "Ce n'est pas… un hymne divin. C'est mêlé aux échos de la folie.",
						"spanish": "Esto no es… un himno divino. Está mezclado con los ecos de la locura.",
						"vietnamese": "Đây không phải… thánh ca của thần. Nó lẫn lộn với tiếng vọng của sự điên loạn.",
						"thai": "นี่ไม่ใช่… เพลงสรรเสริญเทพ แต่มันปะปนไปด้วยเสียงก้องของความบ้าคลั่ง",
						"hindi": "यह… किसी देवता का भजन नहीं है। इसमें पागलपन की गूँज मिली हुई है।"
					},
					"speaker": "eira",
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록할수록 명확해져요. 이 노래는 하나가 아니에요.",
						"english": "The more I record, the clearer it becomes. This song isn't just one.",
						"japanese": "記録するほど明確になります。この歌は一つではありません。",
						"chinese": "记录得越多，就越清晰。这首歌不是一首。",
						"french": "Plus j'enregistre, plus ça devient clair. Ce chant n'est pas unique.",
						"spanish": "Cuanto más grabo, más claro queda. Esta canción no es una sola.",
						"vietnamese": "Càng ghi chép, càng rõ ràng. Bài hát này không phải là một.",
						"thai": "ยิ่งบันทึกก็ยิ่งชัดเจน เพลงนี้ไม่ใช่แค่เพลงเดียว",
						"hindi": "जितना अधिक मैं रिकॉर्ड करता हूँ, उतना ही स्पष्ट होता जाता है। यह गाना एक नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "두 개의 소리가 뒤섞였다는 말인가?",
						"english": "You mean two sounds are mixed?",
						"japanese": "二つの音が混ざり合っていると？",
						"chinese": "是说两种声音混杂在一起？",
						"french": "Deux sons se sont mêlés, c'est ça ?",
						"spanish": "¿Quieres decir que dos sonidos se mezclaron?",
						"vietnamese": "Ý anh là hai âm thanh bị trộn lẫn?",
						"thai": "หมายความว่ามีสองเสียงปะปนกันงั้นเหรอ?",
						"hindi": "क्या तुम्हारा मतलब है कि दो आवाज़ें आपस में मिल गई हैं?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "네. 하나는 숭고한 염원, 다른 하나는… 파멸의 속삭임.",
						"english": "Yes. One is a sublime wish, the other… a whisper of ruin.",
						"japanese": "はい。一つは崇高な願い、もう一つは…破滅の囁きです。",
						"chinese": "是的。一个是崇高的愿望，另一个是…毁灭的低语。",
						"french": "Oui. L'un est un souhait sublime, l'autre… un murmure de ruine.",
						"spanish": "Sí. Uno es un deseo sublime, el otro… un susurro de ruina.",
						"vietnamese": "Vâng. Một là nguyện vọng cao cả, cái còn lại… là lời thì thầm của sự hủy diệt.",
						"thai": "ใช่ครับ หนึ่งคือความปรารถนาอันสูงส่ง อีกหนึ่งคือ… เสียงกระซิบแห่งหายนะ",
						"hindi": "हाँ। एक उदात्त इच्छा है, दूसरा… विनाश की फुसफुसाहट है।"
					}
				},
				{
					"content": {
						"korean": "어떻게 둘이 동시에?",
						"english": "How can both happen at once?",
						"japanese": "どうして二つが同時に？",
						"chinese": "怎么会同时出现两种？",
						"french": "Comment les deux peuvent-ils être simultanés ?",
						"spanish": "¿Cómo pueden ser ambos a la vez?",
						"vietnamese": "Làm sao cả hai lại đồng thời?",
						"thai": "เป็นไปได้ยังไงที่ทั้งสองจะเกิดขึ้นพร้อมกัน?",
						"hindi": "दोनों एक साथ कैसे हो सकते हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어쩌면 처음부터, 경계는 없었는지도요.",
						"english": "Perhaps there was no boundary from the beginning.",
						"japanese": "もしかしたら最初から、境界はなかったのかもしれません。",
						"chinese": "或许从一开始，就没有界限。",
						"french": "Peut-être que depuis le début, il n'y avait pas de frontière.",
						"spanish": "Quizás desde el principio, no había límites.",
						"vietnamese": "Có lẽ ngay từ đầu, đã không có ranh giới nào.",
						"thai": "บางทีตั้งแต่แรกเริ่ม อาจไม่มีขอบเขตเลยก็ได้",
						"hindi": "शायद शुरू से ही कोई सीमा नहीं थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여기까지 오니 더 강렬하게 들려요. 그… 비명 소리가.",
						"english": "It's even stronger here. That... screaming.",
						"japanese": "ここまで来ると、さらに強く聞こえる。あの…悲鳴が。",
						"chinese": "到这里听起来更强烈了。那…尖叫声。",
						"french": "Ici, c'est encore plus intense. Ce... cri.",
						"spanish": "Aquí se oye aún más fuerte. Ese... grito.",
						"vietnamese": "Đến đây nghe càng rõ hơn. Tiếng... hét đó.",
						"thai": "มาถึงตรงนี้มันยิ่งรุนแรงขึ้น เสียงกรีดร้องนั้น...",
						"hindi": "यहाँ तक आने पर और तीव्र सुनाई देती है। वो... चीख।"
					}
				},
				{
					"content": {
						"korean": "점점 더 심해지는군.",
						"english": "It's getting worse.",
						"japanese": "ますますひどくなっているな。",
						"chinese": "越来越严重了。",
						"french": "Ça empire.",
						"spanish": "Cada vez es peor.",
						"vietnamese": "Càng lúc càng tệ.",
						"thai": "มันแย่ลงเรื่อยๆ",
						"hindi": "यह और बदतर होता जा रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"content": {
						"korean": "이 화음은 우리를 홀리려 해요. 혼돈 속으로 끌어들이려.",
						"english": "This harmony tries to enchant us. To drag us into chaos.",
						"japanese": "この和音は私たちを惑わそうとしている。混沌へと引きずり込もうと。",
						"chinese": "这和声想迷惑我们。想把我们拖入混沌。",
						"french": "Cette harmonie essaie de nous ensorceler. De nous entraîner dans le chaos.",
						"spanish": "Esta armonía intenta hechizarnos. Arrastrarnos al caos.",
						"vietnamese": "Hợp âm này muốn mê hoặc chúng ta. Kéo chúng ta vào hỗn loạn.",
						"thai": "เสียงประสานนี้พยายามจะสะกดจิตเรา ดึงเราเข้าสู่ความวุ่นวาย",
						"hindi": "यह स्वर हमें मोहित करने की कोशिश कर रहा है। हमें अराजकता में घसीटने की।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 가면 위험하겠군.",
						"english": "Continuing like this will be dangerous.",
						"japanese": "このままでは危険だな。",
						"chinese": "这样下去会很危险。",
						"french": "Continuer ainsi serait dangereux.",
						"spanish": "Si seguimos así, será peligroso.",
						"vietnamese": "Cứ thế này sẽ nguy hiểm.",
						"thai": "ถ้าเป็นแบบนี้ต่อไปคงอันตราย",
						"hindi": "ऐसे चलते रहे तो ख़तरनाक होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "분별해야 해요. 어떤 소리를 따라야 할지.",
						"english": "We must discern which sound to follow.",
						"japanese": "見極めなければならない。どの音に従うべきか。",
						"chinese": "我们必须分辨。该跟随哪个声音。",
						"french": "Nous devons discerner. Quel son suivre.",
						"spanish": "Tenemos que discernir. Qué sonido seguir.",
						"vietnamese": "Chúng ta cần phải phân biệt. Nên theo âm thanh nào.",
						"thai": "เราต้องแยกแยะว่าควรตามเสียงไหน",
						"hindi": "हमें समझना होगा। किस आवाज़ का अनुसरण करना है।"
					},
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 그가 남긴 불협은 여전히 맴돌았다.",
						"english": "The unknown boss fell. Yet, the discord he left still lingered.",
						"japanese": "正体不明のボスは倒れた。しかし、彼が残した不協和音はまだ漂っていた。",
						"chinese": "身份不明的Boss倒下了。然而，他留下的不和谐音符仍在回荡。",
						"french": "Le boss inconnu est tombé. Pourtant, la discorde qu'il a laissée persistait.",
						"spanish": "El jefe desconocido cayó. Sin embargo, la disonancia que dejó aún perduraba.",
						"vietnamese": "Trùm ẩn danh đã gục ngã. Nhưng âm hưởng bất hòa hắn để lại vẫn còn vương vấn.",
						"thai": "บอสปริศนาล้มลงแล้ว แต่ความไม่ลงรอยที่เขาทิ้งไว้ยังคงอยู่",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, उसके द्वारा छोड़ी गई विसंगति अभी भी कायम थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "하찮은… 저항. 너희 또한… 이 가락의… 일부가 될 것이다…",
						"english": "Futile… resistance. You too… shall become… part of this melody…",
						"japanese": "無駄な…抵抗だ。お前たちも…この調べの…一部となるだろう…",
						"chinese": "渺小的…抵抗。你们也…将成为…这旋律的…一部分…",
						"french": "Résistance… futile. Vous aussi… ferez partie… de cette mélodie…",
						"spanish": "Inútil… resistencia. Vosotros también… seréis parte… de esta melodía…",
						"vietnamese": "Kháng cự… vô ích. Các ngươi cũng… sẽ trở thành… một phần của giai điệu này…",
						"thai": "การต่อต้าน…ที่ไร้ค่า พวกเจ้าเองก็…จะต้องกลายเป็น…ส่วนหนึ่งของทำนองนี้…",
						"hindi": "व्यर्थ… प्रतिरोध। तुम भी… इस धुन का… हिस्सा बनोगे…"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "끝나지 않았어요. 이 불협은… 더 깊은 곳에서 시작된 걸지도 몰라요.",
						"english": "It's not over. This discord… might have originated from a deeper place.",
						"japanese": "終わっていません。この不協和音は…もっと深い場所から始まったのかもしれません。",
						"chinese": "还没结束。这种不和谐…可能源于更深的地方。",
						"french": "Ce n'est pas fini. Cette discorde… pourrait avoir commencé plus profondément.",
						"spanish": "No ha terminado. Esta disonancia… podría haberse originado en un lugar más profundo.",
						"vietnamese": "Chưa kết thúc đâu. Âm hưởng bất hòa này… có lẽ bắt nguồn từ một nơi sâu thẳm hơn.",
						"thai": "มันยังไม่จบ ความไม่ลงรอยนี้…อาจจะเริ่มต้นจากที่ที่ลึกกว่านั้นก็ได้",
						"hindi": "यह खत्म नहीं हुआ है। यह विसंगति… शायद एक गहरे स्थान से शुरू हुई है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "젠장… 계속되는 건가.",
						"english": "Damn it… Is it still going on?",
						"japanese": "くそ…まだ続くのか。",
						"chinese": "该死…还没完吗。",
						"french": "Bon sang… Ça continue ?",
						"spanish": "Maldita sea… ¿Continúa?",
						"vietnamese": "Chết tiệt… Nó vẫn tiếp diễn sao.",
						"thai": "บ้าเอ๊ย… มันยังคงดำเนินต่อไปงั้นเหรอ?",
						"hindi": "धिक्कार है… क्या यह अभी भी चल रहा है?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "에이라는 새로운 악보에, 또 다른 불협의 음표를 기록했다. 멈출 수 없었다.",
						"english": "Eira recorded another note of discord on a new score. It couldn't be stopped.",
						"japanese": "エイラは新しい楽譜に、さらなる不協和音の音符を記した。止めることはできなかった。",
						"chinese": "艾拉在新的乐谱上，记录了另一个不和谐的音符。无法阻止。",
						"french": "Eira a enregistré une autre note de discorde sur une nouvelle partition. Il était impossible de l'arrêter.",
						"spanish": "Eira registró otra nota de disonancia en una nueva partitura. No se podía detener.",
						"vietnamese": "Eira đã ghi một nốt nhạc bất hòa khác vào bản nhạc mới. Không thể ngăn cản.",
						"thai": "ไอราได้บันทึกโน้ตที่ไม่ลงรอยอีกตัวลงบนโน้ตเพลงใหม่ ไม่สามารถหยุดได้",
						"hindi": "एरा ने एक नए स्कोर पर असंगति का एक और नोट दर्ज किया। इसे रोका नहीं जा सका।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "불협의 노래는 더욱 거세졌고, 동행단은 그 속에 잠식되어 갔다.",
						"english": "The song of discord grew fiercer, and the companions were engulfed within it.",
						"japanese": "不協和音の歌はさらに激しくなり、一行はその中に飲み込まれていった。",
						"chinese": "不和谐之歌愈发猛烈，同行者们逐渐被其吞噬。",
						"french": "Le chant de la discorde s'intensifia, et les compagnons furent engloutis par celui-ci.",
						"spanish": "El canto de la disonancia se hizo más feroz, y la compañía fue engullida por él.",
						"vietnamese": "Bản nhạc bất hòa càng lúc càng dữ dội, đoàn tùy tùng dần bị nhấn chìm vào đó.",
						"thai": "เพลงแห่งความไม่ลงรอยทวีความรุนแรงขึ้น และคณะเดินทางก็ถูกกลืนกินเข้าไปในนั้น",
						"hindi": "विसंगति का गीत और तीव्र होता गया, और साथी उसमें समाहित होते चले गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국… 너희도… 나의 노래가 될 것이다… 영원히…",
						"english": "Eventually… you too… shall become… my song… forever…",
						"japanese": "結局…お前たちも…私の歌となるだろう…永遠に…",
						"chinese": "最终…你们也…将成为…我的歌…永恒…",
						"french": "Finalement… vous aussi… deviendrez… ma chanson… pour toujours…",
						"spanish": "Finalmente… vosotros también… seréis… mi canción… para siempre…",
						"vietnamese": "Cuối cùng… các ngươi cũng… sẽ trở thành… bài ca của ta… mãi mãi…",
						"thai": "ท้ายที่สุด… พวกเจ้าก็… จะกลายเป็น… เพลงของข้า… ชั่วนิรันดร์…",
						"hindi": "अंततः… तुम भी… मेरा गीत बनोगे… हमेशा के लिए…"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크윽… 포기하지 않아…!",
						"english": "Ugh… I won't give up…!",
						"japanese": "くっ…諦めない…！",
						"chinese": "呃…我不会放弃的…！",
						"french": "Ugh… Je n'abandonnerai pas… !",
						"spanish": "¡Argh… No me rendiré…!",
						"vietnamese": "Khụ… Ta sẽ không từ bỏ…!",
						"thai": "อึก… ข้าจะไม่ยอมแพ้…!",
						"hindi": "उह… मैं हार नहीं मानूँगा…!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아직… 아직 기록해야 할 것이 남아있어요…!",
						"english": "Still... still so much left to record...!",
						"japanese": "まだ… まだ記録することが残っているのに…！",
						"chinese": "还有… 还有好多要记录的…！",
						"french": "Encore... il y a encore tant à enregistrer... !",
						"spanish": "Todavía... todavía queda mucho por registrar... !",
						"vietnamese": "Vẫn còn... vẫn còn những điều cần ghi chép...!",
						"thai": "ยัง... ยังมีสิ่งที่ต้องบันทึกอีกเยอะเลย...!",
						"hindi": "अभी भी... अभी भी बहुत कुछ दर्ज करना बाकी है...!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고통스러운 불협화음이 방 안을 채웠다. 그 중심에, 정체 모를 그림자가 있었다.",
						"english": "A painful dissonance filled the room. At its center, an unknown shadow stood.",
						"japanese": "苦痛に満ちた不協和音が部屋を満たした。その中心には、正体不明の影があった。",
						"chinese": "痛苦的不和谐音充满了房间。在它的中心，是一个不明身份的影子。",
						"french": "Une dissonance douloureuse remplissait la pièce. En son centre, une ombre inconnue se tenait.",
						"spanish": "Una disonancia dolorosa llenaba la habitación. En su centro, una sombra desconocida.",
						"vietnamese": "Một sự bất hòa đau đớn tràn ngập căn phòng. Ở trung tâm, có một cái bóng không rõ danh tính.",
						"thai": "เสียงไม่ประสานที่เจ็บปวดเติมเต็มห้อง ตรงกลางนั้น มีเงาปริศนาอยู่",
						"hindi": "एक दर्दनाक बेसुरापन कमरे में भर गया। उसके केंद्र में, एक अज्ञात छाया थी।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "왔는가, 미혹된 자들. 나의 노래를 들으러.",
						"english": "Have you come, deluded ones? To hear my song.",
						"japanese": "来たか、惑える者たちよ。我が歌を聞きに。",
						"chinese": "来了吗，被迷惑者们。来听我的歌。",
						"french": "Êtes-vous venus, les égarés ? Pour écouter mon chant.",
						"spanish": "¿Habéis venido, extraviados? A escuchar mi canto.",
						"vietnamese": "Đến rồi sao, những kẻ bị mê hoặc. Đến nghe bài hát của ta.",
						"thai": "มาแล้วหรือ ผู้หลงผิด มาฟังเพลงของข้า",
						"hindi": "आ गए, भटके हुए लोगों? मेरा गीत सुनने।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "이 노래가… 네놈의 짓이냐?",
						"english": "This song... is it your doing?",
						"japanese": "この歌が…貴様の仕業か？",
						"chinese": "这首歌…是你的杰作吗？",
						"french": "Cette chanson... est-ce ton œuvre ?",
						"spanish": "¿Esta canción... es obra tuya?",
						"vietnamese": "Bài hát này... là do ngươi làm?",
						"thai": "เพลงนี้... เป็นฝีมือแกงั้นหรือ?",
						"hindi": "यह गीत... क्या यह तुम्हारा काम है?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "내 노래는 진실이다. 너희가 외면했던.",
						"english": "My song is truth. The truth you turned away from.",
						"japanese": "我が歌は真実だ。お前たちが目を背けてきた真実が。",
						"chinese": "我的歌是真相。你们一直回避的。",
						"french": "Mon chant est la vérité. Celle que vous avez rejetée.",
						"spanish": "Mi canto es la verdad. La que habéis ignorado.",
						"vietnamese": "Bài hát của ta là sự thật. Thứ mà các ngươi đã quay lưng.",
						"thai": "เพลงของข้าคือความจริง ความจริงที่พวกเจ้าเมินเฉย",
						"hindi": "मेरा गीत सत्य है। जिसे तुमने नज़रअंदाज़ किया।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "아니요. 이 노래는 비명이에요. 고통받는 존재들의.",
						"english": "No. This song is a scream. Of tormented beings.",
						"japanese": "いいえ。この歌は悲鳴です。苦しむ者たちの。",
						"chinese": "不。这首歌是尖叫。是受苦者的。",
						"french": "Non. Ce chant est un cri. Celui d'êtres tourmentés.",
						"spanish": "No. Este canto es un grito. De seres atormentados.",
						"vietnamese": "Không. Bài hát này là tiếng hét. Của những sinh vật đang đau khổ.",
						"thai": "ไม่ค่ะ เพลงนี้คือเสียงกรีดร้อง ของสิ่งมีชีวิตที่ทุกข์ทรมาน",
						"hindi": "नहीं। यह गीत एक चीख है। पीड़ित प्राणियों की।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "감히… 내 신성한 가락을 부정하는가?",
						"english": "How dare you… deny my sacred melody?",
						"japanese": "まさか…私の神聖な調べを否定するとは？",
						"chinese": "竟敢…否定我神圣的旋律？",
						"french": "Comment osez-vous… nier ma mélodie sacrée ?",
						"spanish": "¿Cómo osas… negar mi melodía sagrada?",
						"vietnamese": "Ngươi… dám phủ nhận giai điệu thiêng liêng của ta sao?",
						"thai": "กล้าดียังไง… ปฏิเสธทำนองศักดิ์สิทธิ์ของข้า?",
						"hindi": "तुम कैसे… मेरे पवित्र धुन को नकारने की हिम्मत करते हो?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "더 이상 듣고 싶지 않아. 멈춰라!",
						"english": "I don't want to hear it anymore. Stop!",
						"japanese": "もう聞きたくない。やめろ！",
						"chinese": "我不想再听了。住手！",
						"french": "Je ne veux plus entendre ça. Arrêtez !",
						"spanish": "No quiero oír más. ¡Detente!",
						"vietnamese": "Ta không muốn nghe nữa. Dừng lại đi!",
						"thai": "ข้าไม่อยากฟังอีกแล้ว หยุดซะ!",
						"hindi": "मैं और नहीं सुनना चाहता। रुक जाओ!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"뿔잔의 웅얼거림이 잦아들었지만,",
			"침묵은 더 깊은 혼란을 가져왔다.",
			"신앙과 광기, 거룩함과 미혹 — 그 경계가 흐려지는 순간.",
			"가락의 기록자, 에이라는 펜을 들었다.",
			"뒤섞인 불협 속에서, 진실의 악보를 찾아야 한다."
		],
		"english": [
			"The whispering of the horn subsided, but",
			"the silence brought a deeper chaos.",
			"Faith and madness, sanctity and temptation—the moment their boundaries blurred.",
			"Aira, the chronicler of melodies, took up her pen.",
			"Amidst the mingled discord, she must find the score of truth."
		],
		"japanese": [
			"角笛のささやきは収まったが、",
			"沈黙はより深い混乱をもたらした。",
			"信仰と狂気、聖性と誘惑 — その境界が曖昧になる瞬間。",
			"旋律の記録者、アイラはペンを執った。",
			"混じり合う不協和音の中で、真実の楽譜を見つけねばならない。"
		],
		"chinese": [
			"尽管号角的低语已平息，",
			"寂静却带来了更深的混乱。",
			"信仰与疯狂，圣洁与诱惑——边界模糊的瞬间。",
			"旋律的记录者，艾拉，执起了笔。",
			"在混杂的失和中，她必须找到真相的乐谱。"
		],
		"french": [
			"Le murmure du cor s'est estompé, mais",
			"le silence apporta un chaos plus profond.",
			"Foi et folie, sainteté et tentation — l'instant où leurs frontières s'estompent.",
			"Aira, la chroniqueuse des mélodies, prit sa plume.",
			"Au milieu de la discorde mêlée, elle doit trouver la partition de la vérité."
		],
		"spanish": [
			"El murmullo del cuerno disminuyó, pero",
			"el silencio trajo un caos más profundo.",
			"Fe y locura, santidad y tentación — el momento en que sus límites se difuminaron.",
			"Aira, la cronista de las melodías, tomó su pluma.",
			"Entre la discordia mezclada, debe encontrar la partitura de la verdad."
		],
		"vietnamese": [
			"Tiếng thì thầm của chiếc sừng đã lắng xuống, nhưng",
			"sự im lặng mang đến một sự hỗn loạn sâu sắc hơn.",
			"Niềm tin và sự điên rồ, sự thánh thiện và cám dỗ — khoảnh khắc ranh giới của chúng mờ đi.",
			"Aira, người ghi chép giai điệu, đã cầm bút lên.",
			"Giữa sự bất hòa lẫn lộn, cô ấy phải tìm ra bản nhạc của sự thật."
		],
		"thai": [
			"เสียงกระซิบของแตรเขาได้จางหายไปแล้ว แต่",
			"ความเงียบสงบกลับนำมาซึ่งความสับสนที่ลึกซึ้งกว่า",
			"ศรัทธาและความวิกลจริต ความศักดิ์สิทธิ์และการล่อลวง — ช่วงเวลาที่เส้นแบ่งพร่าเลือน",
			"ไอรา ผู้บันทึกท่วงทำนอง จับปากกาขึ้นมา",
			"ท่ามกลางความไม่ลงรอยที่ปะปน เธอต้องค้นหาทำนองแห่งความจริง"
		],
		"hindi": [
			"हालांकि सींग की फुसफुसाहट थम गई थी,",
			"खामोशी एक गहरा विकार लेकर आई।",
			"आस्था और पागलपन, पवित्रता और प्रलोभन — वह क्षण जब उनकी सीमाएँ धुंधली हो गईं।",
			"धुन की लेखिका, ऐरा ने अपनी कलम उठाई।",
			"मिली-जुली विसंगति के बीच, उसे सत्य का स्कोर खोजना होगा।"
		]
	}
} as const;
