export const scenario_snowy_fenrir_99_02 = {
	"scenario_id": "snowy_fenrir_99_02",
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
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 굶주림이 지배하는 땅.",
			"이바르는 사냥에 나섰다. 허나 사냥감은 그림자조차 없었다.",
			"남아있는 것은 깨끗이 사라진 사체의 흔적들뿐.",
			"밤이 깊어지자, 텐트 밖에서 거대한 그림자가 어슬렁거렸다.",
			"무언가, 모든 것을 집어삼키려 하고 있었다."
		],
		"english": [
			"An endless snowfield, a land ruled by hunger.",
			"Ivar set out to hunt. But there was no prey, not even a shadow.",
			"All that remained were traces of bodies, cleanly gone.",
			"As night deepened, a massive shadow lurked outside the tent.",
			"Something was trying to devour everything."
		],
		"japanese": [
			"果てなく広がる雪原、飢餓が支配する地。",
			"イヴァルは狩りに出た。しかし獲物は影すら見えなかった。",
			"残されたのは、きれいに消え去った死体の痕跡だけだった。",
			"夜が深まると、テントの外で巨大な影がうろつき始めた。",
			"何かが、すべてを飲み込もうとしていた。"
		],
		"chinese": [
			"无尽的雪原，饥饿统治的土地。",
			"伊瓦尔出发去狩猎。然而，猎物连影子都没有。",
			"剩下的只有彻底消失的尸体痕迹。",
			"夜色渐深，一个巨大的身影在帐篷外徘徊。",
			"某种东西，正试图吞噬一切。"
		],
		"french": [
			"Une étendue enneigée infinie, une terre dominée par la faim.",
			"Ivar partit chasser. Mais il n'y avait aucune proie, pas même une ombre.",
			"Tout ce qui restait, c'était des traces de corps, proprement disparues.",
			"Alors que la nuit s'épaississait, une ombre massive rôdait à l'extérieur de la tente.",
			"Quelque chose essayait de tout dévorer."
		],
		"spanish": [
			"Un campo de nieve interminable, una tierra dominada por el hambre.",
			"Ivar salió de caza. Pero no había presa, ni siquiera una sombra.",
			"Todo lo que quedaba eran rastros de cuerpos, completamente desaparecidos.",
			"A medida que la noche se hacía más profunda, una sombra masiva acechaba fuera de la tienda.",
			"Algo estaba tratando de devorarlo todo."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, vùng đất bị nạn đói thống trị.",
			"Ivar lên đường đi săn. Nhưng không có con mồi nào, ngay cả một cái bóng.",
			"Tất cả những gì còn lại là dấu vết của những xác chết đã biến mất sạch sẽ.",
			"Khi đêm xuống, một cái bóng khổng lồ lảng vảng bên ngoài lều.",
			"Có thứ gì đó đang cố gắng nuốt chửng mọi thứ."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด, ดินแดนที่ความอดอยากเข้าครอบงำ.",
			"อิวาร์ออกล่า แต่กลับไม่มีแม้แต่เงาของเหยื่อ.",
			"สิ่งที่เหลืออยู่มีเพียงร่องรอยของซากศพที่หายไปอย่างสิ้นเชิง.",
			"เมื่อราตรีลึกซึ้งขึ้น เงาร่างมหึมาก็วนเวียนอยู่หน้าเต็นท์.",
			"บางสิ่งกำลังพยายามกลืนกินทุกสิ่ง."
		],
		"hindi": [
			"एक अंतहीन हिमखंड, भूख से त्रस्त भूमि।",
			"इवार शिकार पर निकला। लेकिन कोई शिकार नहीं था, एक परछाई भी नहीं।",
			"जो कुछ बचा था, वह साफ-सुथरे ढंग से गायब हुए शरीरों के निशान थे।",
			"जैसे-जैसे रात गहरी हुई, एक विशाल परछाई टेंट के बाहर मंडरा रही थी।",
			"कुछ, सब कुछ निगलने की कोशिश कर रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "설원은 모든 것을 얼리고, 생명은 숨죽였다.",
						"english": "The snowfield froze everything, and life held its breath.",
						"japanese": "雪原はすべてを凍らせ、生命は息を潜めた。",
						"chinese": "雪原冻结了一切，生命屏住了呼吸。",
						"french": "La neige gelait tout, et la vie retenait son souffle.",
						"spanish": "El campo de nieve lo congeló todo, y la vida contuvo el aliento.",
						"vietnamese": "Cánh đồng tuyết đóng băng mọi thứ, và sự sống nín thở.",
						"thai": "ทุ่งหิมะแช่แข็งทุกสิ่ง และชีวิตก็เงียบงัน.",
						"hindi": "हिमखंड ने सब कुछ जमा दिया, और जीवन ने अपनी साँस रोक ली।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "너무 조용해… 짐승 한 마리 없어.",
						"english": "Too quiet... not a single beast.",
						"japanese": "静かすぎる… 獣一匹いない。",
						"chinese": "太安静了……连一只野兽都没有。",
						"french": "Trop calme... pas une seule bête.",
						"spanish": "Demasiado silencioso... ni una sola bestia.",
						"vietnamese": "Quá yên tĩnh... không một con thú nào.",
						"thai": "เงียบเกินไป... ไม่มีสัตว์สักตัว.",
						"hindi": "बहुत शांत है... एक भी जानवर नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "녀석들, 어디 숨은 거지? 내 사냥감은 도망가지 못해.",
						"english": "Where are they hiding? My prey can't escape.",
						"japanese": "奴ら、どこに隠れた？俺の獲物は逃げられない。",
						"chinese": "它们藏哪儿了？我的猎物逃不掉。",
						"french": "Où se cachent-ils ? Ma proie ne peut pas s'échapper.",
						"spanish": "¿Dónde se esconden? Mi presa no puede escapar.",
						"vietnamese": "Chúng trốn ở đâu? Con mồi của ta không thể thoát.",
						"thai": "พวกมันซ่อนอยู่ที่ไหน? เหยื่อของฉันหนีไม่พ้นหรอก.",
						"hindi": "वे कहाँ छिपे हैं? मेरा शिकार बच नहीं सकता।"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "흔적은 있는데… 왜 시체가 없어?",
						"english": "There are traces... but why no bodies?",
						"japanese": "痕跡はあるのに… なぜ死体がない？",
						"chinese": "有痕迹……为什么没有尸体？",
						"french": "Il y a des traces... mais pourquoi pas de corps ?",
						"spanish": "Hay rastros... pero ¿por qué no hay cuerpos?",
						"vietnamese": "Có dấu vết... nhưng tại sao không có xác chết?",
						"thai": "มีร่องรอยอยู่... แต่ทำไมไม่มีศพ?",
						"hindi": "निशान तो हैं... पर लाशें क्यों नहीं हैं?"
					},
					"speaker": "ivar"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "망할! 아무것도 없어. 뼈까지 사라졌다고.",
						"english": "Damn it! Nothing. Even the bones are gone.",
						"japanese": "ちくしょう！何もない。骨まで消えちまった。",
						"chinese": "该死！什么都没有。连骨头都消失了。",
						"french": "Maudit ! Rien. Même les os ont disparu.",
						"spanish": "¡Maldita sea! Nada. Hasta los huesos han desaparecido.",
						"vietnamese": "Chết tiệt! Không có gì cả. Ngay cả xương cũng biến mất.",
						"thai": "ให้ตายสิ! ไม่มีอะไรเลย. แม้แต่กระดูกก็หายไป.",
						"hindi": "धिक्कार है! कुछ नहीं है। हड्डियाँ भी गायब हो गई हैं।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마치… 속까지 다 빨아먹힌 것 같아.",
						"english": "It's like... everything's been sucked out of it.",
						"japanese": "まるで…中身まで全部吸い取られたみたいだ。",
						"chinese": "就像…连里面都被吸干了。",
						"french": "C'est comme si... tout avait été aspiré de l'intérieur.",
						"spanish": "Es como si... lo hubieran vaciado por completo.",
						"vietnamese": "Cứ như... bị hút cạn từ bên trong vậy.",
						"thai": "เหมือน...ถูกดูดจนไม่เหลืออะไรเลยข้างใน",
						"hindi": "जैसे… अंदर तक सब चूस लिया गया हो।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이런 건 처음 봐. 짐승의 짓이 아니야.",
						"english": "I've never seen anything like this. This isn't the work of an animal.",
						"japanese": "こんなの初めて見る。獣の仕業じゃない。",
						"chinese": "我从没见过这种事。这可不是野兽干的。",
						"french": "Je n'ai jamais vu ça. Ce n'est pas l'œuvre d'une bête.",
						"spanish": "Nunca había visto algo así. Esto no es obra de una bestia.",
						"vietnamese": "Chưa từng thấy cái này. Không phải do thú dữ gây ra.",
						"thai": "ไม่เคยเห็นอะไรแบบนี้มาก่อน นี่ไม่ใช่ฝีมือของสัตว์ร้าย",
						"hindi": "मैंने ऐसा कुछ कभी नहीं देखा। यह किसी जानवर का काम नहीं है।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "먹이사슬의 질서가 깨진 듯했다. 공허한 흔적만 남았다.",
						"english": "The order of the food chain seemed broken. Only an empty trace remained.",
						"japanese": "食物連鎖の秩序が破られたようだった。残ったのは虚ろな痕跡だけ。",
						"chinese": "食物链的秩序似乎被打破了。只留下了一片虚无的痕迹。",
						"french": "L'ordre de la chaîne alimentaire semblait brisé. Seule une trace vide demeurait.",
						"spanish": "El orden de la cadena alimentaria parecía haberse roto. Solo quedaba un rastro vacío.",
						"vietnamese": "Trật tự chuỗi thức ăn dường như đã bị phá vỡ. Chỉ còn lại dấu vết trống rỗng.",
						"thai": "ระเบียบของห่วงโซ่อาหารดูเหมือนจะถูกทำลาย เหลือเพียงร่องรอยที่ว่างเปล่า",
						"hindi": "खाद्य श्रृंखला का क्रम टूट गया था। केवल एक खाली निशान बचा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 이건 또 뭐야?",
						"english": "Damn, what is this now?",
						"japanese": "くそ、今度は何だ？",
						"chinese": "该死，这又是什么？",
						"french": "Mince, qu'est-ce que c'est encore ?",
						"spanish": "Maldita sea, ¿qué es esto ahora?",
						"vietnamese": "Chết tiệt, cái này lại là gì?",
						"thai": "เวรเอ๊ย นี่มันอะไรอีกเนี่ย?",
						"hindi": "धत्त तेरी, ये अब क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얼어붙은 짐승이야. 근데… 온기가 하나도 없어.",
						"english": "It's a frozen beast. But... there's no warmth at all.",
						"japanese": "凍りついた獣だ。でも…温もりがまったくない。",
						"chinese": "是冻僵的野兽。但…一点暖意都没有。",
						"french": "C'est une bête gelée. Mais... il n'y a aucune chaleur.",
						"spanish": "Es una bestia congelada. Pero... no tiene nada de calor.",
						"vietnamese": "Là một con thú bị đóng băng. Nhưng... không có chút hơi ấm nào.",
						"thai": "เป็นสัตว์ที่แข็งตาย แต่...ไม่มีความอบอุ่นเลยแม้แต่น้อย",
						"hindi": "यह एक जमी हुई जानवर है। लेकिन… इसमें बिल्कुल भी गरमाहट नहीं है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "마치 삶 자체가 빨려 나간 것 같아. 시체조차 남지 않는다고?",
						"english": "It's like life itself was sucked out. Not even a corpse remains?",
						"japanese": "まるで命そのものが吸い取られたみたいだ。死体すら残らないのか？",
						"chinese": "就像生命本身被吸走了一样。连尸体都没剩下？",
						"french": "C'est comme si la vie elle-même avait été aspirée. Pas même un cadavre ne reste ?",
						"spanish": "Es como si la vida misma hubiera sido absorbida. ¿Ni siquiera queda un cadáver?",
						"vietnamese": "Cứ như sự sống đã bị hút cạn. Đến cả xác cũng không còn sao?",
						"thai": "เหมือนชีวิตทั้งหมดถูกดูดออกไป ไม่เหลือแม้แต่ซากศพเลยเหรอ?",
						"hindi": "जैसे ज़िंदगी ही चूस ली गई हो। लाश तक नहीं बची?"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "…정말 이상해.",
						"english": "...It's really strange.",
						"japanese": "…本当に変だ。",
						"chinese": "…真奇怪。",
						"french": "...C'est vraiment étrange.",
						"spanish": "...Es realmente extraño.",
						"vietnamese": "...Thật sự kỳ lạ.",
						"thai": "...แปลกมาก",
						"hindi": "…यह सचमुच अजीब है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "밤이 내리고, 혹한은 더욱 깊어졌다. 텐트 밖의 그림자가 꿈틀거렸다.",
						"english": "Night fell, and the bitter cold deepened. Shadows outside the tent squirmed.",
						"japanese": "夜が訪れ、厳寒はさらに深まった。テントの外の影が蠢いた。",
						"chinese": "夜幕降临，严寒愈发深重。帐篷外的影子蠕动着。",
						"french": "La nuit tomba, et le froid mordant s'intensifia. Les ombres à l'extérieur de la tente frémirent.",
						"spanish": "Cayó la noche y el frío intenso se hizo más profundo. Las sombras fuera de la tienda se retorcían.",
						"vietnamese": "Màn đêm buông xuống, cái lạnh khắc nghiệt càng thêm sâu sắc. Bóng tối bên ngoài lều lay động.",
						"thai": "ค่ำคืนมาเยือน ความหนาวเหน็บก็ยิ่งทวีคูณ เงาด้านนอกเต็นท์เริ่มขยับไหว",
						"hindi": "रात घिर आई, और कड़ाके की ठंड और गहरी हो गई। तम्बू के बाहर की परछाईं हिलने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(숨죽이며) …저게 뭐야?",
						"english": "(Whispering) ...What is that?",
						"japanese": "（息を潜めて）…あれは何だ？",
						"chinese": "（屏住呼吸）…那是什么？",
						"french": "(Refrénant son souffle) ...Qu'est-ce que c'est ?",
						"spanish": "(Conteniendo la respiración) ...¿Qué es eso?",
						"vietnamese": "(Nín thở) ...Cái gì thế kia?",
						"thai": "(กลั้นหายใจ) ...นั่นอะไรน่ะ?",
						"hindi": "(साँस रोककर) …वो क्या है?"
					}
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…움직이지 마.",
						"english": "...Don't move.",
						"japanese": "…動くな。",
						"chinese": "…别动。",
						"french": "...Ne bouge pas.",
						"spanish": "...No te muevas.",
						"vietnamese": "...Đừng nhúc nhích.",
						"thai": "...อย่าขยับ",
						"hindi": "…हिलो मत।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…놈이 우릴 보고 있어.",
						"english": "...It's watching us.",
						"japanese": "…奴が俺たちを見ている。",
						"chinese": "…它在看着我们。",
						"french": "…Il nous regarde.",
						"spanish": "…Nos está observando.",
						"vietnamese": "…Nó đang nhìn chúng ta.",
						"thai": "…มันกำลังมองดูเราอยู่",
						"hindi": "…वह हमें देख रहा है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…아직 끝나지 않았어. 이 굶주림은… 사라지지 않아.",
						"english": "...It's not over yet. This hunger... won't disappear.",
						"japanese": "…まだ終わっていない。この飢えは…消えない。",
						"chinese": "…还没结束。这份饥饿…不会消失。",
						"french": "…Ce n'est pas encore fini. Cette faim… ne disparaîtra pas.",
						"spanish": "…Aún no ha terminado. Esta hambre… no desaparecerá.",
						"vietnamese": "…Chưa kết thúc đâu. Cơn đói này… sẽ không biến mất.",
						"thai": "…ยังไม่จบสิ้น ความหิวโหยนี้…จะไม่มีวันหายไป",
						"hindi": "…यह अभी खत्म नहीं हुआ है। यह भूख… गायब नहीं होगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "…쓰러뜨렸어!",
						"english": "...We defeated it!",
						"japanese": "…倒した！",
						"chinese": "…打倒了！",
						"french": "…Nous l'avons vaincu !",
						"spanish": "¡…Lo hemos derrotado!",
						"vietnamese": "…Đã đánh bại nó!",
						"thai": "…เราโค่นมันลงได้แล้ว!",
						"hindi": "…हमने उसे हरा दिया!"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…하지만 찜찜해. 내 직감은 말하고 있어. 끝은 아직 멀었다고.",
						"english": "...But I have a bad feeling. My gut tells me. The end is still far off.",
						"japanese": "…だが、しっくりこない。私の直感が告げている。終わりはまだ遠いと。",
						"chinese": "…但总觉得不安。我的直觉告诉我。结局还很遥远。",
						"french": "…Mais j'ai un mauvais pressentiment. Mon instinct me dit. La fin est encore loin.",
						"spanish": "…Pero tengo una sensación extraña. Mi intuición me dice. El final aún está lejos.",
						"vietnamese": "…Nhưng tôi có linh cảm xấu. Trực giác của tôi mách bảo. Kết thúc còn xa lắm.",
						"thai": "…แต่ก็ยังรู้สึกไม่สบายใจ สัญชาตญาณของฉันบอกว่า จุดจบยังอีกยาวไกล",
						"hindi": "…लेकिन मुझे अजीब लग रहा है। मेरी अंतरात्मा कह रही है। अंत अभी दूर है।"
					},
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 굶주림의 그림자는 여전히 설원을 배회했다.",
						"english": "The colossal shadow fell, but the shadow of hunger still roamed the snowfield.",
						"japanese": "巨大な影は倒れたが、飢えの影は依然として雪原をさまよっていた。",
						"chinese": "巨大的影子倒下了，但饥饿的影子仍在雪原上徘rivez。",
						"french": "L'ombre colossale s'effondra, mais l'ombre de la faim errait toujours sur l'étendue enneigée.",
						"spanish": "La sombra colosal cayó, pero la sombra del hambre aún deambulaba por el campo nevado.",
						"vietnamese": "Bóng đen khổng lồ đã đổ xuống, nhưng bóng đen của sự đói khát vẫn lảng vảng trên cánh đồng tuyết.",
						"thai": "เงาร่างมหึมาล้มลงแล้ว แต่เงาของความหิวโหยก็ยังคงวนเวียนอยู่ในทุ่งหิมะ",
						"hindi": "विशाल छाया गिर गई, लेकिन भूख की छाया अभी भी बर्फीले मैदान में घूम रही थी।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 너희도 결국 먹잇감일 뿐.",
						"english": "Insignificant. You're just prey.",
						"japanese": "取るに足らない。お前たちも餌食に過ぎない。",
						"chinese": "渺小之物。你们终究只是猎物。",
						"french": "Insignifiants. Vous n'êtes que des proies.",
						"spanish": "Insignificantes. Solo sois presas.",
						"vietnamese": "Đồ vô dụng. Các ngươi rốt cuộc chỉ là con mồi.",
						"thai": "พวกไร้ค่า. พวกเจ้าก็เป็นแค่เหยื่อเท่านั้นแหละ",
						"hindi": "तुच्छ प्राणी। तुम सब बस शिकार हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…젠장.",
						"english": "…Damn it.",
						"japanese": "…ちくしょう。",
						"chinese": "…该死。",
						"french": "…Mince.",
						"spanish": "…Maldita sea.",
						"vietnamese": "…Chết tiệt.",
						"thai": "…ให้ตายสิ.",
						"hindi": "…धिक्कार है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…이대로 끝낼 순 없어. 난 여기서 쓰러지지 않아!",
						"english": "…Can't end it like this. I won't fall here!",
						"japanese": "…このままでは終われない。ここで倒れるわけにはいかない！",
						"chinese": "…不能就这样结束。我不会倒在这里！",
						"french": "…Ça ne peut pas finir comme ça. Je ne tomberai pas ici !",
						"spanish": "…No puedo terminar así. ¡No caeré aquí!",
						"vietnamese": "…Không thể kết thúc thế này được. Tôi sẽ không gục ngã ở đây!",
						"thai": "…จะให้จบแบบนี้ไม่ได้! ฉันจะไม่ล้มลงที่นี่!",
						"hindi": "…ऐसे खत्म नहीं कर सकता। मैं यहाँ हार नहीं मानूँगा!"
					},
					"type": "speech",
					"speaker": "ivar"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "굶주려라. 더 굶주려라.",
						"english": "Hunger. Hunger more.",
						"japanese": "飢えろ。もっと飢えろ。",
						"chinese": "饥饿吧。更加饥饿吧。",
						"french": "Ayez faim. Ayez plus faim encore.",
						"spanish": "Ten hambre. Más hambre.",
						"vietnamese": "Hãy đói khát. Đói khát hơn nữa.",
						"thai": "จงหิวโหย หิวโหยให้มากยิ่งขึ้น",
						"hindi": "भूख लगी है। और भूख।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "네놈이 이 모든 짓을 꾸민 거냐?",
						"english": "Did you plan all of this?",
						"japanese": "貴様がこの全ての企みを？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien planeó todo esto?",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này à?",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या यह सब तुम्हारी योजना थी?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그래. 나만이, 이 설원의 진정한 주인.",
						"english": "Yes. Only I am the true master of this snowfield.",
						"japanese": "そうだ。私だけが、この雪原の真の支配者だ。",
						"chinese": "没错。只有我，才是这雪原真正的主人。",
						"french": "Oui. Moi seul suis le véritable maître de cette étendue enneigée.",
						"spanish": "Sí. Solo yo soy el verdadero amo de este campo nevado.",
						"vietnamese": "Đúng vậy. Chỉ có ta, là chủ nhân thực sự của cánh đồng tuyết này.",
						"thai": "ใช่แล้ว มีเพียงข้าเท่านั้นที่เป็นเจ้าของที่แท้จริงของทุ่งหิมะแห่งนี้",
						"hindi": "हाँ। केवल मैं ही इस बर्फीले मैदान का सच्चा मालिक हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "웃기지 마! 누가 주인인지는… 지금부터 정한다.",
						"english": "Don't make me laugh! Who the master is... we'll decide now.",
						"japanese": "ふざけるな！誰が主人かは…今から決める。",
						"chinese": "别开玩笑了！谁是主人…现在就决定！",
						"french": "Ne me fais pas rire ! Qui est le maître… ça se décide maintenant !",
						"spanish": "¡No me hagas reír! Quién es el amo... se decide ahora.",
						"vietnamese": "Đừng có đùa! Ai là chủ nhân thì… bây giờ sẽ định đoạt.",
						"thai": "อย่ามาล้อเล่น! ใครคือเจ้าของตัวจริงนั้น...จะตัดสินกันตอนนี้แหละ",
						"hindi": "हँसाओ मत! मालिक कौन है... अब तय होगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "정체 모를 그림자가 포효했다. 생존을 건 싸움이 시작되었다.",
						"english": "An unknown shadow roared. A battle for survival began.",
						"japanese": "正体不明の影が咆哮した。生存をかけた戦いが始まった。",
						"chinese": "不明的影子咆哮了。一场赌上生存的战斗开始了。",
						"french": "Une ombre inconnue rugit. Un combat pour la survie commença.",
						"spanish": "Una sombra desconocida rugió. Comenzó una batalla por la supervivencia.",
						"vietnamese": "Bóng đen không rõ danh tính gầm thét. Một cuộc chiến sinh tồn đã bắt đầu.",
						"thai": "เงาลึกลับคำรามก้อง การต่อสู้เพื่อเอาชีวิตรอดได้เริ่มต้นขึ้นแล้ว",
						"hindi": "एक अज्ञात छाया गरजी। अस्तित्व के लिए एक लड़ाई शुरू हुई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
