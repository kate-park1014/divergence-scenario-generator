export const scenario_desert_scarabaeus_14_03 = {
	"scenario_id": "desert_scarabaeus_14_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"jasper": {
			"id": "mon_f3aa9577-2fd6-4d65-80cd-6b654778b7f4",
			"name": {
				"korean": "재스퍼",
				"english": "Jasper",
				"japanese": "ジャスパー",
				"chinese": "贾斯珀",
				"french": "Jasper",
				"spanish": "Jasper",
				"vietnamese": "Jasper",
				"thai": "แจสเปอร์",
				"hindi": "जैस्पर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1ee5a95-a611-4b33-7264-582262b68800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc87b1ce-d1eb-40ea-ccc4-3c4434d35800/public"
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
					"content": {
						"korean": "유적의 가장 깊은 곳, 공기는 더 무거워졌다.",
						"english": "In the deepest part of the ruin, the air grew heavier.",
						"japanese": "遺跡の最深部、空気はさらに重くなった。",
						"chinese": "在遗迹最深处，空气变得更加沉重。",
						"french": "Dans la partie la plus profonde de la ruine, l'air devint plus lourd.",
						"spanish": "En lo más profundo del desierto, el aire se volvió más pesado.",
						"vietnamese": "Ở phần sâu nhất của tàn tích, không khí trở nên nặng nề hơn.",
						"thai": "ในส่วนที่ลึกที่สุดของซากปรักหักพัง อากาศหนักอึ้งขึ้น",
						"hindi": "खंडहर के सबसे गहरे हिस्से में, हवा भारी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뭔가… 싸한 기분이야.",
						"english": "Something... feels chilling.",
						"japanese": "何か… ぞっとするような感じだ。",
						"chinese": "有种…阴森的感觉。",
						"french": "Quelque chose... une sensation glaciale.",
						"spanish": "Algo... una sensación escalofriante.",
						"vietnamese": "Có gì đó… lạnh sống lưng.",
						"thai": "รู้สึกเหมือนมีอะไรบางอย่าง… เย็นยะเยือก",
						"hindi": "कुछ... ठंडी सी सनसनी है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "jasper",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "jasper",
					"type": "speech",
					"content": {
						"korean": "느껴져? 이 울림.",
						"english": "Do you feel it? This vibration.",
						"japanese": "感じるか？この響き。",
						"chinese": "你感觉到了吗？这种共鸣。",
						"french": "Le sens-tu ? Cette vibration.",
						"spanish": "¿Lo sientes? Esta vibración.",
						"vietnamese": "Cảm nhận được không? Tiếng vang này.",
						"thai": "สัมผัสได้ไหม? การสั่นสะเทือนนี้",
						"hindi": "क्या तुम्हें महसूस हो रहा है? यह कंपन।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "점점 더 커지고 있어. 금속성의… 낮은 윙윙거림.",
						"english": "It's getting louder. A metallic... low hum.",
						"japanese": "だんだん大きくなっている。金属質の…低い唸り声。",
						"chinese": "声音越来越大。一种金属般的…低沉嗡嗡声。",
						"french": "Ça devient plus fort. Un… bourdonnement métallique et grave.",
						"spanish": "Se está haciendo más fuerte. Un zumbido metálico... bajo.",
						"vietnamese": "Nó ngày càng lớn hơn. Một tiếng ù... thấp, mang tính kim loại.",
						"thai": "มันดังขึ้นเรื่อยๆ เสียงหึ่งๆ… ต่ำๆ แบบโลหะ",
						"hindi": "यह और तेज़ हो रहा है। एक धात्विक... धीमी गुंजन।"
					},
					"emotion": "sad",
					"speaker": "jasper",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 못 들었는데.",
						"english": "What sound? I didn't hear anything.",
						"japanese": "何の音だ？何も聞こえなかったけど。",
						"chinese": "什么声音？我没听到。",
						"french": "Quel son ? Je n'ai rien entendu.",
						"spanish": "¿Qué sonido? No oí nada.",
						"vietnamese": "Tiếng gì vậy? Tôi không nghe thấy.",
						"thai": "เสียงอะไร? ฉันไม่ได้ยินอะไรเลย",
						"hindi": "कैसी आवाज़? मैंने नहीं सुना।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "인간의 귀로는 어려워. 하지만 분명히… 살아있는 무언가.",
						"english": "It's hard for human ears. But clearly... something alive.",
						"japanese": "人間の耳には難しい。だが明らかに…生きている何か。",
						"chinese": "人耳很难听到。但显然…某种活物。",
						"french": "C'est difficile pour les oreilles humaines. Mais clairement… quelque chose de vivant.",
						"spanish": "Es difícil para oídos humanos. Pero claramente... algo vivo.",
						"vietnamese": "Khó nghe đối với tai người. Nhưng rõ ràng… một thứ gì đó đang sống.",
						"thai": "ยากสำหรับหูของมนุษย์ แต่ชัดเจนว่า… มีบางอย่างมีชีวิต",
						"hindi": "इंसानी कानों के लिए मुश्किल है। लेकिन साफ तौर पर... कुछ जीवित।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "jasper"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "jasper",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 소리는 유적 내부에서 끊임없이 긁어내는 듯해.",
						"english": "This sound seems to constantly scratch from within the ruin.",
						"japanese": "この音は、遺跡の内部から絶えず掻きむしるようだ。",
						"chinese": "这声音似乎不断地从遗迹内部刮擦出来。",
						"french": "Ce son semble gratter constamment depuis l'intérieur de la ruine.",
						"spanish": "Este sonido parece rascar constantemente desde el interior de la ruina.",
						"vietnamese": "Âm thanh này dường như không ngừng cào xé từ bên trong tàn tích.",
						"thai": "เสียงนี้เหมือนกำลังขูดขีดออกมาจากภายในซากปรักหักพังไม่หยุดหย่อน",
						"hindi": "यह आवाज़ खंडहर के अंदर से लगातार खुरचने जैसी लग रही है।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "누군가 안에 있다는 거야?",
						"english": "Is someone inside?",
						"japanese": "誰か中にいるのか？",
						"chinese": "有人在里面吗？",
						"french": "Quelqu'un est à l'intérieur ?",
						"spanish": "Hay alguien dentro?",
						"vietnamese": "Có ai bên trong không?",
						"thai": "มีใครอยู่ข้างในเหรอ?",
						"hindi": "क्या कोई अंदर है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니. 어쩌면… 유적 자체가 살아있는지도 몰라.",
						"english": "No. Perhaps... the ruins themselves are alive.",
						"japanese": "いや。もしかしたら…遺跡そのものが生きているのかも。",
						"chinese": "不。或许……遗迹本身就是活的。",
						"french": "Non. Peut-être que… les ruines elles-mêmes sont vivantes.",
						"spanish": "No. Tal vez… las ruinas mismas estén vivas.",
						"vietnamese": "Không. Có lẽ… bản thân di tích đang sống.",
						"thai": "ไม่สิ บางที…ซากปรักหักพังอาจมีชีวิตอยู่ก็ได้",
						"hindi": "नहीं। शायद… खंडहर खुद जीवित हों।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마. 그럴 리가.",
						"english": "Nonsense. No way.",
						"japanese": "馬鹿なことを言うな。そんなはずはない。",
						"chinese": "别胡说。不可能。",
						"french": "N'importe quoi. C'est impossible.",
						"spanish": "Tonterías. Imposible.",
						"vietnamese": "Đừng nói nhảm. Không thể nào.",
						"thai": "เหลวไหลน่า ไม่มีทาง",
						"hindi": "बकवास मत करो। ऐसा हो नहीं सकता।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "jasper",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "금속성의 울림이 고막을 찢을 듯 울렸다. 피할 수 없었다.",
						"english": "A metallic clang echoed, threatening to tear eardrums. There was no escape.",
						"japanese": "金属の響きが鼓膜を破るように鳴り響いた。避けられなかった。",
						"chinese": "金属的轰鸣声震耳欲聋，震得耳膜生疼。无法躲避。",
						"french": "Un écho métallique résonna, menaçant de déchirer les tympans. On ne pouvait l'éviter.",
						"spanish": "Un eco metálico resonó, amenazando con desgarrar los tímpanos. Era ineludible.",
						"vietnamese": "Âm thanh kim loại vang lên xé toạc màng nhĩ. Không thể tránh khỏi.",
						"thai": "เสียงก้องกังวานโลหะดังสนั่นจนแทบจะฉีกแก้วหู หลีกเลี่ยงไม่ได้เลย",
						"hindi": "एक धात्विक गूँज कान के परदे फाड़ने लगी। बचना असंभव था।"
					}
				},
				{
					"content": {
						"korean": "더 이상은 위험해. 돌아가야 해.",
						"english": "It's too dangerous now. We must go back.",
						"japanese": "これ以上は危険だ。戻らなければ。",
						"chinese": "再下去就危险了。我们得回去。",
						"french": "C'est trop dangereux maintenant. Nous devons faire demi-tour.",
						"spanish": "Es demasiado peligroso. Tenemos que volver.",
						"vietnamese": "Nguy hiểm quá rồi. Phải quay lại thôi.",
						"thai": "อันตรายเกินไปแล้ว เราต้องกลับ",
						"hindi": "अब और ख़तरा है। हमें वापस जाना होगा।"
					},
					"speaker": "jasper",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "안 돼. 우린 끝을 봐야 해.",
						"english": "No. We have to see this through.",
						"japanese": "ダメだ。最後までやり遂げなければ。",
						"chinese": "不行。我们必须坚持到底。",
						"french": "Non. Nous devons aller jusqu'au bout.",
						"spanish": "No. Tenemos que llegar hasta el final.",
						"vietnamese": "Không được. Chúng ta phải đi đến cùng.",
						"thai": "ไม่ได้ เราต้องไปให้สุด",
						"hindi": "नहीं। हमें इसे अंजाम तक पहुँचाना होगा।"
					}
				},
				{
					"content": {
						"korean": "…후회할 거야.",
						"english": "...You'll regret it.",
						"japanese": "…後悔するぞ。",
						"chinese": "……你会后悔的。",
						"french": "…Tu le regretteras.",
						"spanish": "…Te arrepentirás.",
						"vietnamese": "…Ngươi sẽ hối hận đấy.",
						"thai": "…นายจะต้องเสียใจ",
						"hindi": "…तुम्हें पछताना पड़ेगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "jasper"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "울림의 근원, 거대한 공간이 드러났다.",
						"english": "The source of the echoes, a colossal space, was revealed.",
						"japanese": "響きの根源、巨大な空間が姿を現した。",
						"chinese": "回响的源头，一个巨大的空间显露出来。",
						"french": "La source des échos, un espace colossal, fut révélée.",
						"spanish": "La fuente de los ecos, un espacio colosal, se reveló.",
						"vietnamese": "Nguồn gốc của tiếng vang, một không gian khổng lồ đã lộ diện.",
						"thai": "ต้นกำเนิดของเสียงก้อง พื้นที่ขนาดมหึมาได้ปรากฏขึ้น",
						"hindi": "गूँज का स्रोत, एक विशाल स्थान, प्रकट हो गया।"
					}
				},
				{
					"content": {
						"korean": "왔구나. 이 끔찍한 소리를 들을 수 있는 어리석은 자.",
						"english": "You've come. You foolish one who can hear this dreadful sound.",
						"japanese": "来たか。この忌まわしい音を聞ける愚か者よ。",
						"chinese": "你来了。你这能听到这可怕声音的愚蠢之人。",
						"french": "Vous êtes venu. Toi, l'insensé qui peut entendre ce son affreux.",
						"spanish": "Has venido. Tú, el necio que puede escuchar este sonido espantoso.",
						"vietnamese": "Ngươi đã đến. Kẻ ngốc nghếch có thể nghe thấy âm thanh khủng khiếp này.",
						"thai": "เจ้ามาแล้วรึ เจ้าคนโง่ที่ได้ยินเสียงอันน่าสยดสยองนี้",
						"hindi": "तुम आ गए। तुम मूर्ख, जो इस भयानक ध्वनि को सुन सकते हो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 소리의 주인이야?",
						"english": "Are you the master of this sound?",
						"japanese": "お前がこの音の主か？",
						"chinese": "你是这声音的主人吗？",
						"french": "Tu es le maître de ce son ?",
						"spanish": "¿Eres el dueño de este sonido?",
						"vietnamese": "Ngươi là chủ nhân của âm thanh này ư?",
						"thai": "เจ้าคือเจ้าของเสียงนี้รึ?",
						"hindi": "क्या तुम इस आवाज़ के मालिक हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 그저… 이 유적의 일부일 뿐.",
						"english": "I am merely... a part of this ruin.",
						"japanese": "私はただ…この遺跡の一部に過ぎない。",
						"chinese": "我不过是……这遗迹的一部分。",
						"french": "Je ne suis... qu'une partie de cette ruine.",
						"spanish": "Solo soy... una parte de esta ruina.",
						"vietnamese": "Ta chỉ là... một phần của di tích này.",
						"thai": "ข้าเป็นเพียง... ส่วนหนึ่งของซากปรักหักพังนี้เท่านั้น",
						"hindi": "मैं बस... इस खंडहर का एक हिस्सा हूँ।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다가오지 마라. 이 울림은 너희를 삼킬 것이다.",
						"english": "Do not approach. This resonance will swallow you.",
						"japanese": "近寄るな。この響きがお前たちを飲み込むだろう。",
						"chinese": "别过来。这回响会吞噬你们。",
						"french": "Ne vous approchez pas. Cette résonance vous engloutira.",
						"spanish": "No te acerques. Esta resonancia te devorará.",
						"vietnamese": "Đừng lại gần. Tiếng vọng này sẽ nuốt chửng các ngươi.",
						"thai": "อย่าเข้ามาใกล้ เสียงสะท้อนนี้จะกลืนกินพวกเจ้า",
						"hindi": "पास मत आओ। यह प्रतिध्वनि तुम्हें निगल जाएगी।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크흐… 내가 사라져도… 울림은 끝나지 않아.",
						"english": "Khh... Even if I vanish... the resonance will not cease.",
						"japanese": "くっ… 私が消えても… 響きは終わらない。",
						"chinese": "咳… 即使我消失… 回响也不会停止。",
						"french": "Khh... Même si je disparais... la résonance ne s'arrêtera pas.",
						"spanish": "Kkh... Aunque desaparezca... la resonancia no terminará.",
						"vietnamese": "Khụ... Ngay cả khi ta biến mất... tiếng vọng sẽ không dừng lại.",
						"thai": "คึก… แม้ข้าจะหายไป… เสียงสะท้อนก็ไม่จบสิ้น",
						"hindi": "ख्ह्ह्ह... अगर मैं गायब भी हो जाऊं... तो भी प्रतिध्वनि खत्म नहीं होगी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "{random_boss}는… 그저… 시작일 뿐.",
						"english": "{random_boss} is... merely... the beginning.",
						"japanese": "{random_boss}は…ただ…始まりに過ぎない。",
						"chinese": "{random_boss}不过是……一个开始。",
						"french": "{random_boss} n'est... que... le début.",
						"spanish": "{random_boss} es... simplemente... el principio.",
						"vietnamese": "{random_boss} chỉ là... sự khởi đầu.",
						"thai": "{random_boss} เป็นเพียง… จุดเริ่มต้นเท่านั้น",
						"hindi": "{random_boss} बस... एक शुरुआत भर है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨 소리야? 너 말고 또 있다는 거야?",
						"english": "What do you mean? There are others besides you?",
						"japanese": "何のことだ？ お前以外にもいるとでも言うのか？",
						"chinese": "什么意思？除了你之外还有别的吗？",
						"french": "Que veux-tu dire ? Il y en a d'autres à part toi ?",
						"spanish": "¿Qué quieres decir? ¿Hay más aparte de ti?",
						"vietnamese": "Ngươi nói gì? Có kẻ khác ngoài ngươi ư?",
						"thai": "หมายความว่าไง? มีคนอื่นนอกจากเจ้าอีกเหรอ?",
						"hindi": "तुम्हारा क्या मतलब है? तुम्हारे अलावा और भी हैं क्या?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "괴물은 사라졌지만, 유적은 여전히 끔찍하게 웅크리고 있었다.",
						"english": "The monster vanished, but the ruin still loomed terribly.",
						"japanese": "化け物は消え去ったが、遺跡は依然として恐ろしく佇んでいた。",
						"chinese": "怪物消失了，但遗迹依然可怕地盘踞着。",
						"french": "Le monstre avait disparu, mais la ruine était toujours terriblement tapie.",
						"spanish": "El monstruo desapareció, pero la ruina seguía terriblemente agazapada.",
						"vietnamese": "Quái vật đã biến mất, nhưng di tích vẫn còn sừng sững đáng sợ.",
						"thai": "สัตว์ประหลาดหายไปแล้ว แต่ซากปรักหักพังยังคงตั้งตระหง่านน่ากลัว",
						"hindi": "राक्षस गायब हो गया, लेकिन खंडहर अभी भी भयानक रूप से फैला हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "이 울림은 끝나지 않았다. 어쩌면… 이제 막 시작된 것일지도.",
						"english": "This resonance has not ended. Perhaps... it has only just begun.",
						"japanese": "この響きは終わっていなかった。もしかしたら…今始まったばかりなのかもしれない。",
						"chinese": "这回响还没有结束。或许……它才刚刚开始。",
						"french": "Cette résonance n'est pas finie. Peut-être... qu'elle ne fait que commencer.",
						"spanish": "Esta resonancia no ha terminado. Quizás... acaba de empezar.",
						"vietnamese": "Tiếng vọng này chưa kết thúc. Có lẽ... nó chỉ vừa mới bắt đầu.",
						"thai": "เสียงสะท้อนนี้ยังไม่จบ บางที… มันอาจจะเพิ่งเริ่มต้นขึ้น",
						"hindi": "यह प्रतिध्वनि खत्म नहीं हुई है। शायद... यह अभी शुरू हुई है।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 감히 이 울림에 맞서려 하다니.",
						"english": "Fools. How dare you defy this resonance.",
						"japanese": "愚かな者たちめ。よくもこの響きに逆らおうとするな。",
						"chinese": "愚蠢的东西。竟敢对抗这回响。",
						"french": "Imbéciles. Comment osez-vous défier cette résonance.",
						"spanish": "Necios. Cómo os atrevéis a desafiar esta resonancia.",
						"vietnamese": "Lũ ngu ngốc. Dám cả gan chống lại tiếng vọng này.",
						"thai": "เจ้าพวกโง่! กล้าดียังไงมาท้าทายเสียงสะท้อนนี้",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई इस प्रतिध्वनि का विरोध करने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희는 그저… 또 하나의 먹잇감일 뿐.",
						"english": "You are merely... another prey.",
						"japanese": "お前たちはただ…もう一つの餌食に過ぎない。",
						"chinese": "你们不过是……又一个猎物。",
						"french": "Vous n'êtes... qu'une proie de plus.",
						"spanish": "Sois solo... otra presa más.",
						"vietnamese": "Các ngươi chỉ là... một con mồi khác mà thôi.",
						"thai": "พวกเจ้าเป็นเพียง… เหยื่ออีกรายเท่านั้น",
						"hindi": "तुम बस... एक और शिकार हो।"
					}
				},
				{
					"content": {
						"korean": "젠장… 여기서 끝낼 순 없어…!",
						"english": "Damn it... I can't end it here...!",
						"japanese": "くそっ…ここで終わらせるわけにはいかない…！",
						"chinese": "该死……不能在这里结束……！",
						"french": "Bon sang... Je ne peux pas finir ici...!",
						"spanish": "Maldita sea... ¡No puedo terminar aquí...!",
						"vietnamese": "Chết tiệt... Không thể kết thúc ở đây được...!",
						"thai": "ให้ตายสิ… จะมาจบตรงนี้ไม่ได้…!",
						"hindi": "धिक्कार है... मैं इसे यहाँ खत्म नहीं कर सकता...!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"사막 깊숙이, 고대 유적의 심장이 뛰고 있었다.",
			"아무도 들을 수 없는 소리, 그러나 재스퍼는 알고 있었다.",
			"그것은 단순한 울림이 아니었다. 살아있는 끔찍한 전조."
		],
		"english": [
			"Deep in the desert, the heart of an ancient ruin pulsed.",
			"A sound no one could hear, yet Jasper knew.",
			"It wasn't a mere echo. A terrible, living premonition."
		],
		"japanese": [
			"砂漠の奥深く、古代遺跡の心臓が脈打っていた。",
			"誰も聞くことのできない音、しかしジャスパーは知っていた。",
			"それは単なる響きではなかった。生きている恐ろしい前兆。"
		],
		"chinese": [
			"深入沙漠，古老遗迹的心脏正在跳动。",
			"誰も无法听到的声音，但贾斯珀知道。",
			"这不仅仅是回响。这是一个活生生的可怕预兆。"
		],
		"french": [
			"Au plus profond du désert, le cœur d'une ancienne ruine battait.",
			"Un son que personne ne pouvait entendre, mais Jasper le savait.",
			"Ce n'était pas un simple écho. Une terrible et vivante prémonition."
		],
		"spanish": [
			"En lo profundo del desierto, el corazón de una antigua ruina latía.",
			"Un sonido que nadie podía oír, pero Jasper lo sabía.",
			"No era un simple eco. Una terrible y viva premonición."
		],
		"vietnamese": [
			"Sâu trong sa mạc, trái tim của một tàn tích cổ đại đang đập.",
			"Một âm thanh không ai có thể nghe thấy, nhưng Jasper biết.",
			"Nó không chỉ là một tiếng vọng. Một điềm báo kinh hoàng, sống động."
		],
		"thai": [
			"ลึกเข้าไปในทะเลทราย หัวใจของซากปรักหักพังโบราณกำลังเต้นระรัว",
			"เสียงที่ไม่มีใครได้ยิน แต่แจสเปอร์รู้",
			"มันไม่ใช่แค่เสียงสะท้อน แต่มันคือลางร้ายที่ยังมีชีวิต"
		],
		"hindi": [
			"रेगिस्तान की गहराइयों में, एक प्राचीन खंडहर का दिल धड़क रहा था।",
			"एक ऐसी आवाज़ जिसे कोई सुन नहीं सकता था, फिर भी जैस्पर जानता था।",
			"यह सिर्फ एक प्रतिध्वनि नहीं थी। एक भयानक, जीवित पूर्वसूचना।"
		]
	}
} as const;
