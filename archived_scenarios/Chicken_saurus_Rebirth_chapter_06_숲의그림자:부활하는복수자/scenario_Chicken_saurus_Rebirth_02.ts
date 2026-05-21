export const scenario_Chicken_saurus_Rebirth_02 = {
	"scenario_id": "Chicken_saurus_Rebirth_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 침묵하지 않았다. 비명으로 가득했다.",
			"뒤틀린 생명들, 놈들의 그림자가 숲을 잠식했다.",
			"수호자는 경고했다. 이 모든 비극의 시작은… 치킨-사우루스.",
			"숨 쉬는 모든 것이 변이되고 있다. 살육만이 남은 숲.",
			"이제 선택해야 한다. 맞서 싸울 것인가, 잠식될 것인가."
		],
		"english": [
			"The forest was not silent. It was filled with screams.",
			"Twisted creatures, their shadows consumed the forest.",
			"The guardian warned. The beginning of all this tragedy was... the Chicken-saurus.",
			"Everything that breathes is mutating. A forest where only slaughter remains.",
			"Now you must choose. Fight back, or be consumed."
		],
		"japanese": [
			"森は沈黙していなかった。悲鳴に満ちていた。",
			"ねじれた生命、奴らの影が森を侵食した。",
			"守護者は警告した。この悲劇の始まりは…チキンサウルスだった。",
			"呼吸するものすべてが変異している。殺戮だけが残った森。",
			"今、選択しなければならない。戦うか、侵食されるか。"
		],
		"chinese": [
			"森林并未沉默。它充满了尖叫。",
			"扭曲的生命，它们的阴影吞噬了森林。",
			"守护者警告了。这场悲剧的开端是……鸡龙。",
			"一切呼吸之物都在变异。只剩下杀戮的森林。",
			"现在必须选择。是反击，还是被吞噬。"
		],
		"french": [
			"La forêt n'était pas silencieuse. Elle était remplie de cris.",
			"Des vies tordues, leurs ombres ont consumé la forêt.",
			"Le gardien a prévenu. Le début de toute cette tragédie était… le Poulet-saure.",
			"Tout ce qui respire mute. Une forêt où seule la boucherie demeure.",
			"Maintenant, tu dois choisir. Te battre, ou être consumé."
		],
		"spanish": [
			"El bosque no estaba en silencio. Estaba lleno de gritos.",
			"Criaturas retorcidas, sus sombras devoraron el bosque.",
			"El guardián advirtió. El comienzo de toda esta tragedia fue… el Pollo-saurio.",
			"Todo lo que respira está mutando. Un bosque donde solo queda la masacre.",
			"Ahora debes elegir. Luchar, o ser consumido."
		],
		"vietnamese": [
			"Rừng không hề im lặng. Nó tràn ngập tiếng thét.",
			"Những sinh vật vặn vẹo, bóng tối của chúng đã nuốt chửng khu rừng.",
			"Người bảo hộ đã cảnh báo. Khởi đầu của bi kịch này là… Gà-khủng long.",
			"Mọi thứ thở đều đang biến đổi. Một khu rừng chỉ còn lại sự tàn sát.",
			"Giờ phải lựa chọn. Chống trả, hay bị nuốt chửng."
		],
		"thai": [
			"ป่าไม่ได้เงียบงัน มันเต็มไปด้วยเสียงกรีดร้อง",
			"สิ่งมีชีวิตที่บิดเบี้ยว เงาของพวกมันกลืนกินป่า",
			"ผู้พิทักษ์เตือนแล้ว จุดเริ่มต้นของโศกนาฏกรรมทั้งหมดคือ... ไก่-ซอรัส",
			"ทุกสิ่งที่หายใจกำลังกลายพันธุ์ ป่าที่เหลือเพียงการสังหาร",
			"ถึงเวลาต้องเลือกแล้ว จะสู้กลับ หรือจะถูกกลืนกิน"
		],
		"hindi": [
			"जंगल खामोश नहीं था। वह चीखों से भरा था।",
			"विकृत जीव, उनकी परछाइयों ने जंगल को निगल लिया।",
			"संरक्षक ने चेतावनी दी। इस सारी त्रासदी की शुरुआत… चिकन-सॉरस था।",
			"सांस लेने वाली हर चीज़ बदल रही है। सिर्फ़ क़त्लेआम बचा हुआ जंगल।",
			"अब तुम्हें चुनना होगा। मुकाबला करोगे, या निगल लिए जाओगे।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "새벽녘 숲, 어둠은 사라졌지만 평화는 없었다.",
						"english": "Forest at dawn, darkness gone, but no peace.",
						"japanese": "夜明けの森、闇は消えたが平和はなかった。",
						"chinese": "黎明森林，黑暗消散，但没有和平。",
						"french": "Forêt à l'aube, l'obscurité a disparu, mais pas la paix.",
						"spanish": "Bosque al amanecer, la oscuridad se fue, pero no la paz.",
						"vietnamese": "Rừng lúc bình minh, bóng tối tan biến, nhưng không có bình yên.",
						"thai": "ป่ายามรุ่งสาง ความมืดหายไป แต่ไม่มีสันติสุข",
						"hindi": "भोर का जंगल, अंधेरा छट गया, पर शांति नहीं थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기… 뭔가 이상해.",
						"english": "Something's strange here...",
						"japanese": "ここ…何かおかしい。",
						"chinese": "这里…有点不对劲。",
						"french": "Quelque chose ne va pas ici…",
						"spanish": "Aquí… algo es raro.",
						"vietnamese": "Ở đây… có gì đó lạ.",
						"thai": "ที่นี่... มีอะไรแปลกๆ",
						"hindi": "यहाँ… कुछ अजीब है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "누구냐. 이 숲은 너희 인간들의 놀이터가 아니다.",
						"english": "Who are you? This forest is not your playground, humans.",
						"japanese": "誰だ。この森はお前たち人間の遊び場ではない。",
						"chinese": "谁？这森林不是你们人类的游乐场。",
						"french": "Qui es-tu ? Cette forêt n'est pas le terrain de jeu de vous, les humains.",
						"spanish": "¿Quién eres? Este bosque no es vuestro patio de juegos, humanos.",
						"vietnamese": "Ngươi là ai? Khu rừng này không phải là sân chơi của các ngươi, loài người.",
						"thai": "เจ้าเป็นใคร? ป่านี้ไม่ใช่สนามเด็กเล่นของพวกเจ้า มนุษย์เอ๋ย",
						"hindi": "कौन हो तुम? यह जंगल तुम इंसानों का खेल का मैदान नहीं है।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우린 침입자가 아니야. 숲이 변하고 있어.",
						"english": "We're not intruders. The forest is changing.",
						"japanese": "我々は侵入者じゃない。森が変化しているんだ。",
						"chinese": "我们不是入侵者。森林正在变化。",
						"french": "Nous ne sommes pas des intrus. La forêt change.",
						"spanish": "No somos intrusos. El bosque está cambiando.",
						"vietnamese": "Chúng tôi không phải kẻ xâm nhập. Rừng đang thay đổi.",
						"thai": "เราไม่ใช่ผู้บุกรุก ป่ากำลังเปลี่ยนไป",
						"hindi": "हम घुसपैठिए नहीं हैं। जंगल बदल रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "변이된 건 너희 인간들뿐이다. 탐욕스러운 벌레들.",
						"english": "Only you humans have mutated. Greedy insects.",
						"japanese": "変異したのはお前たち人間だけだ。貪欲な虫どもめ。",
						"chinese": "变异的只有你们人类。贪婪的虫子。",
						"french": "Seuls vous, les humains, avez muté. Insectes avides.",
						"spanish": "Solo vosotros, humanos, habéis mutado. Insectos codiciosos.",
						"vietnamese": "Chỉ có loài người các ngươi biến dị. Những con côn trùng tham lam.",
						"thai": "มีแต่มนุษย์พวกเจ้าเท่านั้นที่กลายพันธุ์ แมลงผู้ละโมบ",
						"hindi": "सिर्फ़ तुम इंसान ही बदले हो। लालची कीड़े।"
					},
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저기, 저건…?",
						"english": "Look, what's that...?",
						"japanese": "「あれは…？」",
						"chinese": "“看，那是什么…？”",
						"french": "« Regarde, qu'est-ce que c'est... ? »",
						"spanish": "¿Mira, qué es eso...?",
						"vietnamese": "Kìa, cái gì thế...?",
						"thai": "นั่นมันอะไรน่ะ...?",
						"hindi": "देखो, वो क्या है...?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "멀리서 기괴하게 변형된 짐승의 울음소리가 들려왔다.",
						"english": "From afar, the eerie cry of a grotesquely mutated beast echoed.",
						"japanese": "「遠くから、異様に変形した獣の鳴き声が聞こえてきた。」",
						"chinese": "“远处传来一声怪异变异野兽的吼叫。”",
						"french": "« Au loin, le cri étrange d'une bête grotesquement mutée résonnait. »",
						"spanish": "De lejos, el escalofriante aullido de una bestia grotescamente mutada resonó.",
						"vietnamese": "Từ xa, tiếng gầm ghê rợn của một con quái vật bị biến dị vang vọng.",
						"thai": "จากที่ไกลออกไป เสียงคำรามอันน่าขนลุกของสัตว์ร้ายที่กลายพันธุ์อย่างน่าเกลียดน่ากลัวก็ดังขึ้น",
						"hindi": "दूर से, एक विकृत, अजीबोगरीब जानवर की चीख सुनाई दी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "봤나? 숲은 스스로를 지킨다. 너희 때문에.",
						"english": "See? The forest protects itself. Because of you.",
						"japanese": "「見たか？森は自らを守る。お前たちのせいでな。」",
						"chinese": "“看到了吗？森林会自我保护。因为你们。”",
						"french": "« Tu vois ? La forêt se protège. À cause de vous. »",
						"spanish": "¿Ves? El bosque se protege a sí mismo. Por vuestra culpa.",
						"vietnamese": "Thấy không? Rừng tự bảo vệ mình. Là vì các ngươi.",
						"thai": "เห็นไหม? ป่าปกป้องตัวเอง เพราะพวกแกนั่นแหละ",
						"hindi": "देखा? जंगल खुद की रक्षा करता है। तुम्हारी वजह से।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상 방해하지 마. 내가 처리할 테니까.",
						"english": "Don't interfere any further. I'll handle this.",
						"japanese": "「もう邪魔するな。私が処理するから。」",
						"chinese": "“别再干预了。我会处理的。”",
						"french": "« N'interfère plus. Je m'en occupe. »",
						"spanish": "No interfieras más. Yo me encargo.",
						"vietnamese": "Đừng can thiệp nữa. Ta sẽ lo liệu.",
						"thai": "อย่าเข้ามายุ่งอีก ฉันจะจัดการเอง",
						"hindi": "और दखल मत दो। मैं इसे संभाल लूंगा।"
					},
					"speaker": "cedar",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "혼자선 무리야. 변이된 놈들이 너무 많아.",
						"english": "You can't do it alone. There are too many mutated ones.",
						"japanese": "「一人では無理だ。変異した奴らが多すぎる。」",
						"chinese": "“你一个人不行。变异体太多了。”",
						"french": "« Tu ne peux pas faire ça seul. Il y a trop de créatures mutées. »",
						"spanish": "No puedes hacerlo solo. Hay demasiados mutantes.",
						"vietnamese": "Một mình không được đâu. Quái vật đột biến quá nhiều.",
						"thai": "นายทำคนเดียวไม่ไหวหรอก พวกกลายพันธุ์มันเยอะเกินไป",
						"hindi": "तुम अकेले नहीं कर सकते। बहुत सारे उत्परिवर्तित जीव हैं।"
					}
				},
				{
					"content": {
						"korean": "땅속에서 기어나온 거대한 뿌리들이 길을 막았다. 비정상적으로 뒤틀린 형태였다.",
						"english": "Giant roots, emerging from the ground, blocked the path. They were abnormally twisted.",
						"japanese": "「地面から這い出た巨大な根が道を塞いだ。異常にねじれた形をしていた。」",
						"chinese": "“从地下冒出的巨大根茎挡住了去路。它们扭曲得异常。”",
						"french": "« D'énormes racines, surgissant du sol, bloquaient le chemin. Elles étaient anormalement tordues. »",
						"spanish": "Enormes raíces, emergiendo del suelo, bloquearon el camino. Estaban anormalmente retorcidas.",
						"vietnamese": "Những rễ cây khổng lồ trồi lên từ lòng đất chặn lối đi. Chúng bị biến dạng một cách bất thường.",
						"thai": "รากขนาดใหญ่ที่เลื้อยออกมาจากพื้นดินได้ขวางทาง พวกมันบิดเบี้ยวผิดปกติ",
						"hindi": "जमीन से निकली विशाल जड़ें रास्ता रोक रही थीं। वे असामान्य रूप से मुड़ी हुई थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이건 심상치 않아. 단순한 침략이 아니다.",
						"english": "...This isn't normal. It's not a simple invasion.",
						"japanese": "「…これは尋常じゃない。単純な侵略ではない。」",
						"chinese": "“……这不寻常。这不是一场简单的入侵。”",
						"french": "« ...Ce n'est pas normal. Ce n'est pas une simple invasion. »",
						"spanish": "...Esto no es normal. No es una simple invasión.",
						"vietnamese": "...Chuyện này không bình thường. Đây không phải là một cuộc xâm lược đơn thuần.",
						"thai": "...นี่มันไม่ปกติ นี่ไม่ใช่แค่การบุกรุกธรรมดา",
						"hindi": "...यह सामान्य नहीं है। यह सिर्फ एक हमला नहीं है।"
					},
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "치킨-사우루스의 흔적일지도 몰라.",
						"english": "It might be the traces of Chicken-saurus.",
						"japanese": "「チキンサウルスの痕跡かもしれない。」",
						"chinese": "“这可能是鸡龙的痕迹。”",
						"french": "« Ce pourrait être les traces du Poulet-saurus. »",
						"spanish": "Podrían ser rastros del Pollo-saurus.",
						"vietnamese": "Có lẽ là dấu vết của Khủng long Gà.",
						"thai": "นี่อาจเป็นร่องรอยของชิกเก้น-ซอรัส",
						"hindi": "यह चिकन-सॉरस के निशान हो सकते हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "…그 이름은 입에 담지 마라.",
						"english": "...Don't utter that name.",
						"japanese": "「…その名を口にするな。」",
						"chinese": "“……别提那个名字。”",
						"french": "« ...Ne prononce pas ce nom. »",
						"spanish": "...No pronuncies ese nombre.",
						"vietnamese": "...Đừng nhắc đến cái tên đó.",
						"thai": "...อย่าเอ่ยชื่อนั้น",
						"hindi": "...उस नाम का उच्चारण मत करो।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "cedar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "놈들이 점점 강해지고 있어.",
						"english": "They're getting stronger.",
						"japanese": "「奴らがどんどん強くなっている。」",
						"chinese": "“他们越来越强了。”",
						"french": "« Ils deviennent de plus en plus forts. »",
						"spanish": "Se están haciendo más fuertes.",
						"vietnamese": "Bọn chúng đang ngày càng mạnh hơn.",
						"thai": "พวกมันแข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "वे और मजबूत होते जा रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "치킨-사우루스의 마법 잔재가 숲을 오염시키고 있다.",
						"english": "Chicken-saurus's magic residue is polluting the forest.",
						"japanese": "チキンサウルスの魔法の残滓が森を汚染している。",
						"chinese": "鸡龙的魔法残余正在污染森林。",
						"french": "Les résidus magiques du Poulet-saurus polluent la forêt.",
						"spanish": "Los restos mágicos del Pollo-saurio están contaminando el bosque.",
						"vietnamese": "Tàn dư ma thuật của Khủng long Gà đang làm ô nhiễm khu rừng.",
						"thai": "เศษเสี้ยวเวทมนตร์ของไก่ซอรัสกำลังปนเปื้อนป่า",
						"hindi": "चिकन-सॉरस के जादुई अवशेष जंगल को प्रदूषित कर रहे हैं।"
					},
					"speaker": "cedar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "발치에서 희미하게 빛나는 버섯들이 발견되었다. 낯선 종류였다.",
						"english": "Faintly glowing mushrooms were found at my feet. They were of an unknown kind.",
						"japanese": "足元に淡く光るキノコが見つかった。見慣れない種類だった。",
						"chinese": "脚边发现了微弱发光的蘑菇。是一种陌生的种类。",
						"french": "Des champignons faiblement lumineux ont été trouvés à mes pieds. C'était une espèce inconnue.",
						"spanish": "Se encontraron hongos que brillaban débilmente a mis pies. Eran de una especie desconocida.",
						"vietnamese": "Những cây nấm phát sáng mờ ảo được tìm thấy dưới chân tôi. Chúng là một loại lạ.",
						"thai": "พบเห็ดเรืองแสงจางๆ ที่ปลายเท้า เป็นชนิดที่ไม่คุ้นเคย",
						"hindi": "मेरे पैरों के पास हल्की चमक वाली मशरूम मिलीं। वे एक अज्ञात प्रकार की थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "저 빛은… 숲의 고통이다.",
						"english": "That light… is the forest's agony.",
						"japanese": "あの光は… 森の苦痛だ。",
						"chinese": "那光芒… 是森林的痛苦。",
						"french": "Cette lumière… est l'agonie de la forêt.",
						"spanish": "Esa luz… es la agonía del bosque.",
						"vietnamese": "Ánh sáng đó… là nỗi đau của rừng.",
						"thai": "แสงนั้น… คือความเจ็บปวดของป่า",
						"hindi": "वह रोशनी… जंगल की पीड़ा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이대로 두면 숲 전체가 변이될 거야.",
						"english": "If left like this, the entire forest will mutate.",
						"japanese": "このままでは、森全体が変異してしまうだろう。",
						"chinese": "如果任其发展，整个森林都会变异。",
						"french": "Si on laisse faire, toute la forêt va muter.",
						"spanish": "Si lo dejamos así, todo el bosque mutará.",
						"vietnamese": "Nếu cứ để vậy, cả khu rừng sẽ bị biến đổi.",
						"thai": "ถ้าปล่อยไว้อย่างนี้ ป่าทั้งป่าจะกลายพันธุ์",
						"hindi": "अगर इसे ऐसे ही छोड़ दिया, तो पूरा जंगल म्यूटेट हो जाएगा।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…내가 막아야 해. 내 모든 것을 걸고.",
						"english": "…I must stop it. I'll risk everything.",
						"japanese": "…私が止めなければ。私の全てを賭けて。",
						"chinese": "…我必须阻止它。赌上我的一切。",
						"french": "…Je dois l'arrêter. Je parierai tout ce que j'ai.",
						"spanish": "…Debo detenerlo. Lo arriesgaré todo.",
						"vietnamese": "…Tôi phải ngăn chặn nó. Bằng mọi giá.",
						"thai": "…ฉันต้องหยุดมันให้ได้ เอาทุกสิ่งทุกอย่างเข้าแลก",
						"hindi": "…मुझे इसे रोकना होगा। अपनी हर चीज़ दाँव पर लगाकर।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "여긴… 마치 다른 세상 같아.",
						"english": "This place… it's like another world.",
						"japanese": "ここは… まるで別の世界のようだ。",
						"chinese": "这里… 仿佛是另一个世界。",
						"french": "Ici… c'est comme un autre monde.",
						"spanish": "Aquí… es como otro mundo.",
						"vietnamese": "Nơi này… cứ như một thế giới khác vậy.",
						"thai": "ที่นี่… เหมือนโลกอีกใบเลย",
						"hindi": "यह जगह… जैसे कोई और दुनिया हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲을 지나는 바람 속에서 알 수 없는 고대 언어 같은 속삭임이 들려왔다.",
						"english": "Whispers like an unknown ancient language could be heard in the wind passing through the forest.",
						"japanese": "森を抜ける風の中に、未知の古代言語のような囁きが聞こえた。",
						"chinese": "穿过森林的风中，传来阵阵仿佛未知古老语言的低语。",
						"french": "Des murmures comme une langue ancienne inconnue se sont fait entendre dans le vent traversant la forêt.",
						"spanish": "Se escucharon susurros como de un idioma antiguo desconocido en el viento que atravesaba el bosque.",
						"vietnamese": "Những lời thì thầm như một ngôn ngữ cổ xưa không rõ vang lên trong gió xuyên qua rừng.",
						"thai": "เสียงกระซิบคล้ายภาษาโบราณที่ไม่รู้จักดังแว่วมาตามลมที่พัดผ่านป่า",
						"hindi": "जंगल से गुजरती हवा में किसी अज्ञात प्राचीन भाषा जैसी फुसफुसाहट सुनाई दी।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "뭐지? 이 소리는…?",
						"english": "What is it? This sound…?",
						"japanese": "なんだ？この音は…？",
						"chinese": "那是什么？这声音…？",
						"french": "Qu'est-ce que c'est ? Ce son… ?",
						"spanish": "¿Qué es? Este sonido…?",
						"vietnamese": "Gì vậy? Âm thanh này…?",
						"thai": "อะไรนะ? เสียงนี้…?",
						"hindi": "यह क्या है? यह आवाज़…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "환청인가… 아니, 뭔가 부르고 있어.",
						"english": "Is it a hallucination…? No, something is calling.",
						"japanese": "幻聴か… いや、何かが呼んでいる。",
						"chinese": "是幻听吗… 不，有什么在召唤。",
						"french": "Est-ce une hallucination…? Non, quelque chose appelle.",
						"spanish": "¿Es una alucinación…? No, algo está llamando.",
						"vietnamese": "Là ảo giác sao…? Không, có gì đó đang gọi.",
						"thai": "ประสาทหลอนงั้นเหรอ… ไม่ใช่ มีอะไรบางอย่างกำลังเรียกอยู่",
						"hindi": "क्या यह मतिभ्रम है…? नहीं, कुछ पुकार रहा है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이건… 알 껍질 조각인가? 엄청 단단해.",
						"english": "This is… an eggshell fragment? It's incredibly hard.",
						"japanese": "これは… 卵の殻の破片か？すごく硬い。",
						"chinese": "这是… 蛋壳碎片吗？非常坚硬。",
						"french": "C'est… un fragment de coquille d'œuf ? C'est incroyablement dur.",
						"spanish": "¿Esto es… un fragmento de cáscara de huevo? Es increíblemente duro.",
						"vietnamese": "Đây là… mảnh vỏ trứng sao? Rất cứng.",
						"thai": "นี่มัน… ชิ้นส่วนเปลือกไข่งั้นเหรอ? แข็งมากเลย",
						"hindi": "यह… अंडे के खोल का टुकड़ा है? यह अविश्वसनीय रूप से कठोर है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "고대 생명체의 흔적. 숲이 기억하는 가장 오래된 공포.",
						"english": "Traces of an ancient being. The oldest terror the forest remembers.",
						"japanese": "古代生物の痕跡。森が記憶する最古の恐怖。",
						"chinese": "古老生物的痕迹。森林记忆中最古老的恐惧。",
						"french": "Traces d'une ancienne créature. La plus ancienne terreur dont la forêt se souvient.",
						"spanish": "Huellas de una criatura ancestral. El terror más antiguo que el bosque recuerda.",
						"vietnamese": "Dấu vết của một sinh vật cổ đại. Nỗi kinh hoàng lâu đời nhất mà khu rừng còn nhớ.",
						"thai": "ร่องรอยของสิ่งมีชีวิตโบราณ ความหวาดกลัวที่เก่าแก่ที่สุดที่ป่าจดจำได้",
						"hindi": "एक प्राचीन प्राणी के निशान। जंगल को याद सबसे पुराना आतंक।"
					},
					"speaker": "cedar"
				},
				{
					"content": {
						"korean": "우리, 어디까지 온 거지…?",
						"english": "How far have we come...?",
						"japanese": "我々、どこまで来たんだ…？",
						"chinese": "我们到底走到哪了…？",
						"french": "Jusqu'où sommes-nous allés...?",
						"spanish": "¿Hasta dónde hemos llegado...?",
						"vietnamese": "Chúng ta đã đi đến đâu rồi...?",
						"thai": "เรามาไกลแค่ไหนแล้ว...?",
						"hindi": "हम कितनी दूर आ गए हैं...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "돌아갈 길은 없어. 숲은 이미 오염됐으니까.",
						"english": "There's no turning back. The forest is already corrupted.",
						"japanese": "もう戻れない。森はすでに汚染されたから。",
						"chinese": "已经没有回头路了。森林已经被污染了。",
						"french": "Il n'y a pas de retour possible. La forêt est déjà corrompue.",
						"spanish": "No hay vuelta atrás. El bosque ya está corrompido.",
						"vietnamese": "Không còn đường quay lại. Khu rừng đã bị ô nhiễm rồi.",
						"thai": "ไม่มีทางย้อนกลับ ป่าถูกแปดเปื้อนแล้ว",
						"hindi": "वापस जाने का कोई रास्ता नहीं। जंगल पहले ही दूषित हो चुका है।"
					},
					"speaker": "cedar"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "가장 깊은 곳, 뒤틀린 마법의 근원이 모습을 드러냈다.",
						"english": "The deepest place, the source of twisted magic, has revealed itself.",
						"japanese": "最深部、ねじれた魔法の根源が姿を現した。",
						"chinese": "最深处，扭曲魔法的源头显露了真面目。",
						"french": "Au plus profond, la source de la magie tordue s'est révélée.",
						"spanish": "El lugar más profundo, la fuente de la magia retorcida, se ha revelado.",
						"vietnamese": "Nơi sâu nhất, nguồn gốc của phép thuật méo mó, đã lộ diện.",
						"thai": "ในส่วนลึกที่สุด ต้นกำเนิดของเวทมนตร์บิดเบี้ยวได้ปรากฏตัวขึ้น",
						"hindi": "सबसे गहरा स्थान, मुड़ी हुई जादू का स्रोत, प्रकट हुआ है।"
					}
				},
				{
					"content": {
						"korean": "어리석은 인간들. 숲은 너희에게 복종하지 않아.",
						"english": "Foolish mortals. The forest will not obey you.",
						"japanese": "愚かな人間たち。森はお前たちに従わない。",
						"chinese": "愚蠢的人类。森林不会服从你们。",
						"french": "Mortels stupides. La forêt ne vous obéira pas.",
						"spanish": "Humanos necios. El bosque no os obedecerá.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc. Khu rừng sẽ không tuân theo các ngươi.",
						"thai": "มนุษย์โง่เขลา ป่าจะไม่เชื่อฟังเจ้า",
						"hindi": "मूर्ख मनुष्यों। जंगल तुम्हें नहीं मानेगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 변이를 일으킨 원흉이로군!",
						"english": "So you're the one behind all these mutations!",
						"japanese": "お前がこの全ての変異を引き起こした元凶か！",
						"chinese": "原来你就是引起所有这些变异的元凶！",
						"french": "C'est donc toi le responsable de toutes ces mutations !",
						"spanish": "¡Así que eres el causante de todas estas mutaciones!",
						"vietnamese": "Vậy ra ngươi chính là kẻ gây ra tất cả những biến đổi này!",
						"thai": "แกคือต้นเหตุของการกลายพันธุ์ทั้งหมดนี่!",
						"hindi": "तो तुम ही हो इन सभी उत्परिवर्तनों के पीछे!"
					}
				},
				{
					"content": {
						"korean": "나는 그저… 숲의 의지를 따른 것뿐.",
						"english": "I merely... followed the forest's will.",
						"japanese": "私はただ… 森の意思に従っただけだ。",
						"chinese": "我只是… 遵循了森林的意志。",
						"french": "Je n'ai fait que… suivre la volonté de la forêt.",
						"spanish": "Yo solo… seguí la voluntad del bosque.",
						"vietnamese": "Ta chỉ là… tuân theo ý chí của khu rừng.",
						"thai": "ข้าแค่... ทำตามเจตจำนงของป่าเท่านั้น",
						"hindi": "मैं बस... जंगल की इच्छा का पालन कर रहा था।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "변이된 괴물! 숲을 더럽히는 자!",
						"english": "Mutated monster! Defiler of the forest!",
						"japanese": "変異した怪物！森を汚す者め！",
						"chinese": "变异的怪物！玷污森林者！",
						"french": "Monstre muté ! Souilleur de la forêt !",
						"spanish": "¡Monstruo mutado! ¡Profanador del bosque!",
						"vietnamese": "Quái vật biến dị! Kẻ làm ô uế khu rừng!",
						"thai": "สัตว์ประหลาดกลายพันธุ์! ผู้แปดเปื้อนป่า!",
						"hindi": "परिवर्तित राक्षस! जंगल को भ्रष्ट करने वाला!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "cedar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 힘은 이제부터 시작될 텐데.",
						"english": "...Is this all you've got? My true power is just beginning.",
						"japanese": "…たったこれだけか。本当の力はこれから始まるというのに。",
						"chinese": "…就这点本事吗？真正的力量才刚刚开始。",
						"french": "...C'est tout ce que vous avez ? Mon vrai pouvoir ne fait que commencer.",
						"spanish": "...¿Es todo lo que tienes? Mi verdadero poder apenas comienza.",
						"vietnamese": "…Chỉ có thế thôi sao. Sức mạnh thật sự của ta chỉ mới bắt đầu thôi.",
						"thai": "...แค่นี้เองเหรอ พลังที่แท้จริงเพิ่งจะเริ่มต้นขึ้นเอง",
						"hindi": "...बस इतना ही है? मेरी असली शक्ति तो अब शुरू होगी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 다 끝났어!",
						"english": "What are you talking about? It's over!",
						"japanese": "何を言っている？全て終わったんだ！",
						"chinese": "你在说什么？一切都结束了！",
						"french": "De quoi parles-tu ? C'est fini !",
						"spanish": "¿De qué estás hablando? ¡Se acabó!",
						"vietnamese": "Ngươi đang nói gì vậy? Mọi chuyện đã kết thúc rồi!",
						"thai": "พูดอะไรน่ะ? มันจบแล้ว!",
						"hindi": "तुम क्या कह रहे हो? सब खत्म हो गया!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "숲은… 기억한다… 고대 마법… 깨어나리라…",
						"english": "The forest... remembers... Ancient magic... will awaken...",
						"japanese": "森は…覚えている…古代の魔法…目覚めるだろう…",
						"chinese": "森林…记得…古老魔法…将苏醒…",
						"french": "La forêt... se souvient... Magie ancienne... s'éveillera...",
						"spanish": "El bosque... recuerda... Magia ancestral... despertará...",
						"vietnamese": "Rừng... ghi nhớ... Phép thuật cổ đại... sẽ thức tỉnh...",
						"thai": "ป่า... จดจำ... เวทมนตร์โบราณ... จะตื่นขึ้น...",
						"hindi": "वन... स्मरण करता है... प्राचीन जादू... जागृत होगा..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…잠시 멈췄을 뿐. 놈들의 뿌리는 깊다.",
						"english": "...Only a temporary halt. Their roots run deep.",
						"japanese": "…一時的に止まっただけだ。奴らの根は深い。",
						"chinese": "…只是暂时停歇。它们的根源很深。",
						"french": "...Seulement un répit. Leurs racines sont profondes.",
						"spanish": "...Solo una pausa. Sus raíces son profundas.",
						"vietnamese": "...Chỉ tạm dừng thôi. Rễ của chúng rất sâu.",
						"thai": "...แค่หยุดชั่วคราวเท่านั้น รากของพวกมันหยั่งลึก",
						"hindi": "...केवल एक क्षणिक ठहराव। उनकी जड़ें गहरी हैं।"
					},
					"speaker": "cedar",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "변이된 숲의 기운이 잠시 가라앉았다. 하지만 바람 속 속삭임은 멈추지 않았다.",
						"english": "The mutated forest's aura has calmed for now. But the whispers in the wind haven't stopped.",
						"japanese": "変異した森の気配は一時的に落ち着いた。だが、風の中の囁きは止まらない。",
						"chinese": "变异森林的气息暂时平息。但风中的低语从未停止。",
						"french": "L'aura de la forêt mutée s'est calmée pour l'instant. Mais les murmures dans le vent n'ont pas cessé.",
						"spanish": "El aura del bosque mutado se ha calmado por ahora. Pero los susurros en el viento no han cesado.",
						"vietnamese": "Hào quang rừng đột biến đã tạm lắng. Nhưng tiếng thì thầm trong gió vẫn không ngừng.",
						"thai": "พลังของป่าที่กลายพันธุ์สงบลงชั่วคราว แต่เสียงกระซิบในสายลมยังไม่หยุด",
						"hindi": "उत्परिवर्तित वन का आभा मंडल अभी शांत हो गया है। लेकिन हवा में फुसफुसाहट बंद नहीं हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "cedar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 존재들. 숲의 힘은 너희가 감히 헤아릴 수 없다.",
						"english": "Insignificant beings. The forest's power is beyond your comprehension.",
						"japanese": "愚かな存在め。森の力は貴様らが計り知れるものではない。",
						"chinese": "微不足道的存在。森林的力量并非你们所能理解。",
						"french": "Êtres insignifiants. Le pouvoir de la forêt dépasse votre entendement.",
						"spanish": "Seres insignificantes. El poder del bosque está más allá de vuestra comprensión.",
						"vietnamese": "Những kẻ hèn mọn. Sức mạnh của rừng không phải thứ các ngươi có thể hiểu.",
						"thai": "พวกเจ้าผู้ไร้ค่า พลังของป่าเกินกว่าที่พวกเจ้าจะหยั่งถึง",
						"hindi": "नगण्य प्राणी। वन की शक्ति तुम्हारी समझ से परे है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 여기서 끝낼 순 없어!",
						"english": "Ugh... I can't let it end here!",
						"japanese": "くっ…ここで終わらせるわけにはいかない！",
						"chinese": "呃…不能在这里结束！",
						"french": "Ugh... Je ne peux pas laisser ça se terminer ici !",
						"spanish": "Ugh... ¡No puedo dejar que termine aquí!",
						"vietnamese": "Ưgh... Không thể kết thúc ở đây được!",
						"thai": "อึก... ยังหยุดแค่นี้ไม่ได้!",
						"hindi": "उफ़... मैं इसे यहीं खत्म नहीं कर सकता!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "…포기하지 마라. 숲은 아직 우리를 필요로 한다.",
						"english": "...Don't give up. The forest still needs us.",
						"japanese": "…諦めるな。森はまだ我々を必要としている。",
						"chinese": "…别放弃。森林还需要我们。",
						"french": "...N'abandonnez pas. La forêt a encore besoin de nous.",
						"spanish": "...No te rindas. El bosque todavía nos necesita.",
						"vietnamese": "...Đừng bỏ cuộc. Rừng vẫn cần chúng ta.",
						"thai": "...อย่าเพิ่งยอมแพ้ ป่ายังคงต้องการเรา",
						"hindi": "...हार मत मानो। वन को अभी भी हमारी आवश्यकता है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
