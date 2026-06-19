export const scenario_modern_nemesis_5_04 = {
	"scenario_id": "modern_nemesis_5_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시의 불빛은 언제나 빛났다. 완벽한 네메시스의 그림자 아래에서.",
			"그러나 린의 눈에 비친 건, 오래되고 섬뜩한 심연이었다.",
			"그는 인간인가? 아니면—",
			"진실은 과연 어디까지 닿아있는가?"
		],
		"english": [
			"The city lights always shone. Under the shadow of perfect Nemesis.",
			"But what Lin saw was an ancient, eerie abyss.",
			"Is he human? Or—",
			"How far does the truth truly reach?"
		],
		"japanese": [
			"都市の光はいつも輝いていた。完璧なネメシスの影の下で。",
			"しかしリンの目に映ったのは、古く恐ろしい深淵だった。",
			"彼は人間なのか？それとも—",
			"真実は一体どこまで及んでいるのか？"
		],
		"chinese": [
			"城市的灯光总是闪耀着。在完美宿敌的阴影之下。",
			"然而在林的眼中，映出的是古老而诡异的深渊。",
			"他是人类吗？抑或是——",
			"真相究竟延伸至何处？"
		],
		"french": [
			"Les lumières de la ville brillaient toujours. Sous l'ombre d'un Némésis parfait.",
			"Pourtant, ce que Lin vit dans ses yeux était un abîme ancien et étrange.",
			"Est-il humain ? Ou—",
			"Jusqu'où la vérité s'étend-elle vraiment ?"
		],
		"spanish": [
			"Las luces de la ciudad siempre brillaron. Bajo la sombra de una Némesis perfecta.",
			"Sin embargo, lo que Lin vio fue un abismo antiguo y espeluznante.",
			"¿Es humano? ¿O—",
			"¿Hasta dónde llega realmente la verdad?"
		],
		"vietnamese": [
			"Đèn thành phố luôn rực rỡ. Dưới bóng của Nemesis hoàn hảo.",
			"Nhưng những gì Lin nhìn thấy là một vực thẳm cổ xưa, đáng sợ.",
			"Anh ta là người ư? Hay là—",
			"Sự thật rốt cuộc đến đâu?"
		],
		"thai": [
			"แสงไฟของเมืองส่องสว่างเสมอ ภายใต้เงามืดของ Nemesis ผู้สมบูรณ์แบบ",
			"แต่สิ่งที่หลินเห็นในดวงตาคือห้วงลึกอันเก่าแก่และน่าขนลุก",
			"เขาเป็นมนุษย์หรือเปล่า? หรือว่า—",
			"ความจริงไปไกลถึงแค่ไหนกันแน่?"
		],
		"hindi": [
			"शहर की रोशनी हमेशा चमकती रही। एक पूर्ण प्रतिशोध (नेमेसिस) की छाया के नीचे।",
			"लेकिन लิน की आँखों में जो दिखा, वह एक प्राचीन, भयानक अथाह गहराई थी।",
			"क्या वह इंसान है? या फिर—",
			"सच आखिर कब तक पहुंचता है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 남자… 네메시스의 눈을 봤어?",
						"english": "That man… did you see Nemesis's eyes?",
						"japanese": "あの男…ネメシスの目を見た？",
						"chinese": "那个男人……你看到宿敌的眼睛了吗？",
						"french": "Cet homme… as-tu vu les yeux de Némésis ?",
						"spanish": "¿Ese hombre… viste los ojos de Némesis?",
						"vietnamese": "Người đàn ông đó… cậu có thấy đôi mắt của Nemesis không?",
						"thai": "ผู้ชายคนนั้น… คุณเห็นดวงตาของ Nemesis ไหม?",
						"hindi": "वह आदमी... क्या तुमने नेमेसिस की आँखें देखीं?"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜? 뭔가 이상했어?",
						"english": "Why? Was something strange?",
						"japanese": "どうして？何かおかしかった？",
						"chinese": "为什么？有什么奇怪的吗？",
						"french": "Pourquoi ? Il y avait quelque chose d'étrange ?",
						"spanish": "¿Por qué? ¿Hubo algo extraño?",
						"vietnamese": "Tại sao? Có gì lạ à?",
						"thai": "ทำไม? มีอะไรแปลกเหรอ?",
						"hindi": "क्यों? कुछ अजीब था क्या?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…응. 도시의 불빛을 전부 빨아들이는 것 같았어.",
						"english": "...Yeah. It felt like they were sucking in all the city lights.",
						"japanese": "…うん。都市の光を全て吸い込んでいるようだった。",
						"chinese": "……嗯。感觉像是吸走了城市所有的灯光。",
						"french": "...Oui. On aurait dit qu'ils aspiraient toutes les lumières de la ville.",
						"spanish": "...Sí. Parecía que absorbían todas las luces de la ciudad.",
						"vietnamese": "...Ừ. Cứ như chúng đang hút cạn mọi ánh đèn của thành phố vậy.",
						"thai": "...ใช่ มันเหมือนกับว่ามันดูดกลืนแสงไฟทั้งหมดของเมืองไป",
						"hindi": "...हाँ। ऐसा लगा जैसे वे शहर की सारी रोशनी को सोख रहे थे।"
					},
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "오래되고… 섬뜩한. 그런 빛이 그의 눈에 있었어.",
						"english": "Ancient… and eerie. That kind of light was in his eyes.",
						"japanese": "古く…恐ろしい。そんな光が彼の目にあった。",
						"chinese": "古老…而诡异。那种光芒在他的眼中。",
						"french": "Ancienne… et étrange. Une telle lumière était dans ses yeux.",
						"spanish": "Antigua… y espeluznante. Ese tipo de luz estaba en sus ojos.",
						"vietnamese": "Cổ xưa… và đáng sợ. Một thứ ánh sáng như vậy trong mắt anh ta.",
						"thai": "เก่าแก่… และน่าขนลุก แสงแบบนั้นอยู่ในดวงตาของเขา",
						"hindi": "प्राचीन... और भयानक। वैसी रोशनी उसकी आँखों में थी।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "섬뜩한 빛이라니… 너무 과장하는 거 아니야?",
						"english": "Eerie light… aren't you exaggerating a bit?",
						"japanese": "恐ろしい光だって…少し大げさじゃない？",
						"chinese": "诡异的光芒……你是不是有点夸张了？",
						"french": "Une lumière étrange… tu n'exagères pas un peu ?",
						"spanish": "¿Luz espeluznante… no estás exagerando un poco?",
						"vietnamese": "Ánh sáng đáng sợ ư… cậu không nói quá chứ?",
						"thai": "แสงน่าขนลุกเนี่ยนะ… คุณพูดเกินจริงไปหน่อยหรือเปล่า?",
						"hindi": "भयानक रोशनी... क्या तुम थोड़ी अतिशयोक्ति नहीं कर रहे?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니. 느낌이 좋지 않아.",
						"english": "No. I have a bad feeling about this.",
						"japanese": "いや。嫌な予感がする。",
						"chinese": "不。我感觉不太好。",
						"french": "Non. J'ai un mauvais pressentiment.",
						"spanish": "No. Tengo un mal presentimiento.",
						"vietnamese": "Không. Tôi có linh cảm không tốt.",
						"thai": "ไม่ ฉันรู้สึกไม่ดีเลย",
						"hindi": "नहीं। मुझे अच्छा नहीं लग रहा है।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그는 단순한 기업가가 아니야. 분명해.",
						"english": "He's no mere entrepreneur. That's clear.",
						"japanese": "彼はただの起業家じゃない。明らかだ。",
						"chinese": "他不只是个企业家。很明显。",
						"french": "Ce n'est pas un simple entrepreneur. C'est évident.",
						"spanish": "No es un simple empresario. Está claro.",
						"vietnamese": "Hắn không chỉ là một doanh nhân bình thường. Rõ ràng.",
						"thai": "เขาไม่ใช่แค่ผู้ประกอบการธรรมดา ชัดเจนเลย",
						"hindi": "वह महज़ एक उद्यमी नहीं है। यह स्पष्ट है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "….",
						"english": "...",
						"japanese": "……",
						"chinese": "……",
						"french": "...",
						"spanish": "...",
						"vietnamese": "...",
						"thai": "...",
						"hindi": "..."
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "네메시스의 수집품들… 단순한 유물이 아니었어.",
						"english": "Nemesis's collection... not just relics.",
						"japanese": "ネメシスの収集品……ただの遺物じゃなかった。",
						"chinese": "复仇女神的收藏品……不仅仅是遗物。",
						"french": "Les collections de Némésis... pas de simples reliques.",
						"spanish": "Las colecciones de Némesis... no eran simples reliquias.",
						"vietnamese": "Bộ sưu tập của Nemesis... không chỉ là di vật.",
						"thai": "ของสะสมของเนเมซิส... ไม่ใช่แค่โบราณวัตถุ",
						"hindi": "नेमेसिस का संग्रह... महज़ अवशेष नहीं थे।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "你是什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าไง?",
						"hindi": "तुम्हारा क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "고대의 맹세… 그런 오래된 흔적들이 느껴져.",
						"english": "An ancient oath... I feel traces of such old vows.",
						"japanese": "古代の誓い……そんな古い痕跡が感じられる。",
						"chinese": "古老的誓言……我能感觉到那些古老痕迹。",
						"french": "Un serment ancien... Je sens les traces de ces vieux vœux.",
						"spanish": "Un juramento antiguo... Siento huellas de tales viejos votos.",
						"vietnamese": "Một lời thề cổ xưa... Tôi cảm nhận được những dấu vết cũ kỹ ấy.",
						"thai": "คำสาบานโบราณ... ฉันสัมผัสได้ถึงร่องรอยเก่าแก่เช่นนั้น",
						"hindi": "एक प्राचीन शपथ... मुझे ऐसे पुराने वादों के निशान महसूस होते हैं।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "맹세? 대체 무슨 맹세인데?",
						"english": "An oath? What oath are you talking about?",
						"japanese": "誓い？一体何の誓いだ？",
						"chinese": "誓言？到底是什么誓言？",
						"french": "Un serment ? De quel serment parles-tu ?",
						"spanish": "¿Un juramento? ¿De qué juramento hablas?",
						"vietnamese": "Lời thề? Rốt cuộc là lời thề gì?",
						"thai": "คำสาบานเหรอ? คำสาบานอะไรกันแน่?",
						"hindi": "एक शपथ? तुम किस शपथ की बात कर रहे हो?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 깊이 파고들수록… 위험해질 거야. 정말이야.",
						"english": "The deeper we dig... the more dangerous it will get. Truly.",
						"japanese": "深く掘り下げるほど……危険になるだろう。本当に。",
						"chinese": "挖得越深……就会越危险。真的。",
						"french": "Plus on creuse... plus ce sera dangereux. Vraiment.",
						"spanish": "Cuanto más profundo excavemos... más peligroso será. De verdad.",
						"vietnamese": "Càng đào sâu... sẽ càng nguy hiểm. Thật đấy.",
						"thai": "ยิ่งเจาะลึก... ก็ยิ่งอันตราย จริงๆ นะ",
						"hindi": "जितना गहरा हम खुदाई करेंगे... उतना ही खतरनाक होता जाएगा। सच में।"
					},
					"type": "speech",
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야 해.",
						"english": "I can't stop. I need to know the truth.",
						"japanese": "止められない。真実を知る必要がある。",
						"chinese": "无法停止。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo parar. Necesito saber la verdad.",
						"vietnamese": "Không thể dừng lại. Tôi cần phải biết sự thật.",
						"thai": "ฉันหยุดไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच जानना है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너도 조심해. 그의 눈은… 모든 걸 꿰뚫어 보는 것 같았어.",
						"english": "You be careful too. His eyes... seemed to pierce through everything.",
						"japanese": "君も気をつけろ。彼の目は……すべてを見通しているようだった。",
						"chinese": "你也要小心。他的眼睛……似乎能洞察一切。",
						"french": "Sois prudent toi aussi. Ses yeux... semblaient tout transpercer.",
						"spanish": "Ten cuidado tú también. Sus ojos... parecían traspasar todo.",
						"vietnamese": "Anh cũng cẩn thận. Ánh mắt hắn... dường như xuyên thấu mọi thứ.",
						"thai": "นายก็ระวังด้วยนะ สายตาของเขา... เหมือนจะมองทะลุทุกสิ่ง",
						"hindi": "तुम भी सावधान रहना। उसकी आँखें... सब कुछ भेदती हुई लग रही थीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 힘에 압도되었다. 도시의 그림자가 더 깊어졌다.",
						"english": "Overwhelmed by an unknown power. The city's shadow deepened.",
						"japanese": "正体不明の力に圧倒された。都市の影はさらに深まった。",
						"chinese": "被一股不明力量压倒。城市的阴影更深了。",
						"french": "Submergé par une puissance inconnue. L'ombre de la ville s'épaissit.",
						"spanish": "Abrumado por un poder desconocido. La sombra de la ciudad se hizo más profunda.",
						"vietnamese": "Bị áp đảo bởi một sức mạnh không rõ. Bóng tối của thành phố trở nên sâu hơn.",
						"thai": "ถูกครอบงำด้วยพลังลึกลับ เงาของเมืองทวีความมืดมิดยิ่งขึ้น",
						"hindi": "एक अज्ञात शक्ति ने अभिभूत कर दिया। शहर की परछाई और गहरी हो गई।"
					}
				},
				{
					"content": {
						"korean": "하찮은 것들. 네메시스님 앞에 무릎 꿇어라.",
						"english": "Insignificant beings. Kneel before Lord Nemesis.",
						"japanese": "くだらぬ者どもめ。ネメシス様の前でひざまずけ。",
						"chinese": "卑微的蝼蚁。在涅墨西斯大人面前跪下吧。",
						"french": "Êtres insignifiants. Agenouillez-vous devant le Seigneur Némésis.",
						"spanish": "Seres insignificantes. Arrodíllense ante el Señor Némesis.",
						"vietnamese": "Những kẻ yếu ớt. Hãy quỳ gối trước Nemesis đại nhân.",
						"thai": "สิ่งมีชีวิตไร้ค่า จงคุกเข่าต่อหน้าท่านเนเมซิสซะ",
						"hindi": "तुच्छ प्राणी। नेमेसिस स्वामी के सामने घुटने टेको।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "절대… 멈추지 않아.",
						"english": "I'll never... stop.",
						"japanese": "絶対… 止まらない。",
						"chinese": "绝不… 停止。",
						"french": "Jamais… je ne m'arrêterai.",
						"spanish": "Nunca… me detendré.",
						"vietnamese": "Sẽ không… dừng lại.",
						"thai": "ไม่มีทาง… หยุดหรอก.",
						"hindi": "कभी नहीं… रुकूंगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우 이 정도인가. 진짜 어둠은… 아직 시작도 안 했어.",
						"english": "Is this all? The true darkness... hasn't even begun.",
						"japanese": "たったこれだけか。本当の闇は…まだ始まってもいない。",
						"chinese": "就这点本事吗。真正的黑暗…还没开始呢。",
						"french": "C'est tout ? La véritable obscurité... n'a même pas commencé.",
						"spanish": "¿Esto es todo? La verdadera oscuridad... ni siquiera ha comenzado.",
						"vietnamese": "Chỉ có thế này thôi sao. Bóng tối thật sự... còn chưa bắt đầu.",
						"thai": "แค่นี้เองรึไง ความมืดที่แท้จริงน่ะ... ยังไม่ได้เริ่มเลยด้วยซ้ำ",
						"hindi": "बस इतना ही? असली अंधेरा… अभी शुरू भी नहीं हुआ है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…무슨 소리야?",
						"english": "...What was that?",
						"japanese": "…どういうことだ？",
						"chinese": "…什么意思？",
						"french": "...Que veux-tu dire ?",
						"spanish": "...¿Qué quieres decir?",
						"vietnamese": "...Ý ngươi là gì?",
						"thai": "...หมายความว่าไง?",
						"hindi": "…क्या मतलब है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "들었지? 아직 끝이 아니야. 네메시스는…",
						"english": "You heard? It's not over yet. Nemesis is...",
						"japanese": "聞いただろ？まだ終わりじゃない。ネメシスは…",
						"chinese": "听到了吗？还没结束。涅墨西斯是…",
						"french": "Tu as entendu ? Ce n'est pas encore fini. Némésis est...",
						"spanish": "¿Lo oíste? Aún no ha terminado. Némesis es...",
						"vietnamese": "Ngươi nghe thấy chứ? Vẫn chưa kết thúc đâu. Nemesis là...",
						"thai": "ได้ยินแล้วใช่ไหม? ยังไม่จบหรอก เนเมซิสน่ะ...",
						"hindi": "सुना तुमने? यह अभी खत्म नहीं हुआ है। नेमेसिस…"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네메시스의 그림자는 더욱 짙어졌다. 추적은 계속된다.",
						"english": "Nemesis's shadow deepened further. The pursuit continues.",
						"japanese": "ネメシスの影はさらに濃くなった。追跡は続く。",
						"chinese": "涅墨西斯的影子变得更加浓郁。追击仍在继续。",
						"french": "L'ombre de Némésis s'épaissit encore. La traque continue.",
						"spanish": "La sombra de Némesis se hizo aún más profunda. La persecución continúa.",
						"vietnamese": "Bóng của Nemesis càng lúc càng đậm. Cuộc truy đuổi vẫn tiếp tục.",
						"thai": "เงาของเนเมซิสยิ่งทวีความมืดมิด การติดตามยังคงดำเนินต่อไป",
						"hindi": "नेमेसिस की परछाई और गहरी हो गई। पीछा करना जारी है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "lin",
					"action": "enter"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "여기까지 왔지만… 이 앞은 정말 위험해. 돌아가야 할지도 몰라.",
						"english": "We've come this far, but... it's truly dangerous ahead. We might have to turn back.",
						"japanese": "ここまで来たけど……この先は本当に危険だ。引き返すべきかもしれない。",
						"chinese": "虽然已经走到这里了……但前面真的很危险。我们可能需要回头。",
						"french": "Nous sommes arrivés jusqu'ici, mais... c'est vraiment dangereux devant. Nous devrons peut-être faire demi-tour.",
						"spanish": "Hemos llegado hasta aquí, pero... lo que hay delante es realmente peligroso. Quizás tengamos que retroceder.",
						"vietnamese": "Chúng ta đã đi đến đây, nhưng... phía trước thực sự rất nguy hiểm. Có lẽ chúng ta phải quay lại.",
						"thai": "เรามาถึงตรงนี้แล้วก็จริง... แต่ข้างหน้าอันตรายจริงๆ เราอาจจะต้องถอยกลับ",
						"hindi": "हम यहाँ तक आ गए हैं, लेकिन... आगे वास्तव में बहुत खतरनाक है। हमें वापस जाना पड़ सकता है।"
					}
				},
				{
					"content": {
						"korean": "안 돼. 더 깊이 들어가야 해.",
						"english": "No. We need to go deeper.",
						"japanese": "だめだ。もっと奥へ行かないと。",
						"chinese": "不。我们必须深入。",
						"french": "Non. Nous devons aller plus loin.",
						"spanish": "No. Tenemos que ir más profundo.",
						"vietnamese": "Không. Chúng ta phải đi sâu hơn.",
						"thai": "ไม่สิ เราต้องเข้าไปลึกกว่านี้",
						"hindi": "नहीं। हमें और गहराई में जाना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"direction": "down",
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "lin"
				},
				{
					"content": {
						"korean": "어둠 속에서 정체 모를 그림자가 나타났다. 그 형체는 도시의 불빛마저 집어삼킬 듯했다.",
						"english": "An unknown shadow emerged from the darkness. Its form seemed to devour even the city lights.",
						"japanese": "闇の中から正体不明の影が現れた。その姿は都市の光さえも飲み込むようだった。",
						"chinese": "黑暗中出现了一个不明身份的影子。那形态似乎连城市的灯光都要吞噬。",
						"french": "Une ombre inconnue surgit des ténèbres. Sa forme semblait dévorer même les lumières de la ville.",
						"spanish": "Una sombra desconocida emergió de la oscuridad. Su forma parecía devorar incluso las luces de la ciudad.",
						"vietnamese": "Một bóng đen không rõ danh tính xuất hiện từ bóng tối. Hình dạng đó dường như nuốt chửng cả ánh đèn thành phố.",
						"thai": "เงามืดนิรนามปรากฏขึ้นจากความมืด รูปร่างนั้นราวกับจะกลืนกินแม้กระทั่งแสงไฟของเมือง",
						"hindi": "अंधेरे से एक अज्ञात परछाई उभरी। उसका आकार ऐसा था मानो वह शहर की रोशनी को भी निगल जाएगी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기까지 침범하다니. 어리석은 인간들.",
						"english": "To intrude this far. Foolish humans.",
						"japanese": "よくもここまで侵入したな。愚かな人間どもめ。",
						"chinese": "竟敢侵犯到这里。愚蠢的人类。",
						"french": "Oser envahir jusqu'ici. Humains stupides.",
						"spanish": "Invadir hasta aquí. Humanos necios.",
						"vietnamese": "Dám xâm phạm đến tận đây. Những kẻ phàm tục ngu ngốc.",
						"thai": "กล้าบุกรุกมาถึงที่นี่งั้นเหรอ มนุษย์โง่เขลา!",
						"hindi": "इतनी दूर तक घुसपैठ की हिम्मत। मूर्ख इंसान।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네메시스의 부하인가!",
						"english": "A subordinate of Nemesis!",
						"japanese": "ネメシスの手下か！",
						"chinese": "是涅墨西斯的部下吗！",
						"french": "Un subordonné de Némésis !",
						"spanish": "¡Un subordinado de Némesis!",
						"vietnamese": "Kẻ dưới trướng của Nemesis sao!",
						"thai": "สมุนของเนเมซิสงั้นรึ!",
						"hindi": "नेमेसिस का गुर्गा है क्या!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
