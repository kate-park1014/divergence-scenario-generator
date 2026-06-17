export const scenario_snowy_skalhorn_14_01 = {
	"scenario_id": "snowy_skalhorn_14_01",
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "고원은 뼈를 깎는 추위로 뒤덮였다. 스칼혼의 푸른 빛이 모든 것을 침식했다.",
						"english": "The plateau was covered in bone-chilling cold. Skalhorn's blue light eroded everything.",
						"japanese": "高原は身を切るような寒さに覆われた。スカルホーンの青い光がすべてを侵食した。",
						"chinese": "高原被彻骨的寒冷所笼罩。斯卡尔霍恩的蓝色光芒侵蚀了一切。",
						"french": "Le plateau était couvert d'un froid glacial. La lumière bleue de Skalhorn érodait tout.",
						"spanish": "La meseta estaba cubierta de un frío que calaba los huesos. La luz azul de Skalhorn lo erosionaba todo.",
						"vietnamese": "Cao nguyên bị bao phủ bởi cái lạnh cắt da cắt thịt. Ánh sáng xanh của Skalhorn ăn mòn mọi thứ.",
						"thai": "ที่ราบสูงถูกปกคลุมด้วยความหนาวเย็นยะเยือก แสงสีน้ำเงินของ Skalhorn กัดกร่อนทุกสิ่ง",
						"hindi": "पठार हड्डियों को जमा देने वाली ठंड से ढका था। स्कलहॉर्न की नीली रोशनी ने सब कुछ नष्ट कर दिया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "점점 더 심해지네. 이대로 가다간...",
						"english": "It's getting worse and worse. At this rate...",
						"japanese": "ますますひどくなる。このままだと…",
						"chinese": "越来越糟了。这样下去的话…",
						"french": "Ça empire de plus en plus. À ce rythme...",
						"spanish": "Cada vez es peor. A este paso...",
						"vietnamese": "Càng ngày càng tệ. Cứ thế này thì...",
						"thai": "แย่ลงเรื่อยๆ แบบนี้ต่อไป...",
						"hindi": "यह बदतर होता जा रहा है। इसी दर पर..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "…스칼혼의 영향이 심상치 않아요.",
						"english": "...Skalhorn's influence is unusual.",
						"japanese": "…スカルホーンの影響が尋常ではありません。",
						"chinese": "……斯卡尔霍恩的影响非同寻常。",
						"french": "...L'influence de Skalhorn est inhabituelle.",
						"spanish": "...La influencia de Skalhorn no es normal.",
						"vietnamese": "...Ảnh hưởng của Skalhorn không tầm thường.",
						"thai": "...อิทธิพลของ Skalhorn ไม่ธรรมดา",
						"hindi": "...स्कलहॉर्न का प्रभाव असामान्य है।"
					},
					"emotion": "sad",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"content": {
						"korean": "저 푸른 빛 속에서… 뭔가 일그러진 형상들이 보여요. 마치 고통받는 것처럼.",
						"english": "In that blue light... I see distorted figures. As if they're suffering.",
						"japanese": "あの青い光の中に…何か歪んだ形が見えます。まるで苦しんでいるかのように。",
						"chinese": "在那蓝色的光芒中……我看到了扭曲的形体。好像在承受痛苦。",
						"french": "Dans cette lumière bleue... je vois des formes déformées. Comme si elles souffraient.",
						"spanish": "En esa luz azul... veo figuras distorsionadas. Como si estuvieran sufriendo.",
						"vietnamese": "Trong ánh sáng xanh đó... tôi thấy những hình dạng biến dạng. Như thể chúng đang đau khổ.",
						"thai": "ในแสงสีน้ำเงินนั้น...ฉันเห็นรูปทรงที่บิดเบี้ยว เหมือนกำลังทรมาน",
						"hindi": "उस नीली रोशनी में... मुझे विकृत आकृतियाँ दिख रही हैं। जैसे वे पीड़ित हों।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "환각인가? 너무 추워서 그런가.",
						"english": "Is it a hallucination? Is it because it's too cold?",
						"japanese": "幻覚か？寒すぎるせいか。",
						"chinese": "是幻觉吗？是因为太冷了吗？",
						"french": "Est-ce une hallucination ? Est-ce à cause du froid intense ?",
						"spanish": "¿Es una alucinación? ¿Es por el frío?",
						"vietnamese": "Là ảo giác sao? Hay tại vì quá lạnh?",
						"thai": "เป็นภาพหลอนหรือเปล่า? เป็นเพราะหนาวเกินไปหรือเปล่า?",
						"hindi": "क्या यह एक मतिभ्रम है? क्या यह बहुत ठंड के कारण है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
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
						2,
						3
					]
				},
				{
					"content": {
						"korean": "이 지역의 고대 기록을 보면, 스칼혼은 단순한 유물이 아니라고 했어요.",
						"english": "Ancient records of this area state that Skalhorn is not just a mere artifact.",
						"japanese": "この地域の古代記録によると、スカルホーンは単なる遺物ではないとされています。",
						"chinese": "根据这个地区的古代记载，斯卡尔霍恩不仅仅是一件文物。",
						"french": "Les anciens registres de cette région stipulent que Skalhorn n'est pas un simple artefact.",
						"spanish": "Los registros antiguos de esta zona afirman que Skalhorn no es solo un mero artefacto.",
						"vietnamese": "Các ghi chép cổ đại của khu vực này nói rằng Skalhorn không chỉ là một vật phẩm đơn thuần.",
						"thai": "บันทึกโบราณของพื้นที่นี้ระบุว่า Skalhorn ไม่ใช่แค่สิ่งประดิษฐ์ธรรมดา",
						"hindi": "इस क्षेत्र के प्राचीन अभिलेखों में कहा गया है कि स्कलहॉर्न केवल एक कलाकृति नहीं है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 뭔데? 저주받은 물건?",
						"english": "Then what is it? A cursed item?",
						"japanese": "じゃあ何？呪われた物？",
						"chinese": "那是什么？被诅咒的物品？",
						"french": "Alors, qu'est-ce que c'est ? Un objet maudit ?",
						"spanish": "¿Entonces qué es? ¿Un objeto maldito?",
						"vietnamese": "Vậy thì là gì? Một vật bị nguyền rủa?",
						"thai": "แล้วมันคืออะไรล่ะ? ของต้องสาปเหรอ?",
						"hindi": "तो फिर क्या? एक शापित वस्तु?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 웅얼거리는 소리가 들리나요? 전에는 이렇게 불길하지 않았어요.",
						"english": "Do you hear that murmuring? It wasn't this ominous before.",
						"japanese": "このざわめきが聞こえる？前はこんなに不吉じゃなかった。",
						"chinese": "你听到那喃喃声了吗？以前可没这么不祥。",
						"french": "Entendez-vous ce murmure ? Ce n'était pas si sinistre avant.",
						"spanish": "¿Escuchas ese murmullo? Antes no era tan ominoso.",
						"vietnamese": "Bạn có nghe thấy tiếng rì rầm đó không? Trước đây nó không đáng ngại đến vậy.",
						"thai": "ได้ยินเสียงพึมพำนั่นไหม? เมื่อก่อนมันไม่เคยน่ากลัวขนาดนี้เลยนะ",
						"hindi": "क्या तुम्हें वह गुनगुनाहट सुनाई दे रही है? पहले यह इतनी अशुभ नहीं थी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "마치… 비명과 찬가가 뒤섞인 듯한…",
						"english": "It's like... screams and hymns intertwined...",
						"japanese": "まるで…悲鳴と賛歌が混じり合ったような…",
						"chinese": "就像……尖叫和赞美诗交织在一起……",
						"french": "C'est comme... des cris et des hymnes entremêlés...",
						"spanish": "Es como... gritos e himnos entrelazados...",
						"vietnamese": "Cứ như... những tiếng hét và thánh ca hòa quyện vào nhau...",
						"thai": "มันเหมือนกับ...เสียงกรีดร้องและเพลงสวดที่ผสมผสานกัน...",
						"hindi": "यह ऐसा है... जैसे चीखें और भजन आपस में गुंथे हुए हों..."
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "신경 쓰지 마. 빨리 저 근원을 찾아야 해.",
						"english": "Don't mind it. We need to find its source quickly.",
						"japanese": "気にするな。早くあの根源を見つけないと。",
						"chinese": "别管了。我们得赶紧找到它的源头。",
						"french": "N'y prête pas attention. Nous devons vite trouver sa source.",
						"spanish": "No le prestes atención. Tenemos que encontrar su origen rápido.",
						"vietnamese": "Đừng bận tâm. Chúng ta cần nhanh chóng tìm ra nguồn gốc của nó.",
						"thai": "อย่าใส่ใจเลย เราต้องหารากเหง้าของมันให้เจอเร็วๆ",
						"hindi": "परवाह मत करो। हमें जल्दी ही उसके स्रोत को खोजना होगा।"
					},
					"emotion": "base"
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
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "전설에 따르면, 과거에도 이런 재앙이 있었어요.",
						"english": "According to legend, there have been such calamities in the past.",
						"japanese": "伝説によると、過去にもこのような災厄があったらしい。",
						"chinese": "据传说，过去也曾发生过这样的灾难。",
						"french": "Selon la légende, de telles calamités se sont produites par le passé.",
						"spanish": "Según la leyenda, ha habido calamidades así en el pasado.",
						"vietnamese": "Theo truyền thuyết, đã có những tai ương như thế này trong quá khứ.",
						"thai": "ตามตำนานเล่าว่า ในอดีตก็เคยมีภัยพิบัติแบบนี้เกิดขึ้น",
						"hindi": "दंतकथा के अनुसार, अतीत में भी ऐसी आपदाएँ आई थीं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "재앙? 어떤 재앙?",
						"english": "Calamity? What kind of calamity?",
						"japanese": "災厄？どんな災厄？",
						"chinese": "灾难？什么样的灾难？",
						"french": "Calamité ? Quel genre de calamité ?",
						"spanish": "¿Calamidad? ¿Qué tipo de calamidad?",
						"vietnamese": "Tai ương? Tai ương gì?",
						"thai": "ภัยพิบัติ? ภัยพิบัติแบบไหน?",
						"hindi": "आपदा? किस तरह की आपदा?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "모든 것을 얼어붙게 하는 겨울. 끝없는 밤. 그리고… 희생.",
						"english": "A winter that freezes everything. Endless night. And... sacrifice.",
						"japanese": "全てを凍らせる冬。終わらない夜。そして…犠牲。",
						"chinese": "一个能冻结一切的冬天。无尽的黑夜。还有……牺牲。",
						"french": "Un hiver qui gèle tout. Une nuit sans fin. Et... le sacrifice.",
						"spanish": "Un invierno que lo congela todo. Noche sin fin. Y... sacrificio.",
						"vietnamese": "Một mùa đông đóng băng vạn vật. Đêm bất tận. Và... sự hy sinh.",
						"thai": "ฤดูหนาวที่ทำให้ทุกสิ่งแข็งตัว ค่ำคืนที่ไม่มีที่สิ้นสุด และ... การสังเวย",
						"hindi": "एक ऐसी सर्दी जो सब कुछ जमा देती है। अंतहीन रात। और... बलिदान।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "희생이라고? 너무 앞서가는 거 아니야?",
						"english": "Sacrifice? Aren't you getting ahead of yourself?",
						"japanese": "犠牲だって？早まりすぎじゃないか？",
						"chinese": "牺牲？你是不是想太多了？",
						"french": "Un sacrifice ? Tu ne vas pas un peu vite en besogne ?",
						"spanish": "¿Sacrificio? ¿No estás yendo demasiado lejos?",
						"vietnamese": "Hy sinh ư? Bạn có đang đi quá xa không?",
						"thai": "สังเวยเหรอ? คุณกำลังคิดไปไกลเกินไปหรือเปล่า?",
						"hindi": "बलिदान? क्या तुम बहुत आगे नहीं बढ़ रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단순한 우연이 아닐 거예요. 이 스칼혼이 모든 재앙의 중심에 있어요.",
						"english": "It can't be a mere coincidence. This Skalhorn is at the heart of all calamities.",
						"japanese": "ただの偶然ではないはずだ。このスカルホルンが、全ての災厄の中心にいる。",
						"chinese": "这不可能是巧合。这个斯卡尔霍恩是所有灾难的核心。",
						"french": "Ce ne peut être une simple coïncidence. Ce Skalhorn est au cœur de toutes les calamités.",
						"spanish": "No puede ser una mera coincidencia. Este Skalhorn está en el centro de todas las calamidades.",
						"vietnamese": "Đây không thể là một sự trùng hợp đơn thuần. Skalhorn này là trung tâm của mọi tai ương.",
						"thai": "นี่ไม่ใช่เรื่องบังเอิญแน่ๆ สคาลฮอร์นนี้คือหัวใจของภัยพิบัติทั้งหมด",
						"hindi": "यह महज एक संयोग नहीं हो सकता। यह स्कलहॉर्न सभी आपदाओं के केंद्र में है।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"dialogue": [
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
					"content": {
						"korean": "더 이상은… 돌아갈 수 없을 거예요.",
						"english": "There's no turning back... anymore.",
						"japanese": "これ以上は…もう戻れないだろう。",
						"chinese": "再也……无法回头了。",
						"french": "Il n'y aura plus... de retour en arrière.",
						"spanish": "Ya no podremos... volver atrás.",
						"vietnamese": "Không thể quay lại... được nữa rồi.",
						"thai": "เราคง...กลับไปไม่ได้อีกแล้ว",
						"hindi": "अब और... वापस नहीं जा सकते।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럴 순 없어. 여기서 멈출 수 없어.",
						"english": "I can't. I can't stop here.",
						"japanese": "だめだ。ここで止まるわけにはいかない。",
						"chinese": "不行。我不能止步于此。",
						"french": "Je ne peux pas. Je ne peux pas m'arrêter ici.",
						"spanish": "No puedo. No puedo parar aquí.",
						"vietnamese": "Không thể. Tôi không thể dừng lại ở đây.",
						"thai": "ไม่ได้ ฉันหยุดอยู่แค่นี้ไม่ได้",
						"hindi": "मैं ऐसा नहीं कर सकता। मैं यहाँ रुक नहीं सकता।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "스칼혼의 힘은 상상 이상이에요. 내부에 갇힌 영혼들의 비명이 점점 커지고 있어요.",
						"english": "Skalhorn's power is beyond imagination. The screams of the trapped souls inside are growing louder.",
						"japanese": "スカルホーンの力は想像以上です。内部に囚われた魂たちの悲鳴が、ますます大きくなっています。",
						"chinese": "斯卡尔霍恩的力量超乎想象。被困在里面的灵魂的尖叫声越来越响了。",
						"french": "Le pouvoir de Skalhorn dépasse l'imagination. Les cris des âmes piégées à l'intérieur deviennent de plus en plus forts.",
						"spanish": "El poder de Skalhorn es inimaginable. Los gritos de las almas atrapadas en su interior son cada vez más fuertes.",
						"vietnamese": "Sức mạnh của Skalhorn vượt xa sức tưởng tượng. Tiếng la hét của những linh hồn bị mắc kẹt bên trong đang ngày càng lớn hơn.",
						"thai": "พลังของสคาลฮอร์นนั้นเหนือจินตนาการ เสียงกรีดร้องของวิญญาณที่ถูกขังอยู่ข้างในดังขึ้นเรื่อยๆ",
						"hindi": "स्काल्हॉर्न की शक्ति कल्पना से परे है। अंदर फंसी आत्माओं की चीखें तेज़ होती जा रही हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "걱정 마. 우리가 막아낼 거야.",
						"english": "Don't worry. We'll stop it.",
						"japanese": "心配するな。私たちが食い止める。",
						"chinese": "别担心。我们会阻止它的。",
						"french": "Ne t'inquiète pas. Nous l'arrêterons.",
						"spanish": "No te preocupes. Lo detendremos.",
						"vietnamese": "Đừng lo. Chúng ta sẽ ngăn chặn nó.",
						"thai": "ไม่ต้องห่วง เราจะหยุดมันเอง",
						"hindi": "चिंता मत करो। हम इसे रोक देंगे।"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 푸른 수정 앞에서, 정체 모를 존재가 기다리고 있었다.",
						"english": "Before a colossal blue crystal, an unknown entity waited.",
						"japanese": "巨大な青い水晶の前で、正体不明の存在が待っていた。",
						"chinese": "在巨大的蓝色水晶前，一个不知名的存在正在等待。",
						"french": "Devant un cristal bleu colossal, une entité inconnue attendait.",
						"spanish": "Ante un colosal cristal azul, una entidad desconocida aguardaba.",
						"vietnamese": "Trước một khối pha lê xanh khổng lồ, một thực thể không rõ danh tính đang chờ đợi.",
						"thai": "หน้าผลึกสีน้ำเงินขนาดมหึมา มีสิ่งมีชีวิตลึกลับตนหนึ่งรออยู่",
						"hindi": "एक विशाल नीले क्रिस्टल के सामने, एक अज्ञात इकाई इंतज़ार कर रही थी।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 자들. 감히 이곳에 발을 들이다니.",
						"english": "Fools. How dare you set foot in this place.",
						"japanese": "愚か者ども。よくもここまで足を踏み入れたな。",
						"chinese": "愚蠢之徒。竟敢踏足此地。",
						"french": "Imbéciles. Comment osez-vous poser le pied en ce lieu.",
						"spanish": "Necios. Cómo osáis pisar este lugar.",
						"vietnamese": "Lũ ngu ngốc. Sao dám đặt chân đến nơi này.",
						"thai": "พวกคนโง่ เข้ารุกรานที่นี่ได้ยังไง",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई यहाँ कदम रखने की।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "너희의 어리석음이 이 겨울을 더욱 깊게 만들 것이다.",
						"english": "Your foolishness will deepen this winter.",
						"japanese": "お前たちの愚かさが、この冬をさらに深めるだろう。",
						"chinese": "你们的愚蠢会让这个冬天更加严酷。",
						"french": "Votre folie approfondira cet hiver.",
						"spanish": "Vuestra necedad hará este invierno aún más profundo.",
						"vietnamese": "Sự ngu ngốc của các ngươi sẽ khiến mùa đông này trở nên khắc nghiệt hơn.",
						"thai": "ความโง่เขลาของเจ้าจะทำให้ฤดูหนาวนี้ลึกซึ้งยิ่งขึ้น",
						"hindi": "तुम्हारी मूर्खता इस सर्दी को और गहरा कर देगी।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "너 때문이야! 네가 이 모든 걸 시작했어!",
						"english": "It's because of you! You started all of this!",
						"japanese": "お前のせいだ！お前がすべてを始めたんだ！",
						"chinese": "都是你！这一切都是你造成的！",
						"french": "C'est à cause de toi ! Tu as commencé tout ça !",
						"spanish": "¡Es por tu culpa! ¡Tú empezaste todo esto!",
						"vietnamese": "Là tại ngươi! Ngươi đã bắt đầu tất cả chuyện này!",
						"thai": "เป็นเพราะแก! แกคือคนเริ่มเรื่องทั้งหมด!",
						"hindi": "यह तुम्हारी वजह से है! तुमने यह सब शुरू किया!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 이것이 끝이 아니다. {random_boss}의 영원한 겨울은… 이제 시작일 뿐.",
						"english": "Ugh... This is not the end. The eternal winter of {random_boss} is... just beginning.",
						"japanese": "くう…これが終わりではない。{random_boss}の永遠の冬は…始まったばかりだ。",
						"chinese": "唔…这还没结束。{random_boss}的永恒之冬…才刚刚开始。",
						"french": "Ugh... Ce n'est pas la fin. L'hiver éternel de {random_boss} ne fait... que commencer.",
						"spanish": "Ugh... Esto no es el final. El invierno eterno de {random_boss} es... solo el comienzo.",
						"vietnamese": "Ưm... Đây không phải là kết thúc. Mùa đông vĩnh cửu của {random_boss} chỉ mới... bắt đầu thôi.",
						"thai": "ฮึ่ม... นี่ไม่ใช่จุดจบ ฤดูหนาวอันเป็นนิรันดร์ของ {random_boss} เพิ่ง... เริ่มต้นเท่านั้น",
						"hindi": "उह... यह अंत नहीं है। {random_boss} की शाश्वत सर्दी... अभी तो बस शुरुआत है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parles-tu !",
						"spanish": "¡De qué estás hablando!",
						"vietnamese": "Ngươi đang nói cái gì vậy!",
						"thai": "พูดอะไรของแก!",
						"hindi": "तुम क्या कह रहे हो!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
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
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "스칼혼의 기운이 약해지고 있어요. 하지만… 완전히 사라진 게 아니에요.",
						"english": "Skalhorn's aura is weakening. But... it hasn't completely disappeared.",
						"japanese": "スカルホーンの気が弱まっています。しかし…完全に消えたわけではありません。",
						"chinese": "斯卡尔霍恩的气息正在减弱。但是…它还没有完全消失。",
						"french": "L'aura de Skalhorn s'affaiblit. Mais... elle n'a pas complètement disparu.",
						"spanish": "El aura de Skalhorn se está debilitando. Pero... no ha desaparecido por completo.",
						"vietnamese": "Hào quang của Skalhorn đang yếu đi. Nhưng... nó vẫn chưa biến mất hoàn toàn.",
						"thai": "พลังของสคาลฮอร์นกำลังอ่อนลง แต่... มันยังไม่หายไปทั้งหมด",
						"hindi": "स्काल्हॉर्न का औरा कमजोर हो रहा है। लेकिन... यह पूरी तरह से गायब नहीं हुआ है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "스칼혼의 푸른 빛은 잠시 사그라들었다. 그러나 고원에는 여전히 차가운 비명이 맴돌았다.",
						"english": "Scalhorn's blue light momentarily faded. Yet, a cold scream still echoed across the plateau.",
						"japanese": "スカールホーンの青い光は一時的に消えた。しかし、高原には冷たい悲鳴が響き渡っていた。",
						"chinese": "斯卡尔霍恩的蓝光暂时消逝了。然而，高原上仍回荡着冰冷的尖叫声。",
						"french": "La lumière bleue de Scalhorn s'estompa un instant. Pourtant, un cri glacial résonnait toujours sur le plateau.",
						"spanish": "La luz azul de Scalhorn se atenuó por un momento. Sin embargo, un grito frío aún resonaba en la meseta.",
						"vietnamese": "Ánh sáng xanh của Scalhorn tạm thời mờ đi. Thế nhưng, một tiếng hét lạnh lẽo vẫn vang vọng khắp cao nguyên.",
						"thai": "แสงสีน้ำเงินของสคาลฮอร์นเลือนหายไปชั่วขณะ แต่เสียงกรีดร้องอันเย็นยะเยือกยังคงก้องกังวานไปทั่วที่ราบสูง",
						"hindi": "स्कालहॉर्न की नीली रोशनी क्षण भर के लिए फीकी पड़ गई। फिर भी, पठार पर एक ठंडी चीख गूँजती रही।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 것들. 감히 영원의 힘을 거스를 수 없다.",
						"english": "Weaklings. You cannot defy the power of eternity.",
						"japanese": "弱き者たちよ。永遠の力に逆らうことなどできぬ。",
						"chinese": "弱者们。胆敢违抗永恒之力？",
						"french": "Faibles créatures. Vous ne pouvez défier la puissance de l'éternité.",
						"spanish": "Débiles. No podéis desafiar el poder de la eternidad.",
						"vietnamese": "Những kẻ yếu đuối. Ngươi không thể chống lại sức mạnh của vĩnh hằng.",
						"thai": "พวกอ่อนแอเอ๊ย! กล้าดียังไงมาขัดขืนพลังแห่งนิรันดร์",
						"hindi": "कमजोरों। तुम शाश्वत शक्ति का विरोध नहीं कर सकते।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 우린 포기하지 않아!",
						"english": "...It's not over yet. We won't give up!",
						"japanese": "…まだ終わってない。私たちは諦めない！",
						"chinese": "…还没结束。我们不会放弃！",
						"french": "...Ce n'est pas encore fini. Nous n'abandonnerons pas !",
						"spanish": "...Todavía no ha terminado. ¡No nos rendiremos!",
						"vietnamese": "...Chưa kết thúc đâu. Chúng tôi sẽ không bỏ cuộc!",
						"thai": "...ยังไม่จบหรอก. เราไม่ยอมแพ้!",
						"hindi": "...अभी खत्म नहीं हुआ है। हम हार नहीं मानेंगे!"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"혹독한 겨울이 고원을 지배했다.",
			"스칼혼의 푸른 광채가 모든 것을 얼어붙게 했다.",
			"그 빛 속에서, 희미한 형상들이 일그러지고 있었다.",
			"멈추지 않으면, 모두가 비명 속에 갇힐 것이다."
		],
		"english": [
			"The harsh winter dominated the plateau.",
			"Skalhorn's blue glow froze everything.",
			"Within that light, faint figures were distorting.",
			"If it doesn't stop, everyone will be trapped in screams."
		],
		"japanese": [
			"厳しい冬が高原を支配した。",
			"スカルホーンの青い輝きがすべてを凍らせた。",
			"その光の中で、かすかな形が歪んでいた。",
			"止まらなければ、誰もが悲鳴の中に閉じ込められるだろう。"
		],
		"chinese": [
			"严酷的冬天主宰了高原。",
			"斯卡尔霍恩的蓝色光芒冻结了一切。",
			"在那光芒中，模糊的形体正在扭曲。",
			"如果不停下，所有人都会被困在尖叫声中。"
		],
		"french": [
			"L'hiver rigoureux dominait le plateau.",
			"La lueur bleue de Skalhorn gelait tout.",
			"Dans cette lumière, de faibles formes se déformaient.",
			"Si ça ne s'arrête pas, tout le monde sera piégé dans des cris."
		],
		"spanish": [
			"El crudo invierno dominaba la meseta.",
			"El resplandor azul de Skalhorn lo congeló todo.",
			"Dentro de esa luz, formas tenues se estaban distorsionando.",
			"Si no se detiene, todos quedarán atrapados entre gritos."
		],
		"vietnamese": [
			"Mùa đông khắc nghiệt thống trị cao nguyên.",
			"Ánh sáng xanh của Skalhorn đóng băng mọi thứ.",
			"Trong ánh sáng đó, những hình dạng mờ nhạt đang biến dạng.",
			"Nếu không dừng lại, mọi người sẽ bị mắc kẹt trong những tiếng la hét."
		],
		"thai": [
			"ฤดูหนาวอันโหดร้ายเข้าปกคลุมที่ราบสูง",
			"แสงสีน้ำเงินของ Skalhorn แช่แข็งทุกสิ่ง",
			"ในแสงนั้น รูปทรงที่เลือนรางกำลังบิดเบี้ยว",
			"ถ้าไม่หยุด ทุกคนจะติดอยู่ในเสียงกรีดร้อง"
		],
		"hindi": [
			"कठोर सर्दी ने पठार पर राज किया।",
			"स्कलहॉर्न की नीली चमक ने सब कुछ जमा दिया।",
			"उस रोशनी में, धुंधली आकृतियाँ विकृत हो रही थीं।",
			"यदि यह नहीं रुकता, तो हर कोई चीखों में फँस जाएगा।"
		]
	}
} as const;
