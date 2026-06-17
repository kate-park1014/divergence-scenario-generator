export const scenario_snowy_fenrir_6_05 = {
	"scenario_id": "snowy_fenrir_6_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거친 눈보라 속, 거대한 그림자가 길을 막아섰다.",
						"english": "In the raging blizzard, a colossal shadow blocked our path.",
						"japanese": "荒れ狂う吹雪の中、巨大な影が道を阻んだ。",
						"chinese": "在狂风暴雪中，一个巨大的身影挡住了去路。",
						"french": "Dans le blizzard déchaîné, une ombre colossale bloquait notre chemin.",
						"spanish": "En la feroz ventisca, una sombra colosal bloqueó nuestro camino.",
						"vietnamese": "Trong bão tuyết dữ dội, một bóng đen khổng lồ chặn đường chúng tôi.",
						"thai": "ท่ามกลางพายุหิมะอันบ้าคลั่ง เงาขนาดยักษ์ขวางทางเราอยู่",
						"hindi": "प्रचंड बर्फीले तूफ़ान में, एक विशालकाय साये ने हमारा रास्ता रोक दिया।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "더는 안 된다. 여기까지가 한계다.",
						"english": "No more. This is our limit.",
						"japanese": "もう無理だ。ここまでが限界だ。",
						"chinese": "不行了。到此为止，这是极限了。",
						"french": "Plus loin, non. C'est notre limite.",
						"spanish": "No más. Este es nuestro límite.",
						"vietnamese": "Không thể tiếp tục. Đây là giới hạn của chúng ta.",
						"thai": "ไม่ไหวแล้ว นี่คือขีดจำกัดของเรา",
						"hindi": "और नहीं। यह हमारी हद है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이바르 대장님! 이제 Fenrir가 눈앞인데 포기하자는 겁니까?",
						"english": "Captain Ivar! Fenrir is right before us, are you saying we should give up now?",
						"japanese": "イヴァル隊長！Fenrirは目の前です、今になって諦めるというのですか？",
						"chinese": "伊瓦尔队长！芬里尔就在眼前，你现在要放弃吗？",
						"french": "Capitaine Ivar ! Fenrir est devant nous, vous dites qu'il faut abandonner maintenant ?",
						"spanish": "¡Capitán Ivar! Fenrir está frente a nosotros, ¿está diciendo que debemos rendirnos ahora?",
						"vietnamese": "Đội trưởng Ivar! Fenrir ngay trước mắt, chúng ta phải bỏ cuộc sao?",
						"thai": "กัปตันอีวาร์! เฟนริร์อยู่ตรงหน้าแล้ว ท่านจะยอมแพ้ตอนนี้หรือ?",
						"hindi": "कप्तान इवार! फेनrir ठीक हमारे सामने है, क्या आप कह रहे हैं कि हमें अब हार मान लेनी चाहिए?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "놈은 우리가 아는 짐승이 아니다. 그 존재 자체가 이 설원의 저주다.",
						"english": "It's no beast we know. Its very existence is this snowfield's curse.",
						"japanese": "あれは我々が知る獣ではない。その存在自体が、この雪原の呪いだ。",
						"chinese": "它不是我们所知的野兽。它的存在本身就是这雪原的诅咒。",
						"french": "Ce n'est pas une bête que nous connaissons. Son existence même est la malédiction de cette étendue enneigée.",
						"spanish": "No es una bestia que conozcamos. Su sola existencia es la maldición de este campo de nieve.",
						"vietnamese": "Nó không phải là một con quái vật bình thường. Sự tồn tại của nó chính là lời nguyền của vùng tuyết này.",
						"thai": "มันไม่ใช่สัตว์ป่าที่เรารู้จัก การมีอยู่ของมันคือคำสาปของทุ่งหิมะแห่งนี้",
						"hindi": "वह कोई ऐसा जानवर नहीं जिसे हम जानते हैं। उसका अस्तित्व ही इस बर्फीले मैदान का अभिशाप है।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "두렵습니까?",
						"english": "Are you afraid?",
						"japanese": "恐ろしいのですか？",
						"chinese": "你害怕了吗？",
						"french": "Avez-vous peur ?",
						"spanish": "¿Tiene miedo?",
						"vietnamese": "Ngài sợ sao?",
						"thai": "ท่านกลัวหรือ?",
						"hindi": "क्या आप डरे हुए हैं?"
					}
				},
				{
					"content": {
						"korean": "두려운 게 아니라… 이건 무모한 짓이다.",
						"english": "Not afraid... This is reckless.",
						"japanese": "怖いのではなく… これは無謀な行いだ。",
						"chinese": "不是害怕… 这是鲁莽的行为。",
						"french": "Pas de la peur... C'est une folie.",
						"spanish": "No es miedo... Esto es una imprudencia.",
						"vietnamese": "Không phải sợ... Mà đây là hành động liều lĩnh.",
						"thai": "ไม่ใช่ความกลัว... แต่นี่มันบ้าบิ่นเกินไป",
						"hindi": "डरा हुआ नहीं... यह एक लापरवाह हरकत है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "보급품은 바닥났고, 눈보라는 더 거세지고 있다. 이제 돌아가야 한다.",
						"english": "Supplies are depleted, and the blizzard grows fiercer. We must turn back now.",
						"japanese": "物資は尽き、吹雪はさらに激しくなっている。もう引き返すべきだ。",
						"chinese": "补给耗尽，暴风雪愈发猛烈。现在必须回去了。",
						"french": "Les provisions sont épuisées, et le blizzard redouble d'intensité. Nous devons faire demi-tour maintenant.",
						"spanish": "Los suministros están agotados y la ventisca se vuelve más intensa. Debemos regresar ahora.",
						"vietnamese": "Tiếp tế đã cạn, bão tuyết ngày càng dữ dội. Chúng ta phải quay về thôi.",
						"thai": "เสบียงหมดแล้ว และพายุหิมะก็รุนแรงขึ้น เราต้องกลับตอนนี้",
						"hindi": "सामान ख़त्म हो गया है, और बर्फीला तूफ़ान और तेज़ हो रहा है। हमें अब वापस जाना होगा।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이대로 물러설 순 없습니다!",
						"english": "We can't retreat like this!",
						"japanese": "このままでは退けません！",
						"chinese": "我们不能就这样撤退！",
						"french": "Nous ne pouvons pas battre en retraite comme ça !",
						"spanish": "¡No podemos retirarnos así!",
						"vietnamese": "Chúng ta không thể lùi bước như thế này được!",
						"thai": "เราถอยกลับไปแบบนี้ไม่ได้!",
						"hindi": "हम ऐसे पीछे नहीं हट सकते!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "너희의 승리욕이 모두를 죽일 거다. 놈의 힘은… 우리가 감당할 수준이 아니다.",
						"english": "Your desire for victory will kill us all. Its power... is beyond our capacity.",
						"japanese": "お前たちの勝利への執着が、皆を殺すことになる。奴の力は… 我々が手に負えるレベルではない。",
						"chinese": "你们的求胜欲望会害死所有人。它的力量… 远超我们能承受的范围。",
						"french": "Votre soif de victoire nous tuera tous. Sa puissance... dépasse nos capacités.",
						"spanish": "Vuestro deseo de victoria nos matará a todos. Su poder... está más allá de nuestra capacidad.",
						"vietnamese": "Khát vọng chiến thắng của các ngươi sẽ giết chết tất cả. Sức mạnh của nó... không phải thứ chúng ta có thể đối phó.",
						"thai": "ความอยากเอาชนะของพวกเจ้าจะฆ่าทุกคน พลังของมัน... เกินกว่าที่เราจะรับมือได้",
						"hindi": "तुम्हारी जीत की इच्छा हम सबको मार डालेगी। उसकी शक्ति... हमारी क्षमता से परे है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만… 여기까지 왔는데…",
						"english": "But... we've come so far...",
						"japanese": "しかし… ここまで来たのに…",
						"chinese": "但是… 我们已经走到这一步了…",
						"french": "Mais... nous sommes venus de si loin...",
						"spanish": "Pero... hemos llegado tan lejos...",
						"vietnamese": "Nhưng... chúng ta đã đi xa đến vậy rồi...",
						"thai": "แต่ว่า... เรามาถึงขนาดนี้แล้วนะ...",
						"hindi": "लेकिन... हम इतनी दूर आ गए हैं..."
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "더 가다간… 아무도 살아남지 못한다.",
						"english": "Go further... and no one survives.",
						"japanese": "これ以上進めば…誰も生き残れない。",
						"chinese": "再往前走…无人能生还。",
						"french": "Si nous allons plus loin… personne n'en réchappera.",
						"spanish": "Si vamos más lejos… nadie sobrevivirá.",
						"vietnamese": "Đi xa hơn nữa… sẽ không ai sống sót.",
						"thai": "ถ้าไปไกลกว่านี้...จะไม่มีใครรอด",
						"hindi": "और आगे गए तो... कोई ज़िंदा नहीं बचेगा।"
					},
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "방금 스쳐 지나간 냉기… 단순한 추위가 아니었다.",
						"english": "That chill that just passed... it wasn't just cold.",
						"japanese": "今しがた通り過ぎた冷気…ただの寒気ではなかった。",
						"chinese": "刚才掠过的寒气…那可不是普通的冷。",
						"french": "Ce frisson qui vient de passer… ce n'était pas un simple froid.",
						"spanish": "Ese escalofrío que acaba de pasar… no era solo frío.",
						"vietnamese": "Luồng khí lạnh vừa lướt qua… không phải chỉ là cái lạnh thông thường.",
						"thai": "ความเย็นยะเยือกที่พึ่งผ่านไป...ไม่ใช่แค่ความหนาวธรรมดา",
						"hindi": "अभी जो ठंडक गुज़री... वो महज़ ठंड नहीं थी।"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 말씀이십니까, 대장님?",
						"english": "What do you mean, Captain?",
						"japanese": "どういうことですか、隊長？",
						"chinese": "您这是什么意思，队长？",
						"french": "Que voulez-vous dire, Capitaine ?",
						"spanish": "¿Qué quiere decir, Capitán?",
						"vietnamese": "Ý của ngài là gì, Đại trưởng?",
						"thai": "ท่านหมายความว่าอะไรครับ ท่านหัวหน้า?",
						"hindi": "आपका क्या मतलब है, कैप्टन?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 땅의 모든 온기, 모든 생명력을 빨아들이는 듯한 느낌이었다.",
						"english": "It felt like it was sucking all the warmth, all the life force from this land.",
						"japanese": "この地のあらゆる温もり、あらゆる生命力を吸い取るような感じだった。",
						"chinese": "感觉像是吸走了这片土地上所有的温暖，所有的生命力。",
						"french": "C'était comme si ça aspirait toute la chaleur, toute la force vitale de cette terre.",
						"spanish": "Parecía que estaba absorbiendo todo el calor, toda la fuerza vital de esta tierra.",
						"vietnamese": "Cảm giác như nó đang hút cạn mọi hơi ấm, mọi sinh lực trên vùng đất này.",
						"thai": "รู้สึกเหมือนมันกำลังดูดซับความอบอุ่นและพลังชีวิตทั้งหมดจากแผ่นดินนี้",
						"hindi": "ऐसा लग रहा था जैसे वो इस ज़मीन की सारी गर्मी, सारी जीवन-शक्ति चूस रहा हो।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "놈의 영역에 깊이 들어올수록, 우리는… 서서히 잠식당하는 거다.",
						"english": "The deeper we enter its domain, the more... we'll be slowly consumed.",
						"japanese": "奴の領域に深く入り込むほど、我々は…徐々に侵食されるだろう。",
						"chinese": "越是深入它的领域，我们就会…逐渐被侵蚀。",
						"french": "Plus nous pénétrons profondément dans son domaine, plus nous… serons lentement consumés.",
						"spanish": "Cuanto más nos adentramos en su dominio, más… seremos lentamente consumidos.",
						"vietnamese": "Càng tiến sâu vào lãnh địa của nó, chúng ta… sẽ càng bị nó xâm chiếm dần.",
						"thai": "ยิ่งเราลึกเข้าไปในอาณาเขตของมันมากเท่าไหร่...เราก็จะถูกกลืนกินไปเรื่อยๆ",
						"hindi": "जितना हम उसके क्षेत्र में गहरे उतरेंगे, हम... धीरे-धीरे समाहित होते जाएंगे।"
					}
				},
				{
					"content": {
						"korean": "잠식…",
						"english": "Consumed...",
						"japanese": "侵食…",
						"chinese": "侵蚀…",
						"french": "Consumés…",
						"spanish": "¿Consumidos?",
						"vietnamese": "Xâm chiếm…",
						"thai": "กลืนกิน...",
						"hindi": "समाहित..."
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "후퇴해라! 지금이 마지막 기회다!",
						"english": "Retreat! This is your last chance!",
						"japanese": "退却しろ！今が最後のチャンスだ！",
						"chinese": "撤退！这是最后的机会了！",
						"french": "Retirez-vous ! C'est votre dernière chance !",
						"spanish": "¡Retirada! ¡Esta es vuestra última oportunidad!",
						"vietnamese": "Rút lui! Đây là cơ hội cuối cùng!",
						"thai": "ถอยทัพ! นี่คือโอกาสสุดท้าย!",
						"hindi": "पीछे हटो! ये आख़िरी मौक़ा है!"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 됩니다! 저희는 Fenrir를 잡아야 합니다!",
						"english": "No! We have to catch Fenrir!",
						"japanese": "だめです！我々はFenrirを捕らえねばなりません！",
						"chinese": "不行！我们必须抓住芬里尔！",
						"french": "Non ! Nous devons attraper Fenrir !",
						"spanish": "¡No! ¡Tenemos que atrapar a Fenrir!",
						"vietnamese": "Không được! Chúng tôi phải bắt được Fenrir!",
						"thai": "ไม่ได้! เราต้องจับ Fenrir ให้ได้!",
						"hindi": "नहीं! हमें फ़ेनरिर को पकड़ना होगा!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 바보는… 놈은… 너희가 상대할 존재가 아니야! 내가 시간을 벌 테니 돌아가!",
						"english": "You fools... he's... not someone you can handle! I'll buy you time, now go back!",
						"japanese": "この馬鹿者め…奴は…お前たちが相手にする存在じゃない！私が時間を稼ぐから、戻れ！",
						"chinese": "你们这些笨蛋…他…他不是你们能对付的！我来争取时间，你们快回去！",
						"french": "Espèces d'idiots… il n'est… pas de taille pour vous ! Je vais gagner du temps, retournez-vous-en !",
						"spanish": "¡Idiotas! Él... ¡no es alguien a quien podáis enfrentaros! ¡Ganaré tiempo, volved!",
						"vietnamese": "Đồ ngốc… hắn… không phải là đối thủ của các ngươi! Ta sẽ câu giờ, các ngươi mau quay về!",
						"thai": "ไอ้พวกงี่เง่า...มัน...ไม่ใช่มอนสเตอร์ที่พวกแกจะรับมือได้! ฉันจะถ่วงเวลาไว้ พวกแกกลับไปซะ!",
						"hindi": "तुम बेवकूफ़... वो... वो कोई ऐसा नहीं जिससे तुम निपट सको! मैं तुम्हें समय दूंगा, तुम वापस जाओ!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대장님!",
						"english": "Captain!",
						"japanese": "隊長！",
						"chinese": "队长！",
						"french": "Capitaine !",
						"spanish": "¡Capitán!",
						"vietnamese": "Đại trưởng!",
						"thai": "ท่านหัวหน้า!",
						"hindi": "कैप्टन!"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "대장으로서 명령한다! 철수해!",
						"english": "As your captain, I order you! Retreat!",
						"japanese": "隊長として命令する！撤退せよ！",
						"chinese": "作为队长，我命令你！撤退！",
						"french": "En tant que capitaine, j'ordonne ! Retraite !",
						"spanish": "¡Como tu capitán, te ordeno! ¡Retirada!",
						"vietnamese": "Với tư cách đội trưởng, tôi ra lệnh! Rút lui!",
						"thai": "ในฐานะหัวหน้า ฉันสั่ง! ถอย!",
						"hindi": "कप्तान के तौर पर, मैं आदेश देता हूँ! पीछे हटो!"
					},
					"type": "speech",
					"speaker": "ivar"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Fenrir의 거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "Fenrir's colossal shadow devoured everything.",
						"japanese": "フェンリルの巨大な影がすべてを飲み込んだ。",
						"chinese": "芬里尔的巨大阴影吞噬了一切。",
						"french": "L'ombre colossale de Fenrir dévora tout.",
						"spanish": "La colosal sombra de Fenrir lo devoró todo.",
						"vietnamese": "Bóng đen khổng lồ của Fenrir nuốt chửng mọi thứ.",
						"thai": "เงาอันมหึมาของเฟนรีร์กลืนกินทุกสิ่ง",
						"hindi": "फेनrir की विशाल छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나의 굶주림은… 영원하다.",
						"english": "My hunger… is eternal.",
						"japanese": "我が飢えは… 永遠なり。",
						"chinese": "我的饥饿… 是永恒的。",
						"french": "Ma faim… est éternelle.",
						"spanish": "Mi hambre… es eterna.",
						"vietnamese": "Cơn đói của ta… là vĩnh cửu.",
						"thai": "ความหิวโหยของข้า… เป็นนิรันดร์",
						"hindi": "मेरी भूख… शाश्वत है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "큭… 여기서… 끝낼 수 없어…!",
						"english": "Ugh… I can't… end it here…!",
						"japanese": "くっ… ここで… 終わらせるわけにはいかない…！",
						"chinese": "呃… 我不能… 在这里结束…！",
						"french": "Ugh… Je ne peux pas… en finir ici… !",
						"spanish": "Ugh… ¡No puedo… terminar aquí…!",
						"vietnamese": "Khụ… Ta không thể… kết thúc ở đây…!",
						"thai": "อึก… ข้า… จบลงตรงนี้ไม่ได้…!",
						"hindi": "उफ़… मैं यहाँ… खत्म नहीं कर सकता…!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "대원들! 아직 포기하지 마라!",
						"english": "Comrades! Don't give up yet!",
						"japanese": "隊員たち！まだ諦めるな！",
						"chinese": "队员们！不要放弃！",
						"french": "Camarades ! N'abandonnez pas encore !",
						"spanish": "¡Compañeros! ¡Aún no se rindan!",
						"vietnamese": "Đồng đội! Đừng bỏ cuộc!",
						"thai": "สหาย! อย่ายอมแพ้!",
						"hindi": "साथियों! अभी हार मत मानो!"
					},
					"type": "speech",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 생명력. 달콤한 먹이일 뿐.",
						"english": "Your life force. Nothing but sweet prey.",
						"japanese": "お前たちの生命力。甘美な餌にすぎない。",
						"chinese": "你们的生命力。不过是甜美的饵食。",
						"french": "Votre force vitale. Rien qu'une douce proie.",
						"spanish": "Vuestra fuerza vital. Nada más que dulce presa.",
						"vietnamese": "Sinh lực của các ngươi. Chỉ là con mồi ngọt ngào.",
						"thai": "พลังชีวิตของพวกเจ้า. ก็แค่เหยื่ออันหอมหวาน.",
						"hindi": "तुम्हारी जीवन शक्ति। बस एक मीठा चारा।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "다시… 일어선다! 우리는… 이대로 끝나지 않아!",
						"english": "Again… we rise! We won't end like this!",
						"japanese": "再び… 立ち上がる！我々は… このままでは終わらない！",
						"chinese": "再次… 站起来！我们… 不会就这样结束！",
						"french": "De nouveau… nous nous relevons ! Nous ne… finirons pas comme ça !",
						"spanish": "¡De nuevo… nos levantaremos! ¡No… terminaremos así!",
						"vietnamese": "Lại một lần nữa… chúng ta sẽ đứng lên! Chúng ta… sẽ không kết thúc như thế này!",
						"thai": "อีกครั้ง… เราจะลุกขึ้น! เราจะไม่… จบลงแบบนี้!",
						"hindi": "फिर से… उठते हैं! हम… ऐसे खत्म नहीं होंगे!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 모든 것을 집어삼킬 듯한 공허한 포식자가 모습을 드러냈다.",
						"english": "At last, the void predator, poised to devour all, revealed itself.",
						"japanese": "ついに、すべてを呑み込もうとする虚無の捕食者が姿を現した。",
						"chinese": "终于，那仿佛要吞噬一切的虚空捕食者现身了。",
						"french": "Enfin, le prédateur du vide, prêt à tout dévorer, a révélé sa forme.",
						"spanish": "Finalmente, el depredador del vacío, listo para devorarlo todo, se reveló.",
						"vietnamese": "Cuối cùng, kẻ săn mồi hư không, sẵn sàng nuốt chửng mọi thứ, đã lộ diện.",
						"thai": "ในที่สุด ผู้ล่าแห่งความว่างเปล่า ผู้ซึ่งพร้อมจะกลืนกินทุกสิ่ง ได้ปรากฏกายขึ้นแล้ว",
						"hindi": "अंततः, सभी को निगलने वाला, शून्य का शिकारी प्रकट हुआ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…찾아왔나, 굶주림을 모르는 어리석은 자들.",
						"english": "...You've come, foolish ones who know no hunger.",
						"japanese": "…来たか、飢えを知らぬ愚か者たちよ。",
						"chinese": "……你们来了，不知饥饿的愚蠢之徒。",
						"french": "...Vous êtes venus, idiots qui ne connaissez pas la faim.",
						"spanish": "...Habéis venido, necios que no conocéis el hambre.",
						"vietnamese": "...Ngươi đã đến, những kẻ ngu ngốc không biết đói là gì.",
						"thai": "...มาแล้วสินะ เจ้าพวกโง่เขลาที่ไม่รู้จักความหิวโหย",
						"hindi": "...आ गए तुम, मूर्ख, जो भूख नहीं जानते।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "Fenrir! 네놈의 존재를 여기서 끝내주마!",
						"english": "Fenrir! I'll end your existence here!",
						"japanese": "フェンリル！貴様の存在をここで終わらせてやる！",
						"chinese": "芬里尔！我将在此终结你的存在！",
						"french": "Fenrir ! Je mettrai fin à ton existence ici !",
						"spanish": "¡Fenrir! ¡Aquí acabaré con tu existencia!",
						"vietnamese": "Fenrir! Ta sẽ kết thúc sự tồn tại của ngươi tại đây!",
						"thai": "เฟนรีร์! ฉันจะจบสิ้นการมีอยู่ของแกที่นี่!",
						"hindi": "फेनrir! मैं तुम्हारी सत्ता यहीं खत्म कर दूँगा!"
					},
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "놈의 눈… 텅 비어있다. 아무것도… 담겨있지 않아.",
						"english": "His eyes... are empty. Nothing... held within.",
						"japanese": "奴の目…虚ろだ。何も…宿っていない。",
						"chinese": "它的眼睛……空洞无物。什么也……没有。",
						"french": "Ses yeux... sont vides. Rien... ne s'y trouve.",
						"spanish": "Sus ojos... están vacíos. Nada... contenido.",
						"vietnamese": "Mắt của nó... trống rỗng. Không có gì... bên trong.",
						"thai": "ตาของมัน...ว่างเปล่า ไม่มีอะไร...อยู่ข้างในเลย",
						"hindi": "उसकी आँखें... खाली हैं। कुछ भी... नहीं समाया।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "공허. 그것이… 나의 이름이자 운명.",
						"english": "The Void. That is... my name and my destiny.",
						"japanese": "虚無。それが…私の名であり運命。",
						"chinese": "虚空。那便是……我的名字，也是我的命运。",
						"french": "Le Vide. C'est... mon nom et mon destin.",
						"spanish": "El Vacío. Ese es... mi nombre y mi destino.",
						"vietnamese": "Hư Không. Đó là... tên và vận mệnh của ta.",
						"thai": "ความว่างเปล่า. นั่นคือ...ชื่อและโชคชะตาของข้า",
						"hindi": "शून्य। वही... मेरा नाम और मेरा भाग्य।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마라!",
						"english": "Nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "胡说！",
						"french": "Absurdités !",
						"spanish": "¡Tonterías!",
						"vietnamese": "Vô lý!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास मत करो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "놈은… 우리가 알던 것 이상이다. 조심해라!",
						"english": "He's... more than we knew. Be careful!",
						"japanese": "奴は…我々が知っていた以上だ。気をつけろ！",
						"chinese": "它……比我们想象的更甚。小心！",
						"french": "Il est... plus que ce que nous savions. Sois prudent !",
						"spanish": "Es... más de lo que sabíamos. ¡Cuidado!",
						"vietnamese": "Nó... hơn những gì chúng ta biết. Cẩn thận!",
						"thai": "มัน...เกินกว่าที่เรารู้ ระวังตัว!",
						"hindi": "वह... जितना हम जानते थे, उससे कहीं ज़्यादा है। सावधान रहो!"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너희의 오만. 나의 영원한 굶주림을 채워줄 뿐.",
						"english": "Your arrogance. It will only feed my eternal hunger.",
						"japanese": "お前たちの傲慢。それは私の永遠の飢えを満たすだけだ。",
						"chinese": "你们的傲慢。只会满足我永恒的饥饿。",
						"french": "Votre arrogance. Elle ne fera que nourrir ma faim éternelle.",
						"spanish": "Vuestra arrogancia. Solo alimentará mi hambre eterna.",
						"vietnamese": "Sự ngạo mạn của các ngươi. Nó sẽ chỉ lấp đầy cơn đói vĩnh cửu của ta.",
						"thai": "ความโอหังของพวกเจ้า. มันแค่จะเติมเต็มความหิวโหยนิรันดร์ของข้า",
						"hindi": "तुम्हारा अहंकार। वह केवल मेरी शाश्वत भूख को शांत करेगा।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "필사적인 일격이 Fenrir의 거대한 몸을 뒤흔들었다.",
						"english": "A desperate blow shook Fenrir's colossal body.",
						"japanese": "必死の一撃がフェンリルの巨体を揺るがした。",
						"chinese": "绝望的一击撼动了芬里尔巨大的身躯。",
						"french": "Un coup désespéré secoua le corps colossal de Fenrir.",
						"spanish": "Un golpe desesperado sacudió el cuerpo colosal de Fenrir.",
						"vietnamese": "Một đòn tuyệt vọng đã làm rung chuyển cơ thể khổng lồ của Fenrir.",
						"thai": "การโจมตีที่สิ้นหวังสะเทือนร่างมหึมาของเฟนรีร์",
						"hindi": "एक हताश वार ने फेनrir के विशाल शरीर को हिला दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "해냈다! 우리가… Fenrir를 쓰러뜨렸어!",
						"english": "We did it! We… defeated Fenrir!",
						"japanese": "やったぞ！我々が…フェンリルを倒した！",
						"chinese": "我们做到了！我们…击败了芬里尔！",
						"french": "On l'a fait ! Nous… avons vaincu Fenrir !",
						"spanish": "¡Lo logramos! ¡Nosotros… derrotamos a Fenrir!",
						"vietnamese": "Chúng ta đã làm được! Chúng ta… đã đánh bại Fenrir!",
						"thai": "เราทำได้แล้ว! พวกเรา… โค่นเฟนรีร์ลงได้!",
						"hindi": "हमने कर दिखाया! हमने… फेनrir को हरा दिया!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "크르르… 이… 굶주림은… 끝나지 않아…!",
						"english": "Grrr… This… hunger… never ends…!",
						"japanese": "グルルル… この… 飢えは… 終わらない…！",
						"chinese": "嘶吼… 这… 饥饿… 永无止境…！",
						"french": "Grrr… Cette… faim… ne finira jamais… !",
						"spanish": "Grrr… Esta… hambre… no termina…!",
						"vietnamese": "Grừ… Cơn… đói này… không bao giờ kết thúc…!",
						"thai": "ครืน… ความ… หิวโหยนี้… ไม่มีวันสิ้นสุด…!",
						"hindi": "ग्र्र्र… यह… भूख… कभी खत्म नहीं होती…!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "늑대의 몸을 이루던 뼈들이 기이하게 삐걱거리고, 주변의 눈보라가 더욱 격렬하게 휘몰아쳤다.",
						"english": "The wolf's bones creaked eerily, and the surrounding blizzard intensified.",
						"japanese": "狼の体を形作っていた骨が奇妙に軋み、周囲の吹雪はさらに激しく吹き荒れた。",
						"chinese": "狼的骨骼发出奇异的嘎吱声，周围的暴风雪愈发猛烈。",
						"french": "Les os du loup grinçaient étrangement, et le blizzard environnant s'intensifia.",
						"spanish": "Los huesos del lobo crujieron de forma extraña, y la ventisca circundante se intensificó.",
						"vietnamese": "Xương của con sói kêu ken két một cách kỳ lạ, và bão tuyết xung quanh càng dữ dội hơn.",
						"thai": "กระดูกที่ประกอบเป็นร่างของหมาป่าส่งเสียงลั่นแปลกๆ และพายุหิมะรอบข้างก็ทวีความรุนแรงขึ้น",
						"hindi": "भेड़िये की हड्डियाँ अजीब तरह से चरमरा उठीं, और आसपास का बर्फीला तूफ़ान और भी तेज़ हो गया।"
					}
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
					"emotion": "sad",
					"content": {
						"korean": "이건… 승리가 아니야. 놈은… 쓰러지지 않았다.",
						"english": "This isn't… a victory. It… hasn't fallen.",
						"japanese": "これは… 勝利じゃない。奴は… 倒れていない。",
						"chinese": "这不是… 胜利。它… 没有倒下。",
						"french": "Ce n'est pas… une victoire. Il… n'est pas tombé.",
						"spanish": "Esto no es… una victoria. Él… no ha caído.",
						"vietnamese": "Đây không phải… là chiến thắng. Nó… chưa gục ngã.",
						"thai": "นี่ไม่ใช่… ชัยชนะ. มัน… ยังไม่ล้มลง.",
						"hindi": "यह… जीत नहीं है। वह… गिरा नहीं है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "…너희도… 이 공허의 끝을… 보게 될 것이다…",
						"english": "…You too… shall see… the end of this void…",
						"japanese": "…お前たちも… この虚無の果てを… 見ることになるだろう…",
						"chinese": "…你们也… 将看到… 这虚空的尽头…",
						"french": "…Vous aussi… verrez… la fin de ce vide…",
						"spanish": "…Vosotros también… veréis… el fin de este vacío…",
						"vietnamese": "…Các ngươi cũng… sẽ thấy… tận cùng của sự hư vô này…",
						"thai": "…พวกเจ้าเองก็… จะได้เห็น… จุดจบของความว่างเปล่านี้…",
						"hindi": "…तुम भी… इस शून्य का अंत… देखोगे…"
					}
				},
				{
					"content": {
						"korean": "대체… 저 늑대의 정체는… 뭐지?",
						"english": "Just what… is that wolf's true identity…?",
						"japanese": "一体… あの狼の正体は… 何なんだ？",
						"chinese": "到底… 那只狼的真面目是… 什么？",
						"french": "Mais… quelle est la véritable identité de ce loup… ?",
						"spanish": "¿Qué… es la verdadera identidad de ese lobo…?",
						"vietnamese": "Rốt cuộc… thân phận thực sự của con sói đó là… gì?",
						"thai": "ตกลง… ตัวตนที่แท้จริงของหมาป่าตัวนั้น… คืออะไรกันแน่?",
						"hindi": "आखिर… उस भेड़िये की असली पहचान… क्या है?"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "승리의 환호는 없었다. 대신, 탐험대를 덮친 것은 설명할 수 없는 공포의 시작이었다.",
						"english": "There was no cheer of victory. Instead, what engulfed the expedition was the beginning of an inexplicable terror.",
						"japanese": "勝利の歓声はなかった。代わりに、探検隊を襲ったのは説明不能な恐怖の始まりだった。",
						"chinese": "没有胜利的欢呼。取而代之的是，笼罩探险队的，是无法言喻的恐惧的开始。",
						"french": "Il n'y eut aucun cri de victoire. Au lieu de cela, ce qui submergea l'expédition fut le début d'une terreur inexplicable.",
						"spanish": "No hubo vítores de victoria. En cambio, lo que envolvió a la expedición fue el comienzo de un terror inexplicable.",
						"vietnamese": "Không có tiếng reo hò chiến thắng. Thay vào đó, thứ bao trùm đội thám hiểm là sự khởi đầu của một nỗi kinh hoàng không thể giải thích.",
						"thai": "ไม่มีเสียงโห่ร้องแห่งชัยชนะ สิ่งที่ปกคลุมคณะสำรวจแทนคือจุดเริ่มต้นของความหวาดกลัวที่ไม่อาจอธิบายได้",
						"hindi": "जीत का कोई जयकारा नहीं था। इसके बजाय, अभियान दल को घेरने वाली चीज़ एक अवर्णनीय आतंक की शुरुआत थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설원 깊은 곳, 전설은 현실이 되었다.",
			"Fenrir, 북방의 굶주린 늑대.",
			"하지만 그것은 단순한 맹수가 아니었다.",
			"공허함이 그 몸을 이루고, 공포가 그 존재를 증명했다.",
			"탐험대의 오만은 산산이 부서지고, 진정한 절규가 시작되었다."
		],
		"english": [
			"Deep in the snowfield, legend became reality.",
			"Fenrir, the hungry wolf of the North.",
			"But it was no mere beast.",
			"Emptiness formed its body, terror proved its existence.",
			"The expedition's arrogance shattered, true screams began."
		],
		"japanese": [
			"雪原の奥深く、伝説は現実となった。",
			"フェンリル、北の飢えた狼。",
			"しかし、それは単なる獣ではなかった。",
			"虚無がその身を形成し、恐怖がその存在を証明した。",
			"探検隊の傲慢は打ち砕かれ、真の絶叫が始まった。"
		],
		"chinese": [
			"雪原深处，传说化为现实。",
			"芬里尔，北方饥饿的狼。",
			"但它并非一头普通的野兽。",
			"虚无构成了它的身体，恐惧证明了它的存在。",
			"探险队的傲慢被粉碎，真正的尖叫开始了。"
		],
		"french": [
			"Au plus profond du champ de neige, la légende est devenue réalité.",
			"Fenrir, le loup affamé du Nord.",
			"Mais ce n'était pas une simple bête.",
			"Le vide formait son corps, la terreur prouvait son existence.",
			"L'arrogance de l'expédition fut brisée, de vrais cris commencèrent."
		],
		"spanish": [
			"En lo profundo del campo de nieve, la leyenda se hizo realidad.",
			"Fenrir, el lobo hambriento del Norte.",
			"Pero no era una simple bestia.",
			"El vacío formó su cuerpo, el terror probó su existencia.",
			"La arrogancia de la expedición se hizo añicos, comenzaron los verdaderos gritos."
		],
		"vietnamese": [
			"Sâu trong cánh đồng tuyết, truyền thuyết đã trở thành hiện thực.",
			"Fenrir, con sói đói của phương Bắc.",
			"Nhưng nó không phải là một con thú đơn thuần.",
			"Sự trống rỗng tạo nên thân thể nó, nỗi kinh hoàng chứng minh sự tồn tại của nó.",
			"Sự kiêu ngạo của đoàn thám hiểm tan vỡ, những tiếng hét thực sự bắt đầu."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ ตำนานได้กลายเป็นความจริง",
			"เฟนริร์ หมาป่าผู้หิวโหยแห่งทิศเหนือ",
			"แต่มันไม่ใช่แค่สัตว์ร้ายธรรมดา",
			"ความว่างเปล่าก่อร่างเป็นกาย ความหวาดกลัวพิสูจน์การมีอยู่ของมัน",
			"ความหยิ่งยโสของคณะสำรวจแตกสลาย เสียงกรีดร้องที่แท้จริงเริ่มต้นขึ้น"
		],
		"hindi": [
			"बर्फीले मैदान की गहराई में, किंवदंती हकीकत बन गई।",
			"फेनरिर, उत्तर का भूखा भेड़िया।",
			"लेकिन यह कोई साधारण जानवर नहीं था।",
			"शून्यता ने उसके शरीर को बनाया, आतंक ने उसके अस्तित्व को साबित किया।",
			"अभियान का अहंकार चकनाचूर हो गया, सच्ची चीखें शुरू हो गईं।"
		]
	},
	"epilogue": {
		"korean": [
			"설원은 침묵했다. Fenrir의 울부짖음은 멎었지만.",
			"승리라고 하기엔, 너무나 공허한 여운이었다.",
			"늑대의 뼈에서 느껴지던 그 삐걱거림, 더욱 거세진 눈보라.",
			"이바르 대장은 알았다. 이것은 시작일 뿐이라는 것을.",
			"그리고, 굶주림은… 끝나지 않을 것이라는 것을."
		],
		"english": [
			"The snowfield was silent. Fenrir's howl had ceased, but...",
			"To call it a victory felt like an empty echo.",
			"That creaking from the wolf's bones, the ever-intensifying blizzard.",
			"Captain Ivar knew. This was only the beginning.",
			"And, the hunger... would never end."
		],
		"japanese": [
			"雪原は沈黙した。フェンリルの遠吠えは止んだが。",
			"勝利と呼ぶには、あまりにも空虚な余韻だった。",
			"狼の骨から聞こえるあの軋み、ますます激しくなる吹雪。",
			"イヴァール隊長は悟った。これは始まりに過ぎない。",
			"そして、飢えは…終わらないだろうと。"
		],
		"chinese": [
			"雪原一片寂静。芬里尔的嚎叫声停止了，但……",
			"称之为胜利，却只留下空虚的回响。",
			"狼骨传来的嘎吱声，以及愈发猛烈的暴风雪。",
			"伊瓦尔队长明白。这只是个开始。",
			"而且，饥饿……将永无止境。"
		],
		"french": [
			"Le champ de neige était silencieux. Le hurlement de Fenrir avait cessé, mais...",
			"Appeler cela une victoire laissait un écho si vide.",
			"Ce grincement des os du loup, le blizzard toujours plus intense.",
			"Le Capitaine Ivar le savait. Ce n'était que le début.",
			"Et, la faim… ne finirait jamais."
		],
		"spanish": [
			"El campo de nieve estaba en silencio. El aullido de Fenrir había cesado, pero...",
			"Llamarlo victoria se sintió como un eco vacío.",
			"Ese crujido de los huesos del lobo, la ventisca cada vez más intensa.",
			"El Capitán Ivar lo sabía. Esto era solo el principio.",
			"Y, el hambre... nunca terminaría."
		],
		"vietnamese": [
			"Cánh đồng tuyết im lặng. Tiếng hú của Fenrir đã ngừng, nhưng...",
			"Để gọi đó là một chiến thắng thì dư âm quá trống rỗng.",
			"Tiếng kêu cót két từ xương sói, bão tuyết ngày càng dữ dội.",
			"Đội trưởng Ivar biết. Đây chỉ là khởi đầu.",
			"Và, cơn đói... sẽ không bao giờ kết thúc."
		],
		"thai": [
			"ทุ่งหิมะเงียบงัน เสียงหอนของเฟนริร์ได้หยุดลงแล้ว แต่...",
			"การจะเรียกว่าชัยชนะ ดูเหมือนจะเป็นเพียงเสียงสะท้อนที่ว่างเปล่า",
			"เสียงเอี๊ยดอ๊าดจากกระดูกของหมาป่า พายุหิมะที่ทวีความรุนแรงขึ้นเรื่อยๆ",
			"กัปตันไอวาร์รู้ดี นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
			"และความหิวโหย... จะไม่มีวันสิ้นสุด"
		],
		"hindi": [
			"बर्फीला मैदान शांत था। फेनरिर की चीखें थम गई थीं, लेकिन...",
			"इसे जीत कहना एक खाली प्रतिध्वनि जैसा महसूस हुआ।",
			"भेड़िये की हड्डियों से वह चरमराहट, लगातार बढ़ता बर्फीला तूफान।",
			"कैप्टन इवर जानता था। यह तो बस शुरुआत थी।",
			"और, भूख... कभी खत्म नहीं होगी।"
		]
	}
} as const;
