export const scenario_forest_verdantsorrow_5_02 = {
	"scenario_id": "forest_verdantsorrow_5_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 심연으로, 탐험대는 나아갔다.",
			"브라켄은 숲의 비정상적인 에너지를 감지했다.",
			"이곳의 비밀은 자연 현상을 넘어선다.",
			"사라져가는 메아리가 탐험대를 부르고 있었다."
		],
		"english": [
			"Into the forest's depths, the expedition advanced.",
			"Braken detected an abnormal energy in the forest.",
			"The secret here transcends natural phenomena.",
			"Fading echoes were calling the expedition."
		],
		"japanese": [
			"森の深淵へ、探検隊は進んだ。",
			"ブラケンは森の異常なエネルギーを感知した。",
			"ここの秘密は自然現象を超えている。",
			"消えゆくこだまが探検隊を呼んでいた。"
		],
		"chinese": [
			"探险队深入森林深处。",
			"布拉肯感应到森林中异常的能量。",
			"这里的秘密超越了自然现象。",
			"渐渐消失的回声正在呼唤着探险队。"
		],
		"french": [
			"L'expédition s'enfonça dans les profondeurs de la forêt.",
			"Braken détecta une énergie anormale dans la forêt.",
			"Le secret de ce lieu dépasse les phénomènes naturels.",
			"Des échos s'estompant appelaient l'expédition."
		],
		"spanish": [
			"La expedición avanzó hacia las profundidades del bosque.",
			"Braken detectó una energía anormal en el bosque.",
			"El secreto de este lugar trasciende los fenómenos naturales.",
			"Ecos que se desvanecían llamaban a la expedición."
		],
		"vietnamese": [
			"Đoàn thám hiểm tiến sâu vào lòng rừng.",
			"Braken cảm nhận được một năng lượng bất thường trong rừng.",
			"Bí mật ở đây vượt qua cả hiện tượng tự nhiên.",
			"Những tiếng vọng mờ dần đang gọi đoàn thám hiểm."
		],
		"thai": [
			"คณะสำรวจมุ่งหน้าสู่ความลึกของป่า",
			"บราเคนตรวจพบพลังงานที่ผิดปกติในป่า",
			"ความลับของที่นี่อยู่เหนือปรากฏการณ์ธรรมชาติ",
			"เสียงสะท้อนที่จางหายไปกำลังเรียกคณะสำรวจ"
		],
		"hindi": [
			"जंगल की गहराई में, अभियान दल आगे बढ़ा।",
			"ब्राकेन ने जंगल में एक असामान्य ऊर्जा का पता लगाया।",
			"यहाँ का रहस्य प्राकृतिक घटनाओं से परे है।",
			"लुप्त होती गूँजें अभियान दल को बुला रही थीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 거대한 나무들이 하늘을 가리고 있었다.",
						"english": "The forest deepened. Giant trees obscured the sky.",
						"japanese": "森はさらに深まった。巨大な木々が空を覆っていた。",
						"chinese": "森林变得更加幽深。参天大树遮蔽了天空。",
						"french": "La forêt s'épaississait. Des arbres gigantesques cachaient le ciel.",
						"spanish": "El bosque se hizo más profundo. Árboles gigantes cubrían el cielo.",
						"vietnamese": "Rừng càng thêm sâu. Những cây cổ thụ che khuất bầu trời.",
						"thai": "ป่าลึกขึ้นเรื่อยๆ ต้นไม้ใหญ่บดบังท้องฟ้า",
						"hindi": "जंगल और गहरा हो गया। विशाल पेड़ों ने आसमान को ढँक लिया था।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "…이상하군요. 에너지 흐름이 불안정합니다.",
						"english": "...Strange. The energy flow is unstable.",
						"japanese": "…おかしいですね。エネルギーの流れが不安定です。",
						"chinese": "……奇怪。能量流不稳定。",
						"french": "...Étrange. Le flux d'énergie est instable.",
						"spanish": "...Extraño. El flujo de energía es inestable.",
						"vietnamese": "...Lạ thật. Luồng năng lượng không ổn định.",
						"thai": "...แปลกจัง กระแสพลังงานไม่เสถียร",
						"hindi": "...अजीब है। ऊर्जा का प्रवाह अस्थिर है।"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 뭔가 잘못됐어?",
						"english": "What do you mean? Is something wrong?",
						"japanese": "何を言ってるんだ？何かあったのか？",
						"chinese": "什么意思？出什么事了？",
						"french": "Que veux-tu dire ? Quelque chose ne va pas ?",
						"spanish": "¿Qué quieres decir? ¿Pasa algo malo?",
						"vietnamese": "Cậu nói gì vậy? Có chuyện gì sao?",
						"thai": "หมายความว่าไง? มีอะไรผิดปกติเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? क्या कुछ गलत हुआ है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "아직 확실하진 않습니다. 하지만… 예사롭지 않습니다.",
						"english": "I'm not sure yet. But... it's not normal.",
						"japanese": "まだ確実ではありません。しかし…尋常ではありません。",
						"chinese": "还不确定。但是……不寻常。",
						"french": "Je n'en suis pas encore certain. Mais... ce n'est pas ordinaire.",
						"spanish": "Todavía no estoy seguro. Pero... no es algo común.",
						"vietnamese": "Vẫn chưa chắc chắn. Nhưng... không bình thường chút nào.",
						"thai": "ยังไม่แน่ใจนัก แต่...มันไม่ปกติ",
						"hindi": "अभी निश्चित नहीं है। लेकिन... यह सामान्य नहीं है।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "에너지 흐름이… 격렬해지고 있습니다. 마치 숲 자체가 고통받는 것처럼.",
						"english": "The energy flow is... intensifying. As if the forest itself is suffering.",
						"japanese": "エネルギーの流れが…激しくなっています。まるで森自体が苦しんでいるかのように。",
						"chinese": "能量流……变得剧烈。仿佛森林本身正在遭受痛苦。",
						"french": "Le flux d'énergie... s'intensifie. Comme si la forêt elle-même souffrait.",
						"spanish": "El flujo de energía... se está intensificando. Como si el bosque mismo estuviera sufriendo.",
						"vietnamese": "Luồng năng lượng... đang dữ dội hơn. Cứ như thể chính khu rừng đang chịu đựng vậy.",
						"thai": "กระแสพลังงาน...รุนแรงขึ้นเรื่อยๆ ราวกับว่าป่ากำลังเจ็บปวด",
						"hindi": "ऊर्जा का प्रवाह... तीव्र हो रहा है। जैसे कि जंगल स्वयं पीड़ित हो रहा हो।"
					},
					"speaker": "bracken"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "고통받아? 그게 무슨 말이야.",
						"english": "Suffering? What do you mean?",
						"japanese": "苦しんでる？どういうことだ。",
						"chinese": "遭受痛苦？那是什么意思？",
						"french": "Souffrir ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Sufriendo? ¿Qué quieres decir?",
						"vietnamese": "Chịu đựng á? Ý cậu là gì?",
						"thai": "เจ็บปวดเหรอ? หมายความว่าไง",
						"hindi": "पीड़ित हो रहा है? उसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "데이터로는 설명하기 어려운 현상입니다. 이 숲은… 살아있는 듯해요.",
						"english": "This phenomenon is hard to explain with data. This forest… it feels alive.",
						"japanese": "データでは説明しがたい現象です。この森は…生きているようです。",
						"chinese": "这是一个数据难以解释的现象。这片森林……它似乎有生命。",
						"french": "C'est un phénomène difficile à expliquer par les données. Cette forêt… elle semble vivante.",
						"spanish": "Es un fenómeno difícil de explicar con datos. Este bosque… parece estar vivo.",
						"vietnamese": "Đây là một hiện tượng khó giải thích bằng dữ liệu. Khu rừng này… dường như đang sống.",
						"thai": "เป็นปรากฏการณ์ที่ยากจะอธิบายด้วยข้อมูล ป่านี้... ดูเหมือนมีชีวิต",
						"hindi": "यह एक ऐसी घटना है जिसे डेटा से समझाना मुश्किल है। यह जंगल… ऐसा लगता है जैसे यह जीवित है।"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왠지 모르게… 슬픈 소리가 들리는 것 같아.",
						"english": "Somehow… I feel like I hear a sad sound.",
						"japanese": "何故か…悲しい音が聞こえる気がする。",
						"chinese": "不知为何……我好像听到了悲伤的声音。",
						"french": "D'une certaine manière… j'ai l'impression d'entendre un son triste.",
						"spanish": "De alguna manera… siento que escucho un sonido triste.",
						"vietnamese": "Không hiểu sao… tôi cứ nghe thấy một âm thanh buồn bã.",
						"thai": "ไม่รู้ทำไม... เหมือนได้ยินเสียงที่เศร้าสร้อย",
						"hindi": "पता नहीं क्यों… मुझे एक उदास आवाज़ सुनाई दे रही है।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이걸 보세요. 나무 껍질에서 흘러나오는 이 액체는…",
						"english": "Look at this. This liquid flowing from the tree bark is…",
						"japanese": "これを見てください。木の皮から流れ出るこの液体は…",
						"chinese": "看看这个。从树皮流出的这种液体……",
						"french": "Regardez ça. Ce liquide qui coule de l'écorce…",
						"spanish": "Mira esto. Este líquido que fluye de la corteza del árbol es…",
						"vietnamese": "Nhìn cái này đi. Chất lỏng chảy ra từ vỏ cây này là…",
						"thai": "ดูนี่สิ ของเหลวที่ไหลออกมาจากเปลือกไม้นี่มัน...",
						"hindi": "इसे देखो। पेड़ की छाल से निकलने वाला यह तरल…"
					},
					"speaker": "bracken",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "단순한 수액이 아닙니다. 검붉은 색이… 흡사 피눈물 같습니다.",
						"english": "It's not just sap. The dark red color… it's like tears of blood.",
						"japanese": "ただの樹液ではありません。黒みがかった赤色が…まるで血の涙のようです。",
						"chinese": "这不只是树液。这暗红色……简直就像血泪。",
						"french": "Ce n'est pas juste de la sève. Cette couleur rouge sombre… c'est comme des larmes de sang.",
						"spanish": "No es solo savia. El color rojo oscuro… parece lágrimas de sangre.",
						"vietnamese": "Đây không chỉ là nhựa cây. Màu đỏ sẫm này… giống hệt như nước mắt máu.",
						"thai": "ไม่ใช่แค่น้ำเลี้ยง สีแดงเข้มนี้... เหมือนน้ำตาเลือด",
						"hindi": "यह सिर्फ रस नहीं है। गहरा लाल रंग… खून के आँसुओं जैसा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "피눈물… 징그러워.",
						"english": "Tears of blood… Disgusting.",
						"japanese": "血の涙…気味が悪い。",
						"chinese": "血泪……真恶心。",
						"french": "Larmes de sang… Dégoutant.",
						"spanish": "Lágrimas de sangre… Qué asco.",
						"vietnamese": "Nước mắt máu… Ghê tởm.",
						"thai": "น้ำตาเลือด... น่าขยะแขยง",
						"hindi": "खून के आँसू… घिनौना।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 숲은… 생명력을 빼앗기고 있습니다. 누군가에 의해.",
						"english": "This forest… its life force is being drained. By someone.",
						"japanese": "この森は…生命力を奪われています。誰かによって。",
						"chinese": "这片森林……它的生命力正在被剥夺。被某人。",
						"french": "Cette forêt… sa force vitale est en train d'être drainée. Par quelqu'un.",
						"spanish": "Este bosque… le están arrebatando su fuerza vital. Por alguien.",
						"vietnamese": "Khu rừng này… đang bị tước đoạt sinh lực. Bởi ai đó.",
						"thai": "ป่านี้... กำลังถูกดูดกลืนพลังชีวิตไป โดยใครบางคน",
						"hindi": "इस जंगल की… जीवन शक्ति छीनी जा रही है। किसी के द्वारा।"
					},
					"speaker": "bracken"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						5,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "bracken",
					"content": {
						"korean": "더 이상 진행하는 건 위험합니다. 이 앞은…",
						"english": "Proceeding further is dangerous. Ahead is…",
						"japanese": "これ以上進むのは危険です。この先は…",
						"chinese": "再往前走就危险了。前面是……",
						"french": "Continuer est dangereux. Devant nous…",
						"spanish": "Continuar es peligroso. Más adelante…",
						"vietnamese": "Tiếp tục đi nữa là nguy hiểm. Phía trước là…",
						"thai": "การไปต่ออันตรายแล้ว ข้างหน้าคือ...",
						"hindi": "आगे बढ़ना ख़तरनाक है। इस आगे…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야 해.",
						"english": "I can't stop. I must know the truth.",
						"japanese": "止まれない。真実を知らなければ。",
						"chinese": "无法停止。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois savoir la vérité.",
						"spanish": "No puedo parar. Debo saber la verdad.",
						"vietnamese": "Không thể dừng lại. Phải biết sự thật.",
						"thai": "หยุดไม่ได้ ต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच्चाई जाननी होगी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "거대한 에너지의 중심이 느껴집니다. 저 너머에 있을 겁니다.",
						"english": "I feel the center of an immense energy. It must be beyond that.",
						"japanese": "巨大なエネルギーの中心を感じます。その先にきっとあるでしょう。",
						"chinese": "我感受到了巨大能量的中心。它一定就在那后面。",
						"french": "Je ressens le centre d'une énergie immense. Ce doit être au-delà.",
						"spanish": "Siento el centro de una energía inmensa. Debe estar más allá.",
						"vietnamese": "Tôi cảm nhận được trung tâm của một nguồn năng lượng khổng lồ. Nó hẳn là ở phía bên kia.",
						"thai": "สัมผัสได้ถึงศูนย์กลางพลังงานมหาศาล มันคงอยู่เลยไปจากตรงนั้น",
						"hindi": "मुझे एक विशाल ऊर्जा का केंद्र महसूस हो रहा है। वह उस पार होगा।"
					}
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "여기가… 마지막 길인 것 같아.",
						"english": "This feels like… the final path.",
						"japanese": "ここが…最後の道のようです。",
						"chinese": "这里……似乎是最后的道路了。",
						"french": "C'est comme… le dernier chemin.",
						"spanish": "Parece que este es… el último camino.",
						"vietnamese": "Đây có vẻ là… con đường cuối cùng.",
						"thai": "ที่นี่... น่าจะเป็นทางสุดท้ายแล้ว",
						"hindi": "यह… आखिरी रास्ता लगता है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow swallowed the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了探险队。",
						"french": "Une ombre colossale a englouti l'expédition.",
						"spanish": "Una sombra colosal engulló a la expedición.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงาขนาดมหึมากลืนกินคณะสำรวจ",
						"hindi": "एक विशालकाय छाया ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "겨우 이 정도인가. 너희의 어리석음이 숲을 더럽히는군.",
						"english": "Is this all? Your foolishness taints the forest.",
						"japanese": "たったこれだけか。お前たちの愚かさが森を汚す。",
						"chinese": "就这点本事吗？你们的愚蠢玷污了森林。",
						"french": "C'est tout ce que vous avez ? Votre folie souille la forêt.",
						"spanish": "¿Eso es todo? Vuestra estupidez contamina el bosque.",
						"vietnamese": "Chỉ đến thế này thôi sao. Sự ngu ngốc của các ngươi đang làm ô uế khu rừng.",
						"thai": "แค่นี้เองหรือ? ความโง่เขลาของพวกเจ้าแปดเปื้อนป่า",
						"hindi": "बस इतना ही? तुम्हारी मूर्खता जंगल को दूषित करती है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 다시 돌아올 거야. 반드시.",
						"english": "Damn it... I'll be back. I swear it.",
						"japanese": "くそっ… また戻ってくる。必ずだ。",
						"chinese": "该死… 我会再回来。一定会。",
						"french": "Maudit… Je reviendrai. C'est promis.",
						"spanish": "Maldita sea… Volveré. Lo juro.",
						"vietnamese": "Khốn kiếp… Ta sẽ quay lại. Nhất định.",
						"thai": "บ้าจริง… ฉันจะกลับมาอีกครั้ง แน่นอน",
						"hindi": "धिक्कार है… मैं वापस आऊँगा। ज़रूर।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대 앞에 거대한 그림자가 나타났다. 정체 모를 존재였다.",
						"english": "A colossal shadow appeared before the expedition. Its identity unknown.",
						"japanese": "探検隊の前に巨大な影が現れた。正体不明の存在だった。",
						"chinese": "探险队面前出现了一个巨大的影子。它是一个身份不明的存在。",
						"french": "Une ombre colossale apparut devant l'expédition. Une entité inconnue.",
						"spanish": "Una sombra colosal apareció ante la expedición. Una entidad desconocida.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện trước đoàn thám hiểm. Một thực thể không rõ danh tính.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นเบื้องหน้าคณะสำรวจ เป็นสิ่งมีชีวิตที่ไม่อาจระบุตัวตนได้",
						"hindi": "अभियान दल के सामने एक विशाल छाया प्रकट हुई। एक अज्ञात अस्तित्व।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 왔는가. 침입자들.",
						"english": "You've made it this far, intruders.",
						"japanese": "ここまで来たか、侵入者ども。",
						"chinese": "你们竟然走到这里了，入侵者们。",
						"french": "Vous êtes venus jusqu'ici, intrus.",
						"spanish": "Han llegado hasta aquí, intrusos.",
						"vietnamese": "Các ngươi đã đến tận đây, những kẻ xâm nhập.",
						"thai": "พวกเจ้ามาถึงที่นี่แล้วสินะ ผู้บุกรุกทั้งหลาย",
						"hindi": "तुम यहाँ तक आ गए, घुसपैठियों।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 숲을 망가뜨리고 있는 거야?",
						"english": "Are you the one destroying this forest?",
						"japanese": "お前がこの森を破壊しているのか？",
						"chinese": "是你在破坏这片森林吗？",
						"french": "Est-ce toi qui détruis cette forêt ?",
						"spanish": "Eres tú quien está destruyendo este bosque?",
						"vietnamese": "Ngươi là kẻ đang hủy hoại khu rừng này à?",
						"thai": "เจ้าคือผู้ทำลายป่านี้หรือ?",
						"hindi": "क्या तुम इस जंगल को नष्ट कर रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "에너지의 원천은 바로 저 존재입니다. 파괴적인 힘이…",
						"english": "That entity is the source of the energy. A destructive power...",
						"japanese": "エネルギーの源はまさにあの存在です。破壊的な力が…",
						"chinese": "能量的来源就是那个存在。一股毁灭性的力量…",
						"french": "Cette entité est la source de l'énergie. Un pouvoir destructeur...",
						"spanish": "Esa entidad es la fuente de la energía. Un poder destructivo...",
						"vietnamese": "Thực thể đó chính là nguồn năng lượng. Một sức mạnh hủy diệt...",
						"thai": "สิ่งมีชีวิตนั้นคือแหล่งพลังงาน พลังทำลายล้างที่...",
						"hindi": "वह अस्तित्व ही ऊर्जा का स्रोत है। एक विनाशकारी शक्ति..."
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 숲의 질서를 감히 논하는가. 무지한 것들.",
						"english": "How dare you question the order of this forest. Ignorant fools.",
						"japanese": "この森の秩序を敢えて論じるか。無知な者どもめ。",
						"chinese": "你们竟敢妄议这片森林的秩序。无知之徒。",
						"french": "Comment osez-vous remettre en question l'ordre de cette forêt. Ignorants.",
						"spanish": "¿Cómo os atrevéis a cuestionar el orden de este bosque? Ignorantes.",
						"vietnamese": "Các ngươi dám tranh luận về trật tự của khu rừng này sao? Những kẻ ngu muội.",
						"thai": "เจ้ากล้ามาวิพากษ์วิจารณ์ระเบียบของป่านี้รึ? พวกโง่เขลา",
						"hindi": "तुम इस जंगल की व्यवस्था पर सवाल उठाने की हिम्मत कैसे करते हो। अज्ञानियों।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 겨우 이 정도라니. 하지만…",
						"english": "Ugh... Is this all you've got? But...",
						"japanese": "ぐうう…たかがこれしきか。しかし…",
						"chinese": "呃啊…就这点程度吗。但是…",
						"french": "Ugh... Seulement ça ? Mais...",
						"spanish": "Ugh... ¿Solo esto? Pero...",
						"vietnamese": "Khụ khụ… Chỉ có thế này thôi sao. Nhưng mà…",
						"thai": "อึก… แค่นี้เองเหรอ แต่ว่า…",
						"hindi": "उफ़... बस इतना ही? लेकिन..."
					}
				},
				{
					"content": {
						"korean": "진정한 고통은… 이제부터 시작될 것이다…",
						"english": "The true suffering... will begin now...",
						"japanese": "真の苦痛は…これから始まるのだ…",
						"chinese": "真正的痛苦…现在才要开始…",
						"french": "La vraie souffrance... commencera maintenant...",
						"spanish": "El verdadero sufrimiento... comenzará ahora...",
						"vietnamese": "Nỗi đau thực sự… sẽ bắt đầu từ bây giờ…",
						"thai": "ความเจ็บปวดที่แท้จริง… กำลังจะเริ่มขึ้นแล้ว…",
						"hindi": "असली पीड़ा... अब शुरू होगी..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직 끝난 게 아니었어…?",
						"english": "It wasn't over yet...?",
						"japanese": "まだ終わってなかったのか…？",
						"chinese": "还没结束吗…？",
						"french": "Ce n'était pas encore fini...?",
						"spanish": "¿No había terminado aún...?",
						"vietnamese": "Vẫn chưa kết thúc sao…?",
						"thai": "ยังไม่จบอีกเหรอ…?",
						"hindi": "अभी खत्म नहीं हुआ था...?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 존재는… 숲의 일부인 것 같습니다. 처치했다고 해서…",
						"english": "This entity... seems to be part of the forest. Just because we defeated it...",
						"japanese": "この存在は…森の一部であるようです。倒したからといって…",
						"chinese": "这个存在…似乎是森林的一部分。即使把它消灭了…",
						"french": "Cette entité... semble faire partie de la forêt. Le fait de l'avoir vaincue ne signifie pas...",
						"spanish": "Esta entidad... parece ser parte del bosque. Solo porque la hayamos derrotado...",
						"vietnamese": "Thực thể này… dường như là một phần của khu rừng. Chỉ vì đã tiêu diệt được nó…",
						"thai": "สิ่งมีชีวิตนี้… ดูเหมือนจะเป็นส่วนหนึ่งของป่า แค่กำจัดมันได้ก็…",
						"hindi": "यह अस्तित्व... जंगल का हिस्सा लगता है। सिर्फ इसलिए कि हमने इसे हरा दिया है..."
					},
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "숲의 비극은 깊어지고 있었다. 탐험대는 더 깊은 진실을 마주해야 했다.",
						"english": "The tragedy of the forest deepened. The expedition had to face a deeper truth.",
						"japanese": "森の悲劇は深まっていた。探検隊は、より深い真実と向き合わねばならなかった。",
						"chinese": "森林的悲剧正在加深。探险队必须面对更深层的真相。",
						"french": "La tragédie de la forêt s'approfondissait. L'expédition dut faire face à une vérité plus profonde.",
						"spanish": "La tragedia del bosque se profundizaba. La expedición tuvo que enfrentarse a una verdad más profunda.",
						"vietnamese": "Bi kịch của khu rừng ngày càng sâu sắc. Đoàn thám hiểm phải đối mặt với một sự thật sâu xa hơn.",
						"thai": "โศกนาฏกรรมของป่าทวีความรุนแรงขึ้น คณะสำรวจต้องเผชิญกับความจริงที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "जंगल की त्रासदी गहराती जा रही थी। अभियान दल को एक गहरी सच्चाई का सामना करना पड़ा।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
