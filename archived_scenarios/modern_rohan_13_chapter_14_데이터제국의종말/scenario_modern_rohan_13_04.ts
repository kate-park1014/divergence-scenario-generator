export const scenario_modern_rohan_13_04 = {
	"scenario_id": "modern_rohan_13_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "린과 타오가 준 정보… 이게 로한의 본거지 좌표다.",
						"english": "The intel from Lin and Tao... these are Rohan's base coordinates.",
						"japanese": "リーンとタオがくれた情報…これがロハンの本拠地の座標だ。",
						"chinese": "琳与陶提供的情报…这就是罗汉本营的坐标。",
						"french": "L'info de Lin et Tao… ce sont les coordonnées du QG de Rohan.",
						"spanish": "La información de Lin y Tao… estas son las coordenadas de la base de Rohan.",
						"vietnamese": "Thông tin Lin và Tao đưa… đây là tọa độ căn cứ của Rohan.",
						"thai": "ข้อมูลที่ลินกับเทาให้มา…นี่คือพิกัดฐานทัพของโรฮัน",
						"hindi": "लिन और ताओ की जानकारी... ये रोहन के मुख्यालय के निर्देशांक हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여길 뚫어야 하는군요.",
						"english": "We have to break through here.",
						"japanese": "ここを突破するんですね。",
						"chinese": "我们得突破这里。",
						"french": "Nous devons percer ici.",
						"spanish": "Tenemos que abrirnos paso aquí.",
						"vietnamese": "Chúng ta phải đột nhập vào đây.",
						"thai": "เราต้องฝ่าไปให้ได้สินะครับ/คะ",
						"hindi": "हमें यहाँ से गुजरना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "그래. 사력을 다해야 할 거다. 로한의 방벽은 상상 이상이니까.",
						"english": "Yes. You'll have to give it your all. Rohan's defenses are beyond what you can imagine.",
						"japanese": "ああ。全力を尽くすんだ。ロハンの防壁は想像以上だからな。",
						"chinese": "是的。你必须全力以赴。罗汉的防御超乎想象。",
						"french": "Oui. Tu devras tout donner. Les défenses de Rohan dépassent l'imagination.",
						"spanish": "Sí. Tendrás que darlo todo. Las defensas de Rohan están más allá de la imaginación.",
						"vietnamese": "Phải. Ngươi phải dốc hết sức. Tường chắn của Rohan vượt xa tưởng tượng.",
						"thai": "ใช่ แกต้องทุ่มสุดตัว กำแพงป้องกันของโรฮันมันเหนือกว่าที่คิดไว้เยอะ",
						"hindi": "हाँ। तुम्हें अपनी पूरी ताकत लगानी होगी। रोहन की सुरक्षा कल्पना से परे है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 디지털 방벽… 예상보다 더 교활해.",
						"english": "This digital barrier... it's more cunning than expected.",
						"japanese": "このデジタル防壁…予想以上に狡猾だ。",
						"chinese": "这个数字屏障…比预想的更狡猾。",
						"french": "Cette barrière numérique… est plus astucieuse que prévu.",
						"spanish": "Esta barrera digital… es más astuta de lo esperado.",
						"vietnamese": "Bức tường kỹ thuật số này… quỷ quyệt hơn ta nghĩ.",
						"thai": "กำแพงดิจิทัลนี่…เจ้าเล่ห์กว่าที่คิดไว้",
						"hindi": "यह डिजिटल दीवार... उम्मीद से ज़्यादा चालाक है।"
					},
					"speaker": "kai"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "계속 새로운 방어 시스템이 튀어나와요.",
						"english": "New defense systems keep popping up.",
						"japanese": "ずっと新しい防御システムが出てきます。",
						"chinese": "不断有新的防御系统冒出来。",
						"french": "De nouveaux systèmes de défense ne cessent d'apparaître.",
						"spanish": "No paran de aparecer nuevos sistemas de defensa.",
						"vietnamese": "Các hệ thống phòng thủ mới cứ liên tục xuất hiện.",
						"thai": "ระบบป้องกันใหม่ๆ โผล่มาไม่หยุดเลย",
						"hindi": "नए रक्षा तंत्र लगातार सामने आ रहे हैं।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "로한은 모든 것을 조작해왔어. 이 방벽도 그의 또 다른 거짓말이야.",
						"english": "Rohan has manipulated everything. This barrier is just another one of his lies.",
						"japanese": "ロハンはすべてを操ってきた。この防壁も彼のもう一つの嘘だ。",
						"chinese": "罗汉一直在操纵一切。这个屏障也是他另一个谎言。",
						"french": "Rohan a tout manipulé. Cette barrière n'est qu'un autre de ses mensonges.",
						"spanish": "Rohan ha manipulado todo. Esta barrera es solo otra de sus mentiras.",
						"vietnamese": "Rohan đã thao túng mọi thứ. Bức tường này cũng là một lời nói dối khác của hắn.",
						"thai": "โรฮันบงการทุกสิ่ง กำแพงนี่ก็เป็นอีกหนึ่งคำโกหกของเขา",
						"hindi": "रोहन ने सब कुछ हेरफेर किया है। यह दीवार भी उसका एक और झूठ है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction",
					"action": "enter",
					"spot": [
						6,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "여기서부터 더 깊숙이 침투해야 해.",
						"english": "We need to penetrate deeper from here.",
						"japanese": "ここからさらに深く侵入しなければならない。",
						"chinese": "从这里必须更深入地渗透。",
						"french": "Nous devons nous infiltrer plus profondément d'ici.",
						"spanish": "Debemos infiltrarnos más profundamente desde aquí.",
						"vietnamese": "Chúng ta phải xâm nhập sâu hơn từ đây.",
						"thai": "เราต้องแทรกซึมลึกเข้าไปจากที่นี่",
						"hindi": "हमें यहाँ से और गहराई तक घुसपैठ करनी होगी।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저건…!",
						"english": "That's...!",
						"japanese": "あれは…！",
						"chinese": "那是…！",
						"french": "C'est...!",
						"spanish": "¡Eso es...!",
						"vietnamese": "Đó là...!",
						"thai": "นั่นมัน...!",
						"hindi": "वह है...!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 시스템이 탐험대의 앞을 가로막았다.",
						"english": "An unknown system blocked the exploration team's path.",
						"japanese": "正体不明のシステムが探検隊の行く手を阻んだ。",
						"chinese": "一个不明系统挡住了探险队的去路。",
						"french": "Un système inconnu bloquait le chemin de l'équipe d'exploration.",
						"spanish": "Un sistema desconocido bloqueó el paso del equipo de exploración.",
						"vietnamese": "Một hệ thống không rõ danh tính đã chặn đường đội thám hiểm.",
						"thai": "ระบบที่ไม่รู้จักได้ขวางทางทีมสำรวจ",
						"hindi": "एक अज्ञात प्रणाली ने अन्वेषण दल का रास्ता रोक दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 로한님의 영역을 침범하려 하다니.",
						"english": "How dare you trespass Rohan's domain.",
						"japanese": "よくもロハン様の領域を侵そうとするとは。",
						"chinese": "竟敢侵犯罗汉大人的领域。",
						"french": "Comment osez-vous empiéter sur le domaine de Rohan.",
						"spanish": "¿Cómo osas invadir el dominio de Rohan?",
						"vietnamese": "Dám xâm phạm lãnh địa của Rohan.",
						"thai": "กล้าดียังไงมาบุกรุกอาณาเขตของท่านโรฮาน",
						"hindi": "रोहन के क्षेत्र में अतिक्रमण करने की तुम्हारी हिम्मत कैसे हुई।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "로한의 하수인인가!",
						"english": "Rohan's minion!",
						"japanese": "ロハンの下僕か！",
						"chinese": "罗汉的爪牙吗！",
						"french": "Le laquais de Rohan !",
						"spanish": "¡Esbirro de Rohan!",
						"vietnamese": "Kẻ hầu của Rohan à!",
						"thai": "สมุนของโรฮานรึ!",
						"hindi": "रोहन का गुर्गा!"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "피할 수 없다. 돌파해야 해!",
						"english": "No escape. We must break through!",
						"japanese": "避けられない。突破しなければ！",
						"chinese": "无法避免。必须突破！",
						"french": "Impossible d'esquiver. Nous devons percer !",
						"spanish": "No hay escape. ¡Debemos abrirnos paso!",
						"vietnamese": "Không thể tránh được. Phải đột phá thôi!",
						"thai": "เลี่ยงไม่ได้ ต้องฝ่าไปให้ได้!",
						"hindi": "बचा नहीं जा सकता। हमें इसे तोड़ना होगा!"
					},
					"speaker": "kai"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "꽤 깊숙이 들어왔어. 이제 물러설 곳은 없어.",
						"english": "We've come quite deep. There's no turning back now.",
						"japanese": "かなり深く入ってきた。もう後戻りはできない。",
						"chinese": "我们已经深入了。现在没有退路了。",
						"french": "Nous sommes arrivés assez loin. Impossible de reculer maintenant.",
						"spanish": "Hemos llegado bastante profundo. Ya no hay vuelta atrás.",
						"vietnamese": "Chúng ta đã đi khá sâu. Giờ không còn đường lui nữa.",
						"thai": "เราเข้ามาลึกพอสมควรแล้ว ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "हम काफी गहरे आ गए हैं। अब पीछे हटने का कोई रास्ता नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "로한이 여기까지 알고 있을까요?",
						"english": "Does Rohan know we've come this far?",
						"japanese": "ロハンがここまで知っているだろうか？",
						"chinese": "罗汉会知道我们走到这里了吗？",
						"french": "Rohan sait-il que nous sommes arrivés si loin ?",
						"spanish": "¿Sabrá Rohan que hemos llegado hasta aquí?",
						"vietnamese": "Liệu Rohan có biết chúng ta đã đến đây không?",
						"thai": "โรฮานจะรู้ไหมว่าเรามาถึงขนาดนี้แล้ว?",
						"hindi": "क्या रोहन को पता होगा कि हम इतनी दूर आ गए हैं?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아니. 그는 우리의 분노를 과소평가했어. 그의 오만함이 함정이 될 거다.",
						"english": "No. He underestimated our wrath. His arrogance will be his downfall.",
						"japanese": "いや。彼は我々の怒りを過小評価した。彼の傲慢さが罠となるだろう。",
						"chinese": "不。他低估了我们的愤怒。他的傲慢将成为他的陷阱。",
						"french": "Non. Il a sous-estimé notre colère. Son arrogance sera son piège.",
						"spanish": "No. Subestimó nuestra ira. Su arrogancia será su trampa.",
						"vietnamese": "Không. Hắn đã đánh giá thấp sự phẫn nộ của chúng ta. Sự kiêu ngạo của hắn sẽ là cạm bẫy.",
						"thai": "ไม่ เขาประมาทความโกรธของเรา ความหยิ่งผยองของเขาจะเป็นกับดัก",
						"hindi": "नहीं। उसने हमारे क्रोध को कम करके आंका। उसका अहंकार ही उसका जाल बनेगा।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "로한의 심장부로 향하는 마지막 방어선. 거대한 그림자가 그들을 기다렸다.",
						"english": "The last line of defense leading to Rohan's heart. A giant shadow awaited them.",
						"japanese": "ロハンの心臓部へ向かう最後の防衛線。巨大な影が彼らを待ち受けていた。",
						"chinese": "通往罗汉核心的最后防线。一个巨大的阴影在等待着他们。",
						"french": "La dernière ligne de défense menant au cœur de Rohan. Une ombre gigantesque les attendait.",
						"spanish": "La última línea de defensa hacia el corazón de Rohan. Una sombra gigantesca los esperaba.",
						"vietnamese": "Tuyến phòng thủ cuối cùng dẫn đến trái tim của Rohan. Một bóng đen khổng lồ đang chờ đợi họ.",
						"thai": "แนวป้องกันสุดท้ายที่นำไปสู่ใจกลางของโรฮาน เงาขนาดใหญ่กำลังรอพวกเขาอยู่",
						"hindi": "रोहन के दिल की ओर जाने वाली आखिरी रक्षा पंक्ति। एक विशाल परछाई उनका इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상은 못 간다. {random_boss}의 힘을 보여주겠다.",
						"english": "No further! I'll show you the power of {random_boss}.",
						"japanese": "これ以上は行かせない。{random_boss}の力を見せてやろう。",
						"chinese": "到此为止。让你见识{random_boss}的力量。",
						"french": "Pas un pas de plus ! Je vais te montrer la puissance de {random_boss}.",
						"spanish": "¡No irás más lejos! Te mostraré el poder de {random_boss}.",
						"vietnamese": "Không tiến thêm được nữa đâu! Ta sẽ cho ngươi thấy sức mạnh của {random_boss}.",
						"thai": "ไปต่อไม่ได้แล้ว! ข้าจะแสดงพลังของ {random_boss} ให้เจ้าดู!",
						"hindi": "अब और नहीं! मैं तुम्हें {random_boss} की शक्ति दिखाऊंगा।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "드디어 마지막인가!",
						"english": "Is this finally the end?!",
						"japanese": "ついに最後か！",
						"chinese": "终于到最后了吗！",
						"french": "C'est enfin la fin !",
						"spanish": "¿Es este el final?",
						"vietnamese": "Cuối cùng cũng tới màn cuối rồi sao!",
						"thai": "นี่คือจุดจบแล้วสินะ!",
						"hindi": "क्या यह आखिरकार अंत है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "이 녀석을 쓰러뜨려야 해. 로한에게 한 발 더 다가가기 위해!",
						"english": "I must defeat this foe to get one step closer to Rohan!",
						"japanese": "こいつを倒さねば。ロハンに一歩近づくために！",
						"chinese": "必须打倒这家伙。为了更接近罗翰一步！",
						"french": "Je dois vaincre cet ennemi. Pour me rapprocher d'un pas de Rohan !",
						"spanish": "¡Debo derrotar a este para acercarme un paso más a Rohan!",
						"vietnamese": "Phải hạ gục tên này. Để tiến thêm một bước đến Rohan!",
						"thai": "ต้องจัดการเจ้านี่ เพื่อเข้าใกล้โรฮานอีกหนึ่งก้าว!",
						"hindi": "मुझे इसे हराना होगा। रोहन के एक कदम और करीब पहुंचने के लिए!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "압도적인 힘 앞에 탐험대는 무릎 꿇었다.",
						"english": "Before the overwhelming power, the expedition team knelt.",
						"japanese": "圧倒的な力の前に、探検隊はひざまずいた。",
						"chinese": "在压倒性的力量面前，探险队跪下了。",
						"french": "Devant la puissance écrasante, l'équipe d'expédition s'agenouilla.",
						"spanish": "Ante el poder abrumador, el equipo de expedición se arrodilló.",
						"vietnamese": "Trước sức mạnh áp đảo, đội thám hiểm đã quỳ gối.",
						"thai": "ต่อหน้าพลังอันท่วมท้น, ทีมสำรวจได้คุกเข่าลง.",
						"hindi": "अत्यधिक शक्ति के सामने, अभियान दल घुटनों के बल गिर पड़ा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항이군. 로한님의 위엄을 깨달아라.",
						"english": "Pathetic resistance. Realize Lord Rohan's majesty.",
						"japanese": "取るに足らない抵抗だな。ロハン様の威厳を思い知れ。",
						"chinese": "卑微的抵抗。体会罗翰大人的威严吧。",
						"french": "Résistance pitoyable. Réalisez la majesté de Seigneur Rohan.",
						"spanish": "Resistencia patética. Reconoce la majestuosidad del Señor Rohan.",
						"vietnamese": "Sự kháng cự yếu ớt. Hãy nhận ra uy nghiêm của Chúa tể Rohan.",
						"thai": "การต่อต้านที่ไร้ค่า. จงตระหนักถึงความยิ่งใหญ่ของท่านโรฮาน.",
						"hindi": "तुच्छ प्रतिरोध। भगवान रोहन की महिमा को समझो।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어. 로한, 반드시 잡고 말 거야.",
						"english": "...It's not over yet. Rohan, I will definitely catch you.",
						"japanese": "…まだ終わってない。ロハン、必ず捕まえてみせる。",
						"chinese": "……还没结束。罗翰，我一定会抓住你。",
						"french": "...Ce n'est pas encore fini. Rohan, je t'aurai, c'est certain.",
						"spanish": "...Aún no ha terminado. Rohan, te atraparé, cueste lo que cueste.",
						"vietnamese": "...Chưa kết thúc đâu. Rohan, ta nhất định sẽ bắt được ngươi.",
						"thai": "...ยังไม่จบ. โรฮาน, ข้าจะจับเจ้าให้ได้แน่นอน.",
						"hindi": "...अभी खत्म नहीं हुआ है। रोहन, मैं तुम्हें निश्चित रूप से पकड़ूंगा।"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "포기하지 마. 우린 더 강해져야 해.",
						"english": "Don't give up. We must grow stronger.",
						"japanese": "諦めるな。もっと強くなるんだ。",
						"chinese": "别放弃。我们必须变得更强。",
						"french": "N'abandonne pas. Nous devons devenir plus forts.",
						"spanish": "No te rindas. Debemos hacernos más fuertes.",
						"vietnamese": "Đừng bỏ cuộc. Chúng ta phải mạnh mẽ hơn nữa.",
						"thai": "อย่ายอมแพ้ เราต้องแข็งแกร่งขึ้น.",
						"hindi": "हार मत मानो। हमें और मजबूत बनना होगा।"
					},
					"speaker": "kai"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…크큭. 이것은 시작에 불과하다. 로한님의 진짜 계획은… 너희가 상상도 못할…!",
						"english": "...Heh. This is merely the beginning. Lord Rohan's true plan... is beyond your wildest imagination...!",
						"japanese": "…ククク。これは始まりに過ぎない。ロハン様の真の計画は…お前たちが想像もできない…！",
						"chinese": "……呵呵。这仅仅是个开始。罗翰大人的真正计划……是你们无法想象的……！",
						"french": "...Hé hé. Ce n'est que le début. Le véritable plan de Seigneur Rohan... est au-delà de votre imagination la plus folle... !",
						"spanish": "...Je, je. Esto es solo el principio. El verdadero plan del Señor Rohan... ¡es inimaginable para vosotros...!",
						"vietnamese": "...Khà khà. Đây chỉ mới là khởi đầu thôi. Kế hoạch thật sự của Chúa tể Rohan... là điều các ngươi không thể tưởng tượng nổi...!",
						"thai": "...คิกคิก. นี่เป็นเพียงแค่จุดเริ่มต้นเท่านั้น. แผนการที่แท้จริงของท่านโรฮาน... อยู่เหนือจินตนาการของพวกเจ้า...!",
						"hindi": "...हह. यह तो बस शुरुआत है। भगवान रोहन की असली योजना... तुम्हारी wildest कल्पना से परे है...!"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!?",
						"english": "What are you talking about!?",
						"japanese": "何を言ってるんだ！",
						"chinese": "你说什么！？",
						"french": "Que dis-tu !?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói cái gì vậy!?",
						"thai": "เจ้าพูดอะไร!?",
						"hindi": "क्या कह रहे हो!?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						5,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 이상 아무것도 말 못 할 거다. 이제 로한의 목을 죄러 갈 시간이다.",
						"english": "You won't speak another word. Now, it's time to tighten the noose around Rohan's neck.",
						"japanese": "もう何も言わせない。ロハンの首を絞めに行く時間だ。",
						"chinese": "你不会再说什么了。是时候去掐住罗翰的脖子了。",
						"french": "Tu ne diras plus un mot. Il est temps d'aller serrer le cou de Rohan.",
						"spanish": "No dirás nada más. Ahora es el momento de ir a apretar el cuello de Rohan.",
						"vietnamese": "Ngươi sẽ không nói thêm được gì nữa đâu. Giờ là lúc đi siết cổ Rohan.",
						"thai": "เจ้าจะพูดอะไรไม่ได้อีกแล้ว. ได้เวลาไปรัดคอโรฮานแล้ว.",
						"hindi": "तुम अब और कुछ नहीं कह पाओगे। अब रोहन का गला कसने का समय आ गया है।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "디지털 방벽의 핵심이 무너졌다. 로한의 심장부가 코앞이었다. 그러나 그 앞에는, 상상 이상의 진실이 기다리고 있었다.",
						"english": "The core of the digital barrier collapsed. Rohan's heart was just ahead. But beyond it, a truth beyond imagination awaited.",
						"japanese": "デジタル防壁の核が崩壊した。ロハンの心臓部は目の前だった。しかしその先には、想像以上の真実が待ち受けていた。",
						"chinese": "数字壁垒的核心崩塌了。罗翰的心脏地带近在咫尺。然而在那前方，等待着的是超乎想象的真相。",
						"french": "Le cœur de la barrière numérique s'effondra. Le quartier général de Rohan était à portée de main. Mais au-delà, une vérité inimaginable attendait.",
						"spanish": "El núcleo de la barrera digital colapsó. El corazón de Rohan estaba justo delante. Pero más allá, una verdad inimaginable aguardaba.",
						"vietnamese": "Lõi của rào cản kỹ thuật số đã sụp đổ. Trái tim của Rohan đã ở ngay trước mắt. Nhưng phía trước đó, một sự thật vượt ngoài sức tưởng tượng đang chờ đợi.",
						"thai": "แกนกลางของกำแพงดิจิทัลพังทลายลง. ใจกลางของโรฮานอยู่ตรงหน้าแล้ว. แต่ข้างหน้า, ความจริงที่เหนือกว่าจินตนาการกำลังรออยู่.",
						"hindi": "डिजिटल अवरोध का मुख्य भाग ढह गया। रोहन का दिल बस सामने था। लेकिन उसके आगे, कल्पना से परे एक सच्चाई इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"린과 타오의 정보, 조각난 진실들이 마침내 하나로 모였다.",
			"로한, 그의 거대한 디지털 제국의 심장부가 드러났다.",
			"이제 반격할 시간. 하지만 그의 방벽은 견고했다.",
			"이 절박한 침투는 — 모든 것을 걸어야 할 마지막 기회였다."
		],
		"english": [
			"Lin and Tao's intel, fragmented truths, finally converged.",
			"Rohan, the heart of his vast digital empire, was revealed.",
			"Now, it's time to strike back. But his defenses were formidable.",
			"This desperate infiltration — it was the last chance, risking everything."
		],
		"japanese": [
			"リーンとタオの情報、断片的な真実が、ついに一つに集まった。",
			"ロハン、彼の広大なデジタル帝国の心臓部が明らかになった。",
			"いざ反撃の時。しかし、彼の防壁は堅固だった。",
			"この絶望的な潜入は—すべてを賭ける最後の機会だった。"
		],
		"chinese": [
			"琳与陶的情报，零碎的真相，终于汇聚。",
			"罗汉，他庞大数字帝国的核心，被揭露了。",
			"现在是反击的时候了。但他的防御却很坚固。",
			"这次绝望的渗透——是赌上一切的最后机会。"
		],
		"french": [
			"Les informations de Lin et Tao, des vérités fragmentées, ont finalement convergé.",
			"Rohan, le cœur de son vaste empire numérique, fut révélé.",
			"Il est temps de riposter. Mais ses défenses étaient redoutables.",
			"Cette infiltration désespérée — c'était la dernière chance, quitte à tout risquer."
		],
		"spanish": [
			"La información de Lin y Tao, verdades fragmentadas, finalmente convergió.",
			"Rohan, el corazón de su vasto imperio digital, fue revelado.",
			"Es hora de contraatacar. Pero sus defensas eran formidables.",
			"Esta desesperada infiltración — era la última oportunidad, arriesgándolo todo."
		],
		"vietnamese": [
			"Thông tin từ Lin và Tao, những mảnh sự thật rời rạc, cuối cùng đã hội tụ.",
			"Rohan, trái tim của đế chế kỹ thuật số rộng lớn của hắn, đã lộ diện.",
			"Đã đến lúc phản công. Nhưng phòng tuyến của hắn vẫn vững chắc.",
			"Cuộc xâm nhập tuyệt vọng này — là cơ hội cuối cùng, phải đặt cược tất cả."
		],
		"thai": [
			"ข้อมูลของลินและเทา ชิ้นส่วนความจริงที่กระจัดกระจาย ในที่สุดก็รวมกันเป็นหนึ่ง",
			"โรฮัน จุดศูนย์กลางของอาณาจักรดิจิทัลอันกว้างใหญ่ของเขา ได้ถูกเปิดเผยแล้ว",
			"ถึงเวลาตอบโต้กลับ แต่กำแพงป้องกันของเขาก็แข็งแกร่ง",
			"การแทรกซึมที่สิ้นหวังครั้งนี้ — คือโอกาสสุดท้าย ต้องเดิมพันทุกสิ่ง"
		],
		"hindi": [
			"लिन और ताओ की जानकारी, खंडित सत्य, अंततः एक साथ आ गए।",
			"रोहन, उसके विशाल डिजिटल साम्राज्य का दिल, सामने आ गया।",
			"अब पलटवार का समय। लेकिन उसकी दीवारें मज़बूत थीं।",
			"यह हताश घुसपैठ — सब कुछ दांव पर लगाने का आखिरी मौका था।"
		]
	}
} as const;
