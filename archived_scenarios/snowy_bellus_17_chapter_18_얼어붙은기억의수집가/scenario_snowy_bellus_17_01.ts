export const scenario_snowy_bellus_17_01 = {
	"scenario_id": "snowy_bellus_17_01",
	"order": 1,
	"act": "intro",
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
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영원의 설원 깊숙한 곳. 시공간이 뒤틀린 듯, 얼어붙은 기억의 파편들이 떠다녔다.",
						"english": "Deep within the Eternal Snowfield. Space and time seemed warped, and fragments of frozen memories floated about.",
						"japanese": "永遠の雪原の奥深く。時空間が歪んだかのように、凍りついた記憶の破片が漂っていた。",
						"chinese": "永恒雪原深处。时空仿佛扭曲，冻结的记忆碎片漂浮着。",
						"french": "Au plus profond de l'étendue de neige éternelle. L'espace et le temps semblaient tordus, des fragments de souvenirs gelés flottaient.",
						"spanish": "En lo más profundo del Campo de Nieve Eterno. El espacio y el tiempo parecían retorcidos, y fragmentos de recuerdos congelados flotaban.",
						"vietnamese": "Sâu thẳm trong Đồng tuyết vĩnh cửu. Không gian và thời gian như bị bóp méo, những mảnh ký ức đóng băng trôi nổi.",
						"thai": "ลึกเข้าไปในทุ่งหิมะนิรันดร์ กาลอวกาศดูบิดเบี้ยว เศษเสี้ยวแห่งความทรงจำที่ถูกแช่แข็งล่องลอยอยู่",
						"hindi": "शाश्वत हिमक्षेत्र के भीतर गहराई में। समय और स्थान विकृत लग रहे थे, और जमी हुई यादों के टुकड़े तैर रहे थे।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이게… 벨루스가 얼린 시간인가?",
						"english": "Is this… the time Bellus froze?",
						"japanese": "これが…ベルースが凍らせた時間なのか？",
						"chinese": "这是……贝鲁斯冻结的时间吗？",
						"french": "Est-ce… le temps que Bellus a gelé ?",
						"spanish": "¿Es esto… el tiempo que Bellus congeló?",
						"vietnamese": "Đây có phải… là thời gian Bellus đã đóng băng không?",
						"thai": "นี่คือ...ช่วงเวลาที่เบลลัสแช่แข็งงั้นหรือ?",
						"hindi": "क्या यह… वह समय है जिसे बेलस ने जमा दिया?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…그래요. 과거의 모든 순간이 박제되어 있죠.",
						"english": "…Yes. Every moment from the past is preserved here.",
						"japanese": "…ええ。過去のあらゆる瞬間が剥製にされていますね。",
						"chinese": "……是的。过去的每一个瞬间都被完好保存着。",
						"french": "…Oui. Chaque instant du passé est conservé ici.",
						"spanish": "…Sí. Cada momento del pasado está aquí preservado.",
						"vietnamese": "…Đúng vậy. Mọi khoảnh khắc trong quá khứ đều được bảo tồn ở đây.",
						"thai": "…ใช่ครับ ทุกช่วงเวลาในอดีตถูกเก็บรักษาไว้ที่นี่",
						"hindi": "…हाँ। अतीत का हर पल यहाँ संरक्षित है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "저건… 리온. 내 동생.",
						"english": "That's… Rion. My younger brother.",
						"japanese": "あれは…リオン。私の弟。",
						"chinese": "那是……利昂。我的弟弟。",
						"french": "C'est… Rion. Mon frère cadet.",
						"spanish": "Ese es… Rion. Mi hermano.",
						"vietnamese": "Đó là… Rion. Em trai tôi.",
						"thai": "นั่นคือ...ริออน น้องชายของฉัน",
						"hindi": "वह… रियोन है। मेरा छोटा भाई।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "동생이라고? 그럼… 저게 행복했던 순간인가?",
						"english": "Your brother? Then… is that a happy moment?",
						"japanese": "弟だと？じゃあ…あれが幸せだった瞬間なのか？",
						"chinese": "你弟弟？那么……那是幸福的瞬间吗？",
						"french": "Ton frère ? Alors… c'est un moment heureux ?",
						"spanish": "¿Tu hermano? Entonces… ¿ese fue un momento feliz?",
						"vietnamese": "Em trai sao? Vậy… đó có phải là khoảnh khắc hạnh phúc không?",
						"thai": "น้องชายงั้นเหรอ? งั้น...นั่นคือช่วงเวลาที่มีความสุขใช่ไหม?",
						"hindi": "तुम्हारा भाई? तो… क्या वह एक खुशहाल पल था?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "가장 행복했던 순간을 영원히 가뒀어. 파괴가 아니라… 보존.",
						"english": "He trapped the happiest moment forever. Not destruction… but preservation.",
						"japanese": "最も幸せだった瞬間を永遠に閉じ込めた。破壊ではなく…保存だ。",
						"chinese": "他将最幸福的瞬间永远地囚禁了。不是破坏……而是保存。",
						"french": "Il a emprisonné le moment le plus heureux pour toujours. Pas la destruction… mais la préservation.",
						"spanish": "Atrapó el momento más feliz para siempre. No destrucción… sino preservación.",
						"vietnamese": "Hắn đã giam giữ khoảnh khắc hạnh phúc nhất mãi mãi. Không phải phá hủy… mà là bảo tồn.",
						"thai": "เขาขังช่วงเวลาที่มีความสุขที่สุดไว้ตลอดกาล ไม่ใช่การทำลาย...แต่เป็นการอนุรักษ์",
						"hindi": "उसने सबसे खुशी के पल को हमेशा के लिए कैद कर लिया। विनाश नहीं… बल्कि संरक्षण।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "여기… 오래된 표식이 희미하게 보여요.",
						"english": "Here... an ancient mark faintly appears.",
						"japanese": "ここに…古い印が薄く見えます。",
						"chinese": "这里……隐约可见古老的印记。",
						"french": "Ici... une ancienne marque apparaît faiblement.",
						"spanish": "Aquí... una marca antigua aparece débilmente.",
						"vietnamese": "Đây... một dấu hiệu cổ xưa hiện lên mờ nhạt.",
						"thai": "ที่นี่... มีรอยสัญลักษณ์โบราณปรากฏจางๆ",
						"hindi": "यहाँ... एक प्राचीन चिह्न धुंधला दिखाई दे रहा है।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "저게 뭐지?",
						"english": "What's that?",
						"japanese": "あれは何だ？",
						"chinese": "那是什么？",
						"french": "Qu'est-ce que c'est ?",
						"spanish": "¿Qué es eso?",
						"vietnamese": "Đó là gì vậy?",
						"thai": "นั่นอะไรน่ะ?",
						"hindi": "वह क्या है?"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…기록하고 기억하려는 흔적. 시간을 관리했던 자의 표식처럼.",
						"english": "...A trace meant to record and remember. Like the mark of one who managed time.",
						"japanese": "…記録し、記憶しようとした痕跡。時間を管理した者の印のように。",
						"chinese": "……是为了记录和记忆的痕迹。像是管理时间者的印记。",
						"french": "...Une trace destinée à enregistrer et à se souvenir. Comme la marque de celui qui gérait le temps.",
						"spanish": "...Un rastro destinado a registrar y recordar. Como la marca de quien gestionaba el tiempo.",
						"vietnamese": "...Một dấu vết nhằm ghi lại và ghi nhớ. Giống như dấu ấn của người quản lý thời gian.",
						"thai": "...ร่องรอยที่ต้องการบันทึกและจดจำ เหมือนกับสัญลักษณ์ของผู้ที่เคยควบคุมเวลา",
						"hindi": "संभवतः यह रिकॉर्ड करने और याद रखने का निशान है। समय का प्रबंधन करने वाले की निशानी जैसा।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 얼어붙은 조각들은… 단순한 파괴가 아니에요.",
						"english": "These frozen fragments... aren't mere destruction.",
						"japanese": "これらの凍った破片は…ただの破壊ではありません。",
						"chinese": "这些冰冻的碎片……并非单纯的破坏。",
						"french": "Ces fragments gelés... ne sont pas une simple destruction.",
						"spanish": "Estos fragmentos congelados... no son una mera destrucción.",
						"vietnamese": "Những mảnh vỡ đóng băng này... không phải là sự phá hủy đơn thuần.",
						"thai": "เศษซากที่แข็งตัวเหล่านี้... ไม่ใช่แค่การทำลายล้าง",
						"hindi": "ये जमे हुए टुकड़े... केवल विनाश नहीं हैं।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "벨루스는 가장 완벽한 순간만을 골라 영원히 보존했어.",
						"english": "Bellus chose only the most perfect moments and preserved them eternally.",
						"japanese": "ベルルスは最も完璧な瞬間だけを選び、永遠に保存したんだ。",
						"chinese": "贝鲁斯只选择了最完美的瞬间，并将其永远保存下来。",
						"french": "Bellus n'a choisi que les moments les plus parfaits et les a conservés éternellement.",
						"spanish": "Bellus eligió solo los momentos más perfectos y los conservó eternamente.",
						"vietnamese": "Bellus chỉ chọn những khoảnh khắc hoàn hảo nhất và bảo tồn chúng vĩnh viễn.",
						"thai": "เบลลัสเลือกเพียงช่วงเวลาที่สมบูรณ์แบบที่สุด และรักษามันไว้ชั่วนิรันดร์",
						"hindi": "बेलस ने केवल सबसे परिपूर्ण पलों को चुना और उन्हें हमेशा के लिए संरक्षित कर दिया।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그게 구원이라고 생각하는 건가? 시간을 얼려서?",
						"english": "Does he think that's salvation? By freezing time?",
						"japanese": "それが救済だとでも思っているのか？時間を凍らせて？",
						"chinese": "他认为那是救赎吗？通过冻结时间？",
						"french": "Pense-t-il que c'est le salut ? En gelant le temps ?",
						"spanish": "¿Cree que eso es la salvación? ¿Congelando el tiempo?",
						"vietnamese": "Anh ta nghĩ đó là sự cứu rỗi sao? Bằng cách đóng băng thời gian?",
						"thai": "เขาคิดว่านั่นคือการช่วยกู้รึไง? ด้วยการแช่แข็งเวลา?",
						"hindi": "क्या वह सोचता है कि यही मोक्ष है? समय को जमाकर?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…어쩌면 그에게는. 파괴될 운명에서 구해낸다고 생각할지도.",
						"english": "...Perhaps for him, it is. He might think he's saving them from a destined destruction.",
						"japanese": "…彼にとってはそうなのかも。破壊される運命から救い出すとでも思っているのかもしれない。",
						"chinese": "……也许对他来说是吧。他可能认为是在从毁灭的命运中拯救出来。",
						"french": "...Peut-être pour lui. Il pourrait penser qu'il les sauve d'une destruction inévitable.",
						"spanish": "...Quizás para él, sí. Podría pensar que los está salvando de un destino de destrucción.",
						"vietnamese": "...Có lẽ đối với anh ta là vậy. Anh ta có thể nghĩ mình đang cứu họ khỏi số phận bị hủy diệt.",
						"thai": "...บางทีสำหรับเขาอาจจะใช่ เขาอาจจะคิดว่ากำลังช่วยชีวิตพวกเขาจากการถูกทำลาย",
						"hindi": "...शायद उसके लिए ऐसा ही हो। वह सोच सकता है कि वह उन्हें विनाश की नियति से बचा रहा है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "내 동생 리온은… 저 안에서 영원히 웃고 있어.",
						"english": "My brother, Leon... is forever smiling in there.",
						"japanese": "私の弟、リオンは…あの中で永遠に笑っている。",
						"chinese": "我的弟弟利昂……在那里永远微笑着。",
						"french": "Mon frère, Leon... sourit éternellement là-dedans.",
						"spanish": "Mi hermano, Leon... sonríe eternamente ahí dentro.",
						"vietnamese": "Em trai tôi, Leon... đang mỉm cười vĩnh viễn ở trong đó.",
						"thai": "น้องชายของฉัน ลีออน... กำลังยิ้มอยู่ในนั้นตลอดไป",
						"hindi": "मेरा भाई, लियोन... वहाँ हमेशा मुस्कुरा रहा है।"
					},
					"speaker": "eira",
					"type": "speech"
				}
			]
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
					"emotion": "base",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "이 기억 파편들을 보세요. 하나하나가 과거의 영광과 행복이야.",
						"english": "Look at these memory fragments. Each one is a past glory and happiness.",
						"japanese": "この記憶の破片を見てください。一つ一つが過去の栄光と幸福です。",
						"chinese": "看看这些记忆碎片。每一个都是过去的荣耀与幸福。",
						"french": "Regardez ces fragments de mémoire. Chacun est une gloire et un bonheur passés.",
						"spanish": "Mira estos fragmentos de memoria. Cada uno es una gloria y una felicidad pasadas.",
						"vietnamese": "Hãy nhìn những mảnh ký ức này. Mỗi mảnh đều là vinh quang và hạnh phúc của quá khứ.",
						"thai": "ดูเศษเสี้ยวความทรงจำเหล่านี้สิ แต่ละชิ้นคือความรุ่งโรจน์และความสุขในอดีต",
						"hindi": "इन यादों के टुकड़ों को देखो। हर एक अतीत का गौरव और खुशी है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 갇힌 거잖아. 살아있지 않아.",
						"english": "But they're trapped, aren't they? Not alive.",
						"japanese": "でも、閉じ込められているんだろ？生きてはいない。",
						"chinese": "但它们被困住了，不是吗？没有生命。",
						"french": "Mais ils sont piégés, n'est-ce pas ? Pas vivants.",
						"spanish": "Pero están atrapados, ¿no? No están vivos.",
						"vietnamese": "Nhưng chúng đã bị mắc kẹt, phải không? Không còn sống nữa.",
						"thai": "แต่พวกมันถูกกักขังไว้ไม่ใช่เหรอ? ไม่ได้มีชีวิตอยู่",
						"hindi": "लेकिन वे फँसे हुए हैं, है ना? जीवित नहीं हैं।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "맞아요. 하지만… 사라지는 것보다 나은 걸까요?",
						"english": "True. But... is this better than disappearing?",
						"japanese": "そうね。でも…消えるよりはマシなの？",
						"chinese": "没错。但是…这会比消失更好吗？",
						"french": "C'est vrai. Mais… est-ce mieux que de disparaître ?",
						"spanish": "Cierto. Pero… ¿es esto mejor que desaparecer?",
						"vietnamese": "Đúng vậy. Nhưng… liệu có tốt hơn là biến mất không?",
						"thai": "จริงด้วย. แต่... นี่จะดีกว่าการหายไปงั้นเหรอ?",
						"hindi": "सही है। पर... क्या यह गायब होने से बेहतर है?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야. 우린 벨루스를 멈춰야 해.",
						"english": "What are you saying? We must stop Bellus.",
						"japanese": "何を言ってるの。私たちはベルスを止めないと。",
						"chinese": "你说什么？我们必须阻止贝鲁斯。",
						"french": "Qu'est-ce que tu racontes ? Nous devons arrêter Bellus.",
						"spanish": "¿Qué dices? Debemos detener a Bellus.",
						"vietnamese": "Anh đang nói gì vậy? Chúng ta phải ngăn Bellus lại.",
						"thai": "พูดอะไรน่ะ? เราต้องหยุดเบลลัสให้ได้",
						"hindi": "क्या बक रही हो। हमें बेलस को रोकना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "알아요. 하지만… 혼란스러워요. 이 모든 것이… 정말 잘못된 것일까.",
						"english": "I know. But... I'm confused. Is all of this... truly wrong?",
						"japanese": "分かってる。でも…混乱してるの。これらすべてが…本当に間違いなの？",
						"chinese": "我知道。但是…我很困惑。这一切…真的错了吗？",
						"french": "Je sais. Mais… je suis troublé. Est-ce que tout cela… est vraiment une erreur ?",
						"spanish": "Lo sé. Pero… estoy confundida. ¿Es todo esto… realmente incorrecto?",
						"vietnamese": "Tôi biết. Nhưng… tôi đang bối rối. Tất cả những điều này… có thực sự sai không?",
						"thai": "ฉันรู้. แต่... ฉันสับสนไปหมด. ทั้งหมดนี้... มันผิดจริงๆ งั้นเหรอ?",
						"hindi": "मुझे पता है। पर... मैं उलझन में हूँ। क्या यह सब... सचमुच गलत है?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "기억의 전장은 더욱 깊어졌다. 거대한 얼음 벽들이 길을 막았다.",
						"english": "The Field of Memory deepened. Gigantic ice walls blocked the path.",
						"japanese": "記憶の戦場はさらに深まった。巨大な氷の壁が道を塞いだ。",
						"chinese": "记忆的战场更深了。巨大的冰墙挡住了去路。",
						"french": "Le Champ de la Mémoire s'est approfondi. Des murs de glace gigantesques bloquaient le chemin.",
						"spanish": "El Campo de la Memoria se profundizó. Muros gigantes de hielo bloqueaban el camino.",
						"vietnamese": "Chiến trường ký ức đã sâu hơn. Những bức tường băng khổng lồ chặn đường.",
						"thai": "สมรภูมิแห่งความทรงจำลึกยิ่งขึ้น กำแพงน้ำแข็งมหึมากีดขวางเส้นทาง",
						"hindi": "स्मृति का युद्धक्षेत्र और गहरा हो गया। विशाल बर्फीली दीवारें रास्ते को रोक रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "갈수록 기분 나빠지는군. 뒤틀린 보존이라니.",
						"english": "This feels worse and worse. Twisted preservation, indeed.",
						"japanese": "ますます嫌な気分になるわね。歪んだ保存なんて。",
						"chinese": "感觉越来越糟了。所谓的扭曲的保存。",
						"french": "C'est de plus en plus inquiétant. Une préservation tordue, en effet.",
						"spanish": "Esto se pone cada vez peor. Qué retorcida preservación.",
						"vietnamese": "Càng lúc càng tệ. Cái gọi là sự bảo tồn méo mó này.",
						"thai": "รู้สึกแย่ขึ้นเรื่อยๆ เลยนะ การคงสภาพที่บิดเบี้ยวนี่",
						"hindi": "यह और खराब होता जा रहा है। विकृत संरक्षण, सचमुच।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이 벽에도 고대 룬이 새겨져 있어요.",
						"english": "Ancient runes are carved into this wall too.",
						"japanese": "この壁にも古代のルーンが刻まれている。",
						"chinese": "这面墙上也刻有古老的符文。",
						"french": "Des runes antiques sont aussi gravées sur ce mur.",
						"spanish": "También hay runas antiguas grabadas en esta pared.",
						"vietnamese": "Trên bức tường này cũng khắc những ký tự cổ.",
						"thai": "กำแพงนี้ก็มีอักษรรูนโบราณสลักอยู่ด้วย",
						"hindi": "इस दीवार पर भी प्राचीन रुण खुदे हुए हैं।"
					},
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "오랜 시간의 흔적… 벨루스는 처음부터 이 모든 걸 계획한 게 분명해.",
						"english": "Traces of a long time... Bellus must have planned all of this from the start.",
						"japanese": "長い時間の痕跡…ベルスは最初からこの全てを計画していたに違いない。",
						"chinese": "漫长时间的痕迹…贝鲁斯肯定从一开始就计划好了一切。",
						"french": "Des traces d'un temps ancien… Bellus a sûrement tout planifié depuis le début.",
						"spanish": "Huellas de mucho tiempo… Bellus debe haber planeado todo esto desde el principio.",
						"vietnamese": "Dấu vết của thời gian dài… Bellus chắc chắn đã lên kế hoạch tất cả những điều này ngay từ đầu.",
						"thai": "ร่องรอยของกาลเวลาอันยาวนาน... เบลลัสต้องวางแผนทั้งหมดนี้ตั้งแต่แรกแน่นอน",
						"hindi": "लंबे समय के निशान... बेलस ने यह सब शुरुआत से ही योजना बनाई होगी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "돌아갈 곳은 없어. 앞으로 가는 수밖에.",
						"english": "There's no turning back. We have no choice but to go forward.",
						"japanese": "もう引き返せない。前に進むしかない。",
						"chinese": "没有回头路了。只能向前走。",
						"french": "Pas de retour en arrière. On n'a pas d'autre choix que d'avancer.",
						"spanish": "No hay vuelta atrás. No tenemos más remedio que avanzar.",
						"vietnamese": "Không còn đường quay lại. Chúng ta chỉ có thể tiến về phía trước.",
						"thai": "ไม่มีทางกลับแล้ว มีแต่ต้องเดินหน้าต่อไป",
						"hindi": "पीछे मुड़ने का कोई रास्ता नहीं। आगे बढ़ने के अलावा कोई विकल्प नहीं।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "…그래요. 끝까지 이 길을 기록해야 해.",
						"english": "...Right. We must record this path to the very end.",
						"japanese": "…そうね。最後までこの道を記録しなければ。",
						"chinese": "…没错。我们必须将这条路记录到底。",
						"french": "...C'est vrai. Nous devons consigner ce chemin jusqu'au bout.",
						"spanish": "...Sí. Debemos registrar este camino hasta el final.",
						"vietnamese": "...Phải. Chúng ta phải ghi lại con đường này đến cùng.",
						"thai": "...ใช่ เราต้องบันทึกเส้นทางนี้ไปจนถึงที่สุด",
						"hindi": "...ठीक है। हमें इस रास्ते को अंत तक रिकॉर्ड करना होगा।"
					},
					"type": "speech",
					"speaker": "eira",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "angry",
					"content": {
						"korean": "침입자들. 벨루스 님의 영역을 더럽히지 마라.",
						"english": "Intruders. Do not defile Lord Bellus's domain.",
						"japanese": "侵入者よ。ベルス様の領域を汚すな。",
						"chinese": "入侵者。休想玷污贝鲁斯大人的领域。",
						"french": "Intrus. Ne souillez pas le domaine de Seigneur Bellus.",
						"spanish": "Intrusos. No profanéis el dominio del Señor Bellus.",
						"vietnamese": "Những kẻ xâm nhập. Đừng làm ô uế lãnh địa của Lãnh chúa Bellus.",
						"thai": "ผู้บุกรุก อย่าทำให้ดินแดนของท่านเบลลัสแปดเปื้อน",
						"hindi": "घुसपैठियों। भगवान बेलस के क्षेत्र को अपवित्र मत करो।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "비켜. 널 쓰러뜨리고 지나간다.",
						"english": "Move. I'll take you down and pass.",
						"japanese": "どけ。お前を倒して進む。",
						"chinese": "让开。我会打败你然后过去。",
						"french": "Écarte-toi. Je te vaincrai et passerai.",
						"spanish": "Apártate. Te derribaré y pasaré.",
						"vietnamese": "Tránh ra. Ta sẽ đánh bại ngươi và đi qua.",
						"thai": "หลีกไป ข้าจะโค่นเจ้าลงแล้วผ่านไป",
						"hindi": "हट जाओ। मैं तुम्हें हरा कर आगे बढ़ूंगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"content": {
						"korean": "저 괴물… 룬에서 본 것 같아. 잊힌 시간의 수호자.",
						"english": "That monster... I think I saw it in the runes. Guardian of Forgotten Time.",
						"japanese": "あの怪物… ルーンで見た気がする。忘れられた時間の守護者。",
						"chinese": "那怪物……我好像在符文中见过。遗忘时间的守护者。",
						"french": "Ce monstre… Je crois l'avoir vu dans les runes. Gardien du Temps Oublié.",
						"spanish": "Ese monstruo... Creo que lo vi en las runas. Guardián del Tiempo Olvidado.",
						"vietnamese": "Con quái vật đó… hình như ta từng thấy nó trong các rune. Kẻ bảo vệ Thời Gian Lãng Quên.",
						"thai": "สัตว์ประหลาดนั่น... ข้าเคยเห็นมันในรูน ดูเหมือนจะเป็นผู้พิทักษ์แห่งกาลเวลาที่ถูกลืม",
						"hindi": "वह राक्षस… मुझे लगता है मैंने उसे रुने में देखा था। भूले हुए समय का संरक्षक।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "감히 주제를 넘보는구나. 여기서 영원히 박제시켜주마.",
						"english": "You dare defy me? I'll preserve you here for eternity.",
						"japanese": "分をわきまえぬか。ここで永遠に標本にしてやろう。",
						"chinese": "竟敢如此放肆。我将让你永远留在这里成为标本。",
						"french": "Comment oses-tu dépasser les bornes ? Je te momifierai ici pour l'éternité.",
						"spanish": "¡Cómo te atreves a desafiarme! Te preservaré aquí para la eternidad.",
						"vietnamese": "Ngươi dám vượt quá giới hạn ư. Ta sẽ biến ngươi thành tiêu bản vĩnh viễn tại đây.",
						"thai": "บังอาจนัก ข้าจะทำให้เจ้าเป็นสิ่งจัดแสดงถาวรที่นี่ตลอดไป",
						"hindi": "तुम्हारी हिम्मत कैसे हुई अपनी हद पार करने की। मैं तुम्हें यहीं हमेशा के लिए संरक्षित कर दूंगा।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "미래는 멸망한다. 너희도 곧 알게 될 것이다.",
						"english": "The future is doomed. You will soon know.",
						"japanese": "未来は滅亡する。お前たちもすぐに知るだろう。",
						"chinese": "未来将会灭亡。你们很快就会知道。",
						"french": "L'avenir est condamné. Vous aussi le saurez bientôt.",
						"spanish": "El futuro está condenado. Vosotros también lo sabréis pronto.",
						"vietnamese": "Tương lai sẽ bị diệt vong. Các ngươi cũng sẽ sớm biết thôi.",
						"thai": "อนาคตจะถึงกาลอวสาน พวกเจ้าจะรู้ในไม่ช้า",
						"hindi": "भविष्य बर्बाद है। तुम भी जल्द ही जान जाओगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "빌어먹을… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ… まだ終わってない！",
						"chinese": "该死……还没结束！",
						"french": "Maudit… Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea...! ¡Aún no ha terminado!",
						"vietnamese": "Khốn kiếp… Vẫn chưa kết thúc đâu!",
						"thai": "บ้าเอ๊ย... ยังไม่จบแค่นี้!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "그는… 무엇을 보았던 걸까…",
						"english": "What did he... see?",
						"japanese": "彼は…何を見たのだろうか…",
						"chinese": "他…看到了什么…",
						"french": "Qu'a-t-il bien pu voir...?",
						"spanish": "¿Qué habrá visto...?",
						"vietnamese": "Anh ta... đã thấy gì vậy...?",
						"thai": "เขา...เห็นอะไรกันนะ...?",
						"hindi": "उसने... क्या देखा होगा...?"
					},
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…크윽… 하지만 벨루스 님은… 멈추지 않아… 진정한 파괴로부터… 모든 것을… 구원할 것이다…",
						"english": "...Ugh... But Lord Bellus... will not stop... He will save... everything... from true destruction...",
						"japanese": "…くっ… しかしベルス様は… 止まらない… 真の破壊から… 全てを… 救うだろう…",
						"chinese": "……呃……但是贝卢斯大人……不会停止……他将从真正的毁灭中……拯救……一切……",
						"french": "...Ugh... Mais Seigneur Bellus... ne s'arrêtera pas... Il sauvera... tout... de la véritable destruction...",
						"spanish": "...Ugh... Pero Lord Bellus... no se detendrá... Él salvará... todo... de la verdadera destrucción...",
						"vietnamese": "…Khụ… Nhưng Lãnh chúa Bellus… sẽ không dừng lại… Ngài ấy sẽ cứu rỗi… mọi thứ… khỏi sự hủy diệt thực sự…",
						"thai": "...อึก... แต่ท่านเบลลัส... จะไม่หยุด... พระองค์จะช่วย... ทุกสิ่ง... จากการทำลายล้างที่แท้จริง...",
						"hindi": "...उफ... लेकिन लॉर्ड बेलस... रुकेंगे नहीं... वह सब कुछ... सच्ची तबाही से... बचा लेंगे..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "뭘 구원한다는 거야…?",
						"english": "Save what...?",
						"japanese": "何を救うっていうんだ…？",
						"chinese": "拯救什么……？",
						"french": "Sauver quoi… ?",
						"spanish": "¿Salvar qué…?",
						"vietnamese": "Cứu rỗi cái gì cơ…?",
						"thai": "ช่วยอะไร...?",
						"hindi": "क्या बचाएगा…?"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "벨루스… 진정한 파괴라… 그의 목적은 무엇이었을까…",
						"english": "Bellus... True destruction... What was his purpose...?",
						"japanese": "ベルス… 真の破壊か… 彼の目的は何だったのだろう…",
						"chinese": "贝卢斯……真正的毁灭……他的目的是什么……？",
						"french": "Bellus… La véritable destruction… Quel était son but… ?",
						"spanish": "Bellus... ¿Verdadera destrucción...? ¿Cuál era su propósito...?",
						"vietnamese": "Bellus… Sự hủy diệt thực sự… Mục đích của hắn là gì nhỉ…?",
						"thai": "เบลลัส... การทำลายล้างที่แท้จริง... จุดประสงค์ของเขาคืออะไรกันแน่...",
						"hindi": "बेलस… सच्ची तबाही… उसका मकसद क्या रहा होगा…?"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "괴물이 사라지자, 얼어붙은 기억의 흐름이 잠시 흔들렸다.",
						"english": "As the monster vanished, the flow of frozen memories wavered for a moment.",
						"japanese": "怪物が消えると、凍りついた記憶の流れが一時揺らいだ。",
						"chinese": "怪物消失后，冰封记忆的洪流暂时动摇了。",
						"french": "Alors que le monstre disparaissait, le flux des souvenirs gelés vacilla un instant.",
						"spanish": "Cuando el monstruo desapareció, el flujo de recuerdos congelados se tambaleó por un momento.",
						"vietnamese": "Khi con quái vật biến mất, dòng chảy của ký ức đóng băng khẽ rung chuyển trong chốc lát.",
						"thai": "เมื่อสัตว์ประหลาดหายไป กระแสความทรงจำที่หยุดนิ่งก็สั่นคลอนชั่วขณะ",
						"hindi": "जैसे ही राक्षस गायब हुआ, जमी हुई यादों का प्रवाह पल भर के लिए डगमगा गया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "벨루스의 그림자가 더욱 깊게 드리운다. 탐험대는 더 큰 진실을 향해 나아간다.",
						"english": "Bellus's shadow deepens further. The expedition team advances towards a greater truth.",
						"japanese": "ベルスの影がさらに深く差す。探検隊はより大きな真実へと進む。",
						"chinese": "贝卢斯的阴影更加深邃。探险队向着更大的真相前进。",
						"french": "L'ombre de Bellus s'épaissit. L'équipe d'exploration avance vers une vérité plus grande.",
						"spanish": "La sombra de Bellus se hace más profunda. El equipo de expedición avanza hacia una verdad mayor.",
						"vietnamese": "Bóng tối của Bellus càng trở nên sâu thẳm. Đoàn thám hiểm tiến về phía một sự thật lớn hơn.",
						"thai": "เงาของเบลลัสทอดลึกยิ่งขึ้น ทีมสำรวจมุ่งหน้าสู่ความจริงที่ยิ่งใหญ่กว่า",
						"hindi": "बेलस की छाया और गहरी होती है। अभियान दल एक बड़ी सच्चाई की ओर बढ़ता है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"영원의 설원, 모든 것이 멈춘 곳.",
			"벨루스가 얼린 기억들이 거대한 전시장처럼 펼쳐졌다.",
			"탐험대는 그 심장부로 향한다.",
			"그리고 에이라는, 그곳에서 잃어버린 순간을 마주한다."
		],
		"english": [
			"Eternal Snowfield, where everything stands still.",
			"Memories frozen by Bellus unfolded like a grand exhibition.",
			"The expedition team heads for its heart.",
			"And Aira, there, faces a lost moment."
		],
		"japanese": [
			"永遠の雪原、すべてが止まった場所。",
			"ベルースが凍らせた記憶が、巨大な展示場のように広がっていた。",
			"探検隊はその心臓部へ向かう。",
			"そしてアイラは、そこで失われた瞬間と向き合う。"
		],
		"chinese": [
			"永恒的雪原，万物静止之地。",
			"被贝鲁斯冻结的记忆，如同一座巨大的展馆般展开。",
			"探险队正前往其核心深处。",
			"艾拉在那里，面对着失去的瞬间。"
		],
		"french": [
			"L'étendue de neige éternelle, où tout est figé.",
			"Les souvenirs gelés par Bellus se déployaient comme une immense exposition.",
			"L'équipe d'expédition se dirige vers son cœur.",
			"Et Aira y affronte un instant perdu."
		],
		"spanish": [
			"El Campo de Nieve Eterno, donde todo se detiene.",
			"Los recuerdos congelados por Bellus se desplegaron como una gran exposición.",
			"El equipo de expedición se dirige a su corazón.",
			"Y Aira, allí, se enfrenta a un momento perdido."
		],
		"vietnamese": [
			"Đồng tuyết vĩnh cửu, nơi vạn vật dừng lại.",
			"Những ký ức bị Bellus đóng băng mở ra như một triển lãm khổng lồ.",
			"Đội thám hiểm tiến về trung tâm của nó.",
			"Và Aira, ở đó, đối mặt với một khoảnh khắc đã mất."
		],
		"thai": [
			"ทุ่งหิมะนิรันดร์ สถานที่ที่ทุกสิ่งหยุดนิ่ง",
			"ความทรงจำที่เบลลัสแช่แข็งถูกเปิดเผยราวกับนิทรรศการอันยิ่งใหญ่",
			"ทีมสำรวจมุ่งหน้าสู่ใจกลาง",
			"และไอรา ที่นั่น เผชิญหน้ากับช่วงเวลาที่หายไป"
		],
		"hindi": [
			"शाश्वत हिमक्षेत्र, जहाँ सब कुछ ठहर गया है।",
			"बेलस द्वारा जमी हुई यादें एक विशाल प्रदर्शनी की तरह खुल गईं।",
			"अभियान दल उसके हृदय की ओर बढ़ता है।",
			"और ऐरा, वहाँ, एक खोए हुए पल का सामना करती है।"
		]
	}
} as const;
