export const scenario_forest_kaelen_19_02 = {
	"scenario_id": "forest_kaelen_19_02",
	"order": 2,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"briar": {
			"id": "mon_21f92820-190e-4d08-a75c-5d2c0b6d0a6b",
			"name": {
				"korean": "브라이어",
				"english": "Briar",
				"japanese": "ブライア",
				"chinese": "布莱尔",
				"french": "Briar",
				"spanish": "Briar",
				"vietnamese": "Briar",
				"thai": "ไบรอา",
				"hindi": "ब्रायर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/41fb431e-57e0-45e0-dde6-1a1f02c01200/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/dd89dff7-88ed-4444-28d8-5aaa85bd4e00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"고요한 숲에 시장이 섰다. 정보가 곧 돈인 곳.",
			"하지만 그 정보는 공평하지 않았다.",
			"누군가 숲의 속삭임을 조종하고 있었다.",
			"그리고 그 조작된 거래 속에서, 작은 상인은 절규했다."
		],
		"english": [
			"A market emerged in the quiet forest. Where information was currency.",
			"But that information wasn't fair.",
			"Someone was manipulating the forest's whispers.",
			"And in those manipulated dealings, a small merchant cried out."
		],
		"japanese": [
			"静かな森に市場が立った。情報が金になる場所だ。",
			"しかし、その情報は公平ではなかった。",
			"誰かが森の囁きを操っていた。",
			"そして、その操作された取引の中で、小さな商人は絶叫した。"
		],
		"chinese": [
			"宁静的森林里出现了一个市场。一个信息即金钱的地方。",
			"但那些信息并不公平。",
			"有人在操控森林的低语。",
			"在那些被操纵的交易中，一个小商人绝望地呐喊着。"
		],
		"french": [
			"Un marché s'est établi dans la forêt paisible. Où l'information était monnaie.",
			"Mais cette information n'était pas juste.",
			"Quelqu'un manipulait les murmures de la forêt.",
			"Et dans ces transactions manipulées, un petit marchand hurla."
		],
		"spanish": [
			"En el bosque tranquilo surgió un mercado. Un lugar donde la información era dinero.",
			"Pero esa información no era justa.",
			"Alguien estaba manipulando los susurros del bosque.",
			"Y en esos tratos manipulados, un pequeño comerciante gritó."
		],
		"vietnamese": [
			"Một khu chợ mọc lên trong rừng tĩnh lặng. Nơi thông tin là tiền bạc.",
			"Nhưng thông tin đó không hề công bằng.",
			"Ai đó đang thao túng những lời thì thầm của rừng.",
			"Và trong những giao dịch bị thao túng đó, một tiểu thương đã gào thét."
		],
		"thai": [
			"ตลาดเกิดขึ้นในป่าอันเงียบสงบ ที่ซึ่งข้อมูลคือเงินตรา",
			"แต่ข้อมูลนั้นไม่ยุติธรรม",
			"มีบางคนกำลังบงการเสียงกระซิบของป่า",
			"และในการซื้อขายที่ถูกบงการนั้น พ่อค้าตัวเล็กๆ ก็ร้องตะโกนออกมา"
		],
		"hindi": [
			"शांत जंगल में एक बाज़ार लग गया। जहाँ जानकारी ही पैसा था।",
			"लेकिन वह जानकारी निष्पक्ष नहीं थी।",
			"कोई जंगल की फुसफुसाहटों को नियंत्रित कर रहा था।",
			"और उन हेरफेर वाले सौदों में, एक छोटा व्यापारी चीख पड़ा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정보가 오가는 시장. 활기가 넘쳤지만, 어딘가 비틀려 있었다.",
						"english": "A market where information flowed. Vibrant, yet somehow twisted.",
						"japanese": "情報が行き交う市場。活気に満ちていたが、どこか歪んでいた。",
						"chinese": "一个信息流通的市场。充满活力，却又有些扭曲。",
						"french": "Un marché où l'information circulait. Vibrant, mais en quelque sorte déformé.",
						"spanish": "Un mercado donde fluía la información. Vibrante, pero de alguna manera retorcido.",
						"vietnamese": "Một khu chợ nơi thông tin chảy cuồn cuộn. Sôi động, nhưng lại méo mó lạ kỳ.",
						"thai": "ตลาดที่ข้อมูลไหลเวียน คึกคักแต่ก็บิดเบี้ยวไปบ้าง",
						"hindi": "जानकारी का लेन-देन वाला बाज़ार। जीवंत था, फिर भी कहीं-कहीं विकृत था।"
					},
					"emotion": "base"
				},
				{
					"speaker": "briar",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "젠장! 또 망했어!",
						"english": "Damn it! Failed again!",
						"japanese": "くそっ！また失敗した！",
						"chinese": "该死！又搞砸了！",
						"french": "Zut ! Encore raté !",
						"spanish": "¡Maldita sea! ¡He fallado otra vez!",
						"vietnamese": "Chết tiệt! Lại thất bại rồi!",
						"thai": "ให้ตายสิ! เจ๊งอีกแล้ว!",
						"hindi": "धिक्कार है! फिर से बर्बाद हो गया!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 일이야?",
						"english": "What's going on?",
						"japanese": "どうしたの？",
						"chinese": "怎么回事？",
						"french": "Que se passe-t-il ?",
						"spanish": "¿Qué pasa?",
						"vietnamese": "Có chuyện gì vậy?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "누가 정보를 조작하는 게 분명해. 내 정보만 가치를 잃었어!",
						"english": "Someone's definitely manipulating information. Only my info lost value!",
						"japanese": "誰かが情報を操作してるに違いない。俺の情報だけ価値を失った！",
						"chinese": "肯定有人在操纵信息。只有我的信息贬值了！",
						"french": "C'est sûr, quelqu'un manipule les informations. Seules mes informations ont perdu de la valeur !",
						"spanish": "Alguien está manipulando la información, estoy seguro. ¡Solo mi información perdió valor!",
						"vietnamese": "Chắc chắn có kẻ đang thao túng thông tin. Chỉ có thông tin của tôi mất giá thôi!",
						"thai": "ต้องมีคนบงการข้อมูลแน่ๆ ข้อมูลของฉันคนเดียวที่ไร้ค่าไปเลย!",
						"hindi": "ज़रूर कोई जानकारी में हेरफेर कर रहा है। मेरी जानकारी ही बेकार हो गई!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "briar"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"speaker": "briar"
				},
				{
					"type": "speech",
					"content": {
						"korean": "몇몇 정보는 갑자기 엄청 비싸지고, 어떤 건 쓰레기가 돼.",
						"english": "Some info suddenly gets super expensive, while others become trash.",
						"japanese": "一部の情報は急にめちゃくちゃ高くなって、あるものはゴミになる。",
						"chinese": "有些信息突然变得非常昂贵，有些则成了垃圾。",
						"french": "Certaines informations deviennent soudainement très chères, tandis que d'autres deviennent des ordures.",
						"spanish": "Algunas informaciones se vuelven de repente muy caras, mientras que otras se convierten en basura.",
						"vietnamese": "Một số thông tin đột nhiên trở nên cực kỳ đắt đỏ, trong khi một số khác lại thành rác rưởi.",
						"thai": "ข้อมูลบางอย่างก็แพงหูฉี่ขึ้นมาทันที บางอย่างก็กลายเป็นขยะไปเลย",
						"hindi": "कुछ जानकारी अचानक बहुत महंगी हो जाती है, और कुछ कचरा बन जाती है।"
					},
					"emotion": "sad",
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우연이 아니라는 거야?",
						"english": "You mean it's not a coincidence?",
						"japanese": "偶然じゃないってこと？",
						"chinese": "你的意思是这不是巧合？",
						"french": "Tu veux dire que ce n'est pas une coïncidence ?",
						"spanish": "¿Quieres decir que no es una coincidencia?",
						"vietnamese": "Ý cậu là không phải ngẫu nhiên ư?",
						"thai": "นี่ไม่ใช่เรื่องบังเอิญเหรอ?",
						"hindi": "तुम्हारा मतलब है कि यह कोई इत्तेफाक नहीं है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누군가 이득을 보고 있어. 항상 같은 놈들이지.",
						"english": "Someone's profiting. Always the same guys.",
						"japanese": "誰かが得をしている。いつも同じ連中だ。",
						"chinese": "有人在从中获利。总是那帮家伙。",
						"french": "Quelqu'un en tire profit. Toujours les mêmes.",
						"spanish": "Alguien se está beneficiando. Siempre son los mismos.",
						"vietnamese": "Ai đó đang hưởng lợi. Luôn là những kẻ đó.",
						"thai": "มีคนกำลังได้ประโยชน์อยู่เสมอ พวกเดิมๆ นั่นแหละ",
						"hindi": "कोई फायदा उठा रहा है। हमेशा वही लोग।"
					}
				},
				{
					"content": {
						"korean": "누가?",
						"english": "Who?",
						"japanese": "誰が？",
						"chinese": "谁？",
						"french": "Qui ?",
						"spanish": "¿Quién?",
						"vietnamese": "Ai?",
						"thai": "ใคร?",
						"hindi": "कौन?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "모르겠어. 그림자처럼 숨어 있어.",
						"english": "I don't know. They hide like shadows.",
						"japanese": "分からない。影のように隠れている。",
						"chinese": "不知道。他们像影子一样躲藏着。",
						"french": "Je ne sais pas. Ils se cachent comme des ombres.",
						"spanish": "No lo sé. Se esconden como sombras.",
						"vietnamese": "Không biết. Họ ẩn mình như bóng tối.",
						"thai": "ไม่รู้สิ พวกมันซ่อนตัวเหมือนเงา",
						"hindi": "मुझे नहीं पता। वे परछाई की तरह छिपे हुए हैं।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "briar"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "briar"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"content": {
						"korean": "내 비장의 정보가 있었어. 근데 갑자기 사라졌어.",
						"english": "I had crucial intel. But it suddenly vanished.",
						"japanese": "秘密の情報があったんだ。でも突然消えた。",
						"chinese": "我有一条绝密情报。但它突然消失了。",
						"french": "J'avais une information capitale. Mais elle a soudainement disparu.",
						"spanish": "Tenía información vital. Pero de repente desapareció.",
						"vietnamese": "Tôi có thông tin mật. Nhưng nó đột nhiên biến mất.",
						"thai": "ฉันมีข้อมูลสำคัญ แต่จู่ๆ มันก็หายไป",
						"hindi": "मेरे पास एक अहम जानकारी थी। लेकिन वह अचानक गायब हो गई।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "사라졌다고?",
						"english": "Vanished?",
						"japanese": "消えたって？",
						"chinese": "消失了？",
						"french": "Disparu ?",
						"spanish": "¿Desapareció?",
						"vietnamese": "Biến mất ư?",
						"thai": "หายไป?",
						"hindi": "गायब हो गई?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"content": {
						"korean": "응. 대신 엉뚱한 소문만 돌고 있지. 마치 누가 가린 것처럼.",
						"english": "Yeah. Instead, only strange rumors are circulating. As if someone's covering it up.",
						"japanese": "うん。代わりに、おかしな噂ばかりが流れている。まるで誰かが隠しているみたいに。",
						"chinese": "是的。取而代之的是，只有奇怪的谣言在流传。好像有人在掩盖一样。",
						"french": "Oui. À la place, seules d'étranges rumeurs circulent. Comme si quelqu'un le cachait.",
						"spanish": "Sí. En su lugar, solo circulan rumores extraños. Como si alguien lo estuviera encubriendo.",
						"vietnamese": "Ừ. Thay vào đó, chỉ có những tin đồn vớ vẩn lan truyền. Cứ như ai đó đang che đậy vậy.",
						"thai": "ใช่ แทนที่จะเป็นแบบนั้น มีแค่ข่าวลือแปลกๆ แพร่สะพัด ราวกับว่ามีคนปกปิดมันไว้",
						"hindi": "हाँ। इसकी बजाय, अजीब अफवाहें फैल रही हैं। जैसे किसी ने छुपा रखा हो।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "정보가 없어지기도 하는구나.",
						"english": "So info can just disappear, huh?",
						"japanese": "情報って消えることもあるんだな。",
						"chinese": "原来情报也会消失啊。",
						"french": "Donc l'information peut aussi disparaître.",
						"spanish": "Así que la información también puede desaparecer.",
						"vietnamese": "Thông tin cũng có thể biến mất sao.",
						"thai": "ข้อมูลก็หายไปได้เหมือนกันสินะ",
						"hindi": "तो जानकारी भी गायब हो सकती है।"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						4
					],
					"speaker": "briar"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 숲에는 눈이 너무 많아. 모든 정보가 감시당하고 있어.",
						"english": "This forest has too many eyes. Every piece of info is being watched.",
						"japanese": "この森には目が多すぎる。すべての情報が監視されている。",
						"chinese": "这片森林有太多眼睛。所有情报都被监视着。",
						"french": "Cette forêt a trop d'yeux. Chaque information est surveillée.",
						"spanish": "Este bosque tiene demasiados ojos. Toda la información está siendo vigilada.",
						"vietnamese": "Rừng này có quá nhiều mắt. Mọi thông tin đều bị theo dõi.",
						"thai": "ป่านี้มีสายตามากเกินไป ทุกข้อมูลถูกเฝ้าระวัง",
						"hindi": "इस जंगल में बहुत आँखें हैं। हर जानकारी पर नज़र रखी जा रही है।"
					},
					"speaker": "briar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "감시 시스템?",
						"english": "A surveillance system?",
						"japanese": "監視システム？",
						"chinese": "监控系统？",
						"french": "Un système de surveillance ?",
						"spanish": "¿Un sistema de vigilancia?",
						"vietnamese": "Hệ thống giám sát?",
						"thai": "ระบบเฝ้าระวัง?",
						"hindi": "निगरानी प्रणाली?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "briar",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그래. 숲의 순리? 웃기지도 않아. 이건 그냥… 조작이야.",
						"english": "Yeah. The forest's natural order? Don't make me laugh. This is just... a setup.",
						"japanese": "そうだ。森の摂理？笑わせるな。これはただの…でっち上げだ。",
						"chinese": "是的。森林的规律？别逗了。这只是……一个阴谋。",
						"french": "Oui. L'ordre naturel de la forêt ? Ne me faites pas rire. C'est juste... une manipulation.",
						"spanish": "Sí. ¿El orden natural del bosque? No me hagas reír. Esto es solo... una manipulación.",
						"vietnamese": "Đúng vậy. Quy luật của rừng? Đừng có đùa. Đây chỉ là… một sự dàn dựng.",
						"thai": "ใช่ กฎธรรมชาติของป่าเหรอ? อย่ามาตลกเลย นี่มันก็แค่... การจัดฉาก",
						"hindi": "हाँ। जंगल का प्राकृतिक क्रम? मुझे हँसाओ मत। यह बस… एक चाल है।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이런 시스템을 만든 놈이 누굴까?",
						"english": "Who made this system?",
						"japanese": "こんなシステムを作ったのは誰だ？",
						"chinese": "究竟是谁创造了这种系统？",
						"french": "Qui a créé ce système ?",
						"spanish": "¿Quién creó este sistema?",
						"vietnamese": "Kẻ nào đã tạo ra hệ thống này?",
						"thai": "ใครเป็นคนสร้างระบบแบบนี้ขึ้นมา?",
						"hindi": "इस सिस्टम को किसने बनाया है?"
					},
					"speaker": "character_any"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "분노만으로는… 아무것도 바꿀 수 없어.",
						"english": "Rage alone... can change nothing.",
						"japanese": "怒りだけでは…何も変えられない。",
						"chinese": "仅凭愤怒……什么也改变不了。",
						"french": "La rage seule... ne peut rien changer.",
						"spanish": "Solo con ira... nada puede cambiar.",
						"vietnamese": "Chỉ riêng sự tức giận... không thể thay đổi được gì.",
						"thai": "แค่ความโกรธ...เปลี่ยนแปลงอะไรไม่ได้หรอก",
						"hindi": "केवल क्रोध से... कुछ नहीं बदल सकता।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 반드시 진실을 밝힐 거야!",
						"english": "Shut up! I'll reveal the truth, no matter what!",
						"japanese": "黙れ！必ず真実を暴いてやる！",
						"chinese": "闭嘴！我一定会揭露真相！",
						"french": "Tais-toi ! Je révélerai la vérité, quoi qu'il arrive !",
						"spanish": "¡Cállate! ¡Descubriré la verdad, cueste lo que cueste!",
						"vietnamese": "Im đi! Ta nhất định sẽ phơi bày sự thật!",
						"thai": "หุบปาก! ฉันจะเปิดเผยความจริงให้ได้!",
						"hindi": "चुप रहो! मैं सच का पर्दाफाश ज़रूर करूँगा!"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…고작 이런 일로… 본질은 따로 있어…",
						"english": "...For such a trivial matter... The true essence lies elsewhere...",
						"japanese": "…たかがこんなことで…本質は別にある…",
						"chinese": "……就为了这点事……本质另有他物……",
						"french": "...Pour si peu... L'essence véritable est ailleurs...",
						"spanish": "...Por algo tan trivial... La verdadera esencia está en otra parte...",
						"vietnamese": "...Chỉ vì chuyện này thôi sao... Bản chất thật sự nằm ở chỗ khác...",
						"thai": "...แค่เรื่องแค่นี้เอง...แก่นแท้ที่แท้จริงอยู่คนละที่...",
						"hindi": "...बस इतनी सी बात के लिए... मूल सार कहीं और है..."
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "무슨 소리야. 누가 뒤에 있는 거지?",
						"english": "What are you talking about? Who's behind this?",
						"japanese": "何を言ってるんだ。誰が裏にいる？",
						"chinese": "你在说什么？幕后黑手是谁？",
						"french": "Qu'est-ce que tu racontes ? Qui est derrière tout ça ?",
						"spanish": "¿De qué estás hablando? ¿Quién está detrás de esto?",
						"vietnamese": "Ngươi đang nói gì vậy? Ai đứng đằng sau chuyện này?",
						"thai": "พูดอะไรของนาย? ใครอยู่เบื้องหลัง?",
						"hindi": "क्या बक रहे हो? इसके पीछे कौन है?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "정보 조작을 막았지만, 더 큰 진실이 숨어 있음을 직감했다.",
						"english": "We stopped the information manipulation, but I had a hunch a greater truth was hidden.",
						"japanese": "情報操作は阻止したが、もっと大きな真実が隠されていると直感した。",
						"chinese": "阻止了信息操纵，但我直觉有更大的真相隐藏着。",
						"french": "Nous avons arrêté la manipulation de l'information, mais j'ai eu l'intuition qu'une vérité plus grande était cachée.",
						"spanish": "Detuvimos la manipulación de información, pero tuve la intuición de que una verdad mayor estaba oculta.",
						"vietnamese": "Đã ngăn chặn được việc thao túng thông tin, nhưng tôi trực giác rằng một sự thật lớn hơn đang ẩn giấu.",
						"thai": "เราหยุดการบิดเบือนข้อมูลได้ แต่ฉันสัมผัสได้ว่าความจริงที่ยิ่งใหญ่กว่าซ่อนอยู่",
						"hindi": "हमने सूचना हेरफेर को रोका, लेकिन मुझे अंदेशा हुआ कि एक बड़ी सच्चाई छिपी हुई थी।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "시장 깊숙한 곳. 고요한 그림자가 나타났다.",
						"english": "Deep within the market. A silent shadow emerged.",
						"japanese": "市場の奥深く。静かな影が現れた。",
						"chinese": "市场深处。一道寂静的影子出现了。",
						"french": "Au plus profond du marché. Une ombre silencieuse apparut.",
						"spanish": "En lo más profundo del mercado. Una sombra silenciosa apareció.",
						"vietnamese": "Sâu trong khu chợ. Một bóng hình tĩnh lặng hiện ra.",
						"thai": "ลึกเข้าไปในตลาด เงาเงียบงันปรากฏขึ้น",
						"hindi": "बाज़ार के भीतर गहराई में। एक शांत परछाई प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "질서가 있어야 숲이 유지되지. 너희는 그걸 방해하는군.",
						"english": "Order maintains the forest. You are disrupting it.",
						"japanese": "秩序があってこそ森は保たれる。お前たちはそれを妨害している。",
						"chinese": "唯有秩序才能维持森林。而你们正在破坏它。",
						"french": "L'ordre maintient la forêt. Vous êtes en train de le perturber.",
						"spanish": "El orden mantiene el bosque. Vosotros lo estáis perturbando.",
						"vietnamese": "Chỉ có trật tự mới giữ được rừng. Các ngươi đang phá hoại nó.",
						"thai": "ความเป็นระเบียบเรียบร้อยต่างหากที่ทำให้ป่าคงอยู่ พวกเจ้ากำลังขัดขวางมัน",
						"hindi": "व्यवस्था ही वन को बनाए रखती है। तुम इसे बाधित कर रहे हो।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "질서? 이게 조작이지!",
						"english": "Order? This is manipulation!",
						"japanese": "秩序？これは操作だ！",
						"chinese": "秩序？这分明是操控！",
						"french": "L'ordre ? C'est de la manipulation !",
						"spanish": "¿Orden? ¡Esto es manipulación!",
						"vietnamese": "Trật tự? Đây là sự thao túng!",
						"thai": "ระเบียบเหรอ? นี่มันการบิดเบือนต่างหาก!",
						"hindi": "व्यवस्था? यह तो हेरफेर है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석어. {random_boss}는 너희의 분노를 이해 못 해.",
						"english": "Foolish. {random_boss} doesn't understand your rage.",
						"japanese": "愚か者め。{random_boss}はお前たちの怒りを理解できない。",
						"chinese": "愚蠢。{random_boss}不理解你们的愤怒。",
						"french": "Stupide. {random_boss} ne comprend pas votre rage.",
						"spanish": "Qué necios. {random_boss} no comprende vuestra furia.",
						"vietnamese": "Ngốc nghếch. {random_boss} không hiểu được cơn giận của các ngươi.",
						"thai": "ช่างโง่เขลา {random_boss} ไม่เข้าใจความโกรธของพวกเจ้าหรอก",
						"hindi": "मूर्ख। {random_boss} तुम्हारी क्रोध को नहीं समझता।"
					},
					"speaker": "random_boss"
				}
			]
		}
	]
} as const;
