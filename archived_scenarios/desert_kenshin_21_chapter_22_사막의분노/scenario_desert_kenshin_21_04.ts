export const scenario_desert_kenshin_21_04 = {
	"scenario_id": "desert_kenshin_21_04",
	"order": 4,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"ember": {
			"id": "mon_9845a5c0-e558-41cc-979d-91567cb41aa7",
			"name": {
				"korean": "앰버",
				"english": "Ember",
				"japanese": "エンバー",
				"chinese": "余烬",
				"french": "Braise",
				"spanish": "Ascua",
				"vietnamese": "Tàn lửa",
				"thai": "เอมเบอร์",
				"hindi": "अंगारा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/10e60a4c-5b9a-4f2a-a55a-707c0beabe00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5dd50017-3c98-41b2-c8d2-e3e4659ca700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"오아시스의 물은 말랐다.",
			"사람들은 '오래된 수호자의 저주'라 속삭였다.",
			"그러나 저주 뒤엔 언제나 탐욕이 숨어있었다.",
			"낡은 팬던트가, 잊혀진 진실을 깨울 것이다."
		],
		"english": [
			"The oasis has run dry.",
			"People whispered, \"The curse of the Old Guardian.\"",
			"But behind the curse, greed always lurked.",
			"An old pendant will awaken the forgotten truth."
		],
		"japanese": [
			"オアシスの水が枯れた。",
			"人々は「古き守護者の呪い」だと囁いた。",
			"しかし、その呪いの裏には、常に強欲が潜んでいた。",
			"古いペンダントが、忘れられた真実を呼び覚ますだろう。"
		],
		"chinese": [
			"绿洲的水干涸了。",
			"人们低语着，“古老守护者的诅咒。”",
			"然而，诅咒背后总是隐藏着贪婪。",
			"一枚旧吊坠将唤醒被遗忘的真相。"
		],
		"french": [
			"L'oasis s'est tarie.",
			"Les gens murmuraient : « La malédiction de l'Ancien Gardien ».",
			"Mais derrière la malédiction, la cupidité se cachait toujours.",
			"Un vieux pendentif réveillera la vérité oubliée."
		],
		"spanish": [
			"El oasis se secó.",
			"La gente susurraba: \"La maldición del Guardián Antiguo\".",
			"Pero detrás de la maldición, siempre acechaba la codicia.",
			"Un viejo colgante despertará la verdad olvidada."
		],
		"vietnamese": [
			"Nước ốc đảo đã cạn.",
			"Mọi người thì thầm, \"Lời nguyền của Người bảo vệ cổ xưa.\"",
			"Nhưng đằng sau lời nguyền, lòng tham luôn ẩn nấp.",
			"Một mặt dây chuyền cũ sẽ đánh thức sự thật bị lãng quên."
		],
		"thai": [
			"น้ำในโอเอซิสแห้งเหือดไปแล้ว",
			"ผู้คนกระซิบว่า \"คำสาปของผู้พิทักษ์โบราณ\"",
			"แต่เบื้องหลังคำสาปนั้น ความโลภมักจะแฝงอยู่เสมอ",
			"จี้เก่าแก่จะปลุกความจริงที่ถูกลืมให้ตื่นขึ้น"
		],
		"hindi": [
			"नखलिस्तान का पानी सूख गया।",
			"लोग फुसफुसाते थे, \"पुराने संरक्षक का अभिशाप।\"",
			"लेकिन अभिशाप के पीछे, हमेशा लालच छिपा था।",
			"एक पुराना पेंडेंट भूली हुई सच्चाई को जगाएगा।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "사막의 바람이 마른 오아시스를 스쳤다.",
						"english": "Desert winds swept across the dry oasis.",
						"japanese": "砂漠の風が枯れたオアシスを吹き抜けた。",
						"chinese": "沙漠的风吹过干涸的绿洲。",
						"french": "Les vents du désert balayaient l'oasis asséchée.",
						"spanish": "Los vientos del desierto barrieron el oasis seco.",
						"vietnamese": "Gió sa mạc lướt qua ốc đảo khô cằn.",
						"thai": "ลมทะเลทรายพัดผ่านโอเอซิสที่แห้งแล้ง",
						"hindi": "रेगिस्तान की हवाएँ सूखे नखलिस्तान को छू गईं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 물이 말랐어?",
						"english": "The water's dry again?",
						"japanese": "また水が枯れたの？",
						"chinese": "水又干了？",
						"french": "L'eau est encore à sec ?",
						"spanish": "¿El agua se secó de nuevo?",
						"vietnamese": "Nước lại cạn rồi à?",
						"thai": "น้ำแห้งอีกแล้วเหรอ?",
						"hindi": "पानी फिर सूख गया?"
					},
					"emotion": "sad"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ember"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "응. '수호자의 저주' 때문이라고 해.",
						"english": "Yeah. They say it's \"The Guardian's Curse.\"",
						"japanese": "うん。「守護者の呪い」のせいだって。",
						"chinese": "嗯。“守护者的诅咒”造成的。",
						"french": "Oui. Ils disent que c'est « la malédiction du Gardien ».",
						"spanish": "Sí. Dicen que es \"la maldición del Guardián\".",
						"vietnamese": "Ừ. Họ nói là do \"Lời nguyền của Người bảo vệ.\"",
						"thai": "ใช่ พวกเขาว่ามันเป็น \"คำสาปของผู้พิทักษ์\"",
						"hindi": "हाँ। वे कहते हैं कि यह \"संरक्षक का अभिशाप\" है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "저주? 그게 언제부터 있었는데.",
						"english": "A curse? Since when?",
						"japanese": "呪い？いつからそんなものが。",
						"chinese": "诅咒？那是什么时候的事？",
						"french": "Une malédiction ? Depuis quand ?",
						"spanish": "¿Una maldición? ¿Desde cuándo?",
						"vietnamese": "Một lời nguyền? Từ khi nào?",
						"thai": "คำสาปเหรอ? มันมีมาตั้งแต่เมื่อไหร่?",
						"hindi": "एक अभिशाप? कब से?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "아주 오래 전부터… 사람들은 그렇게 믿어.",
						"english": "From a very long time ago... people believe that.",
						"japanese": "ずっと昔から…人々はそう信じている。",
						"chinese": "从很久以前开始……人们是这么相信的。",
						"french": "Depuis très longtemps... les gens le croient.",
						"spanish": "Desde hace mucho tiempo... la gente lo cree.",
						"vietnamese": "Từ rất lâu rồi... mọi người tin là vậy.",
						"thai": "ตั้งแต่เมื่อนานมาแล้ว... ผู้คนเชื่อเช่นนั้น",
						"hindi": "बहुत पहले से... लोग ऐसा मानते हैं।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "이거 봐. 사막 상인한테서 구했어.",
						"english": "Look at this. I got it from a desert merchant.",
						"japanese": "これ見て。砂漠の商人から手に入れたんだ。",
						"chinese": "瞧这个。我从一个沙漠商人那里得到的。",
						"french": "Regarde ça. Je l'ai eu d'un marchand du désert.",
						"spanish": "Mira esto. Lo conseguí de un mercader del desierto.",
						"vietnamese": "Nhìn này. Tôi lấy nó từ một thương nhân sa mạc.",
						"thai": "ดูนี่สิ ฉันได้มันมาจากพ่อค้าในทะเลทราย",
						"hindi": "इसे देखो। मुझे यह एक रेगिस्तानी व्यापारी से मिला।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "낡은 팬던트?",
						"english": "An old pendant?",
						"japanese": "「古いペンダント？」",
						"chinese": "「旧吊坠？」",
						"french": "« Un vieux pendentif ? »",
						"spanish": "« ¿Un colgante viejo? »",
						"vietnamese": "« Một mặt dây chuyền cũ? »",
						"thai": "« จี้เก่าเหรอ? »",
						"hindi": "« एक पुराना पेंडेंट? »"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "'사랑하는 이에게'… 이런 문구가 있어. 왕실 유품 같아.",
						"english": "'To my beloved'... It has this inscription. Seems like a royal heirloom.",
						"japanese": "「愛する者へ」…そう刻まれている。王室の遺品のようだ。",
						"chinese": "「致吾爱」……有这样一句话。像是皇家遗物。",
						"french": "« À mon bien-aimé »... Il y a cette inscription. On dirait une relique royale.",
						"spanish": "« A mi amado »... Tiene esta inscripción. Parece una reliquia real.",
						"vietnamese": "« Gửi người yêu dấu của tôi »... Có dòng chữ này. Có vẻ là một vật gia truyền của hoàng gia.",
						"thai": "« มีข้อความว่า 'แด่ที่รักของข้า'... ดูเหมือนเป็นของมีค่าของราชวงศ์ »",
						"hindi": "« मेरे प्रिय को »... ऐसा लिखा है। शाही विरासत जैसा लगता है।"
					}
				},
				{
					"content": {
						"korean": "왕실… 이걸 왜 지금 찾은 걸까.",
						"english": "Royal... Why did we find this now?",
						"japanese": "王室…なぜ今これを見つけたのだろう。",
						"chinese": "皇家……为什么现在才找到它？",
						"french": "« Royal... Pourquoi l'avons-nous trouvé maintenant ? »",
						"spanish": "« Real... ¿Por qué lo encontramos ahora? »",
						"vietnamese": "« Hoàng gia... Tại sao chúng ta lại tìm thấy nó bây giờ? »",
						"thai": "« ราชวงศ์... ทำไมเราถึงเจอสิ่งนี้ตอนนี้? »",
						"hindi": "« शाही... हमने इसे अभी क्यों ढूँढा? »"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 저주와 관계있다는 이야기가 있어.",
						"english": "There's talk it's connected to this curse.",
						"japanese": "この呪いと関係があるという話だ。",
						"chinese": "有传言说它与这个诅咒有关。",
						"french": "« On dit que c'est lié à cette malédiction. »",
						"spanish": "« Se dice que está relacionado con esta maldición. »",
						"vietnamese": "« Có lời đồn rằng nó có liên quan đến lời nguyền này. »",
						"thai": "« มีคนบอกว่ามันเกี่ยวข้องกับคำสาปนี้ »",
						"hindi": "« ऐसी बातें हैं कि इसका संबंध इस श्राप से है। »"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ember",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "사람들은 저주 때문에 물이 마른다고 믿어.",
						"english": "People believe the water is drying up because of the curse.",
						"japanese": "人々は呪いのせいで水が枯れると信じている。",
						"chinese": "人们相信水是因为诅咒而枯竭的。",
						"french": "« Les gens croient que l'eau s'assèche à cause de la malédiction. »",
						"spanish": "« La gente cree que el agua se está secando por la maldición. »",
						"vietnamese": "« Mọi người tin rằng nước đang cạn kiệt vì lời nguyền. »",
						"thai": "« ผู้คนเชื่อว่าน้ำแห้งเหือดเพราะคำสาป »",
						"hindi": "« लोग मानते हैं कि श्राप के कारण पानी सूख रहा है। »"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만 누군가는 이득을 보고 있겠지.",
						"english": "But someone must be profiting from it.",
						"japanese": "しかし、誰かがそこから利益を得ているはずだ。",
						"chinese": "但肯定有人从中获利。",
						"french": "« Mais quelqu'un doit en tirer profit. »",
						"spanish": "« Pero alguien debe estar sacando provecho de ello. »",
						"vietnamese": "« Nhưng chắc chắn có kẻ đang trục lợi từ đó. »",
						"thai": "« แต่ต้องมีใครบางคนกำลังได้ประโยชน์จากมัน »",
						"hindi": "« लेकिन कोई न कोई इससे फायदा उठा रहा होगा। »"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "물을 독점하고, 약자들을 통제하고.",
						"english": "Monopolizing water, controlling the weak.",
						"japanese": "水を独占し、弱者を支配する。",
						"chinese": "垄断水源，控制弱者。",
						"french": "« Monopoliser l'eau, contrôler les faibles. »",
						"spanish": "« Monopolizar el agua, controlar a los débiles. »",
						"vietnamese": "« Độc quyền nước, kiểm soát kẻ yếu. »",
						"thai": "« ผูกขาดน้ำ ควบคุมคนอ่อนแอ »",
						"hindi": "« पानी पर एकाधिकार कर, कमज़ोरों को नियंत्रित कर। »"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비열해. 저주 뒤에 숨은 진짜 악당.",
						"english": "Despicable. The true villain hiding behind the curse.",
						"japanese": "卑劣だ。呪いの裏に隠れた真の悪党。",
						"chinese": "卑鄙。诅咒背后真正的恶棍。",
						"french": "« Ignoble. Le vrai méchant caché derrière la malédiction. »",
						"spanish": "« Despreciable. El verdadero villano escondido tras la maldición. »",
						"vietnamese": "« Hèn hạ. Kẻ phản diện thực sự ẩn sau lời nguyền. »",
						"thai": "« เลวทราม. ตัวร้ายที่แท้จริงซ่อนอยู่หลังคำสาป »",
						"hindi": "« नीच। श्राप के पीछे छिपा असली खलनायक। »"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "분노는 진실을 보는 눈이 돼.",
						"english": "Anger becomes the eyes that see truth.",
						"japanese": "怒りは真実を見る目となる。",
						"chinese": "愤怒是看清真相的眼睛。",
						"french": "« La colère devient les yeux qui voient la vérité. »",
						"spanish": "« La ira se convierte en los ojos que ven la verdad. »",
						"vietnamese": "« Sự phẫn nộ trở thành đôi mắt nhìn thấu sự thật. »",
						"thai": "« ความโกรธจะกลายเป็นดวงตาที่มองเห็นความจริง »",
						"hindi": "« क्रोध सच देखने वाली आँखें बन जाता है। »"
					},
					"speaker": "ember",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ember",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "최근 사막 식물들이 이상해.",
						"english": "Lately, the desert plants have been acting strangely.",
						"japanese": "最近、砂漠の植物がおかしい。",
						"chinese": "最近沙漠植物很奇怪。",
						"french": "« Récemment, les plantes du désert se comportent bizarrement. »",
						"spanish": "« Últimamente, las plantas del desierto están extrañas. »",
						"vietnamese": "« Gần đây, cây cối sa mạc có vẻ lạ. »",
						"thai": "« พักหลังนี้พืชทะเลทรายแปลกๆ ไป »",
						"hindi": "« हाल ही में, रेगिस्तान के पौधे अजीब व्यवहार कर रहे हैं। »"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭔가 다른 변화가 있다는 거야?",
						"english": "Is there some other change?",
						"japanese": "何か別の変化があるのか？",
						"chinese": "还有其他变化吗？",
						"french": "Y a-t-il un autre changement ?",
						"spanish": "¿Hay algún otro cambio?",
						"vietnamese": "Có sự thay đổi nào khác không?",
						"thai": "มีการเปลี่ยนแปลงอื่นอีกหรือไม่?",
						"hindi": "क्या कोई और बदलाव है?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어떤 건 시들고, 어떤 건 기이하게 활력을 찾아. 마치… 고통에 공명하는 것처럼.",
						"english": "Some wither, others strangely find vitality. As if... resonating with pain.",
						"japanese": "あるものは枯れ、あるものは奇妙なほどに活力を取り戻す。まるで… 苦痛に共鳴するかのように。",
						"chinese": "有些枯萎了，有些却奇异地获得了生机。仿佛… 与痛苦共鸣。",
						"french": "Certains dépérissent, d'autres retrouvent étrangement leur vitalité. Comme si... ils résonnaient avec la douleur.",
						"spanish": "Algunas se marchitan, otras encuentran extrañamente vitalidad. Como si... resonaran con el dolor.",
						"vietnamese": "Một số héo tàn, số khác lại kỳ lạ tìm thấy sức sống. Dường như… cộng hưởng với nỗi đau.",
						"thai": "บางอย่างเหี่ยวเฉา บางอย่างกลับฟื้นคืนชีวิตชีวาอย่างประหลาด ราวกับ… สะท้อนความเจ็บปวด",
						"hindi": "कुछ मुरझा जाते हैं, कुछ अजीब तरह से जीवन पाते हैं। मानो… दर्द से गूंज रहे हों।"
					},
					"speaker": "ember",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저주가 아니야. 조작된 진실.",
						"english": "It's not a curse. A manipulated truth.",
						"japanese": "呪いではない。操作された真実だ。",
						"chinese": "这不是诅咒。是被人操纵的真相。",
						"french": "Ce n'est pas une malédiction. Une vérité manipulée.",
						"spanish": "No es una maldición. Es una verdad manipulada.",
						"vietnamese": "Không phải lời nguyền. Một sự thật bị thao túng.",
						"thai": "ไม่ใช่คำสาป ความจริงที่ถูกบิดเบือน",
						"hindi": "यह कोई शाप नहीं है। एक हेरफेर किया हुआ सच।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "ember",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 연결되어 있어.",
						"english": "All of this... is connected.",
						"japanese": "これら全てが… 繋がっている。",
						"chinese": "这一切… 都连接着。",
						"french": "Tout cela... est lié.",
						"spanish": "Todo esto... está conectado.",
						"vietnamese": "Tất cả điều này… đều được kết nối.",
						"thai": "ทั้งหมดนี้… เชื่อมโยงกัน",
						"hindi": "यह सब… जुड़ा हुआ है।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "하찮은 것들. 감히 거스르려 하다니.",
						"english": "Insignificant fools. How dare you defy me.",
						"japanese": "取るに足らない者ども。よくも私に逆らおうとしたな。",
						"chinese": "卑微的东西。竟敢反抗我。",
						"french": "Créatures insignifiantes. Comment osez-vous me défier.",
						"spanish": "Criaturas insignificantes. ¿Cómo os atrevéis a desafiarme?",
						"vietnamese": "Đồ hèn mọn. Dám chống đối ta.",
						"thai": "พวกไร้ค่า. กล้าดียังไงมาขัดขืนข้า.",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई मेरा विरोध करने की।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어!",
						"english": "...It's not over yet!",
						"japanese": "…まだ終わってない！",
						"chinese": "……还没结束！",
						"french": "...Ce n'est pas encore fini !",
						"spanish": "...¡Todavía no ha terminado!",
						"vietnamese": "...Chưa kết thúc đâu!",
						"thai": "...ยังไม่จบ!",
						"hindi": "...अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "다시 와라. 그때도, 똑같이 죽을 테니.",
						"english": "Come again. You'll die the same then, too.",
						"japanese": "また来るがいい。その時も、同じように死ぬだろう。",
						"chinese": "再来吧。那时，你也会一样死去。",
						"french": "Revenez. Et cette fois encore, vous mourrez de la même façon.",
						"spanish": "Vuelve. Entonces también, morirás de la misma manera.",
						"vietnamese": "Cứ quay lại đi. Khi đó, ngươi cũng sẽ chết y hệt vậy thôi.",
						"thai": "กลับมาอีกสิ. ครั้งนั้น เจ้าก็จะต้องตายแบบเดิมอีก.",
						"hindi": "फिर आओ। तब भी, तुम उसी तरह मरोगे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "이글거리는 모래 폭풍 속에서 거대한 그림자가 나타났다.",
						"english": "A massive shadow emerged from the scorching sandstorm.",
						"japanese": "燃え盛る砂嵐の中から、巨大な影が現れた。",
						"chinese": "炙热的沙尘暴中，一个巨大的影子出现了。",
						"french": "Une ombre massive émergea de la tempête de sable brûlante.",
						"spanish": "Una sombra masiva emergió de la tormenta de arena abrasadora.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện từ bão cát cháy bỏng.",
						"thai": "เงาขนาดใหญ่ปรากฏขึ้นจากพายุทรายอันร้อนระอุ",
						"hindi": "चिलचिलाती रेत के तूफान से एक विशाल छाया उभरी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 여기까지 왔나? 감히 '저주'를 의심해?",
						"english": "You dare come this far? Dare to question the 'curse'?",
						"japanese": "よくもここまで来たな？「呪い」を疑うとは？",
						"chinese": "你竟敢走到这里？竟敢怀疑“诅咒”？",
						"french": "Vous osez venir jusqu'ici ? Osez douter de la \"malédiction\" ?",
						"spanish": "¿Te atreves a llegar tan lejos? ¿A dudar de la 'maldición'?",
						"vietnamese": "Ngươi dám đến tận đây sao? Dám nghi ngờ 'lời nguyền'?",
						"thai": "เจ้ากล้ามาถึงที่นี่หรือ? กล้าที่จะตั้งคำถามถึง 'คำสาป' หรือ?",
						"hindi": "तुम इतनी दूर आने की हिम्मत करते हो? 'शाप' पर सवाल उठाने की हिम्मत करते हो?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너희가 만든 저주잖아!",
						"english": "It's the curse *you* created!",
						"japanese": "お前たちが作った呪いじゃないか！",
						"chinese": "那是你们制造的诅咒！",
						"french": "C'est la malédiction que vous avez créée !",
						"spanish": "¡Es la maldición que *ustedes* crearon!",
						"vietnamese": "Đó là lời nguyền mà *các ngươi* đã tạo ra!",
						"thai": "มันคือคำสาปที่พวกเจ้าสร้างขึ้นมา!",
						"hindi": "यह वही शाप है जो *तुमने* बनाया है!"
					}
				},
				{
					"content": {
						"korean": "진실은 중요치 않아. 중요한 건… 네가 여기서 죽는다는 것.",
						"english": "The truth doesn't matter. What matters is... you die here.",
						"japanese": "真実は重要ではない。重要なのは… お前がここで死ぬということだ。",
						"chinese": "真相不重要。重要的是… 你会死在这里。",
						"french": "La vérité n'importe pas. Ce qui compte... c'est que tu meurs ici.",
						"spanish": "La verdad no importa. Lo que importa es... que mueres aquí.",
						"vietnamese": "Sự thật không quan trọng. Điều quan trọng là… ngươi sẽ chết ở đây.",
						"thai": "ความจริงไม่สำคัญ สิ่งสำคัญคือ… เจ้าจะตายที่นี่",
						"hindi": "सच मायने नहीं रखता। जो मायने रखता है… वह यह है कि तुम यहीं मरोगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 어리석은… 진실은… 더 깊은 곳에…",
						"english": "Ugh... foolish... the truth... lies deeper...",
						"japanese": "ぐっ… 愚かな… 真実は… もっと深淵に…",
						"chinese": "呃… 愚蠢… 真相… 隐藏得更深…",
						"french": "Urgh... insensé... la vérité... est plus profonde...",
						"spanish": "Ugh... necio... la verdad... está más profunda...",
						"vietnamese": "Ư… ngu ngốc… sự thật… nằm sâu hơn…",
						"thai": "อึก… โง่เขลา… ความจริง… อยู่ลึกกว่านั้น…",
						"hindi": "उह… मूर्ख… सच… और गहरा है…"
					}
				},
				{
					"content": {
						"korean": "이젠 도망칠 곳 없어.",
						"english": "Now there's nowhere to run.",
						"japanese": "もう逃げ場はない。",
						"chinese": "现在无处可逃了。",
						"french": "Maintenant, il n'y a plus nulle part où fuir.",
						"spanish": "Ahora no hay dónde huir.",
						"vietnamese": "Bây giờ không còn nơi nào để chạy trốn.",
						"thai": "ตอนนี้ไม่มีที่ให้หนีแล้ว",
						"hindi": "अब भागने की कोई जगह नहीं है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "쓰러진 random_boss. 그러나 사막의 고통은 끝나지 않았다. 낡은 팬던트가 희미하게 빛났다.",
						"english": "Random_boss falls. Yet the desert's torment endures. The old pendant gleams faintly.",
						"japanese": "random_bossは倒れた。しかし、砂漠の苦痛は終わらない。古びたペンダントがかすかに光った。",
						"chinese": "random_boss倒下了。然而，沙漠的苦难并未结束。旧吊坠发出微弱的光芒。",
						"french": "Random_boss tombe. Pourtant, le tourment du désert persiste. L'ancien pendentif luit faiblement.",
						"spanish": "Random_boss cae. Sin embargo, el tormento del desierto perdura. El viejo colgante brilla débilmente.",
						"vietnamese": "random_boss gục ngã. Nhưng nỗi thống khổ của sa mạc vẫn chưa kết thúc. Mặt dây chuyền cũ lóe sáng mờ nhạt.",
						"thai": "random_boss ล้มลง แต่ความทรมานของทะเลทรายยังไม่สิ้นสุด จี้เก่าส่องแสงเรืองรองจางๆ",
						"hindi": "रैंडम_बॉस गिर गया। फिर भी रेगिस्तान की पीड़ा समाप्त नहीं हुई। पुराना पेंडेंट धीमी रोशनी में चमक उठा।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
