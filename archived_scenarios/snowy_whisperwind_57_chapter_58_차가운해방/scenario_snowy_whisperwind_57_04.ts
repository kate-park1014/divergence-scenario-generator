export const scenario_snowy_whisperwind_57_04 = {
	"scenario_id": "snowy_whisperwind_57_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "차가운 공기가 폐부를 찔렀다. 동굴의 입구가 거대한 입처럼 벌어져 있었다.",
						"english": "The cold air pierced my lungs. The cave entrance gaped like a giant maw.",
						"japanese": "冷たい空気が肺を刺した。洞窟の入り口は巨大な口のように開いていた。",
						"chinese": "冰冷的空气刺痛肺部。洞穴入口像一张巨口般张开。",
						"french": "L'air froid me transperçait les poumons. L'entrée de la caverne béait comme une gueule géante.",
						"spanish": "El aire frío me perforó los pulmones. La entrada de la cueva se abría como una fauce gigante.",
						"vietnamese": "Không khí lạnh buốt đâm vào phổi tôi. Lối vào hang động há hốc như một cái miệng khổng lồ.",
						"thai": "อากาศเย็นเยียบแทงทะลุปอด ทางเข้าถ้ำอ้าปากกว้างเหมือนปากยักษ์",
						"hindi": "ठंडी हवा मेरे फेफड़ों को भेद रही थी। गुफा का प्रवेश द्वार एक विशाल मुंह की तरह खुला था।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "이곳은… 고대 주술사의 은밀한 처소.",
						"english": "This place... the secret abode of an ancient shaman.",
						"japanese": "ここは…古代呪術師の秘密の隠れ家。",
						"chinese": "这里是……古老巫师的秘密住所。",
						"french": "Cet endroit... la demeure secrète d'un ancien chaman.",
						"spanish": "Este lugar... el aposento secreto de un antiguo chamán.",
						"vietnamese": "Nơi đây... là nơi trú ẩn bí mật của một pháp sư cổ đại.",
						"thai": "ที่นี่... คือที่ซ่อนเร้นของหมอผีโบราณ",
						"hindi": "यह जगह... एक प्राचीन तांत्रिक का गुप्त निवास।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무엇이 이곳에 숨겨져 있지?",
						"english": "What is hidden here?",
						"japanese": "何がここに隠されている？",
						"chinese": "这里藏着什么？",
						"french": "Qu'est-ce qui est caché ici ?",
						"spanish": "¿Qué se esconde aquí?",
						"vietnamese": "Điều gì đang ẩn giấu ở đây?",
						"thai": "มีอะไรซ่อนอยู่ที่นี่?",
						"hindi": "यहां क्या छिपा है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그는 맹세와 계약에 따라, 이 모든 고통을 기록했다.",
						"english": "He recorded all this suffering, according to his oath and pact.",
						"japanese": "彼は誓いと契約に従い、この全ての苦痛を記録した。",
						"chinese": "他根据誓言与契约，记录下了所有的痛苦。",
						"french": "Il a enregistré toute cette souffrance, selon son serment et son pacte.",
						"spanish": "Él registró todo este sufrimiento, según su juramento y pacto.",
						"vietnamese": "Hắn đã ghi lại tất cả nỗi đau này, theo lời thề và giao ước của mình.",
						"thai": "เขาบันทึกความเจ็บปวดทั้งหมดนี้ ตามคำสาบานและพันธสัญญาของเขา",
						"hindi": "उसने अपनी शपथ और समझौते के अनुसार, इस सारे दर्द को दर्ज किया।"
					},
					"speaker": "anuk"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벽화를 보시오. 이 모든 비극이… 반복되고 있음을.",
						"english": "Look at the murals. All this tragedy... repeating itself.",
						"japanese": "壁画を見よ。この全ての悲劇が…繰り返されていることを。",
						"chinese": "看这些壁画。所有的悲剧……都在重演。",
						"french": "Regardez les fresques. Toute cette tragédie... se répète.",
						"spanish": "Mira los murales. Toda esta tragedia... se repite.",
						"vietnamese": "Hãy nhìn những bức bích họa. Tất cả bi kịch này… đang lặp lại.",
						"thai": "ดูภาพฝาผนังเถิด โศกนาฏกรรมทั้งหมดนี้... กำลังเกิดขึ้นซ้ำๆ",
						"hindi": "भित्तिचित्रों को देखो। यह सारी त्रासदी... दोहराई जा रही है।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "반복된다고?",
						"english": "Repeating?",
						"japanese": "繰り返されると？",
						"chinese": "重复？",
						"french": "Se répète ?",
						"spanish": "¿Repitiéndose?",
						"vietnamese": "Lặp lại ư?",
						"thai": "ซ้ำรอย?",
						"hindi": "दोहराया जा रहा है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "고대의 '정화'는 거짓된 평화. 시스템의 왜곡은 영원한 고통을 낳았소.",
						"english": "The ancient 'Purification' was a false peace. System distortion gave birth to eternal suffering.",
						"japanese": "古代の「浄化」は偽りの平和。システムの歪みが永遠の苦痛を生んだ。",
						"chinese": "古代的“净化”是虚假的和平。系统扭曲带来了永恒的痛苦。",
						"french": "L'ancienne \"Purification\" était une fausse paix. La distorsion du système a engendré une souffrance éternelle.",
						"spanish": "La antigua \"Purificación\" fue una falsa paz. La distorsión del sistema dio origen a un sufrimiento eterno.",
						"vietnamese": "\"Thanh tẩy\" cổ xưa là một sự bình yên giả dối. Sự méo mó của hệ thống đã gây ra nỗi đau vĩnh cửu.",
						"thai": "“การชำระล้าง” โบราณคือสันติภาพจอมปลอม การบิดเบือนของระบบก่อให้เกิดความทุกข์ทรมานชั่วนิรันดร์",
						"hindi": "प्राचीन 'शुद्धि' एक झूठी शांति थी। सिस्टम की विकृति ने शाश्वत पीड़ा को जन्म दिया।"
					},
					"speaker": "anuk"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은 기억을 지우고, 다시 시작하려 했지.",
						"english": "They tried to erase memories and start anew.",
						"japanese": "彼らは記憶を消し、やり直そうとした。",
						"chinese": "他们试图抹去记忆，重新开始。",
						"french": "Ils ont essayé d'effacer les souvenirs et de recommencer.",
						"spanish": "Intentaron borrar los recuerdos y empezar de nuevo.",
						"vietnamese": "Họ đã cố gắng xóa bỏ ký ức và bắt đầu lại.",
						"thai": "พวกเขาพยายามลบความทรงจำและเริ่มต้นใหม่",
						"hindi": "उन्होंने यादें मिटाने और फिर से शुरू करने की कोशिश की।"
					},
					"speaker": "anuk",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "대정화. 일정 주기로 모든 것을 얼려버리는 현상.",
						"english": "The Great Purification. A phenomenon that freezes everything periodically.",
						"japanese": "大浄化。一定周期で全てを凍らせる現象。",
						"chinese": "大净化。一种周期性冻结一切的现象。",
						"french": "La Grande Purification. Un phénomène qui gèle tout périodiquement.",
						"spanish": "La Gran Purificación. Un fenómeno que congela todo periódicamente.",
						"vietnamese": "Đại Thanh tẩy. Một hiện tượng đóng băng mọi thứ theo chu kỳ nhất định.",
						"thai": "การชำระล้างครั้งใหญ่ ปรากฏการณ์ที่ทำให้ทุกสิ่งแข็งตัวเป็นระยะๆ",
						"hindi": "महान शुद्धि। एक ऐसी घटना जो हर चीज को समय-समय पर जमा देती है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게… 운명이라고?",
						"english": "Is that... fate?",
						"japanese": "それが…運命だと？",
						"chinese": "那是……命运吗？",
						"french": "Est-ce... le destin ?",
						"spanish": "¿Es eso... el destino?",
						"vietnamese": "Đó… là định mệnh sao?",
						"thai": "นั่นคือ... โชคชะตาหรือ?",
						"hindi": "क्या वह... भाग्य है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "벽화는 그렇게 기록하고 있소. 벗어날 수 없는 굴레처럼.",
						"english": "The murals record it so. Like an inescapable cycle.",
						"japanese": "壁画はそう記している。逃れられない輪廻のように。",
						"chinese": "壁画是这样记载的。如同无法摆脱的枷锁。",
						"french": "Les peintures murales le racontent ainsi. Comme un cycle inéluctable.",
						"spanish": "Los murales lo registran así. Como un ciclo ineludible.",
						"vietnamese": "Các bức bích họa ghi lại như vậy. Giống như một vòng lặp không thể thoát khỏi.",
						"thai": "ภาพจิตรกรรมฝาผนึกบันทึกไว้เช่นนั้น ราวกับวัฏจักรที่ไม่อาจหลีกหนี",
						"hindi": "भित्तिचित्रों में ऐसा ही दर्ज है। एक अपरिहार्य चक्र की तरह।"
					},
					"speaker": "anuk"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "약속을 지키지 못한 대가인가….",
						"english": "Is this the price for failing to keep a promise...?",
						"japanese": "約束を守れなかった代償か…。",
						"chinese": "这是未能遵守约定的代价吗……",
						"french": "Est-ce le prix à payer pour ne pas avoir tenu une promesse...?",
						"spanish": "¿Es este el precio por no cumplir una promesa...?",
						"vietnamese": "Đây có phải là cái giá phải trả vì không giữ lời hứa…?",
						"thai": "นี่คือราคาของการไม่รักษาสัญญาหรือ...?",
						"hindi": "क्या यह एक वादा पूरा न करने का परिणाम है...?"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						3
					],
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "더 이상 물러날 곳이 없소. 이 끝에는…",
						"english": "There's nowhere left to retreat. At this end...",
						"japanese": "もう退く場所はない。この先には…。",
						"chinese": "已无路可退。在这尽头……",
						"french": "Il n'y a plus de retour possible. Au bout de ceci...",
						"spanish": "No hay más lugar para retroceder. En este final...",
						"vietnamese": "Không còn nơi nào để lùi bước. Ở cuối con đường này…",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว ที่ปลายทางนี้...",
						"hindi": "पीछे हटने के लिए कोई जगह नहीं बची है। इस अंत में..."
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우린 여기서 끝을 봐야 해.",
						"english": "We must see this through to the end here.",
						"japanese": "我々はここで決着をつけねばならない。",
						"chinese": "我们必须在这里看到结局。",
						"french": "Nous devons en voir la fin ici.",
						"spanish": "Debemos ver el final aquí.",
						"vietnamese": "Chúng ta phải kết thúc mọi thứ ở đây.",
						"thai": "เราต้องเห็นจุดจบที่นี่",
						"hindi": "हमें यहीं इसका अंत देखना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광기의 흔적만 남을지, 새로운 희망이 피어날지는….",
						"english": "Whether only traces of madness remain, or new hope blossoms...",
						"japanese": "狂気の痕跡だけが残るか、新たな希望が芽生えるかは…。",
						"chinese": "无论是只剩下疯狂的痕迹，还是新的希望萌芽……",
						"french": "Que ne subsistent que des traces de folie, ou qu'un nouvel espoir fleurisse...",
						"spanish": "Si solo quedan rastros de locura, o si florece una nueva esperanza...",
						"vietnamese": "Liệu chỉ còn lại dấu vết của sự điên loạn, hay một hy vọng mới sẽ nảy nở…",
						"thai": "ไม่ว่าจะมีเพียงร่องรอยของความบ้าคลั่งเหลืออยู่ หรือความหวังใหม่จะเบ่งบาน...",
						"hindi": "चाहे पागलपन के निशान ही बचें, या नई आशा खिलेगी..."
					},
					"speaker": "anuk",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 다시 일어섰다. 광기는 더욱 거세졌다.",
						"english": "The gigantic shadow rose again. Madness grew even stronger.",
						"japanese": "巨大な影が再び立ち上がった。狂気はさらに激しさを増した。",
						"chinese": "巨大的阴影再次升起。疯狂变得更加汹涌。",
						"french": "L'ombre gigantesque se releva. La folie s'intensifia.",
						"spanish": "La gigantesca sombra se levantó de nuevo. La locura se hizo aún más feroz.",
						"vietnamese": "Bóng đen khổng lồ lại trỗi dậy. Sự điên rồ càng trở nên dữ dội hơn.",
						"thai": "เงาขนาดมหึมาลุกขึ้นอีกครั้ง. ความบ้าคลั่งทวีความรุนแรงยิ่งขึ้น.",
						"hindi": "विशालकाय छाया फिर से उठ खड़ी हुई। पागलपन और भी उग्र हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도망칠 수 없어. 이 비극은 영원히 반복될 것이다.",
						"english": "There's no escape. This tragedy will repeat forever.",
						"japanese": "逃げられない。この悲劇は永遠に繰り返されるだろう。",
						"chinese": "无处可逃。这场悲剧将永远重复下去。",
						"french": "On ne peut pas s'échapper. Cette tragédie se répétera éternellement.",
						"spanish": "No hay escape. Esta tragedia se repetirá eternamente.",
						"vietnamese": "Không thể trốn thoát. Bi kịch này sẽ lặp lại mãi mãi.",
						"thai": "หนีไม่พ้น โศกนาฏกรรมนี้จะย้ำรอยเดิมไปตลอดกาล",
						"hindi": "कोई बच नहीं सकता। यह त्रासदी हमेशा दोहराई जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니… 우리는 멈출 거야. 반드시!",
						"english": "No... we'll stop it. We must!",
						"japanese": "いや… 私たちが止める。必ず！",
						"chinese": "不… 我们会阻止它。我们必须！",
						"french": "Non... nous l'arrêterons. Nous le devons !",
						"spanish": "No... lo detendremos. ¡Debemos hacerlo!",
						"vietnamese": "Không... chúng ta sẽ ngăn chặn nó. Nhất định phải vậy!",
						"thai": "ไม่… เราจะหยุดมันให้ได้! ต้องหยุดให้ได้!",
						"hindi": "नहीं… हम इसे रोकेंगे। हमें करना ही होगा!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 공간을 짓누르던 광기는 사라지지 않았다.",
						"english": "The unknown boss fell. But the madness that crushed the space did not vanish.",
						"japanese": "正体不明のボスは倒れた。しかし、空間を押しつぶしていた狂気は消えなかった。",
						"chinese": "身份不明的头目倒下了。然而，压制空间的疯狂并未消失。",
						"french": "Le boss inconnu est tombé. Mais la folie qui écrasait l'espace n'a pas disparu.",
						"spanish": "El jefe desconocido ha caído. Pero la locura que aplastaba el espacio no desapareció.",
						"vietnamese": "Tên trùm không rõ danh tính đã ngã xuống. Tuy nhiên, sự điên rồ đè nặng lên không gian vẫn không biến mất.",
						"thai": "บอสปริศนาล้มลงแล้ว. แต่ความบ้าคลั่งที่กดทับพื้นที่ยังคงไม่หายไป.",
						"hindi": "अज्ञात बॉस गिर गया। लेकिन अंतरिक्ष को कुचलने वाला पागलपन गायब नहीं हुआ।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크크… 또다시… 반복될 뿐. 너희는 막을 수 없어.",
						"english": "Heh heh... Merely a repeat... again. You cannot stop it.",
						"japanese": "クク…またしても…繰り返されるだけだ。お前たちには止められない。",
						"chinese": "呵呵…又一次…只是重复。你们无法阻止。",
						"french": "Hé hé… Encore… ça ne fera que se répéter. Vous ne pouvez pas l'arrêter.",
						"spanish": "Je je… Otra vez… solo se repetirá. No podéis detenerlo.",
						"vietnamese": "Khà khà… Lại một lần nữa… chỉ là lặp lại thôi. Các ngươi không thể ngăn cản được.",
						"thai": "ฮิฮิ… อีกครั้ง… แค่จะซ้ำรอยเท่านั้น. พวกเจ้าหยุดมันไม่ได้.",
						"hindi": "हँ हँ… फिर से… यह बस दोहराया जाएगा। तुम इसे रोक नहीं सकते।"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"content": {
						"korean": "그 말이… 진실이었군.",
						"english": "Those words… were true.",
						"japanese": "あの言葉が…真実だったとは。",
						"chinese": "那些话…是真的。",
						"french": "Ces mots… étaient la vérité.",
						"spanish": "Esas palabras… eran verdad.",
						"vietnamese": "Những lời đó… là sự thật.",
						"thai": "คำพูดนั้น…เป็นความจริง.",
						"hindi": "वे शब्द… सच थे।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 벗어날 수 없는 운명이었다는 거야?",
						"english": "All of this… was an inescapable fate?",
						"japanese": "この全てが…逃れられない運命だったというのか？",
						"chinese": "这一切…都是无法逃脱的命运吗？",
						"french": "Tout cela… était un destin inéluctable ?",
						"spanish": "¿Todo esto… era un destino ineludible?",
						"vietnamese": "Tất cả những điều này… là số phận không thể thoát khỏi sao?",
						"thai": "ทั้งหมดนี้…คือโชคชะตาที่หลีกหนีไม่ได้งั้นหรือ?",
						"hindi": "यह सब… एक अपरिहार्य भाग्य था?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 반복되는 대정화의 흔적. 광기는 여전히 대지를 맴돌고 있었다.",
						"english": "Traces of the endlessly repeating Great Purification. Madness still lingered on the land.",
						"japanese": "終わりなく繰り返される大浄化の痕跡。狂気は未だ大地を彷徨っていた。",
						"chinese": "无尽重复的大净化痕迹。疯狂仍旧盘旋在大地之上。",
						"french": "Traces de la Grande Purification se répétant sans fin. La folie planait toujours sur la terre.",
						"spanish": "Huellas de la Gran Purificación que se repite sin cesar. La locura aún merodeaba la tierra.",
						"vietnamese": "Dấu vết của cuộc Đại Thanh Trừng lặp đi lặp lại không ngừng. Sự điên rồ vẫn còn luẩn quẩn trên mặt đất.",
						"thai": "ร่องรอยของการชำระล้างครั้งใหญ่ที่วนเวียนไม่สิ้นสุด. ความบ้าคลั่งยังคงวนเวียนอยู่บนผืนดิน.",
						"hindi": "अंतहीन रूप से दोहराए जा रहे महा-शुद्धिकरण के निशान। पागलपन अभी भी धरती पर मंडरा रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 심장부. 거대한 그림자가 앞을 가로막았다.",
						"english": "The frozen heartland. A colossal shadow blocked the way.",
						"japanese": "凍てついた心臓部。巨大な影が道を阻んだ。",
						"chinese": "冰冻的中心地带。一个巨大的黑影挡住了去路。",
						"french": "Le cœur gelé. Une ombre gigantesque barrait le chemin.",
						"spanish": "El corazón helado. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Trái tim băng giá. Một bóng đen khổng lồ chặn lối.",
						"thai": "ใจกลางที่แข็งเป็นน้ำแข็ง เงาขนาดมหึมาขวางทางอยู่",
						"hindi": "जमी हुई हृदयभूमि। एक विशालकाय छाया ने रास्ता रोक लिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들. 이 모든 것은 정해진 순리.",
						"english": "Fools. All this is the destined order.",
						"japanese": "愚か者ども。これもすべて定められた摂理だ。",
						"chinese": "愚蠢的人。这一切都是注定的法则。",
						"french": "Fous. Tout cela est l'ordre des choses.",
						"spanish": "Necios. Todo esto es el orden predestinado.",
						"vietnamese": "Lũ ngốc. Tất cả đây là quy luật đã định.",
						"thai": "พวกโง่เง่า. ทั้งหมดนี้คือชะตาที่ถูกลิขิตไว้แล้ว.",
						"hindi": "मूर्खों। यह सब नियत विधान है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "순리? 그건 광기야!",
						"english": "Order? That's madness!",
						"japanese": "摂理？それは狂気だ！",
						"chinese": "法则？那是疯狂！",
						"french": "Ordre? C'est de la folie !",
						"spanish": "¿Orden? ¡Eso es locura!",
						"vietnamese": "Quy luật? Đó là sự điên rồ!",
						"thai": "ระเบียบ? นั่นมันความบ้าคลั่ง!",
						"hindi": "विधान? वह तो पागलपन है!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "너희도 곧 얼어붙을 것이다. 영원한 평화 속으로.",
						"english": "You too will soon freeze. Into eternal peace.",
						"japanese": "お前たちもやがて凍てつくだろう。永遠の平和の中へ。",
						"chinese": "你们也很快会冻结。进入永恒的平静中。",
						"french": "Vous aussi, vous allez bientôt geler. Dans la paix éternelle.",
						"spanish": "Vosotros también pronto os congelaréis. En la paz eterna.",
						"vietnamese": "Các ngươi cũng sẽ sớm đóng băng. Vào sự bình yên vĩnh hằng.",
						"thai": "พวกเจ้าก็จะแข็งตัวในไม่ช้า. เข้าสู่สันติสุขนิรันดร์.",
						"hindi": "तुम भी जल्द ही जम जाओगे। अनंत शांति में।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 자가… 광기의 수호자요.",
						"english": "That one... is the guardian of madness.",
						"japanese": "あの者が…狂気の守護者だ。",
						"chinese": "那家伙…是疯狂的守护者。",
						"french": "Celui-là… est le gardien de la folie.",
						"spanish": "Ese… es el guardián de la locura.",
						"vietnamese": "Kẻ đó… là người bảo hộ của sự điên rồ.",
						"thai": "คนนั้น…คือผู้พิทักษ์แห่งความบ้าคลั่ง.",
						"hindi": "वह… पागलपन का संरक्षक है।"
					},
					"speaker": "anuk"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 동굴, 과거의 속삭임이 가득한 곳.",
			"아눅은 율법을 말했지만, 내 발걸음은 멈추지 않았다.",
			"주술사의 흔적, 그리고 밝혀지는 잔혹한 진실.",
			"이 모든 고통이, 반복되는 광기의 시작일 줄은…"
		],
		"english": [
			"Frozen cave, a place filled with whispers of the past.",
			"Anuk spoke of the law, but my steps did not falter.",
			"Traces of the shaman, and the cruel truth revealed.",
			"All this suffering, just the beginning of recurring madness..."
		],
		"japanese": [
			"凍てついた洞窟、過去の囁きに満ちた場所。",
			"アヌクは律法を説いたが、私の足取りは止まらなかった。",
			"呪術師の痕跡、そして明らかになる残酷な真実。",
			"この全ての苦痛が、繰り返される狂気の始まりだとは…"
		],
		"chinese": [
			"冰冻的洞穴，充满过去低语的地方。",
			"阿努克讲述着律法，但我的脚步并未停歇。",
			"巫师的踪迹，以及揭示出的残酷真相。",
			"所有的痛苦，竟是这重复疯狂的开端……"
		],
		"french": [
			"Caverne gelée, un lieu rempli des murmures du passé.",
			"Anuk a parlé de la loi, mais mes pas ne se sont pas arrêtés.",
			"Les traces du chaman, et la cruelle vérité révélée.",
			"Toute cette souffrance, juste le début d'une folie récurrente..."
		],
		"spanish": [
			"Cueva helada, un lugar lleno de susurros del pasado.",
			"Anuk habló de la ley, pero mis pasos no se detuvieron.",
			"Las huellas del chamán, y la cruel verdad revelada.",
			"Todo este sufrimiento, solo el comienzo de una locura recurrente..."
		],
		"vietnamese": [
			"Hang động băng giá, nơi đầy những lời thì thầm của quá khứ.",
			"Anuk đã nói về luật, nhưng bước chân của tôi không dừng lại.",
			"Dấu vết của pháp sư, và sự thật tàn khốc được hé lộ.",
			"Tất cả nỗi đau này, chỉ là khởi đầu của sự điên loạn lặp đi lặp lại…"
		],
		"thai": [
			"ถ้ำเยือกแข็ง สถานที่ที่เต็มไปด้วยเสียงกระซิบจากอดีต",
			"อนุกพูดถึงกฎหมาย แต่ก้าวเท้าของฉันไม่หยุด",
			"ร่องรอยของหมอผี และความจริงอันโหดร้ายที่ถูกเปิดเผย",
			"ความเจ็บปวดทั้งหมดนี้ เป็นเพียงจุดเริ่มต้นของความบ้าคลั่งที่ซ้ำซาก..."
		],
		"hindi": [
			"जमी हुई गुफा, अतीत की फुसफुसाहटों से भरी जगह।",
			"अनुक ने कानून की बात की, लेकिन मेरे कदम नहीं रुके।",
			"तांत्रिक के निशान, और सामने आती क्रूर सच्चाई।",
			"यह सारा दर्द, बस बार-बार दोहराए जाने वाले पागलपन की शुरुआत था..."
		]
	}
} as const;
