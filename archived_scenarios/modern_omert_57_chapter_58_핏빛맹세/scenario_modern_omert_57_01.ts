export const scenario_modern_omert_57_01 = {
	"scenario_id": "modern_omert_57_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
						"korean": "도시의 잔해가 끝없이 이어졌다. 모든 것이 멈춘 듯 고요했다.",
						"english": "The city's wreckage stretched endlessly. Everything was silent, as if frozen in time.",
						"japanese": "都市の残骸が果てしなく続いていた。すべてが止まったように静まり返っていた。",
						"chinese": "城市的残骸绵延不绝。一切都静止了，仿佛时间凝固。",
						"french": "Les débris de la ville s'étendaient à l'infini. Tout était silencieux, comme figé.",
						"spanish": "Los restos de la ciudad se extendían sin fin. Todo estaba en silencio, como detenido.",
						"vietnamese": "Đống đổ nát của thành phố trải dài vô tận. Mọi thứ tĩnh lặng như thể đã ngừng lại.",
						"thai": "ซากปรักหักพังของเมืองทอดยาวไม่สิ้นสุด ทุกสิ่งเงียบงันราวกับหยุดนิ่ง",
						"hindi": "शहर का मलबा अनंत तक फैला हुआ था। सब कुछ शांत था, मानो समय थम गया हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "젠장… 또 여기야?",
						"english": "Damn it... here again?",
						"japanese": "ちくしょう…またここか？",
						"chinese": "该死……又来了？",
						"french": "Merde… encore ici ?",
						"spanish": "Maldita sea... ¿otra vez aquí?",
						"vietnamese": "Chết tiệt… lại ở đây à?",
						"thai": "ให้ตายสิ... ที่นี่อีกแล้วเหรอ?",
						"hindi": "धिक्कार है... फिर यहीं?"
					}
				},
				{
					"content": {
						"korean": "이 익숙한 느낌… 꿈인가?",
						"english": "This familiar feeling... a dream?",
						"japanese": "この見覚えのある感覚…夢なのか？",
						"chinese": "这种熟悉的感觉……是梦吗？",
						"french": "Ce sentiment familier... un rêve ?",
						"spanish": "Esta sensación familiar... ¿un sueño?",
						"vietnamese": "Cảm giác quen thuộc này… là mơ ư?",
						"thai": "ความรู้สึกคุ้นเคยนี้... ฝันไปหรือเปล่า?",
						"hindi": "यह परिचित एहसास... एक सपना है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "왔군. 예상했어.",
						"english": "You've come. I expected you.",
						"japanese": "来たか。予感していたよ。",
						"chinese": "你来了。我预料到了。",
						"french": "Tu es venu. Je m'y attendais.",
						"spanish": "Has venido. Lo esperaba.",
						"vietnamese": "Ngươi đã đến. Ta đã dự đoán.",
						"thai": "มาแล้วสินะ ฉันคาดไว้แล้ว",
						"hindi": "तुम आ गए। मुझे उम्मीद थी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누구…세요?",
						"english": "Who... are you?",
						"japanese": "どなた…ですか？",
						"chinese": "你是……谁？",
						"french": "Qui… êtes-vous ?",
						"spanish": "¿Quién... eres?",
						"vietnamese": "Ngài… là ai?",
						"thai": "ใคร... ครับ/คะ?",
						"hindi": "आप... कौन हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "벡스. 이 도시에서, 수없이 반복된 시간을 살아온 자.",
						"english": "Vex. One who has lived through countless repeated times in this city.",
						"japanese": "ベックス。この都市で、数え切れないほど繰り返された時間を生きてきた者だ。",
						"chinese": "维克斯。在这个城市里，经历了无数次重复时间的人。",
						"french": "Vex. Celui qui a vécu d'innombrables répétitions du temps dans cette ville.",
						"spanish": "Vex. Aquel que ha vivido innumerables veces el tiempo repetido en esta ciudad.",
						"vietnamese": "Vex. Kẻ đã sống qua vô số lần lặp lại thời gian trong thành phố này.",
						"thai": "เว็กซ์ ผู้ที่ได้ใช้ชีวิตผ่านกาลเวลาที่ซ้ำซากในเมืองนี้มานับครั้งไม่ถ้วน",
						"hindi": "वेक्स। इस शहर में, अनगिनत बार दोहराए गए समय में जीने वाला व्यक्ति।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "너도 느끼지? 이 기시감. 이 도시는 저주받았어.",
						"english": "You feel it too, don't you? This déjà vu. This city is cursed.",
						"japanese": "お前も感じるか？この既視感。この街は呪われている。",
						"chinese": "你也感觉到了吧？这种既视感。这座城市被诅咒了。",
						"french": "Tu le sens aussi, n'est-ce pas ? Ce déjà-vu. Cette ville est maudite.",
						"spanish": "¿Tú también lo sientes? Este déjà vu. Esta ciudad está maldita.",
						"vietnamese": "Ngươi cũng cảm thấy phải không? Cảm giác thân quen này. Thành phố này bị nguyền rủa rồi.",
						"thai": "เจ้ารู้สึกเหมือนกันใช่ไหม? ความรู้สึก既視感นี้ เมืองนี้ถูกสาปแช่งแล้ว",
						"hindi": "तुम्हें भी महसूस होता है, है ना? यह déjà vu। यह शहर शापित है。"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 도시는 계속 스스로를 파괴하고 다시 만들어. 지겨운 순환이야.",
						"english": "This city keeps destroying and rebuilding itself. A tiresome cycle.",
						"japanese": "この街は、自らを破壊し、また作り直す。うんざりする循環だ。",
						"chinese": "这座城市不断自我毁灭又重建。真是令人厌倦的循环。",
						"french": "Cette ville ne cesse de se détruire et de se reconstruire. Un cycle fastidieux.",
						"spanish": "Esta ciudad no deja de destruirse y reconstruirse. Un ciclo tedioso.",
						"vietnamese": "Thành phố này cứ liên tục tự hủy diệt rồi tái tạo. Một vòng lặp mệt mỏi.",
						"thai": "เมืองนี้ยังคงทำลายตัวเองแล้วสร้างใหม่ วงจรที่น่าเบื่อหน่าย",
						"hindi": "यह शहर खुद को नष्ट करता रहता है और फिर से बनाता है। एक थका देने वाला चक्र।"
					},
					"speaker": "bex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "반복…이라뇨?",
						"english": "Repetition...?",
						"japanese": "繰り返し…ですか？",
						"chinese": "重复……吗？",
						"french": "Répétition... ?",
						"spanish": "¿Repetición...?",
						"vietnamese": "Lặp lại... sao?",
						"thai": "การทำซ้ำ...เหรอครับ?",
						"hindi": "पुनरावृत्ति...?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "봐봐. 저기 쓰러진 빌딩 잔해. 저거 어제도 저랬어. 아니, 계속 저랬어.",
						"english": "Look. The ruins of that fallen building over there. It was like that yesterday too. No, it's always been like that.",
						"japanese": "見てみろ。あの倒れたビルの残骸。あれは昨日もああだった。いや、ずっとああだ。",
						"chinese": "看。那边倒塌的建筑残骸。昨天也是那样。不，它一直都是那样。",
						"french": "Regarde. Les ruines de ce bâtiment tombé là-bas. C'était comme ça hier aussi. Non, ça a toujours été comme ça.",
						"spanish": "Mira. Los restos de ese edificio caído. Ayer también estaba así. No, siempre ha estado así.",
						"vietnamese": "Nhìn kìa. Tàn tích của tòa nhà đổ nát đằng kia. Hôm qua nó cũng như vậy. Không, nó luôn như vậy.",
						"thai": "ดูสิ ซากปรักหักพังของอาคารที่พังทลายนั่น เมื่อวานก็เป็นแบบนั้น ไม่สิ มันเป็นแบบนั้นมาตลอด",
						"hindi": "देखो। उस गिरे हुए भवन का मलबा। कल भी वह वैसा ही था। नहीं, वह हमेशा से वैसा ही रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "말도 안 돼…",
						"english": "Impossible...",
						"japanese": "ありえない…",
						"chinese": "不可能……",
						"french": "Impossible...",
						"spanish": "Imposible...",
						"vietnamese": "Không thể nào...",
						"thai": "เป็นไปไม่ได้...",
						"hindi": "असंभव..."
					}
				},
				{
					"content": {
						"korean": "그래. 모든 게… 제자리로 돌아와. 고통까지도.",
						"english": "Yes. Everything... returns to its place. Even the pain.",
						"japanese": "そうだ。すべてが…元に戻る。苦痛までもが。",
						"chinese": "是啊。一切……都会回到原位。甚至痛苦也是。",
						"french": "Oui. Tout... revient à sa place. Même la douleur.",
						"spanish": "Sí. Todo... vuelve a su lugar. Incluso el dolor.",
						"vietnamese": "Đúng vậy. Mọi thứ... đều trở về vị trí cũ. Kể cả nỗi đau.",
						"thai": "ใช่ ทุกสิ่ง...กลับมาที่เดิม แม้กระทั่งความเจ็บปวด",
						"hindi": "हाँ। सब कुछ... अपनी जगह पर लौट आता है। दर्द भी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "그럼 우린…",
						"english": "Then we...",
						"japanese": "じゃあ私たちは…",
						"chinese": "那我们……",
						"french": "Alors nous...",
						"spanish": "¿Entonces nosotros...?",
						"vietnamese": "Vậy chúng ta...",
						"thai": "แล้วพวกเรา...",
						"hindi": "तो हम..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "이 도시의 벽엔 오래된 그림들이 있어. 봐.",
						"english": "There are old paintings on this city's walls. Look.",
						"japanese": "この街の壁には古い絵がある。見てみろ。",
						"chinese": "这座城市的墙壁上有些古老的画作。看。",
						"french": "Il y a de vieilles peintures sur les murs de cette ville. Regarde.",
						"spanish": "Hay pinturas antiguas en las paredes de esta ciudad. Mira.",
						"vietnamese": "Trên những bức tường của thành phố này có những bức tranh cổ xưa. Nhìn xem.",
						"thai": "มีภาพวาดเก่าแก่บนผนังเมืองนี้ ดูสิ",
						"hindi": "इस शहर की दीवारों पर पुरानी पेंटिंग हैं। देखो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "죽음과 절망. 매번 같은 모습으로.",
						"english": "Death and despair. Always in the same form.",
						"japanese": "死と絶望。毎回同じ姿で。",
						"chinese": "死亡与绝望。每次都以相同的姿态。",
						"french": "Mort et désespoir. Toujours sous la même forme.",
						"spanish": "Muerte y desesperación. Siempre de la misma forma.",
						"vietnamese": "Cái chết và sự tuyệt vọng. Luôn luôn dưới cùng một hình dạng.",
						"thai": "ความตายและความสิ้นหวัง ในรูปลักษณ์เดิมทุกครั้ง",
						"hindi": "मृत्यु और निराशा। हर बार एक ही रूप में।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "이건… 희생자들의 모습인가요?",
						"english": "Are these... the victims?",
						"japanese": "これは…犠牲者の姿ですか？",
						"chinese": "这是……受害者们吗？",
						"french": "Ce sont... les victimes ?",
						"spanish": "¿Son estos... las víctimas?",
						"vietnamese": "Đây là... hình ảnh của các nạn nhân sao?",
						"thai": "นี่คือ...ภาพของเหยื่อหรือครับ?",
						"hindi": "क्या ये... पीड़ितों के चित्र हैं?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그래. 끝없는 비극. 그 모든 순간이 박제되어 반복되지.",
						"english": "Yes. Endless tragedy. Every moment preserved, repeated.",
						"japanese": "ええ。終わりのない悲劇。全ての瞬間が標本のように繰り返される。",
						"chinese": "是啊。无尽的悲剧。每一个瞬间都被定格，不断重复。",
						"french": "Oui. Tragédie sans fin. Chaque instant est figé, répété.",
						"spanish": "Sí. Tragedia sin fin. Cada momento disecado, repetido.",
						"vietnamese": "Đúng vậy. Bi kịch không hồi kết. Mọi khoảnh khắc đều bị đóng băng và lặp lại.",
						"thai": "ใช่ โศกนาฏกรรมไม่รู้จบ ทุกช่วงเวลาถูกสตัฟฟ์ไว้แล้ววนซ้ำ",
						"hindi": "हाँ। अंतहीन त्रासदी। हर पल को संरक्षित करके दोहराया जाता है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 그림들이 바로 이 도시의 비명이야.",
						"english": "These paintings are this city's screams.",
						"japanese": "この絵画こそが、この街の悲鳴だ。",
						"chinese": "这些画作，就是这座城市的尖叫。",
						"french": "Ces tableaux sont les cris de cette ville.",
						"spanish": "Estos cuadros son los gritos de esta ciudad.",
						"vietnamese": "Những bức tranh này chính là tiếng thét của thành phố này.",
						"thai": "ภาพวาดเหล่านี้คือเสียงกรีดร้องของเมืองนี้",
						"hindi": "ये चित्र ही इस शहर की चीखें हैं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이제 알겠지? 벗어날 수 없어.",
						"english": "Now you understand, right? There's no escape.",
						"japanese": "もうわかっただろ？逃れられない。",
						"chinese": "现在你明白了吧？无法摆脱。",
						"french": "Maintenant tu comprends ? On ne peut pas s'échapper.",
						"spanish": "¿Ahora lo entiendes? No hay escapatoria.",
						"vietnamese": "Bây giờ ngươi hiểu rồi chứ? Không thể thoát được đâu.",
						"thai": "ตอนนี้คงเข้าใจแล้วสินะ? หนีไม่พ้นหรอก",
						"hindi": "अब तुम समझते हो, है ना? कोई बच नहीं सकता।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 뭔가를 해야 해.",
						"english": "No… I have to do something.",
						"japanese": "いや… 何かをしなければ。",
						"chinese": "不… 我必须做些什么。",
						"french": "Non… Je dois faire quelque chose.",
						"spanish": "No… tengo que hacer algo.",
						"vietnamese": "Không… mình phải làm gì đó.",
						"thai": "ไม่… ต้องทำอะไรสักอย่าง",
						"hindi": "नहीं… मुझे कुछ करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "bex",
					"content": {
						"korean": "그림자. 모든 것을 관장하는 '그림자'가 있어.",
						"english": "The Shadow. There's a 'Shadow' that controls everything.",
						"japanese": "影。全てを司る『影』がいる。",
						"chinese": "影子。有一个掌控一切的‘影子’。",
						"french": "L'Ombre. Il y a une 'Ombre' qui contrôle tout.",
						"spanish": "La Sombra. Hay una 'Sombra' que lo controla todo.",
						"vietnamese": "Bóng tối. Có một 'Bóng tối' điều khiển mọi thứ.",
						"thai": "เงา มี 'เงา' ที่ควบคุมทุกสิ่ง",
						"hindi": "छाया। एक 'छाया' है जो सब कुछ नियंत्रित करती है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그놈이 이 모든 것을 조종해. 우리의 희망까지도.",
						"english": "It controls all of this. Even our hope.",
						"japanese": "そいつが全てを操っている。我々の希望までも。",
						"chinese": "它操纵着这一切。甚至包括我们的希望。",
						"french": "Il contrôle tout ça. Même notre espoir.",
						"spanish": "Esa cosa controla todo esto. Incluso nuestra esperanza.",
						"vietnamese": "Nó thao túng tất cả. Ngay cả hy vọng của chúng ta.",
						"thai": "มันควบคุมทุกอย่าง แม้แต่ความหวังของเรา",
						"hindi": "वह यह सब नियंत्रित करता है। हमारी आशा तक।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그림자…",
						"english": "The Shadow…",
						"japanese": "影…",
						"chinese": "影子…",
						"french": "L'Ombre…",
						"spanish": "La Sombra…",
						"vietnamese": "Bóng tối…",
						"thai": "เงา…",
						"hindi": "छाया…"
					},
					"emotion": "sad"
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
						"korean": "거대한 그림자가 도시의 모든 빛을 삼켰다.",
						"english": "A colossal shadow swallowed all light in the city.",
						"japanese": "巨大な影が、街の全ての光を飲み込んだ。",
						"chinese": "巨大的影子吞噬了城市所有的光芒。",
						"french": "Une ombre colossale a englouti toute la lumière de la ville.",
						"spanish": "Una sombra colosal se tragó toda la luz de la ciudad.",
						"vietnamese": "Một bóng tối khổng lồ đã nuốt chửng mọi ánh sáng của thành phố.",
						"thai": "เงาขนาดยักษ์กลืนกินแสงสว่างทั้งหมดของเมือง",
						"hindi": "एक विशाल छाया ने शहर की सारी रोशनी निगल ली।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…왔군. 순환의 새로운 변수.",
						"english": "…You've come. A new variable in the cycle.",
						"japanese": "…来たか。循環の新たな変数。",
						"chinese": "…来了。循环的新变数。",
						"french": "…Tu es venu. Une nouvelle variable dans le cycle.",
						"spanish": "…Has llegado. Una nueva variable en el ciclo.",
						"vietnamese": "…Ngươi đến rồi. Một biến số mới trong vòng luân hồi.",
						"thai": "…มาแล้วสินะ ตัวแปรใหม่ของวัฏจักร",
						"hindi": "…तुम आ गए। चक्र में एक नया चर।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 걸 벌인 건가!",
						"english": "You… You caused all of this!",
						"japanese": "お前が… この全てを仕組んだのか！",
						"chinese": "是你… 造成了这一切吗！",
						"french": "C'est toi… qui as causé tout ça !",
						"spanish": "¿Fuiste tú… quien causó todo esto?",
						"vietnamese": "Ngươi… Ngươi đã gây ra tất cả những chuyện này sao!",
						"thai": "แก… เป็นคนก่อเรื่องทั้งหมดนี่เหรอ!",
						"hindi": "क्या तुमने… यह सब किया है!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저, 질서를 유지할 뿐.",
						"english": "I merely maintain order.",
						"japanese": "私はただ、秩序を維持するだけだ。",
						"chinese": "我只是在维持秩序。",
						"french": "Je ne fais que maintenir l'ordre.",
						"spanish": "Simplemente mantengo el orden.",
						"vietnamese": "Ta chỉ duy trì trật tự thôi.",
						"thai": "ข้าเพียงแค่รักษาระเบียบไว้เท่านั้น",
						"hindi": "मैं बस व्यवस्था बनाए रखता हूँ।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이곳에 온 것도… 이미 정해진 운명.",
						"english": "Your presence here… is preordained fate.",
						"japanese": "お前がここに来たのも… すでに定められた運命。",
						"chinese": "你来到这里… 也是命中注定。",
						"french": "Ta venue ici… est déjà un destin scellé.",
						"spanish": "Que estés aquí… ya es un destino sellado.",
						"vietnamese": "Việc ngươi đến đây… cũng đã là định mệnh.",
						"thai": "การที่เจ้ามาที่นี่… ก็เป็นโชคชะตาที่ถูกกำหนดไว้แล้ว",
						"hindi": "तुम्हारा यहाँ आना भी… नियति का लिखा है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "그림자는 더욱 거대해졌다. 도시는 다시 어둠에 잠겼다.",
						"english": "The shadow grew even larger. The city was once again engulfed in darkness.",
						"japanese": "影はさらに巨大になった。都市は再び闇に包まれた。",
						"chinese": "阴影变得更加巨大。城市再次陷入黑暗。",
						"french": "L'ombre devint encore plus grande. La ville fut de nouveau plongée dans l'obscurité.",
						"spanish": "La sombra se hizo aún más grande. La ciudad fue devuelta a la oscuridad.",
						"vietnamese": "Bóng tối càng trở nên khổng lồ. Thành phố lại chìm trong bóng đêm.",
						"thai": "เงาขยายใหญ่ขึ้น เมืองจมดิ่งลงสู่ความมืดมิดอีกครั้ง",
						"hindi": "परछाई और भी विशाल हो गई। शहर फिर से अँधेरे में डूब गया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "약속은… 깨어질 수 없는 법.",
						"english": "A promise… cannot be broken.",
						"japanese": "約束は… 破れないものだ。",
						"chinese": "誓言… 是不可打破的。",
						"french": "Une promesse… ne peut être brisée.",
						"spanish": "Una promesa… no se puede romper.",
						"vietnamese": "Lời hứa… không thể phá vỡ.",
						"thai": "คำสัญญา… ไม่อาจถูกทำลาย",
						"hindi": "एक वादा… तोड़ा नहीं जा सकता।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…포기 못 해. 다시 돌아온다.",
						"english": "…I can't give up. I'll be back.",
						"japanese": "…諦めない。必ず戻ってくる。",
						"chinese": "…我不能放弃。我会再回来的。",
						"french": "…Je ne peux pas abandonner. Je reviendrai.",
						"spanish": "…No puedo rendirme. Volveré.",
						"vietnamese": "…Không thể bỏ cuộc. Ta sẽ trở lại.",
						"thai": "…ข้าไม่ยอมแพ้ ข้าจะกลับมา",
						"hindi": "…हार नहीं मानूँगा। मैं वापस आऊँगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하찮은 발버둥이군.",
						"english": "A pathetic struggle.",
						"japanese": "無駄な足掻きだな。",
						"chinese": "无谓的挣扎。",
						"french": "Une lutte pitoyable.",
						"spanish": "Una lucha patética.",
						"vietnamese": "Cuộc vùng vẫy vô ích.",
						"thai": "การดิ้นรนที่ไร้ค่า.",
						"hindi": "एक दयनीय संघर्ष।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "흐음… 잠깐 멈출 뿐이야. 끝은 없어.",
						"english": "Hmm… merely a temporary pause. There is no end.",
						"japanese": "ふむ… 一時的な停止に過ぎない。終わりはない。",
						"chinese": "嗯… 只是暂时停下。没有结束。",
						"french": "Hmm… juste une pause temporaire. Il n'y a pas de fin.",
						"spanish": "Hmm… solo es una pausa temporal. No hay fin.",
						"vietnamese": "Hừm… chỉ tạm dừng thôi. Không có kết thúc đâu.",
						"thai": "หืม… แค่หยุดชั่วคราวเท่านั้น ไม่มีวันสิ้นสุด",
						"hindi": "हम्म… बस एक क्षणिक ठहराव है। कोई अंत नहीं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "새로운 시작일 뿐. 언젠가 다시 만나게 될 거다.",
						"english": "Merely a new beginning. We shall meet again, someday.",
						"japanese": "新たな始まりに過ぎない。いつかまた会うことになるだろう。",
						"chinese": "仅仅是一个新的开始。总有一天，我们会再见面的。",
						"french": "Juste un nouveau départ. Nous nous reverrons un jour.",
						"spanish": "Es solo un nuevo comienzo. Nos volveremos a encontrar, algún día.",
						"vietnamese": "Chỉ là một khởi đầu mới thôi. Rồi sẽ có ngày chúng ta gặp lại.",
						"thai": "แค่เริ่มต้นใหม่เท่านั้น อีกไม่นานเราจะได้พบกันอีก",
						"hindi": "बस एक नई शुरुआत है। हम फिर मिलेंगे, किसी दिन।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…젠장!",
						"english": "…Damn it!",
						"japanese": "…ちくしょう！",
						"chinese": "…该死！",
						"french": "…Mince !",
						"spanish": "…¡Maldita sea!",
						"vietnamese": "…Khốn kiếp!",
						"thai": "…ให้ตายสิ!",
						"hindi": "…धिक्कार है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "쓰러진 그림자는 잠시 물러섰다. 그러나 도시의 불안한 순환은 계속될 것 같았다.",
						"english": "The fallen shadow retreated for a moment. Yet, the city's restless cycle seemed destined to continue.",
						"japanese": "倒れた影は一時的に退いた。しかし、都市の不穏な循環は続くようだった。",
						"chinese": "倒下的阴影暂时退去。然而，城市的动荡循环似乎仍将继续。",
						"french": "L'ombre déchue s'est retirée un instant. Pourtant, le cycle inquiet de la ville semblait devoir continuer.",
						"spanish": "La sombra caída retrocedió por un momento. Sin embargo, el ciclo inquietante de la ciudad parecía destinado a continuar.",
						"vietnamese": "Bóng tối ngã xuống tạm thời rút lui. Tuy nhiên, vòng tuần hoàn bất an của thành phố dường như vẫn sẽ tiếp diễn.",
						"thai": "เงาที่ล้มลงถอยไปชั่วขณะ อย่างไรก็ตาม วงจรที่ไม่มั่นคงของเมืองดูเหมือนจะยังคงดำเนินต่อไป",
						"hindi": "गिरी हुई परछाई क्षण भर के लिए पीछे हट गई। फिर भी, शहर का अशांत चक्र जारी रहने वाला था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "깨어진 맹세의 메아리가 도시 전체를 덮고 있었다.",
						"english": "The echoes of a shattered vow permeated the entire city.",
						"japanese": "破られた誓いの残響が、都市全体を覆っていた。",
						"chinese": "破碎誓言的回响笼罩了整个城市。",
						"french": "L'écho d'un serment brisé enveloppait toute la ville.",
						"spanish": "Los ecos de una promesa rota cubrían toda la ciudad.",
						"vietnamese": "Tiếng vọng của lời thề tan vỡ bao trùm cả thành phố.",
						"thai": "เสียงสะท้อนของคำสาบานที่แตกสลายปกคลุมไปทั่วทั้งเมือง",
						"hindi": "टूटी हुई प्रतिज्ञा की गूँज पूरे शहर में फैल गई थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"폐허가 된 도시. 모든 것이 익숙하면서 낯설다.",
			"시간은 뒤틀리고, 공간은 반복된다. 끝나지 않는 악몽.",
			"그림자가 드리운 이 곳에서, 한 생존자가 기다리고 있었다.",
			"멈출 수 없는 순환, 그 비밀을 파헤쳐야 한다."
		],
		"english": [
			"A ruined city. Everything feels familiar yet strange.",
			"Time twists, space repeats. An endless nightmare.",
			"In this place shrouded in shadows, a survivor waited.",
			"An unstoppable cycle; its secret must be uncovered."
		],
		"japanese": [
			"廃墟と化した都市。すべてが見慣れているようで、どこか異質だ。",
			"時間は歪み、空間は繰り返される。終わりのない悪夢。",
			"影が差すこの場所で、一人の生存者が待っていた。",
			"止められない循環、その秘密を解き明かせ。"
		],
		"chinese": [
			"废墟中的城市。一切既熟悉又陌生。",
			"时间扭曲，空间循环。无尽的噩梦。",
			"在这片被阴影笼罩的地方，一位幸存者正在等待。",
			"无法停止的循环，必须揭开它的秘密。"
		],
		"french": [
			"Une ville en ruines. Tout y est à la fois familier et étrange.",
			"Le temps se tord, l'espace se répète. Un cauchemar sans fin.",
			"Dans ce lieu plongé dans l'ombre, un survivant attendait.",
			"Un cycle imparable ; son secret doit être découvert."
		],
		"spanish": [
			"Una ciudad en ruinas. Todo resulta familiar y extraño a la vez.",
			"El tiempo se retuerce, el espacio se repite. Una pesadilla interminable.",
			"En este lugar envuelto en sombras, un superviviente esperaba.",
			"Un ciclo imparable; su secreto debe ser descubierto."
		],
		"vietnamese": [
			"Thành phố đổ nát. Mọi thứ vừa quen thuộc vừa xa lạ.",
			"Thời gian méo mó, không gian lặp lại. Một cơn ác mộng không hồi kết.",
			"Tại nơi bóng tối bao trùm này, một người sống sót đang chờ đợi.",
			"Một vòng lặp không thể dừng lại, bí mật của nó phải được khám phá."
		],
		"thai": [
			"เมืองที่พังทลาย ทุกสิ่งคุ้นเคยแต่แปลกใหม่",
			"เวลาบิดเบือน พื้นที่ซ้ำซาก ฝันร้ายไม่สิ้นสุด",
			"ในสถานที่ที่เงาปกคลุมนี้ มีผู้รอดชีวิตคนหนึ่งกำลังรออยู่",
			"วงจรที่ไม่หยุดยั้ง ต้องเปิดเผยความลับของมัน"
		],
		"hindi": [
			"एक खंडहर शहर। सब कुछ परिचित होते हुए भी अजीब है।",
			"समय मुड़ता है, स्थान दोहराता है। एक अंतहीन दुःस्वप्न।",
			"इस छायादार जगह में, एक उत्तरजीवी इंतजार कर रहा था।",
			"एक न रुकने वाला चक्र; इसका रहस्य उजागर करना होगा।"
		]
	}
} as const;
