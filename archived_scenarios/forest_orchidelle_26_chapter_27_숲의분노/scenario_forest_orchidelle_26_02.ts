export const scenario_forest_orchidelle_26_02 = {
	"scenario_id": "forest_orchidelle_26_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
						"korean": "숲은 점점 더 기괴한 아름다움으로 물들었다.",
						"english": "The forest was increasingly imbued with a bizarre beauty.",
						"japanese": "森はますます奇妙な美しさで染まっていった。",
						"chinese": "森林渐渐染上了一种怪异的美。",
						"french": "La forêt se teintait d'une beauté de plus en plus étrange.",
						"spanish": "El bosque se tiñó de una belleza cada vez más extraña.",
						"vietnamese": "Rừng cây càng lúc càng nhuốm một vẻ đẹp kỳ dị.",
						"thai": "ป่าถูกย้อมด้วยความงามที่แปลกประหลาดยิ่งขึ้น",
						"hindi": "जंगल अधिकाधिक विचित्र सुंदरता से रंग गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아름다움… 완벽한 조화. 너희도 느껴지지 않아?",
						"english": "Beauty... perfect harmony. Don't you feel it too?",
						"japanese": "美しさ…完璧な調和。君たちも感じないか？",
						"chinese": "美丽……完美的和谐。你们没感觉到吗？",
						"french": "La beauté... une harmonie parfaite. Ne le ressentez-vous pas aussi ?",
						"spanish": "Belleza... armonía perfecta. ¿No lo sentís vosotros también?",
						"vietnamese": "Vẻ đẹp... sự hài hòa hoàn hảo. Các ngươi không cảm nhận được sao?",
						"thai": "ความงาม... ความกลมกลืนที่สมบูรณ์แบบ พวกเธอไม่รู้สึกหรือ?",
						"hindi": "सुंदरता... पूर्ण सामंजस्य। क्या तुम्हें भी महसूस नहीं होता?"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여긴 왜 이렇게 다 예민해?",
						"english": "Why is everyone so sensitive here?",
						"japanese": "ここはなぜみんなそんなに神経質なんだ？",
						"chinese": "这里的人为什么都这么敏感？",
						"french": "Pourquoi tout le monde est si sensible ici ?",
						"spanish": "¿Por qué son todos tan sensibles aquí?",
						"vietnamese": "Sao ở đây ai cũng nhạy cảm thế?",
						"thai": "ทำไมทุกคนถึงได้อ่อนไหวขนาดนี้?",
						"hindi": "यहाँ सब इतने संवेदनशील क्यों हैं?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "아름다움을 이해하지 못하는군. 순수하지 않아.",
						"english": "You don't understand beauty. You're not pure.",
						"japanese": "美しさを理解できないんだな。純粋じゃない。",
						"chinese": "你们不懂美。不够纯粹。",
						"french": "Vous ne comprenez pas la beauté. Vous n'êtes pas purs.",
						"spanish": "No entendéis la belleza. No sois puros.",
						"vietnamese": "Ngươi không hiểu vẻ đẹp. Không thuần khiết.",
						"thai": "พวกเธอไม่เข้าใจความงาม ไม่บริสุทธิ์",
						"hindi": "तुम सुंदरता को नहीं समझते। तुम शुद्ध नहीं हो।"
					}
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
					"duration_ms": 500,
					"type": "direction",
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "봐. 이 식물들의 자태. 완벽한 균형.",
						"english": "Look. The form of these plants. Perfect balance.",
						"japanese": "見ろ。この植物たちの姿。完璧な均衡だ。",
						"chinese": "看。这些植物的姿态。完美的平衡。",
						"french": "Regardez. L'allure de ces plantes. Un équilibre parfait.",
						"spanish": "Mira. La forma de estas plantas. Equilibrio perfecto.",
						"vietnamese": "Nhìn xem. Dáng vẻ của những loài cây này. Cân bằng hoàn hảo.",
						"thai": "ดูสิ รูปร่างของพืชเหล่านี้ ความสมดุลที่สมบูรณ์แบบ",
						"hindi": "देखो। इन पौधों की आकृति। पूर्ण संतुलन।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔가… 불편해.",
						"english": "Something... feels off.",
						"japanese": "何か…居心地が悪い。",
						"chinese": "总觉得……不舒服。",
						"french": "Quelque chose... est inconfortable.",
						"spanish": "Algo... me incomoda.",
						"vietnamese": "Có gì đó... không thoải mái.",
						"thai": "บางอย่าง... ไม่สบายใจ",
						"hindi": "कुछ... असहज है।"
					}
				},
				{
					"content": {
						"korean": "불편함? 그건 네 미적 감각이 부족해서야.",
						"english": "Uncomfortable? That's just your lack of aesthetic sense.",
						"japanese": "不快？それは君の美的感覚が足りないせいだ。",
						"chinese": "不适？那只是你缺乏美感。",
						"french": "Mal à l'aise ? C'est ton manque de sens esthétique.",
						"spanish": "¿Incómodo? Eso es por tu falta de sentido estético.",
						"vietnamese": "Khó chịu à? Đó là do gu thẩm mỹ của ngươi kém cỏi thôi.",
						"thai": "ไม่สบายใจงั้นรึ? นั่นเป็นเพราะความรู้สึกด้านสุนทรียภาพของเจ้าบกพร่องต่างหาก.",
						"hindi": "असहज? वो बस तुम्हारी सौंदर्य भावना की कमी है。"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 식물들이 꿈틀거렸다.",
						"english": "The forest plants writhed.",
						"japanese": "森の植物たちがうごめいた。",
						"chinese": "森林的植物蠕动着。",
						"french": "Les plantes de la forêt se tordaient.",
						"spanish": "Las plantas del bosque se retorcieron.",
						"vietnamese": "Thực vật trong rừng cựa quậy.",
						"thai": "พืชพรรณในป่าบิดตัวไปมา.",
						"hindi": "जंगल के पौधे मरोड़ रहे थे。"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "너희의 모습은 너무… 투박해. 교정해 줄까?",
						"english": "Your forms are too... crude. Shall I refine them?",
						"japanese": "お前たちの姿はあまりにも…粗野だ。直してやろうか？",
						"chinese": "你们的形态太…粗糙了。要我修正一下吗？",
						"french": "Vos formes sont trop... rudimentaires. Je peux les corriger ?",
						"spanish": "Vuestras formas son demasiado... toscas. ¿Queréis que las corrija?",
						"vietnamese": "Dáng vẻ của các ngươi quá... thô kệch. Ta sửa lại cho nhé?",
						"thai": "รูปลักษณ์ของพวกเจ้ามันช่าง… หยาบกระด้างนัก จะให้ข้าแก้ไขให้ไหม?",
						"hindi": "तुम्हारी आकृतियाँ बहुत… भद्दी हैं। क्या मैं उन्हें ठीक कर दूँ?"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우릴 비웃는 거야?",
						"english": "Are you mocking us?",
						"japanese": "我々を嘲笑っているのか？",
						"chinese": "你在嘲笑我们吗？",
						"french": "Vous vous moquez de nous ?",
						"spanish": "¿Te estás riendo de nosotros?",
						"vietnamese": "Ngươi đang chế giễu bọn ta sao?",
						"thai": "เจ้ากำลังเยาะเย้ยพวกเราอยู่รึ?",
						"hindi": "क्या तुम हमारा मज़ाक उड़ा रहे हो?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "미의 순수성을 이해 못하는 야만인들.",
						"english": "Barbarians who don't understand the purity of beauty.",
						"japanese": "美の純粋さを理解できない野蛮人め。",
						"chinese": "不理解美之纯粹的野蛮人。",
						"french": "Des barbares qui ne comprennent pas la pureté de la beauté.",
						"spanish": "Bárbaros que no entienden la pureza de la belleza.",
						"vietnamese": "Những kẻ man rợ không hiểu được sự thuần khiết của cái đẹp.",
						"thai": "พวกคนป่าเถื่อนที่ไม่เข้าใจความบริสุทธิ์ของความงาม.",
						"hindi": "बर्बर लोग जो सौंदर्य की शुद्धता नहीं समझते।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 공격성이 더욱 노골적으로 드러났다.",
						"english": "The forest's aggression became more blatant.",
						"japanese": "森の攻撃性がより露骨に現れた。",
						"chinese": "森林的攻击性变得更加明显。",
						"french": "L'agressivité de la forêt se révéla plus ouvertement.",
						"spanish": "La agresividad del bosque se manifestó de forma más descarada.",
						"vietnamese": "Sự hung hãn của khu rừng càng lộ rõ.",
						"thai": "ความก้าวร้าวของป่าปรากฏชัดเจนยิ่งขึ้น.",
						"hindi": "जंगल की आक्रामकता और अधिक स्पष्ट रूप से सामने आई।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 숲은 예술 작품이야. 너희는 이질적 존재.",
						"english": "This forest is a work of art. You are alien presences.",
						"japanese": "この森は芸術作品だ。お前たちは異質な存在。",
						"chinese": "这片森林是艺术品。你们是异类。",
						"french": "Cette forêt est une œuvre d'art. Vous êtes des êtres étrangers.",
						"spanish": "Este bosque es una obra de arte. Vosotros sois seres extraños.",
						"vietnamese": "Khu rừng này là một tác phẩm nghệ thuật. Các ngươi là những kẻ ngoại lai.",
						"thai": "ป่าแห่งนี้คืองานศิลปะ พวกเจ้าเป็นสิ่งแปลกปลอม.",
						"hindi": "यह जंगल एक कलाकृति है। तुम बाहरी अस्तित्व हो।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우리는 우리의 방식으로 나아갈 거야.",
						"english": "We'll proceed in our own way.",
						"japanese": "私たちは私たちのやり方で進む。",
						"chinese": "我们会以我们自己的方式前进。",
						"french": "Nous allons avancer à notre manière.",
						"spanish": "Avanzaremos a nuestra manera.",
						"vietnamese": "Chúng ta sẽ tiến bước theo cách của mình.",
						"thai": "เราจะเดินหน้าไปตามทางของเราเอง.",
						"hindi": "हम अपने तरीके से आगे बढ़ेंगे।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은. 곧 알게 될 거야. 진정한 아름다움을.",
						"english": "Foolish. You'll soon learn. True beauty.",
						"japanese": "愚かだ。すぐに分かるだろう。真の美しさを。",
						"chinese": "愚蠢。你们很快就会明白。真正的美。",
						"french": "Imbéciles. Vous comprendrez bientôt. La véritable beauté.",
						"spanish": "Estúpidos. Pronto lo sabréis. La verdadera belleza.",
						"vietnamese": "Ngu xuẩn. Ngươi sẽ sớm biết thôi. Vẻ đẹp đích thực.",
						"thai": "ช่างโง่เขลา. พวกเจ้าจะได้รู้ในไม่ช้า. ถึงความงามที่แท้จริง.",
						"hindi": "मूर्ख। जल्द ही जान जाओगे। सच्ची सुंदरता।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 중심부에 가까워질수록, 광기는 심해졌다.",
						"english": "As they neared the forest's core, the madness deepened.",
						"japanese": "森の中心部に近づくにつれて、狂気は深まった。",
						"chinese": "越接近森林中心，疯狂越甚。",
						"french": "Plus ils approchaient du cœur de la forêt, plus la folie s'intensifiait.",
						"spanish": "A medida que se acercaban al centro del bosque, la locura se intensificaba.",
						"vietnamese": "Càng đến gần trung tâm khu rừng, sự điên loạn càng sâu sắc.",
						"thai": "ยิ่งเข้าใกล้ใจกลางป่ามากเท่าไร ความบ้าคลั่งก็ยิ่งทวีความรุนแรงขึ้น.",
						"hindi": "जैसे-जैसे वे जंगल के केंद्र के करीब आते गए, पागलपन गहराता गया।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마침내, 숲의 가장 깊은 곳. 왜곡된 아름다움의 정수가 기다리고 있었다.",
						"english": "Finally, in the deepest part of the forest. The essence of distorted beauty awaited.",
						"japanese": "ついに、森の最も深い場所。歪んだ美しさの真髄が待っていた。",
						"chinese": "终于，在森林的最深处。扭曲之美的精髓正在等待。",
						"french": "Enfin, au plus profond de la forêt. L'essence d'une beauté distordue attendait.",
						"spanish": "Finalmente, en lo más profundo del bosque. La esencia de una belleza distorsionada aguardaba.",
						"vietnamese": "Cuối cùng, tại nơi sâu nhất của khu rừng. Tinh túy của vẻ đẹp méo mó đang chờ đợi.",
						"thai": "ในที่สุด ณ ส่วนที่ลึกที่สุดของป่า แก่นแท้ของความงามที่บิดเบี้ยวได้รอคอยอยู่",
						"hindi": "अंततः, जंगल के सबसे गहरे हिस्से में। विकृत सौंदर्य का सार प्रतीक्षा कर रहा था।"
					}
				},
				{
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이 아름다운 숲을 감히…!",
						"english": "How dare you defile this beautiful forest...!",
						"japanese": "よくもこの美しい森を…！",
						"chinese": "你竟敢……玷污这美丽的森林！",
						"french": "Comment osez-vous… ce bois magnifique !",
						"spanish": "¡Cómo osas… este hermoso bosque!",
						"vietnamese": "Ngươi dám… khu rừng xinh đẹp này!",
						"thai": "แกกล้าดียังไง… ป่าที่สวยงามแห่งนี้!",
						"hindi": "तुमने इस सुंदर जंगल को छूने की हिम्मत कैसे की...!"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"direction": "up",
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "내 영역에 침범한 추한 것들.",
						"english": "Ugly creatures that invaded my domain.",
						"japanese": "私の領域を侵した醜い者たちよ。",
						"chinese": "入侵我领地的丑陋之物。",
						"french": "Horribles créatures qui ont envahi mon domaine.",
						"spanish": "Horribles criaturas que invadieron mi dominio.",
						"vietnamese": "Những kẻ xấu xí đã xâm phạm lãnh địa của ta.",
						"thai": "พวกอัปลักษณ์ที่รุกรานอาณาเขตของข้า",
						"hindi": "भद्दे जीव जिन्होंने मेरे क्षेत्र पर आक्रमण किया।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거지!",
						"english": "You're behind all of this!",
						"japanese": "お前が全てを企んだのか！",
						"chinese": "这一切都是你策划的！",
						"french": "C'est toi qui as manigancé tout ça !",
						"spanish": "¡Tú orquestaste todo esto!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này!",
						"thai": "แกเป็นคนบงการทั้งหมดนี้ใช่ไหม!",
						"hindi": "यह सब तुम्हारी चाल है!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이건 예술이다. 너희는 파괴자일 뿐.",
						"english": "This is art. You are nothing but destroyers.",
						"japanese": "これは芸術だ。お前たちは破壊者に過ぎない。",
						"chinese": "这是艺术。你们不过是破坏者。",
						"french": "C'est de l'art. Vous n'êtes que des destructeurs.",
						"spanish": "Esto es arte. Vosotros no sois más que destructores.",
						"vietnamese": "Đây là nghệ thuật. Các ngươi chỉ là những kẻ phá hoại.",
						"thai": "นี่คือศิลปะ พวกเจ้าเป็นแค่ผู้ทำลาย",
						"hindi": "यह कला है। तुम तो बस विनाशक हो।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리의 분노를 보여주겠어!",
						"english": "We'll show you our wrath!",
						"japanese": "我々の怒りを見せてやる！",
						"chinese": "我们会让你见识我们的愤怒！",
						"french": "Nous allons te montrer notre fureur !",
						"spanish": "¡Te mostraremos nuestra ira!",
						"vietnamese": "Chúng ta sẽ cho ngươi thấy sự phẫn nộ của chúng ta!",
						"thai": "เราจะแสดงความโกรธแค้นของเราให้แกดู!",
						"hindi": "हम तुम्हें अपना क्रोध दिखाएंगे!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아름다움을 이해 못하는 야만인들…!",
						"english": "Barbarians who can't comprehend beauty...!",
						"japanese": "美を理解できない野蛮人どもめ…！",
						"chinese": "一群不懂美的野蛮人……！",
						"french": "Barbares qui ne comprennent pas la beauté... !",
						"spanish": "¡Bárbaros que no entienden la belleza...!",
						"vietnamese": "Những kẻ man rợ không hiểu được vẻ đẹp...!",
						"thai": "พวกคนป่าเถื่อนที่ไม่เข้าใจความงาม...!",
						"hindi": "बर्बर लोग जो सौंदर्य को नहीं समझते...!"
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 내 아름다움이… 빛이….",
						"english": "Ugh... My beauty... my light...",
						"japanese": "くっ…私の美が…光が…。",
						"chinese": "呃……我的美……我的光……",
						"french": "Ugh... Ma beauté... ma lumière...",
						"spanish": "Ugh... Mi belleza... mi luz...",
						"vietnamese": "Khụ... Vẻ đẹp của ta... ánh sáng của ta...",
						"thai": "อึก... ความงามของข้า... แสงสว่างของข้า...",
						"hindi": "उफ़... मेरी सुंदरता... मेरा प्रकाश..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "겉모습만이 전부가 아니야.",
						"english": "Looks aren't everything.",
						"japanese": "見かけが全てではない。",
						"chinese": "外表并非一切。",
						"french": "L'apparence n'est pas tout.",
						"spanish": "La apariencia no lo es todo.",
						"vietnamese": "Vẻ bề ngoài không phải là tất cả.",
						"thai": "รูปลักษณ์ภายนอกไม่ใช่ทั้งหมด",
						"hindi": "केवल दिखावा ही सब कुछ नहीं है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 광란은 잠시 잦아들었지만, 왜곡된 아름다움의 그림자는 여전히 남아있었다. 다음 목표는, 더 깊은 곳에 있었다.",
						"english": "The forest's frenzy subsided for a moment, but the shadow of distorted beauty still lingered. The next objective lay deeper within.",
						"japanese": "森の狂乱は一時的に収まったが、歪んだ美しさの影は依然として残っていた。次の目標は、さらに深い場所に存在した。",
						"chinese": "森林的狂乱暂时平息，但扭曲之美的阴影依然徘徊。下一个目标，在更深处。",
						"french": "La frénésie de la forêt s'apaisa un instant, mais l'ombre de la beauté distordue persistait. Le prochain objectif se trouvait plus profondément.",
						"spanish": "El frenesí del bosque se calmó por un momento, pero la sombra de la belleza distorsionada aún persistía. El siguiente objetivo estaba más adentro.",
						"vietnamese": "Sự điên cuồng của khu rừng tạm thời lắng xuống, nhưng bóng tối của vẻ đẹp méo mó vẫn còn đó. Mục tiêu tiếp theo nằm ở nơi sâu hơn.",
						"thai": "ความคลั่งไคล้ของป่าสงบลงชั่วขณะ แต่เงาของความงามที่บิดเบี้ยวก็ยังคงอยู่ เป้าหมายต่อไปอยู่ลึกลงไปอีก",
						"hindi": "जंगल का उन्माद कुछ देर के लिए शांत हो गया, लेकिन विकृत सौंदर्य की छाया अब भी मंडरा रही थी। अगला लक्ष्य, और भी गहरे में था।"
					}
				}
			],
			"lose_dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "너희 같은 추악한 존재들은… 이 숲에 어울리지 않아.",
						"english": "Ugly beings like you... don't belong in this forest.",
						"japanese": "お前たちのような醜い存在は… この森には似合わない。",
						"chinese": "你们这些丑陋的存在……不适合这片森林。",
						"french": "Des êtres aussi hideux que vous… n'ont pas leur place dans cette forêt.",
						"spanish": "Seres horribles como vosotros… no encajan en este bosque.",
						"vietnamese": "Những kẻ xấu xí như các ngươi… không thuộc về khu rừng này.",
						"thai": "พวกเจ้าที่น่าเกลียดชัง...ไม่คู่ควรกับป่าแห่งนี้",
						"hindi": "तुम जैसे घिनौने प्राणी... इस जंगल के लिए उपयुक्त नहीं।"
					}
				},
				{
					"content": {
						"korean": "역시… 미를 모르는 야만인들. 영원히 여기서 썩어라.",
						"english": "As expected... barbarians who know nothing of beauty. Rot here forever.",
						"japanese": "やはり… 美を知らぬ蛮族め。永遠にここで朽ち果てろ。",
						"chinese": "果然……不懂美的野蛮人。永远在这里腐烂吧。",
						"french": "Comme prévu… des barbares ignorant la beauté. Pourrissez ici pour l'éternité.",
						"spanish": "Como era de esperar… bárbaros que no conocen la belleza. Pudríos aquí para siempre.",
						"vietnamese": "Quả nhiên… lũ mọi rợ không biết đến cái đẹp. Hãy thối rữa ở đây mãi mãi.",
						"thai": "สมแล้ว...พวกป่าเถื่อนที่ไม่รู้จักความงาม จงเน่าเปื่อยอยู่ที่นี่ตลอดไป",
						"hindi": "निश्चित रूप से... सुंदरता को न जानने वाले बर्बर। यहीं हमेशा के लिए सड़ो।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Todavía… no ha terminado!",
						"vietnamese": "Vẫn… chưa kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 아름다움을 강요한다.",
			"그들의 기준에 맞지 않으면 심판받는다.",
			"브라이어가 탐험대를 지켜본다.",
			"거부하는 자에게는, 오직 광란의 심판만이 기다릴 뿐."
		],
		"english": [
			"The forest enforces beauty.",
			"Those who don't meet its standards are judged.",
			"Briar watches the expedition.",
			"For those who refuse, only a frantic judgment awaits."
		],
		"japanese": [
			"森は美しさを強要する。",
			"その基準に合わなければ裁かれる。",
			"ブライアが探検隊を見守る。",
			"拒む者には、狂乱の審判だけが待っている。"
		],
		"chinese": [
			"森林强加着美丽。",
			"不符其标准者，皆受审判。",
			"布莱尔注视着探险队。",
			"对于拒绝者，只有狂乱的审判在等待。"
		],
		"french": [
			"La forêt impose sa beauté.",
			"Quiconque ne répond pas à leurs critères est jugé.",
			"Briar observe l'expédition.",
			"Pour ceux qui refusent, seul un jugement frénétique les attend."
		],
		"spanish": [
			"El bosque impone su belleza.",
			"Los que no cumplen sus estándares son juzgados.",
			"Briar observa a la expedición.",
			"Para los que se niegan, solo una sentencia frenética espera."
		],
		"vietnamese": [
			"Rừng cây ép buộc vẻ đẹp.",
			"Ai không đạt chuẩn sẽ bị phán xét.",
			"Briar dõi theo đoàn thám hiểm.",
			"Với kẻ từ chối, chỉ có phán xét cuồng loạn chờ đợi."
		],
		"thai": [
			"ป่าบังคับความงาม",
			"ผู้ใดไม่เข้าเกณฑ์จะถูกพิพากษา",
			"ไบรเออร์เฝ้ามองคณะสำรวจ",
			"สำหรับผู้ที่ปฏิเสธ มีเพียงการพิพากษาที่บ้าคลั่งรออยู่"
		],
		"hindi": [
			"जंगल सुंदरता थोपता है।",
			"यदि तुम उनके मापदंडों पर खरे नहीं उतरते, तो तुम्हारा न्याय होगा।",
			"ब्रायलर अभियान दल को देखता है।",
			"जो इनकार करते हैं, उनके लिए केवल उन्मादी न्याय ही प्रतीक्षा कर रहा है।"
		]
	}
} as const;
