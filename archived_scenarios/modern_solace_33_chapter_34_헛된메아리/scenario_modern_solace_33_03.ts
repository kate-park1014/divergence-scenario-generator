export const scenario_modern_solace_33_03 = {
	"scenario_id": "modern_solace_33_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
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
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시 전광판에 알 수 없는 카운트다운이 시작된다.",
						"english": "An unknown countdown begins on the city's billboards.",
						"japanese": "都市の電光掲示板に、未知のカウントダウンが始まる。",
						"chinese": "城市广告牌上开始了未知的倒计时。",
						"french": "Un compte à rebours inconnu commence sur les panneaux d'affichage de la ville.",
						"spanish": "Una cuenta atrás desconocida empieza en los paneles luminosos de la ciudad.",
						"vietnamese": "Một cuộc đếm ngược không rõ nguồn gốc bắt đầu trên các bảng quảng cáo của thành phố.",
						"thai": "การนับถอยหลังที่ไม่รู้จักได้เริ่มต้นขึ้นบนป้ายโฆษณาในเมือง",
						"hindi": "शहर के बिलबोर्ड पर एक अज्ञात उलटी गिनती शुरू हो जाती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "저건 또 뭐야?",
						"english": "What's that now?",
						"japanese": "あれは一体何だ？",
						"chinese": "那又是什么？",
						"french": "Qu'est-ce que c'est encore ?",
						"spanish": "¿Qué es eso ahora?",
						"vietnamese": "Cái gì nữa vậy?",
						"thai": "นั่นมันอะไรอีกน่ะ?",
						"hindi": "वह फिर क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 숫자들이 뭔지 알아냈어. 과거의 '파동'이야.",
						"english": "I figured out what these numbers are. They're 'waves' from the past.",
						"japanese": "この数字が何を意味するか分かった。過去の「波動」だ。",
						"chinese": "我明白了这些数字是什么。它们是过去的“波动”。",
						"french": "J'ai découvert ce que sont ces nombres. Ce sont des \"ondes\" du passé.",
						"spanish": "Descubrí qué son estos números. Son \"ondas\" del pasado.",
						"vietnamese": "Tôi đã tìm ra những con số này là gì. Chúng là \"sóng\" từ quá khứ.",
						"thai": "ฉันรู้แล้วว่าตัวเลขพวกนี้คืออะไร มันคือ 'คลื่น' จากอดีต",
						"hindi": "मुझे पता चल गया कि ये संख्याएँ क्या हैं। ये अतीत की 'तरंगें' हैं।"
					},
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "시간을 왜곡시키고 있어.",
						"english": "They're distorting time.",
						"japanese": "時間を歪めている。",
						"chinese": "它们正在扭曲时间。",
						"french": "Elles déforment le temps.",
						"spanish": "Están distorsionando el tiempo.",
						"vietnamese": "Chúng đang làm biến dạng thời gian.",
						"thai": "พวกมันกำลังบิดเบือนเวลา",
						"hindi": "वे समय को विकृत कर रहे हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "lin",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 기록들을 봐. 솔라스와 똑같은 패턴이야.",
						"english": "Look at these records. It's the same pattern as Solas.",
						"japanese": "この記録を見てくれ。ソラスと全く同じパターンだ。",
						"chinese": "看看这些记录。和索拉斯的模式一模一样。",
						"french": "Regardez ces enregistrements. C'est le même schéma que Solas.",
						"spanish": "Mira estos registros. Es el mismo patrón que Solas.",
						"vietnamese": "Nhìn những ghi chép này đi. Nó có cùng một kiểu mẫu với Solas.",
						"thai": "ดูบันทึกพวกนี้สิ มันเป็นรูปแบบเดียวกับโซลัสเลย",
						"hindi": "इन रिकॉर्ड्स को देखो। यह सोलास के समान पैटर्न है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼 이것도 솔라스 현상이라고?",
						"english": "So this is a Solas phenomenon too?",
						"japanese": "じゃあ、これもソラス現象なのか？",
						"chinese": "那么这也是索拉斯现象吗？",
						"french": "Alors, c'est aussi un phénomène Solas ?",
						"spanish": "¿Entonces esto también es un fenómeno Solas?",
						"vietnamese": "Vậy đây cũng là hiện tượng Solas sao?",
						"thai": "งั้นนี่ก็เป็นปรากฏการณ์โซลัสเหมือนกันเหรอ?",
						"hindi": "तो क्या यह भी एक सोलास घटना है?"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "과거의 강력한 감정적 잔류 파동. 도시의 디지털 망을 통해… 현실로 흘러들어오고 있어.",
						"english": "Powerful emotional residual waves from the past. They're flowing into reality… through the city's digital network.",
						"japanese": "過去の強力な感情の残滓が波となって。都市のデジタル網を通じて…現実へと流れ込んでいる。",
						"chinese": "过去强大的情感残余波动。正通过城市的数字网络……涌入现实。",
						"french": "De puissantes ondes émotionnelles résiduelles du passé. Elles se déversent dans la réalité… via le réseau numérique de la ville.",
						"spanish": "Poderosas ondas emocionales residuales del pasado. Están fluyendo hacia la realidad… a través de la red digital de la ciudad.",
						"vietnamese": "Những làn sóng cảm xúc mạnh mẽ còn sót lại từ quá khứ. Chúng đang tràn vào thực tại… qua mạng lưới kỹ thuật số của thành phố.",
						"thai": "คลื่นอารมณ์ตกค้างอันทรงพลังจากอดีต กำลังไหลบ่าเข้าสู่ความเป็นจริง…ผ่านเครือข่ายดิจิทัลของเมือง",
						"hindi": "अतीत से शक्तिशाली भावनात्मक अवशिष्ट तरंगें। वे शहर के डिजिटल नेटवर्क के माध्यम से… वास्तविकता में बह रही हैं।"
					}
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "스크린 속 흑백 사진 조각들이 섬광처럼 스쳐 지나갔다.",
						"english": "Fragments of black and white photos on the screen flashed by.",
						"japanese": "スクリーンの中の白黒写真の断片が閃光のように過ぎ去った。",
						"chinese": "屏幕中黑白照片的碎片如闪光般一闪而过。",
						"french": "Des fragments de photos en noir et blanc sur l'écran ont défilé comme un éclair.",
						"spanish": "Fragmentos de fotos en blanco y negro pasaron como un destello en la pantalla.",
						"vietnamese": "Những mảnh ảnh đen trắng trên màn hình vụt qua như chớp.",
						"thai": "ชิ้นส่วนภาพถ่ายขาวดำบนหน้าจอฉายผ่านไปราวกับแสงวาบ",
						"hindi": "स्क्रीन पर ब्लैक एंड व्हाइट तस्वीरों के टुकड़े चमक की तरह गुजरे।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "lin",
					"action": "enter",
					"spot": [
						5,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아니, 이게 전부가 아니야…",
						"english": "…No, this isn't all…",
						"japanese": "…いや、これだけじゃない…",
						"chinese": "……不，这并非全部……",
						"french": "…Non, ce n'est pas tout…",
						"spanish": "…No, esto no es todo…",
						"vietnamese": "…Không, đây không phải là tất cả…",
						"thai": "…ไม่สิ นี่ไม่ใช่ทั้งหมด…",
						"hindi": "…नहीं, यह सब नहीं है…"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭐가 더 있다는 거야?",
						"english": "What else is there?",
						"japanese": "他に何があるって言うんだ？",
						"chinese": "还有什么？",
						"french": "Qu'y a-t-il d'autre ?",
						"spanish": "¿Qué más hay?",
						"vietnamese": "Còn gì nữa?",
						"thai": "มีอะไรอีก?",
						"hindi": "और क्या है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "내가 찾던 '잊혀진 사건'… 그게 파동의 근원이었어.",
						"english": "The 'forgotten incident' I was looking for… that was the source of the waves.",
						"japanese": "私が探していた「忘れられた事件」…それが波の根源だった。",
						"chinese": "我一直在寻找的“被遗忘的事件”……那就是波动的根源。",
						"french": "L'« incident oublié » que je cherchais… c'était la source des ondes.",
						"spanish": "El 'incidente olvidado' que buscaba… esa era la fuente de las ondas.",
						"vietnamese": "'Sự kiện bị lãng quên' mà tôi tìm kiếm… đó chính là nguồn gốc của những làn sóng.",
						"thai": "'เหตุการณ์ที่ถูกลืม' ที่ฉันตามหา…นั่นคือต้นกำเนิดของคลื่น",
						"hindi": "जिस 'भूली हुई घटना' को मैं ढूंढ रहा था… वही तरंगों का स्रोत थी।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "우리 모두 그 비극의 일부였던 거야…!",
						"english": "We were all part of that tragedy…!",
						"japanese": "私たち全員が、あの悲劇の一部だったんだ…！",
						"chinese": "我们都曾是那场悲剧的一部分……！",
						"french": "Nous faisions tous partie de cette tragédie…!",
						"spanish": "¡Todos fuimos parte de esa tragedia…!",
						"vietnamese": "Tất cả chúng ta đều là một phần của bi kịch đó…!",
						"thai": "พวกเราทุกคนเป็นส่วนหนึ่งของโศกนาฏกรรมนั้น…!",
						"hindi": "हम सभी उस त्रासदी का हिस्सा थे…!"
					},
					"speaker": "lin"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…비극?",
						"english": "…Tragedy?",
						"japanese": "…悲劇？",
						"chinese": "……悲剧？",
						"french": "…Une tragédie ?",
						"spanish": "¿…Tragedia?",
						"vietnamese": "…Bi kịch?",
						"thai": "…โศกนาฏกรรม?",
						"hindi": "…त्रासदी?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "밤거리의 사람들이 알 수 없는 슬픔에 잠겼다.",
						"english": "People on the night streets were overcome by an unknown sadness.",
						"japanese": "夜の街の人々は、原因不明の悲しみに沈んでいた。",
						"chinese": "夜幕下的街上，人们陷入了莫名的悲伤。",
						"french": "Les gens dans les rues nocturnes étaient plongés dans une tristesse inconnue.",
						"spanish": "La gente en las calles nocturnas se sumió en una tristeza desconocida.",
						"vietnamese": "Người người trên phố đêm chìm trong nỗi buồn không tên.",
						"thai": "ผู้คนบนถนนยามค่ำคืนจมดิ่งในความเศร้าที่ไม่รู้สาเหตุ",
						"hindi": "रात की सड़कों पर लोग एक अज्ञात उदासी में डूब गए।"
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
						5,
						2
					],
					"action": "enter",
					"speaker": "lin",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈출 방법은?",
						"english": "How can we stop it?",
						"japanese": "止める方法は？",
						"chinese": "如何阻止？",
						"french": "Comment l'arrêter ?",
						"spanish": "¿Cómo detenerlo?",
						"vietnamese": "Cách nào để ngăn chặn?",
						"thai": "จะหยุดมันได้อย่างไร?",
						"hindi": "इसे रोकने का तरीका क्या है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "모르겠어… 파동은 점점 강해지고 있어.",
						"english": "I don't know… The waves are getting stronger.",
						"japanese": "わからない…波はどんどん強くなっている。",
						"chinese": "我不知道……波动越来越强了。",
						"french": "Je ne sais pas… Les ondes deviennent de plus en plus fortes.",
						"spanish": "No lo sé… Las ondas se están haciendo más fuertes.",
						"vietnamese": "Tôi không biết… Làn sóng đang mạnh dần lên.",
						"thai": "ฉันไม่รู้… คลื่นกำลังแรงขึ้นเรื่อยๆ",
						"hindi": "मुझे नहीं पता… तरंगें और तेज़ हो रही हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 존재했던 '시간' 자체를 왜곡시키는 것 같아.",
						"english": "It feels like it's distorting the very 'time' we existed in.",
						"japanese": "私たちが存在した「時間」そのものを歪めているようです。",
						"chinese": "好像在扭曲我们存在过的“时间”本身。",
						"french": "On dirait que ça déforme le 'temps' même de notre existence.",
						"spanish": "Parece que distorsiona el 'tiempo' mismo en el que existimos.",
						"vietnamese": "Có vẻ như nó đang bóp méo chính 'thời gian' mà chúng ta đã tồn tại.",
						"thai": "ดูเหมือนกำลังบิดเบือน 'เวลา' ที่เราเคยมีอยู่",
						"hindi": "ऐसा लगता है कि यह हमारे अस्तित्व के 'समय' को ही विकृत कर रहा है।"
					},
					"speaker": "lin",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가… 사라진다고?",
						"english": "We're... disappearing?",
						"japanese": "私たちが…消えるって？",
						"chinese": "我们…要消失了？",
						"french": "On... disparaît ?",
						"spanish": "¿Nos... estamos desvaneciendo?",
						"vietnamese": "Chúng ta… sẽ biến mất sao?",
						"thai": "พวกเรา... กำลังจะหายไป?",
						"hindi": "हम... गायब हो रहे हैं?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주변 풍경이 한순간 흐릿하게 일그러졌다.",
						"english": "The surrounding scenery blurred and distorted for a moment.",
						"japanese": "周囲の風景が一瞬、ぼやけて歪んだ。",
						"chinese": "周围的景象瞬间变得模糊扭曲。",
						"french": "Le paysage environnant s'est flouté et déformé un instant.",
						"spanish": "El paisaje circundante se difuminó y distorsionó por un instante.",
						"vietnamese": "Cảnh vật xung quanh chợt mờ ảo và méo mó.",
						"thai": "ทิวทัศน์โดยรอบพร่าเลือนและบิดเบี้ยวไปชั่วขณะ",
						"hindi": "आसपास का नज़ारा एक पल के लिए धुंधला और विकृत हो गया।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다.",
						"english": "A colossal shadow blocked the way.",
						"japanese": "巨大な影が道を阻んだ。",
						"chinese": "巨大的黑影挡住了去路。",
						"french": "Une ombre colossale bloqua le chemin.",
						"spanish": "Una sombra colosal bloqueó el paso.",
						"vietnamese": "Một bóng đen khổng lồ chặn đường.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่เบื้องหน้า",
						"hindi": "एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "결국 여기까지 왔나. 무의미한 저항을.",
						"english": "So you've come this far. A meaningless struggle.",
						"japanese": "結局ここまで来たか。無意味な抵抗を。",
						"chinese": "终究还是到这里了。无谓的抵抗。",
						"french": "Tu es finalement arrivé jusqu'ici. Une lutte futile.",
						"spanish": "Así que has llegado hasta aquí. Una lucha sin sentido.",
						"vietnamese": "Cuối cùng cũng đến đây. Một sự phản kháng vô nghĩa.",
						"thai": "ในที่สุดก็มาถึงที่นี่ การต่อต้านที่ไร้ความหมาย",
						"hindi": "तो तुम यहीं तक आ पाए। एक निरर्थक संघर्ष।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 거냐?",
						"english": "Did you orchestrate all of this?",
						"japanese": "お前がこの全てを企んだのか？",
						"chinese": "是你策划了这一切吗？",
						"french": "Est-ce toi qui as orchestré tout ça ?",
						"spanish": "¿Fuiste tú quien orquestó todo esto?",
						"vietnamese": "Tất cả là do ngươi sắp đặt sao?",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี้เหรอ?",
						"hindi": "क्या यह सब तुम्हारी चाल थी?"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "시간은 역류한다. 모든 것은 사라질 뿐.",
						"english": "Time flows backward. All will simply vanish.",
						"japanese": "時間は逆流する。全ては消え去るのみ。",
						"chinese": "时间逆流。万物终将消逝。",
						"french": "Le temps s'inverse. Tout va simplement disparaître.",
						"spanish": "El tiempo retrocede. Todo simplemente desaparecerá.",
						"vietnamese": "Thời gian đảo ngược. Mọi thứ sẽ tan biến.",
						"thai": "กาลเวลาจะไหลย้อนกลับ ทุกสรรพสิ่งจะเลือนหายไป",
						"hindi": "समय पीछे लौटता है। सब कुछ बस गायब हो जाएगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "안 돼!",
						"english": "No!",
						"japanese": "だめだ！",
						"chinese": "不要！",
						"french": "Non !",
						"spanish": "¡No!",
						"vietnamese": "Không!",
						"thai": "ไม่นะ!",
						"hindi": "नहीं!"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 사라졌다.",
						"english": "The colossal shadow vanished.",
						"japanese": "巨大な影が消え去った。",
						"chinese": "巨大的黑影消失了。",
						"french": "L'ombre colossale disparut.",
						"spanish": "La sombra colosal desapareció.",
						"vietnamese": "Bóng đen khổng lồ biến mất.",
						"thai": "เงาขนาดมหึมาได้หายไปแล้ว",
						"hindi": "विशाल छाया गायब हो गई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어. 너희도 곧… 역류할 거야.",
						"english": "...It's not over yet. You too will soon... reverse flow.",
						"japanese": "…まだ終わっていない。お前たちもじきに…逆流するだろう。",
						"chinese": "……还没结束。你们也很快会……逆流。",
						"french": "...Ce n'est pas encore fini. Vous aussi, bientôt... vous refluerez.",
						"spanish": "...Aún no ha terminado. Vosotros también pronto... retrocederéis.",
						"vietnamese": "…Chưa kết thúc đâu. Các ngươi cũng sẽ sớm… đảo ngược thôi.",
						"thai": "...ยังไม่จบหรอก พวกแกก็จะต้อง... ไหลย้อนกลับเช่นกัน",
						"hindi": "...अभी खत्म नहीं हुआ है। तुम भी जल्द ही... विपरीत दिशा में बहोगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…무슨 의미지?",
						"english": "...What does that mean?",
						"japanese": "…どういう意味だ？",
						"chinese": "……什么意思？",
						"french": "...Qu'est-ce que ça veut dire ?",
						"spanish": "...¿Qué significa?",
						"vietnamese": "...Nghĩa là gì?",
						"thai": "...หมายความว่าอะไร?",
						"hindi": "...इसका क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만 카운트다운은 멈추지 않았다. 시간은 여전히 흐릿했다.",
						"english": "But the countdown didn't stop. Time remained blurred.",
						"japanese": "しかし、カウントダウンは止まらなかった。時間は依然として曖昧だった。",
						"chinese": "但倒计时并未停止。时间依然模糊。",
						"french": "Mais le compte à rebours ne s'est pas arrêté. Le temps restait flou.",
						"spanish": "Pero la cuenta atrás no se detuvo. El tiempo seguía borroso.",
						"vietnamese": "Nhưng đồng hồ đếm ngược không dừng lại. Thời gian vẫn mơ hồ.",
						"thai": "แต่การนับถอยหลังไม่หยุด เวลาคงยังพร่าเลือนอยู่",
						"hindi": "लेकिन उलटी गिनती नहीं रुकी। समय अब भी धुंधला था।"
					},
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "알 수 없는 존재의 힘에 휩쓸렸다.",
						"english": "Swept away by the power of an unknown entity.",
						"japanese": "未知の存在の力に巻き込まれた。",
						"chinese": "被未知存在的力量吞噬了。",
						"french": "Emporté par le pouvoir d'une entité inconnue.",
						"spanish": "Arrastrado por el poder de una entidad desconocida.",
						"vietnamese": "Bị cuốn trôi bởi sức mạnh của một thực thể không xác định.",
						"thai": "ถูกกวาดล้างด้วยพลังของสิ่งมีชีวิตที่ไม่รู้จัก",
						"hindi": "अज्ञात सत्ता की शक्ति से बह गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "헛된 희망. 시간은 너희를 지우고 있다.",
						"english": "Vain hope. Time is erasing you.",
						"japanese": "無駄な希望。時間は君たちを消し去っている。",
						"chinese": "徒劳的希望。时间正在抹去你们。",
						"french": "Espoir vain. Le temps vous efface.",
						"spanish": "Vana esperanza. El tiempo os está borrando.",
						"vietnamese": "Hy vọng hão huyền. Thời gian đang xóa sổ các ngươi.",
						"thai": "ความหวังที่ไร้ประโยชน์ เวลาจะลบเลือนพวกเจ้า",
						"hindi": "व्यर्थ की आशा। समय तुम्हें मिटा रहा है।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 포기 못 해.",
						"english": "...Can't give up yet.",
						"japanese": "…まだ諦められない。",
						"chinese": "……还不能放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Todavía no puedo rendirme.",
						"vietnamese": "...Chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้",
						"hindi": "...अभी हार नहीं मान सकता।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…어리석군.",
						"english": "...Foolish.",
						"japanese": "…愚かだ。",
						"chinese": "……愚蠢。",
						"french": "...Stupide.",
						"spanish": "...Qué necio.",
						"vietnamese": "...Ngốc nghếch.",
						"thai": "...โง่เขลา",
						"hindi": "...मूर्खतापूर्ण।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"도시의 모든 화면에 숫자가 나타났다.",
			"남은 시간? 알 수 없다.",
			"현실이 흐릿해진다. 시간마저 역류하는 듯.",
			"우린 어디로 가는 걸까."
		],
		"english": [
			"Numbers appeared on all screens in the city.",
			"Time remaining? Unknown.",
			"Reality blurs. Time seems to flow backward.",
			"Where are we going?"
		],
		"japanese": [
			"都市の全ての画面に数字が現れた。",
			"残り時間？不明だ。",
			"現実がぼやけていく。時間さえ逆流しているかのようだ。",
			"私たちはどこへ行くのだろうか。"
		],
		"chinese": [
			"城市的所有屏幕上都出现了数字。",
			"剩余时间？未知。",
			"现实变得模糊。时间似乎在倒流。",
			"我们要去哪里？"
		],
		"french": [
			"Des nombres sont apparus sur tous les écrans de la ville.",
			"Temps restant ? Inconnu.",
			"La réalité se brouille. Le temps semble remonter le cours.",
			"Où allons-nous ?"
		],
		"spanish": [
			"Aparecieron números en todas las pantallas de la ciudad.",
			"¿Tiempo restante? Desconocido.",
			"La realidad se difumina. El tiempo parece retroceder.",
			"¿Adónde vamos?"
		],
		"vietnamese": [
			"Những con số xuất hiện trên tất cả các màn hình trong thành phố.",
			"Thời gian còn lại? Không rõ.",
			"Thực tại mờ dần. Thời gian dường như trôi ngược.",
			"Chúng ta đang đi đâu vậy?"
		],
		"thai": [
			"ตัวเลขปรากฏขึ้นบนหน้าจอทั้งหมดในเมือง",
			"เวลาที่เหลือ? ไม่ทราบ",
			"ความเป็นจริงพร่าเลือน เวลาราวกับไหลย้อนกลับ",
			"เรากำลังจะไปที่ไหนกันนะ?"
		],
		"hindi": [
			"शहर की सभी स्क्रीनों पर संख्याएँ दिखाई दीं।",
			"बचा हुआ समय? अज्ञात।",
			"वास्तविकता धुंधली हो जाती है। समय भी उलटा बहता प्रतीत होता है।",
			"हम कहाँ जा रहे हैं?"
		]
	}
} as const;
