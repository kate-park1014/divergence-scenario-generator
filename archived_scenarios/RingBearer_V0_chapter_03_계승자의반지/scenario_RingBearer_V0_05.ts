export const scenario_RingBearer_V0_05 = {
	"scenario_id": "RingBearer_V0_05",
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
		"pool_id": "pool_082"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "무너진 왕좌의 회랑. 부서진 왕관과 황금이 흩어져 있다.",
						"english": "The corridor of the fallen throne. Broken crowns and gold are scattered.",
						"japanese": "崩れ落ちた玉座の回廊。壊れた王冠と黄金が散らばっている。",
						"chinese": "倒塌王座的走廊。破碎的王冠和黄金散落一地。",
						"french": "Le couloir du trône effondré. Des couronnes brisées et de l'or sont éparpillés.",
						"spanish": "El corredor del trono caído. Coronas rotas y oro están esparcidos.",
						"vietnamese": "Hành lang của ngai vàng đổ nát. Vương miện vỡ và vàng rải rác.",
						"thai": "โถงทางเดินของบัลลังก์ที่ล่มสลาย มงกุฎที่แตกหักและทองคำกระจัดกระจาย",
						"hindi": "गिरे हुए सिंहासन का गलियारा। टूटे हुए मुकुट और सोना बिखरा पड़ा है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기가 끝인가? 이 불길한 기운은.",
						"english": "...Is this the end? This ominous aura.",
						"japanese": "…ここが終わりか？この不吉な気配は。",
						"chinese": "...这里就是尽头吗？这股不祥的气息。",
						"french": "...Est-ce la fin ici ? Cette aura sinistre.",
						"spanish": "...¿Es este el final? Esta aura siniestra.",
						"vietnamese": "...Đây là kết thúc sao? Khí tức đáng ngại này.",
						"thai": "...นี่คือจุดจบงั้นหรือ? บรรยากาศอันน่าขนลุกนี้",
						"hindi": "...क्या यही अंत है? यह अशुभ आभा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "morwenna",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "오래 걸리셨네요.",
						"english": "You took a long time.",
						"japanese": "随分とお待たせしましたね。",
						"chinese": "您等了很久呢。",
						"french": "Vous avez mis longtemps.",
						"spanish": "Ha tardado mucho.",
						"vietnamese": "Bạn đã mất nhiều thời gian đấy.",
						"thai": "ท่านใช้เวลานานมากนะ",
						"hindi": "आपको बहुत समय लग गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "morwenna"
				},
				{
					"content": {
						"korean": "당신은… 누구지?",
						"english": "Who... are you?",
						"japanese": "あなたは…誰だ？",
						"chinese": "你…是谁？",
						"french": "Qui… êtes-vous ?",
						"spanish": "¿Quién… eres?",
						"vietnamese": "Ngươi… là ai?",
						"thai": "ท่าน…เป็นใคร?",
						"hindi": "आप… कौन हैं?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "반지에 대해… 제가 좀 알아요.",
						"english": "About the ring... I know a thing or two.",
						"japanese": "指輪について…少しばかり知っています。",
						"chinese": "关于戒指…我略知一二。",
						"french": "À propos de l'anneau… j'en sais un peu.",
						"spanish": "Sobre el anillo… sé algo.",
						"vietnamese": "Về chiếc nhẫn… tôi biết chút ít.",
						"thai": "เรื่องแหวนนั่น... ข้ารู้บางอย่าง",
						"hindi": "अंगूठी के बारे में… मुझे कुछ पता है।"
					},
					"speaker": "morwenna",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "회랑에서 사라진 자들. 그들의 손가락엔 모두 같은 황금 띠 자국이 있었다.",
						"english": "Those who vanished from the corridor. All had the same golden band mark on their fingers.",
						"japanese": "回廊から消えた者たち。彼らの指には皆、同じ黄金の帯の痕があった。",
						"chinese": "从走廊消失的人们。他们的手指上都有相同的金色条纹痕迹。",
						"french": "Ceux qui ont disparu du couloir. Tous avaient la même marque de bande dorée sur les doigts.",
						"spanish": "Los que desaparecieron del corredor. Todos tenían la misma marca de banda dorada en los dedos.",
						"vietnamese": "Những người biến mất khỏi hành lang. Tất cả đều có dấu vết vòng vàng tương tự trên ngón tay.",
						"thai": "ผู้ที่หายไปจากโถงทางเดิน พวกเขาทุกคนมีรอยวงแหวนทองคำแบบเดียวกันบนนิ้ว",
						"hindi": "गलियारे से गायब हुए लोग। उन सभी की उंगलियों पर एक ही सोने की पट्टी का निशान था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "morwenna",
					"content": {
						"korean": "그 자국이 무엇을 의미하는지… 궁금하지 않으신가요?",
						"english": "Aren't you curious what that mark means?",
						"japanese": "その痕が何を意味するのか…気になりませんか？",
						"chinese": "你不好奇那个痕迹意味着什么吗？",
						"french": "N'êtes-vous pas curieux de savoir ce que signifie cette marque ?",
						"spanish": "¿No siente curiosidad por lo que significa esa marca?",
						"vietnamese": "Bạn không tò mò dấu vết đó có ý nghĩa gì sao?",
						"thai": "ท่านไม่อยากรู้หรือว่ารอยนั้นหมายถึงอะไร?",
						"hindi": "क्या आपको उत्सुकता नहीं है कि उस निशान का क्या मतलब है?"
					},
					"type": "speech"
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
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 왕관들…",
						"english": "Those crowns...",
						"japanese": "あの王冠たち…",
						"chinese": "那些王冠…",
						"french": "Ces couronnes…",
						"spanish": "Esas coronas…",
						"vietnamese": "Những vương miện đó…",
						"thai": "มงกุฎเหล่านั้น...",
						"hindi": "वे मुकुट..."
					},
					"emotion": "base",
					"speaker": "morwenna"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 다 부서져 있지?",
						"english": "Why are they all broken?",
						"japanese": "なぜ皆壊れているんだ？",
						"chinese": "为什么都碎了？",
						"french": "Pourquoi sont-elles toutes brisées ?",
						"spanish": "¿Por qué están todas rotas?",
						"vietnamese": "Tại sao chúng lại vỡ hết vậy?",
						"thai": "ทำไมถึงแตกหักทั้งหมด?",
						"hindi": "वे सब क्यों टूटे हुए हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "한 사람이 수없이 왕이 되었다가, 수없이 파괴되었으니까.",
						"english": "Because one person became king countless times, and was destroyed countless times.",
						"japanese": "一人の人間が数え切れないほど王になり、数え切れないほど破壊されたからだ。",
						"chinese": "因为一个人无数次成为国王，又无数次被摧毁。",
						"french": "Parce qu'une seule personne est devenue roi d'innombrables fois, et a été détruite d'innombrables fois.",
						"spanish": "Porque una persona se convirtió en rey innumerables veces, y fue destruida innumerables veces.",
						"vietnamese": "Vì một người đã trở thành vua vô số lần, và bị phá hủy vô số lần.",
						"thai": "เพราะมีคนคนหนึ่งที่ได้เป็นกษัตริย์นับครั้งไม่ถ้วน และถูกทำลายลงนับครั้งไม่ถ้วนเช่นกัน",
						"hindi": "क्योंकि एक व्यक्ति अनगिनत बार राजा बना, और अनगिनत बार नष्ट हो गया।"
					},
					"speaker": "morwenna",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "무슨… 말도 안 되는 소리야.",
						"english": "What… nonsense is this.",
						"japanese": "なに… 馬鹿なことを。",
						"chinese": "什么… 胡说八道。",
						"french": "Quelle… absurdité.",
						"spanish": "Qué… tontería.",
						"vietnamese": "Gì… Vô lý thật.",
						"thai": "อะไรกัน… เหลวไหลสิ้นดี",
						"hindi": "यह क्या… बेतुकी बात है।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "morwenna",
					"type": "speech",
					"content": {
						"korean": "모든 가능성이 이곳에 모이고 있어요. 당신의 욕망도…",
						"english": "All possibilities gather here. Your desires too…",
						"japanese": "全ての可能性がここに集まっている。あなたの欲望も…",
						"chinese": "所有的可能性都汇聚于此。你的欲望也…",
						"french": "Toutes les possibilités se rassemblent ici. Vos désirs aussi…",
						"spanish": "Todas las posibilidades se reúnen aquí. Tus deseos también…",
						"vietnamese": "Mọi khả năng đều hội tụ ở đây. Cả ham muốn của bạn nữa…",
						"thai": "ทุกความเป็นไปได้กำลังรวมกันอยู่ที่นี่ ความปรารถนาของคุณด้วย…",
						"hindi": "सभी संभावनाएं यहां एकत्र हो रही हैं। तुम्हारी इच्छाएं भी…"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "morwenna",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "morwenna",
					"content": {
						"korean": "이 회랑은… 들어선 자를 놓아주지 않아요.",
						"english": "This corridor… won't let go of those who enter.",
						"japanese": "この回廊は… 足を踏み入れた者を逃がさない。",
						"chinese": "这条回廊… 不会放过进入者。",
						"french": "Ce couloir… ne lâche pas ceux qui y entrent.",
						"spanish": "Este pasillo… no suelta a quienes entran.",
						"vietnamese": "Hành lang này… sẽ không buông tha những kẻ bước vào.",
						"thai": "ระเบียงทางเดินนี้… ไม่ปล่อยใครที่ย่างกรายเข้ามา",
						"hindi": "यह गलियारा… अंदर आने वालों को जाने नहीं देता।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "그래서 모두 사라졌군.",
						"english": "So, everyone disappeared.",
						"japanese": "だから皆、消えたのか。",
						"chinese": "所以，所有人都消失了。",
						"french": "C'est pourquoi tout le monde a disparu.",
						"spanish": "Por eso, todos desaparecieron.",
						"vietnamese": "Vậy ra, tất cả đều biến mất.",
						"thai": "เพราะฉะนั้น ทุกคนถึงได้หายไป",
						"hindi": "इसलिए सब गायब हो गए।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "morwenna",
					"type": "speech",
					"content": {
						"korean": "반지를 원한 순간부터… 당신도 이미 그 흐름 속에 있어요.",
						"english": "From the moment you desired the ring… you were already caught in its current.",
						"japanese": "指輪を望んだ瞬間から… あなたも既にその流れの中にいる。",
						"chinese": "从你渴望戒指的那一刻起… 你也已身处那股洪流之中。",
						"french": "Dès l'instant où vous avez désiré l'anneau… vous étiez déjà dans son courant.",
						"spanish": "Desde el momento en que deseaste el anillo… ya estabas en esa corriente.",
						"vietnamese": "Từ khoảnh khắc bạn khao khát chiếc nhẫn… bạn đã ở trong dòng chảy đó rồi.",
						"thai": "ตั้งแต่ที่คุณต้องการแหวนวงนั้น… คุณก็ตกอยู่ในกระแสแล้ว",
						"hindi": "जिस क्षण से तुमने अंगूठी चाही… तुम भी उस प्रवाह में हो।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "난… 다르다고 생각했는데.",
						"english": "I… thought I was different.",
						"japanese": "私は… 違うと思っていたのに。",
						"chinese": "我… 以为我不同。",
						"french": "Je… pensais être différent.",
						"spanish": "Yo… pensé que era diferente.",
						"vietnamese": "Tôi… cứ nghĩ mình khác biệt.",
						"thai": "ฉัน… คิดว่าฉันแตกต่าง",
						"hindi": "मैंने… सोचा था कि मैं अलग हूँ।"
					},
					"type": "speech"
				},
				{
					"speaker": "morwenna",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신이 강해질수록, 그도… 강해지겠죠.",
						"english": "The stronger you become, the stronger he… will become too.",
						"japanese": "あなたが強くなるほど、彼も… 強くなるでしょう。",
						"chinese": "你越强大，他… 也会越强大。",
						"french": "Plus vous devenez fort, plus il… deviendra fort aussi.",
						"spanish": "Cuanto más fuerte te vuelvas, él también… se hará más fuerte.",
						"vietnamese": "Bạn càng mạnh, hắn… cũng sẽ càng mạnh thôi.",
						"thai": "ยิ่งคุณแข็งแกร่งเท่าไหร่ เขาก็… จะยิ่งแข็งแกร่งขึ้นเท่านั้น",
						"hindi": "तुम जितने मजबूत होते जाओगे, वह भी… उतना ही मजबूत होता जाएगा।"
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "깊은 곳에서 환청이 들려온다. 달콤한 속삭임.",
						"english": "Hallucinations echo from the depths. Sweet whispers.",
						"japanese": "深い場所から幻聴が聞こえる。甘い囁き。",
						"chinese": "深处传来幻听。甜美的低语。",
						"french": "Des hallucinations résonnent des profondeurs. Des murmures doux.",
						"spanish": "Alucinaciones resuenan desde las profundidades. Dulces susurros.",
						"vietnamese": "Ảo giác vang vọng từ sâu thẳm. Những lời thì thầm ngọt ngào.",
						"thai": "ได้ยินเสียงหลอนจากที่ลึก กระซิบหวานๆ",
						"hindi": "गहराई से मतिभ्रम सुनाई देता है। मीठी फुसफुसाहट।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "morwenna",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "morwenna",
					"content": {
						"korean": "…들리나요? 그 목소리?",
						"english": "…Do you hear it? That voice?",
						"japanese": "…聞こえますか？ あの声が？",
						"chinese": "…你听到了吗？那个声音？",
						"french": "…L'entendez-vous ? Cette voix ?",
						"spanish": "…¿Lo oyes? ¿Esa voz?",
						"vietnamese": "…Bạn có nghe thấy không? Giọng nói đó?",
						"thai": "…ได้ยินไหม? เสียงนั้นน่ะ?",
						"hindi": "…क्या तुम सुनते हो? वह आवाज़?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "\"한 번만 손에 올려놔 봐…\"",
						"english": "\"Just put it in your hand, just once…\"",
						"japanese": "「一度だけ、手に乗せてみて…」",
						"chinese": "\"就放手上一次吧…\"",
						"french": "\"Mets-le juste une fois dans ta main…\"",
						"spanish": "\"Solo ponlo en tu mano una vez…\"",
						"vietnamese": "\"Hãy đặt nó lên tay một lần thôi…\"",
						"thai": "\"ลองวางบนมือดูสักครั้งสิ…\"",
						"hindi": "\"बस एक बार अपने हाथ में रख कर देखो…\""
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "유혹에 넘어가지 마세요. 그건 그의 함정이에요.",
						"english": "Don't fall for the temptation. It's his trap.",
						"japanese": "誘惑に乗らないで。それは彼の罠よ。",
						"chinese": "别上当。那是他的陷阱。",
						"french": "Ne succombez pas à la tentation. C'est son piège.",
						"spanish": "No caigas en la tentación. Es su trampa.",
						"vietnamese": "Đừng sa vào cám dỗ. Đó là cái bẫy của hắn.",
						"thai": "อย่าตกหลุมพราง มันคือกับดักของเขา",
						"hindi": "प्रलोभन में मत पड़ो। वह उसका जाल है।"
					},
					"speaker": "morwenna",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "왜 나를… 돕는 거지?",
						"english": "Why... are you helping me?",
						"japanese": "なぜ私を… 助ける？",
						"chinese": "你为何… 帮我？",
						"french": "Pourquoi... m'aides-tu ?",
						"spanish": "¿Por qué... me ayudas?",
						"vietnamese": "Tại sao… cô giúp tôi?",
						"thai": "ทำไม… ถึงช่วยฉัน?",
						"hindi": "तुम मेरी मदद क्यों कर रहे हो...?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신에게 아직… 선택의 기회가 남아있기를 바라니까.",
						"english": "Because I hope you still... have a choice.",
						"japanese": "あなたにまだ… 選択の機会が残っていることを願うから。",
						"chinese": "因为我希望你… 仍有选择的机会。",
						"french": "Parce que j'espère que tu as encore… une chance de choisir.",
						"spanish": "Porque espero que aún... tengas una oportunidad de elegir.",
						"vietnamese": "Vì tôi mong cô vẫn còn… cơ hội lựa chọn.",
						"thai": "เพราะฉันหวังว่าคุณยังคง… มีโอกาสเลือก",
						"hindi": "क्योंकि मुझे उम्मीद है कि तुम्हारे पास अभी भी... चुनाव का मौका है।"
					},
					"speaker": "morwenna",
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…아니야. 아직 끝나지 않았어.",
						"english": "…No. It's not over yet.",
						"japanese": "「…違う。まだ終わってない。」",
						"chinese": "「…不。还没有结束。」",
						"french": "«…Non. Ce n'est pas encore fini.»",
						"spanish": "«…No. Todavía no ha terminado.»",
						"vietnamese": "«…Không. Vẫn chưa kết thúc đâu.»",
						"thai": "«…ไม่หรอก ยังไม่จบแค่นี้»",
						"hindi": "«…नहीं। अभी खत्म नहीं हुआ है।»"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "너는… 또 다른 나를 만들었을 뿐.",
						"english": "You… merely created another me.",
						"japanese": "「お前は…もう一人の私を作っただけだ。」",
						"chinese": "「你…不过是创造了另一个我。」",
						"french": "«Tu n'as fait que… créer un autre moi.»",
						"spanish": "«Tú… solo creaste otro yo.»",
						"vietnamese": "«Ngươi… chỉ là đã tạo ra một cái tôi khác mà thôi.»",
						"thai": "«แกแค่...สร้างอีกคนที่เป็นฉันขึ้นมาเท่านั้นเอง»",
						"hindi": "«तुमने… बस एक और मैं बनाया है।»"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "…정말 끝이 없는 건가.",
						"english": "...Is there truly no end?",
						"japanese": "…本当に終わりがないのか。",
						"chinese": "……真的没有尽头吗？",
						"french": "...N'y a-t-il vraiment pas de fin ?",
						"spanish": "¿De verdad no tiene fin?",
						"vietnamese": "...Thật sự là không có hồi kết sao?",
						"thai": "...นี่มันไม่มีที่สิ้นสุดจริงๆ หรือไงนะ",
						"hindi": "...क्या सच में कोई अंत नहीं है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "회랑에 깊은 침묵이 찾아왔다. 모든 가능성의 조각들이 사라졌다.",
						"english": "Deep silence descended upon the corridor. All fragments of possibility vanished.",
						"japanese": "回廊に深い沈黙が訪れた。あらゆる可能性の欠片が消え去った。",
						"chinese": "深沉的寂静降临在回廊。所有可能性的碎片都已消逝。",
						"french": "Un silence profond envahit le couloir. Tous les fragments de possibilité disparurent.",
						"spanish": "Un profundo silencio descendió sobre el corredor. Todos los fragmentos de posibilidad se desvanecieron.",
						"vietnamese": "Sự tĩnh lặng sâu sắc bao trùm hành lang. Mọi mảnh ghép của khả năng đều tan biến.",
						"thai": "ความเงียบงันปกคลุมโถงทางเดิน ชิ้นส่วนแห่งความเป็นไปได้ทั้งหมดเลือนหายไป",
						"hindi": "गलियारे में गहरा सन्नाटा छा गया। संभावनाओं के सभी अंश गायब हो गए।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "그러나 반지는 여전히 그곳에 남아… 다음 욕망을 기다리고 있었다.",
						"english": "Yet the ring remained there, awaiting the next desire.",
						"japanese": "しかし指輪は依然としてそこに残り… 次の欲望を待っていた。",
						"chinese": "然而戒指依然在那里，等待着下一个欲望。",
						"french": "Mais l'anneau restait là, attendant le prochain désir.",
						"spanish": "Sin embargo, el anillo permaneció allí, esperando el próximo deseo.",
						"vietnamese": "Nhưng chiếc nhẫn vẫn còn đó, chờ đợi khát vọng tiếp theo.",
						"thai": "แต่แหวนยังคงอยู่ที่นั่น… รอคอยความปรารถนาครั้งต่อไป",
						"hindi": "फिर भी अंगूठी वहीं रही, अगली इच्छा का इंतज़ार कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…이걸 어떻게 해야 하지.",
						"english": "...What should I do with this?",
						"japanese": "…これをどうすればいいんだ。",
						"chinese": "……我该如何处理这个？",
						"french": "...Que dois-je faire avec ça ?",
						"spanish": "¿Qué debo hacer con esto?",
						"vietnamese": "...Tôi phải làm gì với cái này đây?",
						"thai": "...ฉันควรทำอย่างไรกับสิ่งนี้ดี",
						"hindi": "...मुझे इसका क्या करना चाहिए?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "morwenna",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "선택은… 당신의 몫이에요.",
						"english": "The choice... is yours.",
						"japanese": "選択は… あなた次第です。",
						"chinese": "选择……取决于你。",
						"french": "Le choix... vous appartient.",
						"spanish": "La elección... es tuya.",
						"vietnamese": "Lựa chọn... là của bạn.",
						"thai": "ทางเลือก... เป็นของคุณ",
						"hindi": "चुनाव... तुम्हारा है।"
					},
					"emotion": "base",
					"speaker": "morwenna"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "회랑 끝의 작은 광장. 한 방랑자가 서 있다.",
						"english": "A small square at the end of the corridor. A wanderer stands there.",
						"japanese": "回廊の果ての小さな広場。一人の放浪者が立っている。",
						"chinese": "走廊尽头的小广场。一个流浪者站在那里。",
						"french": "Une petite place au bout du couloir. Un vagabond s'y tient.",
						"spanish": "Una pequeña plaza al final del pasillo. Un vagabundo está de pie.",
						"vietnamese": "Một quảng trường nhỏ ở cuối hành lang. Một lữ khách đứng đó.",
						"thai": "จัตุรัสเล็กๆ สุดทางเดิน มีคนพเนจรยืนอยู่",
						"hindi": "गलियारे के अंत में एक छोटा-सा चौक। एक पथिक खड़ा है।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막 먼지를 쓴 로브, 작은 황금 반지.",
						"english": "A robe covered in desert dust, a small golden ring.",
						"japanese": "砂漠の埃をかぶったローブ、小さな金の指輪。",
						"chinese": "沾满沙漠尘土的长袍，一枚小小的金戒指。",
						"french": "Une robe couverte de poussière du désert, une petite bague en or.",
						"spanish": "Una túnica cubierta de polvo del desierto, un pequeño anillo de oro.",
						"vietnamese": "Áo choàng phủ bụi sa mạc, một chiếc nhẫn vàng nhỏ.",
						"thai": "เสื้อคลุมเปื้อนฝุ่นทะเลทราย, แหวนทองคำวงเล็ก",
						"hindi": "रेगिस्तान की धूल से सना हुआ लबादा, एक छोटी सोने की अंगूठी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "morwenna",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "마침내 그가… 아르카인이.",
						"english": "Finally, he is… Arcane.",
						"japanese": "ついに彼が… アーケイン。",
						"chinese": "终于，他… 阿尔凯恩。",
						"french": "Finalement, il est… Arcane.",
						"spanish": "Finalmente, él es… Arcane.",
						"vietnamese": "Cuối cùng, hắn là… Arcane.",
						"thai": "ในที่สุดเขาก็คือ… อาร์เคน",
						"hindi": "आखिरकार, वह… अरकेन।"
					},
					"speaker": "morwenna",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "오래 걸리셨네요.",
						"english": "You took a long time.",
						"japanese": "時間がかかりましたね。",
						"chinese": "你花了很长时间。",
						"french": "Vous avez mis du temps.",
						"spanish": "Ha tardado mucho.",
						"vietnamese": "Ông đã mất nhiều thời gian đấy.",
						"thai": "คุณใช้เวลานานเลยนะ",
						"hindi": "आपको बहुत देर लगी।"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이… 반지를 쥔 자?",
						"english": "You are… the one who holds the ring?",
						"japanese": "あなたが… 指輪の持ち主？",
						"chinese": "你就是… 持戒者？",
						"french": "Tu es… celui qui tient l'anneau ?",
						"spanish": "¿Tú eres… quien lleva el anillo?",
						"vietnamese": "Cô là… người giữ chiếc nhẫn?",
						"thai": "คุณคือ… ผู้ถือแหวนรึ?",
						"hindi": "तुम… अंगूठी धारण करने वाले हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "반지에 대해… 제가 잘 알아요.",
						"english": "About the ring… I know it well.",
						"japanese": "指輪について… 私はよく知っています。",
						"chinese": "关于这枚戒指… 我很了解。",
						"french": "À propos de l'anneau… je le connais bien.",
						"spanish": "Sobre el anillo… lo conozco bien.",
						"vietnamese": "Về chiếc nhẫn… tôi biết rất rõ.",
						"thai": "เรื่องแหวนนั่น… ฉันรู้ดี",
						"hindi": "अंगूठी के बारे में… मैं अच्छे से जानता हूँ।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "(손바닥에 반지를 올려 내밀며) 한 번만 손에 올려놓아 봐요.",
						"english": "(Placing the ring on their palm and extending it) Just place it on your hand once.",
						"japanese": "(手のひらに指輪を乗せて差し出しながら) 一度だけ手に乗せてみて。",
						"chinese": "(将戒指放在手心递出) 把它放到手上试试。",
						"french": "(Posant l'anneau sur sa paume et le tendant) Mets-le juste une fois sur ta main.",
						"spanish": "(Poniendo el anillo en la palma y ofreciéndolo) Ponlo en tu mano una vez.",
						"vietnamese": "(Đặt chiếc nhẫn lên lòng bàn tay và đưa ra) Chỉ cần đặt nó lên tay một lần thôi.",
						"thai": "(วางแหวนบนฝ่ามือแล้วยื่นออกไป) ลองวางบนมือสักครั้งสิ",
						"hindi": "(हथेली पर अंगूठी रखकर आगे बढ़ाते हुए) बस एक बार हाथ पर रखकर देखो।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "…!",
						"english": "…!",
						"japanese": "「…！」",
						"chinese": "「…！」",
						"french": "«…!»",
						"spanish": "«…!»",
						"vietnamese": "«…!»",
						"thai": "«…!»",
						"hindi": "«…!»"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "반지가 손에 쥐어지는 순간 — 시야가 겹쳐진다.",
						"english": "The moment the ring is grasped — my vision blurs.",
						"japanese": "「指輪が手の中に収まった瞬間――視界が重なる。」",
						"chinese": "「戒指握在手中的瞬间——视线重叠了。」",
						"french": "«Au moment où l'anneau est saisi — ma vision se superpose.»",
						"spanish": "«En el instante en que el anillo es tomado — mi visión se superpone.»",
						"vietnamese": "«Khoảnh khắc chiếc nhẫn được nắm chặt — tầm nhìn chồng chéo lên nhau.»",
						"thai": "«วินาทีที่แหวนถูกกำไว้ในมือ — วิสัยทัศน์ซ้อนทับกัน»",
						"hindi": "«जैसे ही अंगूठी हाथ में पकड़ी गई — मेरी दृष्टि आपस में मिल गई।»"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "왕이 된 나, 파괴자가 된 나, 아무것도 남기지 못한 나.",
						"english": "I, who became king; I, who became destroyer; I, who left nothing behind.",
						"japanese": "「王になった私、破壊者になった私、何も残せなかった私。」",
						"chinese": "「成为王的'我'，成为破坏者的'我'，一无所有的'我'。」",
						"french": "«Moi, devenu roi ; moi, devenu destructeur ; moi, qui n'ai rien laissé.»",
						"spanish": "«Yo, el que se hizo rey; yo, el que se hizo destructor; yo, el que no dejó nada.»",
						"vietnamese": "«Cái tôi đã trở thành vua, cái tôi đã trở thành kẻ hủy diệt, cái tôi không còn lại gì.»",
						"thai": "«ฉันที่ได้เป็นราชา ฉันที่ได้เป็นผู้ทำลาย ฉันที่ไม่ได้ทิ้งอะไรไว้เลย»",
						"hindi": "«मैं, जो राजा बना; मैं, जो विध्वंसक बना; मैं, जिसने कुछ भी नहीं छोड़ा।»"
					}
				},
				{
					"content": {
						"korean": "그의 몸이 수십 개의 자신으로 분열한다. 손가락마다 같은 반지를 끼고 있다.",
						"english": "His body splits into dozens of selves. Each finger wears the same ring.",
						"japanese": "「彼の体が数十の自分に分裂する。指先ごとに同じ指輪をはめている。」",
						"chinese": "「他的身体分裂成数十个自己。每根手指都戴着同样的戒指。」",
						"french": "«Son corps se divise en des dizaines de lui-même. Chaque doigt porte la même bague.»",
						"spanish": "«Su cuerpo se divide en decenas de sí mismo. Cada dedo lleva el mismo anillo.»",
						"vietnamese": "«Cơ thể hắn phân tách thành hàng chục bản thể. Mỗi ngón tay đều đeo cùng một chiếc nhẫn.»",
						"thai": "«ร่างของเขาแตกออกเป็นหลายสิบร่าง แต่ละนิ้วสวมแหวนวงเดียวกัน»",
						"hindi": "«उसका शरीर दर्जनों स्वयं में विभाजित हो जाता है। हर उंगली में वही अंगूठी है।»"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "봐… 전부 너야.",
						"english": "Look… it's all you.",
						"japanese": "「見ろ…全部、お前だ。」",
						"chinese": "「看…全都是你。」",
						"french": "«Regarde… c'est entièrement toi.»",
						"spanish": "«Mira… todo eres tú.»",
						"vietnamese": "«Nhìn đi… tất cả đều là ngươi.»",
						"thai": "«ดูสิ...ทั้งหมดนั่นคือแก»",
						"hindi": "«देखो… यह सब तुम ही हो।»"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "반지를 원한 순간부터… 넌 이미 나였다.",
						"english": "From the moment you desired the ring… you were already me.",
						"japanese": "「指輪を望んだ瞬間から…お前は既に私だった。」",
						"chinese": "「从你渴望戒指的那一刻起…你就是我了。」",
						"french": "«Dès l'instant où tu as désiré l'anneau… tu étais déjà moi.»",
						"spanish": "«Desde el momento en que deseaste el anillo… ya eras yo.»",
						"vietnamese": "«Từ khoảnh khắc ngươi khao khát chiếc nhẫn… ngươi đã là ta rồi.»",
						"thai": "«ตั้งแต่วินาทีที่แกปรารถนาแหวนวงนี้...แกก็คือฉันแล้ว»",
						"hindi": "«जिस पल से तुमने अंगूठी चाही… तुम पहले से ही मैं थे।»"
					},
					"type": "speech",
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼!",
						"english": "Impossible!",
						"japanese": "「そんな馬鹿な！」",
						"chinese": "「不可能！」",
						"french": "«C'est impossible !»",
						"spanish": "«¡Imposible!»",
						"vietnamese": "«Không thể nào!»",
						"thai": "«เป็นไปไม่ได้!»",
						"hindi": "«यह नामुमकिन है!»"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "네 욕망이 나를 완성했다. 네가 바로… 나다.",
						"english": "Your desire completed me. You are… me.",
						"japanese": "「お前の欲望が私を完成させた。お前こそが…私だ。」",
						"chinese": "「你的欲望成就了我。你就是…我。」",
						"french": "«Ton désir m'a achevé. Tu es… moi.»",
						"spanish": "«Tu deseo me completó. Tú eres… yo.»",
						"vietnamese": "«Dục vọng của ngươi đã hoàn thiện ta. Ngươi chính là… ta.»",
						"thai": "«ความปรารถนาของแกทำให้ฉันสมบูรณ์ แกก็คือ...ฉันเอง»",
						"hindi": "«तुम्हारी इच्छा ने मुझे पूरा किया। तुम ही… मैं हो।»"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "수많은 아르카인의 그림자가 탐험대를 집어삼킨다.",
						"english": "Countless shadows of Arcane engulf the expedition.",
						"japanese": "数多のアルカインの影が探検隊を飲み込む。",
						"chinese": "无数奥术的阴影吞噬了探险队。",
						"french": "D'innombrables ombres d'Arcane engloutissent l'expédition.",
						"spanish": "Innumerables sombras de Arcane envuelven a la expedición.",
						"vietnamese": "Vô số bóng tối của Arcane nuốt chửng đoàn thám hiểm.",
						"thai": "เงาอาร์เคนนับไม่ถ้วนกลืนกินคณะสำรวจ",
						"hindi": "आर्केन की अनगिनत छायाएँ अभियान को निगल जाती हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐… 네 욕망이 얼마나 허망한지.",
						"english": "See... how futile your desires are.",
						"japanese": "見よ… お前の欲望がいかに虚しいかを。",
						"chinese": "看……你的欲望多么徒劳。",
						"french": "Vois... comme tes désirs sont vains.",
						"spanish": "Mira... qué inútiles son tus deseos.",
						"vietnamese": "Nhìn đi... khát vọng của ngươi thật phù phiếm.",
						"thai": "ดูสิ… ว่าความปรารถนาของแกช่างไร้ค่าแค่ไหน",
						"hindi": "देखो... तुम्हारी इच्छाएँ कितनी व्यर्थ हैं।"
					},
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"content": {
						"korean": "나는 언제든 다시 돌아올 거야. 네 안에 있으니까.",
						"english": "I will return anytime. For I am within you.",
						"japanese": "私はいつでも戻ってくるだろう。お前の中にいるからだ。",
						"chinese": "我随时都会回来。因为我就在你体内。",
						"french": "Je reviendrai à tout moment. Car je suis en toi.",
						"spanish": "Volveré en cualquier momento. Porque estoy dentro de ti.",
						"vietnamese": "Ta sẽ trở lại bất cứ lúc nào. Vì ta ở trong ngươi.",
						"thai": "ฉันจะกลับมาเสมอ เพราะฉันอยู่ในตัวแก",
						"hindi": "मैं कभी भी वापस आऊँगा। क्योंकि मैं तुम्हारे अंदर हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…! 아직 끝나지 않았다!",
						"english": "...! It's not over yet!",
						"japanese": "…！まだ終わっていない！",
						"chinese": "……！还没结束！",
						"french": "...! Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "...! Vẫn chưa kết thúc!",
						"thai": "...! ยังไม่จบ!",
						"hindi": "...! अभी खत्म नहीं हुआ है!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"무너진 왕좌의 회랑. 욕망이 이끄는 그림자들.",
			"겹쳐진 황금 띠의 흔적. 들려오는 달콤한 속삭임.",
			"넌 다르게 쓸 수 있다고. 바로잡을 수 있다고.",
			"마침내 그가 모습을 드러낸다. 반지를 쥔 자.",
			"그리고 깨닫는다. 모든 것이, 처음부터 너였다는 것을."
		],
		"english": [
			"The shattered throne's corridor. Shadows led by desire.",
			"Traces of overlapping golden bands. Sweet whispers are heard.",
			"You can write it differently. You can set it right.",
			"Finally, he reveals himself. The one who holds the ring.",
			"And realize. Everything, from the beginning, was you."
		],
		"japanese": [
			"崩壊した玉座の回廊。欲望が導く影たち。",
			"重なり合う黄金の帯の痕跡。聞こえてくる甘い囁き。",
			"君は違うように書ける。正すことができると。",
			"ついに彼が姿を現す。指輪を握る者。",
			"そして気づく。すべてが、最初から君だったと。"
		],
		"chinese": [
			"坍塌王座的走廊。欲望引导的暗影。",
			"重叠金带的痕迹。耳畔传来甜蜜的低语。",
			"你可以书写不同的结局。你可以纠正这一切。",
			"最终，他现身了。戒指的持有者。",
			"然后才明白。所有的一切，从一开始就是你。"
		],
		"french": [
			"Le couloir du trône brisé. Des ombres guidées par le désir.",
			"Les traces des bandes dorées superposées. De doux murmures se font entendre.",
			"Tu peux l'écrire différemment. Tu peux le corriger.",
			"Enfin, il se révèle. Celui qui tient l'anneau.",
			"Et réaliser. Tout, depuis le début, c'était toi."
		],
		"spanish": [
			"El corredor del trono destrozado. Sombras guiadas por el deseo.",
			"Huellas de bandas doradas superpuestas. Dulces susurros se escuchan.",
			"Puedes escribirlo de otra manera. Puedes corregirlo.",
			"Finalmente, él se revela. El que posee el anillo.",
			"Y te das cuenta. Todo, desde el principio, fuiste tú."
		],
		"vietnamese": [
			"Hành lang ngai vàng đổ nát. Những bóng đêm bị dục vọng dẫn lối.",
			"Dấu vết của dải vàng chồng chất. Tiếng thì thầm ngọt ngào vang lên.",
			"Ngươi có thể viết lại khác đi. Có thể sửa chữa tất cả.",
			"Cuối cùng, hắn cũng xuất hiện. Kẻ nắm giữ chiếc nhẫn.",
			"Và rồi nhận ra. Tất cả, ngay từ đầu, chính là ngươi."
		],
		"thai": [
			"เฉลียงบัลลังก์ที่พังทลาย เงาที่นำทางโดยความปรารถนา",
			"ร่องรอยของแถบทองคำที่ซ้อนทับ เสียงกระซิบหวานที่ได้ยิน",
			"เจ้าสามารถเขียนมันได้ต่างออกไป เจ้าสามารถแก้ไขมันได้",
			"ในที่สุดเขาก็เผยตัว ผู้ที่ถือกำแหวน",
			"และตระหนักว่า ทุกสิ่งทุกอย่าง ตั้งแต่แรกเริ่ม ก็คือคุณ"
		],
		"hindi": [
			"खंडित सिंहासन का गलियारा। इच्छाओं द्वारा निर्देशित परछाइयाँ।",
			"अतिव्यापी सुनहरी पट्टियों के निशान। मधुर फुसफुसाहट सुनाई देती है।",
			"तुम इसे अलग तरह से लिख सकते हो। तुम इसे ठीक कर सकते हो।",
			"अंततः, वह प्रकट होता है। अंगूठी धारण करने वाला।",
			"और महसूस करते हैं। सब कुछ, शुरू से ही, तुम थे।"
		]
	},
	"epilogue": {
		"korean": [
			"모든 가능성의 아르카인이 사라졌다.",
			"허망한 회랑에 침묵만이 맴돌고.",
			"반지는 여전히 그곳에 남아 있었다.",
			"봉인인가, 파괴인가. 아니면… 새로운 시작인가.",
			"대답 없는 질문만이 회랑을 맴돌았다."
		],
		"english": [
			"The Arcane of all possibilities has vanished.",
			"Only silence lingers in the empty corridor.",
			"The ring still remained there.",
			"Is it a seal, or destruction? Or... a new beginning?",
			"Only unanswered questions echoed through the corridor."
		],
		"japanese": [
			"あらゆる可能性のアルカナが消え去った。",
			"虚ろな回廊に、沈黙だけが漂う。",
			"指輪は依然としてそこにあった。",
			"封印か、破壊か。それとも…新たな始まりか。",
			"答えのない問いだけが回廊をさまよった。"
		],
		"chinese": [
			"所有可能性的奥术都已消失。",
			"空荡荡的走廊里，只剩下沉默。",
			"戒指依然留在那里。",
			"是封印，还是毁灭？亦或是……一个新的开始？",
			"只有没有答案的问题在走廊里回荡。"
		],
		"french": [
			"L'Arcane de toutes les possibilités a disparu.",
			"Seul le silence plane dans le couloir vide.",
			"L'anneau était toujours là.",
			"Est-ce un sceau, ou une destruction ? Ou... un nouveau commencement ?",
			"Seules des questions sans réponse résonnaient dans le couloir."
		],
		"spanish": [
			"El Arcano de todas las posibilidades ha desaparecido.",
			"Solo el silencio persiste en el corredor vacío.",
			"El anillo aún permanecía allí.",
			"¿Es un sello o destrucción? ¿O... un nuevo comienzo?",
			"Solo preguntas sin respuesta resonaban en el corredor."
		],
		"vietnamese": [
			"Arcane của mọi khả năng đã biến mất.",
			"Chỉ còn sự im lặng bao trùm hành lang trống rỗng.",
			"Chiếc nhẫn vẫn còn ở đó.",
			"Là phong ấn, hay hủy diệt? Hay là... một khởi đầu mới?",
			"Chỉ những câu hỏi không lời đáp lẩn quẩn trong hành lang."
		],
		"thai": [
			"อาร์เคนแห่งความเป็นไปได้ทั้งหมดได้หายไปแล้ว",
			"มีเพียงความเงียบงันที่ค้างอยู่ในโถงทางเดินอันว่างเปล่า",
			"แหวนยังคงอยู่ที่นั่น",
			"เป็นการผนึก หรือการทำลาย? หรือ... การเริ่มต้นใหม่?",
			"มีเพียงคำถามที่ไม่มีคำตอบก้องอยู่ในโถงทางเดิน"
		],
		"hindi": [
			"सभी संभावनाओं का आर्केन गायब हो गया है।",
			"खाली गलियारे में केवल सन्नाटा छाया हुआ है।",
			"अंगूठी अभी भी वहीं थी।",
			"क्या यह एक मुहर है, या विनाश? या... एक नई शुरुआत?",
			"केवल अनुत्तरित प्रश्न गलियारे में गूँजते रहे।"
		]
	}
} as const;
