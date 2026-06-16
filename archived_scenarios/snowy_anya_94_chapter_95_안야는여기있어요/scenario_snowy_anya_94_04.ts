export const scenario_snowy_anya_94_04 = {
	"scenario_id": "snowy_anya_94_04",
	"order": 4,
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
					"emotion": "base",
					"content": {
						"korean": "눈보라가 모든 소리를 집어삼켰다. 차가운 침묵뿐이었다.",
						"english": "The blizzard swallowed all sounds. Only cold silence remained.",
						"japanese": "吹雪が全ての音を飲み込んだ。残ったのは冷たい沈黙だけだった。",
						"chinese": "暴风雪吞噬了所有声音。只剩下冰冷的寂静。",
						"french": "Le blizzard avait englouti tous les sons. Seul un froid silence régnait.",
						"spanish": "La ventisca devoró todos los sonidos. Solo quedó un silencio frío.",
						"vietnamese": "Bão tuyết nuốt chửng mọi âm thanh. Chỉ còn sự im lặng lạnh lẽo.",
						"thai": "พายุหิมะกลืนกินทุกเสียง เหลือเพียงความเงียบงันที่เยือกเย็น",
						"hindi": "बर्फीले तूफ़ान ने सभी आवाज़ों को निगल लिया। केवल ठंडी चुप्पी थी।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…안야의 속삭임이, 점점 희미해져.",
						"english": "...Anya's whispers are fading.",
						"japanese": "…アーニャの囁きが、だんだん薄れていく。",
						"chinese": "……安雅的低语，渐渐模糊。",
						"french": "...Les murmures d'Anya s'estompent.",
						"spanish": "...Los susurros de Anya se desvanecen.",
						"vietnamese": "...Tiếng thì thầm của Anya, ngày càng mờ dần.",
						"thai": "...เสียงกระซิบของอันยา ค่อยๆ จางหายไป",
						"hindi": "...आन्या की फुसफुसाहट, धीरे-धीरे धूमिल हो रही है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "사라지고 있는 건가?",
						"english": "Is she vanishing?",
						"japanese": "消えていくのか？",
						"chinese": "她正在消失吗？",
						"french": "Est-ce qu'elle disparaît ?",
						"spanish": "¿Está desapareciendo?",
						"vietnamese": "Có phải nó đang biến mất không?",
						"thai": "กำลังหายไปหรือเปล่า?",
						"hindi": "क्या वह गायब हो रही है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록해야 해. 이 순간을.",
						"english": "I must record this moment.",
						"japanese": "記録しなければ。この瞬間を。",
						"chinese": "我必须记录下这一刻。",
						"french": "Je dois consigner cet instant.",
						"spanish": "Debo registrar este momento.",
						"vietnamese": "Phải ghi lại khoảnh khắc này.",
						"thai": "ฉันต้องบันทึกช่วงเวลานี้ไว้",
						"hindi": "मुझे इस पल को रिकॉर्ड करना होगा।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "잊힌 룬들이… 안야의 이름을 부르고 있어.",
						"english": "Forgotten runes... are calling Anya's name.",
						"japanese": "忘れられたルーンが…アーニャの名前を呼んでいる。",
						"chinese": "被遗忘的符文……正在呼唤安雅的名字。",
						"french": "Des runes oubliées... appellent le nom d'Anya.",
						"spanish": "Runas olvidadas... están llamando el nombre de Anya.",
						"vietnamese": "Những ký tự cổ xưa bị lãng quên... đang gọi tên Anya.",
						"thai": "อักษรรูนที่ถูกลืม...กำลังเรียกชื่ออันยา",
						"hindi": "भूली हुई रूनें... आन्या का नाम पुकार रही हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "우리가 기억해야 하는 이름인가?",
						"english": "Is it a name we must remember?",
						"japanese": "私たちが記憶すべき名前なのか？",
						"chinese": "这是我们必须记住的名字吗？",
						"french": "Est-ce un nom que nous devons nous souvenir ?",
						"spanish": "¿Es un nombre que debemos recordar?",
						"vietnamese": "Đây có phải là cái tên chúng ta phải nhớ không?",
						"thai": "นี่คือชื่อที่เราต้องจดจำไว้ใช่ไหม?",
						"hindi": "क्या यह वह नाम है जिसे हमें याद रखना चाहिए?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 영원한 작별. 그 증거를 남겨야 해.",
						"english": "Yes. A final farewell. I must leave proof.",
						"japanese": "ええ。永遠の別れ。その証を残さなければ。",
						"chinese": "是的。永别。我必须留下证据。",
						"french": "Oui. Un adieu éternel. Je dois en laisser une preuve.",
						"spanish": "Sí. Un adiós eterno. Debo dejar pruebas.",
						"vietnamese": "Đúng vậy. Vĩnh biệt. Ta phải để lại bằng chứng.",
						"thai": "ใช่ การจากลาชั่วนิรันดร์ ฉันต้องทิ้งหลักฐานไว้",
						"hindi": "हाँ। एक अंतिम विदाई। मुझे सबूत छोड़ना होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
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
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 눈보라는 마치… 모든 것을 지우려는 것 같아.",
						"english": "This blizzard… it feels like it's trying to erase everything.",
						"japanese": "この吹雪はまるで…全てを消し去ろうとしているようだ。",
						"chinese": "这场暴风雪…仿佛要抹去一切。",
						"french": "Ce blizzard… c'est comme s'il essayait d'effacer tout.",
						"spanish": "Esta ventisca… parece que intenta borrarlo todo.",
						"vietnamese": "Trận bão tuyết này… dường như muốn xóa sổ mọi thứ.",
						"thai": "พายุหิมะนี้… ราวกับกำลังจะลบทุกสิ่ง",
						"hindi": "यह बर्फीला तूफान… ऐसा लगता है जैसे सब कुछ मिटाने की कोशिश कर रहा हो।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 기록은 지울 수 없어.",
						"english": "But records cannot be erased.",
						"japanese": "しかし、記録は消せない。",
						"chinese": "但记录无法抹去。",
						"french": "Mais les archives ne peuvent être effacées.",
						"spanish": "Pero los registros no pueden borrarse.",
						"vietnamese": "Nhưng ký ức không thể bị xóa bỏ.",
						"thai": "แต่บันทึกไม่อาจถูกลบได้",
						"hindi": "लेकिन रिकॉर्ड मिटाए नहीं जा सकते।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "안야의 이름이 영원히 기억되도록.",
						"english": "So Anya's name will be remembered forever.",
						"japanese": "アンヤの名が永遠に記憶されるように。",
						"chinese": "愿安雅的名字永垂不朽。",
						"french": "Pour que le nom d'Anya soit éternellement rappelé.",
						"spanish": "Para que el nombre de Anya sea recordado para siempre.",
						"vietnamese": "Để tên Anya sẽ được nhớ mãi mãi.",
						"thai": "เพื่อให้ชื่อของอันย่าถูกจดจำตลอดไป",
						"hindi": "ताकि अन्या का नाम हमेशा याद रखा जाए।"
					},
					"speaker": "eira",
					"type": "speech"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "속삭임이 거의 들리지 않아. 눈보라에 다 흩어졌어.",
						"english": "The whispers are barely audible. Scattered by the blizzard.",
						"japanese": "囁きがほとんど聞こえない。吹雪に全て散らされた。",
						"chinese": "低语几乎听不见了。都被暴风雪吹散了。",
						"french": "Les murmures sont à peine audibles. Dispersés par le blizzard.",
						"spanish": "Los susurros apenas se oyen. Dispersos por la ventisca.",
						"vietnamese": "Những lời thì thầm hầu như không nghe thấy. Đã tan biến trong bão tuyết.",
						"thai": "เสียงกระซิบแทบไม่ได้ยิน หายไปหมดแล้วในพายุหิมะ",
						"hindi": "फुसफुसाहट शायद ही सुनाई दे रही है। बर्फीले तूफान ने सब बिखेर दिया।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이제 정말 끝인가.",
						"english": "...Is this truly the end?",
						"japanese": "…もう本当に終わりなのか。",
						"chinese": "…现在真的结束了吗？",
						"french": "...Est-ce vraiment la fin ?",
						"spanish": "¿...Es este realmente el final?",
						"vietnamese": "...Thật sự là kết thúc rồi sao?",
						"thai": "...นี่คือจุดจบจริงๆ หรือ?",
						"hindi": "...क्या यह सचमुच अंत है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 여기서 끝낼 순 없어. 난 기록해야 해.",
						"english": "No. I can't end it here. I must record it.",
						"japanese": "いいえ。ここで終わらせるわけにはいかない。私は記録しなければ。",
						"chinese": "不。我不能在这里结束。我必须记录下来。",
						"french": "Non. Je ne peux pas en finir ici. Je dois le consigner.",
						"spanish": "No. No puedo terminarlo aquí. Debo registrarlo.",
						"vietnamese": "Không. Ta không thể kết thúc ở đây. Ta phải ghi lại.",
						"thai": "ไม่ ฉันจบที่นี่ไม่ได้ ฉันต้องบันทึกไว้",
						"hindi": "नहीं। मैं इसे यहाँ खत्म नहीं कर सकता। मुझे इसे दर्ज करना होगा।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 것이 얼어붙은 공간. 고요 속에 거대한 그림자가 나타났다.",
						"english": "A frozen space. In the silence, a colossal shadow appeared.",
						"japanese": "全てが凍りついた空間。静寂の中、巨大な影が現れた。",
						"chinese": "一个万物冻结的空间。在寂静中，一个巨大的影子出现了。",
						"french": "Un espace gelé. Dans le silence, une ombre colossale apparut.",
						"spanish": "Un espacio congelado. En el silencio, una sombra colosal apareció.",
						"vietnamese": "Một không gian đóng băng. Trong sự tĩnh lặng, một bóng đen khổng lồ xuất hiện.",
						"thai": "พื้นที่ที่ทุกสิ่งถูกแช่แข็ง ในความเงียบงัน เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "एक जमा हुआ स्थान। खामोशी में, एक विशाल छाया दिखाई दी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "기록? 무의미한 짓이다. 모든 것은 잊힌다.",
						"english": "Records? Meaningless. Everything is forgotten.",
						"japanese": "記録？無意味なことだ。全ては忘れ去られる。",
						"chinese": "记录？毫无意义。一切都会被遗忘。",
						"french": "Des archives ? Insignifiant. Tout est oublié.",
						"spanish": "¿Registros? Sin sentido. Todo se olvida.",
						"vietnamese": "Ký ức ư? Vô nghĩa. Mọi thứ đều sẽ bị lãng quên.",
						"thai": "บันทึก? ไร้ความหมาย ทุกสิ่งจะถูกลืม",
						"hindi": "रिकॉर्ड? अर्थहीन। सब कुछ भुला दिया जाता है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니. 진실은 남는다. 안야의 이름도.",
						"english": "No. The truth remains. And Anya's name.",
						"japanese": "いいえ。真実は残る。アンヤの名も。",
						"chinese": "不。真相会留下。安雅的名字也是。",
						"french": "Non. La vérité demeure. Et le nom d'Anya aussi.",
						"spanish": "No. La verdad permanece. Y el nombre de Anya también.",
						"vietnamese": "Không. Sự thật vẫn còn. Và tên Anya cũng vậy.",
						"thai": "ไม่ ความจริงยังคงอยู่ และชื่อของอันย่าด้วย",
						"hindi": "नहीं। सच रहता है। और अन्या का नाम भी।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그렇다면, 이 어둠 속에서 영원히 잠들게 해주지.",
						"english": "Then, I shall let you sleep forever in this darkness.",
						"japanese": "ならば、この闇の中で永遠に眠らせてやろう。",
						"chinese": "既然如此，就让你在这黑暗中永远沉睡吧。",
						"french": "Alors, je te laisserai dormir éternellement dans cette obscurité.",
						"spanish": "Entonces, te dejaré dormir para siempre en esta oscuridad.",
						"vietnamese": "Vậy thì, ta sẽ để ngươi ngủ vĩnh viễn trong bóng tối này.",
						"thai": "ถ้าอย่างนั้น ข้าจะให้เจ้าหลับใหลชั่วนิรันดร์ในความมืดนี้",
						"hindi": "तो फिर, मैं तुम्हें इस अंधेरे में हमेशा के लिए सोने दूँगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 소멸했다. 눈보라가 잠시 멈췄다.",
						"english": "The massive shadow vanished. The blizzard paused.",
						"japanese": "巨大な影が消滅した。吹雪が一時的に止んだ。",
						"chinese": "巨大的影子消失了。暴风雪暂时停歇。",
						"french": "L'ombre gigantesque a disparu. Le blizzard s'est arrêté un instant.",
						"spanish": "La enorme sombra se desvaneció. La tormenta de nieve se detuvo un momento.",
						"vietnamese": "Bóng tối khổng lồ tan biến. Bão tuyết tạm ngừng.",
						"thai": "เงาขนาดมหึมาได้หายไป พายุหิมะหยุดลงชั่วขณะ",
						"hindi": "विशाल परछाई गायब हो गई। बर्फीला तूफान थम गया।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…안야. 네 이름은 영원히 기억될 거야.",
						"english": "...Anya. Your name will be remembered forever.",
						"japanese": "…アーニャ。君の名は永遠に記憶されるだろう。",
						"chinese": "…安雅。你的名字将永远被铭记。",
						"french": "...Anya. Ton nom sera gravé à jamais.",
						"spanish": "...Anya. Tu nombre será recordado para siempre.",
						"vietnamese": "...Anya. Tên của ngươi sẽ được nhớ mãi mãi.",
						"thai": "...อันย่า ชื่อของเจ้าจะถูกจดจำไปตลอดกาล",
						"hindi": "...आन्या। तुम्हारा नाम हमेशा याद रखा जाएगा।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 정말 마지막이 가까워졌어.",
						"english": "Now, the very end is near.",
						"japanese": "もう本当に終わりが近づいた。",
						"chinese": "现在，真正的结局已近在眼前。",
						"french": "Maintenant, la fin est vraiment proche.",
						"spanish": "Ahora, el final está realmente cerca.",
						"vietnamese": "Bây giờ, cái kết thật sự đã đến gần.",
						"thai": "ตอนนี้จุดจบใกล้เข้ามาแล้วจริงๆ",
						"hindi": "अब सच में अंत करीब आ गया है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흩어지는 속삭임 속에서, 또 다른 진실이 기다린다.",
						"english": "Amidst the fading whispers, another truth awaits.",
						"japanese": "散りゆく囁きの中で、もう一つの真実が待っている。",
						"chinese": "在消散的低语中，另一个真相正在等待。",
						"french": "Au milieu des murmures dispersés, une autre vérité attend.",
						"spanish": "Entre los susurros que se dispersan, otra verdad aguarda.",
						"vietnamese": "Trong những lời thì thầm tan biến, một sự thật khác đang chờ đợi.",
						"thai": "ท่ามกลางเสียงกระซิบที่จางหาย ความจริงอีกอย่างหนึ่งกำลังรออยู่",
						"hindi": "बिखरती फुसफुसाहट के बीच, एक और सच इंतज़ार कर रहा है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "기록? 네 존재조차 잊히리라.",
						"english": "Records? Even your existence shall be forgotten.",
						"japanese": "記録？お前の存在すら忘れ去られるだろう。",
						"chinese": "记录？连你的存在都将被遗忘。",
						"french": "Des archives ? Même ton existence sera oubliée.",
						"spanish": "¿Registros? Incluso tu existencia será olvidada.",
						"vietnamese": "Ghi chép? Ngay cả sự tồn tại của ngươi cũng sẽ bị lãng quên.",
						"thai": "บันทึกหรือ? แม้แต่ตัวตนของเจ้าก็จะถูกลืมเลือนไป",
						"hindi": "रिकॉर्ड? तुम्हारी तो पहचान भी भुला दी जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry",
					"content": {
						"korean": "…아니. 난 잊지 않아. 반드시 기록할 거야.",
						"english": "...No. I won't forget. I will definitely record it.",
						"japanese": "…いや。私は忘れない。必ず記録する。",
						"chinese": "…不。我不会忘记。我一定会记录下来。",
						"french": "...Non. Je n'oublierai pas. Je le consignerai absolument.",
						"spanish": "...No. No lo olvidaré. Lo registraré sin falta.",
						"vietnamese": "...Không. Ta sẽ không quên. Ta nhất định sẽ ghi lại.",
						"thai": "...ไม่ ข้าจะไม่ลืม ข้าจะบันทึกมันไว้แน่นอน",
						"hindi": "...नहीं। मैं नहीं भूलूँगा। मैं इसे ज़रूर दर्ज करूँगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 일어서야 해.",
						"english": "Again... I must rise again.",
						"japanese": "もう一度…もう一度立ち上がらなければならない。",
						"chinese": "再次…必须再次站起来。",
						"french": "De nouveau... je dois me relever.",
						"spanish": "De nuevo... debo levantarme de nuevo.",
						"vietnamese": "Lại... lại phải đứng dậy.",
						"thai": "อีกครั้ง... ต้องลุกขึ้นยืนอีกครั้ง",
						"hindi": "फिर से... मुझे फिर से उठना होगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈보라 속, 희미한 속삭임이 흩어진다.",
			"그것은 한 아이의 마지막 작별 인사.",
			"에이라, 잊힌 전설의 기록자는 그 이름을 새기려 한다.",
			"얼어붙은 기억 속에서, 사라지지 않도록."
		],
		"english": [
			"Amidst the blizzard, faint whispers scatter.",
			"It was a child's last farewell.",
			"Eira, recorder of forgotten legends, seeks to engrave that name.",
			"Within frozen memories, lest it vanish."
		],
		"japanese": [
			"吹雪の中、微かな囁きが散る。",
			"それは一人の子の最後の別れ。",
			"忘れられた伝説の記録者エイラは、その名を刻もうとする。",
			"凍てつく記憶の中で、消えぬように。"
		],
		"chinese": [
			"暴风雪中，微弱的低语消散。",
			"那是一个孩子最后的告别。",
			"艾拉，被遗忘传说的记录者，试图铭刻那个名字。",
			"在冰封的记忆中，以免消逝。"
		],
		"french": [
			"Au cœur du blizzard, de faibles murmures se dispersent.",
			"C'était l'ultime adieu d'un enfant.",
			"Eira, la chroniqueuse des légendes oubliées, cherche à graver ce nom.",
			"Afin qu'il ne disparaisse pas des souvenirs gelés."
		],
		"spanish": [
			"Entre la ventisca, débiles susurros se dispersan.",
			"Era el último adiós de un niño.",
			"Eira, la cronista de leyendas olvidadas, busca grabar ese nombre.",
			"Para que no se desvanezca de los recuerdos congelados."
		],
		"vietnamese": [
			"Giữa bão tuyết, những lời thì thầm yếu ớt tan biến.",
			"Đó là lời từ biệt cuối cùng của một đứa trẻ.",
			"Eira, người ghi chép những truyền thuyết bị lãng quên, cố gắng khắc tên đó.",
			"Để không biến mất khỏi những ký ức đóng băng."
		],
		"thai": [
			"ท่ามกลางพายุหิมะ เสียงกระซิบแผ่วเบากระจายไป",
			"นั่นคือคำอำลาสุดท้ายของเด็กคนหนึ่ง",
			"ไอร่า ผู้บันทึกตำนานที่ถูกลืม พยายามสลักชื่อนั้นไว้",
			"เพื่อไม่ให้เลือนหายไปจากความทรงจำที่เยือกแข็ง"
		],
		"hindi": [
			"बर्फीले तूफ़ान में, फुसफुसाहटें बिखर जाती हैं।",
			"यह एक बच्चे की आखिरी विदाई थी।",
			"ऐरा, भूली हुई किंवदंतियों की लेखिका, उस नाम को अंकित करना चाहती है।",
			"जमी हुई यादों से, ताकि वह मिट न जाए।"
		]
	}
} as const;
