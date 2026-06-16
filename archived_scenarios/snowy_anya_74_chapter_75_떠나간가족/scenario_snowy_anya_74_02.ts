export const scenario_snowy_anya_74_02 = {
	"scenario_id": "snowy_anya_74_02",
	"order": 2,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라가 휩쓸고 간 정착지.",
			"얼어붙은 살림살이마다 시린 진실이 숨어 있었다.",
			"누군가 황급히 떠나버린 자리.",
			"그날의 흔적이, 모든 것을 말하고 있었다."
		],
		"english": [
			"A settlement ravaged by a snowstorm.",
			"Amidst the frozen belongings, a chilling truth lay hidden.",
			"The place where someone had hastily departed.",
			"The traces of that day spoke volumes."
		],
		"japanese": [
			"吹雪が吹き荒れた入植地。",
			"凍りついた家財道具のそれぞれに、冷たい真実が隠されていた。",
			"誰かが慌ただしく去っていった場所。",
			"その日の痕跡が、すべてを物語っていた。"
		],
		"chinese": [
			"暴风雪肆虐后的定居点。",
			"每一件冰冷的物品，都隐藏着一个令人心寒的真相。",
			"某人仓皇离去的地方。",
			"那天的痕迹，说明了一切。"
		],
		"french": [
			"Un campement ravagé par le blizzard.",
			"Derrière chaque bien gelé se cachait une froide vérité.",
			"L'endroit où quelqu'un était parti précipitamment.",
			"Les traces de ce jour-là en disaient long."
		],
		"spanish": [
			"Un asentamiento devastado por la ventisca.",
			"Detrás de cada objeto congelado, se escondía una escalofriante verdad.",
			"El lugar donde alguien se había marchado apresuradamente.",
			"Las huellas de aquel día lo decían todo."
		],
		"vietnamese": [
			"Một khu định cư bị bão tuyết càn quét.",
			"Đằng sau mỗi vật dụng đóng băng, một sự thật lạnh lùng ẩn giấu.",
			"Nơi ai đó đã vội vã rời đi.",
			"Dấu vết của ngày hôm đó nói lên tất cả."
		],
		"thai": [
			"ที่ตั้งรกรากที่ถูกพายุหิมะพัดถล่ม",
			"เบื้องหลังสิ่งของที่ถูกแช่แข็งทุกชิ้น ความจริงอันหนาวเหน็บซ่อนอยู่",
			"สถานที่ที่ใครบางคนจากไปอย่างเร่งรีบ",
			"ร่องรอยของวันนั้นเล่าเรื่องราวทั้งหมด"
		],
		"hindi": [
			"बर्फीले तूफान से तबाह हुई बस्ती।",
			"जमी हुई हर चीज़ में एक कड़वी सच्चाई छिपी थी।",
			"वह जगह जहाँ कोई जल्दबाजी में चला गया था।",
			"उस दिन के निशान सब कुछ बयां कर रहे थे।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "눈보라가 할퀸 땅, 낡은 정착지의 잔해가 모습을 드러냈다.",
						"english": "The land scarred by the snowstorm, the ruins of an old settlement emerged.",
						"japanese": "吹雪が荒らした大地に、古い定住地の残骸が姿を現した。",
						"chinese": "被暴风雪撕裂的大地，旧定居点的残骸浮现。",
						"french": "La terre éventrée par le blizzard, les vestiges d'un ancien campement sont apparus.",
						"spanish": "La tierra marcada por la ventisca, los restos de un antiguo asentamiento emergieron.",
						"vietnamese": "Miền đất bị bão tuyết tàn phá, tàn tích của một khu định cư cũ hiện ra.",
						"thai": "ดินแดนที่ถูกพายุหิมะทิ้งรอยแผลเป็น ซากปรักหักพังของถิ่นฐานเก่าแก่ปรากฏขึ้น",
						"hindi": "बर्फीले तूफान से बंजर हुई जमीन पर एक पुरानी बस्ती के अवशेष सामने आए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가… 그곳인가?",
						"english": "Is this... the place?",
						"japanese": "ここが… 例の場所か？",
						"chinese": "这里是……那个地方吗？",
						"french": "C'est... cet endroit ?",
						"spanish": "¿Es este... el lugar?",
						"vietnamese": "Đây có phải... nơi đó không?",
						"thai": "ที่นี่... คือที่นั่นหรือเปล่า?",
						"hindi": "क्या यह... वही जगह है?"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "bran"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "여길… 급하게 버리고 갔어.",
						"english": "They... abandoned this place in a hurry.",
						"japanese": "ここを… 急いで捨てて行ったんだ。",
						"chinese": "他们……匆忙地抛弃了这里。",
						"french": "Ils... ont abandonné cet endroit en hâte.",
						"spanish": "Lo... abandonaron apresuradamente.",
						"vietnamese": "Họ... bỏ lại nơi này trong vội vã.",
						"thai": "พวกเขา... ทิ้งที่นี่ไปอย่างเร่งรีบ",
						"hindi": "वे... इस जगह को जल्दी में छोड़ गए।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭘 보고 알아?",
						"english": "How do you know?",
						"japanese": "何を見てわかる？",
						"chinese": "你怎么知道的？",
						"french": "Comment le sais-tu ?",
						"spanish": "¿Cómo lo sabes?",
						"vietnamese": "Làm sao bạn biết?",
						"thai": "รู้ได้ยังไง?",
						"hindi": "तुम कैसे जानते हो?"
					},
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "bran",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "난폭한 눈보라가 닥쳤을 때, 모두 도망친 흔적이야.",
						"english": "These are traces of everyone fleeing when the violent snowstorm hit.",
						"japanese": "猛烈な吹雪が襲った時、皆が逃げ出した痕跡だ。",
						"chinese": "这是暴风雪来袭时，所有人仓皇逃离的痕迹。",
						"french": "Ce sont les traces de la fuite de tous lorsque la violente tempête de neige a frappé.",
						"spanish": "Son las huellas de todos huyendo cuando la violenta ventisca golpeó.",
						"vietnamese": "Đây là dấu vết mọi người đã bỏ chạy khi cơn bão tuyết dữ dội ập đến.",
						"thai": "นี่คือร่องรอยของการที่ทุกคนหนีไปเมื่อพายุหิมะรุนแรงพัดถล่ม",
						"hindi": "ये उस वक्त के निशान हैं जब बर्फीले तूफान आने पर सब भाग गए थे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 안야는?",
						"english": "Then what about Anya?",
						"japanese": "じゃあアーニャは？",
						"chinese": "那么安雅呢？",
						"french": "Et Anya, alors ?",
						"spanish": "¿Y Anya?",
						"vietnamese": "Vậy còn Anya thì sao?",
						"thai": "แล้วอันย่าล่ะ?",
						"hindi": "तो अन्या का क्या?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이상해. 살림살이가 그대로 흩어져 있어. 마치… 시간을 멈춘 듯이.",
						"english": "Strange. The belongings are scattered as if... time has stopped.",
						"japanese": "おかしい。家財道具がそのまま散らばっている。まるで…時間が止まったかのように。",
						"chinese": "奇怪。家什都散落着。仿佛…时间停止了一样。",
						"french": "Étrange. Les affaires sont éparpillées comme si... le temps s'était arrêté.",
						"spanish": "Extraño. Las pertenencias están esparcidas como si... el tiempo se hubiera detenido.",
						"vietnamese": "Kỳ lạ. Đồ đạc vẫn còn vương vãi. Cứ như… thời gian đã ngừng lại vậy.",
						"thai": "แปลกจัง. ของใช้ในบ้านยังคงกระจัดกระจายอยู่เลย ราวกับ…เวลาหยุดนิ่ง",
						"hindi": "अजीब है। सामान वैसे ही बिखरा पड़ा है। मानो... समय ठहर गया हो।"
					},
					"speaker": "bran"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"content": {
						"korean": "떠난 사람들이 두고 간 게 아니야.",
						"english": "It's not that people left them behind.",
						"japanese": "去った人々が置いていったものじゃない。",
						"chinese": "这不是离开的人留下的。",
						"french": "Ce n'est pas que les gens les ont laissés derrière eux.",
						"spanish": "No es que la gente los haya dejado atrás.",
						"vietnamese": "Không phải người ta bỏ lại đâu.",
						"thai": "ไม่ใช่ว่าคนที่จากไปทิ้งมันไว้",
						"hindi": "यह वो नहीं जो जाने वाले छोड़ गए।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What do you mean?",
						"japanese": "どういうことだ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "버릴 수 없어 버린 게 아니야. 버릴 시간도 없었던 거야.",
						"english": "They didn't abandon them because they couldn't. They didn't even have time to abandon them.",
						"japanese": "捨てられずに捨てたわけじゃない。捨てる時間もなかったんだ。",
						"chinese": "不是无法丢弃所以没丢。而是根本没时间丢弃。",
						"french": "Ils ne les ont pas abandonnés parce qu'ils ne pouvaient pas. Ils n'ont même pas eu le temps de les abandonner.",
						"spanish": "No los abandonaron porque no pudieran. Ni siquiera tuvieron tiempo de abandonarlos.",
						"vietnamese": "Không phải họ không thể bỏ đi. Mà là không có thời gian để bỏ đi.",
						"thai": "พวกเขาไม่ได้ทิ้งมันเพราะทิ้งไม่ได้ แต่ไม่มีเวลาที่จะทิ้งมันเลยต่างหาก",
						"hindi": "उन्होंने इन्हें इसलिए नहीं छोड़ा कि छोड़ नहीं सकते थे। उनके पास छोड़ने का समय ही नहीं था।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "황급하게…?",
						"english": "In a hurry...?",
						"japanese": "慌てて…？",
						"chinese": "慌忙地…？",
						"french": "Précipitamment… ?",
						"spanish": "¿A toda prisa...?",
						"vietnamese": "Trong vội vã…?",
						"thai": "รีบร้อน…?",
						"hindi": "जल्दबाजी में...?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "떠밀리듯 도망쳤지. 하지만… 모두가 도망친 건 아니야.",
						"english": "They fled as if pushed out. But... not everyone fled.",
						"japanese": "追われるように逃げたんだ。でも…全員が逃げたわけじゃない。",
						"chinese": "他们像是被迫逃走的。但是…不是所有人都逃走了。",
						"french": "Ils ont fui comme s'ils y avaient été contraints. Mais... tout le monde n'a pas fui.",
						"spanish": "Huyeron como si hubieran sido obligados. Pero... no todos huyeron.",
						"vietnamese": "Họ bỏ chạy như bị xua đuổi. Nhưng… không phải ai cũng chạy thoát.",
						"thai": "พวกเขาหนีไปราวกับถูกผลักไส แต่...ไม่ใช่ทุกคนที่หนีไป",
						"hindi": "वे ऐसे भागे जैसे उन्हें भगाया गया हो। लेकिन... सब नहीं भागे।"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "봐. 이 작은 발자국.",
						"english": "Look. These small footprints.",
						"japanese": "見て。この小さな足跡。",
						"chinese": "看。这小小的脚印。",
						"french": "Regarde. Ces petites empreintes.",
						"spanish": "Mira. Estas pequeñas huellas.",
						"vietnamese": "Nhìn này. Dấu chân nhỏ này.",
						"thai": "ดูสิ. รอยเท้าเล็กๆ นี่",
						"hindi": "देखो। ये छोटे पदचिह्न।"
					},
					"speaker": "bran"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "아이의 발자국이잖아.",
						"english": "They're a child's footprints.",
						"japanese": "子供の足跡じゃないか。",
						"chinese": "是孩子的脚印。",
						"french": "Ce sont des empreintes d'enfant.",
						"spanish": "Son huellas de un niño.",
						"vietnamese": "Đó là dấu chân trẻ con mà.",
						"thai": "นี่มันรอยเท้าเด็กนี่นา",
						"hindi": "ये बच्चे के पदचिह्न हैं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오두막 안으로 향했어. 하지만… 밖으로 나간 흔적은 없어.",
						"english": "They led into the cabin. But... there's no trace of them leaving.",
						"japanese": "小屋の中へ向かっている。でも…外へ出た形跡はない。",
						"chinese": "通往小屋里面。但是…没有出去的痕迹。",
						"french": "Elles mènent à l'intérieur de la cabane. Mais... il n'y a aucune trace de sortie.",
						"spanish": "Llevan al interior de la cabaña. Pero... no hay rastro de que hayan salido.",
						"vietnamese": "Chúng dẫn vào bên trong căn lều. Nhưng… không có dấu vết ra ngoài.",
						"thai": "มันมุ่งหน้าเข้าไปในกระท่อม แต่...ไม่มีร่องรอยการออกไปข้างนอกเลย",
						"hindi": "ये झोपड़ी के अंदर गए हैं। लेकिन... बाहर जाने का कोई निशान नहीं है।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 아이는…?",
						"english": "Then the child...?",
						"japanese": "じゃあ子供は…？",
						"chinese": "那孩子呢…？",
						"french": "Alors l'enfant… ?",
						"spanish": "¿Entonces el niño…?",
						"vietnamese": "Vậy đứa bé…?",
						"thai": "แล้วเด็กคนนั้น…?",
						"hindi": "तो बच्चा...?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "가족이… 아이를 두고 떠난 거야.",
						"english": "The family… abandoned the child.",
						"japanese": "家族が…子供を置いていったんだ。",
						"chinese": "家人…把孩子丢下了。",
						"french": "La famille… a abandonné l'enfant.",
						"spanish": "La familia… abandonó al niño.",
						"vietnamese": "Gia đình… đã bỏ lại đứa bé.",
						"thai": "ครอบครัว…ทิ้งเด็กไปแล้ว",
						"hindi": "परिवार… बच्चे को छोड़ गया।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "말도 안 돼…!",
						"english": "Unbelievable…!",
						"japanese": "まさか…！",
						"chinese": "不可能…！",
						"french": "Impensable… !",
						"spanish": "¡No puede ser…!",
						"vietnamese": "Không thể nào…!",
						"thai": "ไม่จริง…!",
						"hindi": "अविश्वसनीय…!"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 모두를 잃는 건… 마찬가지…",
						"english": "In the end… losing everyone… is the same…",
						"japanese": "結局…全てを失うのは…同じこと…",
						"chinese": "到头来…失去一切…都一样…",
						"french": "Au final… tout perdre… c'est la même chose…",
						"spanish": "Al final… perder a todos… es lo mismo…",
						"vietnamese": "Cuối cùng… mất đi tất cả… cũng vậy thôi…",
						"thai": "สุดท้าย…การสูญเสียทุกคน…ก็เหมือนกัน…",
						"hindi": "अंत में… सबको खोना… एक जैसा ही है…"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "끝난 게 아니야. 안야는 살아있어.",
						"english": "It's not over. Anya is alive.",
						"japanese": "終わってない。アーニャは生きている。",
						"chinese": "还没结束。安雅还活着。",
						"french": "Ce n'est pas fini. Anya est vivante.",
						"spanish": "No ha terminado. Anya está viva.",
						"vietnamese": "Chưa kết thúc đâu. Anya vẫn còn sống.",
						"thai": "ยังไม่จบ อันย่ารอดแล้ว",
						"hindi": "यह खत्म नहीं हुआ। अन्या जीवित है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 그림자는 진실을 품고 사라졌다. 그러나 남겨진 흔적은 지워지지 않았다.",
						"english": "The fallen shadow vanished with the truth. But the lingering traces remain indelible.",
						"japanese": "倒れた影は真実を抱いて消え去った。しかし、残された痕跡は消えなかった。",
						"chinese": "倒下的身影带着真相消逝了。然而，留下的痕迹却无法抹去。",
						"french": "L'ombre tombée a disparu avec la vérité. Mais les traces laissées sont indélébiles.",
						"spanish": "La sombra caída desapareció con la verdad. Pero las huellas dejadas son imborrables.",
						"vietnamese": "Bóng tối gục ngã đã biến mất cùng với sự thật. Nhưng những dấu vết còn lại thì không thể xóa nhòa.",
						"thai": "เงามืดที่ล้มลงได้หายไปพร้อมกับความจริง แต่ร่องรอยที่ทิ้งไว้ไม่ถูกลบเลือน",
						"hindi": "गिरी हुई परछाई सच के साथ गायब हो गई। लेकिन पीछे रह गए निशान मिटे नहीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "진실을 찾아봤자 뭐 해? 바뀌는 건 없어.",
						"english": "What's the point of seeking truth? Nothing will change.",
						"japanese": "真実を探したって、どうなる？何も変わらない。",
						"chinese": "寻找真相又如何？什么都不会改变。",
						"french": "À quoi bon chercher la vérité ? Rien ne changera.",
						"spanish": "¿De qué sirve buscar la verdad? Nada cambiará.",
						"vietnamese": "Tìm kiếm sự thật để làm gì? Chẳng có gì thay đổi cả.",
						"thai": "หาความจริงไปทำไม? ไม่มีอะไรเปลี่ยนแปลงหรอก",
						"hindi": "सच ढूंढने से क्या होगा? कुछ नहीं बदलेगा।"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가 꾸민 짓이냐?",
						"english": "Was this your doing?",
						"japanese": "お前が仕組んだのか？",
						"chinese": "这是你搞的鬼吗？",
						"french": "Est-ce ton œuvre ?",
						"spanish": "¿Fue obra tuya?",
						"vietnamese": "Đây là trò của ngươi à?",
						"thai": "นี่เป็นฝีมือแกงั้นเหรอ?",
						"hindi": "क्या यह तुम्हारी करतूत है?"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "그저… 자연의 섭리일 뿐.",
						"english": "It's merely… nature's will.",
						"japanese": "ただ…自然の摂理にすぎない。",
						"chinese": "这不过是…自然法则罢了。",
						"french": "C'est juste… la loi de la nature.",
						"spanish": "Es solo… la ley de la naturaleza.",
						"vietnamese": "Chỉ là… quy luật tự nhiên mà thôi.",
						"thai": "เป็นแค่…กฎแห่งธรรมชาติ",
						"hindi": "यह केवल… प्रकृति का विधान है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"duration_ms": 200,
					"action": "focus"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"content": {
						"korean": "이런 비극을….",
						"english": "Such a tragedy….",
						"japanese": "こんな悲劇を…。",
						"chinese": "如此悲剧…",
						"french": "Une telle tragédie…",
						"spanish": "Una tragedia así…",
						"vietnamese": "Một bi kịch như vậy…",
						"thai": "โศกนาฏกรรมเช่นนี้…",
						"hindi": "ऐसी त्रासदी…"
					},
					"emotion": "sad"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희도 곧 같은 처지가 될 거다.",
						"english": "You'll all soon share the same fate.",
						"japanese": "お前たちもじきに同じ運命を辿るだろう。",
						"chinese": "你们很快也会是同样的下场。",
						"french": "Vous subirez bientôt le même sort.",
						"spanish": "Pronto estaréis en la misma situación.",
						"vietnamese": "Ngươi cũng sẽ sớm lâm vào cảnh tương tự thôi.",
						"thai": "พวกเจ้าก็จะตกอยู่ในสภาพเดียวกันในไม่ช้า",
						"hindi": "तुम सबका भी जल्द यही हश्र होगा।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "포기해라. 너희도 그 아이처럼… 버려질 뿐.",
						"english": "Give up. You too, like that child... will just be abandoned.",
						"japanese": "諦めろ。お前たちも、あの子のように…捨てられるだけだ。",
						"chinese": "放弃吧。你们也会像那个孩子一样……被抛弃的。",
						"french": "Abandonnez. Vous aussi, comme cet enfant... serez juste abandonnés.",
						"spanish": "Ríndanse. Ustedes también, como ese niño... serán simplemente abandonados.",
						"vietnamese": "Từ bỏ đi. Các ngươi cũng sẽ như đứa trẻ đó… bị bỏ rơi mà thôi.",
						"thai": "ยอมแพ้ซะ พวกเจ้าเองก็เหมือนเด็กคนนั้น… จะถูกทอดทิ้งเท่านั้น",
						"hindi": "हार मान लो। तुम भी उस बच्चे की तरह… बस त्याग दिए जाओगे।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "절대… 멈추지 않아!",
						"english": "Never... stopping!",
						"japanese": "決して…止まらない！",
						"chinese": "绝不……停止！",
						"french": "Jamais… je n'arrêterai !",
						"spanish": "¡Nunca... me detendré!",
						"vietnamese": "Tuyệt đối… không dừng lại!",
						"thai": "จะไม่มีวัน… หยุด!",
						"hindi": "कभी नहीं… रुकूंगा!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15
		}
	]
} as const;
