export const scenario_snowy_skaalbane_95_02 = {
	"scenario_id": "snowy_skaalbane_95_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"content": {
						"korean": "미로처럼 얽힌 얼음 동굴. 발걸음을 옮길수록 한기가 깊숙이 파고들었다.",
						"english": "A labyrinthine ice cave. With every step, the chill seeped deeper.",
						"japanese": "迷路のように入り組んだ氷の洞窟。足を進めるたびに、冷気が深く染み込んだ。",
						"chinese": "一座迷宫般的冰洞。每走一步，寒气都渗入得更深。",
						"french": "Une grotte de glace labyrinthique. À chaque pas, le froid s'infiltrait plus profondément.",
						"spanish": "Una cueva de hielo laberíntica. Con cada paso, el frío se adentraba más.",
						"vietnamese": "Hang động băng giá như mê cung. Mỗi bước chân, cái lạnh càng thấm sâu.",
						"thai": "ถ้ำน้ำแข็งที่ซับซ้อนราวกับเขาวงกต ทุกย่างก้าว ความหนาวเหน็บก็ยิ่งซึมลึก",
						"hindi": "एक भूलभुलैया जैसी बर्फीली गुफा। हर कदम के साथ, ठंडक और गहरी होती गई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여긴… 끝이 안 보여.",
						"english": "This place... there's no end in sight.",
						"japanese": "ここは…終わりが見えない。",
						"chinese": "这里…看不到尽头。",
						"french": "Cet endroit... on ne voit pas la fin.",
						"spanish": "Este lugar... no tiene fin a la vista.",
						"vietnamese": "Nơi này... không thấy điểm kết.",
						"thai": "ที่นี่... มองไม่เห็นจุดสิ้นสุด",
						"hindi": "यह जगह... अंत नहीं दिख रहा।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "봐, 여기 고대 바이킹 문양 같아!",
						"english": "Look, this looks like an ancient Viking pattern!",
						"japanese": "見て、これ古代ヴァイキングの模様みたい！",
						"chinese": "看，这看起来像古老的维京图案！",
						"french": "Regarde, ça ressemble à un ancien motif viking !",
						"spanish": "¡Mira, esto parece un patrón vikingo antiguo!",
						"vietnamese": "Nhìn kìa, đây trông giống hoa văn Viking cổ!",
						"thai": "ดูสิ นี่ดูเหมือนลวดลายไวกิ้งโบราณ!",
						"hindi": "देखो, यह एक प्राचीन वाइकिंग पैटर्न जैसा दिखता है!"
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"emotion": "base",
					"content": {
						"korean": "손대면… 어쩐지 기분이 이상해.",
						"english": "If I touch it... I feel strange somehow.",
						"japanese": "触ると…なんだか変な気分だ。",
						"chinese": "如果我触摸它…总觉得有些奇怪。",
						"french": "Si je le touche... je me sens étrange d'une manière ou d'une autre.",
						"spanish": "Si lo toco... me siento extraño de alguna manera.",
						"vietnamese": "Nếu chạm vào... tôi cảm thấy lạ lùng.",
						"thai": "ถ้าฉันสัมผัส... ฉันรู้สึกแปลกๆ",
						"hindi": "अगर मैं इसे छूता हूँ... मुझे अजीब लगता है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가워서 그래. 조심해, Finn.",
						"english": "It's just cold. Be careful, Finn.",
						"japanese": "冷たいからだよ。気をつけて、フィン。",
						"chinese": "只是很冷而已。小心点，Finn。",
						"french": "C'est juste froid. Fais attention, Finn.",
						"spanish": "Es solo el frío. Ten cuidado, Finn.",
						"vietnamese": "Chỉ là lạnh thôi. Cẩn thận nhé, Finn.",
						"thai": "มันแค่เย็นเฉยๆ ระวังนะ ฟินน์",
						"hindi": "यह बस ठंडा है। सावधान रहना, फिन।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "이 유물… 어디서 본 것 같은데.",
						"english": "This artifact... I feel like I've seen it somewhere.",
						"japanese": "この遺物…どこかで見たことがある気がする。",
						"chinese": "这件文物…我好像在哪里见过。",
						"french": "Cet artefact... j'ai l'impression de l'avoir déjà vu quelque part.",
						"spanish": "Este artefacto... me parece haberlo visto en algún lugar.",
						"vietnamese": "Cổ vật này... hình như tôi đã thấy ở đâu đó rồi.",
						"thai": "วัตถุโบราณนี้... ฉันรู้สึกเหมือนเคยเห็นที่ไหนสักแห่ง",
						"hindi": "यह कलाकृति... मुझे लगता है कि मैंने इसे कहीं देखा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "생각나는 거 있어?",
						"english": "Recall anything?",
						"japanese": "何か思いつく？",
						"chinese": "有想起什么吗？",
						"french": "Tu te souviens de quelque chose ?",
						"spanish": "¿Recuerdas algo?",
						"vietnamese": "Có nhớ gì không?",
						"thai": "นึกอะไรออกไหม?",
						"hindi": "कुछ याद आ रहा है क्या?"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "음… 잘 모르겠어. 아까부터 머리가 멍해.",
						"english": "Hmm... Not sure. My head's been foggy.",
						"japanese": "うーん…よく分からない。さっきから頭がぼーっとしてる。",
						"chinese": "嗯…不清楚。头一直很沉。",
						"french": "Hmm... Je ne sais pas. Ma tête est floue.",
						"spanish": "Mmm... No sé. Mi cabeza está confusa.",
						"vietnamese": "Ưm... Không biết nữa. Đầu cứ mụ mị từ nãy giờ.",
						"thai": "อืม... ไม่แน่ใจ หัวมึนๆ",
						"hindi": "हम्म... पता नहीं। मेरा सिर भारी है।"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Finn, 너 괜찮아? 안색이 안 좋은데.",
						"english": "Finn, are you okay? You don't look so good.",
						"japanese": "フィン、大丈夫？顔色が悪いよ。",
						"chinese": "芬恩，你还好吗？你的脸色不太好。",
						"french": "Finn, ça va ? Tu n'as pas bonne mine.",
						"spanish": "Finn, ¿estás bien? No tienes buen aspecto.",
						"vietnamese": "Finn, cậu không sao chứ? Sắc mặt cậu không tốt.",
						"thai": "ฟินน์ นายไม่เป็นไรนะ? ดูนายหน้าซีดจัง",
						"hindi": "फिन, तुम ठीक हो? तुम्हारा रंग उड़ा हुआ है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "근데… 우리가 여기 왜 왔지?",
						"english": "But... why are we here?",
						"japanese": "ところで…私たち、なんでここにいるんだっけ？",
						"chinese": "可是…我们为什么来这里？",
						"french": "Mais... pourquoi sommes-nous ici ?",
						"spanish": "Pero... ¿por qué estamos aquí?",
						"vietnamese": "Nhưng... sao chúng ta lại ở đây?",
						"thai": "แต่ว่า... เรามาที่นี่ทำไมนะ?",
						"hindi": "लेकिन... हम यहाँ क्यों आए थे?"
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "유물을 찾아서 왔잖아, Finn.",
						"english": "We came to find the artifact, Finn.",
						"japanese": "遺物を見つけに来たんだよ、フィン。",
						"chinese": "我们是来找文物的啊，芬恩。",
						"french": "On est venus chercher l'artefact, Finn.",
						"spanish": "Vinimos a buscar el artefacto, Finn.",
						"vietnamese": "Chúng ta đến để tìm di vật mà, Finn.",
						"thai": "เรามาตามหาวัตถุโบราณไง ฟินน์",
						"hindi": "हम कलाकृति खोजने आए थे, फिन।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아… 그랬나? 이상해… 자꾸 잊어버려.",
						"english": "Ah... was that it? Strange... I keep forgetting.",
						"japanese": "あ…そうだったっけ？おかしいな…すぐに忘れちゃう。",
						"chinese": "啊…是吗？奇怪…我老是忘。",
						"french": "Ah... c'est ça ? Bizarre... j'oublie tout le temps.",
						"spanish": "Ah... ¿era eso? Qué raro... no paro de olvidarlo.",
						"vietnamese": "À... vậy sao? Lạ thật... cứ quên mãi.",
						"thai": "อ่า... ใช่เหรอ? แปลกจัง... ฉันลืมตลอดเลย",
						"hindi": "आह... क्या ऐसा था? अजीब है... मैं बार-बार भूल जाता हूँ।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "이 얼음… Finn을 아프게 하는 것 같아.",
						"english": "This ice... it seems to be hurting Finn.",
						"japanese": "この氷…フィンを苦しめているみたい。",
						"chinese": "这冰…好像让芬恩很难受。",
						"french": "Cette glace... semble faire du mal à Finn.",
						"spanish": "Este hielo... parece estar lastimando a Finn.",
						"vietnamese": "Lớp băng này... dường như đang làm Finn đau đớn.",
						"thai": "น้ำแข็งนี่... ดูเหมือนจะทำให้ฟินน์เจ็บปวด",
						"hindi": "यह बर्फ... फिन को चोट पहुँचा रही है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 공기가 그들의 온기뿐 아니라 기억까지 갉아먹는 듯했다.",
						"english": "The cold air seemed to gnaw not only at their warmth but also their memories.",
						"japanese": "冷たい空気が彼らの温もりだけでなく、記憶まで蝕んでいるようだった。",
						"chinese": "冰冷的空气似乎不仅侵蚀着他们的温暖，也侵蚀着他们的记忆。",
						"french": "L'air froid semblait ronger non seulement leur chaleur, mais aussi leurs souvenirs.",
						"spanish": "El aire frío parecía corroer no solo su calor, sino también sus recuerdos.",
						"vietnamese": "Không khí lạnh lẽo dường như không chỉ gặm nhấm hơi ấm mà còn cả ký ức của họ.",
						"thai": "อากาศเย็นยะเยือกดูเหมือนจะกัดกินทั้งความอบอุ่นและความทรงจำของพวกเขา",
						"hindi": "ठंडी हवा न केवल उनकी गर्मी, बल्कि उनकी यादों को भी कुतर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "finn",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내가… 누구였더라? 대체….",
						"english": "Who... was I? What... am I?",
						"japanese": "私は…誰だった？一体…。",
						"chinese": "我…是谁来着？到底…。",
						"french": "Qui... étais-je ? Mais... qui ?",
						"spanish": "¿Quién... era yo? En serio...",
						"vietnamese": "Tôi... là ai vậy? Rốt cuộc...",
						"thai": "ฉัน... เป็นใครนะ? อะไรกันเนี่ย...",
						"hindi": "मैं... कौन था? आखिर..."
					},
					"type": "speech",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "Finn! 정신 차려!",
						"english": "Finn! Snap out of it!",
						"japanese": "フィン！しっかりして！",
						"chinese": "芬恩！清醒一点！",
						"french": "Finn ! Reprends tes esprits !",
						"spanish": "¡Finn! ¡Reacciona!",
						"vietnamese": "Finn! Tỉnh táo lại đi!",
						"thai": "ฟินน์! มีสติหน่อย!",
						"hindi": "फिन! होश में आओ!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그때, 거대한 얼음 결정 뒤에서 정체 모를 그림자가 나타났다.",
						"english": "Then, an unknown shadow appeared from behind the colossal ice crystal.",
						"japanese": "その時、巨大な氷の結晶の陰から、正体不明の影が現れた。",
						"chinese": "那时，一个不明的影子从巨大的冰晶后出现。",
						"french": "Alors, une ombre inconnue apparut derrière le gigantesque cristal de glace.",
						"spanish": "Entonces, una sombra desconocida apareció detrás del colosal cristal de hielo.",
						"vietnamese": "Khi đó, một cái bóng không rõ danh tính xuất hiện từ phía sau khối pha lê băng khổng lồ.",
						"thai": "ทันใดนั้น เงาลึกลับปรากฏขึ้นจากด้านหลังผลึกน้ำแข็งขนาดยักษ์",
						"hindi": "तभी, एक विशाल बर्फीले क्रिस्टल के पीछे से एक अज्ञात छाया प्रकट हुई।"
					}
				},
				{
					"content": {
						"korean": "너희의 온기가, 내가 가장 좋아하는 양식이다.",
						"english": "Your warmth, it is my favorite sustenance.",
						"japanese": "お前たちの温もりは、私の最も好む糧だ。",
						"chinese": "你们的温暖，是我最喜欢的食粮。",
						"french": "Votre chaleur, c'est ma subsistance préférée.",
						"spanish": "Vuestro calor, es mi sustento favorito.",
						"vietnamese": "Hơi ấm của các ngươi, là thức ăn ta ưa thích nhất.",
						"thai": "ความอบอุ่นของพวกเจ้า คืออาหารโปรดของข้า",
						"hindi": "तुम्हारी गर्माहट, मेरा सबसे पसंदीदा आहार है।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게… 이 모든 것의 원흉인가.",
						"english": "Is this... the culprit behind all of this?",
						"japanese": "これが…この全ての元凶なのか。",
						"chinese": "这…就是这一切的元凶吗？",
						"french": "Est-ce là... la source de tout cela ?",
						"spanish": "¿Es esto... el causante de todo esto?",
						"vietnamese": "Đây... là kẻ chủ mưu đằng sau tất cả sao?",
						"thai": "นี่... คือต้นเหตุของทั้งหมดหรือ?",
						"hindi": "क्या यह... इस सब का मूल कारण है?"
					}
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "무릎 꿇어라. 너희의 모든 것을 나에게 바쳐라.",
						"english": "Kneel. Offer everything you have to me.",
						"japanese": "跪け。持てるもの全てを我に捧げよ。",
						"chinese": "跪下。将你的一切献给我。",
						"french": "Agenouillez-vous. Offrez-moi tout ce que vous avez.",
						"spanish": "Arrodíllense. Ofrezcan todo lo que tienen a mí.",
						"vietnamese": "Quỳ xuống. Dâng mọi thứ ngươi có cho ta.",
						"thai": "คุกเข่าลง. จงมอบทุกสิ่งทุกอย่างของเจ้าให้แก่ข้า",
						"hindi": "घुटने टेको। अपना सब कुछ मुझे अर्पित करो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas encore… fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง…ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 온기도, 기억도 모두 나의 것이다.",
						"english": "Your warmth and your memories, all are mine.",
						"japanese": "お前たちの温もりも、記憶も、全て私のものだ。",
						"chinese": "你们的温暖，你们的记忆，都属于我。",
						"french": "Votre chaleur et vos souvenirs, tout est à moi.",
						"spanish": "Vuestro calor y vuestras memorias, todo es mío.",
						"vietnamese": "Hơi ấm và ký ức của các ngươi, tất cả đều là của ta.",
						"thai": "ความอบอุ่นและความทรงจำของพวกเจ้า ทั้งหมดเป็นของข้า",
						"hindi": "तुम्हारी गर्माहट और तुम्हारी यादें, सब मेरी हैं।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 뺏기지 않아!",
						"english": "I won't let you take any more!",
						"japanese": "これ以上は奪わせない！",
						"chinese": "不会再被夺走了！",
						"french": "Je ne me laisserai plus rien prendre !",
						"spanish": "¡No dejaré que me quites nada más!",
						"vietnamese": "Không để bị cướp đi nữa!",
						"thai": "จะไม่ยอมให้พรากไปมากกว่านี้แล้ว!",
						"hindi": "मैं अब और नहीं हारूँगा!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "finn",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…싸우지 마… 저건….",
						"english": "...Don't fight... That is...",
						"japanese": "…争わないで…あれは…。",
						"chinese": "…别打了…那不是…。",
						"french": "...Ne vous battez pas... C'est...",
						"spanish": "...No luchéis... Eso es...",
						"vietnamese": "...Đừng đánh nhau... Cái đó...",
						"thai": "...อย่าสู้เลย... นั่นมัน...",
						"hindi": "...लड़ो मत... वह तो..."
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "나를 쓰러뜨려도… 잊혀진 것들은 돌아오지 않아….",
						"english": "Even if you defeat me... what's forgotten won't return...",
						"japanese": "私を倒しても…忘れ去られたものは戻らない…。",
						"chinese": "即使你击败我…那些被遗忘的也无法回来…。",
						"french": "Même si vous me vainquez... ce qui est oublié ne reviendra pas...",
						"spanish": "Aunque me derrotes... lo olvidado no volverá...",
						"vietnamese": "Ngay cả khi ngươi đánh bại ta... những thứ đã bị lãng quên sẽ không trở lại...",
						"thai": "แม้จะโค่นข้าลงได้... สิ่งที่ถูกลืมก็ไม่อาจกลับมา...",
						"hindi": "भले ही तुम मुझे हरा दो... भूली हुई चीजें वापस नहीं आएंगी..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…너희의 기억도… 언젠간….",
						"english": "...Your memories too... someday...",
						"japanese": "…お前たちの記憶も…いつか…。",
						"chinese": "…你们的记忆…也总有一天会…。",
						"french": "...Vos souvenirs aussi... un jour...",
						"spanish": "...Vuestras memorias también... algún día...",
						"vietnamese": "...Ký ức của các ngươi cũng vậy... một ngày nào đó...",
						"thai": "...ความทรงจำของพวกเจ้าก็ด้วย... สักวันหนึ่ง...",
						"hindi": "...तुम्हारी यादें भी... कभी न कभी..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야! 끝이야, 이제!",
						"english": "What are you talking about! It's over now!",
						"japanese": "何を言ってるんだ！もう終わりだ！",
						"chinese": "你在说什么！现在结束了！",
						"french": "De quoi parles-tu ! C'est fini, maintenant !",
						"spanish": "¡De qué estás hablando! ¡Ya se acabó!",
						"vietnamese": "Ngươi nói gì vậy! Kết thúc rồi, bây giờ!",
						"thai": "พูดอะไรน่ะ! จบแล้ว ตอนนี้!",
						"hindi": "क्या कह रहे हो! अब सब खत्म!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "머리가… 아파….",
						"english": "My head... hurts...",
						"japanese": "頭が…痛い。",
						"chinese": "头…好痛…。",
						"french": "Ma tête... me fait mal...",
						"spanish": "Me duele... la cabeza...",
						"vietnamese": "Đầu của tôi... đau quá...",
						"thai": "หัวของฉัน... เจ็บ...",
						"hindi": "मेरा सिर... दुख रहा है..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "망각의 그림자는 거둬졌지만, 미궁은 또 다른 환각으로 그들을 이끌었다.",
						"english": "The shadow of oblivion has been lifted, but the labyrinth led them to another illusion.",
						"japanese": "忘却の影は払われたが、迷宮は彼らを別の幻覚へと導いた。",
						"chinese": "遗忘的阴影已经消散，但迷宫将他们引向了另一个幻觉。",
						"french": "L'ombre de l'oubli a été levée, mais le labyrinthe les a menés vers une autre illusion.",
						"spanish": "La sombra del olvido se ha disipado, pero el laberinto los condujo a otra ilusión.",
						"vietnamese": "Bóng tối lãng quên đã tan biến, nhưng mê cung lại dẫn họ đến một ảo ảnh khác.",
						"thai": "เงามืดแห่งการลืมเลือนได้จางหายไปแล้ว แต่เขาวงกตกลับนำพาพวกเขาไปสู่อีกภาพลวงตาหนึ่ง",
						"hindi": "विस्मृति का साया हट गया है, लेकिन भूलभुलैया उन्हें एक और भ्रम में ले गई।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 망각, 얼음 미궁의 유혹.",
			"고대 바이킹의 유물을 찾아 얼음 동굴로 향했다.",
			"하지만 이곳의 얼음은 그저 차갑지 않았다.",
			"모든 것을 앗아가는, 기억마저도."
		],
		"english": [
			"Cold oblivion, the allure of the ice labyrinth.",
			"We headed to the ice cave in search of ancient Viking artifacts.",
			"But the ice here was not merely cold.",
			"Taking everything, even memories."
		],
		"japanese": [
			"冷たい忘却、氷の迷宮の誘惑。",
			"古代ヴァイキングの遺物を求め、氷の洞窟へと向かった。",
			"しかし、ここの氷はただ冷たいだけではなかった。",
			"すべてを奪い去る、記憶さえも。"
		],
		"chinese": [
			"冰冷的遗忘，冰之迷宫的诱惑。",
			"我们前往冰洞寻找古代维京文物。",
			"但这里的冰不仅仅是寒冷。",
			"带走一切，甚至记忆。"
		],
		"french": [
			"L'oubli glacial, l'attrait du labyrinthe de glace.",
			"Nous nous sommes dirigés vers la grotte de glace à la recherche d'anciens artefacts vikings.",
			"Mais la glace ici n'était pas seulement froide.",
			"Emportant tout, même les souvenirs."
		],
		"spanish": [
			"Frío olvido, la seducción del laberinto de hielo.",
			"Nos dirigimos a la cueva de hielo en busca de antiguos artefactos vikingos.",
			"Pero el hielo aquí no era simplemente frío.",
			"Quitándolo todo, incluso los recuerdos."
		],
		"vietnamese": [
			"Lãng quên lạnh giá, sự cám dỗ của mê cung băng.",
			"Chúng tôi hướng đến hang động băng giá để tìm kiếm cổ vật Viking.",
			"Nhưng băng ở đây không chỉ lạnh giá.",
			"Lấy đi tất cả, ngay cả ký ức."
		],
		"thai": [
			"ความทรงจำที่เลือนหาย, มนต์เสน่ห์ของเขาวงกตน้ำแข็ง.",
			"เรามุ่งหน้าสู่ถ้ำน้ำแข็งเพื่อค้นหาสิ่งประดิษฐ์ไวกิ้งโบราณ",
			"แต่น้ำแข็งที่นี่ไม่ได้เป็นเพียงความเย็น",
			"พรากทุกสิ่งไป แม้กระทั่งความทรงจำ"
		],
		"hindi": [
			"ठंडी विस्मृति, बर्फीले भूलभुलैया का आकर्षण।",
			"हम प्राचीन वाइकिंग कलाकृतियों की तलाश में बर्फीली गुफा की ओर बढ़े।",
			"लेकिन यहां की बर्फ सिर्फ ठंडी नहीं थी।",
			"सब कुछ छीन लेना, यादें भी।"
		]
	}
} as const;
