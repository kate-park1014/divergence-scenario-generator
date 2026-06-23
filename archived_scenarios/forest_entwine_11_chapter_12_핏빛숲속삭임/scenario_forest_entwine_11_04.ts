export const scenario_forest_entwine_11_04 = {
	"scenario_id": "forest_entwine_11_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
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
					"content": {
						"korean": "숲은 더 이상 평온한 녹색이 아니었다. 그림자가 길게 드리워졌다.",
						"english": "The forest was no longer a peaceful green. Shadows stretched long.",
						"japanese": "森はもはや穏やかな緑ではなかった。影が長く伸びていた。",
						"chinese": "森林不再是宁静的绿色。阴影拉得很长。",
						"french": "La forêt n'était plus d'un vert paisible. Les ombres s'étiraient longuement.",
						"spanish": "El bosque ya no era un verde pacífico. Las sombras se alargaban.",
						"vietnamese": "Khu rừng không còn xanh yên bình nữa. Bóng tối kéo dài.",
						"thai": "ป่าไม่เขียวสงบอีกต่อไปแล้ว เงาทอดตัวยาว",
						"hindi": "जंगल अब शांत हरा नहीं था। परछाइयाँ लंबी खिंच गई थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲이 더 음산해졌어.",
						"english": "The forest grew eerier.",
						"japanese": "森がさらに不気味になった。",
						"chinese": "森林变得更阴森了。",
						"french": "La forêt devenait plus sinistre.",
						"spanish": "El bosque se volvió más espeluznante.",
						"vietnamese": "Khu rừng trở nên rùng rợn hơn.",
						"thai": "ป่าดูน่าขนลุกยิ่งขึ้น",
						"hindi": "जंगल और भयानक हो गया।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "glen",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "glen",
					"content": {
						"korean": "저쪽이야! 익숙한 목소리가 날 불렀어.",
						"english": "Over there! A familiar voice called to me.",
						"japanese": "あっちだ！聞き覚えのある声が私を呼んだ。",
						"chinese": "在那边！一个熟悉的声音叫我。",
						"french": "Par là ! Une voix familière m'a appelé.",
						"spanish": "¡Por ahí! Una voz familiar me llamó.",
						"vietnamese": "Đằng kia! Một giọng nói quen thuộc gọi tôi.",
						"thai": "ตรงนั้น! เสียงที่คุ้นเคยเรียกฉัน",
						"hindi": "वहाँ! एक जानी-पहचानी आवाज़ ने मुझे बुलाया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "글렌, 잠시만. 뭔가 이상해.",
						"english": "Glen, wait a moment. Something's off.",
						"japanese": "グレン、ちょっと待って。何かおかしい。",
						"chinese": "格伦，等一下。有些不对劲。",
						"french": "Glen, attends un instant. Il y a quelque chose d'étrange.",
						"spanish": "Glen, espera un momento. Algo anda mal.",
						"vietnamese": "Glen, chờ một chút. Có gì đó không ổn.",
						"thai": "เกล็น รอเดี๋ยว มีบางอย่างผิดปกติ",
						"hindi": "ग्लेन, ज़रा रुको। कुछ गड़बड़ है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 확실해. 그들이 우릴 기다리고 있어.",
						"english": "No, I'm sure. They're waiting for us.",
						"japanese": "いや、間違いない。彼らが私たちを待っている。",
						"chinese": "不，我很确定。他们在等我们。",
						"french": "Non, j'en suis sûr. Ils nous attendent.",
						"spanish": "No, estoy seguro. Nos están esperando.",
						"vietnamese": "Không, tôi chắc chắn. Họ đang đợi chúng ta.",
						"thai": "ไม่ ฉันแน่ใจ พวกเขากำลังรอเราอยู่",
						"hindi": "नहीं, मुझे यकीन है। वे हमारा इंतज़ार कर रहे हैं।"
					},
					"emotion": "base",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글렌의 눈빛은 이미 다른 곳에 있었다.",
						"english": "Glen's gaze was already elsewhere.",
						"japanese": "グレンの視線はすでに別の場所にあった。",
						"chinese": "格伦的目光已经转向别处。",
						"french": "Le regard de Glen était déjà ailleurs.",
						"spanish": "La mirada de Glen ya estaba en otra parte.",
						"vietnamese": "Ánh mắt của Glen đã ở nơi khác.",
						"thai": "สายตาของเกล็นจับจ้องไปยังที่อื่นแล้ว",
						"hindi": "ग्लेन की नज़रें पहले ही कहीं और थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "glen",
					"action": "enter"
				},
				{
					"speaker": "glen",
					"emotion": "happy",
					"content": {
						"korean": "저기, 보이시죠? 동료들이… 우리를 부르고 있어요.",
						"english": "Look, do you see them? Our comrades... they're calling us.",
						"japanese": "見てください、彼らが見えますか？仲間たちが…私たちを呼んでいます。",
						"chinese": "看，你看到了吗？我们的同伴…他们在呼唤我们。",
						"french": "Regardez, vous les voyez ? Nos camarades... ils nous appellent.",
						"spanish": "Mira, ¿los ves? Nuestros compañeros... nos están llamando.",
						"vietnamese": "Nhìn kìa, anh thấy không? Đồng đội của chúng ta... họ đang gọi chúng ta.",
						"thai": "ดูสิ คุณเห็นไหม? เพื่อนร่วมทางของเรา...พวกเขากำลังเรียกเราอยู่",
						"hindi": "देखो, तुम्हें दिख रहे हैं? हमारे साथी... वे हमें बुला रहे हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "글렌, 잠깐. 저건… 환영이야.",
						"english": "Glen, wait. That's... an illusion.",
						"japanese": "グレン、待って。あれは…幻だ。",
						"chinese": "格伦，等等。那是…幻觉。",
						"french": "Glen, attends. C'est... une illusion.",
						"spanish": "Glen, espera. Eso es... una ilusión.",
						"vietnamese": "Glen, chờ đã. Đó là... ảo ảnh.",
						"thai": "เกลน รอเดี๋ยว นั่นมัน...ภาพลวงตา",
						"hindi": "ग्लेन, रुको। वह... एक भ्रम है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "환영이라니요! 저 익숙한 얼굴을 봐요! 우리를 구하러 온 거예요!",
						"english": "An illusion?! Look at those familiar faces! They've come to save us!",
						"japanese": "幻だなんて！あの見慣れた顔を見てください！私たちを助けに来たんです！",
						"chinese": "幻觉？！看看那些熟悉的脸！他们是来救我们的！",
						"french": "Une illusion ?! Regardez ces visages familiers ! Ils sont venus nous sauver !",
						"spanish": "¡¿Una ilusión?! ¡Mira esas caras conocidas! ¡Han venido a salvarnos!",
						"vietnamese": "Ảo ảnh ư?! Nhìn những gương mặt quen thuộc đó xem! Họ đến để cứu chúng ta!",
						"thai": "ภาพลวงตาอะไร! ดูหน้าตาที่คุ้นเคยเหล่านั้นสิ! พวกเขามาช่วยเรา!",
						"hindi": "भ्रम है?! उन परिचित चेहरों को देखो! वे हमें बचाने आए हैं!"
					},
					"type": "speech",
					"speaker": "glen"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲이 우리를 속이고 있어. 조심해야 해.",
						"english": "The forest is deceiving us. We must be careful.",
						"japanese": "森が私たちを騙している。気をつけなければ。",
						"chinese": "森林在欺骗我们。我们必须小心。",
						"french": "La forêt nous trompe. Nous devons être prudents.",
						"spanish": "El bosque nos está engañando. Debemos tener cuidado.",
						"vietnamese": "Rừng đang lừa dối chúng ta. Phải cẩn thận.",
						"thai": "ป่ากำลังหลอกลวงเรา เราต้องระวัง",
						"hindi": "जंगल हमें धोखा दे रहा है। हमें सावधान रहना होगा।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니! 그럴 리 없어. 그들은 살아있어요! 내가 봤어요!",
						"english": "No! That can't be. They're alive! I saw them!",
						"japanese": "いや！そんなはずない。彼らは生きている！私が見たんだ！",
						"chinese": "不！不可能。他们还活着！我看到了！",
						"french": "Non ! Ce n'est pas possible. Ils sont vivants ! Je les ai vus !",
						"spanish": "¡No! No puede ser. ¡Están vivos! ¡Yo los vi!",
						"vietnamese": "Không! Không thể nào. Họ còn sống! Tôi đã thấy họ!",
						"thai": "ไม่! เป็นไปไม่ได้ พวกเขายังมีชีวิตอยู่! ฉันเห็นแล้ว!",
						"hindi": "नहीं! ऐसा नहीं हो सकता। वे जीवित हैं! मैंने उन्हें देखा है!"
					},
					"speaker": "glen"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "글렌은 환영에 홀려 위험한 길로 접어들었다.",
						"english": "Glen, swayed by the illusion, ventured down a dangerous path.",
						"japanese": "グレンは幻影に惑わされ、危険な道へと足を踏み入れた。",
						"chinese": "格伦被幻象所迷惑，踏上了一条危险的道路。",
						"french": "Glen, envoûté par l'illusion, s'aventura sur un chemin dangereux.",
						"spanish": "Glen, seducido por la ilusión, se adentró en un camino peligroso.",
						"vietnamese": "Glen, bị ảo ảnh mê hoặc, đã dấn thân vào một con đường nguy hiểm.",
						"thai": "เกลนหลงกลภาพลวงตา และเดินเข้าสู่เส้นทางอันตราย",
						"hindi": "ग्लेन भ्रम में फंसकर एक खतरनाक रास्ते पर चल पड़ा।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glen",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여기가 맞아! 여기가 안전하다고 했어요!",
						"english": "This is it! They said it was safe here!",
						"japanese": "ここだ！ここが安全だって言ってた！",
						"chinese": "就是这里！他们说这里是安全的！",
						"french": "C'est ici ! Ils ont dit que c'était sûr ici !",
						"spanish": "¡Aquí es! ¡Dijeron que aquí era seguro!",
						"vietnamese": "Chính là đây! Họ nói ở đây an toàn!",
						"thai": "ที่นี่แหละ! พวกเขาบอกว่าที่นี่ปลอดภัย!",
						"hindi": "यही जगह है! उन्होंने कहा था कि यह सुरक्षित है!"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "glen"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "글렌, 멈춰! 여기가 함정이야!",
						"english": "Glen, stop! This is a trap!",
						"japanese": "グレン、止まれ！ここは罠だ！",
						"chinese": "格伦，停下！这里是陷阱！",
						"french": "Glen, arrête ! C'est un piège ici !",
						"spanish": "¡Glen, detente! ¡Esto es una trampa!",
						"vietnamese": "Glen, dừng lại! Đây là bẫy!",
						"thai": "เกลน หยุด! ที่นี่เป็นกับดัก!",
						"hindi": "ग्लेन, रुको! यह एक जाल है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니야! 그들은 나에게… 내가 돌아갈 수 있는 방법을 알려줬어.",
						"english": "No! They told me... they told me how to go back.",
						"japanese": "違う！彼らは私に…私が戻る方法を教えてくれたんだ。",
						"chinese": "不是！他们告诉我…他们告诉了我回去的路。",
						"french": "Non ! Ils m'ont dit... ils m'ont dit comment revenir.",
						"spanish": "¡No! Ellos me dijeron... me dijeron cómo volver.",
						"vietnamese": "Không! Họ đã nói với tôi... họ đã chỉ cho tôi cách quay về.",
						"thai": "ไม่ใช่! พวกเขาบอกฉัน...พวกเขาบอกวิธีที่ฉันจะกลับไปได้",
						"hindi": "नहीं! उन्होंने मुझे... उन्होंने मुझे वापस जाने का तरीका बताया।"
					},
					"type": "speech",
					"speaker": "glen"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "숲이 네 약점을 파고들어. 정신 차려!",
						"english": "The forest is preying on your weaknesses. Snap out of it!",
						"japanese": "森がお前の弱みにつけ込んでいる。目を覚ませ！",
						"chinese": "森林正在利用你的弱点。清醒过来！",
						"french": "La forêt exploite tes faiblesses. Reprends tes esprits !",
						"spanish": "El bosque se está aprovechando de tus debilidades. ¡Reacciona!",
						"vietnamese": "Rừng đang lợi dụng điểm yếu của ngươi. Tỉnh táo lại đi!",
						"thai": "ป่ากำลังแทรกซึมจุดอ่อนของเจ้า ตื่นได้แล้ว!",
						"hindi": "जंगल तुम्हारी कमजोरियों का फायदा उठा रहा है। होश में आओ!"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "내 동료들을 모욕하지 마! 날 믿어줘!",
						"english": "Don't insult my comrades! Trust me!",
						"japanese": "仲間たちを侮辱するな！俺を信じろ！",
						"chinese": "别侮辱我的同伴！相信我！",
						"french": "N'insultez pas mes camarades ! Faites-moi confiance !",
						"spanish": "¡No insultes a mis camaradas! ¡Confía en mí!",
						"vietnamese": "Đừng lăng mạ đồng đội của tôi! Tin tôi đi!",
						"thai": "อย่าดูถูกสหายของข้า! เชื่อใจข้าเถอะ!",
						"hindi": "मेरे साथियों का अपमान मत करो! मुझ पर विश्वास करो!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "glen"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "glen",
					"action": "enter"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내… 내 머릿속에서… 목소리가…",
						"english": "In... in my head... a voice...",
						"japanese": "頭の中に…声が…",
						"chinese": "我…我脑子里…有声音…",
						"french": "Dans… dans ma tête… une voix…",
						"spanish": "En… en mi cabeza… una voz…",
						"vietnamese": "Trong… trong đầu tôi… một giọng nói…",
						"thai": "ใน...ในหัวของฉัน...มีเสียง...",
						"hindi": "मेरे… मेरे सिर में… एक आवाज़…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "글렌! 정신 차려!",
						"english": "Glenn! Snap out of it!",
						"japanese": "グレン！しっかりしろ！",
						"chinese": "格伦！清醒点！",
						"french": "Glenn ! Reprends-toi !",
						"spanish": "¡Glenn! ¡Reacciona!",
						"vietnamese": "Glenn! Tỉnh táo lại đi!",
						"thai": "เกล็น! ได้สติเดี๋ยวนี้!",
						"hindi": "ग्लेन! होश में आओ!"
					}
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼! 내가… 내가 틀렸어!",
						"english": "No! I... I was wrong!",
						"japanese": "違う！俺が…間違ってた！",
						"chinese": "不！我…我错了！",
						"french": "Non ! Je… je me suis trompé !",
						"spanish": "¡No! ¡Yo… yo me equivoqué!",
						"vietnamese": "Không! Tôi… tôi đã sai rồi!",
						"thai": "ไม่นะ! ฉัน...ฉันผิดไปแล้ว!",
						"hindi": "नहीं! मैं… मैं गलत था!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲의 에너지가 흡수되는 속도가 급격히 빨라졌다. 압도적인 압박이었다.",
						"english": "The forest's energy was being absorbed at an alarming rate. It was an overwhelming pressure.",
						"japanese": "森のエネルギーが急速に吸収されていく。圧倒的なプレッシャーだった。",
						"chinese": "森林的能量吸收速度骤然加快。那是一种压倒性的压迫感。",
						"french": "L'énergie de la forêt était absorbée à un rythme alarmant. C'était une pression accablante.",
						"spanish": "La energía del bosque estaba siendo absorbida a un ritmo alarmante. Era una presión abrumadora.",
						"vietnamese": "Năng lượng của khu rừng đang bị hấp thụ với tốc độ đáng báo động. Đó là một áp lực choáng ngợp.",
						"thai": "พลังงานของป่าถูกดูดซับอย่างรวดเร็ว มันเป็นแรงกดดันที่ท่วมท้น",
						"hindi": "जंगल की ऊर्जा तेज़ी से अवशोषित हो रही थी। यह एक ज़बरदस्त दबाव था।"
					},
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "포기해라. 너희는 이 숲을 벗어날 수 없어.",
						"english": "Give up. You can't escape this forest.",
						"japanese": "諦めろ。お前たちはこの森から逃れられない。",
						"chinese": "放弃吧。你们无法逃离这片森林。",
						"french": "Abandonnez. Vous ne pouvez pas échapper à cette forêt.",
						"spanish": "Ríndete. No podéis escapar de este bosque.",
						"vietnamese": "Hãy từ bỏ đi. Các ngươi không thể thoát khỏi khu rừng này đâu.",
						"thai": "ยอมแพ้ซะ พวกเจ้าหนีจากป่านี้ไปไม่ได้หรอก",
						"hindi": "हार मान लो। तुम इस जंगल से बच नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시는 속지 않아!",
						"english": "I won't be fooled again!",
						"japanese": "二度と騙されない！",
						"chinese": "我不会再上当了！",
						"french": "Je ne me laisserai plus berner !",
						"spanish": "¡No me engañarás de nuevo!",
						"vietnamese": "Tôi sẽ không bị lừa nữa!",
						"thai": "ฉันจะไม่ถูกหลอกอีก!",
						"hindi": "मैं फिर कभी मूर्ख नहीं बनूँगा!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "반드시 막을 거야!",
						"english": "I'll definitely stop it!",
						"japanese": "必ず止めてやる！",
						"chinese": "我一定会阻止它！",
						"french": "Je vais l'arrêter !",
						"spanish": "¡Lo detendré a toda costa!",
						"vietnamese": "Mình nhất định sẽ ngăn chặn nó!",
						"thai": "ฉันจะหยุดมันให้ได้!",
						"hindi": "मैं इसे ज़रूर रोकूँगा!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 환영의 주인이었다.",
						"english": "A colossal shadow blocked the path. It was the master of illusions.",
						"japanese": "巨大な影が道を阻んだ。幻影の主だった。",
						"chinese": "一道巨大的阴影挡住了去路。那是幻象的主人。",
						"french": "Une ombre colossale bloquait le passage. C'était le maître des illusions.",
						"spanish": "Una sombra colosal bloqueó el camino. Era el maestro de las ilusiones.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Đó là chủ nhân của ảo ảnh.",
						"thai": "เงายักษ์ขวางทางไว้ มันคือเจ้าแห่งภาพลวงตา",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। वह मायावी शक्तियों का स्वामी था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 인간들. 쉬운 먹잇감.",
						"english": "Foolish humans. Easy prey.",
						"japanese": "愚かな人間どもめ。簡単な獲物だ。",
						"chinese": "愚蠢的人类。容易的猎物。",
						"french": "Humains stupides. Proie facile.",
						"spanish": "Humanos necios. Presa fácil.",
						"vietnamese": "Loài người ngu ngốc. Con mồi dễ dàng.",
						"thai": "มนุษย์โง่เง่า. เหยื่อที่ง่ายดาย.",
						"hindi": "मूर्ख मनुष्य। आसान शिकार।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "글렌을 이용한 게 너였나!",
						"english": "So it was you who used Glenn!",
						"japanese": "グレンを利用したのはお前だったのか！",
						"chinese": "利用格伦的是你！",
						"french": "C'était donc toi qui as utilisé Glenn !",
						"spanish": "¡Así que fuiste tú quien usó a Glenn!",
						"vietnamese": "Vậy ra là ngươi đã lợi dụng Glenn!",
						"thai": "เป็นเจ้าสินะที่ใช้เกล็น!",
						"hindi": "तो तुमने ही ग्लेन का इस्तेमाल किया था!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "유혹은 달콤한 법. 탐욕스러운 영혼은 늘 있었다.",
						"english": "Temptation is sweet. Greedy souls have always existed.",
						"japanese": "誘惑は甘いものだ。貪欲な魂はいつの時代もいた。",
						"chinese": "诱惑总是甜蜜的。贪婪的灵魂一直存在。",
						"french": "La tentation est douce. Les âmes avides ont toujours existé.",
						"spanish": "La tentación es dulce. Las almas codiciosas siempre han existido.",
						"vietnamese": "Sự cám dỗ luôn ngọt ngào. Những linh hồn tham lam luôn tồn tại.",
						"thai": "การล่อลวงนั้นหอมหวาน. ดวงวิญญาณที่โลภมีอยู่เสมอ.",
						"hindi": "प्रलोभन मीठा होता है। लालची आत्माएं हमेशा से रही हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "날… 날 조종했어!",
						"english": "You... you manipulated me!",
						"japanese": "俺を…操ったのか！",
						"chinese": "你…你操控了我！",
						"french": "Tu… tu m'as manipulé !",
						"spanish": "¡Me… me manipulaste!",
						"vietnamese": "Ngươi… ngươi đã thao túng ta!",
						"thai": "แก...แกควบคุมฉัน!",
						"hindi": "तुमने… तुमने मुझे नियंत्रित किया!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이제 너무 늦었다. 너희 모두 숲의 일부가 될 뿐.",
						"english": "It's too late. You'll all become part of the forest.",
						"japanese": "もう遅い。お前たちも森の一部となるだけだ。",
						"chinese": "太迟了。你们都将成为森林的一部分。",
						"french": "C'est trop tard. Vous ferez tous partie de la forêt.",
						"spanish": "Es demasiado tarde. Todos vosotros seréis parte del bosque.",
						"vietnamese": "Đã quá muộn rồi. Tất cả các ngươi sẽ chỉ trở thành một phần của khu rừng.",
						"thai": "สายเกินไปแล้ว พวกเจ้าทุกคนจะเป็นส่วนหนึ่งของป่าเท่านั้น",
						"hindi": "अब बहुत देर हो चुकी है। तुम सब बस जंगल का हिस्सा बन जाओगे。"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크크… 환영은… 끝나지 않아…",
						"english": "Heh heh… The illusion… won't end…",
						"japanese": "クク…幻影は…終わらない…",
						"chinese": "呵呵…幻觉…不会结束…",
						"french": "Hé hé… L'illusion… ne se terminera pas…",
						"spanish": "Je je… La ilusión… no terminará…",
						"vietnamese": "Khà khà… Ảo ảnh… sẽ không kết thúc…",
						"thai": "ฮิฮิ… ภาพลวงตา… จะไม่มีวันจบสิ้น…",
						"hindi": "हँ हँ… भ्रम… ख़त्म नहीं होगा…"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내가… 무슨 짓을…",
						"english": "What have I… done…",
						"japanese": "俺が…何を…",
						"chinese": "我…做了什么…",
						"french": "Qu'ai-je… fait…",
						"spanish": "¿Qué he… hecho…",
						"vietnamese": "Mình đã… làm gì vậy…",
						"thai": "ฉัน… ทำอะไรลงไป…",
						"hindi": "मैंने… क्या किया…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "괜찮아, 글렌. 네 잘못이 아니야.",
						"english": "It's okay, Glenn. It's not your fault.",
						"japanese": "大丈夫だ、グレン。君のせいじゃない。",
						"chinese": "没关系，格伦。这不是你的错。",
						"french": "Ça va, Glenn. Ce n'est pas ta faute.",
						"spanish": "Está bien, Glenn. No es tu culpa.",
						"vietnamese": "Không sao đâu, Glenn. Không phải lỗi của cậu.",
						"thai": "ไม่เป็นไร, เกลน. ไม่ใช่ความผิดของนายหรอก",
						"hindi": "ठीक है, ग्लेन। यह तुम्हारी गलती नहीं है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "환영은 사라졌지만, 숲의 흡수 활동은 멈추지 않았다.",
						"english": "The illusion faded, but the forest's absorption continued.",
						"japanese": "幻影は消えたが、森の吸収活動は止まらなかった。",
						"chinese": "幻觉消失了，但森林的吸收活动并未停止。",
						"french": "L'illusion s'est estompée, mais l'absorption de la forêt a continué.",
						"spanish": "La ilusión se desvaneció, pero la absorción del bosque continuó.",
						"vietnamese": "Ảo ảnh đã tan biến, nhưng hoạt động hấp thụ của khu rừng vẫn không ngừng lại.",
						"thai": "ภาพลวงตาหายไปแล้ว แต่กิจกรรมการดูดซับของป่าก็ยังไม่หยุดลง",
						"hindi": "भ्रम तो मिट गया, लेकिन जंगल की सोखने की गतिविधि नहीं रुकी।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "카운트다운은 계속되고 있었다.",
						"english": "The countdown continued.",
						"japanese": "カウントダウンは続いていた。",
						"chinese": "倒计时仍在继续。",
						"french": "Le compte à rebours continuait.",
						"spanish": "La cuenta atrás continuaba.",
						"vietnamese": "Đồng hồ đếm ngược vẫn tiếp tục.",
						"thai": "การนับถอยหลังยังคงดำเนินต่อไป",
						"hindi": "उलटी गिनती जारी थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 더욱 깊숙한 곳으로 우리를 끌어들였다.",
			"친숙한 환영이 속삭이고, 길을 잃은 영혼들이 손짓했다.",
			"글렌, 그는 이미 그 유혹에 사로잡힌 듯했다.",
			"모든 것이 계략이다. 시간이 없다."
		],
		"english": [
			"The forest drew us deeper in.",
			"Familiar illusions whispered, lost souls beckoned.",
			"Glen, he seemed already ensnared by the temptation.",
			"It's all a ploy. There's no time."
		],
		"japanese": [
			"森は私たちをさらに奥深くへと引き込んだ。",
			"見慣れた幻影が囁き、迷える魂が手招きした。",
			"グレン、彼はすでにその誘惑に囚われているようだった。",
			"すべては策略だ。時間がない。"
		],
		"chinese": [
			"森林将我们带向更深处。",
			"熟悉的幻影低语，迷失的灵魂招手。",
			"格伦，他似乎已被诱惑所困。",
			"这都是一个计谋。没有时间了。"
		],
		"french": [
			"La forêt nous attirait plus profondément.",
			"Des illusions familières chuchotaient, des âmes perdues nous faisaient signe.",
			"Glen, il semblait déjà piégé par la tentation.",
			"Tout est un stratagème. Il n'y a pas de temps."
		],
		"spanish": [
			"El bosque nos adentró aún más.",
			"Ilusiones familiares susurraban, almas perdidas hacían señas.",
			"Glen, él ya parecía atrapado por la tentación.",
			"Todo es una estratagema. No hay tiempo."
		],
		"vietnamese": [
			"Khu rừng kéo chúng ta vào sâu hơn.",
			"Những ảo ảnh quen thuộc thì thầm, những linh hồn lạc lối vẫy gọi.",
			"Glen, anh ấy dường như đã bị cám dỗ cuốn hút.",
			"Tất cả chỉ là một mưu mẹo. Không còn thời gian."
		],
		"thai": [
			"ป่าดึงเราเข้าไปลึกยิ่งขึ้น",
			"ภาพลวงตาที่คุ้นเคยกระซิบ วิญญาณที่หลงทางกวักมือเรียก",
			"เกล็น ดูเหมือนเขาจะถูกล่อลวงไปแล้ว",
			"ทั้งหมดเป็นกลอุบาย ไม่มีเวลาแล้ว"
		],
		"hindi": [
			"जंगल हमें और भी गहराई तक खींचता गया।",
			"परिचित भ्रम फुसफुसाए, भटकी हुई आत्माओं ने इशारा किया।",
			"ग्लेन, वह पहले ही उस लालच में फंस चुका था।",
			"यह सब एक चाल है। समय नहीं है।"
		]
	}
} as const;
