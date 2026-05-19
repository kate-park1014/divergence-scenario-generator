export const scenario_Noctis_V1_AbyssalReverb_03 = {
	"scenario_id": "Noctis_V1_AbyssalReverb_03",
	"order": 3,
	"act": "rising",
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
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "심연의 잔재가 휘몰아치는 공간. 영혼의 울음소리가 발밑을 맴돌았다.",
						"english": "A space where remnants of the abyss swirl. The cries of souls lingered underfoot.",
						"japanese": "深淵の残滓が渦巻く空間。魂の叫びが足元を漂う。",
						"chinese": "深渊残余肆虐的空间。灵魂的哭喊声在脚下徘徊。",
						"french": "Un espace où les vestiges des abysses tourbillonnent. Les cris des âmes planaient sous les pieds.",
						"spanish": "Un espacio donde los restos del abismo se arremolinan. Los lamentos de las almas flotaban bajo mis pies.",
						"vietnamese": "Không gian tàn dư của vực sâu xoáy mạnh. Tiếng khóc của linh hồn vương vấn dưới chân.",
						"thai": "สถานที่ที่เศษซากแห่งห้วงเหวลึกหมุนวน เสียงร้องไห้ของวิญญาณวนเวียนอยู่ใต้ฝ่าเท้า",
						"hindi": "एक ऐसी जगह जहाँ पाताल के अवशेष घूमते हैं। आत्माओं की चीखें पैरों के नीचे गूँज रही थीं।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 녹티스가 모은 영혼들이 있는 곳인가?",
						"english": "Is this... where Noctis gathered souls?",
						"japanese": "ここが…ノクティスが集めた魂がある場所か？",
						"chinese": "这里是…诺克提斯收集灵魂的地方吗？",
						"french": "Est-ce ici... que Noctis a rassemblé les âmes ?",
						"spanish": "¿Es aquí... donde Noctis reunió almas?",
						"vietnamese": "Đây có phải... là nơi Noctis thu thập linh hồn?",
						"thai": "นี่คือ... ที่ที่น็อคติสเก็บวิญญาณไว้หรือ?",
						"hindi": "क्या यह... वह जगह है जहाँ नॉक्टिस ने आत्माओं को इकट्ठा किया था?"
					}
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "아니. 여기는… 영혼들이 '고통받는' 곳이야.",
						"english": "No. This is... where souls 'suffer'.",
						"japanese": "いいえ。ここは…魂が「苦しむ」場所だ。",
						"chinese": "不。这里是…灵魂“受苦”的地方。",
						"french": "Non. C'est... là où les âmes « souffrent ».",
						"spanish": "No. Aquí es... donde las almas «sufren».",
						"vietnamese": "Không. Đây là... nơi linh hồn 'chịu đựng' đau khổ.",
						"thai": "ไม่ใช่ นี่คือ... ที่ที่วิญญาณ 'ทนทุกข์'",
						"hindi": "नहीं। यह... वह जगह है जहाँ आत्माएँ 'पीड़ा' सहती हैं।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "공간을 가득 채운 슬픔. 그림자 없는 발자국이 희미하게 남아있었다.",
						"english": "Sadness filled the space. Faint traces of shadowless footsteps remained.",
						"japanese": "空間を満たす悲しみ。影なき足跡が薄く残っていた。",
						"chinese": "悲伤充斥着空间。无影的足迹依稀可见。",
						"french": "La tristesse emplissait l'espace. De faibles traces de pas sans ombre subsistaient.",
						"spanish": "La tristeza llenaba el espacio. Tenues huellas sin sombra permanecían.",
						"vietnamese": "Nỗi buồn tràn ngập không gian. Dấu chân không bóng mờ nhạt còn lại.",
						"thai": "ความเศร้าโศกเติมเต็มพื้นที่ ร่องรอยเท้าที่ไร้เงาเลือนรางยังคงอยู่",
						"hindi": "उदासी ने जगह भर दी। छायाहीन पैरों के निशान धुंधले पड़ गए थे।"
					},
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "mara",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "mara",
					"type": "speech",
					"content": {
						"korean": "흐느끼는 소리 들려? 내 동료들의 노래야.",
						"english": "Hear that sobbing? It's my comrades' song.",
						"japanese": "すすり泣く声が聞こえるか？私の仲間たちの歌だ。",
						"chinese": "听到那抽泣声了吗？那是我同伴的歌。",
						"french": "Tu entends ces sanglots ? C'est le chant de mes camarades.",
						"spanish": "¿Oyes ese sollozo? Es la canción de mis camaradas.",
						"vietnamese": "Nghe thấy tiếng nức nở đó không? Đó là bài hát của đồng đội tôi.",
						"thai": "ได้ยินเสียงสะอื้นนั่นไหม? มันคือเพลงของสหายของฉัน",
						"hindi": "क्या तुम्हें वह सिसकने की आवाज़ सुनाई दे रही है? यह मेरे साथियों का गीत है।"
					}
				},
				{
					"content": {
						"korean": "당신은…?",
						"english": "And you...?",
						"japanese": "あなたは…？",
						"chinese": "你是…？",
						"french": "Et vous...?",
						"spanish": "¿Y tú...?",
						"vietnamese": "Bạn là...?",
						"thai": "แล้วท่านคือ...?",
						"hindi": "और तुम...?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "마라. 심연에 갇힌 영혼들의 고통을 부르는 자.",
						"english": "Mara. The one who calls forth the suffering of souls trapped in the abyss.",
						"japanese": "マラ。深淵に囚われた魂たちの苦痛を呼び起こす者。",
						"chinese": "玛拉。召唤深渊中受困灵魂痛苦之人。",
						"french": "Mara. Celle qui invoque la souffrance des âmes piégées dans les abysses.",
						"spanish": "Mara. Quien invoca el tormento de las almas atrapadas en el abismo.",
						"vietnamese": "Mara. Kẻ triệu hồi nỗi đau của những linh hồn bị giam cầm trong vực thẳm.",
						"thai": "มารา ผู้เรียกความทรมานของวิญญาณที่ถูกขังในห้วงลึก",
						"hindi": "मारा। वह जो रसातल में फंसी आत्माओं के कष्टों को बुलाता है।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 영혼들은 단순한 흔적이 아니야. 그들의 비극이야.",
						"english": "These souls aren't mere traces. They are their tragedy.",
						"japanese": "これらの魂は単なる痕跡ではない。彼らの悲劇そのものだ。",
						"chinese": "这些灵魂并非单纯的痕迹。它们是他们的悲剧。",
						"french": "Ces âmes ne sont pas de simples traces. Elles sont leur tragédie.",
						"spanish": "Estas almas no son meros rastros. Son su tragedia.",
						"vietnamese": "Những linh hồn này không chỉ là dấu vết. Chúng là bi kịch của họ.",
						"thai": "วิญญาณเหล่านี้ไม่ใช่แค่ร่องรอย แต่มันคือโศกนาฏกรรมของพวกเขา",
						"hindi": "ये आत्माएं केवल निशान नहीं हैं। ये उनकी त्रासदी हैं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…증거가 아니었다니.",
						"english": "...So it wasn't proof after all.",
						"japanese": "…証拠ではなかったとは。",
						"chinese": "……原来那不是证据。",
						"french": "...Ce n'était donc pas une preuve.",
						"spanish": "...Así que no era una prueba.",
						"vietnamese": "...Vậy ra đó không phải là bằng chứng.",
						"thai": "...สรุปว่าไม่ใช่หลักฐาน",
						"hindi": "तो यह सबूत नहीं था।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "mara"
				},
				{
					"content": {
						"korean": "녹티스는 영혼을 모았어. '균형'을 위해.",
						"english": "Noctis gathered souls. For 'balance'.",
						"japanese": "ノクティスは魂を集めた。「均衡」のために。",
						"chinese": "诺克提斯收集了灵魂。为了“平衡”。",
						"french": "Noctis a rassemblé des âmes. Pour l'« équilibre ».",
						"spanish": "Noctis reunió almas. Por el \"equilibrio\".",
						"vietnamese": "Noctis đã thu thập linh hồn. Vì 'cân bằng'.",
						"thai": "น็อคติสเก็บวิญญาณ เพื่อ 'สมดุล'",
						"hindi": "नॉक्टिस ने आत्माएं इकट्ठी कीं। 'संतुलन' के लिए।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 대체 뭔데?",
						"english": "What exactly is that?",
						"japanese": "それは一体何だ？",
						"chinese": "那究竟是什么？",
						"french": "Qu'est-ce que c'est, au juste ?",
						"spanish": "¿Qué es eso, exactamente?",
						"vietnamese": "Cái đó rốt cuộc là gì?",
						"thai": "มันคืออะไรกันแน่?",
						"hindi": "वह आखिर क्या है?"
					}
				},
				{
					"content": {
						"korean": "이곳에 갇힌 이들은 희생된 자들이야. 그림자 없는 자들이 되어 지상을 배회하지.",
						"english": "Those trapped here are the sacrificed. They become the Shadowless, wandering the earth.",
						"japanese": "ここに囚われた者たちは犠牲になった者たちだ。影なき者となり、地上を彷徨う。",
						"chinese": "被困于此的都是牺牲者。他们变成了无影者，徘徊于大地之上。",
						"french": "Ceux qui sont piégés ici sont les sacrifiés. Ils deviennent les Sans-Ombre, errant sur la terre.",
						"spanish": "Los atrapados aquí son los sacrificados. Se convierten en los Sin-Sombra, deambulando por la tierra.",
						"vietnamese": "Những người bị giam cầm ở đây là những kẻ đã bị hiến tế. Họ trở thành Kẻ Vô Ảnh, lang thang trên mặt đất.",
						"thai": "ผู้ที่ถูกขังที่นี่คือผู้ที่ถูกบูชายัญ พวกเขาจะกลายเป็นผู้ไร้เงา เดินเร่ร่อนไปทั่วโลก",
						"hindi": "यहां फंसे हुए वे हैं जिन्हें बलिदान किया गया है। वे छायाहीन बन जाते हैं, पृथ्वी पर भटकते रहते हैं।"
					},
					"emotion": "sad",
					"speaker": "mara",
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "우리가 본 그림자 없는 자들이… 이 영혼들이었단 말이야?",
						"english": "The Shadowless we saw... were these souls?",
						"japanese": "我々が見た影なき者たちが…これらの魂だったと？",
						"chinese": "我们看到的无影者……就是这些灵魂吗？",
						"french": "Les Sans-Ombre que nous avons vus... étaient ces âmes ?",
						"spanish": "¿Los Sin-Sombra que vimos... eran estas almas?",
						"vietnamese": "Những Kẻ Vô Ảnh mà chúng ta thấy... chính là những linh hồn này sao?",
						"thai": "ผู้ไร้เงาที่เราเห็น...คือวิญญาณเหล่านี้หรือ?",
						"hindi": "हमने जो छायाहीन देखे... क्या वे ये आत्माएं थीं?"
					}
				},
				{
					"content": {
						"korean": "그래. 그들의 고통은 끝없이 이어져.",
						"english": "Yes. Their suffering is endless.",
						"japanese": "そうだ。彼らの苦痛は尽きない。",
						"chinese": "是的。他们的痛苦永无止境。",
						"french": "Oui. Leur souffrance est infinie.",
						"spanish": "Sí. Su sufrimiento es interminable.",
						"vietnamese": "Đúng vậy. Nỗi đau của họ là vô tận.",
						"thai": "ใช่ ความทรมานของพวกเขาไม่มีวันสิ้นสุด",
						"hindi": "हाँ। उनका कष्ट अनंत है।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "mara",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희도… 희생할 준비가 되어 있니?",
						"english": "Are you... ready to sacrifice yourselves?",
						"japanese": "お前たちも…犠牲になる準備はできているか？",
						"chinese": "你们也……准备好牺牲了吗？",
						"french": "Êtes-vous... prêts à vous sacrifier ?",
						"spanish": "¿Están... listos para sacrificarse?",
						"vietnamese": "Các ngươi... đã sẵn sàng hy sinh chưa?",
						"thai": "พวกเจ้า...พร้อมที่จะเสียสละแล้วหรือยัง?",
						"hindi": "क्या तुम भी... बलिदान के लिए तैयार हो?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "mara",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 길의 끝은 희생이야. 너희도 곧 알게 될 거야.",
						"english": "The end of this path is sacrifice. You'll soon find out.",
						"japanese": "この道の果ては犠牲だ。お前たちもすぐに知ることになるだろう。",
						"chinese": "这条路的尽头是牺牲。你们很快就会明白。",
						"french": "La fin de ce chemin est le sacrifice. Vous le découvrirez bientôt.",
						"spanish": "El final de este camino es el sacrificio. Pronto lo descubrirán.",
						"vietnamese": "Cuối con đường này là sự hy sinh. Các ngươi sẽ sớm biết thôi.",
						"thai": "ปลายทางของเส้นทางนี้คือการเสียสละ พวกเจ้าจะได้รู้ในไม่ช้า",
						"hindi": "इस रास्ते का अंत बलिदान है। तुम जल्द ही जान जाओगे।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…두렵지 않아.",
						"english": "...I'm not afraid.",
						"japanese": "…恐れてはいない。",
						"chinese": "…我不害怕。",
						"french": "...Je n'ai pas peur.",
						"spanish": "...No tengo miedo.",
						"vietnamese": "...Tôi không sợ.",
						"thai": "...ไม่กลัวหรอก",
						"hindi": "...मैं डरा नहीं हूँ।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "우리는 이미 많은 것을 잃었으니까.",
						"english": "We've already lost so much.",
						"japanese": "私たちはもう多くを失ったから。",
						"chinese": "我们已经失去太多了。",
						"french": "Nous avons déjà tant perdu.",
						"spanish": "Ya hemos perdido mucho.",
						"vietnamese": "Vì chúng ta đã mất quá nhiều rồi.",
						"thai": "เพราะเราได้สูญเสียมามากแล้ว",
						"hindi": "हमने पहले ही बहुत कुछ खो दिया है।"
					}
				},
				{
					"content": {
						"korean": "…결심했구나. 그럼, 그들의 고통을 잊지 마.",
						"english": "...You've decided. Then, don't forget their suffering.",
						"japanese": "…決めたか。ならば、彼らの苦しみを忘れるな。",
						"chinese": "…你决定了。那么，不要忘记他们的痛苦。",
						"french": "...Tu as décidé. Alors, n'oublie pas leur souffrance.",
						"spanish": "...Has decidido. Entonces, no olvides su sufrimiento.",
						"vietnamese": "...Ngươi đã quyết định rồi. Vậy thì, đừng quên nỗi đau của họ.",
						"thai": "...เจ้าตัดสินใจแล้วสินะ ถ้าอย่างนั้น อย่าลืมความเจ็บปวดของพวกเขา",
						"hindi": "...तुमने फैसला कर लिया। तो, उनके दर्द को मत भूलना।"
					},
					"speaker": "mara",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "마라의 노래는 멈췄다. 하지만 슬픔은 여전히 공기를 채웠다.",
						"english": "Mara's song ceased. But sorrow still filled the air.",
						"japanese": "マーラの歌は止んだ。しかし、悲しみは依然として空気を満たしていた。",
						"chinese": "玛拉的歌声停止了。但悲伤依然弥漫在空气中。",
						"french": "Le chant de Mara s'est tu. Mais la tristesse emplissait toujours l'air.",
						"spanish": "La canción de Mara cesó. Pero la tristeza aún llenaba el aire.",
						"vietnamese": "Bài ca của Mara đã ngừng. Nhưng nỗi buồn vẫn tràn ngập không khí.",
						"thai": "เพลงของมาราหยุดลงแล้ว แต่ความเศร้ายังคงเติมเต็มอากาศ",
						"hindi": "मारा का गीत रुक गया। लेकिन दुख अभी भी हवा में भर गया था।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 심연의 고통이 응축된 존재였다.",
						"english": "A colossal shadow blocked the path. A being born of the abyss's condensed agony.",
						"japanese": "巨大な影が道を阻んだ。それは深淵の苦痛が凝縮された存在だった。",
						"chinese": "巨大的影子挡住了去路。那是深渊痛苦凝结而成的存在。",
						"french": "Une ombre colossale barra le chemin. C'était une entité condensée de la souffrance de l'abîme.",
						"spanish": "Una sombra colosal bloqueó el camino. Era una entidad condensada del sufrimiento del abismo.",
						"vietnamese": "Một bóng tối khổng lồ chặn đường. Đó là một thực thể cô đọng từ nỗi đau của vực thẳm.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันคือสิ่งมีชีวิตที่ถูกควบแน่นจากความเจ็บปวดของห้วงลึก",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह रसातल के दुख से संघनित एक इकाई थी।"
					}
				},
				{
					"content": {
						"korean": "이곳에 발을 들이다니. 어리석은 필멸자들.",
						"english": "To set foot in this place. Foolish mortals.",
						"japanese": "この地に足を踏み入れるとは。愚かなる定命の者たちよ。",
						"chinese": "竟敢踏足此地。愚蠢的凡人。",
						"french": "Oser mettre le pied ici. Mortels insensés.",
						"spanish": "Poner un pie en este lugar. Mortales necios.",
						"vietnamese": "Dám đặt chân đến nơi này. Những kẻ phàm tục ngu ngốc.",
						"thai": "กล้าเข้ามาในที่แห่งนี้งั้นรึ มนุษย์ผู้โง่เขลา",
						"hindi": "इस जगह में कदम रखने की हिम्मत। मूर्ख नश्वर।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "너희도 곧 '균형'을 위한 희생이 될 것이다.",
						"english": "You too shall soon become sacrifices for 'balance'.",
						"japanese": "お前たちもじきに、『均衡』のための犠牲となるだろう。",
						"chinese": "你们也很快就会成为‘平衡’的牺牲品。",
						"french": "Vous aussi deviendrez bientôt des sacrifices pour l'équilibre.",
						"spanish": "Vosotros también os convertiréis pronto en sacrificios para el 'equilibrio'.",
						"vietnamese": "Các ngươi cũng sẽ sớm trở thành vật tế cho 'cân bằng' mà thôi.",
						"thai": "พวกเจ้าก็จะกลายเป็นเครื่องสังเวยเพื่อ 'สมดุล' ในไม่ช้า",
						"hindi": "तुम भी जल्द ही 'संतुलन' के लिए बलिदान बन जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "더 이상 희생은 없어. 여기서 끝낼 거야!",
						"english": "No more sacrifices. I'll end it here!",
						"japanese": "これ以上の犠牲は出さない。ここで終わらせる！",
						"chinese": "不会再有牺牲了。我会在这里结束一切！",
						"french": "Plus de sacrifices. Je vais y mettre fin ici !",
						"spanish": "No más sacrificios. ¡Lo terminaré aquí!",
						"vietnamese": "Không còn hy sinh nào nữa. Ta sẽ kết thúc nó ở đây!",
						"thai": "จะไม่มีการเสียสละอีกแล้ว ข้าจะยุติมันที่นี่!",
						"hindi": "अब कोई बलिदान नहीं। मैं इसे यहीं खत्म कर दूँगा!"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으윽… 어리석은 자들… 너희가 안다고 생각하는 '균형'은…",
						"english": "Ugh... Foolish ones... The 'balance' you think you know...",
						"japanese": "くっ…愚か者どもめ…お前たちが知っているつもりの『均衡』とは…",
						"chinese": "呃啊…愚蠢的家伙们…你们自以为知道的‘平衡’是…",
						"french": "Argh... Insensés... L'équilibre que vous croyez connaître...",
						"spanish": "Ugh... Necios... El 'equilibrio' que creéis conocer...",
						"vietnamese": "Khụ khụ… Những kẻ ngu ngốc… Cái 'cân bằng' mà các ngươi nghĩ mình biết…",
						"thai": "อ๊ากกก... พวกโง่เง่า... 'สมดุล' ที่พวกเจ้าคิดว่ารู้จักน่ะ...",
						"hindi": "उफ़... मूर्खों... वह 'संतुलन' जिसे तुम जानते हो..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…누군가 강제해야만 존재한다…",
						"english": "...only exists if someone enforces it.",
						"japanese": "…誰かが強制してこそ存在するのだ…",
						"chinese": "…只有在有人强制时才存在…",
						"french": "...n'existe que si quelqu'un l'impose...",
						"spanish": "...solo existe si alguien lo impone...",
						"vietnamese": "...chỉ tồn tại khi có kẻ cưỡng chế nó…",
						"thai": "...มีอยู่ได้ก็เพราะมีคนบังคับมัน...",
						"hindi": "...तभी मौजूद रहता है जब कोई उसे लागू करता है..."
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭐라고?",
						"english": "What?",
						"japanese": "「何だと？」",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Cái gì?",
						"thai": "ว่าอะไรนะ?",
						"hindi": "क्या?"
					}
				},
				{
					"content": {
						"korean": "그림자 없는 자는 사라졌다. 하지만 그 마지막 말은 새로운 의문을 남겼다.",
						"english": "The Shadowless One is gone. But their last words left a new mystery.",
						"japanese": "「影なき者は消えた。だが、その最後の言葉は新たな疑問を残した。」",
						"chinese": "无影者消失了。但它最后的遗言留下了一个新的谜团。",
						"french": "L'Insaisissable a disparu. Mais ses derniers mots ont laissé un nouveau mystère.",
						"spanish": "El Ser sin Sombra ha desaparecido. Pero sus últimas palabras dejaron un nuevo misterio.",
						"vietnamese": "Kẻ Vô Ảnh đã biến mất. Nhưng những lời cuối cùng của chúng để lại một bí ẩn mới.",
						"thai": "ผู้ไร้เงาหายไปแล้ว แต่คำพูดสุดท้ายของมันทิ้งปริศนาใหม่ไว้",
						"hindi": "छायाहीन चला गया। लेकिन उसके अंतिम शब्द एक नया रहस्य छोड़ गए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "균형을 강제하는 존재. 다음 의문을 찾아 나설 시간이었다.",
						"english": "The entity that enforces balance. It was time to seek out the next mystery.",
						"japanese": "「均衡を強制する存在。次の疑問を探しに出る時が来た。」",
						"chinese": "强制平衡的存在。是时候去寻找下一个谜团了。",
						"french": "L'entité qui impose l'équilibre. Il était temps de partir à la recherche du prochain mystère.",
						"spanish": "La entidad que impone el equilibrio. Era hora de buscar el siguiente misterio.",
						"vietnamese": "Thực thể duy trì sự cân bằng. Đã đến lúc tìm kiếm bí ẩn tiếp theo.",
						"thai": "ผู้ที่บังคับสมดุล ถึงเวลาออกค้นหาปริศนาต่อไปแล้ว",
						"hindi": "संतुलन को लागू करने वाली इकाई। अगले रहस्य को खोजने का समय आ गया था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 존재들. 너희의 고통도 나의 일부가 될 것이다.",
						"english": "Insignificant beings. Your suffering shall become a part of me.",
						"japanese": "「取るに足らぬ者ども。お前たちの苦痛もまた、我の一部となるだろう。」",
						"chinese": "渺小的存在。你们的痛苦也将成为我的一部分。",
						"french": "Êtres insignifiants. Vos souffrances feront partie de moi.",
						"spanish": "Seres insignificantes. Vuestro sufrimiento se convertirá en parte de mí.",
						"vietnamese": "Những kẻ nhỏ bé. Nỗi đau của các ngươi sẽ trở thành một phần của ta.",
						"thai": "พวกสิ่งมีชีวิตไร้ค่า ความทุกข์ทรมานของพวกเจ้าจะกลายเป็นส่วนหนึ่งของข้า",
						"hindi": "तुच्छ प्राणी। तुम्हारी पीड़ा भी मेरा एक हिस्सा बन जाएगी।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "「まだ…終わってない！」",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Chưa... kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ!"
					}
				},
				{
					"content": {
						"korean": "심연의 그림자가 모든 것을 집어삼켰다. 하지만 그들의 의지는 꺾이지 않았다.",
						"english": "The shadow of the abyss swallowed everything. But their will remained unbroken.",
						"japanese": "「深淵の影が全てを飲み込んだ。しかし、彼らの意思は挫けなかった。」",
						"chinese": "深渊的阴影吞噬了一切。但他们的意志并未被击垮。",
						"french": "L'ombre de l'abysse a tout englouti. Mais leur volonté est restée intacte.",
						"spanish": "La sombra del abismo lo devoró todo. Pero su voluntad permaneció inquebrantable.",
						"vietnamese": "Bóng tối vực sâu nuốt chửng mọi thứ. Nhưng ý chí của họ vẫn không bị bẻ gãy.",
						"thai": "เงามืดแห่งห้วงลึกกลืนกินทุกสิ่ง แต่เจตจำนงของพวกเขายังคงไม่แตกหัก",
						"hindi": "गहरे की छाया ने सब कुछ निगल लिया। लेकिन उनकी इच्छा अडिग रही।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"심연의 문이 닫힌 후, 세계는 비틀렸다.",
			"그림자 없는 자들이 배회하고, 잃어버린 영혼들은 울부짖었다.",
			"고통의 노래가 메아리치는 곳, 마라가 기다린다.",
			"그녀의 노래는 단순한 슬픔이 아니었다. 비극의 진실이었다."
		],
		"english": [
			"After the Abyss Gate closed, the world warped.",
			"Shadowless ones roamed, lost souls wailed.",
			"Where the song of suffering echoes, Mara waits.",
			"Her song wasn't mere sorrow. It was the truth of tragedy."
		],
		"japanese": [
			"深淵の扉が閉じた後、世界は歪んだ。",
			"影なき者たちが彷徨い、失われた魂は泣き叫んだ。",
			"苦痛の歌が響く場所、マラが待つ。",
			"彼女の歌は単なる悲しみではなかった。それは悲劇の真実だった。"
		],
		"chinese": [
			"深渊之门关闭后，世界扭曲了。",
			"无影者徘徊，迷失的灵魂哭嚎。",
			"痛苦之歌回荡之处，玛拉在此等候。",
			"她的歌并非简单的悲伤。那是悲剧的真相。"
		],
		"french": [
			"Après la fermeture du portail des Abysses, le monde a été déformé.",
			"Les sans-ombres erraient, les âmes perdues hurlaient.",
			"Là où le chant de la souffrance résonne, Mara attend.",
			"Son chant n'était pas que tristesse. C'était la vérité d'une tragédie."
		],
		"spanish": [
			"Tras el cierre del Portal del Abismo, el mundo se retorció.",
			"Los sin sombra vagaban, las almas perdidas gemían.",
			"Donde el canto del sufrimiento resuena, Mara espera.",
			"Su canto no era solo tristeza. Era la verdad de la tragedia."
		],
		"vietnamese": [
			"Sau khi Cổng Vực Sâu đóng lại, thế giới đã bị vặn vẹo.",
			"Những kẻ không bóng lang thang, những linh hồn lạc lối gào thét.",
			"Nơi tiếng hát của khổ đau vang vọng, Mara đang chờ đợi.",
			"Bài hát của cô ấy không chỉ là nỗi buồn. Đó là sự thật của bi kịch."
		],
		"thai": [
			"หลังจากประตูลึกปิดลง โลกก็บิดเบี้ยว",
			"ผู้ไร้เงาเร่ร่อน ดวงวิญญาณที่หายไปคร่ำครวญ",
			"ที่ที่เสียงเพลงแห่งความทุกข์ทรมานก้องกังวาน มารากำลังรออยู่",
			"เพลงของเธอมิใช่เพียงความโศกเศร้า แต่มันคือความจริงของโศกนาฏกรรม"
		],
		"hindi": [
			"पाताल का द्वार बंद होने के बाद, दुनिया विकृत हो गई।",
			"छायाहीन भटकते रहे, खोई हुई आत्माएँ विलाप कर रही थीं।",
			"जहाँ पीड़ा का गीत गूँजता है, मारा प्रतीक्षा करती है।",
			"उसका गीत केवल दुःख नहीं था। यह त्रासदी का सच था।"
		]
	}
} as const;
