export const scenario_forest_honeydew_3_04 = {
	"scenario_id": "forest_honeydew_3_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"잊혀진 마을. 꿀 냄새 가득한 그곳엔 끔찍한 진실이 숨어있었다.",
			"친구를 잃고 복수심에 불타는 글렌.",
			"그는 탐험대를 '하니듀'의 본거지로 이끌었다.",
			"기억마저 앗아가는 달콤한 저주. 그 뒤에 드리운 거대한 그림자."
		],
		"english": [
			"A forgotten village. A terrible truth lay hidden amidst the sweet scent of honey.",
			"Glen, burning with vengeance after losing a friend.",
			"He led the expedition to 'Honeydew's' stronghold.",
			"A sweet curse that steals even memories. The giant shadow cast behind it."
		],
		"japanese": [
			"忘れられた村。蜂蜜の香りに満ちたそこには、恐ろしい真実が隠されていた。",
			"友を失い、復讐心に燃えるグレン。",
			"彼は探検隊を「ハニーデュー」の本拠地へと導いた。",
			"記憶さえ奪う甘い呪い。その背後に潜む巨大な影。"
		],
		"chinese": [
			"被遗忘的村庄。弥漫着蜂蜜香气的地方，隐藏着可怕的真相。",
			"失去朋友，复仇心切的格伦。",
			"他带领探险队前往“蜜露”的巢穴。",
			"连记忆也夺走的甜蜜诅咒。其背后笼罩着巨大的阴影。"
		],
		"french": [
			"Un village oublié. Au milieu du doux parfum de miel, une terrible vérité était cachée.",
			"Glen, consumé par la vengeance après avoir perdu un ami.",
			"Il mena l'expédition vers le repaire de 'Honeydew'.",
			"Une douce malédiction qui dérobe même les souvenirs. L'ombre gigantesque qu'elle projette."
		],
		"spanish": [
			"Un pueblo olvidado. Un terrible secreto se escondía entre el dulce aroma a miel.",
			"Glen, ardiendo en deseos de venganza tras perder a un amigo.",
			"Él llevó a la expedición a la fortaleza de 'Honeydew'.",
			"Una dulce maldición que roba incluso los recuerdos. La gigantesca sombra que se cierne tras ella."
		],
		"vietnamese": [
			"Một ngôi làng bị lãng quên. Một sự thật kinh hoàng ẩn giấu giữa hương mật ong ngọt ngào.",
			"Glen, bốc cháy với lòng thù hận sau khi mất đi một người bạn.",
			"Anh ấy đã dẫn đoàn thám hiểm đến căn cứ của 'Honeydew'.",
			"Một lời nguyền ngọt ngào đánh cắp cả ký ức. Bóng tối khổng lồ bao trùm phía sau."
		],
		"thai": [
			"หมู่บ้านที่ถูกลืมเลือน กลิ่นหอมหวานของน้ำผึ้งปกคลุม แต่มันซ่อนความจริงอันน่าสะพรึงกลัวไว้",
			"เกล็น ผู้ลุกโชนด้วยไฟแค้นหลังสูญเสียเพื่อน",
			"เขาได้นำคณะสำรวจไปยังฐานที่มั่นของ 'ฮันนี่ดิว'",
			"คำสาปอันหอมหวานที่ช่วงชิงแม้ความทรงจำ เงาอันมหึมาที่ทอดอยู่เบื้องหลัง"
		],
		"hindi": [
			"एक भूला हुआ गाँव। शहद की मीठी खुशबू से भरी उस जगह में एक भयानक सच छिपा था।",
			"दोस्त को खोकर, बदले की आग में जलता हुआ ग्लेन।",
			"उसने अभियान को 'हनीड्यू' के गढ़ तक पहुँचाया।",
			"एक मीठा अभिशाप जो यादें भी चुरा लेता है। उसके पीछे पड़ा विशालकाय साया।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "glen",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "여기로 가면 '하니듀'의 본거지다. 놈이 내 친구를 꿀에 가뒀어.",
						"english": "This way leads to 'Honeydew's' stronghold. He trapped my friend in honey.",
						"japanese": "こちらへ行けば「ハニーデュー」の本拠地だ。奴が俺の友を蜂蜜に閉じ込めた。",
						"chinese": "这边是“蜜露”的巢穴。那家伙把我的朋友困在蜂蜜里了。",
						"french": "Par ici, c'est le repaire de 'Honeydew'. Il a piégé mon ami dans le miel.",
						"spanish": "Por aquí está la fortaleza de 'Honeydew'. Él atrapó a mi amigo en miel.",
						"vietnamese": "Lối này dẫn đến căn cứ của 'Honeydew'. Hắn đã nhốt bạn tôi vào mật ong.",
						"thai": "ทางนี้จะไปถึงฐานที่มั่นของ 'ฮันนี่ดิว' มันขังเพื่อนฉันไว้ในน้ำผึ้ง",
						"hindi": "यह रास्ता 'हनीड्यू' के गढ़ की ओर जाता है। उसने मेरे दोस्त को शहद में फँसा दिया।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "친구를 잃었다니… 유감이야.",
						"english": "You lost a friend... I'm sorry.",
						"japanese": "友を失ったとは…残念だ。",
						"chinese": "失去朋友……我很遗憾。",
						"french": "Tu as perdu un ami... Je suis désolé.",
						"spanish": "Perdiste a un amigo... Lo siento.",
						"vietnamese": "Mất một người bạn... tôi rất tiếc.",
						"thai": "เสียเพื่อนไป... น่าเสียดายนะ",
						"hindi": "दोस्त खो दिया... मुझे अफ़सोस है।"
					}
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "유감? 나는 복수할 거다. 너희도 도와야 해.",
						"english": "Sorry? I will have my revenge. You must help me.",
						"japanese": "残念？ 俺は復讐する。お前たちも手伝え。",
						"chinese": "遗憾？我要复仇。你们也得帮忙。",
						"french": "Désolé ? Je vais me venger. Vous devez m'aider.",
						"spanish": "¿Lo sientes? Me vengaré. Vosotros también debéis ayudar.",
						"vietnamese": "Tiếc sao? Tôi sẽ trả thù. Các người cũng phải giúp tôi.",
						"thai": "เสียใจงั้นเหรอ? ฉันจะแก้แค้น พวกนายก็ต้องช่วยฉันด้วย",
						"hindi": "अफ़सोस? मैं बदला लूँगा। तुम्हें भी मदद करनी होगी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우린 진실을 찾고 있어. 그 과정에 네 복수가 있다면…",
						"english": "We're looking for the truth. If your revenge is part of that...",
						"japanese": "我々は真実を探している。その過程に君の復讐があるなら…。",
						"chinese": "我们在寻找真相。如果你的复仇也在其中……",
						"french": "Nous cherchons la vérité. Si ta vengeance fait partie de cela...",
						"spanish": "Buscamos la verdad. Si tu venganza está en el camino...",
						"vietnamese": "Chúng tôi đang tìm kiếm sự thật. Nếu sự trả thù của anh nằm trong quá trình đó...",
						"thai": "เรากำลังตามหาความจริง ถ้าการแก้แค้นของนายเป็นส่วนหนึ่งของมัน...",
						"hindi": "हम सच की तलाश में हैं। अगर तुम्हारा बदला उस प्रक्रिया का हिस्सा है..."
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glen",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "버려진 마을. 모든 것이 완벽하게 굳어버린 채 정지해 있었다.",
						"english": "An abandoned village. Everything was perfectly frozen, still.",
						"japanese": "打ち捨てられた村。全てが完璧に固まり、静止していた。",
						"chinese": "废弃的村庄。一切都完美地凝固，静止着。",
						"french": "Un village abandonné. Tout était parfaitement figé, immobile.",
						"spanish": "Un pueblo abandonado. Todo estaba perfectamente congelado, inmóvil.",
						"vietnamese": "Một ngôi làng bị bỏ hoang. Mọi thứ hoàn toàn đóng băng, đứng yên.",
						"thai": "หมู่บ้านที่ถูกทอดทิ้ง ทุกสิ่งแข็งตัวสมบูรณ์และหยุดนิ่ง",
						"hindi": "एक वीरान गाँव। सब कुछ पूरी तरह से जम चुका था, स्थिर।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 마을이라고? 사람이 없어.",
						"english": "This is... a village? There's no one here.",
						"japanese": "これが…村だと？人がいない。",
						"chinese": "这就是……村庄？没有人。",
						"french": "C'est... un village ? Il n'y a personne.",
						"spanish": "¿Esto es... un pueblo? No hay nadie.",
						"vietnamese": "Đây là... một ngôi làng sao? Không có ai cả.",
						"thai": "นี่คือ... หมู่บ้านเหรอ? ไม่มีคนเลย",
						"hindi": "यह... एक गाँव है? कोई नहीं है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 꿀이 모든 걸 집어삼켰어. 사람들도… 기억도.",
						"english": "Yes. The honey devoured everything. People… and memories too.",
						"japanese": "ええ。蜜が全てを飲み込んだ。人々も…記憶も。",
						"chinese": "是啊。蜂蜜吞噬了一切。人们……还有记忆。",
						"french": "Oui. Le miel a tout englouti. Les gens… et les souvenirs aussi.",
						"spanish": "Sí. La miel lo devoró todo. La gente… y también los recuerdos.",
						"vietnamese": "Đúng vậy. Mật ong nuốt chửng mọi thứ. Con người… và cả ký ức nữa.",
						"thai": "ใช่แล้ว น้ำผึ้งกลืนกินทุกสิ่ง ผู้คน…และความทรงจำด้วย",
						"hindi": "हाँ। शहद ने सब कुछ निगल लिया। लोग… और यादें भी。"
					}
				},
				{
					"content": {
						"korean": "굳어버린 수액 방울 속 나비. 영원히 정지된 시간 같았다.",
						"english": "A butterfly in a hardened sap drop. Time seemed forever frozen.",
						"japanese": "固まった樹液の雫の中の蝶。永遠に時が止まったかのようだった。",
						"chinese": "凝固的树液滴中的蝴蝶。时间仿佛永远静止了。",
						"french": "Un papillon dans une goutte de sève durcie. Le temps semblait figé à jamais.",
						"spanish": "Una mariposa en una gota de savia endurecida. El tiempo parecía congelado para siempre.",
						"vietnamese": "Một con bướm trong giọt nhựa cây đông cứng. Thời gian dường như ngưng đọng mãi mãi.",
						"thai": "ผีเสื้อในหยดน้ำเลี้ยงที่แข็งตัว. ราวกับเวลาหยุดนิ่งชั่วนิรันดร์",
						"hindi": "कठोर हो चुकी राल की बूंद में एक तितली। समय हमेशा के लिए थम सा गया था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기억까지 앗아간다고?",
						"english": "It takes away memories too?",
						"japanese": "記憶まで奪うのか？",
						"chinese": "连记忆也会被夺走吗？",
						"french": "Ça emporte aussi les souvenirs ?",
						"spanish": "¿También se lleva los recuerdos?",
						"vietnamese": "Nó còn cướp đi cả ký ức sao?",
						"thai": "มันเอาความทรงจำไปหมดเลยเหรอ?",
						"hindi": "क्या यह यादें भी छीन लेता है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "glen",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 친구도… 꿀에 갇히기 전에 모든 걸 잊었을 거야. 끔찍해.",
						"english": "My friend too… must have forgotten everything before being trapped in the honey. Horrible.",
						"japanese": "私の友人も…蜜に囚われる前に全てを忘れてしまったのだろう。恐ろしい。",
						"chinese": "我的朋友……在被困在蜂蜜里之前，肯定也忘记了一切。太可怕了。",
						"french": "Mon ami aussi… a dû tout oublier avant d'être piégé dans le miel. Horrible.",
						"spanish": "Mi amigo también… debe haberlo olvidado todo antes de quedar atrapado en la miel. Horrible.",
						"vietnamese": "Bạn tôi cũng vậy… chắc hẳn đã quên hết mọi thứ trước khi bị mắc kẹt trong mật ong. Thật kinh khủng.",
						"thai": "เพื่อนของฉันก็คงจะ…ลืมทุกอย่างไปแล้วก่อนที่จะติดอยู่ในน้ำผึ้ง. น่ากลัวจริงๆ",
						"hindi": "मेरा दोस्त भी… शहद में फंसने से पहले सब कुछ भूल गया होगा। भयानक।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 꿀 냄새… 점점 진해지는 것 같아.",
						"english": "This honey scent… it seems to be getting stronger.",
						"japanese": "この蜜の匂い…だんだん濃くなっているようだ。",
						"chinese": "这蜂蜜的味道……似乎越来越浓了。",
						"french": "Cette odeur de miel… elle semble devenir plus forte.",
						"spanish": "Este olor a miel… parece que se está volviendo más fuerte.",
						"vietnamese": "Mùi mật ong này… dường như đang trở nên nồng hơn.",
						"thai": "กลิ่นน้ำผึ้งนี้…ดูเหมือนจะเข้มข้นขึ้นเรื่อยๆ",
						"hindi": "इस शहद की गंध… यह और तेज़ होती जा रही है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시냇물 근처, 부서진 가면 형태의 도자기 조각이 뒹굴었다.",
						"english": "Near the stream, fragments of pottery in the shape of a broken mask lay scattered.",
						"japanese": "小川の近くには、壊れた仮面のような陶器の破片が転がっていた。",
						"chinese": "小溪边，散落着破碎面具形状的陶器碎片。",
						"french": "Près du ruisseau, des fragments de poterie en forme de masque brisé jonchaient le sol.",
						"spanish": "Cerca del arroyo, trozos de cerámica con forma de máscara rota yacían esparcidos.",
						"vietnamese": "Gần con suối, những mảnh gốm hình chiếc mặt nạ vỡ nằm rải rác.",
						"thai": "ใกล้ลำธาร เศษเครื่องปั้นดินเผารูปหน้ากากที่แตกหักเกลื่อนกลาด",
						"hindi": "नदी के पास, टूटे हुए मुखौटे के आकार के मिट्टी के बर्तन के टुकड़े पड़े थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 모든 게 '하니듀' 놈의 짓이야. 내가 끝낼 거다.",
						"english": "All of this is 'Honeydew's' doing. I'll put an end to it.",
						"japanese": "これら全ては『ハニーデュー』の仕業だ。私が終わらせる。",
						"chinese": "这一切都是‘蜜露’那家伙干的。我来结束它。",
						"french": "Tout cela est l'œuvre de ce 'Honeydew'. J'y mettrai fin.",
						"spanish": "Todo esto es obra de 'Honeydew'. Yo acabaré con esto.",
						"vietnamese": "Tất cả những chuyện này là do tên 'Honeydew' gây ra. Ta sẽ kết thúc nó.",
						"thai": "ทั้งหมดนี้เป็นฝีมือของ 'ฮันนี่ดิว' ฉันจะยุติมันเอง",
						"hindi": "यह सब 'हनीड्यू' का काम है। मैं इसका अंत करूँगा।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "복수심에 눈이 멀지 마. 진실을 봐야 해.",
						"english": "Don't be blinded by vengeance. You must see the truth.",
						"japanese": "復讐心に目を眩まされるな。真実を見なければ。",
						"chinese": "不要被复仇蒙蔽双眼。你必须看到真相。",
						"french": "Ne sois pas aveuglé par la vengeance. Tu dois voir la vérité.",
						"spanish": "No te ciegues por la venganza. Debes ver la verdad.",
						"vietnamese": "Đừng để lòng thù hận làm mờ mắt. Ngươi phải nhìn thấy sự thật.",
						"thai": "อย่าให้ความพยาบาททำให้คุณตาบอด. คุณต้องเห็นความจริง",
						"hindi": "बदले की भावना से अंधा मत हो। तुम्हें सच देखना होगा।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "숲은 더욱 깊어졌다. 버려진 마을의 그림자가 발목을 잡았다.",
						"english": "The forest grew deeper. The shadow of the abandoned village clung to my ankles.",
						"japanese": "森はさらに深くなった。廃れた村の影が足首にまとわりついた。",
						"chinese": "森林变得更加幽深。废弃村庄的影子缠住了我的脚踝。",
						"french": "La forêt s'épaississait. L'ombre du village abandonné agrippait mes chevilles.",
						"spanish": "El bosque se hizo más profundo. La sombra del pueblo abandonado se aferraba a mis tobillos.",
						"vietnamese": "Rừng càng lúc càng sâu. Bóng tối của ngôi làng hoang phế bám chặt lấy mắt cá chân.",
						"thai": "ป่าลึกขึ้นเรื่อยๆ เงาของหมู่บ้านร้างเกาะกุมข้อเท้าของฉัน",
						"hindi": "जंगल और गहरा हो गया। परित्यक्त गाँव की छाया मेरे टखनों से लिपट गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 물러날 곳은 없어. '하니듀'는 여기 어딘가에 있어.",
						"english": "There's nowhere left to retreat. 'Honeydew' is somewhere here.",
						"japanese": "もう退がる場所はない。『ハニーデュー』はここ、どこかにいる。",
						"chinese": "已无退路。‘蜜露’就在这里的某个地方。",
						"french": "Il n'y a plus de retraite possible. 'Honeydew' est quelque part ici.",
						"spanish": "Ya no hay marcha atrás. 'Honeydew' está en algún lugar por aquí.",
						"vietnamese": "Không còn đường lui nữa. 'Honeydew' đang ở đâu đó quanh đây.",
						"thai": "ไม่มีทางถอยอีกแล้ว 'ฮันนี่ดิว' อยู่ที่ไหนสักแห่งที่นี่",
						"hindi": "पीछे हटने की कोई जगह नहीं है। 'हनीड्यू' यहीं कहीं है।"
					}
				},
				{
					"content": {
						"korean": "온몸에 꿀이 스며드는 것 같아. 끈적하고… 기분 나빠.",
						"english": "Honey seeps into my body. It's sticky... and awful.",
						"japanese": "全身に蜜が染み込むようだ。べたべたして…気持ち悪い。",
						"chinese": "蜂蜜渗透全身。黏糊糊的…真恶心。",
						"french": "Le miel s'infiltre en moi. C'est collant... et dégoûtant.",
						"spanish": "La miel se filtra en mi cuerpo. Es pegajoso... y asqueroso.",
						"vietnamese": "Mật ong thấm vào toàn thân. Dính nhớp… thật khó chịu.",
						"thai": "น้ำผึ้งซึมเข้าสู่ร่าง เหนียวเหนอะ… ไม่สบายเลย",
						"hindi": "शहद मेरे पूरे शरीर में रिस रहा है। यह चिपचिपा और... घिनौना है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "느낄 수 있어. 놈의 기운이. 친구의 복수… 반드시.",
						"english": "I can feel it. His presence. My friend's revenge... must be done.",
						"japanese": "感じる…奴の気配。友の復讐…必ず。",
						"chinese": "我能感觉到。他的气息。朋友的复仇…必须。",
						"french": "Je le sens. Sa présence. La vengeance de mon ami... à tout prix.",
						"spanish": "Lo siento. Su presencia. La venganza de mi amigo... cueste lo que cueste.",
						"vietnamese": "Ta cảm nhận được. Hơi thở của hắn. Báo thù cho bạn… nhất định phải làm.",
						"thai": "ข้ารู้สึกได้ถึงมัน กลิ่นอายของมัน การแก้แค้นให้สหาย... ต้องสำเร็จ",
						"hindi": "मैं इसे महसूस कर सकता हूँ। उसकी उपस्थिति। मेरे दोस्त का बदला... अवश्य।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝까지 가자.",
						"english": "...Let's go all the way.",
						"japanese": "…最後まで行くぞ。",
						"chinese": "…坚持到底。",
						"french": "...Allons jusqu'au bout.",
						"spanish": "...Vayamos hasta el final.",
						"vietnamese": "…Đi đến cùng.",
						"thai": "...ไปให้สุดทาง",
						"hindi": "...चलो अंत तक चलते हैं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는 그저 숲의… 의지를 따랐을 뿐…",
						"english": "Ugh... I merely followed... the will of the forest...",
						"japanese": "くっ…私はただ森の…意志に従っただけだ…",
						"chinese": "呃…我只是…遵循了森林的意志…",
						"french": "Ugh... J'ai simplement suivi... la volonté de la forêt...",
						"spanish": "Ugh... Yo solo seguí... la voluntad del bosque...",
						"vietnamese": "Khặc… Ta chỉ là… tuân theo ý chí của rừng mà thôi…",
						"thai": "อึก… ข้าแค่… ทำตามเจตจำนงของป่า…",
						"hindi": "उफ़... मैंने तो बस... जंगल की इच्छा का पालन किया..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "의지? 네 놈의 죄는 용서받지 못해.",
						"english": "Will? Your sins shall not be forgiven.",
						"japanese": "意志だと？貴様の罪は許されない。",
						"chinese": "意志？你的罪不可饶恕。",
						"french": "Volonté ? Tes péchés ne seront pas pardonnés.",
						"spanish": "¿Voluntad? Tus pecados no serán perdonados.",
						"vietnamese": "Ý chí ư? Tội lỗi của ngươi sẽ không được tha thứ.",
						"thai": "เจตจำนงงั้นรึ? บาปของเจ้าไม่มีวันได้รับการอภัย",
						"hindi": "इच्छा? तुम्हारे पाप क्षमा नहीं किए जाएंगे।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "숲의 의지라니… 또 다른 진실이 있는 건가.",
						"english": "Forest's will...? Is there another truth?",
						"japanese": "森の意思だと…？他に真実があるのか。",
						"chinese": "森林的意志……还有别的真相吗？",
						"french": "La volonté de la forêt...? Y a-t-il une autre vérité ?",
						"spanish": "¿La voluntad del bosque...? ¿Hay otra verdad?",
						"vietnamese": "Ý chí của rừng...? Còn một sự thật khác sao?",
						"thai": "เจตจำนงแห่งป่า...? มีความจริงอื่นอีกหรือนี่?",
						"hindi": "वन की इच्छा...? क्या कोई और सच है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "glen"
				},
				{
					"speaker": "glen",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…친구의 복수는 끝났다. 하지만…",
						"english": "...My friend's revenge is over. But...",
						"japanese": "…友の復讐は終わった。だが…",
						"chinese": "……朋友的复仇结束了。但是……",
						"french": "...La vengeance de mon ami est terminée. Mais...",
						"spanish": "...La venganza de mi amigo ha terminado. Pero...",
						"vietnamese": "...Sự trả thù của bạn ta đã kết thúc. Nhưng...",
						"thai": "...การแก้แค้นของสหายจบลงแล้ว แต่...",
						"hindi": "...मेरे दोस्त का बदला खत्म हो गया। लेकिन..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 숲의 가장 깊은 곳. 더 거대한 존재가 깨어나고 있었다.",
						"english": "Yet, in the deepest part of the forest, a greater being was awakening.",
						"japanese": "しかし、森の最も深い場所で、より巨大な存在が目覚めつつあった。",
						"chinese": "然而，在森林最深处，一个更强大的存在正在苏醒。",
						"french": "Cependant, dans la partie la plus profonde de la forêt, un être plus grand s'éveillait.",
						"spanish": "Sin embargo, en lo más profundo del bosque, un ser más grande estaba despertando.",
						"vietnamese": "Thế nhưng, sâu thẳm nhất trong rừng, một thực thể vĩ đại hơn đang thức tỉnh.",
						"thai": "ทว่า ในส่วนที่ลึกที่สุดของป่า สิ่งมีชีวิตที่ยิ่งใหญ่กว่ากำลังตื่นขึ้น",
						"hindi": "फिर भी, जंगल के सबसे गहरे हिस्से में, एक और विशाल प्राणी जाग रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 숲의 모든 꿀이 응축된 존재 같았다.",
						"english": "A giant shadow blocked the way. It seemed like an entity condensed from all the honey in the forest.",
						"japanese": "巨大な影が道を塞いだ。森の全ての蜜が凝縮された存在のようだった。",
						"chinese": "一个巨大的阴影挡住了去路。它就像是森林中所有蜂蜜的凝结体。",
						"french": "Une ombre gigantesque bloquait le chemin. Elle semblait être une entité condensée de tout le miel de la forêt.",
						"spanish": "Una sombra gigante bloqueó el camino. Parecía una entidad condensada de toda la miel del bosque.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối. Nó giống như một thực thể ngưng tụ từ tất cả mật ong trong rừng.",
						"thai": "เงาขนาดมหึมาบดบังทาง ราวกับเป็นร่างที่รวมน้ำผึ้งทั้งหมดในป่าไว้",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह जंगल के सारे शहद से संघनित एक इकाई जैसा लग रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감히 이곳까지 오다니. 어리석은 인간들.",
						"english": "To dare come this far. Foolish humans.",
						"japanese": "よくもここまで来たな。愚かな人間たちめ。",
						"chinese": "竟敢来到这里。愚蠢的人类。",
						"french": "Oser venir jusqu'ici. Stupides humains.",
						"spanish": "¿Cómo osáis llegar hasta aquí? Estúpidos humanos.",
						"vietnamese": "Dám đến tận đây. Lũ người ngu ngốc.",
						"thai": "กล้าดียังไงถึงมาที่นี่ มนุษย์โง่เง่าทั้งหลาย",
						"hindi": "इतनी दूर आने की हिम्मत कैसे हुई। मूर्ख मनुष्य।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "네놈이 '하니듀'인가? 내 친구를… 용서 못 해!",
						"english": "Are you 'Honeydew'? My friend... I won't forgive you!",
						"japanese": "貴様が『ハニーデュー』か？友を…許さない！",
						"chinese": "你就是'甘露'吗？我的朋友…不可饶恕！",
						"french": "Es-tu 'Honeydew' ? Mon ami... Je ne te pardonnerai jamais !",
						"spanish": "¿Eres tú 'Rocío de Miel'? ¡A mi amigo... no te perdonaré!",
						"vietnamese": "Ngươi là 'Honeydew' sao? Bạn ta… ta sẽ không tha thứ!",
						"thai": "แกคือ 'ฮันนี่ดิว' สินะ? เพื่อนข้า... ข้าไม่ให้อภัย!",
						"hindi": "क्या तुम 'हनीड्यू' हो? मेरे दोस्त को... मैं तुम्हें माफ नहीं करूँगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "복수심은 달콤한 독. 너도 곧 꿀 속에 잠길 것이다.",
						"english": "Revenge is sweet poison. You too shall soon drown in honey.",
						"japanese": "復讐心は甘い毒だ。お前もすぐに蜜の中に沈むだろう。",
						"chinese": "复仇是甜蜜的毒药。你很快也会沉溺于蜂蜜之中。",
						"french": "La vengeance est un doux poison. Toi aussi, tu seras bientôt englouti par le miel.",
						"spanish": "La venganza es un dulce veneno. Tú también te ahogarás pronto en la miel.",
						"vietnamese": "Lòng thù hận là thuốc độc ngọt ngào. Ngươi cũng sẽ sớm chìm vào mật ong thôi.",
						"thai": "ความแค้นคือยาพิษอันหอมหวาน เจ้าเองก็จะจมดิ่งลงในน้ำผึ้งไม่ช้าก็เร็ว",
						"hindi": "बदला एक मीठा जहर है। तुम भी जल्द ही शहद में डूब जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네가 한 짓을 똑똑히 보게 해줄게.",
						"english": "Shut up! I'll make you see what you've done.",
						"japanese": "黙れ！お前のやったことを、とくと見せてやる。",
						"chinese": "闭嘴！我会让你清楚地看到你做了什么。",
						"french": "Tais-toi ! Je vais te faire voir ce que tu as fait.",
						"spanish": "¡Cállate! Te haré ver lo que has hecho.",
						"vietnamese": "Câm miệng! Ta sẽ cho ngươi thấy rõ những gì ngươi đã làm.",
						"thai": "หุบปาก! ข้าจะแสดงให้เจ้าเห็นจะๆ ว่าเจ้าทำอะไรลงไปบ้าง",
						"hindi": "चुप रहो! मैं तुम्हें दिखाऊंगा कि तुमने क्या किया है।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직 멀었군. 너희의 분노는 꿀이 될 뿐이다.",
						"english": "Not yet. Your rage will only become honey.",
						"japanese": "まだまだだな。お前たちの怒りは、ただの蜜となるだけだ。",
						"chinese": "还差得远呢。你们的愤怒只会变成蜜糖。",
						"french": "Pas encore. Votre rage ne deviendra que du miel.",
						"spanish": "Todavía no. Vuestra ira solo se convertirá en miel.",
						"vietnamese": "Vẫn còn xa lắm. Nỗi tức giận của các ngươi sẽ chỉ hóa thành mật ngọt thôi.",
						"thai": "ยังห่างไกลนัก ความโกรธแค้นของพวกเจ้าจะเป็นแค่ความหวานเท่านั้น",
						"hindi": "अभी नहीं। तुम्हारा क्रोध केवल शहद बनेगा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장… 물러설 수 없어.",
						"english": "Damn it... I can't back down.",
						"japanese": "くそ…退けない。",
						"chinese": "可恶……不能退缩。",
						"french": "Maudit... Je ne peux pas reculer.",
						"spanish": "Maldición... No puedo retroceder.",
						"vietnamese": "Chết tiệt... Không thể lùi bước.",
						"thai": "ให้ตายสิ... ถอยไม่ได้แล้ว",
						"hindi": "धिक्कार है... मैं पीछे नहीं हट सकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "glen",
					"content": {
						"korean": "…끝까지 간다. 반드시.",
						"english": "...I'll see it through. No matter what.",
						"japanese": "…最後まで行く。必ず。",
						"chinese": "……我会坚持到底。一定。",
						"french": "...J'irai jusqu'au bout. C'est certain.",
						"spanish": "...Llegaré hasta el final. Cueste lo que cueste.",
						"vietnamese": "...Đi đến cùng. Nhất định.",
						"thai": "...จะไปให้ถึงที่สุด แน่นอน",
						"hindi": "...मैं इसे अंत तक ले जाऊंगा। निश्चित रूप से।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
