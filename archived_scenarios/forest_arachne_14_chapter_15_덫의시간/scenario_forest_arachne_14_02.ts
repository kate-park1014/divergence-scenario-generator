export const scenario_forest_arachne_14_02 = {
	"scenario_id": "forest_arachne_14_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 더욱 깊어졌다. 숨 막히는 침묵만 흐를 뿐.",
			"어딘가 시간마저 뒤틀린 듯, 기묘한 위화감이 감돌았다.",
			"동료의 희생, 그리고 드러나는 저주의 징조.",
			"이제, 그들의 동맹은 흔들리기 시작한다."
		],
		"english": [
			"The forest deepened. Only suffocating silence remained.",
			"Time itself seemed twisted; a strange unease lingered.",
			"A comrade's sacrifice, and the emerging signs of a curse.",
			"Now, their alliance begins to waver."
		],
		"japanese": [
			"森はさらに深くなった。息詰まるような沈黙だけが流れる。",
			"まるで時間さえも歪んでいるかのよう、奇妙な違和感が漂っていた。",
			"仲間の犠牲、そして現れる呪いの兆候。",
			"今、彼らの同盟は揺らぎ始める。"
		],
		"chinese": [
			"森林愈发深邃。唯有令人窒息的寂静。",
			"仿佛时间也扭曲了，弥漫着诡异的不适感。",
			"伙伴的牺牲，以及显现的诅咒迹象。",
			"如今，他们的同盟开始动摇。"
		],
		"french": [
			"La forêt s'épaississait. Seul un silence étouffant régnait.",
			"Le temps lui-même semblait distordu, une étrange sensation planait.",
			"Le sacrifice d'un compagnon, et les signes d'une malédiction.",
			"Maintenant, leur alliance commence à vaciller."
		],
		"spanish": [
			"El bosque se hizo más profundo. Solo reinaba un silencio asfixiante.",
			"El tiempo mismo parecía distorsionado; una extraña inquietud persistía.",
			"El sacrificio de un compañero y los signos de una maldición.",
			"Ahora, su alianza comienza a tambalearse."
		],
		"vietnamese": [
			"Rừng càng sâu. Chỉ còn sự im lặng nghẹt thở.",
			"Thời gian dường như cũng méo mó, một cảm giác bất an kỳ lạ bao trùm.",
			"Sự hy sinh của đồng đội, và những dấu hiệu nguyền rủa lộ ra.",
			"Giờ đây, liên minh của họ bắt đầu lung lay."
		],
		"thai": [
			"ป่าลึกขึ้นเรื่อยๆ มีเพียงความเงียบงันที่น่าอึดอัด",
			"ราวกับกาลเวลาบิดเบี้ยว ความรู้สึกประหลาดลอยอยู่",
			"การเสียสละของสหาย และลางบอกเหตุของคำสาปที่ปรากฏ",
			"บัดนี้ พันธมิตรของพวกเขาเริ่มสั่นคลอน"
		],
		"hindi": [
			"वन और गहरा हो गया। बस घुटन भरी खामोशी थी。",
			"मानो समय भी मुड़ गया हो, एक अजीब बेचैनी छाई हुई थी।",
			"एक साथी का बलिदान, और श्राप के उभरते संकेत।",
			"अब, उनका गठबंधन डगमगाने लगा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 끈적한 어둠이 그들을 감쌌다. 시간마저 멈춘 듯했다.",
						"english": "The forest's sticky darkness enveloped them. Time seemed to stand still.",
						"japanese": "森のねっとりとした闇が彼らを包み込んだ。時間さえ止まったようだった。",
						"chinese": "森林黏稠的黑暗笼罩着他们。时间仿佛都停滞了。",
						"french": "L'obscurité gluante de la forêt les enveloppait. Le temps semblait s'être arrêté.",
						"spanish": "La oscuridad pegajosa del bosque los envolvió. El tiempo parecía haberse detenido.",
						"vietnamese": "Bóng tối dính nhớp của rừng bao trùm họ. Thời gian dường như ngưng đọng.",
						"thai": "ความมืดมิดเหนียวหนึบของป่าห่อหุ้มพวกเขาไว้ ราวกับเวลาหยุดนิ่ง",
						"hindi": "जंगल का चिपचिपा अंधेरा उन्हें घेर लिया। समय थम-सा गया था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이상해... 여기, 공기가 너무 무거워.",
						"english": "Strange... The air here is so heavy.",
						"japanese": "おかしい…ここ、空気が重すぎる。",
						"chinese": "好奇怪……这里的空气好沉重。",
						"french": "Étrange... L'air ici est si lourd.",
						"spanish": "Extraño... El aire aquí es muy pesado.",
						"vietnamese": "Lạ thật... Không khí ở đây nặng nề quá.",
						"thai": "แปลกจัง... อากาศที่นี่มันหนักอึ้งเหลือเกิน",
						"hindi": "अजीब है... यहाँ की हवा बहुत भारी है।"
					},
					"emotion": "sad",
					"speaker": "fern",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "페른, 괜찮아?",
						"english": "Fern, are you okay?",
						"japanese": "フェルン、大丈夫？",
						"chinese": "费恩，你还好吗？",
						"french": "Fern, ça va ?",
						"spanish": "¿Fern, estás bien?",
						"vietnamese": "Fern, cậu ổn chứ?",
						"thai": "เฟิร์น เธอโอเคไหม?",
						"hindi": "फर्न, तुम ठीक हो?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "...아니, 뭔가 잘못됐어. 서둘러야 해.",
						"english": "...No, something's wrong. We need to hurry.",
						"japanese": "…いや、何かがおかしい。急がないと。",
						"chinese": "……不，有些不对劲。我们得赶紧。",
						"french": "...Non, quelque chose ne va pas. On doit se dépêcher.",
						"spanish": "...No, algo está mal. Tenemos que darnos prisa.",
						"vietnamese": "...Không, có gì đó không ổn rồi. Chúng ta phải nhanh lên.",
						"thai": "...ไม่สิ มีบางอย่างผิดปกติ เราต้องรีบแล้ว",
						"hindi": "...नहीं, कुछ गड़बड़ है। हमें जल्दी करनी होगी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "fern",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "fern",
					"emotion": "sad",
					"content": {
						"korean": "조심해… 저건…!",
						"english": "Watch out... That's...!",
						"japanese": "気をつけろ…あれは…！",
						"chinese": "小心……那是……！",
						"french": "Attention... C'est...!",
						"spanish": "¡Cuidado...! ¡Eso es...!",
						"vietnamese": "Cẩn thận... Đó là...!",
						"thai": "ระวัง... นั่นมัน...!",
						"hindi": "सावधान... वो है...!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저게 중간보스인가?",
						"english": "Is that the mini-boss?",
						"japanese": "あれが中ボスか？",
						"chinese": "那是小boss吗？",
						"french": "C'est le mini-boss ?",
						"spanish": "¿Es ese el mini-jefe?",
						"vietnamese": "Đó là trùm phụ sao?",
						"thai": "นั่นคือบอสรองงั้นหรือ?",
						"hindi": "क्या वो मिни-बॉस है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "흐흐… 또 먹이가 왔군. 시간은 누구에게나 공평하지 않지.",
						"english": "Heh heh... another meal has arrived. Time isn't fair to everyone.",
						"japanese": "フフ… また獲物が来たようだな。時間は誰にでも平等ではない。",
						"chinese": "呵呵… 又有猎物上门了。时间对谁都不是公平的。",
						"french": "Hé hé... Encore une proie. Le temps n'est juste pour personne.",
						"spanish": "Je je... Otra presa ha llegado. El tiempo no es justo para todos.",
						"vietnamese": "Hì hì... Lại có mồi rồi. Thời gian chẳng công bằng với ai cả.",
						"thai": "ฮึฮึ... เหยื่อมาอีกแล้ว. เวลาไม่ยุติธรรมกับทุกคนหรอกนะ.",
						"hindi": "हहह... एक और शिकार आ गया। समय सबके लिए निष्पक्ष नहीं होता।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "도망쳐, 페른!",
						"english": "Run, Fern!",
						"japanese": "逃げろ、フェルン！",
						"chinese": "快逃，费恩！",
						"french": "Fuis, Fern !",
						"spanish": "¡Huye, Fern!",
						"vietnamese": "Chạy đi, Fern!",
						"thai": "หนีไป เฟิร์น!",
						"hindi": "भागो, फ़र्न!"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼… 동료를 버릴 순 없어!",
						"english": "No... I can't abandon my comrade!",
						"japanese": "だめだ… 仲間を見捨てられない！",
						"chinese": "不行… 我不能抛弃同伴！",
						"french": "Non... Je ne peux pas abandonner mon compagnon !",
						"spanish": "¡No... No puedo abandonar a mi compañero!",
						"vietnamese": "Không được... Không thể bỏ rơi đồng đội!",
						"thai": "ไม่นะ... ฉันจะทิ้งเพื่อนไม่ได้!",
						"hindi": "नहीं... मैं अपने साथी को नहीं छोड़ सकता!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "fern"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은… 발버둥 칠수록 더 빨리 늙어갈 뿐.",
						"english": "Foolish... The more you struggle, the faster you'll age.",
						"japanese": "愚かな… もがけばもがくほど、早く老いるだけだ。",
						"chinese": "愚蠢… 越是挣扎，只会老得越快。",
						"french": "Insensé... Plus tu te débats, plus vite tu vieilliras.",
						"spanish": "Estúpido... Cuanto más te resistas, más rápido envejecerás.",
						"vietnamese": "Ngốc nghếch... Càng vùng vẫy, càng nhanh già đi thôi.",
						"thai": "โง่เขลา... ยิ่งดิ้นรน ก็ยิ่งแก่เร็วขึ้นเท่านั้น.",
						"hindi": "मूर्ख... जितना तुम संघर्ष करोगे, उतनी तेज़ी से बूढ़े हो जाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
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
					"action": "enter",
					"duration_ms": 500,
					"speaker": "fern",
					"type": "direction"
				},
				{
					"content": {
						"korean": "윽… 몸이… 뭔가…!",
						"english": "Ugh... My body... something...!",
						"japanese": "うっ… 身体が… 何か…！",
						"chinese": "呃… 身体… 有点不对劲…！",
						"french": "Ugh... Mon corps... quelque chose... !",
						"spanish": "Uf... Mi cuerpo... ¡algo...!",
						"vietnamese": "Ưm... Cơ thể... sao thế...!",
						"thai": "อึก... ร่างกาย... บางอย่าง...!",
						"hindi": "उफ़... मेरा शरीर... कुछ तो है...!"
					},
					"emotion": "sad",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"content": {
						"korean": "한 동료의 팔에 검은 반점이 돋아났다. 시계의 초침이 미친 듯이 돌아갔다.",
						"english": "Black spots appeared on a comrade's arm. The clock's second hand spun wildly.",
						"japanese": "一人の仲間の腕に黒い斑点が現れた。時計の秒針が狂ったように回った。",
						"chinese": "一名同伴的胳膊上长出了黑斑。时钟的秒针疯狂地转动着。",
						"french": "Des taches noires sont apparues sur le bras d'un compagnon. L'aiguille des secondes de l'horloge tourna frénétiquement.",
						"spanish": "Manchas negras aparecieron en el brazo de un compañero. El segundero del reloj giraba salvajemente.",
						"vietnamese": "Những đốm đen xuất hiện trên cánh tay của một đồng đội. Kim giây đồng hồ quay điên cuồng.",
						"thai": "จุดดำปรากฏขึ้นบนแขนของเพื่อนร่วมทีม เข็มวินาทีของนาฬิกาหมุนอย่างบ้าคลั่ง.",
						"hindi": "एक साथी की बांह पर काले धब्बे उभर आए। घड़ी का सेकंड का कांटा पागलों की तरह घूम रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게 무슨… 저주야?",
						"english": "What kind of... curse is this?",
						"japanese": "これは何の… 呪いだ？",
						"chinese": "这是什么… 诅咒？",
						"french": "Quelle sorte de... malédiction est-ce ?",
						"spanish": "¿Qué clase de... maldición es esta?",
						"vietnamese": "Đây là loại... lời nguyền gì vậy?",
						"thai": "นี่มัน... คำสาปอะไรกัน?",
						"hindi": "यह किस तरह का... अभिशाप है?"
					}
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "시간의 저주… 숲이… 우릴 삼키고 있어!",
						"english": "The curse of time... The forest... is devouring us!",
						"japanese": "時間の呪い… 森が… 俺たちを飲み込んでいる！",
						"chinese": "时间的诅咒… 森林… 正在吞噬我们！",
						"french": "La malédiction du temps... La forêt... nous dévore !",
						"spanish": "La maldición del tiempo... ¡El bosque... nos está devorando!",
						"vietnamese": "Lời nguyền của thời gian... Rừng cây... đang nuốt chửng chúng ta!",
						"thai": "คำสาปแห่งเวลา... ป่า... กำลังกลืนกินเรา!",
						"hindi": "समय का अभिशाप... जंगल... हमें निगल रहा है!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내가… 막을게! 내 시간을 써서…!",
						"english": "I'll... stop it! Using my own time...!",
						"japanese": "俺が… 止める！俺の時間を費やして…！",
						"chinese": "我来… 阻止它！用我的时间…！",
						"french": "Je vais... l'arrêter ! En utilisant mon temps... !",
						"spanish": "Yo... lo detendré! ¡Usando mi tiempo...!",
						"vietnamese": "Tôi... sẽ ngăn lại! Dùng thời gian của tôi...!",
						"thai": "ฉันจะ... หยุดมันเอง! ใช้เวลาของฉัน...!",
						"hindi": "मैं... इसे रोकूँगा! अपना समय इस्तेमाल करके...!"
					},
					"speaker": "fern",
					"type": "speech"
				},
				{
					"duration_ms": 600,
					"type": "direction",
					"speaker": "fern",
					"action": "focus"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "기억해… 숲은… 시간을…",
						"english": "Remember... the forest... time...",
						"japanese": "覚えておけ… 森は… 時間を…",
						"chinese": "记住… 森林… 时间…",
						"french": "Souviens-toi... la forêt... le temps...",
						"spanish": "Recuerda... el bosque... el tiempo...",
						"vietnamese": "Hãy nhớ... khu rừng... thời gian...",
						"thai": "จำไว้... ป่า... เวลา...",
						"hindi": "याद रखना... जंगल... समय को..."
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"speaker": "fern",
					"type": "direction",
					"duration_ms": 700,
					"direction": "up",
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "페른!!! 안 돼!!!",
						"english": "Fern!!! No!!!",
						"japanese": "フェルン!!! だめだ!!!",
						"chinese": "费恩！！！不要！！！",
						"french": "Fern !!! Non !!!",
						"spanish": "¡Fern! ¡No!",
						"vietnamese": "Fern!!! Không được!!!",
						"thai": "เฟิร์น!!! ไม่นะ!!!",
						"hindi": "फ़र्न!!! नहीं!!!"
					}
				},
				{
					"content": {
						"korean": "페른이 거대한 힘에 휩쓸려 사라졌다. 남겨진 것은 동료의 검은 반점과 절망뿐이었다.",
						"english": "Fern was swept away by an immense power and vanished. All that remained was a dark stain of a comrade and despair.",
						"japanese": "フェルンは巨大な力に巻き込まれ、消え去った。残されたのは、仲間の黒い染みと絶望だけだった。",
						"chinese": "费恩被一股巨大的力量卷走，消失了。只剩下同伴的黑色污迹和绝望。",
						"french": "Fern fut emportée par une force immense et disparut. Il ne restait plus qu'une tache sombre de sa camarade et le désespoir.",
						"spanish": "Fern fue arrastrada por un poder inmenso y desapareció. Solo quedó una mancha oscura de su compañera y la desesperación.",
						"vietnamese": "Fern bị cuốn đi bởi một sức mạnh khổng lồ và biến mất. Tất cả những gì còn lại là một vết ố đen của đồng đội và sự tuyệt vọng.",
						"thai": "เฟิร์นถูกพลังอันมหาศาลพัดพาไปและหายไป สิ่งที่เหลืออยู่คือรอยด่างดำของสหายและความสิ้นหวัง",
						"hindi": "फ़र्न एक विशाल शक्ति द्वारा बह गई और गायब हो गई। जो बचा था वह केवल एक साथी का काला धब्बा और निराशा थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "페른이… 그렇게 될 줄은…",
						"english": "Fern... to think it would come to this...",
						"japanese": "フェルンが… ああなるとは…",
						"chinese": "费恩… 没想到会变成那样…",
						"french": "Fern... que ça finisse comme ça...",
						"spanish": "Fern... pensar que terminaría así...",
						"vietnamese": "Fern... không ngờ lại thành ra thế này...",
						"thai": "เฟิร์น... ไม่คิดเลยว่าจะจบแบบนี้...",
						"hindi": "फ़र्न... ऐसा होगा सोचा नहीं था..."
					}
				},
				{
					"content": {
						"korean": "시간의 저주… 우리도 시간이 없어.",
						"english": "The curse of time... We don't have much time either.",
						"japanese": "時間の呪い… 私たちにも時間がない。",
						"chinese": "时间的诅咒… 我们也没有时间了。",
						"french": "La malédiction du temps... Nous n'avons plus de temps non plus.",
						"spanish": "La maldición del tiempo... Nosotros tampoco tenemos tiempo.",
						"vietnamese": "Lời nguyền của thời gian... Chúng ta cũng không còn nhiều thời gian.",
						"thai": "คำสาปแห่งกาลเวลา... เราก็ไม่มีเวลาแล้ว",
						"hindi": "समय का अभिशाप... हमारे पास भी समय नहीं है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "서두르지 않으면… 모두 사라질 거야.",
						"english": "If we don't hurry... everyone will disappear.",
						"japanese": "急がなければ… みんな消えてしまう。",
						"chinese": "如果不快点… 大家都会消失的。",
						"french": "Si on ne se dépêche pas... tout le monde disparaîtra.",
						"spanish": "Si no nos apresuramos... todos desaparecerán.",
						"vietnamese": "Nếu không nhanh lên... tất cả sẽ biến mất.",
						"thai": "ถ้าไม่รีบ... ทุกคนจะหายไปหมด",
						"hindi": "अगर हम जल्दी नहीं करते... तो सब गायब हो जाएंगे।"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "동료의 희생은 탐험대에 무거운 침묵을 가져왔다. 조여오는 시간의 압박.",
						"english": "The sacrifice of a comrade brought a heavy silence upon the expedition. The pressure of time tightened.",
						"japanese": "仲間の犠牲は探検隊に重い沈黙をもたらした。迫り来る時間のプレッシャー。",
						"chinese": "同伴的牺牲给探险队带来了沉重的沉默。时间的压力越来越大。",
						"french": "Le sacrifice d'un camarade imposa un lourd silence à l'expédition. La pression du temps se resserrait.",
						"spanish": "El sacrificio de un compañero trajo un pesado silencio a la expedición. La presión del tiempo se estrechaba.",
						"vietnamese": "Sự hy sinh của đồng đội đã mang lại sự im lặng nặng nề cho đoàn thám hiểm. Áp lực của thời gian siết chặt.",
						"thai": "การเสียสละของสหายทำให้คณะสำรวจตกอยู่ในความเงียบงัน ความกดดันของเวลาก็กระชับเข้ามา",
						"hindi": "एक साथी के बलिदान ने अभियान पर एक गहरा सन्नाटा ला दिया। समय का दबाव बढ़ता गया।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "윽… 겨우… 이 정도… 아니… 더 거대한… 흐름이…",
						"english": "Ugh... only... this much... No... a greater... flow...",
						"japanese": "くっ…これしき…いや…もっと巨大な…流れが…",
						"chinese": "呃……仅仅……这点程度……不……更巨大的……洪流……",
						"french": "Ugh... seulement... ça... Non... un flot... plus grand...",
						"spanish": "Uf... apenas... esto... No... un flujo... aún mayor...",
						"vietnamese": "Ư... chỉ... chừng này thôi... Không... một dòng chảy... lớn hơn...",
						"thai": "อึก... แค่... เท่านี้... ไม่สิ... กระแส... ที่ใหญ่กว่า...",
						"hindi": "उफ़... बस... इतना ही... नहीं... एक और विशाल... प्रवाह..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "페른… 복수했어…!",
						"english": "Fern... I've avenged you...!",
						"japanese": "フェルン…仇は討ったぞ…！",
						"chinese": "费恩……我报仇了……！",
						"french": "Fern... Je t'ai vengé... !",
						"spanish": "Fern... ¡He vengado tu muerte...!",
						"vietnamese": "Fern... Ta đã báo thù rồi...!",
						"thai": "เฟิร์น... ฉันล้างแค้นสำเร็จแล้ว...!",
						"hindi": "फ़र्न... मैंने बदला ले लिया है...!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "첫 번째 중간보스를 쓰러뜨렸다. 하지만 시간의 저주는 끝나지 않았다. 그들은 여전히 숲의 미스터리 속에 갇혀 있었다.",
						"english": "The first mid-boss was defeated. But the curse of time did not end. They were still trapped in the mystery of the forest.",
						"japanese": "最初の準ボスを倒した。だが、時間の呪いは終わっていなかった。彼らは依然として森の謎に囚われていた。",
						"chinese": "第一个中级首领被击败了。但时间的诅咒并未结束。他们仍然被困在森林的谜团之中。",
						"french": "Le premier boss intermédiaire fut vaincu. Mais la malédiction du temps n'était pas terminée. Ils restaient piégés dans le mystère de la forêt.",
						"spanish": "El primer subjefe fue derrotado. Pero la maldición del tiempo no terminó. Todavía estaban atrapados en el misterio del bosque.",
						"vietnamese": "Con trùm giữa trận đầu tiên đã bị đánh bại. Nhưng lời nguyền thời gian chưa kết thúc. Họ vẫn bị mắc kẹt trong bí ẩn của khu rừng.",
						"thai": "หัวหน้าด่านคนแรกพ่ายแพ้แล้ว แต่คำสาปแห่งเวลาไม่สิ้นสุด พวกเขายังคงติดอยู่ในความลึกลับของป่า",
						"hindi": "पहला मिड-बॉस हार गया था। लेकिन समय का अभिशाप समाप्त नहीं हुआ था। वे अभी भी जंगल के रहस्य में फंसे हुए थे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크하하… 너희의 시간은… 여기서 끝이다.",
						"english": "Khahaha... Your time... ends here.",
						"japanese": "クハハ…お前たちの時間は…ここで終わりだ。",
						"chinese": "哈哈哈……你们的时间……到此为止了。",
						"french": "Hahaha... Votre temps... s'achève ici.",
						"spanish": "Jajaja... Vuestro tiempo... termina aquí.",
						"vietnamese": "Khà khà... Thời gian của các ngươi... kết thúc tại đây.",
						"thai": "คึคึคึ... เวลาของพวกเจ้า... สิ้นสุดลงที่นี่แล้ว",
						"hindi": "हाहाहा... तुम्हारा समय... यहीं समाप्त होता है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 안 끝났어… 절대… 포기 안 해!",
						"english": "It's not... over yet... I'll never... give up!",
						"japanese": "まだ…終わってない…絶対…諦めない！",
						"chinese": "还没……结束……绝不……放弃！",
						"french": "Ce n'est pas... encore fini... Je n'abandonnerai... jamais !",
						"spanish": "Todavía... no ha terminado... ¡Nunca... me rendiré!",
						"vietnamese": "Vẫn... chưa kết thúc... Tuyệt đối... không bỏ cuộc!",
						"thai": "ยัง... ไม่จบ... ไม่มีทาง... ยอมแพ้!",
						"hindi": "अभी... खत्म नहीं हुआ... मैं कभी... हार नहीं मानूंगा!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대는 다시 한번 절망의 나락으로 떨어졌다. 그러나 그들의 의지는 꺾이지 않았다.",
						"english": "The expedition party once again fell into the abyss of despair. But their will remained unbroken.",
						"japanese": "探検隊は再び絶望の淵に落ちた。しかし、彼らの意思は꺾이지 않았다。",
						"chinese": "探险队再次坠入了绝望的深渊。然而，他们的意志并未被击垮。",
						"french": "L'expédition tomba une fois de plus dans l'abîme du désespoir. Mais leur volonté ne fut pas brisée.",
						"spanish": "El grupo de expedición cayó una vez más en el abismo de la desesperación. Sin embargo, su voluntad no se quebró.",
						"vietnamese": "Đoàn thám hiểm lại một lần nữa rơi vào vực thẳm tuyệt vọng. Tuy nhiên, ý chí của họ không hề suy suyển.",
						"thai": "คณะสำรวจตกลงสู่ห้วงแห่งความสิ้นหวังอีกครั้ง แต่เจตจำนงของพวกเขาไม่หักโค่น",
						"hindi": "अभियान दल एक बार फिर निराशा की खाई में गिर गया। लेकिन उनकी इच्छाशक्ति अक्षुण्ण रही।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 존재가 그림자처럼 도사리고 있었다.",
						"english": "In the deepest part of the forest, a colossal entity lurked like a shadow.",
						"japanese": "森の最も深い場所で、巨大な存在が影のように潜んでいた。",
						"chinese": "在森林最深处，一个巨大的存在像影子一样潜伏着。",
						"french": "Au plus profond de la forêt, une entité colossale se cachait comme une ombre.",
						"spanish": "En lo más profundo del bosque, una entidad colosal acechaba como una sombra.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng, một thực thể khổng lồ ẩn mình như một cái bóng.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า สิ่งมีชีวิตขนาดมหึมากำลังซุ่มซ่อนอยู่ราวกับเงา",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक विशालकाय अस्तित्व छाया की तरह दुबका हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 시계는 멈추지 않는다. 너희의 시간도 얼마 남지 않았어.",
						"english": "Hehe... The clock doesn't stop. Your time is running out too.",
						"japanese": "クク… 時計は止まらない。お前たちの時間も残り少ない。",
						"chinese": "呵呵… 时钟不会停止。你们的时间也不多了。",
						"french": "Haha... L'horloge ne s'arrête pas. Votre temps est aussi compté.",
						"spanish": "Jeje... El reloj no se detiene. Vuestro tiempo también se acaba.",
						"vietnamese": "Khà khà... Đồng hồ không ngừng lại. Thời gian của các ngươi cũng không còn nhiều.",
						"thai": "คิกๆ... นาฬิกาไม่หยุดเดิน เวลาของพวกเจ้าก็เหลือน้อยแล้ว",
						"hindi": "हाहा... घड़ी नहीं रुकती। तुम्हारा समय भी कम बचा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "입 닥쳐! 페른의 희생을 헛되이 하지 않을 거야!",
						"english": "Shut up! I won't let Fern's sacrifice be in vain!",
						"japanese": "黙れ！ フェルンの犠牲を無駄にはしない！",
						"chinese": "住口！ 我不会让费恩的牺牲白费的！",
						"french": "Tais-toi ! Je ne laisserai pas le sacrifice de Fern être vain !",
						"spanish": "¡Cállate! ¡No dejaré que el sacrificio de Fern sea en vano!",
						"vietnamese": "Câm mồm! Ta sẽ không để sự hy sinh của Fern trở nên vô ích!",
						"thai": "หุบปาก! ข้าจะไม่ยอมให้การเสียสละของเฟิร์นไร้ค่า!",
						"hindi": "चुप रहो! मैं फ़र्न के बलिदान को व्यर्थ नहीं जाने दूँगा!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "헛된 저항… 네 동료처럼 사라질 뿐.",
						"english": "Futile resistance... You'll just disappear like your comrade.",
						"japanese": "無駄な抵抗… お前の仲間のように消えるだけだ。",
						"chinese": "徒劳的抵抗… 你只会像你的同伴一样消失。",
						"french": "Résistance futile... Tu disparaîtras juste comme ton camarade.",
						"spanish": "Resistencia inútil... Simplemente desaparecerás como tu compañera.",
						"vietnamese": "Kháng cự vô ích... Ngươi sẽ chỉ biến mất như đồng đội của ngươi thôi.",
						"thai": "การต่อต้านที่ไร้ประโยชน์... เจ้าก็จะหายไปเหมือนสหายของเจ้า",
						"hindi": "व्यर्थ प्रतिरोध... तुम भी अपने साथी की तरह गायब हो जाओगे।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
