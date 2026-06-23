export const scenario_snowy_screamveil_42_03 = {
	"scenario_id": "snowy_screamveil_42_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "버려진 고대 빙하 유적. 얼어붙은 침묵만이 감돈다.",
						"english": "Abandoned ancient glacial ruins. Only frozen silence lingers.",
						"japanese": "打ち捨てられた古代の氷河遺跡。凍てつく沈黙だけが漂う。",
						"chinese": "废弃的古老冰川遗迹。只有冰冷的寂静弥漫。",
						"french": "Ruines glaciaires antiques abandonnées. Seul un silence glacé persiste.",
						"spanish": "Antiguas ruinas glaciares abandonadas. Solo un silencio helado perdura.",
						"vietnamese": "Di tích băng hà cổ đại bị bỏ hoang. Chỉ còn sự im lặng đóng băng.",
						"thai": "ซากปรักหักพังธารน้ำแข็งโบแข็งตัว",
						"hindi": "परित्यक्त प्राचीन हिमनद खंडहर। केवल जमी हुई शांति छाई हुई है।"
					}
				},
				{
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "…누군가 왔군. 잊혀진 자들이여.",
						"english": "...Someone has arrived. Forgotten ones.",
						"japanese": "…誰か来たようだな。忘れ去られし者たちよ。",
						"chinese": "……有人来了。被遗忘者们。",
						"french": "...Quelqu'un est arrivé. Les oubliés.",
						"spanish": "...Alguien ha llegado. Los olvidados.",
						"vietnamese": "...Có ai đó đã đến. Hỡi những kẻ bị lãng quên.",
						"thai": "...มีใครบางคนมาถึงแล้ว เหล่าผู้ถูกลืม",
						"hindi": "...कोई आ गया है। भूले हुए लोग।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…どなたですか？",
						"chinese": "您是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... sois?",
						"vietnamese": "Ngài... là ai?",
						"thai": "ท่าน...คือใคร?",
						"hindi": "आप... कौन हैं?"
					}
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "나는 힐드. 이 땅의 모든 맹세와 비극을 기억하는 자.",
						"english": "I am Hild. The one who remembers all vows and tragedies of this land.",
						"japanese": "私はヒルド。この地の全ての誓いと悲劇を記憶する者。",
						"chinese": "我是希尔德。铭记此地所有誓言与悲剧之人。",
						"french": "Je suis Hild. Celle qui se souvient de tous les serments et tragédies de cette terre.",
						"spanish": "Soy Hild. La que recuerda todos los juramentos y tragedias de esta tierra.",
						"vietnamese": "Ta là Hild. Kẻ ghi nhớ mọi lời thề và bi kịch của vùng đất này.",
						"thai": "ข้าคือฮิลด์ ผู้จดจำคำสาบานและโศกนาฏกรรมทั้งหมดของดินแดนนี้",
						"hindi": "मैं हिल्ड हूँ। वह जो इस भूमि के सभी प्रतिज्ञाओं और त्रासदियों को याद करती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "너의 걸음에서, 깊은 죄책감과 오래된 슬픔이 느껴지는구나.",
						"english": "From your steps, I sense deep guilt and ancient sorrow.",
						"japanese": "その足取りから、深い罪悪感と古き悲しみが感じられる。",
						"chinese": "从你的脚步中，我感受到了深深的罪恶感和古老的悲伤。",
						"french": "De tes pas, je perçois une profonde culpabilité et une ancienne tristesse.",
						"spanish": "En tus pasos, siento una profunda culpa y una antigua tristeza.",
						"vietnamese": "Từ bước chân của ngươi, ta cảm nhận được sự tội lỗi sâu sắc và nỗi buồn cổ xưa.",
						"thai": "จากย่างก้าวของเจ้า ข้ารับรู้ได้ถึงความรู้สึกผิดอันล้ำลึกและความเศร้าโศกโบราณ",
						"hindi": "तुम्हारे कदमों से, मुझे गहरा अपराधबोध और प्राचीन दुख महसूस होता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "이곳은 망자들이 잠든 곳. 그들의 속삭임이 얼음 속에 봉인되어 있지.",
						"english": "This is where the dead sleep. Their whispers sealed within the ice.",
						"japanese": "ここは死者たちが眠る場所。彼らの囁きは氷の中に封印されている。",
						"chinese": "此乃亡者安息之地。他们的低语被封印在冰中。",
						"french": "C'est ici que dorment les morts. Leurs murmures sont scellés dans la glace.",
						"spanish": "Aquí es donde duermen los muertos. Susurros sellados en el hielo.",
						"vietnamese": "Đây là nơi người chết yên nghỉ. Lời thì thầm của họ bị phong ấn trong băng.",
						"thai": "ที่นี่คือที่ที่ผู้ตายหลับใหล เสียงกระซิบของพวกเขาถูกผนึกไว้ในน้ำแข็ง",
						"hindi": "यह वह जगह है जहाँ मृत सोते हैं। उनकी फुसफुसाहटें बर्फ में बंद हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "망자… 그들이 왜 여기에?",
						"english": "The dead... Why are they here?",
						"japanese": "亡者… なぜ彼らがここに？",
						"chinese": "亡者……他们为何在此？",
						"french": "Les morts… Pourquoi sont-ils ici ?",
						"spanish": "Los muertos... ¿Por qué están aquí?",
						"vietnamese": "Người chết... Sao họ lại ở đây?",
						"thai": "เหล่าผู้ตาย... ทำไมพวกเขาถึงมาอยู่ที่นี่?",
						"hindi": "मृतक... वे यहाँ क्यों हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "고대 예언자들의 피로 얼룩진 비극. Screamveil의 시작이었어.",
						"english": "A tragedy stained with the blood of ancient prophets. It was the beginning of Screamveil.",
						"japanese": "古代の預言者たちの血で染まった悲劇。スクリームベールの始まりだった。",
						"chinese": "被古代先知之血染色的悲剧。那是尖啸之幕的开端。",
						"french": "Une tragédie souillée par le sang d'anciens prophètes. Ce fut le début de Screamveil.",
						"spanish": "Una tragedia manchada con la sangre de antiguos profetas. Fue el comienzo de Screamveil.",
						"vietnamese": "Một bi kịch nhuốm máu của các nhà tiên tri cổ đại. Đó là khởi đầu của Screamveil.",
						"thai": "โศกนาฏกรรมที่เปื้อนเลือดของนักพยากรณ์โบราณ มันคือจุดเริ่มต้นของ Screamveil",
						"hindi": "प्राचीन भविष्यवक्ताओं के रक्त से सना एक दुखद अंत। यह स्क्रीमवेल की शुरुआत थी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "Screamveil… 그게 뭔데요?",
						"english": "Screamveil... What is that?",
						"japanese": "スクリームベール… それは何ですか？",
						"chinese": "尖啸之幕……那是什么？",
						"french": "Screamveil... Qu'est-ce que c'est ?",
						"spanish": "Screamveil... ¿Qué es eso?",
						"vietnamese": "Screamveil... Đó là gì?",
						"thai": "Screamveil... นั่นคืออะไร?",
						"hindi": "स्क्रीमवेल... वह क्या है?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "…믿었던 빛이 너를 죽음으로 이끌 수도 있어. 푸른 빛이 항상 구원은 아니지.",
						"english": "...The light you trusted could lead you to death. Blue light isn't always salvation.",
						"japanese": "…信じていた光が、あなたを死へと導くかもしれない。青い光が常に救いとは限らない。",
						"chinese": "……你所信任的光芒也可能引你走向死亡。蓝光并非总是救赎。",
						"french": "...La lumière en laquelle tu avais confiance pourrait te mener à la mort. La lumière bleue n'est pas toujours le salut.",
						"spanish": "...La luz en la que confiabas podría llevarte a la muerte. La luz azul no siempre es la salvación.",
						"vietnamese": "P...Ánh sáng bạn tin tưởng có thể dẫn bạn đến cái chết. Ánh sáng xanh không phải lúc nào cũng là sự cứu rỗi.",
						"thai": "...แสงสว่างที่คุณเชื่อมั่นอาจนำคุณไปสู่ความตาย แสงสีน้ำเงินไม่ใช่หนทางรอดเสมอไป",
						"hindi": "जिस प्रकाश पर तुमने भरोसा किया, वह तुम्हें मृत्यु तक ले जा सकता है। नीला प्रकाश हमेशा मोक्ष नहीं होता।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…!",
						"english": "...!",
						"japanese": "…！",
						"chinese": "……！",
						"french": "...!",
						"spanish": "...!",
						"vietnamese": "...!",
						"thai": "...!",
						"hindi": "...!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"speaker": "hild",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "얼어붙은 절규가 들리는가? 과거의 약속이 배신으로 변한 소리야.",
						"english": "Do you hear the frozen screams? It's the sound of past promises turned to betrayal.",
						"japanese": "凍てついた叫びが聞こえるか？過去の約束が裏切りへと変わった音だ。",
						"chinese": "你听到那凝固的尖叫了吗？那是过往的承诺变为背叛的声音。",
						"french": "Entends-tu les cris gelés ? C'est le son des promesses passées transformées en trahison.",
						"spanish": "¿Escuchas los gritos helados? Es el sonido de promesas pasadas convertidas en traición.",
						"vietnamese": "Bạn có nghe thấy những tiếng thét đóng băng không? Đó là âm thanh của những lời hứa trong quá khứ biến thành sự phản bội.",
						"thai": "คุณได้ยินเสียงกรีดร้องที่แข็งค้างไหม? มันคือเสียงของคำสัญญาในอดีตที่กลายเป็นความทรยศ",
						"hindi": "क्या तुम्हें जमी हुई चीखें सुनाई दे रही हैं? यह अतीत के वादों का विश्वासघात में बदलने की आवाज है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "머리가… 울려요.",
						"english": "My head... it's ringing.",
						"japanese": "頭が… 響く。",
						"chinese": "我的头……好响。",
						"french": "Ma tête... elle résonne.",
						"spanish": "Mi cabeza... me resuena.",
						"vietnamese": "Đầu tôi... đang ong lên.",
						"thai": "หัวฉัน... กำลังก้อง",
						"hindi": "मेरा सिर... गूंज रहा है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "환각이 눈앞을 스쳤다. 얼어붙은 동료들이 손짓하며 절규하는 모습.",
						"english": "A hallucination flashed before my eyes. Frozen comrades beckoning and screaming.",
						"japanese": "幻覚が目の前をよぎった。凍てついた仲間たちが手招きし、絶叫する姿。",
						"chinese": "幻觉掠过眼前。冰冻的同伴们招手并尖叫着。",
						"french": "Une hallucination a traversé mes yeux. Des camarades gelés faisaient signe et hurlaient.",
						"spanish": "Una alucinación pasó ante mis ojos. Compañeros congelados haciendo señas y gritando.",
						"vietnamese": "Một ảo giác chợt lướt qua mắt tôi. Những đồng đội đóng băng đang vẫy gọi và la hét.",
						"thai": "ภาพหลอนแวบเข้ามาในสายตา สหายที่แข็งค้างกำลังกวักมือเรียกและกรีดร้อง",
						"hindi": "एक मतिभ्रम मेरी आँखों के सामने कौंध गया। जमे हुए साथी इशारा कर रहे थे और चीख रहे थे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그들은 너의 죄를 기억하고 있어. 너 또한 그 이름을 잊지 않았듯이.",
						"english": "They remember your sin. Just as you haven't forgotten their names.",
						"japanese": "彼らはあなたの罪を覚えている。あなたが彼らの名を忘れていないように。",
						"chinese": "他们记得你的罪孽。正如你也没有忘记他们的名字。",
						"french": "Ils se souviennent de ton péché. Tout comme tu n'as pas oublié leurs noms.",
						"spanish": "Ellos recuerdan tu pecado. Así como tú no has olvidado sus nombres.",
						"vietnamese": "Họ nhớ tội lỗi của bạn. Cũng như bạn chưa quên tên của họ.",
						"thai": "พวกเขาจดจำบาปของคุณได้ เหมือนที่คุณไม่เคยลืมชื่อของพวกเขา",
						"hindi": "वे तुम्हारे पाप को याद करते हैं। जैसे तुमने उनके नाम नहीं भुलाए।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "죄… 대체 무슨…",
						"english": "Sin... What on earth...?",
						"japanese": "罪… 一体何の…",
						"chinese": "罪孽……到底是什么……",
						"french": "Péché... Mais quel...?",
						"spanish": "Pecado... ¿Pero qué...?",
						"vietnamese": "Tội lỗi... Rốt cuộc là gì...?",
						"thai": "บาป... มันคืออะไรกันแน่...",
						"hindi": "पाप... आखिर किस बात का...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "잊는다고 사라지는 것이 아니지. 얼음처럼, 언젠가 깨지리라.",
						"english": "Forgetting doesn't make it disappear. Like ice, it will someday break.",
						"japanese": "忘れても消えるわけじゃない。氷のように、いつか砕け散るだろう。",
						"chinese": "遗忘并不会让它消失。如同冰块，终有一天会破碎。",
						"french": "Oublier ne le fait pas disparaître. Comme la glace, un jour il se brisera.",
						"spanish": "Olvidar no lo hace desaparecer. Como el hielo, algún día se romperá.",
						"vietnamese": "Quên đi không có nghĩa là nó biến mất. Như băng vậy, một ngày nào đó nó sẽ vỡ tan.",
						"thai": "การลืมเลือนไม่ได้ทำให้มันหายไปดุจน้ำแข็ง สักวันมันจะแตกสลาย",
						"hindi": "भूल जाने से वो गायब नहीं होता। बर्फ़ की तरह, एक दिन वो टूट जाएगा。"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "더 깊이 들어가면, 돌아올 수 없어. 이곳은 과거의 그림자가 지배하는 곳.",
						"english": "Go deeper, and you can't return. This place is ruled by shadows of the past.",
						"japanese": "これ以上深く進めば、戻ることはできない。ここは過去の影が支配する場所だ。",
						"chinese": "再深入，你将无法回头。这里由过去的阴影主宰。",
						"french": "Vas plus profond, et tu ne pourras plus revenir. Cet endroit est dominé par les ombres du passé.",
						"spanish": "Si vas más profundo, no podrás regresar. Este lugar está gobernado por las sombras del pasado.",
						"vietnamese": "Vào sâu hơn nữa, ngươi sẽ không thể quay lại. Nơi đây bị bóng tối quá khứ thống trị.",
						"thai": "ถ้าเข้าลึกกว่านี้ เจ้าจะกลับไม่ได้ ที่นี่ถูกปกครองโดยเงาจากอดีต",
						"hindi": "और गहरा जाओगे, तो वापस नहीं आ पाओगे। यह जगह अतीत की परछाइयों का राज है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어요. 진실을 알아야 해.",
						"english": "I can't stop. I must know the truth.",
						"japanese": "止められない。真実を知らなければ。",
						"chinese": "我不能停。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo detenerme. Debo saber la verdad.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải biết sự thật.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकती। मुझे सच जानना होगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "진실은 잔혹하지. 네가 마주할 비극은 시작에 불과해.",
						"english": "Truth is cruel. The tragedy you face is just the beginning.",
						"japanese": "真実は残酷だ。お前が直面する悲劇は、始まりにすぎない。",
						"chinese": "真相是残酷的。你将面对的悲剧才刚刚开始。",
						"french": "La vérité est cruelle. La tragédie que tu affronteras n'est qu'un début.",
						"spanish": "La verdad es cruel. La tragedia que enfrentarás es solo el principio.",
						"vietnamese": "Sự thật thật tàn nhẫn. Bi kịch ngươi đối mặt chỉ là khởi đầu.",
						"thai": "ความจริงมันโหดร้าย โศกนาฏกรรมที่เจ้าจะต้องเผชิญเป็นเพียงจุดเริ่มต้น",
						"hindi": "सच क्रूर होता है। जिस त्रासदी का तुम सामना करोगे, वो बस शुरुआत है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "Screamveil이 너를 부르고 있다. 그 소리에 현혹되지 마.",
						"english": "Screamveil calls to you. Don't be lured by its sound.",
						"japanese": "スクリームヴェールがお前を呼んでいる。その声に惑わされるな。",
						"chinese": "尖叫面纱在呼唤你。不要被那声音迷惑。",
						"french": "Screamveil t'appelle. Ne te laisse pas séduire par son appel.",
						"spanish": "Screamveil te llama. No te dejes seducir por su sonido.",
						"vietnamese": "Screamveil đang gọi ngươi. Đừng bị tiếng nói đó mê hoặc.",
						"thai": "Screamveil กำลังเรียกเจ้า อย่าหลงใหลในเสียงนั้น",
						"hindi": "स्क्रीमवेल तुम्हें बुला रहा है। उसकी आवाज़ से बहक मत जाना।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "난… 흔들리지 않아.",
						"english": "I... won't waver.",
						"japanese": "私は…揺るがない。",
						"chinese": "我…不会动摇。",
						"french": "Je… ne faiblirai pas.",
						"spanish": "Yo… no vacilaré.",
						"vietnamese": "Ta… sẽ không dao động.",
						"thai": "ฉัน...ไม่หวั่นไหว",
						"hindi": "मैं… नहीं डगमगाऊँगी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유적의 가장 깊은 곳. 거대한 존재의 그림자가 드리운다.",
						"english": "The deepest part of the ancient ruins. The shadow of a colossal being looms.",
						"japanese": "古代遺跡の最も深い場所。巨大な存在の影が迫る。",
						"chinese": "古老遗迹的最深处。一个巨大存在的阴影笼罩着。",
						"french": "La partie la plus profonde des ruines antiques. L'ombre d'un être colossal plane.",
						"spanish": "La parte más profunda de las ruinas antiguas. La sombra de un ser colosal se cierne.",
						"vietnamese": "Nơi sâu nhất của di tích cổ đại. Bóng dáng một thực thể khổng lồ bao trùm.",
						"thai": "ส่วนที่ลึกที่สุดของซากปรักหักพังโบราณ เงาของสิ่งมีชีวิตขนาดมหึมากำลังทอดลงมา",
						"hindi": "प्राचीन खंडहरों का सबसे गहरा हिस्सा। एक विशालकाय सत्ता की परछाई मंडरा रही है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…네가 왔구나. 죄책감에 얼어붙은 영혼이여.",
						"english": "...So you've come. Soul frozen by guilt.",
						"japanese": "…来たか。罪悪感に凍てついた魂よ。",
						"chinese": "…你来了。被罪恶感冻结的灵魂啊。",
						"french": "...Tu es venu. Âme gelée par la culpabilité.",
						"spanish": "...Has venido. Alma congelada por la culpa.",
						"vietnamese": "...Ngươi đã đến. Hồn ma bị tội lỗi đóng băng.",
						"thai": "...เจ้ามาแล้วนี่ วิญญาณที่ถูกความรู้สึกผิดกัดกิน",
						"hindi": "...तो तुम आ गए। अपराधबोध से जमी हुई आत्मा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너… 이 비극의 원흉인가?",
						"english": "Are you… the cause of this tragedy?",
						"japanese": "お前…この悲劇の元凶か？",
						"chinese": "你…是这场悲剧的元凶吗？",
						"french": "Es-tu… la cause de cette tragédie ?",
						"spanish": "¿Eres tú… la causa de esta tragedia?",
						"vietnamese": "Ngươi… là nguyên nhân của bi kịch này sao?",
						"thai": "เจ้า...คือต้นเหตุของโศกนาฏกรรมนี้หรือ?",
						"hindi": "क्या तुम… इस त्रासदी की वजह हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는 그저, 망자들의 맹세를 지킬 뿐. 너의 기억 속 진실도.",
						"english": "I merely uphold the vows of the dead. And the truth within your memories.",
						"japanese": "私はただ、亡者たちの誓いを守るだけだ。お前の記憶の中の真実も。",
						"chinese": "我只是守护着亡者的誓言。以及你记忆中的真相。",
						"french": "Je ne fais que respecter les vœux des morts. Et la vérité dans tes souvenirs.",
						"spanish": "Yo solo cumplo los juramentos de los muertos. Y la verdad en tus recuerdos.",
						"vietnamese": "Ta chỉ đơn thuần là giữ lời thề của những người đã khuất. Cả sự thật trong ký ức của ngươi nữa.",
						"thai": "ฉันเพียงแค่รักษาสัตย์สาบานของผู้ตาย และความจริงในความทรงจำของเจ้าด้วย",
						"hindi": "मैं बस मृतकों की प्रतिज्ञाएँ निभाती हूँ। और तुम्हारी यादों में छिपी सच्चाई भी।"
					},
					"type": "speech"
				},
				{
					"spot": [
						1,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "hild",
					"content": {
						"korean": "도망쳐! 저자는 너의 죄를 양분 삼아 거대해질 것이다!",
						"english": "Flee! He feeds on your sins to grow colossal!",
						"japanese": "逃げろ！奴は貴様の罪を糧に巨大化するだろう！",
						"chinese": "快逃！他会以你的罪孽为养分，变得更加强大！",
						"french": "Fuyez ! Il grandira, nourri par vos péchés !",
						"spanish": "¡Huye! ¡Él se hará colosal, alimentado por tus pecados!",
						"vietnamese": "Chạy đi! Hắn sẽ lớn mạnh bằng cách nuốt chửng tội lỗi của ngươi!",
						"thai": "หนีไป! มันจะเติบโตขึ้นจากการกัดกินบาปของเจ้า!",
						"hindi": "भागो! वह तुम्हारे पापों से पोषण पाकर विशालकाय हो जाएगा!"
					},
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"speaker": "hild",
					"action": "exit"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "여기서 끝내겠어!",
						"english": "I'll end this here!",
						"japanese": "ここで終わらせる！",
						"chinese": "就在这里结束吧！",
						"french": "J'en finirai ici !",
						"spanish": "¡Lo terminaré aquí!",
						"vietnamese": "Ta sẽ kết thúc nó tại đây!",
						"thai": "ฉันจะจบมันตรงนี้!",
						"hindi": "मैं इसे यहीं खत्म करूँगा!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 사라진다.",
						"english": "The colossal shadow slowly fades.",
						"japanese": "巨大な影がゆっくりと消えていく。",
						"chinese": "巨大的阴影渐渐消散。",
						"french": "L'ombre colossale s'estompe lentement.",
						"spanish": "La sombra colosal se desvanece lentamente.",
						"vietnamese": "Bóng đen khổng lồ từ từ tan biến.",
						"thai": "เงาอันมหึมากำลังเลือนหายไปช้าๆ",
						"hindi": "विशाल परछाई धीरे-धीरे गायब हो जाती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이걸로 끝낼 수 있을 거라 생각하나? 네 죄는… 더 깊어질 뿐…",
						"english": "...Do you truly think this is enough to end it? Your sins will only... deepen...",
						"japanese": "…たったこれしきで終わるとでも？貴様の罪は…さらに深まるだけだ…",
						"chinese": "…你以为这样就能结束吗？你的罪孽…只会更加深重…",
						"french": "...Penses-tu vraiment que cela suffira à y mettre fin ? Tes péchés ne feront que... s'approfondir...",
						"spanish": "...¿De verdad crees que esto es suficiente para terminarlo? Tus pecados solo... se harán más profundos...",
						"vietnamese": "...Ngươi nghĩ chỉ vậy là đủ để kết thúc sao? Tội lỗi của ngươi... chỉ càng thêm sâu sắc...",
						"thai": "...เจ้าคิดว่าแค่นี้จะจบได้งั้นรึ? บาปของเจ้า... มีแต่จะยิ่งลึกซึ้งขึ้นเท่านั้น...",
						"hindi": "...क्या तुम्हें सच में लगता है कि यह इसे खत्म करने के लिए काफी है? तुम्हारे पाप... और गहरे होते जाएंगे..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이건… 시작에 불과하다는 건가?",
						"english": "Is this... merely the beginning?",
						"japanese": "これは…始まりに過ぎないというのか？",
						"chinese": "这…只是个开始吗？",
						"french": "Ce n'est... que le début ?",
						"spanish": "¿Esto es... meramente el principio?",
						"vietnamese": "Đây... chỉ mới là khởi đầu thôi sao?",
						"thai": "นี่...เป็นเพียงจุดเริ่มต้นเท่านั้นหรือ?",
						"hindi": "क्या यह... केवल शुरुआत है?"
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "…또 다른 진실이 너를 기다리고 있을 거야. 얼어붙은 기억 속에서…",
						"english": "...Another truth awaits you. Within frozen memories...",
						"japanese": "…また別の真実が貴様を待っているだろう。凍てついた記憶の中で…",
						"chinese": "…另一个真相正等着你。在冰封的记忆中…",
						"french": "...Une autre vérité t'attend. Au sein de souvenirs gelés...",
						"spanish": "...Otra verdad te espera. Dentro de los recuerdos congelados...",
						"vietnamese": "...Một sự thật khác đang chờ đợi ngươi. Trong ký ức đóng băng...",
						"thai": "...ความจริงอีกอย่างหนึ่งกำลังรอเจ้าอยู่ ภายในความทรงจำที่เยือกแข็ง...",
						"hindi": "...एक और सच तुम्हारा इंतजार कर रहा है। जमी हुई यादों के भीतर..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "길고 긴 절규의 시작은, 아직 끝나지 않았다. 비극은 더욱 깊어진다.",
						"english": "The long, drawn-out scream has not yet ended. The tragedy deepens.",
						"japanese": "長く、長い絶叫の始まりは、まだ終わらない。悲劇はさらに深まる。",
						"chinese": "漫长的尖叫，才刚刚开始，远未结束。悲剧愈发深重。",
						"french": "Le début du long cri prolongé n'est pas encore terminé. La tragédie s'aggrave.",
						"spanish": "El largo y prolongado grito aún no ha terminado. La tragedia se profundiza.",
						"vietnamese": "Khởi đầu của tiếng gào thét dài hơi, vẫn chưa kết thúc. Bi kịch càng thêm sâu sắc.",
						"thai": "การเริ่มต้นของเสียงกรีดร้องอันยาวนานยังไม่สิ้นสุด โศกนาฏกรรมยิ่งลึกซึ้งขึ้น",
						"hindi": "लंबे, खींचे हुए चीख की शुरुआत अभी खत्म नहीं हुई है। त्रासदी और गहरी होती जा रही है।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 절규가 모든 것을 집어삼킨다.",
						"english": "Frozen screams devour all.",
						"japanese": "凍てついた絶叫が全てを飲み込む。",
						"chinese": "冰冷的绝叫吞噬一切。",
						"french": "Des cris glacés dévorent tout.",
						"spanish": "Gritos helados devoran todo.",
						"vietnamese": "Tiếng thét đóng băng nuốt chửng mọi thứ.",
						"thai": "เสียงกรีดร้องที่เยือกแข็งกลืนกินทุกสิ่ง",
						"hindi": "जमी हुई चीखें सब कुछ निगल जाती हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 죄인이여. 너의 심장은 이미 얼어붙어 있군.",
						"english": "Weak sinner. Your heart is already frozen.",
						"japanese": "弱き罪人よ。貴様の心臓は既に凍てついているな。",
						"chinese": "懦弱的罪人啊。你的心脏早已冻结。",
						"french": "Pécheur faible. Ton cœur est déjà gelé.",
						"spanish": "Débil pecador. Tu corazón ya está congelado.",
						"vietnamese": "Kẻ tội đồ yếu đuối. Trái tim ngươi đã đóng băng rồi.",
						"thai": "คนบาปผู้ไร้กำลัง หัวใจของเจ้าแข็งเป็นน้ำแข็งแล้วสินะ",
						"hindi": "कमजोर पापी। तुम्हारा दिल पहले ही जम चुका है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아.",
						"english": "It's not... over yet. I won't give up.",
						"japanese": "まだ…終わってない。諦めない。",
						"chinese": "还…没结束。我不会放弃的。",
						"french": "Ce n'est pas... encore fini. Je n'abandonnerai pas.",
						"spanish": "Todavía no... ha terminado. No me rendiré.",
						"vietnamese": "Vẫn chưa... kết thúc đâu. Ta sẽ không từ bỏ.",
						"thai": "ยัง...ไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं हार नहीं मानूंगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계의 심장이 얼어붙은 듯한 설원.",
			"그 아래, 고대 바이킹의 비극이 잠들어 있었다.",
			"잊힌 속삭임이 길을 잃은 자를 유혹하고 —",
			"진실은 차가운 환영처럼 다가온다."
		],
		"english": [
			"A snowfield where the world's heart seems frozen.",
			"Beneath it, an ancient Viking tragedy lay dormant.",
			"Forgotten whispers lure the lost —",
			"Truth approaches like a cold illusion."
		],
		"japanese": [
			"世界の心臓が凍てついたような雪原。",
			"その下には、古きバイキングの悲劇が眠っていた。",
			"忘れられた囁きが迷える者を誘惑し —",
			"真実は冷たい幻影のように訪れる。"
		],
		"chinese": [
			"世界之心仿佛冻结的雪原。",
			"其下，沉睡着古老维京人的悲剧。",
			"被遗忘的低语诱惑着迷失者 —",
			"真相如冰冷的幻影般降临。"
		],
		"french": [
			"Une étendue enneigée où le cœur du monde semble gelé.",
			"En dessous, une ancienne tragédie viking sommeillait.",
			"Des murmures oubliés attirent les égarés —",
			"La vérité approche comme une froide illusion."
		],
		"spanish": [
			"Un campo de nieve donde el corazón del mundo parece congelado.",
			"Debajo, una antigua tragedia vikinga yacía dormida.",
			"Susurros olvidados atraen a los perdidos —",
			"La verdad se acerca como una fría ilusión."
		],
		"vietnamese": [
			"Cánh đồng tuyết nơi trái tim thế giới như đóng băng.",
			"Bên dưới, bi kịch Viking cổ đại đang ngủ yên.",
			"Những lời thì thầm bị lãng quên quyến rũ kẻ lạc lối —",
			"Sự thật đến như một ảo ảnh lạnh giá."
		],
		"thai": [
			"ทุ่งหิมะที่ใจกลางโลกดูเหมือนจะแข็งตัว",
			"ใต้ผืนหิมะ ความเศร้าโศกของชาวไวกิ้งโบราณหลับใหลอยู่",
			"เสียงกระซิบที่ถูกลืมเลือนล่อลวงผู้หลงทาง —",
			"ความจริงเข้ามาใกล้เหมือนภาพลวงตาอันเย็นชา"
		],
		"hindi": [
			"एक बर्फीला मैदान जहाँ दुनिया का दिल जमा हुआ लगता है।",
			"उसके नीचे, एक प्राचीन वाइकिंग त्रासदी सोई हुई थी।",
			"भूली हुई फुसफुसाहटें भटके हुओं को लुभाती हैं —",
			"सत्य एक ठंडे भ्रम की तरह आता है।"
		]
	}
} as const;
