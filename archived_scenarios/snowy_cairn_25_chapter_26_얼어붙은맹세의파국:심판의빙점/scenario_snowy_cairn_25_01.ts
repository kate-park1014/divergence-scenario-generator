export const scenario_snowy_cairn_25_01 = {
	"scenario_id": "snowy_cairn_25_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"혹독한 북부 설원. 맹세는 얼음처럼 깨지기 쉬웠다.",
			"길을 잃은 자들은 단 하나의 목표를 향해 나아갔다.",
			"그러나 마지막 거래, 그리고 예고된 배신.",
			"그들의 여정은 파국 직전의 얼어붙은 이면 계약이었다."
		],
		"english": [
			"Harsh northern snowfields. Oaths shattered like ice.",
			"The lost pressed onward, towards a single goal.",
			"But the final pact, and the foretold betrayal.",
			"Their journey was a frozen, secret pact, on the brink of disaster."
		],
		"japanese": [
			"苛酷な北部の雪原。誓いは氷のように脆かった。",
			"道に迷った者たちは、ただ一つの目標に向かって進んだ。",
			"しかし、最後の取引、そして予期された裏切り。",
			"彼らの旅は、破滅寸前の凍てついた裏契約だった。"
		],
		"chinese": [
			"严酷的北部雪原。誓言如冰般脆弱。",
			"迷失者们朝着一个目标前进。",
			"然而，最后的交易，以及预示的背叛。",
			"他们的旅程是一份处于灾难边缘的冰冷秘密契约。"
		],
		"french": [
			"Rudes étendues enneigées du Nord. Les serments étaient fragiles comme la glace.",
			"Ceux qui étaient perdus avançaient, vers un unique but.",
			"Mais le dernier accord, et la trahison annoncée.",
			"Leur voyage était un pacte secret gelé, au bord du désastre."
		],
		"spanish": [
			"Duras llanuras nevadas del norte. Los juramentos eran frágiles como el hielo.",
			"Los perdidos avanzaron, hacia un único objetivo.",
			"Pero el pacto final, y la traición anunciada.",
			"Su viaje fue un pacto secreto y congelado, al borde del desastre."
		],
		"vietnamese": [
			"Bãi tuyết phía Bắc khắc nghiệt. Lời thề mong manh như băng.",
			"Những kẻ lạc lối tiến về một mục tiêu duy nhất.",
			"Nhưng giao kèo cuối cùng, và sự phản bội đã được báo trước.",
			"Hành trình của họ là một giao kèo bí mật đóng băng, cận kề thảm họa."
		],
		"thai": [
			"ทุ่งหิมะภาคเหนืออันโหดร้าย คำสาบานแตกหักง่ายดายดุจน้ำแข็ง",
			"ผู้หลงทางมุ่งหน้าสู่เป้าหมายเดียว",
			"แต่ข้อตกลงสุดท้าย และการทรยศที่ถูกคาดการณ์ไว้",
			"การเดินทางของพวกเขาคือข้อตกลงลับที่เยือกแข็ง ใกล้จะถึงหายนะ"
		],
		"hindi": [
			"कठोर उत्तरी बर्फीले मैदान। कसमें बर्फ की तरह टूट गईं。",
			"भटके हुए लोग एक ही लक्ष्य की ओर बढ़ते रहे।",
			"लेकिन अंतिम समझौता, और बताई गई बेवफाई।",
			"उनकी यात्रा एक जमी हुई, गुप्त संधि थी, जो विनाश के कगार पर थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 바람이 모든 흔적을 지웠다. 이정표는 없었다.",
						"english": "The cold wind erased all traces. There were no landmarks.",
						"japanese": "冷たい風が全ての痕跡を消した。道標はなかった。",
						"chinese": "寒风抹去了所有痕迹。没有路标。",
						"french": "Le vent froid effaçait toutes les traces. Il n'y avait pas de repères.",
						"spanish": "El viento frío borró todas las huellas. No había puntos de referencia.",
						"vietnamese": "Gió lạnh xóa mọi dấu vết. Không có cột mốc.",
						"thai": "ลมหนาวพัดพา痕迹ทั้งหมดหายไป ไม่มีหลักไมล์",
						"hindi": "ठंडी हवा ने सारे निशान मिटा दिए। कोई मील का पत्थर नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "춥고… 험해. 대체 우리가 어디로 가는 거야?",
						"english": "It's cold... and harsh. Where are we even going?",
						"japanese": "寒い…そして険しい。一体どこへ行くんだ？",
						"chinese": "又冷…又险。我们到底要去哪儿？",
						"french": "C'est froid... et rude. Où allons-nous, au juste ?",
						"spanish": "Hace frío... y es duro. ¿Adónde vamos, de todos modos?",
						"vietnamese": "Lạnh quá... và khắc nghiệt. Rốt cuộc chúng ta đang đi đâu vậy?",
						"thai": "หนาว...และทุรกันดาร เรากำลังไปที่ไหนกันแน่?",
						"hindi": "ठंडा है... और कठोर। हम कहाँ जा रहे हैं?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "걱정 마. 내가 길잡이니까. 곧 도착할 거야.",
						"english": "Don't worry. I'm the guide. We'll arrive soon.",
						"japanese": "心配するな。私が案内役だから。もうすぐ着くさ。",
						"chinese": "别担心。我是向导。我们很快就会到。",
						"french": "Ne t'inquiète pas. Je suis le guide. Nous arriverons bientôt.",
						"spanish": "No te preocupes. Soy el guía. Llegaremos pronto.",
						"vietnamese": "Đừng lo. Tôi là người dẫn đường mà. Chúng ta sẽ đến sớm thôi.",
						"thai": "ไม่ต้องห่วง ฉันเป็นคนนำทาง เราจะไปถึงในไม่ช้า",
						"hindi": "चिंता मत करो। मैं मार्गदर्शक हूँ। हम जल्द ही पहुँच जाएँगे।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…정말일까?",
						"english": "...Really?",
						"japanese": "…本当か？",
						"chinese": "……真的吗？",
						"french": "...Vraiment ?",
						"spanish": "¿...De verdad?",
						"vietnamese": "...Thật sao?",
						"thai": "...จริงเหรอ?",
						"hindi": "...सच में?"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "설원 깊숙이, 정체 모를 유적들이 나타났다.",
						"english": "Deep within the snowfields, unknown ruins appeared.",
						"japanese": "雪原の奥深く、正体不明の遺跡が現れた。",
						"chinese": "雪原深处，出现了不明遗迹。",
						"french": "Au plus profond des étendues enneigées, des ruines inconnues apparurent.",
						"spanish": "En lo profundo de las llanuras nevadas, aparecieron ruinas desconocidas.",
						"vietnamese": "Sâu trong bãi tuyết, những tàn tích không rõ nguồn gốc xuất hiện.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ ซากปรักหักพังที่ไม่รู้จักก็ปรากฏขึ้น",
						"hindi": "बर्फीले मैदानों की गहराई में, अज्ञात खंडहर दिखाई दिए।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이쪽이야. 내가 본 지도에는… 분명히.",
						"english": "This way. On the map I saw... definitely.",
						"japanese": "こっちだ。私が見た地図には…確かに。",
						"chinese": "这边。在我看过的地图上…… 분명히。",
						"french": "Par ici. Sur la carte que j'ai vue... clairement.",
						"spanish": "Por aquí. En el mapa que vi... definitivamente.",
						"vietnamese": "Lối này. Trên bản đồ tôi thấy... chắc chắn là vậy.",
						"thai": "ทางนี้ แผนที่ที่ฉันเห็น... ชัดเจน",
						"hindi": "इधर। मैंने जो नक्शा देखा... निश्चित रूप से।"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "브란, 자꾸 뒤를 보는 것 같아. 뭘 숨기는 거야?",
						"english": "Bran, you keep looking back. What are you hiding?",
						"japanese": "ブラン、後ろばかり見ているようだけど。何を隠しているの？",
						"chinese": "布兰，你老是往后看。你在藏什么？",
						"french": "Bran, tu ne cesses de regarder en arrière. Qu'est-ce que tu caches ?",
						"spanish": "Bran, no dejas de mirar atrás. ¿Qué escondes?",
						"vietnamese": "Bran, cậu cứ nhìn về phía sau. Cậu đang giấu giếm điều gì vậy?",
						"thai": "บราน นายเอาแต่เหลียวหลัง มองหาอะไรอยู่เหรอ?",
						"hindi": "ब्रान, तुम बार-बार पीछे देख रहे हो। क्या छुपा रहे हो?"
					},
					"speaker": "character_1",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아무것도. 그냥… 길이 복잡해서.",
						"english": "Nothing. It's just... the path is complicated.",
						"japanese": "何も。ただ…道が複雑だから。",
						"chinese": "没什么。只是……路有点复杂。",
						"french": "Rien. C'est juste… que le chemin est compliqué.",
						"spanish": "Nada. Solo... el camino es complicado.",
						"vietnamese": "Không có gì. Chỉ là… đường đi hơi phức tạp.",
						"thai": "ไม่มีอะไร แค่...ทางมันซับซ้อนน่ะ",
						"hindi": "कुछ नहीं। बस... रास्ता थोड़ा जटिल है।"
					},
					"type": "speech",
					"speaker": "bran"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "유적의 공기는 얼어붙은 시간처럼 무거웠다.",
						"english": "The air in the ruins was heavy, like frozen time.",
						"japanese": "遺跡の空気は、凍りついた時間のように重かった。",
						"chinese": "遗迹的空气沉重得如同凝固的时间。",
						"french": "L'air des ruines était lourd, comme le temps figé.",
						"spanish": "El aire en las ruinas era pesado, como el tiempo congelado.",
						"vietnamese": "Không khí trong phế tích nặng nề như thời gian ngưng đọng.",
						"thai": "อากาศในซากปรักหักพังหนักอึ้งราวกับกาลเวลาที่หยุดนิ่ง",
						"hindi": "खंडहरों की हवा जमी हुई समय की तरह भारी थी।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이곳이… 그 '거래'가 이루어진다는 곳인가.",
						"english": "Is this... where that 'deal' is supposed to take place?",
						"japanese": "ここが…あの「取引」が行われる場所なのか。",
						"chinese": "这里就是……那个“交易”发生的地方吗？",
						"french": "C'est ici… que ce « marché » doit avoir lieu ?",
						"spanish": "¿Es aquí... donde se supone que se hará ese 'trato'?",
						"vietnamese": "Đây là… nơi mà 'giao dịch' đó sẽ diễn ra sao?",
						"thai": "ที่นี่...คือที่ที่ 'การค้า' นั้นจะเกิดขึ้นงั้นหรือ?",
						"hindi": "क्या यहीं... वह 'सौदा' होने वाला है?"
					},
					"type": "speech",
					"speaker": "bran"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "무슨 거래? 우리도 모르는?",
						"english": "What deal? One we don't know about?",
						"japanese": "何の取引？私たちも知らない？",
						"chinese": "什么交易？我们不知道的？",
						"french": "Quel marché ? Un que nous ignorons ?",
						"spanish": "¿Qué trato? ¿Uno que no conocemos?",
						"vietnamese": "Giao dịch gì? Một cái chúng ta không biết sao?",
						"thai": "การค้าอะไร? ที่พวกเราไม่รู้เรื่องน่ะเหรอ?",
						"hindi": "कौन सा सौदा? जिसके बारे में हम नहीं जानते?"
					},
					"speaker": "character_2",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "크흠… 아무것도 아니야. 헛소리였어.",
						"english": "Ahem... nothing. Just nonsense.",
						"japanese": "コホン…何でもない。独り言だよ。",
						"chinese": "咳咳……没什么。只是胡言乱语。",
						"french": "Hum… rien du tout. C'était des bêtises.",
						"spanish": "Ejem... nada. Era una tontería.",
						"vietnamese": "Khụ khụ… không có gì đâu. Chỉ là nói vớ vẩn thôi.",
						"thai": "แฮ่ม...ไม่มีอะไร ไร้สาระน่ะ",
						"hindi": "खंखार... कुछ नहीं। बस बकवास थी।"
					}
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "수상해. 브란, 뭔가 꾸미고 있는 거 아니야?",
						"english": "Suspicious. Bran, are you up to something?",
						"japanese": "怪しい。ブラン、何か企んでるんじゃない？",
						"chinese": "可疑。布兰，你是不是在密谋什么？",
						"french": "Suspect. Bran, tu ne nous cacherais pas quelque chose ?",
						"spanish": "Sospechoso. Bran, ¿estás tramando algo?",
						"vietnamese": "Đáng ngờ. Bran, cậu đang âm mưu gì phải không?",
						"thai": "น่าสงสัย บราน นายกำลังวางแผนอะไรอยู่ใช่ไหม?",
						"hindi": "संदिग्ध है। ब्रान, क्या तुम कुछ रच रहे हो?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "갈수록 깊어지는 어둠. 돌아갈 수 없는 길이었다.",
						"english": "The deepening darkness. It was a path of no return.",
						"japanese": "深まる闇。戻ることのできない道だった。",
						"chinese": "黑暗越来越深。这是一条无法回头的路。",
						"french": "L'obscurité s'épaississait. C'était un chemin sans retour.",
						"spanish": "La oscuridad se hacía más profunda. Era un camino sin retorno.",
						"vietnamese": "Bóng tối càng lúc càng sâu. Đây là con đường không thể quay lại.",
						"thai": "ความมืดที่ลึกลงไปเรื่อยๆ นี่คือเส้นทางที่ไม่อาจย้อนกลับได้",
						"hindi": "गहराता अँधेरा। यह वापस न लौटने वाला रास्ता था।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "거의 다 왔어… 이제… 끝낼 수 있다.",
						"english": "Almost there... now... I can end it.",
						"japanese": "もうすぐだ…これで…終わらせられる。",
						"chinese": "差不多了……现在……可以结束了。",
						"french": "Presque là… maintenant… je peux en finir.",
						"spanish": "Ya casi... ahora... puedo terminarlo.",
						"vietnamese": "Gần đến rồi… giờ thì… có thể kết thúc.",
						"thai": "ใกล้ถึงแล้ว...ตอนนี้...ฉันจบมันได้แล้ว",
						"hindi": "बस आ ही गए... अब... इसे खत्म कर सकते हैं।"
					},
					"emotion": "base",
					"speaker": "bran",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "끝낸다고? 뭘? 우리를?",
						"english": "End it? What? Us?",
						"japanese": "終わらせるって？何を？私たちを？",
						"chinese": "结束？什么？我们吗？",
						"french": "En finir ? Avec quoi ? Avec nous ?",
						"spanish": "¿Terminarlo? ¿Qué? ¿A nosotros?",
						"vietnamese": "Kết thúc á? Cái gì? Chúng ta sao?",
						"thai": "จบงั้นเหรอ? จบอะไร? จบพวกเรางั้นเหรอ?",
						"hindi": "खत्म करोगे? क्या? हमें?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"emotion": "base",
					"content": {
						"korean": "…오해하지 마. 내 목적을 이룰 뿐이야.",
						"english": "...Don't misunderstand. I'm just achieving my goal.",
						"japanese": "「…誤解するな。私はただ目的を果たすだけだ。」",
						"chinese": "“……别误会。我只是在达成我的目的。”",
						"french": "...Ne te méprends pas. Je ne fais qu'atteindre mon objectif.",
						"spanish": "...No me malinterpretes. Solo cumplo mi objetivo.",
						"vietnamese": "...Đừng hiểu lầm. Ta chỉ đang thực hiện mục đích của mình.",
						"thai": "...อย่าเข้าใจผิด ฉันแค่ทำตามเป้าหมายของฉันเท่านั้น",
						"hindi": "...गलत मत समझना। मैं बस अपना लक्ष्य पूरा कर रहा हूँ।"
					}
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "탐욕은 언제나 눈보라보다 빠르게 녹아내리지. 너희의 맹세, 그 무게는 대체 얼마였을까?",
						"english": "Greed always melts faster than a blizzard. Your oaths, how much were they truly worth?",
						"japanese": "「貪欲は常に吹雪よりも速く溶け去る。お前たちの誓い、その重さは一体どれほどだったのか？」",
						"chinese": "“贪婪总是比暴风雪融化得更快。你们的誓言，究竟有多重？”",
						"french": "L'avidité fond toujours plus vite qu'un blizzard. Vos serments, combien valaient-ils vraiment ?",
						"spanish": "La codicia siempre se derrite más rápido que una ventisca. Vuestros juramentos, ¿cuánto valían realmente?",
						"vietnamese": "Lòng tham luôn tan chảy nhanh hơn bão tuyết. Lời thề của các ngươi, rốt cuộc nặng bao nhiêu?",
						"thai": "ความโลภละลายเร็วกว่าพายุหิมะเสมอ คำสาบานของพวกเจ้า มีค่าเท่าไรกันแน่?",
						"hindi": "लालच हमेशा बर्फीले तूफान से तेज़ी से पिघलता है। तुम्हारी कसमें, आखिर उनका कितना वज़न था?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "브란… 이 말이 너한테 하는 말이었나.",
						"english": "Bran... was this meant for you?",
						"japanese": "「ブラン…この言葉は、お前に向けられたものだったのか。」",
						"chinese": "“布兰……这句话是说给你的吗？”",
						"french": "Bran... ces mots t'étaient-ils destinés ?",
						"spanish": "Bran... ¿estas palabras eran para ti?",
						"vietnamese": "Bran... lời này là dành cho ngươi sao.",
						"thai": "บราน... คำพูดนี้หมายถึงเจ้าเหรอเนี่ย",
						"hindi": "ब्रान... क्या यह बात तुम्हारे लिए कही गई थी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "배신의 흔적은 더욱 깊게 새겨졌다. 얼어붙은 맹세는 아직 녹지 않았다.",
						"english": "The mark of betrayal was etched even deeper. The frozen oath has not yet thawed.",
						"japanese": "「裏切りの痕跡はさらに深く刻まれた。凍りついた誓いはまだ溶けていない。」",
						"chinese": "“背叛的痕迹刻得更深了。冰封的誓言尚未融化。”",
						"french": "La marque de la trahison fut gravée encore plus profondément. Le serment gelé n'a pas encore fondu.",
						"spanish": "La huella de la traición se grabó aún más hondo. El juramento helado aún no se ha derretido.",
						"vietnamese": "Dấu vết của sự phản bội càng khắc sâu hơn. Lời thề đóng băng vẫn chưa tan chảy.",
						"thai": "รอยแห่งการทรยศถูกสลักลึกยิ่งขึ้น คำสาบานที่แข็งตัวยังไม่ละลาย",
						"hindi": "विश्वासघात का निशान और गहरा हो गया। जमी हुई कसम अभी पिघली नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "모든 것이 얼어붙었다. 혹독한 설원이 탐험대를 집어삼켰다.",
						"english": "Everything froze. The harsh snowfield swallowed the expedition.",
						"japanese": "「全てが凍りついた。過酷な雪原が探検隊を飲み込んだ。」",
						"chinese": "“一切都冻结了。严酷的雪原吞噬了探险队。”",
						"french": "Tout a gelé. Le champ de neige impitoyable a englouti l'expédition.",
						"spanish": "Todo se congeló. El implacable campo de nieve engulló a la expedición.",
						"vietnamese": "Mọi thứ đều đóng băng. Cánh đồng tuyết khắc nghiệt đã nuốt chửng đoàn thám hiểm.",
						"thai": "ทุกสิ่งแข็งตัว ทุ่งหิมะอันโหดร้ายกลืนกินคณะสำรวจ",
						"hindi": "सब कुछ जम गया। कठोर बर्फीले मैदान ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "깨어진 약속의 대가다. 너희도 다르지 않으니.",
						"english": "The price of a broken promise. You are no different.",
						"japanese": "破られた約束の代償だ。お前たちも同じだろう。",
						"chinese": "这是打破承诺的代价。你们也别无二致。",
						"french": "Le prix d'une promesse brisée. Vous n'êtes pas différents.",
						"spanish": "El precio de una promesa rota. Vosotros no sois diferentes.",
						"vietnamese": "Đây là cái giá của một lời hứa bị phá vỡ. Các ngươi cũng không khác là bao.",
						"thai": "นี่คือราคาของการผิดสัญญา พวกเจ้าก็ไม่ต่างกัน",
						"hindi": "यह टूटे हुए वादे की कीमत है। तुम भी अलग नहीं हो।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어. 브란… 널 용서하지 않을 거야.",
						"english": "It's not over yet. Bran... I won't forgive you.",
						"japanese": "まだ終わってない。ブラン… お前を許さない。",
						"chinese": "还没结束。布兰… 我不会原谅你。",
						"french": "Ce n'est pas encore fini. Bran... Je ne te pardonnerai pas.",
						"spanish": "Todavía no ha terminado. Bran... No te perdonaré.",
						"vietnamese": "Chưa kết thúc đâu. Bran… Ta sẽ không tha thứ cho ngươi.",
						"thai": "ยังไม่จบหรอก แบรน... ฉันไม่ให้อภัยนาย",
						"hindi": "यह अभी खत्म नहीं हुआ है। ब्रैन... मैं तुम्हें माफ़ नहीं करूँगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "고대의 돌무덤 'Cairn'. 그 안에 거대한 그림자가 기다리고 있었다.",
						"english": "The ancient stone tomb, 'Cairn'. Within it, a colossal shadow awaited.",
						"japanese": "「古の石塚『ケルン』。その奥で、巨大な影が待ち構えていた。」",
						"chinese": "“古老的石冢‘凯恩’。一个巨大的身影在其中等待着。”",
						"french": "L'ancien tertre de pierre, 'Cairn'. À l'intérieur, une ombre colossale attendait.",
						"spanish": "El antiguo túmulo de piedra, 'Cairn'. Dentro, una sombra colosal aguardaba.",
						"vietnamese": "Ngôi mộ đá cổ 'Cairn'. Bên trong nó, một cái bóng khổng lồ đang chờ đợi.",
						"thai": "สุสานหินโบราณ 'Cairn' ภายในนั้นมีเงาขนาดมหึมารออยู่",
						"hindi": "प्राचीन पत्थर का मकबरा, 'केयर्न'। उसके अंदर, एक विशाल छाया इंतज़ार कर रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "누구냐. 감히 이곳을 더럽히는 자들은.",
						"english": "Who dares defile this place?",
						"japanese": "「誰だ。あえてこの地を汚す者どもは。」",
						"chinese": "“是谁。竟敢玷污此地？”",
						"french": "Qui ose souiller ce lieu ?",
						"spanish": "¿Quiénes sois? ¿Quiénes os atrevéis a profanar este lugar?",
						"vietnamese": "Ngươi là ai? Kẻ nào dám làm ô uế nơi này.",
						"thai": "เจ้าเป็นใคร พวกเจ้าบังอาจมาแปดเปื้อนที่นี่ได้อย่างไร",
						"hindi": "कौन हो तुम? कौन हैं वो, जो इस जगह को अपवित्र करने की हिम्मत करते हैं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"action": "enter",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "미안. 이게 내가 살 길이야. 너희는 여기서… 끝내.",
						"english": "Sorry. This is how I survive. You... end here.",
						"japanese": "「すまない。これが私の生きる道だ。お前たちはここで…終わりだ。」",
						"chinese": "“抱歉。这是我的生路。你们就到此为止吧。”",
						"french": "Désolé. C'est ma seule issue. Vous... en finissez ici.",
						"spanish": "Lo siento. Es mi forma de sobrevivir. Vosotros... termináis aquí.",
						"vietnamese": "Xin lỗi. Đây là con đường sống của ta. Các ngươi... kết thúc tại đây.",
						"thai": "ขอโทษนะ นี่คือทางรอดของฉัน พวกนาย... จบลงแค่นี้",
						"hindi": "माफ़ करना। यही मेरा जीने का तरीका है। तुम सबका... यहीं अंत।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "브란! 네가 감히 우리를 배신해?!",
						"english": "Bran! How dare you betray us?!",
						"japanese": "「ブラン！貴様、我々を裏切るつもりか！？」",
						"chinese": "“布兰！你竟敢背叛我们？！”",
						"french": "Bran ! Comment oses-tu nous trahir ?!",
						"spanish": "¡Bran! ¿¡Cómo te atreves a traicionarnos!?",
						"vietnamese": "Bran! Ngươi dám phản bội chúng ta ư?!",
						"thai": "บราน! แกกล้าทรยศพวกเราอย่างนั้นเหรอ?!",
						"hindi": "ब्रान! तुम्हारी हिम्मत कैसे हुई हमें धोखा देने की?!"
					}
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "bran",
					"action": "exit",
					"direction": "down"
				},
				{
					"content": {
						"korean": "배신은 이곳에서 가장 큰 죄. 대가를 치르게 될 것이다.",
						"english": "Betrayal is the greatest sin here. You will pay the price.",
						"japanese": "「裏切りはここでの最大の罪。代償を払うことになるだろう。」",
						"chinese": "“背叛是这里最大的罪孽。你将付出代价。”",
						"french": "La trahison est le plus grand des péchés ici. Tu paieras le prix.",
						"spanish": "La traición es el mayor pecado aquí. Pagarás el precio.",
						"vietnamese": "Phản bội là tội lỗi lớn nhất ở đây. Ngươi sẽ phải trả giá.",
						"thai": "การทรยศคือบาปที่ยิ่งใหญ่ที่สุดที่นี่ เจ้าจะต้องชดใช้",
						"hindi": "यहां विश्वासघात सबसे बड़ा पाप है। तुम्हें इसकी कीमत चुकानी पड़ेगी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
