export const scenario_snowy_gravemist_25_02 = {
	"scenario_id": "snowy_gravemist_25_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라는 더욱 거세지고 있었다.",
			"얼어붙은 얼음 속에서 알 수 없는 목소리들이 속삭였다.",
			"환영과 현실의 경계가, 서서히 무너져 내렸다.",
			"잊혀진 맹세, 그리고 깨어진 약속의 메아리."
		],
		"english": [
			"The blizzard grew fiercer.",
			"Unseen voices whispered from within the frozen ice.",
			"The boundary between illusion and reality slowly crumbled.",
			"The echo of forgotten vows and broken promises."
		],
		"japanese": [
			"吹雪はさらに激しさを増していた。",
			"凍てつく氷の中から、未知の声が囁いた。",
			"幻影と現実の境界が、ゆっくりと崩れ落ちた。",
			"忘れ去られた誓い、そして破られた約束の残響。"
		],
		"chinese": [
			"暴风雪愈发猛烈。",
			"未知的声音在冰冷的寒冰中低语。",
			"幻象与现实的界限，渐渐崩塌。",
			"被遗忘的誓言，以及破碎承诺的回响。"
		],
		"french": [
			"Le blizzard s'intensifiait.",
			"Des voix inconnues chuchotaient depuis la glace gelée.",
			"La frontière entre l'illusion et la réalité s'effondrait lentement.",
			"L'écho des serments oubliés et des promesses brisées."
		],
		"spanish": [
			"La ventisca arreciaba.",
			"Voces desconocidas susurraban desde el hielo congelado.",
			"La frontera entre la ilusión y la realidad se desmoronaba lentamente.",
			"El eco de votos olvidados y promesas rotas."
		],
		"vietnamese": [
			"Cơn bão tuyết ngày càng dữ dội hơn.",
			"Những giọng nói không rõ thì thầm từ bên trong lớp băng giá.",
			"Ranh giới giữa ảo ảnh và hiện thực, dần dần sụp đổ.",
			"Tiếng vọng của những lời thề bị lãng quên và những lời hứa tan vỡ."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำรุนแรงขึ้น",
			"เสียงกระซิบที่ไม่รู้จักเล็ดลอดออกมาจากน้ำแข็งที่จับตัว",
			"เส้นแบ่งระหว่างภาพลวงตาและความเป็นจริง ค่อยๆ พังทลายลง",
			"เสียงสะท้อนของคำสาบานที่ถูกลืมและคำสัญญาที่แตกสลาย"
		],
		"hindi": [
			"बर्फीला तूफान और तेज़ होता जा रहा था।",
			"जमी हुई बर्फ़ में अनजानी आवाज़ें फुसफुसा रही थीं।",
			"भ्रम और हकीकत की सीमा, धीरे-धीरे टूट रही थी।",
			"भूले हुए वादों और टूटे हुए इकरार की गूंज।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 춤추듯 휘몰아쳤다. 배 안은 거대한 얼음 무덤 같았다.",
						"english": "The blizzard raged like a dance. The ship felt like a colossal ice tomb.",
						"japanese": "吹雪が舞い踊るように荒れ狂った。船内は巨大な氷の墓のようだった。",
						"chinese": "暴风雪狂舞。船内宛如一座巨大的冰墓。",
						"french": "Le blizzard dansait et tourbillonnait. L'intérieur du navire était comme une immense tombe de glace.",
						"spanish": "La ventisca danzaba furiosa. El interior del barco era como una gigantesca tumba de hielo.",
						"vietnamese": "Bão tuyết điên cuồng như một vũ điệu. Bên trong con tàu như một lăng mộ băng khổng lồ.",
						"thai": "พายุหิมะโหมกระหน่ำดุจระบำ ภายในเรือราวกับสุสานน้ำแข็งมหึมา",
						"hindi": "बर्फीला तूफान नाचता हुआ आ रहा था। जहाज़ के अंदर एक विशाल बर्फीली कब्र जैसा लग रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "더 깊이 갈수록… 더 차가워져.",
						"english": "The deeper we go... the colder it gets.",
						"japanese": "もっと深く行くと… もっと冷たくなる。",
						"chinese": "越深入… 越冷。",
						"french": "Plus on s'enfonce… plus il fait froid.",
						"spanish": "Cuanto más profundo vamos… más frío hace.",
						"vietnamese": "Càng đi sâu... càng lạnh.",
						"thai": "ยิ่งลึกเข้าไป… ยิ่งหนาวขึ้น",
						"hindi": "जितना गहरा हम जाएंगे… उतना ठंडा होता जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "이 목소리들... 대체 뭐야?",
						"english": "These voices... What are they?",
						"japanese": "この声… いったい何だ？",
						"chinese": "这些声音… 到底是什么？",
						"french": "Ces voix… Qu'est-ce que c'est que ça ?",
						"spanish": "Estas voces… ¿Qué son?",
						"vietnamese": "Những giọng nói này... Rốt cuộc là gì?",
						"thai": "เสียงพวกนี้… มันอะไรกันแน่?",
						"hindi": "ये आवाज़ें… आख़िर क्या हैं?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "…또 다른 침입자들인가.",
						"english": "...More intruders, then.",
						"japanese": "…また別の侵入者か。",
						"chinese": "……又是其他入侵者吗？",
						"french": "...D'autres intrus, donc.",
						"spanish": "...¿Más intrusos?",
						"vietnamese": "...Lại là những kẻ xâm nhập khác à.",
						"thai": "…พวกผู้บุกรุกคนอื่นอีกแล้วหรือไง",
						"hindi": "…क्या और घुसपैठिए हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 누구야.",
						"english": "Who are you?",
						"japanese": "お前は誰だ。",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "คุณคือใคร",
						"hindi": "तुम कौन हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "이바르. 나와 같은 난파된 탐험가지.",
						"english": "Ivar. A shipwrecked explorer, like me.",
						"japanese": "イヴァル。私と同じく難破した探検家だ。",
						"chinese": "伊瓦尔。一个和我一样遭遇海难的探险家。",
						"french": "Ivar. Un explorateur naufragé, comme moi.",
						"spanish": "Ivar. Un explorador naufragado, como yo.",
						"vietnamese": "Ivar. Một nhà thám hiểm bị đắm tàu, giống như ta.",
						"thai": "ไอวาร์ นักสำรวจที่เรืออับปางเหมือนกับฉัน",
						"hindi": "इवर। मेरे जैसा ही एक जहाज़ पर बर्बाद हुआ खोजकर्ता।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "더 깊이 가지 마라. 이 배는 저주받았다.",
						"english": "Go no deeper. This ship is cursed.",
						"japanese": "これ以上深入りするな。この船は呪われている。",
						"chinese": "别再深入了。这艘船被诅咒了。",
						"french": "N'allez pas plus loin. Ce navire est maudit.",
						"spanish": "No vayas más profundo. Esta nave está maldita.",
						"vietnamese": "Đừng đi sâu hơn. Con tàu này bị nguyền rủa.",
						"thai": "อย่าเข้าไปลึกกว่านี้ เรือลำนี้ถูกสาป",
						"hindi": "और गहरा मत जाओ। यह जहाज शापित है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저주?",
						"english": "Cursed?",
						"japanese": "呪い？",
						"chinese": "诅咒？",
						"french": "Maudit ?",
						"spanish": "¿Maldita?",
						"vietnamese": "Nguyền rủa?",
						"thai": "สาป?",
						"hindi": "शापित?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "내가 발견한 룬 문양들… 깨진 맹세의 흔적이었다.",
						"english": "The runes I found... traces of a broken vow.",
						"japanese": "見つけたルーン文字… 破られた誓いの痕跡だった。",
						"chinese": "我发现的符文... 是破碎誓言的痕迹。",
						"french": "Les runes que j'ai trouvées... des traces d'un serment brisé.",
						"spanish": "Las runas que encontré... rastros de un juramento roto.",
						"vietnamese": "Những ký tự rune tôi tìm thấy... dấu vết của một lời thề bị phá vỡ.",
						"thai": "รูนที่ฉันพบ... เป็นร่องรอยของคำสาบานที่แตกหัก",
						"hindi": "जो मैंने runes खोजे... टूटे हुए वादे के निशान थे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "깨진 맹세라니.",
						"english": "Broken vow?",
						"japanese": "破られた誓いだと？",
						"chinese": "破碎的誓言？",
						"french": "Un serment brisé ?",
						"spanish": "¿Un juramento roto?",
						"vietnamese": "Lời thề bị phá vỡ ư?",
						"thai": "คำสาบานที่แตกหัก?",
						"hindi": "टूटा हुआ वादा?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "영광을 좇던 자들의 몰락. 그 대가로 영원히 배에 묶였지.",
						"english": "The downfall of those who sought glory. Bound to the ship forever, their price.",
						"japanese": "栄光を追った者たちの没落。その代償として、永遠に船に縛り付けられたのだ。",
						"chinese": "追逐荣耀者的陨落。作为代价，他们永远被困在这艘船上。",
						"french": "La chute de ceux qui cherchaient la gloire. Liés au navire pour l'éternité, leur châtiment.",
						"spanish": "La caída de quienes buscaron la gloria. Atados al barco para siempre, ese fue su precio.",
						"vietnamese": "Sự sa ngã của những kẻ tìm kiếm vinh quang. Đổi lại, họ bị trói buộc vĩnh viễn vào con tàu.",
						"thai": "การล่มสลายของผู้ที่แสวงหาเกียรติยศ แลกมาด้วยการถูกผูกมัดไว้กับเรือชั่วนิรันดร์",
						"hindi": "उन लोगों का पतन जिन्होंने महिमा की तलाश की। बदले में, वे हमेशा के लिए जहाज से बंध गए।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이곳의 얼음은 모든 것을 기억해.",
						"english": "The ice here remembers everything.",
						"japanese": "ここの氷はすべてを記憶している。",
						"chinese": "这里的冰雪记得一切。",
						"french": "La glace ici se souvient de tout.",
						"spanish": "El hielo aquí lo recuerda todo.",
						"vietnamese": "Băng ở đây ghi nhớ mọi thứ.",
						"thai": "น้ำแข็งที่นี่จดจำทุกสิ่ง",
						"hindi": "यहां की बर्फ सब कुछ याद रखती है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "환영이 점점 선명해져...",
						"english": "The illusions grow clearer...",
						"japanese": "幻影がますます鮮明に…",
						"chinese": "幻象越来越清晰了...",
						"french": "Les illusions deviennent plus claires...",
						"spanish": "Las ilusiones se vuelven más claras...",
						"vietnamese": "Ảo ảnh ngày càng rõ nét hơn...",
						"thai": "ภาพมายาเริ่มชัดเจนขึ้นเรื่อยๆ...",
						"hindi": "भ्रम और स्पष्ट होते जा रहे हैं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "희미하게, 끝없는 여정을 노래하는 듯한 애잔한 멜로디가 들려왔다.",
						"english": "Faintly, a sorrowful melody, as if singing of an endless journey, echoed.",
						"japanese": "かすかに、終わりのない旅を歌うような哀切なメロディーが聞こえてきた。",
						"chinese": "隐约间，传来一阵哀怨的旋律，仿佛在歌颂着无尽的旅程。",
						"french": "Faiblement, une mélodie triste, comme un chant d'un voyage sans fin, résonnait.",
						"spanish": "Débilmente, una melodía triste, como si cantara un viaje sin fin, resonó.",
						"vietnamese": "Mờ nhạt, một giai điệu buồn bã như đang hát về một hành trình vô tận vang vọng.",
						"thai": "แผ่วเบา... ท่วงทำนองอันโศกเศร้า ราวกับขับขานถึงการเดินทางอันไม่มีที่สิ้นสุดได้ยินแว่วมา",
						"hindi": "मंद स्वर में, एक दुखद धुन, मानो एक अंतहीन यात्रा का गीत गा रही हो, सुनाई दी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그것은 잊혀진 약속의 메아리이자, 벗어날 수 없는 운명이다.",
						"english": "It is the echo of a forgotten promise, and an inescapable fate.",
						"japanese": "それは忘れられた約束のこだまであり、逃れられない運命なのだ。",
						"chinese": "那是被遗忘的承诺的回声，也是无法摆脱的命运。",
						"french": "C'est l'écho d'une promesse oubliée, et un destin inéluctable.",
						"spanish": "Es el eco de una promesa olvidada, y un destino ineludible.",
						"vietnamese": "Đó là tiếng vang của một lời hứa bị lãng quên, và một định mệnh không thể thoát khỏi.",
						"thai": "มันคือเสียงสะท้อนของคำสัญญาที่ถูกลืม และโชคชะตาที่มิอาจหลีกหนี",
						"hindi": "यह एक भूली हुई प्रतिज्ञा की प्रतिध्वनि है, और एक अपरिहार्य नियति है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "우린 막을 수 있어.",
						"english": "We can stop it.",
						"japanese": "我々は止められる。",
						"chinese": "我们能阻止它。",
						"french": "Nous pouvons l'arrêter.",
						"spanish": "Podemos detenerlo.",
						"vietnamese": "Chúng ta có thể ngăn chặn nó.",
						"thai": "เราหยุดมันได้",
						"hindi": "हम इसे रोक सकते हैं।"
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "더는 물러설 곳이 없어. 여기서 모든 것이 끝날 수도 있다.",
						"english": "No turning back. This could be the end.",
						"japanese": "もう後には引けない。ここで全てが終わるかもしれない。",
						"chinese": "已无退路。一切或将在此终结。",
						"french": "Plus de retour en arrière. Tout pourrait se terminer ici.",
						"spanish": "No hay vuelta atrás. Todo podría acabar aquí.",
						"vietnamese": "Không còn đường lui. Mọi thứ có thể kết thúc ở đây.",
						"thai": "ไม่มีทางถอยอีกแล้ว ทุกอย่างอาจจบลงที่นี่",
						"hindi": "पीछे हटने की जगह नहीं है। सब कुछ यहीं खत्म हो सकता है।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두렵지 않아. 진실을 알아야 해.",
						"english": "I'm not afraid. I must know the truth.",
						"japanese": "恐れるものか。真実を知らねば。",
						"chinese": "我不惧怕。我必须知晓真相。",
						"french": "Je n'ai pas peur. Je dois connaître la vérité.",
						"spanish": "No tengo miedo. Debo saber la verdad.",
						"vietnamese": "Ta không sợ. Ta phải biết sự thật.",
						"thai": "ไม่กลัวหรอก ข้าต้องรู้ความจริง",
						"hindi": "मैं डरा हुआ नहीं हूँ। मुझे सच्चाई जाननी होगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "낡은 일지 조각이 바람에 나부꼈다. '잃어버린 명예', '감당할 수 없는 죄책감'.",
						"english": "A tattered journal page fluttered in the wind. 'Lost Honor', 'Unbearable Guilt'.",
						"japanese": "ぼろぼろの日誌の切れ端が風に舞った。「失われた名誉」「耐えがたい罪悪感」。",
						"chinese": "一页残破的日记随风飘动。“失去的荣耀”，“无法承受的罪恶感”。",
						"french": "Une page de journal déchirée flottait au vent. « Honneur Perdu », « Culpabilité Insoutenable ».",
						"spanish": "Un trozo de diario maltrecho aleteaba con el viento. 'Honor Perdido', 'Culpabilidad Insoportable'.",
						"vietnamese": "Một mảnh nhật ký cũ bay trong gió. 'Danh dự đã mất', 'Tội lỗi không thể chịu đựng'.",
						"thai": "หน้ากระดาษบันทึกเก่าขาดวิ่นปลิวไสวไปกับลม 'เกียรติยศที่หายไป', 'ความรู้สึกผิดที่ไม่อาจทานทน'",
						"hindi": "एक फटी हुई डायरी का पन्ना हवा में लहरा रहा था। 'खोया हुआ सम्मान', 'असहनीय अपराधबोध'।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "명예를 잃은 자의 고통… 너희도 겪게 될 거다.",
						"english": "The pain of the dishonored... you too shall suffer it.",
						"japanese": "名誉を失った者の苦痛… お前たちも味わうことになるだろう。",
						"chinese": "失去荣耀者的痛苦……你们也将承受。",
						"french": "La souffrance des déshonorés… vous aussi la subirez.",
						"spanish": "El dolor de los deshonrados... vosotros también lo sufriréis.",
						"vietnamese": "Nỗi đau của kẻ mất danh dự... các ngươi cũng sẽ phải trải qua.",
						"thai": "ความเจ็บปวดของผู้ที่สูญเสียเกียรติ... พวกเจ้าก็จะได้ประสบมันเช่นกัน",
						"hindi": "अपमानितों का दर्द... तुम भी इसे भुगतोगे।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "난 다를 거야.",
						"english": "I will be different.",
						"japanese": "私は違う。",
						"chinese": "我会不同。",
						"french": "Je serai différent.",
						"spanish": "Yo seré diferente.",
						"vietnamese": "Ta sẽ khác.",
						"thai": "ข้าจะไม่เหมือนใคร",
						"hindi": "मैं अलग होऊंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 얼음의 장막을 찢고 나타났다.",
						"english": "A colossal shadow tore through the icy veil.",
						"japanese": "巨大な影が氷の帳を引き裂いて現れた。",
						"chinese": "巨大的身影撕裂冰幕而现。",
						"french": "Une ombre colossale déchira le voile de glace.",
						"spanish": "Una sombra colosal rasgó el velo de hielo.",
						"vietnamese": "Một bóng đen khổng lồ xé toạc màn băng mà hiện ra.",
						"thai": "เงาร่างมหึมาฉีกม่านน้ำแข็งปรากฏตัว",
						"hindi": "एक विशाल छाया ने बर्फीले परदे को चीर कर दिखाया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 이 신성한 곳을 침범하다니.",
						"english": "How dare you... trespass upon this sacred ground.",
						"japanese": "よくも… この神聖なる地を侵すとは。",
						"chinese": "竟敢……擅闯此圣地。",
						"french": "Comment osez-vous… profaner ce lieu sacré.",
						"spanish": "¿Cómo osas... profanar este lugar sagrado?",
						"vietnamese": "Dám... xâm phạm nơi linh thiêng này.",
						"thai": "บังอาจ... เข้ามารุกรานสถานที่ศักดิ์สิทธิ์แห่งนี้",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... इस पवित्र स्थान का अतिक्रमण करने की।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네놈이 이 저주를 유지하는 건가?",
						"english": "Are you the one upholding this curse?",
						"japanese": "お前がこの呪いを保っているのか？",
						"chinese": "是你维持着这诅咒吗？",
						"french": "Est-ce toi qui maintiens cette malédiction ?",
						"spanish": "¿Eres tú quien mantiene esta maldición?",
						"vietnamese": "Ngươi là kẻ duy trì lời nguyền này sao?",
						"thai": "เจ้าคือผู้ที่รักษามนตร์สาปนี้ไว้หรือ",
						"hindi": "क्या तुम ही इस श्राप को बनाए रख रहे हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무지한 필멸자들. 너희도 곧 알게 될 것이다.",
						"english": "Ignorant mortals. You too shall soon know.",
						"japanese": "無知ななる定命の者たち。お前たちもすぐに知ることになるだろう。",
						"chinese": "无知的凡人。你们很快便会知晓。",
						"french": "Mortels ignorants. Vous aussi, vous le saurez bientôt.",
						"spanish": "Mortales ignorantes. Vosotros también lo sabréis pronto.",
						"vietnamese": "Những kẻ phàm trần ngu muội. Các ngươi cũng sẽ sớm biết thôi.",
						"thai": "เหล่ามนุษย์ผู้โง่เขลา เจ้าเองก็จะได้รู้ในไม่ช้า",
						"hindi": "अज्ञानी नश्वर। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두고 봐.",
						"english": "Just you wait.",
						"japanese": "見ていろ。",
						"chinese": "走着瞧吧。",
						"french": "Attendez et voyez.",
						"spanish": "Ya verás.",
						"vietnamese": "Cứ đợi đấy.",
						"thai": "คอยดูเถอะ",
						"hindi": "देख लेना।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "저 자는... 과거의 맹세를 지키는 파수꾼이다.",
						"english": "He... is a sentinel upholding a past vow.",
						"japanese": "あの者は…過去の誓いを守る番人だ。",
						"chinese": "那家伙…是守护过去誓言的守望者。",
						"french": "Il… est un gardien qui honore un serment passé.",
						"spanish": "Él... es un centinela que guarda un juramento pasado.",
						"vietnamese": "Hắn… là kẻ canh gác giữ lời thề trong quá khứ.",
						"thai": "เขาคือ... ผู้พิทักษ์ที่รักษาสัตย์สาบานในอดีต",
						"hindi": "वह... अतीत की प्रतिज्ञा को बनाए रखने वाला एक प्रहरी है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "건방진 이바르. 네놈도 다시 묶어주마.",
						"english": "Insolent Ivar. I'll bind you again.",
						"japanese": "生意気なイヴァル。貴様も再び縛り付けてやろう。",
						"chinese": "狂妄的伊瓦尔。我也会把你重新束缚起来。",
						"french": "Insolent Ivar. Je te ligoterai à nouveau.",
						"spanish": "Insolente Ivar. Te ataré de nuevo.",
						"vietnamese": "Ivar ngạo mạn. Ta sẽ trói ngươi lại lần nữa.",
						"thai": "ไอ้ไอวาร์ผู้โอหัง ข้าจะผูกมัดเจ้าอีกครั้ง",
						"hindi": "गुस्ताख़ इवर। मैं तुम्हें फिर से बांध दूंगा।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…나와 함께 싸워라. 이 지긋지긋한 저주를 끝내자.",
						"english": "...Fight with me. Let's end this wretched curse.",
						"japanese": "…私と共に戦え。この忌まわしい呪いを終わらせよう。",
						"chinese": "…与我并肩作战吧。让我们结束这该死的诅咒。",
						"french": "...Bats-toi avec moi. Mettons fin à cette maudite malédiction.",
						"spanish": "...Lucha conmigo. Acabemos con esta maldita maldición.",
						"vietnamese": "...Hãy chiến đấu cùng ta. Cùng kết thúc lời nguyền khốn kiếp này.",
						"thai": "...สู้ไปกับข้าเถอะ มายุติคำสาปอันเลวร้ายนี้กัน",
						"hindi": "...मुझसे लड़ो। आओ इस शापित अभिशाप को खत्म करें।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 400,
					"direction": "up",
					"action": "exit"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 필멸자여. 너희는 이 저주를 영원히 끊을 수 없다.",
						"english": "Foolish mortals. You can never break this curse.",
						"japanese": "愚かなる定命の者ども。お前たちにこの呪いを永遠に断ち切ることはできぬ。",
						"chinese": "愚蠢的凡人。你们永远无法解除这个诅咒。",
						"french": "Mortels insensés. Vous ne pourrez jamais briser cette malédiction.",
						"spanish": "Mortales insensatos. Jamás podréis romper esta maldición.",
						"vietnamese": "Hỡi những kẻ phàm trần ngu xuẩn. Các ngươi sẽ không bao giờ có thể phá giải lời nguyền này.",
						"thai": "เจ้ามนุษย์ผู้โง่เขลา เจ้าไม่มีทางทำลายคำสาปนี้ได้ตลอดไป",
						"hindi": "हे मूर्ख नश्वर प्राणियों। तुम इस शाप को कभी नहीं तोड़ सकते।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음의 속삭임이 모든 것을 집어삼키는 듯했다.",
						"english": "The whispers of ice seemed to swallow everything.",
						"japanese": "氷の囁きがすべてを飲み込むようだった。",
						"chinese": "冰冷的低语似乎吞噬了一切。",
						"french": "Les murmures de la glace semblaient tout engloutir.",
						"spanish": "Los susurros del hielo parecían engullirlo todo.",
						"vietnamese": "Những lời thì thầm của băng giá dường như nuốt chửng mọi thứ.",
						"thai": "เสียงกระซิบของน้ำแข็งราวกับกลืนกินทุกสิ่ง",
						"hindi": "बर्फ़ की फुसफुसाहट सब कुछ निगलती हुई लग रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over… yet.",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… ख़त्म नहीं हुआ है।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크아악... 이 모든 것은... 다시... 반복될 것이다...",
						"english": "Kuaaak... All of this... will... repeat again...",
						"japanese": "くあああ…この全ては…再び…繰り返されるだろう…",
						"chinese": "嘶啊啊…这一切…都将…再次…重复…",
						"french": "Kuaaak... Tout cela... se... répétera encore...",
						"spanish": "¡Kuaaak!... Todo esto... se... repetirá de nuevo...",
						"vietnamese": "Khụ khụ... Tất cả những điều này... sẽ... lặp lại một lần nữa...",
						"thai": "ควั่ก... ทั้งหมดนี้... จะ... ซ้ำรอย... อีกครั้ง...",
						"hindi": "क्कक्... यह सब... फिर... दोहराया जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "끝없는 반복? 무슨 소리야?",
						"english": "Endless repetition? What do you mean?",
						"japanese": "終わりのない繰り返し？どういうことだ？",
						"chinese": "无尽的重复？什么意思？",
						"french": "Répétition sans fin ? Que veux-tu dire ?",
						"spanish": "¿Repetición sin fin? ¿Qué quieres decir?",
						"vietnamese": "Lặp lại vô tận? Ý ngươi là gì?",
						"thai": "การวนซ้ำไม่รู้จบ? หมายความว่าไง?",
						"hindi": "अनंत पुनरावृत्ति? तुम्हारा क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼어붙은 메아리는 잠시 침묵했지만, 그 침묵은 또 다른 시작을 예고하는 듯했다.",
						"english": "The frozen echo fell silent for a moment, but that silence seemed to herald another beginning.",
						"japanese": "凍てついた残響は一時沈黙したが、その沈黙はまた別の始まりを予感させるようだった。",
						"chinese": "冰冷的余音暂时沉默了，但那沉默似乎预示着又一个开始。",
						"french": "L'écho gelé se tut un instant, mais ce silence semblait annoncer un autre début.",
						"spanish": "El eco helado se silenció por un momento, pero ese silencio parecía anunciar otro comienzo.",
						"vietnamese": "Tiếng vọng đóng băng im lặng một lúc, nhưng sự im lặng đó dường như báo trước một khởi đầu khác.",
						"thai": "เสียงสะท้อนที่เยือกแข็งเงียบลงชั่วขณะ แต่ความเงียบนั้นดูเหมือนจะเป็นสัญญาณของการเริ่มต้นอีกครั้ง",
						"hindi": "जमी हुई प्रतिध्वनि एक पल के लिए शांत हो गई, लेकिन वह शांति एक और शुरुआत का संकेत दे रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "깨어진 맹세의 조각들이, 또 다른 비극의 실마리를 쥐고 있었다.",
						"english": "Fragments of a broken vow held the key to another tragedy.",
						"japanese": "砕かれた誓いの破片が、また別の悲劇の手がかりを握っていた。",
						"chinese": "破碎誓言的碎片，掌握着另一场悲剧的线索。",
						"french": "Les fragments d'un serment brisé détenaient la clé d'une autre tragédie.",
						"spanish": "Fragmentos de un juramento roto contenían la clave de otra tragedia.",
						"vietnamese": "Những mảnh vỡ của lời thề tan vỡ, nắm giữ manh mối của một bi kịch khác.",
						"thai": "เศษเสี้ยวของคำสาบานที่แตกหัก กำลังกุมเบาะแสของโศกนาฏกรรมอีกครั้ง",
						"hindi": "टूटी हुई प्रतिज्ञा के टुकड़े, एक और त्रासदी का सुराग पकड़े हुए थे।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…해냈군. 하지만 아직 끝이 아니다.",
						"english": "...You did it. But it's not over yet.",
						"japanese": "…やったな。しかし、まだ終わりではない。",
						"chinese": "…你做到了。但还没有结束。",
						"french": "...Tu l'as fait. Mais ce n'est pas encore fini.",
						"spanish": "...Lo lograste. Pero aún no ha terminado.",
						"vietnamese": "...Ngươi đã làm được. Nhưng vẫn chưa kết thúc.",
						"thai": "...ทำได้แล้ว. แต่ยังไม่จบ.",
						"hindi": "...तुमने कर दिखाया। लेकिन अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭐가 남았다는 거야?",
						"english": "What's left?",
						"japanese": "何が残っているんだ？",
						"chinese": "还剩下什么？",
						"french": "Que reste-t-il ?",
						"spanish": "¿Qué queda?",
						"vietnamese": "Còn gì nữa?",
						"thai": "มีอะไรเหลืออีก?",
						"hindi": "क्या बाकी है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 배의 진정한 심장. 그리고 그곳에 묶인 운명들.",
						"english": "The true heart of this ship. And the fates bound there.",
						"japanese": "この船の真の心臓。そしてそこに縛られた運命たち。",
						"chinese": "这艘船的真正心脏。以及被束缚在那里的命运。",
						"french": "Le véritable cœur de ce navire. Et les destins qui y sont liés.",
						"spanish": "El verdadero corazón de este barco. Y los destinos atados allí.",
						"vietnamese": "Trái tim thực sự của con tàu này. Và những số phận bị ràng buộc ở đó.",
						"thai": "หัวใจที่แท้จริงของเรือลำนี้ และโชคชะตาที่ถูกผูกมัดไว้ที่นั่น",
						"hindi": "इस जहाज़ का सच्चा हृदय। और वहां बंधी हुई नियतियां।"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 400,
					"direction": "up"
				}
			]
		}
	]
} as const;
