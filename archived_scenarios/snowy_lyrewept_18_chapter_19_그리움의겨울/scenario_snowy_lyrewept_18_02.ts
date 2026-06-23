export const scenario_snowy_lyrewept_18_02 = {
	"scenario_id": "snowy_lyrewept_18_02",
	"order": 2,
	"act": "rising",
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
	"prologue": {
		"korean": [
			"끝없는 설원, 얼어붙은 시간.",
			"고대 유적은 잊힌 슬픔을 품고 있었다.",
			"거대한 얼음 그림자 뒤에 숨겨진 진실은 무엇일까.",
			"우리가 구원이라 믿는 것이, 파멸의 노래일지도 모른다."
		],
		"english": [
			"Endless snowfield, frozen time.",
			"Ancient ruins held forgotten sorrow.",
			"What truth lies behind the colossal ice shadow?",
			"What we believe to be salvation might be a song of ruin."
		],
		"japanese": [
			"終わらない雪原、凍りついた時間。",
			"古代遺跡は忘れられた悲しみを抱いていた。",
			"巨大な氷の影の裏に隠された真実とは。",
			"我々が救済と信じるものが、破滅の歌かもしれない。"
		],
		"chinese": [
			"无尽雪原，冻结的时间。",
			"古代遗迹蕴含着被遗忘的悲伤。",
			"巨大的冰影背后隐藏着怎样的真相？",
			"我们所相信的救赎，或许是毁灭之歌。"
		],
		"french": [
			"Plaines enneigées infinies, temps figé.",
			"Les ruines antiques renfermaient des chagrins oubliés.",
			"Quelle vérité se cache derrière l'ombre de glace colossale ?",
			"Ce que nous croyons être le salut pourrait être un chant de ruine."
		],
		"spanish": [
			"Campo de nieve interminable, tiempo congelado.",
			"Las ruinas antiguas albergaban una pena olvidada.",
			"LQué verdad se esconde tras la colosal sombra de hielo?",
			"Lo que creemos que es la salvación podría ser un canto de ruina."
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận, thời gian đóng băng.",
			"Di tích cổ xưa chứa đựng nỗi buồn bị lãng quên.",
			"Sự thật nào ẩn giấu sau bóng băng khổng lồ?",
			"Điều ta tin là cứu rỗi, có thể lại là khúc ca hủy diệt."
		],
		"thai": [
			"ทุ่งหิมะไม่มีที่สิ้นสุด, กาลเวลาที่แข็งตัว",
			"ซากปรักหักพังโบราณเก็บงำความเศร้าที่ถูกลืม",
			"ความจริงใดซ่อนอยู่เบื้องหลังเงามืดน้ำแข็งขนาดยักษ์?",
			"สิ่งที่เราเชื่อว่าเป็นความรอด อาจเป็นเพลงแห่งความพินาศ"
		],
		"hindi": [
			"अंतहीन बर्फीला मैदान, जमा हुआ समय।",
			"प्राचीन खंडहरों में भूला हुआ दुख छिपा था।",
			"विशाल बर्फ़ीली परछाई के पीछे क्या सच छिपा है?",
			"जिसे हम मोक्ष मानते हैं, वह शायद विनाश का गीत हो।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "고대 유적의 입구가 모습을 드러냈다. 혹독한 한기가 밀려왔다.",
						"english": "The entrance to the ancient ruins appeared. A biting cold swept in.",
						"japanese": "古代遺跡の入口が現れた。厳しい寒気が押し寄せる。",
						"chinese": "古代遗迹的入口显现了。一股严酷的寒气袭来。",
						"french": "L'entrée des ruines antiques apparut. Un froid mordant envahit les lieux.",
						"spanish": "La entrada a las ruinas antiguas apareció. Un frío punzante invadió el lugar.",
						"vietnamese": "Lối vào di tích cổ xưa đã hiện ra. Một luồng khí lạnh buốt ập đến.",
						"thai": "ทางเข้าสู่ซากปรักหักพังโบราณปรากฏขึ้น ความหนาวเย็นกัดกินเข้ามา",
						"hindi": "प्राचीन खंडहरों का प्रवेश द्वार सामने आया। एक तीखी ठंडक छा गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "…오셨군요. 이곳은 잊힌 자들의 무덤이에요.",
						"english": "...You've arrived. This is the tomb of the forgotten.",
						"japanese": "…いらっしゃいましたね。ここは忘れられた者たちの墓です。",
						"chinese": "……您来了。这里是遗忘者的坟墓。",
						"french": "...Vous êtes arrivé. C'est le tombeau des oubliés.",
						"spanish": "...Ha llegado. Esta es la tumba de los olvidados.",
						"vietnamese": "Bạn đã đến. Đây là lăng mộ của những người bị lãng quên.",
						"thai": "...คุณมาถึงแล้ว ที่นี่คือสุสานของผู้ถูกลืม",
						"hindi": "...आप आ गए। यह भूले हुए लोगों की कब्र है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "잊힌 자들…?",
						"english": "The forgotten...?",
						"japanese": "忘れられた者たち…？",
						"chinese": "遗忘者……？",
						"french": "Les oubliés...?",
						"spanish": "¿Los olvidados...?",
						"vietnamese": "Những người bị lãng quên...?",
						"thai": "ผู้ถูกลืม...?",
						"hindi": "भूले हुए लोग...?"
					}
				},
				{
					"content": {
						"korean": "정령의 힘으로 얼어붙은 영혼들. 슬픔에 갇혀 있죠.",
						"english": "Souls frozen by elemental power. Trapped in sorrow.",
						"japanese": "精霊の力で凍りついた魂たち。悲しみに囚われています。",
						"chinese": "被精灵之力冻结的灵魂。被困在悲伤之中。",
						"french": "Des âmes gelées par le pouvoir élémentaire. Enfermées dans la tristesse.",
						"spanish": "Almas congeladas por el poder elemental. Atrapadas en la pena.",
						"vietnamese": "Những linh hồn bị đóng băng bởi sức mạnh nguyên tố. Bị mắc kẹt trong nỗi buồn.",
						"thai": "ดวงวิญญาณที่ถูกแช่แข็งด้วยพลังของวิญญาณสถิต ติดอยู่ในความเศร้า",
						"hindi": "आत्माएँ जो मौलिक शक्ति से जम गईं। दुख में फँसी हुई हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이들은 과거 '슬픔의 음유시인' 전설과 관련이 있어요.",
						"english": "They are connected to the legend of the 'Bard of Sorrow' from the past.",
						"japanese": "彼らは過去の「悲しみの吟遊詩人」の伝説と関連しています。",
						"chinese": "他们与过去“悲伤吟游诗人”的传说有关。",
						"french": "Ils sont liés à la légende passée du « Barde de la Tristesse ».",
						"spanish": "Están relacionados con la antigua leyenda del \"Bardo de la Tristeza\".",
						"vietnamese": "Họ có liên quan đến truyền thuyết 'Thi sĩ của Nỗi buồn' trong quá khứ.",
						"thai": "พวกเขาเกี่ยวข้องกับตำนาน 'กวีแห่งความเศร้า' ในอดีต",
						"hindi": "ये अतीत की 'शोक के चारण' की किंवदंती से जुड़े हुए हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "음유시인…?",
						"english": "Bard...?",
						"japanese": "吟遊詩人…？",
						"chinese": "吟游诗人……？",
						"french": "Barde...?",
						"spanish": "¿Bardo...?",
						"vietnamese": "Thi sĩ...?",
						"thai": "กวี...?",
						"hindi": "चारण...?"
					}
				},
				{
					"content": {
						"korean": "영원히 끝나지 않는 애가를 부르며 모든 것을 얼음에 봉인하려 했던… 비극적인 자.",
						"english": "A tragic figure who sang an endless lament, attempting to seal all in ice...",
						"japanese": "永遠に終わらない哀歌を歌い、すべてを氷に封じ込めようとした…悲劇的な存在。",
						"chinese": "一个悲剧性的人物，唱着永无止境的哀歌，试图将一切封印在冰中……",
						"french": "Une figure tragique qui chantait une complainte éternelle, tentant de tout sceller dans la glace...",
						"spanish": "Una figura trágica que cantaba un lamento interminable, intentando sellar todo en hielo...",
						"vietnamese": "Một nhân vật bi thảm đã hát khúc ai ca bất tận, cố gắng phong ấn mọi thứ trong băng giá...",
						"thai": "บุคคลผู้โศกนาฏกรรม ผู้ขับขานเพลงไว้อาลัยอันไม่สิ้นสุด พยายามผนึกทุกสิ่งไว้ในน้ำแข็ง...",
						"hindi": "एक दुखद शख्सियत जिसने एक अंतहीन विलाप गाया, सब कुछ बर्फ में सील करने का प्रयास किया..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그럼 저 거신들이 그의 피조물이라는 거야?",
						"english": "So, those colossi are his creations?",
						"japanese": "じゃあ、あの巨像たちは彼の被造物なのか？",
						"chinese": "那么，那些巨像都是他的造物吗？",
						"french": "Alors, ces colosses sont ses créations ?",
						"spanish": "¿Entonces, esos colosos son sus creaciones?",
						"vietnamese": "Vậy, những người khổng lồ đó là tạo vật của hắn à?",
						"thai": "งั้นพวกยักษ์นั่นคือสิ่งที่เขาสร้างขึ้นมาเหรอ?",
						"hindi": "तो, वे विशालकाय मूर्तियां उसकी रचनाएं हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…정확히는, 그의 슬픔이 만들어낸 그림자겠죠.",
						"english": "...More precisely, they are shadows born from his sorrow.",
						"japanese": "…正確には、彼の悲しみが作り出した影でしょう。",
						"chinese": "……准确地说，它们是他悲伤所创造的阴影吧。",
						"french": "...Plus précisément, ce sont des ombres nées de sa tristesse.",
						"spanish": "...Más precisamente, son sombras nacidas de su tristeza.",
						"vietnamese": "...Chính xác hơn, chúng là những cái bóng sinh ra từ nỗi buồn của hắn.",
						"thai": "...พูดให้ถูกคือ พวกมันเป็นเงาที่เกิดจากความโศกเศร้าของเขาต่างหากล่ะ",
						"hindi": "ज़्यादा सटीक कहें तो, वे उसके दुख से पैदा हुई परछाइयाँ हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "이 벽화들을 보세요. 희미하게 보이지만… 어떤 형상이 보일 거예요.",
						"english": "Look at these murals. They're faint, but you might discern some figures.",
						"japanese": "この壁画を見てください。薄れていますが…何かの形が見えるはずです。",
						"chinese": "看看这些壁画。虽然模糊，但你可能会辨认出一些形状。",
						"french": "Regardez ces peintures murales. Elles sont pâles, mais vous pourriez discerner quelques formes.",
						"spanish": "Miren estos murales. Son tenues, pero podrían discernir algunas figuras.",
						"vietnamese": "Hãy nhìn những bức bích họa này. Dù mờ nhạt, nhưng bạn có thể nhận ra một số hình dạng.",
						"thai": "ดูภาพจิตรกรรมฝาผนังเหล่านี้สิ ถึงจะจางๆ แต่ก็น่าจะพอมองเห็นรูปร่างบางอย่างได้",
						"hindi": "इन भित्तिचित्रों को देखें। ये धुंधले हैं, लेकिन आपको कुछ आकृतियाँ दिख सकती हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "이건… 리라를 든 사람 같아.",
						"english": "This... looks like someone holding a lyre.",
						"japanese": "これは…リラを持った人のようだ。",
						"chinese": "这……看起来像一个拿着里拉琴的人。",
						"french": "Ceci… ressemble à quelqu'un tenant une lyre.",
						"spanish": "Esto… parece alguien sosteniendo una lira.",
						"vietnamese": "Đây... trông giống một người đang cầm đàn lia.",
						"thai": "นี่...ดูเหมือนคนกำลังถือพิณ",
						"hindi": "यह... एक वीणा पकड़े हुए व्यक्ति जैसा दिखता है।"
					}
				},
				{
					"content": {
						"korean": "부서진 리라? 그리고 이내 사라지는 그림자…",
						"english": "A broken lyre? And a shadow that soon vanishes...",
						"japanese": "壊れたリラ？そして、すぐに消える影…",
						"chinese": "一把破碎的里拉琴？以及很快消失的影子……",
						"french": "Une lyre brisée ? Et une ombre qui s'évanouit bientôt...",
						"spanish": "¿Una lira rota? Y una sombra que pronto se desvanece...",
						"vietnamese": "Một cây đàn lia đã vỡ? Và một cái bóng sớm biến mất...",
						"thai": "พิณที่แตกหัก? และเงาที่หายไปในไม่ช้า...",
						"hindi": "एक टूटी हुई वीणा? और एक परछाई जो जल्द ही गायब हो जाती है..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "음유시인의 모습이에요. 그의 슬픔이 너무 강해, 현실마저 잠식했죠.",
						"english": "It's the figure of a bard. His sorrow was so strong, it even encroached upon reality.",
						"japanese": "吟遊詩人の姿です。彼の悲しみが強すぎて、現実さえも侵食したのです。",
						"chinese": "那是一位游吟诗人的形象。他的悲伤是如此强烈，甚至侵蚀了现实。",
						"french": "C'est la figure d'un barde. Sa tristesse était si forte qu'elle a même empiété sur la réalité.",
						"spanish": "Es la figura de un bardo. Su tristeza era tan fuerte que incluso invadió la realidad.",
						"vietnamese": "Đó là hình dáng của một người hát rong. Nỗi buồn của hắn quá mạnh, đến mức xâm lấn cả thực tại.",
						"thai": "นั่นคือรูปร่างของกวีพเนจร ความเศร้าของเขารุนแรงมาก จนกัดกินแม้กระทั่งความเป็นจริง",
						"hindi": "यह एक चारण का रूप है। उसका दुख इतना गहरा था कि उसने वास्तविकता पर भी अतिक्रमण कर लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 저 거신들도…",
						"english": "Then those colossi too...",
						"japanese": "じゃあ、あの巨像たちも…",
						"chinese": "那么那些巨像也是……",
						"french": "Alors ces colosses aussi...",
						"spanish": "Entonces esos colosos también...",
						"vietnamese": "Vậy thì những người khổng lồ đó cũng...",
						"thai": "งั้นพวกยักษ์นั่นก็เหมือนกันเหรอ...",
						"hindi": "तो वे विशालकाय मूर्तियां भी..."
					}
				},
				{
					"content": {
						"korean": "네. 슬픔의 잔영이죠. 곧 우리를 가로막을….",
						"english": "Yes. They are lingering shadows of sorrow. Soon to block our path...",
						"japanese": "はい。悲しみの残像です。もうすぐ私たちの道を阻むでしょう…",
						"chinese": "是的。它们是悲伤的残影。很快就会阻挡我们的去路……",
						"french": "Oui. Ce sont des vestiges de la tristesse. Bientôt, ils nous barreront la route...",
						"spanish": "Sí. Son remanentes de la tristeza. Pronto nos bloquearán el camino...",
						"vietnamese": "Đúng vậy. Chúng là tàn dư của nỗi buồn. Sẽ sớm chặn đường chúng ta...",
						"thai": "ใช่แล้ว พวกมันคือเงาที่หลงเหลือของความโศกเศร้า ไม่ช้าก็จะมาขวางทางเรา...",
						"hindi": "हाँ। वे दुख की बची हुई परछाइयाँ हैं। जल्द ही हमारा रास्ता रोकेंगी..."
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
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
						"korean": "유적의 깊은 곳. 얼음 기둥이 거인처럼 솟아 있었다.",
						"english": "Deep within the ruins. Ice pillars rose like giants.",
						"japanese": "遺跡の奥深く。氷の柱が巨人像のようにそびえ立っていた。",
						"chinese": "遗迹深处。冰柱像巨人一样耸立着。",
						"french": "Au plus profond des ruines. Des piliers de glace s'élevaient comme des géants.",
						"spanish": "En lo profundo de las ruinas. Pilares de hielo se alzaban como gigantes.",
						"vietnamese": "Sâu trong tàn tích. Những cột băng sừng sững như người khổng lồ.",
						"thai": "ลึกเข้าไปในซากปรักหักพัง เสาน้ำแข็งตั้งตระหง่านราวกับยักษ์",
						"hindi": "खंडहरों की गहराई में। बर्फ के खंभे दिग्गजों की तरह उठे हुए थे।"
					}
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "더 이상은… 발을 들여서는 안 돼요.",
						"english": "You… shouldn't go any further.",
						"japanese": "「これ以上は… 足を踏み入れてはなりません。」",
						"chinese": "“你…不能再往前走了。”",
						"french": "“Vous… ne devriez pas aller plus loin.”",
						"spanish": "“No… deberías ir más allá.”",
						"vietnamese": "“Bạn… không nên đi xa hơn nữa.”",
						"thai": "“คุณ…ไม่ควรไปต่ออีกแล้ว”",
						"hindi": "“तुम्हें… और आगे नहीं जाना चाहिए।”"
					}
				},
				{
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "「なぜ？」",
						"chinese": "“为什么？”",
						"french": "“Pourquoi ?”",
						"spanish": "“¿Por qué?”",
						"vietnamese": "“Tại sao?”",
						"thai": "“ทำไม?”",
						"hindi": "“क्यों?”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 슬픔은 전염돼요. 당신의 구원이… 파멸이 될 수도 있어요.",
						"english": "This sorrow is contagious. Your salvation… could become your ruin.",
						"japanese": "「この悲しみは伝染します。あなたの救いが…破滅になることもありえます。」",
						"chinese": "“这份悲伤会传染。你的救赎…可能会变成你的毁灭。”",
						"french": "“Cette tristesse est contagieuse. Votre salut… pourrait devenir votre ruine.”",
						"spanish": "“Esta tristeza es contagiosa. Tu salvación… podría convertirse en tu ruina.”",
						"vietnamese": "“Nỗi buồn này có thể lây lan. Sự cứu rỗi của bạn… có thể trở thành sự hủy hoại của bạn.”",
						"thai": "“ความเศร้าโศกนี้ติดต่อกันได้ การไถ่บาปของคุณ…อาจกลายเป็นการทำลายล้างของคุณ”",
						"hindi": "“यह दुख संक्रामक है। तुम्हारा मोक्ष… तुम्हारी बर्बादी बन सकता है।”"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "멈출 수 없어. 방법을 찾아야 해.",
						"english": "I can't stop. I have to find a way.",
						"japanese": "「止められない。方法を見つけないと。」",
						"chinese": "“我无法停止。我必须找到办法。”",
						"french": "“Je ne peux pas m'arrêter. Je dois trouver un moyen.”",
						"spanish": "“No puedo parar. Tengo que encontrar un camino.”",
						"vietnamese": "“Tôi không thể dừng lại. Tôi phải tìm cách.”",
						"thai": "“ฉันหยุดไม่ได้ ฉันต้องหาวิธี”",
						"hindi": "“मैं रुक नहीं सकता। मुझे कोई रास्ता खोजना होगा।”"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "슬픔은… 영원하다. 너희도 마찬가지.",
						"english": "Sorrow... is eternal. And so are you.",
						"japanese": "悲しみは… 永遠だ。お前たちもな。",
						"chinese": "悲伤…是永恒的。你们也一样。",
						"french": "La tristesse… est éternelle. Vous aussi.",
						"spanish": "La tristeza… es eterna. Y vosotros también.",
						"vietnamese": "Nỗi buồn… là vĩnh cửu. Và các ngươi cũng vậy.",
						"thai": "ความโศกเศร้า… เป็นนิรันดร์ พวกเจ้าก็เช่นกัน",
						"hindi": "दुख… शाश्वत है। तुम भी वैसे ही।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기서 끝낼 순 없어!",
						"english": "I can't end it here!",
						"japanese": "ここで終わらせるわけにはいかない！",
						"chinese": "不能在这里结束！",
						"french": "Je ne peux pas m'arrêter ici !",
						"spanish": "¡No puedo terminar aquí!",
						"vietnamese": "Không thể kết thúc ở đây được!",
						"thai": "ฉันจะจบที่นี่ไม่ได้!",
						"hindi": "मैं इसे यहीं खत्म नहीं कर सकता!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "얼음 거신의 손아귀에 붙잡혔다. 다시 도전해야 한다.",
						"english": "Caught in the Ice Giant's grasp. Must challenge again.",
						"japanese": "氷の巨神の手に捕らえられた。再び挑まなければならない。",
						"chinese": "被冰之巨神抓住了。必须再次挑战。",
						"french": "Pris au piège de l'Élémentaire de Glace. Il faut retenter.",
						"spanish": "Atrapado en las garras del Gigante de Hielo. Debo intentarlo de nuevo.",
						"vietnamese": "Bị mắc kẹt trong tay Gã khổng lồ Băng. Phải thử thách lại.",
						"thai": "ถูกจับอยู่ในเงื้อมมือของยักษ์น้ำแข็ง ต้องท้าทายอีกครั้ง",
						"hindi": "बर्फ के विशालकाय की पकड़ में आ गया। फिर से चुनौती देनी होगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "감히… 나의 슬픔을 방해하는가.",
						"english": "How dare you… disturb my sorrow.",
						"japanese": "「よくも…私の悲しみを邪魔したな。」",
						"chinese": "“你竟敢…打扰我的悲伤。”",
						"french": "“Comment oses-tu… troubler ma tristesse.”",
						"spanish": "“¿Cómo te atreves… a perturbar mi tristeza?”",
						"vietnamese": "“Ngươi dám… quấy rầy nỗi buồn của ta.”",
						"thai": "“แกกล้าดียังไง…มารบกวนความเศร้าโศกของข้า”",
						"hindi": "“तुम्हारी हिम्मत कैसे हुई… मेरे दुख को भंग करने की।”"
					}
				},
				{
					"content": {
						"korean": "네가 이 거신들을 조종하는 거야?",
						"english": "Are you controlling these giants?",
						"japanese": "「お前がこの巨神たちを操っているのか？」",
						"chinese": "“你在控制这些巨神吗？”",
						"french": "“Est-ce toi qui contrôles ces géants ?”",
						"spanish": "“¿Estás controlando a estos gigantes?”",
						"vietnamese": "“Ngươi đang điều khiển những người khổng lồ này sao?”",
						"thai": "“เจ้านี่แหละที่ควบคุมยักษ์เหล่านี้อยู่ใช่ไหม?”",
						"hindi": "“क्या तुम इन दिग्गजों को नियंत्रित कर रहे हो?”"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "나는… 잊힌 모든 것의 보존자. 너희도 곧 얼어붙을 것이다.",
						"english": "I am… the preserver of all forgotten things. You too shall soon freeze.",
						"japanese": "「私は…忘れ去られたすべてのものの守護者。お前たちもじきに凍りつくだろう。」",
						"chinese": "“我乃…所有被遗忘之物的守护者。你们也很快就会被冻结。”",
						"french": "“Je suis… le conservateur de toutes les choses oubliées. Vous aussi, vous allez bientôt geler.”",
						"spanish": "“Soy… el conservador de todas las cosas olvidadas. Vosotros también os congelaréis pronto.”",
						"vietnamese": "“Ta là… người bảo tồn mọi thứ bị lãng quên. Các ngươi cũng sẽ sớm đóng băng thôi.”",
						"thai": "“ข้าคือ…ผู้พิทักษ์ของทุกสิ่งที่ถูกลืม พวกเจ้าเองก็จะแข็งตัวในไม่ช้า”",
						"hindi": "“मैं… भूली हुई सभी चीज़ों का संरक्षक हूँ। तुम भी जल्द ही जम जाओगे।”"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 거신이 거대한 그림자를 드리웠다.",
						"english": "An unknown giant cast a colossal shadow.",
						"japanese": "「正体不明の巨神が巨大な影を落とした。」",
						"chinese": "“一个不明巨神投下了巨大的阴影。”",
						"french": "“Un géant inconnu a projeté une ombre colossale.”",
						"spanish": "“Un gigante desconocido proyectó una sombra colosal.”",
						"vietnamese": "“Một người khổng lồ không rõ danh tính đã tạo ra một cái bóng khổng lồ.”",
						"thai": "“ยักษ์ที่ไม่รู้จักได้ทอดเงาอันมหึมา”",
						"hindi": "“एक अज्ञात दिग्गज ने एक विशाल छाया डाली।”"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…이리 쉽게… 부서질 줄이야.",
						"english": "…To be shattered… so easily.",
						"japanese": "「…こんなにも簡単に…砕かれるとは。」",
						"chinese": "“…竟如此轻易…就被击碎了。”",
						"french": "“…Être brisé… si facilement.”",
						"spanish": "“…Ser destrozado… tan fácilmente.”",
						"vietnamese": "“…Bị phá hủy… dễ dàng đến vậy.”",
						"thai": "“…ถูกทำลาย…ง่ายดายถึงเพียงนี้”",
						"hindi": "“…इतनी आसानी से… टूट जाना।”"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "끝난 건가?",
						"english": "Is it over?",
						"japanese": "「終わったのか？」",
						"chinese": "“结束了吗？”",
						"french": "“C'est fini ?”",
						"spanish": "“¿Ha terminado?”",
						"vietnamese": "“Kết thúc rồi sao?”",
						"thai": "“จบแล้วใช่ไหม?”",
						"hindi": "“क्या यह खत्म हो गया है?”"
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
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "아니요. 그의 슬픔은… 이 세계의 일부가 되었어요.",
						"english": "No. His sorrow... has become a part of this world.",
						"japanese": "いいえ。彼の悲しみは… この世界の一部となりました。",
						"chinese": "不。他的悲伤…已成为这个世界的一部分。",
						"french": "Non. Sa tristesse… est devenue une partie de ce monde.",
						"spanish": "No. Su tristeza… se ha vuelto parte de este mundo.",
						"vietnamese": "Không. Nỗi buồn của hắn… đã trở thành một phần của thế giới này.",
						"thai": "ไม่ ความโศกเศร้าของเขา… ได้กลายเป็นส่วนหนึ่งของโลกนี้แล้ว",
						"hindi": "नहीं। उसका दुख… इस दुनिया का हिस्सा बन गया है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "겨울의 정령… 그 비극의 중심에 선 자를 찾아야만 모든 것이 끝날 거예요.",
						"english": "The Spirit of Winter... only by finding the one at the heart of that tragedy will everything end.",
						"japanese": "冬の精霊… その悲劇の中心にいる者を見つけなければ、何もかも終わりません。",
						"chinese": "冬之精灵… 只有找到那场悲剧的中心之人，一切才会结束。",
						"french": "L'Esprit de l'Hiver… Ce n'est qu'en trouvant celui qui est au cœur de cette tragédie que tout prendra fin.",
						"spanish": "El Espíritu del Invierno… Solo encontrando a quien está en el centro de esa tragedia terminará todo.",
						"vietnamese": "Tinh linh Mùa đông… Chỉ khi tìm thấy kẻ đứng ở trung tâm của bi kịch đó, mọi thứ mới kết thúc.",
						"thai": "วิญญาณแห่งฤดูหนาว… มีเพียงการค้นหาผู้ที่อยู่ใจกลางของโศกนาฏกรรมนั้น ทุกสิ่งถึงจะจบลง",
						"hindi": "सर्दी की आत्मा… उस त्रासदी के केंद्र में खड़े व्यक्ति को ढूंढने से ही सब कुछ खत्म होगा।"
					}
				},
				{
					"content": {
						"korean": "거신은 얼음처럼 부서져 내렸다. 그러나 깊어진 한기는, 끝나지 않은 비극을 알렸다.",
						"english": "The giant shattered like ice. But the deepening chill hinted at an unending tragedy.",
						"japanese": "巨神は氷のように砕け散った。しかし、深まる寒気は、終わらない悲劇を告げていた。",
						"chinese": "巨神如冰般破碎。然而，愈发深重的寒意，预示着一场未完的悲剧。",
						"french": "Le colosse s'est brisé comme de la glace. Mais le froid de plus en plus intense annonçait une tragédie sans fin.",
						"spanish": "El gigante se hizo añicos como el hielo. Pero el frío cada vez más profundo anunciaba una tragedia sin fin.",
						"vietnamese": "Gã khổng lồ vỡ tan như băng. Nhưng sự lạnh giá sâu sắc hơn lại báo hiệu một bi kịch không hồi kết.",
						"thai": "เทพยักษ์แตกสลายราวกับน้ำแข็ง แต่ความหนาวเย็นที่ลึกซึ้งยิ่งขึ้น บ่งบอกถึงโศกนาฏกรรมที่ไม่มีที่สิ้นสุด",
						"hindi": "दैत्य बर्फ की तरह टूट गया। लेकिन बढ़ती ठंड ने एक अंतहीन त्रासदी का संकेत दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
