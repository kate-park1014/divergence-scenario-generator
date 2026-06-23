export const scenario_snowy_aesa_37_03 = {
	"scenario_id": "snowy_aesa_37_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
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
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "혹한의 바람이 뼈를 저미는 얼어붙은 대지. 발걸음마다 서리가 부서졌다.",
						"english": "The biting wind gnawed at bones on the frozen earth. Frost shattered with every step.",
						"japanese": "酷寒の風が骨を削る凍てつく大地。足取りごとに霜が砕けた。",
						"chinese": "严寒的冷风刺骨，在这冰冻的大地上。每一步，霜雪都在碎裂。",
						"french": "Le vent glacial rongeait les os sur la terre gelée. Le givre se brisait à chaque pas.",
						"spanish": "El viento gélido carcomía los huesos en la tierra helada. La escarcha se rompía con cada paso.",
						"vietnamese": "Gió lạnh cắt da cắt thịt trên nền đất đóng băng. Sương giá vỡ tan sau mỗi bước chân.",
						"thai": "ลมหนาวกัดกร่อนกระดูกบนพื้นดินน้ำแข็ง. เกล็ดน้ำแข็งแตกสลายทุกย่างก้าว",
						"hindi": "हड्डियों को चीरती हुई बर्फीली हवा जमी हुई धरती पर। हर कदम पर पाला टूटता गया।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝이 없는 겨울이야. 언제까지 이어지는 거지?",
						"english": "It's an endless winter. How long will it last?",
						"japanese": "終わりのない冬だ。いつまで続くんだ？",
						"chinese": "这是个无尽的冬天。会持续到什么时候？",
						"french": "C'est un hiver sans fin. Combien de temps cela va-t-il durer ?",
						"spanish": "Es un invierno interminable. ¿Hasta cuándo durará?",
						"vietnamese": "Đây là một mùa đông không hồi kết. Sẽ kéo dài đến bao giờ?",
						"thai": "นี่คือฤดูหนาวที่ไม่มีที่สิ้นสุด จะยาวนานไปถึงเมื่อไหร่กัน?",
						"hindi": "यह एक अंतहीन सर्दी है। यह कब तक चलेगी?"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "…끝? 이 겨울엔 끝이 없어. 오직 순환만이 있을 뿐.",
						"english": "...End? This winter has no end. Only a cycle.",
						"japanese": "…終わり？この冬に終わりはない。ただ循環があるだけだ。",
						"chinese": "……结束？这个冬天没有尽头。只有循环。",
						"french": "...Fin ? Cet hiver n'a pas de fin. Seulement un cycle.",
						"spanish": "...¿Fin? Este invierno no tiene fin. Solo un ciclo.",
						"vietnamese": "...Kết thúc? Mùa đông này không có hồi kết. Chỉ có sự tuần hoàn.",
						"thai": "...จบ? ฤดูหนาวนี้ไม่มีวันจบสิ้น มีแต่การหมุนเวียนเท่านั้น",
						"hindi": "...अंत? इस सर्दी का कोई अंत नहीं। केवल एक चक्र।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "누구지?",
						"english": "Who are you?",
						"japanese": "誰だ？",
						"chinese": "你是谁？",
						"french": "Qui es-tu ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "เจ้าเป็นใคร?",
						"hindi": "कौन हो तुम?"
					}
				},
				{
					"content": {
						"korean": "힐드. 얼어붙은 부족의 마지막 생존자.",
						"english": "Hild. The last survivor of the Frozen Tribe.",
						"japanese": "ヒルド。凍結部族の最後の生存者。",
						"chinese": "希尔德。冰冻部落的最后幸存者。",
						"french": "Hild. La dernière survivante de la Tribu Gelée.",
						"spanish": "Hild. La última superviviente de la Tribu Congelada.",
						"vietnamese": "Hild. Người sống sót cuối cùng của Bộ lạc Băng giá.",
						"thai": "ฮิลด์. ผู้รอดชีวิตคนสุดท้ายแห่งเผ่าเยือกแข็ง",
						"hindi": "हिल्ड। जमी हुई जनजाति का अंतिम उत्तरजीवी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "이 겨울은… 늘 그랬듯이, 다시 찾아왔어.",
						"english": "This winter… it has returned, as it always does.",
						"japanese": "この冬は…いつものように、またやってきた。",
						"chinese": "这个冬天……一如既往，又来了。",
						"french": "Cet hiver… il est revenu, comme toujours.",
						"spanish": "Este invierno… ha regresado, como siempre.",
						"vietnamese": "Mùa đông này… nó đã trở lại, như mọi khi.",
						"thai": "ฤดูหนาวนี้... มันกลับมาอีกครั้ง เช่นเคย",
						"hindi": "यह सर्दी… हमेशा की तरह, फिर आ गई है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "수많은 세대 동안, '영원의 속삭임'은 반복되어 왔어.",
						"english": "For countless generations, the 'Whisper of Eternity' has repeated.",
						"japanese": "数えきれない世代の間、「永遠の囁き」は繰り返されてきた。",
						"chinese": "历经无数世代，「永恒的低语」一直在重复。",
						"french": "Pendant d'innombrables générations, le 'Murmure de l'Éternité' s'est répété.",
						"spanish": "Durante innumerables generaciones, el 'Susurro de la Eternidad' se ha repetido.",
						"vietnamese": "Qua vô số thế hệ, 'Lời Thì Thầm Vĩnh Cửu' đã lặp lại.",
						"thai": "ตลอดหลายชั่วอายุคน 'เสียงกระซิบแห่งนิรันดร์' ได้เกิดขึ้นซ้ำแล้วซ้ำเล่า",
						"hindi": "अनगिनत पीढ़ियों से, 'अनंत की फुसफुसाहट' दोहराई जाती रही है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "반복된다고?",
						"english": "Repeated?",
						"japanese": "繰り返されるって？",
						"chinese": "重复？",
						"french": "Répété ?",
						"spanish": "¿Repetido?",
						"vietnamese": "Lặp lại sao?",
						"thai": "ซ้ำรึ?",
						"hindi": "दोहराया जाता है?"
					}
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "응. 매번 더 강해졌지. 마치… 저주처럼.",
						"english": "Yes. Each time, stronger. Like… a curse.",
						"japanese": "ええ。毎回、さらに強くなった。まるで…呪いのように。",
						"chinese": "是的。每一次都更强大。就像……一个诅咒。",
						"french": "Oui. Chaque fois, plus fort. Comme… une malédiction.",
						"spanish": "Sí. Cada vez, más fuerte. Como… una maldición.",
						"vietnamese": "Ừm. Mỗi lần, nó lại mạnh hơn. Giống như… một lời nguyền.",
						"thai": "ใช่ ทุกครั้ง มันแข็งแกร่งขึ้น ราวกับ… คำสาป",
						"hindi": "हाँ। हर बार, और मज़बूत। जैसे… एक अभिशाप।"
					}
				},
				{
					"content": {
						"korean": "차가운 바람 소리 속에서… '아에사'라는 이름이 들려와.",
						"english": "Amidst the cold wind's howl… the name 'Aesa' is heard.",
						"japanese": "冷たい風の音の中で…「アエサ」という名前が聞こえる。",
						"chinese": "在凛冽的风声中……「艾萨」这个名字被听到。",
						"french": "Au milieu du hurlement du vent froid… le nom d''Aesa' se fait entendre.",
						"spanish": "En medio del aullido del viento frío… el nombre de 'Aesa' se escucha.",
						"vietnamese": "Giữa tiếng gió lạnh rít gào… cái tên 'Aesa' được nghe thấy.",
						"thai": "ท่ามกลางเสียงลมหนาว... ได้ยินชื่อ 'เอซ่า'",
						"hindi": "ठंडी हवा के शोर में… 'एसा' नाम सुनाई देता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "대지에 깔린 깊고 섬뜩한 침묵은, 다가올 파괴의 시간을 알리는 듯했다. '영원의 속삭임'은 점차 가까워지고 있었다.",
						"english": "The deep, eerie silence blanketing the land seemed to herald a time of coming destruction. The 'Whisper of Eternity' was drawing nearer.",
						"japanese": "大地に敷かれた深く不気味な沈黙は、迫りくる破壊の時を告げているようだった。「永遠の囁き」は次第に近づいていた。",
						"chinese": "笼罩大地的深沉而诡异的寂静，仿佛预示着即将到来的毁灭时刻。「永恒的低语」正逐渐逼近。",
						"french": "Le silence profond et inquiétant qui recouvrait la terre semblait annoncer un temps de destruction imminente. Le 'Murmure de l'Éternité' se rapprochait progressivement.",
						"spanish": "El silencio profundo y espeluznante que cubría la tierra parecía anunciar un tiempo de destrucción inminente. El 'Susurro de la Eternidad' se acercaba gradualmente.",
						"vietnamese": "Sự im lặng sâu thẳm, rợn người bao trùm mặt đất dường như báo hiệu một thời điểm hủy diệt sắp đến. 'Lời Thì Thầm Vĩnh Cửu' đang dần tới gần.",
						"thai": "ความเงียบสงัดลึกซึ้งและน่าขนลุกที่ปกคลุมผืนดินดูเหมือนจะบ่งบอกถึงเวลาแห่งการทำลายล้างที่กำลังจะมาถึง 'เสียงกระซิบแห่งนิรันดร์' กำลังใกล้เข้ามาเรื่อยๆ",
						"hindi": "धरती पर छाया गहरा और भयावह सन्नाटा, आने वाले विनाश के समय का संकेत दे रहा था। 'अनंत की फुसफुसाहट' धीरे-धीरे करीब आ रही थी।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "hild",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "hild",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "부족의 전설에 따르면, 수호자가 겨울과 함께 나타난다고 했어.",
						"english": "According to tribal legends, a guardian appears with winter.",
						"japanese": "部族の伝説によると、守護者は冬と共に現れるとされている。",
						"chinese": "部落的传说称，守护者会随冬天一同出现。",
						"french": "Selon les légendes tribales, un gardien apparaît avec l'hiver.",
						"spanish": "Según las leyendas tribales, un guardián aparece con el invierno.",
						"vietnamese": "Theo truyền thuyết của bộ tộc, một người bảo vệ sẽ xuất hiện cùng với mùa đông.",
						"thai": "ตามตำนานของชนเผ่า ผู้พิทักษ์จะปรากฏตัวพร้อมกับฤดูหนาว",
						"hindi": "जनजातीय किंवदंतियों के अनुसार, एक संरक्षक सर्दी के साथ प्रकट होता है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "수호자… 그럼 그게 '영원의 속삭임'의 근원인가?",
						"english": "A guardian… Is that, then, the source of the 'Whisper of Eternity'?",
						"japanese": "守護者…それが「永遠の囁き」の根源なのか？",
						"chinese": "守护者……那么，那就是「永恒的低语」的根源吗？",
						"french": "Un gardien… Serait-ce alors la source du 'Murmure de l'Éternité' ?",
						"spanish": "¿Un guardián… es esa, entonces, la fuente del 'Susurro de la Eternidad'?",
						"vietnamese": "Người bảo vệ… Vậy đó có phải là nguồn gốc của 'Lời Thì Thầm Vĩnh Cửu' không?",
						"thai": "ผู้พิทักษ์... แล้วนั่นคือต้นกำเนิดของ 'เสียงกระซิบแห่งนิรันดร์' หรือไม่?",
						"hindi": "एक संरक्षक… तो क्या वही 'अनंत की फुसफुसाहट' का स्रोत है?"
					}
				},
				{
					"content": {
						"korean": "어쩌면… 그 모든 것이 하나의 거대한 저주일지도 몰라.",
						"english": "Perhaps… it's all one great curse.",
						"japanese": "もしかしたら…その全てが、一つの巨大な呪いなのかもしれない。",
						"chinese": "也许……这一切都是一个巨大的诅咒。",
						"french": "Peut-être… que tout cela n'est qu'une immense malédiction.",
						"spanish": "Quizás… todo sea una gran maldición.",
						"vietnamese": "Có lẽ… tất cả chỉ là một lời nguyền khổng lồ.",
						"thai": "บางที... ทั้งหมดนั้นอาจเป็นคำสาปอันยิ่งใหญ่",
						"hindi": "शायद… यह सब एक बड़ा अभिशाप है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "더 이상 물러설 곳은 없어.",
						"english": "No more retreating.",
						"japanese": "もう後には引けない。",
						"chinese": "已经没有退路了。",
						"french": "On ne peut plus reculer.",
						"spanish": "Ya no hay dónde retroceder.",
						"vietnamese": "Không còn đường lùi nữa.",
						"thai": "ไม่มีที่ให้ถอยอีกแล้ว",
						"hindi": "अब पीछे हटने की कोई जगह नहीं है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 얼음 유적 곳곳에서 희미하게 빛나다 사라지는 고대 문양들이 발견되었다. 이는 잊혀진 약속의 흔적인가, 아니면 절망의 각인인가?",
						"english": "Faint ancient patterns, flickering in and out of existence, were found throughout the old ice ruins. Are these traces of a forgotten promise, or an imprint of despair?",
						"japanese": "古い氷の遺跡のあちこちで、かすかに輝いては消える古代の文様が発見された。これは忘れ去られた約束の痕跡か、それとも絶望の刻印なのか？",
						"chinese": "在古老的冰霜遗迹各处，发现了忽明忽暗的古代纹样。这是被遗忘的约定的痕迹，还是绝望的烙印？",
						"french": "Des motifs anciens, scintillant puis disparaissant, ont été découverts çà et là dans les vieilles ruines de glace. Sont-ce les traces d'une promesse oubliée, ou la marque du désespoir ?",
						"spanish": "En varias partes de las antiguas ruinas de hielo, se descubrieron antiguos patrones que brillaban y se desvanecían. ¿Son estos rastros de una promesa olvidada, o la marca de la desesperación?",
						"vietnamese": "Những hoa văn cổ xưa mờ ảo, lúc ẩn lúc hiện, được tìm thấy khắp các di tích băng cổ. Đây là dấu vết của một lời hứa bị lãng quên, hay là dấu ấn của sự tuyệt vọng?",
						"thai": "ลวดลายโบราณที่ส่องแสงริบหรี่แล้วจางหายไป ถูกค้นพบทั่วซากปรักหักพังน้ำแข็งเก่าแก่ นี่คือร่องรอยของคำสัญญาที่ถูกลืม หรือรอยประทับแห่งความสิ้นหวัง?",
						"hindi": "पुरानी बर्फीली खंडहरों में, अस्पष्ट रूप से चमकते और गायब होते हुए प्राचीन पैटर्न पाए गए। क्या ये भूले हुए वादे के निशान हैं, या निराशा की छाप?"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이 겨울은 단순한 추위가 아니야. 대지에 스며든… 깊은 절망이야.",
						"english": "This winter isn't just cold. It's... a deep despair seeping into the land.",
						"japanese": "この冬はただの寒さじゃない。大地に染み込んだ…深い絶望だ。",
						"chinese": "这个冬天不只是寒冷。它是…渗透进大地的深层绝望。",
						"french": "Cet hiver n'est pas qu'un simple froid. C'est... un profond désespoir qui s'infiltre dans la terre.",
						"spanish": "Este invierno no es solo frío. Es... una profunda desesperación que se filtra en la tierra.",
						"vietnamese": "Mùa đông này không chỉ là cái lạnh. Nó là... sự tuyệt vọng sâu sắc đang thấm vào lòng đất.",
						"thai": "ฤดูหนาวนี้ไม่ใช่แค่ความหนาวเย็นธรรมดา แต่มันคือ... ความสิ้นหวังที่ฝังลึกอยู่ในผืนดิน",
						"hindi": "यह सर्दी सिर्फ ठंड नहीं है। यह... धरती में समाई हुई गहरी निराशा है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "알아. 그래서 끝내야 해. 이 모든 것을.",
						"english": "I know. That's why we have to end this. All of it.",
						"japanese": "分かってる。だから、これを終わらせなければ。全てを。",
						"chinese": "我知道。所以，必须结束这一切。",
						"french": "Je sais. C'est pourquoi nous devons y mettre fin. À tout cela.",
						"spanish": "Lo sé. Por eso tenemos que acabar con esto. Con todo.",
						"vietnamese": "Tôi biết. Vì vậy, phải kết thúc chuyện này. Tất cả.",
						"thai": "ฉันรู้ นั่นคือเหตุผลที่เราต้องยุติเรื่องนี้ ทั้งหมด",
						"hindi": "मुझे पता है। इसीलिए हमें इसे खत्म करना होगा। यह सब।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "조심해. 저주는… 생각보다 훨씬 강해.",
						"english": "Be careful. The curse is... far stronger than you think.",
						"japanese": "気をつけろ。呪いは…思ったよりずっと強い。",
						"chinese": "小心。诅咒…远比你想象的强大。",
						"french": "Fais attention. La malédiction est... bien plus forte que tu ne le penses.",
						"spanish": "Ten cuidado. La maldición es... mucho más fuerte de lo que crees.",
						"vietnamese": "Cẩn thận. Lời nguyền... mạnh hơn nhiều so với ngươi nghĩ.",
						"thai": "ระวัง คำสาป... แข็งแกร่งกว่าที่คิดมาก",
						"hindi": "सावधान रहो। अभिशाप... तुम्हारी सोच से कहीं ज़्यादा मज़बूत है।"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "때때로 주변의 모든 것이 더욱 빠르게 얼어붙는 기현상이 발생했다. 단순한 한파가 아닌, 어떤 거대한 힘이 이 세계를 잠식하는 것만 같았다.",
						"english": "Sometimes, strange phenomena occurred where everything around froze even faster. It felt less like a mere cold snap and more like a colossal power was engulfing this world.",
						"japanese": "時折、周囲の全てがさらに急速に凍りつく奇妙な現象が起きた。それは単なる寒波ではなく、何らかの巨大な力がこの世界を侵食しているかのようだった。",
						"chinese": "有时，周围的一切都会以更快的速度冻结，这是一种奇特的现象。这不只是一股寒流，更像是一种巨大的力量正在侵蚀这个世界。",
						"french": "Parfois, un phénomène étrange se produisait où tout autour gelait encore plus vite. Ce n'était pas une simple vague de froid, mais plutôt une force gigantesque qui semblait engloutir ce monde.",
						"spanish": "A veces, ocurrían fenómenos extraños en los que todo alrededor se congelaba aún más rápido. No era solo una ola de frío, sino como si una fuerza colosal estuviera apoderándose de este mundo.",
						"vietnamese": "Thỉnh thoảng, hiện tượng kỳ lạ xảy ra khi mọi thứ xung quanh đóng băng nhanh hơn. Cứ như thể không phải một đợt rét đơn thuần, mà một sức mạnh khổng lồ đang xâm chiếm thế giới này.",
						"thai": "บางครั้งก็เกิดปรากฏการณ์แปลกๆ ที่ทุกสิ่งรอบตัวแข็งตัวเร็วยิ่งขึ้น ไม่ใช่แค่คลื่นความเย็นธรรมดา แต่ราวกับว่าพลังมหาศาลกำลังกลืนกินโลกนี้",
						"hindi": "कभी-कभी, अजीबोगरीब घटनाएं होती थीं जहाँ आस-पास सब कुछ और भी तेज़ी से जम जाता था। यह केवल एक ठंड का प्रकोप नहीं, बल्कि ऐसा लगता था जैसे कोई विशाल शक्ति इस दुनिया को निगल रही हो।"
					}
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "모든 것이 다시 얼어붙었다. 얼음 속에서 차가운 속삭임이 울렸다.",
						"english": "Everything froze over again. A cold whisper echoed from within the ice.",
						"japanese": "全てが再び凍りついた。氷の中から冷たい囁きが響いた。",
						"chinese": "一切都再次冻结了。冰中传来冰冷的低语。",
						"french": "Tout a de nouveau gelé. Un froid murmure résonna depuis la glace.",
						"spanish": "Todo volvió a congelarse. Un frío susurro resonó desde el hielo.",
						"vietnamese": "Mọi thứ lại đóng băng lần nữa. Một tiếng thì thầm lạnh lẽo vang lên từ trong băng.",
						"thai": "ทุกสิ่งถูกแช่แข็งอีกครั้ง. เสียงกระซิบเย็นเยียบก้องกังวานจากภายในน้ำแข็ง.",
						"hindi": "सब कुछ फिर से जम गया। बर्फ के भीतर से एक ठंडी फुसफुसाहट गूँजी।"
					}
				},
				{
					"content": {
						"korean": "하찮은 저항. 너희의 의지는 겨울 앞에 무의미하다.",
						"english": "Trifling resistance. Your will is meaningless before winter.",
						"japanese": "取るに足らない抵抗。お前たちの意志は冬の前では無意味だ。",
						"chinese": "微不足道的抵抗。你们的意志在冬天面前毫无意义。",
						"french": "Résistance insignifiante. Votre volonté est insignifiante face à l'hiver.",
						"spanish": "Resistencia insignificante. Vuestra voluntad es insignificante ante el invierno.",
						"vietnamese": "Sự kháng cự yếu ớt. Ý chí của các ngươi vô nghĩa trước mùa đông.",
						"thai": "การต่อต้านที่ไร้ค่า. เจตจำนงของเจ้าไร้ความหมายต่อหน้าฤดูหนาว.",
						"hindi": "तुच्छ प्रतिरोध। सर्दी के सामने तुम्हारी इच्छाशक्ति व्यर्थ है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over, yet.",
						"japanese": "…まだ、終わってない。",
						"chinese": "…还没，结束。",
						"french": "…Ce n'est pas encore fini.",
						"spanish": "…Aún no ha terminado.",
						"vietnamese": "…Chưa, kết thúc đâu.",
						"thai": "...ยังไม่จบ.",
						"hindi": "…अभी, खत्म नहीं हुआ है।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "hild",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "다시 일어나… 우리는 굴복하지 않아.",
						"english": "Get up again... We won't surrender.",
						"japanese": "再び立ち上がれ… 我々は屈服しない。",
						"chinese": "再次站起来… 我们不会屈服。",
						"french": "Relevez-vous… Nous ne nous soumettrons pas.",
						"spanish": "Levántate de nuevo… No nos rendiremos.",
						"vietnamese": "Đứng dậy lần nữa… Chúng ta sẽ không khuất phục.",
						"thai": "ลุกขึ้นอีกครั้ง… เราจะไม่ยอมแพ้.",
						"hindi": "फिर से उठो… हम हार नहीं मानेंगे।"
					},
					"type": "speech",
					"emotion": "happy",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "무릎 꿇어라. 영원한 겨울은 너를 삼킬 것이다.",
						"english": "Kneel. The eternal winter will swallow you.",
						"japanese": "ひざまずけ。永遠の冬がお前を飲み込むだろう。",
						"chinese": "跪下吧。永恒的冬天将吞噬你。",
						"french": "Agenouille-toi. L'hiver éternel t'engloutira.",
						"spanish": "Arrodíllate. El invierno eterno te devorará.",
						"vietnamese": "Hãy quỳ xuống. Mùa đông vĩnh cửu sẽ nuốt chửng ngươi.",
						"thai": "คุกเข่าลง. ฤดูหนาวอันเป็นนิรันดร์จะกลืนกินเจ้า.",
						"hindi": "घुटने टेको। अनंत सर्दी तुम्हें निगल जाएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 길을 막아섰다. 혹한의 기운이 더욱 강렬해졌다.",
						"english": "A colossal shadow blocked the path. The chill intensified.",
						"japanese": "巨大な影が道を阻んだ。極寒の気が一層強くなった。",
						"chinese": "巨大的身影挡住了去路。酷寒的气息更加强烈了。",
						"french": "Une ombre colossale barra le chemin. L'aura glaciale s'intensifia.",
						"spanish": "Una sombra colosal bloqueó el camino. La aura gélida se intensificó.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường. Hơi lạnh buốt giá càng thêm dữ dội.",
						"thai": "เงาขนาดมหึมาขวางทาง อากาศหนาวจัดทวีความรุนแรงขึ้น",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। भीषण ठंड की भावना और भी तीव्र हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "침입자들. 감히 나의 영역을 더럽히는가.",
						"english": "Intruders. How dare you defile my domain?",
						"japanese": "侵入者め。よくも我が領域を汚したな。",
						"chinese": "入侵者。竟敢玷污我的领域。",
						"french": "Intrus. Comment osez-vous souiller mon domaine ?",
						"spanish": "Intrusos. ¿Cómo os atrevéis a profanar mi dominio?",
						"vietnamese": "Kẻ xâm nhập. Dám cả gan làm ô uế lãnh địa của ta sao.",
						"thai": "ผู้บุกรุก บังอาจมาแปดเปื้อนอาณาเขตของข้าหรือ",
						"hindi": "घुसपैठिए। मेरी भूमि को अपवित्र करने की हिम्मत कैसे हुई?"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 겨울을 조종하는 자인가!",
						"english": "Are you the one controlling this winter?!",
						"japanese": "お前がこの冬を操る者か！",
						"chinese": "你就是操纵这个冬天的人吗？！",
						"french": "C'est toi qui contrôles cet hiver ?!",
						"spanish": "¿¡Eres tú quien controla este invierno!?",
						"vietnamese": "Ngươi là kẻ điều khiển mùa đông này sao!",
						"thai": "เจ้าคือผู้ควบคุมฤดูหนาวนี้หรือ!",
						"hindi": "क्या तुम ही हो जो इस सर्दी को नियंत्रित कर रहे हो?!"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "내 이름은 {random_boss}. 너희의 절망이 나를 더 강하게 한다.",
						"english": "My name is {random_boss}. Your despair makes me stronger.",
						"japanese": "我が名は{random_boss}。お前たちの絶望が、我をさらに強くする。",
						"chinese": "我名为{random_boss}。你们的绝望让我变得更强。",
						"french": "Mon nom est {random_boss}. Votre désespoir me rend plus fort.",
						"spanish": "Mi nombre es {random_boss}. Vuestra desesperación me hace más fuerte.",
						"vietnamese": "Tên ta là {random_boss}. Sự tuyệt vọng của các ngươi khiến ta mạnh hơn.",
						"thai": "ข้าชื่อ {random_boss} ความสิ้นหวังของพวกเจ้าทำให้ข้าแข็งแกร่งขึ้น",
						"hindi": "मेरा नाम {random_boss} है। तुम्हारी निराशा मुझे और मज़बूत बनाती है।"
					}
				},
				{
					"content": {
						"korean": "그럼 절망하게 해줄게!",
						"english": "Then I'll make you despair!",
						"japanese": "ならば、絶望させてやろう！",
						"chinese": "那我就让你们绝望！",
						"french": "Alors je vous ferai désespérer !",
						"spanish": "¡Pues te haré desesperar!",
						"vietnamese": "Vậy thì để ta khiến ngươi tuyệt vọng!",
						"thai": "งั้นข้าจะทำให้เจ้าสิ้นหวัง!",
						"hindi": "तो मैं तुम्हें निराशा महसूस करवाऊँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 헛된 몸부림… 겨울은… 다시 돌아온다… {random_boss}의 이름으로…",
						"english": "Ugh... Futile struggle... Winter... returns again... In the name of {random_boss}...",
						"japanese": "くっ… 無駄なもがきだ… 冬は… 再び戻る… {random_boss}の名において…",
						"chinese": "呃… 徒劳的挣扎… 冬天… 再次降临… 以{random_boss}之名…",
						"french": "Ugh… Lutte vaine… L'hiver… reviendra… Au nom de {random_boss}…",
						"spanish": "Ugh… Lucha inútil… El invierno… volverá… En nombre de {random_boss}…",
						"vietnamese": "Khục… Chống cự vô ích… Mùa đông… sẽ trở lại… Nhân danh {random_boss}…",
						"thai": "อึก… การต่อสู้ที่ไร้ผล… ฤดูหนาว… จะกลับมาอีกครั้ง… ในนามของ {random_boss}…",
						"hindi": "उफ़… व्यर्थ का संघर्ष… सर्दी… फिर लौटेगी… {random_boss} के नाम पर…"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 말을 하는 거야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parlez-vous !",
						"spanish": "¡De qué estás hablando!",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "นายกำลังพูดอะไร!",
						"hindi": "तुम क्या कह रहे हो!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild",
					"content": {
						"korean": "그의 말은… 사실이야. 약속의 저주는… 쉽게 끝나지 않아.",
						"english": "His words... are true. The curse of the promise... won't end easily.",
						"japanese": "彼の言葉は… 真実だ。約束の呪いは… 簡単に終わらない。",
						"chinese": "他的话… 是真的。约定的诅咒… 不会轻易结束。",
						"french": "Ses mots… sont vrais. La malédiction de la promesse… ne se terminera pas facilement.",
						"spanish": "Sus palabras… son ciertas. La maldición de la promesa… no terminará fácilmente.",
						"vietnamese": "Lời hắn… là thật. Lời nguyền của lời hứa… sẽ không dễ dàng kết thúc.",
						"thai": "คำพูดของเขา… เป็นจริง. คำสาปแห่งคำมั่นสัญญา… จะไม่จบลงง่ายๆ.",
						"hindi": "उसके शब्द… सच हैं। वादे का श्राप… आसानी से खत्म नहीं होगा।"
					}
				},
				{
					"content": {
						"korean": "아니. 여기서 끝낼 거야. 반드시.",
						"english": "No. We'll end it here. Absolutely.",
						"japanese": "いや。ここで終わらせる。必ず。",
						"chinese": "不。我会在这里结束。一定。",
						"french": "Non. Nous allons en finir ici. Absolument.",
						"spanish": "No. Lo terminaremos aquí. Absolutamente.",
						"vietnamese": "Không. Ta sẽ kết thúc nó ở đây. Nhất định.",
						"thai": "ไม่. เราจะจบมันที่นี่. อย่างแน่นอน.",
						"hindi": "नहीं। हम इसे यहीं खत्म करेंगे। निश्चित रूप से।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 수호자가 쓰러졌다. 그러나 혹한의 그림자는 여전히 대지를 짓누르고 있었다. 끝나지 않은 겨울, 그 배후를 향한 발걸음은 멈추지 않는다.",
						"english": "The colossal ice guardian has fallen. Yet the shadow of bitter cold still weighed upon the land. The unending winter, steps towards its origin will not cease.",
						"japanese": "巨大な氷の守護者は倒れた。しかし、極寒の影は依然として大地を覆っていた。終わらない冬、その背後へ向かう足取りは止まらない。",
						"chinese": "巨大的冰之守护者倒下了。然而，严寒的阴影依然笼罩着大地。永无止境的冬天，走向其幕后的脚步不会停止。",
						"french": "Le gardien de glace colossal est tombé. Pourtant, l'ombre du froid glacial pesait toujours sur la terre. L'hiver interminable, les pas vers son origine ne s'arrêteront pas.",
						"spanish": "El colosal guardián de hielo ha caído. Sin embargo, la sombra del frío gélido aún oprimía la tierra. El invierno interminable, los pasos hacia su origen no cesarán.",
						"vietnamese": "Kẻ hộ vệ băng khổng lồ đã gục ngã. Nhưng bóng tối của cái lạnh khắc nghiệt vẫn đè nặng lên vùng đất. Mùa đông bất tận, bước chân hướng về kẻ đứng sau sẽ không dừng lại.",
						"thai": "ผู้พิทักษ์น้ำแข็งมหึมาได้ล้มลงแล้ว. ทว่าเงาแห่งความหนาวเหน็บยังคงปกคลุมผืนดิน. ฤดูหนาวที่ไม่สิ้นสุด, ก้าวเดินไปสู่เบื้องหลังจะไม่หยุดยั้ง.",
						"hindi": "विशालकाय बर्फ का संरक्षक गिर गया। फिर भी, भीषण ठंड की छाया अभी भी धरती पर छाई हुई थी। अंतहीन सर्दी, उसके मूल की ओर बढ़ने वाले कदम नहीं रुकेंगे।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 북풍이 잊혀진 약속을 속삭였다.",
			"영원한 겨울은 반복된다. 더욱 강렬하게.",
			"얼어붙은 대지, 그 속에서 마지막 생존자가 기다린다.",
			"그녀는 잊힌 이름을 기억한다. '아에사'.",
			"그리고 그 저주의 진실을."
		],
		"english": [
			"The cold north wind whispered forgotten promises.",
			"The eternal winter repeats. More intensely.",
			"Frozen earth, within it waits the last survivor.",
			"She remembers the forgotten name. 'Aesa'.",
			"And the truth of that curse."
		],
		"japanese": [
			"冷たい北風が忘れられた約束を囁いた。",
			"永遠の冬が繰り返される。さらに激しく。",
			"凍てつく大地、その中で最後の生存者が待つ。",
			"彼女は忘れられた名前を覚えている。「アエサ」。",
			"そしてその呪いの真実を。"
		],
		"chinese": [
			"凛冽的北风低语着被遗忘的誓言。",
			"永恒的冬季重演。愈发强烈。",
			"冰封大地，其中等待着最后的幸存者。",
			"她记起了那个被遗忘的名字。“艾莎”。",
			"以及那个诅咒的真相。"
		],
		"french": [
			"Le vent froid du nord murmura des promesses oubliées.",
			"L'hiver éternel se répète. Plus intensément.",
			"Terre gelée, en elle attend la dernière survivante.",
			"Elle se souvient du nom oublié. 'Aesa'.",
			"Et la vérité de cette malédiction."
		],
		"spanish": [
			"El frío viento del norte susurró promesas olvidadas.",
			"El invierno eterno se repite. Con mayor intensidad.",
			"Tierra helada, en ella espera la última superviviente.",
			"Ella recuerda el nombre olvidado. 'Aesa'.",
			"Y la verdad de esa maldición."
		],
		"vietnamese": [
			"Gió bắc lạnh lẽo thì thầm những lời hứa bị lãng quên.",
			"Mùa đông vĩnh cửu lặp lại. Càng dữ dội hơn.",
			"Mặt đất đóng băng, người sống sót cuối cùng đang chờ đợi trong đó.",
			"Cô nhớ cái tên bị lãng quên. 'Aesa'.",
			"Và sự thật về lời nguyền đó."
		],
		"thai": [
			"ลมเหนืออันหนาวเหน็บกระซิบคำสัญญาที่ถูกลืมเลือน",
			"ฤดูหนาวนิรันดร์ซ้ำรอย ยิ่งทวีความรุนแรง",
			"ดินแดนน้ำแข็ง, ผู้รอดชีวิตคนสุดท้ายรอคอยอยู่ข้างใน",
			"เธอนึกถึงชื่อที่ถูกลืม 'เอซ่า'",
			"และความจริงของคำสาปนั้น"
		],
		"hindi": [
			"सर्द उत्तरी हवा ने भूली हुई प्रतिज्ञाएँ फुसफुसाईं।",
			"अनंत शीतकाल दोहराता है। और भी तीव्र।",
			"जमी हुई धरती, उसमें आखिरी उत्तरजीवी इंतजार कर रहा है।",
			"उसे भूला हुआ नाम याद है। 'एसा'।",
			"और उस अभिशाप का सच।"
		]
	}
} as const;
