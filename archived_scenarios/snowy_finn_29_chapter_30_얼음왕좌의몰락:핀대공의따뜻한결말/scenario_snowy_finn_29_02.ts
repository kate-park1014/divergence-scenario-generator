export const scenario_snowy_finn_29_02 = {
	"scenario_id": "snowy_finn_29_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
					"emotion": "base",
					"content": {
						"korean": "얼음으로 뒤덮인 좁은 통로가 이어졌다.",
						"english": "A narrow, ice-covered passage continued.",
						"japanese": "氷に覆われた狭い通路が続いていた。",
						"chinese": "冰雪覆盖的狭窄通道向前延伸。",
						"french": "Un passage étroit, couvert de glace, continuait.",
						"spanish": "Un estrecho pasaje cubierto de hielo continuaba.",
						"vietnamese": "Một lối đi hẹp phủ đầy băng tiếp nối.",
						"thai": "ทางเดินแคบๆ ที่ปกคลุมด้วยน้ำแข็งทอดยาวต่อไป",
						"hindi": "बर्फ़ से ढका एक संकरा रास्ता आगे बढ़ता गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 건방진 것들.",
						"english": "To come this far... insolent fools.",
						"japanese": "ここまで来るとは…生意気な奴らめ。",
						"chinese": "竟敢来到这里……这些不知天高地厚的家伙。",
						"french": "Venir jusqu'ici... insolents.",
						"spanish": "¿Llegar hasta aquí...? ¡Insolentes!",
						"vietnamese": "Dám đến tận đây... lũ hỗn xược.",
						"thai": "กล้าดียังไงถึงมาถึงนี่… พวกบังอาจ!",
						"hindi": "यहाँ तक आने की हिम्मत... गुस्ताख़!"
					}
				},
				{
					"content": {
						"korean": "핀 대공. 이제 그만해.",
						"english": "Grand Duke Finn. Stop this now.",
						"japanese": "フィン大公。もうおやめください。",
						"chinese": "芬大公。到此为止吧。",
						"french": "Grand-Duc Finn. Arrêtez ça maintenant.",
						"spanish": "Gran Duque Finn. Basta ya.",
						"vietnamese": "Đại Công tước Finn. Dừng lại đi.",
						"thai": "แกรนด์ดุ๊กฟินน์ หยุดเถอะ",
						"hindi": "ग्रैंड ड्यूक फिन। अब बस भी करो।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "inka",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…대공님, 이 이상은…",
						"english": "...Grand Duke, any further is...",
						"japanese": "…大公様、これ以上は…",
						"chinese": "……大公殿下，再这样下去……",
						"french": "...Grand-Duc, plus loin est...",
						"spanish": "...Gran Duque, más allá de esto...",
						"vietnamese": "...Đại Công tước, nếu tiếp tục nữa thì...",
						"thai": "…ท่านแกรนด์ดุ๊ก หากเลยไปกว่านี้…",
						"hindi": "...महामहिम, इससे आगे..."
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "닥쳐라, 인카! 내가 아직 이 설산의 왕이다!",
						"english": "Silence, Inka! I am still the king of this snowy mountain!",
						"japanese": "黙れ、インカ！ 私がまだこの雪山の王だ！",
						"chinese": "闭嘴，因卡！我仍是这雪山之王！",
						"french": "Tais-toi, Inka ! Je suis toujours le roi de cette montagne enneigée !",
						"spanish": "¡Cállate, Inka! ¡Todavía soy el rey de esta montaña nevada!",
						"vietnamese": "Im đi, Inka! Ta vẫn là vua của ngọn núi tuyết này!",
						"thai": "เงียบซะ อินก้า! ข้ายังคงเป็นราชาแห่งขุนเขาหิมะนี้!",
						"hindi": "चुप रहो, इंका! मैं अभी भी इस बर्फीले पहाड़ का राजा हूँ!"
					}
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "하지만 대공님은…",
						"english": "But, Grand Duke...",
						"japanese": "しかし大公様は…",
						"chinese": "可是大公殿下……",
						"french": "Mais, Grand-Duc...",
						"spanish": "Pero, Gran Duque...",
						"vietnamese": "Nhưng thưa Đại Công tước...",
						"thai": "แต่ท่านแกรนด์ดุ๊ก…",
						"hindi": "लेकिन महामहिम..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 필살기를 맛보게 해주지! 크크!",
						"english": "Taste my ultimate move! Hehehe!",
						"japanese": "私の必殺技、味わってみろ！ククク！",
						"chinese": "尝尝我的必杀技！呵呵！",
						"french": "Goûte à mon coup spécial ! Hahaha !",
						"spanish": "¡Prueba mi movimiento especial! ¡Jajaja!",
						"vietnamese": "Hãy nếm chiêu cuối của ta! Khà khà!",
						"thai": "เจ้าจะได้ลิ้มรสท่าไม้ตายของข้า! คิกๆ!",
						"hindi": "तुम्हें मेरी विशेष चाल का स्वाद चखाऊँगा! ही ही ही!"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 더욱 거세졌다. 핀의 얼음 왕좌는 더욱 위태로워 보였다.",
						"english": "The cold wind grew fiercer. Finn's ice throne seemed more precarious.",
						"japanese": "冷たい風がさらに激しくなった。フィンの氷の玉座は、より危うく見えた。",
						"chinese": "寒风愈发凛冽。芬恩的冰之王座看起来更加岌岌可危。",
						"french": "Le vent froid se fit plus violent. Le trône de glace de Finn semblait de plus en plus précaire.",
						"spanish": "El viento frío se hizo más intenso. El trono de hielo de Finn parecía más precario.",
						"vietnamese": "Gió lạnh càng lúc càng dữ dội. Ngai vàng băng giá của Finn trông càng thêm chênh vênh.",
						"thai": "ลมหนาวรุนแรงขึ้นเรื่อยๆ บัลลังก์น้ำแข็งของฟินน์ดูเปราะบางลงทุกที",
						"hindi": "ठंडी हवा और तेज़ हो गई। फ़िन का बर्फीला सिंहासन और भी ख़तरनाक लग रहा था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "random_boss",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 위엄이 느껴지지 않나? 감히 이 몸을…",
						"english": "Can't you feel my dignity? How dare you…",
						"japanese": "私の威厳が感じられないのか？よくもこの私に…",
						"chinese": "感觉不到我的威严吗？竟敢对我…",
						"french": "Ne sens-tu pas ma dignité ? Comment oses-tu me…",
						"spanish": "¿No sientes mi dignidad? ¡Cómo te atreves a…!",
						"vietnamese": "Ngươi không cảm nhận được uy nghiêm của ta sao? Dám cả gan…",
						"thai": "เจ้าไม่รู้สึกถึงศักดิ์ศรีของข้าหรือไร? บังอาจมา…",
						"hindi": "क्या तुम्हें मेरी गरिमा महसूस नहीं होती? तुम्हारी हिम्मत कैसे हुई…"
					}
				},
				{
					"action": "enter",
					"speaker": "inka",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "위엄은 무슨. 덜덜 떨고 있잖아.",
						"english": "Dignity? You're trembling!",
						"japanese": "威厳なんて。震えてるじゃないか。",
						"chinese": "什么威严。你都在发抖了。",
						"french": "La dignité ? Tu trembles de tout ton corps.",
						"spanish": "¿Dignidad? ¡Estás temblando!",
						"vietnamese": "Uy nghiêm gì chứ. Ngươi đang run cầm cập kìa.",
						"thai": "ศักดิ์ศรีอะไรกัน เจ้ากำลังตัวสั่นอยู่นะ",
						"hindi": "गरिमा क्या? तुम कांप रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…맞아요. 대공님은 사실…",
						"english": "…That's right. The Archduke is actually…",
						"japanese": "…そうです。大公様は実は…",
						"chinese": "…没错。大公大人其实是…",
						"french": "…C'est exact. Le Grand-Duc est en fait…",
						"spanish": "…Así es. El Archiduque es en realidad…",
						"vietnamese": "…Đúng vậy. Đại công tước thật ra là…",
						"thai": "…จริงด้วยครับ ท่านอาร์คดยุกจริงๆ แล้วคือ…",
						"hindi": "…हाँ, सही है। आर्कड्यूक वास्तव में…"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "인카! 또 허튼소리 할 셈이냐!",
						"english": "Inka! Are you going to spout nonsense again!",
						"japanese": "インカ！またくだらないことを言うつもりか！",
						"chinese": "因卡！你又想胡说八道吗！",
						"french": "Inka ! Vas-tu encore dire des bêtises !",
						"spanish": "¡Inka! ¡Vas a decir tonterías otra vez!",
						"vietnamese": "Inka! Ngươi định nói điều vô nghĩa nữa sao!",
						"thai": "อินคา! เจ้าจะพูดเรื่องไร้สาระอีกแล้วหรือ!",
						"hindi": "इंका! क्या तुम फिर से बकवास करने वाली हो!"
					}
				},
				{
					"content": {
						"korean": "더 이상 숨길 수 없어요. 대공님은…",
						"english": "I can't hide it anymore. The Archduke is…",
						"japanese": "もう隠せません。大公様は…",
						"chinese": "我再也藏不住了。大公大人是…",
						"french": "Je ne peux plus le cacher. Le Grand-Duc est…",
						"spanish": "Ya no puedo ocultarlo. El Archiduque es…",
						"vietnamese": "Tôi không thể giấu được nữa. Đại công tước là…",
						"thai": "ฉันซ่อนมันไว้อีกไม่ได้แล้วครับ ท่านอาร์คดยุกคือ…",
						"hindi": "मैं अब इसे और छिपा नहीं सकता। आर्कड्यूक…"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "왕좌의 얼음 조각들이 산산이 부서져 내렸다.",
						"english": "The ice fragments of the throne shattered into pieces.",
						"japanese": "玉座の氷の破片が粉々に砕け散った。",
						"chinese": "王座的冰块碎裂开来。",
						"french": "Les fragments de glace du trône se brisèrent en mille morceaux.",
						"spanish": "Los fragmentos de hielo del trono se hicieron añicos.",
						"vietnamese": "Những mảnh băng trên ngai vàng vỡ vụn ra.",
						"thai": "เศษน้ำแข็งบนบัลลังก์แตกกระจายเป็นเสี่ยงๆ",
						"hindi": "सिंहासन के बर्फ के टुकड़े चकनाचूर हो गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "핀 대공님은… 사실 길을 잃은 펭귄일 뿐이에요.",
						"english": "Archduke Finn is… actually just a lost penguin.",
						"japanese": "フィン大公様は…実は道に迷ったペンギンに過ぎないのです。",
						"chinese": "芬恩大公大人…其实只是一只迷路的企鹅。",
						"french": "Le Grand-Duc Finn n'est… en fait qu'un pingouin égaré.",
						"spanish": "El Archiduque Finn es… en realidad solo un pingüino perdido.",
						"vietnamese": "Đại công tước Finn… thật ra chỉ là một chú chim cánh cụt bị lạc đường mà thôi.",
						"thai": "ท่านอาร์คดยุกฟินน์…จริงๆ แล้วก็แค่เพนกวินหลงทางตัวหนึ่งเท่านั้นเอง",
						"hindi": "आर्कड्यूक फ़िन… वास्तव में बस एक खोया हुआ पेंगुइन है।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "뭐라고?",
						"english": "What?!",
						"japanese": "何だって？",
						"chinese": "你说什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "따뜻한 남쪽 나라를 찾아 헤매다가… 여기까지 오게 된 거예요.",
						"english": "I wandered, searching for a warm southern land… and ended up here.",
						"japanese": "暖かい南の国を探し回って…ここまで来てしまいました。",
						"chinese": "我一路寻找温暖的南方国度…才来到了这里。",
						"french": "J'ai erré à la recherche d'un pays chaud du sud… et me suis retrouvé ici.",
						"spanish": "Estuve vagando en busca de una tierra cálida del sur… y así llegué hasta aquí.",
						"vietnamese": "Tôi lang thang tìm kiếm một vùng đất phía nam ấm áp… và cuối cùng đã đến đây.",
						"thai": "ฉันร่อนเร่ตามหาดินแดนทางใต้ที่อบอุ่น…จนมาถึงที่นี่",
						"hindi": "मैं एक गर्म दक्षिणी भूमि की तलाश में भटकता रहा… और यहाँ आ गया।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "random_boss",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "거짓말이다! 전부 거짓말이다!",
						"english": "It's a lie! It's all a lie!",
						"japanese": "嘘だ！全部嘘だ！",
						"chinese": "是谎言！全是谎言！",
						"french": "C'est un mensonge ! Tout est mensonge !",
						"spanish": "¡Es mentira! ¡Todo es mentira!",
						"vietnamese": "Nói dối! Tất cả là nói dối!",
						"thai": "โกหก! ทั้งหมดเป็นเรื่องโกหก!",
						"hindi": "यह झूठ है! सब झूठ है!"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "대공님은 추위를 너무 타서… 늘 따뜻한 것을 찾으셨어요.",
						"english": "His Grace is very sensitive to cold… He always sought warmth.",
						"japanese": "大公様は寒がりで…いつも暖かいものを探しておられました。",
						"chinese": "大公殿下非常怕冷…一直都在寻找温暖之物。",
						"french": "Son Altesse est très sensible au froid… Il cherchait toujours la chaleur.",
						"spanish": "Su Alteza es muy sensible al frío… Siempre buscaba el calor.",
						"vietnamese": "Đại Công tước rất sợ lạnh… Ngài ấy luôn tìm kiếm sự ấm áp.",
						"thai": "ท่านแกรนด์ดยุกขี้หนาวมาก…ท่านมักจะมองหาสิ่งที่อบอุ่นเสมอ",
						"hindi": "महामहिम को ठंड बहुत लगती है… वह हमेशा गर्मी की तलाश में रहते थे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 지금까지 그 허세는… 전부?",
						"english": "So all that bravado until now… was it all a pretense?",
						"japanese": "じゃあ今までのその虚勢は…全部？",
						"chinese": "那么至今为止的那些虚张声势…都是？",
						"french": "Alors toute cette fanfaronnade jusqu'à présent… n'était que ça ?",
						"spanish": "¿Entonces todo ese alarde hasta ahora… era solo eso?",
						"vietnamese": "Vậy tất cả sự tự phụ đó cho đến giờ… đều là giả dối sao?",
						"thai": "งั้นความโอ้อวดทั้งหมดจนถึงตอนนี้…ก็เป็นแค่?",
						"hindi": "तो अब तक का सारा घमंड… बस?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "왕의 허세는 완전히 무너졌다. 남은 것은 오직 두려움뿐이었다.",
						"english": "The king's bravado completely crumbled. All that remained was fear.",
						"japanese": "王の虚勢は完全に崩れ去った。残されたのは恐怖だけだった。",
						"chinese": "国王的虚张声势彻底瓦解了。剩下的只有恐惧。",
						"french": "La fanfaronnade du roi s'est complètement effondrée. Il ne restait que la peur.",
						"spanish": "La bravuconería del rey se desmoronó por completo. Solo quedaba el miedo.",
						"vietnamese": "Sự tự phụ của nhà vua hoàn toàn sụp đổ. Tất cả những gì còn lại chỉ là nỗi sợ hãi.",
						"thai": "ความโอ้อวดของราชาพังทลายลงอย่างสิ้นเชิง สิ่งที่เหลืออยู่มีเพียงความกลัวเท่านั้น",
						"hindi": "राजा का घमंड पूरी तरह से टूट गया। बचा था तो बस डर।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "random_boss",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니야! 나는 왕이다! 이 설산의 유일한 지배자!",
						"english": "No! I am the king! The sole ruler of this snowy mountain!",
						"japanese": "違う！私は王だ！この雪山の唯一の支配者！",
						"chinese": "不！我是国王！这座雪山唯一的统治者！",
						"french": "Non ! Je suis le roi ! Le seul souverain de cette montagne enneigée !",
						"spanish": "¡No! ¡Soy el rey! ¡El único gobernante de esta montaña nevada!",
						"vietnamese": "Không! Ta là vua! Kẻ thống trị duy nhất của ngọn núi tuyết này!",
						"thai": "ไม่ใช่! ฉันคือราชา! ผู้ปกครองเพียงหนึ่งเดียวของภูเขาหิมะนี้!",
						"hindi": "नहीं! मैं राजा हूँ! इस बर्फीले पहाड़ का एकमात्र शासक!"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제 그만해. 아무도 안 믿어.",
						"english": "Stop it now. No one believes you.",
						"japanese": "もうやめて。誰も信じない。",
						"chinese": "住手吧。没有人相信你。",
						"french": "Arrête maintenant. Personne ne te croit.",
						"spanish": "Detente ahora. Nadie te cree.",
						"vietnamese": "Dừng lại đi. Không ai tin ngươi đâu.",
						"thai": "พอได้แล้ว ไม่มีใครเชื่อหรอก",
						"hindi": "अब बस करो। कोई तुम्हें नहीं मानता।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "대공님… 더 이상 혼자 힘들어하지 마세요.",
						"english": "Your Grace… Don't struggle alone anymore.",
						"japanese": "大公様…もう一人で苦しまないでください。",
						"chinese": "大公殿下…请不要再独自承受痛苦了。",
						"french": "Votre Altesse… Ne souffrez plus seul.",
						"spanish": "Su Alteza… No sufra más solo.",
						"vietnamese": "Đại Công tước… Đừng chịu đựng một mình nữa.",
						"thai": "ท่านแกรนด์ดยุก…อย่าทนทุกข์อยู่คนเดียวอีกเลย",
						"hindi": "महामहिम… अब अकेले संघर्ष न करें।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "시끄럽다! 너희를 전부 얼려버릴 테다!",
						"english": "Quiet! I'll freeze you all!",
						"japanese": "うるさい！お前たちを皆凍らせてやる！",
						"chinese": "闭嘴！我会把你们全部冻结！",
						"french": "Silence ! Je vais tous vous geler !",
						"spanish": "¡Cállense! ¡Los congelaré a todos!",
						"vietnamese": "Im đi! Ta sẽ đóng băng tất cả các ngươi!",
						"thai": "เงียบไปเลย! ฉันจะแช่แข็งพวกแกทั้งหมด!",
						"hindi": "चुप रहो! मैं तुम सबको जमा दूँगा!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…대공님도, 사실 따뜻한 것을 바라고 있잖아요.",
						"english": "…Your Grace, you actually desire warmth too, don't you?",
						"japanese": "…大公様も、本当は暖かいものを望んでいるのでしょう？",
						"chinese": "…大公殿下，其实您也渴望温暖，不是吗？",
						"french": "…Votre Altesse, vous aussi, vous désirez la chaleur, n'est-ce pas ?",
						"spanish": "…Su Alteza, usted también desea el calor, ¿no es así?",
						"vietnamese": "…Đại Công tước, thực ra ngài cũng đang khao khát sự ấm áp mà, phải không?",
						"thai": "…ท่านแกรนด์ดยุกเองก็ปรารถนาความอบอุ่นไม่ใช่หรือ?",
						"hindi": "…महामहिम, आप भी तो वास्तव में गर्मी चाहते हैं, है ना?"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크…윽… 이렇게… 패배하다니…",
						"english": "Ugh... to be... defeated like this...",
						"japanese": "く…くっ…こんな…敗北だなんて…",
						"chinese": "呃…竟…竟会这样…败北…",
						"french": "Urgh... être... vaincu ainsi...",
						"spanish": "Arg... ser... derrotado así...",
						"vietnamese": "Ư... ưm... bị... đánh bại thế này...",
						"thai": "อึก... ต้อง... พ่ายแพ้แบบนี้หรือ...",
						"hindi": "उह... इस तरह... हारना..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이제 그만… 쉬어도 돼, 핀.",
						"english": "It's alright now... you can rest, Finn.",
						"japanese": "もういい…休んでいいよ、フィン。",
						"chinese": "够了…你可以休息了，芬。",
						"french": "C'est bon maintenant... tu peux te reposer, Finn.",
						"spanish": "Ya está bien... puedes descansar, Finn.",
						"vietnamese": "Đủ rồi... ngươi có thể nghỉ ngơi, Finn.",
						"thai": "พอแล้ว... เจ้าพักได้แล้ว, ฟินน์",
						"hindi": "अब बस... तुम आराम कर सकते हो, फिन।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "대공님… 이제 따뜻한 옷을 드릴게요.",
						"english": "Archduke... I'll get you warm clothes now.",
						"japanese": "大公様…もう暖かい服をお持ちしますね。",
						"chinese": "大公大人…我现在就给您拿温暖的衣服。",
						"french": "Archiduc... Je vais vous apporter des vêtements chauds maintenant.",
						"spanish": "Archiduque... Le traeré ropa abrigada ahora.",
						"vietnamese": "Đại công tước... Ta sẽ mang quần áo ấm cho ngài bây giờ.",
						"thai": "อาร์คดยุก... ข้าจะหาเสื้อผ้าอุ่นๆ มาให้ท่านเดี๋ยวนี้",
						"hindi": "आर्कड्यूक... मैं अब आपको गर्म कपड़े दूंगा।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "따뜻한… 옷…",
						"english": "Warm... clothes...",
						"japanese": "暖かい…服…",
						"chinese": "温暖的…衣服…",
						"french": "Des vêtements... chauds...",
						"spanish": "Ropa... abrigada...",
						"vietnamese": "Quần áo... ấm...",
						"thai": "เสื้อผ้า... อุ่นๆ...",
						"hindi": "गर्म... कपड़े..."
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "핀 대공의 허세는 완전히 녹아내렸다.",
						"english": "Archduke Finn's bluster completely melted away.",
						"japanese": "フィン大公の虚勢は完全に溶け落ちた。",
						"chinese": "芬大公的虚张声势彻底瓦解了。",
						"french": "L'arrogance de l'Archiduc Finn s'était complètement évanouie.",
						"spanish": "La fanfarronería del Archiduque Finn se desvaneció por completo.",
						"vietnamese": "Sự ngạo mạn của Đại Công Tước Finn đã tan chảy hoàn toàn.",
						"thai": "ความโอ้อวดของอาร์คดยุกฟินน์ละลายหายไปจนหมดสิ้น",
						"hindi": "आर्कड्यूक फिन का अहंकार पूरी तरह पिघल गया था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하지만 그의 진짜 소원은… 아직 해결되지 않았다.",
						"english": "But his true wish... remained unfulfilled.",
						"japanese": "しかし彼の本当の願いは…まだ解決されていない。",
						"chinese": "然而他真正的愿望…尚未实现。",
						"french": "Mais son véritable souhait... n'était pas encore réalisé.",
						"spanish": "Pero su verdadero deseo... aún no se había cumplido.",
						"vietnamese": "Nhưng mong muốn thực sự của ngài... vẫn chưa được giải quyết.",
						"thai": "แต่ความปรารถนาที่แท้จริงของเขา... ยังคงไม่ได้รับการแก้ไข",
						"hindi": "लेकिन उसकी असली इच्छा... अभी भी अधूरी थी।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "핀 대공의 필살기가 탐험대를 얼려버렸다.",
						"english": "Grand Duke Finn's ultimate move froze the expedition team.",
						"japanese": "フィン大公の必殺技が探検隊を凍らせた。",
						"chinese": "芬恩大公的必杀技冻结了探险队。",
						"french": "Le coup fatal du Grand Duc Finn a gelé l'équipe d'expédition.",
						"spanish": "El movimiento final del Gran Duque Finn congeló al equipo de expedición.",
						"vietnamese": "Chiêu cuối của Đại Công tước Finn đã đóng băng đội thám hiểm.",
						"thai": "ท่าไม้ตายของแกรนด์ดยุกฟินน์ทำให้ทีมสำรวจแข็งตาย",
						"hindi": "ग्रैंड ड्यूक फिन के विशेष हमले ने अभियान दल को जमा दिया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "하찮은 것들! 감히 왕에게 덤비다니!",
						"english": "Insignificant fools! How dare you challenge the King!",
						"japanese": "愚かな者たちめ！よくも王に逆らったな！",
						"chinese": "渺小的东西！竟敢挑战国王！",
						"french": "Minables créatures ! Comment osez-vous défier le Roi !",
						"spanish": "¡Insignificantes! ¡Cómo osáis desafiar al Rey!",
						"vietnamese": "Lũ vô dụng! Dám cả gan thách thức Đức Vua!",
						"thai": "พวกกระจอก! กล้าดียังไงมาท้าทายฝ่าบาท!",
						"hindi": "तुच्छ प्राणी! तुम्हारी हिम्मत कैसे हुई राजा को चुनौती देने की!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 포기 안 해!",
						"english": "Not yet... I won't give up!",
						"japanese": "まだ…諦めない！",
						"chinese": "还没…我不会放弃！",
						"french": "Pas encore… Je n'abandonnerai pas !",
						"spanish": "¡Todavía no… no me rendiré!",
						"vietnamese": "Chưa… tôi sẽ không bỏ cuộc!",
						"thai": "ยัง… ฉันไม่ยอมแพ้!",
						"hindi": "अभी नहीं… मैं हार नहीं मानूँगा!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 왕좌는 완전히 부서져 내렸다. 남은 것은 핀 대공의 분노뿐이었다.",
						"english": "The Ice Throne was completely shattered. Only Archduke Finn's wrath remained.",
						"japanese": "氷の玉座は完全に砕け散った。残るはフィン大公の怒りのみ。",
						"chinese": "冰之王座已彻底崩塌。只剩下芬大公的怒火。",
						"french": "Le Trône de Glace était complètement brisé. Seule la fureur de l'Archiduc Finn subsistait.",
						"spanish": "El Trono de Hielo se hizo añicos por completo. Solo la ira del Archiduque Finn permaneció.",
						"vietnamese": "Ngai Băng đã hoàn toàn tan vỡ. Chỉ còn lại cơn thịnh nộ của Đại Công Tước Finn.",
						"thai": "บัลลังก์น้ำแข็งถูกทำลายลงอย่างสิ้นเชิง เหลือเพียงความโกรธเกรี้ยวของอาร์คดยุกฟินน์เท่านั้น",
						"hindi": "हिम सिंहासन पूरी तरह से टूट गया था। केवल आर्कड्यूक फिन का क्रोध शेष था।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"speaker": "random_boss",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "내 진실을 파헤치다니… 용서 못 해!",
						"english": "Daring to unearth my truth... Unforgivable!",
						"japanese": "私の真実を暴くとは…許さん！",
						"chinese": "竟敢揭露我的真相…不可饶恕！",
						"french": "Oser déterrer ma vérité... Impardonnable !",
						"spanish": "¡Atreverse a desenterrar mi verdad... imperdonable!",
						"vietnamese": "Dám đào bới sự thật của ta... Không thể tha thứ!",
						"thai": "บังอาจเปิดเผยความจริงของข้า... ไม่ให้อภัย!",
						"hindi": "मेरे सत्य को उजागर करने की हिम्मत... अक्षम्य!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "내 필살기! 슈퍼 울트라 아이스 슬라이딩!",
						"english": "My ultimate move! Super Ultra Ice Sliding!",
						"japanese": "我が必殺技！スーパーウルトラアイススライディング！",
						"chinese": "我的必杀技！超级无敌冰之滑行！",
						"french": "Mon attaque ultime ! Super Ultra Glissade de Glace !",
						"spanish": "¡Mi ataque definitivo! ¡Súper Ultra Deslizamiento de Hielo!",
						"vietnamese": "Chiêu cuối của ta! Trượt Băng Siêu Cấp Cực Hạn!",
						"thai": "ท่าไม้ตายของข้า! ซูเปอร์อัลตร้าน้ำแข็งสไลด์!",
						"hindi": "मेरी अंतिम चाल! सुपर अल्ट्रा आइस स्लाइडिंग!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 널 막을 거야!",
						"english": "We'll stop you!",
						"japanese": "私たちがあなたを止める！",
						"chinese": "我们会阻止你的！",
						"french": "Nous t'arrêterons !",
						"spanish": "¡Te detendremos!",
						"vietnamese": "Chúng ta sẽ ngăn ngươi lại!",
						"thai": "พวกเราจะหยุดเจ้าเอง!",
						"hindi": "हम तुम्हें रोकेंगे!"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"왕좌는 얼음처럼 차갑고, 동시에 녹아내렸다.",
			"그의 시종은 더 이상 거짓을 품을 수 없었다.",
			"폭풍처럼 몰아치는 진실 앞에서, 왕의 가면은 산산이 부서졌다.",
			"모든 것을 알아버린 순간, 이 얼음성에 균열이 시작되었다."
		],
		"english": [
			"The throne was ice-cold, yet melting.",
			"His attendant could no longer harbor lies.",
			"Before the storm of truth, the king's mask shattered.",
			"The moment everything was known, cracks began to form in this ice castle."
		],
		"japanese": [
			"玉座は氷のように冷たく、同時に溶けていた。",
			"彼の従者はもはや嘘を抱えきれなかった。",
			"嵐のように押し寄せる真実の前で、王の仮面は粉々に砕け散った。",
			"全てを知ってしまった瞬間、この氷の城に亀裂が入り始めた。"
		],
		"chinese": [
			"王座冰冷，却也在同时融化。",
			"他的侍从再也无法藏匿谎言。",
			"在风暴般的真相面前，王的假面支离破碎。",
			"当一切大白于天下，这座冰城开始出现裂痕。"
		],
		"french": [
			"Le trône était froid comme la glace, et pourtant il fondait.",
			"Son serviteur ne pouvait plus dissimuler de mensonges.",
			"Face à la vérité déchaînée comme une tempête, le masque du roi vola en éclats.",
			"L'instant où tout fut révélé, des fissures apparurent dans ce château de glace."
		],
		"spanish": [
			"El trono estaba frío como el hielo, pero se derretía.",
			"Su sirviente ya no podía ocultar más mentiras.",
			"Ante la verdad que arremetía como una tormenta, la máscara del rey se hizo añicos.",
			"En el instante en que todo se supo, las grietas empezaron a formarse en este castillo de hielo."
		],
		"vietnamese": [
			"Ngai vàng lạnh như băng, nhưng lại tan chảy.",
			"Thị thần của hắn không thể che giấu sự dối trá thêm nữa.",
			"Trước sự thật như bão tố, mặt nạ của nhà vua đã vỡ tan tành.",
			"Khoảnh khắc mọi thứ được hé lộ, những vết nứt bắt đầu xuất hiện trong lâu đài băng này."
		],
		"thai": [
			"บัลลังก์เย็นเยียบดุจน้ำแข็ง ทว่าก็กำลังละลาย",
			"ผู้ติดตามของเขาไม่สามารถปกปิดความจริงได้อีกต่อไป",
			"เบื้องหน้าความจริงที่พัดกระหน่ำดุจพายุ หน้ากากของราชาแตกเป็นเสี่ยง",
			"ในพริบตาที่ทุกสิ่งถูกเปิดเผย รอยร้าวก็เริ่มปรากฏบนปราสาทน้ำแข็งแห่งนี้"
		],
		"hindi": [
			"सिंहासन बर्फ़-सा ठंडा था, और साथ ही पिघल रहा था।",
			"उसका परिचारक अब और झूठ नहीं छिपा सकता था।",
			"सत्य के तूफ़ान के सामने, राजा का मुखौटा टूट गया।",
			"जिस पल सब कुछ पता चला, इस बर्फ़ के महल में दरारें पड़ने लगीं।"
		]
	}
} as const;
