export const scenario_snowy_grumpyherring_33_05 = {
	"scenario_id": "snowy_grumpyherring_33_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
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
		}
	},
	"boss": {
		"pool_id": "pool_FrozenFood_GrumpyHerring_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "끝없이 펼쳐진 눈보라 사막. 거대한 얼음 제단이 굳건히 서 있었다.",
						"english": "An endlessly stretching blizzard desert. A colossal ice altar stood firm.",
						"japanese": "限りなく広がる吹雪の砂漠。巨大な氷の祭壇がそびえ立っていた。",
						"chinese": "一望无际的暴风雪沙漠。一座巨大的冰之祭坛巍然屹立。",
						"french": "Un désert de blizzard s'étendant à l'infini. Un autel de glace colossal se dressait fermement.",
						"spanish": "Un desierto de ventisca que se extendía sin fin. Un altar de hielo colosal se erguía firme.",
						"vietnamese": "Một sa mạc bão tuyết trải dài vô tận. Một bàn thờ băng khổng lồ đứng vững vàng.",
						"thai": "ทะเลทรายพายุหิมะที่กว้างใหญ่ไม่มีที่สิ้นสุด แท่นบูชาน้ำแข็งขนาดมหึมายืนตระหง่านอยู่",
						"hindi": "एक अंतहीन फैलाव वाला बर्फीला रेगिस्तान। एक विशाल बर्फ की वेदी दृढ़ता से खड़ी थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 그 제단인가.",
						"english": "This is... the altar?",
						"japanese": "ここが…その祭壇か。",
						"chinese": "这里是…那个祭坛吗？",
						"french": "C'est ici... l'autel ?",
						"spanish": "¿Aquí es... el altar?",
						"vietnamese": "Đây là... cái bàn thờ đó à?",
						"thai": "ที่นี่คือ... แท่นบูชานั่นรึเปล่า",
						"hindi": "यह है... वह वेदी?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 이곳은 잊힌 역사의 종착역이에요. 룬 문자들이 얼음 속에 새겨져 있어요.",
						"english": "Yes. This is the end of forgotten history. Runes are carved in the ice.",
						"japanese": "はい。ここは忘れ去られた歴史の終着点です。ルーン文字が氷の中に刻まれています。",
						"chinese": "是的。这里是已被遗忘历史的终点。符文刻在冰中。",
						"french": "Oui. C'est le terminus d'une histoire oubliée. Des runes sont gravées dans la glace.",
						"spanish": "Sí. Este es el fin de una historia olvidada. Las runas están grabadas en el hielo.",
						"vietnamese": "Vâng. Đây là điểm cuối của lịch sử bị lãng quên. Các ký tự rune được khắc trong băng.",
						"thai": "ค่ะ ที่นี่คือปลายทางของประวัติศาสตร์ที่ถูกลืม อักษรรูนสลักอยู่ในน้ำแข็ง",
						"hindi": "हाँ। यह भूले हुए इतिहास का अंत है। runes बर्फ में खुदे हुए हैं।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진실을 찾을 시간이다.",
						"english": "Time to find the truth.",
						"japanese": "真実を見つける時だ。",
						"chinese": "是时候寻找真相了。",
						"french": "Il est temps de trouver la vérité.",
						"spanish": "Es hora de encontrar la verdad.",
						"vietnamese": "Đã đến lúc tìm ra sự thật.",
						"thai": "ได้เวลาค้นหาความจริงแล้ว",
						"hindi": "सच का पता लगाने का समय है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이 룬… '시식 거부자, 얼음이 되리라'… 계속 반복되는 문구예요.",
						"english": "These runes... 'He who refuses to taste, shall turn to ice'... It's a repeating phrase.",
						"japanese": "このルーン…「試食を拒む者、氷となる」…繰り返される文句です。",
						"chinese": "这些符文……“拒绝品尝者，将化为冰”……这句话一直在重复。",
						"french": "Ces runes... 'Celui qui refuse de goûter, se transformera en glace'... C'est une phrase qui se répète.",
						"spanish": "Estas runas... 'Quien se niegue a probar, se convertirá en hielo'... Es una frase que se repite.",
						"vietnamese": "Những chữ rune này... 'Kẻ từ chối nếm, sẽ hóa thành băng'... Đó là một cụm từ lặp đi lặp lại.",
						"thai": "อักษรรูนพวกนี้... 'ผู้ใดปฏิเสธการชิม ผู้นั้นจะกลายเป็นน้ำแข็ง'... เป็นวลีที่ซ้ำๆ กัน",
						"hindi": "ये runes... 'जो स्वाद से इनकार करेगा, वह बर्फ बन जाएगा'... यह एक दोहराया जाने वाला वाक्यांश है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "강제로 음식을 먹게 하는 시스템이 사실이었군.",
						"english": "So the system of forced feeding was real.",
						"japanese": "強制的に食事をさせるシステムは本当だったんだな。",
						"chinese": "原来强制喂食的系统是真的。",
						"french": "Le système d'alimentation forcée était donc réel.",
						"spanish": "Así que el sistema de alimentación forzada era real.",
						"vietnamese": "Vậy là hệ thống ép buộc ăn uống là thật.",
						"thai": "ระบบการบังคับกินอาหารเป็นเรื่องจริงสินะ",
						"hindi": "तो जबरदस्ती खिलाने की प्रणाली सच थी।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "수백 년간 이어져 왔다는 징후도… 보여요.",
						"english": "Signs also show it's been going on for hundreds of years.",
						"japanese": "何百年も続いてきたという兆候も…見えます。",
						"chinese": "也看到了持续了数百年的迹象。",
						"french": "Des signes montrent aussi que cela dure depuis des centaines d'années.",
						"spanish": "También hay señales de que ha continuado durante cientos de años.",
						"vietnamese": "Cũng có dấu hiệu cho thấy nó đã kéo dài hàng trăm năm.",
						"thai": "มีสัญญาณบ่งบอกว่าสิ่งนี้ดำเนินมาหลายร้อยปีแล้วด้วย",
						"hindi": "संकेत यह भी दिखाते हैं कि यह सैकड़ों सालों से चल रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "이건… 바이킹 요리사 '헬비'의 기록인 것 같아요. '추위가… 나를 얼게 한다… 청어가…'",
						"english": "This seems to be... the record of Viking chef 'Helvi'. 'The cold... freezes me... the herring...'",
						"japanese": "これは…ヴァイキングの料理人「ヘルヴィ」の記録のようです。「寒さが…私を凍らせる…ニシンが…」",
						"chinese": "这好像是……维京厨师“赫尔维”的记录。“寒冷……让我冻结……鲱鱼……”",
						"french": "C'est... le journal du chef viking 'Helvi', je pense. 'Le froid... me gèle... le hareng...'",
						"spanish": "Esto parece ser... el registro de la chef vikinga 'Helvi'. 'El frío... me congela... el arenque...'",
						"vietnamese": "Đây có vẻ là... ghi chép của đầu bếp Viking 'Helvi'. 'Cái lạnh... làm tôi đóng băng... cá trích...'",
						"thai": "นี่ดูเหมือนจะเป็น... บันทึกของเชฟไวกิ้ง 'เฮลวี่' 'ความหนาวเย็น... ทำให้ฉันแข็ง... ปลาเฮอร์ริ่ง...'",
						"hindi": "यह... वाइकिंग शेफ 'हेल्वी' का रिकॉर्ड लगता है। 'सर्दी... मुझे जमा देती है... हेरिंग...'"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "청어? 훈제 청어 저주와 관련이 있나.",
						"english": "Herring? Is it related to the smoked herring curse?",
						"japanese": "ニシン？燻製ニシンの呪いと関係があるのか。",
						"chinese": "鲱鱼？和熏鲱鱼诅咒有关吗？",
						"french": "Hareng ? Est-ce lié à la malédiction du hareng fumé ?",
						"spanish": "¿Arenque? ¿Está relacionado con la maldición del arenque ahumado?",
						"vietnamese": "Cá trích? Có liên quan đến lời nguyền cá trích hun khói không?",
						"thai": "ปลาเฮอร์ริ่ง? เกี่ยวข้องกับคำสาปปลาเฮอร์ริ่งรมควันหรือเปล่า",
						"hindi": "हेरिंग? क्या यह स्मोक्ड हेरिंग के श्राप से संबंधित है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "차가운 푸른 아우라… 느껴지지 않나요? 그에게서 시작된 냉기 같아요.",
						"english": "A cold blue aura... can't you feel it? It feels like the chill started from him.",
						"japanese": "冷たい青いオーラ…感じませんか？彼から始まった冷気みたいです。",
						"chinese": "冰冷的蓝色光环……你没感觉到吗？感觉像是从他身上散发出来的寒气。",
						"french": "Une aura bleue et froide... ne la sentez-vous pas ? On dirait que le froid a commencé avec lui.",
						"spanish": "¿Un aura azul fría... no la sientes? Parece que el frío empezó con él.",
						"vietnamese": "Một luồng khí xanh lạnh lẽo... bạn không cảm thấy sao? Cứ như thể cái lạnh bắt nguồn từ anh ta.",
						"thai": "ออร่าสีน้ำเงินเย็นยะเยือก... ไม่รู้สึกหรือไง? เหมือนความหนาวเย็นนั้นเริ่มต้นจากเขา",
						"hindi": "एक ठंडी नीली आभा... क्या आपको महसूस नहीं होती? ऐसा लगता है कि ठंड उसी से शुरू हुई थी।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 시스템은 외부인의 소행이 아니에요. 룬이 말해요… '우리 안의 누군가'가 만들었다고.",
						"english": "This system isn't the work of outsiders. The runes say... 'Someone among us' created it.",
						"japanese": "このシステムは部外者の仕業ではありません。ルーンが言っています…「我々の内の誰か」が作ったと。",
						"chinese": "这个系统不是外人所为。符文上说……是“我们中的某个人”创造的。",
						"french": "Ce système n'est pas l'œuvre d'étrangers. Les runes disent... que 'quelqu'un parmi nous' l'a créé.",
						"spanish": "Este sistema no es obra de forasteros. Las runas dicen... que 'alguien entre nosotros' lo creó.",
						"vietnamese": "Hệ thống này không phải do người ngoài tạo ra. Các chữ rune nói... 'Một người trong số chúng ta' đã tạo ra nó.",
						"thai": "ระบบนี้ไม่ใช่ฝีมือของคนนอก อักษรรูนบอกว่า... 'ใครบางคนในหมู่พวกเรา' สร้างมันขึ้นมา",
						"hindi": "यह प्रणाली बाहरी लोगों का काम नहीं है। runes कहते हैं... 'हम में से किसी ने' इसे बनाया।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "우리 안의 누군가… 헬비인가?",
						"english": "Someone among us... Helvi?",
						"japanese": "我々の中に誰か…ヘルヴィか？",
						"chinese": "我们之中有人……海尔维吗？",
						"french": "Quelqu'un parmi nous... Helvi ?",
						"spanish": "Alguien entre nosotros... ¿Helvi?",
						"vietnamese": "Ai đó trong chúng ta... Helvi sao?",
						"thai": "ใครบางคนในหมู่พวกเรา... เฮลวิเหรอ?",
						"hindi": "हममें से कोई... हेलवी?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 조각이 맞춰지는 것 같아요. 하지만… 믿고 싶지 않은 진실이에요.",
						"english": "All the pieces seem to fit. But... it's a truth I don't want to believe.",
						"japanese": "全てのピースが揃ったようだ。しかし…信じたくない真実だ。",
						"chinese": "所有碎片似乎都吻合了。但是……这是我不想相信的真相。",
						"french": "Toutes les pièces semblent s'assembler. Mais... c'est une vérité que je ne veux pas croire.",
						"spanish": "Todas las piezas parecen encajar. Pero... es una verdad que no quiero creer.",
						"vietnamese": "Mọi mảnh ghép dường như đã khớp. Nhưng... đó là một sự thật tôi không muốn tin.",
						"thai": "ทุกชิ้นส่วนดูเหมือนจะเข้าที่แล้ว แต่... มันเป็นความจริงที่ฉันไม่อยากเชื่อ",
						"hindi": "सभी टुकड़े फिट होते दिख रहे हैं। पर... यह एक सच्चाई है जिस पर मैं विश्वास नहीं करना चाहता।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "도망칠 수 없다. 끝을 봐야 해.",
						"english": "Can't escape. Must see this through.",
						"japanese": "逃れられない。最後まで見届けなければ。",
						"chinese": "无法逃避。必须看到结局。",
						"french": "Impossible de fuir. Il faut aller jusqu'au bout.",
						"spanish": "No puedo escapar. Debo ver esto hasta el final.",
						"vietnamese": "Không thể trốn thoát. Phải đối mặt đến cùng.",
						"thai": "หนีไม่พ้น ต้องเผชิญหน้าให้ถึงที่สุด",
						"hindi": "भाग नहीं सकते। इसे अंत तक देखना होगा।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "크흐흐… 어리석은 것들. 나의 '명품 청어'는 영원하다!",
						"english": "Khkhkh... You fools. My 'Masterpiece Herring' is eternal!",
						"japanese": "クフフ…愚か者め。我が「傑作ニシン」は永遠だ！",
						"chinese": "哼哼哼…愚蠢的东西。我的“精品鲱鱼”永恒不朽！",
						"french": "Hmph hmph... Imbéciles. Mon « Hareng de Maître » est éternel !",
						"spanish": "Jajaja... Tontos. ¡Mi 'Arenque de Obra Maestra' es eterno!",
						"vietnamese": "Khà khà... Những kẻ ngu ngốc. 'Cá trích kiệt tác' của ta là vĩnh cửu!",
						"thai": "คิกๆ... พวกโง่เอ๊ย 'ปลาเฮอร์ริ่งชั้นเลิศ' ของข้าเป็นอมตะ!",
						"hindi": "खखख... मूर्खों। मेरी 'उत्कृष्ट हेरिंग' अमर है!"
					},
					"speaker": "boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았다. 이 폭정을 멈출 때까지…!",
						"english": "It's not over yet... Not until this tyranny is stopped!",
						"japanese": "まだ…終わっていない。この暴政を止めるまで…！",
						"chinese": "还没…结束。直到这暴政被阻止为止…！",
						"french": "Ce n'est pas encore... fini. Pas avant d'avoir arrêté cette tyrannie !",
						"spanish": "Aún no... ha terminado. ¡No hasta que esta tiranía sea detenida!",
						"vietnamese": "Vẫn chưa… kết thúc. Cho đến khi sự chuyên chế này bị chặn đứng…!",
						"thai": "ยัง…ไม่จบ จนกว่าจะหยุดยั้งความโหดร้ายนี้ได้!",
						"hindi": "अभी… खत्म नहीं हुआ। जब तक यह अत्याचार नहीं रुकता…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어서 와라. 다시 나의 '걸작'을 맛보게 해주마.",
						"english": "Come on. Let me make you taste my 'masterpiece' again.",
						"japanese": "さあ来い。再び我が「傑作」を味わわせてやろう。",
						"chinese": "来吧。我会让你再次尝尝我的“杰作”。",
						"french": "Viens. Je vais te faire goûter à nouveau mon « chef-d'œuvre ».",
						"spanish": "Ven. Te haré probar mi 'obra maestra' de nuevo.",
						"vietnamese": "Lại đây. Để ta cho ngươi nếm lại 'kiệt tác' của ta.",
						"thai": "มาเลย ข้าจะให้เจ้าลิ้มรส 'ผลงานชิ้นเอก' ของข้าอีกครั้ง",
						"hindi": "आओ। मैं तुम्हें फिर से अपनी 'मास्टरपीस' का स्वाद चखाऊँगा।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "얼음 제단의 중심. 에이라가 강제로 '명품 훈제 청어'를 입에 넣으려 하고 있었다.",
						"english": "At the center of the ice altar. Eira was forcibly trying to put the 'Masterpiece Smoked Herring' into my mouth.",
						"japanese": "氷の祭壇の中心。エイラが無理やり「名品燻製ニシン」を口に入れようとしていた。",
						"chinese": "冰祭坛的中心。艾拉正强行将“杰作熏鲱”塞入我的口中。",
						"french": "Au centre de l'autel de glace. Eira tentait de force de me faire avaler le 'Hareng Fumé Chef-d'œuvre'.",
						"spanish": "En el centro del altar de hielo. Eira intentaba forzarme a comer el 'Arenque Ahumado Obra Maestra'.",
						"vietnamese": "Tại trung tâm bàn thờ băng. Eira đang cố gắng ép tôi ăn 'Cá trích hun khói tuyệt tác'.",
						"thai": "ที่ใจกลางแท่นบูชาน้ำแข็ง เอร่ากำลังพยายามยัด 'ปลาเฮอร์ริ่งรมควันชั้นเลิศ' เข้าปากฉัน",
						"hindi": "बर्फ की वेदी के केंद्र में। एरा जबरदस्ती 'उत्कृष्ट स्मोक्ड हेरिंग' मेरे मुंह में डालने की कोशिश कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "흐읍… 싫어… 싫어요!",
						"english": "Ugh... No... I don't want to!",
						"japanese": "うぅ…嫌だ…嫌です！",
						"chinese": "唔……不要……我不喜欢！",
						"french": "Beurk... Non... Je ne veux pas !",
						"spanish": "Ugh... No... ¡No quiero!",
						"vietnamese": "Ư... Không... Không muốn!",
						"thai": "อึ๋ย... ไม่... ไม่เอา!",
						"hindi": "उह... नहीं... मुझे नहीं चाहिए!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "에이라!",
						"english": "Eira!",
						"japanese": "エイラ！",
						"chinese": "艾拉！",
						"french": "Eira !",
						"spanish": "¡Eira!",
						"vietnamese": "Eira!",
						"thai": "เอร่า!",
						"hindi": "एरा!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "섬뜩한 푸른 빛이 제단을 감쌌다. 거대한 청어의 형상이 얼음 속에서 모습을 드러냈다.",
						"english": "An eerie blue light enveloped the altar. The colossal form of a herring emerged from within the ice.",
						"japanese": "不気味な青い光が祭壇を包んだ。巨大なニシンの姿が氷の中から現れた。",
						"chinese": "诡异的蓝光笼罩了祭坛。一条巨大的鲱鱼形态从冰中显现出来。",
						"french": "Une étrange lumière bleue enveloppa l'autel. La forme colossale d'un hareng émergea de la glace.",
						"spanish": "Una extraña luz azul envolvió el altar. La forma colosal de un arenque emergió del hielo.",
						"vietnamese": "Một luồng ánh sáng xanh kỳ lạ bao trùm bàn thờ. Hình dạng khổng lồ của một con cá trích xuất hiện từ trong băng.",
						"thai": "แสงสีน้ำเงินอันน่าขนลุกโอบล้อมแท่นบูชา รูปร่างมหึมาของปลาเฮอร์ริ่งปรากฏขึ้นจากน้ำแข็ง",
						"hindi": "एक अजीब नीली रोशनी ने वेदी को घेर लिया। बर्फ के भीतर से एक विशाल हेरिंग का आकार उभरा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐음… 드디어 내 걸작을 알아볼 미식가들이 온 건가?",
						"english": "Hmm... Have gourmets finally arrived to appreciate my masterpiece?",
						"japanese": "ふむ…ついに我が傑作を理解する美食家たちが来たか？",
						"chinese": "嗯……终于有美食家来品鉴我的杰作了吗？",
						"french": "Hmm... Des gourmets sont-ils enfin arrivés pour apprécier mon chef-d'œuvre ?",
						"spanish": "Mmm... ¿Finalmente han llegado gourmets para apreciar mi obra maestra?",
						"vietnamese": "Hừm... Cuối cùng cũng có những người sành ăn đến để thưởng thức kiệt tác của ta sao?",
						"thai": "หืม... ในที่สุดนักชิมก็มาถึงเพื่อชื่นชมผลงานชิ้นเอกของฉันแล้วสินะ?",
						"hindi": "हम्म... क्या आखिरकार मेरे उत्कृष्ट कृति की सराहना करने के लिए पेटू आ गए हैं?"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 그 'Grumpy Herring'인가!",
						"english": "You... are 'The Grumpy Herring'!",
						"japanese": "貴様が…あの「不機嫌なニシン」か！",
						"chinese": "你就是……那个“暴躁鲱鱼”！",
						"french": "Vous... êtes le 'Hareng Grognon' !",
						"spanish": "¡Tú... eres el 'Arenque Gruñón'!",
						"vietnamese": "Ngươi... là 'Cá trích gắt gỏng' đó sao!",
						"thai": "แก... คือ 'ปลาเฮอร์ริ่งจอมหงุดหงิด' สินะ!",
						"hindi": "तुम... क्या वह 'गुस्सैल हेरिंग' हो!"
					}
				},
				{
					"content": {
						"korean": "좋다, 어서 경배해라! 이 극한의 추위 속에서 수백 년간 숙성된… 진정한 '명품 훈제 청어'의 맛을!",
						"english": "Good, hurry and worship! The taste of the true 'Masterpiece Smoked Herring'... aged for centuries in this extreme cold!",
						"japanese": "良いだろう、さあ崇め奉れ！この極寒の中で数百年熟成された…真の「名品燻製ニシン」の味を！",
						"chinese": "很好，快来膜拜吧！在这极致的寒冷中陈酿了数百年的……真正的“杰作熏鲱”的味道！",
						"french": "Bien, dépêchez-vous et adorez ! Le goût du véritable 'Hareng Fumé Chef-d'œuvre'... vieilli pendant des siècles dans ce froid extrême !",
						"spanish": "¡Bien, dense prisa y adoren! ¡El sabor del verdadero 'Arenque Ahumado Obra Maestra'... añejado durante siglos en este frío extremo!",
						"vietnamese": "Tốt, mau đến mà thờ phụng đi! Hương vị của 'Cá trích hun khói tuyệt tác' đích thực... được ủ hàng thế kỷ trong cái lạnh khắc nghiệt này!",
						"thai": "ดีล่ะ รีบมาสักการะซะ! รสชาติของ 'ปลาเฮอร์ริ่งรมควันชั้นเลิศ' ขนานแท้... ที่บ่มเพาะมาหลายศตวรรษในความหนาวเหน็บสุดขั้วนี้!",
						"hindi": "अच्छा, जल्दी करो और पूजा करो! असली 'उत्कृष्ट स्मोक्ड हेरिंग' का स्वाद... जो इस अत्यधिक ठंड में सदियों से परिपक्व हुआ है!"
					},
					"speaker": "boss",
					"emotion": "happy",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 '헬비'. 추위를 혐오했던 요리사이자… 너희를 얼어붙게 한 이 시스템의 창조자다!",
						"english": "I am 'Helvi'. A chef who loathed the cold... and the creator of this system that froze you all!",
						"japanese": "「私は『ヘルビ』。寒さを嫌った料理人…そしてお前たちを凍らせたこのシステムの創造主だ！」",
						"chinese": "“我是‘赫尔维’。一个厌恶寒冷的厨师……也是将你们冻结的这个系统的创造者！”",
						"french": "« Je suis 'Helvi'. Un chef qui détestait le froid... et le créateur de ce système qui vous a tous gelés ! »",
						"spanish": "«Soy 'Helvi'. Un chef que aborrecía el frío... ¡y el creador de este sistema que os ha congelado a todos!»",
						"vietnamese": "“Ta là 'Helvi'. Một đầu bếp căm ghét lạnh giá... và là kẻ tạo ra hệ thống đã đóng băng tất cả các ngươi!”",
						"thai": "“ข้าคือ 'เฮลวี' เชฟผู้ชิงชังความหนาวเย็น... และเป็นผู้สร้างระบบที่แช่แข็งพวกเจ้าทุกคน!”",
						"hindi": "“मैं 'हेलवी' हूँ। एक रसोइया जिसे ठंड से नफरत थी... और इस प्रणाली का निर्माता जिसने तुम सबको जमा दिया!”"
					},
					"emotion": "angry",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 우리 마을을…! 모두를 얼어붙게 했다고?",
						"english": "You... froze our village...! Everyone?",
						"japanese": "「お前が… 私たちの村を…！ みんなを凍らせたってのか？」",
						"chinese": "“你……冻结了我们的村庄……！所有人都被冻结了？”",
						"french": "« Tu... as gelé notre village... ! Tout le monde ? »",
						"spanish": "«¿Tú... congelaste nuestro pueblo...? ¿A todos?»",
						"vietnamese": "“Ngươi... đã đóng băng làng của chúng ta...! Tất cả mọi người?”",
						"thai": "“แก... แช่แข็งหมู่บ้านของเรา...! ทุกคนเลยเหรอ?”",
						"hindi": "“तुमने... हमारे गाँव को...! सबको जमा दिया?”"
					}
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "boss",
					"content": {
						"korean": "거부하는 자는… 나처럼 영원히 얼어붙는 차가운 요리 재료가 될 것이다! 크흐흐흐…",
						"english": "Those who defy me... will become cold ingredients, frozen forever like me! Khuhuhuhu...",
						"japanese": "「逆らう者は… 私のように永遠に凍りつく冷たい料理の材料となるだろう！ クフフフフ…」",
						"chinese": "“反抗者……将像我一样，永远冻结成冰冷的食材！呵呵呵呵……”",
						"french": "« Ceux qui me défient... deviendront des ingrédients froids, gelés pour l'éternité comme moi ! Khehehehe... »",
						"spanish": "«¡Quienes me desafíen... se convertirán en ingredientes fríos, congelados para siempre como yo! Jojojojo...»",
						"vietnamese": "“Kẻ nào chống đối... sẽ trở thành nguyên liệu lạnh giá, bị đóng băng vĩnh viễn như ta! Khư khư khư...”",
						"thai": "“ผู้ใดขัดขืน... จะกลายเป็นวัตถุดิบเย็นยะเยือก แช่แข็งไปชั่วนิรันดร์เหมือนข้า! คุฮุฮุฮุ...”",
						"hindi": "“जो मेरा विरोध करेंगे... वे मेरी तरह हमेशा के लिए जमे हुए ठंडे पकवान बन जाएंगे! ख्ह्ह्ह्ह्ह्ह...”"
					}
				},
				{
					"content": {
						"korean": "아, 물론 비늘은 좀 제거하고 먹어라. 이빨 상할라.",
						"english": "Oh, and of course, remove the scales before eating. Don't want to chip your teeth.",
						"japanese": "「あ、もちろん鱗は少し取り除いて食べろよ。歯が傷つくぞ。」",
						"chinese": "“哦，当然，吃之前记得把鳞片去掉。别把牙齿弄坏了。”",
						"french": "« Ah, et bien sûr, enlevez les écailles avant de manger. Ne vous cassez pas les dents. »",
						"spanish": "«Ah, y por supuesto, quítale las escamas antes de comer. No vayas a estropearte los dientes.»",
						"vietnamese": "“À, tất nhiên là phải gỡ vảy ra trước khi ăn. Kẻo hỏng răng đấy.”",
						"thai": "“อ้อ แน่นอนว่าต้องเอาเกล็ดออกก่อนกินนะ เดี๋ยวฟันหักเอาได้”",
						"hindi": "“ओह, और हाँ, खाने से पहले थोड़ी पपड़ी हटा देना। कहीं दांत न टूट जाए।”"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네 폭정은 여기서 끝이다!",
						"english": "Your tyranny ends here!",
						"japanese": "「お前の暴政はここで終わりだ！」",
						"chinese": "“你的暴政到此为止！”",
						"french": "« Ta tyrannie prend fin ici ! »",
						"spanish": "«¡Tu tiranía termina aquí!»",
						"vietnamese": "“Sự bạo ngược của ngươi kết thúc tại đây!”",
						"thai": "“ทรราชของแกจะสิ้นสุดลงที่นี่!”",
						"hindi": "“तुम्हारा अत्याचार यहीं खत्म होता है!”"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 이 맛을… 이 숙성의 경지를… 이해하지 못하다니…!",
						"english": "Urgh... To not understand this taste... this level of aging...!",
						"japanese": "「くっ… この味を… この熟成の境地を… 理解できないとは…！」",
						"chinese": "“咳……竟然无法理解这味道……这熟成的境界……！”",
						"french": "« Ugh... Ne pas comprendre ce goût... ce niveau de maturation... ! »",
						"spanish": "«Ugh... ¡No entender este sabor... este nivel de maduración...!»",
						"vietnamese": "“Khụ... Sao lại không thể hiểu được hương vị này... cảnh giới ủ chín này chứ...!”",
						"thai": "“อึก... ไม่เข้าใจรสชาติ... ไม่เข้าใจขั้นการบ่มเพาะนี้เลย...!”",
						"hindi": "“उफ़... इस स्वाद को... परिपक्वता के इस स्तर को... समझ नहीं पाना...!”"
					},
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 나의 영혼은… 이 숲의 모든 얼음 속에… 영원히…!",
						"english": "But... my soul... within all the ice of this forest... forever...!",
						"japanese": "「だが… 私の魂は… この森のすべての氷の中に… 永遠に…！」",
						"chinese": "“但是……我的灵魂……将永远……在这森林的每一块冰中……！”",
						"french": "« Mais... mon âme... dans toute la glace de cette forêt... pour toujours... ! »",
						"spanish": "«Pero... mi alma... en todo el hielo de este bosque... ¡para siempre...!»",
						"vietnamese": "“Nhưng... linh hồn của ta... sẽ mãi mãi... trong mọi tảng băng của khu rừng này...!”",
						"thai": "“แต่... วิญญาณของข้า... จะอยู่ในน้ำแข็งทุกก้อนในป่านี้... ชั่วนิรันดร์...!”",
						"hindi": "“लेकिन... मेरी आत्मा... इस जंगल की हर बर्फ में... हमेशा के लिए...!”"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "시스템은 무너졌다. 이 폭정은 끝났어.",
						"english": "The system has fallen. This tyranny is over.",
						"japanese": "「システムは崩壊した。この暴政は終わった。」",
						"chinese": "“系统崩溃了。这场暴政结束了。”",
						"french": "« Le système s'est effondré. Cette tyrannie est terminée. »",
						"spanish": "«El sistema ha caído. Esta tiranía ha terminado.»",
						"vietnamese": "“Hệ thống đã sụp đổ. Sự bạo ngược này đã chấm dứt.”",
						"thai": "“ระบบล่มสลายแล้ว ทรราชนี้สิ้นสุดลงแล้ว”",
						"hindi": "“प्रणाली ढह गई है। यह अत्याचार खत्म हो गया है।”"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "차가운 시스템이… 드디어….",
						"english": "The cold system... finally...",
						"japanese": "「冷たいシステムが… ついに…。」",
						"chinese": "“冰冷的系统……终于……”",
						"french": "« Le système froid... enfin... »",
						"spanish": "«El sistema frío... por fin...»",
						"vietnamese": "“Hệ thống lạnh lẽo... cuối cùng...”",
						"thai": "“ระบบอันเย็นชานั่น... ในที่สุด...”",
						"hindi": "“ठंडी प्रणाली... आखिरकार...”"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차가운 폭정의 심장이 멈추자, 얼어붙었던 모든 것이 서서히 녹아내리기 시작했다.",
						"english": "As the heart of the cold tyranny stopped, everything that had been frozen slowly began to melt.",
						"japanese": "「冷たい暴政の心臓が止まると、凍りついていたすべてがゆっくりと溶け始めた。」",
						"chinese": "“随着冰冷暴政的心脏停止跳动，所有被冻结的一切都开始缓缓融化。”",
						"french": "« Lorsque le cœur de la tyrannie glaciale s'arrêta, tout ce qui était gelé commença lentement à fondre. »",
						"spanish": "«Al detenerse el corazón de la fría tiranía, todo lo que había estado congelado comenzó a derretirse lentamente.»",
						"vietnamese": "“Khi trái tim của sự bạo ngược lạnh giá ngừng đập, mọi thứ bị đóng băng từ từ bắt đầu tan chảy.”",
						"thai": "“เมื่อหัวใจของทรราชเย็นชาหยุดเต้น ทุกสิ่งที่ถูกแช่แข็งก็เริ่มละลายอย่างช้าๆ”",
						"hindi": "“जैसे ही ठंडे अत्याचार का दिल रुका, जमी हुई हर चीज धीरे-धीरे पिघलने लगी।”"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "에이라의 눈빛에서, 잊혔던 희망의 불씨가 다시 타올랐다.",
						"english": "In Aira's eyes, the forgotten spark of hope reignited.",
						"japanese": "アイラの瞳の中で、忘れ去られた希望の火花が再び燃え上がった。",
						"chinese": "在艾拉的眼中，被遗忘的希望之火再次燃起。",
						"french": "Dans les yeux d'Aira, l'étincelle d'espoir oubliée s'est rallumée.",
						"spanish": "En los ojos de Aira, la chispa de esperanza olvidada volvió a encenderse.",
						"vietnamese": "Trong mắt Aira, tia hy vọng đã lãng quên lại bùng cháy.",
						"thai": "ในดวงตาของไอรา ประกายไฟแห่งความหวังที่ถูกลืมได้ลุกโชนขึ้นอีกครั้ง",
						"hindi": "ऐरा की आँखों में, आशा की भूली हुई चिंगारी फिर से जल उठी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"차가운 폭정의 심장. 마침내 모든 것이 얼어붙은 제단에 다다랐다.",
			"에이라는 강제로 '명품 훈제 청어' 시식을 강요받고 있었다.",
			"잊힌 전설, 룬, 그리고 '헬비'라는 이름… 모든 진실이 차가운 공기 속에 휘몰아쳤다.",
			"수백 년간 이어진 잔혹한 시스템의 본질이, 마침내 폭로된다."
		],
		"english": [
			"The heart of cold tyranny. At last, we arrived at the frozen altar.",
			"Aira was forced to sample 'Premium Smoked Herring'.",
			"Forgotten legends, runes, and the name 'Helvi'... All truths swirled in the cold air.",
			"The cruel system's centuries-long essence is finally revealed."
		],
		"japanese": [
			"冷酷な暴政の中心。ついに、すべてが凍りついた祭壇へと辿り着いた。",
			"エイラは「高級燻製ニシン」の試食を強制されていた。",
			"忘れられた伝説、ルーン、そして「ヘルビ」という名… すべての真実が冷たい空気の中に渦巻いた。",
			"数百年続いた残酷なシステムの真髄が、ついに暴かれる。"
		],
		"chinese": [
			"冰冷暴政的核心。终于，一切都抵达了被冻结的祭坛。",
			"艾拉被迫品尝“名品熏鲱鱼”。",
			"被遗忘的传说、符文，以及“赫尔维”这个名字…… 所有真相都在冰冷的空气中翻腾。",
			"延续数百年的残酷系统的本质，终于被揭露。"
		],
		"french": [
			"Le cœur de la tyrannie glaciale. Enfin, tout a convergé vers l'autel gelé.",
			"Aira était contrainte de déguster le « hareng fumé de luxe ».",
			"Légendes oubliées, runes, et le nom 'Helvi'... Toute la vérité tourbillonnait dans l'air froid.",
			"L'essence du système cruel qui a duré des siècles est enfin révélée."
		],
		"spanish": [
			"El corazón de la tiranía fría. Finalmente, todo llegó al altar congelado.",
			"Aira estaba siendo obligada a probar el \"Arenque Ahumado de Lujo\".",
			"Leyendas olvidadas, runas y el nombre 'Helvi'... Toda la verdad se arremolinaba en el aire frío.",
			"La esencia del cruel sistema que duró siglos, finalmente se revela."
		],
		"vietnamese": [
			"Trái tim của bạo quyền lạnh giá. Cuối cùng, mọi thứ đã đến được bàn thờ băng giá.",
			"Aira bị ép buộc nếm thử 'Cá trích hun khói cao cấp'.",
			"Huyền thoại bị lãng quên, rune, và cái tên 'Helvi'... Mọi sự thật cuộn xoáy trong không khí lạnh giá.",
			"Bản chất của hệ thống tàn khốc kéo dài hàng trăm năm, cuối cùng đã bị phơi bày."
		],
		"thai": [
			"ใจกลางแห่งทรราชเย็นชา ในที่สุด ทุกสิ่งก็มาถึงแท่นบูชาที่เยือกแข็ง",
			"ไอราถูกบังคับให้ชิม 'ปลาเฮอร์ริ่งรมควันชั้นเลิศ'",
			"ตำนานที่ถูกลืม รูน และชื่อ 'เฮลวี'... ความจริงทั้งหมดพัดวนอยู่ในอากาศที่เย็นยะเยือก",
			"แก่นแท้ของระบบอันโหดร้ายที่ดำเนินมาหลายศตวรรษ ในที่สุดก็ถูกเปิดเผย"
		],
		"hindi": [
			"शीतकालीन अत्याचार का हृदय। अंततः, सब कुछ जमे हुए वेदी तक पहुँच गया。",
			"ऐरा को जबरन 'प्रीमियम स्मोक्ड हेरिंग' चखने के लिए मजबूर किया जा रहा था।",
			"भूली हुई किंवदंतियाँ, रुन्स, और 'हेल्वी' नाम… सारी सच्चाई ठंडी हवा में घूम रही थी।",
			"सदियों से चले आ रहे एक क्रूर व्यवस्था का सार, अंततः उजागर हो गया।"
		]
	},
	"epilogue": {
		"korean": [
			"얼어붙은 제단은 침묵을 되찾았다. 강제된 시식의 잔혹한 역사는 막을 내렸다.",
			"헬비의 증오가 만든 시스템은 무너졌지만, 얼음의 흔적은 여전히 깊게 남아 있었다.",
			"구원이었을까, 아니면 또 다른 시작이었을까.",
			"에이라의 미소 속에, 차가운 세계의 작은 온기가 피어났다.",
			"차가운 폭정의 시대는 끝났지만, 그들의 여정은 아직 끝나지 않았다."
		],
		"english": [
			"The frozen altar regained its silence. The cruel history of forced tastings came to an end.",
			"Helvi's system of hatred crumbled, yet the icy traces remained deep.",
			"Was it salvation, or another beginning?",
			"In Aira's smile, a small warmth blossomed in the cold world.",
			"The era of cold tyranny ended, but their journey was not yet over."
		],
		"japanese": [
			"凍てついた祭壇は沈黙を取り戻した。強制された試食の残酷な歴史は幕を閉じた。",
			"ヘルビの憎悪が生んだシステムは崩壊したが、氷の痕跡は依然として深く残っていた。",
			"救済だったのか、それとも新たな始まりだったのか。",
			"エイラの微笑みの中に、冷たい世界の小さな温かさが芽生えた。",
			"冷たい暴政の時代は終わったが、彼らの旅はまだ終わっていなかった。"
		],
		"chinese": [
			"冰冻的祭坛恢复了寂静。强迫试吃的残酷历史画上了句号。",
			"赫尔维的憎恨所创造的系统崩溃了，但冰的痕迹依然深刻。",
			"是救赎，还是另一个开始？",
			"在艾拉的微笑中，冰冷世界里萌生了一丝温暖。",
			"冰冷暴政的时代结束了，但他们的旅程尚未结束。"
		],
		"french": [
			"L'autel gelé retrouva son silence. L'histoire cruelle des dégustations forcées prit fin.",
			"Le système créé par la haine d'Helvi s'est effondré, mais les traces de glace demeuraient profondes.",
			"Était-ce le salut, ou un autre commencement ?",
			"Dans le sourire d'Aira, une petite chaleur a éclos dans le monde froid.",
			"L'ère de la tyrannie glaciale était terminée, mais leur voyage ne l'était pas encore."
		],
		"spanish": [
			"El altar congelado recuperó su silencio. La cruel historia de las catas forzadas llegó a su fin.",
			"El sistema creado por el odio de Helvi se derrumbó, pero las huellas del hielo permanecieron profundas.",
			"¿Fue salvación, o fue otro comienzo?",
			"En la sonrisa de Aira, una pequeña calidez floreció en el mundo frío.",
			"La era de la tiranía fría había terminado, pero su viaje aún no."
		],
		"vietnamese": [
			"Bàn thờ băng giá đã lấy lại sự im lặng. Lịch sử tàn khốc của những buổi thử thức ăn cưỡng bức đã kết thúc.",
			"Hệ thống do sự căm ghét của Helvi tạo ra đã sụp đổ, nhưng dấu vết của băng vẫn còn sâu đậm.",
			"Đó là sự cứu rỗi, hay một khởi đầu khác?",
			"Trong nụ cười của Aira, một chút ấm áp đã nở rộ trong thế giới lạnh giá.",
			"Kỷ nguyên bạo quyền lạnh giá đã kết thúc, nhưng hành trình của họ vẫn chưa chấm dứt."
		],
		"thai": [
			"แท่นบูชาที่เยือกแข็งกลับมาเงียบงัน ประวัติศาสตร์อันโหดร้ายของการชิมที่ถูกบังคับได้สิ้นสุดลง",
			"ระบบที่สร้างจากความเกลียดชังของเฮลวีพังทลายลง แต่ร่องรอยของน้ำแข็งยังคงอยู่ลึก",
			"มันคือความรอด หรือการเริ่มต้นใหม่อีกครั้ง",
			"ในรอยยิ้มของไอรา ความอบอุ่นเล็กๆ ผลิบานขึ้นในโลกที่หนาวเย็น",
			"ยุคแห่งทรราชเย็นชาสิ้นสุดลง แต่การเดินทางของพวกเขายังไม่จบลง"
		],
		"hindi": [
			"जमे हुए वेदी ने अपनी चुप्पी फिर से प्राप्त की। जबरन चखने का क्रूर इतिहास समाप्त हो गया।",
			"हेल्वी की नफरत से बनी व्यवस्था ढह गई, लेकिन बर्फ के निशान गहरे बने रहे।",
			"क्या यह मोक्ष था, या एक और शुरुआत?",
			"ऐरा की मुस्कान में, ठंडी दुनिया में एक छोटी सी गर्माहट खिल उठी।",
			"शीतकालीन अत्याचार का युग समाप्त हो गया था, लेकिन उनकी यात्रा अभी खत्म नहीं हुई थी।"
		]
	}
} as const;
