export const scenario_snowy_anya_13_03 = {
	"scenario_id": "snowy_anya_13_03",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "고대 유적의 깊은 곳. 얼어붙은 시간만이 흐르는 듯했다.",
						"english": "Deep within the ancient ruins. Only frozen time seemed to flow.",
						"japanese": "古代遺跡の奥深く。凍てついた時間だけが流れているようだった。",
						"chinese": "古老遗迹深处。仿佛只有凝固的时间在流淌。",
						"french": "Au plus profond des ruines antiques. Seul le temps figé semblait s'écouler.",
						"spanish": "En lo más profundo de las ruinas antiguas. Solo el tiempo congelado parecía fluir.",
						"vietnamese": "Sâu trong di tích cổ. Dường như chỉ có thời gian đóng băng đang trôi.",
						"thai": "ลึกเข้าไปในซากปรักหักพังโบราณ ราวกับว่ามีเพียงกาลเวลาที่หยุดนิ่งไหลผ่าน",
						"hindi": "प्राचीन खंडहरों की गहराई में। मानो केवल जमा हुआ समय बह रहा हो।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여긴… 뭘까?",
						"english": "What… is this place?",
						"japanese": "ここ…は何だろう？",
						"chinese": "这里…是什么？",
						"french": "Cet endroit… qu'est-ce que c'est ?",
						"spanish": "¿Qué… es este lugar?",
						"vietnamese": "Đây… là đâu?",
						"thai": "ที่นี่…คืออะไร?",
						"hindi": "यह… क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기저기 흩어진 조각들. 고대 문헌 같군.",
						"english": "Scattered fragments everywhere. Looks like ancient texts.",
						"japanese": "あちこちに散らばった破片。古代の文献のようだ。",
						"chinese": "碎片散落各处。像是古老文献。",
						"french": "Fragments éparpillés partout. On dirait des textes anciens.",
						"spanish": "Fragmentos esparcidos por todas partes. Parece que son textos antiguos.",
						"vietnamese": "Những mảnh vụn nằm rải rác khắp nơi. Trông như văn bản cổ.",
						"thai": "เศษชิ้นส่วนกระจัดกระจายเต็มไปหมด ดูเหมือนเอกสารโบราณ",
						"hindi": "जगह-जगह बिखरे टुकड़े। प्राचीन ग्रंथों जैसे लगते हैं।"
					}
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "읽어낼 수만 있다면… 분명 뭔가 알게 될 거야.",
						"english": "If only I could read them… I'd surely learn something.",
						"japanese": "もし読み解くことができれば…きっと何かわかるはずだ。",
						"chinese": "如果能解读出来…我一定会知道些什么。",
						"french": "Si seulement je pouvais les lire… je découvrirais sûrement quelque chose.",
						"spanish": "Si tan solo pudiera leerlos… seguramente descubriría algo.",
						"vietnamese": "Nếu đọc được chúng… chắc chắn mình sẽ biết được điều gì đó.",
						"thai": "ถ้าอ่านออกได้…จะต้องรู้บางอย่างแน่ๆ",
						"hindi": "अगर मैं उन्हें पढ़ पाता… तो ज़रूर कुछ पता चलता।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "bran",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 파편 좀 봐. '추위'에 대한 기록이야.",
						"english": "Look at this fragment. It's a record about 'cold'.",
						"japanese": "この破片を見て。'寒さ'についての記録だ。",
						"chinese": "看这碎片。是关于‘寒冷’的记录。",
						"french": "Regarde ce fragment. C'est un registre sur le 'froid'.",
						"spanish": "Mira este fragmento. Es un registro sobre el 'frío'.",
						"vietnamese": "Nhìn mảnh vỡ này đi. Đây là ghi chép về 'cái lạnh'.",
						"thai": "ดูชิ้นส่วนนี้สิ เป็นบันทึกเกี่ยวกับ 'ความหนาวเย็น'",
						"hindi": "इस टुकड़े को देखो। यह 'ठंड' के बारे में एक रिकॉर्ड है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "추위…?",
						"english": "Cold…?",
						"japanese": "寒さ…？",
						"chinese": "寒冷…？",
						"french": "Froid…?",
						"spanish": "¿Frío…?",
						"vietnamese": "Cái lạnh…?",
						"thai": "ความหนาวเย็น…?",
						"hindi": "ठंड…?"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "그리고… '기다림'. 길고 긴 기다림에 대한 슬픈 이야기.",
						"english": "And... 'Waiting.' A sad tale of a long, long wait.",
						"japanese": "そして…「待機」。長く、長く待つことに関する悲しい物語。",
						"chinese": "还有……“等待”。一个关于漫长等待的悲伤故事。",
						"french": "Et... 'L'attente.' Une triste histoire d'une très longue attente.",
						"spanish": "Y... 'La espera.' Una triste historia de una espera muy larga.",
						"vietnamese": "Và... 'Chờ đợi.' Một câu chuyện buồn về sự chờ đợi dài đằng đẵng.",
						"thai": "และ... 'การรอคอย' เรื่องราวอันแสนเศร้าของการรอคอยอันยาวนาน",
						"hindi": "और... 'इंतज़ार'। एक लंबे, लंबे इंतज़ार की दुखद कहानी।"
					}
				},
				{
					"content": {
						"korean": "안야랑 관련 있을까?",
						"english": "Could it be related to Anya?",
						"japanese": "アーニャと関係があるのだろうか？",
						"chinese": "这和安雅有关吗？",
						"french": "Cela pourrait-il être lié à Anya ?",
						"spanish": "¿Podría estar relacionado con Anya?",
						"vietnamese": "Có liên quan đến Anya không?",
						"thai": "เกี่ยวกับอันย่าหรือเปล่า?",
						"hindi": "क्या इसका संबंध आन्या से हो सकता है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "점점 더 확신하게 돼. 그녀는… 무언가를 기다리고 있어.",
						"english": "I'm growing more certain. She's... waiting for something.",
						"japanese": "ますます確信してきた。彼女は…何かを待っているんだ。",
						"chinese": "我越来越确信了。她……在等待着什么。",
						"french": "J'en suis de plus en plus certain. Elle... attend quelque chose.",
						"spanish": "Cada vez estoy más seguro. Ella... está esperando algo.",
						"vietnamese": "Tôi ngày càng chắc chắn hơn. Cô ấy... đang chờ đợi điều gì đó.",
						"thai": "ฉันยิ่งมั่นใจมากขึ้น เธอ...กำลังรออะไรบางอย่างอยู่",
						"hindi": "मुझे और यकीन होता जा रहा है। वह... कुछ इंतज़ार कर रही है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이건… 안야를 말하는 거야.",
						"english": "This... refers to Anya.",
						"japanese": "これは…アーニャのことだ。",
						"chinese": "这……说的是安雅。",
						"french": "Ceci... fait référence à Anya.",
						"spanish": "Esto... se refiere a Anya.",
						"vietnamese": "Đây... là nói về Anya.",
						"thai": "นี่...หมายถึงอันย่า",
						"hindi": "यह... आन्या की बात है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "브란, 무슨 소리야?",
						"english": "Bran, what are you talking about?",
						"japanese": "ブラン、どういうことだ？",
						"chinese": "布兰，你在说什么？",
						"french": "Bran, de quoi parles-tu ?",
						"spanish": "Bran, ¿de qué estás hablando?",
						"vietnamese": "Bran, cậu đang nói gì vậy?",
						"thai": "แบรน เธอพูดถึงอะไรน่ะ?",
						"hindi": "ब्रान, तुम क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "'추위 속에서 잃어버린 아이를 기다리는…' 그런 문구야.",
						"english": "It's a phrase like... 'Waiting for a lost child in the cold.'",
						"japanese": "「寒さの中で失われた子供を待つ…」そんなフレーズだ。",
						"chinese": "是那种……“在寒冷中等待失踪的孩子”的句子。",
						"french": "C'est une phrase comme... 'Attendre un enfant perdu dans le froid.'",
						"spanish": "Es una frase como... 'Esperando a un niño perdido en el frío'.",
						"vietnamese": "Đó là một câu nói như... 'Đợi một đứa trẻ thất lạc trong giá lạnh.'",
						"thai": "เป็นวลีที่ว่า... 'รอคอยเด็กที่หลงหายไปในความหนาวเย็น'",
						"hindi": "यह एक वाक्यांश है जैसे... 'ठंड में खोए हुए बच्चे का इंतज़ार करना।'"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "안야는… 길을 잃은 게 아니라, 잃어버린 것을 기다리고 있었던 거야.",
						"english": "Anya wasn't... lost. She was waiting for something lost.",
						"japanese": "アーニャは…迷子になったのではなく、失われたものを待っていたんだ。",
						"chinese": "安雅不是……迷路了，她是在等待着失去的东西。",
						"french": "Anya n'était pas... perdue. Elle attendait quelque chose de perdu.",
						"spanish": "Anya no estaba... perdida. Estaba esperando algo perdido.",
						"vietnamese": "Anya không... bị lạc. Cô ấy đang chờ đợi một thứ gì đó đã mất.",
						"thai": "อันย่า...ไม่ได้หลงทาง แต่เธอกำลังรอคอยสิ่งที่หายไปต่างหาก",
						"hindi": "आन्या... खोई नहीं थी, वह किसी खोई हुई चीज़ का इंतज़ार कर रही थी।"
					},
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼 우리가… 집에 데려다줄 수 있을까?",
						"english": "Then can we... take her home?",
						"japanese": "じゃあ私たちが…彼女を家に連れて帰れるのかな？",
						"chinese": "那我们能……带她回家吗？",
						"french": "Alors, pouvons-nous... la ramener chez elle ?",
						"spanish": "¿Entonces podemos... llevarla a casa?",
						"vietnamese": "Vậy chúng ta... có thể đưa cô ấy về nhà không?",
						"thai": "ถ้าอย่างนั้นเรา...จะพาเธอกลับบ้านได้ไหม?",
						"hindi": "तो क्या हम... उसे घर ले जा सकते हैं?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "bran"
				},
				{
					"speaker": "bran",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리가 너무 깊이 온 것 같아.",
						"english": "I think we've come too deep.",
						"japanese": "深入りしすぎたようだ。",
						"chinese": "我们好像来得太深了。",
						"french": "Je crois qu'on est allés trop loin.",
						"spanish": "Creo que hemos llegado demasiado lejos.",
						"vietnamese": "Tôi nghĩ chúng ta đã đi quá sâu rồi.",
						"thai": "ฉันว่าเราเข้ามาลึกเกินไปแล้ว",
						"hindi": "मुझे लगता है हम बहुत अंदर आ गए हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜?",
						"english": "Why?",
						"japanese": "なぜ？",
						"chinese": "为什么？",
						"french": "Pourquoi ?",
						"spanish": "¿Por qué?",
						"vietnamese": "Tại sao?",
						"thai": "ทำไมล่ะ?",
						"hindi": "क्यों?"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "문헌에… '기다림이 분노로 변할 때'라는 구절이 있어.",
						"english": "There's a passage in the literature... 'When waiting turns to rage.'",
						"japanese": "文献に…「待ち望みが怒りに変わる時」という一節がある。",
						"chinese": "文献中…有一句 '当等待变为愤怒时'。",
						"french": "Il y a un passage dans les écrits... 'Quand l'attente se transforme en rage'.",
						"spanish": "Hay un pasaje en los escritos... 'Cuando la espera se convierte en ira'.",
						"vietnamese": "Trong văn kiện... có một câu 'Khi sự chờ đợi biến thành cơn thịnh nộ'.",
						"thai": "ในเอกสาร... มีวลีว่า 'เมื่อการรอคอยกลายเป็นความโกรธแค้น'",
						"hindi": "दस्तावेज़ों में... एक अंश है 'जब इंतज़ार क्रोध में बदल जाता है'।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…뭔가 나타날 것 같아.",
						"english": "...Something's about to appear.",
						"japanese": "…何かが現れそうだ。",
						"chinese": "…好像有什么要出现了。",
						"french": "...Quelque chose est sur le point d'apparaître.",
						"spanish": "...Algo está a punto de aparecer.",
						"vietnamese": "...Có vẻ như có gì đó sắp xuất hiện.",
						"thai": "...บางอย่างกำลังจะปรากฏขึ้น",
						"hindi": "...कुछ दिखने वाला है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "bran",
					"content": {
						"korean": "정체를 알 수 없는 존재가 우리를 노리고 있어.",
						"english": "An unknown entity is targeting us.",
						"japanese": "正体不明の存在が我々を狙っている。",
						"chinese": "一个不明身份的实体正在盯着我们。",
						"french": "Une entité inconnue nous cible.",
						"spanish": "Una entidad desconocida nos está apuntando.",
						"vietnamese": "Một thực thể không rõ danh tính đang nhắm vào chúng ta.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักกำลังมุ่งเป้ามาที่เรา",
						"hindi": "एक अज्ञात सत्ता हमें निशाना बना रही है।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어둠 속 존재의 압도적인 힘에 탐험대는 쓰러졌다.",
						"english": "Overwhelmed by the entity's power in the darkness, the expedition fell.",
						"japanese": "闇の存在の圧倒的な力に、探検隊は倒れた。",
						"chinese": "面对黑暗中存在物的压倒性力量，探险队倒下了。",
						"french": "Accablée par la puissance écrasante de l'entité dans les ténèbres, l'expédition tomba.",
						"spanish": "Abrumada por el poder abrumador de la entidad en la oscuridad, la expedición cayó.",
						"vietnamese": "Đoàn thám hiểm đã gục ngã trước sức mạnh áp đảo của thực thể trong bóng tối.",
						"thai": "คณะสำรวจล้มลงด้วยพลังอันมหาศาลของสิ่งมีชีวิตในความมืด",
						"hindi": "अंधेरे में मौजूद शक्ति की अदम्य शक्ति से, अभियान दल गिर गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "도망쳐도 소용없어. 기다림은… 너희를 집어삼킬 것이다.",
						"english": "There's no escape. The wait... will devour you.",
						"japanese": "逃げても無駄だ。待つことは… お前たちを飲み込むだろう。",
						"chinese": "逃跑也无济于事。等待……将吞噬你们。",
						"french": "Fuir ne sert à rien. L'attente... vous dévorera.",
						"spanish": "Escapar es inútil. La espera... os devorará.",
						"vietnamese": "Trốn thoát cũng vô ích. Sự chờ đợi... sẽ nuốt chửng các ngươi.",
						"thai": "หนีไปก็เปล่าประโยชน์ การรอคอย... จะกลืนกินพวกเจ้า",
						"hindi": "भागने का कोई फायदा नहीं। इंतज़ार... तुम्हें निगल जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 안 끝났어!",
						"english": "...Damn it. It's not over yet!",
						"japanese": "…ちくしょう。まだ終わってない！",
						"chinese": "……该死。还没结束！",
						"french": "...Zut. Ce n'est pas encore fini !",
						"spanish": "...Maldita sea. ¡Todavía no ha terminado!",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc!",
						"thai": "...บ้าเอ๊ย. ยังไม่จบ!",
						"hindi": "...धत्त तेरी। अभी खत्म नहीं हुआ!"
					}
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이대로 포기할 순 없어… 안야의 진실을 밝혀야 해.",
						"english": "I can't give up like this... I have to uncover Anya's truth.",
						"japanese": "このまま諦めるわけにはいかない… アーニャの真実を明らかにしなければ。",
						"chinese": "不能就这样放弃……必须揭露安雅的真相。",
						"french": "Je ne peux pas abandonner comme ça... Je dois révéler la vérité d'Anya.",
						"spanish": "No puedo rendirme así... Tengo que desvelar la verdad de Anya.",
						"vietnamese": "Không thể từ bỏ thế này được... Phải hé lộ sự thật về Anya.",
						"thai": "จะยอมแพ้แบบนี้ไม่ได้... ต้องเปิดเผยความจริงของอันยา",
						"hindi": "मैं ऐसे हार नहीं मान सकता... मुझे अन्या की सच्चाई का पता लगाना है।"
					},
					"speaker": "bran",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "정체 모를 존재가 쓰러졌다. 그러나 위협은 사라지지 않았다.",
						"english": "The unknown entity has fallen. But the threat remains.",
						"japanese": "正体不明の存在は倒れた。しかし脅威は消えていない。",
						"chinese": "不明实体已倒下。然而威胁并未消失。",
						"french": "L'entité inconnue est tombée. Mais la menace demeure.",
						"spanish": "La entidad desconocida ha caído. Pero la amenaza no ha desaparecido.",
						"vietnamese": "Thực thể không rõ danh tính đã ngã xuống. Nhưng mối đe dọa vẫn còn.",
						"thai": "สิ่งมีชีวิตที่ไม่รู้จักล้มลงแล้ว แต่ภัยคุกคามยังไม่หายไป",
						"hindi": "अज्ञात सत्ता गिर गई। लेकिन खतरा अभी भी बना हुआ है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "이것은… 시작일 뿐… 그녀의 기다림은… 끝나지 않아…",
						"english": "This is... just the beginning... Her waiting... is not over...",
						"japanese": "これは…始まりに過ぎない…彼女の待ち望みは…終わらない…",
						"chinese": "这只是…开始…她的等待…还没有结束…",
						"french": "Ce n'est... que le début... Son attente... n'est pas terminée...",
						"spanish": "Esto es... solo el principio... Su espera... no ha terminado...",
						"vietnamese": "Đây chỉ là... khởi đầu... Sự chờ đợi của cô ấy... chưa kết thúc...",
						"thai": "นี่เป็น... เพียงจุดเริ่มต้น... การรอคอยของเธอ... ยังไม่สิ้นสุด...",
						"hindi": "यह... बस शुरुआत है... उसका इंतज़ार... खत्म नहीं हुआ है..."
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝나지 않았다고?",
						"english": "Not over?",
						"japanese": "終わっていないだと？",
						"chinese": "还没有结束？",
						"french": "Pas terminé ?",
						"spanish": "¿No ha terminado?",
						"vietnamese": "Chưa kết thúc sao?",
						"thai": "ยังไม่จบหรือ?",
						"hindi": "खत्म नहीं हुआ?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "저 존재가 말하는 '그녀'가 안야라면… 우리는 아직 안야를 구한 게 아니야.",
						"english": "If 'she' that being mentioned is Anya... we haven't saved Anya yet.",
						"japanese": "あの存在が言う「彼女」がアーニャなら… 私たちはまだアーニャを救っていない。",
						"chinese": "如果那个存在所说的“她”是安雅……我们还没救出安雅。",
						"french": "Si la 'elle' dont parle cette entité est Anya... nous n'avons pas encore sauvé Anya.",
						"spanish": "Si la 'ella' de la que habla esa entidad es Anya... todavía no hemos salvado a Anya.",
						"vietnamese": "Nếu 'cô ấy' mà thực thể đó nhắc đến là Anya... chúng ta vẫn chưa cứu được Anya.",
						"thai": "ถ้า 'เธอ' ที่สิ่งนั้นพูดถึงคืออันยา... เรายังไม่ได้ช่วยอันยาเลย",
						"hindi": "अगर वह जिस 'वह' की बात कर रहा है वह अन्या है... तो हमने अभी तक अन्या को नहीं बचाया है।"
					},
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "고대 유적은 침묵했다. 그러나 진실의 조각들은… 계속해서 빛을 향해 이끌었다.",
						"english": "The ancient ruins fell silent. But the fragments of truth... continued to lead towards the light.",
						"japanese": "古代遺跡は沈黙した。しかし真実の断片は… 光へと導き続けた。",
						"chinese": "古代遗迹一片寂静。然而，真相的碎片……持续地引向光明。",
						"french": "Les ruines antiques se turent. Mais les fragments de vérité... continuaient de mener vers la lumière.",
						"spanish": "Las ruinas antiguas guardaron silencio. Pero los fragmentos de la verdad... seguían guiando hacia la luz.",
						"vietnamese": "Di tích cổ đại chìm vào im lặng. Nhưng những mảnh ghép sự thật... vẫn tiếp tục dẫn lối về phía ánh sáng.",
						"thai": "ซากปรักหักพังโบราณเงียบงัน แต่ชิ้นส่วนของความจริง... ยังคงนำทางสู่แสงสว่าง",
						"hindi": "प्राचीन खंडहर खामोश हो गए। लेकिन सच्चाई के टुकड़े... लगातार प्रकाश की ओर ले जा रहे थे।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 더 깊이 들어오다니.",
						"english": "Fools... to venture deeper.",
						"japanese": "愚かな者たち…さらに深く入ってくるとは。",
						"chinese": "愚蠢的东西们…竟然敢深入到这里。",
						"french": "Imbéciles... d'oser s'aventurer plus profondément.",
						"spanish": "Necios... por aventurarse más profundo.",
						"vietnamese": "Những kẻ ngu ngốc... dám đi sâu hơn nữa.",
						"thai": "พวกโง่เง่า... บังอาจเข้ามาลึกกว่านี้",
						"hindi": "मूर्खों... और गहराई तक आने की हिम्मत की।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가… {random_boss}인가?",
						"english": "Are you... {random_boss}?",
						"japanese": "お前が… {random_boss}なのか？",
						"chinese": "你就是… {random_boss}？",
						"french": "Es-tu... {random_boss} ?",
						"spanish": "¿Eres tú... {random_boss}?",
						"vietnamese": "Ngươi... là {random_boss} sao?",
						"thai": "เจ้าคือ... {random_boss}?",
						"hindi": "क्या तुम... {random_boss} हो?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히… 나의 기다림을 방해하는가.",
						"english": "How dare you... interrupt my waiting.",
						"japanese": "よくも…私の待ち望みを邪魔するな。",
						"chinese": "竟敢…打扰我的等待。",
						"french": "Comment oses-tu... interrompre mon attente.",
						"spanish": "¿Cómo te atreves... a interrumpir mi espera?",
						"vietnamese": "Dám... ngắt quãng sự chờ đợi của ta.",
						"thai": "บังอาจ... ขัดขวางการรอคอยของข้า",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे इंतज़ार में खलल डालने की।"
					}
				},
				{
					"content": {
						"korean": "안야를 해치게 두지 않아!",
						"english": "I won't let you harm Anya!",
						"japanese": "アーニャを傷つけさせない！",
						"chinese": "我不会让你伤害安雅的！",
						"french": "Je ne te laisserai pas blesser Anya !",
						"spanish": "¡No permitiré que dañes a Anya!",
						"vietnamese": "Ta sẽ không để ngươi làm hại Anya!",
						"thai": "ข้าจะไม่ยอมให้เจ้าทำร้ายอันย่า!",
						"hindi": "मैं तुम्हें अन्या को चोट पहुँचाने नहीं दूँगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없는 눈보라 속, 얼어붙은 고대 유적.",
			"이곳에선 과거의 조각들이 빛을 기다리고 있었다.",
			"안야의 빛은 더 깊은 미스터리로 이끌고.",
			"이제, 잊혀진 진실이 서서히 드러날 시간."
		],
		"english": [
			"Amidst an endless blizzard, a frozen ancient ruin.",
			"Here, fragments of the past awaited light.",
			"Anya's light leads to deeper mysteries.",
			"Now, it's time for forgotten truths to slowly emerge."
		],
		"japanese": [
			"終わりのない吹雪の中、凍てついた古代遺跡。",
			"ここでは、過去の断片が光を待っていた。",
			"アーニャの光は、より深い謎へと導く。",
			"今、忘れられた真実が徐々に明らかになる時。"
		],
		"chinese": [
			"无尽暴雪中，一座冰冻的古老遗迹。",
			"在这里，过去的碎片等待着光明。",
			"安雅之光引向更深层的谜团。",
			"现在，是时候让被遗忘的真相逐渐显现了。"
		],
		"french": [
			"Au milieu d'un blizzard sans fin, une ruine antique gelée.",
			"Ici, des fragments du passé attendaient la lumière.",
			"La lumière d'Anya mène à des mystères plus profonds.",
			"Maintenant, il est temps que les vérités oubliées émergent lentement."
		],
		"spanish": [
			"En medio de una tormenta de nieve interminable, una ruina antigua congelada.",
			"Aquí, fragmentos del pasado esperaban la luz.",
			"La luz de Anya conduce a misterios más profundos.",
			"Ahora, es hora de que las verdades olvidadas emerjan lentamente."
		],
		"vietnamese": [
			"Giữa bão tuyết vô tận, một di tích cổ xưa đóng băng.",
			"Tại đây, những mảnh ghép quá khứ đang chờ đợi ánh sáng.",
			"Ánh sáng của Anya dẫn lối đến những bí ẩn sâu hơn.",
			"Giờ đây, đã đến lúc những sự thật bị lãng quên dần hé lộ."
		],
		"thai": [
			"ท่ามกลางพายุหิมะที่ไม่มีที่สิ้นสุด ซากปรักหักพังโบราณที่เยือกแข็ง",
			"ที่นี่ เศษเสี้ยวของอดีตกำลังรอคอยแสงสว่าง",
			"แสงของอันย่านำไปสู่ความลึกลับที่ลึกซึ้งยิ่งขึ้น",
			"บัดนี้ ถึงเวลาที่ความจริงที่ถูกลืมจะค่อยๆ ปรากฏขึ้น"
		],
		"hindi": [
			"अंतहीन बर्फीले तूफ़ान के बीच, एक जमा हुआ प्राचीन खंडहर।",
			"यहाँ, अतीत के टुकड़े प्रकाश का इंतज़ार कर रहे थे।",
			"अन्या का प्रकाश गहरे रहस्यों की ओर ले जाता है।",
			"अब, भूली हुई सच्चाइयों के धीरे-धीरे सामने आने का समय है।"
		]
	}
} as const;
