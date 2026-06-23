export const scenario_forest_eldoria_29_02 = {
	"scenario_id": "forest_eldoria_29_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"ela": {
			"id": "mon_24765cb2-6fc0-452e-8969-871a82349c70",
			"name": {
				"korean": "엘라",
				"english": "Ela",
				"japanese": "エラ",
				"chinese": "艾拉",
				"french": "Ela",
				"spanish": "Ela",
				"vietnamese": "Ela",
				"thai": "เอล่า",
				"hindi": "एला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/55d3e9ee-c589-40ab-dfa4-a658bbddd400/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/cfacc842-115e-4175-a7fa-3111a468ed00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲은 길을 잃은 자의 무덤이다.",
			"환영은 달콤했고, 속삭임은 잔인했다.",
			"사라진 기억, 사라지지 않는 비극.",
			"그 길 끝에서, 또 다른 희생자가 기다린다."
		],
		"english": [
			"The forest is a tomb for the lost.",
			"The illusion was sweet, the whispers cruel.",
			"Lost memories, an enduring tragedy.",
			"At the end of that path, another victim awaits."
		],
		"japanese": [
			"森は迷いし者の墓標だ。",
			"幻影は甘く、囁きは残酷だった。",
			"消え去った記憶、消えぬ悲劇。",
			"その道の果てで、また別の犠牲者が待つ。"
		],
		"chinese": [
			"森林是迷失者的坟墓。",
			"幻象曾是甜美的，低语却是残酷的。",
			"消失的记忆，不散的悲剧。",
			"在那条路的尽头，另一个受害者正在等待。"
		],
		"french": [
			"La forêt est la tombe de ceux qui sont perdus.",
			"L'illusion était douce, les murmures cruels.",
			"Des souvenirs perdus, une tragédie persistante.",
			"Au bout de ce chemin, une autre victime attend."
		],
		"spanish": [
			"El bosque es la tumba de los perdidos.",
			"La ilusión era dulce, los susurros crueles.",
			"Memorias perdidas, una tragedia que perdura.",
			"Al final de ese sendero, otra víctima espera."
		],
		"vietnamese": [
			"Rừng là nấm mồ của kẻ lạc lối.",
			"Ảo ảnh ngọt ngào, lời thì thầm tàn nhẫn.",
			"Ký ức đã mất, bi kịch không tan.",
			"Ở cuối con đường đó, một nạn nhân khác đang chờ đợi."
		],
		"thai": [
			"ป่าคือสุสานของผู้หลงทาง",
			"ภาพลวงตาช่างหอมหวาน เสียงกระซิบกลับโหดร้าย",
			"ความทรงจำที่หายไป โศกนาฏกรรมที่ไม่มีวันจาง",
			"ณ ปลายทางนั้น เหยื่อรายอื่นรออยู่"
		],
		"hindi": [
			"जंगल भटके हुए लोगों की कब्र है।",
			"भ्रम मधुर था, फुसफुसाहटें क्रूर थीं।",
			"खोई हुई यादें, एक चिरस्थायी त्रासदी।",
			"उस राह के अंत में, एक और शिकार इंतजार कर रहा है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "숲은 더욱 깊어졌다. 길을 잃은 자들의 환영이 떠돌았다.",
						"english": "The forest deepened. Phantoms of the lost roamed.",
						"japanese": "森はさらに深く。迷いし者たちの幻影がさまよっていた。",
						"chinese": "森林变得更深了。迷失者的幻影四处游荡。",
						"french": "La forêt s'épaississait. Les fantômes des perdus erraient.",
						"spanish": "El bosque se hizo más profundo. Los fantasmas de los perdidos vagaban.",
						"vietnamese": "Rừng càng sâu hơn. Ảo ảnh của những kẻ lạc lối lang thang.",
						"thai": "ป่าลึกขึ้นไปอีก วิญญาณของผู้หลงทางล่องลอย",
						"hindi": "जंगल और गहरा हो गया। भटके हुए लोगों के प्रेत घूम रहे थे।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가…어디지? 왠지 모르게 익숙해.",
						"english": "Where... am I? It feels strangely familiar.",
						"japanese": "ここは…どこだ？ なぜか見覚えがある。",
						"chinese": "这里…是哪里？不知为何，感觉很熟悉。",
						"french": "Où... suis-je ? Cela me semble étrangement familier.",
						"spanish": "¿Dónde... estoy? Se siente extrañamente familiar.",
						"vietnamese": "Đây… là đâu? Sao mà quen thuộc lạ.",
						"thai": "ที่นี่…ที่ไหน? ทำไมรู้สึกคุ้นเคยแปลกๆ",
						"hindi": "यह... कहाँ है? यह अजीब तरह से परिचित लग रहा है।"
					}
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					],
					"action": "enter",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"speaker": "ela",
					"content": {
						"korean": "아아, 햇살이 참 따뜻해. 마을 축제는 언제 시작하지?",
						"english": "Ah, the sunlight is so warm. When does the village festival begin?",
						"japanese": "ああ、日差しがとても暖かい。村の祭りはいつ始まる？",
						"chinese": "啊，阳光真温暖。村里的节日什么时候开始呢？",
						"french": "Ah, le soleil est si chaud. Quand le festival du village commence-t-il ?",
						"spanish": "Ah, la luz del sol es tan cálida. ¿Cuándo empieza la fiesta del pueblo?",
						"vietnamese": "A, nắng ấm thật. Hội làng khi nào thì bắt đầu nhỉ?",
						"thai": "อ่า แสงแดดช่างอบอุ่นเหลือเกิน เทศกาลหมู่บ้านจะเริ่มเมื่อไหร่กันนะ?",
						"hindi": "आह, धूप कितनी गर्म है। गाँव का त्योहार कब शुरू होगा?"
					}
				},
				{
					"content": {
						"korean": "저 사람…환영에 갇힌 건가?",
						"english": "Is that person... trapped in an illusion?",
						"japanese": "あの人…幻影に囚われているのか？",
						"chinese": "那个人…是陷入幻象了吗？",
						"french": "Cette personne... est-elle piégée dans une illusion ?",
						"spanish": "¿Esa persona... está atrapada en una ilusión?",
						"vietnamese": "Người đó… bị mắc kẹt trong ảo ảnh sao?",
						"thai": "คนนั้น…ติดอยู่ในภาพลวงตาหรือเปล่า?",
						"hindi": "क्या वह व्यक्ति... भ्रम में फँसा हुआ है?"
					},
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 1
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
					"action": "enter",
					"speaker": "ela"
				},
				{
					"emotion": "happy",
					"type": "speech",
					"content": {
						"korean": "모두가 웃고 있어. 아름다운 자장가도 들려와.",
						"english": "Everyone is smiling. I hear a beautiful lullaby too.",
						"japanese": "みんな笑ってる。美しい子守歌も聞こえる。",
						"chinese": "每个人都在笑。我还听到了美丽的摇篮曲。",
						"french": "Tout le monde sourit. J'entends aussi une belle berceuse.",
						"spanish": "Todos están sonriendo. También oigo una hermosa nana.",
						"vietnamese": "Ai cũng đang cười. Tôi còn nghe thấy một bài hát ru thật đẹp.",
						"thai": "ทุกคนกำลังยิ้ม ฉันได้ยินเสียงเพลงกล่อมเด็กที่ไพเราะด้วย",
						"hindi": "सब मुस्कुरा रहे हैं। मुझे एक सुंदर लोरी भी सुनाई दे रही है।"
					},
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "자장가? 난 아무것도 안 들리는데…",
						"english": "Lullaby? I don't hear anything...",
						"japanese": "子守歌？何も聞こえないけど…",
						"chinese": "摇篮曲？我什么也没听到啊…",
						"french": "Berceuse ? Je n'entends rien...",
						"spanish": "¿Nana? No oigo nada...",
						"vietnamese": "Hát ru à? Tôi không nghe thấy gì cả…",
						"thai": "เพลงกล่อมเด็ก? ฉันไม่ได้ยินอะไรเลยนะ…",
						"hindi": "लोरी? मुझे कुछ भी सुनाई नहीं दे रहा..."
					}
				},
				{
					"content": {
						"korean": "이 행복이 영원했으면 좋겠어.",
						"english": "I wish this happiness would last forever.",
						"japanese": "この幸せが永遠に続けばいいのに。",
						"chinese": "我希望这份幸福能永远持续下去。",
						"french": "J'aimerais que ce bonheur dure éternellement.",
						"spanish": "Ojalá esta felicidad durara para siempre.",
						"vietnamese": "Tôi ước hạnh phúc này sẽ kéo dài mãi mãi.",
						"thai": "ฉันหวังว่าความสุขนี้จะคงอยู่ตลอดไป",
						"hindi": "काश यह खुशी हमेशा के लिए बनी रहे।"
					},
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "하지만…숲이 뭔가 이상해.",
						"english": "But... the forest feels strange.",
						"japanese": "でも…森が何かおかしい。",
						"chinese": "但是…森林有点不对劲。",
						"french": "Mais... la forêt est étrange.",
						"spanish": "Pero... el bosque se siente extraño.",
						"vietnamese": "Nhưng... khu rừng có gì đó lạ.",
						"thai": "แต่...ป่ารู้สึกแปลกๆ",
						"hindi": "लेकिन... जंगल कुछ अजीब सा लग रहा है।"
					},
					"speaker": "character_any",
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
					"spot": [
						3,
						3
					],
					"type": "direction",
					"speaker": "ela",
					"action": "enter"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "균사체가…빛나고 있어. 숲의 심장이 뛰는 소리 같아.",
						"english": "The mycelium... it's glowing. It sounds like the forest's heart beating.",
						"japanese": "菌糸体が…光っている。森の心臓が脈打つ音のようだ。",
						"chinese": "菌丝体…它在发光。听起来像森林的心跳。",
						"french": "Le mycélium... il brille. On dirait le cœur de la forêt qui bat.",
						"spanish": "El micelio... está brillando. Suena como el corazón del bosque latiendo.",
						"vietnamese": "Hệ sợi nấm... nó đang phát sáng. Nghe như nhịp đập trái tim của khu rừng.",
						"thai": "เส้นใยเชื้อรา...มันกำลังเรืองแสง. เหมือนเสียงหัวใจของป่ากำลังเต้น",
						"hindi": "माइसीलियम... वह चमक रहा है। ऐसा लगता है जैसे जंगल का दिल धड़क रहा हो।"
					},
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "균사체? 어디에도 없는데…",
						"english": "Mycelium? It's nowhere to be found...",
						"japanese": "菌糸体？どこにもないのに…",
						"chinese": "菌丝体？哪里都没有啊…",
						"french": "Mycélium ? Il n'y en a nulle part...",
						"spanish": "¿Micelio? No hay por ningún lado...",
						"vietnamese": "Hệ sợi nấm? Không thấy ở đâu cả...",
						"thai": "เส้นใยเชื้อรา? ไม่มีที่ไหนเลย...",
						"hindi": "माइसीलियम? कहीं भी नहीं है..."
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "왜…아무도 날 보지 않지?",
						"english": "Why... does no one see me?",
						"japanese": "なぜ…誰も私を見ないの？",
						"chinese": "为什么…没有人看见我？",
						"french": "Pourquoi... personne ne me voit ?",
						"spanish": "¿Por qué... nadie me ve?",
						"vietnamese": "Tại sao... không ai nhìn thấy tôi?",
						"thai": "ทำไม...ไม่มีใครเห็นฉันเลย?",
						"hindi": "क्यों... कोई मुझे नहीं देख रहा?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저 사람…점점 더 현실과 멀어져 가.",
						"english": "That person... is drifting further from reality.",
						"japanese": "あの人…だんだん現実から遠ざかっている。",
						"chinese": "那个人…离现实越来越远了。",
						"french": "Cette personne... s'éloigne de plus en plus de la réalité.",
						"spanish": "Esa persona... se aleja cada vez más de la realidad.",
						"vietnamese": "Người đó... đang ngày càng xa rời thực tại.",
						"thai": "คนๆ นั้น...กำลังห่างไกลจากความเป็นจริงไปเรื่อยๆ",
						"hindi": "वह व्यक्ति... वास्तविकता से और दूर होता जा रहा है।"
					},
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "안 돼! 마을이…사라지고 있어!",
						"english": "No! The village... it's disappearing!",
						"japanese": "だめだ！村が…消えていく！",
						"chinese": "不！村庄…正在消失！",
						"french": "Non ! Le village... il disparaît !",
						"spanish": "¡No! El pueblo... ¡está desapareciendo!",
						"vietnamese": "Không! Làng... nó đang biến mất!",
						"thai": "ไม่นะ! หมู่บ้าน...มันกำลังหายไป!",
						"hindi": "नहीं! गाँव... वह गायब हो रहा है!"
					},
					"speaker": "ela"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "마을? 아무것도 없어.",
						"english": "Village? There's nothing there.",
						"japanese": "村？何もありませんよ。",
						"chinese": "村庄？什么都没有啊。",
						"french": "Village ? Il n'y a rien.",
						"spanish": "¿Pueblo? No hay nada.",
						"vietnamese": "Làng? Không có gì cả.",
						"thai": "หมู่บ้าน? ไม่มีอะไรเลย",
						"hindi": "गाँव? वहाँ कुछ भी नहीं है।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "차가운 바람이 불어왔다. '희생'… '봉인'… 잊혀진 속삭임이 들려왔다.",
						"english": "A cold wind blew. 'Sacrifice'... 'Seal'... Forgotten whispers were heard.",
						"japanese": "冷たい風が吹いた。「犠牲」…「封印」…忘れ去られた囁きが聞こえてきた。",
						"chinese": "一阵冷风吹来。'牺牲'...'封印'...遗忘的低语被听见了。",
						"french": "Un vent froid souffla. 'Sacrifice'... 'Scellé'... Des murmures oubliés furent entendus.",
						"spanish": "Un viento frío sopló. 'Sacrificio'... 'Sello'... Se escucharon susurros olvidados.",
						"vietnamese": "Một làn gió lạnh thổi qua. 'Hy sinh'... 'Phong ấn'... Những lời thì thầm bị lãng quên đã được nghe thấy.",
						"thai": "ลมหนาวพัดมา 'การเสียสละ'... 'การผนึก'... ได้ยินเสียงกระซิบที่ถูกลืมเลือน",
						"hindi": "एक ठंडी हवा चली। 'बलिदान'... 'मुहर'... भूली हुई फुसफुसाहटें सुनाई दीं।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "숲이 우리에게 무언가를 말하고 있어…",
						"english": "The forest is trying to tell us something...",
						"japanese": "森が私たちに何かを伝えようとしている…",
						"chinese": "森林正在告诉我们一些事情…",
						"french": "La forêt essaie de nous dire quelque chose...",
						"spanish": "El bosque está tratando de decirnos algo...",
						"vietnamese": "Khu rừng đang cố gắng nói với chúng ta điều gì đó...",
						"thai": "ป่ากำลังพยายามบอกอะไรบางอย่างกับเรา...",
						"hindi": "जंगल हमें कुछ बताने की कोशिश कर रहा है..."
					},
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "결국…모두가 잊을 것이다. …이 거대한 슬픔도.",
						"english": "In the end... everyone will forget. ...This immense sorrow, too.",
						"japanese": "結局…皆、忘れてしまうだろう。…この巨大な悲しみも。",
						"chinese": "最终…所有人都会忘记。…这份巨大的悲伤，也会。",
						"french": "Au final… tout le monde oubliera. …Même cette immense tristesse.",
						"spanish": "Al final… todos lo olvidarán. …Este inmenso dolor, también.",
						"vietnamese": "Cuối cùng… mọi người sẽ quên hết. …Cả nỗi buồn to lớn này nữa.",
						"thai": "ในที่สุด... ทุกคนก็จะลืมเลือนไป ...แม้แต่ความเศร้าอันยิ่งใหญ่นี้ด้วย",
						"hindi": "अंत में… सब भूल जाएंगे। …यह अपार दुख भी।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "사라졌어… 하지만 남은 건 고통뿐이야.",
						"english": "It vanished... but all that remains is pain.",
						"japanese": "消え去った…しかし残ったのは苦痛だけだ。",
						"chinese": "它消失了… 但留下的只有痛苦。",
						"french": "Ça a disparu… mais tout ce qui reste est douleur.",
						"spanish": "Desapareció… pero todo lo que queda es dolor.",
						"vietnamese": "Nó đã biến mất… nhưng tất cả còn lại chỉ là nỗi đau.",
						"thai": "มันหายไปแล้ว... แต่สิ่งที่เหลืออยู่มีแต่ความเจ็บปวด",
						"hindi": "वह गायब हो गया... लेकिन जो बचा है वह सिर्फ दर्द है।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 환영의 수호자. 그러나 숲은 더욱 깊은 곳으로 이들을 이끌었다. 진실은 아직 멀었다.",
						"english": "The guardian of the illusion fell. Yet the forest led them deeper. The truth was still far off.",
						"japanese": "倒れた幻影の守護者。しかし森は彼らをさらに深淵へと誘った。真実はまだ遠い。",
						"chinese": "幻象的守护者倒下了。然而，森林将他们引向更深处。真相仍然遥远。",
						"french": "Le gardien de l'illusion est tombé. Pourtant, la forêt les entraîna plus profondément. La vérité était encore lointaine.",
						"spanish": "El guardián de la ilusión cayó. Sin embargo, el bosque los llevó más profundo. La verdad aún estaba lejos.",
						"vietnamese": "Người bảo vệ ảo ảnh đã gục ngã. Tuy nhiên, khu rừng đã dẫn họ đi sâu hơn. Sự thật vẫn còn xa vời.",
						"thai": "ผู้พิทักษ์ภาพลวงตาล้มลง ทว่าป่ากลับนำพาพวกเขาไปสู่ที่ลึกยิ่งกว่าเดิม ความจริงยังคงห่างไกล",
						"hindi": "भ्रम का संरक्षक गिर गया। फिर भी जंगल उन्हें और गहरे ले गया। सत्य अभी भी दूर था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "공간이 뒤틀렸다. 정체 모를 그림자가 모습을 드러냈다.",
						"english": "The space warped. An unknown shadow appeared.",
						"japanese": "空間が歪んだ。正体不明の影が姿を現した。",
						"chinese": "空间扭曲了。一个不明的影子出现了。",
						"french": "L'espace se tordit. Une ombre inconnue apparut.",
						"spanish": "El espacio se distorsionó. Una sombra desconocida apareció.",
						"vietnamese": "Không gian vặn vẹo. Một bóng đen vô định xuất hiện.",
						"thai": "มิติได้บิดเบือนไป เงาปริศนาปรากฏขึ้น",
						"hindi": "अंतरिक्ष विकृत हो गया। एक अज्ञात छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "환영을 깨뜨리려 하지 마라. 이곳은 영원한 평화다.",
						"english": "Do not shatter the illusion. This is eternal peace.",
						"japanese": "幻影を打ち破ろうとするな。ここは永遠の平和だ。",
						"chinese": "不要打破幻象。这里是永恒的和平。",
						"french": "Ne brise pas l'illusion. C'est la paix éternelle.",
						"spanish": "No rompas la ilusión. Esto es paz eterna.",
						"vietnamese": "Đừng phá vỡ ảo ảnh. Đây là bình yên vĩnh hằng.",
						"thai": "อย่าทำลายภาพลวงตา ที่นี่คือความสงบอันนิรันดร์",
						"hindi": "इस भ्रम को मत तोड़ो। यह शाश्वत शांति है।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 평화가 아니야! 희생 위에 세워진 거짓된 기억일 뿐!",
						"english": "This isn't peace! Just false memories built on sacrifice!",
						"japanese": "これが平和だと！？犠牲の上に築かれた偽りの記憶に過ぎない！",
						"chinese": "这不是和平！这只是建立在牺牲之上的虚假记忆！",
						"french": "Ce n'est pas la paix ! Juste de faux souvenirs bâtis sur des sacrifices !",
						"spanish": "¡Esto no es paz! ¡Solo falsos recuerdos construidos sobre sacrificios!",
						"vietnamese": "Đây không phải bình yên! Chỉ là những ký ức giả dối được dựng nên từ sự hy sinh!",
						"thai": "นี่ไม่ใช่ความสงบสุข! เป็นเพียงความทรงจำจอมปลอมที่สร้างขึ้นบนการเสียสละ!",
						"hindi": "यह शांति नहीं है! यह सिर्फ बलिदान पर बनी झूठी यादें हैं!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "네가 감히 진실을 논하는가?",
						"english": "How dare you speak of truth?",
						"japanese": "貴様が、あえて真実を語るというのか？",
						"chinese": "你竟敢谈论真相？",
						"french": "Comment oses-tu parler de vérité ?",
						"spanish": "¿Cómo te atreves a hablar de la verdad?",
						"vietnamese": "Ngươi dám nói đến sự thật sao?",
						"thai": "เจ้ากล้าดียังไงถึงพูดเรื่องความจริง?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई सच बोलने की?"
					},
					"speaker": "random_boss"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "환영의 무게가 탐험대를 짓눌렀다.",
						"english": "The weight of the illusion crushed the expedition.",
						"japanese": "幻影の重みが探検隊を押し潰した。",
						"chinese": "幻象的重压压垮了探险队。",
						"french": "Le poids de l'illusion écrasa l'expédition.",
						"spanish": "El peso de la ilusión aplastó a la expedición.",
						"vietnamese": "Sức nặng của ảo ảnh đã đè bẹp đoàn thám hiểm.",
						"thai": "น้ำหนักของภาพลวงตากดทับคณะสำรวจ",
						"hindi": "भ्रम के भार ने अभियान दल को कुचल दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "고작 이 정도인가? 영원히 이곳에 갇혀라.",
						"english": "Is this all you've got? Be trapped here forever.",
						"japanese": "貴様らはこの程度か？永遠にここに囚われろ。",
						"chinese": "就这点本事吗？永远被困在这里吧。",
						"french": "Est-ce tout ce que vous avez ? Restez piégés ici pour toujours.",
						"spanish": "¿Esto es todo lo que tienes? Permanece atrapado aquí para siempre.",
						"vietnamese": "Chỉ có thế này thôi sao? Hãy bị giam cầm ở đây mãi mãi đi.",
						"thai": "มีแค่นี้รึ? จงถูกจองจำอยู่ที่นี่ชั่วนิรันดร์",
						"hindi": "बस इतना ही है? यहीं हमेशा के लिए फंसे रहो।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니…우린 멈추지 않아!",
						"english": "No... we won't stop!",
						"japanese": "いいえ…私たちは止まらない！",
						"chinese": "不…我们不会停止！",
						"french": "Non… nous ne nous arrêterons pas !",
						"spanish": "¡No… no nos detendremos!",
						"vietnamese": "Không… chúng ta sẽ không dừng lại!",
						"thai": "ไม่... เราจะไม่หยุด!",
						"hindi": "नहीं… हम नहीं रुकेंगे!"
					}
				}
			],
			"id": 15
		}
	]
} as const;
