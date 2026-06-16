export const scenario_snowy_fenrir_77_05 = {
	"scenario_id": "snowy_fenrir_77_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
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
					"content": {
						"korean": "모든 것이 잿빛으로 변하는 설원. 온기 대신 냉기만이 감돌았다.",
						"english": "A snowfield where everything turned ash-gray. Only coldness lingered instead of warmth.",
						"japanese": "全てが灰色に変わる雪原。温もりではなく、冷気だけが漂っていた。",
						"chinese": "一切都变成灰色的雪原。没有温暖，只有寒气弥漫。",
						"french": "Un champ de neige où tout devenait gris cendré. Seule la froideur persistait au lieu de la chaleur.",
						"spanish": "Un campo de nieve donde todo se volvió gris ceniza. Solo la frialdad persistía en lugar de la calidez.",
						"vietnamese": "Tuyết nguyên nơi mọi thứ hóa thành tro xám. Chỉ còn sự lạnh lẽo thay vì hơi ấm.",
						"thai": "ทุ่งหิมะที่ทุกสิ่งกลายเป็นสีเทาเถ้า มีเพียงความหนาวเย็นแผ่ปกคลุมแทนความอบอุ่น",
						"hindi": "एक हिमक्षेत्र जहाँ सब कुछ राख-धूसर हो गया। गर्मी के बजाय केवल ठंडक छाई हुई थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워져… 이곳은 모든 게 죽어가는 것 같아.",
						"english": "It's getting colder... Everything here feels like it's dying.",
						"japanese": "だんだん寒くなっていく… ここはすべてが死んでいくようだ。",
						"chinese": "越来越冷了… 这里的一切都好像在死去。",
						"french": "Il fait de plus en plus froid... Tout semble mourir ici.",
						"spanish": "Hace cada vez más frío... Parece que todo aquí se está muriendo.",
						"vietnamese": "Càng ngày càng lạnh... Mọi thứ ở đây dường như đang chết dần.",
						"thai": "หนาวขึ้นเรื่อยๆ... ทุกสิ่งทุกอย่างที่นี่ดูเหมือนกำลังจะตาย",
						"hindi": "ठंड बढ़ती जा रही है... यहां सब कुछ मरता हुआ सा लग रहा है।"
					}
				},
				{
					"speaker": "glace",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "오래 머물지 마라. 이 굶주림은 모든 생명을 끌어들인다.",
						"english": "Don't linger. This hunger draws in all life.",
						"japanese": "長居は無用だ。この飢えは、あらゆる生命を引き寄せる。",
						"chinese": "别久留。这份饥饿会吸引所有生命。",
						"french": "Ne t'attarde pas. Cette faim attire toute vie.",
						"spanish": "No te quedes. Esta hambruna atrae toda vida.",
						"vietnamese": "Đừng nán lại. Cơn đói này thu hút mọi sự sống.",
						"thai": "อย่าอยู่นาน ความหิวนี้ดึงดูดทุกชีวิต",
						"hindi": "देर मत करो। यह भूख हर जीवन को खींचती है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "생명까지…?",
						"english": "Even life...?",
						"japanese": "生命まで…？",
						"chinese": "甚至生命…？",
						"french": "Même la vie...?",
						"spanish": "¿Hasta la vida...?",
						"vietnamese": "Ngay cả sự sống...?",
						"thai": "แม้แต่ชีวิต...?",
						"hindi": "जीवन तक...?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "glace",
					"content": {
						"korean": "바람마저 한 방향으로만 분다. 모든 것이 그 끝으로 향하고 있지.",
						"english": "Even the wind blows in one direction. Everything heads towards its end.",
						"japanese": "風さえも一方向へしか吹かない。すべてがその終わりに向かっている。",
						"chinese": "连风都只朝一个方向吹。一切都正走向终点。",
						"french": "Même le vent souffle dans une seule direction. Tout se dirige vers sa fin.",
						"spanish": "Incluso el viento sopla en una sola dirección. Todo se dirige hacia su fin.",
						"vietnamese": "Ngay cả gió cũng chỉ thổi theo một hướng. Mọi thứ đang hướng về điểm cuối.",
						"thai": "แม้แต่ลมก็พัดไปในทิศทางเดียว ทุกสิ่งกำลังมุ่งสู่จุดจบ",
						"hindi": "हवा भी एक ही दिशा में बहती है। सब कुछ अपने अंत की ओर बढ़ रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "끝이라니… 대체 무엇이?",
						"english": "The end...? What, exactly?",
						"japanese": "終わり…？一体何が？",
						"chinese": "终点…？到底是什么？",
						"french": "La fin... ? Quoi, exactement ?",
						"spanish": "¿El fin...? ¿Qué, exactamente?",
						"vietnamese": "Kết thúc sao...? Rốt cuộc là gì?",
						"thai": "จุดจบเหรอ...? อะไรกันแน่?",
						"hindi": "अंत...? क्या, बिल्कुल?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "공허. 스스로 채울 수 없는 굶주림이 온 세상을 삼키려 한다.",
						"english": "The Void. An insatiable hunger threatens to swallow the entire world.",
						"japanese": "虚無。自ら満たすことのできない飢えが、全世界を飲み込もうとしている。",
						"chinese": "虚空。一份无法自行填补的饥饿，正企图吞噬整个世界。",
						"french": "Le Vide. Une faim insatiable menace d'engloutir le monde entier.",
						"spanish": "El Vacío. Una hambruna insaciable amenaza con engullir el mundo entero.",
						"vietnamese": "Hư Không. Một cơn đói không thể tự lấp đầy đang đe dọa nuốt chửng cả thế giới.",
						"thai": "ความว่างเปล่า ความหิวโหยที่ไม่อาจเติมเต็มได้กำลังจะกลืนกินทั้งโลก",
						"hindi": "शून्य। एक अथाह भूख पूरी दुनिया को निगलने की धमकी दे रही है।"
					},
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 늑대가 그 굶주림의 근원이야?",
						"english": "So, the wolf is the source of that hunger?",
						"japanese": "じゃあ、狼がその飢えの根源なの？",
						"chinese": "那么，狼是那份饥饿的根源吗？",
						"french": "Alors, le loup est la source de cette faim ?",
						"spanish": "¿Entonces, el lobo es la fuente de esa hambruna?",
						"vietnamese": "Vậy, con sói là nguồn gốc của cơn đói đó ư?",
						"thai": "งั้น หมาป่าคือต้นตอของความหิวโหยนั้นหรือ?",
						"hindi": "तो, भेड़िया उस भूख का स्रोत है?"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희의 온기마저 빼앗기고 있다. 알지 못했느냐?",
						"english": "Even your warmth is being taken. Did you not know?",
						"japanese": "お前たちの温もりさえも奪われている。知らなかったのか？",
						"chinese": "连你们的温暖也正在被夺走。难道你们不知道吗？",
						"french": "Même votre chaleur vous est enlevée. Ne le saviez-vous pas ?",
						"spanish": "Incluso vuestro calor está siendo arrebatado. ¿No lo sabíais?",
						"vietnamese": "Ngay cả hơi ấm của các ngươi cũng đang bị tước đoạt. Các ngươi không biết ư?",
						"thai": "แม้แต่ความอบอุ่นของพวกเจ้าก็ยังถูกพรากไป ไม่รู้ตัวรึไง?",
						"hindi": "तुम्हारी गर्मी भी छीनी जा रही है। क्या तुम्हें नहीं पता था?"
					},
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "내 몸이… 차가워지는 것 같아.",
						"english": "My body... feels like it's getting colder.",
						"japanese": "私の体が…冷たくなっていくようだ。",
						"chinese": "我的身体…好像变得冰冷了。",
						"french": "Mon corps... semble se refroidir.",
						"spanish": "Mi cuerpo... parece estar enfriándose.",
						"vietnamese": "Cơ thể tôi... hình như đang lạnh dần.",
						"thai": "ร่างกายของฉัน... รู้สึกเหมือนกำลังเย็นลง",
						"hindi": "मेरा शरीर... ठंडा होता जा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "설원 전체가 이 공허에 빨려 들어간다고?",
						"english": "The entire snowfield is being pulled into this Void?",
						"japanese": "雪原全体がこの虚無に吸い込まれていくというのか？",
						"chinese": "整个雪原都会被吸入这份虚空吗？",
						"french": "Tout le champ de neige est aspiré dans ce Vide ?",
						"spanish": "¿Todo el campo nevado está siendo absorbido por este Vacío?",
						"vietnamese": "Cả cánh đồng tuyết sẽ bị hút vào Hư Không này sao?",
						"thai": "ทุ่งหิมะทั้งหมดกำลังถูกดูดเข้าไปในความว่างเปล่านี้หรือ?",
						"hindi": "क्या पूरा बर्फीला मैदान इस शून्य में खींचा जा रहा है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그렇다. 끝없이 번지는 재앙. 텅 빈 것들이 세상을 채우는 중이다.",
						"english": "Yes. An endless spreading calamity. Emptiness consumes the world.",
						"japanese": "そうだ。果てなく広がる災厄。空虚が世界を満たしつつある。",
						"chinese": "没错。无尽蔓延的灾厄。空虚之物正在充斥世界。",
						"french": "Oui. Une calamité sans fin. Le vide envahit le monde.",
						"spanish": "Sí. Una calamidad que se extiende sin fin. El vacío consume el mundo.",
						"vietnamese": "Đúng vậy. Một tai ương lan rộng vô tận. Sự trống rỗng đang lấp đầy thế giới.",
						"thai": "ใช่แล้ว หายนะที่แพร่กระจายไม่รู้จบ ความว่างเปล่ากำลังเติมเต็มโลก",
						"hindi": "हाँ। अंतहीन फैलती आपदा। शून्यता दुनिया को भर रही है。"
					},
					"speaker": "glace",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 되돌릴 수 없어. 너희도, 설원도.",
						"english": "There's no turning back now. Not for you, nor the Snowfield.",
						"japanese": "もう後戻りできない。お前たちも、雪原も。",
						"chinese": "已无法回头。无论是你们，还是雪原。",
						"french": "On ne peut plus revenir en arrière. Ni vous, ni le Champ de Neige.",
						"spanish": "Ya no hay vuelta atrás. Ni para vosotros, ni para el Campo de Nieve.",
						"vietnamese": "Không thể quay lại được nữa. Cả các ngươi, và cả Tuyết nguyên.",
						"thai": "ไม่อาจย้อนกลับได้อีกแล้ว ทั้งพวกเจ้าและทุ่งหิมะ",
						"hindi": "अब पीछे नहीं हट सकते। न तुम, न बर्फीला मैदान।"
					},
					"speaker": "glace",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하라는 거야?",
						"english": "Are you telling us to give up?",
						"japanese": "諦めろと？",
						"chinese": "是叫我们放弃吗？",
						"french": "Vous nous dites d'abandonner ?",
						"spanish": "¿Nos dices que nos rindamos?",
						"vietnamese": "Ý ngươi là chúng ta phải từ bỏ?",
						"thai": "ให้ยอมแพ้เหรอ?",
						"hindi": "क्या तुम हमें हार मानने को कह रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "아니. 이 끝을 직시할 뿐. 굶주림은 결코 채워지지 않아.",
						"english": "No. Just face this end. Hunger is never satisfied.",
						"japanese": "違う。この終わりを直視するだけだ。飢えは決して満たされない。",
						"chinese": "不。只是直面这个结局。饥饿永不满足。",
						"french": "Non. Juste faire face à cette fin. La faim ne sera jamais satisfaite.",
						"spanish": "No. Solo enfrenta este final. El hambre nunca se sacia.",
						"vietnamese": "Không. Chỉ là đối mặt với kết cục này. Cơn đói không bao giờ được thỏa mãn.",
						"thai": "ไม่ เพียงแค่เผชิญหน้ากับจุดจบนี้ ความหิวโหยไม่มีวันอิ่ม",
						"hindi": "नहीं। बस इस अंत का सामना करो। भूख कभी नहीं मिटती।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리가 해야 할 일은…?",
						"english": "Then what should we do...?",
						"japanese": "じゃあ、私たちがすべきことは…？",
						"chinese": "那我们该做的是…？",
						"french": "Alors, que devons-nous faire… ?",
						"spanish": "Entonces, ¿qué debemos hacer…?",
						"vietnamese": "Vậy việc chúng ta phải làm là…?",
						"thai": "แล้วสิ่งที่เราต้องทำคือ...?",
						"hindi": "तो हमें क्या करना चाहिए...?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "모든 것을 삼키기 전, 단 한 순간이라도… 버티는 것.",
						"english": "Before it devours everything, to hold out for just one moment...",
						"japanese": "全てを飲み込む前に、たった一瞬でも…耐え抜くことだ。",
						"chinese": "在它吞噬一切之前，哪怕只是一瞬间…坚持下去。",
						"french": "Avant qu'il ne dévore tout, ne serait-ce qu'un instant... tenir bon.",
						"spanish": "Antes de que lo devore todo, aguantar... aunque sea un solo instante.",
						"vietnamese": "Trước khi nuốt chửng mọi thứ, dù chỉ một khoảnh khắc… phải trụ vững.",
						"thai": "ก่อนที่มันจะกลืนกินทุกสิ่ง อย่างน้อยก็แค่ชั่วขณะ... อดทนไว้",
						"hindi": "सब कुछ निगलने से पहले, बस एक पल के लिए... टिके रहना।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "…아직도… 온기가… 남아있구나… 더… 가져가야… 해…",
						"english": "...Still... warmth... remains... Must... take... more...",
						"japanese": "「…まだ…温もりが…残っている…もっと…奪わねば…」",
						"chinese": "...竟然...还有...温暖...留下...必须...带走...更多...",
						"french": "...Encore... de la chaleur... Il en reste... Je dois... en prendre... plus...",
						"spanish": "...Aún... queda... calor... Debo... llevarme... más...",
						"vietnamese": "...Vẫn còn... hơi ấm... sót lại... Phải... lấy đi... nữa...",
						"thai": "...ยังคงมี...ความอบอุ่น...เหลืออยู่...ต้อง...เอาไป...อีก...",
						"hindi": "...अभी भी... गरमाहट... बची है... और... लेनी... होगी..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 이대로 끝낼 수 없어.",
						"english": "Damn it... I can't end it like this.",
						"japanese": "「くそ…このままでは終われない。」",
						"chinese": "该死…不能就这样结束。",
						"french": "Mince... Je ne peux pas finir comme ça.",
						"spanish": "Maldita sea... No puedo terminar así.",
						"vietnamese": "Chết tiệt... Không thể kết thúc như thế này được.",
						"thai": "ให้ตายสิ...ฉันจะจบแบบนี้ไม่ได้!",
						"hindi": "धत् तेरे की... मैं इसे ऐसे खत्म नहीं कर सकता।"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "glace",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "glace",
					"content": {
						"korean": "끝은 언제나 오기 마련. 하지만 지금은 아니야.",
						"english": "The end always comes. But not now.",
						"japanese": "「終わりはいつか来るもの。でも、今じゃない。」",
						"chinese": "结局总会到来。但不是现在。",
						"french": "La fin vient toujours. Mais pas maintenant.",
						"spanish": "El final siempre llega. Pero no ahora.",
						"vietnamese": "Cái kết luôn đến. Nhưng không phải bây giờ.",
						"thai": "จุดจบย่อมมาถึงเสมอ แต่ไม่ใช่ตอนนี้",
						"hindi": "अंत हमेशा आता है। लेकिन अभी नहीं।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "설원의 심장부. 끝없는 공허가 그 거대한 그림자를 드리웠다.",
						"english": "The heart of the Snowfield. The endless void casts its vast shadow.",
						"japanese": "雪原の心臓部。終わりなき虚無が、その巨大な影を落とした。",
						"chinese": "雪原的中心。无尽的虚空投下了它巨大的阴影。",
						"french": "Le cœur du Champ de Neige. Le vide sans fin projette son ombre immense.",
						"spanish": "El corazón del Campo de Nieve. El vacío sin fin proyecta su inmensa sombra.",
						"vietnamese": "Trái tim của Tuyết nguyên. Hư vô vô tận đã phủ bóng khổng lồ của nó.",
						"thai": "ใจกลางทุ่งหิมะ ความว่างเปล่าที่ไม่มีที่สิ้นสุดได้ทอดเงาอันมหึมาของมัน",
						"hindi": "बर्फीले मैदान का हृदय। अंतहीन शून्यता ने अपनी विशाल छाया डाली।"
					}
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…부족하다… 더… 설원도… 너희도…",
						"english": "...Not enough... More... The Snowfield too... You too...",
						"japanese": "…足りぬ…もっとだ…雪原も…お前たちも…",
						"chinese": "…不够…还要…雪原也…你们也…",
						"french": "...Pas assez... Plus... Le Champ de Neige aussi... Vous aussi...",
						"spanish": "...Insuficiente... Más... El Campo de Nieve también... Vosotros también...",
						"vietnamese": "…Không đủ… hơn nữa… cả Tuyết nguyên… cả các ngươi…",
						"thai": "...ไม่พอ... เพิ่มอีก... ทั้งทุ่งหิมะ... และพวกเจ้าด้วย...",
						"hindi": "...कम है... और... बर्फीला मैदान भी... तुम भी..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 목소리… 늑대의 굶주림이 아니었어.",
						"english": "This voice... It wasn't the hunger of a wolf.",
						"japanese": "この声…狼の飢えではなかった。",
						"chinese": "这个声音…不是狼的饥饿。",
						"french": "Cette voix… Ce n'était pas la faim du loup.",
						"spanish": "Esta voz... No era el hambre del lobo.",
						"vietnamese": "Giọng nói này… không phải là cơn đói của sói.",
						"thai": "เสียงนี้... ไม่ใช่ความหิวโหยของหมาป่า",
						"hindi": "यह आवाज़... भेड़िये की भूख नहीं थी।"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "glace",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"content": {
						"korean": "보아라. 이것이 너희가 찾던 진실. 세계를 집어삼키는 공허의 본질이다.",
						"english": "Behold. This is the truth you sought. The essence of the void that devours worlds.",
						"japanese": "見よ。これが、お前たちが求めていた真実。世界を飲み込む虚無の本質だ。",
						"chinese": "看吧。这就是你们所寻找的真相。吞噬世界的虚空本质。",
						"french": "Voyez. C'est la vérité que vous cherchiez. L'essence du vide qui dévore les mondes.",
						"spanish": "Contemplad. Esta es la verdad que buscabais. La esencia del vacío que devora mundos.",
						"vietnamese": "Hãy nhìn xem. Đây là sự thật mà các ngươi tìm kiếm. Bản chất của hư vô nuốt chửng thế giới.",
						"thai": "จงดู นี่คือความจริงที่พวกเจ้าค้นหา แก่นแท้ของความว่างเปล่าที่กลืนกินโลก",
						"hindi": "देखो। यही वह सत्य है जिसे तुम खोज रहे थे। यह दुनिया को निगलने वाली शून्यता का सार है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈춰! 더 이상 아무것도 빼앗지 못하게 할 거야!",
						"english": "Stop! I won't let you take anything more!",
						"japanese": "止まれ！これ以上何も奪わせない！",
						"chinese": "住手！我不会让你再夺走任何东西！",
						"french": "Arrête ! Je ne te laisserai plus rien prendre !",
						"spanish": "¡Detente! ¡No te dejaré quitar nada más!",
						"vietnamese": "Dừng lại! Tôi sẽ không để ngươi cướp đi bất cứ thứ gì nữa!",
						"thai": "หยุด! ฉันจะไม่ยอมให้นายพรากอะไรไปอีกแล้ว!",
						"hindi": "रुको! मैं तुम्हें और कुछ नहीं लेने दूंगा!"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "…하찮은… 저항… 이… 공허는… 영원히… 사라지지… 않는다…",
						"english": "...Futile... resistance... This... void... never... disappears...",
						"japanese": "「…無駄な…抵抗…この…虚無は…永遠に…消えない…」",
						"chinese": "...徒劳的...抵抗...这...虚无...永远...不会...消失...",
						"french": "...Résistance... futile... Ce... vide... ne... disparaît... jamais...",
						"spanish": "...Resistencia... inútil... Este... vacío... nunca... desaparecerá...",
						"vietnamese": "...Vô ích... kháng cự... Hư vô này... sẽ không... bao giờ... biến mất...",
						"thai": "...การต่อต้าน...ที่ไร้ค่า...ความว่างเปล่านี้...จะไม่มีวัน...หายไป...",
						"hindi": "...व्यर्थ... प्रतिरोध... यह... शून्य... कभी... नहीं... मिटेगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "온기가… 돌아오는 것 같아.",
						"english": "Warmth... seems to be returning.",
						"japanese": "「温もりが…戻ってくるみたい。」",
						"chinese": "温暖…似乎回来了。",
						"french": "La chaleur... semble revenir.",
						"spanish": "El calor... parece regresar.",
						"vietnamese": "Hơi ấm... dường như đang trở lại.",
						"thai": "ความอบอุ่น...ดูเหมือนจะกลับมาแล้ว",
						"hindi": "गर्मी... लौट रही है।"
					},
					"emotion": "happy"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glace",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "잠시 멈췄을 뿐. 굶주림은… 형태를 바꿀 뿐이다.",
						"english": "Only paused for a moment. Hunger... merely changes form.",
						"japanese": "「一時的に止まっただけ。飢えは…形を変えるだけだ。」",
						"chinese": "只是暂时停顿。饥饿…只会改变形式。",
						"french": "Juste une pause. La faim... ne fait que changer de forme.",
						"spanish": "Solo una pausa. El hambre... solo cambia de forma.",
						"vietnamese": "Chỉ tạm dừng một lát. Cơn đói... chỉ thay đổi hình dạng.",
						"thai": "แค่หยุดชั่วคราว ความหิว...แค่เปลี่ยนรูปไปเท่านั้น",
						"hindi": "बस कुछ पल के लिए रुका है। भूख... केवल रूप बदलती है।"
					},
					"speaker": "glace",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설원에 작은 온기가 스며들었다. 그러나 끝없는 잿빛은 여전했다.",
						"english": "A small warmth seeped into the snowy field. But the endless grey remained.",
						"japanese": "「雪原に小さな温もりが染み込んだ。しかし、終わりのない灰色は相変わらずだった。」",
						"chinese": "一丝暖意渗入了雪原。然而，无尽的灰色依旧。",
						"french": "Une légère chaleur imprégna le champ enneigé. Mais le gris infini persistait.",
						"spanish": "Una pequeña calidez se infiltró en el campo nevado. Pero el gris interminable permaneció.",
						"vietnamese": "Một chút hơi ấm thấm vào cánh đồng tuyết. Nhưng màu xám vô tận vẫn còn đó.",
						"thai": "ความอบอุ่นเล็กๆ ซึมซาบเข้าสู่ทุ่งหิมะ แต่สีเทาที่ไม่มีที่สิ้นสุดยังคงอยู่",
						"hindi": "बर्फ़ीले मैदान में थोड़ी गरमाहट फैल गई। लेकिन अंतहीन भूरा रंग अभी भी वैसा ही था।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "진정한 공허는… 아직 그 모습을 완전히 드러내지 않았다.",
						"english": "The true void... has not yet fully revealed itself.",
						"japanese": "「真の虚無は…まだその姿を完全に現していない。」",
						"chinese": "真正的虚无…尚未完全显现。",
						"french": "Le véritable vide... ne s'est pas encore entièrement révélé.",
						"spanish": "El verdadero vacío... aún no se ha revelado por completo.",
						"vietnamese": "Hư vô thật sự... vẫn chưa hoàn toàn lộ diện.",
						"thai": "ความว่างเปล่าที่แท้จริง...ยังไม่เปิดเผยตัวตนอย่างสมบูรณ์",
						"hindi": "सच्चा शून्य... अभी तक पूरी तरह से प्रकट नहीं हुआ है।"
					},
					"type": "speech"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"공허의 폭주가 멈추자 설원에는 잠시 고요가 찾아왔다.",
			"그러나 잿빛으로 메마른 땅은 돌아오지 않았다. 모든 것이 그곳에 흡수된 듯.",
			"탐험대는 온기를 되찾았지만, 마음속에는 또 다른 차가움이 스며들었다.",
			"그것은 구원이었을까, 아니면 더 큰 파괴의 시작이었을까.",
			"끝을 본 자는 알았다. 진정한 싸움은 아직 시작되지 않았음을."
		],
		"english": [
			"When the void's rampage ceased, a brief quiet settled upon the snowfield.",
			"But the ash-gray, parched land did not return. As if everything had been absorbed into it.",
			"The expedition regained warmth, but another coldness seeped into their hearts.",
			"Was it salvation, or the beginning of greater destruction?",
			"Those who saw the end knew. The true battle had yet to begin."
		],
		"japanese": [
			"虚無の暴走が止まると、雪原には一時的な静寂が訪れた。",
			"しかし、灰色の乾いた大地は戻らなかった。すべてがそこに吸収されたかのように。",
			"探検隊は温もりを取り戻したが、心には別の冷たさが染み込んでいた。",
			"それは救いだったのか、それともさらなる破壊の始まりだったのか。",
			"終わりを見た者は知っていた。真の戦いはまだ始まっていないことを。"
		],
		"chinese": [
			"当虚空的狂暴停止时，雪原上短暂地恢复了宁静。",
			"然而，那灰色的干涸之地并未恢复。仿佛一切都被其吸收了。",
			"探险队重获温暖，但另一种寒冷却渗透进了他们的内心。",
			"那是救赎吗，还是更大破坏的开始？",
			"见过终结的人都知道。真正的战斗尚未开始。"
		],
		"french": [
			"Quand la fureur du vide cessa, un bref silence s'installa sur le champ de neige.",
			"Mais la terre grise et desséchée ne revint pas. Comme si tout y avait été absorbé.",
			"L'expédition retrouva la chaleur, mais une autre froideur s'insinua dans leurs cœurs.",
			"Était-ce le salut, ou le début d'une destruction plus grande ?",
			"Ceux qui avaient vu la fin savaient. La véritable bataille n'avait pas encore commencé."
		],
		"spanish": [
			"Cuando el descontrol del vacío cesó, una breve calma se instaló en el campo de nieve.",
			"Pero la tierra gris y reseca no regresó. Como si todo hubiera sido absorbido por ella.",
			"La expedición recuperó el calor, pero otra frialdad se infiltró en sus corazones.",
			"¿Fue salvación, o el comienzo de una destrucción mayor?",
			"Quienes vieron el final lo sabían. La verdadera batalla aún no había comenzado."
		],
		"vietnamese": [
			"Khi cơn thịnh nộ của hư không dừng lại, tuyết nguyên chìm vào sự tĩnh lặng tạm thời.",
			"Nhưng vùng đất khô cằn màu tro xám đã không trở lại. Dường như mọi thứ đã bị nó hấp thụ.",
			"Đoàn thám hiểm đã tìm lại được hơi ấm, nhưng một sự lạnh lẽo khác lại thấm vào lòng họ.",
			"Đó là sự cứu rỗi, hay là khởi đầu của một sự hủy diệt lớn hơn?",
			"Người đã nhìn thấy kết thúc đều biết. Cuộc chiến thực sự vẫn chưa bắt đầu."
		],
		"thai": [
			"เมื่อการอาละวาดของความว่างเปล่าหยุดลง ความเงียบสงบก็เข้ามาปกคลุมทุ่งหิมะชั่วขณะ",
			"แต่ผืนดินที่แห้งแล้งสีเทาเถ้าก็ไม่กลับคืนมา ราวกับทุกสิ่งถูกดูดกลืนเข้าไปในนั้น",
			"คณะสำรวจได้รับความอบอุ่นกลับคืนมา แต่ความเย็นอีกอย่างกลับซึมซาบเข้าไปในใจพวกเขา",
			"นั่นคือความรอด หรือจุดเริ่มต้นของการทำลายล้างที่ยิ่งใหญ่กว่ากันแน่",
			"ผู้ที่ได้เห็นจุดจบต่างรู้ดีว่า การต่อสู้ที่แท้จริงยังไม่ได้เริ่มต้นขึ้น"
		],
		"hindi": [
			"जब शून्यता का उन्माद रुका, तो हिमक्षेत्र पर कुछ देर के लिए शांति छा गई।",
			"लेकिन राख-धूसर, सूखी ज़मीन वापस नहीं आई। मानो सब कुछ उसमें समा गया हो।",
			"अभियान दल ने गर्मी वापस पा ली, लेकिन उनके दिलों में एक और ठंडक समा गई।",
			"क्या वह मुक्ति थी, या एक बड़ी तबाही की शुरुआत?",
			"जिसने अंत देखा था, वह जानता था। असली लड़ाई अभी शुरू नहीं हुई थी।"
		]
	},
	"prologue": {
		"korean": [
			"설원은 죽어가고 있었다. 끝없이 굶주리는 존재가 모든 온기를 빨아들였다.",
			"그것은 단지 늑대의 굶주림이 아니었다. 세상의 끝을 알리는 공허였다.",
			"탐험대는 온기를 쫓아왔다. 그러나 그들의 발밑마저 차가워지고 있었다.",
			"마지막 순간, 그들은 깨달았다. 설원도, 그리고 자신들마저 삼켜질 것이라는 것을."
		],
		"english": [
			"The snowfield was dying. An endlessly hungry entity devoured all warmth.",
			"It wasn't merely a wolf's hunger. It was the void announcing the world's end.",
			"The expedition followed the warmth. But even beneath their feet, it grew cold.",
			"In their final moments, they realized. Both the snowfield and themselves would be consumed."
		],
		"japanese": [
			"雪原は死につつあった。限りなく飢えた存在が、すべての温もりを吸い取っていた。",
			"それはただの狼の飢えではなかった。世界の終わりを告げる虚無だった。",
			"探検隊は温もりを追ってきた。しかし、彼らの足元さえも冷たくなっていた。",
			"最期の瞬間、彼らは悟った。雪原も、そして自分たちさえも呑み込まれることを。"
		],
		"chinese": [
			"雪原正在死去。一个永无止境的饥饿存在吞噬了所有的温暖。",
			"那不只是狼的饥饿。那是预示世界末日的虚空。",
			"探险队追逐着温暖而来。然而，连他们的脚下也变得冰冷。",
			"在最后一刻，他们才意识到。雪原和他们自己都将被吞噬。"
		],
		"french": [
			"Le champ de neige mourait. Une entité affamée sans fin aspirait toute chaleur.",
			"Ce n'était pas seulement la faim d'un loup. C'était le vide annonçant la fin du monde.",
			"L'expédition a suivi la chaleur. Mais même sous leurs pieds, il faisait de plus en plus froid.",
			"Au dernier instant, ils réalisèrent. Le champ de neige, et eux-mêmes, seraient engloutis."
		],
		"spanish": [
			"El campo de nieve estaba muriendo. Una entidad infinitamente hambrienta absorbía todo el calor.",
			"No era solo el hambre de un lobo. Era el vacío que anunciaba el fin del mundo.",
			"La expedición persiguió el calor. Pero incluso bajo sus pies, se estaba volviendo frío.",
			"En el último momento, se dieron cuenta. Tanto el campo de nieve como ellos mismos serían devorados."
		],
		"vietnamese": [
			"Tuyết nguyên đang chết dần. Một thực thể đói khát không ngừng đã hút cạn mọi hơi ấm.",
			"Đó không chỉ là cơn đói của một con sói. Đó là sự trống rỗng báo hiệu ngày tận thế.",
			"Đoàn thám hiểm tìm đến hơi ấm. Nhưng ngay cả dưới chân họ, sự lạnh giá cũng đang lan đến.",
			"Vào khoảnh khắc cuối cùng, họ nhận ra. Cả tuyết nguyên và chính họ đều sẽ bị nuốt chửng."
		],
		"thai": [
			"ทุ่งหิมะกำลังจะตาย สิ่งมีชีวิตที่หิวโหยไม่สิ้นสุดได้กลืนกินความอบอุ่นทั้งหมดไป",
			"มันไม่ใช่เพียงความหิวโหยของหมาป่า แต่มันคือความว่างเปล่าที่ประกาศจุดจบของโลก",
			"คณะสำรวจติดตามความอบอุ่นมา แต่แม้กระทั่งใต้เท้าของพวกเขาเองก็ยังเย็นยะเยือกขึ้นเรื่อยๆ",
			"ในช่วงเวลาสุดท้าย พวกเขาก็ตระหนักว่า ทั้งทุ่งหิมะและตัวพวกเขาเองจะถูกกลืนกิน"
		],
		"hindi": [
			"हिमक्षेत्र मर रहा था। एक अंतहीन भूखी सत्ता सारी गर्माहट सोख रही थी。",
			"वह सिर्फ भेड़िये की भूख नहीं थी। वह दुनिया के अंत की घोषणा करने वाली शून्यता थी।",
			"अभियान दल गर्मी का पीछा कर रहा था। लेकिन उनके पैरों के नीचे भी ठंड बढ़ती जा रही थी।",
			"अंतिम क्षण में, उन्होंने महसूस किया। हिमक्षेत्र और वे स्वयं भी निगल लिए जाएँगे।"
		]
	}
} as const;
