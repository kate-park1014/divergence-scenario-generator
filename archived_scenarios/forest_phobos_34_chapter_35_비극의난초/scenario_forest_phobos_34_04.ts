export const scenario_forest_phobos_34_04 = {
	"scenario_id": "forest_phobos_34_04",
	"order": 4,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"glen": {
			"id": "mon_42dfd4f2-9564-4b4b-beed-993d578ebd5a",
			"name": {
				"korean": "글렌",
				"english": "Glen",
				"japanese": "グレン",
				"chinese": "格伦",
				"french": "Glen",
				"spanish": "Glen",
				"vietnamese": "Glen",
				"thai": "เกล็น",
				"hindi": "ग्लेन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6aa9eb0c-364f-4bfb-fa3f-52711da6a600/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2dbb8c2d-a999-4154-3a88-7c5cc5ca2200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "숲은 점점 더 깊어졌다. 이끼 낀 거대한 석상들이 길을 막았다.",
						"english": "The forest grew deeper. Giant moss-covered statues blocked the path.",
						"japanese": "森はますます深くなった。苔むした巨大な石像が道を塞いだ。",
						"chinese": "森林越来越深。长满青苔的巨大石像挡住了去路。",
						"french": "La forêt devenait plus profonde. De gigantesques statues couvertes de mousse bloquaient le chemin.",
						"spanish": "El bosque se hizo más profundo. Gigantescas estatuas cubiertas de musgo bloqueaban el camino.",
						"vietnamese": "Rừng ngày càng sâu. Những bức tượng đá khổng lồ phủ rêu chắn lối.",
						"thai": "ป่าลึกขึ้นเรื่อยๆ รูปปั้นหินยักษ์ที่ปกคลุมด้วยมอสขวางทาง",
						"hindi": "जंगल गहरा होता गया। काई से ढकी विशाल मूर्तियों ने रास्ता रोक दिया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "여기도 유적이야? 끝이 없네.",
						"english": "More ruins? This is endless.",
						"japanese": "ここも遺跡か？終わりがないな。",
						"chinese": "这里也是遗迹吗？没完没了。",
						"french": "Encore des ruines ? C'est sans fin.",
						"spanish": "¿Más ruinas? Esto es interminable.",
						"vietnamese": "Đây cũng là di tích ư? Không có hồi kết à.",
						"thai": "นี่ก็เป็นซากปรักหักพังอีกแล้วเหรอ ไม่มีที่สิ้นสุดเลย",
						"hindi": "यहाँ भी खंडहर? यह तो कभी खत्म नहीं होता।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "놀랍군요! 이런 곳에 고대 문명의 흔적이…!",
						"english": "Amazing! Traces of an ancient civilization in a place like this...!",
						"japanese": "驚きだ！こんな場所に古代文明の痕跡が…！",
						"chinese": "太令人惊讶了！这种地方竟然有古代文明的痕迹…！",
						"french": "Incroyable ! Des traces d'une ancienne civilisation dans un endroit pareil... !",
						"spanish": "¡Asombroso! ¡Rastros de una antigua civilización en un lugar como este...!",
						"vietnamese": "Thật kinh ngạc! Dấu vết của một nền văn minh cổ đại ở một nơi như thế này...!",
						"thai": "น่าทึ่งมาก! ร่องรอยอารยธรรมโบราณในที่แบบนี้...!",
						"hindi": "अद्भुत! ऐसी जगह में प्राचीन सभ्यता के निशान...!"
					}
				},
				{
					"content": {
						"korean": "이 파편적인 기록들을 보세요! 숲이 단순한 자연이 아니었다고…!",
						"english": "Look at these fragmented records! The forest wasn't just nature...!",
						"japanese": "この断片的な記録を見てください！森はただの自然ではなかったと…！",
						"chinese": "看这些零散的记录！森林不仅仅是自然的…！",
						"french": "Regardez ces fragments de registres ! La forêt n'était pas qu'une simple nature... !",
						"spanish": "¡Miren estos registros fragmentados! ¡El bosque no era solo naturaleza...!",
						"vietnamese": "Hãy nhìn những ghi chép rời rạc này! Rừng không chỉ là thiên nhiên đơn thuần...!",
						"thai": "ดูบันทึกที่กระจัดกระจายพวกนี้สิ! ป่านี้ไม่ใช่แค่ธรรมชาติธรรมดา...!",
						"hindi": "इन खंडित अभिलेखों को देखो! जंगल सिर्फ प्रकृति नहीं था...!"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "glen"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "이 기록들이 말하는 건… 숲 자체가 거대한 주술 결계였다는 겁니다!",
						"english": "These records say... the forest itself was a massive magical barrier!",
						"japanese": "これらの記録が語るのは…森自体が巨大な呪術結界だったということだ！",
						"chinese": "这些记录表明…森林本身就是一个巨大的魔法结界！",
						"french": "Ces registres disent... que la forêt elle-même était une immense barrière magique !",
						"spanish": "¡Estos registros dicen... que el bosque mismo era una barrera mágica masiva!",
						"vietnamese": "Những ghi chép này nói rằng... bản thân khu rừng là một kết giới ma thuật khổng lồ!",
						"thai": "บันทึกเหล่านี้บอกว่า... ป่าแห่งนี้คือเขตแดนเวทมนตร์ขนาดมหึมา!",
						"hindi": "ये अभिलेख कहते हैं... जंगल खुद एक विशाल जादुई बाधा था!"
					},
					"emotion": "angry",
					"speaker": "glen",
					"type": "speech"
				},
				{
					"content": {
						"korean": "결계? 그럼 누가, 왜 이런 걸 만들었는데?",
						"english": "A barrier? Then who made it, and why?",
						"japanese": "結界？じゃあ誰が、なぜこんなものを作ったんだ？",
						"chinese": "结界？那到底是谁，为什么要制造这种东西？",
						"french": "Une barrière ? Alors qui l'a faite, et pourquoi ?",
						"spanish": "¿Una barrera? ¿Entonces quién la hizo y por qué?",
						"vietnamese": "Kết giới? Vậy ai đã tạo ra nó, và để làm gì?",
						"thai": "เขตแดนเวทมนตร์เหรอ? แล้วใครสร้างมันขึ้นมา ทำไมล่ะ?",
						"hindi": "एक बाधा? तो इसे किसने बनाया, और क्यों?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "고대 부족이 난초를 봉인하기 위해… 아니, 통제하기 위해 만들었다고 추정됩니다.",
						"english": "It is presumed that an ancient tribe created it to seal... no, to control the orchid.",
						"japanese": "古代の部族が蘭を封印するため…いや、制御するために作ったと推測されます。",
						"chinese": "据推测，古代部落制造它是为了封印…不，是为了控制兰花。",
						"french": "On suppose qu'une ancienne tribu l'a créé pour sceller... non, pour contrôler l'orchidée.",
						"spanish": "Se presume que una antigua tribu lo creó para sellar... no, para controlar la orquídea.",
						"vietnamese": "Người ta cho rằng một bộ lạc cổ đại đã tạo ra nó để phong ấn... không, để kiểm soát phong lan.",
						"thai": "สันนิษฐานว่าชนเผ่าโบราณสร้างขึ้นเพื่อผนึก... ไม่สิ เพื่อควบคุมกล้วยไม้",
						"hindi": "यह माना जाता है कि एक प्राचीन जनजाति ने इसे ऑर्किड को सील करने के लिए... नहीं, नियंत्रित करने के लिए बनाया था।"
					}
				},
				{
					"content": {
						"korean": "하지만… 어째서 이런 비극적인 결말이…",
						"english": "But... why such a tragic end...?",
						"japanese": "しかし…なぜこのような悲劇的な結末に…",
						"chinese": "但是…为什么会是这样一个悲剧性的结局…",
						"french": "Mais... pourquoi une fin si tragique...?",
						"spanish": "Pero... ¿por qué un final tan trágico...?",
						"vietnamese": "Nhưng... tại sao lại là một kết cục bi thảm như vậy...?",
						"thai": "แต่... ทำไมถึงมีจุดจบที่น่าเศร้าเช่นนี้...",
						"hindi": "लेकिन... ऐसा दुखद अंत क्यों...?"
					},
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "glen"
				},
				{
					"content": {
						"korean": "들려요? 숲에 갇힌 영혼들의… 고통스러운 메아리가…!",
						"english": "Do you hear it? The painful echoes of the souls trapped in the forest...!",
						"japanese": "聞こえますか？森に囚われた魂たちの…苦痛に満ちたこだまが…！",
						"chinese": "你们听到了吗？被困在森林里的灵魂们…痛苦的回响…！",
						"french": "Vous entendez ? Les échos douloureux des âmes piégées dans la forêt... !",
						"spanish": "¿Lo oyes? ¡Los dolorosos ecos de las almas atrapadas en el bosque...!",
						"vietnamese": "Bạn có nghe thấy không? Tiếng vọng đau đớn của những linh hồn bị mắc kẹt trong rừng...!",
						"thai": "ได้ยินไหม? เสียงสะท้อนความเจ็บปวดของวิญญาณที่ถูกขังอยู่ในป่า...!",
						"hindi": "क्या तुम्हें सुनाई दे रहा है? जंगल में फंसी आत्माओं की... दर्दनाक गूँज...!"
					},
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "글렌, 진정해! 무슨 소리야?",
						"english": "Glen, calm down! What are you talking about?",
						"japanese": "グレン、落ち着いて！何を言ってるんだ？",
						"chinese": "格伦，冷静点！你在说什么？",
						"french": "Glen, calme-toi ! Qu'est-ce que tu racontes ?",
						"spanish": "¡Glen, cálmate! ¿De qué estás hablando?",
						"vietnamese": "Glen, bình tĩnh đi! Cậu đang nói cái gì vậy?",
						"thai": "เกล็น ใจเย็นๆ! นั่นเสียงอะไรน่ะ?",
						"hindi": "ग्लेन, शांत हो जाओ! तुम क्या कह रहे हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "저 균열이 시작입니다. 결계의 틈새로, 저주가 스며들고 있어요.",
						"english": "That crack is the beginning. Through the rift in the barrier, the curse is seeping in.",
						"japanese": "あの亀裂が始まりです。結界の隙間から、呪いが染み込んでいます。",
						"chinese": "那个裂缝就是开始。通过结界的缝隙，诅咒正在渗透进来。",
						"french": "Cette fissure est le début. À travers la brèche de la barrière, la malédiction s'infiltre.",
						"spanish": "Esa grieta es el principio. A través de la fisura de la barrera, la maldición se está filtrando.",
						"vietnamese": "Vết nứt đó là khởi đầu. Qua khe hở của kết giới, lời nguyền đang thấm vào.",
						"thai": "รอยแยกนั่นคือจุดเริ่มต้น คำสาปกำลังซึมผ่านรอยแตกของเขตแดน",
						"hindi": "वह दरार ही शुरुआत है। बाधा की दरार से, श्राप रिस रहा है।"
					}
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "sad",
					"content": {
						"korean": "난초는… 어쩌면 이 저주의 피해자일 수도 있습니다.",
						"english": "The orchid... might actually be a victim of this curse.",
						"japanese": "蘭は…もしかしたらこの呪いの被害者かもしれません。",
						"chinese": "兰花…也许是这个诅咒的受害者。",
						"french": "L'orchidée... pourrait bien être une victime de cette malédiction.",
						"spanish": "La orquídea... quizás sea una víctima de esta maldición.",
						"vietnamese": "Lan hồ điệp... có thể là nạn nhân của lời nguyền này.",
						"thai": "กล้วยไม้... อาจเป็นเหยื่อของคำสาปนี้ก็ได้",
						"hindi": "ऑर्किड... शायद इस श्राप का शिकार हो सकता है।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"speaker": "glen",
					"type": "speech",
					"content": {
						"korean": "균열이 점점 벌어지고 있습니다! 위험해요!",
						"english": "The crack is widening! It's dangerous!",
						"japanese": "亀裂がどんどん広がっています！危険です！",
						"chinese": "裂缝正在不断扩大！很危险！",
						"french": "La fissure s'élargit ! C'est dangereux !",
						"spanish": "¡La grieta se está abriendo cada vez más! ¡Es peligroso!",
						"vietnamese": "Vết nứt đang ngày càng lớn hơn! Nguy hiểm lắm!",
						"thai": "รอยแยกกำลังกว้างขึ้นเรื่อยๆ! อันตรายแล้ว!",
						"hindi": "दरार बढ़ती जा रही है! यह खतरनाक है!"
					}
				},
				{
					"content": {
						"korean": "멈출 수 없어. 여기까지 왔는데.",
						"english": "I can't stop. Not after coming this far.",
						"japanese": "止められない。ここまで来たのに。",
						"chinese": "无法停止。都走到这一步了。",
						"french": "Je ne peux pas m'arrêter. Pas après être venu si loin.",
						"spanish": "No puedo parar. No después de haber llegado tan lejos.",
						"vietnamese": "Không thể dừng lại. Đã đến nước này rồi.",
						"thai": "หยุดไม่ได้แล้ว มาถึงขนาดนี้แล้ว",
						"hindi": "मैं रुक नहीं सकता। इतनी दूर आने के बाद।"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "glen",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "난초의… 진정한 정체성을 알아야 합니다. 이 비극의 원인을…",
						"english": "We must uncover the orchid's... true identity. The cause of this tragedy...",
						"japanese": "蘭の…真の正体を知らなければなりません。この悲劇の原因を…",
						"chinese": "必须揭开兰花的…真正身份。这场悲剧的根源…",
						"french": "Nous devons découvrir... la véritable identité de l'orchidée. La cause de cette tragédie...",
						"spanish": "Debemos descubrir... la verdadera identidad de la orquídea. La causa de esta tragedia...",
						"vietnamese": "Chúng ta phải tìm ra... danh tính thật sự của phong lan. Nguyên nhân của bi kịch này...",
						"thai": "เราต้องรู้... ตัวตนที่แท้จริงของกล้วยไม้ สาเหตุของโศกนาฏกรรมนี้...",
						"hindi": "हमें ऑर्किड की... सच्ची पहचान जाननी होगी। इस त्रासदी का कारण..."
					}
				},
				{
					"speaker": "glen",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저주가 이 숲을 완전히 집어삼키기 전에…!",
						"english": "Before the curse completely swallows this forest...!",
						"japanese": "呪いがこの森を完全に飲み込む前に…！",
						"chinese": "在诅咒彻底吞噬这片森林之前…！",
						"french": "Avant que la malédiction n'engloutisse complètement cette forêt...!",
						"spanish": "¡Antes de que la maldición engulla por completo este bosque...!",
						"vietnamese": "Trước khi lời nguyền nuốt chửng hoàn toàn khu rừng này...!",
						"thai": "ก่อนที่คำสาปจะกลืนกินป่าแห่งนี้ไปจนหมดสิ้น...!",
						"hindi": "इससे पहले कि श्राप इस जंगल को पूरी तरह निगल ले...!"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크흑… 언젠가… 진실은… 너희를… 찢어발길 것이다…",
						"english": "Urgh... Someday... the truth... will tear... you apart...",
						"japanese": "くっ…いつか…真実は…お前たちを…引き裂くだろう…",
						"chinese": "呃…总有一天…真相会…将你们…撕裂…",
						"french": "Urgh... Un jour... la vérité... vous... déchirera...",
						"spanish": "Ugh... Algún día... la verdad... os... destrozará...",
						"vietnamese": "Khụ… Rồi một ngày nào đó… sự thật… sẽ xé nát… các ngươi…",
						"thai": "อึก... สักวันหนึ่ง... ความจริง... จะฉีกกระชาก... พวกเจ้า...",
						"hindi": "उफ़... किसी दिन... सच... तुम्हें... फाड़ डालेगा..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실이 대체 뭔데! 말해봐!",
						"english": "What IS the truth?! Tell us!",
						"japanese": "真実って一体何なんだ！言ってみろ！",
						"chinese": "到底什么是真相？！告诉我们！",
						"french": "Quelle EST cette vérité ?! Dis-nous !",
						"spanish": "¡¿Cuál ES la verdad?! ¡Dínosla!",
						"vietnamese": "Sự thật rốt cuộc là gì?! Nói mau!",
						"thai": "ความจริงคืออะไรกันแน่! บอกมาสิ!",
						"hindi": "सच क्या है?! बताओ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "glen",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "결계의 수호자가 쓰러졌습니다. 이제… 난초의 진실이 눈앞에…",
						"english": "The barrier's guardian has fallen. Now... the truth of the Orchid is before us...",
						"japanese": "結界の守護者が倒れました。これで…蘭の真実が目の前に…",
						"chinese": "结界的守护者倒下了。现在…兰花的真相就在眼前…",
						"french": "Le gardien de la barrière est tombé. Maintenant... la vérité de l'Orchidée est devant nous...",
						"spanish": "El guardián de la barrera ha caído. Ahora... la verdad de la Orquídea está ante nosotros...",
						"vietnamese": "Kẻ bảo hộ kết giới đã ngã xuống. Giờ đây… sự thật về Hoa Lan đã ở ngay trước mắt…",
						"thai": "ผู้พิทักษ์ม่านพลังล้มลงแล้ว บัดนี้... ความจริงของกล้วยไม้ก็อยู่ตรงหน้า...",
						"hindi": "अवरोध का संरक्षक गिर गया है। अब... ऑर्किड का सच हमारी आँखों के सामने है..."
					},
					"type": "speech",
					"speaker": "glen",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "하지만 이 균열은… 더 깊은 곳과 연결된 것 같습니다.",
						"english": "But this rift... seems to be connected to something deeper.",
						"japanese": "しかしこの裂け目は…もっと深い場所と繋がっているようです。",
						"chinese": "但这个裂缝…似乎连接着更深的地方。",
						"french": "Mais cette faille... semble être connectée à quelque chose de plus profond.",
						"spanish": "Pero esta fisura... parece estar conectada a algo más profundo.",
						"vietnamese": "Nhưng vết nứt này… dường như được kết nối với một nơi sâu hơn.",
						"thai": "แต่รอยแยกนี้... ดูเหมือนจะเชื่อมต่อกับที่ที่ลึกกว่านั้น.",
						"hindi": "लेकिन यह दरार... किसी गहरी जगह से जुड़ी हुई लगती है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "균열은 사라지지 않았다. 오히려 더 강렬한 빛을 내뿜으며 다음 차원을 예고했다.",
						"english": "The rift did not vanish. Instead, it glowed with an even more intense light, foreshadowing the next dimension.",
						"japanese": "裂け目は消えなかった。むしろ、より強烈な光を放ち、次の次元を予兆していた。",
						"chinese": "裂缝并未消失。相反，它散发出更加强烈的光芒，预示着下一个维度。",
						"french": "La faille ne disparut pas. Au contraire, elle rayonnait d'une lumière encore plus intense, annonçant la dimension suivante.",
						"spanish": "La grieta no desapareció. En cambio, brilló con una luz aún más intensa, presagiando la siguiente dimensión.",
						"vietnamese": "Vết nứt không biến mất. Thay vào đó, nó phát ra ánh sáng mãnh liệt hơn, báo trước chiều không gian tiếp theo.",
						"thai": "รอยแยกไม่หายไป แต่กลับเปล่งแสงเจิดจ้ายิ่งขึ้น เป็นลางบอกเหตุถึงมิติถัดไป",
						"hindi": "दरार गायब नहीं हुई। इसके बजाय, यह और भी तीव्र प्रकाश के साथ चमक उठी, जो अगले आयाम की भविष्यवाणी कर रही थी।"
					}
				},
				{
					"content": {
						"korean": "숲의 저주는 이제 또 다른 형태로 그 모습을 드러낼 것이다.",
						"english": "The forest's curse will now reveal itself in yet another form.",
						"japanese": "森の呪いは今、また別の形で姿を現すだろう。",
						"chinese": "森林的诅咒如今将以另一种形式显现。",
						"french": "La malédiction de la forêt va maintenant se manifester sous une autre forme.",
						"spanish": "La maldición del bosque ahora se manifestará de otra forma.",
						"vietnamese": "Lời nguyền của khu rừng giờ đây sẽ xuất hiện dưới một hình thái khác.",
						"thai": "คำสาปของป่าจะเผยโฉมในรูปแบบอื่นต่อไป",
						"hindi": "जंगल का अभिशाप अब एक और रूप में प्रकट होगा।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "균열 너머에서 거대한 그림자가 나타났다. 결계를 수호하는 존재였다.",
						"english": "A colossal shadow emerged from beyond the rift. It was the guardian of the barrier.",
						"japanese": "裂け目の向こうから巨大な影が現れた。それは結界を守る存在だった。",
						"chinese": "巨大的影子从裂缝中出现。它是结界的守护者。",
						"french": "Une ombre colossale émergea d'au-delà de la faille. C'était le gardien de la barrière.",
						"spanish": "Una sombra colosal emergió más allá de la fisura. Era el guardián de la barrera.",
						"vietnamese": "Một bóng đen khổng lồ hiện ra từ phía bên kia vết nứt. Nó là kẻ bảo hộ kết giới.",
						"thai": "เงามหึมาปรากฏขึ้นจากอีกฟากของรอยแยก มันคือผู้พิทักษ์ของม่านพลัง",
						"hindi": "दरार के उस पार से एक विशाल छाया निकली। यह अवरोध का संरक्षक था।"
					}
				},
				{
					"content": {
						"korean": "여기까지 오는 자, 없었다.",
						"english": "None have ever reached this far.",
						"japanese": "ここまで辿り着いた者はいなかった。",
						"chinese": "从未有人到达这里。",
						"french": "Nul n'est jamais arrivé jusqu'ici.",
						"spanish": "Nadie ha llegado tan lejos.",
						"vietnamese": "Chưa từng có ai đến được đây.",
						"thai": "ไม่มีใครเคยมาถึงที่นี่.",
						"hindi": "यहाँ तक कोई नहीं आया।"
					},
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 진실은 너희를 고통스럽게 할 뿐.",
						"english": "Foolish ones. The truth will only bring you pain.",
						"japanese": "愚かな者たちめ。真実はお前たちを苦しめるだけだ。",
						"chinese": "愚蠢的家伙。真相只会让你痛苦。",
						"french": "Insensés. La vérité ne vous apportera que douleur.",
						"spanish": "Insensatos. La verdad solo os traerá dolor.",
						"vietnamese": "Những kẻ ngu xuẩn. Sự thật chỉ mang đến cho các ngươi nỗi đau.",
						"thai": "พวกเจ้าช่างโง่เขลา ความจริงจะนำมาซึ่งความเจ็บปวดเท่านั้น",
						"hindi": "मूर्खों। सच तुम्हें केवल पीड़ा देगा।"
					}
				},
				{
					"content": {
						"korean": "비켜! 우리는 진실을 알아야 해!",
						"english": "Get out of the way! We must know the truth!",
						"japanese": "退け！我々は真実を知る必要がある！",
						"chinese": "让开！我们必须知道真相！",
						"french": "Écarte-toi ! Nous devons connaître la vérité !",
						"spanish": "¡Apártate! ¡Debemos saber la verdad!",
						"vietnamese": "Tránh ra! Chúng ta phải biết sự thật!",
						"thai": "ถอยไป! เราต้องรู้ความจริง!",
						"hindi": "हटो! हमें सच जानना होगा!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "glen",
					"emotion": "angry",
					"content": {
						"korean": "조심하세요! 저것은 결계의 수호자입니다! 고대 주술의 힘으로 만들어진…",
						"english": "Be careful! That is the guardian of the barrier! Created by the power of ancient sorcery...",
						"japanese": "気をつけてください！あれは結界の守護者です！古代呪術の力で作られた…",
						"chinese": "小心！那是结界的守护者！由古代咒术之力创造的…",
						"french": "Attention ! C'est le gardien de la barrière ! Créé par le pouvoir d'une ancienne sorcellerie...",
						"spanish": "¡Cuidado! ¡Ese es el guardián de la barrera! Creado por el poder de la hechicería antigua...",
						"vietnamese": "Cẩn thận! Đó là kẻ bảo hộ kết giới! Được tạo ra bằng sức mạnh của cổ thuật…",
						"thai": "ระวัง! นั่นคือผู้พิทักษ์ของม่านพลัง! สร้างขึ้นด้วยพลังของเวทมนตร์โบราณ...",
						"hindi": "सावधान! वह अवरोध का संरक्षक है! प्राचीन जादू की शक्ति से निर्मित..."
					}
				},
				{
					"content": {
						"korean": "결계를 파괴하려는 자, 여기서 끝난다.",
						"english": "Those who seek to destroy the barrier, end here.",
						"japanese": "結界を破壊しようとする者、ここで終わる。",
						"chinese": "企图破坏结界者，止步于此。",
						"french": "Ceux qui cherchent à détruire la barrière, s'arrêtent ici.",
						"spanish": "Aquellos que intenten destruir la barrera, acabarán aquí.",
						"vietnamese": "Kẻ nào muốn phá hủy kết giới, sẽ kết thúc tại đây.",
						"thai": "ผู้ใดคิดทำลายม่านพลัง ผู้นั้นจะจบลงที่นี่",
						"hindi": "जो अवरोध को नष्ट करना चाहते हैं, उनका अंत यहीं होगा।"
					},
					"speaker": "random_boss",
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다. 균열은 더욱 거칠게 요동쳤다.",
						"english": "A colossal shadow devoured everything. The rift churned even more violently.",
						"japanese": "巨大な影がすべてを飲み込んだ。裂け目はさらに激しく揺れ動いた。",
						"chinese": "巨大的阴影吞噬了一切。裂缝愈发剧烈地颤动。",
						"french": "Une ombre colossale dévora tout. La faille s'agita avec encore plus de violence.",
						"spanish": "Una sombra colosal lo devoró todo. La grieta se agitó con aún más violencia.",
						"vietnamese": "Một bóng tối khổng lồ nuốt chửng mọi thứ. Vết nứt rung chuyển dữ dội hơn.",
						"thai": "เงามหึมากลืนกินทุกสิ่ง รอยแยกปั่นป่วนรุนแรงยิ่งขึ้น",
						"hindi": "एक विशालकाय परछाई ने सब कुछ निगल लिया। दरार और भी हिंसक रूप से हिलने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너희는… 이 저주를… 이해할 수 없다.",
						"english": "You… cannot… comprehend this curse.",
						"japanese": "お前たちは…この呪いを…理解できない。",
						"chinese": "你们…无法…理解这个诅咒。",
						"french": "Vous… ne pouvez pas… comprendre cette malédiction.",
						"spanish": "Vosotros… no podéis… comprender esta maldición.",
						"vietnamese": "Các ngươi… không thể… hiểu được lời nguyền này.",
						"thai": "พวกเจ้า… ไม่อาจ… เข้าใจคำสาปนี้ได้",
						"hindi": "तुम लोग… इस श्राप को… समझ नहीं सकते।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 포기하지 않아!",
						"english": "…It's not over yet. I won't give up!",
						"japanese": "…まだ終わってない。諦めない！",
						"chinese": "…还没结束。我不会放弃！",
						"french": "…Ce n'est pas encore fini. Je n'abandonnerai pas !",
						"spanish": "…Aún no ha terminado. ¡No me rendiré!",
						"vietnamese": "…Chưa kết thúc đâu. Tôi sẽ không bỏ cuộc!",
						"thai": "…ยังไม่จบ ฉันจะไม่ยอมแพ้!",
						"hindi": "…अभी खत्म नहीं हुआ है। मैं हार नहीं मानूँगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 가장 깊은 곳. 발길 닿지 않던 고대 유적의 흔적.",
			"이끼 낀 석상들은 잊혀진 진실을 속삭인다.",
			"희미한 균열 너머, 들려오는 것은 망자의 메아리인가.",
			"난초의 저주, 그 뿌리가 흔들리기 시작한다."
		],
		"english": [
			"Deepest part of the forest. Traces of ancient ruins untouched by foot.",
			"Moss-covered statues whisper forgotten truths.",
			"Beyond the faint crack, is that the echo of the dead?",
			"The curse of the orchid, its roots begin to tremble."
		],
		"japanese": [
			"森の最深部。人跡未踏の古代遺跡の痕跡。",
			"苔むした石像が忘れ去られた真実を囁く。",
			"微かな亀裂の向こう、聞こえるは死者の木霊か。",
			"蘭の呪い、その根が揺らぎ始める。"
		],
		"chinese": [
			"森林最深处。人迹罕至的古老遗迹。",
			"长满青苔的石像低语着被遗忘的真相。",
			"微弱的裂缝之外，传来的是亡者的回声吗？",
			"兰花的诅咒，其根基开始动摇。"
		],
		"french": [
			"Au plus profond de la forêt. Des traces d'anciennes ruines inexplorées.",
			"Les statues couvertes de mousse murmurent des vérités oubliées.",
			"Au-delà de la faible fissure, est-ce l'écho des morts ?",
			"La malédiction de l'orchidée, ses racines commencent à trembler."
		],
		"spanish": [
			"La parte más profunda del bosque. Rastros de antiguas ruinas inexploradas.",
			"Las estatuas cubiertas de musgo susurran verdades olvidadas.",
			"Más allá de la tenue grieta, ¿es el eco de los muertos?",
			"La maldición de la orquídea, sus raíces comienzan a temblar."
		],
		"vietnamese": [
			"Nơi sâu thẳm nhất khu rừng. Dấu vết của di tích cổ xưa chưa từng đặt chân đến.",
			"Những bức tượng đá phủ rêu thì thầm những sự thật bị lãng quên.",
			"Phía sau vết nứt mờ nhạt, liệu có phải là tiếng vọng của người đã khuất?",
			"Lời nguyền hoa lan, rễ của nó bắt đầu rung chuyển."
		],
		"thai": [
			"ส่วนลึกที่สุดของป่า ร่องรอยอารยธรรมโบราณที่มิเคยมีผู้ใดเหยียบย่ำ",
			"รูปปั้นหินที่ปกคลุมด้วยมอสกระซิบความจริงที่ถูกลืม",
			"เบื้องหลังรอยแยกจางๆ นั่นคือเสียงสะท้อนของผู้ตายใช่หรือไม่",
			"คำสาปของกล้วยไม้ รากของมันเริ่มสั่นคลอน"
		],
		"hindi": [
			"जंगल का सबसे गहरा हिस्सा। प्राचीन खंडहरों के निशान जहाँ कोई नहीं पहुँचा।",
			"काई से ढकी मूर्तियाँ भूली हुई सच्चाइयों को फुसफुसाती हैं।",
			"धुंधली दरार के पार, क्या यह मृतकों की प्रतिध्वनि है?",
			"ऑर्किड का अभिशाप, उसकी जड़ें कांपने लगी हैं।"
		]
	}
} as const;
