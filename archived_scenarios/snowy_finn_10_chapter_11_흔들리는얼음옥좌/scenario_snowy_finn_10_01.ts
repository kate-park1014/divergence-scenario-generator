export const scenario_snowy_finn_10_01 = {
	"scenario_id": "snowy_finn_10_01",
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
					"content": {
						"korean": "차가운 얼음 회랑이 끝없이 이어졌다. 곳곳에 팻말이 보였다.",
						"english": "The cold, icy corridor stretched endlessly. Signs were visible everywhere.",
						"japanese": "冷たい氷の回廊が果てしなく続いていた。あちこちに立て札が見えた。",
						"chinese": "冰冷的冰廊无限延伸。到处可见告示牌。",
						"french": "Le froid corridor de glace s'étirait à l'infini. Des panneaux étaient visibles partout.",
						"spanish": "El frío corredor de hielo se extendía sin fin. Se veían carteles por todas partes.",
						"vietnamese": "Hành lang băng giá lạnh lẽo kéo dài vô tận. Khắp nơi đều thấy những tấm biển.",
						"thai": "ทางเดินน้ำแข็งอันหนาวเหน็บทอดยาวไม่มีที่สิ้นสุด ป้ายต่างๆ มองเห็นได้ทั่วทุกที่",
						"hindi": "ठंडा, बर्फीला गलियारा अनंत तक फैला हुआ था। हर जगह संकेत दिखाई दे रहे थे।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "또 팻말이네. '무릎 꿇어라' 인가?",
						"english": "Another sign. 'Kneel,' I presume?",
						"japanese": "また立て札だ。「ひざまずけ」かな？",
						"chinese": "又是告示。是“跪下”吗？",
						"french": "Encore un panneau. « Agenouillez-vous », je suppose ?",
						"spanish": "Otro cartel. ¿\"Arrodíllate\", supongo?",
						"vietnamese": "Lại một tấm biển nữa. 'Quỳ gối', à?",
						"thai": "ป้ายอีกแล้วเหรอ 'คุกเข่าซะ' งั้นเหรอ?",
						"hindi": "एक और संकेत। 'घुटने टेकिए,' मुझे लगता है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "익숙한 문구들 사이, 한 장이 유독 눈에 띄었다.",
						"english": "Among familiar phrases, one stood out conspicuously.",
						"japanese": "見慣れた文言の中に、一枚がひときわ目を引いた。",
						"chinese": "在熟悉的文字中，有一张特别引人注目。",
						"french": "Parmi les phrases familières, une seule se démarquait particulièrement.",
						"spanish": "Entre frases familiares, una destacaba notablemente.",
						"vietnamese": "Giữa những dòng chữ quen thuộc, có một tấm đặc biệt nổi bật.",
						"thai": "ท่ามกลางข้อความที่คุ้นเคย มีป้ายหนึ่งที่สะดุดตาเป็นพิเศษ",
						"hindi": "परिचित वाक्यांशों के बीच, एक विशेष रूप से बाहर खड़ा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…'제발 좀 무서워해줘'?",
						"english": "...'Please, just be scared of me'?",
						"japanese": "…「どうか、私を恐れてくれ」？",
						"chinese": "…“请你，稍微害怕我一下”？",
						"french": "…« S'il vous plaît, ayez juste peur de moi » ?",
						"spanish": "...'Por favor, tenme un poco de miedo'?",
						"vietnamese": "...'Làm ơn, hãy sợ tôi một chút'?",
						"thai": "...'ได้โปรด จงกลัวข้าเถอะ'?",
						"hindi": "...'कृपया, बस मुझसे डरो'?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "흠… 흥미롭네요. 위엄의 가면에 첫 금이 가는 순간을 기록합니다.",
						"english": "Hmm... interesting. I'll record this moment, the first crack in the mask of dignity.",
						"japanese": "ふむ…興味深いですね。威厳の仮面に最初の亀裂が入る瞬間を記録します。",
						"chinese": "嗯…真有趣。我将记录下这个瞬间，威严面具上的第一道裂痕。",
						"french": "Hmm… intéressant. Je note ce moment, la première fissure dans le masque de dignité.",
						"spanish": "Mmm... interesante. Anoto este momento, la primera grieta en la máscara de dignidad.",
						"vietnamese": "Hmm... thú vị thật. Tôi sẽ ghi lại khoảnh khắc này, vết nứt đầu tiên trên chiếc mặt nạ uy nghiêm.",
						"thai": "อืม... น่าสนใจทีเดียว ผมจะบันทึกช่วงเวลานี้ไว้ รอยร้าวแรกบนหน้ากากแห่งศักดิ์ศรี",
						"hindi": "हम्म... दिलचस्प। मैं इस पल को दर्ज करता हूँ, गरिमा के मुखौटे में पहली दरार।"
					},
					"emotion": "base"
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
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "이 팻말들은 점차 솔직해지고 있어요. 왕의 불안이 그대로 드러나죠.",
						"english": "These signs are becoming increasingly candid. The king's anxiety is plainly revealed.",
						"japanese": "この立て札たちは次第に率直になってきていますね。王の不安がそのまま現れています。",
						"chinese": "这些告示牌逐渐变得直白。国王的不安暴露无遗。",
						"french": "Ces panneaux deviennent de plus en plus directs. L'anxiété du roi est clairement révélée.",
						"spanish": "Estos carteles se están volviendo cada vez más sinceros. La ansiedad del rey se revela claramente.",
						"vietnamese": "Những tấm biển này dần trở nên thẳng thắn hơn. Sự lo lắng của nhà vua lộ rõ.",
						"thai": "ป้ายเหล่านี้เริ่มเปิดเผยมากขึ้นเรื่อยๆ ความวิตกกังวลของราชาถูกเปิดเผยออกมาอย่างชัดเจน",
						"hindi": "ये संकेत उत्तरोत्तर स्पष्ट होते जा रहे हैं। राजा की चिंता स्पष्ट रूप से प्रकट हो रही है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "불안? 그냥 협박하는 것처럼 보이는데.",
						"english": "Anxiety? It just looks like a threat.",
						"japanese": "不安？ただ脅迫しているように見えるけど。",
						"chinese": "不安？看起来只是在威胁。",
						"french": "Anxiété ? Ça ressemble juste à une menace.",
						"spanish": "¿Ansiedad? Parece una amenaza.",
						"vietnamese": "Lo lắng à? Trông như đang đe dọa thôi.",
						"thai": "กังวล? ดูเหมือนแค่ข่มขู่เท่านั้นแหละ",
						"hindi": "चिंता? यह तो बस धमकी जैसा लग रहा है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "협박이 간절해지는 순간, 그것은 더 이상 위엄이 아닙니다.",
						"english": "The moment a threat becomes desperate, it loses its dignity.",
						"japanese": "脅迫が必死になった瞬間、それはもはや威厳ではない。",
						"chinese": "当威胁变得绝望时，它就不再是尊严了。",
						"french": "Dès l'instant où une menace devient désespérée, elle perd sa dignité.",
						"spanish": "En el momento en que una amenaza se vuelve desesperada, ya no es digna.",
						"vietnamese": "Khoảnh khắc lời đe dọa trở nên tuyệt vọng, nó không còn là uy nghiêm nữa.",
						"thai": "เมื่อการข่มขู่กลายเป็นความสิ้นหวัง มันก็ไม่ใช่ศักดิ์ศรีอีกต่อไป",
						"hindi": "जिस पल धमकी बेताब हो जाती है, वह गरिमा नहीं रहती।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_2",
					"type": "speech",
					"content": {
						"korean": "…그러고 보니, 좀 안쓰럽기도 하네.",
						"english": "...Now that you mention it, it's rather pathetic.",
						"japanese": "…そういえば、少し哀れにも見えるな。",
						"chinese": "……说起来，还真有点可怜。",
						"french": "...Maintenant que tu le dis, c'est plutôt pathétique.",
						"spanish": "...Ahora que lo mencionas, da un poco de pena.",
						"vietnamese": "...Mà nói mới nhớ, cũng đáng thương thật.",
						"thai": "...ว่าไปแล้วก็น่าสงสารเหมือนกันนะ",
						"hindi": "...अब जब तुमने कहा, तो थोड़ा तरस भी आ रहा है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "진정한 위엄은 굳이 외치지 않아도 존재합니다.",
						"english": "True dignity exists without needing to be proclaimed.",
						"japanese": "真の威厳は、あえて叫ばずとも存在する。",
						"chinese": "真正的尊严无需呐喊也存在。",
						"french": "La vraie dignité existe sans avoir besoin d'être proclamée.",
						"spanish": "La verdadera dignidad existe sin necesidad de ser proclamada.",
						"vietnamese": "Uy nghiêm thật sự tồn tại mà không cần phải hô hào.",
						"thai": "ศักดิ์ศรีที่แท้จริงไม่จำเป็นต้องป่าวประกาศ",
						"hindi": "सच्ची गरिमा बिना कहे भी मौजूद होती है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이 왕은 너무 필사적으로 외치고 있어.",
						"english": "This king is shouting too desperately.",
						"japanese": "この王は、あまりにも必死に叫んでいる。",
						"chinese": "这个国王叫得太绝望了。",
						"french": "Ce roi crie trop désespérément.",
						"spanish": "Este rey grita con demasiada desesperación.",
						"vietnamese": "Vị vua này đang hô hào quá tuyệt vọng.",
						"thai": "ราชาองค์นี้กำลังตะโกนอย่างสิ้นหวังเกินไป",
						"hindi": "यह राजा बहुत बेताबी से चिल्ला रहा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "맞아요. 그 필사적인 외침이, 약점이죠.",
						"english": "Exactly. That desperate cry is his weakness.",
						"japanese": "その通り。その必死な叫びこそが、弱点だ。",
						"chinese": "没错。那绝望的呐喊，就是弱点。",
						"french": "Exactement. Ce cri désespéré est sa faiblesse.",
						"spanish": "Exacto. Ese grito desesperado es su debilidad.",
						"vietnamese": "Đúng vậy. Tiếng kêu tuyệt vọng đó, chính là điểm yếu.",
						"thai": "ใช่แล้ว เสียงตะโกนที่สิ้นหวังนั่นแหละคือจุดอ่อน",
						"hindi": "हाँ, बिलकुल। वह बेताब चीख ही उसकी कमजोरी है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "그럼 저 안의 '{random_boss}'라는 놈도… 그냥 허세 덩어리인가?",
						"english": "Then that '{random_boss}' inside... is just a bluff?",
						"japanese": "じゃあ、あの奥の'{random_boss}'という奴も…ただのハッタリなのか？",
						"chinese": "那么里面的‘{random_boss}’那个家伙……也只是虚张声势吗？",
						"french": "Alors ce '{random_boss}' à l'intérieur... n'est qu'un bluff ?",
						"spanish": "Entonces ese '{random_boss}' de ahí dentro... ¿es solo un farol?",
						"vietnamese": "Vậy tên '{random_boss}' bên trong đó... cũng chỉ là kẻ khoác lác thôi sao?",
						"thai": "ถ้างั้นเจ้า '{random_boss}' ข้างในนั่น... ก็แค่ตัวโอ้อวดงั้นเหรอ?",
						"hindi": "तो अंदर का वह '{random_boss}' भी... सिर्फ दिखावा है क्या?"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "기록에 따르면, 왕의 옥좌는 이미 흔들리고 있습니다.",
						"english": "According to records, the king's throne is already shaking.",
						"japanese": "記録によれば、王の玉座は既に揺らいでいる。",
						"chinese": "根据记载，王的宝座已经摇摇欲坠了。",
						"french": "Selon les registres, le trône du roi est déjà ébranlé.",
						"spanish": "Según los registros, el trono del rey ya se está tambaleando.",
						"vietnamese": "Theo ghi chép, ngai vàng của nhà vua đã lung lay rồi.",
						"thai": "ตามบันทึก บัลลังก์ของราชากำลังสั่นคลอนแล้ว",
						"hindi": "रिकॉर्ड के अनुसार, राजा का सिंहासन पहले से ही डगमगा रहा है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "흔들린다고? 왜?",
						"english": "Shaking? Why?",
						"japanese": "揺らいでいる？なぜだ？",
						"chinese": "摇晃？为什么？",
						"french": "Ébranlé ? Pourquoi ?",
						"spanish": "¿Tambaleándose? ¿Por qué?",
						"vietnamese": "Lung lay ư? Tại sao?",
						"thai": "สั่นคลอนเหรอ? ทำไมล่ะ?",
						"hindi": "डगमगा रहा है? क्यों?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그 가면을 지탱할 힘이 없기 때문이죠. 곧 무너질 겁니다.",
						"english": "Because he lacks the power to sustain that facade. It will soon collapse.",
						"japanese": "あの仮面を支える力が無いからだ。間もなく崩壊するだろう。",
						"chinese": "因为他没有力量支撑那个面具。很快就会崩溃的。",
						"french": "Parce qu'il n'a pas la force de maintenir cette façade. Elle s'effondrera bientôt.",
						"spanish": "Porque no tiene la fuerza para mantener esa fachada. Pronto se derrumbará.",
						"vietnamese": "Vì không có sức mạnh để duy trì lớp mặt nạ đó. Sẽ sớm sụp đổ thôi.",
						"thai": "เพราะเขาไม่มีแรงพยุงหน้ากากนั้นไว้ มันจะพังทลายลงในไม่ช้า",
						"hindi": "क्योंकि उसके पास उस मुखौटे को बनाए रखने की शक्ति नहीं है। यह जल्द ही ढह जाएगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "이젠… 무섭지도 않네.",
						"english": "I'm… not even scared anymore.",
						"japanese": "もう…怖くもないね。",
						"chinese": "现在…我一点也不害怕了。",
						"french": "Je n'ai… même plus peur.",
						"spanish": "Ya ni siquiera… tengo miedo.",
						"vietnamese": "Giờ thì… chẳng còn sợ nữa.",
						"thai": "ตอนนี้…ฉันไม่กลัวอีกแล้ว",
						"hindi": "अब…मुझे डर भी नहीं लगता।"
					},
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적, {random_boss}가 쓰러졌다.",
						"english": "The unknown enemy, {random_boss}, has fallen.",
						"japanese": "正体不明の敵、{random_boss}が倒れた。",
						"chinese": "身份不明的敌人，{random_boss}倒下了。",
						"french": "L'ennemi inconnu, {random_boss}, est tombé.",
						"spanish": "El enemigo desconocido, {random_boss}, ha caído.",
						"vietnamese": "Kẻ địch vô danh, {random_boss}, đã gục ngã.",
						"thai": "ศัตรูที่ไม่รู้จักนาม, {random_boss}, ได้ล้มลงแล้ว",
						"hindi": "अज्ञात शत्रु, {random_boss}, गिर गया है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "크윽… 나는… 나는 두려움 그 자체인데…!",
						"english": "Ugh… I am… I am fear itself…!",
						"japanese": "くっ…私は…私は恐怖そのものなのに…！",
						"chinese": "呃…我…我就是恐惧本身啊…！",
						"french": "Ugh… Je suis… Je suis la peur incarnée… !",
						"spanish": "Ugh… Yo soy… ¡Yo soy el miedo en persona…!",
						"vietnamese": "Khặc… Ta là… Ta là nỗi sợ hãi đây mà…!",
						"thai": "อึก…ข้าคือ…ข้าคือความกลัวเองแท้ๆ…!",
						"hindi": "उफ़… मैं… मैं तो डर का साक्षात् रूप हूँ…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "두려움? 그냥 안쓰러웠어.",
						"english": "Fear? You were just pathetic.",
						"japanese": "恐怖？ただ哀れだっただけだよ。",
						"chinese": "恐惧？你只是让人觉得可怜罢了。",
						"french": "La peur ? Tu étais juste pathétique.",
						"spanish": "¿Miedo? Solo dabas lástima.",
						"vietnamese": "Sợ hãi? Ngươi chỉ đáng thương thôi.",
						"thai": "ความกลัว? แค่น่าสงสารเท่านั้นแหละ",
						"hindi": "डर? तुम तो बस दयनीय थे।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "가면은 완전히 부서졌네요. 하지만 흔들리는 옥좌는 여전히 남아있습니다.",
						"english": "The mask is completely shattered. But the trembling throne still remains.",
						"japanese": "仮面は完全に砕け散ったね。しかし、揺らめく玉座はまだ残っている。",
						"chinese": "面具彻底破碎了。但摇摇欲坠的宝座依然还在。",
						"french": "Le masque est complètement brisé. Mais le trône chancelant subsiste toujours.",
						"spanish": "La máscara está completamente destrozada. Pero el trono tambaleante aún permanece.",
						"vietnamese": "Chiếc mặt nạ đã vỡ tan hoàn toàn. Nhưng ngai vàng rung rinh vẫn còn đó.",
						"thai": "หน้ากากแตกสลายไปหมดแล้ว. แต่บัลลังก์ที่สั่นคลอนยังคงอยู่",
						"hindi": "मुखौटा पूरी तरह से टूट गया है। लेकिन हिलता हुआ सिंहासन अभी भी बाकी है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "어설픈 위엄은 사라졌지만, 진짜 왕은 아직 모습을 드러내지 않았다.",
						"english": "The clumsy majesty has vanished, but the true king remains unseen.",
						"japanese": "ぎこちない威厳は消え去ったが、真の王はまだ姿を現していない。",
						"chinese": "笨拙的威严消失了，但真正的国王尚未现身。",
						"french": "La fausse majesté s'est évanouie, mais le vrai roi reste invisible.",
						"spanish": "La torpe majestad ha desaparecido, pero el verdadero rey aún no se ha revelado.",
						"vietnamese": "Uy nghiêm vụng về đã biến mất, nhưng vị vua thật sự vẫn chưa lộ diện.",
						"thai": "ศักดิ์ศรีที่งุ่มง่ามได้หายไปแล้ว แต่กษัตริย์ที่แท้จริงยังไม่ปรากฏตัว",
						"hindi": "अनाड़ी गरिमा गायब हो गई है, लेकिन असली राजा अभी तक सामने नहीं आया है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "다음 회랑에서는 또 어떤 진실이 드러날까.",
						"english": "What new truths await us in the next corridor?",
						"japanese": "次の回廊では、またどんな真実が明らかになるのだろうか。",
						"chinese": "在下一个回廊中，又会揭示怎样的真相呢？",
						"french": "Quelles nouvelles vérités nous attendent dans le prochain couloir ?",
						"spanish": "¿Qué nuevas verdades nos esperan en el siguiente pasillo?",
						"vietnamese": "Sự thật nào sẽ được hé lộ ở hành lang tiếp theo?",
						"thai": "ความจริงอะไรจะถูกเปิดเผยในทางเดินถัดไป?",
						"hindi": "अगले गलियारे में कौन सी सच्चाई सामने आएगी?"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "회랑의 끝. 거대한 그림자가 탐험대를 기다리고 있었다.",
						"english": "End of the corridor. A massive shadow awaited the expedition.",
						"japanese": "回廊の終わり。巨大な影が探検隊を待ち受けていた。",
						"chinese": "走廊尽头。一个巨大的身影正等待着探险队。",
						"french": "Le bout du couloir. Une ombre massive attendait l'expédition.",
						"spanish": "El fin del corredor. Una sombra gigantesca esperaba a la expedición.",
						"vietnamese": "Cuối hành lang. Một bóng đen khổng lồ đang đợi đoàn thám hiểm.",
						"thai": "สุดทางเดิน. เงายักษ์กำลังรอคอยคณะสำรวจอยู่",
						"hindi": "गलियारे का अंत। एक विशाल छाया अभियान दल का इंतजार कर रही थी।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히…! 나의 얼음 왕국에 발을 들이다니!",
						"english": "How dare you…! Step into my Ice Kingdom!",
						"japanese": "よくも…！私の氷の王国に足を踏み入れるとは！",
						"chinese": "你竟敢…！踏入我的冰雪王国！",
						"french": "Comment osez-vous… ! Mettre un pied dans mon Royaume de Glace !",
						"spanish": "¡Cómo osas…! ¡Poner un pie en mi Reino de Hielo!",
						"vietnamese": "Ngươi dám…! Đặt chân vào Vương quốc Băng của ta!",
						"thai": "แกกล้าดียังไง…! มาเหยียบย่างในอาณาจักรน้ำแข็งของข้า!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई…! मेरे बर्फीले राज्य में कदम रखने की!"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "얼음 왕국? 그냥 허세 왕국 아니야?",
						"english": "Ice Kingdom? Isn't it just a Kingdom of Bluster?",
						"japanese": "氷の王国？ただの虚勢王国じゃないの？",
						"chinese": "冰雪王国？不就是个虚张声势的王国吗？",
						"french": "Royaume de Glace ? Plutôt un Royaume de M'as-tu-vu, non ?",
						"spanish": "¿Reino de Hielo? ¿No será más bien un Reino de Fanfarronería?",
						"vietnamese": "Vương quốc Băng? Chẳng phải chỉ là Vương quốc khoác lác thôi sao?",
						"thai": "อาณาจักรน้ำแข็ง? ไม่ใช่อาณาจักรโอ้อวดหรอกเหรอ?",
						"hindi": "बर्फीला राज्य? क्या यह सिर्फ एक डींग हाँकने वाला राज्य नहीं है?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "조용히 해라! 나의 위엄 앞에 무릎 꿇어라! 그렇지 않으면…!",
						"english": "Silence! Kneel before my majesty! Or else…!",
						"japanese": "黙れ！我が威厳の前にひざまずけ！さもなくば…！",
						"chinese": "闭嘴！跪倒在我的威严之下！否则…！",
						"french": "Silence ! Agenouillez-vous devant ma majesté ! Ou sinon… !",
						"spanish": "¡Silencio! ¡Arrodíllate ante mi majestad! ¡De lo contrario…!",
						"vietnamese": "Im đi! Quỳ xuống trước uy nghiêm của ta! Bằng không…!",
						"thai": "เงียบซะ! คุกเข่าลงต่อหน้าความยิ่งใหญ่ของข้า! ไม่อย่างนั้น…!",
						"hindi": "चुप रहो! मेरी महिमा के सामने घुटने टेको! वरना…!"
					},
					"emotion": "angry"
				},
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "기록합니다. 그의 목소리가 떨리네요. 위엄의 가면이 완전히 부서질 순간입니다.",
						"english": "Recording. His voice is trembling. The mask of majesty is about to shatter completely.",
						"japanese": "記録します。彼の声が震えています。威厳の仮面が完全に砕け散る瞬間です。",
						"chinese": "记录。他的声音在颤抖。威严的面具即将彻底破碎。",
						"french": "Enregistrement. Sa voix tremble. Le masque de la majesté est sur le point de se briser complètement.",
						"spanish": "Registrando. Su voz tiembla. La máscara de majestad está a punto de romperse por completo.",
						"vietnamese": "Ghi lại. Giọng hắn đang run rẩy. Chiếc mặt nạ uy nghiêm sắp vỡ tan hoàn toàn.",
						"thai": "บันทึก. เสียงของเขาสั่นเครือ หน้ากากแห่งความยิ่งใหญ่กำลังจะแตกสลายโดยสมบูรณ์",
						"hindi": "रिकॉर्ड कर रहा हूँ। उसकी आवाज़ काँप रही है। महिमा का मुखौटा पूरी तरह से टूटने वाला है।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 탐험대를 집어삼켰다.",
						"english": "A colossal shadow devoured the expedition.",
						"japanese": "巨大な影が探検隊を飲み込んだ。",
						"chinese": "巨大的阴影吞噬了探险队。",
						"french": "Une ombre colossale a dévoré l'expédition.",
						"spanish": "Una sombra colosal devoró a la expedición.",
						"vietnamese": "Bóng tối khổng lồ đã nuốt chửng đoàn thám hiểm.",
						"thai": "เงาขนาดยักษ์กลืนกินคณะสำรวจ",
						"hindi": "एक विशालकाय छाया ने अभियान दल को निगल लिया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들… 나의 위엄은… 영원하다!",
						"english": "Insolent wretches... My majesty... is eternal!",
						"japanese": "取るに足らぬ者たち… 我が威厳は… 永遠なり！",
						"chinese": "卑微之物……我的威严……永恒不朽！",
						"french": "Insolents vermines... Ma majesté... est éternelle !",
						"spanish": "Insolentes criaturas... ¡Mi majestad... es eterna!",
						"vietnamese": "Những kẻ hèn mọn... Uy nghiêm của ta... là vĩnh cửu!",
						"thai": "พวกไร้ค่า... ศักดิ์ศรีของข้า... เป็นนิรันดร์!",
						"hindi": "तुच्छ प्राणी... मेरी महिमा... अमर है!"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "젠장… 저 허세를 반드시 깨부술 거야!",
						"english": "Blast it... I'll shatter that arrogance!",
						"japanese": "ちくしょう… あの虚勢を必ず打ち砕いてやる！",
						"chinese": "该死……我一定要打破那份虚张声势！",
						"french": "Fichtre... Je briserai cette arrogance !",
						"spanish": "¡Maldita sea... Aplastaré esa fanfarronería!",
						"vietnamese": "Chết tiệt... Ta nhất định sẽ phá tan sự ngạo mạn đó!",
						"thai": "ให้ตายสิ... ข้าจะทำลายความโอ้อวดนั่นให้ได้!",
						"hindi": "धिक्कार है... मैं उस दिखावे को ज़रूर तोड़ दूँगा!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"차가운 얼음 회랑. 왕좌로 향하는 길은 경고로 가득했다.",
			"무릎 꿇으라는 팻말들. 그러나 그 문구들은 점점 솔직해졌다.",
			"위엄의 가면 뒤로 어설픔이 새어 나오기 시작했다.",
			"과연 이 어설픈 왕은, 무엇을 감추고 있는 걸까?"
		],
		"english": [
			"A cold, icy corridor. The path to the throne was filled with warnings.",
			"Signs demanding subservience. But their messages grew increasingly candid.",
			"Behind the mask of dignity, awkwardness began to seep through.",
			"What could this clumsy king truly be hiding?"
		],
		"japanese": [
			"冷たい氷の回廊。玉座への道は警告に満ちていた。",
			"ひざまずけという立て札。しかし、その文言は次第に率直になっていった。",
			"威厳の仮面の後ろから、ぎこちなさが漏れ始めた。",
			"果たしてこの不器用な王は、何を隠しているのだろうか？"
		],
		"chinese": [
			"冰冷的冰廊。通往王座的道路充满了警告。",
			"要求下跪的告示。但文字却越来越直白。",
			"在威严的面具背后，笨拙开始显露。",
			"这个笨拙的国王，到底在隐藏什么？"
		],
		"french": [
			"Un froid corridor de glace. Le chemin vers le trône était rempli d'avertissements.",
			"Des panneaux exigeant de s'agenouiller. Mais leurs messages devenaient de plus en plus directs.",
			"Derrière le masque de dignité, la maladresse commençait à transparaître.",
			"Que peut bien cacher ce roi maladroit ?"
		],
		"spanish": [
			"Un frío corredor de hielo. El camino al trono estaba lleno de advertencias.",
			"Carteles que exigían arrodillarse. Pero sus mensajes se volvían cada vez más sinceros.",
			"Detrás de la máscara de dignidad, la torpeza comenzaba a filtrarse.",
			"¿Qué podría estar ocultando realmente este torpe rey?"
		],
		"vietnamese": [
			"Hành lang băng giá lạnh lẽo. Con đường đến ngai vàng tràn ngập những lời cảnh báo.",
			"Những tấm biển yêu cầu quỳ gối. Nhưng những dòng chữ ấy dần trở nên thẳng thắn hơn.",
			"Đằng sau lớp mặt nạ uy nghiêm, sự vụng về bắt đầu lộ rõ.",
			"Liệu vị vua vụng về này đang che giấu điều gì?"
		],
		"thai": [
			"ทางเดินน้ำแข็งอันหนาวเหน็บ เส้นทางสู่บัลลังก์เต็มไปด้วยคำเตือน",
			"ป้ายที่สั่งให้คุกเข่า แต่ข้อความบนป้ายกลับเริ่มเปิดเผยมากขึ้น",
			"เบื้องหลังหน้ากากแห่งศักดิ์ศรี ความเก้อเขินเริ่มเล็ดลอดออกมา",
			"แท้จริงแล้ว ราชาที่ดูเก้อเขินนี้กำลังซ่อนอะไรอยู่?"
		],
		"hindi": [
			"एक ठंडा, बर्फीला गलियारा। सिंहासन तक का रास्ता चेतावनियों से भरा था।",
			"घुटने टेकने की मांग वाले संकेत। लेकिन उनके संदेश उत्तरोत्तर स्पष्ट होते गए।",
			"गरिमा के मुखौटे के पीछे, अजीबोगरीबपन रिसना शुरू हो गया।",
			"आखिर यह अनाड़ी राजा क्या छिपा रहा है?"
		]
	}
} as const;
