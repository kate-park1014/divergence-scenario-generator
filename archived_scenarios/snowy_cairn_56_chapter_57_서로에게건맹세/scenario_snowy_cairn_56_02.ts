export const scenario_snowy_cairn_56_02 = {
	"scenario_id": "snowy_cairn_56_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"세계는 시험에 들었고, 우리는 나아갔다.",
			"돌무덤의 차가운 그림자를 벗어난 곳.",
			"이바르는 강함의 끝을 시험받는 전사.",
			"그의 맹세가, 이곳에서 시작된다."
		],
		"english": [
			"The world was tested, and we pressed on.",
			"Beyond the cold shadow of the stone tomb.",
			"Ivar, a warrior whose strength is tested to its limits.",
			"His vow begins here."
		],
		"japanese": [
			"世界は試され、我々は進んだ。",
			"石塚の冷たい影を逃れて。",
			"イヴァル、強さの極限を試される戦士。",
			"彼の誓いが、ここで始まる。"
		],
		"chinese": [
			"世界受到了考验，我们继续前进。",
			"远离石冢的寒冷阴影。",
			"伊瓦尔，一名接受力量极限考验的战士。",
			"他的誓言，在此开始。"
		],
		"french": [
			"Le monde fut mis à l'épreuve, et nous avançâmes.",
			"Au-delà de l'ombre froide du tumulus.",
			"Ivar, un guerrier dont la force est mise à l'épreuve jusqu'à ses limites.",
			"Son serment commence ici."
		],
		"spanish": [
			"El mundo fue puesto a prueba, y avanzamos.",
			"Más allá de la fría sombra de la tumba de piedra.",
			"Ivar, un guerrero cuya fuerza es puesta a prueba hasta el límite.",
			"Su juramento comienza aquí."
		],
		"vietnamese": [
			"Thế giới bị thử thách, và chúng ta tiến bước.",
			"Ngoài bóng tối lạnh lẽo của lăng mộ đá.",
			"Ivar, chiến binh thử thách giới hạn sức mạnh.",
			"Lời thề của hắn, bắt đầu từ đây."
		],
		"thai": [
			"โลกถูกทดสอบ และเราก้าวไปข้างหน้า",
			"พ้นจากเงามืดอันเย็นเยียบของสุสานหิน",
			"อิวาร์ นักรบผู้ถูกทดสอบความแข็งแกร่งถึงขีดสุด",
			"คำสาบานของเขา เริ่มต้นที่นี่"
		],
		"hindi": [
			"दुनिया की परीक्षा हुई, और हम आगे बढ़े।",
			"पत्थर की कब्र की ठंडी छाया से परे।",
			"इवर, एक योद्धा जिसकी शक्ति की अंतिम सीमा तक परीक्षा हो रही है।",
			"उसकी प्रतिज्ञा, यहाँ से शुरू होती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤의 시험을 벗어난 작은 골. 잠시 숨을 고를 수 있었다.",
						"english": "A small valley beyond the tomb's trial. I could catch my breath for a moment.",
						"japanese": "石塚の試練を抜けた小さな谷。一時、息を整えることができた。",
						"chinese": "穿过石冢考验的小山谷。我得以暂时喘息。",
						"french": "Une petite vallée au-delà de l'épreuve du tumulus. J'ai pu reprendre mon souffle un instant.",
						"spanish": "Un pequeño valle más allá de la prueba de la tumba. Pude tomar un respiro por un momento.",
						"vietnamese": "Một thung lũng nhỏ thoát khỏi thử thách của lăng mộ. Ta có thể thở dốc một lúc.",
						"thai": "หุบเขาเล็ก ๆ พ้นจากการทดสอบของสุสาน. ข้าพเจ้าได้พักหายใจชั่วครู่",
						"hindi": "पत्थर की कब्र की परीक्षा से परे एक छोटी सी घाटी। मैं थोड़ी देर के लिए सांस ले सका।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…드디어 한숨 돌리네.",
						"english": "...Finally, a moment to breathe.",
						"japanese": "…ようやく一息つけるな。",
						"chinese": "…终于能松口气了。",
						"french": "...Enfin, un moment pour respirer.",
						"spanish": "...Finalmente, un respiro.",
						"vietnamese": "...Cuối cùng cũng thở phào nhẹ nhõm.",
						"thai": "...ในที่สุดก็ได้พักหายใจ",
						"hindi": "...आखिरकार, एक पल की राहत।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_1",
					"content": {
						"korean": "여기서 뭘 할 건데, 이바르?",
						"english": "What will you do here, Ivar?",
						"japanese": "ここで何をするつもりだ、イヴァル？",
						"chinese": "你打算在这里做什么，伊瓦尔？",
						"french": "Que feras-tu ici, Ivar ?",
						"spanish": "¿Qué harás aquí, Ivar?",
						"vietnamese": "Ngươi sẽ làm gì ở đây, Ivar?",
						"thai": "เจ้าจะทำอะไรที่นี่ อิวาร์?",
						"hindi": "तुम यहाँ क्या करोगे, इवर?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "숨을 고르라고? 나는 그런 건 모른다.",
						"english": "Catch my breath? I know no such thing.",
						"japanese": "息を整えろだと？そんなもの、私は知らぬ。",
						"chinese": "喘息？我不知道那是什么。",
						"french": "Reprendre mon souffle ? Je ne connais pas ça.",
						"spanish": "¿Tomar un respiro? No sé de eso.",
						"vietnamese": "Thở dốc à? Ta không biết thứ đó.",
						"thai": "พักหายใจรึ? ข้าไม่รู้จักสิ่งนั้น",
						"hindi": "सांस लेना? मैं ऐसी बात नहीं जानता।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "진정한 강함은, 쉬지 않는 투지에서 나온다.",
						"english": "True strength comes from unyielding fighting spirit.",
						"japanese": "真の強さは、休まぬ闘志から生まれる。",
						"chinese": "真正的力量，源于永不懈怠的斗志。",
						"french": "La vraie force naît d'un esprit combatif incessant.",
						"spanish": "La verdadera fuerza nace de un espíritu de lucha incansable.",
						"vietnamese": "Sức mạnh thực sự, đến từ ý chí chiến đấu không ngừng nghỉ.",
						"thai": "ความแข็งแกร่งที่แท้จริง มาจากจิตวิญญาณนักสู้ที่ไม่ยอมหยุดหย่อน",
						"hindi": "सच्ची शक्ति, बिना रुके लड़ने की भावना से आती है।"
					},
					"emotion": "base"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 추구하는 영광은 무엇이냐?",
						"english": "What glory do you seek?",
						"japanese": "お前が求める栄光は何だ？",
						"chinese": "你所追求的荣耀是什么？",
						"french": "Quelle gloire cherches-tu ?",
						"spanish": "¿Qué gloria buscas?",
						"vietnamese": "Vinh quang ngươi tìm kiếm là gì?",
						"thai": "เกียรติยศใดที่เจ้าแสวงหา?",
						"hindi": "तुम किस गौरव की तलाश में हो?"
					},
					"speaker": "ivar",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "영광…? 그런 건 생각해본 적 없어.",
						"english": "Glory...? I've never thought about such a thing.",
						"japanese": "栄光…？そんなこと、考えたこともない。",
						"chinese": "荣耀…？我从未考虑过那种事。",
						"french": "La gloire...? Je n'ai jamais pensé à ça.",
						"spanish": "¿Gloria...? Nunca he pensado en eso.",
						"vietnamese": "Vinh quang...? Tôi chưa từng nghĩ về điều đó.",
						"thai": "เกียรติยศ...? ฉันไม่เคยคิดเรื่องแบบนั้นเลย",
						"hindi": "महिमा...? मैंने कभी ऐसी बात सोची ही नहीं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "그럼 무엇을 위해 싸우는가? 나는 '승리' 그 자체를 위해 싸운다.",
						"english": "Then what do you fight for? I fight for 'victory' itself.",
						"japanese": "では何のために戦う？私は「勝利」そのもののために戦う。",
						"chinese": "那么你为何而战？我为‘胜利’本身而战。",
						"french": "Alors, pour quoi te bats-tu ? Je me bats pour la 'victoire' elle-même.",
						"spanish": "¿Entonces por qué luchas? Lucho por la 'victoria' misma.",
						"vietnamese": "Vậy ngươi chiến đấu vì điều gì? Ta chiến đấu vì 'chiến thắng' đó thôi.",
						"thai": "แล้วท่านสู้เพื่ออะไร? ข้าสู้เพื่อ 'ชัยชนะ' โดยแท้จริง",
						"hindi": "तो तुम किस लिए लड़ते हो? मैं 'जीत' के लिए ही लड़ता हूँ।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "…그게 다야?",
						"english": "...Is that all?",
						"japanese": "…それだけか？",
						"chinese": "…就这些？",
						"french": "...C'est tout ?",
						"spanish": "...¿Eso es todo?",
						"vietnamese": "...Chỉ vậy thôi sao?",
						"thai": "...แค่นั้นเองหรือ?",
						"hindi": "...बस इतना ही?"
					}
				},
				{
					"emotion": "base",
					"speaker": "ivar",
					"content": {
						"korean": "그게 전부다. 강함의 끝을 보기 위해서.",
						"english": "That's everything. To see the limits of strength.",
						"japanese": "それが全てだ。強さの果てを見るために。",
						"chinese": "那就是全部。为了看到力量的尽头。",
						"french": "C'est tout. Pour voir les limites de la puissance.",
						"spanish": "Eso es todo. Para ver el límite de la fuerza.",
						"vietnamese": "Đó là tất cả. Để thấy được tận cùng của sức mạnh.",
						"thai": "นั่นคือทั้งหมด เพื่อที่จะได้เห็นขีดสุดของความแข็งแกร่ง",
						"hindi": "बस यही सब कुछ है। शक्ति की पराकाष्ठा देखने के लिए।"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "우리의 길은 아직 멀다. 하지만 명예로운 길이다.",
						"english": "Our path is still long. But it is an honorable path.",
						"japanese": "我らの道はまだ遠い。だが、名誉ある道だ。",
						"chinese": "我们的路还很长。但那是一条光荣之路。",
						"french": "Notre chemin est encore long. Mais c'est un chemin honorable.",
						"spanish": "Nuestro camino aún es largo. Pero es un camino honorable.",
						"vietnamese": "Con đường của chúng ta còn dài. Nhưng đó là con đường danh dự.",
						"thai": "หนทางของเรายังอีกยาวไกล แต่มันเป็นหนทางอันทรงเกียรติ",
						"hindi": "हमारा रास्ता अभी बहुत लंबा है। लेकिन यह एक सम्मानजनक रास्ता है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "명예…?",
						"english": "Honor...?",
						"japanese": "名誉…？",
						"chinese": "荣誉…？",
						"french": "L'honneur...?",
						"spanish": "¿Honor...?",
						"vietnamese": "Danh dự...?",
						"thai": "เกียรติยศ...?",
						"hindi": "सम्मान...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 내 명예를 걸고 맹세한다.",
						"english": "I swear upon my honor.",
						"japanese": "私は我が名誉にかけて誓う。",
						"chinese": "我以我的荣誉起誓。",
						"french": "Je le jure sur mon honneur.",
						"spanish": "Juro por mi honor.",
						"vietnamese": "Ta thề trên danh dự của mình.",
						"thai": "ข้าขอสาบานด้วยเกียรติยศของข้า",
						"hindi": "मैं अपनी इज़्ज़त की कसम खाता हूँ।"
					},
					"speaker": "ivar"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "어떤 시련이 와도, 끝까지 함께 갈 것이다.",
						"english": "No matter what trials come, we will go together until the end.",
						"japanese": "どんな試練が来ようと、最後まで共に歩むだろう。",
						"chinese": "无论遇到何种考验，我们都将携手走到最后。",
						"french": "Quelles que soient les épreuves, nous irons ensemble jusqu'au bout.",
						"spanish": "Vengan las pruebas que vengan, iremos juntos hasta el final.",
						"vietnamese": "Dù thử thách nào đến, chúng ta sẽ cùng nhau đi đến cùng.",
						"thai": "ไม่ว่าการทดสอบใดจะมาถึง เราจะร่วมทางกันไปจนถึงที่สุด",
						"hindi": "कोई भी परीक्षा क्यों न आए, हम अंत तक साथ चलेंगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3",
					"content": {
						"korean": "…끝까지?",
						"english": "...Until the end?",
						"japanese": "…最後まで？",
						"chinese": "…到最后？",
						"french": "...Jusqu'au bout ?",
						"spanish": "...¿Hasta el final?",
						"vietnamese": "...Đến cùng sao?",
						"thai": "...จนถึงที่สุด?",
						"hindi": "...अंत तक?"
					}
				},
				{
					"content": {
						"korean": "이바르가 그런 말을 할 줄은 몰랐는데.",
						"english": "I didn't expect Ivar to say something like that.",
						"japanese": "イヴァルがそんなことを言うとはな。",
						"chinese": "没想到伊瓦尔会说出那种话。",
						"french": "Je ne m'attendais pas à ce qu'Ivar dise une chose pareille.",
						"spanish": "No esperaba que Ivar dijera algo así.",
						"vietnamese": "Không ngờ Ivar lại nói ra những lời như vậy.",
						"thai": "ไม่คิดเลยว่าไอฟาร์จะพูดแบบนั้น",
						"hindi": "मुझे उम्मीद नहीं थी कि इवर ऐसी बात कहेगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네 맹세, 진심이냐?",
						"english": "Is your oath sincere?",
						"japanese": "その誓い、本物か？",
						"chinese": "你的誓言，是真心吗？",
						"french": "Ton serment, est-il sincère ?",
						"spanish": "¿Es sincero tu juramento?",
						"vietnamese": "Lời thề của ngươi, có thật lòng không?",
						"thai": "คำสาบานของเจ้า จริงใจหรือ?",
						"hindi": "क्या तुम्हारी प्रतिज्ञा सच्ची है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "나 이바르는 거짓된 맹세는 하지 않는다.",
						"english": "I, Ivar, do not make false oaths.",
						"japanese": "このイヴァールは、偽りの誓いは立てぬ。",
						"chinese": "我伊瓦尔，从不做虚假的誓言。",
						"french": "Moi, Ivar, ne fais pas de faux serments.",
						"spanish": "Yo, Ivar, no hago juramentos falsos.",
						"vietnamese": "Ta, Ivar, không thề những lời dối trá.",
						"thai": "ข้า อิวาร์ ไม่เคยสาบานเท็จ",
						"hindi": "मैं, इवार, झूठी प्रतिज्ञाएँ नहीं करता।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "강함은 오직 진실에서 나온다.",
						"english": "Strength comes only from truth.",
						"japanese": "強さは真実からのみ生まれる。",
						"chinese": "力量只源于真实。",
						"french": "La force ne vient que de la vérité.",
						"spanish": "La fuerza solo proviene de la verdad.",
						"vietnamese": "Sức mạnh chỉ đến từ sự thật.",
						"thai": "พลังย่อมเกิดจากสัจจะเท่านั้น",
						"hindi": "शक्ति केवल सत्य से आती है।"
					},
					"speaker": "ivar",
					"type": "speech"
				},
				{
					"content": {
						"korean": "멀리, 희미한 푸른빛이 깜빡였다. 돌무덤의 숨결이었다.",
						"english": "Far off, a faint blue light flickered. It was the breath of the stone tomb.",
						"japanese": "遠くで、かすかな青い光が点滅した。それは石塚の息吹だった。",
						"chinese": "远处，微弱的蓝光闪烁着。那是石冢的呼吸。",
						"french": "Au loin, une faible lumière bleue clignotait. C'était le souffle du tumulus de pierre.",
						"spanish": "A lo lejos, una tenue luz azul parpadeaba. Era el aliento de la tumba de piedra.",
						"vietnamese": "Xa xa, một ánh sáng xanh mờ nhấp nháy. Đó là hơi thở của lăng mộ đá.",
						"thai": "ไกลออกไป แสงสีน้ำเงินจางๆ กะพริบ มันคือลมหายใจของหลุมศพหิน",
						"hindi": "दूर, एक धुंधली नीली रोशनी टिमटिमा रही थी। यह पत्थर के मकबरे की साँस थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…저 빛, 신경 쓰이는데.",
						"english": "...That light, it bothers me.",
						"japanese": "…あの光、気になるな。",
						"chinese": "……那道光，真让人在意。",
						"french": "...Cette lumière, ça m'inquiète.",
						"spanish": "...Esa luz, me molesta.",
						"vietnamese": "...Ánh sáng đó, thật đáng lo ngại.",
						"thai": "...แสงนั่น ชวนให้กังวลใจ",
						"hindi": "...वह रोशनी, मुझे परेशान कर रही है।"
					},
					"speaker": "character_4"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "크… 강함의 끝… 나도 거기… 가고 싶었는데….",
						"english": "Ugh... The pinnacle of strength... I wanted to reach it too...",
						"japanese": "くっ… 強さの極み… 私もそこに… 行きたかったのに…。",
						"chinese": "呃… 力量的极致… 我也想去那里…",
						"french": "Ugh... Le summum de la force... J'aurais voulu l'atteindre moi aussi...",
						"spanish": "Ugh... El culmen de la fuerza... Yo también quería llegar allí...",
						"vietnamese": "Ư... Đỉnh cao sức mạnh... Tôi cũng muốn đến đó...",
						"thai": "อึก... จุดสูงสุดของความแข็งแกร่ง... ฉันเองก็อยากไปที่นั่น...",
						"hindi": "उह... शक्ति की पराकाष्ठा... मैं भी वहाँ पहुँचना चाहता था..."
					},
					"speaker": "random_boss",
					"emotion": "sad"
				},
				{
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction"
				},
				{
					"emotion": "happy",
					"speaker": "ivar",
					"content": {
						"korean": "약속은 지켰다. 이게 우리 모두의 강함이다.",
						"english": "The promise is kept. This is the strength of us all.",
						"japanese": "約束は守った。これが私たち皆の強さだ。",
						"chinese": "诺言已兑现。这就是我们所有人的力量。",
						"french": "La promesse est tenue. C'est la force de nous tous.",
						"spanish": "La promesa está cumplida. Esta es la fuerza de todos nosotros.",
						"vietnamese": "Lời hứa đã được giữ. Đây là sức mạnh của tất cả chúng ta.",
						"thai": "รักษาสัญญาแล้ว นี่คือความแข็งแกร่งของพวกเราทุกคน",
						"hindi": "वादा निभाया गया। यही हम सबकी शक्ति है।"
					},
					"type": "speech"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "우리는 해냈어.",
						"english": "We did it.",
						"japanese": "私たちはやった。",
						"chinese": "我们成功了。",
						"french": "Nous l'avons fait.",
						"spanish": "Lo logramos.",
						"vietnamese": "Chúng ta đã làm được.",
						"thai": "เราทำได้แล้ว",
						"hindi": "हमने कर दिखाया।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "또 하나의 시험을 넘었다. 그러나 더 깊은 그림자가 그들을 기다리고 있었다.",
						"english": "Another trial overcome. Yet, a deeper shadow awaited them.",
						"japanese": "また一つの試練を乗り越えた。しかし、より深い影が彼らを待ち受けていた。",
						"chinese": "又一个考验被克服了。然而，更深的阴影正等待着他们。",
						"french": "Une autre épreuve surmontée. Pourtant, une ombre plus profonde les attendait.",
						"spanish": "Otra prueba superada. Sin embargo, una sombra más profunda los esperaba.",
						"vietnamese": "Một thử thách nữa đã vượt qua. Nhưng một bóng tối sâu hơn đang chờ đợi họ.",
						"thai": "ผ่านพ้นการทดสอบไปอีกครั้ง แต่เงาที่ลึกกว่ากำลังรอพวกเขาอยู่",
						"hindi": "एक और परीक्षा पार की। फिर भी, एक गहरा साया उनका इंतजार कर रहा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 힘 앞에, 그들의 맹세는 흔들리는가.",
						"english": "Before immense power, do their vows falter?",
						"japanese": "巨大な力の前に、彼らの誓いは揺らぐのか。",
						"chinese": "在巨大的力量面前，他们的誓言动摇了吗？",
						"french": "Face à une puissance immense, leurs serments vacillent-ils ?",
						"spanish": "Ante un poder inmenso, ¿flaquean sus promesas?",
						"vietnamese": "Trước sức mạnh to lớn, lời thề của họ có lung lay không?",
						"thai": "ต่อหน้าพลังอันมหาศาล คำสาบานของพวกเขาจะหวั่นไหวหรือไม่?",
						"hindi": "विशाल शक्ति के सामने, क्या उनके वादे डगमगाते हैं?"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "가소롭구나. 너희의 약속 따위, 이 강함 앞에선 부스러질 뿐.",
						"english": "How laughable. Your promises are mere dust before this strength.",
						"japanese": "愚かだな。お前たちの約束など、この強さの前では砕け散るだけだ。",
						"chinese": "真可笑。你们的承诺，在这股力量面前不过是灰尘。",
						"french": "Pitoyable. Vos promesses ne sont que poussière face à cette force.",
						"spanish": "Qué ridículo. Vuestras promesas no son más que polvo ante esta fuerza.",
						"vietnamese": "Thật nực cười. Lời hứa của các ngươi chỉ là cát bụi trước sức mạnh này.",
						"thai": "น่าขันยิ่งนัก คำสัญญาของพวกเจ้าเป็นเพียงธุลีต่อหน้าพลังนี้",
						"hindi": "कितना हास्यास्पद। तुम्हारे वादे इस शक्ति के सामने मात्र धूल हैं।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"speaker": "ivar",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "…아직 끝나지 않았다. 이바르의 맹세는 쉽게 부서지지 않아!",
						"english": "...It's not over yet. Ivar's vow won't break so easily!",
						"japanese": "…まだ終わっていない。イヴァルの誓いはそう簡単に砕けない！",
						"chinese": "…还没结束。伊瓦尔的誓言不会轻易破碎！",
						"french": "...Ce n'est pas encore fini. Le serment d'Ivar ne se brisera pas si facilement !",
						"spanish": "...Aún no ha terminado. ¡El juramento de Ivar no se romperá tan fácilmente!",
						"vietnamese": "...Chưa kết thúc đâu. Lời thề của Ivar sẽ không dễ dàng bị phá vỡ!",
						"thai": "...ยังไม่จบ คำสาบานของอิวาร์ไม่พังทลายง่ายๆ หรอก!",
						"hindi": "...अभी खत्म नहीं हुआ है। इवर का वादा इतनी आसानी से नहीं टूटेगा!"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "다시 일어서야 해.",
						"english": "We must rise again.",
						"japanese": "再び立ち上がらなければならない。",
						"chinese": "我们必须再次站起来。",
						"french": "Il faut se relever.",
						"spanish": "Debemos levantarnos de nuevo.",
						"vietnamese": "Phải đứng dậy một lần nữa.",
						"thai": "ต้องลุกขึ้นยืนอีกครั้ง",
						"hindi": "हमें फिर से खड़ा होना होगा।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the darkness.",
						"japanese": "闇の中から、巨大な影が姿を現した。",
						"chinese": "黑暗中，一个巨大的身影显露出来。",
						"french": "Une ombre gigantesque émergea des ténèbres.",
						"spanish": "Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Trong bóng tối, một cái bóng khổng lồ hiện ra.",
						"thai": "ในความมืด เงาร่างมหึมาปรากฏขึ้น",
						"hindi": "अँधेरे में, एक विशालकाय परछाई प्रकट हुई।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "내 영역에 발을 들인 어리석은 자들.",
						"english": "Foolish ones who stepped into my domain.",
						"japanese": "我が領域に足を踏み入れた愚か者め。",
						"chinese": "闯入我领域内的愚蠢之徒。",
						"french": "Les insensés qui ont mis le pied dans mon domaine.",
						"spanish": "Tontos que han pisado mi dominio.",
						"vietnamese": "Những kẻ ngu ngốc đã đặt chân vào lãnh địa của ta.",
						"thai": "เจ้าพวกโง่เขลาที่ก้าวเข้ามาในอาณาเขตของข้า",
						"hindi": "मूर्ख लोग जिन्होंने मेरे क्षेत्र में कदम रखा।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 맹세가, 얼마나 하찮은지 보여주마.",
						"english": "I shall show you how worthless your oaths are.",
						"japanese": "お前たちの誓いが、いかに取るに足らないものか見せてやろう。",
						"chinese": "我会让你们看看，你们的誓言有多么微不足道。",
						"french": "Je vous montrerai à quel point vos serments sont insignifiants.",
						"spanish": "Os mostraré cuán insignificantes son vuestros juramentos.",
						"vietnamese": "Ta sẽ cho các ngươi thấy, lời thề của các ngươi vô giá trị đến mức nào.",
						"thai": "ข้าจะแสดงให้เห็นว่าคำสาบานของพวกเจ้ามันไร้ค่าเพียงใด",
						"hindi": "मैं तुम्हें दिखाऊँगा कि तुम्हारी प्रतिज्ञाएँ कितनी तुच्छ हैं।"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"speaker": "ivar",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "ivar",
					"content": {
						"korean": "나는 강함의 끝을 보러 왔다. 네놈 따위가 막을 순 없다!",
						"english": "I came to witness the peak of strength. You can't stop me!",
						"japanese": "私は強さの極限を見に来たのだ。貴様ごときが止められるものか！",
						"chinese": "我是来见证力量的极限的。你这种家伙休想阻止我！",
						"french": "Je suis venu voir le summum de la force. Tu ne peux pas m'arrêter !",
						"spanish": "He venido a ver el límite de la fuerza. ¡Tú no puedes detenerme!",
						"vietnamese": "Ta đến đây để chứng kiến đỉnh cao của sức mạnh. Ngươi không thể ngăn cản ta!",
						"thai": "ข้ามาเพื่อจะได้เห็นจุดสูงสุดของพละกำลัง เจ้าอย่างข้าคงไม่อาจหยุดได้!",
						"hindi": "मैं शक्ति की पराकाष्ठा देखने आया हूँ। तुम जैसे लोग मुझे रोक नहीं सकते!"
					}
				},
				{
					"content": {
						"korean": "이바르 말이 맞아. 우린 약속했어.",
						"english": "Ivar is right. We made a promise.",
						"japanese": "イヴァルの言う通りだ。私たちは約束したんだ。",
						"chinese": "伊瓦尔说得对。我们已经约定好了。",
						"french": "Ivar a raison. Nous avons fait une promesse.",
						"spanish": "Ivar tiene razón. Hicimos una promesa.",
						"vietnamese": "Ivar nói đúng. Chúng ta đã hứa rồi.",
						"thai": "อิวาร์พูดถูก เราได้สัญญาไว้แล้ว",
						"hindi": "इवार सही कह रहा है। हमने वादा किया था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				}
			]
		}
	]
} as const;
