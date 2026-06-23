export const scenario_hell_voidprism_7_02 = {
	"scenario_id": "hell_voidprism_7_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "뒤틀린 사원의 입구. 영혼들의 비명이 메아리쳤다.",
						"english": "Entrance to the Twisted Temple. The screams of souls echoed.",
						"japanese": "ねじれた寺院の入り口。魂の叫びが木霊した。",
						"chinese": "扭曲寺庙的入口。灵魂的尖叫声回荡着。",
						"french": "Entrée du Temple Tordu. Les cris des âmes résonnaient.",
						"spanish": "Entrada al Templo Retorcido. Los gritos de las almas resonaban.",
						"vietnamese": "Lối vào Đền thờ Vặn vẹo. Tiếng la hét của các linh hồn vang vọng.",
						"thai": "ทางเข้าวิหารบิดเบี้ยว เสียงกรีดร้องของดวงวิญญาณก้องกังวาน.",
						"hindi": "मुड़े हुए मंदिर का प्रवेश द्वार। आत्माओं की चीखें गूँज रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "여긴… 대체.",
						"english": "Here... what on earth.",
						"japanese": "ここは…一体。",
						"chinese": "这里…到底。",
						"french": "Ici... mais qu'est-ce que c'est.",
						"spanish": "Aquí... qué demonios.",
						"vietnamese": "Nơi này… rốt cuộc.",
						"thai": "ที่นี่… ที่ไหนกันแน่.",
						"hindi": "यह… आखिर।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "어서 와. 기다렸어.",
						"english": "Welcome. I've been waiting.",
						"japanese": "よく来たな。待っていたぞ。",
						"chinese": "欢迎。我一直在等你。",
						"french": "Bienvenue. Je t'attendais.",
						"spanish": "Bienvenido. Te estaba esperando.",
						"vietnamese": "Chào mừng. Tôi đã đợi.",
						"thai": "ยินดีต้อนรับ. รออยู่.",
						"hindi": "आओ। मैं इंतज़ार कर रहा था।"
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "कौन हो तुम?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "브림. 이곳 영혼들의 기억을 모으는 자.",
						"english": "Brim. The one who gathers the memories of these souls.",
						"japanese": "ブリム。ここにある魂の記憶を集める者だ。",
						"chinese": "布瑞姆。收集这里灵魂记忆之人。",
						"french": "Brim. Celui qui rassemble les souvenirs de ces âmes.",
						"spanish": "Brim. El que recoge los recuerdos de estas almas.",
						"vietnamese": "Brim. Kẻ thu thập ký ức của những linh hồn nơi đây.",
						"thai": "บริม. ผู้รวบรวมความทรงจำของดวงวิญญาณที่นี่.",
						"hindi": "ब्रिम। इन आत्माओं की यादें इकट्ठा करने वाला।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "어떤 예언자의 환영을 보고 있어. 너희가 알던 진실과는 다를 거야.",
						"english": "You're seeing a prophet's illusion. It will be different from the truth you knew.",
						"japanese": "ある預言者の幻影を見ているな。お前たちが知っていた真実とは違うだろう。",
						"chinese": "你看到的是一位预言者的幻象。它将与你们所知的真相不同。",
						"french": "Tu vois l'illusion d'un prophète. Elle sera différente de la vérité que vous connaissiez.",
						"spanish": "Estás viendo la ilusión de un profeta. Será diferente de la verdad que conocías.",
						"vietnamese": "Ngươi đang thấy ảo ảnh của một nhà tiên tri. Nó sẽ khác với sự thật mà các ngươi từng biết.",
						"thai": "เจ้ากำลังเห็นภาพลวงตาของศาสดาพยากรณ์คนหนึ่ง มันจะแตกต่างจากความจริงที่เจ้าเคยรู้.",
						"hindi": "तुम एक पैगंबर का भ्रम देख रहे हो। यह उस सच्चाई से अलग होगा जो तुम जानते थे।"
					},
					"emotion": "base",
					"speaker": "brim",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "brim",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "그 예언자는… 심판자를 '구원자'라 불렀어.",
						"english": "The prophet... called the Arbiter a 'savior'.",
						"japanese": "預言者は…審判者を「救世主」と呼んだ。",
						"chinese": "那个预言者…称审判者为“救世主”。",
						"french": "La prophétesse... a appelé le Juge un 'sauveur'.",
						"spanish": "La profetisa... llamó al Juez un 'salvador'.",
						"vietnamese": "Nhà tiên tri... gọi Kẻ Phán Xét là 'cứu tinh'.",
						"thai": "ผู้พยากรณ์...เรียกผู้พิพากษาว่า 'ผู้กอบกู้'",
						"hindi": "उस पैगंबर ने... न्यायाधीश को 'मुक्तिदाता' कहा।"
					}
				},
				{
					"content": {
						"korean": "구원자? 우린 '심판자'라고 들었는데.",
						"english": "A savior? We heard 'Arbiter'.",
						"japanese": "救世主？我々は「審判者」だと聞いたが。",
						"chinese": "救世主？我们听说是“审判者”。",
						"french": "Un sauveur ? Nous avons entendu 'Juge'.",
						"spanish": "¿Un salvador? Escuchamos 'Juez'.",
						"vietnamese": "Cứu tinh? Chúng tôi nghe là 'Kẻ Phán Xét'.",
						"thai": "ผู้กอบกู้? เราได้ยินว่า 'ผู้พิพากษา'",
						"hindi": "मुक्तिदाता? हमने 'न्यायाधीश' सुना था।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "영혼들은 고통받지만… 그들은 심판을 '받고 있다'고 믿고 있어.",
						"english": "Souls suffer... yet they believe they are 'receiving judgment'.",
						"japanese": "魂は苦しんでいるが…彼らは裁きを「受けている」と信じている。",
						"chinese": "灵魂在受苦…但他们相信自己正在“接受审判”。",
						"french": "Les âmes souffrent... pourtant elles croient 'recevoir le jugement'.",
						"spanish": "Las almas sufren... pero creen que están 'recibiendo el juicio'.",
						"vietnamese": "Các linh hồn đau khổ... nhưng họ tin rằng họ đang 'nhận phán xét'.",
						"thai": "วิญญาณทรมาน...แต่พวกเขากลับเชื่อว่ากำลัง 'ได้รับการพิพากษา'",
						"hindi": "आत्माएँ पीड़ित हैं... फिर भी वे मानते हैं कि वे 'न्याय प्राप्त कर रहे हैं'।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What does that mean?",
						"japanese": "それはどういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Đó là sao?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "उसका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "그녀는 속삭였어. '거짓된 구원이 영혼을 잠식한다'고.",
						"english": "She whispered. 'False salvation devours souls.'",
						"japanese": "彼女は囁いた。「偽りの救済が魂を侵食する」と。",
						"chinese": "她低语道：“虚假的救赎正在吞噬灵魂。”",
						"french": "Elle a chuchoté. « Une fausse rédemption dévore les âmes. »",
						"spanish": "Ella susurró. 'La falsa salvación devora las almas'.",
						"vietnamese": "Cô ấy thì thầm. 'Sự cứu rỗi giả dối nuốt chửng linh hồn.'",
						"thai": "เธอกระซิบว่า 'การไถ่บาปจอมปลอมจะกลืนกินวิญญาณ'",
						"hindi": "उसने फुसफुसाया। 'झूठी मुक्ति आत्माओं को खा जाती है।'"
					},
					"emotion": "angry",
					"speaker": "brim",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "애쉬가 말한 심판자의 과거… 조금 이상해.",
						"english": "The Arbiter's past Ash mentioned... it's a bit strange.",
						"japanese": "アッシュが言った審判者の過去…少しおかしい。",
						"chinese": "艾什提到的审判者的过去…有点奇怪。",
						"french": "Le passé du Juge qu'Ash a mentionné... c'est un peu étrange.",
						"spanish": "El pasado del Juez que Ash mencionó... es un poco extraño.",
						"vietnamese": "Quá khứ của Kẻ Phán Xét mà Ash đã nói... hơi kỳ lạ.",
						"thai": "อดีตของผู้พิพากษาที่แอชพูดถึง...มันแปลกๆ นะ",
						"hindi": "ऐश ने न्यायाधीश के अतीत के बारे में जो कहा... वह थोड़ा अजीब है।"
					},
					"emotion": "base",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"content": {
						"korean": "애쉬는 심판자가 타락했다고 했어.",
						"english": "Ash said the Arbiter had fallen.",
						"japanese": "アッシュは審判者が堕落したと言った。",
						"chinese": "艾什说审判者已经堕落了。",
						"french": "Ash a dit que le Juge était tombé.",
						"spanish": "Ash dijo que el Juez había caído.",
						"vietnamese": "Ash nói Kẻ Phán Xét đã sa đọa.",
						"thai": "แอชบอกว่าผู้พิพากษาตกต่ำลงแล้ว",
						"hindi": "ऐश ने कहा कि न्यायाधीश भ्रष्ट हो गया था।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "하지만 예언자의 환영은… 그녀가 처음부터 이 지옥의 일부였다고 말해.",
						"english": "But the prophet's vision... says she was part of this hell from the beginning.",
						"japanese": "しかし預言者の幻影は…彼女が最初からこの地獄の一部だったと言う。",
						"chinese": "但预言者的幻象…却说她从一开始就是这个地狱的一部分。",
						"french": "Mais la vision de la prophétesse... dit qu'elle faisait partie de cet enfer depuis le début.",
						"spanish": "Pero la visión de la profetisa... dice que ella fue parte de este infierno desde el principio.",
						"vietnamese": "Nhưng thị kiến của nhà tiên tri... lại nói rằng cô ấy là một phần của địa ngục này ngay từ đầu.",
						"thai": "แต่ภาพนิมิตของผู้พยากรณ์...บอกว่านางเป็นส่วนหนึ่งของนรกนี้มาตั้งแต่แรก",
						"hindi": "लेकिन पैगंबर का दर्शन... कहता है कि वह शुरुआत से ही इस नर्क का हिस्सा थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "처음부터…?",
						"english": "From the beginning...?",
						"japanese": "最初から…？",
						"chinese": "从一开始…？",
						"french": "Dès le début...?",
						"spanish": "¿Desde el principio...?",
						"vietnamese": "Ngay từ đầu...?",
						"thai": "ตั้งแต่แรก...?",
						"hindi": "शुरुआत से...?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "brim",
					"content": {
						"korean": "모든 것은 뒤틀려 있어. 네가 믿는 것조차.",
						"english": "Everything is twisted. Even what you believe.",
						"japanese": "全てが歪んでいる。お前が信じるものさえも。",
						"chinese": "一切都被扭曲了。甚至包括你所相信的。",
						"french": "Tout est tordu. Même ce que tu crois.",
						"spanish": "Todo está retorcido. Incluso lo que crees.",
						"vietnamese": "Mọi thứ đều bị bóp méo. Ngay cả những gì bạn tin.",
						"thai": "ทุกสิ่งบิดเบือนไปหมด แม้แต่สิ่งที่คุณเชื่อ",
						"hindi": "सब कुछ विकृत है। यहाँ तक कि जो तुम मानते हो वह भी।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "사원의 심부, 벽면에는 알 수 없는 문양들이 희미하게 빛났다.",
						"english": "Deep within the temple, unknown patterns faintly glowed on the walls.",
						"japanese": "神殿の奥深く、壁には未知の文様が薄く光っていた。",
						"chinese": "神殿深处，墙壁上未知的图案散发着微弱的光芒。",
						"french": "Au fond du temple, des motifs inconnus brillaient faiblement sur les murs.",
						"spanish": "En lo profundo del templo, patrones desconocidos brillaban débilmente en las paredes.",
						"vietnamese": "Sâu trong ngôi đền, những hoa văn không rõ mờ ảo phát sáng trên tường.",
						"thai": "ลึกเข้าไปในวิหาร ลวดลายปริศนาบนผนังเรืองรองอย่างแผ่วเบา",
						"hindi": "मंदिर की गहराई में, दीवारों पर अज्ञात पैटर्न धुंधले रूप से चमक रहे थे。"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "이 문양들… 예언자가 남긴 경고문이야.",
						"english": "These patterns… a warning left by the prophet.",
						"japanese": "これらの文様は…預言者が残した警告だ。",
						"chinese": "这些图案……是预言者留下的警告。",
						"french": "Ces motifs… un avertissement laissé par le prophète.",
						"spanish": "Estos patrones… una advertencia dejada por el profeta.",
						"vietnamese": "Những hoa văn này… một lời cảnh báo do nhà tiên tri để lại.",
						"thai": "ลวดลายเหล่านี้…คำเตือนที่ท่านศาสดาพยากรณ์ทิ้งไว้",
						"hindi": "ये पैटर्न… पैगंबर द्वारा छोड़ी गई एक चेतावनी है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 내용인데?",
						"english": "What do they say?",
						"japanese": "何て書いてあるの？",
						"chinese": "说了些什么？",
						"french": "Que disent-ils ?",
						"spanish": "¿Qué dicen?",
						"vietnamese": "Nội dung là gì?",
						"thai": "มันว่ายังไงบ้าง?",
						"hindi": "इनमें क्या लिखा है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "'진실은 거울에 비친 환영. 너의 눈을 믿지 마라.'",
						"english": "'Truth is a mirage in the mirror. Trust not your eyes.'",
						"japanese": "「真実は鏡に映る幻影。己の目を信じるな。」",
						"chinese": "“真相是镜中的幻影。不要相信你的眼睛。”",
						"french": "« La vérité est un mirage dans le miroir. Ne crois pas tes yeux. »",
						"spanish": "«La verdad es un espejismo en el espejo. No confíes en tus ojos.»",
						"vietnamese": "“Sự thật là ảo ảnh trong gương. Đừng tin vào mắt mình.”",
						"thai": "“ความจริงคือภาพลวงตาในกระจก อย่าเชื่อสายตาของเจ้า”",
						"hindi": "'सच दर्पण में एक भ्रम है। अपनी आँखों पर विश्वास मत करो।'"
					},
					"speaker": "brim",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여길 더 깊이 가면… 네가 보고 싶은 것을 보게 될 거야.",
						"english": "Go deeper… and you'll see what you desire.",
						"japanese": "ここをさらに深く進めば…お前が見たいものが見えるだろう。",
						"chinese": "如果你深入这里……你会看到你想看到的东西。",
						"french": "Va plus profond… et tu verras ce que tu désires.",
						"spanish": "Ve más profundo… y verás lo que deseas.",
						"vietnamese": "Tiến sâu hơn… và ngươi sẽ thấy điều ngươi muốn thấy.",
						"thai": "ถ้าเจ้าเข้าไปลึกกว่านี้…เจ้าจะได้เห็นสิ่งที่เจ้าต้องการ",
						"hindi": "और गहरे जाओगे तो… तुम्हें वही दिखेगा जो तुम देखना चाहते हो।"
					},
					"emotion": "sad",
					"speaker": "brim"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "...",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 영혼들… 감히 {random_boss}를 거역하려 했는가?",
						"english": "Foolish souls... dared you defy {random_boss}?",
						"japanese": "愚かな魂ども…よくも{random_boss}に逆らおうとしたな？",
						"chinese": "愚蠢的灵魂……竟敢反抗{random_boss}？",
						"french": "Âmes insensées... osiez-vous défier {random_boss} ?",
						"spanish": "¡Almas necias... osasteis desafiar a {random_boss}?",
						"vietnamese": "Những linh hồn ngu ngốc... dám chống lại {random_boss} sao?",
						"thai": "วิญญาณโง่เขลา...กล้าขัดขืน {random_boss} หรือ?",
						"hindi": "मूर्ख आत्माएं... क्या तुमने {random_boss} का विरोध करने की हिम्मत की?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "너희의 진실은… 환영 속에서 영원히 갇힐 것이다.",
						"english": "Your truth... shall be forever trapped... within illusions.",
						"japanese": "お前たちの真実は…幻影の中で永遠に閉じ込められるだろう。",
						"chinese": "你们的真相……将永远囚禁在幻象中。",
						"french": "Votre vérité... sera à jamais piégée... dans les illusions.",
						"spanish": "Vuestra verdad... quedará atrapada para siempre... en la ilusión.",
						"vietnamese": "Sự thật của các ngươi... sẽ mãi mãi bị giam cầm... trong ảo ảnh.",
						"thai": "ความจริงของพวกเจ้า...จะถูกจองจำในภาพลวงตาตลอดไป",
						"hindi": "तुम्हारा सत्य... हमेशा के लिए... भ्रमों में कैद रहेगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "……还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "¡...Aún no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 죽음은… 끝이 아니다….",
						"english": "Ugh... Death... is not the end...",
						"japanese": "ぐうっ…死は…終わりではない…",
						"chinese": "呃啊……死亡……并非终结……",
						"french": "Argh... La mort... n'est pas la fin...",
						"spanish": "Ugh... La muerte... no es el final...",
						"vietnamese": "Khụ... Cái chết... không phải là kết thúc...",
						"thai": "อึก...ความตาย...ไม่ใช่จุดจบ...",
						"hindi": "उह... मृत्यु... अंत नहीं है..."
					}
				},
				{
					"content": {
						"korean": "진실은… 너희가… 알고 있는 것보다… 더 잔혹해….",
						"english": "The truth... is far more cruel... than you know...",
						"japanese": "真実は…お前たちが…知るより…ずっと残酷だ…",
						"chinese": "真相……比你们……所知的……更加残酷……",
						"french": "La vérité... est bien plus cruelle... que vous ne le savez...",
						"spanish": "La verdad... es mucho más cruel... de lo que imagináis...",
						"vietnamese": "Sự thật... tàn khốc hơn... những gì các ngươi... biết...",
						"thai": "ความจริง...มันโหดร้ายกว่า...ที่พวกเจ้า...รู้...",
						"hindi": "सत्य... तुम जो जानते हो... उससे कहीं अधिक क्रूर है..."
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What do you mean!?",
						"japanese": "どういうことだ！？",
						"chinese": "你说什么！?",
						"french": "Que veux-tu dire !?",
						"spanish": "¡¿Qué dices?!",
						"vietnamese": "Ngươi nói gì vậy!?",
						"thai": "หมายความว่าอะไร!?",
						"hindi": "तुम्हारा क्या मतलब है!?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해 속에서, 희미한 빛이 일렁였다.",
						"english": "From the fallen {random_boss}'s remains, a faint light flickered.",
						"japanese": "倒れた{random_boss}の残骸の中から、微かな光が揺らめいた。",
						"chinese": "在倒下的{random_boss}的残骸中，微弱的光芒闪烁着。",
						"french": "Des restes du {random_boss} vaincu, une faible lumière vacilla.",
						"spanish": "Entre los restos del {random_boss} caído, una luz tenue parpadeó.",
						"vietnamese": "Từ tàn dư của {random_boss} đã gục ngã, một ánh sáng yếu ớt lập lòe.",
						"thai": "จากซากปรักหักพังของ {random_boss} ที่ล้มลง แสงริบหรี่ก็ส่องประกายขึ้น",
						"hindi": "गिरे हुए {random_boss} के अवशेषों से, एक हल्की रोशनी झिलमिला उठी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 의문은 더욱 깊어졌다. 이 지옥의 진실은 무엇인가?",
						"english": "But the mystery only deepened. What is the truth of this hell?",
						"japanese": "しかし疑問はさらに深まった。この地獄の真実とは何なのか？",
						"chinese": "然而疑问却更深了。这个地狱的真相究竟是什么？",
						"french": "Mais le mystère s'épaissit. Quelle est la vérité de cet enfer ?",
						"spanish": "Pero el misterio se hizo más profundo. ¿Cuál es la verdad de este infierno?",
						"vietnamese": "Nhưng nghi vấn lại càng sâu sắc hơn. Sự thật về địa ngục này là gì?",
						"thai": "แต่ความสงสัยยิ่งทวีคูณ ความจริงของนรกนี้คืออะไรกันแน่?",
						"hindi": "किन्तु रहस्य और गहरा गया। इस नरक का सत्य क्या है?"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 알 수 없는 존재가 지옥의 심장부를 지키고 있었다.",
						"english": "A colossal shadow blocked the path. An unknown entity guarded the heart of hell.",
						"japanese": "巨大な影が道を阻んだ。未知の存在が地獄の心臓部を守っていた。",
						"chinese": "巨大的阴影挡住了去路。一个未知的存在守护着地狱的深处。",
						"french": "Une ombre colossale bloquait le chemin. Une entité inconnue gardait le cœur de l'enfer.",
						"spanish": "Una sombra colosal bloqueó el camino. Una entidad desconocida custodiaba el corazón del infierno.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Một thực thể không rõ đang canh giữ trái tim địa ngục.",
						"thai": "เงาขนาดยักษ์ขวางทางอยู่ สิ่งมีชีวิตลึกลับเฝ้าใจกลางนรก",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। एक अज्ञात सत्ता नरक के हृदय की रखवाली कर रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 온 어리석은 영혼들….",
						"english": "Foolish souls who dared to come this far…",
						"japanese": "よくもここまで来た愚かな魂たちよ…",
						"chinese": "竟敢来到这里的愚蠢灵魂……",
						"french": "Âmes insensées qui avez osé venir jusqu'ici…",
						"spanish": "Almas necias que osaron llegar hasta aquí…",
						"vietnamese": "Những linh hồn ngu ngốc dám đến tận đây…",
						"thai": "วิญญาณโง่เขลาที่บังอาจมาถึงที่นี่…",
						"hindi": "यहाँ तक आने वाली मूर्ख आत्माएँ…"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "진실을 알려는 자들은 모두 여기서 멈췄다.",
						"english": "All who sought the truth stopped here.",
						"japanese": "真実を知ろうとする者は皆、ここで立ち止まった。",
						"chinese": "所有寻求真相的人都止步于此。",
						"french": "Tous ceux qui ont cherché la vérité se sont arrêtés ici.",
						"spanish": "Todos los que buscaron la verdad se detuvieron aquí.",
						"vietnamese": "Tất cả những ai tìm kiếm sự thật đều dừng lại ở đây.",
						"thai": "ผู้ที่แสวงหาความจริงทั้งหมดต่างหยุดอยู่แค่นี้",
						"hindi": "सत्य जानने वाले सभी यहीं रुक गए।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리는 다르다. 진실을 밝혀낼 거야.",
						"english": "We are different. We will uncover the truth.",
						"japanese": "我々は違う。真実を暴いてみせる。",
						"chinese": "我们不同。我们会揭露真相的。",
						"french": "Nous sommes différents. Nous découvrirons la vérité.",
						"spanish": "Nosotros somos diferentes. Revelaremos la verdad.",
						"vietnamese": "Chúng ta khác biệt. Chúng ta sẽ phơi bày sự thật.",
						"thai": "พวกเราไม่เหมือนใคร เราจะเปิดเผยความจริง",
						"hindi": "हम अलग हैं। हम सत्य को उजागर करेंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "brim",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 자는… 예언자의 흔적을 지키는 존재야. 강한 의지를 가졌어.",
						"english": "That one... guards the Prophet's trace. Possesses a strong will.",
						"japanese": "あやつは… 預言者の痕跡を守る存在だ。強靭な意志を持っている。",
						"chinese": "那家伙……是守护先知踪迹的存在。拥有强大的意志。",
						"french": "Celui-là... garde la trace du Prophète. Il a une volonté de fer.",
						"spanish": "Ese... protege el rastro del Profeta. Posee una voluntad férrea.",
						"vietnamese": "Kẻ đó... là kẻ canh giữ dấu vết của Tiên Tri. Hắn có ý chí mạnh mẽ.",
						"thai": "หมอนั่น...คือผู้พิทักษ์ร่องรอยของศาสดา มีเจตจำนงอันแข็งแกร่ง",
						"hindi": "वह... पैगंबर के पदचिह्नों का रक्षक है। उसमें दृढ़ इच्छाशक्ति है।"
					},
					"speaker": "brim",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "{random_boss}의 힘 앞에 무릎 꿇어라!",
						"english": "Kneel before the might of {random_boss}!",
						"japanese": "{random_boss}の力にひれ伏せ！",
						"chinese": "在{random_boss}的力量面前跪下！",
						"french": "Agenouillez-vous devant la puissance de {random_boss} !",
						"spanish": "¡Arrodíllense ante el poder de {random_boss}!",
						"vietnamese": "Hãy quỳ gối trước sức mạnh của {random_boss}!",
						"thai": "คุกเข่าต่อหน้าอำนาจของ {random_boss}!",
						"hindi": "{random_boss} की शक्ति के आगे घुटने टेको!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "brim",
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"지옥의 심연, 뒤틀린 사원.",
			"영혼들의 비명 속에서, '잊혀진 예언'의 흔적을 찾는다.",
			"모든 것이 거짓된 환영인 이곳에서, 과연 진실은 존재할까?",
			"그리고 그 진실은, 우리가 알던 것과 너무도 달랐다."
		],
		"english": [
			"Abyss of Hell, Twisted Temple.",
			"Amidst the screams of souls, I seek traces of the 'Forgotten Prophecy'.",
			"In this place where all is false illusion, does truth truly exist?",
			"And that truth was vastly different from what we knew."
		],
		"japanese": [
			"地獄の深淵、ねじれた寺院。",
			"魂の叫びの中、「忘れられた預言」の痕跡を探す。",
			"全てが偽りの幻影であるこの場所で、果たして真実など存在するのか？",
			"そしてその真実は、私たちが知っていたものとはあまりにも異なっていた。"
		],
		"chinese": [
			"地狱深渊，扭曲的寺庙。",
			"在灵魂的尖叫中，我寻找着“被遗忘的预言”的痕迹。",
			"在这个一切都是虚假幻象的地方，真相真的存在吗？",
			"而那个真相，与我们所知的截然不同。"
		],
		"french": [
			"Abysse infernal, temple tordu.",
			"Au milieu des cris des âmes, je cherche les traces de la 'Prophétie Oubliée'.",
			"En ce lieu où tout n'est qu'illusion mensongère, la vérité existe-t-elle vraiment ?",
			"Et cette vérité était si différente de ce que nous savions."
		],
		"spanish": [
			"Abismo infernal, templo retorcido.",
			"Entre los gritos de las almas, busco rastros de la 'Profecía Olvidada'.",
			"En este lugar donde todo es una falsa ilusión, ¿existe realmente la verdad?",
			"Y esa verdad era muy diferente de lo que sabíamos."
		],
		"vietnamese": [
			"Vực thẳm địa ngục, đền thờ vặn vẹo.",
			"Giữa tiếng la hét của các linh hồn, ta tìm dấu vết của 'Lời Tiên Tri Bị Lãng Quên'.",
			"Nơi mọi thứ đều là ảo ảnh dối trá này, liệu sự thật có tồn tại không?",
			"Và sự thật đó, hoàn toàn khác xa những gì chúng ta từng biết."
		],
		"thai": [
			"ขุมนรกอเวจี, วิหารบิดเบี้ยว.",
			"ท่ามกลางเสียงกรีดร้องของดวงวิญญาณ ข้าตามหาร่องรอยของ 'คำพยากรณ์ที่ถูกลืม'.",
			"ณ ที่แห่งนี้ที่ทุกสิ่งเป็นเพียงภาพลวงตาอันเท็จ แท้จริงแล้วความจริงมีอยู่จริงหรือ?",
			"และความจริงนั้น แตกต่างจากสิ่งที่เราเคยรู้มากนัก."
		],
		"hindi": [
			"नरक का अथाह कुंड, मुड़ा हुआ मंदिर।",
			"आत्माओं की चीखों के बीच, मैं 'भूली हुई भविष्यवाणी' के निशान तलाशता हूँ।",
			"इस जगह पर जहाँ सब कुछ झूठा भ्रम है, क्या सच वाकई मौजूद है?",
			"और वह सच, जो हम जानते थे, उससे बहुत अलग था।"
		]
	}
} as const;
