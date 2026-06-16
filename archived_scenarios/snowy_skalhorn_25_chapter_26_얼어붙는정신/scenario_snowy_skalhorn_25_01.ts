export const scenario_snowy_skalhorn_25_01 = {
	"scenario_id": "snowy_skalhorn_25_01",
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
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한기가 뒤덮은 설원. 공기는 칼날처럼 날카로웠다.",
						"english": "Snowfield shrouded in chill. Air sharp as a blade.",
						"japanese": "寒気に覆われた雪原。空気は刃のように鋭い。",
						"chinese": "寒气笼罩的雪原。空气如刀锋般锐利。",
						"french": "Plaine enneigée de givre. L'air, coupant comme une lame.",
						"spanish": "Nieve cubierta de frío. El aire, afilado como cuchilla.",
						"vietnamese": "Tuyết trường phủ khí lạnh. Không khí sắc như lưỡi dao.",
						"thai": "ทุ่งหิมะปกคลุมด้วยไอหนาว อากาศคมกริบดุจใบมีด",
						"hindi": "ठंडक से ढका बर्फीला मैदान। हवा, छुरी सी तेज़।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이상해… 춥긴 한데, 머리가 맑아지는 것 같아.",
						"english": "Odd... it's cold, yet my mind feels clear.",
						"japanese": "おかしい… 寒いけど、頭が冴えるようだ。",
						"chinese": "奇怪… 虽冷，头脑却清醒了。",
						"french": "Étrange… il fait froid, mais ma tête s'éclaircit.",
						"spanish": "Extraño… hace frío, pero mi mente se aclara.",
						"vietnamese": "Lạ thật… Lạnh đấy, nhưng đầu óc lại minh mẫn.",
						"thai": "แปลก… หนาว แต่หัวสมองกลับปลอดโปร่ง",
						"hindi": "अजीब… ठंड है, पर दिमाग़ साफ़ हो रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록… 한기 속에서 두려움이 사라지는 양상. 흥미롭군.",
						"english": "Record... fear dissipating in the cold. Interesting.",
						"japanese": "記録… 寒気の中で恐怖が消える様相。興味深い。",
						"chinese": "记录… 恐惧在寒气中消散的现象。有趣。",
						"french": "Notes… La peur s'estompe dans le froid. Intéressant.",
						"spanish": "Registro… El miedo se disipa con el frío. Interesante.",
						"vietnamese": "Ghi chép… Sợ hãi tan biến trong khí lạnh. Thú vị.",
						"thai": "บันทึก… ความกลัวหายไปในไอหนาว น่าสนใจ",
						"hindi": "रिकॉर्ड… ठंडक में भय का लुप्त होना। दिलचस्प।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 기이한 평온… 자연의 현상이 아니다. 무언가 의도된 것.",
						"english": "This strange calm… not natural. Something deliberate.",
						"japanese": "この奇妙な平穏… 自然現象ではない。何かの意図だ。",
						"chinese": "这份奇特平静… 非自然现象。乃刻意为之。",
						"french": "Cette paix étrange… pas naturelle. C'est voulu.",
						"spanish": "Esta extraña calma… no es natural. Es intencional.",
						"vietnamese": "Sự bình yên kỳ lạ này… không phải tự nhiên. Là có ý đồ.",
						"thai": "ความสงบอันแปลกประหลาดนี้… ไม่ใช่ธรรมชาติ มีบางสิ่งถูกจงใจ",
						"hindi": "यह अजीब शांति… प्राकृतिक नहीं। कुछ जानबूझकर किया गया है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그냥 편안해지는 느낌인데… 뭐가 문제지?",
						"english": "It just feels calming... What's the issue?",
						"japanese": "ただ心地よいだけだが… 何か問題でも？",
						"chinese": "只是感觉放松… 有何不妥？",
						"french": "Je me sens juste apaisé… Où est le problème ?",
						"spanish": "Solo se siente relajante… ¿Qué problema hay?",
						"vietnamese": "Chỉ là cảm giác thoải mái… Có vấn đề gì?",
						"thai": "ก็แค่รู้สึกสบาย… มีปัญหาอะไรหรือ?",
						"hindi": "बस आराम लग रहा है… क्या दिक्कत है?"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "너무 평온한 것이 마음에 걸려. 정신을 마비시키는 것과 같아.",
						"english": "This serenity worries me. It's like my mind is going numb.",
						"japanese": "この静けさが気になる。まるで精神が麻痺していくようだ。",
						"chinese": "这种平静让我不安。它像是麻痹了我的精神。",
						"french": "Cette sérénité m'inquiète. C'est comme si mon esprit s'engourdissait.",
						"spanish": "Esta serenidad me inquieta. Es como si mi mente se estuviera adormeciendo.",
						"vietnamese": "Sự yên bình này khiến ta lo lắng. Cứ như thể nó đang làm tê liệt tâm trí ta vậy.",
						"thai": "ความสงบนี้ทำให้ข้ากังวล มันเหมือนกับว่าจิตใจของข้ากำลังชาชิน",
						"hindi": "यह शांति मुझे परेशान करती है। यह ऐसा है जैसे मेरा मन सुन्न हो रहा हो।"
					},
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "잡념과 두려움이 얼어붙어 사라지고 있다. 의지가 침식당하는 과정이군.",
						"english": "Distracting thoughts and fears are freezing, fading away. This is a process of my will eroding.",
						"japanese": "雑念と恐怖が凍りつき、消えていく。これは意志が侵食される過程だ。",
						"chinese": "杂念和恐惧正在冻结、消散。这是意志被侵蚀的过程。",
						"french": "Les pensées distrayantes et les peurs se figent, s'estompent. C'est le processus d'érosion de ma volonté.",
						"spanish": "Los pensamientos y miedos se congelan, desapareciendo. Este es el proceso de erosión de mi voluntad.",
						"vietnamese": "Những tạp niệm và nỗi sợ đang đóng băng, tan biến. Đây là quá trình ý chí bị ăn mòn.",
						"thai": "ความคิดที่ฟุ้งซ่านและความกลัวกำลังแข็งตัว จางหายไป นี่คือกระบวนการที่เจตจำนงของข้ากำลังถูกกัดกร่อน",
						"hindi": "विचलित करने वाले विचार और डर जम कर गायब हो रहे हैं। यह मेरी इच्छाशक्ति के क्षय होने की प्रक्रिया है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "생각하기 싫어져… 그냥 이대로 가만히 있고 싶어….",
						"english": "I don't want to think... I just want to stay like this...",
						"japanese": "考えたくない…ただ、このままじっとしていたい…。",
						"chinese": "我不想思考……只想就这样待着……",
						"french": "Je ne veux plus penser... Je veux juste rester comme ça...",
						"spanish": "No quiero pensar... Solo quiero quedarme así...",
						"vietnamese": "Tôi không muốn nghĩ gì cả... Chỉ muốn cứ thế này mà ở yên...",
						"thai": "ข้าไม่อยากคิดอะไรแล้ว... แค่อยากจะอยู่นิ่งๆ แบบนี้...",
						"hindi": "मैं सोचना नहीं चाहता... बस ऐसे ही रहना चाहता हूँ..."
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "이것은 단순한 추위가 아니다. 정신을 좀먹는… 권능.",
						"english": "This isn't mere cold. It's a power... gnawing at the mind.",
						"japanese": "これは単なる寒気ではない。精神を蝕む…権能だ。",
						"chinese": "这不仅仅是寒冷。这是一种吞噬精神的……权能。",
						"french": "Ce n'est pas un simple froid. C'est un pouvoir... qui ronge l'esprit.",
						"spanish": "Esto no es un simple frío. Es un poder... que corroe la mente.",
						"vietnamese": "Đây không phải chỉ là cái lạnh đơn thuần. Nó là một Quyền Năng... đang gặm nhấm tâm trí.",
						"thai": "นี่ไม่ใช่แค่ความหนาวเย็นธรรมดา แต่มันคือพลัง... ที่กัดกินจิตวิญญาณ",
						"hindi": "यह सिर्फ़ ठंड नहीं है। यह एक शक्ति है... जो मन को खाए जा रही है।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "권능…? 무슨 말도 안 되는 소리야.",
						"english": "Power...? What nonsense are you talking about?",
						"japanese": "権能…？何を馬鹿なことを言ってるんだ。",
						"chinese": "权能……？你在说什么胡话。",
						"french": "Pouvoir...? De quelle absurdité parles-tu ?",
						"spanish": "¿Poder...? ¿De qué tonterías hablas?",
						"vietnamese": "Quyền Năng...? Ngươi đang nói cái quái gì vậy?",
						"thai": "พลัง...? เจ้ากำลังพูดเรื่องไร้สาระอะไร?",
						"hindi": "शक्ति...? यह क्या बेवकूफ़ी भरी बातें कर रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "곧 알게 될 거다. 이 거짓된 평온의 진정한 대가를.",
						"english": "You'll soon learn the true cost of this false serenity.",
						"japanese": "すぐにわかるだろう。この偽りの平穏の真の代償を。",
						"chinese": "你很快就会明白。这种虚假平静的真正代价。",
						"french": "Tu connaîtras bientôt le véritable prix de cette fausse sérénité.",
						"spanish": "Pronto conocerás el verdadero precio de esta falsa serenidad.",
						"vietnamese": "Ngươi sẽ sớm biết được cái giá thật sự của sự yên bình giả dối này.",
						"thai": "เจ้าจะได้รู้ในไม่ช้าถึงราคาที่แท้จริงของความสงบสุขจอมปลอมนี้",
						"hindi": "तुम्हें जल्द ही इस झूठी शांति की असली कीमत पता चल जाएगी।"
					},
					"emotion": "sad",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석은… 것들… 진정한… 평온을… 거부하다니….",
						"english": "...Foolish... things... to refuse... true... serenity...",
						"japanese": "…愚かな…者どもめ…真の…安寧を…拒むとは…。",
						"chinese": "…愚蠢的…东西…竟敢…拒绝…真正的…平静…。",
						"french": "...Idiots... de refuser... la véritable... sérénité...",
						"spanish": "...Necios... que... rechazan... la verdadera... serenidad...",
						"vietnamese": "…Những kẻ… ngu ngốc… dám từ chối… sự bình yên… thực sự…",
						"thai": "...เจ้าพวก...โง่เขลา...ที่ปฏิเสธ...ความสงบสุข...ที่แท้จริง...",
						"hindi": "...मूर्ख... प्राणी... सच्ची... शांति... को अस्वीकार करते हो..."
					},
					"emotion": "sad",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝난 건가? 이제 이 한기도 사라지겠지?",
						"english": "Is it over? Will this chill also vanish now?",
						"japanese": "終わったのか？これでこの寒気も消えるのか？",
						"chinese": "结束了吗？这股寒意也会消失吧？",
						"french": "C'est fini ? Ce froid va-t-il aussi disparaître maintenant ?",
						"spanish": "¿Ha terminado? ¿Desaparecerá este frío también ahora?",
						"vietnamese": "Xong rồi sao? Bây giờ cái lạnh này cũng sẽ biến mất chứ?",
						"thai": "จบแล้วหรือ? ความหนาวนี้จะหายไปแล้วสินะ?",
						"hindi": "क्या यह खत्म हो गया? क्या अब यह ठंड भी गायब हो जाएगी?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니. 이건… 시작에 불과해. 뿔잔의 권능은… 더 깊은 곳에서 깨어나고 있어.",
						"english": "No. This is... merely the beginning. The power of the Horned Chalice is... awakening in deeper places.",
						"japanese": "いや。これは…始まりに過ぎない。角杯の権能は…さらに深い場所で目覚めている。",
						"chinese": "不。这…只是开始。圣杯的权能…正在更深处苏醒。",
						"french": "Non. Ce n'est… que le début. Le pouvoir du Calice Cornu… s'éveille dans les profondeurs.",
						"spanish": "No. Esto es… solo el principio. El poder del Cáliz Cornudo… está despertando en lugares más profundos.",
						"vietnamese": "Không. Đây… chỉ là khởi đầu. Quyền năng của Sừng Rượu… đang thức tỉnh ở những nơi sâu hơn.",
						"thai": "ไม่ นี่มัน...เป็นเพียงจุดเริ่มต้นเท่านั้น พลังแห่งถ้วยเขานั้น...กำลังตื่นขึ้นในที่ที่ลึกกว่าเดิม",
						"hindi": "नहीं। यह... तो बस शुरुआत है। सींग वाले प्याले की शक्ति... गहरी जगहों में जागृत हो रही है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자 뒤로, 한기는 더욱 짙어졌다. 탐험대는 발걸음을 멈출 수 없었다.",
						"english": "Behind the fallen shadows, the chill deepened. The expedition could not stop their steps.",
						"japanese": "倒れた影の向こうで、寒気はさらに濃くなった。探検隊は足を止めることができなかった。",
						"chinese": "倒下的阴影之后，寒意愈发浓重。探险队无法停下脚步。",
						"french": "Derrière les ombres tombées, le froid s'épaissit. L'expédition ne put s'arrêter.",
						"spanish": "Detrás de las sombras caídas, el frío se hizo más intenso. La expedición no pudo detener sus pasos.",
						"vietnamese": "Phía sau những bóng đổ, cái lạnh càng thêm dày đặc. Đoàn thám hiểm không thể ngừng bước.",
						"thai": "เบื้องหลังเงาที่ล้มลง ความหนาวเย็นยิ่งทวีความรุนแรงขึ้น คณะสำรวจไม่อาจหยุดยั้งฝีเท้าได้",
						"hindi": "गिरी हुई छायाओं के पीछे, ठंड और गहरी हो गई। अभियान दल अपने कदम रोक नहीं पाया।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한기 속에서 거대한 그림자가 서서히 모습을 드러냈다.",
						"english": "From within the chill, a colossal shadow slowly emerged.",
						"japanese": "寒気の中、巨大な影がゆっくりと姿を現した。",
						"chinese": "在寒气中，一个巨大的影子缓缓显现。",
						"french": "Du froid, une ombre colossale émergea lentement.",
						"spanish": "Del frío, una sombra colosal emergió lentamente.",
						"vietnamese": "Giữa cái lạnh giá, một bóng đen khổng lồ từ từ hiện hình.",
						"thai": "ท่ามกลางความหนาวเย็น เงาขนาดมหึมาค่อยๆ ปรากฏกายขึ้น",
						"hindi": "ठंडक के बीच से, एक विशाल छाया धीरे-धीरे प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어째서… 이 평온을… 거부하는가….",
						"english": "Why do you... reject... this serenity...?",
						"japanese": "なぜ…この平穏を…拒むのか…。",
						"chinese": "为何……要拒绝……这份平静……。",
						"french": "Pourquoi... rejettes-tu... cette sérénité...?",
						"spanish": "¿Por qué... rechazas... esta serenidad...?",
						"vietnamese": "Tại sao... ngươi lại... từ chối... sự yên bình này...?",
						"thai": "เหตุใดเจ้าจึง... ปฏิเสธ... ความสงบนี้...?",
						"hindi": "तुम क्यों... इस शांति को... अस्वीकार करते हो...?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 한기를 부른 거냐?",
						"english": "Did you... summon all this chill?",
						"japanese": "お前が…このすべての寒気を呼んだのか？",
						"chinese": "是你……召来了这所有的寒气吗？",
						"french": "C'est toi... qui as invoqué tout ce froid ?",
						"spanish": "¿Fuiste tú... quien invocó todo este frío?",
						"vietnamese": "Ngươi... đã triệu hồi tất cả cái lạnh này sao?",
						"thai": "เจ้า... เรียกความหนาวเย็นทั้งหมดนี้มาหรือ?",
						"hindi": "क्या तुमने... इस सारी ठंड को बुलाया है?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "기록… 이름 없는 자… 그대의 룬은 마비와 복종을 속삭이는군.",
						"english": "Record... Nameless One... Your runes whisper of paralysis and subservience.",
						"japanese": "記録…名もなき者よ…貴殿のルーンは麻痺と服従を囁く。",
						"chinese": "记录……无名者……你的符文低语着麻痹与顺从。",
						"french": "Enregistrement... Sans Nom... Tes runes murmurent la paralysie et la soumission.",
						"spanish": "Registro... Sin Nombre... Tus runas susurran parálisis y sumisión.",
						"vietnamese": "Ghi chép... Kẻ Vô Danh... Các ký tự của ngươi thì thầm về sự tê liệt và phục tùng.",
						"thai": "บันทึก... ผู้ไร้นาม... รูนของเจ้ากระซิบถึงการเป็นอัมพาตและการยอมจำนน",
						"hindi": "अभिलेख... नामहीन... तुम्हारे रून्स लकवा और अधीनता फुसफुसाते हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내 이름은… 중요치 않다… 그저… 잠들어라….",
						"english": "My name... matters not... Just... sleep...",
						"japanese": "我が名は…重要ではない…ただ…眠れ…。",
						"chinese": "我的名字…不重要…只是…睡吧…。",
						"french": "Mon nom… n'importe pas… Juste… dors…",
						"spanish": "Mi nombre… no importa… Solo… duerme…",
						"vietnamese": "Tên ta… không quan trọng… Chỉ là… hãy ngủ đi…",
						"thai": "ชื่อข้า...ไม่สำคัญ...เพียงแค่...จงหลับใหล...",
						"hindi": "मेरा नाम... मायने नहीं रखता... बस... सो जाओ..."
					}
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "절대… 네 뜻대로 되지 않아!",
						"english": "Never... by your will!",
						"japanese": "絶対に…お前の思い通りにはならない！",
						"chinese": "绝不…如你所愿！",
						"french": "Jamais… selon ta volonté !",
						"spanish": "¡Nunca… a tu manera!",
						"vietnamese": "Tuyệt đối… không theo ý ngươi đâu!",
						"thai": "ไม่มีทาง...ตามใจเจ้าได้หรอก!",
						"hindi": "कभी नहीं... तुम्हारी मर्जी से!"
					}
				}
			],
			"lose_dialogue": [
				{
					"speaker": "eira",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "한기가 모든 것을 집어삼켰다. 정신은 깊은 잠에 빠져들었다.",
						"english": "The chill consumed everything. The mind fell into a deep sleep.",
						"japanese": "寒気がすべてを飲み込んだ。精神は深い眠りに落ちた。",
						"chinese": "寒意吞噬了一切。精神陷入了沉睡。",
						"french": "Le froid engloutit tout. L'esprit sombra dans un profond sommeil.",
						"spanish": "El frío lo consumió todo. La mente cayó en un sueño profundo.",
						"vietnamese": "Cái lạnh nuốt chửng mọi thứ. Tinh thần chìm vào giấc ngủ sâu.",
						"thai": "ความหนาวเย็นกลืนกินทุกสิ่ง จิตใจดำดิ่งสู่ห้วงนิทราอันล้ำลึก",
						"hindi": "ठंड ने सब कुछ निगल लिया। मन गहरी नींद में चला गया।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "나른한 평온 속에서… 영원히… 잠들어라….",
						"english": "In languid serenity... sleep... forever...",
						"japanese": "倦怠な安寧の中で…永遠に…眠れ…。",
						"chinese": "在慵懒的平静中…永远…睡去吧…。",
						"french": "Dans une paisible léthargie… dors… pour l'éternité…",
						"spanish": "En una lánguida calma… duerme… para siempre…",
						"vietnamese": "Trong sự bình yên uể oải… hãy ngủ… mãi mãi…",
						"thai": "ในความสงบอันเงียบงัน...จงหลับใหล...ชั่วนิรันดร์...",
						"hindi": "आलस्य भरी शांति में... हमेशा के लिए... सो जाओ..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…아니… 아직… 끝나지… 않았어….",
						"english": "...No... it's not... over... yet...",
						"japanese": "…いや…まだ…終わって…ない…。",
						"chinese": "…不…还…没…结束…。",
						"french": "...Non... ce n'est pas... encore... fini...",
						"spanish": "...No... todavía... no... ha terminado...",
						"vietnamese": "…Không… vẫn… chưa… kết thúc…",
						"thai": "...ไม่...ยัง...ไม่...จบ...",
						"hindi": "...नहीं... अभी... खत्म... नहीं हुआ..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "기록… 패배는… 한기를… 강화시키는군….",
						"english": "Record... Defeat... strengthens... the chill...",
						"japanese": "記録…敗北は…寒気を…強化させるな。",
						"chinese": "记录…失败…会…增强…寒意…。",
						"french": "Enregistrement… La défaite… renforce… le froid…",
						"spanish": "Registro… La derrota… intensifica… el frío…",
						"vietnamese": "Ghi chép… Thất bại… tăng cường… cái lạnh…",
						"thai": "บันทึก...ความพ่ายแพ้...ยิ่ง...เสริมความหนาวเย็น...",
						"hindi": "रिकॉर्ड... हार... ठंड को... मजबूत करती है..."
					},
					"emotion": "base",
					"speaker": "eira"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"뿔잔에서 뻗어 나온 한기. 눈밭을 가로질렀다.",
			"칼날 같은 추위는 살갗을 넘어 정신까지 파고들었다.",
			"두려움도, 잡념도, 거짓말처럼 사라졌다.",
			"그것은 기이할 만큼, 나른한 평온이었다.",
			"모두가 깊이 잠들기 직전의, 차가운 속삭임처럼."
		],
		"english": [
			"A chill from the horn, sweeping across the snowfield.",
			"The blade-like cold pierced skin, then mind.",
			"Fear, stray thoughts, vanished like a lie.",
			"It was a strangely languid calm.",
			"Like a cold whisper, just before deep sleep."
		],
		"japanese": [
			"角杯から放たれる寒気。雪原を横切った。",
			"刃のような寒さ、肌を越え、精神まで貫く。",
			"恐怖も雑念も、嘘のように消え去った。",
			"それは奇妙なほど、気だるいほどの平穏だった。",
			"皆が深く眠る直前の、冷たい囁きのように。"
		],
		"chinese": [
			"寒气从号角中蔓延，横扫雪原。",
			"刀锋般的寒冷，刺穿皮肤，直达精神。",
			"恐惧、杂念，谎言般消逝。",
			"那是一种奇特而慵懒的平静。",
			"如同所有人深睡前，冰冷的低语。"
		],
		"french": [
			"Un frisson émanant du cor, traversant la plaine enneigée.",
			"Le froid de lame transperça la peau, puis l'esprit.",
			"Peur, pensées vaines, disparues comme un mensonge.",
			"C'était une étrange, langoureuse paix.",
			"Tel un froid murmure, juste avant le sommeil profond."
		],
		"spanish": [
			"Un frío gélido del cuerno, extendiéndose por la nieve.",
			"El frío cortante, atravesó la piel, hasta el alma.",
			"Miedo, pensamientos vagos, se desvanecieron como una mentira.",
			"Era una extraña, lánguida calma.",
			"Como un frío susurro, justo antes del sueño profundo."
		],
		"vietnamese": [
			"Một luồng khí lạnh từ sừng, lan khắp tuyết trường.",
			"Lạnh như lưỡi dao, xuyên qua da thịt, thấm vào tinh thần.",
			"Sợ hãi, tạp niệm, biến mất như lời nói dối.",
			"Đó là sự bình yên kỳ lạ, uể oải.",
			"Tựa lời thì thầm lạnh lẽo, ngay trước giấc ngủ sâu."
		],
		"thai": [
			"ไอหนาวจากเขาสัตว์ แผ่ข้ามทุ่งหิมะ",
			"ไอหนาวคมกริบ ทะลุผิวหนังสู่จิตวิญญาณ",
			"ความกลัว, ความคิดฟุ้งซ่าน, หายไปราวโกหก",
			"มันคือความสงบอันแปลกประหลาดและเชื่องช้า",
			"ดั่งเสียงกระซิบเย็นยะเยือก ก่อนทุกคนหลับใหล"
		],
		"hindi": [
			"सींग के प्याले से निकली ठंडक, बर्फ़ीले मैदान में फैल गई।",
			"छुरी जैसी ठंडक, त्वचा के पार, आत्मा तक पहुँची।",
			"डर, व्यर्थ के विचार, झूठ की तरह ग़ायब हुए।",
			"वह एक अजीब सी, सुस्त शांति थी।",
			"जैसे गहरी नींद से ठीक पहले की, एक ठंडी फुसफुसाहट।"
		]
	}
} as const;
