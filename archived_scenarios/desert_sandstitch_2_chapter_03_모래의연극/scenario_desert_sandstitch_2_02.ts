export const scenario_desert_sandstitch_2_02 = {
	"scenario_id": "desert_sandstitch_2_02",
	"order": 2,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kemet": {
			"id": "mon_2f8a1701-571b-40b5-92d9-69aa973cef18",
			"name": {
				"korean": "케메트",
				"english": "Kemet",
				"japanese": "ケメト",
				"chinese": "凯麦特",
				"french": "Kemet",
				"spanish": "Kemet",
				"vietnamese": "Kemet",
				"thai": "เคเมต",
				"hindi": "केमेट"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fd9e93e0-2874-4647-0076-839718949500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8c3f2690-e8a9-44f5-4527-d8f8d4ea2800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "황금빛 칼날 조각들이 모래 위에 흩어져 있었다. 기묘한 아름다움이었다.",
						"english": "Golden blade shards lay scattered on the sand. A strange beauty.",
						"japanese": "黄金の刃の破片が砂の上に散らばっていた。奇妙な美しさだった。",
						"chinese": "金色的刀刃碎片散落在沙子上。一种奇异的美。",
						"french": "Des éclats de lame dorés jonchaient le sable. Une étrange beauté.",
						"spanish": "Fragmentos de hoja dorados yacían esparcidos en la arena. Una belleza extraña.",
						"vietnamese": "Những mảnh lưỡi dao vàng óng nằm rải rác trên cát. Một vẻ đẹp kỳ lạ.",
						"thai": "ชิ้นส่วนใบมีดสีทองกระจัดกระจายอยู่บนผืนทราย ช่างเป็นความงามที่แปลกตา",
						"hindi": "सुनहरे ब्लेड के टुकड़े रेत पर बिखरे पड़े थे। एक अजीब सुंदरता।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게 뭐야? 황금 칼날 조각들인가?",
						"english": "What's that? Golden blade shards?",
						"japanese": "あれは何だ？黄金の刃の破片か？",
						"chinese": "那是什么？金色的刀刃碎片吗？",
						"french": "Qu'est-ce que c'est ? Des éclats de lame dorés ?",
						"spanish": "¿Qué es eso? ¿Fragmentos de hoja dorados?",
						"vietnamese": "Cái gì thế kia? Mảnh lưỡi dao vàng sao?",
						"thai": "นั่นอะไรน่ะ? ชิ้นส่วนใบมีดสีทองเหรอ?",
						"hindi": "वह क्या है? सुनहरे ब्लेड के टुकड़े?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "드디어! '위대한 이야기'의 중요한 소품이 여기 있었어!",
						"english": "Finally! An important prop from 'The Great Tale' was here!",
						"japanese": "ついに！「偉大なる物語」の重要な小道具がここにあった！",
						"chinese": "终于！“伟大的故事”的重要道具就在这里！",
						"french": "Enfin ! Un accessoire important de la 'Grande Histoire' était ici !",
						"spanish": "¡Por fin! ¡Un accesorio importante de 'La Gran Historia' estaba aquí!",
						"vietnamese": "Cuối cùng! Một đạo cụ quan trọng từ 'Câu Chuyện Vĩ Đại' đã ở đây!",
						"thai": "ในที่สุด! อุปกรณ์สำคัญจาก 'เรื่องราวอันยิ่งใหญ่' อยู่ที่นี่แล้ว!",
						"hindi": "आखिरकार! 'महान कहानी' का एक महत्वपूर्ण सहारा यहीं था!"
					}
				},
				{
					"emotion": "happy",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "이 칼날들이 날 부르는 것 같지 않아? 심장이 쿵쾅거려!",
						"english": "Don't these blades feel like they're calling me? My heart is pounding!",
						"japanese": "この刃が私を呼んでいるように感じないか？心臓がドキドキする！",
						"chinese": "这些刀刃是不是在召唤我？我的心跳加速了！",
						"french": "Ces lames ne m'appellent-elles pas ? Mon cœur bat la chamade !",
						"spanish": "¿No sientes que estas hojas me están llamando? ¡Mi corazón late con fuerza!",
						"vietnamese": "Những lưỡi dao này không phải đang gọi tôi sao? Tim tôi đập thình thịch!",
						"thai": "ใบมีดพวกนี้ไม่เหมือนกำลังเรียกฉันอยู่เหรอ? ใจฉันเต้นแรงเลย!",
						"hindi": "क्या ये ब्लेड मुझे बुलाते हुए महसूस नहीं होते? मेरा दिल धड़क रहा है!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…근데, 저기 시든 식물들 보여? 칼날 근처만 에너지를 잃은 것 같은데.",
						"english": "...But, do you see those withered plants over there? It looks like only the areas near the blades have lost energy.",
						"japanese": "…でも、あそこの枯れた植物が見えるか？刃の近くだけエネルギーを失ったように見えるが。",
						"chinese": "……但是，你看到那里枯萎的植物了吗？好像只有刀刃附近失去了能量。",
						"french": "...Mais, tu vois ces plantes fanées là-bas ? On dirait que seules les zones proches des lames ont perdu leur énergie.",
						"spanish": "...Pero, ¿ves esas plantas marchitas allí? Parece que solo las áreas cercanas a las hojas han perdido energía.",
						"vietnamese": "...Nhưng, bạn có thấy những cây héo úa đằng kia không? Có vẻ như chỉ những khu vực gần lưỡi dao mới mất năng lượng.",
						"thai": "...แต่ว่า เห็นต้นไม้เหี่ยวเฉาตรงนั้นไหม? ดูเหมือนแค่บริเวณใกล้ใบมีดเท่านั้นที่เสียพลังงานไป",
						"hindi": "...लेकिन, क्या तुम्हें वहाँ मुरझाए हुए पौधे दिख रहे हैं? ऐसा लगता है कि केवल ब्लेड के पास के क्षेत्रों ने ही ऊर्जा खो दी है।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 소품은 아닌 것 같아.",
						"english": "It doesn't seem like a simple prop.",
						"japanese": "単なる小道具ではないようだ。",
						"chinese": "它似乎不是一个简单的道具。",
						"french": "Cela ne semble pas être un simple accessoire.",
						"spanish": "No parece ser un simple accesorio.",
						"vietnamese": "Nó không có vẻ là một đạo cụ đơn thuần.",
						"thai": "ดูเหมือนจะไม่ใช่อุปกรณ์ธรรมดา",
						"hindi": "यह एक साधारण सहारा नहीं लगता।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "kemet",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이걸 모아야 해! '이야기'가 우리를 부르고 있어!",
						"english": "We must collect this! The 'story' is calling us!",
						"japanese": "これらを集めなければ！「物語」が私たちを呼んでいる！",
						"chinese": "我们必须收集这个！“故事”在召唤我们！",
						"french": "Nous devons le collectionner ! L'« histoire » nous appelle !",
						"spanish": "¡Debemos recolectarlo! ¡La 'historia' nos está llamando!",
						"vietnamese": "Chúng ta phải thu thập cái này! 'Câu chuyện' đang gọi chúng ta!",
						"thai": "เราต้องรวบรวมสิ่งนี้! 'เรื่องราว' กำลังเรียกหาเราอยู่!",
						"hindi": "हमें इसे इकट्ठा करना होगा! 'कहानी' हमें बुला रही है!"
					},
					"emotion": "angry",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "케메트, 너무 흥분한 것 같아. 저 칼날은 위험해 보여.",
						"english": "Kemet, you seem too excited. That blade looks dangerous.",
						"japanese": "ケメット、興奮しすぎのようだ。あの刃は危険に見える。",
						"chinese": "凯麦特，你似乎太兴奋了。那把刀看起来很危险。",
						"french": "Kemet, tu sembles trop excité. Cette lame a l'air dangereuse.",
						"spanish": "Kemet, pareces demasiado emocionado. Esa hoja parece peligrosa.",
						"vietnamese": "Kemet, bạn có vẻ quá phấn khích. Lưỡi dao đó trông nguy hiểm.",
						"thai": "เคเมต เจ้าดูตื่นเต้นเกินไปแล้วนะ. คมดาบนั้นดูอันตราย.",
						"hindi": "केमेट, तुम बहुत उत्साहित लग रहे हो। वह ब्लेड खतरनाक दिख रही है।"
					}
				},
				{
					"speaker": "kemet",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "위험? 이건 위대한 서사의 일부야! 내가 직접 이 칼날의 주인이 될 거야!",
						"english": "Dangerous? This is part of a grand epic! I'll be the master of this blade myself!",
						"japanese": "危険？これは壮大な物語の一部だ！私がこの刃の主になるんだ！",
						"chinese": "危险？这是宏大叙事的一部分！我将亲自成为这把刀的主人！",
						"french": "Dangereux ? Cela fait partie d'une grande épopée ! Je serai moi-même le maître de cette lame !",
						"spanish": "¡Peligroso? ¡Esto es parte de una gran epopeya! ¡Yo mismo seré el dueño de esta hoja!",
						"vietnamese": "Nguy hiểm ư? Đây là một phần của sử thi vĩ đại! Chính ta sẽ là chủ nhân của lưỡi dao này!",
						"thai": "อันตราย? นี่เป็นส่วนหนึ่งของมหากาพย์อันยิ่งใหญ่! ข้าจะเป็นเจ้าของคมดาบนี้ด้วยตัวเอง!",
						"hindi": "खतरनाक? यह एक महान गाथा का हिस्सा है! मैं खुद इस ब्लेड का मालिक बनूंगा!"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "빛나는 만큼, 그림자도 짙어지는군.",
						"english": "As much as it shines, the shadows deepen.",
						"japanese": "輝くほど、影もまた深まるな。",
						"chinese": "它越是闪耀，影子也越是深沉。",
						"french": "Autant elle brille, autant les ombres s'épaississent.",
						"spanish": "Cuanto más brilla, más profundas se vuelven las sombras.",
						"vietnamese": "Càng rực rỡ, bóng tối càng dày đặc.",
						"thai": "ยิ่งส่องประกายมากเท่าไหร่, เงาก็ยิ่งลึกเท่านั้น.",
						"hindi": "जितना यह चमकता है, उतनी ही छाया गहरी होती जाती है।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "자, 어서 모으자고!",
						"english": "Come on, let's collect them!",
						"japanese": "さあ、早く集めよう！",
						"chinese": "来吧，我们快收集起来！",
						"french": "Allez, collectons-les !",
						"spanish": "¡Vamos, recolectémoslos!",
						"vietnamese": "Nào, chúng ta hãy thu thập chúng!",
						"thai": "เอาล่ะ, รีบไปรวบรวมกันเถอะ!",
						"hindi": "चलो, इन्हें इकट्ठा करते हैं!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…감히, 나의 무대를 침범하다니!",
						"english": "...How dare you invade my stage!",
						"japanese": "…よくも、私の舞台を侵すとは！",
						"chinese": "……竟敢侵犯我的舞台！",
						"french": "...Comment osez-vous envahir ma scène !",
						"spanish": "...¡Cómo te atreves a invadir mi escenario!",
						"vietnamese": "...Dám xâm phạm sân khấu của ta!",
						"thai": "...บังอาจบุกรุกเวทีของข้า!",
						"hindi": "...तुम्हारी हिम्मत कैसे हुई मेरे मंच पर अतिक्रमण करने की!"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "넌 누구야!",
						"english": "Who are you!",
						"japanese": "お前は誰だ！",
						"chinese": "你到底是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 이 '이야기'의 진정한 '배우'. 너희는 그저 소품일 뿐!",
						"english": "I am the true 'actor' of this 'story'. You are merely props!",
						"japanese": "私はこの「物語」の真の「役者」。お前たちはただの小道具に過ぎない！",
						"chinese": "我才是这个“故事”的真正“演员”。你们不过是道具罢了！",
						"french": "Je suis le véritable « acteur » de cette « histoire ». Vous n'êtes que des accessoires !",
						"spanish": "Soy el verdadero 'actor' de esta 'historia'. ¡Ustedes son meros accesorios!",
						"vietnamese": "Ta là 'diễn viên' chân chính của 'câu chuyện' này. Các ngươi chỉ là đạo cụ thôi!",
						"thai": "ข้าคือ 'นักแสดง' ที่แท้จริงของ 'เรื่องราว' นี้. พวกเจ้าเป็นเพียงแค่ฉากประกอบเท่านั้น!",
						"hindi": "मैं इस 'कहानी' का असली 'अभिनेता' हूँ। तुम सिर्फ़ सामान हो!"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신은… '이야기'에 없는 인물인데!",
						"english": "You are... a character not in the 'story'!",
						"japanese": "あなたは…「物語」にいない人物なのに！",
						"chinese": "你是……“故事”中不存在的人物！",
						"french": "Vous êtes… un personnage qui n'est pas dans l'« histoire » !",
						"spanish": "¡Tú eres... un personaje que no está en la 'historia'!",
						"vietnamese": "Ngươi là... một nhân vật không có trong 'câu chuyện'!",
						"thai": "ท่านเป็น... ตัวละครที่ไม่ได้อยู่ใน 'เรื่องราว' นี่นา!",
						"hindi": "तुम... 'कहानी' में न होने वाले पात्र हो!"
					},
					"speaker": "kemet",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기이한 존재가 칼날을 지키듯 나타났다. 주변의 생명체들이 비명을 지르듯 스러졌다.",
						"english": "A bizarre entity appeared as if guarding the blade. Nearby creatures shrieked and withered.",
						"japanese": "奇妙な存在が刃を守るように現れた。周囲の生命体は悲鳴を上げながら倒れていった。",
						"chinese": "一个奇异的存在仿佛守护着刀刃般出现。周围的生命体像尖叫般消逝了。",
						"french": "Une entité étrange apparut comme pour garder la lame. Les créatures environnantes hurlèrent et dépérirent.",
						"spanish": "Una extraña entidad apareció como protegiendo la hoja. Las criaturas cercanas gritaron y se marchitaron.",
						"vietnamese": "Một thực thể kỳ lạ xuất hiện như thể đang bảo vệ lưỡi dao. Các sinh vật xung quanh kêu thét rồi héo úa.",
						"thai": "สิ่งมีชีวิตประหลาดปรากฏขึ้นราวกับกำลังเฝ้าคมดาบ. สิ่งมีชีวิตรอบข้างกรีดร้องและร่วงโรยลงไป.",
						"hindi": "एक अजीबोगरीब अस्तित्व ब्लेड की रक्षा करते हुए प्रकट हुआ। आस-पास के जीव चीखते हुए मुरझा गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "칼날이 에너지를 빨아들이고 있어!",
						"english": "The blade is absorbing energy!",
						"japanese": "刃がエネルギーを吸い込んでいる！",
						"chinese": "刀刃正在吸收能量！",
						"french": "La lame absorbe l'énergie !",
						"spanish": "¡La hoja está absorbiendo energía!",
						"vietnamese": "Lưỡi kiếm đang hút năng lượng!",
						"thai": "คมดาบกำลังดูดซับพลังงาน!",
						"hindi": "ब्लेड ऊर्जा सोख रहा है!"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "위험했어…",
						"english": "That was close...",
						"japanese": "危なかった…",
						"chinese": "好险…",
						"french": "C'était dangereux...",
						"spanish": "Estuvo cerca...",
						"vietnamese": "Nguy hiểm thật...",
						"thai": "เกือบไปแล้ว...",
						"hindi": "बाल-बाल बचे…"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그 존재가… 나를…",
						"english": "...That entity... it me...",
						"japanese": "…あの存在が…私を…",
						"chinese": "…那个存在…我…",
						"french": "...Cette entité... moi...",
						"spanish": "...Esa entidad... a mí...",
						"vietnamese": "...Thực thể đó... tôi...",
						"thai": "...สิ่งนั้น...ฉัน...",
						"hindi": "...वह अस्तित्व... मुझे..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "케메트! 괜찮아? 정신 차려!",
						"english": "Kemet! Are you okay? Snap out of it!",
						"japanese": "ケメト！大丈夫か？しっかりしろ！",
						"chinese": "凯麦特！你还好吗？清醒一点！",
						"french": "Kemet ! Ça va ? Reprends-toi !",
						"spanish": "¡Kemet! ¿Estás bien? ¡Reacciona!",
						"vietnamese": "Kemet! Cậu ổn không? Tỉnh lại đi!",
						"thai": "เคเมต! เจ้าไม่เป็นไรใช่ไหม? ได้สติหน่อย!",
						"hindi": "केमेट! तुम ठीक हो? होश में आओ!"
					},
					"speaker": "character_1",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "kemet",
					"type": "speech",
					"content": {
						"korean": "…'이야기'는… 나에게… 새로운 역할을 주려는 건가…",
						"english": "...Is the 'Story'... trying to give me... a new role...?",
						"japanese": "…「物語」は…私に…新しい役割を与えようとしているのか…",
						"chinese": "…“故事”是…想给我…一个新角色吗…",
						"french": "...L''Histoire'... essaie-t-elle de me donner... un nouveau rôle...?",
						"spanish": "...¿La 'Historia'... está tratando de darme... un nuevo papel...?",
						"vietnamese": "...Phải chăng 'Câu chuyện'... đang muốn giao cho tôi... một vai trò mới...?",
						"thai": "...'เรื่องราว'...กำลังจะให้...บทบาทใหม่แก่ฉันงั้นหรือ...",
						"hindi": "...क्या 'कहानी'... मुझे... एक नई भूमिका देना चाहती है...?"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니야! 그건 연극이 아니라 함정이야!",
						"english": "No! That's not a play, it's a trap!",
						"japanese": "違う！それは演劇ではなく罠だ！",
						"chinese": "不！那不是演戏，那是陷阱！",
						"french": "Non ! Ce n'est pas une pièce, c'est un piège !",
						"spanish": "¡No! ¡Eso no es una obra, es una trampa!",
						"vietnamese": "Không! Đó không phải là vở kịch, đó là một cái bẫy!",
						"thai": "ไม่ใช่! นั่นไม่ใช่การแสดง แต่เป็นกับดัก!",
						"hindi": "नहीं! वह नाटक नहीं, एक जाल है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "케메트의 눈동자에 알 수 없는 그림자가 드리워졌다.",
						"english": "An unknown shadow fell across Kemet's eyes.",
						"japanese": "ケメトの瞳に、知られざる影が落ちた。",
						"chinese": "凯麦特的眼中蒙上了一层未知的阴影。",
						"french": "Une ombre inconnue tomba sur les yeux de Kemet.",
						"spanish": "Una sombra desconocida cubrió los ojos de Kemet.",
						"vietnamese": "Một bóng tối không rõ bao phủ đôi mắt của Kemet.",
						"thai": "เงาลึกลับทอดลงในดวงตาของเคเมต",
						"hindi": "केमेट की आँखों पर एक अनजानी छाया पड़ गई।"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이건… 끝이… 아니야… '대본'은… 계속된다…",
						"english": "...This... isn't... the end... The 'script'... continues...",
						"japanese": "…これは…終わり…じゃない…『台本』は…続く…",
						"chinese": "…这…不是…结束…‘剧本’…仍在继续…",
						"french": "…Ce n'est… pas la fin… Le 'scénario'… continue…",
						"spanish": "…Esto… no es… el final… El 'guion'… continúa…",
						"vietnamese": "...Đây... không phải... kết thúc... 'Kịch bản'... vẫn tiếp diễn...",
						"thai": "...นี่... ไม่ใช่... จุดจบ... 'บทละคร'... ยังคงดำเนินต่อไป...",
						"hindi": "…यह… अंत… नहीं है… 'पटकथा'… जारी है…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 사라지자, 황금빛 칼날 조각들이 빛을 잃었다.",
						"english": "As the colossal shadow vanished, fragments of the golden blade lost their luster.",
						"japanese": "巨大な影が消え去ると、黄金の刃の破片は光を失った。",
						"chinese": "随着巨大的影子消失，金色的刀刃碎片也失去了光泽。",
						"french": "Alors que l'ombre colossale disparaissait, les fragments de la lame dorée perdirent leur éclat.",
						"spanish": "Cuando la sombra colosal se desvaneció, los fragmentos de la hoja dorada perdieron su brillo.",
						"vietnamese": "Khi bóng tối khổng lồ biến mất, những mảnh lưỡi dao vàng cũng mất đi ánh sáng.",
						"thai": "เมื่อเงาขนาดมหึมาหายไป ชิ้นส่วนดาบสีทองก็สิ้นแสง",
						"hindi": "जैसे ही विशाल छाया गायब हुई, सुनहरी तलवार के टुकड़े अपनी चमक खो बैठे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "kemet",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…내 역할은… 끝난 건가…",
						"english": "...Is my role... over...?",
						"japanese": "…私の役割は…終わったのか…",
						"chinese": "…我的角色…结束了吗…",
						"french": "…Mon rôle est-il… terminé… ?",
						"spanish": "…¿Mi papel… ha terminado…?",
						"vietnamese": "...Vai trò của ta... đã kết thúc sao...?",
						"thai": "...บทบาทของข้า... จบลงแล้วหรือ...?",
						"hindi": "…क्या मेरी भूमिका… समाप्त हो गई है…?"
					},
					"emotion": "sad",
					"speaker": "kemet"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "케메트…",
						"english": "Kemet...",
						"japanese": "ケメト…",
						"chinese": "凯麦特…",
						"french": "Kemet…",
						"spanish": "Kemet…",
						"vietnamese": "Kemet…",
						"thai": "เคเมท…",
						"hindi": "केमेट…"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "하지만 사막의 심장부에서는 또 다른 '이야기'가 시작될 준비를 하고 있었다.",
						"english": "But deep within the desert's heart, another 'story' was preparing to begin.",
						"japanese": "しかし、砂漠の心臓部では、別の『物語』が始まる準備をしていた。",
						"chinese": "然而，在沙漠的深处，另一个‘故事’正准备开始。",
						"french": "Mais au cœur du désert, une autre 'histoire' s'apprêtait à commencer.",
						"spanish": "Pero en lo más profundo del corazón del desierto, otra 'historia' se preparaba para comenzar.",
						"vietnamese": "Nhưng sâu trong lòng sa mạc, một 'câu chuyện' khác đang chuẩn bị bắt đầu.",
						"thai": "แต่ลึกเข้าไปในใจกลางทะเลทราย 'เรื่องราว' อื่นกำลังเตรียมพร้อมที่จะเริ่มต้น",
						"hindi": "लेकिन रेगिस्तान के दिल में, एक और 'कहानी' शुरू होने की तैयारी कर रही थी।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "kemet",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 '이야기'를 방해하고 있어.",
						"english": "You are interfering with the 'Story'.",
						"japanese": "お前たちは「物語」を邪魔している。",
						"chinese": "你们正在妨碍“故事”。",
						"french": "Vous interférer avec l''Histoire'.",
						"spanish": "Están interfiriendo con la 'Historia'.",
						"vietnamese": "Các ngươi đang cản trở 'Câu chuyện'.",
						"thai": "พวกเจ้ากำลังขัดขวาง 'เรื่องราว'",
						"hindi": "तुम 'कहानी' में बाधा डाल रहे हो।"
					},
					"speaker": "kemet",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "케메트! 정신 차려! 저 칼날에 홀린 거야!",
						"english": "Kemet! Snap out of it! That blade has enchanted you!",
						"japanese": "ケメト！しっかりしろ！あの刃に魅入られているんだ！",
						"chinese": "凯麦特！清醒一点！你被那刀刃迷惑了！",
						"french": "Kemet ! Reprends-toi ! Cette lame t'a ensorcelé !",
						"spanish": "¡Kemet! ¡Reacciona! ¡Esa hoja te ha hechizado!",
						"vietnamese": "Kemet! Tỉnh lại đi! Cậu bị lưỡi kiếm đó mê hoặc rồi!",
						"thai": "เคเมต! ได้สติหน่อย! เจ้าถูกดาบนั่นสะกดจิตแล้ว!",
						"hindi": "केमेट! होश में आओ! तुम उस ब्लेड से मोहित हो गए हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "드디어 만났군, 진정한 주연들.",
						"english": "Finally, we meet, true protagonists.",
						"japanese": "やっと会えたな、真の主役たちよ。",
						"chinese": "终于见到你们了，真正的“主角”们。",
						"french": "Enfin, nous nous rencontrons, véritables protagonistes.",
						"spanish": "Por fin nos conocemos, verdaderos protagonistas.",
						"vietnamese": "Cuối cùng cũng gặp được các ngươi, những nhân vật chính thực sự.",
						"thai": "ในที่สุดก็ได้พบกันเสียที, เหล่าตัวเอกที่แท้จริง.",
						"hindi": "आखिरकार मिल ही गए, सच्चे नायक।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희의 마지막 장을… 내가 직접 써주지.",
						"english": "I'll write your final chapter myself.",
						"japanese": "お前たちの最後の章は…この私が書いてやろう。",
						"chinese": "你们的最后一章…就由我来亲手谱写吧。",
						"french": "Votre dernier chapitre… je l'écrirai moi-même.",
						"spanish": "Vuestro último capítulo… lo escribiré yo mismo.",
						"vietnamese": "Chương cuối của các ngươi… ta sẽ tự tay viết nên.",
						"thai": "บทสุดท้ายของพวกเจ้า… ข้าจะเขียนมันเอง",
						"hindi": "तुम्हारा अंतिम अध्याय… मैं खुद लिखूँगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그 '이야기'의 꼭두각시는 되지 않아!",
						"english": "I won't be a puppet of that 'story'!",
						"japanese": "あの『物語』の操り人形にはならない！",
						"chinese": "我才不会成为那个‘故事’的傀儡！",
						"french": "Je ne serai pas la marionnette de cette 'histoire' !",
						"spanish": "¡No seré una marioneta de esa 'historia'!",
						"vietnamese": "Ta sẽ không trở thành con rối của 'câu chuyện' đó!",
						"thai": "ข้าจะไม่เป็นหุ่นเชิดของ 'เรื่องราว' นั้น!",
						"hindi": "मैं उस 'कहानी' की कठपुतली नहीं बनूँगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…아직 '대본'을 제대로 이해하지 못했군.",
						"english": "...You haven't quite grasped the 'script' yet.",
						"japanese": "…まだ『台本』をきちんと理解していないようだな。",
						"chinese": "…你还没有完全理解‘剧本’呢。",
						"french": "…Tu n'as pas encore tout à fait saisi le 'scénario'.",
						"spanish": "…Aún no has comprendido del todo el 'guion'.",
						"vietnamese": "...Ngươi vẫn chưa hiểu rõ 'kịch bản' nhỉ.",
						"thai": "...เจ้ายังไม่เข้าใจ 'บทละคร' ดีพอสินะ",
						"hindi": "…तुमने अभी तक 'पटकथा' को ठीक से नहीं समझा है।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "kemet"
				},
				{
					"speaker": "kemet",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…나는… 더 완벽한 '배우'가 될 거야…",
						"english": "...I will... become... a more perfect 'actor'...",
						"japanese": "…私は…もっと完璧な『役者』になる…",
						"chinese": "…我将…成为…一个更完美的‘演员’…",
						"french": "…Je… deviendrai… un 'acteur' plus parfait…",
						"spanish": "…Yo… me convertiré… en un 'actor' más perfecto…",
						"vietnamese": "...Ta sẽ... trở thành... một 'diễn viên' hoàn hảo hơn...",
						"thai": "...ข้าจะ... เป็น 'นักแสดง' ที่สมบูรณ์แบบยิ่งขึ้น...",
						"hindi": "…मैं… एक और अधिक उत्तम 'अभिनेता' बनूँगा…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…젠장. 이렇게 끝낼 순 없어!",
						"english": "...Damn it. I can't end it like this!",
						"japanese": "…くそ。こんな終わり方はできない！",
						"chinese": "…该死。不能就这样结束！",
						"french": "…Mince. Je ne peux pas finir comme ça !",
						"spanish": "…¡Maldita sea! ¡No puedo terminar así!",
						"vietnamese": "...Chết tiệt. Không thể kết thúc như thế này được!",
						"thai": "...บ้าจริง. จะจบแบบนี้ไม่ได้!",
						"hindi": "…धिक्कार है। मैं इसे ऐसे खत्म नहीं कर सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막의 심장부, 황금빛 유혹이 피어났다.",
			"탐험가 케메트, 그 빛에 홀려 진실을 외면하다.",
			"칼날 조각마다 스며든 알 수 없는 생명력, 혹은 죽음.",
			"이것은 '위대한 이야기'의 시작인가, 아니면 끝인가."
		],
		"english": [
			"In the heart of the desert, a golden temptation bloomed.",
			"Explorer Kemet, entranced by its glow, turned a blind eye to the truth.",
			"Each blade shard infused with an unknown life force, or death.",
			"Is this the beginning of 'The Great Tale', or its end?"
		],
		"japanese": [
			"砂漠の心臓部で、黄金の誘惑が芽生えた。",
			"探検家ケメトは、その輝きに魅せられ、真実から目を背けた。",
			"刃の破片ひとつひとつに、未知の生命力、あるいは死が宿っていた。",
			"これは「偉大なる物語」の始まりか、それとも終わりか。"
		],
		"chinese": [
			"在沙漠的心脏，金色的诱惑悄然绽放。",
			"探险家凯米特，被其光芒迷惑，对真相视而不见。",
			"每一片刀刃都渗入了未知的生命力，或是死亡。",
			"这是“伟大的故事”的开始，还是结束？"
		],
		"french": [
			"Au cœur du désert, une tentation dorée fleurissait.",
			"L'explorateur Kemet, ensorcelé par cette lumière, ignorait la vérité.",
			"Chaque éclat de lame était imprégné d'une force vitale inconnue, ou de mort.",
			"Est-ce le début de la 'Grande Histoire', ou sa fin ?"
		],
		"spanish": [
			"En el corazón del desierto, una tentación dorada floreció.",
			"El explorador Kemet, cautivado por su resplandor, ignoró la verdad.",
			"Cada fragmento de hoja infundido con una fuerza vital desconocida, o la muerte.",
			"¿Es este el comienzo de 'La Gran Historia', o su fin?"
		],
		"vietnamese": [
			"Tại trái tim sa mạc, một cám dỗ vàng óng nở rộ.",
			"Nhà thám hiểm Kemet, bị ánh sáng mê hoặc, quay lưng lại với sự thật.",
			"Mỗi mảnh lưỡi dao thấm đẫm một sinh lực bí ẩn, hay là cái chết.",
			"Đây là khởi đầu của 'Câu Chuyện Vĩ Đại', hay là kết thúc?"
		],
		"thai": [
			"ณ ใจกลางทะเลทราย ความเย้ายวนสีทองได้เบ่งบาน",
			"เคเมต นักสำรวจ ผู้หลงใหลในแสงนั้น เมินเฉยต่อความจริง",
			"ทุกชิ้นส่วนใบมีด แทรกซึมด้วยพลังชีวิตที่ไม่รู้จัก หรือความตาย",
			"นี่คือจุดเริ่มต้นของ 'เรื่องราวอันยิ่งใหญ่' หรือจุดจบกันแน่"
		],
		"hindi": [
			"रेगिस्तान के दिल में, एक सुनहरा लालच खिल उठा।",
			"खोजकर्ता केमेट, उसकी चमक से मंत्रमुग्ध होकर, सच्चाई से मुंह मोड़ लिया।",
			"ब्लेड के हर टुकड़े में एक अज्ञात जीवन शक्ति, या मृत्यु समाई हुई थी।",
			"क्या यह 'महान कहानी' की शुरुआत है, या उसका अंत?"
		]
	}
} as const;
