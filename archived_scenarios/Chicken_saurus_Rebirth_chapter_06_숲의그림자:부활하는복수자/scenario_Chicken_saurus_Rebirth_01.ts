export const scenario_Chicken_saurus_Rebirth_01 = {
	"scenario_id": "Chicken_saurus_Rebirth_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"치킨-사우루스 사건 이후, 숲은 겉보기엔 평온했다.",
			"하지만 침묵 속에는 불안한 그림자가 드리워졌다.",
			"뒤틀린 식물들과 기묘한 기운. 세상은 다시 한번 변하고 있었다.",
			"새로운 위협의 전조. 다시, 숲으로."
		],
		"english": [
			"After the Chicken-saurus incident, the forest seemed peaceful.",
			"But in the silence, an unsettling shadow loomed.",
			"Twisted plants and an eerie aura. The world was changing once again.",
			"A prelude to a new threat. Back to the forest, again."
		],
		"japanese": [
			"チキンサウルス事件以降、森は一見平穏だった。",
			"しかし、その静寂の裏には不穏な影が潜んでいた。",
			"歪んだ植物と奇妙な気配。世界は再び変わり始めていた。",
			"新たな脅威の予兆。再び、森へ。"
		],
		"chinese": [
			"鸡龙事件之后，森林表面上风平浪静。",
			"然而，寂静中笼罩着不安的阴影。",
			"扭曲的植物和诡异的气息。世界再次悄然变化。",
			"新威胁的预兆。再次，前往森林。"
		],
		"french": [
			"Après l'incident du Poulet-saurus, la forêt semblait paisible.",
			"Mais dans le silence, une ombre inquiétante planait.",
			"Des plantes tordues et une aura étrange. Le monde changeait encore une fois.",
			"Le prélude d'une nouvelle menace. Retour à la forêt, encore."
		],
		"spanish": [
			"Tras el incidente del Pollo-saurio, el bosque parecía tranquilo.",
			"Pero en el silencio, una sombra inquietante se cernía.",
			"Plantas retorcidas y un aura extraña. El mundo estaba cambiando una vez más.",
			"El presagio de una nueva amenaza. De vuelta al bosque, otra vez."
		],
		"vietnamese": [
			"Sau sự kiện Gà-khủng long, khu rừng bề ngoài yên bình.",
			"Nhưng trong sự im lặng, một bóng tối bất an bao trùm.",
			"Thực vật biến dạng và một luồng khí kỳ lạ. Thế giới lại một lần nữa thay đổi.",
			"Điềm báo một mối đe dọa mới. Trở lại rừng."
		],
		"thai": [
			"หลังเหตุการณ์ไก่ซอรัส ป่าดูสงบสุข",
			"แต่ในความเงียบงัน มีเงามืดอันไม่สงบแฝงอยู่",
			"พืชบิดเบี้ยวและพลังงานแปลกประหลาด โลกกำลังเปลี่ยนไปอีกครั้ง",
			"ลางบอกเหตุของภัยคุกคามใหม่ กลับสู่ป่าอีกครั้ง"
		],
		"hindi": [
			"चिकन-सॉरस घटना के बाद, जंगल बाहरी तौर पर शांत था।",
			"लेकिन शांति में, एक बेचैन करने वाली परछाईं मंडरा रही थी।",
			"मुड़े हुए पौधे और एक अजीब ऊर्जा। दुनिया एक बार फिर बदल रही थी।",
			"एक नए खतरे का पूर्वाभास। फिर से, जंगल की ओर।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사건 이후, 숲은 이상하리만큼 조용했다. 너무나도.",
						"english": "After the incident, the forest was eerily quiet. Too quiet.",
						"japanese": "事件以降、森は奇妙なほど静かだった。あまりにも静かすぎた。",
						"chinese": "事件之后，森林异常地安静。太安静了。",
						"french": "Après l'incident, la forêt était étrangement silencieuse. Trop silencieuse.",
						"spanish": "Tras el incidente, el bosque estaba extrañamente silencioso. Demasiado silencioso.",
						"vietnamese": "Sau sự kiện, khu rừng yên tĩnh một cách kỳ lạ. Quá yên tĩnh.",
						"thai": "หลังเกิดเหตุการณ์ ป่าเงียบสงบผิดปกติ เงียบเกินไป",
						"hindi": "घटना के बाद, जंगल अजीब तरह से शांत था। बहुत ज़्यादा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "이 침묵이 더 두려워요. 분명 무언가 변하고 있어요.",
						"english": "This silence frightens me more. Something is definitely changing.",
						"japanese": "この静けさがかえって恐ろしい。何かが確実に変わっています。",
						"chinese": "这寂静更让我害怕。 분명 뭔가 변하고 있어요。",
						"french": "Ce silence m'effraie encore plus. Quelque chose est en train de changer, c'est sûr.",
						"spanish": "Este silencio me asusta más. Algo está cambiando, sin duda.",
						"vietnamese": "Sự im lặng này càng đáng sợ hơn. Chắc chắn có điều gì đó đang thay đổi.",
						"thai": "ความเงียบนี้ทำให้ฉันกลัวยิ่งกว่า มีบางอย่างกำลังเปลี่ยนไปแน่นอน",
						"hindi": "यह खामोशी मुझे और डराती है। निश्चित रूप से कुछ बदल रहा है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "치킨-사우루스 때문인가.",
						"english": "Is it because of the Chicken-saurus?",
						"japanese": "チキンサウルスが原因なのか。",
						"chinese": "是因为鸡龙吗？",
						"french": "C'est à cause du Poulet-saurus ?",
						"spanish": "¿Es por el Pollo-saurio?",
						"vietnamese": "Có phải vì Gà-khủng long không?",
						"thai": "เป็นเพราะไก่ซอรัสหรือเปล่า",
						"hindi": "क्या यह चिकन-सॉरस की वजह से है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "네. 그 존재가 밝혀진 후 숲의 균형은 완전히 깨졌어요.",
						"english": "Yes. After its existence was revealed, the forest's balance was completely shattered.",
						"japanese": "はい。その存在が明らかになってから、森の均衡は完全に崩れました。",
						"chinese": "是的。它被发现后，森林的平衡彻底被打破了。",
						"french": "Oui. Après la révélation de son existence, l'équilibre de la forêt a été complètement brisé.",
						"spanish": "Sí. Después de que se reveló su existencia, el equilibrio del bosque se rompió por completo.",
						"vietnamese": "Vâng. Sau khi sự tồn tại của nó được tiết lộ, sự cân bằng của khu rừng đã hoàn toàn bị phá vỡ.",
						"thai": "ใช่ หลังจากที่มันปรากฏตัว ความสมดุลของป่าก็พังทลายลงอย่างสิ้นเชิง",
						"hindi": "हाँ। उसके अस्तित्व का खुलासा होने के बाद, जंगल का संतुलन पूरी तरह बिगड़ गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "숲이, 변했다고?",
						"english": "The forest, changed?",
						"japanese": "森が、変わったって？",
						"chinese": "森林，变了？",
						"french": "La forêt, a changé ?",
						"spanish": "¿El bosque, ha cambiado?",
						"vietnamese": "Rừng đã thay đổi sao?",
						"thai": "ป่าเปลี่ยนไปแล้วเหรอ",
						"hindi": "जंगल, बदल गया?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "briar"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "점점 더 기괴하게 뒤틀린 식물들이 나타났다. 숲이 몸살을 앓는 것 같았다.",
						"english": "More and more grotesquely twisted plants appeared. It was as if the forest was suffering.",
						"japanese": "ますます奇怪に歪んだ植物が現れた。森が苦しんでいるようだった。",
						"chinese": "越来越多奇形怪状的扭曲植物出现。森林似乎在饱受折磨。",
						"french": "Des plantes de plus en plus grotesquement tordues sont apparues. On aurait dit que la forêt souffrait.",
						"spanish": "Cada vez aparecían más plantas grotescamente retorcidas. Parecía como si el bosque estuviera sufriendo.",
						"vietnamese": "Ngày càng nhiều cây cối biến dạng kỳ quái xuất hiện. Cứ như thể khu rừng đang đau đớn.",
						"thai": "พืชบิดเบี้ยวแปลกประหลาดปรากฏขึ้นมากขึ้นเรื่อยๆ ราวกับว่าป่ากำลังป่วยหนัก",
						"hindi": "अजीबोगरीब ढंग से मुड़े हुए पौधे बढ़ते जा रहे थे। ऐसा लग रहा था मानो जंगल बीमार पड़ गया हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 뿌리들 좀 봐. 왜 이렇게 뒤틀렸지?",
						"english": "Look at these roots. Why are they so twisted?",
						"japanese": "この根を見て。どうしてこんなにねじれているの？",
						"chinese": "看看这些根。它们为什么如此扭曲？",
						"french": "Regardez ces racines. Pourquoi sont-elles si tordues ?",
						"spanish": "Mira estas raíces. ¿Por qué están tan retorcidas?",
						"vietnamese": "Nhìn những rễ cây này đi. Sao chúng lại xoắn vặn thế này?",
						"thai": "ดูรากพวกนี้สิ ทำไมมันถึงบิดเบี้ยวขนาดนี้?",
						"hindi": "इन जड़ों को देखो। ये इतनी मुड़ी हुई क्यों हैं?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "정상적인 현상이 아니에요. 마치 고통스러워하는 것 같아요.",
						"english": "This isn't normal. It's like they're in pain.",
						"japanese": "これは普通じゃない。まるで苦しんでいるみたいだ。",
						"chinese": "这不是正常现象。它们好像在承受痛苦。",
						"french": "Ce n'est pas normal. On dirait qu'elles souffrent.",
						"spanish": "Esto no es normal. Parece que están sufriendo.",
						"vietnamese": "Đây không phải là hiện tượng bình thường. Như thể chúng đang đau đớn vậy.",
						"thai": "นี่ไม่ใช่เรื่องปกติเลย ดูเหมือนพวกมันกำลังเจ็บปวด",
						"hindi": "यह सामान्य नहीं है। ऐसा लगता है जैसे वे दर्द में हैं।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "치킨-사우루스가 남긴 흔적일지도 몰라요. 숲의 생태계를 영구히 바꾸어 놓았으니...",
						"english": "It might be traces left by the Chicken-saurus. It permanently altered the forest's ecosystem...",
						"japanese": "チキン・サウルスが残した痕跡かもしれません。森の生態系を永久に変えてしまったから...",
						"chinese": "这可能是鸡龙留下的痕迹。它永久地改变了森林的生态系统...",
						"french": "Ce pourrait être les traces laissées par le Poulet-saure. Il a modifié l'écosystème de la forêt de manière permanente...",
						"spanish": "Podrían ser rastros dejados por el Pollo-saurio. Alteró permanentemente el ecosistema del bosque...",
						"vietnamese": "Có thể là dấu vết do Khủng long Gà để lại. Nó đã vĩnh viễn thay đổi hệ sinh thái của rừng...",
						"thai": "อาจเป็นร่องรอยที่ไก่ซอรัสทิ้งไว้ก็ได้ มันเปลี่ยนระบบนิเวศของป่าไปอย่างถาวรแล้ว...",
						"hindi": "यह चिकन-सौरस द्वारा छोड़े गए निशान हो सकते हैं। इसने जंगल के पारिस्थितिकी तंत्र को स्थायी रूप से बदल दिया है..."
					},
					"speaker": "briar",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 불안해지는데.",
						"english": "I'm getting more and more uneasy.",
						"japanese": "ますます不安になってきた。",
						"chinese": "我越来越不安了。",
						"french": "Je suis de plus en plus inquiet.",
						"spanish": "Cada vez me siento más intranquilo.",
						"vietnamese": "Càng lúc tôi càng thấy bất an.",
						"thai": "ฉันรู้สึกไม่สบายใจมากขึ้นเรื่อยๆ",
						"hindi": "मैं और भी बेचैन होता जा रहा हूँ।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"speaker": "briar"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 희미하게 빛나는 버섯들이 보였다. 낯설고 기묘했다.",
						"english": "Faintly glowing mushrooms were visible in the dark. They were unfamiliar and strange.",
						"japanese": "暗闇の中に、かすかに光るキノコが見えた。それは見慣れず、奇妙だった。",
						"chinese": "在黑暗中，我看到了发出微光的蘑菇。它们陌生而奇特。",
						"french": "Des champignons faiblement lumineux étaient visibles dans l'obscurité. Ils étaient inconnus et étranges.",
						"spanish": "Hongos que brillaban débilmente eran visibles en la oscuridad. Eran extraños y desconocidos.",
						"vietnamese": "Những cây nấm phát sáng lờ mờ hiện ra trong bóng tối. Chúng xa lạ và kỳ lạ.",
						"thai": "เห็นเห็ดเรืองแสงจางๆ ในความมืด มันแปลกและไม่คุ้นเคย",
						"hindi": "अंधेरे में हल्के चमकते हुए मशरूम दिखाई दिए। वे अपरिचित और अजीब थे।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "이 버섯들… 밤에만 나타나는 신종이에요. 빛을 내는 게 특이하죠.",
						"english": "These mushrooms... they're a new species that only appears at night. It's unusual how they glow.",
						"japanese": "このキノコたち…夜にだけ現れる新種です。光るのが特徴的ですね。",
						"chinese": "这些蘑菇... 它们是只在夜间出现的新物种。发光很特别。",
						"french": "Ces champignons... c'est une nouvelle espèce qui n'apparaît que la nuit. C'est particulier qu'ils brillent.",
						"spanish": "Estos hongos... son una nueva especie que solo aparece de noche. Es peculiar que brillen.",
						"vietnamese": "Những cây nấm này... là loài mới chỉ xuất hiện vào ban đêm. Chúng phát sáng thật đặc biệt.",
						"thai": "เห็ดพวกนี้...เป็นสายพันธุ์ใหม่ที่ปรากฏเฉพาะตอนกลางคืน การเรืองแสงเป็นเอกลักษณ์ของมัน",
						"hindi": "ये मशरूम... एक नई प्रजाति हैं जो केवल रात में दिखती हैं। इनका चमकना असामान्य है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "예쁘다기보다… 섬뜩해.",
						"english": "Rather than pretty... they're eerie.",
						"japanese": "美しいというより…不気味だ。",
						"chinese": "与其说是漂亮...不如说是诡异。",
						"french": "Plus qu'être jolis... ils sont sinistres.",
						"spanish": "Más que bonitos... son espeluznantes.",
						"vietnamese": "Không phải đẹp... mà là rợn người.",
						"thai": "มากกว่าสวย... มันน่าขนลุก",
						"hindi": "सुंदर कहने के बजाय... वे डरावने हैं।"
					}
				},
				{
					"content": {
						"korean": "숲의 고대 마법이 깨어나면서 생긴 현상일 수도 있어요.",
						"english": "It might be a phenomenon caused by the awakening of the forest's ancient magic.",
						"japanese": "森の古代の魔法が目覚めたことで起きた現象かもしれません。",
						"chinese": "这可能是森林古老魔法觉醒引起的现象。",
						"french": "Ce pourrait être un phénomène causé par l'éveil de la magie ancienne de la forêt.",
						"spanish": "Podría ser un fenómeno causado por el despertar de la magia ancestral del bosque.",
						"vietnamese": "Có thể đây là hiện tượng do phép thuật cổ xưa của khu rừng thức tỉnh.",
						"thai": "อาจเป็นปรากฏการณ์ที่เกิดจากการตื่นขึ้นของเวทมนตร์โบราณในป่า",
						"hindi": "यह जंगल के प्राचीन जादू के जागृत होने से हुई घटना हो सकती है।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "더 깊이 조사해야 합니다. 이 숲의 모든 것이 변하고 있어요.",
						"english": "We need to investigate deeper. Everything in this forest is changing.",
						"japanese": "もっと深く調査する必要があります。この森のすべてが変わっている。",
						"chinese": "我们需要更深入地调查。这片森林的一切都在改变。",
						"french": "Nous devons enquêter plus profondément. Tout change dans cette forêt.",
						"spanish": "Necesitamos investigar más a fondo. Todo en este bosque está cambiando.",
						"vietnamese": "Chúng ta cần điều tra sâu hơn. Mọi thứ trong khu rừng này đang thay đổi.",
						"thai": "เราต้องสืบสวนให้ลึกกว่านี้ ทุกสิ่งในป่านี้กำลังเปลี่ยนไป",
						"hindi": "हमें और गहराई से जांच करनी होगी। इस जंगल में सब कुछ बदल रहा है।"
					},
					"type": "speech",
					"speaker": "briar",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "briar",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 알 수 없는 기운이 발목을 붙잡는 듯했다.",
						"english": "The forest grew deeper. An unknown aura seemed to hold my ankles.",
						"japanese": "森はさらに深くなった。未知の気配が足首を掴むようだった。",
						"chinese": "森林变得更深了。一股未知的气息似乎抓住了我的脚踝。",
						"french": "La forêt devint plus profonde. Une aura inconnue semblait retenir mes chevilles.",
						"spanish": "El bosque se hizo más profundo. Una energía desconocida parecía sujetar mis tobillos.",
						"vietnamese": "Khu rừng càng trở nên sâu thẳm. Một luồng khí không rõ tựa như đang níu lấy mắt cá chân.",
						"thai": "ป่าลึกเข้าไปอีก พลังงานลึกลับราวกับกำลังยึดข้อเท้าไว้",
						"hindi": "जंगल और गहरा हो गया। एक अज्ञात आभा मेरे टखनों को पकड़ रही थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "여기까지 오니, 숲의 기운이 더욱 강렬하게 느껴져요.",
						"english": "The forest's energy grows more intense the further we venture.",
						"japanese": "ここまで来ると、森の気配がさらに強く感じられます。",
						"chinese": "走到这里，森林的气息变得更加强烈了。",
						"french": "Plus on avance, plus l'aura de la forêt se fait intense.",
						"spanish": "Cuanto más nos adentramos, más fuerte se siente el aura del bosque.",
						"vietnamese": "Càng vào sâu, khí tức của rừng càng trở nên mãnh liệt hơn.",
						"thai": "ยิ่งมาถึงตรงนี้ พลังของป่ายิ่งรู้สึกรุนแรงขึ้น",
						"hindi": "यहाँ तक पहुँचने पर, जंगल की ऊर्जा और भी तीव्र महसूस होती है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이젠 되돌아갈 수도 없겠어.",
						"english": "There's no turning back now.",
						"japanese": "もう引き返せない。",
						"chinese": "看来是回不去了。",
						"french": "On ne peut plus faire demi-tour maintenant.",
						"spanish": "Ya no podemos volver atrás.",
						"vietnamese": "Giờ thì không thể quay lại được nữa rồi.",
						"thai": "ตอนนี้กลับไม่ได้แล้ว",
						"hindi": "अब हम पीछे नहीं हट सकते।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "점점 더 심각한 변화가 일어나고 있다는 증거예요.",
						"english": "This proves that increasingly drastic changes are occurring.",
						"japanese": "ますます深刻な変化が起きている証拠だ。",
						"chinese": "这是越来越严重的变化正在发生的证据。",
						"french": "C'est la preuve que des changements de plus en plus graves sont en cours.",
						"spanish": "Es la prueba de que están ocurriendo cambios cada vez más serios.",
						"vietnamese": "Đây là bằng chứng cho thấy những thay đổi ngày càng nghiêm trọng đang diễn ra.",
						"thai": "นี่คือหลักฐานว่ากำลังเกิดการเปลี่ยนแปลงที่ร้ายแรงขึ้นเรื่อยๆ",
						"hindi": "यह इस बात का सबूत है कि गंभीर परिवर्तन हो रहे हैं।"
					},
					"speaker": "briar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "분명 이 숲에는… 우리가 모르는 어떤 존재가 깨어나고 있어요.",
						"english": "Clearly, something unknown is awakening in this forest...",
						"japanese": "確かにこの森には… 私たちが知らない何かが目覚めようとしている。",
						"chinese": "很明显，这片森林里… 有我们不知道的某种存在正在苏醒。",
						"french": "De toute évidence, quelque chose que nous ignorons est en train de s'éveiller dans cette forêt…",
						"spanish": "Claramente, algo que desconocemos está despertando en este bosque...",
						"vietnamese": "Rõ ràng là trong khu rừng này… có một thứ gì đó mà chúng ta không biết đang thức tỉnh.",
						"thai": "ชัดเจนว่าในป่าแห่งนี้... มีบางสิ่งที่เราไม่รู้จักกำลังตื่นขึ้น",
						"hindi": "निश्चित रूप से, इस जंगल में… कोई अज्ञात सत्ता जागृत हो रही है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…누가 기다리고 있는 거지?",
						"english": "...Who's waiting for us?",
						"japanese": "…誰が待っているんだ？",
						"chinese": "…是谁在等着我们？",
						"french": "…Qui nous attend ?",
						"spanish": "…¿Quién nos espera?",
						"vietnamese": "…Ai đang chờ đợi vậy?",
						"thai": "...ใครกำลังรออยู่?",
						"hindi": "…कौन इंतजार कर रहा है?"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 인간들… 숲의 진정한 힘을 이해하지 못하는군.",
						"english": "Insignificant humans... You don't understand the forest's true power.",
						"japanese": "取るに足らない人間ども…森の真の力を理解していないな。",
						"chinese": "渺小的人类……不了解森林真正的力量。",
						"french": "Humains insignifiants... Vous ne comprenez pas le véritable pouvoir de la forêt.",
						"spanish": "Humanos insignificantes... No comprenden el verdadero poder del bosque.",
						"vietnamese": "Loài người thấp kém... Các ngươi không hiểu sức mạnh thực sự của khu rừng.",
						"thai": "มนุษย์ผู้ต่ำต้อย... ไม่เข้าใจพลังที่แท้จริงของป่าเลย",
						"hindi": "तुच्छ मनुष्य... तुम जंगल की असली शक्ति को नहीं समझते।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희는 그저 새로운 질서의 먹잇감이 될 뿐이다.",
						"english": "You will merely become fodder for the new order.",
						"japanese": "お前たちはただ、新たな秩序の餌食となるだけだ。",
						"chinese": "你们不过是新秩序的猎物罢了。",
						"french": "Vous ne serez que la proie du nouvel ordre.",
						"spanish": "Solo seréis el alimento del nuevo orden.",
						"vietnamese": "Các ngươi sẽ chỉ trở thành con mồi của trật tự mới.",
						"thai": "พวกเจ้าจะเป็นเพียงเหยื่อของระเบียบใหม่เท่านั้น",
						"hindi": "तुम बस नई व्यवस्था का चारा बनोगे।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아.",
						"english": "...It's not over yet. I won't give up.",
						"japanese": "…まだ終わっていない。諦めない。",
						"chinese": "……还没有结束。我不会放弃。",
						"french": "...Ce n'est pas encore fini. Je n'abandonnerai pas.",
						"spanish": "...Todavía no ha terminado. No me rendiré.",
						"vietnamese": "...Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc.",
						"thai": "...ยังไม่จบหรอก ฉันจะไม่ยอมแพ้",
						"hindi": "...अभी खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 겨우 이 정도로… 모든 것을 막을 순 없을 것이다…",
						"english": "Ugh... This alone... won't stop everything...",
						"japanese": "くぅぅ…この程度で…全てを止められると思うなよ…",
						"chinese": "呃啊……就凭这点……是无法阻止一切的……",
						"french": "Ugh... Ce n'est pas avec ça... que vous arrêterez tout...",
						"spanish": "Ugh... Esto solo... no detendrá todo...",
						"vietnamese": "Khốn kiếp... Chừng này thôi... sẽ không ngăn cản được mọi thứ đâu...",
						"thai": "อึก... แค่นี้... หยุดทุกสิ่งไม่ได้หรอก...",
						"hindi": "उफ़... बस इतना सा... सब कुछ नहीं रोक पाएगा..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국 도망쳤군.",
						"english": "They ran away, after all.",
						"japanese": "結局、逃げ出したか。",
						"chinese": "最终还是逃走了啊。",
						"french": "Ils ont fui, finalement.",
						"spanish": "Al final, huyeron.",
						"vietnamese": "Cuối cùng thì chúng cũng bỏ chạy.",
						"thai": "สุดท้ายก็หนีไปจนได้",
						"hindi": "आखिरकार, वे भाग गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 어둠 속으로 사라졌다. 숲의 불안은 계속된다.",
						"english": "The unknown enemy vanished into the darkness. The forest's unease continues.",
						"japanese": "正体不明の敵は闇に消えた。森の不安は続く。",
						"chinese": "身份不明的敌人消失在黑暗中。森林的不安仍在继续。",
						"french": "L'ennemi inconnu a disparu dans l'obscurité. L'inquiétude de la forêt persiste.",
						"spanish": "El enemigo desconocido se desvaneció en la oscuridad. La inquietud del bosque continúa.",
						"vietnamese": "Kẻ thù không rõ danh tính biến mất vào bóng tối. Sự bất an của khu rừng vẫn tiếp diễn.",
						"thai": "ศัตรูที่ไม่ระบุตัวตนหายไปในความมืด ความกังวลของป่ายังคงอยู่",
						"hindi": "अज्ञात दुश्मन अँधेरे में गायब हो गया। जंगल की अशांति जारी है।"
					}
				},
				{
					"content": {
						"korean": "이제, 숲은 더 이상 평화롭지 않다. 진짜 시작은 지금부터다.",
						"english": "Now, the forest is no longer peaceful. The real beginning is now.",
						"japanese": "もはや森に平和はない。本当の始まりは今からだ。",
						"chinese": "现在，森林不再平静。真正的开始从现在才算。",
						"french": "Désormais, la forêt n'est plus paisible. Le véritable début est maintenant.",
						"spanish": "Ahora, el bosque ya no es pacífico. El verdadero comienzo es ahora.",
						"vietnamese": "Giờ đây, khu rừng không còn yên bình nữa. Sự khởi đầu thực sự là bây giờ.",
						"thai": "บัดนี้ ป่าไม่สงบสุขอีกต่อไป การเริ่มต้นที่แท้จริงคือตอนนี้",
						"hindi": "अब जंगल शांत नहीं है। असली शुरुआत अब है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "조심하세요! 저 기운… 예사롭지 않아요!",
						"english": "Be careful! That aura... it's unusual!",
						"japanese": "気をつけて！あの気配…尋常じゃない！",
						"chinese": "小心！那股气息…非同寻常！",
						"french": "Attention ! Cette aura… elle n'est pas ordinaire !",
						"spanish": "¡Cuidado! Esa energía… ¡no es normal!",
						"vietnamese": "Cẩn thận! Khí tức đó… không hề tầm thường!",
						"thai": "ระวัง! พลังนั่น... ไม่ธรรมดาเลย!",
						"hindi": "सावधान! वह ऊर्जा… असामान्य है!"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…드디어 나타났나.",
						"english": "...So, it finally shows itself.",
						"japanese": "…ついに現れたか。",
						"chinese": "…终于出现了吗。",
						"french": "…Alors, tu te montres enfin.",
						"spanish": "…Así que, por fin apareces.",
						"vietnamese": "…Cuối cùng cũng xuất hiện rồi sao.",
						"thai": "...ในที่สุดก็ปรากฏตัวแล้วสินะ",
						"hindi": "…तो, आखिरकार प्रकट हो ही गए।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희 인간들은 또다시 이 숲을 침범하는구나.",
						"english": "You humans dare to invade this forest again.",
						"japanese": "お前たち人間は、またこの森を侵すのか。",
						"chinese": "你们人类又一次侵犯这片森林。",
						"french": "Vous, les humains, envahissez à nouveau cette forêt.",
						"spanish": "Vosotros, los humanos, volvéis a invadir este bosque.",
						"vietnamese": "Các ngươi loài người lại một lần nữa xâm phạm khu rừng này.",
						"thai": "พวกเจ้ามนุษย์บุกรุกป่านี้อีกแล้ว",
						"hindi": "तुम इंसान एक बार फिर इस जंगल पर अतिक्रमण कर रहे हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자들… 새로운 질서를 거부하는가?",
						"english": "Foolish ones… do you reject the new order?",
						"japanese": "愚かな者たち…新たな秩序を拒むのか？",
						"chinese": "愚蠢的家伙们…你们拒绝新的秩序吗？",
						"french": "Imbéciles… refusez-vous le nouvel ordre ?",
						"spanish": "Necios… ¿rechazáis el nuevo orden?",
						"vietnamese": "Những kẻ ngu ngốc… các ngươi từ chối trật tự mới ư?",
						"thai": "พวกโง่เง่า... พวกเจ้าปฏิเสธระเบียบใหม่หรือ?",
						"hindi": "मूर्खों… क्या तुम नई व्यवस्था को अस्वीकार करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네가 이 숲을 이렇게 만들었나?",
						"english": "Was it you who did this to the forest?",
						"japanese": "お前がこの森をこんな風にしたのか？",
						"chinese": "是你把这片森林变成这样的吗？",
						"french": "C'est toi qui as fait ça à la forêt ?",
						"spanish": "¿Fuiste tú quien le hizo esto al bosque?",
						"vietnamese": "Ngươi đã biến khu rừng này thành ra thế này sao?",
						"thai": "เจ้าเป็นคนทำให้ป่านี้เป็นแบบนี้ใช่ไหม?",
						"hindi": "क्या तुमने इस जंगल को ऐसा बनाया है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		}
	]
} as const;
