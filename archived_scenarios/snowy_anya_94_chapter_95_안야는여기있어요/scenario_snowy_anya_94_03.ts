export const scenario_snowy_anya_94_03 = {
	"scenario_id": "snowy_anya_94_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"멈춰선 시간, 얼음 속 작은 손.",
			"그 손이, 천천히 바깥을 향해 펴진다.",
			"사라져가는 가족을 향한 마지막 몸짓.",
			"인카는 알았다. 이 곁을, 떠나지 않으리라."
		],
		"english": [
			"Stopped time, a small hand in the ice.",
			"That hand slowly unfurls outwards.",
			"A final gesture towards a fading family.",
			"Inka knew. She would not leave this side."
		],
		"japanese": [
			"止まった時間、氷の中の小さな手。",
			"その手が、ゆっくりと外へと広がる。",
			"消えゆく家族へ向けた最後の身振り。",
			"インカは知っていた。このそばを、離れないだろうと。"
		],
		"chinese": [
			"静止的时间，冰中的小手。",
			"那只手，慢慢地向外伸展。",
			"面向逝去家人的最后姿态。",
			"因卡明白了。她不会离开这里。"
		],
		"french": [
			"Le temps figé, une petite main dans la glace.",
			"Cette main s'ouvre lentement vers l'extérieur.",
			"Un dernier geste vers une famille qui s'éteint.",
			"Inka le savait. Elle ne quitterait pas ce côté."
		],
		"spanish": [
			"Tiempo detenido, una pequeña mano en el hielo.",
			"Esa mano se extiende lentamente hacia afuera.",
			"Un último gesto hacia una familia que se desvanece.",
			"Inka lo supo. No se marcharía de aquí."
		],
		"vietnamese": [
			"Thời gian ngừng lại, bàn tay nhỏ trong băng.",
			"Bàn tay ấy, từ từ vươn ra ngoài.",
			"Cử chỉ cuối cùng hướng về gia đình đang tan biến.",
			"Inka biết. Cô sẽ không rời khỏi nơi này."
		],
		"thai": [
			"เวลาที่หยุดนิ่ง, มือเล็กๆ ในน้ำแข็ง",
			"มือคู่นั้น ค่อยๆ แบออกไปข้างนอก",
			"ท่าทางสุดท้ายที่ส่งให้ครอบครัวที่กำลังเลือนหายไป",
			"อิงกา รับรู้ เธอจะไม่จากข้างกายนี้ไป"
		],
		"hindi": [
			"रुका हुआ समय, बर्फ में एक छोटा हाथ।",
			"वह हाथ, धीरे-धीरे बाहर की ओर फैलता है।",
			"लुप्त हो रहे परिवार की ओर एक अंतिम हावभाव।",
			"इंका जानती थी। वह इस पक्ष को नहीं छोड़ेगी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 빛 속, 작은 손이 뻗어 있었다.",
						"english": "In the frozen light, a small hand was reaching out.",
						"japanese": "凍りついた光の中、小さな手が伸びていた。",
						"chinese": "在冰冷的光中，一只小手伸着。",
						"french": "Dans la lumière gelée, une petite main était tendue.",
						"spanish": "En la luz congelada, una pequeña mano se extendía.",
						"vietnamese": "Trong ánh sáng đóng băng, một bàn tay nhỏ đang vươn ra.",
						"thai": "ในแสงที่แข็งตัว มือเล็กๆ กำลังยื่นออกไป",
						"hindi": "जमी हुई रोशनी में, एक छोटा हाथ फैला हुआ था।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아이야.",
						"english": "...My child.",
						"japanese": "…おや。",
						"chinese": "…孩子啊。",
						"french": "...Mon enfant.",
						"spanish": "...Hijo/a.",
						"vietnamese": "...Con ơi.",
						"thai": "...ลูกเอ๋ย",
						"hindi": "...बच्चे।"
					},
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 손… 무얼 잡으려는 걸까?",
						"english": "That hand... what is it trying to grasp?",
						"japanese": "あの手…何を掴もうとしているのだろう？",
						"chinese": "那只手…想抓住什么呢？",
						"french": "Cette main... que tente-t-elle de saisir ?",
						"spanish": "Esa mano... ¿qué intenta agarrar?",
						"vietnamese": "Bàn tay ấy... đang cố nắm lấy điều gì?",
						"thai": "มือคู่นั้น... กำลังพยายามจะจับอะไรกันนะ?",
						"hindi": "वह हाथ... क्या पकड़ने की कोशिश कर रहा है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "사라지는 것을… 놓지 않으려는 몸짓이야.",
						"english": "It's a gesture to not let go of what's fading away.",
						"japanese": "消えゆくものを…離さないとする身振りだよ。",
						"chinese": "这是不想放开逝去之物的姿态。",
						"french": "C'est un geste pour ne pas lâcher ce qui disparaît.",
						"spanish": "Es un gesto para no soltar lo que se desvanece.",
						"vietnamese": "Đó là cử chỉ không muốn buông bỏ thứ đang tan biến.",
						"thai": "เป็นท่าทางที่ไม่ยอมปล่อยสิ่งที่กำลังเลือนหายไป",
						"hindi": "यह उस चीज़ को न छोड़ने का एक हावभाव है जो मिट रही है।"
					},
					"emotion": "sad",
					"type": "speech"
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
					"action": "enter",
					"speaker": "inka",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"content": {
						"korean": "여전히 여기에 있구나. 외로웠지.",
						"english": "You're still here. You must have been lonely.",
						"japanese": "まだここにいたんだね。寂しかっただろう。",
						"chinese": "你还在这里啊。一定很寂寞吧。",
						"french": "Tu es toujours là. Tu as dû être seul(e).",
						"spanish": "Todavía estás aquí. Debes haber estado solo/a.",
						"vietnamese": "Con vẫn ở đây. Chắc hẳn con đã rất cô đơn.",
						"thai": "เธอยังอยู่ที่นี่นี่เอง เหงาใช่ไหม",
						"hindi": "तुम अभी भी यहीं हो। तुम ज़रूर अकेले रहे होगे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "인카, 저건 위험할 수도 있어.",
						"english": "Inka, that might be dangerous.",
						"japanese": "インカ、それは危険かもしれない。",
						"chinese": "因卡，那个可能很危险。",
						"french": "Inka, ça pourrait être dangereux.",
						"spanish": "Inka, eso podría ser peligroso.",
						"vietnamese": "Inka, cái đó có thể nguy hiểm đấy.",
						"thai": "อิงกา นั่นอาจจะเป็นอันตรายได้นะ",
						"hindi": "इंका, वह खतरनाक हो सकता है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 그저… 마지막 인사를 하는 것뿐이야.",
						"english": "No. Just… saying my last goodbyes.",
						"japanese": "いいえ。ただ…最後の挨拶をしているだけだよ。",
						"chinese": "不。只是…在做最后的告别。",
						"french": "Non. Juste... pour un dernier adieu.",
						"spanish": "No. Solo... me despido por última vez.",
						"vietnamese": "Không. Chỉ là… tôi đang nói lời tạm biệt cuối cùng thôi.",
						"thai": "ไม่ใช่ แค่... กำลังกล่าวคำอำลาครั้งสุดท้าย",
						"hindi": "नहीं। बस… अंतिम विदा कह रहा हूँ।"
					},
					"emotion": "sad",
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "두려워하지 마.",
						"english": "Don't be afraid.",
						"japanese": "怖がらないで。",
						"chinese": "不要害怕。",
						"french": "N'aie pas peur.",
						"spanish": "No tengas miedo.",
						"vietnamese": "Đừng sợ.",
						"thai": "อย่ากลัวเลย",
						"hindi": "डरो मत।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더는 얼어붙지 마. 내가 옆에 있어줄게.",
						"english": "Don't freeze anymore. I'll be by your side.",
						"japanese": "もう凍りつかないで。私がそばにいてあげる。",
						"chinese": "别再僵住了。我会陪在你身边。",
						"french": "Ne gèle plus. Je serai à tes côtés.",
						"spanish": "No te congeles más. Estaré a tu lado.",
						"vietnamese": "Đừng đóng băng nữa. Tôi sẽ ở bên bạn.",
						"thai": "อย่าแข็งตัวอีกเลยนะ ฉันจะอยู่ข้างๆ เธอ",
						"hindi": "अब और मत जमना। मैं तुम्हारे साथ रहूँगा।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "손이… 더 활짝 펴지고 있어.",
						"english": "Your hand… is opening wider.",
						"japanese": "手が…もっと開いている。",
						"chinese": "手…张得更开了。",
						"french": "Ta main… s'ouvre davantage.",
						"spanish": "Tu mano… se está abriendo más.",
						"vietnamese": "Bàn tay… đang mở rộng hơn.",
						"thai": "มือ... กำลังเปิดกว้างขึ้น",
						"hindi": "हाथ… और खुल रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "가족에게… 닿으려는 마지막 힘이야.",
						"english": "It's the last strength… to reach family.",
						"japanese": "家族に…届こうとする最後の力だ。",
						"chinese": "这是…想伸向家人的最后一份力量。",
						"french": "C'est la dernière force… pour atteindre sa famille.",
						"spanish": "Es la última fuerza… para alcanzar a la familia.",
						"vietnamese": "Đó là sức mạnh cuối cùng… để vươn tới gia đình.",
						"thai": "มันคือพลังสุดท้าย...ที่จะเอื้อมถึงครอบครัว",
						"hindi": "यह परिवार तक पहुँचने की… अंतिम शक्ति है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "아냐, 네 옆에 내가 있어.",
						"english": "No, I'm next to you.",
						"japanese": "違う、私が君の隣にいる。",
						"chinese": "不，我会在你身边。",
						"french": "Non, je suis à tes côtés.",
						"spanish": "No, estoy a tu lado.",
						"vietnamese": "Không, tôi ở bên cạnh bạn.",
						"thai": "ไม่ใช่ ฉันอยู่ข้างๆ เธอ",
						"hindi": "नहीं, मैं तुम्हारे पास हूँ।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼음 속 아이의 손은, 온 마음을 다해 바깥으로 뻗어 있었다.",
						"english": "The child's hand in the ice stretched outward with all its heart.",
						"japanese": "氷の中の子供の手は、心を込めて外へと伸びていた。",
						"chinese": "冰中孩子的手，全心全意地伸向了外面。",
						"french": "La main de l'enfant dans la glace s'étirait vers l'extérieur de tout son cœur.",
						"spanish": "La mano del niño en el hielo se extendía hacia afuera con todo su corazón.",
						"vietnamese": "Bàn tay của đứa trẻ trong băng, vươn ra ngoài bằng cả trái tim.",
						"thai": "มือของเด็กในน้ำแข็งเอื้อมออกไปข้างนอกด้วยสุดใจ",
						"hindi": "बर्फ में बच्चे का हाथ, पूरे दिल से बाहर की ओर फैला हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이제… 돌아갈 수 없어.",
						"english": "Now… I can't go back.",
						"japanese": "もう…戻れない。",
						"chinese": "现在…无法回头了。",
						"french": "Maintenant… je ne peux plus revenir.",
						"spanish": "Ahora… no puedo volver.",
						"vietnamese": "Bây giờ… không thể quay lại được nữa.",
						"thai": "ตอนนี้... กลับไปไม่ได้แล้ว",
						"hindi": "अब… वापस नहीं जा सकता।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "inka",
					"content": {
						"korean": "돌아가지 않을 거야. 이 작별을 지킬 거야.",
						"english": "I won't go back. I'll keep this farewell.",
						"japanese": "戻らない。この別れを守る。",
						"chinese": "我不会回去。我会遵守这个告别。",
						"french": "Je ne reviendrai pas. Je tiendrai cet adieu.",
						"spanish": "No volveré. Mantendré esta despedida.",
						"vietnamese": "Tôi sẽ không quay lại. Tôi sẽ giữ lời từ biệt này.",
						"thai": "ฉันจะไม่กลับไป ฉันจะรักษาคำอำลานี้",
						"hindi": "मैं वापस नहीं जाऊँगा। मैं इस विदाई को निभाऊँगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "끝까지… 함께할게.",
						"english": "I'll be with you… till the end.",
						"japanese": "最後まで…一緒だよ。",
						"chinese": "直到最后…都会与你同在。",
						"french": "Je serai avec toi… jusqu'au bout.",
						"spanish": "Estaré contigo… hasta el final.",
						"vietnamese": "Tôi sẽ ở bên bạn… đến cùng.",
						"thai": "ฉันจะอยู่กับเธอ...จนกว่าจะถึงที่สุด",
						"hindi": "अंत तक… साथ रहूँगा।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스가 쓰러지고, 숲은 잠시 침묵에 잠겼다.",
						"english": "The unknown boss fell, and the forest was momentarily silent.",
						"japanese": "正体不明のボスが倒れ、森は一時静寂に包まれた。",
						"chinese": "身份不明的Boss倒下了，森林暂时陷入了沉默。",
						"french": "Le boss inconnu tomba, et la forêt fut momentanément silencieuse.",
						"spanish": "El jefe desconocido cayó, y el bosque quedó en silencio por un momento.",
						"vietnamese": "Con boss vô danh ngã xuống, khu rừng chìm vào im lặng trong chốc lát.",
						"thai": "บอสลึกลับล้มลง และป่าก็ตกอยู่ในความเงียบชั่วขณะ",
						"hindi": "अज्ञात बॉस गिर गया, और जंगल क्षण भर के लिए शांत हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "끝은… 또 다른 시작일 뿐… 모든 것은… 다시 돌아올 것이다…",
						"english": "An end is... merely another beginning... All things... will return again...",
						"japanese": "終わりは…ただの新たな始まり…全ては…再び戻ってくるだろう…",
						"chinese": "结束…不过是另一个开始…一切…都将再次归来…",
						"french": "Une fin n'est... qu'un autre début... Tout... reviendra...",
						"spanish": "Un final es... solo otro comienzo... Todo... volverá de nuevo...",
						"vietnamese": "Kết thúc chỉ là... một khởi đầu khác... Mọi thứ... rồi sẽ trở lại...",
						"thai": "จุดจบนั้น... เป็นเพียงการเริ่มต้นใหม่... ทุกสิ่ง... จะกลับมาอีกครั้ง...",
						"hindi": "एक अंत... केवल एक और शुरुआत है... सब कुछ... फिर से वापस आएगा..."
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "inka",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니. 이 작별은… 새로운 시작이야.",
						"english": "No. This farewell is... a new beginning.",
						"japanese": "違う。この別れは…新たな始まりだ。",
						"chinese": "不。这次告别…是一个新的开始。",
						"french": "Non. Cet adieu est... un nouveau début.",
						"spanish": "No. Esta despedida es... un nuevo comienzo.",
						"vietnamese": "Không. Lời tạm biệt này là... một khởi đầu mới.",
						"thai": "ไม่หรอก การจากลานี้... คือการเริ่มต้นใหม่ต่างหาก",
						"hindi": "नहीं। यह विदाई... एक नई शुरुआत है।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 손은… 닿을 거야.",
						"english": "Your hand... will reach.",
						"japanese": "君の手は…届くだろう。",
						"chinese": "你的手…会触及到的。",
						"french": "Ta main... atteindra.",
						"spanish": "Tu mano... alcanzará.",
						"vietnamese": "Bàn tay ngươi... sẽ vươn tới.",
						"thai": "มือของเจ้า... จะไปถึง",
						"hindi": "तुम्हारा हाथ... पहुँच जाएगा।"
					},
					"emotion": "happy",
					"speaker": "inka"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "인카는 얼음 속 작은 손 곁에 머물렀다. 영원한 작별의 순간을, 홀로 두지 않고.",
						"english": "Inka remained by the small hand in the ice, not leaving the moment of eternal farewell alone.",
						"japanese": "インカは氷の中の小さな手のそばに留まった。永遠の別れの瞬間を、一人にさせぬよう。",
						"chinese": "因卡留在了冰中小手旁边，没有让永恒告别的时刻独自一人。",
						"french": "Inka resta près de la petite main dans la glace, ne laissant pas le moment de l'adieu éternel seul.",
						"spanish": "Inka permaneció junto a la pequeña mano en el hielo, sin dejar solo el momento del adiós eterno.",
						"vietnamese": "Inka ở lại bên bàn tay nhỏ trong băng, không để khoảnh khắc vĩnh biệt mãi mãi đơn độc.",
						"thai": "อินคาอยู่เคียงข้างมือเล็กๆ ในน้ำแข็ง ไม่ปล่อยให้ช่วงเวลาของการจากลาอันเป็นนิรันดร์อยู่เพียงลำพัง",
						"hindi": "इंका बर्फ में छोटे हाथ के पास रहा, शाश्वत विदाई के क्षण को अकेला नहीं छोड़ा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 어둠이 모든 것을 집어삼켰다.",
						"english": "Cold darkness swallowed everything.",
						"japanese": "冷たい闇が全てを飲み込んだ。",
						"chinese": "冰冷的黑暗吞噬了一切。",
						"french": "Une froide obscurité a tout englouti.",
						"spanish": "Una fría oscuridad lo devoró todo.",
						"vietnamese": "Bóng tối lạnh lẽo nuốt chửng mọi thứ.",
						"thai": "ความมืดมิดอันหนาวเหน็บได้กลืนกินทุกสิ่ง",
						"hindi": "ठंडे अंधेरे ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 노력은… 헛될 뿐이다.",
						"english": "Your efforts... are in vain.",
						"japanese": "お前たちの努力は… 無駄だ。",
						"chinese": "你们的努力… 只是徒劳。",
						"french": "Vos efforts... sont vains.",
						"spanish": "Vuestros esfuerzos... son en vano.",
						"vietnamese": "Mọi nỗ lực của các ngươi... đều vô ích.",
						"thai": "ความพยายามของพวกเจ้า... ช่างไร้ประโยชน์",
						"hindi": "तुम्हारे प्रयास… व्यर्थ हैं।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "inka",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 이 곁에… 내가 있어.",
						"english": "No. I am... by your side.",
						"japanese": "いいえ。この傍に… 私がいる。",
						"chinese": "不。我… 就在你身边。",
						"french": "Non. Je suis... à tes côtés.",
						"spanish": "No. Yo estoy... a tu lado.",
						"vietnamese": "Không. Ta... ở bên cạnh ngươi.",
						"thai": "ไม่. ข้า... อยู่ข้างกายเจ้า",
						"hindi": "नहीं। मैं… तुम्हारे साथ हूँ।"
					},
					"emotion": "base",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わっていない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "…अभी खत्म नहीं हुआ है।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서, 거대한 그림자가 나타났다.",
						"english": "In the darkness, a colossal shadow appeared.",
						"japanese": "闇の中、巨大な影が現れた。",
						"chinese": "黑暗中，一个巨大的身影出现了。",
						"french": "Dans l'obscurité, une ombre colossale apparut.",
						"spanish": "En la oscuridad, una sombra colosal apareció.",
						"vietnamese": "Trong bóng tối, một cái bóng khổng lồ hiện ra.",
						"thai": "ในความมืดมิด เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "अंधेरे में, एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "감히… 이 마지막 기다림을 방해하는가?",
						"english": "How dare you... interrupt this final wait?",
						"japanese": "よくも…この最後の待ち時間を邪魔したな？",
						"chinese": "你竟敢…打扰我这最后的等待？",
						"french": "Comment oses-tu... interrompre cette ultime attente ?",
						"spanish": "¿Cómo te atreves... a interrumpir esta espera final?",
						"vietnamese": "Ngươi dám... phá vỡ sự chờ đợi cuối cùng này sao?",
						"thai": "บังอาจ... ขัดขวางการรอคอยครั้งสุดท้ายนี้รึ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस अंतिम इंतज़ार को बाधित करने की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…비켜라!",
						"english": "...Stand aside!",
						"japanese": "…そこを退け！",
						"chinese": "…滚开！",
						"french": "...Écarte-toi !",
						"spanish": "…¡Apártate!",
						"vietnamese": "...Tránh ra!",
						"thai": "...หลีกไป!",
						"hindi": "...हट जाओ!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "{random_boss}… 당신도 누군가를… 기다렸나요?",
						"english": "{random_boss}... Were you... waiting for someone too?",
						"japanese": "{random_boss}…あなたも誰かを…待っていたのですか？",
						"chinese": "{random_boss}…你也在…等着某人吗？",
						"french": "{random_boss}... Toi aussi... tu attendais quelqu'un ?",
						"spanish": "{random_boss}... ¿Tú también... esperabas a alguien?",
						"vietnamese": "{random_boss}... Ngươi cũng... đang đợi ai đó sao?",
						"thai": "{random_boss}... ท่านก็... รอคอยใครบางคนอยู่เหมือนกันหรือ?",
						"hindi": "{random_boss}... क्या तुम भी... किसी का इंतज़ार कर रहे थे?"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "내 앞을 가로막는 자… 용서치 않는다!",
						"english": "Those who stand in my way... will not be forgiven!",
						"japanese": "我の道を阻む者…許さん！",
						"chinese": "阻碍我道路之人…绝不饶恕！",
						"french": "Ceux qui se dressent sur mon chemin... ne seront pas pardonnés !",
						"spanish": "¡A quienes se interpongan en mi camino... no los perdonaré!",
						"vietnamese": "Kẻ nào cản đường ta... sẽ không được tha thứ!",
						"thai": "ผู้ใดขวางทางข้า... จะไม่ได้รับการอภัย!",
						"hindi": "जो मेरा रास्ता रोकेंगे... उन्हें माफ़ नहीं किया जाएगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
