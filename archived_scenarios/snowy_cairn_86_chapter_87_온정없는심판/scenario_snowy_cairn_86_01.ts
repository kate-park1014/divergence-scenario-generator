export const scenario_snowy_cairn_86_01 = {
	"scenario_id": "snowy_cairn_86_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"얼어붙은 돌무덤.",
			"여긴 거대한 심판의 자리다.",
			"깨어진 맹세로 얼음이 된 자들이, 영원히 변명하려는 자세 그대로 굳어 있다.",
			"어떤 사정도 참작되지 않는 차가운 규칙 아래."
		],
		"english": [
			"Frozen Cairn.",
			"This is a vast judgment seat.",
			"Those frozen by broken vows are fixed in the very posture of eternal apology.",
			"Under cold rules that allow no extenuating circumstances."
		],
		"japanese": [
			"凍てついた石塚。",
			"ここは巨大な審判の場だ。",
			"破られた誓いにより氷と化した者たちが、永遠に弁明しようとする姿勢のまま固まっている。",
			"いかなる事情も考慮されない冷たい規則の下で。"
		],
		"chinese": [
			"冰冻的石冢。",
			"这里是巨大的审判之地。",
			"那些因违背誓言而冰冻的人，永远保持着想要辩解的姿态。",
			"在任何理由都不被考虑的冰冷规则之下。"
		],
		"french": [
			"Cairn gelé.",
			"C'est un vaste siège de jugement.",
			"Ceux que les serments brisés ont transformés en glace sont figés pour l'éternité dans la posture de l'excuse.",
			"Sous des règles implacables, sans circonstances atténuantes."
		],
		"spanish": [
			"Túmulo congelado.",
			"Este es un vasto asiento de juicio.",
			"Aquellos que se convirtieron en hielo por promesas rotas están inmovilizados, por siempre en la pose de intentar excusarse.",
			"Bajo reglas frías que no admiten atenuantes."
		],
		"vietnamese": [
			"Mộ đá đóng băng.",
			"Đây là nơi phán xét vĩ đại.",
			"Những kẻ bị đóng băng bởi lời thề bị phá vỡ, cứng đờ trong tư thế vĩnh viễn cố gắng biện minh.",
			"Dưới những quy tắc lạnh lùng không dung thứ bất kỳ lý do nào."
		],
		"thai": [
			"สุสานหินเยือกแข็ง.",
			"ที่นี่คือบัลลังก์แห่งการพิพากษาอันกว้างใหญ่.",
			"ผู้ที่ถูกแช่แข็งด้วยคำสาบานที่แตกหัก ยังคงยืนนิ่งในท่าทางที่พยายามจะแก้ตัวตลอดไป.",
			"ภายใต้กฎที่เย็นชาซึ่งไม่มีการพิจารณาถึงสถานการณ์ใดๆ."
		],
		"hindi": [
			"जमा हुआ पत्थरों का ढेर।",
			"यह एक विशाल न्याय का स्थान है।",
			"टूटी हुई प्रतिज्ञाओं से जमे हुए लोग, हमेशा के लिए बहाना बनाने की मुद्रा में जम गए हैं।",
			"ठंडे नियमों के तहत, जहाँ कोई भी स्थिति स्वीकार्य नहीं है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 돌무덤이 심판의 자리로 변했다. 수많은 형상들이 얼어붙어 서 있다.",
						"english": "The massive stone tomb has become a judgment seat. Countless forms stand frozen.",
						"japanese": "巨大な石塚が審判の場へと変わった。数多の姿が凍りついて立っている。",
						"chinese": "巨大的石冢变成了审判之地。无数的形体被冻结在那里。",
						"french": "L'immense tombeau de pierre est devenu un siège de jugement. D'innombrables formes sont figées.",
						"spanish": "El enorme túmulo de piedra se ha convertido en un asiento de juicio. Innumerables formas permanecen congeladas.",
						"vietnamese": "Mộ đá khổng lồ đã biến thành nơi phán xét. Vô số hình dạng đang đứng đóng băng.",
						"thai": "สุสานหินขนาดมหึมาได้กลายเป็นบัลลังก์แห่งการพิพากษา รูปปั้นนับไม่ถ้วนยืนแข็งทื่ออยู่.",
						"hindi": "विशाल पत्थर की कब्र न्याय का स्थान बन गई है। अनगिनत आकृतियाँ जमी हुई खड़ी हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게… 심판의 자리?",
						"english": "This is... the judgment seat?",
						"japanese": "これが…審判の場？",
						"chinese": "这里是…审判之地？",
						"french": "C'est... le siège du jugement ?",
						"spanish": "¿Este es... el asiento de juicio?",
						"vietnamese": "Đây là… nơi phán xét?",
						"thai": "นี่คือ... บัลลังก์แห่งการพิพากษาหรือ?",
						"hindi": "यह... न्याय का स्थान?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "응. 맹세를 어긴 자들이지.",
						"english": "Yes. Those who broke their vows.",
						"japanese": "ええ。誓いを破った者たちよ。",
						"chinese": "嗯。那些违背誓言的人。",
						"french": "Oui. Ceux qui ont brisé leurs vœux.",
						"spanish": "Sí. Aquellos que rompieron sus promesas.",
						"vietnamese": "Đúng vậy. Những kẻ đã phá vỡ lời thề.",
						"thai": "ใช่ พวกที่ละเมิดคำสาบาน.",
						"hindi": "हाँ। वे जिन्होंने अपनी प्रतिज्ञाएँ तोड़ीं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "봐. 모두… 무언가 말하려다 굳어버린 자세야.",
						"english": "Look. They're all... frozen in a pose as if about to say something.",
						"japanese": "見て。皆…何かを言おうとして固まってしまった姿勢だ。",
						"chinese": "看。他们都…保持着想说什么却凝固的姿势。",
						"french": "Regarde. Ils sont tous… figés dans une posture, comme s'ils allaient dire quelque chose.",
						"spanish": "Mira. Todos… están congelados en una postura como si fueran a decir algo.",
						"vietnamese": "Nhìn kìa. Tất cả… đều cứng đờ trong tư thế như muốn nói điều gì đó.",
						"thai": "ดูสิ พวกเขา... ทุกคนแข็งทื่ออยู่ในท่าทางเหมือนกำลังจะพูดอะไรบางอย่าง.",
						"hindi": "देखो। वे सभी... कुछ कहने की कोशिश करते हुए जम गए हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "마치 변명이라도 하려던 것처럼?",
						"english": "As if trying to make excuses?",
						"japanese": "まるで弁解でもしようとしていたかのように？",
						"chinese": "就像是想辩解一样？",
						"french": "Comme s'ils essayaient de se justifier ?",
						"spanish": "¿Como si estuvieran intentando excusarse?",
						"vietnamese": "Như thể đang cố gắng biện minh?",
						"thai": "เหมือนกับว่ากำลังพยายามจะแก้ตัวอย่างนั้นหรือ?",
						"hindi": "जैसे बहाना बनाने की कोशिश कर रहे हों?"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "아무런 변명도 통하지 않아. 이 자리에서는.",
						"english": "No excuses are accepted. Not in this place.",
						"japanese": "いかなる弁明も通じない。この場では。",
						"chinese": "任何辩解都行不通。在这里。",
						"french": "Aucune excuse n'est acceptée. Pas ici.",
						"spanish": "Ninguna excusa es válida. En este lugar.",
						"vietnamese": "Mọi lời biện minh đều vô ích. Ở nơi này.",
						"thai": "ไม่มีข้อแก้ตัวใดๆ ได้ผล ที่นี่.",
						"hindi": "कोई बहाना काम नहीं करेगा। इस जगह पर।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사정조차 들어주지 않는다는 건가?",
						"english": "You won't even hear me out?",
						"japanese": "話も聞かぬというのか？",
						"chinese": "连理由都不听吗？",
						"french": "Vous ne m'écoutez même pas ?",
						"spanish": "¿Ni siquiera me escucharás?",
						"vietnamese": "Không cả nghe giải thích?",
						"thai": "ไม่ฟังเหตุผลเลยหรือ?",
						"hindi": "क्या तुम मेरी बात भी नहीं सुनोगे?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "깨어진 맹세는 그 까닭과 상관없이, 반드시 대가를 치르지.",
						"english": "A broken vow, no matter why, always has a cost.",
						"japanese": "破られた誓いは、理由を問わず、必ず報いを受ける。",
						"chinese": "打破的誓言，无论缘由，必将付出代价。",
						"french": "Un serment rompu, quelle qu'en soit la cause, demande toujours un prix.",
						"spanish": "Un juramento roto, sin importar la causa, siempre tiene un precio.",
						"vietnamese": "Lời thề đã vỡ, bất kể lý do, đều phải trả giá.",
						"thai": "คำสาบานที่แตกหัก ไม่ว่าด้วยเหตุใด ย่อมต้องชดใช้",
						"hindi": "टूटी हुई शपथ, चाहे कोई भी कारण हो, हमेशा कीमत चुकानी पड़ती है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이들의 기록에는… 후회와 원망만 가득해.",
						"english": "Their records... only regret and resentment.",
						"japanese": "彼らの記録には…後悔と怨嗟しか残っていない。",
						"chinese": "他们的记录中…只充满后悔与怨恨。",
						"french": "Leurs registres... n'abritent que regrets et rancœur.",
						"spanish": "Sus registros... solo contienen arrepentimiento y resentimiento.",
						"vietnamese": "Ghi chép của họ... chỉ đầy hối tiếc và oán hận.",
						"thai": "บันทึกของพวกเขา… มีแต่ความเสียใจและแค้นเคือง",
						"hindi": "उनके अभिलेखों में... केवल पछतावा और द्वेष है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너무 가혹한 심판 아니야?",
						"english": "Isn't this judgment too harsh?",
						"japanese": "あまりに過酷な裁きではないか？",
						"chinese": "这审判也太残酷了吧？",
						"french": "Ce jugement n'est-il pas trop cruel ?",
						"spanish": "¿No es este juicio demasiado severo?",
						"vietnamese": "Phán quyết này không quá tàn nhẫn sao?",
						"thai": "นี่ไม่ใช่การตัดสินที่โหดร้ายเกินไปหรือ?",
						"hindi": "क्या यह न्याय बहुत कठोर नहीं है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 얼음은 녹지 않아. 그들의 절규도 닿지 못했어.",
						"english": "But the ice remains. Their pleas unheard.",
						"japanese": "しかし氷は溶けず。彼らの絶叫も届かなかった。",
						"chinese": "然而冰未曾融化。他们的绝望呐喊也未能抵达。",
						"french": "Mais la glace ne fond pas. Leurs supplications n'ont pas été entendues.",
						"spanish": "Pero el hielo no se derrite. Sus lamentos no fueron escuchados.",
						"vietnamese": "Nhưng băng không tan. Tiếng kêu gào của họ cũng không đến được.",
						"thai": "แต่ธารน้ำแข็งไม่ละลาย เสียงกรีดร้องของพวกเขาก็ไปไม่ถึง",
						"hindi": "परंतु बर्फ पिघली नहीं। उनकी चीखें भी नहीं पहुँच पाईं।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 심판은… 어떤 자비도 없어. 오직 결과만이 존재할 뿐.",
						"english": "This judgment... knows no mercy. Only the outcome matters.",
						"japanese": "この裁きに…慈悲はない。あるのは結果のみ。",
						"chinese": "这审判…毫无怜悯。唯有结果存在。",
						"french": "Ce jugement… est sans pitié. Seul le résultat compte.",
						"spanish": "Este juicio... no tiene misericordia. Solo el resultado existe.",
						"vietnamese": "Phán quyết này... không có lòng trắc ẩn. Chỉ có kết quả tồn tại.",
						"thai": "การตัดสินนี้… ไร้ซึ่งเมตตาใดๆ มีเพียงผลลัพธ์เท่านั้น",
						"hindi": "इस न्याय में... कोई दया नहीं। केवल परिणाम ही है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "대체 왜 이렇게 냉혹한 거야?",
						"english": "Why so merciless?",
						"japanese": "一体なぜここまで冷酷なのだ？",
						"chinese": "为何如此冷酷无情？",
						"french": "Pourquoi tant de cruauté ?",
						"spanish": "¿Por qué es tan implacable?",
						"vietnamese": "Tại sao lại lạnh lùng đến vậy?",
						"thai": "ทำไมถึงได้เลือดเย็นขนาดนี้?",
						"hindi": "आखिर यह इतना क्रूर क्यों है?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 진실만이 얼어붙은 자들을 지배했다. 되돌아갈 수 없었다.",
						"english": "Only the cold truth held sway over the frozen. There was no going back.",
						"japanese": "冷酷な真実のみが、凍りついた者たちを支配した。もう引き返せなかった。",
						"chinese": "只有冰冷的真相主宰着被冰封之人。已无法回头。",
						"french": "Seule la froide vérité régnait sur les figés. Il n'y avait pas de retour possible.",
						"spanish": "Solo la fría verdad dominaba a los congelados. No había vuelta atrás.",
						"vietnamese": "Chỉ có sự thật lạnh lùng thống trị những kẻ bị đóng băng. Không thể quay lại.",
						"thai": "ความจริงอันเยือกเย็นเท่านั้นที่ครอบงำผู้ที่ถูกแช่แข็ง ไม่สามารถย้อนกลับได้",
						"hindi": "केवल ठंडी सच्चाई ने जमे हुए लोगों पर शासन किया। पीछे मुड़ना असंभव था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "심판의 가장 깊은 곳. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "The deepest heart of judgment. A vast shadow awaited the expedition.",
						"japanese": "裁きの最深部。巨大な影が探検隊を待ち受けていた。",
						"chinese": "审判的最深处。巨大的黑影正等待着探险队。",
						"french": "Au plus profond du jugement. Une ombre colossale attendait l'expédition.",
						"spanish": "El lugar más profundo del juicio. Una sombra colosal esperaba a la expedición.",
						"vietnamese": "Nơi sâu nhất của phán quyết. Một bóng đen khổng lồ đang đợi đội thám hiểm.",
						"thai": "ใจกลางการพิพากษาที่ลึกที่สุด. เงาขนาดมหึมากำลังรอทีมสำรวจอยู่",
						"hindi": "न्याय के सबसे गहरे स्थान पर। एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "깨어진 맹세의 무게를 감당할 수 있겠나?",
						"english": "Can you withstand the burden of a shattered vow?",
						"japanese": "破られた誓いの重みに耐えられるか？",
						"chinese": "你能承受破碎誓言的重量吗？",
						"french": "Pouvez-vous supporter le poids d'un serment rompu ?",
						"spanish": "¿Podrás soportar el peso de un juramento roto?",
						"vietnamese": "Ngươi có thể gánh vác sức nặng của lời thề đã vỡ không?",
						"thai": "เจ้าจะรับน้ำหนักของคำสาบานที่แตกหักได้หรือไม่?",
						"hindi": "क्या तुम टूटी हुई शपथ का बोझ सहन कर सकते हो?"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그 냉혹함의 이유를 밝히겠다.",
						"english": "I will reveal the reason for this ruthlessness.",
						"japanese": "その冷酷さの理由を明かそう。",
						"chinese": "我将揭示这份冷酷的原因。",
						"french": "Je révélerai la raison de cette cruauté.",
						"spanish": "Revelaré la razón de esta crueldad.",
						"vietnamese": "Ta sẽ tiết lộ lý do cho sự tàn nhẫn này.",
						"thai": "ข้าจะเปิดเผยเหตุผลของความไร้ปรานีนี้",
						"hindi": "मैं इस क्रूरता का कारण बताऊंगा।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그럼, 너희도 맹세의 대가를 치러라.",
						"english": "Then, you too shall pay the price of the oath.",
						"japanese": "ならば、お前たちも誓いの代償を払うがいい。",
						"chinese": "那么，你们也应付出誓言的代价。",
						"french": "Alors, vous aussi paierez le prix du serment.",
						"spanish": "Entonces, vosotros también pagaréis el precio del juramento.",
						"vietnamese": "Vậy thì, các ngươi cũng phải trả giá cho lời thề.",
						"thai": "ถ้าอย่างนั้น พวกเจ้าก็จงชดใช้ราคาของคำสาบานเสีย",
						"hindi": "तो, तुम भी शपथ का मोल चुकाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이 정도인가. 아직 심판은 끝나지 않았다.",
						"english": "...Is this all? The judgment is not over yet.",
						"japanese": "…たったこれだけか。まだ審判は終わっていない。",
						"chinese": "……就这点程度吗？审判尚未结束。",
						"french": "...C'est tout ce qu'il y a ? Le jugement n'est pas encore terminé.",
						"spanish": "...¿Es solo esto? El juicio aún no ha terminado.",
						"vietnamese": "...Chỉ đến mức này thôi sao? Phán xét vẫn chưa kết thúc.",
						"thai": "...แค่นี้เองหรือ การพิพากษายังไม่จบสิ้น",
						"hindi": "...बस इतना ही? न्याय अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "하지만, 한 발짝 더 다가섰어.",
						"english": "However, you've taken one step closer.",
						"japanese": "だが、一歩近づいたな。",
						"chinese": "但是，你又向前迈进了一步。",
						"french": "Cependant, tu as fait un pas de plus.",
						"spanish": "Sin embargo, has dado un paso más.",
						"vietnamese": "Tuy nhiên, ngươi đã tiến thêm một bước.",
						"thai": "แต่ว่า เจ้าก้าวเข้ามาใกล้ขึ้นอีกก้าวแล้ว",
						"hindi": "हालांकि, तुम एक कदम और पास आ गए हो।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 조각 사이로 새로운 길이 열렸다. 심판의 더 깊은 곳으로.",
						"english": "A new path has opened amidst the ice shards. Into the deeper parts of judgment.",
						"japanese": "氷の破片の間に新たな道が開かれた。審判のより深い場所へ。",
						"chinese": "冰屑之间开辟了新的道路。通往审判更深之处。",
						"french": "Un nouveau chemin s'est ouvert à travers les éclats de glace. Vers les profondeurs du jugement.",
						"spanish": "Un nuevo camino se ha abierto entre los fragmentos de hielo. Hacia las profundidades del juicio.",
						"vietnamese": "Một con đường mới đã mở ra giữa những mảnh băng. Đi sâu hơn vào phán xét.",
						"thai": "เส้นทางใหม่ได้เปิดออกระหว่างเกล็ดน้ำแข็ง สู่ส่วนที่ลึกกว่าของการพิพากษา",
						"hindi": "बर्फ के टुकड़ों के बीच एक नया रास्ता खुल गया है। न्याय के गहरे स्थानों की ओर।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어떤 변명도 통하지 않듯, 어떤 저항도 무의미하다.",
						"english": "Just as no excuse is valid, no resistance is meaningful.",
						"japanese": "いかなる弁明も通じぬように、いかなる抵抗も無意味だ。",
						"chinese": "正如任何辩解都无效，任何抵抗也毫无意义。",
						"french": "De même qu'aucune excuse n'est valable, aucune résistance n'est futile.",
						"spanish": "Así como ninguna excusa es válida, ninguna resistencia es inútil.",
						"vietnamese": "Cũng như mọi lời bào chữa đều vô ích, mọi sự kháng cự cũng vô nghĩa.",
						"thai": "เช่นเดียวกับการแก้ตัวใด ๆ ที่ไม่เป็นผล การต่อต้านใด ๆ ก็ไร้ความหมาย",
						"hindi": "जैसे कोई बहाना काम नहीं करता, वैसे ही कोई प्रतिरोध भी व्यर्थ है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 진실은 반드시 밝혀진다.",
						"english": "...It's not over yet. The truth will surely be revealed.",
						"japanese": "…まだ終わっていない。真実は必ず暴かれる。",
						"chinese": "……尚未结束。真相终将大白。",
						"french": "...Ce n'est pas encore fini. La vérité sera certainement révélée.",
						"spanish": "...Aún no ha terminado. La verdad será revelada sin falta.",
						"vietnamese": "...Vẫn chưa kết thúc. Sự thật chắc chắn sẽ được phơi bày.",
						"thai": "...ยังไม่จบ ความจริงจะต้องถูกเปิดเผย",
						"hindi": "...अभी खत्म नहीं हुआ है। सच अवश्य सामने आएगा।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
