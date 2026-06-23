export const scenario_modern_whisper_71_03 = {
	"scenario_id": "modern_whisper_71_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"폐쇄된 상가. 죽은 도시의 심장.",
			"사라진 사람들의 마지막 흔적을 쫓는 곳.",
			"'검은 새벽' 갱단의 잔혹한 그림자가 모든 것을 집어삼켰다.",
			"탐정 카이, 그 어둠 속에서 진실을 찾으려 한다."
		],
		"english": [
			"Abandoned mall. Heart of a dead city.",
			"Where we chase the last traces of the vanished.",
			"The cruel shadow of the 'Black Dawn' gang devoured everything.",
			"Detective Kai seeks truth in that darkness."
		],
		"japanese": [
			"閉鎖された商店街。死んだ街の心臓。",
			"消えた人々の最後の痕跡を追う場所。",
			"「黒い夜明け」ギャングの残酷な影が全てを飲み込んだ。",
			"探偵カイ、その闇の中で真実を探す。"
		],
		"chinese": [
			"废弃商场。死城的中心。",
			"追寻失踪者最后踪迹之地。",
			"“黑色黎明”帮派的残忍阴影吞噬了一切。",
			"侦探凯，在那片黑暗中寻求真相。"
		],
		"french": [
			"Centre commercial abandonné. Cœur d'une ville morte.",
			"Là où l'on traque les dernières traces des disparus.",
			"L'ombre cruelle du gang 'Aube Noire' a tout dévoré.",
			"Le détective Kai cherche la vérité dans cette obscurité."
		],
		"spanish": [
			"Centro comercial abandonado. Corazón de una ciudad muerta.",
			"Donde perseguimos las últimas huellas de los desaparecidos.",
			"La cruel sombra de la pandilla 'Amanecer Negro' lo devoró todo.",
			"El detective Kai busca la verdad en esa oscuridad."
		],
		"vietnamese": [
			"Trung tâm thương mại bị bỏ hoang. Trái tim của một thành phố chết.",
			"Nơi truy tìm dấu vết cuối cùng của những người đã biến mất.",
			"Bóng tối tàn khốc của băng 'Bình Minh Đen' đã nuốt chửng mọi thứ.",
			"Thám tử Kai tìm kiếm sự thật trong bóng tối đó."
		],
		"thai": [
			"ห้างสรรพสินค้าที่ถูกปิด หัวใจของเมืองที่ตายแล้ว",
			"ที่ที่เราไล่ล่าร่องรอยสุดท้ายของผู้ที่หายไป",
			"เงาอันโหดร้ายของแก๊ง 'รุ่งอรุณทมิฬ' กลืนกินทุกสิ่ง",
			"นักสืบไคค้นหาความจริงในความมืดมิดนั้น"
		],
		"hindi": [
			"बंद मॉल। एक मृत शहर का दिल।",
			"जहाँ हम गायब हुए लोगों के अंतिम निशान का पीछा करते हैं।",
			"'ब्लैक डॉन' गिरोह की क्रूर छाया ने सब कुछ निगल लिया।",
			"जासूस काई उस अंधेरे में सच्चाई की तलाश में है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠이 내려앉은 폐쇄된 상가. 퀴퀴한 곰팡이 냄새가 코를 찔렀다.",
						"english": "Darkness fell upon the abandoned mall. A musty, moldy smell stung my nose.",
						"japanese": "闇が降りた閉鎖された商店街。カビ臭い匂いが鼻を突いた。",
						"chinese": "黑暗笼罩着废弃的商场。一股霉味刺鼻而来。",
						"french": "L'obscurité s'était abattue sur le centre commercial abandonné. Une odeur de moisi piquait le nez.",
						"spanish": "La oscuridad cayó sobre el centro comercial abandonado. Un olor a humedad y moho picaba la nariz.",
						"vietnamese": "Bóng tối bao trùm trung tâm thương mại bị bỏ hoang. Mùi ẩm mốc nồng nặc xộc vào mũi.",
						"thai": "ความมืดมิดปกคลุมห้างสรรพสินค้าที่ถูกทิ้งร้าง กลิ่นอับชื้นและเชื้อราแสบจมูก",
						"hindi": "अंधेरा परित्यक्त मॉल पर छा गया। एक सीलन भरी, फफूंदी वाली गंध मेरी नाक में चुभ गई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기가… 마지막 목격지라고?",
						"english": "This is... the last sighting?",
						"japanese": "ここが…最後の目撃場所だと？",
						"chinese": "这里是…最后目击点？",
						"french": "C'est ici... la dernière fois qu'on l'a vu ?",
						"spanish": "¿Este es... el último lugar donde fue visto?",
						"vietnamese": "Đây là... nơi cuối cùng được nhìn thấy sao?",
						"thai": "นี่คือ... จุดที่เห็นครั้งสุดท้ายหรือ?",
						"hindi": "यह है... आखिरी बार देखे जाने वाला स्थान?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "그래. 하지만… 흔적을 찾기 쉽지 않을 거야.",
						"english": "Yes. But... finding traces won't be easy.",
						"japanese": "ああ。だが…痕跡を見つけるのは簡単ではないだろう。",
						"chinese": "是的。但是…要找到线索可不容易。",
						"french": "Oui. Mais... trouver des traces ne sera pas facile.",
						"spanish": "Sí. Pero... encontrar rastros no será fácil.",
						"vietnamese": "Phải. Nhưng... tìm dấu vết sẽ không dễ đâu.",
						"thai": "ใช่ แต่... การหาร่องรอยคงไม่ง่าย",
						"hindi": "हाँ। लेकिन... निशान खोजना आसान नहीं होगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "이 낙서들… '검은 새벽' 갱단 짓이군.",
						"english": "These graffiti... 'Black Dawn' gang's work.",
						"japanese": "この落書き…「黒い夜明け」ギャングの仕業か。",
						"chinese": "这些涂鸦…是“黑色黎明”帮派干的。",
						"french": "Ces graffitis... C'est l'œuvre du gang 'Aube Noire'.",
						"spanish": "Estos grafitis... Obra de la pandilla 'Amanecer Negro'.",
						"vietnamese": "Những hình vẽ bậy này... là của băng 'Bình Minh Đen'.",
						"thai": "ลายกราฟฟิตีพวกนี้... ฝีมือแก๊ง 'รุ่งอรุณทมิฬ' สินะ",
						"hindi": "ये भित्तिचित्र... 'ब्लैक डॉन' गिरोह का काम है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "잔인하기로 유명한 놈들이죠.",
						"english": "They're infamous for their cruelty.",
						"japanese": "彼らはその残忍さで有名だ。",
						"chinese": "他们以残忍而闻名。",
						"french": "Ils sont célèbres pour leur cruauté.",
						"spanish": "Son infames por su crueldad.",
						"vietnamese": "Chúng nổi tiếng vì sự tàn ác.",
						"thai": "พวกมันขึ้นชื่อเรื่องความโหดร้าย",
						"hindi": "वे अपनी क्रूरता के लिए कुख्यात हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이게 뭐야? 실종된 아이의 인형이… 왜 여기에?",
						"english": "What's this? A missing child's doll... Why here?",
						"japanese": "これは何だ？行方不明の子供の人形が…なぜここに？",
						"chinese": "这是什么？失踪孩子的玩偶…为什么会在这里？",
						"french": "Qu'est-ce que c'est ? La poupée d'un enfant disparu... Pourquoi ici ?",
						"spanish": "¿Qué es esto? La muñeca de un niño desaparecido... ¿Por qué aquí?",
						"vietnamese": "Cái gì đây? Búp bê của một đứa trẻ mất tích... Sao lại ở đây?",
						"thai": "นี่อะไรน่ะ? ตุ๊กตาของเด็กที่หายไป... ทำไมถึงมาอยู่ที่นี่?",
						"hindi": "यह क्या है? एक लापता बच्चे की गुड़िया... यहाँ क्यों?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그들의 방식이야. 흔적을 남겨 공포를 즐기는.",
						"english": "Their way. Leaving traces to revel in fear.",
						"japanese": "彼らのやり方だ。痕跡を残し、恐怖を楽しむ。",
						"chinese": "这是他们的作风。留下痕迹，享受恐惧。",
						"french": "C'est leur façon de faire. Laisser des traces pour se délecter de la peur.",
						"spanish": "Es su forma. Dejar rastros para deleitarse con el miedo.",
						"vietnamese": "Đó là cách của chúng. Để lại dấu vết để tận hưởng nỗi sợ hãi.",
						"thai": "นี่คือหนทางของพวกเขา ทิ้งร่องรอยไว้เพื่อสนุกกับความกลัว",
						"hindi": "यह उनका तरीका है। निशान छोड़कर डर का आनंद लेना।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어딘가에서 희미한 비명과 웃음소리가 섞여 들려오는 듯했다.",
						"english": "Faint screams and laughter seemed to mix, echoing from somewhere.",
						"japanese": "どこかから、かすかな悲鳴と笑い声が混じり合って聞こえてくるようだった。",
						"chinese": "仿佛从某个地方传来微弱的尖叫和笑声，混杂在一起。",
						"french": "De faibles cris et des rires semblaient se mêler, venant de quelque part.",
						"spanish": "Débiles gritos y risas parecían mezclarse, resonando desde algún lugar.",
						"vietnamese": "Dường như có tiếng la hét và tiếng cười yếu ớt hòa lẫn vào nhau từ đâu đó vọng lại.",
						"thai": "ดูเหมือนจะมีเสียงกรีดร้องและเสียงหัวเราะเบาๆ ปะปนกันมาจากที่ไหนสักแห่ง",
						"hindi": "कहीं से हल्की चीखें और हँसी की आवाज़ें घुलती हुई सुनाई दे रही थीं।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "벽 곳곳에 피가 말라붙은 흔적. 끔찍한 비극이 스쳐 간 자리였다.",
						"english": "Dried bloodstains everywhere on the walls. The scene of a terrible tragedy.",
						"japanese": "壁のあちこちに血が乾いた跡。恐ろしい悲劇が通り過ぎた場所だった。",
						"chinese": "墙壁上到处都是干涸的血迹。这是一个可怕悲剧发生过的地方。",
						"french": "Des taches de sang séché partout sur les murs. Le lieu d'une terrible tragédie.",
						"spanish": "Manchas de sangre seca por todas partes en las paredes. El escenario de una terrible tragedia.",
						"vietnamese": "Những vết máu khô khắp nơi trên tường. Nơi đây đã chứng kiến một bi kịch khủng khiếp.",
						"thai": "คราบเลือดแห้งกรังทั่วผนัง สถานที่แห่งโศกนาฏกรรมอันน่าสยดสยอง",
						"hindi": "दीवारों पर हर जगह सूखे खून के धब्बे। एक भयानक त्रासदी का स्थल।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 학살이야. 평범한 갱단이 아니었어.",
						"english": "This is... a massacre. Not just an ordinary gang.",
						"japanese": "これは…虐殺だ。普通のギャングではなかった。",
						"chinese": "这…是一场屠杀。这不是普通的帮派所为。",
						"french": "C'est... un massacre. Pas un simple gang.",
						"spanish": "Esto es... una masacre. No era una banda común.",
						"vietnamese": "Đây là... một cuộc thảm sát. Không phải một băng đảng bình thường.",
						"thai": "นี่มัน... การสังหารหมู่ ไม่ใช่แค่แก๊งธรรมดา",
						"hindi": "यह... एक नरसंहार है। यह कोई साधारण गिरोह नहीं था।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "Whisper의 그림자… 여기서도 느껴지는군.",
						"english": "Whisper's shadow... I feel it here too.",
						"japanese": "Whisperの影…ここでも感じる。",
						"chinese": "Whisper的影子……在这里也能感受到。",
						"french": "L'ombre de Whisper... Je la sens ici aussi.",
						"spanish": "La sombra de Whisper... La siento aquí también.",
						"vietnamese": "Bóng tối của Whisper... Ta cũng cảm nhận được nó ở đây.",
						"thai": "เงาของ Whisper... สัมผัสได้ที่นี่ด้วย",
						"hindi": "व्हिस्पर की परछाई... मैं इसे यहाँ भी महसूस करता हूँ।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이상하군… 들개들이 이 주변에 몰려들어 쇠약해지고 있어.",
						"english": "Strange... Wild dogs are gathering around here and growing weak.",
						"japanese": "おかしい…野犬がこの周辺に集まってきて、衰弱している。",
						"chinese": "奇怪…野狗们聚集在这周围，变得虚弱。",
						"french": "Étrange... Des chiens sauvages se rassemblent ici et s'affaiblissent.",
						"spanish": "Extraño... Los perros salvajes se están reuniendo por aquí y se están debilitando.",
						"vietnamese": "Lạ thật... Lũ chó hoang đang tập trung quanh đây và trở nên yếu ớt.",
						"thai": "แปลกนะ... สุนัขป่ามารวมตัวกันที่นี่และอ่อนแอลง",
						"hindi": "अजीब है... जंगली कुत्ते यहाँ जमा हो रहे हैं और कमज़ोर पड़ रहे हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "공기마저 끈적하게 달라붙는 공간. 편집증적인 불안감이 엄습했다.",
						"english": "A space where even the air felt sticky. Paranoid anxiety crept in.",
						"japanese": "空気までもがべとつく空間。偏執的な不安感が襲いかかった。",
						"chinese": "连空气都变得黏腻的空间。偏执的焦虑感袭来。",
						"french": "Un espace où même l'air semblait collant. Une anxiété paranoïaque s'insinuait.",
						"spanish": "Un espacio donde incluso el aire se sentía pegajoso. Una ansiedad paranoica se apoderó de mí.",
						"vietnamese": "Một không gian mà ngay cả không khí cũng dính dính. Nỗi lo lắng hoang tưởng ập đến.",
						"thai": "พื้นที่ที่แม้แต่อากาศก็ยังรู้สึกเหนียวเหนอะหนะ ความวิตกกังวลแบบหวาดระแวงคืบคลานเข้ามา",
						"hindi": "एक ऐसी जगह जहाँ हवा भी चिपचिपी महसूस होती थी। एक मनोग्रसित चिंता ने घेर लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "더 이상은… 돌아갈 수 없어. 이 모든 게 Whisper의 영역이야.",
						"english": "No more... I can't go back. All of this is Whisper's domain.",
						"japanese": "もう…戻れない。このすべてがWhisperの領域だ。",
						"chinese": "再也…回不去了。这一切都是Whisper的领域。",
						"french": "Plus jamais... Je ne peux plus revenir en arrière. Tout ceci est le domaine de Whisper.",
						"spanish": "Ya no... no puedo volver. Todo esto es el dominio de Whisper.",
						"vietnamese": "Không còn nữa... Tôi không thể quay lại. Tất cả đây là lãnh địa của Whisper.",
						"thai": "ไม่แล้ว... ฉันกลับไปไม่ได้ ทั้งหมดนี้คืออาณาเขตของ Whisper",
						"hindi": "अब और नहीं... मैं वापस नहीं जा सकता। यह सब व्हिस्पर का क्षेत्र है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "머릿속이 엉망이야… 여기서 나갈 수 있을까?",
						"english": "My mind's a mess... Can I get out of here?",
						"japanese": "頭の中が混乱している…ここから出られるだろうか？",
						"chinese": "我脑子一团糟…我能从这里出去吗？",
						"french": "Mon esprit est en désordre... Puis-je sortir d'ici ?",
						"spanish": "Mi mente es un lío... ¿Puedo salir de aquí?",
						"vietnamese": "Đầu óc tôi đang rối bời... Liệu tôi có thể thoát khỏi đây không?",
						"thai": "สมองของฉันยุ่งเหยิง... ฉันจะออกไปจากที่นี่ได้ไหม?",
						"hindi": "मेरा दिमाग खराब है... क्या मैं यहाँ से निकल पाऊँगा?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "묘하게 비릿하고 퀴퀴한, 오래된 피 냄새가 진동했다.",
						"english": "A strangely metallic, musty smell of old blood permeated the air.",
						"japanese": "奇妙に生臭く、かび臭い、古い血の匂いが充満していた。",
						"chinese": "一股奇怪的腥臭、霉味，陈旧的血腥味弥漫着。",
						"french": "Une odeur de vieux sang étrangement métallique et moisie imprégnait l'air.",
						"spanish": "Un olor a sangre vieja extrañamente metálico y rancio impregnaba el aire.",
						"vietnamese": "Một mùi máu cũ tanh tưởi, ẩm mốc một cách kỳ lạ lan tỏa khắp nơi.",
						"thai": "กลิ่นคาวและอับชื้นของเลือดเก่าอบอวลไปทั่ว",
						"hindi": "पुरानी खून की एक अजीब सी धातुई और बासी गंध हवा में व्याप्त थी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들… 절망에 몸부림쳐라.",
						"english": "Insignificant beings... writhe in despair.",
						"japanese": "くだらない者たちめ…絶望の中でもがけ。",
						"chinese": "渺小的东西…在绝望中挣扎吧。",
						"french": "Créatures insignifiantes... débattez-vous dans le désespoir.",
						"spanish": "Seres insignificantes... retuércense en la desesperación.",
						"vietnamese": "Những kẻ hèn mọn... hãy vùng vẫy trong tuyệt vọng.",
						"thai": "เจ้าพวกกระจอก… จงดิ้นรนในความสิ้นหวังซะ",
						"hindi": "तुच्छ प्राणी... निराशा में तड़पो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝나지 않아… 절대로.",
						"english": "It's not over… Never.",
						"japanese": "終わらない… 絶対に。",
						"chinese": "不会结束… 绝不。",
						"french": "Ça ne finira jamais… Jamais.",
						"spanish": "Nunca acabará… Nunca.",
						"vietnamese": "Không bao giờ kết thúc… Không bao giờ.",
						"thai": "ไม่มีวันจบ… ไม่มีทาง.",
						"hindi": "यह कभी खत्म नहीं होगा… कभी नहीं।"
					}
				},
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "아직… 기회가 있어. 포기하지 마.",
						"english": "There's still… a chance. Don't give up.",
						"japanese": "まだ… チャンスがある。諦めないで。",
						"chinese": "还有… 机会。别放弃。",
						"french": "Il y a encore… une chance. N'abandonne pas.",
						"spanish": "Aún… hay una oportunidad. No te rindas.",
						"vietnamese": "Vẫn còn… cơ hội. Đừng bỏ cuộc.",
						"thai": "ยังมี… โอกาส. อย่าเพิ่งยอมแพ้.",
						"hindi": "अभी भी… एक मौका है। हार मत मानो।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "가장 깊은 곳, 검은 그림자가 움직였다.",
						"english": "In the deepest dark, a black shadow stirred.",
						"japanese": "最も深い場所で、黒い影が動いた。",
						"chinese": "在最深处，一道黑影动了。",
						"french": "Dans les profondeurs les plus sombres, une ombre noire s'agita.",
						"spanish": "En lo más profundo, una sombra negra se movió.",
						"vietnamese": "Ở nơi sâu thẳm nhất, một bóng đen đã lay động.",
						"thai": "ในที่ลึกที่สุด เงาดำขยับตัว",
						"hindi": "सबसे गहरे में, एक काली छाया हिल उठी।"
					}
				},
				{
					"content": {
						"korean": "감히… 나의 영역에 발을 들이는군.",
						"english": "How dare you... tread upon my domain.",
						"japanese": "敢えて…私の領域に足を踏み入れるとはな。",
						"chinese": "竟敢…踏入我的领域。",
						"french": "Comment oses-tu... fouler mon domaine.",
						"spanish": "¿Cómo te atreves... a pisar mi dominio?",
						"vietnamese": "Dám... đặt chân vào lãnh địa của ta.",
						"thai": "กล้าดีอย่างไร… มาเหยียบย่างในอาณาเขตของข้า",
						"hindi": "हिम्मत कैसे हुई तुम्हारी... मेरे क्षेत्र में कदम रखने की।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸몄어? 실종자들을…",
						"english": "You orchestrated all this? The disappearances...",
						"japanese": "お前がこれら全てを仕組んだのか？行方不明者たちを…",
						"chinese": "这些都是你策划的？那些失踪者…",
						"french": "Tu as manigancé tout ça ? Les disparus...",
						"spanish": "¿Tú planeaste todo esto? Los desaparecidos...",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao? Những người mất tích...",
						"thai": "เจ้าเป็นคนบงการทั้งหมดนี่หรือ? พวกคนหายไป…",
						"hindi": "क्या तुमने यह सब रचा है? उन लापता लोगों को..."
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
					"speaker": "kai",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "저자가… 실종자들의 행방을…",
						"english": "That one... knows the whereabouts of the disappeared...",
						"japanese": "あの者が…行方不明者たちの行方を…",
						"chinese": "那家伙…知道失踪者的下落…",
						"french": "Lui... connaît le sort des disparus...",
						"spanish": "Él... sabe el paradero de los desaparecidos...",
						"vietnamese": "Kẻ đó... biết tung tích của những người mất tích...",
						"thai": "เจ้านั่น… รู้เรื่องของพวกที่หายตัวไป…",
						"hindi": "वह... लापता लोगों का पता जानता है..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "새벽은… 끝나지 않아. 그저 시작일 뿐.",
						"english": "The dawn... does not end. It is merely the beginning.",
						"japanese": "夜明けは…終わらない。ただ始まりに過ぎない。",
						"chinese": "黎明…不会结束。它只是个开始。",
						"french": "L'aube... ne se termine pas. Ce n'est qu'un début.",
						"spanish": "El alba... no termina. Es solo el principio.",
						"vietnamese": "Bình minh... không kết thúc. Nó chỉ là sự khởi đầu.",
						"thai": "รุ่งอรุณ… ไม่สิ้นสุด. มันเป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "भोर... ख़त्म नहीं होती। यह बस शुरुआत है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은… 육신을 없앤다고… 진실이 사라질까?",
						"english": "Foolish... Do you think destroying the body... will erase the truth?",
						"japanese": "愚かな…肉体を滅ぼしたとて…真実が消え去るとでも？",
						"chinese": "愚蠢…以为毁掉肉身…就能抹去真相吗？",
						"french": "Imbécile... Penses-tu qu'en détruisant le corps... la vérité disparaîtra ?",
						"spanish": "Estúpido... ¿Crees que destruyendo el cuerpo... la verdad desaparecerá?",
						"vietnamese": "Ngốc nghếch... Ngươi nghĩ hủy diệt thể xác... sẽ xóa bỏ được sự thật sao?",
						"thai": "โง่เขลา… คิดหรือว่าการทำลายร่างกาย… จะลบเลือนความจริงไปได้?",
						"hindi": "मूर्ख... क्या तुम्हें लगता है कि शरीर को खत्म करने से... सच्चाई मिट जाएगी?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes !",
						"spanish": "¡Qué estás diciendo!",
						"vietnamese": "Ngươi đang nói cái gì vậy!",
						"thai": "เจ้าพูดเรื่องอะไรน่ะ!",
						"hindi": "यह क्या बकवास है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "녀석은… 그냥 꼭두각시였어. 배후가 있어.",
						"english": "That one... was just a puppet. There's someone behind it.",
						"japanese": "あいつは…ただの操り人形だった。黒幕がいる。",
						"chinese": "那个家伙…只是个傀儡。幕后另有其人。",
						"french": "Ce n'était... qu'une marionnette. Il y a quelqu'un derrière.",
						"spanish": "Él... era solo un títere. Hay alguien detrás.",
						"vietnamese": "Kẻ đó... chỉ là một con rối. Có kẻ đứng sau.",
						"thai": "เจ้านั่น… เป็นแค่หุ่นเชิด มีเบื้องหลัง",
						"hindi": "वह... बस एक कठपुतली था। इसके पीछे कोई और है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쓰러진 괴물 뒤로, 더 거대한 어둠이 느껴졌다. Whisper의 실체가 더 선명해진다.",
						"english": "Behind the fallen monster, a greater darkness was felt. The true nature of Whisper becomes clearer.",
						"japanese": "倒れた怪物の後ろから、さらに巨大な闇を感じた。Whisperの正体がより鮮明になる。",
						"chinese": "倒下的怪物身后，感受到了更巨大的黑暗。Whisper的真面目变得更加清晰。",
						"french": "Derrière le monstre abattu, une obscurité plus grande se fit sentir. La véritable nature de Whisper devient plus claire.",
						"spanish": "Detrás del monstruo caído, se sintió una oscuridad aún mayor. La verdadera naturaleza de Whisper se vuelve más clara.",
						"vietnamese": "Đằng sau con quái vật ngã xuống, một bóng tối lớn hơn được cảm nhận. Thực thể của Whisper trở nên rõ ràng hơn.",
						"thai": "ด้านหลังของสัตว์ประหลาดที่ล้มลง สัมผัสได้ถึงความมืดมิดที่ยิ่งใหญ่กว่า ตัวตนที่แท้จริงของ Whisper ชัดเจนยิ่งขึ้น",
						"hindi": "गिरे हुए राक्षस के पीछे, एक और बड़ी अंधेरी ताकत महसूस हुई। Whisper की असली पहचान और स्पष्ट हो जाती है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
