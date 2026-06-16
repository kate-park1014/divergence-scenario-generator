export const scenario_snowy_anya_34_03 = {
	"scenario_id": "snowy_anya_34_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라 잦아든 하얀 분지.",
			"작은 발자국이, 같은 자리만 맴돈다.",
			"떠날 수 있었으나 떠나지 못한 이의 자취.",
			"그 멈춰선 발걸음이, 이제야 말하려 한다."
		],
		"english": [
			"The white basin where the blizzard has subsided.",
			"Small footsteps circle the same spot.",
			"Traces of one who could leave, but couldn't.",
			"Those halted footsteps, now finally about to speak."
		],
		"japanese": [
			"吹雪が収まった白い盆地。",
			"小さな足跡が、同じ場所をぐるぐる回る。",
			"立ち去ることができたのに、できなかった者の足跡。",
			"その立ち止まった足取りが、今ようやく語ろうとしている。"
		],
		"chinese": [
			"暴风雪平息的白色盆地。",
			"小小的脚印，只在原地打转。",
			"本可离去，却未能离开者的痕迹。",
			"那停滞不前的脚步，如今才要诉说。"
		],
		"french": [
			"Le bassin blanc où le blizzard s'est calmé.",
			"De petites empreintes tournent en rond au même endroit.",
			"Les traces de celui qui aurait pu partir, mais ne l'a pas fait.",
			"Ces pas arrêtés, enfin sur le point de parler."
		],
		"spanish": [
			"La cuenca blanca donde la ventisca ha amainado.",
			"Pequeñas huellas giran en el mismo sitio.",
			"Las huellas de quien pudo irse, pero no lo hizo.",
			"Esos pasos detenidos, ahora por fin van a hablar."
		],
		"vietnamese": [
			"Thung lũng trắng nơi bão tuyết đã tan.",
			"Những dấu chân nhỏ chỉ quẩn quanh một chỗ.",
			"Dấu vết của người có thể rời đi, nhưng đã không thể.",
			"Những bước chân dừng lại đó, giờ đây mới muốn nói."
		],
		"thai": [
			"แอ่งสีขาวที่พายุหิมะสงบลงแล้ว",
			"รอยเท้าเล็ก ๆ วนเวียนอยู่แต่ที่เดิม",
			"ร่องรอยของผู้ที่สามารถจากไปได้ แต่ไม่อาจไป",
			"ก้าวที่หยุดนิ่งนั้น บัดนี้กำลังจะเอ่ยคำ"
		],
		"hindi": [
			"बर्फीला तूफ़ान थमने के बाद सफेद घाटी।",
			"छोटे-छोटे पदचिह्न एक ही जगह घूम रहे हैं।",
			"जो जा सकता था, पर जा न सका, उसकी निशानी।",
			"वो रुके हुए कदम, अब आखिरकार बोलना चाहते हैं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "새하얀 분지. 눈밭 위에 작은 발자국이 이어졌다.",
						"english": "A pristine white basin. Small footsteps continued on the snow.",
						"japanese": "真っ白い盆地。雪原の上に小さな足跡が続いていた。",
						"chinese": "洁白的盆地。雪地上留下了小小的脚印。",
						"french": "Un bassin d'un blanc pur. De petites empreintes continuaient sur la neige.",
						"spanish": "Una cuenca de un blanco inmaculado. Pequeñas huellas continuaban sobre la nieve.",
						"vietnamese": "Một thung lũng trắng tinh. Những dấu chân nhỏ tiếp nối trên tuyết.",
						"thai": "แอ่งสีขาวบริสุทธิ์ รอยเท้าเล็ก ๆ ทอดยาวบนลานหิมะ",
						"hindi": "एक प्राचीन सफेद घाटी। बर्फ पर छोटे-छोटे पदचिह्न जारी थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 발자국… 계속 이어지네.",
						"english": "These footsteps... they just keep going.",
						"japanese": "この足跡…ずっと続いている。",
						"chinese": "这些脚印……一直延伸着。",
						"french": "Ces empreintes... elles continuent sans fin.",
						"spanish": "Estas huellas... simplemente siguen.",
						"vietnamese": "Dấu chân này... cứ tiếp tục.",
						"thai": "รอยเท้าพวกนี้... ยังคงทอดยาวไปเรื่อยๆ",
						"hindi": "ये पदचिह्न... बस चलते ही जा रहे हैं।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "…돌아왔군.",
						"english": "...You're back.",
						"japanese": "…戻ってきたのか。",
						"chinese": "……回来了啊。",
						"french": "...Tu es de retour.",
						"spanish": "...Has vuelto.",
						"vietnamese": "...Đã quay lại.",
						"thai": "...กลับมาแล้วสินะ",
						"hindi": "...तुम वापस आ गए।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아왔다고?",
						"english": "Back?",
						"japanese": "戻ってきたって？",
						"chinese": "回来了？",
						"french": "De retour ?",
						"spanish": "¿Vuelto?",
						"vietnamese": "Quay lại ư?",
						"thai": "กลับมาแล้วเหรอ?",
						"hindi": "वापस आ गए?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "이 발자국, 계속 같은 곳으로 돌아와.",
						"english": "These footsteps, they always lead back to the same place.",
						"japanese": "この足跡、いつも同じ場所に戻ってくる。",
						"chinese": "这些脚印，总会回到同一个地方。",
						"french": "Ces empreintes, elles reviennent toujours au même endroit.",
						"spanish": "Estas huellas siempre regresan al mismo lugar.",
						"vietnamese": "Dấu chân này, cứ quay về cùng một chỗ.",
						"thai": "รอยเท้าพวกนี้ วนกลับมาที่เดิมตลอดเลย",
						"hindi": "ये पदचिह्न हमेशा एक ही जगह वापस आते हैं।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "저기 끝까지 가도… 늘 똑같아.",
						"english": "Even if I go all the way to the end... it's always the same.",
						"japanese": "あそこまで行っても…いつも同じだ。",
						"chinese": "即使走到尽头……也总是一样。",
						"french": "Même si j'y vais jusqu'au bout... c'est toujours pareil.",
						"spanish": "Incluso si voy hasta el final... siempre es lo mismo.",
						"vietnamese": "Dù có đi đến tận cùng... cũng luôn giống nhau.",
						"thai": "แม้จะไปจนสุดทาง... ก็ยังคงเหมือนเดิมเสมอ",
						"hindi": "चाहे मैं अंत तक भी जाऊं... हमेशा एक जैसा ही होता है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "발자국이 거기서 멈추네.",
						"english": "The footsteps stop there.",
						"japanese": "足跡はそこで止まっている。",
						"chinese": "脚步声在那里停住了。",
						"french": "Les pas s'arrêtent là.",
						"spanish": "Las huellas se detienen ahí.",
						"vietnamese": "Dấu chân dừng lại ở đó.",
						"thai": "รอยเท้าหยุดอยู่ตรงนั้น",
						"hindi": "पैरों के निशान वहीं रुक जाते हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "그리고 다시 돌아와. 수없이 많이.",
						"english": "Then they come back. Countless times.",
						"japanese": "そしてまた戻ってくる。数えきれないほどに。",
						"chinese": "然后又回来了。无数次。",
						"french": "Puis ils reviennent. Innombrables fois.",
						"spanish": "Y luego regresan. Innumerables veces.",
						"vietnamese": "Rồi chúng quay lại. Vô số lần.",
						"thai": "แล้วก็วนกลับมาอีกครั้ง ครั้งแล้วครั้งเล่า",
						"hindi": "और फिर वापस आ जाते हैं। अनगिनत बार।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "떠날 수 있었는데… 떠나지 못한 거야.",
						"english": "They could have left... but couldn't.",
						"japanese": "立ち去ることができたはずなのに…できなかったんだ。",
						"chinese": "本可以离开的……却没能离开。",
						"french": "Ils auraient pu partir... mais n'ont pas pu.",
						"spanish": "Podrían haberse ido... pero no lo hicieron.",
						"vietnamese": "Đã có thể rời đi... nhưng lại không thể.",
						"thai": "น่าจะไปได้แล้วแท้ๆ... แต่ก็ไปไม่ได้",
						"hindi": "वे जा सकते थे... लेकिन जा नहीं पाए।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "집으로 돌아가지 못한 채.",
						"english": "Without being able to return home.",
						"japanese": "家に帰ることもできずに。",
						"chinese": "无法回到家中。",
						"french": "Sans pouvoir rentrer chez eux.",
						"spanish": "Sin poder regresar a casa.",
						"vietnamese": "Không thể trở về nhà.",
						"thai": "โดยที่ไม่สามารถกลับบ้านได้",
						"hindi": "घर वापस न जा पाने के कारण।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "어딘가로 돌아가야 하는 발걸음이잖아.",
						"english": "These are footsteps meant to return somewhere.",
						"japanese": "どこかへ帰るべき足取りだ。",
						"chinese": "这是要回到某个地方的脚步声啊。",
						"french": "Ce sont des pas qui doivent revenir quelque part.",
						"spanish": "Son pasos que deben regresar a algún lugar.",
						"vietnamese": "Đây là những bước chân phải trở về một nơi nào đó.",
						"thai": "เป็นก้าวเท้าที่ต้องกลับไปที่ไหนสักแห่ง",
						"hindi": "ये तो ऐसे कदम हैं जिन्हें कहीं वापस जाना है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭘 그렇게 망설인 거지?",
						"english": "What were they hesitating for?",
						"japanese": "何をそんなに躊躇したんだろう？",
						"chinese": "他们到底在犹豫什么？",
						"french": "Qu'est-ce qui les faisait hésiter autant ?",
						"spanish": "¿Por qué dudaron tanto?",
						"vietnamese": "Họ đã ngần ngại điều gì đến vậy?",
						"thai": "พวกเขาลังเลอะไรขนาดนั้น?",
						"hindi": "वे इतनी हिचकिचाहट क्यों कर रहे थे?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "아마… 갈 곳이 없었던 건 아닐 거야.",
						"english": "Perhaps... it wasn't that they had nowhere to go.",
						"japanese": "きっと…行く場所がなかったわけじゃないだろう。",
						"chinese": "也许…并不是没有地方可去。",
						"french": "Peut-être... qu'ils n'avaient pas nulle part où aller.",
						"spanish": "Quizás... no era que no tuvieran adónde ir.",
						"vietnamese": "Có lẽ... không phải là họ không có nơi nào để đi.",
						"thai": "บางที... อาจจะไม่ใช่ว่าไม่มีที่ไป",
						"hindi": "शायद... ऐसा नहीं था कि उनके पास जाने के लिए कोई जगह नहीं थी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "그냥, 돌아갈 용기가 없었거나.",
						"english": "They just lacked the courage to return.",
						"japanese": "ただ、帰る勇気がなかっただけか。",
						"chinese": "只是没有勇气回去而已。",
						"french": "Juste qu'ils n'avaient pas le courage de revenir.",
						"spanish": "Simplemente, no tuvieron el valor de regresar.",
						"vietnamese": "Chỉ là, không có dũng khí để trở về.",
						"thai": "แค่ไม่มีความกล้าที่จะกลับไป",
						"hindi": "बस, वापस जाने की हिम्मत नहीं थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 발자국이 많아져.",
						"english": "The footprints are getting more numerous.",
						"japanese": "ますます足跡が増えていく。",
						"chinese": "脚印变得越来越多。",
						"french": "Les pas se font de plus en plus nombreux.",
						"spanish": "Las huellas son cada vez más numerosas.",
						"vietnamese": "Dấu chân ngày càng nhiều hơn.",
						"thai": "รอยเท้าเยอะขึ้นเรื่อยๆ",
						"hindi": "पैरों के निशान बढ़ते जा रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "벗어나지 못하고, 맴돌고 또 맴돌고…",
						"english": "Unable to escape, circling and circling...",
						"japanese": "抜け出せずに、堂々巡り、また堂々巡り…",
						"chinese": "无法摆脱，只是徘徊，不断徘徊…",
						"french": "Incappables de s'échapper, ils tournent en rond, encore et encore...",
						"spanish": "Sin poder escapar, dando vueltas y más vueltas...",
						"vietnamese": "Không thoát ra được, cứ quanh quẩn, quanh quẩn mãi...",
						"thai": "ออกไปไม่ได้ วนเวียนอยู่ร่ำไป...",
						"hindi": "निकल नहीं पा रहे, बस चक्कर लगाए जा रहे हैं..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "끝없이 반복되는 상실의 기록이야.",
						"english": "It's a record of endlessly repeating losses.",
						"japanese": "それは終わりなく繰り返される喪失の記録だ。",
						"chinese": "这是无尽重复的失落记录。",
						"french": "C'est un registre de pertes sans fin qui se répètent.",
						"spanish": "Es un registro de pérdidas que se repiten sin cesar.",
						"vietnamese": "Đó là một ghi chép về những mất mát lặp đi lặp lại không ngừng.",
						"thai": "มันคือบันทึกของการสูญเสียที่ซ้ำไปซ้ำมาไม่รู้จบ",
						"hindi": "यह अंतहीन दोहराई जाने वाली हानियों का रिकॉर्ड है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "대체 뭘 기다렸던 걸까.",
						"english": "What exactly was I waiting for?",
						"japanese": "一体何を待っていたのだろうか。",
						"chinese": "到底在等什么呢？",
						"french": "Qu'est-ce que j'attendais, au juste ?",
						"spanish": "¿Qué estaba esperando, después de todo?",
						"vietnamese": "Rốt cuộc thì mình đã đợi điều gì?",
						"thai": "ตกลงแล้วฉันรออะไรอยู่กันแน่?",
						"hindi": "आखिर मैं किस बात का इंतज़ार कर रहा था?"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…결국, 같은 곳으로 돌아오겠지.",
						"english": "...Ultimately, we'll return to the same place.",
						"japanese": "…結局、同じ場所に戻ってくるのだろう。",
						"chinese": "……最终，还是会回到同一个地方吧。",
						"french": "...Finalement, nous reviendrons au même endroit.",
						"spanish": "...Al final, regresaremos al mismo lugar.",
						"vietnamese": "Cuối cùng thì cũng sẽ trở về cùng một nơi thôi.",
						"thai": "ท้ายที่สุด เราก็จะกลับมาที่เดิม",
						"hindi": "...आखिरकार, हम उसी जगह लौट आएंगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고?",
						"english": "What was that?",
						"japanese": "何だって？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué dijiste?",
						"vietnamese": "Gì cơ?",
						"thai": "ว่าไงนะ?",
						"hindi": "क्या कहा?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 사라졌지만, 발자국은 여전히 그 자리에서 맴돌고 있었다.",
						"english": "The unknown enemy vanished, but its footprints still lingered in the same spot.",
						"japanese": "正体不明の敵は消え去ったが、足跡は依然としてその場をさまよっていた。",
						"chinese": "未知的敌人消失了，但它的足迹仍在原地徘徊。",
						"french": "L'ennemi inconnu avait disparu, mais ses empreintes persistaient au même endroit.",
						"spanish": "El enemigo desconocido desapareció, pero sus huellas aún rondaban el mismo lugar.",
						"vietnamese": "Kẻ thù không rõ danh tính đã biến mất, nhưng dấu chân của nó vẫn còn quanh quẩn ở đó.",
						"thai": "ศัตรูนิรนามได้หายไปแล้ว แต่รอยเท้ายังคงวนเวียนอยู่ตรงนั้น",
						"hindi": "अज्ञात शत्रु गायब हो गया, लेकिन उसके पदचिह्न अभी भी उसी स्थान पर मंडरा रहे थे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…끝이 아니었어.",
						"english": "...It wasn't over.",
						"japanese": "…終わりではなかった。",
						"chinese": "……还没结束。",
						"french": "...Ce n'était pas la fin.",
						"spanish": "...No era el final.",
						"vietnamese": "Chưa kết thúc.",
						"thai": "ยังไม่จบ",
						"hindi": "यह खत्म नहीं हुआ था।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 앞을 막아섰다.",
						"english": "A giant shadow blocked the way.",
						"japanese": "巨大な影が目の前を遮った。",
						"chinese": "巨大的黑影挡住了去路。",
						"french": "Une ombre gigantesque bloquait le chemin.",
						"spanish": "Una sombra gigantesca bloqueó el paso.",
						"vietnamese": "Một bóng đen khổng lồ chặn lối đi phía trước.",
						"thai": "เงามืดขนาดใหญ่ขวางทางอยู่เบื้องหน้า",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…더 이상은 안 돼. 돌아가.",
						"english": "...No more. Go back.",
						"japanese": "…もうだめだ。戻れ。",
						"chinese": "……不能再继续了。回去吧。",
						"french": "...Pas plus loin. Retourne.",
						"spanish": "...No más. Vuelve.",
						"vietnamese": "Không thể nữa rồi. Quay lại đi.",
						"thai": "ไม่มากไปกว่านี้แล้ว กลับไปซะ",
						"hindi": "...अब और नहीं। वापस जाओ।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 돌아가지 않아.",
						"english": "We're not going back.",
						"japanese": "私たちは戻らない。",
						"chinese": "我们不会回去。",
						"french": "Nous ne ferons pas demi-tour.",
						"spanish": "No regresaremos.",
						"vietnamese": "Chúng ta sẽ không quay lại.",
						"thai": "เราจะไม่กลับไป",
						"hindi": "हम वापस नहीं जाएंगे।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 빛이… 집으로 돌아갈 수 있게. 길을 열어줘.",
						"english": "This light... open a path so I can return home.",
						"japanese": "この光よ…家へ帰れるように、道を開いてくれ。",
						"chinese": "这束光……请为我打开回家的路。",
						"french": "Cette lumière… Ouvre un chemin pour que je puisse rentrer chez moi.",
						"spanish": "Esta luz… abre un camino para que pueda volver a casa.",
						"vietnamese": "Ánh sáng này… hãy mở lối để con có thể về nhà.",
						"thai": "แสงนี้… โปรดเปิดทางให้ฉันกลับบ้าน",
						"hindi": "यह प्रकाश… मुझे घर लौटने का रास्ता दिखाओ।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "bran",
					"action": "exit",
					"duration_ms": 400,
					"direction": "down"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘에, 모든 발걸음이 멈췄다.",
						"english": "Crushed by overwhelming power, every step ceased.",
						"japanese": "圧倒的な力に、全ての歩みが止まった。",
						"chinese": "在压倒性的力量面前，所有脚步都停滞了。",
						"french": "Face à une puissance écrasante, chaque pas s'est arrêté.",
						"spanish": "Ante una fuerza abrumadora, cada paso se detuvo.",
						"vietnamese": "Trước sức mạnh áp đảo, mọi bước chân đều dừng lại.",
						"thai": "ด้วยพลังที่ท่วมท้น ทุกย่างก้าวหยุดลง",
						"hindi": "अदम्य शक्ति से, हर कदम थम गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…결국 너희도, 돌아가지 못할 거야.",
						"english": "...In the end, you won't be able to return either.",
						"japanese": "…結局、お前たちも帰れないだろう。",
						"chinese": "……最终，你们也回不去了。",
						"french": "...Au final, vous ne pourrez pas non plus revenir.",
						"spanish": "...Al final, vosotros tampoco podréis regresar.",
						"vietnamese": "...Cuối cùng, các ngươi cũng sẽ không thể quay về.",
						"thai": "...สุดท้ายแล้ว พวกเจ้าก็กลับไปไม่ได้หรอก",
						"hindi": "...आखिरकार, तुम लोग भी वापस नहीं जा पाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还……没有结束。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Vẫn... chưa kết thúc đâu.",
						"thai": "ยัง...ไม่จบหรอก",
						"hindi": "अभी...खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
