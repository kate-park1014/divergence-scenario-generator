export const scenario_snowy_cairn_86_03 = {
	"scenario_id": "snowy_cairn_86_03",
	"order": 3,
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌무덤은 거대한 심판의 자리로 변했다. 수많은 형상들이 얼어붙어 있었다.",
						"english": "The cairn transformed into a vast judgment seat. Countless figures were frozen.",
						"japanese": "ケルンは巨大な審判の場と化した。無数の像が凍りついていた。",
						"chinese": "石冢变成了巨大的审判之地。无数形体被冻结在那里。",
						"french": "Le cairn s'est transformé en un immense siège de jugement. D'innombrables figures étaient figées.",
						"spanish": "El túmulo se transformó en un vasto asiento de juicio. Innumerables figuras estaban congeladas.",
						"vietnamese": "Mộ đá biến thành một ghế phán xét khổng lồ. Vô số hình dạng đã bị đóng băng.",
						"thai": "กองหินกลายเป็นบัลลังก์แห่งการพิพากษาอันยิ่งใหญ่ ร่างมากมายถูกแช่แข็งไว้",
						"hindi": "शिलास्मारक एक विशाल न्याय के आसन में बदल गया। अनगिनत आकृतियाँ जमी हुई थीं।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…여기까지 온 자는 처음이군요.",
						"english": "...You're the first one to come this far.",
						"japanese": "…ここまで来た者は初めてですね。",
						"chinese": "...你是第一个走到这里的人。",
						"french": "...Vous êtes le premier à être venu jusqu'ici.",
						"spanish": "...Eres el primero en llegar tan lejos.",
						"vietnamese": "Bạn là người đầu tiên đến được đây.",
						"thai": "...คุณเป็นคนแรกที่มาได้ไกลขนาดนี้",
						"hindi": "...तुम यहाँ तक पहुँचने वाले पहले व्यक्ति हो।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 얼어붙은 자들의 사연은… 모두 비슷해요.",
						"english": "The stories of these frozen souls... they're all quite similar.",
						"japanese": "この凍りついた者たちの話は…どれも似ています。",
						"chinese": "这些被冻结的人的故事……都差不多。",
						"french": "Les histoires de ces êtres figés... elles sont toutes assez similaires.",
						"spanish": "Las historias de estas almas congeladas... son todas bastante similares.",
						"vietnamese": "Câu chuyện của những người bị đóng băng này... đều khá giống nhau.",
						"thai": "เรื่องราวของพวกที่ถูกแช่แข็งนี้... ล้วนคล้ายคลึงกัน",
						"hindi": "इन जमे हुए लोगों की कहानियाँ... सभी काफी मिलती-जुलती हैं।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 사연이야?",
						"english": "What stories?",
						"japanese": "どんな話なんだ？",
						"chinese": "什么故事？",
						"french": "Quelles histoires ?",
						"spanish": "¿Qué historias?",
						"vietnamese": "Chuyện gì vậy?",
						"thai": "เรื่องราวอะไร?",
						"hindi": "क्या कहानियाँ?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "이들은 모두 무언가 변명하려다 굳었어요.",
						"english": "They all tried to make excuses, then froze solid.",
						"japanese": "彼らは皆、何か言い訳をしようとして固まったのです。",
						"chinese": "他们都想找借口，然后就僵硬了。",
						"french": "Ils ont tous essayé de se justifier, puis se sont figés.",
						"spanish": "Todos intentaron excusarse y luego se congelaron.",
						"vietnamese": "Họ đều cố gắng biện minh điều gì đó, rồi đông cứng lại.",
						"thai": "พวกเขาล้วนพยายามแก้ตัวอะไรบางอย่าง ก่อนจะแข็งค้างไป",
						"hindi": "वे सब कुछ बहाना बनाने की कोशिश कर रहे थे, फिर जम गए।"
					}
				},
				{
					"content": {
						"korean": "변명? 하지만 얼어버린 거잖아?",
						"english": "Excuses? But they're frozen, aren't they?",
						"japanese": "言い訳？でも、凍ってしまったんじゃないのか？",
						"chinese": "借口？但他们不是都被冻结了吗？",
						"french": "Des excuses ? Mais ils sont figés, n'est-ce pas ?",
						"spanish": "¿Excusas? ¿Pero no están congelados?",
						"vietnamese": "Biện minh ư? Nhưng họ đã đóng băng rồi mà?",
						"thai": "แก้ตัว? แต่พวกเขาถูกแช่แข็งแล้วไม่ใช่เหรอ?",
						"hindi": "बहाने? लेकिन वे जम गए हैं ना?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "네. 이 푸른빛은 아무것도 듣지 않았어요.",
						"english": "Yes. This blue light heard nothing.",
						"japanese": "ええ。この青い光は何も聞きませんでした。",
						"chinese": "是的。这束蓝光什么都没听到。",
						"french": "Oui. Cette lumière bleue n'a rien entendu.",
						"spanish": "Sí. Esta luz azul no escuchó nada.",
						"vietnamese": "Vâng. Ánh sáng xanh này không nghe thấy gì cả.",
						"thai": "ใช่ แสงสีน้ำเงินนี้ไม่ได้ยินอะไรเลย",
						"hindi": "हाँ। इस नीली रोशनी ने कुछ नहीं सुना।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "분노도, 슬픔도 없이… 그저 무표정할 뿐이에요.",
						"english": "Without anger, without sorrow... just expressionless.",
						"japanese": "怒りも、悲しみもなく…ただ無表情なだけです。",
						"chinese": "没有愤怒，没有悲伤……只有面无表情。",
						"french": "Sans colère, sans chagrin... juste inexpressif.",
						"spanish": "Sin ira, sin tristeza... simplemente inexpresiva.",
						"vietnamese": "Không giận dữ, không buồn bã... chỉ là vô cảm.",
						"thai": "ไร้ซึ่งความโกรธ ไร้ซึ่งความเศร้า...เพียงแค่ไร้อารมณ์",
						"hindi": "क्रोध के बिना, दुख के बिना... बस भावहीन।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "감정이 없어. 이건… 온정 없는 심판 그 자체에요.",
						"english": "No emotion. This is... judgment without warmth itself.",
						"japanese": "感情がない。これは…情け容赦ない審判そのものです。",
						"chinese": "没有情感。这……就是无情的审判本身。",
						"french": "Pas d'émotion. C'est... le jugement sans aucune chaleur.",
						"spanish": "Sin emoción. Esto es... el juicio sin piedad en sí mismo.",
						"vietnamese": "Không cảm xúc. Đây là... sự phán xét vô tình.",
						"thai": "ไร้อารมณ์ นี่คือ...การพิพากษาที่ปราศจากความเมตตา",
						"hindi": "कोई भावना नहीं। यह... करुणाहीन निर्णय है।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…온정 없는 심판이라니.",
						"english": "...Judgment without warmth, you say.",
						"japanese": "…情け容赦ない審判、だと。",
						"chinese": "……无情的审判。",
						"french": "...Un jugement sans chaleur, dites-vous.",
						"spanish": "...¿Un juicio sin piedad?",
						"vietnamese": "...Phán xét vô tình sao.",
						"thai": "...การพิพากษาที่ปราศจากความเมตตาหรือนี่",
						"hindi": "...करुणाहीन निर्णय, तुम कहते हो।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이곳에서는 어떤 사정도 참작되지 않아요.",
						"english": "Here, no circumstances are considered.",
						"japanese": "ここでは、いかなる事情も考慮されません。",
						"chinese": "在这里，任何情况都不予考虑。",
						"french": "Ici, aucune circonstance n'est prise en compte.",
						"spanish": "Aquí, ninguna circunstancia es considerada.",
						"vietnamese": "Ở đây, không có hoàn cảnh nào được xem xét.",
						"thai": "ที่นี่ ไม่มีสถานการณ์ใดได้รับการพิจารณา",
						"hindi": "यहां, कोई भी परिस्थिति पर विचार नहीं किया जाता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "그럼 깨어진 맹세는 무조건 대가를 치러야 한다는 거야?",
						"english": "So, a broken vow must always be paid for?",
						"japanese": "じゃあ、破られた誓いは無条件に対価を払わなければならないってこと？",
						"chinese": "那么，破碎的誓言就必须无条件付出代价吗？",
						"french": "Alors, un serment brisé doit toujours être payé ?",
						"spanish": "¿Así que un juramento roto siempre debe pagarse?",
						"vietnamese": "Vậy, một lời thề bị phá vỡ phải trả giá bằng mọi cách sao?",
						"thai": "งั้นคำสาบานที่แตกหักต้องชดใช้เสมอไปเหรอ?",
						"hindi": "तो, एक टूटी हुई प्रतिज्ञा का भुगतान हमेशा करना पड़ता है?"
					}
				},
				{
					"content": {
						"korean": "네. 까닭과 상관없이… 맹세를 어기면 그대로 얼어붙어요.",
						"english": "Yes. Regardless of the reason... break a vow, and you're frozen.",
						"japanese": "ええ。理由に関わらず…誓いを破れば、そのまま凍りつきます。",
						"chinese": "是的。无论出于何种原因……违背誓言，就会被冻结。",
						"french": "Oui. Quelle qu'en soit la raison... brisez un serment, et vous êtes gelé.",
						"spanish": "Sí. Sin importar la razón... rompes un juramento y te congelas.",
						"vietnamese": "Vâng. Bất kể lý do... nếu phá vỡ lời thề, bạn sẽ bị đóng băng.",
						"thai": "ใช่ ไม่ว่าจะด้วยเหตุผลใด...ผิดคำสาบาน คุณจะถูกแช่แข็ง",
						"hindi": "हाँ। कारण की परवाह किए बिना... प्रतिज्ञा तोड़ते ही आप जम जाते हैं।"
					},
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "너무 잔혹하잖아!",
						"english": "That's too cruel!",
						"japanese": "あまりにも残酷すぎる！",
						"chinese": "这太残酷了！",
						"french": "C'est trop cruel !",
						"spanish": "¡Es demasiado cruel!",
						"vietnamese": "Quá tàn nhẫn!",
						"thai": "มันโหดร้ายเกินไปแล้ว!",
						"hindi": "यह बहुत क्रूर है!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 심판의 자리에… 예외는 없었어요.",
						"english": "In this place of judgment... there were no exceptions.",
						"japanese": "この審判の場に…例外はありませんでした。",
						"chinese": "在这个审判之地……没有例外。",
						"french": "Dans ce lieu de jugement... il n'y a eu aucune exception.",
						"spanish": "En este lugar de juicio... no hubo excepciones.",
						"vietnamese": "Ở nơi phán xét này... không có ngoại lệ.",
						"thai": "ในสถานที่แห่งการพิพากษานี้...ไม่มีข้อยกเว้น",
						"hindi": "इस निर्णय के स्थान पर... कोई अपवाद नहीं था।"
					},
					"speaker": "eira",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "용서받고 풀려난 자는 없다는 거구나.",
						"english": "So, no one was forgiven and released.",
						"japanese": "許されて解放された者はいない、ということか。",
						"chinese": "也就是说，没有人被原谅并释放。",
						"french": "Donc, personne n'a été pardonné et libéré.",
						"spanish": "Así que, nadie fue perdonado y liberado.",
						"vietnamese": "Vậy là, không ai được tha thứ và thả tự do.",
						"thai": "แสดงว่า ไม่มีใครได้รับการให้อภัยและปล่อยตัวสินะ",
						"hindi": "तो, किसी को माफ़ करके रिहा नहीं किया गया।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "네. 그리고… 심판을 집행하는 자가 가까워지고 있어요.",
						"english": "Yes. And… the one who executes judgment is drawing near.",
						"japanese": "はい。そして… 審判を執行する者が迫っています。",
						"chinese": "是的。而且……执行审判之人正在靠近。",
						"french": "Oui. Et… celui qui exécute le jugement approche.",
						"spanish": "Sí. Y… el ejecutor del juicio se acerca.",
						"vietnamese": "Vâng. Và… kẻ thi hành phán xét đang đến gần.",
						"thai": "ครับ/ค่ะ และ… ผู้พิพากษากำลังใกล้เข้ามาแล้ว",
						"hindi": "हाँ। और… न्याय करने वाला निकट आ रहा है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 그들을 덮쳤다. 차가운 공기가 폐부를 찔렀다.",
						"english": "A colossal shadow engulfed them. Cold air pierced their lungs.",
						"japanese": "巨大な影が彼らを覆った。冷たい空気が肺を突き刺した。",
						"chinese": "巨大的阴影笼罩了他们。冰冷的空气刺入肺腑。",
						"french": "Une ombre colossale les enveloppa. L'air froid leur transperça les poumons.",
						"spanish": "Una sombra colosal los envolvió. El aire frío les perforó los pulmones.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm lấy họ. Luồng khí lạnh thấu xương buốt phổi.",
						"thai": "เงามหึมากลืนกินพวกเขา อากาศหนาวเหน็บแทงทะลุปอด",
						"hindi": "एक विशाल छाया ने उन्हें घेर लिया। ठंडी हवा ने उनके फेफड़ों को भेद दिया।"
					},
					"speaker": "narrator"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 자들이여… 감히 심판에 저항하려 하는가.",
						"english": "Weaklings... Dare you defy judgment?",
						"japanese": "弱き者たちよ… 審判に抗うというのか。",
						"chinese": "弱者们……竟敢反抗审判？",
						"french": "Faibles... Osez-vous défier le jugement ?",
						"spanish": "Débiles... ¿Os atrevéis a desafiar el juicio?",
						"vietnamese": "Những kẻ yếu ớt... Dám chống lại sự phán xét sao?",
						"thai": "พวกเจ้าผู้อ่อนแอ... กล้าดียังไงมาท้าทายการพิพากษา?",
						"hindi": "कमजोरों... क्या तुम न्याय को धिक्कारने का साहस करते हो?"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "크윽… 아직 포기 안 해!",
						"english": "Ugh... Not giving up yet!",
						"japanese": "くっ… まだ諦めない！",
						"chinese": "呃……我还没放弃！",
						"french": "Argh... Pas encore de capitulation !",
						"spanish": "¡Ugh... Todavía no me rindo!",
						"vietnamese": "Khốn kiếp... Tôi chưa bỏ cuộc!",
						"thai": "อึก... ยังไม่ยอมแพ้!",
						"hindi": "उफ़... अभी हार नहीं मानी!"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "감정이 없는 자에게… 분노는 의미 없어요. 하지만…",
						"english": "To one without emotions... anger is meaningless. But...",
						"japanese": "感情なき者に… 怒りは無意味。けれど…",
						"chinese": "对无情之人……愤怒毫无意义。但是……",
						"french": "Pour celui sans émotions... la colère est vaine. Mais...",
						"spanish": "Para quien no tiene emociones... la ira no tiene sentido. Pero...",
						"vietnamese": "Với kẻ vô cảm... giận dữ là vô nghĩa. Nhưng...",
						"thai": "สำหรับผู้ไร้อารมณ์... ความโกรธไม่มีความหมาย แต่ว่า...",
						"hindi": "जिसमें भावनाएँ नहीं... उसके लिए क्रोध व्यर्थ है। पर..."
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "멈출 수 없어! 진실을 밝혀야 해!",
						"english": "Can't stop! I must reveal the truth!",
						"japanese": "止められない！真実を明らかにしなければ！",
						"chinese": "无法停止！我必须揭示真相！",
						"french": "Je ne peux pas m'arrêter ! Je dois révéler la vérité !",
						"spanish": "¡No puedo parar! ¡Debo revelar la verdad!",
						"vietnamese": "Không thể dừng lại! Phải phơi bày sự thật!",
						"thai": "หยุดไม่ได้! ต้องเปิดเผยความจริง!",
						"hindi": "रुक नहीं सकता! मुझे सच बताना होगा!"
					},
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "누가 이곳의 법도를 거역하는가?",
						"english": "Who dares defy the laws of this place?",
						"japanese": "誰がこの地の法に逆らうのか？",
						"chinese": "谁敢违抗此地的法则？",
						"french": "Qui ose défier les lois de ce lieu ?",
						"spanish": "¿Quién osa desafiar las leyes de este lugar?",
						"vietnamese": "Kẻ nào dám kháng cự luật lệ nơi đây?",
						"thai": "ใครบังอาจฝ่าฝืนกฎของที่นี่?",
						"hindi": "कौन इस स्थान के नियमों का उल्लंघन करता है?"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "맹세는 깨어졌고, 대가는 치러져야 한다.",
						"english": "The oath is broken. A price must be paid.",
						"japanese": "誓いは破られた。代償は支払われるべきだ。",
						"chinese": "誓言已破，代价必偿。",
						"french": "Le serment est brisé. Le prix doit être payé.",
						"spanish": "El juramento ha sido roto. Un precio debe pagarse.",
						"vietnamese": "Lời thề đã bị phá vỡ, cái giá phải trả.",
						"thai": "สัตย์สาบานถูกหักหลัง และต้องชดใช้",
						"hindi": "प्रतिज्ञा टूट गई है, और कीमत चुकानी होगी।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "그는 이 심판의 구현체… 감정이 없는 존재에요.",
						"english": "He is the embodiment of this judgment… a being devoid of emotion.",
						"japanese": "彼はこの審判の具現化… 感情なき存在だ。",
						"chinese": "他是这场审判的具象化……一个没有感情的存在。",
						"french": "Il est l'incarnation de ce jugement… un être dépourvu d'émotion.",
						"spanish": "Él es la encarnación de este juicio… un ser desprovisto de emoción.",
						"vietnamese": "Hắn ta là hiện thân của phán xét này… một kẻ vô cảm.",
						"thai": "เขาคือร่างอวตารของการพิพากษานี้… สิ่งมีชีวิตไร้อารมณ์",
						"hindi": "वह इस न्याय का प्रतिरूप है… एक भावहीन सत्ता।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "그래도 싸워야 해! 이런 심판은 옳지 않아!",
						"english": "We must still fight! This judgment is unjust!",
						"japanese": "それでも戦わなければ！こんな審判は間違っている！",
						"chinese": "即使如此，也必须战斗！这样的审判是不对的！",
						"french": "Il faut se battre quand même ! Ce jugement est injuste !",
						"spanish": "¡Aun así, debemos luchar! ¡Este juicio no es justo!",
						"vietnamese": "Dù vậy vẫn phải chiến đấu! Phán xét thế này là không đúng!",
						"thai": "เราต้องสู้! การพิพากษาแบบนี้ไม่ถูกต้อง!",
						"hindi": "फिर भी, हमें लड़ना होगा! यह न्याय सही नहीं है!"
					},
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…하나를 꺾어도… 심판은… 계속된다…",
						"english": "…Even if one falls… the judgment… continues…",
						"japanese": "…一つを倒しても… 審判は… 続く…",
						"chinese": "……即使击败一个……审判也……会继续……",
						"french": "…Même si l'un tombe… le jugement… continue…",
						"spanish": "…Aunque uno caiga… el juicio… continúa…",
						"vietnamese": "…Dù hạ gục một kẻ… phán xét vẫn… tiếp diễn…",
						"thai": "…แม้ล้มไปหนึ่ง… การพิพากษา… ก็ยังคงดำเนินต่อไป…",
						"hindi": "…एक को हराने पर भी… न्याय… जारी रहेगा…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "감히 우리를 심판하려 들다니….",
						"english": "How dare you try to judge us…?",
						"japanese": "よくも我らを裁こうなどと…。",
						"chinese": "竟敢妄想审判我们……。",
						"french": "Comment osez-vous tenter de nous juger…?",
						"spanish": "¿Cómo osas intentar juzgarnos…?",
						"vietnamese": "Dám cả gan phán xét chúng ta…",
						"thai": "กล้าดียังไงมาตัดสินพวกเรา…",
						"hindi": "तुम्हारी हिम्मत कैसे हुई हमें न्याय करने की कोशिश करने की…?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "그는 그저… 심판의 일부였을 뿐이에요. 본체는…",
						"english": "He was merely… a part of the judgment. The true form is…",
						"japanese": "彼はただ… 審判の一部だったに過ぎない。本体は…",
						"chinese": "他只不过是……审判的一部分。本体是……",
						"french": "Il n'était qu'… une partie du jugement. La vraie entité est…",
						"spanish": "Él era solo… una parte del juicio. La verdadera forma es…",
						"vietnamese": "Hắn ta chỉ là… một phần của phán xét. Bản thể thật sự thì…",
						"thai": "เขาเป็นเพียง… ส่วนหนึ่งของการพิพากษาเท่านั้น ร่างจริงคือ…",
						"hindi": "वह तो बस… न्याय का एक हिस्सा था। मुख्य रूप…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌무덤의 푸른빛은 여전히 차가웠다. 승리했으나, 온정 없는 심판의 본질은 변하지 않았다.",
						"english": "The blue light of the stone tomb remained cold. Victorious, yet the essence of the merciless judgment was unchanged.",
						"japanese": "石の墓の青い光は相変わらず冷たかった。勝利したものの、情け容赦ない審判の本質は変わらなかった。",
						"chinese": "石冢的蓝光依然冰冷。虽已胜利，但无情审判的本质并未改变。",
						"french": "La lumière bleue de la tombe de pierre restait froide. Victorieux, l'essence du jugement impitoyable était pourtant inchangée.",
						"spanish": "La luz azul de la tumba de piedra seguía fría. Victoriosos, la esencia del juicio despiadado permanecía inalterada.",
						"vietnamese": "Ánh sáng xanh của ngôi mộ đá vẫn lạnh lẽo. Dù đã chiến thắng, nhưng bản chất của phán xét vô tình vẫn không thay đổi.",
						"thai": "แสงสีน้ำเงินจากสุสานหินยังคงเย็นเยียบ แม้จะได้รับชัยชนะ แต่แก่นแท้ของการพิพากษาอันไร้ความปรานีก็ไม่เปลี่ยนแปลง",
						"hindi": "पत्थर की कब्र का नीला प्रकाश अभी भी ठंडा था। विजयी होने पर भी, निर्मम न्याय का सार नहीं बदला।"
					},
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"세계는 깨어진 약속으로 얼어붙었다.",
			"돌무덤의 푸른빛은 모든 것을 심판했다.",
			"분노도 슬픔도 없는, 차가운 무표정으로.",
			"온정 없는 저울은 그저 묵묵히 기울었다."
		],
		"english": [
			"The world froze with broken promises.",
			"The blue light of the cairn judged all.",
			"With a cold, expressionless face, devoid of anger or sorrow.",
			"The unfeeling scales simply tilted in silence."
		],
		"japanese": [
			"世界は破られた約束と共に凍りついた。",
			"ケルンの青い光がすべてを裁いた。",
			"怒りも悲しみもない、冷たい無表情で。",
			"情け容赦ない天秤は、ただ黙々と傾いた。"
		],
		"chinese": [
			"世界因破碎的诺言而冻结。",
			"石冢的蓝光审判着一切。",
			"带着冰冷无情的表情，没有愤怒，没有悲伤。",
			"无情的秤默默地倾斜着。"
		],
		"french": [
			"Le monde s'est figé avec des promesses brisées.",
			"La lumière bleue du cairn jugeait tout.",
			"D'un visage froid et sans expression, dénué de colère ou de tristesse.",
			"La balance impitoyable penchait simplement en silence."
		],
		"spanish": [
			"El mundo se congeló con promesas rotas.",
			"La luz azul del túmulo juzgó todo.",
			"Con una mirada fría e inexpresiva, sin ira ni tristeza.",
			"La balanza sin compasión simplemente se inclinó en silencio."
		],
		"vietnamese": [
			"Thế giới đóng băng bởi những lời hứa tan vỡ.",
			"Ánh sáng xanh của mộ đá phán xét mọi thứ.",
			"Với vẻ mặt lạnh lùng, không giận dữ hay buồn bã.",
			"Chiếc cân vô tình chỉ lặng lẽ nghiêng."
		],
		"thai": [
			"โลกหยุดนิ่งด้วยคำมั่นที่แตกสลาย",
			"แสงสีน้ำเงินจากกองหินตัดสินทุกสิ่ง",
			"ด้วยใบหน้าไร้อารมณ์เย็นชา ไร้ทั้งโทสะและความโศกเศร้า",
			"ตราชูไร้ใจเพียงเอียงลงอย่างเงียบงัน"
		],
		"hindi": [
			"टूटे वादों से दुनिया जम गई।",
			"शिलास्मारक की नीली रोशनी ने सब कुछ परखा।",
			"गुस्से या दुख के बिना, एक ठंडी, भावहीन नज़र से।",
			"निर्दयी तराजू बस चुपचाप झुक गया।"
		]
	}
} as const;
