export const scenario_modern_rumble_56_04 = {
	"scenario_id": "modern_rumble_56_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "미로처럼 얽힌 도시의 뒷골목. 모든 것이 낯설었다.",
						"english": "The city's back alleys, tangled like a maze. Everything felt unfamiliar.",
						"japanese": "迷路のように入り組んだ街の裏路地。すべてが異様に感じられた。",
						"chinese": "城市后巷错综复杂，如同迷宫。一切都那么陌生。",
						"french": "Les ruelles de la ville, entremêlées comme un labyrinthe. Tout me semblait étranger.",
						"spanish": "Los callejones de la ciudad, enredados como un laberinto. Todo se sentía desconocido.",
						"vietnamese": "Những con hẻm sau thành phố, rối như mê cung. Mọi thứ đều xa lạ.",
						"thai": "ตรอกซอยหลังเมืองที่พันกันยุ่งเหยิงเหมือนเขาวงกต ทุกสิ่งดูแปลกตาไปหมด",
						"hindi": "शहर की पीछे की गलियाँ, एक भूलभुलैया की तरह उलझी हुई। सब कुछ अनजाना लग रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여긴 어디지? 분명 이쪽이었는데…",
						"english": "Where am I? I was sure it was this way...",
						"japanese": "ここはどこだ？確かこの方向だったはずなのに…",
						"chinese": "我在哪？明明是这条路啊…",
						"french": "Où suis-je ? J'étais sûr que c'était par ici...",
						"spanish": "¿Dónde estoy? Estaba seguro de que era por aquí...",
						"vietnamese": "Đây là đâu? Rõ ràng là hướng này mà…",
						"thai": "ที่นี่ที่ไหนกัน? ฉันแน่ใจว่ามาทางนี้แท้ๆ...",
						"hindi": "मैं कहाँ हूँ? मुझे यकीन था कि यह यहीं था..."
					},
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "zoe",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "zoe"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "방금… 뭔가 지나간 것 같은데.",
						"english": "Just now... I think something just passed by.",
						"japanese": "今… 何か通り過ぎたような…",
						"chinese": "刚才… 好像有什么东西过去了。",
						"french": "À l'instant... il me semble que quelque chose est passé.",
						"spanish": "Justo ahora... creo que algo acaba de pasar.",
						"vietnamese": "Vừa nãy… hình như có gì đó vừa đi qua.",
						"thai": "เมื่อกี้… เหมือนมีอะไรบางอย่างผ่านไป",
						"hindi": "अभी… कुछ गुजरा है, ऐसा लगा।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 유리창마다 어지러운 네온 불빛이 반사되었다.",
						"english": "Dazzling neon lights reflected off every old window.",
						"japanese": "古びた窓ガラスのそれぞれに、眩暈がするようなネオンの光が反射していた。",
						"chinese": "斑驳的旧玻璃窗上，倒映着令人眩晕的霓虹灯光。",
						"french": "Les néons éblouissants se reflétaient sur chaque vieille vitre.",
						"spanish": "Las deslumbrantes luces de neón se reflejaban en cada ventana vieja.",
						"vietnamese": "Đèn neon chói lóa phản chiếu trên mỗi ô cửa sổ cũ kỹ.",
						"thai": "แสงนีออนเจิดจ้าสะท้อนจากกระจกหน้าต่างเก่าๆ ทุกบาน",
						"hindi": "हर पुरानी खिड़की पर चकाचौंध करने वाली नियॉन लाइटें परावर्तित हो रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더… 어지러워지는 것 같아.",
						"english": "It feels like... I'm getting dizzier and dizzier.",
						"japanese": "だんだん… 目眩がひどくなってきたみたいだ。",
						"chinese": "好像越来越… 眩晕了。",
						"french": "On dirait que... je suis de plus en plus étourdi.",
						"spanish": "Parece que... me estoy mareando cada vez más.",
						"vietnamese": "Cứ như… tôi đang ngày càng chóng mặt hơn.",
						"thai": "รู้สึกเหมือน… วิงเวียนขึ้นเรื่อยๆ",
						"hindi": "ऐसा लग रहा है कि... मुझे चक्कर और ज़्यादा आ रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "zoe",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "훗.",
						"english": "Hmph.",
						"japanese": "「フッ。」",
						"chinese": "“哼。”",
						"french": "« Pff. »",
						"spanish": "« Hmph. »",
						"vietnamese": "“Hừ.”",
						"thai": "“หึ.”",
						"hindi": "“हूँ।”"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 여자는… 계속 날 보는 것 같아.",
						"english": "That woman... keeps looking at me.",
						"japanese": "「あの女…ずっと私を見てる気がする。」",
						"chinese": "“那个女人……好像一直在看我。”",
						"french": "« Cette femme... n'arrête pas de me regarder. »",
						"spanish": "« Esa mujer... parece que no deja de mirarme. »",
						"vietnamese": "“Người phụ nữ đó… dường như cứ nhìn chằm chằm vào mình.”",
						"thai": "“ผู้หญิงคนนั้น... เหมือนจะเอาแต่จ้องฉันเลย”",
						"hindi": "“वह औरत... मुझे लगातार देख रही है।”"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "착각이겠지. 너무 예민해진 거야.",
						"english": "Must be my imagination. I'm too sensitive.",
						"japanese": "「気のせいよね。敏感になりすぎてるんだ。」",
						"chinese": "“是错觉吧。我太敏感了。”",
						"french": "« C'est sûrement mon imagination. Je suis trop sensible. »",
						"spanish": "« Debe ser mi imaginación. Estoy demasiado sensible. »",
						"vietnamese": "“Chắc là mình ảo giác thôi. Mình đang quá nhạy cảm.”",
						"thai": "“คงคิดไปเองน่ะ ฉันแค่คิดมากไป”",
						"hindi": "“यह मेरा भ्रम होगा। मैं बहुत ज़्यादा संवेदनशील हो गई हूँ।”"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유리창에 비친 자신의 모습이 순간 일그러졌다.",
						"english": "The reflection in the window distorted for a moment.",
						"japanese": "「窓ガラスに映る自分の姿が、一瞬歪んだ。」",
						"chinese": "“映在玻璃上的自己，瞬间扭曲了。”",
						"french": "« Son reflet dans la vitre se déforma un instant. »",
						"spanish": "« Su reflejo en la ventana se distorsionó por un instante. »",
						"vietnamese": "“Hình bóng phản chiếu trên cửa kính chợt biến dạng.”",
						"thai": "“เงาสะท้อนในหน้าต่างบิดเบี้ยวไปชั่วขณะ”",
						"hindi": "“काँच में उसकी परछाई पल भर में विकृत हो गई।”"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…! 뭐야, 내 얼굴이 왜 저래?",
						"english": "...! What, why does my face look like that?",
						"japanese": "「…！なによ、私の顔どうしちゃったの？」",
						"chinese": "“……！什么，我的脸怎么变成这样了？”",
						"french": "« ...! Quoi, pourquoi mon visage est-il comme ça ? »",
						"spanish": "« ¡...! ¿Qué, por qué mi cara está así? »",
						"vietnamese": "“…! Cái gì, sao mặt mình lại ra nông nỗi này?”",
						"thai": "“...! อะไรนะ ทำไมหน้าฉันถึงเป็นแบบนั้นล่ะ?”",
						"hindi": "“...! क्या, मेरा चेहरा ऐसा क्यों दिख रहा है?”"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "(섬뜩하게 웃는다)",
						"english": "(Grins chillingly)",
						"japanese": "「（薄気味悪く笑う）」",
						"chinese": "“（阴森地笑着）”",
						"french": "« (Sourit sinistrement) »",
						"spanish": "« (Sonríe de forma espeluznante) »",
						"vietnamese": "“(Cười một cách rợn người)”",
						"thai": "“(แสยะยิ้มอย่างน่าขนลุก)”",
						"hindi": "“(भयानक हँसी हँसता है)”"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 시야가… 왜곡되고 있어. 농간이 분명해!",
						"english": "My vision... is distorting. This is clearly a trick!",
						"japanese": "「私の視界が…歪んでる。これは、仕組まれたことだ！」",
						"chinese": "“我的视野……正在扭曲。这一定是圈套！”",
						"french": "« Ma vision... se déforme. C'est clairement une ruse ! »",
						"spanish": "« Mi visión... se está distorsionando. ¡Esto es claramente un engaño! »",
						"vietnamese": "“Tầm nhìn của mình… đang bị bóp méo. Rõ ràng là một trò bịp!”",
						"thai": "“การมองเห็นของฉัน... กำลังบิดเบี้ยว นี่มันต้องเป็นกลอุบายแน่ๆ!”",
						"hindi": "“मेरी दृष्टि... विकृत हो रही है। यह स्पष्ट रूप से एक चाल है!”"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시야가 흔들리고, 세상이 일그러지는 듯한 극심한 혼란이 찾아왔다.",
						"english": "An extreme confusion set in, as if vision blurred and the world distorted.",
						"japanese": "「視界が揺らぎ、世界が歪むような極度の混乱が襲いかかった。」",
						"chinese": "“视野开始晃动，世界仿佛扭曲，极度的混乱袭来。”",
						"french": "« Une confusion extrême s'installa, comme si la vision se brouillait et que le monde se déformait. »",
						"spanish": "« Una confusión extrema se apoderó, como si la visión se nublara y el mundo se distorsionara. »",
						"vietnamese": "“Một sự hỗn loạn cực độ ập đến, tầm nhìn lung lay, thế giới dường như biến dạng.”",
						"thai": "“ความสับสนอย่างรุนแรงเข้าครอบงำ ราวกับว่าภาพพร่ามัวและโลกบิดเบี้ยว”",
						"hindi": "“दृष्टि धुंधली हो गई और दुनिया विकृत होने लगी, मानो एक अत्यंत भ्रम छा गया हो।”"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "내 눈이… 이상해. 내가 제대로 보고 있는 건가?",
						"english": "My eyes... are weird. Am I seeing things correctly?",
						"japanese": "「私の目が…おかしい。私はちゃんと見えているのか？」",
						"chinese": "“我的眼睛……很奇怪。我真的看清楚了吗？”",
						"french": "« Mes yeux... sont étranges. Est-ce que je vois correctement ? »",
						"spanish": "« Mis ojos... están raros. ¿Estoy viendo bien? »",
						"vietnamese": "“Mắt mình… lạ thật. Mình có nhìn đúng không vậy?”",
						"thai": "“ตาของฉัน... แปลกๆ ไป ฉันมองเห็นอะไรถูกต้องหรือเปล่า?”",
						"hindi": "“मेरी आँखें... अजीब हैं। क्या मैं सही देख रहा हूँ?”"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "zoe",
					"type": "speech",
					"content": {
						"korean": "(주인공의 혼란스러운 얼굴을 말없이 응시한다)",
						"english": "(Stares silently at the protagonist's confused face)",
						"japanese": "「（主人公の混乱した顔を、無言で凝視する）」",
						"chinese": "“（默默凝视着主人公困惑的脸）”",
						"french": "« (Fixe silencieusement le visage confus du protagoniste) »",
						"spanish": "« (Mira en silencio el rostro confuso del protagonista) »",
						"vietnamese": "“(Lặng lẽ nhìn chằm chằm vào khuôn mặt bối rối của nhân vật chính)”",
						"thai": "“(จ้องมองใบหน้าที่สับสนของตัวละครหลักอย่างเงียบงัน)”",
						"hindi": "“(नायक के भ्रमित चेहरे को चुपचाप देखता है)”"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은 대체… 뭘 아는 거지? 말해봐!",
						"english": "What do you... know? Tell me!",
						"japanese": "一体…何を…知っているんだ？教えろ！",
						"chinese": "你到底…知道些什么？快说！",
						"french": "Qu'est-ce que tu... sais ? Dis-moi !",
						"spanish": "¿Qué sabes tú... exactamente? ¡Dímelo!",
						"vietnamese": "Rốt cuộc... ngươi biết gì? Nói đi!",
						"thai": "แก...รู้อะไร? บอกมา!",
						"hindi": "तुम... क्या जानते हो? बताओ!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "(고개를 갸웃하며 비웃는 듯한 표정)",
						"english": "(Tilts head, a mocking expression)",
						"japanese": "(首を傾げ、嘲笑うかのような表情)",
						"chinese": "(歪着头，露出嘲讽的表情)",
						"french": "(Incline la tête, un air moqueur)",
						"spanish": "(Inclina la cabeza, con expresión burlona)",
						"vietnamese": "(Nghiêng đầu, vẻ mặt chế nhạo)",
						"thai": "(เอียงคอ, สีหน้าเยาะเย้ย)",
						"hindi": "(सिर झुकाकर, उपहास भरा भाव)"
					},
					"speaker": "zoe",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 눈으로 감히… 진실을 보려 하는가?",
						"english": "Dare you gaze upon the truth with such paltry eyes?",
						"japanese": "愚かな目で…真実を見ようとするか？",
						"chinese": "竟敢用这卑微的眼睛…窥视真相？",
						"french": "Oses-tu contempler la vérité avec des yeux si insignifiants ?",
						"spanish": "¿Te atreves a contemplar la verdad con ojos tan insignificantes?",
						"vietnamese": "Dám nhìn vào sự thật bằng đôi mắt tầm thường này sao?",
						"thai": "กล้าดีอย่างไรถึงมองความจริงด้วยสายตาอันต่ำต้อยเช่นนั้น?",
						"hindi": "तुच्छ आँखों से सत्य को देखने का साहस करते हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 정도로는… 날 멈출 수 없어…! 다시… 진실을 찾을 거야.",
						"english": "This won't stop me…! I'll find the truth again.",
						"japanese": "これしきでは…私を止められない…！再び…真実を見つけ出す。",
						"chinese": "这样可拦不住我…！我会再次找到真相。",
						"french": "Ça ne m'arrêtera pas… ! Je retrouverai la vérité.",
						"spanish": "Esto no me detendrá… ¡Volveré a encontrar la verdad!",
						"vietnamese": "Chừng này… không thể ngăn cản ta…! Ta sẽ tìm lại sự thật.",
						"thai": "แค่นี้… หยุดข้าไม่ได้หรอก…! ข้าจะตามหาความจริงอีกครั้ง",
						"hindi": "इतना मुझे रोक नहीं पाएगा…! मैं फिर से सत्य को खोजूंगा।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그래, 애써봐라. 계속 왜곡될 테니.",
						"english": "Yes, try your best. It will only continue to be distorted.",
						"japanese": "ああ、せいぜい足掻くがいい。歪み続けるだけだからな。",
						"chinese": "好啊，尽管去努力吧。它只会持续扭曲。",
						"french": "Oui, fais de ton mieux. Elle ne fera que continuer à être déformée.",
						"spanish": "Sí, esfuérzate. Solo seguirá distorsionándose.",
						"vietnamese": "Phải, cứ cố gắng đi. Nó sẽ chỉ tiếp tục bị bóp méo thôi.",
						"thai": "ได้, พยายามเข้าไปเถอะ มันก็จะบิดเบี้ยวต่อไปเท่านั้นแหละ",
						"hindi": "हाँ, कोशिश कर लो। यह बस विकृत होता रहेगा।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "길고 긴 미로의 끝, 정체 모를 존재가 기다리고 있었다.",
						"english": "At the end of the long, winding maze, an unknown entity awaited.",
						"japanese": "長く続く迷路の果て、正体不明の存在が待ち構えていた。",
						"chinese": "在漫长迷宫的尽头，一个不明身份的存在正在等待。",
						"french": "Au bout du long et sinueux labyrinthe, une entité inconnue attendait.",
						"spanish": "Al final del largo y sinuoso laberinto, una entidad desconocida esperaba.",
						"vietnamese": "Cuối mê cung dài ngoằng, một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "ณ ปลายเขาวงกตอันยาวนาน มีสิ่งมีชีวิตลึกลับรออยู่",
						"hindi": "लंबी और घुमावदार भूलभुलैया के अंत में, एक अज्ञात इकाई प्रतीक्षा कर रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔나? 눈에 보이는 게 전부라고 생각하나?",
						"english": "So you've made it this far? Do you think what you see is all there is?",
						"japanese": "結局ここまで来たか。目に見えるものが全てだとでも思っているのか？",
						"chinese": "终于走到这里了吗？你以为眼前所见就是全部吗？",
						"french": "Tu es finalement arrivé jusqu'ici ? Penses-tu que ce que tu vois est tout ce qu'il y a ?",
						"spanish": "¿Así que has llegado hasta aquí? ¿Crees que lo que ves es todo lo que hay?",
						"vietnamese": "Cuối cùng ngươi cũng đến đây rồi sao? Ngươi nghĩ những gì ngươi thấy là tất cả sao?",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่แล้วสินะ? เจ้าคิดว่าสิ่งที่เห็นคือทั้งหมดหรือ?",
						"hindi": "तो तुम इतनी दूर आ गए? क्या तुम्हें लगता है कि जो तुम देखते हो, बस वही सब कुछ है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "내 눈은 똑똑히 봤어. 네놈이… 내 시선을 왜곡하고 있어.",
						"english": "My eyes saw clearly. You... are distorting my vision.",
						"japanese": "私の目ははっきりと見た。貴様が…私の視線を歪めている。",
						"chinese": "我的眼睛看得很清楚。你…正在扭曲我的视线。",
						"french": "Mes yeux l'ont vu clairement. Tu... es en train de déformer ma vision.",
						"spanish": "Mis ojos lo vieron claramente. Tú... estás distorsionando mi visión.",
						"vietnamese": "Mắt ta đã nhìn rõ. Ngươi... đang bóp méo tầm nhìn của ta.",
						"thai": "ตาของข้าเห็นชัดเจน เจ้า...กำลังบิดเบือนการมองเห็นของข้า",
						"hindi": "मेरी आँखों ने साफ देखा। तुम... मेरी दृष्टि को विकृत कर रहे हो।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "재미있군. 그 눈으로, 진실을 볼 수 있을까?",
						"english": "Interesting. With those eyes, can you see the truth?",
						"japanese": "面白い。その目で、真実を見ることができるか？",
						"chinese": "有趣。凭那双眼睛，你能看到真相吗？",
						"french": "Intéressant. Avec ces yeux-là, pourras-tu voir la vérité ?",
						"spanish": "Interesante. Con esos ojos, ¿podrás ver la verdad?",
						"vietnamese": "Thú vị thật. Với đôi mắt đó, ngươi có thể thấy sự thật không?",
						"thai": "น่าสนใจ ด้วยตาคู่นั้น เจ้าจะมองเห็นความจริงได้หรือไม่?",
						"hindi": "दिलचस्प। उन आँखों से, क्या तुम सच देख पाओगे?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 다신 날 속일 수 없어!",
						"english": "Shut up! You won't fool me again!",
						"japanese": "黙れ！二度と私を騙せない！",
						"chinese": "闭嘴！你再也骗不了我了！",
						"french": "Tais-toi ! Tu ne me tromperas plus jamais !",
						"spanish": "¡Cállate! ¡No me engañarás de nuevo!",
						"vietnamese": "Câm miệng! Ngươi không thể lừa dối ta nữa đâu!",
						"thai": "หุบปาก! เจ้าหลอกข้าไม่ได้อีกแล้ว!",
						"hindi": "चुप रहो! तुम मुझे फिर से बेवकूफ नहीं बना सकते!"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 아무것도… 보지 못했을 텐데…",
						"english": "Ugh... You... haven't seen... anything yet...",
						"japanese": "くっ…まだ…何も…見ていないはずなのに…",
						"chinese": "咳…你…应该…什么都没看到才对…",
						"french": "Ugh... Tu... n'as encore... rien vu...",
						"spanish": "Ugh... Tú... no deberías... haber visto nada todavía...",
						"vietnamese": "Khụ... Ngươi... vẫn... chưa thấy gì cả mà...",
						"thai": "อึก... ยัง... ยังไม่... เห็นอะไรเลยนี่นา...",
						"hindi": "उह... तुमने... अभी तक... कुछ भी... नहीं देखा होगा..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "시선 왜곡은 이제 끝이야. 더 이상 혼란스럽지 않아.",
						"english": "The vision distortion is over. I'm no longer confused.",
						"japanese": "視線歪曲はもう終わりだ。これ以上、混乱することはない。",
						"chinese": "视线扭曲结束了。我不再困惑。",
						"french": "La distorsion visuelle est terminée. Je ne suis plus confus.",
						"spanish": "La distorsión de la visión ha terminado. Ya no estoy confundido.",
						"vietnamese": "Sự bóp méo tầm nhìn đã kết thúc. Ta không còn hoang mang nữa.",
						"thai": "การบิดเบือนการมองเห็นสิ้นสุดลงแล้ว ข้าไม่สับสนอีกต่อไป",
						"hindi": "दृष्टि का विरूपण अब खत्म हो गया है। मैं अब भ्रमित नहीं हूँ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 존재는 사라졌지만, 왜곡된 시야는 쉬이 돌아오지 않았다.",
						"english": "The unknown entity vanished, but the distorted vision did not easily return to normal.",
						"japanese": "正体不明の存在は消え去ったが、歪んだ視界は簡単には元に戻らなかった。",
						"chinese": "不明存在消失了，但扭曲的视线却久久未能恢复正常。",
						"french": "L'entité inconnue disparut, mais la vision déformée ne revint pas facilement à la normale.",
						"spanish": "La entidad desconocida desapareció, pero la visión distorsionada no volvió fácilmente a la normalidad.",
						"vietnamese": "Thực thể không rõ danh tính đã biến mất, nhưng tầm nhìn bị bóp méo không dễ dàng trở lại bình thường.",
						"thai": "สิ่งมีชีวิตลึกลับหายไปแล้ว แต่การมองเห็นที่บิดเบี้ยวก็ยังไม่กลับมาเป็นปกติง่ายๆ",
						"hindi": "अज्ञात इकाई गायब हो गई, लेकिन विकृत दृष्टि आसानी से सामान्य नहीं हुई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "진실은 아직 거울 속에 갇혀 있는 듯했다.",
						"english": "The truth still seemed trapped within the mirror.",
						"japanese": "真実はまだ鏡の中に囚われているようだった。",
						"chinese": "真相似乎仍被困在镜中。",
						"french": "La vérité semblait toujours piégée dans le miroir.",
						"spanish": "La verdad aún parecía atrapada en el espejo.",
						"vietnamese": "Sự thật dường như vẫn bị mắc kẹt trong gương.",
						"thai": "ความจริงยังคงถูกกักขังอยู่ในกระจกเงา",
						"hindi": "सत्य अभी भी दर्पण में फंसा हुआ प्रतीत हो रहा था।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 골목은 거울이 되었다.",
			"익숙한 풍경도, 내 모습도 더는 믿을 수 없었다.",
			"누군가 내게 속삭였다. \"너의 눈은 너를 속인다.\"",
			"그리고 난, 나조차도 의심하기 시작했다."
		],
		"english": [
			"The city alleys became mirrors.",
			"I could no longer trust familiar sights, nor my own reflection.",
			"Someone whispered to me, \"Your eyes deceive you.\"",
			"And then, I started to doubt even myself."
		],
		"japanese": [
			"街の路地は鏡となった。",
			"見慣れた景色も、自分の姿も、もう信じられなかった。",
			"誰かが私に囁いた。「お前の目は、お前を欺く。」",
			"そして私は、自分自身さえ疑い始めた。"
		],
		"chinese": [
			"城市的巷子变成了镜子。",
			"熟悉的风景，我的样子，都无法再相信了。",
			"有人对我耳语：“你的眼睛欺骗了你。”",
			"然后，我甚至开始怀疑我自己。"
		],
		"french": [
			"Les ruelles de la ville sont devenues des miroirs.",
			"Je ne pouvais plus faire confiance aux paysages familiers, ni à mon propre reflet.",
			"Quelqu'un me chuchota : « Tes yeux te trompent. »",
			"Et puis, j'ai commencé à douter de moi-même."
		],
		"spanish": [
			"Los callejones de la ciudad se convirtieron en espejos.",
			"Ya no podía confiar en los paisajes familiares, ni en mi propia imagen.",
			"Alguien me susurró: \"Tus ojos te engañan.\"",
			"Y entonces, comencé a dudar incluso de mí mismo."
		],
		"vietnamese": [
			"Những con hẻm thành phố đã trở thành tấm gương.",
			"Cảnh quen thuộc, ngay cả chính tôi cũng không thể tin tưởng được nữa.",
			"Ai đó thì thầm với tôi, \"Mắt của ngươi đang lừa dối ngươi.\"",
			"Và rồi, tôi bắt đầu nghi ngờ cả chính mình."
		],
		"thai": [
			"ตรอกซอกซอยในเมืองกลายเป็นกระจกเงาไปแล้ว",
			"ทั้งภาพที่คุ้นตาและภาพสะท้อนของตัวเอง ก็ไม่อาจเชื่อได้อีกต่อไป",
			"มีบางคนกระซิบกับฉันว่า \"ดวงตาของเจ้าหลอกลวงเจ้า\"",
			"และจากนั้น ฉันก็เริ่มสงสัยแม้กระทั่งตัวเอง"
		],
		"hindi": [
			"शहर की गलियाँ आईने बन गईं।",
			"परिचित दृश्यों और अपनी छवि पर भी अब भरोसा नहीं कर सकता था।",
			"किसी ने मुझसे फुसफुसाया, \"तुम्हारी आँखें तुम्हें धोखा देती हैं।\"",
			"और फिर, मैंने खुद पर भी संदेह करना शुरू कर दिया।"
		]
	}
} as const;
