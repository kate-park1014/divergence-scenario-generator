export const scenario_snowy_finn_9_02 = {
	"scenario_id": "snowy_finn_9_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
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
					"content": {
						"korean": "거대한 그림자가 얼음 왕좌에 앉아 탐험대를 내려다본다.",
						"english": "The giant shadow sits on the ice throne, looking down at the expedition party.",
						"japanese": "巨大な影が氷の玉座に座り、探検隊を見下ろしている。",
						"chinese": "巨大的身影坐在冰之王座上，俯视着探险队。",
						"french": "L'ombre gigantesque est assise sur le trône de glace, observant l'équipe d'expédition.",
						"spanish": "La sombra gigante se sienta en el trono de hielo, mirando a la expedición.",
						"vietnamese": "Bóng đen khổng lồ ngồi trên ngai vàng băng giá, nhìn xuống đoàn thám hiểm.",
						"thai": "เงาขนาดมหึมานั่งอยู่บนบัลลังก์น้ำแข็ง จ้องมองลงมายังคณะสำรวจ",
						"hindi": "विशाल छाया बर्फ़ीले सिंहासन पर बैठी, अभियान दल को नीचे देख रही है।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "boris",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "자, 대공 전하의 위엄을! (휘청)",
						"english": "Now, behold His Royal Highness's majesty! (Stumbles)",
						"japanese": "さあ、大公殿下の威厳を！ (よろめき)",
						"chinese": "瞧，大公殿下的威严！ (踉跄)",
						"french": "Voyez la majesté de Son Altesse Royale ! (Trébuche)",
						"spanish": "¡Contemplad la majestad de Su Alteza Real! (Tropieza)",
						"vietnamese": "Nào, uy nghi của Đại Công điện hạ! (Loạng choạng)",
						"thai": "เอาล่ะ! ความสง่างามขององค์มหาดยุก! (เซถลา)",
						"hindi": "अब, महामहिम की महिमा देखें! (लड़खड़ाता हुआ)"
					}
				},
				{
					"action": "shake",
					"duration_ms": 300,
					"type": "direction",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…문제없다. 완벽해.",
						"english": "...No problem. Perfect.",
						"japanese": "…問題ない。完璧だ。",
						"chinese": "……没问题。完美。",
						"french": "...Pas de problème. Parfait.",
						"spanish": "...No hay problema. Perfecto.",
						"vietnamese": "...Không sao. Hoàn hảo.",
						"thai": "...ไม่มีปัญหา. สมบูรณ์แบบ",
						"hindi": "...कोई बात नहीं। एकदम सही।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이상한데?",
						"english": "Something's off.",
						"japanese": "おかしいな？",
						"chinese": "奇怪？",
						"french": "C'est étrange, non ?",
						"spanish": "¿Extraño, verdad?",
						"vietnamese": "Lạ thật nhỉ?",
						"thai": "แปลกนะ?",
						"hindi": "अजीब है ना?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "boris",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "어리석은 침입자여, 이 설산은 내 왕국이다!",
						"english": "Foolish intruders, this snowy mountain is my kingdom!",
						"japanese": "愚かな侵入者め、この雪山は我が王国だ！",
						"chinese": "愚蠢的入侵者，这雪山是我的王国！",
						"french": "Stupides intrus, cette montagne enneigée est mon royaume !",
						"spanish": "¡Estúpidos intrusos, esta montaña nevada es mi reino!",
						"vietnamese": "Những kẻ xâm nhập ngu ngốc, ngọn núi tuyết này là vương quốc của ta!",
						"thai": "ผู้บุกรุกโง่เง่าเอ๋ย ภูเขาหิมะแห่งนี้คืออาณาจักรของข้า!",
						"hindi": "मूर्ख घुसपैठियों, यह बर्फीला पहाड़ मेरा साम्राज्य है!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"emotion": "base",
					"content": {
						"korean": "(팻말을 들고 나타난다) 맞습니다! SCARY BOSS! (팻말이 거꾸로 들려있다)",
						"english": "(Appears holding a sign) That's right! SCARY BOSS! (The sign is upside down)",
						"japanese": "(看板を持って現れる) その通りです！SCARY BOSS！ (看板が逆さまに持たれている)",
						"chinese": "(举着牌子出现) 没错！可怕的BOSS！ (牌子拿反了)",
						"french": "(Apparaît avec une pancarte) C'est ça ! BOSS EFFRAYANT ! (La pancarte est à l'envers)",
						"spanish": "(Aparece con un cartel) ¡Exacto! ¡JEFE ATERRADOR! (El cartel está al revés)",
						"vietnamese": "(Xuất hiện cầm một tấm bảng) Đúng vậy! TRÙM ĐÁNG SỢ! (Tấm bảng bị cầm ngược)",
						"thai": "(ปรากฏตัวพร้อมป้าย) ถูกต้อง! SCARY BOSS! (ป้ายกลับหัว)",
						"hindi": "(एक बोर्ड पकड़े हुए प्रकट होता है) बिल्कुल! डरावना बॉस! (बोर्ड उल्टा पकड़ा हुआ है)"
					}
				},
				{
					"action": "focus",
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…똑바로 들어라, 보리스.",
						"english": "...Listen carefully, Boris.",
						"japanese": "「…よく聞け、ボリス。」",
						"chinese": "“……听清楚了，鲍里斯。”",
						"french": "...Écoute bien, Boris.",
						"spanish": "...Escucha atentamente, Boris.",
						"vietnamese": "...Nghe cho rõ đây, Boris.",
						"thai": "...ฟังให้ดีนะ, บอริส.",
						"hindi": "...ध्यान से सुनो, बोरिस。"
					}
				},
				{
					"content": {
						"korean": "풉. 무섭기는커녕…",
						"english": "Pfft. Far from scary...",
						"japanese": "「プッ。怖いどころか…」",
						"chinese": "“噗。一点都不可怕……”",
						"french": "Pff. Loin d'être effrayant...",
						"spanish": "Pff. Lejos de dar miedo...",
						"vietnamese": "Khịt. Đâu có đáng sợ...",
						"thai": "ฟืด. ไม่ได้น่ากลัวเลย...",
						"hindi": "हूँ। डरावना तो बिल्कुल नहीं..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자의 시선이 탐험대의 따뜻한 복장에 잠시 머물렀다.",
						"english": "The colossal shadow's gaze lingered briefly on the expedition team's warm attire.",
						"japanese": "「巨大な影の視線が、探検隊の暖かい服装にしばらく留まった。」",
						"chinese": "“巨大的影子将视线短暂地停留在探险队的暖和的服装上。”",
						"french": "Le regard de l'ombre colossale s'attarda un instant sur la chaude tenue de l'équipe d'expédition.",
						"spanish": "La mirada de la sombra colosal se detuvo brevemente en la cálida vestimenta del equipo de expedición.",
						"vietnamese": "Ánh mắt của bóng đen khổng lồ lướt qua bộ trang phục ấm áp của đoàn thám hiểm.",
						"thai": "สายตาของเงาขนาดยักษ์จับจ้องไปที่ชุดกันหนาวของทีมสำรวจชั่วครู่",
						"hindi": "विशालकाय परछाई की नज़र कुछ देर के लिए अभियान दल के गर्म कपड़ों पर टिकी रही।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "boris",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "감히 나의 권위에 도전하는가!",
						"english": "Dare you challenge my authority!",
						"japanese": "「よくも私の権威に挑戦したな！」",
						"chinese": "“竟敢挑战我的权威！”",
						"french": "Oserez-vous défier mon autorité !",
						"spanish": "¡Cómo osas desafiar mi autoridad!",
						"vietnamese": "Ngươi dám thách thức quyền uy của ta ư!",
						"thai": "บังอาจมาท้าทายอำนาจของข้าหรือ!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरी सत्ता को चुनौती देने की!"
					}
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "절대복종! (외치지만 헛기침을 한다)",
						"english": "Absolute obedience! (He shouts, but then coughs.)",
						"japanese": "「絶対服従！(叫ぶが、咳払いをする)」",
						"chinese": "“绝对服从！(他喊道，却又干咳了一声)”",
						"french": "Obéissance absolue ! (Il crie, mais tousse ensuite.)",
						"spanish": "¡Obediencia absoluta! (Grita, pero luego tose.)",
						"vietnamese": "Tuyệt đối phục tùng! (Hắn hét lên nhưng rồi ho khan.)",
						"thai": "เชื่อฟังอย่างไม่มีเงื่อนไข! (เขาตะโกน แต่แล้วก็ไอออกมา)",
						"hindi": "पूर्ण आज्ञाकारिता! (वह चिल्लाता है, लेकिन फिर खांसता है।)"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 손을 짚었지만, 미묘하게 몸을 떨었다.",
						"english": "The colossal shadow braced itself, but subtly shivered.",
						"japanese": "「巨大な影は手を突いたが、微妙に体を震わせた。」",
						"chinese": "“巨大的影子撑住了身体，但微妙地颤抖了一下。”",
						"french": "L'ombre colossale se cala, mais frissonna subtilement.",
						"spanish": "La sombra colosal se apoyó, pero tembló sutilmente.",
						"vietnamese": "Bóng đen khổng lồ chống tay xuống nhưng khẽ run rẩy.",
						"thai": "เงาขนาดยักษ์ยันมือลง แต่ก็สั่นเล็กน้อย",
						"hindi": "विशालकाय परछाई ने हाथ टिकाया, लेकिन सूक्ष्म रूप से कांप उठी।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "추워 보이는데?",
						"english": "You look cold?",
						"japanese": "「寒そうだね？」",
						"chinese": "“看起来很冷？”",
						"french": "Vous avez l'air d'avoir froid ?",
						"spanish": "¿Pareces tener frío?",
						"vietnamese": "Trông có vẻ lạnh nhỉ?",
						"thai": "ดูเหมือนจะหนาวนะ?",
						"hindi": "ठंड लग रही है क्या?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…추위? 나에겐 어울리지 않는 말이다!",
						"english": "...Cold? That's not a word that suits me!",
						"japanese": "「…寒さ？私には似合わない言葉だ！」",
						"chinese": "“……冷？那是个不适合我的词！”",
						"french": "...Froid ? Ce n'est pas un mot qui me convient !",
						"spanish": "¿...Frío? ¡Esa no es una palabra que me pegue!",
						"vietnamese": "...Lạnh ư? Đó không phải là từ hợp với ta!",
						"thai": "...หนาว? นั่นไม่ใช่คำที่เหมาะกับข้าเลย!",
						"hindi": "...ठंड? यह ऐसा शब्द नहीं जो मुझ पर फबे!"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "boris",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "마지막 경고다. 돌아가라!",
						"english": "This is your last warning. Go back!",
						"japanese": "「最後の警告だ。引き返せ！」",
						"chinese": "“这是最后警告。回去！”",
						"french": "C'est votre dernier avertissement. Retournez !",
						"spanish": "Esta es tu última advertencia. ¡Regresa!",
						"vietnamese": "Đây là lời cảnh báo cuối cùng. Quay về đi!",
						"thai": "นี่คือคำเตือนสุดท้าย กลับไปซะ!",
						"hindi": "यह तुम्हारी आखिरी चेतावनी है। वापस जाओ!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boris",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "돌아가세요! (버벅거린다) 대공 전하께서 화나셨습니다!",
						"english": "Go back! (He stammers) His Grace the Grand Duke is angry!",
						"japanese": "「お戻りください！(どもる)大公殿下がお怒りです！」",
						"chinese": "“回去吧！(他结结巴巴地说)大公殿下生气了！”",
						"french": "Retournez ! (Il balbutie) Son Altesse le Grand-Duc est en colère !",
						"spanish": "¡Regresen! (Tartamudea) ¡Su Alteza el Gran Duque está enfadado!",
						"vietnamese": "Xin hãy quay về! (Hắn lắp bắp) Đại Công Tước điện hạ đang tức giận!",
						"thai": "กลับไปซะ! (เขาพูดติดอ่าง) แกรนด์ดยุกพิโรธแล้ว!",
						"hindi": "वापस जाओ! (वह हकलाता है) महामहिम ग्रैंड ड्यूक क्रोधित हैं!"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우린 멈추지 않아.",
						"english": "We won't stop.",
						"japanese": "我々は止まらない。",
						"chinese": "我们不会停下。",
						"french": "Nous ne nous arrêterons pas.",
						"spanish": "No nos detendremos.",
						"vietnamese": "Chúng ta sẽ không dừng lại.",
						"thai": "เราจะไม่หยุด",
						"hindi": "हम रुकेंगे नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "좋다. 후회하게 될 거다.",
						"english": "Fine. You'll regret this.",
						"japanese": "よかろう。後悔することになるぞ。",
						"chinese": "好。你会后悔的。",
						"french": "Bien. Tu le regretteras.",
						"spanish": "Bien. Te arrepentirás.",
						"vietnamese": "Được thôi. Ngươi sẽ phải hối hận.",
						"thai": "เอาล่ะ เจ้าจะต้องเสียใจ",
						"hindi": "ठीक है। तुम्हें अफ़सोस होगा।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "결국 거대한 그림자는 직접 나섰다.",
						"english": "The great shadow finally revealed itself.",
						"japanese": "ついに、巨大な影が自ら姿を現した。",
						"chinese": "巨大的阴影终于亲自现身了。",
						"french": "L'ombre immense se manifesta enfin en personne.",
						"spanish": "La gran sombra finalmente se manifestó.",
						"vietnamese": "Cuối cùng, bóng tối khổng lồ đã lộ diện.",
						"thai": "ในที่สุด เงาขนาดใหญ่ก็ปรากฏตัว",
						"hindi": "अंततः, विशाल छाया स्वयं सामने आई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "내 위엄을 의심한 대가를 치르게 해주겠다!",
						"english": "You'll pay for doubting my majesty!",
						"japanese": "我の威厳を疑った代償を払わせてやろう！",
						"chinese": "你们将为质疑我的威严付出代价！",
						"french": "Vous paierez d'avoir douté de ma majesté !",
						"spanish": "¡Pagarás por dudar de mi majestad!",
						"vietnamese": "Ngươi sẽ phải trả giá vì đã nghi ngờ uy nghiêm của ta!",
						"thai": "เจ้าจะต้องชดใช้ที่บังอาจสงสัยในอำนาจของข้า!",
						"hindi": "मेरी गरिमा पर संदेह करने का तुम्हें भुगतान करना होगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "허세는 이제 끝이야.",
						"english": "Your bluster ends here.",
						"japanese": "虚勢はここまでだ。",
						"chinese": "你的虚张声势到此为止。",
						"french": "Ton bluff prend fin ici.",
						"spanish": "Tu farol termina aquí.",
						"vietnamese": "Những lời khoác lác của ngươi kết thúc tại đây.",
						"thai": "คำคุยโอ้อวดของเจ้าจบลงแค่นี้แหละ",
						"hindi": "तुम्हारी शेखी अब ख़त्म।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악! 내가… 지다니…!",
						"english": "Nghaa! I... lost...!",
						"japanese": "ぐあああ！私が…負けるとは…！",
						"chinese": "呃啊！我…竟然输了…！",
						"french": "Arggh ! Moi… perdre… !",
						"spanish": "¡Argh! ¡Yo… he perdido…!",
						"vietnamese": "Khụ! Ta… ta thua sao…!",
						"thai": "อ๊ากกก! ข้า…แพ้…!",
						"hindi": "आर्ग! मैं… हार गया…!"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						4
					],
					"action": "enter",
					"type": "direction",
					"speaker": "boris"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "대공 전하! (허둥지둥 달려온다)",
						"english": "Grand Duke! (Rushes over frantically)",
						"japanese": "大公殿下！ (慌てて駆け寄る)",
						"chinese": "大公殿下！ (慌张地跑过来)",
						"french": "Son Altesse le Grand-Duc ! (Accourt précipitamment)",
						"spanish": "¡Gran Duque! (Corre atropelladamente)",
						"vietnamese": "Đại Công Tước điện hạ! (Vội vã chạy đến)",
						"thai": "ท่านดยุก! (รีบร้อนวิ่งเข้ามา)",
						"hindi": "महामहिम ड्यूक! (घबराकर दौड़ता है)"
					},
					"speaker": "boris",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…아직은… 아니다. 진정한 힘은… (쓰러진다)",
						"english": "...Not yet... The true power is... (Collapses)",
						"japanese": "…まだだ… 真の力は… (倒れる)",
						"chinese": "……还没……真正的力量是…… (倒下)",
						"french": "…Pas encore… Le vrai pouvoir est… (S'effondre)",
						"spanish": "…Aún no… El verdadero poder es… (Cae)",
						"vietnamese": "…Chưa… chưa đâu. Sức mạnh thật sự… (Ngã xuống)",
						"thai": "...ยังไม่...ใช่. พลังที่แท้จริงคือ... (ล้มลง)",
						"hindi": "…अभी नहीं… असली शक्ति तो… (गिर जाता है)"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진정한 힘…?",
						"english": "True power...?",
						"japanese": "真の力…？",
						"chinese": "真正的力量……？",
						"french": "Le vrai pouvoir… ?",
						"spanish": "¿El verdadero poder…?",
						"vietnamese": "Sức mạnh thật sự…?",
						"thai": "พลังที่แท้จริง...?",
						"hindi": "असली शक्ति…?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자의 허세는 무너졌으나, 그 뒤에 숨겨진 진짜 존재는 아직 드러나지 않았다. 탐험대는 더 깊은 설산을 향해 발걸음을 옮긴다.",
						"english": "The great shadow's bluster crumbled, but the true entity hidden behind it has yet to be revealed. The expedition moves deeper into the snowy mountains.",
						"japanese": "巨大な影の虚勢は崩れたが、その裏に隠された真の存在はまだ明らかになっていない。探検隊はさらに深い雪山へと足を進める。",
						"chinese": "巨大的阴影虚张声势被击溃，但其背后隐藏的真正存在尚未显露。探险队向更深的雪山进发。",
						"french": "Le bluff de l'ombre immense s'est effondré, mais la véritable entité cachée derrière elle n'a pas encore été révélée. L'expédition s'enfonce plus profondément dans les montagnes enneigées.",
						"spanish": "La fanfarronería de la gran sombra se desmoronó, pero la verdadera entidad oculta tras ella aún no se ha revelado. La expedición avanza hacia lo más profundo de las montañas nevadas.",
						"vietnamese": "Lời khoác lác của bóng tối khổng lồ đã tan biến, nhưng thực thể thật sự ẩn giấu đằng sau vẫn chưa lộ diện. Đoàn thám hiểm tiếp tục tiến sâu hơn vào vùng núi tuyết.",
						"thai": "คำคุยโอ้อวดของเงาขนาดใหญ่พังทลายลง แต่ตัวตนที่แท้จริงซึ่งซ่อนอยู่เบื้องหลังยังไม่ถูกเปิดเผย ทีมสำรวจยังคงเดินหน้าลึกเข้าไปในภูเขาหิมะ",
						"hindi": "विशाल छाया का आडंबर ढह गया, लेकिन उसके पीछे छिपी असली सत्ता अभी प्रकट नहीं हुई है। अभियान दल बर्फीले पहाड़ों में और गहराई तक बढ़ता है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 것들. 내 왕국은 그리 쉽게 무너지지 않는다.",
						"english": "Pathetic creatures. My kingdom will not crumble so easily.",
						"japanese": "取るに足らない者ども。我が王国はそう簡単には崩れぬ。",
						"chinese": "卑微的东西。我的王国不会轻易垮塌。",
						"french": "Misérables créatures. Mon royaume ne s'effondrera pas si facilement.",
						"spanish": "Criaturas insignificantes. Mi reino no caerá tan fácilmente.",
						"vietnamese": "Những kẻ hèn mọn. Vương quốc của ta sẽ không sụp đổ dễ dàng như vậy đâu.",
						"thai": "พวกไร้ค่า. อาณาจักรของข้าไม่อาจล่มสลายได้ง่ายๆ หรอก.",
						"hindi": "तुच्छ प्राणियों। मेरा साम्राज्य इतनी आसानी से नहीं गिरेगा।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 다시 도전한다!",
						"english": "Damn it... I'll challenge again!",
						"japanese": "ちくしょう… もう一度挑む！",
						"chinese": "该死… 再来一次！",
						"french": "Maudit… Je retente ma chance !",
						"spanish": "Maldita sea… ¡Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt… Ta sẽ thử lại!",
						"thai": "ให้ตายสิ… ข้าจะลองใหม่อีกครั้ง!",
						"hindi": "धिक्कार है… मैं फिर से चुनौती दूंगा!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"설산의 지배자, 거대한 그림자가 나타났다.",
			"그의 위엄은 얼음처럼 차가웠으나, 시종은 늘 어설펐다.",
			"위태로운 왕좌와 흔들리는 허세.",
			"차가운 얼음 속에 숨겨진 진실은 무엇일까?"
		],
		"english": [
			"The ruler of the snowy mountains, a giant shadow, has appeared.",
			"His majesty was as cold as ice, but his attendant was always clumsy.",
			"A precarious throne and wavering bravado.",
			"What truth is hidden within the cold ice?"
		],
		"japanese": [
			"雪山の支配者、巨大な影が現れた。",
			"彼の威厳は氷のように冷たかったが、侍従はいつも不器用だった。",
			"危うい王座と揺らぐ虚勢。",
			"冷たい氷の中に隠された真実とは？"
		],
		"chinese": [
			"雪山的主宰，巨大的身影出现了。",
			"他的威严如冰般寒冷，但侍从却总是笨手笨脚。",
			"摇摇欲坠的王座和动摇的虚张声势。",
			"冰冷的寒冰中隐藏着什么真相？"
		],
		"french": [
			"Le souverain de la montagne enneigée, une ombre gigantesque, est apparu.",
			"Sa majesté était froide comme la glace, mais son serviteur était toujours maladroit.",
			"Un trône précaire et une bravade chancelante.",
			"Quelle vérité est cachée dans la glace froide ?"
		],
		"spanish": [
			"El señor de la montaña nevada, una sombra gigantesca, ha aparecido.",
			"Su majestad era fría como el hielo, pero su sirviente siempre era torpe.",
			"Un trono precario y una fanfarronería vacilante.",
			"¿Qué verdad se esconde en el frío hielo?"
		],
		"vietnamese": [
			"Kẻ thống trị núi tuyết, một bóng đen khổng lồ, đã xuất hiện.",
			"Uy nghiêm của hắn lạnh như băng, nhưng tên thị tùng thì luôn vụng về.",
			"Ngai vàng lung lay và sự khoa trương dao động.",
			"Sự thật nào ẩn giấu trong băng giá lạnh lẽo?"
		],
		"thai": [
			"ผู้ปกครองแห่งภูเขาหิมะ, เงาขนาดมหึมาได้ปรากฏขึ้น",
			"ความสง่างามของพระองค์เย็นชาดุจน้ำแข็ง แต่ผู้ติดตามกลับซุ่มซ่ามเสมอ",
			"บัลลังก์ที่ไม่มั่นคงและท่าทีโอ้อวดที่สั่นคลอน",
			"ความจริงใดซ่อนอยู่ในน้ำแข็งอันเยือกเย็น?"
		],
		"hindi": [
			"बर्फीले पहाड़ों का शासक, एक विशाल छाया प्रकट हुई।",
			"उसकी गरिमा बर्फ की तरह ठंडी थी, लेकिन उसका सेवक हमेशा अनाड़ी था।",
			"एक अनिश्चित सिंहासन और डगमगाता दिखावा।",
			"ठंडी बर्फ़ में कौन सी सच्चाई छिपी है?"
		]
	}
} as const;
