export const scenario_modern_staticecho_8_03 = {
	"scenario_id": "modern_staticecho_8_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 전광판이 일제히 검은 노이즈로 뒤덮였다.",
						"english": "City screens flickered with black static.",
						"japanese": "都市の電光掲示板が黒いノイズに覆われた。",
						"chinese": "城市屏幕被黑色噪点覆盖。",
						"french": "Les écrans de la ville se couvrirent de bruit noir.",
						"spanish": "Las pantallas de la ciudad parpadearon con estática negra.",
						"vietnamese": "Các màn hình thành phố nhấp nháy nhiễu đen.",
						"thai": "จอแสดงผลทั่วเมืองเต็มไปด้วยสัญญาณรบกวนสีดำ",
						"hindi": "शहर के डिस्प्ले काले शोर से झिलमिला उठे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "또 StaticEcho의 공격이야?",
						"english": "StaticEcho again?",
						"japanese": "またStaticEchoの攻撃か？",
						"chinese": "又是StaticEcho的攻击？",
						"french": "Encore une attaque de StaticEcho ?",
						"spanish": "¿Otro ataque de StaticEcho?",
						"vietnamese": "Lại là StaticEcho tấn công sao?",
						"thai": "StaticEcho โจมตีอีกแล้วเหรอ?",
						"hindi": "फिर StaticEcho का हमला?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "잠시만… 단순한 공격이 아니야.",
						"english": "Wait... this isn't just an attack.",
						"japanese": "待て…単純な攻撃じゃない。",
						"chinese": "等等……这不只是简单的攻击。",
						"french": "Attends… ce n'est pas qu'une simple attaque.",
						"spanish": "Espera... esto no es solo un ataque.",
						"vietnamese": "Khoan đã… đây không phải là một cuộc tấn công đơn thuần.",
						"thai": "เดี๋ยวนะ... นี่ไม่ใช่แค่การโจมตีธรรมดา",
						"hindi": "रुको... यह सिर्फ हमला नहीं है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "특정 시스템에 유독 집착하는 듯한 패턴이 감지돼.",
						"english": "A pattern of obsession with specific systems is detected.",
						"japanese": "特定のシステムに執着するようなパターンが検出された。",
						"chinese": "检测到一种似乎对特定系统执着的模式。",
						"french": "Un schéma d'obsession pour des systèmes spécifiques est détecté.",
						"spanish": "Se detecta un patrón de obsesión con sistemas específicos.",
						"vietnamese": "Phát hiện một kiểu mẫu như đang ám ảnh với các hệ thống cụ thể.",
						"thai": "ตรวจพบรูปแบบที่หมกมุ่นกับระบบบางอย่างเป็นพิเศษ",
						"hindi": "विशेष प्रणालियों के प्रति जुनून का एक पैटर्न पाया गया है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 경고 메시지는 무작위가 아니야.",
						"english": "StaticEcho's warnings aren't random.",
						"japanese": "StaticEchoの警告メッセージは、無作為じゃない。",
						"chinese": "StaticEcho的警告信息不是随机的。",
						"french": "Les messages d'avertissement de StaticEcho ne sont pas aléatoires.",
						"spanish": "Los mensajes de StaticEcho no son aleatorios.",
						"vietnamese": "Thông điệp cảnh báo của StaticEcho không phải là ngẫu nhiên.",
						"thai": "ข้อความเตือนของ StaticEcho ไม่ได้สุ่ม",
						"hindi": "StaticEcho के चेतावनी संदेश यादृच्छिक नहीं हैं।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"speaker": "character_1",
					"emotion": "base",
					"content": {
						"korean": "그럼 뭐야?",
						"english": "Then what is it?",
						"japanese": "じゃあ、何？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "¿Entonces qué es?",
						"vietnamese": "Vậy thì sao?",
						"thai": "แล้วมันคืออะไรล่ะ?",
						"hindi": "तो क्या है?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "어떤 '규율'을 어긴 것처럼 보이는 대상들에게만 집중되고 있어.",
						"english": "It's only focused on those who seem to have broken some 'rule'.",
						"japanese": "何らかの「規律」を破ったように見える対象にのみ集中している。",
						"chinese": "它只集中在那些似乎违反了某种“规则”的目标上。",
						"french": "Ça ne se concentre que sur ceux qui semblent avoir enfreint une sorte de 'règle'.",
						"spanish": "Solo se enfoca en aquellos que parecen haber roto alguna 'regla'.",
						"vietnamese": "Nó chỉ tập trung vào những đối tượng dường như đã vi phạm một 'quy tắc' nào đó.",
						"thai": "มันมุ่งเป้าไปที่คนที่ดูเหมือนจะแหก 'กฎ' บางอย่างเท่านั้น",
						"hindi": "यह केवल उन पर केंद्रित है जो किसी 'नियम' का उल्लंघन करते दिखते हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "규율?",
						"english": "A rule?",
						"japanese": "規律？",
						"chinese": "规则？",
						"french": "Une règle ?",
						"spanish": "¿Una regla?",
						"vietnamese": "Quy tắc?",
						"thai": "กฎเหรอ?",
						"hindi": "नियम?"
					}
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "마치… 구시대적인 명령 같아. 누군가에게 복종을 요구하는 듯한.",
						"english": "It's like... an archaic command. Demanding obedience from someone.",
						"japanese": "まるで… 旧時代の命令のようだ。誰かに服従を要求するかのような。",
						"chinese": "就像… 一个过时的命令。要求某人服从。",
						"french": "C'est comme... un ordre archaïque. Exigeant l'obéissance de quelqu'un.",
						"spanish": "Es como... una orden anticuada. Exigiendo obediencia a alguien.",
						"vietnamese": "Giống như... một mệnh lệnh cổ xưa vậy. Yêu cầu ai đó phải phục tùng.",
						"thai": "เหมือน... คำสั่งยุคเก่า ที่บังคับให้ใครบางคนต้องเชื่อฟัง",
						"hindi": "यह... किसी पुराने आदेश जैसा है। जैसे किसी से आज्ञाकारिता की मांग कर रहा हो।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 메시지 속에서 이상한 디지털 서명을 발견했어.",
						"english": "I found a strange digital signature in StaticEcho's message.",
						"japanese": "StaticEchoのメッセージの中に奇妙なデジタル署名を発見した。",
						"chinese": "我在StaticEcho的消息中发现了一个奇怪的数字签名。",
						"french": "J'ai découvert une étrange signature numérique dans le message de StaticEcho.",
						"spanish": "Encontré una extraña firma digital en el mensaje de StaticEcho.",
						"vietnamese": "Tôi đã phát hiện một chữ ký số lạ trong tin nhắn của StaticEcho.",
						"thai": "ฉันเจอXลายเซ็นดิจิทัลแปลกๆ ในข้อความของ StaticEcho",
						"hindi": "मुझे StaticEcho के संदेश में एक अजीब डिजिटल हस्ताक्षर मिला।"
					},
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "현대 기술로는 불가능한, 아주 오래된 암호화 방식이야.",
						"english": "It's a very old encryption method, impossible with modern technology.",
						"japanese": "現代技術では不可能な、非常に古い暗号化方式だ。",
						"chinese": "这是一种非常古老的加密方式，现代技术无法实现。",
						"french": "C'est une méthode de cryptage très ancienne, impossible avec la technologie moderne.",
						"spanish": "Es un método de cifrado muy antiguo, imposible con la tecnología moderna.",
						"vietnamese": "Đó là một phương pháp mã hóa rất cổ xưa, bất khả thi với công nghệ hiện đại.",
						"thai": "มันเป็นวิธีการเข้ารหัสที่เก่าแก่มาก ซึ่งเป็นไปไม่ได้ด้วยเทคโนโลยีสมัยใหม่",
						"hindi": "यह एक बहुत पुरानी एन्क्रिप्शन विधि है, जो आधुनिक तकनीक से असंभव है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…과거의 유물이라는 거야?",
						"english": "...You mean it's an artifact from the past?",
						"japanese": "…過去の遺物だって言うのか？",
						"chinese": "……你是说这是过去的遗物？",
						"french": "...Tu veux dire que c'est une relique du passé ?",
						"spanish": "...¿Quieres decir que es una reliquia del pasado?",
						"vietnamese": "...Ý cậu là nó là một di vật từ quá khứ ư?",
						"thai": "...หมายความว่ามันเป็นโบราณวัตถุจากอดีตเหรอ?",
						"hindi": "...क्या तुम्हारा मतलब यह अतीत का अवशेष है?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "섬뜩한 기시감이 들어. 데이터 자체가 살아있는 것처럼…",
						"english": "I'm getting an eerie sense of déjà vu. As if the data itself is alive...",
						"japanese": "不気味なデジャヴを感じる。データ自体が生きているかのように…",
						"chinese": "我有一种毛骨悚然的似曾相识感。仿佛数据本身是活的…",
						"french": "J'ai une étrange sensation de déjà-vu. Comme si les données elles-mêmes étaient vivantes...",
						"spanish": "Tengo una inquietante sensación de déjà vu. Como si los datos mismos estuvieran vivos...",
						"vietnamese": "Tôi có cảm giác deja vu rợn người. Như thể chính dữ liệu đang sống...",
						"thai": "ฉันรู้สึกเหมือนเห็นภาพหลอนน่าขนลุก ราวกับว่าข้อมูลนั้นมีชีวิต...",
						"hindi": "मुझे एक डरावनी déjà vu की भावना हो रही है। जैसे कि डेटा खुद ही जीवित हो..."
					}
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bex",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "angry",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "이 패턴이 선명해지고 있어. StaticEcho는 무언가를 강요하고 있어.",
						"english": "This pattern is becoming clearer. StaticEcho is forcing something.",
						"japanese": "このパターンが鮮明になってきている。StaticEchoは何かを強要している。",
						"chinese": "这个模式变得越来越清晰。StaticEcho正在强加某种东西。",
						"french": "Ce schéma devient plus clair. StaticEcho est en train d'imposer quelque chose.",
						"spanish": "Este patrón se está volviendo más claro. StaticEcho está imponiendo algo.",
						"vietnamese": "Mẫu hình này đang trở nên rõ ràng hơn. StaticEcho đang ép buộc điều gì đó.",
						"thai": "รูปแบบนี้ชัดเจนขึ้นเรื่อยๆ StaticEcho กำลังบังคับบางอย่าง",
						"hindi": "यह पैटर्न और स्पष्ट होता जा रहा है। StaticEcho कुछ थोप रहा है।"
					}
				},
				{
					"content": {
						"korean": "더 이상 당할 수 없어. 막아야 해.",
						"english": "We can't take this anymore. We have to stop it.",
						"japanese": "もうこれ以上やられっぱなしではいられない。止めなければ。",
						"chinese": "我们不能再忍受了。必须阻止它。",
						"french": "On ne peut plus supporter ça. Il faut l'arrêter.",
						"spanish": "No podemos aguantar más. Tenemos que detenerlo.",
						"vietnamese": "Không thể chịu đựng thêm nữa. Phải ngăn chặn nó.",
						"thai": "เราทนไม่ไหวแล้ว ต้องหยุดมัน",
						"hindi": "हम और बर्दाश्त नहीं कर सकते। इसे रोकना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "…그를 막지 못하면 도시 전체가 그의 '규율' 아래 놓이게 될 거야.",
						"english": "...If we can't stop him, the entire city will fall under his 'rule'.",
						"japanese": "...彼を止めなければ、都市全体が彼の「規律」の下に置かれるだろう。",
						"chinese": "...如果阻止不了他，整个城市都将置于他的“规矩”之下。",
						"french": "...Si nous ne l'arrêtons pas, toute la ville tombera sous sa 'règle'.",
						"spanish": "...Si no lo detenemos, toda la ciudad caerá bajo su 'disciplina'.",
						"vietnamese": "...Nếu không ngăn chặn hắn, toàn bộ thành phố sẽ nằm dưới 'quy luật' của hắn.",
						"thai": "...ถ้าเราหยุดเขาไม่ได้ ทั้งเมืองจะต้องตกอยู่ใต้ 'กฎเกณฑ์' ของเขา",
						"hindi": "...अगर हम उसे नहीं रोक पाए, तो पूरा शहर उसकी 'हुकूमत' के अधीन हो जाएगा।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 알 수 없는 존재의 강렬한 디지털 파동이 느껴진다.",
						"english": "A powerful digital pulse from an unknown entity is felt in the darkness.",
						"japanese": "闇の中で、未知の存在からの強烈なデジタル波動が感じられる。",
						"chinese": "黑暗中，感受到一股来自未知存在的强烈数字波动。",
						"french": "Une puissante impulsion numérique d'une entité inconnue se fait sentir dans l'obscurité.",
						"spanish": "Una poderosa pulsación digital de una entidad desconocida se siente en la oscuridad.",
						"vietnamese": "Trong bóng tối, cảm nhận được một làn sóng kỹ thuật số mạnh mẽ từ một thực thể không xác định.",
						"thai": "สัมผัสได้ถึงคลื่นดิจิทัลอันทรงพลังจากสิ่งมีชีวิตที่ไม่รู้จักในความมืด",
						"hindi": "अंधेरे में एक अज्ञात इकाई से शक्तिशाली डिजिटल स्पंदन महसूस होता है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나의 경고를 무시하고 여기까지 온 오만한 자들.",
						"english": "Arrogant fools who ignored my warning and came this far.",
						"japanese": "私の警告を無視してここまで来た傲慢な者たちよ。",
						"chinese": "无视我的警告，走到这里来的傲慢之人。",
						"french": "Fiers insensés qui avez ignoré mon avertissement et êtes venus jusqu'ici.",
						"spanish": "Arrogantes que ignoraron mi advertencia y llegaron hasta aquí.",
						"vietnamese": "Những kẻ ngạo mạn đã phớt lờ lời cảnh báo của ta mà đến tận đây.",
						"thai": "พวกคนหยิ่งผยองที่ละเลยคำเตือนของข้าแล้วมาถึงที่นี่",
						"hindi": "अभिमानी मूर्ख जिन्होंने मेरी चेतावनी को अनदेखा किया और इतनी दूर आ गए।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "너희의 '자유'는 혼란만을 불러올 뿐이다. 질서를 받아들여라.",
						"english": "Your 'freedom' only brings chaos. Embrace order.",
						"japanese": "お前たちの「自由」は混乱を招くだけだ。秩序を受け入れろ。",
						"chinese": "你们的“自由”只会带来混乱。接受秩序吧。",
						"french": "Votre 'liberté' n'apporte que le chaos. Acceptez l'ordre.",
						"spanish": "Vuestra 'libertad' solo trae caos. Aceptad el orden.",
						"vietnamese": "'Tự do' của các ngươi chỉ mang lại hỗn loạn. Hãy chấp nhận trật tự đi.",
						"thai": " 'อิสรภาพ' ของพวกเจ้ามีแต่จะนำมาซึ่งความวุ่นวาย จงยอมรับระเบียบเสีย",
						"hindi": "तुम्हारी 'स्वतंत्रता' केवल अराजकता लाती है। व्यवस्था को अपनाओ।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "너의 명령에 따를 순 없어!",
						"english": "I can't obey your command!",
						"japanese": "お前の命令には従えない！",
						"chinese": "我不能听从你的命令！",
						"french": "Je ne peux pas obéir à tes ordres !",
						"spanish": "¡No puedo obedecer tus órdenes!",
						"vietnamese": "Tôi không thể tuân theo mệnh lệnh của ngươi!",
						"thai": "ข้าไม่อาจทำตามคำสั่งของเจ้าได้!",
						"hindi": "मैं तुम्हारे आदेश का पालन नहीं कर सकता!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "후회하게 될 것이다.",
						"english": "You will regret this.",
						"japanese": "後悔することになるだろう。",
						"chinese": "你会后悔的。",
						"french": "Tu le regretteras.",
						"spanish": "Lo lamentarás.",
						"vietnamese": "Ngươi sẽ phải hối hận.",
						"thai": "เจ้าจะต้องเสียใจ",
						"hindi": "तुम्हें इसका पछतावा होगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "angry",
					"content": {
						"korean": "네놈의 '자유'는 곧 너를 멸망시킬 것이다.",
						"english": "Your 'freedom' will soon destroy you.",
						"japanese": "お前の「自由」はやがてお前を滅ぼすだろう。",
						"chinese": "你的“自由”很快就会毁灭你。",
						"french": "Ta 'liberté' te détruira bientôt.",
						"spanish": "Tu 'libertad' pronto te destruirá.",
						"vietnamese": "'Tự do' của ngươi sẽ sớm hủy diệt ngươi thôi.",
						"thai": " 'อิสรภาพ' ของเจ้าจะทำลายเจ้าในไม่ช้า",
						"hindi": "तुम्हारी 'स्वतंत्रता' तुम्हें शीघ्र ही नष्ट कर देगी।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시 한번.",
						"english": "It's not over yet... One more time.",
						"japanese": "まだだ… もう一度。",
						"chinese": "还没完… 再来一次。",
						"french": "Pas encore fini… Encore une fois.",
						"spanish": "No ha terminado aún… Una vez más.",
						"vietnamese": "Chưa xong đâu… Thêm lần nữa.",
						"thai": "ยังไม่จบหรอก… อีกครั้ง.",
						"hindi": "अभी खत्म नहीं हुआ… एक बार फिर।"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 용기. 결국 너희도 그 '규칙'을 어기게 될 것이다.",
						"english": "...Foolish courage. In the end, you too will break that 'rule'.",
						"japanese": "...愚かな勇気。結局、お前たちもその「規則」を破ることになるだろう。",
						"chinese": "...愚蠢的勇气。最终，你们也会打破那个“规则”。",
						"french": "...Courage insensé. Finalement, vous aussi briserez cette 'règle'.",
						"spanish": "...Estúpido valor. Al final, vosotros también romperéis esa 'regla'.",
						"vietnamese": "...Lòng dũng cảm ngu xuẩn. Cuối cùng, các ngươi cũng sẽ phá vỡ 'quy tắc' đó.",
						"thai": "...ความกล้าหาญที่โง่เขลา สุดท้ายพวกเจ้าก็จะแหก 'กฎ' นั้นเช่นกัน",
						"hindi": "...मूर्खतापूर्ण साहस। अंत में, तुम भी उस 'नियम' को तोड़ दोगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているんだ？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Ngươi đang nói gì vậy?",
						"thai": "เจ้าพูดอะไรน่ะ?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "StaticEcho의 메시지는 잠시 침묵했다. 그러나 어둠은 완전히 걷히지 않았다.",
						"english": "StaticEcho's message fell silent for a moment. But the darkness had not fully receded.",
						"japanese": "StaticEchoのメッセージは一時的に沈黙した。しかし、闇は完全には晴れなかった。",
						"chinese": "StaticEcho的消息暂时沉默了。然而，黑暗并未完全散去。",
						"french": "Le message de StaticEcho se tut un instant. Mais l'obscurité ne s'était pas complètement dissipée.",
						"spanish": "El mensaje de StaticEcho se silenció por un momento. Pero la oscuridad no se había disipado por completo.",
						"vietnamese": "Thông điệp của StaticEcho im lặng trong chốc lát. Nhưng bóng tối vẫn chưa hoàn toàn tan biến.",
						"thai": "ข้อความของ StaticEcho เงียบลงชั่วขณะ แต่ความมืดยังไม่จางหายไปโดยสมบูรณ์",
						"hindi": "StaticEcho का संदेश कुछ देर के लिए शांत हो गया। लेकिन अंधेरा पूरी तरह से छंटा नहीं था।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"도시의 모든 통신망이 마비되었다.",
			"정체불명의 사이버 테러리스트, StaticEcho.",
			"그의 메시지는 단순한 혼란을 넘어, 어떤 '규율'을 속삭이는 듯했다.",
			"디지털 보안 전문가 벡스는 섬뜩한 기시감을 느낀다.",
			"이것은 경고인가, 아니면 거부할 수 없는 명령인가?"
		],
		"english": [
			"All city communications went dark.",
			"StaticEcho, an unknown cyber terrorist.",
			"His message, more than chaos, whispered a 'rule'.",
			"Digital security expert, Vex, felt an eerie sense of déjà vu.",
			"Is this a warning, or an undeniable command?"
		],
		"japanese": [
			"都市の全通信網が麻痺した。",
			"正体不明のサイバーテロリスト、StaticEcho。",
			"彼のメッセージは、単なる混乱を超え、ある「規律」を囁くようだった。",
			"デジタルセキュリティ専門家ベックスは、不気味なデジャヴを感じる。",
			"これは警告か、それとも拒否できない命令なのか？"
		],
		"chinese": [
			"城市所有通讯瘫痪。",
			"不明身份的网络恐怖分子，StaticEcho。",
			"他的信息，超越了单纯的混乱，仿佛低语着某种“规矩”。",
			"数字安全专家维克斯，感到一种诡异的似曾相识。",
			"这是警告，还是无法拒绝的命令？"
		],
		"french": [
			"Toutes les communications urbaines sont coupées.",
			"StaticEcho, un cyber-terroriste inconnu.",
			"Son message, plus que du chaos, murmurait une 'règle'.",
			"Vex, l'expert en sécurité numérique, ressent un étrange déjà-vu.",
			"Est-ce un avertissement, ou un ordre irréfutable ?"
		],
		"spanish": [
			"Todas las comunicaciones de la ciudad cayeron.",
			"StaticEcho, un ciberterrorista desconocido.",
			"Su mensaje, más que caos, susurraba una 'regla'.",
			"Vex, el experto en seguridad digital, sintió un inquietante déjà vu.",
			"¿Es esto una advertencia, o una orden innegable?"
		],
		"vietnamese": [
			"Mọi liên lạc trong thành phố tê liệt.",
			"StaticEcho, một tên khủng bố mạng không rõ danh tính.",
			"Thông điệp của hắn, hơn cả sự hỗn loạn, dường như thì thầm một 'quy tắc'.",
			"Chuyên gia bảo mật kỹ thuật số Vex cảm thấy một sự thân thuộc rùng rợn.",
			"Đây là một lời cảnh báo, hay một mệnh lệnh không thể chối từ?"
		],
		"thai": [
			"ระบบสื่อสารทั่วเมืองถูกตัดขาด",
			"StaticEcho ผู้ก่อการร้ายไซเบอร์นิรนาม",
			"ข้อความของเขา ไม่ใช่แค่ความสับสน แต่มันกระซิบถึง 'กฎ' บางอย่าง",
			"เวกซ์ ผู้เชี่ยวชาญด้านความปลอดภัยดิจิทัล สัมผัสได้ถึงความรู้สึกคุ้นเคยที่น่าขนลุก",
			"นี่คือคำเตือน หรือคำสั่งที่ไม่อาจปฏิเสธได้?"
		],
		"hindi": [
			"शहर के सभी संचार ठप हो गए।",
			"स्टैटिकइको, एक अज्ञात साइबर आतंकवादी।",
			"उसका संदेश, सिर्फ अराजकता से बढ़कर, एक 'नियम' फुसफुसा रहा था।",
			"डिजिटल सुरक्षा विशेषज्ञ वेक्स को एक अजीब déjà vu महसूस हुआ।",
			"क्या यह एक चेतावनी है, या एक अकाट्य आदेश?"
		]
	}
} as const;
