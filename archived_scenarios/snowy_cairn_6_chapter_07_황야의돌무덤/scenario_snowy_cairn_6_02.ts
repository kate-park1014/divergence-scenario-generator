export const scenario_snowy_cairn_6_02 = {
	"scenario_id": "snowy_cairn_6_02",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "눈 덮인 황야, 오랜 세월을 견딘 돌무덤이 솟아 있었다.",
						"english": "Snow-covered wilderness, a stone tomb stood, enduring ages.",
						"japanese": "雪に覆われた荒野、長い歳月を経た石の墓がそびえ立っていた。",
						"chinese": "白雪皑皑的荒野，一座历经岁月的石冢矗立着。",
						"french": "Une étendue sauvage enneigée, une tombe de pierre résistait aux âges.",
						"spanish": "Un páramo nevado, una tumba de piedra que resistió los siglos se alzaba.",
						"vietnamese": "Hoang dã phủ tuyết, một ngôi mộ đá đã trụ vững qua bao năm tháng sừng sững.",
						"thai": "แดนรกร้างปกคลุมด้วยหิมะ, สุสานหินที่ยืนหยัดมานานนับศตวรรษตั้งตระหง่านอยู่.",
						"hindi": "बर्फ़ से ढका जंगल, एक पत्थर की समाधि जो युगों से खड़ी थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기가 그 돌무덤인가요?",
						"english": "Is this the stone tomb?",
						"japanese": "ここがその石の墓ですか？",
						"chinese": "这里就是那座石冢吗？",
						"french": "Est-ce là la tombe de pierre ?",
						"spanish": "¿Es esta la tumba de piedra?",
						"vietnamese": "Đây có phải là ngôi mộ đá đó không?",
						"thai": "นี่คือสุสานหินนั่นหรือ?",
						"hindi": "क्या यह वही पत्थर की समाधि है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그래. 표식이든 무덤이든, 두려워할 게 뭐지?",
						"english": "Indeed. A marker or a tomb, what is there to fear?",
						"japanese": "ああ。標識だろうと墓だろうと、何を恐れることがある？",
						"chinese": "没错。无论是标记还是坟墓，有什么好怕的？",
						"french": "Oui. Une marque ou une tombe, qu'y a-t-il à craindre ?",
						"spanish": "Sí. ¿Una señal o una tumba, qué hay que temer?",
						"vietnamese": "Phải. Dù là dấu ấn hay lăng mộ, có gì phải sợ?",
						"thai": "ใช่แล้ว. จะเป็นเครื่องหมายหรือสุสาน, มีอะไรให้ต้องกลัว?",
						"hindi": "हाँ। एक निशान या एक कब्र, इसमें डरने की क्या बात है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "강함의 끝을… 여기서 한번 가늠해 보겠다.",
						"english": "The limits of strength... I shall test them here.",
						"japanese": "強さの極限を…ここで一度測ってみよう。",
						"chinese": "力量的极限……我将在此地衡量一番。",
						"french": "Les limites de la force... Je les mesurerai ici.",
						"spanish": "El límite de la fuerza... Lo evaluaré aquí.",
						"vietnamese": "Giới hạn của sức mạnh... Ta sẽ đo lường nó tại đây.",
						"thai": "ขีดสุดของพละกำลัง... ข้าจะวัดมันที่นี่.",
						"hindi": "शक्ति की पराकाष्ठा... मैं उसे यहीं परखूंगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "...",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "돌 곁에 선 이바르는, 잠시 말을 잃었다. 침묵이 짙어진다.",
						"english": "Ivar, by the stone, fell silent for a moment. The silence deepens.",
						"japanese": "石の傍らに立つイヴァルは、しばらく言葉を失った。沈黙が深まる。",
						"chinese": "立于石旁的伊瓦尔，一时语塞。寂静愈发浓重。",
						"french": "Ivar, près de la pierre, resta sans voix un instant. Le silence s'épaissit.",
						"spanish": "Ivar, junto a la piedra, perdió el habla por un momento. El silencio se profundiza.",
						"vietnamese": "Ivar, đứng cạnh tảng đá, nhất thời không nói nên lời. Sự im lặng càng lúc càng sâu.",
						"thai": "ไอวาร์, ยืนอยู่ข้างหิน, ชะงักไปชั่วขณะ. ความเงียบงันยิ่งทวีความรุนแรงขึ้น.",
						"hindi": "इवार, पत्थर के पास खड़ा, एक पल के लिए निःशब्द रह गया। खामोशी गहरी होती गई।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이바르님? 왜 그러세요?",
						"english": "Lord Ivar? What's wrong?",
						"japanese": "イヴァル様？どうなさいましたか？",
						"chinese": "伊瓦尔大人？您怎么了？",
						"french": "Seigneur Ivar ? Qu'y a-t-il ?",
						"spanish": "¿Lord Ivar? ¿Qué le pasa?",
						"vietnamese": "Thưa Ngài Ivar? Ngài sao vậy?",
						"thai": "ท่านไอบาร์? เกิดอะไรขึ้น?",
						"hindi": "इवर स्वामी? क्या हुआ आपको?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "별 거 아니야. …그냥 좀.",
						"english": "It's nothing. ...Just a bit.",
						"japanese": "なんでもない。…ただ少しな。",
						"chinese": "没什么。……只是有点。",
						"french": "Ce n'est rien. ...Juste un peu.",
						"spanish": "No es nada. ...Solo un poco.",
						"vietnamese": "Không có gì. ...Chỉ là một chút.",
						"thai": "ไม่มีอะไรหรอก ...แค่รู้สึกนิดหน่อย",
						"hindi": "कुछ नहीं। …बस यूँ ही।"
					},
					"speaker": "ivar"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "이 돌무덤… 단순한 돌덩이는 아닌 것 같군.",
						"english": "This cairn... it doesn't seem to be just simple rocks.",
						"japanese": "このケルン…ただの石ではないようだ。",
						"chinese": "这座石冢……看来并非只是普通的石头。",
						"french": "Ce cairn... il ne semble pas fait de simples pierres.",
						"spanish": "Este túmulo de piedras... no parece ser solo rocas simples.",
						"vietnamese": "Đống đá này... có vẻ không phải là những tảng đá thông thường.",
						"thai": "กองหินนี่... ไม่ใช่แค่หินธรรมดาแน่",
						"hindi": "यह पत्थरों का ढेर... यह सिर्फ़ साधारण पत्थर नहीं लगता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "그런가요? 으스스하긴 하네요.",
						"english": "Is that so? It certainly feels eerie.",
						"japanese": "そうでしょうか？確かに、不気味ですね。",
						"chinese": "是吗？确实有点阴森。",
						"french": "Vraiment ? C'est plutôt sinistre.",
						"spanish": "¿En serio? Es bastante espeluznante.",
						"vietnamese": "Vậy sao? Nó quả thật đáng sợ.",
						"thai": "อย่างนั้นเหรอ? มันก็ดูน่าขนลุกจริงๆ",
						"hindi": "ऐसा है? वाकई, यह थोड़ा डरावना है।"
					}
				},
				{
					"content": {
						"korean": "주변 어디에도 생명체의 흔적은 없었다. 짐승의 발자국조차 돌무덤을 멀찍이 피해 나 있었다.",
						"english": "There was no trace of life anywhere around. Even animal tracks avoided the cairn by a wide margin.",
						"japanese": "周囲には生命の痕跡はなかった。獣の足跡すら、石塚を大きく避けて通っていた。",
						"chinese": "周围没有任何生命迹象。就连野兽的足迹都远远避开了这座石冢。",
						"french": "Nulle trace de vie aux alentours. Même les empreintes d'animaux évitaient le cairn de loin.",
						"spanish": "No había rastro de vida en los alrededores. Ni siquiera las huellas de animales se acercaban al túmulo de piedras.",
						"vietnamese": "Không có dấu vết của sự sống nào xung quanh. Ngay cả dấu chân của động vật cũng tránh xa đống đá này một khoảng.",
						"thai": "ไม่พบร่องรอยของสิ่งมีชีวิตใดๆ รอบๆ แม้แต่รอยเท้าสัตว์ก็ยังเลี่ยงกองหินนี้ไปไกลๆ",
						"hindi": "आसपास कहीं भी जीवन का कोई निशान नहीं था। जानवरों के पदचिन्ह भी उस पत्थर के ढेर से काफी दूर थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "동물들도 여긴 피하나 봐. 불길하게.",
						"english": "Even animals seem to avoid this place. How ominous.",
						"japanese": "動物たちもここを避けているようだ。不吉な。",
						"chinese": "连动物都避开这里。真是不祥。",
						"french": "Même les animaux semblent éviter cet endroit. C'est de mauvais augure.",
						"spanish": "Hasta los animales parecen evitar este lugar. Qué siniestro.",
						"vietnamese": "Ngay cả động vật cũng tránh chỗ này. Thật chẳng lành.",
						"thai": "แม้แต่สัตว์ก็ยังเลี่ยงที่นี่ ดูไม่เป็นมงคลเลย",
						"hindi": "लगता है जानवर भी इस जगह से बचते हैं। यह अशुभ है।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "가까이 올수록… 뭔가 부르는 것 같군.",
						"english": "The closer I get... it feels like something is calling me.",
						"japanese": "近づくほどに…何かが呼んでいるようだ。",
						"chinese": "越是靠近……越感觉有什么在召唤。",
						"french": "Plus je m'approche... plus j'ai l'impression que quelque chose m'appelle.",
						"spanish": "Cuanto más me acerco... parece que algo me llama.",
						"vietnamese": "Càng đến gần... hình như có thứ gì đó đang gọi.",
						"thai": "ยิ่งเข้าใกล้... เหมือนมีอะไรบางอย่างกำลังเรียก",
						"hindi": "जितना करीब आता हूँ... लगता है कुछ बुला रहा है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "돌 틈 깊은 곳에서, 햇빛이라 하기엔 너무 차가운 푸른빛이 어른거렸다.",
						"english": "Deep within the cracks of the stones, a cold blue light flickered, too frigid to be sunlight.",
						"japanese": "石の隙間の奥深くで、陽光とは言い難い、あまりにも冷たい青い光が揺らめいていた。",
						"chinese": "在石缝深处，一道过于冰冷的蓝光闪烁着，不像阳光。",
						"french": "Au fond des fissures des pierres, une lumière bleue trop froide pour être celle du soleil vacillait.",
						"spanish": "Desde lo profundo de las grietas de las rocas, una luz azul parpadeaba, demasiado fría para ser luz del sol.",
						"vietnamese": "Sâu trong khe đá, một ánh sáng xanh lạnh lẽo lay động, quá lạnh để gọi là ánh mặt trời.",
						"thai": "ลึกเข้าไปในรอยแยกของหิน แสงสีน้ำเงินเย็นยะเยือกเกินกว่าจะเป็นแสงอาทิตย์สั่นไหวอยู่",
						"hindi": "पत्थरों की दरारों में गहराई से, एक ठंडी नीली रोशनी टिमटिमा रही थी, जो धूप के लिए बहुत ठंडी थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 빛은 뭐지? 더 깊숙이 있는 것 같아요.",
						"english": "What is that light? It seems to be deeper inside.",
						"japanese": "あの光は何だ？もっと奥にあるようだ。",
						"chinese": "那是什么光？它似乎更深处。",
						"french": "Qu'est-ce que cette lumière ? Elle semble venir de plus profond.",
						"spanish": "¿Qué es esa luz? Parece estar más profundo.",
						"vietnamese": "Ánh sáng đó là gì vậy? Có vẻ nó nằm sâu hơn nữa.",
						"thai": "แสงนั่นคืออะไร? ดูเหมือนจะอยู่ลึกเข้าไปอีก",
						"hindi": "वह रोशनी क्या है? लगता है वह और भी अंदर है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "와라. 네가 무엇이든. 내 강함을 시험해 보겠다면.",
						"english": "Come. Whatever you are. If you wish to test my strength.",
						"japanese": "来い。何者であろうと。我が強さを試すというのなら。",
						"chinese": "来吧。无论你是何物。如果你想测试我的力量。",
						"french": "Viens. Quoi que tu sois. Si tu veux tester ma force.",
						"spanish": "Ven. Seas lo que seas. Si quieres poner a prueba mi fuerza.",
						"vietnamese": "Đến đây. Dù ngươi là gì. Nếu ngươi muốn thử thách sức mạnh của ta.",
						"thai": "มาเลย ไม่ว่าเจ้าจะเป็นอะไร ถ้าอยากลองท้าทายความแข็งแกร่งของข้า",
						"hindi": "आओ। तुम कुछ भी हो। अगर मेरी ताकत परखनी है तो।"
					},
					"emotion": "angry",
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "강함을 좇는 자여… 그 끝을 보러 왔는가?",
						"english": "Seeker of strength... have you come to see its end?",
						"japanese": "強さを求める者よ… その終焉を見に来たか？",
						"chinese": "追寻力量之人啊……你来见证它的终结了吗？",
						"french": "Ô toi qui poursuis la force... es-tu venu en voir la fin ?",
						"spanish": "Buscador de fuerza... ¿has venido a ver su final?",
						"vietnamese": "Kẻ theo đuổi sức mạnh... ngươi đến để thấy hồi kết của nó ư?",
						"thai": "ผู้แสวงหาความแข็งแกร่ง... เจ้ามาเพื่อเห็นจุดจบของมันหรือ?",
						"hindi": "शक्ति के अन्वेषक... क्या तुम उसका अंत देखने आए हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 그 끝인가? 그렇다면, 겨뤄보자.",
						"english": "Are you that end? If so, let us contend.",
						"japanese": "お前がその終焉か？ならば、勝負だ。",
						"chinese": "你就是那个终结吗？既然如此，就来一较高下吧。",
						"french": "Es-tu cette fin ? Si oui, alors battons-nous.",
						"spanish": "¿Eres tú ese final? Si es así, luchemos.",
						"vietnamese": "Ngươi là hồi kết đó ư? Nếu vậy, hãy tỉ thí.",
						"thai": "เจ้าคือจุดจบนั้นหรือ? ถ้าเช่นนั้น, มาประลองกัน!",
						"hindi": "क्या तुम वह अंत हो? यदि हाँ, तो आओ मुकाबला करें।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "조심해요, 이바르님!",
						"english": "Be careful, Ivar!",
						"japanese": "お気をつけください、イヴァー様！",
						"chinese": "请小心，伊瓦尔大人！",
						"french": "Faites attention, Ivar !",
						"spanish": "¡Tenga cuidado, Ivar!",
						"vietnamese": "Cẩn thận nhé, Ivar!",
						"thai": "ระวังตัวด้วยครับ/ค่ะ, ท่านไอบาร์!",
						"hindi": "सावधान रहें, इвар!"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝없는 굶주림은… 결코 멈추지 않는다….",
						"english": "The endless hunger... it never truly stops...",
						"japanese": "終わりのない飢えは… 決して止まらない…。",
						"chinese": "无尽的饥饿……永不停止……",
						"french": "La faim insatiable... ne s'arrête jamais...",
						"spanish": "El hambre interminable... nunca se detiene...",
						"vietnamese": "Cơn đói vô tận... sẽ không bao giờ dừng lại...",
						"thai": "ความหิวโหยที่ไม่สิ้นสุด... ไม่มีวันหยุดลง...",
						"hindi": "यह अंतहीन भूख... कभी नहीं रुकती..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…아직도 더 남았다는 건가. 강함의 끝은.",
						"english": "...Is there still more? The end of strength.",
						"japanese": "…まだ、先があるというのか。強さの終焉は。",
						"chinese": "……难道还有更多吗？力量的终结。",
						"french": "...Y a-t-il encore plus ? La fin de la force.",
						"spanish": "...¿Todavía queda más? El final de la fuerza.",
						"vietnamese": "...Vẫn còn nữa sao? Hồi kết của sức mạnh.",
						"thai": "...ยังคงมีอีกหรือ? จุดจบของความแข็งแกร่ง.",
						"hindi": "...क्या अभी भी और बचा है? शक्ति का अंत।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤의 침묵은 더욱 깊어졌다. 이바르는 답을 찾았을까? 혹은, 더 큰 질문을 안게 되었을까.",
						"english": "The silence of the stone tomb deepened. Had Ivar found an answer? Or had he embraced a greater question?",
						"japanese": "石の墓の沈黙はさらに深まった。イヴァーは答えを見つけたのか？それとも、より大きな問いを抱えることになったのか。",
						"chinese": "石冢的寂静愈发深沉。伊瓦尔找到了答案吗？亦或是，背负了更大的疑问？",
						"french": "Le silence de la tombe de pierre s'approfondit. Ivar avait-il trouvé une réponse ? Ou avait-il embrassé une question plus grande ?",
						"spanish": "El silencio de la tumba de piedra se hizo más profundo. ¿Había encontrado Ivar una respuesta? ¿O había abrazado una pregunta aún mayor?",
						"vietnamese": "Sự im lặng của mộ đá càng thêm sâu sắc. Ivar đã tìm thấy câu trả lời ư? Hay anh đã ôm lấy một câu hỏi lớn hơn?",
						"thai": "ความเงียบงันของสุสานหินลึกซึ้งยิ่งขึ้น. ไอบาร์ได้พบคำตอบแล้วหรือ? หรือเขาได้แบกรับคำถามที่ใหญ่กว่ากันแน่.",
						"hindi": "पत्थर की कब्र की खामोशी और गहरी हो गई। क्या इवार को जवाब मिल गया था? या उसने एक बड़ा सवाल अपने साथ ले लिया था?"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "이것이 네가 좇는 강함의 끝인가? 얕보지 마라.",
						"english": "Is this the end of the strength you seek? Do not underestimate me.",
						"japanese": "これが貴様が追う強さの終焉か？侮るな。",
						"chinese": "这就是你所追求力量的终结吗？别小看我。",
						"french": "Est-ce la fin de la force que tu poursuis ? Ne me sous-estime pas.",
						"spanish": "¿Es este el final de la fuerza que buscas? No me subestimes.",
						"vietnamese": "Đây là hồi kết của sức mạnh mà ngươi theo đuổi ư? Đừng đánh giá thấp ta.",
						"thai": "นี่คือจุดจบของความแข็งแกร่งที่เจ้าแสวงหาหรือ? อย่าดูถูกข้า.",
						"hindi": "क्या यह उस शक्ति का अंत है जिसकी तुम तलाश में हो? मुझे कम मत समझना।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 끝나지 않았다. 반드시 다시 오겠다.",
						"english": "Ugh... It's not over yet. I will definitely return.",
						"japanese": "くっ… まだ終わらん。必ず戻って来る。",
						"chinese": "呃……还没结束。我一定会再回来的。",
						"french": "Ugh... Ce n'est pas encore fini. Je reviendrai, c'est sûr.",
						"spanish": "Ugh... Esto aún no ha terminado. ¡Volveré, sin falta!",
						"vietnamese": "Khụ... Vẫn chưa kết thúc đâu. Ta nhất định sẽ quay lại.",
						"thai": "อึก... ยังไม่จบ! ข้าจะกลับมาแน่นอน.",
						"hindi": "उफ़... यह अभी खत्म नहीं हुआ है। मैं निश्चित रूप से वापस आऊँगा।"
					},
					"emotion": "angry",
					"speaker": "ivar"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈 덮인 황야, 끝없이 펼쳐진 백색의 공허.",
			"그 한가운데, 오래된 돌무덤이 홀로 솟아 있었다.",
			"강함만을 좇는 전사 이바르는 망설임 없이 그곳으로 향했다.",
			"두려움은 없었다. 다만, 으스스한 침묵만이 그를 기다렸다."
		],
		"english": [
			"Snow-covered wilderness, an endless white void.",
			"In its midst, an ancient stone tomb stood alone.",
			"Ivar, a warrior seeking only strength, headed there without hesitation.",
			"No fear. Only an eerie silence awaited him."
		],
		"japanese": [
			"雪に覆われた荒野、果てしなく広がる白い虚無。",
			"その真ん中に、古い石の墓がぽつんとそびえ立っていた。",
			"強さのみを追い求める戦士イヴァルは、ためらうことなくそこへ向かった。",
			"恐れはなかった。ただ、不気味な沈黙だけが彼を待っていた。"
		],
		"chinese": [
			"白雪皑皑的荒野，无尽蔓延的白色虚无。",
			"在其中心，一座古老的石冢独自矗立。",
			"追逐力量的战士伊瓦尔，毫不犹豫地走向那里。",
			"没有恐惧。只有阴森的寂静在等待着他。"
		],
		"french": [
			"Une étendue sauvage enneigée, un vide blanc infini.",
			"Au milieu, une ancienne tombe de pierre se dressait seule.",
			"Ivar, guerrier ne cherchant que la force, s'y dirigea sans hésitation.",
			"Pas de peur. Seul un silence étrange l'attendait."
		],
		"spanish": [
			"Un páramo nevado, un vacío blanco interminable.",
			"En su centro, una antigua tumba de piedra se alzaba sola.",
			"Ivar, un guerrero que solo buscaba fuerza, se dirigió allí sin dudarlo.",
			"Sin miedo. Solo un silencio inquietante le esperaba."
		],
		"vietnamese": [
			"Hoang dã phủ tuyết, một khoảng không trắng xóa vô tận.",
			"Giữa nơi ấy, một ngôi mộ đá cổ xưa sừng sững đơn độc.",
			"Ivar, chiến binh chỉ theo đuổi sức mạnh, không chút do dự tiến về phía đó.",
			"Không hề sợ hãi. Chỉ có sự im lặng rợn người chờ đợi anh."
		],
		"thai": [
			"แดนรกร้างปกคลุมด้วยหิมะ, ความว่างเปล่าสีขาวที่ไม่มีที่สิ้นสุด.",
			"ท่ามกลางนั้น, สุสานหินเก่าแก่ตั้งตระหง่านอยู่โดดเดี่ยว.",
			"ไอวาร์, นักรบผู้แสวงหาแต่ความแข็งแกร่ง, มุ่งหน้าไปที่นั่นโดยไม่ลังเล.",
			"ไร้ความกลัว. มีเพียงความเงียบงันที่น่าขนลุกรอเขาอยู่."
		],
		"hindi": [
			"बर्फ़ से ढका जंगल, एक अंतहीन सफ़ेद शून्य।",
			"उसके बीच में, एक पुरानी पत्थर की समाधि अकेली खड़ी थी।",
			"इवार, एक योद्धा जो केवल शक्ति की तलाश में था, बिना किसी हिचकिचाहट के वहाँ चला गया।",
			"कोई डर नहीं था। बस एक अजीब खामोशी उसका इंतजार कर रही थी।"
		]
	}
} as const;
