export const scenario_snowy_skjalf_11_03 = {
	"scenario_id": "snowy_skjalf_11_03",
	"order": 3,
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "불안정한 빙하 지대가 눈앞에 펼쳐졌다.",
						"english": "An unstable glacial region lay before us.",
						"japanese": "不安定な氷河地帯が目の前に広がっていた。",
						"chinese": "一片不稳定的冰川区域展现在眼前。",
						"french": "Une région glaciaire instable s'étendait devant nous.",
						"spanish": "Una región glaciar inestable se extendía ante nosotros.",
						"vietnamese": "Một vùng băng hà không ổn định trải dài trước mắt.",
						"thai": "บริเวณธารน้ำแข็งที่ไม่เสถียรทอดตัวอยู่ตรงหน้า",
						"hindi": "एक अस्थिर हिमनद क्षेत्र हमारे सामने फैला हुआ था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "균열이 심상치 않아 보여.",
						"english": "The cracks look ominous.",
						"japanese": "亀裂は尋常ではないようだ。",
						"chinese": "裂缝看起来不寻常。",
						"french": "Les fissures semblent inquiétantes.",
						"spanish": "Las grietas parecen inquietantes.",
						"vietnamese": "Các vết nứt trông có vẻ đáng ngại.",
						"thai": "รอยแยกดูไม่ปกติเลย",
						"hindi": "दरारें अशुभ लग रही हैं।"
					},
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
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "이 정도는 아무것도 아니야. 따라와.",
						"english": "This is nothing. Follow me.",
						"japanese": "これくらい、どうってことない。ついてこい。",
						"chinese": "这算不了什么。跟着我。",
						"french": "Ce n'est rien. Suis-moi.",
						"spanish": "Esto no es nada. Sígueme.",
						"vietnamese": "Chuyện này không đáng gì. Đi theo tôi.",
						"thai": "แค่นี้เอง ไม่มีอะไรหรอก ตามมาสิ",
						"hindi": "यह कुछ भी नहीं है। मेरे पीछे आओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "하지만… 가끔 길을 잃는 기분이지.",
						"english": "But... sometimes, I feel lost.",
						"japanese": "だけど…時々、道に迷う気分になるんだ。",
						"chinese": "但是……有时候，我感觉迷失了方向。",
						"french": "Mais... parfois, j'ai l'impression de me perdre.",
						"spanish": "Pero... a veces, siento que me pierdo.",
						"vietnamese": "Nhưng... đôi khi, tôi cảm thấy lạc lối.",
						"thai": "แต่... บางครั้ง ฉันก็รู้สึกเหมือนหลงทาง",
						"hindi": "लेकिन... कभी-कभी, मुझे खोया हुआ महसूस होता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "잠깐… 여긴…",
						"english": "Wait... this place...",
						"japanese": "待て…ここは…",
						"chinese": "等等……这里是……",
						"french": "Attends... ici...",
						"spanish": "Espera... este lugar...",
						"vietnamese": "Khoan đã... chỗ này...",
						"thai": "เดี๋ยวก่อนนะ... ที่นี่มัน...",
						"hindi": "रुको... यह जगह..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 일이야, 이바르?",
						"english": "What's wrong, Ivar?",
						"japanese": "どうしたんだ、イヴァル？",
						"chinese": "怎么了，伊瓦尔？",
						"french": "Qu'y a-t-il, Ivar ?",
						"spanish": "¿Qué pasa, Ivar?",
						"vietnamese": "Có chuyện gì vậy, Ivar?",
						"thai": "มีอะไรเหรอ อีวาร์?",
						"hindi": "क्या हुआ, इवर?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "이상해. 가끔 내가 뭘 봤는지 헷갈려.",
						"english": "Strange. Sometimes I get confused about what I saw.",
						"japanese": "変だ…時々、何を見たのかわからなくなる。",
						"chinese": "奇怪。有时候我记不清自己看到了什么。",
						"french": "Étrange. Parfois, je ne sais plus ce que j'ai vu.",
						"spanish": "Extraño. A veces me confundo con lo que vi.",
						"vietnamese": "Lạ thật. Đôi khi tôi không nhớ rõ mình đã thấy gì.",
						"thai": "แปลกนะ บางทีก็สับสนว่าเห็นอะไรไป",
						"hindi": "अजीब है। कभी-कभी मैं भूल जाता हूँ कि मैंने क्या देखा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "저 아래서… 이상한 소리가 들리는 것 같기도 하고.",
						"english": "From down below... I think I hear strange sounds.",
						"japanese": "あの下から…妙な音が聞こえるような気もする。",
						"chinese": "从下面…好像能听到奇怪的声音。",
						"french": "D'en bas... j'ai l'impression d'entendre des bruits étranges.",
						"spanish": "De ahí abajo... creo que oigo sonidos extraños.",
						"vietnamese": "Từ phía dưới... hình như tôi nghe thấy những âm thanh lạ.",
						"thai": "จากข้างล่าง... เหมือนได้ยินเสียงแปลกๆ ด้วย",
						"hindi": "नीचे से... मुझे लगता है कि अजीब आवाज़ें आ रही हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "빙하 깊은 곳에서 알아들을 수 없는 읊조림이 희미하게 울렸다.",
						"english": "From deep within the glacier, an unintelligible murmur faintly echoed.",
						"japanese": "氷河の奥深くから、判読不能な呟きがかすかに響いた。",
						"chinese": "冰川深处，传来难以辨认的低语声，微弱地回荡着。",
						"french": "Des profondeurs du glacier, un murmure inintelligible résonnait faiblement.",
						"spanish": "Desde lo más profundo del glaciar, un murmullo ininteligible resonó débilmente.",
						"vietnamese": "Từ sâu thẳm trong sông băng, một tiếng lầm bầm không thể hiểu được vang vọng yếu ớt.",
						"thai": "จากส่วนลึกของธารน้ำแข็ง เสียงพึมพำที่เข้าใจไม่ได้ดังก้องแผ่วเบา",
						"hindi": "ग्लेशियर की गहराई से, एक अस्पष्ट बुदबुदाहट हल्की सी गूँज उठी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이봐… 방금 뭐가 지나갔지?",
						"english": "Hey... what just passed by?",
						"japanese": "おい…今、何か通り過ぎたか？",
						"chinese": "喂…刚才有什么东西过去了？",
						"french": "Hé... qu'est-ce qui vient de passer ?",
						"spanish": "Oye... ¿qué acaba de pasar?",
						"vietnamese": "Này... vừa có cái gì đi qua vậy?",
						"thai": "เฮ้... เมื่อกี้มีอะไรผ่านไปนะ?",
						"hindi": "अरे... अभी-अभी क्या गुज़रा?"
					},
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "아무것도 없는데?",
						"english": "Nothing there?",
						"japanese": "何もいないけど？",
						"chinese": "什么都没有啊？",
						"french": "Il n'y a rien ?",
						"spanish": "¿No hay nada?",
						"vietnamese": "Không có gì mà?",
						"thai": "ไม่มีอะไรนี่?",
						"hindi": "कुछ भी नहीं है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "분명히… 뭔가 보였어. 예전 기억이… 뒤섞이는 것 같아.",
						"english": "Clearly... I saw something. My old memories... seem to be getting mixed up.",
						"japanese": "確かに…何か見えたんだ。昔の記憶が…混じり合っているような。",
						"chinese": "我明明…看到了什么。以前的记忆…好像混淆了。",
						"french": "Clairement... j'ai vu quelque chose. Mes vieux souvenirs... semblent se mélanger.",
						"spanish": "Claramente... vi algo. Mis viejos recuerdos... parecen mezclarse.",
						"vietnamese": "Rõ ràng... tôi đã thấy gì đó. Những ký ức cũ... dường như đang lẫn lộn.",
						"thai": "ชัดเลย... ฉันเห็นอะไรบางอย่าง ความทรงจำเก่าๆ... เหมือนจะปะปนกันไปหมด",
						"hindi": "साफ़-साफ़... मैंने कुछ देखा। मेरी पुरानी यादें... उलझ रही हैं।"
					}
				},
				{
					"content": {
						"korean": "이 설원에 오래 있었지만, 이런 건 처음이야.",
						"english": "I've been on this snowfield for a long time, but this is the first time for something like this.",
						"japanese": "この雪原には長くいたが、こんなことは初めてだ。",
						"chinese": "我在这片雪原上待了很久，但这种事还是第一次遇到。",
						"french": "Je suis sur cette étendue de neige depuis longtemps, mais c'est la première fois que ça arrive.",
						"spanish": "Llevo mucho tiempo en este campo de nieve, pero esto es la primera vez.",
						"vietnamese": "Tôi đã ở trên cánh đồng tuyết này lâu rồi, nhưng đây là lần đầu tiên có chuyện như vậy.",
						"thai": "ฉันอยู่ที่ทุ่งหิมะนี้มานานแล้ว แต่แบบนี้เป็นครั้งแรกเลย",
						"hindi": "मैं इस बर्फीले मैदान में लंबे समय से हूँ, लेकिन ऐसा पहली बार हो रहा है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "기억이 사라지는 건 동물들도 겪는 일이야.",
						"english": "Losing memories is something even animals experience.",
						"japanese": "記憶が消えるのは、動物たちも経験することだ。",
						"chinese": "记忆消逝是连动物都会经历的事。",
						"french": "La perte de mémoire, même les animaux en font l'expérience.",
						"spanish": "La pérdida de memoria es algo que incluso los animales experimentan.",
						"vietnamese": "Mất trí nhớ là điều mà ngay cả động vật cũng trải qua.",
						"thai": "การสูญเสียความทรงจำ เป็นสิ่งที่แม้แต่สัตว์ก็ยังเจอ",
						"hindi": "याददाश्त खोना ऐसी चीज़ है जो जानवर भी अनुभव करते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "…내가 약해진 건가.",
						"english": "...Am I getting weaker?",
						"japanese": "…私が弱くなったのか。",
						"chinese": "…是我变弱了吗？",
						"french": "...Serai-je en train de faiblir ?",
						"spanish": "...¿Me estoy debilitando?",
						"vietnamese": "...Có phải tôi đã yếu đi rồi không?",
						"thai": "...ฉันอ่อนแอลงเหรอเนี่ย",
						"hindi": "...क्या मैं कमज़ोर हो रहा हूँ?"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 못 가겠어… 머리가 깨질 것 같아.",
						"english": "I can't go on... My head feels like it's splitting.",
						"japanese": "もう行けない…頭が割れそうだ。",
						"chinese": "我再也走不动了…头快要裂开了。",
						"french": "Je n'en peux plus... Ma tête va exploser.",
						"spanish": "No puedo más... Siento que la cabeza me va a estallar.",
						"vietnamese": "Tôi không thể đi tiếp được nữa... Đầu tôi như muốn nứt ra.",
						"thai": "ไปต่อไม่ไหวแล้ว... หัวฉันเหมือนจะแตกเป็นเสี่ยงๆ เลย",
						"hindi": "मैं और नहीं जा सकता... मेरा सिर फटा जा रहा है।"
					},
					"emotion": "angry",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이바르, 괜찮아?",
						"english": "Ivar, are you okay?",
						"japanese": "イヴァール、大丈夫か？",
						"chinese": "伊瓦尔，你还好吗？",
						"french": "Ivar, tu vas bien ?",
						"spanish": "Ivar, ¿estás bien?",
						"vietnamese": "Ivar, bạn ổn chứ?",
						"thai": "ไอบาร์ เจ้าสบายดีไหม?",
						"hindi": "इवार, तुम ठीक हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 오로라… 환영을 보여주는 건가?",
						"english": "This aurora... Is it showing me illusions?",
						"japanese": "このオーロラ…幻影を見せているのか？",
						"chinese": "这极光……是在向我展示幻象吗？",
						"french": "Cette aurore... me montre-t-elle des illusions ?",
						"spanish": "Esta aurora... ¿me está mostrando ilusiones?",
						"vietnamese": "Cực quang này... có phải đang cho ta thấy ảo ảnh không?",
						"thai": "แสงเหนือนี้... กำลังแสดงภาพลวงตาให้ข้าเห็นหรือ?",
						"hindi": "यह अरोरा... क्या यह मुझे भ्रम दिखा रहा है?"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "영광스러웠던 바이킹 전사들… 근데 텅 비어있어.",
						"english": "Glorious Viking warriors... but they're empty.",
						"japanese": "栄光あるヴァイキングの戦士たち…だが、虚ろだ。",
						"chinese": "光荣的维京战士们……但他们都空了。",
						"french": "De glorieux guerriers vikings... mais ils sont vides.",
						"spanish": "Gloriosos guerreros vikingos... pero están vacíos.",
						"vietnamese": "Các chiến binh Viking vinh quang... nhưng họ trống rỗng.",
						"thai": "นักรบไวกิ้งผู้รุ่งโรจน์... แต่พวกเขากลับว่างเปล่า",
						"hindi": "महान वाइकिंग योद्धा... पर वे खाली हैं।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어쩌면 진짜가 아닐지도 몰라.",
						"english": "Maybe it's not real.",
						"japanese": "もしかしたら、本物じゃないのかもしれない。",
						"chinese": "也许这不是真的。",
						"french": "Ce n'est peut-être pas réel.",
						"spanish": "Quizás no sea real.",
						"vietnamese": "Có lẽ nó không phải là thật.",
						"thai": "บางทีมันอาจจะไม่ใช่เรื่องจริง",
						"hindi": "शायद यह सच नहीं है।"
					}
				},
				{
					"content": {
						"korean": "내 강함이… 시험받는군.",
						"english": "My strength... is being tested.",
						"japanese": "我が強さが…試されているな。",
						"chinese": "我的力量……正在被考验。",
						"french": "Ma force... est mise à l'épreuve.",
						"spanish": "Mi fuerza... está siendo probada.",
						"vietnamese": "Sức mạnh của ta... đang bị thử thách.",
						"thai": "ความแข็งแกร่งของข้า... กำลังถูกทดสอบ",
						"hindi": "मेरी शक्ति... परखी जा रही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도… 하지만 진실은…",
						"english": "Ugh... Just this much... But the truth is...",
						"japanese": "くっ…この程度か…しかし真実は…",
						"chinese": "呃…就这点程度…但真相是…",
						"french": "Ugh... Ce n'est que ça... Mais la vérité est...",
						"spanish": "Uf... ¿Solo esto...? Pero la verdad es...",
						"vietnamese": "Ư… Chỉ có vậy thôi sao… Nhưng sự thật là…",
						"thai": "อึก… แค่นี้เองหรือ… แต่ความจริงคือ…",
						"hindi": "उफ़... बस इतना ही... लेकिन सच्चाई यह है..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는… 오로라의… 꼭두각시…",
						"english": "You are... Aurora's... puppets...",
						"japanese": "お前たちは…オーロラの…操り人形…",
						"chinese": "你们是…极光的…傀儡…",
						"french": "Vous êtes... les marionnettes... d'Aurora...",
						"spanish": "Vosotros sois... las marionetas... de Aurora...",
						"vietnamese": "Các ngươi… là con rối… của Aurora…",
						"thai": "พวกเจ้า… คือหุ่นเชิด… ของออโรร่า…",
						"hindi": "तुम... अरोरा के... कठपुतली हो..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¿Qué estás diciendo?",
						"vietnamese": "Nói cái gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "क्या कह रहे हो!"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 그 말이 탐험대의 마음에 깊은 의심을 남겼다.",
						"english": "The giant shadow fell, but its words left deep doubt in the explorers' hearts.",
						"japanese": "巨大な影は倒れたが、その言葉は探検隊の心に深い疑念を残した。",
						"chinese": "巨大的身影倒下了，但它的话语在探险队心中留下了深深的疑虑。",
						"french": "L'ombre gigantesque s'effondra, mais ses mots laissèrent un doute profond dans le cœur des explorateurs.",
						"spanish": "La gigantesca sombra cayó, pero sus palabras dejaron una profunda duda en el corazón de la expedición.",
						"vietnamese": "Bóng đen khổng lồ đã sụp đổ, nhưng những lời nói của nó đã để lại một mối nghi ngờ sâu sắc trong lòng đoàn thám hiểm.",
						"thai": "เงาร่างมหึมาล้มลงแล้ว แต่คำพูดของมันยังคงทิ้งความสงสัยลึกซึ้งไว้ในใจของคณะสำรวจ",
						"hindi": "विशाल छाया गिर गई, लेकिन उसके शब्दों ने खोजकर्ताओं के दिलों में गहरा संदेह छोड़ दिया।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오로라의 빛은 여전히 아름다웠지만, 이제는 기만적으로 느껴졌다.",
						"english": "Aurora's light was still beautiful, but now it felt deceptive.",
						"japanese": "オーロラの光は相変わらず美しかったが、今は欺瞞に満ちているように感じられた。",
						"chinese": "极光依然美丽，但此刻却让人感觉充满了欺骗。",
						"french": "La lumière d'Aurora était toujours magnifique, mais elle semblait maintenant trompeuse.",
						"spanish": "La luz de Aurora seguía siendo hermosa, pero ahora se sentía engañosa.",
						"vietnamese": "Ánh sáng của Aurora vẫn đẹp, nhưng giờ đây nó lại mang cảm giác lừa dối.",
						"thai": "แสงของออโรร่ายังคงสวยงาม แต่ตอนนี้มันกลับรู้สึกเหมือนเป็นการหลอกลวง",
						"hindi": "अरोरा की रोशनी अभी भी सुंदर थी, लेकिन अब वह भ्रामक लग रही थी।"
					}
				},
				{
					"content": {
						"korean": "기억의 잔재들이, 아직 이 설원을 떠돌고 있었다.",
						"english": "Remnants of memories still lingered in this snowfield.",
						"japanese": "記憶の残滓が、まだこの雪原をさまよっていた。",
						"chinese": "记忆的残骸，依旧在这片雪原上徘徊。",
						"french": "Les vestiges des souvenirs erraient encore dans ce champ de neige.",
						"spanish": "Los vestigios de los recuerdos aún vagaban por este campo nevado.",
						"vietnamese": "Tàn dư của ký ức vẫn còn lang thang trên cánh đồng tuyết này.",
						"thai": "เศษเสี้ยวความทรงจำยังคงล่องลอยอยู่ในทุ่งหิมะแห่งนี้",
						"hindi": "यादों के अवशेष, अभी भी इस बर्फीले मैदान में भटक रहे थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 빙하 틈새에서 거대한 그림자가 일렁였다.",
						"english": "A colossal shadow flickered in the crevice of a giant glacier.",
						"japanese": "巨大な氷河の裂け目から、巨大な影が揺らめいた。",
						"chinese": "在巨大的冰川裂缝中，一个巨大的影子在晃动。",
						"french": "Une ombre colossale vacillait dans la crevasse d'un glacier géant.",
						"spanish": "Una sombra colosal parpadeó en la grieta de un glaciar gigante.",
						"vietnamese": "Một cái bóng khổng lồ chập chờn trong khe nứt của sông băng khổng lồ.",
						"thai": "เงาขนาดมหึมาสั่นไหวในรอยแยกของธารน้ำแข็งยักษ์",
						"hindi": "एक विशाल ग्लेशियर की दरार में एक विशाल छाया लहराई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 오다니… 어리석은 자들.",
						"english": "How dare you come this far... Fools.",
						"japanese": "よくもここまで来たな…愚か者め。",
						"chinese": "竟敢来到这里……真是愚蠢的家伙们。",
						"french": "Comment osez-vous venir jusqu'ici... Imbéciles.",
						"spanish": "Cómo osas llegar tan lejos... Necios.",
						"vietnamese": "Dám đến tận đây... Những kẻ ngu ngốc.",
						"thai": "บังอาจมาถึงที่นี่ได้... พวกโง่เขลา",
						"hindi": "इतनी दूर आने की हिम्मत कैसे हुई... मूर्खों।"
					}
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
					"speaker": "ivar",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이바르, 내 명예를 걸고 널 상대하겠다!",
						"english": "Ivar, I shall face you on my honor!",
						"japanese": "イヴァール、我が名誉にかけてお前と戦おう！",
						"chinese": "伊瓦尔，我将以我的荣誉与你对抗！",
						"french": "Ivar, je te ferai face sur mon honneur !",
						"spanish": "¡Ivar, te enfrentaré por mi honor!",
						"vietnamese": "Ivar, ta sẽ đối đầu với ngươi bằng danh dự của ta!",
						"thai": "ไอบาร์ ข้าจะเผชิญหน้ากับเจ้าด้วยเกียรติของข้า!",
						"hindi": "इवार, मैं अपनी इज़्ज़त की कसम खाकर तुमसे मुकाबला करूँगा!"
					}
				},
				{
					"content": {
						"korean": "네놈의 기억도 곧 흐려질 것이다.",
						"english": "Your memories will soon fade too.",
						"japanese": "お前の記憶も、間もなく薄れるだろう。",
						"chinese": "你的记忆也很快会模糊不清。",
						"french": "Tes souvenirs s'estomperont bientôt aussi.",
						"spanish": "Tus recuerdos también se desvanecerán pronto.",
						"vietnamese": "Ký ức của ngươi cũng sẽ sớm phai mờ.",
						"thai": "ความทรงจำของเจ้าก็จะเลือนหายไปในไม่ช้า",
						"hindi": "तुम्हारी यादें भी जल्द ही धुंधली पड़ जाएंगी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리는 널 막을 거야!",
						"english": "We will stop you!",
						"japanese": "我々がお前を止める！",
						"chinese": "我们会阻止你的！",
						"french": "Nous t'arrêterons !",
						"spanish": "¡Te detendremos!",
						"vietnamese": "Chúng ta sẽ ngăn cản ngươi!",
						"thai": "พวกเราจะหยุดเจ้า!",
						"hindi": "हम तुम्हें रोकेंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "세계는 냉혹한 얼음으로 변해갔다.",
						"english": "The world was turning into ruthless ice.",
						"japanese": "世界は冷酷な氷へと変わり果てた。",
						"chinese": "世界变成了残酷的冰。",
						"french": "Le monde se transformait en glace impitoyable.",
						"spanish": "El mundo se estaba convirtiendo en un hielo implacable.",
						"vietnamese": "Thế giới biến thành băng giá lạnh lẽo.",
						"thai": "โลกได้กลายเป็นน้ำแข็งที่ไร้ความปราณี",
						"hindi": "दुनिया निर्मम बर्फ में बदल गई।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 영혼들… 영원히 잠들어라.",
						"english": "Worthless souls... sleep forever.",
						"japanese": "愚かな魂よ…永遠に眠れ。",
						"chinese": "渺小的灵魂…永远沉睡吧。",
						"french": "Âmes insignifiantes... dormez pour l'éternité.",
						"spanish": "Almas insignificantes... dormid para siempre.",
						"vietnamese": "Những linh hồn hèn mọn… hãy ngủ yên mãi mãi.",
						"thai": "ดวงวิญญาณอันต่ำต้อย… จงหลับใหลชั่วนิรันดร์",
						"hindi": "तुच्छ आत्माएं... हमेशा के लिए सो जाओ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "…还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡…Todavía no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "…ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "강함은… 이런 것이 아니야!",
						"english": "Strength... isn't like this!",
						"japanese": "強さとは…こんなものじゃない！",
						"chinese": "强大…不是这样的！",
						"french": "La force... ce n'est pas ça !",
						"spanish": "La fuerza... ¡no es esto!",
						"vietnamese": "Sức mạnh… không phải như thế này!",
						"thai": "ความแข็งแกร่ง… ไม่ใช่แบบนี้!",
						"hindi": "ताकत... ऐसी नहीं होती!"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 설원, 그 깊은 곳에 균열이 있었다.",
			"오로라는 빛났지만, 이바르는 그 빛이 두렵다고 했다.",
			"기억은 뒤섞이고, 환영은 현실을 잠식했다.",
			"그리고 빙하 아래, 잊혀진 속삭임이 깨어나기 시작했다."
		],
		"english": [
			"In the heart of the frozen wasteland, a rift appeared.",
			"The aurora shone bright, yet Ivar claimed its light was terrifying.",
			"Memories blurred, and illusions consumed reality.",
			"And beneath the glacier, forgotten whispers began to stir."
		],
		"japanese": [
			"凍てついた雪原の奥深く、亀裂があった。",
			"オーロラは輝いたが、イヴァルはその光を恐ろしいと言った。",
			"記憶は混濁し、幻影が現実を侵食した。",
			"そして氷河の下、忘れられたささやきが目覚め始めた。"
		],
		"chinese": [
			"在冰封雪原的深处，一道裂缝出现了。",
			"极光闪耀，但伊瓦尔说那光芒令人恐惧。",
			"记忆模糊，幻象侵蚀了现实。",
			"在冰川之下，被遗忘的低语开始苏醒。"
		],
		"french": [
			"Au cœur du désert gelé, une faille est apparue.",
			"L'aurore brillait, mais Ivar affirmait que sa lumière était terrifiante.",
			"Les souvenirs s'embrouillaient, et les illusions dévoraient la réalité.",
			"Et sous le glacier, des murmures oubliés commençaient à s'éveiller."
		],
		"spanish": [
			"En lo profundo del páramo helado, una grieta apareció.",
			"La aurora brillaba intensamente, pero Ivar decía que su luz era aterradora.",
			"Los recuerdos se mezclaban, y las ilusiones devoraban la realidad.",
			"Y bajo el glaciar, susurros olvidados comenzaron a despertar."
		],
		"vietnamese": [
			"Sâu trong hoang mạc băng giá, một vết nứt đã xuất hiện.",
			"Cực quang rực rỡ, nhưng Ivar nói ánh sáng đó thật đáng sợ.",
			"Ký ức lẫn lộn, và ảo ảnh xâm chiếm thực tại.",
			"Và bên dưới sông băng, những lời thì thầm bị lãng quên bắt đầu thức tỉnh."
		],
		"thai": [
			"ในใจกลางของดินแดนน้ำแข็งรกร้าง มีรอยแยกปรากฏขึ้น",
			"แสงเหนือสว่างไสว แต่อีวาร์บอกว่าแสงนั้นน่ากลัว",
			"ความทรงจำสับสน และภาพลวงตาได้กลืนกินความจริง",
			"และใต้ธารน้ำแข็ง เสียงกระซิบที่ถูกลืมเลือนก็เริ่มตื่นขึ้น"
		],
		"hindi": [
			"जमे हुए बंजर भूमि के केंद्र में, एक दरार दिखाई दी।",
			"ध्रुवीय ज्योति चमक रही थी, फिर भी इवर ने कहा कि उसकी रोशनी भयानक थी।",
			"यादें धुंधली पड़ गईं, और भ्रम ने वास्तविकता को निगल लिया।",
			"और ग्लेशियर के नीचे, भूली हुई फुसफुसाहटें जागने लगीं।"
		]
	}
} as const;
