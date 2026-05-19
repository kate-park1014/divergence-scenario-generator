export const scenario_WorldRootTitan_Echo_02 = {
	"scenario_id": "WorldRootTitan_Echo_02",
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
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "숲의 뿌리들이 비정상적으로 쿵쿵거렸다. 거대한 심장이 뛰는 소리 같았다.",
						"english": "The forest roots thumped abnormally. It sounded like a giant heart beating.",
						"japanese": "森の根が異常に脈打っていた。まるで巨大な心臓の鼓動のようだった。",
						"chinese": "森林的根系异常地砰砰作响。听起来就像一颗巨大的心脏在跳动。",
						"french": "Les racines de la forêt battaient anormalement. Cela ressemblait au battement d'un cœur gigantesque.",
						"spanish": "Las raíces del bosque latían anormalmente. Sonaba como un gigantesco corazón latiendo.",
						"vietnamese": "Rễ cây rừng đập bất thường. Nghe như tiếng một trái tim khổng lồ đang đập.",
						"thai": "รากของป่าสั่นสะเทือนผิดปกติ มันเหมือนเสียงหัวใจยักษ์กำลังเต้น",
						"hindi": "वन की जड़ें असामान्य रूप से धड़क रही थीं। यह एक विशाल हृदय की धड़कन जैसा लग रहा था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 진동은 뭐야? 숲이 살아있는 것 같아.",
						"english": "What's this vibration? It's like the forest is alive.",
						"japanese": "この振動は何？森が生きているみたい。",
						"chinese": "这是什么震动？森林好像活过来了。",
						"french": "C'est quoi cette vibration ? On dirait que la forêt est vivante.",
						"spanish": "¿Qué es esta vibración? Parece que el bosque está vivo.",
						"vietnamese": "Rung động này là gì? Cứ như khu rừng đang sống vậy.",
						"thai": "นี่มันการสั่นสะเทือนอะไร? เหมือนป่ามีชีวิตเลย",
						"hindi": "यह कंपन क्या है? ऐसा लगता है जैसे वन जीवित है।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ela"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "…또 아무도 안 들을 거야?",
						"english": "...Is no one going to listen again?",
						"japanese": "…また誰も聞いてくれないの？",
						"chinese": "……又没有人会听吗？",
						"french": "...Personne ne va écouter encore une fois ?",
						"spanish": "¿Nadie va a escuchar de nuevo?",
						"vietnamese": "...Lại không ai nghe sao?",
						"thai": "...จะไม่มีใครฟังอีกแล้วเหรอ?",
						"hindi": "...क्या कोई फिर से नहीं सुनेगा?"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "어린 요정? 여기서 뭘 하는 거지.",
						"english": "A young fairy? What are you doing here?",
						"japanese": "幼い妖精？ここで何してるの。",
						"chinese": "小妖精？你在这里做什么。",
						"french": "Une jeune fée ? Que fais-tu ici ?",
						"spanish": "¿Una joven hada? ¿Qué haces aquí?",
						"vietnamese": "Một nàng tiên nhỏ? Ngươi đang làm gì ở đây vậy?",
						"thai": "นางฟ้าตัวน้อย? มาทำอะไรที่นี่",
						"hindi": "एक छोटी परी? तुम यहाँ क्या कर रही हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그때도 그랬어… 카인이 위험하다고, 숲이 아프다고 했는데.",
						"english": "It was the same back then... I said Cain was dangerous, that the forest was hurting.",
						"japanese": "あの時もそうだった…カインが危険だと、森が苦しんでいると言ったのに。",
						"chinese": "那时候也是……我说凯恩很危险，森林很痛苦。",
						"french": "C'était pareil à l'époque... J'ai dit que Caïn était dangereux, que la forêt souffrait.",
						"spanish": "Fue lo mismo entonces... Dije que Caín era peligroso, que el bosque sufría.",
						"vietnamese": "Hồi đó cũng vậy... Tôi đã nói Cain nguy hiểm, rằng khu rừng đang đau khổ.",
						"thai": "ตอนนั้นก็เหมือนกัน... ฉันบอกว่าเคนอันตราย ป่ากำลังเจ็บปวด",
						"hindi": "तब भी ऐसा ही था... मैंने कहा था कि केन खतरनाक है, कि वन को दर्द हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이젠 숲이… 미쳐버렸어.",
						"english": "Now the forest... has gone mad.",
						"japanese": "もう森が…狂ってしまった。",
						"chinese": "现在森林……已经疯了。",
						"french": "Maintenant la forêt... est devenue folle.",
						"spanish": "Ahora el bosque... se ha vuelto loco.",
						"vietnamese": "Giờ thì khu rừng... đã phát điên rồi.",
						"thai": "ตอนนี้ป่า... มันบ้าไปแล้ว",
						"hindi": "अब वन... पागल हो गया है।"
					},
					"emotion": "angry",
					"speaker": "ela"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ela"
				},
				{
					"speaker": "ela",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "세계수가… 고대 수호자의 봉인을 깨우고 있어.",
						"english": "The World Tree... is awakening the Ancient Guardian's seal.",
						"japanese": "世界樹が…古代守護者の封印を解き放とうとしている。",
						"chinese": "世界树……正在唤醒古代守护者的封印。",
						"french": "L'Arbre Monde... réveille le sceau de l'Ancien Gardien.",
						"spanish": "El Árbol del Mundo... está despertando el sello del Guardián Antiguo.",
						"vietnamese": "Cây Thế Giới... đang đánh thức phong ấn của Hộ Vệ Cổ Đại.",
						"thai": "ต้นไม้โลก... กำลังปลุกผนึกของผู้พิทักษ์โบราณ",
						"hindi": "विश्व वृक्ष... प्राचीन संरक्षक की मुहर को जगा रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "고대 수호자? 그게 뭔데?",
						"english": "Ancient Guardian? What's that?",
						"japanese": "古代守護者？それ、何？",
						"chinese": "古代守护者？那是什么？",
						"french": "Ancien Gardien ? Qu'est-ce que c'est ?",
						"spanish": "¿Guardián Antiguo? ¿Qué es eso?",
						"vietnamese": "Hộ Vệ Cổ Đại? Đó là gì?",
						"thai": "ผู้พิทักษ์โบราณ? มันคืออะไร?",
						"hindi": "प्राचीन संरक्षक? वह क्या है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "전설 속에만 있는 이야기야. 숲을 지키는 존재… 깨어나면 모든 걸 뒤바꿀 거라고 했어.",
						"english": "It's just a legend. A being that protects the forest... They say it will change everything if it awakens.",
						"japanese": "伝説の中だけの話だよ。森を守る存在…目覚めれば全てをひっくり返すって言ってた。",
						"chinese": "那只是传说。一个守护森林的存在……据说它醒来后会颠覆一切。",
						"french": "C'est juste une légende. Un être qui protège la forêt... On dit que s'il se réveille, il changera tout.",
						"spanish": "Es solo una leyenda. Un ser que protege el bosque... Dicen que si despierta, lo cambiará todo.",
						"vietnamese": "Đó chỉ là một truyền thuyết. Một thực thể bảo vệ rừng... Người ta nói nó sẽ thay đổi mọi thứ nếu thức tỉnh.",
						"thai": "เป็นแค่ตำนาน สิ่งมีชีวิตที่ปกป้องป่า... พวกเขาบอกว่าจะเปลี่ยนทุกสิ่งถ้ามันตื่นขึ้นมา",
						"hindi": "यह बस एक किंवदंती है। एक ऐसा प्राणी जो जंगल की रक्षा करता है... वे कहते हैं कि अगर वह जाग गया, तो सब कुछ बदल देगा।"
					},
					"emotion": "base",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뒤바꾼다니… 좋은 쪽으로?",
						"english": "Change everything... for the better?",
						"japanese": "ひっくり返すって…良い方に？",
						"chinese": "颠覆一切……是好的方面吗？",
						"french": "Changer tout... pour le mieux ?",
						"spanish": "¿Cambiarlo todo... para bien?",
						"vietnamese": "Thay đổi mọi thứ... theo hướng tốt hơn à?",
						"thai": "เปลี่ยนทุกสิ่ง... ไปในทางที่ดีขึ้นเหรอ?",
						"hindi": "सब कुछ बदल देगा... क्या बेहतर के लिए?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니. (angry) 모든 걸 부술지도 몰라.",
						"english": "No. (angry) It might destroy everything.",
						"japanese": "違う。（怒）全てを壊すかもしれない。",
						"chinese": "不。（生气）它可能会摧毁一切。",
						"french": "Non. (énervé) Il pourrait tout détruire.",
						"spanish": "No. (enfadado) Podría destruirlo todo.",
						"vietnamese": "Không. (tức giận) Nó có thể phá hủy mọi thứ.",
						"thai": "ไม่ (โกรธ) มันอาจจะทำลายทุกสิ่ง",
						"hindi": "नहीं। (गुस्से में) यह सब कुछ नष्ट कर सकता है।"
					},
					"emotion": "angry",
					"speaker": "ela"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲이 이상해. 뿌리가 스스로 움직여.",
						"english": "The forest is strange. The roots are moving on their own.",
						"japanese": "森がおかしい。根が勝手に動いている。",
						"chinese": "森林很奇怪。树根自己在动。",
						"french": "La forêt est étrange. Les racines bougent toutes seules.",
						"spanish": "El bosque está extraño. Las raíces se mueven solas.",
						"vietnamese": "Khu rừng thật lạ. Rễ cây đang tự mình di chuyển.",
						"thai": "ป่ามันแปลก รากไม้เคลื่อนไหวได้เอง",
						"hindi": "जंगल अजीब है। जड़ें अपने आप हिल रही हैं।"
					},
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "뿌리가 벽을 뚫고 솟아났다. 살아있는 촉수처럼 흔들렸다.",
						"english": "Roots burst through the wall. They swayed like living tentacles.",
						"japanese": "根が壁を突き破って現れた。生きている触手のように揺れていた。",
						"chinese": "树根破墙而出。它们像活着的触手一样摇摆。",
						"french": "Des racines ont traversé le mur. Elles ondulaient comme des tentacules vivants.",
						"spanish": "Las raíces irrumpieron a través de la pared. Se balanceaban como tentáculos vivientes.",
						"vietnamese": "Rễ cây xuyên qua bức tường và vươn ra. Chúng đung đưa như những xúc tu sống.",
						"thai": "รากไม้ทะลุผนังออกมา มันแกว่งไปมาเหมือนหนวดปลาหมึกมีชีวิต",
						"hindi": "जड़ें दीवार से फूट निकलीं। वे जीवित टेंटकल की तरह हिल रही थीं।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이건… 전설의 그 수호자 짓이야?",
						"english": "This... is the doing of that legendary Guardian?",
						"japanese": "これって…伝説のあの守護者の仕業なの？",
						"chinese": "这……是传说中那个守护者干的吗？",
						"french": "C'est... l'œuvre de ce Gardien légendaire ?",
						"spanish": "Esto... ¿es obra de ese Guardián legendario?",
						"vietnamese": "Đây... là việc làm của Hộ Vệ truyền thuyết đó sao?",
						"thai": "นี่... เป็นฝีมือของผู้พิทักษ์ในตำนานคนนั้นเหรอ?",
						"hindi": "यह... क्या उस पौराणिक संरक्षक का काम है?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아마… 세계수 안에서 그 존재가 꿈틀대고 있어.",
						"english": "Probably... that being is stirring within the World Tree.",
						"japanese": "多分…世界樹の中で、あの存在が蠢いている。",
						"chinese": "可能吧……那个存在正在世界树内蠢蠢欲动。",
						"french": "Probablement... cette entité frémit à l'intérieur de l'Arbre Monde.",
						"spanish": "Probablemente... esa entidad se está agitando dentro del Árbol del Mundo.",
						"vietnamese": "Chắc vậy... thực thể đó đang cựa quậy bên trong Cây Thế Giới.",
						"thai": "อาจจะ... สิ่งมีชีวิตนั้นกำลังปั่นป่วนอยู่ภายในต้นไม้โลก",
						"hindi": "शायद... वह प्राणी विश्व वृक्ष के भीतर हलचल कर रहा है।"
					},
					"speaker": "ela",
					"emotion": "sad"
				},
				{
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "위험해. 더 이상 가면 안 돼. 너희도 당할 거야.",
						"english": "It's dangerous. Don't go any further. You'll be affected too.",
						"japanese": "危ない。これ以上行っちゃダメだ。お前たちもやられるぞ。",
						"chinese": "危险。不能再往前走了。你们也会遭殃的。",
						"french": "C'est dangereux. N'allez pas plus loin. Vous serez aussi affectés.",
						"spanish": "Es peligroso. No vayas más lejos. Vosotros también seréis afectados.",
						"vietnamese": "Nguy hiểm lắm. Đừng đi xa hơn nữa. Các ngươi cũng sẽ bị ảnh hưởng đấy.",
						"thai": "อันตราย อย่าไปไกลกว่านี้ เธอจะโดนไปด้วย",
						"hindi": "यह खतरनाक है। और आगे मत जाओ। तुम भी प्रभावित हो जाओगे।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 더 깊은 곳으로 가야 해.",
						"english": "Can't stop now. Must go deeper.",
						"japanese": "止まれない。もっと奥へ行かないと。",
						"chinese": "停不下来。必须去更深处。",
						"french": "Impossible de s'arrêter. Je dois aller plus loin.",
						"spanish": "No puedo parar. Debo ir más profundo.",
						"vietnamese": "Không thể dừng lại. Phải đi sâu hơn nữa.",
						"thai": "หยุดไม่ได้ ต้องไปให้ลึกกว่านี้",
						"hindi": "रुक नहीं सकता। मुझे और गहराई में जाना होगा।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜 자꾸 가려는 거야? 카인 때문에 화가 나서 그래?",
						"english": "Why keep going? Is it because of Cain?",
						"japanese": "なぜそんなに進むの？カインのせいで怒ってる？",
						"chinese": "为何执意前往？只因凯因？",
						"french": "Pourquoi continuer ? C'est à cause de Caïn ?",
						"spanish": "¿Por qué sigues? ¿Es por Caín?",
						"vietnamese": "Sao cứ muốn đi? Giận Cain à?",
						"thai": "ทำไมถึงยังไปต่อ? โกรธไคน์หรือไง?",
						"hindi": "क्यों जा रहे हो? क्या केन की वजह से गुस्सा हो?"
					},
					"speaker": "ela",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "복수도 중요해. 하지만 이 숲을 이렇게 둘 수는 없어.",
						"english": "Revenge is important, but I can't leave this forest like this.",
						"japanese": "復讐も大事だ。だが、この森をこのままにはしておけない。",
						"chinese": "复仇重要，但不能任由森林如此。",
						"french": "La vengeance est importante, mais je ne peux pas laisser cette forêt ainsi.",
						"spanish": "La venganza es importante, pero no puedo dejar el bosque así.",
						"vietnamese": "Báo thù cũng quan trọng, nhưng không thể để khu rừng này như vậy.",
						"thai": "การแก้แค้นก็สำคัญ แต่จะปล่อยให้ป่าเป็นแบบนี้ไม่ได้",
						"hindi": "बदला ज़रूरी है। लेकिन मैं इस जंगल को ऐसे नहीं छोड़ सकता।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가 말한 고대 수호자… 만나봐야겠어.",
						"english": "The ancient guardian you spoke of... I must meet them.",
						"japanese": "君が言っていた古代の守護者… 会ってみるべきだ。",
						"chinese": "你说的古代守护者……我必须去见见。",
						"french": "Le gardien antique dont tu as parlé… je dois le rencontrer.",
						"spanish": "El guardián antiguo del que hablaste... debo conocerlo.",
						"vietnamese": "Người bảo hộ cổ đại mà ngươi nói… ta phải gặp.",
						"thai": "ผู้พิทักษ์โบราณที่เจ้าพูดถึง... ข้าต้องไปพบ",
						"hindi": "जिस प्राचीन संरक्षक की तुमने बात की... मुझे उनसे मिलना होगा।"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…진짜 미쳤어. 그래도 혼자 보내지 않아.",
						"english": "...Truly mad. Still, I won't send you alone.",
						"japanese": "…本当に狂ってる。でも、一人では行かせない。",
						"chinese": "...真疯了。但我不会让你独自去。",
						"french": "…Tu es vraiment fou. Mais je ne te laisserai pas y aller seul.",
						"spanish": "...Estás realmente loco. Pero no te dejaré ir solo.",
						"vietnamese": "…Thật điên rồ. Dù vậy, ta sẽ không để ngươi đi một mình.",
						"thai": "...บ้าไปแล้วจริงๆ แต่ฉันไม่ปล่อยให้นายไปคนเดียวหรอก",
						"hindi": "...तुम सचमुच पागल हो। फिर भी, मैं तुम्हें अकेला नहीं भेजूंगा।"
					},
					"speaker": "ela",
					"emotion": "sad"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "happy",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "역시 어리석군. 인간의 힘으론 '그 분'을 막을 수 없어.",
						"english": "Foolish. Human strength cannot stop 'Him'.",
						"japanese": "やはり愚かだな。人間の力では『あの方』を止められぬ。",
						"chinese": "果然愚蠢。人类的力量无法阻止‘那位大人’。",
						"french": "Stupide. La force humaine ne peut L'arrêter.",
						"spanish": "Estúpido. El poder humano no puede detener a 'Él'.",
						"vietnamese": "Thật ngu ngốc. Sức mạnh con người không thể ngăn cản 'Người'.",
						"thai": "โง่เขลา สิ้นหวัง พลังของมนุษย์ไม่อาจหยุด 'ท่านผู้นั้น' ได้",
						"hindi": "मूर्खतापूर्ण। मानवीय शक्ति 'उन्हें' नहीं रोक सकती।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "숲은 삼켜질 것이다. 모두가 '그 분'의 양식이 될 때까지.",
						"english": "The forest will be devoured. Until all become 'His' sustenance.",
						"japanese": "森は飲み込まれるだろう。全てが『あの方』の糧となるまで。",
						"chinese": "森林将被吞噬。直到所有人都成为‘那位大人’的养料。",
						"french": "La forêt sera dévorée. Jusqu'à ce que tous deviennent Sa subsistance.",
						"spanish": "El bosque será devorado. Hasta que todos se conviertan en 'Su' sustento.",
						"vietnamese": "Khu rừng sẽ bị nuốt chửng. Cho đến khi tất cả trở thành thức ăn của 'Người'.",
						"thai": "ป่าจะถูกกลืนกิน จนกว่าทุกคนจะกลายเป็นอาหารของ 'ท่านผู้นั้น'",
						"hindi": "वन निगल लिया जाएगा। जब तक सभी 'उनके' पोषण न बन जाएं।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ela"
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "안 돼! 포기하지 마!",
						"english": "No! Don't give up!",
						"japanese": "だめだ！諦めるな！",
						"chinese": "不！不要放弃！",
						"french": "Non ! N'abandonne pas !",
						"spanish": "¡No! ¡No te rindas!",
						"vietnamese": "Không! Đừng bỏ cuộc!",
						"thai": "ไม่นะ! อย่าเพิ่งยอมแพ้!",
						"hindi": "नहीं! हार मत मानो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "…まだ終わってない。",
						"chinese": "…还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Aún no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบหรอก",
						"hindi": "...अभी खत्म नहीं हुआ है।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 일렁였다.",
						"english": "The deepest part of the forest. A colossal shadow rippled.",
						"japanese": "森の最も深い場所。巨大な影が揺らめいた。",
						"chinese": "森林最深处。一道巨大的身影晃动着。",
						"french": "Au plus profond de la forêt. Une ombre gigantesque vacillait.",
						"spanish": "La parte más profunda del bosque. Una sombra colosal se agitó.",
						"vietnamese": "Nơi sâu nhất của rừng. Một bóng đen khổng lồ lay động.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดมหึมาสั่นไหว",
						"hindi": "जंगल के सबसे गहरे हिस्से में। एक विशाल परछाईं डोल उठी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "여기까지 오다니. 어리석은 인간들.",
						"english": "To come this far. Foolish humans.",
						"japanese": "ここまで来るとはな。愚かな人間どもめ。",
						"chinese": "竟敢来到这里。愚蠢的人类。",
						"french": "Oser venir jusqu'ici. Humains stupides.",
						"spanish": "Haber llegado hasta aquí. Humanos insensatos.",
						"vietnamese": "Dám đến tận đây. Loài người ngu ngốc.",
						"thai": "กล้ามาถึงที่นี่. มนุษย์โง่เขลา",
						"hindi": "यहां तक आ गए। मूर्ख इंसानो।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "이 숲은 이제 '그 분'의 것이다. 너희 같은 벌레들이 뭘 할 수 있지?",
						"english": "This forest now belongs to 'Him'. What can bugs like you do?",
						"japanese": "この森は今や「あの方」のものだ。お前たち虫けらごときに何ができる？",
						"chinese": "这片森林现在属于“那位大人”。你们这些虫子能做什么？",
						"french": "Cette forêt appartient maintenant à 'Lui'. Que peuvent faire des insectes comme vous ?",
						"spanish": "Este bosque ahora es de 'Él'. ¿Qué pueden hacer insectos como vosotros?",
						"vietnamese": "Khu rừng này giờ đã thuộc về 'Người đó'. Bọn sâu bọ như các ngươi có thể làm gì?",
						"thai": "ป่าแห่งนี้เป็นของ 'ท่านผู้นั้น' แล้ว. พวกเจ้าหนอนแมลงจะทำอะไรได้?",
						"hindi": "यह जंगल अब 'उनके' अधीन है। तुम जैसे कीड़े क्या कर सकते हो?"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "시끄러워. 숲을 망가뜨리는 건 너희야.",
						"english": "Quiet. You're the ones destroying the forest.",
						"japanese": "うるさい。森を破壊しているのはお前たちだ。",
						"chinese": "闭嘴。破坏森林的是你们。",
						"french": "Silence. C'est vous qui détruisez la forêt.",
						"spanish": "Silencio. Sois vosotros quienes destrozáis el bosque.",
						"vietnamese": "Im đi. Kẻ phá hoại khu rừng chính là các ngươi.",
						"thai": "หุบปาก. พวกแกต่างหากที่ทำลายป่า",
						"hindi": "चुप रहो। जंगल को तबाह करने वाले तुम हो।"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"type": "speech",
					"content": {
						"korean": "{random_boss}! 숲을 아프게 하지 마!",
						"english": "{random_boss}! Don't hurt the forest!",
						"japanese": "{random_boss}！森を傷つけるな！",
						"chinese": "{random_boss}！别伤害森林！",
						"french": "{random_boss} ! Ne blesse pas la forêt !",
						"spanish": "¡{random_boss}! ¡No hagas daño al bosque!",
						"vietnamese": "{random_boss}! Đừng làm tổn thương khu rừng!",
						"thai": "{random_boss}! อย่าทำร้ายป่า!",
						"hindi": "{random_boss}! जंगल को चोट मत पहुंचाओ!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "어린 요정 주제에. 네 경고는 아무도 듣지 않아.",
						"english": "A mere sprite. No one heeds your warning.",
						"japanese": "若輩の妖精め。お前の警告など、誰も聞きはしない。",
						"chinese": "区区小妖精。你的警告无人理会。",
						"french": "Simple fée. Personne ne prête attention à ton avertissement.",
						"spanish": "Pura hada. Nadie atiende a tu advertencia.",
						"vietnamese": "Chỉ là một tiểu tiên. Không ai nghe lời cảnh báo của ngươi đâu.",
						"thai": "แค่ภูตน้อยไร้เดียงสา คำเตือนของเจ้าไม่มีใครฟังหรอก",
						"hindi": "महज एक नन्ही परी। तुम्हारी चेतावनी कोई नहीं सुनेगा。"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이 숲은 이미 오염됐다. 되돌릴 수 없어.",
						"english": "This forest is tainted. Beyond redemption.",
						"japanese": "この森はすでに汚染された。もう元には戻せない。",
						"chinese": "这片森林已被污染。无法挽回。",
						"french": "Cette forêt est souillée. Irrécupérable.",
						"spanish": "Este bosque está contaminado. Irreversible.",
						"vietnamese": "Khu rừng này đã bị ô uế. Không thể cứu vãn.",
						"thai": "ป่านี้แปดเปื้อนแล้ว ไม่อาจกู้คืนได้",
						"hindi": "यह जंगल पहले ही दूषित हो चुका है। इसे वापस नहीं लिया जा सकता।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "어디 한번 해봐. 숲은 네 것이 아니야.",
						"english": "Go on, try. This forest isn't yours.",
						"japanese": "やってみろ。森はお前のものじゃない。",
						"chinese": "尽管试试。这片森林不属于你。",
						"french": "Vas-y, essaie. Cette forêt ne t'appartient pas.",
						"spanish": "Inténtalo. Este bosque no es tuyo.",
						"vietnamese": "Cứ thử đi. Khu rừng này không thuộc về ngươi.",
						"thai": "ลองดูสิ ป่านี้ไม่ใช่ของเจ้า",
						"hindi": "चलो, कोशिश करो। यह जंगल तुम्हारा नहीं है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…하찮은 힘으로… 잠시 멈췄을 뿐…",
						"english": "...A fleeting halt... with trivial power...",
						"japanese": "…取るに足らない力で…一時的に止めただけ…",
						"chinese": "…区区微力…不过是暂时阻止罢了…",
						"french": "...Un bref arrêt... avec un pouvoir insignifiant...",
						"spanish": "...Solo lo detuviste... con tu poder insignificante...",
						"vietnamese": "...Chỉ tạm dừng... bằng thứ sức mạnh tầm thường...",
						"thai": "...พลังอันน้อยนิด...หยุดได้แค่ชั่วคราวเท่านั้น...",
						"hindi": "...तुच्छ शक्ति से... बस कुछ पल के लिए रोका है..."
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "'그 분'의 계획은… 거스를 수 없다… 숲은… 결국…",
						"english": "His plan... cannot be defied... The forest... will fall...",
						"japanese": "『あの方』の計画は…逆らえない…森は…結局…",
						"chinese": "‘那位大人’的计划…不可逆转…森林…终将…",
						"french": "Son plan... ne peut être défié... La forêt... tombera...",
						"spanish": "Su plan... no puede ser desafiado... El bosque... al final...",
						"vietnamese": "Kế hoạch của Người... không thể bị cản trở... Rừng rồi... cuối cùng...",
						"thai": "แผนการของ 'ท่านผู้นั้น'...มิอาจขัดขวางได้...ป่านี้...ในที่สุด...",
						"hindi": "'उनकी' योजना... को नहीं टाला जा सकता... जंगल... अंततः..."
					}
				},
				{
					"direction": "up",
					"speaker": "random_boss",
					"type": "direction",
					"duration_ms": 500,
					"action": "exit"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "멈췄나? 이 이상한 진동은….",
						"english": "Stopped? This strange tremor...",
						"japanese": "止まったか？この奇妙な振動は…。",
						"chinese": "停下了吗？这奇怪的震动……",
						"french": "Arrêté ? Cette étrange vibration...",
						"spanish": "¿Se detuvo? Esta extraña vibración...",
						"vietnamese": "Dừng lại rồi ư? Chấn động lạ lùng này...",
						"thai": "หยุดแล้วหรือ? การสั่นสะเทือนประหลาดนี้...",
						"hindi": "रुक गया? यह अजीब कंपन..."
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니… 더 강한 어둠이 느껴져.",
						"english": "No... I sense a stronger darkness.",
						"japanese": "いや…もっと強い闇を感じる。",
						"chinese": "不……我感到了更强大的黑暗。",
						"french": "Non... Je sens une obscurité plus forte.",
						"spanish": "No... Siento una oscuridad más intensa.",
						"vietnamese": "Không... Ta cảm thấy một bóng tối mạnh hơn.",
						"thai": "ไม่...ข้าสัมผัสได้ถึงความมืดมิดที่รุนแรงกว่า",
						"hindi": "नहीं... मुझे और भी गहरा अंधकार महसूस हो रहा है।"
					},
					"emotion": "sad",
					"speaker": "ela"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이건 시작일 뿐이야. 고대 수호자가… 깨어나는 소리야.",
						"english": "This is just the beginning. The ancient guardian... stirs.",
						"japanese": "これは始まりに過ぎない。古の守護者が…目覚める音だ。",
						"chinese": "这只是开始。是古代守护者……苏醒的声音。",
						"french": "Ce n'est que le début. Le gardien antique... s'éveille.",
						"spanish": "Esto es solo el principio. El antiguo guardián... está despertando.",
						"vietnamese": "Đây chỉ là khởi đầu. Vị thần bảo hộ cổ xưa... đang thức tỉnh.",
						"thai": "นี่เป็นเพียงจุดเริ่มต้น ผู้พิทักษ์โบราณ...กำลังตื่นขึ้น",
						"hindi": "यह सिर्फ़ शुरुआत है। प्राचीन संरक्षक... जाग रहा है।"
					},
					"speaker": "ela",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "중간보스는 사라졌지만, 불안은 걷히지 않았다. 숲은 더 깊은 혼돈으로 향하고 있었다.",
						"english": "The mid-boss fell, but unease lingered. The forest plunged deeper into chaos.",
						"japanese": "中ボスは消えたが、不安は晴れなかった。森はより深い混沌へと向かっていた。",
						"chinese": "小头目虽然消失了，但不安并未消除。森林正走向更深的混沌。",
						"french": "Le boss intermédiaire est tombé, mais l'inquiétude persistait. La forêt sombrait dans un chaos plus profond.",
						"spanish": "El jefe intermedio cayó, pero la inquietud permanecía. El bosque se adentraba en un caos más profundo.",
						"vietnamese": "Boss phụ đã biến mất, nhưng sự bất an không tan biến. Khu rừng đang chìm sâu hơn vào hỗn loạn.",
						"thai": "บอสรองหายไปแล้ว แต่ความไม่สบายใจยังคงอยู่ ป่ากำลังจมดิ่งสู่ความโกลาหลที่ลึกซึ้งยิ่งขึ้น",
						"hindi": "मध्य-बॉस तो चला गया, लेकिन अशांति बनी रही। जंगल गहरे अराजकता में डूब रहा था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "어딘가에서 알 수 없는 문양이 희미하게 빛나기 시작했다.",
						"english": "Somewhere, an unknown emblem began to glow faintly.",
						"japanese": "どこかで、未知の文様がかすかに光り始めた。",
						"chinese": "某个地方，一个未知的图腾开始发出微弱的光芒。",
						"french": "Quelque part, un emblème inconnu commença à luire faiblement.",
						"spanish": "En algún lugar, un emblema desconocido comenzó a brillar débilmente.",
						"vietnamese": "Ở đâu đó, một họa tiết bí ẩn bắt đầu phát sáng mờ ảo.",
						"thai": "ที่ใดสักแห่ง สัญลักษณ์ที่ไม่รู้จักเริ่มเปล่งประกายจางๆ",
						"hindi": "कहीं, एक अज्ञात प्रतीक मंद-मंद चमकने लगा।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"카인의 통제가 사라진 숲은 더 깊은 혼돈 속으로 빠져들었다.",
			"광포해진 세계수는 이제 숲의 모든 것을 뒤흔들고 있었다.",
			"어린 요정의 경고는 희미한 전설과 함께 새로운 진실을 예고했다.",
			"이곳은 단순한 복수의 끝이 아니었다. 새로운 시작이자, 거대한 재앙의 서막이었다."
		],
		"english": [
			"The forest, freed from Cain's control, plunged into deeper chaos.",
			"The rampaging World Tree now shook everything in the forest.",
			"The young fairy's warning, alongside a faint legend, foretold a new truth.",
			"This was no mere end to revenge. It was a new beginning, the prelude to a great catastrophe."
		],
		"japanese": [
			"カインの支配を失った森は、より深い混沌へと落ちていった。",
			"荒れ狂う世界樹は、森の全てを揺るがしていた。",
			"幼い妖精の警告は、かすかな伝説と共に新たな真実を告げていた。",
			"ここは単なる復讐の終わりではなかった。新たな始まりであり、巨大な災厄の序幕であった。"
		],
		"chinese": [
			"失去凯恩掌控的森林，陷入了更深的混沌之中。",
			"狂暴的世界树，此刻正撼动着森林的一切。",
			"小妖精的警告，伴随着模糊的传说，预示着一个新的真相。",
			"这里并非仅仅是复仇的终结。这是一个新的开始，一场巨大灾难的序幕。"
		],
		"french": [
			"La forêt, libérée du contrôle de Caïn, sombra dans un chaos plus profond.",
			"L'Arbre Monde déchaîné secouait désormais tout dans la forêt.",
			"L'avertissement de la jeune fée, accompagné d'une faible légende, annonçait une nouvelle vérité.",
			"Ce n'était pas une simple fin de vengeance. C'était un nouveau commencement, le prélude d'une immense catastrophe."
		],
		"spanish": [
			"El bosque, liberado del control de Caín, se sumió en un caos aún más profundo.",
			"El furioso Árbol del Mundo ahora sacudía todo en el bosque.",
			"La advertencia de la joven hada, junto con una tenue leyenda, predijo una nueva verdad.",
			"Esto no era un mero fin de la venganza. Era un nuevo comienzo, el preludio de una gran catástrofe."
		],
		"vietnamese": [
			"Khu rừng, mất đi sự kiểm soát của Cain, chìm sâu hơn vào hỗn loạn.",
			"Cây Thế giới đang hoành hành giờ đây rung chuyển mọi thứ trong rừng.",
			"Lời cảnh báo của nàng tiên trẻ, cùng với một truyền thuyết mờ nhạt, đã báo trước một sự thật mới.",
			"Đây không chỉ là hồi kết của sự trả thù. Đây là một khởi đầu mới, khúc dạo đầu của một thảm họa lớn."
		],
		"thai": [
			"ป่าที่ปราศจากการควบคุมของเคน จมดิ่งสู่ความโกลาหลที่ลึกซึ้งยิ่งขึ้น",
			"ต้นไม้โลกที่บ้าคลั่งกำลังสั่นสะเทือนทุกสิ่งในป่า",
			"คำเตือนของนางฟ้าตัวน้อยพร้อมกับตำนานที่เลือนราง ได้ทำนายความจริงใหม่",
			"นี่ไม่ใช่แค่จุดสิ้นสุดของการแก้แค้น แต่มันคือการเริ่มต้นใหม่ อารัมภบทของหายนะอันยิ่งใหญ่"
		],
		"hindi": [
			"केन के नियंत्रण से मुक्त वन, गहरे अराजकता में डूब गया।",
			"प्रचंड विश्व वृक्ष अब वन में सब कुछ हिला रहा था।",
			"छोटी परी की चेतावनी, एक धुंधली किंवदंती के साथ, एक नए सत्य की भविष्यवाणी करती थी।",
			"यह केवल बदले का अंत नहीं था। यह एक नई शुरुआत थी, एक बड़ी आपदा का प्रस्तावना।"
		]
	}
} as const;
