export const scenario_snowy_weaverfrost_50_02 = {
	"scenario_id": "snowy_weaverfrost_50_02",
	"order": 2,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"사라진 자들의 흔적은 차가운 서리 속에 묻혔다.",
			"유적 연구자 이바르는 그것이 평범한 얼음이 아니라고 경고했다.",
			"고대 문서 속 '얼음 무덤'. 그 싸늘한 진실이 다가온다.",
			"어쩌면 이 설원 자체가 하나의 거대한 무덤일지도 모른다."
		],
		"english": [
			"Traces of the vanished were buried in cold frost.",
			"Ivar, the ruin researcher, warned it was no ordinary ice.",
			"The 'Ice Tomb' from ancient texts. Its chilling truth approaches.",
			"Perhaps this snowfield itself is a colossal tomb."
		],
		"japanese": [
			"消え去りし者の痕跡は、冷たい霜の中に埋もれた。",
			"遺跡研究者イヴァールは、それがただの氷ではないと警告した。",
			"古文書に記されし「氷の墓」。その冷厳な真実が迫る。",
			"もしかすると、この雪原そのものが巨大な墓なのかもしれない。"
		],
		"chinese": [
			"逝者的踪迹，埋葬于冰冷的霜中。",
			"遗迹研究员伊瓦尔警告说，那并非寻常的冰。",
			"古籍中的“冰墓”。那冰冷的真相正悄然逼近。",
			"或许这片雪原本身，就是一座巨大的坟墓。"
		],
		"french": [
			"Les traces des disparus ont été ensevelies sous le givre.",
			"Ivar, le chercheur en ruines, avertit que ce n'était pas de la glace ordinaire.",
			"Le « Tombeau de Glace » des textes anciens. Sa vérité glaçante approche.",
			"Peut-être ce champ de neige est-il lui-même un tombeau colossal."
		],
		"spanish": [
			"Las huellas de los desaparecidos yacen sepultadas en la fría escarcha.",
			"Ivar, el investigador de ruinas, advirtió que no era hielo común.",
			"La «Tumba de Hielo» de los textos antiguos. Su gélida verdad se aproxima.",
			"Quizás este campo de nieve sea en sí mismo una tumba colosal."
		],
		"vietnamese": [
			"Dấu vết của những người đã biến mất bị chôn vùi trong lớp sương giá lạnh lẽo.",
			"Ivar, nhà nghiên cứu di tích, cảnh báo rằng đó không phải là băng bình thường.",
			"'Lăng mộ Băng giá' trong các văn tự cổ. Sự thật lạnh lẽo của nó đang đến gần.",
			"Có lẽ chính cánh đồng tuyết này là một lăng mộ khổng lồ."
		],
		"thai": [
			"ร่องรอยของผู้ที่หายสาบสูญถูกฝังอยู่ใต้เหมันต์อันหนาวเหน็บ",
			"ไอวาร์ นักวิจัยโบราณสถาน เตือนว่ามันไม่ใช่น้ำแข็งธรรมดา",
			"'สุสานน้ำแข็ง' ในเอกสารโบราณ ความจริงอันเยือกเย็นกำลังคืบคลานเข้ามา",
			"บางทีทุ่งหิมะแห่งนี้เองอาจเป็นสุสานขนาดมหึมา"
		],
		"hindi": [
			"गुमशुदा लोगों के निशान ठंढी पाले में दब गए।",
			"खंडहर शोधकर्ता इवार ने चेतावनी दी कि वह सामान्य बर्फ नहीं थी।",
			"प्राचीन ग्रंथों में 'बर्फ की कब्र'। उसकी ठंडी सच्चाई निकट आ रही है।",
			"हो सकता है कि यह हिमक्षेत्र ही एक विशाल कब्र हो।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "실종자들이 마지막으로 목격된 장소. 싸늘한 기운이 감돌았다.",
						"english": "The last known location of the missing. A chilling aura hung in the air.",
						"japanese": "行方不明者が最後に目撃された場所。冷たい気が漂っていた。",
						"chinese": "失踪者最后被目击的地点。一股寒意弥漫开来。",
						"french": "Le dernier endroit où les disparus ont été vus. Une aura glaciale planait.",
						"spanish": "El último lugar donde se vio a los desaparecidos. Una aura escalofriante se sentía.",
						"vietnamese": "Nơi những người mất tích được nhìn thấy lần cuối. Một luồng khí lạnh lẽo bao trùm.",
						"thai": "สถานที่ที่ผู้สูญหายถูกพบเห็นครั้งสุดท้าย บรรยากาศเยือกเย็นปกคลุม",
						"hindi": "गुमशुदा लोगों को आखिरी बार यहीं देखा गया था। एक ठंडी आभा छाई हुई थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 다 서리 자국인가?",
						"english": "Is this... all frost?",
						"japanese": "これ…全部霜の跡なのか？",
						"chinese": "这……都是霜的痕迹吗？",
						"french": "Est-ce… tout du givre ?",
						"spanish": "¿Esto es... todo escarcha?",
						"vietnamese": "Đây… toàn là vết sương giá sao?",
						"thai": "นี่…ทั้งหมดเป็นรอยน้ำค้างแข็งหรือ?",
						"hindi": "क्या यह... सब पाले के निशान हैं?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "꽤 흥미로운 현상이야. 단순한 추위는 아니지.",
						"english": "Quite an interesting phenomenon. Not mere cold.",
						"japanese": "なかなか興味深い現象だ。単なる寒さではないな。",
						"chinese": "这现象相当有趣。并非单纯的寒冷。",
						"french": "Un phénomène assez intéressant. Pas seulement le froid.",
						"spanish": "Un fenómeno bastante interesante. No es simple frío.",
						"vietnamese": "Một hiện tượng khá thú vị. Không phải chỉ là lạnh lẽo thông thường.",
						"thai": "เป็นปรากฏการณ์ที่น่าสนใจทีเดียว ไม่ใช่แค่ความหนาวเย็นธรรมดา",
						"hindi": "यह काफी दिलचस्प घटना है। सिर्फ ठंड नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이 서리 자국을 봐. 일반적인 얼음 결정과는 달라.",
						"english": "Look at these frost patterns. Unlike ordinary ice crystals.",
						"japanese": "この霜の跡を見てくれ。一般的な氷の結晶とは違う。",
						"chinese": "看这些霜的痕迹。与普通的冰晶不同。",
						"french": "Regardez ces motifs de givre. Pas comme les cristaux de glace ordinaires.",
						"spanish": "Mira estas marcas de escarcha. Son diferentes de los cristales de hielo comunes.",
						"vietnamese": "Hãy nhìn những vết sương giá này. Không giống các tinh thể băng thông thường.",
						"thai": "ดูรอยน้ำค้างแข็งพวกนี้สิ ไม่เหมือนผลึกน้ำแข็งทั่วไปเลย",
						"hindi": "इन पाले के निशानों को देखो। सामान्य बर्फ के क्रिस्टल से अलग हैं।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "오로라빛… 결정도 있어요.",
						"english": "There are aurora-like… crystals too.",
						"japanese": "オーロラ色の…結晶もあるわ。",
						"chinese": "还有极光般的……结晶。",
						"french": "Il y a aussi des cristaux… aux couleurs d'aurore.",
						"spanish": "También hay cristales… con luz de aurora.",
						"vietnamese": "Còn có… những tinh thể phát sáng như cực quang.",
						"thai": "มีผลึก…สีแสงออโรร่าด้วย",
						"hindi": "ओरोरा-जैसे... क्रिस्टल भी हैं।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "그래. 마치 살아있는 것처럼, 계속해서 형태를 바꾸고 있지.",
						"english": "Yes. They're constantly changing shape, as if alive.",
						"japanese": "ああ。まるで生きているかのように、形を変え続けている。",
						"chinese": "是的。它们就像活物一样，不断改变着形态。",
						"french": "Oui. Ils changent constamment de forme, comme s'ils étaient vivants.",
						"spanish": "Sí. Cambian de forma constantemente, como si estuvieran vivos.",
						"vietnamese": "Đúng vậy. Chúng liên tục thay đổi hình dạng, cứ như thể đang sống.",
						"thai": "ใช่แล้ว เหมือนมีชีวิตเลย เปลี่ยนรูปร่างอยู่ตลอดเวลา",
						"hindi": "हाँ। वे लगातार आकार बदल रहे हैं, जैसे जीवित हों।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "이런 '기이한 추위'에 대한 소문은 들어봤지만… 실제로 보니 더욱 압도적이군.",
						"english": "I've heard rumors of this 'peculiar chill,' but seeing it in person... it's even more overwhelming.",
						"japanese": "この『奇妙な寒気』の噂は聞いていたが…実際に目にすると、さらに圧倒されるな。",
						"chinese": "我听说过这种‘诡异的寒冷’的传闻……亲眼所见，更是令人窒息。",
						"french": "J'avais entendu des rumeurs sur ce 'froid étrange'... mais le voir en vrai, c'est encore plus accablant.",
						"spanish": "Había oído rumores de este 'frío peculiar'... pero verlo en persona es aún más abrumador.",
						"vietnamese": "Từng nghe đồn về 'cái lạnh kỳ lạ' này... nhưng tận mắt chứng kiến, nó còn choáng ngợp hơn.",
						"thai": "เคยได้ยินข่าวลือเกี่ยวกับ 'ความหนาวประหลาด' นี้มาบ้าง... แต่พอได้เห็นของจริงแล้ว มันยิ่งน่าสะพรึงกลัวกว่าเดิม",
						"hindi": "मैंने इस 'अजीब ठंड' की अफवाहें सुनी थीं... लेकिन इसे साक्षात देखना, और भी भयावह है。"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						2,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "고대 문서에 '영원한 얼음'이라는 구절이 있어.",
						"english": "Ancient texts mention a passage: 'Eternal Ice'.",
						"japanese": "古文書に「永遠の氷」という記述がある。",
						"chinese": "古籍中有一段话，提到了‘永恒之冰’。",
						"french": "Des textes anciens mentionnent un passage : 'Glace Éternelle'.",
						"spanish": "Los textos antiguos mencionan un pasaje: 'Hielo Eterno'.",
						"vietnamese": "Văn thư cổ có một đoạn nói về 'Băng Vĩnh Cửu'.",
						"thai": "ในเอกสารโบราณมีข้อความว่า 'น้ำแข็งนิรันดร์'",
						"hindi": "प्राचीन ग्रंथों में 'शाश्वत बर्फ' का उल्लेख है।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "영원한 얼음?",
						"english": "Eternal Ice?",
						"japanese": "永遠の氷、だと？",
						"chinese": "永恒之冰？",
						"french": "Glace Éternelle ?",
						"spanish": "¿Hielo Eterno?",
						"vietnamese": "Băng Vĩnh Cửu ư?",
						"thai": "น้ำแข็งนิรันดร์?",
						"hindi": "शाश्वत बर्फ?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "자연의 것이 아닌, 인위적인 차가움을 경고하는 내용이지.",
						"english": "It warns of an artificial cold, not natural.",
						"japanese": "それは自然のものではなく、人為的な冷たさを警告する内容だ。",
						"chinese": "它警告的并非自然之寒，而是人造的冰冷。",
						"french": "Cela met en garde contre un froid artificiel, pas naturel.",
						"spanish": "Advierte de un frío artificial, no natural.",
						"vietnamese": "Nó cảnh báo về một cái lạnh nhân tạo, không phải tự nhiên.",
						"thai": "มันเตือนถึงความหนาวเย็นที่มนุษย์สร้างขึ้น ไม่ใช่จากธรรมชาติ",
						"hindi": "यह प्राकृतिक नहीं, बल्कि कृत्रिम ठंडक की चेतावनी देता है।"
					}
				},
				{
					"content": {
						"korean": "사라진 자들이 남긴 흔적이… '얼음 무덤'에 대한 기록과 일치해.",
						"english": "Traces left by the vanished ones... align with records of an 'Ice Tomb'.",
						"japanese": "消え去った者たちが残した痕跡は…『氷の墓』に関する記録と一致する。",
						"chinese": "失踪者留下的痕迹……与‘冰之墓’的记载相符。",
						"french": "Les traces laissées par les disparus... correspondent aux archives d'une 'Tombe de Glace'.",
						"spanish": "Los rastros dejados por los desaparecidos... coinciden con los registros de una 'Tumba de Hielo'.",
						"vietnamese": "Dấu vết những kẻ biến mất để lại... trùng khớp với ghi chép về 'Mộ Băng'.",
						"thai": "ร่องรอยที่ผู้หายสาบสูญทิ้งไว้... สอดคล้องกับบันทึกของ 'สุสานน้ำแข็ง'",
						"hindi": "लुप्त हुए लोगों द्वारा छोड़े गए निशान... 'बर्फ की कब्र' के रिकॉर्ड से मेल खाते हैं।"
					},
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ivar",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "이건 단순한 미스터리가 아니야. 분명한 위협이지.",
						"english": "This isn't just a mystery. It's a clear threat.",
						"japanese": "これは単なる謎ではない。明確な脅威だ。",
						"chinese": "这不只是一个谜团。这是一个明显的威胁。",
						"french": "Ce n'est pas qu'un simple mystère. C'est une menace évidente.",
						"spanish": "Esto no es solo un misterio. Es una amenaza clara.",
						"vietnamese": "Đây không chỉ là một bí ẩn. Đây là một mối đe dọa rõ ràng.",
						"thai": "นี่ไม่ใช่แค่เรื่องลึกลับ แต่มันคือภัยคุกคามที่ชัดเจน",
						"hindi": "यह सिर्फ एक रहस्य नहीं है। यह एक स्पष्ट खतरा है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리가 뭘 할 수 있을까요…",
						"english": "What can we do...?",
						"japanese": "我々に何ができるというんだ…",
						"chinese": "我们能做什么……",
						"french": "Que pouvons-nous faire...?",
						"spanish": "¿Qué podemos hacer...?",
						"vietnamese": "Chúng ta có thể làm gì đây...?",
						"thai": "เราจะทำอะไรได้บ้าง...",
						"hindi": "हम क्या कर सकते हैं...?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강함의 끝은 언제나 시험받는 법. 여기서 물러설 수는 없어.",
						"english": "The limits of strength are always tested. We can't back down here.",
						"japanese": "強さの限界は常に試されるもの。ここで退くわけにはいかない。",
						"chinese": "力量的极限总会受到考验。我们不能就此退缩。",
						"french": "Les limites de la force sont toujours mises à l'épreuve. Nous ne pouvons pas reculer ici.",
						"spanish": "Los límites de la fuerza siempre se ponen a prueba. No podemos retroceder aquí.",
						"vietnamese": "Giới hạn của sức mạnh luôn bị thử thách. Chúng ta không thể lùi bước ở đây.",
						"thai": "ความแข็งแกร่งมักถูกทดสอบเสมอ เราจะถอยไม่ได้ที่นี่",
						"hindi": "शक्ति की सीमा हमेशा परखी जाती है। हम यहाँ पीछे नहीं हट सकते।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 '얼음 무덤'의 진실을 마주해야 한다. 그게 우리의 운명이라면.",
						"english": "We must face the truth of this 'Ice Tomb'. If that is our destiny.",
						"japanese": "この『氷の墓』の真実を直視しなければならない。それが我々の運命ならば。",
						"chinese": "我们必须面对这座‘冰之墓’的真相。如果那是我们的命运。",
						"french": "Nous devons affronter la vérité de cette 'Tombe de Glace'. Si tel est notre destin.",
						"spanish": "Debemos enfrentar la verdad de esta 'Tumba de Hielo'. Si ese es nuestro destino.",
						"vietnamese": "Chúng ta phải đối mặt với sự thật của 'Mộ Băng' này. Nếu đó là định mệnh của chúng ta.",
						"thai": "เราต้องเผชิญหน้ากับความจริงของ 'สุสานน้ำแข็ง' แห่งนี้ หากนั่นคือโชคชะตาของเรา",
						"hindi": "हमें इस 'बर्फ की कब्र' की सच्चाई का सामना करना होगा। अगर यही हमारा भाग्य है।"
					},
					"speaker": "ivar"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "역시 대단하군. 하지만 방심하지 마라.",
						"english": "Impressive, as expected. But don't let your guard down.",
						"japanese": "やはり見事だ。だが、油断するな。",
						"chinese": "果然厉害。但别放松警惕。",
						"french": "Impressionnant, comme prévu. Mais ne baisse pas ta garde.",
						"spanish": "Impresionante, como era de esperar. Pero no bajes la guardia.",
						"vietnamese": "Quả nhiên là lợi hại. Nhưng đừng lơ là.",
						"thai": "ยอดเยี่ยมสมเป็นแก แต่ก็อย่าได้ประมาท",
						"hindi": "प्रभावशाली, जैसा कि अपेक्षित था। लेकिन लापरवाह मत बनो।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…후회하게 될 것이다. 이 미약한 존재들아.",
						"english": "...You will regret this. You insignificant beings.",
						"japanese": "…後悔することになるだろう。この取るに足らない存在どもめ。",
						"chinese": "…你们会后悔的。这些微不足道的存在。",
						"french": "...Vous le regretterez. Êtres insignifiants.",
						"spanish": "...Lo lamentaréis. Seres insignificantes.",
						"vietnamese": "...Ngươi sẽ phải hối hận thôi. Hỡi những kẻ yếu ớt này.",
						"thai": "…พวกเจ้าจะต้องเสียใจ เจ้าพวกสิ่งมีชีวิตอันอ่อนแอเอ๋ย",
						"hindi": "तुम्हें पछताना पड़ेगा। तुम तुच्छ प्राणी।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝난 건가…",
						"english": "Is it... over?",
						"japanese": "終わったのか…",
						"chinese": "结束了吗…",
						"french": "C'est... fini ?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Đã... kết thúc rồi sao?",
						"thai": "จบแล้วหรือนี่…",
						"hindi": "क्या यह... खत्म हो गया?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "싸늘한 증거들의 실체는 사라졌다. 그러나 더 깊은 미스터리가 시작될 뿐이었다.",
						"english": "The cold evidence vanished. Yet, a deeper mystery had only just begun.",
						"japanese": "冷たい証拠の正体は消え去った。だが、より深き謎が始まったに過ぎなかった。",
						"chinese": "冰冷的证据实体消失了。然而，更深的谜团才刚刚开始。",
						"french": "La froide évidence a disparu. Pourtant, un mystère plus profond venait seulement de commencer.",
						"spanish": "La fría evidencia se desvaneció. Sin embargo, un misterio más profundo acababa de empezar.",
						"vietnamese": "Bằng chứng lạnh lẽo đã tan biến. Tuy nhiên, một bí ẩn sâu sắc hơn chỉ mới bắt đầu.",
						"thai": "หลักฐานอันเยือกเย็นได้อันตรธานหายไป ทว่าปริศนาที่ลึกซึ้งยิ่งกว่าเพิ่งจะเริ่มต้นขึ้น",
						"hindi": "ठंडे सबूत मिट गए। फिर भी, एक गहरा रहस्य अभी शुरू ही हुआ था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들. 너희는 그저 얼어붙을 뿐이다.",
						"english": "Foolish mortals. You will simply freeze.",
						"japanese": "愚かな者どもめ。お前たちはただ凍りつくだけだ。",
						"chinese": "愚蠢的东西。你们只会冻结。",
						"french": "Imbéciles. Vous allez simplement geler.",
						"spanish": "Estúpidos. Simplemente os congelaréis.",
						"vietnamese": "Lũ ngu ngốc. Các ngươi sẽ chỉ đóng băng mà thôi.",
						"thai": "พวกเจ้ามันโง่เขลา เจ้าจะแข็งตายอยู่ตรงนี้",
						"hindi": "मूर्ख प्राणी। तुम बस जम जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没有…结束。",
						"french": "Ce n'est pas... encore fini.",
						"spanish": "Aún no... ha terminado.",
						"vietnamese": "Vẫn chưa… kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी... खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 나타났다. 온몸에서 서늘한 기운이 뿜어져 나왔다.",
						"english": "A colossal shadow appeared. A chilling aura emanated from its entire form.",
						"japanese": "巨大な影が現れた。全身から冷たい気配が立ち上る。",
						"chinese": "一个巨大的影子出现了。一股寒意从它全身散发出来。",
						"french": "Une ombre colossale est apparue. Une aura glaciale émanait de toute sa forme.",
						"spanish": "Una sombra colosal apareció. Un aura helada emanaba de todo su ser.",
						"vietnamese": "Một bóng đen khổng lồ xuất hiện. Một luồng khí lạnh lẽo tỏa ra từ toàn thân nó.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น ไอเย็นยะเยือกแผ่ออกมาจากทั่วร่าง",
						"hindi": "एक विशाल छाया प्रकट हुई। उसके पूरे शरीर से एक ठंडी आभा निकल रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 나의 영역에 발을 들이다니.",
						"english": "How dare you trespass into my domain.",
						"japanese": "よくも私の領域に足を踏み入れたな。",
						"chinese": "竟敢踏入我的领域。",
						"french": "Comment oses-tu pénétrer mon domaine.",
						"spanish": "¿Cómo osas pisar mi dominio?",
						"vietnamese": "Ngươi dám đặt chân vào lãnh địa của ta.",
						"thai": "แกกล้าดียังไงมาเหยียบย่ำอาณาเขตของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई मेरे क्षेत्र में कदम रखने की।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 모든 일의 원흉이냐!",
						"english": "So, you're the one... behind all of this!",
						"japanese": "貴様が…この全ての元凶か！",
						"chinese": "你就是…这一切的幕后黑手吗！",
						"french": "C'est toi... le cerveau derrière tout ça !",
						"spanish": "¿Eres tú... el cerebro detrás de todo esto?",
						"vietnamese": "Ngươi… chính là kẻ chủ mưu của tất cả sao!",
						"thai": "แกนั่นเอง… ต้นเหตุของเรื่องทั้งหมดนี่!",
						"hindi": "तो तुम हो… इन सब के पीछे की वजह!"
					}
				},
				{
					"speaker": "ivar",
					"spot": [
						1,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "{random_boss}. 너의 '강함'이 어디까지인지 나 이바르가 직접 확인하겠다.",
						"english": "{random_boss}. I, Ivar, shall personally gauge the extent of your 'strength'.",
						"japanese": "{random_boss}よ。貴様の「強さ」がどこまでか、このイヴァルが直接確認してやろう。",
						"chinese": "{random_boss}。我伊瓦尔会亲自确认你的“强大”究竟到何种程度。",
						"french": "{random_boss}. Moi, Ivar, je vais personnellement vérifier l'étendue de ta \"force\".",
						"spanish": "{random_boss}. Yo, Ivar, comprobaré personalmente hasta dónde llega tu \"fuerza\".",
						"vietnamese": "{random_boss}. Ta, Ivar, sẽ tự mình kiểm chứng 'sức mạnh' của ngươi đến đâu.",
						"thai": "{random_boss} ข้าไอบาร์จะขอพิสูจน์ \"ความแข็งแกร่ง\" ของเจ้าด้วยตัวเอง",
						"hindi": "{random_boss}. मैं, इवार, तुम्हारी 'शक्ति' की सीमा का व्यक्तिगत रूप से आकलन करूंगा।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"direction": "down",
					"action": "exit",
					"speaker": "ivar"
				}
			]
		}
	]
} as const;
