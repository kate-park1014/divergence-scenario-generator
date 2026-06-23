export const scenario_modern_syndicate_34_01 = {
	"scenario_id": "modern_syndicate_34_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"zoe": {
			"id": "mon_ad3762e0-13f3-44a1-9b84-4ff67136858e",
			"name": {
				"korean": "조이",
				"english": "Zoe",
				"japanese": "ゾーイ",
				"chinese": "佐伊",
				"french": "Zoé",
				"spanish": "Zoe",
				"vietnamese": "Zoe",
				"thai": "โซอี้",
				"hindi": "ज़ोई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/75dcfb0c-33e3-4208-4205-fb09d4abb100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a7d0ebe1-73dc-4683-1338-32be2f7fac00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"디지털의 심연. 현실은 끝없이 균열하고 있었다.",
			"안내자는 속삭였다. 이곳은 모든 것이 데이터가 되는 곳.",
			"평온한 가면 아래, 기괴한 불안감이 일렁였다.",
			"왜곡된 재즈 선율. 낡은 그림자. 현실은 이미 무너지고 있었다."
		],
		"english": [
			"Digital abyss. Reality was endlessly fracturing.",
			"The guide whispered. This is where everything becomes data.",
			"Beneath the calm mask, a bizarre unease flickered.",
			"Distorted jazz melody. Faded shadows. Reality was already crumbling."
		],
		"japanese": [
			"デジタルの深淵。現実は果てしなく亀裂していた。",
			"案内者は囁いた。ここは、すべてがデータになる場所。",
			"穏やかな仮面の下、奇妙な不安感が揺らめいた。",
			"歪んだジャズの旋律。古い影。現実はすでに崩壊していた。"
		],
		"chinese": [
			"数字深渊。现实正无尽地分裂着。",
			"引导者低语着。这里是万物皆化为数据之地。",
			"平静的面具下，诡异的不安感荡漾着。",
			"扭曲的爵士旋律。陈旧的阴影。现实早已崩塌。"
		],
		"french": [
			"L'abîme numérique. La réalité se fracturait sans fin.",
			"Le guide chuchota. C'est ici que tout devient donnée.",
			"Sous le masque serein, une étrange inquiétude frémissait.",
			"Mélodie de jazz distordue. Ombres fanées. La réalité s'effondrait déjà."
		],
		"spanish": [
			"El abismo digital. La realidad se fracturaba sin cesar.",
			"El guía susurró. Aquí es donde todo se convierte en datos.",
			"Bajo la máscara de calma, una extraña inquietud palpitaba.",
			"Melodía de jazz distorsionada. Sombras desvanecidas. La realidad ya se estaba desmoronando."
		],
		"vietnamese": [
			"Vực thẳm số. Hiện thực không ngừng rạn nứt.",
			"Người dẫn đường thì thầm. Đây là nơi mọi thứ biến thành dữ liệu.",
			"Dưới lớp mặt nạ bình yên, một cảm giác bất an kỳ lạ dao động.",
			"Giai điệu jazz méo mó. Bóng tối cũ kỹ. Hiện thực đã sụp đổ."
		],
		"thai": [
			"ห้วงลึกดิจิทัล ความจริงกำลังแตกสลายไม่รู้จบ",
			"ผู้แนะนำกระซิบ ที่นี่คือที่ที่ทุกสิ่งกลายเป็นข้อมูล",
			"ภายใต้หน้ากากอันสงบ ความรู้สึกไม่สบายใจแปลกประหลาดสั่นไหว",
			"ท่วงทำนองแจ๊สบิดเบี้ยว เงาเก่าแก่ ความจริงกำลังพังทลายลงแล้ว"
		],
		"hindi": [
			"डिजिटल पाताल। वास्तविकता अंतहीन रूप से बिखर रही थी।",
			"मार्गदर्शक ने फुसफुसाया। यह वह जगह है जहाँ सब कुछ डेटा बन जाता है।",
			"शांत मुखौटे के नीचे, एक अजीब बेचैनी झिलमिला रही थी।",
			"विकृत जैज़ धुन। पुरानी परछाइयाँ। वास्तविकता पहले ही बिखर रही थी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 네트워크의 가장자리. …별거 없어 보이지?",
						"english": "This is the edge of the network. ...Doesn't look like much, does it?",
						"japanese": "ここがネットワークの端。…大したことなさそうに見えるだろ？",
						"chinese": "这里是网络的边缘。……看起来没什么特别的，对吧？",
						"french": "C'est la limite du réseau. ...Ça n'a pas l'air terrible, n'est-ce pas ?",
						"spanish": "Este es el borde de la red. ...No parece gran cosa, ¿verdad?",
						"vietnamese": "Đây là rìa của mạng. ...Trông không có gì đặc biệt, phải không?",
						"thai": "นี่คือขอบของเครือข่าย ...ดูไม่เห็นมีอะไรเลยใช่ไหม?",
						"hindi": "यह नेटवर्क का किनारा है। ...कुछ खास नहीं दिख रहा, है ना?"
					},
					"speaker": "zoe"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 그렇게 위험하다는 곳이야?",
						"english": "Is this the place they say is so dangerous?",
						"japanese": "ここがそんなに危険な場所なのか？",
						"chinese": "这里就是他们说的那么危险的地方吗？",
						"french": "C'est l'endroit qu'on dit si dangereux ?",
						"spanish": "¿Este es el lugar que dicen que es tan peligroso?",
						"vietnamese": "Đây là nơi nguy hiểm như vậy sao?",
						"thai": "ที่นี่คือที่ที่ว่าอันตรายนักหรือ?",
						"hindi": "क्या यह वही जगह है जिसे वे इतना खतरनाक बताते हैं?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모든 것이 데이터로 흐르는 공간. 현실의 잔영이 떠다녔다.",
						"english": "A space where everything flows as data. Remnants of reality drifted.",
						"japanese": "すべてがデータとして流れる空間。現実の残影が漂っていた。",
						"chinese": "万物皆以数据形式流淌的空间。现实的残影漂浮着。",
						"french": "Un espace où tout s'écoule comme des données. Les vestiges de la réalité flottaient.",
						"spanish": "Un espacio donde todo fluye como datos. Restos de la realidad flotaban.",
						"vietnamese": "Một không gian nơi mọi thứ chảy thành dữ liệu. Dư ảnh của hiện thực trôi nổi.",
						"thai": "พื้นที่ที่ทุกสิ่งไหลเวียนเป็นข้อมูล เศษเสี้ยวของความเป็นจริงล่องลอยอยู่",
						"hindi": "एक ऐसी जगह जहाँ सब कुछ डेटा के रूप में बहता है। वास्तविकता के अवशेष तैर रहे थे।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…뭔가 기분 나빠.",
						"english": "...Something feels wrong.",
						"japanese": "…なんか嫌な感じだ。",
						"chinese": "……感觉有点不对劲。",
						"french": "...Il y a quelque chose qui ne va pas.",
						"spanish": "...Algo no me gusta.",
						"vietnamese": "...Cảm thấy có gì đó không ổn.",
						"thai": "...รู้สึกไม่ดีเลย",
						"hindi": "...कुछ ठीक नहीं लग रहा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "zoe",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "조심해. 가끔 알 수 없는 데이터가 섞여 들어와.",
						"english": "Be careful. Sometimes unknown data gets mixed in.",
						"japanese": "気をつけろ。たまに未知のデータが混じってくる。",
						"chinese": "小心。有时会有不明数据混入。",
						"french": "Fais attention. Parfois, des données inconnues s'y mélangent.",
						"spanish": "Ten cuidado. A veces se mezclan datos desconocidos.",
						"vietnamese": "Cẩn thận. Đôi khi có dữ liệu không rõ nguồn gốc xen lẫn vào.",
						"thai": "ระวังให้ดี บางครั้งมีข้อมูลที่ไม่รู้จักปะปนเข้ามา",
						"hindi": "सावधान रहो। कभी-कभी अज्ञात डेटा मिल जाता है।"
					},
					"speaker": "zoe",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "데이터?",
						"english": "Data?",
						"japanese": "データ？",
						"chinese": "数据？",
						"french": "Données ?",
						"spanish": "¿Datos?",
						"vietnamese": "Dữ liệu?",
						"thai": "ข้อมูล?",
						"hindi": "डेटा?"
					}
				},
				{
					"content": {
						"korean": "공간을 가득 채운 데이터 속. 희미한 옛 재즈 선율이 귓가를 스쳤다. 존재하지 않는 소리였다.",
						"english": "Faint jazz melodies grazed my ears amidst data-filled space. A sound that didn't exist.",
						"japanese": "データに満たされた空間の中。微かな昔のジャズの調べが耳元をかすめた。存在しない音だった。",
						"chinese": "充斥着数据的空间中。一丝微弱的旧爵士乐旋律掠过耳畔。那是不存在的音色。",
						"french": "Une faible mélodie de vieux jazz effleura mes oreilles dans l'espace rempli de données. Un son qui n'existait pas.",
						"spanish": "Una tenue melodía de jazz antiguo rozó mis oídos en el espacio lleno de datos. Un sonido que no existía.",
						"vietnamese": "Giữa không gian đầy dữ liệu, một giai điệu jazz cũ kỹ thoảng qua tai. Một âm thanh không tồn tại.",
						"thai": "ท่ามกลางพื้นที่ที่เต็มไปด้วยข้อมูล ท่วงทำนองแจ๊สเก่าแก่แผ่วเบาเล็ดลอดเข้าหู เสียงนั้นไม่มีอยู่จริง",
						"hindi": "डेटा से भरी जगह में, पुरानी जैज़ की धीमी धुन मेरे कानों से गुज़री। यह एक ऐसा स्वर था, जिसका अस्तित्व नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "zoe",
					"content": {
						"korean": "이런 건… 원래 없어. 이상해.",
						"english": "This... shouldn't be here. It's strange.",
						"japanese": "こんなの…元々ないはずだ。おかしい。",
						"chinese": "这…本来不该存在。真奇怪。",
						"french": "Ça… ne devrait pas être là. C'est étrange.",
						"spanish": "Esto... no debería estar aquí. Es extraño.",
						"vietnamese": "Cái này... vốn dĩ không có. Lạ thật.",
						"thai": "นี่มัน... ไม่น่าจะมีแต่แรก แปลกจัง",
						"hindi": "यह… असल में नहीं होना चाहिए। अजीब है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "더 깊이 들어올수록 데이터가 불안정해져.",
						"english": "The deeper we go, the more unstable the data becomes.",
						"japanese": "奥へ進むほど、データが不安定になる。",
						"chinese": "越深入，数据就越不稳定。",
						"french": "Plus on s'enfonce, plus les données deviennent instables.",
						"spanish": "Cuanto más nos adentramos, más inestables se vuelven los datos.",
						"vietnamese": "Càng vào sâu, dữ liệu càng trở nên bất ổn.",
						"thai": "ยิ่งเข้าลึก ข้อมูลยิ่งไม่เสถียร",
						"hindi": "जितना गहरा हम जाते हैं, डेटा उतना ही अस्थिर होता जाता है।"
					},
					"speaker": "zoe"
				},
				{
					"content": {
						"korean": "이건 뭐야? 의미 없는 코드 같은데.",
						"english": "What's this? Looks like meaningless code.",
						"japanese": "これは何だ？意味のないコードみたいだけど。",
						"chinese": "这是什么？看起来像是无意义的代码。",
						"french": "Qu'est-ce que c'est ? On dirait du code sans signification.",
						"spanish": "¿Qué es esto? Parece código sin sentido.",
						"vietnamese": "Cái gì đây? Trông như những đoạn mã vô nghĩa.",
						"thai": "นี่คืออะไร? ดูเหมือนโค้ดที่ไม่มีความหมาย",
						"hindi": "यह क्या है? निरर्थक कोड जैसा लगता है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "암호화된 데이터 조각들이 눈앞을 스쳤다. '나의 왕국', '영원한 거리'와 같은 문구들이 보였다.",
						"english": "Encrypted data fragments flashed before my eyes. Phrases like \"My Kingdom,\" \"Eternal Street\" appeared.",
						"japanese": "暗号化されたデータの断片が目の前をかすめた。「私の王国」、「永遠の通り」といった文句が見えた。",
						"chinese": "加密的数据碎片掠过眼前。“我的王国”、“永恒之街”等词句映入眼帘。",
						"french": "Des fragments de données cryptées défilèrent devant mes yeux. Des phrases comme « Mon Royaume », « Rue Éternelle » apparurent.",
						"spanish": "Fragmentos de datos encriptados pasaron ante mis ojos. Frases como \"Mi Reino\", \"Calle Eterna\" aparecieron.",
						"vietnamese": "Những mảnh dữ liệu được mã hóa lướt qua trước mắt. Hiện lên những cụm từ như \"Vương quốc của tôi\", \"Con đường vĩnh cửu\".",
						"thai": "ชิ้นส่วนข้อมูลที่ถูกเข้ารหัสลอยผ่านหน้า ปรากฏวลีเช่น \"อาณาจักรของฉัน\", \"ถนนนิรันดร์\"",
						"hindi": "एन्क्रिप्टेड डेटा के टुकड़े मेरी आँखों के सामने चमक उठे। \"मेरा साम्राज्य\", \"अनंत गली\" जैसे वाक्यांश दिखाई दिए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "누군가… 의도적으로 남긴 흔적 같아.",
						"english": "It looks like someone... intentionally left these traces.",
						"japanese": "誰かが…意図的に残した痕跡のようだ。",
						"chinese": "像是某人…故意留下的痕迹。",
						"french": "On dirait que quelqu'un... a laissé ces traces intentionnellement.",
						"spanish": "Parece que alguien... dejó estas huellas intencionadamente.",
						"vietnamese": "Có vẻ như ai đó... đã cố ý để lại dấu vết này.",
						"thai": "เหมือนมีใครบางคน... จงใจทิ้งร่องรอยไว้",
						"hindi": "ऐसा लगता है कि किसी ने... जानबूझकर ये निशान छोड़े हैं।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "zoe",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "현실과 디지털의 경계가 흐려졌다. 어둠 속에 낡은 갱단의 문양, 그림자 같은 형상들이 스쳐 지나가는 착각에 빠졌다.",
						"english": "The boundary between reality and digital blurred. I fell into the illusion of old gang symbols and shadowy figures flitting through the darkness.",
						"japanese": "現実とデジタルの境界が曖昧になった。闇の中に古びたギャングの紋章や影のような形が通り過ぎる錯覚に陥った。",
						"chinese": "现实与数字的界限模糊了。我陷入了黑暗中掠过旧帮派图腾、影子般形态的错觉。",
						"french": "La frontière entre réalité et numérique s'est brouillée. Je tombai dans l'illusion de vieux symboles de gangs et de formes fantomatiques traversant l'obscurité.",
						"spanish": "La frontera entre la realidad y lo digital se desdibujó. Caí en la ilusión de ver viejos símbolos de pandillas y figuras sombrías que pasaban por la oscuridad.",
						"vietnamese": "Ranh giới giữa thực tại và kỹ thuật số dần mờ nhạt. Tôi rơi vào ảo ảnh thấy những biểu tượng băng đảng cũ kỹ, những hình bóng mờ ảo lướt qua trong bóng tối.",
						"thai": "เส้นแบ่งระหว่างความจริงกับดิจิทัลพร่ามัวลง ฉันตกอยู่ในภาพลวงตาของสัญลักษณ์แก๊งเก่าๆ และร่างเงาที่วูบไหวในความมืด",
						"hindi": "वास्तविकता और डिजिटल के बीच की सीमा धुंधली हो गई। मैं पुराने गिरोहों के प्रतीकों और अंधेरे में मंडराती छायादार आकृतियों के भ्रम में पड़ गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "머리가 아파… 여기가 현실이 맞아?",
						"english": "My head aches... Is this really reality?",
						"japanese": "頭が痛い…ここが現実なのか？",
						"chinese": "头好痛…这里真的是现实吗？",
						"french": "Ma tête me fait mal... Est-ce que c'est vraiment la réalité ici ?",
						"spanish": "Me duele la cabeza... ¿Esto es realmente la realidad?",
						"vietnamese": "Đầu tôi đau quá... Đây có phải là thực tại không?",
						"thai": "ปวดหัวจัง... ที่นี่คือความเป็นจริงเหรอ?",
						"hindi": "मेरा सिर दर्द कर रहा है… क्या यह सच में हकीकत है?"
					}
				},
				{
					"speaker": "zoe",
					"content": {
						"korean": "정신 똑바로 차려. 여기는… 모든 것이 가능해지는 곳이야.",
						"english": "Stay focused. This is where... anything is possible.",
						"japanese": "しっかりしろ。ここは…全てが可能になる場所だ。",
						"chinese": "保持清醒。这里…是一切皆有可能的地方。",
						"french": "Reste concentré. C'est ici que... tout est possible.",
						"spanish": "Mantente concentrado. Aquí es donde... todo es posible.",
						"vietnamese": "Tỉnh táo lại đi. Đây là nơi... mọi thứ đều có thể xảy ra.",
						"thai": "ตั้งสติไว้ ที่นี่... ทุกสิ่งเป็นไปได้",
						"hindi": "ध्यान केंद्रित रखो। यह वो जगह है जहाँ… सब कुछ संभव है।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…이겼다고 생각하나? …모든 것이 데이터가 될 뿐.",
						"english": "...Do you think you've won? ...Everything will merely become data.",
						"japanese": "…勝ったとでも？…全てはデータとなるだけだ。",
						"chinese": "…以为赢了吗？…一切都将化为数据。",
						"french": "…Pensez-vous avoir gagné ? …Tout ne fera que devenir des données.",
						"spanish": "¿Creéis haber ganado? …Todo se convertirá en datos.",
						"vietnamese": "…Ngươi nghĩ đã thắng sao? …Mọi thứ rồi sẽ chỉ là dữ liệu thôi.",
						"thai": "…คิดว่าชนะแล้วหรือ? …ทุกสิ่งล้วนจะกลายเป็นข้อมูลเท่านั้น",
						"hindi": "…क्या तुम्हें लगता है कि तुम जीत गए हो? …सब कुछ बस डेटा बन जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What do you mean?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué dices?",
						"vietnamese": "Ngươi nói gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "क्या बक रहे हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 승리도, 절망도… 모두 기록될 뿐.",
						"english": "Your victory, your despair... all will merely be recorded.",
						"japanese": "お前たちの勝利も、絶望も…全て記録されるだけだ。",
						"chinese": "你们的胜利，你们的绝望…都将被记录下来。",
						"french": "Votre victoire, votre désespoir… tout sera simplement enregistré.",
						"spanish": "Vuestra victoria, vuestra desesperación… todo quedará registrado.",
						"vietnamese": "Chiến thắng hay tuyệt vọng của các ngươi… tất cả rồi sẽ chỉ được ghi lại.",
						"thai": "ชัยชนะของพวกเจ้า ความสิ้นหวังของพวกเจ้า… ทุกสิ่งจะถูกบันทึกไว้เท่านั้น",
						"hindi": "तुम्हारी जीत भी, तुम्हारी निराशा भी… सब कुछ बस दर्ज किया जाएगा।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "데이터의 폭풍이 잠잠해졌다. 그러나 승리의 감각은 묘하게 허무했다. 아직… 끝나지 않았다.",
						"english": "The data storm has quieted. Yet, the feeling of victory was strangely hollow. It's not... over yet.",
						"japanese": "データの嵐は鎮まった。しかし、勝利の感覚は奇妙に虚しかった。まだ…終わっていない。",
						"chinese": "数据的风暴平息了。然而，胜利的感觉却莫名的空虚。还…没有结束。",
						"french": "La tempête de données s'est calmée. Pourtant, le sentiment de victoire était étrangement vide. Ce n'est pas… encore fini.",
						"spanish": "La tormenta de datos se ha calmado. Sin embargo, la sensación de victoria era extrañamente vana. Aún… no ha terminado.",
						"vietnamese": "Cơn bão dữ liệu đã lắng xuống. Nhưng cảm giác chiến thắng lại trống rỗng một cách kỳ lạ. Vẫn… chưa kết thúc.",
						"thai": "พายุข้อมูลสงบลงแล้ว แต่ความรู้สึกแห่งชัยชนะกลับว่างเปล่าอย่างประหลาด ยัง…ไม่จบ",
						"hindi": "डेटा का तूफान शांत हो गया। फिर भी, जीत की भावना अजीब तरह से खोखली थी। अभी… खत्म नहीं हुआ है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "환영한다. 길을 잃은 자들이여.",
						"english": "Welcome, lost souls.",
						"japanese": "ようこそ、迷いし者たちよ。",
						"chinese": "欢迎，迷失之人。",
						"french": "Bienvenue, âmes perdues.",
						"spanish": "Bienvenidos, almas perdidas.",
						"vietnamese": "Chào mừng, những linh hồn lạc lối.",
						"thai": "ยินดีต้อนรับ ผู้ที่หลงทางเอ๋ย",
						"hindi": "स्वागत है, भटकी हुई आत्माओं।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "넌… 뭐야?",
						"english": "What... are you?",
						"japanese": "お前は…何だ？",
						"chinese": "你…是什么？",
						"french": "Qu'est-ce que tu es ?",
						"spanish": "¿Qué… eres?",
						"vietnamese": "Ngươi… là gì?",
						"thai": "เจ้า… คืออะไร?",
						"hindi": "तुम… क्या हो?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나는 이 데이터의 심장. 이 세상의 진실을 알고 있다.",
						"english": "I am the heart of this data. I know the truth of this world.",
						"japanese": "私はこのデータの心臓。この世界の真実を知る者。",
						"chinese": "我是这数据之心。我知晓这个世界的真相。",
						"french": "Je suis le cœur de ces données. Je connais la vérité de ce monde.",
						"spanish": "Soy el corazón de estos datos. Conozco la verdad de este mundo.",
						"vietnamese": "Ta là trái tim của dữ liệu này. Ta biết sự thật về thế giới này.",
						"thai": "ข้าคือหัวใจของข้อมูลนี้ ข้ารู้ความจริงของโลกใบนี้",
						"hindi": "मैं इस डेटा का हृदय हूँ। मैं इस दुनिया का सच जानता हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희는… 그저 시스템의 오류일 뿐.",
						"english": "You are... mere system errors.",
						"japanese": "お前たちは…ただのシステムのエラーに過ぎない。",
						"chinese": "你们…不过是系统的错误罢了。",
						"french": "Vous n'êtes… que de simples erreurs du système.",
						"spanish": "Vosotros sois… meros errores del sistema.",
						"vietnamese": "Các ngươi… chỉ là lỗi của hệ thống thôi.",
						"thai": "พวกเจ้า… เป็นเพียงข้อผิดพลาดของระบบเท่านั้น",
						"hindi": "तुम सब… बस सिस्टम की त्रुटियाँ हो।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "zoe",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "zoe",
					"content": {
						"korean": "…조심해! 이 존재는… 보통이 아니야!",
						"english": "...Watch out! This being is... no ordinary foe!",
						"japanese": "…気をつけろ！こいつは…ただ者じゃない！",
						"chinese": "…小心！这个存在…非同寻常！",
						"french": "…Attention ! Cette entité… n'est pas ordinaire !",
						"spanish": "…¡Cuidado! Esta entidad… no es normal!",
						"vietnamese": "…Cẩn thận! Thực thể này… không tầm thường đâu!",
						"thai": "…ระวัง! สิ่งนี้… ไม่ใช่ธรรมดา!",
						"hindi": "…सावधान! यह अस्तित्व… सामान्य नहीं है!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "감히 시스템에 저항하려 했는가? 덧없는 존재들이여.",
						"english": "Did you dare resist the system, fleeting beings?",
						"japanese": "よくもシステムに抗おうとしたな、儚き存在たちよ。",
						"chinese": "竟敢反抗系统？无常的生灵们。",
						"french": "Osiez-vous résister au système, êtres éphémères ?",
						"spanish": "¿Osasteis desafiar al sistema, seres efímeros?",
						"vietnamese": "Dám chống lại hệ thống sao, những sinh vật phù du?",
						"thai": "บังอาจต่อต้านระบบรึ, เหล่าสิ่งมีชีวิตอันเลือนหาย?",
						"hindi": "सिस्टम का विरोध करने की हिम्मत की तुमने, क्षणभंगुर प्राणियों।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직…!",
						"english": "Damn it... Not yet...!",
						"japanese": "くそ…まだ…！",
						"chinese": "该死…还没…！",
						"french": "Maudit… Pas encore… !",
						"spanish": "Maldita sea… ¡Todavía no…!",
						"vietnamese": "Chết tiệt… Vẫn…!",
						"thai": "เวรเอ๊ย… ยัง…!",
						"hindi": "धिक्कार है… अभी तक नहीं…!"
					}
				},
				{
					"content": {
						"korean": "네 데이터는… 나에게 흡수될 뿐.",
						"english": "Your data... will merely be absorbed by me.",
						"japanese": "お前のデータは…私に吸収されるだけだ。",
						"chinese": "你的数据…只会被我吸收。",
						"french": "Tes données… ne seront qu'absorbées par moi.",
						"spanish": "Tus datos… simplemente serán absorbidos por mí.",
						"vietnamese": "Dữ liệu của ngươi… sẽ chỉ bị ta hấp thụ.",
						"thai": "ข้อมูลของเจ้า…จะถูกข้าดูดกลืนเท่านั้น",
						"hindi": "तुम्हारा डेटा… मुझमें ही समा जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
