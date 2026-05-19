export const scenario_EndlessApplicant_V1_DespairCycle_02 = {
	"scenario_id": "EndlessApplicant_V1_DespairCycle_02",
	"order": 2,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
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
					"emotion": "base",
					"content": {
						"korean": "희망이 사라진 대기실. 찢겨진 이력서 조각들이 바닥을 굴렀다.",
						"english": "A waiting room devoid of hope. Torn resume scraps rolled across the floor.",
						"japanese": "希望が失われた待合室。破れた履歴書の切れ端が床を転がっていた。",
						"chinese": "一间失去希望的候诊室。撕碎的简历碎片在地上滚动。",
						"french": "Une salle d'attente dépourvue d'espoir. Des morceaux de CV déchirés roulaient sur le sol.",
						"spanish": "Una sala de espera desprovista de esperanza. Pedazos de currículum rasgados rodaban por el suelo.",
						"vietnamese": "Phòng chờ không còn hy vọng. Những mảnh hồ sơ xin việc rách nát lăn lóc trên sàn.",
						"thai": "ห้องรอที่ไร้ซึ่งความหวัง เศษกระดาษเรซูเม่ฉีกขาดกลิ้งไปมาบนพื้น",
						"hindi": "आशा से रहित एक प्रतीक्षालय। फटे हुए रिज्यूमे के टुकड़े फर्श पर लुढ़क रहे थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이젠… 뭘 해야 해?",
						"english": "Now... what should I do?",
						"japanese": "もう…どうすればいいんだ？",
						"chinese": "现在…我该怎么办？",
						"french": "Maintenant... que dois-je faire ?",
						"spanish": "Ahora... ¿qué debo hacer?",
						"vietnamese": "Giờ thì... tôi nên làm gì đây?",
						"thai": "แล้ว...ฉันควรทำยังไงดี?",
						"hindi": "अब... मुझे क्या करना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "bex",
					"action": "enter"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "하! 아직도 '다음'을 기다려? 바보같이.",
						"english": "Ha! Still waiting for 'next'? Foolish.",
						"japanese": "ハッ！まだ'次'を待ってるのか？馬鹿な奴め。",
						"chinese": "哈！还在等'下一次'？真傻。",
						"french": "Ha ! Tu attends toujours le 'suivant' ? Stupide.",
						"spanish": "¡Ja! ¿Todavía esperas un 'siguiente'? Qué tonto.",
						"vietnamese": "Ha! Vẫn còn chờ 'tiếp theo' à? Ngốc nghếch.",
						"thai": "ฮ่า! ยังรอ 'ครั้งหน้า' อยู่อีกเหรอ? โง่จริง ๆ",
						"hindi": "हा! अभी भी 'अगले' का इंतजार कर रहे हो? मूर्खतापूर्ण।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "벡스. 진짜 탈출 경로를 아는 유일한 사람.",
						"english": "Vex. The only one who knows the real escape route.",
						"japanese": "ヴェックス。本当の脱出経路を知る唯一の人物だ。",
						"chinese": "维克斯。唯一知道真正逃脱路线的人。",
						"french": "Vex. Le seul à connaître la véritable voie d'évasion.",
						"spanish": "Vex. El único que conoce la verdadera ruta de escape.",
						"vietnamese": "Vex. Người duy nhất biết con đường thoát hiểm thật sự.",
						"thai": "เว็กซ์ คนเดียวที่รู้เส้นทางหลบหนีที่แท้จริง",
						"hindi": "वेक्स। असली भागने का रास्ता जानने वाला एकमात्र व्यक्ति।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "관심 없으면 말고. 여기 썩어가는 것도 나쁘지 않지.",
						"english": "If you're not interested, fine. It's not so bad rotting here.",
						"japanese": "興味ないならそれでいい。ここで朽ちていくのも悪くないだろう。",
						"chinese": "不感兴趣就算了。在这里腐烂也不错。",
						"french": "Si ça ne t'intéresse pas, tant pis. Pourrir ici n'est pas si mal.",
						"spanish": "Si no te interesa, da igual. No está tan mal pudrirse aquí.",
						"vietnamese": "Nếu không quan tâm thì thôi. Ở đây mục rữa cũng không tệ lắm đâu.",
						"thai": "ถ้าไม่สนใจก็ช่างเถอะ เน่าเปื่อยอยู่ที่นี่ก็ไม่เลวร้ายนักหรอก",
						"hindi": "यदि तुम इच्छुक नहीं हो, तो ठीक है। यहाँ सड़ना भी बुरा नहीं है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "여기가 첫 번째 경로. 막다른 길? 네 착각이야.",
						"english": "This is the first path. A dead end? Your mistake.",
						"japanese": "ここが最初の道だ。行き止まり？君の勘違いだよ。",
						"chinese": "这是第一条路。死胡同？你搞错了。",
						"french": "C'est le premier chemin. Une impasse ? Ton erreur.",
						"spanish": "Este es el primer camino. ¿Un callejón sin salida? Es tu error.",
						"vietnamese": "Đây là con đường đầu tiên. Ngõ cụt ư? Nhầm lẫn của ngươi thôi.",
						"thai": "นี่คือเส้นทางแรก ทางตันเหรอ? เธอเข้าใจผิดแล้วล่ะ",
						"hindi": "यह पहला रास्ता है। एक बंद गली? यह तुम्हारी गलतफहमी है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "막다른 벽이잖아요!",
						"english": "It's a dead end!",
						"japanese": "行き止まりじゃないですか！",
						"chinese": "这不是死路一条吗！",
						"french": "C'est une impasse !",
						"spanish": "¡Es un callejón sin salida!",
						"vietnamese": "Đây là bức tường cụt mà!",
						"thai": "มันเป็นทางตันนี่นา!",
						"hindi": "यह एक बंद गली है!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "원래 쉬우면 누가 내 지도를 사겠어? 잘 봐.",
						"english": "If it were easy, who would buy my map? Look closely.",
						"japanese": "もし簡単だったら、誰が私の地図を買う？よく見ろ。",
						"chinese": "要是容易，谁会买我的地图？仔细看。",
						"french": "Si c'était facile, qui achèterait ma carte ? Regarde bien.",
						"spanish": "Si fuera fácil, ¿quién compraría mi mapa? Mira con atención.",
						"vietnamese": "Nếu dễ dàng thì ai sẽ mua bản đồ của ta? Nhìn kỹ đi.",
						"thai": "ถ้ามันง่าย ใครจะซื้อแผนที่ฉันล่ะ? ดูดีๆ สิ",
						"hindi": "अगर यह आसान होता, तो मेरा नक्शा कौन खरीदता? ध्यान से देखो।"
					},
					"speaker": "bex"
				},
				{
					"direction": "right",
					"type": "direction",
					"duration_ms": 400,
					"speaker": "bex",
					"action": "exit"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "벡스는 알 수 없는 미소를 지으며 사라졌다.",
						"english": "Vex disappeared with an inscrutable smile.",
						"japanese": "ベックスは意味深な笑みを浮かべ、姿を消した。",
						"chinese": "维克斯带着难以捉摸的笑容消失了。",
						"french": "Vex disparut avec un sourire énigmatique.",
						"spanish": "Vex desapareció con una sonrisa indescifrable.",
						"vietnamese": "Vex biến mất với một nụ cười khó hiểu.",
						"thai": "เวกซ์หายตัวไปพร้อมรอยยิ้มที่คาดเดาไม่ได้",
						"hindi": "वेक्स एक रहस्यमय मुस्कान के साथ गायब हो गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…젠장.",
						"english": "...Damn it.",
						"japanese": "…ちくしょう。",
						"chinese": "……该死。",
						"french": "...Mince.",
						"spanish": "...¡Maldita sea!",
						"vietnamese": "...Khốn kiếp.",
						"thai": "...เวรเอ๊ย",
						"hindi": "...धिक्कार है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "bex",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "또 막다른 길이에요!",
						"english": "Another dead end!",
						"japanese": "また行き止まりです！",
						"chinese": "又是死路一条！",
						"french": "Encore une impasse !",
						"spanish": "¡Otro callejón sin salida!",
						"vietnamese": "Lại là ngõ cụt!",
						"thai": "ทางตันอีกแล้ว!",
						"hindi": "फिर से एक बंद गली है!"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "글쎄? 더 깊숙이 들어가면 보일 텐데.",
						"english": "Hmm? You'd see if you went deeper.",
						"japanese": "ふむ？もっと奥へ行けば見えるだろうに。",
						"chinese": "是吗？再往深处走你就能看到了。",
						"french": "Tiens ? Tu verrais si tu allais plus loin.",
						"spanish": "¿En serio? Lo verías si te adentraras más.",
						"vietnamese": "Thế à? Nếu đi sâu hơn thì ngươi sẽ thấy thôi.",
						"thai": "งั้นเหรอ? ถ้าเข้าไปลึกกว่านี้เธอก็จะเห็นเอง",
						"hindi": "क्या? अगर तुम और अंदर जाओगे तो देख लोगे।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "속인 거예요?",
						"english": "Did you trick me?",
						"japanese": "騙したんですか？",
						"chinese": "你骗我了？",
						"french": "Vous m'avez trompé ?",
						"spanish": "¿Me has engañado?",
						"vietnamese": "Anh lừa tôi à?",
						"thai": "คุณหลอกฉันเหรอ?",
						"hindi": "क्या तुमने मुझे धोखा दिया?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "후후… 내 지도는 실패하지 않아. 네가 길을 못 찾는 것뿐.",
						"english": "Hehe... My map doesn't fail. You just can't find the way.",
						"japanese": "ふふ…私の地図は失敗しない。お前が道を見つけられないだけだ。",
						"chinese": "呵呵……我的地图从不失误。只是你找不到路而已。",
						"french": "Huhu... Ma carte ne se trompe jamais. C'est toi qui ne trouves pas le chemin.",
						"spanish": "Jaja... Mi mapa no falla. Es solo que tú no encuentras el camino.",
						"vietnamese": "Hừm hừm... Bản đồ của ta không bao giờ thất bại. Chỉ là ngươi không tìm thấy đường thôi.",
						"thai": "ฮิฮิ... แผนที่ของฉันไม่เคยล้มเหลว เธอแค่หาทางไม่เจอเอง",
						"hindi": "हुह... मेरा नक्शा कभी फेल नहीं होता। बस तुम रास्ता नहीं ढूंढ पा रहे हो।"
					},
					"emotion": "happy"
				},
				{
					"type": "speech",
					"content": {
						"korean": "인사 로봇 린이 '다음 기회...'라고 말하려다 멈췄다. 날카로운 비명 소리가 들렸다.",
						"english": "Greeting robot Lynn was about to say 'Next time...' but stopped. A sharp scream was heard.",
						"japanese": "挨拶ロボットのリンが『またの機会に…』と言いかけて止まった。鋭い悲鳴が聞こえた。",
						"chinese": "问候机器人林正要说‘下次再来…’却停住了。一声尖锐的叫声响起。",
						"french": "Lynn, le robot d'accueil, était sur le point de dire 'À la prochaine fois...' mais s'arrêta. Un cri strident se fit entendre.",
						"spanish": "El robot de bienvenida Lynn estaba a punto de decir 'Hasta la próxima...' pero se detuvo. Se escuchó un grito agudo.",
						"vietnamese": "Robot chào hỏi Lynn định nói 'Lần sau...' thì dừng lại. Một tiếng thét chói tai vang lên.",
						"thai": "หุ่นยนต์ทักทายลินน์กำลังจะพูดว่า 'โอกาสหน้า...' แต่ก็หยุดลง มีเสียงกรีดร้องแหลมดังขึ้น",
						"hindi": "अभिवादन रोबोट लिन 'अगली बार...' कहने वाला था लेकिन रुक गया। एक तीखी चीख सुनाई दी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린…?",
						"english": "Lynn...?",
						"japanese": "「リン…？」",
						"chinese": "“琳……？”",
						"french": "« Lynn...? »",
						"spanish": "¿Lynn...?",
						"vietnamese": "Lynn...?",
						"thai": "ลินน์...?",
						"hindi": "लिन...?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "이내 린은 아무 일 없었다는 듯 다시 작동했다.",
						"english": "Soon, Lynn reactivated as if nothing had happened.",
						"japanese": "「すぐに、リンは何事もなかったかのように再び作動した。」",
						"chinese": "“很快，琳又重新启动了，仿佛什么都没发生过。”",
						"french": "« Bientôt, Lynn se réactiva comme si rien ne s'était passé. »",
						"spanish": "Pronto, Lynn se reactivó como si nada hubiera pasado.",
						"vietnamese": "Ngay sau đó, Lynn hoạt động trở lại như thể chưa có chuyện gì xảy ra.",
						"thai": "ไม่นาน ลินน์ก็กลับมาทำงานอีกครั้ง ราวกับไม่มีอะไรเกิดขึ้น",
						"hindi": "जल्द ही, लिन फिर से सक्रिय हो गई जैसे कुछ हुआ ही न हो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bex",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 지도는 가짜야! 날 속였어!",
						"english": "This map is fake! You tricked me!",
						"japanese": "「この地図は偽物だ！私を騙したな！」",
						"chinese": "“这地图是假的！你骗了我！”",
						"french": "« Cette carte est fausse ! Tu m'as trompé ! »",
						"spanish": "¡Este mapa es falso! ¡Me engañaste!",
						"vietnamese": "Bản đồ này giả! Ngươi lừa ta!",
						"thai": "แผนที่นี่มันของปลอม! แกหลอกฉัน!",
						"hindi": "यह नक्शा नकली है! तुमने मुझे धोखा दिया!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제 알았어? 난 항상 '진실'만 말했는데.",
						"english": "Only now you realize? I've always spoken 'truth'.",
						"japanese": "「今になって気づいたのか？私はいつも『真実』しか話していないのに。」",
						"chinese": "“现在才明白？我一直只说‘真话’。”",
						"french": "« Ce n'est que maintenant que tu réalises ? J'ai toujours dit la \"vérité\". »",
						"spanish": "¿Solo ahora te das cuenta? Siempre he dicho la 'verdad'.",
						"vietnamese": "Giờ ngươi mới nhận ra sao? Ta luôn nói 'sự thật'.",
						"thai": "เพิ่งจะรู้รึไง? ฉันพูดแต่ 'ความจริง' มาตลอดนะ",
						"hindi": "अब जाकर समझे? मैंने हमेशा 'सच' ही कहा है।"
					},
					"type": "speech",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실? 당신은 사기꾼이야!",
						"english": "Truth? You're a swindler!",
						"japanese": "「真実？あなたは詐欺師だ！」",
						"chinese": "“真相？你是个骗子！”",
						"french": "« La vérité ? Tu n'es qu'un escroc ! »",
						"spanish": "¿Verdad? ¡Eres un estafador!",
						"vietnamese": "Sự thật ư? Ngươi là kẻ lừa đảo!",
						"thai": "ความจริงงั้นเหรอ? แกมันนักต้มตุ๋น!",
						"hindi": "सच? तुम एक ठग हो!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아니. 이 시스템에선 '탈출'이란 건 없어. 난 그저 그걸 이용할 뿐.",
						"english": "No. In this system, there is no 'escape'. I merely exploit it.",
						"japanese": "「いや。このシステムに『脱出』などない。私はただそれを利用しているだけだ。」",
						"chinese": "“不。在这个系统中，没有‘逃脱’。我只是利用它而已。”",
						"french": "« Non. Dans ce système, il n'y a pas d'\"évasion\". Je ne fais que l'exploiter. »",
						"spanish": "No. En este sistema, no hay 'escape'. Simplemente lo aprovecho.",
						"vietnamese": "Không. Trong hệ thống này, không có 'lối thoát'. Ta chỉ lợi dụng nó thôi.",
						"thai": "ไม่หรอก ในระบบนี้ไม่มี 'ทางหนี' ฉันแค่ใช้ประโยชน์จากมันเท่านั้น",
						"hindi": "नहीं। इस सिस्टम में कोई 'भागने' का रास्ता नहीं है। मैं बस इसका फायदा उठाता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모두가 '다음'이 없다는 걸 알아도, '탈출'이라는 미끼는 달콤하거든.",
						"english": "Even if everyone knows there's no 'next', the bait of 'escape' is sweet.",
						"japanese": "「誰もが『次』がないと知っていても、『脱出』という餌は甘いものだ。」",
						"chinese": "“即使所有人都知道没有‘下一步’，‘逃脱’的诱饵依然很诱人。”",
						"french": "« Même si tout le monde sait qu'il n'y a pas de \"suite\", l'appât de l'\"évasion\" est doux. »",
						"spanish": "Aunque todos sepan que no hay un 'siguiente', el cebo de la 'fuga' es dulce.",
						"vietnamese": "Dù mọi người đều biết không có 'cái tiếp theo', nhưng cái mồi 'thoát hiểm' thì vẫn ngọt ngào.",
						"thai": "แม้ว่าทุกคนจะรู้ว่าไม่มี 'ครั้งต่อไป' แต่เหยื่อที่ชื่อ 'การหลบหนี' ก็ยังคงหอมหวาน",
						"hindi": "भले ही सबको पता हो कि कोई 'अगला' नहीं है, फिर भी 'भागने' का लालच मीठा होता है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "벡스의 눈빛에서 알 수 없는 만족감이 스쳐 지나갔다.",
						"english": "An unknown satisfaction flickered in Vex's eyes.",
						"japanese": "「ベックスの目に、説明しがたい満足感がかすかに浮かんだ。」",
						"chinese": "“维克斯的眼中闪过一丝难以言喻的满足感。”",
						"french": "« Une satisfaction inattendue passa dans les yeux de Vex. »",
						"spanish": "Una satisfacción desconocida cruzó los ojos de Vex.",
						"vietnamese": "Một sự hài lòng khó tả thoáng qua trong mắt Vex.",
						"thai": "ความพึงพอใจที่ไม่อาจเข้าใจได้ฉายแววในดวงตาของเว็กซ์",
						"hindi": "वेक्स की आँखों में एक अज्ञात संतुष्टि की चमक कौंध गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "당신은… 시스템의 하수인이었어.",
						"english": "You... were the system's minion.",
						"japanese": "「あなたは…システムの手先だったのね。」",
						"chinese": "“你……是系统的走狗。”",
						"french": "« Tu... tu étais le laquais du système. »",
						"spanish": "Tú... eras el esbirro del sistema.",
						"vietnamese": "Ngươi... là tay sai của hệ thống.",
						"thai": "แก... เป็นสมุนของระบบ",
						"hindi": "तुम... सिस्टम के प्यादे थे।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "희미한 그림자가 벽에 어른거렸다. 에반과 닮았지만, 훨씬 거대하고 뒤틀린 형태였다. 이내 사라졌다.",
						"english": "A faint shadow flickered on the wall. It resembled Evan, yet was far larger and twisted. Soon, it vanished.",
						"japanese": "「かすかな影が壁に揺らめいた。エヴァンに似ていたが、はるかに巨大で歪んだ形だった。やがて、それは消えた。」",
						"chinese": "“一个模糊的影子在墙上晃动。它像埃文，但更加巨大和扭曲。很快，它消失了。”",
						"french": "« Une ombre indistincte vacilla sur le mur. Elle ressemblait à Evan, mais était bien plus grande et déformée. Bientôt, elle disparut. »",
						"spanish": "Una tenue sombra parpadeó en la pared. Se parecía a Evan, pero era mucho más grande y retorcida. Pronto, desapareció.",
						"vietnamese": "Một bóng tối mờ ảo chập chờn trên tường. Nó giống Evan, nhưng to lớn và méo mó hơn nhiều. Chẳng mấy chốc, nó biến mất.",
						"thai": "เงาจาง ๆ ปรากฏบนกำแพง มันคล้ายอีวาน แต่ใหญ่โตและบิดเบี้ยวกว่ามาก ไม่นานมันก็หายไป",
						"hindi": "दीवार पर एक हल्की सी छाया काँप उठी। यह एवन से मिलती-जुलती थी, लेकिन कहीं अधिक विशाल और विकृत थी। जल्द ही, वह गायब हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "자, 네가 찾던 '탈출'이야. 잘 싸워봐.",
						"english": "Here it is, the 'escape' you sought. Fight well.",
						"japanese": "「さあ、お前が探していた『脱出』だ。せいぜい戦ってみろ。」",
						"chinese": "「这就是你所寻求的‘逃脱’。好好战斗吧。」",
						"french": "« Tiens, l'« évasion » que tu cherchais. Bats-toi bien. »",
						"spanish": "« Aquí está, la 'fuga' que buscabas. Lucha bien. »",
						"vietnamese": "« Đây rồi, 'lối thoát' mà ngươi tìm kiếm. Chiến đấu tốt nhé. »",
						"thai": "« นี่แหละ 'ทางหนี' ที่เจ้าตามหา จงสู้ให้เต็มที่ »",
						"hindi": "« यह रहा, वह 'पलायन' जिसकी तुम तलाश में थे। अच्छे से लड़ो। »"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "bex"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "bex",
					"direction": "down",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "탈출은… 환상이다.",
						"english": "Escape is… an illusion.",
						"japanese": "「脱出は…幻想だ。」",
						"chinese": "「逃脱是……幻象。」",
						"french": "« L'évasion est… une illusion. »",
						"spanish": "« La fuga es… una ilusión. »",
						"vietnamese": "« Lối thoát là… ảo ảnh. »",
						"thai": "« ทางหนีคือ…ภาพลวงตา »",
						"hindi": "« पलायन... एक भ्रम है। »"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 거짓의 실체인가?",
						"english": "Are you… the truth behind this lie?",
						"japanese": "「お前が…この偽りの正体か？」",
						"chinese": "「你就是……这个谎言的真相吗？」",
						"french": "« Es-tu… la vérité derrière ce mensonge ? »",
						"spanish": "« ¿Eres tú… la verdad detrás de esta mentira? »",
						"vietnamese": "« Ngươi… là thực thể của lời nói dối này sao? »",
						"thai": "« เจ้าคือ… ตัวตนที่แท้จริงของความหลอกลวงนี้หรือ? »",
						"hindi": "« क्या तुम... इस झूठ की सच्चाई हो? »"
					},
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이곳에서 영원히… 길을 잃어라.",
						"english": "Here, be lost forever…",
						"japanese": "「ここで永遠に…道に迷え。」",
						"chinese": "「在这里……永远迷失吧。」",
						"french": "« Ici, perds-toi à jamais… »",
						"spanish": "« Aquí, piérdete para siempre… »",
						"vietnamese": "« Hãy lạc lối mãi mãi… ở nơi này. »",
						"thai": "« จงหลงทางตลอดไป… ที่นี่ »",
						"hindi": "« यहाँ, हमेशा के लिए भटक जाओ... »"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "탈출은 없다. 너희는 여기서 영원히 방황할 것이다.",
						"english": "There is no escape. You will wander here forever.",
						"japanese": "「脱出はない。お前たちはここで永遠に彷徨うだろう。」",
						"chinese": "「没有逃脱。你们将在这里永远徘徊。」",
						"french": "« Il n'y a pas d'évasion. Vous errerez ici pour toujours. »",
						"spanish": "« No hay escape. Vagaréis aquí para siempre. »",
						"vietnamese": "« Không có lối thoát. Các ngươi sẽ lang thang ở đây mãi mãi. »",
						"thai": "« ไม่มีทางหนี เจ้าจะต้องร่อนเร่อยู่ที่นี่ตลอดไป »",
						"hindi": "« कोई पलायन नहीं है। तुम यहाँ हमेशा भटकते रहोगे। »"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진짜 길을 찾을 거야.",
						"english": "…It's not over yet. I'll find the real path.",
						"japanese": "「…まだ終わってない。本当の道を見つけるんだ。」",
						"chinese": "「……还没结束。我会找到真正的道路。」",
						"french": "« …Ce n'est pas encore fini. Je trouverai le vrai chemin. »",
						"spanish": "« …Todavía no ha terminado. Encontraré el camino real. »",
						"vietnamese": "« …Chưa kết thúc đâu. Ta sẽ tìm ra con đường thực sự. »",
						"thai": "« …ยังไม่จบ ฉันจะหาเส้นทางที่แท้จริงให้เจอ »",
						"hindi": "« …अभी खत्म नहीं हुआ है। मैं असली रास्ता ढूंढूंगा। »"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하하… 애쓴다. 그래도 계속 찾아봐. 난 재밌으니까.",
						"english": "Haha... You're trying so hard. Keep searching though. I'm amused.",
						"japanese": "ハハ… 頑張ってるね。それでも探しな。私は楽しいからさ。",
						"chinese": "哈哈… 真卖力。不过，接着找吧。我乐在其中。",
						"french": "Haha... Tu t'échines. Mais continue de chercher. C'est divertissant.",
						"spanish": "Jaja... Vaya esfuerzo. Pero sigue buscando. Me divierte.",
						"vietnamese": "Haha... Cố gắng đấy. Cứ tìm tiếp đi. Ta thấy vui.",
						"thai": "ฮ่าฮ่า... ขยันจริงนะ แต่ก็หาต่อไปเถอะ ฉันชอบดู",
						"hindi": "हाहा... बड़ी मशक्कत कर रहे हो। फिर भी ढूंढते रहो। मुझे तो मज़ा आ रहा है。"
					},
					"emotion": "base",
					"speaker": "bex"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "헛된 희망은… 더 큰 절망을 낳을 뿐.",
						"english": "Vain hope… only begets greater despair.",
						"japanese": "「無駄な希望は…さらなる絶望を生むだけだ。」",
						"chinese": "「徒劳的希望……只会滋生更大的绝望。」",
						"french": "« L'espoir vain… n'engendre qu'un désespoir plus grand. »",
						"spanish": "« La esperanza vana… solo engendra mayor desesperación. »",
						"vietnamese": "« Hy vọng hão huyền… chỉ sinh ra tuyệt vọng lớn hơn. »",
						"thai": "« ความหวังที่ไร้ค่า… มีแต่จะก่อให้เกิดความสิ้นหวังที่ยิ่งใหญ่กว่า »",
						"hindi": "« व्यर्थ आशा... केवल अधिक निराशा को जन्म देती है। »"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아니. 이 거짓을 끝낼 수 있어.",
						"english": "No. This lie can be ended.",
						"japanese": "「いや。この偽りを終わらせられる。」",
						"chinese": "「不。这个谎言可以被终结。」",
						"french": "« Non. Ce mensonge peut être brisé. »",
						"spanish": "« No. Esta mentira puede terminar. »",
						"vietnamese": "« Không. Lời nói dối này có thể kết thúc. »",
						"thai": "« ไม่. ความหลอกลวงนี้สามารถยุติลงได้ »",
						"hindi": "« नहीं। इस झूठ को खत्म किया जा सकता है। »"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "bex",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이야, 꽤 하는데? 하지만 진짜 '탈출'은 없어. 이제 깨달을 때도 됐잖아?",
						"english": "Oh, quite impressive, aren't you? But there's no real 'escape'. Isn't it time you realized that?",
						"japanese": "「ほう、なかなかやるな？だが、真の『脱出』などない。そろそろ気づいてもいい頃だろう？」",
						"chinese": "「哦，挺不错的嘛？但根本没有真正的‘逃脱’。你该醒悟了吧？」",
						"french": "« Oh, pas mal, n'est-ce pas ? Mais il n'y a pas de vraie « évasion ». N'est-il pas temps que tu le réalises ? »",
						"spanish": "« Oh, bastante impresionante, ¿no? Pero no hay 'fuga' real. ¿No es hora de que te des cuenta? »",
						"vietnamese": "« Chà, cũng khá đấy chứ? Nhưng chẳng có 'lối thoát' thực sự nào cả. Giờ là lúc ngươi nên nhận ra điều đó rồi chứ? »",
						"thai": "« โอ้โห, เก่งไม่เบาเลยนี่? แต่ไม่มี 'ทางหนี' ที่แท้จริงหรอกนะ ถึงเวลาที่เจ้าควรจะรู้แล้วไม่ใช่เหรอ? »",
						"hindi": "« वाह, तुम काफी प्रभावशाली हो, है ना? लेकिन कोई वास्तविक 'पलायन' नहीं है। अब तुम्हें यह महसूस कर लेना चाहिए, है ना? »"
					},
					"speaker": "bex"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "bex",
					"type": "direction",
					"direction": "down"
				},
				{
					"content": {
						"korean": "벡스는 유유히 사라졌다. 가짜 탈출은 막았지만, 또 다른 절망의 길이 이어질 것 같았다.",
						"english": "Vex vanished leisurely. The fake escape was thwarted, but another path of despair seemed to stretch ahead.",
						"japanese": "「ヴェックスは悠然と姿を消した。偽りの脱出は阻止したが、また別の絶望の道が続くようだった。」",
						"chinese": "「维克斯悠然地消失了。虽然阻止了虚假的逃脱，但似乎又有一条新的绝望之路在前方延伸。」",
						"french": "« Vex disparut tranquillement. La fausse évasion était contrecarrée, mais un autre chemin de désespoir semblait s'étendre. »",
						"spanish": "« Vex desapareció tranquilamente. La fuga falsa fue frustrada, pero otro camino de desesperación parecía extenderse. »",
						"vietnamese": "« Vex biến mất nhẹ nhàng. Lối thoát giả đã bị ngăn chặn, nhưng một con đường tuyệt vọng khác dường như lại mở ra. »",
						"thai": "« เว็กซ์หายไปอย่างเชื่องช้า ทางหนีปลอมถูกขัดขวาง แต่ดูเหมือนจะมีเส้นทางแห่งความสิ้นหวังอื่นรออยู่ข้างหน้า »",
						"hindi": "« वेक्स इत्मीनान से गायब हो गया। नकली पलायन विफल हो गया, लेकिन निराशा का एक और मार्ग आगे बढ़ता हुआ प्रतीत हुआ। »"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"희망은 산산조각 났다. '다음'은 없었다.",
			"그러나 어떤 이들은 아직도 '탈출'을 꿈꿨다.",
			"그 달콤한 유혹은, 가장 깊은 절망으로 가는 지도가 되었다.",
			"이곳은 모든 것을 집어삼키는 감옥이었다."
		],
		"english": [
			"Hope shattered. There was no 'next'.",
			"Yet, some still dreamed of 'escape'.",
			"That sweet temptation became a map to the deepest despair.",
			"This place was a prison that devoured everything."
		],
		"japanese": [
			"希望は砕け散った。'次'はなかった。",
			"しかし、一部の者はまだ'脱出'を夢見ていた。",
			"その甘い誘惑は、最も深い絶望への地図となった。",
			"ここはすべてを飲み込む監獄だった。"
		],
		"chinese": [
			"希望支离破碎。没有'下一次'。",
			"然而，一些人仍然梦想着'逃脱'。",
			"那甜蜜的诱惑，成为了通往最深绝望的地图。",
			"这里是一个吞噬一切的监狱。"
		],
		"french": [
			"L'espoir s'est brisé. Il n'y avait pas de 'suite'.",
			"Pourtant, certains rêvaient encore de 's'échapper'.",
			"Cette douce tentation devint une carte vers le désespoir le plus profond.",
			"Cet endroit était une prison qui dévorait tout."
		],
		"spanish": [
			"La esperanza se hizo añicos. No había un 'siguiente'.",
			"Sin embargo, algunos todavía soñaban con 'escapar'.",
			"Esa dulce tentación se convirtió en un mapa hacia la desesperación más profunda.",
			"Este lugar era una prisión que lo devoraba todo."
		],
		"vietnamese": [
			"Hy vọng tan vỡ. Chẳng có 'tiếp theo'.",
			"Tuy nhiên, một số người vẫn mơ về 'thoát hiểm'.",
			"Sự cám dỗ ngọt ngào ấy, đã trở thành bản đồ dẫn đến nỗi tuyệt vọng sâu thẳm nhất.",
			"Nơi đây là một nhà tù nuốt chửng mọi thứ."
		],
		"thai": [
			"ความหวังพังทลาย ไม่มี 'ครั้งหน้า' แล้ว",
			"ทว่า บางคนก็ยังคงฝันถึง 'การหลบหนี'",
			"สิ่งล่อใจอันหอมหวานนั้น ได้กลายเป็นแผนที่นำไปสู่ความสิ้นหวังที่ลึกที่สุด",
			"ที่แห่งนี้คือคุกที่กลืนกินทุกสิ่ง"
		],
		"hindi": [
			"आशाएँ बिखर गईं। कोई 'अगला' नहीं था।",
			"फिर भी, कुछ लोग अभी भी 'भागने' का सपना देखते थे।",
			"वह मधुर लालच, सबसे गहरी निराशा का मानचित्र बन गया।",
			"यह स्थान एक ऐसी जेल थी जो सब कुछ निगल जाती थी।"
		]
	}
} as const;
