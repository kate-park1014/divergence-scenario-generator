export const scenario_snowy_haraldr_11_04 = {
	"scenario_id": "snowy_haraldr_11_04",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "더 깊은 설원. 공짜 시식이라며 버려진 잔들이 눈밭을 더럽혔다.",
						"english": "Deeper into the snowfield. Discarded \"free sample\" cups littered the snow.",
						"japanese": "さらに深い雪原。「無料試食」と書かれたカップが雪原を汚していた。",
						"chinese": "更深的雪原。被遗弃的“免费品尝”杯子弄脏了雪地。",
						"french": "Plus loin dans le champ de neige. Les tasses jetées, des \"échantillons gratuits\", jonchaient la neige.",
						"spanish": "Más profundo en el campo de nieve. Los vasos desechados de \"degustación gratuita\" ensuciaban la nieve.",
						"vietnamese": "Sâu hơn vào cánh đồng tuyết. Những chiếc cốc \"dùng thử miễn phí\" bị bỏ lại làm bẩn tuyết.",
						"thai": "ลึกเข้าไปในทุ่งหิมะ. ถ้วย \"ชิมฟรี\" ที่ถูกทิ้งเกลื่อนกลาดทำให้หิมะสกปรก.",
						"hindi": "बर्फीले मैदान में और गहराई तक। \"मुफ्त चखने\" के नाम पर फेंके गए कपों ने बर्फ को गंदा कर दिया।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 시럽 잔들… 너무 많아.",
						"english": "All those syrup cups... there are too many.",
						"japanese": "あのシロップのカップ…多すぎる。",
						"chinese": "那些糖浆杯……太多了。",
						"french": "Ces tasses de sirop… il y en a trop.",
						"spanish": "Esos vasos de jarabe... son demasiados.",
						"vietnamese": "Những chiếc cốc si-rô đó... quá nhiều.",
						"thai": "ถ้วยน้ำเชื่อมพวกนั้น... มากเกินไป.",
						"hindi": "वो सिरप के कप... बहुत सारे हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "이 잔들, 전부 공짜라고 불렀겠지.",
						"english": "They must have called all these cups \"free.\"",
						"japanese": "これらのカップ、全部「無料」って呼ばれてたんだろうな。",
						"chinese": "这些杯子，一定都曾被称为“免费”吧。",
						"french": "Toutes ces tasses, ils les ont sûrement appelées \"gratuites\".",
						"spanish": "Todos estos vasos, los habrán llamado \"gratis\".",
						"vietnamese": "Chắc hẳn họ đã gọi tất cả những chiếc cốc này là \"miễn phí\".",
						"thai": "ถ้วยพวกนี้คงถูกเรียกว่า \"ฟรี\" ทั้งหมดสินะ.",
						"hindi": "ये सारे कप, मुफ्त कहे गए होंगे।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何の話だ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Bạn đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					}
				},
				{
					"content": {
						"korean": "기록해야 해. 언젠가 이 잔들의 주인을 찾아야 하니까.",
						"english": "I need to record this. Someday, I'll have to find the owners of these cups.",
						"japanese": "記録しなきゃ。いつかこのカップの持ち主を見つけ出さないと。",
						"chinese": "我必须记录下来。总有一天，要找到这些杯子的主人。",
						"french": "Je dois le noter. Un jour, il faudra retrouver les propriétaires de ces tasses.",
						"spanish": "Debo registrar esto. Algún día, tendré que encontrar a los dueños de estos vasos.",
						"vietnamese": "Tôi cần ghi lại. Một ngày nào đó, tôi sẽ phải tìm chủ nhân của những chiếc cốc này.",
						"thai": "ฉันต้องบันทึกไว้. สักวันหนึ่ง ฉันจะต้องหาเจ้าของถ้วยพวกนี้ให้เจอ.",
						"hindi": "मुझे इसे रिकॉर्ड करना होगा। कभी न कभी, मुझे इन कपों के मालिकों को ढूंढना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "happy",
					"content": {
						"korean": "공짜 시식! 딱 한 입만! 달콤한 눈꽃 시럽!",
						"english": "Free sample! Just one bite! Sweet snowflake syrup!",
						"japanese": "無料試食！一口だけ！甘い雪のシロップ！",
						"chinese": "免费品尝！就一口！甜甜的雪花糖浆！",
						"french": "Dégustation gratuite ! Juste une bouchée ! Doux sirop de flocon de neige !",
						"spanish": "¡Degustación gratis! ¡Solo un bocado! ¡Dulce jarabe de copo de nieve!",
						"vietnamese": "Thử miễn phí! Chỉ một ngụm thôi! Si-rô hoa tuyết ngọt ngào!",
						"thai": "ชิมฟรี! แค่คำเดียว! น้ำเชื่อมเกล็ดหิมะแสนหวาน!",
						"hindi": "मुफ्त चखें! बस एक घूंट! मीठा स्नोफ्लेक सिरप!"
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
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "버려진 잔마다, 작은 이빨 자국이 선명해. 허겁지겁 먹은 흔적이지.",
						"english": "Every discarded cup bears clear teeth marks. Signs of a hurried meal.",
						"japanese": "捨てられたカップには、はっきりとした歯形が残っている。急いで食べた痕跡だ。",
						"chinese": "每个被丢弃的杯子上都有清晰的牙印。狼吞虎咽的痕迹。",
						"french": "Chaque tasse jetée porte des marques de dents claires. Des signes d'un repas précipité.",
						"spanish": "Cada taza desechada tiene marcas de dientes claras. Señales de una comida apresurada.",
						"vietnamese": "Mỗi chiếc cốc bị bỏ lại đều có dấu răng rõ ràng. Dấu vết của một bữa ăn vội vã.",
						"thai": "ถ้วยที่ถูกทิ้งทุกใบมีรอยฟันชัดเจน ร่องรอยของการกินอย่างรีบร้อน",
						"hindi": "हर छोड़े गए कप पर दांतों के निशान साफ हैं। जल्दबाजी में खाए गए भोजन के संकेत।"
					}
				},
				{
					"content": {
						"korean": "굶주린 사람들인가?",
						"english": "Starving people?",
						"japanese": "飢えた人々か？",
						"chinese": "饥饿的人们吗？",
						"french": "Des gens affamés ?",
						"spanish": "¿Gente hambrienta?",
						"vietnamese": "Những người đói?",
						"thai": "คนอดอยากหรือ?",
						"hindi": "भूखे लोग?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 이들은 빚을 진 거야. 공짜가 아니었던 빚.",
						"english": "No. They incurred a debt. A debt that wasn't free.",
						"japanese": "いや。彼らは借りを負った。無料ではなかった借りを。",
						"chinese": "不。他们欠下了债。一份并非免费的债。",
						"french": "Non. Ils ont contracté une dette. Une dette qui n'était pas gratuite.",
						"spanish": "No. Contrajeron una deuda. Una deuda que no fue gratis.",
						"vietnamese": "Không. Họ đã mắc nợ. Một món nợ không miễn phí.",
						"thai": "ไม่ พวกเขามีหนี้สิน หนี้ที่ไม่ฟรี",
						"hindi": "नहीं। उन्होंने कर्ज लिया था। एक ऐसा कर्ज जो मुफ्त नहीं था।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "결제는 언제 할 건가? 공짜는 없어! 세상에!",
						"english": "When will you pay? Nothing is free! Ever!",
						"japanese": "いつ支払う？無料のものなどない！絶対に！",
						"chinese": "你什么时候付款？没有什么是免费的！世界上！",
						"french": "Quand paierez-vous ? Rien n'est gratuit ! Jamais !",
						"spanish": "¿Cuándo pagarás? ¡Nada es gratis! ¡Nunca!",
						"vietnamese": "Khi nào bạn sẽ trả? Không có gì là miễn phí! Không bao giờ!",
						"thai": "เมื่อไหร่จะจ่าย? ไม่มีอะไรฟรี! ในโลกนี้!",
						"hindi": "आप कब भुगतान करेंगे? कुछ भी मुफ्त नहीं है! कभी नहीं!"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 룬… 잊힌 계약의 룬이야. 한때 모든 걸 기록하던 자들의 서명이지.",
						"english": "This rune... a rune of a forgotten pact. The signature of those who once recorded everything.",
						"japanese": "このルーン…忘れ去られた契約のルーンだ。かつて全てを記録した者たちの署名だ。",
						"chinese": "这个符文…是遗忘契约的符文。曾记录一切者的签名。",
						"french": "Cette rune... une rune d'un pacte oublié. La signature de ceux qui enregistraient tout autrefois.",
						"spanish": "Esta runa... una runa de un pacto olvidado. La firma de aquellos que una vez lo registraron todo.",
						"vietnamese": "Rune này... là rune của một khế ước bị lãng quên. Chữ ký của những người từng ghi lại mọi thứ.",
						"thai": "รูนนี้... เป็นรูนของพันธสัญญาที่ถูกลืม ลายเซ็นของผู้ที่เคยบันทึกทุกสิ่ง",
						"hindi": "यह रुन... एक भूले हुए समझौते का रुन है। उन लोगों के हस्ताक्षर जिन्होंने कभी सब कुछ दर्ज किया था।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "그게 여기 왜 있어?",
						"english": "Why is it here?",
						"japanese": "それがなぜここにある？",
						"chinese": "它为什么在这里？",
						"french": "Pourquoi est-ce ici ?",
						"spanish": "¿Por qué está aquí?",
						"vietnamese": "Sao nó lại ở đây?",
						"thai": "ทำไมมันถึงมาอยู่ที่นี่?",
						"hindi": "यह यहाँ क्यों है?"
					}
				},
				{
					"content": {
						"korean": "공짜 시식은… 그들의 혼을 담보로 한 계약이었어.",
						"english": "The free tasting... was a pact made with their souls as collateral.",
						"japanese": "無料の試食は…彼らの魂を担保にした契約だった。",
						"chinese": "免费品尝…是以他们的灵魂为抵押的契约。",
						"french": "La dégustation gratuite... était un pacte conclu avec leurs âmes en garantie.",
						"spanish": "La degustación gratuita... fue un pacto hecho con sus almas como garantía.",
						"vietnamese": "Việc nếm thử miễn phí... là một khế ước lấy linh hồn của họ làm vật thế chấp.",
						"thai": "การชิมฟรี... เป็นสัญญาที่ใช้ดวงวิญญาณของพวกเขาเป็นหลักประกัน",
						"hindi": "मुफ्त चखना... उनकी आत्माओं को गिरवी रखकर किया गया एक समझौता था।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "무슨 말이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý bạn là gì?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					}
				},
				{
					"content": {
						"korean": "대가는 지불해야 해. 반드시.",
						"english": "The price must be paid. Absolutely.",
						"japanese": "代償は支払われなければならない。必ず。",
						"chinese": "代价必须付出。绝对。",
						"french": "Le prix doit être payé. Absolument.",
						"spanish": "El precio debe ser pagado. Absolutamente.",
						"vietnamese": "Giá phải được trả. Tuyệt đối.",
						"thai": "ต้องชดใช้ราคา แน่นอน",
						"hindi": "कीमत चुकानी होगी। बिल्कुल।"
					},
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "random_boss",
					"action": "enter",
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직도 공짜라고 생각하나? 어리석군.",
						"english": "Still think it's free? Foolish.",
						"japanese": "まだ無料だと思っているのか？愚かだ。",
						"chinese": "还觉得是免费的吗？愚蠢。",
						"french": "Vous pensez toujours que c'est gratuit ? Insensé.",
						"spanish": "¿Todavía crees que es gratis? Qué ingenuo.",
						"vietnamese": "Vẫn nghĩ là miễn phí sao? Ngu ngốc.",
						"thai": "ยังคิดว่าฟรีอยู่หรือ? โง่เขลา",
						"hindi": "अभी भी मुफ्त समझते हो? मूर्खतापूर्ण।"
					}
				},
				{
					"content": {
						"korean": "네가 꾸민 짓이야?",
						"english": "Was this your doing?",
						"japanese": "お前の仕業か？",
						"chinese": "是你干的吗？",
						"french": "C'est ton œuvre ?",
						"spanish": "¿Fue obra tuya?",
						"vietnamese": "Chuyện này là do ngươi làm à?",
						"thai": "นี่เป็นฝีมือแกงั้นเหรอ?",
						"hindi": "यह तुम्हारी करतूत है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "난 그저… 빚을 받는 자.",
						"english": "I am merely... a debt collector.",
						"japanese": "私はただ… 借金を取り立てる者。",
						"chinese": "我只是… 收债之人。",
						"french": "Je ne suis que... un collecteur de dettes.",
						"spanish": "Solo soy... quien cobra deudas.",
						"vietnamese": "Ta chỉ là… kẻ đòi nợ.",
						"thai": "ข้าเพียงแค่... ผู้ทวงหนี้",
						"hindi": "मैं बस… एक कर्ज वसूलने वाला हूँ।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"direction": "up",
					"speaker": "random_boss",
					"duration_ms": 400,
					"type": "direction",
					"action": "exit"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "차가운 바람이 얼어붙은 설원을 휩쓸었다. 모든 것이 얼음 속에 갇혀 있었다.",
						"english": "A cold wind swept across the frozen snowfield. Everything was trapped in ice.",
						"japanese": "冷たい風が凍てついた雪原を吹き荒れた。すべてが氷の中に閉じ込められていた。",
						"chinese": "凛冽的寒风席卷了冰封的雪原。一切都被困在冰中。",
						"french": "Un vent glacial balayait l'étendue enneigée et gelée. Tout était prisonnier de la glace.",
						"spanish": "Un viento helado azotaba el campo nevado y congelado. Todo estaba atrapado en el hielo.",
						"vietnamese": "Gió lạnh thổi qua cánh đồng tuyết đóng băng. Mọi thứ bị kẹt trong băng.",
						"thai": "ลมหนาวพัดโหมกระหน่ำทุ่งหิมะที่เยือกแข็ง ทุกสิ่งถูกกักขังอยู่ในน้ำแข็ง",
						"hindi": "एक सर्द हवा जमी हुई बर्फीली मैदान पर बह गई। सब कुछ बर्फ में फंसा हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "찾았어… 이것 봐.",
						"english": "Found it... Look.",
						"japanese": "見つけた… これを見て。",
						"chinese": "找到了… 看这个。",
						"french": "Trouvé... Regarde.",
						"spanish": "Lo encontré... Mira.",
						"vietnamese": "Tìm thấy rồi… Nhìn này.",
						"thai": "เจอแล้ว... ดูนี่สิ",
						"hindi": "मिल गया… देखो।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 얼음판은… 뭐야?",
						"english": "This ice slab... what is it?",
						"japanese": "この氷板は… 何だ？",
						"chinese": "这块冰板… 是什么？",
						"french": "Cette dalle de glace... qu'est-ce que c'est ?",
						"spanish": "Esta losa de hielo... ¿qué es?",
						"vietnamese": "Tảng băng này… là gì?",
						"thai": "แผ่นน้ำแข็งนี่... คืออะไร?",
						"hindi": "यह बर्फीली पट्टी… क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "고객 명단. 돌아오지 못한 자들의 이름이 얼어붙어 있어.",
						"english": "A client list. Names of those who never returned, frozen here.",
						"japanese": "顧客名簿。戻れなかった者たちの名前が凍り付いている。",
						"chinese": "客户名单。那些未能归来者的名字被冰封在此。",
						"french": "Une liste de clients. Les noms de ceux qui ne sont jamais revenus, gelés ici.",
						"spanish": "Una lista de clientes. Nombres de aquellos que nunca regresaron, congelados aquí.",
						"vietnamese": "Danh sách khách hàng. Tên của những người không bao giờ trở lại, bị đóng băng ở đây.",
						"thai": "รายชื่อลูกค้า ชื่อของผู้ที่ไม่เคยกลับมาถูกแช่แข็งอยู่ที่นี่",
						"hindi": "एक ग्राहक सूची। उन लोगों के नाम जो कभी वापस नहीं आए, यहाँ जमे हुए हैं।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad",
					"content": {
						"korean": "수많은 이름… 누구도 이 빚에서 벗어나지 못했어.",
						"english": "So many names... No one escaped this debt.",
						"japanese": "数え切れない名前… 誰もこの借金から逃れられなかった。",
						"chinese": "无数名字… 没有人能逃脱这笔债务。",
						"french": "Tant de noms... Personne n'a échappé à cette dette.",
						"spanish": "Tantos nombres... Nadie escapó de esta deuda.",
						"vietnamese": "Vô số cái tên… Không ai thoát khỏi món nợ này.",
						"thai": "ชื่อมากมาย... ไม่มีใครหนีพ้นหนี้ก้อนนี้ไปได้",
						"hindi": "असंख्य नाम… कोई भी इस कर्ज से नहीं बच पाया।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…공짜가 아니었어. 단 한 입도.",
						"english": "...It wasn't free. Not even a single bite.",
						"japanese": "…ただではなかった。一口たりとも。",
						"chinese": "…不是免费的。连一口都不是。",
						"french": "...Ce n'était pas gratuit. Pas une seule bouchée.",
						"spanish": "...No fue gratis. Ni un solo bocado.",
						"vietnamese": "…Không phải là miễn phí. Dù chỉ một miếng.",
						"thai": "...มันไม่ฟรี แม้แต่คำเดียว",
						"hindi": "…यह मुफ्त नहीं था। एक कौर भी नहीं।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "그럼 저 잔들의 주인은…?",
						"english": "Then, the owners of those glasses...?",
						"japanese": "では、あの杯の持ち主は…？",
						"chinese": "那么，那些酒杯的主人是…？",
						"french": "Alors, les propriétaires de ces verres... ?",
						"spanish": "Entonces, los dueños de esos vasos...?",
						"vietnamese": "Vậy, chủ nhân của những chiếc cốc đó…?",
						"thai": "ถ้าอย่างนั้น เจ้าของแก้วพวกนั้นล่ะ...?",
						"hindi": "तो, उन गिलासों के मालिक…?"
					}
				},
				{
					"content": {
						"korean": "이제 네 차례다. 명단에 오를 차례.",
						"english": "Now it's your turn. Time to join the list.",
						"japanese": "今度は君の番だ。名簿に載る番だ。",
						"chinese": "现在轮到你了。该上名单了。",
						"french": "Maintenant c'est ton tour. Ton tour de figurer sur la liste.",
						"spanish": "Ahora es tu turno. Tu turno de unirte a la lista.",
						"vietnamese": "Bây giờ đến lượt ngươi. Đến lượt ngươi lên danh sách.",
						"thai": "ตอนนี้ถึงตาแกแล้ว ถึงตาที่จะมีชื่ออยู่ในรายชื่อ",
						"hindi": "अब तुम्हारी बारी है। सूची में शामिल होने की बारी।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "random_boss",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						5
					]
				},
				{
					"content": {
						"korean": "명단에 추가할 새 얼굴이 왔군. 환영한다.",
						"english": "A new face for the list. Welcome.",
						"japanese": "名簿に加える新しい顔が来たな。歓迎する。",
						"chinese": "名册上又添新面孔了。欢迎。",
						"french": "Un nouveau visage pour la liste. Bienvenue.",
						"spanish": "Una nueva cara para la lista. Bienvenido.",
						"vietnamese": "Một gương mặt mới cho danh sách. Chào mừng.",
						"thai": "มีหน้าใหม่มาเพิ่มในบัญชี ยินดีต้อนรับ",
						"hindi": "सूची में एक नया चेहरा आ गया है। स्वागत है।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "공짜 시식의 대가가 이거였어?",
						"english": "Was this the price for a free taste?",
						"japanese": "無料試食の代償がこれだったのか？",
						"chinese": "这就是免费试吃的代价吗？",
						"french": "C'était le prix pour une dégustation gratuite ?",
						"spanish": "¿Era este el precio por una prueba gratuita?",
						"vietnamese": "Đây là cái giá cho việc nếm thử miễn phí à?",
						"thai": "นี่คือราคาของการชิมฟรีงั้นรึ?",
						"hindi": "क्या मुफ्त चखने की कीमत यही थी?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "모든 것엔 대가가 있지. 특히 달콤한 유혹엔 더더욱.",
						"english": "Everything has a price. Especially sweet temptations.",
						"japanese": "全てには代償がある。特に甘い誘惑にはな。",
						"chinese": "一切都有代价。尤其是甜蜜的诱惑。",
						"french": "Tout a un prix. Surtout les douces tentations.",
						"spanish": "Todo tiene un precio. Especialmente las dulces tentaciones.",
						"vietnamese": "Mọi thứ đều có cái giá của nó. Đặc biệt là những cám dỗ ngọt ngào.",
						"thai": "ทุกสิ่งย่อมมีราคา โดยเฉพาะสิ่งล่อใจอันหอมหวาน",
						"hindi": "हर चीज़ की एक कीमत होती है। खासकर मीठे प्रलोभनों की।"
					}
				},
				{
					"content": {
						"korean": "우린 네 명단에 오르지 않아.",
						"english": "We won't be on your list.",
						"japanese": "私たちはあなたの名簿には載らない。",
						"chinese": "我们不会出现在你的名单上。",
						"french": "Nous ne serons pas sur ta liste.",
						"spanish": "No estaremos en tu lista.",
						"vietnamese": "Chúng tôi sẽ không có trong danh sách của ngươi.",
						"thai": "พวกเราจะไม่อยู่ในบัญชีของเจ้า",
						"hindi": "हम तुम्हारी सूची में नहीं होंगे।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이미 늦었다. 이 차가운 설원에 영원히 기록될 이름들이다!",
						"english": "Too late. These names will be eternally etched in this cold snowfield!",
						"japanese": "もう遅い。この冷たい雪原に永遠に刻まれる名前だ！",
						"chinese": "太迟了。这些名字将永远铭刻在这片冰冷的雪原上！",
						"french": "Trop tard. Ces noms seront gravés à jamais dans cette étendue de neige froide !",
						"spanish": "Demasiado tarde. ¡Estos nombres quedarán grabados para siempre en este frío campo de nieve!",
						"vietnamese": "Quá muộn rồi. Những cái tên này sẽ được khắc sâu vĩnh viễn trên cánh đồng tuyết lạnh giá này!",
						"thai": "สายเกินไปแล้ว ชื่อเหล่านี้จะถูกจารึกไว้ในทุ่งหิมะอันหนาวเหน็บนี้ตลอดไป!",
						"hindi": "बहुत देर हो चुकी है। ये नाम इस ठंडी बर्फीली भूमि में हमेशा के लिए अंकित हो जाएंगे!"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "결제를 거부했으니… 명단에 오르거라. 영원히!",
						"english": "You refused payment... now join the list. Forever!",
						"japanese": "支払いを拒否したな…ならば名簿に加われ。永遠に！",
						"chinese": "既然拒绝支付……那就加入名单吧。永远！",
						"french": "Vous avez refusé le paiement... Rejoignez la liste. Pour toujours !",
						"spanish": "Rechazaste el pago... ¡ahora únete a la lista. Para siempre!",
						"vietnamese": "Ngươi đã từ chối thanh toán... Vậy thì hãy gia nhập danh sách. Mãi mãi!",
						"thai": "เจ้าปฏิเสธการชำระเงิน… งั้นก็เข้าร่วมรายชื่อซะ! ตลอดไป!",
						"hindi": "तुमने भुगतान से इनकार किया है... तो सूची में शामिल हो जाओ। हमेशा के लिए!"
					}
				},
				{
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没……结束呢。",
						"french": "Ce n'est pas encore fini...",
						"spanish": "Todavía... no ha terminado.",
						"vietnamese": "Chưa... kết thúc đâu.",
						"thai": "ยัง… ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 차가운 빚은… 갚아야만 한다!",
						"english": "This cold debt... must be repaid!",
						"japanese": "この冷たい借りは…返さねばならない！",
						"chinese": "这份冰冷的债务……必须偿还！",
						"french": "Cette dette froide... doit être remboursée !",
						"spanish": "¡Esta fría deuda... debe ser pagada!",
						"vietnamese": "Khoản nợ lạnh lẽo này... phải được trả!",
						"thai": "หนี้อันเย็นชานี้… ต้องชดใช้!",
						"hindi": "यह ठंडा कर्ज… चुकाना ही होगा!"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "거대한 얼음 보스가 산산조각 났다. 그러나 한기는 가시지 않았다.",
						"english": "The giant ice boss shattered. But the chill lingered.",
						"japanese": "巨大な氷のボスは砕け散った。しかし、寒気は去らなかった。",
						"chinese": "巨大的冰魔头粉碎了。但寒意并未消散。",
						"french": "L'énorme boss de glace a été brisé. Mais le froid persistait.",
						"spanish": "El jefe de hielo gigante se hizo añicos. Pero el frío permaneció.",
						"vietnamese": "Trùm băng khổng lồ đã vỡ tan. Nhưng cái lạnh vẫn còn đó.",
						"thai": "บอสน้ำแข็งยักษ์แตกเป็นเสี่ยงๆ แต่ความเยือกเย็นยังคงอยู่",
						"hindi": "विशाल बर्फीला बॉस टूट गया। लेकिन ठंडक बनी रही।"
					}
				},
				{
					"content": {
						"korean": "…기록될 것이다. 또 다른 이름이….",
						"english": "...It will be recorded. Another name...",
						"japanese": "…記録されるだろう。また一つの名前が…。",
						"chinese": "……将被记录。又一个名字……",
						"french": "...Ce sera enregistré. Un autre nom...",
						"spanish": "...Será registrado. Otro nombre...",
						"vietnamese": "...Nó sẽ được ghi lại. Một cái tên khác...",
						"thai": "...จะถูกบันทึกไว้ อีกชื่อหนึ่ง...",
						"hindi": "...यह दर्ज हो जाएगा। एक और नाम..."
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "끝인가?",
						"english": "Is this the end?",
						"japanese": "終わりなのか？",
						"chinese": "结束了吗？",
						"french": "Est-ce la fin ?",
						"spanish": "¿Es este el final?",
						"vietnamese": "Đây là kết thúc sao?",
						"thai": "นี่คือจุดจบแล้วหรือ?",
						"hindi": "क्या यह अंत है?"
					}
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "아니. 이 얼음판은 아직 온전해. 아직 지워지지 않은 이름들이 남아 있어.",
						"english": "No. This ice sheet is still intact. There are still names not erased.",
						"japanese": "いや。この氷の盤はまだ無傷だ。まだ消されていない名前が残っている。",
						"chinese": "不。这片冰原依然完好无损。仍有未被抹去的名字。",
						"french": "Non. Cette plaque de glace est encore intacte. Il reste des noms non effacés.",
						"spanish": "No. Esta capa de hielo sigue intacta. Todavía quedan nombres sin borrar.",
						"vietnamese": "Không. Tảng băng này vẫn còn nguyên vẹn. Vẫn còn những cái tên chưa bị xóa.",
						"thai": "ไม่ แผ่นน้ำแข็งนี้ยังคงอยู่ ชื่อที่ยังไม่ถูกลบยังคงเหลืออยู่",
						"hindi": "नहीं। यह बर्फ की चादर अभी भी बरकरार है। अभी भी ऐसे नाम हैं जो मिटाए नहीं गए।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "명단은… 계속될 거야. 더 깊은 곳에서.",
						"english": "The list... will continue. In deeper places.",
						"japanese": "名簿は…続く。さらに深い場所で。",
						"chinese": "名单……将继续。在更深的地方。",
						"french": "La liste... continuera. Dans des lieux plus profonds.",
						"spanish": "La lista... continuará. En lugares más profundos.",
						"vietnamese": "Danh sách... sẽ tiếp tục. Ở những nơi sâu hơn.",
						"thai": "บัญชีรายชื่อ...จะดำเนินต่อไป ในที่ที่ลึกกว่า",
						"hindi": "सूची... जारी रहेगी। गहरी जगहों में।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "차갑게 기록된 이름들. 아직 끝나지 않은 빚의 굴레가 탐험대를 기다렸다.",
						"english": "Names coldly recorded. A cycle of debt, still unfinished, awaited the expedition.",
						"japanese": "冷たく記された名簿。まだ終わらぬ負債の輪廻が探検隊を待ち受けていた。",
						"chinese": "冰冷记录的名字。尚未结束的债务循环等待着探险队。",
						"french": "Des noms froidement enregistrés. Un cycle de dettes inachevé attendait l'expédition.",
						"spanish": "Nombres fríamente registrados. Un ciclo de deudas aún sin terminar esperaba a la expedición.",
						"vietnamese": "Những cái tên được ghi lại lạnh lùng. Một vòng nợ chưa dứt vẫn chờ đợi đoàn thám hiểm.",
						"thai": "ชื่อที่ถูกบันทึกไว้อย่างเย็นชา วงจรหนี้ที่ยังไม่สิ้นสุดกำลังรอคณะสำรวจอยู่",
						"hindi": "ठंडे बस्ते में दर्ज नाम। कर्ज का एक ऐसा चक्र जो अभी खत्म नहीं हुआ था, अभियान दल का इंतजार कर रहा था।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"더 깊은 설원. 곳곳에 버려진 색색깔 시럽 잔이 눈밭을 더럽혔다.",
			"공짜는 빚이 된다. 누군가 그렇게 말했다.",
			"얼음판에 새겨진 이름들. 돌아오지 못한 자들의 명단이었다.",
			"차가운 진실이 탐험대의 목을 죄어왔다."
		],
		"english": [
			"Deeper into the snowfield. Discarded colorful syrup cups littered the snow.",
			"Nothing is truly free. Someone once said that.",
			"Names carved on the ice. A roster of those who never returned.",
			"The cold truth choked the expedition team."
		],
		"japanese": [
			"さらに深い雪原。色とりどりのシロップのカップが雪原を汚していた。",
			"ただより高いものはない。誰かがそう言った。",
			"氷盤に刻まれた名前。戻れなかった者たちの名簿だった。",
			"冷たい真実が探検隊の首を締め付けた。"
		],
		"chinese": [
			"更深的雪原。散落各处的彩色糖浆杯弄脏了雪地。",
			"免费的终成债。有人曾这样说。",
			"冰面上刻着的名字。那是未能归来者的名单。",
			"冰冷的真相扼住了探险队的喉咙。"
		],
		"french": [
			"Plus loin dans le champ de neige. Des tasses de sirop colorées et jetées jonchaient la neige.",
			"Rien n'est jamais gratuit. Quelqu'un l'avait dit.",
			"Des noms gravés sur la glace. La liste de ceux qui ne sont jamais revenus.",
			"La froide vérité serra la gorge de l'équipe d'expédition."
		],
		"spanish": [
			"Más profundo en el campo de nieve. Vasos de jarabe de colores, abandonados por todas partes, ensuciaban la nieve.",
			"Lo gratis se convierte en deuda. Alguien dijo eso.",
			"Nombres grabados en el hielo. La lista de los que no regresaron.",
			"La fría verdad ahogaba a la expedición."
		],
		"vietnamese": [
			"Sâu hơn vào cánh đồng tuyết. Những chiếc cốc si-rô nhiều màu bị bỏ rơi khắp nơi làm bẩn tuyết.",
			"Miễn phí sẽ trở thành nợ. Ai đó đã nói vậy.",
			"Những cái tên khắc trên tảng băng. Danh sách những người không trở về.",
			"Sự thật lạnh lùng siết chặt cổ đoàn thám hiểm."
		],
		"thai": [
			"ลึกเข้าไปในทุ่งหิมะ. ถ้วยน้ำเชื่อมหลากสีที่ถูกทิ้งเกลื่อนกลาดทำให้หิมะสกปรก.",
			"ของฟรีกลายเป็นหนี้. ใครบางคนกล่าวไว้.",
			"ชื่อที่สลักบนแผ่นน้ำแข็ง. รายชื่อของผู้ที่ไม่กลับมา.",
			"ความจริงอันเยือกเย็นบีบคอทีมสำรวจ."
		],
		"hindi": [
			"बर्फीले मैदान में और गहराई तक। जगह-जगह फेंके गए रंग-बिरंगे सिरप के कपों ने बर्फ को गंदा कर दिया था।",
			"मुफ्त चीज़ें कर्ज बन जाती हैं। किसी ने ऐसा कहा था।",
			"बर्फ पर खुदे हुए नाम। उन लोगों की सूची जो कभी वापस नहीं लौटे।",
			"कड़वी सच्चाई ने अभियान दल का गला घोंट दिया।"
		]
	}
} as const;
