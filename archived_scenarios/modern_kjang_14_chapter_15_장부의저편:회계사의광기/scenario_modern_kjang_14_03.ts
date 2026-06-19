export const scenario_modern_kjang_14_03 = {
	"scenario_id": "modern_kjang_14_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"kai": {
			"id": "mon_d7f29313-b8fb-49da-9a1a-01df5d13866e",
			"name": {
				"korean": "카이",
				"english": "Kai",
				"japanese": "カイ",
				"chinese": "凯",
				"french": "Kai",
				"spanish": "Kai",
				"vietnamese": "Kai",
				"thai": "ไค",
				"hindi": "काई"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f10d9184-4155-4bb9-de2d-db61463f7c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/e41f8e03-08c9-4a4f-6f72-fa9342876f00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"K-jang, 친절한 미소 뒤 감춰진 얼굴.",
			"낡은 장부, 그리고 숫자에 얽힌 광기.",
			"Kai는 혼란스러웠다. 그가 알던 K-jang은 누구였나.",
			"진실은 언제나 불편한 모습으로 찾아온다."
		],
		"english": [
			"K-jang, a face hidden behind a kind smile.",
			"An old ledger, and the madness entangled in numbers.",
			"Kai was confused. Who was the K-jang he knew?",
			"Truth always comes in an uncomfortable form."
		],
		"japanese": [
			"K-jang、優しい笑顔の裏に隠された顔。",
			"古い帳簿、そして数字に絡みつく狂気。",
			"カイは混乱していた。彼が知っていたK-jangは誰だったのか。",
			"真実はいつも不快な姿で現れる。"
		],
		"chinese": [
			"K-jang，友善笑容背后隐藏的面孔。",
			"旧账本，以及数字中纠缠的疯狂。",
			"Kai感到困惑。他认识的K-jang是谁？",
			"真相总是以令人不安的面貌出现。"
		],
		"french": [
			"K-jang, un visage dissimulé derrière un sourire aimable.",
			"Un vieux registre, et la folie liée aux chiffres.",
			"Kai était confus. Qui était le K-jang qu'il connaissait ?",
			"La vérité se présente toujours sous une forme inconfortable."
		],
		"spanish": [
			"K-jang, un rostro oculto tras una sonrisa amable.",
			"Un viejo libro de contabilidad, y la locura ligada a los números.",
			"Kai estaba confundido. ¿Quién era el K-jang que él conocía?",
			"La verdad siempre se presenta de una forma incómoda."
		],
		"vietnamese": [
			"K-jang, khuôn mặt ẩn giấu sau nụ cười thân thiện.",
			"Sổ sách cũ kỹ, và sự điên loạn vướng mắc trong những con số.",
			"Kai bối rối. K-jang mà anh ta biết là ai?",
			"Sự thật luôn đến dưới hình hài khó chịu."
		],
		"thai": [
			"K-jang ใบหน้าที่ซ่อนอยู่หลังรอยยิ้มอันอ่อนโยน",
			"สมุดบัญชีเก่าและความบ้าคลั่งที่พันกันอยู่ในตัวเลข",
			"ไคสับสน K-jang ที่เขารู้จักคือใครกันแน่",
			"ความจริงมักมาในรูปแบบที่ไม่สบายใจเสมอ"
		],
		"hindi": [
			"के-जांग, एक दयालु मुस्कान के पीछे छिपा चेहरा।",
			"एक पुराना बहीखाता, और संख्याओं में उलझा पागलपन।",
			"काई भ्रमित था। वह जिस के-जांग को जानता था, वह कौन था?",
			"सच हमेशा एक असहज रूप में आता है।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "편의점 불빛 아래, 익숙한 얼굴이 섬뜩하게 변해 있었다.",
						"english": "Under the convenience store lights, a familiar face had terrifyingly transformed.",
						"japanese": "コンビニの明かりの下、見慣れた顔が不気味に変貌していた。",
						"chinese": "便利店灯光下，熟悉的面孔变得可怖。",
						"french": "Sous les lumières du dépanneur, un visage familier s'était horriblement transformé.",
						"spanish": "Bajo las luces de la tienda de conveniencia, un rostro familiar se había transformado de manera aterradora.",
						"vietnamese": "Dưới ánh đèn cửa hàng tiện lợi, gương mặt quen thuộc đã biến đổi đến rợn người.",
						"thai": "ใต้แสงไฟร้านสะดวกซื้อ ใบหน้าที่คุ้นเคยได้เปลี่ยนไปอย่างน่าขนลุก",
						"hindi": "सुविधा स्टोर की रोशनी में, एक परिचित चेहरा भयानक रूप से बदल गया था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "K-jang님?",
						"english": "K-jang?",
						"japanese": "K-jangさん？",
						"chinese": "K-jang先生？",
						"french": "K-jang ?",
						"spanish": "¿K-jang?",
						"vietnamese": "K-jang à?",
						"thai": "คุณ K-jang?",
						"hindi": "के-जांग जी?"
					}
				},
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad",
					"content": {
						"korean": "K-jang님, 괜찮으세요? 얼굴이…",
						"english": "K-jang, are you okay? Your face...",
						"japanese": "K-jangさん、大丈夫ですか？顔が…",
						"chinese": "K-jang先生，您还好吗？您的脸...",
						"french": "K-jang, ça va ? Votre visage...",
						"spanish": "K-jang, ¿está bien? Su cara...",
						"vietnamese": "K-jang, anh có sao không? Mặt anh...",
						"thai": "คุณ K-jang ไม่เป็นไรใช่ไหมคะ/ครับ? ใบหน้าของคุณ...",
						"hindi": "के-जांग जी, आप ठीक हैं? आपका चेहरा..."
					}
				},
				{
					"content": {
						"korean": "완벽한 장부. 흐트러짐 없는 숫자들.",
						"english": "A perfect ledger. Unwavering numbers.",
						"japanese": "完璧な帳簿。乱れのない数字たち。",
						"chinese": "完美的账本。毫无差错的数字。",
						"french": "Un registre parfait. Des chiffres inébranlables.",
						"spanish": "Un libro de contabilidad perfecto. Números inalterables.",
						"vietnamese": "Một sổ sách hoàn hảo. Những con số không hề sai lệch.",
						"thai": "สมุดบัญชีที่สมบูรณ์แบบ ตัวเลขที่ไม่ผิดเพี้ยน",
						"hindi": "एक सही बहीखाता। अटल संख्याएँ।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리세요?",
						"english": "What are you talking about?",
						"japanese": "何を言ってるんですか？",
						"chinese": "您在说什么？",
						"french": "De quoi parlez-vous ?",
						"spanish": "¿Qué está diciendo?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไรคะ/ครับ?",
						"hindi": "आप क्या कह रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "흐트러지면 안 돼. 절대.",
						"english": "Must not be disturbed. Never.",
						"japanese": "乱れてはいけない。絶対に。",
						"chinese": "不能出错。绝不。",
						"french": "Ne doit pas être perturbé. Jamais.",
						"spanish": "No debe ser alterado. Jamás.",
						"vietnamese": "Không được sai lệch. Tuyệt đối.",
						"thai": "ต้องไม่ผิดเพี้ยน. ห้ามเด็ดขาด.",
						"hindi": "गड़बड़ाना नहीं चाहिए। कभी नहीं।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai",
					"content": {
						"korean": "K-jang님… 갑자기 왜 그러세요?",
						"english": "K-jang... Why are you acting like this all of a sudden?",
						"japanese": "K-jangさん…急にどうされたんですか？",
						"chinese": "K-jang大人…您突然怎么了？",
						"french": "K-jang... Qu'est-ce qui vous prend tout à coup ?",
						"spanish": "¿K-jang... Por qué actúas así de repente?",
						"vietnamese": "K-jang... Sao ngài đột nhiên lại như vậy?",
						"thai": "คุณ K-jang... จู่ๆ ก็เป็นอะไรไปคะ?",
						"hindi": "के-जांग... अचानक आप ऐसा क्यों कर रहे हैं?"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "나는 회계사였다. 언제나 완벽한 장부만을 다루던.",
						"english": "I was an accountant. Always handling only perfect ledgers.",
						"japanese": "私は会計士だった。常に完璧な帳簿だけを扱っていた。",
						"chinese": "我曾是一名会计师。只处理完美的账簿。",
						"french": "J'étais comptable. Je ne traitais que des registres impeccables.",
						"spanish": "Fui contable. Siempre manejando solo libros perfectos.",
						"vietnamese": "Ta từng là một kế toán. Luôn chỉ xử lý những sổ sách hoàn hảo.",
						"thai": "ฉันเคยเป็นนักบัญชี ผู้จัดการบัญชีที่สมบูรณ์แบบเสมอมา",
						"hindi": "मैं एक अकाउंटेंट था। हमेशा सिर्फ सही बही-खातों को संभालता था।"
					}
				},
				{
					"content": {
						"korean": "회계사요? 편의점 점주 아니세요?",
						"english": "An accountant? Aren't you a convenience store owner?",
						"japanese": "会計士ですか？コンビニの店主じゃないんですか？",
						"chinese": "会计师？您不是便利店店主吗？",
						"french": "Comptable ? N'êtes-vous pas le propriétaire du dépanneur ?",
						"spanish": "¿Contable? ¿No es el dueño de la tienda de conveniencia?",
						"vietnamese": "Kế toán ư? Không phải ngài là chủ cửa hàng tiện lợi sao?",
						"thai": "นักบัญชีเหรอคะ? คุณไม่ใช่เจ้าของร้านสะดวกซื้อหรอกเหรอ?",
						"hindi": "अकाउंटेंट? आप तो एक सुविधा स्टोर के मालिक हैं, है ना?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "중요한 건 숫자다. 모든 불일치는 죄악.",
						"english": "Numbers are important. All discrepancies are sins.",
						"japanese": "重要なのは数字だ。すべての不一致は罪悪。",
						"chinese": "数字才是最重要的。所有不符之处都是罪恶。",
						"french": "Les chiffres sont importants. Toute divergence est un péché.",
						"spanish": "Lo importante son los números. Todas las inconsistencias son un pecado.",
						"vietnamese": "Quan trọng là những con số. Mọi sự sai lệch đều là tội lỗi.",
						"thai": "สิ่งสำคัญคือตัวเลข ความไม่สอดคล้องกันทั้งหมดคือบาป",
						"hindi": "महत्वपूर्ण संख्याएँ हैं। सभी विसंगतियाँ पाप हैं।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…그때 그 미소는 거짓이었나요?",
						"english": "...Was that smile back then a lie?",
						"japanese": "…あの時の笑顔は偽りだったんですか？",
						"chinese": "……那时的笑容是假的吗？",
						"french": "...Ce sourire d'alors était-il un mensonge ?",
						"spanish": "...¿Aquella sonrisa de entonces fue una mentira?",
						"vietnamese": "...Nụ cười khi đó là giả dối sao?",
						"thai": "...รอยยิ้มเมื่อตอนนั้นเป็นเรื่องโกหกงั้นหรือคะ?",
						"hindi": "...क्या वह मुस्कान तब झूठी थी?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "이 장부가 나의 모든 것이었다. 이제는… 내 분노가 되었지.",
						"english": "This ledger was my everything. Now... it has become my rage.",
						"japanese": "この帳簿が私の全てだった。今は…私の怒りとなった。",
						"chinese": "这本账簿曾是我的全部。现在……它成了我的愤怒。",
						"french": "Ce registre était tout pour moi. Maintenant... c'est devenu ma fureur.",
						"spanish": "Este libro era mi todo. Ahora... se ha convertido en mi ira.",
						"vietnamese": "Quyển sổ này từng là tất cả của ta. Giờ đây... nó đã trở thành cơn thịnh nộ của ta.",
						"thai": "บัญชีเล่มนี้คือทุกสิ่งของฉัน ตอนนี้... มันกลับกลายเป็นความโกรธแค้นของฉัน",
						"hindi": "यह बही-खाता मेरा सब कुछ था। अब... यह मेरा क्रोध बन गया है।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "대체 왜 그렇게까지…",
						"english": "Why would you go so far...?",
						"japanese": "いったいそこまで…",
						"chinese": "到底为什么会这样……",
						"french": "Mais pourquoi aller si loin...?",
						"spanish": "¿Por qué tanto...?",
						"vietnamese": "Tại sao lại đến mức đó...?",
						"thai": "ทำไมถึงขนาดนั้น...?",
						"hindi": "आखिर क्यों इतना...?"
					}
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "질서를 지켜야 한다. 너희 같은 오물들이 감히 흐트러뜨릴 수 없어.",
						"english": "Order must be maintained. Filth like you cannot dare disrupt it.",
						"japanese": "秩序は守られなければならない。お前たちのような汚物が、よくも乱そうとするな。",
						"chinese": "秩序必须被维护。你们这些污秽之物，胆敢破坏它。",
						"french": "L'ordre doit être maintenu. Des immondices comme vous n'oseraient pas le perturber.",
						"spanish": "El orden debe mantenerse. La escoria como vosotros no puede atreverse a alterarlo.",
						"vietnamese": "Trật tự phải được duy trì. Những thứ ô uế như các ngươi không được phép phá hoại.",
						"thai": "ต้องรักษาระเบียบไว้ พวกสิ่งสกปรกอย่างแกไม่มีสิทธิ์มาทำให้เสียระบบ",
						"hindi": "व्यवस्था बनाए रखनी होगी। तुम जैसे कचरे इसकी हिम्मत नहीं कर सकते।"
					}
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아니에요. K-jang님은 이러지 않았어요!",
						"english": "...No. K-jang wasn't like this!",
						"japanese": "…違います。K-jangさんはこんな人じゃなかった！",
						"chinese": "……不。K-jang大人不是这样的！",
						"french": "...Non. K-jang n'était pas comme ça !",
						"spanish": "¡...No! ¡K-jang no era así!",
						"vietnamese": "...Không phải. K-jang không phải là người như thế!",
						"thai": "...ไม่ใช่ค่ะ คุณ K-jang ไม่ได้เป็นแบบนี้!",
						"hindi": "...नहीं। के-जांग ऐसे नहीं थे!"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "kai",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "너희는 이 장부의 질서를 이해하지 못한다. 그래서 제거되어야 한다.",
						"english": "You do not understand the order of this ledger. Therefore, you must be eliminated.",
						"japanese": "お前たちはこの帳簿の秩序を理解できない。故に、排除されなければならない。",
						"chinese": "你们无法理解这本账簿的秩序。因此，你们必须被清除。",
						"french": "Vous ne comprenez pas l'ordre de ce registre. Par conséquent, vous devez être éliminés.",
						"spanish": "Vosotros no entendéis el orden de este libro. Por lo tanto, debéis ser eliminados.",
						"vietnamese": "Các ngươi không hiểu được trật tự của quyển sổ này. Vì vậy, các ngươi phải bị loại bỏ.",
						"thai": "พวกแกไม่เข้าใจระเบียบของบัญชีเล่มนี้ เพราะฉะนั้น พวกแกต้องถูกกำจัด",
						"hindi": "तुम इस बही-खाते की व्यवस्था को नहीं समझते। इसलिए, तुम्हें खत्म करना होगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "우리는 진실을 알 뿐이야.",
						"english": "We only know the truth.",
						"japanese": "我々は真実を知るのみ。",
						"chinese": "我们只知道真相。",
						"french": "Nous ne connaissons que la vérité.",
						"spanish": "Solo conocemos la verdad.",
						"vietnamese": "Chúng ta chỉ biết sự thật.",
						"thai": "เราเพียงแค่รู้ความจริง",
						"hindi": "हम सिर्फ सच जानते हैं।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "kai",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "(떨리는 목소리로) …K-jang님. 돌아오세요.",
						"english": "(Voice trembling) ...K-jang. Please come back.",
						"japanese": "（震える声で）…K-jang様。戻ってきてください。",
						"chinese": "（声音颤抖）……K-jang大人。请回来吧。",
						"french": "(D'une voix tremblante) ...K-jang. Revenez, s'il vous plaît.",
						"spanish": "(Con voz temblorosa) ...K-jang. Por favor, vuelve.",
						"vietnamese": "(Với giọng run rẩy) ...K-jang. Xin hãy quay lại.",
						"thai": "(เสียงสั่นเครือ) ...K-jang กลับมาเถอะครับ/ค่ะ",
						"hindi": "(काँपती आवाज़ में) ...के-जंग। कृपया वापस आ जाओ।"
					}
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base",
					"content": {
						"korean": "돌아갈 곳은 없다. 오직 장부의 숫자만이 영원할 뿐.",
						"english": "There's no turning back. Only the numbers in the ledger are eternal.",
						"japanese": "戻る場所はない。帳簿の数字だけが永遠だ。",
						"chinese": "没有回头路。只有账本上的数字是永恒的。",
						"french": "Il n'y a pas de retour possible. Seuls les chiffres du registre sont éternels.",
						"spanish": "No hay vuelta atrás. Solo los números del libro de contabilidad son eternos.",
						"vietnamese": "Không có đường lùi. Chỉ có những con số trong sổ cái là vĩnh cửu.",
						"thai": "ไม่มีทางกลับ มีเพียงตัวเลขในบัญชีเท่านั้นที่เป็นนิรันดร์",
						"hindi": "वापस लौटने की कोई जगह नहीं है। केवल बही-खाते के अंक ही शाश्वत हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "물러설 수 없어!",
						"english": "I can't back down!",
						"japanese": "退けない！",
						"chinese": "我不能退缩！",
						"french": "Je ne peux pas reculer !",
						"spanish": "¡No puedo retroceder!",
						"vietnamese": "Không thể lùi bước!",
						"thai": "ถอยไม่ได้!",
						"hindi": "मैं पीछे नहीं हट सकता!"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "…아니야. 장부는… 영원해. 숫자는… 사라지지 않아…",
						"english": "...No. The ledger is... eternal. The numbers... never disappear...",
						"japanese": "…違う。帳簿は…永遠だ。数字は…消えない…",
						"chinese": "……不。账本……是永恒的。数字……不会消失……",
						"french": "...Non. Le registre est... éternel. Les chiffres... ne disparaissent jamais...",
						"spanish": "...No. El libro de contabilidad es... eterno. Los números... nunca desaparecen...",
						"vietnamese": "...Không. Cuốn sổ cái... là vĩnh cửu. Những con số... không bao giờ biến mất...",
						"thai": "...ไม่สิ สมุดบัญชี... เป็นนิรันดร์ ตัวเลข... ไม่มีวันหายไป...",
						"hindi": "...नहीं। बही-खाता... शाश्वत है। संख्याएँ... कभी मिटती नहीं..."
					},
					"speaker": "random_boss",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "(괴로운 듯) K-jang님…",
						"english": "(Distressed) K-jang...",
						"japanese": "(苦しげに) K-jang様…",
						"chinese": "(痛苦状) K-jang大人…",
						"french": "(Avec détresse) K-jang...",
						"spanish": "(Angustiado) K-jang...",
						"vietnamese": "(Đau khổ) K-jang...",
						"thai": "(อย่างเจ็บปวด) ท่าน K-jang...",
						"hindi": "(परेशान होकर) के-जंग जी…"
					},
					"type": "speech",
					"speaker": "kai",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…정말 끝난 걸까.",
						"english": "...Is it really over?",
						"japanese": "…本当に終わったのか。",
						"chinese": "……真的结束了吗？",
						"french": "...Est-ce vraiment fini ?",
						"spanish": "...¿De verdad ha terminado?",
						"vietnamese": "...Thật sự đã kết thúc rồi sao?",
						"thai": "...มันจบลงแล้วจริง ๆ เหรอ?",
						"hindi": "...क्या यह सच में खत्म हो गया है?"
					}
				},
				{
					"content": {
						"korean": "K-jang의 손에서 낡은 장부가 떨어져 나갔다. 그 안에는, 삼일회와 관련된 섬뜩한 숫자들이 꿈틀거렸다.",
						"english": "The old ledger slipped from K-jang's hand. Inside, eerie numbers related to the Samil Group writhed.",
						"japanese": "K-jangの手から古びた帳簿が滑り落ちた。その中には、サミル会に関する不気味な数字が蠢いていた。",
						"chinese": "旧账本从K-jang手中滑落。里面，与三日会相关的诡异数字在蠕动。",
						"french": "Le vieux registre s'échappa des mains de K-jang. À l'intérieur, des chiffres sinistres liés à la Société Samil grouillaient.",
						"spanish": "El viejo libro mayor se le cayó de la mano a K-jang. Dentro, números espeluznantes relacionados con la Sociedad Samil se retorcían.",
						"vietnamese": "Cuốn sổ cái cũ trượt khỏi tay K-jang. Bên trong, những con số ghê rợn liên quan đến Samil Group đang nhúc nhích.",
						"thai": "บัญชีเก่าหลุดจากมือของ K-jang ภายในนั้น ตัวเลขน่าขนลุกที่เกี่ยวข้องกับกลุ่มซัมอิลกำลังบิดตัวไปมา",
						"hindi": "के-जंग के हाथ से पुरानी बही फिसल गई। अंदर, सामिल ग्रुप से संबंधित भयानक संख्याएँ रेंग रही थीं।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "Kai는 여전히 혼란스러웠지만, 진실의 파편들이 모여들기 시작했다.",
						"english": "Kai was still confused, but fragments of the truth began to gather.",
						"japanese": "Kaiはまだ混乱していたが、真実の破片が集まり始めた。",
						"chinese": "Kai仍然很困惑，但真相的碎片开始聚集。",
						"french": "Kai était encore confus, mais les fragments de la vérité commençaient à s'assembler.",
						"spanish": "Kai seguía confundido, pero los fragmentos de la verdad comenzaron a reunirse.",
						"vietnamese": "Kai vẫn còn bối rối, nhưng những mảnh ghép của sự thật đã bắt đầu tụ lại.",
						"thai": "ไคยังคงสับสน แต่ชิ้นส่วนของความจริงเริ่มรวมตัวกัน",
						"hindi": "काई अभी भी भ्रमित था, लेकिन सच्चाई के टुकड़े इकट्ठा होने लगे थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "편의점의 가장 깊은 곳. 그곳에는 광기의 장부가 펼쳐져 있었다.",
						"english": "In the deepest part of the convenience store. The ledger of madness lay open.",
						"japanese": "コンビニの最深部。そこには狂気の帳簿が広げられていた。",
						"chinese": "便利店最深处。疯狂的账本在那里展开。",
						"french": "Dans les profondeurs du dépanneur. Le grand livre de la folie était étalé.",
						"spanish": "En lo más profundo de la tienda de conveniencia. El libro de la locura estaba abierto.",
						"vietnamese": "Sâu thẳm nhất trong cửa hàng tiện lợi. Cuốn sổ cái điên loạn được mở ra ở đó.",
						"thai": "ส่วนที่ลึกที่สุดของร้านสะดวกซื้อ ที่นั่นสมุดบัญชีแห่งความบ้าคลั่งถูกเปิดออก",
						"hindi": "सुविधा स्टोर के सबसे गहरे हिस्से में। पागलपन का बही-खाता खुला पड़ा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔군. 나의 완벽한 세계를 파괴하려는 자들.",
						"english": "You've come. Those who seek to destroy my perfect world.",
						"japanese": "来たか。我が完璧な世界を破壊しようとする者たちよ。",
						"chinese": "你们来了。那些试图摧毁我完美世界的人。",
						"french": "Vous êtes venus. Ceux qui cherchent à détruire mon monde parfait.",
						"spanish": "Han venido. Aquellos que buscan destruir mi mundo perfecto.",
						"vietnamese": "Các ngươi đã đến. Những kẻ muốn phá hủy thế giới hoàn hảo của ta.",
						"thai": "มาแล้วสินะ พวกที่ต้องการทำลายโลกที่สมบูรณ์แบบของฉัน",
						"hindi": "तुम आ गए। वे जो मेरी परिपूर्ण दुनिया को नष्ट करना चाहते हैं।"
					}
				},
				{
					"content": {
						"korean": "K-jang님! 제발… 그만두세요. 당신은 이런 사람이 아니었잖아요!",
						"english": "K-jang! Please... stop. You weren't like this!",
						"japanese": "K-jang様！どうか…やめてください。あなたはこんな人じゃなかった！",
						"chinese": "K-jang大人！拜托……住手吧。你以前不是这样的人！",
						"french": "K-jang ! S'il vous plaît... arrêtez. Vous n'étiez pas comme ça !",
						"spanish": "¡K-jang! Por favor... detente. ¡Tú no eras así!",
						"vietnamese": "K-jang! Làm ơn... dừng lại đi. Anh không phải là người như vậy mà!",
						"thai": "K-jang! ได้โปรด... หยุดเถอะ คุณไม่ใช่คนแบบนี้!",
						"hindi": "के-जंग! कृपया... रुक जाओ। तुम ऐसे नहीं थे!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "kai"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "시끄러워! {random_boss}의 이름으로… 이 장부의 질서를 수호하겠다!",
						"english": "Silence! In the name of {random_boss}... I will protect the order of this ledger!",
						"japanese": "黙れ！{random_boss}の名において…この帳簿の秩序を守り抜く！",
						"chinese": "闭嘴！以{random_boss}之名……我将守护这本账簿的秩序！",
						"french": "Silence ! Au nom de {random_boss}... je protégerai l'ordre de ce registre !",
						"spanish": "¡Silencio! ¡En el nombre de {random_boss}... protegeré el orden de este libro de contabilidad!",
						"vietnamese": "Im đi! Nhân danh {random_boss}... ta sẽ bảo vệ trật tự của cuốn sổ cái này!",
						"thai": "เงียบซะ! ในนามของ {random_boss}... ฉันจะปกป้องระเบียบของสมุดบัญชีนี้!",
						"hindi": "चुप रहो! {random_boss} के नाम पर... मैं इस बही-खाते की व्यवस्था की रक्षा करूँगा!"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "K-jang님은 이제 없어. 막아야 해!",
						"english": "K-jang is gone now. We have to stop him!",
						"japanese": "K-jang様はもういない。止めなければ！",
						"chinese": "K-jang大人已经不在了。我们必须阻止他！",
						"french": "K-jang n'est plus. Il faut l'arrêter !",
						"spanish": "K-jang ya no existe. ¡Tenemos que detenerlo!",
						"vietnamese": "K-jang không còn nữa. Chúng ta phải ngăn cản!",
						"thai": "K-jang ไม่อยู่แล้ว เราต้องหยุดเขา!",
						"hindi": "के-जंग अब नहीं है। हमें उसे रोकना होगा!"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 감히 장부의 질서에 도전하다니.",
						"english": "Insignificant fools. How dare you challenge the order of the ledger.",
						"japanese": "愚かな者たちめ。よくも帳簿の秩序に挑んだな。",
						"chinese": "卑微之徒。竟敢挑战账本的秩序。",
						"french": "Minables créatures. Comment osez-vous défier l'ordre du registre.",
						"spanish": "Criaturas insignificantes. ¿Cómo osáis desafiar el orden del libro mayor?",
						"vietnamese": "Lũ hạ đẳng. Dám thách thức trật tự của sổ cái sao.",
						"thai": "พวกไร้ค่า กล้าดียังไงมาท้าทายระเบียบของบัญชี",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई बही के क्रम को चुनौती देने की।"
					}
				},
				{
					"speaker": "kai",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "kai",
					"content": {
						"korean": "(분노에 찬) 아직 끝나지 않았어!",
						"english": "(Enraged) It's not over yet!",
						"japanese": "(怒りに満ちて) まだ終わってない！",
						"chinese": "(愤怒地) 还没结束！",
						"french": "(Enragé) Ce n'est pas encore fini !",
						"spanish": "(Enfurecido) ¡Aún no ha terminado!",
						"vietnamese": "(Đầy giận dữ) Vẫn chưa kết thúc đâu!",
						"thai": "(ด้วยความโกรธ) ยังไม่จบ!",
						"hindi": "(क्रोधित होकर) अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"content": {
						"korean": "너희는 나의 완벽한 장부를 이해하지 못한다. 영원히.",
						"english": "You will never understand my perfect ledger. Never.",
						"japanese": "お前たちは私の完璧な帳簿を理解できない。永遠に。",
						"chinese": "你们永远不会理解我完美的账本。永远不会。",
						"french": "Vous ne comprendrez jamais mon registre parfait. Jamais.",
						"spanish": "Nunca entenderéis mi libro mayor perfecto. Nunca.",
						"vietnamese": "Các ngươi sẽ không bao giờ hiểu được cuốn sổ cái hoàn hảo của ta. Mãi mãi.",
						"thai": "พวกแกไม่มีวันเข้าใจบัญชีอันสมบูรณ์แบบของฉัน ไม่มีวัน",
						"hindi": "तुम मेरे संपूर्ण बही को कभी नहीं समझोगे। कभी नहीं।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
