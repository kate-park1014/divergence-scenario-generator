export const scenario_forest_sorrowfulheart_52_02 = {
	"scenario_id": "forest_sorrowfulheart_52_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "안개 낀 숲 속, 길은 더욱 희미해졌다.",
						"english": "In the foggy forest, the path grew even fainter.",
						"japanese": "霧深い森の中、道はさらに薄暗くなった。",
						"chinese": "在迷雾森林中，道路变得更加模糊。",
						"french": "Dans la forêt brumeuse, le chemin s'estompa davantage.",
						"spanish": "En el bosque neblinoso, el camino se volvió aún más tenue.",
						"vietnamese": "Trong khu rừng sương mù, con đường càng trở nên mờ mịt.",
						"thai": "ในป่าที่เต็มไปด้วยหมอก เส้นทางยิ่งเลือนลาง",
						"hindi": "धुंधले जंगल में, रास्ता और भी धुंधला होता गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "씨앗은 어디에 있다는 거지?",
						"english": "Where is the Seed?",
						"japanese": "種はどこにあるんだ？",
						"chinese": "种子在哪里？",
						"french": "Où est la Graine ?",
						"spanish": "¿Dónde está la Semilla?",
						"vietnamese": "Hạt giống ở đâu?",
						"thai": "เมล็ดพันธุ์อยู่ที่ไหน?",
						"hindi": "बीज कहाँ है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "길을 잃었군. 내가 숲의 관리자 브라이어다.",
						"english": "Lost your way, have you? I am Briar, the forest guardian.",
						"japanese": "道に迷ったようだな。私は森の管理者、ブライアだ。",
						"chinese": "迷路了吗？我是森林守护者布莱尔。",
						"french": "Tu t'es perdu, n'est-ce pas ? Je suis Briar, la gardienne de la forêt.",
						"spanish": "¿Te has perdido? Soy Briar, la guardiana del bosque.",
						"vietnamese": "Lạc đường rồi sao? Ta là Briar, người bảo vệ khu rừng.",
						"thai": "หลงทางแล้วสินะ? ข้าคือไบรเออร์ ผู้พิทักษ์ป่า",
						"hindi": "रास्ता भटक गए? मैं जंगल की रखवाली करने वाली ब्रायर्स हूँ।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "briar",
					"content": {
						"korean": "씨앗은 병들어가고 있어. '정화 의식'만이 숲을 구할 수 있다.",
						"english": "The Seed is ailing. Only the 'Purification Ritual' can save the forest.",
						"japanese": "種は病んでいる。「浄化の儀式」だけが森を救える。",
						"chinese": "种子正在生病。只有“净化仪式”才能拯救森林。",
						"french": "La Graine dépérit. Seul le \"Rituel de Purification\" peut sauver la forêt.",
						"spanish": "La Semilla está enfermando. Solo el \"Ritual de Purificación\" puede salvar el bosque.",
						"vietnamese": "Hạt giống đang yếu dần. Chỉ có 'Nghi lễ Thanh tẩy' mới có thể cứu khu rừng.",
						"thai": "เมล็ดพันธุ์กำลังป่วย มีเพียง 'พิธีชำระล้าง' เท่านั้นที่จะช่วยป่าได้",
						"hindi": "बीज बीमार पड़ रहा है। केवल 'शुद्धिकरण अनुष्ठान' ही जंगल को बचा सकता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정화 의식… 무엇을 해야 하죠?",
						"english": "Purification Ritual... What must I do?",
						"japanese": "浄化の儀式…何をすればいいですか？",
						"chinese": "净化仪式……我该怎么做？",
						"french": "Rituel de Purification... Que dois-je faire ?",
						"spanish": "Ritual de Purificación... ¿Qué debo hacer?",
						"vietnamese": "Nghi lễ Thanh tẩy… Tôi phải làm gì?",
						"thai": "พิธีชำระล้าง... ข้าต้องทำอะไรบ้าง?",
						"hindi": "शुद्धिकरण अनुष्ठान… मुझे क्या करना होगा?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "특정 약초가 필요해. 내가 알려줄 테니, 따르라.",
						"english": "Specific herbs are needed. I will tell you; follow my lead.",
						"japanese": "特定の薬草が必要だ。私が教えてやるから、従え。",
						"chinese": "需要特定的药草。我会告诉你，照做就行。",
						"french": "Des herbes spécifiques sont nécessaires. Je te dirai lesquelles ; suis-moi.",
						"spanish": "Se necesitan hierbas específicas. Yo te diré cuáles; sígueme.",
						"vietnamese": "Cần những loại thảo mộc đặc biệt. Ta sẽ chỉ cho ngươi, hãy theo ta.",
						"thai": "ต้องการสมุนไพรบางชนิด ข้าจะบอกเจ้า จงทำตาม",
						"hindi": "कुछ खास जड़ी-बूटियों की जरूरत है। मैं तुम्हें बताऊँगी, बस मेरा अनुसरण करो।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "briar",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 약초들을 모아야 해. '핏빛 뿌리'는 어둠 속에서만 그 힘을 드러내지.",
						"english": "We must gather these herbs. The 'Crimson Root' reveals its power only in darkness.",
						"japanese": "これらの薬草を集めなければならない。「紅の根」は闇の中でこそその力を現す。",
						"chinese": "我们必须收集这些草药。‘血色之根’只在黑暗中显露其力量。",
						"french": "Nous devons récolter ces herbes. La 'Racine Écarlate' ne révèle sa puissance que dans l'obscurité.",
						"spanish": "Debemos recolectar estas hierbas. La 'Raíz Carmesí' solo revela su poder en la oscuridad.",
						"vietnamese": "Chúng ta phải thu thập những loại thảo mộc này. 'Rễ Máu' chỉ bộc lộ sức mạnh của nó trong bóng tối.",
						"thai": "เราต้องเก็บสมุนไพรเหล่านี้ 'รากสีเลือด' จะแสดงพลังของมันในความมืดเท่านั้น",
						"hindi": "हमें इन जड़ी-बूटियों को इकट्ठा करना होगा। 'रक्त मूल' अपनी शक्ति केवल अँधेरे में ही प्रकट करता है।"
					},
					"speaker": "briar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "밤에요? 너무 위험하지 않나요?",
						"english": "At night? Isn't that too dangerous?",
						"japanese": "夜にですか？危険すぎませんか？",
						"chinese": "晚上？那不是很危险吗？",
						"french": "La nuit ? N'est-ce pas trop dangereux ?",
						"spanish": "¿De noche? ¿No es demasiado peligroso?",
						"vietnamese": "Vào ban đêm sao? Không quá nguy hiểm sao?",
						"thai": "ตอนกลางคืนหรือครับ/คะ? มันไม่อันตรายเกินไปเหรอ?",
						"hindi": "रात में? क्या यह बहुत खतरनाक नहीं है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "씨앗의 고통에 비하면 아무것도 아니야. 망설일 시간이 없어. 서둘러라.",
						"english": "It's nothing compared to the Seed's suffering. There's no time to hesitate. Hurry.",
						"japanese": "種の苦痛に比べれば何でもない。ためらっている暇はない。急げ。",
						"chinese": "与种子的痛苦相比，这不算什么。没有时间犹豫了。快点。",
						"french": "Ce n'est rien comparé à la souffrance de la Graine. Il n'y a pas de temps à hésiter. Dépêche-toi.",
						"spanish": "No es nada comparado con el sufrimiento de la Semilla. No hay tiempo para dudar. Date prisa.",
						"vietnamese": "Chẳng là gì so với nỗi đau của Hạt giống. Không có thời gian để do dự. Nhanh lên.",
						"thai": "มันไม่มีอะไรเลยเมื่อเทียบกับความทุกข์ทรมานของเมล็ดพืช ไม่มีเวลาลังเลแล้ว รีบเข้า",
						"hindi": "बीज के दर्द की तुलना में यह कुछ भी नहीं है। संकोच करने का समय नहीं है। जल्दी करो।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만…",
						"english": "But...",
						"japanese": "しかし…",
						"chinese": "但是…",
						"french": "Mais…",
						"spanish": "Pero…",
						"vietnamese": "Nhưng mà…",
						"thai": "แต่ว่า...",
						"hindi": "परंतु..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "의심하지 마. 오직 나만이 이 숲을 진정으로 이해하고 있다.",
						"english": "Do not doubt. Only I truly understand this forest.",
						"japanese": "疑うな。この森を真に理解しているのは私だけだ。",
						"chinese": "不要怀疑。只有我才真正了解这片森林。",
						"french": "Ne doute pas. Moi seul comprends vraiment cette forêt.",
						"spanish": "No dudes. Solo yo entiendo verdaderamente este bosque.",
						"vietnamese": "Đừng nghi ngờ. Chỉ có ta mới thực sự hiểu khu rừng này.",
						"thai": "อย่าสงสัย มีเพียงข้าเท่านั้นที่เข้าใจป่านี้อย่างแท้จริง",
						"hindi": "संदेह मत करो। केवल मैं ही इस जंगल को सचमुच समझता हूँ।"
					},
					"speaker": "briar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "briar",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 깊은 곳에 가야 해. '달무리 버섯'은 숲의 가장 은밀한 곳에 숨어있지.",
						"english": "We must go deeper. The 'Moon-Halo Mushroom' hides in the forest's most secret places.",
						"japanese": "もっと奥へ行かなければならない。「月光茸」は森の最も隠された場所に潜んでいる。",
						"chinese": "我们必须去更深的地方。‘月晕蘑菇’藏在森林最隐秘之处。",
						"french": "Nous devons aller plus profond. Le 'Champignon Aura Lunaire' se cache dans les recoins les plus secrets de la forêt.",
						"spanish": "Debemos ir más profundo. El 'Hongo Halo Lunar' se esconde en los lugares más secretos del bosque.",
						"vietnamese": "Chúng ta phải đi sâu hơn nữa. 'Nấm Hào Quang Mặt Trăng' ẩn mình ở những nơi bí mật nhất của khu rừng.",
						"thai": "เราต้องเข้าไปลึกกว่านี้ 'เห็ดแสงจันทร์' ซ่อนอยู่ในที่ลับที่สุดของป่า",
						"hindi": "हमें और गहराई में जाना होगा। 'चंद्र-मंडल मशरूम' जंगल के सबसे गुप्त स्थानों में छिपा है।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 이상해요. 어떤 곳은 너무 생명력이 넘치고, 어떤 곳은 시들어가고 있어요.",
						"english": "The forest is strange. Some parts are overflowing with life, while others are withering away.",
						"japanese": "森がおかしいです。ある場所は生命力にあふれ、ある場所は枯れていっています。",
						"chinese": "森林很奇怪。有些地方生机勃勃，有些地方却在枯萎。",
						"french": "La forêt est étrange. Certaines parties débordent de vie, tandis que d'autres dépérissent.",
						"spanish": "El bosque es extraño. Algunas partes rebosan de vida, mientras que otras se están marchitando.",
						"vietnamese": "Khu rừng thật kỳ lạ. Một số nơi tràn đầy sức sống, trong khi những nơi khác lại đang héo tàn.",
						"thai": "ป่าแปลกไป บางส่วนเต็มไปด้วยชีวิตชีวา ในขณะที่บางส่วนกำลังเหี่ยวเฉา",
						"hindi": "जंगल अजीब है। कुछ हिस्से जीवन से भरपूर हैं, जबकि कुछ सूख रहे हैं।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그것이 씨앗의 고통이 숲에 미치는 영향이다. 의식만이 해결책이지.",
						"english": "That is the Seed's suffering affecting the forest. Only the ritual is the solution.",
						"japanese": "それが種の苦痛が森に与える影響だ。儀式だけが解決策なのだ。",
						"chinese": "那是种子痛苦对森林的影响。只有仪式才是解决之道。",
						"french": "C'est l'influence de la souffrance de la Graine sur la forêt. Seul le rituel est la solution.",
						"spanish": "Ese es el efecto del sufrimiento de la Semilla en el bosque. Solo el ritual es la solución.",
						"vietnamese": "Đó là ảnh hưởng của nỗi đau của Hạt giống lên khu rừng. Chỉ có nghi lễ mới là giải pháp.",
						"thai": "นั่นคือผลกระทบจากความทุกข์ทรมานของเมล็ดพืชที่มีต่อป่า มีเพียงพิธีกรรมเท่านั้นที่เป็นทางออก",
						"hindi": "यह बीज के दर्द का जंगल पर पड़ रहा प्रभाव है। केवल अनुष्ठान ही इसका समाधान है।"
					},
					"speaker": "briar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "briar",
					"content": {
						"korean": "그리고 의식에는 이 '생명석'이 필요해. 숲의 기운을 담아 씨앗에 바칠 것이다.",
						"english": "And the ritual requires this 'Life Stone'. It will absorb the forest's energy and be offered to the Seed.",
						"japanese": "そして儀式にはこの「生命石」が必要だ。森の気を込めて種に捧げるのだ。",
						"chinese": "而仪式需要这块‘生命石’。它将承载森林的气息，献给种子。",
						"french": "Et le rituel exige cette 'Pierre de Vie'. Elle absorbera l'énergie de la forêt et sera offerte à la Graine.",
						"spanish": "Y el ritual requiere esta 'Piedra de Vida'. Contendrá la energía del bosque y será ofrecida a la Semilla.",
						"vietnamese": "Và nghi lễ cần 'Đá Sinh Mệnh' này. Nó sẽ hấp thụ năng lượng của khu rừng và được dâng lên Hạt giống.",
						"thai": "และพิธีกรรมนี้ต้องการ 'ศิลาชีวิต' มันจะดูดซับพลังของป่าและถูกถวายแด่เมล็ดพืช",
						"hindi": "और अनुष्ठान के लिए इस 'जीवन पत्थर' की आवश्यकता है। यह जंगल की ऊर्जा को समाहित कर बीज को अर्पित किया जाएगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "생명석… 숲의 기운을 바친다고요?",
						"english": "Life Stone... offer the forest's energy?",
						"japanese": "生命石…森の気を捧げるのですか？",
						"chinese": "生命石……献上森林的气息？",
						"french": "Pierre de Vie... offrir l'énergie de la forêt ?",
						"spanish": "¿Piedra de Vida... ofrecer la energía del bosque?",
						"vietnamese": "Đá Sinh Mệnh... dâng năng lượng của khu rừng sao?",
						"thai": "ศิลาชีวิต... ถวายพลังของป่าหรือครับ/คะ?",
						"hindi": "जीवन पत्थर... जंगल की ऊर्जा अर्पित करनी है?"
					}
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "네 역할은 따르는 것. 의심은 방해만 될 뿐이다.",
						"english": "Your role is to obey. Doubt only hinders.",
						"japanese": "お前の役目は従うことだ。疑念は邪魔になるだけだ。",
						"chinese": "你的职责是服从。怀疑只会成为阻碍。",
						"french": "Ton rôle est d'obéir. Le doute n'est qu'une entrave.",
						"spanish": "Tu papel es obedecer. La duda solo obstaculiza.",
						"vietnamese": "Vai trò của ngươi là tuân theo. Nghi ngờ chỉ là sự cản trở.",
						"thai": "บทบาทของเจ้าคือการเชื่อฟัง ความสงสัยเป็นเพียงอุปสรรค",
						"hindi": "तुम्हारी भूमिका आज्ञापालन की है। संदेह केवल बाधा उत्पन्न करता है।"
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 심장이 가까워질수록, 기운은 더욱 이질적으로 변했다.",
						"english": "As we neared the forest's heart, the aura grew increasingly alien.",
						"japanese": "森の心臓に近づくにつれて、気配はより異質になっていった。",
						"chinese": "随着我们接近森林之心，气息变得愈发陌生。",
						"french": "À mesure que nous approchions du cœur de la forêt, l'aura devenait de plus en plus étrange.",
						"spanish": "Con cada paso hacia el corazón del bosque, el aura se volvía más extraña.",
						"vietnamese": "Càng đến gần trái tim khu rừng, luồng khí càng trở nên xa lạ.",
						"thai": "ยิ่งเข้าใกล้ใจกลางป่ามากเท่าไหร่ บรรยากาศก็ยิ่งแปลกประหลาดขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे हम जंगल के हृदय के करीब पहुँचे, आभा और भी पराई होती गई।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "briar"
				},
				{
					"type": "speech",
					"speaker": "briar",
					"content": {
						"korean": "거의 다 왔어. 마지막 약초인 '밤그늘 꽃'을 찾아야 한다.",
						"english": "We're almost there. We need to find the last herb, the 'Nightshade Blossom'.",
						"japanese": "もうすぐだ。最後の薬草、「夜影の花」を見つけなければ。",
						"chinese": "差不多到了。我们需要找到最后的药草，“夜影花”。",
						"french": "Nous y sommes presque. Il faut trouver la dernière herbe, la « Fleur d'Ombre Nocturne ».",
						"spanish": "Ya casi llegamos. Necesitamos encontrar la última hierba, la 'Flor de Sombra Nocturna'.",
						"vietnamese": "Gần đến rồi. Chúng ta phải tìm loại thảo dược cuối cùng, 'Hoa Bóng Đêm'.",
						"thai": "ใกล้ถึงแล้ว เราต้องหาพืชสมุนไพรสุดท้าย 'บุปผาเงามืด'",
						"hindi": "हम लगभग पहुँच गए हैं। हमें आखिरी जड़ी-बूटी, 'निशाकुसुम' ढूंढनी होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "저… 이상한 소리가 들려요. 희미한 속삭임 같아요…",
						"english": "I... I hear strange sounds. Like faint whispers...",
						"japanese": "あの…奇妙な音が聞こえます。かすかな囁き声のようです…",
						"chinese": "我…我听到奇怪的声音。像微弱的低语…",
						"french": "Je... j'entends des bruits étranges. Comme de faibles murmures...",
						"spanish": "Yo... oigo ruidos extraños. Como susurros débiles...",
						"vietnamese": "Tôi… tôi nghe thấy những âm thanh kỳ lạ. Giống như những lời thì thầm yếu ớt…",
						"thai": "ฉัน... ฉันได้ยินเสียงแปลกๆ เหมือนเสียงกระซิบเบาๆ...",
						"hindi": "मुझे… मुझे अजीब आवाज़ें सुनाई दे रही हैं। जैसे हल्की फुसफुसाहट…"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환청일 뿐이야. 씨앗이 회복되면 사라질 것이다. 집중해.",
						"english": "It's just an illusion. It'll vanish once the seed recovers. Focus.",
						"japanese": "幻聴にすぎない。種子が回復すれば消えるだろう。集中しろ。",
						"chinese": "那只是幻听。种子恢复后就会消失。集中注意力。",
						"french": "Ce n'est qu'une illusion. Ça disparaîtra une fois la graine récupérée. Concentre-toi.",
						"spanish": "Es solo una ilusión. Desaparecerá una vez que la semilla se recupere. Concéntrate.",
						"vietnamese": "Đó chỉ là ảo giác thôi. Nó sẽ biến mất khi hạt giống hồi phục. Tập trung đi.",
						"thai": "มันเป็นแค่ภาพหลอนเท่านั้น มันจะหายไปเมื่อเมล็ดฟื้นตัว จงมีสมาธิ",
						"hindi": "यह सिर्फ एक भ्रम है। बीज के ठीक होते ही यह गायब हो जाएगा। ध्यान केंद्रित करो।"
					},
					"speaker": "briar"
				},
				{
					"content": {
						"korean": "하지만… 점점 더 선명하게 들리는 것 같아요.",
						"english": "But... it sounds clearer and clearer now.",
						"japanese": "でも…だんだんとはっきりと聞こえるような気がします。",
						"chinese": "但是…我感觉它听起来越来越清晰了。",
						"french": "Mais... j'ai l'impression que c'est de plus en plus clair.",
						"spanish": "Pero... me parece que se escucha cada vez más claro.",
						"vietnamese": "Nhưng… tôi cảm thấy nó nghe ngày càng rõ ràng hơn.",
						"thai": "แต่... เหมือนจะได้ยินชัดเจนขึ้นเรื่อยๆ เลยค่ะ",
						"hindi": "लेकिन… यह मुझे और भी स्पष्ट सुनाई दे रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네 역할은 순종하는 것. 알겠나? 방해하지 마.",
						"english": "Your role is to obey. Understand? Don't interfere.",
						"japanese": "お前の役目は従順であることだ。分かったか？邪魔をするな。",
						"chinese": "你的职责是顺从。明白吗？不要打扰。",
						"french": "Ton rôle est d'être obéissant. Comprends-tu ? Ne dérange pas.",
						"spanish": "Tu papel es obedecer. ¿Entiendes? No interfieras.",
						"vietnamese": "Vai trò của ngươi là tuân phục. Hiểu chứ? Đừng cản trở.",
						"thai": "บทบาทของเจ้าคือการเชื่อฟัง เข้าใจไหม? อย่าขัดขวาง",
						"hindi": "तुम्हारी भूमिका आज्ञाकारी होने की है। समझ गए? बाधा मत डालो।"
					},
					"speaker": "briar",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "….",
						"english": "....",
						"japanese": "....",
						"chinese": "....",
						"french": "....",
						"spanish": "....",
						"vietnamese": "....",
						"thai": "....",
						"hindi": "...."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳, 거대한 그림자가 길을 막아섰다.",
						"english": "In the deepest part of the forest, a colossal shadow blocked our path.",
						"japanese": "森の最深部で、巨大な影が道を阻んだ。",
						"chinese": "在森林最深处，一道巨大的阴影挡住了去路。",
						"french": "Dans la partie la plus profonde de la forêt, une ombre colossale barra le chemin.",
						"spanish": "En lo más profundo del bosque, una sombra colosal bloqueó el camino.",
						"vietnamese": "Tại nơi sâu thẳm nhất khu rừng, một bóng đen khổng lồ đã chắn lối đi.",
						"thai": "ในส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาขวางทางเราไว้",
						"hindi": "जंगल के सबसे गहरे हिस्से में, एक विशाल छाया ने हमारा रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "더 이상은… 못 간다.",
						"english": "No further... we cannot go on.",
						"japanese": "これ以上は…行けない。",
						"chinese": "不能再往前了…",
						"french": "Pas plus loin... nous ne pouvons pas continuer.",
						"spanish": "No más... no podemos avanzar.",
						"vietnamese": "Không thể đi tiếp được nữa…",
						"thai": "ไปต่อไม่ได้แล้ว...",
						"hindi": "अब और नहीं… हम नहीं जा सकते।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 왜 우리를 막는 거지?",
						"english": "Why do you stop us?",
						"japanese": "なぜ我々を阻む？",
						"chinese": "你为何阻拦我们？",
						"french": "Pourquoi nous barrez-vous la route ?",
						"spanish": "¿Por qué nos detienes?",
						"vietnamese": "Ngươi cản đường chúng ta làm gì?",
						"thai": "ทำไมเจ้าถึงขวางพวกเรา?",
						"hindi": "तुम हमें क्यों रोक रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그녀의 뜻이다. '그녀'의 의지는… 절대적이지.",
						"english": "It is her will. 'Her' will... is absolute.",
						"japanese": "彼女の意志だ。『彼女』の意志は…絶対的だ。",
						"chinese": "这是她的旨意。'她'的意志…是绝对的。",
						"french": "C'est sa volonté. La volonté de 'celle-ci'... est absolue.",
						"spanish": "Es su voluntad. La voluntad de 'ella'... es absoluta.",
						"vietnamese": "Đó là ý muốn của cô ấy. Ý chí của 'cô ấy'... là tuyệt đối.",
						"thai": "เป็นความประสงค์ของนาง เจตจำนงของ 'นาง'...เป็นที่สุด",
						"hindi": "यह उसकी इच्छा है। 'उसकी' इच्छा... परम है।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "방해하는 자는 누구든 제거해라, {random_boss}.",
						"english": "Eliminate anyone who interferes, {random_boss}.",
						"japanese": "邪魔する者は誰であろうと排除せよ、{random_boss}。",
						"chinese": "无论是谁，胆敢阻挠，格杀勿论，{random_boss}。",
						"french": "Élimine quiconque interfère, {random_boss}.",
						"spanish": "Elimina a cualquiera que interfiera, {random_boss}.",
						"vietnamese": "Hãy loại bỏ bất cứ ai cản trở, {random_boss}.",
						"thai": "กำจัดใครก็ตามที่ขัดขวาง, {random_boss}.",
						"hindi": "जो कोई भी हस्तक्षेप करे, उसे खत्म कर दो, {random_boss}।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "브라이어! 이게 무슨 짓이야!",
						"english": "Briar! What is this madness?!",
						"japanese": "ブライア！一体何を企んでいるんだ！",
						"chinese": "布莱尔！你到底在做什么！",
						"french": "Briar ! Que faites-vous là !",
						"spanish": "¡Briar! ¡¿Qué estás haciendo?!",
						"vietnamese": "Briar! Cô đang làm cái quái gì vậy!",
						"thai": "ไบรเออร์! นี่มันอะไรกัน!",
						"hindi": "ब्रायर्स! यह क्या कर रहे हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "어리석은 자. 네 힘이 필요했지만, 방해는 용납 못 해. 씨앗을 위한 일이다.",
						"english": "Fool. Your power was needed, but interference cannot be tolerated. This is for the Seed.",
						"japanese": "愚かな者め。お前の力は必要だったが、邪魔は許さない。これは種のためだ。",
						"chinese": "愚蠢之人。我曾需要你的力量，但不能容忍任何阻碍。这是为了种子。",
						"french": "Imbécile. Ta force était nécessaire, mais l'ingérence ne peut être tolérée. C'est pour la Graine.",
						"spanish": "Tonto. Necesitaba tu poder, pero no toleraré tu intromisión. Esto es por la Semilla.",
						"vietnamese": "Kẻ ngốc. Ta cần sức mạnh của ngươi, nhưng không thể dung thứ sự cản trở. Đây là vì Hạt Giống.",
						"thai": "เจ้าคนโง่ ข้าต้องการพลังของเจ้า แต่การขัดขวางเป็นสิ่งที่ยอมรับไม่ได้ นี่คือเพื่อเมล็ดพันธุ์",
						"hindi": "मूर्ख। तुम्हारी शक्ति की आवश्यकता थी, लेकिन हस्तक्षेप बर्दाश्त नहीं किया जा सकता। यह बीज के लिए है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"action": "exit",
					"speaker": "briar",
					"type": "direction",
					"direction": "up"
				},
				{
					"content": {
						"korean": "브라이어가… 정말로…!",
						"english": "Briar... she really...!",
						"japanese": "ブライアが…まさか…！",
						"chinese": "布莱尔…竟然…！",
						"french": "Briar... elle a vraiment... !",
						"spanish": "¡Briar... de verdad...!",
						"vietnamese": "Briar... cô ta thật sự...!",
						"thai": "ไบรเออร์...นาง...!",
						"hindi": "ब्रायर्स... उसने वाकई...!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무거운 그림자가 모든 것을 집어삼켰다. 어둠이 짙어졌다.",
						"english": "A heavy shadow swallowed everything. Darkness deepened.",
						"japanese": "重い影が全てを飲み込んだ。闇が深まった。",
						"chinese": "沉重的阴影吞噬了一切。黑暗加深了。",
						"french": "Une lourde ombre a tout englouti. L'obscurité s'est intensifiée.",
						"spanish": "Una sombra pesada lo devoró todo. La oscuridad se profundizó.",
						"vietnamese": "Bóng tối nặng nề nuốt chửng mọi thứ. Màn đêm thêm dày đặc.",
						"thai": "เงาอันหนักอึ้งกลืนกินทุกสิ่ง ความมืดมิดทวีความรุนแรงขึ้น",
						"hindi": "एक भारी परछाई ने सब कुछ निगल लिया। अँधेरा गहरा गया।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직… 끝나지 않았어!",
						"english": "...It's not... over yet!",
						"japanese": "…まだ…終わってない！",
						"chinese": "……还没……结束！",
						"french": "…Ce n'est pas… encore fini !",
						"spanish": "…¡Aún… no ha terminado!",
						"vietnamese": "...Chưa... kết thúc đâu!",
						"thai": "...ยังไม่...จบลง!",
						"hindi": "...अभी... खत्म नहीं हुआ!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자. 그녀의 계획은… 완벽하다.",
						"english": "Fool. Her plan is... perfect.",
						"japanese": "愚か者。彼女の計画は…完璧だ。",
						"chinese": "愚蠢。她的计划……很完美。",
						"french": "Idiot. Son plan est… parfait.",
						"spanish": "Tonto. Su plan es… perfecto.",
						"vietnamese": "Kẻ ngu ngốc. Kế hoạch của cô ta... hoàn hảo.",
						"thai": "คนโง่ แผนการของนาง...สมบูรณ์แบบ",
						"hindi": "मूर्ख। उसकी योजना... सही है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "briar",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와. 네가 필요해. 씨앗은 널 기다린다.",
						"english": "Come back. I need you. The seed awaits you.",
						"japanese": "戻って来い。お前が必要だ。種はお前を待っている。",
						"chinese": "回来。我需要你。种子在等你。",
						"french": "Reviens. J'ai besoin de toi. La graine t'attend.",
						"spanish": "Vuelve. Te necesito. La semilla te espera.",
						"vietnamese": "Quay lại đi. Ta cần ngươi. Hạt giống đang đợi ngươi.",
						"thai": "กลับมา ข้าต้องการเจ้า เมล็ดพืชกำลังรอเจ้าอยู่",
						"hindi": "वापस आओ। मुझे तुम्हारी ज़रूरत है। बीज तुम्हारा इंतज़ार कर रहा है।"
					},
					"speaker": "briar",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "브라이어…! 감히…!",
						"english": "Briar...! How dare you...!",
						"japanese": "ブライアー…！よくも…！",
						"chinese": "布莱尔……！你竟敢……！",
						"french": "Briar…! Comment oses-tu… !",
						"spanish": "¡Briar...! ¡Cómo te atreves...!",
						"vietnamese": "Briar...! Ngươi dám...!",
						"thai": "ไบรอา!...กล้าดียังไง...!",
						"hindi": "ब्रायर...! तुम्हारी हिम्मत कैसे हुई...!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 마침내 쓰러졌다.",
						"english": "The massive shadow has finally fallen.",
						"japanese": "巨大な影がついに倒れた。",
						"chinese": "巨大的阴影终于倒下了。",
						"french": "L'ombre gigantesque est enfin tombée.",
						"spanish": "La enorme sombra finalmente ha caído.",
						"vietnamese": "Bóng tối khổng lồ cuối cùng đã ngã xuống.",
						"thai": "เงาขนาดมหึมาได้ล้มลงแล้วในที่สุด",
						"hindi": "विशाल छाया आखिरकार गिर गई है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이게… 브라이어가 말한 정화 의식의 일부였던 건가?",
						"english": "Was this... part of the purification ritual Briar spoke of?",
						"japanese": "これが…ブライアが言っていた浄化の儀式の一部だったのか？",
						"chinese": "这难道是…布莱尔所说的净化仪式的一部分吗？",
						"french": "Était-ce... une partie du rituel de purification dont parlait Briar ?",
						"spanish": "¿Era esto... parte del ritual de purificación del que habló Briar?",
						"vietnamese": "Đây... có phải là một phần của nghi thức thanh tẩy mà Briar đã nói không?",
						"thai": "นี่...เป็นส่วนหนึ่งของพิธีชำระล้างที่ไบรเออร์พูดถึงหรือเปล่า?",
						"hindi": "क्या यह... ब्रायर्स द्वारा बताई गई शुद्धिकरण रस्म का हिस्सा था?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "잘했어. 이제 씨앗의 고통을 끝낼 때가 가까워지고 있다.",
						"english": "Well done. The time to end the Seed's suffering draws near.",
						"japanese": "よくやった。これで種の苦しみを終わらせる時が近づいている。",
						"chinese": "做得好。现在，结束种子痛苦的时刻即将到来。",
						"french": "Bien joué. Le moment de mettre fin à la souffrance de la Graine approche.",
						"spanish": "Bien hecho. El momento de acabar con el sufrimiento de la Semilla se acerca.",
						"vietnamese": "Làm tốt lắm. Thời điểm chấm dứt nỗi đau của Hạt Giống đang đến gần.",
						"thai": "ทำได้ดีมาก ถึงเวลาที่จะยุติความทรมานของเมล็ดพันธุ์แล้ว",
						"hindi": "शाबाश। बीज के दुख को समाप्त करने का समय निकट आ रहा है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신… 대체 뭘 숨기고 있는 거죠?",
						"english": "You... what exactly are you hiding?",
						"japanese": "あなたは…一体何を隠しているのですか？",
						"chinese": "你…到底在隐瞒什么？",
						"french": "Vous... que cachez-vous au juste ?",
						"spanish": "Tú... ¿qué estás escondiendo exactamente?",
						"vietnamese": "Ngươi... rốt cuộc đang che giấu điều gì?",
						"thai": "คุณ...กำลังซ่อนอะไรอยู่กันแน่?",
						"hindi": "तुम... आखिर क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "briar",
					"content": {
						"korean": "진실은 더 깊은 곳에 있지. 날 따라와. 네 선택은 옳았어.",
						"english": "The truth lies deeper. Follow me. Your choice was right.",
						"japanese": "真実はもっと深い。私について来い。お前の選択は正しかった。",
						"chinese": "真相藏得更深。跟着我。你的选择是正确的。",
						"french": "La vérité est plus profonde. Suis-moi. Ton choix était le bon.",
						"spanish": "La verdad yace más profundo. Sígueme. Tu elección fue correcta.",
						"vietnamese": "Sự thật nằm sâu hơn. Đi theo ta. Ngươi đã chọn đúng.",
						"thai": "ความจริงอยู่ลึกกว่านั้น ตามข้ามา การตัดสินใจของเจ้าถูกต้องแล้ว",
						"hindi": "सच और गहरा है। मेरे पीछे आओ। तुम्हारा चुनाव सही था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "의심은 확신으로 변했다. 그러나 발걸음은 멈출 수 없었다. 진실이 부르고 있었다.",
						"english": "Doubt turned to certainty, yet footsteps could not stop. Truth was calling.",
						"japanese": "疑念は確信に変わった。しかし、足取りは止められなかった。真実が呼んでいた。",
						"chinese": "疑虑化为确信，但脚步却无法停止。真相正在召唤。",
						"french": "Le doute s'est mué en certitude, mais les pas ne pouvaient s'arrêter. La vérité appelait.",
						"spanish": "La duda se convirtió en certeza, pero los pasos no podían detenerse. La verdad estaba llamando.",
						"vietnamese": "Nghi ngờ hóa thành chắc chắn. Nhưng bước chân không thể dừng lại. Sự thật đang gọi.",
						"thai": "ความสงสัยกลายเป็นความแน่ใจ แต่ฝีเท้าก็ไม่อาจหยุดได้ ความจริงกำลังเรียกหา",
						"hindi": "संदेह निश्चितता में बदल गया, फिर भी कदम रुक न सके। सच पुकार रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"씨앗의 병을 고쳐야 한다. 그것이 숲의 심장이니까.",
			"숲의 관리자 브라이어는 길을 아는 유일한 존재였다.",
			"그러나 그녀의 속삭임은 어딘가 서늘했고,",
			"정화라는 이름 아래 드리운 의심이 움트기 시작했다."
		],
		"english": [
			"The Seed's illness must be cured. It is the heart of the forest.",
			"Briar, the forest guardian, was the only one who knew the way.",
			"Yet her whispers felt chilling somehow,",
			"And under the guise of 'purification,' doubt began to sprout."
		],
		"japanese": [
			"種の病を治さねばならない。それが森の心臓だからだ。",
			"森の管理者ブライアは、道を知る唯一の存在だった。",
			"しかし、彼女の囁きはどこか冷ややかで、",
			"そして「浄化」という名のもとに、疑念が芽生え始めた。"
		],
		"chinese": [
			"必须治愈种子的疾病。它是森林的心脏。",
			"森林守护者布莱尔是唯一知道路的人。",
			"然而，她的低语却有些令人不寒而栗，",
			"在“净化”的名义下，怀疑开始萌芽。"
		],
		"french": [
			"La maladie de la graine doit être guérie. C'est le cœur de la forêt.",
			"Briar, la gardienne de la forêt, était la seule à connaître le chemin.",
			"Pourtant, ses murmures avaient quelque chose de glaçant,",
			"Et sous le nom de \"purification\", le doute commença à germer."
		],
		"spanish": [
			"La enfermedad de la Semilla debe ser curada. Es el corazón del bosque.",
			"Briar, la guardiana del bosque, era la única que conocía el camino.",
			"Sin embargo, sus susurros resultaban escalofriantes,",
			"Y bajo el nombre de \"purificación\", la duda comenzó a brotar."
		],
		"vietnamese": [
			"Căn bệnh của Hạt giống phải được chữa khỏi. Vì nó là trái tim của khu rừng.",
			"Briar, người bảo vệ khu rừng, là người duy nhất biết đường.",
			"Nhưng những lời thì thầm của cô lại lạnh lẽo một cách khó hiểu,",
			"Và dưới danh nghĩa 'thanh tẩy', sự nghi ngờ bắt đầu nảy mầm."
		],
		"thai": [
			"โรคของเมล็ดพันธุ์ต้องได้รับการเยียวยา เพราะมันคือหัวใจของป่า",
			"ไบรเออร์ ผู้พิทักษ์ป่า เป็นเพียงผู้เดียวที่รู้หนทาง",
			"ทว่าเสียงกระซิบของเธอกลับเย็นยะเยือก",
			"และภายใต้ชื่อ 'การชำระล้าง' ความสงสัยก็เริ่มผลิบาน"
		],
		"hindi": [
			"बीज की बीमारी को ठीक करना होगा। यह जंगल का हृदय है।",
			"जंगल की रखवाली करने वाली ब्रायर्स ही रास्ता जानने वाली एकमात्र थी।",
			"फिर भी उसकी फुसफुसाहट कहीं-कहीं ठंडी थी,",
			"और 'शुद्धिकरण' के नाम पर, संदेह अंकुरित होने लगा।"
		]
	}
} as const;
