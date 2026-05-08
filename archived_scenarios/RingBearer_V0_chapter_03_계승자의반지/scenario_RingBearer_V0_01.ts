export const scenario_RingBearer_V0_01 = {
	"scenario_id": "RingBearer_V0_01",
	"order": 1,
	"act": "intro",
	"theme": "hell",
	"actors": {
		"king_borin": {
			"id": "mon_395623fe-f16c-4e32-a96d-b112c2b6b3e3",
			"name": {
				"korean": "보린 왕",
				"english": "King Borin",
				"japanese": "ボリン王",
				"chinese": "波林王",
				"french": "Roi Borin",
				"spanish": "Rey Borin",
				"vietnamese": "Vua Borin",
				"thai": "ราชาบอริน",
				"hindi": "राजा बोरिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/47299a9c-6646-496d-6716-4b45f9c6f300/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/294303de-0ac2-4671-3674-09d5aec03300/public"
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 왕좌의 회랑. 부서진 왕관과 녹아내린 황금이 흩어져 있다.",
						"english": "The corridor of the ruined throne. Broken crowns and molten gold lie scattered.",
						"japanese": "崩壊した玉座の回廊。壊れた王冠と溶けた黄金が散らばっている。",
						"chinese": "坍塌王座的回廊。破碎的王冠和融化的黄金散落一地。",
						"french": "Le couloir du trône effondré. Des couronnes brisées et de l'or fondu gisent éparpillés.",
						"spanish": "El corredor del trono caído. Coronas rotas y oro fundido yacen esparcidos.",
						"vietnamese": "Hành lang Ngai vàng đổ nát. Vương miện vỡ và vàng chảy nằm rải rác.",
						"thai": "โถงทางเดินแห่งบัลลังก์ที่พังทลาย มงกุฎที่แตกหักและทองคำหลอมละลายกระจัดกระจายอยู่",
						"hindi": "ध्वस्त सिंहासन का गलियारा। टूटे हुए मुकुट और पिघला हुआ सोना बिखरा पड़ा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "폐허가 다 됐네. 대체 무슨 일이 있었던 거야?",
						"english": "It's all in ruins. What on earth happened?",
						"japanese": "完全に廃墟だ。一体何があったんだ？",
						"chinese": "彻底成废墟了。到底发生了什么事？",
						"french": "C'est en ruines. Que s'est-il passé, bon sang ?",
						"spanish": "Está todo en ruinas. ¿Qué demonios pasó?",
						"vietnamese": "Hoang tàn cả rồi. Rốt cuộc đã có chuyện gì vậy?",
						"thai": "กลายเป็นซากปรักหักพังไปหมดแล้ว เกิดอะไรขึ้นกันแน่?",
						"hindi": "यह सब खंडहर हो गया है। आखिर क्या हुआ?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						5,
						2
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "king_borin"
				},
				{
					"speaker": "king_borin",
					"content": {
						"korean": "경고하러 왔다.",
						"english": "I've come to warn you.",
						"japanese": "警告しに来た。",
						"chinese": "我来警告你。",
						"french": "Je suis venu vous avertir.",
						"spanish": "He venido a advertirte.",
						"vietnamese": "Tôi đến để cảnh báo.",
						"thai": "ฉันมาเพื่อเตือนเจ้า",
						"hindi": "मैं तुम्हें चेतावनी देने आया हूँ।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…누구세요?",
						"english": "...Who are you?",
						"japanese": "…どちら様ですか？",
						"chinese": "…您是谁？",
						"french": "...Qui êtes-vous ?",
						"spanish": "...¿Quién es usted?",
						"vietnamese": "...Ai đó?",
						"thai": "...ท่านคือใคร?",
						"hindi": "...आप कौन हैं?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "king_borin",
					"content": {
						"korean": "보린이다. 이 회랑에서 사라진 자들. 그들 손가락에 모두 황금 띠 자국이 있었다.",
						"english": "I am Borin. Those who vanished from this corridor, all had golden band marks on their fingers.",
						"japanese": "ボリンだ。この回廊から消えた者たち、彼らの指には皆、黄金の輪の跡があった。",
						"chinese": "我是博林。那些从这条回廊消失的人，他们的手指上都有金色环痕。",
						"french": "Je suis Borin. Ceux qui ont disparu de ce couloir avaient tous des marques d'anneaux d'or sur les doigts.",
						"spanish": "Soy Borin. Aquellos que desaparecieron de este corredor, todos tenían marcas de anillos dorados en los dedos.",
						"vietnamese": "Tôi là Borin. Những người đã biến mất khỏi hành lang này, tất cả đều có dấu vết vòng vàng trên ngón tay.",
						"thai": "ข้าคือโบเรน ผู้ที่หายไปจากโถงทางเดินแห่งนี้ ทุกคนมีรอยวงแหวนทองคำบนนิ้วของพวกเขา",
						"hindi": "मैं बोरिन हूँ। जो लोग इस गलियारे से गायब हो गए, उन सभी की उंगलियों पर सोने के बैंड के निशान थे।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "황금 띠 자국?",
						"english": "Golden band marks?",
						"japanese": "黄金の輪の跡、だと？",
						"chinese": "金色环痕？",
						"french": "Des marques d'anneaux d'or ?",
						"spanish": "¿Marcas de anillos dorados?",
						"vietnamese": "Dấu vết vòng vàng?",
						"thai": "รอยวงแหวนทองคำหรือ?",
						"hindi": "सोने के बैंड के निशान?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"content": {
						"korean": "누군가 그걸 모으는 자가 있다고들 해. 누구도 그를 직접 본 적은 없지만.",
						"english": "They say someone collects them. Though no one has ever seen him.",
						"japanese": "それを集める者がいると聞く。誰も直接彼を見たことはないが。",
						"chinese": "有人说有人在收集它。虽然没人见过他本人。",
						"french": "On dit que quelqu'un les collectionne. Mais personne ne l'a jamais vu.",
						"spanish": "Dicen que alguien los colecciona. Aunque nadie lo ha visto directamente.",
						"vietnamese": "Người ta nói có kẻ đang thu thập chúng. Dù chưa ai từng thấy hắn.",
						"thai": "มีคนบอกว่ามีคนรวบรวมมัน แต่ไม่มีใครเคยเห็นเขาเลย",
						"hindi": "लोग कहते हैं कि कोई उन्हें इकट्ठा करता है। हालांकि किसी ने भी उसे सीधे तौर पर नहीं देखा है。"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "king_borin",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "king_borin",
					"content": {
						"korean": "또 왕관이군. 부서진 채로, 계속 나타난다.",
						"english": "Another crown. Broken, yet they keep appearing.",
						"japanese": "また王冠か。壊れたままで、現れ続ける。",
						"chinese": "又是王冠。它们碎裂着，却不断出现。",
						"french": "Encore une couronne. Brisées, elles n'arrêtent pas d'apparaître.",
						"spanish": "Otra corona. Rotas, siguen apareciendo.",
						"vietnamese": "Lại một vương miện nữa. Bị vỡ, nhưng chúng cứ xuất hiện.",
						"thai": "มงกุฎอีกแล้ว แตกหัก แต่ก็ยังคงปรากฏอยู่เรื่อยๆ",
						"hindi": "फिर से एक मुकुट। टूटा हुआ, फिर भी वे आते रहते हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그러게요. 크기와 모양이 다 똑같아요. 처음부터 하나였던 것처럼.",
						"english": "Indeed. They're all the same size and shape. As if they were one from the start.",
						"japanese": "そうですね。大きさも形も全て同じです。まるで最初から一つだったかのように。",
						"chinese": "是啊。它们大小和形状都一样。仿佛从一开始就是一体的。",
						"french": "C'est vrai. Elles ont toutes la même taille et la même forme. Comme si elles n'avaient fait qu'une dès le début.",
						"spanish": "Así es. Todas tienen el mismo tamaño y forma. Como si hubieran sido una sola desde el principio.",
						"vietnamese": "Đúng vậy. Chúng đều cùng kích thước và hình dạng. Cứ như thể chúng là một ngay từ đầu.",
						"thai": "จริงด้วยค่ะ ขนาดและรูปทรงเหมือนกันหมดเลย ราวกับว่าเป็นอันเดียวกันมาตั้งแต่แรก",
						"hindi": "हाँ, वाकई। वे सभी एक ही आकार और आकृति के हैं। जैसे कि वे शुरू से ही एक थे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "king_borin",
					"content": {
						"korean": "마치 한 사람이 여러 번 썼던 흔적 같군.",
						"english": "It's as if one person wore them multiple times.",
						"japanese": "まるで一人の人間が何度も使った痕跡のようだ。",
						"chinese": "就像是同一个人多次佩戴过的痕迹。",
						"french": "C'est comme la trace de quelqu'un qui les aurait portées plusieurs fois.",
						"spanish": "Es como si una sola persona los hubiera usado varias veces.",
						"vietnamese": "Cứ như là dấu vết của một người đã đội chúng nhiều lần.",
						"thai": "เหมือนร่องรอยที่คนๆ เดียวเคยสวมใส่มาหลายครั้ง",
						"hindi": "जैसे किसी एक व्यक्ति ने उन्हें कई बार पहना हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왕은 여러 명이었을 텐데.",
						"english": "But there must have been many kings.",
						"japanese": "王は複数いたはずだが。",
						"chinese": "但国王应该有很多位才对。",
						"french": "Mais il devait y avoir plusieurs rois.",
						"spanish": "Pero debería haber habido muchos reyes.",
						"vietnamese": "Nhưng chắc chắn đã có nhiều vị vua.",
						"thai": "แต่กษัตริย์น่าจะมีหลายองค์นี่นา",
						"hindi": "लेकिन राजा तो कई रहे होंगे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "king_borin"
				},
				{
					"speaker": "king_borin",
					"content": {
						"korean": "이 회랑은… 한 번 들어선 자를 놓아주지 않는다.",
						"english": "This corridor... it doesn't release those who enter it.",
						"japanese": "この回廊は…一度足を踏み入れた者を逃がさない。",
						"chinese": "这条走廊……它不会放过任何一个踏入其中的人。",
						"french": "Ce couloir… ne relâche pas ceux qui y pénètrent.",
						"spanish": "Este pasillo... no suelta a quienes entran.",
						"vietnamese": "Hành lang này... nó không buông tha những kẻ đã bước vào.",
						"thai": "โถงทางเดินนี้...ไม่ปล่อยให้ใครที่เข้ามาได้ออกไป",
						"hindi": "यह गलियारा... जो इसमें प्रवेश करते हैं उन्हें जाने नहीं देता।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리예요? 우린 갈 길을 갈 거예요.",
						"english": "What are you talking about? We'll go our own way.",
						"japanese": "何を言ってるんですか？私たちは私たちの道を行きますよ。",
						"chinese": "您在说什么？我们有自己的路要走。",
						"french": "De quoi parlez-vous ? Nous allons suivre notre propre chemin.",
						"spanish": "¿De qué estás hablando? Iremos por nuestro propio camino.",
						"vietnamese": "Anh nói gì vậy? Chúng tôi sẽ đi con đường của mình.",
						"thai": "พูดเรื่องอะไรคะ? เราจะไปทางของเราค่ะ",
						"hindi": "आप क्या कह रहे हैं? हम अपने रास्ते जाएंगे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "king_borin",
					"content": {
						"korean": "사라진 자들도 그랬지. 결국 모든 길은 그에게 통한다.",
						"english": "The vanished ones did too. In the end, all paths lead to him.",
						"japanese": "消えた者たちもそうだった。結局、全ての道は彼に通じる。",
						"chinese": "那些消失的人也是如此。最终，所有的路都通向他。",
						"french": "Ceux qui ont disparu aussi. Finalement, tous les chemins mènent à lui.",
						"spanish": "Los desaparecidos también. Al final, todos los caminos llevan a él.",
						"vietnamese": "Những kẻ đã biến mất cũng vậy. Cuối cùng, mọi con đường đều dẫn đến hắn.",
						"thai": "พวกที่หายไปก็เป็นแบบนั้น ในที่สุดทุกเส้นทางก็นำไปสู่เขา",
						"hindi": "गायब हुए लोग भी ऐसा ही करते थे। अंत में, सभी रास्ते उसी के पास जाते हैं।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그? 황금 띠를 모으는 자 말인가요?",
						"english": "Him? The one who collects the golden sashes?",
						"japanese": "彼？黄金の帯を集める者ですか？",
						"chinese": "他？是说那个收集金色腰带的人吗？",
						"french": "Lui ? Celui qui collectionne les ceintures dorées ?",
						"spanish": "¿Él? ¿El que colecciona las fajas doradas?",
						"vietnamese": "Hắn? Kẻ thu thập những dải băng vàng đó sao?",
						"thai": "เขา? หมายถึงคนที่รวบรวมแถบสีทองเหรอคะ?",
						"hindi": "वह? वह जो सुनहरी पट्टियाँ इकट्ठा करता है?"
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
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						2
					],
					"speaker": "king_borin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "king_borin",
					"content": {
						"korean": "점점 더… 깊은 곳으로 향하는군.",
						"english": "It's getting... deeper and deeper.",
						"japanese": "ますます…深い場所へ向かうな。",
						"chinese": "越来越……深入了。",
						"french": "De plus en plus… profond.",
						"spanish": "Cada vez más… profundo.",
						"vietnamese": "Càng lúc càng... sâu hơn.",
						"thai": "มันยิ่งลึกเข้าไป...เรื่อยๆ เลยนะ",
						"hindi": "यह और भी... गहरा होता जा रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "멈출 수 없어요. 이 황금 띠의 저주를 끝내야 해요.",
						"english": "I can't stop. This curse of the golden band must end.",
						"japanese": "止められない。この黄金の帯の呪いを終わらせなければ。",
						"chinese": "无法停止。必须结束这金带的诅咒。",
						"french": "Je ne peux pas m'arrêter. Cette malédiction de la bande dorée doit cesser.",
						"spanish": "No puedo detenerme. Esta maldición del cinturón dorado debe terminar.",
						"vietnamese": "Không thể dừng lại. Lời nguyền của dải vàng này phải kết thúc.",
						"thai": "หยุดไม่ได้. คำสาปของแถบทองนี้ต้องจบลง.",
						"hindi": "मैं रुक नहीं सकता। इस सुनहरी पट्टी के श्राप को खत्म करना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "king_borin",
					"content": {
						"korean": "…들리는가? 부드럽게 속삭이는 목소리가.",
						"english": "...Do you hear it? A softly whispering voice.",
						"japanese": "…聞こえるか？優しく囁く声が。",
						"chinese": "……听到了吗？一个轻声细语的声音。",
						"french": "...L'entends-tu ? Une voix doucement murmurante.",
						"spanish": "...¿Lo oyes? Una voz que susurra suavemente.",
						"vietnamese": "...Ngươi có nghe thấy không? Một giọng nói thì thầm nhẹ nhàng.",
						"thai": "...ได้ยินไหม? เสียงกระซิบแผ่วเบา.",
						"hindi": "…क्या तुम सुनते हो? एक धीमी, फुसफुसाती आवाज।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "회랑 깊은 곳에서 환청이 들린다. '한 번만 손에 올려놓아 봐. 이해할 수 있을 거야.'",
						"english": "Hallucinations echo from the depths of the corridor. 'Just place it in your hand once. You'll understand.'",
						"japanese": "回廊の奥深くから幻聴が聞こえる。「一度だけ手に取ってみろ。理解できるだろう。」",
						"chinese": "幻听从走廊深处传来。“只要把它放在手上一次。你就会明白的。”",
						"french": "Des hallucinations résonnent du fond du couloir. \"Pose-le juste une fois dans ta main. Tu comprendras.\"",
						"spanish": "Alucinaciones resuenan desde lo profundo del pasillo. \"Ponlo en tu mano una vez. Lo entenderás.\"",
						"vietnamese": "Ảo giác vọng về từ sâu trong hành lang. 'Chỉ cần đặt nó vào tay một lần. Ngươi sẽ hiểu thôi.'",
						"thai": "ภาพหลอนสะท้อนจากส่วนลึกของโถงทางเดิน 'แค่ลองวางไว้ในมือครั้งเดียว เจ้าจะเข้าใจ'",
						"hindi": "गलियारे की गहराई से मतिभ्रम गूंजता है। 'बस एक बार इसे अपने हाथ में रखो। तुम समझ जाओगे।'"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…유혹하는 소리. 하지만 속지 않아.",
						"english": "...A tempting voice. But I won't be fooled.",
						"japanese": "…誘惑する声。しかし、騙されない。",
						"chinese": "……诱惑的声音。但我不会上当。",
						"french": "...Une voix tentatrice. Mais je ne me laisserai pas tromper.",
						"spanish": "...Una voz tentadora. Pero no me dejaré engañar.",
						"vietnamese": "...Một giọng nói cám dỗ. Nhưng ta sẽ không bị lừa.",
						"thai": "...เสียงยั่วยวน. แต่ข้าจะไม่หลงกล.",
						"hindi": "…एक लुभाने वाली आवाज। पर मैं धोखा नहीं खाऊंगा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 자들. 황금의 품으로 돌아가라.",
						"english": "Insignificant beings. Return to the embrace of gold.",
						"japanese": "取るに足らぬ者たち。黄金の懐へ帰れ。",
						"chinese": "卑微的家伙们。回到黄金的怀抱吧。",
						"french": "Êtres insignifiants. Retournez à l'étreinte de l'or.",
						"spanish": "Seres insignificantes. Regresen al abrazo del oro.",
						"vietnamese": "Những kẻ hèn mọn. Hãy trở về vòng tay của vàng.",
						"thai": "พวกไร้ค่า จงกลับสู่การโอบกอดของทองคำ",
						"hindi": "तुच्छ प्राणी। सोने के आलिंगन में लौट जाओ।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 아직 포기 못 해! 돌아간다.",
						"english": "...Damn it. I can't give up yet! I'm going back.",
						"japanese": "…くそ。まだ諦められない！戻るぞ。",
						"chinese": "…该死。我还没法放弃！我回去。",
						"french": "...Mince. Je ne peux pas encore abandonner ! Je reviens.",
						"spanish": "...Maldita sea. ¡Todavía no puedo rendirme! Volveré.",
						"vietnamese": "...Chết tiệt. Tôi chưa thể từ bỏ! Tôi sẽ quay lại.",
						"thai": "...บ้าจริง. ฉันยังยอมแพ้ไม่ได้! ฉันจะกลับไป.",
						"hindi": "...धिक्कार है। मैं अभी हार नहीं मान सकता! मैं वापस जा रहा हूँ।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 회랑 끝에서 모습을 드러냈다.",
						"english": "A colossal shadow emerged at the end of the corridor.",
						"japanese": "巨大な影が回廊の端に姿を現した。",
						"chinese": "一个巨大的影子在走廊尽头显现。",
						"french": "Une ombre colossale est apparue au bout du couloir.",
						"spanish": "Una sombra colosal emergió al final del pasillo.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra ở cuối hành lang.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นที่ปลายโถงทางเดิน.",
						"hindi": "एक विशाल छाया गलियारे के अंत में प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "온 것은 좋으나, 돌아갈 수는 없다.",
						"english": "It's good that you came, but you cannot return.",
						"japanese": "来たのは良いが、帰ることはできない。",
						"chinese": "你来了是好事，但无法回去。",
						"french": "C'est bien que tu sois venu, mais tu ne peux pas retourner.",
						"spanish": "Es bueno que hayas venido, pero no puedes regresar.",
						"vietnamese": "Ngươi đến thì tốt, nhưng không thể quay lại.",
						"thai": "มาแล้วก็ดี แต่กลับไปไม่ได้.",
						"hindi": "तुम्हारा आना अच्छा है, लेकिन तुम लौट नहीं सकते।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네가 그 '모으는 자'인가!",
						"english": "Are you the 'Gatherer'?",
						"japanese": "お前がその「集める者」か！",
						"chinese": "你就是那个“收集者”吗！",
						"french": "Es-tu le 'Collectionneur' ?",
						"spanish": "¿Eres tú el 'Recopilador'?",
						"vietnamese": "Ngươi là 'Kẻ Thu Thập' đó ư!",
						"thai": "เจ้าคือ 'ผู้รวบรวม' หรือไม่!",
						"hindi": "क्या तुम ही वह 'संग्राहक' हो?"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						2
					],
					"speaker": "king_borin"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "king_borin",
					"content": {
						"korean": "저 자가… 모든 것을 모으려는 존재다. 반지를… 파괴해라.",
						"english": "That one... is the being that seeks to gather everything. Destroy... the ring.",
						"japanese": "あの者が…すべてを集めようとする存在だ。指輪を…破壊しろ。",
						"chinese": "那家伙……是想收集一切的存在。摧毁……戒指。",
						"french": "Celui-là... est l'être qui cherche à tout rassembler. Détruisez... l'anneau.",
						"spanish": "Ese... es el ser que busca reunir todo. Destruye... el anillo.",
						"vietnamese": "Kẻ đó... là thực thể muốn thu thập mọi thứ. Phá hủy... chiếc nhẫn.",
						"thai": "ผู้นั้น...คือผู้ที่ต้องการรวบรวมทุกสิ่ง. จงทำลาย...แหวนนั่น.",
						"hindi": "वह... वह है जो सब कुछ इकट्ठा करना चाहता है। अंगूठी को... नष्ट करो।"
					}
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit",
					"speaker": "king_borin"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 선택이군. 너희도 사라질 것이다.",
						"english": "A foolish choice. You too shall vanish.",
						"japanese": "愚かな選択だ。お前たちも消え去るだろう。",
						"chinese": "愚蠢的选择。你们也会消失的。",
						"french": "Un choix insensé. Vous aussi, vous disparaîtrez.",
						"spanish": "Una elección insensata. Vosotros también desapareceréis.",
						"vietnamese": "Một lựa chọn ngu ngốc. Các ngươi cũng sẽ biến mất.",
						"thai": "เป็นทางเลือกที่โง่เขลา. พวกเจ้าก็จะหายไปเช่นกัน.",
						"hindi": "एक मूर्खतापूर्ण चुनाव। तुम भी गायब हो जाओगे।"
					},
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…끈질기군. 하지만 황금의 유혹은… 끝나지 않는다.",
						"english": "...Persistent. But the temptation of gold... never ends.",
						"japanese": "…しつこいな。しかし、黄金の誘惑は…終わらない。",
						"chinese": "……真执着。但黄金的诱惑……永无止境。",
						"french": "...Persistant. Mais la tentation de l'or... ne se termine jamais.",
						"spanish": "...Persistente. Pero la tentación del oro... nunca termina.",
						"vietnamese": "...Dai dẳng thật. Nhưng sự cám dỗ của vàng... không bao giờ kết thúc.",
						"thai": "...ดื้อรั้นจริง. แต่การล่อลวงของทองคำ...ไม่มีวันสิ้นสุด.",
						"hindi": "…लगातार। लेकिन सोने का प्रलोभन... कभी खत्म नहीं होता।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "끝나지 않는다고? 그럼 너 말고 또 있단 말인가?",
						"english": "It's not over? So there's someone else besides you?",
						"japanese": "終わらないだと？なら、お前以外にもいるとでも言うのか？",
						"chinese": "还没完？难道除了你还有别人？",
						"french": "Ce n'est pas fini ? Alors il y a quelqu'un d'autre que toi ?",
						"spanish": "¿No ha terminado? ¿Entonces hay alguien más aparte de ti?",
						"vietnamese": "Chưa kết thúc ư? Vậy ngoài ngươi ra còn có kẻ khác sao?",
						"thai": "ยังไม่จบงั้นเหรอ? งั้นก็หมายความว่ามีคนอื่นอีกนอกจากแกเหรอ?",
						"hindi": "यह खत्म नहीं हुआ? तो क्या तुम्हारे अलावा भी कोई और है?"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자는 다시 일어서지 않았다. 하지만, 회랑 깊은 곳에서 더 진한 황금빛이 느껴진다.",
						"english": "The fallen shadow did not rise again. However, a deeper golden light can be felt from the depths of the corridor.",
						"japanese": "倒れた影は二度と立ち上がらなかった。だが、回廊の奥深くから、より濃い黄金の光が感じられる。",
						"chinese": "倒下的影子没有再站起来。然而，回廊深处传来更浓郁的金色光芒。",
						"french": "L'ombre tombée ne se releva pas. Cependant, une lumière dorée plus intense se fait sentir des profondeurs du couloir.",
						"spanish": "La sombra caída no se levantó de nuevo. Sin embargo, una luz dorada más intensa se siente desde las profundidades del pasillo.",
						"vietnamese": "Bóng ma ngã xuống không đứng dậy nữa. Tuy nhiên, một ánh vàng đậm hơn đang được cảm nhận từ sâu thẳm hành lang.",
						"thai": "เงาที่ล้มลงไม่ได้ลุกขึ้นมาอีก แต่แสงสีทองที่เข้มข้นกว่ากลับถูกสัมผัสได้จากส่วนลึกของโถงทางเดิน",
						"hindi": "गिरी हुई परछाई फिर नहीं उठी। हालांकि, गलियारे की गहराई से एक और गहरी सुनहरी चमक महसूस हो रही है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "왕좌의 주인, 그 두 번째 그림자가 탐험대를 기다리고 있었다.",
						"english": "The master of the throne, its second shadow, was waiting for the expedition team.",
						"japanese": "玉座の主、その二番目の影が探検隊を待ち受けていた。",
						"chinese": "王座的主人，它的第二道身影正在等待着探险队。",
						"french": "Le maître du trône, sa deuxième ombre, attendait l'équipe d'expédition.",
						"spanish": "El señor del trono, su segunda sombra, estaba esperando al equipo de expedición.",
						"vietnamese": "Chủ nhân của ngai vàng, cái bóng thứ hai của hắn, đang chờ đợi đội thám hiểm.",
						"thai": "เจ้าแห่งบัลลังก์ เงาที่สองของมันกำลังรอคอยทีมสำรวจอยู่",
						"hindi": "सिंहासन का स्वामी, उसकी दूसरी परछाई, अभियान दल का इंतजार कर रही थी।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"무너진 왕좌의 회랑.",
			"오래된 황금의 저주가 깃든 곳.",
			"사라진 자들의 손가락에 남은 황금 띠 자국.",
			"반지를 모으는 자, 그 그림자는 누구인가."
		],
		"english": [
			"Corridor of the Ruined Throne.",
			"Where the old gold's curse resides.",
			"Golden band marks on the fingers of the vanished.",
			"Who is the shadow that collects the rings?"
		],
		"japanese": [
			"崩壊した玉座の回廊。",
			"古き黄金の呪いが宿る場所。",
			"消え去りし者たちの指に残る黄金の輪の跡。",
			"指輪を集める者、その影は誰なのか。"
		],
		"chinese": [
			"坍塌王座的回廊。",
			"古老黄金诅咒之地。",
			"消失者手指上残留的金色环痕。",
			"收集戒指之人，那影子是谁？"
		],
		"french": [
			"Couloir du Trône effondré.",
			"Là où réside la vieille malédiction de l'or.",
			"Marques de l'anneau d'or sur les doigts des disparus.",
			"Qui est l'ombre qui collectionne les anneaux ?"
		],
		"spanish": [
			"Corredor del Trono Caído.",
			"Donde reside la antigua maldición del oro.",
			"Marcas de anillos dorados en los dedos de los desaparecidos.",
			"¿Quién es la sombra que colecciona los anillos?"
		],
		"vietnamese": [
			"Hành lang Ngai vàng đổ nát.",
			"Nơi trú ngụ lời nguyền vàng cổ xưa.",
			"Dấu vết vòng vàng trên ngón tay những người đã biến mất.",
			"Kẻ thu thập những chiếc nhẫn, bóng hình đó là ai?"
		],
		"thai": [
			"โถงทางเดินแห่งบัลลังก์ที่พังทลาย",
			"ที่ซึ่งคำสาปทองคำเก่าแก่สถิตอยู่",
			"รอยวงแหวนทองคำบนนิ้วของผู้ที่หายสาบสูญ",
			"เงาที่รวบรวมแหวนนั้นคือใคร?"
		],
		"hindi": [
			"ध्वस्त सिंहासन का गलियारा।",
			"जहाँ पुराने सोने का श्राप रहता है।",
			"गायब हुए लोगों की उंगलियों पर सोने के बैंड के निशान।",
			"अंगूठियाँ इकट्ठा करने वाला वह साया कौन है?"
		]
	}
} as const;
