export const scenario_snowy_haraldr_21_04 = {
	"scenario_id": "snowy_haraldr_21_04",
	"order": 4,
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
	"prologue": {
		"korean": [
			"끝없는 설원, 하랄드의 임시 점포 거리.",
			"얼음 간판마다 박제된 웃는 얼굴이 손님을 맞이한다.",
			"웃지 않는 자는 없다. 그럴 수도 없다.",
			"기록자 에이라가 친절의 가면 뒤 숨은 진실을 쫓는다."
		],
		"english": [
			"Endless snowfield, Harald's temporary market.",
			"Stuffed smiling faces on ice signboards greet customers.",
			"No one doesn't smile. They can't.",
			"Recorder Eira chases the truth hidden behind the mask of kindness."
		],
		"japanese": [
			"果てしない雪原、ハラルトの臨時店舗街。",
			"氷の看板ごとに、剥製のような笑顔が客を迎える。",
			"笑わない者はいない。そうすることもできない。",
			"記録者エイラは、親切の仮面の下に隠された真実を追う。"
		],
		"chinese": [
			"无尽雪原，哈拉尔德的临时商铺街。",
			"每个冰招牌上，都有一个被定格的笑脸迎接客人。",
			"无人不笑。也无法不笑。",
			"记录者艾拉追寻着隐藏在亲切面具后的真相。"
		],
		"french": [
			"Plaine enneigée infinie, le quartier commercial temporaire de Harald.",
			"Des visages souriants figés sur des panneaux de glace accueillent les clients.",
			"Personne ne sourit pas. C'est impossible.",
			"L'archiviste Eira poursuit la vérité cachée derrière le masque de la gentillesse."
		],
		"spanish": [
			"Páramo nevado interminable, la calle de tiendas provisionales de Harald.",
			"En cada letrero de hielo, rostros sonrientes disecados dan la bienvenida a los clientes.",
			"Nadie deja de sonreír. Ni pueden.",
			"La Registradora Eira persigue la verdad oculta tras la máscara de la amabilidad."
		],
		"vietnamese": [
			"Vô tận tuyết nguyên, khu phố cửa hàng tạm thời của Harald.",
			"Trên mỗi tấm biển băng, những khuôn mặt cười nhồi bông chào đón khách hàng.",
			"Không ai không cười. Cũng không thể không cười.",
			"Người ghi chép Eira truy tìm sự thật ẩn sau chiếc mặt nạ tử tế."
		],
		"thai": [
			"ทุ่งหิมะอันไร้ที่สิ้นสุด, ย่านร้านค้าชั่วคราวของฮาราลด์",
			"ป้ายน้ำแข็งแต่ละอันมีใบหน้ายิ้มที่สตัฟฟ์ไว้คอยต้อนรับลูกค้า",
			"ไม่มีใครไม่ยิ้ม ไม่มีใครทำได้",
			"ผู้บันทึกไอราตามล่าความจริงที่ซ่อนอยู่เบื้องหลังหน้ากากแห่งความเมตตา"
		],
		"hindi": [
			"अंतहीन हिमक्षेत्र, हेराल्ड की अस्थायी बाज़ार गली।",
			"बर्फ के साइनेज पर सजे मुस्कुराते चेहरे ग्राहकों का स्वागत करते हैं।",
			"कोई ऐसा नहीं जो मुस्कुराता न हो। वे ऐसा कर भी नहीं सकते।",
			"रिकॉर्डर ऐरा दयालुता के मुखौटे के पीछे छिपी सच्चाई का पीछा करती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "하랄드의 점포 거리. 환하게 웃는 간판들이 줄지어 늘어섰다.",
						"english": "Harald's market street. Brightly smiling signboards line up.",
						"japanese": "ハラルトの店舗街。明るく笑う看板がずらりと並ぶ。",
						"chinese": "哈拉尔德的商铺街。明亮笑容的招牌一字排开。",
						"french": "La rue commerçante de Harald. Des enseignes au sourire éclatant s'alignent.",
						"spanish": "La calle de tiendas de Harald. Letreros con sonrisas brillantes se alinean.",
						"vietnamese": "Phố cửa hàng của Harald. Những biển hiệu cười rạng rỡ xếp thành hàng dài.",
						"thai": "ถนนร้านค้าของฮาราลด์ ป้ายร้านที่ยิ้มแย้มเรียงรายอยู่",
						"hindi": "हेराल्ड की बाज़ार गली। चमकते मुस्कुराते साइनेज कतार में लगे हैं।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "모든 것이 완벽하게 웃고 있군요. 이곳의 규칙처럼.",
						"english": "Everything is perfectly smiling. Like the rules here.",
						"japanese": "全てが完璧に笑っていますね。ここでの規則のように。",
						"chinese": "一切都完美地笑着。如同这里的规矩一般。",
						"french": "Tout sourit parfaitement. Comme les règles d'ici.",
						"spanish": "Todo sonríe a la perfección. Como las reglas de aquí.",
						"vietnamese": "Mọi thứ đều cười một cách hoàn hảo. Giống như quy tắc ở đây vậy.",
						"thai": "ทุกสิ่งยิ้มแย้มอย่างสมบูรณ์แบบ ราวกับเป็นกฎของที่นี่",
						"hindi": "सब कुछ पूरी तरह मुस्कुरा रहा है। जैसे यहां के नियम।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "웃지 않으면 안 되는 곳인가?",
						"english": "Is this a place where you must smile?",
						"japanese": "笑わなければならない場所なのか？",
						"chinese": "这里是必须微笑的地方吗？",
						"french": "Est-ce un endroit où il faut sourire ?",
						"spanish": "¿Es este un lugar donde uno debe sonreír?",
						"vietnamese": "Đây có phải là nơi mà chúng ta phải cười không?",
						"thai": "ที่นี่เป็นที่ที่ต้องยิ้มหรือเปล่า?",
						"hindi": "क्या यह ऐसी जगह है जहां मुस्कुराना ज़रूरी है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "네. 기록에 따르면, 그들은 '불만 고객'으로 분류됩니다.",
						"english": "Yes. According to records, they are classified as 'dissatisfied customers'.",
						"japanese": "はい。記録によると、彼らは「不満な客」に分類されます。",
						"chinese": "是的。根据记录，他们被归类为“不满客户”。",
						"french": "Oui. Selon les archives, ils sont classés comme des 'clients insatisfaits'.",
						"spanish": "Sí. Según los registros, se les clasifica como 'clientes insatisfechos'.",
						"vietnamese": "Vâng. Theo ghi chép, họ được phân loại là 'khách hàng không hài lòng'.",
						"thai": "ใช่ ตามบันทึกแล้ว พวกเขาถูกจัดว่าเป็น 'ลูกค้าที่ไม่พอใจ'",
						"hindi": "हाँ। रिकॉर्ड के अनुसार, उन्हें 'असंतुष्ट ग्राहक' के रूप में वर्गीकृत किया गया है।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 미소들은… 어딘가 비어 있어요.",
						"english": "These smiles... they feel empty somehow.",
						"japanese": "この笑顔は…どこか虚ろだ。",
						"chinese": "这些笑容……总觉得有些空洞。",
						"french": "Ces sourires… sont en quelque sorte vides.",
						"spanish": "Estas sonrisas... se sienten vacías de alguna manera.",
						"vietnamese": "Những nụ cười này… trống rỗng ở đâu đó.",
						"thai": "รอยยิ้มเหล่านี้...ดูว่างเปล่าบางอย่าง",
						"hindi": "ये मुस्कानें... कहीं न कहीं खाली हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Qu'est-ce que tu racontes ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Bạn nói gì vậy?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "क्या मतलब है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "억지로 지은 가면 같달까요. 진정한 기쁨이 없어요.",
						"english": "It's like a forced mask. There's no true joy.",
						"japanese": "無理に作った仮面のようです。真の喜びがありません。",
						"chinese": "就像强行戴上的面具。没有真正的喜悦。",
						"french": "C'est comme un masque forcé. Il n'y a pas de vraie joie.",
						"spanish": "Es como una máscara forzada. No hay verdadera alegría.",
						"vietnamese": "Cứ như một chiếc mặt nạ gượng ép. Chẳng có niềm vui thật sự nào cả.",
						"thai": "เหมือนเป็นหน้ากากที่สร้างขึ้นมาโดยฝืนใจ ไม่มีซึ่งความสุขที่แท้จริง",
						"hindi": "यह एक जबरन बनाए गए मुखौटे जैसा है। सच्ची खुशी नहीं है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "…싸늘하단 말이지.",
						"english": "...It's chilling, I tell you.",
						"japanese": "…冷たい、とでも言いましょうか。",
						"chinese": "……真是冷漠啊。",
						"french": "...C'est glacial.",
						"spanish": "...Qué frío.",
						"vietnamese": "...Thật là lạnh lẽo.",
						"thai": "...มันหนาวเย็นเหลือเกิน",
						"hindi": "...यह बहुत ठंडा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 가면은… 무엇을 숨기고 있을까요.",
						"english": "What could this mask be hiding?",
						"japanese": "この仮面は…何を隠しているのでしょうか。",
						"chinese": "这个面具……隐藏着什么呢？",
						"french": "Que pourrait bien cacher ce masque ?",
						"spanish": "¿Qué podría estar escondiendo esta máscara?",
						"vietnamese": "Chiếc mặt nạ này... đang che giấu điều gì vậy?",
						"thai": "หน้ากากนี้...กำลังซ่อนอะไรอยู่กันนะ",
						"hindi": "यह मुखौटा... क्या छिपा रहा होगा?"
					}
				},
				{
					"content": {
						"korean": "숨기다니?",
						"english": "Hiding what?",
						"japanese": "隠すって？",
						"chinese": "隐藏？",
						"french": "Cacher ?",
						"spanish": "¿Esconder?",
						"vietnamese": "Che giấu ư?",
						"thai": "ซ่อนอะไร?",
						"hindi": "छिपाना?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "친절한 말 뒤에… 어딘가 굶주린 시선이 느껴져요. 기록에 없는 종류의 허기입니다.",
						"english": "Behind the kind words... I sense a hungry gaze. A kind of hunger not found in records.",
						"japanese": "親切な言葉の裏に…どこか飢えた視線を感じます。記録にない種類の飢えです。",
						"chinese": "在友善的话语背后……我感受到了一种饥渴的目光。这是一种记录中没有的饥饿。",
						"french": "Derrière les mots gentils... je ressens un regard affamé. Une sorte de faim inconnue des registres.",
						"spanish": "Detrás de las palabras amables... siento una mirada hambrienta. Una clase de hambre que no está en los registros.",
						"vietnamese": "Đằng sau những lời nói tử tế... tôi cảm nhận được một ánh mắt đói khát. Một kiểu đói khát chưa từng ghi nhận.",
						"thai": "เบื้องหลังคำพูดที่อ่อนโยน...ฉันสัมผัสได้ถึงแววตาที่หิวโหย ความหิวโหยที่ไม่เคยมีบันทึกมาก่อน",
						"hindi": "दयालु शब्दों के पीछे... मुझे एक भूखी नज़र महसूस होती है। यह एक ऐसी भूख है जिसका रिकॉर्ड में कोई जिक्र नहीं है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "말만 번지르르한 건가.",
						"english": "Is it just empty talk, then?",
						"japanese": "口先だけなのか。",
						"chinese": "只是花言巧语吗？",
						"french": "Ce ne sont que des paroles en l'air ?",
						"spanish": "¿Son solo palabras bonitas?",
						"vietnamese": "Chỉ là lời nói suông thôi sao?",
						"thai": "เป็นแค่คำพูดสวยหรูงั้นหรือ",
						"hindi": "क्या यह सिर्फ चिकनी-चुपड़ी बातें हैं?"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "저것은… '불만 고객'이라 쓰여진 얼음 우리?",
						"english": "Is that... an ice cage, labeled 'Dissatisfied Customer'?",
						"japanese": "あれは…「不満のお客様」と書かれた氷の檻？",
						"chinese": "那个是……写着“不满顾客”的冰笼吗？",
						"french": "Est-ce... une cage de glace, étiquetée \"Client Insatisfait\" ?",
						"spanish": "¿Es eso... una jaula de hielo, con la etiqueta 'Cliente Insatisfecho'?",
						"vietnamese": "Đó là... một cái lồng băng ghi 'Khách hàng không hài lòng' ư?",
						"thai": "นั่นคือ...กรงน้ำแข็งที่เขียนว่า 'ลูกค้าไม่พึงพอใจ' รึเปล่า?",
						"hindi": "क्या वह... 'असंतुष्ट ग्राहक' लिखा हुआ बर्फ का पिंजरा है?"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음 우리 속, 웃지 않은 손님의 그림자가 갇혀 있었다.",
						"english": "Inside the ice cage, the shadow of a guest who did not smile was trapped.",
						"japanese": "氷の檻の中、笑わなかった客の影が囚われていた。",
						"chinese": "冰笼里，困着一个不曾笑过的客人的影子。",
						"french": "À l'intérieur de la cage de glace, l'ombre d'un invité qui n'avait pas souri était piégée.",
						"spanish": "Dentro de la jaula de hielo, la sombra de un invitado que no sonrió estaba atrapada.",
						"vietnamese": "Trong lồng băng, bóng hình của vị khách không cười bị giam cầm.",
						"thai": "ในกรงน้ำแข็ง เงาของแขกที่ไม่ยิ้มถูกกักขังไว้",
						"hindi": "बर्फ के पिंजरे के अंदर, एक ऐसे मेहमान की परछाई कैद थी जो मुस्कुराया नहीं था।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이게… 그들의 최후인가.",
						"english": "Is this... their end?",
						"japanese": "これが…彼らの最期なのか。",
						"chinese": "这就是……他们的结局吗？",
						"french": "Est-ce... leur fin ?",
						"spanish": "¿Es este... su fin?",
						"vietnamese": "Đây có phải là... kết cục của họ không?",
						"thai": "นี่คือ...จุดจบของพวกเขาหรือ",
						"hindi": "क्या यह... उनका अंत है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "웃지 않는 자는… 쓸모가 없어. 이곳의 평화를 해칠 뿐.",
						"english": "Those who do not smile... are useless. They only harm the peace of this place.",
						"japanese": "笑わない者は…役に立たない。ここの平和を害するだけだ。",
						"chinese": "不笑的人……毫无用处。只会破坏这里的平静。",
						"french": "Ceux qui ne sourient pas... sont inutiles. Ils ne font que nuire à la paix de ce lieu.",
						"spanish": "Los que no sonríen... son inútiles. Solo dañan la paz de este lugar.",
						"vietnamese": "Những kẻ không cười... thật vô dụng. Chỉ làm tổn hại đến sự yên bình của nơi này mà thôi.",
						"thai": "ผู้ที่ไม่ยิ้ม...ไร้ประโยชน์ มีแต่จะทำลายความสงบสุขของที่นี่เท่านั้น",
						"hindi": "जो मुस्कुराते नहीं... वे बेकार हैं। वे केवल इस जगह की शांति को भंग करते हैं।"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신이 그들을 가둔 거야?",
						"english": "You trapped them?",
						"japanese": "あなたが彼らを閉じ込めたのか？",
						"chinese": "是你把他们困住的吗？",
						"french": "C'est toi qui les as emprisonnés ?",
						"spanish": "¿Tú los encerraste?",
						"vietnamese": "Ngươi đã giam giữ chúng sao?",
						"thai": "คุณขังพวกเขาไว้หรือเปล่า?",
						"hindi": "क्या तुमने उन्हें कैद किया है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "풋… 웃지 않는 자들은… 영원히 갇힐 뿐.",
						"english": "Hmph... Those who don't smile... are merely trapped forever.",
						"japanese": "ふっ…笑わない者たちは…永遠に囚われるだけだ。",
						"chinese": "哼……不笑的人……只会永远被困。",
						"french": "Pff… Ceux qui ne sourient pas… seront juste emprisonnés pour l'éternité.",
						"spanish": "Pff... Aquellos que no sonríen... simplemente quedarán atrapados para siempre.",
						"vietnamese": "Khụ… Những kẻ không cười… sẽ mãi mãi bị giam cầm.",
						"thai": "ฮึ่ม... ผู้ที่ไม่ยิ้ม... จะถูกขังตลอดไปเท่านั้น",
						"hindi": "फुस... जो नहीं मुस्कुराते... वे बस हमेशा के लिए कैद हो जाते हैं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직 끝나지 않았어! 너희의 가면을 벗길 때까지!",
						"english": "It's not over yet! Not until I strip away your masks!",
						"japanese": "まだ終わってない！お前たちの仮面を剥がすまで！",
						"chinese": "还没结束！直到我揭下你们的面具！",
						"french": "Ce n'est pas encore fini ! Pas avant que je ne vous arrache vos masques !",
						"spanish": "¡Aún no ha terminado! ¡Hasta que os arranque las máscaras!",
						"vietnamese": "Chưa kết thúc đâu! Cho đến khi lột bỏ mặt nạ của các ngươi!",
						"thai": "ยังไม่จบ! จนกว่าจะกระชากหน้ากากของพวกเจ้า!",
						"hindi": "अभी खत्म नहीं हुआ! जब तक तुम्हारे नकाब नहीं उतरते!"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "왜 웃지 않아? 이 아름다운 미소를 거부하는가?",
						"english": "Why do you not smile? Do you reject this beautiful smile?",
						"japanese": "なぜ笑わない？この美しい微笑みを拒むのか？",
						"chinese": "为何不笑？你拒绝这美丽的笑容吗？",
						"french": "Pourquoi ne souris-tu pas ? Refuses-tu ce magnifique sourire ?",
						"spanish": "¿Por qué no sonríes? ¿Rechazas esta hermosa sonrisa?",
						"vietnamese": "Sao không cười? Ngươi từ chối nụ cười xinh đẹp này sao?",
						"thai": "ทำไมไม่ยิ้ม? เจ้าปฏิเสธรอยยิ้มอันงดงามนี้หรือ?",
						"hindi": "तुम हँसते क्यों नहीं? क्या तुम इस सुंदर मुस्कान को ठुकराते हो?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "억지로 웃을 이유는 없어!",
						"english": "I won't force a smile!",
						"japanese": "無理に笑う必要はない！",
						"chinese": "没有理由强颜欢笑！",
						"french": "Il n'y a aucune raison de sourire de force !",
						"spanish": "¡No hay razón para sonreír a la fuerza!",
						"vietnamese": "Không cần phải gượng cười!",
						"thai": "ไม่มีเหตุผลที่จะต้องฝืนยิ้ม!",
						"hindi": "ज़बरदस्ती मुस्कुराने की कोई वजह नहीं!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "그는 가면을 강요하고… 허기를 채우려 합니다.",
						"english": "He forces masks... and seeks to sate his hunger.",
						"japanese": "彼は仮面を強要し…飢えを満たそうとしている。",
						"chinese": "他强加面具……并试图满足他的饥饿。",
						"french": "Il impose des masques… et cherche à assouvir sa faim.",
						"spanish": "Él impone máscaras... y busca saciar su hambre.",
						"vietnamese": "Hắn ta ép buộc đeo mặt nạ... và cố gắng thỏa mãn cơn đói của mình.",
						"thai": "เขาบังคับให้สวมหน้ากาก... และพยายามสนองความหิวของเขา",
						"hindi": "वह मुखौटे थोपता है... और अपनी भूख मिटाने की कोशिश करता है।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크윽… 결국… {random_boss}는… 진짜 미소를…",
						"english": "Ugh... In the end... {random_boss}... a true smile...",
						"japanese": "ぐっ…結局… {random_boss}は…本当の笑顔を…",
						"chinese": "呃……最终…… {random_boss}……真正的笑容……",
						"french": "Argh… Finalement… {random_boss}… un vrai sourire…",
						"spanish": "Ugh... Al final... {random_boss}... una verdadera sonrisa...",
						"vietnamese": "Ư… Cuối cùng… {random_boss}… nụ cười thật sự…",
						"thai": "อึก... สุดท้าย... {random_boss} ก็... รอยยิ้มที่แท้จริง...",
						"hindi": "उफ़… आख़िरकार… {random_boss} ने… असली मुस्कान…"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "진짜 미소는… 너희가 가둔 게 아니야.",
						"english": "A true smile... is not something you can imprison.",
						"japanese": "本当の笑顔は…お前たちが閉じ込めたものじゃない。",
						"chinese": "真正的笑容……不是你们能困住的。",
						"french": "Le vrai sourire… ce n'est pas ce que vous avez emprisonné.",
						"spanish": "La verdadera sonrisa… no es algo que hayáis encerrado.",
						"vietnamese": "Nụ cười thật sự… không phải là thứ các ngươi có thể giam cầm.",
						"thai": "รอยยิ้มที่แท้จริง... ไม่ใช่สิ่งที่พวกเจ้ากักขังได้",
						"hindi": "असली मुस्कान… तुमने कैद नहीं की।"
					}
				},
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "이곳의 친절은 가면이었다는 기록을 남겨야겠군요.",
						"english": "I must record that the kindness here was a mask.",
						"japanese": "ここの親切が仮面だったという記録を残さねばならないな。",
						"chinese": "我必须记录下，这里的友善只是伪装。",
						"french": "Je dois consigner que la gentillesse ici n'était qu'un masque.",
						"spanish": "Debo dejar constancia de que la amabilidad aquí era una máscara.",
						"vietnamese": "Tôi phải ghi lại rằng sự tử tế ở đây chỉ là một chiếc mặt nạ.",
						"thai": "ฉันต้องบันทึกว่าความเมตตาที่นี่เป็นเพียงหน้ากาก",
						"hindi": "मुझे यह दर्ज करना होगा कि यहाँ की दयालुता एक मुखौटा थी।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "진실을 기록하는 에이라의 눈빛은 흔들림이 없었다.",
						"english": "Eira's gaze, recording the truth, was unwavering.",
						"japanese": "真実を記録するエイラの眼差しは揺るがなかった。",
						"chinese": "艾拉记录真相的目光坚定不移。",
						"french": "Le regard d'Eira, enregistrant la vérité, était inébranlable.",
						"spanish": "La mirada de Eira, al registrar la verdad, era inquebrantable.",
						"vietnamese": "Ánh mắt của Eira khi ghi lại sự thật không hề dao động.",
						"thai": "สายตาของเอร่าที่บันทึกความจริงนั้นไม่หวั่นไหว",
						"hindi": "सच्चाई दर्ज करते हुए ऐरा की नज़रें अटल थीं।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
