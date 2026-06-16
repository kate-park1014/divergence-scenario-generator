export const scenario_snowy_fenrir_57_01 = {
	"scenario_id": "snowy_fenrir_57_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "동공의 힘이 가라앉은 텅 빈 골짜기. 숨 막히는 침묵이 감돌았다.",
						"english": "A desolate valley where the power of the pupil had subsided. A suffocating silence hung heavy.",
						"japanese": "瞳孔の力が鎮まった空虚な谷。息苦しい沈黙が漂っていた。",
						"chinese": "瞳孔之力消退的空旷山谷。窒息般的沉默弥漫着。",
						"french": "Une vallée désolée où la puissance de la pupille s'était apaisée. Un silence suffocant régnait.",
						"spanish": "Un valle desolado donde el poder de la pupila se había calmado. Un silencio sofocante se cernía.",
						"vietnamese": "Thung lũng hoang vắng nơi sức mạnh của đồng tử đã lắng xuống. Một sự im lặng ngột ngạt bao trùm.",
						"thai": "หุบเขาที่ว่างเปล่าซึ่งพลังของรูม่านตาได้สงบลง ความเงียบงันอันน่าอึดอัดปกคลุมไปทั่ว",
						"hindi": "एक वीरान घाटी जहाँ पुतली की शक्ति शांत हो गई थी। एक दम घोंटने वाली चुप्पी छा गई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…이게 끝인가.",
						"english": "...Is this the end?",
						"japanese": "…これが終わりなのか。",
						"chinese": "……这就是结局吗？",
						"french": "...Est-ce la fin ?",
						"spanish": "...¿Es este el final?",
						"vietnamese": "...Đây có phải là kết thúc không?",
						"thai": "...นี่คือจุดจบแล้วหรือ",
						"hindi": "...क्या यह अंत है?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. 이건 끝이 아니라, 끝의 시작이야.",
						"english": "No. This isn't the end, but the beginning of the end.",
						"japanese": "いや。これは終わりではなく、終わりの始まりだ。",
						"chinese": "不。这不是结束，而是结束的开始。",
						"french": "Non. Ce n'est pas la fin, mais le début de la fin.",
						"spanish": "No. Esto no es el final, sino el comienzo del final.",
						"vietnamese": "Không. Đây không phải là kết thúc, mà là khởi đầu của kết thúc.",
						"thai": "ไม่ นี่ไม่ใช่จุดจบ แต่มันคือจุดเริ่มต้นของจุดจบ",
						"hindi": "नहीं। यह अंत नहीं है, बल्कि अंत की शुरुआत है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "공허… 텅 비어있어.",
						"english": "The Void... It's empty.",
						"japanese": "虚無… 空っぽだ。",
						"chinese": "虚空……一片空虚。",
						"french": "Le Vide... C'est vide.",
						"spanish": "El Vacío... Está vacío.",
						"vietnamese": "Hư không… Trống rỗng.",
						"thai": "ความว่างเปล่า... มันว่างเปล่า",
						"hindi": "शून्य... यह खाली है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "공허는 미워할 대상이 아니라, 응시할 대상이다.",
						"english": "The Void is not something to be hated, but something to be gazed upon.",
						"japanese": "虚無は憎むべき対象ではなく、見据えるべき対象だ。",
						"chinese": "虚空不是憎恨的对象，而是凝视的对象。",
						"french": "Le Vide n'est pas à haïr, mais à contempler.",
						"spanish": "El Vacío no es algo a odiar, sino algo a contemplar.",
						"vietnamese": "Hư không không phải là thứ để ghét bỏ, mà là thứ để đối mặt.",
						"thai": "ความว่างเปล่าไม่ใช่สิ่งที่น่าชิงชัง แต่เป็นสิ่งที่ต้องจ้องมอง",
						"hindi": "शून्य नफरत करने की चीज़ नहीं है, बल्कि उसे घूरने की चीज़ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "...응시?",
						"english": "...Gaze?",
						"japanese": "…見据える？",
						"chinese": "……凝视？",
						"french": "...Contempler ?",
						"spanish": "...¿Contemplar?",
						"vietnamese": "...Đối mặt?",
						"thai": "...จ้องมอง?",
						"hindi": "...घूरना?"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "glace",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그 안에 답이 있어. 너희 안에도, 저 어둠 안에도.",
						"english": "The answer lies within. Within you, and within that darkness.",
						"japanese": "その中に答えがある。あなた方の中にも、あの闇の中にも。",
						"chinese": "答案就在其中。在你们之内，也在那黑暗之内。",
						"french": "La réponse est là. En vous, et dans cette obscurité.",
						"spanish": "La respuesta está ahí. Dentro de vosotros, y dentro de esa oscuridad.",
						"vietnamese": "Câu trả lời nằm trong đó. Trong các ngươi, và trong bóng tối kia.",
						"thai": "คำตอบอยู่ในนั้น ในตัวพวกเจ้า และในความมืดมิดนั้น",
						"hindi": "उत्तर उसी में है। तुम्हारे भीतर भी, और उस अँधेरे के भीतर भी。"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "답이라니… 대체 뭐가.",
						"english": "The answer…? What is it?",
						"japanese": "答えだと… 一体何を。",
						"chinese": "答案…到底是什么？",
						"french": "Une réponse… à quoi donc ?",
						"spanish": "¿La respuesta…? ¿Qué es?",
						"vietnamese": "Câu trả lời…? Rốt cuộc là gì?",
						"thai": "คำตอบงั้นหรือ... อะไรกันแน่",
						"hindi": "उत्तर… आखिर किस बात का?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "채워지지 않는 것들을 채우려 하지 마. 그저 바라봐.",
						"english": "Don't try to fill what cannot be filled. Just observe.",
						"japanese": "満たされないものを満たそうとするな。ただ見つめろ。",
						"chinese": "不要试图填补无法填补之物。只需凝视。",
						"french": "N'essaie pas de combler ce qui ne peut l'être. Contente-toi d'observer.",
						"spanish": "No intentes llenar lo que no se puede llenar. Solo observa.",
						"vietnamese": "Đừng cố lấp đầy những thứ không thể lấp. Chỉ cần nhìn.",
						"thai": "อย่าพยายามเติมเต็มในสิ่งที่เติมไม่ได้ เพียงแค่เฝ้ามอง",
						"hindi": "जो भरा नहीं जा सकता, उसे भरने की कोशिश मत करो। बस देखो।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만… 두려워요.",
						"english": "But… I'm scared.",
						"japanese": "しかし… 恐ろしいです。",
						"chinese": "可是… 我很害怕。",
						"french": "Mais… j'ai peur.",
						"spanish": "Pero… tengo miedo.",
						"vietnamese": "Nhưng… tôi sợ.",
						"thai": "แต่ว่า… ฉันกลัว",
						"hindi": "लेकिन… मुझे डर लग रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "두려움은 그림자일 뿐. 실체가 없어.",
						"english": "Fear is just a shadow. It has no substance.",
						"japanese": "恐れは影に過ぎない。実体はない。",
						"chinese": "恐惧只是影子。它没有实体。",
						"french": "La peur n'est qu'une ombre. Elle n'a aucune substance.",
						"spanish": "El miedo es solo una sombra. No tiene sustancia.",
						"vietnamese": "Nỗi sợ chỉ là cái bóng. Không có thực thể.",
						"thai": "ความกลัวเป็นเพียงเงา ไม่มีตัวตน",
						"hindi": "डर सिर्फ एक परछाई है। इसका कोई अस्तित्व नहीं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "실체가 없다고요?",
						"english": "No substance, you say?",
						"japanese": "実体がないと？",
						"chinese": "没有实体？",
						"french": "Aucune substance, dites-vous ?",
						"spanish": "¿Que no tiene sustancia?",
						"vietnamese": "Không có thực thể ư?",
						"thai": "ไม่มีตัวตนงั้นหรือคะ?",
						"hindi": "कोई अस्तित्व नहीं है, क्या?"
					},
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "바라보는 순간, 힘을 잃어. 미워하는 순간, 너를 잠식하지.",
						"english": "The moment you face it, it loses power. The moment you hate it, it consumes you.",
						"japanese": "見つめた瞬間、力を失う。憎んだ瞬間、お前を蝕む。",
						"chinese": "凝视它的瞬间，它便失去力量。憎恨它的瞬间，它便吞噬你。",
						"french": "Au moment où tu la regardes, elle perd son pouvoir. Au moment où tu la hais, elle te dévore.",
						"spanish": "En el momento en que lo miras, pierde su poder. En el momento en que lo odias, te consume.",
						"vietnamese": "Khi ngươi nhìn vào nó, nó mất đi sức mạnh. Khi ngươi ghét nó, nó sẽ ăn mòn ngươi.",
						"thai": "เมื่อเจ้าเผชิญหน้ากับมัน มันจะไร้พลัง แต่เมื่อเจ้าเกลียดชังมัน มันจะกลืนกินเจ้า",
						"hindi": "जिस पल तुम इसे देखते हो, यह अपनी शक्ति खो देता है। जिस पल तुम इससे घृणा करते हो, यह तुम्हें निगल जाता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…그럼 미워하면 안 되는 건가요?",
						"english": "…So I shouldn't hate it?",
						"japanese": "…では憎んではいけないということですか？",
						"chinese": "…那我是不是不该憎恨它？",
						"french": "…Alors, je ne devrais pas la haïr ?",
						"spanish": "…¿Entonces no debo odiarlo?",
						"vietnamese": "…Vậy là không nên ghét nó sao?",
						"thai": "...ถ้าอย่างนั้นก็ไม่ควรเกลียดชังมันใช่ไหมคะ?",
						"hindi": "…तो क्या मुझे इससे नफरत नहीं करनी चाहिए?"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝까지 가야 해. 어둠이 모든 것을 삼키기 전에.",
						"english": "We must go to the very end. Before darkness swallows everything.",
						"japanese": "最後まで行かねばならない。闇がすべてを飲み込む前に。",
						"chinese": "必须走到最后。在黑暗吞噬一切之前。",
						"french": "Nous devons aller jusqu'au bout. Avant que les ténèbres n'engloutissent tout.",
						"spanish": "Debemos ir hasta el final. Antes de que la oscuridad lo engulla todo.",
						"vietnamese": "Phải đi đến cùng. Trước khi bóng tối nuốt chửng mọi thứ.",
						"thai": "เราต้องไปให้สุด ก่อนที่ความมืดจะกลืนกินทุกสิ่ง",
						"hindi": "हमें अंत तक जाना होगा। इससे पहले कि अँधेरा सब कुछ निगल जाए।"
					},
					"type": "speech",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "되돌아갈 수는 없는 건가요?",
						"english": "Can't we go back?",
						"japanese": "戻ることはできないのですか？",
						"chinese": "我们不能回头吗？",
						"french": "Ne peut-on pas revenir en arrière ?",
						"spanish": "¿No podemos volver?",
						"vietnamese": "Không thể quay lại sao?",
						"thai": "เรากลับไปไม่ได้เหรอคะ?",
						"hindi": "क्या हम वापस नहीं जा सकते?"
					}
				},
				{
					"content": {
						"korean": "되돌아갈 곳은 없어. 이미 여기까지 왔으니.",
						"english": "No turning back. We've come too far.",
						"japanese": "もう後戻りはできない。ここまで来たのだから。",
						"chinese": "没有回头路了。我们已经走到这一步。",
						"french": "Impossible de revenir en arrière. Nous sommes déjà allés trop loin.",
						"spanish": "No hay vuelta atrás. Ya hemos llegado demasiado lejos.",
						"vietnamese": "Không còn đường quay lại. Chúng ta đã đi quá xa rồi.",
						"thai": "ไม่มีทางย้อนกลับ เรามาไกลเกินไปแล้ว",
						"hindi": "वापस जाने की कोई जगह नहीं। हम बहुत आगे आ चुके हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…그렇다면.",
						"english": "...Then.",
						"japanese": "…ならば。",
						"chinese": "……那么。",
						"french": "...Alors.",
						"spanish": "...Entonces.",
						"vietnamese": "...Vậy thì.",
						"thai": "...ถ้าอย่างนั้น",
						"hindi": "...तो फिर।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…이겼다고 생각하는가. 공허는, 사라지지 않아.",
						"english": "...Do you think you've won? The Void does not disappear.",
						"japanese": "…勝ったと思うか。虚無は、消え去らない。",
						"chinese": "……你以为你赢了吗？虚空不会消失。",
						"french": "...Pensez-vous avoir gagné ? Le Vide ne disparaît pas.",
						"spanish": "...¿Crees que has ganado? El Vacío no desaparece.",
						"vietnamese": "...Ngươi nghĩ mình đã thắng sao. Hư vô sẽ không biến mất đâu.",
						"thai": "...เจ้าคิดว่าเจ้าชนะแล้วหรือ ความว่างเปล่าไม่หายไปหรอก",
						"hindi": "...क्या तुम्हें लगता है कि तुम जीत गए हो? शून्य कभी गायब नहीं होता।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리는 도망치지 않을 거야. 끝까지 응시할 뿐.",
						"english": "We won't run. We will only gaze until the end.",
						"japanese": "我々は逃げない。最後まで見つめるだけだ。",
						"chinese": "我们不会逃跑。我们只会凝视到最后。",
						"french": "Nous ne fuirons pas. Nous ne ferons qu'observer jusqu'à la fin.",
						"spanish": "No huiremos. Solo miraremos fijamente hasta el final.",
						"vietnamese": "Chúng ta sẽ không chạy trốn. Chỉ đối mặt đến cùng.",
						"thai": "เราจะไม่หนี เราจะจ้องมองจนถึงที่สุด",
						"hindi": "हम भागेंगे नहीं। हम अंत तक केवल निहारेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공허는 잠시 물러났다. 그러나, 끌어당김은 끝나지 않았다.",
						"english": "The Void receded for a moment. But the pull did not end.",
						"japanese": "虚無は一時的に退いた。しかし、引き寄せは終わらなかった。",
						"chinese": "虚空暂时退去了。然而，那股拉扯并未结束。",
						"french": "Le Vide recula un instant. Mais l'attraction ne cessa pas.",
						"spanish": "El Vacío retrocedió por un momento. Pero la atracción no terminó.",
						"vietnamese": "Hư vô tạm thời rút lui. Nhưng sự lôi kéo vẫn chưa kết thúc.",
						"thai": "ความว่างเปล่าถอยไปชั่วขณะ แต่แรงดึงดูดไม่สิ้นสุด",
						"hindi": "शून्य कुछ देर के लिए पीछे हट गया। लेकिन खिंचाव खत्म नहीं हुआ।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "이제 그들은, 미워할 수 없는 적을 마주해야 했다.",
						"english": "Now they had to face an enemy they couldn't hate.",
						"japanese": "彼らは、憎むことのできない敵と向き合わなければならなかった。",
						"chinese": "如今，他们必须面对一个无法憎恨的敌人。",
						"french": "Ils devaient désormais affronter un ennemi qu'ils ne pouvaient haïr.",
						"spanish": "Ahora debían enfrentar a un enemigo al que no podían odiar.",
						"vietnamese": "Giờ đây, họ phải đối mặt với kẻ thù không thể ghét bỏ.",
						"thai": "บัดนี้ พวกเขาต้องเผชิญหน้ากับศัตรูที่ไม่อาจเกลียดชังได้",
						"hindi": "अब उन्हें एक ऐसे शत्रु का सामना करना था जिससे वे नफरत नहीं कर सकते थे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "텅 빈 어둠 속에서, 거대한 그림자가 일렁였다.",
						"english": "In the empty darkness, a colossal shadow rippled.",
						"japanese": "空虚な闇の中で、巨大な影が揺らめいた。",
						"chinese": "在空虚的黑暗中，一个巨大的影子波动着。",
						"french": "Dans l'obscurité vide, une ombre colossale ondula.",
						"spanish": "En la oscuridad vacía, una sombra colosal ondeó.",
						"vietnamese": "Trong bóng tối trống rỗng, một cái bóng khổng lồ chập chờn.",
						"thai": "ในความมืดที่ว่างเปล่า เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "खाली अंधेरे में, एक विशाल परछाईं लहराई।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…네놈들이 여기까지 왔는가.",
						"english": "...So, you've come this far.",
						"japanese": "…お前たちがここまで来たか。",
						"chinese": "……你们这些家伙竟然走到这里了。",
						"french": "...Alors, vous êtes arrivés jusqu'ici.",
						"spanish": "...Así que habéis llegado hasta aquí.",
						"vietnamese": "...Các ngươi đã đến được đây sao.",
						"thai": "...พวกเจ้ามาถึงที่นี่แล้วหรือ",
						"hindi": "…तो तुम यहाँ तक आ गए।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… {random_boss}!",
						"english": "You are... {random_boss}!",
						"japanese": "お前が… {random_boss}！",
						"chinese": "你就是…… {random_boss}！",
						"french": "Tu es... {random_boss} !",
						"spanish": "¡Tú eres... {random_boss}!",
						"vietnamese": "Ngươi là... {random_boss}!",
						"thai": "เจ้าคือ... {random_boss}!",
						"hindi": "तुम हो... {random_boss}!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…그 이름도 공허한 것을, 이제야 만났군.",
						"english": "...At last, we meet the one whose name is also void.",
						"japanese": "…その名も空虚なるものに、ついに会ったか。",
						"chinese": "……终于见到了那个名字也虚无的家伙。",
						"french": "...Enfin, nous rencontrons celui dont le nom est aussi le vide.",
						"spanish": "...Por fin, nos encontramos con aquel cuyo nombre también es el vacío.",
						"vietnamese": "...Cuối cùng cũng gặp được kẻ có cái tên trống rỗng đó.",
						"thai": "...ในที่สุดเราก็ได้พบกับผู้ที่ชื่อของเขาก็ว่างเปล่าเช่นกัน",
						"hindi": "...आखिरकार, हम उससे मिले जिसका नाम भी शून्य है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도망치지 않아. 우리는… 응시할 거야.",
						"english": "We won't flee. We will... gaze.",
						"japanese": "逃げない。我々は…見つめるだろう。",
						"chinese": "我们不会逃跑。我们会……凝视。",
						"french": "Nous ne fuirons pas. Nous allons... observer.",
						"spanish": "No huiremos. Nosotros... miraremos fijamente.",
						"vietnamese": "Chúng ta sẽ không chạy trốn. Chúng ta sẽ... đối mặt.",
						"thai": "เราจะไม่หนี เราจะ...จ้องมอง",
						"hindi": "हम भागेंगे नहीं। हम... निहारेंगे।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "…하찮은 것들. 감히 공허를 직시하려 하는가.",
						"english": "...Insignificant beings. Dare you gaze into the void?",
						"japanese": "…取るに足らぬ者どもめ。よくも虚無を直視しようとするか。",
						"chinese": "……渺小的东西。竟敢直视虚空？",
						"french": "...Misérables. Osez-vous fixer le vide ?",
						"spanish": "...Seres insignificantes. ¿Os atrevéis a contemplar el vacío?",
						"vietnamese": "...Những kẻ thấp hèn. Dám đối mặt với Hư Không sao?",
						"thai": "...พวกไร้ค่า. กล้าดีอย่างไรมาจ้องมองความว่างเปล่า?",
						"hindi": "तुच्छ प्राणी। क्या तुम शून्य का सामना करने का साहस करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…다시 올 거야. 우리는 포기하지 않아.",
						"english": "...We'll be back. We won't give up.",
						"japanese": "…また戻ってくる。我々は諦めない。",
						"chinese": "……我们会回来的。我们不会放弃。",
						"french": "...Nous reviendrons. Nous n'abandonnerons pas.",
						"spanish": "...Volveremos. No nos rendiremos.",
						"vietnamese": "...Chúng tôi sẽ trở lại. Chúng tôi sẽ không bỏ cuộc.",
						"thai": "...เราจะกลับมา เราจะไม่ยอมแพ้",
						"hindi": "हम फिर आएंगे। हम हार नहीं मानेंगे।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공허는 모든 것을 집어삼켰다. 그들은 다시금 결의를 다졌다.",
						"english": "The void swallowed everything. They renewed their resolve.",
						"japanese": "虚無は全てを飲み込んだ。彼らは再び決意を固めた。",
						"chinese": "虚空吞噬了一切。他们再次下定决心。",
						"french": "Le vide avait tout englouti. Ils renouvelèrent leur détermination.",
						"spanish": "El vacío lo devoró todo. Ellos renovaron su determinación.",
						"vietnamese": "Hư Không nuốt chửng mọi thứ. Họ lại một lần nữa quyết tâm.",
						"thai": "ความว่างเปล่ากลืนกินทุกสิ่ง พวกเขาตั้งปณิธานใหม่อีกครั้ง",
						"hindi": "शून्य ने सब कुछ निगल लिया। उन्होंने अपना संकल्प फिर से दोहराया।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"늑대의 동공이 잠시 숨을 고른 골짜기.",
			"끌어당기는 힘이 사라진 텅 빈 어둠이 동행단을 맞았다.",
			"굶주림의 단서가 멎은 곳.",
			"이곳에서, 그들은 끝을 응시해야 했다."
		],
		"english": [
			"The valley where the wolf's pupil briefly paused.",
			"An empty darkness, devoid of its pulling force, met the companions.",
			"Where the traces of hunger ceased.",
			"Here, they had to gaze upon the end."
		],
		"japanese": [
			"狼の瞳孔がしばし息を潜めた谷。",
			"引き寄せる力を失った空虚な闇が、一行を出迎えた。",
			"飢えの痕跡が止まった場所。",
			"ここで、彼らは終わりを見据えなければならなかった。"
		],
		"chinese": [
			"狼的瞳孔短暂休憩的山谷。",
			"失去牵引力的空虚黑暗，迎向了同行者。",
			"饥饿的线索止息之处。",
			"在这里，他们必须凝视终结。"
		],
		"french": [
			"La vallée où la pupille du loup s'est un instant arrêtée.",
			"Une obscurité vide, dénuée de sa force d'attraction, accueillit la compagnie.",
			"Là où les traces de la faim s'estompaient.",
			"Ici, ils devaient contempler la fin."
		],
		"spanish": [
			"El valle donde la pupila del lobo contuvo el aliento por un momento.",
			"Una oscuridad vacía, desprovista de su fuerza de atracción, recibió a los compañeros.",
			"Donde los indicios del hambre cesaron.",
			"Aquí, tuvieron que contemplar el final."
		],
		"vietnamese": [
			"Thung lũng nơi đồng tử của sói tạm ngừng thở.",
			"Một bóng tối trống rỗng, không còn lực hút, đã đón chào đoàn người.",
			"Nơi dấu vết của sự đói khát dừng lại.",
			"Tại đây, họ phải đối mặt với kết cục."
		],
		"thai": [
			"หุบเขาที่รูม่านตาของหมาป่าหยุดพักชั่วครู่",
			"ความมืดที่ว่างเปล่าไร้ซึ่งแรงดึงดูดได้เข้าปะทะคณะเดินทาง",
			"ที่ซึ่งร่องรอยแห่งความหิวโหยได้หยุดลง",
			"ณ ที่แห่งนี้ พวกเขาต้องจ้องมองจุดจบ"
		],
		"hindi": [
			"वह घाटी जहाँ भेड़िये की पुतली ने पल भर के लिए साँस ली।",
			"एक खाली अँधेरा, जिसमें खींचने की शक्ति नहीं थी, ने साथियों का स्वागत किया।",
			"जहाँ भूख के निशान थम गए थे।",
			"यहाँ, उन्हें अंत को ताकना था।"
		]
	}
} as const;
