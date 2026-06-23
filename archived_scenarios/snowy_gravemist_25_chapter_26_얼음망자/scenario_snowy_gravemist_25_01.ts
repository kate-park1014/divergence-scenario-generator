export const scenario_snowy_gravemist_25_01 = {
	"scenario_id": "snowy_gravemist_25_01",
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
					"content": {
						"korean": "거대한 얼음 배가 눈보라 속에 정박해 있었다. 죽음의 침묵이 흐른다.",
						"english": "A colossal ice ship was anchored in the blizzard. The silence of death permeated.",
						"japanese": "巨大な氷の船が吹雪の中に停泊していた。死の沈黙が流れる。",
						"chinese": "一艘巨大的冰船停泊在暴风雪中。死亡的寂静弥漫着。",
						"french": "Un colossal navire de glace était ancré dans le blizzard. Le silence de la mort régnait.",
						"spanish": "Un colosal barco de hielo estaba anclado en la ventisca. El silencio de la muerte reinaba.",
						"vietnamese": "Một con tàu băng khổng lồ neo đậu giữa bão tuyết. Sự im lặng chết chóc bao trùm.",
						"thai": "เรือน้ำแข็งขนาดมหึมากำลังจอดทอดสมออยู่ในพายุหิมะ. ความเงียบงันแห่งความตายปกคลุมไปทั่ว.",
						"hindi": "एक विशाल बर्फ़ीला जहाज़ बर्फीले तूफ़ान में लंगर डाले खड़ा था। मौत की खामोशी पसरी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 배가... 그레이브미스트?",
						"english": "This ship... Gravemist?",
						"japanese": "この船が... グレイブミスト？",
						"chinese": "这艘船是... 格雷夫米斯特？",
						"french": "Ce navire... Gravemist ?",
						"spanish": "Este barco... ¿Gravemist?",
						"vietnamese": "Con tàu này... Gravemist?",
						"thai": "เรือลำนี้... เกรฟมิสต์?",
						"hindi": "यह जहाज़... ग्रेवमिस्ट?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오셨군요. 망자들을 위한 의식이 시작될 시간입니다.",
						"english": "You've arrived. It's time for the ritual for the departed to begin.",
						"japanese": "いらっしゃいましたね。亡者たちのための儀式が始まる時間です。",
						"chinese": "您来了。为亡灵举行的仪式该开始了。",
						"french": "Vous êtes arrivé. Il est temps que le rituel pour les défunts commence.",
						"spanish": "Ha llegado. Es hora de que comience el ritual para los difuntos.",
						"vietnamese": "Ngài đã đến. Đã đến lúc nghi thức dành cho những người đã khuất bắt đầu.",
						"thai": "ท่านมาแล้ว. ได้เวลาที่พิธีกรรมสำหรับผู้ล่วงลับจะเริ่มต้นขึ้น.",
						"hindi": "आप आ गए हैं। मृतकों के लिए अनुष्ठान शुरू होने का समय हो गया है।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "의식이라니. 대체 여기서 뭘 하려는 거지?",
						"english": "A ritual? What exactly are you trying to do here?",
						"japanese": "儀式だと。一体ここで何をしようとしている？",
						"chinese": "仪式？你到底想在这里做什么？",
						"french": "Un rituel ? Que comptez-vous faire ici exactement ?",
						"spanish": "¿Un ritual? ¿Qué intentas hacer aquí exactamente?",
						"vietnamese": "Nghi thức ư? Ngươi rốt cuộc định làm gì ở đây?",
						"thai": "พิธีกรรมงั้นหรือ. ท่านกำลังจะทำอะไรที่นี่กันแน่?",
						"hindi": "एक अनुष्ठान? तुम यहाँ क्या करने की कोशिश कर रहे हो?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "그들의 영원한 안식을 위해, 이 배는 잠시 정박합니다.",
						"english": "For their eternal rest, this ship briefly anchors.",
						"japanese": "彼らの永遠の安息のために、この船はしばらく停泊します。",
						"chinese": "为了他们永恒的安息，这艘船会暂时停泊。",
						"french": "Pour leur repos éternel, ce navire s'ancre brièvement.",
						"spanish": "Para su descanso eterno, este barco ancla brevemente.",
						"vietnamese": "Vì sự an nghỉ vĩnh hằng của họ, con tàu này tạm thời neo đậu.",
						"thai": "เพื่อการพักผ่อนนิรันดร์ของพวกเขา, เรือลำนี้จะจอดทอดสมอชั่วคราว.",
						"hindi": "उनके शाश्वत विश्राम के लिए, यह जहाज़ कुछ समय के लिए लंगर डालेगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 벽면에 새겨진 룬들을 보세요. 모두 부서져 있습니다.",
						"english": "Look at the runes carved into this wall. They are all broken.",
						"japanese": "この壁面に刻まれたルーンを見てください。全て壊れています。",
						"chinese": "看看这面墙上刻的符文。它们都碎了。",
						"french": "Regardez les runes gravées sur ce mur. Elles sont toutes brisées.",
						"spanish": "Mira las runas grabadas en esta pared. Todas están rotas.",
						"vietnamese": "Hãy nhìn những ký tự rune được khắc trên bức tường này. Tất cả đều đã vỡ nát.",
						"thai": "ดูอักษรรูนที่แกะสลักบนกำแพงนี้สิ. พวกมันแตกหักทั้งหมด.",
						"hindi": "इस दीवार पर खुदे हुए रून्स को देखो। वे सब टूटे हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "깨진 룬이라... 무슨 의미지?",
						"english": "Broken rune... What does it mean?",
						"japanese": "壊れたルーン…どういう意味だ？",
						"chinese": "破碎的符文... 是什么意思？",
						"french": "Une rune brisée... Qu'est-ce que ça signifie ?",
						"spanish": "Una runa rota... ¿Qué significa?",
						"vietnamese": "Một rune đã vỡ... Nó có ý nghĩa gì?",
						"thai": "รูนที่แตกสลาย... หมายความว่าอะไร?",
						"hindi": "टूटा हुआ रूण... इसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "지켜지지 못한 맹세, 파괴된 약속들. 이 배의 역사는 비극으로 점철되어 있죠.",
						"english": "Unkept vows, shattered promises. This ship's history is steeped in tragedy.",
						"japanese": "守られなかった誓い、破られた約束。この船の歴史は悲劇に満ちています。",
						"chinese": "未兑现的誓言，被打破的承诺。这艘船的历史充满了悲剧。",
						"french": "Serments non tenus, promesses brisées. L'histoire de ce navire est parsemée de tragédie.",
						"spanish": "Votos incumplidos, promesas rotas. La historia de este barco está plagada de tragedia.",
						"vietnamese": "Lời thề không được giữ, những lời hứa tan vỡ. Lịch sử con tàu này đẫm máu bi kịch.",
						"thai": "คำสาบานที่มิอาจรักษาไว้ได้, คำสัญญาที่พังทลาย. ประวัติศาสตร์ของเรือลำนี้เต็มไปด้วยโศกนาฏกรรม.",
						"hindi": "अधूरे वादे, टूटे हुए वचन। इस जहाज़ का इतिहास त्रासदी से भरा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "맹세가 깨지면... 어떻게 되는 건데?",
						"english": "If a vow is broken... what happens then?",
						"japanese": "誓いが破られたら…どうなるんだ？",
						"chinese": "如果誓言被打破... 会怎么样？",
						"french": "Si un serment est brisé... que se passe-t-il ?",
						"spanish": "Si un voto se rompe... ¿qué ocurre?",
						"vietnamese": "Nếu một lời thề bị phá vỡ... thì sao?",
						"thai": "ถ้าคำสาบานถูกหัก... จะเกิดอะไรขึ้น?",
						"hindi": "अगर कोई शपथ टूटती है... तो क्या होता है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "영혼은 묶입니다. 영원히.",
						"english": "Souls are bound. Forever.",
						"japanese": "魂は縛られます。永遠に。",
						"chinese": "灵魂被束缚。永远。",
						"french": "Les âmes sont liées. Pour toujours.",
						"spanish": "Las almas quedan atadas. Para siempre.",
						"vietnamese": "Các linh hồn bị ràng buộc. Mãi mãi.",
						"thai": "วิญญาณจะถูกผูกมัด. ชั่วนิรันดร์.",
						"hindi": "आत्माएं बंध जाती हैं। हमेशा के लिए।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 눈보라 속에서 애잔한 멜로디가 들려왔다.",
						"english": "Amidst the cold blizzard, a mournful melody echoed.",
						"japanese": "冷たい吹雪の中、哀愁を帯びたメロディーが聞こえてきた。",
						"chinese": "在寒冷的暴风雪中，传来一阵哀怨的旋律。",
						"french": "Au milieu du blizzard glacial, une mélodie mélancolique résonnait.",
						"spanish": "Entre la fría ventisca, una melancólica melodía resonó.",
						"vietnamese": "Giữa bão tuyết lạnh giá, một giai điệu buồn vang vọng.",
						"thai": "ท่ามกลางพายุหิมะอันหนาวเหน็บ, ท่วงทำนองอันโศกเศร้าแว่วมา.",
						"hindi": "ठंडी बर्फीली आंधी के बीच, एक उदास धुन गूंज उठी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "들리십니까? 망자들의 노래입니다. 끝없는 여정을 노래하죠.",
						"english": "Do you hear it? It's the song of the dead. Singing of an endless journey.",
						"japanese": "聞こえますか？亡者たちの歌です。終わりのない旅を歌っています。",
						"chinese": "你听到了吗？那是亡者的歌。歌颂着无尽的旅程。",
						"french": "L'entendez-vous ? C'est le chant des morts. Chantant un voyage sans fin.",
						"spanish": "¿Lo oyes? Es el canto de los muertos. Cantando un viaje sin fin.",
						"vietnamese": "Anh có nghe thấy không? Đó là bài ca của những người đã khuất. Hát về một hành trình bất tận.",
						"thai": "ได้ยินไหม? นี่คือเพลงของผู้ตาย. ขับขานเรื่องราวการเดินทางอันไม่สิ้นสุด.",
						"hindi": "क्या आपको सुनाई दे रहा है? यह मृतकों का गीत है। एक अंतहीन यात्रा का गीत।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "노래가 왜 이렇게 슬프지... 안식을 찾지 못했다는 건가.",
						"english": "Why is the song so sad...? Does it mean they haven't found peace?",
						"japanese": "なぜこんなに悲しい歌なんだ…安息を見つけられなかったのか。",
						"chinese": "为什么这首歌如此悲伤... 难道他们没有找到安息吗？",
						"french": "Pourquoi ce chant est-il si triste... Cela signifie-t-il qu'ils n'ont pas trouvé la paix ?",
						"spanish": "¿Por qué es tan triste la canción...? ¿Significa que no han encontrado la paz?",
						"vietnamese": "Sao bài hát lại buồn thế này... Có phải họ vẫn chưa tìm thấy sự an nghỉ không?",
						"thai": "ทำไมเพลงถึงเศร้าขนาดนี้... หมายความว่าพวกเขาไม่ได้พักผ่อนอย่างสงบหรือไง?",
						"hindi": "यह गीत इतना दुखद क्यों है...? क्या इसका मतलब है कि उन्हें शांति नहीं मिली?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이곳에서는 그 누구도 정착할 수 없습니다. 저주가 끊이지 않으니까요.",
						"english": "No one can settle here. For the curse never ceases.",
						"japanese": "ここでは誰も安住できません。呪いが絶えることがないからです。",
						"chinese": "在这里无人能定居。因为诅咒永无止境。",
						"french": "Personne ne peut s'établir ici. Car la malédiction ne cesse jamais.",
						"spanish": "Nadie puede establecerse aquí. Porque la maldición nunca cesa.",
						"vietnamese": "Không ai có thể định cư ở đây. Vì lời nguyền không bao giờ dứt.",
						"thai": "ที่นี่ไม่มีใครสามารถตั้งรกรากได้. เพราะคำสาปไม่เคยจางหายไป.",
						"hindi": "यहां कोई नहीं बस सकता। क्योंकि श्राप कभी खत्म नहीं होता।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "낡은 일지가 발에 밟혔다. 고통이 느껴지는 글씨체였다.",
						"english": "An old journal was underfoot. The handwriting spoke of pain.",
						"japanese": "古い日誌が足元に転がっていた。苦痛がにじみ出るような筆跡だった。",
						"chinese": "一本旧日志被踩在脚下。那笔迹透露着痛苦。",
						"french": "Un vieux journal était sous mes pieds. L'écriture laissait transparaître la douleur.",
						"spanish": "Un viejo diario estaba bajo mis pies. La letra transmitía dolor.",
						"vietnamese": "Một cuốn nhật ký cũ bị đạp dưới chân. Nét chữ đầy nỗi đau.",
						"thai": "สมุดบันทึกเก่าๆ เล่มหนึ่งถูกเหยียบอยู่ใต้เท้า. ลายมือแสดงถึงความเจ็บปวด.",
						"hindi": "एक पुरानी डायरी पैरों के नीचे पड़ी थी। लिखावट में दर्द झलक रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "선장의 기록입니다. '잃어버린 명예', '감당할 수 없는 죄책감'...",
						"english": "It's the captain's log. \"Lost honor,\" \"unbearable guilt\"...",
						"japanese": "船長の記録です。「失われた名誉」、「耐えがたい罪悪感」…",
						"chinese": "这是船长的日志。“失去的荣誉”，“无法承受的罪恶感”...",
						"french": "C'est le journal du capitaine. \"Honneur perdu\", \"culpabilité insupportable\"...",
						"spanish": "Es el diario del capitán. \"Honor perdido\", \"culpa insoportable\"...",
						"vietnamese": "Đó là nhật ký của thuyền trưởng. \"Danh dự đã mất\", \"tội lỗi không thể chịu đựng được\"...",
						"thai": "มันคือบันทึกของกัปตัน. \"เกียรติยศที่สูญหาย\", \"ความรู้สึกผิดที่ไม่อาจทานทนได้\"...",
						"hindi": "यह कप्तान का लॉग है। \"खोया हुआ सम्मान\", \"असहनीय अपराधबोध\"..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "죄책감? 이 배에는 무슨 비밀이 있는 거지?",
						"english": "Guilt? What secret does this ship hold?",
						"japanese": "罪悪感？この船にはどんな秘密があるんだ？",
						"chinese": "罪恶感？这艘船上有什么秘密？",
						"french": "Culpabilité ? Quel secret cache ce navire ?",
						"spanish": "¿Culpa? ¿Qué secreto esconde este barco?",
						"vietnamese": "Cảm giác tội lỗi? Con tàu này che giấu bí mật gì?",
						"thai": "ความรู้สึกผิด? เรือลำนี้มีความลับอะไรกันแน่?",
						"hindi": "अपराधबोध? इस जहाज में क्या रहस्य है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "모든 영혼을 이 배에 묶어둔, 비극적인 진실이 숨겨져 있습니다.",
						"english": "A tragic truth is hidden, binding all souls to this ship.",
						"japanese": "全ての魂をこの船に縛り付けている、悲劇的な真実が隠されています。",
						"chinese": "一个悲剧性的真相被隐藏着，它将所有灵魂束缚在这艘船上。",
						"french": "Une vérité tragique est cachée, liant toutes les âmes à ce navire.",
						"spanish": "Una verdad trágica se esconde, atando a todas las almas a este barco.",
						"vietnamese": "Một sự thật bi thảm đang ẩn giấu, trói buộc mọi linh hồn vào con tàu này.",
						"thai": "ความจริงอันน่าเศร้าถูกซ่อนไว้ ผูกมัดทุกดวงวิญญาณไว้กับเรือลำนี้",
						"hindi": "एक दुखद सच छिपा हुआ है, जो सभी आत्माओं को इस जहाज से बांधे हुए है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "eira"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 서서히 사라졌다. 얼어붙은 공간에 침묵이 찾아왔다.",
						"english": "The colossal shadow slowly faded. Silence fell upon the frozen space.",
						"japanese": "巨大な影がゆっくりと消えていった。凍てついた空間に沈黙が訪れた。",
						"chinese": "巨大的黑影渐渐消散。冰冷的空间中一片寂静。",
						"french": "L'ombre colossale s'évanouit lentement. Le silence tomba sur l'espace gelé.",
						"spanish": "La sombra colosal se desvaneció lentamente. El silencio reinó en el espacio helado.",
						"vietnamese": "Bóng tối khổng lồ dần tan biến. Sự im lặng bao trùm không gian đóng băng.",
						"thai": "เงาขนาดมหึมาค่อยๆ จางหายไป ความเงียบงันเข้ามาแทนที่ในพื้นที่อันเยือกแข็ง",
						"hindi": "विशाल छाया धीरे-धीरे लुप्त हो गई। जमे हुए स्थान में खामोशी छा गई।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"content": {
						"korean": "나는... 단지... 지키려 했을 뿐... 족쇄를... 풀지 마라...",
						"english": "I... merely... tried to protect... Don't... break the chains...",
						"japanese": "私は… ただ… 守ろうと… しただけだ… 枷を… 解くな…",
						"chinese": "我…… 只是…… 想要守护…… 别…… 解开束缚……",
						"french": "Je... voulais seulement... protéger... Ne... brisez pas les chaînes...",
						"spanish": "Yo... solo... intenté proteger... No... rompas las cadenas...",
						"vietnamese": "Ta... chỉ... muốn bảo vệ... Đừng... tháo xiềng xích...",
						"thai": "ข้า... เพียงแค่... พยายามปกป้อง... อย่า... ปลดโซ่ตรวน...",
						"hindi": "मैं... बस... रक्षा करना चाहता था... जंजीरों को... मत तोड़ना..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "족쇄? 뭘 지키려고 했다는 거야?",
						"english": "Shackles? What were you trying to protect?",
						"japanese": "足枷？何を守ろうとしていたの？",
						"chinese": "桎梏？你想保护什么？",
						"french": "Des chaînes ? Que cherchiez-vous à protéger ?",
						"spanish": "¿Grilletes? ¿Qué intentabas proteger?",
						"vietnamese": "Cùm à? Ngươi định bảo vệ cái gì?",
						"thai": "โซ่ตรวน? คุณพยายามจะปกป้องอะไร?",
						"hindi": "बेड़ियाँ? तुम क्या बचाने की कोशिश कर रहे थे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 저주를 멈추는 데 도움이 되었습니다. 하지만... 아직 끝나지 않았습니다.",
						"english": "You've helped stop this curse. But... it's not over yet.",
						"japanese": "この呪いを止めるのに役立ちました。しかし…まだ終わっていません。",
						"chinese": "你帮助阻止了这个诅咒。但是……还没有结束。",
						"french": "Vous avez aidé à arrêter cette malédiction. Mais... ce n'est pas encore fini.",
						"spanish": "Has ayudado a detener esta maldición. Pero... aún no ha terminado.",
						"vietnamese": "Ngươi đã giúp ngăn chặn lời nguyền này. Nhưng... nó vẫn chưa kết thúc.",
						"thai": "คุณช่วยหยุดคำสาปนี้ได้ แต่... มันยังไม่จบ",
						"hindi": "आपने इस श्राप को रोकने में मदद की है। लेकिन... यह अभी खत्म नहीं हुआ है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "유령선의 저주는 계속되었다. 새로운 미스터리가 탐험대를 기다리고 있었다.",
						"english": "The ghost ship's curse continued. A new mystery awaited the expedition.",
						"japanese": "幽霊船の呪いは続いた。新たな謎が探検隊を待っていた。",
						"chinese": "幽灵船的诅咒仍在继续。新的谜团等待着探险队。",
						"french": "La malédiction du vaisseau fantôme continua. Un nouveau mystère attendait l'expédition.",
						"spanish": "La maldición del barco fantasma continuó. Un nuevo misterio esperaba a la expedición.",
						"vietnamese": "Lời nguyền của con tàu ma vẫn tiếp diễn. Một bí ẩn mới đang chờ đợi đoàn thám hiểm.",
						"thai": "คำสาปของเรือผีสิงยังคงดำเนินต่อไป ความลึกลับใหม่กำลังรอคณะสำรวจอยู่",
						"hindi": "भूतिया जहाज का श्राप जारी रहा। एक नया रहस्य अभियान का इंतजार कर रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "탐험대는 얼어붙은 바닥에 쓰러졌다. 거대한 그림자가 그들을 덮쳤다.",
						"english": "The expedition fell to the frozen floor. A giant shadow enveloped them.",
						"japanese": "探検隊は凍った床に倒れた。巨大な影が彼らを覆った。",
						"chinese": "探险队倒在了冰冷的地面上。一个巨大的影子笼罩了他们。",
						"french": "L'expédition s'effondra sur le sol gelé. Une ombre gigantesque les enveloppa.",
						"spanish": "La expedición cayó al suelo helado. Una sombra gigante los envolvió.",
						"vietnamese": "Đoàn thám hiểm ngã xuống sàn băng giá. Một cái bóng khổng lồ bao trùm lấy họ.",
						"thai": "คณะสำรวจล้มลงบนพื้นน้ำแข็ง เงาขนาดมหึมาปกคลุมพวกเขา",
						"hindi": "अभियान जमे हुए फर्श पर गिर गया। एक विशाल परछाई ने उन्हें घेर लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "영원히 이 배에 갇히게 될 것이다. 망자들과 함께!",
						"english": "You'll be trapped on this ship forever. With the dead!",
						"japanese": "永遠にこの船に閉じ込められるだろう。死者たちと共に！",
						"chinese": "你将永远被困在这艘船上。与死者为伴！",
						"french": "Vous serez piégé sur ce navire pour toujours. Avec les morts !",
						"spanish": "¡Estarás atrapado en este barco para siempre. Con los muertos!",
						"vietnamese": "Ngươi sẽ bị mắc kẹt trên con tàu này mãi mãi. Cùng với những kẻ đã chết!",
						"thai": "คุณจะต้องติดอยู่ในเรือลำนี้ตลอดไป พร้อมกับคนตาย!",
						"hindi": "तुम हमेशा के लिए इस जहाज में कैद रहोगे। मृतकों के साथ!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "크윽... 아직... 끝나지 않았어!",
						"english": "Ugh... It's... not over yet!",
						"japanese": "くっ…まだ…終わってない！",
						"chinese": "呃……还没……结束！",
						"french": "Ugh... Ce n'est... pas encore fini !",
						"spanish": "Ugh... ¡Aún... no ha terminado!",
						"vietnamese": "Ưm... Vẫn... chưa kết thúc!",
						"thai": "อึก... ยัง... ไม่จบ!",
						"hindi": "उफ़... यह... अभी खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "배의 심장에서 거대한 그림자가 나타났다. 얼어붙은 분노가 느껴졌다.",
						"english": "A colossal shadow emerged from the ship's heart. Frozen wrath emanated from it.",
						"japanese": "船の心臓から巨大な影が現れた。凍てつくような怒りが感じられた。",
						"chinese": "巨大的黑影从船的心脏处出现。冰冷的愤怒感油然而生。",
						"french": "Une ombre colossale émergea du cœur du navire. Une fureur glaciale s'en dégageait.",
						"spanish": "Una sombra colosal emergió del corazón del barco. Una ira helada se sentía.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ trái tim con tàu. Cơn thịnh nộ đóng băng tỏa ra.",
						"thai": "เงาขนาดมหึมาปรากฏขึ้นจากใจกลางเรือ ความโกรธแค้นที่เยือกแข็งแผ่ออกมา",
						"hindi": "जहाज के हृदय से एक विशाल छाया उभरी। जमी हुई क्रोध महसूस हुआ।"
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "이것이 그들을 지키는 존재입니다. 이 배의 영원한 수호자.",
						"english": "This is their protector. The eternal guardian of this ship.",
						"japanese": "これが彼らを守る存在です。この船の永遠の守護者。",
						"chinese": "这是他们的守护者。这艘船的永恒守卫。",
						"french": "C'est leur protecteur. Le gardien éternel de ce navire.",
						"spanish": "Este es su protector. El guardián eterno de este barco.",
						"vietnamese": "Đây là người bảo vệ của họ. Người giám hộ vĩnh cửu của con tàu này.",
						"thai": "นี่คือผู้พิทักษ์ของพวกเขา ผู้พิทักษ์นิรันดร์ของเรือลำนี้",
						"hindi": "यह उनका रक्षक है। इस जहाज का शाश्वत संरक्षक।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "침입자들... 감히 망자의 안식을 방해하는가.",
						"english": "Intruders... How dare you disturb the dead's rest?",
						"japanese": "侵入者たち… 亡者の安息を妨げるなど、よくも。",
						"chinese": "入侵者…… 竟敢打扰亡者的安息。",
						"french": "Intrus... Comment osez-vous troubler le repos des morts ?",
						"spanish": "Intrusos... ¿Cómo osáis perturbar el descanso de los muertos?",
						"vietnamese": "Những kẻ xâm nhập... Sao ngươi dám quấy rầy giấc ngủ của người chết?",
						"thai": "ผู้บุกรุก... กล้าดียังไงมารบกวนการพักผ่อนของผู้ตาย",
						"hindi": "घुसपैठिए... मृत आत्माओं की शांति भंग करने की तुम्हारी हिम्मत कैसे हुई?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "안식이라고? 여기가 대체 어디가 안식처라는 거야!",
						"english": "Rest? Where on earth is this a place of rest?!",
						"japanese": "安息だと？ここが一体どこが安息の地だというんだ！",
						"chinese": "安息？这里哪里是安息之所！",
						"french": "Le repos ? Où diable est-ce un lieu de repos ?!",
						"spanish": "¿Descanso? ¡¿Dónde demonios es este un lugar de descanso?!",
						"vietnamese": "An nghỉ ư? Đây rốt cuộc là nơi nào mà gọi là an nghỉ?!",
						"thai": "พักผ่อนรึ? ที่นี่มันที่ไหนกันแน่ถึงจะเรียกว่าที่พักผ่อน?!",
						"hindi": "आराम? यह जगह कहाँ से आराम करने की जगह है?!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "그들은 묶여있습니다. 이 배에 영원히...",
						"english": "They are bound. To this ship, forever...",
						"japanese": "彼らは縛られています。この船に、永遠に…",
						"chinese": "他们被束缚了。永远地，在这艘船上……",
						"french": "Ils sont liés. À ce navire, pour toujours...",
						"spanish": "Están atados. A este barco, para siempre...",
						"vietnamese": "Họ bị trói buộc. Vào con tàu này, mãi mãi...",
						"thai": "พวกเขาถูกผูกมัดไว้กับเรือลำนี้ ตลอดไป...",
						"hindi": "वे बंधे हुए हैं। इस जहाज से, हमेशा के लिए..."
					},
					"emotion": "sad"
				},
				{
					"direction": "down",
					"duration_ms": 400,
					"action": "exit",
					"type": "direction",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "내 영역이다. 돌아가지 못하리라!",
						"english": "This is my domain. You shall not return!",
						"japanese": "我が領域だ。戻ることは叶わぬ！",
						"chinese": "这是我的领域。你们休想回去！",
						"french": "C'est mon domaine. Vous ne reviendrez pas !",
						"spanish": "Este es mi dominio. ¡No regresaréis!",
						"vietnamese": "Đây là lãnh địa của ta. Ngươi sẽ không thể trở về!",
						"thai": "นี่คืออาณาเขตของข้า เจ้าจะไม่ได้กลับไป!",
						"hindi": "यह मेरा क्षेत्र है। तुम वापस नहीं जा पाओगे!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"눈보라가 삼킨 북쪽 땅, 얼어붙은 망자들의 비명.",
			"그 한가운데, 유령선 '그레이브미스트'가 나타났다.",
			"죽은 자들의 마지막 안식처. 혹은 영원한 감옥.",
			"그리고, 그 배 안에서 - 저주의 안내자가 기다리고 있었다."
		],
		"english": [
			"The northern land swallowed by a blizzard, the screams of frozen dead.",
			"Amidst it all, the ghost ship 'Gravemist' appeared.",
			"The final resting place of the dead. Or an eternal prison.",
			"And within that ship - the guide of the curse awaited."
		],
		"japanese": [
			"吹雪に飲まれた北の地、凍てついた亡者たちの悲鳴。",
			"その只中に、幽霊船「グレイブミスト」が現れた。",
			"死者たちの最後の安息の地。あるいは永遠の監獄。",
			"そして、その船の中では - 呪いの案内者が待っていた。"
		],
		"chinese": [
			"被暴风雪吞噬的北方大地，冰冻亡灵的尖叫。",
			"在那之中，幽灵船“格雷夫米斯特”出现了。",
			"死者的最后安息之地。亦或是永恒的监狱。",
			"而在那艘船里——诅咒的引导者正在等待着。"
		],
		"french": [
			"La terre du nord engloutie par le blizzard, les cris des morts gelés.",
			"Au milieu de tout cela, le vaisseau fantôme 'Gravemist' est apparu.",
			"Le dernier repos des morts. Ou une prison éternelle.",
			"Et à l'intérieur de ce navire - le guide de la malédiction attendait."
		],
		"spanish": [
			"La tierra del norte engullida por una ventisca, los gritos de los muertos congelados.",
			"En medio de todo, apareció el barco fantasma 'Gravemist'.",
			"El último lugar de descanso de los muertos. O una prisión eterna.",
			"Y dentro de ese barco - el guía de la maldición esperaba."
		],
		"vietnamese": [
			"Vùng đất phía bắc bị bão tuyết nuốt chửng, tiếng thét của những xác chết đóng băng.",
			"Giữa tất cả, con tàu ma 'Gravemist' đã xuất hiện.",
			"Nơi an nghỉ cuối cùng của người chết. Hoặc một nhà tù vĩnh cửu.",
			"Và bên trong con tàu đó - người dẫn đường của lời nguyền đang chờ đợi."
		],
		"thai": [
			"ดินแดนทางเหนือที่ถูกพายุหิมะกลืนกิน, เสียงกรีดร้องของเหล่าคนตายที่ถูกแช่แข็ง.",
			"ท่ามกลางทั้งหมดนั้น, เรือผี 'Gravemist' ได้ปรากฏขึ้น.",
			"สถานที่พักผ่อนสุดท้ายของผู้ตาย. หรือคุกนิรันดร์.",
			"และภายในเรือลำนั้น - ผู้นำทางแห่งคำสาปรออยู่."
		],
		"hindi": [
			"बर्फीले तूफ़ान में समाई उत्तरी भूमि, जमे हुए मृतकों की चीखें।",
			"उसी के बीच, भूतिया जहाज़ 'ग्रेवमिस्ट' प्रकट हुआ।",
			"मृतकों का अंतिम विश्राम स्थल। या एक शाश्वत जेल।",
			"और उस जहाज़ के अंदर - शाप का मार्गदर्शक इंतज़ार कर रहा था।"
		]
	}
} as const;
