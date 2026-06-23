export const scenario_modern_seraphina_69_01 = {
	"scenario_id": "modern_seraphina_69_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"nia": {
			"id": "mon_872177dd-fcf0-40d8-b78c-fd795017c763",
			"name": {
				"korean": "니아",
				"english": "Nia",
				"japanese": "ニア",
				"chinese": "妮娅",
				"french": "Nia",
				"spanish": "Nia",
				"vietnamese": "Nia",
				"thai": "เนีย",
				"hindi": "निया"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/db690f96-d5b3-498a-f4ec-f269e6e95100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a8fe5d7a-56fe-4822-c272-5a04fd7f4c00/public"
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
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "도시의 뒷골목. 슬픈 멜로디가 안개처럼 맴돌았다.",
						"english": "City back alleys. A sad melody lingered like fog.",
						"japanese": "都市の裏路地。悲しいメロディーが霧のように漂っていた。",
						"chinese": "城市的小巷。悲伤的旋律如雾般萦绕。",
						"french": "Ruelles de la ville. Une triste mélodie flottait comme du brouillard.",
						"spanish": "Callejones de la ciudad. Una triste melodía flotaba como niebla.",
						"vietnamese": "Ngõ hẻm thành phố. Một giai điệu buồn lẩn quẩn như sương mù.",
						"thai": "ตรอกซอกซอยในเมือง ท่วงทำนองอันโศกเศร้าลอยวนราวกับหมอก",
						"hindi": "शहर की गलियां। एक उदास धुन कोहरे की तरह मंडरा रही थी।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이 소리… 마음이 너무 아파.",
						"english": "This sound… my heart aches so much.",
						"japanese": "この音…心がとても痛む。",
						"chinese": "这声音…心好痛。",
						"french": "Ce son… mon cœur me fait si mal.",
						"spanish": "Este sonido… me duele mucho el corazón.",
						"vietnamese": "Âm thanh này… lòng tôi đau quá.",
						"thai": "เสียงนี้… ใจฉันเจ็บปวดเหลือเกิน",
						"hindi": "यह आवाज… मेरा दिल बहुत दुखता है।"
					}
				},
				{
					"action": "enter",
					"speaker": "nia",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "저 음악에 홀리지 마. 위험해.",
						"english": "Don't be entranced by that music. It's dangerous.",
						"japanese": "あの音楽に惑わされるな。危険だ。",
						"chinese": "不要被那音乐迷惑。很危险。",
						"french": "Ne te laisse pas envoûter par cette musique. C'est dangereux.",
						"spanish": "No te dejes llevar por esa música. Es peligroso.",
						"vietnamese": "Đừng bị mê hoặc bởi âm nhạc đó. Nó nguy hiểm.",
						"thai": "อย่าหลงใหลไปกับเพลงนั้น มันอันตราย",
						"hindi": "उस संगीत से मोहित मत हो। यह खतरनाक है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 누구시죠?",
						"english": "Who are you?",
						"japanese": "あなたは誰ですか？",
						"chinese": "你是谁？",
						"french": "Qui êtes-vous ?",
						"spanish": "¿Quién eres?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณคือใคร?",
						"hindi": "आप कौन हैं?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "니아. 지나가던 행상인일 뿐. 하지만 이 도시의 슬픔은 누구보다 잘 알지.",
						"english": "Nia. Just a passing peddler. But I know this city's sorrow better than anyone.",
						"japanese": "ニア。ただの通りすがりの行商人さ。だが、この都市の悲しみは誰よりもよく知っている。",
						"chinese": "妮娅。只是个路过的行商人。但这座城市的悲伤，我比谁都清楚。",
						"french": "Nia. Juste une colporteuse de passage. Mais je connais la tristesse de cette ville mieux que quiconque.",
						"spanish": "Nia. Solo una vendedora ambulante de paso. Pero conozco la tristeza de esta ciudad mejor que nadie.",
						"vietnamese": "Nia. Chỉ là một người bán hàng rong đi ngang qua. Nhưng nỗi buồn của thành phố này, tôi biết rõ hơn ai hết.",
						"thai": "เนีย แค่พ่อค้าเร่ผ่านมา แต่ฉันรู้จักความเศร้าของเมืองนี้ดีกว่าใคร",
						"hindi": "निया। बस एक गुजरता हुआ फेरीवाला। लेकिन मैं इस शहर के दुख को किसी से भी बेहतर जानती हूं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "폐허가 된 극장, 사라진 발레리나. 그리고 멈추지 않는 애가.",
						"english": "A ruined theater, a vanished ballerina. And a lament that never ceases.",
						"japanese": "廃墟となった劇場、消えたバレリーナ。そして止まない哀歌。",
						"chinese": "废弃的剧院，消失的芭蕾舞者。以及永不停止的挽歌。",
						"french": "Un théâtre en ruines, une ballerine disparue. Et une lamentation qui ne cesse jamais.",
						"spanish": "Un teatro en ruinas, una bailarina desaparecida. Y un lamento que nunca cesa.",
						"vietnamese": "Một nhà hát đổ nát, một nữ diễn viên múa ballet biến mất. Và một khúc bi ca không ngừng.",
						"thai": "โรงละครที่ปรักหักพัง นักบัลเลต์ที่หายไป และบทเพลงคร่ำครวญที่ไม่เคยหยุด",
						"hindi": "एक खंडहर हुआ थिएटर, एक गायब हुई बैलेरीना। और एक शोकगीत जो कभी नहीं रुकता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "nia",
					"content": {
						"korean": "그 멜로디가… 도시를 병들게 하고 있어.",
						"english": "That melody... it's sickening the city.",
						"japanese": "あのメロディが…街を病ませている。",
						"chinese": "那旋律…正在使这座城市病入膏肓。",
						"french": "Cette mélodie… ronge la ville.",
						"spanish": "Esa melodía… está enfermando la ciudad.",
						"vietnamese": "Giai điệu đó… đang làm thành phố mục ruỗng.",
						"thai": "ท่วงทำนองนั้น…กำลังทำให้เมืองเจ็บป่วย",
						"hindi": "वो धुन… शहर को बीमार कर रही है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "nia",
					"action": "enter"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "저 소리의 근원은 오르골이야.",
						"english": "That sound originates from a music box.",
						"japanese": "あの音の根源はオルゴールだ。",
						"chinese": "那声音的源头是八音盒。",
						"french": "La source de ce son est une boîte à musique.",
						"spanish": "El origen de ese sonido es una caja de música.",
						"vietnamese": "Nguồn gốc của âm thanh đó là một hộp nhạc.",
						"thai": "ต้นกำเนิดของเสียงนั้นคือกล่องดนตรี",
						"hindi": "उस आवाज़ का स्त्रोत एक म्यूज़िक बॉक्स है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "오르골…?",
						"english": "A music box…?",
						"japanese": "オルゴール…？",
						"chinese": "八音盒…？",
						"french": "Une boîte à musique… ?",
						"spanish": "¿Una caja de música…?",
						"vietnamese": "Hộp nhạc…?",
						"thai": "กล่องดนตรี…?",
						"hindi": "म्यूज़िक बॉक्स…?"
					}
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "슬픔에 잠식된 사람들은 깨진 오르골 조각들을 찾고 있어.",
						"english": "People consumed by sorrow are searching for broken music box fragments.",
						"japanese": "悲しみに侵された人々は、壊れたオルゴールの破片を探している。",
						"chinese": "被悲伤侵蚀的人们正在寻找破碎的八音盒碎片。",
						"french": "Les gens rongés par la tristesse cherchent les fragments brisés de la boîte à musique.",
						"spanish": "Las personas consumidas por la tristeza buscan los fragmentos rotos de la caja de música.",
						"vietnamese": "Những người chìm trong nỗi buồn đang tìm kiếm các mảnh vỡ của hộp nhạc.",
						"thai": "ผู้คนที่ถูกความเศร้าครอบงำกำลังตามหาเศษกล่องดนตรีที่แตกหัก",
						"hindi": "दुख में डूबे लोग टूटे हुए म्यूज़ik बॉक्स के टुकड़े ढूंढ रहे हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "그 조각들이… 도시 곳곳에 흩어져있지. 불행을 퍼뜨리면서.",
						"english": "Those fragments… are scattered throughout the city, spreading misfortune.",
						"japanese": "その破片が…街の至る所に散らばり、不幸を振りまいている。",
						"chinese": "那些碎片…散布在城市的各个角落，散播着不幸。",
						"french": "Ces fragments… sont éparpillés dans toute la ville, semant le malheur.",
						"spanish": "Esos fragmentos… están esparcidos por toda la ciudad, extendiendo la desgracia.",
						"vietnamese": "Những mảnh vỡ đó… rải rác khắp thành phố, gieo rắc bất hạnh.",
						"thai": "เศษชิ้นส่วนเหล่านั้น…กระจัดกระจายไปทั่วเมือง พร้อมกับแพร่ความโชคร้าย",
						"hindi": "वो टुकड़े… शहर भर में फैले हुए हैं, बदकिस्मती फैलाते हुए।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "nia",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "점점 더 깊숙이 들어가는군. 후회하지 않을 자신 있어?",
						"english": "You're going deeper and deeper. Are you sure you won't regret it?",
						"japanese": "ますます深みにはまっていくな。後悔しない自信はあるか？",
						"chinese": "你越陷越深了。你确定不会后悔吗？",
						"french": "Tu t'enfonces de plus en plus. Es-tu sûr de ne pas le regretter ?",
						"spanish": "Estás yendo cada vez más profundo. ¿Estás seguro de que no te arrepentirás?",
						"vietnamese": "Ngươi đang đi sâu hơn. Ngươi có chắc sẽ không hối hận không?",
						"thai": "เจ้ากำลังจะเข้าไปลึกขึ้นเรื่อยๆ เจ้ามั่นใจหรือว่าจะไม่เสียใจ?",
						"hindi": "तुम और गहरे जा रहे हो। क्या तुम्हें यकीन है कि तुम्हें अफ़सोस नहीं होगा?"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 슬픔을 멈춰야 해. 그게 내 목표야.",
						"english": "I must stop this sorrow. That's my goal.",
						"japanese": "この悲しみを止めなければならない。それが私の目標だ。",
						"chinese": "我必须阻止这份悲伤。那是我的目标。",
						"french": "Je dois arrêter cette tristesse. C'est mon objectif.",
						"spanish": "Debo detener esta tristeza. Ese es mi objetivo.",
						"vietnamese": "Ta phải ngăn chặn nỗi buồn này. Đó là mục tiêu của ta.",
						"thai": "ข้าต้องหยุดความเศร้าโศกนี้ นี่คือเป้าหมายของข้า",
						"hindi": "मुझे इस दुख को रोकना होगा। यही मेरा लक्ष्य है।"
					}
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "진실은… 언제나 잔인한 법이야. 이 멜로디처럼.",
						"english": "The truth… is always cruel. Just like this melody.",
						"japanese": "真実は…常に残酷なものだ。このメロディのように。",
						"chinese": "真相…总是残酷的。就像这旋律一样。",
						"french": "La vérité… est toujours cruelle. Comme cette mélodie.",
						"spanish": "La verdad… siempre es cruel. Como esta melodía.",
						"vietnamese": "Sự thật… luôn tàn nhẫn. Giống như giai điệu này.",
						"thai": "ความจริง…มักจะโหดร้ายเสมอ เหมือนท่วงทำนองนี้",
						"hindi": "सच… हमेशा क्रूर होता है। इस धुन की तरह।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "그 발레리나는… 모든 것을 바쳤다고 했어. 단 하나의 춤을 위해.",
						"english": "That ballerina… said she sacrificed everything. For a single dance.",
						"japanese": "あのバレリーナは…すべてを捧げたと言っていた。たった一つの踊りのために。",
						"chinese": "那位芭蕾舞者…据说为了一支舞奉献了一切。",
						"french": "Cette ballerine… disait avoir tout sacrifié. Pour une seule danse.",
						"spanish": "Esa bailarina… dijo que lo sacrificó todo. Por un solo baile.",
						"vietnamese": "Vũ công ba lê đó… nói rằng cô ấy đã hy sinh mọi thứ. Chỉ vì một điệu nhảy duy nhất.",
						"thai": "นักบัลเลต์คนนั้น…บอกว่าเธอเสียสละทุกสิ่ง เพื่อการเต้นรำเพียงครั้งเดียว",
						"hindi": "उस बैलेरीना ने… कहा था कि उसने सब कुछ कुर्बान कर दिया। एक ही नृत्य के लिए।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "nia",
					"action": "enter"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "더 가면 안 돼! 오르골의 저주가 널 집어삼킬 거야!",
						"english": "Don't go any further! The music box's curse will devour you!",
						"japanese": "これ以上行くな！オルゴールの呪いが、お前を飲み込むぞ！",
						"chinese": "不要再往前走了！八音盒的诅咒会吞噬你！",
						"french": "N'avance pas plus loin ! La malédiction de la boîte à musique te dévorera !",
						"spanish": "¡No vayas más lejos! ¡La maldición de la caja de música te devorará!",
						"vietnamese": "Đừng đi xa hơn nữa! Lời nguyền của hộp nhạc sẽ nuốt chửng ngươi!",
						"thai": "อย่าไปไกลกว่านี้! คำสาปของกล่องดนตรีจะกลืนกินเจ้า!",
						"hindi": "और आगे मत जाओ! म्यूज़िक बॉक्स का श्राप तुम्हें निगल जाएगा!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이미 늦었어. 난 돌아갈 수 없어.",
						"english": "It's too late. I can't go back.",
						"japanese": "もう遅い。戻れない。",
						"chinese": "已经太迟了。我回不去了。",
						"french": "C'est trop tard. Je ne peux pas revenir en arrière.",
						"spanish": "Ya es tarde. No puedo volver.",
						"vietnamese": "Đã quá muộn rồi. Ta không thể quay lại.",
						"thai": "สายเกินไปแล้ว ฉันกลับไปไม่ได้",
						"hindi": "बहुत देर हो चुकी है। मैं वापस नहीं जा सकता।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "nia",
					"content": {
						"korean": "이 길의 끝은 파멸뿐이야. 제발…",
						"english": "This path leads only to ruin. Please...",
						"japanese": "この道の終わりは破滅だけだ。どうか…",
						"chinese": "这条路的尽头只有毁灭。拜托了…",
						"french": "Cette voie ne mène qu'à la ruine. S'il te plaît...",
						"spanish": "El final de este camino es solo ruina. Por favor...",
						"vietnamese": "Con đường này chỉ dẫn đến diệt vong. Xin hãy…",
						"thai": "ปลายทางของเส้นทางนี้มีแต่หายนะ ได้โปรด...",
						"hindi": "इस रास्ते का अंत सिर्फ़ विनाश है। कृपया…"
					}
				}
			]
		},
		{
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "멜로디의 근원지. 거대한 그림자가 그들을 응시했다.",
						"english": "The source of the melody. A giant shadow gazed upon them.",
						"japanese": "旋律の源。巨大な影が彼らを見つめた。",
						"chinese": "旋律的源头。一个巨大的影子凝视着他们。",
						"french": "La source de la mélodie. Une ombre gigantesque les observait.",
						"spanish": "La fuente de la melodía. Una sombra gigante los observó.",
						"vietnamese": "Nguồn gốc của giai điệu. Một cái bóng khổng lồ nhìn chằm chằm vào họ.",
						"thai": "ต้นกำเนิดของทำนองเงาขนาดมหึมาจ้องมองพวกเขา",
						"hindi": "धुन का स्रोत। एक विशाल परछाई उन्हें घूर रही थी।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이 슬픔… 네가 감당할 수 있을까?",
						"english": "This sorrow... can you bear it?",
						"japanese": "この悲しみ…君に耐えられるか？",
						"chinese": "这悲伤…你能承受吗？",
						"french": "Cette tristesse… peux-tu la supporter ?",
						"spanish": "Esta tristeza... ¿podrás soportarla?",
						"vietnamese": "Nỗi buồn này… liệu ngươi có gánh vác được không?",
						"thai": "ความโศกเศร้าเหล่านี้… เจ้าจะรับไหวหรือ?",
						"hindi": "यह दुख… क्या तुम इसे सहन कर पाओगे?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네놈이 근원인가!",
						"english": "You are the source!",
						"japanese": "貴様が根源か！",
						"chinese": "你就是源头！",
						"french": "Tu es la source !",
						"spanish": "¡Tú eres la fuente!",
						"vietnamese": "Ngươi chính là nguồn gốc!",
						"thai": "เจ้าคือต้นกำเนิด!",
						"hindi": "तुम ही हो स्रोत!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자. 내가 바로 멜로디 그 자체다.",
						"english": "Fool. I am the melody itself.",
						"japanese": "愚か者め。私が旋律そのものだ。",
						"chinese": "愚蠢的家伙。我就是旋律本身。",
						"french": "Imbécile. Je suis la mélodie elle-même.",
						"spanish": "Tonto. Yo soy la melodía misma.",
						"vietnamese": "Đồ ngu ngốc. Ta chính là giai điệu.",
						"thai": "เจ้าคนโง่ ข้าคือทำนองเพลงนั้นเอง",
						"hindi": "मूर्ख। मैं ही धुन हूँ।"
					}
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "…끝난 게 아니야. 이 슬픔은 영원해…",
						"english": "...It's not over. This sorrow is eternal...",
						"japanese": "…終わってない。この悲しみは永遠だ…",
						"chinese": "…还没结束。这份悲伤是永恒的…",
						"french": "...Ce n'est pas fini. Cette tristesse est éternelle...",
						"spanish": "...No ha terminado. Esta tristeza es eterna...",
						"vietnamese": "…Chưa kết thúc đâu. Nỗi buồn này là vĩnh cửu…",
						"thai": "...ยังไม่จบ ความโศกเศร้านี้เป็นนิรันดร์...",
						"hindi": "...यह ख़त्म नहीं हुआ। यह दुख शाश्वत है…"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사라졌어… 하지만…",
						"english": "Vanished... but...",
						"japanese": "消えた…しかし…",
						"chinese": "消失了…但是…",
						"french": "Disparu... mais...",
						"spanish": "Desapareció... pero...",
						"vietnamese": "Biến mất rồi… nhưng…",
						"thai": "หายไปแล้ว… แต่…",
						"hindi": "ग़ायब हो गया… लेकिन…"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "nia"
				},
				{
					"speaker": "nia",
					"content": {
						"korean": "멜로디는… 여전히 맴도는군. 공허함만 남았어.",
						"english": "The melody... still lingers. Only emptiness remains.",
						"japanese": "旋律は…まだ響いている。空虚さだけが残った。",
						"chinese": "旋律…依然萦绕。只剩下空虚。",
						"french": "La mélodie... persiste. Seul le vide demeure.",
						"spanish": "La melodía... aún perdura. Solo queda el vacío.",
						"vietnamese": "Giai điệu… vẫn còn vương vấn. Chỉ còn lại sự trống rỗng.",
						"thai": "ทำนอง… ยังคงวนเวียน เหลือเพียงความว่างเปล่า",
						"hindi": "धुन… अभी भी गूंज रही है। केवल ख़ालीपन बचा है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "슬픔의 멜로디는 도시의 깊은 곳으로 스며들었다. 새로운 비극의 시작이었다.",
						"english": "The melody of sorrow permeated the city's depths. It was the beginning of a new tragedy.",
						"japanese": "悲しみの旋律は都市の深部へと染み渡った。それは新たな悲劇の始まりだった。",
						"chinese": "悲伤的旋律渗透到城市的深处。那是一个新悲剧的开始。",
						"french": "La mélodie de la tristesse s'est infiltrée dans les profondeurs de la ville. Ce fut le début d'une nouvelle tragédie.",
						"spanish": "La melodía de la tristeza se filtró en las profundidades de la ciudad. Fue el comienzo de una nueva tragedia.",
						"vietnamese": "Giai điệu buồn bã len lỏi vào sâu trong lòng thành phố. Đó là sự khởi đầu của một bi kịch mới.",
						"thai": "ทำนองแห่งความโศกเศร้าซึมซาบสู่ส่วนลึกของเมืองมันเป็นจุดเริ่มต้นของโศกนาฏกรรมครั้งใหม่",
						"hindi": "दुख की धुन शहर की गहराइयों में समा गई। यह एक नई त्रासदी की शुरुआत थी।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "너도 결국 이 슬픔에 잠식될 것이다.",
						"english": "This sorrow will consume you too.",
						"japanese": "お前もいずれ、この悲しみに飲み込まれるだろう。",
						"chinese": "你终将被这悲伤吞噬。",
						"french": "Toi aussi, cette tristesse te consumera.",
						"spanish": "Tú también serás consumido por esta tristeza.",
						"vietnamese": "Ngươi rồi cũng sẽ bị nỗi buồn này nhấn chìm.",
						"thai": "เจ้าเองก็จะถูกความเศร้าโศกนี้กลืนกินในที่สุด",
						"hindi": "तुम भी अंततः इस दुःख से घिर जाओगे।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not... over!",
						"japanese": "まだ…終わってない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... encore fini !",
						"spanish": "¡Aún... no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง...ไม่จบ!",
						"hindi": "अभी… ख़त्म नहीं हुआ है!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와봐라. 더 깊은 절망을 보여주지.",
						"english": "Come again. I'll show you deeper despair.",
						"japanese": "また来るがいい。より深い絶望を見せてやろう。",
						"chinese": "再来吧。我将让你见识更深的绝望。",
						"french": "Reviens. Je te montrerai un désespoir plus profond.",
						"spanish": "Vuelve. Te mostraré una desesperación más profunda.",
						"vietnamese": "Cứ quay lại đi. Ta sẽ cho ngươi thấy sự tuyệt vọng sâu hơn nữa.",
						"thai": "กลับมาอีกสิ ข้าจะแสดงความสิ้นหวังที่ลึกซึ้งกว่าให้เจ้าดู",
						"hindi": "फिर से आना। मैं तुम्हें और गहरी निराशा दिखाऊँगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"어둡고 습한 도시, 깊은 곳에서 슬픈 멜로디가 울려 퍼진다.",
			"폐허가 된 상점가, 깨진 오르골은 슬픔에 잠식된 이들을 유혹하고.",
			"지나가던 행상인 니아는 사라진 발레리나와 극장의 애가를 경고한다.",
			"이 알 수 없는 슬픔의 근원, 그 비극의 서막이 지금 시작된다."
		],
		"english": [
			"In a dark, damp city, a sad melody echoes from its depths.",
			"In a ruined shopping district, a broken music box tempts those consumed by sorrow.",
			"Nia, a passing peddler, warns of the vanished ballerina and the theater's lament.",
			"The source of this unknown sorrow, the prelude to that tragedy, now begins."
		],
		"japanese": [
			"暗く湿った都市の奥深くから、悲しいメロディーが響き渡る。",
			"廃墟と化した商店街で、壊れたオルゴールが悲しみに囚われた人々を誘惑する。",
			"通りすがりの行商人ニアは、消えたバレリーナと劇場の哀歌について警告する。",
			"この知られざる悲しみの源、その悲劇の序幕が今、始まる。"
		],
		"chinese": [
			"在黑暗潮湿的城市深处，悲伤的旋律响起。",
			"在废弃的商业街，破碎的八音盒引诱着被悲伤吞噬的人们。",
			"路过的行商人妮娅警告着消失的芭蕾舞者和剧院的挽歌。",
			"这未知悲伤的源头，那悲剧的序幕，现在开始了。"
		],
		"french": [
			"Dans une ville sombre et humide, une mélodie triste résonne des profondeurs.",
			"Dans un quartier commerçant en ruines, une boîte à musique brisée attire ceux que la tristesse consume.",
			"Nia, une colporteuse de passage, met en garde contre la ballerine disparue et la lamentation du théâtre.",
			"La source de cette tristesse inconnue, le prélude de cette tragédie, commence maintenant."
		],
		"spanish": [
			"En una ciudad oscura y húmeda, una triste melodía resuena desde sus profundidades.",
			"En un distrito comercial en ruinas, una caja de música rota tienta a aquellos consumidos por la tristeza.",
			"Nia, una vendedora ambulante, advierte sobre la bailarina desaparecida y el lamento del teatro.",
			"La fuente de esta tristeza desconocida, el preludio de esa tragedia, comienza ahora."
		],
		"vietnamese": [
			"Trong thành phố tối tăm, ẩm ướt, một giai điệu buồn vang lên từ sâu thẳm.",
			"Trong khu phố mua sắm đổ nát, chiếc hộp nhạc vỡ dụ dỗ những kẻ bị nỗi buồn nhấn chìm.",
			"Nia, một người bán hàng rong đi ngang qua, cảnh báo về nữ diễn viên múa ballet biến mất và khúc bi ca của nhà hát.",
			"Nguồn gốc của nỗi buồn không tên này, khúc dạo đầu của bi kịch đó, giờ đây bắt đầu."
		],
		"thai": [
			"ในเมืองที่มืดมิดและชื้นแฉะ ท่วงทำนองอันโศกเศร้าก้องกังวานจากส่วนลึก",
			"ในย่านการค้าที่ปรักหักพัง กล่องดนตรีที่พังทลายล่อลวงผู้ที่จมดิ่งในความโศกเศรão",
			"เนีย พ่อค้าเร่ผู้ผ่านมา เตือนถึงนักบัลเลต์ที่หายไปและบทเพลงคร่ำครวญของโรงละคร",
			"ต้นกำเนิดของความเศร้าโศกที่ไม่รู้จักนี้ อารัมภบทของโศกนาฏกรรมนั้น บัดนี้เริ่มต้นขึ้น"
		],
		"hindi": [
			"एक अंधेरे, नम शहर में, गहराइयों से एक उदास धुन गूंजती है।",
			"एक खंडहर हो चुके शॉपिंग जिले में, एक टूटी हुई संगीत पेटी दुख से घिरे लोगों को लुभाती है।",
			"निया, एक गुजरती हुई फेरीवाला, गायब हुई बैलेरीना और थिएटर के शोकगीत के बारे में चेतावनी देती है।",
			"इस अज्ञात दुख का स्रोत, उस त्रासदी का प्रस्तावना, अब शुरू होता है।"
		]
	}
} as const;
