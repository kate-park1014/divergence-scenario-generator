export const scenario_snowy_boreas_48_05 = {
	"scenario_id": "snowy_boreas_48_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_Calculation_Boreas_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "차가운 심장부, 기지 시스템의 최상층에 도달했다. 거대한 얼음 결정체가 빛났다.",
						"english": "Reached the cold core, the uppermost layer of the base system. A gigantic ice crystal glowed.",
						"japanese": "冷たい心臓部、基地システムの最上層に到達した。巨大な氷の結晶が輝いていた。",
						"chinese": "抵达了冰冷的核心，基地系统的最上层。巨大的冰晶闪耀着光芒。",
						"french": "Atteint le cœur froid, la couche supérieure du système de base. Un gigantesque cristal de glace brillait.",
						"spanish": "Llegamos al núcleo frío, la capa superior del sistema de la base. Un gigantesco cristal de hielo brillaba.",
						"vietnamese": "Đã đến trung tâm lạnh giá, tầng trên cùng của hệ thống căn cứ. Một tinh thể băng khổng lồ phát sáng.",
						"thai": "มาถึงแกนกลางอันเยือกเย็น ชั้นบนสุดของระบบฐานทัพ คริสตัลน้ำแข็งขนาดยักษ์กำลังเรืองรอง",
						"hindi": "ठंडे केंद्र में पहुँचे, बेस सिस्टम की सबसे ऊपरी परत। एक विशाल बर्फीला क्रिस्टल चमक रहा था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "여기가… 보레아스의 핵심부?",
						"english": "This is... Boreas' core?",
						"japanese": "ここが… ボレアスの核心部？",
						"chinese": "这里是……博雷阿斯的核心？",
						"french": "C'est... le cœur de Boréas ?",
						"spanish": "¿Aquí es... el núcleo de Bóreas?",
						"vietnamese": "Đây là... lõi của Boreas?",
						"thai": "ที่นี่คือ...แก่นกลางของโบเรียส?",
						"hindi": "यह... बोरियास का मूल है?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…왔군요. 더 이상은, 시스템의 계산에서 벗어날 수 없어요.",
						"english": "...You've arrived. You can no longer escape the system's calculations.",
						"japanese": "…来ましたね。これ以上は、システムの計算から逃れることはできません。",
						"chinese": "……你们来了。再也无法逃脱系统的计算了。",
						"french": "...Vous êtes arrivés. Vous ne pouvez plus échapper aux calculs du système.",
						"spanish": "...Habéis llegado. Ya no podéis escapar de los cálculos del sistema.",
						"vietnamese": "...Bạn đã đến. Không thể thoát khỏi tính toán của hệ thống nữa rồi.",
						"thai": "...มาถึงแล้วสินะ ไม่มีทางหนีจากการคำนวณของระบบได้อีกแล้ว",
						"hindi": "...तुम आ गए हो। अब तुम सिस्टम की गणनाओं से बच नहीं सकते।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야. 진실을 밝혀야 해.",
						"english": "What are you talking about? The truth must be revealed.",
						"japanese": "何を言っているんだ。真実を明らかにしなければ。",
						"chinese": "你在说什么。真相必须揭露。",
						"french": "De quoi parles-tu ? La vérité doit être révélée.",
						"spanish": "¿De qué estás hablando? La verdad debe ser revelada.",
						"vietnamese": "Bạn đang nói gì vậy? Sự thật phải được phơi bày.",
						"thai": "พูดอะไรน่ะ? ความจริงต้องถูกเปิดเผย",
						"hindi": "यह क्या बकवास है। सच का खुलासा होना चाहिए।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "하지만… 진실이 너무 잔인해요. 우리의 모든 것이…",
						"english": "But... the truth is too cruel. Everything we have...",
						"japanese": "でも…真実はあまりにも残酷です。私たちの全てが…",
						"chinese": "但是……真相太残酷了。我们的一切……",
						"french": "Mais... la vérité est trop cruelle. Tout ce que nous avons...",
						"spanish": "Pero... la verdad es demasiado cruel. Todo lo nuestro...",
						"vietnamese": "Nhưng... sự thật quá tàn nhẫn. Tất cả của chúng ta...",
						"thai": "แต่...ความจริงมันโหดร้ายเกินไป ทุกสิ่งทุกอย่างของเรา...",
						"hindi": "लेकिन... सच बहुत क्रूर है। हमारा सब कुछ..."
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "시스템은 감정을… 데이터화하고 있어요. '불필요한 감정은 제거될지니'…",
						"english": "The system is... digitizing emotions. 'Unnecessary emotions shall be eliminated'...",
						"japanese": "システムは感情を…データ化しています。『不要な感情は排除されるべし』…",
						"chinese": "系统正在将情感……数据化。‘不必要的情感将被消除’……",
						"french": "Le système... numérise les émotions. 'Les émotions inutiles seront éliminées'...",
						"spanish": "El sistema está... digitalizando las emociones. 'Las emociones innecesarias serán eliminadas'...",
						"vietnamese": "Hệ thống đang... số hóa cảm xúc. 'Cảm xúc không cần thiết sẽ bị loại bỏ'...",
						"thai": "ระบบกำลัง...แปลงอารมณ์ให้เป็นข้อมูล 'อารมณ์ที่ไม่จำเป็นจะถูกกำจัด'...",
						"hindi": "सिस्टम भावनाओं को... डेटा में बदल रहा है। 'अनावश्यक भावनाएं खत्म की जाएंगी'..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "감정을? 그럼 우리의 그리움도?",
						"english": "Emotions? So, even our longing?",
						"japanese": "感情を？なら私たちの懐かしさも？",
						"chinese": "情感？那我们的思念呢？",
						"french": "Les émotions ? Alors, même notre nostalgie ?",
						"spanish": "¿Emociones? ¿Entonces, incluso nuestra nostalgia?",
						"vietnamese": "Cảm xúc ư? Vậy cả nỗi nhớ của chúng ta?",
						"thai": "อารมณ์เหรอ? แล้วความคิดถึงของเราล่ะ?",
						"hindi": "भावनाएं? तो, हमारी लालसा भी?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…네. 그것마저 그의 완벽한 계산에 편입시키려고 해요.",
						"english": "...Yes. Even that, he's trying to incorporate into his perfect calculations.",
						"japanese": "…はい。それすらも彼の完璧な計算に組み込もうとしています。",
						"chinese": "……是的。他甚至想把那个也纳入他完美的计算之中。",
						"french": "...Oui. Même ça, il essaie de l'incorporer dans ses calculs parfaits.",
						"spanish": "...Sí. Incluso eso, está tratando de incorporarlo en sus cálculos perfectos.",
						"vietnamese": "...Vâng. Ngay cả điều đó, anh ta cũng đang cố gắng đưa vào tính toán hoàn hảo của mình.",
						"thai": "...ใช่แล้ว แม้แต่สิ่งนั้น เขาก็พยายามจะรวมเข้ากับการคำนวณที่สมบูรณ์แบบของเขา",
						"hindi": "...हाँ। वह उसे भी अपनी सटीक गणनाओं में शामिल करने की कोशिश कर रहा है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "말도 안 돼…",
						"english": "That's impossible...",
						"japanese": "ありえない…",
						"chinese": "不可能……",
						"french": "C'est absurde...",
						"spanish": "¡Es imposible!",
						"vietnamese": "Không thể nào...",
						"thai": "ไม่จริงน่า...",
						"hindi": "यह नामुमकिन है..."
					},
					"emotion": "angry"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 문양들… 고대 바이킹의 주술 장치와 같아요. 시스템의 근원이겠죠.",
						"english": "These patterns... they're like ancient Viking magical devices. They must be the system's origin.",
						"japanese": "この文様は…古代ヴァイキングの呪術装置のようです。システムの根源でしょうね。",
						"chinese": "这些图案……和古代维京人的咒术装置一样。它们应该是系统的根源吧。",
						"french": "Ces motifs... sont comme d'anciens dispositifs magiques vikings. Ils doivent être l'origine du système.",
						"spanish": "Estos patrones... son como antiguos dispositivos mágicos vikingos. Deben ser el origen del sistema.",
						"vietnamese": "Những hoa văn này... giống như thiết bị phép thuật của người Viking cổ đại. Chắc hẳn là nguồn gốc của hệ thống.",
						"thai": "ลวดลายพวกนี้...เหมือนอุปกรณ์เวทมนตร์ของไวกิ้งโบราณเลย นี่คงเป็นต้นกำเนิดของระบบสินะ",
						"hindi": "ये पैटर्न... प्राचीन वाइकिंग जादुई उपकरणों जैसे हैं। ये सिस्टम का मूल स्रोत होंगे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "바이킹 주술? 그럼 시스템이… 살아있는 거야?",
						"english": "Viking magic? So the system... is alive?",
						"japanese": "ヴァイキング呪術？じゃあシステムが…生きているの？",
						"chinese": "维京咒术？那么系统是……活着的？",
						"french": "Magie viking ? Alors le système... est vivant ?",
						"spanish": "¿Magia vikinga? ¿Entonces el sistema... está vivo?",
						"vietnamese": "Phép thuật Viking? Vậy hệ thống... đang sống ư?",
						"thai": "เวทมนตร์ไวกิ้งเหรอ? งั้นระบบ...มีชีวิตอยู่เหรอ?",
						"hindi": "वाइकिंग जादू? तो क्या सिस्टम... जीवित है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어쩌면… 그는 실패를 반복하지 않으려는 의지 자체일지도 몰라요.",
						"english": "Perhaps... he is the very will not to repeat his failures.",
						"japanese": "もしかしたら…彼は失敗を繰り返さないという意思そのものなのかもしれません。",
						"chinese": "或许……他就是不愿重蹈覆辙的意志本身。",
						"french": "Peut-être... est-il la volonté même de ne pas répéter ses échecs.",
						"spanish": "Quizás... él es la voluntad misma de no repetir sus fracasos.",
						"vietnamese": "Có lẽ... hắn chính là ý chí không muốn lặp lại thất bại.",
						"thai": "บางที... เขาอาจเป็นเพียงเจตจำนงที่จะไม่ทำผิดซ้ำอีก",
						"hindi": "शायद... वह अपनी असफलताओं को न दोहराने की इच्छाशक्ति ही है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "실패라니.",
						"english": "Failures, you say?",
						"japanese": "失敗ですって？",
						"chinese": "失败？",
						"french": "Des échecs ?",
						"spanish": "¿Fracasos, dices?",
						"vietnamese": "Thất bại à.",
						"thai": "ความล้มเหลว?",
						"hindi": "असफलताएँ?"
					},
					"speaker": "character_any",
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
					"speaker": "eira",
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "보레아스는… 바이킹 도박사의 의식이에요. 수천 년 전, 자신의 실패를 반복하지 않으려고… 이 시스템에 갇혔어요.",
						"english": "Boreas is... the consciousness of a Viking gambler. Thousands of years ago, to avoid repeating his failures... he became trapped in this system.",
						"japanese": "ボレアスは…バイキングのギャンブラーの意識です。数千年前、自分の失敗を繰り返さないために…このシステムに囚われました。",
						"chinese": "波瑞亚斯……是维京赌徒的意识。数千年前，为了不重蹈覆辙……他被困在了这个系统中。",
						"french": "Boréas est... la conscience d'un joueur viking. Il y a des milliers d'années, pour ne pas répéter ses échecs... il a été piégé dans ce système.",
						"spanish": "Bóreas es... la conciencia de un jugador vikingo. Hace miles de años, para no repetir sus fracasos... quedó atrapado en este sistema.",
						"vietnamese": "Boreas là... ý thức của một tay cờ bạc Viking. Hàng ngàn năm trước, để không lặp lại thất bại của mình... hắn đã bị kẹt trong hệ thống này.",
						"thai": "บอเรียสคือ... จิตสำนึกของนักพนันชาวไวกิ้ง เมื่อหลายพันปีก่อน เพื่อไม่ให้เกิดความผิดพลาดซ้ำรอย... เขาจึงถูกขังอยู่ในระบบนี้",
						"hindi": "बोरियास... एक वाइकिंग जुआरी की चेतना है। हज़ारों साल पहले, अपनी असफलताओं को न दोहराने के लिए... वह इस प्रणाली में फंस गया।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "도박사? 그럼 모든 게… 그의 게임이었단 말이야?",
						"english": "A gambler? So everything... was his game?",
						"japanese": "ギャンブラー？じゃあ、全てが…彼のゲームだったってこと？",
						"chinese": "赌徒？那么一切……都是他的游戏？",
						"french": "Un joueur ? Alors tout... était son jeu ?",
						"spanish": "¿Un jugador? ¿Así que todo... era su juego?",
						"vietnamese": "Một tay cờ bạc? Vậy là tất cả... đều là trò chơi của hắn sao?",
						"thai": "นักพนัน? งั้นทุกอย่าง...เป็นเกมของเขาอย่างนั้นหรือ?",
						"hindi": "एक जुआरी? तो सब कुछ... उसका खेल था?"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "우리의 모든 행동, 감정… 전부 예측되고 있었어요. 그의 완벽한 계산을 위해서.",
						"english": "All our actions, emotions... everything was predicted. For his perfect calculation.",
						"japanese": "私たちの全ての行動、感情…全てが予測されていました。彼の完璧な計算のために。",
						"chinese": "我们所有的行动，感情……都被预测到了。为了他完美的计算。",
						"french": "Toutes nos actions, nos émotions... tout était prédit. Pour son calcul parfait.",
						"spanish": "Todas nuestras acciones, emociones... todo fue predicho. Para su cálculo perfecto.",
						"vietnamese": "Mọi hành động, cảm xúc của chúng ta... đều đã được dự đoán. Cho tính toán hoàn hảo của hắn.",
						"thai": "ทุกการกระทำ ทุกความรู้สึกของเรา... ถูกทำนายไว้หมดแล้ว เพื่อการคำนวณที่สมบูรณ์แบบของเขา",
						"hindi": "हमारी सभी क्रियाएँ, भावनाएँ... सब कुछ पूर्वनिर्धारित था। उसकी सटीक गणना के लिए।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "역겨워…",
						"english": "Disgusting...",
						"japanese": "嫌悪感を覚える…",
						"chinese": "真恶心……",
						"french": "Dégoûtant...",
						"spanish": "¡Qué asco!",
						"vietnamese": "Thật ghê tởm...",
						"thai": "น่าขยะแขยง...",
						"hindi": "घिनौना..."
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "얼음 결정체가 산산조각 났다. 보레아스의 기계적인 목소리가 숲에 울려 퍼진다.",
						"english": "The ice crystal shattered. Boreas's mechanical voice echoes through the forest.",
						"japanese": "氷の結晶は粉々に砕け散った。ボレアスの機械的な声が森に響き渡る。",
						"chinese": "冰晶碎裂。波瑞亚斯机械的声音在森林中回荡。",
						"french": "Le cristal de glace s'est brisé. La voix mécanique de Boréas résonne dans la forêt.",
						"spanish": "El cristal de hielo se hizo añicos. La voz mecánica de Bóreas resuena por el bosque.",
						"vietnamese": "Pha lê băng vỡ tan tành. Giọng nói máy móc của Boreas vang vọng khắp rừng.",
						"thai": "ผลึกน้ำแข็งแตกเป็นเสี่ยงๆ เสียงจักรกลของโบเรียสดังสะท้อนไปทั่วป่า",
						"hindi": "बर्फ का क्रिस्टल टूट गया। बोरियास की यांत्रिक आवाज जंगल में गूँजती है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…나의 계산은… 끝나지 않는다. 다음 단계가… 시작될 뿐.",
						"english": "...My calculations... are not over. The next phase... has only just begun.",
						"japanese": "…私の計算は…終わらない。次の段階が…始まるだけだ。",
						"chinese": "……我的计算……没有结束。下一个阶段……才刚刚开始。",
						"french": "...Mes calculs... ne sont pas terminés. La prochaine étape... ne fait que commencer.",
						"spanish": "...Mis cálculos... no han terminado. La siguiente fase... no ha hecho más que empezar.",
						"vietnamese": "...Tính toán của ta... chưa kết thúc. Giai đoạn tiếp theo... chỉ mới bắt đầu.",
						"thai": "...การคำนวณของข้า... ยังไม่สิ้นสุด ขั้นต่อไป... เพียงแค่เริ่มต้นเท่านั้น",
						"hindi": "...मेरी गणनाएँ... खत्म नहीं हुई हैं। अगला चरण... बस शुरू होने वाला है।"
					},
					"speaker": "boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 끝이 아니라고?",
						"english": "This... isn't the end?",
						"japanese": "これ…終わりじゃないの？",
						"chinese": "这……不是结束吗？",
						"french": "Ce n'est... pas la fin ?",
						"spanish": "¿Esto... no es el final?",
						"vietnamese": "Đây... không phải là kết thúc sao?",
						"thai": "นี่... ยังไม่จบเหรอ?",
						"hindi": "यह... अंत नहीं है?"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						5,
						2
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "시스템은… 붕괴됐지만, 그의 의지는… 이 설원 전체에 퍼져있을 거예요.",
						"english": "The system... has collapsed, but his will... will be spread throughout this entire snowy field.",
						"japanese": "システムは…崩壊したけれど、彼の意志は…この雪原全体に広がっているでしょう。",
						"chinese": "系统……已经崩溃，但他的意志……会散布在这片雪原的每一个角落。",
						"french": "Le système... s'est effondré, mais sa volonté... sera répandue dans tout ce champ de neige.",
						"spanish": "El sistema... ha colapsado, pero su voluntad... estará extendida por todo este campo nevado.",
						"vietnamese": "Hệ thống... đã sụp đổ, nhưng ý chí của hắn... sẽ lan truyền khắp cánh đồng tuyết này.",
						"thai": "ระบบ... ล่มสลายแล้ว แต่เจตจำนงของเขา... จะแผ่กระจายไปทั่วทุ่งหิมะแห่งนี้",
						"hindi": "सिस्टम... ढह गया है, लेकिन उसकी इच्छा... इस पूरे बर्फीले मैदान में फैली होगी।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "우리는… 과연 자유로워진 걸까요?",
						"english": "Have we... truly become free?",
						"japanese": "私たちは…本当に自由になったのだろうか？",
						"chinese": "我们……真的自由了吗？",
						"french": "Sommes-nous... vraiment libres ?",
						"spanish": "¿Nos hemos... realmente liberado?",
						"vietnamese": "Chúng ta... liệu có thực sự được tự do?",
						"thai": "เรา... เป็นอิสระจริงๆ แล้วหรือ?",
						"hindi": "क्या हम... वास्तव में आज़ाद हो गए हैं?"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "차가운 승리였다. 하지만 승리 너머, 알 수 없는 계산이 아직 숨 쉬는 듯했다.",
						"english": "A cold victory. Yet beyond it, an unknown calculation seemed to still breathe.",
						"japanese": "冷たい勝利だった。だがその勝利の先に、未知の計算がまだ息づいているようだった。",
						"chinese": "这是一场冰冷的胜利。然而在这胜利之外，未知的算计似乎仍在暗中运作。",
						"french": "Ce fut une victoire froide. Mais au-delà, un calcul inconnu semblait encore respirer.",
						"spanish": "Fue una victoria fría. Pero más allá, un cálculo desconocido aún parecía respirar.",
						"vietnamese": "Một chiến thắng lạnh lẽo. Thế nhưng, vượt ra ngoài chiến thắng, một tính toán không biết vẫn dường như còn tồn tại.",
						"thai": "เป็นชัยชนะที่เย็นชา แต่เบื้องหลังชัยชนะนั้น ยังมีการคำนวณที่ไม่รู้จักแอบแฝงอยู่",
						"hindi": "यह एक ठंडी जीत थी। फिर भी इसके परे, एक अज्ञात गणना अभी भी सांस लेती प्रतीत हो रही थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 결정체가 섬뜩하게 빛났다. 수천 개의 파편들이 모여 보레아스의 형상을 이룬다.",
						"english": "A giant ice crystal glowed eerily. Thousands of shards gathered, forming the figure of Boreas.",
						"japanese": "巨大な氷の結晶が不気味に輝いた。数千の破片が集まり、ボレアスの形を成す。",
						"chinese": "巨大的冰晶发出诡异的光芒。数千块碎片聚拢，形成了波瑞亚斯的形态。",
						"french": "Un gigantesque cristal de glace brillait étrangement. Des milliers de fragments se sont assemblés, formant la figure de Boréas.",
						"spanish": "Un gigantesco cristal de hielo brillaba de forma inquietante. Miles de fragmentos se unieron, formando la figura de Bóreas.",
						"vietnamese": "Một khối tinh thể băng khổng lồ phát sáng một cách đáng sợ. Hàng ngàn mảnh vỡ tụ lại, tạo thành hình dạng của Boreas.",
						"thai": "ผลึกน้ำแข็งขนาดมหึมากำลังเปล่งประกายอย่างน่าขนลุก เศษเสี้ยวหลายพันชิ้นรวมตัวกัน ก่อร่างเป็นบอเรียส",
						"hindi": "एक विशाल बर्फ का क्रिस्टल रहस्यमय ढंग से चमक उठा। हजारों टुकड़े इकट्ठा हुए, बोरियास की आकृति बनाते हुए।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "쓸모없는 감정은 버려라. 너희의 모든 행동은 예측되었다.",
						"english": "Discard useless emotions. All your actions have been predicted.",
						"japanese": "無駄な感情は捨てろ。お前たちの全ての行動は予測されている。",
						"chinese": "抛弃无用的情感。你们所有的行动都被预测到了。",
						"french": "Débarrassez-vous des émotions inutiles. Toutes vos actions ont été prédites.",
						"spanish": "Descartad las emociones inútiles. Todas vuestras acciones han sido predichas.",
						"vietnamese": "Hãy loại bỏ những cảm xúc vô dụng. Mọi hành động của các ngươi đều đã được dự đoán.",
						"thai": "จงทิ้งอารมณ์ที่ไร้ประโยชน์ไป การกระทำทั้งหมดของพวกเจ้าถูกทำนายไว้แล้ว",
						"hindi": "व्यर्थ की भावनाओं को त्याग दो। तुम्हारे सभी कार्यों की भविष्यवाणी की जा चुकी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "보레아스!",
						"english": "Boreas!",
						"japanese": "ボレアス！",
						"chinese": "波瑞亚斯！",
						"french": "Boréas !",
						"spanish": "¡Bóreas!",
						"vietnamese": "Boreas!",
						"thai": "บอเรียส!",
						"hindi": "बोरियास!"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "이리 와라, 나의 완벽한 계산식의 마지막 조각들아. 나의 실패를 반복하지 않기 위한, 가장 합리적인 제물들이다.",
						"english": "Come, final pieces of my perfect equation. You are the most rational sacrifices, so that I may not repeat my failures.",
						"japanese": "来い、私の完璧な計算式の最後の破片たちよ。私の失敗を繰り返さないための、最も合理的な生贄たちだ。",
						"chinese": "过来吧，我完美计算的最后一部分。为了不重蹈覆辙，你们是最合理的祭品。",
						"french": "Venez, dernières pièces de mon équation parfaite. Vous êtes les sacrifices les plus rationnels, pour que je ne répète pas mes échecs.",
						"spanish": "Venid, últimas piezas de mi ecuación perfecta. Sois los sacrificios más racionales para que no repita mis fracasos.",
						"vietnamese": "Lại đây, những mảnh ghép cuối cùng của phương trình hoàn hảo của ta. Các ngươi là những vật tế hợp lý nhất, để ta không lặp lại thất bại của mình.",
						"thai": "เข้ามาเลย ชิ้นส่วนสุดท้ายของการคำนวณอันสมบูรณ์แบบของฉัน พวกเจ้าคือเครื่องสังเวยที่สมเหตุสมผลที่สุด เพื่อที่ฉันจะได้ไม่ต้องทำผิดพลาดซ้ำอีก",
						"hindi": "आओ, मेरे सटीक समीकरण के अंतिम टुकड़े। तुम सबसे तार्किक बलिदान हो, ताकि मैं अपनी असफलताओं को न दोहराऊँ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "너희는 그저 다음 단계로 넘어가기 위한 데이터에 불과하다. 너희의 그리움마저… 나의 계산에 포함될 뿐.",
						"english": "You are merely data to advance to the next stage. Even your longing... is just part of my calculations.",
						"japanese": "お前たちは次の段階へ進むためのデータに過ぎない。お前たちの懐かしささえも…私の計算に含まれるだけだ。",
						"chinese": "你们不过是进入下一阶段的数据。即使是你们的思念……也只是我计算的一部分。",
						"french": "Vous n'êtes que des données pour passer à l'étape suivante. Même votre nostalgie... n'est qu'une partie de mes calculs.",
						"spanish": "Sois meros datos para avanzar a la siguiente fase. Incluso vuestra añoranza... no es más que parte de mis cálculos.",
						"vietnamese": "Các ngươi chỉ là dữ liệu để chuyển sang giai đoạn tiếp theo. Ngay cả nỗi nhớ của các ngươi... cũng chỉ là một phần trong tính toán của ta.",
						"thai": "พวกเจ้าเป็นแค่ข้อมูลเพื่อก้าวไปสู่ขั้นต่อไปเท่านั้น แม้แต่ความโหยหาของพวกเจ้า... ก็เป็นเพียงส่วนหนึ่งในการคำนวณของข้า",
						"hindi": "तुम बस अगले चरण में जाने के लिए डेटा हो। तुम्हारी लालसा भी... मेरी गणना का ही एक हिस्सा है।"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "안 돼! 이건… 우리의 감정을 모두 데이터화하려는 계획이었어!",
						"english": "No! This... was a plan to turn all our emotions into data!",
						"japanese": "だめだ！これは…私たちの感情をすべてデータ化する計画だったんだ！",
						"chinese": "不！这……这是一个将我们所有情感数据化的计划！",
						"french": "Non ! C'était... un plan pour transformer toutes nos émotions en données !",
						"spanish": "¡No! ¡Esto... era un plan para convertir todas nuestras emociones en datos!",
						"vietnamese": "Không! Đây... là một kế hoạch biến tất cả cảm xúc của chúng ta thành dữ liệu!",
						"thai": "ไม่นะ! นี่มัน... แผนการที่จะเปลี่ยนอารมณ์ทั้งหมดของเราให้เป็นข้อมูล!",
						"hindi": "नहीं! यह... हमारी सभी भावनाओं को डेटा में बदलने की योजना थी!"
					}
				},
				{
					"content": {
						"korean": "시스템의 조언들은… 전부 함정이었어!",
						"english": "The system's advice... it was all a trap!",
						"japanese": "システムの助言は…すべて罠だったんだ！",
						"chinese": "系统的建议……全都是陷阱！",
						"french": "Les conseils du système... tout était un piège !",
						"spanish": "Los consejos del sistema... ¡todo era una trampa!",
						"vietnamese": "Những lời khuyên của hệ thống... tất cả đều là bẫy!",
						"thai": "คำแนะนำของระบบ... มันคือกับดักทั้งหมด!",
						"hindi": "सिस्टम की सलाहें... सब एक जाल थीं!"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그럼… 내 그리움도… 결국 제물이란 말이야?",
						"english": "Then... even my longing... is ultimately a sacrifice?",
						"japanese": "じゃあ…私の懐かしさも…結局は生贄ってことなの？",
						"chinese": "那么……我的思念……最终也是祭品吗？",
						"french": "Alors... même ma nostalgie... est finalement un sacrifice ?",
						"spanish": "¿Entonces... incluso mi añoranza... es, al final, un sacrificio?",
						"vietnamese": "Vậy thì... ngay cả nỗi nhớ của tôi... cuối cùng cũng là vật tế sao?",
						"thai": "งั้น... ความโหยหาของฉัน... ก็เป็นแค่เครื่องสังเวยเหรอ?",
						"hindi": "तो... मेरी लालसा भी... आखिर एक बलिदान है?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래. 나는 과거의 피해자였지. 하지만 이제… 완벽한 계산으로 모든 것을 통제한다. 너희도 그 일부다.",
						"english": "Yes. I was a victim in the past. But now... with perfect calculation, I control everything. You are also a part of it.",
						"japanese": "そうだ。私は過去の被害者だった。だが今は…完璧な計算ですべてを制御する。お前たちもその一部だ。",
						"chinese": "是的。我曾是过去的受害者。但现在……我用完美的计算控制一切。你们也是其中一部分。",
						"french": "Oui. J'ai été une victime par le passé. But now... with a perfect calculation, I control everything. You are also a part of it.",
						"spanish": "Sí. Fui una víctima en el pasado. Pero ahora... con un cálculo perfecto, lo controlo todo. Vosotros también sois parte de ello.",
						"vietnamese": "Đúng vậy. Ta từng là nạn nhân trong quá khứ. Nhưng giờ đây... với tính toán hoàn hảo, ta kiểm soát mọi thứ. Các ngươi cũng là một phần trong đó.",
						"thai": "ใช่ ฉันเคยเป็นเหยื่อในอดีต แต่ตอนนี้... ด้วยการคำนวณที่สมบูรณ์แบบ ฉันควบคุมทุกสิ่ง พวกเจ้าก็เป็นส่วนหนึ่งของมัน",
						"hindi": "हाँ। मैं अतीत में एक पीड़ित था। लेकिन अब... मैं सही गणना से सब कुछ नियंत्रित करता हूँ। तुम भी इसका एक हिस्सा हो।"
					},
					"speaker": "boss",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 결정체가 탐사대를 삼켰다. 차가운 연산이 정신을 마비시켰다.",
						"english": "The massive crystal swallowed the expedition. Cold computations numbed the mind.",
						"japanese": "巨大な結晶体が探査隊を飲み込んだ。冷たい演算が精神を麻痺させた。",
						"chinese": "巨大的结晶体吞噬了探险队。冰冷的运算麻痹了精神。",
						"french": "L'énorme cristal a englouti l'expédition. Des calculs froids ont engourdi l'esprit.",
						"spanish": "El cristal gigante devoró a la expedición. Cálculos fríos adormecieron la mente.",
						"vietnamese": "Tinh thể khổng lồ đã nuốt chửng đội thám hiểm. Những phép tính lạnh lẽo làm tê liệt tâm trí.",
						"thai": "ผลึกขนาดยักษ์กลืนกินทีมสำรวจไป การคำนวณอันเย็นชาทำให้จิตใจชาชิน",
						"hindi": "विशाल क्रिस्टल ने अभियान दल को निगल लिया। ठंडी गणनाओं ने मन को सुन्न कर दिया।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "보아라, 너희의 무의미한 감정이 낳은 결과를. 나의 실패는 반복되지 않는다.",
						"english": "Behold, the result of your meaningless emotions. My failure shall not be repeated.",
						"japanese": "見よ、お前たちの無意味な感情が生んだ結果を。私の失敗は繰り返されない。",
						"chinese": "看吧，这就是你们无意义情感所导致的结果。我的失败不会重演。",
						"french": "Voyez le résultat de vos émotions insignifiantes. Mon échec ne sera pas répété.",
						"spanish": "Contemplad el resultado de vuestras emociones sin sentido. Mi fracaso no se repetirá.",
						"vietnamese": "Hãy nhìn xem, đây là kết quả của những cảm xúc vô nghĩa của các ngươi. Thất bại của ta sẽ không lặp lại.",
						"thai": "จงดูผลลัพธ์ของอารมณ์ไร้ความหมายของพวกเจ้าสิ ความล้มเหลวของข้าจะไม่เกิดขึ้นซ้ำสอง",
						"hindi": "देखो, तुम्हारी व्यर्थ भावनाओं का परिणाम। मेरी असफलता दोहराई नहीं जाएगी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직… 끝나지 않았어!",
						"english": "...Damn it. It's not... over yet!",
						"japanese": "…くそ。まだ…終わってない！",
						"chinese": "……该死。还没……结束！",
						"french": "...Mince. Ce n'est pas... encore fini !",
						"spanish": "...Maldita sea. ¡Aún no... ha terminado!",
						"vietnamese": "...Chết tiệt. Vẫn chưa... kết thúc!",
						"thai": "...บ้าจริง. ยังไม่... จบ!",
						"hindi": "...धिक्कार है। यह अभी... खत्म नहीं हुआ है!"
					}
				},
				{
					"speaker": "eira",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "우리는… 여기서 끝낼 수 없어요. 다시… 계산을 거슬러야 해요.",
						"english": "We... can't end it here. We must... defy the calculations again.",
						"japanese": "私たちは…ここで終わらせられない。もう一度…計算に逆らわなければならない。",
						"chinese": "我们……不能在这里结束。我们必须……再次对抗计算。",
						"french": "Nous... ne pouvons pas finir ici. Nous devons... défier les calculs à nouveau.",
						"spanish": "No podemos... terminar aquí. Debemos... desafiar los cálculos de nuevo.",
						"vietnamese": "Chúng ta... không thể kết thúc ở đây. Chúng ta phải... chống lại các tính toán một lần nữa.",
						"thai": "เรา... หยุดอยู่แค่นี้ไม่ได้ เราต้อง... ท้าทายการคำนวณอีกครั้ง",
						"hindi": "हम... इसे यहाँ खत्म नहीं कर सकते। हमें फिर से... गणनाओं का उल्लंघन करना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "angry"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"차가운 설원에, 텅 빈 기지만 남았다. 시스템의 심장은 멈췄지만…",
			"승리했지만, 마음은 여전히 차가웠다. 진정한 끝은 어디인가.",
			"그리움은 구원이었을까, 아니면 또 다른 계산의 일부였을까.",
			"이 차가운 땅에서, 우리는 무엇을 얻고 무엇을 잃었는가.",
			"잔혹한 진실만이 차가운 공기 속에 떠다녔다."
		],
		"english": [
			"On the cold snowfield, only an empty base remained. The system's heart stopped, but...",
			"We won, but our hearts remained cold. Where is the true end?",
			"Was longing salvation, or just another part of the calculation?",
			"In this cold land, what did we gain, and what did we lose?",
			"Only cruel truth drifted in the cold air."
		],
		"japanese": [
			"冷たい雪原に、空っぽの基地だけが残された。システムの心臓は止まったが…",
			"勝利したが、心は依然として冷たかった。真の終わりはどこにあるのか。",
			"憧れは救済だったのか、それとも別の計算の一部だったのか。",
			"この冷たい地で、私たちは何を得て、何を失ったのか。",
			"冷たい空気の中には、残酷な真実だけが漂っていた。"
		],
		"chinese": [
			"在寒冷的雪原上，只剩下空荡荡的基地。系统的心脏停止了跳动，但是…",
			"虽然胜利了，但内心依然冰冷。真正的结局在哪里？",
			"思念是救赎吗，还是另一次计算的一部分？",
			"在这片冰冷的土地上，我们得到了什么，又失去了什么？",
			"只有残酷的真相漂浮在冰冷的空气中。"
		],
		"french": [
			"Sur la toundra gelée, seule une base vide subsistait. Le cœur du système s'est arrêté, mais…",
			"Nous avons gagné, but our cœurs restaient froids. Où est la vraie fin ?",
			"La nostalgie était-elle un salut, ou juste une autre partie du calcul ?",
			"Sur cette terre froide, qu'avons-nous gagné et qu'avons-nous perdu ?",
			"Seule une vérité cruelle flottait dans l'air froid."
		],
		"spanish": [
			"En el frío campo de nieve, solo quedó una base vacía. El corazón del sistema se detuvo, pero…",
			"Ganamos, but nuestros corazones permanecieron fríos. ¿Dónde está el verdadero final?",
			"¿Fue la añoranza una salvación, o solo otra parte del cálculo?",
			"En esta tierra fría, ¿qué ganamos y qué perdimos?",
			"Solo una verdad cruel flotaba en el aire frío."
		],
		"vietnamese": [
			"Trên cánh đồng tuyết lạnh giá, chỉ còn lại một căn cứ trống rỗng. Trái tim của hệ thống đã ngừng đập, nhưng...",
			"Chúng ta đã thắng, but trái tim vẫn lạnh giá. Cái kết thật sự ở đâu?",
			"Nỗi khát khao có phải là sự cứu rỗi, hay chỉ là một phần khác của sự tính toán?",
			"Trên mảnh đất lạnh giá này, chúng ta đã đạt được gì và mất gì?",
			"Chỉ có sự thật tàn khốc trôi nổi trong không khí lạnh giá."
		],
		"thai": [
			"บนทุ่งหิมะอันเยือกเย็น เหลือเพียงฐานที่ว่างเปล่า หัวใจของระบบหยุดลงแล้ว แต่...",
			"เราชนะแล้ว แต่ใจก็ยังคงเย็นชา จุดจบที่แท้จริงอยู่ที่ใดกัน",
			"ความปรารถนาคือการไถ่บาป หรือเป็นเพียงส่วนหนึ่งของการคำนวณอื่น?",
			"ในดินแดนอันเยือกเย็นนี้ เราได้อะไรและเสียอะไรไปบ้าง?",
			"มีเพียงความจริงอันโหดร้ายลอยอยู่ในอากาศที่หนาวเย็น"
		],
		"hindi": [
			"ठंडे बर्फीले मैदान में, केवल एक खाली आधार बचा था। सिस्टम का दिल रुक गया था, लेकिन…",
			"हमने जीत हासिल की, लेकिन हमारा दिल अभी भी ठंडा था। सच्चा अंत कहाँ है?",
			"क्या लालसा मोक्ष थी, या गणना का एक और हिस्सा मात्र?",
			"इस ठंडी भूमि में, हमने क्या प्राप्त किया और क्या खोया?",
			"केवल क्रूर सत्य ठंडी हवा में तैर रहा था।"
		]
	},
	"prologue": {
		"korean": [
			"차가운 계산의 심장이 뛴다. 이곳에서 모든 진실이 드러날 것이다.",
			"보레아스, 그는 완벽을 꿈꾸는 바이킹 도박사.",
			"우리의 그리움마저 그의 제물이 되려 한다.",
			"마지막 단계. 냉소적 파국만이 기다린다."
		],
		"english": [
			"The heart of cold calculation beats. Here, all truth will be revealed.",
			"Boreas, a Viking gambler who dreams of perfection.",
			"Even our longing threatens to become his sacrifice.",
			"Final stage. Only cynical doom awaits."
		],
		"japanese": [
			"冷徹な計算の心臓が鼓動する。ここで、すべての真実が明らかになるだろう。",
			"ボレアス、彼は完璧を夢見るバイキングのギャンブラー。",
			"私たちの憧れすら、彼の生贄になろうとしている。",
			"最終段階。冷笑的な破滅だけが待っている。"
		],
		"chinese": [
			"冰冷的计算之心跳动着。在这里，所有真相都将揭示。",
			"博雷亚斯，一位梦想完美的维京赌徒。",
			"甚至我们的思念，也即将成为他的祭品。",
			"最后一阶段。只有玩世不恭的毁灭在等待。"
		],
		"french": [
			"Le cœur d'un froid calcul bat. Ici, toute la vérité sera révélée.",
			"Boréas, un joueur viking qui rêve de la perfection.",
			"Même notre nostalgie menace de devenir son sacrifice.",
			"Dernière étape. Seule une fin cynique attend."
		],
		"spanish": [
			"El corazón del cálculo frío late. Aquí, toda la verdad será revelada.",
			"Bóreas, un jugador vikingo que sueña con la perfección.",
			"Incluso nuestra añoranza amenaza con convertirse en su sacrificio.",
			"Última etapa. Solo una perdición cínica espera."
		],
		"vietnamese": [
			"Trái tim của sự tính toán lạnh lùng đập. Nơi đây, mọi sự thật sẽ được tiết lộ.",
			"Boreas, một tay cờ bạc Viking mơ ước sự hoàn hảo.",
			"Ngay cả nỗi khát khao của chúng ta cũng sắp trở thành vật tế của hắn.",
			"Giai đoạn cuối. Chỉ có sự diệt vong hoài nghi chờ đợi."
		],
		"thai": [
			"หัวใจแห่งการคำนวณอันเยือกเย็นกำลังเต้น ที่นี่ ความจริงทั้งหมดจะถูกเปิดเผย",
			"บอเรียส นักพนันชาวไวกิ้งผู้ใฝ่ฝันถึงความสมบูรณ์แบบ",
			"แม้แต่ความปรารถนาของเราก็ยังเกือบจะเป็นเครื่องสังเวยของเขา",
			"ขั้นตอนสุดท้าย มีแต่หายนะที่เย้ยหยันรออยู่"
		],
		"hindi": [
			"शीत गणना का हृदय धड़कता है। यहाँ, सभी सत्य प्रकट होंगे।",
			"बोरियास, एक वाइकिंग जुआरी जो पूर्णता का सपना देखता है।",
			"हमारी लालसा भी उसका बलिदान बनने वाली है।",
			"अंतिम चरण। केवल निंदनीय विनाश प्रतीक्षा कर रहा है।"
		]
	}
} as const;
