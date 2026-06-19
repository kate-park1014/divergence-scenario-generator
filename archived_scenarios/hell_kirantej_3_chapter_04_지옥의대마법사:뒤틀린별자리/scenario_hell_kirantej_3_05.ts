export const scenario_hell_kirantej_3_05 = {
	"scenario_id": "hell_kirantej_3_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
		}
	},
	"boss": {
		"pool_id": "pool_105"
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
						"korean": "지옥 서고의 깊은 곳. 오랫동안 이어진 탐색의 끝이 보였다.",
						"english": "Deep within Hell's archive. The end of a long-enduring quest was in sight.",
						"japanese": "地獄の書庫の奥深く。長く続いた探索の終わりが見えた。",
						"chinese": "地狱书库的深处。漫长探索的终点已然可见。",
						"french": "Au plus profond des archives de l'Enfer. La fin d'une longue quête était en vue.",
						"spanish": "En lo profundo del archivo del Infierno. El final de una larga búsqueda estaba a la vista.",
						"vietnamese": "Sâu thẳm bên trong thư viện Địa Ngục. Cuộc tìm kiếm trường kỳ sắp đến hồi kết.",
						"thai": "ลึกเข้าไปในคลังเอกสารของนรก จุดสิ้นสุดของการค้นหาที่ยาวนานปรากฏขึ้นแล้ว",
						"hindi": "नर्क के अभिलेखागार के गहरे में। एक लंबी खोज का अंत दिख रहा था।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "ash"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기까지 오니… 서고의 진실이 느껴지는군.",
						"english": "Now that I'm here… I can feel the archive's truth.",
						"japanese": "ここまで来て…書庫の真実が感じられる。",
						"chinese": "来到这里……我能感受到书库的真相了。",
						"french": "Maintenant que je suis ici… je peux ressentir la vérité des archives.",
						"spanish": "Ahora que estoy aquí… puedo sentir la verdad del archivo.",
						"vietnamese": "Đến được đây… ta cảm nhận được sự thật của thư viện.",
						"thai": "มาถึงที่นี่แล้ว... ข้ารู้สึกได้ถึงความจริงของคลังเอกสาร",
						"hindi": "अब जब मैं यहाँ हूँ… मैं अभिलेखागार की सच्चाई महसूस कर सकता हूँ।"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실이라니?",
						"english": "Truth?",
						"japanese": "「真実だって？」",
						"chinese": "“真相？”",
						"french": "« La vérité ? »",
						"spanish": "« ¿La verdad? »",
						"vietnamese": "“Sự thật ư?”",
						"thai": "“ความจริงเหรอ?”",
						"hindi": "“सच क्या है?”"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "그 대마법사는 지식을 준 게 아니야. 우리에게서 무언가를 빼앗아 갔어.",
						"english": "The Arch-mage didn't grant knowledge. He took something from us.",
						"japanese": "「あの大魔術師は知識を与えたんじゃない。我々から何かを奪っていったんだ。」",
						"chinese": "“那个大法师没有赐予知识。他从我们身上夺走了什么。”",
						"french": "« Le Grand Mage n'a pas donné de savoir. Il nous a pris quelque chose. »",
						"spanish": "« El Archimago no nos dio conocimiento. Nos quitó algo. »",
						"vietnamese": "“Đại pháp sư không ban kiến thức. Hắn đã lấy đi thứ gì đó từ chúng ta.”",
						"thai": "“จอมเวทนั่นไม่ได้ให้ความรู้ เขาเอาบางสิ่งไปจากเรา”",
						"hindi": "“उस महा जादूगर ने ज्ञान नहीं दिया। उसने हमसे कुछ छीन लिया।”"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "ash",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 영혼들… 왜 점점 희미해지는 거지?",
						"english": "Those souls... why are they fading?",
						"japanese": "「あの魂たち…なぜ薄れていく？」",
						"chinese": "“那些灵魂……为什么越来越模糊？”",
						"french": "« Ces âmes... pourquoi s'estompent-elles ? »",
						"spanish": "« Esas almas... ¿por qué se desvanecen? »",
						"vietnamese": "“Những linh hồn đó... sao chúng lại mờ dần?”",
						"thai": "“วิญญาณพวกนั้น... ทำไมถึงจางหายไป?”",
						"hindi": "“वो आत्माएं... क्यों धुंधली हो रही हैं?”"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"content": {
						"korean": "지식을 얻은 대가일 거야. 스스로도 모르게 빼앗긴 것들.",
						"english": "It must be the price for knowledge. Things taken without us even knowing.",
						"japanese": "「知識を得た代償だろう。自覚なく奪われたものだ。」",
						"chinese": "“这大概是获得知识的代价。在不知不觉中被夺走的东西。”",
						"french": "« C'est sûrement le prix du savoir. Des choses prises sans que nous le sachions. »",
						"spanish": "« Será el precio del conocimiento. Cosas que nos quitaron sin que lo supiéramos. »",
						"vietnamese": "“Chắc là cái giá phải trả để có được kiến thức. Những thứ bị lấy đi mà chúng ta không hề hay biết.”",
						"thai": "“คงเป็นค่าตอบแทนสำหรับความรู้ สิ่งที่ถูกพรากไปโดยที่เราไม่รู้ตัว”",
						"hindi": "“यह ज्ञान पाने की कीमत होगी। ऐसी चीज़ें जो हमें बिना बताए छीन ली गईं।”"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "설마… 우리의 정수라도 뺏긴 건가?",
						"english": "Could it be... our very essence was taken?",
						"japanese": "「まさか…我々の精髄までも奪われたのか？」",
						"chinese": "“难道……我们的精髓也被夺走了吗？”",
						"french": "« Serait-ce... notre essence même qui a été prise ? »",
						"spanish": "« ¿Acaso... nos quitaron nuestra propia esencia? »",
						"vietnamese": "“Chẳng lẽ... đến cả tinh hoa của chúng ta cũng bị lấy đi sao?”",
						"thai": "“ไม่จริงน่า... หรือแม้แต่แก่นแท้ของเราก็ถูกพรากไป?”",
						"hindi": "“कहीं... हमारी आत्मा ही तो नहीं छीन ली गई?”"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "천장의 별자리가… 계속 바뀌어. 뒤틀리고 있어.",
						"english": "The constellations on the ceiling... they keep changing. They're twisting.",
						"japanese": "「天井の星座が…変わり続けてる。歪んでいる。」",
						"chinese": "“天花板上的星座……一直在变。它们正在扭曲。”",
						"french": "« Les constellations au plafond... elles changent sans cesse. Elles se tordent. »",
						"spanish": "« Las constelaciones del techo... cambian sin parar. Se están retorciendo. »",
						"vietnamese": "“Chòm sao trên trần nhà... cứ thay đổi mãi. Chúng đang bị bóp méo.”",
						"thai": "“กลุ่มดาวบนเพดาน... เปลี่ยนแปลงไม่หยุดหย่อน บิดเบี้ยวไปหมด”",
						"hindi": "“छत पर के तारामंडल... बदलते जा रहे हैं। वे विकृत हो रहे हैं।”"
					}
				},
				{
					"content": {
						"korean": "그는 지식을 탐구하는 게 아니었어. 법칙 자체를 자기 손으로 고쳐 쓰고 있었던 거야.",
						"english": "He wasn't exploring knowledge. He was rewriting the laws themselves with his own hands.",
						"japanese": "「彼は知識を探求していたんじゃない。法則そのものを、己の手で書き換えていたんだ。」",
						"chinese": "“他不是在探索知识。他是在亲手改写法则本身。”",
						"french": "« Il n'explorait pas le savoir. Il réécrivait les lois elles-mêmes de ses propres mains. »",
						"spanish": "« Él no estaba explorando el conocimiento. Estaba reescribiendo las leyes mismas con sus propias manos. »",
						"vietnamese": "“Hắn không phải đang khám phá kiến thức. Hắn đang tự tay viết lại các quy luật.”",
						"thai": "“เขาไม่ได้แสวงหาความรู้ แต่กำลังเขียนกฎเกณฑ์ด้วยมือของตัวเอง”",
						"hindi": "“वह ज्ञान की खोज नहीं कर रहा था। वह अपने हाथों से ही नियमों को फिर से लिख रहा था।”"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우주의 법칙을? 대체 왜?",
						"english": "The laws of the universe? Why, of all things?",
						"japanese": "「宇宙の法則を？一体なぜだ？」",
						"chinese": "“宇宙的法则？究竟为什么？”",
						"french": "« Les lois de l'univers ? Mais pourquoi ? »",
						"spanish": "« ¿Las leyes del universo? ¿Por qué diablos? »",
						"vietnamese": "“Luật của vũ trụ ư? Tại sao chứ?”",
						"thai": "“กฎของจักรวาล? ทำไมกันแน่?”",
						"hindi": "“ब्रह्मांड के नियम? आखिर क्यों?”"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "ash",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "지옥은 그에게 감옥이 아니었어. 그저… 다음 관측소일 뿐.",
						"english": "Hell wasn't a prison for him. It was merely... his next observatory.",
						"japanese": "「地獄は彼にとって牢獄じゃなかった。ただの…次の観測所に過ぎなかったんだ。」",
						"chinese": "“地狱对他来说并非监狱。那只是……下一个观测站罢了。”",
						"french": "« L'Enfer n'était pas une prison pour lui. Ce n'était que... son prochain observatoire. »",
						"spanish": "« El infierno no era una prisión para él. Era simplemente... su siguiente observatorio. »",
						"vietnamese": "“Địa ngục không phải là nhà tù đối với hắn. Nó chỉ là... trạm quan sát tiếp theo mà thôi.”",
						"thai": "“นรกไม่เคยเป็นคุกสำหรับเขา มันเป็นเพียง... หอดูดาวแห่งต่อไป”",
						"hindi": "“नरक उसके लिए कोई जेल नहीं था। वह तो बस... उसकी अगली वेधशाला थी।”"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "그럼 우린… 대체 뭐였지?",
						"english": "Then what... were we, exactly?",
						"japanese": "「じゃあ我々は…一体何だったんだ？」",
						"chinese": "“那我们……到底是什么？”",
						"french": "« Alors nous... qu'étions-nous, au juste ? »",
						"spanish": "« Entonces nosotros... ¿qué fuimos, exactamente? »",
						"vietnamese": "“Vậy thì chúng ta... rốt cuộc là gì?”",
						"thai": "“แล้วเราล่ะ... เป็นอะไรกันแน่?”",
						"hindi": "“तो हम... आखिर क्या थे?”"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그의 \"위대한 설계\"의 마지막 한 조각. 마지막 별이었던 거야.",
						"english": "The final piece of his \"Great Design.\" It was the last star.",
						"japanese": "彼の「偉大な設計」の最後の一片。最後の星だったのだ。",
						"chinese": "他“伟大设计”的最后一块碎片。那是最后一颗星。",
						"french": "La dernière pièce de son \"Grand Dessein\". C'était la dernière étoile.",
						"spanish": "La última pieza de su \"Gran Diseño\". Era la última estrella.",
						"vietnamese": "Mảnh ghép cuối cùng trong \"Thiết Kế Vĩ Đại\" của hắn. Đó là ngôi sao cuối cùng.",
						"thai": "ชิ้นส่วนสุดท้ายของ \"แผนการอันยิ่งใหญ่\" ของเขา มันคือดาวดวงสุดท้าย",
						"hindi": "उसके \"महान डिज़ाइन\" का आखिरी टुकड़ा। यह आखिरी तारा था।"
					},
					"speaker": "ash",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "돌아갈 길은 없다. 오직 앞으로 나아가, 진실을 마주할 뿐이다.",
						"english": "There's no turning back. Only forward, to face the truth.",
						"japanese": "もう後戻りはできない。ただ前進し、真実と向き合うのみだ。",
						"chinese": "没有回头路。唯有向前，面对真相。",
						"french": "Pas de retour en arrière. Seulement avancer, pour faire face à la vérité.",
						"spanish": "No hay vuelta atrás. Solo queda avanzar, para enfrentar la verdad.",
						"vietnamese": "Không có đường lùi. Chỉ có tiến về phía trước, đối mặt với sự thật.",
						"thai": "ไม่มีทางย้อนกลับ มีแต่ต้องก้าวไปข้างหน้า เผชิญหน้ากับความจริงเท่านั้น",
						"hindi": "पीछे मुड़ने का कोई रास्ता नहीं। बस आगे बढ़ना है, सच्चाई का सामना करना है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "크하하… 막았다고 생각하나? 이미 시작된 일… 멈출 수 없다.",
						"english": "Hahaha... Do you think you've stopped me? What has begun... cannot be stopped.",
						"japanese": "クハハ… 止めたとでも思っているのか？すでに始まったこと… 止めることはできぬ。",
						"chinese": "哈哈哈… 你以为你阻止了我吗？已经开始的事情… 无法停止。",
						"french": "Hahaha… Pensez-vous m'avoir arrêté ? Ce qui a commencé… ne peut être arrêté.",
						"spanish": "Jajaja… ¿Creéis que me habéis detenido? Lo que ha empezado… no puede detenerse.",
						"vietnamese": "Khahaha... Ngươi nghĩ đã ngăn cản được ta sao? Những gì đã bắt đầu... không thể dừng lại.",
						"thai": "คิกคิก... เจ้าคิดว่าหยุดข้าได้แล้วรึ? สิ่งที่ได้เริ่มไปแล้ว... หยุดไม่ได้หรอก",
						"hindi": "हाहाहा... क्या तुम्हें लगता है कि तुमने मुझे रोक दिया है? जो शुरू हो चुका है... उसे रोका नहीं जा सकता।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What are you talking about!?",
						"japanese": "何を言っている！？",
						"chinese": "你在说什么！？",
						"french": "De quoi parlez-vous !?",
						"spanish": "¡¿Qué estás diciendo?!",
						"vietnamese": "Ngươi đang nói cái gì vậy!?",
						"thai": "เจ้ากำลังพูดอะไร!?",
						"hindi": "क्या कह रहे हो तुम!?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "정수가… 불안정해. 아직 끝나지 않았어.",
						"english": "The essence... is unstable. It's not over yet.",
						"japanese": "精髄が… 不安定だ。まだ終わっていない。",
						"chinese": "精髓… 不稳定。还没有结束。",
						"french": "L'essence… est instable. Ce n'est pas encore fini.",
						"spanish": "La esencia… es inestable. Aún no ha terminado.",
						"vietnamese": "Tinh túy... không ổn định. Vẫn chưa kết thúc đâu.",
						"thai": "แก่นแท้... ไม่เสถียร มันยังไม่จบ",
						"hindi": "सार... अस्थिर है। यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그의 몸은 사라졌지만, 그 오만은 우주에 각인되었다. 이 승리는… 또 다른 시작일 뿐이었다.",
						"english": "His body vanished, but his arrogance was etched into the cosmos. This victory… was merely another beginning.",
						"japanese": "彼の体は消えたが、その傲慢は宇宙に刻まれた。この勝利は…単なる新たな始まりに過ぎなかった。",
						"chinese": "他的身体消失了，但他的傲慢却铭刻在宇宙中。这场胜利……仅仅是另一个开始。",
						"french": "Son corps a disparu, mais son arrogance a été gravée dans le cosmos. Cette victoire… n'était qu'un autre commencement.",
						"spanish": "Su cuerpo desapareció, pero su arrogancia quedó grabada en el cosmos. Esta victoria… era solo otro comienzo.",
						"vietnamese": "Thân thể hắn biến mất, nhưng sự kiêu ngạo của hắn đã khắc sâu vào vũ trụ. Chiến thắng này… chỉ là một khởi đầu khác.",
						"thai": "ร่างกายของเขาหายไป แต่ความเย่อหยิ่งของเขาถูกจารึกไว้ในจักรวาล ชัยชนะนี้… เป็นเพียงจุดเริ่มต้นอีกครั้ง",
						"hindi": "उसका शरीर गायब हो गया, लेकिन उसका अहंकार ब्रह्मांड में अंकित हो गया। यह जीत… केवल एक और शुरुआत थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "피할 수 없는 운명. 나의 별이 되어라.",
						"english": "Inevitable fate. Become my star.",
						"japanese": "避けられない運命。私の星となれ。",
						"chinese": "无法避免的命运。成为我的星星吧。",
						"french": "Destin inévitable. Deviens mon étoile.",
						"spanish": "Destino inevitable. Conviértete en mi estrella.",
						"vietnamese": "Định mệnh không thể tránh khỏi. Hãy trở thành vì sao của ta.",
						"thai": "โชคชะตาที่หลีกเลี่ยงไม่ได้ จงมาเป็นดวงดาวของข้า",
						"hindi": "अपरिहार्य भाग्य। मेरा तारा बनो।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…여기서 멈출 순 없어!",
						"english": "…I can't stop here!",
						"japanese": "…ここで止まるわけにはいかない！",
						"chinese": "……我不能止步于此！",
						"french": "…Je ne peux pas m'arrêter ici !",
						"spanish": "…¡No puedo parar aquí!",
						"vietnamese": "…Ta không thể dừng lại ở đây!",
						"thai": "…ข้าหยุดอยู่ตรงนี้ไม่ได้!",
						"hindi": "…मैं यहाँ रुक नहीं सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이 절망마저… 나의 양식이 될지니.",
						"english": "Even this despair… shall become my sustenance.",
						"japanese": "この絶望すら…私の糧となるだろう。",
						"chinese": "这绝望也…将成为我的养食。",
						"french": "Même ce désespoir… deviendra ma subsistance.",
						"spanish": "Incluso esta desesperación… se convertirá en mi sustento.",
						"vietnamese": "Ngay cả sự tuyệt vọng này… cũng sẽ trở thành lương thực của ta.",
						"thai": "แม้แต่ความสิ้นหวังนี้… ก็จะกลายเป็นพลังของข้า",
						"hindi": "यह निराशा भी… मेरी खुराक बन जाएगी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 필멸자들… 겨우 이런 곳에 갇힌 줄 알았느냐?",
						"english": "Foolish mortals... Did you think you merely trapped me here?",
						"japanese": "愚かなる定命の者どもよ… まさか、この程度の場所に閉じ込められたとでも思ったか？",
						"chinese": "愚蠢的凡人… 你们以为我只是被困在这里了吗？",
						"french": "Mortels insensés… Pensiez-vous m'avoir simplement piégé ici ?",
						"spanish": "Mortales necios… ¿Creísteis que solo me habíais atrapado aquí?",
						"vietnamese": "Lũ phàm nhân ngu xuẩn... Ngươi nghĩ ta chỉ bị nhốt ở đây thôi sao?",
						"thai": "พวกมนุษย์ผู้โง่เขลา... เจ้าคิดว่าแค่ขังข้าไว้ที่นี่หรือ?",
						"hindi": "मूर्ख नश्वर प्राणी... क्या तुम्हें लगा कि तुमने मुझे बस यहाँ फँसा लिया है?"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "이곳은… 그저 나의 다음 관측소일 뿐. 그리고 너희는…",
						"english": "This place... is merely my next observatory. And you...",
						"japanese": "ここは… ただの我が次の観測所に過ぎぬ。そして貴様らは…",
						"chinese": "此处… 只是我的下一个观测站而已。而你们…",
						"french": "Cet endroit… n'est que mon prochain observatoire. Et vous…",
						"spanish": "Este lugar… es meramente mi próximo observatorio. Y vosotros…",
						"vietnamese": "Nơi này... chỉ là đài quan sát tiếp theo của ta. Còn các ngươi...",
						"thai": "ที่นี่... ก็แค่หอดูดาวแห่งถัดไปของข้าเท่านั้น และพวกเจ้า...",
						"hindi": "यह जगह... बस मेरी अगली वेधशाला है। और तुम..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "내 위대한 설계의 마지막이자 핵심이 될 별이지!",
						"english": "The final and crucial star in my Great Design!",
						"japanese": "我が偉大なる設計の最後にして、核心となる星だ！",
						"chinese": "将成为我伟大设计的最后也是核心之星！",
						"french": "L'étoile finale et cruciale de mon Grand Dessein !",
						"spanish": "¡La estrella final y crucial de mi Gran Diseño!",
						"vietnamese": "Ngôi sao cuối cùng và cốt lõi trong Kế Hoạch Vĩ Đại của ta!",
						"thai": "ดวงดาวสุดท้ายและสำคัญที่สุดในแผนการอันยิ่งใหญ่ของข้า!",
						"hindi": "मेरे महान डिज़ाइन का अंतिम और महत्वपूर्ण तारा!"
					},
					"emotion": "happy"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마라! 네 계획을 멈추겠다!",
						"english": "Stop your nonsense! I'll put an end to your plans!",
						"japanese": "戯言はやめろ！貴様の計画を阻止する！",
						"chinese": "少废话！我会阻止你的计划！",
						"french": "Cesse tes balivernes ! J'arrêterai tes plans !",
						"spanish": "¡Basta de tonterías! ¡Detendré tus planes!",
						"vietnamese": "Đừng có nói nhảm! Ta sẽ chấm dứt kế hoạch của ngươi!",
						"thai": "หยุดพล่ามได้แล้ว! ข้าจะหยุดแผนการของเจ้า!",
						"hindi": "बकवास बंद करो! मैं तुम्हारी योजनाओं को रोक दूँगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "오만하군. 감히 나의 승천을 막겠다고?",
						"english": "Arrogant. You dare try to stop my ascension?",
						"japanese": "傲慢な奴め。よくも我が昇天を阻もうとするな？",
						"chinese": "傲慢。你竟敢阻止我的升天？",
						"french": "Arrogant. Oses-tu tenter d'arrêter mon ascension ?",
						"spanish": "Sois arrogante. ¿Osas intentar detener mi ascensión?",
						"vietnamese": "Ngạo mạn. Ngươi dám ngăn cản sự thăng thiên của ta sao?",
						"thai": "อวดดีนัก กล้าดียังไงมาขัดขวางการขึ้นสู่สรวงสวรรค์ของข้า?",
						"hindi": "घमंडी। तुम्हारी हिम्मत कैसे हुई मेरी चढ़ाई रोकने की?"
					},
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"서고는 침묵했다. 더 이상 지식을 갈구하는 영혼도, 속삭이는 대마법사도 없었다.",
			"그의 설계는 잠시 멈췄지만, 우주의 뒤틀림은 여전히 잔재했다.",
			"과연, 탐험대는 구원자가 되었을까? 아니면 또 다른 찬탈자의 발판이었을까.",
			"승리 뒤에 찾아온 공허함. 이 끝없는 지옥에서, 다음 별은 어디로 향할 것인가."
		],
		"english": [
			"The archive fell silent. No more souls craved knowledge, no more archmages whispered.",
			"His design paused for a moment, but the cosmic distortion still lingered.",
			"Did the expedition truly become saviors? Or merely stepping stones for another usurper?",
			"The emptiness that followed victory. In this endless Hell, where will the next star turn?"
		],
		"japanese": [
			"書庫は沈黙した。もはや知識を求める魂も、ささやく大魔術師もいなかった。",
			"彼の設計は一時的に停止したが、宇宙の歪みは依然として残っていた。",
			"果たして、探検隊は救世主となったのか？それとも、別の簒奪者の足がかりに過ぎなかったのか。",
			"勝利の後に訪れた虚無。この終わりのない地獄で、次の星はどこへ向かうのか。"
		],
		"chinese": [
			"书库陷入了沉寂。不再有渴望知识的灵魂，也不再有低语的大魔法师。",
			"他的设计暂时停滞，但宇宙的扭曲依然残留。",
			"探险队究竟成为了救世主？抑或是另一个篡位者的垫脚石？",
			"胜利之后袭来的空虚。在这无尽地狱中，下一颗星辰将何去何从？"
		],
		"french": [
			"Les archives se turent. Plus aucune âme ne recherchait le savoir, plus aucun archimage ne chuchotait.",
			"Son dessein fut suspendu un instant, mais la distorsion cosmique persistait.",
			"L'expédition est-elle vraiment devenue des sauveurs ? Ou de simples tremplins pour un autre usurpateur ?",
			"Le vide qui a suivi la victoire. Dans cet Enfer sans fin, où la prochaine étoile se tournera-t-elle ?"
		],
		"spanish": [
			"El archivo quedó en silencio. Ya no había almas sedientas de conocimiento, ni archimagos susurrando.",
			"Su diseño se detuvo por un momento, pero la distorsión cósmica aún perduraba.",
			"¿Se convirtió la expedición realmente en salvadores? ¿O solo en peldaños para otro usurpador?",
			"El vacío que siguió a la victoria. En este Infierno sin fin, ¿hacia dónde se dirigirá la próxima estrella?"
		],
		"vietnamese": [
			"Thư viện chìm vào im lặng. Không còn linh hồn khao khát tri thức, cũng chẳng còn Đại Pháp sư thì thầm.",
			"Kế hoạch của hắn tạm dừng, nhưng sự méo mó của vũ trụ vẫn còn sót lại.",
			"Liệu đội thám hiểm có thực sự trở thành vị cứu tinh? Hay chỉ là bàn đạp cho một kẻ soán ngôi khác?",
			"Sự trống rỗng đến sau chiến thắng. Trong Địa Ngục vô tận này, vì sao tiếp theo sẽ hướng về đâu?"
		],
		"thai": [
			"คลังเอกสารเงียบงัน ไม่มีวิญญาณใดกระหายความรู้ ไม่มีจอมเวทย์กระซิบกระซาบอีกต่อไป",
			"แผนการของเขาหยุดชั่วคราว แต่ความบิดเบี้ยวของจักรวาลยังคงหลงเหลืออยู่",
			"แท้จริงแล้ว คณะสำรวจกลายเป็นผู้กอบกู้หรือไม่? หรือเป็นเพียงบันไดให้ผู้ช่วงชิงรายอื่น?",
			"ความว่างเปล่าที่ตามมาหลังชัยชนะ ในนรกอันไร้ที่สิ้นสุดนี้ ดวงดาวดวงต่อไปจะมุ่งหน้าไปทางไหน"
		],
		"hindi": [
			"अभिलेखागार शांत हो गया। अब ज्ञान की चाह रखने वाली आत्माएं नहीं थीं, न ही फुसफुसाते हुए महा-जादूगर।",
			"उसकी योजना कुछ पल के लिए रुक गई, पर ब्रह्मांडीय विकृति अब भी बनी हुई थी।",
			"क्या वाकई, अभियान दल उद्धारकर्ता बन गया? या सिर्फ किसी और हड़पने वाले का मोहरा?",
			"जीत के बाद आई शून्यता। इस अंतहीन नर्क में, अगला तारा किधर जाएगा?"
		]
	},
	"prologue": {
		"korean": [
			"지옥 가장 깊은 곳의 끝없는 서고. 그곳의 주인은 자비로운 학자의 가면을 쓰고 있었다.",
			"힘과 탈출의 길을 약속했지만, 그 지식은 절대 공짜가 아니었다.",
			"마지막 별들이 모였다. 그리고 그는… 비로소 본모습을 드러냈다.",
			"지옥은 그의 감옥이 아니었다. 거대한 설계의 시작점일 뿐."
		],
		"english": [
			"The endless archive in the deepest reaches of Hell. Its master wore the mask of a benevolent scholar.",
			"He promised power and a path to escape, but that knowledge was never free.",
			"The last stars gathered. And he… finally revealed his true form.",
			"Hell was not his prison. Only the starting point of a grand design."
		],
		"japanese": [
			"地獄の最深部にある無限の書庫。その主は慈悲深い学者の仮面をかぶっていた。",
			"力と脱出の道を約束したが、その知識は決してただではなかった。",
			"最後の星々が集まった。そして彼は…ついにその正体を現した。",
			"地獄は彼の監獄ではなかった。巨大な設計の出発点に過ぎなかった。"
		],
		"chinese": [
			"地狱最深处的无尽书库。其主戴着仁慈学者的面具。",
			"他承诺了力量和逃脱之路，但那知识绝非免费。",
			"最后的星辰聚集了。而他……终于露出了真面目。",
			"地狱并非他的牢狱。而只是宏大设计的起点。"
		],
		"french": [
			"Les archives infinies au plus profond de l'Enfer. Son maître portait le masque d'un érudit bienveillant.",
			"Il promettait le pouvoir et une voie d'évasion, mais cette connaissance n'était jamais gratuite.",
			"Les dernières étoiles se sont rassemblées. Et il… a enfin révélé sa véritable forme.",
			"L'Enfer n'était pas sa prison. Seulement le point de départ d'un grand dessein."
		],
		"spanish": [
			"El archivo interminable en lo más profundo del Infierno. Su amo vestía la máscara de un erudito benévolo.",
			"Prometió poder y un camino de escape, pero ese conocimiento nunca fue gratis.",
			"Las últimas estrellas se reunieron. Y él… finalmente reveló su verdadera forma.",
			"El Infierno no era su prisión. Solo el punto de partida de un gran diseño."
		],
		"vietnamese": [
			"Thư viện vô tận ở nơi sâu thẳm nhất Địa Ngục. Chủ nhân của nó mang mặt nạ của một học giả nhân từ.",
			"Hắn hứa hẹn sức mạnh và lối thoát, nhưng tri thức đó chưa bao giờ là miễn phí.",
			"Những vì sao cuối cùng đã tụ họp. Và hắn… cuối cùng đã lộ nguyên hình.",
			"Địa Ngục không phải nhà tù của hắn. Mà chỉ là điểm khởi đầu cho một kế hoạch vĩ đại."
		],
		"thai": [
			"คลังเอกสารอันไม่สิ้นสุดที่ก้นบึ้งของนรก ผู้ครอบครองสวมหน้ากากของนักปราชญ์ผู้เมตตา",
			"เขาสัญญาถึงพลังและหนทางหลบหนี แต่ความรู้นั้นไม่เคยได้มาฟรีๆ",
			"ดวงดาวสุดท้ายรวมกัน และเขา... ก็เผยโฉมที่แท้จริงในที่สุด",
			"นรกไม่เคยเป็นคุกของเขา เป็นเพียงจุดเริ่มต้นของแผนการอันยิ่งใหญ่เท่านั้น"
		],
		"hindi": [
			"नर्क की सबसे गहरी खाई में अंतहीन अभिलेखागार। उसका स्वामी एक परोपकारी विद्वान का मुखौटा पहने हुए था।",
			"उसने शक्ति और पलायन का मार्ग वादा किया, पर वह ज्ञान कभी मुफ्त नहीं था।",
			"अंतिम तारे एकत्रित हुए। और उसने… अंततः अपना असली रूप प्रकट किया।",
			"नर्क उसकी जेल नहीं था। केवल एक महान योजना का प्रारंभिक बिंदु।"
		]
	}
} as const;
