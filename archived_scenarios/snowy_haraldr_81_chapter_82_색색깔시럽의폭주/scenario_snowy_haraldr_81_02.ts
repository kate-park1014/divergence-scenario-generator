export const scenario_snowy_haraldr_81_02 = {
	"scenario_id": "snowy_haraldr_81_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시럽이 마치 살아있는 것처럼 끓어오르며 사방으로 튀었다.",
						"english": "The syrup boiled and splattered everywhere, as if alive.",
						"japanese": "シロップはまるで生きているかのように煮えたぎり、四方八方に飛び散った。",
						"chinese": "糖浆像活物一般沸腾着，四处飞溅。",
						"french": "Le sirop bouillait et éclaboussait partout, comme s'il était vivant.",
						"spanish": "El sirope hervía y salpicaba por todas partes, como si estuviera vivo.",
						"vietnamese": "Si-rô sôi sùng sục và văng tung tóe khắp nơi, như thể nó có sự sống.",
						"thai": "น้ำเชื่อมเดือดพล่านและกระเด็นไปทั่วทุกทิศทาง ราวกับมีชีวิต",
						"hindi": "सिरप मानो जीवित होकर उबल रहा था और चारों ओर उछल रहा था।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 더 빨라지고 있어!",
						"english": "Damn it! It's getting faster!",
						"japanese": "くそっ！もっと速くなってるぞ！",
						"chinese": "该死！它越来越快了！",
						"french": "Bon sang ! Ça s'accélère !",
						"spanish": "¡Maldición! ¡Está yendo más rápido!",
						"vietnamese": "Chết tiệt! Nó đang nhanh hơn!",
						"thai": "บ้าจริง! มันเร็วขึ้น!",
						"hindi": "धिक्कार है! यह और तेज़ हो रहा है!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뒤로 물러서!",
						"english": "Stand back!",
						"japanese": "後ろに下がれ！",
						"chinese": "退后！",
						"french": "Reculez !",
						"spanish": "¡Retrocede!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हट जाओ!"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내가 막는다!",
						"english": "I'll hold it back!",
						"japanese": "俺が食い止める！",
						"chinese": "我来挡住！",
						"french": "Je l'arrête !",
						"spanish": "¡Lo detendré!",
						"vietnamese": "Để tôi cản nó!",
						"thai": "ฉันจะสกัดมันไว้เอง!",
						"hindi": "मैं इसे रोकूँगा!"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "터져 나오는 시럽에 설원이 빠르게 잠식당했다.",
						"english": "The snowfield was rapidly engulfed by the gushing syrup.",
						"japanese": "噴き出すシロップに雪原は急速に飲み込まれた。",
						"chinese": "雪原被喷涌而出的糖浆迅速吞噬。",
						"french": "La plaine enneigée fut rapidement engloutie par le sirop jaillissant.",
						"spanish": "El campo de nieve fue rápidamente engullido por el sirope que brotaba.",
						"vietnamese": "Đồng tuyết bị si-rô phun trào nhanh chóng nhấn chìm.",
						"thai": "ทุ่งหิมะถูกกลืนกินอย่างรวดเร็วด้วยน้ำเชื่อมที่พุ่งออกมา",
						"hindi": "बर्फ का मैदान तेज़ी से रिसते हुए सिरप में समा गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이 정도쯤이야!",
						"english": "This much is nothing!",
						"japanese": "この程度、どうってことない！",
						"chinese": "小意思！",
						"french": "Ce n'est rien !",
						"spanish": "¡Esto no es nada!",
						"vietnamese": "Chuyện nhỏ thôi!",
						"thai": "แค่นี้สบายมาก!",
						"hindi": "यह तो कुछ भी नहीं!"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "이바르! 위험해!",
						"english": "Ivar! Look out!",
						"japanese": "イヴァー！危ない！",
						"chinese": "伊瓦尔！危险！",
						"french": "Ivar ! Danger !",
						"spanish": "¡Ivar! ¡Peligro!",
						"vietnamese": "Ivar! Nguy hiểm!",
						"thai": "ไอบาร์! อันตราย!",
						"hindi": "इवर! खतरा है!"
					}
				},
				{
					"content": {
						"korean": "걱정 마라! 내가 있는 한 누구도 다치지 않아!",
						"english": "Fear not! None shall be harmed while I stand!",
						"japanese": "心配するな！俺がいる限り、誰も傷つけさせない！",
						"chinese": "别担心！只要有我在，谁都不会受伤！",
						"french": "Ne crains rien ! Tant que je suis là, personne ne sera blessé !",
						"spanish": "¡No te preocupes! ¡Mientras yo esté aquí, nadie saldrá herido!",
						"vietnamese": "Đừng lo! Chừng nào ta còn ở đây, sẽ không ai bị thương!",
						"thai": "ไม่ต้องห่วง! ตราบใดที่ข้าอยู่ตรงนี้ ไม่มีใครบาดเจ็บ!",
						"hindi": "चिंता मत करो! जब तक मैं हूँ, कोई घायल नहीं होगा!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 더욱 깊은 곳으로 유혹하는 듯했다.",
						"english": "The vast shadow lured them deeper.",
						"japanese": "巨大な影が、さらに深淵へと誘うようだった。",
						"chinese": "巨大的黑影仿佛在诱惑着更深之处。",
						"french": "Une ombre colossale semblait les attirer plus profondément.",
						"spanish": "Una sombra gigantesca parecía atraerlos más y más a las profundidades.",
						"vietnamese": "Một bóng đen khổng lồ dường như đang quyến rũ họ tiến sâu hơn vào vực thẳm.",
						"thai": "เงาขนาดมหึมาดูเหมือนจะล่อลวงให้ลึกเข้าไปอีก",
						"hindi": "एक विशाल परछाई उन्हें और गहरे में खींच रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "더 이상 못 간다.",
						"english": "No more.",
						"japanese": "これ以上は無理だ。",
						"chinese": "不能再往前了。",
						"french": "On ne peut pas aller plus loin.",
						"spanish": "No podemos avanzar más.",
						"vietnamese": "Không thể đi xa hơn nữa.",
						"thai": "ไปต่อไม่ได้แล้ว",
						"hindi": "अब और आगे नहीं जा सकते।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "하지만…!",
						"english": "But...!",
						"japanese": "しかし…！",
						"chinese": "但是…！",
						"french": "Mais… !",
						"spanish": "¡Pero…!",
						"vietnamese": "Nhưng…!",
						"thai": "แต่…!",
						"hindi": "लेकिन...!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "내가 상대하겠다. 너희는 물러서라!",
						"english": "I will face it. Retreat!",
						"japanese": "俺が相手をしよう。お前たちは下がれ！",
						"chinese": "我来对付。你们退下！",
						"french": "Je m'en occupe. Reculez !",
						"spanish": "¡Yo me encargo! ¡Vosotros, retroceded!",
						"vietnamese": "Để ta đối phó. Các ngươi lùi lại!",
						"thai": "ข้าจะจัดการเอง พวกเจ้าถอยไป!",
						"hindi": "मैं इससे निपटूँगा। तुम सब पीछे हटो!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "폭주하는 시럽이 공간을 뒤덮었다. 끈적한 광기였다.",
						"english": "Wild syrup flooded the area. A sticky frenzy.",
						"japanese": "暴走するシロップが空間を覆った。それは粘着質な狂気だった。",
						"chinese": "暴走的糖浆覆盖了整个空间。那是一种粘稠的疯狂。",
						"french": "Un sirop déchaîné engloutit l'espace. C'était une folie visqueuse.",
						"spanish": "Un jarabe descontrolado cubrió el espacio. Era una locura pegajosa.",
						"vietnamese": "Xi-rô cuồng loạn nhấn chìm không gian. Một sự điên rồ nhớp nháp.",
						"thai": "น้ำเชื่อมบ้าคลั่งปกคลุมพื้นที่ มันคือความวิกลจริตที่เหนียวเหนอะหนะ",
						"hindi": "उन्मादी शरबत ने जगह को ढँक लिया। यह एक चिपचिपी दीवानगी थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "흐읍…! 아직 멀었다!",
						"english": "Ugh...! Not nearly enough!",
						"japanese": "くっ…！まだまだだ！",
						"chinese": "哼…！还差得远！",
						"french": "Hmmpf… ! Pas encore !",
						"spanish": "¡Uf...! ¡Todavía no!",
						"vietnamese": "Hừm…! Vẫn chưa xong đâu!",
						"thai": "อึก...! ยังอีกไกล!",
						"hindi": "हम्म...! अभी और बाकी है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어서 오세요… 각오해라!",
						"english": "Welcome... Prepare yourself!",
						"japanese": "ようこそ…覚悟しろ！",
						"chinese": "欢迎光临…做好觉悟吧！",
						"french": "Bienvenue… Préparez-vous !",
						"spanish": "¡Bienvenido...! ¡Prepárate!",
						"vietnamese": "Hoan nghênh… Chuẩn bị đi!",
						"thai": "ยินดีต้อนรับ... เตรียมตัวรับมือ!",
						"hindi": "आपका स्वागत है... तैयार रहो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "두 자아가 뒤섞이고 있어!",
						"english": "My two selves are intertwining!",
						"japanese": "二つの自我が混ざり合っていく！",
						"chinese": "两个自我正在融合！",
						"french": "Les deux moi se mélangent !",
						"spanish": "¡Mis dos yo se están mezclando!",
						"vietnamese": "Hai bản ngã đang hòa trộn vào nhau!",
						"thai": "สองตัวตนกำลังผสมผสานกัน!",
						"hindi": "दो आत्माएँ घुल-मिल रही हैं!"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "비켜! 내가 여기에 선다!",
						"english": "Out of my way! I stand here!",
						"japanese": "どけ！ ここは私が立つ！",
						"chinese": "让开！我站在这里！",
						"french": "Hors de mon chemin ! Je me tiens ici !",
						"spanish": "¡Quítate! ¡Yo me quedo aquí!",
						"vietnamese": "Tránh ra! Ta đứng đây!",
						"thai": "หลีกไป! ข้าจะยืนตรงนี้!",
						"hindi": "हट जाओ! मैं यहाँ खड़ा हूँ!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 형상이 폭발하는 시럽 속에서 모습을 드러냈다.",
						"english": "A colossal figure emerged from the exploding syrup.",
						"japanese": "巨大な影が、爆発するシロップの中から姿を現した。",
						"chinese": "一个巨大的身影从爆炸的糖浆中显现出来。",
						"french": "Une silhouette colossale est apparue du sirop explosif.",
						"spanish": "Una figura colosal emergió del jarabe explosivo.",
						"vietnamese": "Một hình dáng khổng lồ xuất hiện từ lớp si-rô đang nổ tung.",
						"thai": "ร่างมหึมาปรากฏขึ้นจากน้ำเชื่อมที่ระเบิด",
						"hindi": "विशाल आकृति विस्फोटित सिरप से प्रकट हुई।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "내 점포에… 온 것을 환영한다… 각오해라!",
						"english": "Welcome... to my shop... Prepare yourself!",
						"japanese": "私の店へ…ようこそ…覚悟しろ！",
						"chinese": "欢迎来到我的店铺…做好准备吧！",
						"french": "Bienvenue... dans ma boutique... Prépare-toi !",
						"spanish": "Bienvenido... a mi tienda... ¡Prepárate!",
						"vietnamese": "Chào mừng... đến cửa hàng của ta... Hãy sẵn sàng!",
						"thai": "ยินดีต้อนรับ… สู่ร้านของข้า… เตรียมตัวให้พร้อม!",
						"hindi": "मेरी दुकान में... तुम्हारा स्वागत है... तैयार रहो!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 중간 보스인가!",
						"english": "Is this... a mini-boss?!",
						"japanese": "これが…中ボスか！",
						"chinese": "这…是中级首领吗！",
						"french": "C'est... un mini-boss ?!",
						"spanish": "¡Esto es... un jefe intermedio!",
						"vietnamese": "Đây… là trùm giữa màn sao!",
						"thai": "นี่มัน… บอสกลางรึเปล่า!",
						"hindi": "क्या यह... एक मिनी-बॉस है!"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강함의 끝을 보고 싶다고? 좋다! 내가 보여주지!",
						"english": "You wish to see the peak of strength? Very well! I'll show you!",
						"japanese": "強さの果てを見たいだと？ よかろう！ 私が見せてやろう！",
						"chinese": "你想看看力量的极致吗？好！我就让你见识一下！",
						"french": "Tu veux voir l'apogée de la force ? Très bien ! Je vais te la montrer !",
						"spanish": "¿Quieres ver el límite de la fuerza? ¡Bien! ¡Yo te lo mostraré!",
						"vietnamese": "Ngươi muốn thấy giới hạn của sức mạnh? Được thôi! Ta sẽ cho ngươi thấy!",
						"thai": "อยากเห็นจุดสูงสุดของความแข็งแกร่งงั้นรึ? ดี! ข้าจะแสดงให้เจ้าดูเอง!",
						"hindi": "ताकत का अंत देखना चाहते हो? ठीक है! मैं तुम्हें दिखाऊंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "뒤로 물러서라!",
						"english": "Stand back!",
						"japanese": "下がれ！",
						"chinese": "退后！",
						"french": "Reculez !",
						"spanish": "¡Retrocede!",
						"vietnamese": "Lùi lại!",
						"thai": "ถอยไป!",
						"hindi": "पीछे हटो!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "끈적한 폭주가 잦아들었다. 거대한 형상이 무너졌다.",
						"english": "The sticky rampage subsided. The colossal figure crumbled.",
						"japanese": "粘着質の暴走が収まった。巨大な影が崩れ落ちた。",
						"chinese": "粘稠的暴走平息了。巨大的身影倒塌了。",
						"french": "La frénésie collante s'est calmée. La silhouette colossale s'est effondrée.",
						"spanish": "El frenesí pegajoso disminuyó. La figura colosal se derrumbó.",
						"vietnamese": "Cơn thịnh nộ dính nhớp lắng xuống. Hình dáng khổng lồ sụp đổ.",
						"thai": "ความบ้าคลั่งเหนียวเหนอะหนะสงบลง ร่างมหึมาพังทลายลง",
						"hindi": "चिपचिपा उन्माद शांत हो गया। विशाल आकृति ढह गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽…! 아직… 멀었는데…",
						"english": "Ugh...! Not... yet...",
						"japanese": "ぐう…！ まだ…終わってないのに…",
						"chinese": "呃…！还没…结束呢…",
						"french": "Ugh...! Pas... encore...",
						"spanish": "¡Ugh...! Todavía... no...",
						"vietnamese": "Khụ...! Vẫn... chưa xong mà...",
						"thai": "อึก…! ยัง… ไม่จบเลย…",
						"hindi": "उफ़...! अभी... बाकी था..."
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "강함이란… 지키는 것이었군.",
						"english": "Strength... was about protecting.",
						"japanese": "強さとは…守るものだったのか。",
						"chinese": "原来…强大…是为了守护啊。",
						"french": "La force... c'était ça, protéger.",
						"spanish": "La fuerza... era para proteger.",
						"vietnamese": "Sức mạnh... là để bảo vệ sao.",
						"thai": "ความแข็งแกร่ง… คือการปกป้องสินะ",
						"hindi": "शक्ति... रक्षा करने के लिए थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "해냈어…!",
						"english": "We did it...!",
						"japanese": "やった…！",
						"chinese": "成功了…！",
						"french": "On a réussi... !",
						"spanish": "¡Lo logramos...!",
						"vietnamese": "Chúng ta đã làm được...!",
						"thai": "ทำได้แล้ว…!",
						"hindi": "हमने कर दिखाया...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이바르는 한때 갈망하던 싸움이 아닌, 지켜낸 영광을 손에 넣었다. 그러나 폭주는 아직 끝나지 않았다.",
						"english": "Ivar obtained not the battle he once craved, but the glory he protected. Yet, the rampage is not over.",
						"japanese": "イヴァールはかつて渇望した戦いではなく、守り抜いた栄光を手に入れた。しかし、暴走はまだ終わっていない。",
						"chinese": "伊瓦尔得到的不是他曾渴望的战斗，而是他守护的荣耀。然而，暴走尚未结束。",
						"french": "Ivar obtint non pas la bataille qu'il désirait jadis, mais la gloire qu'il protégea. Pourtant, la frénésie n'est pas encore terminée.",
						"spanish": "Ivar obtuvo no la batalla que una vez anheló, sino la gloria que protegió. Sin embargo, el frenesí aún no ha terminado.",
						"vietnamese": "Ivar đã có được không phải trận chiến anh từng khao khát, mà là vinh quang anh đã bảo vệ. Tuy nhiên, cơn thịnh nộ vẫn chưa kết thúc.",
						"thai": "ไอวาร์ได้รับไม่ใช่การต่อสู้ที่เขาเคยปรารถนา แต่เป็นความรุ่งโรจน์ที่เขาปกป้องไว้ ทว่าความบ้าคลั่งยังไม่สิ้นสุด",
						"hindi": "इवर ने वह लड़ाई नहीं पाई जिसकी उसे कभी लालसा थी, बल्कि वह महिमा पाई जिसकी उसने रक्षा की। फिर भी, यह उन्माद अभी खत्म नहीं हुआ है。"
					},
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시럽은 모든 것을 집어삼키려 했다.",
						"english": "Syrup sought to devour all.",
						"japanese": "シロップは全てを飲み込もうとした。",
						"chinese": "糖浆试图吞噬一切。",
						"french": "Syrup cherchait à tout dévorer.",
						"spanish": "Syrup intentó devorarlo todo.",
						"vietnamese": "Syrup cố nuốt chửng mọi thứ.",
						"thai": "ไซรัปพยายามกลืนกินทุกสิ่ง",
						"hindi": "सिरप ने सब कुछ निगलने की कोशिश की।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석군… 내 재고가 될 뿐…",
						"english": "Foolish… Merely becoming my stock…",
						"japanese": "愚かだな… 私の在庫になるだけだ…",
						"chinese": "愚蠢… 只是成为我的库存…",
						"french": "Stupide… Vous ne serez que mon stock…",
						"spanish": "Estúpido… Solo serás mi mercancía…",
						"vietnamese": "Ngốc nghếch… Chỉ trở thành kho của ta…",
						"thai": "โง่เขลา… แค่กลายเป็นสต็อกของข้า…",
						"hindi": "मूर्ख… केवल मेरा स्टॉक बनेगा…"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "혿 크윽…! 아직… 끝나지 않았다!",
						"english": "Ugh…! Not… over yet!",
						"japanese": "くっ…！まだ…終わってない！",
						"chinese": "呃…！还没…结束！",
						"french": "Argh…! Ce n'est pas… encore fini !",
						"spanish": "¡Ugh…! ¡Todavía no… ha terminado!",
						"vietnamese": "Khụ…! Chưa… kết thúc!",
						"thai": "อึก…! ยัง…ไม่จบ!",
						"hindi": "उफ़…! अभी… ख़त्म नहीं हुआ!"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이바르!",
						"english": "Ivar!",
						"japanese": "イヴァール！",
						"chinese": "伊瓦尔！",
						"french": "Ivar !",
						"spanish": "¡Ivar!",
						"vietnamese": "Ivar!",
						"thai": "ไอวาร์!",
						"hindi": "इवर!"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"시럽의 분출이 걷잡을 수 없이 거세졌다.",
			"온 사방이 끈적한 색으로 물들고, 얼어붙기 시작했다.",
			"강함을 좇던 전사는 혼란 속에서 다른 길을 찾는다.",
			"지키는 것. 그것이 강함의 또 다른 끝일까."
		],
		"english": [
			"The syrup's eruption intensified beyond control.",
			"Everything was drenched in a sticky hue, then began to freeze.",
			"The warrior, who once sought strength, found another path amidst the chaos.",
			"To protect. Is that another culmination of strength?"
		],
		"japanese": [
			"シロップの噴出は手に負えないほど激しくなった。",
			"あらゆるものがべたつく色に染まり、凍り始めた。",
			"強さを求めていた戦士は、混乱の中で別の道を見出す。",
			"守ること。それが強さのもう一つの到達点なのだろうか。"
		],
		"chinese": [
			"糖浆的喷发势不可挡地加剧了。",
			"四周被黏稠的颜色浸染，并开始冻结。",
			"曾追逐力量的战士，在混乱中找到了另一条道路。",
			"守护。这是否是力量的另一个终点？"
		],
		"french": [
			"L'éruption de sirop s'intensifia de manière incontrôlable.",
			"Tout fut imprégné d'une couleur collante, puis commença à geler.",
			"Le guerrier, qui jadis cherchait la force, trouva un autre chemin au milieu du chaos.",
			"Protéger. Serait-ce une autre forme de puissance ?"
		],
		"spanish": [
			"La erupción de sirope se intensificó sin control.",
			"Todo se tiñó de un color pegajoso y comenzó a congelarse.",
			"El guerrero, que una vez buscó la fuerza, encontró otro camino en medio del caos.",
			"Proteger. ¿Es ese otro culmen de la fuerza?"
		],
		"vietnamese": [
			"Vụ phun trào si-rô trở nên dữ dội không thể kiểm soát.",
			"Mọi thứ đều nhuốm một màu dính nhớp, rồi bắt đầu đóng băng.",
			"Chiến binh từng theo đuổi sức mạnh, đã tìm thấy một con đường khác giữa sự hỗn loạn.",
			"Bảo vệ. Liệu đó có phải là một đỉnh cao khác của sức mạnh?"
		],
		"thai": [
			"การปะทุของน้ำเชื่อมรุนแรงขึ้นจนควบคุมไม่ได้",
			"ทุกหนแห่งถูกย้อมด้วยสีเหนียวเหนอะหนะ และเริ่มแข็งตัว",
			"นักรบผู้ที่เคยแสวงหาความแข็งแกร่ง ได้พบอีกเส้นทางท่ามกลางความโกลาหล",
			"การปกป้อง นั่นคืออีกจุดสูงสุดของความแข็งแกร่งใช่หรือไม่?"
		],
		"hindi": [
			"सिरप का उफान बेकाबू होकर तेज हो गया।",
			"चारों ओर चिपचिपे रंग से रंग गया और जमने लगा।",
			"शक्ति की तलाश करने वाले योद्धा ने अराजकता के बीच एक और रास्ता खोजा।",
			"रक्षा करना। क्या यह ताकत का दूसरा छोर है?"
		]
	}
} as const;
