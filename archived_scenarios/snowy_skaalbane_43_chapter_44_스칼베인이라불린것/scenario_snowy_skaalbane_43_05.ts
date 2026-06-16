export const scenario_snowy_skaalbane_43_05 = {
	"scenario_id": "snowy_skaalbane_43_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
		}
	},
	"boss": {
		"pool_id": "pool_108"
	},
	"prologue": {
		"korean": [
			"가장 깊은 룬 비석. 수천 년의 절규가 새겨진 곳.",
			"에이라는 마침내 그 이름을 알아냈다.",
			"그러나 그 이름은 단순한 글자가 아니었다.",
			"그것은 죽음을 부르는 주문이자, 살아있는 존재 그 자체였다.",
			"그리고 모든 것은, 그 이름에 응답했다."
		],
		"english": [
			"The deepest runestone. Where millennia of screams are etched.",
			"Aira finally learned its name.",
			"But the name was not mere letters.",
			"It was a spell that summoned death, and a living entity itself.",
			"And everything responded to that name."
		],
		"japanese": [
			"最も深いルーン碑。数千年の絶叫が刻まれし場所。",
			"アイラはついにその名を知った。",
			"しかし、その名は単なる文字ではなかった。",
			"それは死を呼ぶ呪文であり、生ける存在そのものだった。",
			"そして、全てがその名に応じた。"
		],
		"chinese": [
			"最深的符文石碑。刻有千年绝叫之地。",
			"艾拉终于知道了它的名字。",
			"然而，那个名字并非只是简单的文字。",
			"它是一个召唤死亡的咒语，也是一个活生生的存在。",
			"而一切都回应了那个名字。"
		],
		"french": [
			"La plus profonde des stèles runiques. Là où sont gravés des millénaires de cris.",
			"Aira découvrit enfin son nom.",
			"Cependant, ce nom n'était pas de simples lettres.",
			"C'était un sort qui invoquait la mort, et une entité vivante elle-même.",
			"Et tout répondit à ce nom."
		],
		"spanish": [
			"La runa más profunda. Donde miles de años de lamentos están grabados.",
			"Aira finalmente supo su nombre.",
			"Pero el nombre no eran meras letras.",
			"Era un hechizo que invocaba la muerte, y una entidad viviente en sí misma.",
			"Y todo respondió a ese nombre."
		],
		"vietnamese": [
			"Bia đá rune sâu nhất. Nơi hàng ngàn năm tiếng kêu gào được khắc ghi.",
			"Aira cuối cùng đã biết tên nó.",
			"Nhưng cái tên đó không chỉ là những chữ cái đơn thuần.",
			"Đó là một câu thần chú gọi chết chóc, và cũng là một thực thể sống.",
			"Và mọi thứ đã đáp lại cái tên đó."
		],
		"thai": [
			"ศิลาจารึกรูนที่ลึกที่สุด สถานที่ซึ่งเสียงกรีดร้องนับพันปีถูกสลักไว้",
			"ในที่สุดไอราก็รู้ชื่อของมัน",
			"แต่ชื่อนั้นไม่ใช่แค่ตัวอักษรธรรมดา",
			"มันคือคาถาที่เรียกความตาย และเป็นสิ่งมีชีวิตในตัวเอง",
			"และทุกสิ่งตอบสนองต่อชื่อนั้น"
		],
		"hindi": [
			"सबसे गहरा रुन पत्‍थर। जहाँ सहस्राब्दियों की चीखें उत्कीर्ण हैं।",
			"ऐरा ने अंततः उसका नाम जान लिया।",
			"परंतु वह नाम मात्र अक्षर नहीं था।",
			"वह मृत्यु को बुलाने वाला एक जादू था, और एक जीवित इकाई स्वयं।",
			"और सब कुछ उस नाम का जवाब दिया।"
		]
	},
	"rooms": [
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "frost",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "결국… 너희도… 이름 없는 절규가 될 뿐.",
						"english": "In the end… you too… will merely become nameless screams.",
						"japanese": "結局…お前たちも…名もなき絶叫になるだけだ。",
						"chinese": "最终…你们也…只会成为无名的哀嚎。",
						"french": "Au final… vous aussi… ne serez que des cris anonymes.",
						"spanish": "Al final… vosotros también… solo seréis gritos sin nombre.",
						"vietnamese": "Cuối cùng… các ngươi cũng… sẽ chỉ trở thành những tiếng kêu vô danh thôi.",
						"thai": "ในที่สุด… พวกเจ้าก็… จะเป็นแค่เสียงกรีดร้องไร้นามเท่านั้น.",
						"hindi": "अंत में… तुम भी… केवल गुमनाम चीखें बन जाओगे।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "…It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Chưa kết thúc đâu.",
						"thai": "…ยังไม่จบ.",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가… 이 한기를…!",
						"english": "We… must withstand this chill…!",
						"japanese": "私たちが…この冷気を…！",
						"chinese": "我们…要对抗这股寒意…！",
						"french": "Nous… vaincrons ce froid…!",
						"spanish": "¡Nosotros… venceremos este frío…!",
						"vietnamese": "Chúng ta… sẽ vượt qua cái lạnh này…!",
						"thai": "พวกเรา… จะต้านทานความหนาวนี้…!",
						"hindi": "हम… इस ठंड का सामना करेंगे…!"
					},
					"emotion": "angry",
					"speaker": "frost"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"speaker": "frost",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "비석의 마지막 글자… Skaalbane.",
						"english": "The last letter on the monument... Skaalbane.",
						"japanese": "碑石の最後の文字… スカールベイン。",
						"chinese": "石碑上的最后一个字……斯卡尔班。",
						"french": "La dernière lettre sur le monument... Skaalbane.",
						"spanish": "La última letra en el monumento... Skaalbane.",
						"vietnamese": "Chữ cuối cùng trên bia mộ... Skaalbane.",
						"thai": "อักษรสุดท้ายบนศิลาจารึก... สกาลเบน",
						"hindi": "शिलालेख पर अंतिम अक्षर... स्कालबेन।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "부르지 마! 에이라! 한기가… 더 짙어져!",
						"english": "Don't call me! Aira! The chill... it's growing stronger!",
						"japanese": "呼ぶな！エイラ！冷気が…さらに濃くなる！",
						"chinese": "别叫我！艾拉！寒气……更浓了！",
						"french": "Ne m'appelle pas ! Aira ! Le froid... s'épaissit !",
						"spanish": "¡No me llames! ¡Aira! El frío... se hace más denso!",
						"vietnamese": "Đừng gọi tôi! Aira! Cái lạnh... càng lúc càng dày đặc!",
						"thai": "อย่าเรียกข้า! ไอรา! ความหนาวเย็น... มันเข้มข้นขึ้น!",
						"hindi": "मुझे मत बुलाओ! ऐरा! ठंडक... और गहरी होती जा रही है!"
					},
					"emotion": "sad",
					"speaker": "frost"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탑 전체가 부름에 응답하듯 진동했다. 거대한 형체가 서서히 모습을 드러낸다.",
						"english": "The entire tower vibrated as if responding to the call. A colossal figure slowly emerged.",
						"japanese": "塔全体が呼び声に応えるように振動した。巨大な姿がゆっくりと現れる。",
						"chinese": "整座塔仿佛回应着召唤般颤抖。一个巨大的身影缓缓显现。",
						"french": "La tour entière vibra comme pour répondre à l'appel. Une forme colossale émergea lentement.",
						"spanish": "Toda la torre vibró como respondiendo al llamado. Una figura colosal emergió lentamente.",
						"vietnamese": "Toàn bộ ngọn tháp rung chuyển như đáp lại tiếng gọi. Một hình thù khổng lồ từ từ xuất hiện.",
						"thai": "หอคอยทั้งหลังสั่นสะเทือนราวกับตอบรับการเรียกขาน ร่างมหึมาปรากฏขึ้นช้าๆ",
						"hindi": "पूरा टावर पुकार के जवाब में कांप उठा। एक विशाल आकृति धीरे-धीरे सामने आई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "…그게 내 이름이다….",
						"english": "...That is my name...",
						"japanese": "…それが、私の名だ…。",
						"chinese": "……那就是我的名字……",
						"french": "...C'est mon nom...",
						"spanish": "...Ese es mi nombre...",
						"vietnamese": "...Đó là tên của ta...",
						"thai": "...นั่นคือชื่อของข้า...",
						"hindi": "...वह मेरा नाम है..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희가 불러주니… 더 또렷해지는구나….",
						"english": "You call me... and I become clearer...",
						"japanese": "お前たちが呼ぶから…さらに鮮明になるな…。",
						"chinese": "你们呼唤我……我变得更清晰了……",
						"french": "Vous m'appelez... et je deviens plus clair...",
						"spanish": "Me llamáis... y me vuelvo más nítido...",
						"vietnamese": "Các ngươi gọi ta... và ta trở nên rõ ràng hơn...",
						"thai": "พวกเจ้าเรียกข้า... ข้าจึงชัดเจนขึ้น...",
						"hindi": "तुम मुझे बुलाते हो... और मैं और स्पष्ट हो जाता हूँ..."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…죽음을 먹고 자란 정신체.",
						"english": "...A spirit grown on death.",
						"japanese": "…死を食らって育った精神体。",
						"chinese": "……一个以死亡为食的精神体。",
						"french": "...Un esprit nourri par la mort.",
						"spanish": "...Un ser espiritual alimentado por la muerte.",
						"vietnamese": "...Một linh thể lớn lên từ cái chết.",
						"thai": "...วิญญาณที่เติบโตด้วยความตาย",
						"hindi": "...मृत्यु से पोषित एक आत्मिक सत्ता।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "여기서 끝내야 해! 더 이상은…!",
						"english": "It must end here! No more...!",
						"japanese": "ここで終わらせなければ！これ以上は…！",
						"chinese": "必须在这里结束！不能再……！",
						"french": "Il faut que ça s'arrête ici ! Plus un pas... !",
						"spanish": "¡Debe terminar aquí! ¡No más...!",
						"vietnamese": "Phải kết thúc ở đây! Không thể hơn được nữa...!",
						"thai": "ต้องจบลงตรงนี้! มากกว่านี้ไม่ได้แล้ว...!",
						"hindi": "इसे यहीं खत्म करना होगा! और नहीं...!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "frost"
				}
			],
			"win_dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "frost",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크크… 이 정도로… 끝날 리가….",
						"english": "Heh heh... This won't be the end... not by a long shot...",
						"japanese": "クク…こんなもので…終わるわけが…。",
						"chinese": "呵呵……就这样……怎么可能结束……",
						"french": "Hé hé... Ça ne finira pas... comme ça...",
						"spanish": "Je je... Esto no acabará... así...",
						"vietnamese": "Khà khà... Chỉ thế này thôi... sao có thể kết thúc được...",
						"thai": "ฮึ่มๆ... แค่นี้... ไม่มีทางจบลงหรอก...",
						"hindi": "हा हा... बस इतना ही... खत्म नहीं हो सकता..."
					},
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "이름은… 영원히….",
						"english": "The name... forever...",
						"japanese": "名は…永遠に…。",
						"chinese": "名字……永恒……",
						"french": "Le nom... pour toujours...",
						"spanish": "El nombre... para siempre...",
						"vietnamese": "Cái tên... mãi mãi...",
						"thai": "ชื่อนั้น... ชั่วนิรันดร์...",
						"hindi": "नाम... हमेशा के लिए..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직도 살아있는 건가.",
						"english": "...Still alive, are you?",
						"japanese": "…まだ生きているのか。",
						"chinese": "……还活着吗？",
						"french": "...Vous êtes encore en vie ?",
						"spanish": "...¿Todavía estás vivo?",
						"vietnamese": "...Vẫn còn sống sao.",
						"thai": "...ยังคงมีชีวิตอยู่หรือเปล่า?",
						"hindi": "...क्या तुम अभी भी जिंदा हो?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "frost",
					"content": {
						"korean": "아니. 잠시… 잠든 것뿐이야. 뿌리는… 더 깊어.",
						"english": "No. I merely… slept. The roots… run deeper.",
						"japanese": "いや。ただ…眠っていただけだ。根は…もっと深い。",
						"chinese": "不。我只是…小憩片刻。根…扎得更深。",
						"french": "Non. Je… dormais juste. Les racines… sont plus profondes.",
						"spanish": "No. Solo… dormía. Las raíces… son más profundas.",
						"vietnamese": "Không. Ta chỉ… ngủ thiếp đi thôi. Rễ cây… còn sâu hơn nữa.",
						"thai": "ไม่หรอก. ข้าแค่… หลับไปชั่วขณะ. ราก… หยั่งลึกกว่านั้น.",
						"hindi": "नहीं। मैं बस… सो गया था। जड़ें… और गहरी हैं。"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "Skaalbane는 쓰러졌다. 그러나 혹독한 한기는 여전했다.",
						"english": "Skaalbane fell. Yet, the harsh chill remained.",
						"japanese": "スカルベインは倒れた。しかし、その厳しい冷気は残っていた。",
						"chinese": "斯卡尔班倒下了。然而，严酷的寒意依旧。",
						"french": "Skaalbane est tombé. Pourtant, le froid glacial persistait.",
						"spanish": "Skaalbane cayó. Sin embargo, el frío implacable permaneció.",
						"vietnamese": "Skaalbane đã ngã xuống. Nhưng cái lạnh khắc nghiệt vẫn còn đó.",
						"thai": "สคาลเบนล้มลงแล้ว. ทว่า, ความหนาวเหน็บอันโหดร้ายยังคงอยู่.",
						"hindi": "स्कालबेन गिर गया। फिर भी, कठोर ठंड बनी रही।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "이름은 탑에 새겨져, 다른 이름 없는 절규들을 기다리고 있었다.",
						"english": "The name was carved into the tower, awaiting other nameless screams.",
						"japanese": "その名は塔に刻まれ、他の名もなき絶叫を待っていた。",
						"chinese": "名字刻在了塔上，等待着其他无名的哀嚎。",
						"french": "Le nom était gravé dans la tour, attendant d'autres cris anonymes.",
						"spanish": "El nombre fue grabado en la torre, esperando otros gritos sin nombre.",
						"vietnamese": "Tên đã được khắc vào tháp, chờ đợi những tiếng kêu vô danh khác.",
						"thai": "ชื่อถูกสลักไว้บนหอคอย, รอคอยเสียงกรีดร้องไร้นามอื่นๆ.",
						"hindi": "नाम टावर पर खुदा हुआ था, अन्य गुमनाम चीखों का इंतजार कर रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"Skaalbane는 사라졌지만, 그 이름은 잔해탑 깊숙이 남았다.",
			"죽음을 먹고 자란 정신체의 절규는, 이제 침묵했다.",
			"혹독한 한기는 여전했지만, 그 속에서 작은 온기가 느껴졌다.",
			"구원이었을까. 혹은, 또 다른 침해의 시작이었을까.",
			"알 수 없었다. 다만, 이름은 영원히 남을 것이다."
		],
		"english": [
			"Skaalbane vanished, but its name remained deep within the Tower of Ruin.",
			"The screams of the entity, nurtured by death, were now silent.",
			"The biting cold remained, yet a small warmth was felt within it.",
			"Was it salvation? Or the beginning of another transgression?",
			"It was unknown. Only, the name would remain forever."
		],
		"japanese": [
			"スカルベインは消えたが、その名は廃墟の塔の奥深くに残った。",
			"死を糧に育った精神体の絶叫は、今や沈黙した。",
			"苛酷な寒気は依然として残っていたが、その中に小さな温もりが感じられた。",
			"それは救済だったのだろうか。それとも、また別の侵犯の始まりだったのだろうか。",
			"知る由もなかった。ただ、その名は永遠に残るだろう。"
		],
		"chinese": [
			"斯卡尔班消失了，但它的名字仍留在废墟之塔深处。",
			"以死亡为食而壮大的灵体的尖叫，如今已然沉寂。",
			"严酷的寒意依旧，但在其中却能感受到一丝温暖。",
			"是救赎吗？亦或是，另一次侵犯的开始？",
			"无人知晓。只是，那个名字将永远留存。"
		],
		"french": [
			"Skaalbane disparut, mais son nom resta enfoui au plus profond de la Tour des Ruines.",
			"Les cris de l'entité, nourrie par la mort, étaient désormais silencieux.",
			"Le froid mordant persistait, mais une petite chaleur s'y faisait sentir.",
			"Était-ce le salut ? Ou le début d'une autre transgression ?",
			"On ne le savait pas. Seulement, le nom resterait à jamais."
		],
		"spanish": [
			"Skaalbane desapareció, pero su nombre permaneció en lo profundo de la Torre de la Ruina.",
			"Los gritos de la entidad, alimentada por la muerte, ahora estaban en silencio.",
			"El frío intenso persistía, pero una pequeña calidez se sentía dentro de él.",
			"¿Fue salvación? ¿O el comienzo de otra transgresión?",
			"Era desconocido. Solo que el nombre permanecería para siempre."
		],
		"vietnamese": [
			"Skaalbane biến mất, nhưng tên nó vẫn còn sâu trong Tháp Hoang Tàn.",
			"Tiếng kêu gào của thực thể được nuôi dưỡng bởi cái chết, giờ đã im lặng.",
			"Cái lạnh khắc nghiệt vẫn còn đó, nhưng một chút ấm áp đã được cảm nhận trong đó.",
			"Đó có phải là sự cứu rỗi không? Hay là sự khởi đầu của một sự xâm phạm khác?",
			"Không thể biết được. Chỉ là, cái tên sẽ còn mãi mãi."
		],
		"thai": [
			"สกาลเบนหายไป แต่ชื่อของมันยังคงอยู่ในหอคอยแห่งซากปรักหักพัง",
			"เสียงกรีดร้องของสิ่งมีชีวิตที่เติบโตด้วยความตาย บัดนี้เงียบลงแล้ว",
			"ความหนาวเหน็บยังคงอยู่ แต่สัมผัสได้ถึงความอบอุ่นเล็กน้อยภายในนั้น",
			"มันคือความรอดหรือเปล่า หรือเป็นจุดเริ่มต้นของการรุกล้ำอื่น",
			"ไม่เป็นที่ทราบแน่ชัด เพียงแต่ชื่อนั้นจะคงอยู่ตลอดไป"
		],
		"hindi": [
			"स्कॉलबेन गायब हो गया, लेकिन उसका नाम खंडहर टावर की गहराई में बना रहा।",
			"मृत्यु से पोषित इकाई की चीखें, अब खामोश हो गईं।",
			"तीव्र ठंड अभी भी थी, फिर भी उसमें थोड़ी गर्माहट महसूस हुई।",
			"क्या यह मोक्ष था? या किसी अन्य अतिक्रमण की शुरुआत?",
			"यह अज्ञात था। बस, नाम हमेशा रहेगा।"
		]
	}
} as const;
