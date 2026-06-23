export const scenario_desert_aurelia_28_02 = {
	"scenario_id": "desert_aurelia_28_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오아시스의 빛이 더욱 강렬해졌다.",
			"현실과 환영의 경계가 흐려지고 있었다.",
			"그곳에서, 시간을 잃은 자가 흐느끼고 있었다.",
			"절망의 노래는 멈추지 않았다."
		],
		"english": [
			"The light of the oasis intensified.",
			"The line between reality and illusion blurred.",
			"There, one who lost time wept.",
			"The song of despair did not cease."
		],
		"japanese": [
			"オアシスの光はさらに強くなった。",
			"現実と幻影の境界が曖昧になっていた。",
			"そこでは、時を失った者がすすり泣いていた。",
			"絶望の歌は止まらなかった。"
		],
		"chinese": [
			"绿洲的光芒愈发强烈。",
			"现实与幻象的界限正在模糊。",
			"在那里，一位迷失时间的人正在哭泣。",
			"绝望之歌并未停止。"
		],
		"french": [
			"La lumière de l'oasis s'intensifia.",
			"La frontière entre réalité et illusion s'estompait.",
			"Là, celui qui avait perdu le temps sanglotait.",
			"Le chant du désespoir ne s'arrêtait pas."
		],
		"spanish": [
			"La luz del oasis se intensificó.",
			"El límite entre la realidad y la ilusión se desdibujaba.",
			"Allí, el que perdió el tiempo sollozaba.",
			"La canción de la desesperación no cesaba."
		],
		"vietnamese": [
			"Ánh sáng ốc đảo càng lúc càng mạnh.",
			"Ranh giới giữa thực tại và ảo ảnh đang mờ dần.",
			"Ở đó, người đánh mất thời gian đang nức nở.",
			"Bài ca tuyệt vọng không ngừng lại."
		],
		"thai": [
			"แสงจากโอเอซิสทวีความรุนแรงขึ้น",
			"เส้นแบ่งระหว่างความจริงกับภาพลวงตาพร่าเลือนลง",
			"ณ ที่นั้น ผู้ที่สูญเสียเวลากำลังสะอื้น",
			"บทเพลงแห่งความสิ้นหวังไม่หยุดลง"
		],
		"hindi": [
			"नखलिस्तान की रोशनी और तेज़ हो गई।",
			"हकीकत और भ्रम की सीमा धुंधली होती जा रही थी।",
			"वहाँ, जिसने समय खो दिया था, रो रहा था।",
			"निराशा का गीत बंद नहीं हुआ।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "환영이 모래바람처럼 휘몰아쳤다. 방향을 가늠할 수 없었다.",
						"english": "Illusions swirled like a sandstorm. I couldn't tell direction.",
						"japanese": "幻影が砂嵐のように吹き荒れた。方向が分からなかった。",
						"chinese": "幻象如沙尘暴般席卷而来。我无法辨别方向。",
						"french": "Des illusions tourbillonnaient comme une tempête de sable. Impossible de distinguer la direction.",
						"spanish": "Las ilusiones se arremolinaban como una tormenta de arena. No podía determinar la dirección.",
						"vietnamese": "Ảo ảnh xoáy cuộn như bão cát. Không thể xác định phương hướng.",
						"thai": "ภาพลวงตาพัดวนราวพายุทราย ฉันไม่อาจบอกทิศทางได้",
						"hindi": "भ्रम रेत के तूफान की तरह घूम रहे थे। मैं दिशा का अनुमान नहीं लगा सका।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "점점 더 심해지고 있어… 여기가 대체 어디지?",
						"english": "It's getting worse... Where am I?",
						"japanese": "ますますひどくなってる… ここは一体どこなんだ？",
						"chinese": "越来越糟了… 这里到底是什么地方？",
						"french": "Ça s'aggrave... Mais où suis-je ?",
						"spanish": "Está empeorando... ¿Dónde estoy, exactamente?",
						"vietnamese": "Càng lúc càng tệ hơn… Rốt cuộc đây là đâu?",
						"thai": "มันแย่ลงเรื่อยๆ... ที่นี่มันที่ไหนกันแน่?",
						"hindi": "यह और भी बुरा होता जा रहा है... आखिर यह जगह कहाँ है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 게 뒤섞여 보여. 정신 차려야 해.",
						"english": "Everything looks mixed up. I need to focus.",
						"japanese": "全てがごちゃ混ぜに見える。しっかりしないと。",
						"chinese": "一切都混淆不清。我必须集中精神。",
						"french": "Tout semble confus. Je dois me ressaisir.",
						"spanish": "Todo parece mezclado. Necesito concentrarme.",
						"vietnamese": "Mọi thứ trông lộn xộn hết cả. Phải tỉnh táo lại.",
						"thai": "ทุกสิ่งดูสับสนวุ่นวาย ฉันต้องตั้งสติ",
						"hindi": "सब कुछ उलझा हुआ दिख रहा है। मुझे ध्यान केंद्रित करना होगा।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여긴… 어디지? 내 시계는… 멈춰있는데…",
						"english": "Where... am I? My clock... it's stopped...",
						"japanese": "ここは… どこだ？ 僕の時計は… 止まっているのに…",
						"chinese": "这里… 是哪里？我的手表… 停了…",
						"french": "Où... suis-je ? Mon horloge... s'est arrêtée...",
						"spanish": "¿Dónde... estoy? Mi reloj... está parado...",
						"vietnamese": "Đây… là đâu? Đồng hồ của tôi… đã dừng lại…",
						"thai": "ที่นี่... ที่ไหน? นาฬิกาของฉัน... หยุดเดินแล้ว...",
						"hindi": "मैं... कहाँ हूँ? मेरी घड़ी... रुक गई है..."
					},
					"speaker": "dune"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "당신… 괜찮아요?",
						"english": "Are you... alright?",
						"japanese": "あなた… 大丈夫ですか？",
						"chinese": "你… 没事吧？",
						"french": "Vous... allez bien ?",
						"spanish": "¿Estás... bien?",
						"vietnamese": "Bạn… có ổn không?",
						"thai": "คุณ... ไม่เป็นไรใช่ไหม?",
						"hindi": "क्या तुम... ठीक हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "…아니! 시간이… 흐르고 있어! 내 몸이… 늙어가고 있어!",
						"english": "...No! Time is... flowing! My body is... aging!",
						"japanese": "…いや！時間が…流れてる！僕の体が… 老いていってる！",
						"chinese": "…不！时间… 在流逝！我的身体… 正在老化！",
						"french": "...Non ! Le temps... s'écoule ! Mon corps... vieillit !",
						"spanish": "¡No! ¡El tiempo... está fluyendo! ¡Mi cuerpo... está envejeciendo!",
						"vietnamese": "…Không! Thời gian… đang trôi! Cơ thể tôi… đang lão hóa!",
						"thai": "...ไม่! เวลา... กำลังไหล! ร่างกายของฉัน... กำลังแก่ลง!",
						"hindi": "...नहीं! समय... बह रहा है! मेरा शरीर... बूढ़ा हो रहा है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 비석 조각이 모래 속에 박혀있었다. 닳아서 읽기 힘든 글씨에는 '금지된 의식'이라는 단어가 희미하게 보였다.",
						"english": "A fragment of an old monument was embedded in the sand. The worn, hard-to-read script faintly revealed the words \"Forbidden Ritual.\"",
						"japanese": "砂の中に古い石碑の破片が埋まっていた。摩耗して読みにくい文字には、「禁じられた儀式」という単語がかすかに見えた。",
						"chinese": "一块古老的石碑碎片嵌入沙中。磨损的字迹模糊不清，隐约可见“禁忌仪式”的字样。",
						"french": "Un fragment de stèle ancienne était enfoui dans le sable. Les inscriptions usées, difficiles à lire, laissaient faiblement transparaître les mots « Rituel Interdit ».",
						"spanish": "Un fragmento de un antiguo monumento estaba incrustado en la arena. La escritura desgastada y difícil de leer revelaba débilmente las palabras \"Ritual Prohibido\".",
						"vietnamese": "Một mảnh bia đá cũ kỹ cắm sâu trong cát. Những dòng chữ đã mòn, khó đọc, nhưng từ \"Nghi thức Cấm\" vẫn lờ mờ hiện ra.",
						"thai": "ชิ้นส่วนศิลาจารึกเก่าแก่จมอยู่ในทราย ตัวอักษรที่สึกกร่อนอ่านยาก เผยให้เห็นคำว่า \"พิธีกรรมต้องห้าม\" อย่างเลือนราง",
						"hindi": "रेत में एक पुराने स्मारक का टुकड़ा धंसा हुआ था। घिसे-पिटे, मुश्किल से पढ़े जाने वाले अक्षरों में 'निषिद्ध अनुष्ठान' शब्द अस्पष्ट रूप से दिखाई दे रहे थे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dune",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "난 여기서… 얼마나 있었을까? 가족의 얼굴도 가물가물해…",
						"english": "How long... have I been here? Even my family's faces are fading...",
						"japanese": "ここに…どれくらいいたんだろう？家族の顔もぼんやりしてきた…",
						"chinese": "我在这里…待了多久？连家人的面容都模糊了…",
						"french": "Combien de temps... suis-je resté ici ? Les visages de ma famille s'estompent aussi...",
						"spanish": "¿Cuánto tiempo... he estado aquí? Incluso los rostros de mi familia se desvanecen...",
						"vietnamese": "Mình đã ở đây... bao lâu rồi nhỉ? Đến cả gương mặt gia đình cũng mờ dần...",
						"thai": "ฉันอยู่ที่นี่มา... นานเท่าไหร่แล้วนะ? แม้แต่หน้าครอบครัวก็เลือนลางไปหมด...",
						"hindi": "मैं यहाँ... कितने समय से हूँ? मेरे परिवार के चेहरे भी धुंधले पड़ गए हैं..."
					},
					"speaker": "dune"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "노랫소리가 들려요… 희미하게…",
						"english": "I hear a song... faintly...",
						"japanese": "歌声が聞こえる…かすかに…",
						"chinese": "我听到了歌声…隐约地…",
						"french": "J'entends une chanson... faiblement...",
						"spanish": "Oigo una canción... débilmente...",
						"vietnamese": "Tôi nghe thấy tiếng hát... mờ nhạt...",
						"thai": "ได้ยินเสียงเพลง... แผ่วๆ...",
						"hindi": "मुझे एक गाना सुनाई दे रहा है... धुंधला सा..."
					}
				},
				{
					"speaker": "dune",
					"content": {
						"korean": "…내 노래. 잊혀지지 않는… 사랑의 노래.",
						"english": "...My song. An unforgettable... song of love.",
						"japanese": "…私の歌。忘れられない…愛の歌。",
						"chinese": "…我的歌。一首不会被遗忘的…爱之歌。",
						"french": "...Ma chanson. Une chanson d'amour... inoubliable.",
						"spanish": "...Mi canción. Una canción de amor... inolvidable.",
						"vietnamese": "...Bài hát của tôi. Một bài hát tình yêu... không thể quên.",
						"thai": "...เพลงของฉัน เพลงรัก... ที่ไม่มีวันลืม",
						"hindi": "...मेरा गीत। एक अविस्मरणीय... प्रेम गीत।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "하지만 가사가… 생각나지 않아… 흐흑…",
						"english": "But the lyrics... I can't remember... *sniff*",
						"japanese": "でも歌詞が…思い出せない…ううっ…",
						"chinese": "但歌词…我想不起来了…呜呜…",
						"french": "Mais les paroles... je ne m'en souviens plus... *sniff*",
						"spanish": "Pero la letra... no la recuerdo... *sollozo*",
						"vietnamese": "Nhưng lời bài hát... không nhớ được... *khụt khịt*",
						"thai": "แต่เนื้อเพลง... จำไม่ได้เลย... ฮือๆ...",
						"hindi": "लेकिन बोल... मुझे याद नहीं आ रहे... *सिसकियाँ*"
					},
					"speaker": "dune"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "…저 그림자! 내 시간을 훔쳐 간 저주받은 그림자!",
						"english": "...That shadow! The cursed shadow that stole my time!",
						"japanese": "…あの影！私の時間を奪った呪われた影！",
						"chinese": "…那个影子！那个偷走了我时间的被诅咒的影子！",
						"french": "...Cette ombre ! L'ombre maudite qui m'a volé mon temps !",
						"spanish": "...¡Esa sombra! ¡La sombra maldita que robó mi tiempo!",
						"vietnamese": "...Bóng tối đó! Cái bóng bị nguyền rủa đã đánh cắp thời gian của tôi!",
						"thai": "…เงาตนนั้น! เงาต้องสาปที่ขโมยเวลาของฉันไป!",
						"hindi": "...वह परछाई! वह शापित परछाई जिसने मेरा समय चुरा लिया!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "dune"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간은… 누구에게나 공평하게 흐르지 않지.",
						"english": "Time... doesn't flow equally for everyone.",
						"japanese": "時間は…誰にでも公平に流れるわけじゃない。",
						"chinese": "时间…并非对每个人都公平流逝。",
						"french": "Le temps... ne s'écoule pas équitablement pour tout le monde.",
						"spanish": "El tiempo... no fluye igual para todos.",
						"vietnamese": "Thời gian... không trôi công bằng với tất cả mọi người.",
						"thai": "เวลา... ไม่ได้ไหลอย่างเท่าเทียมกันสำหรับทุกคน",
						"hindi": "समय... सबके लिए समान रूप से नहीं बहता।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물러서!",
						"english": "Stand back!",
						"japanese": "下がれ！",
						"chinese": "退下！",
						"french": "Recule !",
						"spanish": "¡Retrocede!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हटो!"
					},
					"speaker": "character_any"
				},
				{
					"action": "exit",
					"type": "direction",
					"direction": "down",
					"speaker": "dune",
					"duration_ms": 400
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여길… 벗어나! 나처럼… 되지 마… 흐흑…",
						"english": "Get out... of here! Don't... end up like me... *sniff*",
						"japanese": "ここを…抜け出せ！私みたいに…なるな…ううっ…",
						"chinese": "离开这里…！别像我一样…呜呜…",
						"french": "Sors... d'ici ! Ne... deviens pas comme moi... *sniff*",
						"spanish": "¡Sal... de aquí! No... termines como yo... *sollozo*",
						"vietnamese": "Rời khỏi đây... đi! Đừng... trở thành như tôi... *khụt khịt*",
						"thai": "ออกไปจากที่นี่... อย่า... เป็นเหมือนฉันเลยนะ... ฮือๆ...",
						"hindi": "यहाँ से... निकल जाओ! मेरी तरह... मत बनो... *सिसकियाँ*"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것. 다음은 네 차례다.",
						"english": "Insignificant creature. You're next.",
						"japanese": "くだらないものめ。次は貴様の番だ。",
						"chinese": "微不足道的家伙。下一个就是你。",
						"french": "Créature insignifiante. Ton tour viendra.",
						"spanish": "Cosa insignificante. Tú eres el siguiente.",
						"vietnamese": "Đồ vô dụng. Kế tiếp là ngươi.",
						"thai": "สิ่งไร้ค่า. เจ้าคือรายต่อไป.",
						"hindi": "तुच्छ प्राणी। अगला नंबर तुम्हारा है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 흩어졌다. 환영은 잠시 주춤하는 듯했다.",
						"english": "The colossal shadow dispersed. The illusion seemed to falter for a moment.",
						"japanese": "巨大な影が散った。幻影は一時、ひるんだようだった。",
						"chinese": "巨大的阴影消散了。幻象似乎暂时退缩了。",
						"french": "L'ombre colossale s'est dispersée. L'illusion a semblé vaciller un instant.",
						"spanish": "La colosal sombra se dispersó. La ilusión pareció flaquear por un momento.",
						"vietnamese": "Bóng tối khổng lồ tan biến. Ảo ảnh dường như chùn bước một lúc.",
						"thai": "เงาขนาดยักษ์สลายไป ภาพลวงตาดูเหมือนจะหยุดชะงักชั่วครู่",
						"hindi": "विशाल छाया बिखर गई। भ्रम एक पल के लिए डगमगाया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크흑… 이것으로… 끝이 아니다… 더 깊은… 어둠이… {random_boss}를 기다린다…",
						"english": "Ugh… This is… not the end… A deeper… darkness… awaits {random_boss}…",
						"japanese": "くっ…これで…終わりではない…より深い…闇が…{random_boss}を待っている…",
						"chinese": "唔…这不是…结束…更深的…黑暗…正等待着{random_boss}…",
						"french": "Ugh… Ce n'est… pas la fin… Une obscurité… plus profonde… attend {random_boss}…",
						"spanish": "Ugh… Esto… no es el fin… Una oscuridad… más profunda… espera a {random_boss}…",
						"vietnamese": "Khụ… Đây… chưa phải là kết thúc… Một bóng tối… sâu hơn… đang chờ đợi {random_boss}…",
						"thai": "อึก... นี่ไม่ใช่... จุดจบ... ความมืดมิด... ที่ลึกซึ้งกว่า... กำลังรอ {random_boss} อยู่...",
						"hindi": "उह... यह... अंत नहीं है... एक गहरा... अंधकार... {random_boss} का इंतजार कर रहा है..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "다음은… 네 차례다, {random_boss}.",
						"english": "Next… it's your turn, {random_boss}.",
						"japanese": "次は…お前の番だ、{random_boss}。",
						"chinese": "接下来…轮到你了，{random_boss}。",
						"french": "Ensuite… c'est ton tour, {random_boss}.",
						"spanish": "Luego… es tu turno, {random_boss}.",
						"vietnamese": "Tiếp theo… đến lượt ngươi đấy, {random_boss}.",
						"thai": "ต่อไป... ตาของเจ้าแล้ว, {random_boss}",
						"hindi": "अगला... तुम्हारी बारी है, {random_boss}।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아직 갈 길이 멀었다. 오아시스의 잔혹함은… 이제 시작이었다.",
						"english": "There's still a long way to go. The cruelty of the Oasis… had only just begun.",
						"japanese": "まだ道は遠い。オアシスの残酷さは…始まったばかりだった。",
						"chinese": "前路漫漫。绿洲的残酷…才刚刚开始。",
						"french": "Le chemin est encore long. La cruauté de l'Oasis… ne faisait que commencer.",
						"spanish": "Aún queda mucho camino. La crueldad del Oasis… apenas comenzaba.",
						"vietnamese": "Vẫn còn một chặng đường dài. Sự tàn khốc của Ốc đảo… chỉ mới bắt đầu.",
						"thai": "หนทางยังอีกยาวไกล ความโหดร้ายของโอเอซิส... เพิ่งจะเริ่มต้นขึ้นเท่านั้น",
						"hindi": "अभी लंबा रास्ता तय करना है। ओएसिस की क्रूरता... अभी शुरू हुई थी।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시간은… 기다려주지 않아. 너의 희망도… 곧 사라질 것이다.",
						"english": "Time… waits for no one. Your hope too… will soon vanish.",
						"japanese": "時は…待ってくれない。お前の希望も…すぐに消え去るだろう。",
						"chinese": "时间…不等人。你的希望也…很快就会消失。",
						"french": "Le temps… n'attend personne. Ton espoir aussi… disparaîtra bientôt.",
						"spanish": "El tiempo… no espera a nadie. Tu esperanza también… pronto desaparecerá.",
						"vietnamese": "Thời gian… không chờ đợi ai. Hy vọng của ngươi… cũng sẽ sớm tan biến.",
						"thai": "เวลา... ไม่เคยรอใคร ความหวังของเจ้า... ก็จะหายไปในไม่ช้า",
						"hindi": "समय... किसी का इंतजार नहीं करता। तुम्हारी आशा भी... जल्द ही मिट जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's… not over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est… pas encore fini !",
						"spanish": "¡Aún… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영은 다시 주인공을 집어삼켰다. 끝없는 절망 속에서… 다시 일어설 수 있을까.",
						"english": "The illusion swallowed the protagonist once more. In endless despair… can they rise again?",
						"japanese": "幻影は再び主人公を飲み込んだ。果てなき絶望の中…再び立ち上がれるか。",
						"chinese": "幻影再次吞噬了主人公。在无尽的绝望中…他能再次站起来吗？",
						"french": "L'illusion a de nouveau englouti le protagoniste. Dans un désespoir sans fin… pourra-t-il se relever ?",
						"spanish": "La ilusión engulló al protagonista una vez más. En la desesperación infinita… ¿podrá levantarse de nuevo?",
						"vietnamese": "Ảo ảnh lại nuốt chửng nhân vật chính. Trong tuyệt vọng vô tận… liệu họ có thể đứng dậy lần nữa không?",
						"thai": "ภาพลวงตากลืนกินตัวเอกอีกครั้ง ในความสิ้นหวังที่ไร้ที่สิ้นสุด... เขาจะลุกขึ้นยืนได้อีกครั้งหรือไม่",
						"hindi": "भ्रम ने नायक को फिर से निगल लिया। अंतहीन निराशा में... क्या वे फिर से उठ पाएंगे?"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "시간에 갇힌 자들의 절규가… 달콤하군.",
						"english": "The screams of those trapped in time... so sweet.",
						"japanese": "時の檻に囚われし者の叫び…甘美だ。",
						"chinese": "被时间困住之人的绝叫…真甜美。",
						"french": "Les cris de ceux piégés dans le temps... si doux.",
						"spanish": "Los gritos de los atrapados en el tiempo... qué dulces.",
						"vietnamese": "Tiếng thét của những kẻ mắc kẹt trong thời gian… thật ngọt ngào.",
						"thai": "เสียงกรีดร้องของผู้ที่ถูกจองจำในกาลเวลา... ช่างหอมหวาน.",
						"hindi": "समय में फंसे लोगों की चीखें... कितनी मधुर हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 희생자는 없어!",
						"english": "No more sacrifices!",
						"japanese": "これ以上、犠牲者は出させない！",
						"chinese": "不会有更多牺牲者了！",
						"french": "Plus de sacrifices !",
						"spanish": "¡No más sacrificios!",
						"vietnamese": "Không còn nạn nhân nào nữa!",
						"thai": "จะไม่มีผู้สังเวยอีกแล้ว!",
						"hindi": "और कोई बलि नहीं!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것. 너도 곧… 환영의 일부가 될 뿐.",
						"english": "Foolish one. You too will soon… become part of the illusion.",
						"japanese": "愚かな者め。お前もすぐ…幻影の一部となるだろう。",
						"chinese": "愚蠢之辈。你很快也会…成为幻影的一部分。",
						"french": "Insensé. Toi aussi, tu feras bientôt… partie de l'illusion.",
						"spanish": "Tonto. Tú también pronto… serás parte de la ilusión.",
						"vietnamese": "Kẻ ngu ngốc. Ngươi cũng sẽ sớm… trở thành một phần của ảo ảnh thôi.",
						"thai": "เจ้าผู้โง่เขลา เจ้าเองก็จะกลายเป็น... ส่วนหนึ่งของภาพลวงตาในไม่ช้า",
						"hindi": "मूर्ख। तुम भी जल्द ही... भ्रम का हिस्सा बन जाओगे।"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
