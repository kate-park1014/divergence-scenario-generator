export const scenario_hell_memo_4_01 = {
	"scenario_id": "hell_memo_4_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"soot": {
			"id": "mon_a0491490-e114-44d8-855c-d2d63b020da1",
			"name": {
				"korean": "그을음",
				"english": "Soot",
				"japanese": "煤",
				"chinese": "煤烟",
				"french": "Suie",
				"spanish": "Hollín",
				"vietnamese": "Bồ hóng",
				"thai": "เขม่า",
				"hindi": "कालिख"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2275d372-4e89-4725-193c-fccc0b944300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d1d5ba2b-da7c-4b75-42de-07c9cdda5d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"용암 강변. 지옥에서도 가장 뜨거운 곳.",
			"그곳에, 거대한 소포를 짊어진 그림자가 나타났다.",
			"그림자는 외쳤다. '늦었어! 늦었다고!'",
			"…대체 누구에게 향한 외침인가.",
			"여긴 지옥이다. 시간 따위는 존재하지 않는."
		],
		"english": [
			"Lava Riverbank. The hottest place even in Hell.",
			"There, a shadow appeared, burdened with a huge package.",
			"The shadow cried out, 'It's late! Too late!'",
			"...Who was that cry for...?",
			"This is Hell. Where time does not exist."
		],
		"japanese": [
			"溶岩の河岸。地獄でも最も熱い場所。",
			"そこに、巨大な小包を背負った影が現れた。",
			"影は叫んだ。「遅い！遅すぎる！」",
			"…一体誰に向けられた叫びなのか。",
			"ここは地獄だ。時間など存在しない場所。"
		],
		"chinese": [
			"熔岩河畔。地狱中最热的地方。",
			"那里，一个背负巨大包裹的影子出现了。",
			"影子喊道：“晚了！太晚了！”",
			"……这究竟是对谁的呼喊？",
			"这里是地狱。一个时间不存在的地方。"
		],
		"french": [
			"Rive du fleuve de lave. L'endroit le plus chaud même en Enfer.",
			"Là, une ombre apparut, portant un énorme colis.",
			"L'ombre s'écria : « C'est trop tard ! Trop tard ! »",
			"…À qui s'adressait ce cri, au juste ?",
			"C'est l'Enfer. Un endroit où le temps n'existe pas."
		],
		"spanish": [
			"Ribera del río de lava. El lugar más caliente incluso en el Infierno.",
			"Allí, apareció una sombra, cargando un paquete enorme.",
			"La sombra gritó: «¡Es tarde! ¡Demasiado tarde!»",
			"¿...A quién iba dirigido ese grito?",
			"Esto es el Infierno. Un lugar donde el tiempo no existe."
		],
		"vietnamese": [
			"Bờ sông dung nham. Nơi nóng nhất cả ở Địa ngục.",
			"Ở đó, một bóng đen xuất hiện, vác một bưu kiện khổng lồ.",
			"Bóng đen hét lên: 'Muộn rồi! Muộn rồi!'",
			"…Cái tiếng kêu đó là dành cho ai vậy?",
			"Đây là Địa ngục. Nơi thời gian không tồn tại."
		],
		"thai": [
			"ริมฝั่งแม่น้ำลาวา ที่ที่ร้อนแรงที่สุดในนรก",
			"ที่นั่น เงาหนึ่งปรากฏขึ้นพร้อมกับพัสดุขนาดใหญ่",
			"เงาตะโกนว่า 'สายไปแล้ว! สายไปแล้ว!'",
			"…เสียงกรีดร้องนั้นมุ่งตรงถึงใครกันแน่",
			"นี่คือนรก ที่ที่ไม่มีเวลาอยู่จริง"
		],
		"hindi": [
			"लावा नदी का किनारा। नर्क में भी सबसे गर्म जगह।",
			"वहाँ, एक विशाल पार्सल उठाए एक परछाई प्रकट हुई।",
			"परछाई चिल्लाई, 'देर हो गई! बहुत देर हो गई!'",
			"...आखिर यह किसके लिए चीख थी?",
			"यह नर्क है। जहाँ समय का कोई अस्तित्व नहीं है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "용암 강변. 뜨거운 열기가 발끝을 태웠다.",
						"english": "Lava Riverbank. The scorching heat burned my toes.",
						"japanese": "溶岩の河岸。熱気が足先を焦がした。",
						"chinese": "熔岩河畔。炙热的蒸汽灼烧着脚尖。",
						"french": "Rive du fleuve de lave. La chaleur torride me brûlait les orteils.",
						"spanish": "Ribera del río de lava. El calor abrasador quemaba mis pies.",
						"vietnamese": "Bờ sông dung nham. Hơi nóng bỏng rát đầu ngón chân.",
						"thai": "ริมฝั่งแม่น้ำลาวา ความร้อนเผาผลาญปลายเท้า",
						"hindi": "लावा नदी का किनारा। तपती गर्मी ने पैरों को जला दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "soot",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "여긴… 지옥 아닌가요? 방금 저거 뭐예요?",
						"english": "Isn't this... Hell? What was that just now?",
						"japanese": "ここ…地獄じゃないんですか？今のは何ですか？",
						"chinese": "这里是…地狱吧？刚才那是什么？",
						"french": "N'est-ce pas… l'Enfer ici ? Qu'est-ce que c'était, là ?",
						"spanish": "¿No es esto... el Infierno? ¿Qué fue eso de ahora?",
						"vietnamese": "Đây không phải… Địa ngục sao? Vừa rồi là cái gì vậy?",
						"thai": "นี่มัน…นรกไม่ใช่เหรอ? เมื่อกี้อะไรน่ะ?",
						"hindi": "यह... नर्क नहीं है क्या? अभी वह क्या था?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…저거 배달부 아니야?",
						"english": "...Isn't that a delivery person?",
						"japanese": "…あれ、配達員じゃないか？",
						"chinese": "……那不是个快递员吗？",
						"french": "…N'est-ce pas un livreur, ça ?",
						"spanish": "¿...No es ese un repartidor?",
						"vietnamese": "…Đó không phải người giao hàng sao?",
						"thai": "…นั่นมันคนส่งของไม่ใช่เหรอ?",
						"hindi": "...वह एक डिलीवरी मैन नहीं है क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						7,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "늦었어! 늦었다고! 큰일 났어!",
						"english": "Late! Too late! This is a disaster!",
						"japanese": "遅い！遅すぎる！大変だ！",
						"chinese": "晚了！太晚了！糟了！",
						"french": "Tard ! Trop tard ! C'est une catastrophe !",
						"spanish": "¡Tarde! ¡Demasiado tarde! ¡Esto es un desastre!",
						"vietnamese": "Muộn rồi! Muộn rồi! To chuyện rồi!",
						"thai": "สายไปแล้ว! สายไปแล้ว! แย่แล้ว!",
						"hindi": "देर हो गई! बहुत देर हो गई! बड़ी मुसीबत हो गई!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "지옥에 웬 택배 배달이…?",
						"english": "Parcel delivery in Hell...?",
						"japanese": "地獄に宅配便の配達が…？",
						"chinese": "地狱里居然有快递……？",
						"french": "Une livraison de colis en Enfer… ?",
						"spanish": "¿Entrega de paquetes en el Infierno…?",
						"vietnamese": "Giao hàng tận nơi ở Địa ngục à…?",
						"thai": "ส่งของในนรกเนี่ยนะ…?",
						"hindi": "नर्क में पार्सल डिलीवरी...?"
					},
					"speaker": "soot"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						7,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "빨리, 빨리! 이대로 가면 재앙이 닥쳐!",
						"english": "Hurry, hurry! Disaster will strike if we keep this up!",
						"japanese": "早く、早く！このままじゃ災厄が起きる！",
						"chinese": "快，快！再这样下去，灾难就要降临了！",
						"french": "Vite, vite ! Si ça continue comme ça, la catastrophe va frapper !",
						"spanish": "¡Rápido, rápido! ¡Si seguimos así, la catástrofe se avecina!",
						"vietnamese": "Nhanh lên, nhanh lên! Cứ thế này thảm họa sẽ ập đến!",
						"thai": "เร็วเข้า! เร็วเข้า! ถ้ายังเป็นแบบนี้ต่อไป หายนะจะมาเยือน!",
						"hindi": "जल्दी करो, जल्दी करो! अगर ऐसे ही चलता रहा तो तबाही आ जाएगी!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "soot",
					"content": {
						"korean": "재앙이요? 여기보다 더한 재앙이 있다구요?",
						"english": "Disaster? You mean there's a disaster worse than this place?",
						"japanese": "災厄ですって？ここより酷い災厄があるって言うんですか？",
						"chinese": "灾难？你是指有比这里更糟糕的灾难吗？",
						"french": "Une catastrophe ? Vous voulez dire qu'il y a une catastrophe pire que cet endroit ?",
						"spanish": "¿Una catástrofe? ¿Quieres decir que hay una catástrofe peor que este lugar?",
						"vietnamese": "Thảm họa ư? Ý anh là có thảm họa nào tệ hơn nơi này sao?",
						"thai": "หายนะเหรอ? คุณหมายความว่ามีหายนะที่แย่กว่าที่นี่อีกเหรอ?",
						"hindi": "तबाही? क्या आपका मतलब है कि इस जगह से भी बदतर कोई तबाही है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 비명… 어딘가 멀리 있는 걸 향한 것 같아.",
						"english": "That scream... it seems to be aimed at something far away.",
						"japanese": "あの悲鳴… どこか遠くにあるものに向けられているみたい。",
						"chinese": "那尖叫声…… 好像是冲着某个遥远的东西去的。",
						"french": "Ce cri… il semble viser quelque chose de très loin.",
						"spanish": "Ese grito… parece estar dirigido a algo muy lejano.",
						"vietnamese": "Tiếng hét đó... dường như đang hướng về một thứ gì đó rất xa.",
						"thai": "เสียงกรี๊ดนั่น... ดูเหมือนจะมุ่งเป้าไปที่บางสิ่งที่อยู่ไกลออกไป",
						"hindi": "वह चीख... ऐसा लगता है कि यह दूर किसी चीज़ के लिए है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"action": "enter",
					"spot": [
						7,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이러다 모두 늦는다고! 큰일 나!",
						"english": "We'll all be late at this rate! It'll be a disaster!",
						"japanese": "このままじゃ全員遅れちゃう！大変なことになる！",
						"chinese": "这样下去大家都会迟到！要出大事了！",
						"french": "À ce rythme, on va tous être en retard ! C'est la catastrophe !",
						"spanish": "¡A este paso, todos llegaremos tarde! ¡Será un desastre!",
						"vietnamese": "Cứ thế này chúng ta sẽ trễ mất! Chuyện lớn đấy!",
						"thai": "ถ้าเป็นแบบนี้ เราจะสายกันหมด! แย่แล้ว!",
						"hindi": "अगर ऐसे ही चलता रहा तो हम सब देर हो जाएंगे! यह एक आपदा होगी!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도대체 뭘 배달하는 거야?",
						"english": "What in the world are they delivering?",
						"japanese": "一体何を配達してるんだ？",
						"chinese": "到底在运送什么？",
						"french": "Mais qu'est-ce qu'ils livrent, bon sang ?",
						"spanish": "¿Qué demonios están entregando?",
						"vietnamese": "Rốt cuộc họ đang giao cái gì vậy?",
						"thai": "พวกเขากำลังส่งอะไรกันแน่?",
						"hindi": "आखिर वो क्या डिलीवर कर रहे हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "지옥 배송은 무료 아니었나…?",
						"english": "Wasn't Hell delivery free...?",
						"japanese": "地獄への配送は無料じゃなかったのか…？",
						"chinese": "地狱配送不是免费的吗……？",
						"french": "La livraison en enfer n'était pas gratuite… ?",
						"spanish": "¿Acaso la entrega al infierno no era gratis…?",
						"vietnamese": "Chẳng phải giao hàng xuống địa ngục là miễn phí sao...?",
						"thai": "การจัดส่งไปนรกมันฟรีไม่ใช่เหรอ...?",
						"hindi": "क्या नर्क में डिलीवरी मुफ़्त नहीं थी...?"
					},
					"speaker": "soot",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss",
					"spot": [
						7,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "안 돼! 시간이 없어! 이 소포가 늦으면 세상이 망해!",
						"english": "No! There's no time! If this package is late, the world will end!",
						"japanese": "ダメだ！時間がない！この小包が遅れたら世界が滅びる！",
						"chinese": "不行！没时间了！如果这个包裹迟了，世界就会毁灭！",
						"french": "Non ! Pas le temps ! Si ce colis est en retard, le monde est perdu !",
						"spanish": "¡No! ¡No hay tiempo! Si este paquete se retrasa, ¡el mundo se acaba!",
						"vietnamese": "Không! Không còn thời gian nữa! Nếu gói hàng này trễ, thế giới sẽ diệt vong!",
						"thai": "ไม่นะ! ไม่มีเวลาแล้ว! ถ้าพัสดุนี้ล่าช้า โลกจะถึงจุดจบ!",
						"hindi": "नहीं! समय नहीं है! अगर यह पार्सल देर हुआ, तो दुनिया खत्म हो जाएगी!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "세상이 망한다고? 저 소포 안에 뭐가 있는데?",
						"english": "The world will end? What's inside that package?",
						"japanese": "世界が滅びるって？あの小包の中に何が入ってるんだ？",
						"chinese": "世界会毁灭？那个包裹里有什么？",
						"french": "Le monde va finir ? Qu'y a-t-il dans ce colis ?",
						"spanish": "¿El mundo se acaba? ¿Qué hay dentro de ese paquete?",
						"vietnamese": "Thế giới sẽ diệt vong ư? Trong gói hàng đó có gì vậy?",
						"thai": "โลกจะถึงจุดจบเหรอ? ในพัสดุนั่นมีอะไรอยู่?",
						"hindi": "दुनिया खत्म हो जाएगी? उस पैकेज के अंदर क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…설마, 지옥에서도 제일 중요한 건가?",
						"english": "...Could it be, the most important thing even in Hell?",
						"japanese": "…まさか、地獄でも一番重要なものなのか？",
						"chinese": "……难道，这是地狱里最重要的东西吗？",
						"french": "...Serait-ce la chose la plus importante, même en enfer ?",
						"spanish": "¿Será, la cosa más importante incluso en el infierno?",
						"vietnamese": "...Không lẽ, đó là thứ quan trọng nhất ngay cả ở địa ngục sao?",
						"thai": "...หรือว่า มันคือสิ่งที่สำคัญที่สุดแม้แต่ในนรก?",
						"hindi": "...क्या यह, नरक में भी सबसे महत्वपूर्ण चीज़ है?"
					},
					"speaker": "soot"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"spot": [
						7,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하하! 늦었어! 이제 아무도 막을 수 없어!",
						"english": "Haha! Too late! Now no one can stop it!",
						"japanese": "ハハ！遅い！もう誰も止められない！",
						"chinese": "哈哈哈！晚了！现在谁也无法阻止了！",
						"french": "Hahaha ! Trop tard ! Plus personne ne peut l'arrêter maintenant !",
						"spanish": "¡Jaja! ¡Tarde! ¡Ahora nadie puede detenerlo!",
						"vietnamese": "Haha! Muộn rồi! Giờ không ai có thể ngăn cản được!",
						"thai": "ฮ่าฮ่า! สายไปแล้ว! ไม่มีใครหยุดมันได้แล้ว!",
						"hindi": "हाहा! बहुत देर हो चुकी है! अब कोई इसे रोक नहीं सकता!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 이대로 포기할 순 없어.",
						"english": "Damn it... I can't give up like this.",
						"japanese": "くそっ…このまま諦めるわけにはいかない。",
						"chinese": "该死……不能就这样放弃。",
						"french": "Merde... Je ne peux pas abandonner comme ça.",
						"spanish": "Maldita sea... No puedo rendirme así.",
						"vietnamese": "Chết tiệt... Không thể từ bỏ như thế này được.",
						"thai": "ให้ตายสิ...ฉันจะยอมแพ้แบบนี้ไม่ได้",
						"hindi": "धिक्कार है... मैं ऐसे हार नहीं मान सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "다시… 다시 도전해야 해요!",
						"english": "Again... I must challenge again!",
						"japanese": "もう一度…また挑戦しなくちゃ！",
						"chinese": "再来...我必须再挑战一次！",
						"french": "Encore... je dois réessayer !",
						"spanish": "Otra vez... ¡debo intentarlo de nuevo!",
						"vietnamese": "Lại nữa... tôi phải thử lại thôi!",
						"thai": "อีกครั้ง... ฉันต้องลองใหม่อีกครั้ง!",
						"hindi": "फिर से... मुझे फिर से कोशिश करनी होगी!"
					},
					"speaker": "soot"
				}
			],
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "soot",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						7,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "방해하지 마! 이건… 이건 배달되어야 해!",
						"english": "Don't interfere! This... this must be delivered!",
						"japanese": "邪魔するな！これは… これは配達されなきゃならないんだ！",
						"chinese": "别碍事！这个……这个必须送达！",
						"french": "Ne m'interromps pas ! Ça… ça doit être livré !",
						"spanish": "¡No interfieras! ¡Esto… esto debe ser entregado!",
						"vietnamese": "Đừng cản trở! Cái này... cái này phải được giao!",
						"thai": "อย่าขวางนะ! นี่... นี่มันต้องถูกส่งไป!",
						"hindi": "दखल मत दो! यह... यह डिलीवर होना चाहिए!"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리가 알아야겠어. 그 소포의 정체를.",
						"english": "We need to know. The identity of that package.",
						"japanese": "我々が知るべきだ。あの小包の正体を。",
						"chinese": "我们必须知道。那个包裹的真实身份。",
						"french": "Nous devons savoir. L'identité de ce colis.",
						"spanish": "Necesitamos saber. La identidad de ese paquete.",
						"vietnamese": "Chúng ta cần biết. Danh tính của gói hàng đó.",
						"thai": "เราต้องรู้. ตัวตนของพัสดุนั้น.",
						"hindi": "हमें जानना होगा। उस पार्सल की पहचान।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…그럼 날 쓰러뜨려! 소포는 절대 못 줘!",
						"english": "...Then defeat me! You'll never get the package!",
						"japanese": "…なら、私を倒せ！小包は絶対に渡さない！",
						"chinese": "……那就打倒我！你绝不可能拿到包裹！",
						"french": "...Alors, abats-moi ! Tu n'auras jamais le colis !",
						"spanish": "...¡Entonces derrótame! ¡Nunca te daré el paquete!",
						"vietnamese": "...Vậy thì đánh bại ta đi! Ngươi sẽ không bao giờ lấy được gói hàng!",
						"thai": "...งั้นก็โค่นฉันลงซะ! ไม่มีทางที่ฉันจะให้พัสดุนั่น!",
						"hindi": "तो मुझे हराओ! पार्सल तुम्हें कभी नहीं मिलेगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "soot"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 늦어… 늦었어…!",
						"english": "Ugh... Too late... It's too late...!",
						"japanese": "くっ…遅い…遅すぎた…！",
						"chinese": "呃……晚了……太晚了……！",
						"french": "Argh... Trop tard... C'est trop tard... !",
						"spanish": "Argh... Tarde... ¡Es tarde...!",
						"vietnamese": "Khụ... Muộn rồi... Đã quá muộn rồi...!",
						"thai": "อึก...สายไป...สายไปแล้ว...!",
						"hindi": "उह... बहुत देर हो चुकी है... बहुत देर हो चुकी है...!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "늦었다니? 뭐가?",
						"english": "Too late? For what?",
						"japanese": "遅いって？何が？",
						"chinese": "晚了？什么晚了？",
						"french": "Trop tard ? Pour quoi ?",
						"spanish": "¿Tarde? ¿Qué?",
						"vietnamese": "Muộn rồi ư? Muộn cái gì?",
						"thai": "สายไปแล้วเหรอ? เรื่องอะไร?",
						"hindi": "देर हो गई? किस लिए?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 소포는… 우주의… 시공간 균열을 막는…!",
						"english": "This package... stops the universe's... spacetime rift...!",
						"japanese": "この小包は…宇宙の…時空の裂け目を塞ぐ…！",
						"chinese": "这个包裹……是为了阻止宇宙的……时空裂缝……！",
						"french": "Ce colis... arrête la... faille spatio-temporelle de l'univers...!",
						"spanish": "Este paquete... detiene la... grieta espacio-temporal del universo...!",
						"vietnamese": "Gói hàng này... ngăn chặn... vết nứt không thời gian của vũ trụ...!",
						"thai": "พัสดุนี้...หยุด...รอยแยกกาลอวกาศของจักรวาล...!",
						"hindi": "यह पार्सल... ब्रह्मांड के... दिक्काल दरार को रोकता है...!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "soot",
					"content": {
						"korean": "우주? 시공간 균열?",
						"english": "Universe? Spacetime rift?",
						"japanese": "宇宙？時空の裂け目？",
						"chinese": "宇宙？时空裂缝？",
						"french": "L'univers ? Une faille spatio-temporelle ?",
						"spanish": "¿Universo? ¿Grieta espacio-temporal?",
						"vietnamese": "Vũ trụ? Vết nứt không thời gian?",
						"thai": "จักรวาล? รอยแยกกาลอวกาศ?",
						"hindi": "ब्रह्मांड? दिक्काल दरार?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "배달부는 쓰러졌다. 소포에서 종잇장 하나가 떨어진다.",
						"english": "The delivery person collapsed. A piece of paper falls from the package.",
						"japanese": "配達員は倒れた。小包から紙切れが１枚落ちる。",
						"chinese": "送货员倒下了。一张纸从包裹中掉了出来。",
						"french": "Le livreur s'est effondré. Un morceau de papier tombe du colis.",
						"spanish": "El repartidor cayó. Un trozo de papel cae del paquete.",
						"vietnamese": "Người giao hàng gục xuống. Một mảnh giấy rơi ra từ gói hàng.",
						"thai": "บุรุษไปรษณีย์ล้มลง กระดาษแผ่นหนึ่งตกลงมาจากพัสดุ",
						"hindi": "डिलीवरी वाला गिर गया। पार्सल से एक कागज़ का टुकड़ा गिरता है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 언어가 아닌, 알 수 없는 좌표들이었다.",
						"english": "Not the language of hell, but unknown coordinates.",
						"japanese": "地獄の言語ではなく、未知の座標だった。",
						"chinese": "那不是地狱的语言，而是未知的坐标。",
						"french": "Pas la langue de l'enfer, mais des coordonnées inconnues.",
						"spanish": "No era el idioma del infierno, sino coordenadas desconocidas.",
						"vietnamese": "Không phải ngôn ngữ của địa ngục, mà là những tọa độ không xác định.",
						"thai": "ไม่ใช่ภาษาของนรก แต่เป็นพิกัดที่ไม่รู้จัก",
						"hindi": "नरक की भाषा नहीं, बल्कि अज्ञात निर्देशांक थे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	]
} as const;
