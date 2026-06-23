export const scenario_snowy_blizzking_41_04 = {
	"scenario_id": "snowy_blizzking_41_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이상해. 이 얼음 요새, 마치… 살아있는 것 같아.",
						"english": "…Strange. This ice fortress, it feels… alive.",
						"japanese": "…おかしい。この氷の要塞、まるで…生きているみたい。",
						"chinese": "……奇怪。这座冰封要塞，仿佛……活着的。",
						"french": "…Étrange. Cette forteresse de glace, elle semble… vivante.",
						"spanish": "¿Extraño? Esta fortaleza de hielo, parece… viva.",
						"vietnamese": "…Lạ thật. Pháo đài băng này, cứ như… có sự sống.",
						"thai": "…แปลกจัง ป้อมปราการน้ำแข็งนี่ เหมือน… มีชีวิตเลย",
						"hindi": "...अजीब है। यह बर्फ का किला, मानो... जीवित हो।"
					},
					"speaker": "finn",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "살아있다고? 그게 무슨 소리야?",
						"english": "Alive? What do you mean?",
						"japanese": "生きているって？どういうことだ？",
						"chinese": "活着？你这是什么意思？",
						"french": "Vivante ? Que veux-tu dire ?",
						"spanish": "¿Viva? ¿Qué quieres decir?",
						"vietnamese": "Có sự sống? Ý cậu là sao?",
						"thai": "มีชีวิต? หมายความว่าไง?",
						"hindi": "जीवित? उसका क्या मतलब है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "곳곳에서 기운이 느껴져. 단순한 돌덩이가 아냐. 심장이 뛰는 소리가 들려….",
						"english": "I feel an energy everywhere. It's not just a simple rock. I hear a heart beating….",
						"japanese": "あちこちで気配がする。ただの石ころじゃない。心臓の鼓動が聞こえる…。",
						"chinese": "到处都感受到气息。这不是普通的石头。我听到心脏跳动的声音……",
						"french": "Je ressens une énergie partout. Ce n'est pas qu'une simple roche. J'entends un cœur battre…",
						"spanish": "Siento una energía por todas partes. No es solo una roca. Escucho un corazón latir…",
						"vietnamese": "Tôi cảm nhận được năng lượng khắp nơi. Nó không chỉ là một tảng đá đơn thuần. Tôi nghe thấy tiếng tim đập…",
						"thai": "ฉันรู้สึกถึงพลังงานไปทั่ว ไม่ใช่แค่ก้อนหินธรรมดา ฉันได้ยินเสียงหัวใจเต้น…",
						"hindi": "हर जगह एक ऊर्जा महसूस हो रही है। यह सिर्फ एक साधारण चट्टान नहीं है। मुझे दिल की धड़कन सुनाई दे रही है…।"
					},
					"speaker": "finn",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "요새는 차가운 얼음 속에 거대한 생명을 숨기고 있었다.",
						"english": "The fortress concealed a colossal life within its cold ice.",
						"japanese": "要塞は冷たい氷の中に巨大な生命を隠していた。",
						"chinese": "要塞在冰冷的寒冰中隐藏着巨大的生命。",
						"french": "La forteresse cachait une vie colossale au sein de sa glace froide.",
						"spanish": "La fortaleza ocultaba una vida colosal dentro de su frío hielo.",
						"vietnamese": "Pháo đài che giấu một sự sống khổng lồ bên trong lớp băng lạnh giá.",
						"thai": "ป้อมปราการซ่อนชีวิตอันยิ่งใหญ่ไว้ในน้ำแข็งอันเยือกเย็น",
						"hindi": "किले ने अपनी ठंडी बर्फ में एक विशाल जीवन छिपा रखा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "옛 전설에… 겨울 정령과 인간의 영혼이 융합한 존재가 있었어.",
						"english": "In ancient legends… there was a being, a fusion of a winter spirit and a human soul.",
						"japanese": "古い伝説に…冬の精霊と人間の魂が融合した存在がいた。",
						"chinese": "在古老的传说中……曾有一个存在，是冬之精灵与人类灵魂的融合体。",
						"french": "Dans les anciennes légendes… il existait un être, une fusion d'un esprit hivernal et d'une âme humaine.",
						"spanish": "En las antiguas leyendas… existía un ser, una fusión de un espíritu invernal y un alma humana.",
						"vietnamese": "Trong truyền thuyết cổ xưa… có một thực thể, là sự dung hợp giữa tinh linh mùa đông và linh hồn con người.",
						"thai": "ในตำนานเก่าแก่… มีสิ่งมีชีวิตหนึ่งที่เกิดจากการหลอมรวมของวิญญาณฤดูหนาวและวิญญาณมนุษย์",
						"hindi": "पुरानी किंवदंतियों में... एक ऐसा प्राणी था, जो शीतकालीन आत्मा और मानव आत्मा का संलयन था।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "융합…?",
						"english": "Fusion…?",
						"japanese": "融合…？",
						"chinese": "融合……？",
						"french": "Fusion… ?",
						"spanish": "¿Fusión…?",
						"vietnamese": "Dung hợp…?",
						"thai": "หลอมรวม…?",
						"hindi": "संलयन...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 얼음 요새… 단순한 건축물이 아냐. 누군가 특정 의도를 가지고 만들어내고 있어.",
						"english": "This ice fortress... it's not just a structure. Someone's building it with a specific intent.",
						"japanese": "この氷の要塞…ただの建造物じゃない。誰かが明確な意図を持って作り出している。",
						"chinese": "这座冰之要塞……它不只是一座建筑。有人正带着某种目的建造它。",
						"french": "Cette forteresse de glace... ce n'est pas une simple structure. Quelqu'un la construit avec une intention précise.",
						"spanish": "Esta fortaleza de hielo... no es una simple estructura. Alguien la está construyendo con una intención específica.",
						"vietnamese": "Pháo đài băng này... không chỉ là một kiến trúc đơn thuần. Ai đó đang xây dựng nó với một ý đồ cụ thể.",
						"thai": "ป้อมปราการน้ำแข็งนี้... ไม่ใช่แค่สิ่งก่อสร้างธรรมดา ใครบางคนสร้างมันขึ้นมาด้วยเจตนาบางอย่าง",
						"hindi": "यह बर्फ़ीला क़िला... महज़ एक इमारत नहीं है। कोई इसे ख़ास इरादे से बना रहा है।"
					},
					"speaker": "finn",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "그럼 이 모든 게… 계획된 거란 말이야?",
						"english": "So, all of this... it's planned?",
						"japanese": "じゃあ、これら全てが…計画されていたと？",
						"chinese": "那么，这一切……都是计划好的？",
						"french": "Alors, tout ça... c'est planifié ?",
						"spanish": "¿Entonces, todo esto... está planeado?",
						"vietnamese": "Vậy, tất cả những chuyện này... đều đã được lên kế hoạch sao?",
						"thai": "งั้นทั้งหมดนี่... มันถูกวางแผนไว้แล้วเหรอ?",
						"hindi": "तो, यह सब... योजनाबद्ध है?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "저길 봐. 곳곳에 균열이 보이지? 아직 완성되지 않은 부분도 있어.",
						"english": "Look. See the cracks everywhere? Some parts aren't even finished yet.",
						"japanese": "見て。あちこちに亀裂が見えるだろ？まだ完成していない部分もある。",
						"chinese": "看。到处都有裂痕，对吧？有些部分甚至还没完工。",
						"french": "Regarde. Tu vois les fissures partout ? Certaines parties ne sont même pas encore terminées.",
						"spanish": "Mira. ¿Ves las grietas por todas partes? Algunas partes ni siquiera están terminadas todavía.",
						"vietnamese": "Nhìn kìa. Thấy những vết nứt khắp nơi không? Có những phần còn chưa hoàn thành nữa.",
						"thai": "ดูสิ เห็นรอยร้าวทุกที่ใช่ไหม? บางส่วนยังสร้างไม่เสร็จด้วยซ้ำ",
						"hindi": "देखो। हर जगह दरारें दिख रही हैं ना? कुछ हिस्से तो अभी पूरे भी नहीं हुए।"
					},
					"speaker": "finn",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "마치 계속 자라나고 있는 것처럼….",
						"english": "As if it's still growing...",
						"japanese": "まるで、まだ成長し続けているかのように…。",
						"chinese": "就像它还在不断生长一样……",
						"french": "Comme si ça continuait de grandir...",
						"spanish": "Como si siguiera creciendo...",
						"vietnamese": "Cứ như thể nó vẫn đang tiếp tục phát triển vậy...",
						"thai": "เหมือนมันกำลังเติบโตขึ้นเรื่อยๆ...",
						"hindi": "जैसे यह अभी भी बढ़ रहा है..."
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "그래. 흡수하고, 성장해. 내가… 예전에 막지 못했던 것들이 다시….",
						"english": "Yes. It absorbs, it grows. The things I... couldn't stop before, they're back...",
						"japanese": "そう。吸収し、成長する。私が…以前止められなかったものが再び…。",
						"chinese": "是的。它吸收，它生长。那些我……以前没能阻止的东西，又回来了……",
						"french": "Oui. Ça absorbe, ça grandit. Les choses que je... n'ai pas pu arrêter avant, elles reviennent...",
						"spanish": "Sí. Absorbe, crece. Las cosas que yo... no pude detener antes, regresan...",
						"vietnamese": "Đúng vậy. Nó hấp thụ, nó phát triển. Những thứ mà tôi... đã không thể ngăn chặn trước đây, chúng lại...",
						"thai": "ใช่ มันดูดซับ มันเติบโต สิ่งที่ฉัน... หยุดไม่ได้เมื่อก่อน มันกลับมาอีกแล้ว...",
						"hindi": "हाँ। यह सोखता है, यह बढ़ता है। वे चीज़ें जिन्हें मैं... पहले रोक नहीं पाया था, वे फिर से..."
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "당신 과거랑 관련 있어?",
						"english": "Is it connected to your past?",
						"japanese": "あなたの過去と関係があるの？",
						"chinese": "和你的过去有关吗？",
						"french": "C'est lié à ton passé ?",
						"spanish": "¿Está relacionado con tu pasado?",
						"vietnamese": "Nó có liên quan đến quá khứ của bạn không?",
						"thai": "มันเกี่ยวข้องกับอดีตของคุณเหรอ?",
						"hindi": "क्या यह आपके अतीत से जुड़ा है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "…그래서 이번에는 막아야 해. 반드시.",
						"english": "...So this time, I have to stop it. No matter what.",
						"japanese": "…だから、今回は止めなければならない。必ず。",
						"chinese": "……所以这次，我必须阻止它。无论如何。",
						"french": "...Alors cette fois, je dois l'arrêter. Absolument.",
						"spanish": "...Así que esta vez, debo detenerlo. Cueste lo que cueste.",
						"vietnamese": "...Vậy nên lần này, tôi phải ngăn chặn nó. Bằng mọi giá.",
						"thai": "...ดังนั้นครั้งนี้ ฉันต้องหยุดมันให้ได้ ไม่ว่าจะเกิดอะไรขึ้น",
						"hindi": "...तो इस बार, मुझे इसे रोकना होगा। हर क़ीमत पर।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "finn",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "이 안은 더욱 끔찍해. 모든 얼음이 비명을 지르는 것 같아.",
						"english": "It's even more horrifying inside. All the ice seems to be screaming.",
						"japanese": "この中はさらに恐ろしい。全ての氷が悲鳴を上げているようだ。",
						"chinese": "这里面更可怕。所有的冰块似乎都在尖叫。",
						"french": "C'est encore plus horrible à l'intérieur. On dirait que toute la glace hurle.",
						"spanish": "Es aún más horrible aquí dentro. Todo el hielo parece estar gritando.",
						"vietnamese": "Bên trong còn kinh khủng hơn. Cứ như thể tất cả băng đều đang la hét vậy.",
						"thai": "ข้างในยิ่งน่ากลัว ทุกก้อนน้ำแข็งราวกับกำลังกรีดร้อง",
						"hindi": "अंदर तो और भी भयावह है। सारी बर्फ़ चीख़ती हुई लग रही है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없다는 거야?",
						"english": "You mean there's no going back?",
						"japanese": "戻れないってこと？",
						"chinese": "是说回不去了吗？",
						"french": "Tu veux dire qu'il n'y a pas de retour possible ?",
						"spanish": "¿Quieres decir que no hay vuelta atrás?",
						"vietnamese": "Ý bạn là không thể quay lại sao?",
						"thai": "คุณหมายความว่าเรากลับไม่ได้แล้วเหรอ?",
						"hindi": "क्या इसका मतलब है कि वापस नहीं जा सकते?"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니, 멈춰야 해. 저 앞에… 강한 기운이 느껴져. 요새의 일부일 거야.",
						"english": "No, we have to stop it. Up ahead... I feel a powerful presence. It must be part of the fortress.",
						"japanese": "いや、止めなければ。あの先に…強い気配を感じる。要塞の一部だろう。",
						"chinese": "不，我们必须阻止它。前面……我感觉到一股强大的气息。它应该是要塞的一部分。",
						"french": "Non, il faut l'arrêter. Devant... je sens une puissante énergie. Ce doit être une partie de la forteresse.",
						"spanish": "No, debemos detenerlo. Adelante... siento una presencia poderosa. Debe ser parte de la fortaleza.",
						"vietnamese": "Không, chúng ta phải ngăn chặn nó. Phía trước... tôi cảm thấy một luồng năng lượng mạnh mẽ. Chắc hẳn đó là một phần của pháo đài.",
						"thai": "ไม่สิ เราต้องหยุดมัน ข้างหน้า... ฉันสัมผัสได้ถึงพลังงานที่แข็งแกร่ง มันน่าจะเป็นส่วนหนึ่งของป้อมปราการ",
						"hindi": "नहीं, हमें इसे रोकना होगा। आगे... मुझे एक शक्तिशाली आभा महसूस हो रही है। यह क़िले का ही एक हिस्सा होगा।"
					},
					"speaker": "finn",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 거대한 그림자가 드리운 가장 깊은 곳으로 향했다.",
						"english": "The expedition ventured into the deepest reaches, where a colossal shadow loomed.",
						"japanese": "探検隊は、巨大な影が差す最も深い場所へと向かった。",
						"chinese": "探险队朝着巨影笼罩的最深处进发。",
						"french": "L'expédition s'est aventurée dans les profondeurs les plus sombres, là où une ombre colossale planait.",
						"spanish": "La expedición se adentró en las profundidades, donde una sombra colosal se cernía.",
						"vietnamese": "Đoàn thám hiểm tiến vào nơi sâu thẳm nhất, nơi một bóng đen khổng lồ bao trùm.",
						"thai": "คณะสำรวจมุ่งหน้าสู่ส่วนลึกที่สุด ที่ซึ่งเงาขนาดมหึมาทอดยาวอยู่",
						"hindi": "अभियान उस सबसे गहरी जगह में चला गया जहाँ एक विशाल छाया थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크으윽… 겨우 이 정도의 방해로는… 블리츠 킹의 완성을 막을 수 없다….",
						"english": "Urgh… such meager interference… cannot stop the Blitz King's completion…",
						"japanese": "くそっ…これしきの邪魔では…ブリッツキングの完成は止められん…。",
						"chinese": "呃啊…仅凭这点阻碍…是无法阻止闪电之王的完成的…。",
						"french": "Argh… une si maigre entrave… ne peut arrêter l'achèvement du Roi Blitz…",
						"spanish": "Ugh… una interferencia tan insignificante… no puede detener la culminación del Rey Blitz…",
						"vietnamese": "Khụ… chỉ với chừng này cản trở… không thể ngăn cản sự hoàn thành của Blitz King…",
						"thai": "อ๊าก… แค่การขัดขวางเพียงเท่านี้… ไม่อาจหยุดยั้งความสมบูรณ์ของบลิตซ์คิงได้…",
						"hindi": "उफ़… इतनी मामूली बाधा से… ब्लिट्ज किंग का पूर्ण होना नहीं रुक सकता…।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "블리츠 킹…? 그게 뭐야?",
						"english": "Blitz King…? What's that?",
						"japanese": "ブリッツキング…？それは何だ？",
						"chinese": "闪电之王…？那是什么？",
						"french": "Le Roi Blitz… ? Qu'est-ce que c'est ?",
						"spanish": "¿El Rey Blitz…? ¿Qué es eso?",
						"vietnamese": "Blitz King…? Đó là cái gì vậy?",
						"thai": "บลิตซ์คิง… ? นั่นคืออะไร?",
						"hindi": "ब्लिट्ज किंग…? वह क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "finn",
					"duration_ms": 500
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "놈이 말한 완성… 그리고 블리츠 킹. 요새가 완성되면….",
						"english": "The 'completion' he mentioned… and the Blitz King. If the fortress is completed…",
						"japanese": "奴が言っていた完成…そしてブリッツキング。要塞が完成すれば…。",
						"chinese": "他所说的完成…还有闪电之王。如果要塞完成了…。",
						"french": "La « perfection » qu'il a mentionnée… et le Roi Blitz. Si la forteresse est achevée…",
						"spanish": "La 'culminación' que mencionó… y el Rey Blitz. Si la fortaleza se completa…",
						"vietnamese": "Sự 'hoàn thành' mà hắn nhắc đến… và Blitz King. Nếu pháo đài được hoàn thành…",
						"thai": "‘ความสมบูรณ์’ ที่มันพูดถึง… และบลิตซ์คิง. ถ้าป้อมปราการเสร็จสมบูรณ์…",
						"hindi": "उसने जिस 'पूर्णता' का ज़िक्र किया… और ब्लिट्ज किंग। अगर किला पूर्ण हो गया तो…।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "중간 보스는 사라졌지만, 그들의 길은 더 깊은 미지로 향하고 있었다.",
						"english": "The mid-boss was gone, but their path led deeper into the unknown.",
						"japanese": "中ボスは消え去ったが、彼らの道はさらなる未知の深部へと続いていた。",
						"chinese": "中间首领消失了，但他们的道路正通往更深的未知。",
						"french": "Le boss intermédiaire avait disparu, mais leur chemin menait vers un inconnu plus profond.",
						"spanish": "El jefe intermedio había desaparecido, pero su camino los llevaba a un misterio aún más profundo.",
						"vietnamese": "Trùm giữa đã biến mất, nhưng con đường của họ lại dẫn sâu hơn vào những điều chưa biết.",
						"thai": "บอสกึ่งกลางหายไปแล้ว แต่เส้นทางของพวกเขายังคงมุ่งหน้าสู่ความมืดมิดที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "मध्य-बॉस गायब हो गया था, लेकिन उनका रास्ता और गहरे अज्ञात की ओर ले जा रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음 요새의 심장이, 새로운 위협을 예고하고 있었다.",
						"english": "The heart of the Ice Fortress foreshadowed a new threat.",
						"japanese": "氷の要塞の心臓が、新たな脅威を告げていた。",
						"chinese": "冰霜要塞之心，预示着新的威胁。",
						"french": "Le cœur de la Forteresse de Glace annonçait une nouvelle menace.",
						"spanish": "El corazón de la Fortaleza de Hielo presagiaba una nueva amenaza.",
						"vietnamese": "Trái tim của Pháo đài Băng giá báo hiệu một mối đe dọa mới.",
						"thai": "หัวใจของป้อมปราการน้ำแข็งกำลังบอกล่วงหน้าถึงภัยคุกคามใหม่",
						"hindi": "बर्फ के किले का दिल, एक नए खतरे का पूर्वाभास दे रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "심장부로 향하는 길목에서, 거대한 얼음 덩어리가 길을 막았다.",
						"english": "On the path to the heart, a massive chunk of ice blocked the way.",
						"japanese": "心臓部へ向かう道中、巨大な氷塊が道を塞いだ。",
						"chinese": "通往核心的路上，一块巨大的冰块挡住了去路。",
						"french": "Sur le chemin du cœur, un immense bloc de glace obstruait le passage.",
						"spanish": "En el camino hacia el corazón, un gigantesco trozo de hielo bloqueaba el paso.",
						"vietnamese": "Trên đường đến trung tâm, một khối băng khổng lồ đã chắn lối.",
						"thai": "ระหว่างทางไปสู่ใจกลาง ก้อนน้ำแข็งขนาดมหึมาขวางทางไว้",
						"hindi": "हृदय की ओर जाने वाले रास्ते में, एक विशाल बर्फ का टुकड़ा रास्ता रोक रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히… 이 완성을 방해하려 드는가?",
						"english": "How dare you… attempt to impede this culmination?",
						"japanese": "貴様ら…この完成を邪魔しようというのか？",
						"chinese": "竟敢…阻挠这份完成？",
						"french": "Comment osez-vous… tenter d'entraver cette perfection ?",
						"spanish": "¿Cómo osáis… intentar impedir esta culminación?",
						"vietnamese": "Ngươi… dám cả gan cản trở sự hoàn thành này sao?",
						"thai": "แก… กล้าขัดขวางความสมบูรณ์นี้รึ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस पूर्णता में बाधा डालने की?"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이런… 저게 바로… 요새가 만들어낸 존재야.",
						"english": "Good heavens… that's… a being created by the fortress.",
						"japanese": "まさか…あれが…要塞が生み出した存在なのか。",
						"chinese": "天哪…那就是…要塞制造出来的存在啊。",
						"french": "Mon Dieu… c'est… une créature engendrée par la forteresse.",
						"spanish": "Oh, no… eso es… una criatura creada por la fortaleza.",
						"vietnamese": "Trời ơi… đó chính là… sinh vật do pháo đài tạo ra.",
						"thai": "แย่แล้ว… นั่นคือ… สิ่งที่ป้อมปราการสร้างขึ้นมา",
						"hindi": "हे भगवान… वह… किले द्वारा बनाई गई एक इकाई है।"
					},
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜! 더 깊이 들어가야 해!",
						"english": "Out of the way! We need to go deeper!",
						"japanese": "退け！もっと奥へ行かねば！",
						"chinese": "让开！我们必须深入！",
						"french": "Hors de mon chemin ! Nous devons aller plus loin !",
						"spanish": "¡Apartaos! ¡Tenemos que ir más profundo!",
						"vietnamese": "Tránh ra! Chúng ta phải đi sâu hơn nữa!",
						"thai": "หลบไป! เราต้องเข้าไปลึกกว่านี้!",
						"hindi": "हट जाओ! हमें और गहराई में जाना होगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 거대한 얼음 덩어리 아래 쓰러졌다.",
						"english": "The expedition fell beneath a massive ice chunk.",
						"japanese": "探検隊は巨大な氷塊の下に倒れた。",
						"chinese": "探险队倒在了巨大的冰块之下。",
						"french": "L'expédition s'est effondrée sous un bloc de glace gigantesque.",
						"spanish": "La expedición cayó bajo un gigantesco bloque de hielo.",
						"vietnamese": "Đoàn thám hiểm gục ngã dưới khối băng khổng lồ.",
						"thai": "คณะสำรวจล้มลงใต้ก้อนน้ำแข็งมหึมา",
						"hindi": "अभियान दल विशालकाय बर्फीले टीले के नीचे गिर गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 너희는 그저 재료가 될 뿐이다.",
						"english": "Insignificant fools. You're merely ingredients.",
						"japanese": "哀れな奴らめ。お前たちはただの素材となるだけだ。",
						"chinese": "渺小的东西。你们不过是材料罢了。",
						"french": "Minables créatures. Vous ne serez que des ingrédients.",
						"spanish": "Criaturas insignificantes. No sois más que ingredientes.",
						"vietnamese": "Lũ vô dụng. Các ngươi chỉ là nguyên liệu mà thôi.",
						"thai": "พวกไร้ค่า พวกเจ้าเป็นได้แค่ส่วนผสมเท่านั้น",
						"hindi": "तुच्छ प्राणी। तुम बस सामग्री बनोगे।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼… 아직 끝나지 않았어. 반드시 막아야 해….",
						"english": "No... It's not over. I must stop it...",
						"japanese": "ダメだ…まだ終わってない。絶対に止めなければ…。",
						"chinese": "不…还没有结束。我必须阻止它…。",
						"french": "Non… Ce n'est pas fini. Je dois l'arrêter…",
						"spanish": "No… No ha terminado aún. Debo detenerlo…",
						"vietnamese": "Không… Chưa xong đâu. Phải ngăn chặn nó…",
						"thai": "ไม่นะ… ยังไม่จบ. ต้องหยุดมันให้ได้…",
						"hindi": "नहीं… अभी खत्म नहीं हुआ। मुझे इसे रोकना होगा…।"
					},
					"speaker": "finn",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시 한번. 반드시.",
						"english": "...One more time. I must.",
						"japanese": "…もう一度。必ず。",
						"chinese": "…再一次。一定要。",
						"french": "…Encore une fois. Absolument.",
						"spanish": "…Una vez más. Debo.",
						"vietnamese": "…Thêm một lần nữa. Nhất định.",
						"thai": "…อีกครั้ง. ต้องทำให้ได้.",
						"hindi": "…एक बार फिर। अवश्य।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 요새. 그저 차가운 구조물이 아니었다.",
			"정령술사 핀은 속삭임을 들었다. 마치 심장이 뛰는 소리처럼.",
			"고대의 저주가 살아 숨 쉬는 곳. 그 안에서, 새로운 존재가 깨어나고 있었다.",
			"숨겨진 계획이 움직인다. 요새는, 그저 시작에 불과했다."
		],
		"english": [
			"The Ice Fortress. It was more than just a cold structure.",
			"The spirit user Finn heard whispers. Like the sound of a beating heart.",
			"Where an ancient curse lived and breathed. Within it, a new being was awakening.",
			"A hidden plan was set in motion. The fortress was merely the beginning."
		],
		"japanese": [
			"氷の要塞。それはただの冷たい建造物ではなかった。",
			"精霊術師フィンはささやきを聞いた。まるで心臓の鼓動のように。",
			"古代の呪いが息づく場所。その中で、新たな存在が目覚めようとしていた。",
			"隠された計画が動き出す。要塞は、始まりに過ぎなかった。"
		],
		"chinese": [
			"冰封要塞。它不仅仅是一个冰冷的建筑。",
			"魂术师芬恩听到了低语。仿佛是心跳的声音。",
			"古老诅咒苏醒之地。在那之中，一个新的存在正在觉醒。",
			"隐藏的计划正在启动。要塞，不过是开始。"
		],
		"french": [
			"La Forteresse de Glace. Ce n'était pas qu'une froide structure.",
			"Finn, l'invocateur d'esprit, entendit des murmures. Comme le battement d'un cœur.",
			"Là où une ancienne malédiction vivait et respirait. En son sein, un nouvel être s'éveillait.",
			"Un plan caché se mettait en marche. La forteresse n'était que le début."
		],
		"spanish": [
			"La Fortaleza de Hielo. No era solo una estructura fría.",
			"Finn, el chamán, escuchó susurros. Como el latido de un corazón.",
			"Donde una antigua maldición vivía y respiraba. Dentro de ella, un nuevo ser estaba despertando.",
			"Un plan oculto se ponía en marcha. La fortaleza era solo el principio."
		],
		"vietnamese": [
			"Pháo đài Băng. Nó không chỉ là một cấu trúc lạnh lẽo.",
			"Thuật sư tinh linh Finn nghe thấy những lời thì thầm. Như tiếng tim đập.",
			"Nơi lời nguyền cổ xưa vẫn còn sống. Bên trong nó, một thực thể mới đang thức tỉnh.",
			"Một kế hoạch ẩn giấu đang được thực hiện. Pháo đài, chỉ là khởi đầu."
		],
		"thai": [
			"ป้อมปราการน้ำแข็ง มันไม่ใช่แค่โครงสร้างที่เย็นเยียบ",
			"นักอัญเชิญวิญญาณฟินน์ได้ยินเสียงกระซิบ ราวกับเสียงหัวใจเต้น",
			"ที่ซึ่งคำสาปโบราณมีชีวิตและลมหายใจ ภายในนั้น สิ่งมีชีวิตใหม่กำลังตื่นขึ้น",
			"แผนการที่ซ่อนอยู่กำลังเคลื่อนไหว ป้อมปราการเป็นเพียงจุดเริ่มต้นเท่านั้น"
		],
		"hindi": [
			"बर्फीला किला। यह सिर्फ एक ठंडा ढांचा नहीं था।",
			"आत्मा साधक फिन ने फुसफुसाहट सुनी। जैसे दिल की धड़कन की आवाज़।",
			"जहाँ एक प्राचीन अभिशाप जीवित था। उसके भीतर, एक नई सत्ता जाग रही थी।",
			"एक छिपी हुई योजना गति में थी। किला, बस शुरुआत थी।"
		]
	}
} as const;
