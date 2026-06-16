export const scenario_snowy_haraldr_91_05 = {
	"scenario_id": "snowy_haraldr_91_05",
	"order": 5,
	"act": "climax_finale",
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
		},
		"eira": {
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		},
		"ivar": {
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
		"pool_id": "pool_106"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "텅 빈 좌판. 마지막 상품을 기다리는 자가 그곳에 있었다.",
						"english": "An empty stand. There, someone awaited the final item.",
						"japanese": "空っぽの陳列台。最後の品を待つ者がそこにいた。",
						"chinese": "空荡的展台。有人在那里等待着最后的商品。",
						"french": "Un étalage vide. Là, quelqu'un attendait le dernier objet.",
						"spanish": "Un puesto vacío. Allí, alguien esperaba el último artículo.",
						"vietnamese": "Quầy hàng trống rỗng. Có kẻ đang chờ đợi món hàng cuối cùng ở đó.",
						"thai": "แท่นวางว่างเปล่า มีผู้หนึ่งรอสินค้าชิ้นสุดท้ายอยู่ที่นั่น",
						"hindi": "एक खाली स्टैंड। वहाँ, कोई अंतिम वस्तु का इंतजार कर रहा था।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…Haraldr.",
						"english": "...Haraldr.",
						"japanese": "「…ハラルドル。」",
						"chinese": "“……哈拉尔德。”",
						"french": "«…Haraldr.»",
						"spanish": "«…Haraldr.»",
						"vietnamese": "...Haraldr.",
						"thai": "...ฮาราลเดอร์",
						"hindi": "...हारल्ड्र।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정말 아무것도 남지 않았네.",
						"english": "Truly, nothing is left.",
						"japanese": "「本当に何も残っていないね。」",
						"chinese": "“真的什么都没剩下啊。”",
						"french": "«Vraiment, il ne reste plus rien.»",
						"spanish": "«De verdad, no queda nada.»",
						"vietnamese": "Thật sự không còn gì cả.",
						"thai": "ไม่มีอะไรเหลืออยู่เลยจริงๆ",
						"hindi": "सच में कुछ भी नहीं बचा है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그는 낡은 뿔피리를 꽉 쥐고 있었다.",
						"english": "He clutched the old horn tightly.",
						"japanese": "「彼は古い角笛を固く握っていた。」",
						"chinese": "“他紧紧地握着那支旧的号角。”",
						"french": "«Il serrait fermement la vieille corne.»",
						"spanish": "«Él apretaba fuertemente la vieja trompa.»",
						"vietnamese": "Anh ta nắm chặt chiếc tù và cũ.",
						"thai": "เขากำแตรเขาเก่าไว้แน่น",
						"hindi": "उसने पुरानी सींग को कसकर पकड़ रखा था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…이번엔, 사 줄 거지?",
						"english": "...This time, you'll accept it, won't you?",
						"japanese": "「…今度は、買ってくれるんでしょ？」",
						"chinese": "“……这次，你会买下它，对吗？”",
						"french": "«…Cette fois, tu l'achèteras, n'est-ce pas ?»",
						"spanish": "«…Esta vez, lo comprarás, ¿verdad?»",
						"vietnamese": "...Lần này, anh sẽ mua nó chứ?",
						"thai": "...คราวนี้ นายจะซื้อมันใช่ไหม?",
						"hindi": "...इस बार, तुम इसे खरीदोगे, है ना?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "당신이 원하는 건… 그런 게 아니잖아.",
						"english": "What you want... isn't that.",
						"japanese": "「あなたが望むのは…そんなものじゃない。」",
						"chinese": "“你想要的……不是那种东西。”",
						"french": "«Ce que tu désires… ce n'est pas ça.»",
						"spanish": "«Lo que quieres… no es eso.»",
						"vietnamese": "Thứ anh muốn... không phải là cái đó.",
						"thai": "สิ่งที่คุณต้องการ... ไม่ใช่สิ่งนั้น",
						"hindi": "जो तुम चाहते हो... वह ऐसा नहीं है।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…무슨 소리야?",
						"english": "...What do you mean?",
						"japanese": "「…どういうことだ？」",
						"chinese": "“……什么意思？”",
						"french": "«…Qu'est-ce que tu racontes ?»",
						"spanish": "«…¿Qué quieres decir?»",
						"vietnamese": "...Anh đang nói gì vậy?",
						"thai": "...หมายความว่าไง?",
						"hindi": "...क्या मतलब है तुम्हारा?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그는… 받아들여지길 원했어. 평생을.",
						"english": "He... wanted to be accepted. All his life.",
						"japanese": "「彼は…受け入れられることを望んでいた。一生涯をかけて。」",
						"chinese": "“他……一生都渴望被接受。”",
						"french": "«Il… voulait être accepté. Toute sa vie.»",
						"spanish": "«Él… quería ser aceptado. Toda su vida.»",
						"vietnamese": "Anh ấy... muốn được chấp nhận. Cả đời.",
						"thai": "เขา... อยากได้รับการยอมรับ ชั่วชีวิตของเขา",
						"hindi": "वह... स्वीकृत होना चाहता था। अपनी पूरी ज़िंदगी।"
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
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "inka",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "당신은 언제나 자신을 팔았어. 인정받기 위해서.",
						"english": "You always sold yourself. For recognition.",
						"japanese": "「あなたはいつも自分を売ってきた。認められるために。」",
						"chinese": "“你总是出卖自己。为了获得认可。”",
						"french": "«Tu t'es toujours vendu. Pour être reconnu.»",
						"spanish": "«Siempre te vendiste. Para ser reconocido.»",
						"vietnamese": "Anh luôn bán rẻ bản thân. Để được công nhận.",
						"thai": "คุณขายตัวเองมาตลอด เพื่อได้รับการยอมรับ",
						"hindi": "तुमने हमेशा खुद को बेचा है। पहचान पाने के लिए।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그래서. 이번에도 날 거부할 셈인가?",
						"english": "...So. Are you going to reject me this time too?",
						"japanese": "「…それで。今回も私を拒絶するつもりか？」",
						"chinese": "“……所以。这次也要拒绝我吗？”",
						"french": "«…Alors. Cette fois encore, vas-tu me rejeter ?»",
						"spanish": "«…Entonces. ¿Esta vez también vas a rechazarme?»",
						"vietnamese": "...Vậy. Lần này anh cũng sẽ từ chối tôi sao?",
						"thai": "...งั้น. ครั้งนี้ก็จะปฏิเสธฉันอีกงั้นเหรอ?",
						"hindi": "...तो। क्या तुम इस बार भी मुझे मना करोगे?"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "당신을 받아들일 수 있어. 하지만… 당신의 죽음까지 살 수는 없어.",
						"english": "I can accept you. But... I can't live with your death.",
						"japanese": "「あなたを受け入れることはできる。だけど…あなたの死まで背負うことはできない。」",
						"chinese": "“我可以接受你。但是……我不能承受你的死亡。”",
						"french": "«Je peux t'accepter. Mais… je ne peux pas vivre avec ta mort.»",
						"spanish": "«Puedo aceptarte. Pero… no puedo vivir con tu muerte.»",
						"vietnamese": "Tôi có thể chấp nhận anh. Nhưng... tôi không thể sống chung với cái chết của anh.",
						"thai": "ฉันยอมรับคุณได้ แต่... ฉันไม่สามารถอยู่กับความตายของคุณได้",
						"hindi": "मैं तुम्हें स्वीकार कर सकता हूँ। पर... मैं तुम्हारी मौत के साथ नहीं जी सकता।"
					},
					"speaker": "inka",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…인카.",
						"english": "...Inka.",
						"japanese": "…インカ。",
						"chinese": "…因卡。",
						"french": "...Inka.",
						"spanish": "...Inka.",
						"vietnamese": "...Inka.",
						"thai": "...อินก้า.",
						"hindi": "...इंखा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그의 몸에서 빨강, 초록, 파랑 시럽이 끓어오르기 시작했다.",
						"english": "Red, green, and blue syrup began to boil from his body.",
						"japanese": "彼の体から赤、緑、青のシロップが煮えたぎり始めた。",
						"chinese": "红、绿、蓝色的糖浆开始从他体内沸腾。",
						"french": "Du sirop rouge, vert et bleu a commencé à bouillir de son corps.",
						"spanish": "Jarabe rojo, verde y azul empezó a burbujear de su cuerpo.",
						"vietnamese": "Siro đỏ, xanh lá và xanh dương bắt đầu sôi trào từ cơ thể anh ta.",
						"thai": "น้ำเชื่อมสีแดง เขียว และน้ำเงินเริ่มเดือดพล่านออกจากร่างของเขา",
						"hindi": "उसके शरीर से लाल, हरे और नीले रंग का सिरप उबलने लगा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "결국… 나를 거부하는군.",
						"english": "In the end... he rejects me.",
						"japanese": "結局…私を拒むのか。",
						"chinese": "最终…他还是拒绝了我。",
						"french": "Au final... il me rejette.",
						"spanish": "Al final... me rechaza.",
						"vietnamese": "Cuối cùng... anh ta từ chối tôi.",
						"thai": "ในที่สุด...เขาก็ปฏิเสธฉัน",
						"hindi": "आखिरकार... वह मुझे अस्वीकार करता है।"
					}
				},
				{
					"content": {
						"korean": "Haraldr… 제발.",
						"english": "Haraldr... please.",
						"japanese": "ハラルドル…お願い。",
						"chinese": "哈拉尔德…求你了。",
						"french": "Haraldr... s'il te plaît.",
						"spanish": "Haraldr... por favor.",
						"vietnamese": "Haraldr... làm ơn.",
						"thai": "ฮารัลเดอร์... ได้โปรด",
						"hindi": "हेराल्ड्र... कृपया।"
					},
					"type": "speech",
					"speaker": "inka",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "어차피 이럴 줄 알았지! 아무도 날 원하지 않아!",
						"english": "I knew it would come to this! No one wants me!",
						"japanese": "どうせこうなるって分かってた！誰も私を欲しがらない！",
						"chinese": "我早就知道会这样！没有人想要我！",
						"french": "Je savais que ça finirait ainsi ! Personne ne veut de moi !",
						"spanish": "¡Ya sabía que pasaría esto! ¡Nadie me quiere!",
						"vietnamese": "Tôi đã biết sẽ ra nông nỗi này mà! Không ai muốn tôi cả!",
						"thai": "ฉันรู้อยู่แล้วว่าจะต้องเป็นแบบนี้! ไม่มีใครต้องการฉัน!",
						"hindi": "मुझे पता था कि ऐसा ही होगा! कोई मुझे नहीं चाहता!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점… 커지고 있어!",
						"english": "It's getting... bigger!",
						"japanese": "どんどん…大きくなってる！",
						"chinese": "越来越…大了！",
						"french": "Ça devient... plus grand !",
						"spanish": "¡Cada vez... es más grande!",
						"vietnamese": "Nó ngày càng... lớn hơn!",
						"thai": "มันกำลัง... ใหญ่ขึ้นเรื่อยๆ!",
						"hindi": "यह... बड़ा हो रहा है!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크으으… 결국… 아무것도… 남지 않았군….",
						"english": "Ugh... In the end... nothing... remains...",
						"japanese": "ううむ…結局…何も…残らなかったか…。",
						"chinese": "呃…最终…什么也…没剩下…。",
						"french": "Ooooh… Finalement… il ne reste… rien…",
						"spanish": "Ugh... Al final... nada... queda...",
						"vietnamese": "Ư… Rốt cuộc… không còn… gì cả…",
						"thai": "อึก… สุดท้าย… ก็… ไม่เหลืออะไรเลย…",
						"hindi": "उफ़… अंत में… कुछ भी… नहीं बचा…।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "거대한 빙수 괴물이 서서히 녹아내렸다.",
						"english": "The giant bingsu monster slowly melted away.",
						"japanese": "巨大なピンス怪物はゆっくりと溶けていった。",
						"chinese": "巨大的刨冰怪物缓缓融化了。",
						"french": "L'énorme monstre bingsu a fondu lentement.",
						"spanish": "El gigantesco monstruo de bingsu se derritió lentamente.",
						"vietnamese": "Quái vật Bingsu khổng lồ từ từ tan chảy.",
						"thai": "สัตว์ประหลาดบิงซูยักษ์ละลายหายไปอย่างช้าๆ",
						"hindi": "विशालकाय बिंगसू राक्षस धीरे-धीरे पिघल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "inka",
					"action": "enter"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "inka",
					"content": {
						"korean": "…Haraldr. 안녕히.",
						"english": "...Haraldr. Farewell.",
						"japanese": "…ハラルドル。安らかに。",
						"chinese": "……哈拉尔德。永别了。",
						"french": "…Haraldr. Adieu.",
						"spanish": "...Haraldr. Adiós.",
						"vietnamese": "…Haraldr. Vĩnh biệt.",
						"thai": "…ฮาราลดร์ ลาก่อน",
						"hindi": "…हरल्ड्र। अलविदा।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "당신은… 잊히지 않을 거야.",
						"english": "You... will not be forgotten.",
						"japanese": "あなたは…忘れられないだろう。",
						"chinese": "你……不会被遗忘。",
						"french": "Tu… ne seras pas oublié.",
						"spanish": "No... serás olvidado.",
						"vietnamese": "Ngươi… sẽ không bị lãng quên.",
						"thai": "เจ้า… จะไม่ถูกลืมเลือน",
						"hindi": "तुम… भुलाए नहीं जाओगे।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이제… 다시는, 누구도 그처럼 되지 않을 것이다.",
						"english": "Now... no one will ever become like him again.",
						"japanese": "もう…二度と、誰も彼のような存在にはならないだろう。",
						"chinese": "从今以后……再也没有人会变成他那样了。",
						"french": "Désormais… plus personne ne deviendra comme lui.",
						"spanish": "Ahora... nadie más será como él.",
						"vietnamese": "Từ nay… sẽ không còn ai trở thành như hắn nữa.",
						"thai": "บัดนี้… จะไม่มีใครเป็นเช่นเขาอีกแล้ว",
						"hindi": "अब… फिर कभी, कोई उसके जैसा नहीं बनेगा।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모든 비극의 끝. 그러나 아직, 이야기는 끝나지 않았다.",
						"english": "The end of all tragedy. But still, the story is not over.",
						"japanese": "全ての悲劇の終わり。しかし、物語はまだ終わっていない。",
						"chinese": "所有悲剧的终结。但故事，尚未结束。",
						"french": "La fin de toute tragédie. Mais l'histoire n'est pas encore terminée.",
						"spanish": "El fin de toda tragedia. Pero la historia aún no ha terminado.",
						"vietnamese": "Kết thúc mọi bi kịch. Nhưng câu chuyện, vẫn chưa kết thúc.",
						"thai": "จุดจบของโศกนาฏกรรมทั้งมวล แต่เรื่องราว… ยังไม่จบลง",
						"hindi": "सभी त्रासदियों का अंत। पर कहानी, अभी खत्म नहीं हुई है।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Haraldr가 손에 든 뿔피리를 바닥에 내팽개쳤다.",
						"english": "Haraldr threw the horn he held in his hand to the ground.",
						"japanese": "ハラルドルは手に持った角笛を床に叩きつけた。",
						"chinese": "哈拉尔德将手中的号角摔在地上。",
						"french": "Haraldr jeta la corne qu'il tenait au sol.",
						"spanish": "Haraldr arrojó el cuerno que tenía en la mano al suelo.",
						"vietnamese": "Haraldr ném chiếc tù và trong tay xuống đất.",
						"thai": "ฮารัลเดอร์ขว้างเขาสัตว์ในมือลงกับพื้น",
						"hindi": "हेराल्ड्र ने अपने हाथ में पकड़ी सींग ज़मीन पर फेंक दी।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "몸을 감싸던 눈과 얼음이 거칠게 부서지고, 피처럼 시럽이 분출했다.",
						"english": "The snow and ice that enveloped his body shattered violently, and syrup erupted like blood.",
						"japanese": "体を覆っていた雪と氷が荒々しく砕け散り、血のようなシロップが噴出した。",
						"chinese": "笼罩身体的冰雪猛烈破碎，糖浆如血般喷涌而出。",
						"french": "La neige et la glace qui enveloppaient son corps se brisèrent violemment, et du sirop gicla comme du sang.",
						"spanish": "La nieve y el hielo que envolvían su cuerpo se hicieron añicos violentamente, y un jarabe brotó como sangre.",
						"vietnamese": "Tuyết và băng bao bọc cơ thể anh ta vỡ tan tành dữ dội, và siro phun trào như máu.",
						"thai": "หิมะและน้ำแข็งที่ห่อหุ้มร่างกายของเขาแตกสลายอย่างรุนแรง และน้ำเชื่อมก็พุ่งออกมาเหมือนเลือด",
						"hindi": "उसके शरीर को ढँकने वाली बर्फ और हिम ज़ोर से टूट गए, और खून की तरह सिरप फूट निकला।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "흥! 이럴 줄 알았지! 어차피 내 몸이 곧 궁극의 전리품이다!",
						"english": "Hmph! I knew it! My body is the ultimate trophy anyway!",
						"japanese": "ふん！こうなると思ってたぜ！どうせ俺の体こそが究極の戦利品だからな！",
						"chinese": "哼！我就知道会这样！反正我的身体就是最终的战利品！",
						"french": "Hmph ! Je le savais ! Mon corps est de toute façon le trophée ultime !",
						"spanish": "¡Hmph! ¡Lo sabía! ¡Mi cuerpo es el trofeo definitivo de todos modos!",
						"vietnamese": "Hừ! Tôi đã biết mà! Dù sao thì cơ thể tôi cũng là chiến lợi phẩm cuối cùng!",
						"thai": "หึ! ฉันรู้อยู่แล้ว! อย่างไรเสีย ร่างกายของฉันคือสุดยอดรางวัล!",
						"hindi": "हंफ़! मुझे पता था! वैसे भी मेरा शरीर ही अंतिम ट्रॉफी है!"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "각오해라! 내 영혼까지 짜낸 열정의 라즈베리 빙수 맛을 보여주마!",
						"english": "Brace yourself! I'll show you the taste of passion fruit raspberry shaved ice, squeezed from my very soul!",
						"japanese": "覚悟しろ！俺の魂まで絞り出した情熱のラズベリーかき氷の味を見せてやる！",
						"chinese": "做好觉悟吧！我将让你尝尝我连灵魂都榨干的热情树莓刨冰的味道！",
						"french": "Prépare-toi ! Je vais te montrer le goût de la glace pilée à la framboise, pleine de passion, pressée de mon âme même !",
						"spanish": "¡Prepárate! ¡Te mostraré el sabor de la granizada de frambuesa de pasión, exprimida de mi propia alma!",
						"vietnamese": "Chuẩn bị đi! Tôi sẽ cho ngươi nếm thử hương vị đá bào mâm xôi đầy đam mê, được vắt ra từ tận linh hồn ta!",
						"thai": "เตรียมตัวให้พร้อม! ฉันจะแสดงให้เห็นถึงรสชาติของน้ำแข็งไสราสเบอร์รีแห่งความหลงใหล ที่คั้นมาจากจิตวิญญาณของฉันเลย!",
						"hindi": "तैयार हो जाओ! मैं तुम्हें अपने आत्मा से निचोड़ा हुआ जुनून भरी रास्पबेरी बर्फ़ का स्वाद चखाऊँगा!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "내 프랜차이즈 확장을 막는 자는… 전부 공짜로 시식시켜주마! 맛있게 죽어라! 하하하핫!",
						"english": "Anyone who stands in the way of my franchise... gets a free taste! Die deliciously! Hahahaha!",
						"japanese": "私のフランチャイズ拡大を阻む者は…全員無料で試食させてやろう！美味しく死ね！ハハハハ！",
						"chinese": "任何阻止我特许经营扩张的人……都将免费试尝！美味地死去吧！哈哈哈！",
						"french": "Quiconque entravera l'expansion de ma franchise… aura droit à un échantillon gratuit ! Meurs délicieusement ! Hahahaha !",
						"spanish": "¡Quienquiera que se interponga en la expansión de mi franquicia... recibirá una muestra gratis! ¡Muere deliciosamente! ¡Jajajaja!",
						"vietnamese": "Kẻ nào cản trở việc mở rộng nhượng quyền của ta… sẽ được nếm thử miễn phí! Chết một cách ngon lành đi! Hahahaha!",
						"thai": "ใครก็ตามที่ขวางการขยายแฟรนไชส์ของข้า...จะได้ชิมฟรีทุกคน! จงตายอย่างเอร็ดอร่อย! ฮ่าฮ่าฮ่าฮ่า!",
						"hindi": "जो कोई मेरे फ्रैंचाइज़ी विस्तार को रोकेगा... उसे मुफ्त नमूना मिलेगा! स्वादिष्ट रूप से मरो! हाहाहाहा!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "괴물… 이 됐어!",
						"english": "I've... become a monster!",
						"japanese": "化け物に…なった！",
						"chinese": "变成…怪物了！",
						"french": "Je suis… devenu un monstre !",
						"spanish": "¡Me he… convertido en un monstruo!",
						"vietnamese": "Ta… đã trở thành quái vật!",
						"thai": "ข้า…กลายเป็นสัตว์ประหลาดแล้ว!",
						"hindi": "मैं… एक राक्षस बन गया हूँ!"
					}
				},
				{
					"content": {
						"korean": "Haraldr…!",
						"english": "Haraldr…!",
						"japanese": "ハラルドル…！",
						"chinese": "哈拉尔德……！",
						"french": "Haraldr… !",
						"spanish": "¡Haraldr…!",
						"vietnamese": "Haraldr…!",
						"thai": "ฮาราลดร์…!",
						"hindi": "हरल्ड्र…!"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "하하하! 내 궁극의 전리품을 거부한 대가다! 영원히 시식이나 해라!",
						"english": "Hahaha! This is the price for refusing my ultimate prize! Sample it forever!",
						"japanese": "ハハハ！私の究極の戦利品を拒否した代償だ！永遠に試食でもしていろ！",
						"chinese": "哈哈哈！这是你拒绝我终极战利品的代价！永远试尝吧！",
						"french": "Hahaha ! C'est le prix à payer pour avoir refusé mon trophée ultime ! Goûte-le pour l'éternité !",
						"spanish": "¡Jajajaja! ¡Este es el precio por rechazar mi trofeo definitivo! ¡Prueba esto para siempre!",
						"vietnamese": "Hahaha! Đây là cái giá phải trả vì dám từ chối chiến lợi phẩm tối thượng của ta! Hãy nếm thử mãi mãi đi!",
						"thai": "ฮ่าฮ่าฮ่า! นี่คือสิ่งตอบแทนที่เจ้าปฏิเสธของรางวัลสูงสุดของข้า! จงลิ้มรสมันชั่วนิรันดร์!",
						"hindi": "हाहाहा! यह मेरे अंतिम पुरस्कार को अस्वीकार करने का दंड है! हमेशा के लिए चखते रहो!"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 멈추지 않아.",
						"english": "...It's not over yet. We won't stop.",
						"japanese": "...まだ終わってない。私たちは止まらない。",
						"chinese": "...还没结束。我们不会停止。",
						"french": "...Ce n'est pas encore fini. Nous n'arrêterons pas.",
						"spanish": "...Aún no ha terminado. No nos detendremos.",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta sẽ không dừng lại.",
						"thai": "...ยังไม่จบแค่นี้ เราจะไม่หยุด.",
						"hindi": "...यह अभी खत्म नहीं हुआ है। हम रुकेंगे नहीं।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "당신을… 혼자 두지 않을 거야.",
						"english": "I won't... leave you alone.",
						"japanese": "あなたを…一人にはさせない。",
						"chinese": "我不会…让你独自一人。",
						"french": "Je ne te… laisserai pas seul.",
						"spanish": "No te… dejaré solo.",
						"vietnamese": "Tôi sẽ không… để bạn một mình đâu.",
						"thai": "ฉันจะไม่… ทิ้งคุณไว้คนเดียว.",
						"hindi": "मैं तुम्हें… अकेला नहीं छोड़ूँगा।"
					},
					"speaker": "inka",
					"type": "speech",
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"Haraldr, 본명조차 잊힌 채.",
			"그는 마지막 좌판에 앉아 있었다.",
			"텅 빈 좌판, 남은 것은 오직 그 자신.",
			"비극의 결말, 이제 곧 시작된다."
		],
		"english": [
			"Haraldr, his true name forgotten.",
			"He sat on the last display stand.",
			"An empty stand, only he remained.",
			"The end of tragedy, soon to begin."
		],
		"japanese": [
			"ハラルドル、その本名さえ忘れ去られ。",
			"彼は最後の陳列台に座っていた。",
			"空っぽの陳列台、残されたのは彼だけ。",
			"悲劇の結末が、今、始まる。"
		],
		"chinese": [
			"哈拉尔德，甚至连他的真名都被遗忘。",
			"他坐在最后一个展台上。",
			"空荡的展台，只剩下他自己。",
			"悲剧的结局，即将开始。"
		],
		"french": [
			"Haraldr, son vrai nom oublié.",
			"Il était assis sur le dernier étalage.",
			"Un étalage vide, seul lui restait.",
			"La fin de la tragédie, sur le point de commencer."
		],
		"spanish": [
			"Haraldr, incluso su verdadero nombre olvidado.",
			"Se sentó en el último puesto.",
			"Un puesto vacío, solo él permanecía.",
			"El fin de la tragedia, a punto de comenzar."
		],
		"vietnamese": [
			"Haraldr, ngay cả tên thật cũng bị lãng quên.",
			"Hắn ngồi trên quầy hàng cuối cùng.",
			"Quầy hàng trống rỗng, chỉ còn lại hắn.",
			"Cái kết của bi kịch, sắp bắt đầu."
		],
		"thai": [
			"ฮารัลเดอร์ แม้แต่ชื่อจริงก็ถูกลืมเลือนไปแล้ว",
			"เขานั่งอยู่บนแท่นวางสุดท้าย",
			"แท่นวางว่างเปล่า เหลือเพียงเขาเท่านั้น",
			"จุดจบของโศกนาฏกรรม กำลังจะเริ่มต้นขึ้น"
		],
		"hindi": [
			"हेराल्ड्र, जिसका असली नाम भी भुला दिया गया था।",
			"वह अंतिम प्रदर्शन स्टैंड पर बैठा था।",
			"एक खाली स्टैंड, केवल वही बचा था।",
			"त्रासदी का अंत, अब जल्द ही शुरू होगा।"
		]
	},
	"epilogue": {
		"korean": [
			"Haraldr는 사라졌다. 궁극의 전리품과 함께.",
			"비극은 끝났지만, 깊은 슬픔은 숲을 감쌌다.",
			"그를 구원한 것인가, 침해한 것인가.",
			"아무도 답할 수 없는 질문만이 남았다.",
			"숲은 여전히 고요했고, 밤은 길었다."
		],
		"english": [
			"Haraldr vanished. With the ultimate trophy.",
			"The tragedy ended, but deep sorrow enveloped the forest.",
			"Was it salvation, or intrusion?",
			"Only unanswered questions remained.",
			"The forest remained silent, and the night was long."
		],
		"japanese": [
			"ハラルドルは消えた。究極の戦利品と共に。",
			"悲劇は終わったが、深い悲しみが森を包み込んだ。",
			"彼を救ったのか、それとも侵したのか。",
			"誰も答えられない問いだけが残った。",
			"森は静寂に包まれ、夜は長かった。"
		],
		"chinese": [
			"哈拉尔德消失了。带着终极战利品。",
			"悲剧结束了，但深深的悲伤笼罩着森林。",
			"是救赎，还是侵犯？",
			"只剩下无人能回答的问题。",
			"森林依旧寂静，长夜漫漫。"
		],
		"french": [
			"Haraldr a disparu. Avec le trophée ultime.",
			"La tragédie était finie, mais une profonde tristesse enveloppait la forêt.",
			"Fut-ce un salut, ou une intrusion ?",
			"Seules des questions sans réponse demeuraient.",
			"La forêt restait silencieuse, et la nuit était longue."
		],
		"spanish": [
			"Haraldr desapareció. Con el trofeo definitivo.",
			"La tragedia terminó, pero una profunda tristeza envolvió el bosque.",
			"¿Fue salvación o intrusión?",
			"Solo quedaron preguntas sin respuesta.",
			"El bosque permaneció en silencio, y la noche fue larga."
		],
		"vietnamese": [
			"Haraldr đã biến mất. Cùng với chiến lợi phẩm cuối cùng.",
			"Bi kịch đã kết thúc, nhưng nỗi buồn sâu thẳm bao trùm khu rừng.",
			"Đó là sự cứu rỗi, hay sự xâm phạm?",
			"Chỉ còn lại những câu hỏi không ai có thể trả lời.",
			"Rừng vẫn tĩnh lặng, và đêm dài."
		],
		"thai": [
			"ฮารัลเดอร์หายไปแล้ว พร้อมกับรางวัลขั้นสูงสุด",
			"โศกนาฏกรรมสิ้นสุดลงแล้ว แต่ความโศกเศร้าอย่างสุดซึ้งปกคลุมป่า",
			"มันคือการไถ่ถอน หรือการบุกรุกกันแน่",
			"เหลือเพียงคำถามที่ไม่มีใครตอบได้",
			"ป่ายังคงเงียบสงบ และค่ำคืนก็ยาวนาน"
		],
		"hindi": [
			"हेराल्ड्र गायब हो गया। परम ट्रॉफी के साथ।",
			"त्रासदी समाप्त हो गई, लेकिन गहरे दुःख ने जंगल को घेर लिया।",
			"क्या यह मोक्ष था, या अतिक्रमण?",
			"केवल अनुत्तरित प्रश्न ही शेष रह गए।",
			"जंगल अभी भी शांत था, और रात लंबी थी।"
		]
	}
} as const;
