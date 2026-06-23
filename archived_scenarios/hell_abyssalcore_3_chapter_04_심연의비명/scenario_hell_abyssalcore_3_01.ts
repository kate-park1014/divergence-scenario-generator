export const scenario_hell_abyssalcore_3_01 = {
	"scenario_id": "hell_abyssalcore_3_01",
	"order": 1,
	"act": "intro",
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
		"pool_id": "random_boss"
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
						"korean": "미스틱 세계. 찢어진 경계에서 어둠이 스며들었다.",
						"english": "Mystic world. Darkness seeped from the torn boundary.",
						"japanese": "神秘の世界。引き裂かれた境界から闇が染み出した。",
						"chinese": "神秘世界。黑暗从撕裂的边界渗出。",
						"french": "Monde mystique. Les ténèbres s'infiltraient depuis la frontière déchirée.",
						"spanish": "Mundo místico. La oscuridad se filtró desde la frontera rota.",
						"vietnamese": "Thế giới huyền bí. Bóng tối len lỏi từ ranh giới bị xé toạc.",
						"thai": "โลกเร้นลับ ความมืดมิดซึมออกมาจากขอบเขตที่ฉีกขาด",
						"hindi": "रहस्यमय दुनिया। फटी हुई सीमा से अँधेरा रिस रहा था。"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게… 지옥의 그림자라는 거야?",
						"english": "This… this is the shadow of hell?",
						"japanese": "これが…地獄の影というのか？",
						"chinese": "这…这就是地狱的影子吗？",
						"french": "Ceci… c'est l'ombre de l'enfer ?",
						"spanish": "Esto… ¿es la sombra del infierno?",
						"vietnamese": "Đây… đây là bóng tối của địa ngục sao?",
						"thai": "นี่… นี่คือเงาของนรกงั้นหรือ?",
						"hindi": "यह… क्या यह नरक की छाया है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "늦었어. 이미 문은 열렸어.",
						"english": "It's too late. The gates have already opened.",
						"japanese": "もう遅い。既に門は開かれた。",
						"chinese": "太迟了。门已经打开了。",
						"french": "Trop tard. Les portes sont déjà ouvertes.",
						"spanish": "Es demasiado tarde. Las puertas ya se han abierto.",
						"vietnamese": "Quá muộn rồi. Cánh cổng đã mở.",
						"thai": "สายเกินไปแล้ว ประตูได้เปิดออกแล้ว",
						"hindi": "बहुत देर हो चुकी है। द्वार पहले ही खुल चुके हैं।"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "애쉬, 무슨 말이야!",
						"english": "Ash, what are you saying!",
						"japanese": "アッシュ、どういうことだ！",
						"chinese": "艾什，你在说什么！",
						"french": "Ash, qu'est-ce que tu racontes !",
						"spanish": "¡Ash, qué estás diciendo!",
						"vietnamese": "Ash, cậu đang nói gì vậy!",
						"thai": "แอช นี่แกหมายความว่าไง!",
						"hindi": "एश, तुम क्या कह रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "영혼들의 비명이 들려? 이게… 시작이야.",
						"english": "Do you hear the screams of souls? This… this is the beginning.",
						"japanese": "魂たちの悲鳴が聞こえるか？これが…始まりだ。",
						"chinese": "你听到灵魂的尖叫了吗？这…这就是开始。",
						"french": "Entends-tu les cris des âmes ? C'est… le début.",
						"spanish": "Escuchas los gritos de las almas? Esto… esto es el principio.",
						"vietnamese": "Cậu có nghe thấy tiếng thét của các linh hồn không? Đây… đây là sự khởi đầu.",
						"thai": "ได้ยินเสียงกรีดร้องของวิญญาณไหม? นี่… นี่คือจุดเริ่มต้น",
						"hindi": "क्या तुम्हें आत्माओं की चीखें सुनाई दे रही हैं? यह… यह शुरुआत है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 지역은 영혼의 고통으로 가득해. 경계가 녹아내리고 있어.",
						"english": "This area is filled with the agony of souls. The boundary is melting away.",
						"japanese": "この一帯は魂の苦痛に満ちている。境界が溶け出している。",
						"chinese": "这个区域充满了灵魂的痛苦。边界正在融化。",
						"french": "Cette zone est remplie de l'agonie des âmes. La frontière est en train de fondre.",
						"spanish": "Esta zona está llena de la agonía de las almas. La frontera se está derritiendo.",
						"vietnamese": "Khu vực này tràn ngập nỗi đau của các linh hồn. Ranh giới đang tan chảy.",
						"thai": "บริเวณนี้เต็มไปด้วยความเจ็บปวดของวิญญาณ ขอบเขตกําลังละลายหายไป",
						"hindi": "यह क्षेत्र आत्माओं की पीड़ा से भरा है। सीमा पिघल रही है।"
					},
					"speaker": "ash"
				},
				{
					"content": {
						"korean": "우리가 뭘 할 수 있는데?",
						"english": "What can we do?",
						"japanese": "私たちに何ができる？",
						"chinese": "我们能做什么？",
						"french": "Que pouvons-nous faire ?",
						"spanish": "¿Qué podemos hacer?",
						"vietnamese": "Chúng ta có thể làm gì?",
						"thai": "เราทำอะไรได้บ้าง?",
						"hindi": "हम क्या कर सकते हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "지옥의 틈새에서 희미하게 빛나는 문양이 보였다. 곧 검은 오염에 가려졌다.",
						"english": "A faint glowing symbol appeared in the chasm of hell, soon obscured by black corruption.",
						"japanese": "地獄の裂け目に微かに光る紋様が見えた。すぐに黒い汚染に覆われた。",
						"chinese": "地狱的裂缝中出现了一个微弱发光的符号。很快就被黑色腐蚀所遮蔽。",
						"french": "Un faible symbole lumineux apparut dans le gouffre de l'enfer, bientôt dissimulé par la corruption noire.",
						"spanish": "Un tenue símbolo brillante apareció en el abismo del infierno, pronto oscurecido por la corrupción negra.",
						"vietnamese": "Một biểu tượng phát sáng mờ ảo xuất hiện trong khe nứt địa ngục, nhanh chóng bị che khuất bởi ô nhiễm đen tối.",
						"thai": "สัญลักษณ์เรืองแสงจางๆ ปรากฏขึ้นในรอยแยกแห่งนรก ไม่นานก็ถูกบดบังด้วยมลทินสีดำ",
						"hindi": "नरक की खाई में एक धुंधला चमकता हुआ प्रतीक दिखा। जल्द ही वह काले भ्रष्टाचार से छिप गया।"
					}
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "저 문양… 희망이라 생각했지. 이제는 절망의 증거일 뿐.",
						"english": "That symbol… I thought it was hope. Now, it's just proof of despair.",
						"japanese": "あの紋様…希望だと思った。今となっては絶望の証でしかない。",
						"chinese": "那个符号……我曾以为是希望。现在，它只是绝望的证据。",
						"french": "Ce symbole… je le prenais pour de l'espoir. Maintenant, ce n'est plus qu'une preuve de désespoir.",
						"spanish": "Ese símbolo… pensé que era esperanza. Ahora, es solo una prueba de desesperación.",
						"vietnamese": "Biểu tượng đó… tôi đã nghĩ đó là hy vọng. Bây giờ, nó chỉ là bằng chứng của sự tuyệt vọng.",
						"thai": "สัญลักษณ์นั้น… ฉันคิดว่ามันคือความหวัง ตอนนี้ มันเป็นแค่หลักฐานของความสิ้นหวังเท่านั้น",
						"hindi": "वह प्रतीक… मैंने सोचा था वह आशा थी। अब, यह केवल निराशा का प्रमाण है।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "ash",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "비명 소리가 들려? 점점 커지고 있어.",
						"english": "Do you hear the screams? They're getting louder.",
						"japanese": "悲鳴が聞こえるか？どんどん大きくなっている。",
						"chinese": "你听到尖叫声了吗？越来越响了。",
						"french": "Tu entends les cris ? Ils deviennent de plus en plus forts.",
						"spanish": "¿Oyes los gritos? Se están volviendo más fuertes.",
						"vietnamese": "Ngươi có nghe thấy tiếng thét không? Nó đang lớn dần lên.",
						"thai": "ได้ยินเสียงกรีดร้องไหม? มันดังขึ้นเรื่อยๆ",
						"hindi": "क्या तुम्हें चीखें सुनाई दे रही हैं? वे और तेज़ हो रही हैं।"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "머리가… 깨질 것 같아.",
						"english": "My head… it feels like it's going to split.",
						"japanese": "頭が…割れそうだ。",
						"chinese": "我的头……感觉要裂开了。",
						"french": "Ma tête… j'ai l'impression qu'elle va éclater.",
						"spanish": "Mi cabeza… parece que va a estallar.",
						"vietnamese": "Đầu của ta… dường như sắp nứt ra.",
						"thai": "หัวของฉัน… เหมือนจะแตกเป็นเสี่ยงๆ",
						"hindi": "मेरा सिर… जैसे फटने वाला है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "알 수 없는 비명 소리가 귀를 찢었다. 날카로워지고 있었다.",
						"english": "Unidentifiable screams tore at my ears. They were growing sharper.",
						"japanese": "知れない悲鳴が耳を裂いた。鋭くなっていった。",
						"chinese": "未知的尖叫声刺破了我的耳朵。它们变得越来越刺耳。",
						"french": "Des cris inidentifiables me déchiraient les oreilles. Ils devenaient plus perçants.",
						"spanish": "Gritos inidentificables desgarraron mis oídos. Se volvían más agudos.",
						"vietnamese": "Những tiếng thét không rõ nguồn gốc xé toạc tai ta. Chúng càng lúc càng sắc bén.",
						"thai": "เสียงกรีดร้องที่ไม่รู้จักฉีกกระชากหูของฉัน มันแหลมคมขึ้นเรื่อยๆ",
						"hindi": "अज्ञात चीखों ने मेरे कान फाड़ दिए। वे और तीखी होती जा रही थीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이건 단순한 괴물이 아냐. 지옥 그 자체가 깨어나고 있어.",
						"english": "This isn't just a monster. Hell itself is awakening.",
						"japanese": "これはただの怪物じゃない。地獄そのものが目覚めようとしている。",
						"chinese": "这不仅仅是怪物。地狱本身正在苏醒。",
						"french": "Ce n'est pas qu'un simple monstre. L'enfer lui-même s'éveille.",
						"spanish": "Esto no es solo un monstruo. El infierno mismo está despertando.",
						"vietnamese": "Đây không chỉ là một con quái vật. Địa ngục chính nó đang thức tỉnh.",
						"thai": "นี่ไม่ใช่แค่สัตว์ประหลาด. นรกกำลังตื่นขึ้นมาเอง",
						"hindi": "यह सिर्फ एक राक्षस नहीं है। नर्क खुद जाग रहा है।"
					},
					"speaker": "ash"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "막아야 해. 무슨 수를 써서라도.",
						"english": "We have to stop it. By any means necessary.",
						"japanese": "止めなければならない。どんな手を使ってでも。",
						"chinese": "我们必须阻止它。不惜一切代价。",
						"french": "Il faut l'arrêter. Par tous les moyens.",
						"spanish": "Tenemos que detenerlo. Cueste lo que cueste.",
						"vietnamese": "Phải ngăn chặn nó. Bằng mọi giá.",
						"thai": "ต้องหยุดมันให้ได้ ไม่ว่าจะด้วยวิธีใดก็ตาม",
						"hindi": "हमें इसे रोकना होगा। किसी भी कीमत पर।"
					},
					"speaker": "character_2"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						4
					],
					"speaker": "ash"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "더 이상은… 돌아갈 수 없어. 발을 들이면 모두 끝이야.",
						"english": "No turning back now… If we step inside, it's all over.",
						"japanese": "もう…引き返せない。足を踏み入れたら全て終わりだ。",
						"chinese": "无法回头了……一旦踏入，一切都将结束。",
						"french": "Plus de retour en arrière possible… Si nous y mettons les pieds, tout est fini.",
						"spanish": "No hay vuelta atrás… Si entramos, todo habrá terminado.",
						"vietnamese": "Không thể quay lại nữa… Nếu bước vào, tất cả sẽ kết thúc.",
						"thai": "ไม่มีทางถอยแล้ว… ถ้าก้าวเข้าไป ทุกอย่างจะจบลง",
						"hindi": "अब और वापस नहीं जा सकते… अगर हमने कदम रखा, तो सब खत्म हो जाएगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "포기할 순 없어. 희생은 헛되지 않을 거야.",
						"english": "We can't give up. The sacrifice won't be in vain.",
						"japanese": "諦めるわけにはいかない。犠牲は無駄にはならない。",
						"chinese": "我们不能放弃。牺牲不会白费。",
						"french": "On ne peut pas abandonner. Le sacrifice ne sera pas vain.",
						"spanish": "No podemos rendirnos. El sacrificio no será en vano.",
						"vietnamese": "Chúng ta không thể từ bỏ. Sự hy sinh sẽ không vô ích.",
						"thai": "เรายอมแพ้ไม่ได้ การเสียสละจะไม่ไร้ประโยชน์",
						"hindi": "हम हार नहीं मान सकते। बलिदान व्यर्थ नहीं जाएगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 비석이 나타났다. '희생'과 '경계'라는 상형문자가 선명했다.",
						"english": "An ancient stele emerged. Hieroglyphs for 'Sacrifice' and 'Vigilance' were clearly etched.",
						"japanese": "古い碑石が現れた。「犠牲」と「警戒」の象形文字が鮮明だった。",
						"chinese": "一座古老的石碑出现了。“牺牲”和“警惕”的象形文字清晰可见。",
						"french": "Une vieille stèle est apparue. Les hiéroglyphes de « Sacrifice » et de « Vigilance » étaient clairs.",
						"spanish": "Apareció una antigua estela. Los jeroglíficos de 'Sacrificio' y 'Vigilancia' eran claros.",
						"vietnamese": "Một bia đá cổ xuất hiện. Các ký tự tượng hình 'Hy sinh' và 'Cảnh giác' hiện rõ.",
						"thai": "ศิลาจารึกเก่าแก่ปรากฏขึ้น อักษรภาพ 'สังเวย' และ 'เฝ้าระวัง' ชัดเจน",
						"hindi": "एक पुराना शिलाखंड प्रकट हुआ। 'बलिदान' और 'सतर्कता' के चित्रलिपि स्पष्ट थे。"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "진정한 공포는 아직 시작도 안 했어.",
						"english": "True horror hasn't even begun.",
						"japanese": "本当の恐怖はまだ始まってすらいない。",
						"chinese": "真正的恐怖甚至还没有开始。",
						"french": "La véritable horreur n'a même pas encore commencé.",
						"spanish": "El verdadero horror ni siquiera ha comenzado aún.",
						"vietnamese": "Nỗi kinh hoàng thực sự còn chưa bắt đầu.",
						"thai": "ความสยองขวัญที่แท้จริงยังไม่เริ่มเลยด้วยซ้ำ",
						"hindi": "असली आतंक अभी तक शुरू भी नहीं हुआ है।"
					},
					"speaker": "ash"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥의 힘이 탐험대를 집어삼켰다.",
						"english": "The power of hell consumed the expedition.",
						"japanese": "地獄の力が探検隊を飲み込んだ。",
						"chinese": "地狱的力量吞噬了探险队。",
						"french": "La puissance des enfers a englouti l'expédition.",
						"spanish": "El poder del infierno consumió a la expedición.",
						"vietnamese": "Sức mạnh của địa ngục đã nuốt chửng đội thám hiểm.",
						"thai": "พลังแห่งนรกกลืนกินคณะสำรวจไปแล้ว",
						"hindi": "नरक की शक्ति ने अभियान दल को निगल लिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 것들. 감히 나에게 대항하려 했나?",
						"english": "Fools. Did you dare defy me?",
						"japanese": "愚かな者たちめ。よくも私に逆らおうとしたな？",
						"chinese": "愚蠢的东西。竟敢反抗我？",
						"french": "Imbéciles. Osiez-vous me défier ?",
						"spanish": "Necios. ¿Osasteis desafiarme?",
						"vietnamese": "Những kẻ ngu ngốc. Dám cả gan chống lại ta sao?",
						"thai": "พวกโง่เขลา บังอาจคิดจะต่อต้านข้ารึ?",
						"hindi": "मूर्खों। क्या तुमने मुझे चुनौती देने की हिम्मत की?"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 다시 일어설 거야.",
						"english": "It's not over yet... I'll rise again.",
						"japanese": "まだ…終わってない。また立ち上がる。",
						"chinese": "还没…结束。我会再次站起来。",
						"french": "Ce n'est pas encore… fini. Je me relèverai.",
						"spanish": "Aún… no ha terminado. Me levantaré de nuevo.",
						"vietnamese": "Chưa… kết thúc đâu. Ta sẽ đứng dậy một lần nữa.",
						"thai": "ยัง…ไม่จบแค่นี้หรอก ข้าจะลุกขึ้นอีกครั้ง",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं फिर से खड़ा होऊंगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타났다. 지옥의 힘이 느껴졌다.",
						"english": "A colossal shadow appeared. The power of hell was palpable.",
						"japanese": "巨大な影が現れた。地獄の力が感じられた。",
						"chinese": "一个巨大的影子出现了。感受到了地狱的力量。",
						"french": "Une ombre colossale est apparue. Le pouvoir de l'enfer était palpable.",
						"spanish": "Una sombra colosal apareció. Se sentía el poder del infierno.",
						"vietnamese": "Một bóng tối khổng lồ xuất hiện. Cảm nhận được sức mạnh của địa ngục.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น สัมผัสได้ถึงพลังแห่งนรก",
						"hindi": "एक विशाल छाया प्रकट हुई। नर्क की शक्ति महसूस हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다가오지 마라. 이 고통을 이해하지 못하는 자들.",
						"english": "...Do not come closer. You who do not comprehend this suffering.",
						"japanese": "…近づくな。この苦痛を理解せぬ者たちよ。",
						"chinese": "……别过来。你们这些不理解这份痛苦的人。",
						"french": "…Ne vous approchez pas. Vous qui ne comprenez pas cette souffrance.",
						"spanish": "…No te acerques. Vosotros que no entendéis este sufrimiento.",
						"vietnamese": "…Đừng lại gần. Những kẻ không hiểu nỗi đau này.",
						"thai": "...อย่าเข้ามาใกล้ พวกเจ้าที่ไม่เข้าใจความเจ็บปวดนี้",
						"hindi": "...करीब मत आओ। तुम जो इस पीड़ा को नहीं समझते।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 시작한 거야?",
						"english": "Did you start all of this?",
						"japanese": "お前がこれをすべて始めたのか？",
						"chinese": "是你启动了这一切吗？",
						"french": "C'est toi qui as commencé tout ça ?",
						"spanish": "¿Fuiste tú quien empezó todo esto?",
						"vietnamese": "Ngươi đã bắt đầu tất cả chuyện này sao?",
						"thai": "แกเป็นคนเริ่มเรื่องทั้งหมดนี้ใช่ไหม",
						"hindi": "क्या तुमने यह सब शुरू किया था?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "내가? 시작은 이미 오래전에 이루어졌다.",
						"english": "Me? The beginning was set in motion long ago.",
						"japanese": "私が？始まりはとっくの昔に起こっていた。",
						"chinese": "我？开始早已在很久以前就已注定。",
						"french": "Moi ? Le commencement a eu lieu il y a longtemps déjà.",
						"spanish": "¿Yo? El comienzo ya tuvo lugar hace mucho tiempo.",
						"vietnamese": "Ta ư? Khởi đầu đã diễn ra từ rất lâu rồi.",
						"thai": "ข้าหรือ? การเริ่มต้นได้เกิดขึ้นนานมาแล้ว",
						"hindi": "मैं? शुरुआत बहुत पहले ही हो चुकी थी।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이걸 막았다고 생각하나? 진정한 문은 이제 열릴 뿐.",
						"english": "...Do you think you've stopped merely this? The true gate is only now opening.",
						"japanese": "…たかがこれを止めたとでも思うのか？真の扉は今、開かれるだけだ。",
						"chinese": "……你以为你只是阻止了它吗？真正的门才刚刚打开。",
						"french": "…Penses-tu avoir arrêté juste ça ? La véritable porte ne fait que s'ouvrir.",
						"spanish": "…¿Crees que solo has detenido esto? La verdadera puerta apenas se está abriendo.",
						"vietnamese": "…Ngươi nghĩ ngươi chỉ ngăn chặn được chừng này thôi sao? Cánh cửa thực sự chỉ mới mở ra.",
						"thai": "...คิดว่าหยุดได้แค่นี้หรือ? ประตูที่แท้จริงกำลังจะเปิดออกเท่านั้น",
						"hindi": "...क्या तुम्हें लगता है कि तुमने बस इसे रोका है? असली द्वार तो अब खुल रहा है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 다 끝났잖아!",
						"english": "What are you talking about? It's all over!",
						"japanese": "何を言っている？もう終わったはずだ！",
						"chinese": "你在说什么？一切都结束了！",
						"french": "De quoi parles-tu ? C'est fini !",
						"spanish": "¿De qué hablas? ¡Todo ha terminado!",
						"vietnamese": "Ngươi đang nói gì vậy? Mọi chuyện đã kết thúc rồi mà!",
						"thai": "พูดอะไรน่ะ? มันจบแล้วนี่!",
						"hindi": "तुम क्या कह रहे हो? सब खत्म हो गया है!"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						2
					],
					"speaker": "ash",
					"action": "enter"
				},
				{
					"speaker": "ash",
					"content": {
						"korean": "끝이 아니야. 이건… 시작일 뿐이야. 더 깊은 곳으로 가야 해.",
						"english": "It's not the end. This is... merely the beginning. We must delve deeper.",
						"japanese": "終わりではない。これは…始まりに過ぎない。もっと深淵へと行かねばならない。",
						"chinese": "这不是结束。这只是……一个开始。我们必须去更深的地方。",
						"french": "Ce n'est pas la fin. Ce n'est... que le début. Nous devons aller plus loin.",
						"spanish": "No es el final. Esto es... solo el comienzo. Debemos ir más profundo.",
						"vietnamese": "Chưa kết thúc đâu. Đây chỉ là... khởi đầu thôi. Chúng ta phải đi sâu hơn nữa.",
						"thai": "ยังไม่จบ นี่เป็น… แค่จุดเริ่มต้นเท่านั้น เราต้องไปให้ลึกกว่านี้",
						"hindi": "यह अंत नहीं है। यह... बस शुरुआत है। हमें और गहराई में जाना होगा।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥의 그림자는 사라졌지만, 그 비명은 여전히 맴돌았다. 여정은 계속된다.",
						"english": "The shadow of hell vanished, yet its screams still echoed. The journey continues.",
						"japanese": "地獄の影は消え去ったが、その叫び声はまだ響き渡っていた。旅は続く。",
						"chinese": "地狱的影子消失了，但它的尖叫声仍在回荡。旅程仍在继续。",
						"french": "L'ombre de l'enfer a disparu, mais ses cris résonnaient toujours. Le voyage continue.",
						"spanish": "La sombra del infierno desapareció, pero sus gritos aún resonaban. El viaje continúa.",
						"vietnamese": "Bóng tối địa ngục tan biến, nhưng tiếng thét của nó vẫn còn vang vọng. Cuộc hành trình tiếp diễn.",
						"thai": "เงาแห่งนรกหายไป แต่เสียงกรีดร้องยังคงดังก้อง การเดินทางยังคงดำเนินต่อไป",
						"hindi": "नर्क की छाया गायब हो गई, लेकिन उसकी चीखें अभी भी गूंज रही थीं। यात्रा जारी है।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"미스틱 세계. 찢어진 경계에서 어둠이 스며들었다.",
			"영혼의 비명이 울려 퍼지고, 세상은 검게 물들어갔다.",
			"지옥의 문이 열린 것이다.",
			"파멸의 예고, 시작된 공포."
		],
		"english": [
			"Mystic world. Darkness seeped from the torn boundary.",
			"Screams of souls echoed, and the world turned black.",
			"The gates of hell had opened.",
			"A premonition of ruin, terror had begun."
		],
		"japanese": [
			"神秘の世界。引き裂かれた境界から闇が染み出した。",
			"魂の悲鳴が響き渡り、世界は黒く染まっていった。",
			"地獄の門が開かれたのだ。",
			"破滅の予兆、始まった恐怖。"
		],
		"chinese": [
			"神秘世界。黑暗从撕裂的边界渗出。",
			"灵魂的尖叫声回荡，世界变得一片漆黑。",
			"地狱之门已经打开。",
			"毁灭的预兆，恐惧已然开始。"
		],
		"french": [
			"Monde mystique. Les ténèbres s'infiltraient depuis la frontière déchirée.",
			"Les cris des âmes résonnaient, et le monde devint noir.",
			"Les portes de l'enfer s'étaient ouvertes.",
			"Une prémonition de ruine, la terreur avait commencé."
		],
		"spanish": [
			"Mundo místico. La oscuridad se filtró desde la frontera rota.",
			"Los gritos de las almas resonaron, y el mundo se oscureció.",
			"Las puertas del infierno se habían abierto.",
			"Un presagio de ruina, el terror había comenzado."
		],
		"vietnamese": [
			"Thế giới huyền bí. Bóng tối len lỏi từ ranh giới bị xé toạc.",
			"Tiếng thét của linh hồn vang vọng, và thế giới chìm vào bóng tối.",
			"Cánh cổng địa ngục đã mở ra.",
			"Điềm báo diệt vong, nỗi kinh hoàng đã bắt đầu."
		],
		"thai": [
			"โลกเร้นลับ ความมืดมิดซึมออกมาจากขอบเขตที่ฉีกขาด",
			"เสียงกรีดร้องของวิญญาณดังก้อง และโลกก็กลายเป็นสีดำ",
			"ประตูสู่นรกได้เปิดออกแล้ว",
			"ลางบอกเหตุแห่งหายนะ ความหวาดกลัวได้เริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"रहस्यमय दुनिया। फटी हुई सीमा से अँधेरा रिस रहा था。",
			"आत्माओं की चीखें गूँज उठीं, और दुनिया काली पड़ गई।",
			"नरक के द्वार खुल गए थे।",
			"विनाश का पूर्वाभास, आतंक शुरू हो गया था।"
		]
	}
} as const;
