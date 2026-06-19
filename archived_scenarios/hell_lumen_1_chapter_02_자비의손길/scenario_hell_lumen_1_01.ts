export const scenario_hell_lumen_1_01 = {
	"scenario_id": "hell_lumen_1_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥의 심장부. 끝없는 비명이 메아리쳤다.",
						"english": "The heart of Hell. Endless screams echoed.",
						"japanese": "地獄の心臓部。終わりなき悲鳴が木霊した。",
						"chinese": "地狱深处。无尽的尖叫声回荡着。",
						"french": "Le cœur de l'Enfer. Des cris infinis résonnaient.",
						"spanish": "El corazón del Infierno. Gritos interminables resonaban.",
						"vietnamese": "Trái tim Địa ngục. Những tiếng thét không ngừng vang vọng.",
						"thai": "ใจกลางนรก เสียงกรีดร้องไม่สิ้นสุดดังก้อง",
						"hindi": "नर्क का हृदय। अंतहीन चीखें गूँज उठीं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…여기까지 왔군.",
						"english": "...You've made it this far.",
						"japanese": "…ここまで来たか。",
						"chinese": "...你走到这儿了。",
						"french": "...Tu es venu jusqu'ici.",
						"spanish": "...Has llegado hasta aquí.",
						"vietnamese": "...Ngươi đã đến được đây.",
						"thai": "…เจ้ามาถึงนี่แล้วสินะ",
						"hindi": "...तुम इतनी दूर आ गए।"
					}
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "char",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "상처가… 아물지 않아.",
						"english": "My wounds... they won't heal.",
						"japanese": "傷が…癒えない。",
						"chinese": "伤口…无法愈合。",
						"french": "Mes blessures... elles ne guérissent pas.",
						"spanish": "Mis heridas... no sanan.",
						"vietnamese": "Vết thương của ta… không lành.",
						"thai": "บาดแผลของข้า… ไม่ยอมหาย",
						"hindi": "मेरे घाव... वे ठीक नहीं हो रहे।"
					}
				},
				{
					"content": {
						"korean": "괜찮아? 버틸 수 있겠어?",
						"english": "Are you alright? Can you hold on?",
						"japanese": "大丈夫か？持ちこたえられるか？",
						"chinese": "你还好吗？能撑住吗？",
						"french": "Ça va ? Tu peux tenir le coup ?",
						"spanish": "¿Estás bien? ¿Puedes aguantar?",
						"vietnamese": "Ngươi ổn không? Có thể chịu đựng được chứ?",
						"thai": "เจ้าไม่เป็นไรนะ? พอจะทนได้ไหม?",
						"hindi": "क्या तुम ठीक हो? क्या तुम सह पाओगे?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사제에게 가면… 나아질 거야.",
						"english": "If we go to the priest... we'll get better.",
						"japanese": "司祭のところへ行けば…良くなるはずだ。",
						"chinese": "去找牧师的话…就会好起来的。",
						"french": "Si nous allons voir le prêtre... nous irons mieux.",
						"spanish": "Si vamos al sacerdote... mejoraremos.",
						"vietnamese": "Nếu chúng ta đến gặp linh mục… sẽ tốt hơn thôi.",
						"thai": "ถ้าไปหานักบวช… มันจะดีขึ้น",
						"hindi": "अगर हम पुजारी के पास जाएँगे... तो हम बेहतर हो जाएँगे।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 정말 구원일까.",
						"english": "Is that truly salvation?",
						"japanese": "それは本当に救いなのか？",
						"chinese": "那真的是救赎吗？",
						"french": "Est-ce vraiment le salut ?",
						"spanish": "¿Es eso realmente la salvación?",
						"vietnamese": "Đó có thực sự là sự cứu rỗi không?",
						"thai": "นั่นคือความรอดจริงหรือเปล่า?",
						"hindi": "क्या यह सचमुच मोक्ष है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…지금은 믿고 싶어.",
						"english": "...For now, I want to believe.",
						"japanese": "…今は、信じたい。",
						"chinese": "……我现在想相信。",
						"french": "...Pour l'instant, je veux y croire.",
						"spanish": "...Por ahora, quiero creer.",
						"vietnamese": "...Bây giờ, tôi muốn tin.",
						"thai": "...ตอนนี้ ฉันอยากจะเชื่อ.",
						"hindi": "…अभी मैं विश्वास करना चाहता हूँ।"
					},
					"speaker": "char",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "char",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고통이 사라진 자들의 모습. 그들은 평온했다.",
						"english": "Those free from pain. They were serene.",
						"japanese": "苦しみが消えた者たちの姿。彼らは穏やかだった。",
						"chinese": "痛苦消失之人的样子。他们很平静。",
						"french": "Ceux dont la douleur a disparu. Ils étaient sereins.",
						"spanish": "La apariencia de aquellos cuyo dolor ha desaparecido. Estaban en paz.",
						"vietnamese": "Dáng vẻ của những người không còn đau khổ. Họ thật bình yên.",
						"thai": "รูปลักษณ์ของผู้ที่ความเจ็บปวดหายไป พวกเขาดูสงบเงียบ.",
						"hindi": "जिन लोगों का दर्द मिट गया था, वे शांत थे।"
					}
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "봐. 저 사람들… 고통이 없잖아.",
						"english": "Look. Those people... they're free from pain.",
						"japanese": "見て。あの人たち…苦しんでないよ。",
						"chinese": "看。那些人……没有痛苦。",
						"french": "Regarde. Ces gens... ils n'ont pas de douleur.",
						"spanish": "Mira. Esa gente... no tienen dolor.",
						"vietnamese": "Nhìn kìa. Những người đó... họ không đau khổ.",
						"thai": "ดูสิ. คนพวกนั้น... พวกเขาไม่มีความเจ็บปวดเลย.",
						"hindi": "देखो। उन लोगों को… कोई दर्द नहीं है।"
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "근데… 눈이 좀 이상해.",
						"english": "But... their eyes are a bit odd.",
						"japanese": "でも…目が少し変だ。",
						"chinese": "可是……他们的眼睛有点奇怪。",
						"french": "Mais... leurs yeux sont un peu étranges.",
						"spanish": "Pero... sus ojos son un poco extraños.",
						"vietnamese": "Nhưng... mắt họ hơi lạ.",
						"thai": "แต่ว่า... ดวงตาของพวกเขาดูแปลกๆ.",
						"hindi": "लेकिन… उनकी आँखें थोड़ी अजीब हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "아무것도 안 담겨 있는 것 같아.",
						"english": "It's like they hold nothing.",
						"japanese": "何も映ってないみたいだ。",
						"chinese": "好像什么都没有。",
						"french": "On dirait qu'il n'y a rien dedans.",
						"spanish": "Parece que no hay nada en ellos.",
						"vietnamese": "Dường như không có gì trong đó cả.",
						"thai": "เหมือนไม่มีอะไรอยู่ในนั้นเลย.",
						"hindi": "ऐसा लगता है कि उनमें कुछ भी नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아마도… 평온해서 그런 거겠지.",
						"english": "Perhaps... it's because of their serenity.",
						"japanese": "多分…穏やかだからだろう。",
						"chinese": "也许……是因为平静吧。",
						"french": "Peut-être... est-ce dû à leur sérénité.",
						"spanish": "Quizás... sea por su paz.",
						"vietnamese": "Chắc là... vì họ bình yên.",
						"thai": "อาจจะ... เป็นเพราะความสงบของพวกเขา.",
						"hindi": "शायद… ऐसा शांति के कारण होगा।"
					},
					"speaker": "char",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "나도 저렇게 되고 싶어.",
						"english": "I want to be like that too.",
						"japanese": "私もあんな風になりたい。",
						"chinese": "我也想变成那样。",
						"french": "Moi aussi, je veux être comme ça.",
						"spanish": "Yo también quiero ser así.",
						"vietnamese": "Tôi cũng muốn được như vậy.",
						"thai": "ฉันก็อยากจะเป็นแบบนั้นบ้าง.",
						"hindi": "मैं भी वैसा ही बनना चाहता हूँ।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "char",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "내 상처가… 더 깊어지는 것 같아.",
						"english": "My wound... seems to deepen.",
						"japanese": "私の傷が…もっと深くなるようだ。",
						"chinese": "我的伤口……好像更深了。",
						"french": "Ma blessure... semble s'aggraver.",
						"spanish": "Mi herida... parece hacerse más profunda.",
						"vietnamese": "Vết thương của tôi... hình như đang sâu hơn.",
						"thai": "บาดแผลของฉัน... ดูเหมือนจะลึกขึ้น.",
						"hindi": "मेरा घाव… गहरा होता जा रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "조금 더 참아봐. 왠지 불길해.",
						"english": "Hold on a little longer. I have a bad feeling.",
						"japanese": "もう少し我慢して。何か不吉な予感がする。",
						"chinese": "再忍耐一下。总觉得有些不详。",
						"french": "Supporte encore un peu. J'ai un mauvais pressentiment.",
						"spanish": "Soporta un poco más. Tengo un mal presentimiento.",
						"vietnamese": "Cố chịu thêm chút nữa đi. Tôi có linh cảm chẳng lành.",
						"thai": "อดทนอีกนิดนะ. ฉันรู้สึกไม่ดีเลย.",
						"hindi": "थोड़ा और सह लो। मुझे कुछ अशुभ लग रहा है।"
					}
				},
				{
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "불길하든 말든… 이 고통은 싫어.",
						"english": "Ominous or not... I hate this pain.",
						"japanese": "不吉だろうと…この苦痛は嫌だ。",
						"chinese": "无论是否不祥……我厌恶这份痛苦。",
						"french": "De mauvais augure ou non... je déteste cette douleur.",
						"spanish": "Sea ominoso o no... odio este dolor.",
						"vietnamese": "Dù có điềm gở hay không... ta ghét sự đau đớn này.",
						"thai": "ไม่ว่าจะลางร้ายหรือไม่... ข้าเกลียดความเจ็บปวดนี้",
						"hindi": "अशुभ हो या न हो... मुझे यह पीड़ा पसंद नहीं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "평온한 자들의 미소. 그들은 아무것도 원하지 않았다.",
						"english": "The smiles of the serene. They desired nothing.",
						"japanese": "平穏な者たちの微笑み。彼らは何も望まなかった。",
						"chinese": "平静者的微笑。他们一无所求。",
						"french": "Les sourires des sereins. Ils ne désiraient rien.",
						"spanish": "Las sonrisas de los serenos. No deseaban nada.",
						"vietnamese": "Nụ cười của những kẻ bình yên. Họ chẳng khao khát điều gì.",
						"thai": "รอยยิ้มของผู้สงบเสงี่ยม พวกเขาไม่ปรารถนาสิ่งใด",
						"hindi": "शांत लोगों की मुस्कान। उन्हें कुछ भी नहीं चाहिए था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정말 고통만 사라진 걸까.",
						"english": "Did only the pain truly disappear?",
						"japanese": "本当に苦痛だけが消えたのだろうか。",
						"chinese": "真的只有痛苦消失了吗？",
						"french": "La douleur seule a-t-elle vraiment disparu ?",
						"spanish": "De verdad solo el dolor desapareció?",
						"vietnamese": "Liệu có phải chỉ có nỗi đau biến mất?",
						"thai": "หรือว่าความเจ็บปวดเท่านั้นที่หายไป?",
						"hindi": "क्या सच में केवल दर्द ही गायब हुआ है?"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "char",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "여기까지 왔지만… 계속 가도 괜찮을까?",
						"english": "I've come this far... but is it okay to continue?",
						"japanese": "ここまで来たが…続けても大丈夫だろうか？",
						"chinese": "走到这里了……我还能继续吗？",
						"french": "Je suis venu jusqu'ici... mais puis-je continuer ?",
						"spanish": "He llegado hasta aquí... ¿pero está bien seguir?",
						"vietnamese": "Đã đến đây rồi... nhưng liệu có nên tiếp tục không?",
						"thai": "มาถึงนี่แล้ว... แต่จะไปต่อได้ไหม?",
						"hindi": "मैं यहां तक आ गया हूँ... पर क्या मैं आगे बढ़ सकता हूँ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "난 더는 못 버텨. 사제를 만나야 해.",
						"english": "I can't endure anymore. I must meet the priest.",
						"japanese": "もう耐えられない。司祭に会わなければ。",
						"chinese": "我再也撑不住了。我必须去见神父。",
						"french": "Je ne peux plus supporter ça. Je dois rencontrer le prêtre.",
						"spanish": "No puedo más. Debo encontrar al sacerdote.",
						"vietnamese": "Ta không thể chịu đựng thêm nữa. Ta phải gặp giáo sĩ.",
						"thai": "ข้าทนไม่ไหวแล้ว ต้องไปพบนักบวช",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। मुझे पादरी से मिलना होगा।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥 한가운데 피어난 기묘한 안식. 그 끝은 알 수 없었다.",
						"english": "A strange peace bloomed in the heart of hell. Its end was unknown.",
						"japanese": "地獄の真ん中に咲いた奇妙な安息。その終わりは知れなかった。",
						"chinese": "地狱深处绽放的奇特安宁。无人知晓其尽头。",
						"french": "Une étrange paix fleurit au cœur de l'enfer. Sa fin était inconnue.",
						"spanish": "Una extraña paz floreció en el corazón del infierno. Su fin era desconocido.",
						"vietnamese": "Một sự bình yên kỳ lạ nở rộ giữa lòng địa ngục. Không thể biết được kết cục của nó.",
						"thai": "ความสงบประหลาดผลิบานกลางนรก จุดจบของมันไม่อาจรู้ได้",
						"hindi": "नरक के बीच में एक अजीब शांति खिल उठी। उसका अंत अज्ञात था।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "뭔가… 잘못된 것 같아.",
						"english": "Something... feels wrong.",
						"japanese": "何か…間違っているようだ。",
						"chinese": "好像……有什么不对劲。",
						"french": "Quelque chose... ne va pas.",
						"spanish": "Algo... no está bien.",
						"vietnamese": "Có điều gì đó... không ổn.",
						"thai": "บางอย่าง... ดูเหมือนจะผิดปกติ",
						"hindi": "कुछ... गलत लग रहा है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "char",
					"type": "speech",
					"content": {
						"korean": "제발… 날 믿어줘.",
						"english": "Please... believe me.",
						"japanese": "頼む…俺を信じてくれ。",
						"chinese": "拜托了……请相信我。",
						"french": "S'il te plaît... crois-me.",
						"spanish": "Por favor... créeme.",
						"vietnamese": "Làm ơn... hãy tin tôi.",
						"thai": "ได้โปรด... เชื่อใจข้า",
						"hindi": "कृपया... मुझ पर विश्वास करो।"
					},
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "사제의 육신이 흩어졌다. 어둠 속으로 스며들었다.",
						"english": "The priest's body scattered. Seeping into the darkness.",
						"japanese": "司祭の肉体は散逸した。闇へと溶け込んでいった。",
						"chinese": "祭司的肉身消散了。渗入了黑暗之中。",
						"french": "Le corps du prêtre s'est dispersé. S'infiltrant dans l'obscurité.",
						"spanish": "El cuerpo del sacerdote se dispersó. Infiltrándose en la oscuridad.",
						"vietnamese": "Thân xác của cha xứ tan biến. Thấm vào bóng tối.",
						"thai": "ร่างของนักบวชสลายไป ซึมซับเข้าสู่ความมืด",
						"hindi": "पादरी का शरीर बिखर गया। अँधेरे में घुल गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "고통을… 거부한다고… 영원히….",
						"english": "Refuse… pain… forever…",
						"japanese": "苦痛を… 拒むだと… 永遠に…。",
						"chinese": "拒绝… 痛苦… 永恒地…。",
						"french": "Refuser… la douleur… pour toujours…",
						"spanish": "¿Rechazar… el dolor… para siempre…?",
						"vietnamese": "Từ chối… nỗi đau… vĩnh viễn…",
						"thai": "ปฏิเสธ… ความเจ็บปวด… ตลอดไป…",
						"hindi": "दर्द… को अस्वीकार करते हो… हमेशा के लिए…"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희도… 곧… 평온해질 것이다….",
						"english": "You too… will soon… find peace…",
						"japanese": "お前たちも… すぐに… 平穏になるだろう…。",
						"chinese": "你们也… 很快… 会平静下来…。",
						"french": "Vous aussi… bientôt… vous trouverez la paix…",
						"spanish": "Vosotros también… pronto… encontraréis la paz…",
						"vietnamese": "Các ngươi cũng… sẽ sớm… được bình yên…",
						"thai": "พวกเจ้าเอง… ก็จะ… สงบลงในไม่ช้า…",
						"hindi": "तुम भी… जल्द ही… शांत हो जाओगे…"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 끝인가?",
						"english": "Is this… the end?",
						"japanese": "これが… 終わりか？",
						"chinese": "这就是… 结局吗？",
						"french": "Est-ce… la fin ?",
						"spanish": "¿Es este… el final?",
						"vietnamese": "Đây là… kết thúc sao?",
						"thai": "นี่คือ… จุดจบหรือ?",
						"hindi": "क्या यह… अंत है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사라진 사제. 그러나 지옥의 고통은 멈추지 않았다.",
						"english": "The priest vanished. Yet, the torment of hell persisted.",
						"japanese": "司祭は消えた。しかし、地獄の苦痛は止まらなかった。",
						"chinese": "祭司消失了。然而，地狱的痛苦并未停止。",
						"french": "Le prêtre a disparu. Pourtant, la souffrance infernale persistait.",
						"spanish": "El sacerdote desapareció. Sin embargo, el tormento infernal persistió.",
						"vietnamese": "Vị linh mục biến mất. Nhưng nỗi thống khổ địa ngục vẫn tiếp diễn.",
						"thai": "นักบวชหายไป แต่ความทรมานจากนรกยังคงอยู่",
						"hindi": "पादरी गायब हो गया। फिर भी, नरक की पीड़ा बनी रही।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그리고 알 수 없는 예감이 탐험대를 감쌌다. 끝이 아니었다.",
						"english": "An unknown premonition enveloped the expedition. It wasn't over.",
						"japanese": "そして、未知の予感が探検隊を包んだ。終わりではなかった。",
						"chinese": "一种未知的预感笼罩了探险队。这并非结束。",
						"french": "Une prémonition inconnue enveloppa l'expédition. Ce n'était pas la fin.",
						"spanish": "Una premonición desconocida envolvió a la expedición. No era el final.",
						"vietnamese": "Một dự cảm lạ bao trùm đoàn thám hiểm. Đây chưa phải là kết thúc.",
						"thai": "และลางสังหรณ์ที่ไม่รู้จักก็ปกคลุมคณะสำรวจ มันยังไม่จบ",
						"hindi": "एक अज्ञात पूर्वाभास ने अभियान दल को घेर लिया। यह अंत नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다. 고통의 나락으로 떨어졌다.",
						"english": "A colossal shadow devoured everything. Plunged into the abyss of suffering.",
						"japanese": "巨大な影がすべてを飲み込んだ。苦痛の奈落へ落ちた。",
						"chinese": "巨大的阴影吞噬了一切。坠入痛苦的深渊。",
						"french": "Une ombre colossale a tout dévoré. Plongé dans l'abîme de la souffrance.",
						"spanish": "Una sombra colosal lo devoró todo. Caímos al abismo del sufrimiento.",
						"vietnamese": "Một bóng đen khổng lồ nuốt chửng mọi thứ. Rơi vào vực thẳm của đau khổ.",
						"thai": "เงาขนาดใหญ่กลืนกินทุกสิ่ง จมดิ่งสู่ห้วงแห่งความทุกข์ทรมาน",
						"hindi": "एक विशाल छाया ने सब कुछ निगल लिया। पीड़ा के अथाह कुंड में गिर गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자들이여. 고통을 거부하면… 더 큰 고통뿐.",
						"english": "Foolish ones. Deny suffering... and only greater suffering awaits.",
						"japanese": "愚か者たちよ。苦痛を拒めば…さらなる苦痛あるのみ。",
						"chinese": "愚蠢的人们。拒绝痛苦…只会招致更大的痛苦。",
						"french": "Insensés. Si vous refusez la souffrance… seule une plus grande souffrance vous attendra.",
						"spanish": "Necios. Si negáis el sufrimiento... sólo os espera un dolor mayor.",
						"vietnamese": "Hỡi những kẻ ngu muội. Nếu từ chối nỗi đau… chỉ có đau khổ lớn hơn mà thôi.",
						"thai": "พวกคนโง่เง่า หากปฏิเสธความทุกข์ทรมาน... ก็มีแต่ความทุกข์ทรมานที่ยิ่งใหญ่กว่าเท่านั้น",
						"hindi": "मूर्खों। यदि तुम पीड़ा को अस्वीकार करते हो… तो केवल और अधिक पीड़ा ही मिलेगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "아직… 포기할 수 없어.",
						"english": "Not yet… I cannot give up.",
						"japanese": "まだ…諦められない。",
						"chinese": " 아직… 포기할 수 없어。",
						"french": "Pas encore… Je ne peux pas abandonner.",
						"spanish": "Todavía no… No puedo rendirme.",
						"vietnamese": "Vẫn chưa… Không thể bỏ cuộc.",
						"thai": "ยัง… ยอมแพ้ไม่ได้",
						"hindi": "अभी तक… मैं हार नहीं मान सकता।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 진정으로 평온해질 때까지….",
						"english": "Until you truly find peace….",
						"japanese": "お前が真に安らぎを得るまで…。",
						"chinese": "直到你真正平静下来…。",
						"french": "Jusqu'à ce que tu trouves vraiment la paix….",
						"spanish": "Hasta que encuentres la verdadera paz….",
						"vietnamese": "Cho đến khi ngươi thực sự tìm thấy bình yên….",
						"thai": "จนกว่าเจ้าจะสงบอย่างแท้จริง...",
						"hindi": "जब तक तुम सचमुच शांत न हो जाओ…।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "마침내 마주한 지옥의 사제. 거대한 그림자가 그를 감쌌다.",
						"english": "At last, the priest of hell stood before me. A vast shadow enveloped him.",
						"japanese": "ついに相まみえた地獄の司祭。巨大な影が彼を包んでいた。",
						"chinese": "终于与地狱神父面对面了。巨大的阴影笼罩着他。",
						"french": "Enfin, le prêtre de l'enfer. Une ombre immense l'enveloppait.",
						"spanish": "Por fin, el sacerdote del infierno. Una sombra gigantesca lo envolvía.",
						"vietnamese": "Cuối cùng cũng đối mặt với giáo sĩ địa ngục. Một bóng đen khổng lồ bao trùm lấy hắn.",
						"thai": "ในที่สุดก็เผชิญหน้านักบวชแห่งนรก เงาขนาดมหึมาปกคลุมร่างเขา",
						"hindi": "अंततः नरक का पादरी सामने था। एक विशाल छाया ने उसे घेर रखा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왔구나. 지친 영혼들이여.",
						"english": "You have come. Weary souls.",
						"japanese": "来たか。疲れた魂たちよ。",
						"chinese": "你们来了。疲惫的灵魂们。",
						"french": "Vous êtes venus. Âmes fatiguées.",
						"spanish": "Habéis llegado. Almas cansadas.",
						"vietnamese": "Các ngươi đã đến. Hỡi những linh hồn mỏi mệt.",
						"thai": "พวกเจ้ามาแล้ว วิญญาณที่เหนื่อยล้าเอ๋ย",
						"hindi": "तुम आ गए। थकी हुई आत्माओ।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이리로 오렴. 내가 너희의 고통을 거두어 주리니.",
						"english": "Come to me. I shall take away your pain.",
						"japanese": "こちらへ。お前たちの苦痛を取り除いてやろう。",
						"chinese": "到我这里来。我将带走你们的痛苦。",
						"french": "Venez à moi. Je soulagerai vos souffrances.",
						"spanish": "Venid a mí. Yo os libraré de vuestro dolor.",
						"vietnamese": "Lại đây. Ta sẽ cất đi nỗi đau của các ngươi.",
						"thai": "มาหาข้า ข้าจะปลดเปลื้องความเจ็บปวดของเจ้า",
						"hindi": "मेरे पास आओ। मैं तुम्हारा दर्द दूर कर दूँगा।"
					}
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "char",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "사제님… 저를 치유해주세요.",
						"english": "Priest... heal me.",
						"japanese": "司祭様… 私を癒してください。",
						"chinese": "祭司大人… 请治愈我。",
						"french": "Prêtre… guérissez-moi.",
						"spanish": "Sacerdote… cúrame.",
						"vietnamese": "Cha xứ… xin hãy chữa lành cho con.",
						"thai": "ท่านนักบวช… โปรดรักษาข้าด้วย",
						"hindi": "पादरी… मुझे ठीक करो।"
					},
					"speaker": "char",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "잠깐만! 저 눈은….",
						"english": "Wait! Those eyes...",
						"japanese": "待て！あの目は…。",
						"chinese": "等等！那双眼睛是…。",
						"french": "Attendez ! Ces yeux…",
						"spanish": "¡Espera! Esos ojos…",
						"vietnamese": "Khoan đã! Đôi mắt đó…",
						"thai": "เดี๋ยวก่อน! ดวงตาคู่นั้น…",
						"hindi": "रुको! वो आँखें…"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 자비를 의심하는가.",
						"english": "How dare you… doubt my mercy.",
						"japanese": "貴様… 私の慈悲を疑うのか。",
						"chinese": "竟敢… 怀疑我的慈悲。",
						"french": "Comment oses-tu… douter de ma miséricorde.",
						"spanish": "¿Cómo osas… dudar de mi misericordia?",
						"vietnamese": "Ngươi dám… nghi ngờ lòng thương xót của ta sao.",
						"thai": "เจ้ากล้า… สงสัยความเมตตาของข้าหรือไร",
						"hindi": "तुम… मेरी दया पर शक करने की हिम्मत कैसे करते हो।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고통이야말로 너희를 나에게 이끌지. 거절할 수 없을 것이다.",
						"english": "Pain is what draws you to me. You will not refuse.",
						"japanese": "苦痛こそがお前たちを私に導く。拒むことはできないだろう。",
						"chinese": "痛苦只会将你们引向我。你们无法拒绝。",
						"french": "La douleur vous mènera à moi. Vous ne pourrez pas refuser.",
						"spanish": "El dolor es lo que os atrae a mí. No podréis rechazarlo.",
						"vietnamese": "Nỗi đau sẽ dẫn dắt các ngươi đến với ta. Ngươi sẽ không thể từ chối.",
						"thai": "ความเจ็บปวดต่างหากที่จะนำเจ้ามาหาข้า เจ้าจะปฏิเสธไม่ได้หรอก",
						"hindi": "दर्द ही तुम्हें मेरे पास खींचता है। तुम इनकार नहीं कर पाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "거절하겠어. 이 구원은… 가짜야.",
						"english": "I refuse. This salvation… is a lie.",
						"japanese": "断る。この救済は… 偽物だ。",
						"chinese": "我拒绝。这份救赎… 是假的。",
						"french": "Je refuse. Ce salut… est un mensonge.",
						"spanish": "Me niego. Esta salvación… es falsa.",
						"vietnamese": "Ta từ chối. Sự cứu rỗi này… là giả dối.",
						"thai": "ข้าปฏิเสธ การไถ่บาปนี้… เป็นของปลอม",
						"hindi": "मैं इनकार करता हूँ। यह मोक्ष… एक झूठ है।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고통받는 영혼들이 끝없이 신음하는 지옥 한가운데.",
			"그곳에, 상처를 어루만지고 기도해주는 따뜻한 사제가 있었다.",
			"그의 손길이 닿은 자는 거짓말처럼 평온해졌다.",
			"지옥에서 고통은 곧 살아있다는 증거. 그 고통이 사라진다는 건….",
			"구원일까, 또 다른 저주일까."
		],
		"english": [
			"In the heart of Hell, where tormented souls groan endlessly.",
			"There, a warm priest soothed wounds and offered prayers.",
			"Those touched by him found miraculous peace.",
			"In Hell, pain proves life. When pain vanishes...",
			"Is it salvation, or another curse?"
		],
		"japanese": [
			"苦しむ魂が絶えず呻く地獄の真ん中。",
			"そこに、傷を癒し、祈りを捧げる温かい司祭がいた。",
			"彼の手に触れた者は、まるで嘘のように安らぎを得た。",
			"地獄では、苦痛こそが生きている証。その苦痛が消えるということは…",
			"それは救済か、それとも新たな呪いか。"
		],
		"chinese": [
			"在无尽受苦的灵魂呻吟不绝的地狱深处。",
			"在那里，有一位温暖的牧师，抚慰伤口，祈祷着。",
			"凡被他触碰之人，都奇迹般地获得了平静。",
			"在地狱，痛苦是活着的证明。当痛苦消失时…",
			"是救赎，还是另一种诅咒？"
		],
		"french": [
			"Au cœur de l'Enfer, où les âmes tourmentées gémissent sans fin.",
			"Là, un prêtre bienveillant pansait les blessures et offrait des prières.",
			"Ceux qu'il touchait retrouvaient une paix miraculeuse.",
			"En Enfer, la douleur est preuve de vie. Quand la douleur disparaît...",
			"Est-ce le salut, ou une autre malédiction ?"
		],
		"spanish": [
			"En el corazón del Infierno, donde las almas atormentadas gimen sin cesar.",
			"Allí, un cálido sacerdote curaba heridas y ofrecía oraciones.",
			"Aquellos a quienes tocaba encontraban una paz milagrosa.",
			"En el Infierno, el dolor prueba la vida. Cuando el dolor se desvanece...",
			"¿Es salvación, u otra maldición?"
		],
		"vietnamese": [
			"Giữa lòng Địa ngục, nơi những linh hồn đau khổ rên xiết không ngừng.",
			"Ở đó, có một linh mục nhân ái xoa dịu vết thương và cầu nguyện.",
			"Những ai được ông chạm vào đều tìm thấy sự bình yên kỳ diệu.",
			"Trong Địa ngục, đau khổ là bằng chứng của sự sống. Khi nỗi đau biến mất...",
			"Là sự cứu rỗi, hay một lời nguyền khác?"
		],
		"thai": [
			"ใจกลางนรก ที่ซึ่งวิญญาณทุกข์ทรมานคร่ำครวญไม่สิ้นสุด",
			"ณ ที่นั้น มีนักบวชผู้เมตตาคอยปลอบประโลมบาดแผลและภาวนาให้",
			"ผู้ใดที่เขาสัมผัส ต่างได้รับความสงบอย่างน่าอัศจรรย์",
			"ในนรก ความเจ็บปวดคือเครื่องพิสูจน์ถึงการมีชีวิตอยู่ เมื่อความเจ็บปวดหายไป...",
			"นี่คือการไถ่บาป หรือคำสาปอีกอย่างกันแน่?"
		],
		"hindi": [
			"नर्क के बीच में, जहाँ पीड़ित आत्माएँ अंतहीन कराहती हैं।",
			"वहाँ, एक दयालु पुजारी घावों को सहलाता और प्रार्थनाएँ करता था।",
			"जिसे भी वह छूता, उसे चमत्कारी शांति मिलती थी।",
			"नर्क में, दर्द जीवन का प्रमाण है। जब दर्द गायब हो जाता है...",
			"क्या यह मोक्ष है, या कोई और अभिशाप?"
		]
	}
} as const;
