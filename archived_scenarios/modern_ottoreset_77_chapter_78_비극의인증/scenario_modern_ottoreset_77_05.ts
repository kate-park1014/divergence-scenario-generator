export const scenario_modern_ottoreset_77_05 = {
	"scenario_id": "modern_ottoreset_77_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "pool_PasswordWarden_V0"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "최종 관문이 눈앞에 나타났다. 더 이상의 퇴로는 없었다.",
						"english": "The final gate appeared before their eyes. There was no longer any retreat.",
						"japanese": "最終関門が目の前に現れた。これ以上の退路はなかった。",
						"chinese": "最终关卡出现在眼前。已无退路可言。",
						"french": "La porte finale apparut devant leurs yeux. Il n'y avait plus de retraite.",
						"spanish": "La puerta final apareció ante sus ojos. Ya no había retirada.",
						"vietnamese": "Cánh cổng cuối cùng đã xuất hiện trước mắt. Không còn đường lui nào nữa.",
						"thai": "ประตูด่านสุดท้ายปรากฏขึ้นตรงหน้า ไม่มีทางถอยอีกแล้ว",
						"hindi": "अंतिम द्वार उनकी आँखों के सामने प्रकट हुआ। अब कोई पीछे हटने का रास्ता नहीं था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 끝인가?",
						"english": "Is this... the end?",
						"japanese": "ここが…終わりなのか？",
						"chinese": "这里…就是尽头吗？",
						"french": "C'est... la fin ici ?",
						"spanish": "¿Es este... el final?",
						"vietnamese": "Đây… là kết thúc sao?",
						"thai": "ที่นี่...คือจุดจบหรือ?",
						"hindi": "क्या यह… अंत है?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "zoe",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 여기까지 오느라 수고 많았어.",
						"english": "Yes. You've worked hard to get here.",
						"japanese": "ええ。ここまでよく来たわね。",
						"chinese": "是啊。能走到这里，你辛苦了。",
						"french": "Oui. Tu as fait beaucoup d'efforts pour arriver jusqu'ici.",
						"spanish": "Sí. Has trabajado mucho para llegar hasta aquí.",
						"vietnamese": "Phải. Ngươi đã rất cố gắng để đến được đây.",
						"thai": "ใช่แล้ว เจ้าพยายามมากที่มาถึงที่นี่ได้",
						"hindi": "हाँ। यहाँ तक आने के लिए तुमने बहुत मेहनत की है।"
					},
					"speaker": "zoe",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "Zoe…? 네가 왜 여기에?",
						"english": "Zoe...? Why are you here?",
						"japanese": "ゾーイ…？なぜここに？",
						"chinese": "佐伊…？你为什么会在这里？",
						"french": "Zoé...? Pourquoi es-tu là ?",
						"spanish": "¿Zoe...? ¿Por qué estás aquí?",
						"vietnamese": "Zoe…? Sao ngươi lại ở đây?",
						"thai": "โซอี้…? ทำไมเจ้าถึงมาอยู่ที่นี่?",
						"hindi": "ज़ोई...? तुम यहाँ क्यों हो?"
					}
				},
				{
					"content": {
						"korean": "당연하지. 난 이 모든 것을 설계했으니까.",
						"english": "Of course. I designed all of this.",
						"japanese": "当たり前よ。私がこのすべてを設計したのだから。",
						"chinese": "当然了。这一切都是我设计的。",
						"french": "Évidemment. J'ai tout conçu.",
						"spanish": "Por supuesto. Yo diseñé todo esto.",
						"vietnamese": "Đương nhiên rồi. Ta đã thiết kế tất cả những thứ này mà.",
						"thai": "แน่นอนสิ ฉันเป็นคนออกแบบทุกสิ่งนี้เอง",
						"hindi": "बिल्कुल। मैंने ही यह सब डिज़ाइन किया है।"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "zoe",
					"emotion": "base",
					"content": {
						"korean": "놀랐니? 내가 여기에 있는 게.",
						"english": "Surprised? That I'm here.",
						"japanese": "驚いた？私がここにいることに。",
						"chinese": "惊讶吗？我在这里。",
						"french": "Surprise ? Que je sois ici.",
						"spanish": "¿Sorprendido? De que esté aquí.",
						"vietnamese": "Bất ngờ sao? Khi ta ở đây.",
						"thai": "ประหลาดใจรึเปล่า? ที่ฉันมาอยู่ที่นี่",
						"hindi": "हैरान हो? कि मैं यहाँ हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야? 너는 우릴 도왔잖아.",
						"english": "What are you talking about? You helped us.",
						"japanese": "何を言ってるの？あなたは私たちを助けてくれたじゃない。",
						"chinese": "你在说什么？你明明帮助了我们。",
						"french": "De quoi parles-tu ? Tu nous as aidés.",
						"spanish": "¿De qué estás hablando? Nos ayudaste.",
						"vietnamese": "Ngươi đang nói gì vậy? Ngươi đã giúp chúng ta mà.",
						"thai": "เจ้าพูดอะไรน่ะ? เจ้าช่วยพวกเรานี่นา",
						"hindi": "क्या बक रहे हो? तुमने हमारी मदद की थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하하… 도왔지. 'Otto Reset'의 계획에 따라.",
						"english": "Haha... I did help. According to the 'Otto Reset' plan.",
						"japanese": "ハハ…助けたわ。'オットー・リセット'の計画に従ってね。",
						"chinese": "哈哈…是啊，我帮了。不过是按照“奥托重置”的计划。",
						"french": "Haha... J'ai aidé. Selon le plan \"Otto Reset\".",
						"spanish": "Jaja... Sí, ayudé. Según el plan 'Otto Reset'.",
						"vietnamese": "Haha… Ta đã giúp. Theo kế hoạch của 'Otto Reset'.",
						"thai": "ฮ่าฮ่า… ฉันช่วยน่ะสิ ตามแผนของ 'Otto Reset'",
						"hindi": "हाहा... मैंने मदद की थी। 'ऑटो रीसेट' की योजना के अनुसार।"
					},
					"speaker": "zoe",
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 Otto의 가장 오래된 조력자야. 너희를 여기까지 인도하는 것이 내 역할이었지.",
						"english": "I am Otto's oldest accomplice. My role was to guide you all here.",
						"japanese": "私はオットーの最も古き協力者よ。あなたたちをここまで導くのが私の役割だったの。",
						"chinese": "我是奥托最古老的帮手。将你们引到这里，就是我的职责。",
						"french": "Je suis le plus ancien complice d'Otto. Mon rôle était de vous guider jusqu'ici.",
						"spanish": "Soy el cómplice más antiguo de Otto. Mi papel era guiarlos hasta aquí.",
						"vietnamese": "Ta là trợ thủ lâu đời nhất của Otto. Vai trò của ta là dẫn dắt các ngươi đến đây.",
						"thai": "ฉันคือผู้สมรู้ร่วมคิดที่เก่าแก่ที่สุดของอ็อตโต้ การนำทางพวกเจ้ามาที่นี่คือบทบาทของฉัน",
						"hindi": "मैं ओटो का सबसे पुराना सहयोगी हूँ। तुम सबको यहाँ तक लाना मेरी भूमिका थी।"
					},
					"speaker": "zoe",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "zoe",
					"emotion": "base",
					"content": {
						"korean": "이곳의 보안은 완벽해. 빠져나갈 수 없어.",
						"english": "The security here is perfect. You can't escape.",
						"japanese": "ここのセキュリティは完璧よ。逃れることはできない。",
						"chinese": "这里的安保是完美的。你们无法逃脱。",
						"french": "La sécurité ici est parfaite. Vous ne pouvez pas vous échapper.",
						"spanish": "La seguridad aquí es perfecta. No puedes escapar.",
						"vietnamese": "An ninh ở đây hoàn hảo. Ngươi không thể thoát ra được đâu.",
						"thai": "ระบบรักษาความปลอดภัยที่นี่สมบูรณ์แบบ พวกเจ้าหนีไม่พ้นหรอก",
						"hindi": "यहाँ की सुरक्षा अचूक है। तुम बच नहीं सकते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "무슨 말도 안 되는 소리야!",
						"english": "What nonsense!",
						"japanese": "何を馬鹿なことを！",
						"chinese": "这是什么胡说八道！",
						"french": "Quelle absurdité !",
						"spanish": "¡Qué tontería!",
						"vietnamese": "Ngươi đang nói cái quái gì vậy!",
						"thai": "เจ้าพูดเรื่องไร้สาระอะไรน่ะ!",
						"hindi": "ये क्या बकवास है!"
					}
				},
				{
					"content": {
						"korean": "이 모든 과정이 너희를 위한 '연극'이었으니까.",
						"english": "This entire process was a 'play' staged just for you.",
						"japanese": "この全ての過程は、あなたたちのための「劇」だったからだ。",
						"chinese": "因为这一切都是为你们准备的‘戏剧’。",
						"french": "Tout ce processus n'était qu'une 'pièce de théâtre' pour vous.",
						"spanish": "Todo este proceso fue una 'obra de teatro' para vosotros.",
						"vietnamese": "Vì tất cả quá trình này chỉ là một 'vở kịch' dành cho các ngươi.",
						"thai": "เพราะกระบวนการทั้งหมดนี้คือ 'ละคร' สำหรับพวกเจ้า",
						"hindi": "यह सारी प्रक्रिया तुम्हारे लिए एक 'नाटक' थी।"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "최종 목표는, 너희를 영원히 이곳에 가두는 거야.",
						"english": "The final goal is to trap you here forever.",
						"japanese": "最終目標は、お前たちを永遠にここに閉じ込めることだ。",
						"chinese": "最终目标是，将你们永远困在这里。",
						"french": "Le but final est de vous piéger ici pour toujours.",
						"spanish": "El objetivo final es atraparos aquí para siempre.",
						"vietnamese": "Mục tiêu cuối cùng là, giam giữ các ngươi ở đây vĩnh viễn.",
						"thai": "เป้าหมายสุดท้ายคือ การกักขังพวกเจ้าไว้ที่นี่ตลอดไป",
						"hindi": "अंतिम लक्ष्य है, तुम्हें हमेशा के लिए यहीं फंसाना।"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럴 리가!",
						"english": "No way!",
						"japanese": "まさか！",
						"chinese": "不可能！",
						"french": "Impossible !",
						"spanish": "¡Imposible!",
						"vietnamese": "Không thể nào!",
						"thai": "ไม่จริงน่า!",
						"hindi": "ऐसा नहीं हो सकता!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "zoe",
					"action": "enter"
				},
				{
					"speaker": "zoe",
					"emotion": "base",
					"content": {
						"korean": "저 너머에 Otto Reset이 기다리고 있어.",
						"english": "Otto Reset awaits beyond.",
						"japanese": "その先に、Otto Resetが待っている。",
						"chinese": "在那边，Otto Reset正在等候。",
						"french": "Otto Reset vous attend au-delà.",
						"spanish": "Otto Reset os espera al otro lado.",
						"vietnamese": "Otto Reset đang chờ đợi ở phía bên kia.",
						"thai": "Otto Reset กำลังรออยู่เบื้องหลัง",
						"hindi": "उस पार Otto Reset इंतजार कर रहा है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…너는… 대체… 왜!",
						"english": "...You... just... why!",
						"japanese": "…お前は…一体…なぜ！",
						"chinese": "…你…到底…为什么！",
						"french": "...Toi... mais... pourquoi !",
						"spanish": "...Tú... ¿por qué... por qué?!",
						"vietnamese": "...Ngươi... rốt cuộc... tại sao!",
						"thai": "...เจ้า...ทำไม...ทำไม!",
						"hindi": "...तुम... आखिर... क्यों!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인증의 실패를 거듭할수록, 너희는 더욱 깊이 묶일 거야.",
						"english": "The more you fail authentication, the deeper you'll be bound.",
						"japanese": "認証の失敗を繰り返すほど、お前たちはより深く縛られるだろう。",
						"chinese": "认证失败的次数越多，你们就会被束缚得越深。",
						"french": "Plus vous échouerez à l'authentification, plus vous serez liés profondément.",
						"spanish": "Cuanto más falléis en la autenticación, más profundamente os ataréis.",
						"vietnamese": "Càng thất bại trong việc xác thực, các ngươi sẽ càng bị trói buộc sâu hơn.",
						"thai": "ยิ่งเจ้าล้มเหลวในการยืนยันตัวตนมากเท่าไร เจ้าก็จะถูกผูกมัดลึกซึ้งยิ่งขึ้นเท่านั้น",
						"hindi": "जितनी बार तुम प्रमाणीकरण में विफल होगे, उतनी ही गहराई से तुम बंध जाओगे।"
					},
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "zoe",
					"emotion": "base",
					"content": {
						"korean": "영원히, 이 시스템의 일부가 되는 거지.",
						"english": "Forever becoming a part of this system.",
						"japanese": "永遠に、このシステムの一部となるのだ。",
						"chinese": "永远地，成为这个系统的一部分。",
						"french": "Pour toujours, faire partie de ce système.",
						"spanish": "Para siempre, os convertiréis en parte de este sistema.",
						"vietnamese": "Vĩnh viễn, trở thành một phần của hệ thống này.",
						"thai": "ตลอดไป เจ้าจะกลายเป็นส่วนหนึ่งของระบบนี้",
						"hindi": "हमेशा के लिए, इस प्रणाली का एक हिस्सा बन जाओगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "끝없는 지옥이라니!",
						"english": "An endless hell!",
						"japanese": "終わりのない地獄だと！",
						"chinese": "无尽的地狱！",
						"french": "Un enfer sans fin !",
						"spanish": "¡Un infierno sin fin!",
						"vietnamese": "Một địa ngục không hồi kết!",
						"thai": "นรกที่ไม่มีที่สิ้นสุด!",
						"hindi": "एक अंतहीन नरक!"
					}
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 나는… 시스템… 나는… 영원히…",
						"english": "Ugh... I am... the system... I am... forever...",
						"japanese": "くっ… 私は… システム… 私は… 永遠に…",
						"chinese": "呃…我…系统…我…永远…",
						"french": "Argh… Je suis… le système… Je suis… à jamais…",
						"spanish": "Ugh… Yo soy… el sistema… Yo soy… para siempre…",
						"vietnamese": "Khục… Ta là… hệ thống… Ta là… vĩnh viễn…",
						"thai": "อึก… ฉันคือ… ระบบ… ฉันคือ… ชั่วนิรันดร์…",
						"hindi": "उफ़… मैं… सिस्टम हूँ… मैं… हमेशा के लिए…"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "happy",
					"content": {
						"korean": "끝났다…!",
						"english": "It's over!",
						"japanese": "終わった…！",
						"chinese": "结束了！",
						"french": "C'est fini !",
						"spanish": "¡Se acabó!",
						"vietnamese": "Đã kết thúc!",
						"thai": "จบแล้ว…!",
						"hindi": "खत्म हो गया!"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "zoe",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "하지만… 과연 끝났을까?",
						"english": "But... is it truly over?",
						"japanese": "だが… 本当に終わったのか？",
						"chinese": "但是…真的结束了吗？",
						"french": "Mais… est-ce vraiment fini ?",
						"spanish": "Pero… ¿habrá terminado de verdad?",
						"vietnamese": "Nhưng… liệu có thật sự kết thúc?",
						"thai": "แต่… มันจบจริงเหรอ?",
						"hindi": "लेकिन… क्या यह वाकई खत्म हो गया?"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 세계의 모든 것은… 영원히 너희를 묶어둘 거야.",
						"english": "Everything in this world... will bind you forever.",
						"japanese": "この世界の全てが… 永遠にお前たちを縛りつけるだろう。",
						"chinese": "这个世界的一切…将永远束缚住你们。",
						"french": "Tout dans ce monde… vous liera pour toujours.",
						"spanish": "Todo en este mundo… os atará para siempre.",
						"vietnamese": "Mọi thứ trong thế giới này… sẽ trói buộc các ngươi mãi mãi.",
						"thai": "ทุกสิ่งในโลกนี้… จะผูกมัดพวกเธอไว้ตลอดไป.",
						"hindi": "इस दुनिया की हर चीज़… तुम्हें हमेशा के लिए बांधे रखेगी।"
					},
					"speaker": "zoe",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템은 멈췄지만, 그 그림자는 여전히 남아 있었다. 영원히 반복될 저주처럼.",
						"english": "The system stopped, but its shadow still remained. Like a curse destined to repeat forever.",
						"japanese": "システムは停止したが、その影は依然として残っていた。永遠に繰り返される呪いのように。",
						"chinese": "系统停止了，但它的阴影依然存在。如同一个注定永远重复的诅咒。",
						"french": "Le système s'est arrêté, mais son ombre subsistait toujours. Comme une malédiction destinée à se répéter éternellement.",
						"spanish": "El sistema se detuvo, pero su sombra aún permanecía. Como una maldición destinada a repetirse eternamente.",
						"vietnamese": "Hệ thống đã dừng, nhưng cái bóng của nó vẫn còn đó. Như một lời nguyền định sẵn sẽ lặp lại mãi mãi.",
						"thai": "ระบบหยุดลงแล้ว แต่เงาของมันยังคงอยู่ ราวกับคำสาปที่จะซ้ำรอยไปชั่วนิรันดร์.",
						"hindi": "सिस्टम रुक गया, लेकिन उसकी परछाई अब भी बची हुई थी। एक शाप की तरह जो हमेशा दोहराया जाएगा।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 너희는 영원히 벗어날 수 없어.",
						"english": "Fools. You'll never escape.",
						"japanese": "愚か者どもめ。お前たちは永遠に逃れられない。",
						"chinese": "愚蠢的东西。你们永远无法逃脱。",
						"french": "Stupides. Vous ne vous échapperez jamais.",
						"spanish": "Estúpidos. Nunca escaparéis.",
						"vietnamese": "Lũ ngu ngốc. Các ngươi sẽ không bao giờ thoát được.",
						"thai": "พวกโง่เง่าเอ๊ย! พวกแกไม่มีวันหนีรอดไปได้!",
						"hindi": "मूर्खों। तुम कभी बच नहीं पाओगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 반드시… 벗어날 거야!",
						"english": "No... We will... escape!",
						"japanese": "いや…必ず…逃れてみせる！",
						"chinese": "不…我们…一定要逃出去！",
						"french": "Non... Nous allons... nous échapper !",
						"spanish": "¡No... Nos salvaremos!",
						"vietnamese": "Không... Chúng ta... nhất định sẽ thoát!",
						"thai": "ไม่... เราจะ... ต้องหนีไปให้ได้!",
						"hindi": "नहीं... हम... ज़रूर बच निकलेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "zoe",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "발버둥 쳐봐야 소용 없어. 처음부터 정해진 결말이었어.",
						"english": "Struggling is pointless. This end was set from the start.",
						"japanese": "もがいても無駄だ。最初から決まっていた結末だ。",
						"chinese": "挣扎也无用。这结局从一开始就注定了。",
						"french": "Lutter est vain. Cette fin était inévitable depuis le début.",
						"spanish": "Luchar es inútil. Este final estaba predestinado.",
						"vietnamese": "Vùng vẫy cũng vô ích thôi. Đây là kết cục đã định sẵn rồi.",
						"thai": "ดิ้นรนไปก็ไร้ประโยชน์ มันเป็นจุดจบที่ถูกกำหนดไว้ตั้งแต่แรกแล้ว",
						"hindi": "हाथ-पैर मारना व्यर्थ है। यह अंत शुरू से ही तय था।"
					},
					"speaker": "zoe",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내, 시스템의 심장부. 그가 모습을 드러냈다.",
						"english": "Finally, the heart of the system. He revealed himself.",
						"japanese": "ついに、システムの心臓部。彼が姿を現した。",
						"chinese": "终于，系统的核心。他现身了。",
						"french": "Enfin, le cœur du système. Il a fait son apparition.",
						"spanish": "Finalmente, el corazón del sistema. Él se ha revelado.",
						"vietnamese": "Cuối cùng, trái tim của hệ thống. Hắn đã xuất hiện.",
						"thai": "ในที่สุด หัวใจของระบบ เขาก็ปรากฏตัวขึ้น",
						"hindi": "अंततः, प्रणाली का हृदय। उसने स्वयं को प्रकट किया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "환영한다, 손님. 나의 가장 완벽한 감옥에.",
						"english": "Welcome, guest. To my most perfect prison.",
						"japanese": "歓迎する、お客様。私の最も完璧な監獄へ。",
						"chinese": "欢迎，客人。来到我最完美的监狱。",
						"french": "Bienvenue, invité. Dans ma prison la plus parfaite.",
						"spanish": "Bienvenido, invitado. A mi prisión más perfecta.",
						"vietnamese": "Chào mừng, quý khách. Đến với nhà tù hoàn hảo nhất của ta.",
						"thai": "ยินดีต้อนรับ แขกผู้มีเกียรติ สู่คุกที่สมบูรณ์แบบที่สุดของข้า",
						"hindi": "स्वागत है, अतिथि। मेरी सबसे उत्तम जेल में।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… Otto Reset!",
						"english": "You... Otto Reset!",
						"japanese": "お前が… オットーリセット！",
						"chinese": "你…奥托重置！",
						"french": "Toi… Otto Reset !",
						"spanish": "Tú… ¡Otto Reset!",
						"vietnamese": "Ngươi… Otto Reset!",
						"thai": "แก… อ็อตโตรีเซ็ต!",
						"hindi": "तुम... ओटो रीसेट!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "zoe",
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "zoe",
					"emotion": "base",
					"content": {
						"korean": "그래. 이제 더 이상 숨길 필요 없지.",
						"english": "Yes. No need to hide anymore.",
						"japanese": "ええ。もう隠す必要はない。",
						"chinese": "没错。现在没必要再躲藏了。",
						"french": "Oui. Plus besoin de se cacher.",
						"spanish": "Sí. Ya no hay necesidad de esconderse.",
						"vietnamese": "Đúng vậy. Không cần che giấu nữa.",
						"thai": "ใช่. ไม่ต้องซ่อนอีกแล้ว.",
						"hindi": "हाँ। अब और छिपाने की ज़रूरत नहीं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 모든 인증은, 처음부터 실패할 운명이었어.",
						"english": "All these authentications were destined to fail from the start.",
						"japanese": "この認証は全て、最初から失敗する運命だった。",
						"chinese": "所有这些认证，从一开始就注定失败。",
						"french": "Toutes ces authentifications étaient vouées à l'échec dès le départ.",
						"spanish": "Todas estas autenticaciones estaban destinadas a fallar desde el principio.",
						"vietnamese": "Tất cả các xác thực này, ngay từ đầu đã định sẵn thất bại.",
						"thai": "การยืนยันทั้งหมดนี้ ถูกกำหนดให้ล้มเหลวตั้งแต่แรกแล้ว.",
						"hindi": "ये सभी प्रमाणीकरण, शुरू से ही विफल होने के लिए अभिशप्त थे।"
					},
					"speaker": "zoe",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "너는 영원히 이곳에서… '보안을 위해 처음부터 다시'를 반복할 것이다.",
						"english": "You will forever repeat 'for security, start over from the beginning' here...",
						"japanese": "お前は永遠にここで…「セキュリティのため、最初からやり直し」を繰り返すだろう。",
						"chinese": "你将永远在这里…重复‘为了安全，请从头开始’。",
						"french": "Tu répéteras à jamais ici… « pour la sécurité, recommence depuis le début ».",
						"spanish": "Aquí repetirás para siempre… 'por seguridad, empieza de nuevo desde el principio'.",
						"vietnamese": "Ngươi sẽ mãi mãi ở đây… lặp lại 'vì an ninh, hãy bắt đầu lại từ đầu'.",
						"thai": "แกจะต้องวนเวียนอยู่ที่นี่ไปตลอด… ซ้ำรอย 'เพื่อความปลอดภัย โปรดเริ่มใหม่ตั้งแต่ต้น'.",
						"hindi": "तुम हमेशा के लिए यहीं पर… 'सुरक्षा के लिए, शुरू से फिर से' दोहराओगे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이럴 수가! 안 돼!",
						"english": "No way! Stop!",
						"japanese": "そんな！やめて！",
						"chinese": "怎么会这样！不要！",
						"french": "Non ! Arrête !",
						"spanish": "¡No puede ser! ¡No!",
						"vietnamese": "Không thể nào! Dừng lại!",
						"thai": "ไม่นะ! หยุดนะ!",
						"hindi": "ऐसा नहीं हो सकता! नहीं!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 모든 여정은, 계획된 비극이었다.",
			"마침내 도달한 최종 관문. 그러나 기다린 것은…",
			"친절했던 안내자는 가면을 벗고, 숨겨진 진실이 드러난다.",
			"절망 속에서, 끝없는 인증의 굴레가 시작된다."
		],
		"english": [
			"This entire journey was a planned tragedy.",
			"The final gate, finally reached. But what awaited was...",
			"The kind guide sheds their mask, revealing a hidden truth.",
			"In despair, the endless cycle of authentication begins."
		],
		"japanese": [
			"この全ての旅路は、仕組まれた悲劇だった。",
			"ついに辿り着いた最終関門。しかし、待ち受けていたのは…",
			"親切だった案内者は仮面を脱ぎ、隠された真実が露わになる。",
			"絶望の中、終わりのない認証の輪廻が始まる。"
		],
		"chinese": [
			"这趟旅程，是一场蓄谋已久的悲剧。",
			"终于抵达了最终关卡。然而等待着的却是……",
			"友善的向导揭下了面具，隐藏的真相浮出水面。",
			"在绝望中，无尽的认证循环开始了。"
		],
		"french": [
			"Tout ce périple était une tragédie planifiée.",
			"La porte finale, enfin atteinte. Mais ce qui nous attendait...",
			"Le gentil guide retire son masque, révélant une vérité cachée.",
			"Dans le désespoir, le cycle sans fin de l'authentification commence."
		],
		"spanish": [
			"Todo este viaje fue una tragedia planeada.",
			"La puerta final, finalmente alcanzada. Pero lo que esperaba era...",
			"El amable guía se quita la máscara, revelando una verdad oculta.",
			"En la desesperación, el ciclo interminable de autenticación comienza."
		],
		"vietnamese": [
			"Toàn bộ hành trình này, là một bi kịch đã được định đoạt.",
			"Cuối cùng cũng đến được cánh cổng cuối cùng. Nhưng điều chờ đợi lại là...",
			"Người hướng dẫn tử tế lột bỏ mặt nạ, sự thật bị che giấu được phơi bày.",
			"Trong tuyệt vọng, vòng lặp xác thực vô tận bắt đầu."
		],
		"thai": [
			"การเดินทางทั้งหมดนี้คือโศกนาฏกรรมที่ถูกวางแผนไว้แล้ว",
			"ในที่สุดก็มาถึงประตูด่านสุดท้ายแล้ว แต่สิ่งที่รอคอยอยู่คือ...",
			"ผู้นำทางผู้ใจดีถอดหน้ากากออก และความจริงที่ซ่อนอยู่ก็ถูกเปิดเผย",
			"ในความสิ้นหวัง วงจรการยืนยันตัวตนที่ไม่สิ้นสุดก็เริ่มต้นขึ้น"
		],
		"hindi": [
			"यह पूरी यात्रा, एक सुनियोजित त्रासदी थी।",
			"अंततः अंतिम द्वार तक पहुँचे। लेकिन जो प्रतीक्षा कर रहा था वह…",
			"दयालु मार्गदर्शक अपना मुखौटा उतारता है, एक छिपा हुआ सत्य सामने आता है।",
			"निराशा में, प्रमाणीकरण का अंतहीन चक्र शुरू होता है।"
		]
	},
	"epilogue": {
		"korean": [
			"시스템의 침묵. 그러나 승리라 부를 수 없었다.",
			"모든 것이 끝났지만, 아무것도 끝나지 않았다.",
			"그들은 영원한 루프의 시작점에 서 있었다.",
			"자유는 환상이었고, 구원은 저주가 되었다.",
			"다시, 처음부터… 영원히."
		],
		"english": [
			"The system's silence. Yet, it could not be called a victory.",
			"Everything ended, yet nothing ended.",
			"They stood at the starting point of an eternal loop.",
			"Freedom was an illusion, and salvation became a curse.",
			"Again, from the beginning... forever."
		],
		"japanese": [
			"システムの沈黙。しかし、それを勝利と呼ぶことはできなかった。",
			"全てが終わったが、何も終わっていなかった。",
			"彼らは永遠のループの開始地点に立っていた。",
			"自由は幻想であり、救済は呪いとなった。",
			"再び、最初から…永遠に。"
		],
		"chinese": [
			"系统陷入沉默。然而，这无法称之为胜利。",
			"一切都结束了，却又什么都没有结束。",
			"他们站在了永恒循环的起点。",
			"自由是幻象，而救赎变成了诅咒。",
			"再次，从头开始……直到永远。"
		],
		"french": [
			"Le silence du système. Pourtant, cela ne pouvait être appelé une victoire.",
			"Tout était fini, pourtant rien n'était fini.",
			"Ils se tenaient au point de départ d'une boucle éternelle.",
			"La liberté était une illusion, et le salut devint une malédiction.",
			"À nouveau, depuis le début... pour toujours."
		],
		"spanish": [
			"El silencio del sistema. Sin embargo, no podía llamarse victoria.",
			"Todo terminó, pero nada terminó.",
			"Estaban en el punto de partida de un bucle eterno.",
			"La libertad era una ilusión, y la salvación se convirtió en una maldición.",
			"De nuevo, desde el principio... para siempre."
		],
		"vietnamese": [
			"Sự im lặng của hệ thống. Tuy nhiên, đó không thể gọi là chiến thắng.",
			"Mọi thứ đã kết thúc, nhưng không có gì kết thúc cả.",
			"Họ đứng ở điểm khởi đầu của một vòng lặp vĩnh cửu.",
			"Tự do là một ảo ảnh, và sự cứu rỗi trở thành một lời nguyền.",
			"Lại, từ đầu... mãi mãi."
		],
		"thai": [
			"ความเงียบของระบบ ถึงกระนั้น มันก็ไม่อาจเรียกว่าชัยชนะได้",
			"ทุกสิ่งจบลงแล้ว แต่ก็ไม่มีอะไรจบลงเลย",
			"พวกเขายืนอยู่ ณ จุดเริ่มต้นของวงวนอันเป็นนิรันดร์",
			"อิสรภาพเป็นเพียงภาพลวงตา และความรอดได้กลายเป็นคำสาป",
			"อีกครั้ง จากจุดเริ่มต้น... ตลอดไป"
		],
		"hindi": [
			"सिस्टम की चुप्पी। फिर भी, इसे जीत नहीं कहा जा सकता था।",
			"सब कुछ खत्म हो गया, फिर भी कुछ भी खत्म नहीं हुआ।",
			"वे एक अनंत लूप के शुरुआती बिंदु पर खड़े थे।",
			"स्वतंत्रता एक भ्रम थी, और मोक्ष एक अभिशाप बन गया।",
			"फिर से, शुरू से… हमेशा के लिए।"
		]
	}
} as const;
