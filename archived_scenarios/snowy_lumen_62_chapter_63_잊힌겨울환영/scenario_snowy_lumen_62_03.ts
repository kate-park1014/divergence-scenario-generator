export const scenario_snowy_lumen_62_03 = {
	"scenario_id": "snowy_lumen_62_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 유적, 그 심연은 영혼을 잠식한다.",
			"차가운 바람이 속삭이는 진실, 혹은 광기.",
			"합리적인 정신마저 흔들리는 곳.",
			"서로를 의심하고, 스스로를 잃어가는 그림자."
		],
		"english": [
			"Frozen ruins, their abyss devours souls.",
			"Cold winds whisper truth, or madness.",
			"A place where even rational minds waver.",
			"Shadows doubting each other, losing themselves."
		],
		"japanese": [
			"凍てついた遺跡、その深淵は魂を蝕む。",
			"冷たい風が囁く真実、あるいは狂気。",
			"合理的な精神さえ揺らぐ場所。",
			"互いを疑い、自らを見失う影。"
		],
		"chinese": [
			"冰冻的遗迹，其深渊吞噬灵魂。",
			"寒风低语着真相，或是疯狂。",
			"连理智都动摇的地方。",
			"相互猜疑，逐渐迷失自我的阴影。"
		],
		"french": [
			"Ruines gelées, leur abîme dévore les âmes.",
			"Les vents froids chuchotent la vérité, ou la folie.",
			"Un lieu où même les esprits rationnels vacillent.",
			"Des ombres se doutant les unes des autres, se perdant elles-mêmes."
		],
		"spanish": [
			"Ruinas heladas, su abismo devora almas.",
			"Vientos fríos susurran la verdad, o la locura.",
			"Un lugar donde incluso las mentes racionales flaquean.",
			"Sombras que se dudan, perdiéndose a sí mismas."
		],
		"vietnamese": [
			"Di tích băng giá, vực sâu của chúng nuốt chửng linh hồn.",
			"Gió lạnh thì thầm sự thật, hay là điên cuồng.",
			"Nơi ngay cả lý trí cũng lung lay.",
			"Những bóng hình nghi ngờ lẫn nhau, tự đánh mất chính mình."
		],
		"thai": [
			"ซากปรักหักพังเยือกแข็ง ห้วงลึกของมันกลืนกินวิญญาณ.",
			"ลมหนาวกระซิบความจริง หรือความบ้าคลั่ง.",
			"สถานที่ที่แม้แต่จิตใจที่มีเหตุผลก็ยังหวั่นไหว.",
			"เงาที่สงสัยกันและกัน สูญเสียตัวเองไป."
		],
		"hindi": [
			"जमी हुई खंडहर, उनकी खाई आत्माओं को निगल जाती है।",
			"ठंडी हवाएँ सच या पागलपन फुसफुसाती हैं।",
			"एक ऐसी जगह जहाँ तर्कसंगत मन भी डगमगाते हैं।",
			"एक दूसरे पर शक करती और खुद को खोती हुई परछाइयाँ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "유적의 공기는 더욱 차갑고 무거웠다.",
						"english": "The air in the ruins grew colder and heavier.",
						"japanese": "遺跡の空気はさらに冷たく重くなった。",
						"chinese": "遗迹里的空气变得更冷更沉重了。",
						"french": "L'air des ruines devint plus froid et plus lourd.",
						"spanish": "El aire en las ruinas se volvió más frío y pesado.",
						"vietnamese": "Không khí trong di tích càng lúc càng lạnh và nặng nề.",
						"thai": "อากาศในซากปรักหักพังเย็นยะเยือกและหนักอึ้งขึ้นไปอีก.",
						"hindi": "खंडहरों की हवा और भी ठंडी और भारी हो गई थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 기분 나빠지는데.",
						"english": "I'm feeling worse and worse.",
						"japanese": "だんだん気分が悪くなってきた。",
						"chinese": "感觉越来越不舒服了。",
						"french": "Je me sens de plus en plus mal.",
						"spanish": "Me siento cada vez peor.",
						"vietnamese": "Càng lúc càng thấy khó chịu.",
						"thai": "ยิ่งนานยิ่งรู้สึกไม่ดี.",
						"hindi": "मुझे और बुरा महसूस हो रहा है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "피로 탓이야. 다들 긴장 풀지 마.",
						"english": "It's the fatigue. Don't let your guard down, everyone.",
						"japanese": "疲労のせいだ。みんな、気を抜くな。",
						"chinese": "是疲劳的错。大家别放松警惕。",
						"french": "C'est la fatigue. Ne baissez pas votre garde, tout le monde.",
						"spanish": "Es la fatiga. No bajen la guardia, todos.",
						"vietnamese": "Do mệt mỏi thôi. Mọi người đừng lơ là.",
						"thai": "มันเป็นเพราะความเหนื่อยล้า อย่าเพิ่งลดการ์ดนะทุกคน.",
						"hindi": "यह थकान की वजह से है। सब लोग चौकस रहो।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…아까부터 누가 지켜보는 것 같아.",
						"english": "...I feel like someone's been watching us.",
						"japanese": "…さっきから誰かに見られている気がする。",
						"chinese": "……我感觉从刚才起就有人在盯着我们。",
						"french": "...J'ai l'impression que quelqu'un nous observe depuis tout à l'heure.",
						"spanish": "...Siento como si alguien nos estuviera observando desde hace un rato.",
						"vietnamese": "...Tôi cứ có cảm giác ai đó đang theo dõi chúng ta từ nãy giờ.",
						"thai": "...รู้สึกเหมือนมีคนจ้องมองเรามาตั้งแต่เมื่อกี้.",
						"hindi": "मुझे ऐसा लग रहा है जैसे कोई हमें देख रहा है।"
					},
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "환각이야. 집중해.",
						"english": "It's a hallucination. Focus.",
						"japanese": "幻覚だ。集中しろ。",
						"chinese": "是幻觉。集中注意力。",
						"french": "C'est une hallucination. Concentre-toi.",
						"spanish": "Es una alucinación. Concéntrate.",
						"vietnamese": "Là ảo giác thôi. Tập trung đi.",
						"thai": "มันคือภาพหลอน ตั้งสติซะ.",
						"hindi": "यह एक भ्रम है। ध्यान केंद्रित करो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환각은 더욱 선명해졌다. 현실과 구별하기 어려웠다.",
						"english": "The hallucinations grew clearer. It was hard to tell them apart from reality.",
						"japanese": "幻覚はさらに鮮明になった。現実と区別するのが困難だった。",
						"chinese": "幻觉变得更加清晰了。已经很难与现实区分开来。",
						"french": "Les hallucinations devinrent plus claires. Il était difficile de les distinguer de la réalité.",
						"spanish": "Las alucinaciones se hicieron más claras. Era difícil distinguirlas de la realidad.",
						"vietnamese": "Ảo giác trở nên rõ ràng hơn. Khó mà phân biệt được với thực tế.",
						"thai": "ภาพหลอนยิ่งชัดเจนขึ้นเรื่อยๆ ยากที่จะแยกแยะออกจากความเป็นจริง.",
						"hindi": "भ्रम और भी स्पष्ट हो गए। उन्हें वास्तविकता से अलग करना मुश्किल था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 벽화… 움직인 것 같지 않아?",
						"english": "That mural... didn't it just move?",
						"japanese": "あの壁画…動いたように見えなかった？",
						"chinese": "那壁画…是不是动了一下？",
						"french": "Cette fresque... Elle n'a pas bougé ?",
						"spanish": "¿Ese mural... no se movió?",
						"vietnamese": "Bức bích họa đó... hình như vừa động đậy đúng không?",
						"thai": "ภาพจิตรกรรมฝาผนังนั่น... เหมือนมันขยับได้เลยว่าไหม?",
						"hindi": "वह भित्तिचित्र... क्या वह हिला नहीं?"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐? 너도 봤어?",
						"english": "What? You saw it too?",
						"japanese": "何？君も見たの？",
						"chinese": "什么？你也看到了？",
						"french": "Quoi ? Toi aussi tu l'as vu ?",
						"spanish": "¿Qué? ¿Tú también lo viste?",
						"vietnamese": "Cái gì? Cậu cũng thấy à?",
						"thai": "อะไรนะ? นายก็เห็นด้วยเหรอ?",
						"hindi": "क्या? तुमने भी देखा?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…점점 이상해져. 우리 돌아가야 하는 거 아니야?",
						"english": "...It's getting weirder. Shouldn't we go back?",
						"japanese": "…だんだんおかしくなってる。私たち、戻った方が良くない？",
						"chinese": "…越来越奇怪了。我们是不是该回去了？",
						"french": "...Ça devient de plus en plus étrange. On ne devrait pas y retourner ?",
						"spanish": "...Cada vez es más raro. ¿No deberíamos volver?",
						"vietnamese": "...Càng lúc càng kỳ lạ. Chúng ta không nên quay về sao?",
						"thai": "...มันเริ่มแปลกขึ้นเรื่อยๆ แล้วนะ เราไม่ควรกลับไปเหรอ?",
						"hindi": "...यह अजीब होता जा रहा है। क्या हमें वापस नहीं जाना चाहिए?"
					},
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "아니. 이 유적… 무언가 중요한 걸 숨기고 있어.",
						"english": "No. This ruin... it's hiding something important.",
						"japanese": "いや。この遺跡…何か重要なものを隠してる。",
						"chinese": "不。这遗迹…藏着什么重要的东西。",
						"french": "Non. Cette ruine... elle cache quelque chose d'important.",
						"spanish": "No. Esta ruina... esconde algo importante.",
						"vietnamese": "Không. Di tích này... đang che giấu điều gì đó quan trọng.",
						"thai": "ไม่. ซากปรักหักพังนี่... กำลังซ่อนบางสิ่งสำคัญอยู่.",
						"hindi": "नहीं। यह खंडहर... कुछ महत्वपूर्ण छिपा रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 바람 속, 잊힌 온기의 흔적들이 흩날렸다.",
						"english": "In the cold wind, traces of forgotten warmth scattered.",
						"japanese": "冷たい風の中、忘れられた温もりの痕跡が舞い散った。",
						"chinese": "在寒风中，被遗忘的温暖痕迹随风飘散。",
						"french": "Dans le vent froid, des traces de chaleur oubliée s'éparpillaient.",
						"spanish": "En el viento frío, rastros de calidez olvidada se dispersaron.",
						"vietnamese": "Trong gió lạnh, những dấu vết của hơi ấm đã lãng quên bay lả tả.",
						"thai": "ในลมหนาว ร่องรอยของความอบอุ่นที่ถูกลืมเลือนปลิวไสว.",
						"hindi": "ठंडी हवा में, भूली हुई गर्माहट के निशान बिखर गए।"
					}
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저기… 저것 봐.",
						"english": "Look... look at that.",
						"japanese": "見て…あれを見て。",
						"chinese": "看…看那个。",
						"french": "Regarde... regarde ça.",
						"spanish": "Mira... mira eso.",
						"vietnamese": "Nhìn kìa... nhìn cái đó đi.",
						"thai": "ดูนั่นสิ... ดูนั่นสิ.",
						"hindi": "देखो... वह देखो।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐가?",
						"english": "What is it?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "sad",
					"content": {
						"korean": "어린아이… 장난감…?",
						"english": "A child's... toy...?",
						"japanese": "子供の…おもちゃ…？",
						"chinese": "小孩子…的玩具…？",
						"french": "Un enfant... un jouet...?",
						"spanish": "¿Un niño... un juguete...?",
						"vietnamese": "Một đứa trẻ... đồ chơi...?",
						"thai": "เด็ก... ของเล่น...?",
						"hindi": "एक बच्चे का... खिलौना...?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base",
					"content": {
						"korean": "아무것도 없는데?",
						"english": "There's nothing there.",
						"japanese": "何も無いけど？",
						"chinese": "什么都没有啊？",
						"french": "Il n'y a rien.",
						"spanish": "No hay nada.",
						"vietnamese": "Không có gì cả?",
						"thai": "ไม่มีอะไรนี่?",
						"hindi": "वहां कुछ भी तो नहीं है?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야, 분명히… 여기에 있었어.",
						"english": "No, it was definitely... right here.",
						"japanese": "違う、確かに…ここにいたんだ。",
						"chinese": "不，明明…就在这里。",
						"french": "Non, c'était clairement... juste ici.",
						"spanish": "No, estaba definitivamente... justo aquí.",
						"vietnamese": "Không phải, rõ ràng là... nó ở đây.",
						"thai": "ไม่นะ, แน่นอนว่า... มันอยู่ที่นี่.",
						"hindi": "नहीं, वह निश्चित रूप से... यहीं था।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이 유물이… 진실을 보여줄 거야.",
						"english": "This artifact… it will reveal the truth.",
						"japanese": "この遺物が…真実を見せてくれるだろう。",
						"chinese": "这件文物…它会揭示真相。",
						"french": "Cet artefact… il révélera la vérité.",
						"spanish": "Este artefacto… revelará la verdad.",
						"vietnamese": "Cổ vật này… sẽ tiết lộ sự thật.",
						"thai": "วัตถุโบราณนี้…จะเปิดเผยความจริง",
						"hindi": "यह कलाकृति... सच्चाई बताएगी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "유적의 속삭임은 귀를 찢을 듯 날카로웠다. 슬픔에 잠긴 흐느낌이 들려왔다.",
						"english": "The ruins' whispers were sharp enough to tear ears. A sorrowful sob was heard.",
						"japanese": "遺跡の囁きは耳を裂くほど鋭かった。悲しみに満ちたすすり泣きが聞こえた。",
						"chinese": "遗迹的低语尖锐得仿佛能撕裂耳膜。悲伤的抽泣声传来。",
						"french": "Les murmures des ruines étaient si perçants qu'ils déchiraient les oreilles. Un sanglot douloureux se fit entendre.",
						"spanish": "Los susurros de las ruinas eran tan agudos que desgarraban los oídos. Se escuchó un sollozo triste.",
						"vietnamese": "Lời thì thầm của phế tích sắc nhọn đến xé tai. Tiếng nức nở đau buồn vang lên.",
						"thai": "เสียงกระซิบของซากปรักหักพังแหลมคมราวกับจะฉีกหู เสียงสะอื้นที่เต็มไปด้วยความโศกเศร้าดังขึ้น",
						"hindi": "खंडहरों की फुसफुसाहट इतनी तीखी थी कि कान फाड़ दे। एक दुख भरी सिसकी सुनाई दी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이걸 움직여야 해. 이걸 조작해야 해.",
						"english": "I have to move this. I have to operate this.",
						"japanese": "これを動かさないと。これを操作しないと。",
						"chinese": "我必须移动它。我必须操作它。",
						"french": "Je dois bouger ça. Je dois manipuler ça.",
						"spanish": "Tengo que mover esto. Tengo que manipular esto.",
						"vietnamese": "Tôi phải di chuyển cái này. Tôi phải thao tác cái này.",
						"thai": "ฉันต้องขยับมัน ฉันต้องควบคุมมัน",
						"hindi": "मुझे इसे हिलाना होगा। मुझे इसे संचालित करना होगा।"
					},
					"type": "speech",
					"speaker": "boris"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "보리스! 정신 차려! 뭘 하는 거야?",
						"english": "Boris! Snap out of it! What are you doing?",
						"japanese": "ボリス！しっかりしろ！何をしているんだ？",
						"chinese": "鲍里斯！清醒点！你在做什么？！",
						"french": "Boris ! Reprends-toi ! Qu'est-ce que tu fais ?",
						"spanish": "¡Boris! ¡Reacciona! ¿Qué estás haciendo?",
						"vietnamese": "Boris! Tỉnh táo lại đi! Anh đang làm gì vậy?",
						"thai": "บอริส! ได้สติหน่อย! นายกำลังทำอะไรน่ะ?",
						"hindi": "बोरिस! होश में आओ! तुम क्या कर रहे हो?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…애기가 울고 있어. 저 아이를 구해야 해.",
						"english": "…The baby is crying. I have to save that child.",
						"japanese": "…赤ちゃんが泣いている。あの子を助けなければ。",
						"chinese": "…孩子在哭。我必须救那个孩子。",
						"french": "…Le bébé pleure. Je dois sauver cet enfant.",
						"spanish": "…El bebé está llorando. Tengo que salvar a ese niño.",
						"vietnamese": "…Em bé đang khóc. Tôi phải cứu đứa trẻ đó.",
						"thai": "…เด็กกำลังร้องไห้ ฉันต้องช่วยเด็กคนนั้น",
						"hindi": "...बच्चा रो रहा है। मुझे उस बच्चे को बचाना होगा।"
					},
					"emotion": "sad",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "보리스도 미쳐가는 것 같아.",
						"english": "Boris seems to be going mad too.",
						"japanese": "ボリスも狂っていくようだ。",
						"chinese": "鲍里斯好像也疯了。",
						"french": "Boris semble aussi devenir fou.",
						"spanish": "Boris parece estar volviéndose loco también.",
						"vietnamese": "Boris hình như cũng đang phát điên.",
						"thai": "บอริสก็ดูเหมือนจะคลุ้มคลั่งไปด้วย",
						"hindi": "बोरिस भी पागल होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_4",
					"type": "speech"
				},
				{
					"content": {
						"korean": "비켜! 진실의 눈이 열릴 거야!",
						"english": "Get out of the way! The Eye of Truth will open!",
						"japanese": "どけ！真実の目が開かれる！",
						"chinese": "让开！真理之眼即将开启！",
						"french": "Écartez-vous ! L'Œil de la Vérité va s'ouvrir !",
						"spanish": "¡Apártate! ¡El Ojo de la Verdad se abrirá!",
						"vietnamese": "Tránh ra! Mắt của Sự thật sẽ mở ra!",
						"thai": "ถอยไป! ดวงตาแห่งความจริงกำลังจะเปิดออก!",
						"hindi": "हट जाओ! सच की आंख खुलने वाली है!"
					},
					"emotion": "angry",
					"speaker": "boris",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "진실은… 너희를… 부술 것이다…",
						"english": "The truth… will… shatter you…",
						"japanese": "真実が… お前たちを… 打ち砕くだろう…",
						"chinese": "真相… 将… 摧毁你们…",
						"french": "La vérité… vous… brisera…",
						"spanish": "La verdad… os… destrozará…",
						"vietnamese": "Sự thật… sẽ… hủy diệt các ngươi…",
						"thai": "สัจจะ… จะ… ทำลายเจ้า…",
						"hindi": "सच… तुम्हें… तोड़ देगा…"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "끝났어. …보리스는?",
						"english": "It's over. …Boris?",
						"japanese": "終わった。…ボリスは？",
						"chinese": "结束了。…鲍里斯呢？",
						"french": "C'est fini. …Boris ?",
						"spanish": "Se acabó. …¿Boris?",
						"vietnamese": "Xong rồi. …Boris đâu?",
						"thai": "จบแล้ว… บอริสล่ะ?",
						"hindi": "खत्म हो गया।…बोरिस कहाँ है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아니… 아이… 아이가 사라졌어…",
						"english": "No… the child… the child is gone…",
						"japanese": "まさか… 子供が… 子供が消えた…",
						"chinese": "不… 孩子… 孩子不见了…",
						"french": "Non… l'enfant… l'enfant a disparu…",
						"spanish": "No… el niño… el niño ha desaparecido…",
						"vietnamese": "Không… đứa bé… đứa bé biến mất rồi…",
						"thai": "ไม่… เด็ก… เด็กหายไปแล้ว…",
						"hindi": "नहीं… बच्चा… बच्चा गायब हो गया…"
					},
					"emotion": "sad",
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "보리스는 빈손으로 허공을 더듬었다. 유적의 저주는 그를 놓아주지 않았다.",
						"english": "Boris fumbled in the air, his hands empty. The ruins' curse held him fast.",
						"japanese": "ボリスは虚空をさまよった。遺跡の呪いは彼を解放しなかった。",
						"chinese": "鲍里斯徒劳地摸索着空气。遗迹的诅咒没有放过他。",
						"french": "Boris tâtonna dans le vide, les mains vides. La malédiction des ruines ne le lâchait pas.",
						"spanish": "Boris manoteó en el aire vacío. La maldición de las ruinas no lo soltaba.",
						"vietnamese": "Boris dò dẫm trong khoảng không vô vọng. Lời nguyền của di tích không buông tha anh.",
						"thai": "บอริสคลำหาในอากาศด้วยมือเปล่า คำสาปของซากปรักหักพังไม่ยอมปล่อยเขาไป",
						"hindi": "बोरिस ने खाली हाथों से हवा में टटोला। खंडहर का शाप उसे छोड़ नहीं रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대는 유물 조각을 들고, 더 깊은 심연으로 향했다. 진실의 무게는 점차 견딜 수 없게 되었다.",
						"english": "Bearing the artifact fragment, the expedition delved deeper. The weight of truth grew unbearable.",
						"japanese": "探検隊は遺物のかけらを持ち、より深い深淵へと向かった。真実の重さは次第に耐え難いものとなっていった。",
						"chinese": "探险队带着神器碎片，深入更深的深渊。真相的重负逐渐变得难以承受。",
						"french": "L'expédition, portant le fragment d'artefact, s'enfonça dans l'abîme. Le poids de la vérité devenait insoutenable.",
						"spanish": "La expedición, con el fragmento del artefacto, se adentró en el abismo. El peso de la verdad se hacía insoportable.",
						"vietnamese": "Đoàn thám hiểm mang theo mảnh di vật, tiến sâu hơn vào vực thẳm. Trọng lượng của sự thật dần trở nên không thể chịu đựng được.",
						"thai": "คณะสำรวจถือชิ้นส่วนโบราณวัตถุและมุ่งหน้าสู่ห้วงลึกยิ่งขึ้น ภาระของความจริงเริ่มหนักหน่วงจนยากจะทานทน",
						"hindi": "अभियान दल कलाकृति के टुकड़े लेकर, और गहरे अथाह में उतर गया। सत्य का बोझ धीरे-धीरे असहनीय होता जा रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다. 유적의 차가운 웃음소리만 울려 퍼졌다.",
						"english": "Darkness swallowed all. Only the ruins' cold laughter echoed.",
						"japanese": "闇がすべてを飲み込んだ。遺跡の冷たい笑い声だけが響き渡った。",
						"chinese": "黑暗吞噬了一切。只有遗迹冰冷的笑声回荡着。",
						"french": "L'obscurité engloutit tout. Seul le rire froid des ruines résonnait.",
						"spanish": "La oscuridad lo devoró todo. Solo resonó la fría risa de las ruinas.",
						"vietnamese": "Bóng tối nuốt chửng mọi thứ. Chỉ còn tiếng cười lạnh lẽo của di tích vang vọng.",
						"thai": "ความมืดกลืนกินทุกสิ่ง มีเพียงเสียงหัวเราะอันเย็นชาของซากปรักหักพังเท่านั้นที่ก้องกังวาน",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। केवल खंडहर की ठंडी हंसी गूंज रही थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "돌아와라… 광기의 춤을 추러.",
						"english": "Come back… to dance the madness.",
						"japanese": "戻ってこい… 狂気の舞を踊りに。",
						"chinese": "回来吧… 跳起疯狂之舞。",
						"french": "Reviens… pour la danse de la folie.",
						"spanish": "Vuelve… a bailar la danza de la locura.",
						"vietnamese": "Quay lại đi… để khiêu vũ điệu điên loạn.",
						"thai": "กลับมาเถิด… เพื่อเต้นรำแห่งความบ้าคลั่ง",
						"hindi": "वापस आ जाओ… पागलपन का नृत्य करने।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it… it's not… over yet!",
						"japanese": "くそ… まだ… 終わってない！",
						"chinese": "该死… 还没… 结束！",
						"french": "Bon sang… ce n'est pas… fini !",
						"spanish": "¡Maldita sea… aún no… ha terminado!",
						"vietnamese": "Chết tiệt… vẫn… chưa kết thúc!",
						"thai": "ให้ตายสิ… ยัง… ไม่จบ!",
						"hindi": "धिक्कार है… अभी… खत्म नहीं हुआ!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "boris"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이 유물… 제대로 작동하지 않아! 다시 해야 해…!",
						"english": "This artifact... it's not working properly! I have to do it again...!",
						"japanese": "この遺物…ちゃんと動いてない！もう一度やらなきゃ…！",
						"chinese": "这件遗物……不能正常工作！我必须重来一遍……！",
						"french": "Cet artefact… il ne fonctionne pas correctement ! Je dois recommencer… !",
						"spanish": "Este artefacto… ¡no funciona correctamente! ¡Tengo que hacerlo de nuevo…!",
						"vietnamese": "Vật phẩm này... nó không hoạt động đúng! Mình phải làm lại...!",
						"thai": "สิ่งประดิษฐ์นี้... มันทำงานไม่ถูกต้อง! ฉันต้องทำใหม่...!",
						"hindi": "यह कलाकृति... ठीक से काम नहीं कर रही! मुझे यह फिर से करना होगा...!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 보리스의 등 뒤에서 솟아났다.",
						"english": "A colossal shadow rose from behind Boris's back.",
						"japanese": "巨大な影がボリスの背後から現れた。",
						"chinese": "巨大的黑影从鲍里斯背后升起。",
						"french": "Une ombre colossale surgit derrière le dos de Boris.",
						"spanish": "Una sombra colosal surgió de la espalda de Boris.",
						"vietnamese": "Một cái bóng khổng lồ trỗi dậy từ phía sau lưng Boris.",
						"thai": "เงาขนาดมหึมาผุดขึ้นจากด้านหลังของบอริส",
						"hindi": "बोरिस की पीठ के पीछे से एक विशालकाय परछाई उठी।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 필멸자여… 눈을 뜨는 자, 영원히 이곳에 갇히리라.",
						"english": "Foolish mortal… He who opens his eyes shall be trapped here forever.",
						"japanese": "愚かなる定命の者よ… 目を開く者は、永遠にここに囚われるだろう。",
						"chinese": "愚蠢的凡人啊…睁眼者，将永远被困于此。",
						"french": "Mortel insensé… Celui qui ouvre les yeux sera piégé ici pour l'éternité.",
						"spanish": "Mortal insensato… El que abra los ojos, quedará atrapado aquí para siempre.",
						"vietnamese": "Hỡi phàm nhân ngu xuẩn… Kẻ nào mở mắt ra, sẽ bị giam cầm vĩnh viễn nơi đây.",
						"thai": "มนุษย์ผู้โง่เขลา… ผู้ใดที่ลืมตา จะถูกจองจำที่นี่ตลอดไป",
						"hindi": "मूर्ख नश्वर प्राणी… जो आंखें खोलेगा, वह हमेशा के लिए यहीं फंसा रहेगा।"
					}
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "아니야! 내가… 내가 진실을 밝힐 거야!",
						"english": "No! I… I will reveal the truth!",
						"japanese": "違う！私が…私が真実を明らかにする！",
						"chinese": "不！我…我将揭露真相！",
						"french": "Non ! Je… je vais révéler la vérité !",
						"spanish": "¡No! ¡Yo… yo revelaré la verdad!",
						"vietnamese": "Không! Tôi… tôi sẽ phơi bày sự thật!",
						"thai": "ไม่! ฉัน… ฉันจะเปิดเผยความจริง!",
						"hindi": "नहीं! मैं… मैं सच्चाई उजागर करूंगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "보리스! 물러서!",
						"english": "Boris! Stand back!",
						"japanese": "ボリス！下がれ！",
						"chinese": "鲍里斯！退下！",
						"french": "Boris ! Recule !",
						"spanish": "¡Boris! ¡Retrocede!",
						"vietnamese": "Boris! Lùi lại!",
						"thai": "บอริส! ถอยไป!",
						"hindi": "बोरिस! पीछे हटो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네 광기가, 나의 힘이 될지니.",
						"english": "Your madness, my strength.",
						"japanese": "お前の狂気、我が力とならん。",
						"chinese": "你的疯狂，将成为我的力量。",
						"french": "Ta folie, ma force.",
						"spanish": "Tu locura, mi fuerza.",
						"vietnamese": "Sự điên loạn của ngươi sẽ là sức mạnh của ta.",
						"thai": "ความบ้าคลั่งของเจ้า จะเป็นพลังของข้า",
						"hindi": "तेरा पागलपन, मेरी शक्ति बनेगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	]
} as const;
