export const scenario_snowy_anya_54_04 = {
	"scenario_id": "snowy_anya_54_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"어둠 속, 한 줄기 작은 빛이 일렁였다.",
			"그 빛은 누군가를 기다리는 듯했다.",
			"길을 잃은 자, 집으로 돌아갈 수 있을까.",
			"인도자의 발걸음이, 그 물음에 답하려 했다."
		],
		"english": [
			"In the darkness, a small light flickered.",
			"The light seemed to await someone.",
			"Can the lost one ever return home?",
			"The guide's footsteps sought to answer that question."
		],
		"japanese": [
			"闇の中、一条の小さな光が揺らめいた。",
			"その光は、誰かを待っているかのようだった。",
			"道に迷いし者、家へ帰ることはできるのか。",
			"導き手の足音が、その問いに答えようとしていた。"
		],
		"chinese": [
			"黑暗中，一束微光闪烁。",
			"那光芒仿佛在等待着某人。",
			"迷途之人，能否回到家园？",
			"引路人的脚步，试图回答那个问题。"
		],
		"french": [
			"Dans l'obscurité, une petite lumière vacillait.",
			"Cette lumière semblait attendre quelqu'un.",
			"L'égaré pourra-t-il retrouver le chemin de sa maison ?",
			"Les pas du guide tentaient de répondre à cette question."
		],
		"spanish": [
			"En la oscuridad, una pequeña luz parpadeó.",
			"Esa luz parecía esperar a alguien.",
			"¿Podrá el extraviado regresar a casa?",
			"Los pasos del guía intentaron responder a esa pregunta."
		],
		"vietnamese": [
			"Trong bóng tối, một đốm sáng nhỏ nhấp nháy.",
			"Ánh sáng ấy dường như đang đợi chờ ai đó.",
			"Kẻ lạc lối liệu có thể trở về nhà không?",
			"Bước chân của người dẫn lối, như muốn trả lời câu hỏi đó."
		],
		"thai": [
			"ในความมืด มีแสงเล็กๆ ริบหรี่",
			"แสงนั้นดูเหมือนจะกำลังรอใครบางคนอยู่",
			"ผู้หลงทาง จะกลับบ้านได้หรือไม่",
			"รอยเท้าของผู้นำทาง พยายามจะตอบคำถามนั้น"
		],
		"hindi": [
			"अंधेरे में, एक छोटी सी रोशनी झिलमिला उठी。",
			"वह रोशनी किसी का इंतज़ार कर रही थी।",
			"क्या भटका हुआ घर लौट पाएगा?",
			"पथप्रदर्शक के कदमों ने उस सवाल का जवाब देने की कोशिश की।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "동행단이 작은 빛 곁에 앉았다. 온기가 느껴졌다.",
						"english": "The companions sat by the small light. Warmth enveloped them.",
						"japanese": "一行は小さな光のそばに座った。温かさが感じられた。",
						"chinese": "同行者们坐在微光旁，感受到了温暖。",
						"french": "Les compagnons s'assirent près de la petite lumière. Une chaleur les enveloppa.",
						"spanish": "Los compañeros se sentaron junto a la pequeña luz. Se sintió calidez.",
						"vietnamese": "Đoàn người ngồi cạnh đốm sáng nhỏ. Cảm nhận được hơi ấm.",
						"thai": "คณะเดินทางนั่งลงข้างแสงเล็กๆ รู้สึกถึงความอบอุ่น",
						"hindi": "साथी छोटी रोशनी के पास बैठ गए। गर्माहट महसूस हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 빛… 정말 안야인가?",
						"english": "This light... is it truly Anya?",
						"japanese": "この光…本当にアンヤなのか？",
						"chinese": "这光芒……真的是安雅吗？",
						"french": "Cette lumière... est-ce vraiment Anya ?",
						"spanish": "Esta luz... ¿es realmente Anya?",
						"vietnamese": "Ánh sáng này... thật sự là Anya sao?",
						"thai": "แสงนี้... เป็นอันยาจริงๆ หรือ?",
						"hindi": "यह रोशनी... क्या सच में अन्या है?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "길 잃은 이는… 집을 알려주면 돌아갈 수 있습니다.",
						"english": "The lost one... can return if shown the way home.",
						"japanese": "道に迷いし者は…家を教えてやれば帰ることができます。",
						"chinese": "迷途之人……只要告知归路，便能回家。",
						"french": "L'égaré... peut rentrer si on lui montre le chemin de la maison.",
						"spanish": "El extraviado... puede regresar si se le muestra el camino a casa.",
						"vietnamese": "Kẻ lạc lối... có thể trở về nếu được chỉ đường về nhà.",
						"thai": "ผู้หลงทาง... สามารถกลับบ้านได้ หากมีผู้บอกทาง",
						"hindi": "भटका हुआ... अगर उसे घर का रास्ता बताया जाए तो वह लौट सकता है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "집으로…?",
						"english": "Home...?",
						"japanese": "家へ…？",
						"chinese": "回家……？",
						"french": "À la maison... ?",
						"spanish": "¿A casa...?",
						"vietnamese": "Về nhà...?",
						"thai": "บ้าน...?",
						"hindi": "घर...?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "그들이 돌아갈 곳, 기다리는 이가 있다면.",
						"english": "If they have a place to return to, and someone waiting.",
						"japanese": "彼らが帰る場所、待つ者がいるのなら。",
						"chinese": "如果他们有归属，有等待之人。",
						"french": "S'ils ont un endroit où retourner, et quelqu'un qui les attend.",
						"spanish": "Si tienen un lugar al que regresar, y alguien esperando.",
						"vietnamese": "Nếu họ có nơi để trở về, và có người đang đợi chờ.",
						"thai": "ถ้าพวกเขามีที่ที่จะกลับไป และมีใครบางคนรออยู่",
						"hindi": "अगर उनके पास लौटने की जगह है, और कोई इंतज़ार कर रहा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "기다림은 때로… 더 깊은 어둠이 되기도 합니다.",
						"english": "Sometimes, waiting... can become a deeper darkness.",
						"japanese": "待つことは時として…より深い闇となることもあります。",
						"chinese": "等待有时……也会变成更深的黑暗。",
						"french": "L'attente devient parfois... une obscurité plus profonde.",
						"spanish": "La espera a veces... puede convertirse en una oscuridad más profunda.",
						"vietnamese": "Đợi chờ đôi khi... cũng có thể trở thành một bóng tối sâu thẳm hơn.",
						"thai": "บางครั้ง การรอคอย... อาจกลายเป็นความมืดที่ลึกยิ่งขึ้น",
						"hindi": "कभी-कभी इंतज़ार... एक गहरा अंधेरा भी बन जाता है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 뜻이죠?",
						"english": "What do you mean?",
						"japanese": "どういう意味ですか？",
						"chinese": "这是什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quiere decir?",
						"vietnamese": "Ý anh/chị là gì?",
						"thai": "หมายความว่าอย่างไรครับ/คะ?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"content": {
						"korean": "오지 않을 것을 기다리는 것… 그것만큼 잔인한 것도 없죠.",
						"english": "Waiting for what will never come... there's nothing more cruel.",
						"japanese": "来ないものを待つこと…それほど残酷なことはありません。",
						"chinese": "等待永不降临的事物……没有什么比这更残忍了。",
						"french": "Attendre ce qui ne viendra jamais... il n'y a rien de plus cruel.",
						"spanish": "Esperar lo que nunca llegará... no hay nada más cruel.",
						"vietnamese": "Chờ đợi điều không bao giờ đến... không gì tàn nhẫn hơn.",
						"thai": "การรอคอยสิ่งที่จะไม่มีวันมาถึง... ไม่มีอะไรโหดร้ายไปกว่านี้แล้ว",
						"hindi": "उसका इंतजार करना जो कभी नहीं आएगा... इससे क्रूर और कुछ नहीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼… 어떻게 해야 해요?",
						"english": "Then... what should I do?",
						"japanese": "では…どうすればいいですか？",
						"chinese": "那么……我该怎么做？",
						"french": "Alors... que dois-je faire ?",
						"spanish": "Entonces... ¿qué debo hacer?",
						"vietnamese": "Vậy... tôi phải làm gì?",
						"thai": "แล้ว... ฉันควรทำอย่างไร?",
						"hindi": "तो फिर... मुझे क्या करना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "기다리게 두는 게 친절은 아닙니다.",
						"english": "Letting them wait is not kindness.",
						"japanese": "待たせることは、優しさではありません。",
						"chinese": "让他们等待并非仁慈。",
						"french": "Les laisser attendre n'est pas de la gentillesse.",
						"spanish": "Hacerlos esperar no es amabilidad.",
						"vietnamese": "Để họ chờ đợi không phải là sự tử tế.",
						"thai": "การปล่อยให้รอคอยไม่ใช่ความเมตตา",
						"hindi": "उन्हें इंतज़ार कराना दयालुता नहीं है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…",
						"english": "...",
						"japanese": "…",
						"chinese": "…",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "때론… 보내주는 게 인도하는 것이죠.",
						"english": "Sometimes... letting go is guiding.",
						"japanese": "時には…手放すことが導きとなるのです。",
						"chinese": "有时……放手才是指引。",
						"french": "Parfois... laisser partir, c'est guider.",
						"spanish": "A veces... dejar ir es guiar.",
						"vietnamese": "Đôi khi... buông bỏ lại là sự dẫn lối.",
						"thai": "บางครั้ง... การปล่อยไปคือการนำทาง",
						"hindi": "कभी-कभी... जाने देना ही राह दिखाना है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "보내주는 것…",
						"english": "Letting go...",
						"japanese": "手放すこと…",
						"chinese": "放手……",
						"french": "Laisser partir...",
						"spanish": "Dejar ir...",
						"vietnamese": "Buông bỏ...",
						"thai": "การปล่อยไป...",
						"hindi": "जाने देना..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그것이 진정한 길잡이의 역할일지도 모릅니다.",
						"english": "That might be the role of a true guide.",
						"japanese": "それが真の道標の役割なのかもしれません。",
						"chinese": "那或许才是真正向导的职责。",
						"french": "C'est peut-être le rôle d'un véritable guide.",
						"spanish": "Esa podría ser la función de un verdadero guía.",
						"vietnamese": "Đó có thể là vai trò của một người dẫn đường thực thụ.",
						"thai": "นั่นอาจเป็นบทบาทของผู้นำทางที่แท้จริง",
						"hindi": "शायद यही एक सच्चे मार्गदर्शक की भूमिका है।"
					},
					"speaker": "bran",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 빛도… 누군가를 기다리고 있습니다.",
						"english": "This light, too... is waiting for someone.",
						"japanese": "この光も…誰かを待っています。",
						"chinese": "这道光……也在等待某人。",
						"french": "Cette lumière aussi... attend quelqu'un.",
						"spanish": "Esta luz también... está esperando a alguien.",
						"vietnamese": "Ánh sáng này cũng... đang chờ đợi ai đó.",
						"thai": "แสงนี้ก็... กำลังรอคอยใครบางคน",
						"hindi": "यह रोशनी भी... किसी का इंतज़ार कर रही है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "저희가… 길을 알려줄 수 있을까요?",
						"english": "Can we... show them the way?",
						"japanese": "私たちが…道を教えてあげられるでしょうか？",
						"chinese": "我们能……指引方向吗？",
						"french": "Pourrions-nous... leur montrer le chemin ?",
						"spanish": "¿Podríamos... indicarles el camino?",
						"vietnamese": "Chúng ta có thể... chỉ đường cho họ không?",
						"thai": "พวกเรา... จะชี้ทางให้ได้ไหม?",
						"hindi": "क्या हम... उन्हें रास्ता दिखा सकते हैं?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "길은… 잃는 자에게도, 인도하는 자에게도 쉽지 않습니다.",
						"english": "The path... is not easy for those who are lost, nor for those who guide.",
						"japanese": "道は…迷いし者にも、導く者にも、容易ではありません。",
						"chinese": "这条路…对迷失者和引导者而言，都不容易。",
						"french": "Le chemin... n'est facile ni pour ceux qui sont perdus, ni pour ceux qui guident.",
						"spanish": "El camino... no es fácil ni para los que están perdidos, ni para los que guían.",
						"vietnamese": "Con đường... không dễ dàng cho cả người lạc lối lẫn người dẫn đường.",
						"thai": "หนทาง... ไม่ง่ายสำหรับผู้หลงทาง และผู้ชี้นำ",
						"hindi": "मार्ग... खोने वाले के लिए भी और मार्गदर्शक के लिए भी आसान नहीं है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도… 가야 해요.",
						"english": "Still... we must go.",
						"japanese": "それでも…行かねばなりません。",
						"chinese": "即使如此…我们也要走。",
						"french": "Pourtant... nous devons y aller.",
						"spanish": "Aun así... debemos ir.",
						"vietnamese": "Dù vậy... chúng ta phải đi.",
						"thai": "ถึงอย่างนั้น... เราก็ต้องไป",
						"hindi": "फिर भी... हमें जाना होगा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "…그래야죠. 잃어버린 것을 찾아서.",
						"english": "...We must. To find what was lost.",
						"japanese": "…そうですね。失くしたものを探しに。",
						"chinese": "…没错。为了找回失去之物。",
						"french": "...C'est cela. Pour retrouver ce qui a été perdu.",
						"spanish": "...Así es. Para encontrar lo que se perdió.",
						"vietnamese": "…Đúng vậy. Để tìm lại những gì đã mất.",
						"thai": "...นั่นแหละ เพื่อตามหาสิ่งที่หายไป",
						"hindi": "...हाँ, बिल्कुल। जो खो गया है उसे पाने के लिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "작은 빛이 한 발짝… 셋을 따라오는 듯 멈췄다.",
						"english": "A small light took a step... and stopped as if following the three.",
						"japanese": "小さな光が一歩… 三人を追うように止まった。",
						"chinese": "一束微光迈出一步… 仿佛跟着三人停了下来。",
						"french": "Une petite lumière fit un pas... et s'arrêta comme si elle suivait les trois.",
						"spanish": "Una pequeña luz dio un paso... y se detuvo como si siguiera a los tres.",
						"vietnamese": "Một đốm sáng nhỏ bước một bước... rồi dừng lại như thể đang theo sau ba người.",
						"thai": "แสงเล็กๆ ก้าวหนึ่ง... หยุดลงราวกับตามสามคนมา",
						"hindi": "एक छोटी सी रोशनी ने एक कदम उठाया... और तीनों का पीछा करते हुए रुक गई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 희망을 집어삼켰다.",
						"english": "A colossal shadow devoured all hope.",
						"japanese": "巨大な影がすべての希望を飲み込んだ。",
						"chinese": "一个巨大的影子吞噬了所有希望。",
						"french": "Une ombre colossale dévora tout espoir.",
						"spanish": "Una sombra colosal devoró toda esperanza.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi hy vọng.",
						"thai": "เงายักษ์กลืนกินความหวังทั้งหมด",
						"hindi": "एक विशाल परछाई ने सारी उम्मीदें निगल लीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…아직 포기 못 해.",
						"english": "...Can't give up yet.",
						"japanese": "…まだ諦められない。",
						"chinese": "...还不能放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Aún no puedo rendirme.",
						"vietnamese": "...Chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...अभी हार नहीं मान सकता।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어둠 속에서… 영원히 길을 잃어라.",
						"english": "In the darkness... be lost forever.",
						"japanese": "闇の中で…永遠に道を失え。",
						"chinese": "在黑暗中…永远迷失吧。",
						"french": "Dans l'obscurité... perdez-vous à jamais.",
						"spanish": "En la oscuridad... piérdete para siempre.",
						"vietnamese": "Trong bóng tối... hãy lạc lối mãi mãi.",
						"thai": "ในความมืด... จงหลงทางตลอดไป",
						"hindi": "अंधेरे में... हमेशा के लिए खो जाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "…다시 일어서야 합니다. 길은 아직 끝나지 않았어.",
						"english": "...You must rise again. The path isn't over yet.",
						"japanese": "…再び立ち上がらねばならない。道はまだ終わっていない。",
						"chinese": "...必须再次站起来。路还没有结束。",
						"french": "...Vous devez vous relever. Le chemin n'est pas encore terminé.",
						"spanish": "...Debes levantarte de nuevo. El camino aún no ha terminado.",
						"vietnamese": "...Phải đứng dậy một lần nữa. Con đường vẫn chưa kết thúc.",
						"thai": "...ต้องลุกขึ้นอีกครั้ง ทางยังไม่สิ้นสุด",
						"hindi": "...आपको फिर से उठना होगा। रास्ता अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 그림자가 어둠 속으로 스러졌다.",
						"english": "An unknown shadow faded into darkness.",
						"japanese": "正体不明の影が闇に消えた。",
						"chinese": "一个不明的影子消失在黑暗中。",
						"french": "Une ombre inconnue s'est évanouie dans l'obscurité.",
						"spanish": "Una sombra desconocida se desvaneció en la oscuridad.",
						"vietnamese": "Một bóng tối không rõ danh tính chìm vào bóng đêm.",
						"thai": "เงาปริศนาจางหายไปในความมืดมิด",
						"hindi": "एक अज्ञात परछाई अँधेरे में विलीन हो गई।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "길을 찾으셨군요.",
						"english": "You've found the way.",
						"japanese": "道を見つけましたね。",
						"chinese": "你找到路了。",
						"french": "Vous avez trouvé le chemin.",
						"spanish": "Has encontrado el camino.",
						"vietnamese": "Bạn đã tìm thấy con đường.",
						"thai": "คุณเจอทางแล้ว",
						"hindi": "आपने रास्ता ढूंढ लिया।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…하지만 아직 멀었어요. 안야는….",
						"english": "...But it's not over yet. Anya is...",
						"japanese": "…しかし、まだ遠い。アーニャは…。",
						"chinese": "…但还有很长的路要走。安雅是……",
						"french": "...Mais ce n'est pas encore fini. Anya est...",
						"spanish": "...Pero aún falta mucho. Anya está...",
						"vietnamese": "...Nhưng vẫn còn xa lắm. Anya thì...",
						"thai": "...แต่ยังอีกไกล อันย่าคือ...",
						"hindi": "...पर अभी बहुत दूर है। अन्या तो..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래도… 한 걸음은 내딛었으니.",
						"english": "Still... you've taken one step forward.",
						"japanese": "それでも…一歩は踏み出したのだから。",
						"chinese": "但至少…你迈出了一步。",
						"french": "Pourtant... vous avez fait un pas.",
						"spanish": "Aun así... has dado un paso.",
						"vietnamese": "Dù sao... bạn cũng đã bước một bước.",
						"thai": "ถึงกระนั้น... คุณก็ได้ก้าวไปข้างหน้าแล้วหนึ่งก้าว",
						"hindi": "फिर भी... आपने एक कदम आगे बढ़ा दिया है।"
					},
					"speaker": "bran",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛은 여전히 일렁였다. 길을 아는 자의 인도를 기다리는 것처럼.",
						"english": "The light still flickered, as if awaiting guidance from one who knows the way.",
						"japanese": "光はまだ揺らめいていた。道を知る者の導きを待つかのように。",
						"chinese": "光芒仍在闪烁。仿佛在等待知路者的指引。",
						"french": "La lumière scintillait toujours, comme si elle attendait les conseils de celui qui connaît le chemin.",
						"spanish": "La luz aún parpadeaba, como si esperara la guía de alguien que conoce el camino.",
						"vietnamese": "Ánh sáng vẫn lung linh, như thể đang chờ sự dẫn lối của người biết đường.",
						"thai": "แสงยังคงริบหรี่ ราวกับรอการนำทางจากผู้รู้หนทาง",
						"hindi": "प्रकाश अभी भी टिमटिमा रहा था, मानो रास्ता जानने वाले के मार्गदर्शन का इंतज़ार कर रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "길의 끝. 거대한 그림자가 앞을 가로막았다.",
						"english": "The end of the path. A colossal shadow blocked the way.",
						"japanese": "道の終わり。巨大な影が道を阻んだ。",
						"chinese": "路的尽头。一个巨大的影子挡住了去路。",
						"french": "Le bout du chemin. Une ombre colossale bloquait le passage.",
						"spanish": "El fin del camino. Una sombra colosal bloqueaba el paso.",
						"vietnamese": "Cuối con đường. Một bóng đen khổng lồ chặn lối.",
						"thai": "สุดปลายทาง. เงาขนาดยักษ์ขวางหน้า",
						"hindi": "मार्ग का अंत। एक विशाल छाया ने रास्ता रोक लिया।"
					}
				},
				{
					"content": {
						"korean": "이 빛은… 아무도 찾지 않아.",
						"english": "This light... no one seeks it.",
						"japanese": "この光は…誰も求めていない。",
						"chinese": "这道光…无人寻找。",
						"french": "Cette lumière... personne ne la cherche.",
						"spanish": "Esta luz... nadie la busca.",
						"vietnamese": "Ánh sáng này... chẳng ai tìm kiếm.",
						"thai": "แสงนี้... ไม่มีใครตามหา",
						"hindi": "इस प्रकाश को... कोई नहीं खोजता।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "비켜! 우리가 길을 알려줄 거야.",
						"english": "Move! We'll show you the way.",
						"japanese": "退け！私たちが道を教えてやる。",
						"chinese": "让开！我们会指引道路。",
						"french": "Pousse-toi ! Nous allons te montrer le chemin.",
						"spanish": "¡Muévete! Te mostraremos el camino.",
						"vietnamese": "Tránh ra! Chúng tôi sẽ chỉ đường cho ngươi.",
						"thai": "หลีกไป! เราจะบอกทางให้เอง",
						"hindi": "हटो! हम तुम्हें रास्ता दिखाएंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "길 잃은 자는… 영원히 헤매야 마땅하다.",
						"english": "The lost... deserve to wander forever.",
						"japanese": "迷いし者は…永遠に彷徨うべきだ。",
						"chinese": "迷失之人…理应永远徘徊。",
						"french": "Ceux qui sont perdus... méritent d'errer pour toujours.",
						"spanish": "Los perdidos... merecen vagar eternamente.",
						"vietnamese": "Kẻ lạc lối... xứng đáng lang thang mãi mãi.",
						"thai": "ผู้หลงทาง... สมควรที่จะร่อนเร่อยู่ชั่วนิรันดร์",
						"hindi": "खोने वाले... हमेशा भटकते रहना चाहिए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "아닙니다. 모든 길 잃은 이에게는… 돌아갈 집이 있습니다.",
						"english": "No. Every lost soul... has a home to return to.",
						"japanese": "違います。全ての迷いし者には…帰る家があります。",
						"chinese": "不对。所有迷失之人…都有一个家可以回去。",
						"french": "Non. Chaque âme perdue... a un foyer où retourner.",
						"spanish": "No. Toda alma perdida... tiene un hogar al que regresar.",
						"vietnamese": "Không phải vậy. Mọi kẻ lạc lối... đều có một mái nhà để trở về.",
						"thai": "ไม่ใช่. ผู้หลงทางทุกคน... มีบ้านให้กลับ",
						"hindi": "नहीं। हर खोने वाले के लिए... एक घर है जहाँ वह लौट सकता है।"
					},
					"type": "speech",
					"speaker": "bran",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석은… 믿음.",
						"english": "Foolish... faith.",
						"japanese": "愚かな…信念。",
						"chinese": "愚蠢的…信念。",
						"french": "Stupide... foi.",
						"spanish": "Estúpida... fe.",
						"vietnamese": "Niềm tin... ngớ ngẩn.",
						"thai": "ความเชื่อ... ที่โง่เขลา",
						"hindi": "मूर्खतापूर्ण... विश्वास।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
