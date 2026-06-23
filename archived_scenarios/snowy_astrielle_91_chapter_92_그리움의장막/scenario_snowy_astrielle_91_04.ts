export const scenario_snowy_astrielle_91_04 = {
	"scenario_id": "snowy_astrielle_91_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
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
					"speaker": "narrator",
					"content": {
						"korean": "차가운 광장에서 이바르의 연설이 울려 퍼진다. 시민들은 굳은 표정으로 귀 기울인다.",
						"english": "In the cold square, Ivar's speech echoes. Citizens listen with stern expressions.",
						"japanese": "冷たい広場でイヴァールの演説が響き渡る。市民はこわばった表情で耳を傾ける。",
						"chinese": "在冰冷的广场上，伊瓦尔的演讲回荡着。市民们面无表情地倾听。",
						"french": "Sur la place glaciale, le discours d'Ivar résonne. Les citoyens écoutent avec des expressions fermes.",
						"spanish": "En la fría plaza, el discurso de Ivar resuena. Los ciudadanos escuchan con expresiones serias.",
						"vietnamese": "Trong quảng trường lạnh lẽo, bài diễn thuyết của Ivar vang vọng. Dân chúng lắng nghe với vẻ mặt nghiêm nghị.",
						"thai": "ในจัตุรัสอันหนาวเหน็บ สุนทรพจน์ของอีวาร์ดังก้อง ผู้คนฟังด้วยสีหน้าเคร่งขรึม",
						"hindi": "ठंडे चौक में, इवार का भाषण गूँजता है। नागरिक कठोर भाव से सुनते हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "영원한 겨울로부터 도시를 지키는 유일한 방법은 '온기 유지 프로토콜'입니다!",
						"english": "The only way to protect the city from the eternal winter is the 'Warmth Maintenance Protocol'!",
						"japanese": "永遠の冬から都市を守る唯一の方法は「温かさ維持プロトコル」です！",
						"chinese": "保护城市免受永恒寒冬侵袭的唯一方法是‘温暖维持协议’！",
						"french": "La seule façon de protéger la ville de l'hiver éternel est le 'Protocole de Maintien de la Chaleur' !",
						"spanish": "¡La única forma de proteger la ciudad del invierno eterno es el 'Protocolo de Mantenimiento de la Calidez'!",
						"vietnamese": "Cách duy nhất để bảo vệ thành phố khỏi mùa đông vĩnh cửu là 'Nghị định thư Duy trì Hơi ấm'!",
						"thai": "วิธีเดียวที่จะปกป้องเมืองจากฤดูหนาวนิรันดร์คือ 'โปรโตคอลรักษ์ความอบอุ่น'!",
						"hindi": "शहर को शाश्वत सर्दी से बचाने का एकमात्र तरीका 'गर्मी बनाए रखने का प्रोटोकॉल' है!"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…그의 말은 늘 저렇게 확신에 차 있지.",
						"english": "…His words are always so full of conviction.",
						"japanese": "「…彼の言葉はいつもあんなにも確信に満ちている。」",
						"chinese": "……他的话总是那么充满确信。",
						"french": "…Ses mots sont toujours si pleins de conviction.",
						"spanish": "…Sus palabras siempre están tan llenas de convicción.",
						"vietnamese": "…Lời của hắn lúc nào cũng đầy vẻ tự tin như thế.",
						"thai": "…คำพูดของเขามักจะเต็มไปด้วยความเชื่อมั่นเสมอ",
						"hindi": "…उसके शब्द हमेशा इतने दृढ़ विश्वास से भरे होते हैं।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "모든 시민은 이 위대한 질서를 따라야 합니다! 그것이 강함이자 영광입니다!",
						"english": "All citizens must follow this great order! That is strength and glory!",
						"japanese": "全ての市民はこの偉大な秩序に従わなければなりません！それが強さであり栄光です！",
						"chinese": "所有市民都必须遵守这一伟大的秩序！那是力量与荣耀！",
						"french": "Tous les citoyens doivent suivre ce grand ordre ! C'est la force et la gloire !",
						"spanish": "¡Todos los ciudadanos deben seguir este gran orden! ¡Eso es fuerza y gloria!",
						"vietnamese": "Tất cả công dân phải tuân theo trật tự vĩ đại này! Đó là sức mạnh và vinh quang!",
						"thai": "พลเมืองทุกคนต้องปฏิบัติตามระเบียบอันยิ่งใหญ่นี้! นั่นคือความแข็งแกร่งและเกียรติยศ!",
						"hindi": "सभी नागरिकों को इस महान व्यवस्था का पालन करना चाहिए! वही शक्ति और गौरव है!"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "겨울이 깊어질수록… 이바르의 예산은 늘어난다는 소문이 돌고 있어.",
						"english": "As winter deepens… rumors say Ivar's budget increases.",
						"japanese": "冬が深まるにつれて…イヴァールの予算が増えるという噂が流れている。",
						"chinese": "随着冬天越来越深……有传言说伊瓦尔的预算增加了。",
						"french": "Plus l'hiver s'approfondit… des rumeurs disent que le budget d'Ivar augmente.",
						"spanish": "A medida que el invierno se profundiza… circulan rumores de que el presupuesto de Ivar aumenta.",
						"vietnamese": "Càng vào đông sâu… có tin đồn ngân sách của Ivar càng tăng.",
						"thai": "ยิ่งฤดูหนาวลึกซึ้งขึ้นเท่าไหร่… ก็มีข่าวลือว่างบประมาณของอีวาร์ก็เพิ่มขึ้น",
						"hindi": "जैसे-जैसे सर्दी गहराती है… अफवाहें फैल रही हैं कि इवार का बजट बढ़ता है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저항은 무의미합니다. 시스템의 완벽함에 순응하는 것이 여러분의 유일한 역할!",
						"english": "Resistance is futile. Your only role is to conform to the system's perfection!",
						"japanese": "抵抗は無意味です。システムの完璧さに従うことが、あなた方の唯一の役割です！",
						"chinese": "反抗毫无意义。顺从系统的完美，是你们唯一的职责！",
						"french": "La résistance est futile. Votre seul rôle est de vous conformer à la perfection du système !",
						"spanish": "¡La resistencia es inútil. Vuestro único papel es conformaros a la perfección del sistema!",
						"vietnamese": "Chống đối là vô nghĩa. Vai trò duy nhất của các ngươi là tuân theo sự hoàn hảo của hệ thống!",
						"thai": "การต่อต้านไร้ความหมาย บทบาทเดียวของพวกเจ้าคือการยอมรับความสมบูรณ์แบบของระบบ!",
						"hindi": "प्रतिरोध व्यर्थ है। सिस्टम की पूर्णता के अनुरूप ढलना ही आपकी एकमात्र भूमिका है!"
					},
					"speaker": "ivar"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…순응?",
						"english": "...Conform?",
						"japanese": "…従う？",
						"chinese": "……顺从？",
						"french": "...Se conformer ?",
						"spanish": "¿...Conformarme?",
						"vietnamese": "...Tuân theo?",
						"thai": "...ยอมรับ?",
						"hindi": "...अनुरूप?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "의심하는 자들은 나약할 뿐. 강함의 끝은 오직 프로토콜 안에 있습니다!",
						"english": "Doubters are merely weak. The ultimate strength lies only within the protocol!",
						"japanese": "疑う者は弱者に過ぎない。強さの究極はプロトコルの中にのみある！",
						"chinese": "怀疑者不过是弱者。力量的终极只存在于协议之中！",
						"french": "Les sceptiques ne sont que faibles. La force ultime réside uniquement dans le protocole !",
						"spanish": "Los que dudan son simplemente débiles. ¡La fuerza máxima reside únicamente en el protocolo!",
						"vietnamese": "Kẻ nghi ngờ chỉ là kẻ yếu. Sức mạnh tột đỉnh chỉ nằm trong giao thức!",
						"thai": "ผู้สงสัยล้วนอ่อนแอ ความแข็งแกร่งสูงสุดมีเพียงในโปรโตคอลเท่านั้น!",
						"hindi": "संदेह करने वाले केवल कमजोर होते हैं। शक्ति की पराकाष्ठा केवल प्रोटोकॉल में है!"
					}
				},
				{
					"content": {
						"korean": "그는 자신의 강함만 증명하려는 것 같아.",
						"english": "He seems to only want to prove his own strength.",
						"japanese": "彼は自分の強さだけを証明したがっているようだ。",
						"chinese": "他似乎只想证明自己的强大。",
						"french": "Il semble vouloir seulement prouver sa propre force.",
						"spanish": "Parece que solo quiere demostrar su propia fuerza.",
						"vietnamese": "Hắn ta dường như chỉ muốn chứng minh sức mạnh của mình.",
						"thai": "เขาดูเหมือนแค่ต้องการพิสูจน์ความแข็งแกร่งของตัวเอง",
						"hindi": "वह केवल अपनी ताकत साबित करना चाहता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						2,
						2
					]
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "겨울이 깊어질수록 당신의 권력이 강해진다는 소문은 뭡니까?",
						"english": "What are these rumors that your power grows stronger as winter deepens?",
						"japanese": "冬が深まるにつれて、あなたの権力が強くなるという噂は本当ですか？",
						"chinese": "随着冬季加深，您的权力也随之增强的传闻是怎么回事？",
						"french": "Que sont ces rumeurs selon lesquelles votre pouvoir se renforce à mesure que l'hiver s'approfondit ?",
						"spanish": "¿Qué son esos rumores de que vuestro poder se fortalece a medida que el invierno se hace más profundo?",
						"vietnamese": "Tin đồn rằng quyền lực của ngài càng mạnh khi mùa đông càng sâu là gì vậy?",
						"thai": "ข่าวลือที่ว่าอำนาจของท่านแข็งแกร่งขึ้นเมื่อฤดูหนาวลึกเข้ามาคืออะไร?",
						"hindi": "ये अफवाहें क्या हैं कि सर्दियों के गहराने के साथ आपकी शक्ति बढ़ती जाती है?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "하하! 헛소문입니다. 저는 그저 도시의 안녕을 위해 봉사할 뿐!",
						"english": "Haha! Mere rumors. I simply serve for the city's well-being!",
						"japanese": "ハハッ！ただの噂ですよ。私はただ都市の安寧のために奉仕しているだけです！",
						"chinese": "哈哈！那只是谣言。我不过是为了城市的福祉而服务！",
						"french": "Haha ! De simples rumeurs. Je sers simplement au bien-être de la ville !",
						"spanish": "¡Jaja! Puros rumores. ¡Simplemente sirvo para el bienestar de la ciudad!",
						"vietnamese": "Haha! Chỉ là tin đồn nhảm. Tôi chỉ phục vụ cho sự an nguy của thành phố!",
						"thai": "ฮ่าๆ! แค่ข่าวลือไร้สาระ ฉันแค่รับใช้เพื่อความเป็นอยู่ที่ดีของเมืองเท่านั้น!",
						"hindi": "हाहा! बस अफवाहें। मैं तो बस शहर की भलाई के लिए सेवा करता हूँ!"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 미소… 너무 차갑다.",
						"english": "That smile... it's too cold.",
						"japanese": "その微笑み… あまりにも冷たい。",
						"chinese": "那个笑容……太冷了。",
						"french": "Ce sourire... il est trop froid.",
						"spanish": "Esa sonrisa... es demasiado fría.",
						"vietnamese": "Nụ cười đó… quá lạnh lẽo.",
						"thai": "รอยยิ้มนั้น... ช่างเย็นชาเหลือเกิน",
						"hindi": "वह मुस्कान... बहुत ठंडी है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "불필요한 감정은 잊고, 프로토콜에 집중하십시오. 그것이 여러분의 의무!",
						"english": "Forget unnecessary emotions and focus on the protocol. That is your duty!",
						"japanese": "不必要な感情は忘れ、プロトコルに集中しなさい。それがあなた方の義務です！",
						"chinese": "忘却不必要的情感，专注于协议。那是你们的职责！",
						"french": "Oubliez les émotions inutiles et concentrez-vous sur le protocole. C'est votre devoir !",
						"spanish": "Olvidád las emociones innecesarias y concentraos en el protocolo. ¡Ese es vuestro deber!",
						"vietnamese": "Hãy quên đi những cảm xúc không cần thiết và tập trung vào giao thức. Đó là nghĩa vụ của các ngươi!",
						"thai": "จงลืมอารมณ์ที่ไม่จำเป็น และมุ่งเน้นที่โปรโตคอล นั่นคือหน้าที่ของพวกเจ้า!",
						"hindi": "अनावश्यक भावनाओं को भूल जाओ और प्रोटोकॉल पर ध्यान केंद्रित करो। वही आपका कर्तव्य है!"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						1,
						2
					],
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이제 선택의 여지는 없습니다. 이 질서에 완벽히 편입되십시오!",
						"english": "There is no longer any choice. Integrate perfectly into this order!",
						"japanese": "もう選択の余地はありません。この秩序に完全に組み込まれなさい！",
						"chinese": "你们别无选择。完美地融入这个秩序吧！",
						"french": "Il n'y a plus de choix. Intégrez-vous parfaitement à cet ordre !",
						"spanish": "Ya no hay elección. ¡Integraos perfectamente en este orden!",
						"vietnamese": "Giờ không còn lựa chọn nào nữa. Hãy hoàn toàn hòa nhập vào trật tự này!",
						"thai": "ไม่มีทางเลือกอีกแล้ว จงรวมเข้ากับระเบียบนี้อย่างสมบูรณ์แบบ!",
						"hindi": "अब कोई विकल्प नहीं है। इस व्यवस्था में पूरी तरह से एकीकृत हो जाओ!"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신의 말 뒤에 숨겨진 계산을 모를 리 없어.",
						"english": "I couldn't possibly be unaware of the calculations hidden behind your words.",
						"japanese": "あなたの言葉の裏に隠された計算を知らないはずがない。",
						"chinese": "我不可能不知道你言语背后隐藏的算计。",
						"french": "Je ne peux pas ignorer les calculs cachés derrière vos mots.",
						"spanish": "No puedo ignorar los cálculos ocultos tras tus palabras.",
						"vietnamese": "Tôi không thể không biết những toan tính ẩn sau lời nói của ngài.",
						"thai": "ฉันไม่พลาดที่จะรู้การคำนวณที่ซ่อนอยู่เบื้องหลังคำพูดของคุณ",
						"hindi": "मैं तुम्हारे शब्दों के पीछे छिपे गणनाओं से अनभिज्ञ नहीं हो सकता।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "방송 전광판이 지직거린다. 짧게 들리는 흐느낌 같은 소리.",
						"english": "The broadcast screen crackles. A brief, sob-like sound.",
						"japanese": "放送の電光掲示板がノイズを立てる。短くすすり泣くような音。",
						"chinese": "广播屏幕滋滋作响。传来一声短促的抽泣声。",
						"french": "L'écran de diffusion grésille. On entend un bref sanglot.",
						"spanish": "La pantalla de retransmisión crepita. Se oye un breve sollozo.",
						"vietnamese": "Màn hình phát sóng kêu rè rè. Một tiếng nức nở ngắn ngủi vang lên.",
						"thai": "จอแสดงผลการออกอากาศมีเสียงซ่า เสียงสะอื้นสั้นๆ ดังขึ้น",
						"hindi": "प्रसारण स्क्रीन चटक रही है। एक छोटी, सिसकी जैसी आवाज़।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더 이상 속지 않아. 진실은 반드시 드러날 거야.",
						"english": "...I won't be fooled anymore. The truth will surely come out.",
						"japanese": "…もう騙されない。真実は必ず明らかになる。",
						"chinese": "……我不会再上当了。真相一定会大白。",
						"french": "...Je ne me ferai plus avoir. La vérité éclatera.",
						"spanish": "...Ya no me engañarán más. La verdad saldrá a la luz.",
						"vietnamese": "...Tôi sẽ không bị lừa nữa đâu. Sự thật nhất định sẽ phơi bày.",
						"thai": "...ฉันจะไม่ถูกหลอกอีกแล้ว ความจริงจะต้องถูกเปิดเผย",
						"hindi": "…मैं अब और मूर्ख नहीं बनूँगा। सच्चाई ज़रूर सामने आएगी।"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크아아… 네놈의… 열기는….",
						"english": "Grrr... Your... fervor...",
						"japanese": "くああ…貴様の…熱気は…。",
						"chinese": "呃啊啊……你的……热情……。",
						"french": "Grrr... Votre... ferveur...",
						"spanish": "Grrr... Tu... fervor...",
						"vietnamese": "Khụ a a... Nhiệt huyết của ngươi...",
						"thai": "ครื... ความเร่าร้อนของเจ้า...",
						"hindi": "ग्र्र्र... तुम्हारी... उत्साह..."
					}
				},
				{
					"content": {
						"korean": "…이바르, 네가 숨기는 진실은 대체 뭐야?",
						"english": "...Ivar, what truth are you hiding?",
						"japanese": "…イヴァル、お前が隠している真実とは一体何だ？",
						"chinese": "……伊瓦尔，你到底隐藏着什么真相？",
						"french": "...Ivar, quelle vérité caches-tu ?",
						"spanish": "...Ivar, ¿qué verdad escondes?",
						"vietnamese": "...Ivar, rốt cuộc sự thật ngươi đang giấu là gì?",
						"thai": "...อีวาร์ ความจริงที่เจ้าปกปิดคืออะไรกันแน่?",
						"hindi": "...आईवर, तुम क्या सच्चाई छुपा रहे हो?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "이바르의 미소 뒤에 감춰진 진실은 더욱 깊은 곳에 있었다.",
						"english": "The truth hidden behind Ivar's smile lay even deeper.",
						"japanese": "イヴァルの笑顔の裏に隠された真実は、さらに深い場所にあった。",
						"chinese": "隐藏在伊瓦尔笑容背后的真相，在更深的地方。",
						"french": "La vérité cachée derrière le sourire d'Ivar se trouvait encore plus profondément.",
						"spanish": "La verdad oculta tras la sonrisa de Ivar estaba en un lugar aún más profundo.",
						"vietnamese": "Sự thật ẩn giấu sau nụ cười của Ivar nằm ở một nơi sâu thẳm hơn.",
						"thai": "ความจริงที่ซ่อนอยู่เบื้องหลังรอยยิ้มของอีวาร์นั้นลึกซึ้งยิ่งกว่า",
						"hindi": "आईवर की मुस्कान के पीछे छिपा सच और भी गहरा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "최고 위원회의 어두운 이면은 이제 막 드러나기 시작했을 뿐이다.",
						"english": "The dark side of the High Council had only just begun to reveal itself.",
						"japanese": "最高委員会の暗い側面は、今まさに明らかになり始めたばかりだった。",
						"chinese": "最高委员会的黑暗面，才刚刚开始显露出来。",
						"french": "Le côté obscur du Haut Conseil commençait tout juste à se révéler.",
						"spanish": "La cara oculta del Consejo Superior apenas comenzaba a revelarse.",
						"vietnamese": "Mặt tối của Hội đồng Tối cao chỉ mới bắt đầu lộ diện.",
						"thai": "ด้านมืดของสภาสูงสุดเพิ่งจะเริ่มเปิดเผยตัวตน",
						"hindi": "सर्वोच्च परिषद का काला पक्ष अभी-अभी सामने आना शुरू हुआ था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar",
					"spot": [
						4,
						2
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "아직도 저항합니까? 무의미한 짓입니다. 결국 시스템이 승리합니다.",
						"english": "Still resisting? It's futile. The system always wins.",
						"japanese": "まだ抵抗するか？無意味なことだ。結局、システムが勝利する。",
						"chinese": "还在抵抗吗？这毫无意义。最终，系统会胜利。",
						"french": "Vous résistez encore ? C'est inutile. Le système gagne toujours.",
						"spanish": "¿Todavía te resistes? Es inútil. El sistema siempre gana.",
						"vietnamese": "Vẫn còn chống cự sao? Vô ích thôi. Cuối cùng, hệ thống sẽ chiến thắng.",
						"thai": "ยังคงต่อต้านอยู่หรือ? ไร้ความหมาย ระบบจะชนะในที่สุด",
						"hindi": "अभी भी विरोध कर रहे हो? यह व्यर्थ है। अंत में, सिस्टम ही जीतेगा।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "당신 같은 위선자가 승리하는 일은 없어!",
						"english": "A hypocrite like you will never win!",
						"japanese": "お前のような偽善者が勝利することはない！",
						"chinese": "像你这样的伪君子绝不会胜利！",
						"french": "Un hypocrite comme vous ne gagnera jamais !",
						"spanish": "¡Un hipócrita como tú nunca ganará!",
						"vietnamese": "Một kẻ đạo đức giả như ngươi sẽ không bao giờ thắng đâu!",
						"thai": "คนหน้าซื่อใจคดอย่างแกไม่มีทางชนะหรอก!",
						"hindi": "तुम जैसे पाखंडी की कभी जीत नहीं होगी!"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "강함의 끝을 보고 싶다면, 이 시련을 넘어서 보시죠!",
						"english": "If you wish to see the peak of strength, overcome this trial!",
						"japanese": "強さの極致を見たいなら、この試練を乗り越えてみろ！",
						"chinese": "如果你想看到力量的极限，就超越这个考验吧！",
						"french": "Si vous voulez voir le summum de la force, surmontez cette épreuve !",
						"spanish": "Si quieres ver el límite de la fuerza, ¡supera esta prueba!",
						"vietnamese": "Nếu muốn thấy đỉnh cao của sức mạnh, hãy vượt qua thử thách này đi!",
						"thai": "หากเจ้าต้องการเห็นจุดสูงสุดของความแข็งแกร่ง จงก้าวข้ามบททดสอบนี้ไปซะ!",
						"hindi": "यदि तुम शक्ति का चरम देखना चाहते हो, तो इस परीक्षा को पार करो!"
					},
					"speaker": "ivar"
				},
				{
					"duration_ms": 400,
					"direction": "up",
					"type": "direction",
					"action": "exit",
					"speaker": "ivar"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 나타난다. 정체 모를 자가 길을 막아선다.",
						"english": "A colossal shadow appears. An unknown entity blocks the path.",
						"japanese": "巨大な影が現れる。正体不明の者が道を塞ぐ。",
						"chinese": "一个巨大的影子出现了。一个不明身份的家伙挡住了去路。",
						"french": "Une ombre colossale apparaît. Une entité inconnue bloque le chemin.",
						"spanish": "Una sombra colosal aparece. Una entidad desconocida bloquea el camino.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện. Một kẻ không rõ danh tính chặn đường.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้น มีบางสิ่งที่ไม่รู้จักขวางทางอยู่",
						"hindi": "एक विशाल छाया प्रकट होती है। एक अज्ञात इकाई रास्ता रोकती है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "강함은… 오직 질서…뿐….",
						"english": "Strength... only order...",
						"japanese": "強さは…秩序のみ…",
						"chinese": "力量……唯有秩序……",
						"french": "La force... n'est qu'ordre...",
						"spanish": "La fuerza... es solo orden...",
						"vietnamese": "Sức mạnh... chỉ có trật tự...",
						"thai": "ความแข็งแกร่ง... มีแต่ระเบียบ...",
						"hindi": "शक्ति... केवल व्यवस्था है..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보잘것없는 저항이군. 이 도시를 지키는 건 결국 시스템이다.",
						"english": "Futile resistance. This city is ultimately protected by the system.",
						"japanese": "取るに足らない抵抗だな。この街を守るのは結局システムだ。",
						"chinese": "微不足道的抵抗。最终守护这座城市的，是系统。",
						"french": "Une résistance pitoyable. C'est le système qui protège finalement cette ville.",
						"spanish": "Una resistencia insignificante. Es el sistema el que, al final, protege esta ciudad.",
						"vietnamese": "Một sự kháng cự tầm thường. Cuối cùng, chính hệ thống mới bảo vệ thành phố này.",
						"thai": "เป็นการต่อต้านที่น่าสมเพช ท้ายที่สุดแล้ว ระบบต่างหากที่ปกป้องเมืองนี้",
						"hindi": "एक दयनीय प्रतिरोध। इस शहर को अंततः व्यवस्था ही बचाती है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직 끝나지 않았어… 당신의 위선을 폭로할 때까지.",
						"english": "It's not over... until I expose your hypocrisy.",
						"japanese": "まだ終わってない… あなたの偽善を暴くまで。",
						"chinese": "还没结束……直到我揭露你的虚伪。",
						"french": "Ce n'est pas encore fini... pas avant que je n'expose votre hypocrisie.",
						"spanish": "Todavía no ha terminado... hasta que no exponga tu hipocresía.",
						"vietnamese": "Chưa kết thúc đâu... cho đến khi tôi vạch trần sự đạo đức giả của ngươi.",
						"thai": "ยังไม่จบ... จนกว่าฉันจะเปิดโปงความหน้าซื่อใจคดของคุณ",
						"hindi": "अभी खत्म नहीं हुआ है... जब तक मैं तुम्हारा पाखंड उजागर नहीं कर देता।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"온기가 사라진 도시, 최고 위원회의 선동가 이바르.",
			"'프로토콜만이 살 길'이라 외치는 그의 목소리가 도시를 채운다.",
			"그러나 차가운 계산이 숨겨진 위선적인 미소 뒤편엔 —",
			"점점 더 깊어지는 겨울과 그의 권력이 겹쳐 보였다.",
			"의심은 확신이 되고, 진실의 끝을 향한 발걸음은 멈추지 않는다."
		],
		"english": [
			"In a city devoid of warmth, Ivar, the High Council's agitator.",
			"His voice, proclaiming 'The Protocol is the only way to survive,' fills the city.",
			"Yet behind that hypocritical smile, concealing cold calculations —",
			"The ever-deepening winter and his growing power seemed to intertwine.",
			"Doubt turned into certainty, and the steps towards the truth's end continued relentlessly."
		],
		"japanese": [
			"温もりが失われた都市、最高評議会の扇動者イヴァール。",
			"「プロトコルこそが生きる道」と叫ぶ彼の声が、都市に響き渡る。",
			"しかし、冷たい計算が隠された偽善的な笑顔の裏には—",
			"深まる冬と彼の権力が重なって見えた。",
			"疑念は確信となり、真実の果てへの足取りは止まらない。"
		],
		"chinese": [
			"在失去温暖的城市里，最高委员会的煽动者伊瓦尔。",
			"他高喊着“协议是唯一的出路”的声音，回荡在城市中。",
			"然而，在那隐藏着冷酷算计的虚伪笑容背后——",
			"日益加深的寒冬与他的权力似乎交织在一起。",
			"怀疑变成了确信，迈向真相尽头的脚步从未停止。"
		],
		"french": [
			"Dans une ville privée de chaleur, Ivar, l'agitateur du Haut Conseil.",
			"Sa voix, clamant 'Le Protocole est la seule voie pour survivre', emplit la ville.",
			"Pourtant, derrière ce sourire hypocrite, dissimulant de froids calculs —",
			"L'hiver de plus en plus profond et son pouvoir semblaient se superposer.",
			"Le doute se mua en certitude, et les pas vers la fin de la vérité ne s'arrêtèrent pas."
		],
		"spanish": [
			"En una ciudad sin calidez, Ivar, el agitador del Consejo Supremo.",
			"Su voz, proclamando 'El Protocolo es la única forma de sobrevivir', llena la ciudad.",
			"Sin embargo, detrás de esa sonrisa hipócrita, que oculta fríos cálculos —",
			"El invierno cada vez más profundo y su poder parecían superponerse.",
			"La duda se convirtió en certeza, y los pasos hacia el final de la verdad no se detuvieron."
		],
		"vietnamese": [
			"Trong thành phố không còn hơi ấm, Ivar, kẻ kích động của Hội đồng Tối cao.",
			"Tiếng hắn, tuyên bố 'Nghị định thư là con đường sống duy nhất', tràn ngập thành phố.",
			"Thế nhưng, đằng sau nụ cười giả tạo che giấu những tính toán lạnh lùng đó —",
			"Mùa đông ngày càng sâu và quyền lực của hắn dường như chồng chéo lên nhau.",
			"Sự nghi ngờ hóa thành xác tín, và những bước chân tìm đến tận cùng sự thật không ngừng lại."
		],
		"thai": [
			"ในเมืองที่ปราศจากความอบอุ่น อีวาร์ ผู้ปลุกปั่นของสภาสูง",
			"เสียงของเขาที่ประกาศว่า 'โปรโตคอลเท่านั้นคือทางรอด' ดังก้องไปทั่วเมือง",
			"แต่เบื้องหลังรอยยิ้มจอมปลอมที่ซ่อนเร้นการคำนวณอันเย็นชา—",
			"ฤดูหนาวที่ทวีความรุนแรงขึ้นกับอำนาจของเขาดูเหมือนจะซ้อนทับกัน",
			"ความสงสัยกลายเป็นความมั่นใจ และก้าวเดินสู่จุดสิ้นสุดของความจริงไม่เคยหยุดนิ่ง"
		],
		"hindi": [
			"एक गर्मजोशी रहित शहर में, इवार, उच्च परिषद का आंदोलनकारी।",
			"उसकी आवाज़, 'प्रोटोकॉल ही एकमात्र रास्ता है' का उद्घोष करती हुई, शहर को भर देती है।",
			"फिर भी, उस कपटी मुस्कान के पीछे, जो ठंडी गणनाओं को छिपाती है —",
			"गहराती सर्दी और उसकी शक्ति एक-दूसरे से जुड़ी हुई प्रतीत होती थी।",
			"संदेह निश्चितता में बदल गया, और सत्य के अंत की ओर कदम अनवरत चलते रहे।"
		]
	}
} as const;
