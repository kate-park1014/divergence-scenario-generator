export const scenario_forest_thalassa_55_02 = {
	"scenario_id": "forest_thalassa_55_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 깊어질수록 뒤틀렸다.",
			"이상한 식물들이 속삭였다.",
			"숲의 사냥꾼은 경고했지만,",
			"우리는 멈출 수 없었다.",
			"모든 것이… 변하고 있었다."
		],
		"english": [
			"The deeper the forest, the more twisted it became.",
			"Strange plants whispered.",
			"The forest hunter warned, but,",
			"We couldn't stop.",
			"Everything... was changing."
		],
		"japanese": [
			"森は深まるほどに歪んでいった。",
			"奇妙な植物が囁いた。",
			"森の狩人は警告したが、",
			"私たちは止まれなかった。",
			"すべてが…変わっていった。"
		],
		"chinese": [
			"森林越深，越是扭曲。",
			"奇怪的植物在低语。",
			"森林猎人发出了警告，但是，",
			"我们无法停止。",
			"一切都…在改变。"
		],
		"french": [
			"Plus la forêt était profonde, plus elle se tordait.",
			"D'étranges plantes chuchotaient.",
			"Le chasseur de la forêt a prévenu, mais,",
			"Nous ne pouvions pas nous arrêter.",
			"Tout... était en train de changer."
		],
		"spanish": [
			"Cuanto más profundo era el bosque, más retorcido se volvía.",
			"Plantas extrañas susurraban.",
			"El cazador del bosque advirtió, pero,",
			"No pudimos detenernos.",
			"Todo... estaba cambiando."
		],
		"vietnamese": [
			"Rừng càng sâu càng trở nên méo mó.",
			"Những loài cây kỳ lạ thì thầm.",
			"Thợ săn rừng đã cảnh báo, nhưng,",
			"Chúng tôi không thể dừng lại.",
			"Mọi thứ… đang thay đổi."
		],
		"thai": [
			"ยิ่งป่าลึกเท่าไหร่ก็ยิ่งบิดเบี้ยว",
			"พืชแปลกๆ กระซิบกระซาบ",
			"นายพรานป่าเตือนแล้ว แต่,",
			"เราหยุดไม่ได้",
			"ทุกสิ่ง... กำลังเปลี่ยนแปลง"
		],
		"hindi": [
			"जैसे-जैसे जंगल गहरा होता गया, वह विकृत होता गया।",
			"अजीब पौधे फुसफुसा रहे थे।",
			"जंगल के शिकारी ने चेतावनी दी, लेकिन,",
			"हम रुक नहीं सके।",
			"सब कुछ… बदल रहा था।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "숲은 기괴한 생명으로 꿈틀거렸다.",
						"english": "The forest writhed with grotesque life.",
						"japanese": "森は奇怪な生命で蠢いていた。",
						"chinese": "森林里蠕动着怪诞的生命。",
						"french": "La forêt grouillait de vie grotesque.",
						"spanish": "El bosque se retorcía con vida grotesca.",
						"vietnamese": "Rừng đang cuộn mình với sự sống kỳ dị.",
						"thai": "ป่าบิดเบี้ยวด้วยชีวิตที่แปลกประหลาด",
						"hindi": "जंगल विकृत जीवन से कराह रहा था।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "이게… 숲이라고?",
						"english": "This is... the forest?",
						"japanese": "これが…森だと？",
						"chinese": "这就是…森林？",
						"french": "C'est... la forêt ?",
						"spanish": "¿Esto es... el bosque?",
						"vietnamese": "Đây là… rừng ư?",
						"thai": "นี่คือ... ป่าเหรอ?",
						"hindi": "यह है… जंगल?"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "여긴 위험해. 숲이 병들고 있어.",
						"english": "It's dangerous here. The forest is sick.",
						"japanese": "ここは危険だ。森が病んでいる。",
						"chinese": "这里很危险。森林正在病变。",
						"french": "C'est dangereux ici. La forêt est malade.",
						"spanish": "Aquí es peligroso. El bosque está enfermo.",
						"vietnamese": "Chỗ này nguy hiểm. Rừng đang bị bệnh.",
						"thai": "ที่นี่อันตราย ป่ากำลังป่วย",
						"hindi": "यहाँ ख़तरा है। जंगल बीमार पड़ रहा है।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "sad"
				},
				{
					"speaker": "bracken",
					"emotion": "angry",
					"content": {
						"korean": "저 수액… 절대 닿지 마.",
						"english": "That sap... don't ever touch it.",
						"japanese": "あの樹液…絶対に触るな。",
						"chinese": "那粘液…绝不能碰。",
						"french": "Cette sève... ne la touche jamais.",
						"spanish": "Esa savia... nunca la toques.",
						"vietnamese": "Nhựa cây đó… tuyệt đối đừng chạm vào.",
						"thai": "ยางไม้นั่น... อย่าแตะต้องเด็ดขาด",
						"hindi": "वह रस… उसे कभी मत छूना।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "병들었다고?",
						"english": "Sick?",
						"japanese": "病んでいると？",
						"chinese": "病了？",
						"french": "Malade ?",
						"spanish": "¿Enfermo?",
						"vietnamese": "Bị bệnh ư?",
						"thai": "ป่วยเหรอ?",
						"hindi": "बीमार?"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 식물들 봐. 미쳐버린 거야.",
						"english": "Look at those plants. They've gone mad.",
						"japanese": "あの植物たちを見て。狂ってしまったわ。",
						"chinese": "看看那些植物。它们都疯了。",
						"french": "Regarde ces plantes. Elles sont devenues folles.",
						"spanish": "Mira esas plantas. Se han vuelto locas.",
						"vietnamese": "Nhìn mấy cái cây kia kìa. Chúng phát điên rồi.",
						"thai": "ดูพืชพวกนั้นสิ พวกมันบ้าไปแล้ว",
						"hindi": "उन पौधों को देखो। वे पागल हो गए हैं।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "생명들이 제멋대로 자라거나 썩어가고 있었다.",
						"english": "Life was growing rampant or decaying.",
						"japanese": "生命が勝手に育ったり腐敗したりしていた。",
						"chinese": "生命在恣意生长或腐烂。",
						"french": "La vie poussait à l'état sauvage ou pourrissait.",
						"spanish": "La vida crecía sin control o se estaba pudriendo.",
						"vietnamese": "Sự sống đang mọc um tùm hoặc thối rữa.",
						"thai": "สิ่งมีชีวิตกำลังเติบโตอย่างควบคุมไม่ได้หรือเน่าเปื่อย",
						"hindi": "जीवन या तो बेतहाशा बढ़ रहा था या सड़ रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "왜 이렇게 된 거지?",
						"english": "Why did this happen?",
						"japanese": "なぜこうなった？",
						"chinese": "为什么会这样？",
						"french": "Pourquoi est-ce arrivé ?",
						"spanish": "¿Por qué pasó esto?",
						"vietnamese": "Sao lại ra nông nỗi này?",
						"thai": "ทำไมถึงเป็นแบบนี้?",
						"hindi": "ऐसा क्यों हुआ?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "알 수 없어. 이 끈적한 수액이 퍼지면서부터….",
						"english": "I don't know. Ever since this sticky sap spread...",
						"japanese": "分からない。このねばねばした樹液が広まってから…。",
						"chinese": "我不知道。自从这种黏稠的树液蔓延开来后……",
						"french": "Je ne sais pas. Depuis que cette sève collante s'est répandue...",
						"spanish": "No lo sé. Desde que esta savia pegajosa se extendió...",
						"vietnamese": "Tôi không biết. Kể từ khi nhựa cây dính này lan ra...",
						"thai": "ฉันไม่รู้ ตั้งแต่ยางไม้เหนียวหนึบนี้แพร่กระจาย...",
						"hindi": "मुझे नहीं पता। जब से यह चिपचिपा रस फैला है..."
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "bracken",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "숲의 균형이 깨졌어. 되돌릴 수 없을지도 몰라.",
						"english": "The forest's balance is broken. It might be irreversible.",
						"japanese": "森の均衡が崩れた。元に戻せないかもしれない。",
						"chinese": "森林的平衡被打破了。可能无法挽回了。",
						"french": "L'équilibre de la forêt est brisé. C'est peut-être irréversible.",
						"spanish": "El equilibrio del bosque se ha roto. Podría ser irreversible.",
						"vietnamese": "Sự cân bằng của rừng đã bị phá vỡ. Có lẽ không thể quay lại được nữa.",
						"thai": "สมดุลของป่าพังทลายแล้ว อาจจะแก้ไขไม่ได้",
						"hindi": "जंगल का संतुलन बिगड़ गया है। हो सकता है इसे ठीक न किया जा सके।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "되돌려야 해.",
						"english": "We have to restore it.",
						"japanese": "元に戻さなければならない。",
						"chinese": "必须挽回。",
						"french": "Il faut y remédier.",
						"spanish": "Hay que revertirlo.",
						"vietnamese": "Phải khôi phục lại.",
						"thai": "เราต้องกอบกู้มัน",
						"hindi": "हमें इसे ठीक करना होगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 가면 모두 죽어. 너희도, 숲도.",
						"english": "If this continues, all will perish. Both you and the forest.",
						"japanese": "このままでは皆死ぬ。君たちも、森も。",
						"chinese": "如果这样下去，所有人都将死去。你们，还有森林。",
						"french": "Si ça continue comme ça, tout le monde mourra. Vous aussi, et la forêt.",
						"spanish": "Si esto sigue así, todos morirán. Vosotros y el bosque.",
						"vietnamese": "Cứ thế này thì tất cả sẽ chết. Cả các ngươi, và cả khu rừng.",
						"thai": "ถ้าเป็นแบบนี้ต่อไป ทุกคนจะตาย พวกนายด้วย ป่าด้วย",
						"hindi": "अगर ऐसा ही चलता रहा, तो सब मर जाएंगे। तुम भी, और जंगल भी।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…멈출 거야.",
						"english": "...I'll stop it.",
						"japanese": "…止める。",
						"chinese": "……我会阻止它。",
						"french": "...Je vais l'arrêter.",
						"spanish": "...Lo detendré.",
						"vietnamese": "...Tôi sẽ ngăn nó lại.",
						"thai": "...ฉันจะหยุดมัน",
						"hindi": "...मैं इसे रोकूंगा।"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bracken",
					"spot": [
						2,
						4
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상은 위험해. 돌아가.",
						"english": "It's too dangerous now. Go back.",
						"japanese": "これ以上は危険だ。戻れ。",
						"chinese": "再往前就危险了。回去吧。",
						"french": "C'est trop dangereux maintenant. Retourne-t'en.",
						"spanish": "Ya es demasiado peligroso. Vuelve.",
						"vietnamese": "Nguy hiểm lắm rồi. Quay lại đi.",
						"thai": "มันอันตรายเกินไปแล้ว กลับไปเถอะ",
						"hindi": "अब और ख़तरनाक है। वापस जाओ।"
					},
					"emotion": "angry",
					"speaker": "bracken"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 알아야 해.",
						"english": "I need to know the truth.",
						"japanese": "真実を知らなければならない。",
						"chinese": "我必须知道真相。",
						"french": "Je dois connaître la vérité.",
						"spanish": "Necesito saber la verdad.",
						"vietnamese": "Tôi phải biết sự thật.",
						"thai": "ฉันต้องรู้ความจริง",
						"hindi": "मुझे सच जानना है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"emotion": "sad",
					"content": {
						"korean": "진실은… 너희를 집어삼킬 거야.",
						"english": "The truth... will devour you.",
						"japanese": "真実は…お前たちを飲み込むだろう。",
						"chinese": "真相…会吞噬你们。",
						"french": "La vérité... vous dévorera.",
						"spanish": "La verdad... os devorará.",
						"vietnamese": "Sự thật... sẽ nuốt chửng các ngươi.",
						"thai": "ความจริง...จะกลืนกินพวกเจ้า.",
						"hindi": "सच... तुम्हें निगल जाएगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…알아.",
						"english": "...I know.",
						"japanese": "…分かってる。",
						"chinese": "…我知道。",
						"french": "...Je sais.",
						"spanish": "...Lo sé.",
						"vietnamese": "...Ta biết.",
						"thai": "...รู้แล้ว.",
						"hindi": "...मुझे पता है।"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "bracken",
					"action": "exit",
					"direction": "down"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크큭… 겨우… 이 정도론… 막을 수 없어….",
						"english": "Heh... this alone... won't stop me...",
						"japanese": "ククク…これしきでは…止められぬ…。",
						"chinese": "呵呵…就凭…这点程度…是无法阻止的…。",
						"french": "Hmph... si peu... ne peut m'arrêter...",
						"spanish": "Jeje... esto solo... no me detendrá...",
						"vietnamese": "Khà khà… Chỉ thế này thôi… không thể ngăn cản được đâu…",
						"thai": "ฮึ่ม... แค่... เท่านี้... หยุดไม่ได้หรอก...",
						"hindi": "हीही... बस... इतने से... रोक नहीं सकते..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 흩어지며, 끈적한 수액이 바닥에 고였다.",
						"english": "The colossal shadow dispersed, and viscous sap pooled on the ground.",
						"japanese": "巨大な影が散らばり、粘りつく樹液が床に溜まった。",
						"chinese": "巨大的影子散去，粘稠的树液在地上汇聚。",
						"french": "L'ombre colossale se dispersa, et une sève visqueuse s'accumula sur le sol.",
						"spanish": "La sombra colosal se dispersó, y una savia viscosa se acumuló en el suelo.",
						"vietnamese": "Bóng tối khổng lồ tan biến, chất dịch nhầy nhụa đọng lại trên mặt đất.",
						"thai": "เงาขนาดมหึมาสลายไป, และน้ำเลี้ยงเหนียวข้นก็รวมตัวกันบนพื้น.",
						"hindi": "विशाल परछाईं बिखर गई, और चिपचिपा रस फर्श पर इकट्ठा हो गया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직, 끝이 아니야.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わりじゃない。",
						"chinese": "…还没，结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Vẫn chưa, kết thúc đâu.",
						"thai": "...ยัง, ไม่ใช่จุดจบ.",
						"hindi": "...अभी, खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…해냈구나. 하지만, 이건 시작일 뿐이야.",
						"english": "...You did it. But this is just the beginning.",
						"japanese": "...やったな。だが、これは始まりに過ぎない。",
						"chinese": "...你做到了。但这只是个开始。",
						"french": "...Tu as réussi. Mais ce n'est que le début.",
						"spanish": "...Lo lograste. Pero esto es solo el principio.",
						"vietnamese": "...Ngươi đã làm được. Nhưng đây chỉ là khởi đầu thôi.",
						"thai": "...เจ้าทำได้แล้ว แต่นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "...तुमने कर दिखाया। लेकिन, यह तो बस शुरुआत है।"
					},
					"emotion": "sad",
					"speaker": "bracken"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "브라켄의 눈빛은 불안했다. 숲은 여전히 흐느꼈다.",
						"english": "Bracken's eyes were uneasy. The forest still whimpered.",
						"japanese": "ブラッケンの眼差しは不安そうだった。森はまだすすり泣いていた。",
						"chinese": "布拉肯的眼神不安。森林仍在呜咽。",
						"french": "Le regard de Bracken était inquiet. La forêt gémissait toujours.",
						"spanish": "La mirada de Bracken era inquieta. El bosque seguía gimiendo.",
						"vietnamese": "Ánh mắt Bracken bất an. Rừng vẫn rên rỉ.",
						"thai": "แววตาของแบรคเค่นไม่สบายใจ ป่ายังคงคร่ำครวญ",
						"hindi": "ब्रैकन की आँखें बेचैन थीं। जंगल अभी भी सिसक रहा था।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 일렁였다.",
						"english": "Deepest in the forest. A colossal shadow flickered.",
						"japanese": "森の最も深い場所。巨大な影が揺らめいた。",
						"chinese": "森林最深处。一道巨大的影子晃动着。",
						"french": "Au plus profond de la forêt. Une ombre colossale vacillait.",
						"spanish": "En lo más profundo del bosque. Una sombra colosal se agitó.",
						"vietnamese": "Sâu thẳm nhất trong rừng. Một bóng tối khổng lồ lay động.",
						"thai": "ลึกสุดใจกลางป่า. เงาขนาดมหึมาได้สั่นไหว.",
						"hindi": "जंगल के सबसे गहरे में। एक विशाल परछाईं झिलमिला रही थी।"
					}
				},
				{
					"content": {
						"korean": "네 발걸음이, 숲을 깨웠다.",
						"english": "Your footsteps awoke the forest.",
						"japanese": "お前の足音が、森を目覚めさせた。",
						"chinese": "你的脚步，唤醒了森林。",
						"french": "Tes pas ont réveillé la forêt.",
						"spanish": "Tus pasos despertaron el bosque.",
						"vietnamese": "Bước chân ngươi, đã đánh thức khu rừng.",
						"thai": "ก้าวเดินของเจ้า, ปลุกป่าให้ตื่น.",
						"hindi": "तुम्हारे कदमों ने, जंगल को जगा दिया।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 숲을 망쳤어.",
						"english": "You ruined this forest.",
						"japanese": "お前がこの森をめちゃくちゃにしたんだ。",
						"chinese": "你毁了这片森林。",
						"french": "Tu as ruiné cette forêt.",
						"spanish": "Has arruinado este bosque.",
						"vietnamese": "Ngươi đã phá hủy khu rừng này.",
						"thai": "เจ้าทำลายป่านี้.",
						"hindi": "तुमने इस जंगल को बर्बाद कर दिया।"
					}
				},
				{
					"content": {
						"korean": "망쳤다고? 난… 새로운 생명을 주는 중이다.",
						"english": "Ruined? I'm... giving new life.",
						"japanese": "めちゃくちゃにしただと？俺は…新たな命を与えているんだ。",
						"chinese": "毁了？我…正在赋予新生命。",
						"french": "Ruiné ? Je... donne une nouvelle vie.",
						"spanish": "¿Arruinado? Yo... estoy dando nueva vida.",
						"vietnamese": "Hủy hoại ư? Ta… đang ban tặng sự sống mới đấy.",
						"thai": "ทำลายเหรอ? ข้า...กำลังให้ชีวิตใหม่ต่างหาก.",
						"hindi": "बर्बाद किया? मैं... नया जीवन दे रहा हूँ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "헛소리 마!",
						"english": "Don't talk nonsense!",
						"japanese": "戯言を言うな！",
						"chinese": "别胡说八道！",
						"french": "Ne dis pas de bêtises !",
						"spanish": "¡No digas tonterías!",
						"vietnamese": "Đừng nói bậy!",
						"thai": "อย่าพูดเหลวไหล!",
						"hindi": "बकवास मत करो!"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale dévora tout.",
						"spanish": "Una sombra colosal lo devoró todo.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาอันมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल परछाई ने सब कुछ निगल लिया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "두려워해라… 숲의 의지를….",
						"english": "Fear... the will of the forest...",
						"japanese": "恐れろ…森の意志を…",
						"chinese": "惧怕吧…森林的意志…",
						"french": "Craignez... la volonté de la forêt...",
						"spanish": "Teme... la voluntad del bosque...",
						"vietnamese": "Hãy sợ hãi… ý chí của khu rừng…",
						"thai": "จงกลัว... เจตจำนงของป่า...",
						"hindi": "डरो... जंगल की इच्छा से..."
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직이야. 포기 안 해.",
						"english": "...Not yet. I won't give up.",
						"japanese": "...まだだ。諦めない。",
						"chinese": "...还没。我不会放弃。",
						"french": "...Pas encore. Je n'abandonnerai pas.",
						"spanish": "...Todavía no. No me rindo.",
						"vietnamese": "...Chưa. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่ถึงเวลา ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी नहीं। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
