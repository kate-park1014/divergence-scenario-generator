export const scenario_hell_glimmerghast_17_01 = {
	"scenario_id": "hell_glimmerghast_17_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"mara": {
			"id": "mon_94e5bffe-d3cd-4e5e-a174-633174784043",
			"name": {
				"korean": "마라",
				"english": "Mara",
				"japanese": "マーラ",
				"chinese": "玛拉",
				"french": "Mara",
				"spanish": "Mara",
				"vietnamese": "Mara",
				"thai": "มารา",
				"hindi": "मारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/801457b4-3ecc-41f5-e450-73d6ce8eb200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9bfac7d4-6bfd-49b0-5ba4-a25419c71400/public"
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
					"emotion": "base",
					"content": {
						"korean": "지옥의 폐허, 성소는 비명과 환영으로 가득했다.",
						"english": "Ruins of hell, the sanctuary filled with screams and illusions.",
						"japanese": "地獄の廃墟、聖域は悲鳴と幻影に満ちていた。",
						"chinese": "地狱废墟，圣所充斥着尖叫和幻象。",
						"french": "Ruines de l'enfer, le sanctuaire rempli de cris et d'illusions.",
						"spanish": "Ruinas del infierno, el santuario se llenó de gritos e ilusiones.",
						"vietnamese": "Tàn tích địa ngục, thánh địa tràn ngập tiếng thét và ảo ảnh.",
						"thai": "ซากปรักหักพังของนรก สถานที่ศักดิ์สิทธิ์เต็มไปด้วยเสียงกรีดร้องและภาพลวงตา",
						"hindi": "नरक के खंडहर, अभयारण्य चीखों और भ्रम से भरा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이게… 구원?",
						"english": "This is... salvation?",
						"japanese": "これが…救済？",
						"chinese": "这就是……救赎？",
						"french": "C'est... le salut ?",
						"spanish": "¿Esto es... salvación?",
						"vietnamese": "Đây là... sự cứu rỗi ư?",
						"thai": "นี่คือ... ความรอดหรือ?",
						"hindi": "क्या यह... मुक्ति है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "힘들었죠? 괜찮아요. 곧 모든 고통이 끝날 거예요.",
						"english": "It was hard, wasn't it? It's okay. All your suffering will end soon.",
						"japanese": "辛かったでしょう？大丈夫。もうすぐ全ての苦しみが終わるわ。",
						"chinese": "很辛苦吧？没关系。很快，所有的痛苦都将结束。",
						"french": "C'était difficile, n'est-ce pas ? Ça va. Toutes vos souffrances prendront bientôt fin.",
						"spanish": "Fue difícil, ¿verdad? Está bien. Todo tu sufrimiento terminará pronto.",
						"vietnamese": "Khó khăn lắm đúng không? Không sao đâu. Mọi đau khổ sẽ sớm kết thúc thôi.",
						"thai": "มันยากใช่ไหม? ไม่เป็นไร ความทุกข์ทรมานทั้งหมดจะสิ้นสุดลงในไม่ช้า",
						"hindi": "मुश्किल था, है ना? ठीक है। तुम्हारा सारा दर्द जल्द ही खत्म हो जाएगा।"
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "你是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Anh là...?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "마라예요. 길을 잃은 영혼들을 돕고 있죠. 당신도 절 찾았으니, 운이 좋네요.",
						"english": "I am Mara. I help lost souls. You found me, so you're lucky.",
						"japanese": "マラよ。道に迷った魂を助けているわ。あなたも私を見つけたんだから、運が良いわね。",
						"chinese": "我是玛拉。我帮助迷失的灵魂。你找到了我，所以你很幸运。",
						"french": "Je suis Mara. J'aide les âmes perdues. Vous m'avez trouvé, donc vous avez de la chance.",
						"spanish": "Soy Mara. Ayudo a las almas perdidas. Me encontraste, así que tienes suerte.",
						"vietnamese": "Tôi là Mara. Tôi giúp đỡ những linh hồn lạc lối. Anh tìm thấy tôi, vậy là anh may mắn đấy.",
						"thai": "ฉันคือมารา ฉันช่วยวิญญาณที่หลงทาง คุณเจอฉัน ดังนั้นคุณโชคดี",
						"hindi": "मैं मारा हूँ। मैं भटकी हुई आत्माओं की मदद करती हूँ। तुमने मुझे ढूंढ लिया, तो तुम भाग्यशाली हो।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왠지 모르게… 섬뜩해.",
						"english": "For some reason... it's chilling.",
						"japanese": "なぜか…ぞっとする。",
						"chinese": "不知为何……令人毛骨悚然。",
						"french": "Pour une raison ou une autre... c'est glaçant.",
						"spanish": "Por alguna razón... es escalofriante.",
						"vietnamese": "Không hiểu sao... thật rợn người.",
						"thai": "ไม่รู้ทำไม... มันน่าขนลุก",
						"hindi": "किसी कारण से... यह डरावना है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영 속 영혼들은 행복한 기억에 갇혀 있었다.",
						"english": "Souls in the illusion were trapped in happy memories.",
						"japanese": "幻影の中の魂は、幸せな記憶に囚われていた。",
						"chinese": "幻象中的灵魂被困在幸福的记忆里。",
						"french": "Les âmes dans l'illusion étaient piégées dans des souvenirs heureux.",
						"spanish": "Las almas en la ilusión estaban atrapadas en recuerdos felices.",
						"vietnamese": "Những linh hồn trong ảo ảnh bị mắc kẹt trong những ký ức hạnh phúc.",
						"thai": "วิญญาณในภาพลวงตาถูกขังอยู่ในความทรงจำที่มีความสุข",
						"hindi": "भ्रम में फँसी आत्माएँ सुखद यादों में कैद थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "mara",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "보세요. 얼마나 평화로운가요? 고통은 잠시, 행복은 영원.",
						"english": "See? So peaceful. Pain is fleeting, happiness eternal.",
						"japanese": "見て。なんて平和なの？苦痛は束の間、幸福は永遠。",
						"chinese": "看。多宁静？痛苦短暂，幸福永恒。",
						"french": "Regardez. Si paisible. La douleur est éphémère, le bonheur éternel.",
						"spanish": "Mira. Qué paz. El dolor es pasajero, la felicidad eterna.",
						"vietnamese": "Nhìn xem. Bình yên biết bao? Đau khổ chóng qua, hạnh phúc vĩnh cửu.",
						"thai": "ดูสิ ช่างสงบสุขเหลือเกิน ความเจ็บปวดนั้นชั่วคราว ความสุขนั้นนิรันดร์",
						"hindi": "देखो। कितनी शांति है? दर्द क्षणिक है, खुशी अनंत।"
					},
					"emotion": "happy"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 비명은 뭔데…?",
						"english": "What's that scream...?",
						"japanese": "あの悲鳴は何…？",
						"chinese": "那尖叫声是什么…？",
						"french": "C'est quoi ce cri...?",
						"spanish": "¿Qué es ese grito...?",
						"vietnamese": "Tiếng hét đó là gì vậy...?",
						"thai": "เสียงกรี๊ดนั่นคืออะไร...?",
						"hindi": "वह चीख क्या है...?"
					}
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "음? 사랑받는 이의 기쁨이 너무 커서 그래요. 이해할 수 없을 거예요.",
						"english": "Hmm? It's just the overwhelming joy of the beloved. You wouldn't understand.",
						"japanese": "ん？愛される者の喜びが大きすぎるだけ。あなたには理解できないでしょう。",
						"chinese": "嗯？只是被爱者的喜悦太强烈。你不会懂的。",
						"french": "Hmm ? C'est juste l'immense joie de l'être aimé. Vous ne comprendriez pas.",
						"spanish": "¿Hm? Es la inmensa alegría del ser amado. No lo entenderías.",
						"vietnamese": "Hả? Chỉ là niềm vui quá lớn của người được yêu thôi. Ngươi sẽ không hiểu đâu.",
						"thai": "หืม? ก็แค่ความสุขล้นปรี่ของผู้เป็นที่รักน่ะ เธอคงไม่เข้าใจหรอก",
						"hindi": "हम्म्? यह तो बस प्रियजनों का अत्यधिक आनंद है। तुम समझ नहीं पाओगे।"
					},
					"emotion": "happy"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "행복한 기억? 조각난 거울이 진짜 행복을 비춘다고?",
						"english": "Happy memories? A shattered mirror reflects true happiness?",
						"japanese": "幸せな記憶？砕けた鏡が本当の幸せを映し出すって？",
						"chinese": "幸福的记忆？破碎的镜子能映照出真正的幸福？",
						"french": "Des souvenirs heureux ? Un miroir brisé reflète le vrai bonheur ?",
						"spanish": "¿Recuerdos felices? ¿Un espejo roto refleja la verdadera felicidad?",
						"vietnamese": "Ký ức hạnh phúc? Một tấm gương vỡ lại phản chiếu hạnh phúc thật sao?",
						"thai": "ความทรงจำที่มีความสุขเหรอ? กระจกที่แตกสะท้อนความสุขที่แท้จริงงั้นเหรอ?",
						"hindi": "खुशहाल यादें? एक टूटा हुआ दर्पण सच्ची खुशी को दर्शाता है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "물론이죠. 때론 부서진 조각이 더 선명할 때도 있죠.",
						"english": "Of course. Sometimes, shattered pieces show more clearly.",
						"japanese": "もちろん。時には、壊れた破片の方が鮮明に見えることもあります。",
						"chinese": "当然。有时，破碎的碎片反而更清晰。",
						"french": "Bien sûr. Parfois, les fragments brisés sont plus clairs.",
						"spanish": "Claro. A veces, los pedazos rotos muestran más claramente.",
						"vietnamese": "Tất nhiên rồi. Đôi khi, những mảnh vỡ lại hiện rõ hơn.",
						"thai": "แน่นอน บางครั้งเศษที่แตกหักก็ชัดเจนยิ่งกว่า",
						"hindi": "बेशक। कभी-कभी, टूटे हुए टुकड़े अधिक स्पष्ट होते हैं।"
					},
					"speaker": "mara",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "환영은 더 깊어졌다. 달콤한 절규가 영혼을 잠식했다.",
						"english": "The illusion deepened. Sweet screams consumed the soul.",
						"japanese": "幻影はさらに深まった。甘美な絶叫が魂を蝕んだ。",
						"chinese": "幻象更深了。甜美的尖叫吞噬了灵魂。",
						"french": "L'illusion s'intensifia. Les doux cris consumèrent l'âme.",
						"spanish": "La ilusión se hizo más profunda. Dulces gritos consumieron el alma.",
						"vietnamese": "Ảo ảnh càng sâu sắc. Những tiếng thét ngọt ngào đã nuốt chửng linh hồn.",
						"thai": "ภาพลวงตาเริ่มลึกซึ้งขึ้น เสียงกรีดร้องอันหอมหวานกลืนกินจิตวิญญาณ",
						"hindi": "भ्रम गहरा गया। मधुर चीखों ने आत्मा को निगल लिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "저 영혼… 스스로 목을 조르고 있어.",
						"english": "That soul... it's strangling itself.",
						"japanese": "あの魂…自ら首を絞めているわ。",
						"chinese": "那个灵魂…它在掐死自己。",
						"french": "Cette âme... elle s'étrangle elle-même.",
						"spanish": "Esa alma... se está estrangulando a sí misma.",
						"vietnamese": "Linh hồn đó... đang tự bóp cổ chính mình.",
						"thai": "วิญญาณนั้น...กำลังบีบคอตัวเองอยู่",
						"hindi": "वह आत्मा... खुद का गला घोंट रही है।"
					}
				},
				{
					"content": {
						"korean": "아름답죠? 가장 사랑했던 이에게 안기는 환영이랍니다.",
						"english": "Beautiful, isn't it? It's an illusion of embracing the one you loved most.",
						"japanese": "美しいでしょう？一番愛した人に抱かれる幻影なのよ。",
						"chinese": "很美，不是吗？那是拥抱挚爱的幻象。",
						"french": "C'est magnifique, n'est-ce pas ? C'est l'illusion d'enlacer votre être le plus cher.",
						"spanish": "Hermoso, ¿verdad? Es una ilusión de abrazar a quien más amaste.",
						"vietnamese": "Đẹp lắm chứ? Đó là ảo ảnh được ôm lấy người mình yêu thương nhất đấy.",
						"thai": "สวยงามใช่ไหมล่ะ? มันคือภาพลวงตาของการได้กอดคนที่คุณรักที่สุด",
						"hindi": "सुंदर है, है ना? यह सबसे प्यारे व्यक्ति को गले लगाने का भ्रम है।"
					},
					"emotion": "happy",
					"type": "speech",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "그게 구원이라고? 거짓말!",
						"english": "That's salvation? Lies!",
						"japanese": "それが救済だと？嘘だ！",
						"chinese": "那就是救赎？骗人！",
						"french": "C'est ça le salut ? Mensonge !",
						"spanish": "¿Eso es salvación? ¡Mentira!",
						"vietnamese": "Đó là sự cứu rỗi sao? Dối trá!",
						"thai": "นั่นคือการไถ่บาปเหรอ? โกหก!",
						"hindi": "क्या वह मोक्ष है? झूठ!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…진실은 원래 보기 싫은 법이죠.",
						"english": "...The truth is often something one doesn't want to see.",
						"japanese": "…真実って、元々見たくないものだろ？",
						"chinese": "…真相本来就是让人不想看的。",
						"french": "...La vérité est souvent quelque chose qu'on ne veut pas voir.",
						"spanish": "...La verdad es algo que no se quiere ver.",
						"vietnamese": "...Sự thật vốn dĩ khó nhìn.",
						"thai": "...ความจริงก็มักจะเป็นสิ่งที่ไม่อยากเห็นอยู่แล้ว",
						"hindi": "...सच अक्सर देखना अच्छा नहीं लगता।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "길은 끝없이 이어졌다. 환영은 출구가 없는 미로였다.",
						"english": "The path stretched endlessly. This illusion was a maze with no exit.",
						"japanese": "道は果てしなく続いていた。この幻影は出口のない迷路だった。",
						"chinese": "道路无止境地延伸。这幻象是一个没有出口的迷宫。",
						"french": "Le chemin s'étendait à l'infini. Cette illusion était un labyrinthe sans issue.",
						"spanish": "El camino se extendía sin fin. Esta ilusión era un laberinto sin salida.",
						"vietnamese": "Con đường kéo dài vô tận. Ảo ảnh này là một mê cung không lối thoát.",
						"thai": "เส้นทางทอดยาวไม่มีที่สิ้นสุด ภาพลวงตานี้คือเขาวงกตที่ไม่มีทางออก",
						"hindi": "रास्ता अंतहीन फैला हुआ था। यह भ्रम एक भूलभुलैया थी जिसका कोई निकास नहीं था।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"speaker": "mara",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이건 함정이야. 돌아가야 해.",
						"english": "This is a trap. I have to go back.",
						"japanese": "これは罠だ。引き返さないと。",
						"chinese": "这是一个陷阱。我必须回去。",
						"french": "C'est un piège. Je dois faire demi-tour.",
						"spanish": "Esto es una trampa. Tengo que volver.",
						"vietnamese": "Đây là một cái bẫy. Tôi phải quay lại.",
						"thai": "นี่คือกับดัก ฉันต้องกลับไป",
						"hindi": "यह एक जाल है। मुझे वापस जाना होगा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "돌아갈 곳은 없어요. 오직 여기, 글리머개스트의 품만이 진짜 구원이죠.",
						"english": "There's no going back. Only here, in Glimmergast's embrace, is true salvation.",
						"japanese": "もう引き返せない。グリマーギャストの腕の中だけが、真の救済です。",
						"chinese": "无法回头了。只有在这里，在微光幽灵的怀抱中，才有真正的救赎。",
						"french": "Il n'y a pas de retour possible. Seul ici, dans l'étreinte de Glimmergast, se trouve le vrai salut.",
						"spanish": "No hay vuelta atrás. Solo aquí, en el abrazo de Glimmergast, está la verdadera salvación.",
						"vietnamese": "Không thể quay lại. Chỉ ở đây, trong vòng tay của Glimmergast, mới là sự cứu rỗi thực sự.",
						"thai": "ไม่มีทางกลับไปแล้ว มีเพียงที่นี่ ในอ้อมกอดของกลิมเมอร์กาสต์ คือความรอดที่แท้จริง",
						"hindi": "कोई वापसी नहीं है। केवल यहीं, ग्लिमरगास्ट के आलिंगन में, सच्चा उद्धार है।"
					},
					"speaker": "mara",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "가끔 비명 속에서, 슬픈 노래가 들려… 거울에 대한….",
						"english": "Sometimes, amidst the screams, I hear a sad song... about a mirror...",
						"japanese": "時々、叫び声の中で、悲しい歌が聞こえる…鏡についての…。",
						"chinese": "有时，在尖叫声中，我听到一首悲伤的歌……关于一面镜子……",
						"french": "Parfois, au milieu des cris, j'entends une triste chanson... à propos d'un miroir...",
						"spanish": "A veces, entre los gritos, escucho una triste canción... sobre un espejo...",
						"vietnamese": "Đôi khi, giữa những tiếng la hét, tôi nghe thấy một bài hát buồn... về một tấm gương...",
						"thai": "บางครั้งท่ามกลางเสียงกรีดร้อง ฉันได้ยินเพลงเศร้า...เกี่ยวกับกระจก...",
						"hindi": "कभी-कभी, चीखों के बीच, मुझे एक दुखद गीत सुनाई देता है... एक दर्पण के बारे में..."
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "mara",
					"content": {
						"korean": "…그건 잠시의 착각일 뿐. 곧 익숙해질 거예요.",
						"english": "...That's just a fleeting illusion. You'll get used to it soon.",
						"japanese": "…それは一時の錯覚に過ぎません。すぐに慣れますよ。",
						"chinese": "……那只是一时的错觉。你很快就会习惯的。",
						"french": "...Ce n'est qu'une illusion éphémère. Vous vous y habituerez bientôt.",
						"spanish": "...Eso es solo una ilusión fugaz. Pronto te acostumbrarás.",
						"vietnamese": "...Đó chỉ là một ảo ảnh thoáng qua. Bạn sẽ quen với nó sớm thôi.",
						"thai": "...นั่นเป็นเพียงภาพลวงตาชั่วขณะ คุณจะชินกับมันในไม่ช้า",
						"hindi": "...वह बस एक क्षणिक भ्रम है। आपको जल्द ही इसकी आदत हो जाएगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네 미소가 더 끔찍해.",
						"english": "Your smile is more terrifying.",
						"japanese": "君の笑顔の方がもっと恐ろしい。",
						"chinese": "你的笑容更可怕。",
						"french": "Ton sourire est plus terrifiant.",
						"spanish": "Tu sonrisa es más aterradora.",
						"vietnamese": "Nụ cười của bạn còn đáng sợ hơn.",
						"thai": "รอยยิ้มของคุณน่ากลัวยิ่งกว่า",
						"hindi": "आपकी मुस्कान अधिक भयावह है।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 뒤틀린 환영의 결정체였다.",
						"english": "A colossal shadow blocked the path. It was a twisted crystallization of illusion.",
						"japanese": "巨大な影が道を塞いだ。それは歪んだ幻影の結晶だった。",
						"chinese": "一道巨大的阴影挡住了去路。那是扭曲幻象的结晶。",
						"french": "Une ombre colossale bloquait le chemin. C'était une cristallisation tordue de l'illusion.",
						"spanish": "Una sombra colosal bloqueaba el camino. Era una cristalización retorcida de la ilusión.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Đó là sự kết tinh méo mó của ảo ảnh.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือผลึกแห่งภาพลวงตาที่บิดเบี้ยว",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह भ्रम का एक विकृत क्रिस्टलीकरण था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"speaker": "mara",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저 괴물은 당신의 길을 방해할 거예요. 해치워야 해요.",
						"english": "That monster will hinder your path. You must defeat it.",
						"japanese": "あの怪物はあなたの邪魔をするでしょう。倒さなければなりません。",
						"chinese": "那个怪物会阻碍你的道路。你必须打败它。",
						"french": "Ce monstre entravera votre chemin. Vous devez le vaincre.",
						"spanish": "Ese monstruo obstaculizará tu camino. Debes derrotarlo.",
						"vietnamese": "Con quái vật đó sẽ cản trở con đường của bạn. Bạn phải đánh bại nó.",
						"thai": "สัตว์ประหลาดตัวนั้นจะขัดขวางเส้นทางของคุณ คุณต้องกำจัดมัน",
						"hindi": "वह राक्षस आपके रास्ते में बाधा डालेगा। आपको उसे हराना होगा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것들. 환영의 평화를 거부하다니.",
						"english": "Fools. To reject the peace of illusion.",
						"japanese": "愚か者め。幻影の平和を拒むとは。",
						"chinese": "愚蠢的东西。竟敢拒绝幻象的和平。",
						"french": "Fous. Rejeter la paix de l'illusion.",
						"spanish": "Tontos. Rechazar la paz de la ilusión.",
						"vietnamese": "Những kẻ ngu ngốc. Dám từ chối sự bình yên của ảo ảnh.",
						"thai": "คนโง่เง่า การปฏิเสธสันติภาพแห่งภาพลวงตา",
						"hindi": "मूर्ख। भ्रम की शांति को अस्वीकार करना।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "평화? 이건 고통이야!",
						"english": "Peace? This is pain!",
						"japanese": "平和？これは苦痛だ！",
						"chinese": "和平？这是痛苦！",
						"french": "La paix ? C'est de la douleur !",
						"spanish": "¿Paz? ¡Esto es dolor!",
						"vietnamese": "Hòa bình ư? Đây là nỗi đau!",
						"thai": "สันติภาพ? นี่คือความเจ็บปวด!",
						"hindi": "शांति? यह दर्द है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그래요. 그러니 저 괴물을 부수고 진정한 평화를 찾아요. 난 여기 있을게요.",
						"english": "Yes. So defeat that monster and find true peace. I'll be here.",
						"japanese": "ええ。あの怪物を倒して、真の平和を見つけなさい。私はここにいますから。",
						"chinese": "是的。所以去击败那个怪物，找到真正的和平吧。我会在这里等你。",
						"french": "Oui. Détruisez ce monstre et trouvez la vraie paix. Je serai là.",
						"spanish": "Sí. Así que derrota a ese monstruo y encuentra la verdadera paz. Yo estaré aquí.",
						"vietnamese": "Vâng. Vậy hãy đánh bại quái vật đó và tìm thấy bình yên thực sự. Tôi sẽ ở đây.",
						"thai": "ใช่แล้ว ดังนั้นจงโค่นสัตว์ประหลาดนั่นลงแล้วค้นหาสันติสุขที่แท้จริงเถอะ ฉันจะอยู่ที่นี่เอง",
						"hindi": "हाँ। तो उस राक्षस को हराओ और सच्ची शांति पाओ। मैं यहीं रहूँगा।"
					}
				},
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "mara"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "흥. 날 쓰러뜨린다고 달라질 줄 아느냐.",
						"english": "Hmph. Do you really think defeating me will change anything?",
						"japanese": "ふん。私を倒したところで、何が変わるというのだ？",
						"chinese": "哼。你以为打败我就会有什么改变吗？",
						"french": "Hmph. Crois-tu que me vaincre changera quoi que ce soit ?",
						"spanish": "Hmph. ¿De verdad crees que derribarme cambiará algo?",
						"vietnamese": "Hừm. Ngươi nghĩ hạ gục ta sẽ thay đổi được gì sao?",
						"thai": "หึ เจ้าคิดว่าการโค่นข้าลงจะเปลี่ยนอะไรได้งั้นรึ",
						"hindi": "हम्म। क्या तुम्हें लगता है कि मुझे हराने से कुछ बदलेगा?"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "크윽… 헛된 몸부림… 글리머개스트의 환영은… 영원히…",
						"english": "Ugh... Vain struggle... The illusion of Glimmerghast... forever...",
						"japanese": "くっ… 無駄な足掻き… グリマーギャストの幻影は… 永遠に…",
						"chinese": "呃… 徒劳的挣扎… 闪光幽魂的幻影… 永恒不灭…",
						"french": "Ugh... Lutte vaine... L'illusion de Glimmerghast... pour toujours...",
						"spanish": "Ugh... Lucha inútil... La ilusión de Glimmerghast... por siempre...",
						"vietnamese": "Khặc... Vùng vẫy vô ích... Ảo ảnh của Glimmerghast... vĩnh viễn...",
						"thai": "อึก... ดิ้นรนไร้ค่า... ภาพมายาของกลิมเมอร์แกสต์... ชั่วนิรันดร์...",
						"hindi": "उफ़... व्यर्थ संघर्ष... ग्लिमरघस्ट का भ्रम... हमेशा के लिए..."
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "글리머개스트…?",
						"english": "Glimmerghast...?",
						"japanese": "グリマーギャスト…？",
						"chinese": "闪光幽魂…？",
						"french": "Glimmerghast... ?",
						"spanish": "¿Glimmerghast...?",
						"vietnamese": "Glimmerghast...?",
						"thai": "กลิมเมอร์แกสต์...?",
						"hindi": "ग्लिमरघस्ट...?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영의 괴물은 스러졌다. 그러나 짙은 어둠은 물러가지 않았다.",
						"english": "The monster of illusion fell. But the deep darkness did not recede.",
						"japanese": "幻影の怪物は滅びた。しかし、深い闇は晴れなかった。",
						"chinese": "幻影怪物已消逝。然而，浓厚的黑暗并未退去。",
						"french": "Le monstre illusoire est tombé. Mais l'obscurité profonde n'a pas reculé.",
						"spanish": "El monstruo de la ilusión cayó. Pero la densa oscuridad no se retiró.",
						"vietnamese": "Quái vật ảo ảnh đã gục ngã. Nhưng bóng tối dày đặc vẫn không tan.",
						"thai": "สัตว์ประหลาดแห่งภาพลวงตาได้ล้มลงแล้ว แต่ความมืดมิดอันหนาทึบกลับไม่ถอยหนีไป",
						"hindi": "भ्रम का राक्षस गिर गया। लेकिन घना अंधेरा नहीं हटा।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "마라의 미소는 여전히 아른거렸다. 구원일까, 그림자일까.",
						"english": "Mara's smile still flickered. Salvation, or a shadow?",
						"japanese": "マーラの微笑みはまだ揺らめいていた。救済か、それとも影か。",
						"chinese": "玛拉的微笑依然若隐若现。是救赎，还是阴影？",
						"french": "Le sourire de Mara persistait. Salut ou ombre ?",
						"spanish": "La sonrisa de Mara aún parpadeaba. ¿Salvación o una sombra?",
						"vietnamese": "Nụ cười của Mara vẫn còn lấp lánh. Là cứu rỗi, hay là bóng tối?",
						"thai": "รอยยิ้มของมารายังคงปรากฏรางๆ มันคือความรอดหรือเงา?",
						"hindi": "मारा की मुस्कान अभी भी टिमटिमा रही थी। मोक्ष, या एक छाया?"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "절망하라. 너희도 곧 환영이 될 것이다.",
						"english": "Despair. You too shall soon become illusions.",
						"japanese": "絶望しろ。お前たちもじきに幻影となるだろう。",
						"chinese": "绝望吧。你们也将很快化为幻影。",
						"french": "Désespérez. Vous deviendrez bientôt des illusions.",
						"spanish": "Desesperad. Vosotros también os convertiréis pronto en ilusiones.",
						"vietnamese": "Hãy tuyệt vọng đi. Các ngươi cũng sẽ sớm trở thành ảo ảnh thôi.",
						"thai": "จงสิ้นหวังเถิด พวกเจ้าก็จะกลายเป็นภาพลวงตาในไม่ช้า",
						"hindi": "निराश हो जाओ। तुम भी जल्द ही भ्रम बन जाओगे।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아니… 난 아직 끝나지 않았어.",
						"english": "No... I'm not finished yet.",
						"japanese": "いや… まだ終わってない…",
						"chinese": "不… 我还没有结束。",
						"french": "Non... Je n'ai pas encore fini.",
						"spanish": "No... Todavía no he terminado.",
						"vietnamese": "Không... Ta vẫn chưa kết thúc.",
						"thai": "ไม่... ฉันยังไม่จบ",
						"hindi": "नहीं... मैं अभी खत्म नहीं हुआ।"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "mara",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "괜찮아요. 다시 시작하면 돼요. 구원은 늘 당신 곁에 있으니까.",
						"english": "It's alright. You can start again. Salvation is always by your side.",
						"japanese": "大丈夫です。また始めればいい。救いはいつもあなたのそばにありますから。",
						"chinese": "没关系。可以重新开始。救赎总是在你身边。",
						"french": "Ça va. Vous pouvez recommencer. Le salut est toujours à vos côtés.",
						"spanish": "Está bien. Puedes empezar de nuevo. La salvación siempre está a tu lado.",
						"vietnamese": "Không sao đâu. Chúng ta có thể bắt đầu lại. Sự cứu rỗi luôn ở bên bạn.",
						"thai": "ไม่เป็นไรหรอกนะ เริ่มใหม่ได้เสมอ ความรอดจะอยู่เคียงข้างคุณเสมอ",
						"hindi": "ठीक है। तुम फिर से शुरू कर सकते हो। मोक्ष हमेशा तुम्हारे साथ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거울은 산산이 부서졌다. 진실도 조각났다.",
			"지옥의 입구. 희망은 환영이 되고, 고통은 미소가 되었다.",
			"모든 빛이 왜곡된 곳. 구원을 속삭이는 미소 뒤, 섬뜩한 어둠이 드리웠다."
		],
		"english": [
			"The mirror shattered. Truth, fragmented.",
			"Gateway to hell. Hope became illusion, pain, a smile.",
			"Where all light warps. Behind a smile whispering salvation, a chilling darkness loomed."
		],
		"japanese": [
			"鏡は砕け散った。真実もまた、粉々になった。",
			"地獄の入り口。希望は幻となり、苦痛は微笑みとなった。",
			"全ての光が歪む場所。救済を囁く笑顔の裏に、恐ろしい闇が迫っていた。"
		],
		"chinese": [
			"镜子碎裂，真相亦成碎片。",
			"地狱之门。希望化为幻象，痛苦变成微笑。",
			"光线扭曲之地。低语救赎的微笑背后，是令人毛骨悚然的黑暗。"
		],
		"french": [
			"Le miroir se brisa en mille éclats. La vérité, fragmentée.",
			"Porte de l'enfer. L'espoir devint illusion, la douleur, un sourire.",
			"Là où toute lumière se déforme. Derrière un sourire murmurant le salut, une obscurité glaçante planait."
		],
		"spanish": [
			"El espejo se hizo añicos. La verdad, fragmentada.",
			"Entrada al infierno. La esperanza se volvió ilusión, el dolor, una sonrisa.",
			"Donde toda luz se distorsiona. Tras una sonrisa que susurraba salvación, una oscuridad escalofriante se cernía."
		],
		"vietnamese": [
			"Gương vỡ tan tành. Sự thật cũng vậy, vụn vỡ.",
			"Cổng địa ngục. Hy vọng hóa ảo ảnh, nỗi đau biến thành nụ cười.",
			"Nơi mọi ánh sáng bị bóp méo. Đằng sau nụ cười thì thầm sự cứu rỗi, một bóng tối lạnh lẽo bao trùm."
		],
		"thai": [
			"กระจกแตกละเอียด ความจริงก็แตกเป็นเสี่ยงๆ",
			"ประตูสู่นรก ความหวังกลายเป็นภาพลวงตา ความเจ็บปวดกลายเป็นรอยยิ้ม",
			"ที่ซึ่งแสงทุกอย่างบิดเบี้ยว เบื้องหลังรอยยิ้มที่กระซิบถึงความรอด ความมืดมิดที่น่าขนลุกคืบคลาน"
		],
		"hindi": [
			"दर्पण टूट गया। सत्य भी खंडित हो गया।",
			"नरक का द्वार। आशा भ्रम बन गई, दर्द, एक मुस्कान।",
			"जहाँ सारी रोशनी विकृत हो जाती है। मुक्ति फुसफुसाती मुस्कान के पीछे, एक भयावह अँधेरा छा गया।"
		]
	}
} as const;
