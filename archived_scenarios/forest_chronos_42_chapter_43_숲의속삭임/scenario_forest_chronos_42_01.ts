export const scenario_forest_chronos_42_01 = {
	"scenario_id": "forest_chronos_42_01",
	"order": 1,
	"act": "intro",
	"theme": "forest",
	"actors": {
		"bracken": {
			"id": "mon_48cf29be-dbc0-44b1-bbb3-ecda1d14742d",
			"name": {
				"korean": "브라켄",
				"english": "Bracken",
				"japanese": "ブラッケン",
				"chinese": "布莱肯",
				"french": "Bracken",
				"spanish": "Bracken",
				"vietnamese": "Bracken",
				"thai": "แบรกเคน",
				"hindi": "ब्रैकेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5b494da6-ffd7-43d3-7171-7ac84bdfe400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4a7a1b62-d7a7-4a21-ffd5-fa9b5de82100/public"
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
						"korean": "안개가 자욱한 숲. 오래된 유적들이 침묵 속에 잠겨 있다.",
						"english": "A foggy forest. Ancient ruins lie dormant in silence.",
						"japanese": "霧深い森。古い遺跡が沈黙の中に眠る。",
						"chinese": "迷雾弥漫的森林。古老遗迹在寂静中沉睡。",
						"french": "Une forêt brumeuse. Des ruines antiques dorment en silence.",
						"spanish": "Un bosque neblinoso. Antiguas ruinas yacen en silencio.",
						"vietnamese": "Rừng sương mù. Di tích cổ xưa chìm trong im lặng.",
						"thai": "ป่าที่ปกคลุมด้วยหมอก ซากปรักหักพังโบราณจมดิ่งอยู่ในความเงียบงัน",
						"hindi": "एक घना कोहरा वाला जंगल। प्राचीन खंडहर खामोशी में सुप्त पड़े हैं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "묘한 기분이야. 발걸음마다 과거가 속삭이는 것 같아.",
						"english": "A strange feeling. It's as if the past whispers with every step.",
						"japanese": "奇妙な気分だ。足音ごとに過去が囁いているようだ。",
						"chinese": "奇怪的感觉。每一步都像是过去在低语。",
						"french": "Une sensation étrange. C'est comme si le passé murmurait à chaque pas.",
						"spanish": "Una sensación extraña. Es como si el pasado susurrara a cada paso.",
						"vietnamese": "Cảm giác lạ quá. Cứ như quá khứ đang thì thầm theo mỗi bước chân.",
						"thai": "รู้สึกแปลกๆ เหมือนอดีตกำลังกระซิบอยู่ทุกย่างก้าว",
						"hindi": "एक अजीब सी भावना। ऐसा लगता है जैसे हर कदम पर अतीत फुसफुसा रहा हो।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "방금… 뭔가 본 것 같기도 하고.",
						"english": "Just now... I think I saw something.",
						"japanese": "今…何か見たような気もする。",
						"chinese": "刚才…我好像看到了什么。",
						"french": "Juste maintenant... il me semble avoir vu quelque chose.",
						"spanish": "Justo ahora... creo que vi algo.",
						"vietnamese": "Vừa nãy… hình như tôi thấy gì đó.",
						"thai": "เมื่อกี้... เหมือนฉันเห็นอะไรบางอย่าง",
						"hindi": "अभी-अभी... मुझे लगा कि मैंने कुछ देखा।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken",
					"type": "direction"
				},
				{
					"content": {
						"korean": "환영일 거야. 이 숲에선 흔한 일이지.",
						"english": "It must be a hallucination. It's common in this forest.",
						"japanese": "幻影だろう。この森ではよくあることさ。",
						"chinese": "那是幻觉吧。这片森林里很常见。",
						"french": "Ce doit être une illusion. C'est fréquent dans cette forêt.",
						"spanish": "Debe ser una ilusión. Es común en este bosque.",
						"vietnamese": "Chắc là ảo ảnh thôi. Chuyện thường ở khu rừng này mà.",
						"thai": "คงจะเป็นภาพลวงตาละมั้ง ที่ป่าแห่งนี้เป็นเรื่องธรรมดา",
						"hindi": "यह एक भ्रम होगा। इस जंगल में यह आम बात है।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "브라켄! 폭포에 대한 소문, 그게 진짜야?",
						"english": "Braken! The rumors about the waterfall, are they true?",
						"japanese": "ブラケン！滝の噂、あれは本当なのか？",
						"chinese": "布拉肯！关于瀑布的传闻，是真的吗？",
						"french": "Braken ! Les rumeurs sur la cascade, sont-elles vraies ?",
						"spanish": "¡Braken! Los rumores sobre la cascada, ¿son ciertos?",
						"vietnamese": "Braken! Tin đồn về thác nước, có phải là thật không?",
						"thai": "บราเคน! ข่าวลือเกี่ยวกับน้ำตก เป็นเรื่องจริงหรือเปล่า?",
						"hindi": "ब्रेकन! झरने के बारे में अफवाहें, क्या वे सच हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "…응. 폭포 주변에 흐르는 기운은 좋지 않아.",
						"english": "...Yes. The aura flowing around the waterfall is not good.",
						"japanese": "…ああ。滝の周りに流れる気は良くない。",
						"chinese": "……嗯。瀑布周围流动的气息不祥。",
						"french": "...Oui. L'aura qui circule autour de la cascade n'est pas bonne.",
						"spanish": "...Sí. El aura que fluye alrededor de la cascada no es buena.",
						"vietnamese": "...Ừ. Khí tức chảy quanh thác nước không tốt lành.",
						"thai": "...อืม พลังงานที่ไหลเวียนอยู่รอบๆ น้ำตกไม่ค่อยดีเลย",
						"hindi": "...हाँ। झरने के चारों ओर बहने वाली ऊर्जा अच्छी नहीं है।"
					}
				},
				{
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "과거 멸망한 부족의 비극이 거기에 갇혀 있다고들 해.",
						"english": "They say the tragedy of a fallen tribe is trapped there.",
						"japanese": "滅びた部族の悲劇がそこに閉じ込められていると言われている。",
						"chinese": "听说那里困着灭亡部族的悲剧。",
						"french": "On dit que la tragédie d'une tribu déchue y est enfermée.",
						"spanish": "Dicen que la tragedia de una tribu caída está atrapada allí.",
						"vietnamese": "Người ta nói bi kịch của một bộ tộc đã diệt vong bị mắc kẹt ở đó.",
						"thai": "พวกเขาว่ากันว่าโศกนาฏกรรมของชนเผ่าที่ล่มสลายถูกกักขังอยู่ที่นั่น",
						"hindi": "कहते हैं, एक पतित जनजाति की त्रासदी वहीं फँसी हुई है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bracken",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "이곳이 그 비극의 중심이야.",
						"english": "This is the heart of that tragedy.",
						"japanese": "ここがその悲劇の中心だ。",
						"chinese": "这里就是那场悲剧的中心。",
						"french": "C'est le cœur de cette tragédie.",
						"spanish": "Este es el centro de esa tragedia.",
						"vietnamese": "Đây là trung tâm của bi kịch đó.",
						"thai": "ที่นี่คือแก่นของโศกนาฏกรรมนั้น",
						"hindi": "यही उस त्रासदी का केंद्र है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "희미한 비탄의 속삭임이 숲을 감쌌다. 찰나의 환영이 스쳐 지나갔다.",
						"english": "Faint whispers of sorrow enveloped the forest. A fleeting vision flashed by.",
						"japanese": "悲嘆のささやきが森を包んだ。束の間の幻影がよぎった。",
						"chinese": "悲伤的低语笼罩着森林。转瞬即逝的幻影闪过。",
						"french": "De faibles murmures de chagrin enveloppaient la forêt. Une vision éphémère passa.",
						"spanish": "Débiles susurros de pena envolvieron el bosque. Una visión fugaz pasó.",
						"vietnamese": "Những tiếng thì thầm đau buồn bao trùm khu rừng. Một ảo ảnh thoáng qua chợt lóe lên.",
						"thai": "เสียงกระซิบแห่งความเศร้าโศกแผ่วเบาโอบล้อมป่า ภาพหลอนชั่วขณะหนึ่งแวบผ่านไป",
						"hindi": "दुख की धीमी फुसफुसाहट ने जंगल को घेर लिया। एक क्षणभंगुर दृष्टि कौंध गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "머리가 아파… 너무 생생해서 진짜 같아.",
						"english": "My head hurts... It's so vivid, it feels real.",
						"japanese": "頭が痛い…あまりに鮮明で、本物みたいだ。",
						"chinese": "头好痛…太真实了，就像是真的。",
						"french": "J'ai mal à la tête… C'est si vif, on dirait que c'est réel.",
						"spanish": "Me duele la cabeza... Es tan vívido, parece real.",
						"vietnamese": "Đầu tôi đau quá... Nó quá sống động, như thật vậy.",
						"thai": "ปวดหัวจัง...มันชัดเจนจนเหมือนจริง",
						"hindi": "मेरा सर दुख रहा है... यह इतना सजीव है कि असली लगता है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "멈춰선 폭포. 그곳에 모든 것이 시작됐어.",
						"english": "The frozen waterfall. That's where it all began.",
						"japanese": "止まった滝。そこで全てが始まったんだ。",
						"chinese": "停滞的瀑布。一切都从那里开始。",
						"french": "La cascade figée. C'est là que tout a commencé.",
						"spanish": "La cascada detenida. Allí fue donde todo comenzó.",
						"vietnamese": "Thác nước ngừng chảy. Mọi thứ đã bắt đầu từ đó.",
						"thai": "น้ำตกที่หยุดนิ่ง ทุกสิ่งเริ่มต้นที่นั่น",
						"hindi": "रुका हुआ झरना। वहीं से सब कुछ शुरू हुआ।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그럼 우린 뭘 해야 해?",
						"english": "So what should we do?",
						"japanese": "じゃあ、私たちは何をすべきなの？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces, qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำยังไงดีล่ะ",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실을 밝혀야지. 반복되는 비극을 막아야 해.",
						"english": "We must uncover the truth. We have to stop this recurring tragedy.",
						"japanese": "真実を明らかにしなければ。繰り返される悲劇を止めなければならない。",
						"chinese": "我们必须揭露真相。阻止这场悲剧重演。",
						"french": "Nous devons révéler la vérité. Nous devons arrêter cette tragédie récurrente.",
						"spanish": "Debemos descubrir la verdad. Tenemos que detener esta tragedia recurrente.",
						"vietnamese": "Chúng ta phải vạch trần sự thật. Chúng ta phải ngăn chặn bi kịch tái diễn này.",
						"thai": "เราต้องเปิดเผยความจริง เราต้องหยุดยั้งโศกนาฏกรรมที่เกิดขึ้นซ้ำๆ นี้",
						"hindi": "हमें सच्चाई उजागर करनी होगी। इस बार-बार होने वाली त्रासदी को रोकना होगा।"
					},
					"type": "speech",
					"speaker": "bracken"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "발 아래, 잊혀진 문명의 문양이 희미하게 빛났다.",
						"english": "Beneath our feet, faint patterns of a forgotten civilization glowed.",
						"japanese": "足元には、忘れ去られた文明の文様がかすかに光っていた。",
						"chinese": "脚下，被遗忘文明的图案隐约发光。",
						"french": "Sous nos pieds, de faibles motifs d'une civilisation oubliée brillaient.",
						"spanish": "Bajo nuestros pies, tenues patrones de una civilización olvidada brillaban.",
						"vietnamese": "Dưới chân chúng ta, những họa tiết mờ nhạt của một nền văn minh bị lãng quên đang phát sáng.",
						"thai": "ใต้เท้าของเรา ลวดลายเลือนรางของอารยธรรมที่ถูกลืมเลือนเปล่งประกาย",
						"hindi": "हमारे पैरों तले, एक भूली हुई सभ्यता के धुंधले पैटर्न चमक रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기에도… 이런 게 있었어?",
						"english": "Here too... something like this existed?",
						"japanese": "ここにも…こんなものが？",
						"chinese": "这里也有…这种东西？",
						"french": "Ici aussi… quelque chose comme ça existait ?",
						"spanish": "¿Aquí también... existía algo así?",
						"vietnamese": "Ở đây cũng... có thứ này sao?",
						"thai": "ที่นี่ก็...มีอะไรแบบนี้ด้วยเหรอ",
						"hindi": "यहाँ भी... ऐसी चीज़ थी?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "고대 부족의 흔적이야. 폭포와 함께 사라졌지.",
						"english": "Traces of an ancient tribe. They vanished with the waterfall.",
						"japanese": "古代部族の痕跡だ。滝と共に消え去った。",
						"chinese": "是古代部族的痕迹。与瀑布一同消失了。",
						"french": "Des traces d'une ancienne tribu. Elles ont disparu avec la cascade.",
						"spanish": "Huellas de una tribu antigua. Desaparecieron con la cascada.",
						"vietnamese": "Dấu vết của một bộ tộc cổ đại. Họ đã biến mất cùng với thác nước.",
						"thai": "ร่องรอยของชนเผ่าโบราณ พวกเขาสาบสูญไปพร้อมกับน้ำตก",
						"hindi": "एक प्राचीन जनजाति के निशान। वे झरने के साथ गायब हो गए।"
					},
					"type": "speech",
					"speaker": "bracken"
				},
				{
					"content": {
						"korean": "그들은 시간을 조종하려 했고… 대가를 치렀어.",
						"english": "They tried to control time... and paid the price.",
						"japanese": "彼らは時間を操ろうとし…代償を払った。",
						"chinese": "他们试图操纵时间…并付出了代价。",
						"french": "Ils ont essayé de manipuler le temps… et ils l'ont payé.",
						"spanish": "Intentaron controlar el tiempo… y pagaron el precio.",
						"vietnamese": "Họ đã cố gắng kiểm soát thời gian… và đã phải trả giá.",
						"thai": "พวกเขาพยายามควบคุมเวลา…และต้องชดใช้",
						"hindi": "उन्होंने समय को नियंत्रित करने की कोशिश की… और इसकी कीमत चुकाई।"
					},
					"type": "speech",
					"speaker": "bracken",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "우리도… 그렇게 될까?",
						"english": "Will we… end up the same?",
						"japanese": "我々も…そうなるのか？",
						"chinese": "我们也会…那样吗？",
						"french": "Nous aussi… cela nous arrivera-t-il ?",
						"spanish": "¿Nosotros también… terminaremos así?",
						"vietnamese": "Chúng ta cũng… sẽ như vậy sao?",
						"thai": "เราก็…จะเป็นแบบนั้นด้วยไหม?",
						"hindi": "क्या हम भी… ऐसे ही होंगे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래서 더 들어가야 해. 멈춰선 시간을 해방해야지.",
						"english": "That's why we must go deeper. We must free the frozen time.",
						"japanese": "だからこそ、もっと奥へ進まなければならない。止まった時間を解放しなければ。",
						"chinese": "所以我们必须深入。我们必须解放停止的时间。",
						"french": "C'est pourquoi nous devons aller plus loin. Nous devons libérer le temps figé.",
						"spanish": "Por eso debemos ir más profundo. Debemos liberar el tiempo detenido.",
						"vietnamese": "Vì vậy chúng ta phải đi sâu hơn. Phải giải thoát thời gian đã ngừng lại.",
						"thai": "นั่นเป็นเหตุผลที่เราต้องเข้าไปลึกกว่านี้ เราต้องปลดปล่อยเวลาที่หยุดนิ่ง",
						"hindi": "इसलिए हमें और अंदर जाना होगा। हमें रुके हुए समय को मुक्त करना होगा।"
					},
					"speaker": "bracken",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "bracken",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "폭포 소리가 점점 가까워졌다. 시간이 왜곡되는 듯한 착각.",
						"english": "The sound of the waterfall grew closer. An illusion of time distorting.",
						"japanese": "滝の音がだんだん近づいてきた。時間が歪むような錯覚。",
						"chinese": "瀑布的声音越来越近了。时间仿佛扭曲的错觉。",
						"french": "Le bruit de la cascade se rapprochait. Une illusion de temps qui se déforme.",
						"spanish": "El sonido de la cascada se acercaba. Una ilusión de tiempo distorsionándose.",
						"vietnamese": "Tiếng thác nước ngày càng gần. Một ảo giác như thời gian đang bị bóp méo.",
						"thai": "เสียงน้ำตกดังใกล้เข้ามาเรื่อย ๆ ภาพลวงตาของเวลาที่บิดเบี้ยว",
						"hindi": "झरने की आवाज़ करीब आती गई। समय के विकृत होने का एक भ्रम।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 정말 돌아갈 수 없겠어.",
						"english": "Now, there's truly no turning back.",
						"japanese": "もう本当に戻れないだろう。",
						"chinese": "现在真的无法回头了。",
						"french": "Maintenant, il n'y a vraiment plus de retour possible.",
						"spanish": "Ahora, realmente no hay vuelta atrás.",
						"vietnamese": "Giờ thì thật sự không thể quay lại được nữa.",
						"thai": "ตอนนี้คงกลับไปไม่ได้แล้วจริง ๆ",
						"hindi": "अब सच में वापस नहीं जा सकते।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bracken",
					"content": {
						"korean": "폭포가 우리를 부르고 있어. 혹은… 경고하는 건지도.",
						"english": "The waterfall is calling to us. Or… perhaps it's a warning.",
						"japanese": "滝が私たちを呼んでいる。あるいは…警告しているのかもしれない。",
						"chinese": "瀑布在呼唤我们。或者…也许是在警告。",
						"french": "La cascade nous appelle. Ou… peut-être qu'elle nous avertit.",
						"spanish": "La cascada nos está llamando. O… quizás nos esté advirtiendo.",
						"vietnamese": "Thác nước đang gọi chúng ta. Hoặc… cũng có thể là đang cảnh báo.",
						"thai": "น้ำตกกำลังเรียกเรา หรือ…อาจจะกำลังเตือนอยู่ก็ได้",
						"hindi": "झरना हमें बुला रहा है। या… शायद चेतावनी दे रहा है।"
					}
				},
				{
					"content": {
						"korean": "누가 거기 있는 것 같아.",
						"english": "Someone seems to be there.",
						"japanese": "誰かがそこにいるようだ。",
						"chinese": "好像有人在那里。",
						"french": "Quelqu'un semble être là.",
						"spanish": "Parece que hay alguien allí.",
						"vietnamese": "Có vẻ như có ai đó ở đó.",
						"thai": "ดูเหมือนจะมีใครบางคนอยู่ตรงนั้น",
						"hindi": "लगता है कोई वहाँ है।"
					},
					"speaker": "character_1",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "조심해. 숲이 깨어나는 것 같아.",
						"english": "Be careful. The forest seems to be waking up.",
						"japanese": "気をつけて。森が目覚めるようだ。",
						"chinese": "小心。森林似乎正在苏醒。",
						"french": "Fais attention. La forêt semble s'éveiller.",
						"spanish": "Ten cuidado. El bosque parece estar despertando.",
						"vietnamese": "Cẩn thận. Rừng dường như đang thức giấc.",
						"thai": "ระวังให้ดี ป่าดูเหมือนกำลังตื่นขึ้น",
						"hindi": "सावधान रहो। जंगल जाग रहा है लगता है।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "이것은 시작에 불과해… 너희는 더 깊은 비극 속으로….",
						"english": "This is just the beginning... You'll fall into a deeper tragedy...",
						"japanese": "これは始まりに過ぎない… お前たちはさらなる深淵の悲劇へ…。",
						"chinese": "这只是个开始… 你们将坠入更深的悲剧…。",
						"french": "Ce n'est que le début... Vous sombrerez dans une tragédie encore plus profonde...",
						"spanish": "Esto es solo el principio... Caeréis en una tragedia aún más profunda...",
						"vietnamese": "Đây chỉ là khởi đầu... Các ngươi sẽ rơi vào bi kịch sâu thẳm hơn...",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น… พวกเจ้าจะตกอยู่ในโศกนาฏกรรมที่ลึกซึ้งกว่า…",
						"hindi": "यह तो बस शुरुआत है… तुम और गहरे दुख में डूब जाओगे…।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "결국, 해냈어!",
						"english": "We finally did it!",
						"japanese": "ついに、やった！",
						"chinese": "终于，成功了！",
						"french": "Finalement, on a réussi !",
						"spanish": "¡Al fin lo logramos!",
						"vietnamese": "Cuối cùng, chúng ta đã làm được!",
						"thai": "ในที่สุดก็ทำสำเร็จ!",
						"hindi": "आखिरकार, हमने कर दिखाया!"
					},
					"emotion": "happy"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "bracken"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만… 뭔가 아직 해결되지 않은 느낌이야.",
						"english": "But... I feel like something is still unresolved.",
						"japanese": "でも… 何かまだ解決していない気がする。",
						"chinese": "但是… 感觉还有什么没有解决。",
						"french": "Mais... J'ai l'impression que quelque chose n'est pas encore réglé.",
						"spanish": "Pero... siento que algo aún no se ha resuelto.",
						"vietnamese": "Nhưng... có vẻ như vẫn còn điều gì đó chưa được giải quyết.",
						"thai": "แต่… รู้สึกเหมือนยังมีอะไรบางอย่างที่ยังไม่คลี่คลาย",
						"hindi": "लेकिन… ऐसा लग रहा है कि कुछ अभी भी अनसुलझा है।"
					},
					"speaker": "bracken",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멈춰선 시간의 폭포는 다시 흐르기 시작했다. 그러나 숲은 또 다른 미스터리를 품고 있었다.",
						"english": "The halted waterfall of time began to flow again. Yet, the forest held another mystery.",
						"japanese": "止まっていた時間の滝は再び流れ始めた。しかし、森は別の謎を秘めていた。",
						"chinese": "停滞的时间瀑布再次流淌。然而，森林却怀揣着另一个谜团。",
						"french": "La cascade du temps, autrefois figée, recommença à couler. Pourtant, la forêt recelait un autre mystère.",
						"spanish": "La cascada del tiempo detenida comenzó a fluir de nuevo. Sin embargo, el bosque guardaba otro misterio.",
						"vietnamese": "Thác nước thời gian đã ngừng chảy giờ lại bắt đầu tuôn. Nhưng khu rừng vẫn ẩn chứa một bí ẩn khác.",
						"thai": "น้ำตกแห่งกาลเวลาที่หยุดนิ่งเริ่มไหลอีกครั้ง แต่ป่ายังคงเก็บงำความลึกลับอื่นไว้",
						"hindi": "रुका हुआ समय का झरना फिर से बहने लगा। फिर भी, जंगल में एक और रहस्य छिपा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "잃어버린 기억의 조각들이, 이제 막 깨어나고 있었다.",
						"english": "Fragments of lost memories were just beginning to awaken.",
						"japanese": "失われた記憶の断片が、今まさに目覚めようとしていた。",
						"chinese": "丢失的记忆碎片，此刻正开始苏醒。",
						"french": "Des fragments de souvenirs perdus commençaient tout juste à s'éveiller.",
						"spanish": "Los fragmentos de recuerdos perdidos estaban empezando a despertar.",
						"vietnamese": "Những mảnh ký ức đã mất, giờ đây vừa mới bắt đầu thức tỉnh.",
						"thai": "เศษเสี้ยวความทรงจำที่หายไป กำลังเริ่มตื่นขึ้นมา",
						"hindi": "खोई हुई यादों के टुकड़े, अभी-अभी जाग रहे थे।"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "멈춰선 폭포 앞. 거대한 그림자가 앞을 가로막았다.",
						"english": "Before the frozen waterfall. A colossal shadow blocked the way.",
						"japanese": "止まった滝の前。巨大な影が道を塞いだ。",
						"chinese": "停滞的瀑布前。一道巨大的阴影挡住了去路。",
						"french": "Devant la cascade figée. Une ombre colossale barra le chemin.",
						"spanish": "Ante la cascada detenida. Una sombra colosal bloqueó el paso.",
						"vietnamese": "Trước thác nước đã ngừng. Một bóng đen khổng lồ chặn đường.",
						"thai": "หน้าม่านน้ำตกที่หยุดนิ่ง เงาขนาดมหึมาขวางทาง",
						"hindi": "रुके हुए झरने के सामने। एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 자들… 이곳에 발을 들이는군.",
						"english": "Foolish ones… you set foot in this place.",
						"japanese": "愚かな者たちめ…この地に足を踏み入れるとは。",
						"chinese": "愚蠢的人类…竟敢踏足此地。",
						"french": "Insensés… vous osez pénétrer ici.",
						"spanish": "Necios… ponéis un pie en este lugar.",
						"vietnamese": "Những kẻ ngu ngốc… dám đặt chân đến nơi này.",
						"thai": "พวกโง่เง่า…กล้าก้าวเข้ามาในที่แห่งนี้",
						"hindi": "मूर्खों… तुम इस जगह कदम रख रहे हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "Did you orchestrate all of this?",
						"japanese": "あなたがこの全てを仕組んだの？",
						"chinese": "这一切都是你策划的吗？",
						"french": "C'est toi qui as manigancé tout ça ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này phải không?",
						"thai": "ทั้งหมดนี่เจ้าเป็นคนบงการใช่ไหม?",
						"hindi": "क्या यह सब तुम्हारी साज़िश थी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "시간의 흐름을 거스르려 한 대가를 치러야지.",
						"english": "You'll pay the price for defying the flow of time.",
						"japanese": "時の流れに逆らった代償を払ってもらう。",
						"chinese": "你将为逆转时间洪流付出代价。",
						"french": "Tu paieras le prix d'avoir défié le cours du temps.",
						"spanish": "Pagarás el precio por desafiar el flujo del tiempo.",
						"vietnamese": "Ngươi sẽ phải trả giá vì dám chống lại dòng chảy thời gian.",
						"thai": "เจ้าจะต้องชดใช้ที่ฝืนกระแสเวลา",
						"hindi": "तुम्हें समय के प्रवाह को चुनौती देने की कीमत चुकानी होगी।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "우린 진실을 밝힐 거야. 당신의 시대는 끝났어.",
						"english": "We'll reveal the truth. Your era is over.",
						"japanese": "私たちは真実を明らかにする。あなたの時代は終わった。",
						"chinese": "我们会揭露真相。你的时代结束了。",
						"french": "Nous révélerons la vérité. Ton ère est révolue.",
						"spanish": "Revelaremos la verdad. Tu era ha terminado.",
						"vietnamese": "Chúng ta sẽ phơi bày sự thật. Thời đại của ngươi đã kết thúc rồi.",
						"thai": "เราจะเปิดเผยความจริง ยุคของเจ้าจบลงแล้ว",
						"hindi": "हम सच का पर्दाफाश करेंगे। तुम्हारा समय समाप्त हो गया है।"
					},
					"type": "speech",
					"speaker": "bracken"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 숲의 비극은 영원히 반복될 것이다… 너희도 그 일부가 되겠지.",
						"english": "The tragedy of this forest will repeat forever... You too will become a part of it.",
						"japanese": "この森の悲劇は永遠に繰り返されるだろう… お前たちもその一部となる。",
						"chinese": "这片森林的悲剧将永远重演… 你们也将成为其中一部分。",
						"french": "La tragédie de cette forêt se répétera à jamais... Vous en ferez partie aussi.",
						"spanish": "La tragedia de este bosque se repetirá para siempre... Vosotros también seréis parte de ella.",
						"vietnamese": "Bi kịch của khu rừng này sẽ lặp lại mãi mãi... Các ngươi cũng sẽ trở thành một phần của nó.",
						"thai": "โศกนาฏกรรมของป่านี้จะดำเนินไปชั่วนิรันดร์… พวกเจ้าก็จะกลายเป็นส่วนหนึ่งของมัน",
						"hindi": "इस जंगल की त्रासदी हमेशा दोहराई जाएगी… तुम भी इसका हिस्सा बन जाओगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아니… 우리는 멈추지 않아!",
						"english": "No... We won't stop!",
						"japanese": "いや… 私たちは止まらない！",
						"chinese": "不… 我们不会停止！",
						"french": "Non... Nous ne nous arrêterons pas !",
						"spanish": "¡No... no nos detendremos!",
						"vietnamese": "Không... Chúng ta sẽ không dừng lại!",
						"thai": "ไม่… เราจะไม่หยุด!",
						"hindi": "नहीं… हम रुकेंगे नहीं!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bracken",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "bracken",
					"type": "speech",
					"content": {
						"korean": "포기하지 마. 아직 희망은 있어!",
						"english": "Don't give up. There's still hope!",
						"japanese": "諦めないで。まだ希望はある！",
						"chinese": "别放弃。还有希望！",
						"french": "N'abandonne pas. Il y a encore de l'espoir !",
						"spanish": "No te rindas. ¡Aún hay esperanza!",
						"vietnamese": "Đừng bỏ cuộc. Vẫn còn hy vọng!",
						"thai": "อย่ายอมแพ้ ยังมีความหวัง!",
						"hindi": "हार मत मानो। अभी भी उम्मीद है!"
					},
					"emotion": "happy"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"시간이 멈춘 숲. 그곳에서 과거의 비극이, 환영처럼 반복된다.",
			"잊혀진 부족의 이야기, 그리고 멈춰선 폭포의 미스터리.",
			"불길한 기운이 흐르는 숲의 심장부로— 우리는 나아간다.",
			"진실을 찾기 위한 여정, 어쩌면 되풀이될 운명을 향해."
		],
		"english": [
			"The forest where time stands still. There, past tragedies repeat like a mirage.",
			"The tale of a forgotten tribe, and the mystery of the stopped waterfall.",
			"Into the heart of the forest, where an ominous aura flows—we press onward.",
			"A journey to find the truth, perhaps towards a fate that will repeat itself."
		],
		"japanese": [
			"時が止まった森。そこでは、過去の悲劇が幻影のように繰り返される。",
			"忘れ去られた部族の物語、そして止まった滝の謎。",
			"不吉な気が流れる森の奥地へ—我々は進む。",
			"真実を探す旅、あるいは繰り返される運命へと。"
		],
		"chinese": [
			"时间停滞的森林。在那里，过去的悲剧如幻影般重演。",
			"被遗忘部落的故事，以及停滞瀑布的神秘。",
			"深入弥漫不祥气息的森林中心——我们前进。",
			"寻找真相的旅程，或许走向注定重演的命运。"
		],
		"french": [
			"La forêt où le temps s'est arrêté. Là, les tragédies passées se répètent comme un mirage.",
			"L'histoire d'une tribu oubliée et le mystère de la cascade arrêtée.",
			"Au cœur de la forêt, où coule une aura sinistre—nous avançons.",
			"Un voyage pour trouver la vérité, peut-être vers un destin qui se répétera."
		],
		"spanish": [
			"El bosque donde el tiempo se detuvo. Allí, las tragedias pasadas se repiten como una ilusión.",
			"La historia de una tribu olvidada y el misterio de la cascada detenida.",
			"Hacia el corazón del bosque, donde fluye un aura ominosa—avanzamos.",
			"Un viaje para encontrar la verdad, quizás hacia un destino que se repetirá."
		],
		"vietnamese": [
			"Rừng thời gian ngừng đọng. Ở đó, bi kịch quá khứ lặp lại như ảo ảnh.",
			"Câu chuyện về bộ tộc bị lãng quên, và bí ẩn thác nước dừng lại.",
			"Tiến vào trung tâm khu rừng, nơi có khí tức chẳng lành—chúng ta tiến bước.",
			"Hành trình tìm kiếm sự thật, có lẽ hướng tới vận mệnh sẽ lặp lại."
		],
		"thai": [
			"ป่าที่กาลเวลาหยุดนิ่ง ที่นั่นโศกนาฏกรรมในอดีตหวนคืนมาดุจภาพลวงตา",
			"เรื่องราวของเผ่าที่ถูกลืม และความลึกลับของน้ำตกที่หยุดนิ่ง",
			"สู่ใจกลางป่า ที่ซึ่งมีพลังงานลางร้ายไหลเวียน—เราจะก้าวต่อไป",
			"การเดินทางเพื่อค้นหาความจริง หรืออาจจะสู่ชะตากรรมที่ต้องซ้ำรอย"
		],
		"hindi": [
			"वह वन जहाँ समय थम गया है। वहाँ, अतीत की त्रासदी एक मृगतृष्णा की तरह दोहराई जाती है।",
			"एक भूली हुई जनजाति की कहानी, और रुके हुए झरने का रहस्य।",
			"अशुभ ऊर्जा से भरे जंगल के हृदय में— हम आगे बढ़ते हैं।",
			"सत्य की तलाश में एक यात्रा, शायद एक ऐसे भाग्य की ओर जो खुद को दोहराएगा।"
		]
	}
} as const;
