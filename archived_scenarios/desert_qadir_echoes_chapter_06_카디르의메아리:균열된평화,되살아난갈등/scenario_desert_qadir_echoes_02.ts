export const scenario_desert_qadir_echoes_02 = {
	"scenario_id": "desert_qadir_echoes_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ashur": {
			"id": "mon_a07b6a77-ad2e-4adb-b4ed-56e7e10cd5c7",
			"name": {
				"korean": "아슈르",
				"english": "Ashur",
				"japanese": "アシュール",
				"chinese": "阿舒尔",
				"french": "Ashur",
				"spanish": "Ashur",
				"vietnamese": "Ashur",
				"thai": "อาชูร์",
				"hindi": "अशूर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eb36f4ec-7b0f-47d0-7073-647e4b01e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e0b84a6e-36fc-4ba2-5c1d-54fbb18adb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "사방에서 칼날이 부딪히는 소리, 피 냄새가 진동했다.",
						"english": "The clash of blades, the stench of blood filled the air.",
						"japanese": "四方八方から刃がぶつかる音、血の匂いが充満していた。",
						"chinese": "四处刀光剑影，血腥味弥漫。",
						"french": "Le cliquetis des lames de toutes parts, l'odeur du sang imprégnait l'air.",
						"spanish": "El choque de espadas por todas partes, el hedor a sangre impregnaba el aire.",
						"vietnamese": "Tiếng gươm đao va chạm khắp nơi, mùi máu tanh nồng nặc.",
						"thai": "เสียงคมดาบปะทะกันทั่วทิศ กลิ่นคาวเลือดคละคลุ้ง",
						"hindi": "चारों ओर तलवारों के टकराने की आवाज़, खून की गंध फैली हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게… 사막의 새로운 질서인가?",
						"english": "Is this… the desert's new order?",
						"japanese": "これが… 砂漠の新しい秩序なのか？",
						"chinese": "这就是… 沙漠的新秩序吗？",
						"french": "Est-ce… le nouvel ordre du désert ?",
						"spanish": "¿Es esto… el nuevo orden del desierto?",
						"vietnamese": "Đây có phải… trật tự mới của sa mạc?",
						"thai": "นี่คือ… ระเบียบใหม่ของทะเลทรายหรือ?",
						"hindi": "क्या यह… रेगिस्तान का नया आदेश है?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ashur",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가 감히 내 전장에 발을 들이는가.",
						"english": "Who dares tread upon my battlefield?",
						"japanese": "誰が敢えて我が戦場に足を踏み入れるか。",
						"chinese": "谁敢踏足我的战场？",
						"french": "Qui ose fouler mon champ de bataille ?",
						"spanish": "¿Quién osa pisar mi campo de batalla?",
						"vietnamese": "Kẻ nào dám đặt chân lên chiến trường của ta?",
						"thai": "ใครบังอาจก้าวเท้าเข้ามาในสนามรบของข้า?",
						"hindi": "कौन मेरे युद्धक्षेत्र में कदम रखने की हिम्मत करता है?"
					},
					"speaker": "ashur"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "당신이 아슈르인가? 이 광기를 멈춰야 해!",
						"english": "You are Ashur? This madness must end!",
						"japanese": "あなたがアシュルか？この狂気を止めなければならない！",
						"chinese": "你是阿什尔吗？这场疯狂必须停止！",
						"french": "Vous êtes Ashur ? Cette folie doit cesser !",
						"spanish": "¿Eres Ashur? ¡Esta locura debe detenerse!",
						"vietnamese": "Ngươi là Ashur? Sự điên loạn này phải dừng lại!",
						"thai": "เจ้าคืออาชูร์หรือ? ความบ้าคลั่งนี้ต้องหยุด!",
						"hindi": "तुम आशूर हो? इस पागलपन को रोकना होगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈춰? 이 피만이 사막을 통일할 수 있다!",
						"english": "Stop? Only this blood can unite the desert!",
						"japanese": "止まれだと？この血だけが砂漠を統一できるのだ！",
						"chinese": "停止？只有这鲜血才能统一沙漠！",
						"french": "Cesser ? Seul ce sang peut unifier le désert !",
						"spanish": "¿Detener? ¡Solo esta sangre puede unificar el desierto!",
						"vietnamese": "Dừng lại? Chỉ có máu này mới có thể thống nhất sa mạc!",
						"thai": "หยุด? มีเพียงเลือดนี้เท่านั้นที่จะรวมทะเลทรายได้!",
						"hindi": "रुकूँ? केवल यह रक्त ही रेगिस्तान को एकजुट कर सकता है!"
					},
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 내 앞을 막는 자는… 모두 죽음뿐!",
						"english": "Those who dare stand before me… only death awaits!",
						"japanese": "敢えて私の行く手を阻む者は… 皆、死あるのみ！",
						"chinese": "胆敢阻拦我的人… 唯有死路一条！",
						"french": "Ceux qui osent se dresser devant moi… n'auront que la mort !",
						"spanish": "¡Aquellos que osen interponerse en mi camino… solo la muerte les espera!",
						"vietnamese": "Kẻ nào dám cản đường ta… chỉ có cái chết!",
						"thai": "ใครที่บังอาจขวางทางข้า… มีแต่ความตายเท่านั้น!",
						"hindi": "जो कोई भी मेरा रास्ता रोकने की हिम्मत करेगा… उसे केवल मौत मिलेगी!"
					},
					"emotion": "angry",
					"speaker": "ashur",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ashur",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ashur",
					"emotion": "angry",
					"content": {
						"korean": "더 많은 피가 필요하다! 이 사막을… 완벽하게 정화하려면!",
						"english": "More blood is needed! To… perfectly purify this desert!",
						"japanese": "もっと多くの血が必要だ！この砂漠を…完全に浄化するためには！",
						"chinese": "需要更多的鲜血！来……彻底净化这片沙漠！",
						"french": "Plus de sang est nécessaire ! Pour… purifier parfaitement ce désert !",
						"spanish": "¡Se necesita más sangre! Para… purificar perfectamente este desierto!",
						"vietnamese": "Cần thêm máu! Để… thanh tẩy hoàn toàn sa mạc này!",
						"thai": "ต้องการเลือดอีก! เพื่อ...ชำระทะเลทรายนี้ให้บริสุทธิ์อย่างสมบูรณ์!",
						"hindi": "और खून चाहिए! इस रेगिस्तान को… पूरी तरह शुद्ध करने के लिए!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정화? 당신은 지금 살육을 즐기고 있어.",
						"english": "Purify? You're enjoying the slaughter.",
						"japanese": "浄化？あなたは今、殺戮を楽しんでいるわ。",
						"chinese": "净化？你现在正在享受杀戮。",
						"french": "Purifier ? Tu apprécies le massacre.",
						"spanish": "¿Purificar? Estás disfrutando de la masacre.",
						"vietnamese": "Thanh tẩy? Ngươi đang tận hưởng cuộc tàn sát.",
						"thai": "ชำระเหรอ? คุณกำลังสนุกกับการสังหารหมู่ต่างหาก",
						"hindi": "शुद्ध करना? तुम तो नरसंहार का आनंद ले रहे हो।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아니! 이건… 새로운 힘! 나를 채우는 힘이다!",
						"english": "No! This is… a new power! A power that fills me!",
						"japanese": "違う！これは…新たな力！私を満たす力だ！",
						"chinese": "不！这是……新的力量！充满我的力量！",
						"french": "Non ! C'est… un nouveau pouvoir ! Un pouvoir qui me remplit !",
						"spanish": "¡No! ¡Esto es… un nuevo poder! ¡Un poder que me llena!",
						"vietnamese": "Không! Đây là… một sức mạnh mới! Sức mạnh lấp đầy ta!",
						"thai": "ไม่! นี่คือ...พลังใหม่! พลังที่เติมเต็มฉัน!",
						"hindi": "नहीं! यह… एक नई शक्ति है! जो मुझे भर रही है!"
					},
					"emotion": "angry",
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 힘은 당신을 파괴할 거야.",
						"english": "That power will destroy you.",
						"japanese": "その力はあなたを破滅させるわ。",
						"chinese": "那种力量会摧毁你。",
						"french": "Ce pouvoir te détruira.",
						"spanish": "Ese poder te destruirá.",
						"vietnamese": "Sức mạnh đó sẽ hủy diệt ngươi.",
						"thai": "พลังนั้นจะทำลายคุณ",
						"hindi": "वह शक्ति तुम्हें नष्ट कर देगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "ashur",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "하하하! 느껴지는가? 이 넘치는 힘이! 이 문양이! 내게 속삭인다!",
						"english": "Hahaha! Do you feel it? This overflowing power! This emblem! It whispers to me!",
						"japanese": "ハハハ！感じるか？この溢れる力が！この紋様が！私に囁く！",
						"chinese": "哈哈哈！感受到了吗？这股澎湃的力量！这纹样！它在对我低语！",
						"french": "Hahaha ! Le sens-tu ? Ce pouvoir débordant ! Cet emblème ! Il me chuchote !",
						"spanish": "¡Jajaja! ¿Lo sientes? ¡Este poder desbordante! ¡Este emblema! ¡Me susurra!",
						"vietnamese": "Hahaha! Ngươi có cảm nhận được không? Sức mạnh tràn trề này! Biểu tượng này! Nó đang thì thầm với ta!",
						"thai": "ฮ่าฮ่าฮ่า! รู้สึกไหม? พลังที่เอ่อล้นนี้! ลวดลายนี้! มันกระซิบกับฉัน!",
						"hindi": "हाहाहा! महसूस करते हो? यह उमड़ती हुई शक्ति! यह प्रतीक! यह मुझसे फुसफुसाता है!"
					},
					"emotion": "happy",
					"speaker": "ashur",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 문양… 카디르와는 달라. 저건 뭐지?",
						"english": "That emblem… it's different from Kadir's. What is that?",
						"japanese": "あの紋様…カディルとは違う。あれは何だ？",
						"chinese": "那个纹样……和卡迪尔的不同。那是什么？",
						"french": "Cet emblème… c'est différent de celui de Kadir. Qu'est-ce que c'est ?",
						"spanish": "Ese emblema… es diferente al de Kadir. ¿Qué es eso?",
						"vietnamese": "Biểu tượng đó… khác với của Kadir. Đó là gì?",
						"thai": "ลวดลายนั่น...ไม่เหมือนของคาดีร์. นั่นมันอะไร?",
						"hindi": "वह प्रतीक… कादिर से अलग है। वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오래된 것… 잊혀진 힘… 이제 내가 사막의 진정한 주인이 될 것이다!",
						"english": "An ancient thing… a forgotten power… Now I shall be the true master of the desert!",
						"japanese": "古きもの…忘れ去られた力…今や私が砂漠の真の主となるだろう！",
						"chinese": "古老之物……被遗忘的力量……现在我将成为沙漠真正的 Hahah！",
						"french": "Une chose ancienne… un pouvoir oublié… Maintenant, je serai le véritable maître du désert !",
						"spanish": "¡Una cosa antigua… un poder olvidado… Ahora seré el verdadero maestro del desierto!",
						"vietnamese": "Một thứ cổ xưa… một sức mạnh bị lãng quên… Bây giờ ta sẽ trở thành chủ nhân thực sự của sa mạc!",
						"thai": "สิ่งที่เก่าแก่...พลังที่ถูกลืม...ตอนนี้ฉันจะเป็นนายที่แท้จริงของทะเลทราย!",
						"hindi": "एक प्राचीन चीज़… एक भूली हुई शक्ति… अब मैं रेगिस्तान का सच्चा मालिक बनूंगा!"
					},
					"emotion": "angry",
					"speaker": "ashur"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 조종당하고 있어, 아슈르!",
						"english": "You are being controlled, Ashur!",
						"japanese": "あなたは操られているわ、アシュール！",
						"chinese": "你被操控了，阿舒尔！",
						"french": "Tu es manipulé, Ashur !",
						"spanish": "¡Estás siendo controlado, Ashur!",
						"vietnamese": "Ngươi đang bị thao túng, Ashur!",
						"thai": "คุณกำลังถูกควบคุมอยู่, อาชูร์!",
						"hindi": "तुम नियंत्रित हो रहे हो, आशुर!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ashur",
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 전쟁은 끝나지 않는다! 모든 것이 불타 없어질 때까지!",
						"english": "This war will not end! Until everything burns to ashes!",
						"japanese": "この戦争は終わらない！全てが燃え尽きるまで！",
						"chinese": "这场战争不会结束！直到一切都化为灰烬！",
						"french": "Cette guerre ne se terminera pas ! Jusqu'à ce que tout soit réduit en cendres !",
						"spanish": "¡Esta guerra no terminará! ¡Hasta que todo arda hasta las cenizas!",
						"vietnamese": "Cuộc chiến này sẽ không kết thúc! Cho đến khi mọi thứ bị thiêu rụi thành tro bụi!",
						"thai": "สงครามนี้จะไม่จบลง! จนกว่าทุกสิ่งจะมอดไหม้เป็นเถ้าถ่าน!",
						"hindi": "यह युद्ध खत्म नहीं होगा! जब तक सब कुछ जलकर राख न हो जाए!"
					},
					"speaker": "ashur"
				},
				{
					"content": {
						"korean": "더 이상 희생은 안 돼!",
						"english": "No more sacrifices!",
						"japanese": "これ以上の犠牲は許さない！",
						"chinese": "不能再有牺牲了！",
						"french": "Plus de sacrifices !",
						"spanish": "¡No más sacrificios!",
						"vietnamese": "Không thể hy sinh thêm nữa!",
						"thai": "ไม่มีการเสียสละอีกแล้ว!",
						"hindi": "और बलिदान नहीं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…모두 사라져야 해… 그래야… 새로운…",
						"english": "...All must disappear... Only then... new...",
						"japanese": "…すべて消え去るべきだ…そうすれば…新たな…",
						"chinese": "……一切都必须消失……只有这样……才能迎来新的……",
						"french": "...Tout doit disparaître... Alors seulement... un nouveau...",
						"spanish": "...Todo debe desaparecer... Solo así... un nuevo...",
						"vietnamese": "...Tất cả phải biến mất... Chỉ khi đó... một cái mới...",
						"thai": "...ทั้งหมดต้องหายไป... เช่นนั้นแล้ว... สิ่งใหม่...",
						"hindi": "...सबको मिट जाना चाहिए... तभी... नया..."
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고? 지금 무슨 소리 하는 거야?",
						"english": "What? What are you talking about?",
						"japanese": "何だって？今、何を言ってるんだ？",
						"chinese": "你说什么？你在说什么胡话？",
						"french": "Quoi ? Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué? ¿De qué estás hablando?",
						"vietnamese": "Cái gì? Anh đang nói cái gì vậy?",
						"thai": "อะไรนะ? คุณกำลังพูดเรื่องอะไร?",
						"hindi": "क्या? तुम अभी क्या कह रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아… 아무것도 아니야! 피곤해서 헛소리가…",
						"english": "Ah... It's nothing! Just tired ramblings...",
						"japanese": "あ…何でもない！疲れてて、うわごとを…",
						"chinese": "啊……没什么！只是累了，在胡言乱语……",
						"french": "Ah... Ce n'est rien ! Juste des divagations dues à la fatigue...",
						"spanish": "Ah... ¡No es nada! Solo desvaríos por el cansancio...",
						"vietnamese": "À... Không có gì đâu! Chỉ là mệt quá nên nói lảm nhảm...",
						"thai": "อ่า... ไม่มีอะไรหรอก! แค่เพ้อเจ้อเพราะความเหนื่อย...",
						"hindi": "आह... कुछ नहीं! बस थकान से बड़बड़ा रहा था..."
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "찰나의 순간, 그의 눈빛에서 낯선 그림자를 보았다.",
						"english": "For a fleeting moment, I saw a strange shadow in his eyes.",
						"japanese": "刹那の瞬間、彼の目つきに見慣れない影を見た。",
						"chinese": "在那一瞬间，我从他的眼中看到了一丝陌生的阴影。",
						"french": "Pour un instant fugace, je vis une ombre étrange dans ses yeux.",
						"spanish": "En un instante fugaz, vi una sombra extraña en sus ojos.",
						"vietnamese": "Trong khoảnh khắc chớp nhoáng, tôi thấy một bóng đen lạ lẫm trong mắt anh ta.",
						"thai": "ชั่วพริบตา ฉันเห็นเงามืดประหลาดในดวงตาของเขา",
						"hindi": "एक पल के लिए, मैंने उसकी आँखों में एक अजीब सी परछाई देखी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "피로 물든 사막의 심장부, 광기의 근원이 기다리고 있었다.",
						"english": "In the blood-soaked heart of the desert, the source of madness awaited.",
						"japanese": "血に染まった砂漠の心臓部、狂気の根源が待っていた。",
						"chinese": "在血染的沙漠深处，疯狂的根源正在等候。",
						"french": "Au cœur du désert teint de sang, la source de la folie attendait.",
						"spanish": "En el corazón del desierto teñido de sangre, la fuente de la locura esperaba.",
						"vietnamese": "Trong trái tim sa mạc nhuốm máu, nguồn gốc của sự điên loạn đang chờ đợi.",
						"thai": "ในใจกลางทะเลทรายที่อาบเลือด ต้นกำเนิดของความบ้าคลั่งรออยู่",
						"hindi": "खून से सने रेगिस्तान के दिल में, पागलपन का स्रोत इंतज़ार कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ashur"
				},
				{
					"type": "speech",
					"speaker": "ashur",
					"emotion": "angry",
					"content": {
						"korean": "왔구나… 감히… 우리 신성한 전쟁을 방해하려 하다니!",
						"english": "You've come... How dare you... try to disrupt our sacred war!",
						"japanese": "来たか…よくも…我らの神聖な戦争を邪魔しようとは！",
						"chinese": "你来了……竟敢……试图阻挠我们神圣的战争！",
						"french": "Tu es venu... Comment oses-tu... tenter de perturber notre guerre sacrée !",
						"spanish": "Has venido... ¿Cómo te atreves... a intentar perturbar nuestra guerra sagrada?",
						"vietnamese": "Ngươi đã đến... Sao ngươi dám... cố gắng phá hoại cuộc chiến thần thánh của chúng ta!",
						"thai": "มาแล้วสินะ... กล้าดียังไง... มาขัดขวางสงครามศักดิ์สิทธิ์ของเรา!",
						"hindi": "तुम आ गए... तुम्हारी हिम्मत कैसे हुई... हमारे पवित्र युद्ध में बाधा डालने की!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 이 사막은 새로운 지배자를 원한다.",
						"english": "Fools... This desert desires a new ruler.",
						"japanese": "愚か者どもめ…この砂漠は新たな支配者を求めている。",
						"chinese": "愚蠢的家伙们……这片沙漠渴望着新的统治者。",
						"french": "Fous... Ce désert désire un nouveau souverain.",
						"spanish": "Necios... Este desierto desea un nuevo gobernante.",
						"vietnamese": "Những kẻ ngu ngốc... Sa mạc này khao khát một kẻ thống trị mới.",
						"thai": "พวกคนโง่... ทะเลทรายนี้ต้องการผู้ปกครองคนใหม่",
						"hindi": "मूर्खों... यह रेगिस्तान एक नया शासक चाहता है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 그림자가… 아슈르를 조종하고 있었어!",
						"english": "That shadow... was controlling Ashur!",
						"japanese": "あの影が…アシュルを操っていたんだ！",
						"chinese": "那个影子……一直在操纵着阿什尔！",
						"french": "Cette ombre... contrôlait Ashur !",
						"spanish": "¡Esa sombra... estaba controlando a Ashur!",
						"vietnamese": "Cái bóng đó... đang điều khiển Ashur!",
						"thai": "เงาตัวนั้น... กำลังควบคุมอาชูร์อยู่!",
						"hindi": "वह परछाई... अशूर को नियंत्रित कर रही थी!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니! 이 분이… 사막의 진정한 구원자다!",
						"english": "No! This person... is the desert's true savior!",
						"japanese": "違う！この方が…砂漠の真の救世主だ！",
						"chinese": "不！这位才是……沙漠真正的救世主！",
						"french": "Non ! Cette personne... est le véritable sauveur du désert !",
						"spanish": "¡No! ¡Esta persona... es el verdadero salvador del desierto!",
						"vietnamese": "Không! Người này... chính là vị cứu tinh thật sự của sa mạc!",
						"thai": "ไม่! ท่านผู้นี้... คือผู้กอบกู้ที่แท้จริงของทะเลทราย!",
						"hindi": "नहीं! यह व्यक्ति... रेगिस्तान का सच्चा मुक्तिदाता है!"
					},
					"speaker": "ashur"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "모두… 내 광기의 일부가 될지어다.",
						"english": "All of you... shall become a part of my madness.",
						"japanese": "お前たち…皆、私の狂気の一部となるのだ。",
						"chinese": "所有人都将……成为我疯狂的一部分。",
						"french": "Vous tous... ferez partie de ma folie.",
						"spanish": "Todos vosotros... seréis parte de mi locura.",
						"vietnamese": "Tất cả các ngươi... hãy trở thành một phần của sự điên loạn của ta.",
						"thai": "พวกเจ้าทุกคน... จงกลายเป็นส่วนหนึ่งของความบ้าคลั่งของข้าซะ",
						"hindi": "तुम सब... मेरे पागलपन का हिस्सा बन जाओगे।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항… 너희의 광기도… 결국 나의 일부가 될 것이다.",
						"english": "Futile resistance… Your madness, too… will eventually become a part of me.",
						"japanese": "取るに足らない抵抗…お前たちの狂気も…結局は私のものとなるだろう。",
						"chinese": "微不足道的抵抗…你们的疯狂…最终也将成为我的一部分。",
						"french": "Résistance futile… Votre folie aussi… finira par faire partie de moi.",
						"spanish": "Resistencia insignificante… Vuestra locura también… acabará siendo parte de mí.",
						"vietnamese": "Sự kháng cự hèn mọn… Sự điên cuồng của các ngươi… cuối cùng cũng sẽ trở thành một phần của ta.",
						"thai": "การต่อต้านที่ไร้ค่า… ความบ้าคลั่งของพวกเจ้า… ในที่สุดก็จะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "तुच्छ प्रतिरोध… तुम्हारा पागलपन भी… अंततः मेरा ही हिस्सा बन जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not… over yet…!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas… encore fini… !",
						"spanish": "¡Aún… no ha terminado…!",
						"vietnamese": "Vẫn chưa… kết thúc đâu…!",
						"thai": "ยัง… ไม่จบหรอก…!",
						"hindi": "अभी… खत्म नहीं हुआ है…!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크크… 겨우 이 정도인가… 진정한 어둠은… 이제 시작될 뿐…",
						"english": "Heh heh heh… Is this all you've got? The true darkness… is only just beginning…",
						"japanese": "ククク…この程度か…真の闇は…今、始まったばかりだ…",
						"chinese": "呵呵呵…就这点本事吗…真正的黑暗…才刚刚开始…",
						"french": "Hé hé hé… C'est tout ce que vous avez ? Les véritables ténèbres… ne font que commencer…",
						"spanish": "Je je je… ¿Esto es todo? La verdadera oscuridad… apenas comienza…",
						"vietnamese": "Khà khà khà… Chỉ có thế này thôi sao… Bóng tối đích thực… chỉ vừa mới bắt đầu…",
						"thai": "คิก คิก คิก… แค่นี้เองรึ… ความมืดที่แท้จริง… เพิ่งจะเริ่มต้นเท่านั้น…",
						"hindi": "हँ हँ हँ… बस इतना ही? असली अँधेरा… तो बस अभी शुरू हुआ है…"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "아슈르… 정신 차려!",
						"english": "Ashur… Snap out of it!",
						"japanese": "アシュル…しっかりして！",
						"chinese": "阿什尔…清醒过来！",
						"french": "Ashur… Reprends tes esprits !",
						"spanish": "Ashur… ¡Reacciona!",
						"vietnamese": "Ashur… Tỉnh lại đi!",
						"thai": "อาชูร์… ได้สติหน่อย!",
						"hindi": "अशुर… होश में आओ!"
					},
					"type": "speech"
				},
				{
					"speaker": "ashur",
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "쓰러진 아슈르의 눈빛은 한순간 제정신으로 돌아온 듯했다.",
						"english": "For a moment, the fallen Ashur's eyes seemed to regain their sanity.",
						"japanese": "倒れたアシュルの瞳は、一瞬正気を取り戻したかのようだった。",
						"chinese": "倒下的阿什尔，眼神似乎在一瞬间恢复了清明。",
						"french": "Un instant, le regard d'Ashur, tombé à terre, sembla retrouver sa lucidité.",
						"spanish": "Por un instante, los ojos del caído Ashur parecieron recuperar la cordura.",
						"vietnamese": "Ánh mắt của Ashur ngã xuống, dường như đã tỉnh táo trở lại trong chốc lát.",
						"thai": "แววตาของอาชูร์ที่ล้มลง ดูเหมือนจะกลับมามีสติได้ชั่วขณะ",
						"hindi": "गिरे हुए अशुर की आँखों में एक पल के लिए होश लौट आया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 사막에 드리운 어둠은 사라지지 않았다. 오히려… 더 깊어진 느낌이었다.",
						"english": "However, the darkness that had fallen over the desert did not vanish. Rather… it felt even deeper.",
						"japanese": "しかし、砂漠に覆いかぶさる闇は消えなかった。むしろ…さらに深まったように感じられた。",
						"chinese": "然而，笼罩沙漠的黑暗并未消散。反而…感觉更深沉了。",
						"french": "Cependant, l'obscurité qui s'était abattue sur le désert ne disparut pas. Au contraire… elle semblait s'être approfondie.",
						"spanish": "Sin embargo, la oscuridad que cubría el desierto no desapareció. Más bien… se sentía aún más profunda.",
						"vietnamese": "Tuy nhiên, bóng tối bao trùm sa mạc không biến mất. Ngược lại… nó dường như càng trở nên sâu thẳm hơn.",
						"thai": "ทว่าความมืดที่ปกคลุมทะเลทรายกลับไม่จางหายไป หากแต่… กลับรู้สึกว่ามันยิ่งลึกซึ้งขึ้น",
						"hindi": "हालांकि, रेगिस्तान पर छाया अंधेरा गायब नहीं हुआ। बल्कि… यह और भी गहरा महसूस हुआ।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"카디르의 균형이 깨진 사막은 지옥으로 변했다.",
			"전사 부족들은 피의 전쟁을 시작했고, 그 중심에 아슈르가 있었다.",
			"그러나 그의 눈빛은 단순한 광기가 아니었다.",
			"무언가… 사막을 좀먹는 더 깊은 어둠이 느껴졌다."
		],
		"english": [
			"Kadir's desert, its balance broken, became a hell.",
			"Warrior tribes began a blood war, with Ashur at its heart.",
			"But his gaze was not mere madness.",
			"A deeper darkness… gnawing at the desert, was felt."
		],
		"japanese": [
			"カディルの均衡が崩れた砂漠は地獄と化した。",
			"戦士部族たちは血の戦争を始め、その中心にはアシュルがいた。",
			"しかし、彼の眼差しは単なる狂気ではなかった。",
			"何か… 砂漠を蝕む、もっと深い闇が感じられた。"
		],
		"chinese": [
			"卡迪尔平衡被打破的沙漠变成了地狱。",
			"战士部落开始了血战，阿什尔身处其中。",
			"然而，他的眼神并非单纯的疯狂。",
			"某种… 侵蚀沙漠的更深层的黑暗被感知到了。"
		],
		"french": [
			"Le désert de Kadir, son équilibre brisé, s'est transformé en enfer.",
			"Les tribus guerrières ont déclenché une guerre sanglante, et Ashur était au centre.",
			"Mais son regard n'était pas simple folie.",
			"Quelque chose… une obscurité plus profonde rongeant le désert, se faisait sentir."
		],
		"spanish": [
			"El desierto de Kadir, su equilibrio roto, se convirtió en un infierno.",
			"Las tribus guerreras iniciaron una guerra de sangre, y Ashur estaba en su centro.",
			"Pero su mirada no era simple locura.",
			"Algo… una oscuridad más profunda carcomiendo el desierto, se sentía."
		],
		"vietnamese": [
			"Sa mạc của Kadir, mất đi sự cân bằng, đã biến thành địa ngục.",
			"Các bộ tộc chiến binh đã phát động một cuộc chiến đẫm máu, và Ashur là trung tâm của nó.",
			"Nhưng ánh mắt của hắn không phải là sự điên loạn đơn thuần.",
			"Một điều gì đó… một bóng tối sâu thẳm hơn đang gặm nhấm sa mạc, đã được cảm nhận."
		],
		"thai": [
			"ทะเลทรายของคาดีร์ที่สมดุลพังทลายลงได้กลายเป็นขุมนรก",
			"เผ่าพันธุ์นักรบเริ่มสงครามเลือด และอาชูร์ก็อยู่ใจกลางของมัน",
			"แต่แววตาของเขาไม่ใช่เพียงความบ้าคลั่งธรรมดา",
			"บางสิ่ง… ความมืดมิดที่ลึกซึ้งกว่า กำลังกัดกินทะเลทราย"
		],
		"hindi": [
			"कादिर का रेगिस्तान, संतुलन बिगड़ने पर नरक बन गया।",
			"योद्धा जनजातियों ने खूनी युद्ध शुरू किया, जिसके केंद्र में आशूर था।",
			"लेकिन उसकी आँखों में सिर्फ़ पागलपन नहीं था।",
			"कुछ… एक गहरा अंधकार रेगिस्तान को खा रहा था, महसूस हुआ।"
		]
	}
} as const;
