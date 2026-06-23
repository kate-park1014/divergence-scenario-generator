export const scenario_snowy_mimiria_81_04 = {
	"scenario_id": "snowy_mimiria_81_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "끝없는 설원, 길은 또다시 사라졌다. 차가운 바람이 고대 유적의 파편을 휘감았다.",
						"english": "Endless snowfield, the path vanished again. Cold wind enveloped the fragments of ancient ruins.",
						"japanese": "果てしない雪原、道はまた消えた。冷たい風が古代遺跡の破片を包み込む。",
						"chinese": "无尽的雪原，道路又一次消失了。寒风缠绕着古老遗迹的碎片。",
						"french": "Champ de neige infini, le chemin disparut encore. Le vent froid enveloppa les fragments des ruines antiques.",
						"spanish": "Campo de nieve interminable, el camino desapareció de nuevo. El viento frío envolvió los fragmentos de las ruinas antiguas.",
						"vietnamese": "Cánh đồng tuyết vô tận, con đường lại biến mất. Gió lạnh cuốn lấy những mảnh vỡ của di tích cổ đại.",
						"thai": "ทุ่งหิมะอันกว้างใหญ่ เส้นทางเลือนหายไปอีกครั้ง สายลมหนาวโอบล้อมเศษซากปรักหักพังโบราณ",
						"hindi": "अनंत बर्फीला मैदान, रास्ता फिर से गायब हो गया। ठंडी हवा ने प्राचीन खंडहरों के टुकड़ों को घेर लिया।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 또 제자리잖아!",
						"english": "Damn it, back to square one!",
						"japanese": "くそっ、また振り出しだ！",
						"chinese": "该死，又回到原点了！",
						"french": "Mince, encore au point de départ !",
						"spanish": "¡Maldita sea, otra vez al punto de partida!",
						"vietnamese": "Chết tiệt, lại về chỗ cũ rồi!",
						"thai": "บ้าเอ๊ย กลับมาที่เดิมอีกแล้ว!",
						"hindi": "धिक्कार है, फिर से वहीं!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "…조각난 예언… 이 고통은… 무엇을 의미하는가…",
						"english": "...Shards of prophecy... What does this pain mean...",
						"japanese": "…砕かれた予言…この苦痛は…何を意味するのか…",
						"chinese": "……破碎的预言……这份痛苦……意味着什么……",
						"french": "...Prophétie fragmentée... Que signifie cette douleur...",
						"spanish": "...Profecía fragmentada... ¿Qué significa este dolor...?",
						"vietnamese": "...Lời tiên tri tan vỡ... Nỗi đau này... có ý nghĩa gì...",
						"thai": "...คำทำนายที่แตกสลาย... ความเจ็บปวดนี้... หมายถึงอะไร...",
						"hindi": "...टुकड़ों में बंटी भविष्यवाणी... इस दर्द का क्या मतलब है...?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신은… 누구시죠?",
						"english": "Who... are you?",
						"japanese": "あなたは…どちら様で？",
						"chinese": "您是……谁？",
						"french": "Qui... êtes-vous ?",
						"spanish": "¿Quién... es usted?",
						"vietnamese": "Ngài là... ai?",
						"thai": "ท่าน... คือใคร?",
						"hindi": "आप... कौन हैं?"
					},
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "힐드. 전장에서 스러진 자들의 의례자. 이 비문을 해독 중이다.",
						"english": "Hild. Ritualist of those fallen on the battlefield. I am deciphering this inscription.",
						"japanese": "ヒルド。戦場で斃れた者たちの儀礼者だ。この碑文を解読している。",
						"chinese": "希尔德。战场亡者的仪式师。我正在解读这篇碑文。",
						"french": "Hild. Ritualiste de ceux tombés sur le champ de bataille. Je déchiffre cette inscription.",
						"spanish": "Hild. Ritualista de los caídos en el campo de batalla. Estoy descifrando esta inscripción.",
						"vietnamese": "Hild. Người cử hành nghi lễ cho những chiến binh đã ngã xuống. Ta đang giải mã bản khắc này.",
						"thai": "ฮิลด์. ผู้ประกอบพิธีแก่ผู้ล้มตายในสนามรบ ข้ากำลังถอดรหัสจารึกนี้อยู่",
						"hindi": "हिल्ड। युद्धभूमि में गिरे हुए लोगों की रस्म-अदायगी करने वाली। मैं इस शिलालेख को समझ रही हूँ।"
					}
				},
				{
					"content": {
						"korean": "이 안에… 모든 것이 반복되는 이유가 있을지도 몰라.",
						"english": "Perhaps within this... lies the reason why everything repeats.",
						"japanese": "この中に…すべてが繰り返される理由があるのかもしれない。",
						"chinese": "也许在这之中……有万物循环往复的原因。",
						"french": "Peut-être qu'ici... se trouve la raison pour laquelle tout se répète.",
						"spanish": "Quizás aquí... resida la razón por la que todo se repite.",
						"vietnamese": "Có lẽ bên trong này... có lý do tại sao mọi thứ cứ lặp đi lặp lại.",
						"thai": "บางทีในนี้... อาจมีเหตุผลว่าทำไมทุกสิ่งถึงได้วนซ้ำ",
						"hindi": "शायद इसके अंदर... सब कुछ दोहराने का कारण हो।"
					},
					"emotion": "base",
					"speaker": "hild",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이것 봐… 비문에 이런 내용이 있어. '고통받는 자들의 분노가 세계를 얼린다.'",
						"english": "Look... the inscription says: 'The wrath of the tormented freezes the world.'",
						"japanese": "見て…碑文にこう書いてある。「苦しむ者たちの怒りが世界を凍らせる。」",
						"chinese": "看……碑文上写着：‘受难者的愤怒将世界冰封。’",
						"french": "Regarde… L'inscription dit : 'La colère des tourmentés gèle le monde.'",
						"spanish": "Mira... la inscripción dice: 'La ira de los atormentados congela el mundo.'",
						"vietnamese": "Nhìn này… dòng chữ khắc ghi: 'Cơn thịnh nộ của những kẻ đau khổ sẽ đóng băng thế giới.'",
						"thai": "ดูสิ... จารึกเขียนไว้ว่า: 'ความพิโรธของผู้ทุกข์ทรมานจะแช่แข็งโลก'",
						"hindi": "देखो... शिलालेख पर लिखा है: 'पीड़ा में पड़े हुए लोगों का क्रोध दुनिया को जमा देता है।'"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "고통받는 자들? 그게 대체 누군데?",
						"english": "The tormented? Who are they?",
						"japanese": "苦しむ者たち？一体誰のことだ？",
						"chinese": "受难者？那到底是谁？",
						"french": "Les tourmentés ? Qui sont-ils ?",
						"spanish": "¿Los atormentados? ¿Quiénes son ellos?",
						"vietnamese": "Những kẻ đau khổ? Rốt cuộc là ai?",
						"thai": "ผู้ทุกข์ทรมาน? พวกเขาเป็นใครกันแน่?",
						"hindi": "पीड़ा में पड़े हुए लोग? वे आखिर कौन हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "…희미한 환영이 보여. 거대한 존재의… 끝없는 고통.",
						"english": "...I see a faint vision. Of a colossal being... in endless agony.",
						"japanese": "…かすかな幻影が見える。巨大な存在の…終わりのない苦痛。",
						"chinese": "……我看到了一个模糊的幻象。一个巨大存在的……无尽痛苦。",
						"french": "...Je vois une faible vision. D'un être colossal... dans une agonie sans fin.",
						"spanish": "...Veo una visión tenue. De un ser colosal... en una agonía sin fin.",
						"vietnamese": "...Tôi thấy một ảo ảnh mờ nhạt. Của một thực thể khổng lồ... trong nỗi đau vô tận.",
						"thai": "...ฉันเห็นภาพลางๆ ของบางสิ่งขนาดมหึมา... ในความทุกข์ทรมานอันไม่สิ้นสุด",
						"hindi": "...मुझे एक धुंधला सा दृश्य दिख रहा है। एक विशालकाय सत्ता का... अंतहीन दर्द।"
					}
				},
				{
					"content": {
						"korean": "그 환영이… 이 미로랑 무슨 상관이야?",
						"english": "What does that vision... have to do with this labyrinth?",
						"japanese": "その幻影が…この迷宮と何の関係があるんだ？",
						"chinese": "那个幻象……和这个迷宫有什么关系？",
						"french": "Qu'est-ce que cette vision... a à voir avec ce labyrinthe ?",
						"spanish": "¿Qué tiene que ver esa visión... con este laberinto?",
						"vietnamese": "Ảo ảnh đó... liên quan gì đến mê cung này?",
						"thai": "ภาพหลอนนั้น... เกี่ยวอะไรกับเขาวงกตนี้?",
						"hindi": "उस दृश्य का... इस भूलभुलैया से क्या लेना-देना है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 반복이… 그 고통에서 비롯된 저주일지도 모른다.",
						"english": "All these repetitions... might be a curse born from that agony.",
						"japanese": "この全ての繰り返しが…あの苦痛から生まれた呪いなのかもしれない。",
						"chinese": "所有这些循环……也许是源于那痛苦的诅咒。",
						"french": "Toutes ces répétitions... pourraient être une malédiction née de cette agonie.",
						"spanish": "Todas estas repeticiones... podrían ser una maldición nacida de esa agonía.",
						"vietnamese": "Tất cả những vòng lặp này... có lẽ là một lời nguyền sinh ra từ nỗi đau đó.",
						"thai": "การวนซ้ำทั้งหมดนี้... อาจเป็นคำสาปที่เกิดจากความทุกข์ทรมานนั้น",
						"hindi": "यह सारी पुनरावृत्ति... उस दर्द से उत्पन्न एक अभिशाप हो सकती है।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "hild",
					"emotion": "sad",
					"content": {
						"korean": "안 돼… 보여… 거대한 눈보라 속에서… 찢겨진 기억 조각들이…",
						"english": "No... I see it... fragments of torn memories... in a colossal blizzard...",
						"japanese": "だめだ…見える…巨大な吹雪の中で…引き裂かれた記憶の断片が…",
						"chinese": "不……我看到了……在巨大的暴风雪中……破碎的记忆碎片……",
						"french": "Non... Je le vois... des fragments de souvenirs déchirés... dans un blizzard colossal...",
						"spanish": "No... lo veo... fragmentos de recuerdos desgarrados... en una ventisca colosal...",
						"vietnamese": "Không… tôi thấy rồi… những mảnh ký ức vụn vỡ… trong một trận bão tuyết khổng lồ…",
						"thai": "ไม่นะ... ฉันเห็นแล้ว... เศษเสี้ยวความทรงจำที่แตกสลาย... ในพายุหิมะขนาดมหึมา...",
						"hindi": "नहीं... मुझे दिख रहा है... एक विशाल बर्फीले तूफान में... फटी हुई यादों के टुकड़े..."
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "힐드! 괜찮아? 뭘 본 거야?",
						"english": "Hild! Are you okay? What did you see?",
						"japanese": "ヒルデ！大丈夫か？何を見たんだ？",
						"chinese": "希尔德！你还好吗？你看到了什么？",
						"french": "Hild ! Tu vas bien ? Qu'as-tu vu ?",
						"spanish": "¡Hild! ¿Estás bien? ¿Qué viste?",
						"vietnamese": "Hild! Cậu ổn không? Cậu đã thấy gì?",
						"thai": "ฮิลด์! เธอโอเคไหม? เธอเห็นอะไร?",
						"hindi": "हिल्ड! क्या तुम ठीक हो? तुमने क्या देखा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "따뜻한 안식처… 거짓된 온기… 그 안에서 소름 끼치는 속삭임이 들려와…",
						"english": "A warm sanctuary... false warmth... within it, chilling whispers...",
						"japanese": "暖かい安息の地…偽りの温もり…その中で、ぞっとするような囁きが聞こえる…",
						"chinese": "一个温暖的庇护所……虚假的温暖……其中传来令人毛骨悚然的低语……",
						"french": "Un sanctuaire chaleureux... une fausse chaleur... à l'intérieur, des murmures glaçants...",
						"spanish": "Un refugio cálido... un calor falso... dentro, susurros escalofriantes...",
						"vietnamese": "Một nơi trú ẩn ấm áp… sự ấm áp giả dối… bên trong đó, những lời thì thầm rợn người…",
						"thai": "ที่พำนักอันอบอุ่น... ความอบอุ่นจอมปลอม... ภายในนั้น มีเสียงกระซิบอันน่าขนลุก...",
						"hindi": "एक गर्म आश्रय... झूठी गर्माहट... उसके अंदर, डरावनी फुसफुसाहटें सुनाई दे रही हैं..."
					},
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 진실은… 저주야. 나를 파멸시킬 저주.",
						"english": "This truth... it's a curse. A curse that will destroy me.",
						"japanese": "この真実は…呪いだ。私を破滅させる呪い。",
						"chinese": "这个真相……是一个诅咒。一个会毁灭我的诅咒。",
						"french": "Cette vérité... c'est une malédiction. Une malédiction qui me détruira.",
						"spanish": "Esta verdad... es una maldición. Una maldición que me destruirá.",
						"vietnamese": "Sự thật này… là một lời nguyền. Lời nguyền sẽ hủy diệt tôi.",
						"thai": "ความจริงนี้... มันคือคำสาป คำสาปที่จะทำลายฉัน",
						"hindi": "यह सच... यह एक अभिशाप है। एक अभिशाप जो मुझे नष्ट कर देगा।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "힐드의 눈동자는 이미 이 세계의 고통에 잠식되어 있었다.",
						"english": "Hild's eyes were already consumed by the suffering of this world.",
						"japanese": "ヒルデの瞳はすでにこの世界の苦痛に蝕まれていた。",
						"chinese": "希尔德的眼睛已经被这个世界的痛苦吞噬了。",
						"french": "Les yeux d'Hild étaient déjà consumés par la souffrance de ce monde.",
						"spanish": "Los ojos de Hild ya estaban consumidos por el sufrimiento de este mundo.",
						"vietnamese": "Đôi mắt của Hild đã bị nỗi đau của thế giới này nuốt chửng.",
						"thai": "ดวงตาของฮิลด์ถูกกลืนกินด้วยความทุกข์ทรมานของโลกนี้แล้ว",
						"hindi": "हिल्ड की आँखें पहले ही इस दुनिया के दर्द से ग्रसित हो चुकी थीं।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "속죄하라… 속죄… 얼어붙은 바람이… 내게 속삭인다…",
						"english": "Atonement... Atonement... The frozen wind... whispers to me...",
						"japanese": "償え… 償い… 凍える風が… 私に囁く…",
						"chinese": "忏悔吧……忏悔……冰冷之风……对我低语……",
						"french": "Expiez... Expiez... Le vent glacial... me murmure...",
						"spanish": "Expiad... Expiad... El viento helado... me susurra...",
						"vietnamese": "Sám hối... Sám hối... Làn gió băng giá... đang thì thầm với ta...",
						"thai": "จงชดใช้... ชดใช้... สายลมเยือกแข็ง... กระซิบกับข้า...",
						"hindi": "प्रायश्चित्त करो... प्रायश्चित्त... बर्फीली हवा... मुझसे फुसफुसाती है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "힐드! 정신 차려! 뭘 보고 있는 거야?",
						"english": "Hild! Snap out of it! What are you looking at?",
						"japanese": "ヒルド！しっかりしろ！何を見ているんだ？",
						"chinese": "希尔德！清醒点！你在看什么？",
						"french": "Hild ! Reprends-toi ! Qu'est-ce que tu regardes ?",
						"spanish": "¡Hild! ¡Reacciona! ¿Qué estás mirando?",
						"vietnamese": "Hild! Tỉnh lại đi! Ngươi đang nhìn gì vậy?",
						"thai": "ฮิลด์! ตั้งสติหน่อย! เธอกำลังมองอะไร?",
						"hindi": "हिल्ड! होश में आओ! क्या देख रही हो?"
					}
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "돌아가… 여기는… 돌아올 수 없는 곳… 고통이… 너희를 삼킬 거야.",
						"english": "Go back... This is... a point of no return... Pain will... consume you.",
						"japanese": "戻れ… ここは… 戻れない場所… 苦痛が… お前たちを飲み込むだろう。",
						"chinese": "回去吧……这里是……有去无回之地……痛苦会……吞噬你们。",
						"french": "Retourne... Ici... est un point de non-retour... La douleur... vous dévorera.",
						"spanish": "Regresad... Esto es... un punto sin retorno... El dolor os... consumirá.",
						"vietnamese": "Hãy quay về... Nơi đây... là chốn không thể quay lại... Nỗi đau sẽ... nuốt chửng các ngươi.",
						"thai": "กลับไปซะ... ที่นี่... คือที่ที่ไม่มีวันหวนกลับ... ความเจ็บปวดจะ... กลืนกินพวกเจ้า",
						"hindi": "वापस जाओ... यह... वापसी का कोई रास्ता नहीं... दर्द... तुम्हें निगल जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그는… 분노의 그림자… 모든 것을 뒤틀지…",
						"english": "He is... the shadow of wrath... distorting everything...",
						"japanese": "彼は… 憤怒の影… 全てを歪める…",
						"chinese": "他……是愤怒的阴影……扭曲一切……",
						"french": "Il est... l'ombre de la colère... déformant tout...",
						"spanish": "Él es... la sombra de la ira... distorsionando todo...",
						"vietnamese": "Hắn là... bóng đêm của sự phẫn nộ... vặn vẹo mọi thứ...",
						"thai": "เขาคือ... เงาแห่งความพิโรธ... บิดเบือนทุกสิ่ง...",
						"hindi": "वह... क्रोध की छाया है... सब कुछ विकृत कर रहा है..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "주변의 눈보라는 더욱 거세졌고, 마치 무언가의 절규처럼 들렸다. 탐험대는 멈출 수 없었다.",
						"english": "The blizzard intensified around them, sounding like a scream. The expedition could not stop.",
						"japanese": "周囲の吹雪はさらに激しさを増し、まるで何かの叫び声のように聞こえた。探検隊は止まることができなかった。",
						"chinese": "周围的暴风雪愈发猛烈，听起来仿佛某种尖叫。探险队无法停下脚步。",
						"french": "La tempête de neige s'intensifiait autour d'eux, sonnant comme un hurlement. L'expédition ne pouvait s'arrêter.",
						"spanish": "La ventisca a su alrededor se intensificó, sonando como un grito. La expedición no podía detenerse.",
						"vietnamese": "Bão tuyết xung quanh càng lúc càng dữ dội, nghe như tiếng gào thét của thứ gì đó. Đoàn thám hiểm không thể dừng lại.",
						"thai": "พายุหิมะรอบตัวรุนแรงขึ้นเรื่อยๆ ราวกับเสียงกรีดร้องของบางสิ่ง ทีมสำรวจไม่อาจหยุดได้",
						"hindi": "उनके चारों ओर बर्फीला तूफान और तेज हो गया, किसी चीख की तरह लग रहा था। अभियान रुक नहीं सका।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 고통은… 지금부터 시작이다.",
						"english": "...Is that all? True pain... begins now.",
						"japanese": "...これっぽっちか。本当の苦痛は…今から始まる。",
						"chinese": "...就这点程度吗。真正的痛苦…现在才开始。",
						"french": "...C'est tout ce que tu as ? La vraie douleur... commence maintenant.",
						"spanish": "...¿Eso es todo? El verdadero dolor... comienza ahora.",
						"vietnamese": "...Chỉ đến mức này thôi sao. Nỗi đau thật sự... bây giờ mới bắt đầu.",
						"thai": "...แค่นี้เองเหรอ ความเจ็บปวดที่แท้จริง... เพิ่งจะเริ่มต้นขึ้นต่างหาก",
						"hindi": "...बस इतना ही? असली दर्द... अब शुरू होगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네놈의 저주는… 여기서 끝이다!",
						"english": "Your curse... ends here!",
						"japanese": "貴様の呪いは…ここで終わりだ！",
						"chinese": "你的诅咒…到此为止！",
						"french": "Ta malédiction... s'arrête ici !",
						"spanish": "¡Tu maldición... termina aquí!",
						"vietnamese": "Lời nguyền của ngươi... kết thúc tại đây!",
						"thai": "คำสาปของแก... จบลงแค่นี้หรอก",
						"hindi": "तेरा अभिशाप... यहीं खत्म होता है!"
					}
				},
				{
					"content": {
						"korean": "정체 모를 존재의 그림자는 흩어졌지만, 이 절망의 순환은 아직 끝나지 않은 듯했다.",
						"english": "The shadow of an unknown entity scattered, but this cycle of despair seemed far from over.",
						"japanese": "正体不明の存在の影は消え去ったが、この絶望の循環はまだ終わっていないようだった。",
						"chinese": "未知存在的影子消散了，但这场绝望的循环似乎仍未结束。",
						"french": "L'ombre d'une entité inconnue s'est dispersée, mais ce cycle de désespoir ne semblait pas terminé.",
						"spanish": "La sombra de una entidad desconocida se dispersó, pero este ciclo de desesperación no parecía haber terminado.",
						"vietnamese": "Bóng đen của thực thể không rõ danh tính đã tan biến, nhưng vòng lặp tuyệt vọng này dường như vẫn chưa kết thúc.",
						"thai": "เงาของสิ่งมีชีวิตที่ไม่รู้จักได้หายไปแล้ว แต่ดูเหมือนว่าวงจรแห่งความสิ้นหวังนี้จะยังไม่จบลง",
						"hindi": "एक अज्ञात सत्ता की छाया बिखर गई, लेकिन निराशा का यह चक्र अभी खत्म नहीं हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "눈보라 너머, 희미하게 새로운 길이 열리는 듯했다.",
						"english": "Beyond the blizzard, a faint new path seemed to open.",
						"japanese": "吹雪の向こうに、かすかに新しい道が開けているようだった。",
						"chinese": "暴风雪的尽头，一条新的道路似乎若隐若现。",
						"french": "Au-delà du blizzard, un nouveau chemin semblait s'ouvrir faiblement.",
						"spanish": "Más allá de la ventisca, un nuevo camino parecía abrirse débilmente.",
						"vietnamese": "Vượt qua bão tuyết, một con đường mới dường như đang mở ra mờ ảo.",
						"thai": "เบื้องหลังพายุหิมะ ดูเหมือนว่าจะมีเส้นทางใหม่ปรากฏขึ้นรางๆ",
						"hindi": "बर्फ़ीले तूफ़ान के पार, एक नया रास्ता हल्का-सा खुलता हुआ लग रहा था।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 눈보라의 심장부. 그곳에는 정체 모를 그림자가 기다리고 있었다.",
						"english": "The heart of the great blizzard. An unknown shadow awaited them there.",
						"japanese": "巨大な吹雪の心臓部。そこには正体不明の影が待ち受けていた。",
						"chinese": "巨大暴风雪的核心。一个不明身份的影子在那里等候着。",
						"french": "Le cœur de la grande tempête de neige. Une ombre inconnue les y attendait.",
						"spanish": "El corazón de la gran ventisca. Una sombra desconocida les esperaba allí.",
						"vietnamese": "Trái tim của cơn bão tuyết khổng lồ. Một bóng đen vô danh đang chờ đợi ở đó.",
						"thai": "ใจกลางของพายุหิมะอันยิ่งใหญ่ เงาปริศนากำลังรออยู่ที่นั่น",
						"hindi": "विशाल बर्फीले तूफान का केंद्र। एक अज्ञात छाया वहां उनका इंतजार कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 다른 어리석은 자들이군. 이 고통의 순환은 끝나지 않아.",
						"english": "Another group of fools. This cycle of pain will never end.",
						"japanese": "また愚かな者たちか。この苦痛の循環は終わらない。",
						"chinese": "又是一群愚蠢之人。这痛苦的循环永无止境。",
						"french": "Un autre groupe d'imbéciles. Ce cycle de douleur ne finira jamais.",
						"spanish": "Otro grupo de tontos. Este ciclo de dolor nunca terminará.",
						"vietnamese": "Lại một đám ngu xuẩn nữa. Vòng tuần hoàn đau khổ này sẽ không bao giờ kết thúc.",
						"thai": "พวกคนโง่เง่าอีกแล้ว วงจรแห่งความเจ็บปวดนี้จะไม่มีวันสิ้นสุด",
						"hindi": "मूर्खों का एक और समूह। यह दर्द का चक्र कभी खत्म नहीं होगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 건가!",
						"english": "Was it... you who orchestrated all of this!",
						"japanese": "お前が… この全てを企んだのか！",
						"chinese": "是你……策划了这一切吗！",
						"french": "Est-ce... toi qui as orchestré tout cela !",
						"spanish": "¡Fuiste... tú quien orquestó todo esto!",
						"vietnamese": "Chính ngươi... đã sắp đặt tất cả chuyện này!",
						"thai": "แก... เป็นคนบงการเรื่องทั้งหมดนี้เองเหรอ!",
						"hindi": "क्या... यह सब तुमने ही रचा था!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "내 이름은 중요치 않다. 중요한 건… 너희의 절망뿐.",
						"english": "My name is unimportant. All that matters... is your despair.",
						"japanese": "私の名前は重要ではない。重要なのは… お前たちの絶望だけだ。",
						"chinese": "我的名字不重要。重要的是……只有你们的绝望。",
						"french": "Mon nom n'a pas d'importance. Tout ce qui compte... c'est votre désespoir.",
						"spanish": "Mi nombre no importa. Todo lo que importa... es vuestra desesperación.",
						"vietnamese": "Tên ta không quan trọng. Điều quan trọng... chỉ là sự tuyệt vọng của các ngươi.",
						"thai": "ชื่อของข้าไม่สำคัญ สิ่งสำคัญคือ... ความสิ้นหวังของพวกเจ้าต่างหาก",
						"hindi": "मेरा नाम महत्वपूर्ण नहीं है। जो मायने रखता है... वह केवल तुम्हारी निराशा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희의 분노는… 날 더 강하게 할 뿐.",
						"english": "Your rage will... only make me stronger.",
						"japanese": "お前たちの怒りは… 私をより強くするだけだ。",
						"chinese": "你们的愤怒……只会让我更强大。",
						"french": "Votre rage ne fera... que me rendre plus fort.",
						"spanish": "Vuestra ira... solo me hará más fuerte.",
						"vietnamese": "Sự phẫn nộ của các ngươi... chỉ khiến ta mạnh hơn mà thôi.",
						"thai": "ความโกรธแค้นของพวกเจ้า... มีแต่จะทำให้ข้าแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम्हारा क्रोध... मुझे और मजबूत ही बनाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 너희의 고통은… 영원히 반복될 뿐.",
						"english": "Fools. Your suffering... will only repeat endlessly.",
						"japanese": "愚かな者たちめ。お前たちの苦痛は…永遠に繰り返されるだけだ。",
						"chinese": "愚蠢的东西。你们的痛苦…只会永远重复。",
						"french": "Imbéciles. Votre souffrance... ne fera que se répéter à l'infini.",
						"spanish": "Necios. Vuestro sufrimiento... solo se repetirá sin fin.",
						"vietnamese": "Những kẻ ngu ngốc. Nỗi đau của các ngươi... sẽ chỉ lặp lại vĩnh viễn mà thôi.",
						"thai": "เจ้าพวกโง่เขลา ความทุกข์ทรมานของพวกเจ้า... จะวนเวียนไม่รู้จบ",
						"hindi": "मूर्खों। तुम्हारा दुख... बस हमेशा के लिए दोहराया जाएगा।"
					}
				},
				{
					"content": {
						"korean": "크윽… 아직 끝나지 않았어…!",
						"english": "Ugh... it's not over yet...!",
						"japanese": "くっ…まだ終わってない…！",
						"chinese": "呃啊…还没结束…！",
						"french": "Ugh... ce n'est pas encore fini...!",
						"spanish": "Ugh... ¡aún no ha terminado...!",
						"vietnamese": "Khụ... vẫn chưa kết thúc...!",
						"thai": "อึก... ยังไม่จบแค่นี้หรอก...!",
						"hindi": "उफ़... यह अभी खत्म नहीं हुआ है...!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "눈보라는 더욱 거세졌고, 탐험대는 다시 한번 절망의 나락으로 떨어졌다.",
						"english": "The blizzard intensified, and the expedition party once again plunged into the abyss of despair.",
						"japanese": "吹雪はさらに激しくなり、探検隊は再び絶望の淵へと落ちていった。",
						"chinese": "暴风雪愈发猛烈，探险队再次陷入绝望的深渊。",
						"french": "Le blizzard s'intensifia, et l'équipe d'expédition replongea une fois de plus dans l'abîme du désespoir.",
						"spanish": "La ventisca se intensificó, y la expedición volvió a caer en el abismo de la desesperación.",
						"vietnamese": "Bão tuyết càng trở nên dữ dội hơn, và đoàn thám hiểm một lần nữa rơi vào vực sâu của tuyệt vọng.",
						"thai": "พายุหิมะทวีความรุนแรงขึ้น และคณะสำรวจก็ตกอยู่ในห้วงลึกของความสิ้นหวังอีกครั้ง",
						"hindi": "बर्फ़ीला तूफ़ान और तेज़ हो गया, और अभियान दल एक बार फिर निराशा के गर्त में गिर गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 눈보라 속, 길은 다시 사라졌다.",
			"절망 끝에 발견한 건, 얼어붙은 고대 유적.",
			"그리고 그 안에, 부서진 예언을 쫓는 '힐드'가 있었다.",
			"진실은 차갑게 얼어붙어, 고통의 서곡을 연주한다."
		],
		"english": [
			"Amidst the endless blizzard, the path vanished again.",
			"At the edge of despair, I found a frozen ancient ruin.",
			"And within it, 'Hild' pursued a broken prophecy.",
			"Truth, frozen cold, plays a prelude of pain."
		],
		"japanese": [
			"終わりのない吹雪の中、道は再び消えた。",
			"絶望の果てに見つけたのは、凍てついた古代遺跡。",
			"そしてその中に、砕かれた予言を追う「ヒルド」がいた。",
			"真実は冷たく凍りつき、苦痛の序曲を奏でる。"
		],
		"chinese": [
			"在无尽的暴风雪中，道路再次消失了。",
			"在绝望的尽头，我发现了一座冰冻的古代遗迹。",
			"而在其中，'希尔德'正在追寻一个破碎的预言。",
			"真相冰冷地冻结着，演奏着痛苦的序曲。"
		],
		"french": [
			"Au cœur de l'interminable blizzard, le chemin disparut de nouveau.",
			"Au bout du désespoir, je découvris une ancienne ruine gelée.",
			"Et à l'intérieur, 'Hild' poursuivait une prophétie brisée.",
			"La vérité, gelée et froide, joue un prélude de douleur."
		],
		"spanish": [
			"En la interminable ventisca, el camino volvió a desaparecer.",
			"Al borde de la desesperación, encontré una antigua ruina congelada.",
			"Y dentro, 'Hild' perseguía una profecía rota.",
			"La verdad, fría y congelada, interpreta un preludio de dolor."
		],
		"vietnamese": [
			"Giữa trận bão tuyết vô tận, con đường lại biến mất.",
			"Cuối cùng của tuyệt vọng, tôi tìm thấy một di tích cổ đại bị đóng băng.",
			"Và bên trong đó, 'Hild' đang theo đuổi một lời tiên tri tan vỡ.",
			"Sự thật đóng băng lạnh giá, tấu lên khúc dạo đầu của nỗi đau."
		],
		"thai": [
			"ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด เส้นทางได้เลือนหายไปอีกครั้ง",
			"เมื่อสิ้นหวัง สิ่งที่พบคือซากปรักหักพังโบราณที่เยือกแข็ง",
			"และภายในนั้น 'ฮิลด์' กำลังตามหาคำทำนายที่แตกสลาย",
			"ความจริงที่เยือกแข็ง เล่นเพลงโหมโรงแห่งความเจ็บปวด"
		],
		"hindi": [
			"अंतहीन बर्फीले तूफान के बीच, रास्ता फिर से गायब हो गया।",
			"निराशा के अंत में, मुझे एक जमी हुई प्राचीन खंडहर मिली।",
			"और उसके भीतर, 'हिल्ड' एक टूटी हुई भविष्यवाणी का पीछा कर रही थी।",
			"सच, ठंड से जमा हुआ, दर्द की प्रस्तावना बजाता है।"
		]
	}
} as const;
