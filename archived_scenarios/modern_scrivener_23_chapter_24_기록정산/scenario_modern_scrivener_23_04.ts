export const scenario_modern_scrivener_23_04 = {
	"scenario_id": "modern_scrivener_23_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"echo": {
			"id": "mon_57f2edb8-aa81-4ce7-beed-ab009cd2ff35",
			"name": {
				"korean": "에코",
				"english": "Echo",
				"japanese": "エコー",
				"chinese": "艾可",
				"french": "Écho",
				"spanish": "Eco",
				"vietnamese": "Echo",
				"thai": "เอคโค่",
				"hindi": "इको"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/da48e2c2-6733-4f65-f8b6-f197af4ff700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e90605b9-372f-4bf1-cdec-56a2fdef0800/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"이 도시의 밤은 늘 혼란스러웠다.",
			"하지만 최근, 이상한 '정산'이 시작되었다.",
			"사람들은 사라지고, 에코는 그 그림자를 쫓는다.",
			"모두에게 주어진, 피할 수 없는 카운트다운."
		],
		"english": [
			"The nights in this city were always chaotic.",
			"But recently, a strange 'reckoning' began.",
			"People vanished, and Echo chased their shadows.",
			"An inescapable countdown, given to all."
		],
		"japanese": [
			"この街の夜はいつも混沌としていた。",
			"しかし最近、奇妙な「精算」が始まった。",
			"人々は消え、エコーはその影を追う。",
			"全員に与えられた、避けられぬカウントダウン。"
		],
		"chinese": [
			"这座城市的夜晚总是混乱不堪。",
			"然而最近，一场奇怪的“清算”开始了。",
			"人们消失了，艾蔻追逐着他们的影子。",
			"一个所有人无法逃避的倒计时。"
		],
		"french": [
			"Les nuits de cette ville ont toujours été chaotiques.",
			"Mais récemment, un étrange « règlement » a commencé.",
			"Les gens ont disparu, et Echo poursuit leurs ombres.",
			"Un compte à rebours inévitable, donné à tous."
		],
		"spanish": [
			"Las noches de esta ciudad siempre fueron caóticas.",
			"Pero recientemente, un extraño \"ajuste de cuentas\" comenzó.",
			"La gente desapareció, y Echo persigue sus sombras.",
			"Una cuenta regresiva ineludible, otorgada a todos."
		],
		"vietnamese": [
			"Màn đêm của thành phố này luôn hỗn loạn.",
			"Nhưng gần đây, một cuộc 'thanh toán' kỳ lạ đã bắt đầu.",
			"Người ta biến mất, và Echo đuổi theo những cái bóng đó.",
			"Một đếm ngược không thể tránh khỏi, dành cho tất cả mọi người."
		],
		"thai": [
			"ราตรีของเมืองนี้อลหม่านอยู่เสมอ",
			"แต่ล่าสุด 'การชำระบัญชี' ที่แปลกประหลาดได้เริ่มต้นขึ้นแล้ว",
			"ผู้คนหายไป และเอโค่ไล่ตามเงาเหล่านั้น",
			"การนับถอยหลังที่หลีกเลี่ยงไม่ได้ ซึ่งทุกคนได้รับ"
		],
		"hindi": [
			"इस शहर की रातें हमेशा अराजक रही हैं।",
			"लेकिन हाल ही में, एक अजीब 'हिसाब-किताब' शुरू हो गया है।",
			"लोग गायब हो गए, और इको उनकी परछाईयों का पीछा करता है।",
			"सबको मिला, एक अटूट उलटी गिनती।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "도시의 그림자는 더욱 짙어졌다. 미지의 힘이 사람들을 휩쓸어갔다.",
						"english": "The city's shadows deepened. An unknown force swept people away.",
						"japanese": "街の影はさらに色濃くなった。未知の力が人々を巻き込んだ。",
						"chinese": "城市的阴影更加深沉了。一股未知的力量席卷了人们。",
						"french": "Les ombres de la ville s'épaississaient. Une force inconnue a emporté les gens.",
						"spanish": "Las sombras de la ciudad se hicieron más profundas. Una fuerza desconocida se llevó a la gente.",
						"vietnamese": "Bóng đêm thành phố càng thêm dày đặc. Một thế lực vô danh đã cuốn trôi mọi người.",
						"thai": "เงามืดของเมืองทวีความมืดมิดยิ่งขึ้น พลังลึกลับได้พัดพาผู้คนไป",
						"hindi": "शहर की परछाईयाँ और गहरी हो गईं। एक अज्ञात शक्ति ने लोगों को बहा ले गई।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…또 사라졌어요. 제 옆집 아줌마가.",
						"english": "...She's gone again. My next-door neighbor.",
						"japanese": "…また消えました。私の隣の家のおばさんが。",
						"chinese": "……又消失了。我隔壁的阿姨。",
						"french": "...Elle a encore disparu. Ma voisine.",
						"spanish": "...Ha desaparecido de nuevo. Mi vecina de al lado.",
						"vietnamese": "...Lại biến mất rồi. Cô hàng xóm nhà tôi.",
						"thai": "…หายไปอีกแล้ว ป้าข้างบ้านของฉัน",
						"hindi": "...वह फिर से गायब हो गई। मेरी पड़ोसन।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "사라지다니? 어디로?",
						"english": "Vanished? Where to?",
						"japanese": "消えたって？どこへ？",
						"chinese": "消失了？去哪了？",
						"french": "Disparue ? Où ça ?",
						"spanish": "¿Desaparecida? ¿A dónde?",
						"vietnamese": "Biến mất ư? Đi đâu rồi?",
						"thai": "หายไปไหน?",
						"hindi": "गायब हो गई? कहाँ?"
					}
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "어제까지 멀쩡했는데, 갑자기 모든 걸 정리하고… 흔적도 없이 사라졌어요.",
						"english": "She was fine until yesterday, then suddenly she packed everything up... and vanished without a trace.",
						"japanese": "昨日までは普通だったのに、突然全てを片付けて…痕跡も残さずに消えました。",
						"chinese": "昨天还好好的，突然就整理好了一切……然后消失得无影无踪。",
						"french": "Elle allait bien jusqu'à hier, puis soudain elle a tout rangé... et a disparu sans laisser de trace.",
						"spanish": "Estaba bien hasta ayer, y de repente lo arregló todo... y desapareció sin dejar rastro.",
						"vietnamese": "Đến hôm qua vẫn bình thường, vậy mà đột nhiên dọn dẹp mọi thứ... rồi biến mất không dấu vết.",
						"thai": "เมื่อวานยังปกติอยู่เลย แต่จู่ๆ ก็เก็บข้าวของทุกอย่าง... แล้วหายไปอย่างไร้ร่องรอย",
						"hindi": "कल तक ठीक थी, फिर अचानक उसने सब कुछ समेट लिया... और बिना किसी निशान के गायब हो गई।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "단순한 사고가 아닌가?",
						"english": "Isn't it just a simple accident?",
						"japanese": "単なる事故ではないのか？",
						"chinese": "这不是简单的事故吗？",
						"french": "N'est-ce pas un simple accident ?",
						"spanish": "¿No es solo un simple accidente?",
						"vietnamese": "Không phải là một tai nạn đơn thuần sao?",
						"thai": "ไม่ใช่แค่อุบัติเหตุธรรมดาเหรอ?",
						"hindi": "क्या यह सिर्फ एक साधारण दुर्घटना नहीं है?"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 550,
					"speaker": "echo",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "사고가 아니에요. '정산' 당한 거예요. 제 옆집 아저씨도….",
						"english": "It's not an accident. They were 'reckoned' with. My next-door neighbor too...",
						"japanese": "事故じゃない。「精算」されたんです。私の隣の家のおじさんも…。",
						"chinese": "不是事故。他们被“清算”了。我隔壁的叔叔也……",
						"french": "Ce n'est pas un accident. Ils ont été « réglés ». Mon voisin aussi...",
						"spanish": "No es un accidente. Fueron \"ajustados\". Mi vecino de al lado también...",
						"vietnamese": "Không phải tai nạn đâu. Họ đã bị 'thanh toán' rồi. Ông hàng xóm nhà tôi cũng vậy...",
						"thai": "ไม่ใช่อุบัติเหตุหรอกค่ะ พวกเขาถูก 'ชำระบัญชี' ไปแล้ว ลุงข้างบ้านของฉันก็...",
						"hindi": "यह दुर्घटना नहीं है। उनका 'हिसाब-किताब' हो गया है। मेरे पड़ोस के अंकल भी..."
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "'정산'이라고?",
						"english": "'Settlement,' you say?",
						"japanese": "「精算」だって？",
						"chinese": "“清算”？",
						"french": "« Règlement » ?",
						"spanish": "¿'Liquidación'?",
						"vietnamese": "'Thanh toán' ư?",
						"thai": "การ 'ชำระล้าง' งั้นเหรอ?",
						"hindi": " 'निपटान' कहा?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "빚을 갚듯이, 뭔지 모를 힘에 의해 강제로 모든 걸 '청산'당하고 사라지는 거죠.",
						"english": "Like repaying a debt, everything is forcibly 'liquidated' and erased by an unknown power.",
						"japanese": "借金を返すように、何らかの未知の力によって全てを強制的に「清算」させられ、消滅させられるんです。",
						"chinese": "就像还债一样，所有一切都被某种未知的力量强制“清算”并消失。",
						"french": "Comme pour rembourser une dette, tout est « liquidé » de force et disparaît par une force inconnue.",
						"spanish": "Como si se pagara una deuda, todo es 'liquidado' y borrado a la fuerza por un poder desconocido.",
						"vietnamese": "Như thể trả nợ, mọi thứ bị một thế lực vô hình ép buộc 'thanh lý' và biến mất.",
						"thai": "เหมือนการชำระหนี้ ทุกสิ่งถูก 'ชำระล้าง' และลบเลือนไปโดยอำนาจที่ไม่อาจทราบได้",
						"hindi": "जैसे कर्ज चुकाना, सब कुछ एक अज्ञात शक्ति द्वारा जबरन 'समाप्त' कर दिया जाता है और गायब हो जाता है।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "대체 누가 그런 짓을 벌이는 거야?",
						"english": "Who on earth is doing such a thing?",
						"japanese": "一体誰がそんなことをしてるんだ？",
						"chinese": "到底是谁在做这种事？",
						"french": "Qui diable fait ça ?",
						"spanish": "¿Quién demonios está haciendo esto?",
						"vietnamese": "Ai đang làm chuyện này vậy chứ?",
						"thai": "ใครกันแน่ที่กำลังทำเรื่องแบบนี้?",
						"hindi": "आखिर कौन कर रहा है ये सब?"
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
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						4,
						3
					],
					"duration_ms": 400
				},
				{
					"content": {
						"korean": "방금 또… 제 친구가 사라졌어요. 눈앞에서.",
						"english": "Just now… my friend disappeared again. Right before my eyes.",
						"japanese": "たった今また… 友達が目の前で消えました。",
						"chinese": "刚才又…我的朋友消失了。就在我眼前。",
						"french": "Tout à l'heure... mon ami a encore disparu. Sous mes yeux.",
						"spanish": "Hace un momento... mi amigo volvió a desaparecer. Justo delante de mis ojos.",
						"vietnamese": "Vừa rồi… bạn tôi lại biến mất. Ngay trước mắt tôi.",
						"thai": "เมื่อกี้... เพื่อนของฉันหายไปอีกแล้ว ตรงหน้าฉันเลย",
						"hindi": "अभी-अभी… मेरा दोस्त फिर से गायब हो गया। मेरी आँखों के सामने।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "어떻게 사라졌는데?",
						"english": "How did they disappear?",
						"japanese": "どうやって消えたんだ？",
						"chinese": "是怎么消失的？",
						"french": "Comment a-t-il disparu ?",
						"spanish": "¿Cómo desapareció?",
						"vietnamese": "Biến mất thế nào?",
						"thai": "หายไปได้ยังไง?",
						"hindi": "कैसे गायब हो गया?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "마치 홀린 듯, 자기가 알던 삶을 정리하더니… 이상한 종착역으로 걸어들어갔어요. 이세계로 가는 길처럼.",
						"english": "As if possessed, they tidied up the life they knew… then walked into a strange final destination. Like a path to another world.",
						"japanese": "まるで何かに憑かれたように、自分の知っていた人生を整理し…そして奇妙な終着駅へと歩いていきました。異世界への道のように。",
						"chinese": "就像着了魔一样，整理了自己熟悉的生活…然后走进了奇怪的终点站。就像通往异世界的路。",
						"french": "Comme possédé, il a rangé sa vie… puis est entré dans un étrange terminus. Comme un chemin vers un autre monde.",
						"spanish": "Como si estuviera poseído, arregló la vida que conocía... y luego caminó hacia un extraño destino final. Como un camino a otro mundo.",
						"vietnamese": "Như bị mê hoặc, họ dọn dẹp cuộc sống quen thuộc… rồi bước vào một ga cuối kỳ lạ. Như một con đường dẫn đến thế giới khác.",
						"thai": "ราวกับถูกครอบงำ พวกเขาจัดการชีวิตที่เคยรู้จัก... แล้วเดินเข้าไปในสถานีปลายทางที่แปลกประหลาด เหมือนทางไปอีกโลกหนึ่ง",
						"hindi": "जैसे किसी ने वश में कर लिया हो, उसने अपने जाने-पहचाने जीवन को समेट लिया... और फिर एक अजीब अंतिम गंतव्य की ओर चला गया। जैसे किसी दूसरी दुनिया का रास्ता हो।"
					},
					"speaker": "echo"
				},
				{
					"speaker": "character_3",
					"content": {
						"korean": "이건 단순한 우연이 아니야. 누군가 의도적으로 벌이는 짓이야.",
						"english": "This isn't just a coincidence. Someone is doing this intentionally.",
						"japanese": "これは単なる偶然じゃない。誰かが意図的に仕組んでいるんだ。",
						"chinese": "这不是单纯的偶然。是有人故意为之。",
						"french": "Ce n'est pas une simple coïncidence. Quelqu'un fait ça intentionnellement.",
						"spanish": "Esto no es una simple coincidencia. Alguien está haciendo esto intencionalmente.",
						"vietnamese": "Đây không phải là sự trùng hợp ngẫu nhiên. Có ai đó đang cố tình làm điều này.",
						"thai": "นี่ไม่ใช่แค่เรื่องบังเอิญ มีใครบางคนกำลังทำเรื่องนี้โดยเจตนา",
						"hindi": "यह सिर्फ एक संयोग नहीं है। कोई जानबूझकर ऐसा कर रहा है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다음은 우리일지도 몰라요. 피할 수 없는 카운트다운이 시작됐어요.",
						"english": "We might be next. An unavoidable countdown has begun.",
						"japanese": "次は私たちかもしれません。避けられないカウントダウンが始まりました。",
						"chinese": "下一个可能就是我们。一场无法避免的倒计时已经开始了。",
						"french": "Nous serons peut-être les prochains. Un compte à rebours inévitable a commencé.",
						"spanish": "Podríamos ser los próximos. Una cuenta regresiva inevitable ha comenzado.",
						"vietnamese": "Chúng ta có thể là người tiếp theo. Một cuộc đếm ngược không thể tránh khỏi đã bắt đầu.",
						"thai": "เราอาจจะเป็นคนต่อไป การนับถอยหลังที่หลีกเลี่ยงไม่ได้ได้เริ่มต้นขึ้นแล้ว",
						"hindi": "अगला नंबर हमारा भी हो सकता है। एक अपरिहार्य उलटी गिनती शुरू हो गई है।"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						1,
						3
					],
					"duration_ms": 600
				},
				{
					"speaker": "echo",
					"content": {
						"korean": "더 이상 못 참겠어요. 당신들도 위험해요. 이 카운트다운은 모두에게 찾아와요.",
						"english": "I can't take this anymore. You're in danger too. This countdown comes for everyone.",
						"japanese": "もう我慢できません。あなたたちも危険です。このカウントダウンはみんなに訪れます。",
						"chinese": "我受不了了。你们也危险了。这个倒计时会降临在每个人身上。",
						"french": "Je n'en peux plus. Vous êtes en danger aussi. Ce compte à rebours nous concerne tous.",
						"spanish": "No puedo más. Ustedes también están en peligro. Esta cuenta regresiva llega para todos.",
						"vietnamese": "Tôi không thể chịu đựng được nữa. Các bạn cũng đang gặp nguy hiểm. Cuộc đếm ngược này sẽ đến với tất cả mọi người.",
						"thai": "ฉันไม่ทนแล้ว พวกคุณก็ตกอยู่ในอันตรายเหมือนกัน การนับถอยหลังนี้จะมาถึงทุกคน",
						"hindi": "मैं अब और बर्दाश्त नहीं कर सकता। आप लोग भी खतरे में हैं। यह उलटी गिनती सबके लिए आती है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 괜찮아. 방법을 찾을 거야.",
						"english": "We'll be fine. We'll find a way.",
						"japanese": "私たちは大丈夫。方法を見つけるから。",
						"chinese": "我们会没事的。我们会找到办法的。",
						"french": "Ça ira. Nous trouverons un moyen.",
						"spanish": "Estaremos bien. Encontraremos una solución.",
						"vietnamese": "Chúng tôi sẽ ổn thôi. Chúng tôi sẽ tìm cách.",
						"thai": "เราไม่เป็นไรหรอก เราจะหาวิธีได้เอง",
						"hindi": "हम ठीक हैं। हम रास्ता खोज लेंगे।"
					}
				},
				{
					"content": {
						"korean": "아니요! 과거의 작은 빚까지도… 놈들은 놓치지 않을 거예요!",
						"english": "No! Not even the smallest past debt... they won't miss a thing!",
						"japanese": "いいえ！過去の些細な借金までも…奴らは見逃しません！",
						"chinese": "不！即使是过去微小的债务……他们也不会放过！",
						"french": "Non ! Pas même la plus petite dette passée... ils ne rateront rien !",
						"spanish": "¡No! Ni siquiera la más mínima deuda pasada... ¡no se les escapará nada!",
						"vietnamese": "Không! Kể cả những món nợ nhỏ trong quá khứ... chúng cũng sẽ không bỏ qua đâu!",
						"thai": "ไม่! แม้แต่หนี้ก้อนเล็กในอดีต... พวกมันก็ไม่พลาด!",
						"hindi": "नहीं! अतीत का छोटा-सा क़र्ज़ भी... वे नहीं छोड़ेंगे!"
					},
					"speaker": "echo",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "불안한 예감은 현실이 되어가고 있었다. 도시는 카운트다운에 갇혔다.",
						"english": "An uneasy premonition was becoming reality. The city was trapped in a countdown.",
						"japanese": "不安な予感は現実となりつつあった。都市はカウントダウンに囚われた。",
						"chinese": "不安的预感正在成为现实。城市陷入了倒计时。",
						"french": "Une sombre prémonition devenait réalité. La ville était piégée dans un compte à rebours.",
						"spanish": "Un presentimiento inquietante se estaba haciendo realidad. La ciudad estaba atrapada en una cuenta regresiva.",
						"vietnamese": "Linh cảm bất an đang dần trở thành hiện thực. Thành phố bị mắc kẹt trong một cuộc đếm ngược.",
						"thai": "ลางสังหรณ์อันไม่สบายใจกำลังกลายเป็นความจริง เมืองถูกขังอยู่ในการนับถอยหลัง",
						"hindi": "एक बेचैन करने वाली आशंका सच होती जा रही थी। शहर उलटी गिनती में फंस गया था।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "고작 이것으로 끝이라 생각하나? 진짜 '정산'은 이제부터 시작이다… 스크리브너의 의지는 막을 수 없어.",
						"english": "Do you think this is the end? The real 'settlement' begins now... Scrivener's will cannot be stopped.",
						"japanese": "これで終わりだとでも思うのか？本当の「清算」はこれから始まる…スクリブナーの意志は止められない。",
						"chinese": "以为这就结束了吗？真正的“清算”才刚刚开始……斯克里夫纳的意志是无法阻止的。",
						"french": "Croyez-vous que c'est la fin ? Le véritable \"règlement\" commence maintenant... La volonté de Scrivener ne peut être arrêtée.",
						"spanish": "¿Crees que esto es el final? La verdadera \"liquidación\" comienza ahora... La voluntad de Scrivener no puede ser detenida.",
						"vietnamese": "Ngươi nghĩ đây là kết thúc ư? Cuộc 'thanh toán' thực sự chỉ mới bắt đầu thôi... Ý chí của Scrivener không thể ngăn cản.",
						"thai": "คิดว่านี่คือจุดจบงั้นหรือ? 'การชำระบัญชี' ที่แท้จริงเพิ่งจะเริ่มต้นขึ้น... เจตจำนงของสกริฟเวเนอร์ไม่อาจหยุดยั้งได้",
						"hindi": "क्या तुम्हें लगता है कि यह अंत है? असली 'निपटान' अब शुरू होता है... स्क्रिवनर की इच्छा को रोका नहीं जा सकता।"
					}
				},
				{
					"content": {
						"korean": "스크리브너? 대체 누구야!",
						"english": "Scrivener? Who in the world is that!",
						"japanese": "スクリブナー？一体誰なんだ！",
						"chinese": "斯克里夫纳？到底是谁！",
						"french": "Scrivener ? Qui est-ce, bon sang !",
						"spanish": "¿Scrivener? ¡Quién demonios es ese!",
						"vietnamese": "Scrivener? Rốt cuộc là ai!",
						"thai": "สกริฟเวเนอร์? ใครกันแน่!",
						"hindi": "स्क्रिवनर? आख़िर कौन है वो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "알 수 없는 존재의 그림자가 더욱 짙어졌다. 다음 정거장은, 더 깊은 어둠 속이었다.",
						"english": "The shadow of the unknown entity deepened. The next stop was deeper into the darkness.",
						"japanese": "正体不明の存在の影がさらに濃くなった。次の停車駅は、より深い闇の中だった。",
						"chinese": "未知存在的影子变得更加浓重。下一站，是更深的黑暗之中。",
						"french": "L'ombre de l'entité inconnue s'épaissit. Le prochain arrêt était plus profond dans l'obscurité.",
						"spanish": "La sombra de la entidad desconocida se hizo más densa. La siguiente parada era más profunda en la oscuridad.",
						"vietnamese": "Cái bóng của thực thể không rõ càng trở nên đậm đặc hơn. Trạm dừng tiếp theo, là sâu hơn vào bóng tối.",
						"thai": "เงาของสิ่งมีชีวิตที่ไม่รู้จักเข้มขึ้น จุดจอดต่อไปคือความมืดที่ลึกยิ่งกว่า",
						"hindi": "अज्ञात सत्ता की छाया और गहरी हो गई। अगला पड़ाव, गहरे अँधेरे में था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"action": "exit",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "echo"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 그들을 가로막았다. 정체를 알 수 없는 존재였다.",
						"english": "A colossal shadow blocked their path. It was an unknown entity.",
						"japanese": "巨大な影が彼らの行く手を阻んだ。それは正体不明の存在だった。",
						"chinese": "一个巨大的影子挡住了他们的去路。那是一个身份不明的存在。",
						"french": "Une ombre colossale leur barra la route. C'était une entité inconnue.",
						"spanish": "Una sombra colosal les bloqueó el paso. Era una entidad desconocida.",
						"vietnamese": "Một cái bóng khổng lồ chặn đường họ. Đó là một thực thể không rõ danh tính.",
						"thai": "เงาขนาดมหึมาขวางทางพวกเขาอยู่ มันคือสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "एक विशाल छाया ने उनका रास्ता रोका। वह एक अज्ञात सत्ता थी।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "왔군. 미지불금의 채무자들.",
						"english": "You've arrived. The debtors of unpaid dues.",
						"japanese": "来たか。未払金の債務者たちよ。",
						"chinese": "来了。未支付款项的债务人。",
						"french": "Vous êtes là. Les débiteurs des impayés.",
						"spanish": "Han llegado. Los deudores de las cuotas impagas.",
						"vietnamese": "Đến rồi à. Những con nợ chưa thanh toán.",
						"thai": "มาแล้วสินะ. พวกเจ้าหนี้ที่ยังไม่ได้ชำระ.",
						"hindi": "आ गए। न चुकाए गए क़र्ज़ के देनदार।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거야?",
						"english": "You orchestrated all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "这都是你策划的？",
						"french": "C'est toi qui as orchestré tout ça ?",
						"spanish": "¿Tú orquestaste todo esto?",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này à?",
						"thai": "นี่แกเป็นคนจัดฉากทั้งหมดนี่ใช่ไหม?",
						"hindi": "तुमने यह सब रचा है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 그저 시스템의 대리인일 뿐. 너희의 모든 '빚'을 회수할 뿐이다.",
						"english": "I am merely an agent of the System. I simply reclaim all your 'debts'.",
						"japanese": "私はただ、システムの代理人に過ぎない。お前たちの全ての「借金」を回収するだけだ。",
						"chinese": "我只是系统的代理人。仅此而已。我只是收回你们所有的“债务”。",
						"french": "Je ne suis qu'un agent du Système. Je ne fais que recouvrer toutes vos \"dettes\".",
						"spanish": "Solo soy un agente del Sistema. Simplemente recupero todas vuestras \"deudas\".",
						"vietnamese": "Ta chỉ là người đại diện của Hệ Thống. Chỉ thu hồi tất cả 'nợ' của các ngươi mà thôi.",
						"thai": "ฉันเป็นแค่ตัวแทนของระบบเท่านั้น ฉันแค่ทวงคืน 'หนี้' ทั้งหมดของพวกแก",
						"hindi": "मैं सिर्फ़ सिस्टम का एक एजेंट हूँ। मैं बस तुम्हारे सारे 'क़र्ज़' वसूल कर रहा हूँ।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시스템의 차가운 손아귀가 그들을 짓눌렀다.",
						"english": "The cold grasp of the System crushed them.",
						"japanese": "システムの冷たい手が彼らを押し潰した。",
						"chinese": "系统的冰冷之手扼住了他们。",
						"french": "La froide emprise du Système les écrasa.",
						"spanish": "La fría garra del Sistema los aplastó.",
						"vietnamese": "Bàn tay lạnh lẽo của Hệ Thống đã nghiền nát họ.",
						"thai": "กรงเล็บอันเย็นยะเยือกของระบบบดขยี้พวกเขา",
						"hindi": "सिस्टम की ठंडी पकड़ ने उन्हें कुचल दिया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 저항. 너희의 '빚'은 너무 많다.",
						"english": "Futile resistance. Your 'debt' is too great.",
						"japanese": "無駄な抵抗だ。お前たちの『負債』はあまりにも大きい。",
						"chinese": "垂死挣扎。你们的“债”太多了。",
						"french": "Résistance futile. Votre 'dette' est trop grande.",
						"spanish": "Resistencia inútil. Vuestra 'deuda' es demasiado grande.",
						"vietnamese": "Kháng cự vô ích. 'Món nợ' của các ngươi quá lớn.",
						"thai": "การต่อต้านที่ไร้ค่า 'หนี้' ของพวกเจ้ามันมากเกินไป",
						"hindi": "व्यर्थ का प्रतिरोध। तुम्हारा 'कर्ज' बहुत ज़्यादा है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어. 우린 도망치지 않아!",
						"english": "It's not over yet... We won't run!",
						"japanese": "まだ… 終わってない。私たちは逃げない！",
						"chinese": "还没… 结束。我们不会逃跑！",
						"french": "Ce n'est pas encore… fini. Nous ne fuirons pas !",
						"spanish": "Todavía no… ha terminado. ¡No huiremos!",
						"vietnamese": "Chưa… kết thúc đâu. Chúng ta sẽ không bỏ chạy!",
						"thai": "ยัง… ไม่จบ! เราไม่หนีหรอก!",
						"hindi": "अभी तक… खत्म नहीं हुआ है। हम भागेंगे नहीं!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			]
		}
	]
} as const;
