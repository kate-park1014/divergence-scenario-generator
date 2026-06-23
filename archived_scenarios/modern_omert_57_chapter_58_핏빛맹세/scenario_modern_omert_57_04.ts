export const scenario_modern_omert_57_04 = {
	"scenario_id": "modern_omert_57_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
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
						"korean": "폐허 속. 잿빛 벽에 기댄 소녀가 웅크리고 있다.",
						"english": "Amidst the ruins. A girl huddles, leaning against a gray wall.",
						"japanese": "廃墟の中。灰色の壁にもたれて少女がうずくまっている。",
						"chinese": "废墟之中。一个少女蜷缩着，靠在灰色的墙壁上。",
						"french": "Au milieu des ruines. Une fille recroquevillée s'appuie contre un mur gris.",
						"spanish": "Entre las ruinas. Una niña se acurruca, apoyada en una pared gris.",
						"vietnamese": "Giữa đống đổ nát. Một cô gái nép mình, dựa vào bức tường xám xịt.",
						"thai": "ท่ามกลางซากปรักหักพัง เด็กสาวคนหนึ่งนั่งกอดเข่าพิงกำแพงสีเทา",
						"hindi": "खंडहरों के बीच। एक लड़की धूसर दीवार के सहारे सिकुड़ी हुई है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "(멈칫) …누구지?",
						"english": "(Hesitates) ...Who is it?",
						"japanese": "(ためらい) …誰だ？",
						"chinese": "(停顿) ……是谁？",
						"french": "(Hésite) ...Qui est là ?",
						"spanish": "(Duda) ...¿Quién es?",
						"vietnamese": "(Do dự) ...Ai vậy?",
						"thai": "(ชะงัก) ...ใครน่ะ?",
						"hindi": "(झिझककर) ...कौन है?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "echo",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그림… 인가?",
						"english": "A drawing... perhaps?",
						"japanese": "絵…なのか？",
						"chinese": "画……吗？",
						"french": "Un dessin... n'est-ce pas ?",
						"spanish": "¿Un dibujo... quizás?",
						"vietnamese": "Một bức tranh... sao?",
						"thai": "ภาพวาด... หรือ?",
						"hindi": "एक चित्र... है क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소녀의 손에 들린 그림. 검은색 크레파스로 그려진, 도시의 불타는 모습.",
						"english": "A drawing in the girl's hands. The city ablaze, drawn with a black crayon.",
						"japanese": "少女の手に持たれた絵。黒いクレヨンで描かれた、燃える都市の姿。",
						"chinese": "少女手中拿着的画。用黑色蜡笔描绘的，城市燃烧的景象。",
						"french": "Un dessin dans les mains de la jeune fille. La ville en feu, dessinée au crayon noir.",
						"spanish": "Un dibujo en las manos de la niña. La ciudad en llamas, dibujada con un crayón negro.",
						"vietnamese": "Bức tranh trong tay cô gái. Cảnh thành phố bốc cháy, được vẽ bằng bút sáp màu đen.",
						"thai": "ภาพวาดในมือของเด็กสาว ภาพเมืองที่ลุกไหม้ วาดด้วยสีเทียนสีดำ",
						"hindi": "लड़की के हाथों में एक चित्र। काले क्रेयॉन से बनाया गया, शहर का जलता हुआ दृश्य।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 과거에 일어났던 참사잖아.",
						"english": "This is... the catastrophe that happened in the past.",
						"japanese": "これは…過去に起きた惨事じゃないか。",
						"chinese": "这……是过去发生的惨剧啊。",
						"french": "C'est... la catastrophe qui s'est produite dans le passé.",
						"spanish": "Esto es... la catástrofe que ocurrió en el pasado.",
						"vietnamese": "Đây là... thảm họa đã xảy ra trong quá khứ mà.",
						"thai": "นี่มัน... หายนะที่เคยเกิดขึ้นในอดีตนี่นา",
						"hindi": "यह... अतीत में हुई त्रासदी है।"
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소녀는 말없이 그림을 건넸다. 새까만 불꽃과 절규하는 사람들.",
						"english": "The girl silently handed over the painting. Pitch-black flames and screaming people.",
						"japanese": "少女は無言で絵を差し出した。真っ黒な炎と絶叫する人々。",
						"chinese": "女孩默默递过画作。漆黑的火焰和尖叫的人们。",
						"french": "La jeune fille tendit le tableau en silence. Des flammes d'un noir d'encre et des gens hurlant.",
						"spanish": "La chica entregó el cuadro en silencio. Llamas negras como el carbón y gente gritando.",
						"vietnamese": "Cô gái im lặng đưa bức tranh. Ngọn lửa đen kịt và những người la hét.",
						"thai": "เด็กสาวส่งภาพวาดให้เงียบๆ เปลวไฟสีดำมืดและผู้คนที่กรีดร้อง",
						"hindi": "लड़की ने चुपचाप पेंटिंग पकड़ी। घोर काली लपटें और चीखते हुए लोग।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "또… 이 도시가 불타는 그림이야?",
						"english": "Again... a painting of this city burning?",
						"japanese": "また… この街が燃える絵なの？",
						"chinese": "又… 是这座城市燃烧的画吗？",
						"french": "Encore… un tableau de cette ville en feu ?",
						"spanish": "¿Otra vez… un cuadro de esta ciudad ardiendo?",
						"vietnamese": "Lại… là bức tranh thành phố này đang cháy sao?",
						"thai": "อีกแล้วเหรอ… ภาพเมืองนี้กำลังลุกไหม้?",
						"hindi": "फिर से… इस शहर के जलने की तस्वीर?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "같은 사건이, 다른 날짜에 그려져 있어.",
						"english": "The same event, painted on different dates.",
						"japanese": "同じ事件が、異なる日付で描かれている。",
						"chinese": "同样的事件，却描绘在不同的日期。",
						"french": "Le même événement, peint à des dates différentes.",
						"spanish": "El mismo evento, pintado en fechas diferentes.",
						"vietnamese": "Cùng một sự kiện, được vẽ vào những ngày khác nhau.",
						"thai": "เหตุการณ์เดียวกัน ถูกวาดในวันที่แตกต่างกัน",
						"hindi": "वही घटना, अलग-अलग तारीखों में चित्रित।"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "반복… 된다는 건가? 이 도시의 비극이.",
						"english": "It... repeats? This city's tragedy.",
						"japanese": "繰り返…されるのか？この街の悲劇が。",
						"chinese": "是… 在重复吗？这座城市的悲剧。",
						"french": "Ça… se répète ? La tragédie de cette ville.",
						"spanish": "¿Se… repite? La tragedia de esta ciudad.",
						"vietnamese": "Nó… lặp lại sao? Bi kịch của thành phố này.",
						"thai": "มัน… ซ้ำรอยเหรอ? โศกนาฏกรรมของเมืองนี้",
						"hindi": "क्या यह… दोहराया जा रहा है? इस शहर की त्रासदी।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "(그림을 가리키며 고개를 젓는다)",
						"english": "(Points at the painting and shakes her head)",
						"japanese": "(絵を指差し、首を振る)",
						"chinese": "(指着画作，摇了摇头)",
						"french": "(Désigne le tableau et secoue la tête)",
						"spanish": "(Señala el cuadro y niega con la cabeza)",
						"vietnamese": "(Chỉ vào bức tranh và lắc đầu)",
						"thai": "(ชี้ไปที่ภาพและส่ายหน้า)",
						"hindi": "(पेंटिंग की ओर इशारा करती है और सिर हिलाती है)"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "소녀의 눈은 슬픔으로 가득했다. 그림 속 비극은 끝나지 않았다.",
						"english": "The girl's eyes were filled with sadness. The tragedy in the painting had not ended.",
						"japanese": "少女の目は悲しみでいっぱいだった。絵の中の悲劇は終わっていなかった。",
						"chinese": "女孩的眼睛里充满了悲伤。画中的悲剧并未结束。",
						"french": "Les yeux de la jeune fille étaient remplis de tristesse. La tragédie du tableau n'était pas terminée.",
						"spanish": "Los ojos de la chica estaban llenos de tristeza. La tragedia del cuadro no había terminado.",
						"vietnamese": "Đôi mắt cô gái tràn ngập nỗi buồn. Bi kịch trong bức tranh vẫn chưa kết thúc.",
						"thai": "ดวงตาของเด็กสาวเต็มไปด้วยความเศร้า โศกนาฏกรรมในภาพยังไม่จบสิ้น",
						"hindi": "लड़की की आँखें उदासी से भरी थीं। पेंटिंग में त्रासदी खत्म नहीं हुई थी।"
					},
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 그림은… 누군가 도시를 파괴하고 있어.",
						"english": "This painting... someone is destroying the city.",
						"japanese": "この絵は… 誰かが街を破壊している。",
						"chinese": "这幅画… 有人正在摧毁这座城市。",
						"french": "Ce tableau… quelqu'un détruit la ville.",
						"spanish": "Este cuadro… alguien está destruyendo la ciudad.",
						"vietnamese": "Bức tranh này… ai đó đang phá hủy thành phố.",
						"thai": "ภาพนี้… มีคนกำลังทำลายเมือง",
						"hindi": "यह पेंटिंग… कोई शहर को नष्ट कर रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가면을 쓴 사람. 옴메르타인가?",
						"english": "A masked person. Is it Omerta?",
						"japanese": "仮面をつけた人。オメルタなのか？",
						"chinese": "一个戴面具的人。是奥梅尔塔吗？",
						"french": "Une personne masquée. Est-ce Omerta ?",
						"spanish": "Una persona enmascarada. ¿Es Omerta?",
						"vietnamese": "Một người đeo mặt nạ. Là Omerta sao?",
						"thai": "คนสวมหน้ากาก โอเมอร์ต้าเหรอ?",
						"hindi": "एक नकाबपोश व्यक्ति। क्या यह ओमेर्टा है?"
					},
					"emotion": "base",
					"speaker": "character_3"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "(슬픈 눈으로 고개를 끄덕인다)",
						"english": "(Nods with sad eyes)",
						"japanese": "(悲しい目で頷く)",
						"chinese": "(眼神悲伤地点了点头)",
						"french": "(Hoche la tête avec des yeux tristes)",
						"spanish": "(Asiente con ojos tristes)",
						"vietnamese": "(Gật đầu với ánh mắt buồn bã)",
						"thai": "(พยักหน้าด้วยแววตาเศร้า)",
						"hindi": "(दुःख भरी आँखों से सिर हिलाती है)"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "옴메르타의 복수… 그게 이 그림 속 비극의 시작이야?",
						"english": "Omerta's revenge... Is that the beginning of the tragedy in this painting?",
						"japanese": "オメルタの復讐… それがこの絵の中の悲劇の始まりなの？",
						"chinese": "奥梅尔塔的复仇… 这就是画中悲剧的开始吗？",
						"french": "La vengeance d'Omerta… Est-ce le début de la tragédie dans ce tableau ?",
						"spanish": "La venganza de Omerta… ¿Es ese el comienzo de la tragedia en este cuadro?",
						"vietnamese": "Sự trả thù của Omerta… Đó có phải là khởi đầu của bi kịch trong bức tranh này không?",
						"thai": "การแก้แค้นของโอเมอร์ต้า… นั่นคือจุดเริ่มต้นของโศกนาฏกรรมในภาพนี้เหรอ?",
						"hindi": "ओमेर्टा का बदला… क्या इस पेंटिंग में त्रासदी की शुरुआत यही है?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그림 속 가면 쓴 인물의 눈에서, 검은 눈물이 흘러내렸다.",
						"english": "From the eyes of the masked figure in the painting, black tears flowed.",
						"japanese": "絵の中の仮面の人物の目から、黒い涙が流れ落ちた。",
						"chinese": "画中戴面具之人的眼中，流下了黑色的泪水。",
						"french": "Des yeux de la figure masquée dans la peinture, des larmes noires coulaient.",
						"spanish": "De los ojos de la figura enmascarada en la pintura, lágrimas negras fluyeron.",
						"vietnamese": "Từ đôi mắt của nhân vật đeo mặt nạ trong bức tranh, những giọt nước mắt đen chảy dài.",
						"thai": "จากดวงตาของบุคคลสวมหน้ากากในภาพวาด น้ำตาสีดำได้ไหลรินลงมา",
						"hindi": "पेंटिंग में नकाबपोश आकृति की आँखों से, काले आँसू बह निकले।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "복수가… 슬픔에서 비롯된 거라고?",
						"english": "Revenge... born from sorrow?",
						"japanese": "復讐は… 悲しみから生まれたと？",
						"chinese": "复仇… 源于悲伤？",
						"french": "La vengeance… née de la tristesse ?",
						"spanish": "¿La venganza… nacida de la tristeza?",
						"vietnamese": "Báo thù… đến từ nỗi buồn ư?",
						"thai": "การแก้แค้น… เกิดจากความเศร้าหรือ?",
						"hindi": "प्रतिशोध... दुख से पैदा हुआ है?"
					},
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "echo",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에코의 그림은 점차 광기로 물들었다. 종말이 다가오는 것처럼.",
						"english": "Echo's painting gradually became tainted with madness. As if the end was near.",
						"japanese": "エコーの絵は次第に狂気に染まっていった。終末が迫るかのように。",
						"chinese": "艾可的画逐渐被疯狂浸染。仿佛末日即将来临。",
						"french": "La peinture d'Écho fut progressivement teintée de folie. Comme si la fin approchait.",
						"spanish": "La pintura de Echo se tiñó gradualmente de locura. Como si el fin se acercara.",
						"vietnamese": "Bức tranh của Echo dần nhuốm màu điên loạn. Như thể ngày tận thế đang đến gần.",
						"thai": "ภาพวาดของเอคโค่ค่อยๆ เปื้อนไปด้วยความบ้าคลั่ง ราวกับว่าจุดจบกำลังใกล้เข้ามา",
						"hindi": "इको की पेंटिंग धीरे-धीरे पागलपन से रंगीन होती गई। जैसे कि अंत निकट हो।"
					},
					"emotion": "angry",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 우리 모습 아니야?",
						"english": "Isn't this… us?",
						"japanese": "これ… 私たちの姿じゃない？",
						"chinese": "这… 不是我们吗？",
						"french": "Ce n'est pas… nous ?",
						"spanish": "¿Esto… no somos nosotros?",
						"vietnamese": "Đây… không phải là chúng ta sao?",
						"thai": "นี่… ไม่ใช่พวกเราหรือ?",
						"hindi": "यह… हम नहीं हैं क्या?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "그림 속 모든 이들이, 공포에 질려 있어.",
						"english": "Everyone in the painting is consumed by fear.",
						"japanese": "絵の中の皆が、恐怖に怯えている。",
						"chinese": "画中所有人都陷入恐惧。",
						"french": "Tous ceux dans la peinture sont terrifiés.",
						"spanish": "Todos en la pintura están aterrorizados.",
						"vietnamese": "Tất cả mọi người trong bức tranh đều chìm trong sợ hãi.",
						"thai": "ทุกคนในภาพวาดต่างหวาดกลัว",
						"hindi": "पेंटिंग में हर कोई डर से ग्रस्त है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "(그림을 찢으며 절규한다)",
						"english": "(Screams while tearing the painting)",
						"japanese": "(絵を破りながら絶叫する)",
						"chinese": "(撕裂画作并尖叫)",
						"french": "(Hurle en déchirant la peinture)",
						"spanish": "(Grita mientras rasga la pintura)",
						"vietnamese": "(Hét lên khi xé bức tranh)",
						"thai": "(กรีดร้องพลางฉีกภาพวาด)",
						"hindi": "(पेंटिंग फाड़ते हुए चीखता है)"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "소녀의 울음은 찢어지는 그림과 함께, 모든 것을 집어삼킬 듯했다.",
						"english": "The girl's cries, along with the tearing painting, seemed to engulf everything.",
						"japanese": "少女の泣き声は、破れる絵と共に、全てを飲み込むようだった。",
						"chinese": "少女的哭声伴随着被撕裂的画作，仿佛要吞噬一切。",
						"french": "Les pleurs de la jeune fille, avec la peinture déchirée, semblaient tout engloutir.",
						"spanish": "Los llantos de la niña, junto con la pintura desgarrada, parecían engullir todo.",
						"vietnamese": "Tiếng khóc của cô gái, cùng với bức tranh bị xé rách, dường như muốn nuốt chửng mọi thứ.",
						"thai": "เสียงร้องไห้ของเด็กสาว พร้อมกับภาพวาดที่ฉีกขาด ดูเหมือนจะกลืนกินทุกสิ่ง",
						"hindi": "लड़की की चीखें, फटी हुई पेंटिंग के साथ, सब कुछ निगलने वाली थीं।"
					},
					"emotion": "angry",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제… 돌아갈 수 없어. 이 그림이 진실이라면.",
						"english": "Now… there's no turning back. If this painting is the truth.",
						"japanese": "もう… 戻れない。この絵が真実なら。",
						"chinese": "现在… 无法回头了。如果这幅画是真实的。",
						"french": "Maintenant… il n'y a plus de retour en arrière. Si cette peinture est la vérité.",
						"spanish": "Ahora… no hay vuelta atrás. Si esta pintura es la verdad.",
						"vietnamese": "Giờ đây… không thể quay lại được nữa. Nếu bức tranh này là sự thật.",
						"thai": "ตอนนี้… กลับไปไม่ได้แล้ว ถ้าภาพวาดนี้คือความจริง",
						"hindi": "अब… वापस नहीं जा सकते। अगर यह पेंटिंग सच है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 무너졌다. 잠시 동안의 정적.",
						"english": "The giant shadow fell. A moment of silence.",
						"japanese": "巨大な影が崩れ落ちた。束の間の静寂。",
						"chinese": "巨大的阴影倒塌了。短暂的寂静。",
						"french": "L'ombre gigantesque s'est effondrée. Un moment de silence.",
						"spanish": "La sombra gigante cayó. Un momento de silencio.",
						"vietnamese": "Bóng tối khổng lồ sụp đổ. Một khoảnh khắc tĩnh lặng.",
						"thai": "เงาอันมหึมาล้มลง ความเงียบงันชั่วขณะหนึ่ง",
						"hindi": "विशाल छाया गिर गई। एक पल का सन्नाटा।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(쓰러지며) …결국… 너희도… 같은 비극에…",
						"english": "(Collapsing) ...Eventually... you too... into the same tragedy...",
						"japanese": "(倒れながら) …結局…お前たちも…同じ悲劇に…",
						"chinese": "(倒下) ……最终……你们也会……陷入同样的悲剧……",
						"french": "(S'écroulant) ...Finalement... vous aussi... dans la même tragédie...",
						"spanish": "(Cayendo) ...Al final... vosotros también... en la misma tragedia...",
						"vietnamese": "(Ngã xuống) ...Cuối cùng... các ngươi cũng... rơi vào cùng một bi kịch...",
						"thai": "(ล้มลง) ...ท้ายที่สุด...พวกเจ้าก็...ตกอยู่ในโศกนาฏกรรมเดียวกัน...",
						"hindi": "(गिरते हुए) ...आखिरकार... तुम भी... उसी त्रासदी में..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "같은 비극에 갇히지 않아!",
						"english": "We won't be trapped in the same tragedy!",
						"japanese": "同じ悲劇には囚われない！",
						"chinese": "我们不会被困在同样的悲剧中！",
						"french": "Nous ne serons pas piégés dans la même tragédie !",
						"spanish": "¡No seremos atrapados en la misma tragedia!",
						"vietnamese": "Chúng ta sẽ không bị mắc kẹt trong cùng một bi kịch!",
						"thai": "เราจะไม่ถูกขังอยู่ในโศกนาฏกรรมเดียวกัน!",
						"hindi": "हम उसी त्रासदी में नहीं फंसेंगे!"
					},
					"emotion": "happy"
				},
				{
					"spot": [
						5,
						2
					],
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "에코는 찢어진 그림 조각들을 다시 모았다. 그 위에 희미한 빛이 스며들었다.",
						"english": "Echo gathered the torn picture fragments. A faint light seeped onto them.",
						"japanese": "エコーは破れた絵の破片を再び集めた。その上に淡い光が染み込んだ。",
						"chinese": "艾可重新收集了撕裂的画片。微弱的光芒渗透其中。",
						"french": "Echo rassembla les fragments de l'image déchirée. Une faible lumière s'infiltra sur eux.",
						"spanish": "Eco reunió los fragmentos de la imagen rota. Una tenue luz se filtró sobre ellos.",
						"vietnamese": "Echo gom lại những mảnh tranh đã xé. Một ánh sáng mờ nhạt len lỏi vào chúng.",
						"thai": "เอคโค่รวบรวมชิ้นส่วนภาพที่ฉีกขาด แสงเรืองรองบางๆ สาดส่องลงมา",
						"hindi": "इको ने फटे हुए चित्र के टुकड़ों को फिर से इकट्ठा किया। उन पर एक हल्की रोशनी छा गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(희미하게 웃으며, 그림 속 희망을 그린다)",
						"english": "(Smiling faintly, drawing hope in the picture)",
						"japanese": "(微かに笑いながら、絵の中に希望を描く)",
						"chinese": "(微笑着，在画中描绘希望)",
						"french": "(Souriant faiblement, dessinant l'espoir dans l'image)",
						"spanish": "(Sonriendo débilmente, dibujando esperanza en el cuadro)",
						"vietnamese": "(Mỉm cười nhẹ, vẽ lên hy vọng trong bức tranh)",
						"thai": "(ยิ้มบางๆ วาดความหวังลงบนภาพ)",
						"hindi": "(हल्की मुस्कान के साथ, तस्वीर में आशाを描ना)"
					},
					"emotion": "happy",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 희망은 남았어. 옴메르타도…",
						"english": "...There's still hope left. Even Omerta...",
						"japanese": "…まだ希望は残っている。オメルタも…",
						"chinese": "……希望仍在。欧墨塔也……",
						"french": "...Il reste encore de l'espoir. Même Omerta...",
						"spanish": "...Todavía queda esperanza. Incluso Omerta...",
						"vietnamese": "...Vẫn còn hy vọng. Ngay cả Omerta...",
						"thai": "...ยังมีความหวังเหลืออยู่ แม้แต่ออเมอร์ต้าก็...",
						"hindi": "...अभी भी आशा बची है। ओमेर्टा भी..."
					},
					"emotion": "base",
					"speaker": "character_2"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						5,
						8
					]
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들. 이 비극은 끝없는 순환이다.",
						"english": "Foolish humans. This tragedy is an endless cycle.",
						"japanese": "愚かな人間たちめ。この悲劇は終わりのない循環だ。",
						"chinese": "愚蠢的人类。这场悲剧是一个无尽的循环。",
						"french": "Humains stupides. Cette tragédie est un cycle sans fin.",
						"spanish": "Humanos estúpidos. Esta tragedia es un ciclo interminable.",
						"vietnamese": "Loài người ngu ngốc. Bi kịch này là một vòng lặp không ngừng.",
						"thai": "มนุษย์ที่โง่เขลา โศกนาฏกรรมนี้คือวัฏจักรที่ไม่มีที่สิ้นสุด",
						"hindi": "मूर्ख इंसानो। यह त्रासदी एक अंतहीन चक्र है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 저항은 무의미하다.",
						"english": "Your resistance is meaningless.",
						"japanese": "お前たちの抵抗は無意味だ。",
						"chinese": "你们的抵抗毫无意义。",
						"french": "Votre résistance est futile.",
						"spanish": "Vuestra resistencia es inútil.",
						"vietnamese": "Sự kháng cự của các ngươi thật vô nghĩa.",
						"thai": "การต่อต้านของพวกเจ้าไร้ความหมาย",
						"hindi": "तुम्हारा प्रतिरोध व्यर्थ है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너희가 이 비극을 반복하고 있는 거였군!",
						"english": "So, you're repeating this tragedy!",
						"japanese": "お前たちがこの悲劇を繰り返していたのか！",
						"chinese": "原来你们在重演这场悲剧！",
						"french": "Vous rejouez donc cette tragédie !",
						"spanish": "¡Así que estáis repitiendo esta tragedia!",
						"vietnamese": "Thì ra các ngươi đang lặp lại bi kịch này!",
						"thai": "พวกเจ้ากำลังซ้ำรอยโศกนาฏกรรมนี้สินะ!",
						"hindi": "तो तुम इस त्रासदी को दोहरा रहे हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐욕과 절망이, 이 도시를 만든 거야.",
						"english": "Greed and despair created this city.",
						"japanese": "強欲と絶望が、この街を作ったのだ。",
						"chinese": "贪婪与绝望，造就了这座城市。",
						"french": "La cupidité et le désespoir ont créé cette ville.",
						"spanish": "La codicia y la desesperación crearon esta ciudad.",
						"vietnamese": "Lòng tham và sự tuyệt vọng đã tạo nên thành phố này.",
						"thai": "ความโลภและความสิ้นหวัง ได้สร้างเมืองนี้ขึ้นมา",
						"hindi": "लालच और निराशा ने इस शहर को बनाया।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "그 순환, 우리가 끊어버리겠어!",
						"english": "We'll break this cycle!",
						"japanese": "その循環、私たちが断ち切る！",
						"chinese": "我们会打破这个循环！",
						"french": "Nous briserons ce cycle !",
						"spanish": "¡Romperemos este ciclo!",
						"vietnamese": "Chúng ta sẽ phá vỡ vòng luân hồi này!",
						"thai": "เราจะทำลายวัฏจักรนี้!",
						"hindi": "हम इस चक्र को तोड़ देंगे!"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "도시를 뒤흔드는 포효. 거대한 그림자가 다시 일어섰다.",
						"english": "A roar shakes the city. The giant shadow rises again.",
						"japanese": "街を揺るがす咆哮。巨大な影が再び立ち上がった。",
						"chinese": "撼动城市的咆哮。巨大的阴影再次站了起来。",
						"french": "Un rugissement secoue la ville. L'ombre gigantesque se relève.",
						"spanish": "Un rugido sacude la ciudad. La sombra gigante se levanta de nuevo.",
						"vietnamese": "Một tiếng gầm rung chuyển thành phố. Bóng tối khổng lồ lại trỗi dậy.",
						"thai": "เสียงคำรามสะเทือนเมือง เงาอันมหึมาลุกขึ้นอีกครั้ง",
						"hindi": "शहर को हिलाने वाली एक गर्जना। विशाल छाया फिर से खड़ी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 연민은, 너희를 파멸로 이끌 것이다.",
						"english": "Your pity will lead you to ruin.",
						"japanese": "お前たちの憐れみが、お前たちを破滅へと導くだろう。",
						"chinese": "你们的怜悯，会将你们引向毁灭。",
						"french": "Votre pitié vous mènera à votre perte.",
						"spanish": "Vuestra piedad os llevará a la ruina.",
						"vietnamese": "Lòng trắc ẩn của các ngươi sẽ dẫn các ngươi đến diệt vong.",
						"thai": "ความสงสารของพวกเจ้าจะนำพวกเจ้าไปสู่ความพินาศ",
						"hindi": "तुम्हारी दया तुम्हें विनाश की ओर ले जाएगी।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束。",
						"french": "Ce n'est pas encore… fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc.",
						"thai": "ยัง… ไม่จบ",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는… 포기하지 않아!",
						"english": "We… won't give up!",
						"japanese": "我々は… 諦めない！",
						"chinese": "我们… 不会放弃！",
						"french": "Nous… n'abandonnerons pas !",
						"spanish": "¡No… nos rendiremos!",
						"vietnamese": "Chúng ta… không bỏ cuộc!",
						"thai": "พวกเรา… ไม่ยอมแพ้!",
						"hindi": "हम… हार नहीं मानेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_1"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"그림자가 드리운 도시, 비극은 늘 반복되었다.",
			"어느 고아 소녀의 손에서, 그 비극이 다시 태어났다.",
			"절규와 파멸의 기록. 도시의 눈물이 종이 위에 흐른다.",
			"그리고 그 슬픔은, 복수의 칼날을 든 자에게 향했다.",
			"이 순환의 끝에서, 우리는 무엇을 알게 될까."
		],
		"english": [
			"In the shadow-veiled city, tragedy always repeated itself.",
			"From the hands of an orphaned girl, that tragedy was reborn.",
			"A record of screams and ruin. The city's tears flow onto the paper.",
			"And that sorrow turned towards the one wielding the blade of revenge.",
			"At the end of this cycle, what will we come to know?"
		],
		"japanese": [
			"影が覆う都市で、悲劇は常に繰り返された。",
			"ある孤児の少女の手で、その悲劇は再び生まれた。",
			"絶叫と破滅の記録。都市の涙が紙の上に流れる。",
			"そしてその悲しみは、復讐の刃を振るう者へと向かった。",
			"この循環の終わりで、私たちは何を知るのだろうか。"
		],
		"chinese": [
			"在阴影笼罩的城市，悲剧总是一再重演。",
			"在一个孤儿少女的手中，那场悲剧再次重生。",
			"尖叫与毁灭的记录。城市的眼泪流淌在纸上。",
			"而那份悲伤，指向了手持复仇之刃的人。",
			"在这个循环的尽头，我们将会知道什么？"
		],
		"french": [
			"Dans la ville voilée d'ombres, la tragédie se répétait sans cesse.",
			"Entre les mains d'une orpheline, cette tragédie renaissait.",
			"Un récit de hurlements et de ruine. Les larmes de la ville coulent sur le papier.",
			"Et cette tristesse se tourna vers celui qui brandissait la lame de la vengeance.",
			"Au bout de ce cycle, que saurons-nous ?"
		],
		"spanish": [
			"En la ciudad cubierta de sombras, la tragedia siempre se repetía.",
			"En las manos de una niña huérfana, esa tragedia renació.",
			"Un registro de gritos y ruina. Las lágrimas de la ciudad fluyen sobre el papel.",
			"Y esa tristeza se dirigió hacia quien empuñaba la espada de la venganza.",
			"Al final de este ciclo, ¿qué llegaremos a saber?"
		],
		"vietnamese": [
			"Trong thành phố chìm trong bóng tối, bi kịch luôn lặp lại.",
			"Trong tay một cô bé mồ côi, bi kịch ấy lại tái sinh.",
			"Ghi chép về những tiếng thét và sự hủy diệt. Nước mắt của thành phố chảy trên giấy.",
			"Và nỗi buồn ấy, hướng về kẻ cầm lưỡi dao báo thù.",
			"Ở cuối vòng luân hồi này, chúng ta sẽ biết được điều gì?"
		],
		"thai": [
			"ในเมืองที่ถูกปกคลุมด้วยเงามืด โศกนาฏกรรมมักจะซ้ำรอยเสมอ",
			"จากมือของเด็กสาวกำพร้า โศกนาฏกรรมนั้นได้ถือกำเนิดขึ้นอีกครั้ง",
			"บันทึกแห่งเสียงกรีดร้องและความพินาศ น้ำตาของเมืองไหลรินบนกระดาษ",
			"และความเศร้านั้น ได้พุ่งตรงไปยังผู้ที่ถือดาบแห่งการแก้แค้น",
			"เมื่อสิ้นสุดวงจรนี้ เราจะได้รู้อะไรบ้าง"
		],
		"hindi": [
			"छाया से ढके शहर में, त्रासदी हमेशा खुद को दोहराती रही。",
			"एक अनाथ लड़की के हाथों में, वह त्रासदी फिर से पैदा हुई।",
			"चीखों और विनाश का एक रिकॉर्ड। शहर के आँसू कागज़ पर बहते हैं।",
			"और वह दुख, प्रतिशोध की तलवार थामे हुए व्यक्ति की ओर मुड़ गया।",
			"इस चक्र के अंत में, हम क्या जान पाएंगे?"
		]
	}
} as const;
