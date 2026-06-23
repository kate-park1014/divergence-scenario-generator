export const scenario_snowy_ursusglacius_74_01 = {
	"scenario_id": "snowy_ursusglacius_74_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"영원한 겨울이 지배하는 설원.",
			"고대 유적지, 침묵만이 감돌던 그곳에",
			"누군가 오래된 봉인을 깨웠다.",
			"재앙의 전조는 이미 시작되었다."
		],
		"english": [
			"Snowfield ruled by eternal winter.",
			"At the ancient ruins, where only silence lingered,",
			"Someone awakened an ancient seal.",
			"The harbinger of disaster has already begun."
		],
		"japanese": [
			"永遠の冬が支配する雪原。",
			"古代遺跡、そこには沈黙だけが漂っていた。",
			"誰かが古き封印を呼び覚ました。",
			"災厄の予兆は既に始まった。"
		],
		"chinese": [
			"永恒之冬统治的雪原。",
			"古老遗迹，唯有寂静弥漫之地，",
			"有人唤醒了古老的封印。",
			"灾厄的预兆已经开始。"
		],
		"french": [
			"Champ de neige dominé par l'hiver éternel.",
			"Dans les ruines antiques, où seul le silence régnait,",
			"Quelqu'un a réveillé un ancien sceau.",
			"Les préludes du désastre ont déjà commencé."
		],
		"spanish": [
			"Un campo de nieve dominado por el invierno eterno.",
			"En las ruinas antiguas, donde solo el silencio perduraba,",
			"Alguien despertó un antiguo sello.",
			"El presagio del desastre ya ha comenzado."
		],
		"vietnamese": [
			"Đồng tuyết bị thống trị bởi mùa đông vĩnh cửu.",
			"Tại khu di tích cổ, nơi chỉ có sự im lặng bao trùm,",
			"Ai đó đã đánh thức một phong ấn cổ xưa.",
			"Điềm báo tai ương đã bắt đầu."
		],
		"thai": [
			"ทุ่งหิมะที่ปกครองโดยฤดูหนาวอันเป็นนิรันดร์",
			"ณ ซากปรักหักพังโบราณ ที่ซึ่งความเงียบงันเพียงอย่างเดียวปกคลุม",
			"ใครบางคนได้ปลุกผนึกโบราณให้ตื่นขึ้น",
			"ลางบอกเหตุแห่งภัยพิบัติได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"शाश्वत सर्दी से शासित हिमक्षेत्र।",
			"प्राचीन खंडहरों में, जहाँ केवल चुप्पी छाई थी,",
			"किसी ने एक प्राचीन मुहर को जगाया।",
			"विनाश का अग्रदूत पहले ही शुरू हो चुका है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "혹독한 설원, 얼어붙은 대지 위로 어둠이 깔렸다.",
						"english": "On the harsh snowfield, darkness fell upon the frozen land.",
						"japanese": "厳しい雪原、凍てついた大地に闇が覆いかぶさった。",
						"chinese": "严酷的雪原，黑暗笼罩了冰封的大地。",
						"french": "Sur la rude étendue enneigée, l'obscurité s'abattit sur la terre gelée.",
						"spanish": "Sobre el duro campo de nieve, la oscuridad se cernió sobre la tierra helada.",
						"vietnamese": "Trên cánh đồng tuyết khắc nghiệt, bóng tối bao trùm vùng đất đóng băng.",
						"thai": "บนทุ่งหิมะอันโหดร้าย ความมืดมิดได้ปกคลุมทั่วแผ่นดินที่เยือกแข็ง",
						"hindi": "कठोर हिमक्षेत्र पर, बर्फीली भूमि पर अँधेरा छा गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "으, 뼈까지 시리네.",
						"english": "Ugh, chills to the bone.",
						"japanese": "うぅ、骨まで凍える。",
						"chinese": "呃，冷到骨子里了。",
						"french": "Ugh, ça glace jusqu'aux os.",
						"spanish": "Uf, me congela hasta los huesos.",
						"vietnamese": "Ư, lạnh thấu xương.",
						"thai": "อึ๋ย, หนาวเข้ากระดูกเลย",
						"hindi": "उह, हड्डियाँ तक काँप रही हैं।"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…여기, 묘하게 조용하네요.",
						"english": "...It's strangely quiet here.",
						"japanese": "…ここ、妙に静かですね。",
						"chinese": "……这里，异常安静呢。",
						"french": "...C'est étrangement calme ici.",
						"spanish": "...Aquí, está extrañamente silencioso.",
						"vietnamese": "...Ở đây, lạ thay thật yên tĩnh.",
						"thai": "...ที่นี่, เงียบแปลกๆ นะคะ",
						"hindi": "...यहाँ, अजीब सी शांति है।"
					}
				},
				{
					"content": {
						"korean": "마치 신성한 침묵이 깨지기 전의 고요함 같아요.",
						"english": "Like the stillness before a sacred silence is broken.",
						"japanese": "まるで神聖な沈黙が破られる前の静けさのようです。",
						"chinese": "就像神圣的寂静被打破之前的宁静。",
						"french": "C'est comme le calme avant que le silence sacré ne soit brisé.",
						"spanish": "Es como la calma antes de que se rompa un silencio sagrado.",
						"vietnamese": "Giống như sự tĩnh lặng trước khi sự im lặng thiêng liêng bị phá vỡ.",
						"thai": "เหมือนกับความเงียบสงบก่อนที่ความเงียบงันอันศักดิ์สิทธิ์จะถูกทำลาย",
						"hindi": "मानो पवित्र मौन टूटने से पहले की शांति हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "무슨 소리야, 에이라?",
						"english": "What are you talking about, Eira?",
						"japanese": "何を言ってるんだ、エイラ？",
						"chinese": "你在说什么，艾拉？",
						"french": "De quoi parles-tu, Eira ?",
						"spanish": "¿De qué estás hablando, Eira?",
						"vietnamese": "Em đang nói gì vậy, Eira?",
						"thai": "เธอพูดอะไรน่ะ, เอร่า?",
						"hindi": "क्या कह रही हो, एइरा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "고대 유적 깊은 곳에서… 뭔가 느껴져요.",
						"english": "Deep within the ancient ruins... I feel something.",
						"japanese": "古代遺跡の奥深くから…何かを感じます。",
						"chinese": "古老遗迹深处……我感觉到了什么。",
						"french": "Au plus profond des ruines antiques... Je ressens quelque chose.",
						"spanish": "En lo profundo de las ruinas antiguas... Siento algo.",
						"vietnamese": "Sâu bên trong khu di tích cổ... tôi cảm thấy có điều gì đó.",
						"thai": "ลึกเข้าไปในซากปรักหักพังโบราณ... ฉันรู้สึกได้ถึงบางสิ่ง",
						"hindi": "प्राचीन खंडहरों की गहराई में... मुझे कुछ महसूस हो रहा है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "희미하지만, 일정한 진동이… 마치 죽어가는 심장의 박동처럼.",
						"english": "A faint, yet steady vibration... like a dying heart's beat.",
						"japanese": "微かだが、一定の振動が…まるで死にゆく心臓の鼓動のように。",
						"chinese": "微弱而稳定的震动……仿佛垂死心脏的跳动。",
						"french": "Une faible, mais constante vibration... comme le battement d'un cœur mourant.",
						"spanish": "Una vibración débil, pero constante... como el latido de un corazón moribundo.",
						"vietnamese": "Một rung động yếu ớt nhưng đều đặn... như nhịp đập của trái tim hấp hối.",
						"thai": "การสั่นสะเทือนที่แผ่วเบาแต่สม่ำเสมอ... ราวกับจังหวะของหัวใจที่กำลังจะตาย",
						"hindi": "एक हल्की, फिर भी स्थिर कंपन... जैसे मरते हुए दिल की धड़कन।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "진동? 난 아무것도 못 느끼겠는데.",
						"english": "Vibration? I don't feel anything.",
						"japanese": "振動？何も感じないけど。",
						"chinese": "震动？我什么都没感觉到。",
						"french": "Vibration ? Je ne ressens rien.",
						"spanish": "Vibración? No siento nada.",
						"vietnamese": "Rung động? Tôi không cảm thấy gì cả.",
						"thai": "การสั่นสะเทือน? ฉันไม่รู้สึกอะไรเลยนะ",
						"hindi": "कंपन? मुझे कुछ भी महसूस नहीं हो रहा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아마, 곧 알게 될 거예요. 이건 전조에 불과하니까.",
						"english": "You'll know soon enough. This is merely a prelude.",
						"japanese": "きっと、すぐにわかるでしょう。これは序章に過ぎませんから。",
						"chinese": "你很快就会知道的。这只是个前奏。",
						"french": "Vous le saurez assez tôt. Ce n'est qu'un prélude.",
						"spanish": "Pronto lo sabrás. Esto es solo un presagio.",
						"vietnamese": "Bạn sẽ sớm biết thôi. Đây chỉ là khúc dạo đầu.",
						"thai": "คุณจะรู้ในไม่ช้า นี่เป็นเพียงลางบอกเหตุเท่านั้น",
						"hindi": "आपको जल्द ही पता चल जाएगा। यह केवल एक प्रस्तावना है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "전조라니… 뭘 말하는 거야?",
						"english": "A prelude...? What are you talking about?",
						"japanese": "前兆だって…何を言ってるんだ？",
						"chinese": "前奏……你在说什么？",
						"french": "Un prélude... ? De quoi parles-tu ?",
						"spanish": "¿Un presagio...? ¿De qué estás hablando?",
						"vietnamese": "Khúc dạo đầu...? Bạn đang nói về cái gì vậy?",
						"thai": "ลางบอกเหตุ...? คุณกำลังพูดถึงอะไร?",
						"hindi": "एक प्रस्तावना...? तुम क्या बात कर रहे हो?"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "갑자기 주변의 얼음이 살아있는 듯 움직이기 시작했다.",
						"english": "Suddenly, the ice around us began to move as if alive.",
						"japanese": "突然、周囲の氷が生きているかのように動き始めた。",
						"chinese": "突然，周围的冰块开始像活物一样移动。",
						"french": "Soudain, la glace autour de nous a commencé à bouger comme si elle était vivante.",
						"spanish": "De repente, el hielo a nuestro alrededor comenzó a moverse como si estuviera vivo.",
						"vietnamese": "Đột nhiên, băng xung quanh chúng ta bắt đầu chuyển động như thể có sự sống.",
						"thai": "ทันใดนั้น น้ำแข็งรอบตัวก็เริ่มเคลื่อนไหวราวกับมีชีวิต",
						"hindi": "अचानक, हमारे चारों ओर की बर्फ जीवित की तरह हिलने लगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "뭐야! 길이 막혔잖아!",
						"english": "What?! The path's blocked!",
						"japanese": "なんだ！道が塞がれてるじゃないか！",
						"chinese": "什么？！路被堵住了！",
						"french": "Quoi ?! Le chemin est bloqué !",
						"spanish": "¡¿Qué?! ¡El camino está bloqueado!",
						"vietnamese": "Cái gì?! Đường bị chặn rồi!",
						"thai": "อะไรนะ! ทางถูกปิดแล้ว!",
						"hindi": "क्या?! रास्ता बंद हो गया!"
					}
				},
				{
					"content": {
						"korean": "신성한 침묵을 깨트린 대가….",
						"english": "The price for breaking the sacred silence...",
						"japanese": "聖なる沈黙を破った代償…",
						"chinese": "打破神圣沉默的代价……",
						"french": "Le prix à payer pour avoir brisé le silence sacré...",
						"spanish": "El precio por romper el silencio sagrado...",
						"vietnamese": "Cái giá phải trả cho việc phá vỡ sự im lặng thiêng liêng...",
						"thai": "ค่าตอบแทนของการทำลายความเงียบศักดิ์สิทธิ์...",
						"hindi": "पवित्र चुप्पी तोड़ने की कीमत..."
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "카운트다운은 이미 시작되었어요.",
						"english": "The countdown has already begun.",
						"japanese": "カウントダウンはもう始まっています。",
						"chinese": "倒计时已经开始了。",
						"french": "Le compte à rebours a déjà commencé.",
						"spanish": "La cuenta regresiva ya ha comenzado.",
						"vietnamese": "Đếm ngược đã bắt đầu rồi.",
						"thai": "การนับถอยหลังได้เริ่มต้นขึ้นแล้ว",
						"hindi": "उलटी गिनती पहले ही शुरू हो चुकी है।"
					}
				},
				{
					"content": {
						"korean": "무슨 카운트다운인데!",
						"english": "What countdown?!",
						"japanese": "何のカウントダウンなんだ！",
						"chinese": "什么倒计时？！",
						"french": "Quel compte à rebours ?!",
						"spanish": "¡¿Qué cuenta regresiva?!",
						"vietnamese": "Đếm ngược cái gì chứ?!",
						"thai": "นับถอยหลังอะไรกัน!",
						"hindi": "कौन सी उलटी गिनती?!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
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
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "점점 더 격렬해지는 얼음의 움직임.",
						"english": "The ice's movement grows increasingly violent.",
						"japanese": "ますます激しくなる氷の動き。",
						"chinese": "冰块的运动变得越来越剧烈。",
						"french": "Le mouvement de la glace devient de plus en plus violent.",
						"spanish": "El movimiento del hielo se vuelve cada vez más violento.",
						"vietnamese": "Chuyển động của băng ngày càng dữ dội.",
						"thai": "การเคลื่อนไหวของน้ำแข็งรุนแรงขึ้นเรื่อยๆ",
						"hindi": "बर्फ की हलचल और भी उग्र होती जा रही है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "되돌릴 수 없어요. 이 재앙은 시작되었어요.",
						"english": "It's irreversible. This calamity has begun.",
						"japanese": "もう戻れない。この災厄は始まった。",
						"chinese": "无法挽回了。这场灾难已经开始。",
						"french": "C'est irréversible. Cette calamité a commencé.",
						"spanish": "Es irreversible. Esta calamidad ha comenzado.",
						"vietnamese": "Không thể quay lại được. Thảm họa này đã bắt đầu rồi.",
						"thai": "มันย้อนกลับไม่ได้แล้ว หายนะนี้ได้เริ่มต้นขึ้นแล้ว",
						"hindi": "इसे वापस नहीं लिया जा सकता। यह आपदा शुरू हो गई है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 방법은 없어?",
						"english": "Is there no way to stop it?",
						"japanese": "止める方法はないのか？",
						"chinese": "没有办法阻止吗？",
						"french": "N'y a-t-il aucun moyen de l'arrêter ?",
						"spanish": "¿No hay forma de detenerlo?",
						"vietnamese": "Không có cách nào dừng nó lại sao?",
						"thai": "ไม่มีทางหยุดมันได้เลยหรือ?",
						"hindi": "इसे रोकने का कोई तरीका नहीं है क्या?"
					}
				},
				{
					"content": {
						"korean": "방법을 찾아야만 해요. 그렇지 않으면….",
						"english": "We must find a way. Otherwise...",
						"japanese": "方法を見つけなければ。さもなくば…。",
						"chinese": "我们必须找到办法。否则……",
						"french": "Nous devons trouver un moyen. Sinon...",
						"spanish": "Debemos encontrar una manera. De lo contrario...",
						"vietnamese": "Chúng ta phải tìm cách. Nếu không thì...",
						"thai": "เราต้องหาวิธี ไม่อย่างนั้น...",
						"hindi": "हमें एक रास्ता खोजना होगा। वरना..."
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 얼음이 모든 것을 집어삼킬 거예요.",
						"english": "This ice will devour everything.",
						"japanese": "この氷がすべてを飲み込むだろう。",
						"chinese": "这冰霜会吞噬一切。",
						"french": "Cette glace dévorera tout.",
						"spanish": "Este hielo lo devorará todo.",
						"vietnamese": "Lớp băng này sẽ nuốt chửng mọi thứ.",
						"thai": "น้ำแข็งนี้จะกลืนกินทุกสิ่ง",
						"hindi": "यह बर्फ सब कुछ निगल जाएगी।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 얼음이 모든 것을 덮쳤다.",
						"english": "Cold ice covered everything.",
						"japanese": "冷たい氷がすべてを覆い尽くした。",
						"chinese": "冰冷的寒霜覆盖了一切。",
						"french": "La glace froide a tout recouvert.",
						"spanish": "El hielo frío cubrió todo.",
						"vietnamese": "Băng giá lạnh lẽo đã bao trùm vạn vật.",
						"thai": "น้ำแข็งอันเยือกเย็นได้ปกคลุมทุกสิ่ง",
						"hindi": "ठंडी बर्फ ने सब कुछ ढक लिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들. 너희는 이 재앙을 막을 수 없다.",
						"english": "Fools. You cannot stop this calamity.",
						"japanese": "愚か者ども。お前たちにこの災厄は止められない。",
						"chinese": "愚蠢的家伙们。你们阻止不了这场灾祸。",
						"french": "Fous. Vous ne pouvez pas arrêter cette calamité.",
						"spanish": "Necios. No podéis detener esta calamidad.",
						"vietnamese": "Lũ ngu ngốc. Các ngươi không thể ngăn chặn thảm họa này đâu.",
						"thai": "คนโง่เง่า พวกเจ้าไม่อาจหยุดยั้งภัยพิบัตินี้ได้",
						"hindi": "मूर्खों। तुम इस आपदा को नहीं रोक सकते।"
					}
				},
				{
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it... It's not over yet.",
						"japanese": "くそっ…まだ終わってない。",
						"chinese": "该死……还没结束。",
						"french": "Mince... Ce n'est pas encore fini.",
						"spanish": "Maldita sea... Todavía no ha terminado.",
						"vietnamese": "Khốn kiếp... Vẫn chưa kết thúc đâu.",
						"thai": "บัดซบ... ยังไม่จบแค่นี้หรอก",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "이것은… 시작에 불과하다. 진정한 공포는… 이제부터다.",
						"english": "This is... merely the beginning. True terror... starts now.",
						"japanese": "これは…始まりに過ぎない。真の恐怖は…これからだ。",
						"chinese": "这……仅仅是开始。真正的恐惧……才刚刚到来。",
						"french": "Ce n'est… qu'un début. La vraie terreur… commence maintenant.",
						"spanish": "Esto es... meramente el principio. El verdadero terror... comienza ahora.",
						"vietnamese": "Đây… chỉ mới là khởi đầu. Nỗi kinh hoàng thật sự… bây giờ mới bắt đầu.",
						"thai": "นี่เป็น... แค่จุดเริ่มต้น ความน่ากลัวที่แท้จริง... กำลังจะมาถึง",
						"hindi": "यह तो... बस शुरुआत है। असली आतंक... अब शुरू होगा।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 너 말고 또 있다는 거야?",
						"english": "What do you mean? Is there someone else besides you?",
						"japanese": "どういうことだ？お前以外にもいるのか？",
						"chinese": "什么意思？除了你还有别人吗？",
						"french": "Qu'est-ce que tu veux dire ? Il y a quelqu'un d'autre que toi ?",
						"spanish": "¿Qué quieres decir? ¿Hay alguien más aparte de ti?",
						"vietnamese": "Ngươi nói gì? Ngoài ngươi ra còn có kẻ khác sao?",
						"thai": "หมายความว่าไง? มีคนอื่นนอกจากเจ้ารึ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या तुम्हारे अलावा कोई और भी है?"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…잊힌 역사가 움직이기 시작했어요.",
						"english": "...The forgotten history has begun to stir.",
						"japanese": "...忘れられた歴史が動き始めました。",
						"chinese": "...被遗忘的历史开始蠢蠢欲动了。",
						"french": "...L'histoire oubliée a commencé à bouger.",
						"spanish": "...La historia olvidada ha comenzado a moverse.",
						"vietnamese": "...Lịch sử bị lãng quên đã bắt đầu lay động.",
						"thai": "...ประวัติศาสตร์ที่ถูกลืมได้เริ่มเคลื่อนไหวแล้ว",
						"hindi": "...भूला हुआ इतिहास हिलना शुरू हो गया है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "영원한 겨울의 진실을 파헤칠 여정은 이제 막 시작되었다.",
						"english": "The journey to unearth the truth of the eternal winter has just begun.",
						"japanese": "永遠の冬の真実を暴く旅は、今始まったばかりだ。",
						"chinese": "揭露永恒之冬真相的旅程才刚刚开始。",
						"french": "Le voyage pour déterrer la vérité de l'hiver éternel ne fait que commencer.",
						"spanish": "El viaje para desenterrar la verdad del invierno eterno acaba de empezar.",
						"vietnamese": "Hành trình vén màn sự thật về mùa đông vĩnh cửu chỉ mới bắt đầu.",
						"thai": "การเดินทางเพื่อเปิดเผยความจริงของฤดูหนาวนิรันดร์เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "शाश्वत शीत ऋतु के सत्य को उजागर करने की यात्रा अभी शुरू हुई है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 얼음 동굴에서 정체 모를 그림자가 나타났다.",
						"english": "An unknown shadow emerged from the colossal ice cave.",
						"japanese": "巨大な氷の洞窟から、正体不明の影が現れた。",
						"chinese": "一个不明身份的影子从巨大的冰窟中现身。",
						"french": "Une ombre inconnue a émergé de la gigantesque caverne de glace.",
						"spanish": "Una sombra desconocida emergió de la colosal cueva de hielo.",
						"vietnamese": "Một bóng đen không rõ danh tính xuất hiện từ hang băng khổng lồ.",
						"thai": "เงาลึกลับปรากฏขึ้นจากถ้ำน้ำแข็งขนาดใหญ่",
						"hindi": "एक विशाल बर्फीली गुफा से एक अज्ञात परछाई उभरी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "침범자들이여… 감히 이곳의 평화를 깨트렸는가.",
						"english": "Intruders... How dare you disturb this place's peace?",
						"japanese": "侵入者たちよ…よくもここの平和を乱したな。",
						"chinese": "入侵者……竟敢打破这里的平静。",
						"french": "Intrus… Comment osez-vous troubler la paix de ce lieu ?",
						"spanish": "Invasores... ¿Cómo os atrevéis a perturbar la paz de este lugar?",
						"vietnamese": "Những kẻ xâm nhập… Sao dám phá vỡ sự yên bình nơi đây?",
						"thai": "ผู้บุกรุก... กล้าดียังไงมาทำลายความสงบของที่นี่?",
						"hindi": "घुसपैठियो... तुम्हारी हिम्मत कैसे हुई यहाँ की शांति भंग करने की?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 거야?",
						"english": "Was it... all your doing?",
						"japanese": "お前が…この全てを企んだのか？",
						"chinese": "是你……策划了这一切？",
						"french": "C'est... ton œuvre ?",
						"spanish": "¿Fuiste... tú quien orquestó todo esto?",
						"vietnamese": "Là ngươi… đã sắp đặt tất cả chuyện này sao?",
						"thai": "ทั้งหมดนี้... เป็นฝีมือของเจ้าหรือ?",
						"hindi": "क्या यह सब... तुम्हारी करतूत है?"
					}
				},
				{
					"content": {
						"korean": "너희는 감히… 만져서는 안 될 것을 건드렸다.",
						"english": "You dared... touch what should not be touched.",
						"japanese": "お前たちはよくも…触れてはならぬものに触れたな。",
						"chinese": "你们竟敢……触碰了不该触碰之物。",
						"french": "Vous avez osé… toucher ce qui ne devait pas l'être.",
						"spanish": "Os atrevisteis... a tocar lo intocable.",
						"vietnamese": "Các ngươi dám… chạm vào thứ không nên chạm.",
						"thai": "พวกเจ้ากล้า... แตะต้องสิ่งที่มิควรแตะต้อง",
						"hindi": "तुमने हिम्मत की... उस चीज़ को छूने की जिसे नहीं छूना चाहिए था।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
