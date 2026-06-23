export const scenario_hell_vesper_11_03 = {
	"scenario_id": "hell_vesper_11_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"drox": {
			"id": "mon_2fc30621-a15f-4371-9e37-295cdcb5675d",
			"name": {
				"korean": "드록스",
				"english": "Drox",
				"japanese": "ドロックス",
				"chinese": "德罗克斯",
				"french": "Drox",
				"spanish": "Drox",
				"vietnamese": "Đrốc",
				"thai": "ดรอกซ์",
				"hindi": "ड्रॉक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/509c0376-2230-4669-d022-7e5336293200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/916b4cfa-f792-4f4a-5346-681095481e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"지옥의 심연. 뒤틀린 진실이 메아리치는 곳.",
			"베스퍼의 옛 거처는 모든 것을 잃은 자의 절규였다.",
			"찢겨진 기록, 불완전한 소문.",
			"과연 우리가 찾는 것은 진실일까, 아니면 또 다른 함정일까."
		],
		"english": [
			"The abyss of hell. Where twisted truths echo.",
			"Vesper's old abode was the cry of one who lost everything.",
			"Torn records, incomplete rumors.",
			"Is what we seek truth, or just another trap?"
		],
		"japanese": [
			"地獄の深淵。歪んだ真実がこだまする場所。",
			"ベスパーの旧居は、すべてを失った者の叫びだった。",
			"破れた記録、不完全な噂。",
			"果たして我々が探しているのは真実か、それともまた別の罠なのか。"
		],
		"chinese": [
			"地狱深渊。扭曲的真相在此回响。",
			"维斯珀的旧居是失去一切之人的绝望呐喊。",
			"破碎的记录，不完整的传闻。",
			"我们所寻究竟是真相，还是另一个陷阱？"
		],
		"french": [
			"Les abysses de l'enfer. Là où des vérités tordues résonnent.",
			"L'ancienne demeure de Vesper était le cri de celui qui a tout perdu.",
			"Des registres déchirés, des rumeurs incomplètes.",
			"Ce que nous cherchons est-il la vérité, ou un autre piège ?"
		],
		"spanish": [
			"El abismo del infierno. Donde verdades retorcidas resuenan.",
			"La antigua morada de Vesper era el grito de quien lo perdió todo.",
			"Registros rotos, rumores incompletos.",
			"¿Lo que buscamos es la verdad, o solo otra trampa?"
		],
		"vietnamese": [
			"Vực sâu địa ngục. Nơi những sự thật méo mó vang vọng.",
			"Nơi ở cũ của Vesper là tiếng kêu gào của kẻ mất tất cả.",
			"Hồ sơ bị xé nát, tin đồn không đầy đủ.",
			"Liệu điều chúng ta tìm kiếm là sự thật, hay chỉ là một cái bẫy khác?"
		],
		"thai": [
			"ขุมนรก. ที่ซึ่งความจริงที่บิดเบี้ยวสะท้อนก้อง",
			"ที่พำนักเก่าของเวสเปอร์คือเสียงกรีดร้องของผู้ที่สูญเสียทุกสิ่ง",
			"บันทึกที่ฉีกขาด, ข่าวลือที่ไม่สมบูรณ์",
			"สิ่งที่เราตามหาคือความจริง หรือเป็นเพียงกับดักอีกอัน"
		],
		"hindi": [
			"नर्क का पाताल। जहाँ विकृत सत्य गूँजते हैं।",
			"वेस्पर का पुराना ठिकाना सब कुछ खोने वाले की चीख था।",
			"फटे हुए रिकॉर्ड, अधूरी अफवाहें।",
			"क्या जो हम खोज रहे हैं वो सच है, या कोई और जाल?"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오래된 폐허. 절망의 냄새가 진동했다.",
						"english": "Ancient ruins. The scent of despair permeated the air.",
						"japanese": "古い廃墟。絶望の匂いが充満していた。",
						"chinese": "古老的废墟。绝望的气息弥漫。",
						"french": "Anciennes ruines. L'odeur du désespoir imprégnait l'air.",
						"spanish": "Ruinas antiguas. El olor a desesperación impregnaba el aire.",
						"vietnamese": "Tàn tích cổ xưa. Mùi tuyệt vọng lan tỏa khắp nơi.",
						"thai": "ซากปรักหักพังเก่าแก่. กลิ่นอายแห่งความสิ้นหวังคละคลุ้ง",
						"hindi": "प्राचीन खंडहर। निराशा की गंध हवा में व्याप्त थी।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "drox",
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이곳이… 베스퍼의 옛 거처?",
						"english": "This is... Vesper's old abode?",
						"japanese": "ここが…ベスパーの旧居？",
						"chinese": "这里是……维斯珀的旧居？",
						"french": "C'est... l'ancienne demeure de Vesper ?",
						"spanish": "¿Este es... el antiguo hogar de Vesper?",
						"vietnamese": "Đây là… nơi ở cũ của Vesper?",
						"thai": "ที่นี่คือ... ที่พำนักเก่าของเวสเปอร์เหรอ?",
						"hindi": "यह है... वेस्पर का पुराना ठिकाना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그래. 지금은 폐허만 남았을 뿐이지만.",
						"english": "Yes. Though only ruins remain now.",
						"japanese": "ええ。今は廃墟が残っているだけですが。",
						"chinese": "是的。虽然现在只剩下废墟。",
						"french": "Oui. Bien qu'il ne reste plus que des ruines.",
						"spanish": "Sí. Aunque ahora solo quedan ruinas.",
						"vietnamese": "Phải. Dù bây giờ chỉ còn lại tàn tích.",
						"thai": "ใช่. แม้ตอนนี้จะเหลือเพียงซากปรักหักพัง",
						"hindi": "हाँ। हालांकि अब केवल खंडहर ही बचे हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "drox"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그의 과거 흔적을 찾을 수 있을 거야.",
						"english": "We should be able to find traces of his past.",
						"japanese": "彼の過去の痕跡を見つけられるはずだ。",
						"chinese": "我们应该能找到他过去的痕迹。",
						"french": "Nous devrions pouvoir trouver des traces de son passé.",
						"spanish": "Deberíamos poder encontrar rastros de su pasado.",
						"vietnamese": "Chúng ta sẽ có thể tìm thấy dấu vết quá khứ của anh ta.",
						"thai": "เราน่าจะหาเบาะแสในอดีตของเขาเจอ",
						"hindi": "हम उसके अतीत के निशान ढूंढ पाएंगे।"
					},
					"speaker": "drox"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "drox",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "벽화 곳곳에 희미한 글자들이 보여.",
						"english": "Faint letters are visible in various places on the murals.",
						"japanese": "壁画のあちこちに、かすかな文字が見える。",
						"chinese": "壁画各处可见模糊的文字。",
						"french": "Des lettres pâles sont visibles par endroits sur les peintures murales.",
						"spanish": "Se ven letras tenues en varios lugares de los murales.",
						"vietnamese": "Những chữ cái mờ nhạt xuất hiện khắp nơi trên các bức bích họa.",
						"thai": "มีตัวอักษรจาง ๆ ปรากฏอยู่ตามภาพวาดฝาผนัง",
						"hindi": "भित्तिचित्रों पर जगह-जगह धुंधले अक्षर दिखाई दे रहे हैं।"
					}
				},
				{
					"content": {
						"korean": "여기에 베스퍼가 '신비의 서고'를 흡수하려 한 흔적이 있어.",
						"english": "There are traces here of Vesper attempting to absorb the 'Mystic Archives'.",
						"japanese": "ここには、ベスパーが「神秘の書庫」を吸収しようとした痕跡がある。",
						"chinese": "这里有维斯珀试图吸收“神秘书库”的痕迹。",
						"french": "Il y a ici des traces de la tentative de Vesper d'absorber les « Archives Mystiques ».",
						"spanish": "Aquí hay rastros de que Vesper intentó absorber los 'Archivos Místicos'.",
						"vietnamese": "Ở đây có dấu vết Vesper từng cố gắng hấp thụ 'Thư viện Huyền bí'.",
						"thai": "มีร่องรอยว่าเวสเปอร์พยายามดูดซับ 'หอจดหมายเหตุลึกลับ' อยู่ที่นี่",
						"hindi": "यहाँ वेस्पर द्वारा 'रहस्यमय अभिलेखागार' को आत्मसात करने के प्रयास के निशान हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "drox"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "흡수… 실패했다는 거지?",
						"english": "Absorption... failed, you mean?",
						"japanese": "吸収…失敗したってこと？",
						"chinese": "吸收……失败了是吗？",
						"french": "Absorption... échouée, c'est ça ?",
						"spanish": "¿Absorción... fallida, dices?",
						"vietnamese": "Hấp thụ... thất bại rồi sao?",
						"thai": "การดูดซับ... ล้มเหลวเหรอ?",
						"hindi": "अवशोषण... विफल रहा, क्या यही मतलब है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "불완전한 시도였지. 결국 그를 집어삼키는 듯 했어.",
						"english": "An incomplete attempt. It seemed to consume him in the end.",
						"japanese": "不完全な試みだった。結局、彼を飲み込むようだった。",
						"chinese": "那是一次不完整的尝试。最终似乎吞噬了他。",
						"french": "Une tentative incomplète. Cela semblait le dévorer à la fin.",
						"spanish": "Fue un intento incompleto. Al final, parecía que lo consumió.",
						"vietnamese": "Một nỗ lực không hoàn hảo. Cuối cùng, nó dường như nuốt chửng anh ta.",
						"thai": "เป็นความพยายามที่ไม่สมบูรณ์ ท้ายที่สุดมันก็ดูเหมือนจะกลืนกินเขา",
						"hindi": "एक अधूरा प्रयास था। अंततः, ऐसा लगा जैसे उसने उसे निगल लिया।"
					},
					"emotion": "sad",
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
						4,
						3
					],
					"speaker": "drox",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 기록은 왜 중간에 찢겨있지?",
						"english": "Why is this record torn in the middle?",
						"japanese": "この記録、なぜ途中で破れているんだ？",
						"chinese": "这份记录为什么中途被撕毁了？",
						"french": "Pourquoi ce document est-il déchiré au milieu ?",
						"spanish": "¿Por qué está este registro roto por la mitad?",
						"vietnamese": "Sao ghi chép này lại bị xé giữa chừng?",
						"thai": "ทำไมบันทึกนี้ถึงขาดกลางทาง?",
						"hindi": "यह रिकॉर्ड बीच में क्यों फटा हुआ है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "서고의 파편이 너무 강력했거나… 혹은.",
						"english": "The Archive's fragment was too powerful... or perhaps.",
						"japanese": "書庫の破片が強力すぎたか…あるいは。",
						"chinese": "档案碎片的威力太强大了……或者说。",
						"french": "Le fragment de l'Archive était trop puissant... ou alors.",
						"spanish": "El fragmento del Archivo era demasiado poderoso... o quizás.",
						"vietnamese": "Mảnh vỡ của Kho lưu trữ quá mạnh... hoặc là.",
						"thai": "ชิ้นส่วนของหอจดหมายเหตุทรงพลังเกินไป... หรือว่า",
						"hindi": "पुरालेख का अंश बहुत शक्तिशाली था... या शायद।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "베스퍼가 지옥에 버려진 뒤 심한 상실감에 시달렸다는 소문이 있어.",
						"english": "Rumor has it Vesper suffered severe loss after being abandoned in hell.",
						"japanese": "ベスパーは地獄に捨てられた後、ひどい喪失感に苦しんだという噂がある。",
						"chinese": "有传言说，维斯珀被遗弃在地狱后，遭受了严重的失落感。",
						"french": "On raconte que Vesper a souffert d'une grande perte après avoir été abandonnée en enfer.",
						"spanish": "Se rumorea que Vesper sufrió una profunda pérdida tras ser abandonada en el infierno.",
						"vietnamese": "Có tin đồn Vesper đã chịu đựng sự mất mát khủng khiếp sau khi bị bỏ rơi ở địa ngục.",
						"thai": "มีข่าวลือว่าเวสเปอร์ทุกข์ทรมานจากความสูญเสียอย่างรุนแรงหลังจากถูกทิ้งไว้ในนรก",
						"hindi": "अफवाह है कि नरक में छोड़े जाने के बाद वेस्पर को गहरी हानि हुई।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "상실감… 그래서 이 힘에 집착했던 건가?",
						"english": "Loss... Is that why she obsessed over this power?",
						"japanese": "喪失感…だからこの力に執着したのか？",
						"chinese": "失落感……所以才如此执着于这份力量吗？",
						"french": "Perte... C'est pourquoi elle s'est obsédée par ce pouvoir ?",
						"spanish": "¿Pérdida... Por eso se obsesionó con este poder?",
						"vietnamese": "Mất mát... Vì thế cô ấy mới ám ảnh sức mạnh này sao?",
						"thai": "ความสูญเสีย... นั่นคือเหตุผลที่เธอยึดติดกับพลังนี้เหรอ?",
						"hindi": "हानि... क्या इसीलिए वह इस शक्ति के प्रति जुनूनी थी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것을 잃었을 때, 사람은 가장 위험해지지.",
						"english": "When one loses everything, they become the most dangerous.",
						"japanese": "全てを失った時、人は最も危険になる。",
						"chinese": "当一个人失去所有时，他会变得最危险。",
						"french": "Quand on perd tout, on devient le plus dangereux.",
						"spanish": "Cuando uno lo pierde todo, se vuelve el más peligroso.",
						"vietnamese": "Khi mất tất cả, con người trở nên nguy hiểm nhất.",
						"thai": "เมื่อคนเราสูญเสียทุกอย่าง พวกเขาก็จะกลายเป็นอันตรายที่สุด",
						"hindi": "जब कोई सब कुछ खो देता है, तो वह सबसे खतरनाक हो जाता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "drox"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "drox",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "베스퍼는 진정으로 '서고'를 복구하려는 걸까?",
						"english": "Does Vesper truly intend to restore the 'Archive'?",
						"japanese": "ベスパーは本当に『書庫』を復旧させようとしているのか？",
						"chinese": "维斯珀真的想修复‘档案馆’吗？",
						"french": "Vesper a-t-elle vraiment l'intention de restaurer l'« Archive » ?",
						"spanish": "¿Vesper realmente intenta restaurar el 'Archivo'?",
						"vietnamese": "Vesper có thực sự muốn khôi phục 'Kho lưu trữ' không?",
						"thai": "เวสเปอร์ตั้งใจที่จะกู้คืน 'หอจดหมายเหตุ' จริงๆ หรือ?",
						"hindi": "क्या वेस्पर सचमुच 'पुरालेख' को बहाल करना चाहता है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "drox",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "지옥의 브로커들은 늘 모호한 동기를 감추지.",
						"english": "Hell's brokers always hide ambiguous motives.",
						"japanese": "地獄のブローカーたちは常に曖昧な動機を隠している。",
						"chinese": "地狱的掮客们总是隐藏着模糊的动机。",
						"french": "Les courtiers de l'Enfer cachent toujours des motifs ambigus.",
						"spanish": "Los corredores del infierno siempre ocultan motivos ambiguos.",
						"vietnamese": "Những kẻ môi giới ở địa ngục luôn che giấu động cơ mờ ám.",
						"thai": "นายหน้าของนรกมักจะซ่อนแรงจูงใจที่คลุมเครือเสมอ",
						"hindi": "नरक के दलाल हमेशा अस्पष्ट इरादे छिपाते हैं।"
					}
				},
				{
					"speaker": "drox",
					"content": {
						"korean": "폐허의 심층부. 거대한 기운이 느껴진다.",
						"english": "The depths of the ruins. A colossal energy is felt.",
						"japanese": "廃墟の深部。巨大な気配が感じられる。",
						"chinese": "废墟的深处。感受到一股巨大的气息。",
						"french": "Les profondeurs des ruines. Une énergie colossale est ressentie.",
						"spanish": "Las profundidades de las ruinas. Se siente una energía colosal.",
						"vietnamese": "Sâu thẳm trong đống đổ nát. Cảm thấy một luồng năng lượng khổng lồ.",
						"thai": "ส่วนลึกของซากปรักหักพัง สัมผัสได้ถึงพลังงานมหาศาล",
						"hindi": "खंडहरों की गहराई। एक विशाल ऊर्जा महसूस होती है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…조심해. 뭔가 오고 있어!",
						"english": "...Be careful. Something's coming!",
						"japanese": "「…気をつけろ。何かが来る！」",
						"chinese": "“……小心。有东西来了！”",
						"french": "...Attention. Quelque chose approche !",
						"spanish": "...Cuidado. ¡Algo se acerca!",
						"vietnamese": "...Cẩn thận. Có gì đó đang đến!",
						"thai": "...ระวัง. มีบางอย่างกำลังมา!",
						"hindi": "...सावधान रहो। कुछ आ रहा है!"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재가 그림자처럼 나타났다.",
						"english": "An unknown entity appeared like a shadow.",
						"japanese": "「正体不明の存在が影のように現れた。」",
						"chinese": "“一个不明实体如影般出现。”",
						"french": "Une entité inconnue apparut comme une ombre.",
						"spanish": "Una entidad desconocida apareció como una sombra.",
						"vietnamese": "Một thực thể không rõ danh tính xuất hiện như một cái bóng.",
						"thai": "สิ่งมีชีวิตนิรนามปรากฏขึ้นราวกับเงา.",
						"hindi": "एक अज्ञात सत्ता परछाई की तरह प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "여기까지 온 이유가 고작 그런 하찮은 진실 때문인가?",
						"english": "Is the reason you've come this far merely for such a trivial truth?",
						"japanese": "「ここまで来た理由が、そんな取るに足らない真実のためとでも言うのか？」",
						"chinese": "“你们走到这里，难道只是为了那点微不足道的真相吗？”",
						"french": "La raison pour laquelle vous êtes venus si loin n'est-elle que pour une vérité si triviale ?",
						"spanish": "¿La razón por la que habéis llegado tan lejos es solo por una verdad tan trivial?",
						"vietnamese": "Lý do các ngươi đến được đây chỉ vì một sự thật tầm thường như vậy sao?",
						"thai": "เหตุผลที่เจ้ามาถึงที่นี่เพียงเพื่อความจริงเล็กน้อยเช่นนั้นหรือ?",
						"hindi": "क्या तुम इतनी दूर सिर्फ़ इतनी तुच्छ सच्चाई के लिए आए हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실을 가로막지 마라!",
						"english": "Do not obstruct the truth!",
						"japanese": "「真実を阻むな！」",
						"chinese": "“不要阻碍真相！”",
						"french": "N'obstruez pas la vérité !",
						"spanish": "¡No obstruyas la verdad!",
						"vietnamese": "Đừng cản trở sự thật!",
						"thai": "อย่าขัดขวางความจริง!",
						"hindi": "सच्चाई को मत रोको!"
					}
				},
				{
					"content": {
						"korean": "진실은 파편일 뿐. 너희는 그저 어둠 속을 헤맬 뿐이다.",
						"english": "Truth is but a fragment. You merely wander in darkness.",
						"japanese": "「真実はただの破片。お前たちはただ闇の中を彷徨うだけだ。」",
						"chinese": "“真相不过是碎片。你们只会漫无目的地在黑暗中徘徊。”",
						"french": "La vérité n'est qu'un fragment. Vous ne faites que errer dans les ténèbres.",
						"spanish": "La verdad es solo un fragmento. Solo vagáis en la oscuridad.",
						"vietnamese": "Sự thật chỉ là một mảnh vỡ. Các ngươi chỉ đơn thuần lang thang trong bóng tối.",
						"thai": "ความจริงเป็นเพียงเศษเสี้ยว. พวกเจ้าแค่หลงทางอยู่ในความมืดมิดเท่านั้น.",
						"hindi": "सच्चाई सिर्फ़ एक टुकड़ा है। तुम बस अंधेरे में भटक रहे हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 진실은 너희가 감당할 수 없다.",
						"english": "Fools. You cannot handle the truth.",
						"japanese": "「愚か者ども。お前たちに真実は扱えぬ。」",
						"chinese": "“愚蠢的家伙。你们无法承受真相。”",
						"french": "Imbéciles. Vous ne pouvez supporter la vérité.",
						"spanish": "Necios. No podéis con la verdad.",
						"vietnamese": "Lũ ngốc. Các ngươi không thể đối mặt với sự thật.",
						"thai": "คนโง่. พวกเจ้าไม่อาจรับมือกับความจริงได้.",
						"hindi": "मूर्खों। तुम सच्चाई को संभाल नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "젠장… 물러설 수 없어. 다시 도전한다!",
						"english": "Damn it... I can't back down. I'll challenge again!",
						"japanese": "「くそっ…退けない。再び挑む！」",
						"chinese": "“该死……不能退缩。再次挑战！”",
						"french": "Maudit... Je ne peux pas reculer. Je défie encore !",
						"spanish": "Maldita sea... No puedo retroceder. ¡Lo intentaré de nuevo!",
						"vietnamese": "Chết tiệt... Tôi không thể lùi bước. Tôi sẽ thử thách lại!",
						"thai": "บ้าเอ๊ย... ถอยไม่ได้. จะลองใหม่อีกครั้ง!",
						"hindi": "धिक्कार है... मैं पीछे नहीं हट सकता। मैं फिर से चुनौती दूंगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…콜록. 결국… 진실은… 그저… 환상일 뿐….",
						"english": "...Cough. In the end... truth is... merely... an illusion...",
						"japanese": "「…ゴホッ。結局…真実は…ただ…幻想に過ぎぬ…。」",
						"chinese": "“……咳。最终……真相……不过……只是……幻象而已……”",
						"french": "...Tousse. Au final... la vérité n'est... qu'une... illusion...",
						"spanish": "...Tos. Al final... la verdad es... solo... una ilusión...",
						"vietnamese": "...Ho. Rốt cuộc... sự thật... chỉ là... một ảo ảnh...",
						"thai": "...แค่ก. ในที่สุด... ความจริงก็... เป็นเพียง... ภาพลวงตา...",
						"hindi": "...खांसी। अंत में... सच्चाई... सिर्फ़... एक भ्रम है..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이것으로 끝이 아니야. 베스퍼가 숨긴 진짜 의도를 알아내야 해.",
						"english": "This isn't over. We need to uncover Vesper's true intentions.",
						"japanese": "「これで終わりではない。ヴェスパーが隠した本当の意図を突き止めねば。」",
						"chinese": "“这还没完。我们必须查明维斯珀隐藏的真实意图。”",
						"french": "Ce n'est pas fini. Nous devons découvrir les véritables intentions de Vesper.",
						"spanish": "Esto no ha terminado. Debemos descubrir las verdaderas intenciones de Vesper.",
						"vietnamese": "Đây chưa phải là kết thúc. Chúng ta cần khám phá ý đồ thực sự mà Vesper đã che giấu.",
						"thai": "นี่ไม่ใช่จุดสิ้นสุด. เราต้องเปิดเผยเจตนาที่แท้จริงที่เวสเปอร์ซ่อนไว้.",
						"hindi": "यह खत्म नहीं हुआ है। हमें वेस्पर के असली इरादों का पता लगाना होगा।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "정체 모를 보스는 쓰러졌다. 그러나 베스퍼의 그림자는 여전히 지옥을 맴돌았다. 조각난 진실의 여정은 계속된다.",
						"english": "The unknown boss fell. Yet, Vesper's shadow still lingered in hell. The journey for fragmented truth continues.",
						"japanese": "「正体不明のボスは倒れた。しかし、ヴェスパーの影は依然として地獄をさまよっていた。断片的な真実を巡る旅は続く。」",
						"chinese": "“不明身份的头目倒下了。然而，维斯珀的阴影依然在地狱中徘徊。破碎真相的旅程仍在继续。”",
						"french": "Le boss inconnu est tombé. Pourtant, l'ombre de Vesper planait toujours en enfer. Le voyage vers la vérité fragmentée continue.",
						"spanish": "El jefe desconocido cayó. Sin embargo, la sombra de Vesper todavía rondaba el infierno. El viaje hacia la verdad fragmentada continúa.",
						"vietnamese": "Con trùm vô danh đã gục ngã. Tuy nhiên, bóng dáng của Vesper vẫn lảng vảng trong địa ngục. Cuộc hành trình tìm kiếm sự thật vụn vỡ vẫn tiếp diễn.",
						"thai": "บอสลึกลับล้มลง. ทว่า, เงาของเวสเปอร์ยังคงวนเวียนอยู่ในนรก. การเดินทางเพื่อความจริงที่แตกสลายยังคงดำเนินต่อไป.",
						"hindi": "अज्ञात बॉस गिर गया। फिर भी, वेस्पर की परछाई अभी भी नर्क में मंडरा रही थी। खंडित सत्य की यात्रा जारी है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
