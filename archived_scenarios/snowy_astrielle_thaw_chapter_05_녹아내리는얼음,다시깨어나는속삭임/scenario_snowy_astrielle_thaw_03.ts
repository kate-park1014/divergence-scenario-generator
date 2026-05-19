export const scenario_snowy_astrielle_thaw_03 = {
	"scenario_id": "snowy_astrielle_thaw_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"borealis": {
			"id": "mon_8dc13eb3-9244-4413-a74b-ee25681ceab5",
			"name": {
				"korean": "보레아리스",
				"english": "Borealis",
				"japanese": "ボレアリス",
				"chinese": "博瑞利斯",
				"french": "Boréalis",
				"spanish": "Borealis",
				"vietnamese": "Borealis",
				"thai": "โบเรียลิส",
				"hindi": "बोरियालिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bd557ed6-ee94-4ed6-7da8-6f9770585b00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2a79793b-650a-478a-00e2-38f8c8730a00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"녹아내린 유적, 고대의 속삭임이 깨어나다.",
			"사악한 기운이 아스트리엘의 의지를 노린다.",
			"어둠이 깊어질수록, 그녀의 눈빛은 흔들렸다.",
			"이 시험을 이겨낼 수 있을까?"
		],
		"english": [
			"Melted ruins, ancient whispers awaken.",
			"An evil aura targets Astriel's will.",
			"As darkness deepened, her gaze wavered.",
			"Can she overcome this trial?"
		],
		"japanese": [
			"溶け落ちた遺跡、古の囁きが目覚める。",
			"邪悪な気がアストリエルの意思を狙う。",
			"闇が深まるほど、彼女の眼差しは揺らいだ。",
			"この試練を乗り越えられるだろうか？"
		],
		"chinese": [
			"融化的遗迹，古老的低语苏醒。",
			"邪恶的气息觊觎着阿斯特丽尔的意志。",
			"黑暗越深，她的眼神越是动摇。",
			"她能战胜这场考验吗？"
		],
		"french": [
			"Ruines fondues, les murmures antiques s'éveillent.",
			"Une aura maléfique cible la volonté d'Astriel.",
			"Plus l'obscurité s'épaississait, plus son regard vacillait.",
			"Pourra-t-elle surmonter cette épreuve ?"
		],
		"spanish": [
			"Ruinas derretidas, los susurros antiguos despiertan.",
			"Un aura maligna apunta a la voluntad de Astriel.",
			"Cuanto más se profundizaba la oscuridad, más vacilaba su mirada.",
			"¿Podrá superar esta prueba?"
		],
		"vietnamese": [
			"Di tích tan chảy, những lời thì thầm cổ xưa thức tỉnh.",
			"Một luồng khí tà ác nhắm vào ý chí của Astriel.",
			"Bóng tối càng sâu, ánh mắt cô càng dao động.",
			"Cô ấy có thể vượt qua thử thách này không?"
		],
		"thai": [
			"ซากปรักหักพังที่หลอมละลาย เสียงกระซิบโบราณตื่นขึ้น.",
			"พลังงานชั่วร้ายหมายปองเจตจำนงของแอสเทรียล.",
			"ยิ่งความมืดลึกลงไปเท่าไหร่ สายตาของเธอก็ยิ่งสั่นคลอน.",
			"เธอจะผ่านการทดลองนี้ไปได้ไหม?"
		],
		"hindi": [
			"पिघले हुए खंडहर, प्राचीन फुसफुसाहट जागृत होती है।",
			"एक बुरी शक्ति एस्ट्रियल की इच्छा को निशाना बनाती है।",
			"जैसे-जैसे अंधेरा गहराता गया, उसकी नज़र डगमगा गई।",
			"क्या वह इस परीक्षा को पार कर पाएगी?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "녹아내린 유적. 고대의 힘이 꿈틀거렸다.",
						"english": "Melted ruins. Ancient power stirred.",
						"japanese": "溶け落ちた遺跡。古の力が蠢いた。",
						"chinese": "融化的遗迹。古老的力量在蠢蠢欲动。",
						"french": "Ruines fondues. Une puissance ancienne s'agitait.",
						"spanish": "Ruinas derretidas. Un poder ancestral se agitó.",
						"vietnamese": "Di tích tan chảy. Sức mạnh cổ xưa đã khuấy động.",
						"thai": "ซากปรักหักพังที่หลอมละลาย พลังโบราณเคลื่อนไหว.",
						"hindi": "पिघले हुए खंडहर। प्राचीन शक्ति हलचल करने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 기운은… 심상치 않아.",
						"english": "This aura... it's unusual.",
						"japanese": "この気配は…ただ事ではない。",
						"chinese": "这股气息…非同寻常。",
						"french": "Cette aura... est inhabituelle.",
						"spanish": "Esta aura... es inusual.",
						"vietnamese": "Luồng khí này... thật bất thường.",
						"thai": "พลังงานนี้...ไม่ปกติเลย.",
						"hindi": "यह आभा... असामान्य है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "borealis",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "마침내 깨어났군.",
						"english": "Finally, it awakens.",
						"japanese": "ついに目覚めたか。",
						"chinese": "终于苏醒了啊。",
						"french": "Enfin, il s'éveille.",
						"spanish": "Finalmente, despierta.",
						"vietnamese": "Cuối cùng, nó cũng thức tỉnh.",
						"thai": "ในที่สุดก็ตื่นขึ้นมาแล้วสินะ.",
						"hindi": "आखिरकार, यह जाग गया।"
					},
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "세계의 균형이 무너지고 있어.",
						"english": "The balance of the world is collapsing.",
						"japanese": "世界の均衡が崩れている。",
						"chinese": "世界的平衡正在崩溃。",
						"french": "L'équilibre du monde s'effondre.",
						"spanish": "El equilibrio del mundo se está desmoronando.",
						"vietnamese": "Sự cân bằng của thế giới đang sụp đổ.",
						"thai": "สมดุลของโลกกำลังพังทลายลง.",
						"hindi": "विश्व का संतुलन बिगड़ रहा है।"
					},
					"emotion": "sad",
					"speaker": "borealis",
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
					"spot": [
						3,
						2
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 존재가 아스트리엘을 노려.",
						"english": "That being targets Astriel.",
						"japanese": "その存在がアストリエルを狙っている。",
						"chinese": "那个存在盯上了阿斯特丽尔。",
						"french": "Cette entité cible Astriel.",
						"spanish": "Esa entidad apunta a Astriel.",
						"vietnamese": "Thực thể đó nhắm vào Astriel.",
						"thai": "สิ่งนั้นกำลังเล็งเป้าไปที่แอสเทรียล.",
						"hindi": "वह अस्तित्व एस्ट्रियल को निशाना बनाता है।"
					},
					"type": "speech",
					"speaker": "borealis",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "아스트리엘을? 왜?",
						"english": "Astriel? Why?",
						"japanese": "アストリエルを？なぜ？",
						"chinese": "阿斯特丽尔？为什么？",
						"french": "Astriel ? Pourquoi ?",
						"spanish": "¿Astriel? ¿Por qué?",
						"vietnamese": "Astriel? Tại sao?",
						"thai": "แอสเทรียลเหรอ? ทำไม?",
						"hindi": "एस्ट्रियल को? क्यों?"
					}
				},
				{
					"content": {
						"korean": "그녀의 의지를 잠식해서, 세상을 얼음으로 물들이려 해.",
						"english": "Corrupting her will, to paint the world in ice.",
						"japanese": "彼女の意志を侵食し、世界を氷で染め上げようとしている。",
						"chinese": "侵蚀她的意志，将世界染上冰霜。",
						"french": "Corrompre sa volonté, pour recouvrir le monde de glace.",
						"spanish": "Corrompiendo su voluntad, para teñir el mundo de hielo.",
						"vietnamese": "Ăn mòn ý chí của cô ấy, để nhuộm thế giới trong băng giá.",
						"thai": "กำลังกัดกร่อนเจตจำนงของเธอ เพื่อย้อมโลกด้วยน้ำแข็ง",
						"hindi": "उसकी इच्छा को भ्रष्ट कर, दुनिया को बर्फ से रंगने के लिए।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "borealis"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(충격)",
						"english": "(Shock)",
						"japanese": "(衝撃)",
						"chinese": "(冲击)",
						"french": "(Choc)",
						"spanish": "(Impacto)",
						"vietnamese": "(Sốc)",
						"thai": "(ตกใจ)",
						"hindi": "(सदमा)"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"speaker": "borealis"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "borealis",
					"content": {
						"korean": "속삭임이 들리지?",
						"english": "Do you hear the whispers?",
						"japanese": "囁きが聞こえるか？",
						"chinese": "你听到低语了吗？",
						"french": "Entends-tu les murmures ?",
						"spanish": "¿Oyes los susurros?",
						"vietnamese": "Ngươi có nghe thấy tiếng thì thầm không?",
						"thai": "ได้ยินเสียงกระซิบไหม?",
						"hindi": "क्या तुम्हें फुसफुसाहट सुनाई देती है?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…아직은.",
						"english": "...Not yet.",
						"japanese": "…まだだ。",
						"chinese": "…还没有。",
						"french": "...Pas encore.",
						"spanish": "...Todavía no.",
						"vietnamese": "...Chưa đâu.",
						"thai": "...ยัง",
						"hindi": "...अभी नहीं।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "곧 네 안을 파고들 거야. 조심해.",
						"english": "It will soon seep into you. Be careful.",
						"japanese": "すぐにお前の中を蝕むだろう。気をつけろ。",
						"chinese": "它很快就会侵蚀你的内心。小心。",
						"french": "Bientôt, ça te rongera de l'intérieur. Fais attention.",
						"spanish": "Pronto te corroerá por dentro. Ten cuidado.",
						"vietnamese": "Nó sẽ sớm xâm nhập vào ngươi. Cẩn thận đấy.",
						"thai": "มันจะกัดกินจากภายในเจ้าในไม่ช้า ระวังตัวให้ดี",
						"hindi": "यह जल्द ही तुम्हें अंदर से खा जाएगा। सावधान रहो।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적 깊은 곳에서 차가운 속삭임이 감돌았다.",
						"english": "Cold whispers echoed from deep within the ruins.",
						"japanese": "遺跡の奥深くから、冷たい囁きが響き渡った。",
						"chinese": "寒冷的低语从遗迹深处回荡。",
						"french": "De froids murmures résonnaient des profondeurs des ruines.",
						"spanish": "Fríos susurros resonaron desde lo más profundo de las ruinas.",
						"vietnamese": "Những lời thì thầm lạnh lẽo vang vọng từ sâu trong di tích.",
						"thai": "เสียงกระซิบเย็นยะเยือกดังก้องมาจากส่วนลึกของซากปรักหักพัง",
						"hindi": "खंडहरों की गहराई से ठंडी फुसफुसाहट गूंज उठी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "borealis",
					"content": {
						"korean": "아스트리엘, 네 눈빛이… 흔들려.",
						"english": "Astriel, your eyes... they waver.",
						"japanese": "アストリエル、お前の瞳が…揺らいでいる。",
						"chinese": "阿斯特里埃尔，你的眼神…动摇了。",
						"french": "Astriel, tes yeux… vacillent.",
						"spanish": "Astriel, tu mirada… vacila.",
						"vietnamese": "Astriel, ánh mắt của ngươi… đang dao động.",
						"thai": "แอสเทรียล แววตาของเจ้า... กำลังสั่นคลอน",
						"hindi": "एस्ट्रियल, तुम्हारी आँखें… डगमगा रही हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "(머리를 감싸쥐며) 시끄러워!",
						"english": "(Clutching head) Shut up!",
						"japanese": "(頭を抱えながら) うるさい！",
						"chinese": "(抱住头) 闭嘴！",
						"french": "(Se tenant la tête) Tais-toi !",
						"spanish": "(Agarrándose la cabeza) ¡Cállate!",
						"vietnamese": "(Ôm lấy đầu) Câm đi!",
						"thai": "(กุมศีรษะ) หุบปาก!",
						"hindi": "(सिर पकड़ते हुए) चुप हो जाओ!"
					}
				},
				{
					"content": {
						"korean": "이미 잠식이 시작됐어. 인정해.",
						"english": "The corruption has already begun. Admit it.",
						"japanese": "既に侵食は始まっている。認めろ。",
						"chinese": "侵蚀已经开始了。承认吧。",
						"french": "L'invasion a déjà commencé. Admets-le.",
						"spanish": "La corrupción ya ha comenzado. Admítelo.",
						"vietnamese": "Sự xâm thực đã bắt đầu rồi. Thừa nhận đi.",
						"thai": "การกัดกินได้เริ่มขึ้นแล้ว ยอมรับมันซะ",
						"hindi": "संक्रमण पहले ही शुरू हो चुका है। स्वीकार करो।"
					},
					"speaker": "borealis",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아스트리엘! 정신 차려!",
						"english": "Astriel! Snap out of it!",
						"japanese": "アストリエル！正気を取り戻せ！",
						"chinese": "阿斯特里埃尔！清醒过来！",
						"french": "Astriel ! Reprends-toi !",
						"spanish": "¡Astriel! ¡Reacciona!",
						"vietnamese": "Astriel! Tỉnh táo lại đi!",
						"thai": "แอสเทรียล! ได้สติเดี๋ยวนี้!",
						"hindi": "एस्ट्रियल! होश में आओ!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "흥… 고작 이 정도인가.",
						"english": "Hmph... Is that all you've got?",
						"japanese": "ふん…たかがこの程度か。",
						"chinese": "哼……就这点本事吗。",
						"french": "Hmph… Est-ce tout ce que vous avez ?",
						"spanish": "Mmm... ¿Es todo lo que tenéis?",
						"vietnamese": "Hừm... Chỉ có vậy thôi sao.",
						"thai": "หึ... แค่นี้เองเหรอ",
						"hindi": "हम्म... बस इतना ही?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진짜 균열은, 이제부터다.",
						"english": "The true rift begins now.",
						"japanese": "本当の亀裂は、これからだ。",
						"chinese": "真正的裂缝，现在才开始。",
						"french": "La véritable faille commence maintenant.",
						"spanish": "La verdadera brecha, ahora empieza.",
						"vietnamese": "Vết nứt thật sự, bây giờ mới bắt đầu.",
						"thai": "รอยแยกที่แท้จริง เพิ่งจะเริ่มต้นขึ้นเดี๋ยวนี้",
						"hindi": "असली दरार, अब शुरू होती है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "(지쳐서) 대체… 무슨 말을 하는 거야.",
						"english": "(Exhausted) What... what are you talking about?",
						"japanese": "（疲れて）一体…何を言っているんだ。",
						"chinese": "（疲惫地）到底……你在说什么啊。",
						"french": "(Épuisé) De quoi... de quoi parles-tu ?",
						"spanish": "(Exhausto) ¿De qué... de qué estás hablando?",
						"vietnamese": "(Mệt mỏi) Rốt cuộc... ngươi đang nói cái gì vậy.",
						"thai": "(หมดแรง) นี่... นายพูดเรื่องอะไรน่ะ",
						"hindi": "(थका हुआ) आखिर... तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						1
					],
					"speaker": "borealis",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "그의 말대로야. 더 깊은 곳에서…",
						"english": "He's right. From deeper within...",
						"japanese": "彼の言う通りだ。もっと深い場所から…",
						"chinese": "他说得没错。在更深的地方……",
						"french": "Il a raison. Depuis les profondeurs…",
						"spanish": "Tiene razón. Desde un lugar más profundo…",
						"vietnamese": "Đúng như hắn nói. Từ sâu hơn bên trong...",
						"thai": "เขาพูดถูก จากส่วนลึกที่มากกว่านั้น...",
						"hindi": "उसकी बात सही है। और गहरे से..."
					}
				},
				{
					"emotion": "angry",
					"speaker": "borealis",
					"type": "speech",
					"content": {
						"korean": "거대한 재앙이 다가오고 있어.",
						"english": "A colossal disaster is approaching.",
						"japanese": "巨大な災厄が迫っている。",
						"chinese": "巨大的灾难正在逼近。",
						"french": "Une immense catastrophe approche.",
						"spanish": "Una catástrofe colosal se acerca.",
						"vietnamese": "Một thảm họa khổng lồ đang đến gần.",
						"thai": "หายนะครั้งใหญ่กำลังคืบคลานเข้ามา",
						"hindi": "एक विशाल आपदा आ रही है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 존재의 기운이 흩어지자, 유적은 잠시 침묵에 잠겼다. 하지만 속삭임은 멈추지 않았다.",
						"english": "As the ancient being's aura dispersed, the ruins fell silent for a moment. But the whispers did not cease.",
						"japanese": "古の存在の気が散ると、遺跡はしばし沈黙に包まれた。しかし、囁きは止まらなかった。",
						"chinese": "随着古老存在的气息消散，遗迹暂时陷入沉寂。然而，低语并未停止。",
						"french": "Alors que l'aura de l'être ancien se dispersait, les ruines se turent un instant. Mais les murmures ne cessèrent pas.",
						"spanish": "Cuando el aura del ser ancestral se disipó, las ruinas guardaron silencio por un momento. Pero los susurros no cesaron.",
						"vietnamese": "Khi hào quang của thực thể cổ xưa tan biến, di tích chìm vào im lặng một lúc. Nhưng những lời thì thầm vẫn không ngừng.",
						"thai": "เมื่อรัศมีของสิ่งมีชีวิตโบราณสลายไป ซากปรักหักพังก็เงียบงันชั่วขณะ แต่เสียงกระซิบก็ยังไม่หยุดลง",
						"hindi": "जैसे ही प्राचीन सत्ता की आभा बिखरी, खंडहर क्षण भर के लिए शांत हो गए। लेकिन फुसफुसाहट बंद नहीं हुई。"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 인간들. 내 힘을 버틸 수 없을 거다.",
						"english": "Frail humans. You won't endure my power.",
						"japanese": "愚かな人間ども。我が力には耐えられまい。",
						"chinese": "弱小的人类。你们承受不住我的力量。",
						"french": "Faibles humains. Vous ne supporterez pas ma puissance.",
						"spanish": "Humanos débiles. No soportaréis mi poder.",
						"vietnamese": "Bọn người yếu ớt. Các ngươi sẽ không chịu nổi sức mạnh của ta đâu.",
						"thai": "มนุษย์ที่อ่อนแอ พวกเจ้าจะทานทนพลังของข้าไม่ได้หรอก",
						"hindi": "कमजोर इंसान। तुम मेरी शक्ति झेल नहीं पाओगे।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "(분노에 찬) 다시 돌아와서… 널 끝낼 거야!",
						"english": "(Enraged) I'll return... and finish you!",
						"japanese": "(激怒して) 必ず戻って… お前を終わらせてやる！",
						"chinese": "(愤怒地) 我会回来… 终结你！",
						"french": "(Enragé) Je reviendrai... et je t'achèverai !",
						"spanish": "(Enfurecido) Volveré... ¡y te acabaré!",
						"vietnamese": "(Đầy phẫn nộ) Ta sẽ quay lại... và kết liễu ngươi!",
						"thai": "(ด้วยความโกรธจัด) ข้าจะกลับมา... และจัดการเจ้าให้สิ้นซาก!",
						"hindi": "(क्रोधित होकर) मैं वापस आऊँगा... और तुम्हें खत्म कर दूँगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그때도, 똑같은 결과를 맞이할 테지.",
						"english": "Even then, you'll face the same fate.",
						"japanese": "その時も、同じ結果を迎えることになるだろう。",
						"chinese": "那时，你也会面临同样的结果。",
						"french": "Même à ce moment-là, tu affronteras le même résultat.",
						"spanish": "Incluso entonces, afrontarás el mismo resultado.",
						"vietnamese": "Khi đó, ngươi cũng sẽ đối mặt với kết cục tương tự.",
						"thai": "ถึงตอนนั้น เจ้าก็จะเผชิญผลลัพธ์แบบเดียวกัน",
						"hindi": "तब भी, तुम्हें वही परिणाम भुगतना पड़ेगा।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 여기까지 기어왔군.",
						"english": "Foolish mortals. You've crawled all this way.",
						"japanese": "愚かな者どもめ。ここまで這い寄ってきたか。",
						"chinese": "愚蠢的东西。竟敢爬到这里来。",
						"french": "Stupides créatures. Vous avez rampé jusqu'ici.",
						"spanish": "Criaturas necias. Habéis llegado hasta aquí arrastrándoos.",
						"vietnamese": "Đồ ngu xuẩn. Ngươi đã bò đến đây.",
						"thai": "เจ้าพวกโง่เง่า คลานมาถึงที่นี่ได้ยังไงกัน",
						"hindi": "मूर्ख प्राणी। तुम यहाँ तक रेंगते हुए आ गए।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "아스트리엘의 힘은, 내 것이 될 거다.",
						"english": "Astriel's power will be mine.",
						"japanese": "アストリエルの力は、この私のものとなるのだ。",
						"chinese": "阿斯特丽尔的力量，将属于我。",
						"french": "Le pouvoir d'Astriel sera mien.",
						"spanish": "El poder de Astriel será mío.",
						"vietnamese": "Sức mạnh của Astriel sẽ là của ta.",
						"thai": "พลังของแอสเทรียลจะเป็นของข้า",
						"hindi": "एस्ट्रियल की शक्ति मेरी होगी।"
					}
				},
				{
					"content": {
						"korean": "그럴 리 없어!",
						"english": "That can't be!",
						"japanese": "そんなはずない！",
						"chinese": "不可能！",
						"french": "C'est impossible !",
						"spanish": "¡No puede ser!",
						"vietnamese": "Không thể nào!",
						"thai": "ไม่จริง!",
						"hindi": "ऐसा नहीं हो सकता!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네놈들의 분노가, 곧 그녀를 집어삼킬 테니.",
						"english": "Your rage will soon consume her.",
						"japanese": "お前たちの怒りが、すぐに彼女を飲み込むだろうからな。",
						"chinese": "你们的愤怒，很快就会吞噬她。",
						"french": "Votre colère la consumera bientôt.",
						"spanish": "Vuestra ira pronto la consumirá.",
						"vietnamese": "Cơn thịnh nộ của các ngươi, sẽ sớm nuốt chửng cô ấy.",
						"thai": "ความโกรธของพวกเจ้าจะกลืนกินนางในไม่ช้า",
						"hindi": "तुम्हारा क्रोध जल्द ही उसे निगल जाएगा।"
					}
				},
				{
					"content": {
						"korean": "거대한 그림자가 탐욕스럽게 웃었다.",
						"english": "The massive shadow cackled greedily.",
						"japanese": "巨大な影は貪欲に笑った。",
						"chinese": "巨大的黑影贪婪地笑着。",
						"french": "L'immense ombre ricana avidement.",
						"spanish": "La enorme sombra se rió con avidez.",
						"vietnamese": "Bóng tối khổng lồ cười tham lam.",
						"thai": "เงาขนาดใหญ่หัวเราะอย่างโลภ",
						"hindi": "विशाल परछाई लालची होकर हँसी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
