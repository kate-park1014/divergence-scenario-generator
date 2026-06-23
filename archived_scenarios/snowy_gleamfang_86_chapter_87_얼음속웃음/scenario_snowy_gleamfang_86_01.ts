export const scenario_snowy_gleamfang_86_01 = {
	"scenario_id": "snowy_gleamfang_86_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
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
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "눈보라를 뚫고, 탐험대는 고립된 연구 기지에 도착했다. 모든 것이 얼어붙은 침묵이었다.",
						"english": "Battling through the blizzard, the expedition reached the isolated research outpost. All was frozen silence.",
						"japanese": "吹雪を突破し、探検隊は孤立した研究基地に到着した。すべてが凍てつく沈黙だった。",
						"chinese": "穿过暴风雪，探险队抵达了孤立的研究基地。一切都陷入了冰冷的沉寂。",
						"french": "Traversant le blizzard, l'expédition atteignit le poste de recherche isolé. Tout n'était que silence gelé.",
						"spanish": "Atrevesando la tormenta de nieve, la expedición llegó al puesto de investigación aislado. Todo era un silencio helado.",
						"vietnamese": "Vượt qua bão tuyết, đoàn thám hiểm đã đến trạm nghiên cứu biệt lập. Mọi thứ chìm trong sự im lặng đóng băng.",
						"thai": "ฝ่าพายุหิมะ คณะสำรวจมาถึงฐานวิจัยโดดเดี่ยว ทุกสิ่งนิ่งเงียบราวกับถูกแช่แข็ง",
						"hindi": "बर्फीले तूफान से जूझते हुए, अभियान दल अलग-थलग पड़े अनुसंधान चौकी पर पहुँच गया। सब कुछ जमी हुई खामोशी थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가 그 연구 기지? 으스스하네.",
						"english": "This is the research outpost? Spooky.",
						"japanese": "ここがその研究基地？不気味だな。",
						"chinese": "这里就是那个研究基地？真让人毛骨悚然。",
						"french": "C'est ça, le poste de recherche ? Glaçant.",
						"spanish": "¿Esta es la base de investigación? Qué escalofriante.",
						"vietnamese": "Đây là trạm nghiên cứu đó à? Rợn người thật.",
						"thai": "นี่คือฐานวิจัยเหรอ? น่าขนลุกนะ",
						"hindi": "यह है अनुसंधान केंद्र? डरावना है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "finn",
					"content": {
						"korean": "뭘 새삼스럽게. 북극이 다 그렇지.",
						"english": "What's new? It's the arctic, isn't it?",
						"japanese": "何を今さら。北極なんてみんなこんなもんだろ。",
						"chinese": "有什么大惊小怪的。北极不都这样吗？",
						"french": "Quoi de neuf ? C'est l'Arctique, après tout.",
						"spanish": "¿Qué esperabas? Así es el Ártico.",
						"vietnamese": "Có gì lạ đâu. Bắc Cực thì chả thế.",
						"thai": "มีอะไรใหม่? ก็อาร์กติกน่ะสิ",
						"hindi": "क्या नया है? यह आर्कटिक है, है ना?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"emotion": "base",
					"content": {
						"korean": "지역 전설? 애들 동화책 이야기야.",
						"english": "Local legends? Just fairy tales for kids.",
						"japanese": "地域の伝説？子供の絵本の話だろ。",
						"chinese": "地区传说？那都是小孩子童话书里的故事。",
						"french": "Légendes locales ? Des contes pour enfants.",
						"spanish": "¿Leyendas locales? Cuentos de hadas para niños.",
						"vietnamese": "Truyền thuyết địa phương à? Toàn chuyện cổ tích trẻ con thôi.",
						"thai": "ตำนานท้องถิ่น? ก็แค่เรื่องในนิทานเด็ก",
						"hindi": "स्थानीय किंवदंतियाँ? बच्चों की परी कथाएँ।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "근데… 묘하게 나른해지는 기분이야. 추운데 안 추운 것 같고.",
						"english": "But... I feel strangely drowsy. Cold, yet not cold.",
						"japanese": "でも…妙にだるい気分だ。寒いのに寒くないような。",
						"chinese": "但是…我感觉莫名的倦怠。明明很冷，却又感觉不到冷。",
						"french": "Mais... je me sens étrangement engourdi. Froid, mais pas vraiment froid.",
						"spanish": "Pero... me siento extrañamente aletargado. Frío, pero no siento el frío.",
						"vietnamese": "Nhưng mà... tôi thấy lạ là người cứ uể oải. Lạnh mà lại không thấy lạnh.",
						"thai": "แต่...รู้สึกแปลกๆ เหมือนง่วงซึม หนาวแต่ไม่รู้สึกหนาว",
						"hindi": "लेकिन... मैं अजीब तरह से सुस्त महसूस कर रहा हूँ। ठंड लग रही है, फिर भी नहीं लग रही है।"
					}
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "…방금, 누가 웃었어?",
						"english": "...Did someone just laugh?",
						"japanese": "…今、誰か笑った？",
						"chinese": "……刚才，谁笑了？",
						"french": "...Quelqu'un a ri, là ?",
						"spanish": "...¿Alguien se rió justo ahora?",
						"vietnamese": "...Vừa rồi, ai cười đấy?",
						"thai": "...เมื่อกี้ ใครหัวเราะ?",
						"hindi": "...अभी, कोई हँसा क्या?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환청일 거야. 고립되면 흔한 일이지.",
						"english": "It must be an auditory hallucination. Common when isolated.",
						"japanese": "幻聴だろう。孤立すればよくあることだ。",
						"chinese": "应该是幻听。被孤立了常有的事。",
						"french": "Ce doit être une hallucination auditive. C'est courant en isolement.",
						"spanish": "Debe ser una alucinación auditiva. Es común cuando uno está aislado.",
						"vietnamese": "Chắc là ảo giác thôi. Bị cô lập thì hay thế mà.",
						"thai": "คงเป็นเสียงหลอนล่ะมั้ง เรื่องปกติเวลาโดดเดี่ยว",
						"hindi": "शायद यह श्रवण मतिभ्रम है। अकेला होने पर ऐसा अक्सर होता है।"
					},
					"emotion": "base",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아니… 분명히. 아이 웃음소리였어.",
						"english": "No... definitely. It was a child's laughter.",
						"japanese": "いや…確かに。子供の笑い声だった。",
						"chinese": "不… 肯定是。那是孩子的笑声。",
						"french": "Non... c'était clairement. Le rire d'un enfant.",
						"spanish": "No... definitivamente. Era la risa de un niño.",
						"vietnamese": "Không... rõ ràng là. Tiếng trẻ con cười mà.",
						"thai": "ไม่... ชัดเลย. เป็นเสียงเด็กหัวเราะนี่นา.",
						"hindi": "नहीं... यकीनन। यह एक बच्चे के हंसने की आवाज़ थी।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "이상하네. 추울수록 정신이 또렷해야 하는데, 자꾸 몸이 나른해져.",
						"english": "Strange. The colder it gets, the clearer my mind should be, but I keep feeling sluggish.",
						"japanese": "おかしいな。寒ければ寒いほど、意識ははっきりするはずなのに、体がだるくなってくる。",
						"chinese": "真奇怪。越冷精神应该越清醒才对，可身体却越来越乏力。",
						"french": "Étrange. Plus il fait froid, plus mon esprit devrait être clair, mais mon corps ne cesse de s'engourdir.",
						"spanish": "Qué raro. Cuanto más frío hace, más despejada debería estar mi mente, pero mi cuerpo se siente cada vez más lánguido.",
						"vietnamese": "Lạ thật. Càng lạnh đầu óc càng phải tỉnh táo chứ, sao người cứ lờ đờ thế này.",
						"thai": "แปลกจัง. ยิ่งหนาวสติยิ่งควรจะแจ่มชัด แต่ทำไมร่างกายกลับอ่อนแรงลงเรื่อยๆ",
						"hindi": "अजीब है। जितना ठंडा होता है, दिमाग उतना ही तेज़ होना चाहिए, लेकिन मेरा शरीर सुस्त होता जा रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"emotion": "base",
					"content": {
						"korean": "긴장해. 이런 곳일수록 더.",
						"english": "Stay alert. Especially in a place like this.",
						"japanese": "気を引き締めろ。こんな場所だからこそ、なおさらだ。",
						"chinese": "保持警惕。在这种地方更是如此。",
						"french": "Reste vigilant. Surtout dans un endroit comme celui-ci.",
						"spanish": "Mantente alerta. Especialmente en un lugar como este.",
						"vietnamese": "Cảnh giác đi. Đặc biệt là ở một nơi như thế này.",
						"thai": "ระวังตัวไว้. โดยเฉพาะที่แบบนี้.",
						"hindi": "सतर्क रहो। खासकर ऐसी जगह पर।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "기지 깊숙한 곳에서, 희미한 웃음소리가 다시 울렸다.",
						"english": "Deep within the base, a faint laugh echoed again.",
						"japanese": "基地の奥深くで、微かな笑い声が再び響いた。",
						"chinese": "基地深处，微弱的笑声再次响起。",
						"french": "Au plus profond de la base, un faible rire retentit de nouveau.",
						"spanish": "En lo más profundo de la base, una risa tenue resonó de nuevo.",
						"vietnamese": "Sâu bên trong căn cứ, một tiếng cười yếu ớt lại vang lên.",
						"thai": "ลึกเข้าไปในฐานทัพ เสียงหัวเราะแผ่วเบาก็ดังขึ้นอีกครั้ง",
						"hindi": "बेस के गहरे भीतर, एक हल्की हंसी फिर से गूंज उठी।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "finn",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "finn",
					"content": {
						"korean": "…기지가 너무 조용해. 원래는 이런 곳이 아닌데.",
						"english": "...The base is too quiet. It's not usually like this.",
						"japanese": "…基地が静かすぎる。本来はこんな場所じゃないのに。",
						"chinese": "…基地太安静了。这里本来不是这样的。",
						"french": "...La base est trop silencieuse. Ce n'est pas son habitude.",
						"spanish": "...La base está demasiado tranquila. No suele ser así.",
						"vietnamese": "...Căn cứ yên tĩnh quá. Vốn dĩ không phải là nơi như thế này.",
						"thai": "...ฐานทัพเงียบเกินไป. ปกติแล้วไม่เป็นแบบนี้.",
						"hindi": "...बेस बहुत शांत है। यह आमतौर पर ऐसा नहीं होता।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모두 사라졌으니까. 당연한 거 아니야?",
						"english": "Everyone's gone. Isn't that obvious?",
						"japanese": "みんな消えたんだから。当然のことじゃないか？",
						"chinese": "所有人都消失了。这不是理所当然的吗？",
						"french": "Tout le monde a disparu. N'est-ce pas évident ?",
						"spanish": "Todos han desaparecido. ¿No es obvio?",
						"vietnamese": "Vì mọi người đều biến mất rồi. Chẳng phải là điều hiển nhiên sao?",
						"thai": "ทุกคนหายไปแล้วนี่. ไม่ใช่เรื่องแปลกไม่ใช่เหรอ?",
						"hindi": "सब गायब हो गए। क्या यह स्पष्ट नहीं है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "아니, 그 조용함이 아니야. 누가 지켜보고 있는 것 같은.",
						"english": "No, not that kind of quiet. It feels like someone's watching.",
						"japanese": "いや、そういう静けさじゃない。誰かに見られているような。",
						"chinese": "不，不是那种安静。感觉好像有人在监视。",
						"french": "Non, pas ce genre de silence. On dirait que quelqu'un nous observe.",
						"spanish": "No, no es ese tipo de silencio. Se siente como si alguien estuviera observando.",
						"vietnamese": "Không, không phải sự yên tĩnh đó. Giống như có ai đó đang theo dõi vậy.",
						"thai": "ไม่สิ, ไม่ใช่ความเงียบแบบนั้น. เหมือนมีคนกำลังจับตาดูอยู่.",
						"hindi": "नहीं, वह शांति नहीं। ऐसा लगता है जैसे कोई देख रहा हो।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "웃음소리! 이번엔 더 가까이서 들렸어!",
						"english": "Laughter! It was closer this time!",
						"japanese": "笑い声！今度はもっと近くで聞こえた！",
						"chinese": "笑声！这次听得更近了！",
						"french": "Un rire ! C'était plus proche cette fois !",
						"spanish": "¡Risas! ¡Esta vez se escuchó más cerca!",
						"vietnamese": "Tiếng cười! Lần này nghe rõ hơn!",
						"thai": "เสียงหัวเราะ! ครั้งนี้ได้ยินใกล้กว่าเดิม!",
						"hindi": "हंसी! इस बार और करीब से सुनाई दी!"
					}
				},
				{
					"type": "speech",
					"speaker": "finn",
					"emotion": "base",
					"content": {
						"korean": "젠장… 환각인가.",
						"english": "Damn it... Is it a hallucination?",
						"japanese": "くそ…幻覚なのか。",
						"chinese": "该死…是幻觉吗。",
						"french": "Mince... Est-ce une hallucination ?",
						"spanish": "Maldita sea... ¿Es una alucinación?",
						"vietnamese": "Chết tiệt... Là ảo giác sao.",
						"thai": "ให้ตายสิ... นี่มันภาพหลอนเหรอเนี่ย.",
						"hindi": "धत्... क्या यह एक मतिभ्रम है?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 복도를 따라, 탐험대는 기지 가장 깊은 곳으로 향했다. 발걸음마다 서걱이는 얼음 소리뿐.",
						"english": "Following the frozen corridor, the expedition headed to the deepest part of the base. Only the crunch of ice with every step.",
						"japanese": "凍てついた廊下をたどり、探検隊は基地の最深部へ向かった。一歩ごとに、氷の軋む音だけが響く。",
						"chinese": "沿着冰冻的走廊，探险队前往基地最深处。每一步都只有冰块摩擦的声音。",
						"french": "Suivant le couloir gelé, l'expédition se dirigea vers la partie la plus profonde de la base. Seul le crissement de la glace à chaque pas.",
						"spanish": "Siguiendo el pasillo congelado, la expedición se dirigió a la parte más profunda de la base. Solo el crujido del hielo con cada paso.",
						"vietnamese": "Dọc theo hành lang đóng băng, đoàn thám hiểm tiến vào sâu nhất của căn cứ. Chỉ có tiếng băng lạo xạo dưới mỗi bước chân.",
						"thai": "ตามทางเดินที่เยือกแข็ง ทีมสำรวจมุ่งหน้าสู่ส่วนที่ลึกที่สุดของฐาน มีเพียงเสียงน้ำแข็งเสียดสีทุกย่างก้าว",
						"hindi": "जमे हुए गलियारे के साथ, अभियान दल अड्डे के सबसे गहरे हिस्से की ओर बढ़ा। हर कदम पर सिर्फ़ बर्फ़ के टूटने की आवाज़।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "점점 추워지는데… 오히려 몸이 따뜻해지는 것 같아. 잠들고 싶다.",
						"english": "It's getting colder... yet my body feels warmer. I want to sleep.",
						"japanese": "どんどん寒くなるのに…むしろ体が温かくなるようだ。眠りたい。",
						"chinese": "越来越冷了……但我身体好像反而暖和起来。想睡觉。",
						"french": "Il fait de plus en plus froid... pourtant mon corps semble se réchauffer. Je veux dormir.",
						"spanish": "Cada vez hace más frío... y sin embargo, mi cuerpo se siente más cálido. Quiero dormir.",
						"vietnamese": "Càng ngày càng lạnh... nhưng cơ thể tôi lại thấy ấm lên. Tôi muốn ngủ.",
						"thai": "ยิ่งหนาวขึ้นเรื่อยๆ... แต่กลับรู้สึกว่าร่างกายอุ่นขึ้น อยากหลับไปเลย",
						"hindi": "ठंड बढ़ती जा रही है... फिर भी मेरा शरीर गर्म होता जा रहा है। मुझे सोना है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 정신 차려!",
						"english": "What are you saying! Snap out of it!",
						"japanese": "何を言ってるんだ！しっかりしろ！",
						"chinese": "你在说什么！清醒一点！",
						"french": "Qu'est-ce que tu dis ! Reprends-toi !",
						"spanish": "¡¿Qué dices?! ¡Reacciona!",
						"vietnamese": "Nói cái gì vậy! Tỉnh táo lại đi!",
						"thai": "พูดอะไรน่ะ! ตั้งสติหน่อย!",
						"hindi": "क्या बक रहे हो! होश में आओ!"
					},
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "finn"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건… 단순한 한기가 아니야. 무언가 의도된…",
						"english": "This isn't... just simple cold. Something intentional...",
						"japanese": "これは…ただの寒気じゃない。何か意図された…",
						"chinese": "这不……只是单纯的寒冷。是某种故意的……",
						"french": "Ce n'est pas... une simple froidure. Quelque chose d'intentionnel...",
						"spanish": "Esto no es... un simple frío. Es algo intencionado...",
						"vietnamese": "Đây không phải... chỉ là một cơn lạnh thông thường. Có thứ gì đó cố ý...",
						"thai": "นี่ไม่ใช่... แค่ความหนาวธรรมดา มีอะไรบางอย่างจงใจ...",
						"hindi": "यह... सिर्फ़ ठंड नहीं है। कुछ जानबूझकर किया गया..."
					},
					"emotion": "sad",
					"speaker": "finn"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아이 웃음소리! 바로 저기서!",
						"english": "A child's laughter! Right over there!",
						"japanese": "子供の笑い声！まさにそこから！",
						"chinese": "小孩的笑声！就在那里！",
						"french": "Des rires d'enfant ! Juste là-bas !",
						"spanish": "¡Risas de niño! ¡Justo ahí!",
						"vietnamese": "Tiếng trẻ con cười! Ngay đằng kia kìa!",
						"thai": "เสียงหัวเราะของเด็ก! ตรงนั้นเลย!",
						"hindi": "बच्चे की हंसी! ठीक वहीं से!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "……온기를… 줄게.",
						"english": "...I'll give you... warmth.",
						"japanese": "……温かさを…あげよう。",
						"chinese": "……给你……温暖。",
						"french": "...Je te donnerai... de la chaleur.",
						"spanish": "...Te daré... calidez.",
						"vietnamese": "...Ta sẽ ban cho con... sự ấm áp.",
						"thai": "...จะมอบ...ความอบอุ่นให้",
						"hindi": "...मैं तुम्हें... गर्माहट दूंगा।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…어서 와. 나의 작은 친구들.",
						"english": "...Welcome. My little friends.",
						"japanese": "…ようこそ。私の小さな友よ。",
						"chinese": "……欢迎。我的小朋友们。",
						"french": "...Bienvenue. Mes petits amis.",
						"spanish": "...Bienvenidos. Mis pequeños amigos.",
						"vietnamese": "...Chào mừng. Những người bạn nhỏ của ta.",
						"thai": "...ยินดีต้อนรับนะ เพื่อนตัวน้อยของฉัน",
						"hindi": "...स्वागत है। मेरे छोटे दोस्त।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가… 그 웃음소리의 주인인가.",
						"english": "Are you... the source of that laughter?",
						"japanese": "お前が…あの笑い声の主か。",
						"chinese": "你就是……那笑声的主人吗？",
						"french": "C'est toi... l'auteur de ces rires ?",
						"spanish": "¿Eres tú... el dueño de esa risa?",
						"vietnamese": "Ngươi... là chủ nhân của tiếng cười đó sao?",
						"thai": "แกน่ะหรือ... เจ้าของเสียงหัวเราะนั้น",
						"hindi": "तुम हो... उस हंसी के मालिक?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…차가운 곳에선… 따뜻함이 필요하지 않니?",
						"english": "...In a cold place... don't you need warmth?",
						"japanese": "…寒い場所では…温かさが必要だろう？",
						"chinese": "……在寒冷的地方……不需要温暖吗？",
						"french": "...Dans un endroit froid... n'as-tu pas besoin de chaleur ?",
						"spanish": "...En un lugar frío... ¿no necesitas calor?",
						"vietnamese": "...Ở nơi lạnh giá... chẳng phải cần sự ấm áp sao?",
						"thai": "...ในที่หนาวเย็นน่ะ... ไม่ต้องการความอบอุ่นหรอกเหรอ?",
						"hindi": "...ठंडी जगह में... क्या तुम्हें गर्माहट की ज़रूरत नहीं है?"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히…!",
						"english": "How dare you...!",
						"japanese": "よくも…！",
						"chinese": "竟敢……！",
						"french": "Comment oses-tu...!",
						"spanish": "¡Cómo te atreves...!",
						"vietnamese": "Dám...!",
						"thai": "แกกล้าดี...!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...!"
					},
					"speaker": "finn",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "…아직 끝나지 않았어. 너희도… 곧 나처럼 될 거야.",
						"english": "...It's not over yet. You'll... soon be like me.",
						"japanese": "「…まだ終わってない。お前たちも… すぐ私みたいになるだろう。」",
						"chinese": "“……还没结束。你们也……很快就会和我一样。”",
						"french": "...Ce n'est pas encore fini. Vous aussi... vous deviendrez bientôt comme moi.",
						"spanish": "...Aún no ha terminado. Vosotros también... pronto seréis como yo.",
						"vietnamese": "...Chưa kết thúc đâu. Các ngươi rồi cũng... sẽ sớm giống ta thôi.",
						"thai": "...ยังไม่จบแค่นี้หรอกนะ พวกแกก็... จะต้องเป็นเหมือนฉันในไม่ช้า",
						"hindi": "...अभी ख़त्म नहीं हुआ है। तुम सब भी... जल्द ही मेरी तरह हो जाओगे।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼… 이게 다가 아니라고?",
						"english": "No way... This isn't all?",
						"japanese": "「まさか… これが全てじゃないのか？」",
						"chinese": "“不可能……这还没完？”",
						"french": "Impossible... Ce n'est pas tout ?",
						"spanish": "¡No puede ser!... ¿No es todo esto?",
						"vietnamese": "Không thể nào... Đây không phải là tất cả sao?",
						"thai": "ไม่จริงน่า... นี่ไม่ใช่ทั้งหมดเหรอ?",
						"hindi": "अविश्वसनीय... क्या यह सब नहीं है?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "차가운 심장이 깨졌지만, 기지 전체에 스며든 냉기는 사라지지 않았다. 이 미지의 존재는 단지 시작일 뿐이었다.",
						"english": "The cold heart shattered, but the chill permeating the entire base did not dissipate. This unknown entity was merely the beginning.",
						"japanese": "「冷たい心臓は砕け散ったが、基地全体に染み込んだ冷気は消えなかった。この未知の存在は、ただの始まりに過ぎなかった。」",
						"chinese": "“冰冷的心脏破碎了，但弥漫在整个基地的寒意并未消散。这个未知的存在仅仅是个开始。”",
						"french": "Le cœur froid se brisa, mais le froid imprégnant toute la base ne se dissipa pas. Cette entité inconnue n'était que le début.",
						"spanish": "El frío corazón se hizo pedazos, pero la frialdad que impregnaba toda la base no se disipó. Esta entidad desconocida era solo el principio.",
						"vietnamese": "Trái tim lạnh giá đã vỡ tan, nhưng hơi lạnh bao trùm toàn bộ căn cứ vẫn không tan biến. Thực thể bí ẩn này chỉ là khởi đầu mà thôi.",
						"thai": "หัวใจที่เยือกเย็นแหลกสลาย แต่ความหนาวเย็นที่แทรกซึมไปทั่วทั้งฐานทัพกลับไม่จางหายไป สิ่งมีชีวิตที่ไม่รู้จักนี้เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "ठंडा दिल टूट गया, लेकिन पूरे ठिकाने में फैली ठंडक दूर नहीं हुई। यह अज्ञात सत्ता महज़ शुरुआत थी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "겨우 이 정도였나. …어리석은 온기.",
						"english": "Is that all you had? ...Foolish warmth.",
						"japanese": "「この程度か。…愚かな温もりめ。」",
						"chinese": "“就这点本事吗？……愚蠢的温暖。”",
						"french": "C'est tout ce que tu avais ? ...Stupide chaleur.",
						"spanish": "¿Eso es todo lo que tenías? ...Estúpida calidez.",
						"vietnamese": "Chỉ có thế thôi sao? ...Cái ấm áp ngu xuẩn.",
						"thai": "แค่นี้เองงั้นเหรอ? ...ความอบอุ่นที่โง่เขลา",
						"hindi": "बस इतना ही था? ...नादान गर्माहट।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "「くそっ… まだ… 終わってない！」",
						"chinese": "“该死……还没……结束！”",
						"french": "Merde... Ce n'est pas... fini !",
						"spanish": "¡Maldita sea!... ¡Aún no... ha terminado!",
						"vietnamese": "Khốn kiếp... Vẫn chưa... kết thúc đâu!",
						"thai": "ให้ตายสิ... ยัง... ไม่จบ!",
						"hindi": "धत् तेरी... अभी... ख़त्म नहीं हुआ है!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"북극의 한기가 모든 것을 집어삼킨 고립된 연구 기지.",
			"사라진 탐험대의 흔적을 쫓아 얼음 심장부로 향했다.",
			"그러나 그곳에는 차가운 환영이 우리를 기다렸다.",
			"그리고 이명처럼 들려오는 아이의 웃음소리."
		],
		"english": [
			"A desolate research outpost swallowed by the arctic chill.",
			"We followed the vanished expedition's tracks, deeper into the icy heart.",
			"But there, a chilling hallucination awaited us.",
			"And a child's laughter, like tinnitus in our ears."
		],
		"japanese": [
			"北極の寒気がすべてを飲み込んだ孤立した研究基地。",
			"消息を絶った探検隊の痕跡を追い、氷の心臓部へ向かった。",
			"しかし、そこには冷たい幻影が私たちを待っていた。",
			"そして、耳鳴りのように聞こえる子供の笑い声。"
		],
		"chinese": [
			"北极的寒气吞噬了一切，一座孤立的研究基地。",
			"追寻着失踪探险队的踪迹，我们深入冰核。",
			"然而，那里等待我们的是冰冷的幻象。",
			"还有如同耳鸣般响起的孩子笑声。"
		],
		"french": [
			"Une base de recherche isolée, engloutie par le froid arctique.",
			"Nous avons suivi les traces de l'expédition disparue, nous dirigeant vers le cœur de glace.",
			"Mais là, une vision glaçante nous attendait.",
			"Et le rire d'un enfant, comme un acouphène."
		],
		"spanish": [
			"Una base de investigación aislada, engullida por el frío ártico.",
			"Seguimos las huellas de la expedición desaparecida, hacia el corazón de hielo.",
			"Pero allí, una fría ilusión nos esperaba.",
			"Y la risa de un niño, como un zumbido."
		],
		"vietnamese": [
			"Một trạm nghiên cứu bị cô lập, bị cái lạnh Bắc Cực nuốt chửng.",
			"Theo dấu vết của đoàn thám hiểm đã mất tích, chúng tôi tiến vào sâu thẳm lòng băng.",
			"Nhưng ở đó, một ảo ảnh lạnh lẽo đang chờ đợi chúng tôi.",
			"Và tiếng cười của một đứa trẻ, như tiếng ù tai."
		],
		"thai": [
			"ฐานวิจัยโดดเดี่ยวที่ถูกความหนาวเหน็บแห่งอาร์กติกกลืนกินทุกสิ่ง",
			"เราแกะรอยคณะสำรวจที่หายไป มุ่งหน้าสู่ใจกลางน้ำแข็ง",
			"แต่ที่นั่น ภาพหลอนเยือกแข็งกำลังรอเราอยู่",
			"และเสียงหัวเราะของเด็ก เหมือนเสียงหริ่งในหู"
		],
		"hindi": [
			"आर्कटिक की ठंड से निगला हुआ एक अलग-थलग अनुसंधान केंद्र।",
			"हमने लापता अभियान के निशान का पीछा किया, बर्फीले दिल की गहराई में।",
			"लेकिन वहाँ, एक भयावह भ्रम हमारा इंतज़ार कर रहा था।",
			"और बच्चे की हँसी, जैसे कानों में गूंजती हुई।"
		]
	}
} as const;
