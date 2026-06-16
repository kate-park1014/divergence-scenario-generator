export const scenario_snowy_haraldr_31_05 = {
	"scenario_id": "snowy_haraldr_31_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_106"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "Haraldr의 깃발이 설원 곳곳에 꽂혔다. 얼어붙은 땅이 그의 시장이 되었다.",
						"english": "Haraldr's banners were planted across the snowfield. The frozen land became his market.",
						"japanese": "ハラルドルの旗が雪原のあちこちに立てられた。凍てついた大地が彼の市場となった。",
						"chinese": "哈拉尔德的旗帜插遍了雪原。这片冰冻的土地成了他的市场。",
						"french": "Les bannières de Haraldr furent plantées partout dans la toundra. La terre gelée devint son marché.",
						"spanish": "Las banderas de Haraldr se clavaron por todo el campo nevado. La tierra helada se convirtió en su mercado.",
						"vietnamese": "Lá cờ của Haraldr đã được cắm khắp vùng tuyết nguyên. Vùng đất đóng băng trở thành thị trường của hắn.",
						"thai": "ธงของ Haraldr ถูกปักไปทั่วทุ่งหิมะ แผ่นดินที่เยือกแข็งกลายเป็นตลาดของเขา",
						"hindi": "हेराल्ड्र के झंडे पूरे बर्फ़ीले मैदान में फहराए गए। जमी हुई ज़मीन उसका बाज़ार बन गई।"
					},
					"speaker": "narrator"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…대단한 야망이다. 이 모든 것을 자신의 것으로 만들겠다니.",
						"english": "...Such grand ambition. To make all of this his own.",
						"japanese": "「…とてつもない野望だ。このすべてを自分のものにするとは。」",
						"chinese": "「……好大的野心。竟想把这一切都据为己有。」",
						"french": "...Quelle ambition démesurée. S'approprier tout cela.",
						"spanish": "...Qué gran ambición. Querer hacer todo esto suyo.",
						"vietnamese": "...Tham vọng thật lớn. Muốn biến tất cả những thứ này thành của riêng.",
						"thai": "...ช่างเป็นความทะเยอทะยานที่ยิ่งใหญ่ จะทำให้ทุกสิ่งเหล่านี้เป็นของตนเอง",
						"hindi": "...कितनी बड़ी महत्वाकांक्षा। यह सब अपना बनाना चाहता है।"
					},
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 깃발들 때문에 땅이 얼어붙고 있어.",
						"english": "Those flags are freezing the land.",
						"japanese": "「あの旗のせいで、土地が凍りついている。」",
						"chinese": "「那些旗帜让土地冻结了。」",
						"french": "Ces drapeaux gèlent la terre.",
						"spanish": "Esas banderas están congelando la tierra.",
						"vietnamese": "Những lá cờ đó đang đóng băng mặt đất.",
						"thai": "ธงพวกนั้นกำลังทำให้แผ่นดินกลายเป็นน้ำแข็ง",
						"hindi": "उन झंडों के कारण ज़मीन जम रही है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 영광스러운 프랜차이즈… 그 끝은 무엇일까.",
						"english": "Yes. A glorious franchise... What will its end be?",
						"japanese": "「ああ。栄光あるフランチャイズ…その終わりはどうなるのだろうか。」",
						"chinese": "「是啊。光荣的特许经营……它的结局会是什么呢？」",
						"french": "Oui. Une glorieuse franchise... Quelle en sera la fin ?",
						"spanish": "Sí. Una franquicia gloriosa... ¿Cuál será su fin?",
						"vietnamese": "Đúng vậy. Một thương hiệu vinh quang... Cái kết của nó sẽ là gì?",
						"thai": "ใช่แล้ว แฟรนไชส์อันรุ่งโรจน์... จุดจบของมันจะเป็นอย่างไรกันนะ",
						"hindi": "हाँ। एक शानदार फ़्रैंचाइज़ी... उसका अंत क्या होगा?"
					},
					"speaker": "ivar",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "저자의 움직임… 단순한 장사꾼이 아니었다.",
						"english": "His movements... He was no mere merchant.",
						"japanese": "「あの者の動き…ただの商人ではなかった。」",
						"chinese": "「那家伙的动作……他不是一个简单的商人。」",
						"french": "Ses mouvements... Ce n'était pas un simple marchand.",
						"spanish": "Sus movimientos... No era un simple comerciante.",
						"vietnamese": "Động tác của hắn... Hắn không phải là một thương nhân đơn thuần.",
						"thai": "การเคลื่อนไหวของเขา... เขาไม่ใช่แค่พ่อค้าธรรมดา",
						"hindi": "उसकी चाल... वह कोई मामूली व्यापारी नहीं था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "「どういうことだ？」",
						"chinese": "「你在说什么？」",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh nói gì cơ?",
						"thai": "หมายความว่ายังไง?",
						"hindi": "क्या मतलब है तुम्हारा?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깃발을 꽂는 자세가… 전투를 시작하는 전사와 똑같았다.",
						"english": "The way he planted the flags... It was just like a warrior beginning battle.",
						"japanese": "「旗を立てる姿勢が…戦いを始める戦士と全く同じだった。」",
						"chinese": "「他插旗的姿态……和开始战斗的战士一模一样。」",
						"french": "La façon dont il plantait les drapeaux... C'était exactement comme un guerrier qui s'apprête à combattre.",
						"spanish": "La forma en que plantó las banderas... Era exactamente como un guerrero iniciando una batalla.",
						"vietnamese": "Tư thế cắm cờ... Giống hệt một chiến binh bắt đầu trận chiến.",
						"thai": "ท่าที่เขานำธงไปปัก... เหมือนนักรบที่กำลังจะเริ่มต่อสู้ไม่มีผิด",
						"hindi": "झंडे गाड़ने का उसका तरीक़ा... ऐसा था जैसे कोई योद्धा युद्ध शुरू कर रहा हो।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "판매가 정복이라… 나도 저렇게 되는 건가.",
						"english": "Sales as conquest... Will I become like that too?",
						"japanese": "「販売が征服だとは…私もああなるのだろうか。」",
						"chinese": "「销售即征服……我也会变成那样吗？」",
						"french": "La vente comme conquête... Deviendrai-je comme ça aussi ?",
						"spanish": "Vender como conquistar... ¿Yo también me convertiré en eso?",
						"vietnamese": "Bán hàng là chinh phục... Liệu tôi cũng sẽ trở thành như vậy?",
						"thai": "การขายคือการพิชิตงั้นหรือ... ฉันจะกลายเป็นแบบนั้นด้วยหรือเปล่า",
						"hindi": "बिक्री ही विजय है... क्या मैं भी वैसा ही बन जाऊँगा?"
					},
					"speaker": "ivar",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 땅을 봐. 깃발 아래 모든 생명이 죽어간다.",
						"english": "Look at this land. Under the flags, all life is dying.",
						"japanese": "「この土地を見ろ。旗の下、すべての生命が死んでいく。」",
						"chinese": "「看这片土地。在旗帜之下，所有生命都在消逝。」",
						"french": "Regarde cette terre. Sous les drapeaux, toute vie meurt.",
						"spanish": "Mira esta tierra. Bajo las banderas, toda vida está muriendo.",
						"vietnamese": "Hãy nhìn mảnh đất này. Dưới những lá cờ, mọi sinh linh đang chết dần.",
						"thai": "ดูที่ดินผืนนี้สิ ใต้ผืนธง ชีวิตทั้งหมดกำลังจะตาย",
						"hindi": "इस ज़मीन को देखो। झंडों के नीचे, सभी जीवन मर रहे हैं।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "Haraldr는 이걸 '영광스러운 확장'이라고 했어.",
						"english": "Haraldr called this 'glorious expansion.'",
						"japanese": "「ハラルドルはこれを『栄光ある拡大』と呼んだ。」",
						"chinese": "「哈拉尔德把这称为“光荣的扩张”。」",
						"french": "Haraldr a appelé cela une 'expansion glorieuse'.",
						"spanish": "Haraldr llamó a esto 'expansión gloriosa'.",
						"vietnamese": "Haraldr gọi đây là 'sự mở rộng vinh quang'.",
						"thai": "Haraldr เรียกสิ่งนี้ว่า 'การขยายตัวอันรุ่งโรจน์'",
						"hindi": "हैरल्ड ने इसे 'गौरवशाली विस्तार' कहा था।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "영광의 끝은 이런 황폐함인가. 경쟁자를 짓밟고 모든 것을 취하는 것.",
						"english": "Is this desolation the end of glory? Crushing rivals and taking everything.",
						"japanese": "「栄光の終わりはこのような荒廃なのか。競争者を踏みつけ、すべてを奪い取るのか。」",
						"chinese": "「这就是荣耀的终结吗？践踏竞争对手，夺走一切。」",
						"french": "Est-ce là la fin de la gloire, une telle désolation ? Écraser les rivaux et tout prendre.",
						"spanish": "¿Es esta desolación el fin de la gloria? Pisar a los rivales y tomarlo todo.",
						"vietnamese": "Kết cục của vinh quang là sự hoang tàn như thế này sao? Đạp đổ đối thủ và chiếm lấy tất cả.",
						"thai": "จุดจบของความรุ่งโรจน์คือความรกร้างเช่นนี้หรือ? การเหยียบย่ำคู่แข่งและเอาทุกสิ่งทุกอย่างไป",
						"hindi": "क्या यह तबाही ही महिमा का अंत है? प्रतिद्वंद्वियों को कुचलना और सब कुछ ले लेना।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "강함의 끝을 시험하는 게… 이런 방식이었다면.",
						"english": "If testing the limits of strength... meant this.",
						"japanese": "強さの限界を試すのが…こんなやり方だったとは。",
						"chinese": "如果这就是…测试力量极限的方式。",
						"french": "Si c'était ça... tester les limites de la force.",
						"spanish": "Si así era... como se ponía a prueba el límite de la fuerza.",
						"vietnamese": "Nếu đây là cách... để thử thách giới hạn sức mạnh.",
						"thai": "หากการทดสอบขีดจำกัดแห่งความแข็งแกร่ง... ต้องเป็นแบบนี้",
						"hindi": "अगर ताकत की हद आज़माने का... यही तरीका था।"
					},
					"speaker": "ivar",
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
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 두면 설원 전체가 얼어붙을 거야.",
						"english": "Leave it like this, and the entire snowfield will freeze.",
						"japanese": "このままでは、雪原全体が凍りつくぞ。",
						"chinese": "再这样下去，整个雪原都会被冻结。",
						"french": "Si on le laisse faire, toute la toundra gèlera.",
						"spanish": "Si lo dejamos así, todo el campo nevado se congelará.",
						"vietnamese": "Cứ để thế này, toàn bộ tuyết nguyên sẽ đóng băng mất.",
						"thai": "หากปล่อยไว้เช่นนี้ ทุ่งหิมะทั้งหมดจะกลายเป็นน้ำแข็ง",
						"hindi": "अगर इसे ऐसे ही छोड़ दिया, तो पूरा बर्फीला मैदान जम जाएगा।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 저자의 눈은 이미 불타오르고 있다.",
						"english": "Cannot be stopped. Their eyes are already burning.",
						"japanese": "止められない。あの者の目は既に燃え盛っている。",
						"chinese": "无法阻止。那家伙的眼中已燃起火焰。",
						"french": "Impossible de l'arrêter. Ses yeux brûlent déjà.",
						"spanish": "No se puede detener. Sus ojos ya están ardiendo.",
						"vietnamese": "Không thể ngăn lại. Mắt của hắn đã bùng cháy rồi.",
						"thai": "หยุดไม่ได้แล้ว ดวงตาของมันลุกโชนแล้ว",
						"hindi": "इसे रोका नहीं जा सकता। उसकी आँखें पहले से ही जल रही हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나도 한때는 저런 굶주림에 사로잡혔었지.",
						"english": "I, too, was once gripped by such hunger.",
						"japanese": "私もかつては、あんな飢えに囚われていた。",
						"chinese": "我也曾一度被那样的饥饿所困扰。",
						"french": "Moi aussi, j'ai été saisi par une telle faim, autrefois.",
						"spanish": "Yo también estuve una vez atrapado por un hambre así.",
						"vietnamese": "Ta cũng từng bị cơn đói khát như vậy chiếm lấy.",
						"thai": "ครั้งหนึ่ง ข้าเองก็เคยถูกความหิวกระหายเช่นนั้นครอบงำ",
						"hindi": "मैं भी कभी ऐसी ही भूख से जकड़ा हुआ था।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "하지만 저 끝에는… 아무것도 남지 않을 거야.",
						"english": "But at that end... nothing will remain.",
						"japanese": "だが、その果てには…何も残らないだろう。",
						"chinese": "但在那尽头…将一无所有。",
						"french": "Mais à cette fin... il ne restera rien.",
						"spanish": "Pero al final... no quedará nada.",
						"vietnamese": "Nhưng ở cuối con đường đó… sẽ không còn lại gì cả.",
						"thai": "แต่ที่ปลายทางนั้น... จะไม่มีสิ่งใดเหลืออยู่เลย",
						"hindi": "लेकिन उस अंत में... कुछ भी नहीं बचेगा।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하… 고작 이 정도로 나를 막을 수 있을 줄 알았나?",
						"english": "Haha... Did you truly believe this would stop me?",
						"japanese": "ハハ… この程度で私を止められるとでも思ったか？",
						"chinese": "哈哈… 你以为就凭这点就能阻止我吗？",
						"french": "Haha... Tu pensais vraiment que ça allait m'arrêter ?",
						"spanish": "Jaja... ¿De verdad creíste que esto me detendría?",
						"vietnamese": "Haha… Ngươi nghĩ chỉ bấy nhiêu đây có thể ngăn cản ta sao?",
						"thai": "ฮ่าฮ่า... เจ้าคิดหรือว่าแค่นี้จะหยุดข้าได้?",
						"hindi": "हाहा… क्या तुम्हें लगा था कि बस इतना मुझे रोक पाएगा?"
					},
					"speaker": "boss"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "나의 영광스러운 점포는… 끝없이 확장될 것이다.",
						"english": "My glorious domain… will expand endlessly.",
						"japanese": "我が栄光ある領土は… 終わりなく広がり続けるだろう。",
						"chinese": "我辉煌的领地… 将无限扩张。",
						"french": "Mon glorieux domaine… s'étendra sans fin.",
						"spanish": "Mi glorioso dominio… se expandirá sin cesar.",
						"vietnamese": "Đế chế huy hoàng của ta… sẽ không ngừng mở rộng.",
						"thai": "อาณาจักรที่รุ่งโรจน์ของข้า… จะขยายไปไม่สิ้นสุด.",
						"hindi": "मेरा गौरवशाली साम्राज्य… अनन्त काल तक विस्तारित होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어.",
						"english": "Damn it… It's not over yet.",
						"japanese": "ちくしょう… まだ終わっていない。",
						"chinese": "该死… 还没结束。",
						"french": "Merde… Ce n'est pas encore fini.",
						"spanish": "Maldita sea… Aún no ha terminado.",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc đâu.",
						"thai": "ให้ตายสิ… ยังไม่จบแค่นี้หรอก.",
						"hindi": "धिक्कार है… यह अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 왕국의 심장부. Haraldr가 거대한 깃발을 들고 서 있었다.",
						"english": "In the heart of the frozen kingdom. Haraldr stood, holding a massive banner.",
						"japanese": "凍てついた王国の心臓部。Haraldrが巨大な旗を掲げて立っていた。",
						"chinese": "冰封王国的心脏地带。哈拉尔德手持巨旗而立。",
						"french": "Au cœur du royaume gelé. Haraldr se tenait, brandissant une immense bannière.",
						"spanish": "En el corazón del reino helado. Haraldr estaba de pie, sosteniendo un estandarte gigante.",
						"vietnamese": "Tại trung tâm vương quốc băng giá. Haraldr đứng đó, tay cầm một lá cờ lớn.",
						"thai": "ณ ใจกลางอาณาจักรน้ำแข็ง Haraldr ยืนถือธงขนาดมหึมา",
						"hindi": "जमे हुए राज्य के दिल में। हेराल्डर एक विशाल झंडा लिए खड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔군. 나의 위대한 프랜차이즈를 거부한 자들.",
						"english": "...So, you've come. Those who rejected my grand franchise.",
						"japanese": "…来たか。我が偉大なるフランチャイズを拒んだ者たちよ。",
						"chinese": "…来了吗。那些拒绝了我的伟大特许经营权的人。",
						"french": "...Vous voilà. Ceux qui ont rejeté ma grande franchise.",
						"spanish": "...Han llegado. Aquellos que rechazaron mi gran franquicia.",
						"vietnamese": "…Đã đến rồi sao. Những kẻ đã từ chối quyền thương hiệu vĩ đại của ta.",
						"thai": "...มาแล้วรึ ผู้ที่ปฏิเสธแฟรนไชส์อันยิ่งใหญ่ของข้า",
						"hindi": "...आ गए। वो, जिन्होंने मेरी महान फ़्रैंचाइज़ी को ठुकराया।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네 프랜차이즈 때문에 설원이 죽어가고 있어!",
						"english": "Your franchise is killing the snowfield!",
						"japanese": "お前のフランチャイズのせいで、雪原が死にかけている！",
						"chinese": "你的特许经营权正在扼杀这片雪原！",
						"french": "À cause de ta franchise, la toundra est en train de mourir !",
						"spanish": "¡Tu franquicia está matando el campo nevado!",
						"vietnamese": "Vì quyền thương hiệu của ngươi, tuyết nguyên đang chết dần!",
						"thai": "เพราะแฟรนไชส์ของเจ้า ทุ่งหิมะกำลังจะตาย!",
						"hindi": "तुम्हारी फ़्रैंचाइज़ी की वजह से, बर्फीला मैदान मर रहा है!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "죽음? 아니. 새로운 질서다. 나의 영광스러운 영토 확장이지.",
						"english": "Death? No. It's a new order. My glorious territorial expansion.",
						"japanese": "死だと？違う。これは新たな秩序だ。我が栄光なる領土拡張よ。",
						"chinese": "死亡？不。这是新的秩序。是我光荣的领土扩张。",
						"french": "La mort ? Non. C'est un nouvel ordre. Mon expansion territoriale glorieuse.",
						"spanish": "¿Muerte? No. Es un nuevo orden. Mi gloriosa expansión territorial.",
						"vietnamese": "Cái chết? Không. Đây là một trật tự mới. Sự mở rộng lãnh thổ vinh quang của ta.",
						"thai": "ความตายรึ? ไม่ นี่คือระเบียบใหม่ การขยายอาณาเขตอันรุ่งโรจน์ของข้าต่างหาก",
						"hindi": "मौत? नहीं। यह एक नया आदेश है। मेरा गौरवशाली क्षेत्रीय विस्तार।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 땅은 전부 내 점포다! 사지 않겠다면, 정복할 뿐!",
						"english": "This entire land is my store! If you won't buy it, I'll simply conquer it!",
						"japanese": "この地は全て、我が店舗だ！買わぬのなら、征服するまで！",
						"chinese": "这片土地都是我的店铺！不买的话，那就只有征服了！",
						"french": "Toute cette terre est mon magasin ! Si vous ne l'achetez pas, je la conquiers, c'est tout !",
						"spanish": "¡Toda esta tierra es mi tienda! Si no la compras, ¡simplemente la conquistaré!",
						"vietnamese": "Toàn bộ vùng đất này là cửa hàng của ta! Nếu không mua, ta sẽ chỉ chinh phục mà thôi!",
						"thai": "ดินแดนนี้ทั้งหมดเป็นร้านค้าของข้า! ถ้าไม่ซื้อ ข้าก็จะยึดครองมันซะ!",
						"hindi": "यह पूरी ज़मीन मेरी दुकान है! अगर तुम इसे नहीं खरीदोगे, तो मैं इसे बस जीत लूँगा!"
					},
					"speaker": "boss",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "장사꾼의 깃발 봉은, 이제 전쟁의 창이 되어 있었다.",
						"english": "The merchant's banner pole had become a spear of war.",
						"japanese": "商人の旗竿は、今や戦の槍となっていた。",
						"chinese": "商人的旗杆，如今已化作战争的长矛。",
						"french": "Le mât du marchand était devenu une lance de guerre.",
						"spanish": "El asta de la bandera del mercader se había convertido en una lanza de guerra.",
						"vietnamese": "Cột cờ của thương nhân giờ đã trở thành ngọn giáo chiến tranh.",
						"thai": "เสาธงของพ่อค้าบัดนี้ได้กลายเป็นหอกแห่งสงครามแล้ว",
						"hindi": "व्यापारी का झंडा अब युद्ध का भाला बन गया था।"
					}
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "Haraldr! 네 영광의 끝이 진정 이것이냐!",
						"english": "Haraldr! Is this truly the end of your glory?",
						"japanese": "ハラルドル！お前の栄光の終焉が、まさかこれなのか！",
						"chinese": "哈拉尔德！你的荣耀终结竟是如此吗！",
						"french": "Haraldr ! Est-ce vraiment la fin de ta gloire ?",
						"spanish": "¡Haraldr! ¿Es este verdaderamente el fin de tu gloria?",
						"vietnamese": "Haraldr! Đây thật sự là dấu chấm hết cho vinh quang của ngươi sao!",
						"thai": "ฮาราลเดอร์! จุดจบแห่งความรุ่งโรจน์ของเจ้าคือสิ่งนี้จริงหรือ!",
						"hindi": "हरल्ड्र! क्या सच में यही तेरे यश का अंत है!"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이바르… 너도 언젠가 내 발밑에 무릎 꿇고 나의 점포가 될 것이다.",
						"english": "Ivar... You too shall one day kneel at my feet and become my chattel.",
						"japanese": "イヴァル… お前もいつか私の足元にひざまずき、私の持ち物となるだろう。",
						"chinese": "伊瓦尔……你终有一天也会跪在我脚下，成为我的附庸。",
						"french": "Ivar... Toi aussi, un jour, tu t'agenouilleras à mes pieds et deviendras ma propriété.",
						"spanish": "Ivar... Tú también, algún día, te arrodillarás a mis pies y te convertirás en mi propiedad.",
						"vietnamese": "Ivar... Ngươi cũng sẽ có ngày quỳ gối dưới chân ta và trở thành tài sản của ta.",
						"thai": "ไอวาร์... เจ้าเองก็จะคุกเข่าแทบเท้าข้า และเป็นสมบัติของข้าในสักวัน",
						"hindi": "इवर... तुम भी एक दिन मेरे कदमों में झुकोगे और मेरे दास बनोगे।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "…절대. 나는 네가 될 수 없어!",
						"english": "...Never. I can never become you!",
						"japanese": "…絶対に。私はお前にはなれない！",
						"chinese": "……绝不。我绝不会成为你！",
						"french": "...Jamais. Je ne deviendrai jamais comme toi !",
						"spanish": "...Jamás. ¡Nunca podré ser como tú!",
						"vietnamese": "...Không đời nào. Ta không thể nào trở thành ngươi!",
						"thai": "...ไม่มีทาง. ข้าไม่มีทางเป็นเจ้าได้!",
						"hindi": "...कभी नहीं। मैं तुम नहीं बन सकता!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "ivar",
					"action": "exit",
					"direction": "down"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 나는… 그저… 더 강해지고 싶었을 뿐인데….",
						"english": "Ugh... I... merely... wanted to become stronger...",
						"japanese": "くぅ…私は…ただ…もっと強くなりたかっただけなのに…。",
						"chinese": "呃…我…只是…想变得更强而已…。",
						"french": "Argh... Je... voulais juste... devenir plus fort...",
						"spanish": "Uf... Yo... solo... quería ser más fuerte...",
						"vietnamese": "Khụ... Ta... chỉ là... muốn trở nên mạnh hơn thôi mà...",
						"thai": "อึก... ข้า... แค่... อยากแข็งแกร่งขึ้นเท่านั้นเอง...",
						"hindi": "उफ़... मैं... बस... और शक्तिशाली बनना चाहता था..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…끝이 아니다. 나의 정신은… 새로운 땅에서… 다시 태어날 것이다.",
						"english": "...It's not over. My spirit... shall be reborn... in a new land.",
						"japanese": "…終わりではない。私の魂は…新たな地で…再び生まれるだろう。",
						"chinese": "……这并非结束。我的精神……将在新的土地上……再次重生。",
						"french": "...Ce n'est pas la fin. Mon esprit... renaîtra... sur une nouvelle terre.",
						"spanish": "...No es el final. Mi espíritu... renacerá... en una nueva tierra.",
						"vietnamese": "...Chưa kết thúc đâu. Tinh thần của ta... sẽ tái sinh... trên một vùng đất mới.",
						"thai": "...ยังไม่จบ. วิญญาณของข้า... จะกลับมาเกิดใหม่... ในดินแดนใหม่.",
						"hindi": "...यह अंत नहीं है। मेरी आत्मा... एक नई भूमि में... फिर से जन्म लेगी।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…강함의 끝은 정복이 아니었어.",
						"english": "...The pinnacle of strength wasn't conquest.",
						"japanese": "…強さの果ては征服ではなかった。",
						"chinese": "……力量的终点并非征服。",
						"french": "...Le summum de la force n'était pas la conquête.",
						"spanish": "...El fin de la fuerza no era la conquista.",
						"vietnamese": "...Đỉnh cao của sức mạnh không phải là chinh phục.",
						"thai": "...จุดสูงสุดของความแข็งแกร่งไม่ใช่การพิชิต",
						"hindi": "...शक्ति का अंत विजय नहीं था।"
					},
					"speaker": "ivar",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 설원을 지켜냈어.",
						"english": "We defended the snowy plains.",
						"japanese": "我々は雪原を守り抜いた。",
						"chinese": "我们守住了雪原。",
						"french": "Nous avons défendu la plaine enneigée.",
						"spanish": "Defendimos las llanuras nevadas.",
						"vietnamese": "Chúng ta đã bảo vệ được bình nguyên tuyết.",
						"thai": "เราปกป้องทุ่งหิมะได้แล้ว",
						"hindi": "हमने बर्फीले मैदानों की रक्षा की।"
					},
					"speaker": "character_any",
					"emotion": "happy"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "Haraldr의 깃발이 쓰러졌다. 하지만 그의 야망은 사라지지 않았다.",
						"english": "Haraldr's banner fell. But his ambition did not vanish.",
						"japanese": "ハラルドルの旗は倒れた。しかし、彼の野望は消え去らなかった。",
						"chinese": "哈拉尔德的旗帜倒下了。但他的野心并未消散。",
						"french": "Le drapeau d'Haraldr est tombé. Mais son ambition n'a pas disparu.",
						"spanish": "La bandera de Haraldr cayó. Pero su ambición no se desvaneció.",
						"vietnamese": "Lá cờ của Haraldr đã đổ. Nhưng tham vọng của hắn không hề biến mất.",
						"thai": "ธงของฮาราลเดอร์ล้มลง แต่ความทะเยอทะยานของเขาก็ยังไม่หายไป",
						"hindi": "हरल्ड्र का झंडा गिर गया। पर उसकी महत्वाकांक्षा मिट्टी नहीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "영토는 여전히 얼어붙어 있었고, 새로운 강자가 그 자리를 노리고 있었다.",
						"english": "The territory remained frozen, and a new powerful contender eyed its place.",
						"japanese": "領土は依然として凍てつき、新たな強者がその座を狙っていた。",
						"chinese": "领土依然冰封，新的强者正觊觎着那个位置。",
						"french": "Le territoire restait gelé, et un nouveau puissant rival convoitait sa place.",
						"spanish": "El territorio permanecía congelado, y un nuevo y poderoso contendiente acechaba ese lugar.",
						"vietnamese": "Lãnh thổ vẫn bị đóng băng, và một thế lực mới đang nhăm nhe vị trí đó.",
						"thai": "ดินแดนยังคงถูกแช่แข็ง และผู้แข็งแกร่งคนใหม่ก็จ้องมองตำแหน่งนั้น",
						"hindi": "क्षेत्र अभी भी जमा हुआ था, और एक नया शक्तिशाली दावेदार उस जगह पर नज़र गड़ाए हुए था।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"설원 전체가 거대한 시장으로 변해갔다.",
			"Haraldr의 깃발이 꽂히는 곳마다, 새로운 질서가 선포되었다.",
			"그것은 판매를 가장한 정복이었다.",
			"그리고 그 끝에서, 이바르는 자신의 그림자를 보았다."
		],
		"english": [
			"The entire snowfield transformed into a vast market.",
			"Wherever Haraldr's banner was planted, a new order was proclaimed.",
			"It was a conquest disguised as trade.",
			"And at its end, Ivar saw his own shadow."
		],
		"japanese": [
			"雪原全体が巨大な市場へと変貌していった。",
			"ハラルドルの旗が立てられる場所には、新たな秩序が宣言された。",
			"それは販売を装った征服だった。",
			"そしてその果てに、イヴァルは自身の影を見た。"
		],
		"chinese": [
			"整个雪原变成了一个巨大的市场。",
			"哈拉尔德的旗帜插到之处，新的秩序便随之宣告。",
			"那是以销售为名的征服。",
			"而在这尽头，伊瓦尔看到了自己的影子。"
		],
		"french": [
			"L'intégralité de la toundra se transforma en un immense marché.",
			"Partout où la bannière de Haraldr était plantée, un nouvel ordre était proclamé.",
			"C'était une conquête déguisée en vente.",
			"Et à la fin, Ivar vit sa propre ombre."
		],
		"spanish": [
			"Todo el campo nevado se transformó en un vasto mercado.",
			"Dondequiera que se clavaba la bandera de Haraldr, se proclamaba un nuevo orden.",
			"Era una conquista disfrazada de venta.",
			"Y al final, Ivar vio su propia sombra."
		],
		"vietnamese": [
			"Toàn bộ vùng tuyết nguyên biến thành một khu chợ khổng lồ.",
			"Bất cứ nơi nào lá cờ của Haraldr được cắm, một trật tự mới đều được tuyên bố.",
			"Đó là một cuộc chinh phục được che đậy dưới chiêu bài buôn bán.",
			"Và đến cuối cùng, Ivar đã nhìn thấy bóng tối của chính mình."
		],
		"thai": [
			"ทุ่งหิมะทั้งหมดได้กลายสภาพเป็นตลาดขนาดใหญ่",
			"ทุกที่ที่ธงของ Haraldr ถูกปักลง ความสงบเรียบร้อยใหม่ก็ถูกประกาศ",
			"มันคือการพิชิตที่แฝงมาในรูปของการค้า",
			"และในท้ายที่สุด Ivar ก็ได้เห็นเงาของตัวเอง"
		],
		"hindi": [
			"पूरा बर्फ़ीला मैदान एक विशाल बाज़ार में बदल गया।",
			"जहाँ भी हेराल्ड्र का झंडा फहराया जाता, एक नई व्यवस्था घोषित हो जाती।",
			"यह बिक्री के भेष में एक विजय थी।",
			"और उसके अंत में, इवर ने अपनी परछाई देखी।"
		]
	},
	"epilogue": {
		"korean": [
			"Haraldr의 광기는 멈췄다.",
			"그러나 설원의 얼음은 녹지 않았다.",
			"승리였을까, 아니면 또 다른 시작이었을까.",
			"이바르는 여전히 강함의 의미를 찾고 있었다.",
			"새로운 그림자가 얼어붙은 땅에 드리웠다."
		],
		"english": [
			"Haraldr's madness ceased.",
			"Yet the snowfield's ice did not melt.",
			"Was it a victory, or merely another beginning?",
			"Ivar was still searching for the meaning of strength.",
			"A new shadow fell upon the frozen land."
		],
		"japanese": [
			"ハラルドルの狂気は止まった。",
			"しかし、雪原の氷は溶けなかった。",
			"それは勝利だったのか、それとも新たな始まりだったのか。",
			"イヴァルは未だ強さの意味を探していた。",
			"新たな影が凍てついた地に差し込んだ。"
		],
		"chinese": [
			"哈拉尔德的疯狂停止了。",
			"然而，雪原的冰并未融化。",
			"那是胜利，还是另一个开始？",
			"伊瓦尔仍在寻找力量的意义。",
			"新的阴影笼罩在冰冻的土地上。"
		],
		"french": [
			"La folie de Haraldr cessa.",
			"Cependant, la glace de la toundra ne fondit pas.",
			"Était-ce une victoire, ou juste un autre commencement ?",
			"Ivar cherchait toujours le sens de la force.",
			"Une nouvelle ombre tomba sur la terre gelée."
		],
		"spanish": [
			"La locura de Haraldr cesó.",
			"Sin embargo, el hielo del campo nevado no se derritió.",
			"¿Fue una victoria o solo otro comienzo?",
			"Ivar seguía buscando el significado de la fuerza.",
			"Una nueva sombra cayó sobre la tierra helada."
		],
		"vietnamese": [
			"Sự điên loạn của Haraldr đã dừng lại.",
			"Tuy nhiên, băng tuyết trên vùng tuyết nguyên vẫn không tan chảy.",
			"Đó là một chiến thắng, hay chỉ là một khởi đầu mới?",
			"Ivar vẫn đang tìm kiếm ý nghĩa của sức mạnh.",
			"Một bóng tối mới bao trùm lên vùng đất đóng băng."
		],
		"thai": [
			"ความบ้าคลั่งของ Haraldr ได้หยุดลงแล้ว",
			"แต่ธารน้ำแข็งบนทุ่งหิมะก็ยังไม่ละลาย",
			"มันคือชัยชนะ หรือเป็นเพียงจุดเริ่มต้นใหม่อีกครั้งกันแน่",
			"Ivar ยังคงค้นหาความหมายของความแข็งแกร่ง",
			"เงาใหม่ทาบทับลงบนแผ่นดินที่เยือกแข็ง"
		],
		"hindi": [
			"हेराल्ड्र का पागलपन रुक गया।",
			"लेकिन बर्फ़ीले मैदान की बर्फ़ नहीं पिघली।",
			"क्या यह जीत थी, या बस एक और शुरुआत?",
			"इवर अभी भी ताक़त के मायने तलाश रहा था।",
			"एक नई परछाई जमी हुई ज़मीन पर पड़ गई।"
		]
	}
} as const;
