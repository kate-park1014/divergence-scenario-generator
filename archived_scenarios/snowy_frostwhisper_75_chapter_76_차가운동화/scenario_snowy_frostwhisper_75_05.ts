export const scenario_snowy_frostwhisper_75_05 = {
	"scenario_id": "snowy_frostwhisper_75_05",
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
		"pool_id": "pool_ArcticLament_Frostwhisper_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 눈보라가 휘몰아쳤다. 그 중심에, 낡은 바이킹의 도끼가 박혀 있었다.",
						"english": "A cold blizzard raged. In its center, an old Viking axe was embedded.",
						"japanese": "冷たい吹雪が吹き荒れた。その中心には、古いバイキングの斧が突き刺さっていた。",
						"chinese": "寒冷的暴风雪肆虐。其中心，插着一把古老的维京战斧。",
						"french": "Une froide tempête de neige faisait rage. En son centre, une vieille hache viking était plantée.",
						"spanish": "Una fría ventisca rugía. En su centro, un viejo hacha vikinga estaba incrustada.",
						"vietnamese": "Cơn bão tuyết lạnh giá hoành hành. Ở trung tâm, một chiếc rìu Viking cũ đã bị đóng vào.",
						"thai": "พายุหิมะอันหนาวเหน็บโหมกระหน่ำ ณ ใจกลาง มีขวานไวกิ้งเก่าแก่ปักอยู่",
						"hindi": "एक ठंडी बर्फीली तूफ़ान उग्र था। उसके केंद्र में, एक पुरानी वाइकिंग कुल्हाड़ी धँसी हुई थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기까지 온 거야?",
						"english": "You made it this far?",
						"japanese": "ここまで来たのか？",
						"chinese": "你走到这里了？",
						"french": "Tu es venu jusqu'ici ?",
						"spanish": "¿Llegaste hasta aquí?",
						"vietnamese": "Bạn đã đến tận đây sao?",
						"thai": "เจ้ามาถึงที่นี่แล้วรึ?",
						"hindi": "तुम इतनी दूर आ गए?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "…결국, 이곳까지 왔군. 어리석은 인간들.",
						"english": "...So, you've made it this far. Foolish humans.",
						"japanese": "「…結局、ここまで来たか。愚かな人間たちめ。」",
						"chinese": "「…终究还是到这里了。愚蠢的人类。」",
						"french": "...Vous avez finalement atteint cet endroit. Humains stupides.",
						"spanish": "...Al final, llegasteis hasta aquí. Humanos necios.",
						"vietnamese": "...Cuối cùng thì cũng đến được đây. Những con người ngu ngốc.",
						"thai": "...ในที่สุดก็มาถึงที่นี่จนได้ พวกมนุษย์โง่เขลาเอ๋ย",
						"hindi": "...आखिरकार, तुम यहाँ तक पहुँच गए। मूर्ख इंसान।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "애처로운 신음? 그건 전부 기만이었다.",
						"english": "Pitiful moans? It was all deception.",
						"japanese": "「哀れなうめき声だと？あれは全て欺瞞だった。」",
						"chinese": "「可怜的呻吟？那都是欺骗。」",
						"french": "Des gémissements pitoyables ? Ce n'était que tromperie.",
						"spanish": "¿Lamentos patéticos? Todo fue un engaño.",
						"vietnamese": "Những tiếng rên rỉ đáng thương? Tất cả chỉ là dối trá.",
						"thai": "เสียงครวญครางน่าสมเพช? ทั้งหมดนั่นเป็นแค่การหลอกลวง",
						"hindi": "दयनीय कराहें? वह सब छल था।"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "프로스트위스퍼… 그놈은 희망을 미끼로, 모든 생명의 온기를 빼앗지.",
						"english": "Frostwhisper... He uses hope as bait, stealing the warmth from all life.",
						"japanese": "「フロストウィスパー…あやつは希望を餌に、全ての命の温もりを奪う。」",
						"chinese": "「霜语者…他以希望为饵，夺走所有生命的温暖。」",
						"french": "Frostwhisper... Il se sert de l'espoir comme appât, dérobant la chaleur de toute vie.",
						"spanish": "Frostwhisper... Él usa la esperanza como cebo, robando el calor de toda vida.",
						"vietnamese": "Frostwhisper... Hắn dùng hy vọng làm mồi nhử, tước đoạt sự ấm áp của mọi sinh linh.",
						"thai": "ฟรอสต์วิสเปอร์... มันใช้ความหวังเป็นเหยื่อ ลิดรอนความอบอุ่นจากทุกชีวิต",
						"hindi": "फ्रॉस्टविस्पर... वह उम्मीद को चारा बनाकर, सभी जीवों की गर्माहट छीन लेता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "온기를 빼앗아?",
						"english": "Steal warmth?",
						"japanese": "「温もりを奪う？」",
						"chinese": "「夺走温暖？」",
						"french": "Voler la chaleur ?",
						"spanish": "¿Robar el calor?",
						"vietnamese": "Tước đoạt sự ấm áp sao?",
						"thai": "ลิดรอนความอบอุ่นเหรอ?",
						"hindi": "गर्माहट छीन ले?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그래. 자신의 얼어붙은 정수를 유지하기 위해. 영원한 겨울을 지배하려 하는 기생적인 공포다.",
						"english": "Yes. To sustain its frozen essence. It's a parasitic terror seeking to dominate an eternal winter.",
						"japanese": "「そうだ。自らの凍てついた本質を保つためにな。永遠の冬を支配しようとする、寄生的な恐怖だ。」",
						"chinese": "「没错。为了维持其冰冻的本质。那是一种寄生般的恐惧，企图主宰永恒的冬天。」",
						"french": "Oui. Pour maintenir son essence gelée. C'est une terreur parasitaire qui cherche à dominer un hiver éternel.",
						"spanish": "Sí. Para mantener su esencia congelada. Es un terror parasitario que busca dominar un invierno eterno.",
						"vietnamese": "Đúng vậy. Để duy trì bản chất băng giá của nó. Đó là một nỗi kinh hoàng ký sinh, tìm cách thống trị một mùa đông vĩnh cửu.",
						"thai": "ใช่ เพื่อรักษาสภาวะเยือกแข็งของมัน มันคือความหวาดกลัวแบบปรสิตที่มุ่งครอบงำฤดูหนาวอันเป็นนิรันดร์",
						"hindi": "हाँ। अपनी जमी हुई पहचान को बनाए रखने के लिए। यह एक परजीवी आतंक है जो एक शाश्वत शीतकाल पर हावी होना चाहता है।"
					},
					"emotion": "angry"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핀의 절망적인 행동? 힐드의 왜곡된 예언?",
						"english": "Finn's desperate acts? Hild's twisted prophecies?",
						"japanese": "「フィンの絶望的な行動？ヒルドの歪んだ予言？」",
						"chinese": "「芬的绝望之举？希尔德扭曲的预言？」",
						"french": "Les actes désespérés de Finn ? Les prophéties tordues de Hild ?",
						"spanish": "¿Las acciones desesperadas de Finn? ¿Las profecías retorcidas de Hild?",
						"vietnamese": "Những hành động tuyệt vọng của Finn? Những lời tiên tri méo mó của Hild?",
						"thai": "การกระทำอันสิ้นหวังของฟินน์? คำพยากรณ์ที่บิดเบือนของฮิลด์?",
						"hindi": "फिन के हताश कार्य? हिल्ड की विकृत भविष्यवाणियां?"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두 그 냉기의 간계였다. 너희를 더 깊은 함정으로 끌어들이기 위한.",
						"english": "All were but the chill's deceit. To lure you deeper into the trap.",
						"japanese": "「全てはあの冷気の奸計だった。お前たちをもっと深い罠へ引きずり込むための。」",
						"chinese": "「一切都是那寒气的诡计。为了将你们引入更深的陷阱。」",
						"french": "Tout n'était que la ruse de cette froideur. Pour vous attirer plus profondément dans le piège.",
						"spanish": "Todo fue una estratagema de ese frío. Para atraerlos a una trampa más profunda.",
						"vietnamese": "Tất cả đều là mưu mô của sự lạnh lẽo đó. Để dụ dỗ các ngươi rơi vào cái bẫy sâu hơn.",
						"thai": "ทั้งหมดนั้นคือเล่ห์กลของความเย็นยะเยือก เพื่อล่อลวงพวกเจ้าให้ติดกับดักที่ลึกกว่าเดิม",
						"hindi": "सब उस ठंडक की कपटपूर्ण चाल थी। तुम्हें और गहरे जाल में फंसाने के लिए।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼… 우리 마을도.",
						"english": "Then... our village too.",
						"japanese": "「では…私たちの村も。」",
						"chinese": "「那么…我们的村庄也…」",
						"french": "Alors... notre village aussi.",
						"spanish": "Entonces... nuestro pueblo también.",
						"vietnamese": "Vậy thì... làng của chúng ta cũng vậy sao?",
						"thai": "ถ้าอย่างนั้น... หมู่บ้านของเราก็ด้วยเหรอ",
						"hindi": "तो... हमारा गाँव भी।"
					}
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "…(눈물 흘리며) 그래. 모든 희망과 따뜻함이… 그놈의 먹이였다.",
						"english": "...(Tears welling) Yes. All hope and warmth... were its prey.",
						"japanese": "「…(涙を流しながら) そうだ。全ての希望と温かさが…あやつの餌だったのだ。」",
						"chinese": "「…(流着泪) 是的。所有的希望和温暖…都是它的猎物。」",
						"french": "...(Larmes aux yeux) Oui. Toute l'espoir et la chaleur... étaient sa proie.",
						"spanish": "...(Llorando) Sí. Toda la esperanza y la calidez... fueron su presa.",
						"vietnamese": "...(Rưng rưng nước mắt) Đúng vậy. Mọi hy vọng và sự ấm áp... đều là con mồi của nó.",
						"thai": "...(หลั่งน้ำตา) ใช่แล้ว ความหวังและความอบอุ่นทั้งหมด... เป็นเหยื่อของมัน",
						"hindi": "...(आँसू बहाते हुए) हाँ। सारी उम्मीद और गर्माहट... उसका शिकार थी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "네가 찾던 따뜻한 온기? 이곳엔 없어.",
						"english": "The warmth you sought? It's not here.",
						"japanese": "「お前が探していた温もり？ここにはない。」",
						"chinese": "「你所寻找的温暖？这里没有。」",
						"french": "La chaleur que tu cherchais ? Elle n'est pas ici.",
						"spanish": "¿El calor que buscabas? No está aquí.",
						"vietnamese": "Sự ấm áp ngươi tìm kiếm ư? Nơi đây không có.",
						"thai": "ความอบอุ่นที่เจ้าตามหา? มันไม่มีที่นี่หรอก",
						"hindi": "वह गर्माहट जिसे तुम खोज रहे थे? वह यहाँ नहीं है।"
					},
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오직 차가운 진실만이, 유일한 생존 법칙이다.",
						"english": "Only the cold truth is the sole rule of survival.",
						"japanese": "冷たい真実だけが、唯一の生存法則だ。",
						"chinese": "只有冰冷的真相，才是唯一的生存法则。",
						"french": "Seule la froide vérité est la seule règle de survie.",
						"spanish": "Solo la fría verdad es la única ley de supervivencia.",
						"vietnamese": "Chỉ có sự thật lạnh lùng, là quy luật sinh tồn duy nhất.",
						"thai": "มีเพียงความจริงอันเยือกเย็นเท่านั้นที่เป็นกฎแห่งการเอาชีวิตรอดเพียงหนึ่งเดียว",
						"hindi": "केवल कठोर सत्य ही, जीवित रहने का एकमात्र नियम है।"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "우리는… 여기까지 온 게 잘못이었던 건가.",
						"english": "Was it a mistake for us to come this far?",
						"japanese": "我々が…ここまで来たのは間違いだったのか。",
						"chinese": "我们…来到这里是不是个错误？",
						"french": "Avons-nous… eu tort de venir jusqu'ici ?",
						"spanish": "Fue un error que llegáramos hasta aquí?",
						"vietnamese": "Chúng ta… đến đây có phải là sai lầm không?",
						"thai": "พวกเรา… ที่มาถึงนี่มันผิดงั้นหรือ",
						"hindi": "क्या हम… यहाँ तक आकर गलती कर गए?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이제 돌아갈 곳은 없다. 너희의 모든 희망이, 절규로 변할 순간이다.",
						"english": "There's no turning back now. It's the moment all your hopes turn into screams.",
						"japanese": "もう戻る場所はない。お前たちの全ての希望が、絶叫に変わる瞬間だ。",
						"chinese": "已无回头路。你们所有的希望，都将化为绝望的尖叫。",
						"french": "Il n'y a plus de retour possible. C'est le moment où tous vos espoirs se transformeront en cris.",
						"spanish": "Ya no hay vuelta atrás. Es el momento en que todas vuestras esperanzas se convertirán en gritos.",
						"vietnamese": "Không còn đường quay lại. Đây là khoảnh khắc mọi hy vọng của các ngươi, sẽ biến thành tiếng kêu gào.",
						"thai": "ไม่มีที่ให้หวนกลับอีกแล้ว นี่คือช่วงเวลาที่ความหวังทั้งหมดของพวกเจ้าจะแปรเปลี่ยนเป็นเสียงกรีดร้อง",
						"hindi": "अब वापस जाने की कोई जगह नहीं है। यह वह क्षण है जब तुम्हारी सारी आशाएँ, चीखों में बदल जाएँगी।"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "저 도끼가, 저 비명 소리가… 모두 그놈의 잔해다.",
						"english": "That axe, those screams… they are all remnants of that thing.",
						"japanese": "あの斧が、あの悲鳴が…全て奴の残骸だ。",
						"chinese": "那把斧头，那些尖叫声…都是那家伙的残骸。",
						"french": "Cette hache, ces cris… ce sont tous les vestiges de cette chose.",
						"spanish": "Esa hacha, esos gritos… son todos restos de esa cosa.",
						"vietnamese": "Cái rìu đó, những tiếng la hét đó… đều là tàn tích của tên đó.",
						"thai": "ขวานเล่มนั้น เสียงกรีดร้องนั่น… ล้วนเป็นเศษซากของมัน",
						"hindi": "वह कुल्हाड़ी, वह चीखें… सब उस चीज़ के अवशेष हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"emotion": "angry",
					"content": {
						"korean": "저놈은… 영혼이 아니야. 극한의 설원이 낳은, 살아있는 냉기 그 자체다!",
						"english": "That thing… it's not a soul. It's living coldness itself, born from the extreme snowfield!",
						"japanese": "奴は…魂じゃない。極限の雪原が産み出した、生ける冷気そのものだ！",
						"chinese": "那家伙…不是灵魂。它是极寒雪原孕育出的，活生生的寒气本身！",
						"french": "Cette chose… ce n'est pas une âme. C'est la froideur vivante elle-même, née du champ de neige extrême !",
						"spanish": "Esa cosa… no es un alma. ¡Es la frialdad viviente misma, nacida del campo de nieve extremo!",
						"vietnamese": "Tên đó… không phải là linh hồn. Nó là sự lạnh giá sống động, được sinh ra từ vùng tuyết nguyên khắc nghiệt!",
						"thai": "เจ้าตัวนั้น… ไม่ใช่ดวงวิญญาณ มันคือความเย็นยะเยือกที่มีชีวิตซึ่งถือกำเนิดจากทุ่งหิมะสุดขั้ว!",
						"hindi": "वह चीज़… कोई आत्मा नहीं है। वह तो चरम बर्फीले मैदान से उत्पन्न, जीवित शीतलता ही है!"
					},
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "ivar",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 도끼가 섬뜩하게 진동했다. 거대한 냉기가, 마침내 그 실체를 드러냈다.",
						"english": "The frozen axe vibrated eerily. The immense coldness finally revealed its true form.",
						"japanese": "凍てついた斧が不気味に振動した。巨大な冷気が、ついにその実体を現した。",
						"chinese": "冰冷的斧头诡异地颤动着。巨大的寒气，终于露出了它的真面目。",
						"french": "La hache gelée vibra étrangement. L'immense froideur révéla enfin sa véritable forme.",
						"spanish": "El hacha congelada vibró de forma espeluznante. La inmensa frialdad finalmente reveló su verdadera forma.",
						"vietnamese": "Chiếc rìu đóng băng rung động rùng rợn. Hơi lạnh khổng lồ, cuối cùng đã lộ ra hình hài thật sự.",
						"thai": "ขวานที่ถูกแช่แข็งสั่นสะเทือนอย่างน่าขนลุก พลังงานแห่งความเย็นอันมหาศาลได้เผยร่างจริงออกมาในที่สุด",
						"hindi": "जमी हुई कुल्हाड़ी भयावह रूप से काँपी। विशाल शीतलता ने, अंततः अपना वास्तविक रूप प्रकट किया।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…너희의 따뜻한 심장이, 내 영원한 겨울을 완성할 거야.",
						"english": "…Your warm hearts will complete my eternal winter.",
						"japanese": "…お前たちの温かい心臓が、私の永遠の冬を完成させるだろう。",
						"chinese": "…你们温暖的心脏，将完成我永恒的冬天。",
						"french": "…Vos cœurs chaleureux achèveront mon hiver éternel.",
						"spanish": "…Vuestros corazones cálidos completarán mi invierno eterno.",
						"vietnamese": "…Trái tim ấm áp của các ngươi, sẽ hoàn thành mùa đông vĩnh cửu của ta.",
						"thai": "…หัวใจอันอบอุ่นของพวกเจ้า จะทำให้ฤดูหนาวอันเป็นนิรันดร์ของข้าสมบูรณ์",
						"hindi": "…तुम्हारे गर्म दिल, मेरी शाश्वत सर्दियों को पूरा करेंगे।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "감히…!",
						"english": "How dare you…!",
						"japanese": "貴様…！",
						"chinese": "竟敢…！",
						"french": "Comment osez-vous… !",
						"spanish": "¡Cómo osas…!",
						"vietnamese": "Dám…!",
						"thai": "บังอาจ…!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई…!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "격렬한 싸움 끝에, 냉기의 기운이 잦아들었다.",
						"english": "After an intense battle, the aura of coldness subsided.",
						"japanese": "激しい戦いの末、冷気の気配が和らいだ。",
						"chinese": "激烈的战斗结束后，寒气渐渐消散。",
						"french": "Après un combat acharné, l'aura de froideur s'est apaisée.",
						"spanish": "Tras una intensa batalla, el aura de frialdad disminuyó.",
						"vietnamese": "Sau trận chiến khốc liệt, khí lạnh dần lắng xuống.",
						"thai": "หลังจากการต่อสู้อันดุเดือด พลังงานแห่งความเย็นก็ค่อยๆ ลดลง",
						"hindi": "एक भयंकर लड़ाई के बाद, शीतलता की शक्ति कम हो गई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 인간들… 나에게 희망을 바쳐라!",
						"english": "Foolish humans… Offer your hopes to me!",
						"japanese": "愚かな人間ども…私に希望を捧げよ！",
						"chinese": "愚蠢的人类…将你们的希望献给我吧！",
						"french": "Humains stupides… Offrez-moi vos espoirs !",
						"spanish": "Humanos estúpidos… ¡Ofrecedme vuestras esperanzas!",
						"vietnamese": "Loài người ngu ngốc… Hãy dâng hy vọng của các ngươi cho ta!",
						"thai": "มนุษย์ผู้โง่เขลา… จงมอบความหวังของเจ้าให้ข้า!",
						"hindi": "मूर्ख मनुष्यों… अपनी आशाएँ मुझे अर्पित करो!"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "끝났나…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "C'est fini…?",
						"spanish": "¿Se acabó…?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วเหรอ…?",
						"hindi": "क्या यह खत्म हो गया…?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "하지만 승리의 기쁨은 없었다. 모든 온기가 사라진 듯, 텅 빈 공간만이 남았다.",
						"english": "But there was no joy in victory. As if all warmth had vanished, only an empty space remained.",
						"japanese": "しかし、勝利の喜びはなかった。すべての温もりが消え去ったかのように、ただ虚ろな空間だけが残った。",
						"chinese": "然而，胜利的喜悦并未降临。仿佛所有温暖都已消散，只留下了一片空虚。",
						"french": "Mais il n'y avait aucune joie dans la victoire. Comme si toute chaleur avait disparu, seul un espace vide demeurait.",
						"spanish": "Pero no había alegría en la victoria. Como si todo el calor hubiera desaparecido, solo quedó un espacio vacío.",
						"vietnamese": "Nhưng không có niềm vui chiến thắng. Như thể mọi hơi ấm đã biến mất, chỉ còn lại một không gian trống rỗng.",
						"thai": "แต่ไม่มีความสุขในชัยชนะ ราวกับว่าความอบอุ่นทั้งหมดได้หายไป เหลือเพียงพื้นที่ว่างเปล่า",
						"hindi": "परंतु जीत में कोई खुशी नहीं थी। मानो सारी गर्माहट गायब हो गई हो, केवल एक खाली जगह बची थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "너희의 온기는… 내게 바쳐질 것이다.",
						"english": "Your warmth… shall be offered to me.",
						"japanese": "お前たちの温もりは… 私に捧げられるだろう。",
						"chinese": "你们的温暖… 将奉献给我。",
						"french": "Votre chaleur… me sera offerte.",
						"spanish": "Vuestro calor… me será ofrecido.",
						"vietnamese": "Hơi ấm của các ngươi… sẽ dâng hiến cho ta.",
						"thai": "ความอบอุ่นของพวกเจ้า… จะถูกมอบให้ข้า",
						"hindi": "तुम्हारी गर्माहट… मुझे अर्पित की जाएगी।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직…!",
						"english": "No… not yet…!",
						"japanese": "いや… まだ…！",
						"chinese": "不… 还没…！",
						"french": "Non… pas encore…!",
						"spanish": "¡No… todavía no…!",
						"vietnamese": "Không… chưa…!",
						"thai": "ไม่… ยัง…!",
						"hindi": "नहीं… अभी नहीं…!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영원한 겨울 속에서, 절규하며 얼어붙어라.",
						"english": "In an eternal winter, scream and freeze.",
						"japanese": "永遠の冬の中で、絶叫し凍てつけ。",
						"chinese": "在永恒的冬天中，尖叫着冻结吧。",
						"french": "Dans un hiver éternel, hurlez et congelez-vous.",
						"spanish": "En un invierno eterno, gritad y congelaros.",
						"vietnamese": "Trong mùa đông vĩnh cửu, hãy gào thét và đóng băng.",
						"thai": "จงกรีดร้องและแข็งตายในฤดูหนาวอันเป็นนิรันดร์",
						"hindi": "अनंत शीतकाल में, चीखते हुए जम जाओ।"
					},
					"speaker": "boss",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"눈보라의 심장부. 그곳엔 오랜 진실이 얼어붙어 있었다.",
			"애처로운 노랫소리가 모든 것을 유혹했지만.",
			"그 끝은, 가장 잔혹한 희망의 배신이었다.",
			"모든 온기가 절규로 변하는 곳. 이제, 진정한 공포가 깨어난다."
		],
		"english": [
			"In the heart of the blizzard, an ancient truth lay frozen.",
			"A mournful melody lured all.",
			"Its end was the most cruel betrayal of hope.",
			"Where all warmth turns to screams. Now, true horror awakens."
		],
		"japanese": [
			"吹雪の心臓部。そこには、古き真実が凍てついていた。",
			"哀れな歌声がすべてを誘惑したが。",
			"その終わりは、最も残酷な希望の裏切りだった。",
			"すべての温もりが絶叫に変わる場所。今、真の恐怖が目覚める。"
		],
		"chinese": [
			"在暴风雪的中心，一个古老的真相被冰封着。",
			"一曲悲歌诱惑着一切。",
			"其结局，却是希望最残酷的背叛。",
			"所有温暖都变为尖叫的地方。现在，真正的恐惧苏醒了。"
		],
		"french": [
			"Au cœur de la tempête de neige, une vérité ancienne gisait gelée.",
			"Un chant plaintif séduisait tout.",
			"Sa fin fut la plus cruelle trahison de l'espoir.",
			"Là où toute chaleur se transforme en cris. Maintenant, la véritable horreur s'éveille."
		],
		"spanish": [
			"En el corazón de la tormenta de nieve, una antigua verdad yacía congelada.",
			"Una melodía lastimera seducía a todo.",
			"Su final fue la más cruel traición de la esperanza.",
			"Donde todo calor se convierte en gritos. Ahora, el verdadero horror despierta."
		],
		"vietnamese": [
			"Trong tâm bão tuyết, một sự thật cổ xưa đã bị đóng băng.",
			"Giai điệu bi ai đã quyến rũ tất cả.",
			"Kết cục của nó là sự phản bội tàn khốc nhất của hy vọng.",
			"Nơi mọi sự ấm áp biến thành tiếng thét. Giờ đây, nỗi kinh hoàng thực sự thức tỉnh."
		],
		"thai": [
			"ณ ใจกลางพายุหิมะ ความจริงเก่าแก่ได้ถูกแช่แข็งไว้",
			"เสียงเพลงที่น่าสงสารเย้ายวนทุกสิ่ง",
			"จุดจบของมันคือการทรยศต่อความหวังที่โหดร้ายที่สุด",
			"ที่ซึ่งความอบอุ่นทั้งหมดกลายเป็นเสียงกรีดร้อง บัดนี้ ความหวาดกลัวที่แท้จริงได้ตื่นขึ้น"
		],
		"hindi": [
			"बर्फ़ीले तूफ़ान के दिल में, एक प्राचीन सत्य जमा हुआ था।",
			"एक दुखद धुन ने सबको लुभाया।",
			"उसका अंत, आशा का सबसे क्रूर विश्वासघात था।",
			"जहाँ सारी गर्माहट चीखों में बदल जाती है। अब, सच्चा भय जागता है।"
		]
	},
	"epilogue": {
		"korean": [
			"프로스트위스퍼는 잠시 침묵했다. 아니, 영원히 사라진 것일까.",
			"설원은 여전히 아름다웠지만, 모든 것은 얼어붙어 있었다.",
			"승리였는지, 아니면 더 큰 절망의 시작이었는지 알 수 없었다.",
			"오직 차가운 바람만이, 이 끝없는 설원을 맴돌 뿐이었다."
		],
		"english": [
			"Frostwhisper fell silent. Or perhaps, vanished forever.",
			"The snowfield was still beautiful, yet everything was frozen.",
			"It was uncertain if it was a victory, or the beginning of a greater despair.",
			"Only the cold wind lingered, circling this endless snowfield."
		],
		"japanese": [
			"フロストウィスパーはしばし沈黙した。いや、永遠に消え去ったのだろうか。",
			"雪原は依然として美しかったが、すべては凍てついていた。",
			"それが勝利だったのか、それともより大きな絶望の始まりだったのか、知る由もなかった。",
			"ただ冷たい風だけが、この果てしない雪原をさまようばかりだった。"
		],
		"chinese": [
			"霜语者沉默了片刻。抑或，是永远消失了？",
			"雪原依旧美丽，然而万物皆已冰封。",
			"不知是胜利，抑或是更大绝望的开端。",
			"唯有寒风，在这无尽的雪原上盘旋。"
		],
		"french": [
			"Murmure-Givre se tut. Ou peut-être, avait-il disparu à jamais ?",
			"La plaine enneigée était toujours belle, mais tout était gelé.",
			"Il était incertain si c'était une victoire, ou le début d'un désespoir plus grand.",
			"Seul le vent froid persistait, tourbillonnant dans cette plaine enneigée infinie."
		],
		"spanish": [
			"Susurrohelado calló. O quizás, ¿desapareció para siempre?",
			"El campo nevado seguía siendo hermoso, pero todo estaba congelado.",
			"Era incierto si fue una victoria, o el comienzo de una desesperación mayor.",
			"Solo el viento frío permanecía, rondando este campo nevado interminable."
		],
		"vietnamese": [
			"Frostwhisper im lặng một lát. Hay, đã biến mất mãi mãi?",
			"Cánh đồng tuyết vẫn đẹp, nhưng mọi thứ đã bị đóng băng.",
			"Không rõ đó là chiến thắng, hay khởi đầu của một tuyệt vọng lớn hơn.",
			"Chỉ có làn gió lạnh lướt qua, quanh quẩn trên cánh đồng tuyết vô tận này."
		],
		"thai": [
			"ฟรอสต์วิสเปอร์เงียบไปชั่วขณะ หรือว่ามันหายไปตลอดกาล?",
			"ทุ่งหิมะยังคงสวยงาม แต่ทุกสิ่งถูกแช่แข็งไว้",
			"ไม่แน่ใจว่ามันคือชัยชนะ หรือจุดเริ่มต้นของความสิ้นหวังที่ยิ่งใหญ่กว่า",
			"เพียงสายลมหนาวพัดโชยวนเวียนอยู่ในทุ่งหิมะอันไร้ที่สิ้นสุดนี้"
		],
		"hindi": [
			"फ्रॉस्टविस्पर कुछ देर के लिए शांत हो गया। या शायद, हमेशा के लिए गायब हो गया?",
			"बर्फ़ीला मैदान अभी भी सुंदर था, फिर भी सब कुछ जमा हुआ था।",
			"यह अनिश्चित था कि यह जीत थी, या एक बड़े निराशा की शुरुआत थी।",
			"केवल ठंडी हवा ही इस अंतहीन बर्फीले मैदान में मंडरा रही थी।"
		]
	}
} as const;
