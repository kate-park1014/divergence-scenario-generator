export const scenario_snowy_haraldr_31_04 = {
	"scenario_id": "snowy_haraldr_31_04",
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "새로운 깃발이 꽂힌 땅. 그 아래는 굳게 얼어붙었다.",
						"english": "A land with new flags. Beneath, it's frozen solid.",
						"japanese": "新しい旗が立てられた土地。その下は固く凍りついていた。",
						"chinese": "插着新旗帜的土地。下面被冻得结结实实。",
						"french": "Une terre aux nouvelles couleurs. En dessous, c'est gelé.",
						"spanish": "Una tierra con nuevas banderas. Debajo, está congelada.",
						"vietnamese": "Một vùng đất với những lá cờ mới. Bên dưới, nó đóng băng cứng ngắc.",
						"thai": "ดินแดนที่มีธงใหม่ ปักอยู่ข้างใต้ มันแข็งเป็นน้ำแข็ง",
						"hindi": "नई झंडों वाली ज़मीन। नीचे, वह जम चुकी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기도 깃발이… 대체 어디까지?",
						"english": "Flags here too… How far do they go?",
						"japanese": "ここにも旗が…一体どこまで？",
						"chinese": "这里也有旗帜……到底到哪里了？",
						"french": "Des drapeaux ici aussi… Jusqu'où vont-ils ?",
						"spanish": "Banderas aquí también… ¿Hasta dónde llegan?",
						"vietnamese": "Ở đây cũng có cờ... Đến tận đâu vậy?",
						"thai": "มีธงที่นี่ด้วย… ไปถึงไหนกันนะ?",
						"hindi": "यहाँ भी झंडे… ये कहाँ तक फैले हैं?"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…이 문양. 고대 전쟁 깃발과 같아.",
						"english": "…This emblem. It's like an ancient war banner.",
						"japanese": "…この紋様。古代の戦旗と同じだ。",
						"chinese": "……这个图案。和古代的战旗一样。",
						"french": "…Cet emblème. C'est comme une ancienne bannière de guerre.",
						"spanish": "…Este emblema. Es como una antigua bandera de guerra.",
						"vietnamese": "…Biểu tượng này. Nó giống như một lá cờ chiến cổ đại.",
						"thai": "…สัญลักษณ์นี้ เหมือนธงรบโบราณเลย",
						"hindi": "…यह प्रतीक। यह एक प्राचीन युद्ध ध्वज जैसा है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 땅 아래에 뭔가 묻혀 있어.",
						"english": "Something is buried beneath this land.",
						"japanese": "この土地の下に何かが埋まっている。",
						"chinese": "这片土地下面埋藏着什么。",
						"french": "Quelque chose est enterré sous cette terre.",
						"spanish": "Algo está enterrado bajo esta tierra.",
						"vietnamese": "Có thứ gì đó được chôn dưới vùng đất này.",
						"thai": "มีบางอย่างถูกฝังอยู่ใต้ดินแดนนี้",
						"hindi": "इस ज़मीन के नीचे कुछ दबा हुआ है।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 땅. 에이라는 깃발 아래 흙을 파헤쳤다.",
						"english": "Frozen land. Aira dug through the soil under the flag.",
						"japanese": "凍てついた大地。アイラは旗の下の土を掘り起こした。",
						"chinese": "冰冻的土地。艾拉在旗帜下挖开了泥土。",
						"french": "Terre gelée. Aira a creusé le sol sous le drapeau.",
						"spanish": "Tierra congelada. Aira excavó la tierra bajo la bandera.",
						"vietnamese": "Vùng đất đóng băng. Aira đào xuyên qua lớp đất dưới lá cờ.",
						"thai": "ดินแดนที่เยือกแข็ง ไอราขุดคุ้ยดินใต้ธง",
						"hindi": "जमी हुई ज़मीन। ऐरा ने झंडे के नीचे मिट्टी खोदी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기 룬 문자… '경쟁자'?",
						"english": "Runes here… 'Competitors'?",
						"japanese": "ここにルーン文字…「競争者」？",
						"chinese": "这里的符文……是“竞争者”？",
						"french": "Des runes ici… 'Concurrents' ?",
						"spanish": "Runas aquí… ¿'Competidores'?",
						"vietnamese": "Những chữ rune ở đây... 'Đối thủ'?",
						"thai": "อักษรรูนที่นี่… 'คู่แข่ง'?",
						"hindi": "यहाँ रून्स… 'प्रतिद्वंद्वी'?"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "경쟁자?",
						"english": "Rival?",
						"japanese": "競争相手？",
						"chinese": "竞争者？",
						"french": "Rival ?",
						"spanish": "¿Rival?",
						"vietnamese": "Đối thủ?",
						"thai": "คู่แข่ง?",
						"hindi": "प्रतिद्वंद्वी?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "Haraldr가 패배시킨 자들을 이렇게 불렀어.",
						"english": "Haraldr called those he defeated 'rivals'.",
						"japanese": "ハラルドルは倒した者たちを「競争相手」と呼んだ。",
						"chinese": "哈拉尔德把被他打败的人称为“竞争者”。",
						"french": "Haraldr appelait ceux qu'il battait des 'rivaux'.",
						"spanish": "Haraldr llamaba 'rivales' a los que derrotaba.",
						"vietnamese": "Haraldr gọi những kẻ mà hắn đánh bại là 'đối thủ'.",
						"thai": "ฮาราลด์เรียกผู้ที่เขาเอาชนะว่า 'คู่แข่ง'",
						"hindi": "हेराल्ड्र ने जिन्हें हराया, उन्हें 'प्रतिद्वंद्वी' कहा।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "eira",
					"content": {
						"korean": "단순한 판매 경쟁이 아니야.",
						"english": "It's not just a sales competition.",
						"japanese": "これは単なる販売競争ではない。",
						"chinese": "这不仅仅是销售竞争。",
						"french": "Ce n'est pas qu'une simple compétition de vente.",
						"spanish": "No es solo una competición de ventas.",
						"vietnamese": "Đây không chỉ là một cuộc cạnh tranh doanh số.",
						"thai": "นี่ไม่ใช่แค่การแข่งขันด้านการขาย",
						"hindi": "यह सिर्फ बिक्री की प्रतियोगिता नहीं है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 깃발 아래. 에이라의 손에 들린 낡은 유품.",
						"english": "Under another flag. An old relic in Eira's hand.",
						"japanese": "もう一つの旗の下。エイラの手に握られた古い遺品。",
						"chinese": "在另一面旗帜下。艾拉手中拿着一件旧遗物。",
						"french": "Sous une autre bannière. Une vieille relique dans la main d'Eira.",
						"spanish": "Bajo otra bandera. Una vieja reliquia en la mano de Eira.",
						"vietnamese": "Dưới một lá cờ khác. Một di vật cũ trong tay Eira.",
						"thai": "ใต้ธงอีกผืนหนึ่ง ของเก่าแก่ในมือของเอร่า",
						"hindi": "एक और झंडे के नीचे। एरा के हाथ में एक पुरानी निशानी।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이건… 부러진 검의 파편.",
						"english": "This is... a fragment of a broken sword.",
						"japanese": "これは…折れた剣の破片。",
						"chinese": "这是……断剑的碎片。",
						"french": "C'est... un fragment d'épée brisée.",
						"spanish": "Esto es... un fragmento de una espada rota.",
						"vietnamese": "Đây là... một mảnh vỡ của thanh kiếm gãy.",
						"thai": "นี่คือ...ชิ้นส่วนของดาบหัก",
						"hindi": "यह... टूटी हुई तलवार का एक टुकड़ा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 땅에서 전투가 벌어졌다는 건가?",
						"english": "Was there a battle on this land?",
						"japanese": "この地で戦闘があったのか？",
						"chinese": "这片土地上发生过战斗吗？",
						"french": "Une bataille a-t-elle eu lieu sur cette terre ?",
						"spanish": "¿Hubo una batalla en esta tierra?",
						"vietnamese": "Có phải đã có một trận chiến trên vùng đất này không?",
						"thai": "มีการต่อสู้บนดินแดนนี้หรือเปล่า?",
						"hindi": "क्या इस भूमि पर युद्ध हुआ था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "기록에 따르면, Haraldr는 '판매'를 명목으로 이곳을 '점령'했어.",
						"english": "According to records, Haraldr 'occupied' this place under the guise of 'sales'.",
						"japanese": "記録によると、ハラルドルは「販売」を名目にここを「占領」した。",
						"chinese": "根据记载，哈拉尔德以“销售”为名“占领”了这里。",
						"french": "Selon les registres, Haraldr a 'occupé' cet endroit sous prétexte de 'ventes'.",
						"spanish": "Según los registros, Haraldr 'ocupó' este lugar bajo el pretexto de 'ventas'.",
						"vietnamese": "Theo ghi chép, Haraldr đã 'chiếm đóng' nơi này dưới danh nghĩa 'doanh số'.",
						"thai": "ตามบันทึก ฮาราลด์ 'ยึดครอง' ที่นี่ภายใต้หน้ากากของ 'การขาย'",
						"hindi": "रिकॉर्ड के अनुसार, हेराल्ड्र ने 'बिक्री' के बहाने इस जगह पर 'कब्जा' कर लिया था।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그의 경쟁자들은… 모두 이 땅에 묻혔지.",
						"english": "His rivals... were all buried in this land.",
						"japanese": "彼の競争相手は…皆この地に埋められた。",
						"chinese": "他的竞争者们……都埋葬在这片土地上。",
						"french": "Ses rivaux... ont tous été enterrés dans cette terre.",
						"spanish": "Sus rivales... fueron todos enterrados en esta tierra.",
						"vietnamese": "Những đối thủ của hắn... đều bị chôn vùi trên mảnh đất này.",
						"thai": "คู่แข่งของเขา...ทุกคนถูกฝังอยู่ในดินแดนนี้",
						"hindi": "उसके प्रतिद्वंद्वी... सभी इस भूमि में दफनाए गए थे।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점령…?",
						"english": "Occupation...?",
						"japanese": "占領…？",
						"chinese": "占领……？",
						"french": "Occupation... ?",
						"spanish": "¿Ocupación...?",
						"vietnamese": "Chiếm đóng...?",
						"thai": "การยึดครอง...?",
						"hindi": "कब्जा...?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가장 깊은 깃발 아래. 땅은 생명을 잃은 듯 차가웠다.",
						"english": "Under the deepest flag. The land was cold as if it had lost its life.",
						"japanese": "最も深い旗の下。大地は命を失ったかのように冷たかった。",
						"chinese": "在最深的旗帜下。大地冰冷，仿佛失去了生命。",
						"french": "Sous la bannière la plus profonde. La terre était froide comme si elle avait perdu sa vie.",
						"spanish": "Bajo la bandera más profunda. La tierra estaba fría como si hubiera perdido su vida.",
						"vietnamese": "Dưới lá cờ sâu nhất. Mặt đất lạnh lẽo như đã mất đi sự sống.",
						"thai": "ใต้ธงที่ลึกที่สุด แผ่นดินเย็นชาเหมือนไร้ชีวิต",
						"hindi": "सबसे गहरे झंडे के नीचे। धरती ऐसी ठंडी थी मानो उसने अपना जीवन खो दिया हो।"
					}
				},
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…차가워. 이 땅 전체가 죽어가고 있어.",
						"english": "...It's cold. This entire land is dying.",
						"japanese": "…冷たい。この地全体が死につつある。",
						"chinese": "…好冷。这片大地正在死去。",
						"french": "...C'est froid. Cette terre entière est en train de mourir.",
						"spanish": "...Está frío. Toda esta tierra está muriendo.",
						"vietnamese": "...Lạnh quá. Cả vùng đất này đang chết dần.",
						"thai": "...หนาวจัง ดินแดนทั้งหมดนี้กำลังจะตาย",
						"hindi": "...ठंडा है। यह पूरी भूमि मर रही है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기 룬 기록… '광전사의 호령'.",
						"english": "Rune record here... 'Berserker's Roar'.",
						"japanese": "ここにルーンの記録…『狂戦士の雄叫び』。",
						"chinese": "这里的符文记录……'狂战士的咆哮'。",
						"french": "Un enregistrement runique ici... 'Le Rugissement du Berserker'.",
						"spanish": "Registro rúnico aquí... 'El Rugido del Berserker'.",
						"vietnamese": "Ghi chép rune ở đây... 'Tiếng gầm của Cuồng Chiến Sĩ'.",
						"thai": "บันทึกรูนที่นี่... 'เสียงคำรามของเบอร์เซิร์กเกอร์'",
						"hindi": "यहां रूण रिकॉर्ड... 'बर्सेर्कर की दहाड़'।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "장사꾼이 아니라… 전사였군.",
						"english": "Not a merchant... but a warrior.",
						"japanese": "商人ではなく…戦士だったか。",
						"chinese": "不是商人……是战士啊。",
						"french": "Pas un marchand... mais un guerrier.",
						"spanish": "No era un mercader... sino un guerrero.",
						"vietnamese": "Không phải thương nhân... mà là một chiến binh.",
						"thai": "ไม่ใช่พ่อค้า... แต่เป็นนักรบ",
						"hindi": "एक व्यापारी नहीं... बल्कि एक योद्धा था।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "Haraldr에게 판매는 곧 전투였어. 그의 깃발은… 승리의 증거.",
						"english": "For Haraldr, selling was combat. His banner... proof of victory.",
						"japanese": "Haraldrにとって、販売は戦いだった。彼の旗は…勝利の証。",
						"chinese": "对Haraldr来说，销售就是战斗。他的旗帜……是胜利的证明。",
						"french": "Pour Haraldr, vendre était un combat. Sa bannière... une preuve de victoire.",
						"spanish": "Para Haraldr, vender era combatir. Su estandarte... prueba de victoria.",
						"vietnamese": "Đối với Haraldr, bán hàng là chiến đấu. Lá cờ của hắn... bằng chứng của chiến thắng.",
						"thai": "สำหรับ Haraldr การขายคือการต่อสู้ ธงของเขา... คือหลักฐานของชัยชนะ",
						"hindi": "Haraldr के लिए, बेचना ही युद्ध था। उसका झंडा... जीत का प्रमाण।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그리고 깃발 아래는 패배한 '경쟁자'들의 무덤이야.",
						"english": "And beneath the banner lies the tomb of vanquished 'competitors'.",
						"japanese": "そして旗の下には、敗北した『競争相手』たちの墓がある。",
						"chinese": "在旗帜之下，是战败的'竞争者'们的坟墓。",
						"french": "Et sous la bannière se trouve la tombe des 'concurrents' vaincus.",
						"spanish": "Y bajo el estandarte yace la tumba de los 'competidores' vencidos.",
						"vietnamese": "Và dưới lá cờ là ngôi mộ của những 'đối thủ' đã bị đánh bại.",
						"thai": "และใต้ธงคือหลุมฝังศพของ 'คู่แข่ง' ที่พ่ายแพ้",
						"hindi": "और झंडे के नीचे हारे हुए 'प्रतिद्वंद्वियों' की कब्र है।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 '경쟁자'여. 이곳은 내게 팔렸다.",
						"english": "Insignificant 'competitor'. This place has been sold to me.",
						"japanese": "些末な「競争者」よ。ここは私に売られた。",
						"chinese": "渺小的“竞争者”。这个地方已经卖给我了。",
						"french": "Insignifiant \"concurrent\". Cet endroit m'a été vendu.",
						"spanish": "Insignificante \"competidor\". Este lugar me ha sido vendido.",
						"vietnamese": "'Đối thủ' hèn mọn. Nơi đây đã bị bán cho ta rồi.",
						"thai": "\"คู่แข่ง\" ที่ไร้ค่า ที่นี่ถูกขายให้ข้าแล้ว",
						"hindi": "तुच्छ 'प्रतियोगी'। यह जगह मुझे बेच दी गई है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "네 영혼도 곧 얼어붙을 것이다.",
						"english": "Your soul will soon freeze over too.",
						"japanese": "お前の魂もすぐに凍りつくだろう。",
						"chinese": "你的灵魂也很快会冻结。",
						"french": "Ton âme gèlera bientôt aussi.",
						"spanish": "Tu alma también se congelará pronto.",
						"vietnamese": "Linh hồn ngươi cũng sẽ sớm đóng băng thôi.",
						"thai": "ดวงวิญญาณของเจ้าก็จะแข็งตัวในไม่ช้า",
						"hindi": "तुम्हारी आत्मा भी जल्द ही जम जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 결코 굴복하지 않아.",
						"english": "...It's not over yet. I'll never surrender.",
						"japanese": "…まだ終わってない。決して屈服しない。",
						"chinese": "……还没结束。我绝不屈服。",
						"french": "...Ce n'est pas encore fini. Je ne me soumettrai jamais.",
						"spanish": "...Aún no ha terminado. Nunca me rendiré.",
						"vietnamese": "...Vẫn chưa kết thúc đâu. Ta sẽ không bao giờ khuất phục.",
						"thai": "...ยังไม่จบหรอก ข้าจะไม่มีวันยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं कभी हार नहीं मानूंगा।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 사라지는 건 나 하나가 아니야.",
						"english": "Heh heh... I'm not the only one to disappear.",
						"japanese": "クク… 消えるのは私一人ではない。",
						"chinese": "呵呵… 消失的并非只有我一个。",
						"french": "Huhu... Je ne suis pas le seul à disparaître.",
						"spanish": "Jeje... No soy el único que desaparecerá.",
						"vietnamese": "Khà khà... Không chỉ mình ta biến mất đâu.",
						"thai": "ฮึ่ม... ไม่ใช่แค่ข้าคนเดียวที่จะหายไป",
						"hindi": "हँस हँस... मैं अकेला नहीं हूँ जो गायब होगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "Haraldr의 '영업'은 계속된다.",
						"english": "Haraldr's 'business' continues.",
						"japanese": "ハラルドルの「営業」は続く。",
						"chinese": "哈拉尔德的“生意”仍在继续。",
						"french": "Le \"commerce\" d'Haraldr continue.",
						"spanish": "El \"negocio\" de Haraldr continúa.",
						"vietnamese": "'Hoạt động kinh doanh' của Haraldr vẫn tiếp diễn.",
						"thai": "\"ธุรกิจ\" ของ Haraldr ยังคงดำเนินต่อไป",
						"hindi": "हेरल्ड का 'व्यवसाय' जारी है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…사라지는 건 Haraldr다.",
						"english": "...It is Haraldr who disappears.",
						"japanese": "…消えるのはハラルドルだ。",
						"chinese": "……消失的是哈拉尔德。",
						"french": "...C'est Haraldr qui disparaît.",
						"spanish": "...Es Haraldr quien desaparecerá.",
						"vietnamese": "...Haraldr sẽ biến mất.",
						"thai": "...Haraldr คือผู้ที่จะหายไป",
						"hindi": "...हेरल्ड ही गायब हो रहा है।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이자의 죽음도 기록한다. Haraldr의 '최고의 상품'이 쓰러졌다.",
						"english": "His death is also recorded. Haraldr's 'finest merchandise' has fallen.",
						"japanese": "この者の死も記録する。ハラルドルの「最高の商品」が倒れた。",
						"chinese": "此人的死亡也被记录。哈拉尔德的“最佳商品”已倒下。",
						"french": "Sa mort est aussi enregistrée. La \"meilleure marchandise\" d'Haraldr est tombée.",
						"spanish": "Su muerte también queda registrada. El \"mejor producto\" de Haraldr ha caído.",
						"vietnamese": "Cái chết của kẻ này cũng được ghi lại. 'Món hàng tuyệt nhất' của Haraldr đã gục ngã.",
						"thai": "ความตายของคนผู้นี้ก็ถูกบันทึกไว้เช่นกัน \"สินค้าชั้นเยี่ยม\" ของ Haraldr ล้มลงแล้ว",
						"hindi": "उसकी मृत्यु भी दर्ज की जाती है। हेरल्ड का 'सर्वश्रेष्ठ माल' गिर गया है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "깃발 아래 묻힌 이름들. 이제, Haraldr의 이름을 지울 때였다.",
						"english": "Names buried beneath flags. Now, it was time to erase Haraldr's name.",
						"japanese": "旗の下に埋もれた名々。今、ハラルドルの名を消す時だった。",
						"chinese": "旗帜下埋葬的名字。现在，是时候抹去哈拉尔德的名字了。",
						"french": "Des noms enfouis sous les drapeaux. Il était temps d'effacer le nom d'Haraldr.",
						"spanish": "Nombres enterrados bajo banderas. Ahora, era el momento de borrar el nombre de Haraldr.",
						"vietnamese": "Những cái tên bị chôn vùi dưới lá cờ. Giờ là lúc xóa tên Haraldr.",
						"thai": "ชื่อที่ถูกฝังอยู่ใต้ธง ตอนนี้ถึงเวลาที่จะลบชื่อของ Haraldr แล้ว",
						"hindi": "झंडों के नीचे दबे नाम। अब, हेरल्ड के नाम को मिटाने का समय था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 심장부. 거대한 그림자가 나타났다.",
						"english": "Frozen heartland. A colossal shadow appeared.",
						"japanese": "凍てついた心臓部。巨大な影が現れた。",
						"chinese": "冰封的中心地带。一个巨大的黑影出现了。",
						"french": "Cœur gelé. Une ombre colossale est apparue.",
						"spanish": "Corazón congelado. Una sombra colosal apareció.",
						"vietnamese": "Trái tim đóng băng. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ใจกลางที่เยือกแข็ง เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "जमी हुई हृदयभूमि। एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "새로운 '경쟁자'인가. 이곳도 내 '영업' 구역이다.",
						"english": "A new 'competitor'? This is my 'territory' too.",
						"japanese": "新たな『競争相手』か。ここも私の『営業』区域だ。",
						"chinese": "是新的'竞争者'吗？这里也是我的'营业'区域。",
						"french": "Un nouveau 'concurrent' ? C'est aussi mon 'territoire'.",
						"spanish": "¿Un nuevo 'competidor'? Esta es también mi 'zona de ventas'.",
						"vietnamese": "Một 'đối thủ' mới ư? Đây cũng là khu vực 'kinh doanh' của ta.",
						"thai": " 'คู่แข่ง' ใหม่หรือ? ที่นี่ก็คือ 'อาณาเขต' ของฉันเช่นกัน",
						"hindi": "एक नया 'प्रतिद्वंद्वी'? यह मेरा 'व्यापार' क्षेत्र भी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "경쟁? 네놈에게 당한 자들은 모두 죽었다!",
						"english": "Competition? All who stood against you are dead!",
						"japanese": "競争だと？貴様に立ち向かった者たちは皆死んだ！",
						"chinese": "竞争？被你击败的人都死了！",
						"french": "Compétition ? Tous ceux qui t'ont affronté sont morts !",
						"spanish": "¿Competencia? ¡Todos los que se enfrentaron a ti están muertos!",
						"vietnamese": "Cạnh tranh? Tất cả những kẻ đối đầu với ngươi đều đã chết!",
						"thai": "การแข่งขัน? ทุกคนที่ต่อต้านเจ้าตายหมดแล้ว!",
						"hindi": "प्रतिस्पर्धा? जो भी तुमसे भिड़ा, सब मर गए!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓸모없는 것들이었지. '최고의 상품'만이 살아남는 법.",
						"english": "They were useless. Only the 'best product' survives.",
						"japanese": "役立たずだったな。『最高の品』だけが生き残るものだ。",
						"chinese": "他们都是废物。只有'最好的商品'才能生存下来。",
						"french": "Ils étaient inutiles. Seul le 'meilleur produit' survit.",
						"spanish": "Eran inútiles. Solo el 'mejor producto' sobrevive.",
						"vietnamese": "Chúng vô dụng. Chỉ 'sản phẩm tốt nhất' mới sống sót.",
						"thai": "พวกมันไร้ประโยชน์ 'สินค้าที่ดีที่สุด' เท่านั้นที่จะอยู่รอด",
						"hindi": "वे बेकार थे। केवल 'सर्वश्रेष्ठ उत्पाद' ही जीवित रहता है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…이자의 기록, 탐욕스러운 학살자.",
						"english": "...His record, a greedy butcher.",
						"japanese": "…こいつの記録、貪欲な虐殺者。",
						"chinese": "……此人的记录，贪婪的屠杀者。",
						"french": "...Son dossier, un boucher avide.",
						"spanish": "...Su registro, un carnicero codicioso.",
						"vietnamese": "...Ghi chép về kẻ này, một tên đồ tể tham lam.",
						"thai": "...บันทึกของผู้นี้ นักฆ่าผู้โลภมาก",
						"hindi": "...इसका रिकॉर्ड, एक लालची कसाई।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네놈의 '상품'을 박살 내주마.",
						"english": "I'll smash your 'merchandise'.",
						"japanese": "貴様の「商品」を粉砕してやる。",
						"chinese": "我要砸烂你的“商品”。",
						"french": "Je vais détruire ta \"marchandise\".",
						"spanish": "Destrozaré tu \"mercancía\".",
						"vietnamese": "Ta sẽ đập nát 'món hàng' của ngươi.",
						"thai": "ข้าจะทำลาย \"สินค้า\" ของแกให้แหลกเป็นผุยผง",
						"hindi": "मैं तुम्हारी 'वस्तु' को चकनाचूर कर दूँगा।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원, 이제 온통 깃발 뿐이었다.",
			"Haraldr의 '영광스러운 프랜차이즈' 아래, 모든 것이 상품이 되었다.",
			"그러나 깃발 아래에는, 승자의 논리에서 지워진 이름들이 있었다.",
			"에이라는 그들의 역사를 기록하려 했다. 잊힌 '경쟁자'들의 이름을 찾아."
		],
		"english": [
			"The snowfield was now covered with flags.",
			"Under Haraldr's 'Glorious Franchise', everything became a commodity.",
			"But beneath the flags, there were names erased from the victor's logic.",
			"Aira sought to record their history. To find the names of the forgotten 'competitors'."
		],
		"japanese": [
			"雪原は今や旗一色だった。",
			"Haraldrの「栄光のフランチャイズ」の下、すべてが商品と化した。",
			"しかし、旗の下には、勝者の論理から消された名前があった。",
			"アイラは彼らの歴史を記録しようとした。忘れられた「競争者」たちの名を探して。"
		],
		"chinese": [
			"雪原上，现在只剩下旗帜。",
			"在哈拉尔德的“光荣特许”之下，一切都变成了商品。",
			"然而，在旗帜之下，有些名字从胜利者的逻辑中被抹去了。",
			"艾拉试图记录他们的历史。寻找那些被遗忘的“竞争者”的名字。"
		],
		"french": [
			"L'étendue enneigée n'était plus qu'un champ de drapeaux.",
			"Sous la 'Franchise Glorieuse' de Haraldr, tout devint une marchandise.",
			"Mais sous les drapeaux, il y avait des noms effacés de la logique du vainqueur.",
			"Aira cherchait à enregistrer leur histoire. À retrouver les noms des 'concurrents' oubliés."
		],
		"spanish": [
			"El campo nevado ahora estaba cubierto de banderas.",
			"Bajo la 'Gloriosa Franquicia' de Haraldr, todo se convirtió en una mercancía.",
			"Pero bajo las banderas, había nombres borrados de la lógica del vencedor.",
			"Aira intentó registrar su historia. Para encontrar los nombres de los 'competidores' olvidados."
		],
		"vietnamese": [
			"Đồng tuyết giờ đây chỉ toàn cờ.",
			"Dưới 'Thương hiệu vinh quang' của Haraldr, mọi thứ đều trở thành hàng hóa.",
			"Nhưng dưới những lá cờ, có những cái tên đã bị xóa khỏi logic của kẻ chiến thắng.",
			"Aira đã cố gắng ghi lại lịch sử của họ. Để tìm tên của những 'đối thủ' đã bị lãng quên."
		],
		"thai": [
			"ทุ่งหิมะบัดนี้มีแต่ธง",
			"ภายใต้ 'แฟรนไชส์อันรุ่งโรจน์' ของ Haraldr ทุกสิ่งกลายเป็นสินค้า",
			"แต่ใต้ธงเหล่านั้น มีชื่อที่ถูกลบออกจากตรรกะของผู้ชนะ",
			"ไอราพยายามบันทึกประวัติศาสตร์ของพวกเขา เพื่อค้นหาชื่อของ 'คู่แข่ง' ที่ถูกลืม"
		],
		"hindi": [
			"बर्फ़ का मैदान अब झंडों से ढका हुआ था।",
			"हरलदर की 'गौरवशाली फ़्रैंचाइज़ी' के तहत, सब कुछ एक वस्तु बन गया।",
			"लेकिन झंडों के नीचे, विजेता के तर्क से मिटा दिए गए नाम थे।",
			"ऐरा उनके इतिहास को दर्ज करना चाहती थी। भूले हुए 'प्रतिद्वंद्वियों' के नाम खोजने के लिए।"
		]
	}
} as const;
