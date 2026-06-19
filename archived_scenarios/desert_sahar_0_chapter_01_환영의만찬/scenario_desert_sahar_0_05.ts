export const scenario_desert_sahar_0_05 = {
	"scenario_id": "desert_sahar_0_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_051"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사막 한가운데, 신기루처럼 나타난 호화로운 연회장. 굶주림에 지친 탐험대가 발을 들였다.",
						"english": "In the middle of the desert, a luxurious banquet hall appeared like a mirage. The famished expedition stepped inside.",
						"japanese": "砂漠の真ん中に、蜃気楼のように現れた豪華な宴会場。飢えに疲れた探検隊が足を踏み入れた。",
						"chinese": "沙漠中央，一座豪华宴会厅如海市蜃楼般出现。饥肠辘辘的探险队走了进去。",
						"french": "Au milieu du désert, une somptueuse salle de banquet apparut comme un mirage. L'expédition épuisée par la faim y pénétra.",
						"spanish": "En medio del desierto, un lujoso salón de banquetes apareció como un espejismo. La expedición, agotada por el hambre, entró.",
						"vietnamese": "Giữa sa mạc, một sảnh tiệc xa hoa hiện ra như ảo ảnh. Đoàn thám hiểm kiệt sức vì đói đã bước vào.",
						"thai": "กลางทะเลทราย งานเลี้ยงสุดหรูปรากฏขึ้นดุจภาพลวงตา คณะสำรวจที่อ่อนล้าจากความหิวได้ก้าวเข้าไป.",
						"hindi": "रेگिस्तान के बीचों-बीच, एक शानदार भोज कक्ष एक मृगतृष्णा की तरह प्रकट हुआ। भूख से थकी हुई अभियान दल ने कदम रखा।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "amir"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "세상에... 이게 다 꿈이 아니었어! 정말 배가 고팠는데!",
						"english": "Oh my... This wasn't all a dream! I was so hungry!",
						"japanese": "なんてことだ... これ全部夢じゃなかった！本当にお腹が空いてたんだ！",
						"chinese": "天哪... 这不是梦！我真的太饿了！",
						"french": "Oh mon Dieu... Ce n'était pas un rêve ! J'avais tellement faim !",
						"spanish": "Dios mío... ¡Todo esto no fue un sueño! ¡Tenía tanta hambre!",
						"vietnamese": "Trời ơi... Đây không phải là mơ! Tôi đã rất đói!",
						"thai": "โอ้พระเจ้า... นี่ไม่ใช่ฝันไปเลย! ฉันหิวมากจริงๆ!",
						"hindi": "हे भगवान... यह सब सपना नहीं था! मुझे बहुत भूख लगी थी!"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "어서 오십시오, 굶주린 이들이여. 이곳은 고통 없는 풍요의 연회장.",
						"english": "Welcome, hungry ones. This is a banquet hall of pain-free abundance.",
						"japanese": "ようこそ、飢えた者たちよ。ここは苦痛なき豊穣の宴会場。",
						"chinese": "欢迎，饥饿之人。这里是无痛苦的丰饶宴会厅。",
						"french": "Bienvenue, affamés. Voici la salle de banquet de l'abondance sans douleur.",
						"spanish": "Bienvenidos, hambrientos. Este es el salón de banquetes de la abundancia sin dolor.",
						"vietnamese": "Chào mừng, những kẻ đói khát. Đây là sảnh tiệc của sự sung túc không đau khổ.",
						"thai": "ยินดีต้อนรับ ผู้หิวโหยเอ๋ย ที่นี่คือห้องจัดเลี้ยงแห่งความอุดมสมบูรณ์ไร้ความเจ็บปวด",
						"hindi": "स्वागत है, भूखे प्राणियों। यह पीड़ा रहित प्रचुरता का भोज हॉल है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이 미라지 셰프 사하르인가요?",
						"english": "Are you Mirage Chef Sahar?",
						"japanese": "あなたがミラージュシェフ、サハルですか？",
						"chinese": "你是海市蜃楼厨师萨哈尔吗？",
						"french": "Êtes-vous le Chef Mirage Sahar ?",
						"spanish": "¿Es usted el Chef Espejismo Sahar?",
						"vietnamese": "Ngài là đầu bếp Mirage Sahar sao?",
						"thai": "ท่านคือเชฟมิราจ ซาฮาร์ใช่ไหม?",
						"hindi": "क्या आप मिराज शेफ सहर हैं?"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "그렇습니다. 이곳에선 허기와 갈증이 없습니다. 영원한 만족만이 존재할 뿐.",
						"english": "Indeed. Here, there is no hunger or thirst. Only eternal satisfaction.",
						"japanese": "その通りです。ここでは飢えも渇きもありません。永遠の満足のみが存在します。",
						"chinese": "是的。在这里，没有饥饿和口渴。只有永恒的满足。",
						"french": "En effet. Ici, il n'y a ni faim ni soif. Seule une satisfaction éternelle existe.",
						"spanish": "Así es. Aquí no hay hambre ni sed. Solo existe la satisfacción eterna.",
						"vietnamese": "Đúng vậy. Ở đây không có đói hay khát. Chỉ có sự thỏa mãn vĩnh cửu.",
						"thai": "ใช่แล้ว ที่นี่ไม่มีความหิวโหยหรือกระหาย มีแต่ความพึงพอใจนิรันดร์เท่านั้น",
						"hindi": "हाँ। यहाँ भूख या प्यास नहीं है। केवल शाश्वत संतुष्टि ही मौजूद है।"
					}
				},
				{
					"type": "speech",
					"speaker": "amir",
					"content": {
						"korean": "이 파이가... 손에 닿는 순간 모래처럼 부서진 것 같은데? 착각인가...",
						"english": "This pie... it seemed to crumble like sand the moment I touched it? Was it my imagination...?",
						"japanese": "このパイが…触れた瞬間、砂のように崩れたような？錯覚か…",
						"chinese": "这块派…一碰到手就好像沙子一样碎了？是错觉吗…",
						"french": "Cette tarte… elle a semblé s'effriter comme du sable au moment où je l'ai touchée ? Une illusion…?",
						"spanish": "Este pastel... pareció desmoronarse como arena al tocarlo? ¿Fue una ilusión...?",
						"vietnamese": "Cái bánh này... hình như vừa chạm vào đã vỡ vụn như cát? Là ảo giác sao...?",
						"thai": "พายนี้... พอแตะปุ๊บก็ร่วนเป็นทรายเลย? คิดไปเองรึเปล่า...",
						"hindi": "यह पाई... छूते ही रेत की तरह बिखर गई? क्या यह मेरा भ्रम था...?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그저 기분 탓일 겁니다. 마음을 열고 맛보십시오.",
						"english": "It's probably just your imagination. Open your mind and taste it.",
						"japanese": "気のせいでしょう。心を開いて味わってみてください。",
						"chinese": "这可能只是你的错觉。敞开心扉品尝吧。",
						"french": "Ce n'est probablement qu'une impression. Ouvrez votre esprit et savourez.",
						"spanish": "Probablemente sea solo una impresión. Abra su mente y pruebe.",
						"vietnamese": "Chắc chỉ là cảm giác thôi. Hãy mở lòng và nếm thử đi.",
						"thai": "คงเป็นแค่ความรู้สึกของคุณเอง เปิดใจแล้วลองชิมดูสิ",
						"hindi": "यह शायद बस आपकी कल्पना है। अपना मन खोलें और इसका स्वाद लें।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
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
					"speaker": "amir",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이상해... 배가 부른데 여전히 허기가 가시지 않는 것 같아.",
						"english": "Strange... I'm full, but I still feel hungry.",
						"japanese": "変だ…お腹はいっぱいなのに、まだ空腹が消えないみたいだ。",
						"chinese": "真奇怪…我饱了，但似乎仍然感到饥饿。",
						"french": "Étrange… je suis rassasié, mais j'ai toujours faim.",
						"spanish": "Extraño... estoy lleno, pero todavía siento hambre.",
						"vietnamese": "Lạ thật... Tôi đã no rồi mà vẫn thấy đói.",
						"thai": "แปลกจัง... ฉันอิ่มแล้ว แต่ก็ยังรู้สึกหิวอยู่เลย",
						"hindi": "अजीब है... मैं भरा हुआ हूँ, लेकिन फिर भी भूख महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "amir",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저기 봐. 저 사람들은 행복해 보이는데, 뭔가 메말라가는 것 같아.",
						"english": "Look over there. Those people seem happy, but they also seem to be withering away.",
						"japanese": "あそこを見て。あの人たちは幸せそうに見えるけど、何か枯れていっているみたいだ。",
						"chinese": "看那边。那些人看起来很幸福，但好像正在枯萎。",
						"french": "Regarde là-bas. Ces gens semblent heureux, mais ils semblent aussi se dessécher.",
						"spanish": "Mira allí. Esas personas parecen felices, pero también parecen marchitarse.",
						"vietnamese": "Nhìn đằng kia kìa. Những người đó trông có vẻ hạnh phúc, nhưng lại có gì đó như đang héo mòn đi.",
						"thai": "ดูนั่นสิ คนพวกนั้นดูมีความสุขนะ แต่เหมือนกำลังจะเหี่ยวเฉาไปเลย",
						"hindi": "वहाँ देखो। वे लोग खुश दिखते हैं, लेकिन ऐसा लगता है जैसे वे मुरझा रहे हैं।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "boss",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "현실의 고통에 너무 집착하는군요. 환상을 온전히 받아들이세요.",
						"english": "You're too fixated on the pain of reality. Fully embrace the illusion.",
						"japanese": "現実の苦痛にこだわりすぎているようですね。幻想を完全に受け入れなさい。",
						"chinese": "你对现实的痛苦太过执着了。完全接受这幻象吧。",
						"french": "Vous êtes trop obsédé par la douleur de la réalité. Acceptez pleinement l'illusion.",
						"spanish": "Estás demasiado obsesionado con el dolor de la realidad. Abraza plenamente la ilusión.",
						"vietnamese": "Ngài quá cố chấp vào nỗi đau của thực tại rồi. Hãy hoàn toàn đón nhận ảo ảnh đi.",
						"thai": "คุณยึดติดกับความเจ็บปวดในความเป็นจริงมากเกินไปแล้ว ยอมรับภาพลวงตาอย่างเต็มที่สิ",
						"hindi": "आप वास्तविकता के दर्द पर बहुत अधिक ध्यान दे रहे हैं। भ्रम को पूरी तरह से अपनाएं।"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "하지만... 이건 진짜가 아니잖아!",
						"english": "But... this isn't real!",
						"japanese": "でも…これは本物じゃない！",
						"chinese": "但是…这不是真的！",
						"french": "Mais… ce n'est pas réel !",
						"spanish": "Pero... ¡esto no es real!",
						"vietnamese": "Nhưng... đây không phải là thật!",
						"thai": "แต่... นี่มันไม่ใช่ของจริงนี่!",
						"hindi": "लेकिन... यह असली नहीं है!"
					},
					"type": "speech",
					"speaker": "amir"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이렇게는 안 돼. 뭔가 현실적인 해결책을 찾아야 해.",
						"english": "This won't do. I need to find a realistic solution.",
						"japanese": "このままではいけない。何か現実的な解決策を見つけなければ。",
						"chinese": "这样不行。我必须找到一个现实的解决方案。",
						"french": "Ça ne va pas. Je dois trouver une solution réaliste.",
						"spanish": "Esto no sirve. Necesito encontrar una solución realista.",
						"vietnamese": "Không thể như thế này được. Mình phải tìm một giải pháp thực tế.",
						"thai": "แบบนี้ไม่ได้ ต้องหาทางออกที่เป็นจริง",
						"hindi": "यह नहीं चलेगा। मुझे एक यथार्थवादी समाधान खोजना होगा।"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이거 봐! 버려진 이 접시에 왕국의 문양이 새겨져 있어!",
						"english": "Look! This abandoned plate has the royal crest!",
						"japanese": "「見て！この捨てられた皿に王国の紋章が刻まれてる！」",
						"chinese": "看！这个废弃的盘子上刻着王国的纹章！",
						"french": "Regarde ! Cette assiette abandonnée porte le blason du royaume !",
						"spanish": "¡Mira! ¡Este plato abandonado tiene el escudo del reino grabado!",
						"vietnamese": "Nhìn này! Trên cái đĩa bị bỏ đi này có khắc huy hiệu của vương quốc!",
						"thai": "ดูสิ! จานที่ถูกทิ้งนี่มีตราประจำราชอาณาจักรสลักอยู่!",
						"hindi": "देखो! इस छोड़ी हुई थाली पर शाही मुहर खुदी हुई है!"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "사하르가 과거 궁정 요리사였다는 게 정말일지도 몰라...",
						"english": "It might be true... Sahar was a former court chef.",
						"japanese": "「サハルが元宮廷料理人だったって、本当かもしれない...」",
						"chinese": "萨哈尔以前是宫廷厨师，这可能是真的...",
						"french": "C'est peut-être vrai... Sahar était un ancien chef de cour.",
						"spanish": "Quizás sea cierto... Sahar fue un antiguo cocinero de la corte.",
						"vietnamese": "Có lẽ đúng là Sahar từng là đầu bếp hoàng gia...",
						"thai": "อาจเป็นเรื่องจริง... ซาฮาร์เคยเป็นเชฟในวังมาก่อน",
						"hindi": "शायद यह सच हो... सहार एक पूर्व दरबारी रसोइया था।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "boss",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "과거는 잊으십시오. 고통스러운 기억은 아무것도 주지 않습니다.",
						"english": "Forget the past. Painful memories yield nothing.",
						"japanese": "「過去は忘れなさい。苦痛な記憶は何も生み出しません。」",
						"chinese": "忘记过去吧。痛苦的回忆一无是处。",
						"french": "Oubliez le passé. Les souvenirs douloureux ne donnent rien.",
						"spanish": "Olvidemos el pasado. Los recuerdos dolorosos no aportan nada.",
						"vietnamese": "Hãy quên quá khứ đi. Những ký ức đau khổ không mang lại điều gì cả.",
						"thai": "จงลืมอดีตไปซะ ความทรงจำที่เจ็บปวดไม่ได้ให้อะไรเลย",
						"hindi": "अतीत को भूल जाओ। दर्दनाक यादें कुछ नहीं देतीं।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "당신이야말로 과거에 갇혀 있잖아!",
						"english": "You're the one trapped in the past!",
						"japanese": "「あなたこそ過去に囚われているじゃないか！」",
						"chinese": "你才是被困在过去的人！",
						"french": "C'est toi qui es prisonnier du passé !",
						"spanish": "¡Tú eres el que está atrapado en el pasado!",
						"vietnamese": "Anh mới là người bị mắc kẹt trong quá khứ!",
						"thai": "คุณนั่นแหละที่จมปลักอยู่กับอดีต!",
						"hindi": "तुम ही तो अतीत में फंसे हो!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "더 이상 이 환상에 속지 않을 거야! 우린 진짜를 원해!",
						"english": "We won't be fooled by this illusion anymore! We want the truth!",
						"japanese": "「もうこの幻想には騙されない！私たちは真実を求める！」",
						"chinese": "我们不会再被这幻象蒙骗了！我们要真实！",
						"french": "Nous ne nous laisserons plus berner par cette illusion ! Nous voulons la vérité !",
						"spanish": "¡No nos engañarán más con esta ilusión! ¡Queremos la verdad!",
						"vietnamese": "Chúng ta sẽ không còn bị ảo ảnh này lừa dối nữa! Chúng ta muốn sự thật!",
						"thai": "เราจะไม่ถูกหลอกด้วยภาพลวงตานี้อีกแล้ว! เราต้องการของจริง!",
						"hindi": "हम अब इस भ्रम में नहीं फंसेंगे! हम सच्चाई चाहते हैं!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "왜 우리를 이런 곳에 가뒀지? 진실을 말해!",
						"english": "Why did you trap us in a place like this? Tell us the truth!",
						"japanese": "「なぜ私たちをこんな場所に閉じ込めたんだ？真実を話せ！」",
						"chinese": "你为什么把我们困在这种地方？说出真相！",
						"french": "Pourquoi nous as-tu enfermés dans un tel endroit ? Dis la vérité !",
						"spanish": "¿Por qué nos encerraste en un lugar así? ¡Dinos la verdad!",
						"vietnamese": "Tại sao ngươi giam chúng ta ở một nơi như thế này? Hãy nói sự thật đi!",
						"thai": "ทำไมถึงขังเราไว้ในที่แบบนี้? บอกความจริงมา!",
						"hindi": "तुमने हमें ऐसी जगह पर क्यों फंसाया? सच बताओ!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "하... 고통스러운 현실 따윈 무의미해. 배부른 환상이 더 가치 있는 것!",
						"english": "Hmph... Painful reality is meaningless. A fulfilling illusion is more valuable!",
						"japanese": "「はぁ... 苦痛な現実なんて無意味だ。満たされた幻想の方が価値がある！」",
						"chinese": "哈... 痛苦的现实毫无意义。饱足的幻象才更有价值！",
						"french": "Hmpf... La réalité douloureuse est insignifiante. Une illusion satisfaisante a plus de valeur !",
						"spanish": "Ugh... La dolorosa realidad no tiene sentido. ¡Una ilusión plena es más valiosa!",
						"vietnamese": "Hừ... Thực tại đau khổ thật vô nghĩa. Một ảo ảnh no đủ mới đáng giá hơn!",
						"thai": "เฮ้อ... ความจริงที่เจ็บปวดมันไร้ความหมาย ภาพลวงตาที่อิ่มเอมต่างหากที่มีคุณค่า!",
						"hindi": "हुँह... दर्दनाक हकीकत व्यर्थ है। एक संतुष्टिदायक भ्रम ज़्यादा मूल्यवान है!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이 환상은 굶주림으로 백성을 잃었던 나의... 유일한 구원이었어!",
						"english": "This illusion was my... only salvation after losing my people to hunger!",
						"japanese": "「この幻想は、飢えで民を失った私の... 唯一の救済だったんだ！」",
						"chinese": "这个幻象是我... 唯一从饥荒中失去子民后的救赎！",
						"french": "Cette illusion était mon... unique salut après avoir perdu mon peuple à cause de la faim !",
						"spanish": "¡Esta ilusión fue mi... única salvación después de perder a mi pueblo por el hambre!",
						"vietnamese": "Ảo ảnh này là sự cứu rỗi duy nhất của ta... sau khi mất dân vì đói!",
						"thai": "ภาพลวงตานี้คือ... ทางรอดเดียวของข้า หลังจากที่เสียประชากรเพราะความอดอยาก!",
						"hindi": "यह भ्रम मेरे... लोगों को भूख से खोने के बाद मेरी एकमात्र मुक्ति थी!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그건 구원이 아니야! 이건 모두를 말려 죽이는 독이야!",
						"english": "That's not salvation! It's a poison that withers everyone!",
						"japanese": "「それは救済じゃない！これは皆を枯らす毒だ！」",
						"chinese": "那不是救赎！那是让所有人枯萎的毒药！",
						"french": "Ce n'est pas le salut ! C'est un poison qui dessèche tout le monde !",
						"spanish": "¡Eso no es salvación! ¡Es un veneno que consume a todos!",
						"vietnamese": "Đó không phải là sự cứu rỗi! Nó là chất độc làm khô héo tất cả mọi người!",
						"thai": "นั่นไม่ใช่ทางรอด! มันคือยาพิษที่ทำให้ทุกคนเหี่ยวเฉา!",
						"hindi": "वह मुक्ति नहीं है! यह एक ज़हर है जो सबको सुखा देता है!"
					},
					"speaker": "amir",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사하르의 환상이 산산이 부서지고, 연회장은 원래의 사막 모습으로 돌아왔다.",
						"english": "Sahar's illusion shattered, and the banquet hall reverted to its original desert form.",
						"japanese": "サハールの幻想が打ち砕かれ、宴会場は元の砂漠の姿に戻った。",
						"chinese": "萨哈尔的幻象破碎了，宴会厅恢复了它最初的沙漠面貌。",
						"french": "L'illusion de Sahar se brisa, et la salle de banquet retrouva sa forme de désert originelle.",
						"spanish": "La ilusión de Sahar se hizo añicos, y el salón de banquetes volvió a su forma original de desierto.",
						"vietnamese": "Ảo ảnh của Sahar tan vỡ, và sảnh tiệc trở lại hình dáng sa mạc ban đầu.",
						"thai": "ภาพลวงตาของซาฮาร์แตกสลาย และห้องจัดเลี้ยงก็กลับคืนสู่สภาพทะเลทรายดั้งเดิม",
						"hindi": "सहार का भ्रम टूट गया, और भोज कक्ष अपने मूल रेगिस्तानी रूप में लौट आया।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이건 진짜보다 더 진짜였어... 왜... 왜 고통을 택한 거지? 왜...",
						"english": "This was more real than real... Why... why did they choose pain? Why...",
						"japanese": "これは現実より現実だった... なぜ... なぜ苦痛を選んだんだ？ なぜ...",
						"chinese": "这比真实的更真实... 为什么... 为什么选择了痛苦？为什么...",
						"french": "C'était plus réel que la réalité... Pourquoi... pourquoi ont-ils choisi la douleur ? Pourquoi...",
						"spanish": "Esto era más real que lo real... ¿Por qué... por qué eligieron el dolor? ¿Por qué...",
						"vietnamese": "Cái này còn thật hơn cả thật... Tại sao... tại sao họ lại chọn nỗi đau? Tại sao...",
						"thai": "นี่มันจริงยิ่งกว่าจริงเสียอีก... ทำไม... ทำไมพวกเขาถึงเลือกความเจ็บปวด? ทำไม...",
						"hindi": "यह असली से भी ज़्यादा असली था... क्यों... क्यों उन्होंने दर्द चुना? क्यों..."
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "고통 속에서 진짜를 찾는 게 인간이다! 가짜 만족은 결국 아무것도 아니었어!",
						"english": "Humans seek truth in suffering! False satisfaction was ultimately nothing!",
						"japanese": "苦痛の中で真実を見出すのが人間だ！偽りの満足は結局何でもなかった！",
						"chinese": "人类在痛苦中寻找真实！虚假的满足终究一无是处！",
						"french": "L'homme cherche la vérité dans la souffrance ! La fausse satisfaction n'était finalement rien !",
						"spanish": "¡El humano busca la verdad en el sufrimiento! ¡La falsa satisfacción al final no fue nada!",
						"vietnamese": "Con người tìm kiếm sự thật trong đau khổ! Sự thỏa mãn giả dối rốt cuộc chẳng là gì cả!",
						"thai": "มนุษย์แสวงหาความจริงในความทุกข์! ความพึงพอใจจอมปลอมสุดท้ายก็ไม่มีอะไรเลย!",
						"hindi": "इंसान दर्द में ही सच्चाई ढूंढता है! झूठी संतुष्टि आखिर में कुछ भी नहीं थी!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "결국... 진짜 배고픔과 갈증을 다시 견뎌야 했어. 이게 현실이구나.",
						"english": "In the end... I had to endure real hunger and thirst again. This is reality.",
						"japanese": "結局... 本当の空腹と喉の渇きを再び耐えなければならなかった。これが現実だ。",
						"chinese": "最终……我不得不再次忍受真正的饥饿和口渴。这就是现实。",
						"french": "Finalement... j'ai dû endurer à nouveau la vraie faim et la soif. C'est ça la réalité.",
						"spanish": "Al final... tuve que soportar de nuevo el hambre y la sed reales. Esta es la realidad.",
						"vietnamese": "Cuối cùng... tôi lại phải chịu đựng cơn đói và khát thật sự. Đây chính là thực tế.",
						"thai": "ท้ายที่สุด... ข้าก็ต้องทนทรมานกับความหิวและความกระหายที่แท้จริงอีกครั้ง นี่แหละคือความจริง.",
						"hindi": "आखिरकार... मुझे असली भूख और प्यास फिर से सहनी पड़ी। यही तो हकीकत है।"
					},
					"type": "speech",
					"speaker": "amir"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환상의 셰프 사하르의 이야기는 끝이 났다. 하지만 사막은 여전히 그들을 기다리고 있었다.",
						"english": "The tale of Sahar, the illusory chef, ended. But the desert still awaited them.",
						"japanese": "幻想の料理人サハルの物語は終わった。しかし、砂漠は依然として彼らを待ち続けていた。",
						"chinese": "幻象厨师萨哈尔的故事结束了。但沙漠依然在等待着他们。",
						"french": "L'histoire de Sahar, le chef illusoire, s'acheva. Mais le désert les attendait toujours.",
						"spanish": "La historia de Sahar, la chef de las ilusiones, terminó. Pero el desierto aún los esperaba.",
						"vietnamese": "Câu chuyện về đầu bếp ảo ảnh Sahar đã kết thúc. Nhưng sa mạc vẫn đang chờ đợi họ.",
						"thai": "เรื่องราวของเชฟมายา ซาฮาร์ ได้สิ้นสุดลงแล้ว แต่ทะเลทรายก็ยังคงรอคอยพวกเขาอยู่.",
						"hindi": "मायावी शेफ सहार की कहानी खत्म हो गई। लेकिन रेगिस्तान अभी भी उनका इंतजार कर रहा था।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "사하르의 환상은 끝없이 탐험대를 집어삼켰다. 그들은 점점 메말라갔다.",
						"english": "Sahar's illusions endlessly consumed the expedition. They gradually withered away.",
						"japanese": "サハルの幻想は無限に探検隊を飲み込んだ。彼らは徐々に干からびていった。",
						"chinese": "萨哈尔的幻象无尽地吞噬了探险队。他们渐渐枯萎。",
						"french": "Les illusions de Sahar engloutirent sans fin l'expédition. Ils se desséchèrent progressivement.",
						"spanish": "Las ilusiones de Sahar devoraron sin fin a la expedición. Poco a poco se marchitaron.",
						"vietnamese": "Ảo ảnh của Sahar không ngừng nuốt chửng đoàn thám hiểm. Họ dần dần héo mòn.",
						"thai": "ภาพลวงตาของซาฮาร์กลืนกินคณะสำรวจอย่างไม่สิ้นสุด พวกเขาค่อยๆ เหี่ยวเฉาลง.",
						"hindi": "सहार के भ्रमों ने खोज दल को अंतहीन रूप से निगल लिया। वे धीरे-धीरे सूखते गए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "하! 결국 너희도 환상 없이는 아무것도 아니야. 이 달콤한 거짓 속에 잠들어라!",
						"english": "Ha! In the end, you're nothing without illusions either. Sleep in this sweet lie!",
						"japanese": "ハッ！結局お前たちも幻想なしでは何でもない。この甘い嘘の中で眠れ！",
						"chinese": "哈！最终，没有幻想你们也什么都不是。在这甜蜜的谎言中沉睡吧！",
						"french": "Ha ! Au final, vous n'êtes rien sans illusions non plus. Endormez-vous dans ce doux mensonge !",
						"spanish": "¡Ja! Al final, ustedes tampoco son nada sin ilusiones. ¡Duerman en esta dulce mentira!",
						"vietnamese": "Ha! Cuối cùng thì không có ảo ảnh các ngươi cũng chẳng là gì cả. Hãy ngủ yên trong lời nói dối ngọt ngào này!",
						"thai": "ฮ่า! ท้ายที่สุดแล้ว พวกเจ้าก็ไม่มีอะไรเลยหากปราศจากภาพลวงตา จงหลับใหลในคำโกหกอันหอมหวานนี้ซะ!",
						"hindi": "हा! आखिर में, तुम भी भ्रम के बिना कुछ नहीं हो। इस मीठे झूठ में सो जाओ!"
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "아니... 아직 끝나지 않았어. 우린 진짜를 찾을 거야!",
						"english": "No... it's not over yet. We'll find the truth!",
						"japanese": "いや... まだ終わっていない。私たちは真実を見つけるんだ！",
						"chinese": "不……还没结束。我们会找到真相的！",
						"french": "Non... ce n'est pas encore fini. Nous trouverons la vérité !",
						"spanish": "No... aún no ha terminado. ¡Encontraremos la verdad!",
						"vietnamese": "Không... vẫn chưa kết thúc. Chúng ta sẽ tìm thấy sự thật!",
						"thai": "ไม่... มันยังไม่จบ เราจะค้นหาความจริง!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ। हम सच्चाई ढूंढेंगे!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "연회장 가장 깊은 곳, 사하르가 거대한 환상의 식탁 앞에서 기다리고 있었다.",
						"english": "In the deepest part of the banquet hall, Sahar awaited before a grand illusory feast.",
						"japanese": "「宴会場の最深部、サハルは巨大な幻想の食卓の前で待っていた。」",
						"chinese": "宴会厅最深处，萨哈尔在一张巨大的幻象餐桌前等待着。",
						"french": "Dans la partie la plus profonde de la salle de banquet, Sahar attendait devant une immense table de festin illusoire.",
						"spanish": "En lo más profundo del salón de banquetes, Sahar esperaba frente a una gigantesca mesa de banquete ilusoria.",
						"vietnamese": "Ở nơi sâu nhất của đại sảnh tiệc, Sahar đang đợi trước một bàn tiệc ảo ảnh khổng lồ.",
						"thai": "ในส่วนที่ลึกที่สุดของห้องจัดเลี้ยง ซาฮาร์กำลังรออยู่หน้าโต๊ะจัดเลี้ยงภาพลวงตาขนาดใหญ่",
						"hindi": "भोज हॉल के सबसे गहरे हिस्से में, सहार एक विशाल भ्रमित दावत की मेज के सामने इंतजार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "여기까지 왔군요. 마지막으로 묻겠습니다. 고통을 택하시겠습니까? 아니면...",
						"english": "You've come this far. One last question. Will you choose pain? Or...",
						"japanese": "ここまで来たか。最後に問おう。苦痛を選ぶか？ それとも...",
						"chinese": "你走到这里了。我最后再问一次。你选择痛苦吗？还是...",
						"french": "Vous êtes venu jusqu'ici. Une dernière question. Choisirez-vous la douleur ? Ou...",
						"spanish": "Has llegado hasta aquí. Una última pregunta. ¿Elegirás el dolor? ¿O...",
						"vietnamese": "Ngươi đã đến đây. Lần cuối ta hỏi. Ngươi sẽ chọn nỗi đau? Hay...",
						"thai": "เจ้ามาถึงนี่แล้ว ข้าจะถามเป็นครั้งสุดท้าย เจ้าจะเลือกความเจ็บปวด หรือ...",
						"hindi": "तुम इतनी दूर आ गए। आखिरी बार पूछता हूँ। क्या तुम दर्द चुनोगे? या..."
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나와 함께, 이 배부른 환상 속에서 영원히 만족하시겠습니까?",
						"english": "Will you find eternal satisfaction with me, in this satiating illusion?",
						"japanese": "私と共に、この満たされた幻想の中で永遠に満足するか？",
						"chinese": "和我一起，在这个饱足的幻象中永远满足吗？",
						"french": "Avec moi, trouverez-vous la satisfaction éternelle dans cette illusion rassasiante ?",
						"spanish": "¿Conmigo, te satisfarás eternamente en esta ilusión saciante?",
						"vietnamese": "Cùng ta, ngươi sẽ mãi mãi thỏa mãn trong ảo ảnh no đủ này chứ?",
						"thai": "กับข้า เจ้าจะพึงพอใจชั่วนิรันดร์ในภาพลวงตาที่อิ่มเอมนี้หรือไม่?",
						"hindi": "मेरे साथ, क्या तुम इस तृप्त करने वाले भ्रम में हमेशा के लिए संतुष्ट रहोगे?"
					}
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그 환상이 뭔지 이제 알아! 이 음식이...!",
						"english": "I know what that illusion is now! This food...!",
						"japanese": "あの幻想が何なのか、もう分かった！この食べ物は...！",
						"chinese": "我现在知道那个幻象是什么了！这食物...！",
						"french": "Je sais maintenant ce qu'est cette illusion ! Cette nourriture... !",
						"spanish": "¡Ya sé lo que es esa ilusión! ¡Esta comida...!",
						"vietnamese": "Giờ ta biết ảo ảnh đó là gì rồi! Món ăn này...!",
						"thai": "ข้ารู้แล้วว่าภาพลวงตานั้นคืออะไร! อาหารนี้...!",
						"hindi": "मैं अब जानता हूँ कि वह भ्रम क्या है! यह भोजन...!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "이건 진짜보다 더 진짜야.",
						"english": "This is more real than real.",
						"japanese": "これは現実より現実だ。",
						"chinese": "这比真实的更真实。",
						"french": "C'est plus réel que la réalité.",
						"spanish": "Esto es más real que lo real.",
						"vietnamese": "Cái này còn thật hơn cả thật.",
						"thai": "นี่มันจริงยิ่งกว่าจริงเสียอีก",
						"hindi": "यह असली से भी ज़्यादा असली है।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사하르가 내민 접시 위 환상적인 음식이 아미르의 손에 닿는 순간, 모래처럼 부서졌다.",
						"english": "The moment Amir's hand touched the fantastic food on Sahar's extended plate, it crumbled like sand.",
						"japanese": "サハールが差し出した皿の上の幻想的な食べ物がアミールの手に触れた瞬間、砂のように崩れ落ちた。",
						"chinese": "当阿米尔的手碰到萨哈尔递来的盘子里那奇幻的食物时，它像沙子一样碎裂了。",
						"french": "Au moment où la main d'Amir toucha la nourriture fantastique sur l'assiette tendue de Sahar, elle s'effrita comme du sable.",
						"spanish": "En el momento en que la mano de Amir tocó la fantástica comida en el plato extendido de Sahar, se desmoronó como arena.",
						"vietnamese": "Khoảnh khắc tay Amir chạm vào món ăn kỳ ảo trên đĩa Sahar đưa ra, nó vỡ vụn như cát.",
						"thai": "วินาทีที่มือของอาเมียร์แตะอาหารวิเศษบนจานที่ซาฮาร์ยื่นให้ มันก็ร่วงโรยราวกับทราย",
						"hindi": "जैसे ही आमिर के हाथ ने सहार की बढ़ाई हुई प्लेट पर शानदार भोजन को छुआ, वह रेत की तरह बिखर गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "봐! 다 모래야! 이 환상은 우릴 속여서 말려 죽이는 거라고!",
						"english": "Look! It's all sand! This illusion is deceiving us, trying to dry us out and kill us!",
						"japanese": "見ろ！全部砂だ！この幻想は俺たちを欺き、干からびさせて殺そうとしているんだ！",
						"chinese": "看！全是沙子！这个幻象在欺骗我们，想把我们渴死！",
						"french": "Regardez ! Tout n'est que sable ! Cette illusion nous trompe, elle essaie de nous assécher et de nous tuer !",
						"spanish": "¡Mira! ¡Todo es arena! ¡Esta ilusión nos está engañando, tratando de secarnos y matarnos!",
						"vietnamese": "Nhìn kìa! Toàn là cát! Ảo ảnh này đang lừa dối chúng ta, muốn làm chúng ta khô héo đến chết!",
						"thai": "ดูสิ! มันคือทรายทั้งหมด! ภาพลวงตานี้หลอกเรา ทำให้เราแห้งเหี่ยวและตาย!",
						"hindi": "देखो! यह सब रेत है! यह भ्रम हमें धोखा दे रहा है, हमें सुखाकर मारना चाहता है!"
					},
					"speaker": "amir",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 진짜 배고픔을 택하겠어! 가짜 만족은 필요 없어!",
						"english": "We'll choose real hunger! We don't need false satisfaction!",
						"japanese": "俺たちは本当の飢えを選ぶ！偽りの満足は必要ない！",
						"chinese": "我们选择真正的饥饿！我们不需要虚假的满足！",
						"french": "Nous choisirons la vraie faim ! Nous n'avons pas besoin de fausse satisfaction !",
						"spanish": "¡Elegiremos el hambre real! ¡No necesitamos falsa satisfacción!",
						"vietnamese": "Chúng ta sẽ chọn cơn đói thật sự! Không cần sự thỏa mãn giả dối!",
						"thai": "เราจะเลือกความหิวโหยที่แท้จริง! เราไม่ต้องการความพึงพอใจจอมปลอม!",
						"hindi": "हम असली भूख चुनेंगे! हमें झूठी संतुष्टि नहीं चाहिए!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "어리석은... 결국 고통을 택하겠다면, 나의 진정한 분노를 맛보게 해주지!",
						"english": "Foolish... If you insist on choosing pain, then you shall taste my true wrath!",
						"japanese": "愚かな... 結局苦痛を選ぶというのなら、私の真の怒りを味わわせてやろう！",
						"chinese": "愚蠢... 如果你最终选择痛苦，那么就让你尝尝我真正的愤怒！",
						"french": "Insensé... Si vous choisissez finalement la douleur, alors vous goûterez ma véritable colère !",
						"spanish": "Estúpido... Si al final eliges el dolor, ¡entonces te haré probar mi verdadera ira!",
						"vietnamese": "Ngu ngốc... Nếu cuối cùng ngươi chọn nỗi đau, vậy thì hãy nếm thử cơn thịnh nộ thật sự của ta!",
						"thai": "โง่เขลา... หากเจ้าเลือกความเจ็บปวดในที่สุด เช่นนั้นเจ้าจะได้ลิ้มรสความโกรธที่แท้จริงของข้า!",
						"hindi": "मूर्ख... अगर तुम अंत में दर्द चुनते हो, तो तुम्हें मेरा असली क्रोध चखने को मिलेगा!"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"끝없는 사막, 눈앞에 펼쳐진 환상의 연회장.",
			"미라지 셰프 사하르, 그의 음식은 굶주린 자들의 유일한 구원처럼 보였다.",
			"그러나 달콤한 환상 뒤에는 뒤틀린 진실이 숨겨져 있었으니...",
			"이제, 배부른 환상과 고통스러운 현실 사이에서 최후의 선택이 기다린다."
		],
		"english": [
			"An endless desert, a fantastical banquet hall unfolding before their eyes.",
			"Mirage Chef Sahar, his food seemed like the only salvation for the starving.",
			"But behind the sweet illusion, a twisted truth lay hidden...",
			"Now, between satiating illusion and painful reality, the final choice awaits."
		],
		"japanese": [
			"果てしない砂漠、目の前に広がる幻想の宴会場。",
			"ミラージュシェフ・サハル、彼の料理は飢えた者たちの唯一の救いのように見えた。",
			"しかし、甘い幻想の裏には、歪んだ真実が隠されていた...",
			"今、満たされた幻想と苦痛な現実の間で、最後の選択が待っている。"
		],
		"chinese": [
			"无尽的沙漠，眼前展开的幻象宴会厅。",
			"幻影厨师萨哈尔，他的食物似乎是饥饿者唯一的救赎。",
			"然而，在甜美的幻象背后，隐藏着扭曲的真相...",
			"现在，在饱足的幻象与痛苦的现实之间，最后的选择等待着。"
		],
		"french": [
			"Un désert sans fin, une salle de banquet illusoire se dévoile.",
			"Le Chef Mirage Sahar, sa cuisine semblait être le seul salut pour les affamés.",
			"Mais derrière la douce illusion se cachait une vérité tordue...",
			"Entre l'illusion et la douloureuse réalité, le choix final les attend."
		],
		"spanish": [
			"Un desierto interminable, un salón de banquetes ilusorio ante sus ojos.",
			"El Chef Espejismo Sahar, su comida parecía la única salvación para los hambrientos.",
			"Pero detrás de la dulce ilusión, se escondía una verdad retorcida...",
			"Entre la ilusión y la dolorosa realidad, la elección final aguarda."
		],
		"vietnamese": [
			"Sa mạc vô tận, sảnh tiệc ảo ảnh hiện ra trước mắt.",
			"Đầu bếp Ảo Ảnh Sahar, món ăn của anh ta dường như là cứu rỗi duy nhất cho những kẻ đói khát.",
			"Tuy nhiên, đằng sau ảo ảnh ngọt ngào, một sự thật méo mó đang ẩn giấu...",
			"Giờ đây, giữa ảo ảnh no đủ và thực tại đau đớn, lựa chọn cuối cùng đang chờ đợi."
		],
		"thai": [
			"ทะเลทรายอันกว้างใหญ่ งานเลี้ยงสุดอลังการปรากฏขึ้นตรงหน้า.",
			"มิราจเชฟซาฮาร์ อาหารของเขาดูเหมือนเป็นทางรอดเดียวสำหรับผู้หิวโหย.",
			"ทว่าเบื้องหลังภาพลวงตาอันหอมหวาน กลับซ่อนความจริงที่บิดเบี้ยวเอาไว้...",
			"บัดนี้ ระหว่างภาพลวงตาอันอิ่มเอมใจกับความจริงอันเจ็บปวด การตัดสินใจครั้งสุดท้ายรออยู่."
		],
		"hindi": [
			"एक अंतहीन रेगिस्तान, आँखों के सामने एक शानदार भोज कक्ष खुल रहा था।",
			"मिराज शेफ सहार, उसका भोजन भूखों के लिए एकमात्र मोक्ष जैसा लग रहा था।",
			"लेकिन मीठे भ्रम के पीछे, एक विकृत सत्य छिपा हुआ था...",
			"अब, तृप्त करने वाले भ्रम और दर्दनाक वास्तविकता के बीच, अंतिम विकल्प प्रतीक्षा कर रहा है।"
		]
	},
	"epilogue": {
		"korean": [
			"사하르의 환상이 걷히자, 사막은 본래의 혹독한 모습을 되찾았다.",
			"메마른 땅에 다시 발을 디딘 탐험대. 여전히 허기지고 목마르다.",
			"진실은 고통스러웠지만, 적어도 더 이상 기만당하지 않았다.",
			"어쩌면, 이제야 비로소 진짜 생존이 시작된 것인지도 모른다."
		],
		"english": [
			"As Sahar's illusion faded, the desert reclaimed its harsh, true form.",
			"The expedition, stepping back onto the barren land. Still hungry and thirsty.",
			"The truth was painful, but at least they were no longer deceived.",
			"Perhaps, true survival had only just begun."
		],
		"japanese": [
			"サハルの幻想が晴れると、砂漠は本来の過酷な姿を取り戻した。",
			"乾いた大地に再び足を踏み入れた探検隊。相変わらず空腹で喉が渇いている。",
			"真実は苦痛だったが、少なくとももう欺かれることはなかった。",
			"おそらく、本当のサバイバルは今ようやく始まったのかもしれない。"
		],
		"chinese": [
			"萨哈尔的幻象消散后，沙漠恢复了其本来的严酷面貌。",
			"探险队再次踏上贫瘠的土地。依然饥肠辘辘，口干舌燥。",
			"真相令人痛苦，但至少他们不再受骗了。",
			"或许，真正的生存现在才刚刚开始。"
		],
		"french": [
			"Quand l'illusion de Sahar se dissipa, le désert retrouva sa nature implacable.",
			"L'expédition, posant de nouveau le pied sur la terre aride. Toujours affamés et assoiffés.",
			"La vérité était douloureuse, mais au moins ils n'étaient plus trompés.",
			"Peut-être que la vraie survie ne faisait que commencer."
		],
		"spanish": [
			"Al desvanecerse la ilusión de Sahar, el desierto recuperó su cruda realidad.",
			"La expedición, pisando de nuevo la tierra estéril. Todavía hambrientos y sedientos.",
			"La verdad era dolorosa, pero al menos ya no estaban siendo engañados.",
			"Quizás, la verdadera supervivencia acababa de empezar."
		],
		"vietnamese": [
			"Khi ảo ảnh của Sahar tan biến, sa mạc trở lại với vẻ khắc nghiệt vốn có.",
			"Đoàn thám hiểm đặt chân trở lại vùng đất cằn cỗi. Vẫn đói và khát.",
			"Sự thật thật đau đớn, nhưng ít nhất họ không còn bị lừa dối nữa.",
			"Có lẽ, sự sinh tồn thực sự chỉ mới bắt đầu."
		],
		"thai": [
			"เมื่อภาพลวงตาของซาฮาร์สลายไป ทะเลทรายก็กลับคืนสู่ความโหดร้ายดังเดิม.",
			"คณะสำรวจก้าวเท้าลงบนพื้นดินที่แห้งแล้งอีกครั้ง ยังคงหิวโหยและกระหาย.",
			"ความจริงนั้นเจ็บปวด แต่พวกเขาไม่ถูกหลอกลวงอีกต่อไปแล้ว.",
			"บางที การเอาชีวิตรอดที่แท้จริงอาจเพิ่งเริ่มต้นขึ้นตอนนี้ก็ได้."
		],
		"hindi": [
			"जैसे ही सहार का भ्रम टूटा, रेगिस्तान ने अपना कठोर, असली रूप वापस पा लिया।",
			"सूखी धरती पर फिर से कदम रखने वाली अभियान दल। अभी भी भूखे और प्यासे।",
			"सत्य दर्दनाक था, लेकिन कम से कम अब वे और धोखे में नहीं थे।",
			"शायद, असली अस्तित्व अब जाकर शुरू हुआ था।"
		]
	}
} as const;
