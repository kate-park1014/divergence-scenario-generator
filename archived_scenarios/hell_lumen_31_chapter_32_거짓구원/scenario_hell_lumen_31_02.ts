export const scenario_hell_lumen_31_02 = {
	"scenario_id": "hell_lumen_31_02",
	"order": 2,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
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
						"korean": "지옥의 음습한 뒷골목. 퀴퀴한 술 냄새가 진동했다.",
						"english": "The damp back alleys of hell. A musty stench of alcohol filled the air.",
						"japanese": "地獄のじめじめした裏路地。古びた酒の匂いが立ち込めていた。",
						"chinese": "地狱阴暗潮湿的后巷。一股陈腐的酒味弥漫开来。",
						"french": "Les ruelles humides de l'enfer. Une odeur de moisi et d'alcool flottait dans l'air.",
						"spanish": "Los húmedos callejones del infierno. Un rancio olor a alcohol flotaba en el aire.",
						"vietnamese": "Con hẻm ẩm ướt của địa ngục. Mùi rượu cũ kỹ nồng nặc.",
						"thai": "ตรอกซอยอันอับชื้นของนรก กลิ่นเหล้าเก่าเหม็นอับอบอวล",
						"hindi": "नरक की नम गलियां। शराब की बासी गंध हवा में थी।"
					}
				},
				{
					"content": {
						"korean": "드록스를 찾습니다.",
						"english": "I'm looking for Droks.",
						"japanese": "ドロックスを探しています。",
						"chinese": "我在找德罗克斯。",
						"french": "Je cherche Droks.",
						"spanish": "Busco a Droks.",
						"vietnamese": "Tôi đang tìm Droks.",
						"thai": "ฉันกำลังตามหาดรอกซ์",
						"hindi": "मैं ड्रॉक्स को ढूंढ रहा हूँ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "…누구세요. 귀찮게 하지 마.",
						"english": "...Who are you? Don't bother me.",
						"japanese": "…誰だ。邪魔をするな。",
						"chinese": "……你是谁？别打扰我。",
						"french": "...Qui êtes-vous ? Ne me dérangez pas.",
						"spanish": "...¿Quién eres? No me molestes.",
						"vietnamese": "...Ngươi là ai? Đừng làm phiền ta.",
						"thai": "...แกเป็นใคร อย่ามายุ่งกับฉัน",
						"hindi": "...कौन हो तुम? मुझे परेशान मत करो।"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "루멘에 대해 묻고 싶습니다.",
						"english": "I want to ask about Lumen.",
						"japanese": "ルーメンについて尋ねたい。",
						"chinese": "我想问问关于卢曼的事。",
						"french": "Je voudrais vous poser des questions sur Lumen.",
						"spanish": "Quiero preguntar sobre Lumen.",
						"vietnamese": "Tôi muốn hỏi về Lumen.",
						"thai": "ฉันอยากจะถามเรื่องลูเมน",
						"hindi": "मैं ल्यूमेन के बारे में पूछना चाहता हूँ।"
					}
				},
				{
					"content": {
						"korean": "루멘? 그 이름은 여기서 금기야.",
						"english": "Lumen? That name is forbidden here.",
						"japanese": "ルーメン？その名前はここでは禁忌だ。",
						"chinese": "卢曼？那个名字在这里是禁忌。",
						"french": "Lumen ? Ce nom est proscrit ici.",
						"spanish": "Lumen? Ese nombre está prohibido aquí.",
						"vietnamese": "Lumen? Tên đó là điều cấm kỵ ở đây.",
						"thai": "ลูเมน? ชื่อนั้นเป็นสิ่งต้องห้ามที่นี่",
						"hindi": "ल्यूमेन? वह नाम यहाँ वर्जित है।"
					},
					"emotion": "angry",
					"speaker": "drox",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "drox",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "루멘은 과거엔 신성한 존재였어.",
						"english": "Lumen used to be a sacred being.",
						"japanese": "ルーメンはかつて、神聖な存在だった。",
						"chinese": "卢曼过去曾是一个神圣的存在。",
						"french": "Lumen était autrefois une entité sacrée.",
						"spanish": "Lumen solía ser un ser sagrado.",
						"vietnamese": "Lumen từng là một tồn tại thần thánh.",
						"thai": "ลูเมนเคยเป็นสิ่งศักดิ์สิทธิ์",
						"hindi": "ल्यूमेन पहले एक पवित्र प्राणी था।"
					},
					"speaker": "drox",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "신성한 존재? 지금은 구원자 행세인데.",
						"english": "A sacred being? Now he's posing as a savior.",
						"japanese": "神聖な存在？今は救世主を気取っているのに。",
						"chinese": "神圣的存在？现在他却扮演着救世主。",
						"french": "Une entité sacrée ? Maintenant, il se fait passer pour un sauveur.",
						"spanish": "Un ser sagrado? Ahora se hace pasar por un salvador.",
						"vietnamese": "Một tồn tại thần thánh? Giờ hắn lại đóng vai cứu thế.",
						"thai": "สิ่งศักดิ์สิทธิ์? ตอนนี้กลับทำตัวเป็นผู้กอบกู้",
						"hindi": "एक पवित्र प्राणी? अब वह एक उद्धारकर्ता के रूप में प्रस्तुत हो रहा है।"
					}
				},
				{
					"content": {
						"korean": "…알 수 없는 이유로 추락했지. 아주 오래된 소문이야.",
						"english": "...crashed for unknown reasons. It's a very old rumor.",
						"japanese": "…原因不明で墜落した。昔からの噂だ。",
						"chinese": "……因不明原因坠毁。这是一个很古老的传闻。",
						"french": "...s'est écrasé pour des raisons inconnues. C'est une très vieille rumeur.",
						"spanish": "...se estrelló por razones desconocidas. Es un rumor muy antiguo.",
						"vietnamese": "...rơi xuống vì lý do không rõ. Đó là một tin đồn rất cũ.",
						"thai": "...ตกลงมาด้วยเหตุผลที่ไม่ทราบสาเหตุ เป็นข่าวลือที่เก่าแก่มาก",
						"hindi": "...अज्ञात कारणों से दुर्घटनाग्रस्त हो गया। यह एक बहुत पुरानी अफवाह है।"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"content": {
						"korean": "추락… 무슨 이유로?",
						"english": "Crashed... for what reason?",
						"japanese": "墜落…なぜ？",
						"chinese": "坠毁……什么原因？",
						"french": "Écrasé... pour quelle raison ?",
						"spanish": "¿Estrellado... por qué razón?",
						"vietnamese": "Rơi xuống… vì lý do gì?",
						"thai": "ตก... ด้วยเหตุผลอะไร?",
						"hindi": "दुर्घटनाग्रस्त... किस कारण से?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그건… 나도 몰라. 아무도 몰라.",
						"english": "That... I don't know either. Nobody knows.",
						"japanese": "それは…私も知らない。誰も知らない。",
						"chinese": "那……我也不知道。谁都不知道。",
						"french": "Ça... je ne sais pas non plus. Personne ne sait.",
						"spanish": "Eso... yo tampoco lo sé. Nadie lo sabe.",
						"vietnamese": "Cái đó… tôi cũng không biết. Không ai biết cả.",
						"thai": "นั่น... ฉันก็ไม่รู้ ไม่มีใครรู้หรอก",
						"hindi": "वह... मुझे भी नहीं पता। किसी को नहीं पता।"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "루멘의 빛… 구원이라고들 하지.",
						"english": "The Light of Lumen... they call it salvation.",
						"japanese": "ルーメンの光…救済だと言われている。",
						"chinese": "流明之光……他们称之为救赎。",
						"french": "La Lumière de Lumen... ils l'appellent le salut.",
						"spanish": "La Luz de Lumen... la llaman salvación.",
						"vietnamese": "Ánh sáng của Lumen… họ gọi đó là sự cứu rỗi.",
						"thai": "แสงแห่งลูเมน... พวกเขาเรียกมันว่าความรอด",
						"hindi": "ल्यूमेन का प्रकाश... इसे वे मोक्ष कहते हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 뭔가 이상하다는 거군요.",
						"english": "But something's strange, isn't it?",
						"japanese": "でも、何かおかしいということですね。",
						"chinese": "但这意味着有些不对劲，对吗？",
						"french": "Mais quelque chose cloche, n'est-ce pas ?",
						"spanish": "Pero algo es extraño, ¿no es así?",
						"vietnamese": "Nhưng có điều gì đó không ổn, phải không?",
						"thai": "แต่มีบางอย่างแปลกๆ ใช่ไหมครับ/คะ",
						"hindi": "लेकिन कुछ अजीब है, है ना?"
					}
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그래. 빛이 강해질수록 그림자도 깊어지는 법.",
						"english": "Right. The stronger the light, the deeper the shadow.",
						"japanese": "そうだ。光が強くなるほど、影も深くなるものだ。",
						"chinese": "没错。光越强，影子也越深。",
						"french": "Oui. Plus la lumière est forte, plus l'ombre est profonde.",
						"spanish": "Así es. Cuanto más fuerte es la luz, más profunda es la sombra.",
						"vietnamese": "Đúng vậy. Ánh sáng càng mạnh, bóng tối càng sâu.",
						"thai": "ใช่ ยิ่งแสงแรงเท่าไหร่ เงาก็ยิ่งลึกเท่านั้น",
						"hindi": "हाँ। जितनी तेज़ रोशनी, उतनी ही गहरी परछाई।"
					}
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그의 빛이 닿은 곳마다… 생기가 시들어 가는 것 같아.",
						"english": "Wherever his light touches... life seems to wither.",
						"japanese": "彼の光が触れた場所すべてで…生気が枯れていくようだ。",
						"chinese": "他的光所到之处……生机似乎都在枯萎。",
						"french": "Partout où sa lumière touche... la vie semble se flétrir.",
						"spanish": "Dondequiera que su luz toca... la vida parece marchitarse.",
						"vietnamese": "Khắp nơi ánh sáng của anh ta chạm tới… sự sống dường như đang héo tàn.",
						"thai": "ทุกที่ที่แสงของเขาส่องไปถึง... ชีวิตดูเหมือนจะเหี่ยวเฉาลง",
						"hindi": "जहाँ भी उसका प्रकाश पहुँचता है... जीवन मुरझाता हुआ लगता है।"
					}
				},
				{
					"content": {
						"korean": "…독이 든 빛인가.",
						"english": "...Is it poisoned light?",
						"japanese": "…毒の光なのか。",
						"chinese": "……是剧毒之光吗？",
						"french": "...Une lumière empoisonnée ?",
						"spanish": "¿...Es luz envenenada?",
						"vietnamese": "…Là ánh sáng độc sao?",
						"thai": "...เป็นแสงอาบยาพิษหรือเปล่า?",
						"hindi": "...क्या यह विषैला प्रकाश है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "drox"
				},
				{
					"content": {
						"korean": "경고하는데… 더 파고들지 마.",
						"english": "I'm warning you... don't dig any deeper.",
						"japanese": "警告するが…これ以上深入りするな。",
						"chinese": "我警告你……别再深究了。",
						"french": "Je te préviens... ne creuse pas plus profond.",
						"spanish": "Te lo advierto... no caves más profundo.",
						"vietnamese": "Tôi cảnh cáo cô… đừng đào sâu thêm nữa.",
						"thai": "ฉันเตือนนะ... อย่าขุดลึกไปกว่านี้",
						"hindi": "मैं तुम्हें चेतावनी देता हूँ... और गहराई में मत जाओ।"
					},
					"speaker": "drox",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "진실을 알아야 합니다.",
						"english": "I need to know the truth.",
						"japanese": "真実を知る必要があります。",
						"chinese": "我必须知道真相。",
						"french": "Je dois connaître la vérité.",
						"spanish": "Necesito saber la verdad.",
						"vietnamese": "Tôi phải biết sự thật.",
						"thai": "ฉันต้องรู้ความจริง",
						"hindi": "मुझे सच जानना होगा।"
					}
				},
				{
					"content": {
						"korean": "루멘을 따르는 영혼들… 그들의 눈빛을 봤어?",
						"english": "The souls following Lumen... have you seen their eyes?",
						"japanese": "ルーメンに従う魂たち… 彼らの眼を見たか？",
						"chinese": "追随流明之魂… 你见过他们的眼神吗？",
						"french": "Les âmes qui suivent Lumen... as-tu vu leurs yeux ?",
						"spanish": "Las almas que siguen a Lumen... ¿has visto sus ojos?",
						"vietnamese": "Những linh hồn theo Lumen… ngươi đã thấy ánh mắt của họ chưa?",
						"thai": "เหล่าวิญญาณที่ติดตามลูเมน... เจ้าเคยเห็นดวงตาของพวกเขาไหม?",
						"hindi": "ल्यूमेन का अनुसरण करने वाली आत्माएं… क्या तुमने उनकी आँखें देखी हैं?"
					},
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "drox",
					"type": "speech",
					"content": {
						"korean": "구원이라 부르지만… 기묘한 공포가 서려 있다고.",
						"english": "They call it salvation... but a strange dread lingers.",
						"japanese": "救済と呼ぶが… 奇妙な恐怖が宿っている。",
						"chinese": "他们称之为救赎… 但却弥漫着奇异的恐惧。",
						"french": "Ils appellent ça le salut... mais une étrange terreur y règne.",
						"spanish": "Lo llaman salvación... pero un miedo extraño persiste.",
						"vietnamese": "Họ gọi đó là sự cứu rỗi… nhưng một nỗi sợ hãi kỳ lạ vẫn còn đó.",
						"thai": "พวกเขาเรียกมันว่าการไถ่บาป... แต่มีความกลัวแปลกๆ แฝงอยู่",
						"hindi": "वे इसे मोक्ष कहते हैं... लेकिन एक अजीब डर बना हुआ है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그들을 이용하는 거겠죠.",
						"english": "They must be using them.",
						"japanese": "彼らを利用しているのだろう。",
						"chinese": "他们肯定是在利用他们。",
						"french": "Ils doivent les utiliser.",
						"spanish": "Deben estar usándolos.",
						"vietnamese": "Chắc chắn họ đang lợi dụng chúng.",
						"thai": "พวกเขาคงกำลังใช้ประโยชน์จากพวกนั้น",
						"hindi": "वे उनका इस्तेमाल कर रहे होंगे।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "빛이 사라진 어두운 전당. 거대한 그림자가 앞을 가로막았다.",
						"english": "A dark hall where light had vanished. A colossal shadow blocked the way.",
						"japanese": "光が消え去った暗い殿堂。巨大な影が道を阻んだ。",
						"chinese": "光芒消逝的黑暗殿堂。一道巨大的身影挡住了去路。",
						"french": "Une salle sombre où la lumière avait disparu. Une ombre colossale barra le chemin.",
						"spanish": "Un salón oscuro donde la luz había desaparecido. Una sombra colosal bloqueó el camino.",
						"vietnamese": "Một sảnh tối nơi ánh sáng biến mất. Một cái bóng khổng lồ chặn đường.",
						"thai": "โถงมืดที่ไร้แสง. เงาขนาดมหึมาขวางทางอยู่.",
						"hindi": "एक अंधेरा हॉल जहाँ से रोशनी गायब हो गई थी। एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어리석은 자. 루멘의 영역에 감히 발을 들이다니.",
						"english": "Fool. How dare you trespass into Lumen's domain.",
						"japanese": "愚か者め。ルーメンの領域に足を踏み入れるとは。",
						"chinese": "愚蠢的家伙。竟敢踏入流明之境。",
						"french": "Imbécile. Comment oses-tu t'aventurer dans le domaine de Lumen.",
						"spanish": "Necio. ¿Cómo te atreves a entrar en el dominio de Lumen?",
						"vietnamese": "Kẻ ngốc. Sao ngươi dám đặt chân vào lãnh địa của Lumen.",
						"thai": "เจ้าคนโง่. กล้าดียังไงมาเหยียบย่ำในอาณาเขตของลูเมน.",
						"hindi": "मूर्ख। तुम्हारी हिम्मत कैसे हुई ल्यूमेन के क्षेत्र में कदम रखने की।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "루멘의 진실을 밝히러 왔다.",
						"english": "I've come to uncover Lumen's truth.",
						"japanese": "ルーメンの真実を暴きに来た。",
						"chinese": "我来揭示流明的真相。",
						"french": "Je suis venu révéler la vérité de Lumen.",
						"spanish": "He venido a desvelar la verdad de Lumen.",
						"vietnamese": "Ta đến để phơi bày sự thật về Lumen.",
						"thai": "ข้ามาเพื่อเปิดเผยความจริงของลูเมน.",
						"hindi": "मैं ल्यूमेन की सच्चाई उजागर करने आया हूँ।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그림자만 쫓는 너희에게 진실은 사치다. 여기서 끝내주마.",
						"english": "Truth is a luxury for those who only chase shadows. I'll end you here.",
						"japanese": "影ばかり追うお前たちに真実は贅沢だ。ここで終わらせてやる。",
						"chinese": "对于只追逐影子的你们来说，真相是奢侈品。我会在这里终结你们。",
						"french": "La vérité est un luxe pour ceux qui ne poursuivent que des ombres. Je vais en finir avec vous ici.",
						"spanish": "La verdad es un lujo para quienes solo persiguen sombras. Aquí acabaré contigo.",
						"vietnamese": "Sự thật là một thứ xa xỉ đối với những kẻ chỉ theo đuổi bóng tối. Ta sẽ kết liễu ngươi tại đây.",
						"thai": "ความจริงเป็นสิ่งฟุ่มเฟือยสำหรับพวกที่ตามล่าแต่เงา. ข้าจะจัดการเจ้าที่นี่.",
						"hindi": "जो लोग केवल परछाइयों का पीछा करते हैं, उनके लिए सच्चाई एक विलासिता है। मैं तुम्हें यहीं खत्म कर दूंगा।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 루멘님은… 모든 것을 지켜보고 계신다…",
						"english": "Ugh... Lord Lumen... is watching everything...",
						"japanese": "くっ… ルーメン様は… 全てを見守っていらっしゃる…",
						"chinese": "呃… 流明大人… 正在注视着一切…",
						"french": "Ugh... Seigneur Lumen... observe tout...",
						"spanish": "Ugh... El Señor Lumen... lo está observando todo...",
						"vietnamese": "Ư… Chúa Lumen… đang dõi theo mọi thứ…",
						"thai": "อึก... ท่านลูเมน... กำลังเฝ้าดูทุกสิ่ง...",
						"hindi": "उफ़... भगवान ल्यूमेन... सब कुछ देख रहे हैं..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "헛소리 마라. 네놈들이 숨기는 게 뭔지 반드시 알아낼 거다.",
						"english": "Nonsense. I'll find out what you're hiding.",
						"japanese": "くだらない。お前たちが何を隠しているか、必ず突き止めてやる。",
						"chinese": "胡说八道。我一定会查出你们隐藏了什么。",
						"french": "Sornettes. Je découvrirai ce que vous cachez.",
						"spanish": "Tonterías. Descubriré lo que escondéis.",
						"vietnamese": "Nói nhảm. Ta sẽ tìm ra thứ mà các ngươi đang che giấu.",
						"thai": "เหลวไหล. ข้าจะเปิดโปงให้ได้ว่าพวกเจ้าซ่อนอะไรอยู่.",
						"hindi": "बकवास। मैं पता लगाऊंगा कि तुम क्या छिपा रहे हो।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어두운 진실이 조금씩 베일을 벗는다. 다음은 루멘의 '성소'다.",
						"english": "The dark truth slowly unveils itself. Next is Lumen's 'Sanctuary'.",
						"japanese": "暗い真実が少しずつベールを脱ぐ。次はルーメンの「聖所」だ。",
						"chinese": "黑暗的真相正一点点揭开面纱。下一个是流明的“圣所”。",
						"french": "La sombre vérité se dévoile lentement. Le prochain est le 'Sanctuaire' de Lumen.",
						"spanish": "La oscura verdad se desvela lentamente. Lo siguiente es el 'Santuario' de Lumen.",
						"vietnamese": "Sự thật đen tối dần hé lộ. Tiếp theo là 'Thánh địa' của Lumen.",
						"thai": "ความจริงอันมืดมิดค่อยๆ เปิดเผย. จุดต่อไปคือ 'สถานศักดิ์สิทธิ์' ของลูเมน.",
						"hindi": "अंधेरी सच्चाई धीरे-धीरे सामने आ रही है। अगला है ल्यूमेन का 'अभयारण्य'।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "후훗… 어둠 속에서 진실을 찾기란 불가능하다.",
						"english": "Heh... it's impossible to find truth in the dark.",
						"japanese": "フフッ… 闇の中で真実を見つけるのは不可能だ。",
						"chinese": "呵呵… 在黑暗中寻找真相是不可能的。",
						"french": "Heh... il est impossible de trouver la vérité dans l'obscurité.",
						"spanish": "Je... es imposible encontrar la verdad en la oscuridad.",
						"vietnamese": "Heh... thật không thể tìm thấy sự thật trong bóng tối.",
						"thai": "ฮึๆ... เป็นไปไม่ได้ที่จะพบความจริงในความมืดมิด",
						"hindi": "हूँ... अँधेरे में सच खोजना असंभव है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "젠장… 여기서 멈출 순 없어.",
						"english": "Damn it... I can't stop here.",
						"japanese": "くそ… ここで止まるわけにはいかない。",
						"chinese": "该死… 我不能停在这里。",
						"french": "Mince... je ne peux pas m'arrêter ici.",
						"spanish": "Maldita sea... No puedo detenerme aquí.",
						"vietnamese": "Chết tiệt... mình không thể dừng lại ở đây.",
						"thai": "บ้าจริง... ฉันหยุดอยู่ตรงนี้ไม่ได้",
						"hindi": "धत्त तेरी... मैं यहाँ रुक नहीं सकता।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"마라의 제보. 루멘의 흔적을 쫓아 지옥의 뒷골목으로 향했다.",
			"과거 정보상이자 지금은 술에 절어 사는 드록스.",
			"빛의 이면에 감춰진 그림자. 진실은 과연 무엇인가."
		],
		"english": [
			"Mara's tip. Followed Lumen's trail to the back alleys of hell.",
			"Droks, a former informant, now pickled in alcohol.",
			"The shadow hidden on the other side of the light. What is the truth?"
		],
		"japanese": [
			"マラの情報。ルーメンの痕跡を追い、地獄の裏路地へ向かった。",
			"かつての情報屋、今は酒浸りのドロックス。",
			"光の裏側に隠された影。真実とは一体何なのか。"
		],
		"chinese": [
			"玛拉的线索。追踪卢曼的踪迹，前往地狱的后巷。",
			"曾经的线人，如今沉溺于酒精的德罗克斯。",
			"隐藏在光明背后的阴影。真相究竟是什么？"
		],
		"french": [
			"Tuyau de Mara. J'ai suivi la trace de Lumen jusqu'aux ruelles sordides de l'enfer.",
			"Droks, ancien informateur, maintenant noyé dans l'alcool.",
			"L'ombre cachée derrière la lumière. Quelle est la vérité ?"
		],
		"spanish": [
			"Pista de Mara. Seguí el rastro de Lumen hasta los callejones del infierno.",
			"Droks, un antiguo informante, ahora ahogado en alcohol.",
			"La sombra oculta al otro lado de la luz. ¿Cuál es la verdad?"
		],
		"vietnamese": [
			"Gợi ý của Mara. Theo dấu Lumen, tiến vào con hẻm tối tăm của địa ngục.",
			"Droks, cựu chỉ điểm, giờ chìm trong rượu.",
			"Bóng tối ẩn sau ánh sáng. Sự thật rốt cuộc là gì?"
		],
		"thai": [
			"เบาะแสของมารา ตามรอยลูเมน มุ่งหน้าสู่ตรอกซอยนรก",
			"ดรอกซ์ อดีตสายข่าว ตอนนี้จมปลักในสุรา",
			"เงามืดที่ซ่อนอยู่เบื้องหลังแสงสว่าง ความจริงคืออะไรกันแน่?"
		],
		"hindi": [
			"मारा की टिप। ल्यूमेन के निशान का पीछा करते हुए नरक की गलियों में गया।",
			"ड्रॉक्स, पूर्व सूचनादाता, अब शराब में डूबा हुआ।",
			"प्रकाश के दूसरी ओर छिपी छाया। सच क्या है?"
		]
	}
} as const;
