export const scenario_desert_aureatesoul_34_03 = {
	"scenario_id": "desert_aureatesoul_34_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"kasai": {
			"id": "mon_8050c8ca-5715-4e7d-895e-5bc029d55fcf",
			"name": {
				"korean": "카사이",
				"english": "Kasai",
				"japanese": "カサイ",
				"chinese": "卡赛",
				"french": "Kasai",
				"spanish": "Kasai",
				"vietnamese": "Kasai",
				"thai": "คาไซ",
				"hindi": "कसाई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/c9ddd314-36fb-4636-cbe6-35d8f6f98900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a00fae8a-8a27-4895-d62c-a0c88456ff00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모래시계의 모래가 빠르게 줄어든다. 사막의 시간이 절박하게 흐른다.",
						"english": "The sands of the hourglass rapidly diminish. Desert time flows desperately.",
						"japanese": "砂時計の砂が急速に減っていく。砂漠の時間が切迫して流れる。",
						"chinese": "沙漏的沙子迅速减少。沙漠的时间绝望地流逝着。",
						"french": "Le sable du sablier diminue rapidement. Le temps du désert s'écoule désespérément.",
						"spanish": "La arena del reloj de arena disminuye rápidamente. El tiempo del desierto fluye desesperadamente.",
						"vietnamese": "Cát trong đồng hồ cát nhanh chóng cạn. Thời gian sa mạc trôi đi tuyệt vọng.",
						"thai": "ทรายในนาฬิกาทรายลดลงอย่างรวดเร็ว เวลาของทะเลทรายไหลไปอย่างสิ้นหวัง",
						"hindi": "रेतघड़ी की रेत तेज़ी से कम हो रही है। रेगिस्तान का समय हताशा में बह रहा है।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 가다간… 시간이 다 떨어질 거야!",
						"english": "If we keep going like this... time will run out!",
						"japanese": "このままでは… 時間が尽きてしまう！",
						"chinese": "这样下去的话……时间会耗尽的！",
						"french": "Si nous continuons comme ça... le temps va s'épuiser !",
						"spanish": "Si seguimos así... ¡el tiempo se acabará!",
						"vietnamese": "Cứ thế này... chúng ta sẽ hết thời gian mất!",
						"thai": "ถ้าเป็นแบบนี้ต่อไป... เวลาจะหมดลง!",
						"hindi": "अगर ऐसे ही चलता रहा... तो समय खत्म हो जाएगा!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"type": "direction",
					"speaker": "kasai",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈춰! 더 이상 가면 안 돼!",
						"english": "Stop! Don't go any further!",
						"japanese": "止まれ！これ以上は行けない！",
						"chinese": "停下！不能再往前走了！",
						"french": "Arrête ! N'avance pas plus loin !",
						"spanish": "¡Para! ¡No puedes ir más lejos!",
						"vietnamese": "Dừng lại! Không thể đi xa hơn nữa!",
						"thai": "หยุด! ไปต่อไม่ได้แล้ว!",
						"hindi": "रुको! अब और आगे मत जाओ!"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "kasai",
					"type": "direction"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저 오팔빛 광석은 뭐지? 주변 모래가 너무 빨리 부서져.",
						"english": "What's that opal-colored ore? The surrounding sand crumbles too quickly.",
						"japanese": "あのオパール色の鉱石は何だ？ 周囲の砂がとても早く崩れていく。",
						"chinese": "那是什么蛋白石矿石？周围的沙子碎裂得太快了。",
						"french": "Qu'est-ce que ce minerai opalin ? Le sable environnant s'effrite trop vite.",
						"spanish": "¿Qué es esa mena de color ópalo? La arena circundante se desmorona demasiado rápido.",
						"vietnamese": "Quặng màu ngọc mắt mèo kia là gì? Cát xung quanh vỡ vụn quá nhanh.",
						"thai": "แร่สีโอปอลนั่นคืออะไร? ทรายรอบๆ แตกสลายเร็วเกินไป",
						"hindi": "वह ओपल-रंगीन अयस्क क्या है? आस-पास की रेत बहुत तेज़ी से बिखर रही है।"
					}
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "여긴 '생명이 죽어가는 땅'이야. 모든 걸 집어삼키는 곳.",
						"english": "This is the 'Land where life dies'. A place that devours everything.",
						"japanese": "ここは「生命が死にゆく地」だ。すべてを飲み込む場所。",
						"chinese": "这里是“生命消逝之地”。一个吞噬一切的地方。",
						"french": "C'est la 'Terre où la vie meurt'. Un endroit qui dévore tout.",
						"spanish": "Esta es la 'Tierra donde la vida muere'. Un lugar que lo devora todo.",
						"vietnamese": "Đây là 'Vùng đất nơi sự sống lụi tàn'. Một nơi nuốt chửng mọi thứ.",
						"thai": "ที่นี่คือ 'ดินแดนที่ชีวิตตายไป' เป็นที่ที่กลืนกินทุกสิ่ง",
						"hindi": "यह 'वह भूमि है जहाँ जीवन मरता है'। एक ऐसी जगह जो सब कुछ निगल जाती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거 이곳에서 큰 비극이 있었어… 모두 사라져 버렸지.",
						"english": "A great tragedy occurred here in the past... everyone vanished.",
						"japanese": "過去、ここで大きな悲劇があった… みんな消えてしまったんだ。",
						"chinese": "过去这里发生过一场大悲剧……所有人都消失了。",
						"french": "Une grande tragédie s'est produite ici dans le passé... tout le monde a disparu.",
						"spanish": "Una gran tragedia ocurrió aquí en el pasado... todos desaparecieron.",
						"vietnamese": "Trong quá khứ, một bi kịch lớn đã xảy ra ở đây... mọi người đều biến mất.",
						"thai": "ในอดีตเคยเกิดโศกนาฏกรรมครั้งใหญ่ที่นี่... ทุกคนหายไปหมด",
						"hindi": "अतीत में यहाँ एक बड़ी त्रासदी हुई थी... सब कुछ गायब हो गया था।"
					},
					"speaker": "kasai",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kasai"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "비극이라니… 대체 무슨 일이었던 거야?",
						"english": "A tragedy...? What exactly happened?",
						"japanese": "悲劇だと…一体何があったんだ？",
						"chinese": "悲剧…到底发生了什么事？",
						"french": "Une tragédie...? Que s'est-il passé exactement ?",
						"spanish": "¿Una tragedia...? ¿Qué ocurrió exactamente?",
						"vietnamese": "Bi kịch sao...? Rốt cuộc đã xảy ra chuyện gì?",
						"thai": "โศกนาฏกรรม...? เกิดอะไรขึ้นกันแน่?",
						"hindi": "एक त्रासदी...? आखिर क्या हुआ था?"
					}
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오랜 민담에 불과해… 모든 것을 잃은 자의 저주가 깃들어 있다고들 하지.",
						"english": "It's just an old folk tale... They say it carries the curse of one who lost everything.",
						"japanese": "それはただの古い民話だ…全てを失った者の呪いが宿っているとされている。",
						"chinese": "那只是个古老的民间传说…人们说那里附着着失去一切之人的诅咒。",
						"french": "Ce n'est qu'une vieille légende... On dit qu'elle porte la malédiction de celui qui a tout perdu.",
						"spanish": "Es solo un viejo cuento popular... Dicen que lleva la maldición de alguien que lo perdió todo.",
						"vietnamese": "Chỉ là một câu chuyện dân gian cũ... Người ta nói rằng nó mang lời nguyền của kẻ đã mất tất cả.",
						"thai": "มันก็แค่ตำนานเก่าแก่... พวกเขาว่ากันว่ามันมีคำสาปของผู้ที่สูญเสียทุกสิ่ง",
						"hindi": "यह सिर्फ एक पुरानी लोककथा है... वे कहते हैं कि इसमें उस व्यक्ति का श्राप है जिसने सब कुछ खो दिया था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 광석에 닿으면 영혼마저 바스러질 거야. 돌아가…!",
						"english": "Touch this ore, and even your soul will shatter. Go back...!",
						"japanese": "この鉱石に触れれば、魂さえも砕け散る。戻れ…！",
						"chinese": "触碰这矿石，连灵魂都会粉碎。回去…！",
						"french": "Touche ce minerai, et même ton âme se brisera. Retourne en arrière...!",
						"spanish": "Toca este mineral, y hasta tu alma se hará pedazos. ¡Vuelve...!",
						"vietnamese": "Chạm vào quặng này, linh hồn ngươi cũng sẽ tan vỡ. Quay lại đi...!",
						"thai": "แตะแร่นี้ แม้แต่จิตวิญญาณของเจ้าก็จะแหลกสลาย. กลับไปซะ...!",
						"hindi": "इस अयस्क को छूने पर, तुम्हारी आत्मा भी बिखर जाएगी। वापस जाओ...!"
					},
					"speaker": "kasai",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 강해지는… 이 차가운 기운은 뭐지?",
						"english": "What is this chilling aura... growing stronger and stronger?",
						"japanese": "この冷たい気配は何だ…どんどん強くなっている…",
						"chinese": "这股越来越强的冰冷气息是什么？",
						"french": "Qu'est-ce que cette aura glaciale... de plus en plus forte ?",
						"spanish": "¿Qué es esta aura helada... que se hace cada vez más fuerte?",
						"vietnamese": "Cái khí lạnh này là gì... càng lúc càng mạnh hơn?",
						"thai": "ออร่าเย็นยะเยือกนี้คืออะไร... แข็งแกร่งขึ้นเรื่อยๆ",
						"hindi": "यह ठंडी आभा क्या है... जो और भी मजबूत होती जा रही है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "가지 마…! 저 너머에는… 정체 모를 존재가 기다리고 있어!",
						"english": "Don't go...! Beyond that... an unknown entity awaits!",
						"japanese": "行くな…！その先には…正体不明の存在が待っている！",
						"chinese": "别去…！在那边…有不知名的存在在等着！",
						"french": "N'y va pas...! Au-delà de ça... une entité inconnue t'attend !",
						"spanish": "¡No vayas...! Más allá... ¡una entidad desconocida espera!",
						"vietnamese": "Đừng đi...! Phía bên kia... một thực thể không rõ danh tính đang chờ đợi!",
						"thai": "อย่าไปนะ...! เลยไปนั่น... มีบางสิ่งที่ไม่รู้จักกำลังรออยู่!",
						"hindi": "मत जाओ...! उस पार... एक अज्ञात सत्ता प्रतीक्षा कर रही है!"
					}
				},
				{
					"speaker": "kasai",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그자를 깨우면… 모든 것이 끝장날 거야…!",
						"english": "If you awaken it... everything will be over...!",
						"japanese": "そいつを目覚めさせたら…全てが終わるだろう…！",
						"chinese": "如果唤醒了它…一切就都完了…！",
						"french": "Si vous le réveillez... tout sera fini...!",
						"spanish": "Si lo despiertas... ¡todo habrá terminado...!",
						"vietnamese": "Nếu ngươi đánh thức nó... mọi thứ sẽ kết thúc...!",
						"thai": "ถ้าปลุกมันขึ้นมา... ทุกสิ่งจะจบสิ้น...!",
						"hindi": "अगर तुम उसे जगाओगे... तो सब खत्म हो जाएगा...!"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 우린 진실을 봐야 해.",
						"english": "We can't stop. We must see the truth.",
						"japanese": "止められない。私たちは真実を見なければならない。",
						"chinese": "无法停止。我们必须看到真相。",
						"french": "On ne peut pas s'arrêter. Nous devons voir la vérité.",
						"spanish": "No podemos parar. Debemos ver la verdad.",
						"vietnamese": "Không thể dừng lại. Chúng ta phải nhìn thấy sự thật.",
						"thai": "หยุดไม่ได้. เราต้องเห็นความจริง.",
						"hindi": "हम रुक नहीं सकते। हमें सच देखना होगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오팔빛 광석의 저주가 일행을 집어삼켰다. 차가운 절망이 몰려온다.",
						"english": "The curse of the opal-colored ore engulfed the party. Cold despair sets in.",
						"japanese": "オパール色の鉱石の呪いが一行を飲み込んだ。冷たい絶望が押し寄せる。",
						"chinese": "欧泊色矿石的诅咒吞噬了队伍。冰冷的绝望袭来。",
						"french": "La malédiction du minerai opalin a englouti le groupe. Un froid désespoir s'installe.",
						"spanish": "La maldición del mineral de ópalo envolvió al grupo. Una fría desesperación se apodera de ellos.",
						"vietnamese": "Lời nguyền của quặng màu opal nuốt chửng cả đoàn. Nỗi tuyệt vọng lạnh lẽo ập đến.",
						"thai": "คำสาปของแร่สีโอปอลกลืนกินคณะเดินทาง ความสิ้นหวังอันหนาวเหน็บเข้าปกคลุม",
						"hindi": "ओपल-रंगीन अयस्क के अभिशाप ने दल को निगल लिया। ठंडी निराशा छा गई।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "연약한 희망 따위… 이곳에선 아무것도 할 수 없어.",
						"english": "Such fragile hope… can do nothing here.",
						"japanese": "脆い希望など…ここでは何もできない。",
						"chinese": "脆弱的希望… 在这里什么也做不了。",
						"french": "Une si fragile espérance… ne peut rien ici.",
						"spanish": "Una esperanza tan frágil… aquí no puede hacer nada.",
						"vietnamese": "Hy vọng yếu ớt… không thể làm gì ở đây.",
						"thai": "ความหวังที่เปราะบางเช่นนั้น… ทำอะไรไม่ได้ที่นี่",
						"hindi": "ऐसी कमजोर आशा… यहाँ कुछ नहीं कर सकती।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아직… 끝나지 않았어!",
						"english": "...It's not… over yet!",
						"japanese": "…まだ…終わってない！",
						"chinese": "…还没…结束！",
						"french": "…Ce n'est pas… encore fini !",
						"spanish": "…¡Aún… no ha terminado!",
						"vietnamese": "…Vẫn… chưa kết thúc!",
						"thai": "…ยัง…ไม่จบ!",
						"hindi": "…अभी… खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다시 오너라. 그때도… 똑같이 바스러질 테니.",
						"english": "Return. You will crumble just the same.",
						"japanese": "また来るがいい。その時も…同じように砕け散るだけだ。",
						"chinese": "再来吧。到那时…你仍会化为齑粉。",
						"french": "Reviens. Tu t'effriteras tout autant.",
						"spanish": "Vuelve. Y entonces… te desmoronarás otra vez.",
						"vietnamese": "Cứ trở lại đi. Lúc đó… ngươi cũng sẽ tan tành y như vậy thôi.",
						"thai": "กลับมาอีกสิ ถึงตอนนั้น… เจ้าก็จะแตกสลายเช่นเดิม",
						"hindi": "फिर से आना। तब भी… तुम वैसे ही बिखर जाओगे।"
					}
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kasai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "kasai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "안 돼… 저건…! 모두 도망쳐…!",
						"english": "No...! That's...! Everyone, run...!",
						"japanese": "ダメだ…あれは…！みんな逃げろ…！",
						"chinese": "不…那是…！大家快跑…！",
						"french": "Non...! C'est...! Tout le monde, fuyez...!",
						"spanish": "¡No...! ¡Eso es...! ¡Todos, corran...!",
						"vietnamese": "Không...! Đó là...! Mọi người, chạy đi...!",
						"thai": "ไม่นะ...! นั่นมัน...! ทุกคน หนีไป...!",
						"hindi": "नहीं...! वह है...! सब भागो...!"
					}
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "kasai",
					"type": "direction",
					"direction": "down"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 오팔빛 기운이 공간을 뒤덮는다. 거대한 그림자가 일행을 압도한다.",
						"english": "A cold, opalescent aura engulfs the space. A colossal shadow overwhelms the party.",
						"japanese": "冷たいオパール色のオーラが空間を覆う。巨大な影が一行を圧倒する。",
						"chinese": "冰冷的蛋白石光芒笼罩了空间。巨大的身影压倒了队伍。",
						"french": "Une aura froide et opalescente engloutit l'espace. Une ombre colossale submerge le groupe.",
						"spanish": "Un aura fría y opalescente envuelve el espacio. Una sombra colosal abruma al grupo.",
						"vietnamese": "Một luồng khí lạnh lẽo, màu opal bao trùm không gian. Một bóng đen khổng lồ áp đảo cả đoàn.",
						"thai": "ออร่าสีโอปอลเย็นยะเยือกปกคลุมทั่วบริเวณ. เงาขนาดมหึมาเข้าครอบงำคณะสำรวจ.",
						"hindi": "एक ठंडी, ओपलेशेंट आभा अंतरिक्ष को घेर लेती है। एक विशाल छाया समूह को अभिभूत कर देती है।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…어리석은 것들. 감히 이곳에 발을 들이다니.",
						"english": "...Fools. How dare you set foot in this place.",
						"japanese": "…愚かな者たちめ。よくもこの地に足を踏み入れたな。",
						"chinese": "…愚蠢的东西。竟敢踏足此地。",
						"french": "...Fous. Comment osez-vous mettre les pieds ici.",
						"spanish": "...Necios. ¿Cómo osáis poner un pie en este lugar?",
						"vietnamese": "...Lũ ngu ngốc. Dám đặt chân đến nơi này.",
						"thai": "...พวกโง่เขลา. กล้าดียังไงมาเหยียบที่นี่.",
						"hindi": "...मूर्ख। तुम्हारी हिम्मत कैसे हुई इस जगह पर कदम रखने की।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사라져가는 것들을 구원하려다, 스스로 사라질 것이다.",
						"english": "Attempting to save the fading, you too shall fade.",
						"japanese": "消えゆくものを救おうとすれば、自らも消え去るだろう。",
						"chinese": "试图拯救消逝之物，你自身也将消逝。",
						"french": "En voulant sauver ce qui disparaît, tu disparaîtras toi-même.",
						"spanish": "Al intentar salvar lo que se desvanece, tú mismo te desvanecerás.",
						"vietnamese": "Cứu rỗi những gì đang biến mất, ngươi cũng sẽ tự mình biến mất.",
						"thai": "พยายามจะช่วยสิ่งที่กำลังเลือนหายไป เจ้าเองก็จะเลือนหายไปเอง",
						"hindi": "लुप्तप्राय वस्तुओं को बचाने की कोशिश में, तुम स्वयं भी लुप्त हो जाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 네가 모든 것을 망치고 있어!",
						"english": "Silence! You're ruining everything!",
						"japanese": "黙れ！お前が全てを台無しにしている！",
						"chinese": "闭嘴！你正在毁掉一切！",
						"french": "Tais-toi ! Tu gâches tout !",
						"spanish": "¡Cállate! ¡Lo estás arruinando todo!",
						"vietnamese": "Im đi! Ngươi đang phá hỏng mọi thứ!",
						"thai": "หุบปาก! แกกำลังทำลายทุกอย่าง!",
						"hindi": "चुप रहो! तुम सब कुछ बर्बाद कर रहे हो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우… 이 정도로….",
						"english": "Ugh... Just... this much...",
						"japanese": "くっ…これしき…か。",
						"chinese": "嘶… 就… 这样吗…",
						"french": "Ugh… Juste… ça…",
						"spanish": "Ugh… Solo… esto…",
						"vietnamese": "Khụ… Chỉ… đến vậy thôi sao…",
						"thai": "อึก… แค่… แค่นี้เอง…",
						"hindi": "उफ़… बस… इतना ही…"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만 너희도… 곧 알게 될 것이다. 사라지는 것이… 얼마나 고통스러운지.",
						"english": "But you too… will soon learn. How painful it is… to vanish.",
						"japanese": "だがお前たちも…すぐに知るだろう。消え去ることが…どれほど苦痛か。",
						"chinese": "但你们… 很快也会明白。消逝… 是何等痛苦。",
						"french": "Mais vous aussi… vous apprendrez bientôt. Combien il est douloureux… de disparaître.",
						"spanish": "Pero vosotros también… pronto aprenderéis. Cuán doloroso es… desaparecer.",
						"vietnamese": "Nhưng các ngươi cũng… sẽ sớm biết thôi. Biến mất… đau đớn đến nhường nào.",
						"thai": "แต่พวกเจ้าเองก็… จะรู้ในไม่ช้า ว่าการเลือนหายไป… มันเจ็บปวดแค่ไหน",
						"hindi": "परन्तु तुम भी… जल्द जान जाओगे। लुप्त होना… कितना दर्दनाक होता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…뭐라고?",
						"english": "...What did you say?",
						"japanese": "…何だと？",
						"chinese": "…你说什么？",
						"french": "…Quoi ?",
						"spanish": "…¿Qué?",
						"vietnamese": "…Ngươi nói gì?",
						"thai": "…ว่าไงนะ?",
						"hindi": "…क्या कहा?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오팔빛 광석의 잔해가 차갑게 식어간다. 그러나 사막의 비극은 끝나지 않았다.",
						"english": "The remnants of the opal-colored ore grow cold. Yet, the desert's tragedy has not ended.",
						"japanese": "オパール色の鉱石の残骸が冷たく冷えていく。しかし、砂漠の悲劇は終わっていなかった。",
						"chinese": "欧泊色矿石的残骸渐渐冷却。然而，沙漠的悲剧并未结束。",
						"french": "Les débris du minerai opalin refroidissent. Pourtant, la tragédie du désert n'est pas terminée.",
						"spanish": "Los restos del mineral de ópalo se enfrían. Sin embargo, la tragedia del desierto no ha terminado.",
						"vietnamese": "Tàn dư của quặng màu opal dần nguội lạnh. Tuy nhiên, bi kịch của sa mạc vẫn chưa kết thúc.",
						"thai": "เศษซากแร่สีโอปอลเย็นชืดลง ทว่าโศกนาฏกรรมของทะเลทรายยังไม่สิ้นสุด",
						"hindi": "ओपल-रंगीन अयस्क के अवशेष ठंडे पड़ गए। फिर भी, रेगिस्तान की त्रासदी समाप्त नहीं हुई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진정한 맹세의 칼날은… 아직 깊은 곳에 잠들어 있었다.",
						"english": "The blade of true oath… still slumbered in the depths.",
						"japanese": "真なる誓いの刃は…まだ深き場所に眠っていた。",
						"chinese": "真正誓约之刃… 仍沉睡于深处。",
						"french": "La lame du véritable serment… dormait encore dans les profondeurs.",
						"spanish": "La hoja del verdadero juramento… aún dormía en las profundidades.",
						"vietnamese": "Lưỡi kiếm của lời thề chân chính… vẫn còn ngủ yên trong sâu thẳm.",
						"thai": "คมดาบแห่งคำสาบานที่แท้จริง… ยังคงหลับใหลอยู่ในห้วงลึก",
						"hindi": "सच्ची प्रतिज्ञा की तलवार… अभी भी गहराई में सोई हुई थी।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"모래시계의 모래가 미친 듯이 바스러진다.",
			"시간은 절박하게 흐르고… 오팔빛 광석이 모든 것을 집어삼키는 땅.",
			"생명이 죽어가는 곳에 숨겨진 진실은 무엇인가.",
			"멈출 수 없는 절박함, 이 비극의 끝은 어디인가."
		],
		"english": [
			"The sands of the hourglass frantically crumble.",
			"Time flows desperately... A land where opal-colored ore devours all.",
			"What is the truth hidden where life dies?",
			"Unstoppable desperation, where does this tragedy end?"
		],
		"japanese": [
			"砂時計の砂が狂ったように崩れていく。",
			"時間は切迫して流れ… オパール色の鉱石がすべてを飲み込む地。",
			"生命が死にゆく場所に隠された真実とは何か。",
			"止められない切迫感、この悲劇の終わりはどこにあるのか。"
		],
		"chinese": [
			"沙漏的沙子疯狂地崩塌。",
			"时间绝望地流逝着…… 蛋白石矿石吞噬一切的土地。",
			"在生命消逝之地，隐藏着怎样的真相？",
			"无法阻止的绝望，这场悲剧的终点在哪里？"
		],
		"french": [
			"Le sable du sablier s'écroule frénétiquement.",
			"Le temps s'écoule désespérément... Une terre où le minerai opalin dévore tout.",
			"Quelle est la vérité cachée là où la vie s'éteint ?",
			"Un désespoir imparable, où se termine cette tragédie ?"
		],
		"spanish": [
			"La arena del reloj de arena se desmorona frenéticamente.",
			"El tiempo fluye desesperadamente... Una tierra donde el mineral opalino lo devora todo.",
			"¿Cuál es la verdad oculta donde la vida muere?",
			"Desesperación imparable, ¿dónde termina esta tragedia?"
		],
		"vietnamese": [
			"Cát trong đồng hồ cát vỡ vụn điên cuồng.",
			"Thời gian trôi đi tuyệt vọng... Vùng đất nơi quặng màu ngọc mắt mèo nuốt chửng mọi thứ.",
			"Sự thật nào đang ẩn giấu nơi sự sống đang lụi tàn?",
			"Sự tuyệt vọng không thể ngăn cản, bi kịch này sẽ kết thúc ở đâu?"
		],
		"thai": [
			"ทรายในนาฬิกาทรายกำลังแตกสลายอย่างบ้าคลั่ง",
			"เวลาไหลไปอย่างสิ้นหวัง... ดินแดนที่แร่สีโอปอลกลืนกินทุกสิ่ง",
			"ความจริงที่ซ่อนอยู่ในที่ที่ชีวิตกำลังจะตายคืออะไร",
			"ความสิ้นหวังที่หยุดไม่ได้ จุดจบของโศกนาฏกรรมนี้อยู่ที่ไหน"
		],
		"hindi": [
			"रेतघड़ी की रेत बेतहाशा बिखर रही है।",
			"समय हताशा में बह रहा है... एक ऐसी भूमि जहाँ ओपल-रंगीन अयस्क सब कुछ निगल जाता है।",
			"जहाँ जीवन मर रहा है, वहाँ छिपा सत्य क्या है?",
			"अदम्य हताशा, इस त्रासदी का अंत कहाँ है?"
		]
	}
} as const;
