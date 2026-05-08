export const scenario_Noctis_V1_05 = {
	"scenario_id": "Noctis_V1_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"morwenna": {
			"id": "mon_82f9054d-97ba-44ea-b8d7-0e2c80d21321",
			"name": {
				"korean": "모르웨나",
				"english": "Morwenna",
				"japanese": "モルウェナ",
				"chinese": "莫尔温娜",
				"french": "Morwenna",
				"spanish": "Morwenna",
				"vietnamese": "Morwenna",
				"thai": "มอร์เวนนา",
				"hindi": "मोरवेन्ना"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/abecab2c-4365-4cc4-0731-3eaef1af5000/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/51bf170b-774b-49d8-ce97-d4e66bdea100/public"
		}
	},
	"boss": {
		"pool_id": "pool_080"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 문이 눈앞에 나타났다. 심연으로 가는 최후의 관문.",
						"english": "A colossal gate appeared before me. The final passage to the abyss.",
						"japanese": "巨大な扉が目の前に現れた。深淵へと続く最後の関門。",
						"chinese": "一扇巨大的门出现在眼前。通往深渊的最后一道关卡。",
						"french": "Une porte colossale apparut devant moi. Le passage final vers l'abîme.",
						"spanish": "Una puerta colosal apareció ante mí. El paso final hacia el abismo.",
						"vietnamese": "Một cánh cổng khổng lồ hiện ra trước mắt. Cổng cuối cùng dẫn đến vực sâu.",
						"thai": "ประตูบานมหึมาปรากฏขึ้นตรงหน้า ประตูด่านสุดท้ายสู่ห้วงลึก",
						"hindi": "एक विशाल द्वार मेरे सामने प्रकट हुआ। पाताल तक का अंतिम मार्ग।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "드디어… 도착했나.",
						"english": "Finally... have I arrived?",
						"japanese": "ついに… 着いたのか。",
						"chinese": "终于… 到了吗？",
						"french": "Enfin... suis-je arrivé ?",
						"spanish": "Finalmente... ¿he llegado?",
						"vietnamese": "Cuối cùng... đã đến rồi sao?",
						"thai": "ในที่สุด... ก็มาถึงแล้วสินะ",
						"hindi": "आखिरकार... क्या मैं आ गया?"
					}
				},
				{
					"spot": [
						5,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "boss",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "기다리고 있었습니다, 길 잃은 자들이여.",
						"english": "I've been waiting for you, lost ones.",
						"japanese": "お待ちしておりました、迷いし者たちよ。",
						"chinese": "我一直在等你们，迷失者们。",
						"french": "Je vous attendais, âmes perdues.",
						"spanish": "Os estaba esperando, almas perdidas.",
						"vietnamese": "Ta đã đợi các ngươi, những kẻ lạc lối.",
						"thai": "ข้าเฝ้ารอพวกเจ้าอยู่ ผู้หลงทางเอ๋ย",
						"hindi": "मैं तुम्हारा इंतजार कर रहा था, भटके हुए लोगों।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "이제 모든 것이 끝날 시간입니다.",
						"english": "Now, it's time for everything to end.",
						"japanese": "今こそ、全てを終わらせる時です。",
						"chinese": "现在，是时候结束这一切了。",
						"french": "Il est temps que tout prenne fin.",
						"spanish": "Ahora, es el momento de que todo termine.",
						"vietnamese": "Giờ là lúc mọi thứ kết thúc.",
						"thai": "บัดนี้ ถึงเวลาที่ทุกสิ่งจะสิ้นสุดลง",
						"hindi": "अब, सब कुछ खत्म होने का समय है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						1,
						2
					],
					"action": "enter",
					"speaker": "morwenna",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈춰요! 저 문은 함정이에요!",
						"english": "Stop! That door is a trap!",
						"japanese": "やめて！あの扉は罠です！",
						"chinese": "停下！那扇门是陷阱！",
						"french": "Arrêtez ! Cette porte est un piège !",
						"spanish": "¡Detente! ¡Esa puerta es una trampa!",
						"vietnamese": "Dừng lại! Cánh cửa đó là một cái bẫy!",
						"thai": "หยุดนะ! ประตูบานนั้นคือกับดัก!",
						"hindi": "रुको! वह दरवाजा एक जाल है!"
					},
					"emotion": "angry",
					"speaker": "morwenna"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "morwenna",
					"type": "direction",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "녹티스는 당신들을 인도하는 게 아니에요.",
						"english": "Noctis isn't guiding you.",
						"japanese": "ノクティスはあなたたちを導いているのではありません。",
						"chinese": "诺克提斯并没有指引你们。",
						"french": "Noctis ne vous guide pas.",
						"spanish": "Noctis no os está guiando.",
						"vietnamese": "Noctis không dẫn dắt các ngươi.",
						"thai": "น็อคติสไม่ได้นำทางพวกเจ้า",
						"hindi": "नोक्टिस तुम्हें रास्ता नहीं दिखा रहा है।"
					},
					"emotion": "sad",
					"speaker": "morwenna"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야.",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ。",
						"chinese": "你在说什么？",
						"french": "Que dites-vous ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "พูดอะไรน่ะ",
						"hindi": "तुम क्या कह रहे हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "당신들의 영혼을 노리는… 계약의 신이라고요!",
						"english": "He's the God of Contracts... aiming for your souls!",
						"japanese": "彼らの魂を狙う…契約の神だ！",
						"chinese": "他觊觎你们的灵魂……是契约之神！",
						"french": "C'est le Dieu des Contrats... qui convoite vos âmes !",
						"spanish": "¡Es el Dios de los Contratos... que busca vuestras almas!",
						"vietnamese": "Hắn là Thần Khế Ước... đang nhắm vào linh hồn các ngươi!",
						"thai": "เขาคือเทพแห่งพันธสัญญา... ผู้หมายจะเอาดวงวิญญาณของพวกเจ้า!",
						"hindi": "वह अनुबंधों का देवता है... तुम्हारी आत्माओं को निशाना बना रहा है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "morwenna"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어디선가 깃펜이 종이에 글을 쓰는 소리가 들렸다. 환청이라고 생각했다.",
						"english": "Somewhere, the sound of a quill writing on paper was heard. I thought it was a hallucination.",
						"japanese": "どこからか、羽ペンが紙に書く音が聞こえた。幻聴だと思った。",
						"chinese": "不知从何处传来羽毛笔在纸上书写的声音。我以为那是幻觉。",
						"french": "Quelque part, le son d'une plume écrivant sur du papier se fit entendre. Je crus à une hallucination.",
						"spanish": "En algún lugar, se escuchó el sonido de una pluma escribiendo en papel. Pensé que era una alucinación.",
						"vietnamese": "Từ đâu đó, nghe thấy tiếng bút lông viết trên giấy. Tôi cứ ngỡ là ảo giác.",
						"thai": "มีเสียงปากกาขนนกกำลังเขียนลงบนกระดาษดังขึ้นจากที่ใดที่หนึ่ง ฉันคิดว่าเป็นเพียงภาพหลอน",
						"hindi": "कहीं से, कागज पर कलम लिखने की आवाज सुनाई दी। मैंने सोचा कि यह एक मतिभ्रम है।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "morwenna",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"speaker": "morwenna",
					"type": "speech",
					"content": {
						"korean": "녹티스의 등불을 자세히 봐요!",
						"english": "Look closely at Noctis's lantern!",
						"japanese": "ノクティスのランタンをよく見て！",
						"chinese": "仔细看看诺克提斯的灯笼！",
						"french": "Regardez attentivement la lanterne de Noctis !",
						"spanish": "¡Mira de cerca la linterna de Noctis!",
						"vietnamese": "Hãy nhìn kỹ chiếc đèn lồng của Noctis!",
						"thai": "มองดูตะเกียงของน็อคติสให้ดี!",
						"hindi": "नोक्टिस के लालटेन को ध्यान से देखो!"
					}
				},
				{
					"content": {
						"korean": "등불…?",
						"english": "A lantern...?",
						"japanese": "ランタン…？",
						"chinese": "灯笼……？",
						"french": "Une lanterne...?",
						"spanish": "¿Una linterna...?",
						"vietnamese": "Đèn lồng...?",
						"thai": "ตะเกียง...?",
						"hindi": "एक लालटेन...?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "녹티스의 등불 안에는 푸른 불꽃이 흔들린다. 가까이서 보면, 그것은 작은 사람 형상을 닮은 영혼들이다.",
						"english": "Inside Noctis's lantern, a blue flame flickers. Up close, they are souls resembling small human figures.",
						"japanese": "ノクティスのランタンの中では、青い炎が揺らめいている。近くで見ると、それは小さな人型に似た魂たちだ。",
						"chinese": "诺克提斯的灯笼里，蓝色的火焰摇曳着。凑近一看，那是像小人形态的灵魂。",
						"french": "À l'intérieur de la lanterne de Noctis, une flamme bleue vacille. De près, ce sont des âmes ressemblant à de petites figures humaines.",
						"spanish": "Dentro de la linterna de Noctis, una llama azul parpadea. De cerca, son almas que se asemejan a pequeñas figuras humanas.",
						"vietnamese": "Bên trong chiếc đèn lồng của Noctis, một ngọn lửa xanh lam lung linh. Nhìn gần, chúng là những linh hồn giống hình người nhỏ bé.",
						"thai": "ภายในตะเกียงของน็อคติส เปลวไฟสีน้ำเงินสั่นไหว เมื่อมองใกล้ๆ มันคือดวงวิญญาณที่มีรูปร่างคล้ายคนตัวเล็กๆ",
						"hindi": "नोक्टिस के लालटेन के अंदर, एक नीली लौ टिमटिमाती है। करीब से देखने पर, वे छोटे मानव आकृतियों जैसे आत्माएं हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "morwenna",
					"content": {
						"korean": "모두 녹티스와 계약했던 자들의 그림자예요!",
						"english": "They're all shadows of those who made pacts with Noctis!",
						"japanese": "あれは全て、ノクティスと契約を交わした者たちの影です！",
						"chinese": "他们都是与诺克提斯签订契约之人的影子！",
						"french": "Ce sont toutes les ombres de ceux qui ont contracté avec Noctis !",
						"spanish": "¡Son todas las sombras de quienes hicieron pactos con Noctis!",
						"vietnamese": "Họ đều là những bóng ma của những kẻ đã ký giao ước với Noctis!",
						"thai": "พวกมันคือเงาของผู้ที่ทำสัญญากับน็อกทิส!",
						"hindi": "ये सब उन लोगों की परछाइयां हैं जिन्होंने नॉक्टिस से समझौता किया था!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…설마.",
						"english": "...No way.",
						"japanese": "…まさか。",
						"chinese": "……不会吧。",
						"french": "...Impossible.",
						"spanish": "...No puede ser.",
						"vietnamese": "...Không thể nào.",
						"thai": "...ไม่จริงน่า.",
						"hindi": "...कहीं ऐसा तो नहीं।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "morwenna",
					"type": "direction",
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "angry",
					"speaker": "morwenna",
					"content": {
						"korean": "더 이상은 안 돼요! 돌아가요!",
						"english": "No more! Go back!",
						"japanese": "もうこれ以上は駄目です！戻りましょう！",
						"chinese": "不能再这样下去了！回去！",
						"french": "Pas plus ! Retournez !",
						"spanish": "¡No más! ¡Vuelvan!",
						"vietnamese": "Không thể nữa rồi! Quay lại đi!",
						"thai": "ไม่ไหวแล้ว! กลับไปเถอะ!",
						"hindi": "अब और नहीं! वापस जाओ!"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "돌아갈 곳이 없어…",
						"english": "Nowhere to go back to...",
						"japanese": "戻る場所なんてない…",
						"chinese": "无路可退……",
						"french": "Plus nulle part où retourner...",
						"spanish": "No hay adonde volver...",
						"vietnamese": "Không còn nơi nào để quay về...",
						"thai": "ไม่มีที่ให้กลับไป...",
						"hindi": "लौटने की कोई जगह नहीं..."
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "탐험대가 솔직하게 답할수록 멀리서 종소리가 가까워졌다.",
						"english": "The more honestly the expedition team answered, the closer the bell sound drew from afar.",
						"japanese": "探検隊が正直に答えるほど、遠くから鐘の音が近づいてきた。",
						"chinese": "探险队回答得越诚实，远处的钟声就越发逼近。",
						"french": "Plus l'équipe d'expédition répondait honnêtement, plus le son de la cloche se rapprochait de loin.",
						"spanish": "Cuanto más honestamente respondía el equipo de expedición, más cerca sonaban las campanas desde lejos.",
						"vietnamese": "Đoàn thám hiểm càng trả lời thật lòng, tiếng chuông từ xa càng vọng đến gần hơn.",
						"thai": "ยิ่งคณะสำรวจตอบอย่างซื่อสัตย์เท่าไหร่ เสียงระฆังจากที่ไกลก็ยิ่งดังใกล้เข้ามาเท่านั้น",
						"hindi": "जैसे-जैसे अभियान दल अधिक ईमानदारी से जवाब देता गया, दूर से घंटी की आवाज करीब आती गई।"
					}
				},
				{
					"speaker": "boss",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "진실의 무게가 종을 울린다고 제가 말씀드렸죠.",
						"english": "I told you, the weight of truth rings the bell.",
						"japanese": "真実の重みが鐘を鳴らすと、私が言ったでしょう。",
						"chinese": "我告诉过你，真相的分量会敲响钟声。",
						"french": "Je vous l'ai dit, le poids de la vérité fait sonner la cloche.",
						"spanish": "Ya les dije, el peso de la verdad hace sonar la campana.",
						"vietnamese": "Tôi đã nói với các người rồi, sức nặng của sự thật sẽ làm chuông rung lên.",
						"thai": "ฉันบอกแล้วไงว่าน้ำหนักของความจริงจะทำให้ระฆังดังขึ้น",
						"hindi": "मैंने तुमसे कहा था, सच का वजन घंटी बजाता है।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "morwenna",
					"content": {
						"korean": "그 종소리는… 계약이 성사된다는 신호예요! 도망쳐요!",
						"english": "That bell sound... it's a sign a pact is being made! Run!",
						"japanese": "あの鐘の音は…契約が成立する合図です！逃げてください！",
						"chinese": "那钟声……是契约达成的信号！快逃！",
						"french": "Ce son de cloche... c'est un signe qu'un pacte est conclu ! Fuyez !",
						"spanish": "Ese sonido de campana... ¡es una señal de que se está haciendo un pacto! ¡Corran!",
						"vietnamese": "Tiếng chuông đó... là dấu hiệu của một giao ước đang được thực hiện! Chạy đi!",
						"thai": "เสียงระฆังนั่น... เป็นสัญญาณว่ากำลังมีการทำสัญญา! หนีไป!",
						"hindi": "वह घंटी की आवाज... यह एक संकेत है कि एक समझौता हो रहा है! भागो!"
					},
					"type": "speech"
				},
				{
					"speaker": "morwenna",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "거대한 문이 천천히 열렸다. 그 너머에는 — 아무것도 없었다. 오직 끝없는 낭떠러지뿐.",
						"english": "The colossal gate slowly opened. Beyond it—there was nothing. Only an endless chasm.",
						"japanese": "巨大な門がゆっくりと開いた。その向こうには—何もなかった。ただ、終わりなき奈落だけが広がっていた。",
						"chinese": "巨大的门缓缓打开。门后——空无一物。唯有无尽的深渊。",
						"french": "L'immense porte s'ouvrit lentement. Au-delà—il n'y avait rien. Seulement un gouffre sans fin.",
						"spanish": "La gigantesca puerta se abrió lentamente. Más allá, no había nada. Solo un abismo sin fin.",
						"vietnamese": "Cánh cổng khổng lồ từ từ mở ra. Phía sau nó — không có gì cả. Chỉ là một vực thẳm vô tận.",
						"thai": "ประตูบานมหึมาค่อยๆ เปิดออก เบื้องหลังนั้น—ไม่มีอะไรเลย มีแต่เหวอันไร้ที่สิ้นสุด",
						"hindi": "विशाल द्वार धीरे-धीरे खुला। उसके पार—कुछ भी नहीं था। केवल एक अंतहीन खाई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…낭떠러지?",
						"english": "...A chasm?",
						"japanese": "…奈落？",
						"chinese": "……深渊？",
						"french": "...Un gouffre ?",
						"spanish": "...¿Un abismo?",
						"vietnamese": "...Vực thẳm?",
						"thai": "...เหว?",
						"hindi": "...खाई?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "드디어, 이 순간이 왔군요.",
						"english": "Finally, this moment has arrived.",
						"japanese": "ついに、この瞬間が来ましたね。",
						"chinese": "终于，这一刻到来了。",
						"french": "Enfin, ce moment est arrivé.",
						"spanish": "Finalmente, este momento ha llegado.",
						"vietnamese": "Cuối cùng, khoảnh khắc này cũng đã đến.",
						"thai": "ในที่สุด เวลานี้ก็มาถึงแล้ว",
						"hindi": "आखिरकार, यह पल आ गया।"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "스스로 죄를 인정하였으므로, 영혼의 소유권은 심연에 귀속됩니다.",
						"english": "Since you've admitted your guilt, ownership of your soul falls to the Abyss.",
						"japanese": "自ら罪を認めたため、魂の所有権は深淵に帰属します。",
						"chinese": "既然你已认罪，灵魂的所有权将归深渊所有。",
						"french": "Puisque vous avez avoué votre culpabilité, la propriété de votre âme revient aux Abysses.",
						"spanish": "Ya que has admitido tu culpa, la posesión de tu alma pertenece al Abismo.",
						"vietnamese": "Vì ngươi đã thú nhận tội lỗi, quyền sở hữu linh hồn sẽ thuộc về Vực Sâu.",
						"thai": "ในเมื่อเจ้าสารภาพบาปแล้ว กรรมสิทธิ์ในวิญญาณของเจ้าจึงเป็นของห้วงอเวจี",
						"hindi": "चूँकि तुमने अपना अपराध स्वीकार कर लिया है, तुम्हारी आत्मा का स्वामित्व पाताल लोक को जाता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "녹티스가 계약서를 펼쳤다. 그 안에는 탐험대가 했던 모든 대답이 적혀 있었다.",
						"english": "Noctis unfurled the contract. It contained every answer the expedition team had given.",
						"japanese": "ノクティスは契約書を広げた。そこには探検隊が答えたすべての内容が記されていた。",
						"chinese": "诺克提斯展开了契约书。上面记录了探险队的所有回答。",
						"french": "Noctis déroula le contrat. Il contenait toutes les réponses données par l'équipe d'exploration.",
						"spanish": "Noctis desplegó el contrato. En él estaban escritas todas las respuestas que el equipo de expedición había dado.",
						"vietnamese": "Noctis mở hợp đồng ra. Trong đó ghi lại tất cả các câu trả lời mà đội thám hiểm đã đưa ra.",
						"thai": "น็อกทิสคลี่สัญญาออก ในนั้นบันทึกคำตอบทั้งหมดที่ทีมสำรวจเคยให้ไว้",
						"hindi": "नोक्टिस ने अनुबंध पत्र फैलाया। उसमें अभियान दल के हर जवाब दर्ज थे।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "그 순간, 파티원의 그림자가 바닥에서 분리되어 녹티스의 저울 위로 올라갔다.",
						"english": "In that instant, a party member's shadow detached from the floor and ascended onto Noctis's scales.",
						"japanese": "その瞬間、パーティメンバーの影が床から分離し、ノクティスの天秤の上に上がった。",
						"chinese": "那一刻，队员的影子从地上分离，升到了诺克提斯的秤上。",
						"french": "À cet instant, l'ombre d'un membre du groupe se sépara du sol et monta sur la balance de Noctis.",
						"spanish": "En ese instante, la sombra de un miembro del grupo se separó del suelo y subió a la balanza de Noctis.",
						"vietnamese": "Khoảnh khắc đó, bóng của một thành viên trong nhóm tách khỏi sàn và bay lên cân của Noctis.",
						"thai": "ในพริบตานั้น เงาของสมาชิกพรรคพวกก็หลุดออกจากพื้นและลอยขึ้นไปอยู่บนตาชั่งของน็อกทิส",
						"hindi": "उसी पल, एक पार्टी सदस्य की परछाई फर्श से अलग होकर नोक्टिस के तराजू पर चढ़ गई।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "내 그림자가…?! 거짓말…!",
						"english": "My shadow...?! Impossible...!",
						"japanese": "私の影が…？！嘘だ…！",
						"chinese": "我的影子…？！骗人的…！",
						"french": "Mon ombre… ?! C'est pas vrai… !",
						"spanish": "¡¿Mi sombra…?! ¡Mentira…!",
						"vietnamese": "Bóng của ta…?! Không thể nào…!",
						"thai": "เงาของฉัน…?! โกหกน่า…!",
						"hindi": "मेरी परछाई…?! झूठ…!"
					}
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "자, 진정한 재판을 시작할 시간입니다.",
						"english": "Now, it's time to begin the true trial.",
						"japanese": "さあ、真の審判を始める時間です。",
						"chinese": "好了，是时候开始真正的审判了。",
						"french": "Bien, il est temps de commencer le véritable procès.",
						"spanish": "Ahora, es hora de comenzar el verdadero juicio.",
						"vietnamese": "Được rồi, đã đến lúc bắt đầu phiên xét xử thực sự.",
						"thai": "ได้เวลาเริ่มการพิพากษาที่แท้จริงแล้ว",
						"hindi": "तो, अब असली सुनवाई शुरू करने का समय है।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니.",
						"english": "Ugh… Is this all you've got?",
						"japanese": "くっ…この程度とはな。",
						"chinese": "呃… 就这点程度吗？",
						"french": "Urgh… Seulement ça ?",
						"spanish": "Ugh… ¿Solo esto?",
						"vietnamese": "Khụ… Chỉ đến mức này thôi sao.",
						"thai": "อึก… แค่นี้เองรึ",
						"hindi": "उफ़… बस इतना ही?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 기억하십시오. 심연은… 끝이 없습니다.",
						"english": "But… remember this. The Abyss… is endless.",
						"japanese": "だが…覚えておけ。深淵は…終わりがない。",
						"chinese": "但是…记住。深渊…永无止境。",
						"french": "Mais… souvenez-vous. Les Abysses… sont sans fin.",
						"spanish": "Pero… recordad. El Abismo… es infinito.",
						"vietnamese": "Nhưng… hãy nhớ. Vực Sâu… là vô tận.",
						"thai": "แต่… จงจำไว้ ห้วงอเวจีนั้น… ไร้จุดสิ้นสุด",
						"hindi": "परंतु… याद रखना। पाताल लोक… अनंत है।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "녹티스…!",
						"english": "Noctis…!",
						"japanese": "ノクティス…！",
						"chinese": "诺克提斯…！",
						"french": "Noctis… !",
						"spanish": "¡Noctis…!",
						"vietnamese": "Noctis…!",
						"thai": "น็อกทิส…!",
						"hindi": "नोक्टिस…!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "녹티스는 사라졌다. 그러나 저울 위의 그림자는 꿈틀거리고 있었다.",
						"english": "Noctis vanished. But the shadow on the scales was wriggling.",
						"japanese": "ノクティスは消え去った。しかし、天秤の上の影は蠢いていた。",
						"chinese": "诺克提斯消失了。然而，秤上的影子却在蠕动着。",
						"french": "Noctis disparut. Mais l'ombre sur la balance frémissait.",
						"spanish": "Noctis desapareció. Pero la sombra en la balanza se retorcía.",
						"vietnamese": "Noctis biến mất. Nhưng cái bóng trên cân vẫn đang cựa quậy.",
						"thai": "น็อกทิสหายตัวไป แต่เงาบนตาชั่งกลับกำลังบิดตัว",
						"hindi": "नोक्टिस गायब हो गया। पर तराजू पर की परछाई कुलबुला रही थी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "심연은 영혼의 무게를 기억한다. 이 승리는… 과연 끝일까?",
						"english": "The Abyss remembers the weight of souls. Is this victory… truly the end?",
						"japanese": "深淵は魂の重さを記憶している。この勝利は…果たして終わりなのだろうか？",
						"chinese": "深渊铭记着灵魂的重量。这场胜利…果真是结束吗？",
						"french": "Les Abysses se souviennent du poids des âmes. Cette victoire… est-elle vraiment la fin ?",
						"spanish": "El Abismo recuerda el peso de las almas. ¿Es esta victoria… realmente el final?",
						"vietnamese": "Vực Sâu ghi nhớ trọng lượng của linh hồn. Liệu chiến thắng này… có thực sự là kết thúc?",
						"thai": "ห้วงอเวจีจดจำน้ำหนักของวิญญาณได้ ชัยชนะครั้งนี้… จะเป็นจุดสิ้นสุดจริงๆ หรือไม่?",
						"hindi": "पाताल लोक आत्माओं का वज़न याद रखता है। क्या यह जीत… सचमुच अंत है?"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 결국, 죄의 무게는 심연으로 인도하는 법.",
						"english": "Fools. In the end, the weight of sin leads to the abyss.",
						"japanese": "愚かな者たち。結局、罪の重さは深淵へと導くものだ。",
						"chinese": "愚蠢之人。终究，罪孽之重将引向深渊。",
						"french": "Fous. Au final, le poids du péché mène à l'abîme.",
						"spanish": "Necios. Al final, el peso del pecado conduce al abismo.",
						"vietnamese": "Những kẻ ngu ngốc. Rốt cuộc, gánh nặng tội lỗi sẽ dẫn lối đến vực thẳm.",
						"thai": "พวกโง่เขลา สุดท้ายแล้ว ภาระบาปจะนำพาสู่ห้วงลึก",
						"hindi": "मूर्ख। अंततः, पाप का बोझ रसातल की ओर ले जाता है。"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "탐험대의 그림자는 저울 위에서 빛을 잃었다.",
						"english": "The expedition's shadow lost its light on the scales.",
						"japanese": "探検隊の影は天秤の上で光を失った。",
						"chinese": "探险队的阴影在天平上失去了光芒。",
						"french": "L'ombre de l'expédition a perdu sa lumière sur la balance.",
						"spanish": "La sombra de la expedición perdió su luz en la balanza.",
						"vietnamese": "Bóng tối của đoàn thám hiểm đã mất đi ánh sáng trên cán cân.",
						"thai": "เงาของคณะสำรวจสิ้นแสงบนตาชั่ง",
						"hindi": "अभian की छाया ने तराजू पर अपनी चमक खो दी।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Aún no… ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"심연의 문은 닫혔다. 하지만 그림자는 돌아오지 않았다.",
			"녹티스는 사라졌다. 그의 저울도, 계약서도 함께.",
			"구원이었을까. 아니면, 또 다른 침해였을까.",
			"알 수 없었다. 다만, 그 씁쓸한 여운만이 남았다."
		],
		"english": [
			"The Gate of the Abyss closed. But the shadows did not return.",
			"Noctis vanished. His scales and contract along with him.",
			"Was it salvation? Or another transgression?",
			"It was unknown. Only a bitter aftertaste remained."
		],
		"japanese": [
			"深淵の扉は閉ざされた。しかし、影は戻らなかった。",
			"ノクティスは消えた。彼の天秤も、契約書もろとも。",
			"それは救済だったのか。あるいは、また別の侵害だったのか。",
			"知る由もなかった。ただ、その苦い余韻だけが残った。"
		],
		"chinese": [
			"深渊之门关闭了。但阴影并未归来。",
			"诺克提斯消失了。他的天平，还有契约书，都一同消失了。",
			"那是救赎吗？抑或是，另一次侵犯？",
			"无人知晓。唯有那苦涩的余韵。"
		],
		"french": [
			"La Porte de l'Abîme se ferma. Mais les ombres ne revinrent pas.",
			"Noctis disparut. Sa balance et son contrat avec lui.",
			"Était-ce le salut ? Ou une autre transgression ?",
			"C'était inconnu. Seul un arrière-goût amer subsistait."
		],
		"spanish": [
			"La Puerta del Abismo se cerró. Pero las sombras no regresaron.",
			"Noctis desapareció. Sus balanzas y su contrato con él.",
			"¿Fue la salvación? ¿O fue otra transgresión?",
			"Era desconocido. Solo quedó un regusto amargo."
		],
		"vietnamese": [
			"Cánh Cổng Vực Sâu đã đóng lại. Nhưng những bóng tối không quay trở lại.",
			"Noctis biến mất. Cùng với cân và hợp đồng của hắn.",
			"Đó có phải là sự cứu rỗi? Hay một sự xâm phạm khác?",
			"Không thể biết được. Chỉ còn lại dư vị đắng chát."
		],
		"thai": [
			"ประตูแห่งห้วงลึกปิดลง ทว่าเงามืดมิได้กลับมา",
			"น็อกทิสหายไป ตาชั่งของเขาและสัญญาด้วย",
			"นั่นคือการไถ่บาปหรือเปล่า? หรือเป็นการล่วงละเมิดอีกครั้งกันแน่?",
			"ไม่อาจทราบได้ เพียงแต่เหลือไว้ซึ่งรสขมขื่น"
		],
		"hindi": [
			"पाताल का द्वार बंद हो गया। लेकिन परछाइयाँ वापस नहीं लौटीं।",
			"नॉक्टिस गायब हो गया। उसके तराजू और अनुबंध भी।",
			"क्या यह मोक्ष था? या एक और उल्लंघन?",
			"यह अज्ञात था। बस एक कड़वा अहसास बाकी रह गया।"
		]
	},
	"prologue": {
		"korean": [
			"최후의 문.",
			"재판관 녹티스의 자비로운 안내 아래, 우리는 모든 질문에 답했다.",
			"진실은 점점 가까워졌지만 —",
			"그것은 영혼을 심연으로 인도하는 잔인한 계약이었다."
		],
		"english": [
			"The Final Gate.",
			"Under the benevolent guidance of Judge Noctis, we answered all questions.",
			"The truth drew ever closer —",
			"It was a cruel contract, leading souls to the abyss."
		],
		"japanese": [
			"最後の扉。",
			"審判官ノクティスの慈悲深い導きの下、我々は全ての問いに答えた。",
			"真実は刻一刻と近づいたが —",
			"それは魂を深淵へと導く、残酷な契約だった。"
		],
		"chinese": [
			"最后的门。",
			"在审判官诺克提斯仁慈的指引下，我们回答了所有问题。",
			"真相越来越近，然而 —",
			"那是一份残酷的契约，将灵魂引向深渊。"
		],
		"french": [
			"La Porte Finale.",
			"Sous la bienveillante guidance du Juge Noctis, nous avons répondu à toutes les questions.",
			"La vérité se rapprochait de plus en plus —",
			"C'était un contrat cruel, menant les âmes vers l'abîme."
		],
		"spanish": [
			"La Puerta Final.",
			"Bajo la benevolente guía del Juez Noctis, respondimos a todas las preguntas.",
			"La verdad se acercaba cada vez más —",
			"Era un contrato cruel, que llevaba las almas al abismo."
		],
		"vietnamese": [
			"Cánh Cổng Cuối Cùng.",
			"Dưới sự dẫn dắt nhân từ của Thẩm phán Noctis, chúng tôi đã trả lời mọi câu hỏi.",
			"Sự thật ngày càng gần hơn —",
			"Đó là một giao ước tàn nhẫn, dẫn dắt linh hồn đến vực sâu."
		],
		"thai": [
			"ประตูบานสุดท้าย",
			"ภายใต้การนำทางอันเมตตาของผู้ตัดสินน็อกทิส เราได้ตอบทุกคำถาม",
			"ความจริงใกล้เข้ามาทุกที —",
			"มันเป็นสัญญาทารุณ ที่นำพาดวงวิญญาณสู่ห้วงลึก"
		],
		"hindi": [
			"अंतिम द्वार।",
			"न्यायाधीश नॉक्टिस के परोपकारी मार्गदर्शन में, हमने सभी प्रश्नों का उत्तर दिया।",
			"सत्य और निकट आता गया —",
			"यह एक क्रूर अनुबंध था, जो आत्माओं को पाताल में ले जाता था।"
		]
	}
} as const;
