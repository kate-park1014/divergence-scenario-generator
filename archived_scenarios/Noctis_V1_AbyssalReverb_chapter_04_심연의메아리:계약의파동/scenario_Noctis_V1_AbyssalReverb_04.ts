export const scenario_Noctis_V1_AbyssalReverb_04 = {
	"scenario_id": "Noctis_V1_AbyssalReverb_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"char": {
			"id": "mon_b67c6c4a-6263-4db5-8f14-59d0a906a3fc",
			"name": {
				"korean": "캐릭터",
				"english": "Char",
				"japanese": "キャラクター",
				"chinese": "角色",
				"french": "Personnage",
				"spanish": "Personaje",
				"vietnamese": "Nhân vật",
				"thai": "ตัวละคร",
				"hindi": "चरित्र"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81f44415-b42f-499c-e22b-183f8663dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a1c5b19a-a5b5-40d2-e5b1-7a4f81abb700/public"
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
						"korean": "심연과 현실의 경계가 무너진 공간. 모든 것이 뒤틀려 있었다.",
						"english": "A space where the boundary between the abyss and reality collapsed. Everything was distorted.",
						"japanese": "深淵と現実の境界が崩壊した空間。すべてが歪んでいた。",
						"chinese": "深渊与现实的边界崩塌的空间。一切都扭曲了。",
						"french": "Un espace où la frontière entre l'abîme et la réalité s'est effondrée. Tout était déformé.",
						"spanish": "Un espacio donde el límite entre el abismo y la realidad se derrumbó. Todo estaba distorsionado.",
						"vietnamese": "Một không gian nơi ranh giới giữa vực sâu và thực tại sụp đổ. Mọi thứ đều méo mó.",
						"thai": "พื้นที่ที่ขอบเขตระหว่างห้วงอเวจีและความเป็นจริงพังทลาย ทุกสิ่งบิดเบี้ยวไปหมด",
						"hindi": "एक ऐसी जगह जहाँ पाताल और वास्तविकता के बीच की सीमा ढह गई। सब कुछ विकृत था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기가… 뭐야?",
						"english": "What… is this place?",
						"japanese": "ここ…はどこだ？",
						"chinese": "这里……是什么地方？",
						"french": "Qu'est-ce que… cet endroit ?",
						"spanish": "¿Qué… es este lugar?",
						"vietnamese": "Đây là… đâu?",
						"thai": "ที่นี่... คืออะไร?",
						"hindi": "यह… क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						2,
						3
					],
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…왔군. 균형의 진짜 의미를 찾는 자들.",
						"english": "...You've come. Those who seek the true meaning of Balance.",
						"japanese": "…来たな。均衡の真の意味を探す者たちよ。",
						"chinese": "……你们来了。那些寻找平衡真正含义的人。",
						"french": "...Vous êtes venus. Ceux qui cherchent le vrai sens de l'Équilibre.",
						"spanish": "...Habéis llegado. Aquellos que buscan el verdadero significado del Equilibrio.",
						"vietnamese": "…Ngươi đã đến. Những kẻ tìm kiếm ý nghĩa thực sự của Cân bằng.",
						"thai": "...มาถึงแล้วสินะ ผู้ที่แสวงหาความหมายที่แท้จริงของสมดุล",
						"hindi": "...तुम आ गए। संतुलन का वास्तविक अर्थ खोजने वाले।"
					},
					"speaker": "char",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "당신은 누구야?",
						"english": "Who are you?",
						"japanese": "あなたは何者だ？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Ngươi là ai?",
						"thai": "ท่านคือใคร?",
						"hindi": "तुम कौन हो?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "char",
					"emotion": "base",
					"content": {
						"korean": "나는 샤르. 뒤틀린 진실을 비추는 거울.",
						"english": "I am Shar. The mirror reflecting twisted truths.",
						"japanese": "私はシャール。歪んだ真実を映す鏡。",
						"chinese": "我是沙尔。映照扭曲真相的镜子。",
						"french": "Je suis Shar. Le miroir reflétant les vérités tordues.",
						"spanish": "Soy Shar. El espejo que refleja verdades retorcidas.",
						"vietnamese": "Ta là Shar. Tấm gương phản chiếu những sự thật méo mó.",
						"thai": "ฉันคือชาร์ กระจกที่สะท้อนความจริงอันบิดเบี้ยว",
						"hindi": "मैं शार हूँ। विकृत सच्चाइयों को दर्शाने वाला दर्पण।"
					}
				},
				{
					"speaker": "char",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "녹티스가 원하는 '균형'은… 네 생각과 다를 거야.",
						"english": "The 'Balance' Noctis desires... will be different from what you imagine.",
						"japanese": "ノクティスが望む「均衡」は…君の想像とは違うだろう。",
						"chinese": "诺克提斯想要的‘平衡’……会与你想象的不同。",
						"french": "L'« Équilibre » que Noctis désire... sera différent de ce que tu imagines.",
						"spanish": "El 'Equilibrio' que Noctis desea... será diferente a lo que imaginas.",
						"vietnamese": "'Cân bằng' mà Noctis mong muốn... sẽ khác với những gì ngươi nghĩ.",
						"thai": "'สมดุล' ที่น็อกทิสปรารถนา... คงจะแตกต่างจากที่เจ้าคิด",
						"hindi": "नोक्टिस को जो 'संतुलन' चाहिए... वह तुम्हारी सोच से अलग होगा।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "char",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모든 계약에는 숨겨진 조항이 있지. 신과의 계약조차도.",
						"english": "Every contract has hidden clauses. Even those with gods.",
						"japanese": "全ての契約には隠された条項がある。神との契約でさえも。",
						"chinese": "所有契约都有隐藏条款。甚至与神的契约也是如此。",
						"french": "Chaque contrat a ses clauses cachées. Même ceux avec les dieux.",
						"spanish": "Todo contrato tiene cláusulas ocultas. Incluso los hechos con dioses.",
						"vietnamese": "Mỗi hợp đồng đều có điều khoản ẩn. Ngay cả những hợp đồng với các vị thần.",
						"thai": "ทุกสัญญาซ่อนเงื่อนไขไว้ แม้แต่สัญญากับเทพเจ้าก็ตาม",
						"hindi": "हर अनुबंध में छिपी शर्तें होती हैं। देवताओं के साथ भी।"
					},
					"speaker": "char",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 녹티스와 무슨 상관인데?",
						"english": "What does that have to do with Noctis?",
						"japanese": "それがノクティスと何の関係があるの？",
						"chinese": "这和诺克提斯有什么关系？",
						"french": "Quel est le rapport avec Noctis ?",
						"spanish": "¿Qué tiene que ver eso con Noctis?",
						"vietnamese": "Điều đó liên quan gì đến Noctis?",
						"thai": "นั่นเกี่ยวกับน็อกติสยังไง?",
						"hindi": "इसका नॉक्टिस से क्या लेना-देना है?"
					}
				},
				{
					"content": {
						"korean": "너희가 바라는 구원, 녹티스가 말하는 '균형'… 그 대가는 너무 커.",
						"english": "The salvation you seek, Noctis's 'balance'... the price is too high.",
						"japanese": "お前たちが望む救済、ノクティスが語る『均衡』…その代償はあまりにも大きい。",
						"chinese": "你们所渴望的救赎，诺克提斯所说的“平衡”…代价太大了。",
						"french": "Le salut que vous espérez, l'« équilibre » de Noctis… le prix est trop élevé.",
						"spanish": "La salvación que buscáis, el 'equilibrio' de Noctis... el precio es demasiado alto.",
						"vietnamese": "Sự cứu rỗi mà các ngươi mong muốn, 'cân bằng' của Noctis... cái giá quá đắt.",
						"thai": "ความรอดที่พวกเจ้าปรารถนา 'สมดุล' ของน็อกติส... แลกมาด้วยราคาที่สูงลิ่ว",
						"hindi": "तुम जिस मुक्ति की तलाश में हो, नॉक्टिस का 'संतुलन'... उसकी कीमत बहुत ज़्यादा है।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 대가?",
						"english": "What price?",
						"japanese": "何の代償？",
						"chinese": "什么代价？",
						"french": "Quel prix ?",
						"spanish": "¿Qué precio?",
						"vietnamese": "Giá nào?",
						"thai": "ราคาอะไร?",
						"hindi": "क्या कीमत?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "char",
					"action": "enter"
				},
				{
					"content": {
						"korean": "심연은 스스로 균형을 찾으려 하지 않아. 누군가 항상 강제해야 했지.",
						"english": "The Abyss doesn't seek balance on its own. Someone always had to force it.",
						"japanese": "深淵は自ら均衡を見つけようとはしない。常に誰かが強制しなければならなかった。",
						"chinese": "深渊不会自行寻求平衡。总有人必须强制它。",
						"french": "Les Abysses ne cherchent pas l'équilibre d'eux-mêmes. Quelqu'un a toujours dû les y contraindre.",
						"spanish": "El Abismo no busca el equilibrio por sí solo. Alguien siempre tuvo que forzarlo.",
						"vietnamese": "Vực sâu không tự tìm kiếm sự cân bằng. Luôn phải có người ép buộc nó.",
						"thai": "ห้วงอเวจีไม่แสวงหาสมดุลด้วยตัวเอง ใครบางคนต้องบังคับมันเสมอ",
						"hindi": "अतल गहरायी खुद से संतुलन नहीं खोजती। किसी को हमेशा ज़बरदस्ती करनी पड़ी।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "녹티스가 그걸 하는 거야?",
						"english": "Is Noctis doing that?",
						"japanese": "ノクティスがそれをしているの？",
						"chinese": "诺克提斯在做这件事吗？",
						"french": "Noctis fait ça ?",
						"spanish": "¿Noctis está haciendo eso?",
						"vietnamese": "Noctis đang làm điều đó sao?",
						"thai": "น็อกติสกำลังทำสิ่งนั้นเหรอ?",
						"hindi": "क्या नॉक्टिस ऐसा कर रहा है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "녹티스는… 거대한 존재를 위한 도구일 뿐. 진정한 힘은 따로 있어.",
						"english": "Noctis is... merely a tool for a greater entity. The true power lies elsewhere.",
						"japanese": "ノクティスは…より巨大な存在のための道具に過ぎない。真の力は他にある。",
						"chinese": "诺克提斯……不过是一个为某个更巨大存在服务的工具。真正的力量另有他处。",
						"french": "Noctis n'est… qu'un outil pour une entité plus grande. Le vrai pouvoir réside ailleurs.",
						"spanish": "Noctis es... solo una herramienta para una entidad mayor. El verdadero poder reside en otro lugar.",
						"vietnamese": "Noctis... chỉ là công cụ cho một thực thể vĩ đại hơn. Sức mạnh thực sự nằm ở nơi khác.",
						"thai": "น็อกติสเป็นแค่... เครื่องมือของสิ่งมีชีวิตที่ยิ่งใหญ่กว่า พลังที่แท้จริงอยู่ที่อื่น",
						"hindi": "नॉक्टिस... एक विशाल सत्ता के लिए बस एक औज़ार है। असली शक्ति कहीं और है।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "도구…?",
						"english": "A tool...?",
						"japanese": "道具…？",
						"chinese": "工具……？",
						"french": "Un outil… ?",
						"spanish": "¿Una herramienta...?",
						"vietnamese": "Công cụ...?",
						"thai": "เครื่องมือ...?",
						"hindi": "एक औज़ार...?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "이제 돌아갈 길은 없어. 너희의 의심은… 너희를 여기까지 이끌었으니.",
						"english": "There's no turning back now. Your doubts... have led you this far.",
						"japanese": "もう引き返す道はない。お前たちの疑念が…ここまで導いたのだから。",
						"chinese": "现在已经没有回头路了。你们的怀疑……将你们引到了这里。",
						"french": "Plus de retour en arrière possible. Vos doutes… vous ont menés jusqu'ici.",
						"spanish": "Ya no hay vuelta atrás. Vuestras dudas... os han traído hasta aquí.",
						"vietnamese": "Không còn đường quay lại nữa. Sự nghi ngờ của các ngươi... đã dẫn các ngươi đến đây.",
						"thai": "ไม่มีทางย้อนกลับแล้ว ความสงสัยของพวกเจ้า... ได้นำพาพวกเจ้ามาถึงจุดนี้",
						"hindi": "अब कोई वापसी नहीं। तुम्हारे संदेह... तुम्हें यहाँ तक ले आए हैं।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "곧 마주할 진실은… 네 영혼을 부술 거야.",
						"english": "The truth you'll soon face... will shatter your soul.",
						"japanese": "すぐに直面する真実は…お前の魂を砕くだろう。",
						"chinese": "你即将面对的真相……会粉碎你的灵魂。",
						"french": "La vérité que vous allez bientôt affronter… brisera votre âme.",
						"spanish": "La verdad que pronto enfrentarás... destrozará tu alma.",
						"vietnamese": "Sự thật mà ngươi sắp đối mặt... sẽ nghiền nát linh hồn ngươi.",
						"thai": "ความจริงที่เจ้ากำลังจะเผชิญ... จะทำลายวิญญาณของเจ้า",
						"hindi": "जिस सच का तुम जल्द ही सामना करोगे... वह तुम्हारी आत्मा को तोड़ देगा।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "상관 없어. 진실을 밝힐 거야.",
						"english": "Doesn't matter. I'll reveal the truth.",
						"japanese": "関係ない。真実を明らかにする。",
						"chinese": "没关系。我会揭露真相的。",
						"french": "Peu importe. Je révélerai la vérité.",
						"spanish": "No importa. Revelaré la verdad.",
						"vietnamese": "Không sao. Ta sẽ phơi bày sự thật.",
						"thai": "ไม่เป็นไร ฉันจะเปิดเผยความจริง",
						"hindi": "कोई बात नहीं। मैं सच उजागर करूँगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "결국… 아무것도 바꾸지 못하는군. 너희의 의지는… 여기서 부서진다.",
						"english": "In the end... you can change nothing. Your will... shatters here.",
						"japanese": "結局…何も変えられないか。お前たちの意志は…ここで砕け散る。",
						"chinese": "最终…你们什么都改变不了。你们的意志…将在这里破碎。",
						"french": "En fin de compte... vous ne pouvez rien changer. Votre volonté... se brise ici.",
						"spanish": "Al final... no podéis cambiar nada. Vuestra voluntad... se rompe aquí.",
						"vietnamese": "Cuối cùng... các ngươi không thể thay đổi bất cứ điều gì. Ý chí của các ngươi... sẽ tan vỡ tại đây.",
						"thai": "ท้ายที่สุด... เจ้าก็เปลี่ยนอะไรไม่ได้เลย เจตจำนงของเจ้า... จะถูกทำลายที่นี่",
						"hindi": "अंत में... तुम कुछ भी नहीं बदल सकते। तुम्हारी इच्छाशक्ति... यहीं टूट जाती है।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी... खत्म नहीं हुआ है!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크… 겨우 이 정도라니. 녹티스는… 더 큰 것을 원할 텐데.",
						"english": "Ugh... Is this all you've got? Noctis... will want something greater.",
						"japanese": "く…たったこれしきか。ノクティスは…もっと大きなものを望むだろうに。",
						"chinese": "呵…就这点本事吗。诺克提斯…会想要更重要的东西的。",
						"french": "Ugh... Ce n'est que ça ? Noctis... voudra quelque chose de plus grand.",
						"spanish": "Ugh... ¿Es esto todo lo que tienes? Noctis... querrá algo más grande.",
						"vietnamese": "Khặc... Chỉ có vậy thôi sao. Noctis... sẽ muốn thứ gì đó lớn hơn nhiều.",
						"thai": "ฮึ... แค่นี้เองเหรอ น็อคติส... คงอยากได้สิ่งที่ใหญ่กว่านี้",
						"hindi": "उह... बस इतना ही? नॉक्टिस... कुछ और बड़ा चाहेगा।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야? 녹티스의 목적이 대체 뭔데!",
						"english": "What are you talking about? What exactly is Noctis's goal?!",
						"japanese": "何を言ってるんだ？ノクティスの目的は一体何なんだ！",
						"chinese": "你在说什么？诺克提斯的目的到底是什么！",
						"french": "De quoi parles-tu ? Quel est le but de Noctis, au juste ?",
						"spanish": "¿De qué estás hablando? ¿Cuál es el objetivo de Noctis, después de todo?",
						"vietnamese": "Ngươi đang nói gì vậy? Mục đích của Noctis rốt cuộc là gì chứ!",
						"thai": "คุณกำลังพูดถึงอะไรอยู่? เป้าหมายของ Noctis คืออะไรกันแน่!",
						"hindi": "क्या कह रहे हो? नॉक्टिस का मकसद आखिर क्या है!"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "승리했지만 의문은 더욱 깊어졌다. 녹티스의 진짜 목적은… 아직 감춰져 있었다.",
						"english": "Victory was ours, but the questions deepened. Noctis's true purpose... remained hidden.",
						"japanese": "勝利したが、疑問はさらに深まった。ノクティスの真の目的は…まだ隠されていた。",
						"chinese": "虽然胜利了，但疑问却更深了。诺克提斯的真正目的…依然隐藏着。",
						"french": "La victoire était nôtre, mais les questions s'étaient approfondies. Le véritable but de Noctis... restait caché.",
						"spanish": "La victoria fue nuestra, pero las preguntas se profundizaron. El verdadero propósito de Noctis... permanecía oculto.",
						"vietnamese": "Chiến thắng đã thuộc về chúng ta, nhưng những câu hỏi lại càng sâu sắc hơn. Mục đích thực sự của Noctis... vẫn còn ẩn giấu.",
						"thai": "เราได้รับชัยชนะ แต่คำถามก็ยิ่งลึกซึ้งขึ้น เป้าหมายที่แท้จริงของ Noctis... ยังคงถูกซ่อนไว้",
						"hindi": "जीत हमारी हुई, लेकिन सवाल और गहरे हो गए। नॉक्टिस का असली मकसद... अभी भी छिपा हुआ था।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "공간이 일그러지며 거대한 그림자가 실체를 드러냈다.",
						"english": "Space distorted, and a colossal shadow manifested.",
						"japanese": "空間が歪み、巨大な影が実体を現した。",
						"chinese": "空间扭曲，一个巨大的身影显现出来。",
						"french": "L'espace se déforma, et une ombre colossale se manifesta.",
						"spanish": "El espacio se distorsionó, y una sombra colosal se manifestó.",
						"vietnamese": "Không gian vặn vẹo, và một bóng đen khổng lồ hiện hình.",
						"thai": "พื้นที่บิดเบี้ยว และเงาขนาดยักษ์ก็ปรากฏตัวขึ้น",
						"hindi": "अंतरिक्ष विकृत हो गया, और एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "어리석은 자들. 진실은… 너희의 분노를 삼킬 뿐이다.",
						"english": "Fools. The truth... will only consume your rage.",
						"japanese": "愚か者ども。真実は…お前たちの怒りを飲み込むだけだ。",
						"chinese": "愚蠢的人。真相…只会吞噬你们的怒火。",
						"french": "Fous. La vérité... ne fera que dévorer votre rage.",
						"spanish": "Necios. La verdad... solo consumirá vuestra ira.",
						"vietnamese": "Những kẻ ngốc. Sự thật... sẽ chỉ nuốt chửng cơn thịnh nộ của các ngươi.",
						"thai": "พวกโง่เขลา ความจริง...จะกลืนกินความโกรธของพวกเจ้าเท่านั้น",
						"hindi": "मूर्खों। सत्य... केवल तुम्हारे क्रोध को निगल जाएगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "입 다물어! 여기서 끝낼 거야!",
						"english": "Shut up! I'll end this here!",
						"japanese": "黙れ！ここで終わらせる！",
						"chinese": "闭嘴！我今天就要在这里解决掉你！",
						"french": "Tais-toi ! Je vais en finir ici !",
						"spanish": "¡Cállate! ¡Terminaré con esto aquí!",
						"vietnamese": "Câm mồm! Ta sẽ kết thúc chuyện này ở đây!",
						"thai": "หุบปากซะ! ฉันจะจบเรื่องนี้ตรงนี้แหละ!",
						"hindi": "चुप रहो! मैं इसे यहीं खत्म करूँगा!"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"speaker": "char",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…봐, 네가 지키려는 '균형'의 진짜 대가를.",
						"english": "...See, the true cost of the 'balance' you try to protect.",
						"japanese": "…見ろ、お前が守ろうとしている『均衡』の真の代償を。",
						"chinese": "……看吧，你试图维护的‘平衡’的真正代价。",
						"french": "...Vois, le véritable coût du 'équilibre' que tu tentes de protéger.",
						"spanish": "...Mira, el verdadero coste del 'equilibrio' que intentas proteger.",
						"vietnamese": "...Hãy xem, cái giá thật sự của 'sự cân bằng' mà ngươi cố gắng bảo vệ.",
						"thai": "...ดูสิ ค่าใช้จ่ายที่แท้จริงของ 'ความสมดุล' ที่เจ้าพยายามปกป้อง",
						"hindi": "...देखो, उस 'संतुलन' की असली कीमत जिसे तुम बचाने की कोशिश कर रहे हो।"
					},
					"type": "speech",
					"speaker": "char",
					"emotion": "sad"
				},
				{
					"action": "exit",
					"speaker": "char",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 혼돈에 잠겼다. 현실과 심연의 경계는 흐릿해지고,",
			"그림자 없는 자들이 배회하는 뒤틀린 공간.",
			"그곳에서 '균형'의 진짜 의미를 아는 자가 기다리고 있었다.",
			"감춰진 진실은… 언제나 가장 잔인한 법."
		],
		"english": [
			"The world plunged into chaos. The line between reality and the abyss blurred,",
			"A twisted space where the shadowless wander.",
			"There, one who knew the true meaning of 'Balance' awaited.",
			"The hidden truth... is always the cruelest."
		],
		"japanese": [
			"世界は混沌に沈んだ。現実と深淵の境界は曖昧になり、",
			"影なき者たちが彷徨う、歪んだ空間。",
			"そこで、「均衡」の真の意味を知る者が待っていた。",
			"隠された真実は…常に最も残酷なもの。"
		],
		"chinese": [
			"世界陷入混沌。现实与深渊的边界变得模糊，",
			"一个没有影子的人徘徊的扭曲空间。",
			"在那里，一个知晓“平衡”真正含义的人正在等待。",
			"隐藏的真相……总是最残酷的。"
		],
		"french": [
			"Le monde sombra dans le chaos. La frontière entre la réalité et les abysses s'est estompée,",
			"Un espace distordu où errent ceux sans ombre.",
			"Là, celui qui connaissait le vrai sens de l'« Équilibre » attendait.",
			"La vérité cachée... est toujours la plus cruelle."
		],
		"spanish": [
			"El mundo se sumió en el caos. La frontera entre la realidad y el abismo se difuminó,",
			"Un espacio retorcido donde deambulan los sin sombra.",
			"Allí, quien conocía el verdadero significado del 'Equilibrio' aguardaba.",
			"La verdad oculta... es siempre la más cruel."
		],
		"vietnamese": [
			"Thế giới chìm trong hỗn loạn. Ranh giới giữa thực tại và vực sâu mờ nhạt,",
			"Không gian méo mó nơi những kẻ vô ảnh lang thang.",
			"Ở đó, một người biết ý nghĩa thực sự của 'Cân bằng' đã chờ đợi.",
			"Sự thật ẩn giấu... luôn là tàn nhẫn nhất."
		],
		"thai": [
			"โลกจมดิ่งสู่ความวุ่นวาย ขอบเขตระหว่างความเป็นจริงและห้วงอเวจีพร่าเลือน,",
			"ห้วงอวกาศบิดเบี้ยวที่ไร้เงาผู้พเนจร",
			"ที่นั่น ผู้ที่รู้ความหมายที่แท้จริงของ 'สมดุล' กำลังรออยู่",
			"ความจริงที่ซ่อนอยู่... มักจะโหดร้ายที่สุดเสมอ"
		],
		"hindi": [
			"दुनिया अराजकता में डूब गई। वास्तविकता और पाताल के बीच की रेखा धुंधली पड़ गई,",
			"एक विकृत स्थान जहाँ छायाहीन लोग भटकते हैं।",
			"वहाँ, 'संतुलन' का वास्तविक अर्थ जानने वाला कोई प्रतीक्षा कर रहा था।",
			"छिपी हुई सच्चाई... हमेशा सबसे क्रूर होती है।"
		]
	}
} as const;
