export const scenario_snowy_anya_3_03 = {
	"scenario_id": "snowy_anya_3_03",
	"order": 3,
	"act": "rising",
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
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "밤의 설원은 더욱 맹렬한 추위를 뿜어냈다.",
						"english": "The night's snowfield exuded an even more ferocious cold.",
						"japanese": "夜の雪原は、さらに猛烈な寒気を放っていた。",
						"chinese": "夜晚的雪原散发出更猛烈的寒意。",
						"french": "Le champ de neige nocturne dégageait un froid encore plus féroce.",
						"spanish": "La llanura nevada nocturna exhalaba un frío aún más feroz.",
						"vietnamese": "Cánh đồng tuyết ban đêm tỏa ra một cái lạnh càng dữ dội hơn.",
						"thai": "ทุ่งหิมะยามค่ำคืนแผ่ความหนาวเย็นที่รุนแรงยิ่งขึ้น",
						"hindi": "रात के बर्फीले मैदान ने और भी भीषण ठंडक फैलाई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빛이 없었으면… 벌써 얼어 죽었을 거야.",
						"english": "Without the light... I would have frozen to death by now.",
						"japanese": "もし光がなかったら…とっくに凍え死んでたわ。",
						"chinese": "要是没有光……我早就冻死了。",
						"french": "Sans la lumière... je serais déjà mort de froid.",
						"spanish": "Sin la luz... ya me habría muerto de frío.",
						"vietnamese": "Nếu không có ánh sáng… chắc tôi đã chết cóng rồi.",
						"thai": "ถ้าไม่มีแสง... ฉันคงแข็งตายไปแล้ว",
						"hindi": "अगर रोशनी नहीं होती... तो अब तक मैं जम कर मर गया होता।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "안야의 빛은… 따뜻하지만 왠지 모르게 슬퍼요.",
						"english": "Anya's light is... warm, yet somehow sad.",
						"japanese": "アーニャの光は…温かいけど、なんだか悲しいです。",
						"chinese": "安雅的光……虽然温暖，却不知为何带着一丝悲伤。",
						"french": "La lumière d'Anya est... chaude, mais étrangement triste.",
						"spanish": "La luz de Anya es... cálida, pero de alguna manera triste.",
						"vietnamese": "Ánh sáng của Anya… ấm áp, nhưng không hiểu sao lại buồn.",
						"thai": "แสงของอันยา... อบอุ่น แต่ก็แฝงไปด้วยความเศร้าบางอย่าง",
						"hindi": "अन्या की रोशनी... गर्म है, फिर भी किसी तरह उदास है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "슬픔? 에이라, 쓸데없는 생각은 하지 마.",
						"english": "Sadness? Eira, don't think useless thoughts.",
						"japanese": "悲しみ？エイラ、無駄なことは考えるな。",
						"chinese": "悲伤？艾拉，别胡思乱想了。",
						"french": "Tristesse ? Eira, ne pense pas à des choses inutiles.",
						"spanish": "¿Tristeza? Eira, no pienses tonterías.",
						"vietnamese": "Buồn? Eira, đừng nghĩ vẩn vơ.",
						"thai": "เศร้า? ไอร่า, อย่าคิดเรื่องไร้สาระ",
						"hindi": "उदासी? इरा, बेकार की बातें मत सोचो।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"content": {
						"korean": "어쩌면… 이 빛도 고통받고 있는 걸지도요.",
						"english": "Perhaps... this light is suffering too.",
						"japanese": "もしかしたら…この光も苦しんでいるのかもしれません。",
						"chinese": "或许……这束光也在承受痛苦吧。",
						"french": "Peut-être... que cette lumière souffre aussi.",
						"spanish": "Quizás... esta luz también esté sufriendo.",
						"vietnamese": "Có lẽ… ánh sáng này cũng đang chịu đựng đau khổ.",
						"thai": "บางที... แสงนี้ก็กำลังเจ็บปวดอยู่เช่นกัน",
						"hindi": "शायद... यह प्रकाश भी पीड़ा में है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 빛은 우리를 이끌고 있어요. 하지만…",
						"english": "This light is guiding us. But...",
						"japanese": "この光は私たちを導いている。でも…",
						"chinese": "这道光指引着我们。但是...",
						"french": "Cette lumière nous guide. Mais...",
						"spanish": "Esta luz nos guía. Pero...",
						"vietnamese": "Ánh sáng này đang dẫn lối cho chúng ta. Nhưng mà...",
						"thai": "แสงนี้กำลังนำทางเรา แต่ว่า...",
						"hindi": "यह रोशनी हमें राह दिखा रही है। लेकिन..."
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 일이야?",
						"english": "What's wrong?",
						"japanese": "どうした？",
						"chinese": "怎么了？",
						"french": "Qu'est-ce qu'il y a ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या बात है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "희미하게… 무언가 들려와요.",
						"english": "Faintly... I hear something.",
						"japanese": "かすかに… 何か聞こえる。",
						"chinese": "隐约... 听到什么了。",
						"french": "Faiblement... j'entends quelque chose.",
						"spanish": "Débilmente... escucho algo.",
						"vietnamese": "Mang máng... nghe thấy gì đó.",
						"thai": "แผ่วๆ... ได้ยินอะไรบางอย่าง",
						"hindi": "हल्की-हल्की... कुछ आवाज़ आ रही है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "설마… 아이 울음소리?",
						"english": "Could it be... a child's cry?",
						"japanese": "まさか… 子供の泣き声？",
						"chinese": "难道是... 孩子的哭声？",
						"french": "Serait-ce... un cri d'enfant ?",
						"spanish": "¿Será... el llanto de un niño?",
						"vietnamese": "Chẳng lẽ... tiếng trẻ con khóc?",
						"thai": "ไม่จริงน่า... เสียงเด็ก?",
						"hindi": "कहीं... बच्चे के रोने की आवाज़ तो नहीं?"
					},
					"emotion": "base",
					"speaker": "character_2"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "극심한 눈보라 속에서 환청처럼, 어린아이의 울음소리가 희미하게 들려왔다.",
						"english": "Like a hallucination in the fierce blizzard, a child's faint cry was heard.",
						"japanese": "激しい吹雪の中で幻聴のように、幼い子供の泣き声がかすかに聞こえてきた。",
						"chinese": "在猛烈的暴风雪中，孩子的哭声若隐若现，如幻听一般传来。",
						"french": "Comme une hallucination au milieu du blizzard violent, le faible cri d'un enfant se fit entendre.",
						"spanish": "Como una alucinación en medio de la feroz tormenta de nieve, el débil llanto de un niño se escuchó.",
						"vietnamese": "Giữa trận bão tuyết khắc nghiệt, tiếng trẻ con khóc yếu ớt vọng lại, tựa như ảo giác.",
						"thai": "ในพายุหิมะที่รุนแรง เสียงเด็กร้องไห้เบาๆ แว่วมา ราวกับภาพหลอน",
						"hindi": "भयंकर बर्फीले तूफान में, एक बच्चे के रोने की हल्की आवाज़ सुनाई दी, जैसे कोई भ्रम हो।"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 고요함 속에… 알 수 없는 불안감이 섞여 있어요.",
						"english": "In this silence... an unknown unease is mixed in.",
						"japanese": "この静けさの中に… 何か知れない不安が混じっている。",
						"chinese": "在这份宁静中... 夹杂着一种莫名的不安。",
						"french": "Dans ce silence... une anxiété inconnue se mêle.",
						"spanish": "En este silencio... se mezcla una inquietud desconocida.",
						"vietnamese": "Trong sự tĩnh lặng này... ẩn chứa một nỗi bất an khó tả.",
						"thai": "ในความเงียบนี้... มีความกังวลที่ไม่รู้อะไรปะปนอยู่",
						"hindi": "इस शांति में... एक अज्ञात बेचैनी घुल गई है।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아이의 울음소리가 계속… 안야의 슬픔과 관련이 있을까요?",
						"english": "The child's crying continues... Could it be related to Anya's sorrow?",
						"japanese": "子供の泣き声が続く… アーニャの悲しみと関係があるのだろうか？",
						"chinese": "孩子的哭声不断... 会不会和安雅的悲伤有关？",
						"french": "Les pleurs de l'enfant continuent... Seraient-ils liés à la tristesse d'Anya ?",
						"spanish": "El llanto del niño continúa... ¿Podría estar relacionado con la tristeza de Anya?",
						"vietnamese": "Tiếng trẻ con khóc vẫn tiếp diễn... Liệu có liên quan đến nỗi buồn của Anya không?",
						"thai": "เสียงเด็กร้องไห้ยังคงอยู่... เกี่ยวข้องกับความเศร้าของอันย่าหรือเปล่า?",
						"hindi": "बच्चे के रोने की आवाज़ लगातार आ रही है... क्या इसका संबंध अन्या के दुख से हो सकता है?"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 소리는 환청이야. 지쳤을 뿐이라고.",
						"english": "That sound is a hallucination. You're just tired.",
						"japanese": "その音は幻聴だよ。疲れてるだけだ。",
						"chinese": "那个声音是幻听。你只是累了而已。",
						"french": "Ce son est une hallucination. Tu es juste fatigué.",
						"spanish": "Ese sonido es una alucinación. Solo estás cansado.",
						"vietnamese": "Đó là ảo giác thôi. Cậu chỉ mệt mỏi thôi.",
						"thai": "เสียงนั้นมันภาพหลอน เธอแค่เหนื่อยเท่านั้นเอง",
						"hindi": "वह आवाज़ भ्रम है। तुम बस थक गए हो।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아니요. 이 빛은… 무언가를 말해주려는 것 같아요.",
						"english": "No. This light... seems to be trying to tell us something.",
						"japanese": "いいえ。この光は… 何かを伝えようとしているみたい。",
						"chinese": "不。这道光... 好像想告诉我们什么。",
						"french": "Non. Cette lumière... semble vouloir nous dire quelque chose.",
						"spanish": "No. Esta luz... parece intentar decirnos algo.",
						"vietnamese": "Không. Ánh sáng này... dường như đang muốn nói điều gì đó với chúng ta.",
						"thai": "ไม่ค่ะ แสงนี้... เหมือนจะพยายามบอกอะไรบางอย่าง",
						"hindi": "नहीं। यह रोशनी... हमें कुछ बताने की कोशिश कर रही है।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "그래도… 빛은 안전한 곳으로 데려다주고 있잖아.",
						"english": "Still... the light is leading us to a safe place, isn't it?",
						"japanese": "それでも… 光は安全な場所に連れて行ってくれてるじゃないか。",
						"chinese": "即便如此... 光不是正在把我们带到安全的地方吗？",
						"french": "Pourtant... la lumière nous mène vers un endroit sûr, n'est-ce pas ?",
						"spanish": "Aún así... la luz nos está llevando a un lugar seguro, ¿no?",
						"vietnamese": "Dù sao thì... ánh sáng cũng đang dẫn chúng ta đến một nơi an toàn mà.",
						"thai": "ถึงอย่างนั้น... แสงก็กำลังพาเราไปที่ปลอดภัยไม่ใช่เหรอ?",
						"hindi": "फिर भी... रोशनी हमें एक सुरक्षित जगह पर ले जा रही है, है ना?"
					},
					"type": "speech",
					"speaker": "character_3",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "네, 그래요. 그래서 더… 이 빛을 믿어야 해요.",
						"english": "Yes, that's right. That's why... we must believe in this light even more.",
						"japanese": "はい、そうです。だからこそ…この光を信じなければなりません。",
						"chinese": "是的，没错。所以我们更要…相信这光。",
						"french": "Oui, c'est exact. C'est pourquoi… nous devons croire encore plus en cette lumière.",
						"spanish": "Sí, así es. Por eso… debemos creer aún más en esta luz.",
						"vietnamese": "Vâng, đúng vậy. Chính vì thế… chúng ta càng phải tin vào ánh sáng này.",
						"thai": "ใช่แล้วครับ/ค่ะ นั่นคือเหตุผลที่เรา… ต้องเชื่อในแสงนี้ให้มากขึ้น",
						"hindi": "हाँ, ठीक है। इसीलिए… हमें इस प्रकाश पर और अधिक विश्वास करना होगा।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 유적… 고대 바이킹의 기록과 비슷한 흔적이에요.",
						"english": "These ruins… they bear traces similar to ancient Viking records.",
						"japanese": "この遺跡…古代ヴァイキングの記録と似た痕跡があります。",
						"chinese": "这些遗迹…有与古代维京记录相似的痕迹。",
						"french": "Ces ruines… portent des traces similaires aux anciens registres vikings.",
						"spanish": "Estas ruinas… tienen rastros similares a los registros vikingos antiguos.",
						"vietnamese": "Di tích này… có dấu vết giống như ghi chép của người Viking cổ đại.",
						"thai": "ซากปรักหักพังเหล่านี้… มีร่องรอยคล้ายกับบันทึกของชาวไวกิ้งโบราณ",
						"hindi": "ये खंडहर… प्राचीन वाइकिंग अभिलेखों के समान निशान हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그게 뭔데?",
						"english": "What is it?",
						"japanese": "それは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì vậy?",
						"thai": "มันคืออะไร?",
						"hindi": "वो क्या है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "잊힌 전설… 빛과 어둠, 그리고… 희생에 대한 이야기예요.",
						"english": "A forgotten legend… a tale of light and darkness, and… sacrifice.",
						"japanese": "忘れ去られた伝説…光と闇、そして…犠牲についての物語です。",
						"chinese": "一个被遗忘的传说…关于光与暗，以及…牺牲的故事。",
						"french": "Une légende oubliée… une histoire de lumière et d'obscurité, et… de sacrifice.",
						"spanish": "Una leyenda olvidada… una historia de luz y oscuridad, y… sacrificio.",
						"vietnamese": "Một truyền thuyết bị lãng quên… câu chuyện về ánh sáng và bóng tối, và… sự hy sinh.",
						"thai": "ตำนานที่ถูกลืม… เรื่องราวของแสงและความมืดมิด และ… การเสียสละ",
						"hindi": "एक भूली हुई किंवदंती… प्रकाश और अंधकार की कहानी, और… बलिदान की।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "희생이라니? 설마 안야가…?",
						"english": "Sacrifice? You don't mean Anya…?",
						"japanese": "犠牲だと？まさかアーニャが…？",
						"chinese": "牺牲？难道安雅…？",
						"french": "Un sacrifice ? Tu ne penses pas à Anya, n'est-ce pas… ?",
						"spanish": "¿Sacrificio? ¿No querrás decir Anya…?",
						"vietnamese": "Hy sinh ư? Chẳng lẽ Anya…?",
						"thai": "เสียสละเหรอ? อย่าบอกนะว่าอันยา…? ",
						"hindi": "बलिदान? कहीं अन्या तो नहीं…?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 알 수 없어요. 기록이… 지워져 있어요.",
						"english": "I can't know more. The records… they've been erased.",
						"japanese": "これ以上は分かりません。記録が…消されています。",
						"chinese": "无法再知道了。记录…被抹去了。",
						"french": "Je ne peux pas en savoir plus. Les registres… ont été effacés.",
						"spanish": "No puedo saber más. Los registros… han sido borrados.",
						"vietnamese": "Không thể biết thêm được nữa. Ghi chép… đã bị xóa rồi.",
						"thai": "ผม/ฉันไม่สามารถรู้ได้อีกแล้ว บันทึก… ถูกลบไปแล้ว",
						"hindi": "मैं और नहीं जान सकता। रिकॉर्ड… मिटा दिए गए हैं।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 너희는 영원히 이 설원을 떠날 수 없다!",
						"english": "Fools. You shall never leave this snowfield!",
						"japanese": "愚か者ども。お前たちは永遠にこの雪原を離れることはできない！",
						"chinese": "愚蠢的东西。你们永远无法离开这片雪原！",
						"french": "Idiots. Vous ne quitterez jamais ce champ de neige !",
						"spanish": "Tontos. ¡Jamás podréis abandonar este campo de nieve!",
						"vietnamese": "Đồ ngu ngốc. Các ngươi sẽ không bao giờ có thể rời khỏi bãi tuyết này!",
						"thai": "พวกโง่เง่า! พวกเจ้าจะไม่มีวันทิ้งลานหิมะนี้ไปได้!",
						"hindi": "मूर्खों। तुम कभी इस बर्फीले मैदान को नहीं छोड़ पाओगे!"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over yet!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没……结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Vẫn... chưa kết thúc!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी तक... खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기하지 마세요… 빛은 아직 우리를 보고 있어요.",
						"english": "Don't give up... The light is still watching over us.",
						"japanese": "諦めないでください…光はまだ私たちを見ています。",
						"chinese": "别放弃……光芒还在看着我们。",
						"french": "N'abandonnez pas... La lumière nous observe toujours.",
						"spanish": "No se rindan... La luz todavía nos está observando.",
						"vietnamese": "Đừng bỏ cuộc... Ánh sáng vẫn đang dõi theo chúng ta.",
						"thai": "อย่ายอมแพ้... แสงสว่างยังคงมองดูพวกเราอยู่",
						"hindi": "हार मत मानो... रोशनी अभी भी हमें देख रही है।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "크윽… 나의 임무는… 끝나지 않았다. 이 슬픔은… 영원히…",
						"english": "Ugh... My mission... is not over. This sorrow... forever...",
						"japanese": "くっ…私の任務は…終わっていない。この悲しみは…永遠に…",
						"chinese": "咳……我的任务……还没有结束。这份悲伤……将永远……",
						"french": "Urgh... Ma mission... n'est pas terminée. Cette tristesse... pour toujours...",
						"spanish": "Ugh... Mi misión... no ha terminado. Esta tristeza... para siempre...",
						"vietnamese": "Khụ... Nhiệm vụ của ta... chưa kết thúc. Nỗi buồn này... mãi mãi...",
						"thai": "อึก... ภารกิจของข้า... ยังไม่จบสิ้น ความเศร้านี้... ตลอดไป...",
						"hindi": "उफ़... मेरा मिशन... खत्म नहीं हुआ है। यह दुख... हमेशा के लिए..."
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "해치웠어!",
						"english": "We did it!",
						"japanese": "やった！",
						"chinese": "搞定了！",
						"french": "On l'a eu !",
						"spanish": "¡Lo hicimos!",
						"vietnamese": "Xử lý xong rồi!",
						"thai": "จัดการได้แล้ว!",
						"hindi": "हमने कर दिखाया!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안야의 슬픔… 이 모든 비극의 시작이었을까요.",
						"english": "Anya's sorrow... Was this the beginning of all this tragedy?",
						"japanese": "アンヤの悲しみ…この全ての悲劇の始まりだったのでしょうか。",
						"chinese": "安雅的悲伤……这难道是所有悲剧的开端吗？",
						"french": "La tristesse d'Anya... Était-ce le début de toute cette tragédie ?",
						"spanish": "La tristeza de Anya... ¿Sería el comienzo de toda esta tragedia?",
						"vietnamese": "Nỗi buồn của Anya... Liệu đây có phải là khởi nguồn của tất cả bi kịch này?",
						"thai": "ความเศร้าของอันย่า... นี่คือจุดเริ่มต้นของโศกนาฏกรรมทั้งหมดนี้หรือเปล่า",
						"hindi": "आन्या का दुख... क्या यही इस सारी त्रासदी की शुरुआत थी?"
					},
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이제… 어떻게 되는 거지?",
						"english": "Now... what happens?",
						"japanese": "これから…どうなるの？",
						"chinese": "现在……会怎样呢？",
						"french": "Maintenant... que va-t-il se passer ?",
						"spanish": "Ahora... ¿qué pasará?",
						"vietnamese": "Bây giờ... chuyện gì sẽ xảy ra?",
						"thai": "ตอนนี้... จะเกิดอะไรขึ้นต่อ?",
						"hindi": "अब... क्या होगा?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 안야의 빛은 더욱 고요하게 빛났다. 그러나 그 빛은 여전히 알 수 없는 슬픔을 머금고 있었다.",
						"english": "Behind the fallen {random_boss}, Anya's light shone more serenely. Yet, that light still held an unknown sorrow.",
						"japanese": "倒れた{random_boss}の後ろで、アンヤの光はより静かに輝いた。しかし、その光は依然として知られざる悲しみを秘めていた。",
						"chinese": "倒下的{random_boss}身后，安雅的光芒更加宁静地闪耀着。然而，那光芒中依然蕴含着一丝莫名的悲伤。",
						"french": "Derrière le {random_boss} tombé, la lumière d'Anya brillait plus sereinement. Pourtant, cette lumière portait toujours une tristesse inconnue.",
						"spanish": "Detrás del {random_boss} caído, la luz de Anya brillaba con más serenidad. Sin embargo, esa luz aún contenía una tristeza desconocida.",
						"vietnamese": "Phía sau {random_boss} đã gục ngã, ánh sáng của Anya càng thêm tĩnh lặng. Tuy nhiên, ánh sáng đó vẫn chứa đựng một nỗi buồn khó hiểu.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง แสงของอันย่าส่องสว่างอย่างสงบยิ่งขึ้น แต่แสงนั้นยังคงแฝงไว้ด้วยความเศร้าที่ไม่รู้จบ",
						"hindi": "गिरे हुए {random_boss} के पीछे, आन्या की रोशनी और भी शांत चमक रही थी। फिर भी, उस रोशनी में अभी भी एक अज्ञात दुख समाया हुआ था।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "탐험대는 드디어 가장 깊은 얼음 동굴에 도착했다.",
						"english": "The expedition finally reached the deepest ice cave.",
						"japanese": "探検隊はついに最も深い氷の洞窟に到着した。",
						"chinese": "探险队终于抵达了最深的冰洞。",
						"french": "L'expédition a finalement atteint la grotte de glace la plus profonde.",
						"spanish": "La expedición finalmente llegó a la cueva de hielo más profunda.",
						"vietnamese": "Đoàn thám hiểm cuối cùng đã đến hang băng sâu nhất.",
						"thai": "คณะสำรวจในที่สุดก็มาถึงถ้ำน้ำแข็งที่ลึกที่สุด",
						"hindi": "अभियान अंततः सबसे गहरी बर्फ की गुफा में पहुँच गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "또 다른 희생양인가. 이 빛을 따르는 어리석은 자들.",
						"english": "Another sacrifice? Foolish ones who follow this light.",
						"japanese": "また別の犠牲者か。この光に従う愚か者たちめ。",
						"chinese": "又是另一个牺牲品吗。这些追随这光的愚蠢之人。",
						"french": "Encore un sacrifice ? Stupides que vous êtes de suivre cette lumière.",
						"spanish": "¿Otra víctima? Necios que siguen esta luz.",
						"vietnamese": "Lại một vật hy sinh khác sao. Những kẻ ngu ngốc theo ánh sáng này.",
						"thai": "เหยื่อบูชายัญอีกคนงั้นเหรอ? พวกโง่เขลาที่ตามแสงนี้มา",
						"hindi": "एक और बलिदानी? इस प्रकाश का अनुसरण करने वाले मूर्ख।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너는 누구냐!",
						"english": "Who are you!",
						"japanese": "貴様は何者だ！",
						"chinese": "你是谁！",
						"french": "Qui es-tu !",
						"spanish": "¡Quién eres!",
						"vietnamese": "Ngươi là ai!",
						"thai": "เจ้าเป็นใคร!",
						"hindi": "तुम कौन हो!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는… 잊힌 자들의 파수꾼. 이 슬픔을 지키는 존재.",
						"english": "I am… the guardian of the forgotten. The one who protects this sorrow.",
						"japanese": "私は…忘れ去られた者たちの番人。この悲しみを守る存在だ。",
						"chinese": "我是…被遗忘者的守望者。守护这份悲伤的存在。",
						"french": "Je suis… le gardien des oubliés. Celui qui protège cette tristesse.",
						"spanish": "Yo soy… el guardián de los olvidados. El que protege esta tristeza.",
						"vietnamese": "Ta là… kẻ canh gác của những người bị lãng quên. Kẻ bảo vệ nỗi buồn này.",
						"thai": "ข้าคือ… ผู้พิทักษ์ของเหล่าผู้ถูกลืม ผู้ที่ปกป้องความโศกเศร้าเหล่านี้",
						"hindi": "मैं… भूले हुए लोगों का संरक्षक हूँ। इस दुःख की रक्षा करने वाला अस्तित्व।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "슬픔…? 혹시… 그 아이의 울음소리가…?",
						"english": "Sadness...? Could that be... the child's cry...?",
						"japanese": "悲しみ…？もしかして…あの子供の泣き声が…？",
						"chinese": "悲伤……？难道说……是那个孩子的哭声……？",
						"french": "Tristesse... ? Serait-ce... le cri de l'enfant... ?",
						"spanish": "¿Tristeza...? ¿Quizás... el llanto de ese niño...?",
						"vietnamese": "Buồn bã...? Lẽ nào... tiếng khóc của đứa bé đó...?",
						"thai": "ความเศร้า...? หรือว่า... เสียงร้องไห้ของเด็กคนนั้น...?",
						"hindi": "दुःख...? कहीं... उस बच्चे का रोना तो नहीं...?"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "어리석은 질문이군. 곧 너희도 이 숲의 일부가 될 테니.",
						"english": "A foolish question. Soon, you too shall become part of this forest.",
						"japanese": "愚かな問いだ。すぐにお前たちもこの森の一部となるだろう。",
						"chinese": "愚蠢的问题。很快，你们也将成为这片森林的一部分。",
						"french": "Une question idiote. Bientôt, vous aussi ferez partie de cette forêt.",
						"spanish": "Una pregunta tonta. Pronto, vosotros también seréis parte de este bosque.",
						"vietnamese": "Một câu hỏi ngu ngốc. Chẳng mấy chốc, các ngươi cũng sẽ trở thành một phần của khu rừng này.",
						"thai": "คำถามโง่ๆ อีกไม่นานพวกเจ้าก็จะได้เป็นส่วนหนึ่งของป่านี้แล้ว",
						"hindi": "एक मूर्खतापूर्ण प्रश्न। जल्द ही, तुम भी इस जंगल का हिस्सा बन जाओगे।"
					},
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 설원, 눈보라는 밤마다 더욱 거세졌다.",
			"미지의 빛 '안야'는 유일한 희망이자, 알 수 없는 불안감을 안겨주었다.",
			"기록자 에이라는 빛 속에서 희미한 슬픔을 읽어낸다.",
			"그리고 멀리서 들려오는, 어린아이의 울음소리가 가슴을 서늘하게 한다.",
			"과연 이 빛은 우리를 인도하는 존재일까, 아니면…."
		],
		"english": [
			"An endless snowfield. Blizzards grew fiercer each night.",
			"The mysterious light 'Anya' was our only hope, yet brought an unknown unease.",
			"The Chronicler, Eira, discerned a faint sorrow within the light.",
			"And from afar, the cry of a child chilled one's heart.",
			"Is this light truly guiding us, or...?"
		],
		"japanese": [
			"果てしなく広がる雪原、吹雪は夜ごとに激しさを増した。",
			"未知の光「アーニャ」は唯一の希望であり、同時に得体の知れない不安を与えた。",
			"記録者エイラは、光の中に微かな悲しみを読み取る。",
			"そして遠くから聞こえる、幼子の泣き声が胸を凍らせる。",
			"果たしてこの光は我々を導く存在なのか、それとも…？"
		],
		"chinese": [
			"一望无际的雪原，暴风雪在夜晚愈发猛烈。",
			"未知的Anya之光是唯一的希望，也带来了莫名的不安。",
			"记录者艾拉在光中读出了微弱的悲伤。",
			"远处传来的孩子哭声令人心寒。",
			"这束光究竟是在指引我们，还是……"
		],
		"french": [
			"Une étendue neigeuse infinie. Chaque nuit, les blizzards redoublaient de violence.",
			"La lumière mystérieuse 'Anya' était notre seul espoir, mais elle nous apportait une inquiétude inconnue.",
			"Eira, la Chroniqueuse, décela une faible tristesse dans la lumière.",
			"Et de loin, le cri d'un enfant glaça le cœur.",
			"Cette lumière nous guide-t-elle vraiment, ou bien... ?"
		],
		"spanish": [
			"Una llanura nevada interminable. Cada noche, las ventiscas se hacían más feroces.",
			"La misteriosa luz 'Anya' era nuestra única esperanza, pero traía consigo una inquietud desconocida.",
			"Eira, la Cronista, percibió una tristeza tenue dentro de la luz.",
			"Y a lo lejos, el llanto de un niño heló el corazón.",
			"¿Realmente nos está guiando esta luz, o...?"
		],
		"vietnamese": [
			"Cánh đồng tuyết vô tận. Bão tuyết mỗi đêm một dữ dội.",
			"Ánh sáng bí ẩn 'Anya' là hy vọng duy nhất, nhưng cũng mang đến sự bất an khó tả.",
			"Người ghi chép Eira đọc thấy nỗi buồn mờ nhạt trong ánh sáng.",
			"Và từ xa, tiếng khóc của một đứa trẻ làm buốt giá trái tim.",
			"Phải chăng ánh sáng này thực sự dẫn lối chúng ta, hay là…?"
		],
		"thai": [
			"ทุ่งหิมะอันกว้างใหญ่ไร้ที่สิ้นสุด พายุหิมะโหมกระหน่ำรุนแรงขึ้นทุกคืน",
			"แสงลึกลับ 'อันยา' คือความหวังเดียว แต่ก็แฝงไว้ซึ่งความไม่สบายใจที่อธิบายไม่ได้",
			"นักบันทึก ไอร่า สัมผัสได้ถึงความเศร้าเลือนรางในแสงนั้น",
			"และจากที่ไกล เสียงร้องไห้ของเด็กน้อยทำให้ใจเย็นเยียบ",
			"แสงนี้กำลังนำทางเราอยู่จริงหรือ หรือว่า..."
		],
		"hindi": [
			"एक अंतहीन बर्फीला मैदान। हर रात बर्फीले तूफान और भी भयंकर होते गए।",
			"रहस्यमयी प्रकाश 'अन्या' हमारी एकमात्र आशा थी, फिर भी एक अज्ञात बेचैनी लाती थी।",
			"इरा, लेखिका, ने प्रकाश में एक हल्की उदासी महसूस की।",
			"और दूर से आती, एक बच्चे की रोने की आवाज़ ने दिल को ठंडा कर दिया।",
			"क्या यह प्रकाश वास्तव में हमारा मार्गदर्शन कर रहा है, या...?"
		]
	}
} as const;
