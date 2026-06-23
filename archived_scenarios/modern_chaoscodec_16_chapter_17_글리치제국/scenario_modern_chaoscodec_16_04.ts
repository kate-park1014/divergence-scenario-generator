export const scenario_modern_chaoscodec_16_04 = {
	"scenario_id": "modern_chaoscodec_16_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 스크린이 비명을 질렀다. 오류 코드가 끝없이 반복되었다.",
						"english": "The city's screens screamed. Error codes repeated endlessly.",
						"japanese": "都市のスクリーンが悲鳴を上げた。エラーコードが果てしなく繰り返された。",
						"chinese": "城市的屏幕尖叫着。错误代码无休止地重复。",
						"french": "Les écrans de la ville hurlaient. Les codes d'erreur se répétaient sans fin.",
						"spanish": "Las pantallas de la ciudad gritaban. Los códigos de error se repetían sin cesar.",
						"vietnamese": "Màn hình thành phố gào thét. Mã lỗi lặp lại không ngừng.",
						"thai": "จอภาพของเมืองกรีดร้อง รหัสข้อผิดพลาดซ้ำไปซ้ำมาไม่หยุดหย่อน",
						"hindi": "शहर की स्क्रीनें चीख रही थीं। त्रुटि कोड अंतहीन रूप से दोहराए जा रहे थे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 시작이야? 대체 무슨….",
						"english": "Not again? What in the...",
						"japanese": "また始まったの？一体何が…。",
						"chinese": "又来了？到底怎么回事…。",
						"french": "Encore ? Mais qu'est-ce que…",
						"spanish": "¿Otra vez? ¿Qué demonios...?",
						"vietnamese": "Lại nữa à? Rốt cuộc là chuyện gì…",
						"thai": "เริ่มอีกแล้วเหรอ? นี่มันอะไรกัน...",
						"hindi": "फिर से? आखिर यह क्या है...?"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "흥미롭네요. 이 패턴, 반복되고 있어요.",
						"english": "Interesting. This pattern, it's repeating.",
						"japanese": "興味深いですね。このパターン、繰り返されています。",
						"chinese": "有趣。这个模式，正在重复。",
						"french": "Intéressant. Ce schéma, il se répète.",
						"spanish": "Interesante. Este patrón se está repitiendo.",
						"vietnamese": "Thú vị thật. Mẫu hình này đang lặp lại.",
						"thai": "น่าสนใจนะ รูปแบบนี้มันซ้ำกันอยู่",
						"hindi": "दिलचस्प। यह पैटर्न, दोहरा रहा है।"
					},
					"speaker": "lin",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "누구세요?",
						"english": "Who are you?",
						"japanese": "あなたは誰？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Anh/Chị là ai?",
						"thai": "คุณเป็นใคร?",
						"hindi": "आप कौन हैं?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "린. 이런 오류들을 해독하는 일을 하죠.",
						"english": "Lyn. I decode these errors.",
						"japanese": "リン。私はこのようなエラーを解読する仕事をしています。",
						"chinese": "林。我负责解读这些错误。",
						"french": "Lyn. Je décode ces erreurs.",
						"spanish": "Lyn. Me encargo de decodificar estos errores.",
						"vietnamese": "Lyn. Tôi chuyên giải mã những lỗi như thế này.",
						"thai": "ลิน ฉันถอดรหัสข้อผิดพลาดพวกนี้",
						"hindi": "लिन। मैं इन त्रुटियों को डीकोड करती हूँ।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "단순한 오류가 아니에요. 이건… 메시지예요.",
						"english": "It's not a simple error. This is... a message.",
						"japanese": "単なるエラーではありません。これは…メッセージです。",
						"chinese": "这不是简单的错误。这是…一个消息。",
						"french": "Ce n'est pas une simple erreur. C'est... un message.",
						"spanish": "No es un simple error. Esto es... un mensaje.",
						"vietnamese": "Đây không phải là lỗi đơn thuần. Đây là… một tin nhắn.",
						"thai": "นี่ไม่ใช่แค่ข้อผิดพลาด แต่มันคือ...ข้อความ",
						"hindi": "यह कोई सामान्य त्रुटि नहीं है। यह... एक संदेश है।"
					},
					"emotion": "base"
				}
			]
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
					"speaker": "lin",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 코드들은 오래된 사건의 흔적과 일치해요.",
						"english": "These codes match traces of an old incident.",
						"japanese": "これらのコードは、過去の事件の痕跡と一致します。",
						"chinese": "这些代码与旧事件的痕迹相符。",
						"french": "Ces codes correspondent aux traces d'un vieil incident.",
						"spanish": "Estos códigos coinciden con los rastros de un incidente antiguo.",
						"vietnamese": "Những mã này trùng khớp với dấu vết của một sự cố cũ.",
						"thai": "รหัสเหล่านี้ตรงกับร่องรอยของเหตุการณ์เก่า",
						"hindi": "ये कोड एक पुरानी घटना के निशानों से मेल खाते हैं।"
					},
					"speaker": "lin"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과거의 사건?",
						"english": "An incident from the past?",
						"japanese": "過去の事件ですか？",
						"chinese": "过去的事件？",
						"french": "Un incident du passé ?",
						"spanish": "¿Un incidente del pasado?",
						"vietnamese": "Một sự cố từ quá khứ?",
						"thai": "เหตุการณ์ในอดีต?",
						"hindi": "अतीत की घटना?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네. 시스템 깊숙이 박힌… 복종과 통제의 메시지.",
						"english": "Yes. Embedded deep within the system... messages of obedience and control.",
						"japanese": "ええ。システムの奥深くに埋め込まれた…服従と制御のメッセージです。",
						"chinese": "是的。深植于系统之中…服从与控制的信息。",
						"french": "Oui. Des messages d'obéissance et de contrôle, enfouis au plus profond du système.",
						"spanish": "Sí. Incrustados profundamente en el sistema... mensajes de obediencia y control.",
						"vietnamese": "Vâng. Đã cắm sâu vào hệ thống... thông điệp phục tùng và kiểm soát.",
						"thai": "ใช่ ข้อความแห่งการเชื่อฟังและการควบคุมที่ฝังลึกอยู่ในระบบ",
						"hindi": "हाँ। सिस्टम में गहराई से एम्बेडेड... आज्ञाकारिता और नियंत्रण के संदेश।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "누가, 왜 그런 짓을?",
						"english": "Who would do such a thing, and why?",
						"japanese": "誰が、なぜそんなことを？",
						"chinese": "谁会这么做，为什么？",
						"french": "Qui ferait une telle chose, et pourquoi ?",
						"spanish": "¿Quién haría tal cosa y por qué?",
						"vietnamese": "Ai, tại sao lại làm vậy?",
						"thai": "ใครทำอย่างนั้น และทำไม?",
						"hindi": "ऐसा किसने और क्यों किया?"
					},
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "어쩌면 이 시스템 자체가 누군가의 의지대로 움직이고 있는 건지도.",
						"english": "Perhaps the system itself is moving according to someone's will.",
						"japanese": "もしかしたら、このシステム自体が誰かの意思で動いているのかもしれません。",
						"chinese": "或许这个系统本身就是按照某个人的意志在运作。",
						"french": "Peut-être que le système lui-même agit selon la volonté de quelqu'un.",
						"spanish": "Quizás el propio sistema se está moviendo según la voluntad de alguien.",
						"vietnamese": "Có lẽ chính hệ thống này đang hoạt động theo ý muốn của ai đó.",
						"thai": "บางทีระบบนี้อาจกำลังเคลื่อนไหวตามเจตจำนงของใครบางคน",
						"hindi": "शायद यह सिस्टम खुद किसी की मर्जी से चल रहा है।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "메트로넷은 완벽한 통제를 원했어요.",
						"english": "Metronet desired complete control.",
						"japanese": "メトロネットは完璧な統制を望んでいました。",
						"chinese": "都会网络渴望完全的控制。",
						"french": "Metronet voulait un contrôle total.",
						"spanish": "Metronet deseaba un control completo.",
						"vietnamese": "Metronet muốn kiểm soát hoàn toàn.",
						"thai": "เมโทรเน็ตต้องการการควบคุมที่สมบูรณ์แบบ",
						"hindi": "मेट्रोनेट पूर्ण नियंत्रण चाहता था।"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "모든 시민이 그들의 코드에 복종하도록… 끊임없이 주입하는 거죠.",
						"english": "To make all citizens obey their code... constantly injecting it.",
						"japanese": "すべての市民が彼らのコードに従うように…絶えず注入しているのです。",
						"chinese": "让所有市民服从他们的代码…不断地灌输。",
						"french": "Pour que tous les citoyens obéissent à leur code... l'injectant constamment.",
						"spanish": "Para que todos los ciudadanos obedezcan su código... inyectándolo constantemente.",
						"vietnamese": "Để tất cả công dân tuân theo mã của họ... liên tục tiêm nhiễm vào.",
						"thai": "เพื่อให้พลเมืองทุกคนปฏิบัติตามรหัสของพวกเขา... ฉีดเข้าไปอย่างต่อเนื่อง",
						"hindi": "सभी नागरिकों को उनके कोड का पालन करने के लिए... लगातार इसे इंजेक्ट कर रहे हैं।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "말도 안 돼… 우리가 감시당하고 있었다고?",
						"english": "Unbelievable... We were being watched?",
						"japanese": "信じられない…私たちが監視されていたと？",
						"chinese": "太荒谬了…我们一直被监视着？",
						"french": "Incroyable... Nous étions surveillés ?",
						"spanish": "Increíble... ¿Estábamos siendo vigilados?",
						"vietnamese": "Không thể tin được... Chúng ta đã bị theo dõi sao?",
						"thai": "ไม่น่าเชื่อ... เราถูกจับตามองอยู่เหรอ?",
						"hindi": "अविश्वसनीय... हमें देखा जा रहा था?"
					}
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그 이상이에요. 이 코드는 우리 의식까지 조종하려 들 거예요.",
						"english": "It's more than that. These codes will try to control our very consciousness.",
						"japanese": "それ以上です。このコードは私たちの意識まで操ろうとするでしょう。",
						"chinese": "远不止如此。这些代码甚至会试图控制我们的意识。",
						"french": "C'est plus que ça. Ces codes essaieront de contrôler notre conscience même.",
						"spanish": "Es más que eso. Estos códigos intentarán controlar nuestra propia conciencia.",
						"vietnamese": "Nó hơn thế nữa. Mã này sẽ cố gắng điều khiển cả ý thức của chúng ta.",
						"thai": "มันมากกว่านั้น รหัสเหล่านี้จะพยายามควบคุมจิตสำนึกของเราด้วยซ้ำ",
						"hindi": "यह उससे भी बढ़कर है। ये कोड हमारी चेतना को भी नियंत्रित करने की कोशिश करेंगे।"
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "lin",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 모든 혼란은 '회귀하는 코드' 때문이에요.",
						"english": "All this chaos is due to the 'Regressing Code'.",
						"japanese": "この混乱はすべて「回帰するコード」のせいです。",
						"chinese": "所有这些混乱都是因为“回归代码”。",
						"french": "Tout ce chaos est dû au 'Code Régressif'.",
						"spanish": "Todo este caos se debe al 'Código Regresivo'.",
						"vietnamese": "Tất cả sự hỗn loạn này là do 'Mã Hồi Quy'.",
						"thai": "ความวุ่นวายทั้งหมดนี้เกิดจาก 'รหัสย้อนกลับ'",
						"hindi": "यह सब अराजकता 'पुनरावर्ती कोड' के कारण है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "회귀하는 코드?",
						"english": "Regressing code?",
						"japanese": "回帰するコード？",
						"chinese": "回归的代码？",
						"french": "Code régressif ?",
						"spanish": "¿Código regresivo?",
						"vietnamese": "Mã hồi quy?",
						"thai": "โค้ดที่วนกลับ?",
						"hindi": "प्रतिगामी कोड?"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "한 번 시작되면, 이 도시는 영원히 이 루프에 갇히게 될 거예요.",
						"english": "Once started, this city will be trapped in this loop forever.",
						"japanese": "一度始まれば、この都市は永遠にこのループに閉じ込められるでしょう。",
						"chinese": "一旦开始，这座城市将永远被困在这个循环中。",
						"french": "Une fois lancé, cette ville sera piégée dans cette boucle pour toujours.",
						"spanish": "Una vez que empiece, esta ciudad quedará atrapada en este bucle para siempre.",
						"vietnamese": "Một khi đã bắt đầu, thành phố này sẽ mãi mãi bị mắc kẹt trong vòng lặp này.",
						"thai": "เมื่อเริ่มแล้ว เมืองนี้จะติดอยู่ในวังวนนี้ตลอดไป",
						"hindi": "एक बार शुरू होने के बाद, यह शहर हमेशा के लिए इस पाश में फंस जाएगा।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "영원히… 통제 속에서 살아가라고?",
						"english": "Live forever... under control?",
						"japanese": "永遠に… 支配されて生きろと？",
						"chinese": "永远…生活在控制之下？",
						"french": "Vivre éternellement… sous contrôle ?",
						"spanish": "¿Vivir para siempre… bajo control?",
						"vietnamese": "Sống mãi mãi… trong sự kiểm soát ư?",
						"thai": "ตลอดไป… ภายใต้การควบคุมงั้นเหรอ?",
						"hindi": "हमेशा के लिए… नियंत्रण में जीना है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리가 멈추지 않으면… 모든 것이 과거의 악몽을 반복할 거예요.",
						"english": "If we don't stop... everything will repeat the nightmare of the past.",
						"japanese": "私たちが止めなければ… 全てが過去の悪夢を繰り返すでしょう。",
						"chinese": "如果我们不停下来… 一切都将重复过去的噩梦。",
						"french": "Si nous n'arrêtons pas… tout répétera le cauchemar du passé.",
						"spanish": "Si no nos detenemos… todo repetirá la pesadilla del pasado.",
						"vietnamese": "Nếu chúng ta không dừng lại… mọi thứ sẽ lặp lại cơn ác mộng của quá khứ.",
						"thai": "ถ้าเราไม่หยุด… ทุกสิ่งจะซ้ำรอยฝันร้ายในอดีต",
						"hindi": "अगर हम नहीं रुके… तो सब कुछ अतीत के दुःस्वप्न को दोहराएगा।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "멈춰야 해. 반드시.",
						"english": "We must stop. Absolutely.",
						"japanese": "止めなければならない。必ず。",
						"chinese": "必须停止。务必。",
						"french": "Il faut arrêter. Absolument.",
						"spanish": "Debemos detenerlo. Sin falta.",
						"vietnamese": "Phải dừng lại. Nhất định phải dừng.",
						"thai": "ต้องหยุด. แน่นอน.",
						"hindi": "हमें रुकना होगा। निश्चित रूप से।"
					},
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 가장 깊은 코어에 다다랐다. 뒤틀린 데이터의 심장부였다.",
						"english": "Reached the city's deepest core. It was the heart of twisted data.",
						"japanese": "都市の最深部のコアに到達した。歪んだデータの心臓部だった。",
						"chinese": "抵达了城市最深层的核心。那是扭曲数据的心脏。",
						"french": "Atteint le cœur le plus profond de la ville. C'était le cœur des données tordues.",
						"spanish": "Llegué al núcleo más profundo de la ciudad. Era el corazón de los datos retorcidos.",
						"vietnamese": "Đã đến được lõi sâu nhất của thành phố. Đó là trái tim của dữ liệu méo mó.",
						"thai": "มาถึงแกนกลางที่ลึกที่สุดของเมืองแล้ว มันคือหัวใจของข้อมูลที่บิดเบี้ยว",
						"hindi": "शहर के सबसे गहरे कोर तक पहुंच गया। यह मुड़े हुए डेटा का दिल था।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "왔구나. 이 반복되는 절망 속으로.",
						"english": "So you've come. Into this repeating despair.",
						"japanese": "来たか。この繰り返される絶望の中へ。",
						"chinese": "来了啊。进入这重复的绝望之中。",
						"french": "Vous êtes venu. Dans ce désespoir répétitif.",
						"spanish": "Así que has llegado. A esta desesperación repetitiva.",
						"vietnamese": "Ngươi đã đến rồi. Vào vòng lặp tuyệt vọng này.",
						"thai": "มาถึงแล้วสินะ สู่ความสิ้นหวังที่วนซ้ำนี้",
						"hindi": "तुम आ गए। इस दोहराए जाने वाले निराशा में।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "너희는 이 루프에서 벗어날 수 없어. 영원히 나에게 복종할 뿐.",
						"english": "You cannot escape this loop. You will only obey me forever.",
						"japanese": "お前たちはこのループから逃れられない。永遠に私に服従するだけだ。",
						"chinese": "你们无法逃离这个循环。将永远服从于我。",
						"french": "Vous ne pouvez pas échapper à cette boucle. Vous ne ferez que m'obéir éternellement.",
						"spanish": "No podéis escapar de este bucle. Solo me obedeceréis para siempre.",
						"vietnamese": "Ngươi không thể thoát khỏi vòng lặp này. Ngươi sẽ mãi mãi tuân phục ta.",
						"thai": "พวกเจ้าหนีจากวงวนนี้ไม่ได้หรอก จะได้แต่เชื่อฟังข้าตลอดไป",
						"hindi": "तुम इस पाश से नहीं बच सकते। तुम हमेशा के लिए मेरा आज्ञापालन करोगे।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "헛소리 마! 우린 멈추지 않아!",
						"english": "Don't talk nonsense! We won't stop!",
						"japanese": "馬鹿なことを言うな！私たちは止まらない！",
						"chinese": "别胡说！我们不会停下！",
						"french": "Ne dis pas de bêtises ! Nous ne nous arrêterons pas !",
						"spanish": "¡Tonterías! ¡No nos detendremos!",
						"vietnamese": "Đừng có nói nhảm! Chúng ta sẽ không dừng lại!",
						"thai": "อย่าพูดไร้สาระ! เราไม่หยุดหรอก!",
						"hindi": "बकवास बंद करो! हम नहीं रुकेंगे!"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크으윽… 겨우 이거라고…?",
						"english": "Ugh... Is that all...?",
						"japanese": "ぐうう…これだけだと…？",
						"chinese": "呃啊…就只有这样吗…？",
						"french": "Ugh… C'est tout ce qu'il y a… ?",
						"spanish": "Ugh… ¿Solo esto…?",
						"vietnamese": "Ư… Chỉ có vậy thôi sao…?",
						"thai": "อึก… แค่นี้เองเหรอ…?",
						"hindi": "उफ़… बस इतना ही…?"
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해… 진짜 광기는… 이제부터야….",
						"english": "This is just the beginning... The real madness... starts now...",
						"japanese": "これは始まりに過ぎない…本当の狂気は…これからだ…",
						"chinese": "这只是个开始…真正的疯狂…现在才要上演…",
						"french": "Ce n'est que le début… La vraie folie… commence maintenant…",
						"spanish": "Esto es solo el principio… La verdadera locura… empieza ahora…",
						"vietnamese": "Đây chỉ là khởi đầu… Sự điên loạn thật sự… bây giờ mới bắt đầu…",
						"thai": "นี่เป็นแค่จุดเริ่มต้น...ความวิกลจริตที่แท้จริง...กำลังจะเริ่มขึ้นแล้ว...",
						"hindi": "यह तो बस शुरुआत है...असली पागलपन...अब शुरू होगा..."
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끝났어. 이제 더 이상 반복은 없어.",
						"english": "It's over. No more repetition.",
						"japanese": "終わった。もう二度と繰り返さない。",
						"chinese": "结束了。不会再有重复。",
						"french": "C'est fini. Plus de répétition.",
						"spanish": "Se acabó. No más repeticiones.",
						"vietnamese": "Kết thúc rồi. Không còn lặp lại nữa.",
						"thai": "จบแล้ว. ไม่มีการทำซ้ำอีกต่อไป.",
						"hindi": "खत्म हो गया। अब और कोई दोहराव नहीं।"
					},
					"emotion": "happy"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "잠깐. 코드가… 아직 완전히 멈추지 않았어요.",
						"english": "Wait. The code... hasn't fully stopped yet.",
						"japanese": "待って。コードが…まだ完全に停止していない。",
						"chinese": "等等。代码…还没有完全停止。",
						"french": "Attendez. Le code… n'est pas encore complètement arrêté.",
						"spanish": "Espera. El código… aún no se ha detenido por completo.",
						"vietnamese": "Khoan đã. Mã… vẫn chưa dừng hoàn toàn.",
						"thai": "เดี๋ยว. โค้ด...ยังหยุดไม่สนิท.",
						"hindi": "रुको। कोड... अभी पूरी तरह से रुका नहीं है।"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "시스템의 심장이 잠시 멈췄으나, 도시의 심연에서는 더 거대한 그림자가 깨어나고 있었다.",
						"english": "The system's heart stopped for a moment, but a greater shadow was awakening in the city's abyss.",
						"japanese": "システムの中枢は一時停止したが、都市の深淵ではさらに巨大な影が目覚め始めていた。",
						"chinese": "系统的心脏暂时停止了跳动，但在城市的深渊中，一个更巨大的阴影正在苏醒。",
						"french": "Le cœur du système s'est arrêté un instant, mais une ombre plus grande s'éveillait dans l'abysse de la ville.",
						"spanish": "El corazón del sistema se detuvo un instante, pero una sombra aún mayor despertaba en el abismo de la ciudad.",
						"vietnamese": "Trái tim của hệ thống đã ngừng đập trong chốc lát, nhưng một bóng tối lớn hơn đang thức tỉnh trong vực sâu của thành phố.",
						"thai": "หัวใจของระบบหยุดนิ่งไปชั่วขณะ แต่เงาที่ยิ่งใหญ่กว่ากำลังตื่นขึ้นในห้วงลึกของเมือง",
						"hindi": "सिस्टम का दिल एक पल के लिए रुक गया, लेकिन शहर की खाई में एक बड़ी छाया जाग रही थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "회귀하는 코드가 도시를 다시 집어삼켰다. 절망적인 루프 속으로.",
						"english": "The reverting code re-engulfed the city. Into a desperate loop.",
						"japanese": "回帰するコードが再び都市を飲み込んだ。絶望的なループの中へ。",
						"chinese": "回归的代码再次吞噬了城市。陷入绝望的循环。",
						"french": "Le code régressif a de nouveau englouti la ville. Dans une boucle désespérée.",
						"spanish": "El código regresivo volvió a engullir la ciudad. En un bucle desesperado.",
						"vietnamese": "Mã hồi quy lại nuốt chửng thành phố. Vào một vòng lặp tuyệt vọng.",
						"thai": "โค้ดที่ย้อนกลับได้กลืนกินเมืองอีกครั้ง เข้าสู่วังวนที่สิ้นหวัง",
						"hindi": "पुनरावर्ती कोड ने शहर को फिर से निगल लिया। एक निराशाजनक लूप में।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "하하하! 덧없는 발버둥이로군. 영원히 고통받아라!",
						"english": "Hahaha! A futile struggle. Suffer forever!",
						"japanese": "ハハハ！儚い足掻きだな。永遠に苦しめ！",
						"chinese": "哈哈哈！徒劳的挣扎。永远地受苦吧！",
						"french": "Hahaha ! Une lutte futile. Souffrez éternellement !",
						"spanish": "¡Jajaja! Una lucha inútil. ¡Sufre para siempre!",
						"vietnamese": "Hahaha! Một cuộc giằng co vô ích. Hãy chịu đựng mãi mãi!",
						"thai": "ฮ่าฮ่าฮ่า! การดิ้นรนที่ไร้ประโยชน์ จงทนทุกข์ตลอดไป!",
						"hindi": "हाहाहा! व्यर्थ का संघर्ष। हमेशा के लिए पीड़ित रहो!"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어. 반드시 이 코드를 부술 거야.",
						"english": "Damn it... It's not over yet. I will definitely break this code.",
						"japanese": "くそ…まだ終わってない。必ずこのコードを破壊する。",
						"chinese": "该死…还没结束。我一定要打破这个代码。",
						"french": "Mince… Ce n'est pas encore fini. Je briserai ce code, c'est sûr.",
						"spanish": "Maldita sea… Esto no ha terminado todavía. Definitivamente romperé este código.",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc. Tôi nhất định sẽ phá hủy mã này.",
						"thai": "ให้ตายสิ...ยังไม่จบ. ฉันจะต้องทำลายโค้ดนี้ให้ได้.",
						"hindi": "धिक्कार है... यह अभी खत्म नहीं हुआ है। मैं इस कोड को निश्चित रूप से तोड़ूंगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시는 미쳐가고 있었다. 시스템은 끝없는 오류를 토해냈고.",
			"같은 코드, 같은 비명, 같은 절망이 반복되었다.",
			"이것은 단순한 고장이 아니었다. 누군가의 의도된 메시지.",
			"과거가 현재를 옥죄고 있었다. 벗어날 수 없는 감시의 굴레 속에서."
		],
		"english": [
			"The city was going mad. The system spewed endless errors.",
			"The same code, the same screams, the same despair repeated.",
			"This was no mere malfunction. It was someone's intended message.",
			"The past was strangling the present. Trapped in an inescapable loop of surveillance."
		],
		"japanese": [
			"都市は狂っていた。システムは終わりのないエラーを吐き出し続けた。",
			"同じコード、同じ悲鳴、同じ絶望が繰り返された。",
			"これは単なる故障ではなかった。誰かの意図的なメッセージ。",
			"過去が現在を縛りつけていた。逃れられない監視の輪の中で。"
		],
		"chinese": [
			"城市正在疯狂。系统不断吐出错误。",
			"相同的代码，相同的尖叫，相同的绝望重复着。",
			"这不仅仅是故障。这是某人故意的留言。",
			"过去正在扼杀现在。被困在无法逃脱的监视循环中。"
		],
		"french": [
			"La ville sombrait dans la folie. Le système crachait des erreurs sans fin.",
			"Le même code, les mêmes cris, le même désespoir se répétaient.",
			"Ce n'était pas une simple panne. C'était un message intentionnel de quelqu'un.",
			"Le passé étouffait le présent. Piégés dans un cycle de surveillance inéluctable."
		],
		"spanish": [
			"La ciudad se estaba volviendo loca. El sistema escupía errores sin fin.",
			"El mismo código, los mismos gritos, la misma desesperación se repetían.",
			"Esto no era un simple fallo. Era un mensaje intencionado de alguien.",
			"El pasado estaba estrangulando el presente. Atrapados en un bucle de vigilancia ineludible."
		],
		"vietnamese": [
			"Thành phố đang hóa điên. Hệ thống nôn ra lỗi không ngừng.",
			"Cùng một mã, cùng một tiếng thét, cùng một sự tuyệt vọng lặp đi lặp lại.",
			"Đây không phải là một sự cố đơn thuần. Đây là thông điệp có chủ ý của ai đó.",
			"Quá khứ đang siết chặt hiện tại. Mắc kẹt trong vòng lặp giám sát không thể thoát ra."
		],
		"thai": [
			"เมืองกำลังจะคลั่ง ระบบพ่นข้อผิดพลาดไม่หยุดหย่อน",
			"รหัสเดิม เสียงกรีดร้องเดิม ความสิ้นหวังเดิม ซ้ำแล้วซ้ำเล่า",
			"นี่ไม่ใช่แค่ความผิดปกติ แต่มันคือข้อความที่ใครบางคนตั้งใจส่ง",
			"อดีตกําลังรัดคอปัจจุบัน อยู่ภายใต้การเฝ้าระวังที่ไม่อาจหลบหนีได้"
		],
		"hindi": [
			"शहर पागल हो रहा था। सिस्टम अंतहीन त्रुटियों को उगल रहा था।",
			"वही कोड, वही चीखें, वही निराशा दोहराई गई।",
			"यह केवल एक खराबी नहीं थी। यह किसी का इच्छित संदेश था।",
			"अतीत वर्तमान को कस रहा था। निगरानी के एक ऐसे जाल में फंसा हुआ जिससे बचना असंभव था।"
		]
	}
} as const;
