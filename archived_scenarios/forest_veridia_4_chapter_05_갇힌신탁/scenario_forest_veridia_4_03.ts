export const scenario_forest_veridia_4_03 = {
	"scenario_id": "forest_veridia_4_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ivy": {
			"id": "mon_d1c759f3-74f8-42b7-ba16-c705649f006f",
			"name": {
				"korean": "아이비",
				"english": "Ivy",
				"japanese": "アイビー",
				"chinese": "艾薇",
				"french": "Ivy",
				"spanish": "Ivy",
				"vietnamese": "Ivy",
				"thai": "ไอวี่",
				"hindi": "आइवी"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/654fde54-6029-4601-b4a8-0578f00df900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6ee8738d-0e14-4f8d-d04d-c934b0fff000/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "수호자의 성소는 고요했다. 빛이 모든 것을 감싸고 있었다.",
						"english": "The Guardian's sanctuary was quiet. Light enveloped everything.",
						"japanese": "守護者の聖所は静寂に包まれていた。光がすべてを覆っていた。",
						"chinese": "守护者的圣所一片寂静。光芒笼罩着一切。",
						"french": "Le sanctuaire du Gardien était silencieux. La lumière enveloppait tout.",
						"spanish": "El santuario del Guardián estaba en silencio. La luz lo envolvía todo.",
						"vietnamese": "Thánh địa của Hộ Thần tĩnh lặng. Ánh sáng bao trùm vạn vật.",
						"thai": "สถานศักดิ์สิทธิ์ของผู้พิทักษ์เงียบสงบ แสงสว่างห่อหุ้มทุกสิ่ง",
						"hindi": "संरक्षक का अभयारण्य शांत था। प्रकाश ने सब कुछ घेर रखा था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 평화… 왠지 싸늘해.",
						"english": "This peace… it feels strangely cold.",
						"japanese": "この平和… どこか冷たい。",
						"chinese": "这种平静……总觉得有点冷。",
						"french": "Cette paix… elle est étrangement froide.",
						"spanish": "Esta paz... se siente extrañamente fría.",
						"vietnamese": "Sự bình yên này… sao lại lạnh lẽo thế.",
						"thai": "ความสงบนี้... ทำไมถึงเย็นเยียบแปลกๆ",
						"hindi": "यह शांति... अजीब सी ठंडक महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"content": {
						"korean": "저 빛… 따뜻해야 하는데, 뭔가 이상해.",
						"english": "That light… it should be warm, but something's off.",
						"japanese": "あの光… 温かいはずなのに、何かおかしい。",
						"chinese": "那光……应该很温暖，但总觉得哪里不对劲。",
						"french": "Cette lumière… elle devrait être chaude, mais quelque chose cloche.",
						"spanish": "Esa luz... debería ser cálida, pero algo anda mal.",
						"vietnamese": "Ánh sáng kia… lẽ ra phải ấm áp, nhưng có gì đó là lạ.",
						"thai": "แสงนั่น... ควรจะอบอุ่นสิ แต่ทำไมรู้สึกแปลกๆ",
						"hindi": "वह रोशनी... गर्म होनी चाहिए, लेकिन कुछ अजीब है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "이상하다니?",
						"english": "Strange, you say?",
						"japanese": "おかしいって？",
						"chinese": "奇怪？",
						"french": "Étrange, tu dis ?",
						"spanish": "¿Extraño, dices?",
						"vietnamese": "Lạ á?",
						"thai": "แปลกยังไง?",
						"hindi": "अजीब कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivy"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "축복받은 사람들을 봤어? 다들 멍한 표정으로 시들어가.",
						"english": "Have you seen the blessed ones? They're all withering away with vacant expressions.",
						"japanese": "祝福された者たちを見た？皆、虚ろな顔で朽ちていく。",
						"chinese": "你看到那些被祝福的人了吗？他们都眼神空洞地枯萎了。",
						"french": "As-tu vu les bénis ? Ils se flétrissent tous avec des expressions vides.",
						"spanish": "¿Has visto a los bendecidos? Todos se están marchitando con expresiones vacías.",
						"vietnamese": "Cậu thấy những người được ban phước chưa? Ai nấy đều héo mòn với vẻ mặt trống rỗng.",
						"thai": "คุณเห็นพวกที่ได้รับพรไหม? พวกเขากำลังเหี่ยวเฉาไปพร้อมกับแววตาว่างเปล่า",
						"hindi": "क्या तुमने धन्य लोगों को देखा? वे सब खाली अभिव्यक्तियों के साथ मुरझा रहे हैं।"
					},
					"speaker": "ivy"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "평온해 보였는데… 착각이었나?",
						"english": "They seemed peaceful… was I mistaken?",
						"japanese": "安らかに見えたのに… 錯覚だったのか？",
						"chinese": "他们看起来很平静……是我错觉了吗？",
						"french": "Ils semblaient paisibles… Étais-je dans l'erreur ?",
						"spanish": "Parecían pacíficos… ¿Me equivoqué?",
						"vietnamese": "Họ trông có vẻ bình yên… Hay đó chỉ là ảo giác?",
						"thai": "ดูสงบดีนะ... หรือว่าเป็นแค่ความคิดไปเอง?",
						"hindi": "वे शांत दिख रहे थे... क्या मुझे गलतफहमी हुई थी?"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "빛이 분명 따뜻한데… 가까이 갈수록 한기가 느껴져.",
						"english": "The light is clearly warm... yet the closer I get, the colder it feels.",
						"japanese": "光は確かに温かいのに… 近づくほどに寒気がする。",
						"chinese": "光明明是温暖的……但越靠近，越感到寒意。",
						"french": "La lumière est chaude, et pourtant... plus je m'approche, plus je ressens un froid.",
						"spanish": "La luz es claramente cálida... pero cuanto más me acerco, más siento un escalofrío.",
						"vietnamese": "Ánh sáng rõ ràng là ấm áp... nhưng càng lại gần, càng cảm thấy lạnh lẽo.",
						"thai": "แสงนั้นอบอุ่นชัดๆ... แต่ยิ่งเข้าใกล้เท่าไหร่ ยิ่งรู้สึกหนาวจับใจ",
						"hindi": "रोशनी बेशक गर्म है… लेकिन जितना करीब जाता हूँ, उतनी ही ठंडक महसूस होती है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "마치… 생명력을 빨아들이는 것 같아.",
						"english": "It feels like... it's draining life force.",
						"japanese": "まるで…生命力を吸い取っているようだ。",
						"chinese": "仿佛……在吸取生命力。",
						"french": "On dirait... qu'elle aspire la force vitale.",
						"spanish": "Es como si... estuviera absorbiendo la fuerza vital.",
						"vietnamese": "Cứ như... nó đang hút lấy sinh lực.",
						"thai": "ราวกับว่า... มันกำลังดูดกลืนพลังชีวิต",
						"hindi": "मानो... यह जीवन शक्ति सोख रहा हो।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivy",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "수호자의 목소리가 울려 퍼졌다. 예언인 듯, 비명인 듯.",
						"english": "The Guardian's voice echoed. Like a prophecy, like a scream.",
						"japanese": "守護者の声が響き渡った。予言のようでもあり、悲鳴のようでもあった。",
						"chinese": "守护者的声音回荡着。像是预言，又像是尖叫。",
						"french": "La voix du Gardien résonna. Tel une prophétie, tel un cri.",
						"spanish": "La voz del Guardián resonó. Como una profecía, como un grito.",
						"vietnamese": "Giọng nói của Người bảo vệ vang vọng. Như một lời tiên tri, như một tiếng thét.",
						"thai": "เสียงของผู้พิทักษ์ดังก้อง ราวกับคำพยากรณ์ ราวกับเสียงกรีดร้อง",
						"hindi": "संरक्षक की आवाज़ गूँज उठी। जैसे कोई भविष्यवाणी, जैसे कोई चीख।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝내… 달라….",
						"english": "...End... this...",
						"japanese": "「…終わらせて…くれ…。」",
						"chinese": "“…结束……吧……”",
						"french": "...Mettez-y... fin...",
						"spanish": "...Termina... con esto...",
						"vietnamese": "...Hãy... kết thúc...",
						"thai": "...จบ...มันที...",
						"hindi": "...इसे... खत्म करो..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "방금… 뭐라고 한 거지?",
						"english": "What did it... just say?",
						"japanese": "今…何て言ったんだ？",
						"chinese": "刚才…它说了什么？",
						"french": "Qu'est-ce que... ça vient de dire ?",
						"spanish": "¿Qué... acaba de decir?",
						"vietnamese": "Vừa rồi... nó nói gì vậy?",
						"thai": "เมื่อกี้... มันพูดว่าอะไรนะ?",
						"hindi": "अभी... यह क्या कह रहा था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivy",
					"content": {
						"korean": "분명히… '끝내달라'고 했어.",
						"english": "It definitely said... 'End this.'",
						"japanese": "確かに…「終わらせてくれ」と言った。",
						"chinese": "它 분명히…说了“结束它”。",
						"french": "Ça a clairement dit... 'Mettez-y fin.'",
						"spanish": "Claramente dijo... 'Termina con esto'.",
						"vietnamese": "Rõ ràng... nó đã nói 'kết thúc nó'.",
						"thai": "มันพูดชัดเจนว่า... 'จบมันที'",
						"hindi": "इसने साफ कहा... 'इसे खत्म करो।'"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "예언이라기엔 너무 섬뜩해.",
						"english": "Too eerie to be a prophecy.",
						"japanese": "予言にしては不気味すぎる。",
						"chinese": "说它是预言，未免太诡异了。",
						"french": "Trop sinistre pour être une prophétie.",
						"spanish": "Demasiado espeluznante para ser una profecía.",
						"vietnamese": "Quá rùng rợn để gọi là lời tiên tri.",
						"thai": "มันน่าขนลุกเกินกว่าจะเป็นคำพยากรณ์",
						"hindi": "भविष्यवाणी कहने के लिए यह बहुत डरावना है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"emotion": "base",
					"content": {
						"korean": "(낡은 제단을 가리키며) 이봐! 여기… 이걸 봐.",
						"english": "(Pointing at the old altar) Hey! Look... look at this.",
						"japanese": "（古い祭壇を指さしながら）おい！ここ…これを見ろ。",
						"chinese": "（指着老旧的祭坛）喂！这里……看这个。",
						"french": "(Désignant l'ancien autel) Hé ! Regarde... regarde ça.",
						"spanish": "(Señalando el viejo altar) ¡Oye! Aquí... mira esto.",
						"vietnamese": "(Chỉ vào bàn thờ cũ) Này! Chỗ này... nhìn cái này đi.",
						"thai": "(ชี้ไปที่แท่นบูชาเก่า) เฮ้! ดูนี่... ดูนี่สิ",
						"hindi": "(पुराने वेदी की ओर इशारा करते हुए) अरे! यहाँ... इसे देखो।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 제단에 새겨진 글씨. 아주 작은 손으로 긁어낸 흔적이었다.",
						"english": "Letters carved into the old altar. Traces scratched out by very small hands.",
						"japanese": "古い祭壇に刻まれた文字。ごく小さな手で引っ掻いた跡だった。",
						"chinese": "刻在老旧祭坛上的文字。那是用很小的手刮刻出来的痕迹。",
						"french": "Des lettres gravées sur l'ancien autel. Des traces grattées par de très petites mains.",
						"spanish": "Letras grabadas en el viejo altar. Eran marcas arañadas por manos muy pequeñas.",
						"vietnamese": "Chữ khắc trên bàn thờ cũ. Dấu vết được cào bởi những bàn tay rất nhỏ.",
						"thai": "ตัวอักษรที่แกะสลักบนแท่นบูชาเก่า ร่องรอยที่ถูกขีดข่วนด้วยมือเล็กๆ",
						"hindi": "पुराने वेदी पर खुदे हुए अक्षर। ये बहुत छोटे हाथों से खरोंचने के निशान थे।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "'…나를… 구해줘….'",
						"english": "'...Save... me...'",
						"japanese": "「…私を…助けて…」",
						"chinese": "“……救救……我……”",
						"french": "...Sauve... moi...",
						"spanish": "...Sálva... me...",
						"vietnamese": "...Cứu... tôi...",
						"thai": "...ช่วย...ฉันด้วย...",
						"hindi": "...मुझे... बचाओ..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이건 기도문이 아니야. 구조 요청이야!",
						"english": "This isn't a prayer. It's a cry for help!",
						"japanese": "これは祈りじゃない。助けを求める声だ！",
						"chinese": "这不是祷告。这是求救！",
						"french": "Ce n'est pas une prière. C'est un appel à l'aide !",
						"spanish": "Esto no es una oración. ¡Es una llamada de auxilio!",
						"vietnamese": "Đây không phải là lời cầu nguyện. Đây là lời kêu cứu!",
						"thai": "นี่ไม่ใช่คำอธิษฐาน นี่คือเสียงร้องขอความช่วยเหลือ!",
						"hindi": "यह कोई प्रार्थना नहीं। यह मदद की पुकार है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_2"
				},
				{
					"speaker": "ivy",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이 축복 뒤에… 누군가 갇혀 있어.",
						"english": "Behind this blessing... someone is trapped.",
						"japanese": "この祝福の裏に…誰かが囚われている。",
						"chinese": "在这祝福背后……有人被困住了。",
						"french": "Derrière cette bénédiction... quelqu'un est piégé.",
						"spanish": "Detrás de esta bendición... alguien está atrapado.",
						"vietnamese": "Đằng sau lời chúc phúc này... có người đang bị mắc kẹt.",
						"thai": "เบื้องหลังพรนี้... มีบางคนถูกขังอยู่",
						"hindi": "इस आशीर्वाद के पीछे... कोई फंसा हुआ है।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 흩어지자, 수호자의 빛이 일렁였다.",
						"english": "As the colossal shadow dispersed, the Guardian's light flickered.",
						"japanese": "巨大な影が散ると、守護者の光が揺らめいた。",
						"chinese": "巨大的影子散去，守护者的光芒闪烁着。",
						"french": "Alors que l'ombre colossale se dispersait, la lumière du Gardien vacilla.",
						"spanish": "Mientras la sombra colosal se dispersaba, la luz del Guardián parpadeó.",
						"vietnamese": "Khi cái bóng khổng lồ tan biến, ánh sáng của Người Bảo Hộ lung linh.",
						"thai": "เมื่อเงาขนาดมหึมากระจัดกระจายไป แสงของผู้พิทักษ์ก็ริบหรี่ลง",
						"hindi": "जैसे ही विशाल छाया छितरी, संरक्षक की रोशनी टिमटिमा उठी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아직… 끝나지 않았어…. 수호자의… 고통은….",
						"english": "...It's not... over yet... The Guardian's... suffering...",
						"japanese": "…まだ…終わってない…。守護者の…苦痛は…。",
						"chinese": "……还没……结束……守护者的……痛苦……",
						"french": "...Ce n'est pas... encore fini... La souffrance du Gardien...",
						"spanish": "...Aún no... ha terminado... El sufrimiento del Guardián...",
						"vietnamese": "...Vẫn chưa... kết thúc... Nỗi đau của Người Bảo Hộ...",
						"thai": "...ยัง...ไม่จบ...ความทุกข์ทรมาน...ของผู้พิทักษ์...",
						"hindi": "...अभी... खत्म नहीं हुआ है... संरक्षक का... दर्द..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝이 아니라고? 그럼 대체…?",
						"english": "Not the end? Then what...?",
						"japanese": "終わりじゃないだと？じゃあ一体…？",
						"chinese": "还没结束？那到底……？",
						"french": "Pas la fin ? Alors quoi... ?",
						"spanish": "¿No es el final? Entonces, ¿qué...?",
						"vietnamese": "Chưa phải kết thúc sao? Vậy thì rốt cuộc...?",
						"thai": "ยังไม่จบเหรอ? แล้วมัน...?",
						"hindi": "खत्म नहीं हुआ? तो फिर क्या...?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						4
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ivy"
				},
				{
					"speaker": "ivy",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 빛이… 더 강해지고 있어. 수호자의 고통이 저 안에….",
						"english": "That light... is growing stronger. The Guardian's suffering is within it...",
						"japanese": "あの光が…さらに強くなっている。守護者の苦痛があの中に…。",
						"chinese": "那光芒……变得更强了。守护者的痛苦就在其中……",
						"french": "Cette lumière... devient plus forte. La souffrance du Gardien est en elle...",
						"spanish": "Esa luz... se está volviendo más fuerte. El sufrimiento del Guardián está dentro de ella...",
						"vietnamese": "Ánh sáng đó... đang mạnh hơn. Nỗi đau của Người Bảo Hộ đang ở trong đó...",
						"thai": "แสงนั่น...กำลังแข็งแกร่งขึ้น ความทุกข์ทรมานของผู้พิทักษ์อยู่ในนั้น...",
						"hindi": "वह रोशनी... और मजबूत हो रही है। संरक्षक का दर्द उसके अंदर है..."
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 나무의 심장이 고동치기 시작했다. 숲의 진정한 고통이 깨어나는 듯했다.",
						"english": "The heart of the great tree began to pulsate. It felt as if the forest's true suffering was awakening.",
						"japanese": "巨大な木の心臓が脈打ち始めた。森の真の苦痛が目覚めるかのようだった。",
						"chinese": "巨树之心开始跳动。仿佛森林真正的痛苦正在苏醒。",
						"french": "Le cœur de l'arbre géant commença à battre. On aurait dit que la véritable souffrance de la forêt s'éveillait.",
						"spanish": "El corazón del gran árbol comenzó a latir. Parecía como si el verdadero sufrimiento del bosque estuviera despertando.",
						"vietnamese": "Trái tim của cây cổ thụ vĩ đại bắt đầu đập. Cứ như thể nỗi đau thật sự của khu rừng đang thức tỉnh.",
						"thai": "หัวใจของต้นไม้ยักษ์เริ่มเต้นราวกับว่าความทุกข์ทรมานที่แท้จริงของป่ากำลังตื่นขึ้น",
						"hindi": "विशाल वृक्ष का हृदय धड़कने लगा। ऐसा लगा मानो वन का सच्चा कष्ट जागृत हो रहा हो।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "수호자의 빛이 탐험대를 집어삼켰다.",
						"english": "The Guardian's light devoured the expedition party.",
						"japanese": "守護者の光が探検隊を飲み込んだ。",
						"chinese": "守护者的光芒吞噬了探险队。",
						"french": "La lumière du Gardien engloutit l'expédition.",
						"spanish": "La luz del Guardián devoró al grupo de expedición.",
						"vietnamese": "Ánh sáng của Kẻ Hộ Vệ đã nuốt chửng đoàn thám hiểm.",
						"thai": "แสงของผู้พิทักษ์กลืนกินคณะสำรวจ",
						"hindi": "संरक्षक के प्रकाश ने अभियान दल को निगल लिया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "나약한 자들이여. 너희에겐 이 자비를 이해할 자격이 없다.",
						"english": "Weaklings. You are not worthy to comprehend this mercy.",
						"japanese": "弱き者たちよ。お前たちにこの慈悲を理解する資格はない。",
						"chinese": "弱者们。你们不配理解这份仁慈。",
						"french": "Faibles. Vous n'êtes pas dignes de comprendre cette miséricorde.",
						"spanish": "Débiles. No sois dignos de comprender esta misericordia.",
						"vietnamese": "Những kẻ yếu đuối. Các ngươi không xứng đáng hiểu được lòng nhân từ này.",
						"thai": "พวกอ่อนแอเอ๋ย พวกเจ้าไม่คู่ควรที่จะเข้าใจความเมตตานี้",
						"hindi": "कमज़ोरों। तुम इस दया को समझने के लायक नहीं हो।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직… 끝나지 않았어! 진실을 밝혀낼 거야!",
						"english": "Ugh… It's not over yet! I'll uncover the truth!",
						"japanese": "くっ…まだ…終わってない！真実を暴いてやる！",
						"chinese": "呃…还没…没完！我会揭示真相的！",
						"french": "Argh… Ce n'est pas encore fini ! Je découvrirai la vérité !",
						"spanish": "Ugh… ¡Todavía no ha terminado! ¡Revelaré la verdad!",
						"vietnamese": "Khụ… Vẫn… chưa kết thúc! Ta sẽ phơi bày sự thật!",
						"thai": "อึก… ยัง… ไม่จบ! ฉันจะเปิดเผยความจริง!",
						"hindi": "उफ़… अभी… ख़त्म नहीं हुआ है! मैं सच का खुलासा करूँगा!"
					},
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 수호자의 힘을 빌린 존재였다.",
						"english": "A colossal shadow blocked the path. It was a being wielding the Guardian's power.",
						"japanese": "巨大な影が道を阻んだ。それは守護者の力を借りた存在だった。",
						"chinese": "一个巨大的影子挡住了去路。那是一个借用守护者力量的存在。",
						"french": "Une ombre colossale bloquait le chemin. C'était un être maniant le pouvoir du Gardien.",
						"spanish": "Una sombra colosal bloqueó el camino. Era un ser que empuñaba el poder del Guardián.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường. Đó là một thực thể mượn sức mạnh của Người Bảo Hộ.",
						"thai": "เงาขนาดมหึมาขวางเส้นทางอยู่ มันคือสิ่งมีชีวิตที่ยืมพลังของผู้พิทักษ์มา",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह एक ऐसा प्राणी था जो संरक्षक की शक्ति का उपयोग कर रहा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 이 숲의 평화를 깨려 하는가?",
						"english": "Dare you disturb the peace of this forest?",
						"japanese": "この森の平和を乱そうというのか？",
						"chinese": "你竟敢打破这片森林的宁静？",
						"french": "Oses-tu troubler la paix de cette forêt ?",
						"spanish": "¿Te atreves a perturbar la paz de este bosque?",
						"vietnamese": "Ngươi dám phá vỡ sự bình yên của khu rừng này sao?",
						"thai": "กล้าดียังไงมาทำลายความสงบสุขของป่าแห่งนี้?",
						"hindi": "क्या तुम इस जंगल की शांति भंग करने की हिम्मत करते हो?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "평화? 당신이 가둔 희생자들의 비명으로 이룬 평화잖아!",
						"english": "Peace? This peace is built on the screams of your trapped victims!",
						"japanese": "平和？それはお前が閉じ込めた犠牲者たちの悲鳴で築かれた平和じゃないか！",
						"chinese": "和平？这和平是建立在你囚禁的受害者们的尖叫声之上的！",
						"french": "La paix ? Cette paix est bâtie sur les cris de tes victimes piégées !",
						"spanish": "¿Paz? ¡Esta paz está construida sobre los gritos de tus víctimas atrapadas!",
						"vietnamese": "Bình yên? Sự bình yên này được xây dựng từ tiếng la hét của những nạn nhân bị ngươi giam cầm!",
						"thai": "ความสงบสุข? ความสงบสุขนี้มันสร้างขึ้นจากเสียงกรีดร้องของเหยื่อที่เจ้ากักขังไว้ไม่ใช่หรือไง!",
						"hindi": "शांति? यह शांति तुम्हारे फंसे हुए पीड़ितों की चीखों पर बनी है!"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "무지한 자여. 이 또한, 자비다.",
						"english": "Ignorant one. This, too, is mercy.",
						"japanese": "無知な者よ。これもまた、慈悲なのだ。",
						"chinese": "无知者。这，亦是慈悲。",
						"french": "Ignorant. Ceci, aussi, est miséricorde.",
						"spanish": "Ignorante. Esto, también, es misericordia.",
						"vietnamese": "Kẻ ngu muội. Đây cũng là lòng thương xót.",
						"thai": "ผู้โง่เขลา นี่ก็คือความเมตตาเช่นกัน",
						"hindi": "अज्ञानी। यह भी दया है।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲은 길 잃은 자들에게 안식과 예언을 약속했다.",
			"수호자의 축복은 평온을 가져다주었지만, 그 이면에는 알 수 없는 대가가 있었다.",
			"순례자들은 공허한 눈으로 시들어갔고, 빛은 점차 한기로 변했다.",
			"이 숲의 자비는, 과연 축복일까 저주일까."
		],
		"english": [
			"The forest promised rest and prophecy to the lost.",
			"The Guardian's blessing brought serenity, but beneath it lay an unknown price.",
			"Pilgrims withered with hollow eyes, and the light slowly turned to chill.",
			"Is the mercy of this forest truly a blessing, or a curse?"
		],
		"japanese": [
			"森は道に迷った者に安息と予言を約束した。",
			"守護者の祝福は安穏をもたらしたが、その裏には知られざる代償があった。",
			"巡礼者たちは虚ろな目で朽ちていき、光は次第に冷気へと変わった。",
			"この森の慈悲は、果たして祝福か、それとも呪いか。"
		],
		"chinese": [
			"森林向迷失者承诺了安宁与预言。",
			"守护者的祝福带来了宁静，但其背后却隐藏着未知的代价。",
			"朝圣者们眼神空洞地枯萎，光芒逐渐令人寒栗。",
			"这片森林的仁慈，究竟是祝福还是诅咒？"
		],
		"french": [
			"La forêt promettait repos et prophétie aux égarés.",
			"La bénédiction du Gardien apportait la sérénité, mais un prix inconnu se cachait derrière.",
			"Les pèlerins se flétrissaient les yeux vides, et la lumière se mua peu à peu en froid.",
			"La miséricorde de cette forêt est-elle une bénédiction ou une malédiction ?"
		],
		"spanish": [
			"El bosque prometía descanso y profecía a los perdidos.",
			"La bendición del Guardián trajo serenidad, pero detrás de ella yacía un precio desconocido.",
			"Los peregrinos se marchitaban con ojos vacíos, y la luz se convirtió gradualmente en un frío.",
			"¿Es la misericordia de este bosque realmente una bendición, o una maldición?"
		],
		"vietnamese": [
			"Rừng hứa hẹn sự yên nghỉ và lời tiên tri cho những kẻ lạc lối.",
			"Phúc lành của Hộ Thần mang lại sự bình yên, nhưng ẩn sau đó là một cái giá không thể biết.",
			"Những người hành hương héo mòn với đôi mắt trống rỗng, và ánh sáng dần biến thành giá lạnh.",
			"Lòng từ bi của khu rừng này, rốt cuộc là phước lành hay lời nguyền?"
		],
		"thai": [
			"ป่าให้คำมั่นถึงการพักผ่อนและคำทำนายแก่ผู้หลงทาง",
			"พรของผู้พิทักษ์นำมาซึ่งความสงบ แต่เบื้องหลังกลับมีราคาที่ไม่อาจรู้ได้",
			"ผู้แสวงบุญเหี่ยวเฉาลงด้วยดวงตาที่ว่างเปล่า และแสงสว่างก็ค่อยๆ กลายเป็นความหนาวเหน็บ",
			"ความเมตตาของป่านี้ แท้จริงแล้วคือพรหรือคำสาปกันแน่"
		],
		"hindi": [
			"वन ने भटके हुए लोगों को आराम और भविष्यवाणी का वादा किया।",
			"संरक्षक का आशीर्वाद शांति लाया, लेकिन उसके पीछे एक अज्ञात कीमत छिपी थी।",
			"तीर्थयात्री खोखली आँखों से मुरझा गए, और प्रकाश धीरे-धीरे ठंडक में बदल गया।",
			"इस वन की दया, वास्तव में आशीर्वाद है या अभिशाप?"
		]
	}
} as const;
