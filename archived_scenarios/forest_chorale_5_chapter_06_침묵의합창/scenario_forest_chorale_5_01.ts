export const scenario_forest_chorale_5_01 = {
	"scenario_id": "forest_chorale_5_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"새소리도, 바람 소리도 멎은 숲.",
			"모든 소리가 빨려 들어간 침묵의 구역.",
			"고요함은 아름다웠지만, 동시에 불길했다.",
			"이곳을 지난 자는 돌아오지 못했다."
		],
		"english": [
			"The forest where even bird song and wind have ceased.",
			"A zone of silence where all sounds are swallowed.",
			"The stillness was beautiful, yet ominous.",
			"Those who passed through here never returned."
		],
		"japanese": [
			"鳥の声も風の音も止んだ森。",
			"全ての音が吸い込まれた沈黙の区域。",
			"静寂は美しかったが、同時に不吉だった。",
			"ここを過ぎた者は戻らなかった。"
		],
		"chinese": [
			"鸟鸣与风声都已停歇的森林。",
			"所有声音都被吞噬的寂静区域。",
			"宁静是美丽的，却又带着不祥。",
			"凡是经过此处者，无一返回。"
		],
		"french": [
			"La forêt où même le chant des oiseaux et le vent se sont tus.",
			"Une zone de silence où tous les sons sont aspirés.",
			"Le calme était magnifique, mais en même temps sinistre.",
			"Ceux qui ont traversé cet endroit ne sont jamais revenus."
		],
		"spanish": [
			"El bosque donde incluso el canto de los pájaros y el viento han cesado.",
			"Una zona de silencio donde todos los sonidos son absorbidos.",
			"La quietud era hermosa, pero a la vez ominosa.",
			"Quienes pasaron por aquí nunca regresaron."
		],
		"vietnamese": [
			"Khu rừng mà tiếng chim hót và gió cũng ngừng lặng.",
			"Vùng im lặng nơi mọi âm thanh đều bị hút vào.",
			"Sự tĩnh lặng thật đẹp, nhưng đồng thời cũng đầy điềm gở.",
			"Những người đã đi qua nơi này không bao giờ trở lại."
		],
		"thai": [
			"ป่าที่แม้แต่เสียงนกร้องและเสียงลมก็เงียบงัน",
			"เขตแดนแห่งความเงียบที่กลืนกินทุกสรรพเสียง",
			"ความสงบงันนั้นงดงาม แต่ก็เป็นลางร้ายในเวลาเดียวกัน",
			"ผู้ที่ผ่านพ้นไปที่นี่ไม่เคยหวนกลับมา"
		],
		"hindi": [
			"वह जंगल जहाँ चिड़ियों का चहचहाना और हवा भी थम गई है।",
			"खामोशी का वह इलाका जहाँ सभी आवाजें समा जाती हैं।",
			"शांति खूबसूरत थी, पर साथ ही अशुभ भी।",
			"जो यहाँ से गुजरे, कभी वापस नहीं लौटे।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "새소리도 바람도 멎은 숲.",
						"english": "The forest where bird song and wind have ceased.",
						"japanese": "鳥の声も風も止んだ森。",
						"chinese": "鸟鸣与风声都已停歇的森林。",
						"french": "La forêt où le chant des oiseaux et le vent se sont tus.",
						"spanish": "El bosque donde el canto de los pájaros y el viento han cesado.",
						"vietnamese": "Khu rừng mà tiếng chim hót và gió cũng ngừng lặng.",
						"thai": "ป่าที่แม้แต่เสียงนกร้องและเสียงลมก็เงียบงัน",
						"hindi": "वह जंगल जहाँ चिड़ियों का चहचहाना और हवा भी थम गई है।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "모든 소리가 빨려 들어간 침묵의 구역이었다.",
						"english": "It was a zone of silence where all sounds were swallowed.",
						"japanese": "全ての音が吸い込まれた沈黙の区域だった。",
						"chinese": "那是一个所有声音都被吞噬的寂静区域。",
						"french": "C'était une zone de silence où tous les sons étaient aspirés.",
						"spanish": "Era una zona de silencio donde todos los sonidos eran absorbidos.",
						"vietnamese": "Đó là một vùng im lặng nơi mọi âm thanh đều bị hút vào.",
						"thai": "มันเป็นเขตแดนแห่งความเงียบที่กลืนกินทุกสรรพเสียง",
						"hindi": "यह खामोशी का वह इलाका था जहाँ सभी आवाजें समा जाती थीं।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…이상하다. 너무 조용해.",
						"english": "...Strange. It's too quiet.",
						"japanese": "…おかしい。静かすぎる。",
						"chinese": "……奇怪。太安静了。",
						"french": "...Étrange. C'est trop silencieux.",
						"spanish": "...Extraño. Está demasiado silencioso.",
						"vietnamese": "...Lạ thật. Yên tĩnh quá.",
						"thai": "...แปลกจัง เงียบเกินไปแล้ว",
						"hindi": "...अजीब है। बहुत ज़्यादा शांति है।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						5,
						3
					],
					"speaker": "glen",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "여기, 내 발소리조차 안 들려.",
						"english": "Here, I can't even hear my own footsteps.",
						"japanese": "ここ、自分の足音さえ聞こえない。",
						"chinese": "这里，连我的脚步声都听不到。",
						"french": "Ici, je n'entends même pas mes propres pas.",
						"spanish": "Aquí, ni siquiera escucho mis propios pasos.",
						"vietnamese": "Ở đây, tôi còn không nghe thấy tiếng bước chân của mình.",
						"thai": "ที่นี่ ฉันไม่ได้ยินแม้แต่เสียงฝีเท้าของตัวเอง",
						"hindi": "यहाँ, मुझे अपने पैरों की आवाज़ तक नहीं सुनाई दे रही।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진짜네. 우리가 내는 소리도 다 사라지는 것 같아.",
						"english": "You're right. It's like all the sounds we make just disappear.",
						"japanese": "本当だ。私たちが立てる音も全部消えていくみたい。",
						"chinese": "真的耶。我们发出的声音好像都消失了。",
						"french": "C'est vrai. On dirait que tous les sons que nous faisons disparaissent.",
						"spanish": "Es cierto. Parece que todos los sonidos que hacemos simplemente desaparecen.",
						"vietnamese": "Đúng vậy. Dường như mọi âm thanh chúng ta tạo ra đều biến mất.",
						"thai": "จริงด้วย เสียงที่เราทำก็หายไปหมดเลย",
						"hindi": "सच में। ऐसा लगता है कि हमारी सभी आवाज़ें गायब हो रही हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "glen",
					"spot": [
						4,
						4
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 깊숙이 들어가는 느낌이야.",
						"english": "It feels like we're going deeper and deeper.",
						"japanese": "ますます奥へ入っていく感じだ。",
						"chinese": "感觉我们正越陷越深。",
						"french": "On dirait qu'on s'enfonce de plus en plus.",
						"spanish": "Se siente como si estuviéramos adentrándonos cada vez más.",
						"vietnamese": "Cảm giác như chúng ta đang đi sâu hơn và sâu hơn.",
						"thai": "รู้สึกเหมือนกำลังดำดิ่งลึกเข้าไปเรื่อยๆ",
						"hindi": "ऐसा लग रहा है कि हम और गहराई में जा रहे हैं।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "숨소리조차 거슬릴 정도의 고요함이야.",
						"english": "The silence is so profound, even breathing feels like a disturbance.",
						"japanese": "息遣いすら邪魔に感じるほどの静けさだ。",
						"chinese": "寂静得连呼吸都显得多余。",
						"french": "Le silence est tel que même ma respiration me dérange.",
						"spanish": "Un silencio tan profundo que hasta mi respiración parece molestar.",
						"vietnamese": "Sự tĩnh lặng đến mức ngay cả hơi thở cũng gây khó chịu.",
						"thai": "ความเงียบสงัดจนแม้แต่เสียงลมหายใจก็รู้สึกรบกวน",
						"hindi": "इतनी खामोशी है कि सांस लेना भी असहज लग रहा है।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "왠지 모르게… 불안해.",
						"english": "For some reason... I feel uneasy.",
						"japanese": "なぜだか… 不安だ。",
						"chinese": "不知为何… 感到不安。",
						"french": "Je ne sais pas pourquoi… mais je me sens mal à l'aise.",
						"spanish": "Por alguna razón... me siento inquieto.",
						"vietnamese": "Không hiểu sao… tôi cảm thấy bất an.",
						"thai": "ไม่รู้ทำไม… รู้สึกไม่สบายใจเลย",
						"hindi": "पता नहीं क्यों... बेचैनी हो रही है।"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"speaker": "glen",
					"spot": [
						3,
						4
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "고요함이 극한에 달하자, 감각은 더욱 예민해졌다.",
						"english": "As the silence deepened, my senses became sharper.",
						"japanese": "静寂が極限に達し、感覚はさらに研ぎ澄まされた。",
						"chinese": "寂静达到极致，感官也变得更加敏锐。",
						"french": "Le silence s'intensifiant, mes sens s'aiguisèrent.",
						"spanish": "Al intensificarse el silencio, mis sentidos se agudizaron.",
						"vietnamese": "Khi sự tĩnh lặng đạt đến cực điểm, các giác quan trở nên nhạy bén hơn.",
						"thai": "เมื่อความเงียบสงัดถึงขีดสุด ประสาทสัมผัสก็ยิ่งเฉียบคมขึ้น",
						"hindi": "जैसे-जैसे खामोशी गहरी होती गई, मेरी इंद्रियां और भी तीव्र होती गईं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "점점 더… 모든 소리가 사라지는 기분이야.",
						"english": "It feels like... all sounds are slowly fading away.",
						"japanese": "だんだんと… 全ての音が消えていくようだ。",
						"chinese": "仿佛… 所有的声音都在渐渐消失。",
						"french": "J'ai l'impression que… tous les sons disparaissent peu à peu.",
						"spanish": "Cada vez más... siento que todos los sonidos desaparecen.",
						"vietnamese": "Cứ như thể… mọi âm thanh đang dần biến mất.",
						"thai": "รู้สึกเหมือน… เสียงทั้งหมดกำลังค่อยๆ หายไป",
						"hindi": "ऐसा लग रहा है... जैसे सारी आवाज़ें धीरे-धीरे गायब हो रही हैं।"
					},
					"speaker": "glen",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여긴… 뭔가 잘못됐어.",
						"english": "Something's... wrong here.",
						"japanese": "ここは… 何かがおかしい。",
						"chinese": "这里… 有些不对劲。",
						"french": "Il y a… quelque chose qui ne va pas ici.",
						"spanish": "Aquí... algo no está bien.",
						"vietnamese": "Ở đây… có gì đó không ổn.",
						"thai": "ที่นี่… มีบางอย่างผิดปกติ",
						"hindi": "यहाँ... कुछ गड़बड़ है।"
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
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
						4
					],
					"speaker": "glen",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고요함은 탐험대의 모든 소리를 집어삼켰다.",
						"english": "The silence swallowed every sound of the expedition team.",
						"japanese": "静寂が探検隊の全ての音を飲み込んだ。",
						"chinese": "寂静吞噬了探险队所有的声音。",
						"french": "Le silence a englouti tous les bruits de l'équipe d'exploration.",
						"spanish": "El silencio engulló cada sonido del equipo de expedición.",
						"vietnamese": "Sự tĩnh lặng nuốt chửng mọi âm thanh của đoàn thám hiểm.",
						"thai": "ความเงียบกลืนกินทุกเสียงของคณะสำรวจ",
						"hindi": "खामोशी ने अभियान दल की हर आवाज़ को निगल लिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "glen",
					"content": {
						"korean": "발걸음 소리조차 들리지 않아… 마치 유령이 된 기분이야.",
						"english": "I can't even hear my footsteps... It feels like I've become a ghost.",
						"japanese": "足音すら聞こえない… まるで幽霊になった気分だ。",
						"chinese": "连脚步声都听不见… 仿佛变成了幽灵。",
						"french": "Je n'entends même pas mes pas… comme si j'étais un fantôme.",
						"spanish": "Ni siquiera oigo mis pasos... Me siento como un fantasma.",
						"vietnamese": "Ngay cả tiếng bước chân cũng không nghe thấy… Cứ như thể tôi đã trở thành một bóng ma.",
						"thai": "ไม่ได้ยินแม้แต่เสียงฝีเท้า… รู้สึกเหมือนกลายเป็นผีไปแล้ว",
						"hindi": "मेरे कदमों की आहट भी नहीं सुनाई दे रही... ऐसा लग रहा है जैसे मैं भूत बन गया हूँ।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…끝까지 가야만 해. 진실을 밝혀야 해.",
						"english": "...I must go to the end. I must uncover the truth.",
						"japanese": "…最後まで行かねばならない。真実を明らかにしなければ。",
						"chinese": "…我必须走到最后。必须揭示真相。",
						"french": "…Je dois aller jusqu'au bout. Je dois révéler la vérité.",
						"spanish": "...Debo llegar hasta el final. Debo desvelar la verdad.",
						"vietnamese": "…Tôi phải đi đến cùng. Phải phơi bày sự thật.",
						"thai": "…ต้องไปให้ถึงที่สุด ต้องเปิดเผยความจริง",
						"hindi": "मुझे अंत तक जाना होगा। मुझे सच्चाई उजागर करनी होगी।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이 숲의 가장 깊은 곳, 모든 소리가 사라진 침묵의 심장.",
						"english": "The deepest part of this forest, the heart of silence where all sounds vanish.",
						"japanese": "この森の最も深い場所、全ての音が消え去った沈黙の心臓。",
						"chinese": "这片森林最深处，所有声音都消失的寂静之心。",
						"french": "Le cœur du silence, au plus profond de cette forêt, où tous les sons ont disparu.",
						"spanish": "La parte más profunda de este bosque, el corazón del silencio donde todos los sonidos se desvanecen.",
						"vietnamese": "Nơi sâu thẳm nhất của khu rừng này, trái tim của sự im lặng nơi mọi âm thanh đều biến mất.",
						"thai": "ส่วนที่ลึกที่สุดของป่านี้ หัวใจแห่งความเงียบที่ทุกเสียงเลือนหาย",
						"hindi": "इस जंगल का सबसे गहरा हिस्सा, खामोशी का केंद्र जहां सारी आवाज़ें गायब हो जाती हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…왔는가. 나의 고요함을 방해하는 자들.",
						"english": "...You've come. Those who disturb my silence.",
						"japanese": "…来たか。我が静寂を乱す者たちよ。",
						"chinese": "…来了吗。打扰我宁静之人。",
						"french": "…Vous êtes venus. Vous qui troublez mon silence.",
						"spanish": "...Habéis llegado. Aquellos que perturban mi silencio.",
						"vietnamese": "…Ngươi đã đến. Kẻ quấy rầy sự tĩnh lặng của ta.",
						"thai": "…มาแล้วสินะ พวกที่มารบกวนความเงียบของข้า",
						"hindi": "आ गए तुम। वे जो मेरी खामोशी में खलल डालते हैं।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳은 영원한 안식. 너희의 소음은 필요 없어.",
						"english": "This is eternal rest. Your noise is not needed.",
						"japanese": "ここは永遠の安息の地。お前たちの騒音は不要だ。",
						"chinese": "此处乃永恒安息之地。无需汝等喧嚣。",
						"french": "C'est le repos éternel. Votre bruit n'est pas nécessaire.",
						"spanish": "Este es el descanso eterno. Vuestro ruido no es necesario.",
						"vietnamese": "Đây là an nghỉ vĩnh hằng. Tiếng ồn của các ngươi không cần thiết.",
						"thai": "ที่นี่คือการพักผ่อนชั่วนิรันดร์ เสียงของเจ้าไม่จำเป็น",
						"hindi": "यह शाश्वत शांति है। तुम्हारा शोरगुल अनावश्यक है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "네가… 모든 소리를 없앤 거야?",
						"english": "Did you… eliminate all sounds?",
						"japanese": "お前が…全ての音を消したのか？",
						"chinese": "是你…消除了所有声音吗？",
						"french": "C'est toi qui… as éliminé tous les sons ?",
						"spanish": "¿Fuiste tú quien… eliminó todos los sonidos?",
						"vietnamese": "Ngươi… đã loại bỏ mọi âm thanh sao?",
						"thai": "เจ้า… เป็นคนกำจัดเสียงทั้งหมดหรือ?",
						"hindi": "क्या तुमने… सारी आवाज़ें मिटा दीं?"
					}
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…나는 단지, 이 숲의 평화를 지키는 자. 너희가 모르는 고통에서 해방시켜줄 뿐.",
						"english": "...I am merely the guardian of this forest's peace. I merely free you from a suffering you do not know.",
						"japanese": "…私はただ、この森の平和を守る者。お前たちが知らぬ苦痛から解放してやるだけだ。",
						"chinese": "…我不过是此林和平的守护者。仅是将你们从未知苦痛中解放出来罢了。",
						"french": "...Je ne suis que le gardien de la paix de cette forêt. Je vous libère seulement d'une souffrance que vous ignorez.",
						"spanish": "...Solo soy el guardián de la paz de este bosque. Solo os libero de un sufrimiento que no conocéis.",
						"vietnamese": "…Ta chỉ là kẻ bảo vệ hòa bình của khu rừng này. Chỉ giải thoát các ngươi khỏi nỗi đau mà các ngươi không biết.",
						"thai": "...ข้าเป็นเพียงผู้พิทักษ์ความสงบของป่าแห่งนี้ แค่ปลดปล่อยพวกเจ้าจากความทุกข์ทรมานที่พวกเจ้าไม่รู้จักเท่านั้น",
						"hindi": "...मैं केवल इस जंगल की शांति का रक्षक हूँ। तुम्हें उस पीड़ा से मुक्त कर रहा हूँ जिसे तुम नहीं जानते।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야! 네가 사람들을 홀렸잖아!",
						"english": "What are you talking about! You enchanted the people!",
						"japanese": "何を言っているんだ！お前が人々を惑わしたんだろ！",
						"chinese": "你在说什么！是你迷惑了众人！",
						"french": "Qu'est-ce que tu racontes ! Tu as ensorcelé les gens !",
						"spanish": "¡De qué hablas! ¡Tú hechizaste a la gente!",
						"vietnamese": "Ngươi đang nói gì vậy! Ngươi đã mê hoặc mọi người!",
						"thai": "พูดอะไรน่ะ! เจ้าหลอกล่อผู้คนไม่ใช่รึไง!",
						"hindi": "क्या बक रहे हो! तुमने लोगों को मोह लिया है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 적은 사라졌다. 그러나 침묵은 숲에 스며들고 있었다.",
						"english": "The unknown foe vanished. But silence seeped into the forest.",
						"japanese": "正体不明の敵は消えた。しかし沈黙は森に染み渡っていた。",
						"chinese": "不知名的敌人消失了。然而，寂静却渗透了森林。",
						"french": "L'ennemi inconnu disparut. Mais le silence s'infiltrait dans la forêt.",
						"spanish": "El enemigo desconocido desapareció. Pero el silencio se filtraba en el bosque.",
						"vietnamese": "Kẻ thù không rõ danh tính đã biến mất. Nhưng sự im lặng lại len lỏi vào khu rừng.",
						"thai": "ศัตรูลึกลับหายไปแล้ว แต่ความเงียบกลับแทรกซึมไปทั่วป่า",
						"hindi": "अज्ञात शत्रु गायब हो गया। परन्तु, खामोशी जंगल में फैल रही थी।"
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "들리지 않는 속삭임이, 그들의 다음 발걸음을 이끌었다.",
						"english": "Unheard whispers guided their next steps.",
						"japanese": "聞こえない囁きが、彼らの次の足取りを導いた。",
						"chinese": "无声的低语，引导着他们的下一步。",
						"french": "Des murmures inaudibles guidèrent leurs pas suivants.",
						"spanish": "Susurros inaudibles guiaron sus siguientes pasos.",
						"vietnamese": "Những lời thì thầm không nghe thấy đã dẫn lối cho bước chân tiếp theo của họ.",
						"thai": "เสียงกระซิบที่มองไม่เห็นนำทางก้าวต่อไปของพวกเขา",
						"hindi": "अनसुनी फुसफुसाहटों ने उनके अगले कदमों को दिशा दी।"
					},
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "영원한 침묵이, 탐험대를 집어삼켰다.",
						"english": "Eternal silence swallowed the expedition team.",
						"japanese": "永遠の沈黙が、探検隊を飲み込んだ。",
						"chinese": "永恒的寂静，吞噬了探险队。",
						"french": "Le silence éternel engloutit l'équipe d'expédition.",
						"spanish": "El silencio eterno engulló al equipo de expedición.",
						"vietnamese": "Sự im lặng vĩnh cửu đã nuốt chửng đội thám hiểm.",
						"thai": "ความเงียบชั่วนิรันดร์กลืนกินคณะสำรวจ",
						"hindi": "शाश्वत खामोशी ने अभियान दल को निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…너희에게 고요가 필요하다.",
						"english": "...You need tranquility.",
						"japanese": "…お前たちには静寂が必要だ。",
						"chinese": "…你们需要宁静。",
						"french": "...Vous avez besoin de tranquillité.",
						"spanish": "...Necesitáis tranquilidad.",
						"vietnamese": "…Các ngươi cần sự tĩnh lặng.",
						"thai": "...พวกเจ้าต้องการความเงียบสงบ",
						"hindi": "...तुम्हें शांति की आवश्यकता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ、終わっていない。",
						"chinese": "…尚未结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "…Vẫn chưa kết thúc.",
						"thai": "...ยังไม่จบ",
						"hindi": "...अभी तक खत्म नहीं हुआ है।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
