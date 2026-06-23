export const scenario_modern_memento_9_01 = {
	"scenario_id": "modern_memento_9_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"어두운 네온 불빛 아래, 낡은 아케이드가 숨을 쉬고 있었다.",
			"잊힌 멜로디가 도시의 그림자를 깨우자, 불안한 진실이 모습을 드러냈다.",
			"Memento, 고독한 예술가는 누구인가?",
			"그리고, 진실을 좇는다는 그녀의 눈빛은 — 너무나도 불안했다."
		],
		"english": [
			"Beneath the dim neon, a worn arcade breathed.",
			"As a forgotten melody awoke the city's shadows, an unsettling truth emerged.",
			"Memento, who is this solitary artist?",
			"And her eyes, pursuing truth—they were too unsettling."
		],
		"japanese": [
			"薄暗いネオンの下、古びたゲームセンターが息づいていた。",
			"忘れられたメロディーが街の影を目覚めさせると、不穏な真実が姿を現した。",
			"Memento、孤独な芸術家は誰なのか？",
			"そして、真実を追う彼女の眼差しは――あまりにも不安だった。"
		],
		"chinese": [
			"在昏暗的霓虹灯下，破旧的街机厅喘息着。",
			"当被遗忘的旋律唤醒城市阴影时，一个令人不安的真相浮出水面。",
			"Memento，这位孤独的艺术家是谁？",
			"而她那追寻真相的眼神——是如此令人不安。"
		],
		"french": [
			"Sous les néons sombres, une vieille arcade respirait.",
			"Une mélodie oubliée éveilla les ombres de la ville, et une vérité troublante apparut.",
			"Memento, qui est cet artiste solitaire ?",
			"Et son regard, cherchant la vérité — il était bien trop troublant."
		],
		"spanish": [
			"Bajo las tenues luces de neón, una vieja sala de juegos respiraba.",
			"Mientras una melodía olvidada despertaba las sombras de la ciudad, una verdad inquietante emergió.",
			"¿Memento, quién es esta artista solitaria?",
			"Y sus ojos, persiguiendo la verdad, eran demasiado inquietantes."
		],
		"vietnamese": [
			"Dưới ánh đèn neon mờ ảo, một khu arcade cũ kỹ đang thở.",
			"Khi một giai điệu bị lãng quên đánh thức bóng tối thành phố, một sự thật đáng lo ngại đã hiện ra.",
			"Memento, nghệ sĩ cô độc này là ai?",
			"Và đôi mắt cô, khi theo đuổi sự thật—thật quá bất an."
		],
		"thai": [
			"ภายใต้แสงนีออนสลัว อาร์เคดเก่าแก่กำลังหายใจ",
			"ขณะที่ท่วงทำนองที่ถูกลืมปลุกเงาเมือง ความจริงที่น่าหนักใจก็ปรากฏขึ้น",
			"Memento ศิลปินผู้โดดเดี่ยวคนนี้คือใคร?",
			"และแววตาของเธอที่ตามล่าความจริงนั้นช่างน่าหวั่นใจเหลือเกิน"
		],
		"hindi": [
			"मंद नियॉन रोशनी के नीचे, एक पुरानी आर्केड साँस ले रही थी।",
			"जैसे ही एक भूली हुई धुन ने शहर की परछाइयों को जगाया, एक बेचैन करने वाला सच सामने आया।",
			"मेमेंटो, यह अकेला कलाकार कौन है?",
			"और उसकी आँखें, जो सच का पीछा कर रही थीं - वे बहुत परेशान करने वाली थीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "폐업한 아케이드. 낡은 오락기들이 침묵 속에 잠겨 있었다.",
						"english": "A closed arcade. Old machines lay silent.",
						"japanese": "閉店したゲームセンター。古びたゲーム機が沈黙に包まれていた。",
						"chinese": "一家废弃的街机厅。老旧的游戏机沉寂无声。",
						"french": "Une arcade fermée. De vieilles machines gisaient silencieuses.",
						"spanish": "Una sala de juegos cerrada. Máquinas viejas yacían en silencio.",
						"vietnamese": "Một khu arcade đóng cửa. Những cỗ máy cũ kỹ nằm im lìm.",
						"thai": "อาร์เคดที่ปิดตัวลง เครื่องเล่นเก่าแก่จมดิ่งในความเงียบ",
						"hindi": "एक बंद आर्केड। पुरानी मशीनें खामोश पड़ी थीं।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가 Memento가 있다는 곳인가….",
						"english": "Is this where Memento is...?",
						"japanese": "ここがMementoがいる場所なのか…。",
						"chinese": "这里就是Memento所在的地方吗……",
						"french": "C'est ici que se trouve Memento...?",
						"spanish": "¿Es aquí donde está Memento...?",
						"vietnamese": "Đây có phải là nơi Memento đang ở...?",
						"thai": "ที่นี่คือที่ที่ Memento อยู่หรือ...",
						"hindi": "क्या यहीं मेमेंटो है...?"
					}
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어디선가 나지막한 멜로디가 들려왔다.",
						"english": "A faint melody drifted from somewhere.",
						"japanese": "どこからか、かすかなメロディーが聞こえてきた。",
						"chinese": "不知从何处传来一阵低沉的旋律。",
						"french": "Une mélodie discrète s'élevait de quelque part.",
						"spanish": "Una melodía tenue venía de alguna parte.",
						"vietnamese": "Từ đâu đó, một giai điệu trầm vang lên.",
						"thai": "มีท่วงทำนองแผ่วเบาเล็ดลอดมาจากที่ใดที่หนึ่ง",
						"hindi": "कहीं से एक धीमी धुन सुनाई दी।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "bex",
					"type": "direction"
				},
				{
					"content": {
						"korean": "당신도 Memento를 찾아왔군요.",
						"english": "So you've come looking for Memento too.",
						"japanese": "あなたもMementoを探しに来たのですね。",
						"chinese": "你也是来找Memento的吗。",
						"french": "Vous aussi, vous êtes venu chercher Memento.",
						"spanish": "Así que tú también vienes buscando a Memento.",
						"vietnamese": "Vậy ra bạn cũng đến tìm Memento.",
						"thai": "คุณก็มาตามหา Memento ด้วยสินะ",
						"hindi": "तो तुम भी मेमेंटो को ढूंढने आए हो।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은?",
						"english": "And you are?",
						"japanese": "あなたは？",
						"chinese": "你是？",
						"french": "Et vous ?",
						"spanish": "¿Y tú?",
						"vietnamese": "Bạn là ai?",
						"thai": "คุณล่ะ?",
						"hindi": "तुम कौन हो?"
					}
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "Bex. 진실을 좇는 저널리스트예요.",
						"english": "Bex. A journalist pursuing the truth.",
						"japanese": "Bexよ。真実を追うジャーナリスト。",
						"chinese": "Bex。一位追寻真相的记者。",
						"french": "Bex. Une journaliste qui poursuit la vérité.",
						"spanish": "Bex. Una periodista que busca la verdad.",
						"vietnamese": "Bex. Một nhà báo theo đuổi sự thật.",
						"thai": "เบ็กซ์ นักข่าวผู้ตามหาความจริง",
						"hindi": "बेक्स। सच का पीछा करने वाली एक पत्रकार।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "Memento… 그는 이 도시의 위험한 비밀을 알고 있어요.",
						"english": "Memento… He knows a dangerous secret about this city.",
						"japanese": "メメント… 彼がこの都市の危険な秘密を知っています。",
						"chinese": "记忆体… 他知道这座城市一个危险的秘密。",
						"french": "Memento… Il connaît un dangereux secret à propos de cette ville.",
						"spanish": "Memento… Él conoce un peligroso secreto de esta ciudad.",
						"vietnamese": "Memento… Anh ta biết một bí mật nguy hiểm của thành phố này.",
						"thai": "Memento… เขารู้ความลับอันตรายของเมืองนี้",
						"hindi": "मेमेंटो… वह इस शहर का एक खतरनाक रहस्य जानता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "내가 당신을 도울 수 있습니다.",
						"english": "I can help you.",
						"japanese": "私があなたを助けられます。",
						"chinese": "我可以帮你。",
						"french": "Je peux vous aider.",
						"spanish": "Puedo ayudarte.",
						"vietnamese": "Tôi có thể giúp bạn.",
						"thai": "ฉันช่วยคุณได้",
						"hindi": "मैं तुम्हारी मदद कर सकता हूँ।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "bex"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						5,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "Memento는 잊힌 맹세를 지키려는… 광신도예요.",
						"english": "Memento is a fanatic trying to uphold a forgotten vow.",
						"japanese": "メメントは忘れられた誓いを守ろうとする…狂信者です。",
						"chinese": "记忆体是一个试图遵守被遗忘誓言的…狂热分子。",
						"french": "Memento est un fanatique essayant de tenir un serment oublié.",
						"spanish": "Memento es un fanático que intenta cumplir un juramento olvidado.",
						"vietnamese": "Memento là một kẻ cuồng tín đang cố gắng giữ một lời thề bị lãng quên.",
						"thai": "Memento คือผู้คลั่งไคล้ที่พยายามรักษาคำสาบานที่ถูกลืม",
						"hindi": "मेमेंटो एक कट्टरपंथी है जो एक भूले हुए प्रण को निभाना चाहता है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "광신도…?",
						"english": "A fanatic…?",
						"japanese": "狂信者…？",
						"chinese": "狂热分子…？",
						"french": "Un fanatique… ?",
						"spanish": "¿Un fanático…?",
						"vietnamese": "Kẻ cuồng tín…?",
						"thai": "ผู้คลั่งไคล้…?",
						"hindi": "एक कट्टरपंथी…?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그의 연주가 도시의 질서를 깨고 있어요. 낡은 계약을 되살리려 하죠.",
						"english": "His performance is breaking the city's order. He's trying to revive an old pact.",
						"japanese": "彼の演奏が都市の秩序を乱しています。古い契約を復活させようとしているのです。",
						"chinese": "他的演奏正在打破城市的秩序。他正试图复活一份旧契约。",
						"french": "Sa performance brise l'ordre de la ville. Il essaie de raviver un ancien pacte.",
						"spanish": "Su actuación está rompiendo el orden de la ciudad. Está intentando revivir un antiguo pacto.",
						"vietnamese": "Tiết mục của hắn đang phá vỡ trật tự của thành phố. Hắn đang cố gắng hồi sinh một giao ước cũ.",
						"thai": "การแสดงของเขากำลังทำลายระเบียบของเมือง เขากำลังพยายามฟื้นคืนสัญญาเก่า",
						"hindi": "उसका प्रदर्शन शहर की व्यवस्था को भंग कर रहा है। वह एक पुराने समझौते को पुनर्जीवित करने की कोशिश कर रहा है।"
					}
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그 계약은 도시를 파멸로 이끌 겁니다. 막아야 해요.",
						"english": "That pact will lead the city to ruin. We must stop it.",
						"japanese": "その契約は都市を破滅に導くでしょう。止めなければなりません。",
						"chinese": "那个契约会将城市引向毁灭。我们必须阻止它。",
						"french": "Ce pacte mènera la ville à sa perte. Nous devons l'arrêter.",
						"spanish": "Ese pacto llevará a la ciudad a la ruina. Debemos detenerlo.",
						"vietnamese": "Giao ước đó sẽ dẫn thành phố đến sự hủy diệt. Chúng ta phải ngăn chặn nó.",
						"thai": "สัญญานั้นจะนำเมืองไปสู่ความพินาศ เราต้องหยุดมัน",
						"hindi": "वह समझौता शहर को बर्बादी की ओर ले जाएगा। हमें इसे रोकना होगा।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그럼… Memento를 막아야 하는 건가?",
						"english": "So… we have to stop Memento?",
						"japanese": "では…メメントを止めなければならないのか？",
						"chinese": "那么…我们必须阻止记忆体吗？",
						"french": "Alors… nous devons arrêter Memento ?",
						"spanish": "Entonces… ¿tenemos que detener a Memento?",
						"vietnamese": "Vậy… chúng ta phải ngăn chặn Memento sao?",
						"thai": "งั้น… เราต้องหยุด Memento เหรอ?",
						"hindi": "तो… क्या हमें मेमेंटो को रोकना होगा?"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						5,
						3
					],
					"speaker": "bex",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "거리의 사람들이 잊힌 노래를 흥얼거리는 걸 들었나요?",
						"english": "Have you heard people on the streets humming a forgotten song?",
						"japanese": "通りの人々が忘れられた歌を口ずさんでいるのを聞きましたか？",
						"chinese": "你有没有听到街上的人们哼唱一首被遗忘的歌？",
						"french": "Avez-vous entendu des gens dans les rues fredonner une chanson oubliée ?",
						"spanish": "¿Has oído a la gente en las calles tararear una canción olvidada?",
						"vietnamese": "Bạn có nghe thấy những người trên đường đang ngân nga một bài hát bị lãng quên không?",
						"thai": "คุณได้ยินคนตามท้องถนนฮัมเพลงที่ถูกลืมบ้างไหม?",
						"hindi": "क्या आपने सड़कों पर लोगों को एक भूला हुआ गीत गुनगुनाते सुना है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "…무슨 노래죠?",
						"english": "…What song?",
						"japanese": "…何の歌ですか？",
						"chinese": "…什么歌？",
						"french": "…Quelle chanson ?",
						"spanish": "…¿Qué canción?",
						"vietnamese": "…Bài hát gì?",
						"thai": "…เพลงอะไร?",
						"hindi": "…कौन सा गीत?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "'지켜지지 않는 맹세… 바보들의 행진…' 그런 가사들이에요.",
						"english": "\"Unkept vows… March of fools…\" Those are the lyrics.",
						"japanese": "「守られぬ誓い…愚か者たちの行進…」そんな歌詞です。",
						"chinese": "“未履行的誓言…愚人行进…” 就是这样的歌词。",
						"french": "\"Serments non tenus… Marche des fous…\" Ce sont les paroles.",
						"spanish": "\"Promesas incumplidas… Marcha de los necios…\" Esas son las letras.",
						"vietnamese": "\"Lời thề không giữ… Cuộc diễu hành của những kẻ ngốc…\" Đó là lời bài hát.",
						"thai": "\"คำสาบานที่ไม่ได้รักษา… ขบวนพาเหรดของคนโง่…\" นั่นคือเนื้อเพลง",
						"hindi": "\"अधूरे वादे… मूर्खों का मार्च…\" ये ऐसे बोल हैं।"
					},
					"speaker": "bex"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "Memento의 연주가 사람들의 마음에 불안을 심고 있는 거예요.",
						"english": "Memento's melody plants unease in people's hearts.",
						"japanese": "Mementoの演奏が人々の心に不安を植え付けているのです。",
						"chinese": "Memento的演奏正在人们心中播种不安。",
						"french": "La mélodie de Memento sème l'inquiétude dans le cœur des gens.",
						"spanish": "La música de Memento siembra la inquietud en los corazones de la gente.",
						"vietnamese": "Giai điệu của Memento đang gieo rắc bất an vào lòng người.",
						"thai": "บทเพลงของ Memento กำลังหว่านความไม่สบายใจในหัวใจของผู้คน",
						"hindi": "मेमेंटो का संगीत लोगों के दिलों में बेचैनी बो रहा है।"
					}
				},
				{
					"content": {
						"korean": "그는 과거의 망령을 불러내려 합니다.",
						"english": "He seeks to summon the specters of the past.",
						"japanese": "彼は過去の亡霊を呼び起こそうとしています。",
						"chinese": "他试图唤醒过去的亡灵。",
						"french": "Il tente d'invoquer les spectres du passé.",
						"spanish": "Él intenta invocar a los fantasmas del pasado.",
						"vietnamese": "Hắn ta đang cố gắng triệu hồi những bóng ma của quá khứ.",
						"thai": "เขากำลังพยายามเรียกวิญญาณจากอดีต",
						"hindi": "वह अतीत के भूतों को बुलाने की कोशिश कर रहा है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bex"
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "bex",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이제 되돌릴 수 없어요.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りできません。",
						"chinese": "现在已无法回头。",
						"french": "On ne peut plus revenir en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Giờ không thể quay đầu lại được nữa.",
						"thai": "ตอนนี้ย้อนกลับไม่ได้แล้ว",
						"hindi": "अब पीछे नहीं हटा जा सकता।"
					},
					"speaker": "bex"
				},
				{
					"content": {
						"korean": "무슨 뜻이죠…?",
						"english": "What do you mean...?",
						"japanese": "どういう意味ですか…？",
						"chinese": "你是什么意思…？",
						"french": "Que voulez-vous dire...?",
						"spanish": "¿Qué quieres decir...?",
						"vietnamese": "Ý bạn là gì...?",
						"thai": "หมายความว่าอะไร...?",
						"hindi": "आपका क्या मतलब है...?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "진실은 항상 대가를 요구하죠. Memento를 막는 것이 우리의 유일한 길이에요.",
						"english": "Truth always demands a price. Stopping Memento is our only path.",
						"japanese": "真実は常に代償を求めます。Mementoを止めるのが、私たちの唯一の道です。",
						"chinese": "真相总是需要付出代价。阻止Memento是我们唯一的出路。",
						"french": "La vérité exige toujours un prix. Arrêter Memento est notre seule voie.",
						"spanish": "La verdad siempre exige un precio. Detener a Memento es nuestro único camino.",
						"vietnamese": "Sự thật luôn đòi hỏi cái giá. Ngăn chặn Memento là con đường duy nhất của chúng ta.",
						"thai": "ความจริงมักเรียกร้องราคาเสมอ การหยุด Memento คือทางเดียวของเรา",
						"hindi": "सच हमेशा कीमत मांगता है। मेमेंटो को रोकना ही हमारा एकमात्र रास्ता है।"
					},
					"speaker": "bex"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "내가… 무엇을 해야 하죠…?",
						"english": "What... what should I do...?",
						"japanese": "私が…何をすればいいのでしょう…？",
						"chinese": "我…我该怎么做…？",
						"french": "Que... que dois-je faire...?",
						"spanish": "¿Qué... qué debo hacer...?",
						"vietnamese": "Tôi... tôi phải làm gì...?",
						"thai": "ฉัน...ควรทำอะไร...?",
						"hindi": "मैं… मुझे क्या करना चाहिए…?"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "당신은 강하니까. 이 도시의 희망이에요.",
						"english": "Because you are strong. You are this city's hope.",
						"japanese": "あなたは強いから。この都市の希望です。",
						"chinese": "因为你很强大。你是这座城市的希望。",
						"french": "Parce que vous êtes fort(e). Vous êtes l'espoir de cette ville.",
						"spanish": "Porque eres fuerte. Eres la esperanza de esta ciudad.",
						"vietnamese": "Vì bạn rất mạnh mẽ. Bạn là hy vọng của thành phố này.",
						"thai": "เพราะคุณแข็งแกร่ง คุณคือความหวังของเมืองนี้",
						"hindi": "क्योंकि तुम मजबूत हो। तुम इस शहर की उम्मीद हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "도시의 그림자가 모든 것을 집어삼켰다.",
						"english": "The city's shadow devoured everything.",
						"japanese": "都市の影が全てを飲み込んだ。",
						"chinese": "城市的阴影吞噬了一切。",
						"french": "L'ombre de la ville a tout dévoré.",
						"spanish": "La sombra de la ciudad devoró todo.",
						"vietnamese": "Bóng tối của thành phố đã nuốt chửng mọi thứ.",
						"thai": "เงาของเมืองกลืนกินทุกสิ่ง",
						"hindi": "शहर की परछाई ने सब कुछ निगल लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "진실은 언제나 고통스러운 법. 절망하라.",
						"english": "Truth always hurts. Despair.",
						"japanese": "真実は常に痛みを伴う。絶望せよ。",
						"chinese": "真相总是痛苦的。绝望吧。",
						"french": "La vérité est toujours douloureuse. Désespère.",
						"spanish": "La verdad siempre duele. Desespera.",
						"vietnamese": "Sự thật luôn đau đớn. Hãy tuyệt vọng đi.",
						"thai": "ความจริงมักจะเจ็บปวดเสมอ จงสิ้นหวังซะ",
						"hindi": "सत्य हमेशा दर्दनाक होता है। निराश हो जाओ।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not over yet...",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas encore… fini.",
						"spanish": "Aún no… ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบหรอก",
						"hindi": "अभी… खत्म नहीं हुआ है।"
					}
				},
				{
					"action": "enter",
					"speaker": "bex",
					"spot": [
						1,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"content": {
						"korean": "…아직 기회는 있어요. 다시 일어서야 해요.",
						"english": "...There's still a chance. We must rise again.",
						"japanese": "…まだチャンスはあります。また立ち上がらなければなりません。",
						"chinese": "…还有机会。必须重新站起来。",
						"french": "…Il y a encore une chance. Nous devons nous relever.",
						"spanish": "…Aún hay una oportunidad. Debemos levantarnos de nuevo.",
						"vietnamese": "…Vẫn còn cơ hội. Phải đứng dậy lần nữa.",
						"thai": "…ยังมีโอกาสอยู่ เราต้องลุกขึ้นอีกครั้ง",
						"hindi": "…अभी भी मौका है। हमें फिर से खड़ा होना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bex"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이것이 끝이라 생각하나… 새로운 그림자는… 이미 자라나고 있다…",
						"english": "Do you think this is the end…? A new shadow… is already growing…",
						"japanese": "これが終わりだと思うか…？新たな影は…もう育っている…",
						"chinese": "你以为这是结束吗…？新的阴影…早已滋生…",
						"french": "Pensez-vous que c'est la fin… ? Une nouvelle ombre… grandit déjà…",
						"spanish": "¿Crees que este es el final…? Una nueva sombra… ya está creciendo…",
						"vietnamese": "Ngươi nghĩ đây là kết thúc sao…? Một bóng tối mới… đã lớn dần rồi…",
						"thai": "คิดว่านี่คือจุดจบหรือ… เงาใหม่… กำลังเติบโตแล้ว…",
						"hindi": "क्या तुम्हें लगता है कि यह अंत है…? एक नई परछाई… पहले ही बढ़ रही है…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "….",
						"english": "….",
						"japanese": "…。",
						"chinese": "……",
						"french": "….",
						"spanish": "….",
						"vietnamese": "….",
						"thai": "….",
						"hindi": "…."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 그림자는 잠시 물러났다. 그러나 진실은 여전히 미궁 속에 있었다.",
						"english": "The city's shadow retreated for a moment. But the truth remained in a labyrinth.",
						"japanese": "都市の影は一時的に退いた。しかし真実は依然として迷宮の中にあった。",
						"chinese": "城市的阴影暂时退却了。但真相仍旧深陷迷宫。",
						"french": "L'ombre de la ville s'est retirée un instant. Mais la vérité restait dans un labyrinthe.",
						"spanish": "La sombra de la ciudad se retiró por un momento. Pero la verdad seguía en un laberinto.",
						"vietnamese": "Bóng tối của thành phố tạm thời rút lui. Nhưng sự thật vẫn còn trong mê cung.",
						"thai": "เงาของเมืองถอยไปชั่วขณะ แต่ความจริงยังคงอยู่ในเขาวงกต",
						"hindi": "शहर की परछाई कुछ देर के लिए पीछे हट गई। लेकिन सच्चाई अभी भी एक भूलभुलैया में थी।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "bex",
					"spot": [
						1,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"content": {
						"korean": "해냈군요… 당신 덕분에 도시가 조금은 안전해졌어요.",
						"english": "You did it… Thanks to you, the city is a little safer.",
						"japanese": "やりましたね… あなたのおかげで、都市は少し安全になりました。",
						"chinese": "你们做到了… 多亏了你们，这座城市稍微安全了一些。",
						"french": "Vous l'avez fait… Grâce à vous, la ville est un peu plus sûre.",
						"spanish": "Lo lograron… Gracias a ustedes, la ciudad está un poco más segura.",
						"vietnamese": "Bạn đã làm được… Nhờ bạn mà thành phố đã an toàn hơn một chút.",
						"thai": "คุณทำสำเร็จแล้ว… ต้องขอบคุณคุณ เมืองนี้ถึงได้ปลอดภัยขึ้นมาบ้าง",
						"hindi": "तुमने कर दिखाया… तुम्हारी वजह से शहर थोड़ा सुरक्षित हो गया है।"
					},
					"type": "speech",
					"emotion": "happy"
				},
				{
					"speaker": "bex",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "하지만 아직 끝이 아니에요. Memento… 그는 더 깊은 곳에 숨어있을 거예요.",
						"english": "But it's not over yet. Memento… He'll be hiding in a deeper place.",
						"japanese": "しかし、まだ終わりではありません。Memento… 彼はもっと深い場所に隠れているでしょう。",
						"chinese": "但这还没结束。Memento… 他会藏在更深的地方。",
						"french": "Mais ce n'est pas encore fini. Memento… Il se cache sûrement dans un endroit plus profond.",
						"spanish": "Pero aún no ha terminado. Memento… Él estará escondido en un lugar más profundo.",
						"vietnamese": "Nhưng vẫn chưa kết thúc đâu. Memento… Hắn sẽ trốn ở một nơi sâu hơn.",
						"thai": "แต่ยังไม่จบ Memento… เขาจะซ่อนอยู่ในที่ที่ลึกกว่านี้",
						"hindi": "लेकिन अभी खत्म नहीं हुआ है। मेमेंटो… वह किसी गहरी जगह पर छिपा होगा।"
					}
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "정체 모를 그림자가 어둠 속에서 거대한 모습을 드러냈다.",
						"english": "An unknown shadow revealed its colossal form in the darkness.",
						"japanese": "正体不明の影が、闇の中で巨大な姿を現した。",
						"chinese": "一个不明身份的影子在黑暗中展现出其巨大的身躯。",
						"french": "Une ombre inconnue a révélé sa forme colossale dans l'obscurité.",
						"spanish": "Una sombra desconocida reveló su forma colosal en la oscuridad.",
						"vietnamese": "Một bóng tối không rõ danh tính đã hiện hình khổng lồ trong bóng đêm.",
						"thai": "เงาปริศนาปรากฏกายมหึมาในความมืด",
						"hindi": "एक अज्ञात छाया ने अंधेरे में अपना विशाल रूप प्रकट किया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "어리석은 인간들… 잊힌 맹세는 결국 깨지리라.",
						"english": "Foolish mortals... forgotten vows will eventually break.",
						"japanese": "愚かな人間たちよ…忘れ去られた誓いは、いずれ破られるだろう。",
						"chinese": "愚蠢的人类…被遗忘的誓言终将被打破。",
						"french": "Mortels insensés… les serments oubliés finiront par être brisés.",
						"spanish": "Mortales necios... las promesas olvidadas finalmente se romperán.",
						"vietnamese": "Những kẻ phàm trần ngu ngốc... lời thề bị lãng quên cuối cùng sẽ bị phá vỡ.",
						"thai": "มนุษย์โง่เขลา...คำสาบานที่ถูกลืมเลือนจะถูกทำลายในที่สุด",
						"hindi": "मूर्ख मनुष्य… भूले हुए वादे अंततः टूटेंगे।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 Memento의 뒤에 있는 거야?",
						"english": "Are you behind Memento?",
						"japanese": "お前がMementoの背後にいるのか？",
						"chinese": "你就是Memento幕后的主使吗？",
						"french": "Es-tu derrière Memento ?",
						"spanish": "¿Estás detrás de Memento?",
						"vietnamese": "Ngươi đứng sau Memento à?",
						"thai": "แกอยู่เบื้องหลัง Memento รึเปล่า?",
						"hindi": "क्या तुम मेमेंटो के पीछे हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "나는 이 도시의 그림자. 모든 진실을 왜곡하는 자.",
						"english": "I am the city's shadow. The one who distorts all truth.",
						"japanese": "私はこの都市の影。全ての真実を歪める者。",
						"chinese": "我是这座城市的阴影。扭曲一切真相之人。",
						"french": "Je suis l'ombre de cette ville. Celui qui déforme toute vérité.",
						"spanish": "Soy la sombra de esta ciudad. El que distorsiona toda verdad.",
						"vietnamese": "Ta là bóng tối của thành phố này. Kẻ bóp méo mọi sự thật.",
						"thai": "ฉันคือเงาของเมืองนี้ ผู้บิดเบือนทุกความจริง",
						"hindi": "मैं इस शहर की परछाई हूँ। सभी सच्चाई को विकृत करने वाला।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						1,
						3
					],
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "어서 싸워요! 저자가 바로 모든 것을 조작하는 자예요!",
						"english": "Hurry, fight! He's the one manipulating everything!",
						"japanese": "早く戦って！あいつが全てを操る者よ！",
						"chinese": "快战斗！他就是操纵一切的人！",
						"french": "Vite, battez-vous ! C'est lui qui manipule tout !",
						"spanish": "¡Rápido, peleen! ¡Él es quien manipula todo!",
						"vietnamese": "Nhanh lên, chiến đấu! Hắn chính là kẻ thao túng mọi thứ!",
						"thai": "รีบสู้เลย! เขาคือผู้บงการทุกสิ่ง!",
						"hindi": "जल्दी लड़ो! वह सब कुछ हेरफेर करने वाला है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "bex"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "흥… 꼭두각시가 춤을 추는군.",
						"english": "Hmph… The puppets dance.",
						"japanese": "フン… 操り人形が踊っているな。",
						"chinese": "哼… 傀儡在跳舞。",
						"french": "Hum… Les marionnettes dansent.",
						"spanish": "Hmpf… Los títeres bailan.",
						"vietnamese": "Hừm… Những con rối đang nhảy múa.",
						"thai": "หึ… หุ่นเชิดกำลังเต้นรำ",
						"hindi": "हँ… कठपुतलियाँ नाच रही हैं।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상은… 용납 못 해!",
						"english": "No more… I won't tolerate it!",
						"japanese": "これ以上は… 許さない！",
						"chinese": "绝不能… 再容忍了！",
						"french": "Plus jamais… Je ne le tolérerai pas !",
						"spanish": "¡Ya no más… no lo toleraré!",
						"vietnamese": "Không thể chịu đựng thêm nữa!",
						"thai": "ไม่ยอมอีกแล้ว…!",
						"hindi": "अब और नहीं… मैं इसे बर्दाश्त नहीं करूँगा!"
					}
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"speaker": "bex",
					"action": "exit"
				}
			]
		}
	]
} as const;
