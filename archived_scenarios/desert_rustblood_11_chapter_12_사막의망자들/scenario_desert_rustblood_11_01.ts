export const scenario_desert_rustblood_11_01 = {
	"scenario_id": "desert_rustblood_11_01",
	"order": 1,
	"act": "intro",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"모래는 모든 것을 삼킨다. 영광도, 진실도.",
			"황량한 사막, 그곳에 숨겨진 어두운 소문이 떠돈다.",
			"한때 영웅이라 불리던 자의 타락, 그리고 ‘러스트블러드’라는 이름.",
			"과연 무엇이 이 모래바람 속에 숨겨져 있는가."
		],
		"english": [
			"Sand devours all. Glory, and truth.",
			"In the desolate desert, dark rumors linger.",
			"The fall of one once called a hero, and the name 'Rustblood'.",
			"What truly lies hidden within this sandstorm?"
		],
		"japanese": [
			"砂は全てを飲み込む。栄光も、真実も。",
			"荒涼たる砂漠に、暗い噂が渦巻く。",
			"かつて英雄と呼ばれた者の堕落、そして「ラストブラッド」という名。",
			"果たして、この砂嵐の中に何が隠されているのか。"
		],
		"chinese": [
			"黄沙吞噬一切。荣耀亦是，真相亦是。",
			"荒芜的沙漠中，暗黑的传闻不胫而走。",
			"曾被称为英雄之人的堕落，以及“锈血”之名。",
			"究竟，这沙尘暴中隐藏着什么？"
		],
		"french": [
			"Le sable engloutit tout. La gloire, et la vérité.",
			"Dans le désert désolé, de sombres rumeurs circulent.",
			"La chute de celui qu'on appelait jadis un héros, et le nom de 'Rustblood'.",
			"Que se cache-t-il réellement dans cette tempête de sable ?"
		],
		"spanish": [
			"La arena lo devora todo. La gloria, y la verdad.",
			"En el desierto desolado, oscuros rumores acechan.",
			"La caída de quien una vez fue llamado héroe, y el nombre de 'Rustblood'.",
			"¿Qué se esconde realmente en esta tormenta de arena?"
		],
		"vietnamese": [
			"Cát nuốt chửng mọi thứ. Vinh quang, và sự thật.",
			"Trong sa mạc hoang tàn, những tin đồn đen tối lan truyền.",
			"Sự sa ngã của người từng được gọi là anh hùng, và cái tên 'Rustblood'.",
			"Điều gì thực sự ẩn giấu trong cơn bão cát này?"
		],
		"thai": [
			"ผืนทรายกลืนกินทุกสิ่ง ทั้งเกียรติยศและความจริง",
			"ในทะเลทรายอันรกร้าง ข่าวลือมืดมนก็แพร่สะพัด",
			"การล่มสลายของผู้ที่เคยถูกเรียกว่าวีรบุรุษ และนามว่า 'Rustblood'",
			"แท้จริงแล้วมีอะไรซ่อนอยู่ในพายุทรายนี้กันแน่"
		],
		"hindi": [
			"रेत सब कुछ निगल जाती है। महिमा भी, सत्य भी。",
			"वीरान रेगिस्तान में, भयानक अफवाहें घूम रही हैं।",
			"एक समय में नायक कहे जाने वाले का पतन, और 'रस्टब्लड' नाम।",
			"आखिर इस रेतीले तूफान में क्या छिपा है?"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "끝없는 모래 언덕이 펼쳐진 황량한 사막. 침묵이 모든 것을 감쌌다.",
						"english": "A desolate desert with endless sand dunes. Silence enveloped all.",
						"japanese": "果てしない砂丘が広がる荒涼たる砂漠。沈黙が全てを包み込んでいた。",
						"chinese": "无尽沙丘绵延的荒芜沙漠。寂静笼罩一切。",
						"french": "Un désert désolé aux dunes infinies. Le silence enveloppait tout.",
						"spanish": "Un desierto desolado con dunas interminables. El silencio lo envolvía todo.",
						"vietnamese": "Một sa mạc hoang tàn với những cồn cát bất tận. Sự im lặng bao trùm mọi thứ.",
						"thai": "ทะเลทรายอันรกร้างกับเนินทรายที่ไม่มีที่สิ้นสุด ความเงียบปกคลุมทุกสิ่ง",
						"hindi": "अंतहीन रेत के टीलों वाला एक वीरान रेगिस्तान। खामोशी ने सबको घेर लिया था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…여기가 그 사막인가.",
						"english": "...Is this the desert?",
						"japanese": "…ここが、あの砂漠か。",
						"chinese": "……这里就是那个沙漠吗？",
						"french": "...C'est ça, le désert ?",
						"spanish": "¿...Este es el desierto?",
						"vietnamese": "...Đây là sa mạc đó sao?",
						"thai": "...นี่คือทะเลทรายนั่นเหรอ?",
						"hindi": "...क्या यह वही रेगिस्तान है?"
					},
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "amir",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "어이, 신참. 더 들어가면 위험해.",
						"english": "Hey, rookie. Go further and it's dangerous.",
						"japanese": "おい、新入り。これ以上進むと危ないぞ。",
						"chinese": "喂，菜鸟。再往里走就危险了。",
						"french": "Hé, petite nouvelle. Plus loin, c'est dangereux.",
						"spanish": "Oye, novato. Si avanzas más, es peligroso.",
						"vietnamese": "Này, tân binh. Đi sâu hơn sẽ nguy hiểm đấy.",
						"thai": "เฮ้ เจ้าหนู ไปไกลกว่านี้อันตรายนะ",
						"hindi": "अरे, नौसिखिए। आगे जाओगे तो खतरा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "당신은…?",
						"english": "You are...?",
						"japanese": "あなたは…？",
						"chinese": "您是……？",
						"french": "Vous êtes...?",
						"spanish": "¿Tú eres...?",
						"vietnamese": "Anh là...?",
						"thai": "คุณคือ...?",
						"hindi": "आप कौन हैं...?"
					}
				},
				{
					"speaker": "amir",
					"emotion": "base",
					"content": {
						"korean": "아미르. 이 사막의 가이드.",
						"english": "Amir. A guide of this desert.",
						"japanese": "アミール。この砂漠の案内人だ。",
						"chinese": "阿米尔。这片沙漠的向导。",
						"french": "Amir. Un guide de ce désert.",
						"spanish": "Amir. Un guía de este desierto.",
						"vietnamese": "Amir. Người dẫn đường của sa mạc này.",
						"thai": "อาเมียร์ ผู้นำทางในทะเลทรายนี้",
						"hindi": "अमीर। इस रेगिस्तान का मार्गदर्शक।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"content": {
						"korean": "여기엔 듣지 않는 게 좋은 소문들이 떠돈다.",
						"english": "There are rumors here you'd best not hear.",
						"japanese": "ここには、聞かない方がいい噂が流れている。",
						"chinese": "这里流传着一些最好别听的传闻。",
						"french": "Ici, circulent des rumeurs qu'il vaut mieux ne pas entendre.",
						"spanish": "Aquí circulan rumores que es mejor no escuchar.",
						"vietnamese": "Ở đây có những tin đồn mà bạn không nên nghe.",
						"thai": "ที่นี่มีข่าวลือที่ไม่ควรได้ยิน",
						"hindi": "यहां ऐसी अफवाहें हैं जिन्हें न सुनना ही बेहतर है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "소문?",
						"english": "A rumor?",
						"japanese": "噂？",
						"chinese": "传闻？",
						"french": "Une rumeur ?",
						"spanish": "¿Un rumor?",
						"vietnamese": "Tin đồn?",
						"thai": "ข่าวลือ?",
						"hindi": "अफवाह?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "러스트블러드. 그 이름만 들어도 사람들이 겁에 질리지.",
						"english": "Rustblood. The name alone strikes fear.",
						"japanese": "ラストブラッド。その名を聞くだけで、人々は怯える。",
						"chinese": "锈血。光是这名字就令人不寒而栗。",
						"french": "Rouille-Sang. Ce nom seul suffit à glacer le sang.",
						"spanish": "Ox sangre. El solo nombre infunde terror.",
						"vietnamese": "Huyết Thép. Chỉ nghe tên thôi đã đủ khiến người ta khiếp sợ.",
						"thai": "สนิมเลือด. แค่ชื่อก็ทำให้คนกลัวแล้ว.",
						"hindi": "रस्टब्लड। सिर्फ नाम से ही लोग खौफ खा जाते हैं।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "amir",
					"content": {
						"korean": "깊이 파고들지 마. 후회할 거야.",
						"english": "Don't dig too deep. You'll regret it.",
						"japanese": "深入りするな。後悔するぞ。",
						"chinese": "别深究。你会后悔的。",
						"french": "Ne creuse pas trop. Tu le regretteras.",
						"spanish": "No indagues demasiado. Te arrepentirás.",
						"vietnamese": "Đừng đào sâu quá. Ngươi sẽ hối hận.",
						"thai": "อย่าขุดคุ้ยลึกไป. เจ้าจะเสียใจ.",
						"hindi": "ज्यादा गहराई में मत जाओ। पछताओगे।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "amir",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 사막은 과거의 영웅들조차 삼켰지.",
						"english": "This desert has swallowed even heroes of the past.",
						"japanese": "この砂漠は、過去の英雄たちさえも飲み込んできた。",
						"chinese": "这片沙漠吞噬过往昔的英雄。",
						"french": "Ce désert a même englouti les héros du passé.",
						"spanish": "Este desierto ha tragado incluso a héroes del pasado.",
						"vietnamese": "Sa mạc này đã nuốt chửng cả những anh hùng trong quá khứ.",
						"thai": "ทะเลทรายนี้กลืนกินแม้กระทั่งวีรบุรุษในอดีต.",
						"hindi": "इस रेगिस्तान ने अतीत के नायकों को भी निगल लिया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "영웅이 타락했다고?",
						"english": "A hero corrupted?",
						"japanese": "英雄が堕落したと？",
						"chinese": "英雄堕落了？",
						"french": "Un héros corrompu ?",
						"spanish": "¿Un héroe corrompido?",
						"vietnamese": "Anh hùng bị tha hóa sao?",
						"thai": "วีรบุรุษถูกทำให้แปดเปื้อนงั้นหรือ?",
						"hindi": "एक नायक भ्रष्ट हो गया?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "소문일 뿐이야. 하지만… 피 묻은 모래는 진실을 기억한다.",
						"english": "Just a rumor. But... the blood-stained sands remember the truth.",
						"japanese": "ただの噂さ。だが…血塗られた砂は真実を覚えている。",
						"chinese": "只是传闻。但…染血的沙子记得真相。",
						"french": "Ce n'est qu'une rumeur. Mais... le sable taché de sang se souvient de la vérité.",
						"spanish": "Solo es un rumor. Pero... las arenas manchadas de sangre recuerdan la verdad.",
						"vietnamese": "Chỉ là tin đồn thôi. Nhưng... cát nhuốm máu nhớ sự thật.",
						"thai": "แค่ข่าวลือเท่านั้น. แต่... ทรายเปื้อนเลือดจดจำความจริง.",
						"hindi": "बस एक अफवाह है। लेकिन... खून से सनी रेत सच को याद रखती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "…그래서 러스트블러드가 뭔데?",
						"english": "...So what is Rustblood?",
						"japanese": "…それで、ラストブラッドって何なんだ？",
						"chinese": "…那锈血究竟是什么？",
						"french": "...Alors, c'est quoi, Rouille-Sang ?",
						"spanish": "...Entonces, ¿qué es Ox sangre?",
						"vietnamese": "...Vậy Huyết Thép là gì?",
						"thai": "...แล้วสนิมเลือดคืออะไร?",
						"hindi": "...तो रस्टब्लड क्या है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그건… 모른 척하는 게 상책이다.",
						"english": "It's best to pretend you don't know.",
						"japanese": "それは…知らないふりをするのが一番だ。",
						"chinese": "那…还是装作不知道为好。",
						"french": "C'est... mieux de faire semblant de ne pas savoir.",
						"spanish": "Es... mejor fingir que no lo sabes.",
						"vietnamese": "Tốt nhất là... giả vờ không biết.",
						"thai": "มัน... ทำเป็นไม่รู้ไม่เห็นจะดีที่สุด.",
						"hindi": "उसके बारे में... न जानने का ढोंग करना ही बेहतर है।"
					},
					"speaker": "amir",
					"emotion": "sad"
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
					"speaker": "amir",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "모른 척할 수 없어. 뭔가 있어.",
						"english": "I can't pretend I don't know. Something's going on.",
						"japanese": "知らないふりはできない。何かある。",
						"chinese": "我不能装作不知道。有蹊跷。",
						"french": "Je ne peux pas faire semblant de ne pas savoir. Il y a quelque chose.",
						"spanish": "No puedo fingir que no lo sé. Algo está pasando.",
						"vietnamese": "Tôi không thể giả vờ không biết. Có chuyện gì đó.",
						"thai": "ฉันแกล้งไม่รู้ไม่ได้. มีบางอย่างเกิดขึ้น.",
						"hindi": "मैं अनभिज्ञ होने का नाटक नहीं कर सकता। कुछ तो है।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"content": {
						"korean": "네 눈에 진실을 보고 싶다면… 전설을 찾아봐.",
						"english": "If you want to see the truth with your own eyes... seek out the legends.",
						"japanese": "もしその目で真実を見たいのなら…伝説を探してみろ。",
						"chinese": "如果你想亲眼目睹真相…就去寻找传说吧。",
						"french": "Si tu veux voir la vérité de tes propres yeux... cherche les légendes.",
						"spanish": "Si quieres ver la verdad con tus propios ojos... busca las leyendas.",
						"vietnamese": "Nếu ngươi muốn thấy sự thật bằng chính mắt mình... hãy tìm kiếm những truyền thuyết.",
						"thai": "ถ้าเจ้าต้องการเห็นความจริงด้วยตาของตัวเอง... จงตามหาตำนาน.",
						"hindi": "अगर तुम अपनी आँखों से सच देखना चाहते हो... तो किंवदंतियों को खोजो।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "전설?",
						"english": "Legend?",
						"japanese": "伝説？",
						"chinese": "传说？",
						"french": "Légende ?",
						"spanish": "¿Leyenda?",
						"vietnamese": "Huyền thoại?",
						"thai": "ตำนาน?",
						"hindi": "किंवदंती?"
					},
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"content": {
						"korean": "잃어버린 진실을 비추는 거울. 영혼의 칼날…",
						"english": "A mirror reflecting lost truth. Blade of the soul...",
						"japanese": "失われた真実を映す鏡。魂の刃…",
						"chinese": "映照失落真相的镜子。灵魂之刃…",
						"french": "Un miroir reflétant la vérité perdue. La Lame de l'âme...",
						"spanish": "Un espejo que refleja la verdad perdida. La espada del alma...",
						"vietnamese": "Tấm gương phản chiếu sự thật đã mất. Lưỡi kiếm của linh hồn...",
						"thai": "กระจกสะท้อนความจริงที่หายไป ดาบแห่งจิตวิญญาณ...",
						"hindi": "खोए हुए सत्य को दर्शाने वाला दर्पण। आत्मा की तलवार..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그게 뭔데?",
						"english": "What is it?",
						"japanese": "それは何？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Nó là gì?",
						"thai": "มันคืออะไร?",
						"hindi": "वह क्या है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그 이상은 나도 몰라. 그저 오래된 이야기일 뿐.",
						"english": "I don't know more. Just an old tale.",
						"japanese": "それ以上は知らない。ただの古い話だ。",
						"chinese": "我不知道更多。这只是一个古老的故事。",
						"french": "Je n'en sais pas plus. Juste une vieille histoire.",
						"spanish": "No sé más. Solo es una vieja historia.",
						"vietnamese": "Tôi không biết gì hơn. Chỉ là một câu chuyện cũ thôi.",
						"thai": "ฉันไม่รู้ไปกว่านั้น มันก็แค่เรื่องเล่าเก่าแก่",
						"hindi": "मुझे इससे ज़्यादा नहीं पता। यह बस एक पुरानी कहानी है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "돌아갈 마지막 기회야.",
						"english": "This is your last chance to turn back.",
						"japanese": "戻る最後の機会だ。",
						"chinese": "这是你最后的机会了。",
						"french": "C'est ta dernière chance de faire demi-tour.",
						"spanish": "Es tu última oportunidad para regresar.",
						"vietnamese": "Đây là cơ hội cuối cùng để quay lại.",
						"thai": "นี่คือโอกาสสุดท้ายที่จะหันหลังกลับ",
						"hindi": "यह पीछे मुड़ने का तुम्हारा आखिरी मौका है।"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어.",
						"english": "I can't stop.",
						"japanese": "止められない。",
						"chinese": "我无法停止。",
						"french": "Je ne peux pas m'arrêter.",
						"spanish": "No puedo detenerme.",
						"vietnamese": "Tôi không thể dừng lại.",
						"thai": "ฉันหยุดไม่ได้",
						"hindi": "मैं रुक नहीं सकता।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"emotion": "angry",
					"content": {
						"korean": "이 길 끝에는 아무것도 없어. 오직 허무함뿐.",
						"english": "There's nothing at the end of this path. Only emptiness.",
						"japanese": "この道の終わりには何もない。ただ虚無があるだけだ。",
						"chinese": "这条路的尽头什么都没有。只有虚无。",
						"french": "Au bout de ce chemin, il n'y a rien. Juste le vide.",
						"spanish": "Al final de este camino no hay nada. Solo el vacío.",
						"vietnamese": "Cuối con đường này chẳng có gì cả. Chỉ là sự trống rỗng.",
						"thai": "สุดทางนี้ไม่มีอะไรเลย มีแต่ความว่างเปล่า",
						"hindi": "इस रास्ते के अंत में कुछ नहीं है। केवल शून्य।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "난… 내 눈으로 확인할 거야.",
						"english": "I... I'll see it with my own eyes.",
						"japanese": "俺は…この目で確かめる。",
						"chinese": "我…我要亲眼确认。",
						"french": "Je… je le verrai de mes propres yeux.",
						"spanish": "Yo... lo comprobaré con mis propios ojos.",
						"vietnamese": "Tôi... tôi sẽ tự mắt mình xem.",
						"thai": "ฉัน... จะไปดูด้วยตาตัวเอง",
						"hindi": "मैं... मैं अपनी आँखों से देखूँगा।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "…후회하지 마.",
						"english": "...Don't regret it.",
						"japanese": "…後悔するなよ。",
						"chinese": "…别后悔。",
						"french": "…Ne le regrette pas.",
						"spanish": "...No te arrepientas.",
						"vietnamese": "...Đừng hối hận.",
						"thai": "...อย่าเสียใจทีหลังล่ะ",
						"hindi": "...पछताना मत।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "amir"
				},
				{
					"type": "direction",
					"action": "exit",
					"direction": "down",
					"duration_ms": 400,
					"speaker": "amir"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아미르는 더 이상 그를 붙잡지 않았다. 정해진 길이었다.",
						"english": "Amir no longer held him back. It was a destined path.",
						"japanese": "アミールはもはや彼を引き止めなかった。それは定められた道だった。",
						"chinese": "阿米尔没有再挽留他。那是注定的道路。",
						"french": "Amir ne le retint plus. C'était un chemin inéluctable.",
						"spanish": "Amir ya no lo detuvo. Era un camino predestinado.",
						"vietnamese": "Amir không còn giữ anh ta lại nữa. Đó là con đường đã định.",
						"thai": "อามีร์ไม่ได้รั้งเขาไว้อีกต่อไป มันเป็นเส้นทางที่ถูกกำหนดไว้แล้ว",
						"hindi": "आमिर ने उसे और नहीं रोका। यह एक नियत मार्ग था।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크윽… 겨우 이 정도라니…",
						"english": "Ugh... only this much...",
						"japanese": "くっ…これしきか…。",
						"chinese": "呃……就这点程度吗……",
						"french": "Ugh... seulement ça...",
						"spanish": "Ugh... ¿solo esto...?",
						"vietnamese": "Khụ... chỉ đến vậy thôi sao...",
						"thai": "อึก... แค่นี้เองรึ...",
						"hindi": "उह... बस इतना ही..."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "하지만 너는… 아무것도 바꿀 수 없어. 그저 또 다른 {random_boss}가 될 뿐…",
						"english": "But you... can't change anything. You'll just become another {random_boss}...",
						"japanese": "だが貴様は…何も変えられない。ただ、もう一人の{random_boss}になるだけだ…。",
						"chinese": "但你……什么也改变不了。只会成为另一个{random_boss}……",
						"french": "Mais toi... tu ne peux rien changer. Tu ne seras qu'un autre {random_boss}...",
						"spanish": "Pero tú... no puedes cambiar nada. Solo serás otro {random_boss}...",
						"vietnamese": "Nhưng ngươi... không thể thay đổi bất cứ điều gì. Ngươi sẽ chỉ trở thành một {random_boss} khác...",
						"thai": "แต่เจ้า... ไม่สามารถเปลี่ยนแปลงอะไรได้ เจ้าจะเป็นได้แค่ {random_boss} อีกคนหนึ่งเท่านั้น...",
						"hindi": "पर तुम... कुछ भी नहीं बदल सकते। तुम बस एक और {random_boss} बन जाओगे..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "你是什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ngươi nói gì vậy?",
						"thai": "เจ้าหมายความว่าอะไร?",
						"hindi": "क्या मतलब है तुम्हारा?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 존재는 마지막까지 알 수 없는 말을 남겼다.",
						"english": "The fallen being left incomprehensible words until the very end.",
						"japanese": "倒れた存在は、最期まで意味不明な言葉を残した。",
						"chinese": "倒下的存在直到最后都留下了不明所以的话语。",
						"french": "L'être tombé laissa des mots incompréhensibles jusqu'à la fin.",
						"spanish": "El ser caído dejó palabras incomprensibles hasta el final.",
						"vietnamese": "Thực thể ngã xuống đã để lại những lời khó hiểu cho đến tận cùng.",
						"thai": "สิ่งที่ล้มลงได้ทิ้งถ้อยคำที่เข้าใจไม่ได้ไว้จนถึงที่สุด",
						"hindi": "गिरे हुए प्राणी ने अंत तक अनबूझ शब्द छोड़े।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모래바람 속, 더 깊은 미궁이 그들을 기다리고 있었다.",
						"english": "Amidst the sandstorm, a deeper labyrinth awaited them.",
						"japanese": "砂嵐の中、より深い迷宮が彼らを待っていた。",
						"chinese": "沙暴之中，更深的迷宫等待着他们。",
						"french": "Au cœur de la tempête de sable, un labyrinthe plus profond les attendait.",
						"spanish": "En medio de la tormenta de arena, un laberinto más profundo los esperaba.",
						"vietnamese": "Giữa bão cát, một mê cung sâu hơn đang chờ đợi họ.",
						"thai": "ท่ามกลางพายุทราย เขาวงกตที่ลึกกว่ากำลังรอพวกเขาอยู่",
						"hindi": "रेतीले तूफान के बीच, एक गहरा भूलभुलैया उनका इंतज़ार कर रहा था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "마침내, 모래폭풍의 심장부가 모습을 드러냈다.",
						"english": "Finally, the heart of the sandstorm reveals itself.",
						"japanese": "ついに、砂嵐の心臓部が姿を現した。",
						"chinese": "终于，沙尘暴的核心显现了。",
						"french": "Enfin, le cœur de la tempête de sable se révèle.",
						"spanish": "Finalmente, el corazón de la tormenta de arena se revela.",
						"vietnamese": "Cuối cùng, trái tim của bão cát đã lộ diện.",
						"thai": "ในที่สุด ใจกลางพายุทรายก็ปรากฏขึ้น",
						"hindi": "अंततः, रेतीले तूफान का हृदय प्रकट हुआ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기까지 오다니… 어리석은 인간.",
						"english": "To come this far... foolish human.",
						"japanese": "ここまで来るとは…愚かな人間め。",
						"chinese": "竟然来到这里……愚蠢的人类。",
						"french": "Oser venir jusqu'ici… stupide humain.",
						"spanish": "Llegar tan lejos... humano necio.",
						"vietnamese": "Dám đến tận đây... con người ngu ngốc.",
						"thai": "ถึงกับมาได้ขนาดนี้... มนุษย์โง่เขลา",
						"hindi": "यहाँ तक आ पहुँचे... मूर्ख मानव।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "네가 러스트블러드인가.",
						"english": "Are you Rustblood?",
						"japanese": "お前がラストブラッドか。",
						"chinese": "你是锈血吗？",
						"french": "Es-tu Rustblood ?",
						"spanish": "¿Eres Rustblood?",
						"vietnamese": "Ngươi là Rustblood sao?",
						"thai": "เจ้าคือ Rustblood หรือไม่?",
						"hindi": "क्या तुम रस्टब्लड हो?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 그저… 진실을 지키는 문지기일 뿐.",
						"english": "I am merely... the guardian of truth.",
						"japanese": "私はただ…真実を守る門番にすぎない。",
						"chinese": "我只是……守护真相的看门人。",
						"french": "Je ne suis que… le gardien de la vérité.",
						"spanish": "Solo soy... el guardián de la verdad.",
						"vietnamese": "Ta chỉ là... kẻ gác cổng bảo vệ sự thật.",
						"thai": "ข้าก็แค่... ผู้เฝ้าประตูที่ปกป้องความจริง",
						"hindi": "मैं केवल... सत्य का रखवाला हूँ।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "감히 이 모래의 비밀을 파헤치려 드는가?",
						"english": "Do you dare unearth the secrets of this sand?",
						"japanese": "敢えてこの砂の秘密を暴こうとするか？",
						"chinese": "竟敢试图揭开这片沙土的秘密？",
						"french": "Oses-tu déterrer les secrets de ce sable ?",
						"spanish": "¿Te atreves a desenterrar los secretos de esta arena?",
						"vietnamese": "Ngươi dám đào bới bí mật của cát này sao?",
						"thai": "เจ้ากล้าที่จะขุดคุ้ยความลับของทรายนี้หรือ?",
						"hindi": "क्या तुम इस रेत के रहस्यों को उजागर करने का साहस करते हो?"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 걸 밝혀낼 거야.",
						"english": "I will uncover everything.",
						"japanese": "全てを明らかにする。",
						"chinese": "我会揭示一切。",
						"french": "Je vais tout révéler.",
						"spanish": "Lo desvelaré todo.",
						"vietnamese": "Ta sẽ khám phá tất cả.",
						"thai": "ข้าจะเปิดเผยทุกสิ่ง",
						"hindi": "मैं सब कुछ उजागर करूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "풋… 고작 이 정도인가.",
						"english": "Hmph... Is that all you've got?",
						"japanese": "ふっ…この程度か。",
						"chinese": "呵……就这点本事吗？",
						"french": "Pff... C'est tout ce que tu as ?",
						"spanish": "Pff... ¿Es todo lo que tienes?",
						"vietnamese": "Hừm... Chỉ có thế thôi sao?",
						"thai": "หึ... แค่นี้เองเหรอ?",
						"hindi": "हफ़्फ़... बस इतना ही?"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 사막은 너 같은 어리석은 자들을 수없이 삼켜왔지.",
						"english": "This desert has swallowed countless fools like you.",
						"japanese": "この砂漠は、お前のような愚か者を幾度となく飲み込んできた。",
						"chinese": "这片沙漠吞噬了无数像你一样的蠢货。",
						"french": "Ce désert a englouti d'innombrables imbéciles comme toi.",
						"spanish": "Este desierto ha devorado a innumerables tontos como tú.",
						"vietnamese": "Sa mạc này đã nuốt chửng vô số kẻ ngu ngốc như ngươi.",
						"thai": "ทะเลทรายแห่งนี้ได้กลืนกินคนโง่เง่าเช่นเจ้ามานับไม่ถ้วน",
						"hindi": "इस रेगिस्तान ने तुम जैसे न जाने कितने मूर्खों को निगल लिया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "……还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "난… 진실을 찾아낼 거야.",
						"english": "I'll... find the truth.",
						"japanese": "俺は…真実を見つけ出す。",
						"chinese": "我会……找出真相。",
						"french": "Je... trouverai la vérité.",
						"spanish": "Yo... encontraré la verdad.",
						"vietnamese": "Tôi... sẽ tìm ra sự thật.",
						"thai": "ฉัน...จะค้นหาความจริง",
						"hindi": "मैं... सच ढूंढ निकालूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		}
	]
} as const;
