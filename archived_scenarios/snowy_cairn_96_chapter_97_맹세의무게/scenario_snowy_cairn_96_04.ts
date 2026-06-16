export const scenario_snowy_cairn_96_04 = {
	"scenario_id": "snowy_cairn_96_04",
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
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤이 둔탁하게 울렸다. 맹세의 순간이 다가왔다.",
						"english": "The stone tomb rumbled dully. The moment of the oath approached.",
						"japanese": "石の墓が鈍く鳴り響いた。誓いの瞬間が近づいた。",
						"chinese": "石墓沉闷地轰鸣。誓约的时刻临近了。",
						"french": "Le tombeau de pierre résonna sourdement. Le moment du serment approchait.",
						"spanish": "La tumba de piedra retumbó sordamente. El momento del juramento se acercaba.",
						"vietnamese": "Ngôi mộ đá vang lên một tiếng rền nặng nề. Khoảnh khắc của lời thề đã đến.",
						"thai": "หลุมศพหินสั่นสะเทือนอื้ออึง ช่วงเวลาแห่งคำสาบานใกล้เข้ามาแล้ว",
						"hindi": "पत्थरों का टीला धीमी आवाज़ में गूंजा। शपथ का क्षण आ गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
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
						"korean": "나눈 약속의 말들이… 허공에서 굳어가고 있어.",
						"english": "The words of our shared promises... are solidifying in the air.",
						"japanese": "交わした約束の言葉が…虚空で固まっていく。",
						"chinese": "我们分享的承诺之语…正在空中凝固。",
						"french": "Les mots de nos promesses partagées… se solidifient dans l'air.",
						"spanish": "Las palabras de nuestras promesas compartidas… se están solidificando en el aire.",
						"vietnamese": "Những lời hứa chúng ta đã chia sẻ... đang hóa đá trong không trung.",
						"thai": "ถ้อยคำแห่งสัญญาที่เราแบ่งปัน... กำลังแข็งตัวกลางอากาศ",
						"hindi": "हमारे साझा वादों के शब्द… हवा में जम रहे हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What does that mean?",
						"japanese": "どういう意味だ？",
						"chinese": "这是什么意思？",
						"french": "Qu'est-ce que ça veut dire ?",
						"spanish": "¿Qué significa eso?",
						"vietnamese": "Điều đó có nghĩa gì?",
						"thai": "นั่นหมายความว่าอะไร?",
						"hindi": "इसका क्या मतलब है?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시험이 시작된 거야. 기록될 진실의 시간.",
						"english": "The trial has begun. A time of truth to be recorded.",
						"japanese": "試練が始まったのだ。記録される真実の時。",
						"chinese": "考验已经开始了。记录真相的时刻。",
						"french": "L'épreuve a commencé. L'heure de la vérité à enregistrer.",
						"spanish": "La prueba ha comenzado. Un tiempo de verdad para ser registrado.",
						"vietnamese": "Cuộc thử thách đã bắt đầu. Thời khắc của sự thật sẽ được ghi lại.",
						"thai": "การทดสอบได้เริ่มต้นขึ้นแล้ว เวลาแห่งความจริงที่จะถูกบันทึก",
						"hindi": "परीक्षा शुरू हो गई है। सच को दर्ज करने का समय।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "맹세는 단순한 약속이 아니야. 심판의 기준이지.",
						"english": "An oath isn't just a promise. It's a standard for judgment.",
						"japanese": "誓いは単なる約束ではない。裁きの基準だ。",
						"chinese": "誓言不只是一项承诺。它是审判的标准。",
						"french": "Un serment n'est pas juste une promesse. C'est un critère de jugement.",
						"spanish": "Un juramento no es solo una promesa. Es un estándar para el juicio.",
						"vietnamese": "Lời thề không chỉ là một lời hứa. Nó là tiêu chuẩn cho sự phán xét.",
						"thai": "คำสาบานไม่ใช่แค่คำสัญญา แต่มันคือมาตรฐานของการตัดสิน",
						"hindi": "शपथ सिर्फ एक वादा नहीं है। यह न्याय का मापदंड है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심판이라니?",
						"english": "Judgment?",
						"japanese": "裁きだと？",
						"chinese": "审判？",
						"french": "Un jugement ?",
						"spanish": "¿Juicio?",
						"vietnamese": "Phán xét ư?",
						"thai": "การตัดสิน?",
						"hindi": "न्याय?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "돌무덤은 거짓을 용납하지 않아. 모든 것을 기록하려 해.",
						"english": "The stone tomb tolerates no lies. It seeks to record everything.",
						"japanese": "石塚は偽りを許さない。すべてを記録しようとする。",
						"chinese": "石冢不容谎言。它试图记录一切。",
						"french": "La tombe de pierre ne tolère aucun mensonge. Elle cherche à tout enregistrer.",
						"spanish": "La tumba de piedra no tolera mentiras. Busca registrarlo todo.",
						"vietnamese": "Mộ đá không dung thứ lời dối trá. Nó cố gắng ghi lại mọi thứ.",
						"thai": "สุสานหินไม่ทนต่อคำโกหก มันพยายามบันทึกทุกสิ่ง",
						"hindi": "पत्थर की कब्र झूठ बर्दाश्त नहीं करती। यह सब कुछ रिकॉर्ड करना चाहती है।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "마음 한구석에 불순한 셈을 품은 자가 있다면….",
						"english": "If there is one who harbors impure intentions in their heart...",
						"japanese": "心の片隅に不純な思惑を抱く者がいるならば…。",
						"chinese": "若有人心怀不轨…",
						"french": "Si quelqu'un nourrit des intentions impures dans son cœur...",
						"spanish": "Si hay alguien que alberga intenciones impuras en su corazón...",
						"vietnamese": "Nếu có kẻ nào ôm giữ ý đồ bất chính trong lòng...",
						"thai": "หากมีผู้ใดแอบซ่อนเจตนาร้ายไว้ในใจ...",
						"hindi": "यदि कोई अपने हृदय में अशुद्ध इरादे रखता है तो..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…어떻게 돼?",
						"english": "...what will happen?",
						"japanese": "…どうなる？",
						"chinese": "…会怎样？",
						"french": "...que se passera-t-il ?",
						"spanish": "...¿qué pasará?",
						"vietnamese": "...sẽ thế nào?",
						"thai": "...จะเกิดอะไรขึ้น?",
						"hindi": "...क्या होगा?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "손끝에 서리가 맺힐 거야. 자신을 얼어붙게 할 어둠이.",
						"english": "Frost will form on their fingertips. The darkness that will freeze them.",
						"japanese": "指先に霜が結ぶだろう。自分を凍えさせる闇が。",
						"chinese": "指尖将结霜。那会将自己冻结的黑暗。",
						"french": "Le givre se formera à leurs doigts. L'obscurité qui les figera.",
						"spanish": "Escarcha se formará en sus dedos. La oscuridad que los congelará.",
						"vietnamese": "Sương giá sẽ kết trên đầu ngón tay. Bóng tối sẽ đóng băng chính họ.",
						"thai": "น้ำแข็งจะเกาะที่ปลายนิ้ว ความมืดมิดที่จะทำให้พวกเขาแข็งตาย",
						"hindi": "उनकी उंगलियों पर पाला जम जाएगा। वह अंधेरा जो उन्हें जमा देगा।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "보여? 너희가 나눈 약속의 말들이 — 허공에서 깨질 듯 굳어가고 있어.",
						"english": "See? The words of promise you exchanged—are solidifying in the air, almost shattering.",
						"japanese": "見えるか？お前たちが交わした約束の言葉が — 空中で砕け散るように固まっていく。",
						"chinese": "看到吗？你们立下的誓言——正在空中凝固，几欲破碎。",
						"french": "Voyez-vous ? Les mots de promesse que vous avez échangés — se solidifient dans l'air, sur le point de se briser.",
						"spanish": "¿Ves? Las palabras de promesa que intercambiaron — se están solidificando en el aire, a punto de romperse.",
						"vietnamese": "Thấy không? Lời hứa của các ngươi — đang cứng lại giữa không trung, gần như vỡ vụn.",
						"thai": "เห็นไหม? ถ้อยคำสัญญาที่พวกเจ้าแลกเปลี่ยนกัน — กำลังแข็งตัวในอากาศ ราวกับจะแตกสลาย",
						"hindi": "देखते हो? तुम्हारे वादे के शब्द — हवा में जम रहे हैं, मानो टूटने ही वाले हों।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이게… 시험의 증거인가.",
						"english": "Is this... proof of the trial?",
						"japanese": "これが…試練の証か。",
						"chinese": "这是…试炼的证据吗？",
						"french": "Est-ce... la preuve de l'épreuve ?",
						"spanish": "¿Es esto... la prueba del juicio?",
						"vietnamese": "Đây là... bằng chứng của thử thách sao?",
						"thai": "นี่คือ... หลักฐานของการทดสอบรึ?",
						"hindi": "क्या यह... परीक्षा का सबूत है?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "거의 다 왔어. 이 맹세의 무게가, 곧 심판될 거야.",
						"english": "Almost there. The weight of this vow will soon be judged.",
						"japanese": "もうすぐだ。この誓いの重さが、間もなく裁かれる。",
						"chinese": "差不多了。这份誓言的重量，很快就会被审判。",
						"french": "C'est presque fini. Le poids de ce serment sera bientôt jugé.",
						"spanish": "Ya casi está. El peso de este juramento será pronto juzgado.",
						"vietnamese": "Sắp rồi. Trọng lượng của lời thề này, sẽ sớm được phán xét.",
						"thai": "ใกล้แล้ว น้ำหนักของคำสาบานนี้ กำลังจะถูกตัดสิน",
						"hindi": "लगभग हो गया। इस प्रतिज्ञा के महत्व का जल्द ही न्याय होगा।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "강렬한 냉기가 탐험대를 덮쳤다. 맹세는 시험을 견디지 못했다.",
						"english": "An intense chill enveloped the expedition team. The oath could not withstand the trial.",
						"japanese": "強烈な冷気が探検隊を襲った。誓いは試練に耐えられなかった。",
						"chinese": "一股强烈的寒意笼罩了探险队。誓言未能经受住考验。",
						"french": "Un froid intense enveloppa l'équipe d'expédition. Le serment ne put résister à l'épreuve.",
						"spanish": "Un frío intenso envolvió al equipo de expedición. El juramento no pudo soportar la prueba.",
						"vietnamese": "Một luồng khí lạnh cực độ bao trùm đội thám hiểm. Lời thề không thể chịu đựng được thử thách.",
						"thai": "ความหนาวเย็นอันรุนแรงปกคลุมทีมสำรวจ คำสาบานไม่อาจทนทานต่อการทดสอบได้",
						"hindi": "एक तीव्र ठंड ने अभियान दल को घेर लिया। शपथ परीक्षा का सामना नहीं कर पाई।"
					}
				},
				{
					"content": {
						"korean": "거짓된 맹세는… 스스로를 얼어붙게 하는 법.",
						"english": "A false oath… freezes itself.",
						"japanese": "偽りの誓いは…自らを凍てつかせるもの。",
						"chinese": "虚假的誓言…会让自己冻结。",
						"french": "Un faux serment… se fige lui-même.",
						"spanish": "Un juramento falso… se congela a sí mismo.",
						"vietnamese": "Một lời thề giả dối… tự làm đóng băng chính nó.",
						"thai": "คำสาบานที่เป็นเท็จ… จะแข็งตายด้วยตัวของมันเอง",
						"hindi": "एक झूठी शपथ… खुद को जमा देती है।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 다시… 반드시 증명할 거야!",
						"english": "…It's not over yet. I will… definitely prove it again!",
						"japanese": "…まだ終わってない。もう一度…必ず証明してみせる！",
						"chinese": "…还没结束。我还会…再次证明的！",
						"french": "…Ce n'est pas encore fini. Je vais… le prouver à nouveau, c'est sûr !",
						"spanish": "…Aún no ha terminado. ¡Lo… demostraré de nuevo, cueste lo que cueste!",
						"vietnamese": "…Chưa kết thúc. Tôi sẽ… nhất định chứng minh lại!",
						"thai": "…ยังไม่จบ ฉันจะ… พิสูจน์อีกครั้งแน่นอน!",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं… इसे फिर से साबित करूंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자가 길을 막았다. 맹세의 무게를 시험하는 자였다.",
						"english": "A colossal shadow blocked the path. It was the one who tests the weight of vows.",
						"japanese": "巨大な影が道を塞いだ。それは誓いの重さを試す者だった。",
						"chinese": "巨大的阴影挡住了去路。那是考验誓言分量之人。",
						"french": "Une ombre colossale bloquait le chemin. C'était celui qui testait le poids des serments.",
						"spanish": "Una sombra colosal bloqueó el camino. Era quien ponía a prueba el peso de los juramentos.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường. Đó là kẻ thử thách trọng lượng của lời thề.",
						"thai": "เงาขนาดมหึมาขวางทาง มันคือผู้ที่ทดสอบน้ำหนักของคำสาบาน",
						"hindi": "एक विशाल छाया ने रास्ता रोक दिया। यह वह था जो प्रतिज्ञाओं के महत्व को परखता है।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희가 나눈 약속의 말들은 — 진실인가?",
						"english": "Are the words of promise you exchanged—true?",
						"japanese": "お前たちが交わした約束の言葉は — 真実か？",
						"chinese": "你们立下的誓言——是真实的吗？",
						"french": "Les mots de promesse que vous avez échangés — sont-ils vrais ?",
						"spanish": "Las palabras de promesa que intercambiaron — ¿son verdaderas?",
						"vietnamese": "Lời hứa các ngươi đã trao — có phải là sự thật?",
						"thai": "ถ้อยคำสัญญาที่พวกเจ้าแลกเปลี่ยนกัน — เป็นความจริงหรือ?",
						"hindi": "तुमने जो वादे के शब्द बदले — क्या वे सच हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "물론이다! 의심하지 마라.",
						"english": "Of course! Do not doubt it.",
						"japanese": "もちろん！疑うな。",
						"chinese": "当然！不要怀疑。",
						"french": "Bien sûr ! Ne doutez pas.",
						"spanish": "¡Claro que sí! No lo dudes.",
						"vietnamese": "Dĩ nhiên! Đừng nghi ngờ.",
						"thai": "แน่นอน! อย่าสงสัยเลย",
						"hindi": "बिलकुल! संदेह मत करो।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그렇다면 증명해라. 거짓은 이 자리에서 얼어붙을 것이다.",
						"english": "Then prove it. Lies shall freeze in this place.",
						"japanese": "ならば証明しろ。偽りはここで凍てつくだろう。",
						"chinese": "那就证明吧。谎言将在此地冻结。",
						"french": "Alors prouve-le. Les mensonges gèleront en ce lieu.",
						"spanish": "Entonces pruébalo. Las mentiras se congelarán en este lugar.",
						"vietnamese": "Vậy thì hãy chứng minh đi. Lời nói dối sẽ đóng băng tại đây.",
						"thai": "ถ้าเช่นนั้นก็พิสูจน์มา คำโกหกจะแข็งตาย ณ ที่แห่งนี้",
						"hindi": "तो साबित करो। झूठ यहीं जम जाएगा।"
					},
					"speaker": "random_boss"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"content": {
						"korean": "맹세는… 지켜졌다. 그러나… 모든 진실이 드러난 것은 아니다.",
						"english": "The oath… was kept. But… not all truths have been revealed.",
						"japanese": "誓いは…守られた。しかし…全ての真実が明かされたわけではない。",
						"chinese": "誓言…已遵守。然而…并非所有真相都已揭示。",
						"french": "Le serment… fut tenu. Mais… toutes les vérités n'ont pas été révélées.",
						"spanish": "El juramento… fue cumplido. Pero… no todas las verdades han sido reveladas.",
						"vietnamese": "Lời thề… đã được giữ. Nhưng… không phải tất cả sự thật đã được tiết lộ.",
						"thai": "คำสาบาน… ถูกรักษาไว้แล้ว ทว่า… ความจริงทั้งหมดไม่ได้ถูกเปิดเผย",
						"hindi": "शपथ… निभाई गई। लेकिन… सभी सच अभी सामने नहीं आए हैं।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리가 해냈어! 심판을 견뎌냈다고!",
						"english": "We did it! We endured the judgment!",
						"japanese": "やったぞ！審判に耐え抜いた！",
						"chinese": "我们做到了！我们经受住了审判！",
						"french": "On l'a fait ! Nous avons enduré le jugement !",
						"spanish": "¡Lo logramos! ¡Soportamos el juicio!",
						"vietnamese": "Chúng ta đã làm được! Chúng ta đã chịu đựng được sự phán xét!",
						"thai": "เราทำได้! เราทนต่อการพิพากษาได้แล้ว!",
						"hindi": "हमने कर दिखाया! हमने न्याय सहन कर लिया!"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "맹세는 기록되었다. 하지만, 깨어진 서약의 역사는… 아직 끝나지 않았다.",
						"english": "The oath is recorded. But the history of broken vows… is not yet over.",
						"japanese": "誓いは記録された。だが、破られた誓約の歴史は…まだ終わっていない。",
						"chinese": "誓言已记录。然而，被打破的誓约的历史…尚未结束。",
						"french": "Le serment est enregistré. Mais l'histoire des vœux brisés… n'est pas encore terminée.",
						"spanish": "El juramento está registrado. Pero la historia de los votos rotos… aún no ha terminado.",
						"vietnamese": "Lời thề đã được ghi lại. Nhưng lịch sử của những lời thề bị phá vỡ… vẫn chưa kết thúc.",
						"thai": "คำสาบานถูกบันทึกไว้แล้ว แต่ประวัติศาสตร์ของคำสาบานที่แตกหัก… ยังไม่จบลง",
						"hindi": "शपथ दर्ज हो गई है। लेकिन टूटे वादों का इतिहास… अभी खत्म नहीं हुआ है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "시험은 끝났다. 그러나 약속의 진정한 무게는 — 아직 남아 있었다.",
						"english": "The trial is over. But the true weight of the promise — still remained.",
						"japanese": "試練は終わった。だが、約束の真の重みは—まだ残っていた。",
						"chinese": " испытание结束了。然而，诺言的真正分量——依然存在。",
						"french": "L'épreuve est terminée. Mais le véritable poids de la promesse — demeurait encore.",
						"spanish": "La prueba ha terminado. Pero el verdadero peso de la promesa — aún permanecía.",
						"vietnamese": "Cuộc thử thách đã kết thúc. Nhưng trọng lượng thực sự của lời hứa — vẫn còn đó.",
						"thai": "การทดสอบสิ้นสุดลงแล้ว แต่ภาระที่แท้จริงของคำมั่นสัญญา — ยังคงอยู่",
						"hindi": "परीक्षा खत्म हो गई। लेकिन वादे का असली वज़न — अभी भी बाकी था।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"돌무덤은 고대의 침묵을 지키고 있었다.",
			"그러나 그 침묵 속에는, 기다림이 있었다.",
			"우리가 나눈 위태로운 약속들.",
			"진심이었는지, 아니었는지 — 이제 그 기록이 시작된다."
		],
		"english": [
			"The stone tomb held ancient silence.",
			"Yet within that silence, there was waiting.",
			"The perilous promises we shared.",
			"Whether sincere or not — now, the record begins."
		],
		"japanese": [
			"石の墓は古代の沈黙を守っていた。",
			"しかし、その沈黙の中には、待機があった。",
			"私たちが交わした危うい約束。",
			"真心だったのか、そうではなかったのか — 今、その記録が始まる。"
		],
		"chinese": [
			"石墓守候着古老的寂静。",
			"然而，在那寂静之中，却有等待。",
			"我们曾分享的岌岌可危的承诺。",
			"无论是真心与否——现在，记录开始了。"
		],
		"french": [
			"Le tombeau de pierre gardait un silence ancestral.",
			"Cependant, au cœur de ce silence, il y avait une attente.",
			"Les promesses périlleuses que nous avons partagées.",
			"Sincères ou non — maintenant, le récit commence."
		],
		"spanish": [
			"La tumba de piedra guardaba un silencio ancestral.",
			"Sin embargo, dentro de ese silencio, había una espera.",
			"Las promesas peligrosas que compartimos.",
			"Fuesen sinceras o no — ahora, el registro comienza."
		],
		"vietnamese": [
			"Ngôi mộ đá giữ sự im lặng cổ xưa.",
			"Tuy nhiên, trong sự im lặng đó, có một sự chờ đợi.",
			"Những lời hứa nguy hiểm mà chúng ta đã chia sẻ.",
			"Dù có chân thành hay không — bây giờ, bản ghi bắt đầu."
		],
		"thai": [
			"หลุมศพหินเฝ้าความเงียบงันแต่โบราณ",
			"แต่ในความเงียบงันนั้น มีการรอคอย",
			"คำมั่นสัญญาที่อันตรายที่เราได้แบ่งปัน",
			"ไม่ว่าจริงใจหรือไม่ — บันทึกเริ่มต้นขึ้นแล้ว"
		],
		"hindi": [
			"पत्थरों का टीला प्राचीन मौन धारण किए था।",
			"लेकिन उस मौन में, एक इंतज़ार था।",
			"हमारे बीच के खतरनाक वादे।",
			"चाहे सच्चे थे या नहीं — अब, उसका लेखा-जोखा शुरू होता है।"
		]
	}
} as const;
