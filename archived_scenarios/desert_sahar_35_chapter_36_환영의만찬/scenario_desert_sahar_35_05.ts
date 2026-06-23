export const scenario_desert_sahar_35_05 = {
	"scenario_id": "desert_sahar_35_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "desert",
	"actors": {
		"amir": {
			"id": "mon_0096d602-52ab-4a9c-9cc8-4ff18ed3b655",
			"name": {
				"korean": "아미르",
				"english": "Amir",
				"japanese": "アミール",
				"chinese": "阿米尔",
				"french": "Amir",
				"spanish": "Amir",
				"vietnamese": "Amir",
				"thai": "อาเมียร์",
				"hindi": "अमीर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8cd60fb0-3699-44c4-6425-a3e97eec1800/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/b644dc95-9c27-442e-6dc6-73e5550a0200/public"
		}
	},
	"boss": {
		"pool_id": "pool_MirageChef_V0"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "모래 언덕 너머, 환상의 연회가 눈앞에 펼쳐졌다.",
						"english": "Beyond the dunes, a feast of illusions unfolded before my eyes.",
						"japanese": "砂丘の向こう、幻想の宴が目の前に広がった。",
						"chinese": "沙丘之外，一场幻象的盛宴在我眼前展开。",
						"french": "Au-delà des dunes, un festin d'illusions se dévoilait sous mes yeux.",
						"spanish": "Más allá de las dunas, un banquete de ilusiones se extendía ante mis ojos.",
						"vietnamese": "Phía sau cồn cát, một bữa tiệc ảo ảnh hiện ra trước mắt tôi.",
						"thai": "เลยเนินทรายไป งานเลี้ยงแห่งภาพลวงตาได้ปรากฏขึ้นต่อหน้าฉัน",
						"hindi": "रेत के टीलों के पार, मेरी आँखों के सामने भ्रम की एक दावत फैली हुई थी।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이게… 사하르의 만찬?",
						"english": "This is... Sahar's feast?",
						"japanese": "これが…サハルの晩餐？",
						"chinese": "这就是…萨哈尔的盛宴？",
						"french": "C'est… le festin de Sahar ?",
						"spanish": "¿Esto es... el banquete de Sahar?",
						"vietnamese": "Đây là… bữa tiệc của Sahar ư?",
						"thai": "นี่คือ… งานเลี้ยงของซาฮาร์หรือ?",
						"hindi": "यह है… साहार की दावत?"
					},
					"speaker": "character_any"
				},
				{
					"duration_ms": 500,
					"speaker": "amir",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "이 모든 게 허상이야. 속으면 안 돼.",
						"english": "It's all an illusion. Don't be fooled.",
						"japanese": "これは全て幻影だ。騙されてはいけない。",
						"chinese": "这一切都是虚假的。别被骗了。",
						"french": "Tout n'est qu'illusion. Ne te laisse pas berner.",
						"spanish": "Todo es una ilusión. No te dejes engañar.",
						"vietnamese": "Tất cả chỉ là ảo ảnh. Đừng để bị lừa.",
						"thai": "ทั้งหมดนี้เป็นภาพลวงตา อย่าหลงเชื่อ",
						"hindi": "यह सब एक भ्रम है। मूर्ख मत बनो।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "알고 있어.",
						"english": "I know.",
						"japanese": "分かっている。",
						"chinese": "我知道。",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Tôi biết.",
						"thai": "ฉันรู้",
						"hindi": "मुझे पता है।"
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
					"speaker": "amir",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "저들을 봐. 현실을 잊으려 너무 애쓰고 있어.",
						"english": "Look at them. They're trying too hard to forget reality.",
						"japanese": "彼らを見て。現実を忘れようと必死になっている。",
						"chinese": "看看他们。他们太努力地想要忘记现实了。",
						"french": "Regarde-les. Ils essaient trop fort d'oublier la réalité.",
						"spanish": "Míralos. Se esfuerzan demasiado por olvidar la realidad.",
						"vietnamese": "Hãy nhìn họ đi. Họ đang cố gắng quá sức để quên đi thực tại.",
						"thai": "ดูพวกเขาซิ พวกเขากำลังพยายามอย่างหนักที่จะลืมความจริง",
						"hindi": "उन्हें देखो। वे वास्तविकता को भूलने की बहुत कोशिश कर रहे हैं।"
					},
					"speaker": "amir"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들을 이렇게 만든 건 사하르야.",
						"english": "Sahar made them this way.",
						"japanese": "彼らをこうしたのはサハルだ。",
						"chinese": "是萨哈尔让他们变成这样的。",
						"french": "C'est Sahar qui les a rendus ainsi.",
						"spanish": "Sahar los hizo así.",
						"vietnamese": "Sahar đã khiến họ trở nên như vậy.",
						"thai": "ซาฮาร์เป็นคนทำให้พวกเขาเป็นแบบนี้",
						"hindi": "सहार ने उन्हें ऐसा बनाया।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…어쩌면, 사하르 자신도 피해자였을지 몰라.",
						"english": "...Perhaps, Sahar herself was a victim.",
						"japanese": "…もしかしたら、サハル自身も被害者だったのかもしれない。",
						"chinese": "……也许，萨哈尔自己也是受害者。",
						"french": "...Peut-être que Sahar elle-même était une victime.",
						"spanish": "...Quizás, Sahar misma era una víctima.",
						"vietnamese": "...Có lẽ, chính Sahar cũng là một nạn nhân.",
						"thai": "...บางที ซาฮาร์เองก็อาจเป็นเหยื่อ",
						"hindi": "...शायद, सहार खुद एक पीड़ित थी।"
					},
					"speaker": "amir"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						3
					],
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "요리들이… 생생해.",
						"english": "The dishes... they're so vivid.",
						"japanese": "料理が…とても鮮やかだ。",
						"chinese": "这些菜肴……栩栩如生。",
						"french": "Les plats... sont si éclatants.",
						"spanish": "Los platos... están tan vivos.",
						"vietnamese": "Những món ăn... thật sống động.",
						"thai": "อาหาร... ดูสดใสมาก",
						"hindi": "व्यंजन... बहुत जीवंत हैं।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "맛있겠지. 하지만 입에 넣는 순간, 모든 게 모래가 될 거야.",
						"english": "They look delicious, don't they? But the moment you taste them, everything will turn to sand.",
						"japanese": "美味しそうだろ。だが、口に入れた瞬間、全てが砂になるだろう。",
						"chinese": "看起来很美味，对吧？但一旦放入口中，一切都将化为沙尘。",
						"french": "Ils ont l'air délicieux, n'est-ce pas ? Mais dès que tu les goûteras, tout se transformera en sable.",
						"spanish": "Parecen deliciosos, ¿verdad? Pero en cuanto los pruebes, todo se convertirá en arena.",
						"vietnamese": "Trông ngon miệng đúng không? Nhưng ngay khi bạn nếm thử, mọi thứ sẽ biến thành cát.",
						"thai": "ดูน่าอร่อยใช่ไหม? แต่ทันทีที่ใส่ปาก ทุกอย่างจะกลายเป็นทราย",
						"hindi": "वे स्वादिष्ट लगते हैं, है ना? लेकिन जैसे ही तुम उन्हें चखोगे, सब कुछ रेत बन जाएगा।"
					},
					"speaker": "amir"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "현실의 고통을 잊기 위한 달콤한 독.",
						"english": "A sweet poison to forget the pain of reality.",
						"japanese": "現実の苦痛を忘れるための甘い毒。",
						"chinese": "遗忘现实痛苦的甜蜜毒药。",
						"french": "Un doux poison pour oublier la douleur de la réalité.",
						"spanish": "Un dulce veneno para olvidar el dolor de la realidad.",
						"vietnamese": "Một liều thuốc độc ngọt ngào để quên đi nỗi đau của thực tại.",
						"thai": "ยาพิษหวานเพื่อลืมความเจ็บปวดจากความเป็นจริง",
						"hindi": "वास्तविकता के दर्द को भुलाने के लिए एक मीठा जहर।"
					}
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그 독에 취하면, 진짜 고통은 보이지 않게 돼.",
						"english": "Once intoxicated by that poison, the true pain becomes invisible.",
						"japanese": "その毒に酔えば、本当の苦痛は見えなくなる。",
						"chinese": "一旦被那毒药迷惑，真正的痛苦就将变得无形。",
						"french": "Une fois enivré par ce poison, la vraie douleur devient invisible.",
						"spanish": "Una vez intoxicado por ese veneno, el verdadero dolor se vuelve invisible.",
						"vietnamese": "Một khi bị nhiễm độc bởi thứ độc dược đó, nỗi đau thực sự sẽ trở nên vô hình.",
						"thai": "เมื่อมึนเมาจากยาพิษนั้น ความเจ็บปวดที่แท้จริงจะมองไม่เห็น",
						"hindi": "एक बार उस जहर से नशे में धुत होने पर, असली दर्द अदृश्य हो जाता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"speaker": "amir",
					"duration_ms": 500
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "만찬의 가장 깊은 곳. 그 중심에 그가 있었다.",
						"english": "In the deepest part of the banquet. At its center, he stood.",
						"japanese": "晩餐の最も奥深い場所。その中心に彼がいた。",
						"chinese": "宴会的最深处。其中心，是他。",
						"french": "Au plus profond du banquet. En son centre, il se tenait.",
						"spanish": "En lo más profundo del banquete. En su centro, él estaba.",
						"vietnamese": "Ở nơi sâu nhất của bữa tiệc. Ở trung tâm, hắn ta đứng đó.",
						"thai": "ในส่วนที่ลึกที่สุดของงานเลี้ยง ท่ามกลางนั้น เขายืนอยู่",
						"hindi": "भोज के सबसे गहरे हिस्से में। उसके केंद्र में, वह खड़ा था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "저기가… 사하르의 부엌이야.",
						"english": "That's… Sahar's kitchen.",
						"japanese": "あそこが…サハルのキッチンだ。",
						"chinese": "那里是……萨哈尔的厨房。",
						"french": "C'est… la cuisine de Sahar.",
						"spanish": "Ahí está… la cocina de Sahar.",
						"vietnamese": "Đó là… bếp của Sahar.",
						"thai": "นั่นคือ... ครัวของซาฮาร์",
						"hindi": "वह… सहार का रसोईघर है।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이 왕국은 왜 사라졌지? 왜 이런 환상에 의존했어?",
						"english": "Why did this kingdom vanish? Why did it cling to such illusions?",
						"japanese": "なぜこの王国は消えた？なぜこんな幻想に頼った？",
						"chinese": "这个王国为何消失？为何依附于这种幻象？",
						"french": "Pourquoi ce royaume a-t-il disparu ? Pourquoi s'est-il accroché à de telles illusions ?",
						"spanish": "¿Por qué desapareció este reino? ¿Por qué se aferró a tales ilusiones?",
						"vietnamese": "Vương quốc này biến mất vì sao? Sao lại dựa vào những ảo ảnh này?",
						"thai": "ทำไมอาณาจักรนี้ถึงหายไป? ทำไมถึงยึดติดกับภาพลวงตาเช่นนี้?",
						"hindi": "यह राज्य क्यों गायब हो गया? ऐसी कल्पनाओं पर क्यों निर्भर रहा?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "너무나 배고팠고… 너무나 절박했기에. 결국 아무것도 남지 않았지.",
						"english": "So hungry… so desperate. In the end, nothing remained.",
						"japanese": "あまりに空腹で… あまりに絶望的だった。結局、何も残らなかった。",
						"chinese": "太饿了……太绝望了。最终，一无所有。",
						"french": "Si affamés… si désespérés. Au final, il ne resta rien.",
						"spanish": "Tanta hambre… tanta desesperación. Al final, no quedó nada.",
						"vietnamese": "Quá đói… quá tuyệt vọng. Cuối cùng, không còn gì cả.",
						"thai": "หิวโหยเหลือเกิน... สิ้นหวังเหลือเกิน ท้ายที่สุด ก็ไม่มีอะไรเหลืออยู่เลย",
						"hindi": "बहुत भूखा था… बहुत हताश। अंत में, कुछ भी नहीं बचा।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 사하르는…?",
						"english": "Then Sahar…?",
						"japanese": "ではサハルは…？",
						"chinese": "那么萨哈尔……？",
						"french": "Alors Sahar… ?",
						"spanish": "¿Entonces Sahar…?",
						"vietnamese": "Vậy Sahar…?",
						"thai": "แล้วซาฮาร์ล่ะ...?",
						"hindi": "तो सहार…?"
					}
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그 비극의 유일한 생존자. 그리고 새로운 비극의 창조자.",
						"english": "The sole survivor of that tragedy. And the creator of a new tragedy.",
						"japanese": "その悲劇の唯一の生存者。そして新たな悲劇の創造者。",
						"chinese": "那场悲剧唯一的幸存者。以及新悲剧的创造者。",
						"french": "La seule survivante de cette tragédie. Et la créatrice d'une nouvelle tragédie.",
						"spanish": "La única superviviente de esa tragedia. Y la creadora de una nueva tragedia.",
						"vietnamese": "Người sống sót duy nhất của bi kịch đó. Và là kẻ tạo ra một bi kịch mới.",
						"thai": "ผู้รอดชีวิตเพียงคนเดียวจากโศกนาฏกรรมนั้น และผู้สร้างโศกนาฏกรรมครั้งใหม่",
						"hindi": "उस त्रासदी का एकमात्र उत्तरजीवी। और एक नई त्रासदी का निर्माता।"
					}
				}
			],
			"id": 9
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "황홀한 만찬 테이블. 그 끝에, 기이한 미소를 지은 사하르가 앉아 있었다.",
						"english": "An enchanting banquet table. At its end, Sahar sat with a strange smile.",
						"japanese": "魅惑的な晩餐のテーブル。その端に、奇妙な笑みを浮かべたサハルが座っていた。",
						"chinese": "一张令人陶醉的宴会桌。尽头处，萨哈尔带着奇异的微笑坐着。",
						"french": "Une table de banquet envoûtante. À son extrémité, Sahar était assise avec un étrange sourire.",
						"spanish": "Una mesa de banquete encantadora. Al final, Sahar se sentaba con una extraña sonrisa.",
						"vietnamese": "Một bàn tiệc lộng lẫy. Cuối bàn, Sahar ngồi đó với nụ cười kỳ lạ.",
						"thai": "โต๊ะจัดเลี้ยงที่น่าหลงใหล ที่ปลายโต๊ะ ซาฮาร์นั่งอยู่พร้อมรอยยิ้มแปลกๆ",
						"hindi": "एक मनमोहक दावत की मेज। उसके अंत में, सहार एक अजीब मुस्कान के साथ बैठी थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "환영한다, 손님들. 나의 마지막 만찬에 오신 것을.",
						"english": "Welcome, guests. To my final supper.",
						"japanese": "ようこそ、お客様方。私の最後の晩餐へ。",
						"chinese": "欢迎，客人们。来到我的最后晚餐。",
						"french": "Bienvenue, chers invités. À mon dernier souper.",
						"spanish": "Bienvenidos, invitados. A mi última cena.",
						"vietnamese": "Chào mừng, các vị khách. Đến với bữa tiệc cuối cùng của tôi.",
						"thai": "ยินดีต้อนรับแขกทุกท่าน สู่มื้อค่ำสุดท้ายของข้า",
						"hindi": "स्वागत है, मेहमानों। मेरे अंतिम भोज में।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "사하르.",
						"english": "Sahar.",
						"japanese": "サハル。",
						"chinese": "萨哈尔。",
						"french": "Sahar.",
						"spanish": "Sahar.",
						"vietnamese": "Sahar.",
						"thai": "ซาฮาร์",
						"hindi": "सहार।"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 배고픔을 잊고 싶은가? 이곳에선 모든 것이 가능하지.",
						"english": "Yes. Do you wish to forget your hunger? Here, anything is possible.",
						"japanese": "ええ。空腹を忘れたいか？ここでは全てが可能だ。",
						"chinese": "是的。你想忘记饥饿吗？在这里，一切皆有可能。",
						"french": "Oui. Souhaitez-vous oublier votre faim ? Ici, tout est possible.",
						"spanish": "Sí. ¿Deseas olvidar tu hambre? Aquí, todo es posible.",
						"vietnamese": "Phải. Ngươi có muốn quên đi cơn đói không? Ở đây, mọi thứ đều có thể.",
						"thai": "ใช่ เจ้าอยากลืมความหิวโหยหรือเปล่า? ที่นี่ ทุกสิ่งเป็นไปได้",
						"hindi": "हाँ। क्या तुम अपनी भूख भूलना चाहते हो? यहाँ, सब कुछ संभव है।"
					},
					"speaker": "boss",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "허상이야.",
						"english": "It's an illusion.",
						"japanese": "幻だ。",
						"chinese": "那是幻象。",
						"french": "C'est une illusion.",
						"spanish": "Es una ilusión.",
						"vietnamese": "Đó là ảo ảnh.",
						"thai": "มันเป็นภาพลวงตา",
						"hindi": "यह एक भ्रम है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "이건 진짜보다 더 진짜야. 맛보시겠나?",
						"english": "It's more real than real. Care for a taste?",
						"japanese": "本物より本物だ。味わってみるか？",
						"chinese": "这比真的还真。要尝尝吗？",
						"french": "C'est plus vrai que nature. Voulez-vous goûter ?",
						"spanish": "Es más real que la realidad. ¿Gustas probar?",
						"vietnamese": "Cái này còn thật hơn cả thật. Muốn nếm thử không?",
						"thai": "นี่มันจริงยิ่งกว่าของจริงอีกนะ จะลองชิมไหม?",
						"hindi": "यह असली से भी ज़्यादा असली है। चखना चाहेंगे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "안 돼! 손대지 마!",
						"english": "No! Don't touch it!",
						"japanese": "ダメだ！触るな！",
						"chinese": "不行！别碰！",
						"french": "Non ! Ne touche pas !",
						"spanish": "¡No! ¡No lo toques!",
						"vietnamese": "Không được! Đừng chạm vào!",
						"thai": "ไม่นะ! อย่าจับ!",
						"hindi": "नहीं! इसे मत छूना!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…방해하지 마라, 아미르.",
						"english": "...Don't disturb me, Amir.",
						"japanese": "…邪魔するな、アミール。",
						"chinese": "…别打扰我，阿米尔。",
						"french": "...Ne me dérange pas, Amir.",
						"spanish": "...No me molestes, Amir.",
						"vietnamese": "...Đừng làm phiền ta, Amir.",
						"thai": "...อย่ามารบกวน, อามีร์.",
						"hindi": "...मुझे परेशान मत करो, अमीर।"
					},
					"speaker": "boss"
				},
				{
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"speaker": "amir",
					"duration_ms": 400
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "현실을 외면하는 건 구원이 아니야.",
						"english": "Turning away from reality is not salvation.",
						"japanese": "現実から目を背けるのは救いじゃない。",
						"chinese": "逃避现实并非救赎。",
						"french": "Fuir la réalité n'est pas une rédemption.",
						"spanish": "Ignorar la realidad no es la salvación.",
						"vietnamese": "Trốn tránh thực tại không phải là sự cứu rỗi.",
						"thai": "การหันหลังให้ความจริงไม่ใช่การไถ่บาป",
						"hindi": "वास्तविकता से मुंह मोड़ना मुक्ति नहीं है।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "구원? 후후… 너희가 뭘 안다고.",
						"english": "Salvation? Hmph... What do you know?",
						"japanese": "救い？フフ…お前らが何を知ってるんだ。",
						"chinese": "救赎？呵呵…你们懂什么？",
						"french": "Rédemption ? Huhu... Qu'en savez-vous ?",
						"spanish": "¿Salvación? Jeje... ¿Qué saben ustedes?",
						"vietnamese": "Cứu rỗi ư? Hừm... Các ngươi biết gì mà nói.",
						"thai": "การไถ่บาป? หึหึ... พวกแกจะไปรู้อะไร",
						"hindi": "मुक्ति? हुह... तुम लोग क्या जानते हो।"
					},
					"speaker": "boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "환상의 향연이 주인공을 집어삼켰다.",
						"english": "The feast of illusions swallowed the protagonist.",
						"japanese": "幻想の饗宴が主人公を飲み込んだ。",
						"chinese": "幻想的盛宴吞噬了主人公。",
						"french": "Le festin des illusions a englouti le protagoniste.",
						"spanish": "El festín de ilusiones devoró al protagonista.",
						"vietnamese": "Bữa tiệc của ảo ảnh đã nuốt chửng nhân vật chính.",
						"thai": "งานเลี้ยงแห่งภาพลวงตากลืนกินตัวเอก.",
						"hindi": "भ्रमों के भोज ने नायक को निगल लिया।"
					}
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "포기해라. 고통은 사라질 것이다.",
						"english": "Give up. The pain will vanish.",
						"japanese": "諦めろ。苦痛は消え去るだろう。",
						"chinese": "放弃吧。痛苦会消失的。",
						"french": "Abandonne. La douleur disparaîtra.",
						"spanish": "Ríndete. El dolor desaparecerá.",
						"vietnamese": "Hãy bỏ cuộc đi. Nỗi đau sẽ biến mất.",
						"thai": "ยอมแพ้ซะ ความเจ็บปวดจะหายไป.",
						"hindi": "हार मान लो। दर्द मिट जाएगा।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아니. 이 현실을 직시해야 해.",
						"english": "No. I must face this reality.",
						"japanese": "いや。この現実を直視しなければならない。",
						"chinese": "不。我必须直面这个现实。",
						"french": "Non. Je dois faire face à cette réalité.",
						"spanish": "No. Debo afrontar esta realidad.",
						"vietnamese": "Không. Tôi phải đối mặt với thực tại này.",
						"thai": "ไม่สิ ฉันต้องเผชิญหน้ากับความเป็นจริงนี้.",
						"hindi": "नहीं। मुझे इस वास्तविकता का सामना करना होगा।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…재미있군. 다음에도 환영하지.",
						"english": "...Interesting. I welcome you next time as well.",
						"japanese": "…面白い。次も歓迎しよう。",
						"chinese": "……有趣。下次也欢迎你。",
						"french": "...Intéressant. Je te souhaite la bienvenue la prochaine fois aussi.",
						"spanish": "...Interesante. Te daré la bienvenida la próxima vez.",
						"vietnamese": "...Thú vị đấy. Lần tới tôi cũng sẽ chào đón ngươi.",
						"thai": "...น่าสนใจ. ยินดีต้อนรับครั้งหน้าอีก.",
						"hindi": "...दिलचस्प। अगली बार भी स्वागत है।"
					},
					"speaker": "boss",
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "사하르의 환상이 부서졌다. 테이블 위의 모든 요리는 모래로 변했다.",
						"english": "Sahar's illusion shattered. All the dishes on the table turned to sand.",
						"japanese": "サハルの幻影が砕け散った。テーブルの上の料理はすべて砂に変わった。",
						"chinese": "萨哈尔的幻象破碎了。桌上的所有菜肴都变成了沙子。",
						"french": "L'illusion de Sahar s'est brisée. Tous les plats sur la table se sont transformés en sable.",
						"spanish": "La ilusión de Sahar se hizo añicos. Todos los platos sobre la mesa se convirtieron en arena.",
						"vietnamese": "Ảo ảnh của Sahar tan vỡ. Tất cả các món ăn trên bàn đều biến thành cát.",
						"thai": "ภาพลวงตาของซาฮาร์พังทลายลง อาหารทุกจานบนโต๊ะกลายเป็นทราย",
						"hindi": "सहार का भ्रम टूट गया। मेज़ पर रखे सभी व्यंजन रेत में बदल गए।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "결국… 다 모래였어.",
						"english": "In the end... it was all sand.",
						"japanese": "結局…すべて砂だった。",
						"chinese": "最终…一切都只是沙子。",
						"french": "Au final... tout n'était que sable.",
						"spanish": "Al final... todo era arena.",
						"vietnamese": "Cuối cùng... tất cả chỉ là cát.",
						"thai": "สุดท้ายแล้ว... ทุกอย่างก็คือทราย",
						"hindi": "आखिरकार... सब रेत था।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…너희는… 왜 그렇게까지 현실을 고집하지…?",
						"english": "...Why do you cling to reality so stubbornly...?",
						"japanese": "…お前たちは…なぜそこまで現実を固執するんだ…？",
						"chinese": "…你们…为何如此执着于现实…？",
						"french": "...Pourquoi vous accrochez-vous si obstinément à la réalité...?",
						"spanish": "...¿Por qué se aferran tanto a la realidad...?",
						"vietnamese": "...Các ngươi... sao lại cố chấp với thực tại đến vậy...?",
						"thai": "...พวกเจ้า... ทำไมถึงยึดติดกับความจริงขนาดนั้น...?",
						"hindi": "...तुम लोग... वास्तविकता पर इतनी ज़िद क्यों करते हो...?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "…배고픔을 없애는 방법은 간단하지. 배고픔이라는 개념을 없애면 되니까…",
						"english": "...The way to eliminate hunger is simple. Just eliminate the concept of hunger itself...",
						"japanese": "…空腹をなくす方法は簡単だ。空腹という概念そのものをなくせばいいのだから…",
						"chinese": "…消除饥饿的方法很简单。只要消除饥饿这个概念就行了…",
						"french": "...Le moyen d'éliminer la faim est simple. Il suffit d'éliminer le concept même de faim...",
						"spanish": "...La forma de eliminar el hambre es sencilla. Basta con eliminar el concepto de hambre en sí...",
						"vietnamese": "...Cách loại bỏ cơn đói rất đơn giản. Chỉ cần loại bỏ khái niệm đói khát là được...",
						"thai": "...วิธีขจัดความหิวก็ง่ายนิดเดียว แค่กำจัดแนวคิดเรื่องความหิวออกไป...",
						"hindi": "...भूख मिटाने का तरीका आसान है। बस भूख के विचार को ही मिटा दो..."
					},
					"emotion": "base"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "amir"
				},
				{
					"emotion": "sad",
					"speaker": "amir",
					"type": "speech",
					"content": {
						"korean": "그의 마음속에도… 지독한 배고픔이 있었을 거야.",
						"english": "In his heart, too... there must have been a terrible hunger.",
						"japanese": "彼の心の中にも…ひどい空腹があったのだろう。",
						"chinese": "他的内心深处…也一定有着可怕的饥饿。",
						"french": "Dans son cœur aussi... il devait y avoir une faim terrible.",
						"spanish": "En su corazón también... debió haber una terrible hambruna.",
						"vietnamese": "Trong lòng hắn ta cũng vậy... chắc hẳn có một nỗi đói khát khủng khiếp.",
						"thai": "ในใจของเขาเองก็... คงมีความหิวโหยอันแสนสาหัสอยู่ด้วย",
						"hindi": "उसके दिल में भी... एक भयंकर भूख रही होगी।"
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "씁쓸한 결말이야.",
						"english": "A bitter end.",
						"japanese": "苦い結末だ。",
						"chinese": "苦涩的结局。",
						"french": "Une fin amère.",
						"spanish": "Un final amargo.",
						"vietnamese": "Một kết cục cay đắng.",
						"thai": "บทสรุปที่ขมขื่น.",
						"hindi": "एक कड़वा अंत।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "사막에 모든 환상이 무너져내렸다. 남은 것은, 차가운 모래와 잊힌 진실뿐이었다.",
						"english": "All illusions in the desert crumbled. All that remained were cold sands and forgotten truths.",
						"japanese": "砂漠のあらゆる幻想は崩れ去った。残されたのは、冷たい砂と忘れ去られた真実だけだった。",
						"chinese": "沙漠中的所有幻想都崩塌了。只剩下冰冷的沙子和被遗忘的真相。",
						"french": "Toutes les illusions du désert s'étaient effondrées. Il ne restait que le sable froid et des vérités oubliées.",
						"spanish": "Todas las ilusiones del desierto se desmoronaron. Solo quedaron arenas frías y verdades olvidadas.",
						"vietnamese": "Mọi ảo ảnh trên sa mạc đều sụp đổ. Chỉ còn lại cát lạnh và những sự thật bị lãng quên.",
						"thai": "ภาพลวงตาทั้งหมดในทะเลทรายพังทลายลง เหลือเพียงผืนทรายอันเย็นเยียบและความจริงที่ถูกลืมเลือน.",
						"hindi": "रेगिस्तान में सभी भ्रम टूट गए। बची थी केवल ठंडी रेत और भूली हुई सच्चाई।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"환상은 모래가 되어 흩어졌다. 궁극적인 허기와 갈증만이 남았다.",
			"사하르는 쓰러졌다. 그의 뒤틀린 신념도 함께.",
			"구원받은 것은 아무것도 없었다. 다만, 진실만이 황량한 사막 위에 드러났을 뿐.",
			"어쩌면, 가장 비극적인 만찬은 아직 끝나지 않은 것 같았다."
		],
		"english": [
			"The illusion scattered into sand. Only ultimate hunger and thirst remained.",
			"Sahar fell. His twisted beliefs, too.",
			"Nothing was saved. Only the truth was revealed upon the barren desert.",
			"Perhaps, the most tragic feast had yet to end."
		],
		"japanese": [
			"幻想は砂となって散った。残されたのは、究極の飢えと渇きのみ。",
			"サハルは倒れた。彼の歪んだ信念もろとも。",
			"救われたものは何もなかった。ただ、真実だけが荒涼とした砂漠の上に露わになっただけだ。",
			"もしかしたら、最も悲劇的な晩餐はまだ終わっていなかったのかもしれない。"
		],
		"chinese": [
			"幻象化作沙尘消散。只剩下极致的饥饿与干渴。",
			"萨哈尔倒下了。他扭曲的信仰也随之崩塌。",
			"一无所获。只有真相，在荒凉的沙漠上显露无遗。",
			"也许，最悲剧的盛宴尚未结束。"
		],
		"french": [
			"L'illusion s'est dispersée en sable. Seules la faim et la soif ultimes subsistaient.",
			"Sahar est tombé. Ses croyances tordues aussi.",
			"Rien n'a été sauvé. Seule la vérité a été révélée sur le désert aride.",
			"Peut-être que le festin le plus tragique n'était pas encore terminé."
		],
		"spanish": [
			"La ilusión se dispersó como arena. Solo quedaron el hambre y la sed últimas.",
			"Sahar cayó. Y con él, sus retorcidas creencias.",
			"Nada fue salvado. Solo la verdad se reveló sobre el desierto desolado.",
			"Quizás, el banquete más trágico aún no había terminado."
		],
		"vietnamese": [
			"Ảo ảnh hóa thành cát bụi và tan biến. Chỉ còn lại cơn đói và khát tột cùng.",
			"Sahar đã ngã xuống. Cùng với những niềm tin méo mó của hắn.",
			"Chẳng có gì được cứu rỗi. Chỉ có sự thật trần trụi phơi bày trên sa mạc hoang vắng.",
			"Có lẽ, bữa tiệc bi thảm nhất vẫn chưa kết thúc."
		],
		"thai": [
			"ภาพลวงตากระจายไปเป็นทราย เหลือเพียงความหิวโหยและความกระหายขั้นสูงสุด",
			"ซาฮาร์ล้มลง ความเชื่อที่บิดเบี้ยวของเขาก็เช่นกัน",
			"ไม่มีอะไรได้รับการกอบกู้ มีเพียงความจริงเท่านั้นที่เปิดเผยบนทะเลทรายที่รกร้าง",
			"บางที งานเลี้ยงที่น่าเศร้าที่สุดอาจยังไม่จบลง"
		],
		"hindi": [
			"भ्रम रेत में बिखर गया। केवल परम भूख और प्यास बची थी।",
			"साहार गिर गया। उसकी विकृत मान्यताएं भी।",
			"कुछ भी नहीं बचा था। बस, सच्चाई ही बंजर रेगिस्तान पर प्रकट हुई थी।",
			"शायद, सबसे दुखद दावत अभी खत्म नहीं हुई थी।"
		]
	},
	"prologue": {
		"korean": [
			"모래폭풍이 걷히고, 눈앞에 펼쳐진 것은 환상의 연회.",
			"허상에 잠식된 사람들의 웃음소리, 그리고 어딘가 비틀린 완벽함.",
			"미친 요리사 사하르. 그의 만찬이 이 모든 것의 끝일 터였다.",
			"씁쓸한 진실이, 현실을 집어삼키려 하고 있었다."
		],
		"english": [
			"The sandstorm cleared, revealing a feast of illusions.",
			"Laughter of people consumed by illusion, and a twisted perfection.",
			"Sahar, the mad chef. His feast was meant to be the end of it all.",
			"A bitter truth was about to swallow reality whole."
		],
		"japanese": [
			"砂嵐が晴れ、目の前に広がるは幻想の宴。",
			"虚像に侵された人々の笑い声、そしてどこか歪んだ完璧さ。",
			"狂気の料理人サハル。彼の晩餐が、この全ての終わりとなるはずだった。",
			"苦い真実が、現実を飲み込もうとしていた。"
		],
		"chinese": [
			"沙尘暴散去，眼前展开的是一场幻象的盛宴。",
			"被虚像侵蚀的人们的笑声，以及某种扭曲的完美。",
			"疯狂的厨师萨哈尔。他的盛宴本应是这一切的终结。",
			"苦涩的真相，正试图吞噬现实。"
		],
		"french": [
			"La tempête de sable s'est dissipée, révélant un festin illusoire.",
			"Les rires des gens dévorés par l'illusion, et une perfection quelque peu tordue.",
			"Sahar, le chef fou. Son festin devait marquer la fin de tout cela.",
			"Une vérité amère était sur le point d'engloutir la réalité."
		],
		"spanish": [
			"La tormenta de arena se disipó, revelando un banquete de ilusiones.",
			"Risas de personas consumidas por la ilusión, y una perfección retorcida.",
			"Sahar, el chef loco. Su banquete debía ser el fin de todo.",
			"Una verdad amarga estaba a punto de devorar la realidad."
		],
		"vietnamese": [
			"Cơn bão cát tan đi, trước mắt hiện ra một bữa tiệc ảo ảnh.",
			"Tiếng cười của những kẻ bị ảo ảnh nuốt chửng, và một sự hoàn hảo méo mó.",
			"Đầu bếp điên Sahar. Bữa tiệc của hắn lẽ ra phải là dấu chấm hết cho tất cả.",
			"Một sự thật cay đắng đang cố nuốt chửng hiện thực."
		],
		"thai": [
			"พายุทรายคลี่คลายลง สิ่งที่ปรากฏเบื้องหน้าคือ งานเลี้ยงแห่งภาพลวงตา",
			"เสียงหัวเราะของผู้คนที่ถูกภาพลวงตาครอบงำ และความสมบูรณ์แบบที่บิดเบี้ยว",
			"ซาฮาร์ เชฟผู้บ้าคลั่ง งานเลี้ยงของเขาน่าจะเป็นจุดจบของทุกสิ่ง",
			"ความจริงอันขมขื่นกำลังจะกลืนกินความเป็นจริง"
		],
		"hindi": [
			"रेत का तूफान थम गया, और सामने एक भ्रमपूर्ण दावत फैली हुई थी।",
			"भ्रम में डूबे लोगों की हंसी, और कहीं-कहीं मुड़ी हुई पूर्णता।",
			"पागल रसोइया साहार। उसकी दावत ही इस सब का अंत होनी थी।",
			"एक कड़वी सच्चाई, वास्तविकता को निगलने वाली थी।"
		]
	}
} as const;
