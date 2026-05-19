export const scenario_snowy_finn_second_ordeal_01 = {
	"scenario_id": "snowy_finn_second_ordeal_01",
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
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "왕관을 잃은 핀. 설산은 깊은 혼돈에 빠졌다.",
						"english": "Finn lost the crown. The snowy mountains plunged into deep chaos.",
						"japanese": "王冠を失ったフィン。雪山は深い混沌に陥った。",
						"chinese": "芬恩失去王冠。雪山陷入深深的混乱。",
						"french": "Finn a perdu la couronne. Les montagnes enneigées ont sombré dans un profond chaos.",
						"spanish": "Finn perdió la corona. Las montañas nevadas se sumergieron en un profundo caos.",
						"vietnamese": "Finn mất vương miện. Núi tuyết chìm trong hỗn loạn sâu sắc.",
						"thai": "ฟินน์เสียมงกุฎ เทือกเขาหิมะตกอยู่ในความสับสนวุ่นวายอย่างลึกซึ้ง",
						"hindi": "फिन ने ताज खो दिया। बर्फीले पहाड़ गहरे अराजकता में डूब गए।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "핀 대공은… 대체 어디로 간 거지?",
						"english": "Grand Duke Finn... Where on earth did he go?",
						"japanese": "フィン大公は…一体どこへ行ったんだ？",
						"chinese": "芬恩大公…究竟去哪儿了？",
						"french": "Le Grand-Duc Finn... Où est-il donc passé ?",
						"spanish": "¿El Gran Duque Finn... Adónde se habrá ido?",
						"vietnamese": "Đại Công Tước Finn… Rốt cuộc đã đi đâu?",
						"thai": "แกรนด์ดยุกฟินน์... เขาหายไปไหนกันนะ?",
						"hindi": "ग्रैंड ड्यूक फिन... आखिर वह कहाँ चला गया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "조롱과 경멸 속, 핀은 더 이상 왕이 아니었다.",
						"english": "Amidst mockery and contempt, Finn was no longer king.",
						"japanese": "嘲笑と軽蔑の中、フィンはもはや王ではなかった。",
						"chinese": "在嘲讽与轻蔑中，芬恩不再是国王。",
						"french": "Au milieu des moqueries et du mépris, Finn n'était plus roi.",
						"spanish": "Entre burlas y desprecio, Finn ya no era rey.",
						"vietnamese": "Trong sự chế giễu và khinh miệt, Finn không còn là vua.",
						"thai": "ท่ามกลางการเยาะเย้ยและการดูถูก ฟินน์ไม่ใช่กษัตริย์อีกต่อไป",
						"hindi": "उपहास और घृणा के बीच, फिन अब राजा नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					]
				},
				{
					"content": {
						"korean": "도와주세요! 핀도, 설산도 위험해요.",
						"english": "Help me! Both Finn and the snowy mountains are in danger.",
						"japanese": "助けて！フィンも、雪山も危険なの。",
						"chinese": "救命！芬恩和雪山都危险了。",
						"french": "Aidez-moi ! Finn et les montagnes enneigées sont en danger.",
						"spanish": "¡Ayúdenme! Tanto Finn como las montañas nevadas están en peligro.",
						"vietnamese": "Cứu tôi với! Finn và núi tuyết đều gặp nguy hiểm.",
						"thai": "ช่วยด้วย! ทั้งฟินน์และเทือกเขาหิมะกำลังตกอยู่ในอันตราย",
						"hindi": "मेरी मदद करो! फिन और बर्फीले पहाड़ दोनों खतरे में हैं।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 일이야, 에이라?",
						"english": "What's wrong, Eira?",
						"japanese": "どうしたの、アイラ？",
						"chinese": "怎么了，艾拉？",
						"french": "Qu'y a-t-il, Eira ?",
						"spanish": "¿Qué pasa, Eira?",
						"vietnamese": "Có chuyện gì vậy, Eira?",
						"thai": "เกิดอะไรขึ้น ไอรา?",
						"hindi": "क्या हुआ, ऐरा?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "몬스터들이… 이상한 약초를 받더니 더 사나워졌어요.",
						"english": "The monsters... after taking a strange herb, they became even fiercer.",
						"japanese": "モンスターたちが…変な薬草を飲んでから、さらに凶暴になったんです。",
						"chinese": "怪物们…服用了奇怪的药草后变得更加凶猛了。",
						"french": "Les monstres... après avoir pris une étrange herbe, ils sont devenus encore plus féroces.",
						"spanish": "Los monstruos... después de tomar una extraña hierba, se volvieron aún más feroces.",
						"vietnamese": "Quái vật… sau khi dùng một loại thảo dược kỳ lạ thì trở nên hung dữ hơn.",
						"thai": "สัตว์ประหลาด... หลังจากได้รับสมุนไพรแปลก ๆ ก็ดุร้ายขึ้น",
						"hindi": "राक्षस... एक अजीब जड़ी-बूटी लेने के बाद और भी खूंखार हो गए हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "누군가 설산을 조종하려 해요.",
						"english": "Someone's trying to control the snowy mountain.",
						"japanese": "誰かが雪山を操ろうとしています。",
						"chinese": "有人想操纵雪山。",
						"french": "Quelqu'un tente de manipuler la montagne enneigée.",
						"spanish": "Alguien intenta controlar la montaña nevada.",
						"vietnamese": "Ai đó đang cố gắng điều khiển núi tuyết.",
						"thai": "มีใครบางคนกำลังพยายามควบคุมภูเขาหิมะ",
						"hindi": "कोई बर्फीले पहाड़ को नियंत्रित करने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "숲 깊은 곳에서… 이상한 콧노래 소리가 들려요.",
						"english": "From deep within the forest... I hear a strange humming.",
						"japanese": "森の奥深くから…奇妙な鼻歌が聞こえます。",
						"chinese": "森林深处…传来奇怪的哼唱声。",
						"french": "Au plus profond de la forêt… j'entends un étrange fredonnement.",
						"spanish": "Desde lo más profundo del bosque... oigo un extraño tarareo.",
						"vietnamese": "Từ sâu trong rừng… nghe thấy tiếng ngâm nga kỳ lạ.",
						"thai": "จากส่วนลึกของป่า...ได้ยินเสียงฮัมเพลงแปลกๆ",
						"hindi": "जंगल की गहराई से... एक अजीब गुनगुनाहट सुनाई देती है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "콧노래?",
						"english": "Humming?",
						"japanese": "鼻歌ですって？",
						"chinese": "哼唱声？",
						"french": "Fredonnement ?",
						"spanish": "¿Tarareo?",
						"vietnamese": "Tiếng ngâm nga?",
						"thai": "เสียงฮัมเพลง?",
						"hindi": "गुनगुनाहट?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "고대 장식물 파편도 발견됐고요. 불길한 예감이 들어요.",
						"english": "Fragments of ancient ornaments were also found. I have a bad feeling about this.",
						"japanese": "古代の装飾品の破片も見つかりました。不吉な予感がします。",
						"chinese": "还发现了古代装饰品碎片。我有一种不祥的预感。",
						"french": "Des fragments d'anciens ornements ont aussi été trouvés. J'ai un mauvais pressentiment.",
						"spanish": "También se encontraron fragmentos de adornos antiguos. Tengo un mal presentimiento.",
						"vietnamese": "Cũng tìm thấy mảnh vỡ của đồ trang sức cổ. Tôi có linh cảm chẳng lành.",
						"thai": "พบชิ้นส่วนของเครื่องประดับโบราณด้วย ฉันมีลางสังหรณ์ไม่ดี",
						"hindi": "प्राचीन गहनों के टुकड़े भी मिले हैं। मुझे एक बुरा एहसास हो रहा है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "설마, 새로운 종족이라도 나타난 건가?",
						"english": "Could it be... a new race has appeared?",
						"japanese": "まさか、新しい種族が現れたのか？",
						"chinese": "难道，是新种族出现了？",
						"french": "Serait-ce… une nouvelle race qui est apparue ?",
						"spanish": "¿Será que... ha aparecido una nueva raza?",
						"vietnamese": "Chẳng lẽ, một chủng tộc mới đã xuất hiện sao?",
						"thai": "ไม่นะ เป็นไปได้ว่าเผ่าพันธุ์ใหม่ปรากฏตัวขึ้นมาเหรอ?",
						"hindi": "कहीं, कोई नई जाति तो नहीं आ गई?"
					},
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "핀이 마법을 쓸 때마다… 얼음이 녹거나 다시 얼어붙어요.",
						"english": "Every time Finn uses magic... ice melts or refreezes.",
						"japanese": "フィンが魔法を使うたびに…氷が溶けたり、また凍りついたりするわ。",
						"chinese": "每次芬恩使用魔法…冰都会融化或重新冻结。",
						"french": "Chaque fois que Finn utilise la magie… la glace fond ou regèle.",
						"spanish": "Cada vez que Finn usa magia... el hielo se derrite o se vuelve a congelar.",
						"vietnamese": "Mỗi khi Finn dùng phép… băng tan chảy hoặc đóng băng lại.",
						"thai": "ทุกครั้งที่ฟินน์ใช้เวทมนตร์...น้ำแข็งจะละลายหรือแข็งตัวอีกครั้ง",
						"hindi": "जब भी फिन जादू का इस्तेमाल करता है... बर्फ पिघलती या फिर से जम जाती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마법이 불안정해진 건가?",
						"english": "Is the magic unstable?",
						"japanese": "魔法が不安定になったの？",
						"chinese": "魔法变得不稳定了吗？",
						"french": "La magie est-elle devenue instable ?",
						"spanish": "¿Se ha vuelto inestable la magia?",
						"vietnamese": "Phép thuật trở nên bất ổn sao?",
						"thai": "เวทมนตร์ไม่เสถียรเหรอ?",
						"hindi": "क्या जादू अस्थिर हो गया है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "핀도 괴로워해요. 힘이 통제되지 않는다고…",
						"english": "Finn is suffering too. He says his power is uncontrollable...",
						"japanese": "フィンも苦しんでるわ。力が制御できないって…",
						"chinese": "芬恩也很痛苦。他说他的力量无法控制…",
						"french": "Finn souffre aussi. Il dit que son pouvoir est incontrôlable…",
						"spanish": "Finn también está sufriendo. Dice que su poder es incontrolable...",
						"vietnamese": "Finn cũng đang đau khổ. Cậu ấy nói không thể kiểm soát sức mạnh của mình…",
						"thai": "ฟินน์ก็กำลังทรมาน เขากล่าวว่าพลังของเขาควบคุมไม่ได้...",
						"hindi": "फिन भी परेशान है। वह कहता है कि उसकी शक्ति बेकाबू है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "sad",
					"content": {
						"korean": "그의 고뇌가 숲에 영향을 주는 것 같아.",
						"english": "His torment seems to be affecting the forest.",
						"japanese": "彼の苦悩が森に影響を与えているようだ。",
						"chinese": "他的痛苦似乎正在影响着森林。",
						"french": "Sa détresse semble affecter la forêt.",
						"spanish": "Su angustia parece estar afectando el bosque.",
						"vietnamese": "Nỗi đau của cậu ấy dường như đang ảnh hưởng đến rừng.",
						"thai": "ความทุกข์ทรมานของเขาดูเหมือนจะส่งผลกระทบต่อป่า",
						"hindi": "उसका दुख जंगल को प्रभावित कर रहा है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이대로 가면… 설산은 돌이킬 수 없을 거예요.",
						"english": "If this continues... the snowy mountain will be irreversible.",
						"japanese": "このままだと…雪山は取り返しがつかなくなるでしょう。",
						"chinese": "如果这样下去…雪山将无法挽回。",
						"french": "Si cela continue… la montagne enneigée sera irréversible.",
						"spanish": "Si esto sigue así... la montaña nevada será irreversible.",
						"vietnamese": "Nếu cứ tiếp tục thế này… núi tuyết sẽ không thể cứu vãn được.",
						"thai": "ถ้าเป็นอย่างนี้ต่อไป...ภูเขาหิมะจะไม่มีทางแก้ไขได้",
						"hindi": "अगर ऐसा ही चलता रहा तो... बर्फीला पहाड़ अपरिवर्तनीय हो जाएगा।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "핀은 이 모든 걸 혼자 짊어지려 해.",
						"english": "Finn tries to bear all this alone.",
						"japanese": "フィンはこれをすべて一人で背負おうとしている。",
						"chinese": "芬恩想独自承担这一切。",
						"french": "Finn essaie de porter tout ça seul.",
						"spanish": "Finn intenta cargar con todo esto solo.",
						"vietnamese": "Finn đang cố gắng gánh vác tất cả một mình.",
						"thai": "ฟินน์พยายามแบกรับทุกสิ่งนี้ไว้คนเดียว",
						"hindi": "फिन यह सब अकेले सहने की कोशिश कर रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그는 따뜻한 곳으로 가고 싶었을 뿐인데…",
						"english": "He just wanted to go somewhere warm...",
						"japanese": "彼はただ暖かい場所に行きたかっただけなのに…",
						"chinese": "他只是想去一个温暖的地方……",
						"french": "Il voulait juste aller dans un endroit chaud...",
						"spanish": "Él solo quería ir a un lugar cálido...",
						"vietnamese": "Anh ấy chỉ muốn đến một nơi ấm áp mà thôi...",
						"thai": "เขาแค่อยากไปที่ที่อบอุ่น…",
						"hindi": "वह बस एक गर्म जगह जाना चाहता था..."
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이제 우리가 막아야 할 때야.",
						"english": "Now it's time for us to stop it.",
						"japanese": "今こそ、私たちが止める時だ。",
						"chinese": "现在是我们阻止它的时候了。",
						"french": "Il est temps que nous l'arrêtions.",
						"spanish": "Ahora es el momento de que lo detengamos.",
						"vietnamese": "Giờ là lúc chúng ta phải ngăn chặn nó.",
						"thai": "ถึงเวลาที่เราต้องหยุดมันแล้ว",
						"hindi": "अब हमें इसे रोकना होगा।"
					},
					"speaker": "character_3",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "어설픈 왕을 따르는 어리석은 것들… 절망해라.",
						"english": "Foolish followers of a clumsy king… Despair.",
						"japanese": "拙い王に従う愚か者たち… 絶望せよ。",
						"chinese": "追随蹩脚君王的愚蠢之徒……绝望吧。",
						"french": "Stupides suiveurs d'un roi maladroit… Désespérez.",
						"spanish": "Estúpidos seguidores de un rey torpe... Desesperad.",
						"vietnamese": "Những kẻ ngu xuẩn theo một vị vua vụng về… Hãy tuyệt vọng đi.",
						"thai": "พวกโง่เขลาที่ติดตามราชาที่ไร้ความสามารถ… จงสิ้นหวังซะ.",
						"hindi": "अनाड़ी राजा का अनुसरण करने वाले मूर्खों... निराश हो जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 핀을 위해서라도!",
						"english": "…It's not over yet. For Finn!",
						"japanese": "…まだ終わってない。フィンのためにも！",
						"chinese": "……还没结束。为了芬恩！",
						"french": "…Ce n'est pas encore fini. Pour Finn !",
						"spanish": "…Aún no ha terminado. ¡Por Finn!",
						"vietnamese": "…Chưa kết thúc đâu. Ngay cả vì Finn!",
						"thai": "…ยังไม่จบหรอก. เพื่อฟินน์ด้วย!",
						"hindi": "...अभी खत्म नहीं हुआ है। फ़िन के लिए भी!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "설산 깊은 곳, 거대한 그림자가 나타났다.",
						"english": "Deep within the snowy mountains, a colossal shadow appeared.",
						"japanese": "雪山の奥深く、巨大な影が現れた。",
						"chinese": "雪山深处，一个巨大的影子出现了。",
						"french": "Au plus profond des montagnes enneigées, une ombre colossale apparut.",
						"spanish": "En lo profundo de las montañas nevadas, apareció una sombra colosal.",
						"vietnamese": "Sâu trong núi tuyết, một bóng đen khổng lồ hiện ra.",
						"thai": "ลึกเข้าไปในภูเขาหิมะ เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "बर्फीले पहाड़ों की गहराई में, एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "어설픈 왕을 쫓던 필멸자들아. 너희의 설산은 내것이다.",
						"english": "Mortals who chased a clumsy king. Your snowy mountains are mine.",
						"japanese": "不器用な王を追う定命の者たちよ。お前たちの雪山は私のものだ。",
						"chinese": "追逐笨拙之王的凡人啊。你们的雪山是我的。",
						"french": "Mortels qui poursuiviez un roi maladroit. Vos montagnes enneigées sont miennes.",
						"spanish": "Mortales que perseguíais a un rey torpe. Vuestras montañas nevadas son mías.",
						"vietnamese": "Hỡi những kẻ phàm trần đuổi theo vị vua vụng về. Dãy núi tuyết của các ngươi là của ta.",
						"thai": "เหล่ามนุษย์ผู้ที่ตามล่าราชาผู้โง่เขลา ภูเขาหิมะของพวกเจ้าเป็นของข้า",
						"hindi": "नादान राजा का पीछा करने वाले मर्त्य प्राणियों। तुम्हारे बर्फीले पहाड़ मेरे हैं।"
					}
				},
				{
					"content": {
						"korean": "핀을 조롱하지 마! 설산도 네 것이 아니야!",
						"english": "Don't mock Finn! The snowy mountains aren't yours either!",
						"japanese": "フィンを嘲笑うな！雪山もお前のものじゃない！",
						"chinese": "别嘲笑芬恩！雪山也不是你的！",
						"french": "Ne te moque pas de Finn ! Les montagnes enneigées ne sont pas à toi non plus !",
						"spanish": "¡No te burles de Finn! ¡Las montañas nevadas tampoco son tuyas!",
						"vietnamese": "Đừng chế nhạo Finn! Dãy núi tuyết cũng không phải của ngươi!",
						"thai": "อย่าเยาะเย้ยฟินน์! ภูเขาหิมะก็ไม่ใช่ของแกเหมือนกัน!",
						"hindi": "फिन का मज़ाक मत उड़ाओ! बर्फीले पहाड़ भी तुम्हारे नहीं हैं!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이 시작에 불과하다… 빙하의 심장은 곧…",
						"english": "Heh heh... This is just the beginning... The heart of the glacier will soon...",
						"japanese": "クク…これは始まりに過ぎない…氷河の心臓は間もなく…",
						"chinese": "呵呵……这只是个开始……冰川之心很快就会……",
						"french": "Hahaha... Ce n'est que le début... Le cœur du glacier bientôt...",
						"spanish": "Je je... Esto es solo el principio... El corazón del glaciar pronto...",
						"vietnamese": "Khà khà... Đây chỉ là khởi đầu... Trái tim của sông băng sẽ sớm...",
						"thai": "ฮ่าๆ… นี่เป็นแค่จุดเริ่มต้น… หัวใจของธารน้ำแข็งกำลังจะ…",
						"hindi": "हाहा... यह तो बस शुरुआत है... ग्लेशियर का दिल जल्द ही..."
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 빙하의 심장을 노린다고?",
						"english": "What do you mean? You're after the heart of the glacier?",
						"japanese": "何を言っているんだ？氷河の心臓を狙っているのか？",
						"chinese": "你说什么？你盯上了冰川之心？",
						"french": "Qu'est-ce que tu racontes ? Tu vises le cœur du glacier ?",
						"spanish": "¿Qué quieres decir? ¿Estás tras el corazón del glaciar?",
						"vietnamese": "Ngươi nói gì? Ngươi đang nhắm vào trái tim của sông băng sao?",
						"thai": "หมายความว่าไง? แกเล็งหัวใจของธารน้ำแข็งงั้นเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? तुम ग्लेशियर के दिल पर निशाना साध रहे हो?"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…핀이 더 힘들어질 거예요. 설산의 위기는 끝나지 않았어요.",
						"english": "...Finn will have an even harder time. The crisis in the snowy mountains isn't over.",
						"japanese": "…フィンはもっと苦しむことになるでしょう。雪山の危機は終わっていません。",
						"chinese": "……芬恩会更辛苦的。雪山的危机还没有结束。",
						"french": "...Finn aura encore plus de mal. La crise des montagnes enneigées n'est pas terminée.",
						"spanish": "...Finn lo pasará aún peor. La crisis en las montañas nevadas no ha terminado.",
						"vietnamese": "...Finn sẽ càng khó khăn hơn. Cuộc khủng hoảng ở dãy núi tuyết vẫn chưa kết thúc.",
						"thai": "…ฟินน์จะต้องลำบากยิ่งขึ้นไปอีก วิกฤตการณ์ในภูเขาหิมะยังไม่จบลง",
						"hindi": "...फिन को और भी मुश्किल होगी। बर्फीले पहाड़ों का संकट खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핀의 고뇌는 계속됐다. 설산의 진정한 위협은 이제 시작이었다.",
						"english": "Finn's torment continued. The true threat to the snowy mountains had just begun.",
						"japanese": "フィンの苦悩は続いた。雪山の真の脅威は、今始まったばかりだった。",
						"chinese": "芬恩的苦恼仍在继续。雪山的真正威胁才刚刚开始。",
						"french": "La souffrance de Finn continuait. La véritable menace des montagnes enneigées ne faisait que commencer.",
						"spanish": "La agonía de Finn continuó. La verdadera amenaza para las montañas nevadas acababa de comenzar.",
						"vietnamese": "Nỗi khổ của Finn tiếp diễn. Mối đe dọa thực sự đối với dãy núi tuyết chỉ mới bắt đầu.",
						"thai": "ความทรมานของฟินน์ยังคงดำเนินต่อไป ภัยคุกคามที่แท้จริงต่อภูเขาหิมะเพิ่งเริ่มต้นขึ้น",
						"hindi": "फिन की पीड़ा जारी रही। बर्फीले पहाड़ों के लिए असली खतरा अब शुरू हुआ था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"왕관은 사라졌다. 대공 핀은 조롱거리가 되었다.",
			"설산은 무법지대. 몬스터들의 혼돈이 시작됐다.",
			"순수한 에이라가 느꼈다. 이 혼돈 속, 더 큰 그림자가 드리웠음을.",
			"새로운 위협 앞에서, 핀은 또 다시 고뇌에 빠진다."
		],
		"english": [
			"The crown is lost. Grand Duke Finn became a laughingstock.",
			"The snowy mountains became a lawless land. The chaos of monsters began.",
			"Pure Eira felt it. In this chaos, a greater shadow loomed.",
			"Faced with a new threat, Finn falls into torment once again."
		],
		"japanese": [
			"王冠は失われた。フィン大公は嘲笑の的となった。",
			"雪山は無法地帯。モンスターたちの混沌が始まった。",
			"純粋なアイラは感じた。この混沌の中に、より大きな影が迫っていることを。",
			"新たな脅威を前に、フィンは再び苦悩に陥る。"
		],
		"chinese": [
			"王冠失落。大公芬恩沦为笑柄。",
			"雪山沦为法外之地。怪物的混乱开始了。",
			"纯洁的艾拉感知到。在这混乱之中，更巨大的阴影笼罩而来。",
			"面对新的威胁，芬恩再次陷入苦恼。"
		],
		"french": [
			"La couronne est perdue. Le Grand-Duc Finn est devenu la risée.",
			"Les montagnes enneigées sont devenues un no man's land. Le chaos des monstres a commencé.",
			"La pure Eira le sentit. Dans ce chaos, une ombre plus grande planait.",
			"Face à une nouvelle menace, Finn retombe dans le tourment."
		],
		"spanish": [
			"La corona ha desaparecido. El Gran Duque Finn se ha convertido en el hazmerreír.",
			"Las montañas nevadas son una tierra sin ley. El caos de los monstruos ha comenzado.",
			"La pura Eira lo sintió. En este caos, una sombra mayor se cernía.",
			"Ante una nueva amenaza, Finn cae en la agonía una vez más."
		],
		"vietnamese": [
			"Vương miện đã mất. Đại Công Tước Finn trở thành trò cười.",
			"Núi tuyết trở thành vùng vô pháp. Sự hỗn loạn của quái vật đã bắt đầu.",
			"Eira trong sáng đã cảm nhận được. Trong sự hỗn loạn này, một bóng đen lớn hơn đang bao trùm.",
			"Đối mặt với mối đe dọa mới, Finn lại rơi vào đau khổ."
		],
		"thai": [
			"มงกุฎหายไปแล้ว แกรนด์ดยุกฟินน์กลายเป็นตัวตลก",
			"เทือกเขาหิมะกลายเป็นดินแดนไร้กฎหมาย ความโกลาหลของสัตว์ประหลาดได้เริ่มต้นขึ้น",
			"ไอราผู้บริสุทธิ์สัมผัสได้ว่าท่ามกลางความโกลาหลนี้ มีเงาที่ใหญ่กว่ากำลังคืบคลานเข้ามา",
			"เมื่อเผชิญหน้ากับภัยคุกคามใหม่ ฟินน์ก็ตกอยู่ในความทุกข์ระทมอีกครั้ง"
		],
		"hindi": [
			"ताज खो गया। ग्रैंड ड्यूक फिन उपहास का पात्र बन गया।",
			"बर्फीले पहाड़ अराजक हो गए। राक्षसों का तांडव शुरू हो गया।",
			"पवित्र ऐरा ने महसूस किया। इस अराजकता में, एक बड़ी छाया मंडरा रही थी।",
			"एक नए खतरे के सामने, फिन एक बार फिर पीड़ा में डूब जाता है।"
		]
	}
} as const;
