export const scenario_snowy_sorrowmaw_29_04 = {
	"scenario_id": "snowy_sorrowmaw_29_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"finn": {
			"id": "mon_3e3930d2-c2d3-4ad0-9818-26d259edac77",
			"name": {
				"korean": "핀",
				"english": "Finn",
				"japanese": "フィン",
				"chinese": "芬恩",
				"french": "Finn",
				"spanish": "Finn",
				"vietnamese": "Finn",
				"thai": "ฟินน์",
				"hindi": "फिन"
			},
			"description": "",
			"face_image_url": "",
			"battle_sprite_url": ""
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "끝없이 펼쳐진 설원 아래, 거대한 얼음 동굴이 입을 벌렸다.",
						"english": "Beneath the endless snowfield, a giant ice cave opened its maw.",
						"japanese": "果てしなく広がる雪原の下、巨大な氷の洞窟が口を開けていた。",
						"chinese": "在无尽的雪原之下，一个巨大的冰洞张开了大口。",
						"french": "Sous l'étendue enneigée infinie, une gigantesque grotte de glace ouvrait sa gueule.",
						"spanish": "Bajo el interminable campo de nieve, una gigantesca cueva de hielo abrió su fauces.",
						"vietnamese": "Bên dưới cánh đồng tuyết vô tận, một hang động băng khổng lồ mở ra cửa hang.",
						"thai": "ใต้ทุ่งหิมะอันกว้างใหญ่ ถ้ำน้ำแข็งขนาดมหึมากำลังอ้าปาก",
						"hindi": "अनंत हिमखंड के नीचे, एक विशाल बर्फ की गुफा ने अपना मुँह खोल दिया।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction"
				},
				{
					"content": {
						"korean": "여기가… 그 얼음 동굴이군요. 공기가 달라요.",
						"english": "So this is... the ice cave. The air feels different.",
						"japanese": "ここが…その氷の洞窟ですね。空気が違います。",
						"chinese": "这里就是……那冰洞啊。空气都不一样了。",
						"french": "C'est donc ça... la grotte de glace. L'air est différent.",
						"spanish": "Así que esta es... la cueva de hielo. El aire se siente diferente.",
						"vietnamese": "Đây là... hang động băng đó. Không khí khác hẳn.",
						"thai": "ที่นี่คือ... ถ้ำน้ำแข็งแห่งนั้นสินะ อากาศไม่เหมือนเดิมเลย",
						"hindi": "तो यह है... वह बर्फ की गुफा। हवा अलग है।"
					},
					"emotion": "base",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"content": {
						"korean": "연구자 핀. 여기서 뭘 찾고 있는 거지?",
						"english": "Researcher Finn. What are you looking for here?",
						"japanese": "研究者フィン。ここで何を探しているんだ？",
						"chinese": "研究员芬恩。你在这里找什么？",
						"french": "Chercheur Finn. Qu'est-ce que tu cherches ici ?",
						"spanish": "Investigador Finn. ¿Qué buscas aquí?",
						"vietnamese": "Nhà nghiên cứu Finn. Anh đang tìm gì ở đây?",
						"thai": "นักวิจัยฟินน์ คุณกำลังมองหาอะไรที่นี่?",
						"hindi": "शोधकर्ता फिन। तुम यहाँ क्या ढूंढ रहे हो?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이 얼음… 보통의 얼음이 아니에요. 뭔가… 살아있는 것 같아요.",
						"english": "This ice... it's not ordinary ice. It feels... alive.",
						"japanese": "この氷…ただの氷じゃない。何か…生きているみたいだ。",
						"chinese": "这冰……不是普通的冰。感觉……好像有生命一样。",
						"french": "Cette glace... ce n'est pas de la glace ordinaire. Elle semble... vivante.",
						"spanish": "Este hielo... no es hielo común. Parece... vivo.",
						"vietnamese": "Khối băng này... không phải là băng bình thường. Có vẻ như... nó còn sống.",
						"thai": "น้ำแข็งนี่... ไม่ใช่น้ำแข็งธรรมดาเลย มันเหมือน... มีชีวิต",
						"hindi": "यह बर्फ... सामान्य बर्फ नहीं है। यह कुछ... जीवित सा लगता है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아주 오래된 슬픔이 느껴져요. 마치 비명소리 같기도 하고.",
						"english": "I feel a very ancient sorrow. It almost sounds like a scream.",
						"japanese": "とても古い悲しみが感じられます。まるで悲鳴のようにも。",
						"chinese": "我感受到一种非常古老的悲伤。就像一声尖叫。",
						"french": "Je ressens une tristesse très ancienne. On dirait presque un cri.",
						"spanish": "Siento una tristeza muy antigua. Casi parece un grito.",
						"vietnamese": "Tôi cảm thấy một nỗi buồn rất cổ xưa. Nó gần như là một tiếng hét.",
						"thai": "ฉันรู้สึกถึงความเศร้าโศกที่เก่าแก่มาก ราวกับเสียงกรีดร้อง",
						"hindi": "मुझे एक बहुत पुराना दुख महसूस हो रहा है। यह चीख जैसा भी लगता है।"
					},
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn"
				},
				{
					"content": {
						"korean": "점점 깊어질수록… 감각이 더 선명해져요.",
						"english": "The deeper we go... the clearer my senses become.",
						"japanese": "深くなるにつれて…感覚がより鮮明になります。",
						"chinese": "越是深入……我的感官就越清晰。",
						"french": "Plus on s'enfonce... plus mes sens s'aiguisent.",
						"spanish": "Cuanto más profundo vamos... más claros se vuelven mis sentidos.",
						"vietnamese": "Càng đi sâu... các giác quan của tôi càng trở nên rõ ràng hơn.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่... สัมผัสก็ยิ่งชัดเจนขึ้นเท่านั้น",
						"hindi": "जितना गहरा हम जाते हैं... मेरी इंद्रियाँ उतनी ही स्पष्ट होती जाती हैं।"
					},
					"emotion": "base",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 감각?",
						"english": "What sensation?",
						"japanese": "どんな感覚？",
						"chinese": "什么感觉？",
						"french": "Quelle sensation ?",
						"spanish": "¿Qué sensación?",
						"vietnamese": "Cảm giác gì?",
						"thai": "ความรู้สึกแบบไหน?",
						"hindi": "कैसी अनुभूति?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "벽면에… 희미하게 무언가 비치는 것 같아요. 환영인가?",
						"english": "On the wall... something faintly shimmers. Is it an illusion?",
						"japanese": "壁に… かすかに何かが映っているようです。幻影でしょうか？",
						"chinese": "墙壁上… 似乎有什么东西若隐若现。是幻觉吗？",
						"french": "Sur le mur… quelque chose semble scintiller faiblement. Une illusion ?",
						"spanish": "En la pared… algo se vislumbra tenuemente. ¿Es una ilusión?",
						"vietnamese": "Trên tường… dường như có thứ gì đó phản chiếu mờ ảo. Có phải là ảo ảnh không?",
						"thai": "บนกำแพง… ดูเหมือนมีอะไรบางอย่างสะท้อนออกมาจางๆ หรือว่าเป็นภาพหลอน?",
						"hindi": "दीवार पर… कुछ धुंधला-सा दिख रहा है। क्या यह कोई भ्रम है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "고통… 간절함… 부족의 마지막 순간들이 얼어붙은 걸까요.",
						"english": "Pain... desperation... Could these be the tribe's final moments, frozen in time?",
						"japanese": "苦痛… 切望… 部族の最期の瞬間が凍りついているのでしょうか。",
						"chinese": "痛苦… 渴望… 部落的最后时刻被冻结了吗？",
						"french": "Douleur… désespoir… S'agirait-il des derniers instants de la tribu, figés dans le temps ?",
						"spanish": "Dolor… desesperación… ¿Serán los últimos momentos de la tribu, congelados?",
						"vietnamese": "Đau đớn… khao khát… Phải chăng những khoảnh khắc cuối cùng của bộ tộc đã bị đóng băng?",
						"thai": "ความเจ็บปวด… ความปรารถนาอันแรงกล้า… หรือว่าช่วงเวลาสุดท้ายของเผ่าถูกแช่แข็งไว้?",
						"hindi": "दर्द… व्याकुलता… क्या ये जनजाति के अंतिम क्षण हैं, जो जम गए हैं?"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"spot": [
						5,
						2
					]
				},
				{
					"content": {
						"korean": "여길 보세요! 벽에 선명하게… 보여요.",
						"english": "Look here! On the wall, it's clearly visible...",
						"japanese": "ここを見てください！壁に鮮明に…見えます。",
						"chinese": "看这里！墙上清晰地…看得见。",
						"french": "Regardez ici ! Sur le mur, c'est clairement… visible.",
						"spanish": "¡Mire aquí! En la pared, se ve… claramente.",
						"vietnamese": "Nhìn đây! Trên tường, hiện rõ… rồi.",
						"thai": "ดูนี่สิ! บนกำแพง… เห็นชัดเลย",
						"hindi": "यहाँ देखो! दीवार पर स्पष्ट रूप से… दिख रहा है।"
					},
					"emotion": "base",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음 벽면에 움직이는 그림자들. 사라진 부족의 모습이었다.",
						"english": "Moving shadows on the ice wall. They were the vanished tribe.",
						"japanese": "氷の壁面に動く影。それは消え去った部族の姿だった。",
						"chinese": "冰墙上移动的影子。那是消失的部落的景象。",
						"french": "Des ombres mouvantes sur la paroi de glace. C'étaient les figures de la tribu disparue.",
						"spanish": "Sombras en movimiento en la pared de hielo. Eran los miembros de la tribu desaparecida.",
						"vietnamese": "Những bóng hình chuyển động trên bức tường băng. Đó là hình ảnh của bộ tộc đã biến mất.",
						"thai": "เงาที่เคลื่อนไหวบนกำแพงน้ำแข็ง นั่นคือภาพของเผ่าที่สาบสูญไป",
						"hindi": "बर्फीली दीवार पर चलती हुई परछाइयाँ। वे लुप्त हो चुकी जनजाति की आकृतियाँ थीं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저건… 그들이 울부짖고 있어. 무언가를 향해.",
						"english": "They're... they're wailing. Towards something.",
						"japanese": "あれは… 彼らが何かを叫んでいる。何かを向かって。",
						"chinese": "那是… 他们在嚎叫。朝着什么东西。",
						"french": "Ils… ils hurlent. Vers quelque chose.",
						"spanish": "Están… están lamentándose. Hacia algo.",
						"vietnamese": "Đó là… họ đang gào thét. Hướng về thứ gì đó.",
						"thai": "พวกเขา… พวกเขากำลังร่ำไห้ ต่อบางสิ่งบางอย่าง",
						"hindi": "वे… वे चीख रहे हैं। किसी चीज़ की ओर।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "수호자라고 불렀던 존재에게… 필사적으로 호소하고 있어요.",
						"english": "They're desperately appealing to the being they called 'Guardian'.",
						"japanese": "彼らが「守護者」と呼んだ存在に… 必死に訴えかけています。",
						"chinese": "他们正在向那个他们称之为“守护者”的存在… 拼命地呼救。",
						"french": "Ils implorent désespérément l'être qu'ils appelaient le \"Gardien\".",
						"spanish": "Están suplicando desesperadamente al ser que llamaban \"Guardián\".",
						"vietnamese": "Họ đang tuyệt vọng cầu cứu đến sinh vật mà họ gọi là \"Người bảo hộ\".",
						"thai": "พวกเขากำลังร้องขออย่างสิ้นหวังต่อผู้ที่พวกเขาเรียกว่า \"ผู้พิทักษ์\"",
						"hindi": "वे उस सत्ता से… जिसे वे 'संरक्षक' कहते थे… बेताबी से गुहार लगा रहे हैं।"
					},
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "도망치는 게 아니라, 오히려… 갈구하는 것 같아요.",
						"english": "They're not running away; rather, it seems they're yearning for something.",
						"japanese": "逃げているのではなく、むしろ… 懇願しているようです。",
						"chinese": "他们不是在逃跑，反而是… 似乎在渴求着什么。",
						"french": "Ils ne fuient pas ; au contraire… ils semblent supplier.",
						"spanish": "No están huyendo, sino que… más bien, parece que están suplicando.",
						"vietnamese": "Họ không chạy trốn, mà ngược lại… dường như đang khao khát điều gì đó.",
						"thai": "พวกเขาไม่ได้หนี แต่กลับ… ดูเหมือนกำลังวิงวอนขอ",
						"hindi": "वे भाग नहीं रहे, बल्कि… ऐसा लगता है कि वे कुछ माँग रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "갈구한다고? 왜?",
						"english": "Yearning? Why?",
						"japanese": "懇願していると？なぜ？",
						"chinese": "渴求？为什么？",
						"french": "Supplier ? Pourquoi ?",
						"spanish": "¿Suplicando? ¿Por qué?",
						"vietnamese": "Khao khát ư? Tại sao?",
						"thai": "วิงวอนเหรอ? ทำไมล่ะ?",
						"hindi": "माँग रहे हैं? क्यों?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "이 얼음… 수호자의 슬픔이 응결된 게 아닐까요? 부족의 희망이자 절망이었던…",
						"english": "This ice... could it be the Guardian's sorrow condensed? The tribe's hope and despair...",
						"japanese": "この氷… 守護者の悲しみが凝結したものなのでしょうか？部族の希望であり絶望でもあった…",
						"chinese": "这冰… 会不会是守护者的悲伤凝结而成的？曾是部落的希望，也是绝望…",
						"french": "Cette glace… ne serait-elle pas la tristesse du Gardien condensée ? L'espoir et le désespoir de la tribu…",
						"spanish": "Este hielo… ¿no será la tristeza del Guardián condensada? La esperanza y la desesperación de la tribu…",
						"vietnamese": "Lớp băng này… liệu có phải là nỗi buồn của Người bảo hộ đã kết tinh lại? Từng là niềm hy vọng và cả sự tuyệt vọng của bộ tộc…",
						"thai": "น้ำแข็งนี้… หรือว่าจะเป็นความโศกเศร้าของผู้พิทักษ์ที่ควบแน่นมา? ทั้งความหวังและความสิ้นหวังของเผ่า…",
						"hindi": "यह बर्फ़… क्या यह संरक्षक का जम गया दुख है? जनजाति की आशा और निराशा…"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"speaker": "finn",
					"type": "direction",
					"action": "enter"
				},
				{
					"content": {
						"korean": "더 이상 가면 안 돼요… 저 너머에 있는 존재의 슬픔이 너무 커요.",
						"english": "You can't go any further... The sorrow of the being beyond is too great.",
						"japanese": "これ以上はダメです… その先にいる存在の悲しみが、あまりにも大きい。",
						"chinese": "不能再往前走了… 那边存在的悲伤太大了。",
						"french": "Vous ne pouvez pas aller plus loin… La tristesse de l'être au-delà est trop immense.",
						"spanish": "No puedes ir más allá... La pena de la criatura que está al otro lado es demasiado grande.",
						"vietnamese": "Không thể đi xa hơn nữa… Nỗi buồn của thực thể phía bên kia quá lớn.",
						"thai": "ไปต่อไม่ได้แล้ว… ความเศร้าของสิ่งที่อยู่ข้างหน้ามันใหญ่หลวงเกินไป",
						"hindi": "आप और आगे नहीं जा सकते… उस पार मौजूद सत्ता का दुख बहुत गहरा है।"
					},
					"emotion": "sad",
					"speaker": "finn",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "물러설 순 없어. 진실을 알아야 해.",
						"english": "I can't back down. I need to know the truth.",
						"japanese": "退くわけにはいかない。真実を知らなければ。",
						"chinese": "不能退缩。我必须知道真相。",
						"french": "Je ne peux pas reculer. Je dois connaître la vérité.",
						"spanish": "No puedo retroceder. Necesito saber la verdad.",
						"vietnamese": "Không thể lùi bước. Tôi cần biết sự thật.",
						"thai": "ถอยไม่ได้ ฉันต้องรู้ความจริง",
						"hindi": "मैं पीछे नहीं हट सकता। मुझे सच जानना होगा।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "저 존재는… 단순히 괴물이 아니에요. 고통받는… 피해자일지도 몰라요.",
						"english": "That being isn't... just a monster. It might be a suffering... victim.",
						"japanese": "あの存在は… ただの怪物ではありません。苦しんでいる… 被害者なのかもしれません。",
						"chinese": "那个存在… 不仅仅是怪物。它也许是… 受害者。",
						"french": "Cette entité n'est… pas seulement un monstre. C'est peut-être une… victime souffrante.",
						"spanish": "Esa criatura no es... solo un monstruo. Quizás sea una... víctima sufriente.",
						"vietnamese": "Thực thể đó… không chỉ là một con quái vật. Nó có thể là một… nạn nhân đang đau khổ.",
						"thai": "สิ่งนั้น… ไม่ใช่แค่สัตว์ประหลาด อาจเป็น… เหยื่อที่กำลังทรมาน",
						"hindi": "वह सत्ता… सिर्फ एक राक्षस नहीं है। शायद वह एक पीड़ित… शिकार हो।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "조심하세요. 그 슬픔이 우리를 집어삼킬 수도 있어요.",
						"english": "Be careful. That sorrow could engulf us.",
						"japanese": "気をつけてください。その悲しみが私たちを飲み込むかもしれません。",
						"chinese": "小心。那种悲伤可能会吞噬我们。",
						"french": "Faites attention. Cette tristesse pourrait nous engloutir.",
						"spanish": "Tened cuidado. Esa pena podría devorarnos.",
						"vietnamese": "Hãy cẩn thận. Nỗi buồn đó có thể nuốt chửng chúng ta.",
						"thai": "ระวังให้ดี ความเศร้านั้นอาจกลืนกินเราได้",
						"hindi": "सावधान रहें। वह दुख हमें निगल सकता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "얼어붙은 고통이 탐험대를 집어삼켰다.",
						"english": "The frozen pain swallowed the expedition team.",
						"japanese": "凍りついた苦痛が探検隊を飲み込んだ。",
						"chinese": "冰冷的痛苦吞噬了探险队。",
						"french": "La douleur gelée a englouti l'équipe d'expédition.",
						"spanish": "El dolor congelado devoró al equipo de expedición.",
						"vietnamese": "Nỗi đau đóng băng đã nuốt chửng đội thám hiểm.",
						"thai": "ความเจ็บปวดที่เยือกแข็งกลืนกินทีมสำรวจ.",
						"hindi": "जमा हुआ दर्द अभियान दल को निगल गया।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "너희도… 나처럼 얼어붙어라. 영원히…",
						"english": "You too... freeze like me. Forever...",
						"japanese": "お前たちも…私のように凍りつけ。永遠に…。",
						"chinese": "你们也……像我一样冻结吧。永远……",
						"french": "Vous aussi... gelez comme moi. Pour toujours...",
						"spanish": "Ustedes también... congélense como yo. Para siempre...",
						"vietnamese": "Các ngươi cũng... hãy đóng băng như ta. Mãi mãi...",
						"thai": "พวกเจ้าเองก็... จงแข็งตัวเหมือนข้า. ชั่วนิรันดร์...",
						"hindi": "तुम भी... मेरी तरह जम जाओ। हमेशा के लिए..."
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "아직 포기 못 해. 네 슬픔을… 끝내주겠어.",
						"english": "I can't give up yet. I will end your sorrow.",
						"japanese": "まだ諦められない。お前の悲しみを…終わらせてやる。",
						"chinese": "我还不能放弃。我会结束你的悲伤。",
						"french": "Je ne peux pas encore abandonner. Je mettrai fin à ta tristesse.",
						"spanish": "Todavía no puedo rendirme. Terminaré con tu tristeza.",
						"vietnamese": "Ta chưa thể từ bỏ. Ta sẽ kết thúc nỗi buồn của ngươi.",
						"thai": "ฉันยังยอมแพ้ไม่ได้ ฉันจะยุติความเศร้าโศกของเธอ.",
						"hindi": "मैं अभी हार नहीं मान सकता। मैं तुम्हारे दुख का अंत कर दूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "동굴의 끝, 거대한 얼음 덩어리 속에서 정체 모를 존재가 모습을 드러냈다.",
						"english": "At the end of the cave, within a colossal block of ice, an unknown entity revealed itself.",
						"japanese": "洞窟の奥、巨大な氷の塊の中から、正体不明の存在が姿を現した。",
						"chinese": "在洞穴的尽头，一个不明实体从巨大的冰块中显现出来。",
						"french": "Au fond de la grotte, au sein d'un bloc de glace colossal, une entité inconnue se révéla.",
						"spanish": "Al final de la cueva, dentro de un colosal bloque de hielo, una entidad desconocida se reveló.",
						"vietnamese": "Ở cuối hang động, bên trong một khối băng khổng lồ, một thực thể không rõ danh tính đã xuất hiện.",
						"thai": "ที่ปลายสุดของถ้ำ ภายในก้อนน้ำแข็งมหึมา สิ่งมีชีวิตที่ไม่รู้จักได้ปรากฏตัวขึ้น",
						"hindi": "गुफा के अंत में, बर्फ के एक विशाल खंड के भीतर, एक अज्ञात सत्ता प्रकट हुई।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…또 다른 먹잇감인가.",
						"english": "...Another prey?",
						"japanese": "…また、別の獲物か。",
						"chinese": "…又是另一个猎物吗？",
						"french": "...Une autre proie ?",
						"spanish": "...¿Otra presa?",
						"vietnamese": "...Lại là một con mồi khác sao?",
						"thai": "…เหยื่ออีกแล้วรึ",
						"hindi": "…क्या कोई और शिकार?"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "아니… 너희도 갈구하는구나. 나를… 해방시켜 달라고.",
						"english": "No... you seek it too. To set me... free.",
						"japanese": "いや… お前たちも求めているな。私を… 解放してくれと。",
						"chinese": "不… 你们也渴望着。渴望着… 将我解放。",
						"french": "Non… vous aussi, vous le désirez. Me… libérer.",
						"spanish": "No... vosotros también lo anheláis. Liberarme...",
						"vietnamese": "Không… các ngươi cũng khao khát điều đó. Khao khát… giải thoát cho ta.",
						"thai": "ไม่… พวกเจ้าก็ปรารถนาเช่นกัน ให้ข้า… เป็นอิสระ",
						"hindi": "नहीं… तुम भी वही चाहते हो। मुझे… आज़ाद करने के लिए।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 널 멈추러 왔어!",
						"english": "We've come to stop you!",
						"japanese": "私たちはあなたを止めに来た！",
						"chinese": "我们是来阻止你的！",
						"french": "Nous sommes venus t'arrêter !",
						"spanish": "¡Hemos venido a detenerte!",
						"vietnamese": "Chúng tôi đến để ngăn ngươi lại!",
						"thai": "พวกเรามาหยุดเจ้า!",
						"hindi": "हम तुम्हें रोकने आए हैं!"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "finn",
					"action": "enter"
				},
				{
					"speaker": "finn",
					"type": "speech",
					"content": {
						"korean": "그는… 슬픔에 갇힌 존재예요. 단순한 악이 아니에요.",
						"english": "He is... a being trapped in sorrow. Not just pure evil.",
						"japanese": "彼は… 悲しみに囚われた存在です。単なる悪ではありません。",
						"chinese": "他… 是一个被悲伤困住的存在。不仅仅是纯粹的邪恶。",
						"french": "Il est… une entité piégée dans la tristesse. Pas juste un mal pur.",
						"spanish": "Él es... un ser atrapado en la pena. No es pura maldad.",
						"vietnamese": "Hắn… là một thực thể bị mắc kẹt trong nỗi buồn. Không phải là ác quỷ thuần túy.",
						"thai": "เขา… คือสิ่งที่ถูกกักขังไว้ด้วยความเศร้า ไม่ใช่แค่ความชั่วร้ายธรรมดา",
						"hindi": "वह… दुख में फंसा हुआ एक प्राणी है। सिर्फ बुराई नहीं।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "슬픔? 그래… 난 그 슬픔 그 자체다. 영원히 얼어붙은.",
						"english": "Sorrow? Yes... I am sorrow itself. Frozen eternally.",
						"japanese": "悲しみ？そうだ… 私こそがその悲しみそのものだ。永遠に凍りついた。",
						"chinese": "悲伤？没错… 我就是悲伤本身。永远被冰封着。",
						"french": "La tristesse ? Oui… Je suis la tristesse elle-même. Gelée éternellement.",
						"spanish": "¿Pena? Sí… Yo soy la pena misma. Congelada eternamente.",
						"vietnamese": "Nỗi buồn ư? Đúng vậy… Ta chính là nỗi buồn đó. Bị đóng băng vĩnh viễn.",
						"thai": "ความเศร้า? ใช่… ข้าคือความเศร้าเอง ถูกแช่แข็งชั่วนิรันดร์",
						"hindi": "दुख? हाँ… मैं ही वह दुख हूँ। हमेशा के लिए जमा हुआ।"
					},
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"direction": "down",
					"speaker": "finn",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 얼음 덩어리가 산산조각 났다. 그러나 그 안에 남은 것은….",
						"english": "The colossal ice mass shattered. But what remained within it...",
						"japanese": "巨大な氷の塊が粉々に砕け散った。しかし、その中に残されたものは…。",
						"chinese": "巨大的冰块碎裂了。然而，其中留下的却是……",
						"french": "L'énorme masse de glace s'est brisée en mille morceaux. Mais ce qui restait à l'intérieur...",
						"spanish": "La gigantesca masa de hielo se hizo añicos. Pero lo que quedó dentro...",
						"vietnamese": "Khối băng khổng lồ vỡ tan tành. Nhưng những gì còn lại bên trong là...",
						"thai": "ก้อนน้ำแข็งขนาดมหึมาแตกเป็นเสี่ยงๆ แต่สิ่งที่เหลืออยู่ข้างในนั้น...",
						"hindi": "विशाल बर्फ का खंड टूट गया। लेकिन उसके भीतर जो बचा था..."
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…드디어… 끝인가. 고맙다. 아니… 미안하다.",
						"english": "...Finally... is it over? Thank you. No... I'm sorry.",
						"japanese": "…ついに…終わったのか。ありがとう。いや…すまない。",
						"chinese": "……终于……结束了吗。谢谢。不……对不起。",
						"french": "...Enfin... est-ce la fin ? Merci. Non... je suis désolé.",
						"spanish": "...Finalmente... ¿se acabó? Gracias. No... lo siento.",
						"vietnamese": "...Cuối cùng... đã kết thúc rồi sao? Cảm ơn. Không... xin lỗi.",
						"thai": "...ในที่สุด... มันจบแล้วหรือ? ขอบคุณ. ไม่สิ... ฉันขอโทษ.",
						"hindi": "...आखिर... क्या यह खत्म हो गया? धन्यवाद। नहीं... मुझे खेद है।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…끝난 게 아니었어. 이 슬픔은 계속될 거야.",
						"english": "...It wasn't over. This sorrow will continue.",
						"japanese": "…終わっていなかった。この悲しみは続く。",
						"chinese": "……还没有结束。这份悲伤会继续下去。",
						"french": "Ce n'était pas fini. Cette tristesse continuera.",
						"spanish": "No había terminado. Esta tristeza continuará.",
						"vietnamese": "Vẫn chưa kết thúc. Nỗi buồn này sẽ tiếp diễn.",
						"thai": "มันยังไม่จบ ความเศร้าโศกนี้จะดำเนินต่อไป.",
						"hindi": "यह खत्म नहीं हुआ था। यह दुख जारी रहेगा।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 슬픔은 사라졌지만, 그 비극은 더 깊은 곳으로 스며들었다.",
						"english": "The frozen sorrow disappeared, but the tragedy seeped deeper.",
						"japanese": "凍りついた悲しみは消え去ったが、その悲劇はさらに深部へと染み込んだ。",
						"chinese": "冰冻的悲伤消失了，但那悲剧却渗透到了更深处。",
						"french": "La tristesse gelée a disparu, mais la tragédie s'est infiltrée plus profondément.",
						"spanish": "La tristeza congelada desapareció, pero la tragedia se filtró más profundamente.",
						"vietnamese": "Nỗi buồn đóng băng đã tan biến, nhưng bi kịch đó lại thấm sâu hơn.",
						"thai": "ความเศร้าโศกที่เยือกแข็งหายไป แต่โศกนาฏกรรมนั้นซึมลึกลงไปอีก.",
						"hindi": "जमा हुआ दुख गायब हो गया, लेकिन त्रासदी और गहराई में समा गई।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "진정한 해방은 아직 오지 않았다. 아니, 올 수 없는 걸까.",
						"english": "True liberation has not yet come. Or rather, can it not come?",
						"japanese": "真の解放はまだ来ていない。いや、来ることができないのだろうか。",
						"chinese": "真正的解放尚未到来。不，是无法到来吗？",
						"french": "La véritable libération n'est pas encore venue. Ou plutôt, ne peut-elle pas venir ?",
						"spanish": "La verdadera liberación aún no ha llegado. O, ¿es que no puede llegar?",
						"vietnamese": "Sự giải thoát thực sự vẫn chưa đến. Hay là không thể đến?",
						"thai": "การปลดปล่อยที่แท้จริงยังมาไม่ถึง หรือว่ามันไม่สามารถมาได้?",
						"hindi": "सच्ची मुक्ति अभी तक नहीं आई है। या, क्या यह आ नहीं सकती?"
					},
					"emotion": "sad",
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계는 잊었지만, 얼음은 모든 것을 기억했다.",
			"차가운 동굴 벽에 새겨진 건, 사라진 부족의 마지막 순간들.",
			"그들은 울부짖었고, 무언가를 갈구했다.",
			"살아있는 슬픔이 응결된 곳. 진실은 얼음 속에 갇혀 있었다."
		],
		"english": [
			"The world forgot, but the ice remembered everything.",
			"Carved into the cold cave walls were the last moments of a lost tribe.",
			"They cried out, yearning for something.",
			"Where living sorrow condensed. The truth was trapped in the ice."
		],
		"japanese": [
			"世界は忘れたが、氷はすべてを記憶していた。",
			"冷たい洞窟の壁に刻まれていたのは、消え去った部族の最期の瞬間だった。",
			"彼らは叫び、何かを切望していた。",
			"生ける悲しみが凝結した場所。真実は氷の中に囚われていた。"
		],
		"chinese": [
			"世界遗忘了，但冰记住了一切。",
			"刻在冰冷洞穴墙壁上的，是消逝部落的最后时刻。",
			"他们哀嚎着，渴望着什么。",
			"活着的悲伤凝结之地。真相被困在冰中。"
		],
		"french": [
			"Le monde a oublié, mais la glace se souvenait de tout.",
			"Gravés dans les froides parois de la grotte, les derniers instants d'une tribu disparue.",
			"Ils hurlaient, aspirant à quelque chose.",
			"Là où la tristesse vivante s'était condensée. La vérité était prisonnière de la glace."
		],
		"spanish": [
			"El mundo lo olvidó, pero el hielo lo recordaba todo.",
			"Grabados en las frías paredes de la cueva estaban los últimos momentos de una tribu perdida.",
			"Gritaban, anhelando algo.",
			"Donde la tristeza viviente se condensó. La verdad estaba atrapada en el hielo."
		],
		"vietnamese": [
			"Thế giới đã quên, nhưng băng thì ghi nhớ tất cả.",
			"Khắc sâu trên vách hang động lạnh giá là những khoảnh khắc cuối cùng của một bộ tộc đã biến mất.",
			"Họ gào thét, khao khát điều gì đó.",
			"Nơi nỗi buồn sống động ngưng tụ. Sự thật bị mắc kẹt trong băng."
		],
		"thai": [
			"โลกหลงลืมไปแล้ว แต่น้ำแข็งยังคงจดจำทุกสิ่ง",
			"สิ่งที่สลักอยู่บนผนังถ้ำที่เย็นยะเยือก คือช่วงเวลาสุดท้ายของเผ่าที่สาบสูญไปแล้ว",
			"พวกเขาคร่ำครวญ ร่ำร้องหาบางสิ่ง",
			"ที่ซึ่งความเศร้าที่มีชีวิตจับตัวกัน ความจริงถูกกักขังอยู่ในน้ำแข็ง"
		],
		"hindi": [
			"दुनिया भूल गई, लेकिन बर्फ को सब याद था।",
			"ठंडी गुफा की दीवारों पर उकेरे गए थे, एक खोई हुई जनजाति के अंतिम क्षण।",
			"वे चीख रहे थे, किसी चीज़ की लालसा में।",
			"जहाँ जीवित दुख संघनित हुआ। सच बर्फ में फँसा हुआ था।"
		]
	}
} as const;
