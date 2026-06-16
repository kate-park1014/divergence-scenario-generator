export const scenario_snowy_fenrir_27_05 = {
	"scenario_id": "snowy_fenrir_27_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
		}
	},
	"boss": {
		"pool_id": "pool_112"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "설원. 눈보라는 늑대를 중심으로 소용돌이쳤다. 늑대의 눈은 사라지고, 오직 깊은 동공만이 남아 있었다.",
						"english": "Snowfield. The blizzard swirled around the wolf. Its eyes were gone, only deep pupils remained.",
						"japanese": "雪原。吹雪は狼を中心に渦巻いた。狼の目は消え、ただ深い瞳孔だけが残っていた。",
						"chinese": "雪原。暴风雪围绕着狼打转。狼的眼睛消失了，只剩下深邃的瞳孔。",
						"french": "Étendue enneigée. Le blizzard tourbillonnait autour du loup. Ses yeux avaient disparu, ne laissant que des pupilles profondes.",
						"spanish": "Campo de nieve. La ventisca se arremolinaba alrededor del lobo. Sus ojos habían desaparecido, solo quedaban pupilas profundas.",
						"vietnamese": "Cánh đồng tuyết. Bão tuyết xoáy quanh con sói. Mắt nó đã biến mất, chỉ còn lại những đồng tử sâu thẳm.",
						"thai": "ทุ่งหิมะ พายุหิมะหมุนวนรอบหมาป่า ดวงตาของมันหายไป เหลือเพียงรูม่านตาที่ลึก",
						"hindi": "बर्फ का मैदान। बर्फीला तूफान भेड़िये के चारों ओर घूम रहा था। उसकी आँखें गायब हो चुकी थीं, केवल गहरी पुतलियाँ ही बची थीं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이게… 동공이라고?",
						"english": "Is this... a pupil?",
						"japanese": "これが… 瞳孔だと？",
						"chinese": "这就是……瞳孔吗？",
						"french": "C'est... une pupille ?",
						"spanish": "¿Esto... es una pupila?",
						"vietnamese": "Đây... là con ngươi ư?",
						"thai": "นี่... คือรูม่านตาหรือ?",
						"hindi": "क्या यह... पुतली है?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_1",
					"content": {
						"korean": "저 안에 무엇이 있는지… 끝이 안 보여.",
						"english": "What's inside... I can't see the end.",
						"japanese": "あの奥に何があるのか… 終わりが見えない。",
						"chinese": "里面有什么……望不到尽头。",
						"french": "Ce qu'il y a à l'intérieur... je ne vois pas la fin.",
						"spanish": "Lo que hay dentro... no veo el final.",
						"vietnamese": "Bên trong có gì... không thấy điểm kết thúc.",
						"thai": "มีอะไรอยู่ข้างใน... มองไม่เห็นจุดสิ้นสุดเลย",
						"hindi": "उसके अंदर क्या है... मैं अंत नहीं देख पा रहा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "glace",
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "…여기가. 모든 것이 사라지는 곳인가.",
						"english": "...Is this where everything vanishes?",
						"japanese": "…ここが。全てが消え去る場所なのか。",
						"chinese": "……这里。就是万物消逝之地吗。",
						"french": "...C'est ici que tout disparaît ?",
						"spanish": "¿Es aquí donde todo desaparece?",
						"vietnamese": "...Đây là nơi mọi thứ biến mất sao.",
						"thai": "ที่นี่หรือ. คือที่ที่ทุกสิ่งหายไป",
						"hindi": "क्या यह वह जगह है जहाँ सब कुछ गायब हो जाता है?"
					},
					"emotion": "base",
					"speaker": "glace"
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
						3,
						2
					],
					"action": "enter",
					"speaker": "glace"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "봐. 늑대가 뭔가를 삼켰지만… 사라져.",
						"english": "Look. The wolf swallowed something, but... it vanished.",
						"japanese": "見ろ。狼が何かを飲み込んだが… 消える。",
						"chinese": "看。狼吞下了什么……却消失了。",
						"french": "Regarde. Le loup a avalé quelque chose, mais... ça disparaît.",
						"spanish": "Mira. El lobo tragó algo, pero... desaparece.",
						"vietnamese": "Nhìn kìa. Sói nuốt thứ gì đó nhưng... nó biến mất rồi.",
						"thai": "ดูสิ. หมาป่ากลืนบางสิ่งลงไปแต่... มันหายไป",
						"hindi": "देखो। भेड़िये ने कुछ निगला, लेकिन... वह गायब हो गया।"
					},
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어디로? 위장이 아니라… 저 동공으로?",
						"english": "Where to? Not its stomach... into that pupil?",
						"japanese": "どこへ？ 胃ではなく… あの瞳孔へ？",
						"chinese": "去哪了？ 不是胃……而是那个瞳孔里？",
						"french": "Où ça ? Pas son estomac... dans cette pupille ?",
						"spanish": "¿Adónde? ¿No a su estómago... sino a esa pupila?",
						"vietnamese": "Đi đâu? Không phải dạ dày... mà là vào con ngươi kia ư?",
						"thai": "ไปไหน? ไม่ใช่กระเพาะ... แต่เป็นรูม่านตานั่น?",
						"hindi": "कहाँ? पेट में नहीं... उस पुतली में?"
					},
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "그래. 흔적조차 남지 않고. 빨려 들어가는군.",
						"english": "Yes. Without a trace. Sucked in.",
						"japanese": "そうだ。痕跡すら残さず。吸い込まれていく。",
						"chinese": "对。不留一丝痕迹。被吸进去了。",
						"french": "Oui. Sans laisser de trace. Aspiré.",
						"spanish": "Sí. Sin dejar rastro. Es absorbido.",
						"vietnamese": "Đúng vậy. Không để lại dấu vết. Bị hút vào rồi.",
						"thai": "ใช่. ไม่มีร่องรอยหลงเหลือ. ถูกดูดเข้าไป",
						"hindi": "हाँ। बिना किसी निशान के। अंदर खींच लिया गया।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "glace",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "아무리 삼켜도 늑대의 몸은 조금도 채워지지 않아.",
						"english": "No matter how much it swallows, the wolf's body isn't filled in the slightest.",
						"japanese": "いくら飲み込んでも狼の体は少しも満たされない。",
						"chinese": "不管吞噬多少，狼的身体都一丝一毫未被填满。",
						"french": "Peu importe ce qu'il avale, le corps du loup ne se remplit pas le moins du monde.",
						"spanish": "Por mucho que trague, el cuerpo del lobo no se sacia en lo más mínimo.",
						"vietnamese": "Nuốt bao nhiêu đi chăng nữa, cơ thể sói cũng không hề được lấp đầy chút nào.",
						"thai": "ไม่ว่ากลืนไปเท่าไหร่ ร่างกายของหมาป่าก็ไม่เต็มเลยแม้แต่น้อย",
						"hindi": "चाहे वह कितना भी निगल ले, भेड़िये का शरीर थोड़ा भी नहीं भरता।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그 말은….",
						"english": "That means...",
						"japanese": "それはつまり…。",
						"chinese": "也就是说……",
						"french": "Ce qui veut dire...",
						"spanish": "Eso significa...",
						"vietnamese": "Điều đó có nghĩa là...",
						"thai": "นั่นหมายความว่า...",
						"hindi": "इसका मतलब है..."
					}
				},
				{
					"speaker": "glace",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "결코 배부를 수 없는 굶주림이라는 뜻이지.",
						"english": "It means a hunger that can never be satisfied.",
						"japanese": "決して満たされることのない飢えだということだ。",
						"chinese": "意味着这是一种永远无法满足的饥饿。",
						"french": "C'est une faim qui ne peut jamais être satisfaite.",
						"spanish": "Significa un hambre que nunca podrá saciarse.",
						"vietnamese": "Có nghĩa là một cơn đói không bao giờ có thể no được.",
						"thai": "หมายถึงความหิวโหยที่ไม่เคยอิ่มได้เลย",
						"hindi": "इसका मतलब है एक ऐसी भूख जो कभी शांत नहीं हो सकती।"
					}
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "glace",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 단순한 굶주림이 아니야. 모든 것을 빨아들이는 공허 그 자체.",
						"english": "This isn't mere hunger. It's the void itself, swallowing everything.",
						"japanese": "これは単なる飢えではない。全てを吸い込む虚無そのものだ。",
						"chinese": "这不是单纯的饥饿。这是吞噬一切的虚空本身。",
						"french": "Ce n'est pas une simple faim. C'est le vide lui-même, aspirant tout.",
						"spanish": "Esto no es un hambre simple. Es el vacío mismo, absorbiéndolo todo.",
						"vietnamese": "Đây không phải chỉ là cơn đói đơn thuần. Đây là sự hư không nuốt chửng mọi thứ.",
						"thai": "นี่ไม่ใช่แค่ความหิวธรรมดา. มันคือความว่างเปล่าที่กลืนกินทุกสิ่ง",
						"hindi": "यह सिर्फ भूख नहीं है। यह स्वयं शून्य है, सब कुछ निगल रहा है।"
					},
					"emotion": "base",
					"speaker": "glace"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "공허… 그렇다면 우리는 뭘 해야 해?",
						"english": "The Void... So what should we do?",
						"japanese": "虚無…ならば我々はどうすればいい？",
						"chinese": "虚空……那我们该怎么办？",
						"french": "Le Vide... Alors, que devrions-nous faire ?",
						"spanish": "El Vacío... Entonces, ¿qué debemos hacer?",
						"vietnamese": "Hư vô... Vậy chúng ta phải làm gì?",
						"thai": "ความว่างเปล่า... ถ้าอย่างนั้น เราควรทำอย่างไรดี?",
						"hindi": "शून्यता... तो हमें क्या करना चाहिए?"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "직시하는 수밖에. 그 끝에 무엇이 있을지.",
						"english": "We can only face it. Whatever lies at its end.",
						"japanese": "ただ見つめるしかない。その先に何があろうと。",
						"chinese": "唯有直面。无论尽头为何物。",
						"french": "Il n'y a qu'à l'affronter. Peu importe ce qu'il y a au bout.",
						"spanish": "Solo podemos afrontarlo. Sea lo que sea que haya al final.",
						"vietnamese": "Chỉ còn cách đối mặt. Dù cho tận cùng là gì.",
						"thai": "ทำได้แค่เผชิญหน้า ไม่ว่าจะเกิดอะไรขึ้นในท้ายที่สุด",
						"hindi": "हमें इसका सामना ही करना होगा। जो कुछ भी इसके अंत में है।"
					},
					"type": "speech",
					"speaker": "glace"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이 작은 틈새를 막았다 한들… 공허는 사라지지 않아.",
						"english": "Even if you seal this tiny crack... the Void will not disappear.",
						"japanese": "この小さな隙間を塞いだところで…虚無は消えない。",
						"chinese": "即便堵住了这微小的裂缝……虚空也不会消失。",
						"french": "Même si vous scellez cette minuscule fissure... le Vide ne disparaîtra pas.",
						"spanish": "Aunque selléis esta pequeña grieta... el Vacío no desaparecerá.",
						"vietnamese": "Dù có bịt kín khe hở nhỏ bé này... Hư vô cũng không biến mất.",
						"thai": "แม้เจ้าจะอุดรอยร้าวเล็กๆ นี้ได้... แต่ความว่างเปล่าก็จะไม่หายไป",
						"hindi": "भले ही तुम इस छोटी सी दरार को बंद कर दो... शून्यता गायब नहीं होगी।"
					},
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "세상은, 언젠가… 다시 배고파질 것이다.",
						"english": "The world, someday... will hunger again.",
						"japanese": "世界は、いつか…再び飢えるだろう。",
						"chinese": "世界，终有一天……会再次饥饿的。",
						"french": "Le monde, un jour... aura de nouveau faim.",
						"spanish": "El mundo, algún día... volverá a tener hambre.",
						"vietnamese": "Thế giới, một ngày nào đó... sẽ lại đói khát.",
						"thai": "โลกนี้ สักวันหนึ่ง... จะหิวโหยอีกครั้ง",
						"hindi": "यह दुनिया, किसी दिन... फिर से भूखी हो जाएगी।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "…그럼 또 다른 공허가 나타날 거란 말인가.",
						"english": "...So another void will appear?",
						"japanese": "…では、また別の虚無が現れるというのか。",
						"chinese": "……那么，又一个虚无会出现吗？",
						"french": "...Alors un autre vide apparaîtra-t-il ?",
						"spanish": "¿...Entonces aparecerá otro vacío?",
						"vietnamese": "...Vậy một khoảng trống khác sẽ xuất hiện sao?",
						"thai": "...งั้นความว่างเปล่าอื่นก็จะปรากฏขึ้นอีกหรือ?",
						"hindi": "...तो क्या कोई और शून्य प्रकट होगा?"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "glace",
					"action": "enter"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝을 봤지만… 끝이 아니야.",
						"english": "I saw the end... but it's not the end.",
						"japanese": "終わりを見たが… 終わりではない。",
						"chinese": "我看到了尽头……但这不是尽头。",
						"french": "J'ai vu la fin... mais ce n'est pas la fin.",
						"spanish": "Vi el final... pero no es el final.",
						"vietnamese": "Tôi đã thấy kết thúc... nhưng đó không phải là kết thúc.",
						"thai": "ฉันเห็นจุดจบแล้ว... แต่มันไม่ใช่จุดจบ.",
						"hindi": "मैंने अंत देखा... लेकिन यह अंत नहीं है।"
					},
					"speaker": "glace"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "늑대의 동공은 사라졌다. 그러나 그 공허는 어딘가에 남아, 다음 굶주림을 기다리는 듯했다.",
						"english": "The wolf's pupils vanished. Yet, that void lingered somewhere, as if awaiting its next hunger.",
						"japanese": "狼の瞳は消えた。しかし、その虚無はどこかに残り、次の飢えを待っているかのようだった。",
						"chinese": "狼的瞳孔消失了。然而，那份虚无仿佛还在某个地方，等待着下一次饥饿。",
						"french": "Les pupilles du loup disparurent. Pourtant, ce vide persistait quelque part, comme s'il attendait sa prochaine faim.",
						"spanish": "Las pupilas del lobo desaparecieron. Sin embargo, ese vacío permanecía en algún lugar, como si esperara su próxima hambre.",
						"vietnamese": "Đôi mắt của sói biến mất. Tuy nhiên, sự trống rỗng đó vẫn còn đọng lại ở đâu đó, như thể đang chờ đợi cơn đói tiếp theo.",
						"thai": "ดวงตาของหมาป่าหายไป แต่ความว่างเปล่านั้นยังคงอยู่ ณ ที่ใดที่หนึ่ง ราวกับกำลังรอคอยความหิวครั้งต่อไป.",
						"hindi": "भेड़िये की पुतलियाँ गायब हो गईं। फिर भी, वह शून्य कहीं-न-कहीं बना रहा, मानो अपनी अगली भूख का इंतज़ार कर रहा हो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "결국 너희도… 아무것도 남지 않는군.",
						"english": "In the end, you too... have nothing left.",
						"japanese": "結局お前たちも…何も残らないな。",
						"chinese": "最终你们也……一无所有了啊。",
						"french": "Au final, vous aussi... il ne reste plus rien.",
						"spanish": "Al final, ustedes también... no les queda nada.",
						"vietnamese": "Cuối cùng, các ngươi cũng... chẳng còn gì.",
						"thai": "ในที่สุด พวกแกก็... ไม่มีอะไรเหลือเลย.",
						"hindi": "आखिर में, तुम भी... कुछ भी नहीं बचा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…이대로 끝낼 순 없어.",
						"english": "...I can't end it like this.",
						"japanese": "…このまま終わらせることはできない。",
						"chinese": "……不能就这样结束。",
						"french": "...Je ne peux pas finir comme ça.",
						"spanish": "...No puedo terminar así.",
						"vietnamese": "...Không thể kết thúc như thế này được.",
						"thai": "...ฉันจบแบบนี้ไม่ได้.",
						"hindi": "...मैं इसे ऐसे खत्म नहीं कर सकता।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "glace",
					"action": "enter"
				},
				{
					"content": {
						"korean": "다시 직시해야 할 뿐.",
						"english": "I just have to face it again.",
						"japanese": "ただ、もう一度直視するしかない。",
						"chinese": "只能再次直视。",
						"french": "Il suffit de l'affronter à nouveau.",
						"spanish": "Solo tengo que enfrentarlo de nuevo.",
						"vietnamese": "Chỉ cần đối mặt lại thôi.",
						"thai": "แค่ต้องเผชิญหน้ากับมันอีกครั้ง.",
						"hindi": "बस मुझे फिर से सामना करना होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "glace"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "늑대의 동공이 검은 소용돌이를 일으켰다. 모든 빛과 소리가 빨려 들어갔다. 끝없는 공허가 모습을 드러냈다.",
						"english": "The wolf's pupils swirled black. All light and sound were sucked in. The endless void revealed itself.",
						"japanese": "狼の瞳孔が黒い渦を巻いた。すべての光と音が吸い込まれ、終わりなき虚無が姿を現した。",
						"chinese": "狼的瞳孔卷起了黑色的漩涡。所有的光与声都被吸入其中。无尽的虚空显露了其面貌。",
						"french": "Les pupilles du loup formèrent un tourbillon noir. Toute lumière et tout son furent aspirés. Le vide sans fin se révéla.",
						"spanish": "Las pupilas del lobo se arremolinaron en negro. Toda luz y sonido fueron absorbidos. El vacío interminable se reveló.",
						"vietnamese": "Đồng tử của sói xoáy tròn một màu đen. Mọi ánh sáng và âm thanh đều bị hút vào. Hư vô vô tận hiện hữu.",
						"thai": "ม่านตาของหมาป่าหมุนวนเป็นสีดำ แสงและเสียงทั้งหมดถูกดูดกลืน ความว่างเปล่าอันไร้ที่สิ้นสุดได้ปรากฏขึ้น",
						"hindi": "भेड़िये की पुतलियों में एक काला बवंडर उठ गया। सारी रोशनी और आवाज उसमें समा गई। अंतहीन शून्यता सामने आ गई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"emotion": "base",
					"content": {
						"korean": "왔느냐. 이 작은 온기들아.",
						"english": "So you've come, little sparks of warmth.",
						"japanese": "来たか。この小さな温もりよ。",
						"chinese": "来了吗。这些微小的暖意。",
						"french": "Alors vous êtes venus, petites étincelles de chaleur.",
						"spanish": "Así que habéis venido, pequeñas chispas de calor.",
						"vietnamese": "Đến rồi sao. Những đốm lửa ấm áp nhỏ bé này.",
						"thai": "มาแล้วสินะ เจ้าความอบอุ่นเล็กๆ น้อยๆ ทั้งหลาย",
						"hindi": "तो तुम आ गए, गर्माहट की छोटी चिंगारियों।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "네가… 이 숲의 모든 것을 삼키고 있었어.",
						"english": "You... you were devouring everything in this forest.",
						"japanese": "お前が…この森の全てを貪っていたのか。",
						"chinese": "你……你一直在吞噬着这森林的一切。",
						"french": "Tu... tu dévorais tout dans cette forêt.",
						"spanish": "Tú... estabas devorando todo en este bosque.",
						"vietnamese": "Ngươi... ngươi đã nuốt chửng mọi thứ trong khu rừng này.",
						"thai": "แก... กำลังกลืนกินทุกสิ่งในป่านี้อยู่",
						"hindi": "तुम... तुम इस जंगल में सब कुछ निगल रहे थे।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "삼키고 또 삼켜도, 아무것도 남지 않아.",
						"english": "Even if I devour and devour, nothing remains.",
						"japanese": "飲み込み、また飲み込んでも、何も残らない。",
						"chinese": "即便吞噬再三，也一无所剩。",
						"french": "Même si je dévore et dévore, il ne reste rien.",
						"spanish": "Aunque devore y devore, nada queda.",
						"vietnamese": "Nuốt chửng rồi lại nuốt chửng, cũng chẳng còn gì.",
						"thai": "แม้จะกลืนกินแล้วกลืนกินเล่า ก็ไม่มีอะไรเหลืออยู่",
						"hindi": "चाहे मैं कितना भी निगलूँ, कुछ नहीं बचता।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "너희의 존재마저, 결국엔… 사라질 뿐이다.",
						"english": "Even your very existence will, in the end... merely vanish.",
						"japanese": "お前たちの存在さえも、結局は…ただ消え去るだけだ。",
						"chinese": "甚至连你们的存在，最终也只会……消逝而已。",
						"french": "Même votre existence, à la fin... ne fera que disparaître.",
						"spanish": "Incluso vuestra existencia, al final... simplemente desaparecerá.",
						"vietnamese": "Ngay cả sự tồn tại của các ngươi, cuối cùng rồi cũng... chỉ là biến mất mà thôi.",
						"thai": "แม้กระทั่งการมีอยู่ของพวกเจ้า สุดท้ายแล้วก็จะ... เพียงแค่หายไปเท่านั้น",
						"hindi": "यहां तक कि तुम्हारा अस्तित्व भी, अंत में... बस गायब हो जाएगा।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "glace",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이것이… 공허의 본질이로군.",
						"english": "This... this is the true nature of the Void.",
						"japanese": "これが…虚無の本質か。",
						"chinese": "这……这就是虚空的本质啊。",
						"french": "C'est ça... c'est la véritable nature du Vide.",
						"spanish": "Esto... esta es la verdadera naturaleza del Vacío.",
						"vietnamese": "Đây... đây chính là bản chất của Hư vô.",
						"thai": "นี่คือ... แก่นแท้ของความว่างเปล่าสินะ",
						"hindi": "यह... यह शून्यता का असली स्वरूप है।"
					},
					"emotion": "base",
					"speaker": "glace"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"끝없는 공허와의 전투는 끝났다.",
			"늑대의 동공은 메워졌지만, 가슴 한구석엔 여전히 텅 빈 감각이 남았다.",
			"승리인가, 아니면 그저 잠시 공허를 밀어낸 것인가.",
			"아무것도 남지 않은 그 자리에는… 침묵만이 흘렀다.",
			"이 세계는, 아직 배고픈 것 같았다."
		],
		"english": [
			"The battle with the endless void has ended.",
			"The wolf's pupils were filled, but a hollow feeling still remained in a corner of its heart.",
			"Victory, or merely a temporary pushback against the void?",
			"In the place where nothing remained... only silence flowed.",
			"This world, it seemed, was still hungry."
		],
		"japanese": [
			"終わりのない虚無との戦いは終わった。",
			"狼の瞳孔は満たされたが、心の片隅にはまだ空虚な感覚が残っていた。",
			"勝利なのか、それともただ一時的に虚無を押し退けただけなのか。",
			"何も残らないその場所には…ただ沈黙だけが流れていた。",
			"この世界は、まだ飢えているようだった。"
		],
		"chinese": [
			"与无尽虚空的战斗结束了。",
			"狼的瞳孔被填满了，但心底深处仍留有一丝空虚感。",
			"是胜利，还是仅仅暂时击退了虚空？",
			"在一无所有的原地……只有沉默流淌。",
			"这个世界，似乎仍然饥饿着。"
		],
		"french": [
			"La bataille contre le vide sans fin est terminée.",
			"Les pupilles du loup furent comblées, mais un sentiment de vide demeurait au coin de son cœur.",
			"Victoire, ou simplement un recul temporaire du vide ?",
			"À cet endroit où rien ne demeurait... seul le silence régnait.",
			"Ce monde, semblait-il, avait encore faim."
		],
		"spanish": [
			"La batalla con el vacío interminable ha terminado.",
			"Las pupilas del lobo se llenaron, pero una sensación de vacío aún permanecía en un rincón de su corazón.",
			"Victoria, o simplemente un rechazo temporal del vacío?",
			"En el lugar donde no quedaba nada... solo fluía el silencio.",
			"Este mundo, parecía, todavía tenía hambre."
		],
		"vietnamese": [
			"Cuộc chiến với khoảng không vô tận đã kết thúc.",
			"Đồng tử của sói đã được lấp đầy, nhưng một cảm giác trống rỗng vẫn còn đọng lại trong một góc tim nó.",
			"Là chiến thắng, hay chỉ là tạm thời đẩy lùi khoảng không?",
			"Nơi không còn gì... chỉ có sự im lặng trôi qua.",
			"Thế giới này, dường như, vẫn còn đói."
		],
		"thai": [
			"การต่อสู้กับความว่างเปล่าอันไร้ที่สิ้นสุดได้จบลงแล้ว",
			"รูม่านตาของหมาป่าเต็มเปี่ยมแล้ว แต่ความรู้สึกว่างเปล่ายังคงอยู่ส่วนหนึ่งในใจ",
			"ชัยชนะ หรือเป็นแค่การผลักไสความว่างเปล่าออกไปชั่วคราวเท่านั้น",
			"ณ ที่ที่ไม่มีอะไรเหลืออยู่... มีเพียงความเงียบงันที่ไหลผ่าน",
			"โลกใบนี้ ดูเหมือนจะยังคงหิวโหย"
		],
		"hindi": [
			"अंतहीन शून्य के साथ युद्ध समाप्त हो गया है।",
			"भेड़िये की पुतलियाँ भर गईं, लेकिन उसके दिल के एक कोने में अभी भी एक खालीपन का एहसास बाकी था।",
			"जीत है, या बस शून्य को कुछ समय के लिए पीछे धकेलना है?",
			"उस जगह पर जहाँ कुछ भी नहीं बचा था... केवल सन्नाटा छा गया था।",
			"यह दुनिया, ऐसा लगा, अभी भी भूखी थी।"
		]
	},
	"prologue": {
		"korean": [
			"눈보라 속, 늑대의 동공이 모든 것을 집어삼킨다.",
			"그 안에는 끝없는 공허가 있었다.",
			"이제 마주할 시간이다. 채워지지 않는 굶주림의 근원을.",
			"모든 것이 사라질, 그곳으로."
		],
		"english": [
			"In the blizzard, the wolf's pupils devour everything.",
			"Within it, an endless void.",
			"Now it's time to face the source of the unquenchable hunger.",
			"To that place where all will vanish."
		],
		"japanese": [
			"吹雪の中、狼の瞳孔がすべてを飲み込む。",
			"その中には、終わりのない虚無があった。",
			"今、満たされぬ飢えの根源に立ち向かう時だ。",
			"全てが消え去る、その場所へ。"
		],
		"chinese": [
			"暴风雪中，狼的瞳孔吞噬一切。",
			"其中是无尽的虚空。",
			"现在是时候面对那无法满足的饥饿之源了。",
			"到那一切都将消失之地。"
		],
		"french": [
			"Dans le blizzard, les pupilles du loup dévorent tout.",
			"En son sein, un vide sans fin.",
			"Il est temps d'affronter la source de cette faim insatiable.",
			"Vers cet endroit où tout disparaîtra."
		],
		"spanish": [
			"En la ventisca, las pupilas del lobo devoran todo.",
			"Dentro de ella, un vacío interminable.",
			"Es hora de enfrentar el origen del hambre insaciable.",
			"Hacia el lugar donde todo desaparecerá."
		],
		"vietnamese": [
			"Giữa bão tuyết, đồng tử của sói nuốt chửng mọi thứ.",
			"Bên trong đó là một khoảng không vô tận.",
			"Giờ là lúc đối mặt với nguồn gốc của cơn đói không thể lấp đầy.",
			"Đến nơi mọi thứ sẽ tan biến."
		],
		"thai": [
			"ท่ามกลางพายุหิมะ รูม่านตาของหมาป่ากลืนกินทุกสิ่ง",
			"ภายในนั้นมีความว่างเปล่าอันไร้ที่สิ้นสุด",
			"ถึงเวลาเผชิญหน้ากับต้นตอของความหิวโหยที่ไม่รู้จักพอแล้ว",
			"สู่ที่ที่ทุกสิ่งจะเลือนหายไป"
		],
		"hindi": [
			"बर्फीले तूफान में, भेड़िये की पुतलियाँ सब कुछ निगल जाती हैं।",
			"उसके भीतर, एक अंतहीन शून्य था।",
			"अब उस अतृप्त भूख के स्रोत का सामना करने का समय है।",
			"उस जगह, जहाँ सब कुछ मिट जाएगा।"
		]
	}
} as const;
