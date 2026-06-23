export const scenario_snowy_gjald_68_02 = {
	"scenario_id": "snowy_gjald_68_02",
	"order": 2,
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "험준한 빙하 동굴. 발걸음을 옮길수록 한기가 깊숙이 파고든다.",
						"english": "A rugged glacial cave. With every step, the chill sinks deeper.",
						"japanese": "険しい氷河洞窟。足を踏み出すたびに、寒気が奥深くへと染み渡る。",
						"chinese": "崎岖的冰川洞穴。每迈出一步，寒意就越发深入。",
						"french": "Une grotte glaciaire accidentée. À chaque pas, le froid s'enfonce plus profondément.",
						"spanish": "Una cueva glacial escarpada. Con cada paso, el frío se hunde más.",
						"vietnamese": "Hang động băng hà hiểm trở. Mỗi bước chân, cái lạnh lại thấm sâu hơn.",
						"thai": "ถ้ำน้ำแข็งขรุขระ ทุกย่างก้าว ความหนาวเหน็บยิ่งแทรกซึมลึกเข้ามา",
						"hindi": "एक ऊबड़-खाबड़ बर्फीली गुफा। हर कदम पर, ठंडक और गहरी होती जाती है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "정말 여기에 보물이 잠들어 있을까?",
						"english": "Could there really be treasure sleeping here?",
						"japanese": "本当にここに宝が眠っているのだろうか？",
						"chinese": "这里真的沉睡着宝藏吗？",
						"french": "Y aurait-il vraiment un trésor endormi ici ?",
						"spanish": "¿De verdad habrá un tesoro durmiendo aquí?",
						"vietnamese": "Có thật là kho báu đang ngủ yên ở đây không?",
						"thai": "ที่นี่มีสมบัติซ่อนอยู่จริงหรือ?",
						"hindi": "क्या सचमुच यहाँ कोई खजाना सोया हुआ है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "물론이지. 잊혀진 고대 유물이 말이야. 그 가치는 상상 이상일 거야.",
						"english": "Of course. A forgotten ancient relic. Its value will be beyond imagination.",
						"japanese": "もちろん。忘れ去られた古代遺物だ。その価値は想像以上だろう。",
						"chinese": "当然。一件被遗忘的古代遗物。它的价值将超乎想象。",
						"french": "Bien sûr. Une ancienne relique oubliée. Sa valeur sera au-delà de l'imagination.",
						"spanish": "Claro. Una antigua reliquia olvidada. Su valor será más allá de la imaginación.",
						"vietnamese": "Dĩ nhiên. Một di vật cổ xưa bị lãng quên. Giá trị của nó sẽ vượt xa sức tưởng tượng.",
						"thai": "แน่นอน วัตถุโบราณที่ถูกลืมเลือน มูลค่าของมันเกินกว่าจินตนาการ",
						"hindi": "बिल्कुल। एक भूला हुआ प्राचीन अवशेष। उसका मूल्य कल्पना से परे होगा।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…대단한 유물이라니.",
						"english": "...An incredible relic.",
						"japanese": "…とてつもない遺物だ。",
						"chinese": "……真是了不起的遗物。",
						"french": "...Une relique incroyable.",
						"spanish": "...Una reliquia increíble.",
						"vietnamese": "…Một di vật phi thường.",
						"thai": "…สมบัติล้ำค่าจริง ๆ",
						"hindi": "...एक अविश्वसनीय अवशेष।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 얼어붙은 땅에는 수많은 비밀이 묻혀있어.",
						"english": "Countless secrets are buried in this frozen land.",
						"japanese": "この凍てついた地には、数えきれないほどの秘密が埋もれている。",
						"chinese": "这片冰冻的土地埋藏着无数秘密。",
						"french": "D'innombrables secrets sont enfouis dans cette terre gelée.",
						"spanish": "Innumerables secretos están enterrados en esta tierra helada.",
						"vietnamese": "Vô số bí mật được chôn vùi trong vùng đất băng giá này.",
						"thai": "ดินแดนที่เยือกแข็งนี้มีปริศนามากมายฝังอยู่",
						"hindi": "इस जमी हुई भूमि में अनगिनत रहस्य दबे हुए हैं।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "고대인들은 그 유물로 모든 것을 얻으려 했지. 힘, 부, 명예….",
						"english": "The ancients sought to gain everything with that relic. Power, wealth, glory...",
						"japanese": "古代人たちはその遺物で全てを手に入れようとした。力、富、名誉…。",
						"chinese": "古代人曾试图用那件遗物获得一切。力量、财富、荣誉……",
						"french": "Les anciens cherchaient à tout obtenir avec cette relique. Pouvoir, richesse, gloire...",
						"spanish": "Los antiguos intentaron obtenerlo todo con esa reliquia. Poder, riqueza, gloria...",
						"vietnamese": "Người xưa đã cố gắng đạt được mọi thứ bằng di vật đó. Sức mạnh, của cải, danh vọng...",
						"thai": "ชนเผ่าโบราณพยายามที่จะได้ทุกสิ่งจากวัตถุโบราณนั้น อำนาจ ความมั่งคั่ง เกียรติยศ...",
						"hindi": "प्राचीन लोगों ने उस अवशेष से सब कुछ पाना चाहा। शक्ति, धन, यश..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "정말 그 정도의 힘을 가졌다는 거야?",
						"english": "Does it truly possess that much power?",
						"japanese": "本当にそれほどの力を持っているの？",
						"chinese": "它真的拥有那么强大的力量吗？",
						"french": "Possède-t-il vraiment une telle puissance ?",
						"spanish": "¿Realmente posee tanto poder?",
						"vietnamese": "Nó thực sự có sức mạnh đến vậy sao?",
						"thai": "มันมีพลังขนาดนั้นจริงๆ หรือ?",
						"hindi": "क्या इसमें सच में इतनी शक्ति है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그럼. 다만, 아무도 그 대가는 기록하려 하지 않았을 뿐이지.",
						"english": "Indeed. But no one bothered to record its cost.",
						"japanese": "ええ。ただ、誰もその代償を記録しようとはしなかっただけよ。",
						"chinese": "当然。只是没有人愿意记录它的代价。",
						"french": "Oui. Seulement, personne n'a cherché à en consigner le prix.",
						"spanish": "Sí. Solo que nadie quiso registrar su precio.",
						"vietnamese": "Đúng vậy. Chỉ là không ai muốn ghi lại cái giá của nó.",
						"thai": "ใช่. เพียงแต่ไม่มีใครอยากบันทึกถึงผลตอบแทนนั้นเลย",
						"hindi": "हाँ। बस, किसी ने उसकी कीमत दर्ज करने की जहमत नहीं उठाई।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유물이 가까워질수록, 이 동굴의 한기는 특별해져.",
						"english": "As the artifact draws near, the chill in this cave grows peculiar.",
						"japanese": "遺物が近づくにつれて、この洞窟の冷気は特別なものになる。",
						"chinese": "随着遗物越来越近，这洞穴的寒气也变得异常起来。",
						"french": "Plus l'artefact se rapproche, plus le froid de cette grotte devient étrange.",
						"spanish": "Cuanto más se acerca el artefacto, más peculiar se vuelve el frío de esta cueva.",
						"vietnamese": "Càng gần di vật, cái lạnh trong hang động này càng trở nên đặc biệt.",
						"thai": "ยิ่งเข้าใกล้วัตถุโบราณเท่าไหร่ ความหนาวเย็นในถ้ำนี้ก็ยิ่งแปลกประหลาดขึ้นเท่านั้น",
						"hindi": "जैसे-जैसे कलाकृति करीब आती है, इस गुफा की ठंडक और भी अजीब होती जाती है।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "싸늘한 바람 속에서, 억울하게 죽은 자들의 비명소리가 환영처럼 들려온다.",
						"english": "In the icy wind, the screams of the unjustly deceased echo like specters.",
						"japanese": "冷たい風の中で、不当に死んだ者たちの悲鳴が幻影のように聞こえてくる。",
						"chinese": "在阴冷的风中，无辜冤死者的尖叫声如幻影般传来。",
						"french": "Dans le vent glacial, les cris des morts injustement résonnent comme des fantômes.",
						"spanish": "En el viento helado, los gritos de los muertos injustamente resuenan como espectros.",
						"vietnamese": "Trong làn gió lạnh buốt, tiếng kêu của những người chết oan vọng về như ảo ảnh.",
						"thai": "ท่ามกลางลมหนาว เสียงกรีดร้องของผู้ที่เสียชีวิตอย่างไม่เป็นธรรมดังก้องราวกับภาพหลอน",
						"hindi": "बर्फीली हवा में, अन्यायपूर्वक मारे गए लोगों की चीखें प्रेत-सी गूँजती हैं।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…뭐야, 이 소름 끼치는 소리는?",
						"english": "...What is this chilling sound?",
						"japanese": "…何だ、この身の毛もよだつ音は？",
						"chinese": "...这是什么令人毛骨悚然的声音？",
						"french": "...Qu'est-ce que c'est que ce son effrayant ?",
						"spanish": "...¿Qué es este sonido espeluznante?",
						"vietnamese": "...Cái âm thanh rợn người này là gì?",
						"thai": "...นี่มันเสียงอะไรน่าขนลุกเนี่ย?",
						"hindi": "...यह डरावनी आवाज़ क्या है?"
					}
				},
				{
					"content": {
						"korean": "과거의 망령 따위는 무시해. 중요한 건 유물이야.",
						"english": "Ignore the specters of the past. The artifact is what matters.",
						"japanese": "過去の亡霊など無視しろ。重要なのは遺物だ。",
						"chinese": "别理会过去的亡灵。重要的是遗物。",
						"french": "Ignore les fantômes du passé. L'artefact est ce qui compte.",
						"spanish": "Ignora los fantasmas del pasado. Lo importante es el artefacto.",
						"vietnamese": "Bỏ qua những bóng ma quá khứ đi. Di vật mới là quan trọng.",
						"thai": "เมินเฉยต่อวิญญาณในอดีตซะ สิ่งสำคัญคือวัตถุโบราณต่างหาก",
						"hindi": "अतीत के भूतों को नज़रअंदाज़ करो। महत्वपूर्ण कलाकृति है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 괜히 신경 쓸 필요 없어.",
						"english": "Right. No need to worry about it.",
						"japanese": "そうね。余計な心配はいらない。",
						"chinese": "没错。没必要去理会。",
						"french": "C'est vrai. Pas besoin de s'en soucier.",
						"spanish": "Sí. No hay necesidad de preocuparse.",
						"vietnamese": "Phải rồi. Không cần bận tâm làm gì.",
						"thai": "ใช่แล้ว ไม่ต้องไปใส่ใจหรอก",
						"hindi": "हाँ। बेवजह परेशान होने की ज़रूरत नहीं।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "곧 그 유물을 지키는 자와 마주할 거야.",
						"english": "Soon we'll face the guardian of that artifact.",
						"japanese": "すぐにその遺物を守る者と対峙するだろう。",
						"chinese": "我们很快就会遇到守护那件遗物的人。",
						"french": "Bientôt, nous affronterons le gardien de cet artefact.",
						"spanish": "Pronto nos encontraremos con el guardián de ese artefacto.",
						"vietnamese": "Chẳng mấy chốc chúng ta sẽ đối mặt với kẻ bảo vệ di vật đó.",
						"thai": "อีกไม่นานเราจะได้เผชิญหน้ากับผู้พิทักษ์วัตถุโบราณนั้น",
						"hindi": "जल्द ही हम उस कलाकृति के संरक्षक का सामना करेंगे।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 걱정 마. 그저 옛 맹세에 갇힌 가엾은 존재일 뿐이야.",
						"english": "But don't worry. It's merely a pitiful being bound by an ancient oath.",
						"japanese": "だが心配するな。それはただ、古い誓いに囚われた哀れな存在にすぎない。",
						"chinese": "但别担心。那不过是被古老誓言束缚的可怜存在罢了。",
						"french": "Mais ne t'inquiète pas. Ce n'est qu'une pauvre créature liée par un ancien serment.",
						"spanish": "Pero no te preocupes. Es solo un ser lamentable atrapado por un antiguo juramento.",
						"vietnamese": "Nhưng đừng lo. Đó chỉ là một sinh vật đáng thương bị ràng buộc bởi một lời thề cổ xưa.",
						"thai": "แต่ไม่ต้องห่วง มันก็แค่สิ่งมีชีวิตที่น่าสงสารที่ถูกกักขังด้วยคำสาบานเก่าๆ เท่านั้นเอง",
						"hindi": "लेकिन चिंता मत करो। वह केवल एक दयालु प्राणी है जो एक पुरानी शपथ से बंधा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어떤 위험이든 뚫고 나갈 거야. 유물은 내 것이 될 테니.",
						"english": "I'll break through any danger. The artifact will be mine.",
						"japanese": "どんな危険も乗り越えてみせる。遺物は私のものとなるだろうから。",
						"chinese": "我将突破任何危险。那件遗物将属于我。",
						"french": "Je traverserai n'importe quel danger. L'artefact sera à moi.",
						"spanish": "Superaré cualquier peligro. El artefacto será mío.",
						"vietnamese": "Tôi sẽ vượt qua mọi nguy hiểm. Di vật đó sẽ thuộc về tôi.",
						"thai": "ฉันจะฝ่าฟันอันตรายทุกอย่าง วัตถุโบราณนั้นจะเป็นของฉัน",
						"hindi": "मैं किसी भी खतरे से गुजरूँगा। कलाकृति मेरी होगी।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "어딘가에서 희미하게, 과거의 비극이 반복되는 듯한 기시감이 느껴진다.",
						"english": "A faint sense of déjà vu, as if past tragedies are repeating.",
						"japanese": "どこかでかすかに、過去の悲劇が繰り返されるようなデジャヴを感じる。",
						"chinese": "某种微弱的似曾相识感，仿佛过去的悲剧正在重演。",
						"french": "Une faible impression de déjà-vu, comme si les tragédies passées se répétaient.",
						"spanish": "Una tenue sensación de déjà vu, como si las tragedias pasadas se repitieran.",
						"vietnamese": "Một cảm giác mơ hồ về sự lặp lại, như thể những bi kịch trong quá khứ đang tái diễn.",
						"thai": "ความรู้สึกคุ้นเคยบางอย่างจาง ๆ ราวกับโศกนาฏกรรมในอดีตกำลังจะเกิดขึ้นซ้ำรอย",
						"hindi": "कहीं से धुंधला-सा, ऐसा महसूस होता है जैसे अतीत की त्रासदी दोहराई जा रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아마 과거의 실패자들이 남긴 미련이겠지. 탐욕은 위대한 힘을 가져다줘.",
						"english": "Perhaps the lingering regrets of past failures. Greed brings immense power.",
						"japanese": "おそらく過去の敗者たちが残した未練だろう。貪欲は偉大な力をもたらす。",
						"chinese": "也许是过去失败者的遗恨。贪婪带来巨大的力量。",
						"french": "Probablement les regrets persistants des échecs passés. L'avidité apporte un pouvoir immense.",
						"spanish": "Quizás los remordimientos persistentes de fracasos pasados. La codicia trae un poder inmenso.",
						"vietnamese": "Có lẽ đó là sự tiếc nuối của những kẻ thất bại trong quá khứ. Lòng tham mang lại sức mạnh vĩ đại.",
						"thai": "อาจเป็นความเสียใจที่ค้างคาของผู้ล้มเหลวในอดีต ความโลภนำมาซึ่งพลังอันยิ่งใหญ่",
						"hindi": "शायद अतीत के विफल लोगों के शेष मलाल होंगे। लालच महान शक्ति लाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 같은 길을 걷겠지. 이 얼어붙은 맹세의 무게를… 너희도 짊어지게 될 거야.",
						"english": "...In the end, you'll walk the same path. You too will bear the weight of this frozen oath...",
						"japanese": "…結局、同じ道を辿るだろう。この凍てついた誓いの重さを…お前たちも背負うことになるだろう。",
						"chinese": "……最终，你们也会走上同一条路。这冰冷的誓言的重量……你们也将承受。",
						"french": "...Finalement, vous suivrez le même chemin. Vous aussi, vous porterez le poids de ce serment gelé...",
						"spanish": "...Al final, seguiréis el mismo camino. Vosotros también cargaréis con el peso de este juramento congelado...",
						"vietnamese": "...Cuối cùng, các ngươi cũng sẽ đi trên con đường tương tự. Các ngươi cũng sẽ gánh chịu sức nặng của lời thề đóng băng này...",
						"thai": "ในที่สุด พวกเจ้าก็จะเดินไปในเส้นทางเดียวกัน พวกเจ้าจะต้องแบกรับน้ำหนักของคำสาบานที่แข็งจับนี้...",
						"hindi": "आखिरकार, तुम भी वही रास्ता अपनाओगे। इस जमे हुए शपथ का बोझ... तुम्हें भी उठाना पड़ेगा।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 이제 유물은 우리 거야!",
						"english": "What nonsense! The relic is ours now!",
						"japanese": "何を言っているんだ！もう遺物は我々のものだ！",
						"chinese": "什么胡说！文物现在是我们的了！",
						"french": "Qu'est-ce que tu racontes ! La relique est à nous maintenant !",
						"spanish": "¡Qué tontería! ¡La reliquia es nuestra ahora!",
						"vietnamese": "Nói cái gì vậy! Di vật bây giờ là của chúng ta!",
						"thai": "พูดอะไรน่ะ! วัตถุโบราณเป็นของเราแล้ว!",
						"hindi": "यह क्या बकवास है! अब अवशेष हमारा है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "드디어! 잊혀진 유물이 우리 손에 들어오는군!",
						"english": "Finally! The forgotten relic is in our hands!",
						"japanese": "ついに！忘れられた遺物が我々の手に！",
						"chinese": "终于！被遗忘的文物落入我们手中了！",
						"french": "Enfin ! La relique oubliée est entre nos mains !",
						"spanish": "¡Finalmente! ¡La reliquia olvidada está en nuestras manos!",
						"vietnamese": "Cuối cùng! Di vật bị lãng quên đã nằm trong tay chúng ta!",
						"thai": "ในที่สุด! วัตถุโบราณที่ถูกลืมก็มาอยู่ในมือเราแล้ว!",
						"hindi": "आखिरकार! भूला हुआ अवशेष हमारे हाथ में आ गया है!"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "유물의 빛이 동굴을 채운다. 그러나, 그 빛은 어딘가 서늘했다.",
						"english": "The artifact's light fills the cave, yet it felt strangely cold.",
						"japanese": "遺物の光が洞窟を満たす。しかし、その光はどこか冷ややかだった。",
						"chinese": "文物的光芒充满了洞穴。然而，那光芒却带着一丝寒意。",
						"french": "La lumière de l'artefact remplit la grotte. Pourtant, cette lumière était étrangement froide.",
						"spanish": "La luz del artefacto llena la cueva. Sin embargo, esa luz era de alguna manera escalofriante.",
						"vietnamese": "Ánh sáng của cổ vật lấp đầy hang động. Tuy nhiên, ánh sáng đó có gì đó lạnh lẽo.",
						"thai": "แสงของวัตถุโบราณส่องสว่างเต็มถ้ำ แต่แสงนั้นกลับรู้สึกเย็นยะเยือก",
						"hindi": "कलाकृति का प्रकाश गुफा को भर देता है। फिर भी, वह प्रकाश कहीं-कहीं ठंडा था।"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐욕은 달콤한 속삭임 뒤에 또 다른 비극을 숨기고 있었다.",
						"english": "Greed hid another tragedy behind its sweet whispers.",
						"japanese": "貪欲は甘い囁きの裏に、また別の悲劇を隠していた。",
						"chinese": "贪婪在甜言蜜语背后隐藏着另一场悲剧。",
						"french": "L'avidité cachait une autre tragédie derrière ses doux murmures.",
						"spanish": "La avaricia ocultaba otra tragedia detrás de sus dulces susurros.",
						"vietnamese": "Lòng tham ẩn giấu một bi kịch khác đằng sau những lời thì thầm ngọt ngào.",
						"thai": "ความโลภซ่อนโศกนาฏกรรมอีกอย่างไว้เบื้องหลังเสียงกระซิบอันหอมหวาน",
						"hindi": "लालच अपनी मीठी फुसफुसाहटों के पीछे एक और त्रासदी छिपा रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "싸늘한 얼음의 파편이 모든 것을 뒤덮었다.",
						"english": "Chilling shards of ice covered everything.",
						"japanese": "冷たい氷の破片がすべてを覆い尽くした。",
						"chinese": "冰冷的碎片覆盖了一切。",
						"french": "De glaçants éclats de glace recouvraient tout.",
						"spanish": "Gélidos fragmentos de hielo lo cubrieron todo.",
						"vietnamese": "Những mảnh băng lạnh giá bao phủ mọi thứ.",
						"thai": "เศษน้ำแข็งอันหนาวเหน็บปกคลุมทุกสิ่ง",
						"hindi": "बर्फीले बर्फ के टुकड़े सब कुछ ढक चुके थे।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "탐욕에 눈먼 자여. 너는 이 저주받은 순환을 영원히 벗어날 수 없을 것이다.",
						"english": "You, blinded by greed. You shall never escape this cursed cycle.",
						"japanese": "貪欲に目がくらんだ者よ。お前はこの呪われた循環から永遠に逃れられないだろう。",
						"chinese": "被贪婪蒙蔽双眼的人啊。你将永远无法摆脱这个被诅咒的循环。",
						"french": "Toi, aveuglé par l'avidité. Tu n'échapperas jamais à ce cycle maudit.",
						"spanish": "Tú, cegado por la avaricia. Nunca escaparás de este ciclo maldito.",
						"vietnamese": "Ngươi, kẻ bị lòng tham làm cho mù quáng. Ngươi sẽ không bao giờ thoát khỏi vòng luân hồi bị nguyền rủa này.",
						"thai": "เจ้าผู้ซึ่งตาบอดด้วยความโลภ เจ้าจะไม่มีวันหลุดพ้นจากวงจรที่ถูกสาปนี้",
						"hindi": "तुम, लालच से अंधे हुए। तुम कभी इस शापित चक्र से बच नहीं पाओगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크읏… 유물을 눈앞에 두고 물러날 순 없어. 다시 시도하자고.",
						"english": "Ugh... I can't retreat with the artifact right before me. Let's try again.",
						"japanese": "くぅっ…遺物を目の前にして退くわけにはいかない。もう一度試そう。",
						"chinese": "呃……文物就在眼前，我不能退缩。再试一次吧。",
						"french": "Argh... Je ne peux pas battre en retraite avec l'artefact juste devant moi. Réessayons.",
						"spanish": "Ugh... No puedo retroceder con el artefacto justo delante de mí. Intentémoslo de nuevo.",
						"vietnamese": "Ư... Tôi không thể rút lui khi cổ vật đang ở ngay trước mắt. Hãy thử lại.",
						"thai": "อึก... จะถอยไม่ได้เมื่อวัตถุโบราณอยู่ตรงหน้า ลองใหม่อีกครั้ง",
						"hindi": "उह... मैं कलाकृति को अपनी आँखों के सामने छोड़कर पीछे नहीं हट सकता। चलो फिर से कोशिश करते हैं।"
					},
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…반드시 유물을 손에 넣고 말 거야!",
						"english": "...I will definitely get my hands on the artifact!",
						"japanese": "…必ず遺物を手に入れてやる！",
						"chinese": "……我一定要拿到那件文物！",
						"french": "…Je mettrai la main sur l'artefact, c'est sûr !",
						"spanish": "…¡Definitivamente conseguiré el artefacto!",
						"vietnamese": "...Tôi nhất định sẽ đoạt được cổ vật!",
						"thai": "...ฉันจะต้องได้วัตถุโบราณมาให้ได้!",
						"hindi": "...मैं निश्चित रूप से उस कलाकृति को प्राप्त करूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 얼음 결정 속에서 정체 모를 그림자가 깨어난다.",
						"english": "The deepest part of the cave. Within a colossal ice crystal, an unknown shadow awakens.",
						"japanese": "洞窟の最も深い場所。巨大な氷の結晶の中で、正体不明の影が目覚める。",
						"chinese": "洞穴的最深处。巨大的冰晶之中，一个不明身份的影子正在苏醒。",
						"french": "La partie la plus profonde de la grotte. Au sein d'un cristal de glace colossal, une ombre inconnue s'éveille.",
						"spanish": "La parte más profunda de la cueva. Dentro de un colosal cristal de hielo, una sombra desconocida despierta.",
						"vietnamese": "Sâu nhất trong hang động. Trong một khối băng khổng lồ, một cái bóng không rõ danh tính thức tỉnh.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำ ภายในผลึกน้ำแข็งขนาดมหึมา เงาที่ไม่รู้จักกำลังตื่นขึ้น",
						"hindi": "गुफा का सबसे गहरा हिस्सा। एक विशाल बर्फीले क्रिस्टल के भीतर, एक अज्ञात छाया जागृत होती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…또다시 탐욕에 눈먼 자들이 찾아왔군.",
						"english": "...Fools blinded by greed have come again.",
						"japanese": "…またしても、貪欲に目がくらんだ者たちがやって来たか。",
						"chinese": "……又来了，这些被贪婪蒙蔽双眼的人。",
						"french": "...Encore des imbéciles aveuglés par l'avidité.",
						"spanish": "...De nuevo han llegado los necios cegados por la codicia.",
						"vietnamese": "...Lại nữa, những kẻ mù quáng vì lòng tham đã đến.",
						"thai": "พวกคนโง่ที่ตาบอดด้วยความโลภมาอีกแล้ว",
						"hindi": "फिर से लालच में अंधे लोग आ गए हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "네가 유물을 지키는 자인가! 비켜라!",
						"english": "Are you the relic's guardian? Stand aside!",
						"japanese": "お前が遺物を守る者か！退け！",
						"chinese": "你是守护文物的吗？让开！",
						"french": "Es-tu le gardien de la relique ? Écarte-toi !",
						"spanish": "Eres el guardián de la reliquia? ¡Apártate!",
						"vietnamese": "Ngươi là kẻ canh giữ di vật à! Tránh ra!",
						"thai": "แกคือผู้พิทักษ์วัตถุโบราณงั้นเหรอ! ถอยไป!",
						"hindi": "क्या तुम अवशेष के संरक्षक हो! हट जाओ!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 어리석은 순환을 끊지 못하는 한, 너희는 결코 나를 넘을 수 없을 것이다.",
						"english": "As long as you cannot break this foolish cycle, you will never overcome me.",
						"japanese": "この愚かな循環を断ち切れない限り、お前たちは決して私を超えられないだろう。",
						"chinese": "只要你们无法打破这个愚蠢的循环，就永远无法超越我。",
						"french": "Tant que vous ne pourrez pas briser ce cycle insensé, vous ne me vaincrez jamais.",
						"spanish": "Mientras no podáis romper este ciclo absurdo, nunca me superaréis.",
						"vietnamese": "Chừng nào các ngươi không thể phá vỡ vòng lặp ngu xuẩn này, các ngươi sẽ không bao giờ vượt qua được ta.",
						"thai": "ตราบใดที่พวกเจ้าไม่สามารถทำลายวงจรที่โง่เขลานี้ได้ พวกเจ้าจะไม่มีวันเอาชนะข้าได้",
						"hindi": "जब तक तुम इस मूर्खतापूर्ण चक्र को तोड़ नहीं सकते, तुम कभी मुझे पार नहीं कर पाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "어차피 쓰러질 존재. 망설일 필요 없어.",
						"english": "You'll fall anyway. No need to hesitate.",
						"japanese": "どうせ倒れる存在。ためらう必要はない。",
						"chinese": "反正都会倒下。不必犹豫。",
						"french": "Vous tomberez de toute façon. Pas besoin d'hésiter.",
						"spanish": "Caeréis de todas formas. No hay necesidad de dudar.",
						"vietnamese": "Dù sao cũng sẽ gục ngã thôi. Không cần phải do dự.",
						"thai": "พวกเจ้าจะล้มลงอยู่ดี ไม่ต้องลังเล",
						"hindi": "वैसे भी तुम गिर जाओगे। हिचकिचाने की ज़रूरत नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 빙하 동굴. 얼어붙은 심장부가 부르고 있었다.",
			"전설 속 고대 유물. 에이라는 그 탐욕의 노래를 불렀다.",
			"싸늘한 바람 속, 잊혀진 비명소리가 환영처럼 들려왔다.",
			"저주받은 대가. 과연 그 유물은 가치 있는 것일까?"
		],
		"english": [
			"The harsh glacial cave. Its frozen heart was calling.",
			"The ancient relic of legend. Aira sang its song of greed.",
			"In the chilling wind, forgotten screams echoed like a mirage.",
			"A cursed price. Is the relic truly worth it?"
		],
		"japanese": [
			"厳しい氷河洞窟。凍てついた心臓部が呼んでいた。",
			"伝説の古代遺物。アイラはその強欲の歌を歌った。",
			"冷たい風の中、忘れ去られた悲鳴が幻影のように聞こえた。",
			"呪われた代償。果たしてその遺物は価値があるのだろうか？"
		],
		"chinese": [
			"严酷的冰川洞穴。它冰冷的心脏正在呼唤。",
			"传说中的古代遗物。艾拉唱起了那贪婪之歌。",
			"寒风中，被遗忘的尖叫声如幻影般响起。",
			"被诅咒的代价。那件遗物真的值得吗？"
		],
		"french": [
			"La dure grotte glaciaire. Son cœur gelé appelait.",
			"L'ancienne relique de légende. Aira chanta sa chanson de cupidité.",
			"Dans le vent glacial, des cris oubliés résonnaient comme un mirage.",
			"Un prix maudit. Cette relique en vaut-elle vraiment la peine ?"
		],
		"spanish": [
			"La dura cueva glacial. Su corazón congelado estaba llamando.",
			"La antigua reliquia de la leyenda. Aira cantó su canción de codicia.",
			"En el viento helado, gritos olvidados resonaban como un espejismo.",
			"Un precio maldito. ¿Realmente vale la pena la reliquia?"
		],
		"vietnamese": [
			"Hang động băng hà khắc nghiệt. Trái tim đóng băng của nó đang vẫy gọi.",
			"Di vật cổ xưa trong truyền thuyết. Aira đã hát lên khúc ca tham lam đó.",
			"Trong gió lạnh, những tiếng thét bị lãng quên vọng lên như ảo ảnh.",
			"Cái giá bị nguyền rủa. Liệu di vật đó có thực sự đáng giá?"
		],
		"thai": [
			"ถ้ำน้ำแข็งอันโหดร้าย หัวใจที่เยือกแข็งกำลังเรียกหา",
			"วัตถุโบราณในตำนาน ไอร่าร้องเพลงแห่งความโลภนั้น",
			"ในลมหนาว เสียงกรีดร้องที่ถูกลืมเลือนดังขึ้นราวกับภาพลวงตา",
			"ราคาที่ถูกสาป แร่อาถรรพ์นั้นคุ้มค่าจริงหรือ?"
		],
		"hindi": [
			"कठोर बर्फीली गुफा। उसका जमा हुआ दिल पुकार रहा था।",
			"किंवदंती का प्राचीन अवशेष। ऐरा ने लालच का गीत गाया।",
			"ठंडी हवा में, भूली हुई चीखें मृगतृष्णा की तरह गूंज उठीं।",
			"एक शापित कीमत। क्या वह अवशेष सच में लायक है?"
		]
	}
} as const;
