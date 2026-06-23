export const scenario_modern_aether_39_04 = {
	"scenario_id": "modern_aether_39_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "지하 터널. 습하고 차가운 공기가 폐부를 찔렀다.",
						"english": "Underground tunnel. Humid, cold air pierced the lungs.",
						"japanese": "地下トンネル。湿って冷たい空気が肺を刺した。",
						"chinese": "地下隧道。潮湿冰冷的空气刺入肺腑。",
						"french": "Tunnel souterrain. L'air humide et froid transperçait les poumons.",
						"spanish": "Túnel subterráneo. El aire húmedo y frío perforaba los pulmones.",
						"vietnamese": "Hầm ngầm. Không khí ẩm ướt, lạnh lẽo đâm vào phổi.",
						"thai": "อุโมงค์ใต้ดิน อากาศชื้นและเย็นเยียบแทงทะลุปอด",
						"hindi": "भूमिगत सुरंग। नम, ठंडी हवा फेफड़ों को भेद गई।"
					}
				},
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "kai",
					"type": "speech",
					"content": {
						"korean": "…왔군. 죽은 보스를 위해, 복수하러 왔나?",
						"english": "...You're here. Come for revenge, for your dead boss?",
						"japanese": "…来たな。死んだボスを 위해、復讐に来たのか？",
						"chinese": "……你来了。是为了死去的 Boss 复仇吗？",
						"french": "...Tu es là. Venu te venger pour ton boss mort ?",
						"spanish": "...Has venido. ¿Vienes por venganza, por tu jefe muerto?",
						"vietnamese": "…Ngươi đến rồi. Đến báo thù cho ông trùm đã chết sao?",
						"thai": "…มาแล้วสินะ มาแก้แค้นให้บอสที่ตายไปแล้วงั้นหรือ?",
						"hindi": "...तुम आ गए। मरे हुए बॉस के लिए, बदला लेने आए हो?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "당신은… 카이? 조직원이었던.",
						"english": "You're... Kai? The former gang member.",
						"japanese": "あなたは…カイ？組織員だった。",
						"chinese": "你是……凯？曾是帮派成员的。",
						"french": "Vous êtes... Kai ? L'ancien membre du gang.",
						"spanish": "¿Tú eres... Kai? El que era un miembro de la organización.",
						"vietnamese": "Ngươi là… Kai? Tên thành viên cũ của tổ chức.",
						"thai": "คุณคือ...ไค? สมาชิกเก่าขององค์กร",
						"hindi": "तुम हो... काई? जो संगठन का सदस्य था।"
					}
				},
				{
					"content": {
						"korean": "그래. 하지만 이젠 아무것도 아니지. 다 부서졌으니까.",
						"english": "Yes. But now I'm nothing. Everything's broken.",
						"japanese": "ああ。だが、今となっては何の意味もない。全て壊れたからな。",
						"chinese": "是的。但现在我什么都不是了。一切都已破碎。",
						"french": "Oui. Mais maintenant, je ne suis plus rien. Tout est brisé.",
						"spanish": "Sí. Pero ahora no soy nada. Todo está roto.",
						"vietnamese": "Phải. Nhưng bây giờ ta chẳng là gì cả. Vì mọi thứ đã tan vỡ hết rồi.",
						"thai": "ใช่ แต่ตอนนี้ฉันไม่เหลืออะไรแล้ว ทุกอย่างพังทลายลงแล้ว",
						"hindi": "हाँ। लेकिन अब मैं कुछ नहीं हूँ। सब कुछ टूट गया है।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "복수? 결국 남는 건… 허무뿐이야.",
						"english": "Revenge? In the end, only emptiness remains.",
						"japanese": "復讐？結局残るのは…虚無だけだ。",
						"chinese": "复仇？到头来剩下的……只有虚无而已。",
						"french": "La vengeance ? Au final, il ne reste que le vide.",
						"spanish": "¿Venganza? Al final, solo queda el vacío.",
						"vietnamese": "Báo thù? Cuối cùng còn lại… chỉ là hư vô mà thôi.",
						"thai": "แก้แค้นงั้นหรือ? สุดท้ายที่เหลืออยู่ก็มีแต่...ความว่างเปล่าเท่านั้น",
						"hindi": "बदला? अंत में बस… शून्य ही बचता है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "kai"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"content": {
						"korean": "보스가 사라진 뒤, 모든 게 무의미해졌어.",
						"english": "After the boss disappeared, everything became meaningless.",
						"japanese": "ボスが消えてから、全てが無意味になった。",
						"chinese": "Boss 消失后，一切都变得毫无意义了。",
						"french": "Après la disparition du boss, tout est devenu insignifiant.",
						"spanish": "Después de que el jefe desapareció, todo se volvió sin sentido.",
						"vietnamese": "Sau khi ông trùm biến mất, mọi thứ đều trở nên vô nghĩa.",
						"thai": "หลังจากบอสหายไป ทุกสิ่งก็ไร้ความหมาย",
						"hindi": "बॉस के गायब होने के बाद, सब कुछ अर्थहीन हो गया।"
					},
					"speaker": "kai",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…그를 정말로 따랐던 건가.",
						"english": "…Did you truly follow him?",
						"japanese": "「…本当に彼に従っていたのか。」",
						"chinese": "“……真的追随过他吗？”",
						"french": "« …L'avez-vous vraiment suivi ? »",
						"spanish": "« …¿Realmente lo seguiste? »",
						"vietnamese": "...Ngươi thật sự đã đi theo hắn sao?",
						"thai": "...เจ้าติดตามเขาจริงๆ หรือ?",
						"hindi": "...क्या तुम सच में उसके पीछे चले गए थे?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "따랐던 건지, 이용당한 건지… 이제는 알 수 없어.",
						"english": "Whether I followed, or was used… I can no longer tell.",
						"japanese": "「従ったのか、利用されたのか…今はもう分からない。」",
						"chinese": "“是追随，还是被利用……现在已无法知晓。”",
						"french": "« Si j'ai suivi, ou si j'ai été utilisé… Je ne peux plus le savoir. »",
						"spanish": "« Si seguí, o fui utilizado… Ya no puedo saberlo. »",
						"vietnamese": "Đi theo hay bị lợi dụng... Giờ ta không thể biết được nữa.",
						"thai": "จะติดตามหรือถูกใช้... ตอนนี้ไม่สามารถรู้ได้แล้ว",
						"hindi": "पीछे चले थे या इस्तेमाल हुए थे... अब पता नहीं चल सकता।"
					}
				},
				{
					"content": {
						"korean": "…네가 쥔 검이, 허무를 베어낼 수 있을까?",
						"english": "…Can the sword in your hand cut through the void?",
						"japanese": "「…君が持つ剣は、虚無を斬り裂けるだろうか？」",
						"chinese": "“……你手中的剑，能斩断虚无吗？”",
						"french": "« …L'épée que tu brandis, pourra-t-elle trancher le néant ? »",
						"spanish": "« …¿Podrá la espada que empuñas cortar el vacío? »",
						"vietnamese": "...Thanh kiếm ngươi đang nắm giữ, có thể chém tan hư vô không?",
						"thai": "...ดาบในมือเจ้า จะฟันผ่านความว่างเปล่าได้หรือไม่?",
						"hindi": "...क्या तुम्हारे हाथ में पकड़ी तलवार, शून्यता को काट सकती है?"
					},
					"type": "speech",
					"speaker": "random_boss",
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
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "kai",
					"type": "direction"
				},
				{
					"speaker": "kai",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "가해자와 피해자의 경계? 그게 무슨 의미가 있어.",
						"english": "The line between perpetrator and victim? What meaning does that hold?",
						"japanese": "「加害者と被害者の境界？そんなものに何の意味がある。」",
						"chinese": "“施害者与受害者的界限？那有什么意义。”",
						"french": "« La frontière entre agresseur et victime ? Quel sens cela a-t-il ? »",
						"spanish": "« ¿La frontera entre agresor y víctima? ¿Qué sentido tiene eso? »",
						"vietnamese": "Ranh giới giữa kẻ gây án và nạn nhân? Nó có ý nghĩa gì chứ.",
						"thai": "เส้นแบ่งระหว่างผู้กระทำกับผู้ถูกกระทำ? มันมีความหมายอะไร",
						"hindi": "अपराधी और पीड़ित की सीमा? उसका क्या मतलब है।"
					}
				},
				{
					"content": {
						"korean": "결국 모두가 서로를 파괴할 뿐인데.",
						"english": "In the end, everyone just destroys each other.",
						"japanese": "「結局、皆が互いを破壊し合うだけだ。」",
						"chinese": "“最终，所有人不过是互相毁灭罢了。”",
						"french": "« Au final, tout le monde ne fait que se détruire mutuellement. »",
						"spanish": "« Al final, todos se destruyen mutuamente. »",
						"vietnamese": "Rốt cuộc, tất cả mọi người chỉ hủy diệt lẫn nhau mà thôi.",
						"thai": "สุดท้ายแล้ว ทุกคนก็แค่ทำลายกันเอง",
						"hindi": "अंत में, हर कोई बस एक-दूसरे को नष्ट कर रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그런 식의 말은….",
						"english": "Words like that…",
						"japanese": "「そんな言い方は…。」",
						"chinese": "“那种说法……”",
						"french": "« Des mots pareils… »",
						"spanish": "« Palabras así… »",
						"vietnamese": "Kiểu nói đó...",
						"thai": "คำพูดแบบนั้น...",
						"hindi": "ऐसी बातें..."
					}
				},
				{
					"content": {
						"korean": "그래. 결국 모두가 같은 허무에 빠질 뿐.",
						"english": "Yes. In the end, everyone falls into the same void.",
						"japanese": "「そうだ。結局、皆が同じ虚無に陥るだけだ。」",
						"chinese": "“没错。最终，所有人都会陷入同样的虚无。”",
						"french": "« Oui. Au final, tout le monde tombe dans le même néant. »",
						"spanish": "« Sí. Al final, todos caen en el mismo vacío. »",
						"vietnamese": "Đúng vậy. Rốt cuộc, tất cả mọi người chỉ rơi vào cùng một sự hư vô mà thôi.",
						"thai": "ใช่แล้ว สุดท้ายแล้ว ทุกคนก็แค่ตกอยู่ในความว่างเปล่าเดียวกัน",
						"hindi": "हाँ। अंत में, हर कोई उसी शून्यता में पड़ जाता है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…나와 같은 길을 걷게 될 거야.",
						"english": "…You will walk the same path as I.",
						"japanese": "「…私と同じ道を歩むことになるだろう。」",
						"chinese": "“……你也会走上和我一样的道路。”",
						"french": "« …Tu marcheras sur le même chemin que moi. »",
						"spanish": "« …Recorrerás el mismo camino que yo. »",
						"vietnamese": "...Ngươi sẽ bước đi trên con đường giống như ta.",
						"thai": "...เจ้าจะต้องเดินตามเส้นทางเดียวกับข้า",
						"hindi": "...तुम भी मेरे ही रास्ते पर चलोगे।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "어둠 속에서 알 수 없는 존재의 나지막한 흐느낌이 들려왔다.",
						"english": "From the darkness, a faint sob of an unknown entity was heard.",
						"japanese": "「闇の中から、得体の知れない存在の小さなすすり泣きが聞こえてきた。」",
						"chinese": "“黑暗中，传来未知存在低沉的抽泣声。”",
						"french": "« Dans l'obscurité, on entendit le faible sanglot d'une entité inconnue. »",
						"spanish": "« Desde la oscuridad, se escuchó un débil sollozo de una entidad desconocida. »",
						"vietnamese": "Trong bóng tối, nghe thấy tiếng nức nở yếu ớt của một sinh vật không rõ.",
						"thai": "จากความมืดมิด เสียงสะอื้นเบาๆ ของสิ่งมีชีวิตที่ไม่รู้จักก็ดังขึ้น",
						"hindi": "अंधेरे में, एक अज्ञात सत्ता की धीमी सिसकी सुनाई दी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "모든 것을 잃은 듯한 깊은 허무의 감정이 공간을 가득 채웠다.",
						"english": "A deep sense of nihility, as if everything was lost, filled the space.",
						"japanese": "「全てを失ったかのような深い虚無の感情が、空間を埋め尽くした。」",
						"chinese": "“一种仿佛失去一切的深沉虚无感，充满了整个空间。”",
						"french": "« Un profond sentiment de néant, comme si tout était perdu, remplit l'espace. »",
						"spanish": "« Una profunda sensación de vacío, como si todo se hubiera perdido, llenó el espacio. »",
						"vietnamese": "Một cảm giác hư vô sâu sắc, như thể đã mất tất cả mọi thứ, tràn ngập không gian.",
						"thai": "ความรู้สึกว่างเปล่าอันลึกซึ้ง ราวกับสูญเสียทุกสิ่งทุกอย่าง ได้เติมเต็มพื้นที่",
						"hindi": "सब कुछ खो जाने जैसा गहरा शून्यता का एहसास, पूरे स्थान में भर गया।"
					}
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "저 소리… 저게 이 터널의 주인이지.",
						"english": "That sound... It's the master of this tunnel.",
						"japanese": "あの音…あれがこのトンネルの主か。",
						"chinese": "那个声音…那就是这个隧道的 T.",
						"french": "Ce son... C'est le maître de ce tunnel.",
						"spanish": "Ese sonido... es el dueño de este túnel.",
						"vietnamese": "Âm thanh đó... Nó là chủ nhân của đường hầm này.",
						"thai": "เสียงนั่น... มันคือเจ้าของอุโมงค์นี้เอง",
						"hindi": "वो आवाज़... वही इस सुरंग का मालिक है।"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신도… 당한 건가.",
						"english": "You too... have fallen victim?",
						"japanese": "あなたも…やられたのか。",
						"chinese": "你也…中招了吗？",
						"french": "Toi aussi... tu es tombé victime ?",
						"spanish": "¿Tú también... has caído?",
						"vietnamese": "Bạn cũng... bị sao rồi sao?",
						"thai": "เธอก็... โดนด้วยเหรอ?",
						"hindi": "क्या तुम भी... शिकार हो गए?"
					}
				},
				{
					"content": {
						"korean": "벗어날 수 없어. 이 허무의 굴레에서.",
						"english": "There's no escape. From this cycle of futility.",
						"japanese": "逃れられない。この虚無の輪から。",
						"chinese": "无法逃脱。从这虚无的枷锁中。",
						"french": "On ne peut s'échapper. De ce cycle de futilité.",
						"spanish": "No hay escape. De este ciclo de la nada.",
						"vietnamese": "Không thể thoát ra. Khỏi vòng luẩn quẩn của hư vô này.",
						"thai": "หนีไม่พ้นหรอก จากวงจรแห่งความว่างเปล่านี้",
						"hindi": "कोई बच नहीं सकता। इस शून्य के चक्र से।"
					},
					"emotion": "sad",
					"speaker": "kai",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "kai",
					"direction": "down",
					"action": "exit",
					"duration_ms": 400
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "결국, 너도… 또 다른 허무를 만들어낼 뿐.",
						"english": "In the end, you too... will only create another futility.",
						"japanese": "結局、お前も…また別の虚無を生み出すだけだ。",
						"chinese": "最终，你也会…不过是创造另一个虚无。",
						"french": "Au final, toi aussi... ne feras que créer un autre néant.",
						"spanish": "Al final, tú también... solo crearás otra nada.",
						"vietnamese": "Cuối cùng, ngươi cũng... chỉ tạo ra một hư vô khác mà thôi.",
						"thai": "ท้ายที่สุด แกก็... แค่สร้างความว่างเปล่าอีกอย่างขึ้นมาเท่านั้น",
						"hindi": "अंततः, तुम भी... बस एक और शून्य ही बनाओगे।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…그럴 리 없어. 난 달라.",
						"english": "...That can't be. I'm different.",
						"japanese": "…そんなはずはない。私は違う。",
						"chinese": "…不可能。我不同。",
						"french": "...C'est impossible. Je suis différent.",
						"spanish": "...Eso no puede ser. Yo soy diferente.",
						"vietnamese": "...Không thể nào. Ta khác.",
						"thai": "...ไม่จริงหรอก ฉันไม่เหมือนใคร",
						"hindi": "...ऐसा नहीं हो सकता। मैं अलग हूँ।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "허무의 메아리가 사라진 자리. 그러나 진실은 더욱 깊은 어둠 속에 잠겨 있었다.",
						"english": "Where the echoes of futility faded. But the truth remained submerged in deeper darkness.",
						"japanese": "虚無の残響が消え去った場所。しかし真実は、さらに深い闇の中に沈んでいた。",
						"chinese": "虚无的回响消失之处。然而真相却沉浸在更深的黑暗中。",
						"french": "Là où les échos du néant s'estompaient. Mais la vérité restait plongée dans des ténèbres plus profondes.",
						"spanish": "Donde los ecos de la nada se desvanecieron. Pero la verdad permanecía sumergida en una oscuridad aún más profunda.",
						"vietnamese": "Nơi âm vang của hư vô biến mất. Nhưng sự thật vẫn chìm sâu trong bóng tối tăm hơn.",
						"thai": "ที่ซึ่งเสียงสะท้อนแห่งความว่างเปล่าจางหายไป แต่ความจริงยังคงจมดิ่งอยู่ในความมืดมิดที่ลึกกว่า",
						"hindi": "शून्यता की गूँज जहाँ मिट गई। लेकिन सच्चाई और भी गहरे अंधकार में डूबी हुई थी।"
					}
				},
				{
					"content": {
						"korean": "반복되는 비극의 파편들. 주인공의 마음속에 의문이 증폭된다.",
						"english": "Fragments of repeating tragedies. Questions amplify in the protagonist's mind.",
						"japanese": "繰り返される悲劇の破片。主人公の心に疑問が増幅する。",
						"chinese": "重复的悲剧碎片。疑问在主角心中不断放大。",
						"french": "Des fragments de tragédies répétées. Les questions s'amplifient dans l'esprit du protagoniste.",
						"spanish": "Fragmentos de tragedias que se repiten. Las dudas se amplifican en la mente del protagonista.",
						"vietnamese": "Những mảnh vỡ của bi kịch lặp lại. Những nghi vấn dâng trào trong tâm trí nhân vật chính.",
						"thai": "เศษเสี้ยวของโศกนาฏกรรมที่ซ้ำซาก คำถามต่างๆ เพิ่มพูนขึ้นในใจของตัวเอก",
						"hindi": "दोहराई जाने वाली त्रासदियों के टुकड़े। नायक के मन में सवाल बढ़ते जाते हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "네 의지는… 이미 꺾였다.",
						"english": "Your will... is already broken.",
						"japanese": "お前の意志は…もう折れた。",
						"chinese": "你的意志…已经瓦解了。",
						"french": "Ta volonté... est déjà brisée.",
						"spanish": "Tu voluntad... ya está rota.",
						"vietnamese": "Ý chí của ngươi... đã gục ngã rồi.",
						"thai": "เจตจำนงของเจ้า... แตกสลายไปแล้ว",
						"hindi": "तुम्हारी इच्छाशक्ति... पहले ही टूट चुकी है।"
					}
				},
				{
					"content": {
						"korean": "아니… 아직이야. 난 포기하지 않아.",
						"english": "No... not yet. I won't give up.",
						"japanese": "いや…まだだ。私は諦めない。",
						"chinese": "不…还没。我不会放弃的。",
						"french": "Non... pas encore. Je n'abandonnerai pas.",
						"spanish": "No... aún no. No me rendiré.",
						"vietnamese": "Không... chưa đâu. Ta sẽ không bỏ cuộc.",
						"thai": "ไม่... ยังหรอก. ฉันจะไม่ยอมแพ้.",
						"hindi": "नहीं... अभी नहीं। मैं हार नहीं मानूंगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너의 복수심은… 그저 허무의 먹이일 뿐.",
						"english": "Your desire for revenge... is merely fodder for futility.",
						"japanese": "お前の復讐心は…ただ虚無の餌食に過ぎない。",
						"chinese": "你的复仇心…不过是虚无的饵料。",
						"french": "Ton désir de vengeance... n'est que de la nourriture pour le néant.",
						"spanish": "Tu sed de venganza... es solo alimento para la nada.",
						"vietnamese": "Lòng thù hận của ngươi... chỉ là mồi nhử cho hư vô mà thôi.",
						"thai": "ความแค้นของแก... ก็แค่เหยื่อของความว่างเปล่าเท่านั้น",
						"hindi": "तुम्हारा बदला... बस शून्य का चारा है।"
					}
				},
				{
					"content": {
						"korean": "닥쳐! 난 여기서 멈추지 않아.",
						"english": "Shut up! I won't stop here.",
						"japanese": "黙れ！私はここで止まらない。",
						"chinese": "闭嘴！我不会止步于此。",
						"french": "Tais-toi ! Je ne m'arrêterai pas ici.",
						"spanish": "¡Cállate! No me detendré aquí.",
						"vietnamese": "Im đi! Ta sẽ không dừng lại ở đây.",
						"thai": "หุบปาก! ฉันจะไม่หยุดอยู่แค่นี้",
						"hindi": "चुप रहो! मैं यहाँ नहीं रुकूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "그럼, 그 의지를… 증명해봐라.",
						"english": "Then, prove... that will.",
						"japanese": "ならば、その意志を…証明してみせろ。",
						"chinese": "那么，证明…那个意志吧。",
						"french": "Alors, prouve... cette volonté.",
						"spanish": "Entonces, prueba... esa voluntad.",
						"vietnamese": "Vậy thì, hãy chứng minh... ý chí đó đi.",
						"thai": "ถ้าอย่างนั้น ก็จง...พิสูจน์เจตจำนงนั้นซะ",
						"hindi": "तो, उस इच्छा को... साबित करो।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"깊고 어두운 지하. 과거의 망령이 숨 쉬는 곳.",
			"복수를 외치는 한 남자, 그의 눈빛엔 깊은 허무만이.",
			"메아리치는 흐느낌, 모든 것을 잃은 듯한 감정.",
			"이 어둠 속에서, 너의 의지는 버틸 수 있을까."
		],
		"english": [
			"Deep, dark underground. Where specters of the past breathe.",
			"A man crying for revenge, only deep void in his eyes.",
			"Echoing sobs, a feeling of having lost everything.",
			"In this darkness, can your will endure?"
		],
		"japanese": [
			"深く暗い地下。過去の亡霊が息づく場所。",
			"復讐を叫ぶ男、その瞳には深い虚無だけが。",
			"木霊するすすり泣き、全てを失ったかのような感情。",
			"この闇の中で、君の意志は耐えられるだろうか。"
		],
		"chinese": [
			"幽深黑暗的地下。过往的亡灵在此喘息。",
			"一个呼唤复仇的男人，他的眼中只剩下深深的虚无。",
			"回荡的呜咽，仿佛失去了一切般的感觉。",
			"在这黑暗中，你的意志能否坚持下去？"
		],
		"french": [
			"Un souterrain profond et sombre. Là où les spectres du passé respirent.",
			"Un homme criant vengeance, seul un vide profond dans ses yeux.",
			"Des sanglots résonnants, un sentiment d'avoir tout perdu.",
			"Dans cette obscurité, ta volonté pourra-t-elle tenir ?"
		],
		"spanish": [
			"Un subterráneo oscuro y profundo. Donde los espectros del pasado respiran.",
			"Un hombre clamando venganza, solo un profundo vacío en sus ojos.",
			"Sollozos que resuenan, una sensación de haberlo perdido todo.",
			"En esta oscuridad, ¿podrá tu voluntad resistir?"
		],
		"vietnamese": [
			"Hầm ngầm sâu thẳm, tăm tối. Nơi những bóng ma quá khứ vẫn còn thở.",
			"Một người đàn ông gào thét báo thù, trong mắt chỉ còn sự hư vô sâu thẳm.",
			"Tiếng nức nở vang vọng, cảm giác như đã mất tất cả.",
			"Trong bóng tối này, ý chí của ngươi liệu có trụ vững được không?"
		],
		"thai": [
			"ใต้ดินที่ลึกและมืดมิด ที่ซึ่งวิญญาณในอดีตหายใจอยู่",
			"ชายผู้ร่ำร้องขอการแก้แค้น ในดวงตาของเขามีแต่ความว่างเปล่าอันลึกซึ้ง",
			"เสียงสะอื้นก้องกังวาน ความรู้สึกราวกับสูญเสียทุกสิ่ง",
			"ในความมืดมิดนี้ เจตจำนงของเจ้าจะทนทานได้หรือไม่"
		],
		"hindi": [
			"गहरा, अँधेरा पाताल। जहाँ अतीत के प्रेत साँस लेते हैं।",
			"बदला चिल्लाता एक आदमी, उसकी आँखों में केवल गहरा शून्य।",
			"गूँजती सिसकियाँ, सब कुछ खो देने का अहसास।",
			"इस अँधेरे में, क्या तुम्हारी इच्छाशक्ति टिक पाएगी?"
		]
	}
} as const;
