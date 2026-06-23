export const scenario_snowy_skaldr_27_04 = {
	"scenario_id": "snowy_skaldr_27_04",
	"order": 4,
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
	"prologue": {
		"korean": [
			"설원의 심장부. 깨어진 영광의 그림자가 춤춘다.",
			"망자의 맹세를 기억하는 여전사, 힐드.",
			"과거의 환영들이 길을 막아서고, 진실은 얼음 아래 숨겨져 있다.",
			"스칼드르의 노래는, 영원히 잊힐 것인가."
		],
		"english": [
			"Heart of the snowfield. Shadows of shattered glory dance.",
			"Hild, the warrior remembering the oath of the dead.",
			"Phantoms of the past block the path, truth hidden beneath the ice.",
			"Will the song of Skaldr be forgotten forever?"
		],
		"japanese": [
			"雪原の心臓部。砕かれた栄光の影が舞う。",
			"亡者の誓いを記憶する女戦士、ヒルデ。",
			"過去の幻影が道を塞ぎ、真実は氷の下に隠されている。",
			"スカルドルの歌は、永遠に忘れ去られるのか。"
		],
		"chinese": [
			"雪原深处。破碎荣耀的阴影翩翩起舞。",
			"女战士希尔德，铭记亡者的誓言。",
			"过去的幻影阻碍前路，真相隐藏在冰层之下。",
			"斯卡尔德的歌谣，是否会永远被遗忘？"
		],
		"french": [
			"Au cœur du champ de neige. Les ombres d'une gloire brisée dansent.",
			"Hild, la guerrière qui se souvient du serment des morts.",
			"Les fantômes du passé bloquent le chemin, la vérité est cachée sous la glace.",
			"Le chant de Skaldr sera-t-il oublié à jamais ?"
		],
		"spanish": [
			"Corazón del campo de nieve. Sombras de gloria rota danzan.",
			"Hild, la guerrera que recuerda el juramento de los muertos.",
			"Los fantasmas del pasado bloquean el camino, la verdad oculta bajo el hielo.",
			"¿Será olvidada para siempre la canción de Skaldr?"
		],
		"vietnamese": [
			"Trái tim của cánh đồng tuyết. Bóng tối của vinh quang tan vỡ đang nhảy múa.",
			"Hild, nữ chiến binh ghi nhớ lời thề của người chết.",
			"Bóng ma quá khứ chắn lối, sự thật ẩn giấu dưới lớp băng.",
			"Liệu bài ca của Skaldr có bị lãng quên mãi mãi không?"
		],
		"thai": [
			"ใจกลางทุ่งหิมะ. เงาแห่งความรุ่งโรจน์ที่แตกสลายกำลังร่ายรำ.",
			"ฮิลด์ นักรบหญิงผู้จดจำคำสาบานของคนตาย.",
			"ภาพหลอนจากอดีตขวางทาง ความจริงซ่อนอยู่ใต้ผืนน้ำแข็ง.",
			"เพลงของสคัลด์รจะถูกลืมไปตลอดกาลหรือ?"
		],
		"hindi": [
			"हिमक्षेत्र का हृदय। टूटे हुए गौरव की परछाइयाँ नृत्य करती हैं।",
			"हिल्ड, वह योद्धा जो मृतकों की शपथ याद रखती है।",
			"अतीत के प्रेत रास्ता रोकते हैं, सत्य बर्फ के नीचे छिपा है।",
			"क्या स्कालड्र का गीत हमेशा के लिए भुला दिया जाएगा?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "설원 깊은 곳, 망각된 영광의 터전에 발을 들였다.",
						"english": "Deep in the snowfield, we've stepped into the forgotten grounds of glory.",
						"japanese": "雪原の奥深く、忘れ去られた栄光の地を踏み入れた。",
						"chinese": "深入雪原，我们踏入了被遗忘的荣耀之地。",
						"french": "Au plus profond du champ de neige, nous avons pénétré les lieux oubliés de la gloire.",
						"spanish": "En lo profundo del campo de nieve, hemos pisado los terrenos olvidados de la gloria.",
						"vietnamese": "Sâu trong cánh đồng tuyết, chúng ta đã bước vào vùng đất vinh quang bị lãng quên.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ เราได้ก้าวเข้าสู่ดินแดนแห่งเกียรติยศที่ถูกลืม.",
						"hindi": "हिमक्षेत्र के गहरे में, हमने गौरव के भूले हुए मैदानों में कदम रखा है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳은 영광을 잃은 자들의 무덤. 환영이 우릴 시험할 거야.",
						"english": "This is the tomb of the inglorious. Phantoms will test us.",
						"japanese": "ここは栄光を失った者たちの墓。幻影が我々を試すだろう。",
						"chinese": "这里是失去荣耀者的墓地。幻影会考验我们。",
						"french": "C'est le tombeau des inglorieux. Les fantômes nous mettront à l'épreuve.",
						"spanish": "Esta es la tumba de los sin gloria. Los fantasmas nos pondrán a prueba.",
						"vietnamese": "Đây là ngôi mộ của những kẻ mất vinh quang. Bóng ma sẽ thử thách chúng ta.",
						"thai": "นี่คือหลุมศพของผู้ไร้เกียรติ. ภาพหลอนจะทดสอบเรา.",
						"hindi": "यह उन लोगों की कब्र है जिन्होंने गौरव खो दिया। प्रेत हमें परखेंगे।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "환영…?",
						"english": "Phantoms...?",
						"japanese": "幻影…？",
						"chinese": "幻影……？",
						"french": "Des fantômes...?",
						"spanish": "¿Fantasmas...?",
						"vietnamese": "Bóng ma…?",
						"thai": "ภาพหลอน...?",
						"hindi": "प्रेत...?"
					},
					"type": "speech"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "두려워 마. 나는 망자의 맹세를 기억하는 자. 너의 곁에 있을게.",
						"english": "Fear not. I remember the oath of the dead. I will be by your side.",
						"japanese": "恐れるな。私は亡者の誓いを記憶する者。お前の傍にいるだろう。",
						"chinese": "别害怕。我铭记亡者的誓言。我会在你身边。",
						"french": "Ne crains rien. Je me souviens du serment des morts. Je serai à tes côtés.",
						"spanish": "No temas. Recuerdo el juramento de los muertos. Estaré a tu lado.",
						"vietnamese": "Đừng sợ. Ta ghi nhớ lời thề của người chết. Ta sẽ ở bên cạnh ngươi.",
						"thai": "อย่ากลัวเลย. ฉันคือผู้จดจำคำสาบานของคนตาย. ฉันจะอยู่เคียงข้างเธอ.",
						"hindi": "डरो मत। मैं मृतकों की शपथ याद रखती हूँ। मैं तुम्हारे साथ रहूँगी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 환영들이 길을 막았다. 과거의 영광을 읊조리는 그림자들.",
						"english": "Frozen phantoms block the path. Shadows murmuring past glories.",
						"japanese": "凍てついた幻影が道を塞いだ。過去の栄光を謳う影たち。",
						"chinese": "冰冻的幻影阻碍了去路。低语着昔日荣耀的影子。",
						"french": "Des fantômes gelés bloquent le chemin. Des ombres murmurant les gloires passées.",
						"spanish": "Fantasmas congelados bloquean el camino. Sombras murmurando glorias pasadas.",
						"vietnamese": "Những bóng ma đóng băng chắn lối. Những bóng hình thì thầm về vinh quang quá khứ.",
						"thai": "ภาพหลอนที่เยือกแข็งขวางทาง. เงาที่รำพันถึงความรุ่งโรจน์ในอดีต.",
						"hindi": "जमे हुए प्रेतों ने रास्ता रोक दिया। अतीत के गौरव को गुनगुनाती परछाइयाँ।"
					}
				},
				{
					"content": {
						"korean": "이들은 스칼드르의 그림자. 깨어진 영광에 집착하는 시인들.",
						"english": "These are Skaldr's shadows. Poets clinging to shattered glory.",
						"japanese": "これらはスカルドルの影。砕かれた栄光に執着する詩人たち。",
						"chinese": "他们是斯卡尔德的影子。执着于破碎荣耀的诗人。",
						"french": "Ce sont les ombres de Skaldr. Des poètes s'accrochant à une gloire brisée.",
						"spanish": "Estas son las sombras de Skaldr. Poetas aferrados a una gloria rota.",
						"vietnamese": "Đây là những bóng ma của Skaldr. Những thi sĩ bám víu vào vinh quang tan vỡ.",
						"thai": "นี่คือเงาของสคัลด์ร. กวีที่ยึดติดกับความรุ่งโรจน์ที่แตกสลาย.",
						"hindi": "ये स्कालड्र की परछाइयाँ हैं। टूटे हुए गौरव से चिपके हुए कवि।"
					},
					"speaker": "hild",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어떻게 싸워야 해?",
						"english": "How should I fight?",
						"japanese": "どう戦えばいい？",
						"chinese": "该如何战斗？",
						"french": "Comment dois-je me battre ?",
						"spanish": "¿Cómo debo luchar?",
						"vietnamese": "Tôi phải chiến đấu thế nào?",
						"thai": "ฉันควรจะต่อสู้ยังไง?",
						"hindi": "मुझे कैसे लड़ना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "현실을 봐야 해. 진실만이 환영을 부술 수 있어.",
						"english": "You must face reality. Only truth can shatter illusions.",
						"japanese": "現実を見つめるんだ。真実だけが幻影を打ち破れる。",
						"chinese": "你必须面对现实。唯有真相才能击碎幻象。",
						"french": "Tu dois faire face à la réalité. Seule la vérité peut briser les illusions.",
						"spanish": "Debes enfrentar la realidad. Solo la verdad puede romper las ilusiones.",
						"vietnamese": "Ngươi phải đối mặt với thực tại. Chỉ sự thật mới có thể phá tan ảo ảnh.",
						"thai": "เจ้าต้องเผชิญหน้ากับความจริง มีเพียงความจริงเท่านั้นที่จะทำลายภาพลวงตาได้",
						"hindi": "तुम्हें वास्तविकता का सामना करना होगा। केवल सत्य ही भ्रम को तोड़ सकता है।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 환영들 사이에서 낡은 양피지 조각을 발견했다. 스키피오르 족의 옛 지도 일부였다.",
						"english": "Among the fallen illusions, I found a worn piece of parchment. It was part of an old map of the Skippior tribe.",
						"japanese": "倒れた幻影の中に、古びた羊皮紙の切れ端を見つけた。スキピオル族の古い地図の一部だった。",
						"chinese": "在倒下的幻象中，我发现了一片破旧的羊皮纸。那是斯基皮奥尔部落旧地图的一部分。",
						"french": "Parmi les illusions tombées, j'ai trouvé un morceau de parchemin usé. C'était une partie d'une ancienne carte de la tribu Skippior.",
						"spanish": "Entre las ilusiones caídas, encontré un trozo de pergamino desgastado. Era parte de un antiguo mapa de la tribu Skippior.",
						"vietnamese": "Giữa những ảo ảnh đã sụp đổ, tôi tìm thấy một mảnh da dê cũ kỹ. Đó là một phần bản đồ cổ của bộ tộc Skippior.",
						"thai": "ท่ามกลางภาพลวงตาที่ล้มลง ฉันพบกระดาษหนังเก่า ๆ ชิ้นหนึ่ง มันเป็นส่วนหนึ่งของแผนที่โบราณของเผ่า Skippior",
						"hindi": "गिरी हुई माया के बीच, मैंने एक पुराना चर्मपत्र का टुकड़ा पाया। यह स्किपिओर जनजाति के एक पुराने नक्शे का हिस्सा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "불안정한 얼음 조각상들이 기묘한 온기를 내뿜었다. 환영은 더욱 선명해졌다.",
						"english": "Unstable ice statues emanated a strange warmth. The illusion grew clearer.",
						"japanese": "不安定な氷の彫像が奇妙な温もりを放っていた。幻影はさらに鮮明になった。",
						"chinese": "不稳定的冰雕散发出奇异的温暖。幻象变得更加清晰。",
						"french": "Des statues de glace instables dégageaient une étrange chaleur. L'illusion devenait plus nette.",
						"spanish": "Estatuas de hielo inestables emanaban un calor extraño. La ilusión se hizo más clara.",
						"vietnamese": "Những bức tượng băng không ổn định tỏa ra hơi ấm kỳ lạ. Ảo ảnh trở nên rõ ràng hơn.",
						"thai": "รูปปั้นน้ำแข็งที่ไม่มั่นคงแผ่ความอบอุ่นประหลาดออกมา ภาพลวงตากลับยิ่งชัดเจนขึ้น",
						"hindi": "अस्थिर बर्फ की मूर्तियाँ एक अजीब गर्मी छोड़ रही थीं। भ्रम और स्पष्ट हो गया।"
					}
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이 온기… 망각화의 향기가 섞여 있어. 환상을 더 강하게 만들고 있어.",
						"english": "This warmth... it's mixed with the scent of oblivion flowers. It's making the illusion stronger.",
						"japanese": "この温もり…忘却花の香りが混じっている。幻覚をより強くしているんだ。",
						"chinese": "这股暖意……混杂着遗忘花的香气。它让幻象变得更强了。",
						"french": "Cette chaleur... elle est mêlée au parfum des fleurs d'oubli. Elle rend l'illusion plus forte.",
						"spanish": "Este calor... está mezclado con el aroma de las flores del olvido. Está haciendo la ilusión más fuerte.",
						"vietnamese": "Hơi ấm này... pha lẫn mùi hương của hoa lãng quên. Nó đang làm ảo ảnh mạnh hơn.",
						"thai": "ความอบอุ่นนี้... ผสมกับกลิ่นหอมของดอกไม้นิทรา มันกำลังทำให้ภาพลวงตาแข็งแกร่งขึ้น",
						"hindi": "यह गर्मी... इसमें विस्मृति के फूलों की सुगंध मिली हुई है। यह भ्रम को और मजबूत कर रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "환상이 현실 같아… 정신이 혼미해져.",
						"english": "The illusion feels real... my mind is getting hazy.",
						"japanese": "幻が現実のようだ…意識が朦朧としてきた。",
						"chinese": "幻象如同现实……我的精神开始模糊了。",
						"french": "L'illusion semble réelle... mon esprit s'embrouille.",
						"spanish": "La ilusión parece real... mi mente se está nublando.",
						"vietnamese": "Ảo ảnh cứ như thật... tâm trí tôi mờ mịt dần.",
						"thai": "ภาพลวงตาเหมือนจริงเหลือเกิน... จิตใจฉันเริ่มพร่ามัว",
						"hindi": "भ्रम वास्तविक लगता है... मेरा मन धुंधला हो रहा है।"
					}
				},
				{
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "흔들리지 마. 이 고통마저 거짓이야. 스칼드르의 속삭임일 뿐.",
						"english": "Don't waver. Even this pain is false. It's merely Skaldr's whisper.",
						"japanese": "揺らぐな。この苦痛さえ偽りだ。スカルドルドの囁きにすぎない。",
						"chinese": "别动摇。就连这份痛苦也是假的。这只是斯卡尔德的低语。",
						"french": "Ne vacille pas. Même cette douleur est fausse. Ce n'est qu'un murmure de Skaldr.",
						"spanish": "No vaciles. Incluso este dolor es falso. Es solo el susurro de Skaldr.",
						"vietnamese": "Đừng dao động. Ngay cả nỗi đau này cũng là giả dối. Chỉ là lời thì thầm của Skaldr thôi.",
						"thai": "อย่าหวั่นไหว แม้แต่ความเจ็บปวดนี้ก็เป็นของปลอม มันเป็นแค่เสียงกระซิบของ Skaldr เท่านั้น",
						"hindi": "विचलित मत हो। यह दर्द भी झूठा है। यह केवल स्काल्ड्र की फुसफुसाहट है।"
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
					"speaker": "hild",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "시인의 절규가 깃든 눈보라가 몰아쳤다. 돌아올 수 없는 길임을 직감했다.",
						"english": "A blizzard, imbued with the poet's lament, raged. I knew instinctively this was a path of no return.",
						"japanese": "詩人の絶叫が宿る吹雪が吹き荒れた。この道は戻れないと直感した。",
						"chinese": "裹挟着诗人哀嚎的暴风雪呼啸而至。我本能地感到，这是一条有去无回的路。",
						"french": "Une tempête de neige, imprégnée de la lamentation du poète, faisait rage. J'ai su instinctivement que c'était un chemin sans retour.",
						"spanish": "Una tormenta de nieve, imbuida del lamento del poeta, azotó. Supe instintivamente que este era un camino sin retorno.",
						"vietnamese": "Một trận bão tuyết mang theo tiếng kêu than của thi sĩ thổi tới. Tôi linh cảm đây là con đường một đi không trở lại.",
						"thai": "พายุหิมะที่เต็มไปด้วยเสียงคร่ำครวญของกวีโหมกระหน่ำ ฉันรู้โดยสัญชาตญาณว่านี่คือเส้นทางที่ไม่มีวันหวนกลับ",
						"hindi": "कवि की चीख से भरी बर्फीली आँधी चली। मैंने सहज रूप से जान लिया कि यह वापसी का रास्ता नहीं है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 끝에는… 뭐가 있을까.",
						"english": "At its end... what awaits?",
						"japanese": "この果てには…何があるのだろう。",
						"chinese": "在这尽头……会有什么呢？",
						"french": "À cette fin... qu'y aura-t-il ?",
						"spanish": "En este final... ¿qué habrá?",
						"vietnamese": "Ở cuối con đường này... sẽ có gì?",
						"thai": "ณ ปลายทางนี้... จะมีอะไร?",
						"hindi": "इस अंत में... क्या होगा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실. 혹은 더 깊은 망각. 하지만 우리는 전진할 뿐.",
						"english": "Truth. Or deeper oblivion. But we only move forward.",
						"japanese": "真実。あるいは、より深い忘却。しかし、我々はただ前進するのみ。",
						"chinese": "真相。亦或是更深的遗忘。但我们只会前进。",
						"french": "La vérité. Ou un oubli plus profond. Mais nous n'avançons que.",
						"spanish": "La verdad. O un olvido más profundo. Pero solo avanzamos.",
						"vietnamese": "Sự thật. Hay sự lãng quên sâu hơn. Nhưng chúng ta chỉ tiến về phía trước.",
						"thai": "ความจริง หรือการลืมเลือนที่ลึกซึ้งกว่า แต่เราจะก้าวไปข้างหน้าเท่านั้น",
						"hindi": "सत्य। या गहरा विस्मृति। लेकिन हम केवल आगे बढ़ते हैं।"
					},
					"speaker": "hild",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 시인의 일기 파편이 떨어져 있었다.",
						"english": "A fragment of an unknown poet's diary lay fallen.",
						"japanese": "未知の詩人の日記の破片が落ちていた。",
						"chinese": "未知诗人的日记碎片掉落在地。",
						"french": "Un fragment du journal d'un poète inconnu gisait à terre.",
						"spanish": "Un fragmento del diario de un poeta desconocido yacía en el suelo.",
						"vietnamese": "Một mảnh nhật ký của một thi sĩ vô danh nằm rơi rớt.",
						"thai": "เศษเสี้ยวบันทึกของกวีไม่ทราบชื่อตกอยู่",
						"hindi": "एक अज्ञात कवि की डायरी का टुकड़ा गिरा हुआ था।"
					}
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이게 스칼드르의 흔적일지도 몰라. 망각되길 거부한 시인의 목소리.",
						"english": "This might be a trace of Skaldr. The voice of a poet who refused to be forgotten.",
						"japanese": "これがスカルドルの痕跡かもしれない。忘れられることを拒んだ詩人の声。",
						"chinese": "这也许是斯卡尔德的痕迹。一个拒绝被遗忘的诗人的声音。",
						"french": "C'est peut-être une trace de Skaldr. La voix d'un poète qui refusa l'oubli.",
						"spanish": "Esto podría ser un rastro de Skaldr. La voz de un poeta que se negó a ser olvidado.",
						"vietnamese": "Đây có thể là dấu vết của Skaldr. Tiếng nói của một thi sĩ đã từ chối bị lãng quên.",
						"thai": "นี่อาจเป็นร่องรอยของสคัลดร์ เสียงของกวีผู้ปฏิเสธการถูกลืม",
						"hindi": "यह स्कल्ड्र का निशान हो सकता है। एक कवि की आवाज़ जिसने भुलाया जाना अस्वीकार कर दिया।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 나타났다. 과거의 영광에 집착하는 시인의 환영, {random_boss}.",
						"english": "A colossal shadow appeared. The phantom of a poet clinging to past glory, {random_boss}.",
						"japanese": "巨大な影が現れた。過去の栄光に固執する詩人の幻影、{random_boss}。",
						"chinese": "一个巨大的身影出现了。一个执着于往日荣光的诗人的幻影，{random_boss}。",
						"french": "Une ombre colossale est apparue. Le fantôme d'un poète accroché à la gloire passée, {random_boss}.",
						"spanish": "Una sombra colosal apareció. El fantasma de un poeta aferrado a la gloria pasada, {random_boss}.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện. Huyễn ảnh của một thi sĩ bám víu vào vinh quang quá khứ, {random_boss}.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น วิญญาณของกวีผู้ยึดติดกับความรุ่งโรจน์ในอดีต {random_boss}",
						"hindi": "एक विशाल छाया प्रकट हुई। अतीत की महिमा से चिपके एक कवि का प्रेत, {random_boss}।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 노래는 영원하리라! 너희는 그저 한 조각의 먼지일 뿐!",
						"english": "My song shall be eternal! You are but specks of dust!",
						"japanese": "我が歌は永遠なり！お前たちはただの塵芥にすぎぬ！",
						"chinese": "我的歌声将永存！你们不过是尘埃而已！",
						"french": "Mon chant sera éternel ! Vous n'êtes que des grains de poussière !",
						"spanish": "¡Mi canción será eterna! ¡Vosotros no sois más que motas de polvo!",
						"vietnamese": "Bài ca của ta sẽ vĩnh hằng! Các ngươi chỉ là những hạt bụi mà thôi!",
						"thai": "บทเพลงของข้าจะคงอยู่ชั่วนิรันดร์! พวกเจ้าเป็นเพียงเศษผงเท่านั้น!",
						"hindi": "मेरा गीत शाश्वत रहेगा! तुम केवल धूल के कण हो!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영 따위에게 질 수는 없어!",
						"english": "I won't lose to a mere phantom!",
						"japanese": "幻影なんかに負けてたまるか！",
						"chinese": "我不能输给一个幻影！",
						"french": "Je ne peux pas perdre face à un simple fantôme !",
						"spanish": "¡No puedo perder contra una mera ilusión!",
						"vietnamese": "Không thể thua một huyễn ảnh tầm thường như vậy!",
						"thai": "ข้าจะไม่มีทางแพ้ให้กับวิญญาณไร้ค่าพวกนี้!",
						"hindi": "मैं एक महज़ प्रेत से नहीं हार सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"emotion": "angry",
					"content": {
						"korean": "이것 역시 허상! 진실의 칼날로 베어내라!",
						"english": "This too is an illusion! Cut it down with the blade of truth!",
						"japanese": "これもまた虚像！真実の刃で切り裂け！",
						"chinese": "这同样是虚像！用真理之刃斩断它！",
						"french": "Ceci aussi est une illusion ! Fends-la avec la lame de la vérité !",
						"spanish": "¡Esto también es una ilusión! ¡Córtala con la hoja de la verdad!",
						"vietnamese": "Đây cũng là hư ảnh! Hãy chém tan nó bằng lưỡi kiếm chân lý!",
						"thai": "นี่ก็เป็นภาพลวงตาเช่นกัน! จงฟันมันด้วยคมดาบแห่งความจริง!",
						"hindi": "यह भी एक भ्रम है! इसे सत्य की तलवार से काटो!"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크으… 깨어지는구나… 나의 영광… 나의 노래… 하지만… 사라지지 않아…",
						"english": "Ugh... shattering... my glory... my song... but... it won't disappear...",
						"japanese": "くぅ…砕け散る…我が栄光…我が歌…だが…消えはせぬ…",
						"chinese": "呃…破碎了…我的荣光…我的歌声…但是…不会消失…",
						"french": "Ugh… ça se brise… ma gloire… mon chant… mais… ça ne disparaîtra pas…",
						"spanish": "Ugh... se está rompiendo... mi gloria... mi canción... pero... no desaparecerá...",
						"vietnamese": "Ư… vỡ tan rồi… vinh quang của ta… bài ca của ta… nhưng… không biến mất…",
						"thai": "อ๊า... แตกสลาย... ความรุ่งโรจน์ของข้า... บทเพลงของข้า... แต่... มันจะไม่หายไป...",
						"hindi": "उफ़... टूट रहा है... मेरी महिमा... मेरा गीत... लेकिन... यह गायब नहीं होगा..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "{random_boss}를 쓰러뜨렸어…!",
						"english": "We defeated {random_boss}!",
						"japanese": "{random_boss}を倒した！",
						"chinese": "我们击败了{random_boss}！",
						"french": "Nous avons vaincu {random_boss} !",
						"spanish": "¡Hemos derrotado a {random_boss}!",
						"vietnamese": "Đã đánh bại {random_boss}!",
						"thai": "เรากำจัด {random_boss} ได้แล้ว!",
						"hindi": "हमने {random_boss} को हरा दिया!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "환영은 사라졌지만… 그의 집착은 아직 남아있어. 진정한 그림자는 다른 곳에.",
						"english": "The phantom is gone... but his obsession still remains. The true shadow lies elsewhere.",
						"japanese": "幻影は消えたが…彼の執着はまだ残っている。真の影は別の場所に。",
						"chinese": "幻影消失了…但他的执念仍在。真正的阴影在别处。",
						"french": "Le fantôme a disparu… mais son obsession demeure. La véritable ombre se trouve ailleurs.",
						"spanish": "El fantasma ha desaparecido... pero su obsesión aún perdura. La verdadera sombra está en otro lugar.",
						"vietnamese": "Huyễn ảnh đã biến mất… nhưng sự ám ảnh của hắn vẫn còn đó. Bóng tối thực sự nằm ở nơi khác.",
						"thai": "วิญญาณหายไปแล้ว... แต่ความยึดติดของเขายังคงอยู่ เงาที่แท้จริงอยู่ในที่อื่น",
						"hindi": "प्रेत चला गया... लेकिन उसका जुनून अभी भी बाकी है। असली परछाई कहीं और है।"
					}
				},
				{
					"content": {
						"korean": "깨어진 영광의 설원. 아직 끝나지 않은 시인의 노래가, 다음 막을 기다리고 있었다.",
						"english": "The shattered snowfield of glory. The poet's unfinished song awaited the next act.",
						"japanese": "砕け散った栄光の雪原。まだ終わらぬ詩人の歌が、次の幕を待っていた。",
						"chinese": "破碎的荣光雪原。诗人未完的歌声，正等待着下一幕。",
						"french": "La plaine enneigée brisée de la gloire. Le chant inachevé du poète attendait le prochain acte.",
						"spanish": "El campo nevado de la gloria destrozado. La canción inconclusa del poeta esperaba el próximo acto.",
						"vietnamese": "Cánh đồng tuyết vinh quang tan vỡ. Bài ca chưa dứt của thi sĩ vẫn đang chờ đợi màn tiếp theo.",
						"thai": "ทุ่งหิมะแห่งความรุ่งโรจน์ที่แตกสลาย บทเพลงของกวีที่ยังไม่จบสิ้นกำลังรอคอยฉากต่อไป",
						"hindi": "महिमा का टूटा हुआ बर्फीला मैदान। कवि का अधूरा गीत अगले अंक का इंतजार कर रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "환영의 검이 모두를 삼켰다.",
						"english": "The Blade of Illusion consumed all.",
						"japanese": "幻影の剣がすべてを飲み込んだ。",
						"chinese": "幻影之剑吞噬了一切。",
						"french": "L'épée illusoire a tout dévoré.",
						"spanish": "La espada ilusoria lo devoró todo.",
						"vietnamese": "Lưỡi kiếm ảo ảnh đã nuốt chửng tất cả.",
						"thai": "ดาบมายาได้กลืนกินทุกสิ่งแล้ว",
						"hindi": "भ्रम की तलवार ने सबको निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "내 노래를 거스를 순 없다. 너희는 영원히 이 설원에 갇히리라!",
						"english": "You cannot defy my song. You shall be trapped in this snowfield forever!",
						"japanese": "私の歌には逆らえない。お前たちは永遠にこの雪原に囚われるのだ！",
						"chinese": "你们无法违抗我的歌声。你们将永远被困在这雪原中！",
						"french": "Vous ne pouvez pas défier mon chant. Vous serez à jamais piégés dans ce champ de neige !",
						"spanish": "No podéis desafiar mi canto. ¡Quedaréis atrapados para siempre en este campo de nieve!",
						"vietnamese": "Ngươi không thể chống lại bài hát của ta. Ngươi sẽ bị mắc kẹt vĩnh viễn trong cánh đồng tuyết này!",
						"thai": "พวกเจ้าไม่อาจขัดขืนบทเพลงของข้าได้ พวกเจ้าจะต้องติดอยู่ในทุ่งหิมะนี้ตลอดกาล!",
						"hindi": "तुम मेरे गीत का उल्लंघन नहीं कर सकते। तुम हमेशा के लिए इस बर्फीले मैदान में फँस जाओगे!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장…! 아직 끝나지 않았어!",
						"english": "Damn it...! It's not over yet!",
						"japanese": "くそっ…！まだ終わってない！",
						"chinese": "该死…！还没结束！",
						"french": "Bon sang… ! Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea…! ¡Aún no ha terminado!",
						"vietnamese": "Chết tiệt…! Vẫn chưa kết thúc!",
						"thai": "ให้ตายสิ…! ยังไม่จบแค่นี้!",
						"hindi": "धिक्कार है…! यह अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시 일어서야 해. 망자의 맹세는 아직 끝나지 않았어.",
						"english": "I must rise again. The oath of the fallen is not yet fulfilled.",
						"japanese": "再び立ち上がらねば。亡者の誓いはまだ終わっていない。",
						"chinese": "必须再次站起来。亡者的誓言尚未结束。",
						"french": "Je dois me relever. Le serment des morts n'est pas encore terminé.",
						"spanish": "Debo levantarme de nuevo. El juramento de los muertos aún no ha terminado.",
						"vietnamese": "Ta phải đứng dậy lần nữa. Lời thề của người đã khuất vẫn chưa kết thúc.",
						"thai": "ข้าต้องลุกขึ้นอีกครั้ง คำสาบานของผู้ตายยังไม่สิ้นสุด",
						"hindi": "मुझे फिर से उठना होगा। मृतकों की शपथ अभी समाप्त नहीं हुई है।"
					},
					"speaker": "hild",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
