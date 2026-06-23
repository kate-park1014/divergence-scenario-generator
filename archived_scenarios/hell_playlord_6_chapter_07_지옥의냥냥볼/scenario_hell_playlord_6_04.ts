export const scenario_hell_playlord_6_04 = {
	"scenario_id": "hell_playlord_6_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
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
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "이 흔적들… 보이나? 희미하지만 분명해.",
						"english": "These marks... do you see them? Faint, yet distinct.",
						"japanese": "この痕跡…見えるか？微かだが、はっきりしている。",
						"chinese": "这些痕迹……你看到了吗？虽模糊，但清晰。",
						"french": "Ces marques… les vois-tu ? Faibles, mais distinctes.",
						"spanish": "Estas marcas... ¿las ves? Tenues, pero claras.",
						"vietnamese": "Những dấu vết này... anh thấy không? Mờ nhạt, nhưng rõ ràng.",
						"thai": "รอยพวกนี้... เห็นไหม? เลือนรางแต่ชัดเจน",
						"hindi": "ये निशान... क्या तुम इन्हें देखते हो? धुंधले, फिर भी स्पष्ट।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 흔적이지? 이빨 자국인가?",
						"english": "What kind of marks? Teeth marks?",
						"japanese": "どんな痕跡だ？歯形か？",
						"chinese": "什么痕迹？是牙印吗？",
						"french": "Quelles sortes de marques ? Des marques de dents ?",
						"spanish": "¿Qué tipo de marcas? ¿Marcas de dientes?",
						"vietnamese": "Dấu vết gì vậy? Vết răng à?",
						"thai": "รอยแบบไหน? รอยฟันหรือเปล่า?",
						"hindi": "किस तरह के निशान? दाँतों के निशान हैं क्या?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니. 보통 지옥 생물의 것이 아니야. 차원 균열의 잔재와 섞여 있어.",
						"english": "No. Not from a typical hell-creature. Mixed with remnants of a dimensional rift.",
						"japanese": "いや。通常の地獄の生物のものではない。次元の裂け目の残骸と混ざり合っている。",
						"chinese": "不。不是普通地狱生物的。混杂着次元裂缝的残余。",
						"french": "Non. Pas d'une créature infernale typique. Mêlées aux vestiges d'une faille dimensionnelle.",
						"spanish": "No. No de una criatura infernal típica. Mezcladas con restos de una fisura dimensional.",
						"vietnamese": "Không. Không phải của sinh vật địa ngục thông thường. Nó lẫn với tàn dư của vết nứt chiều không gian.",
						"thai": "ไม่ใช่ ไม่ใช่ของสัตว์นรกทั่วไป ผสมกับร่องรอยของรอยแยกมิติ",
						"hindi": "नहीं। किसी सामान्य नरकीय जीव के नहीं। आयामी दरार के अवशेषों से मिले हुए हैं।"
					},
					"type": "speech",
					"speaker": "drox"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "게다가 악마들의 행동이 모순적이야.",
						"english": "Furthermore, the demons' behavior is contradictory.",
						"japanese": "さらに、悪魔たちの行動は矛盾している。",
						"chinese": "而且，恶魔们的行为很矛盾。",
						"french": "De plus, le comportement des démons est contradictoire.",
						"spanish": "Además, el comportamiento de los demonios es contradictorio.",
						"vietnamese": "Hơn nữa, hành vi của lũ quỷ thật mâu thuẫn.",
						"thai": "ยิ่งไปกว่านั้น พฤติกรรมของปีศาจยังขัดแย้งกัน",
						"hindi": "इसके अलावा, राक्षसों का व्यवहार विरोधाभासी है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "두려워하면서도 맹목적으로 장난감을 따르는 건가?",
						"english": "Fearing it, yet blindly following the toy?",
						"japanese": "恐れながらも、盲目的に「おもちゃ」に従っているのか？",
						"chinese": "既恐惧，又盲目地追随“玩具”？",
						"french": "Le craignant, mais suivant aveuglément le jouet ?",
						"spanish": "¿Temiéndolo, pero siguiendo ciegamente el juguete?",
						"vietnamese": "Sợ hãi nó, nhưng vẫn mù quáng theo món đồ chơi?",
						"thai": "กลัวมัน แต่ก็ยังตามของเล่นนั้นอย่างสุ่มสี่สุ่มห้า?",
						"hindi": "डरते हुए भी, खिलौने का आँख मूँद कर पीछा कर रहे हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정확해. 이 자국은 그들의 본능적인 공포를 자극하지만, 장난감의 유혹은 더 강해.",
						"english": "Exactly. These marks trigger their primal fear, but the toy's allure is stronger.",
						"japanese": "その通り。この痕跡は彼らの本能的な恐怖を刺激するが、「おもちゃ」の誘惑の方が強い。",
						"chinese": "没错。这些痕迹激发了他们本能的恐惧，但“玩具”的诱惑更强。",
						"french": "Exactement. Ces marques déclenchent leur peur primale, mais l'attrait du jouet est plus fort.",
						"spanish": "Exacto. Estas marcas provocan su miedo primario, pero el atractivo del juguete es más fuerte.",
						"vietnamese": "Chính xác. Những dấu vết này khơi gợi nỗi sợ bản năng của chúng, nhưng sức hấp dẫn của món đồ chơi thì mạnh hơn.",
						"thai": "ถูกต้อง รอยพวกนี้กระตุ้นความกลัวตามสัญชาตญาณของพวกมัน แต่แรงดึงดูดของของเล่นนั้นแข็งแกร่งกว่า",
						"hindi": "बिल्कुल। ये निशान उनके आदिम भय को जगाते हैं, लेकिन खिलौने का आकर्षण अधिक मजबूत है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "악마들은 장난감에 맹목적으로 숭배를 바치고 있었다.",
						"english": "The demons blindly worshipped the toy.",
						"japanese": "悪魔たちは盲目的にそのおもちゃを崇拝していた。",
						"chinese": "恶魔们盲目地崇拜着那个玩具。",
						"french": "Les démons vénéraient aveuglément le jouet.",
						"spanish": "Los demonios adoraban ciegamente el juguete.",
						"vietnamese": "Những con quỷ mù quáng tôn thờ món đồ chơi.",
						"thai": "เหล่าปีศาจบูชาของเล่นอย่างมืดบอด",
						"hindi": "दानव उस खिलौने की आँख बंद करके पूजा कर रहे थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이빨 자국은… 마치 거대한 존재가 이 우주의 경계를 뜯어먹은 듯해.",
						"english": "These teeth marks... as if a colossal entity devoured the very fabric of this universe.",
						"japanese": "この歯形は…まるで巨大な存在がこの宇宙の境界を食い破ったかのようだ。",
						"chinese": "这些牙印……就像一个巨大的存在吞噬了宇宙的边界。",
						"french": "Ces marques de dents... comme si une entité colossale avait dévoré le tissu même de cet univers.",
						"spanish": "Estas marcas de dientes... como si una entidad colosal hubiera devorado la esencia misma de este universo.",
						"vietnamese": "Những vết răng này... cứ như thể một thực thể khổng lồ đã nuốt chửng ranh giới của vũ trụ này.",
						"thai": "รอยฟันเหล่านี้...ราวกับมีบางสิ่งขนาดมหึมากลืนกินขอบเขตของจักรวาลนี้",
						"hindi": "ये दांतों के निशान... जैसे किसी विशालकाय सत्ता ने इस ब्रह्मांड की सीमाओं को निगल लिया हो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "설마, 다른 차원에서 온 거라고?",
						"english": "Could it be from another dimension?",
						"japanese": "まさか、別の次元から来たのか？",
						"chinese": "难道是从别的维度来的？",
						"french": "Serait-ce venu d'une autre dimension ?",
						"spanish": "¿Acaso viene de otra dimensión?",
						"vietnamese": "Lẽ nào nó đến từ chiều không gian khác?",
						"thai": "หรือว่ามาจากมิติอื่น?",
						"hindi": "कहीं यह किसी और आयाम से तो नहीं आया?"
					}
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럴 가능성이 높아. 이 지옥의 기원과는 완전히 다른…",
						"english": "Highly likely. Completely alien to the origins of this hell.",
						"japanese": "その可能性が高い。この地獄の起源とは全く異なる…",
						"chinese": "很有可能。和这个地狱的起源完全不同……",
						"french": "C'est fort probable. Complètement étranger aux origines de cet enfer...",
						"spanish": "Muy probable. Completamente ajeno a los orígenes de este infierno...",
						"vietnamese": "Rất có thể. Hoàn toàn khác biệt với nguồn gốc của địa ngục này...",
						"thai": "มีความเป็นไปได้สูง ต่างจากกำเนิดของนรกนี้อย่างสิ้นเชิง...",
						"hindi": "इसकी संभावना ज़्यादा है। इस नरक की उत्पत्ति से बिल्कुल अलग..."
					}
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "불쾌하지만, 진실은 항상 기묘한 곳에 있지.",
						"english": "Unpleasant, but truth always resides in the peculiar.",
						"japanese": "不快だが、真実は常に奇妙な場所にあるものだ。",
						"chinese": "令人不快，但真相总是在奇特之处。",
						"french": "Désagréable, mais la vérité se trouve toujours dans l'étrange.",
						"spanish": "Desagradable, pero la verdad siempre reside en lo peculiar.",
						"vietnamese": "Khó chịu thật, nhưng sự thật luôn nằm ở những nơi kỳ lạ.",
						"thai": "ไม่น่าพิสมัยเลย แต่ความจริงมักจะอยู่ในที่แปลกประหลาดเสมอ",
						"hindi": "अप्रिय है, लेकिन सच हमेशा अजीब जगहों पर होता है।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "우리가 찾던 'Playlord'의 실체는… 단순히 지옥의 존재가 아닐 수도 있어.",
						"english": "The true nature of the 'Playlord' we sought... might not simply be a denizen of hell.",
						"japanese": "我々が探していた「プレイロード」の実体は…単なる地獄の存在ではないのかもしれない。",
						"chinese": "我们寻找的“玩偶之主”的真面目……可能不只是地狱的存在。",
						"french": "La véritable nature du \"Playlord\" que nous cherchions... pourrait ne pas être simplement un habitant de l'enfer.",
						"spanish": "La verdadera naturaleza del 'Playlord' que buscábamos... podría no ser simplemente una entidad infernal.",
						"vietnamese": "Bản chất thực sự của 'Chúa Tể Đồ Chơi' mà chúng ta tìm kiếm... có thể không chỉ là một cư dân của địa ngục.",
						"thai": "ตัวตนที่แท้จริงของ 'Playlord' ที่เราตามหา...อาจไม่ใช่แค่สิ่งมีชีวิตจากนรก",
						"hindi": "हम जिस 'प्लेलॉर्ड' की तलाश कर रहे थे, उसका असली स्वरूप... शायद सिर्फ नरक का प्राणी न हो।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 우린 대체 뭘 쫓는 거지?",
						"english": "Then what exactly are we chasing?",
						"japanese": "ならば、我々は何を追っているんだ？",
						"chinese": "那我们到底在追逐什么？",
						"french": "Alors, qu'est-ce que nous poursuivons exactement ?",
						"spanish": "¿Entonces, qué estamos persiguiendo exactamente?",
						"vietnamese": "Vậy rốt cuộc chúng ta đang truy đuổi cái gì?",
						"thai": "แล้วเรากำลังไล่ตามอะไรกันแน่?",
						"hindi": "तो आखिर हम किस चीज़ का पीछा कर रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아직 알 수 없어. 하지만 저 장난감은 미지의 존재와 연결되어 있어.",
						"english": "We don't know yet. But that toy is connected to an unknown entity.",
						"japanese": "まだ分からない。だが、あの玩具は未知の存在と繋がっている。",
						"chinese": "尚不清楚。但那个玩具与未知存在相连。",
						"french": "Nous ne le savons pas encore. Mais ce jouet est lié à une entité inconnue.",
						"spanish": "Todavía no lo sabemos. Pero ese juguete está conectado a una entidad desconocida.",
						"vietnamese": "Vẫn chưa biết. Nhưng món đồ chơi đó có liên kết với một thực thể bí ẩn.",
						"thai": "ยังไม่รู้ แต่ของเล่นนั่นเชื่อมโยงกับสิ่งมีชีวิตปริศนา",
						"hindi": "अभी नहीं पता। लेकिन वह खिलौना किसी अज्ञात सत्ता से जुड़ा है।"
					},
					"type": "speech",
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "희미하게, 악마들의 언어가 아닌 순수한 울음소리가 들려오는 듯했다.",
						"english": "Faintly, a pure cry, not the language of demons, seemed to echo.",
						"japanese": "かすかに、悪魔の言語ではない純粋な鳴き声が聞こえるようだった。",
						"chinese": "隐约间，似乎传来一阵纯粹的哭声，并非恶魔的语言。",
						"french": "Faiblement, un pur cri, non pas le langage des démons, semblait résonner.",
						"spanish": "Débilmente, un puro lamento, no el lenguaje de los demonios, parecía resonar.",
						"vietnamese": "Mờ nhạt, một tiếng khóc thuần khiết, không phải ngôn ngữ của lũ quỷ, dường như vang vọng.",
						"thai": "แผ่วเบา เสียงร่ำไห้บริสุทธิ์ ไม่ใช่ภาษาของปีศาจ ราวกับกำลังดังก้อง",
						"hindi": "धुंधला-सा, दानवों की भाषा नहीं, बल्कि एक शुद्ध रुदन सुनाई दे रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 이빨 자국 앞에 선 정체 모를 그림자가 탐험대를 노려봤다.",
						"english": "Before the colossal teeth marks, an unknown shadow glared at the expedition team.",
						"japanese": "巨大な歯形の前で、正体不明の影が探検隊を睨みつけた。",
						"chinese": "在巨大的牙印前，一个不明身份的影子怒视着探险队。",
						"french": "Devant les marques de dents colossales, une ombre inconnue fixa l'équipe d'expédition.",
						"spanish": "Ante las colosales marcas de dientes, una sombra desconocida miró fijamente al equipo de expedición.",
						"vietnamese": "Trước những vết răng khổng lồ, một bóng đen vô danh trừng mắt nhìn đội thám hiểm.",
						"thai": "ตรงหน้าของรอยฟันขนาดมหึมา เงาปริศนาจ้องมองทีมสำรวจ",
						"hindi": "विशालकाय दांतों के निशानों के सामने, एक अज्ञात परछाई ने अन्वेषण दल को घूरा।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니. …재미있는 벌레들이군.",
						"english": "You've made it this far. ...Interesting insects.",
						"japanese": "ここまで来たか。…面白い虫たちめ。",
						"chinese": "竟能来到这里。……有趣的虫子们。",
						"french": "Vous êtes arrivés jusque-là. ...Des insectes intéressants.",
						"spanish": "Has llegado hasta aquí. ...Interesantes bichos.",
						"vietnamese": "Ngươi đã đến được đây. ...Những con sâu bọ thú vị.",
						"thai": "มาได้ถึงนี่เชียวเหรอ...พวกแมลงที่น่าสนใจ",
						"hindi": "तुम इतनी दूर तक आ गए। ...दिलचस्प कीड़े।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네놈이 이 이빨 자국의 주인인가?",
						"english": "Are you the owner of these bite marks?",
						"japanese": "貴様がこの歯形のあるじか？",
						"chinese": "你就是这些齿痕的主人吗？",
						"french": "Es-tu le maître de ces marques de crocs ?",
						"spanish": "¿Eres el dueño de estas marcas de mordeduras?",
						"vietnamese": "Ngươi là chủ nhân của những vết cắn này sao?",
						"thai": "แกคือเจ้าของรอยเขี้ยวพวกนี้งั้นรึ?",
						"hindi": "क्या तुम इन दांतों के निशानों के मालिक हो?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 {random_boss}의 흔적에 대해 묻는가. 건방진 것들.",
						"english": "How dare you ask about {random_boss}'s traces. Insolent fools.",
						"japanese": "よくも{random_boss}の痕跡について問うたな。生意気な奴らめ。",
						"chinese": "竟敢询问{random_boss}的痕迹。无礼之徒。",
						"french": "Comment osez-vous interroger sur les traces de {random_boss}. Insolents.",
						"spanish": "¿Cómo osas preguntar por las huellas de {random_boss}? Insolentes.",
						"vietnamese": "Dám hỏi về dấu vết của {random_boss} sao. Đồ xấc xược.",
						"thai": "บังอาจมาถามถึงร่องรอยของ{random_boss}งั้นรึ พวกบ้าอำนาจเอ๊ย",
						"hindi": "तुम्हारी हिम्मत कैसे हुई {random_boss} के निशानों के बारे में पूछने की। ढीठ मूर्ख।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크아악… 겨우 이 정도로… 이빨 자국의 진정한 의미를… 알 리가 없지…",
						"english": "Grr... With just this much... you couldn't possibly know... the true meaning of the bite marks...",
						"japanese": "ぐああ…たかがこれしきで…歯形の真の意味を…知るはずがない…",
						"chinese": "呃啊……就凭这点程度……不可能知道……齿痕的真正意义……",
						"french": "Ugh... Juste avec ça... vous ne pouviez pas connaître... la véritable signification des marques de crocs...",
						"spanish": "Grr... Con solo esto... no podrías conocer... el verdadero significado de las marcas de mordeduras...",
						"vietnamese": "Khụ khụ... Chỉ với chừng này... các ngươi không thể biết được... ý nghĩa thực sự của những vết cắn...",
						"thai": "กร๊าก... แค่เพียงเท่านี้... ไม่มีทางรู้... ความหมายที่แท้จริงของรอยเขี้ยว...",
						"hindi": "ग्ररर... बस इतनी सी बात पर... तुम शायद ही जान पाओगे... दांतों के निशानों का असली मतलब..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진정한 의미? 대체 누가 이런 짓을…",
						"english": "True meaning? Who... who did this?",
						"japanese": "真の意味？一体誰がこんなことを…",
						"chinese": "真正意义？究竟是谁做了这种事……",
						"french": "Véritable signification ? Qui... qui a fait ça ?",
						"spanish": "¿Verdadero significado? ¿Quién... quién hizo esto?",
						"vietnamese": "Ý nghĩa thực sự? Rốt cuộc là ai đã làm điều này...",
						"thai": "ความหมายที่แท้จริง? ใคร... ใครเป็นคนทำสิ่งนี้?",
						"hindi": "असली मतलब? किसने... किसने किया ये?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "drox",
					"content": {
						"korean": "알 수 없는 차원의 존재… 그들은 아직도 이 장난감과 함께…",
						"english": "Beings from an unknown dimension... They are still with this toy...",
						"japanese": "未知の次元の存在…彼らはまだこのおもちゃと共に…",
						"chinese": "未知次元的存在……他们仍与这玩具同在……",
						"french": "Des êtres d'une dimension inconnue... Ils sont toujours avec ce jouet...",
						"spanish": "Seres de una dimensión desconocida... Todavía están con este juguete...",
						"vietnamese": "Những sinh vật từ một chiều không gian không xác định... Chúng vẫn ở cùng với món đồ chơi này...",
						"thai": "สิ่งมีชีวิตจากมิติที่ไม่รู้จัก... พวกเขายังคงอยู่กับของเล่นชิ้นนี้...",
						"hindi": "एक अज्ञात आयाम के प्राणी... वे अभी भी इस खिलौने के साथ हैं..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "미지의 존재가 남긴 불쾌한 흔적은 여전히 남아 탐험대를 압박했다.",
						"english": "The unpleasant traces left by the unknown beings still remained, pressing upon the expedition team.",
						"japanese": "未知の存在が残した不快な痕跡は依然として残り、探検隊を圧迫した。",
						"chinese": "未知存在留下的不快痕迹依然存在，压迫着探险队。",
						"french": "Les traces désagréables laissées par les êtres inconnus subsistaient toujours, oppressant l'équipe d'expédition.",
						"spanish": "Los desagradables rastros dejados por los seres desconocidos aún permanecían, oprimiendo al equipo de expedición.",
						"vietnamese": "Những dấu vết khó chịu do các sinh vật vô danh để lại vẫn còn đó, đè nặng lên đội thám hiểm.",
						"thai": "ร่องรอยอันไม่พึงประสงค์ที่สิ่งมีชีวิตลึกลับทิ้งไว้ยังคงอยู่ กดดันทีมสำรวจ",
						"hindi": "अज्ञात प्राणियों द्वारा छोड़े गए अप्रिय निशान अभी भी बने हुए थे, जो अभियान दल पर दबाव डाल रहे थे।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "멍청한 것들. {random_boss}는 영원히 너희 위에서 놀 것이다!",
						"english": "Fools. {random_boss} will forever play above you!",
						"japanese": "愚か者ども。{random_boss}は永遠にお前たちの上で遊ぶだろう！",
						"chinese": "愚蠢的东西们。{random_boss}将永远在你们之上玩耍！",
						"french": "Imbéciles. {random_boss} jouera éternellement au-dessus de vous !",
						"spanish": "Necios. ¡{random_boss} jugará por siempre sobre vosotros!",
						"vietnamese": "Đồ ngốc. {random_boss} sẽ mãi mãi đùa giỡn trên đầu các ngươi!",
						"thai": "พวกโง่เง่า {random_boss}จะเล่นอยู่เหนือพวกแกตลอดไป!",
						"hindi": "मूर्खों। {random_boss} हमेशा तुम्हारे ऊपर खेलेगा!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기할 순 없어!",
						"english": "It's not... over yet. I can't give up!",
						"japanese": "まだ…終わってない。諦めるわけにはいかない！",
						"chinese": "还没……结束。不能放弃！",
						"french": "Ce n'est pas... encore fini. Je ne peux pas abandonner !",
						"spanish": "Aún no... ha terminado. ¡No puedo rendirme!",
						"vietnamese": "Vẫn chưa... kết thúc. Không thể từ bỏ được!",
						"thai": "ยังไม่... จบลง ฉันยอมแพ้ไม่ได้!",
						"hindi": "अभी... खत्म नहीं हुआ है। मैं हार नहीं मान सकता!"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"지옥의 틈새, 이제 우주가 찢긴 흔적이 드러났다.",
			"거대한 이빨 자국은 모든 논리를 부쉈다.",
			"드록스는 속삭였다. 이건 지옥의 것이 아니라고.",
			"진실은 불쾌하게, 점점 더 가까워지고 있었다."
		],
		"english": [
			"The Hellmouth, now revealing the scars of a torn universe.",
			"Massive teeth marks shattered all logic.",
			"Droks whispered, \"This is not of Hell.\"",
			"The truth, unsettling, was drawing ever closer."
		],
		"japanese": [
			"ヘルマウス、宇宙が引き裂かれた痕跡を今や露わにしている。",
			"巨大な歯形がすべての論理を打ち砕いた。",
			"ドロックスは囁いた。「これは地獄のものではない。」",
			"不穏な真実が、ますます近づいていた。"
		],
		"chinese": [
			"地狱之口，宇宙撕裂的痕迹如今显现。",
			"巨大的牙印击碎了所有逻辑。",
			"德罗克斯低语道：“这不是地狱之物。”",
			"真相令人不安，且越来越近。"
		],
		"french": [
			"La Gueule de l'Enfer, révélant désormais les cicatrices d'un univers déchiré.",
			"D'énormes marques de dents brisaient toute logique.",
			"Droks murmura : « Ceci n'est pas de l'Enfer. »",
			"La vérité, dérangeante, se rapprochait de plus en plus."
		],
		"spanish": [
			"La Boca del Infierno, revelando ahora las cicatrices de un universo desgarrado.",
			"Enormes marcas de dientes destrozaron toda lógica.",
			"Droks susurró: «Esto no es del Infierno.»",
			"La verdad, inquietante, se acercaba cada vez más."
		],
		"vietnamese": [
			"Cổng Địa Ngục, giờ đây hé lộ những vết sẹo của một vũ trụ tan vỡ.",
			"Những vết răng khổng lồ phá vỡ mọi logic.",
			"Droks thì thầm: \"Cái này không phải của Địa Ngục.\"",
			"Sự thật, đáng lo ngại, đang đến gần hơn bao giờ hết."
		],
		"thai": [
			"ปากนรก, บัดนี้เผยให้เห็นรอยแผลของการฉีกขาดของจักรวาล",
			"รอยฟันขนาดมหึมาทำลายตรรกะทั้งหมด",
			"ดรอกส์กระซิบว่า \"นี่ไม่ใช่ของนรก\"",
			"ความจริงที่น่ารบกวนกำลังเข้ามาใกล้ขึ้นเรื่อยๆ"
		],
		"hindi": [
			"नरकद्वार, अब ब्रह्मांड के फटे हुए निशान उजागर कर रहा है।",
			"विशाल दाँतों के निशान ने सभी तर्क को तोड़ दिया।",
			"ड्रोक्स ने फुसफुसाया, \"यह नरक का नहीं है।\"",
			"सच्चाई, असहज करने वाली, और करीब आती जा रही थी।"
		]
	}
} as const;
