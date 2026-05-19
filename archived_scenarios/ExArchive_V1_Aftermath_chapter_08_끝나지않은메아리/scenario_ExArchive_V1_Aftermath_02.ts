export const scenario_ExArchive_V1_Aftermath_02 = {
	"scenario_id": "ExArchive_V1_Aftermath_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"기억의 수호자가 사라진 자리.",
			"평화는 짧았고, 그림자는 더 깊어졌다.",
			"벽에 그려진 '미완의 그림자'.",
			"이제 그것은 단순한 환영이 아니었다.",
			"동네 전체가, 과거에 잠식되고 있었다."
		],
		"english": [
			"Where the Guardian of Memories vanished.",
			"Peace was brief, shadows deepened.",
			"'Incomplete Shadow' drawn on the wall.",
			"Now, it was no mere illusion.",
			"The entire town was being consumed by the past."
		],
		"japanese": [
			"記憶の守護者が消え去った場所。",
			"平和は短く、影はより深く。",
			"壁に描かれた「未完の影」。",
			"今やそれは、単なる幻影ではなかった。",
			"町全体が、過去に浸食されていた。"
		],
		"chinese": [
			"记忆守护者消失之地。",
			"和平短暂，阴影渐深。",
			"墙上绘着的“未完成之影”。",
			"如今，那不再是简单的幻影。",
			"整个城镇，正被过去所吞噬。"
		],
		"french": [
			"Là où le Gardien des Souvenirs a disparu.",
			"La paix fut brève, les ombres s'épaissirent.",
			"L''Ombre Inachevée' dessinée sur le mur.",
			"Désormais, ce n'était plus une simple illusion.",
			"Le quartier entier était dévoré par le passé."
		],
		"spanish": [
			"Donde el Guardián de los Recuerdos desapareció.",
			"La paz fue breve, las sombras se hicieron más profundas.",
			"La 'Sombra Incompleta' dibujada en la pared.",
			"Ahora, no era una mera ilusión.",
			"Todo el pueblo estaba siendo devorado por el pasado."
		],
		"vietnamese": [
			"Nơi Người bảo vệ ký ức biến mất.",
			"Bình yên ngắn ngủi, bóng tối sâu hơn.",
			"'Bóng tối chưa hoàn thiện' vẽ trên tường.",
			"Giờ đây, đó không còn là ảo ảnh đơn thuần.",
			"Toàn bộ khu phố đang bị quá khứ xâm chiếm."
		],
		"thai": [
			"ที่ที่ผู้พิทักษ์แห่งความทรงจำหายไป",
			"สันติสุขนั้นสั้นนัก เงาแห่งความมืดมิดกลับลึกซึ้งยิ่งขึ้น",
			"'เงาที่ยังไม่สมบูรณ์' ที่วาดอยู่บนกำแพง",
			"บัดนี้ มันไม่ใช่ภาพลวงตาธรรมดาอีกต่อไปแล้ว",
			"ทั้งเมืองกำลังถูกอดีตกัดกิน"
		],
		"hindi": [
			"स्मृतियों का संरक्षक जहाँ गायब हो गया था।",
			"शांति अल्पकालिक थी, परछाइयाँ और गहरी हो गईं।",
			"दीवार पर चित्रित 'अधूरी परछाई'।",
			"अब, यह केवल एक भ्रम नहीं था।",
			"पूरा कस्बा अतीत में समाता जा रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "거리 곳곳에 검은 낙서가 번졌다. '미완의 그림자'.",
						"english": "Black graffiti spread everywhere. 'Incomplete Shadow'.",
						"japanese": "街中に黒い落書きが広がった。「未完の影」。",
						"chinese": "街道各处蔓延着黑色涂鸦。“未完成之影”。",
						"french": "Des graffitis noirs se répandaient partout. 'L'Ombre Inachevée'.",
						"spanish": "Grafitis negros se extendieron por todas partes. 'La Sombra Incompleta'.",
						"vietnamese": "Những nét vẽ graffiti đen lan khắp nơi. 'Bóng tối chưa hoàn thiện'.",
						"thai": "รอยขีดเขียนสีดำกระจายไปทั่วทุกมุมถนน 'เงาที่ยังไม่สมบูรณ์'",
						"hindi": "हर जगह काले भित्तिचित्र फैल गए। 'अधूरी परछाई'।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저게 대체 뭐야?",
						"english": "What on earth is that?",
						"japanese": "あれは一体何だ？",
						"chinese": "那到底是什么？",
						"french": "Qu'est-ce que c'est que ça ?",
						"spanish": "¿Qué demonios es eso?",
						"vietnamese": "Cái quái gì thế này?",
						"thai": "นั่นมันอะไรกันแน่?",
						"hindi": "वह आखिर क्या है?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "흥미롭네요. 단순한 장난은 아닌 것 같아요.",
						"english": "Interesting. Doesn't seem like a mere prank.",
						"japanese": "興味深い。単なる悪戯ではないようだ。",
						"chinese": "真有趣。这似乎不是简单的恶作剧。",
						"french": "Intéressant. Ça n'a pas l'air d'une simple farce.",
						"spanish": "Interesante. No parece una simple broma.",
						"vietnamese": "Thú vị đấy. Hình như không phải trò đùa đơn thuần.",
						"thai": "น่าสนใจ ไม่น่าจะใช่แค่เรื่องเล่นๆ",
						"hindi": "रोचक। यह केवल एक शरारत नहीं लगती।"
					}
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "패턴이 심상치 않아요. 이 동네의 '기억'과 연결되어 있어요.",
						"english": "The pattern is unusual. It's connected to this town's 'memories'.",
						"japanese": "パターンが尋常ではない。この町の「記憶」と繋がっている。",
						"chinese": "这模式非同寻常。它与这个城镇的“记忆”相连。",
						"french": "Le schéma est inhabituel. Il est lié aux 'souvenirs' de ce quartier.",
						"spanish": "El patrón es inusual. Está conectado con las 'memorias' de este pueblo.",
						"vietnamese": "Mô típ bất thường. Nó liên kết với 'ký ức' của khu phố này.",
						"thai": "รูปแบบนี้ไม่ปกติ มันเชื่อมโยงกับ 'ความทรงจำ' ของเมืองนี้",
						"hindi": "पैटर्न असामान्य है। यह इस शहर की 'स्मृतियों' से जुड़ा है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "분석 결과, 이건 단순한 환영이 아니에요.",
						"english": "Analysis shows this isn't a mere illusion.",
						"japanese": "分析の結果、これは単なる幻影ではない。",
						"chinese": "分析结果显示，这并非简单的幻影。",
						"french": "L'analyse révèle que ce n'est pas une simple illusion.",
						"spanish": "Los resultados del análisis muestran que no es una simple ilusión.",
						"vietnamese": "Kết quả phân tích cho thấy đây không phải là ảo ảnh đơn thuần.",
						"thai": "ผลการวิเคราะห์พบว่านี่ไม่ใช่แค่ภาพลวงตาธรรมดา",
						"hindi": "विश्लेषण से पता चलता है कि यह केवल एक भ्रम नहीं है।"
					}
				},
				{
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "물리적으로 구현된 '망념체'에요. 사라진 기억들이 뭉쳐서 생겨난 거죠.",
						"english": "It's a physically manifested 'Delusion Entity.' Formed from clustered, lost memories.",
						"japanese": "それは物理的に具現化した『妄念体』です。失われた記憶が凝り固まって生まれたものですね。",
						"chinese": "这是物理具现化的‘妄念体’。是消失的记忆凝结而成的。",
						"french": "C'est une 'Entité Illusoire' manifestée physiquement. Elle est née de souvenirs perdus qui se sont agrégés.",
						"spanish": "Es una 'Entidad de Delusión' materializada. Nace de recuerdos perdidos que se agruparon.",
						"vietnamese": "Đó là một 'Thực thể Huyễn niệm' được vật lý hóa. Nó được hình thành từ những ký ức đã mất tụ lại.",
						"thai": "มันคือ 'จิตวิปลาส' ที่ปรากฏเป็นรูปธรรม เกิดจากการรวมตัวกันของความทรงจำที่หายไป",
						"hindi": "यह भौतिक रूप से प्रकट हुई 'भ्रम-सत्ता' है। यह खोई हुई यादों के गुच्छों से उत्पन्न हुई है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벽에 그려진 '미완의 그림자'가 꿈틀거리는 듯했다.",
						"english": "The 'Unfinished Shadow' painted on the wall seemed to squirm.",
						"japanese": "壁に描かれた『未完の影』が蠢いているようだった。",
						"chinese": "墙上画着的‘未完成的影子’似乎在蠕动。",
						"french": "L''Ombre Inachevée' peinte sur le mur semblait frémir.",
						"spanish": "La 'Sombra Incompleta' dibujada en la pared parecía retorcerse.",
						"vietnamese": "'Bóng tối chưa hoàn thiện' được vẽ trên tường dường như đang cựa quậy.",
						"thai": "'เงาที่ไม่สมบูรณ์' ที่วาดบนผนังดูเหมือนจะกระสับกระส่าย",
						"hindi": "दीवार पर बनी 'अधूरी परछाई' रेंगती हुई प्रतीत हुई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "주민들의 무의식에 뿌리내린 '집단 망념체'. 잊고 싶었던 과거에 대한 집착이 만들어낸 괴물이에요.",
						"english": "A 'Collective Delusion Entity' rooted in the residents' unconscious. A monster born from their obsession with a past they wished to forget.",
						"japanese": "住民たちの無意識に根付いた『集団妄念体』。忘れ去りたい過去への執着が生み出した怪物です。",
						"chinese": "这是根植于居民潜意识中的‘集体妄念体’。是他们对想要遗忘的过去，执念所产生的怪物。",
						"french": "Une 'Entité Illusoire Collective' enracinée dans l'inconscient des habitants. Un monstre créé par leur obsession pour un passé qu'ils voulaient oublier.",
						"spanish": "Una 'Entidad de Delusión Colectiva' arraigada en el inconsciente de los residentes. Un monstruo creado por su obsesión con un pasado que querían olvidar.",
						"vietnamese": "Một 'Thực thể Huyễn niệm Tập thể' ăn sâu vào tiềm thức của cư dân. Một con quái vật được tạo ra từ nỗi ám ảnh của họ với một quá khứ mà họ muốn quên đi.",
						"thai": "'จิตวิปลาสรวมหมู่' ที่หยั่งรากลึกในจิตใต้สำนึกของชาวบ้าน สัตว์ประหลาดที่เกิดจากความหลงใหลในอดีตที่พวกเขาอยากจะลืม",
						"hindi": "निवासियों के अचेतन में निहित एक 'सामूहिक भ्रम-सत्ता'। यह उस अतीत के प्रति उनके जुनून से उत्पन्न एक राक्षस है जिसे वे भूलना चाहते थे।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "잊고 싶었던 과거?",
						"english": "A past they wished to forget?",
						"japanese": "忘れ去りたい過去？",
						"chinese": "想要遗忘的过去？",
						"french": "Un passé qu'ils voulaient oublier ?",
						"spanish": "¿Un pasado que querían olvidar?",
						"vietnamese": "Một quá khứ muốn quên đi?",
						"thai": "อดีตที่อยากลืม?",
						"hindi": "वह अतीत जिसे वे भूलना चाहते थे?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "네. 과거의 그림자를 떨쳐내지 못하고, 오히려 그 집착이 망념체를 키웠어요.",
						"english": "Yes. They couldn't shake off the shadows of the past; instead, that obsession nurtured the Delusion Entity.",
						"japanese": "ええ。過去の影を振り払えず、むしろその執着が妄念体を大きく育ててしまったのです。",
						"chinese": "是的。他们无法摆脱过去的阴影，反而这种执念滋养了妄念体。",
						"french": "Oui. Ils n'ont pas pu se débarrasser des ombres du passé ; au lieu de cela, cette obsession a nourri l'Entité Illusoire.",
						"spanish": "Sí. No pudieron deshacerse de las sombras del pasado; en cambio, esa obsesión alimentó la Entidad de Delusión.",
						"vietnamese": "Vâng. Họ không thể rũ bỏ được bóng tối của quá khứ; thay vào đó, sự ám ảnh đó đã nuôi dưỡng Thực thể Huyễn niệm.",
						"thai": "ใช่แล้ว พวกเขาไม่สามารถสลัดเงาของอดีตออกไปได้ ยิ่งกว่านั้น ความหลงใหลนั้นกลับยิ่งทำให้จิตวิปลาสเติบโต",
						"hindi": "हाँ। वे अतीत की छाया से मुक्त नहीं हो सके; बल्कि, उसी जुनून ने भ्रम-सत्ता को पाला।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래서 사람들이 이상해진 거야?",
						"english": "Is that why people started acting strange?",
						"japanese": "だから、みんなおかしくなったの？",
						"chinese": "所以人们都变得奇怪了吗？",
						"french": "C'est pour ça que les gens sont devenus étranges ?",
						"spanish": "¿Por eso la gente se volvió extraña?",
						"vietnamese": "Vậy nên mọi người mới trở nên kỳ lạ sao?",
						"thai": "นั่นคือสาเหตุที่คนเริ่มแปลกไปหรือ?",
						"hindi": "इसलिए लोग अजीब हो गए?"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주민들은 특정 질문에 답을 회피하며 눈동자를 피했다.",
						"english": "The residents evaded answering certain questions, avoiding eye contact.",
						"japanese": "住民たちは特定の質問への返答を避け、視線を逸らした。",
						"chinese": "居民们回避回答特定问题，眼神闪烁。",
						"french": "Les habitants évitaient de répondre à certaines questions, fuyant le regard.",
						"spanish": "Los residentes evadían responder a ciertas preguntas, evitando el contacto visual.",
						"vietnamese": "Cư dân né tránh trả lời những câu hỏi cụ thể, và tránh ánh mắt.",
						"thai": "ชาวบ้านหลีกเลี่ยงการตอบคำถามบางอย่างและหลบสายตา",
						"hindi": "निवासियों ने कुछ सवालों के जवाब देने से परहेज किया, नज़रें चुराते रहे।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 600,
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "망념체에 잠식된 사람들은 점점 현실 감각을 잃고 있어요.",
						"english": "People consumed by the Delusion Entity are gradually losing their sense of reality.",
						"japanese": "妄念体に侵食された人々は、徐々に現実感を失っています。",
						"chinese": "被妄念体侵蚀的人们，正逐渐失去现实感。",
						"french": "Les personnes envahies par l'Entité Illusoire perdent progressivement leur sens de la réalité.",
						"spanish": "Las personas consumidas por la Entidad de Delusión están perdiendo gradualmente su sentido de la realidad.",
						"vietnamese": "Những người bị Thực thể Huyễn niệm xâm chiếm đang dần mất đi cảm giác về thực tại.",
						"thai": "ผู้คนที่ถูกจิตวิปลาสครอบงำกำลังค่อยๆ สูญเสียการรับรู้ถึงความเป็นจริง",
						"hindi": "भ्रम-सत्ता से ग्रस्त लोग धीरे-धीरे अपनी वास्तविकता की भावना खो रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "제정신이 아니던데… 다들 혼란에 빠졌어.",
						"english": "They weren't themselves... Everyone's in chaos.",
						"japanese": "正気じゃなかった…みんな混乱してる。",
						"chinese": "他们神志不清……所有人都陷入了混乱。",
						"french": "Ils n'étaient pas dans leur état normal... Tout le monde est en plein chaos.",
						"spanish": "No estaban en sus cabales... Todos están en caos.",
						"vietnamese": "Họ không còn tỉnh táo... Mọi người đều rơi vào hỗn loạn.",
						"thai": "พวกเขาไม่เป็นตัวของตัวเอง... ทุกคนอยู่ในความสับสนวุ่นวาย",
						"hindi": "वे होश में नहीं थे... सब लोग भ्रम में पड़ गए हैं।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "일상이 서서히 무너지고 있죠. 이대로 두면 동네 전체가 망념체의 일부가 될 거예요.",
						"english": "Our daily lives are slowly crumbling. If we leave it like this, the entire town will become part of the Delusion.",
						"japanese": "日常が徐々に崩壊しています。このままでは、町全体が妄念体の一部になるでしょう。",
						"chinese": "日常生活正在逐渐崩溃。如果就这样下去，整个城镇都将成为妄念体的一部分。",
						"french": "Notre quotidien s'écroule lentement. Si nous laissons faire, toute la ville deviendra une partie de l'Entité Illusoire.",
						"spanish": "Nuestra vida cotidiana se desmorona lentamente. Si lo dejamos así, todo el pueblo se convertirá en parte del Ente de la Obsesión.",
						"vietnamese": "Cuộc sống hàng ngày đang dần sụp đổ. Nếu cứ để thế này, cả thị trấn sẽ trở thành một phần của Thể Vọng Niệm.",
						"thai": "ชีวิตประจำวันกำลังพังทลายลงช้าๆ หากปล่อยไว้แบบนี้ ทั้งเมืองจะกลายเป็นส่วนหนึ่งของร่างมโนภาพ.",
						"hindi": "हमारा दैनिक जीवन धीरे-धीरे बिखर रहा है। अगर इसे ऐसे ही छोड़ दिया, तो पूरा शहर 'भ्रम' का हिस्सा बन जाएगा।"
					}
				},
				{
					"content": {
						"korean": "막아야 해.",
						"english": "We must stop it.",
						"japanese": "止めなければ。",
						"chinese": "必须阻止它。",
						"french": "Il faut l'arrêter.",
						"spanish": "Debemos detenerlo.",
						"vietnamese": "Phải ngăn chặn nó.",
						"thai": "ต้องหยุดมัน.",
						"hindi": "इसे रोकना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "서두르세요. 점점 강해지고 있어요.",
						"english": "Hurry. It's getting stronger.",
						"japanese": "急いで。ますます強くなっています。",
						"chinese": "快点。它越来越强大了。",
						"french": "Dépêchez-vous. Il devient de plus en plus fort.",
						"spanish": "Date prisa. Se está haciendo más fuerte.",
						"vietnamese": "Nhanh lên. Nó đang mạnh dần.",
						"thai": "รีบหน่อย. มันกำลังแข็งแกร่งขึ้นเรื่อยๆ.",
						"hindi": "जल्दी करो। यह और मजबूत होता जा रहा है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…사라진다… 기억에서… 모두…",
						"english": "...Vanishing... from memory... all of it...",
						"japanese": "…消えていく…記憶から…すべてが…",
						"chinese": "…正在消失…从记忆中…一切…",
						"french": "...Disparaissant... de la mémoire... tout...",
						"spanish": "...Desapareciendo... de la memoria... todo...",
						"vietnamese": "...Biến mất... khỏi ký ức... tất cả...",
						"thai": "...กำลังหายไป... จากความทรงจำ... ทั้งหมด...",
						"hindi": "...गायब हो रहा है... यादों से... सब कुछ..."
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "해냈다…",
						"english": "We did it...",
						"japanese": "やった…",
						"chinese": "成功了…",
						"french": "On a réussi...",
						"spanish": "Lo logramos...",
						"vietnamese": "Đã làm được...",
						"thai": "ทำสำเร็จแล้ว...",
						"hindi": "कर दिखाया..."
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "망념체는 사라졌지만… 인간 심리의 깊이는 상상 이상이에요.",
						"english": "The aberration is gone, but the human psyche's depths are beyond imagining.",
						"japanese": "妄念は消えましたが…人間の深層心理は想像以上です。",
						"chinese": "妄念体消失了…但人类心理的深度超乎想象。",
						"french": "L'aberration a disparu... mais les profondeurs de la psyché humaine sont au-delà de l'imaginable.",
						"spanish": "La aberración se ha ido... pero las profundidades de la psique humana superan la imaginación.",
						"vietnamese": "Thực thể ảo ảnh đã biến mất... nhưng chiều sâu tâm lý con người thì khó tưởng tượng hơn nhiều.",
						"thai": "ความหลงผิดได้หายไปแล้ว... แต่ความลึกซึ้งของจิตใจมนุษย์นั้นเกินกว่าจะจินตนาการได้",
						"hindi": "भ्रम चला गया है... लेकिन मानव मन की गहराई कल्पना से परे है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "과학과 초자연의 경계… 아직 밝혀야 할 것이 많아요.",
						"english": "The boundary between science and the supernatural... much remains to be uncovered.",
						"japanese": "科学と超常現象の境界…まだ解明すべきことが多いです。",
						"chinese": "科学与超自然的边界…还有很多有待揭示。",
						"french": "La frontière entre science et surnaturel... il reste encore beaucoup à découvrir.",
						"spanish": "La frontera entre la ciencia y lo sobrenatural... aún queda mucho por descubrir.",
						"vietnamese": "Ranh giới giữa khoa học và siêu nhiên... vẫn còn rất nhiều điều cần được hé lộ.",
						"thai": "เส้นแบ่งระหว่างวิทยาศาสตร์และเหนือธรรมชาติ... ยังมีอีกมากที่ต้องเปิดเผย",
						"hindi": "विज्ञान और अलौकिक के बीच की सीमा... अभी भी बहुत कुछ उजागर करना बाकी है।"
					}
				},
				{
					"content": {
						"korean": "'미완의 그림자'는 잠시 물러났지만, 동네의 불안은 여전히 뿌리 깊었다. 더 깊은 곳에, 또 다른 진실이 기다리고 있었다.",
						"english": "The 'Unfinished Shadow' receded for now, but the town's unease remained deeply rooted. Deeper still, another truth awaited.",
						"japanese": "「未完の影」は一時的に退いたが、町の不安は根深く残っていた。さらに深い場所で、別の真実が待っていた。",
						"chinese": "“未完成之影”暂时退去了，但小镇的不安依然根深蒂固。更深之处，另一个真相正在等待。",
						"french": "L'« Ombre Inachevée » s'est retirée pour l'instant, mais l'inquiétude de la ville restait profondément enracinée. Plus profondément encore, une autre vérité attendait.",
						"spanish": "La \"Sombra Incompleta\" retrocedió por ahora, pero la inquietud del pueblo seguía profundamente arraigada. Aún más profundo, otra verdad esperaba.",
						"vietnamese": "Bóng tối dang dở tạm thời rút lui, nhưng sự bất an của thị trấn vẫn ăn sâu. Sâu thẳm hơn nữa, một sự thật khác đang chờ đợi.",
						"thai": "เงาที่ยังไม่สมบูรณ์ ถอยกลับไปแล้ว แต่ความกังวลของเมืองยังคงฝังรากลึก ลึกลงไปอีก ความจริงอีกอย่างกำลังรออยู่",
						"hindi": "'अधूरी छाया' फिलहाल पीछे हट गई, लेकिन शहर की बेचैनी गहरी जड़ें जमाए हुए थी। और भी गहराई में, एक और सच्चाई इंतजार कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국… 나를 잊지 못할 것이다…",
						"english": "In the end... you won't forget me...",
						"japanese": "結局…私を忘れることはできないだろう…",
						"chinese": "最终…你无法忘记我…",
						"french": "Au final... tu ne m'oublieras pas...",
						"spanish": "Al final... no me olvidarás...",
						"vietnamese": "Cuối cùng... ngươi sẽ không quên ta đâu...",
						"thai": "ท้ายที่สุด... เจ้าจะไม่มีวันลืมข้า...",
						"hindi": "अंत में... तुम मुझे नहीं भूलोगे..."
					}
				},
				{
					"content": {
						"korean": "젠장… 아직은 안 돼!",
						"english": "Damn it... not yet!",
						"japanese": "くそ…まだだめだ！",
						"chinese": "该死…还没到时候！",
						"french": "Zut... pas encore !",
						"spanish": "¡Maldita sea... aún no!",
						"vietnamese": "Chết tiệt... chưa được!",
						"thai": "ให้ตายสิ... ยังไม่ถึงเวลา!",
						"hindi": "धिक्कार है... अभी नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "패배는 끝이 아니에요. 현상을 파악할 기회를 얻은 거죠.",
						"english": "Defeat isn't the end. It's a chance to understand the phenomenon.",
						"japanese": "敗北は終わりではありません。現象を理解する機会を得たのです。",
						"chinese": "失败并非终点。这只是一个了解现象的机会。",
						"french": "La défaite n'est pas la fin. C'est une occasion de comprendre le phénomène.",
						"spanish": "La derrota no es el final. Es una oportunidad para comprender el fenómeno.",
						"vietnamese": "Thất bại không phải là kết thúc. Đó là cơ hội để chúng ta hiểu rõ hơn về hiện tượng này.",
						"thai": "ความพ่ายแพ้ไม่ใช่จุดจบ มันคือโอกาสที่จะเข้าใจปรากฏการณ์",
						"hindi": "हार अंत नहीं है। यह घटना को समझने का एक अवसर है।"
					}
				},
				{
					"content": {
						"korean": "다시… 반드시!",
						"english": "Again... I must!",
						"japanese": "もう一度…必ず！",
						"chinese": "再来一次…一定要！",
						"french": "Encore... absolument !",
						"spanish": "¡De nuevo... debo!",
						"vietnamese": "Lại một lần nữa... nhất định phải!",
						"thai": "อีกครั้ง... ต้องได้!",
						"hindi": "फिर से... अवश्य!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "동네의 뒤틀린 무의식이 거대한 형체를 이루었다.",
						"english": "The town's twisted subconscious has formed a colossal entity.",
						"japanese": "町の歪んだ無意識が、巨大な形を成した。",
						"chinese": "小镇扭曲的潜意识形成了一个巨大的形体。",
						"french": "Le subconscient tordu de la ville a pris une forme colossale.",
						"spanish": "El subconsciente retorcido del pueblo ha tomado una forma gigantesca.",
						"vietnamese": "Vô thức méo mó của thị trấn đã tạo thành một hình thể khổng lồ.",
						"thai": "จิตใต้สำนึกที่บิดเบี้ยวของเมืองได้ก่อร่างเป็นรูปร่างมหึมา.",
						"hindi": "शहर के विकृत अवचेतन ने एक विशाल रूप धारण कर लिया है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…나를 잊으려 하지 마라.",
						"english": "...Do not try to forget me.",
						"japanese": "…私を忘れようとするな。",
						"chinese": "…别想忘记我。",
						"french": "...N'essaie pas de m'oublier.",
						"spanish": "...No intentes olvidarme.",
						"vietnamese": "...Đừng cố quên ta.",
						"thai": "...อย่าพยายามลืมฉัน.",
						"hindi": "...मुझे भूलने की कोशिश मत करो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저게 망념체의 본질인가.",
						"english": "Is that the true nature of the Delusion?",
						"japanese": "あれが妄念体の本質なのか。",
						"chinese": "那就是妄念体的本质吗？",
						"french": "Est-ce là la véritable nature de l'Entité Illusoire ?",
						"spanish": "¿Es esa la verdadera esencia del Ente de la Obsesión?",
						"vietnamese": "Đó là bản chất của Thể Vọng Niệm sao?",
						"thai": "นั่นคือแก่นแท้ของร่างมโนภาพงั้นหรือ?",
						"hindi": "क्या यही भ्रम का वास्तविक स्वरूप है?"
					}
				},
				{
					"type": "direction",
					"speaker": "lin",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잊혀지기 싫어 발버둥 치는 과거의 잔재… 집단 망념체의 정수네요.",
						"english": "A remnant of the past struggling not to be forgotten... The essence of the collective Delusion.",
						"japanese": "忘れ去られるのを嫌がり足掻く過去の残滓…集合的妄念体の真髄ですね。",
						"chinese": "不愿被遗忘而挣扎的过去残余…这正是集体妄念体的精髓啊。",
						"french": "Un vestige du passé luttant pour ne pas être oublié... L'essence même de l'Entité Illusoire collective.",
						"spanish": "Un vestigio del pasado luchando por no ser olvidado... La esencia misma del Ente de la Obsesión colectivo.",
						"vietnamese": "Tàn dư của quá khứ đang vùng vẫy không muốn bị lãng quên... Chính là tinh túy của Thể Vọng Niệm tập thể.",
						"thai": "เศษซากของอดีตที่ดิ้นรนไม่ต้องการถูกลืมเลือน... นี่คือแก่นแท้ของร่างมโนภาพรวมหมู่เลยนะ.",
						"hindi": "अतीत का एक अवशेष, जो भुलाया नहीं जाना चाहता... यही सामूहिक भ्रम का सार है।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈은 여기까지다!",
						"english": "This is the end for you!",
						"japanese": "お前はここまでだ！",
						"chinese": "你到此为止了！",
						"french": "C'est la fin pour toi !",
						"spanish": "¡Hasta aquí llegaste!",
						"vietnamese": "Ngươi chỉ đến đây thôi!",
						"thai": "แกได้แค่นี้แหละ!",
						"hindi": "तुम्हारा सफर यहीं खत्म!"
					}
				}
			]
		}
	]
} as const;
