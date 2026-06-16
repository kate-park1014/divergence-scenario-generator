export const scenario_snowy_skaalbane_23_01 = {
	"scenario_id": "snowy_skaalbane_23_01",
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
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 공동이었다. 얼어붙은 배와 시신이 하나로 뒤엉켜 있었다.",
						"english": "It was a colossal cavern. Frozen ships and corpses were tangled into one.",
						"japanese": "それは巨大な空洞だった。凍りついた船と死体が一つに絡み合っていた。",
						"chinese": "这是一个巨大的空洞。冰冻的船只和尸体纠缠在一起。",
						"french": "C'était une caverne colossale. Des navires gelés et des corps s'enchevêtraient.",
						"spanish": "Era una caverna colosal. Barcos congelados y cadáveres estaban enredados en uno.",
						"vietnamese": "Đó là một hang động khổng lồ. Những con tàu và xác chết đóng băng bị mắc kẹt vào nhau.",
						"thai": "มันคือถ้ำขนาดมหึมา เรือที่ถูกแช่แข็งและศพพันกันเป็นหนึ่งเดียว",
						"hindi": "यह एक विशाल गुफा थी। जमे हुए जहाज और शव एक साथ उलझे हुए थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…이게 대체 무슨.",
						"english": "...What in the world is this?",
						"japanese": "…一体これは何だ。",
						"chinese": "……这到底是什么。",
						"french": "...Mais qu'est-ce que c'est que ça ?",
						"spanish": "...¿Qué demonios es esto?",
						"vietnamese": "...Cái quái gì thế này.",
						"thai": "...นี่มันอะไรกันเนี่ย",
						"hindi": "...यह सब क्या है।"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벽마다 사람 형상이 반쯤 녹아 박혀 있었다.",
						"english": "Half-melted human figures were embedded in every wall.",
						"japanese": "壁には人型の影が半ば溶けて埋め込まれていた。",
						"chinese": "墙壁上嵌入了半融化的人形。",
						"french": "Des formes humaines à moitié fondues étaient incrustées dans chaque mur.",
						"spanish": "Figuras humanas medio derretidas estaban incrustadas en cada pared.",
						"vietnamese": "Những hình người nửa tan chảy bị nhúng vào mỗi bức tường.",
						"thai": "รูปร่างมนุษย์ที่ละลายไปครึ่งหนึ่งถูกฝังอยู่ในทุกผนัง",
						"hindi": "दीवारों में आधे पिघले हुए मानव आकृतियाँ जड़ी हुई थीं।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "온몸이… 서늘해지는 기분이야.",
						"english": "My whole body... feels chilling.",
						"japanese": "全身が…ひんやりする気分だ。",
						"chinese": "我的全身……感觉凉飕飕的。",
						"french": "Mon corps entier... se sent glacé.",
						"spanish": "Todo mi cuerpo... se siente helado.",
						"vietnamese": "Toàn thân tôi... cảm thấy ớn lạnh.",
						"thai": "ทั้งตัวของฉัน... รู้สึกหนาวสั่น",
						"hindi": "मेरा पूरा शरीर... ठंडा महसूस हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "새로운 기록을 시작한다. 잊힌 자들의 흔적을 찾아서.",
						"english": "Starting a new record. In search of the forgotten's traces.",
						"japanese": "新しい記録を開始する。忘れられた者たちの痕跡を探して。",
						"chinese": "开始新的记录。寻找被遗忘者的痕迹。",
						"french": "Début d'un nouveau journal. À la recherche des traces des oubliés.",
						"spanish": "Inicio un nuevo registro. En busca de las huellas de los olvidados.",
						"vietnamese": "Bắt đầu một kỷ lục mới. Đi tìm dấu vết của những người bị lãng quên.",
						"thai": "เริ่มบันทึกใหม่ เพื่อค้นหาร่องรอยของผู้ถูกลืม",
						"hindi": "एक नया रिकॉर्ड शुरू कर रहा हूँ। भूले हुए लोगों के निशानों की तलाश में।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "에이라. 여긴… 사람들이 얼어붙은 건가?",
						"english": "Aira. Are these... frozen people?",
						"japanese": "アイラ。ここは…人が凍りついているのか？",
						"chinese": "艾拉。这里……是人被冻住了吗？",
						"french": "Aira. Est-ce que ce sont... des gens gelés ?",
						"spanish": "Aira. ¿Son estos... gente congelada?",
						"vietnamese": "Aira. Đây là... những người bị đóng băng sao?",
						"thai": "ไอรา ที่นี่... ผู้คนถูกแช่แข็งอย่างนั้นหรือ?",
						"hindi": "ऐरा। क्या ये... जमे हुए लोग हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아니. 이건 안식이 아니야.",
						"english": "No. This is no rest.",
						"japanese": "いや。これは安息ではない。",
						"chinese": "不。这不是安息。",
						"french": "Non. Ce n'est pas un repos.",
						"spanish": "No. Esto no es un descanso.",
						"vietnamese": "Không. Đây không phải là sự yên nghỉ.",
						"thai": "ไม่ นี่ไม่ใช่การพักผ่อน",
						"hindi": "नहीं। यह आराम नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "무언가에… 흡수당한 껍데기야.",
						"english": "A shell... absorbed by something.",
						"japanese": "何かに… 吸収された抜け殻だ。",
						"chinese": "是被某种东西… 吸收的躯壳。",
						"french": "C'est une coquille... absorbée par quelque chose.",
						"spanish": "Es una cáscara... absorbida por algo.",
						"vietnamese": "Là một cái vỏ rỗng... bị thứ gì đó hấp thụ.",
						"thai": "มันคือเปลือก... ที่ถูกบางสิ่งดูดกลืน",
						"hindi": "यह किसी चीज़ द्वारा… सोखा हुआ एक खोल है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "껍데기라고? 그럼 안에 있는 건…?",
						"english": "A shell? Then what's inside...?",
						"japanese": "抜け殻だと？じゃあ中にいるのは…？",
						"chinese": "躯壳？那里面是什么…？",
						"french": "Une coquille ? Alors, qu'y a-t-il à l'intérieur...?",
						"spanish": "¿Una cáscara? Entonces, ¿qué hay dentro...?",
						"vietnamese": "Vỏ rỗng sao? Vậy bên trong là gì...?",
						"thai": "เปลือก? แล้วข้างในคืออะไร...?",
						"hindi": "खोल? तो अंदर क्या है…?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "흔적만 남은 채… 온기마저 빼앗긴 것들.",
						"english": "Only traces remain... things stripped even of their warmth.",
						"japanese": "痕跡だけが残り… 温もりさえ奪われたもの。",
						"chinese": "只剩下痕迹… 连一丝温暖都被夺走。",
						"french": "Seules des traces subsistent... des choses dépouillées même de leur chaleur.",
						"spanish": "Solo quedan rastros... cosas despojadas incluso de su calor.",
						"vietnamese": "Chỉ còn lại dấu vết... những thứ bị tước đoạt cả hơi ấm.",
						"thai": "เหลือเพียงร่องรอย... สิ่งที่ถูกพรากแม้กระทั่งความอบอุ่น",
						"hindi": "केवल निशान बचे हैं… जिनसे गर्माहट भी छीन ली गई है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 룬의 형태… 기억해야 해.",
						"english": "This rune's form... I must remember it.",
						"japanese": "このルーンの形… 覚えておかないと。",
						"chinese": "这符文的形状… 必须记住。",
						"french": "La forme de cette rune... je dois m'en souvenir.",
						"spanish": "La forma de esta runa... debo recordarla.",
						"vietnamese": "Hình dạng của phù hiệu này... phải ghi nhớ.",
						"thai": "รูปร่างของรูนนี้... ต้องจดจำไว้",
						"hindi": "इस रून का आकार… याद रखना होगा।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"id": 1
		}
	],
	"prologue": {
		"korean": [
			"잔해탑 깊은 곳, 얼음과 배가 뒤엉킨 공동이 펼쳐졌다.",
			"차가운 정적 속, 벽마다 사람 형상들이 박혀 있었다.",
			"그들은 안식하지 못하고, 무엇인가에 잠식된 듯 보였다.",
			"탐험대는 온기를 빼앗기는 곳으로 들어섰다. 잊힌 흔적을 밟으며."
		],
		"english": [
			"Deep within the Wreckage Tower, a cavern of ice and ships intertwined unfurled.",
			"In the cold silence, human figures were embedded in every wall.",
			"They found no rest, appearing to be consumed by something.",
			"The expedition team stepped into a place where warmth was stolen, treading upon forgotten traces."
		],
		"japanese": [
			"残骸の塔の奥深く、氷と船が絡み合う空洞が広がっていた。",
			"冷たい静寂の中、壁には人型の影がいくつも埋め込まれていた。",
			"彼らは安息を見つけられず、何かに侵食されているようだった。",
			"探検隊は温もりを奪われる場所へ足を踏み入れた。忘れ去られた痕跡を踏みしめながら。"
		],
		"chinese": [
			"在残骸之塔深处，冰与船只交织的空洞展现开来。",
			"在冰冷的寂静中，墙壁上嵌入了人形。",
			"他们未能安息，似乎被某种东西侵蚀了。",
			"探险队踏入了一个失去温暖的地方，踩着被遗忘的痕迹。"
		],
		"french": [
			"Au plus profond de la Tour des Débris, une caverne de glace et de navires entrelacés se déployait.",
			"Dans le silence glacial, des formes humaines étaient incrustées dans chaque mur.",
			"Ils ne trouvaient aucun repos, semblant être consumés par quelque chose.",
			"L'équipe d'expédition pénétra dans un lieu où la chaleur était volée, marchant sur des traces oubliées."
		],
		"spanish": [
			"En lo profundo de la Torre de los Escombros, una caverna de hielo y barcos entrelazados se desplegaba.",
			"En el frío silencio, figuras humanas estaban incrustadas en cada pared.",
			"No encontraban descanso, pareciendo ser consumidos por algo.",
			"El equipo de expedición entró en un lugar donde el calor era robado, pisando huellas olvidadas."
		],
		"vietnamese": [
			"Sâu trong Tháp Tàn Tích, một hang động băng giá và những con tàu đan xen mở ra.",
			"Trong sự tĩnh lặng lạnh lẽo, những hình người bị nhúng vào mỗi bức tường.",
			"Họ không tìm thấy sự yên nghỉ, dường như bị một thứ gì đó ăn mòn.",
			"Đoàn thám hiểm bước vào một nơi bị cướp đi hơi ấm, giẫm lên những dấu vết bị lãng quên."
		],
		"thai": [
			"ลึกเข้าไปในหอคอยซากปรักหักพัง ถ้ำที่เต็มไปด้วยน้ำแข็งและเรือที่พันกันยุ่งเหยิงได้เผยโฉมออกมา",
			"ในความเงียบอันเยือกเย็น รูปทรงมนุษย์ถูกฝังอยู่ในทุกผนัง",
			"พวกเขาไม่พบการพักผ่อน ดูเหมือนถูกบางสิ่งกลืนกิน",
			"ทีมสำรวจก้าวเข้าสู่สถานที่ที่ความอบอุ่นถูกช่วงชิง เหยียบย่ำร่องรอยที่ถูกลืมเลือน"
		],
		"hindi": [
			"अवशेष टॉवर की गहराई में, बर्फ और जहाजों का एक उलझा हुआ गुफा खुल गया।",
			"ठंडी खामोशी में, दीवारों में मानव आकृतियाँ जड़ी हुई थीं।",
			"उन्हें आराम नहीं मिला, वे किसी चीज़ से ग्रस्त लग रहे थे।",
			"अभियान दल एक ऐसी जगह में दाखिल हुआ जहाँ गर्मी छीन ली गई थी, भूले हुए निशानों पर चलते हुए।"
		]
	}
} as const;
