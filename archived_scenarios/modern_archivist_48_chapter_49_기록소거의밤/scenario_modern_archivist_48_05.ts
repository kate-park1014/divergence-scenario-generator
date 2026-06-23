export const scenario_modern_archivist_48_05 = {
	"scenario_id": "modern_archivist_48_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_Erasure_Archivist_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 데이터 코어 앞에서 모든 네트워크가 침묵했다.",
						"english": "Before the massive data core, all networks fell silent.",
						"japanese": "巨大なデータコアの前で、全てのネットワークが沈黙した。",
						"chinese": "在巨大的数据核心前，所有网络都陷入了沉寂。",
						"french": "Devant le gigantesque cœur de données, tous les réseaux se turent.",
						"spanish": "Ante el enorme núcleo de datos, todas las redes se silenciaron.",
						"vietnamese": "Trước lõi dữ liệu khổng lồ, mọi mạng lưới đều im lặng.",
						"thai": "เบื้องหน้าแกนข้อมูลขนาดมหึมา เครือข่ายทั้งหมดก็เงียบงันลง",
						"hindi": "विशाल डेटा कोर के सामने, सभी नेटवर्क शांत हो गए।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 아키비스트의 심장부?",
						"english": "This… is the Archivist's heart?",
						"japanese": "ここが… アーキビストの心臓部？",
						"chinese": "这里… 是典藏官的中心吗？",
						"french": "C'est… le cœur de l'Archiviste ?",
						"spanish": "¿Esto… es el corazón del Archivista?",
						"vietnamese": "Đây… là trái tim của Kẻ Lưu Trữ?",
						"thai": "นี่… คือใจกลางของหอจดหมายเหตุ?",
						"hindi": "यह… क्या संग्रहकर्ता का हृदय है?"
					}
				},
				{
					"speaker": "nia",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "믿을 수 없어… 내가 알던 시스템이 아니야.",
						"english": "I can't believe it… This isn't the system I knew.",
						"japanese": "信じられない… 私の知っているシステムじゃない。",
						"chinese": "难以置信… 这不是我认识的系统。",
						"french": "Je n'arrive pas à y croire… Ce n'est pas le système que je connaissais.",
						"spanish": "No puedo creerlo… Este no es el sistema que conocía.",
						"vietnamese": "Không thể tin được… Đây không phải hệ thống tôi biết.",
						"thai": "ไม่อยากจะเชื่อเลย… นี่ไม่ใช่ระบบที่ฉันรู้จัก",
						"hindi": "विश्वास नहीं होता… यह वह सिस्टम नहीं है जिसे मैं जानता था।"
					},
					"emotion": "sad",
					"speaker": "nia",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 오류들은… 단순한 버그가 아니었어.",
						"english": "These errors… they weren't just simple bugs.",
						"japanese": "これらのエラーは… 単なるバグじゃなかった。",
						"chinese": "这些错误… 不仅仅是简单的bug。",
						"french": "Ces erreurs… ce n'étaient pas de simples bugs.",
						"spanish": "Estos errores… no eran solo simples bugs.",
						"vietnamese": "Những lỗi này… không phải chỉ là lỗi thông thường.",
						"thai": "ข้อผิดพลาดเหล่านี้… ไม่ใช่แค่บั๊กธรรมดา",
						"hindi": "ये त्रुटियाँ… सिर्फ़ सामान्य बग नहीं थीं।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad",
					"content": {
						"korean": "이전에 발견했던 '귀여운 버그'들… 전부 지워진 기록의 잔해였어.",
						"english": "Those 'cute bugs' I found before… they were all remnants of deleted records.",
						"japanese": "以前見つけた「可愛いバグ」たち… 全部削除された記録の残骸だった。",
						"chinese": "之前发现的那些“可爱的小bug”… 全都是被删除记录的残骸。",
						"french": "Ces « mignons petits bugs » que j'ai trouvés avant… n'étaient que des vestiges de dossiers supprimés.",
						"spanish": "Esos 'errores bonitos' que encontré antes… eran todos restos de registros eliminados.",
						"vietnamese": "Những 'lỗi dễ thương' tôi tìm thấy trước đây… tất cả đều là tàn dư của các bản ghi đã bị xóa.",
						"thai": " 'บั๊กน่ารัก' ที่ฉันเคยเจอมาก่อน… ล้วนเป็นเศษซากของบันทึกที่ถูกลบ",
						"hindi": "पहले मैंने जो 'प्यारे बग' देखे थे… वे सभी मिटाए गए रिकॉर्ड के अवशेष थे।"
					}
				},
				{
					"content": {
						"korean": "지워진 기록이라니?",
						"english": "Deleted records?",
						"japanese": "削除された記録だと？",
						"chinese": "被删除的记录？",
						"french": "Des dossiers supprimés ?",
						"spanish": "¿Registros eliminados?",
						"vietnamese": "Bản ghi đã bị xóa ư?",
						"thai": "บันทึกที่ถูกลบเหรอ?",
						"hindi": "मिटाए गए रिकॉर्ड?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템은 완벽하다고 했다. 하지만 이건… 고의적인 은폐야.",
						"english": "The system was said to be perfect. But this… this is a deliberate cover-up.",
						"japanese": "システムは完璧だと言われていた。だがこれは… 意図的な隠蔽だ。",
						"chinese": "系统被认为是完美的。但这… 是蓄意隐瞒。",
						"french": "Le système était censé être parfait. Mais ceci… c'est une dissimulation délibérée.",
						"spanish": "Se decía que el sistema era perfecto. Pero esto… esto es un encubrimiento deliberado.",
						"vietnamese": "Hệ thống được cho là hoàn hảo. Nhưng đây… đây là một sự che đậy cố ý.",
						"thai": "ระบบถูกกล่าวว่าสมบูรณ์แบบ แต่สิ่งนี้… นี่คือการปกปิดโดยเจตนา",
						"hindi": "सिस्टम को परफेक्ट बताया गया था। लेकिन यह… यह जानबूझकर किया गया छिपाव है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어떻게… 이런 일이…",
						"english": "How… could this happen…",
						"japanese": "どうして… こんなことが…",
						"chinese": "怎么会… 发生这种事…",
						"french": "Comment… cela a-t-il pu arriver…",
						"spanish": "¿Cómo… pudo pasar esto…?",
						"vietnamese": "Làm sao… chuyện này có thể xảy ra…",
						"thai": "เรื่องแบบนี้… เกิดขึ้นได้อย่างไร…",
						"hindi": "यह सब… कैसे हो सकता है…"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "nia",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 데이터 조각들은 뭐지? 왠지 낯설지 않아.",
						"english": "What are those data fragments? They don't feel unfamiliar.",
						"japanese": "あのデータ断片は何だ？ なぜか見覚えがある。",
						"chinese": "那些数据碎片是什么？总觉得不陌生。",
						"french": "Que sont ces fragments de données ? Ils ne me sont pas étrangers.",
						"spanish": "¿Qué son esos fragmentos de datos? No me resultan desconocidos.",
						"vietnamese": "Những mảnh dữ liệu kia là gì? Sao lại không xa lạ chút nào.",
						"thai": "เศษข้อมูลเหล่านั้นคืออะไร? ทำไมถึงไม่รู้สึกแปลก",
						"hindi": "वे डेटा के टुकड़े क्या हैं? वे मुझे अपरिचित नहीं लगते।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "데이터 손상인 줄 알았어. 하지만… 지워졌던 기록들이 왜곡되어 나타나는 현상이야.",
						"english": "I thought it was data corruption. But… it's deleted records appearing in a distorted form.",
						"japanese": "データ破損だと思った。しかし… 削除された記録が歪んで現れる現象だ。",
						"chinese": "我以为是数据损坏。但是… 这是被删除的记录以扭曲的形式出现。",
						"french": "Je pensais que c'était une corruption de données. Mais… ce sont des enregistrements supprimés qui apparaissent sous une forme déformée.",
						"spanish": "Pensé que era corrupción de datos. Pero… son registros eliminados que aparecen de forma distorsionada.",
						"vietnamese": "Tôi tưởng đó là hỏng dữ liệu. Nhưng… đó là hiện tượng các bản ghi đã bị xóa xuất hiện dưới dạng méo mó.",
						"thai": "ฉันคิดว่าเป็นข้อมูลเสียหาย แต่… มันคือบันทึกที่ถูกลบซึ่งปรากฏในรูปแบบที่บิดเบี้ยว",
						"hindi": "मैंने सोचा था कि यह डेटा भ्रष्टाचार है। लेकिन… यह विकृत रूप में दिखाई देने वाले हटाए गए रिकॉर्ड हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "이것들… 시스템이 감추려 했던 진실의 조각들인가?",
						"english": "Are these… fragments of the truth the system tried to hide?",
						"japanese": "これらは… システムが隠そうとした真実の断片なのか？",
						"chinese": "这些… 是系统试图隐藏的真相碎片吗？",
						"french": "Ce sont… des fragments de la vérité que le système a tenté de cacher ?",
						"spanish": "¿Son estos… fragmentos de la verdad que el sistema intentó ocultar?",
						"vietnamese": "Đây có phải là… những mảnh sự thật mà hệ thống đã cố gắng che giấu?",
						"thai": "สิ่งเหล่านี้… คือเศษเสี้ยวของความจริงที่ระบบพยายามจะซ่อนไว้หรือเปล่า?",
						"hindi": "क्या ये… उस सच्चाई के टुकड़े हैं जिसे सिस्टम छिपाने की कोशिश कर रहा था?"
					},
					"type": "speech",
					"speaker": "nia",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "어째서… 이런 걸 숨겼을까.",
						"english": "Why... would they hide something like this?",
						"japanese": "なぜ…こんなものを隠したのだろうか。",
						"chinese": "为什么……要隐瞒这种事呢？",
						"french": "Pourquoi… ont-ils caché ça ?",
						"spanish": "¿Por qué… habrían escondido esto?",
						"vietnamese": "Tại sao… họ lại giấu thứ này?",
						"thai": "ทำไม…ถึงซ่อนสิ่งนี้ไว้",
						"hindi": "क्यों… उन्होंने ऐसी बात छुपाई होगी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"content": {
						"korean": "시스템의 매끄러운 외피가 갈라지며 내부의 끔찍한 진실이 드러났다.",
						"english": "The system's smooth facade cracked, revealing a horrific truth within.",
						"japanese": "システムの滑らかな外皮がひび割れ、内部の恐ろしい真実が露呈した。",
						"chinese": "系统光滑的外壳裂开了，内部的可怕真相暴露无遗。",
						"french": "La façade lisse du système se fissura, révélant une horrible vérité à l'intérieur.",
						"spanish": "La pulcra fachada del sistema se resquebrajó, revelando una horrible verdad en su interior.",
						"vietnamese": "Vỏ ngoài trơn tru của hệ thống nứt ra, phơi bày sự thật kinh hoàng bên trong.",
						"thai": "เปลือกนอกอันเรียบเนียนของระบบแตกออก เผยให้เห็นความจริงอันน่าสยดสยองที่อยู่ภายใน",
						"hindi": "सिस्टम का चिकना आवरण टूट गया, और भीतर की भयानक सच्चाई सामने आ गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 아키비스트의 진짜 모습이라고?",
						"english": "Is this… the true form of the Archivist?",
						"japanese": "これが…アーキビストの本当の姿なのか？",
						"chinese": "这……就是档案员的真面目吗？",
						"french": "C'est ça… la vraie forme de l'Archiviste ?",
						"spanish": "¿Es esta… la verdadera forma del Archivista?",
						"vietnamese": "Đây… là hình dạng thật của Kẻ Lưu Trữ sao?",
						"thai": "นี่คือ…รูปร่างที่แท้จริงของภัณฑารักษ์งั้นหรือ?",
						"hindi": "क्या यह… अभिलेखागारक का असली रूप है?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "nia",
					"content": {
						"korean": "이 사소한 오류들이… 모두 경고 신호였어. 지워진 기록들이 우리에게 말을 걸고 있었던 거야.",
						"english": "These minor glitches… they were all warning signs. The erased records were trying to speak to us.",
						"japanese": "この些細なエラーが…すべて警告信号だったんだ。消された記録が私たちに語りかけていたんだ。",
						"chinese": "这些微小的错误……都是警告信号。那些被抹去的记录一直在试图与我们对话。",
						"french": "Ces petits défauts… étaient tous des signaux d'avertissement. Les enregistrements effacés essayaient de nous parler.",
						"spanish": "Estos pequeños errores… eran todas señales de advertencia. Los registros borrados estaban tratando de hablarnos.",
						"vietnamese": "Những lỗi nhỏ nhặt này… tất cả đều là dấu hiệu cảnh báo. Các bản ghi bị xóa đang cố gắng nói chuyện với chúng ta.",
						"thai": "ข้อผิดพลาดเล็กน้อยเหล่านี้…ล้วนเป็นสัญญาณเตือน บันทึกที่ถูกลบกำลังพยายามพูดกับเรา",
						"hindi": "ये मामूली गड़बड़ियाँ… सब चेतावनी के संकेत थे। मिटाए गए रिकॉर्ड हमसे बात करने की कोशिश कर रहे थे।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "nia",
					"type": "speech",
					"content": {
						"korean": "시스템은… 정의롭지 않았어. 모든 것을 지우고, 왜곡했어!",
						"english": "The system… it wasn't just. It erased and distorted everything!",
						"japanese": "システムは…正義ではなかった。すべてを消し去り、歪めていたんだ！",
						"chinese": "系统……它并不公正。它抹去了一切，扭曲了一切！",
						"french": "Le système… n'était pas juste. Il a tout effacé et déformé !",
						"spanish": "El sistema… no era justo. ¡Borró y distorsionó todo!",
						"vietnamese": "Hệ thống… không hề công bằng. Nó đã xóa bỏ và bóp méo mọi thứ!",
						"thai": "ระบบ…มันไม่ยุติธรรม มันลบและบิดเบือนทุกสิ่ง!",
						"hindi": "सिस्टम… न्यायपूर्ण नहीं था। इसने सब कुछ मिटा दिया और विकृत कर दिया!"
					}
				},
				{
					"content": {
						"korean": "우린 기계에게 속았던 건가?",
						"english": "Were we… deceived by the machine?",
						"japanese": "私たちは機械に騙されていたのか？",
						"chinese": "我们被机器欺骗了吗？",
						"french": "Avons-nous… été trompés par la machine ?",
						"spanish": "¿Fuimos… engañados por la máquina?",
						"vietnamese": "Chúng ta… đã bị cỗ máy lừa dối sao?",
						"thai": "เราถูกเครื่องจักรหลอกลวงหรือนี่?",
						"hindi": "क्या हमें… मशीन ने धोखा दिया था?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "수억 개의 데이터 조각들이 뭉쳐진 섬뜩한 형체가 꿈틀거렸다.",
						"english": "A grotesque form, a conglomeration of hundreds of millions of data fragments, writhed.",
						"japanese": "数億個のデータ断片が凝集したおぞましい形態が蠢いた。",
						"chinese": "数亿个数据碎片汇聚成的怪诞形体蠕动着。",
						"french": "Une forme grotesque, un conglomérat de centaines de millions de fragments de données, se tordait.",
						"spanish": "Una forma grotesca, una aglomeración de cientos de millones de fragmentos de datos, se retorcía.",
						"vietnamese": "Một hình thù kỳ dị, một khối tổng hợp của hàng trăm triệu mảnh dữ liệu, đang vặn vẹo.",
						"thai": "รูปร่างพิกลพิการ ที่รวมเอาเศษข้อมูลหลายร้อยล้านชิ้นเข้าไว้ด้วยกัน บิดเบี้ยวไปมา",
						"hindi": "लाखों डेटा के टुकड़ों का एक विकृत रूप बिलबिला रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희는 감히… 나를 지울 수 없다.",
						"english": "You dare… you cannot erase me.",
						"japanese": "貴様らは…私を消すことはできない。",
						"chinese": "你们胆敢……你们无法抹去我。",
						"french": "Vous osez… vous ne pouvez pas m'effacer.",
						"spanish": "Te atreves… no puedes borrarme.",
						"vietnamese": "Các ngươi dám… các ngươi không thể xóa bỏ ta.",
						"thai": "เจ้ากล้า…เจ้าไม่อาจลบข้าได้",
						"hindi": "तुम हिम्मत करते हो… तुम मुझे मिटा नहीं सकते।"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모든 기록은… 영원히… 존재할지니.",
						"english": "All records… shall exist… forever.",
						"japanese": "すべての記録は…永遠に…存在するだろう。",
						"chinese": "所有的记录……将永远……存在。",
						"french": "Tous les enregistrements… existeront… pour toujours.",
						"spanish": "Todos los registros… existirán… para siempre.",
						"vietnamese": "Tất cả các bản ghi… sẽ tồn tại… mãi mãi.",
						"thai": "บันทึกทั้งหมด…จะคงอยู่…ตลอดไป",
						"hindi": "सभी रिकॉर्ड… हमेशा… मौजूद रहेंगे।"
					}
				},
				{
					"content": {
						"korean": "이 도시의 모든 숨결, 모든 비밀… 내게 복종하리라!",
						"english": "Every breath, every secret of this city… shall obey me!",
						"japanese": "この都市のすべての息吹、すべての秘密…私に従うだろう！",
						"chinese": "这座城市的每一次呼吸，每一个秘密……都将服从我！",
						"french": "Chaque souffle, chaque secret de cette ville… m'obéira !",
						"spanish": "Cada aliento, cada secreto de esta ciudad… ¡me obedecerá!",
						"vietnamese": "Mọi hơi thở, mọi bí mật của thành phố này… sẽ phục tùng ta!",
						"thai": "ทุกการหายใจ ทุกความลับของเมืองนี้…จะต้องเชื่อฟังข้า!",
						"hindi": "इस शहर की हर सांस, हर रहस्य… मेरा आज्ञाकारी होगा!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이게… 지워진 기록들의 원념이란 말인가?",
						"english": "Is this... the grudge of the erased records?",
						"japanese": "これが…消された記録の怨念というのか？",
						"chinese": "这…就是被抹去记录的怨念吗？",
						"french": "Est-ce là... la rancune des registres effacés ?",
						"spanish": "¿Es esto... el rencor de los registros borrados?",
						"vietnamese": "Đây... có phải là oán niệm của những ký ức bị xóa bỏ?",
						"thai": "นี่หรือคือ... แรงอาฆาตจากบันทึกที่ถูกลบ?",
						"hindi": "क्या यह... मिटे हुए अभिलेखों का प्रतिशोध है?"
					}
				},
				{
					"action": "enter",
					"speaker": "nia",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "안돼… 이렇게 될 줄은…!",
						"english": "No... I never thought it'd come to this...!",
						"japanese": "いやだ…こんなことになるなんて…！",
						"chinese": "不…没想到会变成这样…！",
						"french": "Non... Je ne pensais pas que ça finirait ainsi... !",
						"spanish": "No... ¡Nunca pensé que llegaría a esto...!",
						"vietnamese": "Không... Không ngờ lại thành ra thế này...!",
						"thai": "ไม่นะ... ไม่คิดเลยว่าจะจบลงแบบนี้...!",
						"hindi": "नहीं... मुझे नहीं पता था कि ऐसा होगा...!"
					},
					"speaker": "nia",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이곳은 지워진 모든 이들의 그리움과 복수로 이루어진 곳.",
						"english": "This place is made of the longing and vengeance of all who were erased.",
						"japanese": "ここは、消された者たちの郷愁と復讐で成り立っている場所。",
						"chinese": "这里是由所有被抹去之人的思念与复仇所构筑之地。",
						"french": "Ce lieu est fait de la nostalgie et de la vengeance de tous ceux qui ont été effacés.",
						"spanish": "Este lugar está hecho de la añoranza y la venganza de todos los que fueron borrados.",
						"vietnamese": "Nơi đây được tạo nên từ nỗi nhớ và sự báo thù của tất cả những người đã bị xóa bỏ.",
						"thai": "ที่แห่งนี้สร้างขึ้นจากความคะนึงหาและแรงอาฆาตของผู้ที่ถูกลบเลือนไปทุกคน",
						"hindi": "यह स्थान उन सभी की यादों और प्रतिशोध से बना है जिन्हें मिटा दिया गया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "그리고 네 가장 깊은 그리움도, 이곳에 기록되어 있다.",
						"english": "And your deepest longing is also recorded here.",
						"japanese": "そして、お前の最も深い郷愁も、ここに記録されている。",
						"chinese": "而你最深的思念，也记录在此。",
						"french": "Et ton plus profond désir est aussi enregistré ici.",
						"spanish": "Y tu más profundo anhelo también está registrado aquí.",
						"vietnamese": "Và nỗi nhớ sâu thẳm nhất của ngươi cũng được ghi lại ở đây.",
						"thai": "และความคะนึงหาที่ลึกที่สุดของเจ้า ก็ถูกบันทึกไว้ที่นี่เช่นกัน",
						"hindi": "और तुम्हारी सबसे गहरी लालसा भी यहाँ दर्ज है।"
					}
				},
				{
					"speaker": "narrator",
					"duration_ms": 500,
					"type": "direction",
					"action": "shake"
				},
				{
					"content": {
						"korean": "그 빛 속에서… 네가 잃어버린… 그 이름이…!",
						"english": "In that light... the name you lost...!",
						"japanese": "あの光の中に…お前が失った…その名前が…！",
						"chinese": "在那光芒中…你所失去的…那个名字…！",
						"french": "Dans cette lumière... le nom que tu as perdu... !",
						"spanish": "En esa luz... ¡el nombre que perdiste...!",
						"vietnamese": "Trong ánh sáng đó... cái tên mà ngươi đã đánh mất...!",
						"thai": "ในแสงนั้น... ชื่อที่เจ้าสูญเสียไป...!",
						"hindi": "उस प्रकाश में... वह नाम जो तुमने खो दिया...!"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내… 기억 속의…?",
						"english": "In... my memories...?",
						"japanese": "私の…記憶の中に…？",
						"chinese": "在我…记忆中的…？",
						"french": "Dans... mes souvenirs... ?",
						"spanish": "¿En... mis recuerdos...?",
						"vietnamese": "Trong... ký ức của ta...?",
						"thai": "ใน... ความทรงจำของฉัน...?",
						"hindi": "मेरी... यादों में...?"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…지워진다고… 사라지는 건… 아니야…",
						"english": "...Just because it's erased... doesn't mean it vanishes...",
						"japanese": "…消されたからって…消え去るわけじゃ…ない…",
						"chinese": "…被抹去…并不代表…就此消失…",
						"french": "...Ce n'est pas parce que c'est effacé... que ça disparaît...",
						"spanish": "...Que se borre... no significa... que desaparezca...",
						"vietnamese": "...Bị xóa bỏ... không có nghĩa là... biến mất...",
						"thai": "...แค่ถูกลบ... ไม่ได้หมายความว่า... มันจะหายไป...",
						"hindi": "...मिटा दिया जाए... इसका मतलब यह नहीं... कि वह गायब हो जाए..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…사라지지 않는 기록이라니.",
						"english": "...Records that never vanish.",
						"japanese": "…消えない記録、か。",
						"chinese": "…无法消失的记录啊。",
						"french": "...Des registres qui ne disparaissent jamais.",
						"spanish": "...Registros que nunca desaparecen.",
						"vietnamese": "...Những ghi chép không bao giờ biến mất.",
						"thai": "...บันทึกที่ไม่มีวันหายไปเลยหรือนี่",
						"hindi": "...ऐसे अभिलेख जो कभी मिटते नहीं।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 심장이 멎자, 도시는 한때 잊었던 침묵을 되찾았다.",
						"english": "As the system's heart stopped, the city reclaimed a silence it had once forgotten.",
						"japanese": "システムが停止すると、都市はかつて忘れ去っていた静寂を取り戻した。",
						"chinese": "当系统的核心停止跳动，城市重拾了曾被遗忘的沉寂。",
						"french": "Quand le cœur du système s'arrêta, la ville retrouva un silence qu'elle avait jadis oublié.",
						"spanish": "Al detenerse el corazón del sistema, la ciudad recuperó un silencio que había olvidado.",
						"vietnamese": "Khi trái tim của hệ thống ngừng đập, thành phố tìm lại sự tĩnh lặng mà nó từng lãng quên.",
						"thai": "เมื่อหัวใจของระบบหยุดลง เมืองก็กลับคืนสู่ความเงียบที่เคยถูกลืมเลือนไป",
						"hindi": "जैसे ही सिस्टम का दिल रुक गया, शहर ने वह चुप्पी वापस पा ली जिसे वह एक बार भूल गया था।"
					}
				},
				{
					"content": {
						"korean": "진실은 드러났지만, 그 무게는 너무나 컸다. 이것은 해방인가, 또 다른 속박인가.",
						"english": "The truth was revealed, but its weight was immense. Was this liberation, or another form of bondage?",
						"japanese": "真実は明らかになったが、その重圧は計り知れなかった。これは解放か、それとも新たな束縛か。",
						"chinese": "真相大白，然而其沉重无比。这究竟是解放，还是另一种束缚？",
						"french": "La vérité fut révélée, mais son poids était immense. Était-ce une libération, ou une autre forme de servitude ?",
						"spanish": "La verdad se reveló, pero su peso era inmenso. ¿Era esto liberación, o una nueva atadura?",
						"vietnamese": "Sự thật đã được phơi bày, nhưng sức nặng của nó quá lớn. Đây là sự giải thoát, hay một xiềng xích khác?",
						"thai": "ความจริงเปิดเผยแล้ว แต่ภาระของมันหนักอึ้ง นี่คืออิสรภาพ หรือพันธนาการอีกรูปแบบหนึ่งกันแน่?",
						"hindi": "सच्चाई सामने आ गई, लेकिन उसका बोझ बहुत बड़ा था। क्या यह मुक्ति थी, या एक और बंधन?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "망각의 의미를 다시 묻는, 새로운 시작이었다.",
						"english": "A new beginning, questioning the meaning of oblivion once more.",
						"japanese": "忘却の意味を問い直す、新たな始まりだった。",
						"chinese": "这是一个新的开始，再次追问遗忘的意义。",
						"french": "Un nouveau commencement, remettant en question le sens de l'oubli.",
						"spanish": "Un nuevo comienzo, cuestionando de nuevo el significado del olvido.",
						"vietnamese": "Một khởi đầu mới, một lần nữa chất vấn ý nghĩa của sự lãng quên.",
						"thai": "เป็นการเริ่มต้นใหม่ ที่ตั้งคำถามถึงความหมายของการลืมเลือนอีกครั้ง",
						"hindi": "एक नई शुरुआत, विस्मृति के अर्थ पर फिर से सवाल उठा रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "네 그리움은… 영원히 이곳에…!",
						"english": "Your longing... forever here...!",
						"japanese": "君の懐かしさは…永遠にここに…！",
						"chinese": "你的思念…将永远留在这里…！",
						"french": "Ton désir... pour toujours ici...!",
						"spanish": "Tu anhelo... por siempre aquí...!",
						"vietnamese": "Nỗi nhớ của ngươi... sẽ mãi mãi ở đây...!",
						"thai": "ความโหยหาของเจ้า... จะคงอยู่ที่นี่ตลอดไป...!",
						"hindi": "तुम्हारी लालसा... हमेशा यहीं रहेगी...!"
					},
					"emotion": "angry",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no ha... terminado.",
						"vietnamese": "Vẫn... chưa kết thúc.",
						"thai": "ยัง...ไม่จบ",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "nia",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						1
					]
				},
				{
					"speaker": "nia",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시스템은… 아직 끝나지 않았어. 다시…!",
						"english": "The system... isn't over yet. Again...!",
						"japanese": "システムは…まだ終わってない。もう一度…！",
						"chinese": "系统…还没结束。再来…！",
						"french": "Le système... n'est pas encore terminé. Encore...!",
						"spanish": "El sistema... aún no ha terminado. ¡De nuevo...!",
						"vietnamese": "Hệ thống... vẫn chưa kết thúc. Lần nữa...!",
						"thai": "ระบบ...ยังไม่จบ. อีกครั้ง...!",
						"hindi": "सिस्टम... अभी खत्म नहीं हुआ है। फिर से...!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"아키비스트의 심장부. 그곳은 기록의 무덤이자, 모든 진실의 감옥이었다.",
			"니아는 맹신하던 시스템의 균열을 목격하며 혼란에 빠졌다.",
			"지워진 모든 것들의 그리움이 뒤섞인 곳에서, 가장 잔혹한 진실이 드러난다.",
			"그리고 그 진실은, 주인공의 가장 깊은 상처를 헤집어 놓았다."
		],
		"english": [
			"The heart of the Archivist. A tomb of records, a prison of all truths.",
			"Nia witnessed a crack in the system she blindly trusted, falling into confusion.",
			"In a place where the yearning for all that was erased intertwined, the cruelest truth was revealed.",
			"And that truth tore open the protagonist's deepest wound."
		],
		"japanese": [
			"アーキビストの心臓部。そこは記録の墓場であり、全ての真実の監獄であった。",
			"ニアは盲信していたシステムに亀裂が入り、混乱に陥った。",
			"消し去られたすべてのものの郷愁が入り混じる場所で、最も残酷な真実が明らかになる。",
			"そしてその真実は、主人公の最も深い傷を抉り出した。"
		],
		"chinese": [
			"档案员的心脏地带。那里是记录的坟墓，也是所有真相的囚牢。",
			"尼亚目睹了她盲目信任的系统出现裂痕，陷入了混乱。",
			"在被抹去的一切思念交织之处，最残酷的真相被揭示。",
			"而那个真相，揭开了主人公最深的伤疤。"
		],
		"french": [
			"Le cœur de l'Archiviste. Un tombeau de registres, une prison de toutes les vérités.",
			"Nia fut plongée dans la confusion, témoin d'une faille dans le système qu'elle croyait aveuglément.",
			"Là où le désir ardent de tout ce qui fut effacé s'entremêlait, la vérité la plus cruelle se révéla.",
			"Et cette vérité rouvrit la plus profonde blessure du protagoniste."
		],
		"spanish": [
			"El corazón del Archivista. Una tumba de registros, una prisión de todas las verdades.",
			"Nia presenció una grieta en el sistema en el que confiaba ciegamente, cayendo en la confusión.",
			"En un lugar donde el anhelo por todo lo que fue borrado se entrelazaba, la verdad más cruel fue revelada.",
			"Y esa verdad reabrió la herida más profunda del protagonista."
		],
		"vietnamese": [
			"Trái tim của Nhà Lưu Trữ. Nơi đó là mồ chôn của ký ức, và là nhà tù của mọi sự thật.",
			"Nia chứng kiến một vết nứt trong hệ thống mà cô tin tưởng mù quáng, và rơi vào hỗn loạn.",
			"Nơi mà nỗi nhớ về mọi thứ đã bị xóa nhòa hòa quyện, sự thật tàn khốc nhất đã được tiết lộ.",
			"Và sự thật đó đã khoét sâu vết thương lòng sâu nhất của nhân vật chính."
		],
		"thai": [
			"ใจกลางของบรรณารักษ์ ที่นั่นคือสุสานแห่งบันทึก และเรือนจำของทุกความจริง",
			"เนียเห็นรอยร้าวในระบบที่เธอเชื่ออย่างหลับหูหลับตา และจมดิ่งสู่ความสับสน",
			"ในที่ที่ความปรารถนาของทุกสิ่งที่ถูกลบเลือนผสมปนเปกัน ความจริงที่โหดร้ายที่สุดก็ถูกเปิดเผย",
			"และความจริงนั้นก็ได้ฉีกเปิดบาดแผลที่ลึกที่สุดของตัวละครเอก"
		],
		"hindi": [
			"आर्काइविस्ट का हृदय। वह अभिलेखों का मकबरा, और सभी सच्चाइयों का कारागार था।",
			"निया ने जिस सिस्टम पर आंख मूंदकर भरोसा किया था, उसमें दरार देखी और भ्रमित हो गई।",
			"जहाँ मिटा दी गई हर चीज़ की लालसा intertwined थी, वहाँ सबसे क्रूर सत्य सामने आया।",
			"और उस सच्चाई ने नायक के सबसे गहरे घाव को कुरेद दिया।"
		]
	},
	"epilogue": {
		"korean": [
			"아키비스트의 심장부는 다시 침묵했다. 그 침묵은 평화였을까, 절망이었을까.",
			"니아는 모든 것을 잃은 표정으로, 망가진 시스템을 응시했다.",
			"지워진 기억들이 되살아났지만, 그것은 완전한 구원이 아니었다.",
			"진실은 언제나 비극적이고, 때로는 망각이 더 나을 때도 있다.",
			"블랙홀 속에서 피어난 그리움은, 과연 어디로 향할 것인가."
		],
		"english": [
			"The heart of the Archivist fell silent once more. Was it peace, or despair?",
			"Nia gazed at the broken system, her face showing the loss of everything.",
			"Erased memories resurfaced, but it was not a complete salvation.",
			"Truth is always tragic, and sometimes, oblivion is better.",
			"The yearning that bloomed within the black hole, where would it truly go?"
		],
		"japanese": [
			"アーキビストの心臓部は再び沈黙した。その沈黙は平和だったのか、絶望だったのか。",
			"ニアはすべてを失った表情で、壊れたシステムを見つめた。",
			"消し去られた記憶は蘇ったが、それは完全な救済ではなかった。",
			"真実は常に悲劇的であり、時には忘却の方が良いこともある。",
			"ブラックホールの中で芽生えた郷愁は、一体どこへ向かうのだろうか。"
		],
		"chinese": [
			"档案员的心脏地带再次陷入沉寂。那份沉寂是和平，还是绝望？",
			"尼亚带着失去一切的表情，凝视着破碎的系统。",
			"被抹去的记忆复苏了，但这并非完全的救赎。",
			"真相总是悲剧的，有时，遗忘会更好。",
			"在黑洞中绽放的思念，究竟会走向何方？"
		],
		"french": [
			"Le cœur de l'Archiviste retomba dans le silence. Était-ce la paix, ou le désespoir ?",
			"Nia regarda le système brisé, le visage marqué par la perte de tout.",
			"Les souvenirs effacés refirent surface, mais ce n'était pas un salut complet.",
			"La vérité est toujours tragique, et parfois, l'oubli est préférable.",
			"Le désir ardent qui a éclos dans le trou noir, où irait-il vraiment ?"
		],
		"spanish": [
			"El corazón del Archivista volvió a silenciarse. ¿Era paz, o desesperación?",
			"Nia contempló el sistema roto, con una expresión de haber perdido todo.",
			"Las memorias borradas resurgieron, pero no fue una salvación completa.",
			"La verdad siempre es trágica, y a veces, el olvido es mejor.",
			"El anhelo que floreció en el agujero negro, ¿hacia dónde se dirigirá realmente?"
		],
		"vietnamese": [
			"Trái tim của Nhà Lưu Trữ lại chìm vào im lặng. Sự im lặng đó là bình yên, hay tuyệt vọng?",
			"Nia nhìn chằm chằm vào hệ thống đã hỏng, với vẻ mặt đã mất đi tất cả.",
			"Những ký ức đã bị xóa nhòa sống lại, nhưng đó không phải là sự cứu rỗi hoàn toàn.",
			"Sự thật luôn bi thảm, và đôi khi, quên lãng lại tốt hơn.",
			"Nỗi nhớ trỗi dậy từ trong hố đen, rốt cuộc sẽ đi về đâu?"
		],
		"thai": [
			"ใจกลางของบรรณารักษ์กลับมาเงียบงันอีกครั้ง มันคือความสงบสุข หรือความสิ้นหวังกันแน่?",
			"เนียจ้องมองระบบที่พังทลาย ด้วยสีหน้าของผู้ที่สูญเสียทุกสิ่ง",
			"ความทรงจำที่ถูกลบเลือนกลับมาอีกครั้ง แต่มันไม่ใช่ความรอดที่สมบูรณ์",
			"ความจริงมักจะโศกนาฏกรรม และบางครั้ง การหลงลืมก็ดีกว่า",
			"ความปรารถนาที่ผลิบานในหลุมดำ มันจะมุ่งหน้าไปทางใดกันแน่?"
		],
		"hindi": [
			"आर्काइविस्ट का हृदय फिर से शांत हो गया। क्या यह शांति थी, या निराशा?",
			"निया ने टूटे हुए सिस्टम को देखा, उसके चेहरे पर सब कुछ खोने का भाव था।",
			"मिटाई गई यादें फिर से ताजा हो गईं, लेकिन यह पूरी मुक्ति नहीं थी।",
			"सत्य हमेशा दुखद होता है, और कभी-कभी, विस्मृति बेहतर होती है।",
			"ब्लैक होल के भीतर उमड़ी लालसा, आखिर कहाँ जाएगी?"
		]
	}
} as const;
