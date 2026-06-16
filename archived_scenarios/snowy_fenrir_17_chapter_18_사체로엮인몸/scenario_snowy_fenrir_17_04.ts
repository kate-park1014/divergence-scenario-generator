export const scenario_snowy_fenrir_17_04 = {
	"scenario_id": "snowy_fenrir_17_04",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 발자국을 따라, 얼어붙은 사체들이 길게 이어졌다.",
						"english": "Colossal footprints led to a long trail of frozen carcasses.",
						"japanese": "巨大な足跡を辿ると、凍りついた死体が長く続いていた。",
						"chinese": "循着巨大的脚印，一长串冰冻的尸体延伸开来。",
						"french": "Des empreintes colossales menaient à une longue traînée de carcasses gelées.",
						"spanish": "Huellas colosales conducían a un largo rastro de cadáveres congelados.",
						"vietnamese": "Dấu chân khổng lồ dẫn đến một chuỗi dài xác chết đông cứng.",
						"thai": "รอยเท้ามหึมานำไปสู่ทางยาวของซากศพที่แข็งตัว",
						"hindi": "विशाल पदचिह्नों से जमी हुई लाशों की एक लंबी कतार का पता चला।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 흔적… 단순한 사냥의 결과가 아니야.",
						"english": "These tracks... not just a hunt's aftermath.",
						"japanese": "この痕跡…単なる狩りの結果じゃない。",
						"chinese": "这些痕迹…不是简单的狩猎结果。",
						"french": "Ces traces... pas de simples conséquences d'une chasse.",
						"spanish": "Estas huellas... no son solo las consecuencias de una cacería.",
						"vietnamese": "Dấu vết này… không chỉ là hậu quả của một cuộc săn.",
						"thai": "ร่องรอยนี้... ไม่ใช่แค่ผลลัพธ์ของการล่า",
						"hindi": "ये निशान... सिर्फ़ शिकार का नतीजा नहीं हैं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 뭐야?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何なの？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो क्या है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "무언가… 뜯어내고, 다시 붙이고 있어.",
						"english": "Something... tearing apart, then reassembling.",
						"japanese": "何かが…引き裂いて、またくっつけている。",
						"chinese": "有什么东西…正在撕扯，然后重新组合。",
						"french": "Quelque chose... déchire, puis réassemble.",
						"spanish": "Algo... desgarra, luego vuelve a unir.",
						"vietnamese": "Có thứ gì đó… đang xé ra, rồi lại ghép lại.",
						"thai": "บางสิ่ง... กำลังฉีกออก แล้วประกอบกลับเข้าไปใหม่",
						"hindi": "कुछ... फाड़ रहा है, फिर से जोड़ रहा है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "늑대의 몸… 자세히 봐.",
						"english": "The wolf's body... look closer.",
						"japanese": "狼の体…よく見て。",
						"chinese": "狼的身体…仔细看。",
						"french": "Le corps du loup... Regarde de plus près.",
						"spanish": "El cuerpo del lobo... mira más de cerca.",
						"vietnamese": "Cơ thể con sói… nhìn kỹ hơn đi.",
						"thai": "ร่างกายของหมาป่า... ดูใกล้ๆ",
						"hindi": "भेड़िये का शरीर... और करीब से देखो।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이건… 살이 아니잖아?",
						"english": "...This isn't... flesh, is it?",
						"japanese": "…これ…肉じゃないの？",
						"chinese": "…这…不是肉吧？",
						"french": "...Ce n'est pas... de la chair, n'est-ce pas ?",
						"spanish": "...Esto no es... carne, ¿verdad?",
						"vietnamese": "…Đây không phải… thịt, phải không?",
						"thai": "...นี่มัน...ไม่ใช่เนื้อไม่ใช่เหรอ?",
						"hindi": "...यह... मांस नहीं है, है ना?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "뼈와 사체의 엉김이야. 살아있는 짐승의 심장박동이 어디에도 없어.",
						"english": "A tangle of bones and corpses. There's no heartbeat of a living beast anywhere.",
						"japanese": "骨と死体が絡み合っている。生きている獣の心臓の鼓動はどこにもない。",
						"chinese": "骨头和尸体的缠结。没有活着的野兽的心跳。",
						"french": "Un enchevêtrement d'os et de cadavres. Nulle part le battement de cœur d'une bête vivante.",
						"spanish": "Un amasijo de huesos y cadáveres. No hay latido de una bestia viva en ningún lugar.",
						"vietnamese": "Một mớ xương và xác chết. Không có nhịp đập của một con thú sống nào cả.",
						"thai": "การพันกันของกระดูกและซากศพ ไม่มีเสียงหัวใจเต้นของสัตว์มีชีวิตที่ไหนเลย",
						"hindi": "हड्डियों और शवों का उलझाव। कहीं भी किसी जीवित जानवर की धड़कन नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼… 우리가 싸운 건… 시체 덩어리였어?",
						"english": "Then... what we fought was... a pile of corpses?",
						"japanese": "じゃあ… 私たちが戦ったのは… 死体の塊だったの？",
						"chinese": "那么… 我们战斗的… 是尸体堆吗？",
						"french": "Alors... ce que nous avons combattu était... un tas de cadavres ?",
						"spanish": "Entonces... ¿lo que luchamos fue... un montón de cadáveres?",
						"vietnamese": "Vậy... thứ chúng ta đã chiến đấu là... một đống xác chết ư?",
						"thai": "งั้น... สิ่งที่เราสู้ด้วยคือ... กองซากศพเหรอ?",
						"hindi": "तो… हमने जिससे लड़ाई की… वह शवों का ढेर था?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "부서진 늑대의 한쪽이 스스로 메워지고 있어.",
						"english": "One side of the broken wolf is mending itself.",
						"japanese": "壊れた狼の片側が、自ら修復されている。",
						"chinese": "受损的狼的一侧正在自行修复。",
						"french": "Un côté du loup brisé se répare de lui-même.",
						"spanish": "Un lado del lobo destrozado se está reparando solo.",
						"vietnamese": "Một bên của con sói bị thương đang tự lành lại.",
						"thai": "ด้านหนึ่งของหมาป่าที่พังกำลังซ่อมแซมตัวเอง",
						"hindi": "टूटे हुए भेड़िये का एक हिस्सा अपने आप ठीक हो रहा है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어떻게? 상처가 벌어졌는데.",
						"english": "How? The wound was open.",
						"japanese": "どうやって？傷口が開いていたのに。",
						"chinese": "怎么回事？伤口明明开着。",
						"french": "Comment ? La blessure était ouverte.",
						"spanish": "¿Cómo? La herida estaba abierta.",
						"vietnamese": "Bằng cách nào? Vết thương vẫn còn hở mà.",
						"thai": "ได้ยังไง? แผลมันเปิดอยู่เลยนะ",
						"hindi": "कैसे? घाव खुला हुआ था।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "주변의 사체들을 빨아들여서. 단순한 짐승의 재생이 아니야.",
						"english": "By absorbing nearby corpses. This isn't simple animal regeneration.",
						"japanese": "周囲の死体を吸い込んでるんだ。単なる獣の再生じゃない。",
						"chinese": "通过吸收周围的尸体。这不是简单的野兽再生。",
						"french": "En absorbant les cadavres environnants. Ce n'est pas une simple régénération animale.",
						"spanish": "Absorbiendo los cadáveres cercanos. Esto no es una simple regeneración animal.",
						"vietnamese": "Bằng cách hút các xác chết xung quanh. Đây không phải là sự tái tạo đơn thuần của loài vật.",
						"thai": "ด้วยการดูดกลืนซากศพที่อยู่รอบๆ นี่ไม่ใช่การฟื้นฟูของสัตว์ธรรมดา",
						"hindi": "आसपास के शवों को सोखकर। यह साधारण जानवर का पुनर्जनन नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "미쳤어… 이건 괴물이야.",
						"english": "Insane... This is a monster.",
						"japanese": "信じられない… これは怪物だ。",
						"chinese": "疯了… 这是个怪物。",
						"french": "C'est fou... C'est un monstre.",
						"spanish": "Es una locura... Esto es un monstruo.",
						"vietnamese": "Điên thật rồi... Đây là quái vật.",
						"thai": "บ้าไปแล้ว... นี่มันสัตว์ประหลาด",
						"hindi": "पागलपन… यह एक राक्षस है।"
					},
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
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "죽음이 죽음을 먹는 형태… 기록에 없는 현상이야.",
						"english": "Death consuming death... a phenomenon not recorded.",
						"japanese": "死が死を食らう形… 記録にない現象だ。",
						"chinese": "死亡吞噬死亡的形式… 记录中没有的现象。",
						"french": "La mort qui dévore la mort... un phénomène inédit.",
						"spanish": "La muerte devorando a la muerte... un fenómeno sin registro.",
						"vietnamese": "Cái chết nuốt chửng cái chết... một hiện tượng không có trong ghi chép.",
						"thai": "ความตายที่กลืนกินความตาย... ปรากฏการณ์ที่ไม่มีบันทึก",
						"hindi": "मृत्यु का मृत्यु को भक्षण करना… यह एक ऐसी घटना है जिसका कोई रिकॉर्ड नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 아는 늑대가 아니야.",
						"english": "It's not the wolf we know.",
						"japanese": "私たちが知っている狼じゃない。",
						"chinese": "这不是我们认识的狼。",
						"french": "Ce n'est pas le loup que nous connaissons.",
						"spanish": "No es el lobo que conocemos.",
						"vietnamese": "Đây không phải là con sói mà chúng ta biết.",
						"thai": "นี่ไม่ใช่หมาป่าที่เรารู้จัก",
						"hindi": "यह वह भेड़िया नहीं है जिसे हम जानते हैं।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 껍데기만 늑대일 뿐.",
						"english": "Right. Only its shell is a wolf.",
						"japanese": "そうだ。ただの狼の皮を被っているだけだ。",
						"chinese": "是的。只是个狼的躯壳罢了。",
						"french": "Exact. Seule son enveloppe est celle d'un loup.",
						"spanish": "Exacto. Solo su apariencia es de lobo.",
						"vietnamese": "Đúng vậy. Chỉ là vỏ bọc của một con sói thôi.",
						"thai": "ใช่. แค่เปลือกนอกเท่านั้นที่เป็นหมาป่า",
						"hindi": "हाँ। यह सिर्फ एक भेड़िये का खोल है।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "대체 정체가 뭐야….",
						"english": "What on earth is it...?",
						"japanese": "一体何者なんだ…。",
						"chinese": "它到底是什么…。",
						"french": "Qu'est-ce que c'est, bon sang...?",
						"spanish": "¿Qué demonios es...?",
						"vietnamese": "Rốt cuộc nó là cái gì...?",
						"thai": "ตกลงมันคืออะไรกันแน่...?",
						"hindi": "आखिर यह क्या है…?"
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
						"korean": "얼어붙은 눈보라 속, 사체들이 엉겨 붙은 거대한 그림자가 나타났다.",
						"english": "Amidst the frozen blizzard, a colossal shadow, entwined with corpses, emerged.",
						"japanese": "凍てつく吹雪の中、死体が絡みつく巨大な影が現れた。",
						"chinese": "在冰冷的暴风雪中，一个由尸体缠绕而成的巨大黑影出现了。",
						"french": "Au milieu du blizzard gelé, une ombre colossale, entrelacée de cadavres, apparut.",
						"spanish": "En medio de la ventisca helada, una sombra colosal, entrelazada con cadáveres, apareció.",
						"vietnamese": "Giữa trận bão tuyết đóng băng, một cái bóng khổng lồ, quấn chặt bởi những thi thể, hiện ra.",
						"thai": "ท่ามกลางพายุหิมะอันเยือกแข็ง เงาขนาดมหึมาที่พันกันด้วยซากศพได้ปรากฏขึ้น",
						"hindi": "जमे हुए बर्फीले तूफान के बीच, शवों से लिपटा एक विशालकाय साया प्रकट हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나의 몸은… 너희의 절규로 메워진다.",
						"english": "My body… is filled with your screams.",
						"japanese": "我が身は…お前たちの絶叫で満たされる。",
						"chinese": "我的身体…被你们的哀嚎所填满。",
						"french": "Mon corps… est rempli de vos hurlements.",
						"spanish": "Mi cuerpo… se llena con vuestros gritos.",
						"vietnamese": "Cơ thể ta… được lấp đầy bởi tiếng kêu gào của các ngươi.",
						"thai": "ร่างของข้า…เต็มเปี่ยมไปด้วยเสียงกรีดร้องของพวกเจ้า",
						"hindi": "मेरा शरीर… तुम्हारी चीखों से भर जाता है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "괴물 같으니! 네놈의 재생은 여기서 끝이다!",
						"english": "Monster! Your regeneration ends here!",
						"japanese": "化け物め！お前のごとき再生はここで終わりだ！",
						"chinese": "怪物！你的再生到此为止！",
						"french": "Monstre ! Ta régénération s'arrête ici !",
						"spanish": "¡Monstruo! ¡Tu regeneración termina aquí!",
						"vietnamese": "Quái vật! Sự tái sinh của ngươi kết thúc tại đây!",
						"thai": "เจ้าสัตว์ประหลาด! การฟื้นฟูของแกสิ้นสุดลงตรงนี้แล้ว!",
						"hindi": "राक्षस! तुम्हारा पुनर्जीवन यहीं समाप्त होता है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "저것 또한… 스스로를 메우는구나. 기록해야 해.",
						"english": "That, too… fills itself. I must record this.",
						"japanese": "あれもまた…自らを満たしている。記録しなければ。",
						"chinese": "那也…在自我填补。必须记录下来。",
						"french": "Cela aussi… se remplit. Je dois l'enregistrer.",
						"spanish": "Eso también… se llena a sí mismo. Debo registrarlo.",
						"vietnamese": "Cái đó cũng… tự lấp đầy. Phải ghi lại.",
						"thai": "สิ่งนั้นก็ด้วย…เติมเต็มตัวเอง ข้าต้องบันทึกไว้",
						"hindi": "वह भी… स्वयं को भर रहा है। मुझे इसे दर्ज करना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 사라지지 않아. 너희의 공포가 곧 나다.",
						"english": "I won't disappear. Your fear is me.",
						"japanese": "私は消え去らない。お前たちの恐怖が即ち私だ。",
						"chinese": "我不会消失。你们的恐惧就是我。",
						"french": "Je ne disparaîtrai pas. Votre peur, c'est moi.",
						"spanish": "No desapareceré. Vuestro miedo soy yo.",
						"vietnamese": "Ta sẽ không biến mất. Nỗi sợ hãi của các ngươi chính là ta.",
						"thai": "ข้าไม่หายไปไหน ความหวาดกลัวของพวกเจ้าคือตัวข้าเอง",
						"hindi": "मैं गायब नहीं होऊँगा। तुम्हारा डर ही मैं हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "기록… 계속되어야 한다.",
						"english": "The record… must continue.",
						"japanese": "記録…続けなければならない。",
						"chinese": "记录…必须继续。",
						"french": "Le registre… doit continuer.",
						"spanish": "El registro… debe continuar.",
						"vietnamese": "Ghi chép… phải tiếp tục.",
						"thai": "การบันทึก…ต้องดำเนินต่อไป",
						"hindi": "रिकॉर्ड… जारी रहना चाहिए।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…우린 돌아올 거야. 반드시!",
						"english": "...We'll be back. Definitely!",
						"japanese": "…必ず戻ってくる！",
						"chinese": "…我们会回来的。一定！",
						"french": "…Nous reviendrons. C'est promis !",
						"spanish": "…¡Volveremos. Sin falta!",
						"vietnamese": "…Chúng ta sẽ trở lại. Nhất định!",
						"thai": "…เราจะกลับมา. แน่นอน!",
						"hindi": "…हम वापस आएंगे। ज़रूर!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "사체 덩어리의 보스가 무너져 내렸다. 하지만…",
						"english": "The boss, a mass of corpses, collapsed. But…",
						"japanese": "死体の塊のボスが崩れ落ちた。しかし…",
						"chinese": "尸体堆积成的首领倒下了。但是…",
						"french": "Le boss, une masse de cadavres, s'est effondré. Mais…",
						"spanish": "El jefe, una masa de cadáveres, se derrumbó. Pero…",
						"vietnamese": "Trùm, một khối thi thể, đã sụp đổ. Nhưng…",
						"thai": "บอสที่เป็นกองซากศพถล่มลงมา แต่ว่า…",
						"hindi": "लाशों का ढेर बना बॉस ढह गया। लेकिन…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "잠시 멈췄을 뿐. 이 굶주림은 사라지지 않아.",
						"english": "It only paused for a moment. This hunger won't disappear.",
						"japanese": "一時停止しただけだ。この飢えは消え去らない。",
						"chinese": "只是暂时停顿而已。这份饥饿不会消失。",
						"french": "Il n'a fait que s'arrêter un instant. Cette faim ne disparaîtra pas.",
						"spanish": "Solo se detuvo un momento. Esta hambruna no desaparecerá.",
						"vietnamese": "Chỉ tạm dừng một lát thôi. Cơn đói này sẽ không biến mất.",
						"thai": "แค่หยุดชั่วคราวเท่านั้น ความหิวโหยนี้จะไม่มีวันหายไป",
						"hindi": "यह बस पल भर के लिए रुका है। यह भूख मिटेगी नहीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 늑대의 진짜 몸은… 아직 멀었단 말이야?",
						"english": "Then the wolf's true body… is still far off?",
						"japanese": "では狼の本当の体は…まだ遠いというのか？",
						"chinese": "那么狼的真身…还很遥远吗？",
						"french": "Alors, le véritable corps du loup… est encore loin ?",
						"spanish": "¿Entonces el verdadero cuerpo del lobo… aún está lejos?",
						"vietnamese": "Vậy thì cơ thể thật của sói… vẫn còn xa lắm sao?",
						"thai": "ถ้าอย่างนั้น ร่างจริงของหมาป่า…ยังอีกไกลนักหรือ?",
						"hindi": "तो भेड़िये का असली शरीर… अभी भी बहुत दूर है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "늑대의 진정한 정체는 여전히 베일에 싸여 있었다. 탐험대는 더 깊은 곳으로 향한다.",
						"english": "The wolf's true identity remained shrouded in mystery. The expedition team delves deeper.",
						"japanese": "狼の真の正体は未だ謎に包まれていた。探検隊はさらに深部へと向かう。",
						"chinese": "狼的真正身份依然笼罩在迷雾之中。探险队深入更深处。",
						"french": "La véritable identité du loup restait voilée de mystère. L'équipe d'expédition s'enfonce plus profondément.",
						"spanish": "La verdadera identidad del lobo seguía envuelta en misterio. El equipo de expedición se adentra más.",
						"vietnamese": "Thân phận thật sự của sói vẫn còn bị che giấu. Đội thám hiểm tiến sâu hơn nữa.",
						"thai": "ตัวตนที่แท้จริงของหมาป่ายังคงถูกปกคลุมด้วยปริศนา ทีมสำรวจมุ่งหน้าสู่ส่วนลึกยิ่งขึ้น",
						"hindi": "भेड़िये की असली पहचान अब भी रहस्य में डूबी हुई थी। अन्वेषण दल और गहराई में जाता है।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 거세진 설원. 늑대가 지나간 자리에는 온기가 가시고,",
			"작은 짐승들의 사체가 길게 흩뿌려져 있었다.",
			"탐험대는 그 흔적을 따라가다, 늑대의 몸이 무엇으로 이루어졌는지",
			"처음으로 똑똑히 보게 된다. 그리고 그 진실은… 기록에 없던 것이었다."
		],
		"english": [
			"A blizzard raged on the snowfield. Where the wolf passed, warmth vanished,",
			"Small animal carcasses lay scattered across the trail.",
			"The expedition followed the tracks, and for the first time clearly saw what the wolf's body was made of.",
			"And that truth... was something unrecorded."
		],
		"japanese": [
			"吹雪が荒れる雪原。狼が過ぎ去った場所には温もりが消え、",
			"小さな獣たちの死骸が長く散らばっていた。",
			"探検隊はその痕跡を辿り、狼の体が何でできているのかを",
			"初めてはっきりと目にする。そしてその真実は…記録にはなかったものだった。"
		],
		"chinese": [
			"暴风雪肆虐的雪原。狼群经过之处，温暖尽失，",
			"小动物的尸体一路散落。",
			"探险队循着痕迹，第一次清晰地看到了狼的身体是由什么构成的，",
			"而这个真相……从未被记载。"
		],
		"french": [
			"Sur l'étendue enneigée balayée par le blizzard. Là où le loup était passé, toute chaleur s'était évanouie,",
			"Les carcasses de petits animaux étaient éparpillées sur le chemin.",
			"L'expédition suivit les traces et vit pour la première fois clairement de quoi était fait le corps du loup.",
			"Et cette vérité... était inédite."
		],
		"spanish": [
			"En el campo nevado azotado por la ventisca. Donde el lobo había pasado, el calor se había disipado,",
			"Los cadáveres de pequeños animales yacían esparcidos a lo largo del camino.",
			"La expedición siguió las huellas y por primera vez vio claramente de qué estaba hecho el cuerpo del lobo.",
			"Y esa verdad... no estaba registrada."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết bão tuyết dữ dội. Nơi sói đi qua, hơi ấm tan biến,",
			"Xác của những con thú nhỏ nằm rải rác khắp lối đi.",
			"Đoàn thám hiểm theo dấu vết, và lần đầu tiên nhìn rõ cơ thể của con sói được tạo thành từ gì.",
			"Và sự thật đó… chưa từng được ghi lại."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำบนลานหิมะ ที่ที่หมาป่าผ่านไป ความอบอุ่นก็จางหายไป,",
			"ซากสัตว์เล็กๆ กระจัดกระจายไปทั่วทาง",
			"คณะสำรวจตามรอยนั้นไป และเป็นครั้งแรกที่ได้เห็นอย่างชัดเจนว่าร่างกายของหมาป่าประกอบขึ้นจากอะไร",
			"และความจริงนั้น... ไม่เคยถูกบันทึกไว้"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान से ढके बर्फीले मैदान में। जहाँ से भेड़िया गुजरा था, वहाँ की गर्माहट खत्म हो गई थी,",
			"छोटे जानवरों के शव रास्ते भर बिखरे पड़े थे।",
			"अभियान दल उन निशानों का पीछा करता हुआ, पहली बार साफ़-साफ़ देखता है कि भेड़िये का शरीर किस चीज़ से बना था,",
			"और वह सच... ऐसा था जो रिकॉर्ड में नहीं था।"
		]
	}
} as const;
