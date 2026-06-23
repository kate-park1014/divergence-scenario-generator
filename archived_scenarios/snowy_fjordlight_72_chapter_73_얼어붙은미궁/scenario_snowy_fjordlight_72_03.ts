export const scenario_snowy_fjordlight_72_03 = {
	"scenario_id": "snowy_fjordlight_72_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
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
						"korean": "연구 시설의 입구. 얼어붙은 문이 억지로 열려 있었다.",
						"english": "Research facility entrance. The frozen door forced open.",
						"japanese": "研究施設の入り口。凍りついた扉が無理やり開けられていた。",
						"chinese": "研究设施入口。冰冻的门被强行打开了。",
						"french": "Entrée de l'installation de recherche. La porte gelée, forcée de s'ouvrir.",
						"spanish": "Entrada a la instalación de investigación. La puerta congelada, forzada a abrirse.",
						"vietnamese": "Lối vào cơ sở nghiên cứu. Cánh cửa đóng băng đã bị cạy mở.",
						"thai": "ทางเข้าศูนย์วิจัย. ประตูที่แข็งตัวถูกเปิดออกอย่างแรง.",
						"hindi": "शोध सुविधा का प्रवेश द्वार। जमी हुई दरवाज़ा ज़बरदस्ती खोला गया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "으스스하네. 누가 이런 곳에.",
						"english": "Spooky. Who would be in a place like this?",
						"japanese": "気味が悪い。誰がこんな場所に。",
						"chinese": "真吓人。谁会来这种地方？",
						"french": "Étrange. Qui serait dans un tel endroit ?",
						"spanish": "Qué espeluznante. ¿Quién estaría en un lugar así?",
						"vietnamese": "Rợn người quá. Ai lại ở một nơi như thế này chứ.",
						"thai": "น่าขนลุก. ใครจะมาอยู่ในที่แบบนี้.",
						"hindi": "डरावना है। ऐसी जगह पर कौन होगा?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "빛은 안으로 향하고 있어.",
						"english": "The light is heading inside.",
						"japanese": "光は中へ向かっている。",
						"chinese": "光正向里面蔓延。",
						"french": "La lumière se dirige vers l'intérieur.",
						"spanish": "La luz se dirige hacia adentro.",
						"vietnamese": "Ánh sáng đang hướng vào bên trong.",
						"thai": "แสงกำลังมุ่งหน้าเข้าไปข้างใน.",
						"hindi": "प्रकाश अंदर की ओर जा रहा है।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"content": {
						"korean": "뭔가 더 있어…",
						"english": "There's something more...",
						"japanese": "何かまだある…",
						"chinese": "还有什么……",
						"french": "Il y a quelque chose de plus...",
						"spanish": "Hay algo más...",
						"vietnamese": "Có gì đó nữa...",
						"thai": "มีบางอย่างเพิ่มเติม...",
						"hindi": "कुछ और भी है…"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "시설 내부는 연구 장비들로 어지러웠다.",
						"english": "The facility's interior was cluttered with research equipment.",
						"japanese": "施設内部は研究設備で散らかっていた。",
						"chinese": "设施内部堆满了研究设备，一片狼藉。",
						"french": "L'intérieur de l'installation était encombré d'équipements de recherche.",
						"spanish": "El interior de la instalación estaba desordenado con equipo de investigación.",
						"vietnamese": "Bên trong cơ sở bừa bộn với các thiết bị nghiên cứu.",
						"thai": "ภายในอาคารรกไปด้วยอุปกรณ์วิจัย.",
						"hindi": "सुविधा का आंतरिक भाग अनुसंधान उपकरणों से भरा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…예상했던 것보다 빨리 왔군요.",
						"english": "...You arrived sooner than expected.",
						"japanese": "…思ったよりも早く来ましたね。",
						"chinese": "……你们来得比预想的要早。",
						"french": "...Vous êtes arrivé plus tôt que prévu.",
						"spanish": "...Llegaron antes de lo esperado.",
						"vietnamese": "...Anh đến sớm hơn dự kiến.",
						"thai": "...คุณมาเร็วกว่าที่คาดไว้.",
						"hindi": "…आप अपेक्षा से जल्दी आ गए।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "에이라. 얼음 분석가. 이 빛의 정체를 쫓고 있죠.",
						"english": "Aira. Ice analyst. Tracking the source of this light.",
						"japanese": "アイラ。氷の分析官。この光の正体を追っています。",
						"chinese": "艾拉。冰霜分析师。正在追查这道光的源头。",
						"french": "Aira. Analyste des glaces. Je traque l'origine de cette lumière.",
						"spanish": "Aira. Analista de hielo. Estoy rastreando el origen de esta luz.",
						"vietnamese": "Aira. Nhà phân tích băng. Tôi đang theo dõi nguồn gốc ánh sáng này.",
						"thai": "ไอรา นักวิเคราะห์น้ำแข็ง กำลังตามรอยต้นกำเนิดแสงนี้",
						"hindi": "ऐरा। बर्फ़ विश्लेषक। इस रोशनी के स्रोत का पता लगा रही हूँ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 자연 현상이 아닙니다. 이 파편들을 보세요.",
						"english": "It's no mere natural phenomenon. Look at these fragments.",
						"japanese": "これは単なる自然現象ではありません。この破片を見てください。",
						"chinese": "这可不是简单的自然现象。看看这些碎片。",
						"french": "Ce n'est pas un simple phénomène naturel. Regardez ces fragments.",
						"spanish": "No es un mero fenómeno natural. Mira estos fragmentos.",
						"vietnamese": "Đây không phải hiện tượng tự nhiên đơn thuần. Hãy nhìn những mảnh vỡ này.",
						"thai": "นี่ไม่ใช่ปรากฏการณ์ธรรมชาติธรรมดา ดูเศษพวกนี้สิ",
						"hindi": "यह सिर्फ़ एक प्राकृतिक घटना नहीं है। इन टुकड़ों को देखें।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "이게 뭔데요?",
						"english": "What are these?",
						"japanese": "これ、何ですか？",
						"chinese": "这是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es esto?",
						"vietnamese": "Cái gì đây?",
						"thai": "นี่มันอะไร?",
						"hindi": "यह क्या है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "고대 유물의 일부. 여기서 이상한 에너지 파장이 감지됩니다.",
						"english": "Part of an ancient artifact. Strange energy waves are detected here.",
						"japanese": "古代の遺物の一部。ここで奇妙なエネルギー波が感知されます。",
						"chinese": "古代文物的一部分。这里检测到异常能量波动。",
						"french": "Une partie d'un ancien artefact. Des ondes d'énergie étranges sont détectées ici.",
						"spanish": "Parte de un artefacto antiguo. Se detectan extrañas ondas de energía aquí.",
						"vietnamese": "Một phần của cổ vật. Sóng năng lượng lạ đang được phát hiện ở đây.",
						"thai": "ส่วนหนึ่งของโบราณวัตถุ ตรวจพบคลื่นพลังงานแปลกๆ ที่นี่",
						"hindi": "प्राचीन कलाकृति का एक हिस्सा। यहाँ अजीब ऊर्जा तरंगें महसूस हो रही हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 빛은… 정신에 영향을 줍니다.",
						"english": "This light... affects the mind.",
						"japanese": "この光は…精神に影響を与えます。",
						"chinese": "这道光…会影响心智。",
						"french": "Cette lumière... affecte l'esprit.",
						"spanish": "Esta luz... afecta la mente.",
						"vietnamese": "Ánh sáng này... ảnh hưởng đến tâm trí.",
						"thai": "แสงนี้... ส่งผลต่อจิตใจ",
						"hindi": "यह रोशनी... दिमाग पर असर करती है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "정신에요?",
						"english": "The mind?",
						"japanese": "精神に、ですか？",
						"chinese": "心智？",
						"french": "L'esprit ?",
						"spanish": "¿La mente?",
						"vietnamese": "Tâm trí sao?",
						"thai": "จิตใจเหรอ?",
						"hindi": "दिमाग पर?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 더 길을 혼란스럽게 만들고, 이상한 환각을 보이게 합니다.",
						"english": "It makes the path increasingly disorienting, causing strange hallucinations.",
						"japanese": "道をさらに混乱させ、奇妙な幻覚を見せるようになります。",
						"chinese": "它会让人越来越迷失方向，并产生奇怪的幻觉。",
						"french": "Elle rend le chemin de plus en plus désorientant, provoquant d'étranges hallucinations.",
						"spanish": "Vuelve el camino cada vez más desorientador, causando extrañas alucinaciones.",
						"vietnamese": "Nó khiến con đường ngày càng mất phương hướng, gây ra những ảo giác kỳ lạ.",
						"thai": "มันทำให้เส้นทางสับสนมากขึ้นเรื่อยๆ และทำให้เห็นภาพหลอนประหลาด",
						"hindi": "यह रास्ता और भी भ्रामक बनाता है, और अजीब मतिभ्रम दिखाता है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "이 유물 조각들을 통해, 빛이 만들어내는 파동을 추적하고 있어요.",
						"english": "Through these artifact fragments, I'm tracking the waves produced by the light.",
						"japanese": "この遺物の破片を通して、光が生み出す波動を追跡しています。",
						"chinese": "通过这些文物碎片，我正在追查光线产生的波动。",
						"french": "À travers ces fragments d'artefact, je suis les ondes produites par la lumière.",
						"spanish": "A través de estos fragmentos de artefacto, estoy rastreando las ondas producidas por la luz.",
						"vietnamese": "Thông qua những mảnh vỡ cổ vật này, tôi đang theo dõi các sóng do ánh sáng tạo ra.",
						"thai": "ผ่านเศษโบราณวัตถุเหล่านี้ ผมกำลังติดตามคลื่นที่แสงสร้างขึ้น",
						"hindi": "इन कलाकृति के टुकड़ों के माध्यम से, मैं उस तरंग का पता लगा रहा हूँ जो प्रकाश पैदा कर रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "정신을 조종한다니… 너무 무섭잖아.",
						"english": "Controlling minds... that's terrifying.",
						"japanese": "精神を操るなんて…恐ろしすぎる。",
						"chinese": "控制心智…太可怕了。",
						"french": "Contrôler les esprits... c'est terrifiant.",
						"spanish": "Controlar mentes... eso es aterrador.",
						"vietnamese": "Kiểm soát tâm trí... đáng sợ quá.",
						"thai": "ควบคุมจิตใจ... น่ากลัวเกินไปแล้ว",
						"hindi": "दिमाग को नियंत्रित करना... यह बहुत डरावना है।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "네. 여기 깊숙한 곳에서, 희미하지만… 슬픈 노래 같은 공명음이 들려요.",
						"english": "Yes. Deep inside, a faint... but mournful hum, like a sad song, echoes.",
						"japanese": "はい。この奥深くで、微かですが…悲しい歌のような共鳴音が聞こえます。",
						"chinese": "是的。在这深处，我听到一声微弱但…悲伤的歌声般的共鸣。",
						"french": "Oui. Au plus profond, un faible écho... comme une triste mélodie, peut être perçu.",
						"spanish": "Sí. Desde lo más hondo, percibo una resonancia débil... como una triste melodía.",
						"vietnamese": "Vâng. Sâu trong này, tôi nghe thấy một âm thanh cộng hưởng yếu ớt nhưng… giống như một bài hát buồn.",
						"thai": "ครับ/ค่ะ ลึกเข้าไปข้างในนี้ ผม/ฉันได้ยินเสียงก้องกังวานแผ่วๆ… เหมือนเพลงเศร้าเพลงหนึ่ง",
						"hindi": "हाँ। यहाँ गहराई में, एक हल्की लेकिन... दुखद गीत जैसी प्रतिध्वनि सुनाई देती है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "노래?",
						"english": "A song?",
						"japanese": "歌？",
						"chinese": "歌声？",
						"french": "Une chanson ?",
						"spanish": "¿Una canción?",
						"vietnamese": "Bài hát?",
						"thai": "เพลง?",
						"hindi": "एक गीत?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "듣고 있으면… 마음이 무너져요. 하지만… 뭔가 중요한 단서인 것 같아요.",
						"english": "It breaks my heart to listen... but it feels like a vital clue.",
						"japanese": "聞いていると…心が打ち砕かれるようです。しかし…何か重要な手がかりのようです。",
						"chinese": "听着它…我的心都碎了。但是…这似乎是一个重要的线索。",
						"french": "L'écouter... me brise le cœur. Mais je crois que c'est un indice crucial.",
						"spanish": "Al escucharlo... mi corazón se desgarra. Pero siento que es una pista vital.",
						"vietnamese": "Nghe nó… tim tôi tan nát. Nhưng… dường như đó là một manh mối quan trọng.",
						"thai": "ฟังแล้ว… ใจผม/ฉันจะสลาย แต่… มันเหมือนเป็นเบาะแสสำคัญบางอย่าง",
						"hindi": "इसे सुनकर... मेरा दिल टूट जाता है। लेकिन... यह एक महत्वपूर्ण सुराग लगता है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 빛은 어둠을 가리는 빛이 아니라, 어둠을 더욱 교묘하게 만드는 도구입니다.",
						"english": "This light doesn't hide darkness; it's a tool that makes it more insidious.",
						"japanese": "この光は闇を隠す光ではなく、闇をより巧妙にする道具です。",
						"chinese": "这光不是遮蔽黑暗的光，而是使黑暗更加狡猾的工具。",
						"french": "Cette lumière n'est pas une lumière qui dissimule l'obscurité, mais un outil qui rend l'obscurité encore plus insidieuse.",
						"spanish": "Esta luz no es una luz que oculta la oscuridad, sino una herramienta que la hace aún más astuta.",
						"vietnamese": "Ánh sáng này không phải là ánh sáng che giấu bóng tối, mà là một công cụ khiến bóng tối trở nên xảo quyệt hơn.",
						"thai": "แสงนี้ไม่ใช่แสงที่ปิดบังความมืด แต่เป็นเครื่องมือที่ทำให้ความมืดซับซ้อนยิ่งขึ้น",
						"hindi": "यह प्रकाश अंधेरे को छिपाने वाला प्रकाश नहीं है, बल्कि अंधेरे को और भी चालाक बनाने का एक साधन है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "공명음이 더 선명해지고 있어요. 조심하세요.",
						"english": "The resonance is getting clearer. Be careful.",
						"japanese": "共鳴音がより鮮明になっています。気をつけてください。",
						"chinese": "共鸣声越来越清晰了。小心。",
						"french": "La résonance devient plus claire. Faites attention.",
						"spanish": "La resonancia se está volviendo más clara. Tengan cuidado.",
						"vietnamese": "Âm thanh cộng hưởng đang trở nên rõ ràng hơn. Hãy cẩn thận.",
						"thai": "เสียงก้องกังวานชัดเจนขึ้นแล้ว ระวังตัวด้วย",
						"hindi": "प्रतिध्वनि और स्पष्ट हो रही है। सावधान रहें।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "발걸음이 무거워지는 것 같아.",
						"english": "My steps feel heavy.",
						"japanese": "足取りが重くなるようだ。",
						"chinese": "我的脚步似乎越来越沉重了。",
						"french": "Mes pas semblent plus lourds.",
						"spanish": "Mis pasos se sienten pesados.",
						"vietnamese": "Bước chân tôi dường như nặng trĩu.",
						"thai": "รู้สึกว่าก้าวเดินหนักขึ้น",
						"hindi": "मेरे कदम भारी होते जा रहे हैं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "노래 소리가… 머리에서 울려.",
						"english": "The sound of the song… echoes in my head.",
						"japanese": "歌の声が…頭の中で響く。",
						"chinese": "歌声…在我脑海中回荡。",
						"french": "Le son de la chanson… résonne dans ma tête.",
						"spanish": "El sonido de la canción… resuena en mi cabeza.",
						"vietnamese": "Tiếng hát… vang vọng trong đầu tôi.",
						"thai": "เสียงเพลง… ก้องอยู่ในหัว",
						"hindi": "गीत की आवाज़... मेरे सिर में गूँज रही है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "이제 되돌릴 수 없어요. 빛의 근원이 가까워지고 있습니다.",
						"english": "There's no turning back now. The source of the light is drawing near.",
						"japanese": "もう後戻りできません。光の源が近づいています。",
						"chinese": "现在无法回头了。光源正在靠近。",
						"french": "Impossible de revenir en arrière maintenant. La source de la lumière approche.",
						"spanish": "Ahora no hay vuelta atrás. La fuente de la luz se está acercando.",
						"vietnamese": "Không thể quay lại được nữa. Nguồn sáng đang đến gần.",
						"thai": "ตอนนี้กลับตัวไม่ได้แล้ว แหล่งกำเนิดแสงกำลังใกล้เข้ามา",
						"hindi": "अब पीछे नहीं हटा जा सकता। प्रकाश का स्रोत निकट आ रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "저 안에는… 우리가 이해할 수 없는 것이 기다리고 있을 겁니다.",
						"english": "Inside there… something we cannot comprehend awaits.",
						"japanese": "あの奥には…私たちが理解できないものが待ち受けているでしょう。",
						"chinese": "在里面…有什么我们无法理解的东西在等着我们。",
						"french": "À l'intérieur… quelque chose que nous ne pouvons comprendre nous attend.",
						"spanish": "Ahí dentro… nos espera algo que no podemos comprender.",
						"vietnamese": "Ở đó… một thứ gì đó mà chúng ta không thể hiểu đang chờ đợi.",
						"thai": "ข้างในนั้น… สิ่งที่เราไม่อาจเข้าใจกำลังรออยู่",
						"hindi": "वहाँ अंदर... कुछ ऐसा इंतज़ार कर रहा है जिसे हम समझ नहीं सकते।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"speaker": "character_2",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도 가야 해. 진실을 알아야 해.",
						"english": "Still, we must go. We must know the truth.",
						"japanese": "それでも行かなければならない。真実を知らなければならない。",
						"chinese": "即使如此，我们也要去。我们必须知道真相。",
						"french": "Malgré tout, nous devons y aller. Nous devons connaître la vérité.",
						"spanish": "Aún así, debemos ir. Debemos saber la verdad.",
						"vietnamese": "Dù vậy, chúng ta phải đi. Chúng ta phải biết sự thật.",
						"thai": "ถึงอย่างนั้นก็ต้องไป เราต้องรู้ความจริง",
						"hindi": "फिर भी, हमें जाना होगा। हमें सच्चाई जाननी होगी।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은… 필사적인 몸부림…",
						"english": "...Foolish... desperate struggle...",
						"japanese": "…愚かな…必死のあがき…",
						"chinese": "……愚蠢的……绝望挣扎……",
						"french": "...Stupide... lutte désespérée...",
						"spanish": "...Estúpida... lucha desesperada...",
						"vietnamese": "...Thật ngu ngốc... một sự vùng vẫy tuyệt vọng...",
						"thai": "...งี่เง่า... การดิ้นรนที่สิ้นหวัง...",
						"hindi": "...मूर्खतापूर्ण... हताश संघर्ष..."
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "빛은… 결코… 사라지지… 않는다…",
						"english": "Light... never... fades...",
						"japanese": "光は…決して…消えない…",
						"chinese": "光……永不……消逝……",
						"french": "La lumière... ne... disparaît... jamais...",
						"spanish": "La luz... nunca... desaparece...",
						"vietnamese": "Ánh sáng... sẽ không bao giờ... biến mất...",
						"thai": "แสงสว่าง... ไม่มีทาง... เลือนหายไป...",
						"hindi": "प्रकाश... कभी... मिटता... नहीं..."
					}
				},
				{
					"content": {
						"korean": "끝났어… 그런데… 왜 이렇게 찝찝하지?",
						"english": "It's over... but... why does it feel so unsettling?",
						"japanese": "終わった…しかし…なぜこんなにも後味が悪い？",
						"chinese": "结束了……可是……为什么感觉如此不安？",
						"french": "C'est fini... mais... pourquoi cette sensation étrange ?",
						"spanish": "Se acabó... pero... ¿por qué me siento tan inquieto?",
						"vietnamese": "Kết thúc rồi... nhưng... sao cảm giác khó chịu thế này?",
						"thai": "จบแล้ว... แต่... ทำไมรู้สึกไม่สบายใจแบบนี้?",
						"hindi": "यह खत्म हो गया... लेकिन... इतनी बेचैनी क्यों है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "아직… 완전히 끝난 게 아닐 수도 있어요. 저 빛의 근원은… 더 깊은 곳에 있을지도.",
						"english": "It might not be completely over yet... The source of that light... could be even deeper.",
						"japanese": "まだ…完全に終わったわけじゃないかもしれません。あの光の源は…もっと深いところにあるのかも。",
						"chinese": "或许…还没有完全结束。那道光的源头…可能在更深的地方。",
						"french": "Ce n'est peut-être pas encore tout à fait fini... La source de cette lumière... pourrait être plus profonde.",
						"spanish": "Puede que aún no haya terminado del todo... El origen de esa luz... podría estar en lo más profundo.",
						"vietnamese": "Có lẽ... vẫn chưa kết thúc hoàn toàn. Nguồn gốc của ánh sáng đó... có thể nằm sâu hơn nữa.",
						"thai": "อาจจะ...ยังไม่จบสมบูรณ์ แหล่งกำเนิดแสงนั้น...อาจจะอยู่ลึกกว่านี้",
						"hindi": "शायद... अभी पूरी तरह खत्म नहीं हुआ है। उस प्रकाश का स्रोत... और भी गहरा हो सकता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "'차가운 진실의 단편'은 막을 내렸다. 하지만 빛이 이끈 길은, 여전히 안개 속에 있었다.",
						"english": "'Shards of Cold Truth' has concluded. But the path led by light remained veiled in mist.",
						"japanese": "『冷たい真実の断片』は幕を閉じた。だが、光が導いた道は、まだ霧の中だった。",
						"chinese": "《冰冷真相的碎片》落下了帷幕。然而，光芒指引的道路，依然迷雾重重。",
						"french": "Les 'Fragments de Vérité Froide' ont tiré leur révérence. Mais le chemin tracé par la lumière restait voilé par la brume.",
						"spanish": "'Fragmentos de Verdad Fría' llegó a su fin. Pero el camino guiado por la luz seguía envuelto en la niebla.",
						"vietnamese": "'Mảnh Ghép Sự Thật Lạnh Giá' đã khép lại. Nhưng con đường ánh sáng dẫn lối vẫn chìm trong màn sương.",
						"thai": "'เศษเสี้ยวแห่งความจริงอันเยือกเย็น' ได้สิ้นสุดลงแล้ว แต่เส้นทางที่แสงนำพาไปนั้นยังคงปกคลุมไปด้วยหมอก",
						"hindi": "'शीत सत्य के अंश' का समापन हुआ। लेकिन प्रकाश द्वारा दिखाया गया मार्ग, अभी भी कोहरे में था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "마침내, 빛의 근원지에 다다랐다. 거대한 얼음 결정체가 맥동하고 있었다.",
						"english": "Finally, we reached the source of light. A colossal ice crystal pulsed.",
						"japanese": "ついに、光の源にたどり着いた。巨大な氷の結晶が脈動していた。",
						"chinese": "终于，我们抵达了光的源头。一块巨大的冰晶正在跳动。",
						"french": "Enfin, nous avons atteint la source de lumière. Un cristal de glace colossal palpitait.",
						"spanish": "Finalmente, llegamos a la fuente de luz. Un colosal cristal de hielo palpitaba.",
						"vietnamese": "Cuối cùng, chúng ta đã đến được nguồn ánh sáng. Một tinh thể băng khổng lồ đang rung động.",
						"thai": "ในที่สุด เราก็มาถึงต้นกำเนิดของแสง คริสตัลน้ำแข็งมหึมากำลังเต้นเป็นจังหวะ",
						"hindi": "अंततः, हम प्रकाश के स्रोत पर पहुँच गए। एक विशालकाय बर्फ का क्रिस्टल स्पंदित हो रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…왔는가. 길 잃은 자들이여.",
						"english": "...So, you've come. Lost wanderers.",
						"japanese": "…来たか。道に迷いし者たちよ。",
						"chinese": "……来了吗。迷途之人。",
						"french": "...Vous êtes venus. Âmes égarées.",
						"spanish": "...Así que habéis llegado. Errantes perdidos.",
						"vietnamese": "...Đã đến rồi sao. Hỡi những kẻ lạc lối.",
						"thai": "...มาแล้วรึ. ผู้หลงทางเอ๋ย.",
						"hindi": "...तो तुम आ गए। भटके हुए पथिक।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희의 갈망이, 나를 깨웠다.",
						"english": "Your yearning awakened me.",
						"japanese": "お前たちの渇望が、私を目覚めさせた。",
						"chinese": "你们的渴望，唤醒了我。",
						"french": "Votre désir m'a éveillé.",
						"spanish": "Vuestro anhelo me despertó.",
						"vietnamese": "Khát vọng của các ngươi, đã đánh thức ta.",
						"thai": "ความปรารถนาของพวกเจ้า ปลุกข้าให้ตื่นขึ้น",
						"hindi": "तुम्हारी लालसा ने मुझे जगाया।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 환상을 만들었나?",
						"english": "Did you... create all these illusions?",
						"japanese": "あなたが…この全ての幻覚を創り出したのか？",
						"chinese": "是你……创造了所有这些幻象吗？",
						"french": "C'est toi... qui as créé toutes ces illusions ?",
						"spanish": "¿Tú... creaste todas estas ilusiones?",
						"vietnamese": "Ngươi... đã tạo ra tất cả những ảo ảnh này sao?",
						"thai": "ท่าน... สร้างภาพลวงตาทั้งหมดนี้หรือ?",
						"hindi": "क्या तुमने... ये सारे भ्रम बनाए हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "환상? 아니. 진실이다. 너희가 보고 싶은 진실.",
						"english": "Illusions? No. It is truth. The truth you wish to see.",
						"japanese": "幻覚だと？違う。真実だ。お前たちが見たい真実を。",
						"chinese": "幻象？不。这是真相。你们渴望看到的真相。",
						"french": "Illusions ? Non. C'est la vérité. La vérité que vous désirez voir.",
						"spanish": "Ilusiones? No. Es la verdad. La verdad que deseáis ver.",
						"vietnamese": "Ảo ảnh? Không. Đây là sự thật. Sự thật mà các ngươi muốn thấy.",
						"thai": "ภาพลวงตา? ไม่ใช่ นี่คือความจริง ความจริงที่พวกเจ้าอยากเห็น",
						"hindi": "भ्रम? नहीं। यह सत्य है। वह सत्य जो तुम देखना चाहते हो।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"spot": [
						2,
						4
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "{random_boss}는… 빛에 잠식된 존재예요. 정신 파장이… 감당할 수 없을 정도야.",
						"english": "{random_boss} is... a being consumed by light. Its mental fluctuations are... unbearable.",
						"japanese": "{random_boss}は…光に侵食された存在です。精神の波動が…耐えられないほどだ。",
						"chinese": "{random_boss}是……被光侵蚀的存在。精神波动……已经无法承受了。",
						"french": "{random_boss} est... une entité engloutie par la lumière. Ses ondes psychiques sont... insupportables.",
						"spanish": "{random_boss} es... un ser consumido por la luz. Sus ondas mentales son... insoportables.",
						"vietnamese": "{random_boss} là... một thực thể bị ánh sáng nuốt chửng. Sóng tinh thần của nó... không thể chịu đựng được.",
						"thai": "{random_boss} คือ... สิ่งมีชีวิตที่ถูกแสงกลืนกิน คลื่นจิตของมัน... ทนไม่ไหวแล้ว",
						"hindi": "{random_boss} ...प्रकाश से ग्रसित एक सत्ता है। इसकी मानसिक तरंगें... असहनीय हैं।"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 기록자는… 방해될 뿐이다.",
						"english": "That Recorder is... merely a hindrance.",
						"japanese": "あの記録者は…ただの邪魔だ。",
						"chinese": "那个记录者……只是个障碍。",
						"french": "Ce Chroniqueur est... juste une nuisance.",
						"spanish": "Ese Registrador es... solo una molestia.",
						"vietnamese": "Kẻ ghi chép đó... chỉ là vật cản đường.",
						"thai": "ผู้บันทึกนั่น... ก็แค่ตัวเกะกะเท่านั้น",
						"hindi": "वह अभिलेखक... केवल एक बाधा है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어둠 속에서… 영원히… 길을 헤매어라…",
						"english": "Wander lost... forever... in the darkness...",
						"japanese": "闇の中を…永遠に…彷徨い続けろ…",
						"chinese": "在黑暗中…永远…迷失方向吧…",
						"french": "Erre perdu... à jamais... dans les ténèbres...",
						"spanish": "Vaga perdido... por siempre... en la oscuridad...",
						"vietnamese": "Hãy mãi lạc lối... trong bóng tối... vĩnh viễn...",
						"thai": "จงหลงทาง...ในความมืด...ชั่วนิรันดร์...",
						"hindi": "अंधेरे में... हमेशा के लिए... भटकते रहो..."
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직… 포기할 수 없어!",
						"english": "...Damn it. I still... can't give up!",
						"japanese": "…くそっ。まだ…諦められない！",
						"chinese": "…该死。我…还不能放弃！",
						"french": "...Maudit. Je ne peux pas... abandonner !",
						"spanish": "...Maldita sea. ¡Todavía... no puedo rendirme!",
						"vietnamese": "...Chết tiệt. Vẫn... chưa thể từ bỏ!",
						"thai": "...บ้าจริง ฉันยัง...ยอมแพ้ไม่ได้!",
						"hindi": "...धिक्कार है। मैं अभी भी... हार नहीं मान सकता!"
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "다시… 도전해야 합니다. 이대로 끝낼 수는 없어요.",
						"english": "I must... challenge again. I can't let it end like this.",
						"japanese": "もう一度…挑戦しなければなりません。このままでは終われません。",
						"chinese": "必须…再次挑战。不能就这样结束。",
						"french": "Je dois... retenter. Je ne peux pas laisser les choses se terminer ainsi.",
						"spanish": "Debo... intentarlo de nuevo. No puedo dejar que termine así.",
						"vietnamese": "Phải... thử thách lại. Không thể kết thúc như thế này được.",
						"thai": "ต้อง...ลองอีกครั้ง จะจบแบบนี้ไม่ได้",
						"hindi": "मुझे... फिर से चुनौती देनी होगी। मैं इसे ऐसे ही खत्म नहीं कर सकता।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"빛은 더 깊은 곳으로 이끌었다.",
			"그러나 길은 점점 더 왜곡되고, 진실은 차가운 얼음 속에 갇혀 있었다.",
			"폐쇄된 연구 시설. 잊힌 기록자와 마주하다.",
			"그녀는 빛이 드리운 환상이, 시작에 불과함을 경고했다."
		],
		"english": [
			"The light led deeper.",
			"Yet the path grew more twisted, truth trapped in cold ice.",
			"A closed research facility. Facing the forgotten chronicler.",
			"She warned that the light's illusion was merely the beginning."
		],
		"japanese": [
			"光はより深き場所へと導いた。",
			"しかし道は歪み、真実は冷たい氷の中に囚われていた。",
			"閉鎖された研究施設。忘れられた記録者と対峙する。",
			"彼女は、光がもたらす幻想が始まりに過ぎないと警告した。"
		],
		"chinese": [
			"光引领着我们走向更深处。",
			"然而道路愈发扭曲，真相被困于寒冰之中。",
			"废弃的研究设施。与被遗忘的记录者相遇。",
			"她警告说，光影交织的幻象，不过是序章。"
		],
		"french": [
			"La lumière menait plus profondément.",
			"Mais le chemin se tordait davantage, la vérité piégée dans la glace froide.",
			"Un centre de recherche fermé. Confrontation avec la chroniqueuse oubliée.",
			"Elle avertit que l'illusion de lumière n'était qu'un début."
		],
		"spanish": [
			"La luz nos guió a lo más profundo.",
			"Pero el camino se retorcía más, la verdad atrapada en el hielo frío.",
			"Una instalación de investigación clausurada. Enfrentando al cronista olvidado.",
			"Ella advirtió que la ilusión de la luz era solo el principio."
		],
		"vietnamese": [
			"Ánh sáng dẫn lối vào sâu hơn.",
			"Nhưng con đường ngày càng méo mó, sự thật bị giam cầm trong băng giá lạnh.",
			"Một cơ sở nghiên cứu bị đóng cửa. Đối mặt với người ghi chép bị lãng quên.",
			"Cô ấy cảnh báo rằng ảo ảnh của ánh sáng chỉ là khởi đầu."
		],
		"thai": [
			"แสงนำทางสู่ส่วนลึกยิ่งกว่า.",
			"แต่เส้นทางกลับบิดเบี้ยวมากขึ้น ความจริงถูกขังในน้ำแข็งอันเย็นยะเยือก.",
			"ศูนย์วิจัยที่ถูกปิด. เผชิญหน้ากับผู้บันทึกที่ถูกลืม.",
			"เธอเตือนว่าภาพลวงตาจากแสงเป็นเพียงจุดเริ่มต้นเท่านั้น."
		],
		"hindi": [
			"प्रकाश और गहराई में ले गया।",
			"किंतु राह और विकृत होती गई, सत्य ठंडी बर्फ में कैद था।",
			"एक बंद शोध सुविधा। भूले हुए वृत्तांतकार से सामना।",
			"उसने चेतावनी दी कि प्रकाश का भ्रम तो बस शुरुआत थी।"
		]
	}
} as const;
