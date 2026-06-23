export const scenario_snowy_cairn_98_04 = {
	"scenario_id": "snowy_cairn_98_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "또 하나의 작은 약속이 산산이 부서졌다.",
						"english": "Yet another small promise shattered.",
						"japanese": "また一つ、小さな約束が砕け散った。",
						"chinese": "又一个小小的诺言被粉碎了。",
						"french": "Encore une petite promesse brisée en mille morceaux.",
						"spanish": "Otra pequeña promesa se hizo añicos.",
						"vietnamese": "Lại một lời hứa nhỏ nữa tan vỡ.",
						"thai": "คำมั่นเล็กๆ อีกคำถูกทำลายลง",
						"hindi": "एक और छोटा वादा टूट गया।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "결국… 이렇게 되는 건가.",
						"english": "Is this... how it ends?",
						"japanese": "結局…こうなるのか。",
						"chinese": "最终…会变成这样吗？",
						"french": "Est-ce… ainsi que ça se termine ?",
						"spanish": "Al final... ¿así es como termina?",
						"vietnamese": "Cuối cùng… mọi chuyện lại thành ra thế này sao.",
						"thai": "สุดท้ายแล้ว... มันจะจบแบบนี้เหรอเนี่ย",
						"hindi": "आखिरकार... क्या यह ऐसा ही होगा?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "서로 믿자고 했잖아!",
						"english": "We said we'd trust each other!",
						"japanese": "互いに信じようって言ったじゃないか！",
						"chinese": "我们说过要互相信任的！",
						"french": "Nous avions dit que nous nous ferions confiance !",
						"spanish": "¡Dijimos que confiaríamos el uno en el otro!",
						"vietnamese": "Chúng ta đã nói sẽ tin tưởng lẫn nhau mà!",
						"thai": "เราบอกว่าจะเชื่อใจกันไม่ใช่เหรอ!",
						"hindi": "हमने कहा था कि हम एक-दूसरे पर भरोसा करेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이제 와서 무슨 소용이야.",
						"english": "What's the use now?",
						"japanese": "今更、何の意味があるんだ。",
						"chinese": "现在说这些又有什么用呢。",
						"french": "À quoi bon maintenant ?",
						"spanish": "¿De qué sirve ahora?",
						"vietnamese": "Bây giờ có ích gì nữa đâu.",
						"thai": "ตอนนี้มันจะมีประโยชน์อะไร",
						"hindi": "अब क्या फायदा?"
					},
					"emotion": "sad",
					"speaker": "character_2"
				},
				{
					"spot": [
						3,
						3
					],
					"speaker": "hild",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깨어진 맹세의 메아리가 들리는군.",
						"english": "I hear the echoes of a broken vow.",
						"japanese": "破られた誓いの残響が聞こえる。",
						"chinese": "我听到了破碎誓言的回响。",
						"french": "J'entends les échos d'un serment brisé.",
						"spanish": "Escucho los ecos de un juramento roto.",
						"vietnamese": "Tôi nghe thấy tiếng vọng của lời thề bị phá vỡ.",
						"thai": "ฉันได้ยินเสียงสะท้อนของคำสาบานที่แตกสลาย",
						"hindi": "मुझे टूटे हुए वादे की गूँज सुनाई देती है।"
					},
					"speaker": "hild"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"speaker": "hild",
					"action": "enter"
				},
				{
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "옛 탐험가들의 노래를 아나?",
						"english": "Do you know the song of the old explorers?",
						"japanese": "古き探検家たちの歌を知っているか？",
						"chinese": "你可知道古老探险家的歌谣？",
						"french": "Connais-tu le chant des anciens explorateurs ?",
						"spanish": "¿Conoces la canción de los antiguos exploradores?",
						"vietnamese": "Ngươi có biết bài ca của những nhà thám hiểm xưa không?",
						"thai": "เจ้ารู้จักเพลงของนักสำรวจเก่าแก่บ้างไหม?",
						"hindi": "क्या तुम पुराने खोजकर्ताओं का गीत जानते हो?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "노래?",
						"english": "A song?",
						"japanese": "歌？",
						"chinese": "歌？",
						"french": "Une chanson ?",
						"spanish": "¿Una canción?",
						"vietnamese": "Một bài hát?",
						"thai": "เพลงเหรอ?",
						"hindi": "एक गाना?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "약속을 어겨 얼어붙었다는… 비극의 노래지.",
						"english": "A tragic song, of being frozen for breaking a promise.",
						"japanese": "約束を破って凍りついた… 悲劇の歌さ。",
						"chinese": "一个悲剧之歌，关于违背诺言而被冰封的故事。",
						"french": "Une chanson tragique, celle d'être gelé pour avoir rompu une promesse.",
						"spanish": "Una canción trágica, de ser congelado por romper una promesa.",
						"vietnamese": "Một bài ca bi tráng, về việc bị đóng băng vì thất hứa.",
						"thai": "เพลงโศกนาฏกรรม เล่าถึงการถูกแช่แข็งเพราะผิดสัญญา",
						"hindi": "एक दुखद गीत, वादा तोड़ने के लिए जम जाने का।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "미신 같은 거 아니야?",
						"english": "Isn't that just a superstition?",
						"japanese": "それって迷信じゃないの？",
						"chinese": "那不就是迷信吗？",
						"french": "N'est-ce pas juste une superstition ?",
						"spanish": "¿No es eso solo una superstición?",
						"vietnamese": "Không phải đó chỉ là mê tín thôi sao?",
						"thai": "นั่นมันแค่เรื่องงมงายไม่ใช่เหรอ?",
						"hindi": "क्या यह सिर्फ एक अंधविश्वास नहीं है?"
					},
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 땅은 맹세를 기억하네.",
						"english": "This land remembers vows.",
						"japanese": "この地は誓いを覚えている。",
						"chinese": "这片土地记得誓言。",
						"french": "Cette terre se souvient des serments.",
						"spanish": "Esta tierra recuerda los juramentos.",
						"vietnamese": "Mảnh đất này ghi nhớ lời thề.",
						"thai": "ดินแดนแห่งนี้จดจำคำสาบาน",
						"hindi": "यह भूमि शपथों को याद रखती है।"
					},
					"emotion": "base",
					"speaker": "hild"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"speaker": "hild",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그들은 사소한 약속을 저버렸지.",
						"english": "They broke a trivial promise.",
						"japanese": "彼らはささいな約束を破った。",
						"chinese": "他们违背了一个微不足道的诺言。",
						"french": "Ils ont brisé une promesse insignifiante.",
						"spanish": "Ellos rompieron una promesa trivial.",
						"vietnamese": "Họ đã phá vỡ một lời hứa nhỏ nhặt.",
						"thai": "พวกเขาทำลายคำสัญญาเล็กๆ น้อยๆ",
						"hindi": "उन्होंने एक तुच्छ वादा तोड़ दिया।"
					},
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그게 왜 중요해?",
						"english": "Why does that matter?",
						"japanese": "それがどうして重要なんだ？",
						"chinese": "那有什么关系？",
						"french": "Pourquoi est-ce important ?",
						"spanish": "¿Por qué es eso importante?",
						"vietnamese": "Tại sao điều đó lại quan trọng?",
						"thai": "นั่นมันสำคัญยังไง?",
						"hindi": "यह क्यों मायने रखता है?"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "작은 균열이 거대한 빙하를 무너뜨리듯이.",
						"english": "Like a small crack brings down a giant glacier.",
						"japanese": "小さな亀裂が巨大な氷河を崩すように。",
						"chinese": "就像一个小裂缝能摧毁巨大的冰川一样。",
						"french": "Comme une petite fissure fait s'effondrer un glacier géant.",
						"spanish": "Como una pequeña grieta derrumba un glaciar gigante.",
						"vietnamese": "Giống như một vết nứt nhỏ làm sụp đổ một sông băng khổng lồ.",
						"thai": "เหมือนรอยร้าวเล็กๆ ที่ทำให้ธารน้ำแข็งขนาดมหึมาพังทลายลงมา",
						"hindi": "जैसे एक छोटी दरार एक विशाल ग्लेशियर को गिरा देती है।"
					},
					"speaker": "hild"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "자연의 분노는 그렇게 시작되는 거야.",
						"english": "That's how nature's wrath begins.",
						"japanese": "自然の怒りはそうして始まるのだ。",
						"chinese": "大自然的愤怒就是这样开始的。",
						"french": "C'est ainsi que la colère de la nature commence.",
						"spanish": "Así es como comienza la ira de la naturaleza.",
						"vietnamese": "Đó là cách cơn thịnh nộ của tự nhiên bắt đầu.",
						"thai": "ความโกรธเกรี้ยวของธรรมชาติเริ่มต้นแบบนั้นแหละ",
						"hindi": "प्रकृति का प्रकोप ऐसे ही शुरू होता है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"speaker": "character_4",
					"type": "speech",
					"content": {
						"korean": "지금 우리처럼…?",
						"english": "Like us now...?",
						"japanese": "今の私たちのように…？",
						"chinese": "就像现在的我们一样……？",
						"french": "Comme nous maintenant...?",
						"spanish": "¿Como nosotros ahora...?",
						"vietnamese": "Giống như chúng ta bây giờ...?",
						"thai": "เหมือนกับพวกเราตอนนี้...?",
						"hindi": "अब हमारे जैसा...?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						3
					],
					"action": "enter",
					"speaker": "hild"
				},
				{
					"speaker": "hild",
					"content": {
						"korean": "노래는 이렇게 끝난다네. '얼어붙은 심장, 영원한 고통으로…'.",
						"english": "The song ends like this: 'Frozen heart, to eternal torment...'",
						"japanese": "歌はこうして終わる。『凍てつく心、永遠の苦痛へと…』",
						"chinese": "这首歌是这样结束的：'冰封的心，永恒的折磨……'",
						"french": "La chanson se termine ainsi : 'Cœur gelé, vers un tourment éternel...'",
						"spanish": "La canción termina así: 'Corazón congelado, hacia el tormento eterno...'",
						"vietnamese": "Bài hát kết thúc như thế này: 'Trái tim băng giá, đến nỗi khổ muôn đời...'",
						"thai": "เพลงจบลงแบบนี้: 'หัวใจที่แข็งเป็นน้ำแข็ง สู่ความทุกข์ทรมานชั่วนิรันดร์...'",
						"hindi": "गीत ऐसे समाप्त होता है: 'जमा हुआ दिल, शाश्वत पीड़ा के लिए...'"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "hild",
					"emotion": "base",
					"content": {
						"korean": "깨어진 맹세는 돌이킬 수 없는 대가를 치렀지.",
						"english": "A broken vow demanded an irreversible price.",
						"japanese": "破られた誓いは、取り返しのつかない代償を払わせた。",
						"chinese": "破碎的誓言付出了无法挽回的代价。",
						"french": "Un vœu brisé a exigé un prix irréversible.",
						"spanish": "Un juramento roto cobró un precio irreversible.",
						"vietnamese": "Lời thề bị phá vỡ đã phải trả một cái giá không thể vãn hồi.",
						"thai": "คำสาบานที่แตกหักต้องจ่ายด้วยราคาที่ไม่อาจย้อนคืนได้",
						"hindi": "टूटे हुए वादे की अपरिवर्तनीय कीमत चुकानी पड़ी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "그럼 우린…?",
						"english": "Then... what about us?",
						"japanese": "じゃあ、私たちは…？",
						"chinese": "那我们…？",
						"french": "Alors, nous… ?",
						"spanish": "Entonces nosotros...?",
						"vietnamese": "Vậy chúng ta...?",
						"thai": "แล้วเราล่ะ...?",
						"hindi": "तो हम...?"
					}
				},
				{
					"content": {
						"korean": "케언… 그 불길한 존재가 더 강해지는 것을 느낀다.",
						"english": "Cairn... I feel that ominous presence growing stronger.",
						"japanese": "ケアン…あの不吉な存在がさらに強くなっているのを感じる。",
						"chinese": "凯恩……我感觉到那个不祥的存在变得更强了。",
						"french": "Cairn… Je sens cette présence sinistre devenir plus forte.",
						"spanish": "Cairn… Siento que esa presencia siniestra se hace más fuerte.",
						"vietnamese": "Cairn... Ta cảm thấy sự hiện diện đáng ngại đó đang mạnh hơn.",
						"thai": "เคน... ฉันรู้สึกถึงการมีอยู่ของความหายนะที่แข็งแกร่งขึ้น",
						"hindi": "केर्न... मुझे उस अशुभ अस्तित्व के और मजबूत होने का अहसास हो रहा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "hild"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "도망칠 수 없어.",
						"english": "There's no escaping.",
						"japanese": "逃げられない。",
						"chinese": "无法逃脱。",
						"french": "On ne peut pas s'échapper.",
						"spanish": "No hay escape.",
						"vietnamese": "Không thể thoát.",
						"thai": "หนีไม่พ้น",
						"hindi": "बच नहीं सकते।"
					},
					"type": "speech",
					"emotion": "angry"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "불길한 기운이 방을 가득 채웠다. 얼어붙은 전설이 현실이 되는 순간이었다.",
						"english": "An ominous aura filled the room. It was the moment a frozen legend became reality.",
						"japanese": "不吉な気配が部屋を満たした。凍てついた伝説が現実となる瞬間だった。",
						"chinese": "不祥的气息弥漫了房间。那是冰封的传说变为现实的瞬间。",
						"french": "Une aura sinistre emplit la pièce. C'était le moment où une légende gelée devenait réalité.",
						"spanish": "Un aura ominosa llenó la habitación. Era el momento en que una leyenda congelada se hacía realidad.",
						"vietnamese": "Một luồng khí bất an tràn ngập căn phòng. Đó là khoảnh khắc một truyền thuyết đóng băng trở thành hiện thực.",
						"thai": "พลังงานอันน่ากลัวปกคลุมทั่วห้อง มันเป็นช่วงเวลาที่ตำนานอันเยือกแข็งกลายเป็นความจริง",
						"hindi": "एक अशुभ आभा ने कमरे को भर दिया। यह वह क्षण था जब एक जमी हुई किंवदंती वास्तविकता बन गई।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "또 다른 깨어진 맹세의 심장을 지닌 자들이여.",
						"english": "O, bearers of yet another broken vow.",
						"japanese": "またしても破られた誓いの心を持つ者たちよ。",
						"chinese": "噢，又一个破碎誓言的持有者们。",
						"french": "Ô, porteurs d'un autre vœu brisé.",
						"spanish": "¡Oh, portadores de otro juramento roto!",
						"vietnamese": "Hỡi những kẻ mang trái tim của một lời thề đã vỡ khác.",
						"thai": "โอ้ ผู้แบกรับคำสาบานที่แตกหักอีกครั้ง",
						"hindi": "हे, एक और टूटे हुए वादे के धारकों।"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 건가!",
						"english": "Did you orchestrate all this?!",
						"japanese": "お前がこの全てを仕組んだのか！",
						"chinese": "是你策划了这一切吗？！",
						"french": "C'est toi qui as orchestré tout ça ?!",
						"spanish": "¡¿Tú orquestaste todo esto?!",
						"vietnamese": "Ngươi đã sắp đặt tất cả chuyện này sao?!",
						"thai": "แกเป็นคนบงการเรื่องทั้งหมดนี้เหรอ!",
						"hindi": "क्या तुमने यह सब रचा है?!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "난 그저 깨어진 약속의 대가를 받을 뿐.",
						"english": "I merely collect the price of a broken promise.",
						"japanese": "私はただ、破られた約束の代償を受け取るだけだ。",
						"chinese": "我只是收取破碎承诺的代价罢了。",
						"french": "Je ne fais que collecter le prix d'une promesse brisée.",
						"spanish": "Simplemente cobro el precio de una promesa rota.",
						"vietnamese": "Ta chỉ đơn thuần thu hồi cái giá của một lời hứa đã vỡ.",
						"thai": "ฉันแค่เรียกเก็บค่าเสียหายจากสัญญาที่แตกหัก",
						"hindi": "मैं तो बस एक टूटे हुए वादे की कीमत वसूल रहा हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "hild",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "도망쳐! 저건 우리가 만든 절망이야!",
						"english": "Run! That's the despair we created!",
						"japanese": "逃げろ！あれは私たちが生み出した絶望だ！",
						"chinese": "快跑！那是我们制造的绝望！",
						"french": "Fuyez ! C'est le désespoir que nous avons créé !",
						"spanish": "¡Huyan! ¡Esa es la desesperación que creamos!",
						"vietnamese": "Chạy đi! Đó là nỗi tuyệt vọng do chúng ta tạo ra!",
						"thai": "หนีไป! นั่นคือความสิ้นหวังที่เราสร้างขึ้นมา!",
						"hindi": "भागो! वह हमारी बनाई हुई निराशा है!"
					},
					"emotion": "angry",
					"speaker": "hild"
				},
				{
					"duration_ms": 400,
					"type": "direction",
					"speaker": "hild",
					"action": "exit"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…늦었어.",
						"english": "...Too late.",
						"japanese": "…遅かった。",
						"chinese": "…太迟了。",
						"french": "...Trop tard.",
						"spanish": "...Demasiado tarde.",
						"vietnamese": "...Muộn rồi.",
						"thai": "...สายเกินไปแล้ว",
						"hindi": "...बहुत देर हो चुकी है।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…끝이 아니다. 또 다른 맹세가… 깨어질 것이다.",
						"english": "...This isn't the end. Another vow... will be broken.",
						"japanese": "「…終わりではない。また別の誓いが…破られるだろう。」",
						"chinese": "「…这不是结束。另一个誓言…将会被打破。」",
						"french": "...Ce n'est pas la fin. Un autre serment... sera brisé.",
						"spanish": "...No es el final. Otro juramento... será roto.",
						"vietnamese": "...Đây không phải kết thúc. Một lời thề khác... sẽ bị phá vỡ.",
						"thai": "...นี่ไม่ใช่จุดจบ คำสาบานอื่น... จะถูกทำลายลง",
						"hindi": "...यह अंत नहीं है। एक और शपथ... टूट जाएगी।"
					},
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…뭐라고?",
						"english": "...What?",
						"japanese": "「…なんだと？」",
						"chinese": "「…你说什么？」",
						"french": "...Quoi ?",
						"spanish": "...¿Qué?",
						"vietnamese": "...Cái gì?",
						"thai": "...ว่าไงนะ?",
						"hindi": "...क्या कहा?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쓰러진 {random_boss}. 하지만 맹세의 메아리는 더욱 짙어졌다.",
						"english": "{random_boss} falls. Yet the echo of the vow deepens.",
						"japanese": "「{random_boss}は倒れた。だが、誓いの残響はさらに色濃くなった。」",
						"chinese": "「{random_boss}倒下了。然而，誓言的回响却更加深沉了。」",
						"french": "{random_boss} est tombé. Pourtant, l'écho du serment s'est intensifié.",
						"spanish": "{random_boss} cae. Pero el eco del juramento se hizo más profundo.",
						"vietnamese": "{random_boss} ngã xuống. Tuy nhiên, tiếng vọng của lời thề càng trở nên đậm nét.",
						"thai": "{random_boss} ล้มลง แต่เสียงสะท้อนของคำสาบานกลับเข้มข้นขึ้น",
						"hindi": "{random_boss} गिर गया। फिर भी, शपथ की गूँज और गहरी हो गई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "과거는 반복되고 있었다. 절망은 끝나지 않았다.",
						"english": "The past was repeating itself. Despair had not ended.",
						"japanese": "「過去は繰り返されていた。絶望は終わっていなかった。」",
						"chinese": "「过去正在重演。绝望并未终结。」",
						"french": "Le passé se répétait. Le désespoir n'avait pas pris fin.",
						"spanish": "El pasado se repetía. La desesperación no había terminado.",
						"vietnamese": "Quá khứ đang lặp lại. Tuyệt vọng vẫn chưa kết thúc.",
						"thai": "อดีตกำลังซ้ำรอย ความสิ้นหวังยังไม่สิ้นสุด",
						"hindi": "अतीत खुद को दोहरा रहा था। निराशा खत्म नहीं हुई थी।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "나약한 자들이여. 너희의 맹세처럼… 너희의 희망도 얼어붙을 것이다.",
						"english": "Weaklings. Like your vows... your hope too shall freeze.",
						"japanese": "「弱き者たちよ。お前たちの誓いのように…お前たちの希望も凍てつくだろう。」",
						"chinese": "「弱者们。就像你们的誓言一样…你们的希望也将被冻结。」",
						"french": "Faibles. Comme vos serments... votre espoir aussi gèlera.",
						"spanish": "Débiles. Como vuestros juramentos... vuestra esperanza también se congelará.",
						"vietnamese": "Hỡi những kẻ yếu đuối. Giống như lời thề của các ngươi... hy vọng của các ngươi cũng sẽ đóng băng.",
						"thai": "พวกอ่อนแอเอ๋ย เช่นเดียวกับคำสาบานของพวกเจ้า... ความหวังของพวกเจ้าก็จะถูกแช่แข็งเช่นกัน",
						"hindi": "कमजोरों। तुम्हारी शपथों की तरह... तुम्हारी आशा भी जम जाएगी।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…아직 아니야. 절대 포기 안 해.",
						"english": "...Not yet. I won't give up.",
						"japanese": "「…まだだ。決して諦めない。」",
						"chinese": "「…还没。我绝不放弃。」",
						"french": "...Pas encore. Je n'abandonnerai jamais.",
						"spanish": "...Todavía no. No me rendiré.",
						"vietnamese": "...Chưa đâu. Tôi sẽ không bao giờ bỏ cuộc.",
						"thai": "...ยังไม่ถึงเวลา ฉันจะไม่ยอมแพ้เด็ดขาด",
						"hindi": "...अभी नहीं। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"작은 약속 하나가 깨어지자, 비극의 그림자가 드리웠다.",
			"희망은 점점 더 희미해지고, 절망이 눈덩이처럼 불어났다.",
			"고대 전설은 과거의 메아리인가, 다가올 파국의 예언인가.",
			"얼어붙은 대지 위, 깨어진 맹세의 대가는 차갑게 기다린다."
		],
		"english": [
			"A small promise broken, a shadow of tragedy cast.",
			"Hope grew dim, despair snowballed.",
			"Are ancient legends echoes of the past, or prophecies of impending doom?",
			"Upon the frozen land, the price of a broken vow coldly awaits."
		],
		"japanese": [
			"一つの小さな約束が破られ、悲劇の影が差した。",
			"希望は薄れ、絶望は雪だるま式に増えていった。",
			"古の伝説は過去の残響か、それとも迫りくる破滅の予言か。",
			"凍てつく大地の上、破られた誓いの代償は冷たく待つ。"
		],
		"chinese": [
			"一个微小的诺言被打破，悲剧的阴影笼罩而来。",
			"希望逐渐渺茫，绝望如滚雪球般膨胀。",
			"古老的传说，是过往的回响，还是未来浩劫的预言？",
			"在冰冻的大地上，违背誓言的代价在冷酷地等待着。"
		],
		"french": [
			"Une petite promesse brisée, l'ombre de la tragédie est tombée.",
			"L'espoir s'amenuisait, le désespoir s'amplifiait.",
			"Les légendes anciennes sont-elles des échos du passé, ou des prophéties d'une catastrophe imminente ?",
			"Sur la terre gelée, le prix du serment brisé attend froidement."
		],
		"spanish": [
			"Una pequeña promesa rota, una sombra de tragedia se cernió.",
			"La esperanza se desvanecía, la desesperación crecía como una bola de nieve.",
			"¿Son las leyendas antiguas ecos del pasado, o profecías de una catástrofe inminente?",
			"Sobre la tierra helada, el precio de una promesa rota espera fríamente."
		],
		"vietnamese": [
			"Một lời hứa nhỏ tan vỡ, bóng tối bi kịch bao trùm.",
			"Hy vọng ngày càng mờ nhạt, tuyệt vọng như tuyết lăn.",
			"Truyền thuyết cổ xưa là tiếng vọng của quá khứ, hay lời tiên tri về tai họa sắp đến?",
			"Trên vùng đất băng giá, cái giá của lời thề bị phá vỡ đang lạnh lẽo chờ đợi."
		],
		"thai": [
			"คำมั่นเล็กๆ ถูกทำลาย เงาแห่งโศกนาฏกรรมปกคลุม",
			"ความหวังริบหรี่ลง ความสิ้นหวังพอกพูนขึ้น",
			"ตำนานโบราณเป็นเพียงเสียงสะท้อนจากอดีต หรือคำทำนายถึงหายนะที่กำลังจะมาถึงกันแน่",
			"บนผืนดินเยือกแข็ง ผลของการผิดคำสาบานเฝ้ารออย่างเย็นชา"
		],
		"hindi": [
			"एक छोटा सा वादा टूटा, त्रासदी की छाया छा गई।",
			"आशा धूमिल होती गई, निराशा बढ़ती गई।",
			"क्या प्राचीन किंवदंतियाँ अतीत की गूँज हैं, या आने वाले विनाश की भविष्यवाणियाँ?",
			"जमी हुई धरती पर, टूटे हुए वादे की कीमत ठंडी तरह से इंतजार कर रही है।"
		]
	}
} as const;
