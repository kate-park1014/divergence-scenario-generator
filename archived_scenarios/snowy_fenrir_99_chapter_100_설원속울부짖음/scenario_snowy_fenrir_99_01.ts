export const scenario_snowy_fenrir_99_01 = {
	"scenario_id": "snowy_fenrir_99_01",
	"order": 1,
	"act": "intro",
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝없이 펼쳐진 설원. 모든 것이 얼어붙었다.",
						"english": "Endless snowfields. Everything frozen solid.",
						"japanese": "果てしなく広がる雪原。すべてが凍りついた。",
						"chinese": "无尽的雪原。一切都冻结了。",
						"french": "Champs de neige infinis. Tout est gelé.",
						"spanish": "Campos de nieve infinitos. Todo congelado.",
						"vietnamese": "Cánh đồng tuyết trải dài vô tận. Mọi thứ đều đóng băng.",
						"thai": "ทุ่งหิมะที่กว้างไกลสุดลูกหูลูกตา. ทุกสิ่งทุกอย่างแข็งตัว.",
						"hindi": "अंतहीन बर्फ के मैदान। सब कुछ जम गया था।"
					}
				},
				{
					"content": {
						"korean": "젠장, 식량이 바닥났어!",
						"english": "Damn, we're out of food!",
						"japanese": "くそ、食料が尽きた！",
						"chinese": "该死，没食物了！",
						"french": "Merde, on n'a plus de nourriture !",
						"spanish": "¡Maldita sea, nos quedamos sin comida!",
						"vietnamese": "Chết tiệt, hết thức ăn rồi!",
						"thai": "ให้ตายสิ, อาหารหมดแล้ว!",
						"hindi": "धिक्कार है, हमारा खाना खत्म हो गया है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "온기도 없어... 이대로 얼어 죽는 건가.",
						"english": "No warmth left... Are we just going to freeze to death like this?",
						"japanese": "暖もねぇ... このまま凍え死ぬのか。",
						"chinese": "也没有温暖... 我们就这样冻死吗？",
						"french": "Plus de chaleur... Allons-nous mourir de froid comme ça ?",
						"spanish": "Sin calor... ¿Vamos a morir congelados así?",
						"vietnamese": "Không còn hơi ấm... Chúng ta sẽ chết cóng thế này sao?",
						"thai": "ไม่มีไออุ่นเลย... เราจะแข็งตายแบบนี้เหรอ.",
						"hindi": "कोई गर्मी नहीं बची... क्या हम ऐसे ही जम कर मर जाएंगे?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이런 곳은 처음이에요... 뭔가 잘못된 것 같아요.",
						"english": "I've never been to a place like this... Something feels wrong.",
						"japanese": "こんな場所は初めてです... 何かおかしい気がします。",
						"chinese": "我从未到过这种地方... 感觉不对劲。",
						"french": "C'est la première fois que je vois un endroit pareil... Je crois que quelque chose ne va pas.",
						"spanish": "Nunca había estado en un lugar así... Creo que algo no está bien.",
						"vietnamese": "Tôi chưa từng đến nơi nào như thế này... Có vẻ có gì đó không ổn.",
						"thai": "นี่เป็นครั้งแรกที่ฉันมาที่แบบนี้... รู้สึกเหมือนมีบางอย่างผิดปกติ.",
						"hindi": "मैं ऐसी जगह पर पहले कभी नहीं गया... कुछ गलत लग रहा है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "구조대가 오겠지.",
						"english": "The rescue team will come.",
						"japanese": "救助隊は来るはずだ。",
						"chinese": "救援队会来的。",
						"french": "L'équipe de secours viendra.",
						"spanish": "El equipo de rescate vendrá.",
						"vietnamese": "Đội cứu hộ sẽ đến thôi.",
						"thai": "หน่วยกู้ภัยคงจะมา.",
						"hindi": "बचाव दल आएगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아무것도 들리지 않아요.",
						"english": "...I can't hear anything.",
						"japanese": "…何も聞こえません。",
						"chinese": "……什么也听不见。",
						"french": "...Je n'entends rien.",
						"spanish": "...No oigo nada.",
						"vietnamese": "...Không nghe thấy gì cả.",
						"thai": "...ไม่ได้ยินอะไรเลย.",
						"hindi": "...मुझे कुछ भी सुनाई नहीं दे रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기이한 침묵 속, 불안감만이 커졌다.",
						"english": "An eerie silence settled, and with it, a creeping dread.",
						"japanese": "奇妙な沈黙の中、不安だけが募っていった。",
						"chinese": "奇异的沉默中，不安感越来越浓。",
						"french": "Dans un silence étrange, seule l'inquiétude grandissait.",
						"spanish": "En el extraño silencio, solo la inquietud crecía.",
						"vietnamese": "Trong sự im lặng kỳ lạ, chỉ có bất an ngày càng lớn.",
						"thai": "ในความเงียบงันแปลกประหลาด ความกังวลเพียงเพิ่มขึ้น",
						"hindi": "अजीब चुप्पी में, बेचैनी ही बढ़ती गई।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "저기... 이상한 사체를 발견했어요.",
						"english": "Uh... I found a strange corpse.",
						"japanese": "あの... 奇妙な死体を見つけました。",
						"chinese": "那个... 我发现了一具奇怪的尸体。",
						"french": "Euh... j'ai trouvé un cadavre étrange.",
						"spanish": "Eh... encontré un cadáver extraño.",
						"vietnamese": "Ưm... tôi đã tìm thấy một cái xác kỳ lạ.",
						"thai": "เอ่อ... ผมเจอซากศพแปลกๆ ครับ",
						"hindi": "वो देखिए... मुझे एक अजीब शव मिला है।"
					}
				},
				{
					"content": {
						"korean": "사체? 늑대라도 죽었나?",
						"english": "A corpse? Did a wolf die?",
						"japanese": "死体？狼でも死んだのか？",
						"chinese": "尸体？是狼死了吗？",
						"french": "Un cadavre ? Un loup est mort, peut-être ?",
						"spanish": "¿Un cadáver? ¿Murió algún lobo?",
						"vietnamese": "Xác chết? Một con sói chết ư?",
						"thai": "ซากศพเหรอ? หมาป่าตายรึเปล่า?",
						"hindi": "शव? क्या कोई भेड़िया मर गया है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니요... 마치 모든 것이 빨린 듯, 껍데기만 남았어요.",
						"english": "No... only a husk remains, as if everything was drained.",
						"japanese": "いいえ... まるで全てを吸い取られたように、抜け殻だけが残っています。",
						"chinese": "不... 就像所有东西都被吸干了，只剩下一个空壳。",
						"french": "Non... il ne reste qu'une coquille, comme si tout avait été aspiré.",
						"spanish": "No... solo queda un cascarón, como si todo hubiera sido succionado.",
						"vietnamese": "Không... chỉ còn lại cái vỏ, như thể mọi thứ đã bị hút cạn.",
						"thai": "ไม่ครับ... เหลือแต่เปลือก เหมือนทุกอย่างถูกดูดออกไปหมด",
						"hindi": "नहीं... जैसे सब कुछ सोख लिया गया हो, बस एक खोल बचा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야...?",
						"english": "What do you mean...?",
						"japanese": "何を言ってるんだ...？",
						"chinese": "你在说什么...？",
						"french": "Qu'est-ce que tu racontes... ?",
						"spanish": "¿Qué estás diciendo...?",
						"vietnamese": "Anh đang nói cái gì vậy...?",
						"thai": "หมายความว่าไง...?",
						"hindi": "क्या बक रहे हो...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "멀리서, 설원을 뒤흔드는 울부짖음이 들려왔다.",
						"english": "In the distance, a howl that rattled the snowfields reverberated.",
						"japanese": "遠くから、雪原を揺るがす咆哮が聞こえてきた。",
						"chinese": "远处，传来一阵震动雪原的嚎叫。",
						"french": "Au loin, un hurlement qui ébranlait la toundra se fit entendre.",
						"spanish": "A lo lejos, se escuchó un aullido que estremeció el campo nevado.",
						"vietnamese": "Từ xa, một tiếng hú làm rung chuyển cả cánh đồng tuyết vang vọng đến.",
						"thai": "จากที่ไกลๆ ได้ยินเสียงหอนที่สั่นสะเทือนทุ่งหิมะ",
						"hindi": "दूर से, बर्फीले मैदान को हिला देने वाली एक चीख सुनाई दी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "젠장, 저건 또 뭐야!",
						"english": "Dammit, what is that?!",
						"japanese": "畜生、あれは一体何だ！",
						"chinese": "该死，那又是什么鬼东西！",
						"french": "Bon sang, qu'est-ce que c'est encore ça !",
						"spanish": "¡Maldita sea, qué es eso ahora!",
						"vietnamese": "Chết tiệt, cái quái gì nữa thế kia!",
						"thai": "บ้าจริง นั่นมันอะไรอีกเนี่ย!",
						"hindi": "धिक्कार है, अब यह क्या है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "매서운 눈보라가 탐험대를 삼켰다.",
						"english": "A fierce blizzard swallowed the expedition team.",
						"japanese": "猛烈な吹雪が探検隊を飲み込んだ。",
						"chinese": "猛烈的暴风雪吞噬了探险队。",
						"french": "Une violente tempête de neige engloutit l'équipe d'exploration.",
						"spanish": "Una feroz ventisca engulló a la expedición.",
						"vietnamese": "Một trận bão tuyết dữ dội đã nuốt chửng đội thám hiểm.",
						"thai": "พายุหิมะที่รุนแรงได้กลืนกินคณะสำรวจ",
						"hindi": "एक भयंकर बर्फीला तूफान अन्वेषण दल को निगल गया।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 작은 얼음 안에... 생명체의 흔적이 있어요.",
						"english": "Inside this small ice... there are traces of a living creature.",
						"japanese": "この小さな氷の中に... 生命体の痕跡があります。",
						"chinese": "在这块小小的冰里... 有生命体的痕迹。",
						"french": "Dans cette petite glace... il y a des traces d'une créature vivante.",
						"spanish": "Dentro de este pequeño trozo de hielo... hay rastros de una criatura viva.",
						"vietnamese": "Trong khối băng nhỏ này... có dấu vết của một sinh vật sống.",
						"thai": "ภายในน้ำแข็งก้อนเล็กๆ นี้... มีร่องรอยของสิ่งมีชีวิตอยู่",
						"hindi": "इस छोटी सी बर्फ के अंदर... एक जीव के निशान हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그냥 얼어붙은 곤충 아니야?",
						"english": "Isn't it just a frozen insect?",
						"japanese": "ただの凍った昆虫じゃないのか？",
						"chinese": "不就是一只被冻住的昆虫吗？",
						"french": "N'est-ce pas juste un insecte gelé ?",
						"spanish": "¿No es solo un insecto congelado?",
						"vietnamese": "Không phải chỉ là một con côn trùng bị đóng băng sao?",
						"thai": "ไม่ใช่แค่แมลงที่ถูกแช่แข็งหรอกเหรอ?",
						"hindi": "क्या यह सिर्फ एक जमा हुआ कीड़ा नहीं है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아니요... 온기가 완전히 사라졌어요. 마치 뽑혀 나간 것처럼.",
						"english": "No... the warmth is completely gone. As if it's been ripped away.",
						"japanese": "いいえ…温もりは完全に消えました。まるで引き抜かれたかのように。",
						"chinese": "不……温暖完全消失了。仿佛被抽离了一样。",
						"french": "Non... la chaleur a complètement disparu. Comme si elle avait été arrachée.",
						"spanish": "No... el calor ha desaparecido por completo. Como si hubiera sido arrancado.",
						"vietnamese": "Không... hơi ấm đã biến mất hoàn toàn. Cứ như thể nó bị rút đi vậy.",
						"thai": "ไม่... ความอบอุ่นหายไปหมดสิ้นแล้ว ราวกับถูกฉีกกระชากออกไป",
						"hindi": "नहीं... गर्माहट पूरी तरह गायब हो गई है। मानो इसे खींच लिया गया हो।"
					}
				},
				{
					"content": {
						"korean": "점점 더 추워지는 것 같아.",
						"english": "It feels like it's getting colder.",
						"japanese": "だんだん寒くなっているようです。",
						"chinese": "感觉越来越冷了。",
						"french": "On dirait qu'il fait de plus en plus froid.",
						"spanish": "Parece que hace cada vez más frío.",
						"vietnamese": "Có vẻ như trời đang lạnh dần.",
						"thai": "รู้สึกเหมือนมันกำลังหนาวขึ้นเรื่อยๆ",
						"hindi": "लगता है ठंड बढ़ती जा रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_3"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "방향을 잃은 탐험대는 절망에 잠겼다.",
						"english": "The lost expedition fell into despair.",
						"japanese": "道を失った探検隊は絶望に沈んだ。",
						"chinese": "迷失方向的探险队陷入了绝望。",
						"french": "L'expédition perdue sombra dans le désespoir.",
						"spanish": "La expedición perdida cayó en la desesperación.",
						"vietnamese": "Đoàn thám hiểm lạc lối chìm trong tuyệt vọng.",
						"thai": "คณะสำรวจที่หลงทางจมดิ่งสู่ความสิ้นหวัง",
						"hindi": "खोई हुई अभियान दल निराशा में डूब गई।"
					}
				},
				{
					"content": {
						"korean": "나침반이... 고장났어. 엉뚱한 방향을 가리켜!",
						"english": "The compass... it's broken. Pointing the wrong way!",
						"japanese": "コンパスが…壊れてる。間違った方向を指してる！",
						"chinese": "指南针……坏了。指向了错误的方向！",
						"french": "La boussole... elle est cassée. Elle indique la mauvaise direction !",
						"spanish": "La brújula... está rota. ¡Señala la dirección equivocada!",
						"vietnamese": "La bàn... hỏng rồi. Nó chỉ sai hướng!",
						"thai": "เข็มทิศ... พังแล้ว มันชี้ไปผิดทาง!",
						"hindi": "कंपास... खराब हो गया है। गलत दिशा दिखा रहा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "여기선... 아무것도 믿을 수 없어요. 자연의 법칙마저 뒤틀린 것 같아요.",
						"english": "Here... nothing can be trusted. Even the laws of nature seem twisted.",
						"japanese": "ここでは…何も信じられない。自然の法則さえも歪んでいるようです。",
						"chinese": "在这里……什么都不可信。连自然法则都好像扭曲了。",
						"french": "Ici... on ne peut rien croire. Même les lois de la nature semblent tordues.",
						"spanish": "Aquí... no se puede confiar en nada. Incluso las leyes de la naturaleza parecen retorcidas.",
						"vietnamese": "Ở đây... không thể tin bất cứ điều gì. Ngay cả quy luật tự nhiên cũng dường như bị bẻ cong.",
						"thai": "ที่นี่... ไม่มีอะไรน่าเชื่อถือเลย แม้แต่กฎของธรรมชาติก็ยังดูเหมือนบิดเบี้ยว",
						"hindi": "यहाँ... किसी पर भरोसा नहीं किया जा सकता। प्रकृति के नियम भी मुड़े हुए लगते हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "도대체 어떻게 된 거야!",
						"english": "What in the world happened?!",
						"japanese": "一体どうなってるんだ！",
						"chinese": "到底怎么回事！",
						"french": "Mais qu'est-ce qui s'est passé ?!",
						"spanish": "¿Qué diablos pasó?",
						"vietnamese": "Chuyện quái gì đang xảy ra vậy!",
						"thai": "มันเกิดอะไรขึ้นกันแน่!",
						"hindi": "आखिर क्या हुआ है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_4"
				},
				{
					"content": {
						"korean": "잊힌 전설의... 한 구절이 생각나요.",
						"english": "A passage from... a forgotten legend comes to mind.",
						"japanese": "忘れられた伝説の…一節が思い出されます。",
						"chinese": "我思想起了一句被遗忘的传说。",
						"french": "Un passage d'une… légende oubliée me revient à l'esprit.",
						"spanish": "Un pasaje de... una leyenda olvidada me viene a la mente.",
						"vietnamese": "Một đoạn từ... một truyền thuyết bị lãng quên chợt hiện về trong tâm trí tôi.",
						"thai": "นึกถึงบทหนึ่งจาก... ตำนานที่ถูกลืม",
						"hindi": "भूली हुई दंतकथा का... एक अंश याद आ रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "지금 그게 중요해?",
						"english": "Is that important now?",
						"japanese": "今それが重要なのか？",
						"chinese": "现在这很重要吗？",
						"french": "Est-ce important maintenant ?",
						"spanish": "¿Es eso importante ahora?",
						"vietnamese": "Bây giờ điều đó có quan trọng không?",
						"thai": "ตอนนี้มันสำคัญเหรอ?",
						"hindi": "क्या अब यह ज़रूरी है?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "혹한이 모든 것을 집어삼켰다.",
						"english": "The bitter cold swallowed everything.",
						"japanese": "酷寒がすべてを飲み込んだ。",
						"chinese": "严寒吞噬了一切。",
						"french": "Le froid mordant a tout englouti.",
						"spanish": "El frío glacial lo devoró todo.",
						"vietnamese": "Giá rét đã nuốt chửng mọi thứ.",
						"thai": "ความหนาวเหน็บเข้ากลืนกินทุกสิ่ง",
						"hindi": "भीषण ठंड ने सब कुछ निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "포기해라... 너희는 결국, 얼어붙을 뿐.",
						"english": "Give up... you will merely freeze in the end.",
						"japanese": "諦めろ…お前たちは結局、凍てつくだけだ。",
						"chinese": "放弃吧... 你们终将冻结。",
						"french": "Abandonnez... vous ne ferez que geler à la fin.",
						"spanish": "Ríndete... al final, solo os congelaréis.",
						"vietnamese": "Hãy từ bỏ đi... cuối cùng các ngươi cũng chỉ đóng băng mà thôi.",
						"thai": "ยอมแพ้ซะ... สุดท้ายพวกเจ้าก็จะกลายเป็นน้ำแข็ง",
						"hindi": "हार मान लो... तुम अंततः जम जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "크윽... 아직... 끝나지 않았어!",
						"english": "Ugh... It's not... over yet!",
						"japanese": "くっ... まだ... 終わってない！",
						"chinese": "呃... 还没... 结束！",
						"french": "Urgh... Ce n'est pas... fini !",
						"spanish": "Uf... Todavía no... ha terminado!",
						"vietnamese": "Khốn kiếp... Vẫn chưa... kết thúc đâu!",
						"thai": "อึก... ยังไม่... จบ!",
						"hindi": "उफ़... अभी... ख़त्म नहीं हुआ है!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리는... 살아남아야 해요. 이 진실을 기록해야만 해.",
						"english": "We... must survive. We have to record this truth.",
						"japanese": "我々は... 生き残らなければならない。この真実を記録しなければならない。",
						"chinese": "我们... 必须活下去。必须记录下这个真相。",
						"french": "Nous... devons survivre. Nous devons consigner cette vérité.",
						"spanish": "Debemos... sobrevivir. Tenemos que registrar esta verdad.",
						"vietnamese": "Chúng ta... phải sống sót. Phải ghi lại sự thật này.",
						"thai": "เรา... ต้องรอดชีวิต เราต้องบันทึกความจริงนี้ไว้",
						"hindi": "हमें... ज़िंदा रहना होगा। हमें इस सच्चाई को दर्ज करना होगा।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝없는 겨울의 심장부. 거대한 그림자가 그들을 기다렸다.",
						"english": "The heart of endless winter. A colossal shadow awaited them.",
						"japanese": "終わりのない冬の心臓部。巨大な影が彼らを待ち受けていた。",
						"chinese": "无尽冬日的中心。一个巨大的阴影在等待着他们。",
						"french": "Le cœur de l'hiver sans fin. Une ombre colossale les attendait.",
						"spanish": "El corazón del invierno interminable. Una sombra colosal los esperaba.",
						"vietnamese": "Trái tim của mùa đông bất tận. Một bóng hình khổng lồ đang chờ đợi họ.",
						"thai": "ใจกลางฤดูหนาวอันไม่สิ้นสุด เงาอันมหึมากำลังรอคอยพวกเขาอยู่",
						"hindi": "अंतहीन सर्दी का हृदय। एक विशाल छाया उनका इंतजार कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "온기가... 사라져 가는군. 모든 것을 삼킬 굶주림만이 남으리라.",
						"english": "The warmth... it's fading. Only a hunger to consume all will remain.",
						"japanese": "温もりが…消え去っていく。全てを飲み込む飢えだけが残るだろう。",
						"chinese": "温暖……正在消逝。只剩下吞噬一切的饥饿。",
						"french": "La chaleur... elle s'évanouit. Seule une faim dévorante restera.",
						"spanish": "El calor... se desvanece. Solo quedará un hambre que lo devorará todo.",
						"vietnamese": "Hơi ấm... đang dần tan biến. Chỉ còn lại sự đói khát nuốt chửng tất cả.",
						"thai": "ความอบอุ่น... กำลังจางหายไป เหลือไว้เพียงความหิวโหยที่จะกลืนกินทุกสิ่ง",
						"hindi": "गर्माहट... मिट रही है। सब कुछ निगल जाने वाली भूख ही बचेगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거냐!",
						"english": "Did you orchestrate all this?!",
						"japanese": "お前が全て仕組んだのか！",
						"chinese": "这一切都是你策划的吗！",
						"french": "C'est toi qui as tout manigancé !",
						"spanish": "¿Tú orquestaste todo esto?!",
						"vietnamese": "Ngươi đã dàn xếp tất cả chuyện này sao?!",
						"thai": "นี่แกเป็นคนบงการทั้งหมดนี่หรือไง!",
						"hindi": "क्या यह सब तुम्हारी साजिश थी!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "겨울은... 끝나지 않아. 너희의 희망도 함께 얼어붙을 것이다.",
						"english": "Winter... never ends. Your hope will freeze with it.",
						"japanese": "冬は…終わらない。お前たちの希望も凍てつくだろう。",
						"chinese": "寒冬...永无止境。你们的希望也将随之冻结。",
						"french": "L'hiver... ne finit jamais. Votre espoir gèlera avec lui.",
						"spanish": "El invierno... nunca termina. Vuestra esperanza se congelará con él.",
						"vietnamese": "Mùa đông... sẽ không bao giờ kết thúc. Hy vọng của các ngươi cũng sẽ đóng băng theo.",
						"thai": "เหมันต์... ไม่มีวันสิ้นสุด ความหวังของพวกเจ้าจะถูกแช่แข็งไปพร้อมกัน",
						"hindi": "सर्दी... कभी ख़त्म नहीं होती। तुम्हारी आशा भी इसके साथ जम जाएगी।"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이런 거대한 존재는... 기록에도 없어요.",
						"english": "Such a colossal entity... it's not in the records.",
						"japanese": "これほど巨大な存在は…記録にもないわ。",
						"chinese": "如此庞大的存在... 史无前例。",
						"french": "Une telle entité colossale... n'est pas dans les archives.",
						"spanish": "Una entidad tan colosal... no está en los registros.",
						"vietnamese": "Một thực thể khổng lồ như vậy... không có trong ghi chép.",
						"thai": "สิ่งมีชีวิตมหึมาเช่นนี้... ไม่มีอยู่ในบันทึกเลย",
						"hindi": "ऐसा विशालकाय अस्तित्व... अभिलेखों में भी नहीं है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "네 기록은... 곧 잊힐 과거일 뿐.",
						"english": "Your records... are merely a past soon to be forgotten.",
						"japanese": "お前の記録は…いずれ忘れ去られる過去にすぎない。",
						"chinese": "你的记载... 终将成为被遗忘的过去。",
						"french": "Tes archives... ne sont qu'un passé bientôt oublié.",
						"spanish": "Tus registros... son solo un pasado que pronto será olvidado.",
						"vietnamese": "Ghi chép của ngươi... chẳng qua chỉ là một quá khứ sắp bị lãng quên.",
						"thai": "บันทึกของเจ้า... เป็นเพียงอดีตที่กำลังจะถูกลืมเลือน",
						"hindi": "तुम्हारे अभिलेख... जल्द ही भुला दिए जाने वाले अतीत मात्र हैं।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 잠시 물러났다.",
						"english": "The colossal shadow receded for a moment.",
						"japanese": "巨大な影が一時退いた。",
						"chinese": "巨大的阴影暂时退去。",
						"french": "L'ombre colossale s'est retirée un instant.",
						"spanish": "La sombra colosal retrocedió por un momento.",
						"vietnamese": "Bóng tối khổng lồ tạm thời rút lui.",
						"thai": "เงาขนาดมหึมากำลังล่าถอยชั่วคราว",
						"hindi": "विशाल परछाई क्षण भर के लिए पीछे हट गई।"
					}
				},
				{
					"content": {
						"korean": "끝난 건가...?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗...？",
						"french": "C'est fini... ?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้วหรือ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니요... 이건... 시작에 불과해요. 더 깊은 굶주림이 몰려올 거예요.",
						"english": "No... this is... just the beginning. A deeper hunger will come.",
						"japanese": "いいえ…これは…始まりに過ぎません。より深い飢えが押し寄せるでしょう。",
						"chinese": "不...这...只是个开始。更深层的饥饿将会袭来。",
						"french": "Non... ce n'est... que le début. Une faim plus profonde viendra.",
						"spanish": "No... esto es... solo el principio. Una hambruna más profunda se avecina.",
						"vietnamese": "Không... đây... chỉ là khởi đầu thôi. Một cơn đói khát sâu sắc hơn sẽ ập đến.",
						"thai": "ไม่...นี่...เป็นเพียงจุดเริ่มต้น ความหิวกระหายที่ลึกซึ้งกว่าจะเข้ามาแทนที่",
						"hindi": "नहीं... यह... सिर्फ़ शुरुआत है। एक गहरी भूख उमड़कर आएगी।"
					}
				},
				{
					"content": {
						"korean": "끝없는 겨울의 시작. 희망은 아직 멀었다.",
						"english": "The beginning of an endless winter. Hope is still far off.",
						"japanese": "終わりのない冬の始まり。希望はまだ遠い。",
						"chinese": "无尽寒冬的开始。希望仍遥不可及。",
						"french": "Le début d'un hiver sans fin. L'espoir est encore lointain.",
						"spanish": "El comienzo de un invierno interminable. La esperanza aún está lejos.",
						"vietnamese": "Khởi đầu của mùa đông bất tận. Hy vọng vẫn còn xa vời.",
						"thai": "จุดเริ่มต้นของเหมันต์นิรันดร์ ความหวังยังคงห่างไกล",
						"hindi": "एक अंतहीन सर्दी की शुरुआत। आशा अभी भी बहुत दूर है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹한의 설원. 탐험대는 길을 잃었다.",
			"식량도, 온기도 바닥나고, 구조 신호는 닿지 않았다.",
			"점점 희망을 잃어가는 그때, 멀리서 기이한 울부짖음이 들려왔다.",
			"이 겨울은... 끝없이 이어질 재앙의 시작이었다."
		],
		"english": [
			"The biting snowfields. The expedition lost its way.",
			"Food, warmth depleted, rescue signals unheard.",
			"As hope faded, a strange howl echoed from afar.",
			"This winter... was the beginning of an endless calamity."
		],
		"japanese": [
			"酷寒の雪原。探検隊は道に迷った。",
			"食糧も暖も尽き、救助信号も届かなかった。",
			"絶望が深まる中、遠くから奇妙な咆哮が聞こえてきた。",
			"この冬は... 終わりのない災厄の始まりだった。"
		],
		"chinese": [
			"严寒的雪原。探险队迷失了方向。",
			"食物和温暖耗尽，求救信号未达。",
			"希望渐逝之际，远处传来一阵诡异的嚎叫。",
			"这个冬天... 是无尽灾难的开始。"
		],
		"french": [
			"Les champs de neige mordants. L'expédition s'est perdue.",
			"Nourriture et chaleur épuisées, les signaux de secours n'ont pas été reçus.",
			"Alors que l'espoir s'amenuisait, un hurlement étrange résonna de loin.",
			"Cet hiver... fut le début d'une calamité sans fin."
		],
		"spanish": [
			"Los gélidos campos de nieve. La expedición se perdió.",
			"Sin comida ni calor, las señales de rescate no llegaron.",
			"Cuando la esperanza se desvanecía, un extraño aullido resonó a lo lejos.",
			"Este invierno... fue el comienzo de una calamidad interminable."
		],
		"vietnamese": [
			"Cánh đồng tuyết khắc nghiệt. Đoàn thám hiểm đã lạc đường.",
			"Lương thực, hơi ấm cạn kiệt, tín hiệu cứu hộ không đến được.",
			"Khi hy vọng dần mất đi, một tiếng hú kỳ lạ vọng lại từ xa.",
			"Mùa đông này... là khởi đầu của một tai họa không hồi kết."
		],
		"thai": [
			"ทุ่งหิมะอันหนาวเหน็บ. คณะสำรวจหลงทาง.",
			"อาหารและความอบอุ่นหมดลง, สัญญาณกู้ภัยไม่ถึง.",
			"เมื่อความหวังเริ่มเลือนหายไป, เสียงหอนประหลาดดังมาจากที่ไกล.",
			"ฤดูหนาวนี้... คือจุดเริ่มต้นของหายนะอันไม่สิ้นสุด."
		],
		"hindi": [
			"बर्फीले बर्फीले मैदान। अभियान दल रास्ता भटक गया था।",
			"भोजन, गर्मी समाप्त हो गई, बचाव संकेत नहीं सुने गए।",
			"जैसे-जैसे उम्मीद कम होती गई, दूर से एक अजीब सी दहाड़ सुनाई दी।",
			"यह सर्दी... एक अंतहीन आपदा की शुरुआत थी।"
		]
	}
} as const;
