export const scenario_snowy_fluffymenace_53_02 = {
	"scenario_id": "snowy_fluffymenace_53_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"type": "speech",
					"content": {
						"korean": "끝없는 눈보라 속, 희미한 오두막이 보였다.",
						"english": "Amidst the endless blizzard, a faint hut appeared.",
						"japanese": "果てしない吹雪の中、おぼろげな小屋が見えた。",
						"chinese": "无尽的暴风雪中，一座模糊的小屋出现了。",
						"french": "Au milieu du blizzard sans fin, une cabane indistincte apparut.",
						"spanish": "En medio de la ventisca interminable, una cabaña tenue apareció.",
						"vietnamese": "Giữa trận bão tuyết bất tận, một túp lều mờ ảo hiện ra.",
						"thai": "ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด กระท่อมลางๆ ปรากฏขึ้น",
						"hindi": "अंतहीन बर्फीले तूफान के बीच, एक धुंधली झोपड़ी दिखाई दी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 환영인가…",
						"english": "Another illusion...?",
						"japanese": "また幻影か…",
						"chinese": "又是幻觉吗……",
						"french": "Une autre illusion...?",
						"spanish": "¿Otra ilusión...?",
						"vietnamese": "Lại là một ảo ảnh khác sao...?",
						"thai": "ภาพลวงตาอีกแล้วหรือ...",
						"hindi": "एक और भ्रम...?"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "길을 잃은 자여, 어서 들어오게!",
						"english": "Lost soul, come in!",
						"japanese": "道に迷った者よ、さあ入るがよい！",
						"chinese": "迷途之人，快进来！",
						"french": "Âme perdue, entre vite !",
						"spanish": "¡Alma perdida, entra!",
						"vietnamese": "Người lạc lối, mau vào đi!",
						"thai": "ผู้หลงทางเอ๋ย เข้ามาข้างในเถิด!",
						"hindi": "भटके हुए पथिक, अंदर आओ!"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설인님께서 자네를 기다리고 계셨네.",
						"english": "The Yeti has been waiting for you.",
						"japanese": "雪人様がお待ちかねだったぞ。",
						"chinese": "雪人大人一直在等你。",
						"french": "Le Yéti t'attendait.",
						"spanish": "El Yeti te estaba esperando.",
						"vietnamese": "Yeti đã đợi ngài rồi.",
						"thai": "ท่านเยติกำลังรอท่านอยู่",
						"hindi": "येति तुम्हारा इंतज़ार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설인?",
						"english": "The Yeti?",
						"japanese": "雪人？",
						"chinese": "雪人？",
						"french": "Le Yéti ?",
						"spanish": "¿El Yeti?",
						"vietnamese": "Yeti?",
						"thai": "เยติหรือ?",
						"hindi": "येति?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "그래! 영웅의 환생이자, 이 땅의 수호자시지!",
						"english": "Yes! The reincarnation of a hero, and the guardian of this land!",
						"japanese": "そうだ！ 英雄の生まれ変わりにして、この地の守護者様だ！",
						"chinese": "没错！他是英雄的转世，也是这片土地的守护者！",
						"french": "Oui ! La réincarnation d'un héros, et le gardien de cette terre !",
						"spanish": "¡Sí! ¡La reencarnación de un héroe y el guardián de esta tierra!",
						"vietnamese": "Đúng vậy! Người là hóa thân của anh hùng, và là người bảo vệ vùng đất này!",
						"thai": "ใช่แล้ว! เขาคือการกลับชาติมาเกิดของวีรบุรุษ และเป็นผู้พิทักษ์แห่งดินแดนนี้!",
						"hindi": "हाँ! एक नायक का पुनर्जन्म, और इस भूमि का संरक्षक!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "영웅의… 환생?",
						"english": "A hero's... reincarnation?",
						"japanese": "英雄の… 転生？",
						"chinese": "英雄的… 转世？",
						"french": "Une réincarnation... de héros ?",
						"spanish": "¿La... reencarnación de un héroe?",
						"vietnamese": "Sự... tái sinh của anh hùng?",
						"thai": "การ... กลับชาติมาเกิดของฮีโร่?",
						"hindi": "एक नायक का... पुनर्जन्म?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설인님께선 우리를 보살펴주시는 분이야.",
						"english": "The Yeti watches over us.",
						"japanese": "雪男様は私たちを見守ってくださる方だ。",
						"chinese": "雪人大人是守护我们的人。",
						"french": "Le Yéti veille sur nous.",
						"spanish": "El Yeti nos cuida.",
						"vietnamese": "Người Tuyết là người bảo vệ chúng ta.",
						"thai": "เยติเป็นผู้ดูแลพวกเรา",
						"hindi": "यति हमारी देखभाल करते हैं।"
					},
					"emotion": "base",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이 설원에서 길을 잃지 않게 인도해주시고, 따뜻한 코코아도 주시지.",
						"english": "He guides us so we don't get lost in this snowfield and even gives us warm cocoa.",
						"japanese": "この雪原で迷わないように導いてくださり、温かいココアもくださる。",
						"chinese": "他指引我们不在这片雪原中迷失，还给我们热可可。",
						"french": "Il nous guide pour ne pas nous perdre dans cette étendue de neige et nous offre même du chocolat chaud.",
						"spanish": "Nos guía para no perdernos en este campo de nieve y hasta nos da chocolate caliente.",
						"vietnamese": "Ông ấy hướng dẫn chúng ta không bị lạc trong cánh đồng tuyết này và còn cho chúng ta ca cao nóng nữa.",
						"thai": "เขาชี้ทางเราไม่ให้หลงทางในทุ่งหิมะนี้ และยังให้โกโก้อุ่นๆ กับเราด้วย",
						"hindi": "वह हमें इस बर्फीले मैदान में भटकने से बचाते हैं, और गर्म कोको भी देते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…코코아?",
						"english": "...Cocoa?",
						"japanese": "…ココア？",
						"chinese": "…可可？",
						"french": "...Du chocolat chaud ?",
						"spanish": "¿...Chocolate caliente?",
						"vietnamese": "...Ca cao?",
						"thai": "...โกโก้?",
						"hindi": "...कोको?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "귓가에 알 수 없는 으르렁거림과 낑낑거림이 희미하게 울렸다.",
						"english": "Unidentifiable growls and whines faintly echoed in my ears.",
						"japanese": "耳元で正体不明の唸り声とクンクンという鳴き声がかすかに響いた。",
						"chinese": "不明的咆哮和呜咽声在耳边 faintly 回荡。",
						"french": "Des grognements et des gémissements indistincts résonnaient faiblement à mes oreilles.",
						"spanish": "Rugidos y quejidos desconocidos resonaron débilmente en mis oídos.",
						"vietnamese": "Những tiếng gầm gừ và rên rỉ không rõ nguyên nhân vang vọng mơ hồ bên tai.",
						"thai": "เสียงคำรามและเสียงครางที่ไม่สามารถระบุได้ดังก้องแผ่วเบาในหู",
						"hindi": "कानों में अज्ञात गुर्राहट और कराहने की आवाज़ें हल्की गूँज रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(점점 더 혼란스러워지는군…)",
						"english": "(This is getting more and more confusing...)",
						"japanese": "(ますます混乱してきたな…)",
						"chinese": "(这越来越令人困惑了…)",
						"french": "(C'est de plus en plus déroutant...)",
						"spanish": "(Esto es cada vez más confuso...)",
						"vietnamese": "(Càng ngày càng khó hiểu...)",
						"thai": "(ยิ่งสับสนมากขึ้นเรื่อยๆ...)",
						"hindi": "(यह और भी भ्रमित करने वाला होता जा रहा है...)"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "자네가 이곳에 온 것도 설인님의 뜻일 거야.",
						"english": "Your arrival here must also be the Yeti's will.",
						"japanese": "あなたがここに来たのも、きっと雪男様のお導きだろう。",
						"chinese": "你来到这里也一定是雪人大人的旨意。",
						"french": "Ta venue ici est aussi la volonté du Yéti.",
						"spanish": "Tu llegada aquí también debe ser la voluntad del Yeti.",
						"vietnamese": "Việc bạn đến đây chắc hẳn cũng là ý muốn của Người Tuyết.",
						"thai": "การที่เจ้ามาที่นี่ก็คงเป็นความประสงค์ของเยติเช่นกัน",
						"hindi": "तुम्हारा यहाँ आना भी यति की इच्छा होगी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어쩌면 자네도… 영웅의 선택을 받은 걸지도 모르지!",
						"english": "Perhaps you, too... have been chosen by a hero!",
						"japanese": "もしかしたらあなたも… 英雄に選ばれたのかもしれない！",
						"chinese": "也许你也被… 英雄选中了！",
						"french": "Peut-être que toi aussi... tu as été choisi par un héros !",
						"spanish": "¡Quizás tú también... fuiste elegido por un héroe!",
						"vietnamese": "Có lẽ bạn cũng... đã được một anh hùng lựa chọn!",
						"thai": "บางทีเจ้าเองก็... อาจถูกเลือกโดยวีรบุรุษ!",
						"hindi": "शायद तुम भी... किसी नायक द्वारा चुने गए हो!"
					},
					"emotion": "happy",
					"speaker": "finn"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(지나치게 환상적이야…)",
						"english": "(This is too fantastical...)",
						"japanese": "(あまりにも幻想的すぎる…)",
						"chinese": "(这太离奇了…)",
						"french": "(C'est trop fantastique...)",
						"spanish": "(Esto es demasiado fantástico...)",
						"vietnamese": "(Quá huyễn hoặc...)",
						"thai": "(มันมหัศจรรย์เกินไป...)",
						"hindi": "(यह बहुत ही शानदार है...)"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "주변의 모든 눈 결정들이 미세하게 같은 패턴으로 반짝였다.",
						"english": "All the snowflakes around sparkled subtly in the same pattern.",
						"japanese": "周囲の雪の結晶がすべて微細に同じパターンで輝いていた。",
						"chinese": "周围所有的雪花都以相同的微小模式闪烁着。",
						"french": "Tous les flocons de neige autour scintillaient subtilement selon le même motif.",
						"spanish": "Todos los copos de nieve alrededor brillaban sutilmente con el mismo patrón.",
						"vietnamese": "Tất cả các bông tuyết xung quanh lấp lánh nhẹ nhàng theo cùng một mẫu.",
						"thai": "เกล็ดหิมะทั้งหมดรอบๆ ส่องประกายอย่างประณีตในรูปแบบเดียวกัน",
						"hindi": "आसपास के सभी हिमखंड सूक्ष्म रूप से एक ही पैटर्न में चमक रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "(완벽… 너무 완벽해.)",
						"english": "(Perfect... too perfect.)",
						"japanese": "(完璧…完璧すぎる。)",
						"chinese": "(完美……太完美了。)",
						"french": "(Parfait... trop parfait.)",
						"spanish": "(Perfecto... demasiado perfecto.)",
						"vietnamese": "(Hoàn hảo... quá hoàn hảo.)",
						"thai": "(สมบูรณ์แบบ... สมบูรณ์แบบเกินไป)",
						"hindi": "(उत्तम... बहुत उत्तम।)"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "자네는 설인님을 믿어야 해. 그분만이 진실을 아시지!",
						"english": "You must trust the Yeti. Only he knows the truth!",
						"japanese": "イエティ様を信じるんだ。真実を知っているのは彼だけだ！",
						"chinese": "你必须相信雪人。只有他知道真相！",
						"french": "Tu dois faire confiance au Yéti. Lui seul connaît la vérité !",
						"spanish": "Debes confiar en el Yeti. ¡Solo él sabe la verdad!",
						"vietnamese": "Ngươi phải tin Tín Ngưỡng. Chỉ có ông ấy mới biết sự thật!",
						"thai": "ท่านต้องเชื่อเยติ มีแต่เขาเท่านั้นที่รู้ความจริง!",
						"hindi": "तुम्हें यति पर भरोसा करना चाहिए। केवल वही सच जानते हैं!"
					},
					"emotion": "angry",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실?",
						"english": "The truth?",
						"japanese": "真実？",
						"chinese": "真相？",
						"french": "La vérité ?",
						"spanish": "¿La verdad?",
						"vietnamese": "Sự thật?",
						"thai": "ความจริง?",
						"hindi": "सच?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "그래! 이 설원은 축복받은 땅이야.",
						"english": "Yes! This snowy field is blessed land.",
						"japanese": "そうだ！この雪原は祝福された土地だ。",
						"chinese": "是的！这片雪原是受祝福的土地。",
						"french": "Oui ! Cette étendue enneigée est une terre bénie.",
						"spanish": "¡Sí! Este campo nevado es tierra bendita.",
						"vietnamese": "Đúng vậy! Vùng đất tuyết này là đất được ban phước.",
						"thai": "ใช่! ทุ่งหิมะแห่งนี้คือดินแดนที่ได้รับพร",
						"hindi": "हाँ! यह बर्फीला मैदान एक धन्य भूमि है।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "기억 속에서 오래된 썰매와 개썰매 경주의 단편적인 영상이 스쳤다.",
						"english": "Fragments of an old sleigh and dog sled race flashed through my memory.",
						"japanese": "記憶の中に、古いそりや犬ぞりレースの断片的な映像がよぎった。",
						"chinese": "记忆中闪过一段古老的雪橇和狗拉雪橇比赛的片段。",
						"french": "Des fragments d'un vieux traîneau et d'une course de chiens de traîneau ont traversé ma mémoire.",
						"spanish": "Fragmentos de un viejo trineo y una carrera de trineos de perros pasaron por mi memoria.",
						"vietnamese": "Những đoạn hình ảnh về một cuộc đua xe trượt tuyết và chó kéo xe trượt tuyết cũ kỹ vụt qua trong ký ức.",
						"thai": "ภาพชิ้นส่วนของเลื่อนเก่าและการแข่งขันเลื่อนสุนัขแวบเข้ามาในความทรงจำ",
						"hindi": "एक पुरानी स्लेज और डॉग स्लेज दौड़ के टुकड़े मेरी यादों में कौंध गए।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(이건 또… 뭐야.)",
						"english": "(What... is this now?)",
						"japanese": "(これはまた…何だ。)",
						"chinese": "(这又……是什么。)",
						"french": "(Qu'est-ce que... c'est encore ?)",
						"spanish": "(¿Qué... es esto ahora?)",
						"vietnamese": "(Cái này lại... là gì đây.)",
						"thai": "(นี่มัน... อะไรกันอีก)",
						"hindi": "(यह फिर... क्या है।)"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 몸부림이군.",
						"english": "A pathetic struggle.",
						"japanese": "取るに足らない足掻きだな。",
						"chinese": "无谓的挣扎。",
						"french": "Une lutte insignifiante.",
						"spanish": "Una lucha patética.",
						"vietnamese": "Một sự vùng vẫy vô ích.",
						"thai": "การดิ้นรนที่ไร้ค่า.",
						"hindi": "यह तुच्छ संघर्ष है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너의 의심은, 결국 널 얼어붙게 할 것이다.",
						"english": "Your doubt will ultimately freeze you.",
						"japanese": "お前の疑念が、結局お前を凍てつかせるだろう。",
						"chinese": "你的疑虑，终将使你冻结。",
						"french": "Tes doutes finiront par te glacer.",
						"spanish": "Tu duda, al final, te congelará.",
						"vietnamese": "Sự nghi ngờ của ngươi, cuối cùng sẽ đóng băng ngươi.",
						"thai": "ความสงสัยของเจ้า จะทำให้เจ้าหยุดนิ่งในที่สุด.",
						"hindi": "तुम्हारा संदेह, अंततः तुम्हें जमा देगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わっていない！",
						"chinese": "……还没结束！",
						"french": "…Ce n'est pas encore fini !",
						"spanish": "…¡Aún no ha terminado!",
						"vietnamese": "…Chưa kết thúc đâu!",
						"thai": "…ยังไม่จบ!",
						"hindi": "…अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 오너라. 그때는 더 깊은 절망을 선사해주마.",
						"english": "Return. I'll grant you deeper despair next time.",
						"japanese": "また来るがいい。その時は、より深き絶望をくれてやろう。",
						"chinese": "再来吧。届时，我将赐予你更深的绝望。",
						"french": "Reviens. La prochaine fois, je t'offrirai un désespoir plus profond.",
						"spanish": "Regresa. La próxima vez, te daré una desesperación más profunda.",
						"vietnamese": "Hãy trở lại. Khi đó, ta sẽ ban cho ngươi sự tuyệt vọng sâu sắc hơn.",
						"thai": "จงกลับมาอีกครั้ง คราวหน้า ข้าจะมอบความสิ้นหวังที่ลึกซึ้งยิ่งกว่าให้เจ้า.",
						"hindi": "फिर से आना। तब मैं तुम्हें और गहरी निराशा दूँगा।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A colossal shadow blocked the way.",
						"japanese": "巨大な影が道を塞いだ。",
						"chinese": "一道巨大的影子挡住了去路。",
						"french": "Une ombre colossale a bloqué le passage.",
						"spanish": "Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một bóng đen khổng lồ chắn lối.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기어이 여기까지 왔군.",
						"english": "...So you finally made it this far.",
						"japanese": "…ついにここまで来たか。",
						"chinese": "……你终究还是走到这里了。",
						"french": "...Tu es finalement arrivé jusqu'ici.",
						"spanish": "...Así que finalmente llegaste hasta aquí.",
						"vietnamese": "...Cuối cùng ngươi cũng đã đến được đây.",
						"thai": "...ในที่สุดเจ้าก็มาถึงที่นี่จนได้",
						"hindi": "...तो तुम आखिरकार यहाँ तक पहुँच ही गए।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "finn",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 설인님! 이분은 당신을 믿는…!",
						"english": "No, Lord Yeti! This person believes in you—!",
						"japanese": "いや、イエティ様！この方はあなたを信じる—！",
						"chinese": "不，雪人大人！这位相信您——！",
						"french": "Non, Seigneur Yéti ! Cette personne croit en vous— !",
						"spanish": "¡No, Señor Yeti! ¡Esta persona cree en ti—!",
						"vietnamese": "Không, Tín Ngưỡng! Người này tin ngài—!",
						"thai": "ไม่นะ เยติ! ท่านผู้นี้เชื่อในท่าน—!",
						"hindi": "नहीं, यति महाराज! यह व्यक्ति आप पर विश्वास करते हैं—!"
					},
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그만. 네 역할은 여기까지다.",
						"english": "Enough. Your role ends here.",
						"japanese": "やめろ。お前の役割はここまでだ。",
						"chinese": "够了。你的任务到此为止。",
						"french": "Ça suffit. Ton rôle s'arrête ici.",
						"spanish": "Basta. Tu papel termina aquí.",
						"vietnamese": "Đủ rồi. Vai trò của ngươi kết thúc tại đây.",
						"thai": "พอแล้ว บทบาทของเจ้าสิ้นสุดลงตรงนี้",
						"hindi": "बस। तुम्हारी भूमिका यहीं खत्म होती है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "finn"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자. 나의 완벽한 환영을 깨뜨리려 하다니.",
						"english": "Fool. To shatter my perfect illusion.",
						"japanese": "愚か者め。我が完璧な幻影を壊そうとするとは。",
						"chinese": "愚蠢之人。竟敢打破我完美的幻象。",
						"french": "Imbécile. Oser briser ma parfaite illusion.",
						"spanish": "Necio. ¿Intentas romper mi perfecta ilusión?",
						"vietnamese": "Kẻ ngốc. Dám phá vỡ ảo ảnh hoàn hảo của ta.",
						"thai": "เจ้าคนโง่เง่า บังอาจมาทำลายภาพลวงตาอันสมบูรณ์แบบของข้า",
						"hindi": "मूर्ख। मेरे पूर्ण भ्रम को तोड़ने की हिम्मत की तुमने।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은… 누구야?",
						"english": "You... who are you?",
						"japanese": "あなたは…誰なの？",
						"chinese": "你…是谁？",
						"french": "Toi… qui es-tu ?",
						"spanish": "¿Tú… quién eres?",
						"vietnamese": "Ngươi... là ai?",
						"thai": "ท่าน... คือใคร?",
						"hindi": "तुम… कौन हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "{random_boss}. 너의 고통이자, 너의 구원.",
						"english": "{random_boss}. Your suffering, and your salvation.",
						"japanese": "{random_boss}。お前の苦痛であり、お前の救済だ。",
						"chinese": "{random_boss}。你的痛苦，亦是你的救赎。",
						"french": "{random_boss}. Ta souffrance, et ton salut.",
						"spanish": "{random_boss}. Tu sufrimiento y tu salvación.",
						"vietnamese": "{random_boss}. Nỗi đau của ngươi, và cả sự cứu rỗi của ngươi.",
						"thai": "{random_boss} ความทรมานของเจ้า และการไถ่บาปของเจ้า",
						"hindi": "{random_boss}। तुम्हारा कष्ट, और तुम्हारा मोक्ष।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parles-tu !",
						"spanish": "¡De qué hablas!",
						"vietnamese": "Ngươi nói cái gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "क्या बक रहे हो!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우… 이 정도로…",
						"english": "Ugh... just... this much...",
						"japanese": "くっ…たかが…この程度で…",
						"chinese": "呃…仅此…而已吗…",
						"french": "Argh… seulement… à ce point…",
						"spanish": "Uf… ¿solo… esto?",
						"vietnamese": "Khụ… chỉ… thế này thôi sao…",
						"thai": "อึก... แค่... แค่นี้เองเหรอ...",
						"hindi": "उफ़… बस… इतना ही…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…넌 아직 모른다. 진정한 추위는, 바깥이 아니라… 네 마음속에 있다는 것을.",
						"english": "...You still don't know. The true cold isn't outside... but within your heart.",
						"japanese": "…お前はまだ知らない。真の寒さは、外ではなく…お前の心の中にあるということを。",
						"chinese": "…你还不知道。真正的寒冷，不在外面…而在你心中。",
						"french": "…Tu ne sais pas encore. Le véritable froid n'est pas à l'extérieur… mais dans ton cœur.",
						"spanish": "…Aún no lo sabes. El verdadero frío no está fuera… sino en tu corazón.",
						"vietnamese": "...Ngươi vẫn chưa biết. Cái lạnh thật sự không phải ở bên ngoài... mà là trong trái tim ngươi.",
						"thai": "...เจ้ายังไม่รู้ ความหนาวเหน็บที่แท้จริง ไม่ได้อยู่ข้างนอก... แต่อยู่ในใจของเจ้าต่างหาก",
						"hindi": "…तुम अभी नहीं जानते। असली ठंड बाहर नहीं… बल्कि तुम्हारे दिल में है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "…！",
						"chinese": "…！",
						"french": "… !",
						"spanish": "…!",
						"vietnamese": "…!",
						"thai": "...!",
						"hindi": "…!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해가 희미하게 빛났다.",
						"english": "The remnants of the fallen {random_boss} glowed faintly.",
						"japanese": "倒れた{random_boss}の残骸が、かすかに光を放った。",
						"chinese": "倒下的{random_boss}的残骸，发出了微弱的光芒。",
						"french": "Les restes du {random_boss} terrassé brillèrent faiblement.",
						"spanish": "Los restos del {random_boss} caído brillaron débilmente.",
						"vietnamese": "Tàn tích của {random_boss} đã gục ngã phát ra ánh sáng mờ nhạt.",
						"thai": "ซากศพของ {random_boss} ที่ล้มลงส่องแสงเรืองรองจางๆ",
						"hindi": "गिरे हुए {random_boss} के अवशेष मंद रोशनी में चमक उठे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그러나 설원의 완벽한 아름다움은 여전했다. 무엇을 믿어야 할까?",
						"english": "Yet, the perfect beauty of the snowfield remained. What should one believe?",
						"japanese": "しかし、雪原の完璧な美しさは変わらなかった。何を信じればいいのだろうか？",
						"chinese": "然而，雪原完美的景色依旧。该相信什么呢？",
						"french": "Pourtant, la beauté parfaite de l'étendue enneigée demeurait. Que fallait-il croire ?",
						"spanish": "Sin embargo, la perfecta belleza del campo nevado permanecía. ¿Qué debería creer uno?",
						"vietnamese": "Thế nhưng, vẻ đẹp hoàn hảo của cánh đồng tuyết vẫn như cũ. Phải tin vào điều gì đây?",
						"thai": "ทว่า ความงดงามอันสมบูรณ์แบบของทุ่งหิมะยังคงอยู่ จะเชื่ออะไรดีล่ะ?",
						"hindi": "फिर भी, बर्फीले मैदान की संपूर्ण सुंदरता बनी रही। किसे विश्वास करना चाहिए?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 끝없는 환영의 미로는, 이제 겨우 시작일 뿐이었다.",
						"english": "This endless labyrinth of illusion was, in fact, just the beginning.",
						"japanese": "この終わりのない幻影の迷宮は、まだ始まりに過ぎなかった。",
						"chinese": "这无尽的幻象迷宫，如今才刚刚开始。",
						"french": "Ce labyrinthe sans fin d'illusions n'était, en réalité, que le commencement.",
						"spanish": "Este laberinto interminable de ilusión era, de hecho, solo el principio.",
						"vietnamese": "Mê cung ảo ảnh vô tận này, thật ra chỉ mới là khởi đầu mà thôi.",
						"thai": "เขาวงกตแห่งภาพลวงตาอันไม่รู้จบนี้ เพิ่งจะเป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "भ्रम का यह अंतहीन चक्रव्यूह, वास्तव में, बस शुरुआत थी।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 설원. 모든 것이 눈으로 뒤덮여 있었다.",
			"환대 뒤에 숨겨진 차가운 진실.",
			"길을 인도하는 자가, 사실은 길을 잃게 하는 자였다.",
			"이 얼어붙은 세상은 — 완벽하게 조작된 무대였다."
		],
		"english": [
			"An endless snowfield. Everything was covered in snow.",
			"The cold truth hidden behind warm hospitality.",
			"The one who guided the way was, in fact, the one who led astray.",
			"This frozen world was — a perfectly manipulated stage."
		],
		"japanese": [
			"果てしない雪原。すべてが雪に覆われていた。",
			"歓待の裏に隠された冷たい真実。",
			"道を導く者が、実は道に迷わせる者だった。",
			"この凍てついた世界は――完璧に仕組まれた舞台だった。"
		],
		"chinese": [
			"无尽的雪原。一切都被雪覆盖着。",
			"热情款待背后隐藏的冰冷真相。",
			"引路之人，实则为迷途之人。",
			"这个冰封的世界——是一个精心策划的舞台。"
		],
		"french": [
			"Une étendue de neige infinie. Tout était recouvert de neige.",
			"La froide vérité cachée derrière une chaleureuse hospitalité.",
			"Celui qui montrait le chemin était, en fait, celui qui égarait.",
			"Ce monde gelé était — une scène parfaitement manipulée."
		],
		"spanish": [
			"Un campo de nieve interminable. Todo estaba cubierto de nieve.",
			"La fría verdad oculta tras la cálida hospitalidad.",
			"Quien guiaba el camino era, en realidad, quien extraviaba.",
			"Este mundo congelado era — un escenario perfectamente manipulado."
		],
		"vietnamese": [
			"Một cánh đồng tuyết vô tận. Mọi thứ đều bị tuyết bao phủ.",
			"Sự thật lạnh lùng ẩn sau sự hiếu khách nồng hậu.",
			"Người dẫn đường, thực chất lại là người làm lạc lối.",
			"Thế giới băng giá này — là một sân khấu được dàn dựng hoàn hảo."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด ทุกสิ่งถูกปกคลุมไปด้วยหิมะ",
			"ความจริงอันเยือกเย็นที่ซ่อนอยู่เบื้องหลังการต้อนรับอันอบอุ่น",
			"ผู้ชี้นำทาง แท้จริงแล้วคือผู้ที่ทำให้หลงทาง",
			"โลกที่เยือกแข็งนี้ — เป็นเวทีที่ถูกจัดฉากอย่างสมบูรณ์แบบ"
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। सब कुछ बर्फ से ढका हुआ था।",
			"गर्मजोशी भरी मेहमाननवाज़ी के पीछे छिपा कड़वा सच।",
			"मार्गदर्शक, वास्तव में वही था जो राह भटकाता था।",
			"यह जमा हुआ संसार — एक पूरी तरह से गढ़ा हुआ मंच था।"
		]
	}
} as const;
