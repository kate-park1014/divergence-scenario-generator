export const scenario_snowy_cairn_96_03 = {
	"scenario_id": "snowy_cairn_96_03",
	"order": 3,
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
			"맹세의 시간. 돌무덤이 진실을 요구한다.",
			"손끝에 맺히는 서리. 얼어붙는 배신의 징후.",
			"전사 이바르, 모든 것을 걸고 맹세의 무게를 증명하려 한다."
		],
		"english": [
			"Time of oath. The stone tomb demands the truth.",
			"Frost at the fingertips. Signs of freezing betrayal.",
			"Warrior Ivar, risking everything to prove the weight of his oath."
		],
		"japanese": [
			"誓いの時。石塚が真実を求める。",
			"指先に宿る霜。凍てつく裏切りの兆候。",
			"戦士イヴァル、すべてを賭けて誓いの重さを証明しようとする。"
		],
		"chinese": [
			"誓约之时。石冢要求真相。",
			"指尖的寒霜。背叛的冰冷迹象。",
			"战士伊瓦尔，赌上一切来证明誓言的份量。"
		],
		"french": [
			"L'heure du serment. Le tombeau de pierre exige la vérité.",
			"Le givre au bout des doigts. Les signes d'une trahison glaciale.",
			"Le guerrier Ivar, risquant tout pour prouver le poids de son serment."
		],
		"spanish": [
			"Tiempo de juramento. La tumba de piedra exige la verdad.",
			"Escarcha en las yemas de los dedos. Señales de traición helada.",
			"El guerrero Ivar, arriesgando todo para demostrar el peso de su juramento."
		],
		"vietnamese": [
			"Thời khắc thề nguyền. Mộ đá đòi hỏi sự thật.",
			"Sương giá trên đầu ngón tay. Dấu hiệu của sự phản bội đóng băng.",
			"Chiến binh Ivar, liều mạng mọi thứ để chứng minh trọng lượng lời thề của mình."
		],
		"thai": [
			"เวลาแห่งคำสาบาน สุสานหินเรียกร้องความจริง",
			"น้ำค้างแข็งที่ปลายนิ้ว สัญญาณของการทรยศที่เยือกแข็ง",
			"นักรบอิวาร์ เสี่ยงทุกอย่างเพื่อพิสูจน์น้ำหนักของคำสาบานของเขา"
		],
		"hindi": [
			"शपथ का समय। पत्थर का मकबरा सच मांगता है।",
			"उंगलियों पर जमी ठंढ। जमते हुए विश्वासघात के संकेत।",
			"योद्धा इवर, अपनी शपथ के महत्व को साबित करने के लिए सब कुछ दांव पर लगा रहा है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "돌무덤 앞에 선 탐험대. 묵직한 침묵만이 감돈다.",
						"english": "The expedition team stands before the stone tomb. Only heavy silence hangs.",
						"japanese": "石塚の前に立つ探検隊。重い沈黙だけが漂う。",
						"chinese": "探险队站在石冢前。只有沉重的寂静。",
						"french": "L'équipe d'expédition se tient devant le tombeau de pierre. Seul un lourd silence règne.",
						"spanish": "El equipo de expedición se detiene ante la tumba de piedra. Solo un pesado silencio envuelve.",
						"vietnamese": "Đoàn thám hiểm đứng trước ngôi mộ đá. Chỉ có sự im lặng nặng nề bao trùm.",
						"thai": "ทีมสำรวจยืนอยู่หน้าสุสานหิน มีเพียงความเงียบงันหนักอึ้ง",
						"hindi": "अभियान दल पत्थर के मकबरे के सामने खड़ा है। केवल गहरा सन्नाटा छाया हुआ है।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "결국 여기까지 왔다. 이제 맹세를 증명할 때다.",
						"english": "We've finally made it this far. Now it's time to prove our oath.",
						"japanese": "ついにここまで来た。今こそ誓いを証明する時だ。",
						"chinese": "终于走到这里了。现在是时候证明我们的誓言了。",
						"french": "Nous avons enfin réussi à venir jusqu'ici. Il est temps de prouver notre serment.",
						"spanish": "Finalmente hemos llegado hasta aquí. Ahora es el momento de probar nuestro juramento.",
						"vietnamese": "Cuối cùng chúng ta cũng đến được đây. Bây giờ là lúc chứng minh lời thề của chúng ta.",
						"thai": "ในที่สุดเราก็มาถึงที่นี่ ตอนนี้ถึงเวลาพิสูจน์คำสาบานของเราแล้ว",
						"hindi": "हम आखिरकार यहां तक आ गए हैं। अब हमारी शपथ साबित करने का समय है।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "증명이라니? 우린 이미 충분히 증명했어.",
						"english": "Prove it? We've already proven enough.",
						"japanese": "証明だって？もう十分に証明しただろ。",
						"chinese": "证明？我们已经证明够多了。",
						"french": "Prouver ? Nous avons déjà suffisamment prouvé.",
						"spanish": "¿Probarlo? Ya hemos probado lo suficiente.",
						"vietnamese": "Chứng minh? Chúng ta đã chứng minh đủ rồi.",
						"thai": "พิสูจน์เหรอ? เราพิสูจน์มามากพอแล้ว",
						"hindi": "साबित करें? हमने पहले ही काफी साबित कर दिया है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진정한 강함은 끝까지 의심받는 법. 너희 안에도 약한 자가 있을지도.",
						"english": "True strength is always doubted until the end. There might be weakness among you too.",
						"japanese": "真の強さは最後まで疑われるもの。お前たちの中にも弱い者がいるかもしれない。",
						"chinese": "真正的强大直到最后都会被怀疑。你们之中也许也有弱者。",
						"french": "La vraie force est toujours mise en doute jusqu'à la fin. Il pourrait y avoir de la faiblesse parmi vous aussi.",
						"spanish": "La verdadera fuerza siempre es dudada hasta el final. Puede que haya debilidad entre vosotros también.",
						"vietnamese": "Sức mạnh thực sự luôn bị nghi ngờ cho đến cuối cùng. Cũng có thể có kẻ yếu đuối trong số các ngươi.",
						"thai": "ความแข็งแกร่งที่แท้จริงจะถูกสงสัยจนถึงที่สุด อาจมีจุดอ่อนในหมู่พวกเจ้าด้วย",
						"hindi": "सच्ची ताकत पर अंत तक संदेह किया जाता है। तुम्हारे बीच भी कमजोर लोग हो सकते हैं।"
					},
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech"
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
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base",
					"content": {
						"korean": "돌무덤은 거짓을 용납하지 않는다. 작은 의심도 얼어붙을 것이다.",
						"english": "The stone tomb does not tolerate lies. Even the smallest doubt will freeze.",
						"japanese": "石塚は偽りを許さない。小さな疑念も凍りつくだろう。",
						"chinese": "石冢不容许谎言。即使是最小的怀疑也会被冻结。",
						"french": "Le tombeau de pierre ne tolère pas les mensonges. Le moindre doute sera glacé.",
						"spanish": "La tumba de piedra no tolera las mentiras. Incluso la más mínima duda se congelará.",
						"vietnamese": "Mộ đá không dung thứ cho lời nói dối. Dù là nghi ngờ nhỏ nhất cũng sẽ bị đóng băng.",
						"thai": "สุสานหินไม่ทนต่อการโกหก แม้แต่ความสงสัยเล็กน้อยก็ยังจะแข็งตัว",
						"hindi": "पत्थर का मकबरा झूठ बर्दाश्त नहीं करता। छोटे से छोटे संदेह भी जम जाएंगे।"
					}
				},
				{
					"content": {
						"korean": "뭘 말하고 싶은 거지?",
						"english": "What are you trying to say?",
						"japanese": "何を言いたいんだ？",
						"chinese": "你想说什么？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué intentas decir?",
						"vietnamese": "Ngươi muốn nói gì?",
						"thai": "เจ้าต้องการจะพูดอะไร?",
						"hindi": "तुम क्या कहना चाहते हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"emotion": "sad",
					"content": {
						"korean": "너희 맹세에 한 점의 의혹이라도 있다면… 여기서 모든 걸 잃게 될 거다.",
						"english": "If there's even a shred of doubt in your oath... you'll lose everything here.",
						"japanese": "お前たちの誓いに少しでも疑惑があるなら…ここで全てを失うだろう。",
						"chinese": "如果你们的誓言中有一丝一毫的怀疑……你们将在这里失去一切。",
						"french": "S'il y a le moindre doute dans votre serment... vous perdrez tout ici.",
						"spanish": "Si hay una pizca de duda en vuestro juramento... lo perderéis todo aquí.",
						"vietnamese": "Nếu có dù chỉ một chút nghi ngờ trong lời thề của ngươi... ngươi sẽ mất tất cả ở đây.",
						"thai": "ถ้ามีแม้แต่ความสงสัยในคำสาบานของเจ้า... เจ้าจะเสียทุกอย่างที่นี่",
						"hindi": "यदि तुम्हारी शपथ में थोड़ी भी शंका है... तो तुम यहां सब कुछ खो दोगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "명예를 걸었다면, 그에 따르는 대가도 치를 각오를 해라.",
						"english": "If you stake your honor, be prepared to pay the price.",
						"japanese": "名誉を賭けるなら、その代償を払う覚悟をしろ。",
						"chinese": "若以名誉为赌注，就做好付出代价的准备。",
						"french": "Si tu as mis ton honneur en jeu, sois prêt à en payer le prix.",
						"spanish": "Si has apostado tu honor, prepárate para pagar el precio.",
						"vietnamese": "Nếu đã đặt danh dự lên bàn cân, hãy sẵn sàng trả giá.",
						"thai": "หากเจ้าเดิมพันด้วยเกียรติ ก็จงเตรียมพร้อมที่จะชดใช้",
						"hindi": "यदि तुमने अपनी प्रतिष्ठा दाँव पर लगाई है, तो कीमत चुकाने के लिए तैयार रहो。"
					},
					"emotion": "base",
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우리 맹세는 진짜야.",
						"english": "Our oath is true.",
						"japanese": "我らの誓いは本物だ。",
						"chinese": "我们的誓言是真的。",
						"french": "Notre serment est véritable.",
						"spanish": "Nuestro juramento es verdadero.",
						"vietnamese": "Lời thề của chúng ta là thật.",
						"thai": "คำสาบานของเราเป็นจริง",
						"hindi": "हमारी शपथ सच्ची है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…그럼 됐다. 돌무덤의 심판은 오직 진실만을 가릴 테니.",
						"english": "...Then so be it. The Stone Tomb's judgment will reveal only the truth.",
						"japanese": "…ならば良い。石の墓の審判は、真実のみを明らかにするだろう。",
						"chinese": "……那就好。石墓的审判只会揭示真相。",
						"french": "...Alors soit. Le jugement du Tombeau de Pierre ne révélera que la vérité.",
						"spanish": "...Entonces que así sea. El juicio de la Tumba de Piedra solo revelará la verdad.",
						"vietnamese": "...Vậy thì được. Sự phán xét của Mộ Đá sẽ chỉ tiết lộ sự thật.",
						"thai": "...ถ้าอย่างนั้นก็เอาเถอะ การพิพากษาของสุสานหินจะเผยความจริงเท่านั้น",
						"hindi": "…तो ऐसा ही हो। पत्थरों की कब्र का न्याय केवल सत्य को ही प्रकट करेगा।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"content": {
						"korean": "…이상하다. 냉기가 느껴지는군.",
						"english": "...Strange. I feel a chill.",
						"japanese": "…おかしい。冷気を感じる。",
						"chinese": "……奇怪。我感到一股寒意。",
						"french": "...Étrange. Je ressens un froid.",
						"spanish": "...Extraño. Siento un frío.",
						"vietnamese": "...Lạ thật. Ta cảm thấy một luồng khí lạnh.",
						"thai": "...แปลกจริง ข้ารู้สึกถึงความหนาวเย็น",
						"hindi": "…अजीब है। मुझे ठंडक महसूस हो रही है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가?",
						"english": "What?",
						"japanese": "何が？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไร?",
						"hindi": "क्या?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "ivar",
					"type": "speech",
					"content": {
						"korean": "너희 중 누군가의 손끝에… 서리가 맺히고 있다.",
						"english": "On one of your fingertips... frost is forming.",
						"japanese": "お前たちの中の誰かの指先に…霜が結び始めている。",
						"chinese": "你们中某人的指尖上……正在结霜。",
						"french": "Au bout des doigts de l'un d'entre vous... du givre se forme.",
						"spanish": "En la punta de los dedos de alguien de vosotros... se está formando escarcha.",
						"vietnamese": "Trên đầu ngón tay của một ai đó trong các ngươi... sương giá đang hình thành.",
						"thai": "ที่ปลายนิ้วของใครบางคนในพวกเจ้า... น้ำค้างแข็งกำลังก่อตัว",
						"hindi": "तुम में से किसी एक की उंगलियों पर... पाला पड़ रहा है।"
					}
				},
				{
					"content": {
						"korean": "…! 이게 무슨…",
						"english": "...! What is this...?",
						"japanese": "…！これは一体…",
						"chinese": "……！这是什么……",
						"french": "...! Qu'est-ce que c'est que ça...",
						"spanish": "...! ¿Qué es esto...?",
						"vietnamese": "...! Đây là cái gì...?",
						"thai": "...! นี่มันอะไรกัน...",
						"hindi": "…! यह क्या…?"
					},
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "배신자의 징후. 돌무덤이 맹세의 진위를 가리고 있다.",
						"english": "A sign of betrayal. The Stone Tomb is testing the truth of your oath.",
						"japanese": "裏切り者の徴候。石の墓が、誓いの真偽を試している。",
						"chinese": "背叛者的迹象。石墓正在检验誓言的真伪。",
						"french": "Un signe de trahison. Le Tombeau de Pierre éprouve la vérité de votre serment.",
						"spanish": "Una señal de traición. La Tumba de Piedra está probando la verdad de vuestro juramento.",
						"vietnamese": "Dấu hiệu của kẻ phản bội. Mộ Đá đang kiểm tra sự thật của lời thề.",
						"thai": "สัญญาณของการทรยศ สุสานหินกำลังทดสอบความจริงของคำสาบานของเจ้า",
						"hindi": "विश्वासघात का संकेत। पत्थरों की कब्र तुम्हारी शपथ की सच्चाई परख रही है।"
					},
					"emotion": "angry",
					"speaker": "ivar",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으윽… 맹세의 무게를… 증명했군.",
						"english": "Ugh… You’ve… proven the weight of the oath.",
						"japanese": "くぅぅ…誓いの重さを…証明したか。",
						"chinese": "呃啊…你…证明了誓言的分量。",
						"french": "Ugh… Tu as… prouvé le poids du serment.",
						"spanish": "Ugh… Has… demostrado el peso del juramento.",
						"vietnamese": "Khừ… Ngươi đã… chứng minh được sức nặng của lời thề.",
						"thai": "อึก… เจ้า… ได้พิสูจน์ถึงน้ำหนักของคำสาบานแล้ว",
						"hindi": "उह… तुमने… शपथ का महत्व साबित कर दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 서리는 사라지지 않았다. 아직 너희 안에….",
						"english": "But… the frost hasn’t vanished. It’s still within you…",
						"japanese": "だが…霜は消えていない。まだ君たちの中に…。",
						"chinese": "但是…寒霜并未消散。它还在你们体内…。",
						"french": "Mais… le givre n'a pas disparu. Il est toujours en vous…",
						"spanish": "Pero… la escarcha no ha desaparecido. Todavía está dentro de vosotros…",
						"vietnamese": "Nhưng… sương giá vẫn chưa biến mất. Nó vẫn còn trong các ngươi…",
						"thai": "แต่… น้ำค้างแข็งยังไม่หายไป มันยังคงอยู่ในตัวเจ้า…",
						"hindi": "लेकिन… पाला गायब नहीं हुआ है। यह अभी भी तुम्हारे अंदर है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…무슨 말이야?",
						"english": "…What do you mean?",
						"japanese": "…どういうことだ？",
						"chinese": "…你说什么？",
						"french": "…Qu'est-ce que tu veux dire ?",
						"spanish": "…¿Qué quieres decir?",
						"vietnamese": "…Ngươi nói gì vậy?",
						"thai": "…หมายความว่าอย่างไร?",
						"hindi": "…आपका क्या मतलब है?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar",
					"type": "direction"
				},
				{
					"content": {
						"korean": "승리했다… 하지만 이 시험은 끝나지 않았다.",
						"english": "We've won… but this trial isn't over.",
						"japanese": "勝利した…だがこの試練は終わっていない。",
						"chinese": "我们胜利了…但这场考验还未结束。",
						"french": "Nous avons gagné… mais cette épreuve n'est pas terminée.",
						"spanish": "Hemos ganado… pero esta prueba no ha terminado.",
						"vietnamese": "Chúng ta đã thắng… nhưng thử thách này vẫn chưa kết thúc.",
						"thai": "เราชนะแล้ว… แต่การทดสอบนี้ยังไม่จบ",
						"hindi": "हम जीत गए… लेकिन यह परीक्षा अभी खत्म नहीं हुई है।"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "돌무덤의 서리는 잠시 물러났다. 그러나 의심의 그림자는 여전히 남아 있었다.",
						"english": "The cairn's frost receded for a moment. But the shadow of doubt still lingered.",
						"japanese": "石塚の霜は一時的に退いた。しかし、疑念の影は依然として残っていた。",
						"chinese": "石冢的寒霜暂时退去。但疑虑的阴影依然挥之不去。",
						"french": "Le givre du cairn s'est retiré un instant. Mais l'ombre du doute planait toujours.",
						"spanish": "La escarcha del túmulo retrocedió un momento. Pero la sombra de la duda aún persistía.",
						"vietnamese": "Sương giá trên tháp đá tạm thời rút lui. Nhưng bóng tối của sự nghi ngờ vẫn còn vương vấn.",
						"thai": "น้ำค้างแข็งของกองหินถอยกลับไปชั่วขณะ แต่เงามืดแห่งความสงสัยยังคงอยู่",
						"hindi": "पत्थर के ढेर का पाला पल भर के लिए पीछे हट गया। लेकिन संदेह का साया अभी भी मंडरा रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "돌무덤의 심장부. 거대한 그림자가 나타났다.",
						"english": "The heart of the Stone Tomb. A colossal shadow appeared.",
						"japanese": "石の墓の心臓部。巨大な影が現れた。",
						"chinese": "石墓的核心。一个巨大的影子出现了。",
						"french": "Le cœur du Tombeau de Pierre. Une ombre colossale apparut.",
						"spanish": "El corazón de la Tumba de Piedra. Una sombra colosal apareció.",
						"vietnamese": "Trung tâm của Mộ Đá. Một bóng đen khổng lồ xuất hiện.",
						"thai": "ใจกลางของสุสานหิน เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "पत्थरों की कब्र का हृदय। एक विशाल परछाई प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔군. 불순한 맹세를 품은 자들이여.",
						"english": "You've come. Those who harbor impure oaths.",
						"japanese": "来たか。不純な誓いを抱く者たちよ。",
						"chinese": "你们来了。那些心怀不纯誓言之人。",
						"french": "Vous êtes venus. Ceux qui portent des serments impurs.",
						"spanish": "Habéis venido. Aquellos que albergan juramentos impuros.",
						"vietnamese": "Các ngươi đã đến. Những kẻ mang lời thề không trong sạch.",
						"thai": "เจ้ามาแล้วสินะ พวกที่เก็บงำคำสาบานที่ไม่บริสุทธิ์",
						"hindi": "तुम आ गए। वे, जो अपवित्र शपथ धारण किए हुए हैं।"
					}
				},
				{
					"content": {
						"korean": "…무슨 소리야!",
						"english": "…What was that?!",
						"japanese": "…何のことだ！",
						"chinese": "…你说什么！",
						"french": "…Qu'est-ce que c'est que ça !",
						"spanish": "…¡¿Qué dices?!",
						"vietnamese": "…Cái gì vậy!?",
						"thai": "…อะไรนะ!",
						"hindi": "…यह क्या बकवास है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이미 서리가 너희 손끝을 물들이고 있지 않나. 진실을 말해라.",
						"english": "Frost already stains your fingertips. Tell me the truth.",
						"japanese": "霜が既に君たちの指先を染めているではないか。真実を語れ。",
						"chinese": "寒霜已染上你的指尖。说出真相。",
						"french": "Le givre a déjà taché le bout de vos doigts. Dites la vérité.",
						"spanish": "La escarcha ya tiñe vuestras yemas. Decid la verdad.",
						"vietnamese": "Sương giá đã vấy bẩn đầu ngón tay ngươi. Hãy nói sự thật.",
						"thai": "น้ำค้างแข็งย้อมปลายนิ้วของเจ้าแล้ว จงบอกความจริงมา",
						"hindi": "पाला पहले ही तुम्हारी उंगलियों को रंग चुका है। सच बताओ।"
					}
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "우리의 맹세는 명예를 건 것이다. 네가 감히 심판하려 드느냐!",
						"english": "Our oath is sworn on honor. Do you dare to judge us?!",
						"japanese": "我らの誓いは名誉をかけたもの。貴様があえて裁こうというのか！",
						"chinese": "我们的誓言以荣誉为赌注。你竟敢审判我们！",
						"french": "Notre serment est une question d'honneur. Oses-tu nous juger !",
						"spanish": "Nuestro juramento se basa en el honor. ¡¿Te atreves a juzgarnos?!",
						"vietnamese": "Lời thề của chúng ta được lập trên danh dự. Ngươi dám phán xét sao!",
						"thai": "คำสาบานของเราสาบานบนเกียรติยศ เจ้ากล้าตัดสินเราหรือ!",
						"hindi": "हमारी शपथ सम्मान पर है। क्या तुम हमें आंकने की हिम्मत करते हो?!"
					},
					"type": "speech",
					"speaker": "ivar",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "심판은 이미 시작됐다. 이 돌무덤이 모든 것을 결정할 것이다.",
						"english": "Judgment has already begun. This cairn will decide everything.",
						"japanese": "審判は既に始まった。この石塚が全てを決定するだろう。",
						"chinese": "审判已经开始。这座石冢将决定一切。",
						"french": "Le jugement a déjà commencé. Ce cairn décidera de tout.",
						"spanish": "El juicio ya ha comenzado. Este túmulo lo decidirá todo.",
						"vietnamese": "Phán xét đã bắt đầu rồi. Ngọn tháp đá này sẽ quyết định tất cả.",
						"thai": "การตัดสินได้เริ่มขึ้นแล้ว กองหินนี้จะตัดสินทุกสิ่ง",
						"hindi": "न्याय पहले ही शुरू हो चुका है। यह पत्थर का ढेर सब कुछ तय करेगा।"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "차가운 서리가 탐험대를 집어삼켰다. 맹세는 깨지고 말았다.",
						"english": "The cold frost engulfed the expedition. The oath was broken.",
						"japanese": "冷たい霜が探検隊を飲み込んだ。誓いは破られてしまった。",
						"chinese": "冰冷的寒霜吞噬了探险队。誓言被打破了。",
						"french": "Le givre froid a englouti l'expédition. Le serment était rompu.",
						"spanish": "La fría escarcha engulló a la expedición. El juramento se rompió.",
						"vietnamese": "Sương giá lạnh lẽo bao trùm đoàn thám hiểm. Lời thề đã bị phá vỡ.",
						"thai": "น้ำค้างแข็งเย็นเยือกกลืนกินคณะสำรวจ คำสาบานถูกหักแล้ว",
						"hindi": "ठंडी पाला ने अभियान को निगल लिया। शपथ टूट गई थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "거짓된 맹세는 여기서 끝이다. 너희의 의지는 무너졌다.",
						"english": "False vows end here. Your will is broken.",
						"japanese": "偽りの誓いはここで終わる。お前たちの意志は砕かれた。",
						"chinese": "虚假的誓言到此为止。你们的意志已崩溃。",
						"french": "Les faux serments s'arrêtent ici. Votre volonté est brisée.",
						"spanish": "Las falsas promesas terminan aquí. Vuestra voluntad está rota.",
						"vietnamese": "Lời thề dối trá kết thúc tại đây. Ý chí của các ngươi đã sụp đổ.",
						"thai": "คำสาบานลวงจบลงที่นี่ เจตจำนงของพวกเจ้าพังทลายลงแล้ว",
						"hindi": "झूठी कसमें यहीं खत्म होती हैं। तुम्हारी इच्छाशक्ति टूट गई है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아니… 아직 끝나지 않았어. 우린 다시 일어설 거야!",
						"english": "No... it's not over yet. We will rise again!",
						"japanese": "いや…まだ終わってない。私たちはまた立ち上がる！",
						"chinese": "不…还没结束。我们会再次站起来！",
						"french": "Non... ce n'est pas encore fini. Nous nous relèverons !",
						"spanish": "No... aún no ha terminado. ¡Nos levantaremos de nuevo!",
						"vietnamese": "Không... vẫn chưa kết thúc. Chúng ta sẽ đứng dậy lần nữa!",
						"thai": "ไม่... ยังไม่จบ เราจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "नहीं... अभी खत्म नहीं हुआ है। हम फिर से उठेंगे!"
					}
				}
			]
		}
	]
} as const;
