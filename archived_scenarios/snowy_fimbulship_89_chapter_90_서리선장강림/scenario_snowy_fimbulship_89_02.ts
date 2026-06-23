export const scenario_snowy_fimbulship_89_02 = {
	"scenario_id": "snowy_fimbulship_89_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "혹독한 추위가 몰아치는 얼음 미궁. 사방이 같은 모습이었다.",
						"english": "An ice labyrinth swept by bitter cold. Every direction looked the same.",
						"japanese": "厳しい寒さが吹き荒れる氷の迷宮。四方が同じに見えた。",
						"chinese": "严寒肆虐的冰迷宫。四周景象皆相同。",
						"french": "Un labyrinthe de glace balayé par un froid mordant. Tout semblait identique.",
						"spanish": "Un laberinto de hielo azotado por un frío intenso. Todo a su alrededor parecía igual.",
						"vietnamese": "Mê cung băng giá với cái lạnh khắc nghiệt. Bốn phía đều trông giống nhau.",
						"thai": "เขาวงกตน้ำแข็งที่ถูกพัดพาด้วยความหนาวเย็นจัด ทุกทิศทางดูเหมือนกัน",
						"hindi": "भीषण ठंड से घिरा बर्फीला भूलभुलैया। चारों ओर एक जैसा दिख रहा था।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "여기야. 유령선은 이 얼음 속으로 사라졌어.",
						"english": "Here. The ghost ship vanished into this ice.",
						"japanese": "ここだ。幽霊船はこの氷の中へ消えた。",
						"chinese": "就在这里。幽灵船消失在这冰中。",
						"french": "C'est ici. Le vaisseau fantôme a disparu dans cette glace.",
						"spanish": "Aquí. El barco fantasma desapareció en este hielo.",
						"vietnamese": "Đây rồi. Con tàu ma đã biến mất vào trong băng này.",
						"thai": "ที่นี่แหละ เรือผีสิงหายไปในน้ำแข็งนี้",
						"hindi": "यहाँ। भूतिया जहाज इस बर्फ में गायब हो गया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이런 곳을 어떻게 지나지?",
						"english": "How do we get through a place like this?",
						"japanese": "こんな場所、どうやって通る？",
						"chinese": "这种地方怎么过去？",
						"french": "Comment traverser un endroit pareil ?",
						"spanish": "¿Cómo atravesamos un lugar como este?",
						"vietnamese": "Làm sao chúng ta đi qua được nơi như thế này?",
						"thai": "เราจะผ่านที่แบบนี้ไปได้อย่างไร?",
						"hindi": "ऐसी जगह से कैसे गुजरेंगे?"
					}
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "발자취를 따라가면 돼. 죽은 자들의 비명이 뱃길을 알려줄 거야.",
						"english": "Just follow the footsteps. The screams of the dead will guide our way.",
						"japanese": "足跡を辿ればいい。死者の悲鳴が航路を教えてくれるだろう。",
						"chinese": "跟着脚印走就行。死者的尖叫会指引航线。",
						"french": "Il suffit de suivre les traces. Les cris des morts nous indiqueront le chemin.",
						"spanish": "Solo sigue las huellas. Los gritos de los muertos nos mostrarán el camino.",
						"vietnamese": "Cứ đi theo dấu chân. Tiếng thét của người chết sẽ chỉ đường cho chúng ta.",
						"thai": "แค่ตามรอยเท้าไป เสียงกรีดร้องของคนตายจะนำทางเราเอง",
						"hindi": "बस पदचिह्नों का अनुसरण करो। मृतकों की चीखें हमें रास्ता बताएँगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "이곳의 한기는… 자연스러운 게 아니야.",
						"english": "The chill here... it's not natural.",
						"japanese": "ここの寒気は… 自然なものじゃない。",
						"chinese": "这里的寒气… 不自然。",
						"french": "Le froid ici... n'est pas naturel.",
						"spanish": "El frío aquí... no es natural.",
						"vietnamese": "Cái lạnh ở đây... không tự nhiên chút nào.",
						"thai": "ความหนาวเย็นที่นี่... มันไม่เป็นธรรมชาติ",
						"hindi": "यहाँ की ठंडक... स्वाभाविक नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지는 것 같아요.",
						"english": "It's getting colder and colder.",
						"japanese": "だんだん寒くなってきているようです。",
						"chinese": "好像越来越冷了。",
						"french": "On dirait qu'il fait de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Càng ngày càng lạnh.",
						"thai": "ดูเหมือนจะหนาวขึ้นเรื่อยๆ",
						"hindi": "ऐसा लगता है कि ठंड बढ़ती जा रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "유령선이 지나간 자리엔 늘 생명이 시들지. 선장의 저주 때문이야.",
						"english": "Where the ghost ship passes, life always withers. It's the captain's curse.",
						"japanese": "幽霊船が通った跡には、いつも命が枯れる。船長の呪いのせいだ。",
						"chinese": "幽灵船经过之处，生命总是枯萎。那是船长的诅咒。",
						"french": "Là où le vaisseau fantôme passe, la vie se flétrit toujours. C'est la malédiction du capitaine.",
						"spanish": "Donde el barco fantasma pasa, la vida siempre se marchita. Es la maldición del capitán.",
						"vietnamese": "Nơi con thuyền ma đi qua, sự sống luôn tàn lụi. Đó là lời nguyền của thuyền trưởng.",
						"thai": "ที่ใดที่เรือผีผ่านไป ชีวิตก็ร่วงโรยเสมอ เป็นเพราะคำสาปของกัปตัน",
						"hindi": "जहाँ भूतिया जहाज़ गुजरता है, वहाँ जीवन हमेशा मुरझा जाता है। यह कप्तान का श्राप है।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "주변의 작은 이끼들이 서서히 검게 변해갔다.",
						"english": "The small mosses around slowly turned black.",
						"japanese": "周りの小さな苔がゆっくりと黒く変色していった。",
						"chinese": "周围的小苔藓渐渐变黑了。",
						"french": "Les petites mousses alentour noircissaient lentement.",
						"spanish": "Los pequeños musgos alrededor se volvieron negros lentamente.",
						"vietnamese": "Những đám rêu nhỏ xung quanh dần dần chuyển sang màu đen.",
						"thai": "ตะไคร่น้ำเล็กๆ รอบๆ ค่อยๆ เปลี่ยนเป็นสีดำ",
						"hindi": "आसपास की छोटी काई धीरे-धीरे काली पड़ने लगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "옛 전설에 따르면, 저주받은 선장은 영원히 바다를 떠돌며 산 자의 온기를 빼앗아.",
						"english": "According to ancient legends, the cursed captain wanders the seas forever, stealing the warmth of the living.",
						"japanese": "古い伝説によると、呪われた船長は永遠に海をさまよい、生者の温もりを奪う。",
						"chinese": "根据古老传说，受诅咒的船长永远在海上游荡，夺走生者的温暖。",
						"french": "Selon d'anciennes légendes, le capitaine maudit erre éternellement sur les mers, dérobant la chaleur des vivants.",
						"spanish": "Según antiguas leyendas, el capitán maldito vaga eternamente por los mares, arrebatando el calor de los vivos.",
						"vietnamese": "Theo truyền thuyết xưa, thuyền trưởng bị nguyền rủa vĩnh viễn lang thang trên biển, cướp đi hơi ấm của người sống.",
						"thai": "ตามตำนานเก่าแก่ กัปตันผู้ถูกสาปจะร่อนเร่อยู่ในทะเลตลอดไป แย่งชิงความอบอุ่นจากสิ่งมีชีวิต",
						"hindi": "पुरानी किंवदंतियों के अनुसार, शापित कप्तान हमेशा समुद्र में भटकता रहता है और जीवितों की गर्मी छीन लेता है।"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 저 배는… 시체로 움직이는 거야?",
						"english": "So that ship... is it moved by corpses?",
						"japanese": "じゃああの船は…死体で動いているの？",
						"chinese": "那么那艘船……是用尸体驱动的吗？",
						"french": "Alors ce navire… est-il animé par des cadavres ?",
						"spanish": "¿Entonces ese barco… se mueve con cadáveres?",
						"vietnamese": "Vậy con thuyền đó... được điều khiển bằng xác chết sao?",
						"thai": "ถ้าอย่างนั้น เรือลำนั้น… เคลื่อนที่ด้วยศพหรือ?",
						"hindi": "तो वह जहाज... लाशों से चलता है?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "그 힘으로 이 얼음 미로의 수호자를 만들지. 곧 마주하게 될 거야.",
						"english": "With that power, it creates the guardian of this ice labyrinth. You'll face it soon.",
						"japanese": "その力でこの氷の迷宮の守護者を作る。じきに相まみえることになるだろう。",
						"chinese": "借助那股力量，它创造了这座冰迷宫的守护者。你很快就会遇到它。",
						"french": "Avec cette puissance, il crée le gardien de ce labyrinthe de glace. Tu le rencontreras bientôt.",
						"spanish": "Con ese poder, crea al guardián de este laberinto de hielo. Pronto lo enfrentarás.",
						"vietnamese": "Với sức mạnh đó, nó tạo ra người bảo vệ của mê cung băng này. Ngươi sẽ sớm đối mặt với nó.",
						"thai": "ด้วยพลังนั้น มันสร้างผู้พิทักษ์ของเขาวงกตน้ำแข็งนี้ขึ้นมา เจ้าจะได้พบกับมันในไม่ช้า",
						"hindi": "उसी शक्ति से, यह इस बर्फीले भूलभुलैया के संरक्षक को बनाता है। तुम जल्द ही उसका सामना करोगे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "수호자…?",
						"english": "A guardian...?",
						"japanese": "守護者…？",
						"chinese": "守护者……？",
						"french": "Un gardien… ?",
						"spanish": "¿Un guardián…?",
						"vietnamese": "Người bảo vệ...?",
						"thai": "ผู้พิทักษ์...?",
						"hindi": "संरक्षक...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "앞서가는 빙벽 사이로 거대한 그림자가 일렁였다.",
						"english": "A gigantic shadow flickered between the ice walls ahead.",
						"japanese": "前方の氷壁の間に巨大な影が揺らめいた。",
						"chinese": "巨大的影子在前方移动的冰墙间晃动。",
						"french": "Une ombre gigantesque vacilla entre les parois de glace devant.",
						"spanish": "Una sombra gigantesca se agitó entre las paredes de hielo que avanzaban.",
						"vietnamese": "Một cái bóng khổng lồ chập chờn giữa những bức tường băng phía trước.",
						"thai": "เงาขนาดใหญ่สั่นไหวอยู่ระหว่างกำแพงน้ำแข็งที่เคลื่อนไปข้างหน้า",
						"hindi": "आगे बढ़ती बर्फीली दीवारों के बीच एक विशाल छाया हिलने लगी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙벽이 부서지며 정체 모를 괴물이 나타났다.",
						"english": "The gigantic ice wall shattered, and an unknown monster appeared.",
						"japanese": "巨大な氷壁が砕け、正体不明の怪物が現れた。",
						"chinese": "巨大的冰墙破碎，一个不明身份的怪物出现了。",
						"french": "L'immense paroi de glace se brisa, et un monstre inconnu apparut.",
						"spanish": "La gigantesca pared de hielo se hizo añicos, y un monstruo desconocido apareció.",
						"vietnamese": "Bức tường băng khổng lồ vỡ tan, một con quái vật không rõ danh tính xuất hiện.",
						"thai": "กำแพงน้ำแข็งขนาดใหญ่แตกออก และสัตว์ประหลาดที่ไม่รู้จักก็ปรากฏขึ้น",
						"hindi": "विशाल बर्फीली दीवार टूट गई और एक अज्ञात राक्षस प्रकट हुआ।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "누구도… 이 길을… 지나갈 수 없다.",
						"english": "No one... can pass... this way.",
						"japanese": "誰も…この道を…通り過ぎることはできない。",
						"chinese": "谁也…无法…通过这条路。",
						"french": "Personne… ne peut… passer par ici.",
						"spanish": "Nadie… puede… pasar por aquí.",
						"vietnamese": "Không ai... có thể... đi qua lối này.",
						"thai": "ไม่มีใคร… ผ่านทางนี้… ได้",
						"hindi": "कोई भी... इस रास्ते... से नहीं गुजर सकता।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "물러서! 네 저주 따위에 굴복할 순 없어!",
						"english": "Stand back! I won't succumb to your curse!",
						"japanese": "下がれ！貴様の呪いになど屈しない！",
						"chinese": "退下！我不会屈服于你的诅咒！",
						"french": "Recule ! Je ne céderai pas à ta malédiction !",
						"spanish": "¡Atrás! ¡No sucumbiré a tu maldición!",
						"vietnamese": "Lùi lại! Ta sẽ không khuất phục trước lời nguyền của ngươi!",
						"thai": "ถอยไป! ข้าไม่ยอมจำนนต่อคำสาปของเจ้าหรอก!",
						"hindi": "पीछे हटो! मैं तुम्हारे श्राप के आगे नहीं झुकूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들… 영원히 얼음 속에 잠들어라.",
						"english": "Worthless fools… Sleep forever in the ice.",
						"japanese": "愚かな者たち…永遠に氷の中で眠れ。",
						"chinese": "卑微的家伙们…永远沉睡在冰中吧。",
						"french": "Minables… Dormez éternellement dans la glace.",
						"spanish": "Insignificantes… Dormid para siempre en el hielo.",
						"vietnamese": "Lũ vô dụng… Hãy ngủ vĩnh viễn trong băng đi.",
						"thai": "พวกไร้ค่า… จงหลับใหลในน้ำแข็งไปตลอดกาล",
						"hindi": "तुच्छ प्राणी… हमेशा के लिए बर्फ़ में सो जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 포기할 수 없어.",
						"english": "Damn it… Not yet… I can't give up.",
						"japanese": "くそ…まだ…諦められない。",
						"chinese": "该死…还没…不能放弃。",
						"french": "Merde… Pas encore… Je ne peux pas abandonner.",
						"spanish": "Maldita sea… Aún no… No puedo rendirme.",
						"vietnamese": "Chết tiệt… Vẫn chưa… Không thể bỏ cuộc được.",
						"thai": "ให้ตายสิ… ยัง… ยังยอมแพ้ไม่ได้",
						"hindi": "धिक्कार है… अभी तक नहीं… मैं हार नहीं मान सकता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "망자의 약속은 쉽게 끊어지지 않아. 다시 일어서야 해.",
						"english": "A promise of the dead is not easily broken. I must rise again.",
						"japanese": "死者の約束は容易には破られない。再び立ち上がらねば。",
						"chinese": "死者的誓约不会轻易断裂。我必须再次站起来。",
						"french": "La promesse des morts ne se brise pas facilement. Je dois me relever.",
						"spanish": "La promesa de los muertos no se rompe fácilmente. Debo levantarme de nuevo.",
						"vietnamese": "Lời hứa của người chết không dễ bị phá vỡ. Ta phải đứng dậy lần nữa.",
						"thai": "สัญญาของคนตายไม่อาจถูกทำลายได้ง่ายๆ ข้าต้องลุกขึ้นยืนอีกครั้ง",
						"hindi": "मृतकों का वादा आसानी से नहीं टूटता। मुझे फिर से खड़ा होना होगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 이것은… 시작일 뿐…",
						"english": "Ugh… This is… just the beginning…",
						"japanese": "くっ…これは…始まりにすぎない…",
						"chinese": "呃…这只是…开始而已…",
						"french": "Ugh… Ce n'est… que le début…",
						"spanish": "Uf… Esto es… solo el principio…",
						"vietnamese": "Khục… Đây chỉ là… sự khởi đầu…",
						"thai": "อึก… นี่มัน… แค่จุดเริ่มต้น…",
						"hindi": "उफ़… यह तो… बस शुरुआत है…"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어….",
						"english": "It's over….",
						"japanese": "終わった…。",
						"chinese": "结束了…",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Kết thúc rồi…",
						"thai": "จบแล้ว…",
						"hindi": "यह खत्म हो गया है…।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "선장의 저주는 훨씬 깊어. 이 얼음 미로를 지키던 자는 부하일 뿐.",
						"english": "The captain's curse runs much deeper. The one guarding this ice maze was merely a subordinate.",
						"japanese": "船長の呪いはもっと深い。この氷の迷路を守っていたのは部下に過ぎない。",
						"chinese": "船长的诅咒要深得多。守护这个冰迷宫的只是个手下。",
						"french": "La malédiction du capitaine est bien plus profonde. Celui qui gardait ce labyrinthe de glace n'était qu'un subordonné.",
						"spanish": "La maldición del capitán es mucho más profunda. El que custodiaba este laberinto de hielo era solo un subordinado.",
						"vietnamese": "Lời nguyền của thuyền trưởng sâu hơn nhiều. Kẻ canh gác mê cung băng này chỉ là một thuộc hạ.",
						"thai": "คำสาปของกัปตันนั้นลึกซึ้งกว่ามาก ผู้ที่เฝ้าเขาวงกตน้ำแข็งนี้เป็นเพียงผู้ใต้บังคับบัญชาเท่านั้น",
						"hindi": "कप्तान का श्राप बहुत गहरा है। इस बर्फीले भूलभुलैया की रखवाली करने वाला सिर्फ एक अधीनस्थ था।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 유령선은 어디로?",
						"english": "Then where is the ghost ship?",
						"japanese": "では幽霊船はどこへ？",
						"chinese": "那幽灵船去了哪里？",
						"french": "Alors, où est le vaisseau fantôme ?",
						"spanish": "¿Entonces dónde está el barco fantasma?",
						"vietnamese": "Vậy con tàu ma ở đâu?",
						"thai": "แล้วเรือผีอยู่ที่ไหน?",
						"hindi": "तो भूतिया जहाज कहाँ है?"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "더 깊은 빙하 속으로. 죽은 자의 맹세가 들려오는 곳으로.",
						"english": "Deeper into the glacier. To where the vows of the dead are heard.",
						"japanese": "より深い氷河の中へ。死者の誓いが聞こえる場所へ。",
						"chinese": "进入更深的冰川。去往能听到死者誓言的地方。",
						"french": "Plus profondément dans le glacier. Là où l'on entend les vœux des morts.",
						"spanish": "Más profundo en el glaciar. Hacia donde se escuchan los votos de los muertos.",
						"vietnamese": "Sâu hơn vào sông băng. Đến nơi có thể nghe thấy lời thề của kẻ chết.",
						"thai": "ลึกเข้าไปในธารน้ำแข็ง สู่ที่ที่ได้ยินคำสาบานของผู้ตาย",
						"hindi": "ग्लेशियर के और अंदर। जहाँ मृतकों की प्रतिज्ञाएँ सुनी जाती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "유령선은 더욱 깊은 얼음 속으로 사라졌다. 진짜 사냥은 이제부터였다.",
						"english": "The ghost ship vanished deeper into the ice. The real hunt begins now.",
						"japanese": "幽霊船は氷の奥深くへと消えた。本当の狩りはここからだ。",
						"chinese": "幽灵船消失在冰层深处。真正的狩猎才刚刚开始。",
						"french": "Le vaisseau fantôme a disparu plus profondément dans la glace. La vraie chasse commence maintenant.",
						"spanish": "El barco fantasma se desvaneció más profundo en el hielo. La verdadera cacería comienza ahora.",
						"vietnamese": "Con tàu ma biến mất sâu hơn vào băng. Cuộc săn thực sự bắt đầu từ bây giờ.",
						"thai": "เรือผีสิงหายลับไปในน้ำแข็งที่ลึกยิ่งขึ้น การล่าที่แท้จริงเริ่มต้นขึ้นแล้ว",
						"hindi": "भूतिया जहाज़ बर्फ़ में और गहराई तक ग़ायब हो गया। असली शिकार अब शुरू होता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "오지 마라… 너희도… 얼어붙을 것이다.",
						"english": "Don't come… You too… will freeze.",
						"japanese": "来るな…お前たちも…凍りつくだろう。",
						"chinese": "别过来…你们也会…被冻结的。",
						"french": "Ne venez pas... Vous aussi... vous gelerez.",
						"spanish": "No vengáis... Vosotros también... os congelaréis.",
						"vietnamese": "Đừng đến… Các ngươi cũng… sẽ đóng băng.",
						"thai": "อย่าเข้ามา… พวกเจ้าเองก็… จะแข็งตาย",
						"hindi": "मत आओ… तुम भी… जम जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마! 네가 막을 수 없어!",
						"english": "Nonsense! You can't stop this!",
						"japanese": "くだらない！貴様には止められない！",
						"chinese": "胡说！你阻止不了！",
						"french": "Foutaises ! Tu ne peux pas l'arrêter !",
						"spanish": "¡Tonterías! ¡No puedes detenerlo!",
						"vietnamese": "Vô lý! Ngươi không thể ngăn cản!",
						"thai": "เหลวไหล! เจ้าหยุดไม่ได้หรอก!",
						"hindi": "बकवास! तुम इसे रोक नहीं सकते!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "hild",
					"duration_ms": 500
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "저 괴물은 유령선의 힘과 연결되어 있어. 약점을 찾아야 해.",
						"english": "That monster is connected to the ghost ship's power. We need to find its weakness.",
						"japanese": "あの怪物は幽霊船の力と繋がっている。弱点を見つけなければ。",
						"chinese": "那个怪物与幽灵船的力量相连。我们必须找到它的弱点。",
						"french": "Ce monstre est lié à la puissance du vaisseau fantôme. Nous devons trouver sa faiblesse.",
						"spanish": "Ese monstruo está conectado al poder del barco fantasma. Tenemos que encontrar su debilidad.",
						"vietnamese": "Quái vật đó liên kết với sức mạnh của con tàu ma. Chúng ta cần tìm ra điểm yếu của nó.",
						"thai": "สัตว์ประหลาดนั่นเชื่อมโยงกับพลังของเรือผี เราต้องหาจุดอ่อนของมัน",
						"hindi": "वह राक्षस भूतिया जहाज की शक्ति से जुड़ा है। हमें उसकी कमजोरी ढूंढनी होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "무의미하다… 죽은 자의 운명은… 영원하다.",
						"english": "Meaningless… The fate of the dead… is eternal.",
						"japanese": "無意味だ…死者の運命は…永遠なのだ。",
						"chinese": "毫无意义…死者的命运…是永恒的。",
						"french": "Dénué de sens... Le destin des morts... est éternel.",
						"spanish": "Sin sentido... El destino de los muertos... es eterno.",
						"vietnamese": "Vô nghĩa… Số phận của kẻ chết… là vĩnh hằng.",
						"thai": "ไร้ความหมาย… ชะตากรรมของผู้ตาย… คือนิรันดร์",
						"hindi": "व्यर्थ है… मृतकों का भाग्य… शाश्वत है।"
					},
					"type": "speech"
				},
				{
					"direction": "down",
					"type": "direction",
					"action": "exit",
					"duration_ms": 400,
					"speaker": "hild"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 북극해. 유령선은 흔적도 없이 사라졌다.",
			"하지만 힐드가 추적한 뱃길은 얼음 미궁으로 향하고 있었다.",
			"발자취마다 차가운 기운이 스며들었다.",
			"그리고 그곳에는, 정체 모를 위협이 기다리고 있었다.",
			"이 얼음 속에서, 첫 번째 격렬한 전투가 시작된다."
		],
		"english": [
			"The frozen Arctic Ocean. The ghost ship vanished without a trace.",
			"But the path Hild traced led to an ice labyrinth.",
			"With every step, a cold aura seeped in.",
			"And there, an unknown threat awaited.",
			"Within this ice, the first fierce battle begins."
		],
		"japanese": [
			"凍てついた北極海。幽霊船は痕跡もなく消え去った。",
			"しかし、ヒルデが追跡した航路は氷の迷宮へと向かっていた。",
			"足跡ごとに冷たい気が染み渡った。",
			"そしてそこには、正体不明の脅威が待ち受けていた。",
			"この氷の中で、最初の激しい戦いが始まる。"
		],
		"chinese": [
			"冰冻的北冰洋。幽灵船消失得无影无踪。",
			"然而，希尔德追踪的航线却通向了一座冰迷宫。",
			"每一步都渗透着冰冷的气息。",
			"而在那里，一个不明的威胁正在等待。",
			"在这冰中，第一场激烈的战斗开始了。"
		],
		"french": [
			"L'océan Arctique gelé. Le vaisseau fantôme a disparu sans laisser de trace.",
			"Mais le chemin tracé par Hild menait à un labyrinthe de glace.",
			"À chaque pas, une aura froide s'infiltrait.",
			"Et là, une menace inconnue attendait.",
			"Dans cette glace, la première bataille féroce commence."
		],
		"spanish": [
			"El Océano Ártico congelado. El barco fantasma desapareció sin dejar rastro.",
			"Pero el camino que Hild rastreaba conducía a un laberinto de hielo.",
			"Con cada paso, una energía fría se filtraba.",
			"Y allí, una amenaza desconocida esperaba.",
			"En este hielo, la primera batalla feroz comienza."
		],
		"vietnamese": [
			"Bắc Băng Dương đóng băng. Con tàu ma biến mất không dấu vết.",
			"Nhưng con đường Hild theo dấu lại dẫn đến một mê cung băng.",
			"Từng bước chân, một luồng khí lạnh tràn ngập.",
			"Và ở đó, một mối đe dọa không rõ đang chờ đợi.",
			"Trong băng giá này, trận chiến khốc liệt đầu tiên bắt đầu."
		],
		"thai": [
			"มหาสมุทรอาร์กติกที่เยือกแข็ง เรือผีสิงหายไปอย่างไร้ร่องรอย",
			"แต่เส้นทางที่ฮิลด์แกะรอยนำไปสู่เขาวงกตน้ำแข็ง",
			"ในทุกย่างก้าว ออร่าเยือกเย็นก็ซึมซาบเข้ามา",
			"และที่นั่น ภัยคุกคามที่ไม่รู้จักกำลังรออยู่",
			"ในน้ำแข็งนี้ การต่อสู้ที่ดุเดือดครั้งแรกเริ่มต้นขึ้น"
		],
		"hindi": [
			"जमा हुआ आर्कटिक महासागर। भूतिया जहाज बिना किसी निशान के गायब हो गया।",
			"लेकिन हिल्ड ने जिस रास्ते का पीछा किया, वह एक बर्फीले भूलभुलैया की ओर ले जा रहा था।",
			"हर कदम पर, एक ठंडी आभा समा जाती थी।",
			"और वहाँ, एक अज्ञात खतरा इंतज़ार कर रहा था।",
			"इस बर्फ में, पहली भीषण लड़ाई शुरू होती है।"
		]
	}
} as const;
