export const scenario_snowy_finny_49_01 = {
	"scenario_id": "snowy_finny_49_01",
	"order": 1,
	"act": "intro",
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 눈보라가 시야를 가렸다. 척박한 설원, 오직 발자국만이 길을 만들었다.",
						"english": "The cold blizzard obscured my sight. A desolate snowfield, only footprints marked the way.",
						"japanese": "冷たい吹雪が視界を遮った。荒れ果てた雪原、足跡だけが道を作っていた。",
						"chinese": "寒冷的暴风雪遮蔽了视线。贫瘠的雪原上，只有脚印开辟出道路。",
						"french": "Le froid blizzard obscurcissait ma vue. Une étendue de neige désolée, seuls les pas traçaient le chemin.",
						"spanish": "La fría ventisca me cegaba. Una llanura nevada desolada, solo las huellas marcaban el camino.",
						"vietnamese": "Bão tuyết lạnh giá che khuất tầm nhìn. Cánh đồng tuyết hoang vắng, chỉ có dấu chân tạo nên con đường.",
						"thai": "พายุหิมะอันหนาวเหน็บบดบังทัศนียภาพ ทุ่งหิมะอันรกร้าง มีเพียงรอยเท้าเท่านั้นที่นำทาง",
						"hindi": "ठंडे बर्फीले तूफ़ान ने मेरी दृष्टि रोक दी। एक उजाड़ बर्फ़ीला मैदान, केवल पैरों के निशान ही रास्ता बना रहे थे।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 얼어 죽겠네. 저거 뭐야?",
						"english": "Damn, I'm freezing to death. What's that?",
						"japanese": "くそ、凍え死にそうだ。あれは何だ？",
						"chinese": "该死，我要冻死了。那是什么？",
						"french": "Mince, je meurs de froid. Qu'est-ce que c'est que ça ?",
						"spanish": "Maldita sea, me muero de frío. ¿Qué es eso?",
						"vietnamese": "Chết tiệt, tôi sắp chết cóng rồi. Cái gì kia?",
						"thai": "บ้าเอ๊ย ฉันจะแข็งตายอยู่แล้ว นั่นอะไรน่ะ?",
						"hindi": "लानत है, मैं ठंड से मर रहा हूँ। वह क्या है?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 덩어리 안에 절인 청어가 갇혀 있었다. 기이한 존재였다.",
						"english": "A pickled herring was trapped inside a giant block of ice. It was an odd existence.",
						"japanese": "巨大な氷の塊の中に、塩漬けのニシンが閉じ込められていた。奇妙な存在だった。",
						"chinese": "一块巨大的冰块里困着一条腌鲱鱼。那是一个奇怪的存在。",
						"french": "Un hareng mariné était piégé dans un gigantesque bloc de glace. C'était une existence étrange.",
						"spanish": "Un arenque encurtido estaba atrapado dentro de un gigantesco bloque de hielo. Era una existencia extraña.",
						"vietnamese": "Một con cá trích ngâm muối bị mắc kẹt bên trong một khối băng khổng lồ. Đó là một sự tồn tại kỳ lạ.",
						"thai": "ปลาเฮอร์ริ่งดองตัวหนึ่งถูกขังอยู่ในก้อนน้ำแข็งขนาดยักษ์ มันเป็นสิ่งมีชีวิตที่แปลกประหลาด",
						"hindi": "एक विशाल बर्फ़ के टुकड़े के अंदर एक अचार वाली हेरिंग फँसी हुई थी। यह एक अजीब अस्तित्व था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크아아악! 시끄러워! 저리 가!",
						"english": "Graaah! Be quiet! Get away!",
						"japanese": "ぐああああ！うるさい！あっちへ行け！",
						"chinese": "啊啊啊！闭嘴！滚开！",
						"french": "Grrr ! Taisez-vous ! Allez-vous-en !",
						"spanish": "¡Grrr! ¡Cállate! ¡Aléjate!",
						"vietnamese": "Á á á! Im đi! Tránh ra!",
						"thai": "กรรร! เงียบนะ! ไปให้พ้น!",
						"hindi": "ग्र्राह! चुप रहो! दूर हो जाओ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "멈춰요! 그건… 저주받은 존재예요.",
						"english": "Stop! That is… a cursed being.",
						"japanese": "やめて！それは…呪われた存在です。",
						"chinese": "住手！那是一个…被诅咒的存在。",
						"french": "Arrêtez ! C'est… une créature maudite.",
						"spanish": "¡Detente! Eso es… un ser maldito.",
						"vietnamese": "Dừng lại! Đó là… một sinh vật bị nguyền rủa.",
						"thai": "หยุดนะ! นั่นน่ะ...คือสิ่งมีชีวิตที่ถูกสาปแช่ง",
						"hindi": "रुको! वह… एक शापित प्राणी है।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저주? 무슨 소리야?",
						"english": "A curse? What are you talking about?",
						"japanese": "呪い？何を言っているんだ？",
						"chinese": "诅咒？你在说什么？",
						"french": "Une malédiction ? De quoi parlez-vous ?",
						"spanish": "¿Una maldición? ¿De qué estás hablando?",
						"vietnamese": "Lời nguyền? Anh đang nói gì vậy?",
						"thai": "คำสาป? คุณกำลังพูดถึงอะไรน่ะ?",
						"hindi": "एक शाप? तुम क्या कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "오딘에게 바쳐질 제물을 모독한 자는… 가장 혐오하는 형태로 변해 설원을 떠돈다고…",
						"english": "Those who defile the offerings to Odin… are transformed into the forms they despise most and wander the snowfield…",
						"japanese": "オーディンに捧げられる供物を冒涜した者は…最も嫌悪する姿に変わり、雪原をさまようと…",
						"chinese": "亵渎奥丁祭品的人…会变成他们最憎恶的形态，徘徊在雪原上…",
						"french": "Ceux qui profanent les offrandes à Odin… sont transformés en la forme qu'ils abhorrent le plus et errent sur l'étendue de neige…",
						"spanish": "Aquellos que profanan las ofrendas a Odín… se transforman en las formas que más desprecian y vagan por la nieve…",
						"vietnamese": "Những kẻ xúc phạm lễ vật dâng lên Odin… sẽ bị biến thành hình dạng mà họ ghê tởm nhất và lang thang trên cánh đồng tuyết…",
						"thai": "ผู้ที่ดูหมิ่นเครื่องบูชาแด่โอดิน...จะถูกแปลงกายเป็นสิ่งที่พวกเขารังเกียจที่สุดและร่อนเร่ไปในทุ่งหิมะ...",
						"hindi": "जो ओडिन की भेंटों का अपमान करते हैं… वे अपने सबसे घृणित रूप में बदल जाते हैं और बर्फ़ीले मैदान में भटकते रहते हैं…"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "웃기지 마. 그냥 거대한 청어잖아.",
						"english": "Don't make me laugh. It's just a giant herring.",
						"japanese": "笑わせないで。ただの巨大なニシンじゃないか。",
						"chinese": "别逗了。那只是一条巨大的鲱鱼。",
						"french": "Ne me fais pas rire. C'est juste un hareng géant.",
						"spanish": "No me hagas reír. Es solo un arenque gigante.",
						"vietnamese": "Đừng làm tôi cười. Nó chỉ là một con cá trích khổng lồ thôi.",
						"thai": "อย่าทำให้ฉันหัวเราะสิ มันก็แค่ปลาเฮอร์ริ่งยักษ์เอง",
						"hindi": "हँसाओ मत। यह तो बस एक विशाल हेरिंग है。"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "끄아아아아! 날 놔줘! 이 지겨운 고통!",
						"english": "Aaaargh! Let me go! This endless agony!",
						"japanese": "うわあああああ！放してくれ！このうんざりする苦痛！",
						"chinese": "啊啊啊啊啊！放开我！这无尽的痛苦！",
						"french": "Aaaargh ! Lâche-moi ! Cette souffrance insupportable !",
						"spanish": "¡Aaaargh! ¡Suéltame! ¡Este dolor insoportable!",
						"vietnamese": "Áaaaaa! Buông tôi ra! Nỗi đau dai dẳng này!",
						"thai": "อ๊ากกกก! ปล่อยฉันนะ! ความเจ็บปวดที่น่าเบื่อหน่ายนี้!",
						"hindi": "आआआआआ! मुझे छोड़ दो! यह असहनीय पीड़ा!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저게 뭔가 아는 눈치인데? 따라가 보자.",
						"english": "Looks like it knows something. Let's follow it.",
						"japanese": "あれ、何か知ってるみたいだな？追いかけてみよう。",
						"chinese": "看来它知道些什么？我们跟上去看看。",
						"french": "On dirait qu'il sait quelque chose. Suivons-le.",
						"spanish": "Parece que sabe algo. Sigámoslo.",
						"vietnamese": "Có vẻ nó biết gì đó. Hãy đi theo nó.",
						"thai": "ดูเหมือนมันจะรู้อะไรบางอย่าง? ตามไปดูกันเถอะ",
						"hindi": "लगता है इसे कुछ पता है? चलो इसका पीछा करते हैं।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "눈보라에 파묻힌 오래된 제단의 잔해가 어렴풋이 보였다. 알 수 없는 문양과 제물들이 흩어져 있었다.",
						"english": "The faint remains of an ancient altar, buried in the blizzard, were visible. Unknown symbols and offerings were scattered about.",
						"japanese": "吹雪に埋もれた古い祭壇の残骸がぼんやりと見えた。未知の模様と供物が散らばっていた。",
						"chinese": "在暴风雪中，一座古老祭坛的残骸依稀可见。未知的图腾和祭品散落一地。",
						"french": "Les faibles vestiges d'un ancien autel, ensevelis sous le blizzard, étaient visibles. Des symboles inconnus et des offrandes étaient éparpillés.",
						"spanish": "Los débiles restos de un antiguo altar, sepultados por la ventisca, eran visibles. Símbolos desconocidos y ofrendas estaban esparcidos.",
						"vietnamese": "Những tàn tích mờ nhạt của một bàn thờ cổ đại, bị chôn vùi trong bão tuyết, hiện ra. Những biểu tượng không rõ và lễ vật nằm rải rác.",
						"thai": "ซากแท่นบูชาโบราณที่ถูกฝังอยู่ในพายุหิมะปรากฏให้เห็นลางๆ มีสัญลักษณ์ที่ไม่รู้จักและเครื่องเซ่นไหว้กระจัดกระจายอยู่",
						"hindi": "बर्फीले तूफान में दबे एक प्राचीन वेदी के धुंधले अवशेष दिखाई दिए। अज्ञात प्रतीक और चढ़ावे बिखरे हुए थे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "제발… 더 이상 쫓지 마세요. 불길한 예감이 들어요.",
						"english": "Please... don't chase me anymore. I have a bad feeling about this.",
						"japanese": "お願い…もう追わないでください。不吉な予感がします。",
						"chinese": "拜托了……别再追了。我有一种不祥的预感。",
						"french": "S'il vous plaît... ne me poursuivez plus. J'ai un mauvais pressentiment.",
						"spanish": "Por favor... no me persigan más. Tengo un mal presentimiento.",
						"vietnamese": "Làm ơn... đừng đuổi theo tôi nữa. Tôi có linh cảm chẳng lành.",
						"thai": "ได้โปรด...อย่าตามฉันมาอีกเลย ฉันมีลางสังหรณ์ไม่ดีเลย",
						"hindi": "कृपया... मेरा पीछा और मत करो। मुझे एक बुरा एहसास हो रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "걱정 마. 우리가 해결할게.",
						"english": "Don't worry. We'll handle it.",
						"japanese": "心配ない。俺たちが何とかする。",
						"chinese": "别担心。我们会解决的。",
						"french": "Ne t'inquiète pas. On va s'en occuper.",
						"spanish": "No te preocupes. Nosotros nos encargaremos.",
						"vietnamese": "Đừng lo. Chúng ta sẽ giải quyết nó.",
						"thai": "ไม่ต้องห่วง เราจะจัดการเอง",
						"hindi": "चिंता मत करो। हम संभाल लेंगे।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "크으으… 냄새나… 역겨운 인간들…",
						"english": "Grrr... Smells... Disgusting humans...",
						"japanese": "クウウウ…臭い…忌まわしい人間どもめ…",
						"chinese": "嘶……好臭……恶心的人类……",
						"french": "Grrr... Ça sent mauvais... Humains dégoûtants...",
						"spanish": "Grrr... Huele mal... Humanos asquerosos...",
						"vietnamese": "Gừừừ... Hôi quá... Loài người ghê tởm...",
						"thai": "ครืนนนน... เหม็น... มนุษย์น่ารังเกียจ...",
						"hindi": "ग्र्र्र्र... बदबू आ रही है... घिनौने इंसान..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저놈… 뭔가 알고 있어.",
						"english": "That one... knows something.",
						"japanese": "あいつ…何か知ってるぞ。",
						"chinese": "那家伙……知道些什么。",
						"french": "Celui-là... il sait quelque chose.",
						"spanish": "Ese... sabe algo.",
						"vietnamese": "Tên đó... biết gì đó.",
						"thai": "ไอ้เจ้านั่น... มันรู้อะไรบางอย่าง",
						"hindi": "वह... कुछ जानता है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "제물에 손을 댄 족장은… 결국 가장 혐오하는 모습으로 변했어요.",
						"english": "The chief who touched the offering... eventually transformed into the form he most despised.",
						"japanese": "供物に手を触れた族長は…結局、最も嫌悪する姿に変わってしまった。",
						"chinese": "触碰了祭品的族长……最终变成了他最憎恶的样子。",
						"french": "Le chef qui a touché l'offrande... a fini par se transformer en la forme qu'il détestait le plus.",
						"spanish": "El jefe que tocó la ofrenda... finalmente se transformó en la forma que más despreciaba.",
						"vietnamese": "Vị tộc trưởng đã chạm vào vật tế... cuối cùng biến thành hình dạng mà ông ta ghê tởm nhất.",
						"thai": "หัวหน้าเผ่าที่แตะต้องเครื่องบูชา... ในที่สุดก็กลายร่างเป็นสิ่งที่เขาเกลียดชังที่สุด",
						"hindi": "बलि को छूने वाला सरदार... अंततः उसी रूप में बदल गया जिससे वह सबसे ज्यादा घृणा करता था।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "족장?",
						"english": "The chief?",
						"japanese": "族長？",
						"chinese": "族长？",
						"french": "Le chef ?",
						"spanish": "¿El jefe?",
						"vietnamese": "Tộc trưởng?",
						"thai": "หัวหน้าเผ่า?",
						"hindi": "सरदार?"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이 거대한 청어가… 그의 모습일지도 몰라요.",
						"english": "This giant herring... it might be him.",
						"japanese": "この巨大なニシンが…彼の姿なのかもしれない。",
						"chinese": "这巨大的鲱鱼…可能就是他。",
						"french": "Ce hareng géant... ce pourrait être lui.",
						"spanish": "Este arenque gigante... podría ser él.",
						"vietnamese": "Con cá trích khổng lồ này... có thể là hắn ta.",
						"thai": "ปลาเฮอร์ริ่งยักษ์ตัวนี้... อาจจะเป็นเขา.",
						"hindi": "यह विशाल हेरिंग... शायद वही है।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 이름은 {random_boss}! 감히 나를 모독하다니!",
						"english": "My name is {random_boss}! How dare you defile me!",
						"japanese": "我が名は{random_boss}！よくも私を冒涜したな！",
						"chinese": "我叫{random_boss}！竟敢亵渎我！",
						"french": "Je m'appelle {random_boss} ! Comment oses-tu me profaner !",
						"spanish": "¡Mi nombre es {random_boss}! ¡Cómo te atreves a profanarme!",
						"vietnamese": "Ta là {random_boss}! Sao ngươi dám báng bổ ta!",
						"thai": "ข้าคือ {random_boss}! เจ้ากล้าดียังไงมาหมิ่นประมาทข้า!",
						"hindi": "मेरा नाम {random_boss} है! तुम्हारी हिम्मत कैसे हुई मुझे अपवित्र करने की!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "점점 흥미로워지는군.",
						"english": "Getting more interesting.",
						"japanese": "ますます面白くなってきたな。",
						"chinese": "越来越有趣了。",
						"french": "Ça devient de plus en plus intéressant.",
						"spanish": "Se está poniendo más interesante.",
						"vietnamese": "Càng ngày càng thú vị.",
						"thai": "เริ่มน่าสนใจขึ้นเรื่อยๆ.",
						"hindi": "यह और भी दिलचस्प होता जा रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						1,
						2
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 이상은… 돌이킬 수 없어요. 저주의 심장부에 다다르고 있어요.",
						"english": "Beyond this... there's no turning back. We're reaching the heart of the curse.",
						"japanese": "これ以上は…引き返せない。呪いの核心に迫っている。",
						"chinese": "再往前…就无法回头了。我们正接近诅咒的核心。",
						"french": "Au-delà... il n'y a pas de retour possible. Nous atteignons le cœur de la malédiction.",
						"spanish": "Más allá... no hay vuelta atrás. Estamos llegando al corazón de la maldición.",
						"vietnamese": "Vượt qua đây... không thể quay lại được nữa. Chúng ta đang tiến vào trung tâm của lời nguyền.",
						"thai": "เลยจากนี้ไป... ไม่มีทางหวนกลับแล้ว. เรากำลังเข้าสู่ใจกลางของคำสาป.",
						"hindi": "इसके आगे... कोई वापसी नहीं। हम श्राप के केंद्र तक पहुँच रहे हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 알아야 해. 멈출 수 없어.",
						"english": "I must know the truth. I can't stop.",
						"japanese": "真実を知らねば。止まれない。",
						"chinese": "我必须知道真相。无法停止。",
						"french": "Je dois connaître la vérité. Je ne peux pas m'arrêter.",
						"spanish": "Debo saber la verdad. No puedo parar.",
						"vietnamese": "Phải biết sự thật. Không thể dừng lại.",
						"thai": "ต้องรู้ความจริง. หยุดไม่ได้.",
						"hindi": "मुझे सच जानना होगा। मैं रुक नहीं सकता।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "오지 마! 다가오지 마! 날 혼자 내버려 둬!",
						"english": "Don't come! Stay away! Leave me alone!",
						"japanese": "来るな！近づくな！私を一人にしてくれ！",
						"chinese": "别过来！别靠近！让我一个人待着！",
						"french": "Ne viens pas ! N'approche pas ! Laisse-moi tranquille !",
						"spanish": "¡No vengas! ¡No te acerques! ¡Déjame en paz!",
						"vietnamese": "Đừng tới! Đừng lại gần! Để tôi yên!",
						"thai": "อย่ามา! อย่าเข้ามาใกล้! ปล่อยฉันอยู่คนเดียว!",
						"hindi": "मत आओ! पास मत आओ! मुझे अकेला छोड़ दो!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "차가운 공기가 탐험대의 발걸음을 재촉했다. 되돌아갈 길은 없었다.",
						"english": "The cold air urged the expedition forward. There was no way back.",
						"japanese": "冷たい空気が探検隊の足取りを急がせた。もはや引き返す道はなかった。",
						"chinese": "冰冷的空气催促着探险队前进。已无回头之路。",
						"french": "L'air froid pressait l'expédition. Il n'y avait plus de retour possible.",
						"spanish": "El aire frío apremiaba los pasos de la expedición. No había vuelta atrás.",
						"vietnamese": "Không khí lạnh lẽo thúc giục bước chân của đoàn thám hiểm. Không còn đường quay lại.",
						"thai": "อากาศที่หนาวเย็นเร่งเร้าให้คณะสำรวจก้าวไปข้างหน้า. ไม่มีทางย้อนกลับแล้ว.",
						"hindi": "ठंडी हवा ने अभियान दल के कदमों को तेज कर दिया। वापसी का कोई रास्ता नहीं था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "오딘은… 용서치 않아… 너희도….",
						"english": "Odin... unforgiving... Neither will you.",
						"japanese": "オーディンは…許さない…お前たちも…。",
						"chinese": "奥丁不会原谅……你们也一样……",
						"french": "Odin ne pardonnera pas... Ni vous...",
						"spanish": "Odín no perdonará... Ni vosotros...",
						"vietnamese": "Odin sẽ không tha thứ... Các ngươi cũng vậy...",
						"thai": "โอดินจะไม่ยกโทษให้... พวกเจ้าก็ด้วย...",
						"hindi": "ओडिन माफ़ नहीं करेगा... तुम भी नहीं..."
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "우린 진실을 찾을 뿐이다. 비극은 이제 끝낼 거야!",
						"english": "We only seek the truth. We'll end this tragedy now!",
						"japanese": "我々は真実を求めるだけだ。この悲劇は今、終わらせる！",
						"chinese": "我们只是在寻找真相。这场悲剧该结束了！",
						"french": "Nous ne faisons que chercher la vérité. Cette tragédie va prendre fin maintenant !",
						"spanish": "Solo buscamos la verdad. ¡Esta tragedia terminará ahora!",
						"vietnamese": "Chúng ta chỉ tìm kiếm sự thật. Bi kịch này sẽ chấm dứt ngay bây giờ!",
						"thai": "เราเพียงแค่ตามหาความจริง เราจะยุติโศกนาฏกรรมนี้เดี๋ยวนี้!",
						"hindi": "हम केवल सच ढूंढ रहे हैं। इस त्रासदी को अब ख़त्म करेंगे!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "절규는 멎었지만, 설원은 더 깊은 침묵 속으로 잠겨들었다.",
						"english": "The screams ceased, but the snowfield sank into a deeper silence.",
						"japanese": "叫び声は止んだが、雪原はより深い沈黙へと沈んでいった。",
						"chinese": "尖叫声平息了，但雪原却陷入了更深的沉寂。",
						"french": "Les cris cessèrent, mais l'étendue enneigée sombra dans un silence plus profond.",
						"spanish": "Los gritos cesaron, pero el campo nevado se sumió en un silencio más profundo.",
						"vietnamese": "Tiếng thét ngừng bặt, nhưng đồng tuyết chìm vào sự im lặng sâu thẳm hơn.",
						"thai": "เสียงกรีดร้องเงียบลง แต่ทุ่งหิมะกลับจมดิ่งสู่ความเงียบงันที่ลึกซึ้งกว่าเดิม",
						"hindi": "चीखें थम गईं, लेकिन बर्फ का मैदान और गहरी खामोशी में डूब गया।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "저주의 시작은 이제부터였다. 영원히 끝나지 않을 것 같은.",
						"english": "The curse truly began now. One that felt eternal.",
						"japanese": "呪いは今から始まった。永遠に終わらないかのように。",
						"chinese": "诅咒自此开始。仿佛永无止境。",
						"french": "La malédiction commençait maintenant. Une malédiction qui semblait éternelle.",
						"spanish": "La maldición comenzó ahora. Una que parecía interminable.",
						"vietnamese": "Lời nguyền bắt đầu từ bây giờ. Một lời nguyền dường như không bao giờ kết thúc.",
						"thai": "คำสาปเริ่มต้นขึ้น ณ บัดนี้ ราวกับว่าจะไม่มีวันสิ้นสุด",
						"hindi": "अभिशाप अब शुरू हुआ। ऐसा जो कभी ख़त्म न होने वाला था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 영원한 고통 속에서 헤맬 뿐!",
						"english": "Fools... You'll only wander in eternal torment!",
						"japanese": "愚か者どもめ…永遠の苦痛の中を彷徨うがいい！",
						"chinese": "蠢货们……只会在永恒的痛苦中徘徊！",
						"french": "Imbéciles... Vous ne ferez qu'errer dans un tourment éternel !",
						"spanish": "¡Estúpidos... Solo vagaréis en tormento eterno!",
						"vietnamese": "Lũ ngu ngốc... Các ngươi sẽ chỉ lạc lối trong đau khổ vĩnh hằng!",
						"thai": "พวกโง่เง่า... จะได้หลงทางอยู่ในความทรมานชั่วนิรันดร์!",
						"hindi": "बेवकूफ़ों... तुम बस अनंत पीड़ा में भटकोगे!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 다시 온다!",
						"english": "Damn it... It's not over yet. I'll be back!",
						"japanese": "くそっ…まだ終わってない。また来るぞ！",
						"chinese": "该死……还没结束。我还会再来的！",
						"french": "Zut... Ce n'est pas encore fini. Je reviendrai !",
						"spanish": "¡Maldita sea... Esto aún no ha terminado. Volveré!",
						"vietnamese": "Chết tiệt... Vẫn chưa kết thúc đâu. Ta sẽ trở lại!",
						"thai": "บ้าจริง... ยังไม่จบแค่นี้หรอก ข้าจะกลับมา!",
						"hindi": "धिक्कार है... अभी ख़त्म नहीं हुआ। मैं वापस आऊँगा!"
					},
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크아아아악! 감히… 감히 여기까지 오다니!",
						"english": "Graaaah! How dare you... how dare you come this far!",
						"japanese": "ぐああああ！よくも…よくもここまで来たな！",
						"chinese": "啊啊啊啊！竟敢…竟敢到这里来！",
						"french": "Graaaah ! Comment oses-tu... comment oses-tu venir jusqu'ici !",
						"spanish": "¡Graaaah! ¡Cómo te atreves... cómo te atreves a llegar tan lejos!",
						"vietnamese": "Aaaaaa! Sao ngươi... sao ngươi dám đến tận đây!",
						"thai": "กร๊าซซซซ! แกกล้าดียังไง... แกกล้าดียังไงถึงมาได้ไกลขนาดนี้!",
						"hindi": "घुर्रर्र! तुम्हारी हिम्मत कैसे हुई... तुम्हारी हिम्मत कैसे हुई यहाँ तक आने की!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네 고통을 끝내주마!",
						"english": "I'll end your suffering!",
						"japanese": "貴様の苦痛を終わらせてやろう！",
						"chinese": "我将终结你的痛苦！",
						"french": "Je vais mettre fin à ta souffrance !",
						"spanish": "¡Terminaré con tu sufrimiento!",
						"vietnamese": "Ta sẽ kết thúc nỗi đau của ngươi!",
						"thai": "ข้าจะยุติความทรมานของเจ้า!",
						"hindi": "मैं तुम्हारी पीड़ा समाप्त कर दूंगा!"
					},
					"speaker": "character_any"
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
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "결국… 이 길을 택하는군요. 부디… 그를 평화롭게 해주세요.",
						"english": "So... you choose this path. Please... let him rest in peace.",
						"japanese": "結局…この道を選ぶのですね。どうか…彼を安らかに眠らせてあげてください。",
						"chinese": "最终…你还是选择了这条路。请…让他安息吧。",
						"french": "Alors... vous choisissez cette voie. S'il vous plaît... laissez-le reposer en paix.",
						"spanish": "Así que... eliges este camino. Por favor... déjale descansar en paz.",
						"vietnamese": "Cuối cùng... ngươi cũng chọn con đường này. Xin hãy... để hắn yên nghỉ.",
						"thai": "ในที่สุด... เจ้าก็เลือกเส้นทางนี้. ได้โปรด... ให้เขาได้พักผ่อนอย่างสงบ.",
						"hindi": "तो... तुम यह रास्ता चुनते हो। कृपया... उसे शांति से रहने दो।"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "hild",
					"duration_ms": 400,
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹한의 설원, 잊혀진 저주의 흔적을 쫓아 고독한 여정이 시작된다.",
			"모든 것을 감추려는 듯, 눈보라만이 끝없이 휘몰아친다.",
			"그리고 그곳에서 — 절규하는 얼음 속 생명체를 만났다."
		],
		"english": [
			"A desolate journey begins across the harsh snowfield, tracing the forgotten remnants of a curse.",
			"As if to hide everything, only blizzards rage endlessly.",
			"And there — I encountered a creature screaming within the ice."
		],
		"japanese": [
			"極寒の雪原、忘れられた呪いの痕跡を追い、孤独な旅が始まる。",
			"全てを隠すかのように、吹雪だけが絶え間なく吹き荒れる。",
			"そしてそこで — 氷の中で絶叫する生命体と出会った。"
		],
		"chinese": [
			"严寒的雪原上，追寻着被遗忘的诅咒痕迹，一场孤独的旅程开始了。",
			"仿佛要掩盖一切，只有暴风雪无休止地肆虐着。",
			"在那里 — 我遇到了冰中咆哮的生物。"
		],
		"french": [
			"Une quête solitaire débute à travers l'étendue glaciale, sur les traces d'une malédiction oubliée.",
			"Comme pour tout masquer, seule la tempête de neige fait rage sans fin.",
			"Et là — j'ai rencontré une créature hurlante piégée dans la glace."
		],
		"spanish": [
			"En la desolada tundra helada, una solitaria travesía comienza, tras las huellas de una maldición olvidada.",
			"Como si quisiera ocultarlo todo, solo la ventisca azota sin cesar.",
			"Y allí — me encontré con una criatura que gritaba desde el hielo."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết khắc nghiệt, một hành trình cô độc bắt đầu, theo dấu vết của lời nguyền bị lãng quên.",
			"Như thể muốn che giấu mọi thứ, chỉ có bão tuyết không ngừng hoành hành.",
			"Và ở đó — tôi đã gặp một sinh vật đang gào thét trong băng."
		],
		"thai": [
			"การเดินทางอันโดดเดี่ยวเริ่มต้นขึ้น ณ ทุ่งหิมะอันโหดร้าย ตามรอยคำสาปที่ถูกลืมเลือน",
			"ราวกับจะปกปิดทุกสิ่ง มีเพียงพายุหิมะเท่านั้นที่โหมกระหน่ำไม่หยุดหย่อน",
			"และที่นั่น — ฉันได้พบกับสิ่งมีชีวิตที่กรีดร้องอยู่ในน้ำแข็ง"
		],
		"hindi": [
			"कठोर बर्फ़ीले मैदान में, एक शाप के भूले हुए निशान का पीछा करते हुए, एक अकेली यात्रा शुरू होती है।",
			"जैसे सब कुछ छिपाने के लिए, केवल बर्फीले तूफ़ान ही लगातार गरज रहे हैं।",
			"और वहाँ — मैं बर्फ़ में चीखते हुए एक प्राणी से मिला।"
		]
	}
} as const;
