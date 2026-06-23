export const scenario_modern_vincenzo_6_03 = {
	"scenario_id": "modern_vincenzo_6_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"도시는 모든 것을 기록하는 줄 알았다.",
			"하지만 누군가 의도적으로 지운 과거가 있었다.",
			"잊혀진 기록 속에서, 오래된 '망령'이 깨어나고 있었다.",
			"그리고 그 망령은, 지금도 도시를 혼란에 빠뜨리고 있었다."
		],
		"english": [
			"The city was thought to record everything.",
			"But there was a past someone intentionally erased.",
			"Within forgotten records, an old 'specter' was awakening.",
			"And that specter, even now, was plunging the city into chaos."
		],
		"japanese": [
			"都市はすべてを記録していると思っていた。",
			"しかし、誰かが意図的に消去した過去があった。",
			"忘れ去られた記録の中で、古き「亡霊」が目覚めようとしていた。",
			"そしてその亡霊は、今も都市を混乱に陥れていた。"
		],
		"chinese": [
			"城市本以为会记录一切。",
			"但有一段被刻意抹去的过去。",
			"在被遗忘的记录中，一个古老的“幽灵”正在苏醒。",
			"而那个幽灵，至今仍在让城市陷入混乱。"
		],
		"french": [
			"On pensait que la ville enregistrait tout.",
			"Mais il y avait un passé que quelqu'un avait intentionnellement effacé.",
			"Dans les dossiers oubliés, un ancien « spectre » se réveillait.",
			"Et ce spectre, même maintenant, plongeait la ville dans le chaos."
		],
		"spanish": [
			"Se creía que la ciudad lo registraba todo.",
			"Pero había un pasado que alguien borró intencionalmente.",
			"Entre los registros olvidados, un viejo 'espectro' estaba despertando.",
			"Y ese espectro, aún ahora, estaba sumiendo a la ciudad en el caos."
		],
		"vietnamese": [
			"Cứ ngỡ thành phố ghi lại mọi thứ.",
			"Nhưng có một quá khứ đã bị ai đó cố ý xóa bỏ.",
			"Trong những ghi chép bị lãng quên, một 'bóng ma' xưa cũ đang thức tỉnh.",
			"Và bóng ma đó, ngay cả bây giờ, vẫn đang đẩy thành phố vào hỗn loạn."
		],
		"thai": [
			"นึกว่าเมืองจะบันทึกทุกสิ่งไว้",
			"แต่มีอดีตที่ใครบางคนจงใจลบออกไป",
			"ในบันทึกที่ถูกลืมเลือน 'วิญญาณ' เก่าแก่กำลังตื่นขึ้น",
			"และวิญญาณนั้น แม้แต่ตอนนี้ก็ยังคงทำให้เมืองวุ่นวาย"
		],
		"hindi": [
			"सोचा था शहर सब कुछ रिकॉर्ड करता है।",
			"लेकिन एक ऐसा अतीत था जिसे किसी ने जानबूझकर मिटा दिया था।",
			"भूली हुई यादों में, एक पुराना 'प्रेत' जाग रहा था।",
			"और वह प्रेत, अब भी शहर को अराजकता में डुबो रहा था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "happy",
					"content": {
						"korean": "이것 좀 봐. 방금 찾았어.",
						"english": "Look at this. I just found it.",
						"japanese": "これを見て。今見つけたんだ。",
						"chinese": "看看这个。我刚找到的。",
						"french": "Regarde ça. Je viens de le trouver.",
						"spanish": "Mira esto. Acabo de encontrarlo.",
						"vietnamese": "Nhìn này. Tôi vừa tìm thấy nó.",
						"thai": "ดูนี่สิ เพิ่งเจอมา",
						"hindi": "इसे देखो। मैंने अभी-अभी इसे पाया है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭔데?",
						"english": "What is it?",
						"japanese": "何？",
						"chinese": "什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es?",
						"vietnamese": "Gì vậy?",
						"thai": "อะไรเหรอ?",
						"hindi": "क्या है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 서버에서… 삭제된 줄 알았던 기록 조각들이야.",
						"english": "From an old server... fragments of records we thought were deleted.",
						"japanese": "古いサーバーから…削除されたと思っていた記録の断片だ。",
						"chinese": "从一台旧服务器里…那些我们以为被删除的记录碎片。",
						"french": "D'un vieux serveur... des fragments de dossiers que nous pensions supprimés.",
						"spanish": "De un viejo servidor... fragmentos de registros que creíamos eliminados.",
						"vietnamese": "Từ một máy chủ cũ… những mảnh ghi chép mà tôi tưởng đã bị xóa.",
						"thai": "จากเซิร์ฟเวอร์เก่า... ชิ้นส่วนบันทึกที่คิดว่าถูกลบไปแล้ว",
						"hindi": "एक पुराने सर्वर से... रिकॉर्ड के टुकड़े जिन्हें हम हटा दिया गया मान रहे थे।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "base",
					"content": {
						"korean": "조각난 파편들인데… '카포네 패밀리'라는 이름이 계속 나와.",
						"english": "They're fragmented pieces... but the name 'Capone Family' keeps appearing.",
						"japanese": "断片的なんだけど…「カポネファミリー」という名前が何度も出てくる。",
						"chinese": "都是些零散的碎片…但“卡彭家族”这个名字一直出现。",
						"french": "Ce sont des fragments... mais le nom « Capone Family » n'arrête pas d'apparaître.",
						"spanish": "Son fragmentos... pero el nombre 'Familia Capone' sigue apareciendo.",
						"vietnamese": "Là những mảnh vỡ… nhưng cái tên 'Gia đình Capone' cứ xuất hiện mãi.",
						"thai": "เป็นชิ้นส่วนที่แตกหัก... แต่ชื่อ 'แก๊งคาโปน' โผล่มาตลอด",
						"hindi": "ये खंडित टुकड़े हैं... लेकिन 'कैपोन परिवार' नाम बार-बार आ रहा है।"
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
					"spot": [
						2,
						4
					],
					"speaker": "echo",
					"action": "enter"
				},
				{
					"content": {
						"korean": "카포네 패밀리… 옛날 범죄 조직 이름 아니야?",
						"english": "Capone Family... isn't that an old crime syndicate name?",
						"japanese": "カポネファミリー…昔の犯罪組織の名前じゃない？",
						"chinese": "卡彭家族…那不是以前的犯罪组织名字吗？",
						"french": "La Famille Capone... ce n'est pas le nom d'une vieille organisation criminelle ?",
						"spanish": "¿Familia Capone... no es el nombre de una antigua organización criminal?",
						"vietnamese": "Gia đình Capone… không phải là tên một tổ chức tội phạm ngày xưa sao?",
						"thai": "แก๊งคาโปน... ไม่ใช่ชื่อองค์กรอาชญากรรมเก่าเหรอ?",
						"hindi": "कैपोन परिवार... क्या यह एक पुराने आपराधिक संगठन का नाम नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"content": {
						"korean": "맞아. 근데 왜 현대 시스템에서 흔적이 완전히 지워졌을까?",
						"english": "Right. But why would its traces be completely erased from modern systems?",
						"japanese": "そうだね。でも、なぜ現代のシステムから痕跡が完全に消されたんだろう？",
						"chinese": "对啊。但为什么会在现代系统中被彻底抹去痕迹呢？",
						"french": "Exact. Mais pourquoi ses traces auraient-elles été complètement effacées des systèmes modernes ?",
						"spanish": "Exacto. ¿Pero por qué sus rastros habrían sido completamente borrados de los sistemas modernos?",
						"vietnamese": "Đúng vậy. Nhưng tại sao dấu vết của nó lại bị xóa sạch khỏi các hệ thống hiện đại nhỉ?",
						"thai": "ใช่เลย แต่ทำไมถึงถูกลบร่องรอยออกจากระบบสมัยใหม่จนหมดสิ้น?",
						"hindi": "सही कहा। लेकिन आधुनिक प्रणालियों से इसके निशान पूरी तरह से क्यों मिटा दिए गए होंगे?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "마치 누군가 의도적으로 숨기려 한 것처럼….",
						"english": "As if someone intentionally tried to hide it...",
						"japanese": "まるで誰かが意図的に隠そうとしたかのように…。",
						"chinese": "仿佛有人故意隐藏一般……",
						"french": "Comme si quelqu'un avait délibérément essayé de le cacher...",
						"spanish": "Como si alguien hubiera intentado ocultarlo intencionadamente...",
						"vietnamese": "Cứ như thể ai đó cố tình che giấu vậy...",
						"thai": "ราวกับว่ามีใครบางคนจงใจที่จะซ่อนมันเอาไว้...",
						"hindi": "जैसे किसी ने जानबूझकर छिपाने की कोशिश की हो..."
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오래된 이야기가 지금이랑 무슨 상관인데?",
						"english": "What do old stories have to do with now?",
						"japanese": "古い話が今と何の関係があるんだ？",
						"chinese": "旧故事和现在有什么关系？",
						"french": "Qu'est-ce que de vieilles histoires ont à voir avec le présent ?",
						"spanish": "¿Qué tienen que ver las viejas historias con el presente?",
						"vietnamese": "Những câu chuyện cũ thì liên quan gì đến bây giờ?",
						"thai": "เรื่องราวเก่าๆ เกี่ยวอะไรกับตอนนี้?",
						"hindi": "पुरानी कहानियों का अब से क्या लेना-देना?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "이 '망령'이 아직도 도시를 어지럽히고 있는 것 같아.",
						"english": "It seems this 'wraith' is still disturbing the city.",
						"japanese": "この「亡霊」がまだ街を混乱させているようだ。",
						"chinese": "这个“幽灵”似乎还在扰乱城市。",
						"french": "On dirait que ce 'spectre' trouble toujours la ville.",
						"spanish": "Parece que este 'espectro' todavía está perturbando la ciudad.",
						"vietnamese": "Có vẻ như 'linh hồn' này vẫn đang gây rối thành phố.",
						"thai": "ดูเหมือนว่า 'วิญญาณ' นี้ยังคงสร้างความวุ่นวายให้กับเมืองอยู่เลย",
						"hindi": "लगता है यह 'प्रेत' अभी भी शहर को परेशान कर रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						4
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 기록들을 보면, 과거의 시스템이 현재를 조종하는 기분이야.",
						"english": "Looking at these records, it feels like a past system is controlling the present.",
						"japanese": "これらの記録を見ると、過去のシステムが現在を操っているような気がする。",
						"chinese": "看着这些记录，感觉过去的系统正在操控现在。",
						"french": "En voyant ces registres, j'ai l'impression qu'un ancien système contrôle le présent.",
						"spanish": "Al ver estos registros, siento que un sistema del pasado está controlando el presente.",
						"vietnamese": "Nhìn những ghi chép này, cảm giác như một hệ thống từ quá khứ đang điều khiển hiện tại.",
						"thai": "เมื่อดูบันทึกเหล่านี้แล้ว รู้สึกเหมือนระบบในอดีตกำลังควบคุมปัจจุบัน",
						"hindi": "इन अभिलेखों को देखकर ऐसा लगता है, जैसे अतीत की कोई प्रणाली वर्तमान को नियंत्रित कर रही हो।"
					},
					"emotion": "sad",
					"speaker": "echo",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "망령… 그게 지금도 살아있다고?",
						"english": "A wraith... it's still alive?",
						"japanese": "亡霊…それが今も生きていると？",
						"chinese": "幽灵……它现在还活着吗？",
						"french": "Un spectre... Il est encore en vie ?",
						"spanish": "¿Un espectro... todavía está vivo?",
						"vietnamese": "Linh hồn... nó vẫn còn sống ư?",
						"thai": "วิญญาณ... มันยังมีชีวิตอยู่เหรอ?",
						"hindi": "एक प्रेत... वह अभी भी जीवित है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "echo",
					"content": {
						"korean": "확실하진 않아. 근데 중요한 정보들이 이렇게 사라지는 게 우연일까?",
						"english": "I'm not sure. But is it a coincidence that important information keeps disappearing like this?",
						"japanese": "確実ではない。でも、重要な情報がこうして消えるのは偶然だろうか？",
						"chinese": "不确定。但重要的信息这样消失是巧合吗？",
						"french": "Je n'en suis pas sûr. Mais est-ce une coïncidence que des informations importantes disparaissent ainsi ?",
						"spanish": "No estoy seguro. Pero, ¿es una coincidencia que información importante desaparezca así?",
						"vietnamese": "Tôi không chắc. Nhưng liệu việc những thông tin quan trọng cứ biến mất như thế này có phải là trùng hợp không?",
						"thai": "ฉันไม่แน่ใจ แต่การที่ข้อมูลสำคัญหายไปแบบนี้จะเป็นเรื่องบังเอิญเหรอ?",
						"hindi": "मुझे यकीन नहीं है। लेकिन क्या महत्वपूर्ण जानकारी का ऐसे गायब होना संयोग है?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 기록들처럼, 특정 데이터들이 완전히 지워지는 현상을 발견했어.",
						"english": "Like these records, I've found instances where specific data is completely erased.",
						"japanese": "これらの記録のように、特定のデータが完全に消去される現象を発見した。",
						"chinese": "像这些记录一样，我发现特定数据被完全清除的现象。",
						"french": "Comme ces registres, j'ai découvert des cas où des données spécifiques sont complètement effacées.",
						"spanish": "Como estos registros, he descubierto casos en los que datos específicos son completamente borrados.",
						"vietnamese": "Giống như những ghi chép này, tôi đã phát hiện ra hiện tượng dữ liệu cụ thể bị xóa hoàn toàn.",
						"thai": "เหมือนกับบันทึกเหล่านี้ ฉันได้พบปรากฏการณ์ที่ข้อมูลบางอย่างถูกลบออกไปอย่างสมบูรณ์",
						"hindi": "इन अभिलेखों की तरह, मैंने कुछ विशेष डेटा को पूरी तरह से मिटाए जाने की घटनाओं को पाया है।"
					},
					"speaker": "echo",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "echo",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이제 알겠어. 이 망령은 단순한 과거가 아니야.",
						"english": "Now I understand. This wraith isn't just a simple past.",
						"japanese": "これでわかった。この亡霊は単なる過去ではない。",
						"chinese": "现在我明白了。这个幽灵不只是一个简单的过去。",
						"french": "Maintenant je comprends. Ce spectre n'est pas un simple passé.",
						"spanish": "Ahora entiendo. Este espectro no es solo un simple pasado.",
						"vietnamese": "Bây giờ tôi hiểu rồi. Linh hồn này không chỉ là quá khứ đơn thuần.",
						"thai": "ตอนนี้ฉันเข้าใจแล้ว วิญญาณนี้ไม่ใช่แค่อดีตธรรมดาๆ",
						"hindi": "अब मैं समझा। यह प्रेत सिर्फ एक साधारण अतीत नहीं है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭔데?",
						"english": "Then what is it?",
						"japanese": "じゃあ何なんだ？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì nó là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "도시의 시스템 깊숙이 침투한 오래된 악의야.",
						"english": "It's an ancient malice that has deeply infiltrated the city's system.",
						"japanese": "それは都市のシステム深くに侵入した、古き悪意だ。",
						"chinese": "它是深入城市系统内部的古老邪恶。",
						"french": "C'est une ancienne malignité qui a profondément infiltré le système de la ville.",
						"spanish": "Es una antigua malicia que ha infiltrado profundamente el sistema de la ciudad.",
						"vietnamese": "Đó là một ác ý cổ xưa đã xâm nhập sâu vào hệ thống của thành phố.",
						"thai": "มันคือความชั่วร้ายโบราณที่แทรกซึมลึกเข้าไปในระบบของเมือง",
						"hindi": "यह एक प्राचीन द्वेष है जो शहर की प्रणाली में गहराई तक घुसपैठ कर चुका है।"
					},
					"speaker": "echo",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이대로 가면, 진실은 영원히 잊힐 거야.",
						"english": "If we continue like this, the truth will be forgotten forever.",
						"japanese": "このままでは、真実は永遠に忘れ去られるだろう。",
						"chinese": "这样下去，真相将永远被遗忘。",
						"french": "Si nous continuons ainsi, la vérité sera à jamais oubliée.",
						"spanish": "Si seguimos así, la verdad será olvidada para siempre.",
						"vietnamese": "Cứ thế này, sự thật sẽ bị lãng quên mãi mãi.",
						"thai": "ถ้าเป็นแบบนี้ต่อไป ความจริงจะถูกลืมไปตลอดกาล",
						"hindi": "यदि हम ऐसे ही चलते रहे, तो सत्य हमेशा के लिए भुला दिया जाएगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "막을 수 있어.",
						"english": "We can stop it.",
						"japanese": "止められる。",
						"chinese": "可以阻止。",
						"french": "Nous pouvons l'arrêter.",
						"spanish": "Podemos detenerlo.",
						"vietnamese": "Có thể ngăn chặn.",
						"thai": "หยุดมันได้",
						"hindi": "रोक सकते हैं।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "쉽지 않을 거야. 이 망령은 너희가 예상하는 것보다 훨씬 거대해.",
						"english": "It won't be easy. This specter is far greater than you imagine.",
						"japanese": "容易ではないだろう。この亡霊は、お前たちが想像するよりもはるかに巨大だ。",
						"chinese": "不会容易。这怨灵比你们想象的要强大得多。",
						"french": "Ce ne sera pas facile. Ce spectre est bien plus grand que vous ne l'imaginez.",
						"spanish": "No será fácil. Este espectro es mucho más grande de lo que imaginan.",
						"vietnamese": "Sẽ không dễ đâu. Bóng ma này lớn hơn nhiều so với những gì các ngươi nghĩ.",
						"thai": "มันจะไม่ง่าย วิญญาณร้ายนี้ใหญ่โตกว่าที่พวกเจ้าคาดคิดนัก",
						"hindi": "यह आसान नहीं होगा। यह प्रेत तुम्हारी कल्पना से कहीं ज़्यादा विशाल है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "echo"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들… 잊혀진 과거는 그대로 두어야 해.",
						"english": "Fools… The forgotten past should remain forgotten.",
						"japanese": "愚か者め… 忘れ去られた過去は、そのままにしておくべきだ。",
						"chinese": "愚蠢的人类… 被遗忘的过去就该让它继续沉睡。",
						"french": "Imbéciles… Le passé oublié devrait le rester.",
						"spanish": "Necios… El pasado olvidado debe permanecer así.",
						"vietnamese": "Những kẻ ngốc… Quá khứ đã bị lãng quên nên để yên.",
						"thai": "เจ้าพวกโง่… อดีตที่ถูกลืมควรปล่อยให้เป็นเช่นนั้น",
						"hindi": "मूर्खों… भूला हुआ अतीत भूला ही रहना चाहिए।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "과거의 망령 따위가 현재를 조작하게 두지 않아.",
						"english": "I won't let some specter of the past manipulate the present.",
						"japanese": "過去の亡霊などに、現在を操らせはしない。",
						"chinese": "我不会让过去的怨灵操纵现在。",
						"french": "Je ne laisserai pas un spectre du passé manipuler le présent.",
						"spanish": "No dejaré que el espectro del pasado manipule el presente.",
						"vietnamese": "Ta sẽ không để bóng ma quá khứ thao túng hiện tại.",
						"thai": "ข้าจะไม่ยอมให้วิญญาณร้ายจากอดีตบงการปัจจุบัน",
						"hindi": "मैं अतीत के प्रेत को वर्तमान को हेरफेर करने नहीं दूँगा।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네 발버둥이… 무슨 의미가 있을까?",
						"english": "What meaning could your struggles possibly have?",
						"japanese": "お前の足掻きに… 何の意味があるというのだ？",
						"chinese": "你的挣扎… 又有什么意义呢？",
						"french": "Quel sens tes luttes pourraient-elles bien avoir ?",
						"spanish": "¿Qué sentido pueden tener tus esfuerzos?",
						"vietnamese": "Sự vùng vẫy của ngươi… có ý nghĩa gì chứ?",
						"thai": "การดิ้นรนของเจ้า… จะมีความหมายอะไร?",
						"hindi": "तुम्हारे संघर्ष का… क्या अर्थ होगा?"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "망령은… 사라지지 않아. 그저… 잠시 물러날 뿐.",
						"english": "The specter… doesn't vanish. It merely… retreats for a while.",
						"japanese": "亡霊は… 消え去りはしない。ただ… しばらく退くだけだ。",
						"chinese": "怨灵… 不会消失。它只是… 暂时退却。",
						"french": "Le spectre… ne disparaît pas. Il ne fait que… se retirer un instant.",
						"spanish": "El espectro… no desaparece. Solo… se retira por un tiempo.",
						"vietnamese": "Bóng ma… không biến mất. Nó chỉ… tạm thời lùi lại thôi.",
						"thai": "วิญญาณร้าย… ไม่ได้หายไป มันแค่… ถอยไปชั่วคราวเท่านั้น",
						"hindi": "प्रेत… गायब नहीं होता। वह बस… कुछ देर के लिए पीछे हटता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아직 끝이 아니야. 진짜는 이제부터다.",
						"english": "It's not over yet. The real challenge begins now.",
						"japanese": "まだ終わりじゃない。本番はこれからだ。",
						"chinese": "还没结束。真正的挑战现在才开始。",
						"french": "Ce n'est pas encore fini. Le vrai défi commence maintenant.",
						"spanish": "Aún no ha terminado. Lo real empieza ahora.",
						"vietnamese": "Vẫn chưa kết thúc đâu. Phần thật sự bây giờ mới bắt đầu.",
						"thai": "ยังไม่จบหรอก ของจริงเพิ่งจะเริ่มจากนี้ไปต่างหาก",
						"hindi": "यह अभी खत्म नहीं हुआ है। असली खेल अब शुरू होता है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 '망령'은 소멸했다. 그러나 도시에 흐르는 혼돈은 여전했다. 또 다른 잊혀진 기록이, 진실을 기다리고 있었다.",
						"english": "The fallen 'specter' was annihilated. But the chaos flowing through the city remained. Another forgotten record awaited the truth.",
						"japanese": "倒れた「亡霊」は消滅した。しかし、街に流れる混沌は変わらなかった。また別の忘れ去られた記録が、真実を待っていた。",
						"chinese": "倒下的“怨灵”消散了。然而，流淌在城市中的混沌依旧。另一段被遗忘的记录，正在等待真相。",
						"french": "Le \"spectre\" vaincu fut anéanti. Mais le chaos qui régnait dans la ville persistait. Un autre registre oublié attendait la vérité.",
						"spanish": "El \"espectro\" caído fue aniquilado. Pero el caos que fluía por la ciudad persistía. Otro registro olvidado esperaba la verdad.",
						"vietnamese": "'Bóng ma' đã ngã xuống và biến mất. Tuy nhiên, sự hỗn loạn chảy trong thành phố vẫn còn đó. Một ghi chép bị lãng quên khác đang chờ đợi sự thật.",
						"thai": "'วิญญาณร้าย' ที่ล้มลงได้สลายไปแล้ว แต่ความโกลาหลที่ไหลเวียนอยู่ในเมืองยังคงอยู่ บันทึกที่ถูกลืมเลือนอีกชิ้นกำลังรอคอยความจริง",
						"hindi": "गिरा हुआ 'प्रेत' नष्ट हो गया। लेकिन शहर में बहने वाली अराजकता वैसी ही थी। एक और भूला हुआ रिकॉर्ड, सच्चाई का इंतजार कर रहा था।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "과거의 망령이 다시금 도시를 집어삼켰다.",
						"english": "The specter of the past once again swallowed the city.",
						"japanese": "過去の亡霊が、再び都市を飲み込んだ。",
						"chinese": "过去的怨灵再次吞噬了这座城市。",
						"french": "Le spectre du passé a de nouveau englouti la ville.",
						"spanish": "El espectro del pasado volvió a engullir la ciudad.",
						"vietnamese": "Bóng ma quá khứ một lần nữa nuốt chửng thành phố.",
						"thai": "วิญญาณร้ายจากอดีตได้กลืนกินเมืองอีกครั้ง",
						"hindi": "अतीत के प्रेत ने एक बार फिर शहर को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ… 終わってない。",
						"chinese": "还没… 结束。",
						"french": "Ce n'est pas fini… pas encore.",
						"spanish": "Todavía no ha terminado...",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบแค่นี้หรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실을 찾는 건… 허무한 일이지.",
						"english": "Seeking the truth... is futile.",
						"japanese": "真実を追うのは… 虚しいことだ。",
						"chinese": "追寻真相… 只是徒劳。",
						"french": "Chercher la vérité… est vain.",
						"spanish": "Buscar la verdad… es inútil.",
						"vietnamese": "Đi tìm sự thật… thật vô ích.",
						"thai": "การตามหาความจริง… ช่างไร้ค่า",
						"hindi": "सच की तलाश… व्यर्थ है।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
