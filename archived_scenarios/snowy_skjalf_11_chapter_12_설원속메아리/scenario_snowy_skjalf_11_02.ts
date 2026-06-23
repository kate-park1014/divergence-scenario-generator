export const scenario_snowy_skjalf_11_02 = {
	"scenario_id": "snowy_skjalf_11_02",
	"order": 2,
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
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 바이킹 전당. 거대한 홀이 오랜 영광을 간직하고 있었다.",
						"english": "The Frozen Viking Hall. A vast hall holding ancient glory.",
						"japanese": "凍てついたヴァイキングの広間。巨大なホールが古き栄光を湛えていた。",
						"chinese": "冰封的维京大厅。巨大的殿堂承载着古老的荣耀。",
						"french": "Le Hall Viking Gelé. Une immense salle conservant une gloire ancestrale.",
						"spanish": "El Salón Vikingo Congelado. Un vasto salón que conservaba una gloria milenaria.",
						"vietnamese": "Sảnh Đường Viking Băng Giá. Một đại sảnh rộng lớn chứa đựng vinh quang cổ xưa.",
						"thai": "โถงไวกิ้งน้ำแข็ง โถงใหญ่ที่เก็บรักษาความรุ่งโรจน์อันยาวนาน",
						"hindi": "जमा हुआ वाइकिंग हॉल। एक विशाल हॉल जिसमें प्राचीन गौरव समाया हुआ था।"
					}
				},
				{
					"emotion": "happy",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "와… 오로라가 보여주는 환영이 진짜 같아.",
						"english": "Wow... the visions the aurora shows look so real.",
						"japanese": "わあ…オーロラが見せる幻影が本物みたいだ。",
						"chinese": "哇……极光展现的幻象好真实啊。",
						"french": "Waouh... les visions que l'aurore montre semblent si réelles.",
						"spanish": "Vaya... las visiones que muestra la aurora parecen tan reales.",
						"vietnamese": "Oa... ảo ảnh cực quang chiếu rọi trông thật quá.",
						"thai": "ว้าว... ภาพมายาที่แสงเหนือแสดงมันเหมือนจริงมาก",
						"hindi": "वाह... ऑरोरा जो दृश्य दिखाती है, वो असली लगते हैं।"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "네. 고대 바이킹 전사들의 흔적이죠. 영광스러운 과거를 보여주는 듯하네요.",
						"english": "Yes. Traces of ancient Viking warriors. They seem to show a glorious past.",
						"japanese": "はい。古代ヴァイキング戦士たちの痕跡ですね。栄光ある過去を見せているようです。",
						"chinese": "是的。这是古代维京战士的遗迹。它们似乎展现着辉煌的过去。",
						"french": "Oui. Les traces d'anciens guerriers vikings. Elles semblent montrer un passé glorieux.",
						"spanish": "Sí. Rastros de antiguos guerreros vikingos. Parecen mostrar un pasado glorioso.",
						"vietnamese": "Vâng. Dấu tích của những chiến binh Viking cổ đại. Dường như chúng đang kể về một quá khứ huy hoàng.",
						"thai": "ใช่ ร่องรอยของนักรบไวกิ้งโบราณ ดูเหมือนจะแสดงอดีตที่รุ่งโรจน์",
						"hindi": "हाँ। प्राचीन वाइकिंग योद्धाओं के निशान हैं। वे एक गौरवशाली अतीत दिखाते हुए लगते हैं।"
					},
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "대단해. 마치 살아있는 것 같아.",
						"english": "Amazing. It's as if they're alive.",
						"japanese": "すごい。まるで生きているみたいだ。",
						"chinese": "太棒了。仿佛活生生的一样。",
						"french": "Incroyable. C'est comme s'ils étaient vivants.",
						"spanish": "Asombroso. Es como si estuvieran vivos.",
						"vietnamese": "Thật tuyệt. Cứ như thể chúng đang sống vậy.",
						"thai": "น่าทึ่ง เหมือนมีชีวิต",
						"hindi": "कमाल है। जैसे जीवित हों।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 좀 이상하네요.",
						"english": "But... something feels off.",
						"japanese": "でも…少し変ですね。",
						"chinese": "但是……有点奇怪。",
						"french": "Mais... quelque chose cloche.",
						"spanish": "Pero... algo no cuadra.",
						"vietnamese": "Nhưng mà... hơi lạ.",
						"thai": "แต่... มันแปลกๆ นะ",
						"hindi": "लेकिन... कुछ अजीब है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이 룬 문자들… 전사들의 이름인가요? 그런데, 뭔가 빠진 것 같아요.",
						"english": "These runes... are they the warriors' names? But, something seems to be missing.",
						"japanese": "このルーン文字…戦士たちの名前でしょうか？でも、何かが欠けているような気がします。",
						"chinese": "这些符文……是战士们的名字吗？但是，好像少了些什么。",
						"french": "Ces runes... sont-elles les noms des guerriers ? Mais, il semble que quelque chose manque.",
						"spanish": "Estas runas... ¿son los nombres de los guerreros? Pero, algo parece faltar.",
						"vietnamese": "Những ký tự rune này... có phải là tên của các chiến binh không? Nhưng hình như thiếu mất gì đó.",
						"thai": "อักษรรูนเหล่านี้... เป็นชื่อของนักรบเหรอ? แต่ดูเหมือนมีบางอย่างขาดหายไป",
						"hindi": "ये रुन अक्षर... क्या ये योद्धाओं के नाम हैं? लेकिन, कुछ गायब लग रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "전사들이 움직이고 있어! 저쪽으로 가라는 신호인가?",
						"english": "Warriors are moving! Is that a sign to go that way?",
						"japanese": "戦士たちが動いている！あちらへ行けという合図か？",
						"chinese": "战士们在移动！这是让我们往那边走的信号吗？",
						"french": "Les guerriers bougent ! Est-ce un signe d'aller par là ?",
						"spanish": "¡Los guerreros se mueven! ¿Es una señal para ir por allí?",
						"vietnamese": "Các chiến binh đang di chuyển! Đó có phải là tín hiệu để đi lối đó không?",
						"thai": "เหล่านักรบกำลังเคลื่อนไหว! นั่นเป็นสัญญาณให้ไปทางนั้นหรือเปล่า?",
						"hindi": "योद्धा चल रहे हैं! क्या यह उस रास्ते जाने का संकेत है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니요, 기다려요! 저들의 눈을 보세요. 생기가 없어요. 공허해요.",
						"english": "No, wait! Look at their eyes. Lifeless. Empty.",
						"japanese": "いいえ、待って！彼らの目を見てください。生気がない。虚ろです。",
						"chinese": "不，等等！看他们的眼睛。没有生气。空洞。",
						"french": "Non, attendez ! Regardez leurs yeux. Sans vie. Vides.",
						"spanish": "¡No, esperen! Miren sus ojos. Sin vida. Vacíos.",
						"vietnamese": "Không, đợi đã! Nhìn vào mắt họ kìa. Không có sự sống. Trống rỗng.",
						"thai": "ไม่สิ, เดี๋ยว! ดูตาพวกเขาสิ. ไร้ชีวิตชีวา. ว่างเปล่า.",
						"hindi": "नहीं, रुको! उनकी आँखें देखो। निर्जीव। खाली।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그냥 환영이라서 그런 거 아닐까?",
						"english": "Maybe it's just because they're illusions?",
						"japanese": "ただの幻影だから、そうなんじゃない？",
						"chinese": "也许只是因为他们是幻影？",
						"french": "N'est-ce pas juste parce que ce sont des illusions ?",
						"spanish": "¿Quizás es solo porque son ilusiones?",
						"vietnamese": "Chẳng phải vì họ chỉ là ảo ảnh thôi sao?",
						"thai": "อาจเป็นเพราะพวกเขาเป็นแค่ภาพลวงตาหรือเปล่า?",
						"hindi": "शायद यह सिर्फ इसलिए है क्योंकि वे भ्रम हैं?"
					},
					"speaker": "character_2",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니요. 뭔가… 우리를 유인하려는 것 같아요.",
						"english": "No. Something… seems to be luring us.",
						"japanese": "いいえ。何か…私たちを誘い込もうとしているようです。",
						"chinese": "不。有什么东西…好像想引诱我们。",
						"french": "Non. Quelque chose… semble vouloir nous attirer.",
						"spanish": "No. Algo… parece estar atrayéndonos.",
						"vietnamese": "Không. Dường như có thứ gì đó… đang cố dụ dỗ chúng ta.",
						"thai": "ไม่สิ. บางสิ่ง… ดูเหมือนกำลังหลอกล่อเราอยู่.",
						"hindi": "नहीं। कुछ… हमें फँसाने की कोशिश कर रहा है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환영의 숫자가 늘었다. 전당 안이 움직이는 그림자로 가득 찼다.",
						"english": "The number of illusions has grown. The hall is filled with moving shadows.",
						"japanese": "幻影の数が増えた。広間は動く影で満たされた。",
						"chinese": "幻影的数量增加了。大厅里充满了移动的影子。",
						"french": "Le nombre d'illusions a augmenté. La salle est remplie d'ombres mouvantes.",
						"spanish": "El número de ilusiones ha crecido. El pasillo está lleno de sombras en movimiento.",
						"vietnamese": "Số lượng ảo ảnh đã tăng lên. Đại sảnh tràn ngập những bóng hình chuyển động.",
						"thai": "จำนวนภาพลวงตาเพิ่มขึ้น. ห้องโถงเต็มไปด้วยเงาที่เคลื่อนไหว.",
						"hindi": "भ्रमों की संख्या बढ़ गई है। हॉल हिलती हुई परछाइयों से भर गया है।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "머리가… 갑자기 멍해진 것 같아. 내가 뭘 보려 했더라?",
						"english": "My head… suddenly feels hazy. What was I trying to see?",
						"japanese": "頭が…急にぼんやりしてきたみたい。何を見ようとしていたんだっけ？",
						"chinese": "我的头…突然变得迷糊了。我刚才想看什么来着？",
						"french": "Ma tête… est soudainement embrumée. Qu'est-ce que j'essayais de voir ?",
						"spanish": "Mi cabeza… de repente se siente confusa. ¿Qué estaba intentando ver?",
						"vietnamese": "Đầu mình… đột nhiên cảm thấy mơ hồ. Mình đã định nhìn thấy gì nhỉ?",
						"thai": "หัวของฉัน… จู่ๆ ก็รู้สึกมึนงง. ฉันพยายามจะดูอะไรนะ?",
						"hindi": "मेरा सिर… अचानक धुंधला सा लग रहा है। मैं क्या देखने की कोशिश कर रहा था?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "기억의 단절… 역시 이 환영들 때문이에요.",
						"english": "A break in memory… It's these illusions, after all.",
						"japanese": "記憶の断絶…やはりこの幻影たちのせいだ。",
						"chinese": "记忆中断…果然是因为这些幻影。",
						"french": "Une rupture de mémoire… C'est bien à cause de ces illusions.",
						"spanish": "Una laguna en la memoria… Es por estas ilusiones, después de todo.",
						"vietnamese": "Mất trí nhớ… Đúng là do những ảo ảnh này.",
						"thai": "ความทรงจำที่ขาดหายไป… เป็นเพราะภาพลวงตาเหล่านี้จริงๆ.",
						"hindi": "याददाश्त का टूटना… आखिरकार यह इन भ्रमों के कारण है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 기록이 아니에요. 누군가 기억을 조작하고 있어요.",
						"english": "This isn't just a simple record. Someone is manipulating memories.",
						"japanese": "これは単なる記録じゃない。誰かが記憶を操作している。",
						"chinese": "这不是简单的记录。有人在操纵记忆。",
						"french": "Ce n'est pas un simple enregistrement. Quelqu'un manipule les souvenirs.",
						"spanish": "Esto no es solo un simple registro. Alguien está manipulando los recuerdos.",
						"vietnamese": "Đây không phải chỉ là một ghi chép đơn thuần. Ai đó đang thao túng ký ức.",
						"thai": "นี่ไม่ใช่แค่บันทึกธรรมดา. มีใครบางคนกำลังบงการความทรงจำ.",
						"hindi": "यह सिर्फ एक साधारण रिकॉर्ड नहीं है। कोई यादों में हेरफेर कर रहा है।"
					},
					"speaker": "eira",
					"emotion": "angry"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "누가 이런 짓을?",
						"english": "Who would do such a thing?",
						"japanese": "誰がこんなことを？",
						"chinese": "谁会做这种事？",
						"french": "Qui ferait une chose pareille ?",
						"spanish": "¿Quién haría tal cosa?",
						"vietnamese": "Ai lại làm chuyện này?",
						"thai": "ใครกันที่ทำแบบนี้?",
						"hindi": "ऐसा कौन करेगा?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "전당의 가장 깊은 곳. 오로라가 격렬하게 휘몰아쳤다.",
						"english": "The deepest part of the hall. The aurora raged violently.",
						"japanese": "広間の最深部。オーロラが激しく吹き荒れた。",
						"chinese": "大厅最深处。极光猛烈地呼啸着。",
						"french": "La partie la plus profonde de la salle. L'aurore déchaînait sa fureur.",
						"spanish": "La parte más profunda del pasillo. La aurora rugió violentamente.",
						"vietnamese": "Nơi sâu nhất của đại sảnh. Cực quang cuộn trào dữ dội.",
						"thai": "ส่วนที่ลึกที่สุดของห้องโถง. แสงออโรร่าพัดกระหน่ำอย่างรุนแรง.",
						"hindi": "हॉल का सबसे गहरा हिस्सा। अरोरा ने प्रचंड रूप से कहर बरपाया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이곳의 영광은… 모두 거짓이에요. 잃어버린 기억으로 만든 허상이야.",
						"english": "The glory of this place... it's all a lie. An illusion made from lost memories.",
						"japanese": "この地の栄光は…すべて偽りです。失われた記憶で作られた虚像にすぎません。",
						"chinese": "这里的荣光……都是假的。是用失去的记忆编织而成的虚像。",
						"french": "La gloire de ce lieu… tout est mensonge. Une illusion forgée à partir de souvenirs perdus.",
						"spanish": "La gloria de este lugar… todo es mentira. Una ilusión creada a partir de recuerdos perdidos.",
						"vietnamese": "Vinh quang nơi đây… tất cả chỉ là dối trá. Một ảo ảnh tạo ra từ những ký ức đã mất.",
						"thai": "ความรุ่งโรจน์ของที่นี่… ล้วนเป็นของปลอม เป็นภาพลวงตาที่สร้างจากความทรงจำที่หายไป",
						"hindi": "इस जगह की महिमा… सब झूठ है। खोई हुई यादों से बना एक भ्रम है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 저 환영의 끝에 있는 건…?",
						"english": "Then what's at the end of that illusion…?",
						"japanese": "では、あの幻影の先にいるのは…？",
						"chinese": "那么，那个幻影的尽头是……？",
						"french": "Alors, qu'y a-t-il au bout de cette illusion… ?",
						"spanish": "¿Entonces qué hay al final de esa ilusión…?",
						"vietnamese": "Vậy thứ ở cuối ảo ảnh đó là…?",
						"thai": "แล้วสิ่งที่อยู่สุดปลายของภาพลวงตานั่นคือ…?",
						"hindi": "तो उस भ्रम के अंत में क्या है…?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "왜곡된 영광을 지키려는… 수호자겠죠. 진실을 감추기 위해.",
						"english": "A guardian, trying to protect this distorted glory, I suppose. To hide the truth.",
						"japanese": "歪んだ栄光を守ろうとする…守護者でしょう。真実を隠すために。",
						"chinese": "是守护者吧……为了守护这扭曲的荣光。为了掩盖真相。",
						"french": "Un gardien, je suppose… cherchant à protéger cette gloire distordue. Pour cacher la vérité.",
						"spanish": "Un guardián, supongo… intentando proteger esta gloria distorsionada. Para ocultar la verdad.",
						"vietnamese": "Chắc là kẻ bảo vệ… cố gắng giữ gìn vinh quang méo mó này. Để che giấu sự thật.",
						"thai": "คงจะเป็น…ผู้พิทักษ์ที่พยายามปกป้องความรุ่งโรจน์ที่บิดเบือนนี้ เพื่อซ่อนความจริง",
						"hindi": "विकृत महिमा की रक्षा करने वाला… एक संरक्षक, शायद। सच्चाई छिपाने के लिए।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "도망칠 순 없어. 저 너머에 진실이 있을 거야.",
						"english": "There's no escape. The truth must be beyond there.",
						"japanese": "逃れることはできない。あの先に真実があるはずだ。",
						"chinese": "无法逃避。真相就在那里。",
						"french": "On ne peut pas s'échapper. La vérité doit se trouver au-delà.",
						"spanish": "No podemos escapar. La verdad debe estar más allá.",
						"vietnamese": "Không thể trốn thoát. Sự thật phải nằm ở phía bên kia.",
						"thai": "หนีไม่พ้นหรอก ความจริงต้องอยู่เหนือกว่านั้น",
						"hindi": "भाग नहीं सकते। सच्चाई वहीं उस पार होगी।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "가자!",
						"english": "Let's go!",
						"japanese": "行こう！",
						"chinese": "走吧！",
						"french": "Allons-y !",
						"spanish": "¡Vamos!",
						"vietnamese": "Đi thôi!",
						"thai": "ไปกันเถอะ!",
						"hindi": "चलो!"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"id": 9
		}
	],
	"prologue": {
		"korean": [
			"얼어붙은 전당. 바이킹의 영광이 잠든 곳.",
			"오로라는 과거를 보여줬다. 웅장하고 찬란하게.",
			"그러나 에이라의 눈엔 — 그 영광 뒤에 숨겨진 공허함이 보였다.",
			"진실은 언제나 아름다운 가면 뒤에 숨어있었다."
		],
		"english": [
			"The Frozen Hall. Where Viking glory slumbers.",
			"The aurora revealed the past. Grand and resplendent.",
			"But in Eira's eyes—she saw the emptiness hidden behind that glory.",
			"The truth was always hidden behind a beautiful mask."
		],
		"japanese": [
			"凍てつく広間。ヴァイキングの栄光が眠る場所。",
			"オーロラは過去を見せた。荘厳に、そして輝かしく。",
			"しかしエイラの目には — その栄光の裏に隠された虚無が見えた。",
			"真実はいつも美しい仮面の下に隠されていた。"
		],
		"chinese": [
			"冰封大厅。维京荣耀长眠之地。",
			"极光展现了过去。宏伟而璀璨。",
			"然而在艾拉眼中——她看到了那荣耀背后隐藏的空虚。",
			"真相总是隐藏在美丽的假面之后。"
		],
		"french": [
			"La Salle Gelée. Là où la gloire viking sommeille.",
			"L'aurore révéla le passé. Grandiose et éclatant.",
			"Mais aux yeux d'Eira — elle vit le vide caché derrière cette gloire.",
			"La vérité était toujours cachée derrière un beau masque."
		],
		"spanish": [
			"La Sala Congelada. Donde la gloria vikinga yace dormida.",
			"La aurora reveló el pasado. Grandioso y resplandeciente.",
			"Pero en los ojos de Eira, ella vio el vacío oculto tras esa gloria.",
			"La verdad siempre estuvo oculta tras una hermosa máscara."
		],
		"vietnamese": [
			"Sảnh Đường Băng Giá. Nơi vinh quang Viking yên nghỉ.",
			"Cực quang hé lộ quá khứ. Hùng vĩ và rực rỡ.",
			"Nhưng trong mắt Eira — cô thấy sự trống rỗng ẩn sau vinh quang ấy.",
			"Sự thật luôn ẩn giấu sau một chiếc mặt nạ đẹp đẽ."
		],
		"thai": [
			"โถงน้ำแข็ง ที่ซึ่งเกียรติยศของไวกิ้งหลับใหล",
			"แสงเหนือเผยอดีต สง่างามและเจิดจรัส",
			"แต่ในสายตาของไอรา — เธอเห็นความว่างเปล่าที่ซ่อนอยู่เบื้องหลังเกียรติยศนั้น",
			"ความจริงซ่อนอยู่หลังหน้ากากที่สวยงามเสมอ"
		],
		"hindi": [
			"जमी हुई ड्योढ़ी। जहाँ वाइकिंग का गौरव सोता है।",
			"ऑरोरा ने अतीत दिखाया। भव्य और शानदार।",
			"लेकिन एरा की आँखों में — उसने उस गौरव के पीछे छिपी शून्यता देखी।",
			"सत्य हमेशा एक सुंदर मुखौटे के पीछे छिपा था।"
		]
	}
} as const;
