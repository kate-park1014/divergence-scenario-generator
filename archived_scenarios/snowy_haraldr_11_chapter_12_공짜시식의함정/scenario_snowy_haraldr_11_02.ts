export const scenario_snowy_haraldr_11_02 = {
	"scenario_id": "snowy_haraldr_11_02",
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
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "설원 깊은 곳. 버려진 시럽 잔들이 얼음 바닥에 박혀 있었다.",
						"english": "Deep in the snowy fields. Discarded syrup cups were stuck in the icy ground.",
						"japanese": "雪原の奥深く。捨てられたシロップのカップが氷の床に刺さっていた。",
						"chinese": "雪原深处。废弃的糖浆杯陷在冰冷的地面上。",
						"french": "Au cœur de la toundra. Des tasses de sirop abandonnées étaient plantées dans le sol glacé.",
						"spanish": "En lo profundo de los campos nevados. Vasos de sirope desechados estaban clavados en el suelo helado.",
						"vietnamese": "Sâu trong cánh đồng tuyết. Những ly siro bị bỏ lại cắm trên nền băng.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ ถ้วยน้ำเชื่อมที่ถูกทิ้งถูกปักอยู่บนพื้นน้ำแข็ง",
						"hindi": "बर्फीले मैदानों में गहराई तक। छोड़े गए सिरप के कप बर्फीली ज़मीन में धंसे हुए थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…또 시식 잔이야.",
						"english": "...Another tasting cup.",
						"japanese": "…また試食カップか。",
						"chinese": "……又是试吃杯。",
						"french": "...Encore une coupe de dégustation.",
						"spanish": "...Otro vaso de degustación.",
						"vietnamese": "...Lại là ly thử.",
						"thai": "...ถ้วยชิมอีกแล้ว",
						"hindi": "...एक और चखने का कप।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "공짜 시식! 딱 한 입만! 달콤한 눈 결정 드세요!",
						"english": "Free tasting! Just one bite! Have some sweet snow crystals!",
						"japanese": "無料試食！一口どうぞ！甘い雪の結晶を召し上がれ！",
						"chinese": "免费品尝！就尝一口！来点甜甜的雪结晶吧！",
						"french": "Dégustation gratuite ! Juste une bouchée ! Goûtez aux doux cristaux de neige !",
						"spanish": "¡Degustación gratis! ¡Solo un bocado! ¡Prueben unos dulces cristales de nieve!",
						"vietnamese": "Thử miễn phí! Chỉ một ngụm thôi! Dùng thử tinh thể tuyết ngọt ngào!",
						"thai": "ชิมฟรี! แค่คำเดียว! ลองชิมเกล็ดหิมะหวานๆ สิ!",
						"hindi": "मुफ्त चखना! बस एक निवाला! मीठे बर्फ के क्रिस्टल चखें!"
					},
					"speaker": "random_boss"
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "공짜… 시식?",
						"english": "Free... tasting?",
						"japanese": "無料…試食？",
						"chinese": "免费……品尝？",
						"french": "Gratuit... dégustation ?",
						"spanish": "¿Gratis... degustación?",
						"vietnamese": "Miễn phí... thử?",
						"thai": "ฟรี... ชิม?",
						"hindi": "मुफ्त... चखना?"
					},
					"speaker": "inka"
				},
				{
					"speaker": "inka",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "(한 입 받아 든다) 음… 맛있다.",
						"english": "(Takes a bite) Mmm... delicious.",
						"japanese": "（一口受け取る）ん…美味しい。",
						"chinese": "（尝了一口）嗯……好吃。",
						"french": "(Prend une bouchée) Mmm... délicieux.",
						"spanish": "(Toma un bocado) Mmm... delicioso.",
						"vietnamese": "(Nhận một ngụm) Ưm... ngon thật.",
						"thai": "(ลองชิม) อืม... อร่อยจัง",
						"hindi": "(एक निवाला लेता है) उम्म... स्वादिष्ट।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "맛있죠? 그럼… 눈 결정도 사셔야죠!",
						"english": "Delicious, isn't it? Well then... you should buy some snow crystals too!",
						"japanese": "美味しいでしょ？じゃあ…雪の結晶も買ってくださいね！",
						"chinese": "好吃吧？那……你也得买些雪结晶了！",
						"french": "C'est délicieux, n'est-ce pas ? Alors... vous devriez acheter des cristaux de neige aussi !",
						"spanish": "¿Está delicioso, verdad? Entonces... ¡también deberías comprar algunos cristales de nieve!",
						"vietnamese": "Ngon chứ? Vậy thì... bạn cũng nên mua tinh thể tuyết chứ!",
						"thai": "อร่อยใช่ไหมล่ะ? ถ้าอย่างนั้น... คุณก็ควรจะซื้อเกล็ดหิมะไปด้วยนะ!",
						"hindi": "स्वादिष्ट है ना? तो... आपको कुछ बर्फ के क्रिस्टल भी खरीदने चाहिए!"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "방금 공짜라며?",
						"english": "Didn't you just say it was free?",
						"japanese": "さっき無料だって言ったじゃん？",
						"chinese": "你刚才不是说免费吗？",
						"french": "Tu n'as pas dit que c'était gratuit ?",
						"spanish": "¿No dijiste que era gratis?",
						"vietnamese": "Không phải vừa bảo miễn phí sao?",
						"thai": "เมื่อกี้บอกว่าฟรีไม่ใช่เหรอ?",
						"hindi": "अभी तो तुमने मुफ्त कहा था?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "시식은 공짜! 결제는 필수!",
						"english": "Tasting's free! Payment's a must!",
						"japanese": "試食は無料！お支払いは必須！",
						"chinese": "试吃免费！结账付款！",
						"french": "La dégustation est gratuite ! Le paiement est obligatoire !",
						"spanish": "¡La degustación es gratis! ¡El pago es obligatorio!",
						"vietnamese": "Thử miễn phí! Thanh toán là bắt buộc!",
						"thai": "ชิมฟรี! แต่ต้องจ่ายนะ!",
						"hindi": "चखना मुफ्त! भुगतान अनिवार्य!"
					},
					"speaker": "random_boss"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500
				},
				{
					"speaker": "inka",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "(시럽을 맛보며) 새콤하고… 달콤하고… 차갑네요.",
						"english": "(Tasting the syrup) Tart... sweet... and cold.",
						"japanese": "(シロップを味見して) 酸っぱくて… 甘くて… 冷たいですね。",
						"chinese": "(尝了尝糖浆) 酸酸的……甜甜的……凉凉的。",
						"french": "(Goûtant le sirop) Acidulé... doux... et froid.",
						"spanish": "(Probando el jarabe) Agrio... dulce... y frío.",
						"vietnamese": "(Nếm thử si-rô) Chua... ngọt... và lạnh.",
						"thai": "(ชิมน้ำเชื่อม) เปรี้ยว... หวาน... แล้วก็เย็น",
						"hindi": "(सिरप चखते हुए) खट्टा... मीठा... और ठंडा।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그만 좀 따라와!",
						"english": "Stop following me!",
						"japanese": "もうついてこないで！",
						"chinese": "别再跟着我了！",
						"french": "Arrête de me suivre !",
						"spanish": "¡Deja de seguirme!",
						"vietnamese": "Đừng có bám theo nữa!",
						"thai": "เลิกตามฉันมาได้แล้ว!",
						"hindi": "पीछा करना बंद करो!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 안 사요? 이렇게 맛있는데! 이 맛을… 모르겠어요?",
						"english": "Why aren't you buying it? It's so delicious! Don't you... get it?",
						"japanese": "なんで買わないんですか？こんなに美味しいのに！この味が…わからないんですか？",
						"chinese": "为什么不买呢？这么好吃！难道你……不懂这个味道吗？",
						"french": "Pourquoi vous n'achetez pas ? C'est si délicieux ! Vous ne... comprenez pas ce goût ?",
						"spanish": "¿Por qué no lo compra? ¡Está tan delicioso! ¿No... entiende este sabor?",
						"vietnamese": "Sao không mua? Ngon thế này mà! Cái vị này... không hiểu sao?",
						"thai": "ทำไมไม่ซื้อล่ะ? อร่อยขนาดนี้! ไม่... เข้าใจรสชาตินี้เหรอ?",
						"hindi": "आप इसे क्यों नहीं खरीद रहे? यह इतना स्वादिष्ट है! क्या आप... इस स्वाद को नहीं समझते?"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…왜 이렇게까지 팔려고 해요?",
						"english": "...Why are you trying so hard to sell it?",
						"japanese": "…なんでそこまでして売ろうとするんですか？",
						"chinese": "……你为什么非要卖出去呢？",
						"french": "...Pourquoi vous vous acharnez à le vendre ?",
						"spanish": "¿...Por qué se esfuerza tanto en venderlo?",
						"vietnamese": "...Sao lại cố gắng bán đến mức này?",
						"thai": "...ทำไมถึงพยายามขายขนาดนี้ล่ะ?",
						"hindi": "...आप इसे इतना बेचने की कोशिश क्यों कर रहे हैं?"
					},
					"speaker": "inka"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Haraldr가 잠시 말을 잃었다.",
						"english": "Haraldr was speechless for a moment.",
						"japanese": "ハラルドルはしばらく言葉を失った。",
						"chinese": "哈拉尔德一时语塞。",
						"french": "Haraldr resta un instant sans voix.",
						"spanish": "Haraldr se quedó sin palabras por un momento.",
						"vietnamese": "Haraldr nhất thời không nói nên lời.",
						"thai": "Haraldr พูดไม่ออกไปชั่วขณะ",
						"hindi": "हरलडर पल भर के लिए निशब्द हो गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "…。",
						"chinese": "……",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하하! 장사는… 원래 다 그래요! 어서 사요!",
						"english": "Haha! Business... that's just how it is! Come on, buy it!",
						"japanese": "ハハ！商売なんて…元々そういうもんですよ！さあ、買ってください！",
						"chinese": "哈哈！做生意嘛……本来就是这样！快买吧！",
						"french": "Haha ! Les affaires... c'est comme ça ! Allez, achetez !",
						"spanish": "¡Jaja! Los negocios... ¡así son! ¡Vamos, cómprelo!",
						"vietnamese": "Haha! Kinh doanh... vốn dĩ là thế! Mau mua đi!",
						"thai": "ฮ่าฮ่า! การค้า... มันก็แบบนี้แหละ! ซื้อเลย!",
						"hindi": "हाहा! व्यापार... ऐसा ही होता है! आओ, इसे खरीदो!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "협박이잖아!",
						"english": "That's blackmail!",
						"japanese": "脅迫じゃないですか！",
						"chinese": "这是威胁！",
						"french": "C'est du chantage !",
						"spanish": "¡Eso es chantaje!",
						"vietnamese": "Đó là uy hiếp!",
						"thai": "นี่มันการขู่กรรโชก!",
						"hindi": "यह तो धमकी है!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "inka",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신… 외로워 보여요. 억지로 웃는 것 같아요.",
						"english": "You... look lonely. As if you're forcing a smile.",
						"japanese": "あなた…寂しそうに見えます。無理に笑っているように。",
						"chinese": "你……看起来很寂寞。好像在强颜欢笑。",
						"french": "Vous... semblez seul. Comme si vous forcíez un sourire.",
						"spanish": "Te ves... solitario. Como si forzaras una sonrisa.",
						"vietnamese": "Anh... trông cô đơn quá. Cứ như đang gượng cười vậy.",
						"thai": "คุณ... ดูเหงาจังเลยนะ เหมือนกำลังฝืนยิ้มอยู่เลย",
						"hindi": "तुम... अकेले दिखते हो। जैसे जबरदस्ती मुस्कुरा रहे हो।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "웃기지 마! 난 손님이 많다고! 최고 매출이야!",
						"english": "Don't make me laugh! I have tons of customers! Top sales!",
						"japanese": "笑わせるな！客はたくさんいる！売上は最高だ！",
						"chinese": "别开玩笑了！我客人多的是！销售额是最高的！",
						"french": "Ne me fais pas rire ! J'ai plein de clients ! Un chiffre d'affaires record !",
						"spanish": "¡No me hagas reír! ¡Tengo muchísimos clientes! ¡Ventas récord!",
						"vietnamese": "Đừng có đùa! Khách của tôi đông lắm! Doanh thu cao nhất đấy!",
						"thai": "อย่ามาตลก! ฉันมีลูกค้าเยอะแยะ! ยอดขายสูงสุดเลยนะ!",
						"hindi": "मुझे हँसाओ मत! मेरे पास बहुत ग्राहक हैं! सबसे ज़्यादा बिक्री है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그의 주위로 얼음처럼 차가운 기운이 번져나갔다.",
						"english": "An icy aura spread around him.",
						"japanese": "彼の周りに氷のように冷たい気が広がった。",
						"chinese": "冰冷的寒气在他周围蔓延开来。",
						"french": "Une aura glaciale se répandit autour de lui.",
						"spanish": "Un aura fría como el hielo se extendió a su alrededor.",
						"vietnamese": "Một luồng khí lạnh như băng lan tỏa xung quanh anh ta.",
						"thai": "ไอเย็นยะเยือกแผ่ซ่านไปรอบตัวเขา",
						"hindi": "उसके चारों ओर बर्फ़ जैसी ठंडी आभा फैल गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…오싹하다.",
						"english": "...Chilling.",
						"japanese": "…ぞっとする。",
						"chinese": "……不寒而栗。",
						"french": "...Glacial.",
						"spanish": "...Espeluznante.",
						"vietnamese": "...Rợn người.",
						"thai": "...น่าขนลุก",
						"hindi": "...रीढ़ की हड्डी में सिहरन।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "안 사면… 영원히 여기서 못 벗어날 걸요?",
						"english": "If you don't buy... you might never leave here.",
						"japanese": "買わないと…永遠にここから出られないかも？",
						"chinese": "如果不买……你可能永远都离不开这里了？",
						"french": "Si vous n'achetez pas... vous ne pourrez jamais partir d'ici, n'est-ce pas ?",
						"spanish": "Si no compras... ¿quizás nunca puedas salir de aquí?",
						"vietnamese": "Nếu không mua... có thể sẽ không bao giờ thoát khỏi đây đâu?",
						"thai": "ถ้าไม่ซื้อ... ก็อาจจะไม่มีวันออกไปจากที่นี่ได้เลยนะ?",
						"hindi": "अगर नहीं खरीदा... तो शायद कभी यहाँ से निकल नहीं पाओगे?"
					},
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "설원 가장 깊은 곳. 얼음 결정의 왕좌에, 차가운 눈빛이 앉아 있었다.",
						"english": "In the deepest part of the snowfield. On a throne of ice crystals, a cold gaze sat.",
						"japanese": "雪原の最深部。氷の結晶の玉座に、冷たい眼差しが座っていた。",
						"chinese": "雪原最深处。冰晶王座上，坐着一道冰冷的目光。",
						"french": "Au plus profond du champ de neige. Sur un trône de cristaux de glace, un regard froid était posé.",
						"spanish": "En lo más profundo del campo nevado. En un trono de cristales de hielo, una mirada fría se posó.",
						"vietnamese": "Nơi sâu thẳm nhất của tuyết nguyên. Trên ngai vàng pha lê băng, một ánh mắt lạnh lùng ngự trị.",
						"thai": "ณ ส่วนที่ลึกที่สุดของทุ่งหิมะ บนบัลลังก์แห่งผลึกน้ำแข็ง ดวงตาที่เยือกเย็นจับจ้องอยู่",
						"hindi": "बर्फीले मैदान के सबसे गहरे हिस्से में। बर्फ के क्रिस्टल के सिंहासन पर, एक ठंडी नज़र बैठी थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어 왔군. 내 달콤한… 다음 손님들이.",
						"english": "Finally, they've arrived. My sweet... next customers.",
						"japanese": "ついに来たか。私の甘い…次の客たちよ。",
						"chinese": "终于来了。我甜蜜的……下一批客人。",
						"french": "Vous êtes enfin arrivés. Mes doux... prochains clients.",
						"spanish": "Finalmente han llegado. Mis dulces... próximos clientes.",
						"vietnamese": "Cuối cùng cũng đến rồi. Những vị khách ngọt ngào... tiếp theo của ta.",
						"thai": "ในที่สุดก็มาแล้วนะ ลูกค้าคนต่อไป... ที่แสนหวานของฉัน",
						"hindi": "आखिर तुम आ ही गए। मेरे प्यारे... अगले ग्राहक।"
					},
					"speaker": "random_boss"
				},
				{
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "당신은… 사실 아프고 외로운 거였잖아요.",
						"english": "You... were actually hurting and lonely, weren't you?",
						"japanese": "あなたは…本当は苦しくて寂しかったんでしょう？",
						"chinese": "你……其实很痛苦很寂寞，不是吗？",
						"french": "Vous... aviez en fait mal et étiez seul, n'est-ce pas ?",
						"spanish": "Tú... en realidad estabas sufriendo y solo, ¿verdad?",
						"vietnamese": "Anh... thật ra là đang đau khổ và cô đơn mà, phải không?",
						"thai": "คุณ... จริงๆ แล้วเจ็บปวดและโดดเดี่ยวไม่ใช่เหรอ?",
						"hindi": "तुम... असल में दुखी और अकेले थे, है ना?"
					},
					"speaker": "inka"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "아픔? 외로움? 이제 난… 영원히 채워질 거야!",
						"english": "Pain? Loneliness? Now I... will be filled forever!",
						"japanese": "苦痛？寂しさ？もう私は…永遠に満たされる！",
						"chinese": "痛苦？寂寞？现在我……将永远被填满！",
						"french": "La douleur ? La solitude ? Maintenant, je... serai rempli pour l'éternité !",
						"spanish": "¿Dolor? ¿Soledad? ¡Ahora yo... seré llenado para siempre!",
						"vietnamese": "Đau khổ? Cô đơn? Giờ ta... sẽ được lấp đầy mãi mãi!",
						"thai": "ความเจ็บปวดเหรอ? ความโดดเดี่ยวเหรอ? ตอนนี้ฉัน... จะถูกเติมเต็มตลอดไป!",
						"hindi": "दर्द? अकेलापन? अब मैं... हमेशा के लिए भर जाऊंगा!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼…",
						"english": "Unbelievable...",
						"japanese": "まさか…",
						"chinese": "不可能……",
						"french": "Impossible...",
						"spanish": "No puede ser...",
						"vietnamese": "Không thể nào...",
						"thai": "ไม่จริงน่า...",
						"hindi": "असंभव..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "공짜는 빚! 이제… 그 빚을 받아낼 시간이다!",
						"english": "Free means debt! Now... it's time to collect!",
						"japanese": "タダは借金だ！さあ…その借りを返す時だ！",
						"chinese": "免费即是债！现在…是时候偿还这笔债了！",
						"french": "Gratuit, c'est une dette ! Maintenant... il est temps de la récupérer !",
						"spanish": "¡Lo gratis es una deuda! ¡Ahora... es hora de cobrarla!",
						"vietnamese": "Miễn phí là nợ! Giờ… là lúc đòi nợ đây!",
						"thai": "ของฟรีคือหนี้! ได้เวลา...ทวงคืนหนี้นั้นแล้ว!",
						"hindi": "मुफ्त मतलब कर्ज! अब… उस कर्ज को वसूलने का समय है!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "싸늘한 얼음의 감옥이 탐험대를 집어삼켰다.",
						"english": "A chilling ice prison engulfed the expedition team.",
						"japanese": "冷たい氷の監獄が探検隊を飲み込んだ。",
						"chinese": "冰冷的监狱吞噬了探险队。",
						"french": "Une froide prison de glace a englouti l'équipe d'expédition.",
						"spanish": "Una helada prisión de hielo engulló al equipo de expedición.",
						"vietnamese": "Một nhà tù băng giá lạnh lẽo đã nuốt chửng đội thám hiểm.",
						"thai": "คุกน้ำแข็งอันหนาวเหน็บได้กลืนกินคณะสำรวจ",
						"hindi": "एक बर्फीली जेल ने अभियान दल को निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하하! 공짜는 없다! 영원히… 내 컬렉션에 들어라!",
						"english": "Haha! There's no free lunch! Forever... join my collection!",
						"japanese": "ハハ！タダはない！永遠に…私のコレクションに加えろ！",
						"chinese": "哈哈！没有免费的！永远…加入我的收藏吧！",
						"french": "Haha ! Rien n'est gratuit ! Pour toujours... rejoignez ma collection !",
						"spanish": "¡Jaja! ¡Nada es gratis! ¡Para siempre... únete a mi colección!",
						"vietnamese": "Haha! Không có gì là miễn phí! Vĩnh viễn… hãy trở thành bộ sưu tập của ta!",
						"thai": "ฮ่าฮ่า! ไม่มีอะไรฟรี! ตลอดไป...จงเข้ามาอยู่ในคอลเลกชันของข้าซะ!",
						"hindi": "हाहा! कुछ भी मुफ्त नहीं है! हमेशा के लिए... मेरे संग्रह में शामिल हो जाओ!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…우린… 여기서 나갈 거야. 반드시.",
						"english": "...We... will get out of here. Definitely.",
						"japanese": "…私たちは…ここから出る。必ず。",
						"chinese": "…我们…会离开这里。一定会的。",
						"french": "...Nous... sortirons d'ici. Absolument.",
						"spanish": "...Nosotros... saldremos de aquí. Definitivamente.",
						"vietnamese": "...Chúng ta... sẽ thoát khỏi đây. Chắc chắn.",
						"thai": "...เรา...จะออกไปจากที่นี่ให้ได้. แน่นอน.",
						"hindi": "...हम... यहां से निकल जाएंगे। निश्चित रूप से।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다음에 와도… 소용없다!",
						"english": "Even if you come next time... it'll be no use!",
						"japanese": "次に来ても…無駄だ！",
						"chinese": "下次再来…也没用！",
						"french": "Même si vous revenez... ce sera inutile !",
						"spanish": "Aunque vuelvas la próxima vez... ¡será inútil!",
						"vietnamese": "Dù lần sau có đến… cũng vô ích thôi!",
						"thai": "ต่อให้มาคราวหน้า...ก็ไร้ประโยชน์!",
						"hindi": "अगर अगली बार भी आओगे... तो भी कोई फायदा नहीं होगा!"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 형상이 무너졌다. 산산조각난 왕좌가 설원에 흩어졌다.",
						"english": "The colossal ice form shattered. Fragments of the throne scattered across the snowy plains.",
						"japanese": "巨大な氷の像が崩れ去った。砕け散った玉座が雪原に散らばった。",
						"chinese": "巨大的冰像崩塌了。破碎的王座散落在雪原上。",
						"french": "La forme de glace colossale s'est brisée. Des fragments du trône se sont éparpillés sur les plaines enneigées.",
						"spanish": "La colosal forma de hielo se hizo añicos. Fragmentos del trono se esparcieron por las llanuras nevadas.",
						"vietnamese": "Hình dáng băng khổng lồ đã vỡ tan. Ngai vàng vỡ vụn rải rác khắp đồng tuyết.",
						"thai": "รูปร่างน้ำแข็งมหึมาแตกสลาย บัลลังก์ที่แตกเป็นเสี่ยงๆ กระจัดกระจายไปทั่วทุ่งหิมะ",
						"hindi": "विशाल बर्फीली आकृति टूट गई। सिंहासन के टुकड़े बर्फीले मैदानों में बिखर गए।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아직… 배고파… 더… 더…",
						"english": "...Still... hungry... more... more...",
						"japanese": "…まだ…お腹すいた…もっと…もっと…",
						"chinese": "…还…饿…更多…更多…",
						"french": "...Encore... faim... plus... plus...",
						"spanish": "...Todavía... hambriento... más... más...",
						"vietnamese": "...Vẫn... đói... thêm... thêm...",
						"thai": "...ยัง...หิว...อีก...อีก...",
						"hindi": "...अभी भी... भूखा... और... और..."
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "inka",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "…결국, 자신도 허기에 잡아먹힌 거였네요.",
						"english": "...In the end, even they were consumed by hunger.",
						"japanese": "…結局、自分も空腹に食い尽くされたのですね。",
						"chinese": "…最终，连他自己也被饥饿吞噬了。",
						"french": "...Au final, ils ont eux aussi été dévorés par la faim.",
						"spanish": "...Al final, incluso ellos fueron consumidos por el hambre.",
						"vietnamese": "...Cuối cùng, ngay cả họ cũng bị cơn đói nuốt chửng.",
						"thai": "...ในที่สุด, แม้แต่พวกเขาเองก็ถูกความหิวกลืนกินไปแล้วสินะ",
						"hindi": "...आखिरकार, वे खुद भी भूख से निगल लिए गए थे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제… 끝난 건가?",
						"english": "Is it... over now?",
						"japanese": "もう…終わったのか？",
						"chinese": "现在…结束了吗？",
						"french": "C'est... fini maintenant ?",
						"spanish": "¿Ya... terminó?",
						"vietnamese": "Giờ… đã kết thúc rồi sao?",
						"thai": "ตอนนี้...จบแล้วหรือ?",
						"hindi": "क्या यह... अब खत्म हो गया है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설원 끝자락. 새로운 얼음 그림자가 드리워졌다. 다음 공짜 시식이 시작될 참이었다.",
						"english": "At the edge of the snowy plains. A new ice shadow loomed. The next free tasting was about to begin.",
						"japanese": "雪原の果て。新たな氷の影が迫っていた。次の無料試食が始まろうとしていた。",
						"chinese": "雪原尽头。一道新的冰影笼罩而下。下一场免费试吃即将开始。",
						"french": "Au bord des plaines enneigées. Une nouvelle ombre de glace se profilait. La prochaine dégustation gratuite était sur le point de commencer.",
						"spanish": "Al borde de las llanuras nevadas. Una nueva sombra de hielo se cernía. La próxima degustación gratuita estaba a punto de comenzar.",
						"vietnamese": "Ở rìa đồng tuyết. Một bóng băng mới bao phủ. Buổi nếm thử miễn phí tiếp theo sắp bắt đầu.",
						"thai": "สุดขอบทุ่งหิมะ. เงาเย็นยะเยือกใหม่ทอดยาวลงมา. การชิมฟรีครั้งต่อไปกำลังจะเริ่มต้นขึ้น",
						"hindi": "बर्फीले मैदानों के किनारे पर। एक नई बर्फीली छाया मंडरा रही थी। अगली मुफ्त चखना शुरू होने वाला था।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"더 깊은 설원, 싸늘한 바람이 불었다.",
			"색색깔 시럽 묻은 얼음 잔들이 여기저기 버려져 있었다.",
			"\"공짜 시식!\" 끈질긴 외침이 얼음 속에서 울렸다.",
			"공짜는, 언제나 빚이었다."
		],
		"english": [
			"Deeper into the snowy fields, a chilling wind blew.",
			"Ice cups with colorful syrup stains were discarded everywhere.",
			"\"Free tasting!\" A persistent cry echoed from within the ice.",
			"Freebies were always a debt."
		],
		"japanese": [
			"雪原の奥深く、肌寒い風が吹いた。",
			"色とりどりのシロップが付いた氷のカップが、あちこちに捨てられていた。",
			"「無料試食！」しつこい叫び声が氷の中から響いた。",
			"無料は、いつだって借金だった。"
		],
		"chinese": [
			"更深的雪原，寒风凛冽。",
			"沾着五彩糖浆的冰杯，到处都是。",
			"“免费品尝！”不绝于耳的叫喊声在冰雪中回荡。",
			"免费，总是一种债务。"
		],
		"french": [
			"Plus profondément dans les champs de neige, un vent glacial soufflait.",
			"Des coupes de glace tachées de sirop coloré étaient jetées partout.",
			"« Dégustation gratuite ! » Un cri persistant résonna depuis la glace.",
			"Le gratuit était toujours une dette."
		],
		"spanish": [
			"Más adentro en los campos nevados, soplaba un viento helado.",
			"Vasos de hielo con manchas de sirope de colores estaban tirados por todas partes.",
			"\"¡Degustación gratis!\" Un grito persistente resonó desde el hielo.",
			"Lo gratis, siempre era una deuda."
		],
		"vietnamese": [
			"Sâu hơn trong cánh đồng tuyết, một làn gió lạnh thổi qua.",
			"Những ly đá dính siro nhiều màu sắc bị vứt bỏ khắp nơi.",
			"\"Thử miễn phí!\" Một tiếng rao dai dẳng vang vọng từ trong băng.",
			"Miễn phí, luôn là một món nợ."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ลมหนาวพัดโชยมา",
			"ถ้วยน้ำแข็งเปื้อนน้ำเชื่อมสีสันสดใสถูกทิ้งเกลื่อนกลาด",
			"“ชิมฟรี!” เสียงตะโกนอย่างไม่ลดละก้องอยู่ในน้ำแข็ง",
			"ของฟรี มักจะเป็นหนี้เสมอ"
		],
		"hindi": [
			"बर्फीले मैदानों में और गहराई तक, एक ठंडी हवा चल रही थी।",
			"रंगीन सिरप से सने हुए बर्फ के कप हर जगह बिखरे पड़े थे।",
			"\"मुफ्त चखना!\" बर्फ के भीतर से एक लगातार आवाज़ गूँज रही थी।",
			"मुफ्त हमेशा एक कर्ज होता था।"
		]
	}
} as const;
