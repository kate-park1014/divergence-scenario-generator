export const scenario_desert_pactweaver_30_05 = {
	"scenario_id": "desert_pactweaver_30_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_BrokenPact_Pactweaver_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래 폭풍이 걷히자, 기만의 제단이 모습을 드러냈다.",
						"english": "As the sandstorm cleared, the Altar of Deceit was revealed.",
						"japanese": "砂嵐が晴れると、欺瞞の祭壇が姿を現した。",
						"chinese": "沙尘暴散去，欺骗之坛显现。",
						"french": "Alors que la tempête de sable se dissipait, l'Autel de la Tromperie fut révélé.",
						"spanish": "Cuando la tormenta de arena amainó, el Altar del Engaño fue revelado.",
						"vietnamese": "Khi bão cát tan đi, Bàn thờ Lừa dối hiện ra.",
						"thai": "เมื่อพายุทรายสงบลง แท่นบูชาแห่งการหลอกลวงก็ปรากฏขึ้น",
						"hindi": "जैसे ही रेत का तूफान हटा, धोखे की वेदी सामने आ गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Pactweaver의 은신처… 마침내 여기에.",
						"english": "Pactweaver's hideout... Finally here.",
						"japanese": "Pactweaverの隠れ家… ついにここか。",
						"chinese": "契约编织者的巢穴… 终于到了。",
						"french": "La cachette du Tisseur de Pactes... Enfin ici.",
						"spanish": "El escondite del Tejepactos... Por fin aquí.",
						"vietnamese": "Nơi ẩn náu của Kẻ Dệt Giao Ước... Cuối cùng cũng tới.",
						"thai": "รังของ Pactweaver... ในที่สุดก็มาถึงที่นี่",
						"hindi": "पैक्टवीवर का ठिकाना... आखिरकार यहाँ।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "amir"
				},
				{
					"emotion": "happy",
					"speaker": "amir",
					"content": {
						"korean": "환영해! 내 오랜 친구, 아니… 꼭두각시들.",
						"english": "Welcome! My old friends, or rather... puppets.",
						"japanese": "ようこそ！我が旧友たち、いや… 傀儡どもよ。",
						"chinese": "欢迎！我的老朋友们，不… 是我的傀儡们。",
						"french": "Bienvenue ! Mes vieux amis, ou plutôt... marionnettes.",
						"spanish": "¡Bienvenidos! Mis viejos amigos, o mejor dicho... marionetas.",
						"vietnamese": "Chào mừng! Những người bạn cũ của ta, hay đúng hơn là... những con rối của ta.",
						"thai": "ยินดีต้อนรับ! สหายเก่าของข้า, หรือจะเรียกว่า... หุ่นเชิดของข้าดี",
						"hindi": "स्वागत है! मेरे पुराने दोस्त, या यूँ कहो... मेरे कठपुतली।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아미르… 네놈이 왜 여기에…?",
						"english": "Amir... Why are you here...?",
						"japanese": "アミール… なぜお前がここに…？",
						"chinese": "阿米尔… 你为什么会在这里…？",
						"french": "Amir... Pourquoi es-tu ici... ?",
						"spanish": "Amir... ¿Por qué estás aquí...?",
						"vietnamese": "Amir... Sao ngươi lại ở đây...?",
						"thai": "อามีร์... ทำไมนายถึงมาอยู่ที่นี่...?",
						"hindi": "अमीर... तुम यहाँ क्यों हो...?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이 모든 것이 나의 완벽한 설계였다는 것을, 이제야 알겠나?",
						"english": "Do you finally realize that all of this was my perfect design?",
						"japanese": "この全てが、私の完璧な計画だったと、今頃気づいたか？",
						"chinese": "现在，你们终于明白这一切都是我完美的计划了吗？",
						"french": "Comprenez-vous enfin que tout cela n'était que mon plan parfait ?",
						"spanish": "¿Por fin te das cuenta de que todo esto fue mi diseño perfecto?",
						"vietnamese": "Giờ thì các ngươi đã nhận ra tất cả chuyện này đều là kế hoạch hoàn hảo của ta rồi chứ?",
						"thai": "ในที่สุดก็เข้าใจแล้วสินะ ว่าทั้งหมดนี้คือแผนการที่สมบูรณ์แบบของข้า",
						"hindi": "क्या तुम्हें अब समझ आया कि यह सब मेरी उत्तम योजना थी?"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "amir"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직도 모르는 건가? 너희의 모든 발걸음, 나의 손 위에서 춤췄지.",
						"english": "Still don't get it? Every step you took, danced in my palm.",
						"japanese": "まだ分からないのか？お前たちの全ての足取りは、私の手のひらで踊っていたのだ。",
						"chinese": "难道你们还不明白吗？你们的每一步，都在我的掌控之中起舞。",
						"french": "Vous ne comprenez toujours pas ? Chacun de vos pas dansait dans ma main.",
						"spanish": "¿Todavía no lo entiendes? Cada uno de vuestros pasos bailó en la palma de mi mano.",
						"vietnamese": "Vẫn chưa hiểu sao? Mọi bước đi của các ngươi đều nhảy múa trên lòng bàn tay ta.",
						"thai": "ยังไม่เข้าใจอีกหรือ? ทุกย่างก้าวของพวกเจ้า ล้วนเต้นรำอยู่บนฝ่ามือของข้า",
						"hindi": "क्या तुम्हें अब भी नहीं पता? तुम्हारे हर कदम ने मेरे हाथ में नृत्य किया।"
					},
					"emotion": "base",
					"speaker": "amir"
				},
				{
					"content": {
						"korean": "무슨 헛소리야!?",
						"english": "What nonsense is this!?",
						"japanese": "何を言っているんだ！",
						"chinese": "你在胡说八道些什么！",
						"french": "Quelles sont ces bêtises !?",
						"spanish": "¡¿Qué tonterías dices?!",
						"vietnamese": "Ngươi đang nói nhảm gì vậy!?",
						"thai": "บ้าอะไรของแก!?",
						"hindi": "यह क्या बकवास है!?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너희가 찾던 진실? 그건 내가 던져준 미끼였을 뿐.",
						"english": "The truth you sought? It was merely bait I threw.",
						"japanese": "お前たちが求めていた真実？それは私が投げ与えた餌に過ぎない。",
						"chinese": "你们所寻找的真相？那不过是我抛出的诱饵罢了。",
						"french": "La vérité que vous cherchiez ? Ce n'était qu'un appât que j'avais lancé.",
						"spanish": "La verdad que buscabais? Solo era un cebo que os lancé.",
						"vietnamese": "Sự thật mà các ngươi tìm kiếm? Nó chỉ là mồi nhử do ta ném ra mà thôi.",
						"thai": "ความจริงที่พวกเจ้าตามหา? มันก็แค่เหยื่อที่ข้าโยนให้เท่านั้น",
						"hindi": "वह सच जिसे तुम ढूंढ रहे थे? वह तो बस एक चारा था जो मैंने फेंका था।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "젠장… 모든 게 함정이었어!",
						"english": "Damn it... It was all a trap!",
						"japanese": "くそ… 全てが罠だったのか！",
						"chinese": "该死… 这全都是陷阱！",
						"french": "Mince... Tout était un piège !",
						"spanish": "¡Maldita sea... Todo era una trampa!",
						"vietnamese": "Chết tiệt... Tất cả đều là bẫy!",
						"thai": "ให้ตายสิ... ทั้งหมดเป็นกับดัก!",
						"hindi": "धत् तेरी... यह सब एक जाल था!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "amir",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "크큭… 잃어버린 약속? 부서진 맹세? 다 허상에 불과해.",
						"english": "Heh heh... Lost promises? Broken vows? All mere illusions.",
						"japanese": "ククク… 失われた約束？壊れた誓い？全ては虚像に過ぎん。",
						"chinese": "呵呵… 失去的承诺？破碎的誓言？都不过是幻象罢了。",
						"french": "Hé hé... Promesses perdues ? Serments brisés ? Tout n'est que pure illusion.",
						"spanish": "Je je... ¿Promesas perdidas? ¿Juramentos rotos? Todo es una mera ilusión.",
						"vietnamese": "Khà khà... Lời hứa đã mất? Lời thề tan vỡ? Tất cả chỉ là ảo ảnh thôi.",
						"thai": "ฮิฮิ... คำสัญญาที่หายไป? คำสาบานที่แตกสลาย? ล้วนเป็นเพียงภาพลวงตา",
						"hindi": "हँ हँ... खोए हुए वादे? टूटी हुई कसमें? सब बस एक भ्रम है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 모든 게 거짓이었다고? 말도 안 돼!",
						"english": "All of this was a lie? Impossible!",
						"japanese": "この全てが嘘だったと？馬鹿な！",
						"chinese": "这一切都是谎言？不可能！",
						"french": "Tout cela était un mensonge ? C'est absurde !",
						"spanish": "¿Todo esto era mentira? ¡Imposible!",
						"vietnamese": "Tất cả những điều này đều là dối trá sao? Thật vô lý!",
						"thai": "ทั้งหมดนี่เป็นเรื่องโกหกงั้นหรือ? ไม่จริงน่า!",
						"hindi": "यह सब झूठ था? नामुमकिन!"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그래! 너희의 분노와 절망, 그것이 Pactweaver의 힘이거든.",
						"english": "Yes! Your rage and despair, that is the Pactweaver's power.",
						"japanese": "そうだ！お前たちの怒りと絶望、それこそがPactweaverの力なのだ。",
						"chinese": "没错！你们的愤怒与绝望，正是Pactweaver的力量。",
						"french": "Oui ! Votre rage et votre désespoir, c'est cela la puissance du Pactweaver.",
						"spanish": "¡Sí! Vuestra rabia y desesperación, esa es la fuerza del Pactweaver.",
						"vietnamese": "Đúng vậy! Cơn thịnh nộ và tuyệt vọng của các ngươi, đó chính là sức mạnh của Pactweaver.",
						"thai": "ใช่แล้ว! ความโกรธแค้นและความสิ้นหวังของพวกเจ้า นั่นแหละคือพลังของ Pactweaver!",
						"hindi": "हाँ! तुम्हारा क्रोध और निराशा, वही Pactweaver की शक्ति है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "시스템의 배신… 전부 계획된 거였나!",
						"english": "The system's betrayal... Was it all planned?!",
						"japanese": "システムの裏切り…全て仕組まれていたのか！",
						"chinese": "系统的背叛……全都是计划好的吗！",
						"french": "La trahison du système... Tout était planifié ?",
						"spanish": "La traición del sistema... ¿Todo estaba planeado?",
						"vietnamese": "Sự phản bội của hệ thống... Tất cả đã được sắp đặt ư!",
						"thai": "การทรยศของระบบ... ทั้งหมดถูกวางแผนไว้แล้วงั้นรึ!",
						"hindi": "सिस्टम का धोखा... क्या यह सब योजनाबद्ध था!"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "amir",
					"action": "enter"
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "이제 깨달았나? 너희의 '자유의지'란 없다는 것을.",
						"english": "Do you understand now? That your 'free will' is an illusion.",
						"japanese": "やっと気づいたか？お前たちの『自由意志』など存在しないと。",
						"chinese": "现在明白了吗？你们根本没有所谓的‘自由意志’。",
						"french": "Comprenez-vous enfin ? Que votre 'libre arbitre' n'existe pas.",
						"spanish": "¿Lo entendéis ahora? Que vuestro 'libre albedrío' no existe.",
						"vietnamese": "Giờ thì đã hiểu chưa? Rằng 'tự do ý chí' của các ngươi không hề tồn tại.",
						"thai": "ตอนนี้เข้าใจแล้วสินะ? ว่า 'เจตจำนงเสรี' ของพวกเจ้าไม่มีอยู่จริง",
						"hindi": "अब समझे? कि तुम्हारी 'स्वतंत्र इच्छा' जैसी कोई चीज़ नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네놈이 우릴 기만했어!",
						"english": "Silence! You deceived us!",
						"japanese": "黙れ！貴様が我々を欺いたのか！",
						"chinese": "闭嘴！你欺骗了我们！",
						"french": "Tais-toi ! Tu nous as trompés !",
						"spanish": "¡Cállate! ¡Nos has engañado!",
						"vietnamese": "Im đi! Ngươi đã lừa dối chúng ta!",
						"thai": "หุบปาก! แกมันหลอกลวงพวกเรา!",
						"hindi": "चुप रहो! तुमने हमें धोखा दिया!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기만? 난 그저 너희를 '제물'로 안내했을 뿐. 영광으로 알아!",
						"english": "Deception? I merely guided you as 'sacrifices'. Consider it an honor!",
						"japanese": "欺く？私はただ、お前たちを『生贄』として導いただけ。光栄に思え！",
						"chinese": "欺骗？我不过是引导你们成为‘祭品’罢了。引以为荣吧！",
						"french": "Tromperie ? J'ai seulement guidé vos 'sacrifices'. Considérez cela comme un honneur !",
						"spanish": "¿Engaño? Solo os he guiado como 'sacrificios'. ¡Consideradlo un honor!",
						"vietnamese": "Lừa dối ư? Ta chỉ dẫn các ngươi làm 'vật hiến tế' thôi. Hãy lấy đó làm vinh dự!",
						"thai": "หลอกลวงงั้นรึ? ข้าแค่ชี้ทางพวกเจ้าให้เป็น 'เครื่องสังเวย' เท่านั้นเอง จงถือเป็นเกียรติเถอะ!",
						"hindi": "धोखा? मैंने तो तुम्हें बस 'बलिदान' के लिए मार्गदर्शन किया। इसे सम्मान समझो!"
					},
					"emotion": "happy",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "감히…! 용서 못 해!",
						"english": "How dare you...! I won't forgive you!",
						"japanese": "よくも…！許さない！",
						"chinese": "你敢……！不可饶恕！",
						"french": "Comment oses-tu... ! Impardonnable !",
						"spanish": "¡Cómo te atreves...! ¡Imperdonable!",
						"vietnamese": "Ngươi... Ngươi dám! Ta sẽ không tha thứ!",
						"thai": "แกกล้าดียังไง...! ไม่มีวันอภัยให้!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...! तुम्हें माफ़ नहीं करूँगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "happy",
					"speaker": "amir",
					"content": {
						"korean": "하하하! 그 분노, Pactweaver에게 바쳐라!",
						"english": "Hahaha! Offer that rage to the Pactweaver!",
						"japanese": "ハハハ！その怒り、Pactweaverに捧げよ！",
						"chinese": "哈哈哈！将那份愤怒，献给Pactweaver吧！",
						"french": "Hahaha ! Offrez cette rage au Pactweaver !",
						"spanish": "¡Jajaja! ¡Ofreced esa rabia al Pactweaver!",
						"vietnamese": "Ha ha ha! Cơn giận đó, hãy dâng lên Pactweaver!",
						"thai": "ฮ่าฮ่าฮ่า! ความโกรธนั้น จงถวายแด่ Pactweaver ซะ!",
						"hindi": "हाहाहा! अपना वो क्रोध Pactweaver को अर्पित करो!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 저항… 너희의 분노마저 나의 양식이다!",
						"english": "Pitiful resistance... Your rage only fuels me!",
						"japanese": "愚かな抵抗…貴様らの怒りすら我が糧となろう！",
						"chinese": "卑微的抵抗……你们的愤怒亦是我的养料！",
						"french": "Minable résistance... Votre rage même me nourrit !",
						"spanish": "Resistencia insignificante... ¡Incluso vuestra ira es mi alimento!",
						"vietnamese": "Sự kháng cự hèn mọn... Cơn giận của các ngươi cũng là lương thực của ta!",
						"thai": "การต่อต้านที่ไร้ค่า... แม้แต่ความโกรธของพวกเจ้าก็ยังเป็นอาหารของข้า!",
						"hindi": "तुच्छ प्रतिरोध... तुम्हारा क्रोध भी मेरा पोषण है!"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어! 이 배신을 용서치 않아!",
						"english": "It's not over yet! I won't forgive this betrayal!",
						"japanese": "まだ…終わってない！この裏切り、許さない！",
						"chinese": "还没……结束！我绝不原谅这背叛！",
						"french": "Ce n'est pas encore fini ! Je ne pardonnerai pas cette trahison !",
						"spanish": "¡Aún no ha terminado! ¡No perdonaré esta traición!",
						"vietnamese": "Vẫn chưa... kết thúc! Ta sẽ không tha thứ sự phản bội này!",
						"thai": "ยัง... ไม่จบ! ข้าไม่อภัยการทรยศนี้!",
						"hindi": "अभी... खत्म नहीं हुआ! मैं इस धोखे को माफ़ नहीं करूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "다시 와라. 더 큰 절망을 안고.",
						"english": "Return. With even greater despair.",
						"japanese": "また来るがいい。より大きな絶望を抱いてな。",
						"chinese": "再来吧。带着更大的绝望。",
						"french": "Reviens. Avec un désespoir encore plus grand.",
						"spanish": "Vuelve. Con una desesperación aún mayor.",
						"vietnamese": "Hãy trở lại. Cùng với nỗi tuyệt vọng lớn hơn.",
						"thai": "กลับมาอีกครั้ง... พร้อมความสิ้นหวังที่ยิ่งใหญ่กว่าเดิม",
						"hindi": "फिर आना। और भी बड़ी निराशा के साथ।"
					},
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크큭… 이겼다고 착각하나? 너희의 승리마저, 또 다른 배신을 위한… 씨앗일 뿐.",
						"english": "Heh heh... Do you mistake this for victory? Even your triumph is just a seed... for another betrayal.",
						"japanese": "ククク…勝ったと錯覚しているのか？お前たちの勝利さえ、別の裏切りのための…種でしかない。",
						"chinese": "呵呵…以为赢了吗？你们的胜利，不过是为下一次背叛埋下的…种子而已。",
						"french": "Hé hé... Croyez-vous avoir gagné ? Même votre victoire n'est qu'une graine... pour une autre trahison.",
						"spanish": "Je je... ¿Confundís esto con la victoria? Incluso vuestro triunfo es solo una semilla... para otra traición.",
						"vietnamese": "Khặc khặc… Ngươi lầm tưởng đây là chiến thắng sao? Ngay cả chiến thắng của các ngươi cũng chỉ là... hạt giống cho một sự phản bội khác.",
						"thai": "ฮึ่มๆ... คิดว่าชนะแล้วรึ? ชัยชนะของพวกเจ้าก็เป็นเพียง... เมล็ดพันธุ์สำหรับการทรยศครั้งต่อไปเท่านั้น",
						"hindi": "ही ही... क्या तुम्हें लगता है कि तुम जीत गए हो? तुम्हारी जीत भी, एक और धोखे के लिए... सिर्फ एक बीज है।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이겼다… 하지만… 이 씁쓸함은 뭐지?",
						"english": "We won... But... what is this bitterness?",
						"japanese": "勝った…だが…この苦さは何だ？",
						"chinese": "赢了…但是…这种苦涩感是什么？",
						"french": "Nous avons gagné... Mais... qu'est-ce que cette amertume ?",
						"spanish": "Hemos ganado... Pero... ¿qué es esta amargura?",
						"vietnamese": "Thắng rồi... Nhưng... cái vị đắng này là gì?",
						"thai": "เราชนะแล้ว... แต่... ความขมขื่นนี้คืออะไรกัน?",
						"hindi": "हम जीत गए... पर... यह कड़वाहट क्या है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "Pactweaver가 사라지자, 제단의 모래는 잠시 평온을 되찾았다.",
						"english": "As the Pactweaver vanished, the altar's sands briefly regained their calm.",
						"japanese": "パクトウィーバーが消え去ると、祭壇の砂は一時的に静けさを取り戻した。",
						"chinese": "当契约编织者消失后，祭坛的沙子暂时恢复了平静。",
						"french": "Alors que le Tisseur de Pactes disparaissait, les sables de l'autel retrouvèrent brièvement leur calme.",
						"spanish": "Cuando el Tejedor de Pactos desapareció, las arenas del altar recuperaron brevemente su calma.",
						"vietnamese": "Khi Kẻ Dệt Giao Ước biến mất, cát trên bàn thờ tạm thời lấy lại sự yên bình.",
						"thai": "เมื่อ Pactweaver หายไป, ทรายบนแท่นบูชากลับมาสงบชั่วครู่.",
						"hindi": "जैसे ही पैक्टवीवर गायब हुआ, वेदी की रेत ने क्षण भर के लिए अपनी शांति वापस पा ली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나 사막의 시스템적 배신은, 여전히 그 심연에 잠들어 있는 듯했다.",
						"english": "However, the desert's systemic betrayal still seemed to slumber in its depths.",
						"japanese": "しかし、砂漠のシステム的な裏切りは、依然としてその深淵に眠っているようだった。",
						"chinese": "然而，沙漠中系统的背叛，似乎依然沉睡在其深渊之中。",
						"french": "Cependant, la trahison systémique du désert semblait toujours sommeiller dans ses profondeurs.",
						"spanish": "Sin embargo, la traición sistémica del desierto parecía seguir durmiendo en sus profundidades.",
						"vietnamese": "Tuy nhiên, sự phản bội mang tính hệ thống của sa mạc, dường như vẫn đang ngủ yên trong vực thẳm của nó.",
						"thai": "ทว่า การทรยศเชิงระบบของทะเลทราย ยังคงดูเหมือนหลับใหลอยู่ในห้วงลึกนั้น",
						"hindi": "हालांकि, रेगिस्तान का प्रणालीगत विश्वासघात, अभी भी उसकी गहराइयों में सोया हुआ लग रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "승리는, 새로운 의문을 남겼다.",
						"english": "Victory left new questions.",
						"japanese": "勝利は、新たな疑問を残した。",
						"chinese": "胜利留下了新的疑问。",
						"french": "La victoire a soulevé de nouvelles questions.",
						"spanish": "La victoria dejó nuevas preguntas.",
						"vietnamese": "Chiến thắng đã để lại những câu hỏi mới.",
						"thai": "ชัยชนะทิ้งคำถามใหม่ไว้เบื้องหลัง",
						"hindi": "जीत ने नए सवाल छोड़ दिए।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "결국 모든 약속이 부서진 제단, Pactweaver의 심장에 도달했다.",
						"english": "Finally, we reached the Pactweaver's heart, the altar where all promises shattered.",
						"japanese": "ついに、全ての約束が砕かれた祭壇、Pactweaverの心臓に到達した。",
						"chinese": "最终，抵达了所有誓约破碎的祭坛，Pactweaver的心脏。",
						"french": "Finalement, nous avons atteint le cœur du Pactweaver, l'autel où toutes les promesses furent brisées.",
						"spanish": "Finalmente, llegamos al corazón del Pactweaver, el altar donde todas las promesas se hicieron añicos.",
						"vietnamese": "Cuối cùng, đã đến được trái tim của Pactweaver, nơi mọi lời hứa tan vỡ.",
						"thai": "ในที่สุด ก็มาถึงแท่นบูชาที่ทุกพันธสัญญาแตกสลาย ใจกลางของ Pactweaver",
						"hindi": "आख़िरकार, हम Pactweaver के हृदय तक पहुँच गए, वह वेदी जहाँ सभी वादे टूट गए थे।"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "amir",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "보아라, Pactweaver여! 준비된 희생양들을 바치나이다!",
						"english": "Behold, Pactweaver! We offer these prepared sacrifices!",
						"japanese": "見よ、Pactweaverよ！準備された生贄たちを捧げ奉る！",
						"chinese": "看啊，Pactweaver！献上已备好的祭品！",
						"french": "Vois, Pactweaver ! Nous t'offrons ces sacrifices préparés !",
						"spanish": "¡Contempla, Pactweaver! ¡Ofrecemos estos sacrificios preparados!",
						"vietnamese": "Hãy nhìn xem, Pactweaver! Chúng ta dâng những vật hiến tế đã chuẩn bị sẵn!",
						"thai": "จงดูเถิด Pactweaver! ข้าขอถวายเครื่องสังเวยที่เตรียมไว้แล้ว!",
						"hindi": "देखो, Pactweaver! हम यह तैयार बलिदान अर्पित करते हैं!"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그의 몸을 감싸던 자수정 장막이 산산이 부서지며, 그 안에서 수천 개의 계약서 파편이 솟구쳐 올랐다. 사막의 모래가 거대한 소용돌이를 이루며 그의 발아래서 맹렬히 춤췄다.",
						"english": "The amethyst shroud surrounding his body shattered into pieces, and thousands of contract fragments surged forth from within. The desert sands formed a massive vortex, dancing furiously at his feet.",
						"japanese": "彼の身を包んでいたアメジストの帳が粉々に砕け散り、その中から数千もの契約書の破片が噴き上がった。砂漠の砂は巨大な渦を巻き、彼の足元で猛烈に舞い踊った。",
						"chinese": "包裹着他身体的紫水晶帷幕碎裂开来，数千份契约碎片从中喷涌而出。沙漠的沙子形成巨大的漩涡，在他脚下狂舞。",
						"french": "Le voile d'améthyste qui enveloppait son corps se brisa en mille éclats, et des milliers de fragments de contrats jaillirent de l'intérieur. Le sable du désert forma un immense tourbillon, dansant furieusement à ses pieds.",
						"spanish": "El velo de amatista que envolvía su cuerpo se hizo añicos, y miles de fragmentos de contratos surgieron de su interior. La arena del desierto formó un remolino gigantesco, bailando furiosamente a sus pies.",
						"vietnamese": "Tấm màn thạch anh bao bọc cơ thể hắn vỡ tan thành từng mảnh, hàng ngàn mảnh hợp đồng bay vọt ra từ bên trong. Cát sa mạc tạo thành một cơn lốc khổng lồ, điên cuồng nhảy múa dưới chân hắn.",
						"thai": "ม่านอเมทิสต์ที่ปกคลุมร่างกายของเขาแตกกระจายเป็นเสี่ยงๆ พร้อมกับเศษชิ้นส่วนสัญญาหลายพันชิ้นพวยพุ่งออกมาจากข้างใน ทรายในทะเลทรายก่อตัวเป็นวังวนขนาดใหญ่ เต้นรำอย่างดุเดือดใต้ฝ่าเท้าของเขา",
						"hindi": "उसके शरीर को ढँकने वाला नीलम का आवरण चकनाचूर हो गया, और उसके भीतर से हज़ारों अनुबंधों के टुकड़े उछल पड़े। रेगिस्तान की रेत एक विशाल भंवर बनाकर उसके पैरों के नीचे तेज़ी से नाचने लगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔구나, 어리석은 자들.",
						"english": "You've come, fools.",
						"japanese": "来たか、愚か者ども。",
						"chinese": "来了，愚蠢的家伙们。",
						"french": "Vous êtes venus, insensés.",
						"spanish": "Han llegado, necios.",
						"vietnamese": "Ngươi đến rồi, lũ ngu xuẩn.",
						"thai": "มาแล้วสินะ, เจ้าพวกโง่เขลา.",
						"hindi": "आ गए तुम, मूर्खों।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네놈이… 모든 배신의 원흉인가!",
						"english": "You... are the root of all treachery!",
						"japanese": "貴様が…全ての裏切りの元凶か！",
						"chinese": "你就是…所有背叛的元凶吗！",
						"french": "Toi... tu es la source de toutes les trahisons !",
						"spanish": "¡Tú... eres el origen de toda traición!",
						"vietnamese": "Ngươi... chính là kẻ chủ mưu của mọi sự phản bội!",
						"thai": "แกนั่นแหละ... ต้นตอของการทรยศทั้งหมด!",
						"hindi": "तू ही है... सारी धोखेबाजी की जड़!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "너희는 그저 다음 배신을 위한 희생양일 뿐. 진정한 힘은, 파괴된 맹세에서 피어나는 법이지.",
						"english": "You are merely sacrifices for the next betrayal. True power blossoms from shattered vows.",
						"japanese": "お前たちは次なる裏切りのための生贄に過ぎない。真の力は、破壊された誓いから咲き誇るものだ。",
						"chinese": "你们不过是下一次背叛的牺牲品。真正的力量，是从被破坏的誓言中绽放的。",
						"french": "Vous n'êtes que des sacrifices pour la prochaine trahison. Le vrai pouvoir fleurit des serments brisés.",
						"spanish": "Sois meros sacrificios para la próxima traición. El verdadero poder florece de los juramentos rotos.",
						"vietnamese": "Các ngươi chỉ là vật tế cho sự phản bội tiếp theo. Sức mạnh chân chính, sinh ra từ những lời thề bị phá vỡ.",
						"thai": "พวกเจ้าเป็นแค่เครื่องสังเวยสำหรับการทรยศครั้งต่อไป พลังที่แท้จริงเบ่งบานจากคำสาบานที่แตกสลาย",
						"hindi": "तुम सिर्फ अगले धोखे के लिए बलि के बकरे हो। सच्ची शक्ति टूटे हुए वादों से ही पनपती है।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "angry",
					"content": {
						"korean": "블레이드마스터 세계에서 온 약속들이여, 이곳 사막에서 영원히 산산조각 나거라…",
						"english": "Promises from the world of Blademaster, shatter forever in this desert...",
						"japanese": "ブレードマスターの世界から来た約束よ、この砂漠で永遠に砕け散れ…",
						"chinese": "来自剑圣世界的誓言啊，在这片沙漠中永远粉碎吧…",
						"french": "Promesses du monde du Maître des Lames, brisez-vous à jamais dans ce désert...",
						"spanish": "Promesas del mundo de Blademaster, ¡haced pedazos para siempre en este desierto!",
						"vietnamese": "Những lời hứa từ thế giới Kiếm Sư, hãy vỡ tan vĩnh viễn trong sa mạc này...",
						"thai": "คำสัญญาจากโลกของ Blademaster จงแตกสลายตลอดไปในทะเลทรายแห่งนี้...",
						"hindi": "ब्लेडमास्टर की दुनिया से किए गए वादे, इस रेगिस्तान में हमेशा के लिए चकनाचूर हो जाओ..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템의 농간에 놀아나지 않겠어! 네놈을 끝장내주마!",
						"english": "I won't be toyed with by the system's tricks! I'll put an end to you!",
						"japanese": "システムの企みに踊らされない！貴様を終わらせてやる！",
						"chinese": "我不会被系统的阴谋摆布！我要终结你！",
						"french": "Je ne serai pas manipulé par les ruses du système ! Je vais en finir avec toi !",
						"spanish": "¡No seré un juguete de las artimañas del sistema! ¡Acabaré contigo!",
						"vietnamese": "Ta sẽ không để hệ thống lừa gạt! Ta sẽ kết liễu ngươi!",
						"thai": "ฉันจะไม่เล่นตามกลอุบายของระบบ! ฉันจะกำจัดแกให้สิ้นซาก!",
						"hindi": "मैं सिस्टम के हथकंडों का मोहरा नहीं बनूंगा! मैं तुझे खत्म कर दूंगा!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "자, 춤춰라! 절망의 춤을!",
						"english": "Now, dance! The dance of despair!",
						"japanese": "さあ、踊れ！絶望の舞を！",
						"chinese": "来吧，起舞吧！绝望之舞！",
						"french": "Maintenant, dansez ! La danse du désespoir !",
						"spanish": "¡Ahora, baila! ¡La danza de la desesperación!",
						"vietnamese": "Nào, nhảy đi! Vũ điệu của tuyệt vọng!",
						"thai": "มาเถอะ, เต้นรำสิ! การเต้นรำแห่งความสิ้นหวัง!",
						"hindi": "अब, नाचो! निराशा का नृत्य!"
					},
					"speaker": "amir",
					"emotion": "happy"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"깨진 약속의 제단에 침묵이 흘렀다.",
			"Pactweaver는 사라졌지만, 그가 남긴 그림자는 길었다.",
			"모든 계약과 맹세가 허상임을 깨달은 절망.",
			"무엇을 파괴했고, 무엇이 구원되었는가.",
			"이제 무엇을 믿을 것인가. 사막은 여전히 침묵했다."
		],
		"english": [
			"Silence fell upon the altar of broken promises.",
			"Pactweaver vanished, but his shadow lingered long.",
			"Despair dawned upon realizing all pacts and vows were illusions.",
			"What was destroyed, and what was saved?",
			"What to believe now? The desert remained silent."
		],
		"japanese": [
			"破られた約束の祭壇に沈黙が流れた。",
			"パクトウィーバーは消え去ったが、彼が残した影は長かった。",
			"全ての契約と誓いが虚像だと悟った絶望。",
			"何が破壊され、何が救われたのか。",
			"今、何を信じるべきか。砂漠は依然として沈黙していた。"
		],
		"chinese": [
			"沉默降临在破碎誓约之坛。",
			"契约编织者消失了，但他留下的阴影却很长。",
			"意识到所有契约与誓言皆为幻象的绝望。",
			"什么被摧毁了，什么被拯救了？",
			"现在该相信什么？沙漠依然沉默。"
		],
		"french": [
			"Le silence tomba sur l'autel des promesses brisées.",
			"Le Tisserand de Pactes a disparu, mais son ombre persistait.",
			"Le désespoir s'est installé en réalisant que tous les pactes et vœux n'étaient qu'illusions.",
			"Qu'est-ce qui a été détruit, et qu'est-ce qui a été sauvé ?",
			"Que croire maintenant ? Le désert restait silencieux."
		],
		"spanish": [
			"El silencio cayó sobre el altar de promesas rotas.",
			"Pactweaver desapareció, pero su sombra permaneció mucho tiempo.",
			"La desesperación al darse cuenta de que todos los pactos y juramentos eran ilusiones.",
			"¿Qué fue destruido y qué fue salvado?",
			"¿Qué creer ahora? El desierto permaneció en silencio."
		],
		"vietnamese": [
			"Sự im lặng bao trùm bàn thờ của những lời hứa tan vỡ.",
			"Pactweaver biến mất, nhưng cái bóng anh ta để lại thì dài.",
			"Tuyệt vọng khi nhận ra mọi giao ước và lời thề đều là ảo ảnh.",
			"Điều gì đã bị phá hủy, và điều gì đã được cứu rỗi?",
			"Giờ phải tin vào điều gì? Sa mạc vẫn im lặng."
		],
		"thai": [
			"ความเงียบปกคลุมแท่นบูชาแห่งคำสัญญาที่แตกสลาย",
			"แพ็กต์วีเวอร์หายไป แต่เงาที่เขาทิ้งไว้ยังคงยาวนาน",
			"ความสิ้นหวังเมื่อตระหนักว่าสัญญาและคำสาบานทั้งหมดเป็นภาพลวงตา",
			"อะไรถูกทำลาย และอะไรได้รับการกอบกู้?",
			"ตอนนี้จะเชื่ออะไร? ทะเลทรายยังคงเงียบงัน"
		],
		"hindi": [
			"टूटे वादों की वेदी पर चुप्पी छा गई।",
			"पैक्टवीवर गायब हो गया, पर उसकी परछाई देर तक बनी रही।",
			"यह जानकर निराशा हुई कि सभी समझौते और प्रतिज्ञाएँ भ्रम थीं।",
			"क्या नष्ट हुआ, और क्या बचाया गया?",
			"अब किस पर विश्वास करें? रेगिस्तान अभी भी खामोश था।"
		]
	},
	"prologue": {
		"korean": [
			"사막의 심장, 깨진 약속들의 제단.",
			"모든 기만과 배신이 이곳으로 이어졌다.",
			"아미르의 웃음 뒤에 숨겨진 진실.",
			"이제, 시스템의 마지막 배신과 마주할 시간이다."
		],
		"english": [
			"Heart of the desert, altar of broken promises.",
			"All deceit and betrayal led here.",
			"The truth hidden behind Amir's smile.",
			"Now, it's time to face the system's final betrayal."
		],
		"japanese": [
			"砂漠の心臓、破られた約束の祭壇。",
			"全ての欺瞞と裏切りがここに行き着いた。",
			"アミールの笑顔の裏に隠された真実。",
			"今、システムの最後の裏切りに立ち向かう時だ。"
		],
		"chinese": [
			"沙漠之心，破碎誓约之坛。",
			"所有欺骗与背叛皆汇聚于此。",
			"阿米尔笑容背后隐藏的真相。",
			"是时候面对系统的最终背叛了。"
		],
		"french": [
			"Cœur du désert, autel des promesses brisées.",
			"Toutes les tromperies et trahisons menaient ici.",
			"La vérité cachée derrière le sourire d'Amir.",
			"Il est temps d'affronter la trahison finale du système."
		],
		"spanish": [
			"Corazón del desierto, altar de promesas rotas.",
			"Todo engaño y traición condujo aquí.",
			"La verdad oculta tras la sonrisa de Amir.",
			"Ahora, es hora de enfrentar la traición final del sistema."
		],
		"vietnamese": [
			"Trái tim sa mạc, bàn thờ của những lời hứa tan vỡ.",
			"Mọi sự lừa dối và phản bội đều dẫn đến đây.",
			"Sự thật ẩn sau nụ cười của Amir.",
			"Giờ là lúc đối mặt với sự phản bội cuối cùng của hệ thống."
		],
		"thai": [
			"ใจกลางทะเลทราย แท่นบูชาแห่งคำสัญญาที่แตกสลาย",
			"ทุกการหลอกลวงและการหักหลังล้วนนำมาที่นี่",
			"ความจริงที่ซ่อนอยู่หลังรอยยิ้มของอามีร์",
			"ถึงเวลาเผชิญหน้ากับการทรยศครั้งสุดท้ายของระบบแล้ว"
		],
		"hindi": [
			"रेगिस्तान का दिल, टूटे वादों की वेदी।",
			"हर कपट और विश्वासघात यहीं आ पहुँचा।",
			"अमीर की मुस्कान के पीछे छिपा सच।",
			"अब, सिस्टम के अंतिम विश्वासघात का सामना करने का समय है।"
		]
	}
} as const;
