export const scenario_modern_rohan_13_04 = {
	"scenario_id": "modern_rohan_13_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"압축기 속 울림은 단순한 기계음이 아니었다.",
			"사라진 흔적들, 닥스는 유품의 무게를 느꼈다.",
			"질문할 시간. 피할 수 없는 진실.",
			"Ash. 그의 뒤틀린 청소, 그 덫이 드디어 모습을 드러낸다."
		],
		"english": [
			"The hum from the compressor wasn't just a machine's sound.",
			"Traces vanished. Dax felt the weight of the keepsakes.",
			"Time to question. The inescapable truth.",
			"Ash. His twisted cleanup. The trap finally reveals itself."
		],
		"japanese": [
			"圧縮機の中の響きは、単なる機械音ではなかった。",
			"消え去った痕跡、ダックスは遺品の重みを感じた。",
			"問い詰める時。避けられない真実。",
			"アッシュ。彼の歪んだ掃除、その罠がついに姿を現す。"
		],
		"chinese": [
			"压缩机里的回响，不只是机器的轰鸣。",
			"消失的痕迹，达克斯感受到了遗物的重量。",
			"质问的时刻。无法逃避的真相。",
			"艾什。他扭曲的清理，那陷阱终于显露原形。"
		],
		"french": [
			"Le vrombissement du compresseur n'était pas un simple bruit de machine.",
			"Les traces disparues. Dax sentait le poids des reliques.",
			"L'heure de la question. L'inéluctable vérité.",
			"Ash. Son nettoyage tordu. Le piège se révèle enfin."
		],
		"spanish": [
			"El zumbido del compresor no era solo un sonido de máquina.",
			"Huellas desvanecidas. Dax sintió el peso de los objetos personales.",
			"Es hora de preguntar. La verdad ineludible.",
			"Ash. Su retorcida limpieza. La trampa finalmente se revela."
		],
		"vietnamese": [
			"Tiếng vọng từ máy nén không chỉ là âm thanh cơ khí.",
			"Những dấu vết biến mất, Dax cảm nhận được sức nặng của di vật.",
			"Thời gian để hỏi. Sự thật không thể tránh khỏi.",
			"Ash. Cuộc dọn dẹp vặn vẹo của hắn. Cái bẫy cuối cùng cũng lộ diện."
		],
		"thai": [
			"เสียงครางจากเครื่องอัดไม่ใช่แค่เสียงเครื่องจักรธรรมดา",
			"ร่องรอยที่หายไป แด็กซ์รู้สึกถึงน้ำหนักของของที่ระลึก",
			"ถึงเวลาถามไถ่ ความจริงที่หลีกเลี่ยงไม่ได้",
			"แอช. การทำความสะอาดที่บิดเบี้ยวของเขา กับดักนั้นในที่สุดก็เผยโฉม"
		],
		"hindi": [
			"कंप्रेसर की गूँज महज़ एक मशीन की आवाज़ नहीं थी।",
			"मिटे हुए निशान। डैक्स ने अंतिम वस्तुओं का भार महसूस किया।",
			"सवाल करने का समय। अटल सत्य।",
			"ऐश। उसकी विकृत सफाई, वह जाल आखिरकार सामने आता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 쓰레기 압축기. 그 굉음이 고막을 찢었다.",
						"english": "A colossal garbage compactor. Its roar tore at the eardrums.",
						"japanese": "巨大なゴミ圧縮機。その轟音が鼓膜を破った。",
						"chinese": "巨大的垃圾压缩机。它的轰鸣声震裂耳膜。",
						"french": "Un colossal compacteur de déchets. Son rugissement déchirait les tympans.",
						"spanish": "Un compactador de basura gigantesco. Su estruendo desgarraba los tímpanos.",
						"vietnamese": "Một máy nén rác khổng lồ. Tiếng ầm ĩ của nó xé toạc màng nhĩ.",
						"thai": "เครื่องอัดขยะมหึมา เสียงคำรามนั้นบาดแก้วหู",
						"hindi": "एक विशाल कचरा संपीडक। उसकी गर्जना ने कान के परदे फाड़ दिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "dax",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "dax",
					"content": {
						"korean": "이 안에… 또 있어. 실종자들의 유품이.",
						"english": "Inside... there's more. The missing persons' keepsakes.",
						"japanese": "この中に…まだある。行方不明者たちの遺品が。",
						"chinese": "里面…还有。失踪者的遗物。",
						"french": "Dedans... il y en a encore. Les effets personnels des disparus.",
						"spanish": "Aquí dentro... hay más. Los objetos de los desaparecidos.",
						"vietnamese": "Bên trong... vẫn còn. Di vật của những người mất tích.",
						"thai": "ข้างในนี้... ยังมีอีก ของที่ระลึกของผู้สูญหาย",
						"hindi": "इसके अंदर... और भी हैं। लापता लोगों की अंतिम वस्तुएँ।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Ash… 대체 뭘 숨기고 있는 거야?",
						"english": "Ash... what exactly are you hiding?",
						"japanese": "アッシュ…一体何を隠しているんだ？",
						"chinese": "艾什…你到底在藏什么？",
						"french": "Ash... que caches-tu exactement ?",
						"spanish": "Ash... ¿qué estás escondiendo exactamente?",
						"vietnamese": "Ash... rốt cuộc mày đang giấu giếm điều gì?",
						"thai": "แอช... นายกำลังซ่อนอะไรอยู่กันแน่?",
						"hindi": "ऐश... आखिर तुम क्या छुपा रहे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Ash. 이 물건들, 어떻게 생각하지?",
						"english": "Ash. What do you make of these items?",
						"japanese": "アッシュ。この物たち、どう思う？",
						"chinese": "艾什。这些东西，你怎么看？",
						"french": "Ash. Que penses-tu de ces objets ?",
						"spanish": "Ash. ¿Qué opinas de estos objetos?",
						"vietnamese": "Ash. Mày nghĩ gì về những thứ này?",
						"thai": "แอช. นายคิดยังไงกับของพวกนี้?",
						"hindi": "ऐश। इन चीज़ों के बारे में तुम्हारा क्या ख़्याल है?"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "Ash는 묵묵히 손수레를 밀 뿐, 대답이 없었다.",
						"english": "Ash silently pushed the handcart, offering no reply.",
						"japanese": "アッシュは黙々と手押し車を押すだけで、答えはなかった。",
						"chinese": "艾什只是默默地推着手推车，没有回答。",
						"french": "Ash poussa silencieusement la charrette, sans réponse.",
						"spanish": "Ash solo empujó la carretilla en silencio, sin responder.",
						"vietnamese": "Ash chỉ im lặng đẩy xe đẩy, không trả lời.",
						"thai": "แอชเข็นรถเข็นอย่างเงียบๆ โดยไม่มีคำตอบ",
						"hindi": "ऐश ने चुपचाप ठेला धकेला, कोई जवाब नहीं दिया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 압축기의 소음도… 어딘가 이상해.",
						"english": "Even the noise from this compactor... feels off somehow.",
						"japanese": "この圧縮機の騒音も…どこかおかしい。",
						"chinese": "这台压缩机的噪音…也有些奇怪。",
						"french": "Le bruit de ce compacteur aussi... est étrange, d'une certaine manière.",
						"spanish": "Incluso el ruido de este compactador... es extraño de alguna manera.",
						"vietnamese": "Ngay cả tiếng ồn từ máy nén này... cũng có gì đó bất thường.",
						"thai": "แม้แต่เสียงของเครื่องอัดนี้... ก็ดูแปลกๆ",
						"hindi": "इस कंप्रेसर का शोर भी... कहीं न कहीं अजीब है।"
					},
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "마치… 고통받는 소리 같아.",
						"english": "It sounds like… a cry of pain.",
						"japanese": "まるで…苦しんでいる声のようだ。",
						"chinese": "听起来…像是痛苦的声音。",
						"french": "On dirait… un cri de douleur.",
						"spanish": "Parece… un sonido de sufrimiento.",
						"vietnamese": "Cứ như… tiếng kêu đau đớn.",
						"thai": "เหมือน…เสียงครวญครางด้วยความเจ็บปวด",
						"hindi": "यह… दर्दनाक आवाज़ जैसी लगती है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "dax",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 유품들은 사라진 사람들의 흔적이야. Ash, 당신이 모를 리 없어.",
						"english": "These mementos are traces of those who vanished. Ash, you must know that.",
						"japanese": "これらの遺品は、消えた人々の痕跡だ。アッシュ、知らないはずがない。",
						"chinese": "这些遗物是消失之人的痕迹。艾什，你不可能不知道。",
						"french": "Ces objets sont les traces de ceux qui ont disparu. Ash, tu ne peux pas l'ignorer.",
						"spanish": "Estos objetos son huellas de los desaparecidos. Ash, no puedes ignorarlo.",
						"vietnamese": "Những di vật này là dấu vết của những người đã biến mất. Ash, cô không thể không biết.",
						"thai": "ของที่ระลึกเหล่านี้คือร่องรอยของผู้ที่หายสาบสูญไป แอช เธอจะไม่มีทางไม่รู้เรื่องนี้",
						"hindi": "ये वस्तुएँ उन लोगों के निशान हैं जो गायब हो गए। ऐश, तुम इसे नहीं जान सकती।"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "Ash는 무표정하게 손수레 밑바닥의 기름 먹은 천을 걷어냈다.",
						"english": "Ash expressionlessly pulled back the oil-stained cloth at the bottom of the cart.",
						"japanese": "アッシュは無表情に、手押し車の底にある油まみれの布をめくった。",
						"chinese": "艾什面无表情地掀开了手推车底部沾满油污的布。",
						"french": "Ash, impassible, écarta le tissu imbibé d'huile au fond de la brouette.",
						"spanish": "Ash, sin expresión, retiró el paño manchado de aceite del fondo del carro.",
						"vietnamese": "Ash không chút biểu cảm, gạt tấm vải dính dầu dưới đáy xe cút kít ra.",
						"thai": "แอชเปิดผ้าเปื้อนน้ำมันที่ก้นรถเข็นออกอย่างไม่แสดงอารมณ์",
						"hindi": "ऐश ने भावहीन होकर ठेले के तल पर रखे तेल से सने कपड़े को हटा दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "저건… 압축기 제어 장치?",
						"english": "Is that… the compactor control unit?",
						"japanese": "あれは…圧縮機の制御装置か？",
						"chinese": "那是什么…压缩机控制装置？",
						"french": "C'est… l'unité de commande du compacteur ?",
						"spanish": "¿Eso es… la unidad de control del compactador?",
						"vietnamese": "Đó là… thiết bị điều khiển máy nén sao?",
						"thai": "นั่นมัน…แผงควบคุมเครื่องอัด?",
						"hindi": "वह… कंपैक्टर नियंत्रण इकाई है?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "압축기의 굉음이 더욱 커지며 팀원들을 짓눌렀다.",
						"english": "The roar of the compactor grew louder, pressing down on the team members.",
						"japanese": "圧縮機の轟音がさらに大きくなり、チームメンバーを押しつぶした。",
						"chinese": "压缩机的轰鸣声越来越大，压得队员们喘不过气来。",
						"french": "Le rugissement du compacteur s'intensifia, oppressant les membres de l'équipe.",
						"spanish": "El rugido del compactador se hizo más fuerte, oprimiendo a los miembros del equipo.",
						"vietnamese": "Tiếng gầm của máy nén càng lúc càng lớn, đè nặng lên các thành viên trong nhóm.",
						"thai": "เสียงคำรามของเครื่องอัดดังขึ้นอีก กดดันทีมงาน",
						"hindi": "कंपैक्टर की गर्जना और तेज़ हो गई, जिससे टीम के सदस्यों पर दबाव पड़ा।"
					},
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "dax",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이건 청소가 아니야. 살인이야!",
						"english": "This isn't cleaning. It's murder!",
						"japanese": "これは掃除じゃない。殺人だ！",
						"chinese": "这不是清理。这是谋杀！",
						"french": "Ce n'est pas un nettoyage. C'est un meurtre !",
						"spanish": "Esto no es limpieza. ¡Es asesinato!",
						"vietnamese": "Đây không phải là dọn dẹp. Đây là giết người!",
						"thai": "นี่ไม่ใช่การทำความสะอาด นี่มันฆาตกรรม!",
						"hindi": "यह सफ़ाई नहीं है। यह हत्या है!"
					},
					"speaker": "dax",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "Ash… 네가 꾸민 짓이야?",
						"english": "Ash… was this your doing?",
						"japanese": "アッシュ…お前が仕組んだのか？",
						"chinese": "艾什…是你搞的鬼吗？",
						"french": "Ash… c'est toi qui as fait ça ?",
						"spanish": "Ash… ¿fuiste tú quien lo hizo?",
						"vietnamese": "Ash… là cô giở trò sao?",
						"thai": "แอช…เธอเป็นคนทำเรื่องนี้ใช่ไหม?",
						"hindi": "ऐश… क्या यह तुम्हारा काम है?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "Ash의 눈빛이 싸늘하게 변했다. 압축기는 울부짖었다.",
						"english": "Ash's eyes turned cold. The compactor wailed.",
						"japanese": "アッシュの眼差しが冷酷に変わった。圧縮機が唸りを上げた。",
						"chinese": "艾什的眼神变得冰冷。压缩机咆哮着。",
						"french": "Le regard d'Ash devint glacial. Le compacteur hurlait.",
						"spanish": "La mirada de Ash se volvió fría. El compactador aulló.",
						"vietnamese": "Ánh mắt của Ash trở nên lạnh lẽo. Máy nén gầm lên.",
						"thai": "สายตาของแอชเย็นชาลง เครื่องอัดส่งเสียงคำราม",
						"hindi": "ऐश की आँखें ठंडी हो गईं। कंपैक्टर ने चीखना शुरू कर दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "젠장, 꼼짝없이 갇혔어!",
						"english": "Damn it, we're trapped!",
						"japanese": "くそっ、身動きが取れない！",
						"chinese": "该死，我们被困住了！",
						"french": "Mince, on est piégés !",
						"spanish": "¡Maldita sea, estamos atrapados!",
						"vietnamese": "Chết tiệt, chúng ta bị mắc kẹt rồi!",
						"thai": "บ้าเอ๊ย เราติดกับแล้ว!",
						"hindi": "धत् तेरे की, हम फँस गए हैं!"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "불필요한 잔해. 말끔히 사라져라.",
						"english": "Unnecessary debris. Vanish completely.",
						"japanese": "不要な残骸。きれいに消え失せろ。",
						"chinese": "不必要的残骸。彻底消失吧。",
						"french": "Débris inutiles. Disparaissez complètement.",
						"spanish": "Restos innecesarios. Desapareced por completo.",
						"vietnamese": "Mảnh vụn không cần thiết. Biến mất hoàn toàn đi.",
						"thai": "เศษซากที่ไม่จำเป็น. จงหายไปให้หมด.",
						"hindi": "अनावश्यक मलबा। पूरी तरह से गायब हो जाओ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "dax",
					"content": {
						"korean": "크윽… Ash… 절대 포기하지 않아.",
						"english": "Ugh… Ash… I'll never give up.",
						"japanese": "くっ…Ash…決して諦めない。",
						"chinese": "呃……Ash……我绝不放弃。",
						"french": "Argh… Ash… Je n'abandonnerai jamais.",
						"spanish": "Ugh… Ash… Nunca me rendiré.",
						"vietnamese": "Ư… Ash… Ta sẽ không bao giờ bỏ cuộc.",
						"thai": "อึก... Ash... ไม่มีวันยอมแพ้.",
						"hindi": "उह… ऐश… मैं कभी हार नहीं मानूंगा।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…끝이 아니다. 진정한 주인은… 아직.",
						"english": "...It's not over. The true master... not yet.",
						"japanese": "…終わりではない。真の主は…まだ。",
						"chinese": "……还没结束。真正的主人……还未出现。",
						"french": "…Ce n'est pas fini. Le vrai maître… pas encore.",
						"spanish": "…No ha terminado. El verdadero maestro… aún no.",
						"vietnamese": "…Chưa kết thúc. Chủ nhân thật sự… vẫn chưa.",
						"thai": "...ยังไม่จบ. นายท่านที่แท้จริง... ยังไม่มา.",
						"hindi": "...यह अंत नहीं है। असली मालिक... अभी नहीं।"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "진정한 주인? Ash… 네 배후가 누구지?",
						"english": "True master? Ash… Who's behind you?",
						"japanese": "真の主？Ash…お前の背後にいるのは誰だ？",
						"chinese": "真正的主人？Ash……你的幕后是谁？",
						"french": "Le vrai maître ? Ash… Qui est derrière toi ?",
						"spanish": "¿El verdadero maestro? Ash… ¿Quién está detrás de ti?",
						"vietnamese": "Chủ nhân thật sự? Ash… Ai đứng sau ngươi?",
						"thai": "นายท่านที่แท้จริง? Ash... ใครอยู่เบื้องหลังแก?",
						"hindi": "असली मालिक? ऐश… तुम्हारे पीछे कौन है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "도망쳤어! Ash를 추격해야 해.",
						"english": "Escaped! We must pursue Ash.",
						"japanese": "逃げた！Ashを追跡しなければ。",
						"chinese": "逃走了！我们必须追击Ash。",
						"french": "Il s'est échappé ! Nous devons poursuivre Ash.",
						"spanish": "¡Escapó! Debemos perseguir a Ash.",
						"vietnamese": "Hắn trốn rồi! Chúng ta phải truy đuổi Ash.",
						"thai": "หนีไปแล้ว! เราต้องตามล่า Ash.",
						"hindi": "भाग गया! हमें ऐश का पीछा करना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "쓰레기 압축기 너머. Ash의 그림자는 더 깊은 곳으로 사라졌다.",
						"english": "Beyond the trash compactor. Ash's shadow vanished into deeper reaches.",
						"japanese": "ゴミ圧縮機の向こう。Ashの影は、より深い場所へと消えた。",
						"chinese": "垃圾压缩机之外。Ash的影子消失在了更深处。",
						"french": "Au-delà du compacteur de déchets. L'ombre d'Ash s'est évanouie dans les profondeurs.",
						"spanish": "Más allá del compactador de basura. La sombra de Ash desapareció en las profundidades.",
						"vietnamese": "Vượt qua máy nén rác. Bóng của Ash biến mất vào sâu hơn.",
						"thai": "พ้นจากเครื่องอัดขยะ. เงาของ Ash หายไปสู่ส่วนที่ลึกกว่า.",
						"hindi": "कचरा कम्पैक्टर के उस पार। ऐश की परछाई और गहराई में गायब हो गई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "압축기 내부에서 거대한 그림자가 서서히 모습을 드러냈다.",
						"english": "Inside the compactor, a colossal shadow slowly emerged.",
						"japanese": "圧縮機の中から、巨大な影がゆっくりと姿を現した。",
						"chinese": "压缩机内部，一个巨大的黑影缓缓显现。",
						"french": "À l'intérieur du compacteur, une ombre colossale apparut lentement.",
						"spanish": "Dentro del compactador, una sombra colosal emergió lentamente.",
						"vietnamese": "Bên trong máy nén, một bóng đen khổng lồ từ từ xuất hiện.",
						"thai": "ภายในเครื่องอัด เงาขนาดมหึมาค่อยๆ ปรากฏขึ้น",
						"hindi": "कंपैक्टर के अंदर से, एक विशाल छाया धीरे-धीरे प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "새로운 오물… 처리한다.",
						"english": "New filth... Eliminate.",
						"japanese": "新たな汚物…処理する。",
						"chinese": "新的污秽……清除。",
						"french": "Nouvelle souillure… Éliminer.",
						"spanish": "Nueva inmundicia… Eliminar.",
						"vietnamese": "Dơ bẩn mới… Xử lý.",
						"thai": "ของเสียใหม่... กำจัด.",
						"hindi": "नई गंदगी... नष्ट करो।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이게 네가 말한 '청소'의 결과물인가, Ash?",
						"english": "Is this the 'cleanup' you spoke of, Ash?",
						"japanese": "これがあなたの言う「掃除」の結果か、Ash？",
						"chinese": "这就是你说的“清理”结果吗，Ash？",
						"french": "C'est ça le « nettoyage » dont tu parlais, Ash ?",
						"spanish": "¿Es este el resultado de tu «limpieza», Ash?",
						"vietnamese": "Đây là kết quả của việc 'dọn dẹp' mà ngươi nói sao, Ash?",
						"thai": "นี่คือผลลัพธ์ของ 'การทำความสะอาด' ที่แกพูดถึงเหรอ, Ash?",
						"hindi": "क्या यही है तुम्हारी बताई 'सफाई' का नतीजा, ऐश?"
					},
					"speaker": "dax"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "감히 우리를 처리하려고 해?",
						"english": "How dare you try to eliminate us?",
						"japanese": "よくも我々を処理しようとするな？",
						"chinese": "你竟敢试图清除我们？",
						"french": "Comment oses-tu essayer de nous éliminer ?",
						"spanish": "¿Cómo te atreves a intentar eliminarnos?",
						"vietnamese": "Ngươi dám định xử lý chúng ta sao?",
						"thai": "แกกล้าดียังไงมาคิดจะกำจัดพวกเรา?",
						"hindi": "तुम हमें खत्म करने की हिम्मत कैसे करते हो?"
					},
					"speaker": "character_any"
				}
			]
		}
	]
} as const;
