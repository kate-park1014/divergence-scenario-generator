export const scenario_hell_vesper_11_02 = {
	"scenario_id": "hell_vesper_11_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
					"content": {
						"korean": "베스퍼가 언급한 지역. 공간 자체가 기이하게 뒤틀려 있었다.",
						"english": "The area Vesper mentioned. The space itself was eerily twisted.",
						"japanese": "ベスパーが言及した場所。空間自体が奇妙に歪んでいた。",
						"chinese": "维斯珀提到的区域。空间本身诡异地扭曲着。",
						"french": "La zone mentionnée par Vesper. L'espace lui-même était étrangement tordu.",
						"spanish": "La zona que Vesper mencionó. El espacio mismo estaba extrañamente retorcido.",
						"vietnamese": "Khu vực Vesper nhắc đến. Bản thân không gian đã bị bóp méo một cách kỳ lạ.",
						"thai": "พื้นที่ที่เวสเปอร์กล่าวถึง ตัวพื้นที่บิดเบี้ยวอย่างน่าประหลาด",
						"hindi": "वेस्पर द्वारा उल्लिखित क्षेत्र। जगह खुद ही अजीब तरह से मुड़ी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "character_1",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "조심해. 저 너머에 뭔가가 느껴져.",
						"english": "Be careful. I sense something beyond.",
						"japanese": "気をつけて。あの先に何かを感じる。",
						"chinese": "小心。我感觉到那边有什么东西。",
						"french": "Sois prudent. Je sens quelque chose au-delà.",
						"spanish": "Ten cuidado. Siento algo más allá.",
						"vietnamese": "Cẩn thận. Tôi cảm thấy có gì đó ở phía bên kia.",
						"thai": "ระวัง. ฉันรู้สึกได้ถึงบางอย่างที่อยู่ข้างหน้า.",
						"hindi": "सावधान रहो। मुझे उस पार कुछ महसूस हो रहा है।"
					},
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "으스스해. 베스퍼가 여기를 알려준 게 맞아?",
						"english": "It's creepy. Did Vesper really tell us about this place?",
						"japanese": "気味が悪い。ベスパーがここを教えてくれたのは本当か？",
						"chinese": "毛骨悚然。维斯珀真的告诉我们这里了吗？",
						"french": "C'est effrayant. Est-ce que Vesper nous a vraiment parlé de cet endroit ?",
						"spanish": "Qué espeluznante. ¿Vesper realmente nos dijo de este lugar?",
						"vietnamese": "Rợn người quá. Vesper thực sự đã nói cho chúng ta biết về nơi này sao?",
						"thai": "น่าขนลุก. เวสเปอร์บอกเราเกี่ยวกับที่นี่จริงหรือ?",
						"hindi": "यह डरावना है। क्या वेस्पर ने सच में हमें इस जगह के बारे में बताया था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뒤틀린 공간은 더욱 깊은 혼돈으로 이끌었다.",
						"english": "The twisted space led to deeper chaos.",
						"japanese": "歪んだ空間は、さらに深い混沌へと誘った。",
						"chinese": "扭曲的空间将我们引向更深的混沌。",
						"french": "L'espace tordu menait à un chaos plus profond.",
						"spanish": "El espacio retorcido nos llevó a un caos más profundo.",
						"vietnamese": "Không gian méo mó dẫn đến sự hỗn loạn sâu hơn.",
						"thai": "พื้นที่บิดเบี้ยวได้นำไปสู่ความวุ่นวายที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "मुड़ी हुई जगह और गहरे अराजकता की ओर ले गई।"
					},
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "character_1",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "이 기록 조각들을 봐. 뭔가 이상해.",
						"english": "Look at these record fragments. Something's off.",
						"japanese": "この記録の破片を見て。何かがおかしい。",
						"chinese": "看这些记录碎片。有些不对劲。",
						"french": "Regarde ces fragments d'archives. Quelque chose ne va pas.",
						"spanish": "Mira estos fragmentos de registros. Algo no está bien.",
						"vietnamese": "Nhìn những mảnh ghi chép này đi. Có gì đó không ổn.",
						"thai": "ดูเศษบันทึกพวกนี้สิ มีบางอย่างผิดปกติ",
						"hindi": "इन रिकॉर्ड के टुकड़ों को देखो। कुछ गड़बड़ है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그냥 낡은 파편 아니야?",
						"english": "Aren't they just old fragments?",
						"japanese": "ただの古い破片じゃないの？",
						"chinese": "不就是些旧碎片吗？",
						"french": "Ce ne sont que de vieux fragments, n'est-ce pas ?",
						"spanish": "¿No son solo viejos fragmentos?",
						"vietnamese": "Chẳng phải chúng chỉ là những mảnh vỡ cũ thôi sao?",
						"thai": "ไม่ใช่แค่เศษซากเก่าๆ หรอกหรือ?",
						"hindi": "क्या ये सिर्फ पुराने टुकड़े नहीं हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니. …베스퍼의 이름이 나와.",
						"english": "No... Vesper's name is here.",
						"japanese": "いや… ヴェスパーの名前が載ってる。",
						"chinese": "不……韦斯珀的名字出现了。",
						"french": "Non... Le nom de Vesper y figure.",
						"spanish": "No... El nombre de Vesper aparece.",
						"vietnamese": "Không... Tên của Vesper xuất hiện.",
						"thai": "ไม่... ชื่อของเวสเปอร์ปรากฏขึ้น",
						"hindi": "नहीं... वेस्पर का नाम यहाँ है।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 브로커 이름이 왜 여기에?",
						"english": "What? Why is the broker's name here?",
						"japanese": "何？なぜブローカーの名前がここに？",
						"chinese": "什么？为什么掮客的名字会在这里？",
						"french": "Quoi ? Pourquoi le nom du courtier est-il ici ?",
						"spanish": "¡¿Qué?! ¿Por qué está aquí el nombre del bróker?",
						"vietnamese": "Gì cơ? Sao tên của tay môi giới lại ở đây?",
						"thai": "อะไรนะ? ทำไมชื่อของนายหน้าถึงมาอยู่ที่นี่ได้?",
						"hindi": "क्या? ब्रोकर का नाम यहाँ क्यों है?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 공간에 갇힌 탐험대. 진실은 멀어졌다.",
						"english": "Explorers trapped in a warped space. The truth slipped away.",
						"japanese": "歪んだ空間に閉じ込められた探検隊。真実は遠ざかった。",
						"chinese": "探险队被困扭曲空间。真相渐行渐远。",
						"french": "L'équipe d'exploration est piégée dans un espace tordu. La vérité s'est éloignée.",
						"spanish": "Exploradores atrapados en un espacio distorsionado. La verdad se desvaneció.",
						"vietnamese": "Đoàn thám hiểm bị mắc kẹt trong không gian méo mó. Sự thật đã xa rời.",
						"thai": "ทีมสำรวจติดอยู่ในมิติที่บิดเบี้ยว ความจริงห่างไกลออกไปแล้ว",
						"hindi": "विकृत स्थान में फंसे खोजकर्ता। सत्य दूर हो गया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들… 진실은… 너희를 집어삼킬 것이다.",
						"english": "Fools... The truth... will consume you.",
						"japanese": "愚かな者たち… 真実は… お前たちを飲み込むだろう。",
						"chinese": "愚蠢的东西……真相……会吞噬你们。",
						"french": "Imbéciles... La vérité... vous dévorera.",
						"spanish": "Necios... La verdad... os consumirá.",
						"vietnamese": "Những kẻ ngu ngốc... Sự thật... sẽ nuốt chửng các ngươi.",
						"thai": "พวกโง่เขลา... ความจริง... จะกลืนกินพวกเจ้า",
						"hindi": "मूर्ख... सत्य... तुम्हें निगल जाएगा।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "character_1",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "여기서 멈출 순 없어. 더 깊은 진실이 있을 거야.",
						"english": "We can't stop here. There must be a deeper truth.",
						"japanese": "ここで止まるわけにはいかない。もっと深い真実があるはずだ。",
						"chinese": "不能止步于此。一定有更深层的真相。",
						"french": "Nous ne pouvons pas nous arrêter ici. Il doit y avoir une vérité plus profonde.",
						"spanish": "No podemos detenernos aquí. Debe haber una verdad más profunda.",
						"vietnamese": "Chúng ta không thể dừng lại ở đây. Hẳn phải có một sự thật sâu xa hơn.",
						"thai": "เราหยุดแค่นี้ไม่ได้ ต้องมีบางอย่างที่ลึกซึ้งกว่านี้",
						"hindi": "हम यहां रुक नहीं सकते। कोई और गहरा सत्य होगा।"
					},
					"speaker": "character_1"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기괴한 울음소리가 뒤틀린 공간을 찢었다.",
						"english": "A grotesque cry tore through the twisted space.",
						"japanese": "奇怪な叫び声が歪んだ空間を引き裂いた。",
						"chinese": "一声怪诞的嘶吼撕裂了扭曲的空间。",
						"french": "Un cri grotesque déchira l'espace tordu.",
						"spanish": "Un grito grotesco desgarró el espacio retorcido.",
						"vietnamese": "Một tiếng kêu ghê rợn xé toạc không gian méo mó.",
						"thai": "เสียงร้องน่าขนลุกฉีกผ่านห้วงมิติที่บิดเบี้ยว",
						"hindi": "एक विकृत चीख ने मुड़ी हुई जगह को फाड़ दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "character_1",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "이 힘… 중간 보스다!",
						"english": "This power... It's a mid-boss!",
						"japanese": "この力… 中ボスだ！",
						"chinese": "这股力量……是中型头目！",
						"french": "Cette puissance... C'est un boss intermédiaire !",
						"spanish": "Este poder... ¡Es un jefe intermedio!",
						"vietnamese": "Sức mạnh này... là một trùm giữa!",
						"thai": "พลังนี่... มันคือบอสกึ่งกลาง!",
						"hindi": "यह शक्ति... यह एक मध्य-बॉस है!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장! 베스퍼의 함정이었나?",
						"english": "Damn it! Was it Vesper's trap?",
						"japanese": "くそっ！ヴェスパーの罠だったのか？",
						"chinese": "该死！是韦斯珀的陷阱吗？",
						"french": "Mince ! C'était le piège de Vesper ?",
						"spanish": "¡Maldita sea! ¿Era la trampa de Vesper?",
						"vietnamese": "Chết tiệt! Đây là bẫy của Vesper sao?",
						"thai": "บ้าจริง! นี่เป็นกับดักของเวสเปอร์หรือ?",
						"hindi": "धिक्कार है! क्या यह वेस्पर का जाल था?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "감히… 나의 영역을 침범하다니.",
						"english": "How dare you... invade my domain.",
						"japanese": "よくも… 私の領域を侵犯したな。",
						"chinese": "竟敢……侵犯我的领域。",
						"french": "Comment oses-tu... envahir mon domaine.",
						"spanish": "Cómo te atreves... a invadir mi dominio.",
						"vietnamese": "Ngươi dám... xâm phạm lãnh địa của ta.",
						"thai": "บังอาจ... เข้ามารุกรานอาณาเขตของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे क्षेत्र में घुसने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "뒤틀린 공간의 중간 보스가 쓰러졌다.",
						"english": "The mid-boss of the twisted space has fallen.",
						"japanese": "歪んだ空間の中ボスが倒れた。",
						"chinese": "扭曲空间的中型头目已倒下。",
						"french": "Le boss intermédiaire de l'espace tordu est tombé.",
						"spanish": "El jefe intermedio del espacio retorcido ha caído.",
						"vietnamese": "Trùm giữa của không gian méo mó đã ngã xuống.",
						"thai": "บอสกึ่งกลางแห่งห้วงมิติที่บิดเบี้ยวได้ล้มลงแล้ว",
						"hindi": "मुड़ी हुई जगह का मध्य-बॉस गिर गया है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 너희는… 아무것도 모른다… {random_boss}는…",
						"english": "Heh heh... You know... nothing... {random_boss} is...",
						"japanese": "クク… お前たちは… 何も知らない… {random_boss}は…",
						"chinese": "呵呵……你们……什么都不知道……{random_boss}是……",
						"french": "Hé hé... Vous ne... savez rien... {random_boss} est...",
						"spanish": "Je je... No sabéis... nada... {random_boss} es...",
						"vietnamese": "Hừm hừm... Các ngươi... không biết gì cả... {random_boss} là...",
						"thai": "ฮิฮิ... พวกเจ้า... ไม่รู้อะไรเลย... {random_boss} คือ...",
						"hindi": "हे हे... तुम... कुछ नहीं जानते... {random_boss} है..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "character_1",
					"action": "enter"
				},
				{
					"content": {
						"korean": "새로운 기록 파편을 찾았어. 이건…",
						"english": "Found a new record fragment. This is...",
						"japanese": "新しい記録の断片を見つけた。これは…",
						"chinese": "找到了新的记录碎片。这是……",
						"french": "J'ai trouvé un nouveau fragment d'archive. C'est...",
						"spanish": "Encontré un nuevo fragmento de registro. Esto es...",
						"vietnamese": "Đã tìm thấy một mảnh ghi chép mới. Đây là...",
						"thai": "พบชิ้นส่วนบันทึกใหม่แล้ว นี่คือ...",
						"hindi": "एक नया रिकॉर्ड टुकड़ा मिला। यह है..."
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "베스퍼가 한때 '서고의 수호자'였다고?",
						"english": "Vesper was once the 'Guardian of the Archives'?",
						"japanese": "ヴェスパーはかつて「書庫の守護者」だったのか？",
						"chinese": "韦斯珀曾是‘档案馆的守护者’？",
						"french": "Vesper était autrefois le 'Gardien des Archives' ?",
						"spanish": "¿Vesper fue una vez el 'Guardián de los Archivos'?",
						"vietnamese": "Vesper từng là 'Người bảo vệ Kho lưu trữ' ư?",
						"thai": "เวสเปอร์เคยเป็น 'ผู้พิทักษ์หอจดหมายเหตุ' อย่างนั้นหรือ?",
						"hindi": "वेस्पर कभी 'अभिलेखागार का संरक्षक' था?"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "뭐? 브로커가 아니라?",
						"english": "What? Not the Broker?",
						"japanese": "何？ブローカーじゃない？",
						"chinese": "什么？不是掮客？",
						"french": "Quoi ? Pas le Courtier ?",
						"spanish": "¿Qué? ¿No es el Bróker?",
						"vietnamese": "Gì cơ? Không phải Người Môi Giới à?",
						"thai": "อะไรนะ? ไม่ใช่โบรกเกอร์เหรอ?",
						"hindi": "क्या? ब्रोकर नहीं?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "조각난 기록들은 혼란을 가중시켰다. 베스퍼는 대체 누구인가.",
						"english": "Fragmented records intensified the confusion. Who exactly is Vesper?",
						"japanese": "断片的な記録は混乱を深めた。ヴェスパーは一体誰なのか。",
						"chinese": "零碎的记录加剧了混乱。维斯珀到底是谁？",
						"french": "Les enregistrements fragmentés ont intensifié la confusion. Qui est donc Vesper ?",
						"spanish": "Los registros fragmentados intensificaron la confusión. ¿Quién es Vesper, al fin y al cabo?",
						"vietnamese": "Những ghi chép rời rạc càng làm tăng thêm sự hoang mang. Vesper rốt cuộc là ai?",
						"thai": "บันทึกที่กระจัดกระจายยิ่งเพิ่มความสับสน เวสเปอร์เป็นใครกันแน่",
						"hindi": "खंडित अभिलेखों ने भ्रम और बढ़ा दिया। वेस्पर आखिर कौन है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "character_1",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "'서고의 수호자 베스퍼'… 소문과 너무 달라.",
						"english": "'Vesper, Guardian of the Archives'... So different from the rumors.",
						"japanese": "「書庫の守護者ヴェスパー」… 噂とはあまりに違う。",
						"chinese": "“书库守护者维斯珀”……与传闻相差甚远。",
						"french": "'Vesper, Gardienne des Archives'... Si différente des rumeurs.",
						"spanish": "'Vesper, Guardián de los Archivos'... Muy diferente de los rumores.",
						"vietnamese": "'Vesper, Người Bảo Vệ Thư Khố'... Khác xa so với lời đồn.",
						"thai": "เวสเปอร์ ผู้พิทักษ์หอจดหมายเหตุ... ช่างแตกต่างจากข่าวลือ",
						"hindi": "'वेस्पर, अभिलेखागार का संरक्षक'... अफवाहों से बहुत अलग।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우리를 속인 건가? 아니면…",
						"english": "So she tricked us? Or...",
						"japanese": "では、我々を騙したのか？それとも…",
						"chinese": "那她是在骗我们吗？还是说……",
						"french": "Alors elle nous a trompés ? Ou alors...",
						"spanish": "¿Entonces nos engañó? ¿O...?",
						"vietnamese": "Vậy cô ta đã lừa chúng ta sao? Hay là...",
						"thai": "งั้นเธอหลอกเราเหรอ? หรือว่า...",
						"hindi": "तो क्या उसने हमें धोखा दिया? या..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "뭔가 중요한 비밀이 감춰져 있어. 이 파편들이 답을 줄 거야.",
						"english": "A crucial secret is hidden. These fragments will provide the answer.",
						"japanese": "何か重要な秘密が隠されている。この破片が答えをくれるだろう。",
						"chinese": "有重要的秘密被隐藏着。这些碎片会给出答案。",
						"french": "Un secret crucial est caché. Ces fragments apporteront la réponse.",
						"spanish": "Hay un secreto crucial oculto. Estos fragmentos darán la respuesta.",
						"vietnamese": "Có một bí mật quan trọng bị che giấu. Những mảnh vỡ này sẽ cho ta câu trả lời.",
						"thai": "มีความลับสำคัญซ่อนอยู่ ชิ้นส่วนเหล่านี้จะบอกคำตอบ",
						"hindi": "कोई महत्वपूर्ण रहस्य छिपा हुआ है। ये टुकड़े जवाब देंगे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "공간의 왜곡이 극에 달했다. 거대한 그림자가 앞을 가로막았다.",
						"english": "Space distortion reached its peak. A colossal shadow blocked the path.",
						"japanese": "空間の歪みが極に達した。巨大な影が道を阻んだ。",
						"chinese": "空间扭曲达到极致。巨大的黑影挡住了去路。",
						"french": "La distorsion spatiale a atteint son apogée. Une ombre colossale barra le chemin.",
						"spanish": "La distorsión espacial alcanzó su punto máximo. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Sự bóp méo không gian đã đạt đến cực điểm. Một cái bóng khổng lồ chặn đường.",
						"thai": "การบิดเบี้ยวของอวกาศถึงขีดสุด เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "स्थान का विरूपण चरम पर पहुंच गया। एक विशाल छाया ने रास्ता रोक दिया।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "character_1"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "(경고) 더 깊이 들어가선 안 돼! 위험해!",
						"english": "(Warning) Do not go deeper! It's dangerous!",
						"japanese": "(警告) これ以上深く入るな！危険だ！",
						"chinese": "(警告) 不要再深入了！危险！",
						"french": "(Avertissement) N'allez pas plus loin ! C'est dangereux !",
						"spanish": "(Advertencia) ¡No vayas más profundo! ¡Es peligroso!",
						"vietnamese": "(Cảnh báo) Đừng đi sâu hơn! Nguy hiểm đấy!",
						"thai": "(คำเตือน) อย่าเข้าไปลึกกว่านี้! อันตราย!",
						"hindi": "(चेतावनी) और अंदर मत जाओ! यह खतरनाक है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "베스퍼의 진실을 알아야 해. 멈출 수 없어.",
						"english": "I must uncover Vesper's truth. I can't stop.",
						"japanese": "ベスパーの真実を知らねば。止まるわけにはいかない。",
						"chinese": "我必须知道维斯珀的真相。我不能停下。",
						"french": "Je dois découvrir la vérité sur Vesper. Je ne peux pas m'arrêter.",
						"spanish": "Debo descubrir la verdad de Vesper. No puedo detenerme.",
						"vietnamese": "Tôi phải biết sự thật về Vesper. Không thể dừng lại.",
						"thai": "ฉันต้องรู้ความจริงของเวสเปอร์ หยุดไม่ได้แล้ว",
						"hindi": "मुझे वेस्पर की सच्चाई जाननी होगी। मैं रुक नहीं सकता।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "흩어진 정보, 뒤틀린 진실… 어리석은 것들. 모두 사라져라.",
						"english": "Scattered data, twisted truths... You fools. Vanish!",
						"japanese": "散らばった情報、歪んだ真実… 愚かな者たちめ。消え失せろ。",
						"chinese": "零散的信息，扭曲的真相…… 愚蠢的东西。都消失吧。",
						"french": "Informations éparses, vérités tordues... Idiots. Disparaissez !",
						"spanish": "Información dispersa, verdades retorcidas... Necios. ¡Desapareced!",
						"vietnamese": "Thông tin rời rạc, sự thật méo mó... Lũ ngu ngốc. Biến đi!",
						"thai": "ข้อมูลที่กระจัดกระจาย ความจริงที่บิดเบือน... เจ้าพวกโง่เง่า. จงหายไปซะ!",
						"hindi": "बिखरी जानकारी, मुड़ी हुई सच्चाई... मूर्खों। गायब हो जाओ!"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 너도 베스퍼의 일부냐?",
						"english": "Silence! Are you also part of Vesper?",
						"japanese": "黙れ！お前もベスパーの一部か？",
						"chinese": "闭嘴！你也是维斯珀的一部分吗？",
						"french": "Tais-toi ! Fais-tu aussi partie de Vesper ?",
						"spanish": "¡Cállate! ¿Tú también eres parte de Vesper?",
						"vietnamese": "Im đi! Ngươi cũng là một phần của Vesper sao?",
						"thai": "หุบปาก! แกก็เป็นส่วนหนึ่งของเวสเปอร์รึไง?",
						"hindi": "खामोश! क्या तुम भी वेस्पर का हिस्सा हो?"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뒤틀린 공간의 지배자가 쓰러졌다. 진실은 더욱 깊은 곳에.",
						"english": "The ruler of the twisted space has fallen. The truth lies deeper still.",
						"japanese": "歪んだ空間の支配者が倒れた。真実はさらに深い場所に。",
						"chinese": "扭曲空间的主宰者已倒下。真相在更深处。",
						"french": "Le maître de l'espace tordu est tombé. La vérité est encore plus profonde.",
						"spanish": "El señor del espacio retorcido ha caído. La verdad reside aún más profundo.",
						"vietnamese": "Kẻ thống trị không gian méo mó đã gục ngã. Sự thật nằm ở nơi sâu thẳm hơn.",
						"thai": "ผู้ปกครองแห่งพื้นที่บิดเบี้ยวได้ล้มลงแล้ว ความจริงยังคงอยู่ลึกกว่านั้น",
						"hindi": "मुड़ी हुई जगह का शासक गिर गया है। सच्चाई और भी गहरी है।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "크크… 너희는… 아무것도 모른다… {random_boss}는… 그저…",
						"english": "Heh heh... You know... nothing... {random_boss} is... merely...",
						"japanese": "クク…お前たちは…何も知らない… {random_boss}は…ただ…",
						"chinese": "呵呵……你们……一无所知…… {random_boss}只是……",
						"french": "Hé hé... Vous... ne savez rien... {random_boss} n'est... que...",
						"spanish": "Je je... Vosotros... no sabéis nada... {random_boss} es... simplemente...",
						"vietnamese": "Khà khà... Các ngươi... chẳng biết gì cả... {random_boss} chỉ là...",
						"thai": "ฮิฮิ... พวกเจ้า... ไม่รู้อะไรเลย... {random_boss} เป็นแค่...",
						"hindi": "हँ हँ... तुम... कुछ नहीं जानते... {random_boss} बस... एक..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "character_1",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 기록 파편… 베스퍼의 과거가… 심상치 않아.",
						"english": "Another record fragment... Vesper's past... is ominous.",
						"japanese": "また別の記録の破片… ベスパーの過去が… 尋常ではない。",
						"chinese": "又一片记录碎片…… 维斯珀的过去…… 非同寻常。",
						"french": "Un autre fragment de document... Le passé de Vesper... est inquiétant.",
						"spanish": "Otro fragmento de registro... El pasado de Vesper... es inquietante.",
						"vietnamese": "Một mảnh ghi chép khác... Quá khứ của Vesper... thật bất thường.",
						"thai": "ชิ้นส่วนบันทึกอีกชิ้น... อดีตของเวสเปอร์... ไม่ธรรมดาเลย",
						"hindi": "एक और रिकॉर्ड का टुकड़ा... वेस्पर का अतीत... अशुभ है।"
					},
					"speaker": "character_1"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정보가… 뒤죽박죽이야. 뭘 믿어야 하지?",
						"english": "The information is... a jumble. What should I believe?",
						"japanese": "情報が… ごちゃごちゃだ。何を信じればいい？",
						"chinese": "信息…… 一团糟。我该相信什么？",
						"french": "Les informations sont... confuses. Que dois-je croire ?",
						"spanish": "La información está... hecha un lío. ¿Qué debo creer?",
						"vietnamese": "Thông tin... lộn xộn quá. Phải tin vào điều gì đây?",
						"thai": "ข้อมูลมัน... สับสนไปหมด. ฉันควรเชื่ออะไรดี?",
						"hindi": "जानकारी... गड़बड़ है। मुझे किस पर भरोसा करना चाहिए?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "조각난 기록은 진실에 대한 의심을 더욱 증폭시켰다. 여정은 계속된다.",
						"english": "The fragmented records only amplified doubt about the truth. The journey continues.",
						"japanese": "断片的な記録は真実への疑念をさらに増幅させた。旅は続く。",
						"chinese": "支离破碎的记录让对真相的怀疑更加强烈。旅程仍在继续。",
						"french": "Les documents fragmentés n'ont fait qu'amplifier le doute sur la vérité. Le voyage continue.",
						"spanish": "Los registros fragmentados solo amplificaron la duda sobre la verdad. El viaje continúa.",
						"vietnamese": "Những mảnh ghi chép rời rạc càng làm tăng thêm nghi ngờ về sự thật. Hành trình vẫn tiếp diễn.",
						"thai": "บันทึกที่แตกเป็นเสี่ยงๆ ยิ่งเพิ่มความสงสัยในความจริง การเดินทางยังคงดำเนินต่อไป",
						"hindi": "खंडित रिकॉर्ड ने सच्चाई के बारे में संदेह को और बढ़ा दिया। यात्रा जारी है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "뒤틀린 공간에 갇힌 탐험대. 패배의 그림자가 드리웠다.",
						"english": "The expedition trapped in twisted space. The shadow of defeat loomed.",
						"japanese": "歪んだ空間に囚われた探検隊。敗北の影が差し込んだ。",
						"chinese": "探险队被困在扭曲空间。失败的阴影笼罩着。",
						"french": "L'expédition piégée dans l'espace tordu. L'ombre de la défaite planait.",
						"spanish": "La expedición atrapada en el espacio retorcido. La sombra de la derrota se cernió.",
						"vietnamese": "Đội thám hiểm bị mắc kẹt trong không gian méo mó. Bóng đêm thất bại đã bao trùm.",
						"thai": "คณะสำรวจที่ติดอยู่ในพื้นที่บิดเบี้ยว. เงาแห่งความพ่ายแพ้ปกคลุม",
						"hindi": "मुड़ी हुई जगह में फंसी अभियान टीम। हार का साया मंडरा रहा था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 진실은… 너희를 집어삼킬 것이다.",
						"english": "You fools... The truth... will consume you.",
						"japanese": "愚かな者たちめ… 真実は… お前たちを呑み込むだろう。",
						"chinese": "愚蠢的东西…… 真相…… 会吞噬你们。",
						"french": "Idiots... La vérité... vous consumera.",
						"spanish": "Necios... La verdad... os consumirá.",
						"vietnamese": "Lũ ngu ngốc... Sự thật... sẽ nuốt chửng các ngươi.",
						"thai": "เจ้าพวกโง่เง่า... ความจริง... จะกลืนกินพวกเจ้า",
						"hindi": "मूर्खों... सच्चाई... तुम्हें निगल जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "character_1"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "여기서 멈출 순 없어. 더 깊은 진실이 있을 거야.",
						"english": "Can't stop here. There must be a deeper truth.",
						"japanese": "ここで止まるわけにはいかない。もっと深い真実があるはずだ。",
						"chinese": "不能止步于此。一定有更深层的真相。",
						"french": "Je ne peux pas m'arrêter ici. Il doit y avoir une vérité plus profonde.",
						"spanish": "No puedo detenerme aquí. Debe haber una verdad más profunda.",
						"vietnamese": "Không thể dừng lại ở đây. Chắc chắn có một sự thật sâu xa hơn.",
						"thai": "จะหยุดอยู่แค่นี้ไม่ได้ ต้องมีเบื้องลึกเบื้องหลังที่ซับซับซ้อนกว่านี้แน่",
						"hindi": "मैं यहाँ नहीं रुक सकता। कोई गहरा सच ज़रूर होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래. 아직 끝나지 않았어. 베스퍼의 진짜 얼굴을 봐야 해!",
						"english": "Right. It's not over yet. I need to see Vesper's true face!",
						"japanese": "そうだ。まだ終わっていない。ベスパーの本当の顔を見なければ！",
						"chinese": "没错。还没结束。我必须看到维斯珀的真面目！",
						"french": "Exact. Ce n'est pas encore fini. Je dois voir le vrai visage de Vesper !",
						"spanish": "Exacto. Aún no ha terminado. ¡Debo ver el verdadero rostro de Vesper!",
						"vietnamese": "Đúng vậy. Vẫn chưa kết thúc. Mình phải thấy được bộ mặt thật của Vesper!",
						"thai": "ใช่ ยังไม่จบ ฉันต้องเห็นโฉมหน้าที่แท้จริงของเวสเปอร์!",
						"hindi": "हाँ। यह अभी खत्म नहीं हुआ है। मुझे वेस्पर का असली चेहरा देखना होगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"베스퍼의 정보는 길잡이인가, 덫인가?",
			"뒤틀린 공간, 부서진 서고의 파편들.",
			"그곳에서 발견된 기록은 모든 것을 뒤흔든다.",
			"과연 그림자 브로커 베스퍼는 누구였을까."
		],
		"english": [
			"Is Vesper's intel a guide or a trap?",
			"Twisted space, fragments of a shattered archive.",
			"The records found there shake everything.",
			"Who truly was Vesper, the Shadow Broker?"
		],
		"japanese": [
			"ベスパーの情報は道標か、それとも罠か？",
			"歪んだ空間、砕け散った書庫の断片。",
			"そこで見つかった記録は、全てを揺るがす。",
			"果たして影のブローカー、ベスパーとは誰だったのか。"
		],
		"chinese": [
			"维斯珀的情报是向导，还是陷阱？",
			"扭曲的空间，破碎书库的碎片。",
			"在那里发现的记录动摇了一切。",
			"那么，暗影掮客维斯珀究竟是谁？"
		],
		"french": [
			"Les informations de Vesper sont-elles un guide ou un piège ?",
			"Un espace tordu, des fragments d'une archive brisée.",
			"Les archives découvertes là-bas ébranlent tout.",
			"Qui était vraiment Vesper, le courtier de l'ombre ?"
		],
		"spanish": [
			"¿Es la información de Vesper una guía o una trampa?",
			"Espacio retorcido, fragmentos de un archivo destrozado.",
			"Los registros encontrados allí lo sacuden todo.",
			"¿Quién era realmente Vesper, el Corredor de las Sombras?"
		],
		"vietnamese": [
			"Thông tin của Vesper là kim chỉ nam hay cái bẫy?",
			"Không gian méo mó, những mảnh vỡ của thư viện tan nát.",
			"Những ghi chép tìm thấy ở đó làm rung chuyển mọi thứ.",
			"Rốt cuộc Vesper, gã môi giới bóng tối, là ai?"
		],
		"thai": [
			"ข้อมูลของเวสเปอร์เป็นเครื่องนำทางหรือกับดักกันแน่?",
			"พื้นที่บิดเบี้ยว เศษซากของคลังเอกสารที่แตกสลาย",
			"บันทึกที่พบที่นั่นสั่นคลอนทุกสิ่ง",
			"แท้จริงแล้ว เวสเปอร์ โบรกเกอร์เงาคือใครกันแน่?"
		],
		"hindi": [
			"वेस्पर की जानकारी एक मार्गदर्शक है या एक जाल?",
			"मुड़ी हुई जगह, टूटे हुए अभिलेखागार के टुकड़े।",
			"वहाँ मिले रिकॉर्ड सब कुछ हिला देते हैं।",
			"आखिर शैडो ब्रोकर वेस्पर कौन था?"
		]
	}
} as const;
