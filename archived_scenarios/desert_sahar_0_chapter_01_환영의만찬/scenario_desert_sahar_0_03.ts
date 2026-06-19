export const scenario_desert_sahar_0_03 = {
	"scenario_id": "desert_sahar_0_03",
	"order": 3,
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
			"사하르가 펼친 연회는 끝없이 이어졌다.",
			"달콤한 환상 속에서, 한 대원은 현실을 잊어갔다.",
			"사막의 갈증조차, 그에게는 행복한 꿈이었다.",
			"그러나 꿈은, 언제나 잔인한 법."
		],
		"english": [
			"Sahar's banquet continued endlessly.",
			"Amidst the sweet illusion, one member forgot reality.",
			"Even the desert's thirst was a happy dream for him.",
			"But dreams are always cruel."
		],
		"japanese": [
			"サハルが催した宴は、果てしなく続いた。",
			"甘い幻想の中で、ある隊員は現実を忘れていった。",
			"砂漠の渇きすら、彼にとっては幸福な夢だった。",
			"しかし、夢はいつも残酷なものだ。"
		],
		"chinese": [
			"萨哈尔的宴会无休止地进行着。",
			"在甜蜜的幻象中，一名队员渐渐遗忘了现实。",
			"即使是沙漠的干渴，对他来说也是一个幸福的梦。",
			"然而，梦境，总是残酷的。"
		],
		"french": [
			"Le banquet de Sahar se prolongeait sans fin.",
			"Au milieu de la douce illusion, un membre oubliait la réalité.",
			"Même la soif du désert était pour lui un heureux rêve.",
			"Mais les rêves sont toujours cruels."
		],
		"spanish": [
			"El banquete de Sahar continuó sin cesar.",
			"En medio de la dulce ilusión, un miembro olvidaba la realidad.",
			"Incluso la sed del desierto era un sueño feliz para él.",
			"Pero los sueños son siempre crueles."
		],
		"vietnamese": [
			"Bữa tiệc của Sahar kéo dài bất tận.",
			"Trong ảo ảnh ngọt ngào, một thành viên dần quên đi thực tại.",
			"Ngay cả cơn khát sa mạc cũng là một giấc mơ hạnh phúc đối với anh.",
			"Nhưng giấc mơ, luôn tàn nhẫn."
		],
		"thai": [
			"งานเลี้ยงที่ซาฮาร์จัดขึ้นดำเนินไปอย่างไม่สิ้นสุด",
			"ท่ามกลางภาพลวงตาอันหอมหวาน สมาชิกคนหนึ่งค่อยๆ ลืมเลือนความเป็นจริงไป",
			"แม้แต่ความกระหายของทะเลทราย ก็ยังเป็นความฝันอันแสนสุขสำหรับเขา",
			"แต่ความฝันนั้นมักจะโหดร้ายเสมอ"
		],
		"hindi": [
			"सहार का भोज अनंत काल तक चलता रहा।",
			"मीठे भ्रम में, एक सदस्य वास्तविकता को भूल गया।",
			"रेगिस्तान की प्यास भी उसके लिए एक सुखद सपना थी।",
			"लेकिन सपने हमेशा क्रूर होते हैं।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "연회장의 풍경은 더욱 화려해졌다. 모두가 허상에 취해갔다.",
						"english": "The banquet hall grew even more splendid. Everyone succumbed to the illusion.",
						"japanese": "宴会場の風景はさらに華やかになった。皆が虚像に酔いしれていった。",
						"chinese": "宴会厅的景象变得更加华丽。所有人都沉醉于虚象之中。",
						"french": "Le paysage de la salle de banquet devenait plus somptueux. Tous étaient enivrés par l'illusion.",
						"spanish": "El paisaje del salón de banquetes se volvió aún más espléndido. Todos se embriagaban con la ilusión.",
						"vietnamese": "Quang cảnh phòng tiệc càng trở nên lộng lẫy hơn. Mọi người đều chìm đắm trong ảo ảnh.",
						"thai": "ทัศนียภาพของห้องจัดเลี้ยงยิ่งงดงามตระการตา ทุกคนต่างเมามายไปกับภาพลวงตา",
						"hindi": "भोज हॉल का दृश्य और भी शानदार हो गया। सभी भ्रम में डूब गए।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "dune",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "아름다워... 이 완벽한 음식, 이 풍요로움.",
						"english": "Beautiful... This perfect food, this abundance.",
						"japanese": "美しい… この完璧な料理、この豊かさ。",
						"chinese": "真美啊……这完美的食物，这富饶。",
						"french": "Magnifique... Cette nourriture parfaite, cette abondance.",
						"spanish": "Hermoso... Esta comida perfecta, esta abundancia.",
						"vietnamese": "Đẹp quá... Món ăn hoàn hảo này, sự phong phú này.",
						"thai": "สวยงาม... อาหารที่สมบูรณ์แบบนี้ ความอุดมสมบูรณ์นี้",
						"hindi": "सुंदर... यह उत्तम भोजन, यह प्रचुरता।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "듄, 또 먹는 거야? 아직도 배고파?",
						"english": "Dune, eating again? Still hungry?",
						"japanese": "デューン、また食べるの？まだお腹空いてるの？",
						"chinese": "迪恩，你又在吃了吗？还饿吗？",
						"french": "Dune, tu manges encore ? Toujours faim ?",
						"spanish": "Dune, ¿comiendo otra vez? ¿Todavía tienes hambre?",
						"vietnamese": "Dune, lại ăn nữa sao? Vẫn còn đói à?",
						"thai": "ดูน กินอีกแล้วเหรอ? ยังหิวอยู่อีกเหรอ?",
						"hindi": "ड्यून, फिर से खा रहे हो? अभी भी भूख लगी है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아니, 난 이미 배가 불러. 그저 이 아름다움을 즐길 뿐이야.",
						"english": "No, I'm already full. I'm just enjoying this beauty.",
						"japanese": "いや、もうお腹いっぱいだよ。ただこの美しさを楽しんでいるだけさ。",
						"chinese": "不，我已经饱了。我只是在享受这份美丽。",
						"french": "Non, je suis déjà rassasié. Je ne fais qu'apprécier cette beauté.",
						"spanish": "No, ya estoy lleno. Solo estoy disfrutando de esta belleza.",
						"vietnamese": "Không, tôi đã no rồi. Tôi chỉ đang tận hưởng vẻ đẹp này thôi.",
						"thai": "ไม่ ฉันอิ่มแล้วล่ะ แค่กำลังเพลิดเพลินกับความงามนี้เท่านั้นเอง",
						"hindi": "नहीं, मैं पहले से ही पेट भर चुका हूँ। मैं बस इस सुंदरता का आनंद ले रहा हूँ।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"content": {
						"korean": "표정이… 너무 행복해 보이는데.",
						"english": "Your expression... looks so happy.",
						"japanese": "表情が… とても幸せそうだね。",
						"chinese": "你的表情……看起来好幸福。",
						"french": "Ton expression... a l'air si heureuse.",
						"spanish": "Tu expresión... se ve tan feliz.",
						"vietnamese": "Biểu cảm của cậu... trông hạnh phúc quá.",
						"thai": "สีหน้าของเธอ... ดูมีความสุขมากเลยนะ",
						"hindi": "तुम्हारा चेहरा... बहुत खुश लग रहा है।"
					},
					"emotion": "base",
					"type": "speech",
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
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "이런 축복받은 곳에서… 왜 떠나려 해?",
						"english": "In such a blessed place... why do you want to leave?",
						"japanese": "こんな恵まれた場所から… なぜ去ろうとするんだ？",
						"chinese": "在这样一个受祝福的地方……你为什么要离开？",
						"french": "Dans un endroit aussi béni... pourquoi veux-tu partir ?",
						"spanish": "En un lugar tan bendito... ¿por qué quieres irte?",
						"vietnamese": "Ở một nơi phúc lành như thế này... tại sao lại muốn rời đi?",
						"thai": "ในสถานที่อันศักดิ์สิทธิ์เช่นนี้... ทำไมถึงอยากจะจากไป?",
						"hindi": "ऐसी धन्य जगह से... तुम क्यों जाना चाहते हो?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "듄, 정신 차려. 우린 사막 한가운데라고.",
						"english": "Dune, snap out of it. We're in the middle of a desert.",
						"japanese": "デューン、しっかりして。ここは砂漠の真ん中よ。",
						"chinese": "듄，清醒一点。我们可是在沙漠中央。",
						"french": "Dune, ressaisis-toi. Nous sommes au milieu du désert.",
						"spanish": "Dune, reacciona. Estamos en medio del desierto.",
						"vietnamese": "Dune, tỉnh lại đi. Chúng ta đang ở giữa sa mạc đấy.",
						"thai": "ดยูน ตั้งสติหน่อยสิ พวกเราอยู่กลางทะเลทรายนะ",
						"hindi": "ड्यून, होश में आओ। हम रेगिस्तान के बीच में हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "사막? 여기가 낙원인데. 목도 마르지 않아.",
						"english": "Desert? This is paradise. I'm not even thirsty.",
						"japanese": "砂漠？ここは楽園なのに。喉も乾いてない。",
						"chinese": "沙漠？这里是乐园啊。我一点都不渴。",
						"french": "Désert ? C'est le paradis ici. Je n'ai même pas soif.",
						"spanish": "¿Desierto? Esto es el paraíso. Ni siquiera tengo sed.",
						"vietnamese": "Sa mạc á? Đây là thiên đường mà. Tôi còn không khát nước nữa là.",
						"thai": "ทะเลทรายเหรอ? ที่นี่มันสวรรค์ชัดๆ ฉันไม่กระหายน้ำด้วยซ้ำ",
						"hindi": "रेगिस्तान? यह तो स्वर्ग है। मुझे प्यास भी नहीं लगी।"
					}
				},
				{
					"content": {
						"korean": "…왠지 듄의 피부가 거칠어진 것 같아.",
						"english": "...Dune's skin looks rougher, somehow.",
						"japanese": "…なんだか、デューンの肌が荒れているみたい。",
						"chinese": "……总觉得듄的皮肤变得粗糙了。",
						"french": "...Dune a la peau plus rugueuse, on dirait.",
						"spanish": "...La piel de Dune parece más áspera, no sé por qué.",
						"vietnamese": "...Không hiểu sao da của Dune có vẻ khô ráp đi.",
						"thai": "รู้สึกเหมือนผิวของดยูนหยาบกร้านขึ้นนะ",
						"hindi": "पता नहीं, ड्यून की त्वचा खुरदुरी लग रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "무슨 소리야? 난 완벽해!",
						"english": "What are you talking about? I'm perfect!",
						"japanese": "何言ってるの？私は完璧よ！",
						"chinese": "你在说什么？我完美无缺！",
						"french": "Qu'est-ce que tu racontes ? Je suis parfaite !",
						"spanish": "¿De qué hablas? ¡Soy perfecto!",
						"vietnamese": "Cậu đang nói gì vậy? Tớ hoàn hảo mà!",
						"thai": "พูดอะไรน่ะ? ฉันสมบูรณ์แบบจะตาย!",
						"hindi": "क्या कह रहे हो? मैं तो परफेक्ट हूँ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "dune",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "돌아가? 이 천국을 버리고? 절대 안 돼!",
						"english": "Go back? Abandon this paradise? Never!",
						"japanese": "帰る？この天国を捨てて？絶対に嫌！",
						"chinese": "回去？放弃这天堂？绝不可能！",
						"french": "Retourner ? Abandonner ce paradis ? Jamais !",
						"spanish": "¿Volver? ¿Abandonar este paraíso? ¡Jamás!",
						"vietnamese": "Quay về ư? Bỏ rơi thiên đường này? Không đời nào!",
						"thai": "กลับไปเหรอ? ทิ้งสวรรค์นี่ไปเนี่ยนะ? ไม่มีทาง!",
						"hindi": "वापस जाऊँ? इस स्वर्ग को छोड़कर? कभी नहीं!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "듄! 이건 진짜가 아니야! 저 음식 봐!",
						"english": "Dune! This isn't real! Look at that food!",
						"japanese": "デューン！これは本物じゃない！あの食べ物を見て！",
						"chinese": "듄！这不是真的！看那食物！",
						"french": "Dune ! Ce n'est pas réel ! Regarde cette nourriture !",
						"spanish": "¡Dune! ¡Esto no es real! ¡Mira esa comida!",
						"vietnamese": "Dune! Đây không phải thật đâu! Nhìn thức ăn kia kìa!",
						"thai": "ดยูน! นี่มันไม่ใช่ของจริง! ดูอาหารนั่นสิ!",
						"hindi": "ड्यून! यह असली नहीं है! उस खाने को देखो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "음식은 여전히 환상처럼 빛났지만, 이젠 모두가 그 허상을 알았다.",
						"english": "The food still shimmered like a mirage, but now everyone knew it was an illusion.",
						"japanese": "食事は依然として幻のように輝いていたが、今や誰もがその虚像を知っていた。",
						"chinese": "食物依然如幻象般闪耀，但现在所有人都明白了那只是虚影。",
						"french": "La nourriture scintillait toujours comme une illusion, mais maintenant tout le monde connaissait sa vraie nature.",
						"spanish": "La comida seguía brillando como una ilusión, pero ahora todos conocían su verdadera naturaleza.",
						"vietnamese": "Món ăn vẫn lấp lánh như ảo ảnh, nhưng giờ đây ai cũng biết đó chỉ là hư ảnh.",
						"thai": "อาหารยังคงเปล่งประกายราวกับภาพลวงตา แต่ตอนนี้ทุกคนรู้แล้วว่ามันเป็นเพียงภาพมายา",
						"hindi": "भोजन अभी भी भ्रम की तरह चमक रहा था, लेकिन अब हर कोई उसकी सच्चाई जान चुका था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환상이라니… 너희가 잘못된 거야.",
						"english": "Illusion...? You're the ones who are mistaken.",
						"japanese": "幻想だと…？あなたたちがおかしいのよ。",
						"chinese": "幻象……？是你们搞错了。",
						"french": "Illusion...? C'est vous qui vous trompez.",
						"spanish": "¿Ilusión...? Vosotros sois los que estáis equivocados.",
						"vietnamese": "Ảo ảnh á...? Các cậu mới là người sai lầm.",
						"thai": "ภาพลวงตา...? พวกเธอนั่นแหละที่คิดผิด",
						"hindi": "भ्रम...? तुम लोग गलत हो।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "점점… 듄이 메말라가고 있어.",
						"english": "Dune is... slowly withering away.",
						"japanese": "だんだん…デューンがやつれていってる。",
						"chinese": "듄……渐渐枯萎了。",
						"french": "Dune... est en train de se dessécher.",
						"spanish": "Dune... se está marchitando lentamente.",
						"vietnamese": "Dần dần... Dune đang héo hon đi.",
						"thai": "ดยูน...กำลังเหี่ยวเฉาลงเรื่อยๆ",
						"hindi": "ड्यून... धीरे-धीरे सूखता जा रहा है।"
					},
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
						3,
						2
					],
					"action": "enter",
					"speaker": "dune",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "떠나지 마… 우리 계속 여기서 행복하게 지내자.",
						"english": "Don't leave... Let's stay here and be happy forever.",
						"japanese": "行かないで…ずっとここで幸せに暮らそうよ。",
						"chinese": "别走……我们一直在这里幸福地生活吧。",
						"french": "Ne pars pas... Restons ici et soyons heureux pour toujours.",
						"spanish": "No te vayas... Sigamos siendo felices aquí.",
						"vietnamese": "Đừng đi mà... Chúng ta cứ ở đây và hạnh phúc mãi thôi.",
						"thai": "อย่าไปเลยนะ...เรามามีความสุขอยู่ที่นี่ตลอดไปเถอะ",
						"hindi": "मत जाओ... हम यहीं खुशी-खुशी रहते हैं।"
					},
					"speaker": "dune",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "듄, 제발! 넌 죽어가고 있어!",
						"english": "Dune, please! You're dying!",
						"japanese": "デュン、お願い！あなたは死にかけている！",
						"chinese": "듄，求你了！你快死了！",
						"french": "Dune, je t'en prie ! Tu es en train de mourir !",
						"spanish": "¡Dune, por favor! ¡Te estás muriendo!",
						"vietnamese": "Dune, làm ơn! Anh đang chết dần rồi!",
						"thai": "ดูน ได้โปรด! คุณกำลังจะตายแล้ว!",
						"hindi": "डून, कृपया! तुम मर रहे हो!"
					}
				},
				{
					"speaker": "dune",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "난 살고 있어! 완벽하게!",
						"english": "I'm alive! Perfectly!",
						"japanese": "生きている！完璧に！",
						"chinese": "我活着！好好的！",
						"french": "Je suis en vie ! Parfaitement !",
						"spanish": "¡Estoy vivo! ¡Perfectamente!",
						"vietnamese": "Tôi đang sống! Hoàn hảo!",
						"thai": "ฉันยังมีชีวิตอยู่! อย่างสมบูรณ์แบบ!",
						"hindi": "मैं ज़िंदा हूँ! पूरी तरह से!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "듄의 몸은 환상과 함께 메말라가고 있었다. 되돌릴 수 없는 지경이었다.",
						"english": "Dune's body was withering away with the illusion. It was irreversible.",
						"japanese": "デュンの体は幻想と共に枯れ果てていた。もはや手遅れだった。",
						"chinese": "듄的身体随着幻象枯萎，已是无法挽回的地步。",
						"french": "Le corps de Dune se flétrissait avec l'illusion. C'était irréversible.",
						"spanish": "El cuerpo de Dune se estaba marchitando con la ilusión. Era irreversible.",
						"vietnamese": "Cơ thể của Dune héo mòn cùng với ảo ảnh. Tình trạng đã không thể cứu vãn.",
						"thai": "ร่างของดูนเหี่ยวเฉาไปพร้อมกับภาพลวงตา มันเป็นสภาพที่ไม่อาจย้อนคืนได้",
						"hindi": "डून का शरीर भ्रम के साथ सूख रहा था। यह अपरिवर्तनीय था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가 늦은 건가…",
						"english": "Are we too late…?",
						"japanese": "我々は遅すぎたのか…",
						"chinese": "我们是不是来晚了…",
						"french": "Sommes-nous arrivés trop tard… ?",
						"spanish": "¿Llegamos tarde…?",
						"vietnamese": "Chúng ta đã quá muộn rồi sao…?",
						"thai": "เรามาสายไปหรือเปล่า…?",
						"hindi": "क्या हम बहुत देर कर चुके हैं…?"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "연회장의 끝, 거대한 그림자가 나타났다.",
						"english": "At the end of the banquet hall, a colossal shadow appeared.",
						"japanese": "宴会場の奥、巨大な影が現れた。",
						"chinese": "宴会厅尽头，一个巨大的影子出现了。",
						"french": "Au bout de la salle de banquet, une ombre colossale apparut.",
						"spanish": "Al final del salón de banquetes, una sombra colosal apareció.",
						"vietnamese": "Cuối sảnh tiệc, một cái bóng khổng lồ xuất hiện.",
						"thai": "ที่ปลายสุดของห้องจัดเลี้ยง เงาขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "भोज कक्ष के अंत में, एक विशाल छाया प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하하… 또 다른 꿈에 취한 자들이 오는군.",
						"english": "Haha… More dream-intoxicated fools are coming.",
						"japanese": "ハハ…また夢に酔いしれた者たちが来るのか。",
						"chinese": "哈哈… 又有被梦迷惑的家伙来了。",
						"french": "Haha… Encore d'autres ivrognes du rêve arrivent.",
						"spanish": "Jaja… Vienen más tontos ebrios de sueños.",
						"vietnamese": "Haha… Lại có thêm những kẻ say mộng đến rồi.",
						"thai": "ฮ่าฮ่า… ผู้มัวเมาในความฝันคนอื่นกำลังมาอีกแล้วสินะ",
						"hindi": "हाहा… और सपने में डूबे मूर्ख आ रहे हैं।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 환상을 꾸민 거냐!",
						"english": "Did you conjure all these illusions?!",
						"japanese": "お前がこの全ての幻想を仕組んだのか！",
						"chinese": "这些幻象都是你搞的鬼吗！",
						"french": "C'est toi qui as créé toutes ces illusions ?!",
						"spanish": "¡¿Fuiste tú quien orquestó todas estas ilusiones?!",
						"vietnamese": "Ngươi đã tạo ra tất cả những ảo ảnh này sao?!",
						"thai": "แกเป็นคนสร้างภาพลวงตาทั้งหมดนี้เหรอ!",
						"hindi": "क्या तुमने ये सभी भ्रम रचे हैं?!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "꿈은 현실보다 달콤하지. 너희도 곧 알게 될 거다.",
						"english": "Dreams are sweeter than reality. You'll soon find out.",
						"japanese": "夢は現実より甘い。お前たちもすぐにわかるだろう。",
						"chinese": "梦境比现实更甜美。你们很快就会明白的。",
						"french": "Les rêves sont plus doux que la réalité. Vous le découvrirez bientôt.",
						"spanish": "Los sueños son más dulces que la realidad. Pronto lo descubriréis.",
						"vietnamese": "Giấc mơ ngọt ngào hơn hiện thực. Các ngươi rồi sẽ sớm biết thôi.",
						"thai": "ความฝันนั้นหอมหวานกว่าความจริง พวกเจ้าจะได้รู้ในไม่ช้า",
						"hindi": "सपने हकीकत से ज़्यादा मीठे होते हैं। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 환상에 속지 않아!",
						"english": "We won't be fooled by illusions any longer!",
						"japanese": "もう幻想には騙されない！",
						"chinese": "我们再也不会被幻象蒙骗了！",
						"french": "Nous ne nous laisserons plus berner par les illusions !",
						"spanish": "¡Ya no nos engañarán las ilusiones!",
						"vietnamese": "Chúng ta sẽ không bị ảo ảnh lừa dối nữa!",
						"thai": "เราจะไม่หลงกลกับภาพลวงตาอีกแล้ว!",
						"hindi": "हम अब और भ्रम में नहीं फंसेंगे!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 내가 없어도 꿈은 계속될 거다. 진짜 '사하르'는…",
						"english": "Heh heh… Even without me, the dream will continue. The real 'Sahar' is…",
						"japanese": "クク…私がなくとも夢は続くさ。真の「サハル」は…",
						"chinese": "呵呵…即使没有我，梦也会继续。真正的“萨哈尔”是…",
						"french": "Hé hé… Même sans moi, le rêve continuera. Le vrai 'Sahar' est…",
						"spanish": "Je je… Incluso sin mí, el sueño continuará. El verdadero 'Sahar' es…",
						"vietnamese": "Khà khà… Dù không có ta, giấc mơ vẫn sẽ tiếp tục. 'Sahar' thật sự là…",
						"thai": "คิกคิก… แม้ไม่มีข้า ความฝันก็จะยังคงดำเนินต่อไป 'ซาฮาร์' ที่แท้จริงคือ…",
						"hindi": "हहह… मेरे बिना भी, सपना जारी रहेगा। असली 'सहार' है…"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "뭐라고? 진짜 사하르가 누구야!",
						"english": "What? Who's the real Sahar?!",
						"japanese": "何だと？本当のサハルは誰だ！",
						"chinese": "什么？真正的萨哈尔是谁！",
						"french": "Quoi ? Qui est le vrai Sahar ?!",
						"spanish": "¡¿Qué?! ¿Quién es el verdadero Sahar?",
						"vietnamese": "Cái gì? Ai mới là Sahar thật sự!",
						"thai": "อะไรนะ? ใครคือซาฮาร์ตัวจริง!",
						"hindi": "क्या? असली सहार कौन है!"
					}
				},
				{
					"content": {
						"korean": "환상의 덫을 간신히 벗어났다. 그러나 더 깊은 그림자가 드리워지고 있었다.",
						"english": "Barely escaped the illusion's trap. Yet deeper shadows loomed.",
						"japanese": "幻の罠から辛くも脱出した。しかし、さらに深い影が迫っていた。",
						"chinese": "勉强摆脱了幻象的陷阱。然而，更深的阴影正在逼近。",
						"french": "À peine échappé au piège de l'illusion. Mais des ombres plus profondes se profilaient.",
						"spanish": "Apenas escapamos de la trampa de la ilusión. Pero sombras más profundas se cernían.",
						"vietnamese": "Vừa thoát khỏi cạm bẫy ảo ảnh. Nhưng bóng tối sâu hơn đang bao trùm.",
						"thai": "แทบจะหนีไม่พ้นกับดักแห่งภาพลวงตา แต่เงามืดที่ลึกกว่ากำลังคืบคลานเข้ามา",
						"hindi": "भ्रम के जाल से बमुश्किल बचे। मगर गहरी परछाइयां मंडरा रही थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "듄은 간신히 의식을 되찾았지만, 그의 눈은 여전히 허공을 응시했다.",
						"english": "Dune barely regained consciousness, but his eyes still stared blankly into space.",
						"japanese": "デューンはかろうじて意識を取り戻したが、彼の目は依然として虚空を見つめていた。",
						"chinese": "沙丘勉强恢复了意识，但他的眼睛仍然凝视着虚空。",
						"french": "Dune retrouva à peine conscience, mais ses yeux fixaient toujours le vide.",
						"spanish": "Dune apenas recuperó la conciencia, pero sus ojos seguían fijos en la nada.",
						"vietnamese": "Dune khó khăn lắm mới tỉnh lại, nhưng ánh mắt anh vẫn vô định nhìn vào hư không.",
						"thai": "ดูนฟื้นคืนสติได้แทบไม่ทัน แต่ดวงตาของเขายังคงจ้องมองความว่างเปล่า",
						"hindi": "डून ने बमुश्किल होश संभाला, पर उसकी आँखें अभी भी शून्य में घूर रही थीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 환상이 모든 것을 집어삼켰다.",
						"english": "A colossal illusion devoured all.",
						"japanese": "巨大な幻影がすべてを飲み込んだ。",
						"chinese": "巨大的幻象吞噬了一切。",
						"french": "Une illusion colossale a tout englouti.",
						"spanish": "Una ilusión colosal lo devoró todo.",
						"vietnamese": "Ảo ảnh khổng lồ nuốt chửng tất cả.",
						"thai": "ภาพลวงตาขนาดมหึมากินทุกสิ่ง",
						"hindi": "एक विशाल भ्रम ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 영원히 꿈속을 헤매어라.",
						"english": "Foolish ones. Wander in dreams forever.",
						"japanese": "愚かな者たちめ。永遠に夢の中を彷徨え。",
						"chinese": "愚蠢的家伙们。永远在梦中徘徊吧。",
						"french": "Imbéciles. Errez à jamais dans les rêves.",
						"spanish": "Insensatos. Vagad por los sueños para siempre.",
						"vietnamese": "Đồ ngu ngốc. Hãy lạc lối trong giấc mơ mãi mãi đi.",
						"thai": "พวกโง่เง่า จงหลงทางอยู่ในความฝันชั่วนิรันดร์",
						"hindi": "नासमझों। हमेशा के लिए सपनों में भटकते रहो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 반드시…",
						"english": "...It's not over yet. We must...",
						"japanese": "…まだ終わってない。我々は必ず…",
						"chinese": "…还没结束。我们必须…",
						"french": "...Ce n'est pas encore fini. Nous devons...",
						"spanish": "...Aún no ha terminado. Debemos...",
						"vietnamese": "...Chưa kết thúc đâu. Chúng ta nhất định phải...",
						"thai": "...ยังไม่จบแค่นี้ เราต้อง...",
						"hindi": "...अभी खत्म नहीं हुआ। हमें जरूर..."
					}
				}
			]
		}
	]
} as const;
