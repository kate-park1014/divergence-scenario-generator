export const scenario_hell_amethysttome_13_02 = {
	"scenario_id": "hell_amethysttome_13_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"brim": {
			"id": "mon_d7f57824-190d-40b9-93d1-66c658f0441f",
			"name": {
				"korean": "브림",
				"english": "Brim",
				"japanese": "ブリム",
				"chinese": "布里姆",
				"french": "Brim",
				"spanish": "Brim",
				"vietnamese": "Brim",
				"thai": "บริม",
				"hindi": "ब्रिम"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/08ad0e4d-214d-43b3-dc3e-ddfba9049300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/16f1def2-7c33-4558-4b21-9c3e87fa3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "현실이 뒤틀리고, 환영이 아가리를 벌렸다.",
						"english": "Reality twisted, and illusions gaped.",
						"japanese": "現実が歪み、幻影が口を開けた。",
						"chinese": "现实扭曲，幻象张开了口。",
						"french": "La réalité s'est tordue, et les illusions ont béé.",
						"spanish": "La realidad se distorsionó, y las ilusiones se abrieron.",
						"vietnamese": "Thực tại vặn vẹo, ảo ảnh há miệng.",
						"thai": "ความจริงบิดเบี้ยว ภาพลวงตาเผยอขึ้น",
						"hindi": "वास्तविकता विकृत हो गई, और भ्रम ने मुंह खोल दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "여기가… 어디지?",
						"english": "Where... am I?",
						"japanese": "ここは…どこだ？",
						"chinese": "这里…是哪里？",
						"french": "Où… suis-je ?",
						"spanish": "¿Dónde… estoy?",
						"vietnamese": "Đây là… đâu?",
						"thai": "ที่นี่… ที่ไหน?",
						"hindi": "यह… कहाँ है?"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "심연의 틈새로, 고통스럽게 묶인 그림자들이 보였다.",
						"english": "Through the abyss's chasm, agonizingly bound shadows were seen.",
						"japanese": "深淵の裂け目から、苦痛に縛られた影が見えた。",
						"chinese": "透过深渊的裂缝，看到了痛苦地被束缚的影子。",
						"french": "À travers le gouffre abyssal, des ombres douloureusement liées étaient visibles.",
						"spanish": "A través del abismo, se vieron sombras atadas con agonía.",
						"vietnamese": "Qua khe nứt của vực thẳm, những bóng hình bị trói buộc đau đớn hiện ra.",
						"thai": "ผ่านรอยแยกแห่งห้วงลึก เห็นเงาที่ถูกพันธนาการอย่างเจ็บปวด",
						"hindi": "खाई की दरार से, दर्दनाक रूप से बंधी हुई परछाइयाँ दिखाई दीं।"
					}
				},
				{
					"speaker": "brim",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "어서 와. 이곳은 너의 지옥.",
						"english": "Welcome. This is your hell.",
						"japanese": "ようこそ。ここは君の地獄だ。",
						"chinese": "欢迎。这里是你的地狱。",
						"french": "Bienvenue. C'est ton enfer.",
						"spanish": "Bienvenido. Este es tu infierno.",
						"vietnamese": "Chào mừng. Đây là địa ngục của ngươi.",
						"thai": "ยินดีต้อนรับ ที่นี่คือนรกของเจ้า",
						"hindi": "स्वागत है। यह तुम्हारा नर्क है।"
					},
					"speaker": "brim",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "누구야?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ใครน่ะ?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"content": {
						"korean": "탈출구는 없어. 이곳은 시작부터 끝까지, 모두 너의 환영.",
						"english": "There's no escape. This place, from start to finish, is all your illusion.",
						"japanese": "逃げ場はない。ここは最初から最後まで、全て君の幻影だ。",
						"chinese": "没有出路。这个地方，从始至终，都是你的幻象。",
						"french": "Il n'y a pas d'échappatoire. Cet endroit, du début à la fin, n'est que ton illusion.",
						"spanish": "No hay escape. Este lugar, de principio a fin, es toda tu ilusión.",
						"vietnamese": "Không có lối thoát. Nơi đây, từ đầu đến cuối, đều là ảo ảnh của ngươi.",
						"thai": "ไม่มีทางหนี ที่นี่ตั้งแต่ต้นจนจบ ล้วนเป็นภาพลวงตาของเจ้า",
						"hindi": "कोई बच निकलने का रास्ता नहीं है। यह जगह, शुरू से अंत तक, तुम्हारी ही कल्पना है।"
					},
					"emotion": "sad",
					"speaker": "brim",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영은 더욱 선명해졌다. 과거의 비명이 귓가를 맴돌았다.",
						"english": "The illusion grew clearer. Screams from the past echoed in my ears.",
						"japanese": "幻はさらに鮮明になった。過去の悲鳴が耳元で響いた。",
						"chinese": "幻象更加清晰了。过去的尖叫声在我耳边回荡。",
						"french": "L'illusion devint plus nette. Les cris du passé résonnaient à mes oreilles.",
						"spanish": "La ilusión se volvió más nítida. Los gritos del pasado resonaron en mis oídos.",
						"vietnamese": "Ảo ảnh trở nên rõ ràng hơn. Tiếng thét từ quá khứ văng vẳng bên tai.",
						"thai": "ภาพหลอนชัดเจนขึ้น เสียงกรีดร้องจากอดีตก้องอยู่ในหู",
						"hindi": "भ्रम और भी स्पष्ट हो गया। अतीत की चीखें मेरे कानों में गूंज रही थीं।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 계속 반복돼.",
						"english": "Damn it… It keeps repeating.",
						"japanese": "くそっ… 繰り返される。",
						"chinese": "该死…… 不断重复。",
						"french": "Merde… Ça ne cesse de se répéter.",
						"spanish": "Maldita sea… Se sigue repitiendo.",
						"vietnamese": "Chết tiệt… Cứ lặp đi lặp lại.",
						"thai": "ให้ตายสิ… มันวนซ้ำไปมา",
						"hindi": "धिक्कार है… यह दोहराता रहता है।"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"speaker": "brim",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알아챘나? 네가 겪는 모든 고통은 '의지'가 조작한 기록.",
						"english": "Noticed it yet? All the pain you suffer is a record manipulated by 'Will'.",
						"japanese": "気づいたか？ お前が経験する全ての苦痛は、「意志」が操作した記録だ。",
						"chinese": "察觉到了吗？你所遭受的一切痛苦，都是“意志”操纵的记录。",
						"french": "Tu l'as remarqué ? Toute la douleur que tu subis est un enregistrement manipulé par la « Volonté ».",
						"spanish": "Ya te diste cuenta? Todo el dolor que sufres es un registro manipulado por la 'Voluntad'.",
						"vietnamese": "Nhận ra chưa? Mọi nỗi đau ngươi phải chịu đều là ký ức bị \"Ý chí\" thao túng.",
						"thai": "สังเกตเห็นแล้วหรือยัง? ความเจ็บปวดทั้งหมดที่เจ้าเผชิญคือบันทึกที่ถูก \"เจตจำนง\" บงการ",
						"hindi": "क्या तुमने ध्यान दिया? तुम्हारे द्वारा भुगता गया हर दर्द 'इच्छा' द्वारा हेरफेर किया गया एक रिकॉर्ड है।"
					}
				},
				{
					"content": {
						"korean": "…뭐라고?",
						"english": "…What?",
						"japanese": "…なんだと？",
						"chinese": "……你说什么？",
						"french": "…Quoi ?",
						"spanish": "…¿Qué dices?",
						"vietnamese": "…Cái gì?",
						"thai": "…อะไรนะ?",
						"hindi": "…क्या कहा?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "이 지옥의 기록은, 누군가의 뜻대로 쓰여지고 있다.",
						"english": "This record of hell is being written according to someone's will.",
						"japanese": "この地獄の記録は、誰かの意思によって書かれている。",
						"chinese": "这地狱的记录，正被某人的意志书写着。",
						"french": "Ce récit infernal est écrit selon la volonté de quelqu'un.",
						"spanish": "Este registro del infierno está siendo escrito según la voluntad de alguien.",
						"vietnamese": "Ký ức địa ngục này đang được viết theo ý muốn của ai đó.",
						"thai": "บันทึกนรกนี้กำลังถูกเขียนขึ้นตามเจตจำนงของใครบางคน",
						"hindi": "नरक का यह रिकॉर्ड किसी की इच्छा के अनुसार लिखा जा रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "심연은 더욱 깊어졌다. 현실과의 경계가 흐릿해졌다.",
						"english": "The abyss deepened. The boundary with reality blurred.",
						"japanese": "深淵はさらに深くなった。現実との境界が曖昧になった。",
						"chinese": "深渊更深了。与现实的界限变得模糊。",
						"french": "L'abîme s'approfondit. La frontière avec la réalité s'est estompée.",
						"spanish": "El abismo se hizo más profundo. La frontera con la realidad se difuminó.",
						"vietnamese": "Vực thẳm sâu hơn. Ranh giới với thực tại đã mờ đi.",
						"thai": "ห้วงลึกดำดิ่งลงไปอีก เส้นแบ่งกับความเป็นจริงเลือนรางลง",
						"hindi": "खाई और गहरी होती गई। वास्तविकता से सीमा धुंधली हो गई।"
					}
				},
				{
					"content": {
						"korean": "기록… 조작이라니?",
						"english": "A record… manipulated?",
						"japanese": "記録… 操作だと？",
						"chinese": "记录…… 操纵？",
						"french": "Un enregistrement… manipulé ?",
						"spanish": "¿Un registro… manipulado?",
						"vietnamese": "Ký ức… bị thao túng ư?",
						"thai": "บันทึก… บงการหรือ?",
						"hindi": "एक रिकॉर्ड… हेरफेर किया गया?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "brim",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "brim",
					"type": "speech",
					"content": {
						"korean": "과거의 비극은 현재를 반복하고, 미래를 예견하지.",
						"english": "Tragedies of the past repeat in the present, foretelling the future.",
						"japanese": "過去の悲劇は現在を繰り返し、未来を予見する。",
						"chinese": "过去的悲剧重演现在，预示着未来。",
						"french": "Les tragédies du passé se répètent au présent, annonçant l'avenir.",
						"spanish": "Las tragedias del pasado se repiten en el presente, prediciendo el futuro.",
						"vietnamese": "Bi kịch quá khứ lặp lại ở hiện tại, tiên đoán tương lai.",
						"thai": "โศกนาฏกรรมในอดีตย้อนรอยมาในปัจจุบัน พยากรณ์ถึงอนาคต",
						"hindi": "अतीत की त्रासदी वर्तमान में दोहराई जाती है, भविष्य की भविष्यवाणी करती है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 우리는… 벗어날 수 없다는 거야?",
						"english": "So we… can't escape?",
						"japanese": "じゃあ私たちは… 逃れられないのか？",
						"chinese": "那我们…… 无法逃脱吗？",
						"french": "Alors nous… ne pouvons pas nous échapper ?",
						"spanish": "¿Entonces nosotros… no podemos escapar?",
						"vietnamese": "Vậy là chúng ta… không thể thoát khỏi ư?",
						"thai": "งั้นพวกเรา… หนีไม่พ้นหรือ?",
						"hindi": "तो हम… बच नहीं सकते?"
					}
				},
				{
					"speaker": "brim",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 영원히 갇혀. 여기가 너의 영원한 무덤.",
						"english": "Yes. Trapped forever. This is your eternal tomb.",
						"japanese": "そうだ。永遠に閉じ込められる。ここがお前の永遠の墓場だ。",
						"chinese": "是的。永远被困。这里是你的永恒坟墓。",
						"french": "Oui. Piégé pour toujours. C'est ta tombe éternelle.",
						"spanish": "Sí. Atrapado para siempre. Esta es tu tumba eterna.",
						"vietnamese": "Đúng vậy. Mắc kẹt mãi mãi. Đây là ngôi mộ vĩnh cửu của ngươi.",
						"thai": "ใช่ ติดอยู่ในนี้ตลอดไป ที่นี่คือหลุมฝังศพชั่วนิรันดร์ของเจ้า",
						"hindi": "हाँ। हमेशा के लिए फँस गए। यह तुम्हारी शाश्वत कब्र है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 빛조차 삼켜버린 어둠. 돌아올 수 없는 길이었다.",
						"english": "Darkness swallowed even the faint light. It was a path of no return.",
						"japanese": "微かな光さえ飲み込んだ闇。戻れない道だった。",
						"chinese": "连微弱的光都被黑暗吞噬。这是一条不归路。",
						"french": "Les ténèbres avaient englouti même la faible lumière. C'était un chemin sans retour.",
						"spanish": "La oscuridad había engullido incluso la tenue luz. Era un camino sin retorno.",
						"vietnamese": "Bóng tối nuốt chửng cả ánh sáng mờ nhạt. Đó là con đường một chiều.",
						"thai": "ความมืดกลืนกินแม้กระทั่งแสงที่ริบหรี่ มันคือหนทางที่ไม่มีวันกลับ",
						"hindi": "अंधेरे ने धुंधली रोशनी को भी निगल लिया था। यह एक ऐसा रास्ता था जहाँ से लौटना असंभव था。"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니야… 내가 이 지옥을 끝낼 거야.",
						"english": "No... I'll end this hell.",
						"japanese": "違う…私がこの地獄を終わらせる。",
						"chinese": "不…我将终结这地狱。",
						"french": "Non... Je vais mettre fin à cet enfer.",
						"spanish": "No... Yo acabaré con este infierno.",
						"vietnamese": "Không… Ta sẽ kết thúc địa ngục này.",
						"thai": "ไม่... ฉันจะจบสิ้นนรกนี้เอง",
						"hindi": "नहीं... मैं इस नरक को खत्म कर दूँगा।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					],
					"speaker": "brim",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "base",
					"content": {
						"korean": "어리석은 용기. '의지'의 계획은 완벽해.",
						"english": "Foolish courage. 'The Will's' plan is perfect.",
						"japanese": "愚かな勇気。「意思」の計画は完璧だ。",
						"chinese": "愚蠢的勇气。‘意志’的计划是完美的。",
						"french": "Courage insensé. Le plan de 'La Volonté' est parfait.",
						"spanish": "Valor insensato. El plan de 'La Voluntad' es perfecto.",
						"vietnamese": "Dũng khí ngu xuẩn. Kế hoạch của 'Ý Chí' là hoàn hảo.",
						"thai": "ความกล้าหาญที่โง่เขลา แผนการของ 'เจตจำนง' นั้นสมบูรณ์แบบ",
						"hindi": "मूर्खतापूर्ण साहस। 'इच्छाशक्ति' की योजना एकदम सही है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 그 '의지' 짓이라고?",
						"english": "All this... is 'The Will's' doing?",
						"japanese": "これら全てが…あの「意思」の仕業だと？",
						"chinese": "这一切…都是‘意志’所为？",
						"french": "Tout cela... est l'œuvre de 'La Volonté' ?",
						"spanish": "¿Todo esto... es obra de 'La Voluntad'?",
						"vietnamese": "Tất cả chuyện này… là do 'Ý Chí' gây ra ư?",
						"thai": "ทั้งหมดนี่... เป็นฝีมือของ 'เจตจำนง' งั้นหรือ?",
						"hindi": "यह सब... क्या 'इच्छाशक्ति' का काम है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "brim",
					"content": {
						"korean": "그래. 그리고 넌, 그 거대한 그림자의 손아귀에 갇힌 먹잇감일 뿐.",
						"english": "Yes. And you, you're just prey caught in the clutches of that colossal shadow.",
						"japanese": "そうだ。そしてお前は、その巨大な影の掌中に囚われた餌食に過ぎない。",
						"chinese": "没错。而你，不过是被那巨大阴影困住的猎物罢了。",
						"french": "Oui. Et toi, tu n'es qu'une proie piégée dans les griffes de cette ombre colossale.",
						"spanish": "Sí. Y tú, solo eres una presa atrapada en las garras de esa sombra colosal.",
						"vietnamese": "Đúng vậy. Và ngươi, chỉ là con mồi bị mắc kẹt trong nanh vuốt của cái bóng khổng lồ đó.",
						"thai": "ใช่แล้ว และเจ้าก็เป็นเพียงเหยื่อที่ติดอยู่ในเงื้อมมือของเงามหึมานั้น",
						"hindi": "हाँ। और तुम, तुम उस विशाल छाया के चंगुल में फँसे हुए शिकार मात्र हो।"
					}
				},
				{
					"content": {
						"korean": "개소리 마!",
						"english": "Shut your trap!",
						"japanese": "でたらめ言うな！",
						"chinese": "别胡说！",
						"french": "La ferme !",
						"spanish": "¡Cállate!",
						"vietnamese": "Câm mồm!",
						"thai": "หุบปากซะ!",
						"hindi": "बकवास बंद करो!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "환영의 중심에서, 거대한 그림자가 기다리고 있었다.",
						"english": "At the heart of the illusion, a colossal shadow waited.",
						"japanese": "幻影の中心で、巨大な影が待ち構えていた。",
						"chinese": "在幻象的中心，一个巨大的阴影正在等待。",
						"french": "Au cœur de l'illusion, une ombre colossale attendait.",
						"spanish": "En el corazón de la ilusión, una sombra colosal esperaba.",
						"vietnamese": "Ở trung tâm của ảo ảnh, một bóng hình khổng lồ đang chờ đợi.",
						"thai": "ณ ใจกลางของภาพลวงตา เงาขนาดมหึมารออยู่",
						"hindi": "भ्रम के केंद्र में, एक विशाल छाया प्रतीक्षा कर रही थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "드디어 여기까지 왔군. 애썼다.",
						"english": "You've finally made it. Well done.",
						"japanese": "ついにここまで来たか。よくやった。",
						"chinese": "终于来到这里了。辛苦了。",
						"french": "Tu es enfin arrivé ici. Bien joué.",
						"spanish": "Finalmente has llegado hasta aquí. Bien hecho.",
						"vietnamese": "Cuối cùng ngươi cũng đã đến đây. Ngươi đã cố gắng rất nhiều.",
						"thai": "ในที่สุดเจ้าก็มาถึงที่นี่ ทำได้ดีมาก",
						"hindi": "आखिरकार तुम यहाँ तक पहुँच गए। शाबाश।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 조작한 거야?",
						"english": "You manipulated all of this?",
						"japanese": "お前がこの全てを操っていたのか？",
						"chinese": "这一切都是你操纵的？",
						"french": "C'est toi qui as manipulé tout cela ?",
						"spanish": "¿Manipulaste todo esto?",
						"vietnamese": "Ngươi đã thao túng tất cả những thứ này ư?",
						"thai": "เจ้าบงการทั้งหมดนี้หรือ?",
						"hindi": "क्या यह सब तुमने ही किया है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "기록은 나의 뜻대로 쓰여진다. 네 운명도 마찬가지.",
						"english": "Records are written according to my will. So is your fate.",
						"japanese": "記録は私の意のままに書かれる。お前の運命も同様に。",
						"chinese": "记录将按我的意愿书写。你的命运也一样。",
						"french": "Les annales sont écrites selon ma volonté. Ton destin aussi.",
						"spanish": "Los registros se escriben según mi voluntad. Tu destino también.",
						"vietnamese": "Các ghi chép được viết theo ý muốn của ta. Vận mệnh của ngươi cũng vậy.",
						"thai": "บันทึกถูกเขียนขึ้นตามเจตจำนงของข้า ชะตากรรมของเจ้าก็เช่นกัน",
						"hindi": "अभिलेख मेरी इच्छा के अनुसार लिखे जाते हैं। तुम्हारा भाग्य भी।"
					}
				},
				{
					"speaker": "brim",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "brim",
					"emotion": "sad",
					"content": {
						"korean": "…어리석은 짓 하지 마. 벗어날 수 없어.",
						"english": "...Don't be foolish. You can't escape.",
						"japanese": "...愚かな真似はよせ。逃れることはできん。",
						"chinese": "...别做傻事。你逃不掉的。",
						"french": "...Ne fais rien de stupide. Tu ne peux pas t'échapper.",
						"spanish": "...No hagas ninguna estupidez. No puedes escapar.",
						"vietnamese": "...Đừng làm chuyện ngu xuẩn. Ngươi không thể thoát được đâu.",
						"thai": "...อย่าทำเรื่องโง่ๆ เลย. หนีไม่พ้นหรอก.",
						"hindi": "...बेवकूफी मत करो। तुम बच नहीं सकते।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "잔말 말고 물러서라, 브림.",
						"english": "Enough talk. Stand down, Brim.",
						"japanese": "口答えするな。退がれ、ブリム。",
						"chinese": "别废话了。退下，布里姆。",
						"french": "Assez parlé. Recule, Brim.",
						"spanish": "Basta de charla. Retírate, Brim.",
						"vietnamese": "Đừng nhiều lời nữa. Lui lại đi, Brim.",
						"thai": "พอได้แล้ว. ถอยไป, บริม.",
						"hindi": "बहुत हो गया। हट जाओ, ब्रिम।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"speaker": "brim",
					"type": "direction",
					"action": "exit"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "닥쳐! 여기서 끝낼 거야!",
						"english": "Silence! I'll end it here!",
						"japanese": "黙れ！ここで終わらせる！",
						"chinese": "闭嘴！我今天就要在这里解决你！",
						"french": "Tais-toi ! J'en finirai ici !",
						"spanish": "¡Cállate! ¡Lo terminaré aquí!",
						"vietnamese": "Câm miệng! Ta sẽ kết thúc nó ở đây!",
						"thai": "หุบปาก! ฉันจะจบมันที่นี่แหละ!",
						"hindi": "चुप रहो! मैं इसे यहीं खत्म करूँगा!"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "환영의 칼날이 심장을 관통했다.",
						"english": "The blade of illusion pierced through the heart.",
						"japanese": "幻影の刃が心臓を貫いた。",
						"chinese": "幻影之刃刺穿了心脏。",
						"french": "La lame de l'illusion transperça le cœur.",
						"spanish": "La hoja de la ilusión atravesó el corazón.",
						"vietnamese": "Lưỡi dao ảo ảnh đâm xuyên tim.",
						"thai": "คมดาบแห่งภาพลวงตาแทงทะลุหัวใจ",
						"hindi": "भ्रम की तलवार ने हृदय को भेद दिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 아직은…!",
						"english": "Not yet... Not yet...!",
						"japanese": "まだ…まだだ…！",
						"chinese": "还…还不行…！",
						"french": "Pas encore... Pas encore...!",
						"spanish": "Todavía no... ¡Todavía no...!",
						"vietnamese": "Chưa... chưa được...!",
						"thai": "ยัง... ยังไม่ใช่...!",
						"hindi": "अभी नहीं... अभी नहीं...!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "발버둥 쳐봐야 소용없다. 이 기록은 영원히 반복될 테니.",
						"english": "Struggling is useless. This record will repeat forever.",
						"japanese": "もがいても無駄だ。この記録は永遠に繰り返されるだろう。",
						"chinese": "挣扎也是徒劳。这份记录将永远重复。",
						"french": "Lutter est inutile. Ce registre se répétera éternellement.",
						"spanish": "Luchar es inútil. Este registro se repetirá para siempre.",
						"vietnamese": "Chống cự cũng vô ích thôi. Kỷ lục này sẽ lặp lại mãi mãi.",
						"thai": "ดิ้นรนไปก็เปล่าประโยชน์ บันทึกนี้จะวนซ้ำไปตลอดกาล",
						"hindi": "संघर्ष करना व्यर्थ है। यह रिकॉर्ड हमेशा दोहराया जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다시, 고통받아라.",
						"english": "Suffer again.",
						"japanese": "再び、苦しめ。",
						"chinese": "再次受苦吧。",
						"french": "Souffre à nouveau.",
						"spanish": "Sufre de nuevo.",
						"vietnamese": "Lại chịu đau khổ đi.",
						"thai": "จงทนทุกข์อีกครั้ง",
						"hindi": "फिर से पीड़ा सहो।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 내 '의지'는… 사라지지 않아… 새로운 기록으로… 다시….",
						"english": "Ugh... My 'will'... won't disappear... Into a new record... again...",
						"japanese": "くっ…私の「意志」は…消えぬ…新たな記録として…再び…",
						"chinese": "呃…我的“意志”…不会消失…以新的记录…再次…",
						"french": "Ugh... Ma 'volonté'... ne disparaîtra pas... Dans un nouveau registre... encore...",
						"spanish": "Ugh... Mi 'voluntad'... no desaparecerá... En un nuevo registro... de nuevo...",
						"vietnamese": "Khụ... 'Ý chí' của ta... sẽ không biến mất... Với một kỷ lục mới... lần nữa...",
						"thai": "อึก... 'เจตจำนง' ของฉัน... ไม่หายไปหรอก... ในบันทึกใหม่... อีกครั้ง...",
						"hindi": "उफ़... मेरी 'इच्छा'... गायब नहीं होगी... एक नए रिकॉर्ड में... फिर से..."
					}
				},
				{
					"content": {
						"korean": "이 지옥… 내가 부술 거야.",
						"english": "This hell... I'll break it.",
						"japanese": "この地獄…私が壊す。",
						"chinese": "这个地狱…我来打破。",
						"french": "Cet enfer... Je le briserai.",
						"spanish": "Este infierno... Lo destruiré.",
						"vietnamese": "Địa ngục này... ta sẽ phá hủy nó.",
						"thai": "นรกนี่... ฉันจะทำลายมันเอง.",
						"hindi": "यह नर्क... मैं इसे तोड़ दूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뒤틀린 환영이 걷히고, 고통의 서고에 침묵이 찾아왔다.",
						"english": "The distorted illusion receded, and silence fell upon the library of pain.",
						"japanese": "歪んだ幻影は晴れ、苦痛の書庫に沈黙が訪れた。",
						"chinese": "扭曲的幻象消散，痛苦的图书馆陷入了沉默。",
						"french": "L'illusion distordue s'est dissipée, et le silence est tombé sur la bibliothèque de la douleur.",
						"spanish": "La ilusión distorsionada se disipó, y el silencio cayó sobre la biblioteca del dolor.",
						"vietnamese": "Ảo ảnh méo mó tan biến, và sự im lặng bao trùm thư viện của nỗi đau.",
						"thai": "ภาพลวงตาที่บิดเบี้ยวจางหายไป ความเงียบเข้าปกคลุมห้องสมุดแห่งความเจ็บปวด",
						"hindi": "विकृत भ्रम दूर हो गया, और दर्द के पुस्तकालय में सन्नाटा छा गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 알 수 없는 불안감이 남아있었다. 끝이, 아니었다.",
						"english": "But an unsettling feeling remained. It wasn't the end.",
						"japanese": "しかし、得体の知れない不安感が残っていた。終わりでは、なかった。",
						"chinese": "然而，一种莫名的不安感依然存在。这不是结束。",
						"french": "Mais une anxiété indéfinissable persistait. Ce n'était pas la fin.",
						"spanish": "Pero una inquietud desconocida persistía. No era el final.",
						"vietnamese": "Tuy nhiên, một cảm giác bất an không tên vẫn còn đó. Đây chưa phải là kết thúc.",
						"thai": "แต่ความรู้สึกไม่สบายใจที่อธิบายไม่ได้ยังคงอยู่ นี่ไม่ใช่จุดจบ",
						"hindi": "लेकिन एक अज्ञात बेचैनी बनी रही। यह अंत नहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"환영의 미로. 끝없는 고통의 기록.",
			"심연의 틈새에서, 묶인 그림자들이 울부짖는다.",
			"벗어날 수 없는 루프. 이것은 저주일까, 운명일까.",
			"어떤 '의지'가 이 모든 것을 조작하고 있다."
		],
		"english": [
			"Labyrinth of Illusions. A record of endless suffering.",
			"From the abyss's chasm, bound shadows wail.",
			"An inescapable loop. Is this a curse, or fate?",
			"Some 'will' manipulates all of this."
		],
		"japanese": [
			"幻影の迷宮。終わりのない苦痛の記録。",
			"深淵の裂け目から、縛られた影が慟哭する。",
			"逃れられないループ。これは呪いか、それとも運命か。",
			"ある「意思」が、この全てを操っている。"
		],
		"chinese": [
			"幻影迷宫。无尽痛苦的记录。",
			"在深渊的裂缝中，被束缚的影子在哀嚎。",
			"一个无法逃脱的循环。这是诅咒，还是命运？",
			"某种“意志”正在操纵这一切。"
		],
		"french": [
			"Le labyrinthe des illusions. Un registre de souffrance éternelle.",
			"Du gouffre abyssal, des ombres liées hurlent.",
			"Une boucle inéluctable. Est-ce une malédiction, ou le destin ?",
			"Une certaine 'volonté' manipule tout cela."
		],
		"spanish": [
			"El laberinto de las ilusiones. Un registro de sufrimiento sin fin.",
			"Desde el abismo, las sombras atadas lamentan.",
			"Un bucle ineludible. ¿Es esto una maldición o el destino?",
			"Alguna 'voluntad' manipula todo esto."
		],
		"vietnamese": [
			"Mê cung ảo ảnh. Biên niên sử của khổ đau vô tận.",
			"Từ khe nứt của vực thẳm, những bóng hình bị trói buộc gào thét.",
			"Một vòng lặp không lối thoát. Đây là lời nguyền, hay số phận?",
			"Một 'ý chí' nào đó đang thao túng tất cả."
		],
		"thai": [
			"เขาวงกตแห่งภาพลวงตา บันทึกความทรมานอันไม่สิ้นสุด",
			"จากรอยแยกแห่งห้วงลึก เงาที่ถูกพันธนาการร่ำไห้",
			"วงวนที่หนีไม่พ้น นี่คือคำสาปหรือโชคชะตา?",
			" 'เจตจำนง' บางอย่างกำลังบงการทั้งหมดนี้"
		],
		"hindi": [
			"भ्रम का भूलभुलैया। अंतहीन पीड़ा का एक अभिलेख।",
			"खाई की दरार से, बंधी हुई परछाइयाँ चीखती हैं।",
			"एक अपरिहार्य लूप। क्या यह एक अभिशाप है, या भाग्य?",
			"कोई 'इच्छा' इन सब में हेरफेर कर रही है।"
		]
	}
} as const;
