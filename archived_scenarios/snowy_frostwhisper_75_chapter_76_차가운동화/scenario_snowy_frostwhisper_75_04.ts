export const scenario_snowy_frostwhisper_75_04 = {
	"scenario_id": "snowy_frostwhisper_75_04",
	"order": 4,
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
	"prologue": {
		"korean": [
			"고대의 기록은 진실을 말하는가.",
			"힐드는 '겨울의 숨결'을 막을 방법을 찾았다고 했다.",
			"그러나 그녀의 눈은 점점 공허해지고.",
			"그 조언은, 차가운 함정 속으로 이끌었다.",
			"잔혹한 동화가 시작되고 있었다."
		],
		"english": [
			"Do ancient records speak the truth?",
			"Hilde claimed to have found a way to stop the 'Breath of Winter'.",
			"But her eyes grew emptier and emptier.",
			"Her advice led us into a cold trap.",
			"A cruel fairy tale was beginning."
		],
		"japanese": [
			"古の記録は真実を語るのか。",
			"ヒルデは『冬の息吹』を止める方法を見つけたと語った。",
			"しかし、彼女の瞳は次第に虚ろになり。",
			"その助言は、冷たい罠へと導いた。",
			"残酷な童話が始まろうとしていた。"
		],
		"chinese": [
			"古老的记录在诉说真相吗？",
			"希尔德声称找到了阻止“冬日之息”的方法。",
			"然而，她的眼睛却变得越来越空洞。",
			"那个建议，将我们引向了一个冰冷的陷阱。",
			"一场残酷的童话正在开始。"
		],
		"french": [
			"Les anciens registres disent-ils la vérité ?",
			"Hilde affirmait avoir trouvé un moyen d'arrêter le « Souffle de l'Hiver ».",
			"Mais ses yeux devinrent de plus en plus vides.",
			"Ce conseil nous a menés dans un piège glacial.",
			"Un conte de fées cruel commençait."
		],
		"spanish": [
			"¿Dicen la verdad los registros antiguos?",
			"Hilde afirmó haber encontrado una forma de detener el 'Aliento de Invierno'.",
			"Pero sus ojos se volvieron cada vez más vacíos.",
			"Ese consejo nos llevó a una trampa fría.",
			"Un cuento de hadas cruel estaba comenzando."
		],
		"vietnamese": [
			"Liệu những ghi chép cổ xưa có nói lên sự thật?",
			"Hilde nói đã tìm ra cách ngăn chặn 'Hơi Thở Mùa Đông'.",
			"Nhưng đôi mắt cô ấy ngày càng trống rỗng.",
			"Lời khuyên đó đã dẫn đến một cái bẫy lạnh lẽo.",
			"Một câu chuyện cổ tích tàn khốc đã bắt đầu."
		],
		"thai": [
			"บันทึกโบราณกล่าวถึงความจริงหรือเปล่า",
			"ฮิลเดออ้างว่าได้พบวิธีที่จะหยุด 'ลมหายใจแห่งฤดูหนาว' แล้ว",
			"แต่ดวงตาของเธอกลับว่างเปล่าขึ้นเรื่อยๆ",
			"คำแนะนำนั้นได้นำพาเราไปสู่กับดักที่เยือกเย็น",
			"นิทานอันโหดร้ายกำลังจะเริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"क्या प्राचीन अभिलेख सच बोलते हैं?",
			"हिल्डे ने 'सर्दी की सांस' को रोकने का एक तरीका ढूंढने का दावा किया।",
			"लेकिन उसकी आँखें और भी खाली होती गईं।",
			"उस सलाह ने हमें एक ठंडे जाल में फंसा दिया।",
			"एक क्रूर परी कथा शुरू हो रही थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "오래된 석실. 벽에는 알 수 없는 문자가 가득했다.",
						"english": "An old stone chamber. The walls were covered with unknown characters.",
						"japanese": "古い石室。壁には未知の文字がびっしりと書かれていた。",
						"chinese": "古老的石室。墙壁上布满了未知的文字。",
						"french": "Une vieille chambre de pierre. Les murs étaient couverts de caractères inconnus.",
						"spanish": "Una antigua cámara de piedra. Las paredes estaban cubiertas de caracteres desconocidos.",
						"vietnamese": "Một căn phòng đá cổ. Bức tường đầy những ký tự không rõ.",
						"thai": "ห้องหินเก่าแก่ กำแพงเต็มไปด้วยอักษรที่ไม่รู้จัก",
						"hindi": "एक पुराना पत्थर का कमरा। दीवारें अज्ञात अक्षरों से ढकी हुई थीं।"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "겨울의 숨결… 그 존재에 대한 해답을 찾고 있었어.",
						"english": "The Breath of Winter... I was looking for answers about its existence.",
						"japanese": "冬の息吹…その存在についての答えを探していたんだ。",
						"chinese": "冬日之息……我正在寻找关于它存在的答案。",
						"french": "Le Souffle de l'Hiver... Je cherchais des réponses sur son existence.",
						"spanish": "El Aliento de Invierno... Estaba buscando respuestas sobre su existencia.",
						"vietnamese": "Hơi Thở Mùa Đông... Tôi đang tìm kiếm câu trả lời về sự tồn tại của nó.",
						"thai": "ลมหายใจแห่งฤดูหนาว...ฉันกำลังมองหาคำตอบเกี่ยวกับการมีอยู่ของมัน",
						"hindi": "सर्दी की सांस... मैं उसके अस्तित्व के बारे में जवाब ढूंढ रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "해답이라고요?",
						"english": "Answers?",
						"japanese": "答えですか？",
						"chinese": "答案？",
						"french": "Des réponses ?",
						"spanish": "¿Respuestas?",
						"vietnamese": "Câu trả lời ư?",
						"thai": "คำตอบเหรอ?",
						"hindi": "जवाब?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "고대 바이킹의 기록이야. 이 세계의 모든 것을 삼키는 냉기.",
						"english": "It's an ancient Viking record. The chill that devours everything in this world.",
						"japanese": "古代ヴァイキングの記録だ。この世界の全てを飲み込む冷気。",
						"chinese": "这是古代维京人的记录。吞噬这个世界上一切的寒冷。",
						"french": "C'est un ancien registre viking. Le froid qui dévore tout dans ce monde.",
						"spanish": "Es un registro vikingo antiguo. El frío que devora todo en este mundo.",
						"vietnamese": "Đó là một ghi chép cổ của người Viking. Cái lạnh nuốt chửng mọi thứ trên thế giới này.",
						"thai": "เป็นบันทึกของชาวไวกิ้งโบราณ ความหนาวเหน็บที่กลืนกินทุกสิ่งในโลกนี้",
						"hindi": "यह एक प्राचीन वाइकिंग अभिलेख है। वह ठंडक जो इस दुनिया की हर चीज़ को निगल जाती है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "막을 방법이 적혀있어. 아주 오래된, 잔혹한 동화처럼.",
						"english": "The way to stop it is written here. Like a very old, cruel fairy tale.",
						"japanese": "止める方法が書かれている。まるで、古く残酷な童話のように。",
						"chinese": "这里写着阻止它的方法。就像一个非常古老、残酷的童话。",
						"french": "La façon de l'arrêter est écrite ici. Comme un très vieux, cruel conte de fées.",
						"spanish": "Aquí está escrito cómo detenerlo. Como un cuento de hadas muy antiguo y cruel.",
						"vietnamese": "Cách ngăn chặn đã được viết ở đây. Giống như một câu chuyện cổ tích rất xưa và tàn khốc.",
						"thai": "วิธีที่จะหยุดมันถูกเขียนไว้ที่นี่ เหมือนกับนิทานเก่าแก่และโหดร้ายเรื่องหนึ่ง",
						"hindi": "इसे रोकने का तरीका यहां लिखा है। एक बहुत पुरानी, ​​क्रूर परी कथा की तरह।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "기록에 따르면, '겨울의 숨결'은 가장 소중한 것을 바쳐야 멈춘다고 했어.",
						"english": "According to records, 'Winter's Breath' can only be stopped by sacrificing what is most precious.",
						"japanese": "記録によると、「冬の息吹」は最も大切なものを捧げなければ止まらないとされている。",
						"chinese": "记录记载，“冬之气息”只有献上最珍贵之物才能将其平息。",
						"french": "Selon les écrits, le « Souffle d'Hiver » ne peut être arrêté qu'en sacrifiant ce qui est le plus précieux.",
						"spanish": "Según los registros, el \"Aliento de Invierno\" solo puede detenerse sacrificando lo más preciado.",
						"vietnamese": "Theo ghi chép, 'Hơi Thở Mùa Đông' chỉ có thể dừng lại khi dâng hiến thứ quý giá nhất.",
						"thai": "ตามบันทึก 'ลมหายใจแห่งเหมันต์' จะหยุดได้ก็ต่อเมื่อสังเวยสิ่งที่ล้ำค่าที่สุด",
						"hindi": "अभिलेखों के अनुसार, 'शीत की साँस' को रोकने के लिए सबसे कीमती चीज़ का बलिदान करना होगा।"
					}
				},
				{
					"content": {
						"korean": "가장 소중한 것…?",
						"english": "The most precious thing...?",
						"japanese": "最も大切なもの…？",
						"chinese": "最珍贵之物……？",
						"french": "La chose la plus précieuse… ?",
						"spanish": "¿Lo más preciado...?",
						"vietnamese": "Thứ quý giá nhất...?",
						"thai": "สิ่งที่ล้ำค่าที่สุด...?",
						"hindi": "सबसे कीमती चीज़...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "어떤 부족은 첫 아이를, 어떤 이는 피를, 또 다른 이는 마음의 온기를 바쳤지.",
						"english": "Some tribes offered their firstborn, some their blood, others the warmth of their hearts.",
						"japanese": "ある部族は初子を、ある者は血を、またある者は心の温もりを捧げた。",
						"chinese": "有些部落献上长子，有些献上鲜血，还有些献上心之温暖。",
						"french": "Certaines tribus ont offert leur premier-né, d'autres leur sang, et d'autres encore la chaleur de leur cœur.",
						"spanish": "Algunas tribus ofrecieron a su primogénito, otras su sangre, y otras más el calor de su corazón.",
						"vietnamese": "Một số bộ lạc dâng hiến con đầu lòng, số khác dâng máu, và những người khác dâng sự ấm áp từ trái tim.",
						"thai": "บางเผ่าสังเวยบุตรคนแรก บางคนสังเวยเลือด และบางคนสังเวยความอบอุ่นแห่งใจ",
						"hindi": "कुछ जनजातियों ने अपने पहले बच्चे का बलिदान किया, कुछ ने रक्त का, और कुछ ने अपने हृदय की गर्माहट का।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "그래야만 냉기가 만족하고 물러난다고… 기록되어 있어.",
						"english": "Only then will the chill be satisfied and recede... it is written.",
						"japanese": "そうして初めて、冷気が満足して退くと…記録されている。",
						"chinese": "唯有如此，寒意才会满足并退去……记录是这样说的。",
						"french": "Ce n'est qu'ainsi que le froid sera satisfait et se retirera… c'est écrit.",
						"spanish": "Solo así el frío se satisfará y retrocederá... así está escrito.",
						"vietnamese": "Chỉ khi đó, cái lạnh mới thỏa mãn và rút lui... đã được ghi chép lại.",
						"thai": "มีบันทึกไว้ว่า เมื่อทำเช่นนั้น ความหนาวเย็นจึงจะพึงพอใจและถอยกลับไป",
						"hindi": "तभी ठंड संतुष्ट होकर पीछे हटेगी... ऐसा लिखा है।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "그게… 해답이라고요?",
						"english": "That's... the answer?",
						"japanese": "それが…答えだと？",
						"chinese": "那就是……答案吗？",
						"french": "C'est… la réponse ?",
						"spanish": "¿Esa es… la respuesta?",
						"vietnamese": "Đó là... câu trả lời sao?",
						"thai": "นั่นคือ... คำตอบหรือ?",
						"hindi": "वही... उत्तर है?"
					},
					"type": "speech"
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
					"action": "enter",
					"speaker": "hild",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "힐드의 눈빛이 흐려졌다. 동공이 공허하게 흔들렸다.",
						"english": "Hild's eyes clouded over. Her pupils trembled emptily.",
						"japanese": "ヒルドの瞳が曇った。瞳孔が虚ろに揺れる。",
						"chinese": "希尔德的眼神变得模糊。瞳孔空洞地颤动着。",
						"french": "Le regard d'Hild se voila. Ses pupilles tremblaient, vides.",
						"spanish": "La mirada de Hild se nubló. Sus pupilas temblaban vacías.",
						"vietnamese": "Ánh mắt của Hild mờ đi. Đồng tử của cô ấy rung lên một cách trống rỗng.",
						"thai": "แววตาของฮิลด์พร่ามัว รูม่านตาสั่นระริกอย่างว่างเปล่า",
						"hindi": "हिल्ड की आँखें धुंधली हो गईं। उसकी पुतलियाँ खालीपन से काँप रही थीं।"
					}
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "이 기록은 말해. '겨울의 숨결'은 거짓된 온기를 좋아해.",
						"english": "This record says. 'Winter's Breath' likes false warmth.",
						"japanese": "この記録は語る。「冬の息吹」は偽りの温もりを好むと。",
						"chinese": "这份记录说，“冬之气息”喜欢虚假的温暖。",
						"french": "Ce registre dit. Le « Souffle d'Hiver » aime la fausse chaleur.",
						"spanish": "Este registro dice: El \"Aliento de Invierno\" prefiere el calor falso.",
						"vietnamese": "Ghi chép này nói. 'Hơi Thở Mùa Đông' thích sự ấm áp giả tạo.",
						"thai": "บันทึกนี้กล่าวว่า 'ลมหายใจแห่งเหมันต์' ชอบความอบอุ่นจอมปลอม",
						"hindi": "यह अभिलेख कहता है। 'शीत की साँस' को झूठी गर्माहट पसंद है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "희망과 위안을 가장한 덧없는 환상. 그것이 가장 좋은 제물이라고.",
						"english": "Fleeting illusions disguised as hope and comfort. That is the best sacrifice.",
						"japanese": "希望と慰めを装った儚い幻想。それが最良の供物だと。",
						"chinese": "伪装成希望和慰藉的短暂幻象。那才是最好的祭品。",
						"french": "Des illusions éphémères déguisées en espoir et réconfort. C'est le meilleur sacrifice.",
						"spanish": "Ilusiones fugaces disfrazadas de esperanza y consuelo. Ese es el mejor sacrificio.",
						"vietnamese": "Những ảo ảnh phù du ngụy trang thành hy vọng và sự an ủi. Đó là vật tế tốt nhất.",
						"thai": "ภาพลวงตาที่ฉาบฉวยซึ่งแสร้งทำเป็นความหวังและปลอบใจ นั่นคือเครื่องสังเวยที่ดีที่สุด",
						"hindi": "आशा और सांत्वना के वेश में क्षणभंगुर भ्रम। वही सबसे अच्छा बलिदान है।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "거짓된 온기… 전에 만난 아눅이 그랬었죠.",
						"english": "False warmth... Anuk, whom we met before, was like that.",
						"japanese": "偽りの温もり…以前会ったアヌークがそうだったわね。",
						"chinese": "虚假的温暖……之前遇到的阿努克就是那样。",
						"french": "Une fausse chaleur… Anuk, que nous avons rencontré auparavant, était comme ça.",
						"spanish": "Falso calor... Anuk, a quien conocimos antes, era así.",
						"vietnamese": "Sự ấm áp giả tạo... Anuk, người chúng ta gặp trước đây, đã như vậy.",
						"thai": "ความอบอุ่นจอมปลอม... อานุคที่เราเคยเจอเป็นแบบนั้นนี่นา",
						"hindi": "झूठी गर्माहट... अर्नुक, जिससे हम पहले मिले थे, वैसा ही था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그 자의 유혹이 함정이었던 건가.",
						"english": "So his temptation was a trap?",
						"japanese": "あの者の誘惑が罠だったのか。",
						"chinese": "难道那家伙的诱惑是个陷阱吗？",
						"french": "Sa tentation était donc un piège ?",
						"spanish": "¿Así que su tentación era una trampa?",
						"vietnamese": "Vậy ra sự cám dỗ của hắn là một cái bẫy sao?",
						"thai": "หรือว่าการชักจูงของเขานั่นเป็นกับดักกันนะ",
						"hindi": "तो उसका प्रलोभन एक जाल था?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "hild",
					"content": {
						"korean": "기록은 조언해. 거짓된 환상에 더 깊이 빠져들수록, 냉기는 더욱 만족한다고.",
						"english": "The records advise. The deeper you sink into false illusions, the more the chill is satisfied.",
						"japanese": "記録は助言する。偽りの幻想に深く陥るほど、冷気はさらに満たされると。",
						"chinese": "记录告诫道。你越是深陷虚假的幻象，寒意就越是满足。",
						"french": "Les annales conseillent. Plus vous vous enfoncez dans les fausses illusions, plus le froid est satisfait.",
						"spanish": "Los registros aconsejan. Cuanto más te hundes en falsas ilusiones, más satisface el frío.",
						"vietnamese": "Ghi chép khuyên rằng. Càng lún sâu vào ảo ảnh dối trá, cái lạnh càng được thỏa mãn.",
						"thai": "บันทึกแนะนำ ยิ่งเจ้าจมดิ่งลงสู่มายาอันหลอกลวงมากเท่าไร ความหนาวเย็นก็ยิ่งพึงพอใจมากขึ้นเท่านั้น",
						"hindi": "अभिलेख सलाह देते हैं। तुम जितना अधिक झूठे भ्रमों में डूबते जाओगे, शीतलता उतनी ही अधिक संतुष्ट होगी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "점점 알 수 없군.",
						"english": "It's getting harder to understand.",
						"japanese": "ますます分からない。",
						"chinese": "越来越搞不懂了。",
						"french": "C'est de moins en moins clair.",
						"spanish": "Cada vez es más incomprensible.",
						"vietnamese": "Càng ngày càng khó hiểu.",
						"thai": "ยิ่งเข้าใจยากขึ้นเรื่อยๆ",
						"hindi": "यह और भी रहस्यमय होता जा रहा है।"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "hild",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "힐드는 떨리는 손으로 벽의 기록을 가리켰다.",
						"english": "Hilde pointed to the records on the wall with a trembling hand.",
						"japanese": "ヒルデは震える手で壁の記録を指した。",
						"chinese": "希尔德用颤抖的手指着墙上的记录。",
						"french": "Hilde désigna les annales sur le mur d'une main tremblante.",
						"spanish": "Hilde señaló los registros en la pared con una mano temblorosa.",
						"vietnamese": "Hilde chỉ vào ghi chép trên tường với bàn tay run rẩy.",
						"thai": "ฮิลเดอชี้ไปที่บันทึกบนกำแพงด้วยมือที่สั่นเทา",
						"hindi": "हिल्डे ने कांपते हाथों से दीवार पर लगे अभिलेखों की ओर इशारा किया।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "'겨울의 숨결'은… 모든 온기를 앗아가. 심지어 희망마저도.",
						"english": "'Winter's Breath'… takes away all warmth. Even hope itself.",
						"japanese": "「冬の息吹」は… すべての温もりを奪う。希望さえも。",
						"chinese": "“冬之气息”会… 夺走所有温暖。甚至连希望也一样。",
						"french": "Le « Souffle d'Hiver »… ôte toute chaleur. Même l'espoir.",
						"spanish": "El 'Aliento de Invierno'… arrebata todo calor. Incluso la esperanza.",
						"vietnamese": "“Hơi thở của Mùa đông”… cướp đi mọi hơi ấm. Ngay cả hy vọng cũng vậy.",
						"thai": "‘ลมหายใจแห่งฤดูหนาว’… พรากความอบอุ่นไปทั้งหมด แม้แต่ความหวัง",
						"hindi": "‘शीत की साँसें’... सारी गर्माहट छीन लेती हैं। यहाँ तक कि आशा भी।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "그에게 저항하려는 의지, 살고자 하는 마음. 그 모든 것이 냉기의 양분이 된다고.",
						"english": "The will to resist him, the desire to live. All of that becomes sustenance for the chill.",
						"japanese": "彼に抵抗しようとする意志、生きようとする心。そのすべてが冷気の糧となる。",
						"chinese": "抵抗他的意志，求生的欲望。所有这一切都将成为寒意的养分。",
						"french": "La volonté de lui résister, le désir de vivre. Tout cela devient la subsistance du froid.",
						"spanish": "La voluntad de resistirlo, el deseo de vivir. Todo eso se convierte en alimento para el frío.",
						"vietnamese": "Ý chí chống lại hắn, khao khát sống. Tất cả những điều đó trở thành chất dinh dưỡng cho cái lạnh.",
						"thai": "เจตจำนงที่จะต่อต้านเขา ความปรารถนาที่จะมีชีวิตอยู่ ทั้งหมดนั้นกลายเป็นอาหารของความหนาวเย็น",
						"hindi": "उसका प्रतिरोध करने की इच्छा, जीने की चाहत। वह सब कुछ शीतलता का पोषण बन जाता है।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 어떻게 해야 하죠?",
						"english": "Then what should we do?",
						"japanese": "では、どうすればいいのですか？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Entonces, qué debemos hacer?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำอย่างไร?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "기록은 말해… 저항하지 마. 그저… 모든 것을 바쳐.",
						"english": "The records say… don't resist. Just… offer everything.",
						"japanese": "記録は言う… 抵抗するな。ただ… すべてを捧げよ。",
						"chinese": "记录上说… 不要抵抗。只是… 献上一切。",
						"french": "Les annales disent… ne résistez pas. Offrez juste… tout.",
						"spanish": "Los registros dicen… no resistas. Solo… entrégalo todo.",
						"vietnamese": "Ghi chép nói… đừng chống cự. Chỉ cần… hiến dâng tất cả.",
						"thai": "บันทึกกล่าวว่า… อย่าต่อต้าน แค่… มอบทุกสิ่ง",
						"hindi": "अभिलेख कहते हैं… विरोध मत करो। बस… सब कुछ समर्पित कर दो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼…!",
						"english": "That's impossible…!",
						"japanese": "まさか…！",
						"chinese": "荒谬…！",
						"french": "C'est impensable… !",
						"spanish": "¡Imposible…!",
						"vietnamese": "Vô lý…!",
						"thai": "เป็นไปไม่ได้...!",
						"hindi": "यह असंभव है...!"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "냉기가 모든 것을 집어삼켰다. 희망도, 온기도.",
						"english": "The cold swallowed everything. Hope, and warmth.",
						"japanese": "冷気がすべてを飲み込んだ。希望も、温もりも。",
						"chinese": "寒冷吞噬了一切。希望，和温暖。",
						"french": "Le froid a tout englouti. L'espoir, et la chaleur.",
						"spanish": "El frío lo engulló todo. La esperanza, y el calor.",
						"vietnamese": "Giá lạnh nuốt chửng mọi thứ. Cả hy vọng lẫn hơi ấm.",
						"thai": "ความหนาวเย็นกลืนกินทุกสิ่ง. ทั้งความหวังและความอบอุ่น.",
						"hindi": "शीतलता ने सब कुछ निगल लिया। आशा भी, और गर्माहट भी।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고통스러워해라. 절망이 너희의 온기가 되리라.",
						"english": "Suffer. Despair shall be your warmth.",
						"japanese": "苦しめ。絶望がお前たちの温もりとなるだろう。",
						"chinese": "痛苦吧。绝望将成为你们的温暖。",
						"french": "Souffrez. Le désespoir sera votre chaleur.",
						"spanish": "Sufra. La desesperación será su calor.",
						"vietnamese": "Hãy đau khổ đi. Tuyệt vọng sẽ là hơi ấm của các ngươi.",
						"thai": "จงทุกข์ทรมาน ความสิ้นหวังจะเป็นความอบอุ่นของพวกเจ้า",
						"hindi": "पीड़ित रहो। निराशा तुम्हारी गरमाहट होगी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이대로… 끝낼 수는 없어…!",
						"english": "I can't... end it like this...!",
						"japanese": "このままでは… 終われない…！",
						"chinese": "不能就这么… 结束…！",
						"french": "Je ne peux pas… finir comme ça… !",
						"spanish": "¡No puedo… terminar así…!",
						"vietnamese": "Không thể… kết thúc như thế này được…!",
						"thai": "จะให้จบลงแบบนี้… ไม่ได้เด็ดขาด…!",
						"hindi": "ऐसे ही… खत्म नहीं कर सकता…!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 헛수고… 온기는 사라지지 않아… 단지… 형태를 바꿀 뿐…",
						"english": "Heh heh... Futile... Warmth doesn't vanish... It merely... changes form...",
						"japanese": "クク…無駄だ…温もりは消えない…ただ…形を変えるだけ…",
						"chinese": "呵呵…徒劳…温暖不会消失…只是…改变形态…",
						"french": "Huhu... Vain effort... La chaleur ne disparaît pas... Elle ne fait que... changer de forme...",
						"spanish": "Jajaja... Inútil... El calor no desaparece... Simplemente... cambia de forma...",
						"vietnamese": "Khà khà... Vô ích... Hơi ấm không biến mất... Nó chỉ... thay đổi hình dạng mà thôi...",
						"thai": "ฮ่าๆ... ไร้ประโยชน์... ความอบอุ่นไม่หายไป... แค่... เปลี่ยนรูปทรง...",
						"hindi": "हाहहा... व्यर्थ... गर्माहट गायब नहीं होती... बस... रूप बदलती है..."
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 승리… 그것조차 나의 일부가 될 것이다… 하하하…",
						"english": "Your victory... Even that will become a part of me... Hahahaha...",
						"japanese": "お前たちの勝利…それさえも私の¹部となるだろう…ハハハ…",
						"chinese": "你们的胜利…那也将成为我的一部分…哈哈哈…",
						"french": "Votre victoire... Même cela deviendra une partie de moi... Hahahaha...",
						"spanish": "Vuestra victoria... Incluso eso se convertirá en parte de mí... Jajajaja...",
						"vietnamese": "Chiến thắng của các ngươi... Ngay cả điều đó cũng sẽ trở thành một phần của ta... Hahahaha...",
						"thai": "ชัยชนะของพวกเจ้า... แม้แต่มันก็จะกลายเป็นส่วนหนึ่งของข้า... ฮ่าฮ่าฮ่า...",
						"hindi": "तुम्हारी जीत... वह भी मेरा हिस्सा बन जाएगी... हाहाहा..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "끝난 건가…?",
						"english": "Is it over...?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗…？",
						"french": "Est-ce fini...?",
						"spanish": "¿Se acabó...?",
						"vietnamese": "Kết thúc rồi sao...?",
						"thai": "จบแล้วหรือ...?",
						"hindi": "क्या यह खत्म हो गया...?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 흩어지자, 잠시 온기가 감돌았다.",
						"english": "As the colossal shadow dispersed, a momentary warmth enveloped the air.",
						"japanese": "巨大な影が散らばると、一時的に温もりが漂った。",
						"chinese": "随着巨大的影子消散，一丝暖意弥漫开来。",
						"french": "Alors que l'ombre colossale se dispersait, une chaleur passagère envahit l'air.",
						"spanish": "Cuando la sombra colosal se dispersó, un calor momentáneo envolvió el ambiente.",
						"vietnamese": "Khi bóng tối khổng lồ tan biến, một luồng hơi ấm nhất thời lan tỏa.",
						"thai": "เมื่อเงาขนาดยักษ์สลายไป, ความอบอุ่นชั่วขณะหนึ่งก็แผ่ซ่าน.",
						"hindi": "जैसे ही विशाल छाया बिखरी, एक क्षणिक गर्माहट छा गई।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그러나 그것은 차가운 기만. 또 다른 시작일 뿐이었다.",
						"english": "But it was a cold deception. Merely another beginning.",
						"japanese": "しかし、それは冷たい欺瞞。もう一つの始まりに過ぎなかった。",
						"chinese": "然而那却是冰冷的欺骗。仅仅是另一个开始。",
						"french": "Mais ce n'était qu'une froide tromperie. Juste un autre début.",
						"spanish": "Pero fue un engaño frío. Simplemente otro comienzo.",
						"vietnamese": "Nhưng đó là một sự lừa dối lạnh lẽo. Chỉ là một khởi đầu khác.",
						"thai": "แต่มันเป็นการหลอกลวงที่เย็นชา. เป็นเพียงจุดเริ่มต้นอีกครั้ง.",
						"hindi": "परन्तु वह एक ठंडी चाल थी। केवल एक और शुरुआत।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "오래 헤매었군, 어리석은 자들.",
						"english": "You've wandered long, foolish ones.",
						"japanese": "長くさまよったな、愚か者たち。",
						"chinese": "你们这些愚蠢的家伙，迷失了太久。",
						"french": "Vous avez erré longtemps, insensés.",
						"spanish": "Habéis vagado mucho tiempo, necios.",
						"vietnamese": "Các ngươi đã lạc lối quá lâu rồi, lũ ngốc.",
						"thai": "เจ้าหลงทางมานานแล้ว พวกโง่เขลา",
						"hindi": "तुम बहुत भटक गए हो, मूर्खों।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "힐드의 동화는 재밌었나? 그녀의 눈이 공허해진 이유를 알겠나?",
						"english": "Was Hilde's fairy tale entertaining? Do you understand why her eyes became vacant?",
						"japanese": "ヒルデの童話は面白かったか？彼女の目が虚ろになった理由が分かるか？",
						"chinese": "希尔德的童话故事有趣吗？你们明白她的眼睛为何变得空洞了吗？",
						"french": "Le conte de fées de Hilde était-il divertissant ? Comprenez-vous pourquoi ses yeux sont devenus vides ?",
						"spanish": "¿Fue entretenido el cuento de hadas de Hilde? ¿Entendéis por qué sus ojos se volvieron vacíos?",
						"vietnamese": "Câu chuyện cổ tích của Hilde có thú vị không? Các ngươi có hiểu tại sao đôi mắt cô ấy trở nên trống rỗng không?",
						"thai": "นิทานของฮิลเดสนุกไหม? เจ้าเข้าใจไหมว่าทำไมดวงตาของเธอมันว่างเปล่า?",
						"hindi": "क्या हिल्डे की परी कथा मनोरंजक थी? क्या तुम समझते हो कि उसकी आँखें सूनी क्यों हो गईं?"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 힐드를 조종한 건가?",
						"english": "Did you... control Hild?",
						"japanese": "あなたが… ヒルドを操ったのか？",
						"chinese": "你…控制了希尔德？",
						"french": "Tu... as contrôlé Hild ?",
						"spanish": "¿Tú... controlaste a Hild?",
						"vietnamese": "Ngươi... đã điều khiển Hild sao?",
						"thai": "เจ้า... ควบคุมฮิลด์หรือ?",
						"hindi": "क्या तुमने... हिल्ड को नियंत्रित किया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "조종? 아니. 그저 진실을 보여줬을 뿐. 기록은 왜곡되지 않아.",
						"english": "Control? No. I merely showed the truth. Records aren't distorted.",
						"japanese": "操る？いや。ただ真実を見せただけ。記録は歪まない。",
						"chinese": "控制？不。我只是展示了真相。记录不会被扭曲。",
						"french": "Contrôler ? Non. J'ai simplement montré la vérité. Les enregistrements ne sont pas déformés.",
						"spanish": "¿Controlar? No. Solo mostré la verdad. Los registros no se distorsionan.",
						"vietnamese": "Điều khiển? Không. Ta chỉ cho thấy sự thật thôi. Hồ sơ không bị bóp méo.",
						"thai": "ควบคุม? ไม่ใช่. ข้าแค่แสดงความจริงเท่านั้น. บันทึกไม่บิดเบือน.",
						"hindi": "नियंत्रण? नहीं। मैंने बस सच दिखाया। रिकॉर्ड विकृत नहीं होते।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가장 소중한 것을 바치는 것? 그건 너희의 절망이야.",
						"english": "Sacrificing what's most precious? That's your despair.",
						"japanese": "最も大切なものを捧げる？それはお前たちの絶望だ。",
						"chinese": "献上最珍贵之物？那是你们的绝望。",
						"french": "Sacrifier ce qu'il y a de plus précieux ? C'est votre désespoir.",
						"spanish": "¿Sacrificar lo más preciado? Esa es vuestra desesperación.",
						"vietnamese": "Hiến dâng thứ quý giá nhất? Đó là sự tuyệt vọng của các ngươi.",
						"thai": "สังเวยสิ่งที่ล้ำค่าที่สุด? นั่นคือความสิ้นหวังของพวกเจ้า.",
						"hindi": "सबसे अनमोल चीज़ का बलिदान? वह तुम्हारी निराशा है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "희망이 사라진 자리, 그곳에 냉기가 영원하리니.",
						"english": "Where hope vanishes, there the cold shall be eternal.",
						"japanese": "希望が消え去った場所、そこに冷気が永遠に。",
						"chinese": "希望消逝之处，寒冷将永存。",
						"french": "Là où l'espoir s'évanouit, le froid sera éternel.",
						"spanish": "Donde la esperanza se desvanece, allí el frío será eterno.",
						"vietnamese": "Nơi hy vọng tan biến, nơi đó giá lạnh sẽ vĩnh cửu.",
						"thai": "ที่ใดไร้ซึ่งหวัง, ที่นั่นความหนาวเย็นจะคงอยู่ชั่วนิรันดร์.",
						"hindi": "जहाँ आशा लुप्त हो जाती है, वहाँ शीतलता अनंत रहेगी।"
					},
					"type": "speech"
				}
			]
		}
	]
} as const;
