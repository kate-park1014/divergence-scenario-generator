export const scenario_snowy_cairn_5_04 = {
	"scenario_id": "snowy_cairn_5_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
						"korean": "눈보라는 더욱 거세져 시야를 가렸다.",
						"english": "The blizzard intensified, obscuring their vision.",
						"japanese": "吹雪はさらに激しくなり、視界を遮った。",
						"chinese": "暴风雪愈发猛烈，遮蔽了视线。",
						"french": "La tempête de neige redoubla, masquant la vue.",
						"spanish": "La ventisca se intensificó, ocultando la visión.",
						"vietnamese": "Bão tuyết càng dữ dội, che khuất tầm nhìn.",
						"thai": "พายุหิมะทวีความรุนแรงขึ้น บดบังทัศนวิสัย",
						"hindi": "बर्फीला तूफान और तेज़ हो गया, जिससे नज़ारा धुंधला हो गया।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정신 차려. 우린 해낼 수 있어.",
						"english": "Snap out of it. We can do this.",
						"japanese": "気をしっかり持て。俺たちならできる。",
						"chinese": "振作起来。我们能做到。",
						"french": "Reprends-toi. On peut y arriver.",
						"spanish": "Reacciona. Podemos lograrlo.",
						"vietnamese": "Tỉnh táo lại đi. Chúng ta làm được mà.",
						"thai": "ตั้งสติไว้ เราทำได้",
						"hindi": "होश में आओ। हम यह कर सकते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "리더님, 앞이 보이질 않습니다. 무리입니다.",
						"english": "Leader, I can't see anything. It's impossible.",
						"japanese": "リーダー、前が見えません。無理です。",
						"chinese": "领队，我看不清前面。这不可能。",
						"french": "Chef, je ne vois rien. C'est impossible.",
						"spanish": "Líder, no veo nada. Es imposible.",
						"vietnamese": "Thủ lĩnh, tôi không thấy đường. Không thể nào.",
						"thai": "หัวหน้าครับ มองไม่เห็นอะไรเลยครับ เป็นไปไม่ได้ครับ",
						"hindi": "नेता, मुझे कुछ दिखाई नहीं दे रहा। यह असंभव है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "멈출 순 없어. 돌무덤을 찾아야 한다.",
						"english": "We can't stop. We must find the cairn.",
						"japanese": "止まれない。ケルンを見つけなければ。",
						"chinese": "我们不能停。必须找到石冢。",
						"french": "On ne peut pas s'arrêter. Il faut trouver le cairn.",
						"spanish": "No podemos detenernos. Debemos encontrar el mojón.",
						"vietnamese": "Không thể dừng lại. Chúng ta phải tìm thấy đống đá.",
						"thai": "หยุดไม่ได้ เราต้องหากองหิน",
						"hindi": "हम रुक नहीं सकते। हमें पत्थरों का ढेर ढूंढना होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1",
					"content": {
						"korean": "돌무덤이 우리를 살려줄까요?",
						"english": "Will the cairn save us?",
						"japanese": "ケルンが私たちを救ってくれるのでしょうか？",
						"chinese": "石冢会救我们吗？",
						"french": "Le cairn nous sauvera-t-il ?",
						"spanish": "¿Nos salvará el mojón?",
						"vietnamese": "Đống đá có cứu được chúng ta không?",
						"thai": "กองหินจะช่วยเราได้ไหม",
						"hindi": "क्या पत्थरों का ढेर हमें बचाएगा?"
					}
				},
				{
					"content": {
						"korean": "살아남으려면, 나를 따르라.",
						"english": "To survive, follow me.",
						"japanese": "生き残るには、私についてこい。",
						"chinese": "若想活命，就跟我来。",
						"french": "Pour survivre, suivez-moi.",
						"spanish": "Para sobrevivir, sígueme.",
						"vietnamese": "Để sống sót, hãy đi theo tôi.",
						"thai": "ถ้าอยากรอด จงตามข้ามา",
						"hindi": "जीवित रहने के लिए, मेरे पीछे आओ।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 절벽 아래, 팽팽한 침묵이 흘렀다.",
						"english": "Under the frozen cliff, a tense silence hung.",
						"japanese": "凍てついた崖の下、張り詰めた沈黙が流れた。",
						"chinese": "冰冷的悬崖下，弥漫着紧张的沉默。",
						"french": "Sous la falaise gelée, un silence tendu régnait.",
						"spanish": "Bajo el acantilado helado, un silencio tenso se cernía.",
						"vietnamese": "Dưới vách đá băng giá, một sự im lặng căng thẳng bao trùm.",
						"thai": "ใต้หน้าผาที่เยือกแข็ง ความเงียบอันตึงเครียดปกคลุมอยู่",
						"hindi": "जमी हुई चट्टान के नीचे, एक तनावपूर्ण सन्नाटा पसरा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "식량은 더 줄었지만, 길이 보인다.",
						"english": "Food is scarcer, but I see a path.",
						"japanese": "食糧はさらに減ったが、道が見える。",
						"chinese": "食物更少了，但看到了出路。",
						"french": "La nourriture est plus rare, mais je vois une issue.",
						"spanish": "La comida escasea más, pero veo un camino.",
						"vietnamese": "Thức ăn đã giảm đi nhiều, nhưng một con đường đã hiện ra.",
						"thai": "เสบียงลดลงอีก แต่เห็นทางแล้ว",
						"hindi": "भोजन और कम हो गया है, लेकिन मुझे रास्ता दिख रहा है।"
					}
				},
				{
					"content": {
						"korean": "…정말 리더님의 말대로 될까요?",
						"english": "...Will it really turn out as the leader says?",
						"japanese": "...本当にリーダーの言う通りになるのでしょうか？",
						"chinese": "……真的会像领队说的那样吗？",
						"french": "...Est-ce que ça se passera vraiment comme le chef l'a dit ?",
						"spanish": "¿Realmente saldrá como dice el líder?",
						"vietnamese": "...Liệu có thật sự theo lời của đội trưởng không?",
						"thai": "มันจะเป็นไปตามที่หัวหน้าบอกจริงๆ หรือ?",
						"hindi": "क्या यह सचमुच नेता के कहे अनुसार होगा?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"content": {
						"korean": "이대로 가다간 다 죽습니다!",
						"english": "If we keep going like this, we'll all die!",
						"japanese": "このままでは、皆死んでしまう！",
						"chinese": "再这样下去，我们都会死的！",
						"french": "Si on continue comme ça, on va tous mourir !",
						"spanish": "¡Si seguimos así, moriremos todos!",
						"vietnamese": "Nếu cứ tiếp tục thế này, tất cả chúng ta sẽ chết!",
						"thai": "ถ้าเป็นแบบนี้ต่อไป ทุกคนจะตายหมด!",
						"hindi": "अगर ऐसे ही चलते रहे, तो हम सब मर जाएंगे!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "죽고 싶지 않으면, 내 지시에 따라.",
						"english": "If you don't want to die, follow my orders.",
						"japanese": "死にたくないなら、私の指示に従え。",
						"chinese": "如果不想死，就听我的命令。",
						"french": "Si tu ne veux pas mourir, suis mes ordres.",
						"spanish": "Si no quieres morir, sigue mis órdenes.",
						"vietnamese": "Nếu không muốn chết, hãy làm theo chỉ thị của tôi.",
						"thai": "ถ้าไม่อยากตาย ก็ทำตามคำสั่งฉัน",
						"hindi": "अगर मरना नहीं चाहते, तो मेरे निर्देशों का पालन करो।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이기적이야. 자기 고집만 내세워.",
						"english": "Selfish. Only pushing their own stubbornness.",
						"japanese": "身勝手だ。自分の我儘ばかりだ。",
						"chinese": "太自私了。只顾自己的固执。",
						"french": "Égoïste. N'en fait qu'à sa tête.",
						"spanish": "Egoísta. Solo impone su terquedad.",
						"vietnamese": "Thật ích kỷ. Chỉ khăng khăng theo ý mình.",
						"thai": "เห็นแก่ตัว เอาแต่ใจตัวเอง",
						"hindi": "स्वार्थी। सिर्फ अपनी मनमानी कर रहा है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "한 발짝 내딛을수록, 불길한 예감이 엄습했다.",
						"english": "With each step, an ominous feeling crept in.",
						"japanese": "一歩踏み出すごとに、不吉な予感が襲った。",
						"chinese": "每迈出一步，不祥的预感就袭上心头。",
						"french": "À chaque pas, une sombre prémonition s'insinuait.",
						"spanish": "Con cada paso, una ominosa premonición se apoderaba.",
						"vietnamese": "Càng bước một bước, một dự cảm chẳng lành càng ập đến.",
						"thai": "ยิ่งก้าวไปข้างหน้า ความรู้สึกไม่ดีก็ยิ่งคืบคลานเข้ามา",
						"hindi": "हर कदम के साथ, एक अशुभ एहसास छा जाता था।"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "더 이상 물러설 곳은 없다.",
						"english": "There's no turning back now.",
						"japanese": "もう後には引けない。",
						"chinese": "已无退路。",
						"french": "Il n'y a plus de retour en arrière.",
						"spanish": "No hay más lugar para retroceder.",
						"vietnamese": "Không còn đường lùi nữa.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "대체 언제까지 버텨야 합니까?",
						"english": "How much longer must we endure?",
						"japanese": "いったい、いつまで耐えればいいのですか？",
						"chinese": "到底还要撑多久？",
						"french": "Combien de temps devons-nous encore tenir ?",
						"spanish": "¿Hasta cuándo debemos aguantar?",
						"vietnamese": "Rốt cuộc phải chịu đựng đến bao giờ?",
						"thai": "ต้องทนไปอีกนานแค่ไหนกัน?",
						"hindi": "आखिर कब तक हमें सहना होगा?"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "우리의 목표를 잊었나? 포기할 순 없어.",
						"english": "Have you forgotten our goal? We can't give up.",
						"japanese": "我々の目標を忘れたのか？諦めるわけにはいかない。",
						"chinese": "忘了我们的目标了吗？不能放弃。",
						"french": "As-tu oublié notre objectif ? Nous ne pouvons pas abandonner.",
						"spanish": "¿Has olvidado nuestro objetivo? No podemos rendirnos.",
						"vietnamese": "Đã quên mục tiêu của chúng ta rồi sao? Không thể bỏ cuộc.",
						"thai": "ลืมเป้าหมายของเราไปแล้วรึไง? เราจะยอมแพ้ไม่ได้",
						"hindi": "क्या तुम हमारा लक्ष्य भूल गए? हम हार नहीं मान सकते।"
					}
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이바르님만 믿고 왔는데… 지쳤습니다.",
						"english": "I came trusting only Ivar... but I'm exhausted.",
						"japanese": "イヴァル様だけを信じて来たのに…疲れました。",
						"chinese": "我只相信伊瓦尔大人而来...现在却累了。",
						"french": "Je n'ai fait confiance qu'à Ivar... mais je suis épuisé.",
						"spanish": "Vine confiando solo en Ivar... pero estoy agotado.",
						"vietnamese": "Tôi đã đến đây chỉ tin tưởng Ivar... nhưng giờ tôi kiệt sức rồi.",
						"thai": "ฉันมาที่นี่เพราะเชื่อใจท่านอิวาร์... แต่ตอนนี้ฉันเหนื่อยแล้ว",
						"hindi": "मैं इवार पर ही भरोसा करके आया था... लेकिन अब थक गया हूँ।"
					}
				},
				{
					"content": {
						"korean": "…날 믿지 못하겠다면, 여기서 돌아가라.",
						"english": "...If you can't trust me, then turn back here.",
						"japanese": "…私を信じられないなら、ここから引き返せ。",
						"chinese": "…如果你不相信我，就从这里回去吧。",
						"french": "...Si tu ne peux pas me faire confiance, retourne-toi ici.",
						"spanish": "...Si no puedes confiar en mí, date la vuelta aquí.",
						"vietnamese": "...Nếu ngươi không tin ta, hãy quay lại đây.",
						"thai": "...ถ้าเจ้าไม่เชื่อใจข้า ก็กลับไปซะ",
						"hindi": "...अगर तुम मुझ पर भरोसा नहीं कर सकते, तो यहीं से लौट जाओ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 빙벽이 앞을 막았다. 절망의 그림자가 드리웠다.",
						"english": "A colossal ice wall blocked the path. The shadow of despair loomed.",
						"japanese": "巨大な氷壁が道を塞いだ。絶望の影が差し込んだ。",
						"chinese": "巨大的冰墙挡住了去路。绝望的阴影笼罩而来。",
						"french": "Un mur de glace colossal bloquait le passage. L'ombre du désespoir planait.",
						"spanish": "Un muro de hielo colosal bloqueaba el camino. La sombra de la desesperación se cernía.",
						"vietnamese": "Một bức tường băng khổng lồ chặn lối. Bóng đen tuyệt vọng bao trùm.",
						"thai": "กำแพงน้ำแข็งมหึมากีดขวางทางอยู่ เงาแห่งความสิ้นหวังปกคลุม",
						"hindi": "एक विशाल बर्फ की दीवार ने रास्ता रोक दिया। निराशा की छाया मंडराने लगी।"
					}
				},
				{
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "돌아갈 길은 없어. 위로 올라간다.",
						"english": "There's no turning back. We go up.",
						"japanese": "引き返す道はない。上へ行くぞ。",
						"chinese": "没有回头路了。向上走。",
						"french": "Il n'y a pas de retour en arrière. On monte.",
						"spanish": "No hay vuelta atrás. Subimos.",
						"vietnamese": "Không có đường lùi. Chúng ta lên thôi.",
						"thai": "ไม่มีทางกลับ เราจะขึ้นไป",
						"hindi": "वापस जाने का कोई रास्ता नहीं। ऊपर चलो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "여기서 끝이겠군….",
						"english": "This must be the end...",
						"japanese": "ここで終わりか…。",
						"chinese": "到此为止了吧...",
						"french": "C'est la fin ici...",
						"spanish": "Este debe ser el fin...",
						"vietnamese": "Chắc là kết thúc ở đây rồi...",
						"thai": "คงจะจบลงตรงนี้แล้ว...",
						"hindi": "यहीं अंत होगा..."
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니. 끝은 내가 정한다.",
						"english": "No. I decide the end.",
						"japanese": "いや。終わりは私が決める。",
						"chinese": "不。结局由我决定。",
						"french": "Non. C'est moi qui décide de la fin.",
						"spanish": "No. Yo decido el final.",
						"vietnamese": "Không. Ta sẽ định đoạt kết thúc.",
						"thai": "ไม่ ข้าเป็นคนกำหนดจุดจบ",
						"hindi": "नहीं। अंत मैं तय करूँगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_2",
					"content": {
						"korean": "리더님… 정말 괜찮으십니까?",
						"english": "Leader... Are you truly alright?",
						"japanese": "リーダー様…本当によろしいのですか？",
						"chinese": "队长...您真的没事吗？",
						"french": "Leader... Allez-vous vraiment bien ?",
						"spanish": "Líder... ¿De verdad estás bien?",
						"vietnamese": "Thưa thủ lĩnh... Người thực sự ổn chứ?",
						"thai": "ท่านผู้นำ... ท่านสบายดีจริงๆ หรือ?",
						"hindi": "लीडर... क्या आप सच में ठीक हैं?"
					}
				},
				{
					"content": {
						"korean": "흔들리지 마라. 약속을 기억해라.",
						"english": "Don't waver. Remember our promise.",
						"japanese": "揺らぐな。約束を覚えておけ。",
						"chinese": "不要动摇。记住我们的约定。",
						"french": "Ne vacille pas. Souviens-toi de notre promesse.",
						"spanish": "No vaciles. Recuerda nuestra promesa.",
						"vietnamese": "Đừng dao động. Hãy nhớ lời hứa.",
						"thai": "อย่าหวั่นไหว จำคำสัญญาไว้",
						"hindi": "मत डगमगाओ। वादा याद रखो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 희망을 집어삼켰다.",
						"english": "A colossal shadow swallowed all hope.",
						"japanese": "巨大な影が全ての希望を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了所有希望。",
						"french": "Une ombre colossale a englouti tout espoir.",
						"spanish": "Una sombra colosal devoró toda esperanza.",
						"vietnamese": "Một cái bóng khổng lồ đã nuốt chửng mọi hy vọng.",
						"thai": "เงาขนาดใหญ่กลืนกินความหวังทั้งหมด.",
						"hindi": "एक विशाल परछाई ने सारी उम्मीदें निगल लीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "무릎 꿇어라. 어리석은 자여.",
						"english": "Kneel. You fool.",
						"japanese": "跪け。愚か者め。",
						"chinese": "跪下吧，愚蠢的家伙。",
						"french": "Agenouille-toi. Imbécile.",
						"spanish": "Arrodíllate. Necio.",
						"vietnamese": "Quỳ xuống. Ngươi ngu ngốc.",
						"thai": "คุกเข่าลงซะ. เจ้าคนโง่.",
						"hindi": "घुटने टेको। मूर्ख।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "아직… 끝나지 않았다.",
						"english": "It's not over... yet.",
						"japanese": "まだ…終わっていない。",
						"chinese": "还没……结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "No ha terminado... aún.",
						"vietnamese": "Vẫn chưa... kết thúc.",
						"thai": "ยัง...ไม่จบ.",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "다시… 일어설 거야.",
						"english": "I will rise again.",
						"japanese": "また… 立ち上がる。",
						"chinese": "我… 会再次站起来。",
						"french": "Je me relèverai.",
						"spanish": "Me levantaré de nuevo.",
						"vietnamese": "Tôi sẽ… lại đứng lên.",
						"thai": "ฉันจะ… ลุกขึ้นอีกครั้ง",
						"hindi": "मैं… फिर खड़ा होऊंगा।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "차가운 바람이 고대의 속삭임을 전하는 듯했다.",
						"english": "The cold wind seemed to carry ancient whispers.",
						"japanese": "冷たい風が古代の囁きを伝えるかのようだった。",
						"chinese": "寒风似乎传递着古老的低语。",
						"french": "Le vent froid semblait porter des murmures anciens.",
						"spanish": "El viento frío parecía traer susurros antiguos.",
						"vietnamese": "Gió lạnh như mang theo những lời thì thầm cổ xưa.",
						"thai": "ลมหนาวราวกับนำคำกระซิบโบราณมาให้",
						"hindi": "ठंडी हवा प्राचीन फुसफुसाहटें ले जा रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 인간들… 여기까지 온 의미는 없다.",
						"english": "Foolish humans... There's no meaning in coming this far.",
						"japanese": "愚かな人間どもめ…ここまで来た意味はない。",
						"chinese": "愚蠢的人类...走到这里没有任何意义。",
						"french": "Humains stupides... Il n'y a aucun sens à être venu jusqu'ici.",
						"spanish": "Humanos necios... No tiene sentido haber llegado hasta aquí.",
						"vietnamese": "Loài người ngu ngốc... Đến được đây cũng vô nghĩa thôi.",
						"thai": "มนุษย์ที่โง่เขลา... การมาถึงที่นี่ไร้ความหมาย",
						"hindi": "मूर्ख मनुष्य... यहाँ तक आने का कोई अर्थ नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ivar",
					"content": {
						"korean": "의미는 우리가 만든다.",
						"english": "We create meaning.",
						"japanese": "意味は我々が作る。",
						"chinese": "意义由我们创造。",
						"french": "Nous créons le sens.",
						"spanish": "Nosotros creamos el significado.",
						"vietnamese": "Chúng ta tạo ra ý nghĩa.",
						"thai": "เราสร้างความหมาย",
						"hindi": "हम अर्थ बनाते हैं।"
					}
				},
				{
					"content": {
						"korean": "절망 속에서 길을 잃을 뿐….",
						"english": "Only to get lost in despair...",
						"japanese": "絶望の中で道を失うだけ…。",
						"chinese": "只会在绝望中迷失方向……",
						"french": "Pour nous perdre dans le désespoir...",
						"spanish": "Solo para perdernos en la desesperación...",
						"vietnamese": "Chỉ để lạc lối trong tuyệt vọng...",
						"thai": "เพียงแค่หลงทางในความสิ้นหวัง...",
						"hindi": "केवल निराशा में खो जाना..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우린 길을 찾는다. 네가 막을 수 없어.",
						"english": "We find our way. You can't stop us.",
						"japanese": "我々は道を見つける。お前には止められない。",
						"chinese": "我们会找到出路。你无法阻止。",
						"french": "Nous trouvons notre chemin. Tu ne peux pas nous arrêter.",
						"spanish": "Encontraremos nuestro camino. No puedes detenernos.",
						"vietnamese": "Chúng ta sẽ tìm thấy đường. Ngươi không thể ngăn cản.",
						"thai": "เราจะหาทางของเราเอง. คุณหยุดเราไม่ได้.",
						"hindi": "हम अपना रास्ता खोज लेंगे। तुम हमें रोक नहीं सकते।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크크… 이긴 것 같나?… 진짜 끝은 이제부터다.",
						"english": "Heh heh... Think you've won?... The real end begins now.",
						"japanese": "クク…勝ったつもりか？…本当の終わりはこれからだ。",
						"chinese": "呵呵……以为赢了吗？……真正的结局才刚开始。",
						"french": "Huhu… Tu crois avoir gagné ?… La vraie fin commence maintenant.",
						"spanish": "¿Crees que has ganado?... El verdadero final comienza ahora.",
						"vietnamese": "Khà khà... Ngươi tưởng đã thắng sao?... Kết thúc thật sự chỉ mới bắt đầu.",
						"thai": "ฮ่าฮ่า... คิดว่าชนะแล้วรึ?... จุดจบที่แท้จริงเพิ่งจะเริ่มต้นขึ้น.",
						"hindi": "हाहा... क्या तुम्हें लगता है कि तुम जीत गए हो?... असली अंत अब शुरू होता है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "저게 무슨 소리야?",
						"english": "What was that sound?",
						"japanese": "あれは何の音だ？",
						"chinese": "那是什么声音？",
						"french": "C'était quoi ce bruit ?",
						"spanish": "¿Qué fue ese sonido?",
						"vietnamese": "Tiếng gì vậy?",
						"thai": "นั่นเสียงอะไร?",
						"hindi": "वह क्या आवाज़ थी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar",
					"content": {
						"korean": "끝난 게 아니었어….",
						"english": "It wasn't over...",
						"japanese": "終わってなかった…。",
						"chinese": "还没结束……",
						"french": "Ce n'était pas fini...",
						"spanish": "No había terminado...",
						"vietnamese": "Vẫn chưa kết thúc...",
						"thai": "มันยังไม่จบ...",
						"hindi": "यह खत्म नहीं हुआ था..."
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "승리했지만, 짙은 불안감이 엄습했다. 싸움은 끝나지 않았다.",
						"english": "Though victorious, a deep unease fell upon us. The battle wasn't over.",
						"japanese": "勝利したが、深い不安感が襲った。戦いは終わっていなかった。",
						"chinese": "虽已胜利，却被深深的不安笼罩。战斗并未结束。",
						"french": "Bien que victorieux, une profonde anxiété nous envahit. Le combat n'était pas terminé.",
						"spanish": "Aunque victoriosos, una profunda inquietud nos invadió. La batalla no había terminado.",
						"vietnamese": "Dù chiến thắng, một cảm giác bất an sâu sắc bao trùm. Cuộc chiến vẫn chưa kết thúc.",
						"thai": "แม้จะได้รับชัยชนะ แต่ความไม่สบายใจอย่างลึกซึ้งก็เข้าปกคลุม. การต่อสู้ยังไม่จบลง.",
						"hindi": "हालांकि विजयी हुए, पर एक गहरी बेचैनी छा गई। लड़ाई खत्म नहीं हुई थी।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라는 맹렬하게 휘몰아쳤다.",
			"팀원들의 시선에는 불신이 싹트기 시작했다.",
			"리더, 이바르의 어깨는 책임감으로 더욱 무거워졌다.",
			"알 수 없는 압박감이 모두를 짓눌렀다."
		],
		"english": [
			"The blizzard raged fiercely.",
			"Distrust began to sprout in the team members' eyes.",
			"Ivar, the leader's shoulders, grew heavier with responsibility.",
			"An unknown pressure weighed down on everyone."
		],
		"japanese": [
			"吹雪が猛烈に吹き荒れた。",
			"チームメンバーの視線に不信感が芽生え始めた。",
			"リーダー、イヴァルの肩は責任感でさらに重くなった。",
			"説明のつかないプレッシャーが皆を押し潰した。"
		],
		"chinese": [
			"暴风雪猛烈地呼啸着。",
			"队友们的眼中开始滋生不信任。",
			"领队伊瓦尔的肩膀因责任而更加沉重。",
			"一种莫名的压迫感笼罩着所有人。"
		],
		"french": [
			"La tempête de neige faisait rage.",
			"La méfiance commençait à naître dans les yeux des coéquipiers.",
			"Les épaules du leader, Ivar, s'alourdirent encore de responsabilité.",
			"Une pression inconnue écrasait tout le monde."
		],
		"spanish": [
			"La ventisca arreciaba ferozmente.",
			"La desconfianza comenzó a brotar en los ojos de los miembros del equipo.",
			"Los hombros del líder, Ivar, se hicieron más pesados con la responsabilidad.",
			"Una presión desconocida oprimía a todos."
		],
		"vietnamese": [
			"Bão tuyết hoành hành dữ dội.",
			"Sự hoài nghi bắt đầu nhen nhóm trong mắt các thành viên.",
			"Vai của thủ lĩnh Ivar càng trĩu nặng vì trách nhiệm.",
			"Một áp lực không tên đè nặng lên tất cả."
		],
		"thai": [
			"พายุหิมะโหมกระหน่ำอย่างรุนแรง",
			"ความไม่ไว้วางใจเริ่มก่อตัวขึ้นในสายตาของสมาชิกทีม",
			"ไหล่ของอิวาร์ หัวหน้าทีม หนักอึ้งขึ้นด้วยความรับผิดชอบ",
			"แรงกดดันที่ไม่รู้จักกดทับทุกคน"
		],
		"hindi": [
			"बर्फीला तूफान तेज़ी से चल रहा था।",
			"टीम के सदस्यों की आँखों में अविश्वास पनपने लगा था।",
			"नेता, इवर के कंधे, ज़िम्मेदारी के बोझ से और भारी हो गए।",
			"एक अज्ञात दबाव ने सभी को कुचल दिया।"
		]
	}
} as const;
