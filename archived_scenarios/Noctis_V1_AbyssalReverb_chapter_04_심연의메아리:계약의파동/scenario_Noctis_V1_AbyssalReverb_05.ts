export const scenario_Noctis_V1_AbyssalReverb_05 = {
	"scenario_id": "Noctis_V1_AbyssalReverb_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "hell",
	"actors": {
		"ash": {
			"id": "mon_b225f5fa-59a1-47bb-b4c5-e73bf9e7192a",
			"name": {
				"korean": "애쉬",
				"english": "Ash",
				"japanese": "アッシュ",
				"chinese": "艾什",
				"french": "Ash",
				"spanish": "Ash",
				"vietnamese": "Ash",
				"thai": "แอช",
				"hindi": "ऐश"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/d84413a8-9d6f-4a40-5d36-75e431fb9900/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/78281fca-e4b8-45cc-68ef-7df3fef74200/public"
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
						"korean": "최후의 균열이 눈앞에 펼쳐졌다. 심연의 심장이 이곳에서 뛰고 있었다.",
						"english": "The final rift unfolded before my eyes. The Abyss's heart beat here.",
						"japanese": "最後の亀裂が目の前に広がった。深淵の心臓がここで脈打っていた。",
						"chinese": "最终裂隙在我眼前展开。深渊之心在此跳动。",
						"french": "La dernière faille se déploya devant mes yeux. Le cœur de l'Abysse battait ici.",
						"spanish": "La grieta final se desplegó ante mis ojos. El corazón del Abismo latía aquí.",
						"vietnamese": "Vết nứt cuối cùng mở ra trước mắt. Trái tim của Vực thẳm đang đập ở đây.",
						"thai": "รอยแยกสุดท้ายเปิดเผยต่อหน้า หัวใจของขุมนรกเต้นอยู่ที่นี่",
						"hindi": "अंतिम दरार मेरी आँखों के सामने खुल गई। रसातल का हृदय यहाँ धड़क रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이곳이… 모든 것의 끝이자 시작인가.",
						"english": "Is this... the end and the beginning of everything?",
						"japanese": "ここが…すべてが終わり、そして始まる場所なのか。",
						"chinese": "这里是……一切的终结，也是开始吗？",
						"french": "Est-ce ici... la fin et le début de tout ?",
						"spanish": "¿Es este... el fin y el principio de todo?",
						"vietnamese": "Đây là... điểm kết thúc và cũng là điểm bắt đầu của mọi thứ sao?",
						"thai": "ที่นี่... คือจุดสิ้นสุดและจุดเริ่มต้นของทุกสิ่งหรือ",
						"hindi": "क्या यह... सब कुछ का अंत और शुरुआत है?"
					}
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "녹티스가 이곳에서 너희를 기다리고 있어.",
						"english": "Noctis awaits you here.",
						"japanese": "ノクティスがここで待っている。",
						"chinese": "诺克提斯在这里等你。",
						"french": "Noctis vous attend ici.",
						"spanish": "Noctis os espera aquí.",
						"vietnamese": "Noctis đang đợi các ngươi ở đây.",
						"thai": "น็อกทิสรอพวกเจ้าอยู่ที่นี่",
						"hindi": "नॉक्टिस यहीं तुम्हारी प्रतीक्षा कर रहा है।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "하지만 조심해. 그는 혼자가 아니야.",
						"english": "But be careful. He's not alone.",
						"japanese": "だが気をつけろ。彼は一人じゃない。",
						"chinese": "但要小心。他不是一个人。",
						"french": "Mais soyez prudents. Il n'est pas seul.",
						"spanish": "Pero tened cuidado. No está solo.",
						"vietnamese": "Nhưng hãy cẩn thận. Hắn không đơn độc.",
						"thai": "แต่จงระวัง เขาไม่ได้มาคนเดียว",
						"hindi": "लेकिन सावधान रहो। वह अकेला नहीं है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ash",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "녹티스는 심연의 안정을 위해 영혼이 필요하다고 했지.",
						"english": "Noctis said souls were needed for the Abyss's stability.",
						"japanese": "ノクティスは深淵の安定のために魂が必要だと言った。",
						"chinese": "诺克提斯说，为了深渊的稳定需要灵魂。",
						"french": "Noctis a dit que des âmes étaient nécessaires à la stabilité des Abysses.",
						"spanish": "Noctis dijo que las almas eran necesarias para la estabilidad del Abismo.",
						"vietnamese": "Noctis nói rằng linh hồn là cần thiết để ổn định Vực Thẳm.",
						"thai": "น็อกทิสบอกว่าดวงวิญญาณจำเป็นต่อความมั่นคงของห้วงอเวจี",
						"hindi": "नॉクトिस ने कहा कि पाताल की स्थिरता के लिए आत्माओं की ज़रूरत है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "맞아. 균형을 위한다고 했어.",
						"english": "Right. He said it was for balance.",
						"japanese": "そうだ。均衡のためだと言っていた。",
						"chinese": "对。他说这是为了平衡。",
						"french": "C'est ça. Il a dit que c'était pour l'équilibre.",
						"spanish": "Exacto. Dijo que era por el equilibrio.",
						"vietnamese": "Đúng vậy. Hắn nói là vì sự cân bằng.",
						"thai": "ใช่ เขาบอกว่าเพื่อความสมดุล",
						"hindi": "सही है। उसने कहा कि यह संतुलन के लिए था।"
					}
				},
				{
					"content": {
						"korean": "그의 저울은 단순한 심판이 아니었어. 거대한 부름을 위한 서곡이었다.",
						"english": "His scales weren't just a judgment. They were a prelude to a grand summons.",
						"japanese": "彼の天秤はただの審判ではなかった。それは大いなる召喚への序曲だったのだ。",
						"chinese": "他的天平不只是审判。那是为了巨大召唤的序曲。",
						"french": "Ses balances n'étaient pas un simple jugement. Elles étaient le prélude à un grand appel.",
						"spanish": "Sus balanzas no eran solo un juicio. Eran un preludio a una gran invocación.",
						"vietnamese": "Cân của hắn không chỉ là phán xét đơn thuần. Đó là khúc dạo đầu cho một lời triệu hồi vĩ đại.",
						"thai": "ตาชั่งของเขาไม่ใช่แค่การพิพากษา แต่มันคือบทนำของการอัญเชิญอันยิ่งใหญ่",
						"hindi": "उसकी तुला सिर्फ़ एक न्याय नहीं थी। यह एक महान आवाहन की प्रस्तावना थी।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "부름? 대체 뭘 부른다는 거야?",
						"english": "A summons? What exactly is being summoned?",
						"japanese": "召喚？一体何を召喚するというんだ？",
						"chinese": "召唤？到底在召唤什么？",
						"french": "Un appel ? Que va-t-il appeler au juste ?",
						"spanish": "¿Una invocación? ¿Qué se está invocando exactamente?",
						"vietnamese": "Triệu hồi ư? Rốt cuộc là triệu hồi cái gì?",
						"thai": "อัญเชิญ? อัญเชิญอะไรกันแน่?",
						"hindi": "आवाहन? आख़िर क्या बुलाया जा रहा है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ash",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "base",
					"content": {
						"korean": "모든 계약에는 숨겨진 조항이 있어.",
						"english": "Every contract has a hidden clause.",
						"japanese": "全ての契約には隠された条項がある。",
						"chinese": "所有的契约都有隐藏条款。",
						"french": "Chaque contrat a une clause cachée.",
						"spanish": "Todo contrato tiene una cláusula oculta.",
						"vietnamese": "Mọi hợp đồng đều có điều khoản ẩn.",
						"thai": "ทุกสัญญาล้วนมีข้อตกลงที่ซ่อนอยู่",
						"hindi": "हर अनुबंध में एक गुप्त शर्त होती है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "신과의 계약에도?",
						"english": "Even contracts with gods?",
						"japanese": "神との契約にもか？",
						"chinese": "甚至与神的契约也一样吗？",
						"french": "Même avec les dieux ?",
						"spanish": "¿Incluso los contratos con dioses?",
						"vietnamese": "Kể cả hợp đồng với thần linh ư?",
						"thai": "แม้แต่สัญญากับเทพเจ้าหรือ?",
						"hindi": "देवताओं के साथ अनुबंध में भी?"
					}
				},
				{
					"content": {
						"korean": "녹티스도 마찬가지야. 그는 계약의 신이지만, 더 큰 존재에게 묶여 있지.",
						"english": "Noctis is no different. He's a god of contracts, but bound to a greater being.",
						"japanese": "ノクティスも同じだ。彼は契約の神だが、より大きな存在に縛られている。",
						"chinese": "诺克提斯也一样。他是契约之神，却被一个更强大的存在束缚着。",
						"french": "Noctis est pareil. C'est un dieu des contrats, mais il est lié à un être plus grand.",
						"spanish": "Noctis no es diferente. Es un dios de los contratos, pero está atado a un ser mayor.",
						"vietnamese": "Noctis cũng vậy. Hắn là thần của các hợp đồng, nhưng bị ràng buộc bởi một tồn tại lớn hơn.",
						"thai": "น็อกทิสก็เหมือนกัน เขาคือเทพแห่งสัญญา แต่ถูกผูกมัดกับสิ่งมีชีวิตที่ยิ่งใหญ่กว่า",
						"hindi": "नॉक्टिस भी ऐसा ही है। वह अनुबंधों का देवता है, लेकिन एक बड़ी सत्ता से बंधा हुआ है।"
					},
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 그는 우리의 자유를 줬다고 속인 건가?",
						"english": "So he tricked us into thinking he gave us freedom?",
						"japanese": "では、彼は我々に自由を与えたと偽ったのか？",
						"chinese": "那么他骗我们说他给了我们自由吗？",
						"french": "Alors il nous a trompés en nous faisant croire qu'il nous avait donné la liberté ?",
						"spanish": "¿Entonces nos engañó haciéndonos creer que nos había dado la libertad?",
						"vietnamese": "Vậy hắn đã lừa dối chúng ta rằng hắn đã ban cho chúng ta tự do sao?",
						"thai": "ถ้าอย่างนั้น เขาก็หลอกเราว่าเขาให้เสรีภาพแก่เราหรือ?",
						"hindi": "तो क्या उसने हमें आज़ादी दी है, ऐसा कहकर धोखा दिया है?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "그는 자신의 역할에 충실했을 뿐이야. 비극적이게도.",
						"english": "He merely fulfilled his role. Tragically.",
						"japanese": "彼はただ、自分の役割を果たしただけだ。悲劇的にも。",
						"chinese": "他只是忠于职守。可悲的是。",
						"french": "Il n'a fait que remplir son rôle. Tragiquement.",
						"spanish": "Él solo cumplió su papel. Trágicamente.",
						"vietnamese": "Hắn ta chỉ hoàn thành vai trò của mình. Thật bi thảm.",
						"thai": "เขาเพียงแค่ทำตามหน้าที่ของเขาเท่านั้น น่าเศร้าจริง ๆ",
						"hindi": "उसने बस अपनी भूमिका निभाई। दुखद रूप से।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction"
				},
				{
					"content": {
						"korean": "심연은 스스로 균형을 찾으려 하지 않아.",
						"english": "The Abyss does not seek balance on its own.",
						"japanese": "深淵は自ら均衡を求めようとはしない。",
						"chinese": "深渊不会自行寻求平衡。",
						"french": "L'Abysse ne cherche pas l'équilibre par lui-même.",
						"spanish": "El Abismo no busca el equilibrio por sí mismo.",
						"vietnamese": "Vực thẳm không tự mình tìm kiếm sự cân bằng.",
						"thai": "ห้วงอเวจีไม่แสวงหาสมดุลด้วยตัวเอง",
						"hindi": "अगाध गहराई अपने आप संतुलन नहीं खोजती।"
					},
					"speaker": "ash",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럼 누가 균형을 강제했다는 거야?",
						"english": "Then who forced the balance?",
						"japanese": "なら、誰が均衡を強制したというのだ？",
						"chinese": "那是谁强行维持了平衡？",
						"french": "Alors, qui a imposé l'équilibre ?",
						"spanish": "Entonces, ¿quién forzó el equilibrio?",
						"vietnamese": "Vậy ai đã cưỡng ép sự cân bằng đó?",
						"thai": "แล้วใครกันที่บังคับให้เกิดสมดุล?",
						"hindi": "तो संतुलन किसने थोपा?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ash",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "녹티스는 단순한 수호자가 아니었어. 그는 제물을 바치는 자였지.",
						"english": "Noctis wasn't just a guardian. He was a sacrificer.",
						"japanese": "ノクティスは単なる守護者ではなかった。彼は生贄を捧げる者だった。",
						"chinese": "诺克提斯不只是一个守护者。他是一个献祭者。",
						"french": "Noctis n'était pas qu'un gardien. C'était un sacrificateur.",
						"spanish": "Noctis no era solo un guardián. Él era un sacrificador.",
						"vietnamese": "Noctis không chỉ là một người bảo vệ. Hắn là kẻ hiến tế.",
						"thai": "น็อคติสไม่ใช่แค่ผู้พิทักษ์ เขาคือผู้บูชายัญ",
						"hindi": "नॉक्टिस सिर्फ एक संरक्षक नहीं था। वह एक बलि देने वाला था।"
					}
				},
				{
					"content": {
						"korean": "제물? 우리가 모은 영혼들이?",
						"english": "Sacrifices? The souls we gathered?",
						"japanese": "生贄だと？我々が集めた魂が？",
						"chinese": "献祭？我们收集的灵魂？",
						"french": "Des sacrifices ? Les âmes que nous avons rassemblées ?",
						"spanish": "¿Sacrificios? ¿Las almas que reunimos?",
						"vietnamese": "Vật tế sao? Những linh hồn chúng ta đã tập hợp ư?",
						"thai": "เครื่องบูชายัญ? วิญญาณที่เราสะสมมางั้นหรือ?",
						"hindi": "बलिदान? वे आत्माएँ जो हमने इकट्ठी कीं?"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ash",
					"emotion": "sad",
					"content": {
						"korean": "그래. 영혼들은 잠든 고대 존재를 깨우기 위한 제물이었어.",
						"english": "Yes. The souls were sacrifices to awaken an ancient, slumbering entity.",
						"japanese": "そうだ。魂は、眠れる古の存在を目覚めさせるための生贄だったのだ。",
						"chinese": "是的。这些灵魂是为了唤醒一个沉睡的古老存在而献祭的。",
						"french": "Oui. Les âmes étaient des sacrifices pour éveiller une entité ancienne et endormie.",
						"spanish": "Sí. Las almas eran sacrificios para despertar a una antigua entidad durmiente.",
						"vietnamese": "Đúng vậy. Những linh hồn đó là vật tế để đánh thức một thực thể cổ xưa đang ngủ say.",
						"thai": "ใช่แล้ว วิญญาณเหล่านั้นคือเครื่องบูชายัญเพื่อปลุกสิ่งมีชีวิตโบราณที่หลับใหล",
						"hindi": "हाँ। आत्माएँ एक प्राचीन, सोई हुई सत्ता को जगाने के लिए बलिदान थीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "진정한 심연의 주인… 대체 누구야!",
						"english": "The true master of the Abyss... who is it?!",
						"japanese": "真の深淵の主…一体誰なんだ！",
						"chinese": "深渊的真正主人……到底是谁？！",
						"french": "Le véritable maître de l'Abysse... qui est-ce ?!",
						"spanish": "El verdadero señor del Abismo... ¡¿quién es?!",
						"vietnamese": "Chủ nhân thực sự của Vực thẳm… rốt cuộc là ai!",
						"thai": "เจ้าแห่งห้วงอเวจีที่แท้จริง... ใครกัน!",
						"hindi": "अगाध गहराई का असली मालिक... वह कौन है?!"
					}
				},
				{
					"content": {
						"korean": "곧 알게 될 거야. 이곳에서.",
						"english": "You'll soon find out. Here.",
						"japanese": "すぐに分かるだろう。ここで。",
						"chinese": "你很快就会知道的。就在这里。",
						"french": "Tu le sauras bientôt. Ici.",
						"spanish": "Pronto lo sabrás. Aquí.",
						"vietnamese": "Ngươi sẽ sớm biết thôi. Tại đây.",
						"thai": "เจ้าจะได้รู้ในไม่ช้า ที่นี่แหละ",
						"hindi": "तुम्हें जल्द ही पता चल जाएगा। यहीं पर।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						4
					],
					"speaker": "boss",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "왔구나. 심연의 균형을 거스르려는 어리석은 자들.",
						"english": "You've come. You fools who dare defy the balance of the Abyss.",
						"japanese": "来たか。深淵の均衡に逆らおうとする愚か者どもめ。",
						"chinese": "你们来了。企图违抗深渊平衡的愚蠢之人。",
						"french": "Vous êtes venus. Fous qui osez défier l'équilibre de l'Abysse.",
						"spanish": "Han llegado. Necios que osan desafiar el equilibrio del Abismo.",
						"vietnamese": "Các ngươi đã đến rồi. Những kẻ ngu ngốc dám thách thức sự cân bằng của Vực thẳm.",
						"thai": "มาแล้วสินะ พวกคนโง่ที่กล้าฝืนสมดุลของห้วงอเวจี",
						"hindi": "तुम आ गए। मूर्ख जो अगाध गहराई के संतुलन को चुनौती देने की हिम्मत करते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "녹티스! 네 진짜 목적을 알았어!",
						"english": "Noctis! We know your true purpose!",
						"japanese": "ノクティス！お前の本当の目的は分かっているぞ！",
						"chinese": "诺克提斯！我们知道你真正的目的了！",
						"french": "Noctis ! Nous connaissons ton véritable but !",
						"spanish": "¡Noctis! ¡Conocemos tu verdadero propósito!",
						"vietnamese": "Noctis! Chúng ta đã biết mục đích thực sự của ngươi rồi!",
						"thai": "น็อคติส! เรารู้จุดประสงค์ที่แท้จริงของแกแล้ว!",
						"hindi": "नॉक्टिस! हमें तुम्हारा असली मकसद पता चल गया है!"
					}
				},
				{
					"content": {
						"korean": "내 목적은 언제나 균형이었다. 이 세계를 지키기 위한 유일한 방법.",
						"english": "My purpose has always been balance. The only way to protect this world.",
						"japanese": "私の目的は常に均衡だった。この世界を守る唯一の方法だ。",
						"chinese": "我的目的始终是平衡。这是守护这个世界的唯一方法。",
						"french": "Mon but a toujours été l'équilibre. Le seul moyen de protéger ce monde.",
						"spanish": "Mi propósito siempre ha sido el equilibrio. La única forma de proteger este mundo.",
						"vietnamese": "Mục đích của ta luôn là sự cân bằng. Cách duy nhất để bảo vệ thế giới này.",
						"thai": "จุดประสงค์ของข้าคือความสมดุลเสมอมา หนทางเดียวที่จะปกป้องโลกนี้ได้",
						"hindi": "मेरा उद्देश्य हमेशा संतुलन रहा है। इस दुनिया की रक्षा करने का एकमात्र तरीका।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그리고 이제, 진정한 균형이 깨어날 시간이다.",
						"english": "And now, it is time for true balance to awaken.",
						"japanese": "そして今、真の均衡が目覚める時が来た。",
						"chinese": "而现在，是时候唤醒真正的平衡了。",
						"french": "Et maintenant, il est temps que le véritable équilibre s'éveille.",
						"spanish": "Y ahora, es el momento de que el verdadero equilibrio despierte.",
						"vietnamese": "Và giờ đây, đã đến lúc sự cân bằng thực sự thức tỉnh.",
						"thai": "และบัดนี้ ถึงเวลาที่สมดุลที่แท้จริงจะตื่นขึ้นแล้ว",
						"hindi": "और अब, यह वास्तविक संतुलन के जागने का समय है।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "크크… 이리 될 줄 알았다.",
						"english": "Heh heh... I knew it would come to this.",
						"japanese": "クク… こうなることは分かっていた。",
						"chinese": "呵呵… 我就知道会这样。",
						"french": "Hé hé... Je savais que ça finirait ainsi.",
						"spanish": "Je je... Sabía que esto pasaría.",
						"vietnamese": "Khà khà… Ta đã biết sẽ thành ra thế này.",
						"thai": "ฮิฮิ... ข้ารู้ว่ามันจะเป็นแบบนี้",
						"hindi": "ही ही... मुझे पता था ऐसा ही होगा।"
					}
				},
				{
					"content": {
						"korean": "하지만 균형은… 결코 깨지지 않아. 내가 사라져도….",
						"english": "But balance... it can never be broken. Even if I disappear...",
						"japanese": "だが均衡は…決して破れない。私が消えても…。",
						"chinese": "但平衡… 绝不会被打破。即使我消失…",
						"french": "Mais l'équilibre... il ne peut jamais être brisé. Même si je disparais...",
						"spanish": "Pero el equilibrio... nunca se romperá. Incluso si desaparezco...",
						"vietnamese": "Nhưng sự cân bằng… không bao giờ bị phá vỡ. Ngay cả khi ta biến mất…",
						"thai": "แต่ความสมดุล... มันไม่มีวันแตกสลาย แม้ว่าข้าจะหายไปก็ตาม...",
						"hindi": "लेकिन संतुलन... यह कभी नहीं टूटता। भले ही मैं गायब हो जाऊं..."
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ash",
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "ash",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "녹티스는 균형의 수호자였지만, 동시에 제물이었다.",
						"english": "Noctis was a guardian of balance, yet also a sacrifice.",
						"japanese": "ノクティスは均衡の守護者であったが、同時に生贄でもあった。",
						"chinese": "诺克提斯是平衡的守护者，但同时也是祭品。",
						"french": "Noctis était un gardien de l'équilibre, mais aussi un sacrifice.",
						"spanish": "Noctis era un guardián del equilibrio, pero también un sacrificio.",
						"vietnamese": "Noctis là người bảo vệ sự cân bằng, nhưng đồng thời cũng là vật tế.",
						"thai": "น็อกติสเป็นผู้พิทักษ์ความสมดุล แต่ก็เป็นเครื่องสังเวยด้วย",
						"hindi": "नॉक्टिस संतुलन का संरक्षक था, फिर भी एक बलिदान भी।"
					}
				},
				{
					"content": {
						"korean": "그럼 진정한 심연의 주인은… 아직도 남아있다는 거야?",
						"english": "Then the true master of the Abyss... still remains?",
						"japanese": "では、真の深淵の主は…まだ残っていると？",
						"chinese": "那么，真正的深渊之主… 仍然存在吗？",
						"french": "Alors le véritable maître des Abysses... demeure toujours ?",
						"spanish": "Entonces, ¿el verdadero señor del Abismo... todavía permanece?",
						"vietnamese": "Vậy thì chủ nhân thực sự của Vực thẳm… vẫn còn tồn tại sao?",
						"thai": "ถ้าอย่างนั้น เจ้าแห่งห้วงลึกที่แท้จริง... ยังคงอยู่หรือ?",
						"hindi": "तो फिर पाताल का सच्चा स्वामी... अभी भी बचा हुआ है?"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래. 이제 시작일 뿐이야. 깨어난 고대 존재가 너희를 기다릴 거야.",
						"english": "Yes. This is just the beginning. The awakened ancient being awaits you.",
						"japanese": "そうだ。これは始まりに過ぎない。目覚めた古の存在が、お前たちを待っているだろう。",
						"chinese": "没错。这只是个开始。苏醒的古老存在正在等待着你们。",
						"french": "Oui. Ce n'est que le début. L'être ancien éveillé vous attendra.",
						"spanish": "Sí. Esto es solo el principio. El ser antiguo despertado os esperará.",
						"vietnamese": "Đúng vậy. Đây chỉ là khởi đầu. Thực thể cổ đại đã thức tỉnh đang chờ đợi các ngươi.",
						"thai": "ใช่ นี่เป็นเพียงจุดเริ่มต้น สิ่งมีชีวิตโบราณที่ตื่นขึ้นมารอพวกเจ้าอยู่",
						"hindi": "हाँ। यह तो बस शुरुआत है। जागृत प्राचीन सत्ता तुम्हारा इंतज़ार कर रही है।"
					},
					"type": "speech",
					"speaker": "ash",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "균열은 닫혔지만, 심연의 메아리는 더욱 커졌다.",
						"english": "The rift has closed, but the echo of the Abyss has grown louder.",
						"japanese": "亀裂は閉じたが、深淵の残響はさらに大きくなった。",
						"chinese": "裂缝已经关闭，但深渊的回响却变得更加响亮了。",
						"french": "La faille s'est refermée, mais l'écho des Abysses s'est amplifié.",
						"spanish": "La grieta se ha cerrado, pero el eco del Abismo se ha hecho más fuerte.",
						"vietnamese": "Vết nứt đã đóng lại, nhưng tiếng vọng của Vực thẳm lại càng lớn hơn.",
						"thai": "รอยแยกปิดลงแล้ว แต่เสียงสะท้อนจากห้วงลึกกลับดังขึ้น",
						"hindi": "दरार बंद हो गई है, लेकिन पाताल की गूँज और तेज़ हो गई है।"
					}
				},
				{
					"content": {
						"korean": "세계를 지키려는 새로운 계약이 필요했다. 이제야 진정한 여정이 시작된 것이다.",
						"english": "A new pact was needed to protect the world. Now, the true journey has begun.",
						"japanese": "世界を守るための新たな契約が必要だった。今、真の旅が始まったのだ。",
						"chinese": "需要一个新的契约来守护世界。现在，真正的旅程才刚刚开始。",
						"french": "Un nouveau pacte était nécessaire pour protéger le monde. Maintenant, le véritable voyage a commencé.",
						"spanish": "Se necesitaba un nuevo pacto para proteger el mundo. Ahora, el verdadero viaje ha comenzado.",
						"vietnamese": "Một giao ước mới là cần thiết để bảo vệ thế giới. Giờ đây, cuộc hành trình thực sự đã bắt đầu.",
						"thai": "จำเป็นต้องมีพันธสัญญาใหม่เพื่อปกป้องโลก บัดนี้ การเดินทางที่แท้จริงได้เริ่มต้นขึ้นแล้ว",
						"hindi": "दुनिया की रक्षा के लिए एक नए समझौते की ज़रूरत थी। अब, सच्ची यात्रा शुरू हो गई है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 시도였다. 너희의 영혼 또한 균형의 일부가 될 것이다.",
						"english": "A foolish attempt. Your souls, too, shall become part of the balance.",
						"japanese": "愚かな試みだった。お前たちの魂もまた、均衡の一部となるだろう。",
						"chinese": "愚蠢的尝试。你们的灵魂也将成为平衡的一部分。",
						"french": "Tentative insensée. Vos âmes aussi deviendront une partie de l'équilibre.",
						"spanish": "Un intento insensato. Vuestras almas también formarán parte del equilibrio.",
						"vietnamese": "Một nỗ lực ngu xuẩn. Linh hồn của các ngươi cũng sẽ trở thành một phần của sự cân bằng.",
						"thai": "เป็นการพยายามที่โง่เขลา วิญญาณของพวกเจ้าก็จะกลายเป็นส่วนหนึ่งของความสมดุลด้วย",
						"hindi": "एक मूर्खतापूर्ण प्रयास था। तुम्हारी आत्माएँ भी संतुलन का हिस्सा बन जाएँगी।"
					},
					"speaker": "boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어. 반드시 막을 거야!",
						"english": "It's not over yet... I will definitely stop this!",
						"japanese": "まだ… 終わってない。必ず止めてみせる！",
						"chinese": "还没… 结束。我一定会阻止你！",
						"french": "Ce n'est pas encore… fini. Je l'arrêterai à tout prix !",
						"spanish": "Todavía no… ha terminado. ¡Lo detendré!",
						"vietnamese": "Chưa… kết thúc đâu. Ta nhất định sẽ ngăn ngươi lại!",
						"thai": "ยัง...ไม่จบ! ข้าจะหยุดมันให้ได้!",
						"hindi": "अभी… खत्म नहीं हुआ है। मैं तुम्हें ज़रूर रोकूँगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "크크… 그 분노, 언젠가 네 목을 죌 것이다.",
						"english": "Heh heh... That rage will choke you someday.",
						"japanese": "クク… その怒り、いつかお前の首を絞めるだろう。",
						"chinese": "呵呵… 那份愤怒，终有一天会掐住你的喉咙。",
						"french": "Hé hé… Cette fureur t'étranglera un jour.",
						"spanish": "Je je… Esa ira te ahogará algún día.",
						"vietnamese": "Khà khà… Cơn thịnh nộ đó, một ngày nào đó sẽ siết lấy cổ ngươi.",
						"thai": "คิกๆ... ความโกรธแค้นนั้น วันหนึ่งจะรัดคอเจ้า!",
						"hindi": "हँ हँ… वह क्रोध किसी दिन तुम्हारा गला घोंट देगा।"
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"녹티스의 저울이 침묵하자, 심연의 균열은 서서히 닫혔다.",
			"세계는 잠시 숨을 돌렸지만, 그림자 없는 자들의 발자국은 여전히 남아 있었다.",
			"그의 죽음은 구원이었을까, 아니면 더 큰 속박의 시작일까.",
			"균형의 진정한 의미. 그것을 찾아 떠나는 여정은 이제부터였다."
		],
		"english": [
			"As Noctis's scales fell silent, the Abyss's rift slowly closed.",
			"The world breathed for a moment, but the footprints of the shadowless remained.",
			"Was his death salvation, or the beginning of a greater bondage?",
			"The true meaning of balance. The journey to find it began now."
		],
		"japanese": [
			"ノクティスの天秤が沈黙すると、深淵の亀裂はゆっくりと閉じた。",
			"世界は一時息を吹き返したが、影なき者たちの足跡は依然として残っていた。",
			"彼の死は救済だったのか、それともより大きな束縛の始まりだったのか。",
			"均衡の真の意味。それを見つける旅は、今から始まったばかりだった。"
		],
		"chinese": [
			"随着诺克提斯的秤沉默，深渊的裂隙缓缓关闭。",
			"世界暂时得以喘息，但无影者的足迹依然存在。",
			"他的死亡是救赎，还是更大束缚的开始？",
			"平衡的真正意义。寻找它的旅程，才刚刚开始。"
		],
		"french": [
			"Quand la balance de Noctis se tut, la faille de l'Abysse se referma lentement.",
			"Le monde respira un instant, mais les empreintes des sans-ombre restaient.",
			"Sa mort fut-elle un salut, ou le début d'une plus grande servitude ?",
			"Le véritable sens de l'équilibre. Le voyage pour le trouver commençait maintenant."
		],
		"spanish": [
			"Cuando la balanza de Noctis calló, la grieta del Abismo se cerró lentamente.",
			"El mundo respiró por un momento, pero las huellas de los sin sombra permanecieron.",
			"¿Fue su muerte la salvación, o el comienzo de una mayor servidumbre?",
			"El verdadero significado del equilibrio. El viaje para encontrarlo comenzaba ahora."
		],
		"vietnamese": [
			"Khi cán cân của Noctis im lặng, vết nứt của Vực thẳm dần khép lại.",
			"Thế giới tạm thời thở phào nhẹ nhõm, nhưng dấu chân của những kẻ không bóng vẫn còn đó.",
			"Cái chết của anh ấy là sự cứu rỗi, hay khởi đầu của một sự ràng buộc lớn hơn?",
			"Ý nghĩa thực sự của sự cân bằng. Hành trình tìm kiếm nó bắt đầu từ bây giờ."
		],
		"thai": [
			"เมื่อสมดุลของน็อกติสสงบลง รอยแยกแห่งขุมนรกก็ปิดลงช้าๆ",
			"โลกได้พักหายใจชั่วขณะ แต่รอยเท้าของผู้ไร้เงายังคงอยู่",
			"การตายของเขาคือความรอด หรือจุดเริ่มต้นของการพันธนาการที่ยิ่งใหญ่กว่ากัน",
			"ความหมายที่แท้จริงของความสมดุล การเดินทางเพื่อค้นหาสิ่งนั้นเพิ่งเริ่มต้นขึ้น"
		],
		"hindi": [
			"जब नोक्टिस का संतुलन शांत हुआ, तो रसातल की दरार धीरे-धीरे बंद हो गई।",
			"दुनिया ने पल भर के लिए राहत की साँस ली, लेकिन छायाहीन लोगों के पदचिह्न अभी भी मौजूद थे।",
			"क्या उसकी मृत्यु मुक्ति थी, या एक बड़ी बंधन की शुरुआत?",
			"संतुलन का सच्चा अर्थ। उसे खोजने की यात्रा अब शुरू हुई।"
		]
	},
	"prologue": {
		"korean": [
			"세계의 끝, 심연의 최후 균열. 모든 것이 시작될 곳.",
			"녹티스는 기다리고 있었다. 그가 지켜온 고대의 균형 속에서.",
			"애쉬는 경고했다. 그 균형의 뒤에 숨겨진 진정한 주인을.",
			"절망과 희망이 교차하는 곳. 최후의 결전이 시작된다."
		],
		"english": [
			"World's end, the Abyss's final rift. Where all will begin.",
			"Noctis waited. Within the ancient balance he had guarded.",
			"Ash warned. Of the true master hidden behind that balance.",
			"Where despair and hope intersect. The final battle begins."
		],
		"japanese": [
			"世界の終わり、深淵の最後の亀裂。すべてが始まる場所。",
			"ノクティスは待っていた。彼が守り続けてきた古の均衡の中で。",
			"アッシュは警告した。その均衡の裏に隠された真の主を。",
			"絶望と希望が交差する場所。最後の決戦が始まる。"
		],
		"chinese": [
			"世界的尽头，深渊的最终裂隙。一切都将在此开始。",
			"诺克提斯在等待。在他守护的古老平衡之中。",
			"艾什发出了警告。关于隐藏在平衡背后的真正主人。",
			"绝望与希望交织之地。最终决战在此开始。"
		],
		"french": [
			"La fin du monde, la dernière faille de l'Abysse. Là où tout commencera.",
			"Noctis attendait. Au sein de l'ancien équilibre qu'il avait gardé.",
			"Ash avertit. Du véritable maître caché derrière cet équilibre.",
			"Là où le désespoir et l'espoir se croisent. La bataille finale commence."
		],
		"spanish": [
			"El fin del mundo, la última grieta del Abismo. Donde todo comenzará.",
			"Noctis esperaba. Dentro del antiguo equilibrio que había custodiado.",
			"Ash advirtió. Del verdadero maestro oculto tras ese equilibrio.",
			"Donde la desesperación y la esperanza se cruzan. La batalla final comienza."
		],
		"vietnamese": [
			"Tận cùng thế giới, vết nứt cuối cùng của vực thẳm. Nơi mọi thứ sẽ bắt đầu.",
			"Noctis đã chờ đợi. Trong sự cân bằng cổ xưa mà anh đã bảo vệ.",
			"Ash đã cảnh báo. Về chủ nhân thực sự ẩn sau sự cân bằng đó.",
			"Nơi tuyệt vọng và hy vọng giao thoa. Trận chiến cuối cùng bắt đầu."
		],
		"thai": [
			"จุดสิ้นสุดของโลก, รอยแยกสุดท้ายแห่งขุมนรก ที่ซึ่งทุกสิ่งจะเริ่มต้น",
			"น็อกติสรออยู่ ภายในความสมดุลโบราณที่เขาเฝ้ารักษามา",
			"แอชเตือน เกี่ยวกับเจ้าของที่แท้จริงที่ซ่อนอยู่เบื้องหลังความสมดุลนั้น",
			"ที่ที่ความสิ้นหวังและความหวังตัดกัน การต่อสู้ครั้งสุดท้ายเริ่มต้นขึ้น"
		],
		"hindi": [
			"दुनिया का अंत, रसातल की अंतिम दरार। वह जगह जहाँ सब कुछ शुरू होगा।",
			"नोक्टिस इंतजार कर रहा था। उस प्राचीन संतुलन के भीतर जिसकी उसने रक्षा की थी।",
			"ऐश ने चेतावनी दी। उस संतुलन के पीछे छिपे असली मालिक के बारे में।",
			"जहाँ निराशा और आशा एक-दूसरे को काटते हैं। अंतिम युद्ध शुरू होता है।"
		]
	}
} as const;
