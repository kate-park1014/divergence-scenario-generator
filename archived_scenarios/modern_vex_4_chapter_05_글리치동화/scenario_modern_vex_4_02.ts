export const scenario_modern_vex_4_02 = {
	"scenario_id": "modern_vex_4_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "글리치로 왜곡된 공간. 오래된 데이터 잔해가 흔들렸다.",
						"english": "A space distorted by glitches. Old data remnants flickered.",
						"japanese": "グリッチで歪んだ空間。古いデータ残骸が揺らいだ。",
						"chinese": "被故障扭曲的空间。旧的数据残骸在闪烁。",
						"french": "Un espace déformé par des glitches. D'anciens fragments de données vacillaient.",
						"spanish": "Un espacio distorsionado por fallos. Antiguos restos de datos parpadeaban.",
						"vietnamese": "Một không gian bị biến dạng bởi lỗi. Những tàn dư dữ liệu cũ nhấp nháy.",
						"thai": "พื้นที่ที่บิดเบี้ยวด้วยข้อผิดพลาด เศษข้อมูลเก่าสั่นไหว",
						"hindi": "ग्लिच से विकृत एक जगह। पुराने डेटा के अवशेष झिलमिला रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여긴… 대체 뭐야?",
						"english": "What… is this place?",
						"japanese": "ここ…一体何だ？",
						"chinese": "这…到底是什么地方？",
						"french": "Qu'est-ce que… c'est que cet endroit ?",
						"spanish": "¿Qué… es este lugar?",
						"vietnamese": "Đây… rốt cuộc là đâu?",
						"thai": "นี่… มันคืออะไรกันแน่?",
						"hindi": "यह… क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…여기 오면 안 됐어.",
						"english": "...I shouldn't have come here.",
						"japanese": "…ここへ来るべきじゃなかった。",
						"chinese": "……我不该来这里。",
						"french": "...Je n'aurais pas dû venir ici.",
						"spanish": "...No debí haber venido aquí.",
						"vietnamese": "...Tôi không nên đến đây.",
						"thai": "…ฉันไม่น่ามาที่นี่เลย",
						"hindi": "...मुझे यहाँ नहीं आना चाहिए था।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "다 내 잘못이야…!",
						"english": "It's all my fault...!",
						"japanese": "全部、私のせいだ…！",
						"chinese": "都是我的错…！",
						"french": "Tout est de ma faute… !",
						"spanish": "¡Todo es culpa mía...!",
						"vietnamese": "Tất cả là lỗi của tôi...!",
						"thai": "ทั้งหมดเป็นความผิดของฉัน…!",
						"hindi": "यह सब मेरी गलती है...!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "기억이… 조각나 있어.",
						"english": "Memories... are shattered.",
						"japanese": "記憶が…砕けている。",
						"chinese": "记忆……支离破碎。",
						"french": "Les souvenirs… sont brisés.",
						"spanish": "Los recuerdos… están destrozados.",
						"vietnamese": "Ký ức… đã vỡ nát.",
						"thai": "ความทรงจำ… แตกสลาย",
						"hindi": "यादें... बिखर गई हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 기억이요?",
						"english": "What memory?",
						"japanese": "どんな記憶？",
						"chinese": "什么记忆？",
						"french": "Quelle mémoire ?",
						"spanish": "¿Qué recuerdo?",
						"vietnamese": "Ký ức nào?",
						"thai": "ความทรงจำอะไรคะ?",
						"hindi": "कौन सी याददाश्त?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누군가… 날 버렸어. 분명히 약속했는데…",
						"english": "Someone... abandoned me. Even though they clearly promised...",
						"japanese": "誰かが…私を捨てた。はっきり約束したのに…",
						"chinese": "有人…抛弃了我。明明约定好了…",
						"french": "Quelqu'un... m'a abandonné. Pourtant, ils avaient promis...",
						"spanish": "Alguien... me abandonó. Aunque lo habían prometido claramente...",
						"vietnamese": "Ai đó... đã bỏ rơi tôi. Rõ ràng đã hứa rồi mà...",
						"thai": "ใครบางคน... ทิ้งฉันไป ทั้งที่สัญญาไว้อย่างชัดเจน...",
						"hindi": "किसी ने… मुझे छोड़ दिया। जबकि उन्होंने साफ वादा किया था…"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "하지만… 누가? 왜?",
						"english": "But... who? Why?",
						"japanese": "でも…誰が？なぜ？",
						"chinese": "可是…是谁？为什么？",
						"french": "Mais... qui ? Pourquoi ?",
						"spanish": "Pero... ¿quién? ¿Por qué?",
						"vietnamese": "Nhưng... ai? Tại sao?",
						"thai": "แต่... ใคร? ทำไม?",
						"hindi": "लेकिन… कौन? क्यों?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "버림받았다니… 누구한테요?",
						"english": "Abandoned... by whom?",
						"japanese": "捨てられたって…誰に？",
						"chinese": "被抛弃了…被谁？",
						"french": "Abandonnée... par qui ?",
						"spanish": "¿Abandonada... por quién?",
						"vietnamese": "Bị bỏ rơi... bởi ai?",
						"thai": "ถูกทอดทิ้ง... โดยใครคะ?",
						"hindi": "छोड़ दिया गया… किसके द्वारा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"emotion": "sad",
					"content": {
						"korean": "그날… 내가 뭘 놓쳤지? 뭘 잘못한 거지?",
						"english": "That day... what did I miss? What did I do wrong?",
						"japanese": "あの日…何を見落とした？何を間違った？",
						"chinese": "那天…我错过了什么？我做错了什么？",
						"french": "Ce jour-là... qu'ai-je manqué ? Qu'ai-je fait de mal ?",
						"spanish": "Ese día... ¿qué me perdí? ¿Qué hice mal?",
						"vietnamese": "Ngày hôm đó... tôi đã bỏ lỡ điều gì? Tôi đã làm gì sai?",
						"thai": "วันนั้น... ฉันพลาดอะไรไป? ฉันทำอะไรผิด?",
						"hindi": "उस दिन… मैंने क्या गँवा दिया? मैंने क्या गलत किया?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "진정해요, 린. 무슨 일이 있었는지 말해봐요.",
						"english": "Calm down, Lynn. Tell me what happened.",
						"japanese": "落ち着いて、リン。何があったか話して。",
						"chinese": "冷静下来，琳。告诉我发生了什么。",
						"french": "Calme-toi, Lynn. Dis-moi ce qui s'est passé.",
						"spanish": "Cálmate, Lynn. Dime qué pasó.",
						"vietnamese": "Bình tĩnh đi, Lyn. Kể cho tôi nghe chuyện gì đã xảy ra.",
						"thai": "ใจเย็นๆ นะลินน์ เล่าให้ฟังหน่อยว่าเกิดอะไรขึ้น",
						"hindi": "शांत हो जाओ, लिन। बताओ क्या हुआ था।"
					}
				},
				{
					"content": {
						"korean": "(흐느끼며) 다 내 탓이야. 내가… 내가 그를 믿어서…!",
						"english": "(Sobbing) It's all my fault. Because I... I trusted him...!",
						"japanese": "(すすり泣きながら) 全部私のせいよ。私が…彼を信じたから…！",
						"chinese": "(抽泣着) 都是我的错。因为我…我信任了他…！",
						"french": "(Sanglotant) Tout est de ma faute. Parce que j'ai... je lui ai fait confiance...!",
						"spanish": "(Sollozando) Todo es mi culpa. Porque yo... ¡yo confié en él...!",
						"vietnamese": "(Nức nở) Tất cả là lỗi của tôi. Vì tôi... tôi đã tin anh ta...!",
						"thai": "(สะอื้น) ทั้งหมดเป็นความผิดของฉันเอง เพราะฉัน... ฉันเชื่อเขา...!",
						"hindi": "(सिसकते हुए) यह सब मेरी गलती है। क्योंकि मैंने… मैंने उस पर भरोसा किया…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그가 누구인데요?",
						"english": "Who is he?",
						"japanese": "彼って誰なの？",
						"chinese": "他是谁？",
						"french": "Qui est-il ?",
						"spanish": "¿Quién es él?",
						"vietnamese": "Anh ta là ai?",
						"thai": "เขาคือใครคะ?",
						"hindi": "वह कौन है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…기억이 흐릿해. 하지만 이 죄책감만은… 너무 선명해.",
						"english": "...My memory is hazy. But this guilt... it's so vivid.",
						"japanese": "…記憶が曖昧だ。だけどこの罪悪感だけは…あまりにも鮮明だ。",
						"chinese": "…记忆模糊。但这份罪恶感…却如此清晰。",
						"french": "...Ma mémoire est floue. Mais cette culpabilité... elle est si vive.",
						"spanish": "...Mi recuerdo es borroso. Pero esta culpa... es tan vívida.",
						"vietnamese": "...Ký ức mơ hồ. Nhưng cảm giác tội lỗi này... lại quá rõ ràng.",
						"thai": "...ความทรงจำเลือนราง แต่ความรู้สึกผิดนี้... มันชัดเจนเหลือเกิน",
						"hindi": "…याददाश्त धुंधली है। लेकिन यह अपराधबोध… बहुत स्पष्ट है।"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그녀의 눈은 비극적인 과거의 환영을 비추는 듯했다.",
						"english": "Her eyes seemed to reflect the specter of a tragic past.",
						"japanese": "彼女の瞳は、悲劇的な過去の幻影を映し出すようだった。",
						"chinese": "她的眼睛仿佛映照着悲剧性过去的幻影。",
						"french": "Ses yeux semblaient refléter le spectre d'un passé tragique.",
						"spanish": "Sus ojos parecían reflejar el espectro de un pasado trágico.",
						"vietnamese": "Đôi mắt cô ấy dường như phản chiếu bóng ma của một quá khứ bi thảm.",
						"thai": "ดวงตาของเธอดูเหมือนจะสะท้อนภาพหลอนของอดีตอันน่าเศร้า",
						"hindi": "उसकी आँखें एक दुखद अतीत के प्रेत को दर्शाती हुई लग रही थीं।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 거울… 저건 내가 아니야.",
						"english": "That mirror... that's not me.",
						"japanese": "あの鏡…あれは私じゃない。",
						"chinese": "那面镜子…那不是我。",
						"french": "Ce miroir... ce n'est pas moi.",
						"spanish": "Ese espejo... ese no soy yo.",
						"vietnamese": "Cái gương đó... đó không phải là tôi.",
						"thai": "กระจกบานนั้น... นั่นไม่ใช่ฉัน",
						"hindi": "वह दर्पण... वह मैं नहीं हूँ।"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리에요, 린? 혼란스러워 하지 마요.",
						"english": "What are you talking about, Rin? Don't be confused.",
						"japanese": "何を言ってるの、リン？混乱しないで。",
						"chinese": "你在说什么，琳？别困惑了。",
						"french": "De quoi parles-tu, Rin ? Ne sois pas confuse.",
						"spanish": "¿De qué hablas, Rin? No te confundas.",
						"vietnamese": "Cô đang nói gì vậy, Rin? Đừng bối rối.",
						"thai": "คุณพูดอะไรน่ะ ริน? อย่าสับสนสิ",
						"hindi": "तुम क्या कह रही हो, रिन? भ्रमित मत हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "난… 난 아무것도 아니야. 껍데기뿐이야. 다 거짓말이었어!",
						"english": "I... I'm nothing. Just an empty shell. It was all a lie!",
						"japanese": "私…私は何でもない。ただの抜け殻よ。全部嘘だったんだ！",
						"chinese": "我…我什么都不是。只是个空壳。一切都是谎言！",
						"french": "Je... je ne suis rien. Juste une coquille vide. Tout était un mensonge !",
						"spanish": "Yo... no soy nada. Solo un cascarón vacío. ¡Todo fue una mentira!",
						"vietnamese": "Tôi... tôi không là gì cả. Chỉ là một cái vỏ rỗng. Tất cả đều là dối trá!",
						"thai": "ฉัน... ฉันไม่มีอะไรเลย เป็นแค่เปลือกหอยเปล่า ๆ ทุกอย่างเป็นเรื่องโกหก!",
						"hindi": "मैं... मैं कुछ भी नहीं हूँ। बस एक खाली खोल। सब झूठ था!"
					},
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가 거짓말을 했다는 거죠?",
						"english": "Who told a lie?",
						"japanese": "誰が嘘をついたって言うんだ？",
						"chinese": "谁说了谎？",
						"french": "Qui a menti ?",
						"spanish": "¿Quién mintió?",
						"vietnamese": "Ai đã nói dối?",
						"thai": "ใครเป็นคนโกหกเหรอ?",
						"hindi": "किसने झूठ बोला?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…모르겠어. 하지만 너무… 너무 화나!",
						"english": "...I don't know. But I'm so... so angry!",
						"japanese": "…分からない。でも、すごく…すごく怒ってる！",
						"chinese": "…我不知道。但我太…太生气了！",
						"french": "...Je ne sais pas. Mais je suis tellement... tellement en colère !",
						"spanish": "...No lo sé. ¡Pero estoy tan... tan enfadada!",
						"vietnamese": "...Tôi không biết. Nhưng tôi quá... quá tức giận!",
						"thai": "...ฉันไม่รู้. แต่ฉันโกรธ... โกรธมาก!",
						"hindi": "...मुझे नहीं पता। लेकिन मैं बहुत... बहुत गुस्से में हूँ!"
					},
					"speaker": "lin"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "공간을 뒤틀리게 만든 거대한 그림자. 정체 모를 존재가 그들을 노려봤다.",
						"english": "A colossal shadow warped the space. An unknown entity glared at them.",
						"japanese": "空間を歪ませた巨大な影。正体不明の存在が彼らを睨みつけた。",
						"chinese": "一个巨大的影子扭曲了空间。一个不明实体瞪着他们。",
						"french": "Une ombre colossale déformait l'espace. Une entité inconnue les dévisageait.",
						"spanish": "Una sombra colosal distorsionó el espacio. Una entidad desconocida los miró fijamente.",
						"vietnamese": "Một cái bóng khổng lồ làm méo mó không gian. Một thực thể không rõ danh tính đã trừng mắt nhìn họ.",
						"thai": "เงามหึมาบิดเบือนห้วงอวกาศ สิ่งมีชีวิตนิรนามจ้องมองพวกเขา",
						"hindi": "एक विशाल छाया ने अंतरिक्ष को विकृत कर दिया। एक अज्ञात सत्ता ने उन्हें घूरा।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "네 죄책감이… 너를 삼킬 것이다.",
						"english": "Your guilt... will consume you.",
						"japanese": "お前の罪悪感が…お前を飲み込むだろう。",
						"chinese": "你的罪恶感…会吞噬你。",
						"french": "Ta culpabilité... te dévorera.",
						"spanish": "Tu culpa... te consumirá.",
						"vietnamese": "Sự mặc cảm tội lỗi của ngươi... sẽ nuốt chửng ngươi.",
						"thai": "ความรู้สึกผิดของเจ้า... จะกลืนกินเจ้า",
						"hindi": "तुम्हारा अपराधबोध... तुम्हें निगल जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "넌 누구야? 린을 괴롭히지 마!",
						"english": "Who are you? Don't torment Rin!",
						"japanese": "お前は誰だ？リンをいじめるな！",
						"chinese": "你是谁？别折磨琳！",
						"french": "Qui es-tu ? Ne tourmente pas Rin !",
						"spanish": "¿Quién eres? ¡No atormentes a Rin!",
						"vietnamese": "Ngươi là ai? Đừng hành hạ Rin!",
						"thai": "แกเป็นใคร? อย่ารังแกรินนะ!",
						"hindi": "तुम कौन हो? रिन को परेशान मत करो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "난 네가 버린 것들의 환영. 깨진 약속의 파편이다.",
						"english": "I am the phantom of what you discarded. Fragments of broken promises.",
						"japanese": "私はお前が捨てたものの幻影。壊れた約束の破片だ。",
						"chinese": "我是你抛弃之物的幻影。破碎承诺的碎片。",
						"french": "Je suis le fantôme de ce que tu as abandonné. Les fragments de promesses brisées.",
						"spanish": "Soy el fantasma de lo que desechaste. Fragmentos de promesas rotas.",
						"vietnamese": "Ta là ảo ảnh của những gì ngươi đã vứt bỏ. Những mảnh vỡ của lời hứa tan vỡ.",
						"thai": "ฉันคือภาพหลอนของสิ่งที่เจ้าทิ้งขว้าง เศษเสี้ยวของคำมั่นที่แตกสลาย",
						"hindi": "मैं तुम्हारे छोड़े हुए का प्रेत हूँ। टूटे वादों के टुकड़े।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 저건 내가 아니야…!",
						"english": "No... that's not me...!",
						"japanese": "いや…あれは私じゃない…！",
						"chinese": "不…那不是我…！",
						"french": "Non... ce n'est pas moi... !",
						"spanish": "No... ¡ese no soy yo...!",
						"vietnamese": "Không... đó không phải là tôi...!",
						"thai": "ไม่... นั่นไม่ใช่ฉัน...!",
						"hindi": "नहीं... वह मैं नहीं हूँ...!"
					},
					"emotion": "sad",
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "도망칠 수 없어. 네 죄악은… 너를 따라다닐 테니.",
						"english": "You cannot escape. Your sins... will follow you.",
						"japanese": "逃れられない。お前の罪は…お前を追いかけるだろう。",
						"chinese": "你逃不掉的。你的罪孽…会一直缠绕着你。",
						"french": "Tu ne peux pas t'échapper. Tes péchés... te hanteront.",
						"spanish": "No puedes escapar. Tus pecados... te perseguirán.",
						"vietnamese": "Ngươi không thể thoát được. Tội lỗi của ngươi… sẽ theo sát ngươi.",
						"thai": "หนีไม่พ้นหรอก บาปของเจ้า... จะตามติดเจ้าไป",
						"hindi": "तुम भाग नहीं सकते। तुम्हारे पाप… तुम्हारा पीछा करेंगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "우리가 널 막을 거야!",
						"english": "We will stop you!",
						"japanese": "私たちがあなたを止める！",
						"chinese": "我们会阻止你！",
						"french": "Nous allons t'arrêter !",
						"spanish": "¡Te detendremos!",
						"vietnamese": "Chúng ta sẽ ngăn ngươi lại!",
						"thai": "พวกเราจะหยุดเจ้าเอง!",
						"hindi": "हम तुम्हें रोकेंगे!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "왜곡된 환영이 모든 것을 집어삼켰다. 다시 한번.",
						"english": "Distorted illusions devoured everything. Once again.",
						"japanese": "歪んだ幻影がすべてを飲み込んだ。再び。",
						"chinese": "扭曲的幻象吞噬了一切。再一次。",
						"french": "Des illusions déformées ont tout dévoré. Encore une fois.",
						"spanish": "Ilusiones distorsionadas devoraron todo. Una vez más.",
						"vietnamese": "Ảo ảnh méo mó nuốt chửng mọi thứ. Một lần nữa.",
						"thai": "ภาพลวงตาที่บิดเบือนกลืนกินทุกสิ่งอีกครั้ง",
						"hindi": "विकृत भ्रम ने सब कुछ निगल लिया। एक बार फिर।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직도 이해하지 못했나? 너의 약속은… 깨진 거울처럼 산산조각 났어.",
						"english": "Still don't understand? Your promise... shattered like a broken mirror.",
						"japanese": "まだ理解できないのか？ お前の約束は…割れた鏡のように粉々になった。",
						"chinese": "你还不明白吗？你的诺言…像碎裂的镜子一样支离破碎。",
						"french": "Tu ne comprends toujours pas ? Ta promesse... s'est brisée comme un miroir.",
						"spanish": "¿Todavía no lo entiendes? Tu promesa... se hizo añicos como un espejo roto.",
						"vietnamese": "Vẫn chưa hiểu sao? Lời hứa của ngươi… vỡ tan như gương vỡ.",
						"thai": "ยังไม่เข้าใจอีกหรือ? คำมั่นสัญญาของเจ้า... แตกสลายเหมือนกระจกที่ร้าว",
						"hindi": "क्या तुम्हें अभी भी समझ नहीं आया? तुम्हारा वादा… टूटे हुए शीशे की तरह बिखर गया।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 난 포기하지 않아. 다시 시작할 거야.",
						"english": "No... I won't give up. I'll start over.",
						"japanese": "いや…私は諦めない。もう一度始める。",
						"chinese": "不…我不会放弃的。我会重新开始。",
						"french": "Non... je n'abandonnerai pas. Je recommencerai.",
						"spanish": "No... no me rendiré. Empezaré de nuevo.",
						"vietnamese": "Không… ta sẽ không bỏ cuộc. Ta sẽ bắt đầu lại.",
						"thai": "ไม่... ฉันจะไม่ยอมแพ้ ฉันจะเริ่มต้นใหม่",
						"hindi": "नहीं… मैं हार नहीं मानूंगा। मैं फिर से शुरू करूंगा।"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "네가 이겼다고… 생각하나?",
						"english": "Do you... think you've won?",
						"japanese": "お前が勝ったと…思うのか？",
						"chinese": "你觉得…你赢了吗？",
						"french": "Tu penses... avoir gagné ?",
						"spanish": "¿Crees... que has ganado?",
						"vietnamese": "Ngươi… nghĩ mình đã thắng sao?",
						"thai": "เจ้าคิดว่า... เจ้าชนะแล้วหรือ?",
						"hindi": "क्या तुम्हें लगता है… कि तुम जीत गए हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 죄책감은… 영원히 사라지지 않아. 곧 알게 될 것이다.",
						"english": "This guilt... will never fade. You'll soon see.",
						"japanese": "この罪悪感は…永遠に消えない。すぐにわかるだろう。",
						"chinese": "这份罪恶感…永远不会消失。你很快就会明白的。",
						"french": "Cette culpabilité... ne disparaîtra jamais. Tu le sauras bientôt.",
						"spanish": "Esta culpa... nunca desaparecerá. Pronto lo sabrás.",
						"vietnamese": "Nỗi ân hận này… sẽ không bao giờ biến mất. Ngươi sẽ sớm biết thôi.",
						"thai": "ความรู้สึกผิดนี้... จะไม่มีวันจางหายไป เจ้าจะรู้ในไม่ช้า",
						"hindi": "यह अपराधबोध… कभी खत्म नहीं होगा। तुम्हें जल्द ही पता चल जाएगा।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "(혼란스러워하며) 아니… 아니야…",
						"english": "(Confused) No... no...",
						"japanese": "（混乱して）いや…違う…",
						"chinese": "（困惑）不…不是的…",
						"french": "(Confus) Non... non...",
						"spanish": "(Confundido) No... no...",
						"vietnamese": "(Bối rối) Không… không phải…",
						"thai": "(สับสน) ไม่... ไม่ใช่...",
						"hindi": "(भ्रमित) नहीं… नहीं…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아닌가? 뭔가 찜찜해.",
						"english": "...It's not over? Something feels off.",
						"japanese": "…終わってないのか？ 何か釈然としない。",
						"chinese": "…还没结束吗？总觉得有点不安。",
						"french": "...Ce n'est pas fini ? Quelque chose cloche.",
						"spanish": "...¿No ha terminado? Algo no me cuadra.",
						"vietnamese": "…Chưa kết thúc sao? Có gì đó không ổn.",
						"thai": "...ยังไม่จบเหรอ? รู้สึกไม่สบายใจเลย",
						"hindi": "…क्या यह खत्म नहीं हुआ? कुछ अजीब सा लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "파편화된 기억의 조각들이… 더 큰 진실을 향해 모여들고 있었다.",
						"english": "Fragments of fractured memories... were gathering towards a greater truth.",
						"japanese": "断片化された記憶の破片が…より大きな真実へと集まりつつあった。",
						"chinese": "支离破碎的记忆碎片…正汇聚成一个更大的真相。",
						"french": "Des fragments de souvenirs brisés... se rassemblaient vers une vérité plus grande.",
						"spanish": "Fragmentos de recuerdos rotos... se estaban reuniendo hacia una verdad mayor.",
						"vietnamese": "Những mảnh ký ức vỡ vụn… đang tụ lại hướng về một sự thật lớn hơn.",
						"thai": "เศษเสี้ยวความทรงจำที่แตกสลาย... กำลังรวมตัวกันเพื่อมุ่งสู่ความจริงที่ยิ่งใหญ่กว่า",
						"hindi": "खंडित यादों के टुकड़े… एक बड़े सत्य की ओर एकत्रित हो रहे थे।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"깨진 거울 조각들이 흩어진 곳.",
			"누군가의 약속은 거짓으로 변질되었다.",
			"파편화된 기억 속, 죄책감이 환영이 되어 나타났다.",
			"진실은 더 깊은 글리치 속에 잠들어 있었다."
		],
		"english": [
			"Where shattered mirror fragments lay scattered.",
			"Someone's promise twisted into a lie.",
			"In fragmented memories, guilt emerged as a hallucination.",
			"The truth lay dormant within a deeper glitch."
		],
		"japanese": [
			"砕け散った鏡の破片が散らばる場所。",
			"誰かの約束は偽りへと変質した。",
			"断片化された記憶の中、罪悪感が幻影となって現れた。",
			"真実はより深いグリッチの中に眠っていた。"
		],
		"chinese": [
			"破碎的镜子碎片散落之处。",
			"某人的承诺变成了谎言。",
			"在支离破碎的记忆中，罪恶感化为幻影出现。",
			"真相沉睡在更深的故障之中。"
		],
		"french": [
			"Là où des fragments de miroir brisé étaient éparpillés.",
			"La promesse de quelqu'un s'est transformée en mensonge.",
			"Dans des souvenirs fragmentés, la culpabilité apparut comme une hallucination.",
			"La vérité reposait, dormante, dans un glitch plus profond."
		],
		"spanish": [
			"Donde fragmentos de espejo roto yacían esparcidos.",
			"La promesa de alguien se convirtió en una mentira.",
			"En recuerdos fragmentados, la culpa emergió como una alucinación.",
			"La verdad yacía latente en un fallo más profundo."
		],
		"vietnamese": [
			"Nơi những mảnh gương vỡ nằm rải rác.",
			"Lời hứa của ai đó đã biến thành dối trá.",
			"Trong ký ức vụn vỡ, cảm giác tội lỗi hiện ra như một ảo ảnh.",
			"Sự thật nằm im lìm trong một lỗi sâu hơn."
		],
		"thai": [
			"ณ ที่ซึ่งเศษกระจกแตกกระจัดกระจาย",
			"คำสัญญาของใครบางคนบิดเบือนกลายเป็นคำโกหก",
			"ในความทรงจำที่แตกสลาย ความรู้สึกผิดปรากฏเป็นภาพหลอน",
			"ความจริงหลับใหลอยู่ภายใต้ความผิดปกติที่ลึกซึ้งกว่า"
		],
		"hindi": [
			"टूटे हुए शीशे के टुकड़े बिखरे हुए थे।",
			"किसी का वादा झूठ में बदल गया।",
			"खंडित यादों में, अपराधबोध एक मतिभ्रम बनकर उभरा।",
			"सच्चाई एक गहरे ग्लिच के भीतर निष्क्रिय पड़ी थी।"
		]
	}
} as const;
