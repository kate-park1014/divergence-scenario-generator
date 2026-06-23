export const scenario_desert_tempest_1_04 = {
	"scenario_id": "desert_tempest_1_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"메마른 사막, 끝없이 펼쳐진 모래 언덕.",
			"버려진 검의 사원, 그 깊숙한 곳에서 고대의 지식이 잠들었다.",
			"늙은 수호자 케메트, 그는 폭풍의 진실을 알고 있다.",
			"템페스트. 단순한 괴물이 아니었다. 복수심과 분노가 길을 열었다."
		],
		"english": [
			"Arid desert, endless sand dunes.",
			"In the depths of the abandoned Sword Temple, ancient knowledge slumbers.",
			"Old guardian Kemet, he knows the truth of the storm.",
			"Tempest. Not merely a monster. Vengeance and fury paved the way."
		],
		"japanese": [
			"乾燥した砂漠、果てしなく広がる砂丘。",
			"廃墟となった剣の寺院の奥深く、古代の知識が眠っていた。",
			"老いた守護者ケメット、彼は嵐の真実を知っている。",
			"テンペスト。単なる怪物ではなかった。復讐心と怒りが道を開いた。"
		],
		"chinese": [
			"贫瘠的沙漠，一望无际的沙丘。",
			"在废弃的剑之神殿深处，古老的知识沉睡着。",
			"老守护者凯米特，他知道风暴的真相。",
			"暴风。不只是一个怪物。复仇与愤怒铺平了道路。"
		],
		"french": [
			"Désert aride, dunes de sable infinies.",
			"Au plus profond du Temple de l'Épée abandonné, un savoir ancien sommeille.",
			"Le vieux gardien Kemet, il connaît la vérité de la tempête.",
			"Tempête. Pas seulement un monstre. La vengeance et la fureur ont ouvert la voie."
		],
		"spanish": [
			"Desierto árido, dunas de arena interminables.",
			"En lo profundo del abandonado Templo de la Espada, el conocimiento antiguo yace dormido.",
			"El viejo guardián Kemet, él conoce la verdad de la tormenta.",
			"Tempestad. No era solo un monstruo. La venganza y la furia abrieron el camino."
		],
		"vietnamese": [
			"Sa mạc khô cằn, đụn cát trải dài bất tận.",
			"Sâu thẳm trong Đền Kiếm bỏ hoang, tri thức cổ xưa đang ngủ yên.",
			"Lão thủ vệ Kemet, ông biết sự thật về cơn bão.",
			"Tempest. Không chỉ là một con quái vật. Sự báo thù và cuồng nộ đã mở đường."
		],
		"thai": [
			"ทะเลทรายแห้งแล้ง, เนินทรายที่ทอดยาวไม่สิ้นสุด",
			"ในส่วนลึกของวิหารดาบร้าง ความรู้โบราณหลับใหลอยู่",
			"เคเมต ผู้พิทักษ์ชรา เขารู้ความจริงของพายุ",
			"เทมเพสต์ ไม่ใช่แค่สัตว์ประหลาด ความพยาบาทและความโกรธเกรี้ยวได้เบิกทาง"
		],
		"hindi": [
			"सूखा रेगिस्तान, अंतहीन फैले रेत के टीले।",
			"परित्यक्त तलवार मंदिर के गहरे में, प्राचीन ज्ञान सो रहा था।",
			"वृद्ध संरक्षक केमेट, वह तूफान का सच जानता है।",
			"टेम्पेस्ट। सिर्फ एक राक्षस नहीं था। प्रतिशोध और क्रोध ने मार्ग प्रशस्त किया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "버려진 검의 사원. 폐허가 된 입구가 모래 속에 잠겨 있었다.",
						"english": "The abandoned Sword Temple. Its ruined entrance was buried in sand.",
						"japanese": "廃墟となった剣の寺院。朽ちた入口は砂の中に埋もれていた。",
						"chinese": "废弃的剑之神殿。废墟般的入口被埋在沙中。",
						"french": "Le Temple de l'Épée abandonné. Son entrée en ruine était enfouie dans le sable.",
						"spanish": "El abandonado Templo de la Espada. Su entrada en ruinas estaba sepultada en la arena.",
						"vietnamese": "Đền Kiếm bỏ hoang. Lối vào đổ nát bị vùi trong cát.",
						"thai": "วิหารดาบร้าง ทางเข้าที่พังทลายจมอยู่ในทราย",
						"hindi": "परित्यक्त तलवार मंदिर। उसका खंडहर प्रवेश द्वार रेत में दब गया था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 검의 사원?",
						"english": "Is this... the Sword Temple?",
						"japanese": "ここが…あの剣の寺院か？",
						"chinese": "这里是…那个剑之神殿？",
						"french": "C'est ici... le Temple de l'Épée ?",
						"spanish": "¿Es aquí... el Templo de la Espada?",
						"vietnamese": "Đây là... Đền Kiếm đó sao?",
						"thai": "ที่นี่คือ... วิหารดาบนั่นเหรอ?",
						"hindi": "क्या यह... वह तलवार मंदिर है?"
					}
				},
				{
					"speaker": "kemet",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "…왔는가. 기다리고 있었다.",
						"english": "...You've come. I was waiting.",
						"japanese": "…来たか。待っていたぞ。",
						"chinese": "……你来了。我一直在等你。",
						"french": "...Vous êtes venus. J'attendais.",
						"spanish": "...Has venido. Estaba esperando.",
						"vietnamese": "...Ngươi đã đến. Ta đã chờ đợi.",
						"thai": "...มาแล้วหรือ ข้ากำลังรออยู่",
						"hindi": "...तुम आ गए। मैं इंतजार कर रहा था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你 किसे हो?",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "कौन हो तुम?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "케메트. 이 사원을 지키는 늙은이다.",
						"english": "Kemet. An old man who guards this temple.",
						"japanese": "ケメット。この寺院を守る老いた者だ。",
						"chinese": "凯米特。守护这座神殿的老人。",
						"french": "Kemet. Un vieil homme qui garde ce temple.",
						"spanish": "Kemet. Un viejo que custodia este templo.",
						"vietnamese": "Kemet. Một lão già canh giữ ngôi đền này.",
						"thai": "เคเมต ข้าคือชายชราผู้พิทักษ์วิหารนี้",
						"hindi": "केमेट। इस मंदिर की रक्षा करने वाला एक बूढ़ा व्यक्ति।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "너희가 찾는 진실은, 이 안에 잠들어 있지.",
						"english": "The truth you seek slumbers within here.",
						"japanese": "お前たちが探す真実は、この中に眠っている。",
						"chinese": "你们所寻找的真相，就沉睡在这里面。",
						"french": "La vérité que vous cherchez sommeille ici.",
						"spanish": "La verdad que buscáis duerme aquí dentro.",
						"vietnamese": "Sự thật mà các ngươi tìm kiếm, đang ngủ yên bên trong này.",
						"thai": "ความจริงที่พวกเจ้าตามหา หลับใหลอยู่ในนี้",
						"hindi": "जिस सच्चाई को तुम खोज रहे हो, वह यहीं भीतर सो रही है।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "kemet",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "템페스트… 그는 단순한 괴물이 아니다.",
						"english": "Tempest... He is no mere monster.",
						"japanese": "テンペスト… 彼はただの怪物のではない。",
						"chinese": "坦佩斯特……他不是一般的怪物。",
						"french": "Tempête... Ce n'est pas un simple monstre.",
						"spanish": "Tempestad... No es un simple monstruo.",
						"vietnamese": "Tempest... Hắn không phải là một quái vật đơn thuần.",
						"thai": "เทมเพสต์... เขาไม่ใช่แค่อสูรกายธรรมดา",
						"hindi": "टेम्पेस्ट... वह सिर्फ एक राक्षस नहीं है।"
					},
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 뭐란 말이야?",
						"english": "Then what is he?",
						"japanese": "じゃあ、何者なんだ？",
						"chinese": "那他是什么？",
						"french": "Alors, qu'est-ce qu'il est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy hắn là gì?",
						"thai": "แล้วเขาคืออะไรกันแน่?",
						"hindi": "तो फिर वह क्या है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고대의 검술을 사용한다. 사라진 황금 제국의 비술이지.",
						"english": "He wields ancient swordsmanship. A secret art of the vanished Golden Empire.",
						"japanese": "古代の剣術を使う。失われた黄金帝国の秘術だ。",
						"chinese": "他使用古代剑术。那是消失的黄金帝国的秘术。",
						"french": "Il manie l'épée ancienne. Un art secret de l'Empire d'Or disparu.",
						"spanish": "Utiliza una antigua esgrima. Un arte secreto del Imperio Dorado desaparecido.",
						"vietnamese": "Hắn sử dụng kiếm thuật cổ đại. Một bí thuật của Đế chế Vàng đã biến mất.",
						"thai": "เขาใช้ดาบโบราณ เป็นวิชาลับของอาณาจักรทองคำที่สาบสูญ",
						"hindi": "वह प्राचीन तलवारबाज़ी का उपयोग करता है। लुप्त हो चुके स्वर्ण साम्राज्य की एक गुप्त कला।"
					},
					"type": "speech",
					"speaker": "kemet"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "검술? 그럼… 사람이라는 건가?",
						"english": "Swordsmanship? Then... he's human?",
						"japanese": "剣術？じゃあ…人間なのか？",
						"chinese": "剑术？那么……他是人？",
						"french": "L'épée ? Alors... c'est un humain ?",
						"spanish": "¿Esgrima? ¿Entonces... es humano?",
						"vietnamese": "Kiếm thuật? Vậy... hắn là người sao?",
						"thai": "ดาบโบราณ? งั้น... เขาก็เป็นคนน่ะสิ?",
						"hindi": "तलवारबाज़ी? तो... क्या वह इंसान है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…과거의 영광을 좇던 어리석은 자들. 그 끝은 언제나 비극이었다.",
						"english": "...Fools who chased past glories. Their end was always tragedy.",
						"japanese": "…過去の栄光を追った愚か者たち。その末路は常に悲劇だった。",
						"chinese": "……那些追逐昔日荣耀的愚蠢之人。他们的结局总是悲剧。",
						"french": "...Des fous qui couraient après la gloire passée. Leur fin était toujours la tragédie.",
						"spanish": "...Necios que persiguieron glorias pasadas. Su final siempre fue una tragedia.",
						"vietnamese": "...Những kẻ ngu ngốc đuổi theo vinh quang quá khứ. Kết cục của họ luôn là bi kịch.",
						"thai": "...คนโง่ที่ไล่ตามความรุ่งโรจน์ในอดีต จุดจบของพวกเขาคือโศกนาฏกรรมเสมอ",
						"hindi": "...मूर्ख जिन्होंने अतीत के गौरव का पीछा किया। उनका अंत हमेशा त्रासदी था।"
					},
					"speaker": "kemet",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kemet",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "황금 제국의 숨겨진 기록… 모래 속에 묻혀 사라진 줄 알았지.",
						"english": "The hidden records of the Golden Empire... I thought they were lost, buried in the sand.",
						"japanese": "黄金帝国の隠された記録… 砂に埋もれて消えたと思っていたのに。",
						"chinese": "黄金帝国的隐藏记录……我以为它们已经埋在沙子里消失了。",
						"french": "Les archives cachées de l'Empire d'Or... Je croyais qu'elles avaient disparu, enfouies dans le sable.",
						"spanish": "Los registros ocultos del Imperio Dorado... Creí que estaban perdidos, sepultados en la arena.",
						"vietnamese": "Những ghi chép ẩn giấu của Đế chế Vàng... Cứ tưởng chúng đã mất, bị chôn vùi trong cát.",
						"thai": "บันทึกลับของอาณาจักรทองคำ... คิดว่าคงหายสาบสูญไปกับทรายแล้ว",
						"hindi": "स्वर्ण साम्राज्य के छिपे हुए अभिलेख... मुझे लगा कि वे रेत में दफन होकर खो गए थे।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기록에 뭐가 있는데?",
						"english": "What's in the records?",
						"japanese": "記録には何が書かれている？",
						"chinese": "记录里有什么？",
						"french": "Qu'y a-t-il dans les archives ?",
						"spanish": "¿Qué hay en los registros?",
						"vietnamese": "Trong ghi chép có gì?",
						"thai": "มีอะไรอยู่ในบันทึกบ้าง?",
						"hindi": "अभिलेखों में क्या है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "제국의 오만… 그리고 그 오만을 꿰뚫은 검은 그림자.",
						"english": "The Empire's arrogance... and the black shadow that pierced through it.",
						"japanese": "帝国の傲慢… そして、その傲慢を貫いた黒い影。",
						"chinese": "帝国的傲慢……以及刺穿那傲慢的黑色影子。",
						"french": "L'arrogance de l'Empire... et l'ombre noire qui l'a transpercée.",
						"spanish": "La arrogancia del Imperio... y la sombra negra que la atravesó.",
						"vietnamese": "Sự ngạo mạn của Đế chế... và bóng đen xuyên thủng sự ngạo mạn đó.",
						"thai": "ความเย่อหยิ่งของอาณาจักร... และเงาดำที่แทงทะลุความเย่อหยิ่งนั้น",
						"hindi": "साम्राज्य का अभिमान... और वह काली छाया जिसने उस अभिमान को भेद दिया।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "검은 그림자라니?",
						"english": "A black shadow?",
						"japanese": "黒い影だと？",
						"chinese": "什么黑影？",
						"french": "Une ombre noire ?",
						"spanish": "¿Una sombra negra?",
						"vietnamese": "Bóng đen ư?",
						"thai": "เงาดำอะไร?",
						"hindi": "काली छाया?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것은 반복된다. 역사는 언제나 진실을 말하지.",
						"english": "Everything repeats itself. History always tells the truth.",
						"japanese": "全ては繰り返される。歴史は常に真実を語る。",
						"chinese": "一切都会重演。历史总是讲述真相。",
						"french": "Tout se répète. L'histoire dit toujours la vérité.",
						"spanish": "Todo se repite. La historia siempre dice la verdad.",
						"vietnamese": "Mọi thứ đều lặp lại. Lịch sử luôn nói lên sự thật.",
						"thai": "ทุกสิ่งย่อมซ้ำรอย ประวัติศาสตร์มักจะบอกความจริงเสมอ",
						"hindi": "सब कुछ दोहराता है। इतिहास हमेशा सच बताता है।"
					},
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그럼 템페스트도… 제국의 잔재라는 건가?",
						"english": "So Tempest… is also a remnant of the Empire?",
						"japanese": "ではテンペストも… 帝国の残滓だとでも言うのか？",
						"chinese": "那么风暴… 也是帝国的残余吗？",
						"french": "Alors, Tempest… est aussi un vestige de l'Empire ?",
						"spanish": "¿Así que Tempest… también es un remanente del Imperio?",
						"vietnamese": "Vậy là Tempest… cũng là tàn dư của Đế chế sao?",
						"thai": "งั้นเทมเพสต์… ก็เป็นเศษซากของจักรวรรดิด้วยงั้นเหรอ?",
						"hindi": "तो टेम्पेस्ट… भी साम्राज्य का अवशेष है?"
					}
				},
				{
					"content": {
						"korean": "그 또한 진실의 파편이리라.",
						"english": "That, too, must be a fragment of the truth.",
						"japanese": "それもまた、真実の破片であろう。",
						"chinese": "那也是真相的碎片吧。",
						"french": "Cela aussi, doit être un fragment de la vérité.",
						"spanish": "Eso también, debe ser un fragmento de la verdad.",
						"vietnamese": "Đó cũng là một mảnh ghép của sự thật.",
						"thai": "นั่นก็เป็นชิ้นส่วนหนึ่งของความจริงเช่นกัน",
						"hindi": "वह भी सत्य का एक अंश होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kemet"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kemet",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "너희의 분노가… 너무 강하다. 위험하다.",
						"english": "Your wrath… is too strong. It's dangerous.",
						"japanese": "お前たちの怒りが… 強すぎる。危険だ。",
						"chinese": "你们的愤怒… 太强烈了。很危险。",
						"french": "Votre fureur… est trop forte. C'est dangereux.",
						"spanish": "Vuestra ira… es demasiado fuerte. Es peligrosa.",
						"vietnamese": "Cơn thịnh nộ của các ngươi… quá mạnh. Nguy hiểm.",
						"thai": "ความโกรธแค้นของพวกเจ้า… รุนแรงเกินไป เป็นอันตราย",
						"hindi": "तुम्हारा क्रोध… बहुत प्रबल है। यह खतरनाक है।"
					},
					"emotion": "sad",
					"speaker": "kemet",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 내 모든 걸 빼앗아 갔으니까.",
						"english": "Cannot stop. Because it took everything from me.",
						"japanese": "止められない。私の全てを奪い去ったから。",
						"chinese": "无法停止。因为它夺走了我的一切。",
						"french": "Je ne peux pas m'arrêter. Parce que ça m'a tout pris.",
						"spanish": "No puedo parar. Porque me lo arrebató todo.",
						"vietnamese": "Không thể dừng lại. Vì nó đã cướp đi tất cả của ta.",
						"thai": "หยุดไม่ได้หรอก เพราะมันเอาทุกอย่างของข้าไปแล้ว",
						"hindi": "रुक नहीं सकता। क्योंकि इसने मुझसे मेरा सब कुछ छीन लिया।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"content": {
						"korean": "그 분노가 너희를 파멸시킬 수도 있다.",
						"english": "That wrath could destroy you.",
						"japanese": "その怒りはお前たちを破滅させることもあり得る。",
						"chinese": "这份愤怒也可能会毁灭你们。",
						"french": "Cette fureur pourrait vous détruire.",
						"spanish": "Esa ira podría destruiros.",
						"vietnamese": "Cơn thịnh nộ đó có thể hủy diệt các ngươi.",
						"thai": "ความโกรธนั้นอาจจะทำลายพวกเจ้าได้",
						"hindi": "वह क्रोध तुम्हें नष्ट कर सकता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "상관없어. 템페스트만 쓰러뜨릴 수 있다면.",
						"english": "Doesn't matter. As long as I can defeat Tempest.",
						"japanese": "構わない。テンペストさえ倒せるのなら。",
						"chinese": "无所谓。只要能打倒风暴。",
						"french": "Peu importe. Tant que je peux vaincre Tempest.",
						"spanish": "No importa. Si puedo derrotar a Tempest.",
						"vietnamese": "Không sao. Chỉ cần có thể đánh bại Tempest.",
						"thai": "ไม่สนหรอก ขอแค่โค่นเทมเพสต์ลงได้ก็พอ",
						"hindi": "कोई फर्क नहीं पड़ता। अगर मैं टेम्पेस्ट को हरा सकूं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "kemet",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…(한숨) 저 너머에, 검기의 주인… 그 그림자가 기다리고 있다.",
						"english": "…(sigh) Beyond there, the master of the sword energy… that shadow awaits.",
						"japanese": "…(ため息) その先に、剣気の主… その影が待っている。",
						"chinese": "…(叹气) 在那尽头，剑气的主人… 那个影子正在等待着。",
						"french": "…(soupir) Au-delà, le maître de l'énergie de l'épée… cette ombre attend.",
						"spanish": "…(suspiro) Más allá, el maestro de la energía de la espada… esa sombra espera.",
						"vietnamese": "…(thở dài) Ở phía bên kia, chủ nhân của kiếm khí… cái bóng đó đang chờ đợi.",
						"thai": "…(ถอนหายใจ) ณ เบื้องหน้า มีเจ้าแห่งพลังดาบ… เงาร่างนั้นกำลังรออยู่",
						"hindi": "…(आह भरते हुए) उस पार, तलवार की ऊर्जा का स्वामी… वह छाया प्रतीक्षा कर रही है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "검기의 그림자가 모든 것을 집어삼켰다.",
						"english": "The shadow of the sword energy devoured everything.",
						"japanese": "剣気の影がすべてを飲み込んだ。",
						"chinese": "剑气的影子吞噬了一切。",
						"french": "L'ombre de l'énergie de l'épée a tout dévoré.",
						"spanish": "La sombra de la energía de la espada lo devoró todo.",
						"vietnamese": "Bóng đen của kiếm khí nuốt chửng mọi thứ.",
						"thai": "เงาแห่งพลังดาบกลืนกินทุกสิ่ง.",
						"hindi": "तलवार की शक्ति की छाया ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 너희의 분노는 나의 힘이 될 뿐이다.",
						"english": "Fools. Your rage only fuels my power.",
						"japanese": "愚か者どもめ。お前たちの怒りは、私の力となるだけだ。",
						"chinese": "愚蠢的家伙们。你们的愤怒只会成为我的力量。",
						"french": "Idiots. Votre rage ne fait qu'alimenter mon pouvoir.",
						"spanish": "Necios. Vuestra ira solo alimenta mi poder.",
						"vietnamese": "Lũ ngu ngốc. Cơn giận của các ngươi chỉ càng tiếp thêm sức mạnh cho ta thôi.",
						"thai": "พวกโง่เขลา. ความโกรธของพวกเจ้าเป็นเพียงพลังให้ข้าเท่านั้น.",
						"hindi": "मूर्खों। तुम्हारा क्रोध बस मेरी शक्ति को बढ़ावा देगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ、終わってない！",
						"chinese": "…还没完！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Todavía no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "…अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "반드시… 널 쓰러뜨릴 거야!",
						"english": "I will... bring you down!",
						"japanese": "必ず… お前を倒す！",
						"chinese": "我一定要… 打败你！",
						"french": "Je vais… t'abattre !",
						"spanish": "¡Te derrotaré... cueste lo que cueste!",
						"vietnamese": "Chắc chắn... ta sẽ hạ gục ngươi!",
						"thai": "ข้าจะต้อง... โค่นเจ้าลงให้ได้!",
						"hindi": "मैं… तुम्हें ज़रूर हराऊँगा!"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모래처럼 흩어졌다.",
						"english": "The colossal shadow scattered like sand.",
						"japanese": "巨大な影は砂のように散った。",
						"chinese": "巨大的影子如沙般消散了。",
						"french": "L'ombre colossale s'est dispersée comme du sable.",
						"spanish": "La sombra colosal se dispersó como arena.",
						"vietnamese": "Bóng đen khổng lồ tan biến như cát.",
						"thai": "เงาอันมหึมาสลายไปเหมือนทราย.",
						"hindi": "विशाल छाया रेत की तरह बिखर गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…끝이 아니다. 너희의 복수는… 아직 멀었다.",
						"english": "...It's not over. Your revenge... is still far off.",
						"japanese": "…終わりではない。お前たちの復讐は… まだ遠い。",
						"chinese": "……还没结束。你们的复仇……还远着呢。",
						"french": "...Ce n'est pas fini. Votre vengeance... est encore loin.",
						"spanish": "...No ha terminado. Vuestra venganza... aún está lejos.",
						"vietnamese": "...Chưa hết đâu. Sự trả thù của các ngươi... còn xa lắm.",
						"thai": "...ยังไม่จบ. การแก้แค้นของพวกเจ้า... ยังอีกไกล.",
						"hindi": "...यह खत्म नहीं हुआ है। तुम्हारा बदला... अभी बहुत दूर है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "…なんだと？",
						"chinese": "……你说什么？",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...อะไรนะ?",
						"hindi": "...क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "끝난 게 아니었어.",
						"english": "It wasn't over.",
						"japanese": "終わっていなかった。",
						"chinese": "还没结束。",
						"french": "Ce n'était pas fini.",
						"spanish": "No había terminado.",
						"vietnamese": "Chưa kết thúc.",
						"thai": "มันยังไม่จบ.",
						"hindi": "यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그림자는 사라졌지만, 그 잔상은 더욱 짙게 남았다. 템페스트의 진정한 정체… 아직 드러나지 않았다.",
						"english": "The shadow vanished, but its afterimage lingered, even darker. Tempest's true identity... has yet to be revealed.",
						"japanese": "影は消えたが、その残像はより濃く残った。テンペストの真の正体… まだ明らかになっていない。",
						"chinese": "影子消失了，但它的残像却更加深浓。风暴的真实身份……尚未揭露。",
						"french": "L'ombre a disparu, mais son empreinte est restée, encore plus sombre. La véritable identité de Tempest... n'a pas encore été révélée.",
						"spanish": "La sombra se desvaneció, pero su imagen residual permaneció, aún más oscura. La verdadera identidad de Tempest... aún no ha sido revelada.",
						"vietnamese": "Bóng đen biến mất, nhưng dư ảnh của nó còn đọng lại, càng thêm đậm. Danh tính thật sự của Tempest... vẫn chưa được tiết lộ.",
						"thai": "เงาหายไปแล้ว แต่ภาพหลอนของมันยังคงอยู่ เข้มข้นยิ่งกว่าเดิม. ตัวตนที่แท้จริงของเทมเพสต์... ยังไม่ถูกเปิดเผย.",
						"hindi": "छाया गायब हो गई, लेकिन उसकी परछाई और भी गहरी रह गई। टेम्पेस्ट की असली पहचान... अभी सामने नहीं आई है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사원의 가장 깊은 곳. 거대한 그림자가 검은 기운을 뿜어내고 있었다.",
						"english": "The deepest part of the temple. A colossal shadow was emitting dark energy.",
						"japanese": "神殿の最も深い場所。巨大な影が黒い気を放っていた。",
						"chinese": "神殿最深处。一个巨大的影子散发着黑色气息。",
						"french": "La partie la plus profonde du temple. Une ombre colossale émettait une énergie sombre.",
						"spanish": "La parte más profunda del templo. Una sombra colosal emitía una energía oscura.",
						"vietnamese": "Nơi sâu nhất của ngôi đền. Một cái bóng khổng lồ đang phát ra năng lượng hắc ám.",
						"thai": "ส่วนที่ลึกที่สุดของวิหาร เงาร่างมหึมากำลังปล่อยพลังงานทมิฬออกมา",
						"hindi": "मंदिर का सबसे गहरा हिस्सा। एक विशाल छाया काली ऊर्जा उत्सर्जित कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "…하찮은 자들. 감히 이곳에 발을 들이다니.",
						"english": "…Insignificant beings. How dare you set foot in this place.",
						"japanese": "…取るに足らぬ者たちめ。よくもこの地に足を踏み入れたな。",
						"chinese": "…渺小的存在。竟敢踏足此处。",
						"french": "…Créatures insignifiantes. Comment osez-vous fouler ce lieu.",
						"spanish": "…Seres insignificantes. ¿Cómo os atrevéis a pisar este lugar?",
						"vietnamese": "…Những kẻ tầm thường. Dám đặt chân đến nơi này sao.",
						"thai": "…พวกไร้ค่า บังอาจเข้ามาในที่แห่งนี้ได้อย่างไร",
						"hindi": "…तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 템페스트인가!",
						"english": "Are you Tempest!",
						"japanese": "お前がテンペストか！",
						"chinese": "你就是风暴吗！",
						"french": "Es-tu Tempest !",
						"spanish": "¡¿Eres tú Tempest?!",
						"vietnamese": "Ngươi là Tempest sao!",
						"thai": "แกคือเทมเพสต์รึไง!",
						"hindi": "क्या तुम टेम्पेस्ट हो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "나의 검은… 너희의 분노를 먹고 자란다.",
						"english": "My sword... feeds on your rage.",
						"japanese": "我が剣は… お前たちの怒りを糧に育つ。",
						"chinese": "我的剑…以你们的愤怒为食而成长。",
						"french": "Mon épée... se nourrit de votre rage.",
						"spanish": "Mi espada... se alimenta de vuestra ira.",
						"vietnamese": "Thanh kiếm của ta... lớn lên nhờ cơn thịnh nộ của các ngươi.",
						"thai": "ดาบของข้า... เติบโตขึ้นด้วยความโกรธแค้นของพวกเจ้า.",
						"hindi": "मेरी तलवार... तुम्हारे क्रोध से बढ़ती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 내 손으로 널 끝장낼 거야!",
						"english": "Silence! I'll end you with my own hands!",
						"japanese": "黙れ！この手でお前を終わらせてやる！",
						"chinese": "闭嘴！我会亲手了结你！",
						"french": "Silence ! Je vais en finir avec toi de mes propres mains !",
						"spanish": "¡Cállate! ¡Te acabaré con mis propias manos!",
						"vietnamese": "Câm mồm! Ta sẽ tự tay kết liễu ngươi!",
						"thai": "หุบปาก! ข้าจะจัดการเจ้าด้วยมือของข้าเอง!",
						"hindi": "चुप रहो! मैं तुम्हें अपने हाथों से खत्म कर दूंगा!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "kemet"
				},
				{
					"type": "speech",
					"speaker": "kemet",
					"emotion": "sad",
					"content": {
						"korean": "(다급하게) 부디… 분노에 삼켜지지 마라!",
						"english": "(Urgently) Please... don't be consumed by rage!",
						"japanese": "(切迫して) どうか… 怒りに飲まれないでくれ！",
						"chinese": "(焦急地) 拜托…不要被愤怒吞噬！",
						"french": "(Urgent) S'il te plaît... ne te laisse pas consumer par la rage !",
						"spanish": "(Urgente) Por favor... ¡no te dejes consumir por la ira!",
						"vietnamese": "(Khẩn cấp) Xin hãy... đừng để bị cơn thịnh nộ nuốt chửng!",
						"thai": "(เร่งรีบ) ได้โปรด... อย่าถูกกลืนกินด้วยความโกรธ!",
						"hindi": "(तत्काल) कृपया... क्रोध में मत डूबो!"
					}
				},
				{
					"speaker": "kemet",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"content": {
						"korean": "케메트의 경고는 모래바람에 흩어졌다.",
						"english": "Kemet's warning was scattered by the sandstorm.",
						"japanese": "ケメトの警告は砂嵐に散った。",
						"chinese": "凯麦特的警告被沙尘暴吹散了。",
						"french": "L'avertissement de Kemet fut dispersé par la tempête de sable.",
						"spanish": "La advertencia de Kemet se dispersó con la tormenta de arena.",
						"vietnamese": "Lời cảnh báo của Kemet đã tan biến trong bão cát.",
						"thai": "คำเตือนของเคเมตถูกพัดไปกับพายุทราย.",
						"hindi": "केमेट की चेतावनी रेतीले तूफान में बिखर गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
