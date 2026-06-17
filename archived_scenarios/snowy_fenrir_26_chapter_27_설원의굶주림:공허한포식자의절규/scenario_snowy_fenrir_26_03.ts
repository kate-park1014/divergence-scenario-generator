export const scenario_snowy_fenrir_26_03 = {
	"scenario_id": "snowy_fenrir_26_03",
	"order": 3,
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
		},
		"eira": {
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
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "설원은 걷잡을 수 없이 얼어붙었다. 늑대가 삼킨 것은 단순한 생명이 아니었다.",
						"english": "The snowfield froze uncontrollably. What the wolf swallowed was not mere life.",
						"japanese": "雪原は止めどなく凍りついた。狼が呑み込んだのは、単なる命ではなかった。",
						"chinese": "雪原无止境地冻结。狼吞噬的并非单纯的生命。",
						"french": "La plaine enneigée gela de manière incontrôlable. Ce que le loup avait avalé n'était pas une simple vie.",
						"spanish": "El campo de nieve se congeló sin control. Lo que el lobo se tragó no era mera vida.",
						"vietnamese": "Cánh đồng tuyết đóng băng không thể kiểm soát. Thứ mà con sói nuốt chửng không chỉ là một sự sống đơn thuần.",
						"thai": "ทุ่งหิมะแข็งตัวอย่างควบคุมไม่ได้ สิ่งที่หมาป่ากลืนลงไปไม่ใช่แค่ชีวิตธรรมดา",
						"hindi": "बर्फीला मैदान अनियंत्रित रूप से जम गया। भेड़िये ने जो निगला, वह केवल जीवन नहीं था।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더 추워지고 있어… 주변의 온기가 사라지는 것 같아.",
						"english": "It's getting colder and colder... The warmth around us seems to be fading.",
						"japanese": "どんどん寒くなっている… 周囲の温かさが消えていくようだ。",
						"chinese": "越来越冷了……周围的暖意似乎正在消散。",
						"french": "Il fait de plus en plus froid... La chaleur autour de nous semble s'évanouir.",
						"spanish": "Cada vez hace más frío... El calor a nuestro alrededor parece desvanecerse.",
						"vietnamese": "Càng ngày càng lạnh... Dường như hơi ấm xung quanh đang biến mất.",
						"thai": "อากาศหนาวขึ้นเรื่อยๆ... ความอบอุ่นรอบตัวดูเหมือนจะหายไป",
						"hindi": "ठंड बढ़ती जा रही है... आसपास की गर्माहट गायब होती जा रही है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "...내 일격이 녀석을 키웠다니. 평생을 믿어온 내 사냥이...",
						"english": "...My strike made it grow. My lifelong hunt, that I believed in...",
						"japanese": "…俺の一撃がやつを育てたなんて。一生信じてきた俺の狩りが…",
						"chinese": "……我的攻击竟让它成长。我一生所信奉的狩猎……",
						"french": "...Mon coup l'a fait grandir. Ma chasse de toute une vie, à laquelle j'ai cru...",
						"spanish": "...Mi golpe lo hizo crecer. Mi caza de toda la vida, en la que creí...",
						"vietnamese": "...Cú đánh của tôi lại khiến nó lớn mạnh. Cuộc săn mà tôi đã tin tưởng cả đời...",
						"thai": "...การโจมตีของฉันทำให้มันเติบโต การล่าที่ฉันเชื่อมาตลอดชีวิต...",
						"hindi": "...मेरे वार ने उसे बड़ा कर दिया। मेरा जीवन भर का शिकार, जिस पर मुझे विश्वास था..."
					}
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter"
				},
				{
					"content": {
						"korean": "그 늑대는… 우리가 아는 생명체가 아니에요.",
						"english": "That wolf... it's not a creature we know.",
						"japanese": "あの狼は… 私たちが知っている生命体じゃない。",
						"chinese": "那只狼……不是我们所知的生物。",
						"french": "Ce loup... ce n'est pas une créature que nous connaissons.",
						"spanish": "Ese lobo... no es una criatura que conozcamos.",
						"vietnamese": "Con sói đó... không phải là sinh vật mà chúng ta biết.",
						"thai": "หมาป่าตัวนั้น... ไม่ใช่สิ่งมีชีวิตที่เรารู้จัก",
						"hindi": "वह भेड़िया... वह ऐसा प्राणी नहीं है जिसे हम जानते हैं।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "'배고파…' 그 절규가 자꾸 귓가에 맴돌아요.",
						"english": "'I'm hungry...' That desperate cry keeps echoing in my ears.",
						"japanese": "「お腹空いた…」その絶叫が、ずっと耳元に響いている。",
						"chinese": "“我好饿……”那绝望的呐喊声一直在耳边回荡。",
						"french": "« J'ai faim... » Ce cri désespéré résonne sans cesse à mes oreilles.",
						"spanish": "'Tengo hambre...' Ese grito desesperado sigue resonando en mis oídos.",
						"vietnamese": "'Tôi đói...' Tiếng kêu tuyệt vọng đó cứ văng vẳng bên tai tôi.",
						"thai": "ฉันหิว... เสียงกรีดร้องอันสิ้นหวังนั้นยังคงดังก้องอยู่ในหูของฉัน",
						"hindi": "'मुझे भूख लगी है...' वह हताश चीख मेरे कानों में गूंजती रहती है।"
					},
					"emotion": "sad"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "bran",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "그럼 우리는 무엇을 사냥해야 하는가. 허공을 쏘는 격이 아닌가.",
						"english": "So what should we hunt then? Isn't it like shooting into thin air?",
						"japanese": "では、我々は何を狩るべきなのか。虚空を撃つようなものではないか。",
						"chinese": "那么我们应该狩猎什么呢？这不就像是在虚空中射击吗？",
						"french": "Alors, que devrions-nous chasser ? N'est-ce pas comme tirer dans le vide ?",
						"spanish": "Entonces, ¿qué deberíamos cazar? ¿No es como disparar al aire?",
						"vietnamese": "Vậy thì chúng ta nên săn thứ gì? Chẳng phải đó là bắn vào hư không sao?",
						"thai": "แล้วเราควรล่าอะไรเล่า? มันไม่เหมือนกับการยิงเข้าไปในอากาศว่างเปล่าหรือไร",
						"hindi": "तो हमें क्या शिकार करना चाहिए? क्या यह हवा में गोली चलाने जैसा नहीं है?"
					}
				},
				{
					"content": {
						"korean": "늑대는 '결핍' 그 자체예요. 채워지지 않는 굶주림.",
						"english": "The wolf is 'lack' itself. An unfillable hunger.",
						"japanese": "狼は「欠乏」そのもの。満たされることのない飢えだ。",
						"chinese": "狼本身就是“匮乏”。无法满足的饥饿。",
						"french": "Le loup est le « manque » incarné. Une faim insatiable.",
						"spanish": "El lobo es la 'carencia' misma. Un hambre insaciable.",
						"vietnamese": "Con sói là 'thiếu thốn' tự thân. Một cơn đói không thể lấp đầy.",
						"thai": "หมาป่าคือ 'ความขาดแคลน' เอง ความหิวโหยที่ไม่มีวันอิ่ม",
						"hindi": "भेड़िया 'अभाव' ही है। एक अतृप्त भूख।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그럼 싸울 수도 없단 말이야?",
						"english": "So, we can't even fight it?",
						"japanese": "じゃあ、戦うこともできないってことか？",
						"chinese": "那么，连战斗都做不到吗？",
						"french": "Alors, on ne peut même pas le combattre ?",
						"spanish": "¿Entonces ni siquiera podemos luchar?",
						"vietnamese": "Vậy là không thể chiến đấu sao?",
						"thai": "งั้นเราก็สู้ไม่ได้เลยเหรอ?",
						"hindi": "तो, हम लड़ भी नहीं सकते?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "아니, 사냥이 아닌… 멈춰야 할 재앙이에요.",
						"english": "No, it's not a hunt... It's a disaster that must be stopped.",
						"japanese": "いや、狩りなんかじゃない… 止めなければならない災厄だ。",
						"chinese": "不，这不是狩猎……这是必须阻止的灾难。",
						"french": "Non, ce n'est pas une chasse... C'est une catastrophe qu'il faut arrêter.",
						"spanish": "No, no es una caza... Es un desastre que debemos detener.",
						"vietnamese": "Không, đây không phải là cuộc săn... Đây là một tai họa cần phải ngăn chặn.",
						"thai": "ไม่สิ นี่ไม่ใช่การล่า... มันคือหายนะที่ต้องหยุดยั้ง",
						"hindi": "नहीं, यह शिकार नहीं... यह एक ऐसी आपदा है जिसे रोका जाना चाहिए।"
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bran",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "평생의 감각이… 전부 틀렸단 말인가.",
						"english": "So, all my lifelong senses... were wrong?",
						"japanese": "一生の感覚が…全て間違っていたというのか。",
						"chinese": "难道我一生的感觉……全都错了？",
						"french": "Alors, toutes mes sensations d'une vie... étaient fausses ?",
						"spanish": "¿Así que todos los sentidos de mi vida... estaban equivocados?",
						"vietnamese": "Vậy là tất cả cảm giác cả đời tôi... đều sai rồi sao?",
						"thai": "งั้นความรู้สึกตลอดชีวิต... มันผิดหมดเลยเหรอ?",
						"hindi": "तो, मेरे जीवन भर के सभी इंद्रियां... गलत थीं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "늑대는 흡수하고, 자랄 뿐이에요. 사냥은… 끝이 없어요.",
						"english": "The wolf only absorbs and grows. The hunt... is endless.",
						"japanese": "狼は吸収し、ただ成長するだけだ。狩りは…終わりがない。",
						"chinese": "狼只会吸收和成长。狩猎……没有尽头。",
						"french": "Le loup ne fait qu'absorber et grandir. La chasse... est sans fin.",
						"spanish": "El lobo solo absorbe y crece. La caza... no tiene fin.",
						"vietnamese": "Con sói chỉ hấp thụ và lớn lên. Cuộc săn... không có hồi kết.",
						"thai": "หมาป่าแค่ดูดซับและเติบโต การล่า... ไม่มีที่สิ้นสุด",
						"hindi": "भेड़िया केवल अवशोषित करता है और बढ़ता है। शिकार... अंतहीन है।"
					},
					"speaker": "eira",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 설원 위를 덮었다. 또 다른 굶주림의 파편이었다.",
						"english": "A colossal shadow covered the snowfield. It was another fragment of hunger.",
						"japanese": "巨大な影が雪原を覆った。それは、また別の飢えの破片だった。",
						"chinese": "巨大的阴影笼罩了雪原。那是饥饿的又一个碎片。",
						"french": "Une ombre colossale recouvrit le champ de neige. C'était un autre fragment de faim.",
						"spanish": "Una sombra colosal cubrió el campo de nieve. Era otro fragmento de hambre.",
						"vietnamese": "Một bóng đen khổng lồ bao trùm cánh đồng tuyết. Đó là một mảnh vỡ khác của sự đói khát.",
						"thai": "เงาขนาดมหึมาปกคลุมทุ่งหิมะ มันคือเศษเสี้ยวความหิวโหยอีกชิ้น",
						"hindi": "एक विशाल छाया ने बर्फ के मैदान को ढक लिया। यह भूख का एक और टुकड़ा था।"
					}
				},
				{
					"type": "direction",
					"spot": [
						5,
						4
					],
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "…더… 내게 더 많은 것을 바쳐라.",
						"english": "...More... Sacrifice more to me.",
						"japanese": "…もっと…もっと多くのものを、我に捧げよ。",
						"chinese": "……更多……向我献上更多。",
						"french": "...Plus... Sacrifiez-moi davantage.",
						"spanish": "...Más... Ofréceme más.",
						"vietnamese": "...Thêm nữa... Hãy dâng hiến thêm cho ta.",
						"thai": "...อีก... จงถวายสิ่งต่างๆ ให้ข้าอีก",
						"hindi": "...और... मुझे और अधिक अर्पित करो।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "또 나타났어!",
						"english": "It appeared again!",
						"japanese": "また現れた！",
						"chinese": "又出现了！",
						"french": "Il est réapparu !",
						"spanish": "¡Apareció de nuevo!",
						"vietnamese": "Lại xuất hiện nữa rồi!",
						"thai": "มาอีกแล้ว!",
						"hindi": "यह फिर से प्रकट हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "exit",
					"duration_ms": 400,
					"speaker": "random_boss",
					"direction": "up",
					"type": "direction"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "bran",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"spot": [
						2,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "설원은 찢겨나가고, 얼어붙은 대지는 끊임없이 침식당했다.",
						"english": "The snowfield was torn apart, and the frozen earth was ceaselessly eroded.",
						"japanese": "雪原は引き裂かれ、凍てついた大地は絶え間なく侵食された。",
						"chinese": "雪原被撕裂，冰冻的大地不断被侵蚀。",
						"french": "Le champ de neige fut déchiré, et la terre gelée fut sans cesse érodée.",
						"spanish": "El campo de nieve fue desgarrado, y la tierra helada fue erosionada sin cesar.",
						"vietnamese": "Cánh đồng tuyết bị xé nát, và mặt đất đóng băng không ngừng bị xói mòn.",
						"thai": "ทุ่งหิมะถูกฉีกกระชาก และผืนดินที่แข็งตัวก็ถูกกัดเซาะไม่หยุดหย่อน",
						"hindi": "बर्फ का मैदान फट गया, और जमी हुई धरती लगातार कटती रही।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이제 사냥의 명예 따위는 중요하지 않다. 녀석을… 멈춰야 해.",
						"english": "The honor of the hunt no longer matters. We must... stop it.",
						"japanese": "もはや狩りの名誉など重要ではない。やつを…止めなければ。",
						"chinese": "狩猎的荣耀已经不重要了。必须……阻止它。",
						"french": "L'honneur de la chasse n'a plus d'importance. Nous devons... l'arrêter.",
						"spanish": "El honor de la caza ya no importa. Debemos... detenerlo.",
						"vietnamese": "Danh dự cuộc săn không còn quan trọng nữa. Chúng ta phải... ngăn chặn nó.",
						"thai": "เกียรติของการล่าไม่สำคัญอีกต่อไปแล้ว เราต้อง... หยุดมัน",
						"hindi": "शिकार का सम्मान अब कोई मायने नहीं रखता। हमें... इसे रोकना होगा।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "다른 방법이 있을 거예요. 싸움이 아닌, 본질을 멈추는.",
						"english": "There must be another way. Not fighting, but stopping its essence.",
						"japanese": "他の方法があるはずだ。戦うのではなく、その本質を止める方法が。",
						"chinese": "应该有其他办法。不是战斗，而是阻止其本质。",
						"french": "Il doit y avoir un autre moyen. Pas par le combat, mais en arrêtant son essence.",
						"spanish": "Debe haber otra forma. No luchando, sino deteniendo su esencia.",
						"vietnamese": "Phải có cách khác. Không phải chiến đấu, mà là ngăn chặn bản chất của nó.",
						"thai": "ต้องมีวิธีอื่น ไม่ใช่การต่อสู้ แต่เป็นการหยุดยั้งแก่นแท้ของมัน",
						"hindi": "कोई और तरीका होना चाहिए। लड़ना नहीं, बल्कि उसके सार को रोकना।"
					},
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "하지만… 시간이 없다고!",
						"english": "But... there's no time!",
						"japanese": "しかし… 時間がない！",
						"chinese": "可是……没时间了！",
						"french": "Mais... il n'y a plus le temps !",
						"spanish": "¡Pero... no hay tiempo!",
						"vietnamese": "Nhưng… không còn thời gian nữa!",
						"thai": "แต่... ไม่มีเวลาแล้ว!",
						"hindi": "लेकिन... समय नहीं है!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "굶주림의 근원. 거대한 존재가 탐험대를 노려봤다.",
						"english": "The source of hunger. A colossal entity glared at the expedition.",
						"japanese": "飢餓の根源。巨大な存在が探検隊を睨みつけた。",
						"chinese": "饥饿之源。一个巨大的存在瞪视着探险队。",
						"french": "La source de la faim. Une entité colossale fixa l'expédition.",
						"spanish": "La fuente del hambre. Una entidad colosal miró fijamente a la expedición.",
						"vietnamese": "Nguồn gốc của cơn đói. Một thực thể khổng lồ trừng mắt nhìn đoàn thám hiểm.",
						"thai": "ต้นกำเนิดแห่งความหิวโหย สิ่งมีชีวิตมหึมาจ้องมองคณะสำรวจ",
						"hindi": "भूख का स्रोत। एक विशाल इकाई ने अभियान दल को घूर कर देखा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "random_boss",
					"duration_ms": 500,
					"spot": [
						4,
						4
					],
					"type": "direction"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "너희의 존재 자체가… 나의 허기다.",
						"english": "Your very existence... is my hunger.",
						"japanese": "お前たちの存在そのものが… 私の飢えだ。",
						"chinese": "你们的存在本身……就是我的饥饿。",
						"french": "Votre existence même... est ma faim.",
						"spanish": "Vuestra misma existencia... es mi hambre.",
						"vietnamese": "Sự tồn tại của các ngươi… chính là cơn đói của ta.",
						"thai": "การมีอยู่ของพวกเจ้า... คือความหิวโหยของข้า",
						"hindi": "तुम्हारा अस्तित्व ही... मेरी भूख है।"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "더 이상 사냥감이 아니다. 네 놈은… 재앙이다.",
						"english": "No longer prey. You... are a calamity.",
						"japanese": "もはや獲物ではない。貴様は… 災厄だ。",
						"chinese": "不再是猎物。你……是灾厄。",
						"french": "Plus une proie. Tu... es une calamité.",
						"spanish": "Ya no eres presa. Tú... eres una calamidad.",
						"vietnamese": "Không còn là con mồi nữa. Ngươi… là một tai ương.",
						"thai": "ไม่ใช่เหยื่ออีกต่อไป เจ้า... คือหายนะ",
						"hindi": "अब शिकार नहीं। तुम... एक आपदा हो।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "이 싸움은 의미가 없어요. 하지만… 멈춰야 해.",
						"english": "This fight is meaningless. But... it must be stopped.",
						"japanese": "この戦いは無意味だ。だが… 止めなければならない。",
						"chinese": "这场战斗毫无意义。但是……必须阻止。",
						"french": "Ce combat est insensé. Mais... il faut l'arrêter.",
						"spanish": "Esta lucha no tiene sentido. Pero... debe ser detenida.",
						"vietnamese": "Trận chiến này vô nghĩa. Nhưng… phải ngăn chặn nó.",
						"thai": "การต่อสู้นี้ไร้ความหมาย แต่... ต้องหยุดมัน",
						"hindi": "यह लड़ाई अर्थहीन है। लेकिन... इसे रोकना होगा।"
					},
					"type": "speech",
					"emotion": "sad"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "굶주림의 파편이 잠시 침묵했다.",
						"english": "The Hunger Shard fell silent for a moment.",
						"japanese": "飢餓の破片が一時的に沈黙した。",
						"chinese": "饥饿的碎片暂时沉默了。",
						"french": "Le fragment de faim se tut un instant.",
						"spanish": "El fragmento de hambre enmudeció por un momento.",
						"vietnamese": "Mảnh vỡ của cơn đói tạm thời im lặng.",
						"thai": "เศษเสี้ยวแห่งความหิวโหยสงบนิ่งชั่วขณะ",
						"hindi": "भूख का टुकड़ा क्षण भर के लिए शांत हो गया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "끝이… 아닐 뿐이다. 나는… 항상 존재한다.",
						"english": "This isn't... the end. I... always exist.",
						"japanese": "終わりでは… ない。私は… 常に存在する。",
						"chinese": "这并非……结束。我……永远存在。",
						"french": "Ce n'est pas... la fin. J'existe... toujours.",
						"spanish": "Esto no es... el final. Yo... siempre existo.",
						"vietnamese": "Đây không phải… là kết thúc. Ta… luôn tồn tại.",
						"thai": "นี่ไม่ใช่... จุดจบ ข้า... ดำรงอยู่เสมอ",
						"hindi": "यह... अंत नहीं है। मैं... हमेशा मौजूद रहता हूँ।"
					},
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "단지 잠시 멈췄을 뿐. 녀석은 사라지지 않아.",
						"english": "It only stopped for a moment. It won't disappear.",
						"japanese": "ただ一時的に止まっただけだ。奴は消えたりしない。",
						"chinese": "它只是暂时停了下来。它不会消失。",
						"french": "Il n'a fait que s'arrêter un instant. Il ne disparaîtra pas.",
						"spanish": "Solo se detuvo un momento. No desaparecerá.",
						"vietnamese": "Nó chỉ tạm thời dừng lại. Nó sẽ không biến mất.",
						"thai": "มันหยุดชั่วคราวเท่านั้น มันจะไม่หายไป",
						"hindi": "यह बस थोड़ी देर के लिए रुका है। वह गायब नहीं होगा।"
					},
					"speaker": "bran",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"content": {
						"korean": "전투는 임시방편일 뿐. 근본적인 해결책을 찾아야 해요.",
						"english": "Combat is just a temporary measure. We need to find a fundamental solution.",
						"japanese": "戦闘は一時的なものに過ぎない。根本的な解決策を見つけなければならない。",
						"chinese": "战斗只是权宜之计。我们必须找到根本的解决方案。",
						"french": "Le combat n'est qu'une solution temporaire. Nous devons trouver une solution fondamentale.",
						"spanish": "El combate es solo una medida temporal. Debemos encontrar una solución fundamental.",
						"vietnamese": "Chiến đấu chỉ là biện pháp tạm thời. Chúng ta phải tìm ra giải pháp căn bản.",
						"thai": "การต่อสู้เป็นเพียงมาตรการชั่วคราว เราต้องหาวิธีแก้ปัญหาที่ต้นเหตุ",
						"hindi": "लड़ाई सिर्फ एक अस्थायी उपाय है। हमें एक मौलिक समाधान खोजना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "그러나 설원은 여전히 비명을 지르고 있었다. 늑대의 그림자는 거두어지지 않았다.",
						"english": "Yet the snowy field still screamed. The shadow of the wolf was not lifted.",
						"japanese": "しかし、雪原は相変わらず叫び続けていた。狼の影は消えなかった。",
						"chinese": "然而，雪原仍在尖叫。狼的阴影并未散去。",
						"french": "Pourtant, la plaine enneigée hurlait toujours. L'ombre du loup ne s'était pas dissipée.",
						"spanish": "Sin embargo, el campo nevado seguía gritando. La sombra del lobo no se había retirado.",
						"vietnamese": "Tuyết nguyên vẫn gào thét. Bóng sói chưa tan.",
						"thai": "แต่ทุ่งหิมะยังคงกรีดร้อง เงาของหมาป่ามิได้จางหายไป",
						"hindi": "परन्तु बर्फीला मैदान अभी भी चीख रहा था। भेड़िये की छाया दूर नहीं हुई थी।"
					},
					"emotion": "base"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "모든 것이 빨려 들어갔다. 굶주림은 만족을 몰랐다.",
						"english": "Everything was swallowed. Hunger knew no satisfaction.",
						"japanese": "全てが吸い込まれた。飢えは満たされることを知らなかった。",
						"chinese": "一切都被吞噬了。饥饿不知满足。",
						"french": "Tout fut aspiré. La faim ne connaissait pas de satisfaction.",
						"spanish": "Todo fue engullido. El hambre no conocía satisfacción.",
						"vietnamese": "Mọi thứ bị nuốt chửng. Đói khát không biết thỏa mãn.",
						"thai": "ทุกสิ่งถูกดูดกลืน ความหิวโหยไม่รู้จักความอิ่มเอม",
						"hindi": "सब कुछ समा गया। भूख को संतुष्टि नहीं मिली।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "나를… 만족시킬 수 있는가?",
						"english": "Can you... satisfy me?",
						"japanese": "私を…満たせるのか？",
						"chinese": "你能…满足我吗？",
						"french": "Peux-tu... me satisfaire ?",
						"spanish": "¿Puedes... satisfacerme?",
						"vietnamese": "Ngươi... có thể thỏa mãn ta không?",
						"thai": "เจ้า... สามารถทำให้ข้าพึงพอใจได้หรือไม่?",
						"hindi": "क्या तुम... मुझे संतुष्ट कर सकते हो?"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over... yet!",
						"japanese": "まだ…終わっていない！",
						"chinese": "还没…结束！",
						"french": "Ce n'est pas... fini !",
						"spanish": "¡Todavía... no ha terminado!",
						"vietnamese": "Chưa... kết thúc đâu!",
						"thai": "ยัง... ไม่จบ!",
						"hindi": "अभी तक... खत्म नहीं हुआ!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "이런 식으로… 물러설 수는 없다.",
						"english": "I cannot... retreat like this.",
						"japanese": "こんな風には…引けない。",
						"chinese": "我不能…就这样退缩。",
						"french": "Je ne peux pas... reculer ainsi.",
						"spanish": "No puedo... retirarme así.",
						"vietnamese": "Ta không thể... lùi bước như thế này.",
						"thai": "ข้า... ไม่อาจถอยหนีเช่นนี้ได้",
						"hindi": "मैं इस तरह... पीछे नहीं हट सकता।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"브란의 일격. 늑대는 멈추지 않고, 더 거대해졌다.",
			"사냥꾼의 오랜 본능이 흔들리기 시작한다.",
			"굶주림은 과연 사냥감일까, 막아야 할 재앙일까.",
			"얼어붙은 설원, 탐험대는 절박하게 답을 찾아야만 한다."
		],
		"english": [
			"Bran's strike. The wolf didn't stop, it only grew larger.",
			"The hunter's ancient instincts begin to waver.",
			"Is hunger truly prey, or a disaster to be stopped?",
			"On the frozen wasteland, the expedition must desperately find answers."
		],
		"japanese": [
			"ブランの一撃。狼は止まらず、さらに巨大になった。",
			"狩人の古き本能が揺らぎ始める。",
			"飢えは果たして獲物なのか、それとも止めなければならない災厄なのか。",
			"凍てついた雪原で、探検隊は必死に答えを見つけなければならない。"
		],
		"chinese": [
			"布兰的一击。狼并未停下，反而变得更加巨大。",
			"猎人古老的本能开始动摇。",
			"饥饿究竟是猎物，还是必须阻止的灾祸？",
			"在冰封的雪原上，探险队必须绝望地寻找答案。"
		],
		"french": [
			"La frappe de Bran. Le loup ne s'est pas arrêté, il a grandi encore plus.",
			"Les anciens instincts du chasseur commencent à vaciller.",
			"La faim est-elle vraiment une proie, ou une catastrophe à arrêter ?",
			"Sur la toundra gelée, l'expédition doit désespérément trouver des réponses."
		],
		"spanish": [
			"El golpe de Bran. El lobo no se detuvo, solo se hizo más grande.",
			"Los antiguos instintos del cazador comienzan a flaquear.",
			"¿Es el hambre realmente una presa, o un desastre que debe ser detenido?",
			"En el páramo helado, la expedición debe encontrar respuestas desesperadamente."
		],
		"vietnamese": [
			"Cú đánh của Bran. Con sói không dừng lại mà trở nên to lớn hơn.",
			"Bản năng cổ xưa của thợ săn bắt đầu lung lay.",
			"Cái đói rốt cuộc là con mồi, hay một tai ương cần phải ngăn chặn?",
			"Trên cánh đồng tuyết đóng băng, đoàn thám hiểm phải tuyệt vọng tìm câu trả lời."
		],
		"thai": [
			"การโจมตีของแบรน หมาป่าไม่หยุดนิ่ง กลับยิ่งใหญ่ขึ้น",
			"สัญชาตญาณอันเก่าแก่ของนักล่าเริ่มสั่นคลอน",
			"ความหิวโหยคือเหยื่อ หรือภัยพิบัติที่ต้องหยุดยั้งกันแน่",
			"บนลานน้ำแข็งอันหนาวเหน็บ คณะสำรวจต้องค้นหาคำตอบอย่างสิ้นหวัง"
		],
		"hindi": [
			"ब्रैन का वार। भेड़िया रुका नहीं, बल्कि और बड़ा हो गया।",
			"शिकारी की प्राचीन प्रवृत्ति हिलने लगती है।",
			"क्या भूख वास्तव में शिकार है, या रोकने वाली आपदा?",
			"जमी हुई बर्फीली भूमि पर, अभियान दल को हताश होकर जवाब ढूंढने होंगे।"
		]
	}
} as const;
