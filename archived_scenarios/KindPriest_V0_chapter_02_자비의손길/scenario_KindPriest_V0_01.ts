export const scenario_KindPriest_V0_01 = {
	"scenario_id": "KindPriest_V0_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"lysandra": {
			"id": "mon_fc9333ab-62ae-411c-a12c-0d5d9f554a5a",
			"name": {
				"korean": "리산드라",
				"english": "Lysandra",
				"japanese": "リサンドラ",
				"chinese": "莉桑德拉",
				"french": "Lysandra",
				"spanish": "Lisandra",
				"vietnamese": "Lysandra",
				"thai": "ไลแซนดรา",
				"hindi": "लाइसैंड्रा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/883ef0d7-874d-4718-1a26-645c5b0f2900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/eeab84b3-ddb9-42ed-08f9-b3443b743b00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"심연의 굴에서 길을 잃었다.",
			"모두 지쳐 쓰러질 때쯤 —",
			"흐릿한 빛이 새어 나오는 동굴을 발견했다.",
			"거기엔 따뜻한 손길이 있었다."
		],
		"english": [
			"Lost in the Abyss.",
			"When everyone was about to collapse from exhaustion—",
			"We found a cave with a faint light seeping out.",
			"There, a warm touch awaited."
		],
		"japanese": [
			"深淵の洞窟で道に迷った。",
			"皆が疲れ果て倒れそうになった頃—",
			"かすかな光が漏れる洞窟を発見した。",
			"そこには温かい手が差し伸べられていた。"
		],
		"chinese": [
			"迷失在深渊之窟。",
			"当大家都精疲力尽，即将倒下时—",
			"发现了一个有微弱光芒渗出的洞窟。",
			"那里有温暖的援手。"
		],
		"french": [
			"Perdu dans la Caverne de l'Abîme.",
			"Quand tous étaient sur le point de s'effondrer d'épuisement—",
			"Nous avons découvert une caverne d'où s'échappait une faible lumière.",
			"Là, une main chaleureuse nous attendait."
		],
		"spanish": [
			"Perdido en la Cueva del Abismo.",
			"Cuando todos estaban a punto de colapsar por el agotamiento—",
			"Encontramos una cueva de donde se filtraba una luz tenue.",
			"Allí, había una mano cálida."
		],
		"vietnamese": [
			"Lạc lối trong hang động vực thẳm.",
			"Khi mọi người gần như kiệt sức và gục ngã—",
			"Phát hiện ra một hang động có ánh sáng lờ mờ.",
			"Ở đó, có một bàn tay ấm áp."
		],
		"thai": [
			"หลงทางในถ้ำแห่งห้วงลึก.",
			"เมื่อทุกคนใกล้จะล้มลงด้วยความอ่อนล้า—",
			"พบถ้ำที่มีแสงสลัวลอดออกมา.",
			"ที่นั่น มีสัมผัสที่อบอุ่น."
		],
		"hindi": [
			"अथाह गुफा में खो गया।",
			"जब सब थककर गिरने वाले थे—",
			"एक गुफा मिली जहाँ से धुंधली रोशनी छनकर आ रही थी।",
			"वहाँ एक गर्मजोशी भरा स्पर्श था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모두 지쳐있었다. 간신히 도착한 동굴 안, 흐릿한 빛이 새어 나왔다.",
						"english": "Everyone was exhausted. Inside the cave, which we barely reached, a faint light seeped through.",
						"japanese": "皆、疲れ果てていた。かろうじて辿り着いた洞窟の中、かすかな光が漏れていた。",
						"chinese": "大家都筋疲力尽。好不容易到达的洞窟里，渗出微弱的光芒。",
						"french": "Tous étaient épuisés. À l'intérieur de la caverne, à laquelle nous étions parvenus de justesse, une faible lumière filtrait.",
						"spanish": "Todos estaban agotados. Dentro de la cueva, a la que apenas llegamos, una luz tenue se filtraba.",
						"vietnamese": "Mọi người đều kiệt sức. Bên trong hang động vừa đến được, một ánh sáng lờ mờ len lỏi.",
						"thai": "ทุกคนเหนื่อยล้าเต็มที ภายในถ้ำที่มาถึงอย่างยากลำบาก มีแสงสลัวเล็ดลอดออกมา.",
						"hindi": "सब थके हुए थे। मुश्किल से पहुँची गुफा के अंदर से धुंधली रोशनी निकल रही थी।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기서 쉬자. 더는 못 가겠어….",
						"english": "Let's rest here. I can't go on anymore...",
						"japanese": "ここで休もう。もうこれ以上は無理だ…。",
						"chinese": "在这里休息吧。我再也走不动了…。",
						"french": "Reposons-nous ici. Je ne peux plus continuer...",
						"spanish": "Descansemos aquí. No puedo seguir más...",
						"vietnamese": "Hãy nghỉ ở đây. Tôi không thể đi tiếp nữa…",
						"thai": "มาพักที่นี่เถอะ. ฉันไปต่อไม่ไหวแล้ว….",
						"hindi": "यहीं आराम करते हैं। अब और नहीं चल सकता…।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "안쪽에는 낡은 사제복의 남자가 부상자에게 물을 건네고 있었다.",
						"english": "Inside, a man in worn priestly robes was offering water to an injured person.",
						"japanese": "奥では、古びた司祭服の男が負傷者に水を差し出していた。",
						"chinese": "里面，一个穿着破旧祭司服的男人正在给伤者递水。",
						"french": "À l'intérieur, un homme en soutane usée offrait de l'eau à un blessé.",
						"spanish": "Adentro, un hombre con ropas sacerdotales gastadas ofrecía agua a un herido.",
						"vietnamese": "Bên trong, một người đàn ông mặc áo linh mục cũ đang đưa nước cho người bị thương.",
						"thai": "ด้านใน ชายสวมชุดนักบวชเก่ากำลังยื่นน้ำให้ผู้บาดเจ็บ.",
						"hindi": "अंदर, फटे हुए पुरोहित के वस्त्र पहने एक आदमी घायल को पानी दे रहा था।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "lysandra",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "lysandra",
					"content": {
						"korean": "어서 오세요. 모두 지쳐 보이네요. 제가 돌봐드리죠.",
						"english": "Welcome. You all look exhausted. I'll take care of you.",
						"japanese": "ようこそ。皆さん、お疲れのようですね。私が看病しましょう。",
						"chinese": "欢迎。大家看起来都筋疲力尽了。我来照顾你们吧。",
						"french": "Bienvenue. Vous semblez tous épuisés. Je vais m'occuper de vous.",
						"spanish": "Bienvenidos. Todos parecen agotados. Yo los cuidaré.",
						"vietnamese": "Chào mừng. Mọi người có vẻ kiệt sức rồi. Để tôi chăm sóc cho.",
						"thai": "ยินดีต้อนรับครับ ทุกท่านดูอ่อนล้ากันมากเลย ผมจะดูแลให้เอง.",
						"hindi": "स्वागत है। आप सभी थके हुए लग रहे हैं। मैं आपका ख्याल रखूँगा।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고맙습니다… 죽는 줄 알았어요.",
						"english": "Thank you... I thought I was going to die.",
						"japanese": "ありがとうございます…死ぬかと思いました。",
						"chinese": "谢谢…我以为自己要死了。",
						"french": "Merci... Je croyais que j'allais mourir.",
						"spanish": "Gracias... Pensé que iba a morir.",
						"vietnamese": "Cảm ơn… Tôi cứ nghĩ mình sẽ chết rồi.",
						"thai": "ขอบคุณครับ...ผมนึกว่าจะตายซะแล้ว.",
						"hindi": "धन्यवाद… मुझे लगा मैं मर जाऊँगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "lysandra",
					"content": {
						"korean": "자, 손을 대세요. 곧 괜찮아질 겁니다.",
						"english": "Come, place your hand. You'll be fine soon.",
						"japanese": "さあ、手を当ててください。すぐに良くなりますよ。",
						"chinese": "来，把手放上来。很快就会好起来的。",
						"french": "Venez, posez votre main. Vous irez mieux bientôt.",
						"spanish": "Vamos, pon tu mano. Pronto estarás bien.",
						"vietnamese": "Nào, đặt tay lên đi. Sẽ ổn ngay thôi.",
						"thai": "เอาล่ะ วางมือลง. คุณจะดีขึ้นในไม่ช้า.",
						"hindi": "आओ, अपना हाथ रखो। तुम जल्द ही ठीक हो जाओगे।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "따뜻한 빛이 손에서 흘러나와 상처를 감쌌다. 치유받은 동료의 얼굴은 너무나 평온했다. 마치 잠든 인형처럼.",
						"english": "Warm light flowed from my hand, enveloping the wound. The healed companion's face was so serene, like a sleeping doll.",
						"japanese": "温かい光が手から流れ出し、傷を包み込んだ。癒された仲間の顔は、まるで眠る人形のように穏やかだった。",
						"chinese": "温暖的光芒从手中流出，包裹住伤口。被治愈的同伴的脸庞如此平静，如同熟睡的娃娃。",
						"french": "Une lumière chaude s'écoula de ma main, enveloppant la blessure. Le visage du compagnon guéri était si serein, comme une poupée endormie.",
						"spanish": "Una luz cálida fluyó de mi mano, envolviendo la herida. El rostro del compañero sanado estaba tan sereno, como una muñeca dormida.",
						"vietnamese": "Ánh sáng ấm áp tuôn ra từ tay tôi, bao bọc vết thương. Gương mặt người đồng đội được chữa lành thật thanh bình, như một búp bê đang ngủ.",
						"thai": "แสงอบอุ่นไหลจากมือของฉัน โอบล้อมบาดแผล ใบหน้าของสหายที่ได้รับการรักษาช่างสงบเงียบ ราวกับตุ๊กตานอนหลับ",
						"hindi": "हाथ से गर्म रोशनी बहकर घाव को ढक लिया। ठीक हुए साथी का चेहरा इतना शांत था, जैसे कोई सोई हुई गुड़िया。"
					},
					"type": "speech"
				},
				{
					"speaker": "lysandra",
					"content": {
						"korean": "더 깊은 곳에 필요한 약초가 있어요. 잠시 다녀올게요.",
						"english": "The herbs we need are deeper inside. I'll be back shortly.",
						"japanese": "必要な薬草はもっと奥にあります。少し行ってきます。",
						"chinese": "所需的药草在更深处。我一会儿就回来。",
						"french": "Les herbes nécessaires sont plus loin. Je reviens tout de suite.",
						"spanish": "Las hierbas necesarias están más adentro. Volveré en un momento.",
						"vietnamese": "Thảo dược cần thiết ở sâu hơn. Tôi sẽ đi một lát rồi về.",
						"thai": "สมุนไพรที่ต้องการอยู่ลึกเข้าไปข้างใน ฉันจะไปเอาสักครู่",
						"hindi": "ज़रूरी जड़ी-बूटियाँ और गहराई में हैं। मैं अभी आता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "lysandra",
					"content": {
						"korean": "이곳에서 쉬고 계세요. 안전할 겁니다.",
						"english": "Rest here. You'll be safe.",
						"japanese": "ここで休んでいてください。安全です。",
						"chinese": "您在这里休息吧。会很安全的。",
						"french": "Reposez-vous ici. Vous serez en sécurité.",
						"spanish": "Descanse aquí. Estará a salvo.",
						"vietnamese": "Hãy nghỉ ngơi ở đây. Anh sẽ an toàn thôi.",
						"thai": "พักที่นี่เถอะ คุณจะปลอดภัย",
						"hindi": "आप यहीं आराम कीजिए। आप सुरक्षित रहेंगे।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "lysandra",
					"duration_ms": 400,
					"direction": "up",
					"action": "exit",
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다행이다. 살았어.",
						"english": "...Thank goodness. You're alive.",
						"japanese": "…よかった。助かった。",
						"chinese": "…太好了。活下来了。",
						"french": "...Ouf. Tu es en vie.",
						"spanish": "...Menos mal. Estás vivo.",
						"vietnamese": "...May quá. Sống rồi.",
						"thai": "...ดีจังเลย รอดแล้ว",
						"hindi": "...शुक्र है। बच गए।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "사제가 사라진 후, 동굴 안은 예상보다 고요했다. 발소리조차 울리지 않았다.",
						"english": "After the priest vanished, the cave was quieter than expected. Not even footsteps echoed.",
						"japanese": "司祭が消えた後、洞窟の中は予想以上に静かだった。足音さえ響かなかった。",
						"chinese": "祭司消失后，洞穴内比预想的还要寂静。甚至连脚步声都没有回响。",
						"french": "Après la disparition du prêtre, la grotte était plus silencieuse que prévu. Pas même les pas n'y résonnaient.",
						"spanish": "Después de que el sacerdote desapareció, la cueva estaba más silenciosa de lo esperado. Ni siquiera los pasos resonaban.",
						"vietnamese": "Sau khi vị linh mục biến mất, hang động yên tĩnh hơn dự kiến. Ngay cả tiếng bước chân cũng không vọng lại.",
						"thai": "หลังจากนักบวชหายไป ภายในถ้ำก็เงียบกว่าที่คาดไว้ แม้แต่เสียงฝีเท้าก็ไม่ก้องกังวาน",
						"hindi": "पुजारी के गायब होने के बाद, गुफा उम्मीद से ज़्यादा शांत थी। यहाँ तक कि पैरों की आहट भी नहीं गूँज रही थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "피곤해서 그런가? 치료받은 {character_any}가 말을 안 하네.",
						"english": "Is it exhaustion? {character_any}, who was healed, isn't speaking.",
						"japanese": "疲れているのかな？ 治療された{character_any}が何も話さない。",
						"chinese": "是太累了吗？ 被治愈的{character_any}一言不发。",
						"french": "Est-ce la fatigue ? {character_any}, qui a été soigné, ne parle pas.",
						"spanish": "¿Será el cansancio? {character_any}, quien fue sanado, no habla.",
						"vietnamese": "Có phải do mệt mỏi không? {character_any} được chữa trị mà không nói gì cả.",
						"thai": "เป็นเพราะความเหนื่อยล้าหรือเปล่า? {character_any} ที่ได้รับการรักษาไม่พูดอะไรเลย",
						"hindi": "क्या यह थकावट है? ठीक हुआ {character_any} कुछ बोल नहीं रहा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "너무 평온해서 그런 거겠지. 나라도 그랬을 거야.",
						"english": "It must be because it's so peaceful. I would have been the same.",
						"japanese": "あまりにも穏やかだからだろう。私でもそうだっただろうな。",
						"chinese": "大概是因为太平静了吧。换作是我也会这样。",
						"french": "C'est sûrement à cause de cette paix. J'aurais été pareil.",
						"spanish": "Debe ser porque es muy tranquilo. Yo habría estado igual.",
						"vietnamese": "Chắc là do quá đỗi bình yên. Tôi cũng sẽ như vậy thôi.",
						"thai": "คงเป็นเพราะความสงบเงียบ ฉันเองก็คงเป็นแบบนั้น",
						"hindi": "शायद यह इतनी शांति की वजह से है। मैं भी ऐसा ही करता।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그래도… 이렇게 안전한 곳은 오랜만이야.",
						"english": "Still... it's been a long time since I've been in such a safe place.",
						"japanese": "それでも…こんなに安全な場所は久しぶりだ。",
						"chinese": "不过…这么安全的地方，真是久违了。",
						"french": "Pourtant... cela fait longtemps que je n'ai pas été dans un endroit aussi sûr.",
						"spanish": "Aun así... hace mucho que no estoy en un lugar tan seguro.",
						"vietnamese": "Dù vậy... đã lâu lắm rồi mới có một nơi an toàn thế này.",
						"thai": "ถึงอย่างนั้น... ก็เป็นเวลานานแล้วที่ได้อยู่ในที่ที่ปลอดภัยเช่นนี้",
						"hindi": "फिर भी... इतने सुरक्षित स्थान पर आए हुए बहुत समय हो गया।"
					},
					"type": "speech",
					"emotion": "happy"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "깊어질수록 어둠은 짙었지만, 묘한 평온이 불안감을 옅게 만들었다.",
						"english": "As we went deeper, the darkness grew, but a strange serenity diluted the unease.",
						"japanese": "深まるほど闇は濃くなったが、妙な平穏が不安感を薄れさせた。",
						"chinese": "越深入，黑暗越浓重，但一种奇妙的平静淡化了不安。",
						"french": "Plus on s'enfonçait, plus l'obscurité s'épaississait, mais une étrange sérénité atténuait l'inquiétude.",
						"spanish": "Cuanto más profundo, más densa era la oscuridad, pero una extraña calma disipaba la inquietud.",
						"vietnamese": "Càng đi sâu, bóng tối càng dày đặc, nhưng một sự bình yên kỳ lạ đã làm vơi bớt cảm giác bất an.",
						"thai": "ยิ่งลึกเข้าไปความมืดก็ยิ่งหนาทึบ แต่ความสงบที่แปลกประหลาดทำให้ความไม่สบายใจเจือจางลง",
						"hindi": "जितना गहरा गए, अँधेरा उतना ही घना होता गया, लेकिन एक अजीब सी शांति ने बेचैनी को कम कर दिया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "다른 부상자들도 다 똑같네. 미동도 없어.",
						"english": "The other injured are all the same. Not a single movement.",
						"japanese": "他の負傷者たちも皆同じだ。微動だにしない。",
						"chinese": "其他伤员也都一样。一动不动。",
						"french": "Les autres blessés sont tous pareils. Pas le moindre mouvement.",
						"spanish": "Los otros heridos están todos igual. Ni un solo movimiento.",
						"vietnamese": "Những người bị thương khác cũng vậy. Không hề nhúc nhích.",
						"thai": "ผู้บาดเจ็บคนอื่นๆ ก็เหมือนกัน ไม่มีแม้แต่การเคลื่อนไหว",
						"hindi": "बाकी घायल भी सब एक जैसे हैं। ज़रा भी हिल नहीं रहे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_4",
					"content": {
						"korean": "그만큼 사제의 힘이 강하다는 거겠지. 다들 편안해 보여.",
						"english": "The priest's power must be strong. Everyone looks at peace.",
						"japanese": "司祭の力がそれだけ強いということだろう。皆、安らかそうだ。",
						"chinese": "看来是祭司的力量很强大。大家看起来都很平静。",
						"french": "Le pouvoir du prêtre doit être fort. Tout le monde semble en paix.",
						"spanish": "El poder del sacerdote debe ser fuerte. Todos parecen en paz.",
						"vietnamese": "Chắc hẳn sức mạnh của linh mục rất lớn. Mọi người trông thật bình yên.",
						"thai": "พลังของนักบวชคงจะแข็งแกร่งมาก ทุกคนดูสงบสุขดี",
						"hindi": "पुजारी की शक्ति उतनी ही मजबूत होनी चाहिए। हर कोई शांति में दिख रहा है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사제가 준 물이 너무 달콤해서인가. 온몸에 힘이 풀려.",
						"english": "Is it because the water the priest gave was too sweet? My whole body feels weak.",
						"japanese": "司祭がくれた水があまりにも甘いからだろうか。全身の力が抜けていく。",
						"chinese": "难道是因为祭司给的水太甜了吗？我全身的力气都消失了。",
						"french": "Est-ce parce que l'eau que le prêtre a donnée était trop douce ? Tout mon corps se relâche.",
						"spanish": "Gracias al agua dulce del sacerdote, mi cuerpo entero se siente débil.",
						"vietnamese": "Có phải vì nước linh mục ban quá ngọt không? Cả người tôi bủn rủn.",
						"thai": "เป็นเพราะน้ำที่นักบวชให้มาหวานเกินไปหรือเปล่า? ทั้งตัวฉันไม่มีแรงเลย",
						"hindi": "क्या यह इसलिए है क्योंकि पुजारी ने जो पानी दिया वह बहुत मीठा था? मेरे पूरे शरीर से शक्ति जा रही है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "동굴은 끝없이 이어지는 듯했다. 이제 돌아갈 수 없을 것만 같은 기분.",
						"english": "The cave seemed to stretch endlessly. I feel like I can never go back now.",
						"japanese": "洞窟は果てしなく続くようだった。もう戻れないような気がする。",
						"chinese": "洞穴似乎无边无际。感觉现在再也回不去了。",
						"french": "La grotte semblait s'étirer à l'infini. J'ai l'impression de ne plus pouvoir revenir en arrière maintenant.",
						"spanish": "La cueva parecía extenderse sin fin. Siento que ya no podré volver.",
						"vietnamese": "Hang động dường như kéo dài vô tận. Tôi có cảm giác như không thể quay lại được nữa.",
						"thai": "ถ้ำดูเหมือนจะทอดยาวไปไม่มีที่สิ้นสุด ฉันรู้สึกเหมือนจะไม่สามารถกลับไปได้อีกแล้ว",
						"hindi": "गुफा अंतहीन लगती थी। मुझे ऐसा लग रहा है कि अब मैं कभी वापस नहीं जा पाऊंगा।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…이상한 기척이 느껴져. 사제가 말한 약초를 지키는 건가?",
						"english": "...I feel a strange presence. Is it guarding the herb the priest mentioned?",
						"japanese": "…奇妙な気配がする。司祭が言っていた薬草を守っているのだろうか？",
						"chinese": "……我感觉到了奇怪的气息。难道是守护着祭司提到的药草吗？",
						"french": "...Je sens une étrange présence. Garde-t-elle l'herbe mentionnée par le prêtre ?",
						"spanish": "...Siento una extraña presencia. ¿Está custodiando la hierba que mencionó el sacerdote?",
						"vietnamese": "...Tôi cảm thấy một sự hiện diện kỳ lạ. Có phải nó đang canh giữ loại thảo dược mà linh mục đã nói không?",
						"thai": "...ฉันรู้สึกถึงบางอย่างแปลกๆ มันกำลังเฝ้าสมุนไพรที่นักบวชพูดถึงอยู่หรือเปล่า?",
						"hindi": "...मुझे एक अजीब उपस्थिति महसूस हो रही है। क्या यह उस जड़ी-बूटी की रखवाली कर रहा है जिसका पुजारी ने उल्लेख किया था?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "괜찮아. 어쩐지… 아무것도 두렵지 않아.",
						"english": "It's okay. Somehow... I'm not afraid of anything.",
						"japanese": "大丈夫。なぜか…何も怖くない。",
						"chinese": "没关系。不知为何……我什么都不怕。",
						"french": "C'est bon. D'une manière ou d'une autre... je n'ai peur de rien.",
						"spanish": "Está bien. De alguna manera... no tengo miedo de nada.",
						"vietnamese": "Không sao đâu. Không hiểu sao... tôi không sợ gì cả.",
						"thai": "ไม่เป็นไร ไม่รู้ทำไม...ฉันไม่กลัวอะไรเลย",
						"hindi": "ठीक है। किसी तरह... मुझे किसी बात का डर नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "동굴 가장 깊은 곳, 거대한 그림자가 천천히 움직였다. 정체 모를 존재였다.",
						"english": "In the deepest part of the cave, a giant shadow moved slowly. It was an unknown entity.",
						"japanese": "洞窟の最も深い場所で、巨大な影がゆっくりと動いた。正体不明の存在だった。",
						"chinese": "在洞穴最深处，一个巨大的影子缓缓移动。那是一个不明身份的存在。",
						"french": "Au plus profond de la grotte, une ombre géante se déplaçait lentement. C'était une entité inconnue.",
						"spanish": "En lo más profundo de la cueva, una sombra gigante se movía lentamente. Era una entidad desconocida.",
						"vietnamese": "Sâu nhất trong hang động, một cái bóng khổng lồ di chuyển chậm rãi. Đó là một thực thể không rõ danh tính.",
						"thai": "ในส่วนที่ลึกที่สุดของถ้ำ เงาขนาดยักษ์เคลื่อนไหวช้าๆ มันเป็นสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "गुफा के सबसे गहरे हिस्से में, एक विशाल छाया धीरे-धीरे हिल रही थी। वह एक अज्ञात इकाई थी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "누구냐. 이곳의 영원한 평온을 깨려는 자는.",
						"english": "Who are you? Who dares to break the eternal peace of this place?",
						"japanese": "誰だ。この地の永遠の平穏を破ろうとする者は。",
						"chinese": "你是什么人？竟敢打破此地的永恒宁静。",
						"french": "Qui es-tu ? Qui ose briser la paix éternelle de ce lieu ?",
						"spanish": "¿Quién eres? ¿Quién se atreve a romper la paz eterna de este lugar?",
						"vietnamese": "Ngươi là ai? Kẻ nào dám phá vỡ sự bình yên vĩnh cửu nơi đây?",
						"thai": "เจ้าเป็นใคร? ผู้ใดกล้าที่จะทำลายความสงบสุขนิรันดร์ของสถานที่แห่งนี้?",
						"hindi": "तुम कौन हो? कौन इस जगह की शाश्वत शांति भंग करने का साहस करता है?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "영원한 평온? 이곳은 너무 조용해서 기분 나빠!",
						"english": "Eternal peace? This place is so quiet it's unsettling!",
						"japanese": "永遠の平穏？ここは静かすぎて気分が悪い！",
						"chinese": "永恒的宁静？这里太安静了，让人感觉不舒服！",
						"french": "La paix éternelle ? Cet endroit est si silencieux que c'en est troublant !",
						"spanish": "¿Paz eterna? ¡Este lugar es tan silencioso que es inquietante!",
						"vietnamese": "Bình yên vĩnh cửu? Nơi này quá yên tĩnh đến mức khó chịu!",
						"thai": "ความสงบสุขนิรันดร์งั้นหรือ? ที่นี่เงียบเกินไปจนน่าขนลุก!",
						"hindi": "शाश्वत शांति? यह जगह इतनी शांत है कि यह बेचैन कर देती है!"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 그저 길을 찾을 뿐이다! 방해하지 마!",
						"english": "We're just looking for a path! Don't interfere!",
						"japanese": "我々はただ道を探しているだけだ！邪魔をするな！",
						"chinese": "我们只是在寻找出路！别碍事！",
						"french": "Nous ne faisons que chercher un chemin ! Ne nous gêne pas !",
						"spanish": "¡Solo estamos buscando un camino! ¡No interfieras!",
						"vietnamese": "Chúng tôi chỉ đang tìm đường! Đừng cản trở!",
						"thai": "พวกเราแค่กำลังหาทางเท่านั้น! อย่ามาขัดขวาง!",
						"hindi": "हम बस रास्ता ढूंढ रहे हैं! दखल मत दो!"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…어리석은 자들. 진정한 평온은… 깨지지 않아. 영원히.",
						"english": "...Foolish ones. True peace... cannot be broken. Forever.",
						"japanese": "…愚かな者たちめ。真の平穏は…破られない。永遠に。",
						"chinese": "……愚蠢的家伙们。真正的平静……是不会被打破的。永远。",
						"french": "...Idiots. La vraie paix... ne peut être brisée. Jamais.",
						"spanish": "...Necios. La verdadera paz... no se puede romper. Jamás.",
						"vietnamese": "...Những kẻ ngu ngốc. Sự bình yên thật sự... không thể bị phá vỡ. Vĩnh viễn.",
						"thai": "...คนโง่เอ้ย ความสงบสุขที่แท้จริง...ไม่มีทางถูกทำลาย ตลอดไป",
						"hindi": "...मूर्ख लोगों। सच्ची शांति... टूट नहीं सकती। हमेशा के लिए।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 저 그림자가 계속 이상한 말을 해….",
						"english": "What was that? That shadow keeps saying strange things...",
						"japanese": "なんだ？あの影、ずっと変なことを言ってる…。",
						"chinese": "什么声音？那个影子一直在说奇怪的话……",
						"french": "Qu'est-ce que c'était ? Cette ombre n'arrête pas de dire des choses étranges...",
						"spanish": "¿Qué fue eso? Esa sombra no para de decir cosas extrañas...",
						"vietnamese": "Gì vậy? Cái bóng đó cứ nói mấy lời kỳ lạ...",
						"thai": "อะไรนะ? เงาตัวนั้นเอาแต่พูดอะไรแปลกๆ...",
						"hindi": "यह क्या था? वह परछाई अजीब बातें कहती रहती है..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만, 동굴의 침묵은 더욱 깊어졌다. 이 '평온'은 정말 안전한 걸까?",
						"english": "We won, but the cave's silence deepened. Is this 'peace' truly safe?",
						"japanese": "勝利したが、洞窟の沈黙はさらに深まった。この『平穏』は本当に安全なのか？",
						"chinese": "虽然胜利了，但洞穴的寂静却更深了。这份“平静”真的安全吗？",
						"french": "Nous avons gagné, mais le silence de la grotte s'est approfondi. Cette 'paix' est-elle vraiment sûre ?",
						"spanish": "Ganamos, pero el silencio de la cueva se hizo más profundo. ¿Es esta 'paz' realmente segura?",
						"vietnamese": "Chúng ta đã thắng, nhưng sự tĩnh lặng của hang động càng sâu sắc hơn. Sự 'bình yên' này có thực sự an toàn không?",
						"thai": "เราชนะแล้ว แต่ความเงียบของถ้ำกลับยิ่งลึกซึ้งลงไป 'ความสงบ' นี้ปลอดภัยจริงหรือ?",
						"hindi": "हम जीत गए, लेकिन गुफा की खामोशी और गहरी हो गई। क्या यह 'शांति' सचमुच सुरक्षित है?"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 자들이여. 이곳에서… 영원한 평온을 누려라.",
						"english": "Weaklings. Here... enjoy eternal peace.",
						"japanese": "弱き者たちよ。ここで…永遠の安寧を享受せよ。",
						"chinese": "弱者们。在此……享受永恒的平静吧。",
						"french": "Faibles. Ici... jouissez d'une paix éternelle.",
						"spanish": "Débiles. Aquí... disfrutad de la paz eterna.",
						"vietnamese": "Những kẻ yếu đuối. Tại đây... hãy tận hưởng sự bình yên vĩnh cửu.",
						"thai": "พวกอ่อนแอเอ๋ย ณ ที่แห่งนี้... จงรับความสงบสุขชั่วนิรันดร์เถิด",
						"hindi": "कमजोरों। यहाँ... शाश्वत शांति का आनंद लो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직은 안 돼! 우리는 여기서 멈출 수 없어!",
						"english": "Damn it... not yet! We can't stop here!",
						"japanese": "くそっ…まだだ！ここで止まるわけにはいかない！",
						"chinese": "该死……还没完！我们不能止步于此！",
						"french": "Mince... pas encore ! Nous ne pouvons pas nous arrêter ici !",
						"spanish": "¡Maldita sea... aún no! ¡No podemos detenernos aquí!",
						"vietnamese": "Chết tiệt... chưa được! Chúng ta không thể dừng lại ở đây!",
						"thai": "บ้าจริง... ยังไม่ใช่ตอนนี้! เราหยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "धिक्कार है... अभी नहीं! हम यहाँ रुक नहीं सकते!"
					}
				}
			]
		}
	]
} as const;
