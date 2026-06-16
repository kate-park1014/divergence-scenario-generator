export const scenario_snowy_skalhorn_65_05 = {
	"scenario_id": "snowy_skalhorn_65_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "pool_110"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 제단이 모습을 드러냈다. 주술사와 빙설 정령이 손을 맞잡은 형상.",
						"english": "The frozen altar appeared. A shaman and an ice spirit, hands clasped.",
						"japanese": "凍てついた祭壇が現れた。呪術師と氷雪の精霊が手を取り合う姿。",
						"chinese": "冰封的祭坛显现。巫师与冰雪精灵手牵手的姿态。",
						"french": "L'autel gelé apparut. Un chaman et un esprit des glaces, les mains jointes.",
						"spanish": "El altar congelado apareció. Un chamán y un espíritu de hielo, con las manos entrelazadas.",
						"vietnamese": "Bàn thờ bị đóng băng hiện ra. Một pháp sư và linh hồn băng tuyết, tay trong tay.",
						"thai": "แท่นบูชาที่ถูกแช่แข็งปรากฏขึ้น ร่างของหมอผีและวิญญาณน้ำแข็งที่จับมือกัน",
						"hindi": "जमी हुई वेदी प्रकट हुई। एक जादूगर और एक बर्फ की आत्मा, हाथ पकड़े हुए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게… 뿔잔 아래 숨겨진 제단인가.",
						"english": "Is this... the altar hidden beneath the horn cup?",
						"japanese": "これが… 角杯の下に隠された祭壇か。",
						"chinese": "这…就是藏在角杯下的祭坛吗？",
						"french": "Est-ce… l'autel caché sous la corne ?",
						"spanish": "¿Es esto… el altar oculto bajo la copa de cuerno?",
						"vietnamese": "Đây… là bàn thờ ẩn dưới chiếc sừng ư?",
						"thai": "นี่…คือแท่นบูชาที่ซ่อนอยู่ใต้ถ้วยเขาสัตว์หรือ?",
						"hindi": "क्या यह… सींग के प्याले के नीचे छिपी वेदी है?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "흥. 거룩한 유물? 어쩐지 찜찜하군.",
						"english": "Hmph. A sacred relic? Something feels off.",
						"japanese": "フン。聖なる遺物？どうも気味が悪いな。",
						"chinese": "哼。神圣的遗物？总觉得不对劲。",
						"french": "Hmph. Une relique sacrée ? Ça ne me dit rien de bon.",
						"spanish": "Bah. ¿Una reliquia sagrada? Algo no me cuadra.",
						"vietnamese": "Hừm. Di vật thần thánh? Cứ thấy bất an thế nào ấy.",
						"thai": "หึ. โบราณวัตถุศักดิ์สิทธิ์? รู้สึกไม่ชอบมาพากลเลยแฮะ.",
						"hindi": "हुंह। एक पवित्र अवशेष? कुछ तो गड़बड़ है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "뭐가 찜찜하다는 거야, 보리스?",
						"english": "What feels off, Boris?",
						"japanese": "何が気に食わないんだ、ボリス？",
						"chinese": "什么不对劲，鲍里斯？",
						"french": "Qu'est-ce qui ne te dit rien de bon, Boris ?",
						"spanish": "¿Qué es lo que no te cuadra, Boris?",
						"vietnamese": "Cái gì bất an chứ, Boris?",
						"thai": "อะไรที่รู้สึกไม่ชอบมาพากลล่ะ, บอริส?",
						"hindi": "क्या गड़बड़ है, बोरिस?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "이 차가운 기운. 구원이라고 하기엔 너무 싸늘해.",
						"english": "This cold energy. Too chilling to be salvation.",
						"japanese": "この冷たい気配。救済というには、あまりにも冷酷だ。",
						"chinese": "这股冰冷的气息。说是救赎，却太过阴森了。",
						"french": "Cette aura froide. Trop glaçante pour être le salut.",
						"spanish": "Esta energía fría. Demasiado escalofriante para ser la salvación.",
						"vietnamese": "Khí lạnh này. Quá lạnh lẽo để gọi là cứu rỗi.",
						"thai": "พลังงานอันเยือกเย็นนี้. เย็นชาเกินกว่าจะเป็นความรอด.",
						"hindi": "यह ठंडी ऊर्जा। उद्धार के लिए बहुत ठंडी है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "제단 둘레의 계약 문자가 희미하게 빛났다.",
						"english": "The contract glyphs around the altar glowed faintly.",
						"japanese": "祭壇の周りの契約文字が、かすかに光った。",
						"chinese": "祭坛周围的契约文字，泛起了微光。",
						"french": "Les glyphes du contrat autour de l'autel brillèrent faiblement.",
						"spanish": "Los glifos del pacto alrededor del altar brillaron tenuemente.",
						"vietnamese": "Những ký tự khế ước quanh bàn thờ phát sáng mờ ảo.",
						"thai": "อักษรสัญญาที่ล้อมรอบแท่นบูชาเรืองรองจางๆ.",
						"hindi": "वेदी के चारों ओर के अनुबंध के glyphs हल्के से चमके।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "문장이 보여! 해독해볼게.",
						"english": "I see the inscription! I'll try to decipher it.",
						"japanese": "紋様が見える！解読してみるよ。",
						"chinese": "看到文字了！我来解读一下。",
						"french": "Je vois l'inscription ! Je vais essayer de la déchiffrer.",
						"spanish": "¡Veo la inscripción! Intentaré descifrarla.",
						"vietnamese": "Thấy dòng chữ rồi! Để tôi giải mã xem sao.",
						"thai": "เห็นข้อความแล้ว! จะลองถอดรหัสดูนะ.",
						"hindi": "मुझे शिलालेख दिख रहा है! मैं इसे समझने की कोशिश करूँगा।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "시간을 낭비하지 마. 겉모습에 속지 마.",
						"english": "Don't waste time. Don't be fooled by appearances.",
						"japanese": "時間を無駄にするな。見かけに騙されるな。",
						"chinese": "别浪费时间了。不要被表象迷惑。",
						"french": "Ne perds pas ton temps. Ne te fie pas aux apparences.",
						"spanish": "No pierdas el tiempo. No te dejes engañar por las apariencias.",
						"vietnamese": "Đừng lãng phí thời gian. Đừng bị vẻ ngoài lừa dối.",
						"thai": "อย่าเสียเวลา. อย่าหลงกลรูปลักษณ์ภายนอก.",
						"hindi": "समय बर्बाद मत करो। दिखावे से धोखा मत खाओ।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_2",
					"content": {
						"korean": "왜 그렇게 부정적이야, 보리스?",
						"english": "Why are you so negative, Boris?",
						"japanese": "どうしてそんなに否定的だ、ボリス？",
						"chinese": "你为什么这么消极，鲍里斯？",
						"french": "Pourquoi es-tu si négatif, Boris ?",
						"spanish": "¿Por qué eres tan negativo, Boris?",
						"vietnamese": "Sao cậu tiêu cực thế, Boris?",
						"thai": "ทำไมนายถึงมองโลกในแง่ร้ายขนาดนั้น, บอริส?",
						"hindi": "तुम इतने नकारात्मक क्यों हो, बोरिस?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "내가 본 '구원'이란 것들은 전부 지독한 대가를 치르게 했거든.",
						"english": "Everything I've seen called 'salvation' has come at a terrible price.",
						"japanese": "私がこれまで見てきた『救済』とやらは、全て酷い代償を伴ったものだったからな。",
						"chinese": "我所见过的所谓“救赎”，都付出了惨痛的代价。",
						"french": "Toutes les 'salvations' que j'ai vues ont exigé un prix terrible.",
						"spanish": "Todas las 'salvaciones' que he visto han exigido un precio terrible.",
						"vietnamese": "Tất cả những gì tôi từng thấy được gọi là 'cứu rỗi' đều phải trả giá đắt.",
						"thai": "สิ่งที่ฉันเห็นที่เรียกว่า 'ความรอด' ล้วนต้องแลกมาด้วยราคาอันแสนแพง.",
						"hindi": "मैंने 'मुक्ति' कहे जाने वाले हर चीज़ की कीमत बहुत भारी चुकाई है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "문장에 새겨진 간절한 기도가 드러났다. \"혹한으로부터 부족을 구하라.\"",
						"english": "An earnest prayer etched into the inscription was revealed: \"Save the tribe from the bitter cold.\"",
						"japanese": "紋様に刻まれた切なる祈りが明らかになった。「酷寒から部族を救え。」",
						"chinese": "铭文上刻着的恳切祈祷显露出来：「将部落从严寒中拯救出来。」",
						"french": "Une prière sincère gravée dans l'inscription fut révélée : « Sauvez la tribu du froid glacial. »",
						"spanish": "Una ferviente oración grabada en la inscripción se reveló: «Salva a la tribu del frío implacable.»",
						"vietnamese": "Một lời cầu nguyện khẩn thiết khắc trên dòng chữ hiện ra: \"Cứu bộ tộc khỏi giá rét khắc nghiệt.\"",
						"thai": "คำอธิษฐานอันจริงใจที่จารึกไว้บนข้อความถูกเปิดเผย: \"จงช่วยชนเผ่าจากความหนาวเย็นอันโหดร้าย.\"",
						"hindi": "शिलालेख में खुदी हुई एक गंभीर प्रार्थना का खुलासा हुआ: \"जनजाति को कड़वी ठंड से बचाओ।\""
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "부족을 구하려는 기도였어.",
						"english": "It was a prayer to save the tribe.",
						"japanese": "部族を救うための祈りだった。",
						"chinese": "那是拯救部落的祈祷。",
						"french": "C'était une prière pour sauver la tribu.",
						"spanish": "Fue una oración para salvar a la tribu.",
						"vietnamese": "Đó là một lời cầu nguyện để cứu bộ tộc.",
						"thai": "มันคือคำอธิษฐานเพื่อช่วยเผ่า",
						"hindi": "यह जनजाति को बचाने के लिए एक प्रार्थना थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction",
					"action": "enter",
					"speaker": "boris"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그리고? 그 응답은 뭐였지? 항상 중요한 건 그 다음이야.",
						"english": "And? What was the answer? What comes next is always important.",
						"japanese": "そして？その答えは何だった？いつも肝心なのはその次だ。",
						"chinese": "然后呢？回应是什么？接下来才是最重要的。",
						"french": "Et ? Quelle fut la réponse ? Ce qui vient après est toujours le plus important.",
						"spanish": "¿Y? ¿Cuál fue la respuesta? Lo siguiente es siempre lo importante.",
						"vietnamese": "Và? Câu trả lời là gì? Điều quan trọng luôn là những gì tiếp theo.",
						"thai": "แล้ว? คำตอบคืออะไร? สิ่งที่ตามมาต่างหากที่สำคัญเสมอ",
						"hindi": "और? जवाब क्या था? हमेशा अगला कदम ही महत्वपूर्ण होता है।"
					},
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "응답이… \"모든 것을 영원히 얼리라\"라고 적혀 있어!",
						"english": "The answer... it says, \"Freeze all things forever!\"",
						"japanese": "答えは…「全てを永遠に凍らせよ」と書いてある！",
						"chinese": "回应是……上面写着“将一切永远冻结！”",
						"french": "La réponse... elle dit : « Gèle toutes choses pour l'éternité ! »",
						"spanish": "La respuesta... ¡dice: \"Congela todas las cosas para siempre\"!",
						"vietnamese": "Câu trả lời... nó ghi là \"Đóng băng mọi thứ vĩnh viễn!\"",
						"thai": "คำตอบ... มันเขียนว่า \"จงแช่แข็งทุกสิ่งตลอดไป!\"",
						"hindi": "जवाब... उसमें लिखा है, \"सब कुछ हमेशा के लिए जमा दो!\""
					},
					"speaker": "character_3",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "봐. 내가 뭘랬어. 뒤틀린 응답이었지.",
						"english": "See? What did I tell you? It was a twisted answer.",
						"japanese": "見ろ。言った通りだ。捻じ曲がった答えだったな。",
						"chinese": "看。我怎么说的？那是个扭曲的回应。",
						"french": "Vois. Qu'est-ce que je t'avais dit ? C'était une réponse tordue.",
						"spanish": "Mira. ¿Qué te dije? Fue una respuesta retorcida.",
						"vietnamese": "Thấy chưa? Tôi đã nói gì rồi? Đó là một câu trả lời méo mó.",
						"thai": "เห็นไหม? ฉันบอกแล้วไง? มันเป็นคำตอบที่บิดเบี้ยว",
						"hindi": "देखो। मैंने क्या कहा था? यह एक विकृत जवाब था।"
					},
					"speaker": "boris",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "제단 둘레에 빼곡히 얼어붙은 사람 형상들이 보였다. 그들은 고통스러워 보였다.",
						"english": "I saw human figures frozen solid around the altar. They looked like they were in agony.",
						"japanese": "祭壇の周囲には、びっしりと凍りついた人々の姿が見えた。彼らは苦痛に満ちているようだった。",
						"chinese": "祭坛周围密密麻麻地冻结着人形。他们看起来很痛苦。",
						"french": "J'ai vu des silhouettes humaines figées autour de l'autel. Elles semblaient souffrir.",
						"spanish": "Vi figuras humanas congeladas alrededor del altar. Parecían estar sufriendo.",
						"vietnamese": "Tôi thấy những hình người đông cứng dày đặc xung quanh bàn thờ. Họ trông như đang đau đớn.",
						"thai": "ฉันเห็นร่างมนุษย์ที่แข็งเป็นน้ำแข็งอยู่รอบแท่นบูชา พวกเขาดูทรมาน",
						"hindi": "मैंने वेदी के चारों ओर जमी हुई मानव आकृतियाँ देखीं। वे पीड़ा में लग रहे थे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 부족 사람들? 전부 얼어붙어 있어!",
						"english": "These are... the tribe members? All frozen solid!",
						"japanese": "これが…部族の人々？全員凍りついている！",
						"chinese": "这些是……部落的人？全都冻住了！",
						"french": "Ce sont... les membres de la tribu ? Tous figés par la glace !",
						"spanish": "Estos son... ¿los miembros de la tribu? ¡Todos congelados!",
						"vietnamese": "Đây là... những người trong bộ tộc? Tất cả đều bị đóng băng!",
						"thai": "นี่คือ... คนในเผ่าหรือ? แข็งไปหมดแล้ว!",
						"hindi": "ये... जनजाति के लोग? सब जम गए हैं!"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "boris",
					"content": {
						"korean": "구하려다… 전부 얼려버린 건가. 비참한 결말이군.",
						"english": "Tried to save them... but froze them all instead? A miserable end.",
						"japanese": "救おうとして…皆を凍らせてしまったのか。悲惨な結末だな。",
						"chinese": "想去拯救……却把所有人都冻住了吗。真是悲惨的结局。",
						"french": "A-t-on essayé de les sauver... pour finalement les geler tous ? Une fin misérable.",
						"spanish": "Intentó salvarlos... ¿y los congeló a todos? Un final miserable.",
						"vietnamese": "Cố gắng cứu... nhưng lại đóng băng tất cả sao. Một kết cục bi thảm.",
						"thai": "พยายามจะช่วย... แต่กลับแช่แข็งพวกเขาทั้งหมดงั้นหรือ? ช่างเป็นจุดจบที่น่าอนาถ",
						"hindi": "बचाने की कोशिश की... और सबको जमा दिया? एक दुखद अंत।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 유물은… 고귀한 게 아니었어.",
						"english": "This artifact... it wasn't noble.",
						"japanese": "この遺物…高貴なものではなかった。",
						"chinese": "这件遗物……并非是高贵的。",
						"french": "Cet artefact... n'était pas noble.",
						"spanish": "Este artefacto... no era noble.",
						"vietnamese": "Cổ vật này... không hề cao quý.",
						"thai": "วัตถุโบราณนี้... ไม่ใช่ของสูงส่ง",
						"hindi": "यह कलाकृति... यह महान नहीं थी।"
					},
					"speaker": "character_4",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "boris",
					"content": {
						"korean": "금기의 계약으로 태어난 저주일 뿐이다.",
						"english": "It's merely a curse born from a forbidden pact.",
						"japanese": "禁忌の契約から生まれた呪いである。",
						"chinese": "这只是一个由禁忌契约诞生的诅咒。",
						"french": "Ce n'est qu'une malédiction née d'un pacte interdit.",
						"spanish": "Es simplemente una maldición nacida de un pacto prohibido.",
						"vietnamese": "Nó chỉ là một lời nguyền sinh ra từ một giao ước cấm kỵ.",
						"thai": "มันเป็นเพียงคำสาปที่เกิดจากสัญญาต้องห้าม",
						"hindi": "यह केवल एक वर्जित समझौते से उत्पन्न अभिशाप है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "주술사의 형상이 점점 뿔잔의 모습으로 일그러져 있었다.",
						"english": "The shaman's form was gradually distorting into the shape of a horn cup.",
						"japanese": "呪術師の姿は次第に角杯の形へと歪んでいった。",
						"chinese": "巫师的身形渐渐扭曲成了号角的模样。",
						"french": "La forme du chaman se déformait progressivement en celle d'une corne à boire.",
						"spanish": "La forma del chamán se estaba distorsionando gradualmente en la de un cuerno.",
						"vietnamese": "Hình dáng của pháp sư dần biến dạng thành hình chiếc sừng.",
						"thai": "รูปร่างของหมอผีกำลังบิดเบี้ยวกลายเป็นรูปถ้วยเขา",
						"hindi": "शमन का रूप धीरे-धीरे एक सींग के कप के आकार में विकृत हो रहा था।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "영원한 얼음… 그조차도… 너희를 막지 못하는구나.",
						"english": "Eternal ice... even that... cannot stop you.",
						"japanese": "永遠の氷...それさえも...お前たちを止められないのか。",
						"chinese": "永恒的冰霜……即便如此……也无法阻止你们。",
						"french": "La glace éternelle... même ça... ne peut vous arrêter.",
						"spanish": "El hielo eterno... incluso eso... no puede deteneos.",
						"vietnamese": "Băng vĩnh cửu... ngay cả nó... cũng không thể ngăn cản các ngươi.",
						"thai": "น้ำแข็งนิรันดร์... แม้กระทั่งสิ่งนั้น... ก็ไม่อาจหยุดพวกเจ้าได้",
						"hindi": "शाश्वत बर्फ... वह भी... तुम्हें रोक नहीं सकती।"
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "끝이다, 뿔잔! 네 거짓된 계약은 여기서 끝이야!",
						"english": "This is the end, Horned Chalice! Your false contract ends here!",
						"japanese": "終わりだ、角杯！お前の偽りの契約はここで終わりだ！",
						"chinese": "结束了，角杯！你虚假的契约到此为止！",
						"french": "C'est la fin, Calice Corne ! Ton faux contrat s'arrête ici !",
						"spanish": "¡Es el fin, Cáliz Cornudo! ¡Tu contrato falso termina aquí!",
						"vietnamese": "Kết thúc rồi, Chiếc Sừng Lễ Tế! Khế ước giả dối của ngươi kết thúc tại đây!",
						"thai": "จบแล้ว เขาสัตว์! สัญญาจอมปลอมของเจ้าจบลงที่นี่!",
						"hindi": "यह अंत है, सींग वाले प्याले! तुम्हारा झूठा अनुबंध यहीं समाप्त होता है!"
					},
					"emotion": "happy"
				},
				{
					"speaker": "boris",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "비참한 결말이군. 구원이라 착각한 광기가 빚어낸 처참한 대가…",
						"english": "A miserable end. The terrible price born of madness mistaken for salvation...",
						"japanese": "悲惨な結末だ。救済と錯覚した狂気が生み出した悲惨な代償...",
						"chinese": "真是悲惨的结局。被误以为是救赎的疯狂所酿造的凄惨代价……",
						"french": "Une fin misérable. Le prix terrible né de la folie prise pour le salut...",
						"spanish": "Un final miserable. El terrible precio nacido de la locura confundida con la salvación...",
						"vietnamese": "Một kết cục thảm hại. Cái giá kinh hoàng được tạo ra bởi sự điên rồ lầm tưởng là cứu rỗi...",
						"thai": "จุดจบที่น่าสังเวช ค่าตอบแทนอันน่าสยดสยองที่เกิดจากความบ้าคลั่งที่เข้าใจผิดว่าเป็นความรอด...",
						"hindi": "एक दयनीय अंत। मुक्ति समझी गई पागलपन से जन्मी भयानक कीमत..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔은 침묵했다. 얼어붙은 제단은 더 이상 웅얼거리지 않았다.",
						"english": "The Horned Chalice fell silent. The frozen altar no longer whispered.",
						"japanese": "角杯は沈黙した。凍てついた祭壇はもう囁かなかった。",
						"chinese": "뿔잔沉默了。冰冻的祭坛不再低语。",
						"french": "Le calice cornu se tut. L'autel gelé ne murmurait plus.",
						"spanish": "El cáliz con cuernos se silenció. El altar congelado ya no susurraba.",
						"vietnamese": "Chiếc sừng im lặng. Bàn thờ băng không còn thì thầm nữa.",
						"thai": "เขาแก้วเงียบงัน แท่นบูชาเยือกแข็งไม่กระซิบอีกต่อไป",
						"hindi": "सींग वाला प्याला शांत हो गया। जमी हुई वेदी अब फुसफुसा नहीं रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 얼음은 녹지 않았다. 그들의 싸움은, 아직 끝나지 않은 것 같았다.",
						"english": "Yet the ice remained. Their battle, it seemed, was far from over.",
						"japanese": "しかし、氷は溶けなかった。彼らの戦いは、まだ終わっていないようだった。",
						"chinese": "然而，冰没有融化。他们的战斗，似乎还没有结束。",
						"french": "Mais la glace ne fondit pas. Leur combat, semblait-il, n'était pas encore terminé.",
						"spanish": "Pero el hielo no se derritió. Su lucha, al parecer, aún no había terminado.",
						"vietnamese": "Tuy nhiên, băng không tan. Trận chiến của họ, dường như, vẫn chưa kết thúc.",
						"thai": "แต่ธารน้ำแข็งไม่ละลาย การต่อสู้ของพวกเขาดูเหมือนจะยังไม่จบสิ้น",
						"hindi": "लेकिन बर्फ़ नहीं पिघली। उनकी लड़ाई, ऐसा लगता था, अभी खत्म नहीं हुई थी।"
					}
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "탐험대는 계약의 전말을 읽어냈다. 맞잡은 손은 구원의 기도가 아니었다. 그것은 금기의 거래였다.",
						"english": "The expedition deciphered the contract's truth. The clasped hands weren't a prayer for salvation, but a forbidden bargain.",
						"japanese": "探検隊は契約の顛末を読み解いた。重ねられた手は救済の祈りではなく、禁断の取引であった。",
						"chinese": "探险队解读了契约的始末。紧握的双手并非祈求救赎，而是一场禁忌的交易。",
						"french": "L'expédition déchiffra la vérité du contrat. Les mains jointes n'étaient pas une prière de salut, mais un pacte interdit.",
						"spanish": "La expedición descifró la verdad del contrato. Las manos entrelazadas no eran una plegaria de salvación, sino un trato prohibido.",
						"vietnamese": "Đoàn thám hiểm đã đọc ra sự thật của khế ước. Những bàn tay nắm chặt không phải là lời cầu nguyện cứu rỗi, mà là một giao dịch cấm kỵ.",
						"thai": "คณะสำรวจได้ถอดรหัสความจริงของสัญญา มือที่ประสานกันไม่ใช่คำอธิษฐานเพื่อความรอด แต่เป็นการแลกเปลี่ยนต้องห้าม",
						"hindi": "अभियान दल ने अनुबंध की सच्चाई पढ़ ली थी। जुड़े हुए हाथ मुक्ति की प्रार्थना नहीं थे, बल्कि एक वर्जित सौदा था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "...나는 부족을 구원하려 했다.",
						"english": "...I sought to save my tribe.",
						"japanese": "「...私は部族を救おうとしたのだ。」",
						"chinese": "...我曾试图拯救我的部落。",
						"french": "...J'ai voulu sauver ma tribu.",
						"spanish": "...Intenté salvar a mi tribu.",
						"vietnamese": "...Ta đã muốn cứu lấy bộ tộc của mình.",
						"thai": "...ข้าพยายามจะช่วยเผ่าของข้า",
						"hindi": "...मैंने अपनी जनजाति को बचाना चाहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "뿔잔이 말한다!",
						"english": "The Horned Chalice speaks!",
						"japanese": "角杯が語る！",
						"chinese": "角杯说话了！",
						"french": "Le Calice Corne parle !",
						"spanish": "¡El Cáliz Cornudo habla!",
						"vietnamese": "Chiếc Sừng Lễ Tế nói!",
						"thai": "เขาสัตว์มีเขาพูด!",
						"hindi": "सींग वाला प्याला बोलता है!"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결국 네가 주술사였군. 네가 계약의 대가로 뿔잔이 된 거로군.",
						"english": "So you were the shaman after all. You became the Horned Chalice as payment for the contract.",
						"japanese": "結局、お前が呪術師だったのか。契約の代償として角杯になったのだな。",
						"chinese": "看来你才是萨满。你为了契约的代价，变成了角杯。",
						"french": "Alors c'était toi le chaman, après tout. Tu es devenu le Calice Corne en paiement du contrat.",
						"spanish": "Así que tú eras el chamán, después de todo. Te convertiste en el Cáliz Cornudo como pago por el contrato.",
						"vietnamese": "Cuối cùng thì ngươi chính là pháp sư. Ngươi đã biến thành Chiếc Sừng Lễ Tế để trả giá cho khế ước.",
						"thai": "ในที่สุดเจ้าก็คือหมอผี เจ้ากลายเป็นเขาสัตว์เพื่อชดใช้สัญญา",
						"hindi": "तो अंततः तुम ही शमन थे। तुम अनुबंध के बदले में सींग वाला प्याला बन गए।"
					},
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "허나 정령은 구원이 아니라, 영원한 얼음을 주었지.",
						"english": "But the spirit granted not salvation, but eternal ice.",
						"japanese": "しかし精霊は救いではなく、永遠の氷を与えた。",
						"chinese": "然而，精灵给予的不是救赎，而是永恒的冰霜。",
						"french": "Mais l'esprit n'a pas accordé le salut, mais la glace éternelle.",
						"spanish": "Pero el espíritu no concedió la salvación, sino el hielo eterno.",
						"vietnamese": "Nhưng tinh linh đã ban cho không phải là sự cứu rỗi, mà là băng vĩnh cửu.",
						"thai": "แต่ภูตผีมิได้ประทานความรอด แต่เป็นน้ำแข็งนิรันดร์",
						"hindi": "लेकिन आत्मा ने मुक्ति नहीं, बल्कि शाश्वत बर्फ दी।"
					},
					"speaker": "boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 구원을 가장한 금기라니! 용서할 수 없어!",
						"english": "A forbidden act disguised as salvation! Unforgivable!",
						"japanese": "救済を装った禁忌とは！許せない！",
						"chinese": "竟敢将禁忌伪装成救赎！不可饶恕！",
						"french": "Une abomination déguisée en salut ! Impardonnable !",
						"spanish": "¡Una abominación disfrazada de salvación! ¡Imperdonable!",
						"vietnamese": "Dám giả mạo cấm kỵ thành cứu rỗi! Không thể tha thứ!",
						"thai": "บาปต้องห้ามที่แสร้งทำเป็นความรอด! ไม่สามารถให้อภัยได้!",
						"hindi": "मुक्ति के वेश में एक वर्जित कार्य! अक्षम्य!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "boris",
					"content": {
						"korean": "이제 그 거짓된 구원의 대가를 치를 시간이다, 뿔잔.",
						"english": "Now it's time to pay the price for that false salvation, Horned Chalice.",
						"japanese": "さあ、その偽りの救済の代償を払う時だ、角杯よ。",
						"chinese": "角杯，现在是时候为那虚假的救赎付出代价了。",
						"french": "Il est temps de payer le prix de ce faux salut, Calice Corne.",
						"spanish": "Es hora de pagar el precio por esa falsa salvación, Cáliz Cornudo.",
						"vietnamese": "Bây giờ là lúc phải trả giá cho sự cứu rỗi giả dối đó, Chiếc Sừng Lễ Tế.",
						"thai": "ได้เวลาชดใช้สำหรับความรอดจอมปลอมนั้นแล้ว เขาสัตว์",
						"hindi": "अब उस झूठी मुक्ति की कीमत चुकाने का समय आ गया है, सींग वाले प्याले।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자들. 감히 금기에 도전하는가. 영원히 얼어붙어라.",
						"english": "Fools. How dare you defy the taboo. Freeze eternally.",
						"japanese": "愚か者め。よくも禁忌に挑むか。永遠に凍りつけ。",
						"chinese": "愚蠢的家伙。竟敢挑战禁忌。永远冻结吧。",
						"french": "Imbéciles. Comment osez-vous défier l'interdit. Gelez éternellement.",
						"spanish": "Necios. ¿Cómo osáis desafiar el tabú? Congelaos eternamente.",
						"vietnamese": "Những kẻ ngu ngốc. Dám thách thức điều cấm kỵ. Hãy đóng băng vĩnh viễn.",
						"thai": "เจ้าพวกโง่ เข้าร่วมต่อต้านสิ่งต้องห้ามอย่างกล้าหาญงั้นหรือ จงแข็งตายไปชั่วกาล",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई वर्जित को चुनौती देने की। हमेशा के लिए जम जाओ।"
					},
					"speaker": "boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "크윽… 아직은 포기 못 해! 다시 일어설 거야!",
						"english": "Ugh… I can't give up yet! I'll rise again!",
						"japanese": "くっ…まだ諦められない！また立ち上がる！",
						"chinese": "呃…我还不能放弃！我会再次站起来的！",
						"french": "Ugh… Je ne peux pas abandonner encore ! Je me relèverai !",
						"spanish": "Ugh… ¡Todavía no puedo rendirme! ¡Me levantaré de nuevo!",
						"vietnamese": "Khụ… Tôi chưa thể bỏ cuộc! Tôi sẽ đứng dậy lần nữa!",
						"thai": "อึก… ยังยอมแพ้ไม่ได้! ฉันจะลุกขึ้นสู้อีกครั้ง!",
						"hindi": "उफ़… मैं अभी हार नहीं मान सकता! मैं फिर से खड़ा होऊंगा!"
					},
					"emotion": "angry"
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"content": {
						"korean": "후퇴해라! 여기서 끝낼 순 없어. 다음 기회를 노려야 해!",
						"english": "Retreat! We can't end it here. We must wait for another chance!",
						"japanese": "退却だ！ここで終わらせるわけにはいかない。次の機会を狙うんだ！",
						"chinese": "撤退！不能在这里结束。我们必须等待下一次机会！",
						"french": "Retraite ! On ne peut pas finir ici. Il faut viser la prochaine opportunité !",
						"spanish": "¡Retirada! No podemos terminar aquí. ¡Debemos esperar otra oportunidad!",
						"vietnamese": "Rút lui! Chúng ta không thể kết thúc ở đây. Phải chờ đợi cơ hội tiếp theo!",
						"thai": "ถอย! เรายังจบที่นี่ไม่ได้ เราต้องรอโอกาสต่อไป!",
						"hindi": "पीछे हटो! हम इसे यहाँ खत्म नहीं कर सकते। हमें अगले अवसर का इंतजार करना होगा!"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "다시 와도 소용없다. 이 얼음은 너희를 영원히 붙잡을 테니.",
						"english": "It's no use coming back. This ice will hold you forever.",
						"japanese": "再び来ても無駄だ。この氷はお前たちを永遠に捕らえるだろう。",
						"chinese": "即使再来也无济于事。这冰将永远困住你们。",
						"french": "Inutile de revenir. Cette glace vous retiendra pour toujours.",
						"spanish": "Es inútil que volváis. Este hielo os retendrá para siempre.",
						"vietnamese": "Quay lại cũng vô ích. Băng này sẽ giam giữ các ngươi vĩnh viễn.",
						"thai": "กลับมาอีกก็เปล่าประโยชน์ น้ำแข็งนี้จะกักขังพวกเจ้าไว้ตลอดไป",
						"hindi": "वापस आने का कोई फ़ायदा नहीं। यह बर्फ़ तुम्हें हमेशा के लिए जकड़ लेगी।"
					},
					"speaker": "boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"얼음 고원에 숨겨진 제단. 그곳에 봉인된 뿔잔.",
			"혹한으로부터 부족을 구원하려던 맹세, 혹은 간절한 거래.",
			"그러나 얼음은 구원이 아니었다. 영원한 대가였을 뿐.",
			"고귀한 유물은, 거짓으로 뒤덮인 금기였다."
		],
		"english": [
			"A hidden altar in the ice plateau. The horn goblet sealed within.",
			"A vow to save the tribe from the bitter cold, or a desperate bargain.",
			"But the ice was no salvation. Only an eternal price.",
			"The noble relic was a taboo, cloaked in deceit."
		],
		"japanese": [
			"氷の高原に隠された祭壇。そこに封印された角杯。",
			"酷寒から部族を救おうとした誓い、あるいは切望された取引。",
			"しかし、氷は救いではなかった。それは永遠の代償に過ぎなかった。",
			"その高貴な遺物は、偽りに覆われた禁忌だった。"
		],
		"chinese": [
			"冰原深处隐藏的祭坛。那里封印着号角圣杯。",
			"一个从严寒中拯救部落的誓言，亦或是一场绝望的交易。",
			"然而，寒冰并非救赎。它只是永恒的代价。",
			"高贵的遗物，竟是被谎言覆盖的禁忌。"
		],
		"french": [
			"Un autel caché sur le plateau de glace. Le calice à cornes y est scellé.",
			"Un serment pour sauver la tribu du froid glacial, ou un marché désespéré.",
			"Mais la glace ne fut pas une délivrance. Seulement un prix éternel.",
			"La noble relique était un tabou, voilé de mensonges."
		],
		"spanish": [
			"Un altar oculto en la meseta helada. El cáliz cornudo sellado allí.",
			"Un juramento para salvar a la tribu del frío implacable, o un trato desesperado.",
			"Pero el hielo no fue la salvación. Solo un precio eterno.",
			"La noble reliquia era un tabú, cubierto de mentiras."
		],
		"vietnamese": [
			"Một bàn thờ ẩn mình trên cao nguyên băng. Cây sừng phong ấn nơi đó.",
			"Một lời thề cứu bộ tộc khỏi giá rét, hay một giao dịch khẩn cấp.",
			"Nhưng băng không phải là cứu rỗi. Chỉ là một cái giá vĩnh cửu.",
			"Di vật cao quý ấy, là điều cấm kỵ phủ đầy dối trá."
		],
		"thai": [
			"แท่นบูชาที่ซ่อนอยู่ในที่ราบสูงน้ำแข็ง จอกเขาที่ถูกผนึกไว้ที่นั่น",
			"คำสาบานที่จะกอบกู้เผ่าจากความหนาวเย็น หรือการต่อรองอันสิ้นหวัง",
			"แต่ผืนน้ำแข็งไม่ใช่การไถ่บาป เป็นเพียงราคาชั่วนิรันดร์",
			"วัตถุโบราณอันสูงส่งคือสิ่งต้องห้ามที่ปกคลุมด้วยความหลอกลวง"
		],
		"hindi": [
			"बर्फीले पठार में छिपा एक वेदी। वहीं सील किया हुआ सींग का प्याला।",
			"भीषण ठंड से जनजाति को बचाने की कसम, या एक हताश सौदा।",
			"लेकिन बर्फ मुक्ति नहीं थी। यह केवल एक शाश्वत कीमत थी।",
			"वह महान अवशेष एक वर्जित वस्तु था, झूठ से ढका हुआ।"
		]
	},
	"epilogue": {
		"korean": [
			"뿔잔의 웅얼거림이 멎자, 제단은 고요함을 되찾았다.",
			"얼어붙은 부족은 여전히 침묵했다. 구원은 오지 않았다.",
			"주술사의 광기가 빚어낸 영원한 얼음만이 제자리를 지켰다.",
			"이 싸움은 끝났을까? 혹은, 또 다른 시작일까.",
			"그 답은, 차가운 얼음 저 너머에 있을지도 몰랐다."
		],
		"english": [
			"As the horn goblet's murmurs ceased, the altar regained its silence.",
			"The frozen tribe remained silent. Salvation never came.",
			"Only the eternal ice, born of the shaman's madness, held its ground.",
			"Has this battle ended? Or is it another beginning?",
			"The answer might lie beyond the cold ice."
		],
		"japanese": [
			"角杯のささやきが止むと、祭壇は静寂を取り戻した。",
			"凍てついた部族は依然として沈黙していた。救いは訪れなかった。",
			"呪術師の狂気が生み出した永遠の氷だけが、その場に留まっていた。",
			"この戦いは終わったのか？それとも、新たな始まりなのか。",
			"その答えは、冷たい氷の向こうにあるのかもしれない。"
		],
		"chinese": [
			"号角圣杯的低语停歇，祭坛重归寂静。",
			"被冰封的部落依旧沉寂。救赎从未降临。",
			"唯有巫师的疯狂所铸就的永恒寒冰，依旧矗立。",
			"这场战斗结束了吗？亦或是，一个新的开始？",
			"答案，或许就在那冰冷的寒冰深处。"
		],
		"french": [
			"Lorsque les murmures du calice à cornes cessèrent, l'autel retrouva son silence.",
			"La tribu gelée resta silencieuse. Le salut ne vint jamais.",
			"Seule la glace éternelle, née de la folie du chaman, tenait bon.",
			"Cette bataille est-elle terminée ? Ou est-ce un autre début ?",
			"La réponse se trouvait peut-être au-delà de la glace froide."
		],
		"spanish": [
			"Cuando los murmullos del cáliz cornudo cesaron, el altar recuperó su silencio.",
			"La tribu congelada permaneció en silencio. La salvación nunca llegó.",
			"Solo el hielo eterno, fruto de la locura del chamán, permanecía inmutable.",
			"¿Ha terminado esta batalla? ¿O es otro comienzo?",
			"La respuesta quizás yacía más allá del frío hielo."
		],
		"vietnamese": [
			"Khi tiếng lẩm bẩm của cây sừng ngừng lại, bàn thờ tìm lại sự yên tĩnh.",
			"Bộ tộc bị đóng băng vẫn im lặng. Cứu rỗi đã không đến.",
			"Chỉ có băng vĩnh cửu, sản phẩm của sự điên rồ của pháp sư, vẫn còn đó.",
			"Trận chiến này đã kết thúc chưa? Hay là một khởi đầu khác?",
			"Câu trả lời, có lẽ nằm ngoài lớp băng lạnh giá đó."
		],
		"thai": [
			"เมื่อเสียงพึมพำของจอกเขาหยุดลง แท่นบูชาก็กลับคืนสู่ความสงบ",
			"เผ่าที่ถูกแช่แข็งยังคงเงียบงัน ความรอดไม่เคยมาถึง",
			"มีเพียงน้ำแข็งนิรันดร์ที่เกิดจากความบ้าคลั่งของหมอผีเท่านั้นที่ยังคงอยู่",
			"การต่อสู้นี้จบลงแล้วหรือ? หรือเป็นเพียงการเริ่มต้นใหม่?",
			"คำตอบอาจอยู่เหนือผืนน้ำแข็งอันเยือกเย็นนั้น"
		],
		"hindi": [
			"जैसे ही सींग के प्याले की गड़गड़ाहट बंद हुई, वेदी ने अपनी शांति वापस पा ली।",
			"जमी हुई जनजाति अभी भी खामोश थी। मुक्ति कभी नहीं आई।",
			"केवल जादूगर के पागलपन से बनी शाश्वत बर्फ ही अपनी जगह पर टिकी रही।",
			"क्या यह लड़ाई खत्म हो गई है? या यह एक और शुरुआत है?",
			"उसका जवाब, शायद ठंडी बर्फ के उस पार हो सकता है।"
		]
	}
} as const;
