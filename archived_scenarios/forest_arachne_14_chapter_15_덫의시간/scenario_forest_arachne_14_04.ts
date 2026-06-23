export const scenario_forest_arachne_14_04 = {
	"scenario_id": "forest_arachne_14_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"hazel": {
			"id": "mon_e2c11115-b300-4f32-b289-9ad088dc0273",
			"name": {
				"korean": "헤이즐",
				"english": "Hazel",
				"japanese": "ヘイゼル",
				"chinese": "榛",
				"french": "Hazel",
				"spanish": "Hazel",
				"vietnamese": "Hazel",
				"thai": "เฮเซล",
				"hindi": "हेज़ल"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/39f75a47-c622-45fe-04fd-a8bac1f93a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/fc97b5d5-7a1d-4646-bedc-47a40ea70a00/public"
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
						"korean": "세 번째 그림자는 사라졌다. 그러나.",
						"english": "The third shadow disappeared. But.",
						"japanese": "三番目の影は消えた。しかし。",
						"chinese": "第三道影子消失了。但是。",
						"french": "La troisième ombre a disparu. Mais.",
						"spanish": "La tercera sombra desapareció. Pero.",
						"vietnamese": "Bóng thứ ba đã biến mất. Tuy nhiên.",
						"thai": "เงาที่สามหายไปแล้ว แต่ว่า...",
						"hindi": "तीसरी परछाई गायब हो गई। लेकिन।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "하아… 하아… 괜찮아?",
						"english": "Haa... haa... Are you okay?",
						"japanese": "はぁ… はぁ… 大丈夫か？",
						"chinese": "呼… 呼… 你没事吧？",
						"french": "Haa... haa... Ça va ?",
						"spanish": "Haa... haa... ¿Estás bien?",
						"vietnamese": "Haa... haa... Cậu có sao không?",
						"thai": "ฮ้า... ฮ้า... ไหวไหม?",
						"hindi": "हा... हा... ठीक हो?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "크윽… 몸이 말을 안 들어.",
						"english": "Ugh... My body won't listen.",
						"japanese": "くっ… 身体が言うことを聞かない。",
						"chinese": "呃… 身体不听使唤了。",
						"french": "Urgh... Mon corps ne répond plus.",
						"spanish": "Agh... Mi cuerpo no responde.",
						"vietnamese": "Ưgh... Cơ thể không nghe lời.",
						"thai": "อึก... ร่างกายไม่เป็นใจเลย",
						"hindi": "उफ़... शरीर बात नहीं सुन रहा।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "동료 중 한 명이 쓰러졌다. 검은 반점이 전신을 뒤덮었다.",
						"english": "One of our comrades collapsed. Black spots covered their entire body.",
						"japanese": "仲間の一人が倒れた。黒い斑点が全身を覆っていた。",
						"chinese": "一名同伴倒下了。黑色的斑点覆盖了全身。",
						"french": "L'un de nos compagnons s'est effondré. Des taches noires couvraient tout son corps.",
						"spanish": "Uno de nuestros compañeros se desplomó. Manchas negras cubrían todo su cuerpo.",
						"vietnamese": "Một đồng đội đã gục ngã. Những đốm đen bao phủ toàn thân.",
						"thai": "เพื่อนร่วมทีมคนหนึ่งล้มลง จุดดำปกคลุมทั่วร่างกาย",
						"hindi": "एक साथी गिर गया। काले धब्बे पूरे शरीर पर फैल गए थे।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "안 돼… 저주가 너무 강해졌어.",
						"english": "No... The curse has become too strong.",
						"japanese": "だめだ… 呪いが強くなりすぎた。",
						"chinese": "不… 诅咒变得太强了。",
						"french": "Non... La malédiction est devenue trop forte.",
						"spanish": "No... La maldición se ha vuelto demasiado fuerte.",
						"vietnamese": "Không được... Lời nguyền đã trở nên quá mạnh.",
						"thai": "ไม่นะ… คำสาปแข็งแกร่งเกินไปแล้ว",
						"hindi": "नहीं... शाप बहुत ज़्यादा मज़बूत हो गया है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "헤이즐… 방법 없어?",
						"english": "Hazel... no way out?",
						"japanese": "ヘイゼル… 方法はないの？",
						"chinese": "海泽尔… 没别的办法了吗？",
						"french": "Hazel... pas d'issue ?",
						"spanish": "¿Hazel... no hay salida?",
						"vietnamese": "Hazel... không còn cách nào sao?",
						"thai": "เฮเซล... ไม่มีทางออกแล้วเหรอ?",
						"hindi": "हेज़ल... कोई रास्ता नहीं?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도 모르겠어… 숲이 우릴 잡아먹으려 해.",
						"english": "I don't know either... The forest is trying to swallow us whole.",
						"japanese": "私にも分からない… 森が私たちを飲み込もうとしている。",
						"chinese": "我也不知道… 森林想把我们吞噬。",
						"french": "Je ne sais pas non plus... La forêt essaie de nous dévorer.",
						"spanish": "Yo tampoco lo sé... El bosque está tratando de devorarnos.",
						"vietnamese": "Tôi cũng không biết... Rừng đang cố nuốt chửng chúng ta.",
						"thai": "ฉันก็ไม่รู้เหมือนกัน... ป่ากำลังจะกลืนกินเรา",
						"hindi": "मुझे भी नहीं पता... जंगल हमें निगलने की कोशिश कर रहा है।"
					},
					"speaker": "hazel",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이런 식으로 계속 죽을 순 없어.",
						"english": "We can't keep dying like this.",
						"japanese": "こんな風に死に続けるわけにはいかない。",
						"chinese": "我们不能再这样死下去了。",
						"french": "On ne peut pas continuer à mourir comme ça.",
						"spanish": "No podemos seguir muriendo así.",
						"vietnamese": "Chúng ta không thể chết mãi thế này được.",
						"thai": "เราจะตายแบบนี้ต่อไปไม่ได้แล้ว",
						"hindi": "हम ऐसे ही मरते नहीं रह सकते।"
					},
					"speaker": "hazel",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "단서라도 찾았어, 헤이즐?",
						"english": "Found any clues, Hazel?",
						"japanese": "何か手がかりを見つけたの、ヘイゼル？",
						"chinese": "找到什么线索了吗，海泽尔？",
						"french": "Tu as trouvé des indices, Hazel ?",
						"spanish": "¿Encontraste alguna pista, Hazel?",
						"vietnamese": "Cậu tìm thấy manh mối nào không, Hazel?",
						"thai": "เจอเบาะแสอะไรบ้างไหม เฮเซล?",
						"hindi": "कोई सुराग मिला, हेज़ल?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아라크네… 이 숲의 오래된 기록에 그 이름이 계속 나와.",
						"english": "Arachne... that name keeps appearing in the forest's old records.",
						"japanese": "アラクネ… この森の古い記録に、その名前が繰り返し出てくる。",
						"chinese": "阿拉赫涅… 这个名字不断出现在森林的古老记录中。",
						"french": "Arachné... ce nom ne cesse d'apparaître dans les vieux registres de la forêt.",
						"spanish": "Aracne... ese nombre sigue apareciendo en los viejos registros del bosque.",
						"vietnamese": "Arachne... cái tên đó cứ xuất hiện trong những ghi chép cổ xưa của khu rừng.",
						"thai": "อารัคเน... ชื่อนั้นปรากฏซ้ำๆ ในบันทึกเก่าแก่ของป่า",
						"hindi": "अराक्ने... यह नाम जंगल के पुराने अभिलेखों में बार-बार आता है।"
					},
					"speaker": "hazel",
					"emotion": "base"
				},
				{
					"speaker": "hazel",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그녀의 옛 부족… 몰락의 역사와 얽혀 있어.",
						"english": "Her ancient tribe... entangled with a history of ruin.",
						"japanese": "彼女の古き部族… 滅亡の歴史と絡み合っている。",
						"chinese": "她的古老部落… 与衰落的历史纠缠不清。",
						"french": "Son ancienne tribu... mêlée à une histoire de ruine.",
						"spanish": "Su antigua tribu... entrelazada con una historia de ruina.",
						"vietnamese": "Bộ tộc cổ xưa của cô ấy... vướng mắc với lịch sử suy tàn.",
						"thai": "ชนเผ่าโบราณของเธอ... พัวพันกับประวัติศาสตร์แห่งความล่มสลาย",
						"hindi": "उसका प्राचीन कबीला... पतन के इतिहास से उलझा हुआ है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "단순한 은둔자가 아니었단 말이야?",
						"english": "So she wasn't just a simple hermit?",
						"japanese": "単なる隠者ではなかったというの？",
						"chinese": "难道她不是一个简单的隐士吗？",
						"french": "Elle n'était donc pas une simple ermite ?",
						"spanish": "¿Entonces no era una simple ermitaña?",
						"vietnamese": "Vậy ra cô ấy không phải chỉ là một ẩn sĩ đơn thuần?",
						"thai": "แสดงว่าเธอไม่ใช่แค่ฤๅษีธรรมดา?",
						"hindi": "तो वह सिर्फ एक साधारण संन्यासिनी नहीं थी?"
					}
				},
				{
					"content": {
						"korean": "어쩌면 이 모든 저주가… 그녀와 관련 있을지도.",
						"english": "Perhaps all these curses... are connected to her.",
						"japanese": "もしかしたら、このすべての呪いが… 彼女と関係があるのかもしれない。",
						"chinese": "也许所有这些诅咒… 都与她有关。",
						"french": "Peut-être que toutes ces malédictions... sont liées à elle.",
						"spanish": "Quizás todas estas maldiciones... estén relacionadas con ella.",
						"vietnamese": "Có lẽ tất cả những lời nguyền này... đều liên quan đến cô ấy.",
						"thai": "บางทีคำสาปทั้งหมดนี้... อาจเกี่ยวข้องกับเธอ",
						"hindi": "शायद ये सारे श्राप... उससे जुड़े हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기억나? 아라크네가 유물에 대해 설명할 때.",
						"english": "Remember? When Arachne was explaining about the artifact.",
						"japanese": "覚えてる？アラクネが遺物について説明した時のこと。",
						"chinese": "还记得吗？阿拉赫涅解释那个文物的时候。",
						"french": "Tu te souviens ? Quand Arachné expliquait l'artefact.",
						"spanish": "¿Recuerdas? Cuando Aracne estaba explicando sobre el artefacto.",
						"vietnamese": "Nhớ không? Lúc Arachne giải thích về di vật đó.",
						"thai": "จำได้ไหม? ตอนที่อารัคเนอธิบายเกี่ยวกับวัตถุโบราณ",
						"hindi": "याद है? जब अराक्ने कलाकृति के बारे में बता रही थी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…응. 왜?",
						"english": "...Yeah. Why?",
						"japanese": "…うん。どうして？",
						"chinese": "…嗯。怎么了？",
						"french": "...Oui. Pourquoi ?",
						"spanish": "...Sí. ¿Por qué?",
						"vietnamese": "...Ừ. Sao vậy?",
						"thai": "...อืม ทำไมเหรอ?",
						"hindi": "...हाँ। क्यों?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그녀가 '옛 아마존 부족 영웅의 물건'이라고 했잖아.",
						"english": "She called it an 'old Amazonian hero's item'.",
						"japanese": "彼女、『古のアマゾン部族の英雄の物』って言ってたわ。",
						"chinese": "她说那是‘古亚马逊部落英雄的物品’。",
						"french": "Elle a dit que c'était 'un objet d'un ancien héros tribal amazonien'.",
						"spanish": "Ella dijo que era 'un objeto de un antiguo héroe de la tribu amazona'.",
						"vietnamese": "Cô ta nói đó là 'vật phẩm của anh hùng bộ tộc Amazon cổ đại'.",
						"thai": "เธอบอกว่ามันคือ 'ของของวีรบุรุษเผ่าอเมซอนโบราณ' น่ะ",
						"hindi": "उसने कहा था कि यह 'प्राचीन अमेज़न जनजाति के नायक की वस्तु' है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hazel"
				},
				{
					"content": {
						"korean": "그랬지. 뭔가 이상했어.",
						"english": "She did. Something felt off.",
						"japanese": "言ってたな。何か変だった。",
						"chinese": "是啊。总觉得不对劲。",
						"french": "C'est vrai. Quelque chose n'allait pas.",
						"spanish": "Así es. Algo no cuadraba.",
						"vietnamese": "Đúng vậy. Có gì đó lạ lắm.",
						"thai": "ใช่แล้ว. มีบางอย่างแปลกๆ",
						"hindi": "हाँ, उसने कहा था। कुछ अजीब था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그때 그녀의 눈빛… 잠시 스치던 증오를 봤어.",
						"english": "Her eyes then... I saw a fleeting hatred.",
						"japanese": "その時の彼女の目…一瞬、憎悪がよぎった。",
						"chinese": "当时她的眼神…我看到了一闪而过的憎恨。",
						"french": "Ses yeux, alors… J'ai vu une haine fugace.",
						"spanish": "Entonces sus ojos… Vi un odio fugaz.",
						"vietnamese": "Ánh mắt cô ta lúc đó… Tôi thấy thoáng qua sự căm ghét.",
						"thai": "แววตาของเธอตอนนั้น... ฉันเห็นความเกลียดชังแวบหนึ่ง",
						"hindi": "उस समय उसकी आँखों में… मैंने एक क्षण के लिए नफ़रत देखी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				},
				{
					"type": "speech",
					"content": {
						"korean": "증오? 누구에게?",
						"english": "Hatred? Towards whom?",
						"japanese": "憎悪？誰に？",
						"chinese": "憎恨？对谁？",
						"french": "De la haine ? Contre qui ?",
						"spanish": "¿Odio? ¿Hacia quién?",
						"vietnamese": "Căm ghét? Đối với ai?",
						"thai": "เกลียดชัง? ต่อใคร?",
						"hindi": "नफ़रत? किसको?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "hazel",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아마존 부족에게, 혹은 그 유물에게. 과거를 숨기려는 듯했어.",
						"english": "The Amazon tribe, or the relic itself. She seemed to be hiding her past.",
						"japanese": "アマゾン部族に、あるいはその遺物に。過去を隠そうとしていたようだった。",
						"chinese": "对亚马逊部落，或是对那件遗物。她似乎想隐藏过去。",
						"french": "Contre la tribu amazone, ou l'artefact. Elle semblait vouloir cacher son passé.",
						"spanish": "Hacia la tribu amazona, o el artefacto. Parecía estar ocultando su pasado.",
						"vietnamese": "Đối với bộ tộc Amazon, hay vật phẩm đó. Cô ta dường như đang che giấu quá khứ.",
						"thai": "ต่อเผ่าอเมซอน หรือไม่ก็วัตถุนั้น เธอพยายามซ่อนอดีตเอาไว้",
						"hindi": "अमेज़न जनजाति को, या उस अवशेष को। वह अपना अतीत छिपाने की कोशिश कर रही थी।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "시간의 저주가 숲을 더욱 뒤틀었다. 모든 것이 흐릿했다.",
						"english": "The curse of time further twisted the forest. Everything was hazy.",
						"japanese": "時の呪いが森をさらに歪めた。全てが霞んでいた。",
						"chinese": "时间的诅咒让森林更加扭曲。一切都变得模糊不清。",
						"french": "La malédiction du temps a tordu la forêt davantage. Tout était flou.",
						"spanish": "La maldición del tiempo retorció aún más el bosque. Todo era borroso.",
						"vietnamese": "Lời nguyền thời gian càng làm khu rừng thêm méo mó. Mọi thứ đều mờ ảo.",
						"thai": "คำสาปแห่งเวลากลับทำให้ป่าบิดเบี้ยวมากขึ้น ทุกสิ่งพร่าเลือน",
						"hindi": "समय के श्राप ने जंगल को और भी अधिक विकृत कर दिया। सब कुछ धुंधला था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "온몸이… 무너지는 것 같아.",
						"english": "My whole body... feels like it's crumbling.",
						"japanese": "体が…崩れていくようだ。",
						"chinese": "我的身体…好像在瓦解。",
						"french": "Mon corps entier… J'ai l'impression qu'il s'écroule.",
						"spanish": "Todo mi cuerpo… siento que se desmorona.",
						"vietnamese": "Toàn thân tôi… dường như đang tan rã.",
						"thai": "ร่างกายฉัน… เหมือนกำลังจะพังทลาย",
						"hindi": "मेरा पूरा शरीर… जैसे टूट रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"content": {
						"korean": "아라크네는 우리를 기만했어. 그녀의 부족은….",
						"english": "Arachne deceived us. Her tribe...",
						"japanese": "アラクネは我々を欺いた。彼女の部族は…。",
						"chinese": "阿拉克涅欺骗了我们。她的部落…",
						"french": "Arachné nous a trompés. Sa tribu…",
						"spanish": "Aracne nos engañó. Su tribu…",
						"vietnamese": "Arachne đã lừa dối chúng ta. Bộ tộc của cô ta…",
						"thai": "อารัคเนหลอกเรา เผ่าของเธอ...",
						"hindi": "अराक्ने ने हमें धोखा दिया। उसका कबीला…"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "hazel"
				},
				{
					"emotion": "angry",
					"speaker": "character_1",
					"content": {
						"korean": "대체 진실이 뭐야?",
						"english": "What *is* the truth?",
						"japanese": "一体、真実とは何だ？",
						"chinese": "真相到底是什么？",
						"french": "Quelle est la vérité, bon sang ?",
						"spanish": "¿Cuál es la verdad, entonces?",
						"vietnamese": "Vậy rốt cuộc sự thật là gì?",
						"thai": "ความจริงคืออะไรกันแน่?",
						"hindi": "आखिर सच क्या है?"
					},
					"type": "speech"
				},
				{
					"speaker": "hazel",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그녀는 이 숲에 드리워진 모든 저주의 원흉이야.",
						"english": "She's the source of all curses shrouding this forest.",
						"japanese": "彼女こそ、この森にかけられた全ての呪いの元凶だ。",
						"chinese": "她就是笼罩这片森林所有诅咒的元凶。",
						"french": "Elle est la cause de toutes les malédictions qui enveloppent cette forêt.",
						"spanish": "Ella es la artífice de todas las maldiciones que acechan este bosque.",
						"vietnamese": "Cô ta chính là thủ phạm của mọi lời nguyền bao trùm khu rừng này.",
						"thai": "เธอคือต้นเหตุของคำสาปทั้งหมดที่ปกคลุมป่าแห่งนี้",
						"hindi": "वह इस जंगल पर छाए सभी श्रापों का स्रोत है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 유물을 찾아야만 살아남을 수 있다고.",
						"english": "But... we must find the relic to survive.",
						"japanese": "しかし…生き残るには遺物を見つけなければならない。",
						"chinese": "但是……我们必须找到遗物才能活下来。",
						"french": "Mais... nous devons trouver l'artefact pour survivre.",
						"spanish": "Pero... debemos encontrar el artefacto para sobrevivir.",
						"vietnamese": "Nhưng... chúng ta phải tìm được di vật để sống sót.",
						"thai": "แต่... เราต้องหาวัตถุโบราณให้พบเพื่อเอาชีวิตรอด",
						"hindi": "लेकिन... हमें जीवित रहने के लिए अवशेष ढूंढना होगा।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…우린 더 이상 믿을 것이 없어.",
						"english": "...We have nothing left to believe in.",
						"japanese": "…もう何も信じられない。",
						"chinese": "……我们再也没有什么可以相信的了。",
						"french": "...Nous n'avons plus rien à croire.",
						"spanish": "...Ya no tenemos nada en qué creer.",
						"vietnamese": "...Chúng ta không còn gì để tin nữa.",
						"thai": "...เราไม่มีอะไรจะเชื่ออีกแล้ว",
						"hindi": "...हमारे पास अब विश्वास करने के लिए कुछ नहीं है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hazel"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 절망에 몸부림쳐라.",
						"english": "Insignificant beings... wallow in despair.",
						"japanese": "愚かな者たち… 絶望にもがけ。",
						"chinese": "微不足道的家伙们…… 在绝望中挣扎吧。",
						"french": "Créatures insignifiantes… débattez-vous dans le désespoir.",
						"spanish": "Cosas insignificantes… revolcaos en la desesperación.",
						"vietnamese": "Đồ hèn mọn… hãy vùng vẫy trong tuyệt vọng đi.",
						"thai": "เจ้าพวกไร้ค่า... จงจมดิ่งในความสิ้นหวังซะ",
						"hindi": "तुच्छ प्राणी... निराशा में तड़पो।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "어둠이 모든 것을 집어삼켰다.",
						"english": "Darkness has swallowed everything.",
						"japanese": "闇が全てを飲み込んだ。",
						"chinese": "黑暗吞噬了一切。",
						"french": "L'obscurité a tout englouti.",
						"spanish": "La oscuridad lo ha devorado todo.",
						"vietnamese": "Bóng tối đã nuốt chửng mọi thứ.",
						"thai": "ความมืดกลืนกินทุกสิ่งแล้ว",
						"hindi": "अंधकार ने सब कुछ निगल लिया है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직은 아니야…!",
						"english": "Damn it... not yet...!",
						"japanese": "くそっ… まだだ…！",
						"chinese": "该死…… 还不是时候……！",
						"french": "Merde… pas encore… !",
						"spanish": "¡Maldita sea… aún no…!",
						"vietnamese": "Chết tiệt… chưa phải bây giờ…!",
						"thai": "บ้าจริง... ยังไม่ใช่ตอนนี้...!",
						"hindi": "धिक्कार है... अभी नहीं...!"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간들.",
						"english": "To come this far... foolish humans.",
						"japanese": "ここまで来るとは…愚かな人間め。",
						"chinese": "竟然来到这里……愚蠢的人类。",
						"french": "Arriver jusqu'ici... stupides humains.",
						"spanish": "Haber llegado hasta aquí... estúpidos humanos.",
						"vietnamese": "Đến được đây... lũ người ngu ngốc.",
						"thai": "มาได้ถึงเพียงนี้... มนุษย์ที่โง่เขลา",
						"hindi": "यहाँ तक आ गए... मूर्ख इंसान।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "hazel",
					"type": "direction"
				},
				{
					"speaker": "hazel",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "{random_boss}… 이 자는 아라크네의 수족이야.",
						"english": "{random_boss}... This one is Arachne's minion.",
						"japanese": "{random_boss}…こやつはアラクネの手先だ。",
						"chinese": "{random_boss}……这个人是阿拉克涅的爪牙。",
						"french": "{random_boss}... Celui-ci est un sbire d'Arachné.",
						"spanish": "{random_boss}... Este es un esbirro de Aracne.",
						"vietnamese": "{random_boss}... Kẻ này là tay sai của Arachne.",
						"thai": "{random_boss}... เจ้านี่เป็นสมุนของอารัคเน",
						"hindi": "{random_boss}... यह अरकने का गुर्गा है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아라크네의 수족이라니! 대체 언제부터….",
						"english": "Arachne's minion! Since when...?",
						"japanese": "アラクネの手先だと！一体いつから…。",
						"chinese": "阿拉克涅的爪牙！到底是从什么时候开始的……。",
						"french": "Un sbire d'Arachné ! Depuis quand... ?",
						"spanish": "¡Un esbirro de Aracne! ¿Desde cuándo...?",
						"vietnamese": "Tay sai của Arachne ư! Rốt cuộc là từ khi nào...",
						"thai": "สมุนของอารัคเนรึ! ตั้งแต่เมื่อไหร่กันแน่...",
						"hindi": "अरकने का गुर्गा! आखिर कब से...?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실을 알아봤자, 너희는 아무것도 바꿀 수 없어.",
						"english": "Even if you know the truth, you can't change anything.",
						"japanese": "真実を知ったところで、お前たちは何も変えられない。",
						"chinese": "就算知道了真相，你们也改变不了任何事。",
						"french": "Même si vous connaissez la vérité, vous ne pouvez rien changer.",
						"spanish": "Aunque conozcáis la verdad, no podéis cambiar nada.",
						"vietnamese": "Dù các ngươi có biết sự thật thì cũng chẳng thể thay đổi được gì.",
						"thai": "แม้จะรู้ความจริงไป เจ้าก็เปลี่ยนอะไรไม่ได้",
						"hindi": "सच जान भी लो, तो भी तुम कुछ बदल नहीं सकते।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "죽음만이 너희를 기다릴 뿐이다.",
						"english": "Only death awaits you.",
						"japanese": "お前たちを待つのは死のみだ。",
						"chinese": "只有死亡在等待着你们。",
						"french": "Seule la mort vous attend.",
						"spanish": "Solo la muerte os espera.",
						"vietnamese": "Chỉ có cái chết đang chờ đợi các ngươi mà thôi.",
						"thai": "มีเพียงความตายเท่านั้นที่รอพวกเจ้าอยู่",
						"hindi": "केवल मृत्यु ही तुम्हारी प्रतीक्षा कर रही है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "닥쳐! 네놈부터 쓰러뜨릴 거야!",
						"english": "Shut up! I'll take you down first!",
						"japanese": "黙れ！貴様から倒してやる！",
						"chinese": "闭嘴！我先打倒你！",
						"french": "Tais-toi ! Je te vaincrai en premier !",
						"spanish": "¡Cállate! ¡Te derribaré a ti primero!",
						"vietnamese": "Câm mồm! Tao sẽ hạ gục mày trước!",
						"thai": "หุบปากซะ! ข้าจะล้มเจ้าก่อน!",
						"hindi": "चुप रहो! मैं तुम्हें पहले हराऊंगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 어리석은… 아직 끝이 아니다….",
						"english": "Ugh... foolish... it's not over yet...",
						"japanese": "くっ…愚かな…まだ終わりではない…。",
						"chinese": "呃……愚蠢的……还没结束……。",
						"french": "Ugh... stupides... ce n'est pas encore fini...",
						"spanish": "Ugh... estúpidos... todavía no ha terminado...",
						"vietnamese": "Ư... ngu ngốc... vẫn chưa kết thúc đâu...",
						"thai": "อึก... โง่เขลา... ยังไม่จบแค่นี้...",
						"hindi": "उफ़... मूर्ख... अभी खत्म नहीं हुआ है..."
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 숲의 저주는 여전했다.",
						"english": "The mysterious boss fell. But the forest's curse remained.",
						"japanese": "正体不明のボスは倒れた。しかし、森の呪いは依然として残っていた。",
						"chinese": "身份不明的首领倒下了。然而，森林的诅咒依然存在。",
						"french": "Le boss mystérieux est tombé. Mais la malédiction de la forêt persistait.",
						"spanish": "El jefe misterioso cayó. Pero la maldición del bosque permanecía.",
						"vietnamese": "Con boss bí ẩn đã gục ngã. Nhưng lời nguyền của khu rừng vẫn còn đó.",
						"thai": "หัวหน้าปริศนาถูกโค่นลง แต่คำสาปของป่ายังคงอยู่",
						"hindi": "रहस्यमयी बॉस गिर गया। लेकिन जंगल का अभिशाप अभी भी बना हुआ था।"
					}
				},
				{
					"speaker": "hazel",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "hazel",
					"content": {
						"korean": "동료를 잃고, 믿음을 잃었지만… 이젠 알겠어.",
						"english": "Lost companions, lost faith... but now I understand.",
						"japanese": "仲間を失い、信頼も失ったが… 今は分かる。",
						"chinese": "失去了伙伴，失去了信念…… 但现在我明白了。",
						"french": "J'ai perdu des compagnons, j'ai perdu la foi… mais maintenant je comprends.",
						"spanish": "Perdí compañeros, perdí la fe… pero ahora lo entiendo.",
						"vietnamese": "Mất đồng đội, mất niềm tin… nhưng giờ thì tôi đã hiểu.",
						"thai": "สูญเสียสหาย สูญสิ้นศรัทธา... แต่ตอนนี้ฉันเข้าใจแล้ว",
						"hindi": "साथी खो दिए, विश्वास खो दिया... पर अब मैं समझ गया हूँ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아라크네가 이 모든 것의 중심에 있어.",
						"english": "Arachne is at the heart of all this.",
						"japanese": "アラクネがこの全ての中心にいる。",
						"chinese": "阿拉克涅是这一切的中心。",
						"french": "Arachné est au cœur de tout cela.",
						"spanish": "Aracne está en el centro de todo esto.",
						"vietnamese": "Arachne chính là trung tâm của tất cả chuyện này.",
						"thai": "อารัคเนคือแก่นแท้ของเรื่องทั้งหมดนี้",
						"hindi": "एराक्ने ही इस सब के केंद्र में है।"
					},
					"speaker": "hazel",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래… 이제 진실을 파헤쳐야 할 때야.",
						"english": "Yes... it's time to unearth the truth.",
						"japanese": "そう… 今こそ真実を暴く時だ。",
						"chinese": "是的…… 现在是时候揭开真相了。",
						"french": "Oui… il est temps de déterrer la vérité.",
						"spanish": "Sí… es hora de desenterrar la verdad.",
						"vietnamese": "Đúng vậy… đã đến lúc phải khai quật sự thật.",
						"thai": "ใช่แล้ว... ถึงเวลาที่ต้องขุดคุ้ยความจริงแล้ว",
						"hindi": "हाँ... अब सच को उजागर करने का समय आ गया है।"
					}
				},
				{
					"content": {
						"korean": "절망 속에서 하나의 단서가 빛났다. 복수는 아직 끝나지 않았다.",
						"english": "In despair, a clue shone. Vengeance is not over yet.",
						"japanese": "絶望の中、一つの手がかりが輝いた。復讐はまだ終わっていない。",
						"chinese": "在绝望中，一线索闪耀。复仇尚未结束。",
						"french": "Dans le désespoir, un indice a brillé. La vengeance n'est pas encore terminée.",
						"spanish": "En la desesperación, una pista brilló. La venganza aún no ha terminado.",
						"vietnamese": "Trong tuyệt vọng, một manh mối lóe sáng. Cuộc báo thù vẫn chưa kết thúc.",
						"thai": "ในความสิ้นหวัง เบาะแสหนึ่งส่องประกาย การแก้แค้นยังไม่จบลง",
						"hindi": "निराशा में, एक सुराग चमक उठा। प्रतिशोध अभी समाप्त नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"숲은 더욱 깊숙이 우리를 조여왔다.",
			"동료의 비명은 더 이상 낯설지 않았다.",
			"믿었던 희망마저 바스러지는 곳.",
			"우리는 그저, 살기 위해 발버둥쳤다.",
			"그러나 진실은 언제나 절망을 타고 온다."
		],
		"english": [
			"The forest tightened its grip around us.",
			"A comrade's scream was no longer unfamiliar.",
			"A place where even the hope we trusted crumbled.",
			"We simply struggled to survive.",
			"But the truth always rides on despair."
		],
		"japanese": [
			"森はさらに深く、私たちを締め付けた。",
			"仲間の悲鳴は、もはや見慣れたものだった。",
			"信じていた希望さえ砕け散る場所。",
			"私たちはただ、生きるために足掻いた。",
			"しかし、真実はいつだって絶望を乗せてやってくる。"
		],
		"chinese": [
			"森林深处，将我们层层包围。",
			"同伴的尖叫声，已不再陌生。",
			"连所信赖的希望，也随之破碎的地方。",
			"我们只是，为了生存而挣扎。",
			"然而，真相总是伴随着绝望而来。"
		],
		"french": [
			"La forêt nous serrait de plus en plus fort.",
			"Les cris de nos compagnons ne nous étaient plus étrangers.",
			"Un endroit où même l'espoir auquel nous nous accrochions s'effritait.",
			"Nous luttions simplement pour survivre.",
			"Mais la vérité arrive toujours sur les ailes du désespoir."
		],
		"spanish": [
			"El bosque nos oprimía cada vez más.",
			"Los gritos de mis compañeros ya no eran extraños.",
			"Un lugar donde incluso la esperanza en la que creíamos se hacía pedazos.",
			"Nosotros simplemente, luchábamos por sobrevivir.",
			"Sin embargo, la verdad siempre llega cabalgando sobre la desesperación."
		],
		"vietnamese": [
			"Rừng sâu siết chặt lấy chúng tôi.",
			"Tiếng thét của đồng đội không còn xa lạ nữa.",
			"Nơi mà ngay cả hy vọng đã tin tưởng cũng tan vỡ.",
			"Chúng tôi chỉ, vùng vẫy để sống sót.",
			"Tuy nhiên, sự thật luôn đến cùng với tuyệt vọng."
		],
		"thai": [
			"ป่าบีบรัดเราเข้ามาลึกขึ้นเรื่อยๆ",
			"เสียงกรีดร้องของสหายไม่แปลกหน้าอีกต่อไป",
			"ที่ที่แม้แต่ความหวังที่เชื่อมั่นยังพังทลาย",
			"เราเพียงแค่ดิ้นรนเพื่อเอาชีวิตรอด",
			"แต่ความจริงมักมาพร้อมกับความสิ้นหวังเสมอ"
		],
		"hindi": [
			"जंगल ने हमें और कसकर जकड़ लिया था।",
			"साथियों की चीखें अब अनजानी नहीं थीं।",
			"जहाँ विश्वास की उम्मीद भी बिखर जाती है।",
			"हम बस, जीने के लिए छटपटा रहे थे।",
			"पर सच हमेशा निराशा के साथ आता है।"
		]
	}
} as const;
