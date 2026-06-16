export const scenario_snowy_finn_90_01 = {
	"scenario_id": "snowy_finn_90_01",
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
					"content": {
						"korean": "시리즈의 끝. 설산 정상의 너른 빙판에 탐험대가 다다른다.",
						"english": "The series concludes. The expedition team reaches the vast ice field at the snowy mountain's summit.",
						"japanese": "シリーズの終幕。雪山の頂にある広大な氷原に探検隊が辿り着く。",
						"chinese": "系列终章。探险队抵达雪山顶峰的广阔冰面。",
						"french": "Fin de la série. L'équipe d'expédition atteint la vaste étendue de glace au sommet de la montagne enneigée.",
						"spanish": "Fin de la serie. La expedición llega a la vasta extensión de hielo en la cumbre de la montaña nevada.",
						"vietnamese": "Kết thúc series. Đoàn thám hiểm đến cánh đồng băng rộng lớn trên đỉnh núi tuyết.",
						"thai": "บทสรุปของซีรีส์ ทีมสำรวจเดินทางมาถึงลานน้ำแข็งกว้างใหญ่บนยอดเขาสูงที่ปกคลุมด้วยหิมะ",
						"hindi": "श्रृंखला का अंत। अभियान दल बर्फीले पहाड़ की चोटी पर विशाल बर्फ के मैदान में पहुँचता है।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "거대한 왕좌도, 낡은 카드보드 팻말도 없이 {random_boss}가 홀로 서 있다.",
						"english": "Without a grand throne or a worn cardboard sign, {random_boss} stands alone.",
						"japanese": "巨大な玉座も、古びた段ボールの看板もなく、{random_boss}が独り立っている。",
						"chinese": "没有巨大的王座，也没有破旧的纸板招牌，{random_boss}独自站立。",
						"french": "Sans trône majestueux ni panneau en carton usé, {random_boss} se tient seul.",
						"spanish": "Sin un gran trono ni un cartel de cartón gastado, {random_boss} permanece solo.",
						"vietnamese": "Không có ngai vàng hùng vĩ hay bảng hiệu bìa cứng cũ kỹ, {random_boss} đứng một mình.",
						"thai": "ไม่มีบัลลังก์อันโอ่อ่าหรือป้ายกระดาษแข็งเก่าๆ {random_boss} ยืนอยู่โดดเดี่ยว",
						"hindi": "न तो कोई भव्य सिंहासन, न ही कोई पुराना गत्ता का बोर्ड, {random_boss} अकेला खड़ा है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아무것도 없어. 진짜 혼자야?",
						"english": "...There's nothing. Is he really alone?",
						"japanese": "…何もない。本当に一人なのか？",
						"chinese": "……什么都没有。他真的一个人吗？",
						"french": "...Il n'y a rien. Est-il vraiment seul ?",
						"spanish": "...No hay nada. ¿Está realmente solo?",
						"vietnamese": "...Không có gì cả. Anh ấy thật sự một mình sao?",
						"thai": "...ไม่มีอะไรเลย เขาอยู่คนเดียวจริงๆ หรือเปล่า?",
						"hindi": "...कुछ भी नहीं है। क्या वह सचमुच अकेला है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…기록해야 해. 그의 진짜 이야기를.",
						"english": "...I must record it. His true story.",
						"japanese": "…記録しなくては。彼の本当の物語を。",
						"chinese": "……我必须记录下来。他的真实故事。",
						"french": "...Je dois l'enregistrer. Sa véritable histoire.",
						"spanish": "...Debo registrarlo. Su verdadera historia.",
						"vietnamese": "...Tôi phải ghi lại. Câu chuyện thật sự của anh ấy.",
						"thai": "...ต้องบันทึกไว้ เรื่องราวที่แท้จริงของเขา",
						"hindi": "...मुझे इसे दर्ज करना होगा। उसकी सच्ची कहानी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "에이라? 여긴 또 어떻게…",
						"english": "Eira? How did you get here...?",
						"japanese": "エイラ？一体どうやってここに…",
						"chinese": "艾拉？你怎么又来了这里……",
						"french": "Eira ? Comment es-tu arrivée ici... ?",
						"spanish": "¿Eira? ¿Cómo llegaste aquí...?",
						"vietnamese": "Eira? Sao cô lại ở đây...?",
						"thai": "เอรา? มาที่นี่ได้ยังไงอีก...?",
						"hindi": "ऐरा? तुम यहाँ फिर कैसे...?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그는 무서운 왕이 아니었어. 그저 길 잃은 추위쟁이 펭귄.",
						"english": "He wasn't a terrifying king. Just a lost, cold penguin.",
						"japanese": "彼は恐ろしい王ではなかった。ただの、寒がりで迷子になったペンギン。",
						"chinese": "他不是什么可怕的国王。只是一个迷路又怕冷的企鹅。",
						"french": "Ce n'était pas un roi terrifiant. Juste un pingouin perdu et frileux.",
						"spanish": "No era un rey aterrador. Solo un pingüino perdido y friolero.",
						"vietnamese": "Anh ta không phải là một vị vua đáng sợ. Chỉ là một chú chim cánh cụt lạc lối, sợ lạnh.",
						"thai": "เขาไม่ใช่ราชาที่น่ากลัว เขาเป็นแค่เพนกวินขี้หนาวที่หลงทาง",
						"hindi": "वह कोई डरावना राजा नहीं था। बस एक खोया हुआ, ठंड लगने वाला पेंगुइन था।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그의 모든 위엄은… 사실 추위를 가리기 위한 장치였을 뿐.",
						"english": "All his majesty... was merely a device to hide the cold.",
						"japanese": "彼の威厳のすべては… 実は寒さを隠すための仕掛けに過ぎなかった。",
						"chinese": "他所有的威严……其实只是为了掩盖寒冷而设的装置。",
						"french": "Toute sa majesté... n'était en fait qu'un stratagème pour masquer le froid.",
						"spanish": "Toda su majestuosidad... era en realidad solo un artilugio para ocultar el frío.",
						"vietnamese": "Tất cả sự uy nghi của hắn... thực ra chỉ là một mánh khóe để che giấu cái lạnh.",
						"thai": "ความสง่างามทั้งหมดของเขา... แท้จริงแล้วเป็นเพียงกลไกเพื่อซ่อนความหนาวเย็น",
						"hindi": "उसकी सारी महिमा... वास्तव में ठंड को छिपाने का एक साधन मात्र थी।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "추위를 가리기 위해서…?",
						"english": "To hide the cold...?",
						"japanese": "寒さを隠すために…？",
						"chinese": "为了掩盖寒冷……？",
						"french": "Pour masquer le froid...?",
						"spanish": "¿Para ocultar el frío...?",
						"vietnamese": "Để che giấu cái lạnh...?",
						"thai": "เพื่อซ่อนความหนาวเย็น...?",
						"hindi": "ठंड को छिपाने के लिए...?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 빙판 위에서, 그저 친구가 필요했을 뿐인데.",
						"english": "On the frozen ice, he just needed a friend.",
						"japanese": "凍てつく氷の上で、ただ友が必要だっただけなのに。",
						"chinese": "在结冰的冰面上，他只是需要一个朋友。",
						"french": "Sur la glace gelée, il avait juste besoin d'un ami.",
						"spanish": "Sobre el hielo congelado, solo necesitaba un amigo.",
						"vietnamese": "Trên tảng băng đóng băng, hắn chỉ cần một người bạn.",
						"thai": "บนแผ่นน้ำแข็งที่เยือกแข็ง เขาแค่ต้องการเพื่อน",
						"hindi": "जमी हुई बर्फ पर, उसे बस एक दोस्त की ज़रूरत थी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "우리는 너무 늦게 알았다.",
						"english": "We found out too late.",
						"japanese": "私たちは遅すぎた。",
						"chinese": "我们知道得太晚了。",
						"french": "Nous l'avons découvert trop tard.",
						"spanish": "Lo descubrimos demasiado tarde.",
						"vietnamese": "Chúng ta đã biết quá muộn.",
						"thai": "เราเพิ่งรู้ตัวก็สายไปแล้ว",
						"hindi": "हमें बहुत देर से पता चला।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그는 스스로 왕이라 믿었지만, 실상은 아무도 모르게 추위에 떨었어.",
						"english": "He believed himself a king, but in reality, he shivered in the cold without anyone knowing.",
						"japanese": "彼は自分を王だと信じていたが、実際は誰にも知られず寒さに震えていた。",
						"chinese": "他自以为是王，但实际上，他却在无人知晓的情况下，独自在寒冷中颤抖。",
						"french": "Il se croyait roi, mais en réalité, il tremblait de froid sans que personne ne le sache.",
						"spanish": "Se creía rey, pero en realidad, temblaba de frío sin que nadie lo supiera.",
						"vietnamese": "Hắn tự cho mình là vua, nhưng thực ra, hắn đã run rẩy trong cái lạnh mà không ai biết.",
						"thai": "เขาเชื่อว่าตัวเองเป็นราชา แต่ในความเป็นจริง เขากลับสั่นสะท้านในความหนาวโดยไม่มีใครรู้",
						"hindi": "वह खुद को राजा मानता था, लेकिन असल में वह किसी को बताए बिना ठंड में कांप रहा था।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 싸워야 할 상대는… 그저 외로운 펭귄이었네.",
						"english": "The opponent we had to fight... was just a lonely penguin.",
						"japanese": "私たちが戦うべき相手は… ただの孤独なペンギンだったんだ。",
						"chinese": "我们要对抗的对手……只是一只孤独的企鹅。",
						"french": "L'adversaire que nous devions affronter... n'était qu'un pingouin solitaire.",
						"spanish": "El oponente al que teníamos que enfrentarnos... era solo un pingüino solitario.",
						"vietnamese": "Đối thủ mà chúng ta phải chiến đấu... chỉ là một chú chim cánh cụt cô đơn.",
						"thai": "คู่ต่อสู้ที่เราต้องต่อสู้... เป็นแค่เพนกวินที่โดดเดี่ยว",
						"hindi": "हमारा प्रतिद्वंद्वी... बस एक अकेला पेंग्विन था।"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "그를 똑바로 기록하고, 끝까지 잊지 않는 것이 나의 역할.",
						"english": "My role is to record him accurately and never forget him.",
						"japanese": "彼を正確に記録し、最後まで忘れないことが私の役割だ。",
						"chinese": "准确地记录他，并永远不忘记他，这是我的职责。",
						"french": "Mon rôle est de le consigner fidèlement et de ne jamais l'oublier.",
						"spanish": "Mi papel es registrarlo fielmente y no olvidarlo nunca.",
						"vietnamese": "Vai trò của tôi là ghi chép chính xác về hắn và không bao giờ quên hắn.",
						"thai": "บทบาทของฉันคือการบันทึกเรื่องราวของเขาอย่างถูกต้องและไม่ลืมเขาจนกว่าจะถึงที่สุด",
						"hindi": "उसे ठीक से रिकॉर्ड करना और अंत तक उसे न भूलना ही मेरी भूमिका है।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 그가 마지막 필살기를 준비하고 있어.",
						"english": "He's preparing his final ultimate move now.",
						"japanese": "さあ、彼が最後の必殺技を準備している。",
						"chinese": "他正在准备最后的绝招。",
						"french": "Il prépare maintenant son ultime technique.",
						"spanish": "Ahora está preparando su movimiento final.",
						"vietnamese": "Hắn đang chuẩn bị chiêu cuối cùng của mình.",
						"thai": "ตอนนี้เขากำลังเตรียมท่าไม้ตายสุดท้าย",
						"hindi": "अब वह अपनी अंतिम घातक चाल तैयार कर रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "온 힘을 다해서…?",
						"english": "With all his might...?",
						"japanese": "全力で…？",
						"chinese": "用尽全力……？",
						"french": "De toutes ses forces...?",
						"spanish": "¿Con todas sus fuerzas...?",
						"vietnamese": "Với tất cả sức mạnh của hắn...?",
						"thai": "ด้วยสุดกำลัง...?",
						"hindi": "अपनी पूरी ताकत से...?"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "그래. 처음이자 마지막으로. 그게 그가 할 수 있는 전부.",
						"english": "Yes. For the first and last time. That's all he can do.",
						"japanese": "そうだ。最初で最後だ。それが彼にできる全てだ。",
						"chinese": "是的。第一次也是最后一次。那是他所能做的一切。",
						"french": "Oui. Pour la première et dernière fois. C'est tout ce qu'il peut faire.",
						"spanish": "Sí. Por primera y última vez. Eso es todo lo que puede hacer.",
						"vietnamese": "Đúng vậy. Lần đầu tiên và cũng là lần cuối cùng. Đó là tất cả những gì hắn có thể làm.",
						"thai": "ใช่ เป็นครั้งแรกและครั้งสุดท้าย นั่นคือทั้งหมดที่เขาทำได้",
						"hindi": "हाँ। पहली और आखिरी बार। बस इतना ही वह कर सकता है।"
					}
				},
				{
					"content": {
						"korean": "우리는… 어떻게 해야 하지.",
						"english": "What should we do...?",
						"japanese": "我々はどうすれば…",
						"chinese": "我们…该怎么办？",
						"french": "Que devons-nous faire… ?",
						"spanish": "¿Qué debemos hacer…?",
						"vietnamese": "Chúng ta… phải làm gì đây?",
						"thai": "เรา…ควรทำอย่างไรดี",
						"hindi": "हमें… क्या करना चाहिए।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "진심으로 마주해 줘야 해. 그의 서툰 청을.",
						"english": "We must face his clumsy plea with sincerity.",
						"japanese": "彼の不器用な願いに、真摯に向き合ってあげて。",
						"chinese": "必须真诚地面对他笨拙的请求。",
						"french": "Nous devons faire face à sa demande maladroite avec sincérité.",
						"spanish": "Debemos enfrentar su torpe súplica con sinceridad.",
						"vietnamese": "Phải đối mặt với lời thỉnh cầu vụng về của anh ấy bằng cả tấm lòng.",
						"thai": "เราต้องเผชิญหน้ากับคำขอร้องที่เงอะงะของเขาด้วยความจริงใจ",
						"hindi": "हमें उसकी अनाड़ी विनती का ईमानदारी से सामना करना होगा।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…따뜻해. 이렇게… 끝나는 건가.",
						"english": "...It's warm. Is this… how it ends?",
						"japanese": "…温かい。こうして…終わるのか。",
						"chinese": "…好温暖。就这样…结束了吗？",
						"french": "…C'est chaud. Est-ce ainsi… que ça se termine ?",
						"spanish": "…Qué cálido. ¿Así… es como termina?",
						"vietnamese": "…Thật ấm áp. Liệu có phải… kết thúc như thế này không.",
						"thai": "…อบอุ่นจัง อย่างนี้…ก็จบแล้วสินะ",
						"hindi": "…यह गर्म है। क्या यह… ऐसे ही खत्म होता है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그는 그저… 온기가 필요했던 거야.",
						"english": "He simply… needed warmth.",
						"japanese": "彼はただ…温もりが欲しかったんだ。",
						"chinese": "他只是…需要温暖。",
						"french": "Il avait juste… besoin de chaleur.",
						"spanish": "Él solo… necesitaba calor.",
						"vietnamese": "Anh ấy chỉ… cần sự ấm áp thôi.",
						"thai": "เขาเพียงแค่…ต้องการความอบอุ่นเท่านั้น",
						"hindi": "उसे बस… गर्मी चाहिए थी।"
					}
				},
				{
					"content": {
						"korean": "길 잃었던 추위쟁이 왕의 이야기는 따뜻한 결말을 맞았다.",
						"english": "The story of the lost, cold king found a warm ending.",
						"japanese": "道に迷った寒がりな王の物語は、温かい結末を迎えた。",
						"chinese": "迷失的寒冷之王的故事，迎来了温暖的结局。",
						"french": "L'histoire du roi frileux et égaré a trouvé une fin chaleureuse.",
						"spanish": "La historia del rey friolero y perdido tuvo un final cálido.",
						"vietnamese": "Câu chuyện về vị vua lạc lối, khao khát hơi ấm đã có một kết cục ấm áp.",
						"thai": "เรื่องราวของราชาขี้หนาวผู้หลงทาง ได้พบกับตอนจบที่อบอุ่น",
						"hindi": "खोए हुए, ठंडे राजा की कहानी का गर्मजोशी भरा अंत हुआ।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그러나 탐험대의 여정은 아직 끝나지 않았다.",
						"english": "But the expedition's journey is not over yet.",
						"japanese": "しかし、探検隊の旅はまだ終わっていなかった。",
						"chinese": "然而，探险队的旅程尚未结束。",
						"french": "Cependant, le voyage de l'expédition n'est pas encore terminé.",
						"spanish": "Sin embargo, el viaje de la expedición aún no ha terminado.",
						"vietnamese": "Tuy nhiên, hành trình của đoàn thám hiểm vẫn chưa kết thúc.",
						"thai": "อย่างไรก็ตาม การเดินทางของคณะสำรวจยังไม่สิ้นสุดลง",
						"hindi": "हालांकि, अभियान की यात्रा अभी समाप्त नहीं हुई है।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 빙판이 모든 것을 삼켰다.",
						"english": "The cold ice swallowed everything.",
						"japanese": "冷たい氷がすべてを飲み込んだ。",
						"chinese": "冰冷的浮冰吞噬了一切。",
						"french": "La glace froide a tout englouti.",
						"spanish": "El hielo frío lo engulló todo.",
						"vietnamese": "Băng giá lạnh lẽo đã nuốt chửng mọi thứ.",
						"thai": "แผ่นน้ำแข็งอันหนาวเหน็บได้กลืนกินทุกสิ่ง",
						"hindi": "ठंडी बर्फ़ ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…아직, 나의 이야기는 끝나지 않았다.",
						"english": "...My story is not over yet.",
						"japanese": "…まだ、私の物語は終わっていない。",
						"chinese": "……我的故事，尚未结束。",
						"french": "...Pourtant, mon histoire n'est pas encore finie.",
						"spanish": "Aún así, mi historia no ha terminado.",
						"vietnamese": "...Tuy nhiên, câu chuyện của tôi vẫn chưa kết thúc.",
						"thai": "...ทว่า เรื่องราวของฉันยังไม่จบลง",
						"hindi": "मेरी कहानी अभी ख़त्म नहीं हुई है।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다시 돌아올게. 이번엔… 그의 진심을 이해할 수 있도록.",
						"english": "I'll be back. This time... to understand his true feelings.",
						"japanese": "また戻ってくる。今度こそ…彼の真意を理解するために。",
						"chinese": "我会再回来的。这一次……是为了理解他的真心。",
						"french": "Je reviendrai. Cette fois… pour comprendre ses véritables sentiments.",
						"spanish": "Volveré. Esta vez… para entender sus verdaderos sentimientos.",
						"vietnamese": "Tôi sẽ trở lại. Lần này... để thấu hiểu tấm lòng của anh ấy.",
						"thai": "ฉันจะกลับมาอีกครั้ง ครั้งนี้... เพื่อที่จะเข้าใจความรู้สึกที่แท้จริงของเขา",
						"hindi": "मैं वापस आऊँगा। इस बार... उसके सच्चे इरादों को समझने के लिए।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "…왔구나. 나의 영역에.",
						"english": "...You've come. To my domain.",
						"japanese": "…来たな。我が領域に。",
						"chinese": "…你来了。来到我的领域。",
						"french": "…Tu es venu. Dans mon domaine.",
						"spanish": "…Has llegado. A mi dominio.",
						"vietnamese": "…Ngươi đã đến. Vào lãnh địa của ta.",
						"thai": "…มาแล้วสินะ สู่แดนของข้า",
						"hindi": "…तुम आ गए। मेरे क्षेत्र में।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이곳이… 나의 마지막 무대다.",
						"english": "This is… my final stage.",
						"japanese": "ここが…俺の最後の舞台だ。",
						"chinese": "这里…是我的最后舞台。",
						"french": "C'est… ma dernière scène.",
						"spanish": "Este es… mi último escenario.",
						"vietnamese": "Đây… là sân khấu cuối cùng của ta.",
						"thai": "ที่นี่…คือเวทีสุดท้ายของข้า",
						"hindi": "यह… मेरा अंतिम मंच है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그의 눈빛이… 차가워.",
						"english": "His eyes… are cold.",
						"japanese": "彼の眼差しが…冷たい。",
						"chinese": "他的眼神…很冰冷。",
						"french": "Son regard… est froid.",
						"spanish": "Su mirada… es fría.",
						"vietnamese": "Ánh mắt của anh ấy… thật lạnh lẽo.",
						"thai": "แววตาของเขา…ช่างเย็นชา",
						"hindi": "उसकी आँखें… ठंडी हैं।"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "그의 마지막 진심. 외면하지 마.",
						"english": "His final sincerity. Don't turn away.",
						"japanese": "彼の最後の真心を。目を背けないで。",
						"chinese": "他最后的真心。别置之不理。",
						"french": "Sa sincérité finale. Ne te détourne pas.",
						"spanish": "Su última sinceridad. No le des la espalda.",
						"vietnamese": "Chân thành cuối cùng của anh ấy. Đừng quay lưng lại.",
						"thai": "ความจริงใจสุดท้ายของเขา อย่าหันหลังให้",
						"hindi": "उसकी आखिरी सच्चाई। मुँह मत मोड़ो।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…응. 피하지 않을게.",
						"english": "...Yes. I won't avoid it.",
						"japanese": "…うん。逃げないよ。",
						"chinese": "…嗯。我不会逃避的。",
						"french": "…Oui. Je ne l'éviterai pas.",
						"spanish": "…Sí. No lo evitaré.",
						"vietnamese": "…Ừm. Tôi sẽ không trốn tránh.",
						"thai": "…อืม ฉันจะไม่หลีกเลี่ยง",
						"hindi": "…हाँ। मैं इससे बचूंगा नहीं।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시리즈의 끝. 가장 높은 설산 정상에 다다랐다.",
			"너른 빙판 위, 옥좌도 팻말도 없이 홀로 선 펭귄.",
			"그는 마지막으로, 온 힘을 다해 필살기를 준비한다.",
			"이제 길 잃은 왕의 이야기는 마지막 장을 향한다."
		],
		"english": [
			"The series concludes. Reached the summit of the highest snowy mountain.",
			"On the vast ice, a penguin stands alone, without a throne or signpost.",
			"For the last time, he prepares his ultimate skill with all his might.",
			"Now, the story of the lost king heads towards its final chapter."
		],
		"japanese": [
			"シリーズの終幕。最も高い雪山の頂上に辿り着いた。",
			"広大な氷の上、玉座も看板もなく、ただ独り立つペンギン。",
			"彼は最後に、全力を尽くして必殺技を準備する。",
			"さあ、迷える王の物語は最終章へ向かう。"
		],
		"chinese": [
			"系列终章。已抵达最高雪山的顶峰。",
			"广阔冰面上，企鹅独自站立，无王座亦无标牌。",
			"他最后一次，倾尽全力准备必杀技。",
			"如今，迷失之王的故事走向最终章。"
		],
		"french": [
			"Fin de la série. Le sommet de la plus haute montagne enneigée a été atteint.",
			"Sur la vaste étendue de glace, un pingouin se tient seul, sans trône ni panneau.",
			"Pour la dernière fois, il prépare son attaque ultime de toutes ses forces.",
			"Désormais, l'histoire du roi égaré approche de son chapitre final."
		],
		"spanish": [
			"Fin de la serie. Se ha llegado a la cumbre de la montaña nevada más alta.",
			"En la vasta extensión de hielo, un pingüino se yergue solo, sin trono ni señal.",
			"Por última vez, prepara su habilidad definitiva con todas sus fuerzas.",
			"Ahora, la historia del rey perdido se dirige a su capítulo final."
		],
		"vietnamese": [
			"Kết thúc series. Đã đến đỉnh núi tuyết cao nhất.",
			"Trên cánh đồng băng rộng lớn, một chú chim cánh cụt đứng một mình, không ngai vàng cũng không bảng hiệu.",
			"Lần cuối cùng, anh dốc toàn lực chuẩn bị chiêu cuối.",
			"Giờ đây, câu chuyện về vị vua lạc lối đang hướng tới chương cuối."
		],
		"thai": [
			"บทสรุปของซีรีส์ ได้เดินทางมาถึงยอดเขาสูงสุดที่ปกคลุมด้วยหิมะแล้ว",
			"บนลานน้ำแข็งอันกว้างใหญ่ เพนกวินยืนอยู่โดดเดี่ยว ไม่มีทั้งบัลลังก์และป้าย",
			"เป็นครั้งสุดท้ายที่เขาเตรียมท่าไม้ตายสุดกำลัง",
			"บัดนี้ เรื่องราวของราชาผู้พลัดหลงกำลังมุ่งหน้าสู่บทสุดท้าย"
		],
		"hindi": [
			"श्रृंखला का अंत। सबसे ऊंचे बर्फीले पहाड़ की चोटी पर पहुंच गया।",
			"विशाल बर्फीले मैदान पर, एक अकेला पेंगुइन खड़ा है, न कोई सिंहासन न कोई संकेत।",
			"वह आखिरी बार, अपनी पूरी ताकत से अंतिम कौशल की तैयारी करता है।",
			"अब, खोए हुए राजा की कहानी अपने अंतिम अध्याय की ओर बढ़ रही है।"
		]
	}
} as const;
