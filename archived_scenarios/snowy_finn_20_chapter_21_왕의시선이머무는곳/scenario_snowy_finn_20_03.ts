export const scenario_snowy_finn_20_03 = {
	"scenario_id": "snowy_finn_20_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"frost": {
			"id": "mon_942bca3b-33e7-4b14-98e5-ec1e2dc78d5b",
			"name": {
				"korean": "서리",
				"english": "Frost",
				"japanese": "霜",
				"chinese": "霜",
				"french": "Givre",
				"spanish": "Escarcha",
				"vietnamese": "Băng Giá",
				"thai": "น้ำแข็ง",
				"hindi": "पाला"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0a8c2f92-0cf9-413d-0b33-8e0204caae00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/df60b327-4cc2-435b-67e0-cffb4c319900/public"
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
					"content": {
						"korean": "차가운 얼음 방, 녹슨 빗장이 열렸다.",
						"english": "A cold ice room, a rusted bolt unlocked.",
						"japanese": "冷たい氷の部屋、錆びた閂が開いた。",
						"chinese": "冰冷的房间，生锈的门闩打开了。",
						"french": "Une pièce de glace froide, un verrou rouillé s'ouvrit.",
						"spanish": "Una fría habitación de hielo, un cerrojo oxidado se abrió.",
						"vietnamese": "Một căn phòng băng giá lạnh lẽo, chốt cửa gỉ sét đã mở.",
						"thai": "ห้องน้ำแข็งที่หนาวเหน็บ สลักเกลียวที่ขึ้นสนิมถูกเปิดออก",
						"hindi": "एक ठंडा बर्फीला कमरा, एक जंग लगी कुंडी खुली।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "여기가… 왕의 보물 창고?",
						"english": "Is this… the King's Treasury?",
						"japanese": "ここが… 王の宝物庫？",
						"chinese": "这里是… 国王的宝库？",
						"french": "C'est ici… le trésor du Roi ?",
						"spanish": "¿Es esto… la Tesorería del Rey?",
						"vietnamese": "Đây là… Kho báu của Vua sao?",
						"thai": "ที่นี่คือ… คลังสมบัติของราชาหรือ?",
						"hindi": "क्या यह… राजा का खजाना है?"
					}
				},
				{
					"content": {
						"korean": "안에는 빈 깡통과 닳은 담요뿐이었다.",
						"english": "Inside were only empty cans and a worn blanket.",
						"japanese": "中には空き缶と使い古された毛布だけだった。",
						"chinese": "里面只有空罐头和旧毯子。",
						"french": "À l'intérieur, il n'y avait que des canettes vides et une couverture usée.",
						"spanish": "Dentro solo había latas vacías y una manta gastada.",
						"vietnamese": "Bên trong chỉ có lon rỗng và chăn cũ mòn.",
						"thai": "ข้างในมีเพียงกระป๋องเปล่าและผ้าห่มเก่าซอมซ่อ",
						"hindi": "अंदर सिर्फ खाली डिब्बे और एक पुरानी कम्बल थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "…기록합니다. 초라한 왕의 보물 창고.",
						"english": "...Recording. The King's humble treasury.",
						"japanese": "…記録します。みすぼらしい王の宝物庫。",
						"chinese": "……记录。寒酸的国王宝库。",
						"french": "...Je l'enregistre. Le trésor modeste du Roi.",
						"spanish": "...Registrando. La humilde tesorería del Rey.",
						"vietnamese": "...Ghi lại. Kho báu tồi tàn của Vua.",
						"thai": "…บันทึกไว้ คลังสมบัติที่ซอมซ่อของราชา",
						"hindi": "...रिकॉर्ड करता हूँ। राजा का विनम्र खजाना।"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그러나 왕의 시선은… 다른 곳으로 향하는군.",
						"english": "But the King's gaze... is directed elsewhere.",
						"japanese": "しかし王の視線は… 別の場所へ向かっているな。",
						"chinese": "然而国王的目光… 似乎投向了别处。",
						"french": "Mais le regard du Roi… est tourné ailleurs.",
						"spanish": "Pero la mirada del Rey… se dirige a otro lugar.",
						"vietnamese": "Nhưng ánh mắt của Vua… lại hướng về nơi khác.",
						"thai": "แต่สายตาของราชา… กลับมองไปยังที่อื่นสินะ",
						"hindi": "लेकिन राजा की नज़र… कहीं और जा रही है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"content": {
						"korean": "왕은 보물을 자랑하면서도,",
						"english": "While the King boasts of his treasures,",
						"japanese": "王は宝物を自慢しながらも、",
						"chinese": "国王一边夸耀着宝物，",
						"french": "Tandis que le Roi se vante de ses trésors,",
						"spanish": "Aunque el Rey se jacta de sus tesoros,",
						"vietnamese": "Dù nhà Vua khoe khoang về kho báu của mình,",
						"thai": "ในขณะที่ราชาโอ้อวดสมบัติของพระองค์",
						"hindi": "राजा अपने खजाने का बखान करते हुए भी,"
					},
					"speaker": "eira",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "우리 배낭의 핫팩을… 곁눈질합니다.",
						"english": "He eyes the hot packs in our backpack.",
						"japanese": "うちのリュックのカイロを…横目で見てる。",
						"chinese": "他斜眼看着我们背包里的暖宝宝。",
						"french": "Il lorgne les chaufferettes dans notre sac à dos.",
						"spanish": "Él mira de reojo los parches térmicos en nuestra mochila.",
						"vietnamese": "Hắn liếc nhìn miếng dán giữ nhiệt trong ba lô của chúng ta.",
						"thai": "เขามองเครื่องอุ่นในกระเป๋าเรา… แบบเหล่ๆ",
						"hindi": "वह हमारे बैग के हॉट पैक को... तिरछी नज़रों से देखता है।"
					}
				},
				{
					"content": {
						"korean": "핫팩?",
						"english": "Hot packs?",
						"japanese": "カイロ？",
						"chinese": "暖宝宝？",
						"french": "Chaufferettes ?",
						"spanish": "¿Parches térmicos?",
						"vietnamese": "Miếng dán giữ nhiệt?",
						"thai": "เครื่องอุ่นเหรอ?",
						"hindi": "हॉट पैक?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "보석보다… 따뜻함을 탐하는군요.",
						"english": "Craving warmth… more than jewels.",
						"japanese": "宝石より…暖かさを欲しがってるな。",
						"chinese": "比起宝石…更渴望温暖啊。",
						"french": "Il convoite la chaleur… plus que les joyaux.",
						"spanish": "Codicia el calor… más que las joyas.",
						"vietnamese": "Thèm khát sự ấm áp… hơn cả châu báu.",
						"thai": "ปรารถนาความอบอุ่น… มากกว่าอัญมณีเสียอีก",
						"hindi": "हीरों से ज़्यादा... गर्मी की लालसा है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "방 한구석. 담요를 두른 작은 펭귄 무리가 떨고 있었다.",
						"english": "In a corner of the room, a small huddle of penguins, wrapped in blankets, shivered.",
						"japanese": "部屋の片隅。毛布をまとった小さなペンギンの群れが震えていた。",
						"chinese": "房间一角。一群裹着毯子的小企鹅正在颤抖。",
						"french": "Dans un coin de la pièce, un petit groupe de pingouins, emmitouflés dans des couvertures, frissonnait.",
						"spanish": "En un rincón de la habitación. Un pequeño grupo de pingüinos, envueltos en mantas, temblaba.",
						"vietnamese": "Một góc phòng. Một nhóm chim cánh cụt nhỏ, quấn chăn, đang run rẩy.",
						"thai": "มุมห้อง. ฝูงเพนกวินตัวน้อยห่มผ้าห่มกำลังสั่น",
						"hindi": "कमरे के एक कोने में। कंबल ओढ़े छोटे पेंगुइनों का एक झुंड काँप रहा था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost",
					"spot": [
						4,
						3
					]
				},
				{
					"content": {
						"korean": "…핫팩 한 장이.",
						"english": "…A single hot pack.",
						"japanese": "…カイロ一枚が。",
						"chinese": "…一张暖宝宝。",
						"french": "…Une seule chaufferette.",
						"spanish": "…Un solo parche térmico.",
						"vietnamese": "…Một miếng dán giữ nhiệt.",
						"thai": "…แค่เครื่องอุ่นแผ่นเดียว",
						"hindi": "…बस एक हॉट पैक।"
					},
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "저들에겐 보물보다 귀하겠어.",
						"english": "To them, it would be more precious than treasure.",
						"japanese": "あれらには宝物より貴重だろう。",
						"chinese": "对它们来说，比宝物还珍贵吧。",
						"french": "Pour eux, ce serait plus précieux qu'un trésor.",
						"spanish": "Para ellos, sería más valioso que un tesoro.",
						"vietnamese": "Với chúng, nó sẽ quý giá hơn cả kho báu.",
						"thai": "สำหรับพวกมัน คงมีค่ากว่าสมบัติซะอีก",
						"hindi": "उनके लिए, यह खजाने से भी ज़्यादा कीमती होगा।"
					}
				},
				{
					"content": {
						"korean": "온기란… 가끔은 가장 큰 보물이지.",
						"english": "Warmth… is sometimes the greatest treasure.",
						"japanese": "温もりとは…時には最大の宝物だ。",
						"chinese": "温暖啊…有时是最大的宝物。",
						"french": "La chaleur… est parfois le plus grand des trésors.",
						"spanish": "El calor… a veces es el mayor tesoro.",
						"vietnamese": "Sự ấm áp… đôi khi là báu vật lớn nhất.",
						"thai": "ความอบอุ่น… บางครั้งก็เป็นสมบัติที่ยิ่งใหญ่ที่สุด",
						"hindi": "गर्मी… कभी-कभी सबसे बड़ा खजाना होती है।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "frost"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"speaker": "frost",
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕은 '관심 없다'고 외치지만,",
						"english": "The king proclaims 'I don't care',",
						"japanese": "王は「興味ない」と叫ぶが、",
						"chinese": "国王大喊着“我才不在乎”，",
						"french": "Le roi clame 'Je m'en fiche',",
						"spanish": "El rey proclama 'No me importa',",
						"vietnamese": "Nhà vua tuyên bố 'Ta không quan tâm',",
						"thai": "ราชาตะโกนว่า 'ไม่สนหรอก'",
						"hindi": "राजा चिल्लाता है 'मुझे परवाह नहीं',"
					}
				},
				{
					"content": {
						"korean": "그의 날개가 따뜻한 쪽으로 슬며시 움직였다.",
						"english": "yet his wing subtly shifted towards the warmth.",
						"japanese": "しかし、彼の翼はそっと暖かい方へ動いた。",
						"chinese": "但他的翅膀却悄悄地朝温暖的方向挪动了。",
						"french": "pourtant son aile se déplaça subtilement vers la chaleur.",
						"spanish": "sin embargo, su ala se movió sutilmente hacia el calor.",
						"vietnamese": "nhưng cánh của hắn khẽ di chuyển về phía hơi ấm.",
						"thai": "แต่ปีกของเขากลับขยับไปทางที่อบอุ่นอย่างนุ่มนวล",
						"hindi": "फिर भी, उसका पंख धीरे से गर्मी की ओर सरक गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "결국… 탐내고 있는 거잖아.",
						"english": "Ultimately… he's coveting it, isn't he?",
						"japanese": "結局…欲しがってるじゃないか。",
						"chinese": "毕竟…还是在觊觎着吧。",
						"french": "Après tout… il le convoite, n'est-ce pas ?",
						"spanish": "Al final… lo está codiciando, ¿no es así?",
						"vietnamese": "Rốt cuộc… hắn vẫn thèm muốn nó mà.",
						"thai": "สุดท้ายแล้ว… เขาก็อยากได้มันอยู่ดีนี่นา",
						"hindi": "आखिरकार… वह उसे ललचा रहा है, है ना?"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "frost",
					"content": {
						"korean": "진정한 보물은… 마음이 이끄는 곳에 있다.",
						"english": "True treasure... lies where the heart leads.",
						"japanese": "真の宝は… 心が導く場所にある。",
						"chinese": "真正的宝藏… 在心之所向。",
						"french": "Le vrai trésor… se trouve là où le cœur nous mène.",
						"spanish": "El verdadero tesoro… está donde el corazón te guía.",
						"vietnamese": "Báu vật thật sự… nằm ở nơi trái tim dẫn lối.",
						"thai": "สมบัติที่แท้จริง... อยู่ในที่ที่ใจนำทาง",
						"hindi": "सच्चा खजाना… वहीं है जहाँ दिल ले जाए।"
					}
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크으… 고작 핫팩 하나에…!",
						"english": "Ugh… just for a hot pack…!",
						"japanese": "くっ…たかが使い捨てカイロ一つに…！",
						"chinese": "呃… 区区一个暖宝宝…",
						"french": "Argh… juste pour une chaufferette… !",
						"spanish": "Uf… ¡solo por una bolsa de calor…!",
						"vietnamese": "Ư… chỉ vì một túi sưởi…!",
						"thai": "อึก… แค่ถุงร้อนใบเดียวเนี่ยนะ…!",
						"hindi": "उफ़… बस एक हॉट पैक के लिए…!"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "네 탐욕은 끝이 없었어.",
						"english": "Your greed knew no bounds.",
						"japanese": "お前の強欲は果てしなかった。",
						"chinese": "你的贪婪永无止境。",
						"french": "Ta cupidité était sans fin.",
						"spanish": "Tu codicia no tenía límites.",
						"vietnamese": "Lòng tham của ngươi không có điểm dừng.",
						"thai": "ความโลภของเจ้าไร้ขีดจำกัด",
						"hindi": "तुम्हारा लालच असीमित था।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…다시… 찾을 것이다…!",
						"english": "...I will... find it again...!",
						"japanese": "…また…見つけ出すだろう…！",
						"chinese": "…会再次…找到的…！",
						"french": "...Je le retrouverai...!",
						"spanish": "...Lo encontraré... de nuevo...!",
						"vietnamese": "...Ta sẽ... tìm lại...!",
						"thai": "...จะ... หาใหม่...!",
						"hindi": "...फिर से... पा लूंगा...!"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왕은 쓰러졌다. 하지만 온기를 향한 갈망은 사라지지 않았다.",
						"english": "The king has fallen. But his yearning for warmth remains.",
						"japanese": "王は倒れた。しかし温もりへの渇望は消えなかった。",
						"chinese": "王倒下了。但对温暖的渴望并未消失。",
						"french": "Le roi est tombé. Mais sa soif de chaleur n'a pas disparu.",
						"spanish": "El rey ha caído. Pero su anhelo de calor no desapareció.",
						"vietnamese": "Nhà vua đã gục ngã. Nhưng khao khát hơi ấm vẫn không biến mất.",
						"thai": "ราชาล้มลงแล้ว แต่ความปรารถนาในความอบอุ่นยังไม่จางหายไป",
						"hindi": "राजा गिर गया। लेकिन गर्मी की उसकी लालसा खत्म नहीं हुई।"
					}
				},
				{
					"content": {
						"korean": "진정한 온기를 찾아… 탐험대는 다음 장소로 향한다.",
						"english": "Seeking true warmth… the expedition heads to the next location.",
						"japanese": "真の温もりを求めて… 探検隊は次の場所へ向かう。",
						"chinese": "寻找真正的温暖… 探险队前往下一个地点。",
						"french": "À la recherche de la vraie chaleur… l'expédition se dirige vers le prochain lieu.",
						"spanish": "En busca del verdadero calor… la expedición se dirige al siguiente lugar.",
						"vietnamese": "Tìm kiếm hơi ấm thật sự… đoàn thám hiểm hướng tới địa điểm tiếp theo.",
						"thai": "เพื่อค้นหาความอบอุ่นที่แท้จริง... คณะสำรวจมุ่งหน้าสู่สถานที่ต่อไป",
						"hindi": "सच्ची गर्मी की तलाश में… अभियान दल अगले स्थान की ओर बढ़ता है।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "드디어, 왕의 깊은 잠을 방해하는 곳.",
						"english": "Finally, a place that disturbs the king's deep slumber.",
						"japanese": "ついに、王の深い眠りを妨げる場所。",
						"chinese": "终于，打扰了王深眠之处。",
						"french": "Enfin, un lieu qui trouble le profond sommeil du roi.",
						"spanish": "Finalmente, un lugar que perturba el profundo sueño del rey.",
						"vietnamese": "Cuối cùng, nơi quấy rầy giấc ngủ sâu của vua.",
						"thai": "ในที่สุด สถานที่ที่รบกวนการหลับใหลอันลึกซึ้งของราชา",
						"hindi": "आखिरकार, वह जगह जो राजा की गहरी नींद में खलल डालती है।"
					}
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "누가 감히… 나의 온기를 빼앗으려 드느냐.",
						"english": "Who dares… try to steal my warmth?",
						"japanese": "誰が敢えて… 我が温もりを奪おうとするのか。",
						"chinese": "谁敢… 夺走我的温暖？",
						"french": "Qui ose… tenter de voler ma chaleur ?",
						"spanish": "¿Quién se atreve… a intentar robar mi calor?",
						"vietnamese": "Ai dám… cướp đi hơi ấm của ta?",
						"thai": "ใครกล้า... จะมาช่วงชิงความอบอุ่นของข้าไป",
						"hindi": "कौन हिम्मत करता है… मेरी गर्मी चुराने की?"
					}
				},
				{
					"content": {
						"korean": "온기는 네 것이 아니야!",
						"english": "The warmth isn't yours!",
						"japanese": "温もりは貴様のものではない！",
						"chinese": "温暖不是你的！",
						"french": "La chaleur n'est pas tienne !",
						"spanish": "¡El calor no es tuyo!",
						"vietnamese": "Hơi ấm không phải của ngươi!",
						"thai": "ความอบอุ่นไม่ใช่ของเจ้า!",
						"hindi": "गर्मी तुम्हारी नहीं है!"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "감히…! 대가를 치르게 해주마.",
						"english": "How dare you…! I'll make you pay.",
						"japanese": "よくも…！代償を払わせてやる。",
						"chinese": "胆敢…！我会让你付出代价。",
						"french": "Comment oses-tu… ! Je te ferai payer.",
						"spanish": "¡Cómo te atreves…! Te haré pagar.",
						"vietnamese": "Dám…! Ta sẽ khiến ngươi phải trả giá.",
						"thai": "บังอาจ…! ข้าจะให้เจ้าชดใช้",
						"hindi": "हिम्मत कैसे हुई…! मैं तुम्हें इसकी कीमत चुकाने पर मजबूर करूंगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "핫팩 하나도 못 지키는 약골들. 돌아가라.",
						"english": "Weaklings. Can't even protect a hot pack. Begone!",
						"japanese": "カイロ一つ守れない腰抜けども。失せろ。",
						"chinese": "连个暖宝宝都护不住的弱者。回去吧。",
						"french": "Faiblards. Incapables de protéger un chauffe-main. Disparaissez.",
						"spanish": "Débiles. Ni un calentador podéis proteger. ¡Fuera!",
						"vietnamese": "Đồ yếu ớt, không giữ nổi một gói sưởi. Cút đi!",
						"thai": "พวกขี้แพ้ ปกป้องแค่ฮอตแพ็กยังไม่ได้เลย กลับไปซะ!",
						"hindi": "कमजोर! एक हॉटपैक भी नहीं बचा पाए। भाग जाओ।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아직 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ終わってない！",
						"chinese": "还没结束呢！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Aún no ha terminado!",
						"vietnamese": "Vẫn chưa kết thúc!",
						"thai": "ยังไม่จบ!",
						"hindi": "अभी ख़त्म नहीं हुआ है!"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…재미있군. 다시 오너라.",
						"english": "...Amusing. Come again.",
						"japanese": "…面白い。また来い。",
						"chinese": "…有意思。再来吧。",
						"french": "...Amusant. Revenez.",
						"spanish": "...Interesante. Volved.",
						"vietnamese": "...Thú vị. Hãy quay lại.",
						"thai": "...น่าสนใจ. กลับมาอีกนะ.",
						"hindi": "...दिलचस्प। फिर आना।"
					}
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"왕의 보물 창고. 녹슨 빗장이 열렸다.",
			"안에는 빈 깡통과 닳은 담요뿐. 명성만큼 빛나지 않았다.",
			"그러나 왕의 시선은… 다른 곳을 향했다.",
			"차가움 속, 프로스트는 온기의 가치를 헤아린다."
		],
		"english": [
			"The King's Treasury. A rusted bolt unlocked.",
			"Inside, only empty cans and a worn blanket. Not as splendid as its reputation.",
			"But the King's gaze... was directed elsewhere.",
			"Amidst the cold, Frost gauges the value of warmth."
		],
		"japanese": [
			"王の宝物庫。錆びた閂が開いた。",
			"中には空き缶と使い古された毛布だけ。評判ほど輝いてはいなかった。",
			"しかし王の視線は… 別の場所へ向けられていた。",
			"冷たさの中で、フロストは温もりの価値を測る。"
		],
		"chinese": [
			"国王的宝库。生锈的门闩打开了。",
			"里面只有空罐头和旧毯子。不如传闻中那般光彩。",
			"然而国王的目光… 投向了别处。",
			"寒冷之中，弗罗斯特衡量着温暖的价值。"
		],
		"french": [
			"Le trésor du Roi. Un verrou rouillé s'ouvrit.",
			"À l'intérieur, seulement des canettes vides et une couverture usée. Pas aussi splendide que sa réputation.",
			"Mais le regard du Roi… était tourné ailleurs.",
			"Au cœur du froid, Frost mesure la valeur de la chaleur."
		],
		"spanish": [
			"La Tesorería del Rey. Un cerrojo oxidado se abrió.",
			"Dentro, solo latas vacías y una manta gastada. No tan espléndido como su fama.",
			"Pero la mirada del Rey… se dirigía a otro lugar.",
			"En medio del frío, Frost mide el valor de la calidez."
		],
		"vietnamese": [
			"Kho báu của Vua. Chốt cửa gỉ sét đã mở.",
			"Bên trong chỉ có lon rỗng và chăn cũ mòn. Không rực rỡ như danh tiếng.",
			"Nhưng ánh mắt của Vua… lại hướng về nơi khác.",
			"Giữa cái lạnh, Frost đánh giá giá trị của sự ấm áp."
		],
		"thai": [
			"คลังสมบัติของราชา สลักเกลียวที่ขึ้นสนิมถูกเปิดออก",
			"ข้างในมีเพียงกระป๋องเปล่าและผ้าห่มเก่าซอมซ่อ ไม่เปล่งประกายสมชื่อเสียง",
			"แต่สายตาของราชา… กลับมองไปยังที่อื่น",
			"ท่ามกลางความหนาวเย็น ฟรอสต์ตระหนักถึงคุณค่าของความอบอุ่น"
		],
		"hindi": [
			"राजा का खजाना। एक जंग लगी कुंडी खुली।",
			"अंदर, केवल खाली डिब्बे और एक पुरानी कम्बल। अपनी प्रसिद्धि जितनी शानदार नहीं थी।",
			"लेकिन राजा की नज़र… कहीं और थी।",
			"ठंडक में, फ्रॉस्ट गर्मी के मूल्य का आकलन करता है।"
		]
	}
} as const;
