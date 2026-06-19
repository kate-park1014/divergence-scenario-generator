export const scenario_modern_elias_7_01 = {
	"scenario_id": "modern_elias_7_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
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
					"content": {
						"korean": "밤이 깊은 도시. 편의점의 불빛만이 희미하게 새어 나왔다.",
						"english": "A city in deep night. Only the faint light from the convenience store seeped out.",
						"japanese": "夜が更けた街。コンビニの明かりだけが、かすかに漏れ出ていた。",
						"chinese": "夜深之城。只有便利店的灯光微弱地透出。",
						"french": "Une ville dans la nuit profonde. Seule la faible lumière du dépanneur filtrait.",
						"spanish": "Una ciudad en la noche profunda. Solo la tenue luz de la tienda de conveniencia se filtraba.",
						"vietnamese": "Thành phố về đêm. Chỉ có ánh đèn lờ mờ từ cửa hàng tiện lợi hắt ra.",
						"thai": "เมืองยามค่ำคืนอันเงียบสงัด. มีเพียงแสงไฟสลัวจากร้านสะดวกซื้อที่เล็ดลอดออกมา.",
						"hindi": "गहरी रात का शहर। सुविधा स्टोर से केवल हल्की रोशनी छनकर आ रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어우, 늦었다. 뭐 좀 사 갈까?",
						"english": "Ugh, it's late. Should I grab something?",
						"japanese": "ああ、遅くなった。何か買って行こうか？",
						"chinese": "哎呀，晚了。要不要买点什么？",
						"french": "Ouf, il est tard. Je devrais prendre quelque chose ?",
						"spanish": "Uf, es tarde. ¿Debería comprar algo?",
						"vietnamese": "Ôi, muộn rồi. Mua gì đó về không?",
						"thai": "โอ้, ดึกแล้ว. ซื้ออะไรไปหน่อยดีไหม?",
						"hindi": "उफ़, देर हो गई। कुछ खरीद लूँ क्या?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저기… 저 사람, 편의점 알바인가?",
						"english": "Um... is that person the convenience store part-timer?",
						"japanese": "あの…あの人、コンビニのバイトかな？",
						"chinese": "那个…那个人，是便利店的兼职吗？",
						"french": "Euh... cette personne est l'employé à temps partiel du dépanneur ?",
						"spanish": "Uhm... ¿esa persona es el dependiente de la tienda?",
						"vietnamese": "Kia... người kia là nhân viên bán thời gian của cửa hàng tiện lợi à?",
						"thai": "เอ่อ... คนนั้น, เป็นพนักงานร้านสะดวกซื้อเหรอ?",
						"hindi": "उम्म... वह व्यक्ति सुविधा स्टोर का पार्ट-टाइमर है क्या?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "카이가 계산을 하는 엘리아스를 보았다. 그의 눈빛은 공허했다.",
						"english": "Kai saw Elias at the checkout. His eyes were empty.",
						"japanese": "カイは会計をするエリアスを見た。彼の眼差しは虚ろだった。",
						"chinese": "凯看到了正在结账的埃利亚斯。他的眼神空洞。",
						"french": "Kai vit Elias à la caisse. Ses yeux étaient vides.",
						"spanish": "Kai vio a Elias en la caja. Sus ojos estaban vacíos.",
						"vietnamese": "Kai nhìn Elias đang tính tiền. Ánh mắt anh ta trống rỗng.",
						"thai": "ไคเห็นเอเลียสกําลังคิดเงิน. แววตาของเขาว่างเปล่า.",
						"hindi": "काई ने एलियास को बिलिंग करते देखा। उसकी आँखें खाली थीं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "kai",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "저 사람… 좀 힘들어 보이네.",
						"english": "That person... seems to be having a hard time.",
						"japanese": "あの人…ちょっと大変そうだね。",
						"chinese": "那个人…看起来有点辛苦。",
						"french": "Cette personne... semble avoir des difficultés.",
						"spanish": "Esa persona... parece estar pasando por un mal momento.",
						"vietnamese": "Người đó... trông có vẻ đang gặp khó khăn.",
						"thai": "คนนั้น... ดูเหมือนจะลำบากนะ.",
						"hindi": "वह व्यक्ति... थोड़ा परेशान लग रहा है।"
					}
				},
				{
					"content": {
						"korean": "그러게요. 근데 묘하게… 쇠 비린내 같은 게 나지 않아요?",
						"english": "I know, right? But strangely... don't you smell something metallic, like blood?",
						"japanese": "ですね。でも、なんか…鉄臭いような血の匂いがしませんか？",
						"chinese": "是啊。但是总觉得…有股血腥味？",
						"french": "N'est-ce pas ? Mais étrangement... ne sentez-vous pas une odeur métallique, comme du sang ?",
						"spanish": "Sí, ¿verdad? Pero extrañamente... ¿no huele a metal, como a sangre?",
						"vietnamese": "Đúng vậy. Nhưng lạ thật... không phải có mùi tanh như sắt sao?",
						"thai": "นั่นสิคะ แต่แปลกจัง... ไม่ได้กลิ่นคาวเหล็กเหมือนเลือดเลยเหรอคะ?",
						"hindi": "हाँ, है ना? लेकिन अजीब बात है... क्या आपको धातु जैसी, खून की गंध नहीं आ रही?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러고 보니… 기분 탓인가?",
						"english": "Now that you mention it... Is it just my imagination?",
						"japanese": "そう言えば…気のせいかな？",
						"chinese": "这么一说…是我的错觉吗？",
						"french": "Maintenant que vous le dites... Est-ce juste mon imagination ?",
						"spanish": "Ahora que lo dices... ¿será mi imaginación?",
						"vietnamese": "Mà nói mới nhớ... Chắc là do mình nghĩ vậy thôi?",
						"thai": "พอนายพูดถึง... หรือว่าฉันคิดไปเองนะ?",
						"hindi": "अब जब तुम कहते हो... क्या यह मेरा वहम है?"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "저기… 괜찮으세요? 너무 피곤해 보여서.",
						"english": "Excuse me... Are you okay? You look incredibly tired.",
						"japanese": "あの…大丈夫ですか？すごく疲れてるように見えますけど。",
						"chinese": "请问…你还好吗？看起来很累的样子。",
						"french": "Excusez-moi... Ça va ? Vous avez l'air terriblement fatigué.",
						"spanish": "Disculpe... ¿está bien? Parece muy cansado.",
						"vietnamese": "Xin lỗi... Bạn có sao không? Trông bạn có vẻ rất mệt mỏi.",
						"thai": "เอ่อ... คุณโอเคไหมครับ? ดูเหนื่อยมากเลย",
						"hindi": "माफ़ करना... क्या तुम ठीक हो? तुम बहुत थके हुए लग रहे हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말 걸어봐도 대답이 없네…",
						"english": "No answer even when I tried to speak to them...",
						"japanese": "話しかけても返事がないな…",
						"chinese": "搭话了也没有回应…",
						"french": "Pas de réponse même quand j'ai essayé de leur parler...",
						"spanish": "No hay respuesta ni cuando intenté hablarles...",
						"vietnamese": "Dù có bắt chuyện cũng không thấy trả lời...",
						"thai": "ลองเรียกดูแล้ว แต่ไม่มีเสียงตอบรับเลย...",
						"hindi": "बात करने की कोशिश की, पर कोई जवाब नहीं मिला..."
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그냥 지나칠 수가 없네요. 뭔가 힘든 일이 있으신 것 같은데…",
						"english": "I can't just pass by. It seems like something difficult has happened to you...",
						"japanese": "ただ通り過ぎるわけにはいきません。何か大変なことがあったようですが…",
						"chinese": "不能就这样走过去。你好像遇到了什么麻烦…",
						"french": "Je ne peux pas simplement passer mon chemin. On dirait que quelque chose de difficile vous est arrivé...",
						"spanish": "No puedo simplemente ignorarlo. Parece que le ha pasado algo difícil...",
						"vietnamese": "Tôi không thể bỏ qua được. Có vẻ bạn đang gặp phải chuyện gì đó khó khăn...",
						"thai": "ฉันผ่านไปเฉยๆ ไม่ได้หรอกนะ ดูเหมือนคุณกำลังมีเรื่องลำบาก...",
						"hindi": "मैं ऐसे ही नहीं जा सकता। लगता है तुम्हें कुछ मुश्किल हुई है..."
					},
					"speaker": "kai"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "으음… 뭔가 불안한 기운이 돌아요.",
						"english": "Hmm... I feel an unsettling aura around.",
						"japanese": "うーん…なんだか不穏な気配がする。",
						"chinese": "嗯…感觉有股不安的气息。",
						"french": "Hmm... Je ressens une aura inquiétante autour.",
						"spanish": "Mmm... Siento una vibra inquietante.",
						"vietnamese": "Ừm... Tôi cảm thấy có một luồng khí bất an.",
						"thai": "อืม... รู้สึกถึงบรรยากาศที่ไม่สบายใจ",
						"hindi": "हम्म... मुझे एक बेचैन कर देने वाली आभा महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 어둠은 편의점 안까지 스며드는 듯했다.",
						"english": "The city's darkness seemed to seep even into the convenience store.",
						"japanese": "街の闇は、コンビニの中まで染み込んでいるようだった。",
						"chinese": "城市的黑暗似乎也渗透到了便利店里。",
						"french": "L'obscurité de la ville semblait s'infiltrer même à l'intérieur du dépanneur.",
						"spanish": "La oscuridad de la ciudad parecía filtrarse incluso dentro de la tienda de conveniencia.",
						"vietnamese": "Bóng tối của thành phố dường như len lỏi vào cả bên trong cửa hàng tiện lợi.",
						"thai": "ความมืดมิดของเมืองดูเหมือนจะแทรกซึมเข้ามาถึงในร้านสะดวกซื้อ",
						"hindi": "शहर का अँधेरा सुविधा स्टोर के अंदर तक समा गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 밖에 그림자… 뭐지?",
						"english": "That shadow outside... What is it?",
						"japanese": "あの外の影…何だろう？",
						"chinese": "外面那个影子…是什么？",
						"french": "Cette ombre dehors... Qu'est-ce que c'est ?",
						"spanish": "Esa sombra de fuera... ¿qué es?",
						"vietnamese": "Bóng đó ngoài kia... là gì vậy?",
						"thai": "เงาข้างนอกนั่น... คืออะไรนะ?",
						"hindi": "वह बाहर की परछाई... क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "당신… 혹시 밤에 무슨 일 있으셨어요?",
						"english": "You... Did something happen to you last night?",
						"japanese": "あなた…もしかして昨夜、何かあったんですか？",
						"chinese": "你…昨晚是不是发生了什么事？",
						"french": "Vous... Il vous est arrivé quelque chose la nuit dernière ?",
						"spanish": "Usted... ¿le pasó algo anoche?",
						"vietnamese": "Bạn... có phải đêm qua đã xảy ra chuyện gì không?",
						"thai": "คุณ... เมื่อคืนนี้เกิดอะไรขึ้นกับคุณหรือเปล่า?",
						"hindi": "तुम... क्या तुम्हारे साथ कल रात कुछ हुआ था?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어쩐지… 이 편의점, 분위기가 으스스해.",
						"english": "No wonder... This convenience store has a creepy atmosphere.",
						"japanese": "どうりで…このコンビニ、雰囲気が不気味だ。",
						"chinese": "难怪…这家便利店的气氛真诡异。",
						"french": "Étrange... Ce dépanneur a une ambiance lugubre.",
						"spanish": "Por eso... Esta tienda de conveniencia tiene una atmósfera espeluznante.",
						"vietnamese": "Thảo nào... Cửa hàng tiện lợi này có một bầu không khí rợn người.",
						"thai": "ว่าแล้ว... ร้านสะดวกซื้อนี้บรรยากาศน่าขนลุกจังเลย",
						"hindi": "इसलिए... इस सुविधा स्टोर का माहौल डरावना है।"
					},
					"speaker": "character_2"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "뭔가… 숨기고 있는 것 같아요.",
						"english": "You're... hiding something.",
						"japanese": "何か… 隠してるみたい。",
						"chinese": "你好像… 藏着什么。",
						"french": "Vous... cachez quelque chose.",
						"spanish": "Parece que... escondes algo.",
						"vietnamese": "Anh... đang giấu gì đó.",
						"thai": "คุณ...กำลังซ่อนอะไรบางอย่างอยู่ใช่ไหม",
						"hindi": "आप कुछ... छिपा रहे हैं।"
					},
					"speaker": "kai"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "편의점 안의 공기는 점점 더 무거워졌다.",
						"english": "The air in the convenience store grew heavy.",
						"japanese": "コンビニの空気は、どんどん重くなった。",
						"chinese": "便利店里的空气越来越沉重。",
						"french": "L'air dans le dépanneur devint de plus en plus lourd.",
						"spanish": "El aire en la tienda de conveniencia se hizo cada vez más pesado.",
						"vietnamese": "Không khí trong cửa hàng tiện lợi ngày càng nặng nề.",
						"thai": "อากาศในร้านสะดวกซื้อหนักอึ้งขึ้นเรื่อยๆ",
						"hindi": "सुविधा स्टोर के अंदर की हवा और भी भारी हो गई।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "뭔가… 이상해.",
						"english": "Something's... off.",
						"japanese": "何か… おかしい。",
						"chinese": "有点… 不对劲。",
						"french": "Quelque chose... cloche.",
						"spanish": "Algo... raro.",
						"vietnamese": "Có gì đó... lạ lắm.",
						"thai": "มีอะไรบางอย่าง...แปลกไป",
						"hindi": "कुछ... अजीब है।"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "당신에게서 나는 이 느낌… 뭘까요?",
						"english": "This feeling from you... what is it?",
						"japanese": "あなたから感じるこの気配… 何かしら？",
						"chinese": "你给我的这种感觉… 是什么呢？",
						"french": "Ce sentiment qui émane de vous... qu'est-ce que c'est ?",
						"spanish": "Esta sensación que emana de ti... ¿qué es?",
						"vietnamese": "Cái cảm giác này từ anh... là gì vậy?",
						"thai": "ความรู้สึกนี้ที่มาจากคุณ...มันคืออะไรกัน?",
						"hindi": "आपसे आ रही यह भावना... क्या है?"
					},
					"speaker": "kai",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "카이, 너무 다가가지 마. 뭔가 불길해.",
						"english": "Kai, don't get too close. Something's ominous.",
						"japanese": "カイ、あまり近づかないで。何か不吉よ。",
						"chinese": "凯，别靠太近。有些不祥。",
						"french": "Kai, ne t'approche pas trop. Quelque chose de sinistre.",
						"spanish": "Kai, no te acerques demasiado. Algo es siniestro.",
						"vietnamese": "Kai, đừng lại gần quá. Có gì đó không lành.",
						"thai": "ไค อย่าเข้าใกล้เกินไปนะ มีบางอย่างไม่ดีเลย",
						"hindi": "काई, ज़्यादा करीब मत जाओ। कुछ अमंगल है।"
					},
					"speaker": "character_3",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하지만…",
						"english": "But...",
						"japanese": "しかし…",
						"chinese": "但是…",
						"french": "Mais…",
						"spanish": "Pero…",
						"vietnamese": "Nhưng...",
						"thai": "แต่...",
						"hindi": "लेकिन…"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "편의점 깊은 곳, 어둠이 실체를 드러냈다.",
						"english": "Deep within the convenience store, darkness revealed its true form.",
						"japanese": "コンビニの奥深く、闇がその実体を現した。",
						"chinese": "便利店深处，黑暗显露了真身。",
						"french": "Au plus profond du dépanneur, les ténèbres révélèrent leur véritable forme.",
						"spanish": "En lo profundo de la tienda de conveniencia, la oscuridad reveló su verdadera forma.",
						"vietnamese": "Sâu trong cửa hàng tiện lợi, bóng tối đã hiện nguyên hình.",
						"thai": "ลึกเข้าไปในร้านสะดวกซื้อ ความมืดได้เผยตัวตนที่แท้จริง",
						"hindi": "सुविधा स्टोर की गहराई में, अंधेरे ने अपनी असलियत उजागर की।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불청객들이… 또 왔군.",
						"english": "Uninvited guests... again.",
						"japanese": "招かれざる客が… また来たか。",
						"chinese": "不速之客… 又来了。",
						"french": "Des invités indésirables... encore.",
						"spanish": "Invitados no deseados... otra vez.",
						"vietnamese": "Những kẻ không mời... lại đến rồi.",
						"thai": "แขกไม่ได้รับเชิญ...มาอีกแล้วรึ",
						"hindi": "अनचाहे मेहमान… फिर आ गए।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "누구냐, 넌!",
						"english": "Who are you?!",
						"japanese": "お前は誰だ！",
						"chinese": "你是什么人！",
						"french": "Qui es-tu !",
						"spanish": "¡¿Quién eres?!",
						"vietnamese": "Ngươi là ai!",
						"thai": "แกเป็นใคร!",
						"hindi": "कौन हो तुम!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희가 알 필요는 없어. 그저… 방해할 뿐.",
						"english": "You don't need to know. You're merely... in the way.",
						"japanese": "お前たちが知る必要はない。ただ…邪魔をするだけだ。",
						"chinese": "你们没必要知道。只是… 碍事而已。",
						"french": "Vous n'avez pas besoin de savoir. Vous ne faites que... gêner.",
						"spanish": "No necesitáis saber. Simplemente... estorbáis.",
						"vietnamese": "Ngươi không cần biết. Ngươi chỉ đang... cản đường thôi.",
						"thai": "พวกแกไม่จำเป็นต้องรู้ แค่...เกะกะเท่านั้นเอง",
						"hindi": "तुम्हें जानने की ज़रूरत नहीं। तुम बस... बाधा डाल रहे हो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "엘리아스는 어디 있어!",
						"english": "Where is Elias!",
						"japanese": "「エリアスはどこだ！」",
						"chinese": "“埃利亚斯在哪儿！”",
						"french": "Où est Elias !",
						"spanish": "¡¿Dónde está Elias?!",
						"vietnamese": "Elias đâu rồi!",
						"thai": "เอเลียสอยู่ไหน!",
						"hindi": "एलियास कहाँ है!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그림자가 탐험대를 집어삼켰다.",
						"english": "The shadow engulfed the expedition.",
						"japanese": "「影が探検隊を飲み込んだ。」",
						"chinese": "“影子吞噬了探险队。”",
						"french": "L'ombre a englouti l'expédition.",
						"spanish": "La sombra engulló a la expedición.",
						"vietnamese": "Bóng tối nuốt chửng đoàn thám hiểm.",
						"thai": "เงามืดกลืนกินคณะสำรวจ",
						"hindi": "छाया ने अभियान दल को निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고작 이 정도인가?",
						"english": "Is this all there is?",
						"japanese": "「たったこれだけか？」",
						"chinese": "“就这点程度吗？”",
						"french": "C'est tout ce qu'il y a ?",
						"spanish": "¿Solo esto?",
						"vietnamese": "Chỉ có thế này thôi sao?",
						"thai": "แค่นี้เองเหรอ?",
						"hindi": "बस इतना ही?"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…다시, 돌아올 거야.",
						"english": "...I'll be back.",
						"japanese": "「…また、戻ってくるだろう。」",
						"chinese": "“…我会再回来的。”",
						"french": "...Je reviendrai.",
						"spanish": "...Volveré.",
						"vietnamese": "...Tôi sẽ trở lại.",
						"thai": "...ฉันจะกลับมา",
						"hindi": "...मैं वापस आऊंगा।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "kai"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "엘리아스… 대체…",
						"english": "Elias... What...",
						"japanese": "「エリアス…一体…」",
						"chinese": "“埃利亚斯…到底…”",
						"french": "Elias... Qu'est-ce que...",
						"spanish": "Elias... ¿Qué...?",
						"vietnamese": "Elias... Rốt cuộc...",
						"thai": "เอเลียส... อะไรกันแน่...",
						"hindi": "एलियास... क्या..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 것들.",
						"english": "Fools.",
						"japanese": "愚か者たちよ。",
						"chinese": "蠢货们。",
						"french": "Créatures stupides.",
						"spanish": "Necios.",
						"vietnamese": "Lũ ngốc.",
						"thai": "พวกโง่เง่า.",
						"hindi": "मूर्खों।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 사라졌다. 하지만 진실은 더욱 깊은 곳에 있었다.",
						"english": "The massive shadow vanished. But the truth lay deeper.",
						"japanese": "「巨大な影は消えた。しかし、真実はさらに深いところに隠されていた。」",
						"chinese": "“巨大的影子消失了。但真相隐藏得更深。”",
						"french": "L'ombre massive a disparu. Mais la vérité était plus profonde.",
						"spanish": "La sombra masiva desapareció. Pero la verdad yacía más profunda.",
						"vietnamese": "Bóng tối khổng lồ biến mất. Nhưng sự thật nằm sâu hơn.",
						"thai": "เงาขนาดใหญ่หายไปแล้ว แต่ความจริงซ่อนอยู่ลึกกว่านั้น",
						"hindi": "विशाल छाया गायब हो गई। लेकिन सच्चाई और गहरी थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "크… 이건… 시작일 뿐…",
						"english": "Ugh... This is... just the beginning...",
						"japanese": "「くっ…これは…始まりにすぎない…」",
						"chinese": "“呃…这…只是个开始…”",
						"french": "Ugh... Ce n'est... que le début...",
						"spanish": "Ugh... Esto es... solo el principio...",
						"vietnamese": "Khụ... Đây... chỉ là khởi đầu...",
						"thai": "อึก... นี่มัน... แค่จุดเริ่มต้น...",
						"hindi": "उफ़... यह तो... बस शुरुआत है..."
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "시작이라고?",
						"english": "The beginning?",
						"japanese": "「始まりだと？」",
						"chinese": "“开始？”",
						"french": "Le début ?",
						"spanish": "¿El principio?",
						"vietnamese": "Khởi đầu sao?",
						"thai": "จุดเริ่มต้นเหรอ?",
						"hindi": "शुरुआत?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "kai",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "엘리아스… 대체 무슨 일이 있었던 거죠?",
						"english": "Elias... What in the world happened?",
						"japanese": "「エリアス…一体何があったんですか？」",
						"chinese": "“埃利亚斯…到底发生了什么事？”",
						"french": "Elias... Qu'est-ce qui s'est passé, bon sang ?",
						"spanish": "Elias... ¿Qué diablos pasó?",
						"vietnamese": "Elias... Chuyện quái gì đã xảy ra vậy?",
						"thai": "เอเลียส... เกิดอะไรขึ้นกันแน่?",
						"hindi": "एलियास... आखिर हुआ क्या था?"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "알 수 없는 불안감은 도시의 새벽 공기처럼 짙어졌다. 어둠은 아직 끝나지 않았다.",
						"english": "An unknown unease thickened like the city's dawn air. The darkness was not yet over.",
						"japanese": "「未知の不安が、都市の夜明けの空気のように濃くなった。闇はまだ終わっていなかった。」",
						"chinese": "“未知的 불안像城市黎明的空气一样浓重。黑暗尚未结束。”",
						"french": "Une anxiété inconnue s'épaississait comme l'air de l'aube sur la ville. L'obscurité n'était pas encore terminée.",
						"spanish": "Una inquietud desconocida se espesó como el aire del amanecer en la ciudad. La oscuridad aún no había terminado.",
						"vietnamese": "Một sự bất an không rõ bao trùm, đặc quánh như không khí bình minh của thành phố. Bóng tối vẫn chưa kết thúc.",
						"thai": "ความกังวลที่ไม่รู้ที่มาปกคลุมหนาแน่นราวกับอากาศยามรุ่งอรุณของเมือง ความมืดมิดยังไม่สิ้นสุดลง",
						"hindi": "एक अज्ञात बेचैनी शहर की सुबह की हवा की तरह घनी हो गई। अंधेरा अभी खत्म नहीं हुआ था।"
					},
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"밤이 깊은 도시, 오래된 편의점.",
			"그림자가 드리운 곳, 잊혀진 비밀이 속삭인다.",
			"무기력한 눈빛, 스쳐 가는 쇠 비린내.",
			"알 수 없는 불안감, 그 고독의 시작.",
			"이 밤, 모든 것이 시작된다."
		],
		"english": [
			"A city in deep night, an old convenience store.",
			"Where shadows fall, forgotten secrets whisper.",
			"Listless eyes, a fleeting scent of iron.",
			"An unknown unease, the start of that solitude.",
			"This night, everything begins."
		],
		"japanese": [
			"夜が更けた街、古いコンビニ。",
			"影が差す場所、忘れられた秘密が囁く。",
			"無気力な眼差し、かすめる鉄の匂い。",
			"未知の不安感、その孤独の始まり。",
			"この夜、すべてが始まる。"
		],
		"chinese": [
			"夜深之城，老旧便利店。",
			"阴影笼罩之处，遗忘的秘密低语。",
			"无力的眼神，掠过的铁腥味。",
			"未知的焦虑，那孤独的开端。",
			"今夜，一切都将开始。"
		],
		"french": [
			"Une ville dans la nuit profonde, un vieux dépanneur.",
			"Là où les ombres tombent, des secrets oubliés murmurent.",
			"Des yeux apathiques, une fugace odeur de fer.",
			"Une anxiété inconnue, le début de cette solitude.",
			"Cette nuit, tout commence."
		],
		"spanish": [
			"Una ciudad en la noche profunda, una vieja tienda de conveniencia.",
			"Donde las sombras caen, secretos olvidados susurran.",
			"Ojos apáticos, un fugaz olor a hierro.",
			"Una inquietud desconocida, el inicio de esa soledad.",
			"Esta noche, todo comienza."
		],
		"vietnamese": [
			"Thành phố về đêm, một cửa hàng tiện lợi cũ kỹ.",
			"Nơi bóng tối bao trùm, những bí mật bị lãng quên thì thầm.",
			"Ánh mắt vô lực, thoáng qua mùi tanh của sắt.",
			"Nỗi bất an không tên, khởi đầu của sự cô độc đó.",
			"Đêm nay, mọi thứ bắt đầu."
		],
		"thai": [
			"เมืองยามค่ำคืนอันเงียบสงัด, ร้านสะดวกซื้อเก่าแก่.",
			"ในที่ที่เงาทอดทิ้ง, ความลับที่ถูกลืมเลือนกระซิบกระซาบ.",
			"แววตาไร้เรี่ยวแรง, กลิ่นคาวเหล็กที่พัดผ่าน.",
			"ความไม่สบายใจที่ไม่รู้จัก, จุดเริ่มต้นของความโดดเดี่ยว.",
			"คืนนี้, ทุกสิ่งเริ่มต้นขึ้น."
		],
		"hindi": [
			"गहरी रात का शहर, पुरानी सुविधा स्टोर।",
			"जहाँ छायाएँ पड़ती हैं, भूले हुए रहस्य फुसफुसाते हैं।",
			"बेजान आँखें, लोहे की क्षणिक गंध।",
			"एक अज्ञात बेचैनी, उस एकांत की शुरुआत।",
			"आज रात, सब कुछ शुरू होता है।"
		]
	}
} as const;
