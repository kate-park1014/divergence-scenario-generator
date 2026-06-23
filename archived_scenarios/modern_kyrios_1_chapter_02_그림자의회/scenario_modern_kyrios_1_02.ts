export const scenario_modern_kyrios_1_02 = {
	"scenario_id": "modern_kyrios_1_02",
	"order": 2,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "높이 솟은 빌딩 사이, 낡은 주거지가 그림자처럼 드리워졌다.",
						"english": "Amidst towering skyscrapers, a dilapidated residential area loomed like a shadow.",
						"japanese": "高くそびえるビル群の間に、古い住宅街が影のように広がる。",
						"chinese": "高耸的建筑之间，旧住宅区如同阴影般笼罩。",
						"french": "Entre les gratte-ciel imposants, un vieux quartier résidentiel projetait son ombre.",
						"spanish": "Entre los imponentes edificios, un viejo barrio residencial se cernía como una sombra.",
						"vietnamese": "Giữa những tòa nhà cao chọc trời, khu dân cư cũ đổ bóng như một cái bóng.",
						"thai": "ระหว่างตึกสูงเสียดฟ้า ชุมชนเก่าแก่ทอดเงาลงมา",
						"hindi": "ऊँची इमारतों के बीच, एक पुरानी आवासीय बस्ती परछाई की तरह छाई हुई थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "여기가… 에코가 말한 곳인가?",
						"english": "Is this… the place Echo mentioned?",
						"japanese": "ここが…エコーが言っていた場所か？",
						"chinese": "这里是…艾可说的地方吗？",
						"french": "C'est ici… l'endroit dont Echo a parlé ?",
						"spanish": "¿Es aquí… el lugar que mencionó Echo?",
						"vietnamese": "Đây là… nơi Echo đã nói sao?",
						"thai": "ที่นี่… คือที่ที่เอคโค่พูดถึงเหรอ?",
						"hindi": "क्या यह… वही जगह है जिसकी इको ने बात की थी?"
					},
					"type": "speech"
				},
				{
					"speaker": "echo",
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "여기서 제 이웃들이 사라졌어요. 다들 어디로 간 걸까요?",
						"english": "My neighbors disappeared from here. Where could they have gone?",
						"japanese": "ここから私の隣人たちが消えました。みんな、どこへ行ったのでしょう？",
						"chinese": "我的邻居们从这里消失了。他们都去哪儿了？",
						"french": "Mes voisins ont disparu d'ici. Où sont-ils tous allés ?",
						"spanish": "Mis vecinos desaparecieron de aquí. ¿Adónde habrán ido todos?",
						"vietnamese": "Hàng xóm của tôi đã biến mất khỏi đây. Họ đã đi đâu hết vậy?",
						"thai": "เพื่อนบ้านของฉันหายไปจากที่นี่ พวกเขาไปอยู่ที่ไหนกันนะ?",
						"hindi": "मेरे पड़ोसी यहाँ से गायब हो गए। वे सब कहाँ चले गए होंगे?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "사라졌다고? 범죄인가.",
						"english": "Disappeared? Is it a crime?",
						"japanese": "消えた？犯罪か。",
						"chinese": "消失了？是犯罪吗？",
						"french": "Disparus ? Un crime ?",
						"spanish": "¿Desaparecieron? ¿Es un crimen?",
						"vietnamese": "Biến mất ư? Là một tội ác sao?",
						"thai": "หายไปเหรอ? อาชญากรรมรึเปล่า?",
						"hindi": "गायब हो गए? क्या यह अपराध है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니에요! 분명 더 좋은 곳으로 가신 걸 거예요. 도시가 우리를 버릴 리 없어요.",
						"english": "No! They must have gone to a better place. The city wouldn't abandon us.",
						"japanese": "違います！きっと、もっと良い場所へ行かれたんです。都市が私たちを見捨てるはずがありません。",
						"chinese": "不！他们一定是去了更好的地方。城市不会抛弃我们的。",
						"french": "Non ! Ils sont sûrement partis dans un endroit meilleur. La ville ne nous abandonnerait pas.",
						"spanish": "¡No! Deben de haber ido a un lugar mejor. La ciudad no nos abandonaría.",
						"vietnamese": "Không! Chắc chắn họ đã đến một nơi tốt đẹp hơn. Thành phố sẽ không bỏ rơi chúng ta đâu.",
						"thai": "ไม่ค่ะ! พวกเขาต้องไปอยู่ในที่ที่ดีกว่าแน่ๆ เมืองนี้ไม่มีทางทอดทิ้งพวกเราหรอกค่ะ",
						"hindi": "नहीं! वे ज़रूर किसी बेहतर जगह गए होंगे। शहर हमें छोड़ नहीं सकता।"
					},
					"speaker": "echo",
					"emotion": "happy"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						5,
						1
					],
					"duration_ms": 500
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그래. 더 나은 곳. 아주 편안한 곳으로.",
						"english": "Yes. A better place. A very comfortable place.",
						"japanese": "そうだな。より良い場所へ。とても安らげる場所へ。",
						"chinese": "是啊。更好的地方。一个非常舒适的地方。",
						"french": "Oui. Un endroit meilleur. Un endroit très confortable.",
						"spanish": "Sí. Un lugar mejor. Un lugar muy cómodo.",
						"vietnamese": "Phải. Một nơi tốt đẹp hơn. Một nơi rất thoải mái.",
						"thai": "ใช่ ที่ที่ดีกว่า ที่ที่สบายมากๆ",
						"hindi": "हाँ। एक बेहतर जगह। बहुत आरामदायक जगह पर।"
					}
				},
				{
					"content": {
						"korean": "누구냐 넌.",
						"english": "Who are you?",
						"japanese": "お前は誰だ。",
						"chinese": "你是什么人？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "तुम कौन हो?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "아무리 찾아도 없어요… 정말 다들 어디로 갔을까요?",
						"english": "I can't find them anywhere... Where could everyone have gone?",
						"japanese": "いくら探しても見つからない… みんな本当にどこへ行ってしまったんだろう？",
						"chinese": "怎么找也找不到……大家到底去哪儿了？",
						"french": "Je ne les trouve nulle part... Où tout le monde a-t-il bien pu aller ?",
						"spanish": "No los encuentro por ninguna parte... ¿A dónde habrán ido todos?",
						"vietnamese": "Tìm mãi không thấy... Mọi người thực sự đã đi đâu rồi?",
						"thai": "หาเท่าไหร่ก็ไม่เจอ... ทุกคนหายไปไหนกันหมดนะ?",
						"hindi": "कितना भी ढूंढो, वे नहीं मिलते... सब लोग सच में कहाँ चले गए होंगे?"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아직도 희망을 버리지 않았어?",
						"english": "You haven't given up hope yet?",
						"japanese": "まだ希望を捨ててないのか？",
						"chinese": "你还没放弃希望吗？",
						"french": "Tu n'as pas encore perdu espoir ?",
						"spanish": "¿Todavía no has perdido la esperanza?",
						"vietnamese": "Ngươi vẫn chưa từ bỏ hy vọng sao?",
						"thai": "ยังไม่หมดหวังอีกเหรอ?",
						"hindi": "क्या तुमने अभी तक उम्मीद नहीं छोड़ी?"
					}
				},
				{
					"speaker": "echo",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "이 도시의 번영은… 모두를 위한 거잖아요. 저희를 잊지 않을 거예요.",
						"english": "This city's prosperity... it's for everyone, isn't it? They won't forget us.",
						"japanese": "この街の繁栄は… みんなのためのものでしょう。私たちを忘れないはずです。",
						"chinese": "这座城市的繁荣……是为了所有人。他们不会忘记我们的。",
						"french": "La prospérité de cette ville... c'est pour tout le monde, n'est-ce pas ? Ils ne nous oublieront pas.",
						"spanish": "La prosperidad de esta ciudad... es para todos, ¿verdad? No nos olvidarán.",
						"vietnamese": "Sự thịnh vượng của thành phố này... là dành cho tất cả mọi người mà. Họ sẽ không quên chúng ta đâu.",
						"thai": "ความรุ่งเรืองของเมืองนี้... มันเพื่อทุกคนไม่ใช่เหรอ? พวกเขาจะไม่ลืมเราหรอก",
						"hindi": "इस शहर की समृद्धि... सबके लिए है, है ना? वे हमें नहीं भूलेंगे।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						1
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석군. 번영은… 항상 대가를 치르는 법.",
						"english": "Foolish. Prosperity... always comes at a price.",
						"japanese": "愚かだな。繁栄は…常に代償を伴うものだ。",
						"chinese": "愚蠢。繁荣……总是要付出代价的。",
						"french": "Idiot. La prospérité... a toujours un prix.",
						"spanish": "Estúpido. La prosperidad... siempre tiene un precio.",
						"vietnamese": "Ngốc nghếch. Thịnh vượng... luôn phải trả giá.",
						"thai": "งี่เง่า ความรุ่งเรือง... มักจะมาพร้อมกับการชดใช้เสมอ",
						"hindi": "मूर्ख। समृद्धि... हमेशा एक कीमत पर आती है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						1,
						3
					]
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "여기… 예전에는 활기찼던 골목이었어요. 지금은 텅 비었지만.",
						"english": "This... used to be a lively alley. Now it's empty though.",
						"japanese": "ここ… 以前は賑やかだった路地だったんです。今はがらんとしていますが。",
						"chinese": "这里……以前曾是条热闹的巷子。虽然现在空荡荡的。",
						"french": "Ici... c'était une ruelle animée autrefois. Mais maintenant, c'est vide.",
						"spanish": "Aquí... solía ser un callejón animado. Aunque ahora está vacío.",
						"vietnamese": "Nơi đây... trước đây từng là một con hẻm náo nhiệt. Dù bây giờ trống rỗng.",
						"thai": "ที่นี่... เคยเป็นตรอกที่คึกคักมาก่อน ตอนนี้กลับว่างเปล่า",
						"hindi": "यह... पहले एक जीवंत गली हुआ करती थी। हालांकि अब यह खाली है।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "찬란한 폐허라는 말이 딱 맞네.",
						"english": "A 'splendid ruin' is the perfect description.",
						"japanese": "『輝かしい廃墟』という言葉がぴったりだね。",
						"chinese": "“灿烂的废墟”这个词形容得真贴切。",
						"french": "Une 'ruine splendide', c'est exactement ça.",
						"spanish": "Una 'ruina espléndida' es la descripción perfecta.",
						"vietnamese": "Quả là một 'phế tích huy hoàng'.",
						"thai": "คำว่า 'ซากปรักหักพังอันรุ่งโรจน์' ช่างเหมาะสมอะไรอย่างนี้",
						"hindi": "एक 'शानदार खंडहर' बिल्कुल सही वर्णन है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "도시의 이 번영이… 사실은 과거의 비극적인 희생 위에 세워졌다는 소문이 있어요.",
						"english": "There's a rumor that this city's prosperity... was actually built upon tragic sacrifices from the past.",
						"japanese": "この街の繁栄が… 実は過去の悲劇的な犠牲の上に築かれたものだという噂があります。",
						"chinese": "有传闻说，这座城市的繁荣……实际上是建立在过去悲剧性牺牲之上的。",
						"french": "Il y a une rumeur selon laquelle la prospérité de cette ville... a en fait été construite sur les sacrifices tragiques du passé.",
						"spanish": "Hay un rumor de que la prosperidad de esta ciudad... en realidad se construyó sobre trágicos sacrificios del pasado.",
						"vietnamese": "Có tin đồn rằng sự thịnh vượng của thành phố này... thực ra được xây dựng trên những hy sinh bi thảm trong quá khứ.",
						"thai": "มีข่าวลือว่าความรุ่งเรืองของเมืองนี้... แท้จริงแล้วสร้างขึ้นบนการเสียสละอันน่าเศร้าในอดีต",
						"hindi": "एक अफवाह है कि इस शहर की समृद्धि... वास्तव में अतीत के दुखद बलिदानों पर बनी है।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "희생이라니?",
						"english": "Sacrifices?",
						"japanese": "犠牲だと？",
						"chinese": "牺牲？",
						"french": "Des sacrifices ?",
						"spanish": "¿Sacrificios?",
						"vietnamese": "Hy sinh sao?",
						"thai": "การเสียสละอะไร?",
						"hindi": "बलिदान?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구도 자세히 말해주지 않아요. 마치 모두가 잊기로 합의한 것처럼.",
						"english": "No one talks about it in detail. As if everyone agreed to forget.",
						"japanese": "誰も詳しく話してくれません。まるでみんなが忘れることに合意したかのように。",
						"chinese": "没有人详细说明。仿佛所有人都约定好要遗忘一样。",
						"french": "Personne n'en parle en détail. Comme si tout le monde avait convenu d'oublier.",
						"spanish": "Nadie lo cuenta con detalle. Como si todos hubieran acordado olvidarlo.",
						"vietnamese": "Không ai nói rõ chi tiết. Cứ như thể tất cả mọi người đã đồng ý quên đi vậy.",
						"thai": "ไม่มีใครเล่ารายละเอียดเลย ราวกับว่าทุกคนตกลงที่จะลืมมันไปแล้ว",
						"hindi": "कोई भी इसके बारे में विस्तार से नहीं बताता। जैसे कि सब ने भूलने पर सहमति जताई हो।"
					},
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction",
					"spot": [
						6,
						1
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잊는 게… 때로는 최선이지.",
						"english": "Forgetting… sometimes it's for the best.",
						"japanese": "忘れることが…時には最善だ。",
						"chinese": "遗忘…有时是最好的选择。",
						"french": "Oublier… c'est parfois le mieux.",
						"spanish": "Olvidar… a veces es lo mejor.",
						"vietnamese": "Quên đi… đôi khi là tốt nhất.",
						"thai": "การลืม… บางครั้งก็ดีที่สุด",
						"hindi": "भूलना… कभी-कभी सबसे अच्छा होता है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "echo"
				},
				{
					"content": {
						"korean": "아니야… 이건 아니야! 사라진 게 아니었어… 버려진 거야!",
						"english": "No… this isn't right! They weren't gone… they were abandoned!",
						"japanese": "違う…これは違う！消えたんじゃなかった…捨てられたんだ！",
						"chinese": "不…这不是真的！他们不是消失了…是被抛弃了！",
						"french": "Non… ce n'est pas ça ! Ils n'avaient pas disparu… ils ont été abandonnés !",
						"spanish": "¡No… esto no es! No desaparecieron… ¡fueron abandonados!",
						"vietnamese": "Không… không phải thế này! Họ không biến mất… họ bị bỏ rơi!",
						"thai": "ไม่…นี่ไม่ใช่! พวกเขาไม่ได้หายไป… พวกเขาถูกทอดทิ้ง!",
						"hindi": "नहीं… यह नहीं! वे गायब नहीं हुए थे… उन्हें त्याग दिया गया था!"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이제야 현실을 깨달았나.",
						"english": "So, you've finally realized the truth.",
						"japanese": "やっと現実を悟ったか。",
						"chinese": "现在才看清现实吗。",
						"french": "Tu as enfin compris la réalité, n'est-ce pas ?",
						"spanish": "¿Por fin has comprendido la realidad?",
						"vietnamese": "Cuối cùng cũng nhận ra sự thật rồi sao.",
						"thai": "ในที่สุดก็ตระหนักถึงความจริงแล้วสินะ",
						"hindi": "अब जाकर तुम्हें हकीकत का एहसास हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "echo",
					"emotion": "sad",
					"content": {
						"korean": "도시의 빛 뒤에는… 이런 그림자가 숨어있었다니. 내가 뭘 믿었던 거지?",
						"english": "Behind the city's light… such shadows were hidden. What was I believing in?",
						"japanese": "都市の光の裏には…こんな影が潜んでいたとは。何を信じていたんだ？",
						"chinese": "城市的灯光背后…竟然隐藏着这样的阴影。我到底相信了什么？",
						"french": "Derrière les lumières de la ville… de telles ombres se cachaient. Qu'est-ce que j'ai bien pu croire ?",
						"spanish": "Detrás de las luces de la ciudad… se escondían tales sombras. ¿En qué estaba creyendo?",
						"vietnamese": "Đằng sau ánh sáng thành phố… lại ẩn chứa những bóng tối này. Mình đã tin vào điều gì chứ?",
						"thai": "เบื้องหลังแสงสีของเมือง… ซ่อนเงาแบบนี้ไว้เหรอเนี่ย ฉันเชื่ออะไรไปกันแน่?",
						"hindi": "शहर की रोशनी के पीछे… ऐसी परछाइयाँ छिपी थीं। मैं किस पर विश्वास कर रहा था?"
					},
					"type": "speech"
				},
				{
					"spot": [
						4,
						1
					],
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뒤늦은 깨달음은… 절망만 안겨줄 뿐.",
						"english": "A belated realization… only brings despair.",
						"japanese": "遅すぎる気づきは…絶望しか与えない。",
						"chinese": "迟来的醒悟…只会带来绝望。",
						"french": "Une prise de conscience tardive… n'apporte que du désespoir.",
						"spanish": "Un entendimiento tardío… solo trae desesperación.",
						"vietnamese": "Sự nhận ra muộn màng… chỉ mang lại tuyệt vọng.",
						"thai": "การตระหนักรู้ที่สายเกินไป… มีแต่จะนำมาซึ่งความสิ้นหวัง",
						"hindi": "देर से मिली समझ… केवल निराशा ही देती है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "겨우… 날 이겼다고? 진짜 적은… 보이지 않는 곳에 있다.",
						"english": "You think you… defeated me? The real enemy… is unseen.",
						"japanese": "かろうじて…私に勝っただと？本当の敵は…見えないところにいる。",
						"chinese": "仅仅是…打败了我？真正的敌人…隐藏在看不见的地方。",
						"french": "Tu crois m'avoir… vaincu ? Le véritable ennemi… est invisible.",
						"spanish": "¿Apenas… me venciste? El verdadero enemigo… está donde no se ve.",
						"vietnamese": "Chỉ là… đánh bại được ta thôi ư? Kẻ thù thật sự… đang ở nơi vô hình.",
						"thai": "แค่… เอาชนะฉันได้เนี่ยนะ? ศัตรูที่แท้จริงน่ะ… อยู่ในที่ที่มองไม่เห็นต่างหาก",
						"hindi": "क्या… तुमने मुझे हरा दिया? असली दुश्मन… अदृश्य जगह पर है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "입 다물어!",
						"english": "Shut up!",
						"japanese": "黙れ！",
						"chinese": "闭嘴！",
						"french": "Tais-toi !",
						"spanish": "¡Cállate!",
						"vietnamese": "Im đi!",
						"thai": "หุบปาก!",
						"hindi": "चुप रहो!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "echo",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니야… 그래도, 희망은 아직…!",
						"english": "No... but still, there's hope...!",
						"japanese": "違う…それでも、希望はまだ…！",
						"chinese": "不…但是，希望还在…！",
						"french": "Non... mais quand même, l'espoir demeure... !",
						"spanish": "No... pero aún así, todavía hay esperanza... ¡",
						"vietnamese": "Không… nhưng vẫn còn hy vọng…!",
						"thai": "ไม่สิ...ถึงอย่างนั้น ความหวังก็ยังมี...!",
						"hindi": "नहीं... फिर भी, उम्मीद अभी भी है...!"
					},
					"speaker": "echo",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "찬란한 도시의 이면에는, 더 깊은 그림자가 숨 쉬고 있었다.",
						"english": "Beneath the radiant city, a deeper shadow breathed.",
						"japanese": "輝かしい都市の裏には、より深い影が息づいていた。",
						"chinese": "光辉城市的另一面，更深的阴影在滋生。",
						"french": "Sous la ville resplendissante, une ombre plus profonde respirait.",
						"spanish": "Detrás de la ciudad resplandeciente, una sombra más profunda respiraba.",
						"vietnamese": "Đằng sau thành phố rực rỡ, một bóng tối sâu thẳm hơn đang ẩn mình.",
						"thai": "เบื้องหลังเมืองอันรุ่งโรจน์ มีเงามืดที่ลึกซึ้งกว่าแอบซ่อนอยู่",
						"hindi": "शानदार शहर के पीछे, एक गहरी छाया सांस ले रही थी।"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들은 이제, 그 그림자를 쫓는다.",
						"english": "They now chase that shadow.",
						"japanese": "彼らは今、その影を追う。",
						"chinese": "他们现在追逐着那个阴影。",
						"french": "Ils pourchassent maintenant cette ombre.",
						"spanish": "Ahora persiguen esa sombra.",
						"vietnamese": "Giờ đây, họ đang truy đuổi bóng tối đó.",
						"thai": "ตอนนี้พวกเขาไล่ล่าเงาตนนั้น",
						"hindi": "अब वे उस छाया का पीछा करते हैं।"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "낡은 주거지는 영원히, 도시의 어두운 비밀을 품었다.",
						"english": "The old dwellings forever held the city's dark secrets.",
						"japanese": "古い住居は永遠に、都市の暗い秘密を抱えていた。",
						"chinese": "破旧的住宅永远地，隐藏着城市的黑暗秘密。",
						"french": "Les vieilles habitations ont gardé à jamais les sombres secrets de la ville.",
						"spanish": "Las viejas viviendas guardaron para siempre los oscuros secretos de la ciudad.",
						"vietnamese": "Những khu dân cư cũ mãi mãi chứa đựng bí mật đen tối của thành phố.",
						"thai": "ที่อยู่อาศัยเก่าแก่ยังคงเก็บงำความลับดำมืดของเมืองไว้ตลอดกาล",
						"hindi": "पुरानी बस्तियों ने हमेशा के लिए शहर के गहरे रहस्यों को छिपाए रखा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "가련한 자들. 아직도 진실을 모르는가.",
						"english": "Pitiful souls. Do you still not know the truth?",
						"japanese": "哀れな者たち。まだ真実を知らぬのか。",
						"chinese": "可怜的家伙们。难道你们还不懂真相吗？",
						"french": "Âmes pitoyables. Ne connaissez-vous toujours pas la vérité ?",
						"spanish": "Almas patéticas. ¿Todavía no sabéis la verdad?",
						"vietnamese": "Những kẻ đáng thương. Vẫn chưa biết sự thật sao?",
						"thai": "พวกน่าสงสาร. ยังไม่รู้ความจริงอีกหรือ",
						"hindi": "दयनीय आत्माएं। क्या तुम अभी भी सच नहीं जानते?"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로… 끝낼 수 없어!",
						"english": "I can't end it like this...!",
						"japanese": "このままでは…終わらせられない！",
						"chinese": "就这样…不能结束！",
						"french": "Je ne peux pas finir comme ça !",
						"spanish": "¡No puedo terminar así!",
						"vietnamese": "Không thể… kết thúc như thế này được!",
						"thai": "จะจบแบบนี้...ไม่ได้!",
						"hindi": "इस तरह... मैं इसे खत्म नहीं कर सकता!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						1
					],
					"type": "direction",
					"action": "enter",
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "이 도시의 번영? 모두 너희 같은 어리석은 자들의 희생 위에 세워진 것.",
						"english": "This city's prosperity? It's all built upon the sacrifices of fools like you.",
						"japanese": "この都市の繁栄だと？すべてお前たちのような愚か者たちの犠牲の上に築かれたものだ。",
						"chinese": "这座城市的繁荣？都是建立在你们这些愚蠢之人的牺牲之上。",
						"french": "La prospérité de cette ville ? Tout est bâti sur le sacrifice de stupides comme vous.",
						"spanish": "¿La prosperidad de esta ciudad? Todo está construido sobre el sacrificio de tontos como vosotros.",
						"vietnamese": "Sự thịnh vượng của thành phố này ư? Tất cả đều được xây dựng trên sự hy sinh của những kẻ ngốc như các ngươi.",
						"thai": "ความรุ่งเรืองของเมืองนี้เหรอ? ทั้งหมดสร้างขึ้นบนการเสียสละของคนโง่เง่าอย่างพวกแกนั่นแหละ",
						"hindi": "इस शहर की समृद्धि? यह सब तुम जैसे मूर्खों के बलिदान पर बनी है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "Qu'est-ce que tu racontes ?!",
						"spanish": "¡¿Qué estás diciendo?!",
						"vietnamese": "Ngươi nói cái gì vậy!",
						"thai": "พูดเรื่องอะไรน่ะ!",
						"hindi": "यह क्या बकवास है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "echo",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "그럼… 내 이웃들도… 희생된 거야?",
						"english": "So… my neighbors too… were they sacrificed?",
						"japanese": "じゃあ…私の隣人たちも…犠牲になったのか？",
						"chinese": "那么…我的邻居们…也被牺牲了吗？",
						"french": "Alors… mes voisins aussi… ont-ils été sacrifiés ?",
						"spanish": "Entonces… ¿mis vecinos también… fueron sacrificados?",
						"vietnamese": "Vậy là… hàng xóm của tôi… cũng bị hy sinh sao?",
						"thai": "ถ้าอย่างนั้น…เพื่อนบ้านของฉัน…ก็ถูกบูชายัญด้วยเหรอ?",
						"hindi": "तो… मेरे पड़ोसी भी… क्या उन्हें भी बलिदान कर दिया गया?"
					},
					"type": "speech",
					"speaker": "echo",
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "쓸모없는 것은… 버려지는 법.",
						"english": "What's useless… is discarded.",
						"japanese": "無用なものは…捨てられるものだ。",
						"chinese": "无用的东西…终将被抛弃。",
						"french": "Ce qui est inutile… est jeté.",
						"spanish": "Lo inútil… se desecha.",
						"vietnamese": "Thứ vô dụng… ắt sẽ bị vứt bỏ.",
						"thai": "สิ่งที่ไร้ประโยชน์… ย่อมถูกทอดทิ้งไป",
						"hindi": "जो बेकार है… उसे त्याग दिया जाता है।"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"화려한 도시의 뒷골목.",
			"번영의 이면에 감춰진 낡은 주거지.",
			"에코는 사라진 이웃을 찾고 있었다.",
			"아직은 믿었다. 이 도시의 희망을."
		],
		"english": [
			"Alleyways of a glamorous city.",
			"Dilapidated housing, concealed by prosperity.",
			"Echo searched for her missing neighbors.",
			"She still believed. In this city's hope."
		],
		"japanese": [
			"華やかな都市の裏路地。",
			"繁栄の裏に隠された古い住宅街。",
			"エコーは消えた隣人を探していた。",
			"まだ信じていた。この都市の希望を。"
		],
		"chinese": [
			"华丽都市的后巷。",
			"繁荣背后隐藏的旧住宅区。",
			"艾可正在寻找失踪的邻居。",
			"她仍然相信。这座城市的希望。"
		],
		"french": [
			"Les ruelles d'une ville splendide.",
			"Un vieux quartier résidentiel caché derrière la prospérité.",
			"Echo cherchait ses voisins disparus.",
			"Elle croyait encore. À l'espoir de cette ville."
		],
		"spanish": [
			"Los callejones de una ciudad deslumbrante.",
			"Un barrio residencial antiguo oculto tras la prosperidad.",
			"Echo buscaba a sus vecinos desaparecidos.",
			"Todavía creía. En la esperanza de esta ciudad."
		],
		"vietnamese": [
			"Hẻm sau của một thành phố tráng lệ.",
			"Khu dân cư cũ ẩn sau sự phồn vinh.",
			"Echo đang tìm kiếm những người hàng xóm đã mất tích.",
			"Cô ấy vẫn tin. Vào hy vọng của thành phố này."
		],
		"thai": [
			"ตรอกซอยในเมืองอันหรูหรา",
			"ชุมชนเก่าแก่ซ่อนอยู่เบื้องหลังความเจริญรุ่งเรือง",
			"เอคโค่กำลังตามหาเพื่อนบ้านที่หายไป",
			"เธอยังคงเชื่อมั่นในความหวังของเมืองนี้"
		],
		"hindi": [
			"शानदार शहर की गलियाँ।",
			"समृद्धि के पीछे छिपा एक पुराना आवासीय क्षेत्र।",
			"इको अपने लापता पड़ोसियों को ढूंढ रही थी।",
			"वह अब भी मानती थी। इस शहर की उम्मीद पर।"
		]
	}
} as const;
