export const scenario_snowy_skaldr_27_01 = {
	"scenario_id": "snowy_skaldr_27_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "차가운 설원, 발자국 없는 곳에 첫걸음을 내디뎠다.",
						"english": "Stepped for the first time into the cold, trackless snowy field.",
						"japanese": "冷たい雪原、足跡のない場所に最初の一歩を踏み出した。",
						"chinese": "在寒冷的雪原上，迈出了第一步，这里了无踪迹。",
						"french": "J'ai fait mes premiers pas dans le champ de neige froid et sans traces.",
						"spanish": "Di mi primer paso en el campo de nieve frío y sin huellas.",
						"vietnamese": "Lần đầu đặt chân lên cánh đồng tuyết lạnh giá, nơi không dấu vết.",
						"thai": "ก้าวแรกบนทุ่งหิมะอันหนาวเหน็บที่ไร้ร่องรอย",
						"hindi": "ठंडे, निर्जन बर्फीले मैदान में पहला कदम रखा।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… 잊혀진 시인의 땅인가.",
						"english": "Is this... the land of the forgotten poet?",
						"japanese": "ここが…忘れられた詩人の地なのか。",
						"chinese": "这里是…被遗忘诗人的土地吗？",
						"french": "Est-ce ici... la terre du poète oublié ?",
						"spanish": "¿Es esto... la tierra del poeta olvidado?",
						"vietnamese": "Đây có phải là... vùng đất của nhà thơ bị lãng quên?",
						"thai": "นี่คือ... ดินแดนของกวีที่ถูกลืมงั้นหรือ?",
						"hindi": "क्या यह... भूले हुए कवि की भूमि है?"
					}
				},
				{
					"action": "enter",
					"speaker": "borealis",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영한다. 그리운 이여.",
						"english": "Welcome, long-awaited one.",
						"japanese": "歓迎する。懐かしき者よ。",
						"chinese": "欢迎，久违之人。",
						"french": "Bienvenue, toi que j'attendais.",
						"spanish": "Bienvenida, anhelada.",
						"vietnamese": "Chào mừng, người ta mong nhớ.",
						"thai": "ยินดีต้อนรับ ผู้ที่รอคอย",
						"hindi": "स्वागत है, मेरे प्रिय।"
					},
					"speaker": "borealis"
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "이곳은 스키피오르 족의 옛 영지. 기억만이 살아 숨 쉬지.",
						"english": "This is the old domain of the Skipior tribe. Only memories live on here.",
						"japanese": "ここはスキピオル族の旧領。記憶だけが息づいている。",
						"chinese": "这里是斯基皮奥尔部族旧时的领地。唯有记忆在此呼吸。",
						"french": "C'est l'ancien domaine de la tribu Skipior. Seuls les souvenirs y vivent encore.",
						"spanish": "Este es el antiguo dominio de la tribu Skipior. Solo los recuerdos viven aquí.",
						"vietnamese": "Đây là lãnh địa cũ của bộ tộc Skipior. Chỉ có ký ức còn sống mãi.",
						"thai": "ที่นี่คืออาณาเขตเก่าแก่ของเผ่าสกิปิออร์ มีเพียงความทรงจำเท่านั้นที่ยังคงอยู่",
						"hindi": "यह स्किपिओर जनजाति का पुराना क्षेत्र है। यहाँ केवल यादें ही जीवित हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신은…",
						"english": "You are...?",
						"japanese": "あなたは…",
						"chinese": "你是…？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Ngươi là...?",
						"thai": "ท่านคือ...?",
						"hindi": "तुम कौन हो...?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "보레아리스. 길을 잃은 자를 인도하는 자.",
						"english": "Borealis. The one who guides the lost.",
						"japanese": "ボレアリス。道を見失った者を導く者。",
						"chinese": "北极星。指引迷途者的存在。",
						"french": "Boréalis. Celui qui guide les égarés.",
						"spanish": "Borealis. El que guía a los perdidos.",
						"vietnamese": "Borealis. Người dẫn lối cho kẻ lạc đường.",
						"thai": "บอเรียลลิส ผู้ชี้นำผู้หลงทาง",
						"hindi": "बोरेलिस। जो भटके हुए को राह दिखाता है।"
					},
					"speaker": "borealis",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "borealis",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 지도 한 조각이 이 설원의 비밀을 품고 있다고 했었나.",
						"english": "Did you say an old map holds the secret of this snowfield?",
						"japanese": "「古い地図の切れ端が、この雪原の秘密を握っていると言ったか？」",
						"chinese": "你是不是说，一张古老的地图藏着这片雪地的秘密？",
						"french": "Aviez-vous dit qu'une vieille carte détenait le secret de cette étendue enneigée ?",
						"spanish": "¿Dijiste que un trozo de mapa antiguo guarda el secreto de este campo nevado?",
						"vietnamese": "Ngươi đã nói một mảnh bản đồ cũ chứa đựng bí mật của cánh đồng tuyết này sao?",
						"thai": "เจ้าบอกว่าแผนที่เก่าแก่ชิ้นหนึ่งกุมความลับของทุ่งหิมะนี้ไว้ใช่ไหม?",
						"hindi": "क्या तुमने कहा था कि एक पुराना नक्शा इस बर्फ़ीले मैदान का राज़ रखता है?"
					},
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지도? 시인의 일기에도 그런 언급이 있었어.",
						"english": "A map? The poet's diary mentioned it too.",
						"japanese": "「地図？詩人の日記にもその言及があったな。」",
						"chinese": "地图？诗人的日记里也提到了。",
						"french": "Une carte ? Le journal du poète en faisait également mention.",
						"spanish": "¿Un mapa? El diario del poeta también lo mencionaba.",
						"vietnamese": "Bản đồ? Nhật ký của nhà thơ cũng có nhắc đến.",
						"thai": "แผนที่? บันทึกของกวีก็พูดถึงเรื่องนั้นด้วย",
						"hindi": "नक्शा? कवि की डायरी में भी इसका ज़िक्र था।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "과거의 영광에 사로잡힌 자들이 많지. 이 설원처럼… 얼어붙었어.",
						"english": "Many are trapped by past glories. Like this snowfield... frozen.",
						"japanese": "「過去の栄光に囚われた者が多いな。この雪原のように…凍りついている。」",
						"chinese": "很多人都沉迷于过去的辉煌。就像这片雪地…被冰封了。",
						"french": "Beaucoup sont piégés par les gloires passées. Comme cette étendue enneigée... figés.",
						"spanish": "Muchos están atrapados por las glorias pasadas. Como este campo nevado... congelados.",
						"vietnamese": "Nhiều người bị mắc kẹt bởi vinh quang quá khứ. Giống như cánh đồng tuyết này... đóng băng rồi.",
						"thai": "หลายคนติดอยู่ในความรุ่งโรจน์ในอดีต เหมือนทุ่งหิมะนี้... ถูกแช่แข็ง",
						"hindi": "बहुत से लोग अतीत की महिमा में फँसे हुए हैं। इस बर्फ़ीले मैदान की तरह... जम गए हैं।"
					},
					"speaker": "borealis"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "저 거대한 얼음 벽 너머엔, 시간조차 잊은 시가 흐르고 있지.",
						"english": "Beyond that colossal ice wall, a forgotten poem flows, even time has forgotten it.",
						"japanese": "「あの巨大な氷の壁の向こうには、時さえ忘れた詩が流れている。」",
						"chinese": "在那巨大的冰墙后面，流淌着连时间都遗忘的诗歌。",
						"french": "Au-delà de ce mur de glace colossal, un poème oublié s'écoule, que même le temps a oublié.",
						"spanish": "Más allá de esa colosal pared de hielo, fluye un poema olvidado, que incluso el tiempo ha olvidado.",
						"vietnamese": "Phía sau bức tường băng khổng lồ kia, một bài thơ bị thời gian lãng quên đang chảy trôi.",
						"thai": "พ้นกำแพงน้ำแข็งมหึมานั้น บทกวีที่แม้แต่กาลเวลาก็ยังลืมเลือนกำลังไหลริน",
						"hindi": "उस विशाल बर्फीली दीवार के परे, एक भूली हुई कविता बह रही है, जिसे समय भी भूल गया है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 시가… 그리움을 멈출 수 있는 건가?",
						"english": "Can that poem... stop the longing?",
						"japanese": "「あの詩が…郷愁を止められるというのか？」",
						"chinese": "那首诗…能停止思念吗？",
						"french": "Ce poème... peut-il arrêter la mélancolie ?",
						"spanish": "¿Ese poema... puede detener el anhelo?",
						"vietnamese": "Bài thơ đó... có thể ngăn được nỗi nhớ không?",
						"thai": "บทกวีนั้น... จะหยุดยั้งความโหยหาได้หรือ?",
						"hindi": "क्या वह कविता... लालसा को रोक सकती है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "어쩌면. 혹은, 더 깊은 절망 속으로 이끌 수도 있고.",
						"english": "Perhaps. Or, it could lead to deeper despair.",
						"japanese": "「あるいは。あるいは、もっと深い絶望へと誘うかもしれない。」",
						"chinese": "也许。或者，它可能引向更深的绝望。",
						"french": "Peut-être. Ou, cela pourrait mener à un désespoir plus profond.",
						"spanish": "Quizás. O, podría conducir a una desesperación más profunda.",
						"vietnamese": "Có thể. Hoặc, nó có thể dẫn đến sự tuyệt vọng sâu hơn.",
						"thai": "อาจจะ หรืออาจจะนำไปสู่ความสิ้นหวังที่ลึกซึ้งยิ่งกว่า",
						"hindi": "शायद। या, यह और भी गहरी निराशा में ले जा सकता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그대의 목적은 무엇이지?",
						"english": "What is your purpose?",
						"japanese": "「そなたの目的は何だ？」",
						"chinese": "你的目的是什么？",
						"french": "Quel est votre but ?",
						"spanish": "¿Cuál es tu propósito?",
						"vietnamese": "Mục đích của ngươi là gì?",
						"thai": "จุดประสงค์ของเจ้าคืออะไร?",
						"hindi": "तुम्हारा उद्देश्य क्या है?"
					},
					"speaker": "borealis"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "borealis"
				},
				{
					"content": {
						"korean": "이곳부터는 더 이상 되돌릴 수 없어.",
						"english": "From this point, there's no turning back.",
						"japanese": "「ここからは、もう後戻りできない。」",
						"chinese": "从这里开始，已无法回头。",
						"french": "À partir d'ici, il n'y a plus de retour en arrière.",
						"spanish": "Desde este punto, no hay vuelta atrás.",
						"vietnamese": "Từ đây trở đi, không thể quay lại được nữa.",
						"thai": "จากจุดนี้ไป ไม่มีทางย้อนกลับได้อีกแล้ว",
						"hindi": "इस बिंदु से, पीछे मुड़ना संभव नहीं है।"
					},
					"speaker": "borealis",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "알아.",
						"english": "I know.",
						"japanese": "「分かっている。」",
						"chinese": "我知道。",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Ta biết.",
						"thai": "ข้ารู้",
						"hindi": "मुझे पता है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "심연 속의 노래가 너를 부르고 있다. 깨어나지 않는 한… 이 설원은 영원히 죽어있을 거야.",
						"english": "The song of the abyss calls to you. Unless you awaken... this snowfield will remain dead forever.",
						"japanese": "「深淵の歌がそなたを呼んでいる。目覚めない限り…この雪原は永遠に死んだままだろう。」",
						"chinese": "深渊之歌正在呼唤你。除非你苏醒…这片雪地将永远沉寂。",
						"french": "Le chant des abysses vous appelle. À moins que vous ne vous réveilliez... cette étendue enneigée restera morte à jamais.",
						"spanish": "La canción del abismo te llama. A menos que despiertes... este campo nevado permanecerá muerto para siempre.",
						"vietnamese": "Bài ca vực sâu đang gọi ngươi. Trừ khi ngươi tỉnh giấc... cánh đồng tuyết này sẽ chết mãi mãi.",
						"thai": "บทเพลงแห่งห้วงเหวลึกกำลังเรียกหาเจ้า หากเจ้าไม่ตื่นขึ้น... ทุ่งหิมะนี้จะตายไปตลอดกาล",
						"hindi": "गहरे पाताल का गीत तुम्हें पुकार रहा है। जब तक तुम जागते नहीं... यह बर्फ़ीला मैदान हमेशा के लिए मरा रहेगा।"
					}
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "준비는 되었나?",
						"english": "Are you ready?",
						"japanese": "準備はできたか？",
						"chinese": "准备好了吗？",
						"french": "Es-tu prêt ?",
						"spanish": "¿Estás listo?",
						"vietnamese": "Đã sẵn sàng chưa?",
						"thai": "พร้อมแล้วหรือยัง?",
						"hindi": "तैयार हो?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자여… 이 설원에 영원히 갇히리라.",
						"english": "Fool… Forever trapped in this snowfield.",
						"japanese": "愚か者め… この雪原に永遠に囚われるがよい。",
						"chinese": "愚者啊… 将永远被困在这雪原中。",
						"french": "Insensé… Tu seras à jamais piégé dans cette étendue de neige.",
						"spanish": "Necio… Quedarás atrapado para siempre en este campo de nieve.",
						"vietnamese": "Kẻ ngu muội… Ngươi sẽ bị giam cầm vĩnh viễn trong cánh đồng tuyết này.",
						"thai": "คนโง่… เจ้าจะถูกขังอยู่ในทุ่งหิมะนี้ตลอดไป",
						"hindi": "मूर्ख… तुम इस बर्फ़ीले मैदान में हमेशा के लिए फँसे रहोगे।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "Not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还… 没结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยังไม่… จบ!",
						"hindi": "अभी… ख़त्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "강렬한 한기가 탐험대를 덮쳤다. 다시 일어설 때까지…",
						"english": "A fierce chill enveloped the team. Until they rise again…",
						"japanese": "強烈な寒気が探索隊を襲った。再び立ち上がるまで…",
						"chinese": "强烈的寒气笼罩了探险队。直到再次站起来…",
						"french": "Un froid intense a enveloppé l'équipe d'expédition. Jusqu'à ce qu'ils se relèvent…",
						"spanish": "Un frío intenso envolvió al equipo de expedición. Hasta que se levanten de nuevo…",
						"vietnamese": "Một luồng khí lạnh cực mạnh bao trùm đội thám hiểm. Cho đến khi họ đứng dậy trở lại…",
						"thai": "ความหนาวเย็นอันรุนแรงปกคลุมทีมสำรวจ จนกว่าพวกเขาจะลุกขึ้นอีกครั้ง…",
						"hindi": "तीव्र ठंड ने अभियान दल को घेर लिया। जब तक वे फिर से उठ खड़े नहीं होते…"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 심장부, 거대한 그림자가 움직였다.",
						"english": "In the frozen heart, a giant shadow stirred.",
						"japanese": "凍てついた心臓部、巨大な影が動いた。",
						"chinese": "在冰冻的心脏深处，一个巨大的影子在蠢蠢欲动。",
						"french": "Au cœur gelé, une ombre gigantesque s'agita.",
						"spanish": "En el corazón helado, una sombra gigantesca se movió.",
						"vietnamese": "Trong trái tim băng giá, một bóng đen khổng lồ cựa mình.",
						"thai": "ในใจกลางที่เยือกแข็ง เงาขนาดยักษ์เคลื่อนไหว",
						"hindi": "जमे हुए हृदय में, एक विशाल छाया हिली।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "침입자인가… 나의 영역을 더럽히는 어리석은 자여.",
						"english": "An intruder... Foolish one, defiling my domain.",
						"japanese": "侵入者か… 我が領域を汚す愚か者め。",
						"chinese": "入侵者吗……胆敢玷污吾之领域的愚蠢之徒。",
						"french": "Un intrus... Imbécile, souillant mon domaine.",
						"spanish": "¿Un intruso...? Necio, profanando mi dominio.",
						"vietnamese": "Kẻ xâm nhập sao... Kẻ ngu ngốc dám vấy bẩn lãnh địa của ta.",
						"thai": "ผู้บุกรุกหรือ... เจ้าโง่ที่กล้าแปดเปื้อนอาณาเขตของข้า",
						"hindi": "घुसपैठिया... मूर्ख, मेरे क्षेत्र को अपवित्र कर रहा है।"
					}
				},
				{
					"content": {
						"korean": "네가… 시인의 환영인가!",
						"english": "You... are the Poet's illusion!",
						"japanese": "貴様が… 詩人の幻影か！",
						"chinese": "你就是……诗人的幻影吗！",
						"french": "Tu… es l'illusion du Poète !",
						"spanish": "¡Tú… eres la ilusión del Poeta!",
						"vietnamese": "Ngươi… là ảo ảnh của Thi sĩ sao!",
						"thai": "เจ้า... คือภาพลวงตาของกวีงั้นหรือ!",
						"hindi": "तुम... कवि का भ्रम हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는… 영원히 기억될 존재!",
						"english": "I... am one to be remembered forever!",
						"japanese": "私は… 永遠に記憶される存在！",
						"chinese": "我……是将被永远铭记的存在！",
						"french": "Je… suis un être dont on se souviendra à jamais !",
						"spanish": "¡Yo… soy un ser que será recordado por siempre!",
						"vietnamese": "Ta… là kẻ sẽ được nhớ mãi mãi!",
						"thai": "ข้า... คือผู้ที่จะถูกจดจำไปตลอดกาล!",
						"hindi": "मैं... वह हूँ जिसे हमेशा याद रखा जाएगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…운명은 스스로 만드는 것.",
						"english": "...Fate is forged by oneself.",
						"japanese": "…運命は自ら作るもの。",
						"chinese": "……命运是自己创造的。",
						"french": "…Le destin se forge soi-même.",
						"spanish": "...El destino se forja a sí mismo.",
						"vietnamese": "...Số phận là do chính mình tạo ra.",
						"thai": "...โชคชะตาคือสิ่งที่สร้างด้วยตนเอง",
						"hindi": "...नसीब स्वयं बनाते हैं।"
					},
					"speaker": "borealis",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "borealis",
					"type": "direction",
					"direction": "up",
					"duration_ms": 500
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 나의 영광은…!",
						"english": "Ugh... Is this all there is...? My glory...!",
						"japanese": "ぐぅ…たかがこの程度とは…我が栄光は…！",
						"chinese": "呃……就这点程度吗……吾之荣耀……！",
						"french": "Ugh… Ce n'est que ça… Ma gloire… !",
						"spanish": "Ugh… ¿Es solo esto…? ¡Mi gloria…!",
						"vietnamese": "Khụ... Chỉ có thế này thôi sao... Vinh quang của ta...!",
						"thai": "อึก... แค่นี้เองหรือ... เกียรติยศของข้า...!",
						"hindi": "उफ़... बस इतना ही...? मेरी महिमा...!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 시인의 그리움인가.",
						"english": "Is this... the Poet's yearning?",
						"japanese": "これが… 詩人の慕情か。",
						"chinese": "这就是……诗人的眷恋吗。",
						"french": "Est-ce là… le regret du Poète ?",
						"spanish": "¿Es esto… el anhelo del Poeta?",
						"vietnamese": "Đây... là nỗi nhớ của Thi sĩ sao.",
						"thai": "นี่คือ... ความปรารถนาของกวีงั้นหรือ",
						"hindi": "क्या यह... कवि की लालसा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "거대한 얼음 거수는 쓰러졌다. 하지만 설원의 정적은 깨지지 않았다.",
						"english": "The giant ice treant fell. Yet, the tundra's silence remained unbroken.",
						"japanese": "巨大な氷の巨樹は倒れた。しかし、雪原の静寂は破られなかった。",
						"chinese": "巨大的冰霜古树倒下了。然而，雪原的寂静并未被打破。",
						"french": "L'arbre-géant de glace s'effondra. Pourtant, le silence de la toundra resta intact.",
						"spanish": "El gigantesco árbol de hielo cayó. Sin embargo, el silencio de la tundra permaneció intacto.",
						"vietnamese": "Cây băng khổng lồ đã đổ. Tuy nhiên, sự tĩnh lặng của đồng tuyết vẫn không bị phá vỡ.",
						"thai": "ต้นไม้น้ำแข็งยักษ์ล้มลง ทว่า ความเงียบสงบของทุ่งหิมะยังคงอยู่",
						"hindi": "विशाल हिमवृक्ष गिर गया। फिर भी, टुंड्रा की शांति भंग नहीं हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "기억은 여전히 얼어붙은 채였다. 다음 시험이 기다린다.",
						"english": "Memories remained frozen. The next trial awaits.",
						"japanese": "記憶は凍りついたままだった。次の試練が待つ。",
						"chinese": "记忆依旧冻结。下一次考验正在等待。",
						"french": "Les souvenirs restèrent gelés. La prochaine épreuve attend.",
						"spanish": "Los recuerdos permanecieron congelados. La próxima prueba aguarda.",
						"vietnamese": "Ký ức vẫn đóng băng. Thử thách tiếp theo đang chờ.",
						"thai": "ความทรงจำยังคงเยือกแข็ง การทดสอบครั้งต่อไปรออยู่",
						"hindi": "यादें अभी भी जमी हुई थीं। अगली परीक्षा इंतजार कर रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "borealis",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis",
					"content": {
						"korean": "첫 번째 시험은 통과했군.",
						"english": "First trial passed.",
						"japanese": "最初の試練は突破したな。",
						"chinese": "你通过了第一次考验。",
						"french": "Tu as réussi la première épreuve.",
						"spanish": "Has superado la primera prueba.",
						"vietnamese": "Ngươi đã vượt qua thử thách đầu tiên.",
						"thai": "เจ้าผ่านการทดสอบแรกแล้ว",
						"hindi": "तुमने पहली परीक्षा पास कर ली है।"
					}
				},
				{
					"speaker": "borealis",
					"content": {
						"korean": "아직… 갈 길이 멀다.",
						"english": "Still… a long way to go.",
						"japanese": "まだ… 道は遠い。",
						"chinese": "前方… 道阻且长。",
						"french": "Le chemin est encore long…",
						"spanish": "Todavía… queda un largo camino.",
						"vietnamese": "Vẫn còn… một chặng đường dài.",
						"thai": "ยังคง… อีกไกล",
						"hindi": "अभी… बहुत दूर जाना है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 잊혀진 시인의 흔적을 쫓아 도착했다.",
			"고대의 시는 얼어붙은 기억 속에 잠들고…",
			"차가운 눈보라 속, 미스터리한 안내자가 나타났다.",
			"그의 눈빛엔, 숨겨진 쓸쓸함이 깃들어 있었다."
		],
		"english": [
			"Arrived, chasing the forgotten poet's traces across an endless snowy field.",
			"Ancient poems slumber in frozen memories...",
			"Amidst the cold blizzard, a mysterious guide appeared.",
			"In his eyes, a hidden loneliness resided."
		],
		"japanese": [
			"果てしなく広がる雪原、忘れられた詩人の痕跡を追って辿り着いた。",
			"古代の詩は凍てついた記憶の中で眠る…",
			"冷たい吹雪の中、謎めいた案内人が現れた。",
			"彼の瞳には、隠された寂しさが宿っていた。"
		],
		"chinese": [
			"穿越无尽雪原，追寻着被遗忘诗人的足迹，终于抵达。",
			"古老的诗歌在冰封的记忆中沉睡…",
			"在凛冽的暴风雪中，一位神秘的向导出现了。",
			"他的眼神中，蕴藏着一丝隐藏的寂寥。"
		],
		"french": [
			"Arrivé sur une plaine enneigée infinie, à la poursuite des traces d'un poète oublié.",
			"Les poèmes anciens sommeillent dans des souvenirs gelés...",
			"Au milieu du froid blizzard, un guide mystérieux apparut.",
			"Dans ses yeux, une solitude cachée résidait."
		],
		"spanish": [
			"Llegué, siguiendo las huellas de un poeta olvidado a través de una llanura nevada interminable.",
			"Los poemas antiguos duermen en recuerdos congelados...",
			"En medio de la fría tormenta de nieve, apareció un guía misterioso.",
			"En sus ojos, residía una soledad oculta."
		],
		"vietnamese": [
			"Đến nơi, theo dấu vết nhà thơ bị lãng quên qua cánh đồng tuyết vô tận.",
			"Những bài thơ cổ xưa ngủ vùi trong ký ức đóng băng...",
			"Giữa cơn bão tuyết lạnh giá, một người dẫn đường bí ẩn xuất hiện.",
			"Trong ánh mắt anh, ẩn chứa một nỗi cô đơn."
		],
		"thai": [
			"มาถึงแล้ว, ตามรอยกวีที่ถูกลืมไปทั่วทุ่งหิมะอันกว้างใหญ่ไม่สิ้นสุด",
			"บทกวีโบราณหลับใหลอยู่ในความทรงจำที่เยือกแข็ง...",
			"ท่ามกลางพายุหิมะอันหนาวเหน็บ ผู้นำทางลึกลับได้ปรากฏกายขึ้น",
			"ในดวงตาของเขา มีความโดดเดี่ยวที่ซ่อนอยู่"
		],
		"hindi": [
			"अनंत हिमखंडों के पार, भूले हुए कवि के निशानों का पीछा करते हुए पहुँचा।",
			"प्राचीन कविताएँ जमी हुई यादों में सो रही हैं...",
			"ठंडी बर्फीली आँधी के बीच, एक रहस्यमय मार्गदर्शक प्रकट हुआ।",
			"उसकी आँखों में एक छिपी हुई उदासी थी।"
		]
	}
} as const;
