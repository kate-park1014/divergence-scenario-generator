export const scenario_modern_kjang_4_01 = {
	"scenario_id": "modern_kjang_4_01",
	"order": 1,
	"act": "intro",
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "오래된 편의점, 삐걱거리는 자동문이 손님을 맞았다.",
						"english": "An old convenience store, its creaking automatic door greeted a customer.",
						"japanese": "古いコンビニ。軋む自動ドアが客を迎えた。",
						"chinese": "一家老旧的便利店，嘎吱作响的自动门迎接着顾客。",
						"french": "Un vieux dépanneur, dont la porte automatique grinçante accueillait un client.",
						"spanish": "Una vieja tienda de conveniencia, cuya chirriante puerta automática recibió a un cliente.",
						"vietnamese": "Cửa hàng tiện lợi cũ kỹ, cánh cửa tự động kẽo kẹt chào đón khách hàng.",
						"thai": "ร้านสะดวกซื้อเก่าแห่งหนึ่ง ประตูอัตโนมัติที่ส่งเสียงเอี๊ยดอ๊าดต้อนรับลูกค้า.",
						"hindi": "एक पुरानी सुविधा स्टोर, जिसका चरमराहट वाला स्वचालित दरवाज़ा एक ग्राहक का स्वागत कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "음… 콜라 하나 주세요.",
						"english": "Um... A cola, please.",
						"japanese": "あの… コーラひとつください。",
						"chinese": "嗯… 请给我一瓶可乐。",
						"french": "Hum... Un cola, s'il vous plaît.",
						"spanish": "Eh... Una coca-cola, por favor.",
						"vietnamese": "Ừm... Cho tôi một lon Coca.",
						"thai": "เอ่อ... ขอโค้กหนึ่งขวดครับ/ค่ะ.",
						"hindi": "उम... एक कोका-कोला दीजिए।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네, 콜라… 1200원… 잠시만요.",
						"english": "Yes, cola... 1200 won... One moment.",
						"japanese": "はい、コーラ… 1200ウォン… 少々お待ちください。",
						"chinese": "好的，可乐… 1200韩元… 请稍等。",
						"french": "Oui, cola... 1200 wons... Un instant, s'il vous plaît.",
						"spanish": "Sí, coca-cola... 1200 wones... Un momento.",
						"vietnamese": "Vâng, Coca... 1200 won... Xin chờ một chút.",
						"thai": "ครับ/ค่ะ โค้ก... 1200 วอน... สักครู่นะครับ/คะ.",
						"hindi": "हाँ, कोका-कोला... 1200 वॉन... एक मिनट रुकिए।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…1200, 1200… 맞는데… 어? 죄송합니다! 계산이… 1300원입니다.",
						"english": "...1200, 1200... It's correct... Oh? I'm sorry! The total is... 1300 won.",
						"japanese": "…1200、1200… 合ってるはず… あれ？すみません！お会計は… 1300ウォンです。",
						"chinese": "…1200，1200… 没错啊… 咦？对不起！算错了… 是1300韩元。",
						"french": "...1200, 1200... C'est juste... Oh? Je suis désolé ! Le total est... 1300 wons.",
						"spanish": "...1200, 1200... Es correcto... ¿Eh? ¡Lo siento! La cuenta es... 1300 wones.",
						"vietnamese": "...1200, 1200... Đúng mà... Ơ? Xin lỗi! Tổng cộng là... 1300 won.",
						"thai": "...1200, 1200... ถูกแล้วนี่นา... อ้าว? ขอโทษครับ/ค่ะ! ยอดรวมคือ... 1300 วอนครับ/ค่ะ.",
						"hindi": "...1200, 1200... सही है... अरे? माफ़ कीजिए! बिल है... 1300 वॉन।"
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "아, 괜찮아요. 신경 쓰지 마세요.",
						"english": "Oh, it's fine. Don't worry about it.",
						"japanese": "あ、大丈夫ですよ。気にしないでください。",
						"chinese": "啊，没关系。别在意。",
						"french": "Oh, ce n'est rien. Ne vous inquiétez pas.",
						"spanish": "Oh, está bien. No se preocupe.",
						"vietnamese": "À, không sao đâu. Đừng bận tâm.",
						"thai": "อ๋อ ไม่เป็นไรครับ/ค่ะ ไม่ต้องคิดมาก.",
						"hindi": "अरे, ठीक है। चिंता मत करो।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "너무 신경 쓰지 마세요. 가끔 그럴 수도 있죠.",
						"english": "Don't worry about it too much. It happens sometimes.",
						"japanese": "そんなに気にしないでください。たまにはそういうこともありますよ。",
						"chinese": "别太放在心上。偶尔也会发生这种事。",
						"french": "Ne vous en faites pas trop. Ça arrive parfois.",
						"spanish": "No se preocupe demasiado. A veces pasa.",
						"vietnamese": "Đừng bận tâm quá. Thỉnh thoảng cũng có thể như vậy mà.",
						"thai": "ไม่ต้องกังวลมากหรอกครับ/ค่ะ บางทีก็เป็นแบบนี้ได้.",
						"hindi": "ज़्यादा चिंता मत करो। कभी-कभी ऐसा हो जाता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "아니요! 숫자는… 정확해야 합니다. 아주 사소한 것도….",
						"english": "No! Numbers… must be accurate. Even the smallest detail…",
						"japanese": "いいえ！数字は…正確でなければなりません。些細なことでも…。",
						"chinese": "不！数字……必须是准确的。即使是再微小的事情……",
						"french": "Non ! Les chiffres... doivent être exacts. Même le plus petit détail...",
						"spanish": "¡No! Los números... deben ser exactos. Incluso el más mínimo detalle...",
						"vietnamese": "Không! Các con số... phải chính xác. Dù là điều nhỏ nhất...",
						"thai": "ไม่! ตัวเลข... ต้องถูกต้องแม่นยำ แม้แต่สิ่งเล็กน้อย...",
						"hindi": "नहीं! संख्याएँ... सटीक होनी चाहिए। छोटी से छोटी बात भी..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 낡은 장부의 기록은… 절대 틀리면 안 돼.",
						"english": "The records in this old ledger… must never be wrong.",
						"japanese": "この古い帳簿の記録は…決して間違っていてはならない。",
						"chinese": "这本旧账簿的记录……绝不能有错。",
						"french": "Les registres de ce vieux grand livre... ne doivent jamais être faux.",
						"spanish": "Los registros de este viejo libro mayor... nunca deben estar equivocados.",
						"vietnamese": "Các ghi chép trong cuốn sổ cái cũ này... tuyệt đối không được sai.",
						"thai": "บันทึกในบัญชีเก่าเล่มนี้... ต้องไม่ผิดพลาดเด็ดขาด",
						"hindi": "इस पुरानी बही के रिकॉर्ड... कभी गलत नहीं होने चाहिए।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그의 눈빛이 순간 섬뜩하게 번뜩였다.",
						"english": "His eyes glinted chillingly for a moment.",
						"japanese": "彼の瞳が一瞬、ぞっとするほどきらめいた。",
						"chinese": "他的眼神瞬间闪过一丝阴森的光芒。",
						"french": "Ses yeux brillèrent froidement un instant.",
						"spanish": "Sus ojos brillaron de forma escalofriante por un instante.",
						"vietnamese": "Ánh mắt anh ta chợt lóe lên vẻ đáng sợ.",
						"thai": "แววตาของเขาฉายประกายเยือกเย็นชั่วขณะ",
						"hindi": "उसकी आँखों में एक पल के लिए डरावनी चमक आ गई।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "kai"
				},
				{
					"content": {
						"korean": "손님, 혹시… 방금 제가 드린 거스름돈이 맞았습니까?",
						"english": "Excuse me, sir… was the change I just gave you correct?",
						"japanese": "お客様、もしかして…先ほどお渡ししたお釣りは合っていましたか？",
						"chinese": "顾客，请问……我刚才找您的零钱对吗？",
						"french": "Monsieur, est-ce que... la monnaie que je viens de vous donner était correcte ?",
						"spanish": "Disculpe, señor... ¿el cambio que le di era correcto?",
						"vietnamese": "Thưa quý khách, liệu... số tiền thối lại tôi vừa đưa có đúng không ạ?",
						"thai": "คุณลูกค้าครับ... เงินทอนที่ผมให้ไปเมื่อครู่ถูกต้องไหมครับ?",
						"hindi": "ग्राहक महोदय, क्या... मैंने अभी आपको जो खुले पैसे दिए थे, वह सही थे?"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "네? 네, 맞았어요. 왜 그러세요?",
						"english": "Huh? Yes, it was correct. Why do you ask?",
						"japanese": "え？はい、合っていましたよ。どうしてですか？",
						"chinese": "啊？是的，对了。怎么了？",
						"french": "Hein ? Oui, c'était correct. Pourquoi demandez-vous ?",
						"spanish": "¿Eh? Sí, estaba correcto. ¿Por qué lo pregunta?",
						"vietnamese": "Hả? Vâng, đúng rồi. Sao vậy ạ?",
						"thai": "ฮะ? ครับ ถูกต้องครับ มีอะไรเหรอครับ?",
						"hindi": "क्या? हाँ, सही थे। आप क्यों पूछ रहे हैं?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "아닙니다… 아닙니다. 그저… 모든 숫자는 중요해서요.",
						"english": "No… no. It's just… every number is important.",
						"japanese": "いえ…いえ。ただ…すべての数字は重要なので。",
						"chinese": "不……不。只是……所有的数字都很重要。",
						"french": "Non... non. C'est juste... que chaque chiffre est important.",
						"spanish": "No... no. Es solo que... cada número es importante.",
						"vietnamese": "Không ạ... không ạ. Chỉ là... mọi con số đều quan trọng.",
						"thai": "ไม่มีอะไรครับ... ไม่มีอะไรครับ แค่... ทุกตัวเลขมีความสำคัญครับ",
						"hindi": "नहीं... नहीं। बस... हर संख्या महत्वपूर्ण है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "아직도 불안해하시네요. 그냥 넘어가도 될 일인데.",
						"english": "You're still uneasy. It's something that could just be overlooked.",
						"japanese": "まだ不安がってるな。見過ごしてもいいことなのに。",
						"chinese": "您 still seem uneasy. It's something that could just be overlooked.",
						"french": "Vous êtes encore inquiet. C'est quelque chose qui pourrait être ignoré.",
						"spanish": "Todavía está inquieto. Es algo que podría pasarse por alto.",
						"vietnamese": "Anh vẫn còn lo lắng. Đó là chuyện có thể bỏ qua được mà.",
						"thai": "ยังคงกังวลอยู่สินะ ทั้งที่เป็นเรื่องที่ปล่อยผ่านไปได้",
						"hindi": "आप अभी भी चिंतित हैं। यह ऐसी बात है जिसे नज़रअंदाज़ किया जा सकता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "넘어가면 안 됩니다… 절대….",
						"english": "It must not be overlooked… never…",
						"japanese": "見過ごしてはなりません…決して…。",
						"chinese": "绝不能放过……绝不……",
						"french": "Ça ne doit pas être ignoré... jamais...",
						"spanish": "No se puede pasar por alto... nunca...",
						"vietnamese": "Không được bỏ qua... tuyệt đối không...",
						"thai": "จะมองข้ามไปไม่ได้... เด็ดขาด...",
						"hindi": "इसे नज़रअंदाज़ नहीं किया जा सकता... कभी नहीं..."
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "kai"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "저기, 이 과자는 유통기한이 좀 지난 것 같은데요?",
						"english": "Excuse me, I think these snacks are a bit past their expiry date?",
						"japanese": "あの、このお菓子、賞味期限がちょっと過ぎているようですが？",
						"chinese": "喂，这个点心好像过期了？",
						"french": "Excusez-moi, je crois que ces gâteaux sont un peu périmés ?",
						"spanish": "Disculpe, creo que estas galletas están un poco caducadas.",
						"vietnamese": "Này, hình như bánh quy này đã quá hạn sử dụng rồi?",
						"thai": "นี่ ขนมนี้ดูเหมือนจะหมดอายุแล้วนะครับ?",
						"hindi": "सुनिए, लगता है इन बिस्कुटों की एक्सपायरी डेट निकल गई है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네? 그럴 리가… 제가 매일… 매일 확인하는데….",
						"english": "What? That can't be… I check it every day… every day…",
						"japanese": "え？そんなはずが…私が毎日…毎日確認しているのに…。",
						"chinese": "啊？不可能……我每天……每天都检查的啊……",
						"french": "Quoi ? C'est impossible... Je vérifie tous les jours... tous les jours...",
						"spanish": "¿Qué? No puede ser... Lo reviso todos los días... todos los días...",
						"vietnamese": "Hả? Không thể nào... Tôi kiểm tra mỗi ngày... mỗi ngày mà...",
						"thai": "ฮะ? เป็นไปไม่ได้... ผมตรวจสอบทุกวัน... ทุกวันเลยนะครับ...",
						"hindi": "क्या? ऐसा नहीं हो सकता... मैं हर दिन... हर दिन जाँच करता हूँ..."
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오류입니다. 작은 오류. 제가 바로잡겠습니다.",
						"english": "Error. A minor error. I will correct it.",
						"japanese": "エラーです。小さなエラー。私が修正します。",
						"chinese": "错误。一个小错误。我会修正的。",
						"french": "Erreur. Une petite erreur. Je vais la corriger.",
						"spanish": "Error. Un pequeño error. Lo corregiré.",
						"vietnamese": "Lỗi. Một lỗi nhỏ. Tôi sẽ sửa chữa.",
						"thai": "ข้อผิดพลาด. ข้อผิดพลาดเล็กน้อย. ฉันจะแก้ไขมัน.",
						"hindi": "त्रुटि है। एक छोटी त्रुटि। मैं इसे ठीक कर दूँगा।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "kai",
					"content": {
						"korean": "왠지 모르게… 섬뜩하네요.",
						"english": "Somehow... it's chilling.",
						"japanese": "なんだか…不気味ですね。",
						"chinese": "不知为何…令人毛骨悚然。",
						"french": "D'une certaine manière... c'est effrayant.",
						"spanish": "De alguna manera... es espeluznante.",
						"vietnamese": "Không hiểu sao… nó rợn người quá.",
						"thai": "ไม่รู้ทำไม… มันน่าขนลุกจังเลย.",
						"hindi": "किसी तरह... यह डरावना है।"
					},
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "kai",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						4
					]
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그는 계산대 아래 낡은 장부를 펼쳐 놓고 숫자를 긋고 또 그었다.",
						"english": "He spread an old ledger beneath the counter, striking out numbers again and again.",
						"japanese": "彼はレジの下の古い帳簿を広げ、数字を何度も消したり書いたりしていた。",
						"chinese": "他把旧账本摊在收银台下，一遍又一遍地涂改着数字。",
						"french": "Il étala un vieux registre sous le comptoir, barrant et rebarrant des chiffres.",
						"spanish": "Abrió un viejo libro de contabilidad bajo el mostrador, tachando y volviendo a tachar números.",
						"vietnamese": "Anh ta trải cuốn sổ cũ dưới quầy, gạch xóa và ghi lại các con số.",
						"thai": "เขาเปิดสมุดบัญชีเก่าใต้เคาน์เตอร์ ขีดฆ่าตัวเลขซ้ำแล้วซ้ำเล่า.",
						"hindi": "उसने काउंटर के नीचे एक पुराना बहीखाता फैलाया, संख्याओं को बार-बार काट रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 맞는데… 왜 여기가 비어있지? 완벽해야 하는데….",
						"english": "This is right... but why is this empty? It should be perfect...",
						"japanese": "これは合ってる…でも、どうしてここが空白なんだ？完璧なはずなのに…",
						"chinese": "这个是对的…但为什么这里是空的？应该完美无缺才对…",
						"french": "C'est juste... mais pourquoi est-ce vide ici ? Ça devrait être parfait...",
						"spanish": "Esto está bien... pero ¿por qué está vacío aquí? Debería ser perfecto...",
						"vietnamese": "Cái này đúng rồi… nhưng sao chỗ này lại trống? Phải hoàn hảo chứ…",
						"thai": "นี่มันถูกแล้ว… แต่ทำไมตรงนี้ถึงว่างเปล่า? มันควรจะสมบูรณ์แบบ…",
						"hindi": "यह सही है... पर यह जगह खाली क्यों है? यह तो सही होना चाहिए था..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "혹시… 무슨 문제 있으세요? 안색이 안 좋아 보이시는데.",
						"english": "Is something... wrong? You don't look well.",
						"japanese": "もしかして…何か問題でも？顔色が悪いようですが。",
						"chinese": "是不是…有什么问题？您脸色看起来不太好。",
						"french": "Y a-t-il... un problème ? Vous n'avez pas l'air bien.",
						"spanish": "¿Hay... algún problema? No tienes buena cara.",
						"vietnamese": "Có phải… anh có chuyện gì sao? Trông anh không được khỏe.",
						"thai": "คุณ… มีปัญหาอะไรหรือเปล่าครับ? ดูเหมือนคุณจะไม่สบายนะครับ.",
						"hindi": "क्या... कोई समस्या है? आपकी तबीयत ठीक नहीं लग रही।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "문제… 없습니다. 아무 문제도. 그저… 질서가 어긋나는 것을 참을 수 없을 뿐.",
						"english": "Problem... none. No problems at all. Just... I cannot tolerate disorder.",
						"japanese": "問題…ありません。何も。ただ…秩序が乱れることに耐えられないだけです。",
						"chinese": "问题…没有。什么问题都没有。只是…我无法忍受秩序被打乱。",
						"french": "Problème... aucun. Pas de problème du tout. Juste... je ne peux pas tolérer le désordre.",
						"spanish": "Problema... ninguno. Ningún problema. Simplemente... no puedo tolerar el desorden.",
						"vietnamese": "Vấn đề… không có. Không có vấn đề gì cả. Chỉ là… tôi không thể chịu đựng được sự xáo trộn.",
						"thai": "ปัญหา… ไม่มี. ไม่มีปัญหาอะไรเลย. แค่… ทนไม่ได้ที่ระเบียบมันผิดเพี้ยนไป.",
						"hindi": "समस्या... कोई नहीं। कोई समस्या नहीं। बस... मैं अव्यवस्था बर्दाश्त नहीं कर सकता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뭔가… 잘못돼 가는 것 같아요.",
						"english": "Something... feels wrong.",
						"japanese": "何だか…おかしくなっていくような気がします。",
						"chinese": "总觉得…有什么地方不对劲。",
						"french": "Quelque chose... semble aller de travers.",
						"spanish": "Algo... parece ir mal.",
						"vietnamese": "Hình như… có gì đó không ổn.",
						"thai": "รู้สึกเหมือน… มีอะไรบางอย่างผิดปกติ.",
						"hindi": "कुछ... गलत हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "kai"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"content": {
						"korean": "내 계산은 완벽했다. 너희 같은 변수들을 제외하고는.",
						"english": "My calculations were perfect. Except for variables like you.",
						"japanese": "私の計算は完璧だった。お前たちのような変数を除けばね。",
						"chinese": "我的计算是完美的。除了你们这些变数。",
						"french": "Mes calculs étaient parfaits. À l'exception de variables comme vous.",
						"spanish": "Mis cálculos eran perfectos. Excepto por variables como vosotros.",
						"vietnamese": "Tính toán của tôi hoàn hảo. Ngoại trừ những biến số như các người.",
						"thai": "การคำนวณของฉันสมบูรณ์แบบ. ยกเว้นตัวแปรอย่างพวกแก.",
						"hindi": "मेरी गणनाएँ सही थीं। तुम जैसे चरों को छोड़कर।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 K-jang인 거냐? 대체 뭐 하는 녀석이야!",
						"english": "Are you K-jang? What in the world are you?!",
						"japanese": "お前がK-jangなのか？一体何者なんだ！",
						"chinese": "你就是K-jang吗？你到底是什么东西！",
						"french": "Tu es K-jang ? Mais qu'est-ce que tu es ?",
						"spanish": "¿Eres K-jang? ¡¿Qué demonios eres?!",
						"vietnamese": "Ngươi là K-jang à? Rốt cuộc ngươi là cái thứ gì!",
						"thai": "แกคือ K-jang เหรอ? แกเป็นใครกันแน่!",
						"hindi": "क्या तुम K-jang हो? आखिर तुम कौन हो!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 이 편의점의 '질서'다. 모든 숫자를 바로잡는 존재.",
						"english": "I am the 'order' of this convenience store. The one who sets all numbers right.",
						"japanese": "私はこのコンビニの「秩序」だ。全ての数字を正す存在。",
						"chinese": "我是这家便利店的‘秩序’。纠正所有数字的存在。",
						"french": "Je suis l'« ordre » de ce dépanneur. Celui qui remet tous les chiffres en place.",
						"spanish": "Soy el 'orden' de esta tienda de conveniencia. El que corrige todos los números.",
						"vietnamese": "Ta là 'trật tự' của cửa hàng tiện lợi này. Kẻ điều chỉnh mọi con số.",
						"thai": "ฉันคือ 'ระเบียบ' ของร้านสะดวกซื้อแห่งนี้. ผู้ที่แก้ไขตัวเลขทั้งหมดให้ถูกต้อง.",
						"hindi": "मैं इस सुविधा स्टोर का 'आदेश' हूँ। वह जो सभी संख्याओं को सही करता है।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "말도 안 돼! 널 막겠어!",
						"english": "No way! I'll stop you!",
						"japanese": "まさか！止めさせない！",
						"chinese": "休想！我不会让你得逞的！",
						"french": "Impossible ! Je t'arrêterai !",
						"spanish": "¡De ninguna manera! ¡Te detendré!",
						"vietnamese": "Không đời nào! Ta sẽ ngăn ngươi lại!",
						"thai": "ไม่จริง! ฉันจะหยุดแกเอง!",
						"hindi": "यह नहीं हो सकता! मैं तुम्हें रोकूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도… 작은 오차일 뿐이다….",
						"english": "Heh heh… Is this all you've got? Just a small deviation…",
						"japanese": "クク…たかだかこれしき…小さな誤差に過ぎない…。",
						"chinese": "呵呵……就这点本事吗……不过是小小的误差罢了……",
						"french": "Hé hé... C'est tout ce que tu as ? Juste une petite déviation...",
						"spanish": "Je je… ¿Esto es todo lo que tienes? Solo una pequeña desviación…",
						"vietnamese": "Khặc khặc… Chỉ có thế này thôi sao… Chỉ là một sai số nhỏ mà thôi…",
						"thai": "ฮ่าฮ่า… แค่นี้เองเหรอ… แค่ความคลาดเคลื่อนเล็กน้อยเท่านั้น…",
						"hindi": "हहह... बस इतना ही? बस एक छोटी सी गड़बड़..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝난 거야…?",
						"english": "Is it… over?",
						"japanese": "終わったのか…？",
						"chinese": "结束了吗……？",
						"french": "C'est… fini ?",
						"spanish": "¿Ha… terminado?",
						"vietnamese": "Kết thúc rồi sao…?",
						"thai": "จบแล้วเหรอ…?",
						"hindi": "क्या यह... खत्म हो गया?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "kai",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "kai",
					"content": {
						"korean": "끝난 게 아닐 거야. 이 편의점… 어딘가 아직 이상해.",
						"english": "It can't be over. This convenience store… something's still off.",
						"japanese": "終わったはずがない。このコンビニ…まだどこかおかしい。",
						"chinese": "不会就这么结束的。这家便利店……某个地方还是不对劲。",
						"french": "Ce ne peut pas être fini. Ce supermarché… quelque chose cloche encore.",
						"spanish": "No puede haber terminado. Esta tienda de conveniencia… algo sigue mal.",
						"vietnamese": "Chưa thể kết thúc được. Cửa hàng tiện lợi này… vẫn còn gì đó bất thường.",
						"thai": "ยังไม่จบแน่ ร้านสะดวกซื้อนี้… ยังมีอะไรแปลกๆ",
						"hindi": "यह खत्म नहीं हो सकता। यह सुविधा स्टोर… कुछ तो अभी भी अजीब है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 '질서' 뒤로, 편의점의 불빛이 다시 깜빡였다. 아직, 진실은 가려져 있었다.",
						"english": "Behind the fallen 'Order,' the convenience store lights flickered again. The truth was still hidden.",
						"japanese": "倒れた「秩序」の背後で、コンビニの明かりが再び点滅した。まだ、真実は隠されたままだった。",
						"chinese": "倒下的“秩序”身后，便利店的灯光再次闪烁。真相，依旧被掩盖着。",
						"french": "Derrière l'« Ordre » déchu, les lumières du supermarché clignotèrent de nouveau. La vérité était encore cachée.",
						"spanish": "Detrás del 'Orden' caído, las luces de la tienda de conveniencia parpadearon de nuevo. La verdad seguía oculta.",
						"vietnamese": "Đằng sau 'Trật Tự' đã ngã xuống, ánh đèn của cửa hàng tiện lợi lại nhấp nháy. Sự thật vẫn còn bị che giấu.",
						"thai": "เบื้องหลัง 'ระเบียบ' ที่ล้มลง แสงไฟของร้านสะดวกซื้อก็กระพริบอีกครั้ง ความจริงยังคงถูกซ่อนไว้",
						"hindi": "गिरी हुई 'व्यवस्था' के पीछे, सुविधा स्टोर की रोशनी फिर से टिमटिमा उठी। सच अभी भी छिपा हुआ था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "하찮은 변수들. 숫자는 너희를 허락하지 않는다.",
						"english": "Insignificant variables. Numbers do not permit you.",
						"japanese": "取るに足らない変数ども。数字はお前たちを許さない。",
						"chinese": "微不足道的变量们。数字不允许你们存在。",
						"french": "Variables insignifiantes. Les chiffres ne vous permettent pas d'exister.",
						"spanish": "Variables insignificantes. Los números no os permiten.",
						"vietnamese": "Những biến số tầm thường. Các con số không cho phép các ngươi tồn tại.",
						"thai": "ตัวแปรที่ไร้ค่า ตัวเลขไม่อนุญาตให้พวกเจ้ามีอยู่",
						"hindi": "तुच्छ चर। संख्याएँ तुम्हें अनुमति नहीं देतीं।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직… 포기 안 해!",
						"english": "Damn it… I won't give up… yet!",
						"japanese": "くそっ…まだ…諦めない！",
						"chinese": "可恶……我还没……放弃！",
						"french": "Mince… Je n'abandonnerai pas… encore !",
						"spanish": "¡Maldita sea… aún… no me rindo!",
						"vietnamese": "Chết tiệt… Ta vẫn… chưa bỏ cuộc!",
						"thai": "บ้าจริง… ฉันยัง… ไม่ยอมแพ้!",
						"hindi": "धत्... मैं अभी... हार नहीं मानूँगा!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "다시 도전해라. 네 존재가 이 숫자에 기록될 때까지.",
						"english": "Challenge again. Until your existence is recorded in these numbers.",
						"japanese": "再び挑め。お前の存在がこの数字に記録されるまで。",
						"chinese": "再次挑战吧。直到你的存在被记录在这组数字中。",
						"french": "Défie à nouveau. Jusqu'à ce que ton existence soit enregistrée dans ces chiffres.",
						"spanish": "Desafía de nuevo. Hasta que tu existencia quede registrada en estos números.",
						"vietnamese": "Hãy thử thách lại. Cho đến khi sự tồn tại của ngươi được ghi vào những con số này.",
						"thai": "ลองใหม่อีกครั้ง จนกว่าการมีอยู่ของเจ้าจะถูกบันทึกในตัวเลขเหล่านี้",
						"hindi": "फिर से चुनौती दो। जब तक तुम्हारा अस्तित्व इन संख्याओं में दर्ज न हो जाए।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"낡고 허름한 편의점. 익숙한 일상 속.",
			"계산대 너머, 그는 언제나 죄송하다고 했다.",
			"하지만 순간 스친 그 눈빛. 완벽한 숫자 뒤에 숨겨진 광기.",
			"모든 것이 기록되는 곳에서, 균열은 시작되었다."
		],
		"english": [
			"A old, shabby convenience store. Amidst familiar daily life.",
			"Beyond the counter, he always apologized.",
			"But the momentary glance in his eyes. Madness hidden behind perfect numbers.",
			"Where everything is recorded, the rift began."
		],
		"japanese": [
			"古くみすぼらしいコンビニ。見慣れた日常の中。",
			"レジの向こうで、彼はいつも謝っていた。",
			"しかし、一瞬交錯したその眼差し。完璧な数字の裏に隠された狂気。",
			"全てが記録される場所で、亀裂は始まった。"
		],
		"chinese": [
			"破旧的便利店。熟悉的日常之中。",
			"收银台后面，他总是说抱歉。",
			"但那一瞬间的眼神。完美数字背后隐藏的疯狂。",
			"在一切都被记录的地方，裂痕开始了。"
		],
		"french": [
			"Un vieux dépanneur miteux. Au cœur d'un quotidien familier.",
			"Derrière le comptoir, il s'excusait toujours.",
			"Mais ce regard fugace. La folie cachée derrière des chiffres parfaits.",
			"Là où tout est enregistré, la faille a commencé."
		],
		"spanish": [
			"Una vieja y destartalada tienda de conveniencia. En medio de la vida diaria familiar.",
			"Detrás del mostrador, siempre se disculpaba.",
			"Pero esa mirada momentánea en sus ojos. La locura oculta tras números perfectos.",
			"Donde todo queda registrado, la grieta comenzó."
		],
		"vietnamese": [
			"Cửa hàng tiện lợi cũ kỹ, tồi tàn. Giữa cuộc sống thường nhật quen thuộc.",
			"Sau quầy tính tiền, anh ấy luôn nói lời xin lỗi.",
			"Nhưng ánh mắt thoáng qua đó. Sự điên loạn ẩn giấu sau những con số hoàn hảo.",
			"Nơi mọi thứ được ghi lại, vết nứt bắt đầu."
		],
		"thai": [
			"ร้านสะดวกซื้อเก่าโทรม. ท่ามกลางชีวิตประจำวันที่คุ้นเคย.",
			"หลังเคาน์เตอร์ เขาขอโทษเสมอ.",
			"แต่แววตาที่มองผ่านไปแวบหนึ่ง. ความบ้าคลั่งที่ซ่อนอยู่หลังตัวเลขที่สมบูรณ์แบบ.",
			"ณ ที่ที่ทุกสิ่งถูกบันทึกไว้ รอยร้าวได้เริ่มต้นขึ้น."
		],
		"hindi": [
			"एक पुरानी, ​​जर्जर सुविधा स्टोर। परिचित रोज़मर्रा की ज़िंदगी के बीच।",
			"काउंटर के उस पार, वह हमेशा माफ़ी माँगता था।",
			"लेकिन उसकी आँखों में वह क्षणिक नज़र। सही संख्याओं के पीछे छिपा पागलपन।",
			"जहाँ सब कुछ दर्ज होता है, वहीं दरार शुरू हुई।"
		]
	}
} as const;
