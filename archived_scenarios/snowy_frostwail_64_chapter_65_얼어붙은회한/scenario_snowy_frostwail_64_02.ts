export const scenario_snowy_frostwail_64_02 = {
	"scenario_id": "snowy_frostwail_64_02",
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
			"얼어붙은 땅. 모든 것이 멈춘 시간.",
			"잊힌 약속, 그리고 냉혹한 그림자.",
			"이 혹독한 설원에서, 과연 무엇을 이룰 수 있을까?",
			"누군가는 속삭였다. \"모두 헛될 뿐.\" 그의 말이 메아리쳤다."
		],
		"english": [
			"Frozen land. Time stands still.",
			"Forgotten promise, and a cold shadow.",
			"In this harsh snowfield, what can truly be achieved?",
			"Someone whispered, \"It's all in vain.\" His words echoed."
		],
		"japanese": [
			"凍てついた大地。すべてが止まった時間。",
			"忘れられた約束、そして冷酷な影。",
			"この過酷な雪原で、一体何が成し遂げられるのか？",
			"誰かが囁いた。「すべては無駄だ。」彼の言葉がこだました。"
		],
		"chinese": [
			"冰封大地。万物停滞。",
			"遗忘的诺言，以及冷酷的阴影。",
			"在这严酷的雪原上，究竟能实现什么？",
			"有人低语道：“一切皆徒劳。”他的话语回荡着。"
		],
		"french": [
			"Terre gelée. Le temps s'arrête.",
			"Promesse oubliée, et une ombre glaciale.",
			"Dans cette toundra impitoyable, que peut-on vraiment accomplir ?",
			"Quelqu'un murmura : « Tout est futile. » Ses mots résonnèrent."
		],
		"spanish": [
			"Tierra helada. El tiempo se detiene.",
			"Una promesa olvidada y una sombra cruel.",
			"En este gélido páramo, ¿qué se puede lograr?",
			"Alguien susurró: \"Todo es en vano\". Sus palabras resonaron."
		],
		"vietnamese": [
			"Vùng đất băng giá. Thời gian ngưng đọng.",
			"Lời hứa bị lãng quên, và bóng tối tàn nhẫn.",
			"Trên cánh đồng tuyết khắc nghiệt này, liệu điều gì có thể đạt được?",
			"Ai đó thì thầm, \"Tất cả chỉ là vô ích.\" Lời nói của anh ta vang vọng."
		],
		"thai": [
			"ดินแดนเยือกแข็ง กาลเวลาหยุดนิ่ง",
			"สัญญาที่ถูกลืม และเงาอันเยือกเย็น",
			"ในทุ่งหิมะอันโหดร้ายนี้ จะสำเร็จอะไรได้บ้าง?",
			"มีบางคนกระซิบว่า \"ทุกอย่างไร้ผล\" คำพูดของเขาสะท้อนกลับมา"
		],
		"hindi": [
			"जमी हुई ज़मीन। सब कुछ रुका हुआ समय।",
			"भूला हुआ वादा, और एक क्रूर छाया।",
			"इस कठोर बर्फीली भूमि में, वास्तव में क्या हासिल किया जा सकता है?",
			"किसी ने फुसफुसाया, \"सब कुछ व्यर्थ है।\" उसके शब्द गूँज उठे।"
		]
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
						"korean": "혹한의 땅. 얼어붙은 그림자들이 춤을 추는 곳이었다.",
						"english": "A land of bitter cold. Where frozen shadows danced.",
						"japanese": "極寒の地。凍てついた影が踊る場所だった。",
						"chinese": "极寒之地。冰冻的影子在那里起舞。",
						"french": "Une terre d'un froid glacial. Où les ombres gelées dansaient.",
						"spanish": "Una tierra de frío amargo. Donde las sombras heladas bailaban.",
						"vietnamese": "Vùng đất cực lạnh. Nơi những bóng ma băng giá nhảy múa.",
						"thai": "ดินแดนแห่งความหนาวเหน็บ ที่ซึ่งเงาเยือกแข็งเต้นรำ",
						"hindi": "भीषण ठंड की भूमि। जहाँ जमी हुई परछाइयाँ नाचती थीं।"
					}
				},
				{
					"content": {
						"korean": "너무 추워… 이 길이 맞는 걸까?",
						"english": "So cold... Is this the right way?",
						"japanese": "寒すぎる…この道で合ってるのか？",
						"chinese": "太冷了……这条路对吗？",
						"french": "Si froid... Est-ce le bon chemin ?",
						"spanish": "Hace mucho frío... ¿Es este el camino correcto?",
						"vietnamese": "Lạnh quá… Đây có phải là đường đúng không?",
						"thai": "หนาวมาก...นี่คือทางที่ถูกต้องหรือเปล่า?",
						"hindi": "बहुत ठंड है… क्या यह सही रास्ता है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "풋. 어차피 헛수고. 뭘 그렇게 애쓰지?",
						"english": "Pfft. It's all for nothing anyway. Why bother?",
						"japanese": "ふっ。どうせ無駄だ。何をそんなに頑張ってるんだ？",
						"chinese": "嗤。反正都是白费力气。何必那么努力？",
						"french": "Pff. C'est inutile de toute façon. Pourquoi tant d'efforts ?",
						"spanish": "Pff. Es inútil de todos modos. ¿Para qué tanto esfuerzo?",
						"vietnamese": "Khụ. Dù sao cũng vô ích thôi. Sao phải cố gắng nhiều vậy?",
						"thai": "ฟู่. ยังไงก็เปล่าประโยชน์ ทำไมถึงพยายามขนาดนั้น?",
						"hindi": "धत्त। यह सब बेकार है। इतनी कोशिश क्यों?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구야!",
						"english": "Who's there!",
						"japanese": "誰だ！",
						"chinese": "谁！",
						"french": "Qui est là !",
						"spanish": "¡Quién anda ahí!",
						"vietnamese": "Ai đấy!",
						"thai": "ใครน่ะ!",
						"hindi": "कौन है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이바르. 너 같은 멍청이들을 구경하는 게 취미지.",
						"english": "Ivar. My hobby is watching fools like you.",
						"japanese": "イヴァル。お前みたいな馬鹿を眺めるのが趣味でな。",
						"chinese": "伊瓦尔。我的爱好就是看你这种傻瓜。",
						"french": "Ivar. Mon hobby, c'est de regarder des idiots comme toi.",
						"spanish": "Ivar. Mi pasatiempo es observar a tontos como tú.",
						"vietnamese": "Ivar. Sở thích của ta là ngắm nhìn những kẻ ngốc như ngươi.",
						"thai": "ไอบาร์. งานอดิเรกของฉันคือการเฝ้าดูพวกโง่เง่าอย่างแก",
						"hindi": "इवार। मेरा शौक तुम जैसे मूर्खों को देखना है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 땅에선 아무것도 이룰 수 없어. 그저 제자리걸음일 뿐.",
						"english": "Nothing can be achieved in this land. It's just treading water.",
						"japanese": "この地では何も成し遂げられない。ただ足踏みするだけだ。",
						"chinese": "在这片土地上，什么也无法实现。不过是原地踏步罢了。",
						"french": "Rien ne peut être accompli sur cette terre. On ne fait que du surplace.",
						"spanish": "En esta tierra no se puede lograr nada. Solo es un paso en falso.",
						"vietnamese": "Trên vùng đất này chẳng đạt được gì cả. Chỉ là dậm chân tại chỗ thôi.",
						"thai": "บนดินแดนนี้ ไม่มีอะไรสำเร็จเลย แค่เดินย่ำอยู่กับที่เท่านั้น",
						"hindi": "इस ज़मीन पर कुछ भी हासिल नहीं किया जा सकता। यह सिर्फ़ अपनी जगह पर चलना है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "무슨 소리야. 내 목적이 있어!",
						"english": "What are you talking about? I have a purpose!",
						"japanese": "何を言ってるんだ。私には目的がある！",
						"chinese": "你在说什么？我可是有目的的！",
						"french": "Qu'est-ce que tu racontes ? J'ai un but !",
						"spanish": "¿De qué hablas? ¡Tengo un propósito!",
						"vietnamese": "Anh đang nói gì vậy? Tôi có mục đích của mình!",
						"thai": "คุณพูดอะไรน่ะ ฉันมีเป้าหมายนะ!",
						"hindi": "क्या बकवास है। मेरा एक मकसद है!"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "망령의 저주가 씌인 땅. 뭘 해도 결국 같을 거다.",
						"english": "This land is cursed by specters. Whatever you do, it will end up the same.",
						"japanese": "亡霊の呪われた地。何をしても、結局は同じことだ。",
						"chinese": "这片土地被亡灵诅咒了。无论你做什么，结果都一样。",
						"french": "Cette terre est maudite par les spectres. Quoi que tu fasses, le résultat sera le même.",
						"spanish": "Esta tierra está maldita por los espectros. Hagas lo que hagas, el resultado será el mismo.",
						"vietnamese": "Vùng đất này bị nguyền rủa bởi những linh hồn. Dù làm gì, kết cục cũng sẽ như nhau thôi.",
						"thai": "ดินแดนนี้ถูกสาปโดยวิญญาณร้าย ไม่ว่าคุณจะทำอะไร สุดท้ายก็เหมือนเดิม",
						"hindi": "यह भूमि प्रेतों से शापित है। तुम कुछ भी करो, अंत वही होगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼…",
						"english": "Impossible...",
						"japanese": "まさか…",
						"chinese": "不可能…",
						"french": "Impossible...",
						"spanish": "Imposible...",
						"vietnamese": "Không thể nào…",
						"thai": "ไม่จริงน่า...",
						"hindi": "यह हो ही नहीं सकता…"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "직접 겪어보면 알게 될 거다. 곧.",
						"english": "You'll know once you experience it yourself. Soon.",
						"japanese": "じきに、自分で経験すればわかるだろう。",
						"chinese": "你会亲身体验到的。很快。",
						"french": "Tu le sauras par toi-même. Bientôt.",
						"spanish": "Lo sabrás cuando lo experimentes por ti mismo. Pronto.",
						"vietnamese": "Rồi anh sẽ tự mình trải nghiệm và biết thôi. Sớm thôi.",
						"thai": "ไม่นานหรอก คุณจะได้รู้ด้วยตัวเอง",
						"hindi": "तुम्हें खुद अनुभव करके पता चल जाएगा। जल्द ही।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "또 이상한 눈보라군. 어제도, 그제도 그랬지. 지겹지도 않나.",
						"english": "Another strange blizzard. It was the same yesterday, and the day before. Aren't you tired of it?",
						"japanese": "また変な吹雪か。昨日も一昨日もそうだった。飽きないのか。",
						"chinese": "又是一场奇怪的暴风雪。昨天是这样，前天也是。不觉得厌烦吗？",
						"french": "Encore un étrange blizzard. C'était pareil hier, et avant-hier. Tu ne t'en lasses pas ?",
						"spanish": "Otra extraña ventisca. Fue lo mismo ayer y anteayer. ¿No te cansas?",
						"vietnamese": "Lại một trận bão tuyết kỳ lạ nữa. Hôm qua cũng vậy, hôm kia cũng vậy. Không thấy chán sao?",
						"thai": "พายุหิมะแปลกๆ อีกแล้ว เมื่อวานก็เป็น เมื่อวันซืนก็เป็น ไม่เบื่อกันบ้างรึไง",
						"hindi": "फिर से एक अजीब बर्फीला तूफान। कल भी ऐसा था, परसों भी। क्या तुम ऊबते नहीं?"
					}
				},
				{
					"content": {
						"korean": "정말이야. 날씨가… 뭔가 이상해. 너무 반복돼.",
						"english": "You're right. The weather... something's strange. It's repeating too much.",
						"japanese": "本当だ。天気が…何かおかしい。あまりにも繰り返される。",
						"chinese": "真的。天气…有点奇怪。太频繁地重复了。",
						"french": "C'est vrai. Le temps... quelque chose est étrange. Ça se répète trop.",
						"spanish": "Es verdad. El clima... algo es extraño. Se repite demasiado.",
						"vietnamese": "Đúng vậy. Thời tiết… có gì đó lạ. Nó cứ lặp đi lặp lại quá nhiều.",
						"thai": "จริงด้วย อากาศมัน…แปลกๆ ทำไมมันซ้ำซากจัง",
						"hindi": "सच में। मौसम… कुछ अजीब है। यह बहुत दोहराया जा रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "시간마저 얼어붙었어. 이 땅에선 모든 게 반복될 뿐.",
						"english": "Even time has frozen. In this land, everything just repeats.",
						"japanese": "時間さえ凍りついた。この地では、すべてが繰り返されるだけだ。",
						"chinese": "连时间都冻结了。在这片土地上，一切都只是重复。",
						"french": "Même le temps s'est figé. Sur cette terre, tout ne fait que se répéter.",
						"spanish": "Incluso el tiempo se ha congelado. En esta tierra, todo se repite sin cesar.",
						"vietnamese": "Ngay cả thời gian cũng đóng băng rồi. Ở vùng đất này, mọi thứ chỉ lặp đi lặp lại thôi.",
						"thai": "แม้แต่เวลาก็หยุดนิ่ง ที่นี่ทุกสิ่งวนเวียนอยู่แค่นี้",
						"hindi": "समय भी जम गया है। इस भूमि में, सब कुछ बस दोहराया जाता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기이하게 반복되는 날씨. 비정상적인 자연 현상이 이바르의 말에 힘을 실었다.",
						"english": "The strangely repetitive weather. Abnormal natural phenomena lent credence to Ivar's words.",
						"japanese": "奇妙に繰り返される天気。異常な自然現象が、イヴァルの言葉に説得力を持たせた。",
						"chinese": "奇怪地重复着的天气。反常的自然现象，让伊瓦尔的话更有说服力了。",
						"french": "Le temps étrangement répétitif. Des phénomènes naturels anormaux ont donné du poids aux paroles d'Ivar.",
						"spanish": "El clima extrañamente repetitivo. Fenómenos naturales anormales dieron credibilidad a las palabras de Ivar.",
						"vietnamese": "Thời tiết lặp đi lặp lại một cách kỳ lạ. Những hiện tượng tự nhiên bất thường đã củng cố thêm lời nói của Ivar.",
						"thai": "สภาพอากาศที่วนเวียนซ้ำซาก ปรากฏการณ์ธรรมชาติที่ผิดปกติทำให้คำพูดของอิวาร์มีน้ำหนักขึ้น",
						"hindi": "अजीब तरह से दोहराया जाने वाला मौसम। असामान्य प्राकृतिक घटनाओं ने इवार की बातों को बल दिया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "설마… 정말 망령의 저주 때문인가?",
						"english": "Could it be... really because of the specter's curse?",
						"japanese": "まさか…本当に亡霊の呪いのせいなのか？",
						"chinese": "难道说…真的是因为亡灵的诅咒吗？",
						"french": "Se pourrait-il... que ce soit vraiment à cause de la malédiction du spectre ?",
						"spanish": "¿Será... realmente por la maldición del espectro?",
						"vietnamese": "Chẳng lẽ… thật sự là do lời nguyền của linh hồn sao?",
						"thai": "ไม่นะ… นี่มันเป็นเพราะคำสาปของวิญญาณร้ายจริงๆ เหรอ",
						"hindi": "कहीं ऐसा तो नहीं… कि यह वास्तव में प्रेत के श्राप के कारण है?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "계속 가봤자 돌아오는 건 절망뿐이다. 멈춰야 해.",
						"english": "If you keep going, only despair will return. You must stop.",
						"japanese": "進み続けても、戻ってくるのは絶望だけだ。止まるべきだ。",
						"chinese": "继续前进也只会带来绝望。必须停下来。",
						"french": "Si tu continues, seul le désespoir te reviendra. Tu dois t'arrêter.",
						"spanish": "Si sigues adelante, solo te espera la desesperación. Debes detenerte.",
						"vietnamese": "Dù có tiếp tục đi, thứ trở lại cũng chỉ là tuyệt vọng thôi. Phải dừng lại.",
						"thai": "ถ้าไปต่อ ก็มีแต่ความสิ้นหวังที่จะกลับมา ต้องหยุด",
						"hindi": "आगे बढ़ते रहने से केवल निराशा ही मिलेगी। तुम्हें रुकना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 나는… 진실을 밝혀야 해.",
						"english": "I can't stop. I must… reveal the truth.",
						"japanese": "止められない。私は…真実を明らかにしなければならない。",
						"chinese": "我无法停止。我必须…揭露真相。",
						"french": "Je ne peux pas m'arrêter. Je dois… révéler la vérité.",
						"spanish": "No puedo parar. Debo… revelar la verdad.",
						"vietnamese": "Tôi không thể dừng lại. Tôi phải… tiết lộ sự thật.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้อง… เปิดเผยความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे… सच उजागर करना होगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "헛된 희망에 매달리는군. 결국 깨닫게 될 거다. 이 싸움이 얼마나 무의미한지.",
						"english": "Clinging to false hope. You'll eventually realize how meaningless this fight is.",
						"japanese": "儚い希望にしがみついているな。いずれ気づくだろう。この戦いがどれほど無意味なものか。",
						"chinese": "徒劳地 clinging to hope。你终将明白这场战斗是多么毫无意义。",
						"french": "Tu t'accroches à un espoir vain. Tu finiras par réaliser à quel point ce combat est futile.",
						"spanish": "Te aferras a una esperanza vana. Al final te darás cuenta de lo insignificante que es esta lucha.",
						"vietnamese": "Bám víu vào hy vọng hão huyền. Cuối cùng ngươi sẽ nhận ra cuộc chiến này vô nghĩa đến mức nào.",
						"thai": "ยึดติดกับความหวังที่เปล่าประโยชน์ สุดท้ายเจ้าจะตระหนักว่าการต่อสู้นี้ไร้ความหมายเพียงใด",
						"hindi": "तुम व्यर्थ की आशा से चिपके हो। आखिरकार तुम्हें एहसास होगा कि यह लड़ाई कितनी निरर्थक है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "깨닫든 말든, 지금은 멈추지 않아!",
						"english": "Whether I realize it or not, I won't stop now!",
						"japanese": "気づこうが気づくまいが、今は止まらない！",
						"chinese": "无论是否明白，我现在都不会停下！",
						"french": "Que je le réalise ou non, je ne m'arrêterai pas maintenant !",
						"spanish": "¡Lo entienda o no, no me detendré ahora!",
						"vietnamese": "Dù có nhận ra hay không, bây giờ ta sẽ không dừng lại!",
						"thai": "ไม่ว่าจะตระหนักหรือไม่ก็ตาม ตอนนี้ฉันจะไม่หยุด!",
						"hindi": "चाहे मुझे एहसास हो या न हो, मैं अब नहीं रुकूँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자. 네놈의 강함은 여기까지다! 네놈 또한 망령이 될 뿐!",
						"english": "Fool. Your strength ends here! You too shall become a mere wraith!",
						"japanese": "愚か者め。貴様の強さはここまでだ！貴様もまた、亡霊となるのみ！",
						"chinese": "愚蠢的家伙。你的力量到此为止了！你也将成为一个亡灵！",
						"french": "Imbécile. Ta force s'arrête ici ! Toi aussi, tu ne seras qu'un fantôme !",
						"spanish": "Necio. ¡Tu fuerza llega hasta aquí! ¡Tú también te convertirás en un espectro!",
						"vietnamese": "Kẻ ngu ngốc. Sức mạnh của ngươi chỉ đến đây thôi! Ngươi cũng sẽ chỉ trở thành một vong linh!",
						"thai": "เจ้าคนโง่. ความแข็งแกร่งของแกสิ้นสุดลงแค่นี้แหละ! แกเองก็จะกลายเป็นเพียงภูตผี!",
						"hindi": "मूर्ख। तुम्हारी शक्ति यहीं खत्म होती है! तुम भी बस एक प्रेत बनोगे!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직이야! 포기하지 않아!",
						"english": "…Not yet! I won't give up!",
						"japanese": "…まだだ！諦めない！",
						"chinese": "…还没完！我不会放弃的！",
						"french": "…Pas encore ! Je n'abandonnerai pas !",
						"spanish": "…¡Aún no! ¡No me rendiré!",
						"vietnamese": "…Chưa! Tôi sẽ không bỏ cuộc!",
						"thai": "…ยังไม่ใช่! ฉันจะไม่ยอมแพ้!",
						"hindi": "…अभी नहीं! मैं हार नहीं मानूँगा!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악…! 하지만… 이것으로… 끝이 아니리라…!",
						"english": "Ugh…! But… this… won't be the end…!",
						"japanese": "くあああ…！だが…これで…終わりではない…！",
						"chinese": "呃啊…！但是…这…不会是结局…！",
						"french": "Ugh… ! Mais… ce… ne sera pas la fin… !",
						"spanish": "¡Agh…! Pero… esto… ¡no será el fin…!",
						"vietnamese": "Khụ khụ…! Nhưng… đây… sẽ không phải là kết thúc…!",
						"thai": "อ๊าก…! แต่… นี่… ไม่ใช่จุดจบ…!",
						"hindi": "उफ़…! लेकिन… यह… अंत नहीं होगा…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝이 아니라고?",
						"english": "Not the end?",
						"japanese": "終わりではないだと？",
						"chinese": "不是结局？",
						"french": "Pas la fin ?",
						"spanish": "¿No es el fin?",
						"vietnamese": "Không phải kết thúc sao?",
						"thai": "ไม่ใช่จุดจบเหรอ?",
						"hindi": "अंत नहीं है?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해 위로, 또다시 기이한 눈보라가 휘몰아쳤다.",
						"english": "Over the remnants of the fallen {random_boss}, a strange blizzard raged once more.",
						"japanese": "倒れた{random_boss}の残骸の上に、再び奇妙な吹雪が吹き荒れた。",
						"chinese": "在倒下的{random_boss}残骸之上，奇异的暴风雪再次呼啸而过。",
						"french": "Sur les vestiges du {random_boss} vaincu, un étrange blizzard s'est déchaîné de nouveau.",
						"spanish": "Sobre los restos del {random_boss} caído, una extraña ventisca se desató una vez más.",
						"vietnamese": "Trên tàn tích của {random_boss} đã gục ngã, một trận bão tuyết kỳ lạ lại nổi lên.",
						"thai": "เหนือซากปรักหักพังของ {random_boss} ที่ล้มลง พายุหิมะแปลกประหลาดได้โหมกระหน่ำอีกครั้ง",
						"hindi": "गिरे हुए {random_boss} के अवशेषों पर, एक अजीब बर्फीला तूफान फिर से उठ खड़ा हुआ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…허무해. 정말 아무것도 변하지 않는 건가?",
						"english": "…Meaningless. Has nothing truly changed?",
						"japanese": "…虚しい。本当に何も変わらないのか？",
						"chinese": "…虚无。真的什么都没改变吗？",
						"french": "…Vain. Rien n'a vraiment changé ?",
						"spanish": "…Vacío. ¿Realmente nada ha cambiado?",
						"vietnamese": "…Vô nghĩa. Thật sự không có gì thay đổi sao?",
						"thai": "…ว่างเปล่า. ไม่มีอะไรเปลี่ยนแปลงเลยเหรอ?",
						"hindi": "…व्यर्थ। क्या सच में कुछ भी नहीं बदला?"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 이 영역까지 기어들어왔느냐? 어리석은 인간!",
						"english": "How dare you crawl into this domain? Foolish human!",
						"japanese": "よくもこの領域まで這い上がってきたな？愚かな人間め！",
						"chinese": "竟敢爬进这个领域？愚蠢的人类！",
						"french": "Comment oses-tu ramper jusqu'à ce domaine ? Humain stupide !",
						"spanish": "¿Cómo osas arrastrarte a este dominio? ¡Humano estúpido!",
						"vietnamese": "Ngươi dám bò vào lãnh địa này sao? Loài người ngu xuẩn!",
						"thai": "กล้าดียังไงถึงคลานเข้ามาในอาณาเขตนี้? มนุษย์โง่เง่า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई इस क्षेत्र में रेंगने की? मूर्ख इंसान!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네놈의 발버둥은 무의미하다. 모든 것이 반복될 뿐.",
						"english": "Your struggles are meaningless. Everything will only repeat itself.",
						"japanese": "貴様の足掻きは無意味だ。全てが繰り返されるだけ。",
						"chinese": "你的挣扎毫无意义。一切都只会重演。",
						"french": "Tes efforts sont vains. Tout ne fera que se répéter.",
						"spanish": "Tus esfuerzos son inútiles. Todo se repetirá.",
						"vietnamese": "Sự vùng vẫy của ngươi vô nghĩa. Mọi thứ sẽ chỉ lặp lại mà thôi.",
						"thai": "ความพยายามของเจ้าไร้ความหมาย ทุกสิ่งจะซ้ำรอยเดิมเท่านั้น",
						"hindi": "तुम्हारी कोशिशें व्यर्थ हैं। सब कुछ बस दोहराया जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "비켜! 더 이상 속지 않아!",
						"english": "Get out of my way! I won't be fooled anymore!",
						"japanese": "どけ！もう騙されない！",
						"chinese": "让开！我不会再被骗了！",
						"french": "Écarte-toi ! Je ne me laisserai plus berner !",
						"spanish": "¡Apártate! ¡Ya no me engañarás!",
						"vietnamese": "Tránh ra! Ta sẽ không bị lừa nữa!",
						"thai": "หลีกไป! ฉันจะไม่ถูกหลอกอีกแล้ว!",
						"hindi": "हट जाओ! मैं अब और धोखा नहीं खाऊँगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"spot": [
						5,
						1
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…강함의 끝을 시험하는군. 저 망령이 네놈의 끝을 보여줄 거다.",
						"english": "…Testing the limits of strength. That wraith will show you your end.",
						"japanese": "…強さの限界を試しているな。あの亡霊が貴様の終わりを見せてくれるだろう。",
						"chinese": "……测试力量的极限吗。那个幽灵会让你看到你的结局。",
						"french": "…Tu testes les limites de la force. Ce spectre te montrera ta fin.",
						"spanish": "…Estás probando los límites de la fuerza. Ese espectro te mostrará tu fin.",
						"vietnamese": "…Ngươi đang thử thách giới hạn của sức mạnh. Cái vong hồn kia sẽ cho ngươi thấy kết cục của mình.",
						"thai": "…ทดสอบขีดจำกัดของความแข็งแกร่งสินะ ผีร้ายตนนั้นจะแสดงจุดจบของเจ้าให้เห็น",
						"hindi": "…तुम शक्ति की सीमाओं का परीक्षण कर रहे हो। वह प्रेत तुम्हें तुम्हारा अंत दिखाएगा।"
					}
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"speaker": "ivar",
					"duration_ms": 400
				}
			]
		}
	]
} as const;
