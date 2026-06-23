export const scenario_snowy_anamnesis_54_03 = {
	"scenario_id": "snowy_anamnesis_54_03",
	"order": 3,
	"act": "rising",
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
			"추위는 뼈를 에는 칼날 같았다.",
			"설원은 더 깊은 절망을 숨기고 있었다.",
			"길 잃은 영혼의 절규가 메아리쳤다.",
			"끝없이 반복되는 비극의 시작이었다."
		],
		"english": [
			"The cold was a bone-cutting blade.",
			"The snowfield hid a deeper despair.",
			"The screams of lost souls echoed.",
			"It was the beginning of an endlessly repeating tragedy."
		],
		"japanese": [
			"寒さは骨を削る刃のようだった。",
			"雪原はより深い絶望を隠していた。",
			"道に迷った魂の絶叫が木霊した。",
			"それは終わりなき悲劇の始まりだった。"
		],
		"chinese": [
			"寒冷如刺骨的刀刃。",
			"雪原隐藏着更深的绝望。",
			"迷失灵魂的哀嚎回荡着。",
			"这是一场无尽循环悲剧的开端。"
		],
		"french": [
			"Le froid était une lame tranchante, mordant jusqu'aux os.",
			"L'étendue enneigée cachait un désespoir plus profond.",
			"Les cris des âmes perdues résonnaient.",
			"C'était le début d'une tragédie sans fin."
		],
		"spanish": [
			"El frío era como una cuchilla que cortaba hasta los huesos.",
			"El campo de nieve ocultaba una desesperación más profunda.",
			"Los lamentos de las almas perdidas resonaron.",
			"Era el comienzo de una tragedia que se repetía sin cesar."
		],
		"vietnamese": [
			"Cái lạnh như một lưỡi dao cắt vào xương.",
			"Cánh đồng tuyết ẩn chứa một nỗi tuyệt vọng sâu sắc hơn.",
			"Tiếng thét của những linh hồn lạc lối vang vọng.",
			"Đó là khởi đầu của một bi kịch lặp đi lặp lại không ngừng."
		],
		"thai": [
			"ความหนาวเย็นเหมือนคมมีดที่บาดกระดูก",
			"ทุ่งหิมะซ่อนความสิ้นหวังที่ลึกซึ้งกว่า",
			"เสียงกรีดร้องของวิญญาณที่หลงทางดังก้อง",
			"มันคือจุดเริ่มต้นของโศกนาฏกรรมที่ซ้ำซากไม่รู้จบ"
		],
		"hindi": [
			"ठंड हड्डियों को चीरने वाली धार की तरह थी।",
			"बर्फीला मैदान एक गहरी निराशा छिपा रहा था।",
			"भटकी हुई आत्माओं की चीखें गूँज उठीं।",
			"यह एक अंतहीन दोहराई जाने वाली त्रासदी की शुरुआत थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "혹한은 더욱 맹렬해졌다. 발걸음마다 서리가 박혔다.",
						"english": "The bitter cold intensified. Frost pierced every step.",
						"japanese": "酷寒はさらに猛烈になった。足取りごとに霜が刺さった。",
						"chinese": "严寒愈发猛烈。每一步都刻着冰霜。",
						"french": "Le froid glacial s'intensifia. Chaque pas laissait une empreinte de givre.",
						"spanish": "El frío intenso se hizo más feroz. La escarcha perforaba cada paso.",
						"vietnamese": "Cái lạnh cắt da cắt thịt càng trở nên dữ dội. Mỗi bước chân đều đóng băng.",
						"thai": "ความหนาวเหน็บรุนแรงขึ้นเรื่อยๆ น้ำค้างแข็งเกาะทุกย่างก้าว",
						"hindi": "भीषण ठंड और भी भयंकर हो गई। हर कदम पर पाला जमा हुआ था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "젠장… 너무 추워.",
						"english": "Damn… it's so cold.",
						"japanese": "くそ… 寒すぎる。",
						"chinese": "该死… 太冷了。",
						"french": "Merde… il fait si froid.",
						"spanish": "Maldita sea… qué frío.",
						"vietnamese": "Chết tiệt… lạnh quá.",
						"thai": "ให้ตายสิ... หนาวชะมัด",
						"hindi": "धिक्कार है... बहुत ठंड है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						5,
						2
					],
					"speaker": "bran",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "으으… 추워… 매번… 매번 돌아와…",
						"english": "Ugh… cold… every time… it comes back every time…",
						"japanese": "うぅ… 寒い… 毎回… 毎回戻ってくる…",
						"chinese": "呃… 好冷… 每次… 每次都回来…",
						"french": "Ugh… froid… chaque fois… ça revient chaque fois…",
						"spanish": "Ugh… frío… cada vez… cada vez vuelve…",
						"vietnamese": "Ư… lạnh quá… lần nào… lần nào cũng quay lại…",
						"thai": "อื้อ... หนาว... ทุกครั้ง... กลับมาทุกครั้ง...",
						"hindi": "उफ़... ठंड... हर बार... हर बार वापस आती है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저 사람… 고통스러워 보여.",
						"english": "That person… looks like they're in pain.",
						"japanese": "あの人… 苦しそうだ。",
						"chinese": "那个人… 看起来很痛苦。",
						"french": "Cette personne… a l'air de souffrir.",
						"spanish": "Esa persona… parece sufrir.",
						"vietnamese": "Người đó… trông có vẻ đau khổ.",
						"thai": "คนนั้น... ดูเหมือนกำลังทรมาน",
						"hindi": "वह व्यक्ति... पीड़ा में लग रहा है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 겨울… 끝없이… 끝없이 반복돼…",
						"english": "This winter… endlessly… endlessly repeats…",
						"japanese": "この冬… 終わりなく… 終わりなく繰り返される…",
						"chinese": "这个冬天… 无尽地… 无尽地重复着…",
						"french": "Cet hiver… sans fin… sans fin se répète…",
						"spanish": "Este invierno… sin fin… se repite sin cesar…",
						"vietnamese": "Mùa đông này… không ngừng… không ngừng lặp lại…",
						"thai": "ฤดูหนาวนี้... ซ้ำซาก... ซ้ำซากไม่รู้จบ",
						"hindi": "यह सर्दी... अंतहीन... अंतहीन रूप से दोहराई जाती है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "대체 무슨 소리야?",
						"english": "What on earth are you talking about?",
						"japanese": "いったい何を言ってるんだ？",
						"chinese": "你到底在说什么？",
						"french": "De quoi parles-tu, bon sang ?",
						"spanish": "¿De qué demonios hablas?",
						"vietnamese": "Rốt cuộc là chuyện gì vậy?",
						"thai": "นี่มันเรื่องอะไรกันแน่?",
						"hindi": "तुम आखिर क्या कह रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "우리는 또다시 갇힐 운명… 벗어날 수 없어…",
						"english": "We are fated to be trapped again... Can't escape...",
						"japanese": "我々はまた捕らわれる運命… 逃れられない…",
						"chinese": "我们注定再次被困… 无法逃脱…",
						"french": "Nous sommes destinés à être piégés à nouveau... Impossible d'échapper...",
						"spanish": "Estamos destinados a ser atrapados de nuevo... No podemos escapar...",
						"vietnamese": "Chúng ta lại định mệnh bị mắc kẹt… Không thể thoát…",
						"thai": "เราถูกลิขิตให้ติดกับอีกครั้ง… หนีไม่พ้น…",
						"hindi": "हम फिर से फंसने को किस्मत में हैं... बच नहीं सकते…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "브란의 눈은 깊은 절망을 담고 있었다. 끝나지 않는 비극의 예언처럼.",
						"english": "Bran's eyes held deep despair. Like a prophecy of endless tragedy.",
						"japanese": "ブランの瞳は深い絶望を宿していた。終わらない悲劇の予言のように。",
						"chinese": "布兰的眼中充满了深深的绝望。如同无尽悲剧的预言。",
						"french": "Les yeux de Bran contenaient un désespoir profond. Comme une prophétie de tragédie sans fin.",
						"spanish": "Los ojos de Bran contenían una profunda desesperación. Como una profecía de tragedia sin fin.",
						"vietnamese": "Đôi mắt của Bran chứa đựng sự tuyệt vọng sâu sắc. Như một lời tiên tri về bi kịch không hồi kết.",
						"thai": "ดวงตาของแบรนมีความสิ้นหวังลึกซึ้ง ราวกับคำพยากรณ์โศกนาฏกรรมที่ไม่มีที่สิ้นสุด",
						"hindi": "ब्रान की आँखों में गहरी निराशा थी। एक अंतहीन त्रासदी की भविष्यवाणी की तरह।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "모두가… 모두가 기다리고 있어… 얼어붙은 채로…",
						"english": "Everyone... everyone is waiting... frozen in place...",
						"japanese": "みんなが… みんなが待っている… 凍りついたまま…",
						"chinese": "所有人… 所有人都在等待… 冰冷地…",
						"french": "Tout le monde... tout le monde attend... figé sur place...",
						"spanish": "Todos... todos están esperando... congelados en su lugar...",
						"vietnamese": "Mọi người… mọi người đang chờ đợi… trong giá lạnh…",
						"thai": "ทุกคน… ทุกคนกำลังรอคอย… แข็งค้างอยู่กับที่…",
						"hindi": "हर कोई... हर कोई इंतज़ार कर रहा है... जमा हुआ..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누가… 뭘 기다려?",
						"english": "Who... what are they waiting for?",
						"japanese": "誰が… 何を待ってるの？",
						"chinese": "谁… 在等什么？",
						"french": "Qui... qu'attendent-ils ?",
						"spanish": "¿Quién... qué esperan?",
						"vietnamese": "Ai… chờ đợi điều gì?",
						"thai": "ใคร… กำลังรออะไร?",
						"hindi": "कौन... क्या इंतज़ार कर रहा है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "집으로… 돌아갈 길을… 하지만 길은… 사라졌어…",
						"english": "The way home... the path back... But the way is... gone...",
						"japanese": "家路を… 帰る道を… でも道は… 消えた…",
						"chinese": "回家的路… 归途… 但路… 消失了…",
						"french": "Le chemin du retour... la voie du retour... Mais le chemin est... disparu...",
						"spanish": "El camino a casa... el camino de vuelta... Pero el camino... ha desaparecido...",
						"vietnamese": "Con đường về nhà… đường trở về… Nhưng con đường… biến mất rồi…",
						"thai": "หนทางกลับบ้าน… เส้นทางกลับ… แต่หนทาง… หายไปแล้ว…",
						"hindi": "घर का रास्ता... वापसी का रास्ता... लेकिन रास्ता... गायब हो गया है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이곳의 저주는… 단순한 재앙이 아니야.",
						"english": "The curse here... isn't just a simple disaster.",
						"japanese": "ここでの呪いは… 単なる災厄じゃない。",
						"chinese": "这里的诅咒… 不仅仅是简单的灾难。",
						"french": "La malédiction ici... n'est pas une simple catastrophe.",
						"spanish": "La maldición aquí... no es solo un simple desastre.",
						"vietnamese": "Lời nguyền ở đây… không chỉ là một thảm họa đơn thuần.",
						"thai": "คำสาปที่นี่… ไม่ใช่แค่ภัยพิบัติธรรมดา",
						"hindi": "यहाँ का अभिशाप... सिर्फ एक साधारण आपदा नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "돌아갈 수 없어… 이제는… 늦었어…",
						"english": "Can't go back... It's... too late now...",
						"japanese": "戻れない… もう… 遅すぎる…",
						"chinese": "回不去了… 现在… 太迟了…",
						"french": "Impossible de revenir... C'est... trop tard maintenant...",
						"spanish": "No puedo volver... Ya es... demasiado tarde...",
						"vietnamese": "Không thể quay lại… Bây giờ… đã quá muộn rồi…",
						"thai": "กลับไปไม่ได้แล้ว… ตอนนี้… สายเกินไปแล้ว…",
						"hindi": "वापस नहीं जा सकते... अब... बहुत देर हो चुकी है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "포기하지 마! 길이 있을 거야.",
						"english": "Don't give up! There must be a way.",
						"japanese": "諦めるな！道はあるはずだ。",
						"chinese": "别放弃！一定有办法的。",
						"french": "N'abandonne pas ! Il doit y avoir un moyen.",
						"spanish": "¡No te rindas! Debe haber un camino.",
						"vietnamese": "Đừng bỏ cuộc! Sẽ có cách thôi.",
						"thai": "อย่าเพิ่งยอมแพ้! ต้องมีทางออกสิ",
						"hindi": "हार मत मानो! कोई रास्ता ज़रूर होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "환영… 환영이 보여… 이 모든 게… 반복될 뿐이야…",
						"english": "Visions... I see visions... All of this... will just repeat...",
						"japanese": "幻影… 幻影が見える… この全てが… 繰り返されるだけだ…",
						"chinese": "幻象… 我看到幻象… 这一切… 都只是重复…",
						"french": "Visions... Je vois des visions... Tout cela... ne fera que se répéter...",
						"spanish": "Visiones... Veo visiones... Todo esto... solo se repetirá...",
						"vietnamese": "Ảo ảnh… Tôi thấy ảo ảnh… Tất cả điều này… chỉ là lặp lại thôi…",
						"thai": "ภาพหลอน… ฉันเห็นภาพหลอน… ทั้งหมดนี้… แค่จะซ้ำรอยเดิม…",
						"hindi": "भ्रम... मुझे भ्रम दिख रहे हैं... यह सब... बस दोहराया जाएगा..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "브란의 절규는 얼어붙은 설원 전체에 메아리쳤다. 절망적인 예감이었다.",
						"english": "Bran's cry echoed across the entire frozen wasteland. It was a desperate premonition.",
						"japanese": "ブランの叫びは凍てついた雪原全体にこだました。絶望的な予感だった。",
						"chinese": "布兰的尖叫声回荡在整个冰冻的雪原上。那是一种绝望的预感。",
						"french": "Le cri de Bran résonna à travers toute la toundra gelée. C'était une prémonition désespérée.",
						"spanish": "El grito de Bran resonó por toda la llanura helada. Era una premonición desesperada.",
						"vietnamese": "Tiếng kêu của Bran vang vọng khắp vùng tuyết nguyên đóng băng. Đó là một dự cảm đầy tuyệt vọng.",
						"thai": "เสียงกรีดร้องของแบรนสะท้อนก้องไปทั่วทุ่งหิมะเยือกแข็ง มันเป็นลางสังหรณ์ที่สิ้นหวัง",
						"hindi": "ब्रान की चीख जमी हुई बंजर भूमि में गूंज उठी। यह एक निराशाजनक पूर्वाभास था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "콜록… 네놈들도… 결국… 똑같은 운명에…",
						"english": "*Cough*… You too… eventually… the same fate…",
						"japanese": "ゴホッ… お前たちも… 結局… 同じ運命に…",
						"chinese": "咳… 你们… 最终… 也会是同样的命运…",
						"french": "*Tousse*… Vous aussi… finalement… le même destin…",
						"spanish": "*Tose*… Vosotros también… al final… el mismo destino…",
						"vietnamese": "*Ho*… Các ngươi cũng… cuối cùng… cùng một số phận…",
						"thai": "แค่ก… พวกเจ้าก็… สุดท้าย… ชะตากรรมเดียวกัน…",
						"hindi": "*खाँसी*… तुम भी… अंततः… वही नियति…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아니. 우린 다를 거야.",
						"english": "No. We will be different.",
						"japanese": "いいえ。私たちは違う。",
						"chinese": "不。我们会不同。",
						"french": "Non. Nous serons différents.",
						"spanish": "No. Seremos diferentes.",
						"vietnamese": "Không. Chúng ta sẽ khác.",
						"thai": "ไม่. เราจะแตกต่าง.",
						"hindi": "नहीं। हम अलग होंगे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 {random_boss}의 잔해 속에서 희미한 빛이 일렁였다.",
						"english": "A faint light flickered amidst the wreckage of the fallen {random_boss}.",
						"japanese": "倒れた{random_boss}の残骸の中で、かすかな光が揺らめいた。",
						"chinese": "在倒下的{random_boss}残骸中，微弱的光芒闪烁着。",
						"french": "Une faible lumière vacillait parmi les débris du {random_boss} tombé.",
						"spanish": "Una tenue luz parpadeó entre los restos del {random_boss} caído.",
						"vietnamese": "Một ánh sáng mờ nhạt lấp lánh giữa đống đổ nát của {random_boss} đã ngã xuống.",
						"thai": "แสงสลัวระยิบระยับอยู่ท่ามกลางซากปรักหักพังของ {random_boss} ที่ล้มลง",
						"hindi": "गिरे हुए {random_boss} के मलबे में एक मंद प्रकाश टिमटिमा रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "아직 모든 것이 얼어붙어 있었지만, 잊혀진 온기가 어디선가 속삭이는 듯했다.",
						"english": "Everything was still frozen, yet a forgotten warmth seemed to whisper from somewhere.",
						"japanese": "全てはまだ凍りついていたが、忘れ去られた温もりがどこかから囁くようだった。",
						"chinese": "一切仍然冰封，然而被遗忘的温暖似乎从某个地方低语着。",
						"french": "Tout était encore gelé, pourtant une chaleur oubliée semblait murmurer de quelque part.",
						"spanish": "Todo seguía congelado, pero un calor olvidado parecía susurrar desde algún lugar.",
						"vietnamese": "Mọi thứ vẫn đóng băng, nhưng một hơi ấm bị lãng quên dường như đang thì thầm từ đâu đó.",
						"thai": "ทุกสิ่งยังคงเป็นน้ำแข็ง แต่ความอบอุ่นที่ถูกลืมเลือนดูเหมือนจะกระซิบมาจากที่ใดที่หนึ่ง",
						"hindi": "सब कुछ अभी भी जमा हुआ था, फिर भी कहीं से एक भूली हुई गर्माहट फुसफुसाती हुई महसूस हुई।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 얼음 그림자가 탐험대 앞을 가로막았다.",
						"english": "A colossal ice shadow loomed before the expedition.",
						"japanese": "巨大な氷の影が探検隊の行く手を阻んだ。",
						"chinese": "巨大的冰影挡住了探险队的去路。",
						"french": "Une ombre de glace colossale barra la route de l'expédition.",
						"spanish": "Una sombra de hielo colosal se interpuso en el camino de la expedición.",
						"vietnamese": "Một cái bóng băng khổng lồ chắn ngang đường của đoàn thám hiểm.",
						"thai": "เงาเงาน้ำแข็งมหึมาบดบังเส้นทางของคณะสำรวจ",
						"hindi": "एक विशाल बर्फीली छाया अभियान दल के रास्ते में आ गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희도… 이 차가운 순환에… 갇힐 뿐.",
						"english": "You too… will merely be trapped… in this cold cycle.",
						"japanese": "お前たちも… この冷たい循環に… 囚われるだけだ。",
						"chinese": "你们… 也将… 仅仅被困在这冰冷的循环中。",
						"french": "Vous aussi… ne ferez que… être piégés dans ce cycle froid.",
						"spanish": "Vosotros también… solo… quedaréis atrapados en este frío ciclo.",
						"vietnamese": "Các ngươi cũng… sẽ chỉ… bị mắc kẹt trong vòng luân hồi lạnh giá này mà thôi.",
						"thai": "พวกเจ้าเองก็... จะถูกขัง... อยู่ในวงจรที่เยือกเย็นนี้เท่านั้น",
						"hindi": "तुम भी… बस… इस ठंडे चक्र में… फंस जाओगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우린 포기하지 않아! 이 비극을 끝낼 거야!",
						"english": "We won't give up! We'll end this tragedy!",
						"japanese": "私たちは諦めない！この悲劇を終わらせる！",
						"chinese": "我们不会放弃！我们会结束这场悲剧！",
						"french": "Nous n'abandonnerons pas ! Nous mettrons fin à cette tragédie !",
						"spanish": "¡No nos rendiremos! ¡Acabaremos con esta tragedia!",
						"vietnamese": "Chúng ta sẽ không bỏ cuộc! Chúng ta sẽ chấm dứt bi kịch này!",
						"thai": "เราจะไม่ยอมแพ้! เราจะยุติโศกนาฏกรรมนี้!",
						"hindi": "हम हार नहीं मानेंगे! हम इस त्रासदी को खत्म करेंगे!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은… 또 다른 시작일 뿐.",
						"english": "Foolish… It's merely another beginning.",
						"japanese": "愚かな… 別の始まりに過ぎない。",
						"chinese": "愚蠢… 这不过是另一个开始。",
						"french": "Insensés… Ce n'est qu'un autre début.",
						"spanish": "Necios… Es solo otro comienzo.",
						"vietnamese": "Ngu xuẩn… Đó chỉ là một khởi đầu khác mà thôi.",
						"thai": "โง่เขลา... เป็นเพียงจุดเริ่มต้นอีกครั้ง",
						"hindi": "मूर्ख… यह बस एक और शुरुआत है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "혹한은 모든 것을 집어삼켰다. 절망만이 남았다.",
						"english": "The bitter cold devoured everything. Only despair remained.",
						"japanese": "酷寒は全てを飲み込んだ。残されたのは絶望だけだった。",
						"chinese": "严寒吞噬了一切。只剩下绝望。",
						"french": "Le froid glacial dévora tout. Seul le désespoir demeurait.",
						"spanish": "El frío amargo lo devoró todo. Solo quedó la desesperación.",
						"vietnamese": "Cái lạnh khắc nghiệt nuốt chửng mọi thứ. Chỉ còn lại sự tuyệt vọng.",
						"thai": "ความหนาวเหน็บอันขมขื่นกลืนกินทุกสิ่ง มีเพียงความสิ้นหวังเท่านั้นที่เหลืออยู่",
						"hindi": "भीषण ठंड ने सब कुछ निगल लिया। केवल निराशा बची।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 다시 얼어붙어라.",
						"english": "Insignificant beings… Freeze again.",
						"japanese": "くだらぬものたち… 再び凍りつけ。",
						"chinese": "微不足道的存在… 再次冻结吧。",
						"french": "Êtres insignifiants… Gèlent à nouveau.",
						"spanish": "Seres insignificantes… Congélense de nuevo.",
						"vietnamese": "Những kẻ thấp kém… Hãy đóng băng lần nữa.",
						"thai": "สิ่งมีชีวิตที่ไร้ค่า... จงแข็งตัวอีกครั้ง",
						"hindi": "तुच्छ प्राणी… फिर से जम जाओ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어…!",
						"english": "It's not over yet...!",
						"japanese": "まだ…終わってない…！",
						"chinese": "还没…结束…！",
						"french": "Ce n'est pas encore fini…!",
						"spanish": "Aún no ha terminado…!",
						"vietnamese": "Chưa… kết thúc đâu…!",
						"thai": "ยังไม่…จบ…!",
						"hindi": "अभी… खत्म नहीं हुआ है…!"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
