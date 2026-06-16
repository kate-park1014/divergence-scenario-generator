export const scenario_snowy_skalhorn_65_01 = {
	"scenario_id": "snowy_skalhorn_65_01",
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
			"고원 아래, 오래된 얼음 속에 감춰진 그림자.",
			"뿔잔의 기원, 그 진실을 향한 발걸음.",
			"잊힌 제단에서 속삭이는 얼어붙은 계약.",
			"누군가는 부족을 구하려 했고, 누군가는 모든 것을 얼렸다."
		],
		"english": [
			"A shadow hidden in ancient ice, beneath the plateau.",
			"The origin of the Horned Chalice, steps towards its truth.",
			"A frozen pact whispered from the forgotten altar.",
			"Some sought to save the tribe, others froze everything."
		],
		"japanese": [
			"高原の下、古の氷に隠された影。",
			"角杯の起源、その真実への一歩。",
			"忘れられた祭壇から囁かれる凍てつく契約。",
			"ある者は部族を救おうとし、ある者は全てを凍らせた。"
		],
		"chinese": [
			"高原之下，古老冰层中隐藏的阴影。",
			"号角杯的起源，迈向真相的步伐。",
			"被遗忘的祭坛上，冰封契约的低语。",
			"有人试图拯救部落，有人却冰封了一切。"
		],
		"french": [
			"Une ombre cachée dans la glace ancienne, sous le plateau.",
			"L'origine du Calice Cornu, des pas vers sa vérité.",
			"Un pacte gelé murmuré depuis l'autel oublié.",
			"Certains ont cherché à sauver la tribu, d'autres ont tout gelé."
		],
		"spanish": [
			"Una sombra oculta en el hielo antiguo, bajo la meseta.",
			"El origen del Cáliz Cornudo, pasos hacia su verdad.",
			"Un pacto congelado susurrado desde el altar olvidado.",
			"Algunos buscaron salvar a la tribu, otros lo congelaron todo."
		],
		"vietnamese": [
			"Một bóng tối ẩn mình trong băng cổ xưa, dưới cao nguyên.",
			"Nguồn gốc của Chén Sừng, những bước đi hướng tới sự thật của nó.",
			"Một giao ước đóng băng thì thầm từ bàn thờ bị lãng quên.",
			"Có người tìm cách cứu bộ tộc, có người lại đóng băng mọi thứ."
		],
		"thai": [
			"เงาที่ซ่อนอยู่ในน้ำแข็งโบราณ ใต้ที่ราบสูง",
			"ต้นกำเนิดของถ้วยเขา ก้าวสู่ความจริง",
			"พันธสัญญาที่แข็งตัวกระซิบจากแท่นบูชาที่ถูกลืม",
			"บางคนพยายามช่วยเผ่า บางคนทำให้ทุกอย่างแข็งตัว"
		],
		"hindi": [
			"पठार के नीचे, प्राचीन बर्फ में छिपी एक छाया।",
			"शृंगी प्याले की उत्पत्ति, उसके सत्य की ओर बढ़ते कदम।",
			"भूले हुए वेदी से फुसफुसाता हुआ एक जमा हुआ समझौता।",
			"कुछ ने जनजाति को बचाने की कोशिश की, दूसरों ने सब कुछ जमा दिया।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "뿔잔이 박힌 고원 아래. 얼어붙은 제단의 흔적이 모습을 드러냈다.",
						"english": "Beneath the plateau where the Horned Chalice rests. Traces of a frozen altar emerged.",
						"japanese": "角杯が埋め込まれた高原の下。凍てついた祭壇の痕跡が現れた。",
						"chinese": "在嵌有号角杯的高原之下。一座冰封祭坛的痕迹显露出来。",
						"french": "Sous le plateau où repose le Calice Cornu. Des traces d'un autel gelé sont apparues.",
						"spanish": "Bajo la meseta donde yace el Cáliz Cornudo. Los rastros de un altar congelado emergieron.",
						"vietnamese": "Dưới cao nguyên nơi Chén Sừng được chôn vùi. Dấu vết của một bàn thờ đóng băng đã lộ diện.",
						"thai": "ใต้ที่ราบสูงที่มีถ้วยเขาฝังอยู่ ร่องรอยของแท่นบูชาที่แข็งตัวปรากฏขึ้น",
						"hindi": "शृंगी प्याले के नीचे के पठार में। एक जमे हुए वेदी के निशान सामने आए।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 그 제단인가?",
						"english": "Is this... the altar?",
						"japanese": "これが…あの祭壇なのか？",
						"chinese": "这…就是那个祭坛吗？",
						"french": "C'est... l'autel ?",
						"spanish": "¿Es esto... el altar?",
						"vietnamese": "Đây có phải... là bàn thờ đó không?",
						"thai": "นี่... คือแท่นบูชานั้นหรือ?",
						"hindi": "क्या यह... वह वेदी है?"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "기록에서 본 것과 같군. 오랜 세월 잠들어 있었어.",
						"english": "Just like in the records. It's been dormant for ages.",
						"japanese": "記録で見た通りだ。長い年月眠っていたんだな。",
						"chinese": "和记录中看到的一样。它已经沉睡了很久。",
						"french": "C'est comme dans les archives. Il est resté dormant pendant des siècles.",
						"spanish": "Tal como en los registros. Ha estado latente durante siglos.",
						"vietnamese": "Giống hệt những gì trong ghi chép. Nó đã ngủ yên bao đời rồi.",
						"thai": "เหมือนที่เห็นในบันทึก มันหลับใหลมานานแล้ว",
						"hindi": "रिकॉर्ड्स में जैसा देखा था वैसा ही है। यह युगों से निष्क्रिय रहा है।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저기 봐. 주술사와 빙설 정령이 손을 맞잡은 형상.",
						"english": "Look. The shaman and the ice spirit, hand in hand.",
						"japanese": "見て。呪術師と氷雪精霊が手を取り合う姿だ。",
						"chinese": "看。那是巫师和冰雪精灵手牵手的雕像。",
						"french": "Regarde. Le chaman et l'esprit de glace, main dans la main.",
						"spanish": "Mira. El chamán y el espíritu de hielo, tomados de la mano.",
						"vietnamese": "Nhìn kìa. Pháp sư và tinh linh băng tuyết, tay trong tay.",
						"thai": "ดูนั่นสิ. รูปร่างของหมอผีกับภูติน้ำแข็งจับมือกัน",
						"hindi": "देखो। तांत्रिक और बर्फीली आत्मा, हाथ में हाथ डाले।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 의미지?",
						"english": "What does it mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça signifie ?",
						"spanish": "¿Qué significa?",
						"vietnamese": "Nó có ý nghĩa gì?",
						"thai": "มันหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 둘레에 새겨진 계약 문장을 해독하면 알 수 있을 거야.",
						"english": "We'll know once we decipher the pact inscribed around it.",
						"japanese": "この周囲に刻まれた契約の文章を解読すればわかるだろう。",
						"chinese": "如果我们能解读出刻在周围的契约铭文，就能知道了。",
						"french": "Nous le saurons une fois que nous aurons déchiffré le pacte gravé autour.",
						"spanish": "Lo sabremos una vez que descifremos el pacto grabado a su alrededor.",
						"vietnamese": "Chúng ta sẽ biết một khi giải mã được văn tự giao ước khắc xung quanh.",
						"thai": "เราจะรู้เมื่อเราถอดรหัสข้อความสัญญาที่สลักไว้รอบๆ นี้ได้",
						"hindi": "एक बार जब हम इसके चारों ओर खुदे हुए समझौते के पाठ को समझ लेंगे, तो हमें पता चल जाएगा।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "문장이 복잡하군. 강렬한 염원이 느껴져.",
						"english": "The sentence is complex. I feel a strong yearning.",
						"japanese": "文章が複雑だね。強い願いが感じられる。",
						"chinese": "这句子真复杂。我感受到强烈的愿望。",
						"french": "La phrase est complexe. Je ressens un ardent désir.",
						"spanish": "La frase es compleja. Siento un fuerte anhelo.",
						"vietnamese": "Câu này phức tạp thật. Tôi cảm nhận được một khát khao mãnh liệt.",
						"thai": "ประโยคซับซ้อนนะ สัมผัสได้ถึงความปรารถนาอันแรงกล้า",
						"hindi": "वाक्य जटिल है। एक तीव्र लालसा महसूस हो रही है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "염원?",
						"english": "Yearning?",
						"japanese": "願い？",
						"chinese": "愿望？",
						"french": "Désir ?",
						"spanish": "¿Anhelo?",
						"vietnamese": "Khát khao?",
						"thai": "ปรารถนา?",
						"hindi": "लालसा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "부족을 구하려는 간절한 기도… 그런 내용인 것 같아.",
						"english": "An earnest prayer to save the tribe... That's what it seems to be about.",
						"japanese": "部族を救おうとする切実な祈り…そんな内容のようだね。",
						"chinese": "是拯救部落的恳切祈祷… 似乎是这样的内容。",
						"french": "Une prière ardente pour sauver la tribu... C'est ce que ça semble être.",
						"spanish": "Una oración ferviente para salvar a la tribu... Parece que es eso.",
						"vietnamese": "Một lời cầu nguyện chân thành để cứu bộ tộc... Có vẻ là nội dung như vậy.",
						"thai": "คำอธิษฐานอันแรงกล้าเพื่อช่วยเผ่า... ดูเหมือนจะเป็นเนื้อหาประมาณนั้น",
						"hindi": "जनजाति को बचाने की एक दिली प्रार्थना... ऐसा ही कुछ लगता है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 이 뿔잔은 구원과 관련된 건가?",
						"english": "So, is this horn related to salvation?",
						"japanese": "じゃあ、この角杯は救済と関係があるの？",
						"chinese": "那么，这个角杯是与救赎有关吗？",
						"french": "Alors, cette corne est-elle liée au salut ?",
						"spanish": "¿Entonces, este cuerno está relacionado con la salvación?",
						"vietnamese": "Vậy, chiếc sừng này có liên quan đến sự cứu rỗi sao?",
						"thai": "ถ้าอย่างนั้น ถ้วยเขาสัตว์นี้เกี่ยวข้องกับการไถ่บาปเหรอ?",
						"hindi": "तो, क्या यह सींग मुक्ति से संबंधित है?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "…조금 더 읽었어. 기도의 내용은 명확해.",
						"english": "...I read a bit more. The content of the prayer is clear.",
						"japanese": "…もう少し読んだよ。祈りの内容は明確だ。",
						"chinese": "…我又读了一些。祈祷的内容很明确。",
						"french": "...J'ai lu un peu plus. Le contenu de la prière est clair.",
						"spanish": "...Leí un poco más. El contenido de la oración es claro.",
						"vietnamese": "...Tôi đã đọc thêm một chút. Nội dung của lời cầu nguyện đã rõ ràng.",
						"thai": "...อ่านเพิ่มอีกหน่อย เนื้อหาคำอธิษฐานชัดเจนแล้ว",
						"hindi": "...मैंने थोड़ा और पढ़ा। प्रार्थना का विषय स्पष्ट है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만 응답… 정령의 응답은 좀 달라.",
						"english": "But the response... the spirit's response is a bit different.",
						"japanese": "だけど、応え…精霊の応えは少し違う。",
						"chinese": "但是回应… 精灵的回应有点不同。",
						"french": "Mais la réponse... la réponse de l'esprit est un peu différente.",
						"spanish": "Pero la respuesta... la respuesta del espíritu es un poco diferente.",
						"vietnamese": "Nhưng sự đáp lại... sự đáp lại của linh hồn hơi khác.",
						"thai": "แต่คำตอบ... คำตอบของวิญญาณกลับต่างออกไปหน่อย",
						"hindi": "लेकिन प्रतिक्रिया... आत्मा की प्रतिक्रिया थोड़ी अलग है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "어떻게 다르지?",
						"english": "How is it different?",
						"japanese": "どう違うの？",
						"chinese": "有什么不同？",
						"french": "En quoi est-ce différent ?",
						"spanish": "¿En qué es diferente?",
						"vietnamese": "Khác như thế nào?",
						"thai": "ต่างกันยังไง?",
						"hindi": "कैसे अलग है?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "모든 것을 얼리라… 라는 구절이 반복돼.",
						"english": "'Everything shall freeze...' That phrase is repeated.",
						"japanese": "「すべてを凍らせよ」…という一節が繰り返されている。",
						"chinese": "'冻结一切'… 这句话反复出现。",
						"french": "'Tout doit geler...' Cette phrase est répétée.",
						"spanish": "'Todo se congelará...' Esa frase se repite.",
						"vietnamese": "'Tất cả sẽ đóng băng...' Câu đó được lặp đi lặp lại.",
						"thai": "ประโยคที่ว่า 'ทุกสิ่งจะถูกแช่แข็ง'... ถูกย้ำซ้ำไปมา",
						"hindi": "'सब कुछ जम जाएगा...' यह वाक्यांश दोहराया गया है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "구원과 얼림이라… 뭔가 이상해.",
						"english": "Salvation and freezing... Something's off.",
						"japanese": "救済と凍結か…なにかおかしい。",
						"chinese": "救赎与冻结… 总觉得有点奇怪。",
						"french": "Salut et gel... Quelque chose ne va pas.",
						"spanish": "Salvación y congelación... Algo no cuadra.",
						"vietnamese": "Cứu rỗi và đóng băng... Có gì đó không ổn.",
						"thai": "การไถ่บาปกับการแช่แข็ง... มันแปลกๆ นะ",
						"hindi": "मुक्ति और जमा देना... कुछ अजीब है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 계약은… 부족을 구하려는 금기된 거래였어.",
						"english": "This contract was... a forbidden deal to save the tribe.",
						"japanese": "この契約は…部族を救おうとする禁忌の取引だったんだ。",
						"chinese": "这份契约是… 为了拯救部落而进行的禁忌交易。",
						"french": "Ce contrat était... un pacte interdit pour sauver la tribu.",
						"spanish": "Este contrato fue... un trato prohibido para salvar a la tribu.",
						"vietnamese": "Hợp đồng này là... một giao dịch cấm kỵ để cứu bộ tộc.",
						"thai": "สัญญานี้...เป็นการแลกเปลี่ยนต้องห้ามเพื่อช่วยเผ่า",
						"hindi": "यह अनुबंध... जनजाति को बचाने के लिए एक वर्जित सौदा था।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "금기된 거래?",
						"english": "Forbidden deal?",
						"japanese": "禁断の取引？",
						"chinese": "禁忌的交易？",
						"french": "Un marché interdit ?",
						"spanish": "¿Un trato prohibido?",
						"vietnamese": "Giao dịch cấm ư?",
						"thai": "ข้อตกลงต้องห้าม?",
						"hindi": "निषिद्ध सौदा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "구원을 바랐지만, 그 대가는 너무나 잔인했던 거지.",
						"english": "They sought salvation, but the price was too cruel.",
						"japanese": "救済を求めたが、その代償はあまりにも残酷だった。",
						"chinese": "他们寻求救赎，但代价太过残酷。",
						"french": "Ils cherchaient le salut, mais le prix était trop cruel.",
						"spanish": "Buscaron la salvación, pero el precio fue demasiado cruel.",
						"vietnamese": "Họ tìm kiếm sự cứu rỗi, nhưng cái giá quá tàn nhẫn.",
						"thai": "พวกเขาแสวงหาความรอด แต่ราคานั้นโหดร้ายเกินไป",
						"hindi": "उन्होंने मोक्ष की तलाश की, लेकिन कीमत बहुत क्रूर थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 기운이 제단을 휘감았다. 결코 가볍지 않은 진실.",
						"english": "A cold aura enveloped the altar. A truth that was anything but light.",
						"japanese": "冷たい気が祭壇を包んだ。決して軽くない真実。",
						"chinese": "一股寒气笼罩了祭坛。一个绝不轻松的真相。",
						"french": "Une aura froide enveloppa l'autel. Une vérité loin d'être légère.",
						"spanish": "Un aura fría envolvió el altar. Una verdad que no era para nada ligera.",
						"vietnamese": "Một luồng khí lạnh bao trùm bàn thờ. Một sự thật không hề nhẹ nhàng.",
						"thai": "รัศมีเย็นยะเยือกโอบล้อมแท่นบูชา ความจริงที่ไม่เบาเลย",
						"hindi": "एक ठंडी आभा ने वेदी को घेर लिया। एक ऐसा सच जो बिल्कुल हल्का नहीं था।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단의 얼음이 탐험대를 집어삼켰다. 냉혹한 침묵이 흐른다.",
						"english": "The altar's ice swallowed the expedition. A chilling silence falls.",
						"japanese": "「祭壇の氷が探検隊を飲み込んだ。冷酷な沈黙が流れる。」",
						"chinese": "祭坛的冰吞噬了探险队。冷酷的寂静笼罩着一切。",
						"french": "La glace de l'autel a englouti l'expédition. Un silence glacial règne.",
						"spanish": "El hielo del altar engulló a la expedición. Un silencio gélido se cierne.",
						"vietnamese": "Băng của bàn thờ đã nuốt chửng đoàn thám hiểm. Một sự im lặng lạnh lẽo bao trùm.",
						"thai": "น้ำแข็งของแท่นบูชาได้กลืนกินคณะสำรวจ ความเงียบอันเยือกเย็นเข้าปกคลุม",
						"hindi": "वेदी की बर्फ ने अभियान दल को निगल लिया। एक सर्द खामोशी छा गई।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "감당할 수 없는 진실에… 굴복하라.",
						"english": "Surrender... to the unbearable truth.",
						"japanese": "「耐え難い真実に…屈服せよ。」",
						"chinese": "向无法承受的真相……屈服吧。",
						"french": "Succombez... à l'insupportable vérité.",
						"spanish": "Ríndete... a la verdad insoportable.",
						"vietnamese": "Hãy khuất phục... trước sự thật không thể chịu đựng nổi.",
						"thai": "จงยอมจำนน... ต่อความจริงที่ไม่อาจแบกรับได้",
						"hindi": "असहनीय सत्य के सामने... झुक जाओ।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "「…まだ終わっていない。」",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...มันยังไม่จบลง",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "어리석은… 너희가 알게 될 진실은… 더 큰 고통일 뿐.",
						"english": "Foolish... the truth you will learn... will only bring greater pain.",
						"japanese": "愚かな…お前たちが知る真実は…さらなる苦痛に過ぎない。",
						"chinese": "愚蠢……你们将得知的真相……只会带来更大的痛苦。",
						"french": "Stupides… la vérité que vous apprendrez… n'apportera qu'une plus grande douleur.",
						"spanish": "Necios... la verdad que aprenderéis... solo traerá un dolor mayor.",
						"vietnamese": "Ngu ngốc... sự thật mà các ngươi sẽ biết... chỉ là nỗi đau lớn hơn mà thôi.",
						"thai": "โง่เขลา... ความจริงที่พวกเจ้าจะได้รู้... จะนำมาซึ่งความเจ็บปวดที่ยิ่งใหญ่กว่าเท่านั้น",
						"hindi": "मूर्ख... जो सच तुम जानोगे... वह केवल और अधिक दर्द लाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그게 무슨 소리야?",
						"english": "What do you mean by that?",
						"japanese": "それはどういう意味だ？",
						"chinese": "那是什么意思？",
						"french": "Qu'est-ce que tu veux dire ?",
						"spanish": "¿Qué quieres decir con eso?",
						"vietnamese": "Ngươi nói vậy là sao?",
						"thai": "หมายความว่าอย่างไร?",
						"hindi": "तुम्हारा मतलब क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…결국, 모든 것이 얼어붙을 것이다.",
						"english": "...In the end, everything will freeze.",
						"japanese": "「…結局、全てが凍りつく。」",
						"chinese": "……最终，一切都将冻结。",
						"french": "...Au final, tout finira par geler.",
						"spanish": "...Al final, todo se congelará.",
						"vietnamese": "...Cuối cùng, mọi thứ sẽ đóng băng.",
						"thai": "...ในที่สุด ทุกสิ่งจะกลายเป็นน้ำแข็ง",
						"hindi": "...अंततः, सब कुछ जम जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제… 계약 문장의 모든 것이 읽혔어.",
						"english": "Now... every line of the pact has been read.",
						"japanese": "「これで…契約文の全てが読み上げられた。」",
						"chinese": "现在……契约的每一行都已读完。",
						"french": "Maintenant... chaque ligne du pacte a été lue.",
						"spanish": "Ahora... cada línea del pacto ha sido leída.",
						"vietnamese": "Bây giờ... mọi câu chữ trong khế ước đã được đọc.",
						"thai": "ตอนนี้... ข้อความในพันธสัญญาถูกอ่านครบแล้ว",
						"hindi": "अब... समझौते का हर शब्द पढ़ लिया गया है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔은… 어떻게 태어난 거지?",
						"english": "The Horned Chalice... how was it born?",
						"japanese": "「角杯は…どうやって生まれたんだ？」",
						"chinese": "角杯……是如何诞生的？",
						"french": "Le Calice Cornu... comment est-il né ?",
						"spanish": "El Cáliz Cornudo... ¿cómo nació?",
						"vietnamese": "Chiếc Cốc Sừng... nó được tạo ra như thế nào?",
						"thai": "ถ้วยเขา... กำเนิดมาได้อย่างไรกัน?",
						"hindi": "सींग वाला प्याला... इसका जन्म कैसे हुआ?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "얼음 속 제단이 마침내 진실을 드러냈다. 하지만 아직 밝혀지지 않은 것이 있었다.",
						"english": "The altar in the ice finally revealed the truth. But something remained untold.",
						"japanese": "「氷の中の祭壇がついに真実を明かした。しかし、まだ明かされていないことがあった。」",
						"chinese": "冰中的祭坛终于揭示了真相。但仍有未解之谜。",
						"french": "L'autel dans la glace a enfin révélé la vérité. Mais quelque chose restait inconnu.",
						"spanish": "El altar en el hielo finalmente reveló la verdad. Pero algo aún no había sido revelado.",
						"vietnamese": "Bàn thờ trong băng cuối cùng đã tiết lộ sự thật. Nhưng vẫn còn điều chưa được giải đáp.",
						"thai": "แท่นบูชาในน้ำแข็งได้เผยความจริงในที่สุด แต่ก็ยังมีบางอย่างที่ยังไม่ถูกเปิดเผย",
						"hindi": "बर्फ में छिपा वेदी ने अंततः सच उजागर किया। लेकिन कुछ अभी भी अनकहा था।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "제단의 심장부. 거대한 그림자가 이들을 가로막았다.",
						"english": "The heart of the altar. A massive shadow blocked their path.",
						"japanese": "祭壇の心臓部。巨大な影が彼らの行く手を阻んだ。",
						"chinese": "祭坛的核心。一道巨大的阴影挡住了他们的去路。",
						"french": "Le cœur de l'autel. Une ombre massive leur barra la route.",
						"spanish": "El corazón del altar. Una sombra masiva les bloqueó el camino.",
						"vietnamese": "Trung tâm của bàn thờ. Một cái bóng khổng lồ đã chặn đường họ.",
						"thai": "ใจกลางแท่นบูชา. เงาขนาดใหญ่ขวางทางพวกเขา",
						"hindi": "वेदी का हृदय। एक विशाल छाया ने उनका रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 여기까지… 잊힌 계약을 들추려는 자들인가.",
						"english": "Dare you come this far... to uncover a forgotten pact?",
						"japanese": "よくもここまで…忘れられた契約を暴こうとする者たちか。",
						"chinese": "竟敢来到这里……是想揭露被遗忘的契约吗？",
						"french": "Osez-vous venir jusqu'ici… pour révéler un pacte oublié ?",
						"spanish": "¿Osáis llegar tan lejos... para desenterrar un pacto olvidado?",
						"vietnamese": "Dám đến tận đây... để khám phá một giao ước bị lãng quên?",
						"thai": "กล้าดียังไงถึงมาถึงที่นี่... เพื่อเปิดเผยพันธสัญญาที่ถูกลืม?",
						"hindi": "इतनी दूर आने की हिम्मत कैसे हुई... एक भूले हुए समझौते को उजागर करने के लिए?"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네가 이 모든 것을 지키고 있었나?",
						"english": "Were you guarding all of this?",
						"japanese": "お前がこの全てを守っていたのか？",
						"chinese": "你一直在守护这一切吗？",
						"french": "C'est toi qui gardais tout cela ?",
						"spanish": "¿Tú estabas protegiendo todo esto?",
						"vietnamese": "Ngươi đã bảo vệ tất cả những thứ này ư?",
						"thai": "เจ้าปกป้องสิ่งเหล่านี้ทั้งหมดหรือ?",
						"hindi": "क्या तुम यह सब守 रहे थे?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "진실은… 너희가 감당할 수 없을 것이다.",
						"english": "The truth... you cannot bear it.",
						"japanese": "真実は…お前たちには耐えられないだろう。",
						"chinese": "真相……你们无法承受。",
						"french": "La vérité… vous ne pourrez pas la supporter.",
						"spanish": "La verdad... no podréis soportarla.",
						"vietnamese": "Sự thật... các ngươi không thể chịu đựng được.",
						"thai": "ความจริง... พวกเจ้าทนรับมันไม่ได้หรอก",
						"hindi": "सच... तुम उसे बर्दाश्त नहीं कर पाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "상관없어. 우리는 답을 찾아야만 해.",
						"english": "It doesn't matter. We must find the answer.",
						"japanese": "構わない。私たちは答えを見つけなければならない。",
						"chinese": "无所谓。我们必须找到答案。",
						"french": "Peu importe. Nous devons trouver la réponse.",
						"spanish": "No importa. Debemos encontrar la respuesta.",
						"vietnamese": "Không sao. Chúng ta phải tìm ra câu trả lời.",
						"thai": "ไม่เป็นไร. เราต้องหาคำตอบให้ได้",
						"hindi": "कोई फर्क नहीं पड़ता। हमें जवाब खोजना होगा।"
					},
					"emotion": "angry"
				}
			]
		}
	]
} as const;
