export const scenario_forest_umbraempress_8_03 = {
	"scenario_id": "forest_umbraempress_8_03",
	"order": 3,
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
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "오래된 돌기둥이 숲의 역사를 말하고 있었다.",
						"english": "Ancient stone pillars spoke of the forest's history.",
						"japanese": "古い石柱が森の歴史を語っていた。",
						"chinese": "古老的石柱诉说着森林的历史。",
						"french": "De vieilles colonnes de pierre racontaient l'histoire de la forêt.",
						"spanish": "Antiguos pilares de piedra hablaban de la historia del bosque.",
						"vietnamese": "Những cột đá cổ xưa kể về lịch sử của khu rừng.",
						"thai": "เสาหินเก่าแก่เล่าเรื่องราวประวัติศาสตร์ของป่า",
						"hindi": "पुराने पत्थर के खंभे जंगल के इतिहास की बात कर रहे थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "여기가 고대 유적지?",
						"english": "Is this the ancient ruins?",
						"japanese": "ここが古代遺跡か？",
						"chinese": "这里是古代遗迹吗？",
						"french": "C'est ça les ruines antiques ?",
						"spanish": "¿Son estas las ruinas antiguas?",
						"vietnamese": "Đây là khu di tích cổ đại sao?",
						"thai": "ที่นี่คือซากปรักหักพังโบราณหรือ?",
						"hindi": "क्या यह प्राचीन खंडहर है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "ela",
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "너희도 왔군. 여왕의 사냥개들이 또 이곳을 더럽히러 왔나.",
						"english": "So you've come too. Have the Queen's hounds come to defile this place again?",
						"japanese": "お前たちも来たか。女王の猟犬どもがまたここを汚しに来たのか。",
						"chinese": "你们也来了。女王的走狗们又来玷污这里了吗？",
						"french": "Vous êtes là aussi. Les chiens de chasse de la Reine sont-ils venus souiller cet endroit une fois de plus ?",
						"spanish": "Así que vosotros también habéis venido. ¿Han vuelto los perros de la Reina a profanar este lugar?",
						"vietnamese": "Các ngươi cũng đến rồi. Bọn chó săn của Nữ hoàng lại đến làm ô uế nơi này sao?",
						"thai": "พวกเจ้าก็มาด้วยรึ สุนัขล่าเนื้อของราชินีมาทำให้ที่นี่แปดเปื้อนอีกแล้วรึไง",
						"hindi": "तो तुम भी आ गए। क्या रानी के शिकारी कुत्ते फिर से इस जगह को अपवित्र करने आए हैं?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "우린 그런 게 아냐.",
						"english": "We're not like that.",
						"japanese": "私たちはそんな者じゃない。",
						"chinese": "我们不是那样的人。",
						"french": "Nous ne sommes pas comme ça.",
						"spanish": "Nosotros no somos así.",
						"vietnamese": "Chúng tôi không phải loại người đó.",
						"thai": "เราไม่ใช่แบบนั้น",
						"hindi": "हम वैसे नहीं हैं।"
					}
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "다 똑같다. 결국 이 숲은 피로 얼룩질 뿐.",
						"english": "It's all the same. In the end, this forest will only be stained with blood.",
						"japanese": "皆同じだ。結局この森は血で汚れるだけだ。",
						"chinese": "都一样。最终，这片森林只会染上鲜血。",
						"french": "C'est toujours la même chose. Au final, cette forêt ne sera que souillée de sang.",
						"spanish": "Es todo lo mismo. Al final, este bosque solo será manchado con sangre.",
						"vietnamese": "Tất cả đều như nhau. Cuối cùng, khu rừng này chỉ bị vấy bẩn bởi máu mà thôi.",
						"thai": "เหมือนกันหมด ในที่สุดป่านี้ก็จะเปื้อนเลือด",
						"hindi": "सब एक जैसा है। अंत में, यह जंगल केवल खून से रंगा जाएगा।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "ela",
					"content": {
						"korean": "…이 근처에 수상한 거점을 발견했어. 여왕이 감추려는 게 있는 것 같더군.",
						"english": "...I found a suspicious base nearby. It seems the Queen is hiding something.",
						"japanese": "…この近くで怪しい拠点をみつけた。女王が何か隠そうとしているようだ。",
						"chinese": "……我在这附近发现了一个可疑的据点。女王似乎想藏匿什么。",
						"french": "...J'ai découvert un camp suspect par ici. On dirait que la Reine cache quelque chose.",
						"spanish": "...He encontrado una base sospechosa por aquí. Parece que la Reina está escondiendo algo.",
						"vietnamese": "...Tôi đã tìm thấy một cứ điểm đáng ngờ gần đây. Có vẻ Nữ hoàng đang giấu điều gì đó.",
						"thai": "...ฉันพบค่ายต้องสงสัยอยู่แถวนี้ ดูเหมือนราชินีกำลังซ่อนบางอย่างอยู่",
						"hindi": "...मुझे पास में एक संदिग्ध ठिकाना मिला। ऐसा लगता है कि रानी कुछ छिपा रही है।"
					}
				}
			]
		},
		{
			"id": 3,
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
					"speaker": "ela",
					"content": {
						"korean": "그 거점 말이야… 가봤어.",
						"english": "That base... I've been there.",
						"japanese": "あの拠点のことか…行ってきた。",
						"chinese": "那个据点啊……我去过了。",
						"french": "Ce camp... j'y suis allé.",
						"spanish": "Esa base... ya he estado allí.",
						"vietnamese": "Cái cứ điểm đó... tôi đã đến rồi.",
						"thai": "ค่ายนั่นน่ะ... ฉันไปมาแล้ว",
						"hindi": "वह ठिकाना... मैं वहां गया था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "뭐가 있었어?",
						"english": "What was there?",
						"japanese": "何があった？",
						"chinese": "有什么？",
						"french": "Qu'y avait-il ?",
						"spanish": "¿Qué había allí?",
						"vietnamese": "Có gì ở đó?",
						"thai": "มีอะไรอยู่?",
						"hindi": "वहां क्या था?"
					}
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "상업적 가치 없는 생존 물품들. 약재, 식량… 우리가 필요한 것들이었어.",
						"english": "Survival supplies with no commercial value. Medicine, food... things we needed.",
						"japanese": "商業的価値のない生存物資。薬、食料…私たちに必要なものだった。",
						"chinese": "没有商业价值的生存物资。药品、食物……都是我们需要的。",
						"french": "Des fournitures de survie sans valeur commerciale. Des médicaments, de la nourriture... des choses dont nous avions besoin.",
						"spanish": "Suministros de supervivencia sin valor comercial. Medicinas, alimentos... cosas que necesitábamos.",
						"vietnamese": "Vật phẩm sinh tồn không có giá trị thương mại. Thuốc men, lương thực... những thứ chúng ta cần.",
						"thai": "เสบียงเอาชีวิตรอดที่ไม่มีมูลค่าทางการค้า ยา อาหาร... สิ่งที่เราต้องการ",
						"hindi": "व्यावसायिक मूल्य वाली नहीं, जीवित रहने की चीजें। दवाएं, भोजन... वही जो हमें चाहिए था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "여왕이 그런 걸 왜 숨겨?",
						"english": "Why would the Queen hide such things?",
						"japanese": "女王がどうしてそんなものを隠すんだ？",
						"chinese": "女王为什么要藏匿那种东西？",
						"french": "Pourquoi la Reine cacherait-elle de telles choses ?",
						"spanish": "¿Por qué la Reina escondería tales cosas?",
						"vietnamese": "Tại sao Nữ hoàng lại giấu những thứ đó?",
						"thai": "ทำไมราชินีถึงซ่อนของพวกนั้น?",
						"hindi": "रानी ऐसी चीजें क्यों छिपाएगी?"
					},
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "모르겠어. 하지만….",
						"english": "I don't know. But...",
						"japanese": "わからない。でも…。",
						"chinese": "我不知道。但是……",
						"french": "Je ne sais pas. Mais...",
						"spanish": "No lo sé. Pero...",
						"vietnamese": "Tôi không biết. Nhưng...",
						"thai": "ฉันไม่รู้ แต่ว่า...",
						"hindi": "मुझे नहीं पता। लेकिन..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "누군가, 이 비극은 영원히 반복될 거라고 중얼거리는 걸 들었어.",
						"english": "I heard someone mumbling that this tragedy would repeat forever.",
						"japanese": "誰かが、この悲劇は永遠に繰り返されるだろうとつぶやいているのを聞いた。",
						"chinese": "我听到有人喃喃自语说，这场悲剧会永远重演。",
						"french": "J'ai entendu quelqu'un marmonner que cette tragédie se répéterait éternellement.",
						"spanish": "Oí a alguien murmurar que esta tragedia se repetiría para siempre.",
						"vietnamese": "Tôi nghe thấy ai đó lẩm bẩm rằng bi kịch này sẽ lặp lại mãi mãi.",
						"thai": "ฉันได้ยินใครบางคนพึมพำว่าโศกนาฏกรรมนี้จะเกิดขึ้นซ้ำแล้วซ้ำเล่าตลอดไป",
						"hindi": "मैंने किसी को बुदबुदाते हुए सुना कि यह त्रासदी हमेशा दोहराई जाएगी।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "반복…이라고?",
						"english": "Repeat...?",
						"japanese": "繰り返し…だと？",
						"chinese": "重演……吗？",
						"french": "Répéter... ?",
						"spanish": "¿Repetir...?",
						"vietnamese": "Lặp lại... sao?",
						"thai": "ซ้ำแล้วซ้ำเล่า...?",
						"hindi": "दोहराना...?"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "ela",
					"content": {
						"korean": "여왕은 변했어. 한때는 숲의 수호자였지만….",
						"english": "The Queen has changed. She was once the forest's protector, but...",
						"japanese": "女王は変わってしまった。かつては森の守護者だったが…。",
						"chinese": "女王变了。她曾是森林的守护者，但……",
						"french": "La Reine a changé. Elle était autrefois la protectrice de la forêt, mais...",
						"spanish": "La Reina ha cambiado. Una vez fue la protectora del bosque, pero...",
						"vietnamese": "Nữ hoàng đã thay đổi. Cô ấy từng là người bảo vệ rừng, nhưng...",
						"thai": "ราชินีเปลี่ยนไปแล้ว ครั้งหนึ่งเธอเคยเป็นผู้พิทักษ์ป่า แต่ว่า...",
						"hindi": "रानी बदल गई है। वह कभी जंगल की रक्षक थी, लेकिन..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 일이 있었던 거야?",
						"english": "What happened?",
						"japanese": "何があったんだ？",
						"chinese": "发生了什么事？",
						"french": "Que s'est-il passé ?",
						"spanish": "¿Qué pasó?",
						"vietnamese": "Chuyện gì đã xảy ra?",
						"thai": "เกิดอะไรขึ้น?",
						"hindi": "क्या हुआ था?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "ela",
					"content": {
						"korean": "잊혀진 맹세가 있어. 숲을 지키겠다는… 그 맹세를 배신한 건 누구일까?",
						"english": "There's a forgotten vow. To protect the forest... Who betrayed that vow?",
						"japanese": "忘れられた誓いがある。森を守るという…その誓いを裏切ったのは誰だろうか？",
						"chinese": "有一个被遗忘的誓言。守护森林……是谁背叛了那个誓言？",
						"french": "Il y a un serment oublié. Protéger la forêt… Qui a trahi ce serment ?",
						"spanish": "Hay un juramento olvidado. Proteger el bosque... ¿Quién traicionó ese juramento?",
						"vietnamese": "Có một lời thề bị lãng quên. Bảo vệ khu rừng… Ai đã phản bội lời thề đó?",
						"thai": "มีคำสาบานที่ถูกลืมเลือนไป การปกป้องป่า... ใครกันที่ทรยศคำสาบานนั้น?",
						"hindi": "एक भूली हुई कसम है। जंगल की रक्षा करने की... उस कसम को किसने तोड़ा होगा?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "우리 강경파는 숲의 명예를 지키려 싸워왔지만….",
						"english": "We hardliners have fought to protect the forest's honor, but...",
						"japanese": "我々強硬派は森の名誉を守るため戦ってきたが…。",
						"chinese": "我们强硬派一直为守护森林的荣誉而战，但是……",
						"french": "Nous, les intransigeants, avons combattu pour protéger l'honneur de la forêt, mais...",
						"spanish": "Nosotros, los de línea dura, hemos luchado para proteger el honor del bosque, pero...",
						"vietnamese": "Phe cứng rắn chúng tôi đã chiến đấu để bảo vệ danh dự của rừng, nhưng…",
						"thai": "พวกเราสายแข็งได้ต่อสู้เพื่อปกป้องเกียรติของป่า แต่...",
						"hindi": "हम कट्टरपंथियों ने जंगल के सम्मान की रक्षा के लिए लड़ाई लड़ी है, लेकिन..."
					}
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "이것 역시 끝없는 피의 순환일 뿐인가….",
						"english": "Is this just an endless cycle of blood, too...?",
						"japanese": "これもまた、終わりのない血の循環に過ぎないのか…。",
						"chinese": "这难道也只是无尽的血之循环吗……",
						"french": "N'est-ce là aussi qu'un cycle de sang sans fin… ?",
						"spanish": "¿Es esto también solo un ciclo interminable de sangre...?",
						"vietnamese": "Đây cũng chỉ là một vòng tuần hoàn máu không hồi kết sao…?",
						"thai": "นี่ก็เป็นเพียงวัฏจักรแห่งเลือดที่ไม่สิ้นสุดเช่นกันหรือ...?",
						"hindi": "क्या यह भी सिर्फ़ खून का एक अंतहीन चक्र है...?"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "우리도 이 순환의 일부가 되는 건가.",
						"english": "Are we also becoming part of this cycle?",
						"japanese": "我々もこの循環の一部となるのか。",
						"chinese": "我们也要成为这个循环的一部分吗？",
						"french": "Devenons-nous nous aussi une partie de ce cycle ?",
						"spanish": "¿Nosotros también nos estamos convirtiendo en parte de este ciclo?",
						"vietnamese": "Chúng ta cũng trở thành một phần của vòng tuần hoàn này sao?",
						"thai": "พวกเราก็กำลังจะเป็นส่วนหนึ่งของวัฏจักรนี้ด้วยหรือ?",
						"hindi": "क्या हम भी इस चक्र का हिस्सा बन रहे हैं?"
					},
					"emotion": "base",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"speaker": "ela",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "이 길을 넘어서면… 더 이상 돌아갈 수 없어.",
						"english": "Cross this path... and there's no turning back.",
						"japanese": "この道を越えれば…もう引き返せない。",
						"chinese": "越过这条路……就无法回头了。",
						"french": "Franchissez ce chemin… et il n'y aura plus de retour.",
						"spanish": "Cruza este camino… y no habrá vuelta atrás.",
						"vietnamese": "Vượt qua con đường này… sẽ không còn đường quay lại.",
						"thai": "ข้ามเส้นทางนี้ไปแล้ว... ก็จะไม่มีทางย้อนกลับได้อีก",
						"hindi": "इस रास्ते को पार करो... और कोई वापसी नहीं है।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "알고 있어.",
						"english": "I know.",
						"japanese": "分かっている。",
						"chinese": "我知道。",
						"french": "Je sais.",
						"spanish": "Lo sé.",
						"vietnamese": "Tôi biết.",
						"thai": "รู้แล้ว",
						"hindi": "मुझे पता है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "수많은 전사들이 이곳에서 쓰러졌지. 숲의 땅은 피로 물들었어.",
						"english": "Countless warriors have fallen here. The forest floor is stained with blood.",
						"japanese": "数多の戦士たちがここで倒れた。森の地は血で染まった。",
						"chinese": "无数战士倒在这里。森林的土地被鲜血染红了。",
						"french": "D'innombrables guerriers sont tombés ici. La terre de la forêt est maculée de sang.",
						"spanish": "Innumerables guerreros han caído aquí. La tierra del bosque está teñida de sangre.",
						"vietnamese": "Vô số chiến binh đã gục ngã tại đây. Đất rừng nhuốm máu.",
						"thai": "นักรบมากมายล้มตายที่นี่ ผืนป่าถูกย้อมด้วยเลือด",
						"hindi": "यहां अनगिनत योद्धा गिर चुके हैं। जंगल की धरती खून से रंगी हुई है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "너희의 선택이, 이 비극의 고리를 끊을 수 있을까?",
						"english": "Can your choice break this cycle of tragedy?",
						"japanese": "君たちの選択が、この悲劇の輪を断ち切れるか？",
						"chinese": "你们的选择，能斩断这场悲剧的循环吗？",
						"french": "Votre choix, pourra-t-il briser ce cycle de tragédie ?",
						"spanish": "¿Podrá vuestra elección romper este ciclo de tragedia?",
						"vietnamese": "Lựa chọn của các ngươi, liệu có thể phá vỡ vòng bi kịch này không?",
						"thai": "ทางเลือกของพวกเจ้า จะสามารถทำลายวงจรแห่งโศกนาฏกรรมนี้ได้หรือไม่?",
						"hindi": "क्या तुम्हारी पसंद इस त्रासदी के चक्र को तोड़ सकती है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "끊을 거야. 반드시.",
						"english": "We will break it. Absolutely.",
						"japanese": "断ち切る。必ず。",
						"chinese": "会斩断的。一定。",
						"french": "Nous le briserons. Absolument.",
						"spanish": "Lo romperemos. Sin falta.",
						"vietnamese": "Sẽ phá vỡ. Chắc chắn rồi.",
						"thai": "จะทำลายมันให้ได้ อย่างแน่นอน",
						"hindi": "हम इसे तोड़ेंगे। ज़रूर।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나약한 자들. 맹세를 지킬 힘도 없으면서….",
						"english": "Weaklings. Without even the strength to uphold an oath...",
						"japanese": "弱き者ども。誓いを守る力すら持たぬとは…",
						"chinese": "懦弱之徒。竟连守护誓言的力量都没有…",
						"french": "Faibles. Sans même la force de tenir un serment…",
						"spanish": "Débiles. Sin siquiera la fuerza para cumplir un juramento...",
						"vietnamese": "Lũ yếu đuối. Ngay cả sức mạnh để giữ lời thề cũng không có...",
						"thai": "พวกอ่อนแอ ไร้ซึ่งพลังจะรักษาสาบาน...",
						"hindi": "कमजोरों। शपथ निभाने की भी शक्ति नहीं है तुम्हें..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "아직… 끝나지 않았어.",
						"english": "It's not... over yet.",
						"japanese": "まだ…終わってない。",
						"chinese": "还没…结束。",
						"french": "Ce n'est pas… encore fini.",
						"spanish": "Aún… no ha terminado.",
						"vietnamese": "Chưa… kết thúc đâu.",
						"thai": "ยัง…ไม่จบ...",
						"hindi": "अभी… खत्म नहीं हुआ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "피로 얼룩진 이 땅은, 영원히 너희를 잊지 않을 것이다.",
						"english": "This land, stained with blood, will never forget you.",
						"japanese": "血に染まったこの地は、永遠にお前たちを忘れないだろう。",
						"chinese": "这片被鲜血玷污的土地，将永远不会忘记你们。",
						"french": "Cette terre, souillée de sang, ne vous oubliera jamais.",
						"spanish": "Esta tierra, manchada de sangre, jamás os olvidará.",
						"vietnamese": "Mảnh đất nhuốm máu này, sẽ không bao giờ quên các ngươi.",
						"thai": "ดินแดนที่เปื้อนเลือดนี้ จะไม่มีวันลืมพวกเจ้าตลอดไป",
						"hindi": "यह रक्त-रंजित भूमि, तुम्हें कभी नहीं भूलेगी।"
					},
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "random_boss",
					"content": {
						"korean": "크큭… 어차피… 반복될 뿐이야….",
						"english": "Heh heh... It's merely... bound to repeat...",
						"japanese": "ククク…どうせ…繰り返されるだけだ…",
						"chinese": "呵呵…反正…只会重演罢了…",
						"french": "Hé hé… De toute façon… ça ne fera que se répéter…",
						"spanish": "Je je... De todos modos... solo se repetirá...",
						"vietnamese": "Khặc khặc... Dù sao... mọi thứ cũng chỉ lặp lại mà thôi...",
						"thai": "คิกคิก... อย่างไรเสีย... มันก็แค่จะซ้ำรอยเดิมเท่านั้น...",
						"hindi": "ही ही... वैसे भी... यह बस दोहराया जाएगा..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What do you mean!",
						"japanese": "どういう意味だ！",
						"chinese": "什么意思！",
						"french": "Que voulez-vous dire !",
						"spanish": "¡Qué quieres decir!",
						"vietnamese": "Ngươi nói gì vậy!",
						"thai": "หมายความว่าอะไร!",
						"hindi": "क्या मतलब है तुम्हारा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자. 그러나 숲의 속삭임은 더욱 깊어졌다. 여왕의 동기는 여전히 베일에 싸여 있었다.",
						"english": "The shadow fell. But the whispers of the forest deepened. The queen's motives remained shrouded in mystery.",
						"japanese": "倒れた影。しかし、森の囁きはさらに深まった。女王の動機は依然として謎に包まれていた。",
						"chinese": "倒下的身影。然而，森林的低语却更加深沉。女王的动机依然笼罩在迷雾之中。",
						"french": "L'ombre tomba. Mais les murmures de la forêt s'intensifièrent. Les motivations de la reine restaient voilées de mystère.",
						"spanish": "La sombra cayó. Pero los susurros del bosque se hicieron más profundos. Los motivos de la reina seguían envueltos en misterio.",
						"vietnamese": "Bóng hình ngã xuống. Nhưng tiếng thì thầm của rừng sâu càng thêm dày đặc. Động cơ của nữ hoàng vẫn còn bị che giấu.",
						"thai": "เงาที่ล้มลง ทว่าเสียงกระซิบของป่ากลับยิ่งลึกล้ำขึ้น แรงจูงใจของราชินียังคงเป็นปริศนา",
						"hindi": "छाया गिर गई। लेकिन जंगल की फुसफुसाहट और गहरी हो गई। रानी के इरादे अभी भी रहस्य में डूबे हुए थे।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자가 숲의 심장을 지키고 있었다.",
						"english": "A colossal shadow guarded the heart of the forest.",
						"japanese": "巨大な影が森の心臓を守っていた。",
						"chinese": "一个巨大的身影守护着森林的心脏。",
						"french": "Une ombre colossale gardait le cœur de la forêt.",
						"spanish": "Una sombra colosal custodiaba el corazón del bosque.",
						"vietnamese": "Một bóng tối khổng lồ đang canh giữ trái tim của khu rừng.",
						"thai": "เงาขนาดมหึมากำลังปกป้องหัวใจของป่า",
						"hindi": "एक विशाल छाया जंगल के दिल की रखवाली कर रही थी।"
					},
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 이 숲의 맹세를 더럽히려는가.",
						"english": "Fools. Dare you defile this forest's oath?",
						"japanese": "愚か者ども。この森の誓いを汚すつもりか。",
						"chinese": "愚蠢之徒。竟敢玷污这森林的誓言？",
						"french": "Imbéciles. Osez-vous profaner le serment de cette forêt ?",
						"spanish": "Necios. ¿Pretendéis profanar el juramento de este bosque?",
						"vietnamese": "Lũ ngu ngốc. Dám vấy bẩn lời thề của khu rừng này sao?",
						"thai": "พวกโง่เขลา เจ้าคิดจะแปดเปื้อนคำสาบานแห่งป่านี้รึ",
						"hindi": "मूर्खों। क्या तुम इस वन की शपथ को अपवित्र करना चाहते हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "맹세를 더럽힌 건 너희다!",
						"english": "It is *you* who defiled the oath!",
						"japanese": "誓いを汚したのは貴様らだ！",
						"chinese": "玷污誓言的是你们！",
						"french": "C'est vous qui avez profané le serment !",
						"spanish": "¡Vosotros sois quienes profanasteis el juramento!",
						"vietnamese": "Chính các ngươi mới là kẻ vấy bẩn lời thề!",
						"thai": "พวกเจ้าต่างหากที่แปดเปื้อนคำสาบาน!",
						"hindi": "शपथ को अपवित्र करने वाले तुम हो!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "ela",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "ela",
					"content": {
						"korean": "저자를 쓰러뜨려야 해. 이 비극을 끝내려면!",
						"english": "We must strike him down. To end this tragedy!",
						"japanese": "奴を倒さねば。この悲劇を終わらせるために！",
						"chinese": "必须打倒他。才能结束这场悲剧！",
						"french": "Nous devons le vaincre. Pour mettre fin à cette tragédie !",
						"spanish": "¡Debemos derrotarlo para poner fin a esta tragedia!",
						"vietnamese": "Phải đánh bại hắn. Để chấm dứt bi kịch này!",
						"thai": "เราต้องโค่นมันลง เพื่อยุติโศกนาฏกรรมนี้!",
						"hindi": "हमें उसे हराना होगा। इस त्रासदी को समाप्त करने के लिए!"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "감히…! 다시 한번 피로 물들여주마!",
						"english": "You dare...! I'll dye you with blood once more!",
						"japanese": "よくも…！もう一度血で染め上げてやろう！",
						"chinese": "竟敢…！我会让你们再次染血！",
						"french": "Comment osez-vous… ! Je vous teindrai de sang une fois de plus !",
						"spanish": "¡Cómo osas...! ¡Teñiré de sangre una vez más!",
						"vietnamese": "Dám lắm...! Ta sẽ lại nhuộm máu ngươi lần nữa!",
						"thai": "บังอาจ...! ข้าจะย้อมเจ้าด้วยเลือดอีกครั้ง!",
						"hindi": "तुम्हारी हिम्मत कैसे हुई...! मैं तुम्हें एक बार फिर खून से रंग दूंगा!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "exit",
					"speaker": "ela",
					"duration_ms": 400,
					"type": "direction"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"고대 유적. 잊혀진 맹세가 잠든 곳.",
			"아마존 전사들의 피는 숲의 땅을 적셨다.",
			"여왕의 세력과의 끝없는 싸움.",
			"이 비극은 정말로, 끝나지 않는 반복일 뿐인가?",
			"숲의 깊은 곳에서, 진실이 고개를 들기 시작했다."
		],
		"english": [
			"Ancient ruins. Where forgotten vows slumber.",
			"The blood of Amazon warriors soaked the forest ground.",
			"An endless struggle against the Queen's forces.",
			"Is this tragedy truly just an endless cycle?",
			"In the depths of the forest, the truth began to emerge."
		],
		"japanese": [
			"古代遺跡。忘れられた誓いが眠る場所。",
			"アマゾン戦士たちの血が森の土を濡らした。",
			"女王の勢力との終わりのない戦い。",
			"この悲劇は、本当に終わらない繰り返しに過ぎないのか？",
			"森の奥深くで、真実が顔を出し始めた。"
		],
		"chinese": [
			"古代遗迹。被遗忘的誓言沉睡之地。",
			"亚马逊战士的鲜血浸染了森林的土地。",
			"与女王势力无休止的战斗。",
			"这场悲剧，真的只是无尽的循环吗？",
			"在森林深处，真相开始浮现。"
		],
		"french": [
			"Ruines antiques. Là où les serments oubliés sommeillent.",
			"Le sang des guerrières amazones a imprégné le sol de la forêt.",
			"Une lutte sans fin contre les forces de la Reine.",
			"Cette tragédie n'est-elle vraiment qu'une répétition sans fin ?",
			"Dans les profondeurs de la forêt, la vérité commença à émerger."
		],
		"spanish": [
			"Antiguas ruinas. Donde los juramentos olvidados duermen.",
			"La sangre de las guerreras amazonas empapó la tierra del bosque.",
			"Una lucha interminable contra las fuerzas de la Reina.",
			"¿Es esta tragedia realmente solo una repetición interminable?",
			"En lo profundo del bosque, la verdad comenzó a asomar."
		],
		"vietnamese": [
			"Di tích cổ đại. Nơi những lời thề bị lãng quên yên nghỉ.",
			"Máu của các nữ chiến binh Amazon đã thấm đẫm đất rừng.",
			"Cuộc chiến không hồi kết với thế lực của Nữ hoàng.",
			"Bi kịch này, liệu có phải chỉ là một vòng lặp không hồi kết?",
			"Trong sâu thẳm khu rừng, sự thật bắt đầu hé lộ."
		],
		"thai": [
			"ซากปรักหักพังโบราณ สถานที่ที่คำปฏิญาณที่ถูกลืมหลับใหล",
			"เลือดของเหล่านักรบอเมซอนเปื้อนผืนป่า",
			"การต่อสู้ไม่รู้จบกับกองกำลังของราชินี",
			"โศกนาฏกรรมนี้เป็นเพียงการทำซ้ำไม่รู้จบจริงๆ หรือไม่?",
			"ในส่วนลึกของป่า ความจริงเริ่มปรากฏ"
		],
		"hindi": [
			"प्राचीन खंडहर। जहाँ भूले हुए वचन सोते हैं।",
			"अमेज़न योद्धाओं का खून जंगल की ज़मीन में मिल गया।",
			"रानी की सेना के खिलाफ एक अंतहीन संघर्ष।",
			"क्या यह त्रासदी वास्तव में सिर्फ एक अंतहीन पुनरावृत्ति है?",
			"जंगल की गहराई में, सच्चाई सामने आने लगी।"
		]
	}
} as const;
