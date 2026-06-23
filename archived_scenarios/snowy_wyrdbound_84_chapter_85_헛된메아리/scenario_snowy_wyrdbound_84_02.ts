export const scenario_snowy_wyrdbound_84_02 = {
	"scenario_id": "snowy_wyrdbound_84_02",
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
			"영원히 얼어붙은 대지. 빙하의 심장이 속삭이기 시작했다.",
			"환영은 현실을 뒤틀었고, 그림자는 이성을 잠식했다.",
			"의심은 전염병처럼 번져, 모두를 편집증으로 몰아넣었다."
		],
		"english": [
			"The eternally frozen land. The glacier's heart began to whisper.",
			"Illusions twisted reality, and shadows devoured reason.",
			"Doubt spread like a plague, driving everyone to paranoia."
		],
		"japanese": [
			"永遠に凍りついた大地。氷河の心が囁き始めた。",
			"幻影は現実を歪め、影は理性を蝕んだ。",
			"疑念は疫病のように広がり、皆を偏執病に陥れた。"
		],
		"chinese": [
			"永恒冻结的大地。冰川之心开始低语。",
			"幻象扭曲了现实，阴影吞噬了理智。",
			"怀疑像瘟疫般蔓延，将所有人推向偏执。"
		],
		"french": [
			"La terre éternellement gelée. Le cœur du glacier a commencé à murmurer.",
			"Les illusions ont tordu la réalité, et les ombres ont dévoré la raison.",
			"Le doute s'est répandu comme une épidémie, poussant tout le monde à la paranoïa."
		],
		"spanish": [
			"La tierra eternamente congelada. El corazón del glaciar comenzó a susurrar.",
			"Las ilusiones distorsionaron la realidad, y las sombras devoraron la razón.",
			"La duda se extendió como una plaga, llevando a todos a la paranoia."
		],
		"vietnamese": [
			"Miền đất đóng băng vĩnh cửu. Trái tim băng hà bắt đầu thì thầm.",
			"Ảo ảnh bóp méo thực tại, bóng tối nuốt chửng lý trí.",
			"Hoài nghi lan rộng như dịch bệnh, đẩy mọi người vào trạng thái hoang tưởng."
		],
		"thai": [
			"ดินแดนที่เยือกแข็งชั่วนิรันดร์. หัวใจของธารน้ำแข็งเริ่มกระซิบแผ่วเบา.",
			"ภาพลวงตาบิดเบือนความเป็นจริง และเงามืดกลืนกินเหตุผล.",
			"ความสงสัยแพร่กระจายเหมือนโรคระบาด ผลักดันทุกคนสู่ความหวาดระแวง."
		],
		"hindi": [
			"शाश्वत जमी हुई भूमि। ग्लेशियर का दिल फुसफुसाने लगा।",
			"भ्रमों ने वास्तविकता को विकृत कर दिया, और छायाओं ने विवेक को निगल लिया।",
			"संदेह एक प्लेग की तरह फैल गया, जिसने सभी को व्यामोह में धकेल दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 빙하의 심장이 빠르게 뛰고 있었다.",
						"english": "The cold glacier's heart was beating fast.",
						"japanese": "冷たい氷河の心臓が速く脈打っていた。",
						"chinese": "冰冷冰川的心脏快速跳动着。",
						"french": "Le cœur froid du glacier battait rapidement.",
						"spanish": "El frío corazón del glaciar latía rápidamente.",
						"vietnamese": "Trái tim băng giá đang đập nhanh.",
						"thai": "หัวใจของธารน้ำแข็งอันเย็นเยียบกำลังเต้นรัว.",
						"hindi": "ठंडे ग्लेशियर का दिल तेज़ी से धड़क रहा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이상한 기분이야. 뭔가… 보여.",
						"english": "It's a strange feeling. I... see something.",
						"japanese": "変な気分だ。何か…見える。",
						"chinese": "感觉很奇怪。我…看到了什么。",
						"french": "C'est une sensation étrange. Je… vois quelque chose.",
						"spanish": "Es una sensación extraña. Algo… veo.",
						"vietnamese": "Cảm giác thật kỳ lạ. Tôi… thấy gì đó.",
						"thai": "รู้สึกแปลกๆ ฉัน…เห็นบางอย่าง.",
						"hindi": "यह एक अजीब एहसास है। मुझे… कुछ दिख रहा है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "보여? 뭘? 환영이겠지.",
						"english": "See? What? It must be an illusion.",
						"japanese": "見える？何を？幻影だろう。",
						"chinese": "看到？什么？那一定是幻觉。",
						"french": "Voir ? Quoi ? Ce doit être une illusion.",
						"spanish": "¿Ver? ¿Qué? Debe ser una ilusión.",
						"vietnamese": "Thấy à? Thấy gì? Chắc là ảo ảnh thôi.",
						"thai": "เห็นเหรอ? เห็นอะไร? คงเป็นแค่ภาพลวงตา.",
						"hindi": "दिख रहा है? क्या? यह भ्रम ही होगा।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "빙하가 속삭이기 시작했군. 예언은 축복이자 저주, 이젠 너희도 알게 될 거야.",
						"english": "The glacier has begun to whisper. Prophecy is both a blessing and a curse, and now you will know.",
						"japanese": "氷河が囁き始めたな。予言は祝福であり呪い、お前たちも今に知るだろう。",
						"chinese": "冰川开始低语了。预言既是祝福也是诅咒，现在你们也会明白的。",
						"french": "Le glacier a commencé à murmurer. La prophétie est à la fois une bénédiction et une malédiction, et maintenant vous le saurez.",
						"spanish": "El glaciar ha empezado a susurrar. La profecía es una bendición y una maldición, y ahora vosotros también lo sabréis.",
						"vietnamese": "Băng hà đã bắt đầu thì thầm. Lời tiên tri vừa là phước lành vừa là lời nguyền, giờ đây các ngươi cũng sẽ biết.",
						"thai": "ธารน้ำแข็งเริ่มกระซิบแล้ว คำทำนายคือทั้งพรและคำสาป ตอนนี้พวกเจ้าก็จะได้รู้.",
						"hindi": "ग्लेशियर फुसफुसाने लगा है। भविष्यवाणी एक वरदान और अभिशाप दोनों है, अब तुम्हें भी पता चलेगा।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저 자 좀 이상한데?",
						"english": "That person is a bit strange, no?",
						"japanese": "あの人、ちょっとおかしいんじゃない？",
						"chinese": "那家伙有点奇怪吧？",
						"french": "Cette personne est un peu étrange, non ?",
						"spanish": "Esa persona es un poco extraña, ¿no?",
						"vietnamese": "Người đó hơi lạ phải không?",
						"thai": "คนนั้นแปลกๆ นะ?",
						"hindi": "वह आदमी थोड़ा अजीब है, है ना?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 소문이나 퍼뜨리고 다니는군. 무시해.",
						"english": "Spreading rumors again. Ignore him.",
						"japanese": "また噂を広めてるのか。無視しろ。",
						"chinese": "又在散布谣言了。别理他。",
						"french": "Encore en train de répandre des rumeurs. Ignore-le.",
						"spanish": "Otra vez extendiendo rumores. Ignórale.",
						"vietnamese": "Lại tung tin đồn nữa rồi. Bỏ qua đi.",
						"thai": "เขากำลังปล่อยข่าวลืออีกแล้ว. ไม่ต้องสนใจ.",
						"hindi": "फिर अफवाहें फैला रहा है। उसे नज़रअंदाज़ करो।"
					},
					"speaker": "character_2"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영은 더욱 선명해졌다. 현실과 망상의 경계가 흐려졌다.",
						"english": "The illusions became clearer. The line between reality and delusion blurred.",
						"japanese": "幻影はさらに鮮明になった。現実と妄想の境界が曖昧になった。",
						"chinese": "幻象变得更加清晰。现实与妄想的界限模糊了。",
						"french": "Les illusions sont devenues plus nettes. La frontière entre réalité et délire s'est estompée.",
						"spanish": "Las ilusiones se hicieron más claras. La línea entre la realidad y la ilusión se difuminó.",
						"vietnamese": "Ảo ảnh trở nên rõ ràng hơn. Ranh giới giữa thực tại và ảo ảnh đã mờ đi.",
						"thai": "ภาพลวงตาชัดเจนยิ่งขึ้น. เส้นแบ่งระหว่างความเป็นจริงและความหลงผิดพร่าเลือน.",
						"hindi": "भ्रम और अधिक स्पष्ट हो गए। वास्तविकता और भ्रम के बीच की रेखा धुंधली हो गई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아까부터… 자꾸 헛것이 보여.",
						"english": "I've been seeing things...",
						"japanese": "さっきから… 幻覚が。",
						"chinese": "刚才起… 总看到幻象。",
						"french": "Depuis tout à l'heure… je vois des choses.",
						"spanish": "Desde hace un rato… veo cosas.",
						"vietnamese": "Từ nãy giờ… tôi cứ thấy ảo ảnh.",
						"thai": "ตั้งแต่เมื่อกี้… ฉันเห็นภาพหลอน",
						"hindi": "अभी से… मुझे कुछ दिख रहा है।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "봤지? 빙하의 저주가 시작된 거야.",
						"english": "See? The Glacier's Curse has begun.",
						"japanese": "見たか？ 氷河の呪いが始まったんだ。",
						"chinese": "看到了吧？冰河的诅咒开始了。",
						"french": "Tu as vu ? La Malédiction du Glacier a commencé.",
						"spanish": "¿Lo ves? La Maldición del Glaciar ha comenzado.",
						"vietnamese": "Thấy chưa? Lời nguyền Băng Hà đã bắt đầu rồi.",
						"thai": "เห็นไหม? คำสาปน้ำแข็งเริ่มขึ้นแล้ว",
						"hindi": "देखा? हिमयुग का अभिशाप शुरू हो गया है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "예언은… 진실을 아는 자를 파멸시킨다.",
						"english": "The prophecy… destroys those who know the truth.",
						"japanese": "予言は… 真実を知る者を破滅させる。",
						"chinese": "预言… 会毁灭知晓真相之人。",
						"french": "La prophétie… détruit ceux qui connaissent la vérité.",
						"spanish": "La profecía… destruye a quienes conocen la verdad.",
						"vietnamese": "Lời tiên tri… sẽ hủy diệt kẻ biết sự thật.",
						"thai": "คำทำนาย… ทำลายผู้ที่รู้ความจริง",
						"hindi": "भविष्यवाणी… सत्य जानने वालों को नष्ट कर देती है।"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "헛소리 마. 그냥 피곤한 거야.",
						"english": "Stop spouting nonsense. You're just tired.",
						"japanese": "馬鹿なこと言うな。ただ疲れてるだけだ。",
						"chinese": "别胡说。你只是累了。",
						"french": "Arrête tes balivernes. Tu es juste fatigué.",
						"spanish": "No digas tonterías. Solo estás cansado.",
						"vietnamese": "Đừng có nói nhảm. Cậu chỉ mệt thôi.",
						"thai": "อย่าเพ้อเจ้อเลย แค่นายเหนื่อยเท่านั้นแหละ",
						"hindi": "बकवास बंद करो। तुम बस थके हुए हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "근데… 진짜 내 눈앞에 뭔가 있었어.",
						"english": "But… there really was something right in front of me.",
						"japanese": "でも… 本当に目の前に何かいたんだ。",
						"chinese": "可是… 我眼前真的有东西。",
						"french": "Mais… il y avait vraiment quelque chose devant mes yeux.",
						"spanish": "Pero… de verdad había algo delante de mí.",
						"vietnamese": "Nhưng mà… thật sự có gì đó ngay trước mắt tôi.",
						"thai": "แต่… มันมีบางอย่างอยู่ตรงหน้าฉันจริงๆ",
						"hindi": "लेकिन… सच में मेरी आँखों के सामने कुछ था।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "차가운 공기가 폐부를 찔렀다. 이성은 점점 마비되었다.",
						"english": "The cold air pierced my lungs. My reason slowly numbed.",
						"japanese": "冷たい空気が肺を突き刺した。理性は次第に麻痺していった。",
						"chinese": "冰冷的空气刺入肺腑。理性渐渐麻痹了。",
						"french": "L'air froid transperçait mes poumons. Ma raison s'engourdissait peu à peu.",
						"spanish": "El aire frío me heló los pulmones. La razón se adormecía lentamente.",
						"vietnamese": "Không khí lạnh buốt đâm xuyên phổi. Lý trí dần dần tê liệt.",
						"thai": "อากาศเย็นยะเยือกเสียดแทงปอด สติสัมปชัญญะค่อยๆ ชาชิน",
						"hindi": "ठंडी हवा फेफड़ों को भेद गई। तर्क धीरे-धीरे सुन्न होता गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "(벽을 더듬으며) 여기가… 진짜 벽이야?",
						"english": "(Fumbling the wall) Is this… a real wall?",
						"japanese": "（壁を手探りしながら）ここが… 本当の壁か？",
						"chinese": "(摸索着墙壁) 这里… 是真墙吗？",
						"french": "(Tâtant le mur) Est-ce… un vrai mur ?",
						"spanish": "(Tanteando la pared) ¿Esto… es una pared de verdad?",
						"vietnamese": "(Mò mẫm bức tường) Đây có phải… là bức tường thật không?",
						"thai": "(คลำกำแพง) นี่… กำแพงจริงเหรอ?",
						"hindi": "(दीवार को टटोलते हुए) क्या यह… असली दीवार है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "진짜? 가짜? 뭘 믿는데?",
						"english": "Real? Fake? What am I supposed to believe?",
						"japanese": "本物？ 偽物？ 何を信じればいい？",
						"chinese": "真的？假的？该相信什么？",
						"french": "Vrai ? Faux ? Que croire ?",
						"spanish": "¿Real? ¿Falso? ¿Qué debo creer?",
						"vietnamese": "Thật sao? Giả sao? Nên tin vào điều gì đây?",
						"thai": "จริง? ปลอม? จะเชื่ออะไรดี?",
						"hindi": "असली? नकली? किस पर यकीन करूँ?"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "오래된 문헌에 그랬어. '빙하의 예언은 축복인 동시에 그것을 온전히 알게 된 자를 파멸시키는 저주'라고.",
						"english": "Ancient texts said it: 'The Glacier's Prophecy is both a blessing and a curse that destroys those who fully grasp it.'",
						"japanese": "古文書にそう書いてあった。「氷河の予言は祝福であると同時に、それを完全に知る者を破滅させる呪い」だと。",
						"chinese": "古老文献里记载着：‘冰河的预言既是祝福，也是毁灭完全知晓它之人的诅咒。’",
						"french": "Les textes anciens le disaient : 'La Prophétie du Glacier est à la fois une bénédiction et une malédiction qui détruit ceux qui la comprennent pleinement.'",
						"spanish": "Así lo decían los textos antiguos: 'La Profecía del Glaciar es tanto una bendición como una maldición que destruye a quienes la comprenden por completo'.",
						"vietnamese": "Tài liệu cổ đã ghi chép: 'Lời tiên tri Băng Hà vừa là phước lành, đồng thời là lời nguyền hủy diệt kẻ nào hiểu rõ nó.'",
						"thai": "เอกสารเก่าแก่ระบุไว้ว่า 'คำทำนายน้ำแข็งเป็นทั้งพรและคำสาปที่ทำลายผู้ที่รู้แจ้งถึงมัน'",
						"hindi": "प्राचीन ग्रंथों में लिखा था: 'हिमयुग की भविष्यवाणी एक आशीर्वाद होने के साथ-साथ एक अभिशाप भी है जो इसे पूरी तरह समझने वालों को नष्ट कर देती है।'"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 예언이라는 게 진짜면 어떡해?",
						"english": "What if that prophecy is real?",
						"japanese": "あの予言が本当だったらどうする？",
						"chinese": "如果那个预言是真的怎么办？",
						"french": "Et si cette prophétie était réelle ?",
						"spanish": "¿Y si esa profecía es real?",
						"vietnamese": "Nếu lời tiên tri đó là thật thì sao?",
						"thai": "ถ้าคำทำนายนั้นเป็นเรื่องจริงล่ะ?",
						"hindi": "अगर वह भविष्यवाणी सच हुई तो क्या होगा?"
					},
					"speaker": "character_1",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "설마… 설마 우리가 속고 있는 건가? 서로를…?",
						"english": "Are we... are we being played? Against each other?",
						"japanese": "まさか…まさか、我々は騙されているのか？互いに…？",
						"chinese": "难道……我们被骗了？彼此之间？",
						"french": "Serions-nous... serions-nous manipulés ? Les uns contre les autres ?",
						"spanish": "¿Será que... nos estamos engañando? ¿Unos a otros?",
						"vietnamese": "Chẳng lẽ... chúng ta đang bị lừa dối? Giữa đôi bên?",
						"thai": "หรือว่า...พวกเรากำลังถูกหลอก? โดยกันและกัน?",
						"hindi": "कहीं... हम एक-दूसरे को धोखा तो नहीं दे रहे?"
					},
					"speaker": "character_2"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 서로에게서 등을 돌렸다. 의심은 살얼음처럼 얇게 깔렸다.",
						"english": "The expedition turned their backs. Suspicion, thin as ice, began to spread.",
						"japanese": "探検隊は互いに背を向けた。疑念は薄氷のように広がっていく。",
						"chinese": "探险队背对而立。疑虑如薄冰般蔓延。",
						"french": "L'expédition se détourna les uns des autres. Le doute s'insinua, fin comme la glace.",
						"spanish": "La expedición se dio la espalda. La sospecha se extendió, delgada como el hielo.",
						"vietnamese": "Đoàn thám hiểm quay lưng lại. Sự nghi ngờ lan rộng mỏng như băng.",
						"thai": "คณะสำรวจหันหลังให้กัน ความสงสัยแผ่บางเฉียบดุจน้ำแข็ง.",
						"hindi": "अभियान दल ने एक-दूसरे से पीठ फेर ली। संदेह बर्फ की पतली परत-सा फैल गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "(다른 캐릭터를 노려보며) 넌… 누구 편이야?",
						"english": "(Glaring at another character) Whose side are you on?",
						"japanese": "(他の仲間を睨みつけながら) お前は…誰の味方だ？",
						"chinese": "(怒视着其他角色) 你…是谁的人？",
						"french": "(Regardant l'autre personnage) De quel côté es-tu ?",
						"spanish": "(Mirando a otro personaje) ¿Tú... de qué lado estás?",
						"vietnamese": "(Lườm một nhân vật khác) Ngươi... là phe ai?",
						"thai": "(จ้องมองตัวละครอื่น) แก...อยู่ฝ่ายไหน?",
						"hindi": "(दूसरे किरदार को घूरते हुए) तुम... किसके पाale में हो?"
					}
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "무슨 소리야! 나야말로 네가 수상해!",
						"english": "What are you saying?! *I* think you're suspicious!",
						"japanese": "何を言ってるんだ！私こそ、お前が怪しいぞ！",
						"chinese": "胡说八道！我才觉得你可疑！",
						"french": "Qu'est-ce que tu racontes ! C'est toi qui es louche !",
						"spanish": "¡Qué dices! ¡A mí me pareces sospechoso!",
						"vietnamese": "Nói gì vậy! Ta mới thấy ngươi đáng nghi!",
						"thai": "พูดอะไรน่ะ! ฉันต่างหากที่ระแวงแก!",
						"hindi": "यह कैसी बात है! मुझे तो तुम पर शक है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "하하하! 봐! 빙하가 너희를 조종하고 있어! 서로를 믿지 못하게!",
						"english": "Hahaha! Look! The Glacier is controlling you! Making you doubt each other!",
						"japanese": "ハハハ！見ろ！氷河がお前たちを操っている！互いを信じさせないように！",
						"chinese": "哈哈哈！看！冰川正在操控你们！让你们无法彼此信任！",
						"french": "Hahaha ! Regardez ! Le glacier vous manipule ! Il vous empêche de vous faire confiance !",
						"spanish": "¡Jajaja! ¡Mirad! ¡El glaciar os está manipulando! ¡Para que no confiéis los unos en los otros!",
						"vietnamese": "Hahaha! Nhìn kìa! Băng hà đang điều khiển các ngươi! Khiến các ngươi không thể tin tưởng lẫn nhau!",
						"thai": "ฮ่าฮ่าฮ่า! ดูสิ! ธารน้ำแข็งกำลังบงการพวกเจ้า! ทำให้พวกเจ้าไม่เชื่อใจกันเอง!",
						"hindi": "हाहाहा! देखो! ग्लेशियर तुम्हें काबू कर रहा है! ताकि तुम एक-दूसरे पर भरोसा न कर सको!"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "여기가 끝이야. 영광도, 강함도… 아무것도 없어!",
						"english": "This is the end. No glory, no strength... nothing!",
						"japanese": "ここが終わりだ。栄光も強さも…何も残らない！",
						"chinese": "到此为止了。荣耀、强大…什么都没有了！",
						"french": "C'est la fin. Ni gloire, ni force... rien !",
						"spanish": "Aquí es el fin. Ni gloria, ni fuerza... ¡nada!",
						"vietnamese": "Đây là kết thúc. Vinh quang, sức mạnh... chẳng còn gì!",
						"thai": "นี่คือจุดจบ. เกียรติยศ, ความแข็งแกร่ง... ไม่มีอะไรเหลือแล้ว!",
						"hindi": "यह अंत है। न महिमा, न शक्ति... कुछ भी नहीं!"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "빙하의 심연이 모든 것을 집어삼켰다. 이성은 한 조각 얼음처럼 부서졌다.",
						"english": "The glacial abyss devoured all. Reason shattered like a shard of ice.",
						"japanese": "氷河の深淵が全てを飲み込んだ。理性は氷の破片のように砕け散った。",
						"chinese": "冰川的深渊吞噬了一切。理性像一片冰块一样破碎了。",
						"french": "L'abîme glaciaire a tout dévoré. La raison s'est brisée comme un éclat de glace.",
						"spanish": "El abismo glacial lo devoró todo. La razón se hizo añicos como un fragmento de hielo.",
						"vietnamese": "Vực thẳm băng giá đã nuốt chửng mọi thứ. Lý trí vỡ tan như một mảnh băng.",
						"thai": "ห้วงลึกของธารน้ำแข็งกลืนกินทุกสิ่ง สติปัญญาแตกสลายราวกับเศษน้ำแข็ง",
						"hindi": "ग्लेशियल रसातल ने सब कुछ निगल लिया। तर्क बर्फ के टुकड़े की तरह टूट गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "(비웃듯) 나약한 자들이여. 너희의 마음속 어둠에 굴복해라.",
						"english": "(Scoffing) You weaklings. Succumb to the darkness in your hearts.",
						"japanese": "（嘲笑うかのように）弱き者たちよ。心の中の闇に屈服せよ。",
						"chinese": "(嘲笑) 你们这些懦夫。屈服于你们心中的黑暗吧。",
						"french": "(Moqueur) Faibles créatures. Succombez aux ténèbres de vos cœurs.",
						"spanish": "(Burlándose) Débiles. Sucumbid a la oscuridad de vuestros corazones.",
						"vietnamese": "(Cười nhạo) Những kẻ yếu đuối. Hãy khuất phục trước bóng tối trong lòng các ngươi đi.",
						"thai": "(หัวเราะเยาะ) พวกเจ้าผู้อ่อนแอ จงยอมจำนนต่อความมืดมิดในใจของพวกเจ้าซะ",
						"hindi": "(हँसते हुए) तुम कमजोरों। अपने दिलों के अंधेरे के आगे झुक जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "(피 흘리며) 아니… 아직… 아니야!",
						"english": "(Bleeding) No… not yet… not like this!",
						"japanese": "（血を流しながら）違う…まだ…違う！",
						"chinese": "(流血) 不…还没有…不是这样！",
						"french": "(Saignant) Non… pas encore… pas comme ça !",
						"spanish": "(Sangrando) ¡No… todavía no… así no!",
						"vietnamese": "(Chảy máu) Không… vẫn chưa… không phải vậy!",
						"thai": "(เลือดไหล) ไม่… ยัง… ยังไม่!",
						"hindi": "(खून बहते हुए) नहीं… अभी नहीं… ऐसे नहीं!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "(쓰러지며) 너희가 이겼다고… 착각하나?",
						"english": "(Falling) You think you've won... a delusion?",
						"japanese": "（倒れ込みながら）お前たちが勝ったと…錯覚か？",
						"chinese": "(倒下) 你们以为赢了…是错觉吗？",
						"french": "(Tombant) Vous pensez avoir gagné… une illusion ?",
						"spanish": "(Cayendo) ¿Creéis que habéis ganado... una ilusión?",
						"vietnamese": "(Ngã xuống) Các ngươi nghĩ mình đã thắng... một sự lầm tưởng ư?",
						"thai": "(ล้มลง) พวกเจ้าคิดว่าชนะแล้ว... แค่ภาพลวงตาหรือ?",
						"hindi": "(गिरते हुए) तुम्हें लगता है कि तुम जीत गए हो... क्या यह एक भ्रम है?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "의심은… 씨앗을 뿌렸을 뿐. 영원히 너희를 갉아먹을 것이다.",
						"english": "Doubt... merely planted a seed. It will gnaw at you forever.",
						"japanese": "疑念は…種を蒔いただけ。永遠にお前たちを蝕むだろう。",
						"chinese": "怀疑…只是播下了种子。它将永远侵蚀你们。",
						"french": "Le doute… n'a fait que semer une graine. Il vous rongera pour toujours.",
						"spanish": "La duda… solo ha sembrado una semilla. Os carcomerá para siempre.",
						"vietnamese": "Sự nghi ngờ... chỉ vừa gieo một hạt mầm. Nó sẽ gặm nhấm các ngươi mãi mãi.",
						"thai": "ความสงสัย... แค่หว่านเมล็ดไว้เท่านั้น มันจะกัดกินพวกเจ้าตลอดไป",
						"hindi": "संदेह... बस एक बीज बोया है। यह तुम्हें हमेशा के लिए खा जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(힘없이 주저앉으며) 끝난… 건가?",
						"english": "(Collapsing weakly) Is it… over?",
						"japanese": "（力なく座り込みながら）終わった…のか？",
						"chinese": "(无力地坐下) 结束了…吗？",
						"french": "(S'effondrant faiblement) Est-ce… fini ?",
						"spanish": "(Desplomándose débilmente) ¿Ha… terminado?",
						"vietnamese": "(Ngồi sụp xuống yếu ớt) Đã… kết thúc rồi ư?",
						"thai": "(ทรุดตัวลงอย่างหมดแรง) จบลง…แล้วหรือ?",
						"hindi": "(कमजोर होकर बैठते हुए) क्या यह… खत्म हो गया?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "아직도… 뭐가 진짜인지 모르겠어.",
						"english": "Still… I don't know what's real.",
						"japanese": "まだ…何が本物かわからない。",
						"chinese": "还是…不知道什么是真的。",
						"french": "Je ne sais toujours pas… ce qui est réel.",
						"spanish": "Todavía… no sé qué es real.",
						"vietnamese": "Vẫn… không biết cái gì là thật.",
						"thai": "ยังคง…ไม่รู้ว่าอะไรคือความจริง",
						"hindi": "अभी भी… मुझे नहीं पता क्या सच है।"
					}
				},
				{
					"content": {
						"korean": "환영의 그림자는 사라졌지만, 그 잔상은 깊이 남았다. 의심의 씨앗은 뿌려졌다.",
						"english": "The shadow of illusion vanished, but its afterimage lingered deep. The seed of doubt was sown.",
						"japanese": "幻影の影は消えたが、その残像は深く残った。疑念の種は蒔かれた。",
						"chinese": "幻影的影子消失了，但它的残像却深深留下。怀疑的种子已经种下。",
						"french": "L'ombre de l'illusion a disparu, mais son empreinte est restée profonde. La graine du doute est semée.",
						"spanish": "La sombra de la ilusión se desvaneció, pero su huella permaneció. La semilla de la duda fue sembrada.",
						"vietnamese": "Bóng ma ảo ảnh đã tan biến, nhưng dư ảnh của nó vẫn còn in sâu. Hạt giống nghi ngờ đã được gieo.",
						"thai": "เงามายาเลือนหายไปแล้ว แต่ภาพติดตายังคงฝังลึก เมล็ดพันธุ์แห่งความสงสัยได้ถูกหว่านลงไปแล้ว",
						"hindi": "भ्रम की छाया गायब हो गई, लेकिन उसकी छवि गहरी बनी रही। संदेह का बीज बोया गया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 혼돈의 심장이었다.",
						"english": "A colossal shadow blocked their path. It was the Heart of Chaos.",
						"japanese": "巨大な影が道を塞いだ。それは混沌の心臓だった。",
						"chinese": "巨大的影子挡住了前方。那是混沌之心。",
						"french": "Une ombre colossale bloqua le passage. C'était le Cœur du Chaos.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el Corazón del Caos.",
						"vietnamese": "Một bóng đen khổng lồ chắn lối. Đó là Trái Tim Hỗn Mang.",
						"thai": "เงาขนาดมหึมาบดบังเบื้องหน้า มันคือหัวใจแห่งความสับสน.",
						"hindi": "एक विशाल परछाई ने रास्ता रोक दिया। वह अराजकता का हृदय था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "(서늘한 목소리) 서로를 의심하며 여기까지 왔나. 가엾군.",
						"english": "(Chilling voice) You've come this far, distrusting each other. Pitiful.",
						"japanese": "(冷ややかな声) 互いを疑いながらここまで来たか。哀れな。",
						"chinese": "(冰冷的声音) 互相猜疑着走到这里了吗。可悲。",
						"french": "(Voix glaciale) Vous êtes venus jusqu'ici en vous méfiant les uns des autres. Pathétique.",
						"spanish": "(Voz gélida) ¿Hasta aquí habéis llegado, desconfiando los unos de los otros? Lamentable.",
						"vietnamese": "(Giọng lạnh lùng) Nghi ngờ lẫn nhau mà đến được đây sao. Thật đáng thương.",
						"thai": "(เสียงเย็นชา) มาถึงนี่ได้ด้วยความสงสัยกันเองสินะ. น่าสมเพช.",
						"hindi": "(शीतल स्वर) एक-दूसरे पर संदेह करते हुए यहाँ तक पहुँचे हो? दयनीय।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "닥쳐! 네놈이 우릴 이렇게 만들었어!",
						"english": "Shut up! YOU made us this way!",
						"japanese": "黙れ！貴様が私たちをこうさせたんだ！",
						"chinese": "闭嘴！是你把我们变成这样的！",
						"french": "Tais-toi ! C'est toi qui nous as rendus ainsi !",
						"spanish": "¡Cállate! ¡Tú nos has hecho esto!",
						"vietnamese": "Câm miệng! Ngươi đã khiến chúng ta thành ra thế này!",
						"thai": "หุบปาก! แกนั่นแหละที่ทำให้เราเป็นแบบนี้!",
						"hindi": "चुप रहो! तुमने ही हमें ऐसा बनाया है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "(떨리는 목소리) 도망쳐! 이건… 너희가 상대할 수 없어!",
						"english": "(Trembling voice) Run! This is... beyond you!",
						"japanese": "(震える声) 逃げろ！これは…お前たちが相手にできるものじゃない！",
						"chinese": "(颤抖的声音) 快逃！这…你们无法对抗！",
						"french": "(Voix tremblante) Fuyez ! Ceci... vous ne pouvez pas y faire face !",
						"spanish": "(Voz temblorosa) ¡Huid! Esto... ¡no podéis con ello!",
						"vietnamese": "(Giọng run rẩy) Chạy đi! Cái này... các ngươi không thể đối phó!",
						"thai": "(เสียงสั่นเครือ) หนีไป! นี่...พวกเจ้าต้านทานไม่ได้!",
						"hindi": "(काँपती आवाज़) भागो! यह... तुम संभाल नहीं पाओगे!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희의 가장 큰 적은, 바로 너희 안에 있다.",
						"english": "Your greatest enemy lies within you.",
						"japanese": "最大の敵は、君たち自身の内にある。",
						"chinese": "你们最大的敌人，就在你们内心深处。",
						"french": "Votre plus grand ennemi est en vous.",
						"spanish": "Vuestro mayor enemigo está dentro de vosotros.",
						"vietnamese": "Kẻ thù lớn nhất của các ngươi, chính là ở bên trong các ngươi.",
						"thai": "ศัตรูที่ยิ่งใหญ่ที่สุดของเจ้า อยู่ภายในตัวเจ้าเอง",
						"hindi": "तुम्हारा सबसे बड़ा दुश्मन तुम्हारे भीतर है।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "ivar",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "난 내 자신만 믿는다!",
						"english": "I trust only myself!",
						"japanese": "私は自分だけを信じる！",
						"chinese": "我只相信我自己！",
						"french": "Je ne crois qu'en moi !",
						"spanish": "¡Solo confío en mí mismo!",
						"vietnamese": "Ta chỉ tin tưởng chính mình!",
						"thai": "ข้าเชื่อใจเพียงตัวเองเท่านั้น!",
						"hindi": "मैं सिर्फ खुद पर भरोसा करता हूँ!"
					},
					"speaker": "character_1"
				}
			]
		}
	]
} as const;
