export const scenario_snowy_frostscion_20_02 = {
	"scenario_id": "snowy_frostscion_20_02",
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
	"prologue": {
		"korean": [
			"백색 설원. 그 끝은 어디인가.",
			"수많은 길이 나를 속였다.",
			"핀은 말했다. 모든 길이 제자리로 돌아온다고.",
			"희망은 얼어붙고, 절망만이 남았다."
		],
		"english": [
			"White snowfield. Where does it end?",
			"Countless paths deceived me.",
			"Finn said. All paths lead back to where they started.",
			"Hope froze, and only despair remained."
		],
		"japanese": [
			"白き雪原。その果てはどこか。",
			"数多の道が私を欺いた。",
			"フィンは言った。すべての道は元に戻ると。",
			"希望は凍りつき、絶望だけが残った。"
		],
		"chinese": [
			"白色雪原。它的尽头在哪里？",
			"无数条道路欺骗了我。",
			"芬恩说。所有的路都会回到原点。",
			"希望冻结，只剩下绝望。"
		],
		"french": [
			"Champ de neige blanc. Où est sa fin ?",
			"D'innombrables chemins m'ont trompé.",
			"Finn a dit. Tous les chemins mènent à leur point de départ.",
			"L'espoir a gelé, et seul le désespoir est resté."
		],
		"spanish": [
			"Campo de nieve blanco. ¿Dónde termina?",
			"Innumerables caminos me engañaron.",
			"Finn dijo. Todos los caminos regresan a su origen.",
			"La esperanza se congeló, y solo quedó la desesperación."
		],
		"vietnamese": [
			"Cánh đồng tuyết trắng. Nơi nào là điểm cuối?",
			"Vô số con đường đã lừa dối tôi.",
			"Finn nói. Mọi con đường đều quay về chỗ cũ.",
			"Hy vọng đóng băng, chỉ còn lại tuyệt vọng."
		],
		"thai": [
			"ทุ่งหิมะสีขาว ปลายทางอยู่ที่ใด",
			"เส้นทางนับไม่ถ้วนหลอกลวงฉัน",
			"ฟินน์พูดว่า ทุกเส้นทางจะกลับมาที่เดิม",
			"ความหวังแข็งตัว เหลือเพียงความสิ้นหวัง"
		],
		"hindi": [
			"श्वेत बर्फीला मैदान। इसका अंत कहाँ है?",
			"असंख्य रास्तों ने मुझे धोखा दिया।",
			"फिन ने कहा। सभी रास्ते वहीं लौटते हैं जहाँ से शुरू हुए थे।",
			"आशा जम गई, और केवल निराशा बची।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 설원. 거대한 얼음 결정들이 길을 막았다.",
						"english": "An endless snowfield. Giant ice crystals blocked the path.",
						"japanese": "果てしなく広がる雪原。巨大な氷の結晶が道を塞いだ。",
						"chinese": "一望无际的雪原。巨大的冰晶挡住了去路。",
						"french": "Un champ de neige infini. De gigantesques cristaux de glace bloquaient le chemin.",
						"spanish": "Un campo de nieve interminable. Enormes cristales de hielo bloqueaban el camino.",
						"vietnamese": "Cánh đồng tuyết trải dài vô tận. Những tinh thể băng khổng lồ chặn đường.",
						"thai": "ทุ่งหิมะที่ทอดยาวไม่มีที่สิ้นสุด ผลึกน้ำแข็งขนาดยักษ์ขวางทาง",
						"hindi": "एक अंतहीन बर्फीला मैदान। विशाल बर्फ के क्रिस्टल ने रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 대체 어디지… 끝도 없잖아.",
						"english": "Where on earth is this...? It's endless.",
						"japanese": "ここは一体どこだ…終わりがないじゃないか。",
						"chinese": "这到底是什么地方……没完没了。",
						"french": "Où diable est-ce...? C'est sans fin.",
						"spanish": "¿Dónde demonios es esto...? No tiene fin.",
						"vietnamese": "Đây rốt cuộc là đâu vậy… Sao mãi không hết?",
						"thai": "นี่มันที่ไหนกันแน่… ไม่มีที่สิ้นสุดเลย",
						"hindi": "यह कहाँ है...? यह तो अंतहीन है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "길은 없어. 어딜 가든 다시 여기로 돌아와.",
						"english": "There's no path. No matter where you go, you always come back here.",
						"japanese": "道はない。どこへ行っても、またここに戻ってくる。",
						"chinese": "没有路。无论走到哪里，都会回到这里。",
						"french": "Il n'y a pas de chemin. Peu importe où tu vas, tu reviens toujours ici.",
						"spanish": "No hay camino. Vayas donde vayas, siempre vuelves aquí.",
						"vietnamese": "Không có đường đâu. Đi đâu rồi cũng quay lại đây thôi.",
						"thai": "ไม่มีทางหรอก ไม่ว่าไปไหนก็กลับมาที่นี่อีก",
						"hindi": "कोई रास्ता नहीं है। तुम कहीं भी जाओ, यहीं वापस आ जाते हो।"
					}
				},
				{
					"content": {
						"korean": "무슨 소리야? 당신도 길을 잃었어?",
						"english": "What are you talking about? Are you lost too?",
						"japanese": "何を言ってるんだ？あなたも道に迷ったのか？",
						"chinese": "你在说什么？你也迷路了吗？",
						"french": "De quoi parles-tu ? Es-tu perdu aussi ?",
						"spanish": "¿De qué hablas? ¿Tú también estás perdido?",
						"vietnamese": "Anh đang nói gì vậy? Anh cũng bị lạc sao?",
						"thai": "คุณกำลังพูดอะไร? คุณก็หลงทางเหรอ?",
						"hindi": "तुम क्या कह रहे हो? क्या तुम भी खो गए हो?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "잃은 게 아니야. 그냥… 계속 반복되는 거야.",
						"english": "I'm not lost. It's just... a constant loop.",
						"japanese": "迷ったんじゃない。ただ…ずっと繰り返してるんだ。",
						"chinese": "不是迷路了。只是……一直在重复。",
						"french": "Je ne suis pas perdu. C'est juste... une boucle constante.",
						"spanish": "No estoy perdido. Simplemente... se repite una y otra vez.",
						"vietnamese": "Không phải tôi bị lạc. Chỉ là… nó cứ lặp đi lặp lại thôi.",
						"thai": "ไม่ได้หลง แค่… มันวนไปเรื่อยๆ",
						"hindi": "मैं खोया नहीं हूँ। बस... यह लगातार दोहरा रहा है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "또 여기까지 왔군. 지겹지도 않아?",
						"english": "You're back here again. Aren't you tired of it?",
						"japanese": "またここまで来たのか。飽きないのか？",
						"chinese": "又到这里了。你不觉得烦吗？",
						"french": "Tu es encore là. Ça ne t'ennuie pas ?",
						"spanish": "Estás aquí de nuevo. ¿No te aburre?",
						"vietnamese": "Lại đến đây nữa rồi. Không thấy chán à?",
						"thai": "มาถึงนี่อีกแล้ว ไม่เบื่อบ้างหรือไง?",
						"hindi": "तुम फिर यहाँ आ गए। क्या तुम इससे थकते नहीं हो?"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아가는 길이 있다면 가야 할 거 아니야.",
						"english": "If there's a way back, we should take it.",
						"japanese": "帰り道があるなら、行くべきだろ。",
						"chinese": "如果有回头路，就该走啊。",
						"french": "S'il y a un chemin pour revenir, il faut le prendre, non ?",
						"spanish": "Si hay un camino de vuelta, deberíamos tomarlo, ¿no?",
						"vietnamese": "Nếu có đường về, chẳng phải nên đi sao?",
						"thai": "ถ้ามีทางกลับ ก็ต้องไปสิ",
						"hindi": "अगर वापसी का रास्ता है, तो जाना चाहिए न।"
					}
				},
				{
					"content": {
						"korean": "돌아갈 곳은 없어. 여기는… 영원한 미로야.",
						"english": "There's no way back. This is... an eternal maze.",
						"japanese": "帰る場所なんてない。ここは…永遠の迷路だ。",
						"chinese": "没有回头路。这里是…永恒的迷宫。",
						"french": "Il n'y a pas de retour. C'est... un labyrinthe éternel.",
						"spanish": "No hay adónde volver. Esto es... un laberinto eterno.",
						"vietnamese": "Không có đường về đâu. Đây là… một mê cung vĩnh cửu.",
						"thai": "ไม่มีที่ให้กลับ ที่นี่คือ...เขาวงกตนิรันดร์",
						"hindi": "वापस जाने की कोई जगह नहीं। यह… एक अनंत भूलभुलैया है।"
					},
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "거대한 그림자가 나타났다. 얼음 괴물이었다.",
						"english": "A colossal shadow appeared. It was an ice monster.",
						"japanese": "巨大な影が現れた。それは氷の怪物だった。",
						"chinese": "一个巨大的影子出现了。那是一只冰怪。",
						"french": "Une ombre colossale apparut. C'était un monstre de glace.",
						"spanish": "Una sombra colosal apareció. Era un monstruo de hielo.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Đó là một con quái vật băng.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น มันคือสัตว์ประหลาดน้ำแข็ง",
						"hindi": "एक विशालकाय परछाई प्रकट हुई। वह एक बर्फीला राक्षस था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장, 또야?",
						"english": "Damn it, again?",
						"japanese": "くそ、またか？",
						"chinese": "该死，又来了？",
						"french": "Zut, encore ?",
						"spanish": "Maldición, ¿otra vez?",
						"vietnamese": "Chết tiệt, lại nữa sao?",
						"thai": "บ้าเอ๊ย อีกแล้วเหรอ?",
						"hindi": "धत्त तेरी, फिर से?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "싸워봤자 소용없어. 어차피 다시 나타날 텐데.",
						"english": "It's useless to fight. It'll just reappear anyway.",
						"japanese": "戦っても無駄だ。どうせまた現れるだろう。",
						"chinese": "战斗也没用。反正它们还会再出现。",
						"french": "C'est inutile de se battre. Il réapparaîtra de toute façon.",
						"spanish": "Es inútil luchar. Volverá a aparecer de todas formas.",
						"vietnamese": "Chống cự cũng vô ích thôi. Đằng nào nó cũng sẽ xuất hiện lại.",
						"thai": "สู้ไปก็ไร้ประโยชน์ มันก็จะปรากฏตัวอีกอยู่ดี",
						"hindi": "लड़ना बेकार है। वह वैसे भी फिर से प्रकट होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "finn"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"content": {
						"korean": "저것들을 아무리 부숴도… 소용없어.",
						"english": "No matter how many of them we destroy... it's useless.",
						"japanese": "あれらをいくら壊しても…無駄だ。",
						"chinese": "无论摧毁多少个那些东西…都无济于事。",
						"french": "Peu importe combien on en détruit... c'est inutile.",
						"spanish": "Por mucho que los destruyamos... es inútil.",
						"vietnamese": "Dù có phá hủy bao nhiêu cái đó... cũng vô ích thôi.",
						"thai": "ไม่ว่าจะทำลายพวกมันเท่าไหร่...ก็ไร้ประโยชน์",
						"hindi": "चाहे हम उन्हें कितना भी तोड़ दें… कोई फायदा नहीं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "포기하지 마! 길이 있을 거야.",
						"english": "Don't give up! There has to be a way.",
						"japanese": "諦めるな！道はあるはずだ。",
						"chinese": "别放弃！会有办法的。",
						"french": "N'abandonne pas ! Il doit y avoir un chemin.",
						"spanish": "¡No te rindas! Debe haber un camino.",
						"vietnamese": "Đừng bỏ cuộc! Sẽ có lối thoát thôi.",
						"thai": "อย่ายอมแพ้! ต้องมีทางออกสิ",
						"hindi": "हार मत मानो! कोई रास्ता जरूर होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "finn",
					"content": {
						"korean": "길 같은 건 없어. 그냥 계속 같은 곳을 맴도는 거지.",
						"english": "There's no such thing as a way. We're just circling the same place.",
						"japanese": "道なんてない。ただ同じ場所をぐるぐる回ってるだけだ。",
						"chinese": "没有什么路。我们只是在同一个地方打转。",
						"french": "Il n'y a pas de chemin. On tourne juste en rond au même endroit.",
						"spanish": "No hay tal camino. Solo estamos dando vueltas en el mismo lugar.",
						"vietnamese": "Không có đường nào cả. Chúng ta chỉ đang loanh quanh ở cùng một chỗ thôi.",
						"thai": "ไม่มีทางออกหรอก เราก็แค่เวียนวนอยู่แต่ที่เดิม",
						"hindi": "कोई रास्ता नहीं है। हम बस एक ही जगह घूम रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "저 괴물, 뭔가 이상해. 움직임이… 기시감이 들어.",
						"english": "That monster, something's off. Its movements... feel familiar.",
						"japanese": "あの怪物、何かおかしい。動きが…デジャヴュを感じる。",
						"chinese": "那怪物，有点不对劲。它的动作…有种似曾相识的感觉。",
						"french": "Ce monstre, quelque chose cloche. Ses mouvements... me sont familiers.",
						"spanish": "Ese monstruo, algo anda mal. Sus movimientos... me resultan familiares.",
						"vietnamese": "Con quái vật đó, có gì đó lạ. Chuyển động của nó... cảm giác quen thuộc.",
						"thai": "สัตว์ประหลาดตัวนั้น แปลกๆ การเคลื่อนไหวของมัน...รู้สึกคุ้นเคย",
						"hindi": "वह राक्षस, कुछ अजीब है। उसकी हरकतें… जानी-पहचानी लग रही हैं।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "finn",
					"content": {
						"korean": "똑같을 걸. 전부 다.",
						"english": "It'll be the same. All of them.",
						"japanese": "同じことだ。全部。",
						"chinese": "都一样。全部都一样。",
						"french": "Ce sera pareil. Tous.",
						"spanish": "Será lo mismo. Todos.",
						"vietnamese": "Sẽ giống nhau thôi. Tất cả.",
						"thai": "มันก็เหมือนกันหมดแหละ",
						"hindi": "सब एक जैसा होगा। सब कुछ।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모닥불이 벌써 꺼져가네. 이상하지 않아?",
						"english": "The campfire's already dying out. Isn't that strange?",
						"japanese": "焚き火がもう消えかかってる。おかしくない？",
						"chinese": "篝火已经快熄灭了。不觉得奇怪吗？",
						"french": "Le feu de camp s'éteint déjà. C'est pas étrange ?",
						"spanish": "La fogata ya se está apagando. ¿No es extraño?",
						"vietnamese": "Lửa trại đã tàn rồi. Lạ thật đấy nhỉ?",
						"thai": "กองไฟมอดลงเร็วจัง ไม่แปลกเหรอ?",
						"hindi": "अलाव पहले ही बुझ रहा है। अजीब नहीं है क्या?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모닥불의 온기가 유난히 빨리 사라졌다. 주변의 냉기가 생명을 빨아들이는 듯했다.",
						"english": "The campfire's warmth faded unusually fast. The surrounding chill seemed to drain life itself.",
						"japanese": "焚き火の温もりが異常なほど早く消えた。周囲の冷気が生命を吸い取っていくかのようだった。",
						"chinese": "篝火的温暖异常迅速地消散了。周围的寒气仿佛在吸取生命。",
						"french": "La chaleur du feu de camp s'est dissipée anormalement vite. La froideur ambiante semblait aspirer la vie elle-même.",
						"spanish": "El calor de la fogata se disipó inusualmente rápido. El frío circundante parecía absorber la vida misma.",
						"vietnamese": "Hơi ấm của lửa trại tan đi nhanh một cách lạ thường. Cái lạnh xung quanh như đang hút cạn sự sống.",
						"thai": "ความอบอุ่นจากกองไฟหายไปอย่างรวดเร็วผิดปกติ ความหนาวเย็นรอบข้างดูดกลืนชีวิตไปหมดสิ้น",
						"hindi": "अलाव की गर्मी असामान्य रूप से तेज़ी से गायब हो गई। आस-पास की ठंडक जीवन को चूस रही थी।"
					}
				},
				{
					"content": {
						"korean": "…점점 추워지는 것 같아.",
						"english": "...It feels like it's getting colder.",
						"japanese": "…だんだん寒くなってきたみたい。",
						"chinese": "……好像越来越冷了。",
						"french": "...On dirait qu'il fait de plus en plus froid.",
						"spanish": "...Parece que hace cada vez más frío.",
						"vietnamese": "...Hình như càng lúc càng lạnh hơn.",
						"thai": "...รู้สึกเหมือนยิ่งหนาวขึ้นเรื่อยๆ",
						"hindi": "...लगता है, ठंड बढ़ती जा रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "모든 것이 사라질 거야. 너의 온기도, 너의 기억도.",
						"english": "Everything will vanish. Your warmth, your memories.",
						"japanese": "全てが消え去るだろう。お前の温もりも、お前の記憶も。",
						"chinese": "一切都将消失。你的温暖，你的记忆。",
						"french": "Tout va disparaître. Ta chaleur aussi, et tes souvenirs.",
						"spanish": "Todo desaparecerá. Tu calor, tus recuerdos.",
						"vietnamese": "Mọi thứ rồi sẽ biến mất. Hơi ấm của ngươi, cả ký ức của ngươi nữa.",
						"thai": "ทุกสิ่งจะหายไป ความอบอุ่นของเจ้า ความทรงจำของเจ้าด้วย",
						"hindi": "सब कुछ मिट जाएगा। तुम्हारी गर्मी भी, तुम्हारी यादें भी।"
					}
				},
				{
					"content": {
						"korean": "그런 말 마!",
						"english": "Don't say that!",
						"japanese": "そんなこと言わないで！",
						"chinese": "别这么说！",
						"french": "Ne dis pas ça !",
						"spanish": "¡No digas eso!",
						"vietnamese": "Đừng nói thế!",
						"thai": "อย่าพูดแบบนั้น!",
						"hindi": "ऐसा मत कहो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음으로 뒤덮인 중간 보스가 길을 막았다.",
						"english": "A gigantic, ice-covered mini-boss blocked the way.",
						"japanese": "巨大な氷に覆われた中ボスが道を塞いだ。",
						"chinese": "一个被巨大冰块覆盖的小Boss挡住了去路。",
						"french": "Un mini-boss géant recouvert de glace bloquait le chemin.",
						"spanish": "Un mini-jefe gigantesco cubierto de hielo bloqueaba el camino.",
						"vietnamese": "Một tên trùm phụ khổng lồ phủ đầy băng đã chặn đường.",
						"thai": "มินิบอสขนาดยักษ์ที่ปกคลุมด้วยน้ำแข็งขวางทางอยู่",
						"hindi": "एक विशालकाय, बर्फ से ढका मिनी-बॉस रास्ता रोके खड़ा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 것들. 여기서 벗어날 길은 없어.",
						"english": "Fools. There's no escaping this place.",
						"japanese": "愚かな者たちめ。ここから逃れる道はない。",
						"chinese": "愚蠢的东西。这里没有出路。",
						"french": "Stupides créatures. Il n'y a pas d'échappatoire ici.",
						"spanish": "Necios. No hay salida de aquí.",
						"vietnamese": "Lũ ngốc. Không có lối thoát nào khỏi đây đâu.",
						"thai": "พวกโง่เอ๊ย ไม่มีทางหนีรอดจากที่นี่ได้หรอก",
						"hindi": "मूर्खों। यहाँ से बाहर निकलने का कोई रास्ता नहीं है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 하지 마! 길은 우리가 만들 거야.",
						"english": "Don't talk nonsense! We'll make our own path.",
						"japanese": "馬鹿なこと言うな！道は俺たちが作るんだ！",
						"chinese": "别胡说！路是我们自己开辟的。",
						"french": "Ne dis pas n'importe quoi ! Nous allons créer notre propre chemin.",
						"spanish": "¡No digas tonterías! ¡Nosotros haremos nuestro propio camino!",
						"vietnamese": "Đừng nói nhảm! Đường đi là do chúng ta tự tạo ra!",
						"thai": "อย่าพูดไร้สาระ! ทางเดินเราจะสร้างเอง!",
						"hindi": "बकवास मत करो! हम अपना रास्ता खुद बनाएंगे।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 수없이 반복된 길을… 또 만들겠다?",
						"english": "You'll make a path... that's already been trodden countless times?",
						"japanese": "既に何度も繰り返された道を…また作るだと？",
						"chinese": "已经无数次重复的道路……你们还要再创造一次？",
						"french": "Vous allez créer un chemin... déjà parcouru d'innombrables fois ?",
						"spanish": "¿Volverán a crear un camino... ya recorrido innumerables veces?",
						"vietnamese": "Một con đường đã lặp đi lặp lại vô số lần rồi... mà các ngươi còn muốn tạo ra nữa sao?",
						"thai": "ทางที่ซ้ำซากมานับครั้งไม่ถ้วน... เจ้าจะสร้างมันขึ้นมาอีกรึ?",
						"hindi": "जो रास्ता अनगिनत बार दोहराया जा चुका है... उसे फिर से बनाओगे?"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포기해라. 여기서 벗어날 수 없어.",
						"english": "Give up. You can't escape from here.",
						"japanese": "諦めろ。ここからは逃れられない。",
						"chinese": "放弃吧。你无法逃离这里。",
						"french": "Abandonne. Tu ne peux pas t'échapper d'ici.",
						"spanish": "Ríndete. No puedes escapar de aquí.",
						"vietnamese": "Bỏ cuộc đi. Ngươi không thể thoát khỏi đây đâu.",
						"thai": "ยอมแพ้เถอะ แกหนีไปจากที่นี่ไม่ได้หรอก",
						"hindi": "हार मान लो। तुम यहाँ से निकल नहीं पाओगे।"
					}
				},
				{
					"content": {
						"korean": "…아직, 포기 안 해.",
						"english": "...Not yet. I won't give up.",
						"japanese": "…まだ、諦めない。",
						"chinese": "……还没，我不会放弃。",
						"french": "...Pas encore. Je n'abandonne pas.",
						"spanish": "...Todavía no. No me rendiré.",
						"vietnamese": "...Chưa, tôi chưa bỏ cuộc.",
						"thai": "...ยังไม่ยอมแพ้",
						"hindi": "...अभी नहीं, मैं हार नहीं मानूँगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "거봐. 아무것도 변하지 않아.",
						"english": "See? Nothing changes.",
						"japanese": "ほら見ろ。何も変わらない。",
						"chinese": "看吧。什么都没有改变。",
						"french": "Tu vois ? Rien ne change.",
						"spanish": "Ves. Nada cambia.",
						"vietnamese": "Thấy chưa. Chẳng có gì thay đổi cả.",
						"thai": "เห็นไหม ไม่มีอะไรเปลี่ยนเลย",
						"hindi": "देखा। कुछ नहीं बदलता।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐, 핀! 다시 할 거야!",
						"english": "Shut up, Finn! I'll do it again!",
						"japanese": "黙れ、フィン！もう一度やる！",
						"chinese": "闭嘴，芬恩！我会再试一次！",
						"french": "Tais-toi, Finn ! Je vais réessayer !",
						"spanish": "¡Cállate, Finn! ¡Lo haré de nuevo!",
						"vietnamese": "Im đi, Finn! Tôi sẽ làm lại!",
						"thai": "หุบปาก, ฟินน์! ฉันจะทำใหม่!",
						"hindi": "चुप हो जा, फिन! मैं फिर कोशिश करूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…하지만 결국, 너도… 얼음이 될 것이다.",
						"english": "...But in the end, you too... will turn to ice.",
						"japanese": "…だが結局、お前も…氷になるだろう。",
						"chinese": "……但最终，你也会……变成冰块。",
						"french": "...Mais à la fin, toi aussi... tu deviendras glace.",
						"spanish": "...Pero al final, tú también... te convertirás en hielo.",
						"vietnamese": "...Nhưng cuối cùng, ngươi cũng sẽ... hóa thành băng thôi.",
						"thai": "...แต่สุดท้าย เจ้าเองก็จะ... กลายเป็นน้ำแข็ง",
						"hindi": "...पर अंत में, तुम भी... बर्फ बन जाओगे।"
					}
				},
				{
					"content": {
						"korean": "시끄러워! 우리가 길을 찾을 거야.",
						"english": "Quiet! We'll find a way.",
						"japanese": "うるさい！道はきっと見つかる！",
						"chinese": "吵死了！我们一定会找到路的。",
						"french": "Silence ! Nous trouverons un moyen.",
						"spanish": "¡Cállate! Encontraremos el camino.",
						"vietnamese": "Im đi! Chúng ta sẽ tìm được đường thôi.",
						"thai": "เงียบ! เราจะหาทางเจอแน่นอน",
						"hindi": "चुप रहो! हम रास्ता ढूंढ लेंगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 괴물. 그러나 핀의 절망이 떠올랐다. 정말 끝이 있을까.",
						"english": "Monster defeated. But Finn's despair resurfaced. Is there truly an end?",
						"japanese": "怪物は倒れた。しかしフィンの絶望が蘇る。本当に終わりはあるのか。",
						"chinese": "怪物倒下了。但芬恩的绝望再次浮现。真的有尽头吗？",
						"french": "Monstre vaincu. Mais le désespoir de Finn refit surface. Y a-t-il vraiment une fin ?",
						"spanish": "Monstruo derrotado. Pero la desesperación de Finn resurgió. ¿Habrá realmente un final?",
						"vietnamese": "Quái vật đã gục ngã. Nhưng tuyệt vọng của Finn lại trỗi dậy. Liệu có thật sự có kết thúc?",
						"thai": "ปีศาจล้มลง แต่ความสิ้นหวังของฟินน์ก็กลับมา มีจุดจบจริงหรือ?",
						"hindi": "राक्षस परास्त हुआ। पर फिन की निराशा फिर उमड़ आई। क्या सच में कोई अंत है?"
					}
				}
			],
			"id": 15
		}
	]
} as const;
