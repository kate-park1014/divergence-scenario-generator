export const scenario_forest_honeydew_9_02 = {
	"scenario_id": "forest_honeydew_9_02",
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
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "꿀 냄새가 진동하는 숲. 달콤하지만 어딘가 으스스하다.",
						"english": "A forest permeated with the scent of honey. Sweet, yet somehow eerie.",
						"japanese": "蜂蜜の香りが漂う森。甘いが、どこか不気味だ。",
						"chinese": "弥漫着蜂蜜香气的森林。甜美，却又透着一丝诡异。",
						"french": "Une forêt imprégnée de l'odeur du miel. Douce, mais étrange.",
						"spanish": "Un bosque impregnado del aroma a miel. Dulce, pero de alguna manera espeluznante.",
						"vietnamese": "Một khu rừng ngập tràn mùi mật ong. Ngọt ngào, nhưng cũng có gì đó rợn người.",
						"thai": "ป่าที่อบอวลไปด้วยกลิ่นน้ำผึ้ง หอมหวาน แต่ก็มีบางอย่างที่น่าขนลุก",
						"hindi": "शहद की खुशबू से लबरेज जंगल। मीठा, फिर भी कहीं-कहीं डरावना।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "이게… 정령의 꿀?",
						"english": "Is this... the Spirit's Honey?",
						"japanese": "これが…精霊の蜂蜜？",
						"chinese": "这就是……精灵之蜜？",
						"french": "C'est... le miel des Esprits ?",
						"spanish": "¿Es esto... la Miel del Espíritu?",
						"vietnamese": "Đây là... mật ong của Tinh Linh sao?",
						"thai": "นี่มัน... น้ำผึ้งของภูตผี?",
						"hindi": "क्या यह... आत्मा का शहद है?"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "사람들이 왜 이렇게 잠들어 있죠?",
						"english": "Why are all these people asleep?",
						"japanese": "なぜみんなこんなに眠っているんだ？",
						"chinese": "为什么这些人都在沉睡？",
						"french": "Pourquoi tout le monde est-il endormi comme ça ?",
						"spanish": "¿Por qué toda esta gente está dormida?",
						"vietnamese": "Tại sao mọi người lại ngủ say như vậy?",
						"thai": "ทำไมทุกคนถึงหลับไปแบบนี้?",
						"hindi": "ये सब लोग क्यों सो रहे हैं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "표정은 행복한데… 아무리 흔들어도 깨어나질 않아.",
						"english": "Their expressions are happy... but no matter how much I shake them, they won't wake up.",
						"japanese": "表情は幸せそうだけど…いくら揺すっても目を覚まさない。",
						"chinese": "他们的表情很幸福……但无论怎么摇晃，都无法唤醒。",
						"french": "Leurs expressions sont heureuses... mais peu importe combien je les secoue, ils ne se réveillent pas.",
						"spanish": "Sus expresiones son felices... pero por mucho que los agite, no se despiertan.",
						"vietnamese": "Vẻ mặt họ hạnh phúc... nhưng dù có lay bao nhiêu cũng không tỉnh dậy.",
						"thai": "สีหน้าดูมีความสุขดีนะ... แต่เขย่าเท่าไหร่ก็ไม่ยอมตื่นเลย",
						"hindi": "उनके चेहरे पर खुशी है... लेकिन कितना भी हिलाओ, वे जाग नहीं रहे हैं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "ela",
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "이 방에도… 다들 잠들어 있어.",
						"english": "In this room too... everyone is asleep.",
						"japanese": "この部屋にも…みんな眠っている。",
						"chinese": "这个房间里……大家也都睡着了。",
						"french": "Dans cette pièce aussi... tout le monde dort.",
						"spanish": "En esta habitación también... todos están dormidos.",
						"vietnamese": "Trong căn phòng này... mọi người cũng đều đang ngủ.",
						"thai": "ในห้องนี้ก็... ทุกคนหลับไปแล้ว",
						"hindi": "इस कमरे में भी... सब सो रहे हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숨은 쉬는 것 같은데… 너무 깊은 잠이에요.",
						"english": "They seem to be breathing... but it's such a deep sleep.",
						"japanese": "息はしているみたいだけど…とても深い眠りだ。",
						"chinese": "似乎还在呼吸……但睡得太深了。",
						"french": "Ils semblent respirer... but c'est un sommeil si profond.",
						"spanish": "Parecen respirar... pero es un sueño muy profundo.",
						"vietnamese": "Họ dường như vẫn còn thở... nhưng là một giấc ngủ quá sâu.",
						"thai": "เหมือนจะหายใจอยู่นะ... แต่เป็นการหลับที่ลึกมากเลย",
						"hindi": "वे सांस ले रहे हैं... लेकिन यह बहुत गहरी नींद है।"
					}
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 평온함이… 너무 이상해.",
						"english": "This serenity... it's too strange.",
						"japanese": "この静けさ… 何かおかしい。",
						"chinese": "这份宁静… 太奇怪了。",
						"french": "Ce calme… est trop étrange.",
						"spanish": "Esta serenidad... es demasiado extraña.",
						"vietnamese": "Sự yên bình này… thật quá kỳ lạ.",
						"thai": "ความสงบนี้... มันแปลกเกินไป",
						"hindi": "यह शांति... कुछ ज़्यादा ही अजीब है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "저 아이도… 꿀을 먹고 잠들었나 봐.",
						"english": "That child too... seems to have eaten the honey and fallen asleep.",
						"japanese": "あの子も… 蜂蜜を食べて眠ったみたいだ。",
						"chinese": "那个孩子也… 吃了蜂蜜睡着了。",
						"french": "Cet enfant aussi… semble avoir mangé le miel et s'être endormi.",
						"spanish": "Esa niña también… parece haber comido la miel y haberse dormido.",
						"vietnamese": "Đứa bé đó cũng… đã ăn mật ong và ngủ thiếp đi rồi.",
						"thai": "เด็กคนนั้นก็… คงกินน้ำผึ้งแล้วหลับไปแล้ว.",
						"hindi": "वह बच्चा भी... शहद खाकर सो गया लगता है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "모두 똑같이 웃고 있어… 으스스해.",
						"english": "Everyone is smiling the same way... it's creepy.",
						"japanese": "みんな同じように笑ってる… 気味が悪い。",
						"chinese": "大家都笑着… 好诡异。",
						"french": "Tous sourient de la même façon… c'est effrayant.",
						"spanish": "Todos sonríen igual... es espeluznante.",
						"vietnamese": "Ai cũng cười giống nhau… thật rợn người.",
						"thai": "ทุกคนยิ้มเหมือนกันหมด… น่าขนลุก.",
						"hindi": "सब एक ही तरह से मुस्कुरा रहे हैं... डरावना है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "마치… 박제된 것처럼.",
						"english": "As if... taxidermied.",
						"japanese": "まるで… 剥製にされたかのように。",
						"chinese": "就像… 被制成标本一样。",
						"french": "Comme… empaillés.",
						"spanish": "Como… si estuvieran disecados.",
						"vietnamese": "Cứ như… bị nhồi bông vậy.",
						"thai": "ราวกับว่า… ถูกสตัฟฟ์ไว้.",
						"hindi": "मानो... संरक्षित कर दिए गए हों।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이 꿀… 뭔가 잘못됐어.",
						"english": "This honey... something's wrong with it.",
						"japanese": "この蜂蜜… 何かおかしい。",
						"chinese": "这蜂蜜… 有问题。",
						"french": "Ce miel… quelque chose ne va pas.",
						"spanish": "Esta miel... algo está mal.",
						"vietnamese": "Mật ong này… có gì đó không ổn.",
						"thai": "น้ำผึ้งนี่… มีบางอย่างผิดปกติ.",
						"hindi": "इस शहद में... कुछ गड़बड़ है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "이건 잠이 아니야! 움직일 수가 없어…!",
						"english": "This isn't sleep! I can't move...!",
						"japanese": "これは眠りじゃない！動けない…！",
						"chinese": "这不是睡觉！我动不了了…！",
						"french": "Ce n'est pas le sommeil ! Je ne peux pas bouger… !",
						"spanish": "¡Esto no es sueño! ¡No puedo moverme…!",
						"vietnamese": "Đây không phải là ngủ! Tôi không thể cử động được…!",
						"thai": "นี่ไม่ใช่การหลับ! ขยับไม่ได้เลย…!",
						"hindi": "यह नींद नहीं है! मैं हिल नहीं पा रहा हूँ...!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "점점 더 깊어지는 느낌이에요.",
						"english": "It feels like it's getting deeper and deeper.",
						"japanese": "だんだん深くなっている気がする。",
						"chinese": "感觉越来越深了。",
						"french": "J'ai l'impression que ça devient de plus en plus profond.",
						"spanish": "Se siente cada vez más profundo.",
						"vietnamese": "Cảm giác như nó đang ngày càng sâu hơn.",
						"thai": "รู้สึกเหมือนมันกำลังลึกขึ้นเรื่อยๆ.",
						"hindi": "ऐसा लग रहा है कि यह और गहरा होता जा रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "서둘러야 해… 정령을 막아야 해!",
						"english": "I must hurry... I have to stop the spirit!",
						"japanese": "急がなきゃ… 精霊を止めないと！",
						"chinese": "我必须快点… 阻止精灵！",
						"french": "Je dois me dépêcher… Je dois arrêter l'esprit !",
						"spanish": "Debo darme prisa… ¡Tengo que detener al espíritu!",
						"vietnamese": "Phải nhanh lên… phải ngăn chặn linh hồn đó!",
						"thai": "ต้องรีบแล้ว… ต้องหยุดวิญญาณนั่นให้ได้!",
						"hindi": "मुझे जल्दी करनी होगी... मुझे आत्मा को रोकना होगा!"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "정령이… 대체 왜 이런 짓을?",
						"english": "Why would the spirit... do something like this?",
						"japanese": "精霊が… いったいなぜこんなことを？",
						"chinese": "精灵… 到底为什么要这么做？",
						"french": "Pourquoi l'esprit… ferait-il une chose pareille ?",
						"spanish": "¿Por qué el espíritu… haría algo así?",
						"vietnamese": "Linh hồn đó… tại sao lại làm những điều này?",
						"thai": "วิญญาณนั่น… ทำไมถึงทำแบบนี้?",
						"hindi": "आत्मा... ऐसा क्यों कर रही है?"
					},
					"emotion": "base"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이 꿀은… 세상의 모든 고통을 없앨… 완벽한….",
						"english": "This honey... will end all suffering in the world... a perfect...",
						"japanese": "この蜜は…世の全ての苦痛を消し去る…完璧な…",
						"chinese": "这蜂蜜……能消除世间一切痛苦……完美的……",
						"french": "Ce miel... mettra fin à toutes les souffrances du monde... un parfait...",
						"spanish": "Esta miel... eliminará todo el sufrimiento del mundo... una perfecta...",
						"vietnamese": "Thứ mật ong này... sẽ xóa tan mọi đau khổ trên thế gian... một sự hoàn hảo...",
						"thai": "น้ำผึ้งนี้...จะขจัดความทุกข์ทั้งหมดในโลก...สมบูรณ์แบบ...",
						"hindi": "यह शहद... दुनिया के सभी दुखों को खत्म करेगा... एक आदर्श..."
					},
					"emotion": "sad"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "끝났어…? 하지만… 사람들은 여전히…",
						"english": "It's over...? But... people are still...",
						"japanese": "終わったのか…？だが…人々はまだ…",
						"chinese": "结束了……？但是……人们仍然……",
						"french": "C'est fini...? Mais... les gens sont toujours...",
						"spanish": "¿Se acabó...? Pero... la gente sigue...",
						"vietnamese": "Kết thúc rồi sao...? Nhưng... mọi người vẫn còn...",
						"thai": "จบแล้วเหรอ...? แต่...ผู้คนยังคง...",
						"hindi": "क्या यह खत्म हो गया...? लेकिन... लोग अभी भी..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "꿀에 잠긴 자들은 움직이지 않았다. 평온은 깨졌지만, 그들의 잠은 계속되었다.",
						"english": "Those steeped in honey did not stir. Peace was broken, but their slumber continued.",
						"japanese": "蜜に浸された者たちは動かなかった。平穏は破られたが、彼らの眠りは続いた。",
						"chinese": "浸在蜂蜜中的人们一动不动。平静被打破了，但他们的沉睡仍在继续。",
						"french": "Ceux qui étaient plongés dans le miel ne bougèrent pas. La paix était brisée, mais leur sommeil continuait.",
						"spanish": "Aquellos sumergidos en miel no se movieron. La paz se rompió, pero su letargo continuó.",
						"vietnamese": "Những kẻ chìm trong mật ong không hề lay động. Bình yên bị phá vỡ, nhưng giấc ngủ của họ vẫn tiếp diễn.",
						"thai": "ผู้ที่จมอยู่ในน้ำผึ้งไม่ไหวติง ความสงบถูกทำลาย แต่การหลับใหลของพวกเขายังคงดำเนินต่อไป",
						"hindi": "शहद में डूबे हुए लोग हिले नहीं। शांति भंग हो गई थी, लेकिन उनकी नींद जारी रही।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "다음 진실은, 고목 줄기 속에 감춰져 있었다.",
						"english": "The next truth was hidden within the trunk of an ancient tree.",
						"japanese": "次の真実は、古木の幹の中に隠されていた。",
						"chinese": "下一个真相，隐藏在古老的树干中。",
						"french": "La prochaine vérité était cachée dans le tronc d'un arbre ancien.",
						"spanish": "La siguiente verdad estaba oculta dentro del tronco de un árbol antiguo.",
						"vietnamese": "Sự thật tiếp theo, ẩn chứa trong thân cây cổ thụ.",
						"thai": "ความจริงต่อไป ซ่อนอยู่ในลำต้นของต้นไม้โบราณ",
						"hindi": "अगला सच, एक पुराने पेड़ के तने में छिपा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "너희도… 이 달콤한 평온 속으로….",
						"english": "You too... into this sweet serenity...",
						"japanese": "お前たちも…この甘美な平穏の中へ…",
						"chinese": "你们也……进入这甜美的平静之中……",
						"french": "Vous aussi... dans cette douce sérénité...",
						"spanish": "Ustedes también... a esta dulce serenidad...",
						"vietnamese": "Các ngươi cũng... vào sự bình yên ngọt ngào này...",
						"thai": "พวกแกเองก็... เข้าสู่ความสงบอันหอมหวานนี้...",
						"hindi": "तुम भी... इस मधुर शांति में..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "크윽… 절대… 포기 안 해!",
						"english": "Ugh... Never... I won't give up!",
						"japanese": "くっ…絶対…諦めない！",
						"chinese": "呃……绝不……放弃！",
						"french": "Urgh... Jamais... je n'abandonnerai pas !",
						"spanish": "Ugh... ¡Nunca... me rendiré!",
						"vietnamese": "Khụ... Tuyệt đối... không bỏ cuộc!",
						"thai": "อึก... ไม่มีทาง... ฉันไม่ยอมแพ้!",
						"hindi": "उफ़... कभी नहीं... मैं हार नहीं मानूँगा!"
					}
				},
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "모두… 잠들면 안 돼…!",
						"english": "Everyone... must not fall asleep...!",
						"japanese": "みんな…眠ってはいけない…！",
						"chinese": "大家……不能睡着……！",
						"french": "Tout le monde... ne doit pas s'endormir...!",
						"spanish": "¡Todos... no deben dormirse...!",
						"vietnamese": "Mọi người... đừng ngủ gật...!",
						"thai": "ทุกคน... ห้ามหลับนะ...!",
						"hindi": "सब लोग... सो मत जाना...!"
					}
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "감히… 나의 평온을 깨려는 자들.",
						"english": "How dare they... those who try to disturb my peace.",
						"japanese": "よくも… 私の平穏を乱そうとする者たちめ。",
						"chinese": "竟敢… 打扰我的宁静。",
						"french": "Comment osent-ils… ceux qui tentent de troubler ma paix.",
						"spanish": "Cómo se atreven… los que intentan perturbar mi paz.",
						"vietnamese": "Dám… những kẻ muốn phá vỡ sự bình yên của ta.",
						"thai": "พวกเจ้ากล้าดียังไง… ที่จะมาทำลายความสงบของข้า.",
						"hindi": "हिम्मत कैसे हुई... मेरी शांति भंग करने वालों की।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"content": {
						"korean": "네가 꾸민 짓이었군! 이 사람들을 모두 가둔 게 너지!",
						"english": "It was you! You're the one who imprisoned all these people!",
						"japanese": "お前が仕組んだことだったのか！この人たちを閉じ込めたのはお前だな！",
						"chinese": "原来是你搞的鬼！是你把这些人全都关起来的！",
						"french": "C'était ton coup ! C'est toi qui as emprisonné tous ces gens !",
						"spanish": "¡Fuiste tú! ¡Tú eres quien aprisionó a toda esta gente!",
						"vietnamese": "Là ngươi sắp đặt tất cả! Ngươi là kẻ đã giam cầm tất cả những người này!",
						"thai": "เป็นฝีมือแกนี่เอง! แกเป็นคนกักขังคนพวกนี้ทั้งหมด!",
						"hindi": "तो ये सब तुम्हारा किया धरा था! इन सब लोगों को तुमने ही कैद किया है!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "그들은 영원한 안식에 들었을 뿐.",
						"english": "They merely entered eternal slumber.",
						"japanese": "彼らはただ永遠の安息についただけだ。",
						"chinese": "他们只是进入了永恒的安息。",
						"french": "Ils sont simplement entrés dans le repos éternel.",
						"spanish": "Ellos simplemente entraron en un descanso eterno.",
						"vietnamese": "Họ chỉ đơn thuần chìm vào giấc ngủ vĩnh hằng.",
						"thai": "พวกเขาเพียงแค่เข้าสู่การหลับใหลนิรันดร์",
						"hindi": "वे बस अनंत विश्राम में लीन हुए हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "강제로 갇힌 거라고!",
						"english": "They were forcibly imprisoned!",
						"japanese": "無理やり閉じ込められたんだ！",
						"chinese": "他们是被强行关起来的！",
						"french": "Ils ont été emprisonnés de force !",
						"spanish": "¡Fueron encerrados a la fuerza!",
						"vietnamese": "Họ đã bị giam giữ một cách cưỡng ép!",
						"thai": "พวกเขาถูกกักขังโดยบังคับ!",
						"hindi": "उन्हें जबरन कैद किया गया है!"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"황금빛 꿀. 숲의 어머니가 주는 축복.",
			"그러나 그 달콤함 속에는, 깨지 않는 잠이 숨어 있었다.",
			"평온한 미소 아래, 영원히 갇힌 영혼들.",
			"진실을 파헤치려는 자, 너 또한 잠들 것인가?"
		],
		"english": [
			"Golden honey. A blessing from the Mother of the Forest.",
			"Yet within its sweetness, an unbreakable slumber lay hidden.",
			"Beneath peaceful smiles, souls forever trapped.",
			"You who seek to unearth the truth, will you also fall into slumber?"
		],
		"japanese": [
			"黄金色の蜂蜜。森の母なる存在からの祝福。",
			"しかし、その甘さの中には、目覚めぬ眠りが隠されていた。",
			"安らかな微笑みの下、永遠に囚われた魂たち。",
			"真実を暴こうとする者よ、お前もまた眠りにつくのか？"
		],
		"chinese": [
			"金色的蜂蜜。森林之母的赐福。",
			"然而，在那甜美之中，却隐藏着永不苏醒的沉睡。",
			"在宁静的微笑之下，灵魂永远被囚禁。",
			"欲揭露真相者，你亦将沉睡不醒吗？"
		],
		"french": [
			"Miel doré. Une bénédiction de la Mère de la Forêt.",
			"Pourtant, au cœur de sa douceur, un sommeil ininterrompu se cachait.",
			"Sous des sourires paisibles, des âmes piégées à jamais.",
			"Toi qui cherches à déterrer la vérité, t'endormiras-tu aussi ?"
		],
		"spanish": [
			"Miel dorada. Una bendición de la Madre del Bosque.",
			"Sin embargo, dentro de su dulzura, un sueño inquebrantable se ocultaba.",
			"Bajo sonrisas serenas, almas atrapadas para siempre.",
			"Tú que buscas desenterrar la verdad, ¿también caerás en el sueño?"
		],
		"vietnamese": [
			"Mật ong vàng óng. Phước lành từ Mẹ Rừng.",
			"Nhưng ẩn sâu trong vị ngọt ấy là một giấc ngủ không thể phá vỡ.",
			"Dưới nụ cười bình yên, là những linh hồn bị giam cầm vĩnh viễn.",
			"Người muốn vén màn sự thật, liệu ngươi cũng sẽ chìm vào giấc ngủ sao?"
		],
		"thai": [
			"น้ำผึ้งสีทอง พรจากมารดาแห่งป่า",
			"ทว่า ภายในความหอมหวานนั้น กลับซ่อนเร้นนิทราที่มิอาจตื่น",
			"ภายใต้รอยยิ้มอันสงบ วิญญาณที่ถูกจองจำชั่วนิรันดร์",
			"ผู้ที่พยายามจะเปิดเผยความจริง เจ้าเองก็จะหลับใหลไปด้วยงั้นหรือ?"
		],
		"hindi": [
			"सुनहरा शहद। वन माता का आशीर्वाद।",
			"फिर भी, उसकी मिठास में, एक अटूट नींद छिपी थी।",
			"शांत मुस्कान के नीचे, हमेशा के लिए फंसी आत्माएं।",
			"सत्य को उजागर करने वाले, क्या तुम भी सो जाओगे?"
		]
	}
} as const;
