export const scenario_desert_sahar_0_04 = {
	"scenario_id": "desert_sahar_0_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
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
						"korean": "환상으로 지어진 연회장, 음식은 계속 쌓였다.",
						"english": "A banquet hall built of illusion, food piled up endlessly.",
						"japanese": "幻想で造られた宴会場、料理は積み重なり続けた。",
						"chinese": "幻象构筑的宴会厅，食物堆积如山。",
						"french": "Une salle de banquet bâtie d'illusion, la nourriture s'accumulait sans fin.",
						"spanish": "Un salón de banquetes construido con ilusión, la comida se amontonaba sin cesar.",
						"vietnamese": "Sảnh tiệc được tạo nên từ ảo ảnh, thức ăn cứ chồng chất lên.",
						"thai": "ห้องจัดเลี้ยงที่สร้างจากภาพลวงตา, อาหารกองพะเนินไม่หยุดหย่อน.",
						"hindi": "भ्रम से बना एक भोज हॉल, भोजन लगातार जमा होता गया।"
					}
				},
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "amir",
					"emotion": "happy",
					"content": {
						"korean": "이런 음식은 처음이야! 배 터지게 먹어야지.",
						"english": "I've never seen food like this! I'm going to eat until I burst!",
						"japanese": "こんな料理初めて！お腹いっぱい食べなきゃ！",
						"chinese": "从没见过这样的食物！我得吃到撑！",
						"french": "Je n'ai jamais vu une telle nourriture ! Je vais manger jusqu'à éclater !",
						"spanish": "¡Nunca había visto comida así! ¡Voy a comer hasta reventar!",
						"vietnamese": "Thức ăn thế này lần đầu thấy! Phải ăn cho no căng bụng mới được.",
						"thai": "ไม่เคยเจออาหารแบบนี้มาก่อน! จะกินให้พุงแตกเลย!",
						"hindi": "ऐसा खाना मैंने कभी नहीं देखा! मैं पेट भर के खाऊँगा जब तक पेट फट न जाए!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "아미르, 좀 천천히 먹어.",
						"english": "Amir, eat a little slower.",
						"japanese": "アミール、少しゆっくり食べなよ。",
						"chinese": "阿米尔，吃慢点。",
						"french": "Amir, mange un peu plus lentement.",
						"spanish": "Amir, come un poco más despacio.",
						"vietnamese": "Amir, ăn chậm lại một chút.",
						"thai": "อามีร์, กินช้าๆ หน่อย.",
						"hindi": "आमिर, थोड़ा धीरे खाओ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "안 돼! 사라지면 어떡해?",
						"english": "No! What if it disappears?",
						"japanese": "ダメだ！消えちゃったらどうするんだ？",
						"chinese": "不行！万一它消失了怎么办？",
						"french": "Non ! Et si ça disparaissait ?",
						"spanish": "¡No! ¿Y si desaparece?",
						"vietnamese": "Không được! Lỡ nó biến mất thì sao?",
						"thai": "ไม่ได้! ถ้ามันหายไปล่ะ?",
						"hindi": "नहीं! अगर यह गायब हो गया तो?"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "…근데, 왜 아직도 배가 고프지?",
						"english": "...But why am I still hungry?",
						"japanese": "…でも、なんでまだお腹が空いてるんだろう？",
						"chinese": "……可是，为什么我还是饿？",
						"french": "...Mais pourquoi ai-je encore faim ?",
						"spanish": "...Pero, ¿por qué sigo teniendo hambre?",
						"vietnamese": "Nhưng, tại sao mình vẫn đói bụng nhỉ?",
						"thai": "...แต่ทำไมฉันยังหิวอยู่ล่ะ?",
						"hindi": "...पर, मुझे अभी भी भूख क्यों लग रही है?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "도대체 몇 그릇을 먹은 거야? 배가 더 고픈 것 같아.",
						"english": "How many bowls have I eaten? I think I'm even hungrier now.",
						"japanese": "一体何杯食べたんだ？前よりお腹が空いてる気がする。",
						"chinese": "到底吃了多少碗啊？我好像更饿了。",
						"french": "Combien de bols j'ai mangé, bon sang ? J'ai l'impression d'avoir encore plus faim.",
						"spanish": "¿Cuántos platos he comido ya? Creo que tengo más hambre que antes.",
						"vietnamese": "Rốt cuộc đã ăn bao nhiêu bát rồi? Hình như tôi còn đói hơn nữa.",
						"thai": "นี่ฉันกินไปกี่ชามแล้วเนี่ย? ทำไมรู้สึกหิวมากกว่าเดิมอีกนะ.",
						"hindi": "मैंने कितनी कटोरी खाई हैं? मुझे लग रहा है कि अब और भी भूख लग रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "나도 목이 말라. 물을 마셔도 갈증이 해소되지 않아.",
						"english": "I'm thirsty too. Water doesn't quench my thirst.",
						"japanese": "私も喉が渇いた。水を飲んでも喉の渇きが癒えない。",
						"chinese": "我也口渴。喝水也解不了渴。",
						"french": "J'ai soif aussi. L'eau n'étanche pas ma soif.",
						"spanish": "Yo también tengo sed. El agua no me quita la sed.",
						"vietnamese": "Tôi cũng khát. Uống nước cũng không hết khát.",
						"thai": "ฉันก็หิวเหมือนกัน น้ำก็แก้กระหายไม่ได้",
						"hindi": "मुझे भी प्यास लगी है। पानी पीने से भी प्यास नहीं बुझती।"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이게 진짜 음식은 아니라는 뜻인가?",
						"english": "Does this mean it's not real food?",
						"japanese": "これが本物の食べ物じゃないってこと？",
						"chinese": "难道这不是真正的食物？",
						"french": "Ça veut dire que ce n'est pas de la vraie nourriture ?",
						"spanish": "¿Significa que esto no es comida real?",
						"vietnamese": "Điều này có nghĩa đây không phải là thức ăn thật sao?",
						"thai": "นี่หมายความว่ามันไม่ใช่ของกินจริงเหรอ?",
						"hindi": "क्या इसका मतलब यह असली खाना नहीं है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "설마. 이렇게 진짜 같은데?",
						"english": "No way. It seems so real.",
						"japanese": "まさか。こんなに本物みたいなのに？",
						"chinese": "不会吧。看起来这么真？",
						"french": "Impossible. Ça a l'air si réel.",
						"spanish": "No puede ser. Parece tan real.",
						"vietnamese": "Không thể nào. Nó trông thật vậy mà?",
						"thai": "ไม่มีทาง มันเหมือนจริงขนาดนี้เชียวเหรอ?",
						"hindi": "ऐसा नहीं हो सकता। यह इतना असली लग रहा है?"
					}
				},
				{
					"content": {
						"korean": "현실을 봐야 해. 이건 아니야.",
						"english": "You have to face reality. This isn't it.",
						"japanese": "現実を見なきゃ。これは違う。",
						"chinese": "你得面对现实。这不是真的。",
						"french": "Tu dois faire face à la réalité. Ce n'est pas ça.",
						"spanish": "Tienes que ver la realidad. Esto no es.",
						"vietnamese": "Phải đối mặt với thực tế. Đây không phải.",
						"thai": "ต้องเผชิญหน้ากับความจริง นี่ไม่ใช่",
						"hindi": "तुम्हें हकीकत का सामना करना होगा। यह सच नहीं है।"
					},
					"speaker": "amir",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "정신 차려! 환상에 빠지면 안 돼.",
						"english": "Snap out of it! Don't get lost in illusions.",
						"japanese": "目を覚まして！幻想に囚われちゃだめだ。",
						"chinese": "清醒过来！别沉迷于幻想。",
						"french": "Reprends-toi ! Ne te perds pas dans les illusions.",
						"spanish": "¡Espabila! No te dejes llevar por las ilusiones.",
						"vietnamese": "Tỉnh táo lại! Đừng đắm chìm vào ảo ảnh.",
						"thai": "ตั้งสติ! อย่าจมปลักอยู่กับภาพลวงตา",
						"hindi": "होश में आओ! भ्रम में मत पड़ो।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만 너무 달콤해. 이런 고통은 잊고 싶어.",
						"english": "But it's too sweet. I want to forget this pain.",
						"japanese": "でも、とても甘美だ。こんな苦痛は忘れてしまいたい。",
						"chinese": "但它太甜美了。我想忘记这种痛苦。",
						"french": "Mais c'est trop doux. Je veux oublier cette douleur.",
						"spanish": "Pero es demasiado dulce. Quiero olvidar este dolor.",
						"vietnamese": "Nhưng nó quá ngọt ngào. Tôi muốn quên đi nỗi đau này.",
						"thai": "แต่มันช่างหอมหวานเหลือเกิน ฉันอยากลืมความเจ็บปวดนี้",
						"hindi": "लेकिन यह बहुत मीठा है। मैं इस दर्द को भूलना चाहता हूँ।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "고통을 잊는 게 죽는 길이라면?",
						"english": "What if forgetting the pain means dying?",
						"japanese": "苦痛を忘れることが死への道だとしたら？",
						"chinese": "如果忘记痛苦就是走向死亡呢？",
						"french": "Et si oublier la douleur était la voie vers la mort ?",
						"spanish": "¿Y si olvidar el dolor es el camino a la muerte?",
						"vietnamese": "Nếu quên đi nỗi đau lại là con đường dẫn đến cái chết thì sao?",
						"thai": "ถ้าการลืมความเจ็บปวดคือหนทางสู่ความตายล่ะ?",
						"hindi": "अगर दर्द भूलना मरने का रास्ता हो तो?"
					},
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "아미르의 목소리에 메마른 기침이 섞였다.",
						"english": "Amir's voice was mixed with a dry cough.",
						"japanese": "アミールの声に、乾いた咳が混じった。",
						"chinese": "阿米尔的声音夹杂着干咳。",
						"french": "La voix d'Amir était mêlée à une toux sèche.",
						"spanish": "La voz de Amir se mezcló con una tos seca.",
						"vietnamese": "Giọng Amir lẫn vào tiếng ho khan.",
						"thai": "เสียงของอาเมียร์ปนกับเสียงไอแห้งๆ",
						"hindi": "आमिर की आवाज़ में सूखी खांसी मिल गई।"
					}
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "이대로는 안 돼. 다른 방법을 찾아야 해.",
						"english": "This won't do. We need to find another way.",
						"japanese": "このままじゃだめだ。他の方法を探さなきゃ。",
						"chinese": "这样下去不行。我们必须另寻他法。",
						"french": "Ça ne peut pas continuer comme ça. Nous devons trouver un autre moyen.",
						"spanish": "Así no podemos seguir. Tenemos que encontrar otra forma.",
						"vietnamese": "Không thể cứ thế này được. Phải tìm cách khác.",
						"thai": "เป็นแบบนี้ต่อไปไม่ได้แล้ว ต้องหาวิธีอื่น",
						"hindi": "ऐसे नहीं चलेगा। हमें दूसरा तरीका खोजना होगा।"
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
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 못 참겠어. 몸이 말라가는 기분이야.",
						"english": "I can't take it anymore. I feel like my body is drying up.",
						"japanese": "もう我慢できない。体が干からびていくようだ。",
						"chinese": "我受不了了。感觉身体要枯竭了。",
						"french": "Je n'en peux plus. J'ai l'impression que mon corps se dessèche.",
						"spanish": "No puedo más. Siento que mi cuerpo se está secando.",
						"vietnamese": "Tôi không thể chịu đựng thêm nữa. Cảm giác như cơ thể đang khô héo.",
						"thai": "ฉันทนไม่ไหวแล้ว รู้สึกเหมือนร่างกายกำลังจะเหือดแห้ง",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। मुझे लग रहा है कि मेरा शरीर सूख रहा है।"
					},
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상이 깨지고 있어… 끔찍해.",
						"english": "The illusion is breaking... it's terrible.",
						"japanese": "幻想が壊れていく… 恐ろしい。",
						"chinese": "幻象正在破碎… 太可怕了。",
						"french": "L'illusion se brise... c'est horrible.",
						"spanish": "La ilusión se rompe... es terrible.",
						"vietnamese": "Ảo ảnh đang vỡ vụn… thật kinh khủng.",
						"thai": "ภาพลวงตากำลังแตกสลาย... น่าสะพรึงกลัว",
						"hindi": "भ्रम टूट रहा है... यह भयानक है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "연회장의 구석, 먼지가 쌓인 공간에서 빛이 새어 나왔다.",
						"english": "Light seeped from a dusty corner of the banquet hall.",
						"japanese": "宴会場の隅、埃積もる空間から光が漏れ出した。",
						"chinese": "光芒从宴会厅角落一个布满灰尘的空间里透了出来。",
						"french": "Une lumière s'échappait d'un coin poussiéreux de la salle de banquet.",
						"spanish": "La luz se filtraba de un rincón polvoriento del salón de banquetes.",
						"vietnamese": "Ánh sáng rò rỉ ra từ một góc phủ bụi của sảnh tiệc.",
						"thai": "แสงเล็ดลอดออกมาจากมุมห้องจัดเลี้ยงที่เต็มไปด้วยฝุ่น",
						"hindi": "भोज कक्ष के एक धूल भरे कोने से प्रकाश रिसने लगा।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "이게 뭐야? 오래된 유물 같은데.",
						"english": "What is this? It looks like an ancient relic.",
						"japanese": "これは何だ？ 古い遺物みたいだ。",
						"chinese": "这是什么？看起来像个古老的遗物。",
						"french": "Qu'est-ce que c'est ? On dirait une ancienne relique.",
						"spanish": "¿Qué es esto? Parece una reliquia antigua.",
						"vietnamese": "Đây là gì? Trông như một di vật cổ xưa.",
						"thai": "นี่อะไรน่ะ? เหมือนโบราณวัตถุเลย",
						"hindi": "यह क्या है? यह एक प्राचीन अवशेष जैसा दिखता है।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "여기 새겨진 문양… 전에 본 적 없어?",
						"english": "This symbol carved here... Haven't you seen it before?",
						"japanese": "ここに刻まれた模様… 前に見たことないか？",
						"chinese": "这里刻着的图案… 你以前没见过吗？",
						"french": "Ce symbole gravé ici... Tu ne l'as jamais vu avant ?",
						"spanish": "Este símbolo grabado aquí... ¿No lo habías visto antes?",
						"vietnamese": "Hoa văn khắc ở đây… cậu chưa từng thấy trước đây sao?",
						"thai": "ลวดลายที่สลักไว้ที่นี่... ไม่เคยเห็นมาก่อนเหรอ?",
						"hindi": "यहाँ उकेरा गया यह प्रतीक... क्या तुमने इसे पहले नहीं देखा है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사하르의 것이 아닌 것 같아. 이 공간은… 뭐지?",
						"english": "It doesn't seem to belong to Sahar. What is this place...?",
						"japanese": "サハルのものじゃないみたいだ。この空間は…何だ？",
						"chinese": "这似乎不属于萨哈尔。这个空间… 是什么？",
						"french": "Ça ne semble pas appartenir à Sahar. Cet endroit... qu'est-ce que c'est ?",
						"spanish": "No parece ser de Sahar. Este lugar... ¿qué es?",
						"vietnamese": "Có vẻ không phải của Sahar. Không gian này… là gì?",
						"thai": "ดูไม่เหมือนของซาฮาร์เลย สถานที่แห่งนี้...คืออะไร?",
						"hindi": "यह सहार का नहीं लगता। यह जगह... क्या है?"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "사하르가 숨긴 진실이 있는 게 분명해.",
						"english": "There must be a truth Sahar has hidden.",
						"japanese": "サハルが隠した真実があるに違いない。",
						"chinese": "萨哈尔一定隐藏着某个真相。",
						"french": "Il doit y avoir une vérité que Sahar a cachée.",
						"spanish": "Debe haber una verdad que Sahar ha ocultado.",
						"vietnamese": "Chắc chắn có một sự thật mà Sahar đã giấu kín.",
						"thai": "ต้องมีบางความจริงที่ซาฮาร์ซ่อนไว้แน่ๆ",
						"hindi": "सहार ने ज़रूर कोई सच्चाई छुपाई है।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 영원히 헤매다 사라져라.",
						"english": "Foolish beings. Wander eternally and vanish.",
						"japanese": "愚かな者たちめ。永遠に彷徨い消え失せろ。",
						"chinese": "愚蠢的东西。永远迷失然后消失吧。",
						"french": "Créatures insensées. Errez éternellement et disparaissez.",
						"spanish": "Criaturas insensatas. ¡Vaguen eternamente y desaparezcan!",
						"vietnamese": "Những kẻ ngu ngốc. Hãy lang thang mãi mãi rồi biến mất đi.",
						"thai": "พวกโง่เขลา เอ๋ย จงร่อนเร่ไปชั่วนิรันดร์แล้วหายไปซะ",
						"hindi": "मूर्ख प्राणी। अनंत काल तक भटकते रहो और गायब हो जाओ।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "amir",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "…아직 안 끝났어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Vẫn chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी ख़त्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "다시… 다시 할 수 있어.",
						"english": "Again... I can do it again.",
						"japanese": "もう一度…もう一度できる。",
						"chinese": "再来…我能再做一次。",
						"french": "Encore... Je peux le faire encore.",
						"spanish": "Otra vez... Puedo hacerlo otra vez.",
						"vietnamese": "Lại một lần nữa... Ta có thể làm lại.",
						"thai": "อีกครั้ง... ข้าทำได้อีกครั้ง",
						"hindi": "फिर से... मैं फिर से कर सकता हूँ।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "연회장의 가장 깊은 곳. 텅 빈 공간에 거대한 그림자가 드리웠다.",
						"english": "The deepest part of the banquet hall. A colossal shadow loomed in the empty space.",
						"japanese": "宴会場の最深部。がらんとした空間に巨大な影が差していた。",
						"chinese": "宴会厅的最深处。一个巨大的影子笼罩在空荡荡的空间里。",
						"french": "Le plus profond de la salle de banquet. Une ombre colossale planait dans l'espace vide.",
						"spanish": "La parte más profunda del salón de banquetes. Una sombra colosal se cernía en el espacio vacío.",
						"vietnamese": "Nơi sâu nhất của sảnh tiệc. Một cái bóng khổng lồ bao trùm không gian trống rỗng.",
						"thai": "ส่วนที่ลึกที่สุดของห้องจัดเลี้ยง เงาขนาดมหึมาทอดยาวในพื้นที่ว่างเปล่า",
						"hindi": "भोज कक्ष का सबसे गहरा भाग। खाली जगह में एक विशाल छाया मंडरा रही थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "아직도 만족하지 못했는가? 너희의 탐욕은 끝이 없군.",
						"english": "Still not satisfied? Your greed knows no bounds.",
						"japanese": "まだ満足しないのか？ お前たちの貪欲には際限がないな。",
						"chinese": "还不满足吗？你们的贪婪真是永无止境。",
						"french": "Toujours pas satisfaits ? Votre avidité n'a pas de limites.",
						"spanish": "¿Todavía no estáis satisfechos? Vuestra codicia no tiene límites.",
						"vietnamese": "Vẫn chưa thỏa mãn sao? Lòng tham của các ngươi thật vô đáy.",
						"thai": "ยังไม่พอใจอีกหรือ? ความโลภของพวกเจ้าไม่มีที่สิ้นสุดจริงๆ",
						"hindi": "क्या तुम अब भी संतुष्ट नहीं हो? तुम्हारी लालच की कोई सीमा नहीं है।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "amir",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "탐욕? 네가 만든 가짜 만족이 문제다!",
						"english": "Greed? Your fake satisfaction is the problem!",
						"japanese": "貪欲だと？ お前が作った偽りの満足が問題だ！",
						"chinese": "贪婪？你制造的虚假满足才是问题！",
						"french": "L'avidité ? C'est ta fausse satisfaction qui est le problème !",
						"spanish": "¿Codicia? ¡Tu falsa satisfacción es el problema!",
						"vietnamese": "Tham lam? Sự thỏa mãn giả tạo mà ngươi tạo ra mới là vấn đề!",
						"thai": "ความโลภงั้นเหรอ? ความพึงพอใจจอมปลอมที่เจ้าสร้างขึ้นต่างหากคือปัญหา!",
						"hindi": "लालच? तुम्हारी बनाई हुई झूठी संतुष्टि ही समस्या है!"
					},
					"speaker": "amir",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "현실의 고통보다 달콤한 환상이 더 나은 법. 너희는 그저 허상에 불과해.",
						"english": "A sweet illusion is better than the pain of reality. You are nothing but phantoms.",
						"japanese": "現実の苦痛よりも甘い幻想の方がましだ。お前たちはただの虚像に過ぎない。",
						"chinese": "甜蜜的幻象总比现实的痛苦更好。你们不过是虚影罢了。",
						"french": "Une douce illusion est préférable à la douleur de la réalité. Vous n'êtes que des chimères.",
						"spanish": "Una dulce ilusión es mejor que el dolor de la realidad. Vosotros no sois más que fantasmas.",
						"vietnamese": "Ảo ảnh ngọt ngào tốt hơn nỗi đau của thực tại. Các ngươi chỉ là những hình bóng hão huyền.",
						"thai": "ภาพลวงตาอันหอมหวานย่อมดีกว่าความเจ็บปวดของความเป็นจริง พวกเจ้าก็เป็นแค่ภาพลวงตาเท่านั้น",
						"hindi": "वास्तविकता के दर्द से बेहतर एक मीठा भ्रम है। तुम सब बस एक भ्रम हो।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "허상이 아니야. 우리가 진짜야!",
						"english": "Not an illusion. We are real!",
						"japanese": "幻じゃない。私たちが本物だ！",
						"chinese": "不是幻象。我们是真的！",
						"french": "Pas une illusion. Nous sommes réels !",
						"spanish": "No es una ilusión. ¡Somos reales!",
						"vietnamese": "Không phải ảo ảnh. Chúng ta là thật!",
						"thai": "ไม่ใช่ภาพลวงตา เราคือของจริง!",
						"hindi": "यह कोई भ्रम नहीं है। हम असली हैं!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크크… 부숴봤자 소용없다. 너희의 허기는… 영원할 테니.",
						"english": "Heh heh... Destroying me is useless. Your hunger... will be eternal.",
						"japanese": "クク…壊しても無駄だ。お前たちの飢えは…永遠に続くのだからな。",
						"chinese": "呵呵…摧毁我也没用。你们的饥饿…将是永恒的。",
						"french": "Hé hé... Me détruire est inutile. Votre faim... sera éternelle.",
						"spanish": "Je je... Destruirme es inútil. Vuestro hambre... será eterno.",
						"vietnamese": "Khà khà... Phá hủy ta vô ích thôi. Cơn đói của các ngươi... sẽ là vĩnh cửu.",
						"thai": "ฮิฮิ... ทำลายข้าไปก็ไร้ประโยชน์ ความหิวของพวกเจ้า... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "हँ हँ... मुझे नष्ट करना बेकार है। तुम्हारी भूख... शाश्वत रहेगी।"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. 여기서 끝낼 거야.",
						"english": "No. I'll end it here.",
						"japanese": "いや。ここで終わらせる。",
						"chinese": "不。我会在这里结束。",
						"french": "Non. J'en finirai ici.",
						"spanish": "No. Lo terminaré aquí.",
						"vietnamese": "Không. Ta sẽ kết thúc nó ở đây.",
						"thai": "ไม่ ข้าจะจบมันที่นี่",
						"hindi": "नहीं। मैं इसे यहीं ख़त्म करूँगा।"
					},
					"emotion": "angry",
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환상의 그림자가 사라졌다. 텅 빈 공간에, 메마른 모래 바람만 불었다.",
						"english": "The phantom's shadow vanished. In the empty space, only dry sand winds blew.",
						"japanese": "幻影の影が消えた。空っぽの空間には、乾いた砂嵐だけが吹いていた。",
						"chinese": "幻象的阴影消失了。在空荡荡的空间里，只有干燥的沙风吹拂。",
						"french": "L'ombre de l'illusion disparut. Dans l'espace vide, seul un vent de sable sec soufflait.",
						"spanish": "La sombra de la ilusión se desvaneció. En el espacio vacío, solo soplaba un viento de arena seca.",
						"vietnamese": "Bóng tối ảo ảnh biến mất. Trong không gian trống rỗng, chỉ còn cơn gió cát khô khan thổi qua.",
						"thai": "เงามายาได้หายไป ในพื้นที่ว่างเปล่า มีเพียงลมทรายที่แห้งแล้งพัดผ่าน",
						"hindi": "भ्रम की छाया गायब हो गई। खाली जगह में, केवल सूखी रेत की हवाएँ चल रही थीं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사하르의 이야기는, 이제부터 시작이었다.",
						"english": "Sahar's story, it was just beginning.",
						"japanese": "サハルの物語は、これから始まったばかりだった。",
						"chinese": "萨哈尔的故事，才刚刚开始。",
						"french": "L'histoire de Sahar, elle ne faisait que commencer.",
						"spanish": "La historia de Sahar, apenas comenzaba.",
						"vietnamese": "Câu chuyện của Sahar, giờ mới bắt đầu.",
						"thai": "เรื่องราวของซาฮาร์ เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "सहर की कहानी, अब शुरू हुई थी।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막, 끝나지 않는 연회.",
			"눈앞의 진수성찬은 허기를 채우지 못했다.",
			"이 달콤한 환상은, 우리를 죽이고 있었다.",
			"깨어나야 한다. 이 메마른 만족에서."
		],
		"english": [
			"Endless desert, never-ending feast.",
			"The grand feast before us couldn't sate our hunger.",
			"This sweet illusion was killing us.",
			"We must awaken from this parched satisfaction."
		],
		"japanese": [
			"終わりのない砂漠、終わらない宴。",
			"目の前の豪華なご馳走は、空腹を満たせなかった。",
			"この甘い幻想は、私たちを蝕んでいた。",
			"目覚めなければ。この乾いた満足から。"
		],
		"chinese": [
			"无尽的沙漠，永无止境的宴会。",
			"眼前的盛宴未能满足我们的饥饿。",
			"这甜蜜的幻象，正在杀死我们。",
			"必须醒来。从这枯燥的满足中。"
		],
		"french": [
			"Désert sans fin, festin interminable.",
			"Le somptueux festin sous nos yeux ne put apaiser notre faim.",
			"Cette douce illusion nous tuait.",
			"Nous devons nous éveiller. De cette satisfaction aride."
		],
		"spanish": [
			"Desierto interminable, banquete sin fin.",
			"El opulento banquete ante nuestros ojos no pudo saciar nuestra hambre.",
			"Esta dulce ilusión nos estaba matando.",
			"Debemos despertar. De esta satisfacción marchita."
		],
		"vietnamese": [
			"Sa mạc vô tận, yến tiệc không ngừng.",
			"Bữa tiệc thịnh soạn trước mắt không thể lấp đầy cơn đói.",
			"Ảo ảnh ngọt ngào này đang giết chết chúng ta.",
			"Phải tỉnh dậy. Từ sự thỏa mãn khô cằn này."
		],
		"thai": [
			"ทะเลทรายไร้จุดสิ้นสุด, งานเลี้ยงที่ไม่สิ้นสุด.",
			"อาหารเลิศรสตรงหน้า ไม่อาจคลายความหิวได้เลย.",
			"ภาพลวงตาอันหอมหวานนี้ กำลังฆ่าเรา.",
			"เราต้องตื่นจากความพึงพอใจที่แห้งผากนี้."
		],
		"hindi": [
			"अंतहीन रेगिस्तान, न खत्म होने वाली दावत।",
			"सामने की भव्य दावत हमारी भूख नहीं मिटा सकी।",
			"यह मीठा भ्रम हमें मार रहा था।",
			"हमें इस सूखी संतुष्टि से जागना होगा।"
		]
	}
} as const;
