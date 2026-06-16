export const scenario_snowy_cairn_76_03 = {
	"scenario_id": "snowy_cairn_76_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
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
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "더 깊숙한 곳으로 들어갈수록, 돌들의 빛이 희미해졌다.",
						"english": "The deeper we delved, the fainter the stones' glow became.",
						"japanese": "奥深くに進むほど、石の輝きは薄れていった。",
						"chinese": "越往深处走，石头的光芒越是黯淡。",
						"french": "Plus nous nous enfoncions, plus l'éclat des pierres s'estompait.",
						"spanish": "Cuanto más nos adentrábamos, más tenue se volvía el brillo de las piedras.",
						"vietnamese": "Càng đi sâu vào, ánh sáng của những viên đá càng mờ đi.",
						"thai": "ยิ่งลึกเข้าไป แสงของหินก็ยิ่งจางลง",
						"hindi": "जितना गहरा हम गए, पत्थरों की चमक उतनी ही फीकी पड़ती गई।"
					},
					"type": "speech"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 돌들은… 시간이 갈수록 형체를 알아보기 어렵군.",
						"english": "These stones... their forms become harder to discern with time.",
						"japanese": "これらの石は…時が経つにつれて、形が分かりにくくなるな。",
						"chinese": "这些石头…随着时间的推移，其形状越来越难以辨认。",
						"french": "Ces pierres... leurs formes deviennent difficiles à distinguer avec le temps.",
						"spanish": "Estas piedras... sus formas se vuelven más difíciles de discernir con el tiempo.",
						"vietnamese": "Những viên đá này... hình dạng của chúng ngày càng khó nhận ra theo thời gian.",
						"thai": "หินเหล่านี้... รูปทรงของมันยากที่จะแยกแยะเมื่อเวลาผ่านไป",
						"hindi": "ये पत्थर... समय के साथ इनके आकार को पहचानना मुश्किल होता जा रहा है।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 뜻이야?",
						"english": "What do you mean?",
						"japanese": "どういう意味だ？",
						"chinese": "什么意思？",
						"french": "Que veux-tu dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Ý anh là sao?",
						"thai": "หมายความว่าอะไร?",
						"hindi": "आपका क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "가장 아래, 가장 오래된 돌일수록… 장면이 닳아 있어.",
						"english": "The lowest, oldest stones... their scenes are worn away.",
						"japanese": "一番下、最も古い石ほど…場面が擦り減っている。",
						"chinese": "越是最下面、最古老的石头…上面的场景越是磨损。",
						"french": "Les pierres les plus basses et les plus anciennes... leurs scènes sont usées.",
						"spanish": "Las piedras más bajas y antiguas... sus escenas están desgastadas.",
						"vietnamese": "Những viên đá dưới cùng, cổ xưa nhất... cảnh tượng trên đó đã bị mòn đi.",
						"thai": "หินที่อยู่ล่างสุด เก่าแก่ที่สุด... ฉากต่างๆ ก็สึกกร่อนไป",
						"hindi": "सबसे नीचे, सबसे पुराने पत्थर... उनके दृश्य घिस चुके हैं।"
					},
					"speaker": "eira",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "오래된 배신…?",
						"english": "Ancient betrayal...?",
						"japanese": "古い裏切り…？",
						"chinese": "古老的背叛…？",
						"french": "Ancienne trahison... ?",
						"spanish": "¿Antigua traición...?",
						"vietnamese": "Sự phản bội cổ xưa...?",
						"thai": "การทรยศหักหลังในอดีต...?",
						"hindi": "प्राचीन विश्वासघात...?"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "…수백 년 쌓인 등돌림의 역사지.",
						"english": "...A history of centuries of turning backs.",
						"japanese": "…数百年積み重なった背を向けた歴史だ。",
						"chinese": "…是数百年累积的背叛历史。",
						"french": "...Une histoire de siècles de volte-face.",
						"spanish": "...La historia de siglos de espaldas vueltas.",
						"vietnamese": "...Đó là lịch sử của hàng trăm năm quay lưng lại.",
						"thai": "...ประวัติศาสตร์ของการหันหลังให้กันที่สะสมมานานหลายศตวรรษ",
						"hindi": "...सदियों से जमा हुई पीठ फेरने की कहानी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"content": {
						"korean": "발걸음을 옮길수록, 돌무덤의 무게가 느껴졌다.",
						"english": "With each step, the stone tomb's weight grew.",
						"japanese": "足を踏み出すたび、石塚の重みが増した。",
						"chinese": "每迈一步，石冢的沉重感愈发强烈。",
						"french": "À chaque pas, le poids du cairn s'intensifiait.",
						"spanish": "Con cada paso, el peso del túmulo se hacía más pesado.",
						"vietnamese": "Mỗi bước chân, sức nặng của ngôi mộ đá càng đè nặng.",
						"thai": "ทุกย่างก้าว น้ำหนักของหลุมศพหินก็หนักอึ้งขึ้น",
						"hindi": "हर कदम पर, पत्थर के टीले का वज़न बढ़ता गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						3,
						3
					],
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 토대부터… 전부 등돌림으로 쌓였어.",
						"english": "This foundation... all built on turned backs.",
						"japanese": "この土台から…すべてが裏切りで築かれた。",
						"chinese": "从这基石起……皆由背叛堆砌而成。",
						"french": "Cette base... tout fut bâti sur des trahisons.",
						"spanish": "Esta base... todo se construyó con traición.",
						"vietnamese": "Từ nền móng này… tất cả đều chất chồng bởi sự quay lưng.",
						"thai": "รากฐานนี้… สร้างขึ้นจากความหันหลังให้กันทั้งสิ้น",
						"hindi": "इस नींव से… सब कुछ पीठ फेरने से बना।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "설마 이 모든 게 배신으로?",
						"english": "Could all this be from betrayal?",
						"japanese": "まさか、このすべてが裏切りでか？",
						"chinese": "难道这一切都是背叛所致？",
						"french": "Tout cela, par trahison ?",
						"spanish": "¿Todo esto, por traición?",
						"vietnamese": "Lẽ nào tất cả đều do phản bội?",
						"thai": "หรือว่าทั้งหมดนี้คือการทรยศ?",
						"hindi": "क्या यह सब विश्वासघात से?"
					},
					"type": "speech"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이기심이 쌓이고 쌓여… 이 거대한 무덤을 이룬 거지.",
						"english": "...selfishness piled up... forming this colossal tomb.",
						"japanese": "…エゴが積み重なり…この巨大な墓をなしたのだ。",
						"chinese": "……自私层层堆积……成就了这座巨型坟墓。",
						"french": "...l'égoïsme accumulé... a formé cette tombe colossale.",
						"spanish": "...el egoísmo se apiló y apiló... formando este túmulo gigante.",
						"vietnamese": "…sự ích kỷ chồng chất… tạo nên ngôi mộ khổng lồ này.",
						"thai": "…ความเห็นแก่ตัวที่สะสม… ก่อร่างเป็นหลุมศพมหึมานี้",
						"hindi": "...स्वार्थ जमा होता गया... और यह विशाल कब्र बन गई।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"content": {
						"korean": "닳아버린 형상 속에서, 숨겨진 진실이 드러났다.",
						"english": "In the worn form, a hidden truth emerged.",
						"japanese": "朽ちた姿の中に、隠された真実が露わになった。",
						"chinese": "在磨损的形体中，隐藏的真相浮现。",
						"french": "Dans cette forme usée, une vérité cachée se révéla.",
						"spanish": "En la forma desgastada, una verdad oculta fue revelada.",
						"vietnamese": "Trong hình hài mòn mỏi, sự thật bị che giấu đã lộ diện.",
						"thai": "ในรูปทรงที่สึกหรอ ความจริงที่ซ่อนอยู่ก็ปรากฏขึ้น",
						"hindi": "घिसी-पिटी आकृति में, छिपा सच सामने आया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "단순한 배신이 아니야. 스스로를 위한 이기심.",
						"english": "Not mere betrayal. Selfishness for oneself.",
						"japanese": "単なる裏切りではない。己のためのエゴだ。",
						"chinese": "并非单纯的背叛。是为了自己的自私。",
						"french": "Pas simple trahison. Égoïsme pur.",
						"spanish": "No es simple traición. Es egoísmo por uno mismo.",
						"vietnamese": "Không phải chỉ là sự phản bội. Mà là sự ích kỷ vì bản thân.",
						"thai": "ไม่ใช่แค่การทรยศธรรมดา แต่เป็นความเห็นแก่ตัวเพื่อตนเอง",
						"hindi": "सिर्फ विश्वासघात नहीं। अपने लिए स्वार्थ।"
					},
					"speaker": "eira",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리 안에도… 저런 이기심이 있을까.",
						"english": "Do we too harbor such selfishness?",
						"japanese": "私たちの中にも…あのようなエゴがあるのだろうか。",
						"chinese": "我们内心深处……也会有那样的自私吗？",
						"french": "En nous aussi... un tel égoïsme ?",
						"spanish": "Dentro de nosotros también... ¿habrá tal egoísmo?",
						"vietnamese": "Trong chúng ta… liệu có sự ích kỷ như vậy không?",
						"thai": "ในตัวเรา… มีความเห็นแก่ตัวแบบนั้นด้วยหรือเปล่า?",
						"hindi": "क्या हमारे अंदर भी... ऐसी स्वार्थपरता है?"
					},
					"speaker": "character_any",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "누구든… 약해지는 순간은 오는 법이지.",
						"english": "Everyone has their moment of weakness.",
						"japanese": "誰にでも…弱くなる瞬間は訪れるものだ。",
						"chinese": "任何人……都会有脆弱的时刻。",
						"french": "Chacun a son moment de faiblesse.",
						"spanish": "Cualquiera... tiene su momento de debilidad.",
						"vietnamese": "Ai rồi cũng… sẽ có lúc yếu lòng.",
						"thai": "ใครก็ตาม… ย่อมมีช่วงเวลาที่อ่อนแอ",
						"hindi": "हर किसी पर... कमज़ोर पड़ने का पल आता ही है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "돌무덤의 깊이만큼, 침묵도 깊어졌다.",
						"english": "As deep as the stone tomb, so the silence deepened.",
						"japanese": "石塚の深さと同じく、沈黙も深まった。",
						"chinese": "石冢有多深，寂静就有多沉。",
						"french": "Aussi profond que le cairn, le silence s'épaissit.",
						"spanish": "Tan profundo como el túmulo de piedras, el silencio se ahondó.",
						"vietnamese": "Càng sâu ngôi mộ đá, sự im lặng càng thêm nặng nề.",
						"thai": "เท่าที่หลุมศพหินลึก ความเงียบก็ยิ่งลึกซึ้ง",
						"hindi": "पत्थर के टीले की गहराई जितनी, उतनी ही खामोशी भी गहरी।"
					},
					"type": "speech"
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 모든 등돌림이… 결국 하나의 거대한 심판자를 만들었어.",
						"english": "All these betrayals... ultimately forged a colossal judge.",
						"japanese": "これらすべての裏切りが…結局、一つの巨大な審判者を生んだのだ。",
						"chinese": "所有这些背叛……最终铸就了一个巨大的审判者。",
						"french": "Toutes ces trahisons... ont finalement créé un juge colossal.",
						"spanish": "Todos estos actos de dar la espalda... finalmente forjaron un juez colosal.",
						"vietnamese": "Tất cả sự quay lưng này… cuối cùng đã tạo ra một phán quan khổng lồ.",
						"thai": "การหันหลังให้กันทั้งหมดนี้… ในที่สุดก็สร้างผู้พิพากษาอันยิ่งใหญ่ขึ้นมา",
						"hindi": "ये सारी पीठ फेरना... अंततः एक विशाल निर्णायक बन गया।"
					}
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "심판자라니… 누구를?",
						"english": "A judge… Of whom?",
						"japanese": "審判者だと… 誰を？",
						"chinese": "审判者… 审判谁？",
						"french": "Un juge… De qui ?",
						"spanish": "¿Un juez… De quién?",
						"vietnamese": "Kẻ phán xử… Phán xử ai?",
						"thai": "ผู้พิพากษา… พิพากษาใคร?",
						"hindi": "एक न्यायाधीश… किसका?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "스스로의 그림자를 외면한 자들을.",
						"english": "Those who ignored their own shadows.",
						"japanese": "己の影から目を背けた者たちを。",
						"chinese": "那些无视自己阴影的人。",
						"french": "Ceux qui ont ignoré leurs propres ombres.",
						"spanish": "A aquellos que ignoraron sus propias sombras.",
						"vietnamese": "Những kẻ đã ngoảnh mặt làm ngơ trước bóng tối của chính mình.",
						"thai": "ผู้ที่หันหลังให้กับเงามืดของตนเอง",
						"hindi": "वे, जिन्होंने अपनी ही छाया को नज़रअंदाज़ किया।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "거대한 형체가 무너지고, 돌무덤의 침묵이 깨졌다.",
						"english": "The massive form crumbled, and the silence of the stone tomb was broken.",
						"japanese": "巨大な姿が崩れ落ち、石塚の沈黙が破られた。",
						"chinese": "巨大的形体崩塌，石冢的寂静被打破。",
						"french": "La forme gigantesque s'effondra, et le silence de la tombe de pierre fut brisé.",
						"spanish": "La forma gigantesca se derrumbó y el silencio del túmulo se rompió.",
						"vietnamese": "Hình thể khổng lồ sụp đổ, sự im lặng của mộ đá bị phá vỡ.",
						"thai": "ร่างมหึมาพังทลายลง และความเงียบสงัดของหลุมศพหินก็แตกสลาย",
						"hindi": "विशालकाय आकृति ढह गई, और पत्थर की कब्र की शांति भंग हो गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이것이 끝이라 생각하나? 너희 안의 이기심은… 사라지지 않아.",
						"english": "…Do you think this is the end? The selfishness within you… will not disappear.",
						"japanese": "…これが終わりだと思うか？お前たちの中の利己心は… 消え去りはしない。",
						"chinese": "…你以为这是结束吗？你们内心的自私… 不会消失。",
						"french": "…Pensez-vous que c'est la fin ? L'égoïsme en vous… ne disparaîtra pas.",
						"spanish": "¿…Creéis que esto es el fin? El egoísmo dentro de vosotros… no desaparecerá.",
						"vietnamese": "…Các ngươi nghĩ đây là kết thúc sao? Lòng ích kỷ trong các ngươi… sẽ không biến mất đâu.",
						"thai": "…เจ้าคิดว่านี่คือจุดจบหรือ? ความเห็นแก่ตัวภายในตัวเจ้า… จะไม่มีวันหายไป",
						"hindi": "…क्या तुम्हें लगता है कि यह अंत है? तुम्हारे भीतर का स्वार्थ… गायब नहीं होगा।"
					}
				},
				{
					"content": {
						"korean": "…아직 끝나지 않았어. 우리의 싸움은 계속될 거야.",
						"english": "…It's not over yet. Our fight will continue.",
						"japanese": "…まだ終わっていない。我々の戦いは続く。",
						"chinese": "…还没结束。我们的战斗将继续。",
						"french": "…Ce n'est pas encore fini. Notre combat continuera.",
						"spanish": "…Aún no ha terminado. Nuestra lucha continuará.",
						"vietnamese": "…Vẫn chưa kết thúc. Cuộc chiến của chúng ta sẽ tiếp diễn.",
						"thai": "…ยังไม่จบ การต่อสู้ของเราจะดำเนินต่อไป",
						"hindi": "…अभी खत्म नहीं हुआ है। हमारी लड़ाई जारी रहेगी।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						3,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "오랜 역사의 짐이… 조금은 가벼워졌군.",
						"english": "The burden of a long history... has lightened a bit.",
						"japanese": "長い歴史の重荷が… 少しは軽くなったな。",
						"chinese": "漫长历史的重担… 稍微轻了一些。",
						"french": "Le fardeau d'une longue histoire... s'est un peu allégé.",
						"spanish": "La carga de una larga historia... se ha aligerado un poco.",
						"vietnamese": "Gánh nặng của lịch sử lâu đời… đã nhẹ đi một chút rồi.",
						"thai": "ภาระของประวัติศาสตร์อันยาวนาน... เบาลงบ้างแล้ว.",
						"hindi": "लंबे इतिहास का बोझ... थोड़ा हल्का हो गया है।"
					},
					"speaker": "eira",
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "돌무덤은 여전히 그 자리에 있었다. 그러나 이제 그 장면은, 더 이상 고통스럽지만은 않았다.",
						"english": "The stone tomb was still there. But now, the sight was no longer painful.",
						"japanese": "石塚はまだそこにあった。しかし今、その光景は、もはや苦痛ではなかった。",
						"chinese": "石冢依然在那里。但现在，那个场景不再痛苦。",
						"french": "Le tombeau de pierre était toujours là. Mais maintenant, cette scène n'était plus douloureuse.",
						"spanish": "La tumba de piedra seguía allí. Pero ahora, esa escena ya no era dolorosa.",
						"vietnamese": "Lăng mộ đá vẫn ở đó. Nhưng giờ đây, cảnh tượng ấy không còn đau đớn nữa.",
						"thai": "สุสานหินยังคงอยู่ที่เดิม แต่บัดนี้ภาพนั้นไม่เจ็บปวดอีกต่อไปแล้ว",
						"hindi": "पत्थरों का मकबरा अभी भी वहीं था। पर अब वह दृश्य, अब और दर्दनाक नहीं था।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "돌무덤의 심판자는… 모든 것을 삼켰다.",
						"english": "The judge of the stone tomb... swallowed everything.",
						"japanese": "石塚の審判者は… すべてを飲み込んだ。",
						"chinese": "石冢的审判者… 吞噬了一切。",
						"french": "Le juge de la tombe de pierre... a tout englouti.",
						"spanish": "El juez de la tumba de piedra... lo devoró todo.",
						"vietnamese": "Kẻ phán xét của lăng mộ đá… đã nuốt chửng tất cả.",
						"thai": "ผู้พิพากษาแห่งสุสานหิน... กลืนกินทุกสิ่งแล้ว.",
						"hindi": "पत्थरों के मकबरे के न्यायधीश ने… सब कुछ निगल लिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "네 안의 어둠은… 결코 사라지지 않는다.",
						"english": "The darkness within you... will never disappear.",
						"japanese": "お前の中の闇は… 決して消えることはない。",
						"chinese": "你内心的黑暗… 永远不会消失。",
						"french": "L'obscurité en toi... ne disparaîtra jamais.",
						"spanish": "La oscuridad dentro de ti... nunca desaparecerá.",
						"vietnamese": "Bóng tối trong ngươi… sẽ không bao giờ biến mất.",
						"thai": "ความมืดมิดในตัวเจ้า... จะไม่มีวันหายไป.",
						"hindi": "तुम्हारे भीतर का अँधेरा… कभी नहीं मिटेगा।"
					},
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아직… 포기할 수 없어.",
						"english": "...Still... I can't give up.",
						"japanese": "…まだ… 諦めるわけにはいかない。",
						"chinese": "……还……不能放弃。",
						"french": "...Je ne peux pas encore... abandonner.",
						"spanish": "...Aún... no puedo rendirme.",
						"vietnamese": "…Vẫn… không thể bỏ cuộc.",
						"thai": "...ยัง...ยอมแพ้ไม่ได้.",
						"hindi": "...अभी तक... हार नहीं मान सकता।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						3
					]
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌의 역사는… 쉽게 끝나지 않는 법이지.",
						"english": "The history of stone... doesn't end so easily.",
						"japanese": "石の歴史は… そう簡単には終わらないものだ。",
						"chinese": "石头的历史… 不会轻易结束。",
						"french": "L'histoire de la pierre... ne se termine pas si facilement.",
						"spanish": "La historia de la piedra... no termina tan fácilmente.",
						"vietnamese": "Lịch sử của đá… đâu dễ kết thúc như vậy.",
						"thai": "ประวัติศาสตร์ของหิน... ไม่ได้จบลงง่ายๆ หรอกนะ.",
						"hindi": "पत्थरों का इतिहास… इतनी आसानी से खत्म नहीं होता।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "돌무덤의 가장 깊은 곳. 모든 배신의 역사가 응축된 공간이었다.",
						"english": "The deepest part of the stone tomb. A space where all history of betrayal was condensed.",
						"japanese": "石塚の最も深い場所。全ての裏切りの歴史が凝縮された空間だった。",
						"chinese": "石冢的最深处。一个凝聚了所有背叛历史的空间。",
						"french": "Le plus profond de la tombe de pierre. Un espace où toute l'histoire de la trahison était condensée.",
						"spanish": "El lugar más profundo del túmulo. Un espacio donde se condensaba toda la historia de la traición.",
						"vietnamese": "Nơi sâu thẳm nhất của mộ đá. Một không gian nơi mọi lịch sử phản bội được ngưng đọng.",
						"thai": "ส่วนที่ลึกที่สุดของหลุมศพหิน สถานที่ที่ประวัติศาสตร์การทรยศทั้งหมดถูกบีบอัด",
						"hindi": "पत्थर की कब्र का सबसे गहरा हिस्सा। एक ऐसी जगह जहाँ विश्वासघात का पूरा इतिहास सिमटा हुआ था।"
					}
				},
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "드디어… 심판자가 나타났군.",
						"english": "Finally… the Judge has appeared.",
						"japanese": "ついに… 審判者が現れたか。",
						"chinese": "终于… 审判者出现了。",
						"french": "Enfin… le Juge est apparu.",
						"spanish": "Por fin… el Juez ha aparecido.",
						"vietnamese": "Cuối cùng… kẻ phán xử đã xuất hiện.",
						"thai": "ในที่สุด… ผู้พิพากษาก็ปรากฏตัว",
						"hindi": "अंततः… न्यायाधीश प्रकट हो गया।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 자들… 이곳에 감히 발을 들이다니.",
						"english": "Insignificant beings… How dare you set foot here.",
						"japanese": "取るに足らない者たちめ… よくもこの場所に足を踏み入れたな。",
						"chinese": "卑微的家伙们… 竟敢踏足此处。",
						"french": "Créatures insignifiantes… Comment osez-vous fouler ce lieu.",
						"spanish": "Criaturas insignificantes… ¿Cómo osáis poner un pie aquí?",
						"vietnamese": "Lũ hèn mọn… Dám đặt chân đến đây sao.",
						"thai": "พวกไร้ค่า… กล้าดียังไงมาเหยียบที่นี่",
						"hindi": "तुच्छ प्राणी… यहाँ पैर रखने की तुम्हारी हिम्मत कैसे हुई।"
					},
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 이 모든 배신의 결과물인가?",
						"english": "Are you the culmination of all this betrayal?",
						"japanese": "お前がこの全ての裏切りの結果物なのか？",
						"chinese": "你就是这一切背叛的产物吗？",
						"french": "Es-tu le résultat de toute cette trahison ?",
						"spanish": "¿Eres el resultado de toda esta traición?",
						"vietnamese": "Ngươi là kết quả của tất cả những phản bội này sao?",
						"thai": "เจ้าคือผลลัพธ์ของการทรยศทั้งหมดนี้หรือ?",
						"hindi": "क्या तुम इस सारे विश्वासघात का परिणाम हो?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "나는 너희 안의 그림자. 외면했던 욕망의 거울이다.",
						"english": "I am the shadow within you. A mirror of the desires you ignored.",
						"japanese": "私はお前たちの中の影。目を背けていた欲望の鏡だ。",
						"chinese": "我是你们内在的阴影。是你们曾否认的欲望之镜。",
						"french": "Je suis l'ombre en vous. Le miroir des désirs que vous avez ignorés.",
						"spanish": "Soy la sombra dentro de vosotros. El espejo de los deseos que ignorasteis.",
						"vietnamese": "Ta là bóng tối bên trong các ngươi. Tấm gương phản chiếu những dục vọng mà các ngươi đã chối bỏ.",
						"thai": "ข้าคือเงามืดในตัวพวกเจ้า กระจกสะท้อนความปรารถนาที่พวกเจ้ามองข้าม",
						"hindi": "मैं तुम्हारे भीतर की छाया हूँ। उन इच्छाओं का दर्पण, जिन्हें तुमने नज़रअंदाज़ किया।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"이 돌무덤의 심연은 끝이 없었다.",
			"에이라는 가장 오래된 돌 조각을 응시했다.",
			"거기에는 모든 배신의 시작, 잊힌 역사가 새겨져 있었다.",
			"수백 년 전부터… 이 모든 것은 등돌림으로 쌓였다."
		],
		"english": [
			"The abyss of this stone tomb was endless.",
			"Aira gazed at the oldest stone fragment.",
			"It bore the genesis of all betrayals, a forgotten history.",
			"For centuries... all of this accumulated through turning backs."
		],
		"japanese": [
			"この石の墓の深淵は終わりがなかった。",
			"アイラは最も古い石の破片を凝視した。",
			"そこにはすべての裏切りの始まり、忘れられた歴史が刻まれていた。",
			"数百年もの間…これらすべては背を向けることで積み重なった。"
		],
		"chinese": [
			"这石墓的深渊无边无际。",
			"艾拉凝视着最古老的石片。",
			"那里刻着所有背叛的开端，一段被遗忘的历史。",
			"数百年前开始…这一切都因背叛而累积。"
		],
		"french": [
			"L'abîme de ce tombeau de pierre était sans fin.",
			"Aira fixa le plus ancien fragment de pierre.",
			"Elle portait la genèse de toutes les trahisons, une histoire oubliée.",
			"Depuis des siècles... tout cela s'est accumulé par des volte-face."
		],
		"spanish": [
			"El abismo de esta tumba de piedra no tenía fin.",
			"Aira contempló el fragmento de piedra más antiguo.",
			"En él estaba grabado el inicio de todas las traiciones, una historia olvidada.",
			"Durante siglos... todo esto se acumuló con la espalda vuelta."
		],
		"vietnamese": [
			"Vực sâu của ngôi mộ đá này là vô tận.",
			"Aira nhìn chằm chằm vào mảnh đá cổ xưa nhất.",
			"Nơi đó khắc ghi khởi nguồn của mọi sự phản bội, một lịch sử bị lãng quên.",
			"Từ hàng trăm năm trước... tất cả điều này đều tích tụ từ những sự quay lưng."
		],
		"thai": [
			"ห้วงลึกของสุสานหินนี้ไร้ที่สิ้นสุด",
			"ไอราจ้องมองเศษหินที่เก่าแก่ที่สุด",
			"มันบันทึกจุดเริ่มต้นของการทรยศทั้งหมด ประวัติศาสตร์ที่ถูกลืมเลือน",
			"นานหลายศตวรรษ... ทั้งหมดนี้สะสมมาจากการหันหลังให้กัน"
		],
		"hindi": [
			"इस पत्थर की कब्र का अथाह गड्ढा अनंत था।",
			"ऐरा ने सबसे पुराने पत्थर के टुकड़े को देखा।",
			"इसमें सभी विश्वासघातों की शुरुआत, एक भूला हुआ इतिहास खुदा हुआ था।",
			"सदियों से... यह सब पीठ फेरने से जमा हुआ।"
		]
	}
} as const;
