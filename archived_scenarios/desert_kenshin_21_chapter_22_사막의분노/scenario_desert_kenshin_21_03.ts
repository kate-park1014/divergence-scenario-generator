export const scenario_desert_kenshin_21_03 = {
	"scenario_id": "desert_kenshin_21_03",
	"order": 3,
	"act": "rising",
	"theme": "desert",
	"actors": {
		"dune": {
			"id": "mon_fc976b75-f009-4bf2-b660-a3053c95d668",
			"name": {
				"korean": "듄",
				"english": "Dune",
				"japanese": "デューン",
				"chinese": "沙丘",
				"french": "Dune",
				"spanish": "Dune",
				"vietnamese": "Dune",
				"thai": "ดูน",
				"hindi": "ड्यून"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/7568ec11-0329-44b4-740a-71b25ef62400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ba7095b5-0d99-40bd-1155-b57701c00f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"메마른 사막, 목마름은 곧 죽음이었다.",
			"오아시스의 물은 권력자들의 사유물.",
			"그 그림자 속, 누군가 은밀한 거래를 속삭인다.",
			"진실은 언제나 목마른 자에게 가혹했다."
		],
		"english": [
			"Arid desert, thirst meant death.",
			"Oasis water, a private commodity for the powerful.",
			"In the shadows, someone whispers a secret deal.",
			"Truth was always cruel to the thirsty."
		],
		"japanese": [
			"乾いた砂漠、喉の渇きは即ち死であった。",
			"オアシスの水は、権力者たちの私有物。",
			"その影で、誰かが密かに取引を囁く。",
			"真実はいつも、喉の渇いた者には過酷だった。"
		],
		"chinese": [
			"贫瘠的沙漠，口渴即是死亡。",
			"绿洲之水，权贵们的私有物。",
			"在那阴影中，有人窃窃私语着秘密交易。",
			"真相对于口渴者，总是残酷的。"
		],
		"french": [
			"Désert aride, la soif était synonyme de mort.",
			"L'eau de l'oasis, propriété privée des puissants.",
			"Dans l'ombre, quelqu'un murmure un marché secret.",
			"La vérité était toujours cruelle pour les assoiffés."
		],
		"spanish": [
			"Desierto árido, la sed era la muerte.",
			"El agua del oasis, propiedad privada de los poderosos.",
			"En esa sombra, alguien susurra un trato secreto.",
			"La verdad siempre fue cruel para los sedientos."
		],
		"vietnamese": [
			"Sa mạc khô cằn, khát nước đồng nghĩa với cái chết.",
			"Nước ốc đảo, tài sản riêng của kẻ quyền thế.",
			"Trong bóng tối, ai đó thì thầm một giao dịch bí mật.",
			"Sự thật luôn khắc nghiệt với những kẻ khát nước."
		],
		"thai": [
			"ทะเลทรายแห้งแล้ง ความกระหายคือนิยามของความตาย",
			"น้ำจากโอเอซิสเป็นของส่วนตัวของผู้มีอำนาจ",
			"ในเงามืด มีบางคนกระซิบถึงข้อตกลงลับ",
			"ความจริงมักโหดร้ายกับผู้กระหาย"
		],
		"hindi": [
			"शुष्क रेगिस्तान, प्यास का मतलब मौत था।",
			"नखलिस्तान का पानी, सत्ताधारियों की निजी संपत्ति।",
			"उस छाया में, कोई गुप्त सौदेबाजी फुसफुसाता है।",
			"सत्य हमेशा प्यासे के लिए कठोर था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dune",
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "들었어? 오아시스의 물이… 몰래 팔리고 있어.",
						"english": "Did you hear? The oasis water... it's being secretly sold.",
						"japanese": "聞いた？オアシスの水が…こっそり売られてるんだって。",
						"chinese": "听说了吗？绿洲的水…正在被偷偷贩卖。",
						"french": "Tu as entendu ? L'eau de l'oasis... elle est vendue en secret.",
						"spanish": "¿Escuchaste? El agua del oasis... la están vendiendo en secreto.",
						"vietnamese": "Nghe chưa? Nước ốc đảo… đang bị bán lén lút.",
						"thai": "ได้ยินไหม น้ำจากโอเอซิส... กำลังถูกลักลอบขาย",
						"hindi": "सुना तुमने? नखलिस्तान का पानी... चोरी से बेचा जा रहा है।"
					}
				},
				{
					"content": {
						"korean": "뭐? 누가 감히!",
						"english": "What? Who dares!",
						"japanese": "何？誰がそんな真似を！",
						"chinese": "什么？谁敢？！",
						"french": "Quoi ? Qui ose !",
						"spanish": "¿Qué? ¡Quién se atreve!",
						"vietnamese": "Gì cơ? Ai dám chứ!",
						"thai": "อะไรนะ ใครกล้า!",
						"hindi": "क्या? किसकी हिम्मत!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "높으신 분들 말이야. 자기들 배 채우려고.",
						"english": "The higher-ups. To line their own pockets.",
						"japanese": "お偉いさんたちさ。自分たちの腹を満たすために。",
						"chinese": "那些高层人士。为了中饱私囊。",
						"french": "Les hauts placés. Pour s'en mettre plein les poches.",
						"spanish": "Los de arriba. Para llenarse los bolsillos.",
						"vietnamese": "Là bọn cấp trên đó. Để tư lợi thôi.",
						"thai": "พวกคนใหญ่คนโตนั่นแหละ เพื่อประโยชน์ส่วนตน",
						"hindi": "बड़े लोग। अपनी जेबें भरने के लिए।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼…!",
						"english": "Unbelievable...!",
						"japanese": "信じられない…！",
						"chinese": "太荒谬了…！",
						"french": "C'est absurde... !",
						"spanish": "¡No puede ser...!",
						"vietnamese": "Không thể tin được…!",
						"thai": "ไม่น่าเชื่อ...!",
						"hindi": "असंभव...!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 450,
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "더 충격적인 건 뭔지 알아? 일부러 물줄기를 막는다는 소문도 있어.",
						"english": "Want to know what's more shocking? There are rumors they're deliberately blocking the water supply.",
						"japanese": "もっと衝撃的なこと、知ってる？わざと水路を塞いでるって噂もあるんだ。",
						"chinese": "你知道更令人震惊的是什么吗？还有传言说他们故意堵塞水源。",
						"french": "Tu veux savoir ce qui est encore plus choquant ? Il y a des rumeurs qu'ils bloquent délibérément les cours d'eau.",
						"spanish": "¿Quieres saber lo más impactante? Hay rumores de que están bloqueando el flujo de agua a propósito.",
						"vietnamese": "Muốn biết điều gì sốc hơn không? Có tin đồn họ cố tình chặn nguồn nước đó.",
						"thai": "อยากรู้เรื่องที่น่าตกใจกว่านี้ไหม มีข่าวลือว่าพวกเขากำลังจงใจขวางทางน้ำ",
						"hindi": "और भी चौंकाने वाली बात जानना चाहते हो? अफवाहें हैं कि वे जानबूझकर पानी का रास्ता रोक रहे हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "사람들을 죽이려는 거야?",
						"english": "Are they trying to kill people?",
						"japanese": "人々を殺そうとしているの？",
						"chinese": "他们是想害死人吗？",
						"french": "Ils essaient de tuer des gens ?",
						"spanish": "¿Están intentando matar a la gente?",
						"vietnamese": "Họ muốn giết người sao?",
						"thai": "พวกเขาพยายามจะฆ่าคนหรือเปล่า",
						"hindi": "क्या वे लोगों को मारना चाहते हैं?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…그들이 말하는 '저주'는 사실, 그들의 탐욕일 뿐이야.",
						"english": "...The 'curse' they speak of is, in fact, merely their own greed.",
						"japanese": "「…彼らが言う『呪い』は、実は彼らの貪欲に過ぎない。」",
						"chinese": "「……他们所说的“诅咒”，实际上只是他们的贪婪。」",
						"french": "...La 'malédiction' dont ils parlent n'est en fait que leur propre cupidité.",
						"spanish": "...La 'maldición' de la que hablan es, en realidad, solo su propia codicia.",
						"vietnamese": "...Cái 'lời nguyền' mà họ nói, thực ra chỉ là lòng tham của họ.",
						"thai": "...'คำสาป' ที่พวกเขาพูดถึง แท้จริงแล้วก็แค่ความโลภของพวกเขาเอง",
						"hindi": "...वे जिस 'श्राप' की बात करते हैं, वह वास्तव में सिर्फ उनका अपना लालच है।"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "오아시스 주변 식물들이 기이하게 시들어가기 시작했다.",
						"english": "Plants around the oasis began to wither strangely.",
						"japanese": "「オアシス周辺の植物が奇妙に枯れ始めた。」",
						"chinese": "「绿洲周围的植物开始诡异地枯萎。」",
						"french": "Les plantes autour de l'oasis ont commencé à se flétrir étrangement.",
						"spanish": "Las plantas alrededor del oasis comenzaron a marchitarse extrañamente.",
						"vietnamese": "Thực vật quanh ốc đảo bắt đầu héo úa một cách kỳ lạ.",
						"thai": "พืชรอบโอเอซิสเริ่มเหี่ยวเฉาอย่างประหลาด",
						"hindi": "नखलिस्तान के आसपास के पौधे अजीब तरह से मुरझाने लगे।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "dune",
					"action": "enter",
					"duration_ms": 550,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "마을 사람들… 물 때문에 쓰러져가. 근데 놈들은 더 비싸게 팔 궁리만 해.",
						"english": "Villagers... are collapsing from lack of water. But those bastards only scheme to sell it for more.",
						"japanese": "「村人たちは…水のために倒れていく。だが奴らは、もっと高く売ることばかり考えている。」",
						"chinese": "「村民们……因缺水而倒下。可那些家伙却只想着怎么卖出更高的价钱。」",
						"french": "Les villageois... s'effondrent à cause de l'eau. Mais ces salauds ne pensent qu'à la vendre plus cher.",
						"spanish": "Los aldeanos... están colapsando por el agua. Pero esos tipos solo piensan en venderla más cara.",
						"vietnamese": "Dân làng... gục ngã vì thiếu nước. Nhưng bọn chúng chỉ nghĩ cách bán nó đắt hơn.",
						"thai": "ชาวบ้าน... ล้มป่วยเพราะน้ำ แต่พวกมันกลับคิดแต่จะขายให้แพงขึ้น",
						"hindi": "ग्रामीण... पानी की वजह से गिर रहे हैं। लेकिन वे कमीने सिर्फ इसे और महंगा बेचने की योजना बना रहे हैं।"
					},
					"speaker": "dune",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이대로 둘 수는 없어.",
						"english": "I can't let this continue.",
						"japanese": "「このままにしてはおけない。」",
						"chinese": "「不能再这样下去了。」",
						"french": "Je ne peux pas laisser les choses ainsi.",
						"spanish": "No puedo permitir que esto siga.",
						"vietnamese": "Không thể để mọi chuyện như thế này được.",
						"thai": "จะปล่อยไว้แบบนี้ไม่ได้",
						"hindi": "मैं इसे ऐसे नहीं छोड़ सकता।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "맞아. 이건 자연의 저주가 아니야. 인간의 악의라고!",
						"english": "Exactly. This isn't a curse of nature. It's human malice!",
						"japanese": "「そうだ。これは自然の呪いじゃない。人間の悪意だ！」",
						"chinese": "「没错。这不是自然的诅咒。这是人类的恶意！」",
						"french": "Exactement. Ce n'est pas une malédiction de la nature. C'est la malveillance humaine !",
						"spanish": "Exacto. Esto no es una maldición de la naturaleza. ¡Es la malicia humana!",
						"vietnamese": "Đúng vậy. Đây không phải lời nguyền của tự nhiên. Đây là sự độc ác của con người!",
						"thai": "ใช่แล้ว นี่ไม่ใช่คำสาปจากธรรมชาติ แต่มันคือความอาฆาตแค้นของมนุษย์!",
						"hindi": "बिल्कुल। यह प्रकृति का श्राप नहीं है। यह मानवीय द्वेष है!"
					},
					"type": "speech",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그들의 더러운 비밀… 내가 밝혀낼 거야.",
						"english": "Their dirty secrets... I'll expose them.",
						"japanese": "「奴らの汚い秘密…私が暴いてやる。」",
						"chinese": "「他们肮脏的秘密……我会揭露出来。」",
						"french": "Leurs sales secrets... je les révélerai.",
						"spanish": "Sus sucios secretos... los revelaré.",
						"vietnamese": "Bí mật bẩn thỉu của bọn chúng... Ta sẽ vạch trần nó.",
						"thai": "ความลับสกปรกของพวกมัน... ฉันจะเปิดเผยมัน",
						"hindi": "उनके गंदे रहस्य... मैं उन्हें उजागर करूँगा।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 400,
					"action": "enter",
					"speaker": "dune"
				},
				{
					"type": "speech",
					"speaker": "dune",
					"content": {
						"korean": "조심해야 해. 놈들은 비밀을 지키기 위해 뭐든 할 거야.",
						"english": "Be careful. They'll do anything to protect their secrets.",
						"japanese": "「気をつけろ。奴らは秘密を守るためなら何でもするだろう。」",
						"chinese": "「要小心。那些家伙为了守护秘密会不择手段。」",
						"french": "Fais attention. Ils feront n'importe quoi pour protéger leurs secrets.",
						"spanish": "Ten cuidado. Harán cualquier cosa para proteger sus secretos.",
						"vietnamese": "Hãy cẩn thận. Bọn chúng sẽ làm mọi thứ để giữ bí mật.",
						"thai": "ต้องระวัง พวกมันจะทำทุกอย่างเพื่อปกป้องความลับ",
						"hindi": "सावधान रहना। वे अपने रहस्यों को छिपाने के लिए कुछ भी करेंगे।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "멈추지 않아. 이미 너무 많은 걸 봤어.",
						"english": "I won't stop. I've already seen too much.",
						"japanese": "「止まらない。もう多くを見すぎてしまった。」",
						"chinese": "「我不会停下。我已经看到了太多。」",
						"french": "Je ne m'arrêterai pas. J'ai déjà trop vu.",
						"spanish": "No me detendré. Ya he visto demasiado.",
						"vietnamese": "Không thể dừng lại. Tôi đã thấy quá nhiều rồi.",
						"thai": "จะไม่หยุด ฉันเห็นมามากเกินไปแล้ว",
						"hindi": "मैं नहीं रुकूंगा। मैंने पहले ही बहुत कुछ देख लिया है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그래. 진실은… 곧 터져 나올 거야.",
						"english": "Yes. The truth... will soon burst out.",
						"japanese": "「そうだ。真実は…もうすぐ明らかになる。」",
						"chinese": "「没错。真相……很快就会大白。」",
						"french": "Oui. La vérité... éclatera bientôt.",
						"spanish": "Sí. La verdad... pronto saldrá a la luz.",
						"vietnamese": "Đúng vậy. Sự thật... sẽ sớm được phơi bày.",
						"thai": "ใช่ ความจริง... จะเปิดเผยออกมาในไม่ช้า",
						"hindi": "हाँ। सच... जल्द ही सामने आ जाएगा।"
					},
					"type": "speech",
					"speaker": "dune",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "점점 더 깊은 곳으로 향한다. 돌아갈 길은 보이지 않는다.",
						"english": "Heading deeper and deeper. There's no way back.",
						"japanese": "「ますます深淵へと向かう。戻る道は見えない。」",
						"chinese": "「向着更深处前行。已无回头之路。」",
						"french": "S'enfonçant de plus en plus profondément. Le chemin du retour n'est plus visible.",
						"spanish": "Dirigiéndome cada vez más profundo. No hay camino de regreso.",
						"vietnamese": "Tiến sâu hơn nữa. Không còn đường quay lại.",
						"thai": "มุ่งหน้าสู่ส่วนลึกยิ่งขึ้น ไม่มีทางหวนกลับแล้ว",
						"hindi": "गहराई में और गहराई में जा रहा हूँ। वापसी का रास्ता नहीं दिख रहा है।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "하찮은 것들이. 감히 우리의 질서를 거스르려 하는가?",
						"english": "Insignificant beings. Dare you defy our order?",
						"japanese": "取るに足らぬ者どもめ。よくも我らの秩序に逆らおうとするか？",
						"chinese": "卑微之物。竟敢违抗我们的秩序？",
						"french": "Misérables. Osez-vous défier notre ordre ?",
						"spanish": "Insignificantes. ¿Os atrevéis a desafiar nuestro orden?",
						"vietnamese": "Đồ hèn mọn. Dám cả gan chống lại trật tự của chúng ta sao?",
						"thai": "พวกไร้ค่า. กล้าดียังไงมาขัดขวางระเบียบของเรา?",
						"hindi": "तुच्छ प्राणियों। क्या तुम हमारी व्यवस्था का उल्लंघन करने की हिम्मत करते हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "너희의 질서는 탐욕으로 만들어진 허상일 뿐이야!",
						"english": "Your order is but an illusion born of greed!",
						"japanese": "お前たちの秩序は、強欲が生み出した虚像に過ぎない！",
						"chinese": "你们的秩序不过是贪婪编织的幻象！",
						"french": "Votre ordre n'est qu'une illusion née de l'avidité !",
						"spanish": "¡Vuestro orden no es más que una ilusión nacida de la avaricia!",
						"vietnamese": "Trật tự của các ngươi chỉ là ảo ảnh được tạo ra từ lòng tham thôi!",
						"thai": "ระเบียบของพวกเจ้าเป็นเพียงภาพลวงตาที่เกิดจากความโลภเท่านั้น!",
						"hindi": "तुम्हारी व्यवस्था केवल लालच से बना एक भ्रम है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "후회하게 될 거다. 이 사막은 강자만이 살아남는 곳.",
						"english": "You will regret this. Only the strong survive in this desert.",
						"japanese": "後悔することになるぞ。この砂漠では強者だけが生き残る。",
						"chinese": "你会后悔的。这片沙漠，唯强者生存。",
						"french": "Vous le regretterez. Seuls les forts survivent dans ce désert.",
						"spanish": "Lo lamentaréis. En este desierto, solo los fuertes sobreviven.",
						"vietnamese": "Ngươi sẽ phải hối hận. Sa mạc này chỉ có kẻ mạnh mới sống sót.",
						"thai": "เจ้าจะต้องเสียใจ. ทะเลทรายแห่งนี้มีแต่ผู้แข็งแกร่งเท่านั้นที่อยู่รอด.",
						"hindi": "तुम्हें पछताना पड़ेगा। इस रेगिस्तान में केवल बलवान ही जीवित रहते हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 것. 이 정도로는… 아무것도 바꿀 수 없어.",
						"english": "Foolish one. With this... you can change nothing.",
						"japanese": "愚かな者め。この程度では…何も変えられぬ。",
						"chinese": "愚蠢的东西。凭这点本事…什么都改变不了。",
						"french": "Imbécile. Avec si peu... vous ne pouvez rien changer.",
						"spanish": "Estúpido. Con esto... no puedes cambiar nada.",
						"vietnamese": "Đồ ngu ngốc. Chừng này... không thể thay đổi được gì cả.",
						"thai": "เจ้าโง่. แค่นี้… เปลี่ยนอะไรไม่ได้หรอก.",
						"hindi": "मूर्ख। इतने से... तुम कुछ भी नहीं बदल सकते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 아직… 끝나지 않았어!",
						"english": "Damn it... It's not... over yet!",
						"japanese": "くそっ…まだ…終わってない！",
						"chinese": "该死…还没…结束！",
						"french": "Maudit... Ce n'est pas... encore fini !",
						"spanish": "¡Maldita sea... No ha... terminado aún!",
						"vietnamese": "Chết tiệt... Vẫn chưa... kết thúc!",
						"thai": "บ้าจริง… ยัง… ไม่จบหรอก!",
						"hindi": "धिक्कार है... अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"content": {
						"korean": "다시 와라. 그때도 마찬가지일 테지만.",
						"english": "Come again. Though it will be the same then.",
						"japanese": "また来るがいい。その時も同じことだろうがな。",
						"chinese": "再来吧。不过结果还是一样。",
						"french": "Revenez. Bien que ce sera la même chose.",
						"spanish": "Vuelve. Aunque será lo mismo.",
						"vietnamese": "Hãy trở lại đi. Mặc dù khi đó cũng sẽ như vậy thôi.",
						"thai": "กลับมาอีกสิ. ถึงตอนนั้นก็คงไม่ต่างกันหรอก.",
						"hindi": "फिर से आओ। हालाँकि तब भी वही होगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크윽… 이까짓 방해로는… 우리의 계획을 막을 수 없어…!",
						"english": "Ugh... Such petty interference... won't stop our plans...!",
						"japanese": "ぐっ…これしきの妨害で…我らの計画は止められぬ…！",
						"chinese": "呃…这点阻碍…阻止不了我们的计划…！",
						"french": "Urgh... Cette misérable entrave... ne peut arrêter nos plans... !",
						"spanish": "Ugh... Esta insignificante interferencia... no podrá detener nuestros planes...!",
						"vietnamese": "Khặc... Chướng ngại nhỏ nhặt này... không thể ngăn cản kế hoạch của chúng ta...!",
						"thai": "อึก… แค่สิ่งกีดขวางแค่นี้… หยุดแผนของเราไม่ได้หรอก…!",
						"hindi": "उफ़... इतनी छोटी-सी बाधा... हमारी योजनाओं को नहीं रोक सकती...!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마. 너희의 시대는 끝났어.",
						"english": "Enough nonsense. Your era is over.",
						"japanese": "戯言はよせ。お前たちの時代は終わった。",
						"chinese": "别胡说了。你们的时代已经结束了。",
						"french": "Assez de bêtises. Votre ère est révolue.",
						"spanish": "Basta de tonterías. Vuestra era ha terminado.",
						"vietnamese": "Đừng nói nhảm nữa. Thời đại của các ngươi đã kết thúc.",
						"thai": "หยุดเหลวไหลได้แล้ว. ยุคของพวกเจ้าจบลงแล้ว.",
						"hindi": "बकवास बंद करो। तुम्हारा युग समाप्त हो गया है।"
					}
				},
				{
					"content": {
						"korean": "거대한 그림자가 물러났다. 그러나 사막의 진정한 주인은 아직 모습을 드러내지 않았다.",
						"english": "The massive shadow retreated. Yet, the true master of the desert has not yet revealed itself.",
						"japanese": "巨大な影は退いた。しかし、砂漠の真の主はまだ姿を現していない。",
						"chinese": "巨大的阴影退去了。然而，沙漠真正的主人尚未现身。",
						"french": "L'ombre colossale s'est retirée. Pourtant, le véritable maître du désert n'a pas encore révélé sa forme.",
						"spanish": "La enorme sombra retrocedió. Sin embargo, el verdadero señor del desierto aún no se ha revelado.",
						"vietnamese": "Bóng đen khổng lồ đã rút lui. Tuy nhiên, chủ nhân thật sự của sa mạc vẫn chưa lộ diện.",
						"thai": "เงาขนาดมหึมาได้ล่าถอยไปแล้ว. ทว่า, เจ้าของทะเลทรายที่แท้จริงยังไม่เผยตัวออกมา.",
						"hindi": "विशाल छाया पीछे हट गई। फिर भी, रेगिस्तान का सच्चा मालिक अभी तक प्रकट नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"id": 15
		}
	]
} as const;
