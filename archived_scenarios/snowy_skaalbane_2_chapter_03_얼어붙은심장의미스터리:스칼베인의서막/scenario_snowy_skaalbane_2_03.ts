export const scenario_snowy_skaalbane_2_03 = {
	"scenario_id": "snowy_skaalbane_2_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
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
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 기둥의 입구. 차가운 공기가 폐부를 찔렀다.",
						"english": "Entrance to the ice pillar. Cold air pierced my lungs.",
						"japanese": "氷の柱の入り口。冷たい空気が肺を刺した。",
						"chinese": "冰柱的入口。冰冷的空气刺入肺腑。",
						"french": "Entrée du pilier de glace. L'air froid transperçait mes poumons.",
						"spanish": "Entrada al pilar de hielo. El aire frío me perforaba los pulmones.",
						"vietnamese": "Lối vào cột băng. Không khí lạnh buốt đâm xuyên phổi.",
						"thai": "ทางเข้าเสาน้ำแข็ง อากาศเย็นเจาะปอด",
						"hindi": "बर्फ़ीले खंभे का प्रवेश द्वार। ठंडी हवा फेफड़ों को भेद रही थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가 기둥 내부… 진짜 유적 맞아?",
						"english": "This is inside the pillar... Is this really a ruin?",
						"japanese": "ここが柱の内部か…本当に遺跡なのか？",
						"chinese": "这里是柱子内部……真是遗迹吗？",
						"french": "C'est l'intérieur du pilier... Est-ce vraiment une ruine ?",
						"spanish": "Esto es el interior del pilar... ¿Es esto realmente una ruina?",
						"vietnamese": "Đây là bên trong cột... Có thật là di tích không?",
						"thai": "นี่คือด้านในของเสา... นี่คือซากปรักหักพังจริงๆ เหรอ?",
						"hindi": "यह खंभे का अंदर है… क्या यह सचमुच एक खंडहर है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "anuk",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "…아니요. 예감이 좋지 않아요. 뭔가… 갇혀 있어요.",
						"english": "...No. I have a bad feeling. Something... is trapped.",
						"japanese": "…いいえ。嫌な予感がします。何かが…閉じ込められています。",
						"chinese": "……不。我有不好的预感。有什么东西……被困住了。",
						"french": "...Non. J'ai un mauvais pressentiment. Quelque chose... est piégé.",
						"spanish": "...No. Tengo un mal presentimiento. Algo... está atrapado.",
						"vietnamese": "...Không. Tôi có linh cảm không lành. Có gì đó... đang bị mắc kẹt.",
						"thai": "...ไม่สิ ฉันรู้สึกไม่ดี มีบางอย่าง... ถูกขังไว้",
						"hindi": "...नहीं। मुझे एक बुरा एहसास हो रहा है। कुछ… फंसा हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "갇혀 있다고?",
						"english": "Trapped?",
						"japanese": "閉じ込められている、と？",
						"chinese": "被困住了？",
						"french": "Piégé ?",
						"spanish": "¿Atrapado?",
						"vietnamese": "Bị mắc kẹt à?",
						"thai": "ถูกขังไว้เหรอ?",
						"hindi": "फंसा हुआ?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "네. 살아있지 않은 것이 살아있는 것을 갈구하는 듯한… 불길한 느낌이에요.",
						"english": "Yes. It's an ominous feeling... as if something not alive is yearning for something alive.",
						"japanese": "はい。生きていないものが生きているものを渇望しているような…不吉な予感です。",
						"chinese": "是的。那是一种不祥的感觉……就像没有生命的东西渴望着有生命的东西。",
						"french": "Oui. C'est un sentiment sinistre... comme si quelque chose d'inanimé désirait quelque chose de vivant.",
						"spanish": "Sí. Es una sensación siniestra... como si algo inanimado anhelara algo vivo.",
						"vietnamese": "Vâng. Đó là một cảm giác đáng ngại... như thể một thứ không sống đang khao khát một thứ có sự sống.",
						"thai": "ใช่ค่ะ เป็นความรู้สึกไม่เป็นมงคล... เหมือนบางสิ่งที่ไม่มีชีวิตกำลังโหยหาบางสิ่งที่มีชีวิต",
						"hindi": "हाँ। यह एक अशुभ एहसास है… जैसे कुछ निर्जीव चीज़ जीवित चीज़ों को तरस रही हो।"
					},
					"speaker": "anuk",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "더욱 강렬해지는 한기… 그리고 희미한 비명소리.",
						"english": "The chill intensifies... and faint screams.",
						"japanese": "さらに強まる冷気…そして、かすかな悲鳴。",
						"chinese": "寒气愈发强烈……以及微弱的尖叫声。",
						"french": "Le froid s'intensifie... et de faibles cris.",
						"spanish": "El frío se intensifica... y débiles gritos.",
						"vietnamese": "Cái lạnh càng lúc càng dữ dội... và những tiếng hét yếu ớt.",
						"thai": "ความหนาวเย็นที่ทวีความรุนแรงขึ้น... และเสียงกรีดร้องที่แผ่วเบา",
						"hindi": "ठंडक और तेज़ हो रही है… और धीमी चीखें।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "…어? 고향 집. 따뜻한 난로 앞에 앉아있네.",
						"english": "Oh? My hometown. Sitting in front of a warm fireplace.",
						"japanese": "あれ？故郷の家。暖かい暖炉の前に座ってる。",
						"chinese": "咦？故乡的家。正坐在温暖的炉火前。",
						"french": "Oh ? Ma maison natale. Je suis assise devant un feu de cheminée.",
						"spanish": "¿Eh? Mi hogar. Estoy sentado frente a una cálida chimenea.",
						"vietnamese": "Ơ? Nhà của tôi. Tôi đang ngồi trước lò sưởi ấm áp.",
						"thai": "ฮะ? บ้านเกิด กำลังนั่งอยู่หน้าเตาผิงอุ่นๆ",
						"hindi": "अरे? मेरा पैतृक घर। गर्म अँगीठी के सामने बैठा हूँ।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "엄마… 보고 싶다.",
						"english": "Mom... I miss you.",
						"japanese": "お母さん… 会いたい。",
						"chinese": "妈妈… 我好想你。",
						"french": "Maman... Tu me manques.",
						"spanish": "Mamá... Te extraño.",
						"vietnamese": "Mẹ... Con nhớ mẹ.",
						"thai": "แม่... คิดถึงจัง",
						"hindi": "माँ... मुझे तुम्हारी याद आती है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "다들 왜 그래? 정신 차려!",
						"english": "What's wrong with everyone? Snap out of it!",
						"japanese": "みんなどうしたの？しっかりして！",
						"chinese": "你们都怎么了？清醒一点！",
						"french": "Qu'est-ce qui ne va pas avec tout le monde ? Reprenez-vous !",
						"spanish": "¿Qué les pasa a todos? ¡Reaccionen!",
						"vietnamese": "Mọi người bị sao vậy? Tỉnh táo lại đi!",
						"thai": "ทุกคนเป็นอะไรไป? มีสติหน่อย!",
						"hindi": "सबको क्या हुआ है? होश में आओ!"
					},
					"emotion": "angry"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "환영이에요! 기둥이… 기억을 왜곡하고 있어요.",
						"english": "It's a hallucination! The pillar... is distorting memories.",
						"japanese": "幻覚よ！柱が…記憶を歪めているわ。",
						"chinese": "这是幻觉！石柱…正在扭曲记忆。",
						"french": "C'est une illusion ! Le pilier... déforme les souvenirs.",
						"spanish": "¡Es una ilusión! El pilar... está distorsionando los recuerdos.",
						"vietnamese": "Đó là ảo ảnh! Cột trụ... đang bóp méo ký ức.",
						"thai": "มันคือภาพหลอน! เสานี่... กำลังบิดเบือนความทรงจำ",
						"hindi": "यह एक मतिभ्रम है! खंभा... यादों को विकृत कर रहा है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "anuk"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이봐… 난 정말로 가족과 함께 있었어.",
						"english": "Hey... I really was with my family.",
						"japanese": "おい…俺は本当に家族と一緒にいたんだ。",
						"chinese": "喂…我真的和家人在一起。",
						"french": "Hé... J'étais vraiment avec ma famille.",
						"spanish": "Oye... Realmente estaba con mi familia.",
						"vietnamese": "Này... Tôi thực sự đã ở bên gia đình mình.",
						"thai": "เฮ้... ฉันอยู่กับครอบครัวจริงๆ นะ",
						"hindi": "अरे... मैं सच में अपने परिवार के साथ था।"
					},
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 뭔가 이상해. 우리가 힘이 빠지는 것 같지 않아?",
						"english": "Something's wrong. Don't you feel like we're losing strength?",
						"japanese": "何かおかしい。俺たち、力が抜けていくような気がしないか？",
						"chinese": "这有点不对劲。你们不觉得我们正在失去力量吗？",
						"french": "Il y a quelque chose qui ne va pas. Vous ne sentez pas qu'on perd nos forces ?",
						"spanish": "Esto es extraño. ¿No sienten que estamos perdiendo fuerza?",
						"vietnamese": "Có gì đó không ổn. Mọi người không cảm thấy mình đang mất sức sao?",
						"thai": "มีบางอย่างผิดปกติ พวกเราไม่รู้สึกเหมือนกำลังอ่อนแรงลงเหรอ?",
						"hindi": "कुछ तो गड़बड़ है। क्या तुम्हें नहीं लगता कि हम ताकत खो रहे हैं?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "anuk",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "기억뿐만이 아니에요. 기둥이… 우리의 생명력을 흡수하고 있어요.",
						"english": "It's not just memories. The pillar... is absorbing our life force.",
						"japanese": "記憶だけじゃないわ。柱が…私たちの生命力を吸い取ってる。",
						"chinese": "不仅仅是记忆。石柱…正在吸收我们的生命力。",
						"french": "Ce ne sont pas que les souvenirs. Le pilier... absorbe notre force vitale.",
						"spanish": "No son solo recuerdos. El pilar... está absorbiendo nuestra fuerza vital.",
						"vietnamese": "Không chỉ là ký ức. Cột trụ... đang hấp thụ sinh lực của chúng ta.",
						"thai": "ไม่ใช่แค่ความทรงจำ เสานี่... กำลังดูดซับพลังชีวิตของเรา",
						"hindi": "सिर्फ यादें ही नहीं। खंभा... हमारी जीवन शक्ति को सोख रहा है।"
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼! 유물이 아니었어?",
						"english": "No way! Wasn't it an artifact?",
						"japanese": "馬鹿な！遺物じゃなかったのか？",
						"chinese": "胡说八道！这不是遗物吗？",
						"french": "Impossible ! Ce n'était pas un artefact ?",
						"spanish": "¡Imposible! ¿No era una reliquia?",
						"vietnamese": "Không thể nào! Nó không phải là một cổ vật sao?",
						"thai": "เป็นไปไม่ได้! มันไม่ใช่สิ่งประดิษฐ์เหรอ?",
						"hindi": "असंभव! क्या यह कोई कलाकृति नहीं थी?"
					}
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "네. 단순한 유적이 아니에요. 분명… 살아있지 않은 무언가가… 우리를 이용하고 있어요.",
						"english": "Yes. It's not just a simple ruin. Clearly... something not alive... is using us.",
						"japanese": "ええ。ただの遺跡じゃないわ。きっと…生きていない何かが…私たちを利用しているのよ。",
						"chinese": "是的。这不仅仅是简单的遗迹。显然…某种非生命的东西…正在利用我们。",
						"french": "Oui. Ce n'est pas une simple ruine. Clairement... quelque chose qui n'est pas vivant... nous utilise.",
						"spanish": "Sí. No es una simple ruina. Claramente... algo que no está vivo... nos está usando.",
						"vietnamese": "Vâng. Nó không chỉ là một tàn tích đơn thuần. Rõ ràng... một thứ gì đó không sống... đang lợi dụng chúng ta.",
						"thai": "ใช่ มันไม่ใช่แค่ซากปรักหักพังธรรมดาๆ อย่างเห็นได้ชัด... บางสิ่งที่ไม่ใช่สิ่งมีชีวิต... กำลังใช้ประโยชน์จากเรา",
						"hindi": "हाँ। यह सिर्फ एक साधारण खंडहर नहीं है। स्पष्ट रूप से... कुछ ऐसा जो जीवित नहीं है... हमें इस्तेमाल कर रहा है।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "점점 더 추워져… 몸이 움직이질 않아.",
						"english": "It's getting colder and colder... My body won't move.",
						"japanese": "だんだん寒くなってきて…体が動かない。",
						"chinese": "越来越冷了…身体动不了了。",
						"french": "Il fait de plus en plus froid... Mon corps ne bouge plus.",
						"spanish": "Cada vez hace más frío... Mi cuerpo no se mueve.",
						"vietnamese": "Càng ngày càng lạnh... Cơ thể không thể cử động được.",
						"thai": "หนาวขึ้นเรื่อยๆ... ร่างกายขยับไม่ได้เลย",
						"hindi": "increasingly ठंड बढ़ रही है... मेरा शरीर हिल नहीं रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "이 기둥은… 살아있는 감옥이에요. 약속을 어긴 자들을 가두는 곳.",
						"english": "This pillar... is a living prison. A place to confine those who broke their vows.",
						"japanese": "この柱は…生きた牢獄です。約束を破った者たちを閉じ込める場所。",
						"chinese": "这根柱子……是一个活的监狱。囚禁那些违背誓言之人。",
						"french": "Ce pilier... est une prison vivante. Un lieu pour confiner ceux qui ont brisé leurs vœux.",
						"spanish": "Este pilar... es una prisión viviente. Un lugar para confinar a quienes rompieron sus votos.",
						"vietnamese": "Cây cột này... là một nhà tù sống. Nơi giam cầm những kẻ đã phá vỡ lời thề.",
						"thai": "เสานี้... คือคุกมีชีวิต สถานที่กักขังผู้ที่ผิดคำสาบาน",
						"hindi": "यह खंभा... एक जीवित कारागार है। उन लोगों को कैद करने की जगह जिन्होंने अपनी प्रतिज्ञा तोड़ी।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그럼 우리가… 갇힌 건가?",
						"english": "So... are we trapped?",
						"japanese": "じゃあ私たち…閉じ込められたの？",
						"chinese": "那么我们……被困住了吗？",
						"french": "Alors... sommes-nous piégés ?",
						"spanish": "¿Entonces... estamos atrapados?",
						"vietnamese": "Vậy là chúng ta... bị mắc kẹt rồi sao?",
						"thai": "ถ้าอย่างนั้น... เราถูกขังแล้วเหรอ?",
						"hindi": "तो... क्या हम फंस गए हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "정확히는… 제물이 되고 있어요. 이 기둥을 활성화시키기 위한…",
						"english": "More accurately... we're becoming sacrifices. To activate this pillar...",
						"japanese": "正確には…生贄にされています。この柱を活性化させるための…",
						"chinese": "确切地说……我们正在成为祭品。为了启动这根柱子……",
						"french": "Plus précisément... nous devenons des sacrifices. Pour activer ce pilier...",
						"spanish": "Más exactamente... nos estamos convirtiendo en sacrificios. Para activar este pilar...",
						"vietnamese": "Chính xác hơn... chúng ta đang trở thành vật hiến tế. Để kích hoạt cây cột này...",
						"thai": "พูดให้ถูกคือ... เรากำลังเป็นเครื่องสังเวย เพื่อเปิดใช้งานเสานี้...",
						"hindi": "अधिक सटीक रूप से... हम बलि बन रहे हैं। इस खंभे को सक्रिय करने के लिए..."
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌아갈 길은 이미 희미해졌다. 남은 것은 전진뿐.",
						"english": "The path back has already faded. Only forward remains.",
						"japanese": "戻る道はすでに霞んだ。残されたのは前進のみ。",
						"chinese": "回去的路已然模糊。只剩下前进。",
						"french": "Le chemin du retour s'est déjà estompé. Il ne reste que l'avancée.",
						"spanish": "El camino de regreso ya se ha desvanecido. Solo queda avanzar.",
						"vietnamese": "Đường về đã mờ. Chỉ còn lại việc tiến về phía trước.",
						"thai": "หนทางกลับเลือนลางไปแล้ว สิ่งที่เหลืออยู่คือการเดินหน้าเท่านั้น",
						"hindi": "वापसी का रास्ता पहले ही धुंधला हो चुका है। अब केवल आगे बढ़ना बाकी है।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "기둥의 가장 깊은 곳, 거대한 얼음 결정으로 이루어진 공간. 그곳에 정체 모를 그림자가 기다리고 있었다.",
						"english": "In the deepest part of the pillar, a space made of giant ice crystals. There, an unknown shadow awaited.",
						"japanese": "柱の最も深い場所、巨大な氷の結晶でできた空間。そこに正体不明の影が待ち受けていた。",
						"chinese": "在柱子最深处，一个由巨大冰晶构成的空间。在那里，一个不知名的影子正在等候。",
						"french": "Dans la partie la plus profonde du pilier, un espace fait de gigantesques cristaux de glace. Là, une ombre inconnue attendait.",
						"spanish": "En lo más profundo del pilar, un espacio hecho de gigantescos cristales de hielo. Allí, una sombra desconocida esperaba.",
						"vietnamese": "Ở nơi sâu nhất của cây cột, một không gian được tạo thành từ những tinh thể băng khổng lồ. Ở đó, một bóng đen không rõ danh tính đang chờ đợi.",
						"thai": "ในส่วนที่ลึกที่สุดของเสา ห้องที่ทำจากผลึกน้ำแข็งขนาดใหญ่ เงาลึกลับกำลังรอคอยอยู่ที่นั่น",
						"hindi": "स्तंभ के सबसे गहरे हिस्से में, विशाल बर्फ के क्रिस्टल से बना एक स्थान। वहाँ, एक अज्ञात छाया प्रतीक्षा कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "환영에 현혹된 어리석은 자들… 결국 여기까지 왔군.",
						"english": "Fools deluded by illusions... You've come all this way, after all.",
						"japanese": "幻影に惑わされた愚か者ども…結局ここまで来たか。",
						"chinese": "被幻象迷惑的愚蠢之人……终究还是来到了这里。",
						"french": "Imbéciles, aveuglés par les illusions... Vous êtes finalement arrivés jusqu'ici.",
						"spanish": "Necios engañados por las ilusiones... Después de todo, habéis llegado hasta aquí.",
						"vietnamese": "Những kẻ ngu ngốc bị ảo ảnh mê hoặc... Cuối cùng các ngươi cũng đã đến đây.",
						"thai": "พวกโง่เขลาที่หลงผิดจากภาพลวงตา... สุดท้ายก็มาถึงที่นี่จนได้",
						"hindi": "भ्रमों से धोखा खाए हुए मूर्ख... तुम आखिरकार यहाँ तक आ ही गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 걸 꾸민 건가!",
						"english": "You... You orchestrated all of this!",
						"japanese": "お前が…この全てを企んだのか！",
						"chinese": "你……是你策划了这一切！",
						"french": "Toi... Tu as orchestré tout ça !",
						"spanish": "¡Tú... Tú orquestaste todo esto!",
						"vietnamese": "Ngươi... Ngươi đã dàn dựng tất cả chuyện này!",
						"thai": "แก... แกเป็นคนจัดฉากทั้งหมดนี่เหรอ!",
						"hindi": "तुम... तुमने यह सब रचा है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "내게 바쳐질 생명은 달콤하다. 너희의 분노와 기억까지도.",
						"english": "Lives offered to me are sweet. Even your rage and memories.",
						"japanese": "私に捧げられる命は甘美だ。お前たちの怒りも記憶も、全てが。",
						"chinese": "献给我的生命是甜蜜的。就连你们的愤怒和记忆也是。",
						"french": "Les vies qui me sont offertes sont douces. Même votre rage et vos souvenirs.",
						"spanish": "Las vidas que se me ofrecen son dulces. Incluso vuestra ira y vuestros recuerdos.",
						"vietnamese": "Mạng sống dâng cho ta thật ngọt ngào. Ngay cả sự giận dữ và ký ức của các ngươi.",
						"thai": "ชีวิตที่อุทิศให้แก่ข้านั้นหอมหวาน แม้กระทั่งความโกรธและความทรงจำของพวกเจ้าก็เช่นกัน",
						"hindi": "मुझे अर्पित किए गए जीवन मधुर होते हैं। यहाँ तक कि तुम्हारा क्रोध और यादें भी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…당장 멈춰!",
						"english": "...Stop this at once!",
						"japanese": "…今すぐやめろ！",
						"chinese": "……立刻停止！",
						"french": "...Arrête ça tout de suite !",
						"spanish": "¡...Detente ahora mismo!",
						"vietnamese": "...Dừng lại ngay!",
						"thai": "...หยุดเดี๋ยวนี้!",
						"hindi": "...इसे तुरंत रोको!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "멈출 수 없어. 내 계약은… 영원히 이어질 테니.",
						"english": "I cannot stop. My pact... will continue eternally.",
						"japanese": "止めることはできない。私の契約は…永遠に続くのだから。",
						"chinese": "无法停止。我的契约……将永远持续下去。",
						"french": "Je ne peux pas m'arrêter. Mon pacte... se poursuivra éternellement.",
						"spanish": "No puedo parar. Mi pacto... continuará eternamente.",
						"vietnamese": "Không thể dừng lại. Giao ước của ta... sẽ tiếp diễn mãi mãi.",
						"thai": "หยุดไม่ได้ สัญญาของข้า... จะคงอยู่ชั่วนิรันดร์",
						"hindi": "मैं रुक नहीं सकता। मेरा समझौता... अनंत काल तक जारी रहेगा।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼음 기둥의 차가운 손아귀가 탐험대를 집어삼켰다.",
						"english": "The ice pillar's cold grasp swallowed the expedition.",
						"japanese": "氷の柱の冷たい手で、探検隊は飲み込まれた。",
						"chinese": "冰柱的寒冷魔掌吞噬了探险队。",
						"french": "L'étreinte glaciale du pilier de glace engloutit l'expédition.",
						"spanish": "La fría garra del pilar de hielo devoró a la expedición.",
						"vietnamese": "Bàn tay lạnh lẽo của cột băng đã nuốt chửng đoàn thám hiểm.",
						"thai": "กรงเล็บน้ำแข็งของเสาได้กลืนกินคณะสำรวจ",
						"hindi": "बर्फ के खंभे की ठंडी पकड़ ने अभियान दल को निगल लिया।"
					}
				},
				{
					"content": {
						"korean": "어리석은 시도… 생명은 언제나 내게 돌아온다.",
						"english": "A foolish attempt... Life always returns to me.",
						"japanese": "愚かな試み…命は常に私に戻る。",
						"chinese": "愚蠢的尝试…生命总是会回到我身边。",
						"french": "Tentative insensée... La vie me revient toujours.",
						"spanish": "Un intento necio... La vida siempre vuelve a mí.",
						"vietnamese": "Nỗ lực ngu ngốc… Sinh mạng luôn quay về với ta.",
						"thai": "ความพยายามที่โง่เขลา... ชีวิตย่อมกลับคืนสู่ข้าเสมอ",
						"hindi": "एक मूर्खतापूर्ण प्रयास... जीवन हमेशा मेरे पास लौट आता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이대로… 끝낼 순 없어….",
						"english": "I can't... end it like this...",
						"japanese": "このままでは…終われない…",
						"chinese": "不能…就这样结束…",
						"french": "Je ne peux pas... finir comme ça...",
						"spanish": "Así... no puedo terminar...",
						"vietnamese": "Cứ thế này… không thể kết thúc được…",
						"thai": "จะให้มันจบแบบนี้... ไม่ได้...",
						"hindi": "मैं इसे... ऐसे खत्म नहीं कर सकता..."
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 약속은… 지켜질 터인데….",
						"english": "Ugh... The promise... it must be kept...",
						"japanese": "くぅ…約束は…守られるはずなのに…",
						"chinese": "唔…约定…应该会遵守的…",
						"french": "Ugh... La promesse... elle devrait être tenue...",
						"spanish": "Uf... La promesa... debería cumplirse...",
						"vietnamese": "Khừ… Lời hứa… lẽ ra phải được giữ…",
						"thai": "อึก... สัญญา... น่าจะถูกรักษาไว้...",
						"hindi": "उफ़... वादा... निभाया जाना चाहिए था..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이겼어… 정말로 끝난 건가?",
						"english": "We won... Is it truly over?",
						"japanese": "勝った…本当に終わったのか？",
						"chinese": "赢了…真的结束了吗？",
						"french": "Nous avons gagné... Est-ce vraiment fini ?",
						"spanish": "Ganamos... ¿De verdad ha terminado?",
						"vietnamese": "Thắng rồi… Có thật sự kết thúc rồi sao?",
						"thai": "ชนะแล้ว... มันจบลงจริงๆ แล้วเหรอ?",
						"hindi": "हम जीत गए... क्या यह सच में खत्म हो गया है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "차가운 공기가 조금은 가벼워진 듯했다. 그러나 기둥은 여전히 살아있는 듯 희미하게 빛났다.",
						"english": "The cold air seemed a little lighter. Yet, the pillar still glowed faintly, as if alive.",
						"japanese": "冷たい空気が少し軽くなったようだった。しかし、柱はまるで生きているかのように、かすかに輝き続けていた。",
						"chinese": "冰冷的空气似乎变得轻盈了一些。然而，石柱依然像活物般，发出微弱的光芒。",
						"french": "L'air froid semblait un peu plus léger. Pourtant, le pilier brillait toujours faiblement, comme s'il était vivant.",
						"spanish": "El aire frío parecía un poco más ligero. Sin embargo, el pilar seguía brillando débilmente, como si estuviera vivo.",
						"vietnamese": "Không khí lạnh dường như nhẹ nhõm hơn một chút. Nhưng cây cột vẫn mờ nhạt phát sáng như thể còn sống.",
						"thai": "อากาศเย็นดูเหมือนจะเบาบางลงเล็กน้อย แต่เสายังคงเรืองรองจางๆ ราวกับมีชีวิต",
						"hindi": "ठंडी हवा थोड़ी हल्की महसूस हुई। फिर भी, खंभा अभी भी हल्का चमक रहा था, मानो जीवित हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"기둥 안은 바깥보다 더 차가웠다.",
			"단순한 유적이라고 하기엔 이상했다.",
			"따뜻한 기억들이 스며들었다.",
			"그러나 그 온기는, 생명을 갉아먹는 독이었다."
		],
		"english": [
			"The inside of the pillar was colder than outside.",
			"It was too strange to be a mere ruin.",
			"Warm memories seeped in.",
			"But that warmth was a poison that gnawed at life."
		],
		"japanese": [
			"柱の内部は外よりも冷たかった。",
			"単なる遺跡と呼ぶには奇妙だった。",
			"温かい記憶が染み込んだ。",
			"しかし、その温もりは生命を蝕む毒だった。"
		],
		"chinese": [
			"柱子里面比外面更冷。",
			"说是单纯的遗迹却很奇怪。",
			"温暖的记忆渗透进来。",
			"然而那份温暖，却是吞噬生命的毒药。"
		],
		"french": [
			"L'intérieur du pilier était plus froid que l'extérieur.",
			"C'était trop étrange pour être une simple ruine.",
			"De doux souvenirs s'infiltraient.",
			"Mais cette chaleur était un poison rongeant la vie."
		],
		"spanish": [
			"El interior del pilar era más frío que el exterior.",
			"Era demasiado extraño para ser una simple ruina.",
			"Cálidos recuerdos se filtraron.",
			"Pero esa calidez era un veneno que carcomía la vida."
		],
		"vietnamese": [
			"Bên trong cột còn lạnh hơn bên ngoài.",
			"Thật kỳ lạ khi gọi đó là một di tích đơn thuần.",
			"Những ký ức ấm áp ùa về.",
			"Nhưng sự ấm áp đó lại là chất độc gặm nhấm sự sống."
		],
		"thai": [
			"ภายในเสาเย็นกว่าด้านนอก",
			"มันแปลกเกินกว่าจะเป็นแค่ซากปรักหักพังธรรมดา",
			"ความทรงจำอันอบอุ่นซึมซาบเข้ามา",
			"แต่ความอบอุ่นนั้นคือยาพิษที่กัดกินชีวิต"
		],
		"hindi": [
			"खंभे का अंदर बाहर से ज़्यादा ठंडा था।",
			"इसे महज़ एक खंडहर कहना अजीब था।",
			"गर्म यादें रिसने लगीं।",
			"लेकिन वह गर्माहट, जीवन को कुतरने वाला ज़हर थी।"
		]
	}
} as const;
