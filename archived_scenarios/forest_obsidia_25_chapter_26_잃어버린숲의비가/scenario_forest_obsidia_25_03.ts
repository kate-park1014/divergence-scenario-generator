export const scenario_forest_obsidia_25_03 = {
	"scenario_id": "forest_obsidia_25_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
						"korean": "고대 아마존 부족의 유적, 비운의 사원이 모습을 드러냈다.",
						"english": "The ruins of an ancient Amazonian tribe, the Temple of Misfortune, revealed itself.",
						"japanese": "古代アマゾン部族の遺跡、不運の神殿がその姿を現した。",
						"chinese": "古代亚马逊部落的遗迹，不幸神殿显露了它的真容。",
						"french": "Les ruines d'une ancienne tribu amazonienne, le Temple du Malheur, se sont révélées.",
						"spanish": "Las ruinas de una antigua tribu amazónica, el Templo de la Desgracia, se revelaron.",
						"vietnamese": "Tàn tích của một bộ lạc Amazon cổ đại, Đền Thờ Bất Hạnh, đã hiện ra.",
						"thai": "ซากปรักหักพังของชนเผ่าอะเมซอนโบราณ วิหารแห่งความโชคร้ายได้เผยโฉม",
						"hindi": "एक प्राचीन अमेज़ॅन जनजाति के खंडहर, दुर्भाग्य का मंदिर, प्रकट हुए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가… 그 전설의 사원인가.",
						"english": "Is this... that legendary temple?",
						"japanese": "ここが…あの伝説の神殿か。",
						"chinese": "这里是……那个传说中的神殿吗？",
						"french": "Est-ce ici... ce temple légendaire ?",
						"spanish": "¿Es este... ese templo legendario?",
						"vietnamese": "Đây là... ngôi đền huyền thoại đó sao?",
						"thai": "ที่นี่คือ... วิหารในตำนานนั่นหรือ?",
						"hindi": "क्या यह... वह पौराणिक मंदिर है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "briar",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "왔구나. 숲의 비밀을 쫓는 자들.",
						"english": "You've come. Those who seek the forest's secrets.",
						"japanese": "来たか。森の秘密を追う者たちよ。",
						"chinese": "你们来了。追寻森林秘密之人。",
						"french": "Vous êtes venus. Ceux qui cherchent les secrets de la forêt.",
						"spanish": "Habéis llegado. Aquellos que buscan los secretos del bosque.",
						"vietnamese": "Các ngươi đã đến. Những kẻ theo đuổi bí mật của rừng sâu.",
						"thai": "มาแล้วสินะ ผู้ที่ตามหาความลับของป่า",
						"hindi": "तुम आ गए। वे जो जंगल के रहस्यों की तलाश करते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "이곳은… 슬픔이 잠든 곳.",
						"english": "This place is... where sorrow slumbers.",
						"japanese": "ここは…悲しみが眠る場所。",
						"chinese": "这里是……悲伤沉睡之地。",
						"french": "Cet endroit est... là où la tristesse sommeille.",
						"spanish": "Este lugar es... donde la tristeza duerme.",
						"vietnamese": "Nơi đây là... chốn nỗi buồn ngự trị.",
						"thai": "ที่นี่คือ... ที่ซึ่งความโศกเศร้าหลับใหล",
						"hindi": "यह स्थान है... जहाँ दुख सोता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "이 사원은 사라진 협정의 사제를 기리는 곳.",
						"english": "This temple honors the priests of the lost pact.",
						"japanese": "この神殿は、失われた協定の司祭たちを祀る場所。",
						"chinese": "这座神殿是为了纪念消失契约的祭司们。",
						"french": "Ce temple honore les prêtres du pacte disparu.",
						"spanish": "Este templo honra a los sacerdotes del pacto perdido.",
						"vietnamese": "Ngôi đền này tôn vinh các linh mục của giao ước đã mất.",
						"thai": "วิหารแห่งนี้เชิดชูนักบวชแห่งพันธสัญญาที่สาบสูญ",
						"hindi": "यह मंदिर खोए हुए समझौते के पुजारियों का सम्मान करता है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "협정의 사제?",
						"english": "Priests of the pact?",
						"japanese": "協定の司祭？",
						"chinese": "契约的祭司？",
						"french": "Les prêtres du pacte ?",
						"spanish": "¿Sacerdotes del pacto?",
						"vietnamese": "Linh mục của giao ước sao?",
						"thai": "นักบวชแห่งพันธสัญญา?",
						"hindi": "समझौते के पुजारी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 심장이 훼손된 건… 금단의 계약 때문이지.",
						"english": "The forest's heart was corrupted... by a forbidden pact.",
						"japanese": "森の心臓が損なわれたのは…禁断の契約のせいだ。",
						"chinese": "森林之心被玷污了……都是因为那禁忌的契约。",
						"french": "Le cœur de la forêt a été corrompu... à cause d'un pacte interdit.",
						"spanish": "El corazón del bosque fue corrompido... por un pacto prohibido.",
						"vietnamese": "Trái tim rừng xanh bị tổn hại… là do một khế ước cấm đoán.",
						"thai": "หัวใจแห่งป่าถูกทำลาย...เพราะสัญญาต้องห้ามนั้นเอง",
						"hindi": "वन का हृदय दूषित हो गया था… एक वर्जित अनुबंध के कारण।"
					},
					"emotion": "sad",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사원 벽에 알 수 없는 고대 문양이 새겨져 있었다.",
						"english": "Unknown ancient symbols were etched into the temple walls.",
						"japanese": "寺院の壁には、未知の古代の文様が刻まれていた。",
						"chinese": "神殿的墙壁上刻着不明的古代纹样。",
						"french": "Des symboles anciens et inconnus étaient gravés sur les murs du temple.",
						"spanish": "Símbolos antiguos y desconocidos estaban grabados en las paredes del templo.",
						"vietnamese": "Trên tường đền thờ khắc những hoa văn cổ đại không rõ nghĩa.",
						"thai": "บนผนังวิหารมีลวดลายโบราณที่ไม่รู้จักสลักอยู่",
						"hindi": "मंदिर की दीवारों पर अज्ञात प्राचीन नक्काशी की गई थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 문양은 뭘 의미하는 거야?",
						"english": "What do these symbols signify?",
						"japanese": "この文様は何を意味するんだ？",
						"chinese": "这些纹样意味着什么？",
						"french": "Que signifient ces symboles ?",
						"spanish": "¿Qué significan estos símbolos?",
						"vietnamese": "Những hoa văn này có ý nghĩa gì?",
						"thai": "ลวดลายเหล่านี้หมายถึงอะไร?",
						"hindi": "ये नक्काशी क्या दर्शाती है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊혀진 진실이. 숲의 모든 아픔이.",
						"english": "Forgotten truths. All the forest's sorrow.",
						"japanese": "忘れ去られた真実が。森の全ての痛みが。",
						"chinese": "被遗忘的真相。森林所有的痛苦。",
						"french": "Des vérités oubliées. Toute la souffrance de la forêt.",
						"spanish": "Verdades olvidadas. Todo el dolor del bosque.",
						"vietnamese": "Những sự thật bị lãng quên. Mọi nỗi đau của rừng.",
						"thai": "ความจริงที่ถูกลืมเลือน... ความเจ็บปวดทั้งหมดของป่า",
						"hindi": "भूली हुई सच्चाई। वन का सारा दर्द।"
					},
					"emotion": "sad",
					"speaker": "briar"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 숨 쉬고 있어. 모든 것을 감싸 안으려는 의지가 있지.",
						"english": "The forest breathes. It holds a will to embrace all.",
						"japanese": "森は息をしている。全てを包み込もうとする意志がある。",
						"chinese": "森林在呼吸。它有着包容一切的意志。",
						"french": "La forêt respire. Elle a la volonté d'embrasser tout.",
						"spanish": "El bosque respira. Tiene la voluntad de abrazarlo todo.",
						"vietnamese": "Rừng đang thở. Nó có ý chí muốn ôm trọn mọi thứ.",
						"thai": "ป่ากำลังหายใจ... มีเจตจำนงที่จะโอบกอดทุกสิ่ง",
						"hindi": "वन साँस ले रहा है। इसमें सब कुछ समेटने की इच्छा है।"
					},
					"emotion": "base",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲이… 살아있다고?",
						"english": "The forest... is alive?",
						"japanese": "森が…生きているだと？",
						"chinese": "森林……还活着？",
						"french": "La forêt... est vivante ?",
						"spanish": "¿El bosque... está vivo?",
						"vietnamese": "Rừng… còn sống sao?",
						"thai": "ป่า...มีชีวิตอยู่หรือ?",
						"hindi": "वन… जीवित है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 금단의 계약은 숲과 그 안의 존재 모두를 옭아매고 있어.",
						"english": "This forbidden pact ensnared both the forest and all within it.",
						"japanese": "この禁断の契約が、森とその中の全ての存在を縛りつけている。",
						"chinese": "这份禁忌的契约束缚着森林和其中所有的存在。",
						"french": "Ce pacte interdit lie la forêt et toutes les existences en son sein.",
						"spanish": "Este pacto prohibido aprisiona al bosque y a todos los seres en su interior.",
						"vietnamese": "Khế ước cấm đoán này đang trói buộc cả khu rừng và mọi sinh vật bên trong.",
						"thai": "สัญญาต้องห้ามนี้กำลังพันธนาการทั้งป่าและสรรพชีวิตในนั้น",
						"hindi": "यह वर्जित अनुबंध वन और उसके भीतर के सभी प्राणियों को बांध रहा है।"
					},
					"emotion": "sad",
					"speaker": "briar"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주변의 뿌리들이 미세하게 움직이는 것이 느껴졌다.",
						"english": "The surrounding roots felt subtly in motion.",
						"japanese": "周囲の根が微かに動くのが感じられた。",
						"chinese": "感觉到周围的树根在微微蠕动。",
						"french": "Les racines environnantes semblaient bouger subtilement.",
						"spanish": "Se sintió un movimiento sutil en las raíces circundantes.",
						"vietnamese": "Cảm nhận được những rễ cây xung quanh đang chuyển động nhẹ.",
						"thai": "รู้สึกได้ถึงรากไม้รอบๆ ที่กำลังเคลื่อนไหวเล็กน้อย",
						"hindi": "आस-पास की जड़ें सूक्ष्म रूप से हिलती हुई महसूस हुईं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "숲의 속삭임에 현혹되지 마. 깊은 절망이 도사리고 있으니.",
						"english": "Do not be swayed by the forest's whispers. Deep despair lurks within.",
						"japanese": "森の囁きに惑わされるな。深い絶望が潜んでいるからだ。",
						"chinese": "不要被森林的低语迷惑。深渊般的绝望潜伏其中。",
						"french": "Ne te laisse pas séduire par les murmures de la forêt. Un profond désespoir y rôde.",
						"spanish": "No te dejes engañar por los susurros del bosque. Una profunda desesperación acecha.",
						"vietnamese": "Đừng bị mê hoặc bởi tiếng thì thầm của rừng. Nỗi tuyệt vọng sâu sắc đang rình rập.",
						"thai": "อย่าหลงกลกระซิบกระซาบของป่า... เพราะความสิ้นหวังอันลึกซึ้งกำลังซุ่มซ่อนอยู่",
						"hindi": "वन की फुसफुसाहट से मोहित मत हो। गहरा निराशा छिपी हुई है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사원의 깊은 곳, 벽화에 갇힌 여인의 형상이 그려져 있었다.",
						"english": "Deep within the temple, a mural depicted a woman's form, seemingly trapped.",
						"japanese": "寺院の奥深く、壁画には囚われた女の姿が描かれていた。",
						"chinese": "神殿深处，壁画上描绘着被困女子的身影。",
						"french": "Au plus profond du temple, une fresque représentait la silhouette d'une femme piégée.",
						"spanish": "En lo profundo del templo, un mural mostraba la figura de una mujer atrapada.",
						"vietnamese": "Sâu trong đền thờ, bức bích họa vẽ hình bóng một người phụ nữ bị giam cầm.",
						"thai": "ลึกเข้าไปในวิหาร มีภาพวาดสตรีที่ถูกกักขังอยู่บนฝาผนัง",
						"hindi": "मंदिर के गहरे हिस्से में, एक भित्तिचित्र पर एक फंसी हुई महिला की आकृति चित्रित थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 여자… 숲에 갇혀 고통받고 있어.",
						"english": "This woman... trapped in the forest, suffering.",
						"japanese": "この女… 森に囚われ、苦しんでいる。",
						"chinese": "这个女人……被困在森林里，痛苦不堪。",
						"french": "Cette femme... piégée dans la forêt, elle souffre.",
						"spanish": "Esta mujer... atrapada en el bosque, sufriendo.",
						"vietnamese": "Người phụ nữ này... mắc kẹt trong rừng, đang chịu đựng.",
						"thai": "ผู้หญิงคนนี้... ถูกขังอยู่ในป่า ทรมานอยู่.",
						"hindi": "यह स्त्री... जंगल में फँसी हुई, पीड़ा में है।"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "그녀가 바로… 사라진 협정의 사제.",
						"english": "She is... the priestess of the Lost Accord.",
						"japanese": "彼女こそが… 消えた協定の司祭。",
						"chinese": "她就是……失落契约的祭司。",
						"french": "Elle est... la prêtresse de l'Accord Perdu.",
						"spanish": "Ella es... la sacerdotisa del Pacto Perdido.",
						"vietnamese": "Cô ấy chính là... nữ tư tế của Hiệp Ước Đã Mất.",
						"thai": "นางคือ... นักบวชแห่งพันธสัญญาที่หายไป.",
						"hindi": "वही... लुप्त समझौते की पुजारिन है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잠깐… 왠지 모르게… Obsidia와 닮았어.",
						"english": "Wait... somehow... she resembles Obsidia.",
						"japanese": "待て… どういうわけか… オブシディアに似ている。",
						"chinese": "等等……不知为何……她和奥布西迪亚很像。",
						"french": "Attends... d'une certaine manière... elle ressemble à Obsidia.",
						"spanish": "Espera... de alguna manera... se parece a Obsidia.",
						"vietnamese": "Khoan đã... không hiểu sao... cô ấy giống Obsidia.",
						"thai": "เดี๋ยวก่อน... ทำไมถึง... ดูคล้ายออบซิเดีย.",
						"hindi": "रुको... किसी तरह... वह ओबसीडिया जैसी दिखती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "…그녀는 비극적인 운명에 묶인 채 숲의 일부가 되었지.",
						"english": "...She became part of the forest, bound by a tragic fate.",
						"japanese": "…彼女は悲劇的な運命に縛られ、森の一部となった。",
						"chinese": "……她被悲剧的命运束缚，成为了森林的一部分。",
						"french": "...Elle est devenue une partie de la forêt, liée à un destin tragique.",
						"spanish": "...Ella se convirtió en parte del bosque, atada a un destino trágico.",
						"vietnamese": "...Cô ấy đã trở thành một phần của khu rừng, bị ràng buộc bởi số phận bi thảm.",
						"thai": "จากนั้น... นางก็กลายเป็นส่วนหนึ่งของป่า ถูกผูกมัดด้วยโชคชะตาอันน่าเศร้า.",
						"hindi": "...वह दुखद नियति से बंधी, जंगल का हिस्सा बन गई।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니.",
						"english": "Ugh... Is this all you've got?",
						"japanese": "くっ… たかがこれしきか。",
						"chinese": "呃……就这点本事吗？",
						"french": "Urgh... C'est tout ce que vous avez ?",
						"spanish": "Uf... ¿Esto es todo lo que tenéis?",
						"vietnamese": "Khụ... chỉ có thế này thôi sao.",
						"thai": "อึก... แค่นี้เองรึ.",
						"hindi": "उफ़... बस इतना ही?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 멀었어… 숲은 너희를 놓아주지 않을 것이다.",
						"english": "Not yet... The forest will not let you go.",
						"japanese": "まだまだだ… 森はお前たちを解放せぬだろう。",
						"chinese": "还差得远……森林不会放过你们的。",
						"french": "Pas encore... La forêt ne vous relâchera pas.",
						"spanish": "Aún no... El bosque no os dejará ir.",
						"vietnamese": "Còn lâu lắm... Rừng sẽ không buông tha các ngươi đâu.",
						"thai": "ยังไม่จบ... ป่าจะไม่ปล่อยพวกเจ้าไป.",
						"hindi": "अभी बहुत दूर है... जंगल तुम्हें जाने नहीं देगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라고…?",
						"english": "This isn't the end...?",
						"japanese": "「終わりじゃないだと…？」",
						"chinese": "这还没完…？",
						"french": "Ce n'est pas la fin...?",
						"spanish": "¿No es el final...?",
						"vietnamese": "Chưa kết thúc ư...?",
						"thai": "นี่ไม่ใช่จุดจบ...?",
						"hindi": "यह अंत नहीं है...?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 쓰러졌으나, 숲의 속삭임은 더욱 짙어졌다.",
						"english": "The unknown boss fell, yet the forest's whispers grew louder.",
						"japanese": "「正体不明のボスは倒れたが、森の囁きはさらに濃くなった。」",
						"chinese": "无名首领已倒下，但森林的低语却愈发浓重。",
						"french": "Le boss inconnu est tombé, mais les murmures de la forêt s'intensifiaient.",
						"spanish": "El jefe desconocido cayó, pero los susurros del bosque se hicieron más intensos.",
						"vietnamese": "Boss bí ẩn đã gục ngã, nhưng tiếng thì thầm của rừng sâu càng trở nên đậm đặc.",
						"thai": "บอสปริศนาล้มลง แต่เสียงกระซิบของป่ายิ่งหนาแน่นขึ้น",
						"hindi": "अज्ञात बॉस गिर गया, फिर भी जंगल की फुसफुसाहट और गहरी हो गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "비극적인 숲의 심장은 아직도 고동치고 있었다.",
						"english": "The tragic heart of the forest still pulsed.",
						"japanese": "「悲劇的な森の心臓は、まだ鼓動を続けていた。」",
						"chinese": "悲剧之森的心脏仍在跳动。",
						"french": "Le cœur tragique de la forêt battait encore.",
						"spanish": "El trágico corazón del bosque aún latía.",
						"vietnamese": "Trái tim bi kịch của khu rừng vẫn đang đập.",
						"thai": "หัวใจอันโศกเศร้าของป่ายังคงเต้นอยู่",
						"hindi": "जंगल का दुखद हृदय अब भी धड़क रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사원 가장 깊은 곳. 정체 모를 그림자가 앞을 막아섰다.",
						"english": "Deepest part of the temple. An unknown shadow blocked the way.",
						"japanese": "寺院の最深部。正体不明の影が道を塞いだ。",
						"chinese": "神殿最深处。一个不明身份的影子挡住了去路。",
						"french": "Le plus profond du temple. Une ombre inconnue bloquait le chemin.",
						"spanish": "La parte más profunda del templo. Una sombra desconocida bloqueaba el paso.",
						"vietnamese": "Nơi sâu nhất của đền thờ. Một bóng đen vô danh đã chặn đường.",
						"thai": "ส่วนลึกที่สุดของวิหาร. เงาลึกลับปรากฏขวางหน้า.",
						"hindi": "मंदिर का सबसे गहरा हिस्सा। एक अज्ञात परछाई ने रास्ता रोका।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳에 발을 들이는 어리석은 자들.",
						"english": "Fools who set foot in this place.",
						"japanese": "この地に足を踏み入れる愚か者たちよ。",
						"chinese": "踏入此地的愚蠢之人。",
						"french": "Insensés qui osez fouler ce lieu.",
						"spanish": "Necios que pisáis este lugar.",
						"vietnamese": "Những kẻ ngu ngốc đặt chân đến nơi này.",
						"thai": "พวกโง่เขลาที่เหยียบย่างเข้ามาในที่แห่งนี้.",
						"hindi": "मूर्ख जो इस स्थान पर कदम रखते हैं।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 비밀은… 너희가 감당할 수 없을 것이다.",
						"english": "The forest's secret... you cannot bear it.",
						"japanese": "森の秘密は… お前たちには耐えられぬだろう。",
						"chinese": "森林的秘密……你们无法承受。",
						"french": "Le secret de la forêt... vous ne pourrez le supporter.",
						"spanish": "El secreto del bosque... no podréis soportarlo.",
						"vietnamese": "Bí mật của rừng... các ngươi sẽ không thể chịu đựng nổi đâu.",
						"thai": "ความลับของป่า... พวกเจ้าจะรับมันไม่ไหว.",
						"hindi": "जंगल का रहस्य... तुम सहन नहीं कर पाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜. 진실을 밝혀야 해.",
						"english": "Move. We must reveal the truth.",
						"japanese": "どけ。真実を明らかにせねば。",
						"chinese": "让开。我们必须揭示真相。",
						"french": "Écarte-toi. Nous devons révéler la vérité.",
						"spanish": "Apártate. Debemos revelar la verdad.",
						"vietnamese": "Tránh ra. Chúng ta phải hé lộ sự thật.",
						"thai": "หลีกไป. เราต้องเปิดเผยความจริง.",
						"hindi": "हट जाओ। हमें सच उजागर करना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "정체 모를 힘에 의해 탐사대는 쓰러졌다.",
						"english": "The expedition fell to an unknown power.",
						"japanese": "「正体不明の力により、探査隊は倒れた。」",
						"chinese": "探险队被一股不明力量击败。",
						"french": "L'expédition a succombé à un pouvoir inconnu.",
						"spanish": "La expedición cayó ante un poder desconocido.",
						"vietnamese": "Đội thám hiểm đã gục ngã bởi một sức mạnh không rõ.",
						"thai": "คณะสำรวจล้มลงด้วยพลังงานที่ไม่รู้จัก",
						"hindi": "अज्ञात शक्ति के हाथों अभियान दल धराशायी हो गया।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲의 품으로 돌아가라. 영원히.",
						"english": "Return to the forest's embrace. Forever.",
						"japanese": "「森の懐へ帰れ。永遠に。」",
						"chinese": "回到森林的怀抱。永恒地。",
						"french": "Retourne à l'étreinte de la forêt. Pour toujours.",
						"spanish": "Regresa al abrazo del bosque. Para siempre.",
						"vietnamese": "Trở về vòng tay của rừng sâu. Mãi mãi.",
						"thai": "จงกลับสู่อ้อมกอดแห่งป่า ชั่วนิรันดร์",
						"hindi": "जंगल के आलिंगन में लौट जाओ। हमेशा के लिए।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "「まだ…終わってない！」",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún no... ha terminado!",
						"vietnamese": "Vẫn chưa... kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"비운의 사원. 한때 고귀했던 계약의 흔적이 잠든 곳.",
			"숲의 심장을 갉아먹은 금단의 계약.",
			"사라진 사제의 비극이 벽화에 새겨져 있었다.",
			"그리고 그 형상은… 잊을 수 없는 그림자를 닮았다."
		],
		"english": [
			"Temple of Misfortune. Where the remnants of a once noble pact lie dormant.",
			"A forbidden pact that gnawed at the forest's heart.",
			"The tragedy of the lost priest was etched into the murals.",
			"And that form... resembled an unforgettable shadow."
		],
		"japanese": [
			"不運の神殿。かつて高貴だった契約の痕跡が眠る場所。",
			"森の心臓を蝕んだ禁断の契約。",
			"消え去った司祭の悲劇が壁画に刻まれていた。",
			"そしてその姿は…忘れえぬ影に似ていた。"
		],
		"chinese": [
			"不幸神殿。昔日高贵契约的遗迹沉睡之地。",
			"侵蚀森林之心的禁忌契约。",
			"消失祭司的悲剧刻画在壁画上。",
			"而那个身影……像极了难以忘怀的影子。"
		],
		"french": [
			"Le Temple du Malheur. Où reposent les vestiges d'un pacte jadis noble.",
			"Un pacte interdit qui rongeait le cœur de la forêt.",
			"La tragédie du prêtre disparu était gravée dans les fresques.",
			"Et cette forme... ressemblait à une ombre inoubliable."
		],
		"spanish": [
			"El Templo de la Desgracia. Donde yacen los vestigios de un pacto antaño noble.",
			"Un pacto prohibido que carcomía el corazón del bosque.",
			"La tragedia del sacerdote desaparecido estaba grabada en los murales.",
			"Y esa forma... se parecía a una sombra inolvidable."
		],
		"vietnamese": [
			"Đền Thờ Bất Hạnh. Nơi dấu vết của một giao ước từng cao quý đang ngủ yên.",
			"Một giao ước cấm kỵ đã gặm nhấm trái tim khu rừng.",
			"Bi kịch của vị linh mục đã mất được khắc sâu trên những bức bích họa.",
			"Và hình dáng đó... giống như một bóng hình không thể quên."
		],
		"thai": [
			"วิหารแห่งความโชคร้าย ที่ซึ่งร่องรอยของพันธสัญญาอันสูงส่งครั้งหนึ่งเคยหลับใหล",
			"พันธสัญญาต้องห้ามที่กัดกินหัวใจของป่า",
			"โศกนาฏกรรมของนักบวชที่หายสาบสูญถูกจารึกไว้บนจิตรกรรมฝาผนัง",
			"และรูปร่างนั้น... คล้ายกับเงาที่ไม่มีวันลืมเลือน"
		],
		"hindi": [
			"दुर्भाग्य का मंदिर। जहाँ एक समय के कुलीन समझौते के अवशेष निष्क्रिय पड़े हैं।",
			"एक निषिद्ध समझौता जिसने जंगल के हृदय को कुतर दिया।",
			"लापता पुजारी की त्रासदी भित्तिचित्रों पर अंकित थी।",
			"और वह आकृति… एक अविस्मरणीय छाया से मिलती-जुलती थी।"
		]
	}
} as const;
