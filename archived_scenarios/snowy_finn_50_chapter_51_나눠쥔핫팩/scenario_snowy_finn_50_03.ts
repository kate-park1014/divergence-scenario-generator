export const scenario_snowy_finn_50_03 = {
	"scenario_id": "snowy_finn_50_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"inka": {
			"id": "mon_583e945a-1e2f-428b-a251-b428f25b4052",
			"name": {
				"korean": "인카",
				"english": "Inka",
				"japanese": "インカ",
				"chinese": "因卡",
				"french": "Inka",
				"spanish": "Inka",
				"vietnamese": "Inka",
				"thai": "อินคา",
				"hindi": "इंंका"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/97f4545b-2e8a-4688-3e4e-b34bb246dd00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f27763ba-2358-4fd3-c813-0f0b59dcac00/public"
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
		},
		"frost": {
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
						"korean": "거센 눈보라가 길을 막았다. 더 이상 갈 수 없었다.",
						"english": "A fierce blizzard blocked the path. We could go no further.",
						"japanese": "猛吹雪が道を塞いだ。これ以上は進めなかった。",
						"chinese": "猛烈的暴风雪挡住了去路。我们无法再前进了。",
						"french": "Un violent blizzard bloqua le chemin. Nous ne pouvions plus avancer.",
						"spanish": "Una fuerte ventisca bloqueó el camino. No pudimos ir más lejos.",
						"vietnamese": "Bão tuyết dữ dội chặn đường. Không thể đi xa hơn được nữa.",
						"thai": "พายุหิมะรุนแรงขวางทาง เราไปต่อไม่ได้แล้ว",
						"hindi": "भीषण बर्फीले तूफान ने रास्ता रोक दिया। हम आगे नहीं जा सके।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "작은 얼음 처마 아래, 세 명의 그림자가 웅크렸다.",
						"english": "Under a small ice eaves, three shadows huddled.",
						"japanese": "小さな氷の軒下で、三つの影が身をかがめた。",
						"chinese": "在小冰檐下，三个身影蜷缩着。",
						"french": "Sous un petit surplomb de glace, trois ombres se recroquevillèrent.",
						"spanish": "Bajo un pequeño saliente de hielo, tres sombras se acurrucaron.",
						"vietnamese": "Dưới mái hiên băng nhỏ, ba bóng người co ro.",
						"thai": "ใต้ชายคาที่ปกคลุมด้วยน้ำแข็งเล็กๆ สามเงาซุกตัวอยู่",
						"hindi": "एक छोटे से बर्फीले टीले के नीचे, तीन परछाइयाँ दुबक गईं।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "너무 추워…",
						"english": "It's so cold…",
						"japanese": "寒すぎる…",
						"chinese": "太冷了…",
						"french": "Il fait si froid…",
						"spanish": "Hace mucho frío…",
						"vietnamese": "Lạnh quá…",
						"thai": "หนาวมากเลย…",
						"hindi": "बहुत ठंड है..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "핫팩은 이거 하나뿐이잖아.",
						"english": "There's only one hot pack.",
						"japanese": "カイロはこれ一つしかないじゃないか。",
						"chinese": "暖宝宝只有这一个。",
						"french": "Il n'y a qu'une seule chaufferette.",
						"spanish": "Solo hay un parche térmico.",
						"vietnamese": "Chỉ có mỗi một túi sưởi này thôi.",
						"thai": "ฮอทแพ็คมีแค่อันเดียวเอง",
						"hindi": "सिर्फ एक ही हॉट पैक है।"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…이걸로 버텨야지.",
						"english": "...We have to make do with this.",
						"japanese": "…これで耐えるしかない。",
						"chinese": "…只能靠这个撑下去了。",
						"french": "...Il faut faire avec ça.",
						"spanish": "...Tendremos que aguantar con esto.",
						"vietnamese": "...Phải chịu đựng bằng cái này thôi.",
						"thai": "…ต้องทนด้วยอันนี้แหละ",
						"hindi": "...हमें इसी से काम चलाना होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "eira",
					"emotion": "base",
					"content": {
						"korean": "(핫팩 불빛에 종이를 비추며) 지금까지의 단서.",
						"english": "(Illuminating the paper with the hot pack's light) Clues so far.",
						"japanese": "(カイロの明かりで紙を照らしながら) これまでの手がかり。",
						"chinese": "(用暖宝宝的光照亮纸张) 至今为止的线索。",
						"french": "(Éclairant le papier à la lumière de la chaufferette) Les indices jusqu'à présent.",
						"spanish": "(Iluminando el papel con la luz del parche térmico) Las pistas hasta ahora.",
						"vietnamese": "(Chiếu giấy bằng ánh sáng của túi sưởi) Những manh mối cho đến giờ.",
						"thai": "(ส่องกระดาษด้วยแสงจากฮอทแพ็ค) เบาะแสที่ผ่านมา",
						"hindi": "(हॉट पैक की रोशनी से कागज़ को रोशन करते हुए) अब तक के सुराग।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐라도 찾았어?",
						"english": "Found anything?",
						"japanese": "何か見つかった？",
						"chinese": "找到什么了吗？",
						"french": "Tu as trouvé quelque chose ?",
						"spanish": "¿Encontraste algo?",
						"vietnamese": "Tìm thấy gì chưa?",
						"thai": "เจออะไรบ้างไหม?",
						"hindi": "कुछ मिला?"
					}
				},
				{
					"content": {
						"korean": "아직은. 근데… 이 왕에겐 이름이 필요하다.",
						"english": "Not yet. But... this king needs a name.",
						"japanese": "まだ。でも…この王には名前が必要だ。",
						"chinese": "还没有。不过……这位国王需要一个名字。",
						"french": "Pas encore. Mais... ce roi a besoin d'un nom.",
						"spanish": "Todavía no. Pero... este rey necesita un nombre.",
						"vietnamese": "Chưa. Nhưng... vị vua này cần một cái tên.",
						"thai": "ยังเลย. แต่... กษัตริย์องค์นี้ต้องการชื่อ",
						"hindi": "अभी नहीं। पर... इस राजा को एक नाम चाहिए।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "frost",
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"speaker": "frost",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…나도 추위가 무섭거든.",
						"english": "...I'm scared of the cold too.",
						"japanese": "…私も寒さが怖いんだ。",
						"chinese": "……我也怕冷。",
						"french": "...Moi aussi, j'ai peur du froid.",
						"spanish": "...A mí también me asusta el frío.",
						"vietnamese": "...Tôi cũng sợ lạnh.",
						"thai": "...ฉันก็กลัวความหนาวเหมือนกัน.",
						"hindi": "...मुझे भी ठंड से डर लगता है।"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "뭐해?",
						"english": "What are you doing?",
						"japanese": "何してる？",
						"chinese": "你在干什么？",
						"french": "Qu'est-ce que tu fais ?",
						"spanish": "¿Qué haces?",
						"vietnamese": "Đang làm gì vậy?",
						"thai": "ทำอะไรอยู่?",
						"hindi": "क्या कर रहे हो?"
					}
				},
				{
					"content": {
						"korean": "그 왕도 그렇겠지.",
						"english": "The king must be too.",
						"japanese": "あの王様もそうだろうね。",
						"chinese": "那个国王大概也一样吧。",
						"french": "Le roi aussi, sans doute.",
						"spanish": "El rey también, supongo.",
						"vietnamese": "Vị vua đó chắc cũng vậy.",
						"thai": "กษัตริย์องค์นั้นก็คงจะเหมือนกัน.",
						"hindi": "वह राजा भी वैसा ही होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "frost"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왕이 추위를 무서워한다고?",
						"english": "The king is scared of the cold?",
						"japanese": "王様が寒さを怖がるって？",
						"chinese": "国王会怕冷？",
						"french": "Le roi a peur du froid ?",
						"spanish": "¿El rey le tiene miedo al frío?",
						"vietnamese": "Vua sợ lạnh sao?",
						"thai": "กษัตริย์กลัวความหนาว?",
						"hindi": "राजा को ठंड से डर लगता है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "뭐든… 혼자 있으면 외로워.",
						"english": "Everything... is lonely when alone.",
						"japanese": "何だって…一人だと寂しいものだよ。",
						"chinese": "任何事物……独自一人都会感到寂寞。",
						"french": "Tout... est solitaire quand c'est seul.",
						"spanish": "Todo... se siente solo cuando está sin compañía.",
						"vietnamese": "Dù là gì... một mình cũng cô đơn.",
						"thai": "ไม่ว่าอะไร... ถ้าอยู่คนเดียวก็เหงา.",
						"hindi": "कुछ भी हो... अकेलापन सताता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "frost"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핫팩… 다들 좀 따뜻해졌어요?",
						"english": "Heat packs... Is everyone a little warmer now?",
						"japanese": "カイロ…みんな少しは温かくなった？",
						"chinese": "暖宝宝……大家暖和一点了吗？",
						"french": "Sachets chauffants... Tout le monde est un peu plus au chaud maintenant ?",
						"spanish": "Calentadores... ¿Todos están un poco más calientes ahora?",
						"vietnamese": "Túi sưởi... Mọi người đã ấm hơn chút nào chưa?",
						"thai": "แผ่นร้อน... ทุกคนอุ่นขึ้นบ้างไหม?",
						"hindi": "हीट पैक... सब थोड़े गरम हो गए?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "조금은.",
						"english": "A little.",
						"japanese": "少しは。",
						"chinese": "一点点。",
						"french": "Un peu.",
						"spanish": "Un poco.",
						"vietnamese": "Một chút.",
						"thai": "นิดหน่อย.",
						"hindi": "थोड़ा सा।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "그 왕… 무섭다기보다… 외로워 보였어요.",
						"english": "That king... looked more lonely than scary.",
						"japanese": "あの王様…怖いというより…寂しそうに見えました。",
						"chinese": "那个国王……与其说可怕……不如说看起来很寂寞。",
						"french": "Ce roi... avait l'air plus solitaire qu'effrayant.",
						"spanish": "Ese rey... parecía más solitario que aterrador.",
						"vietnamese": "Vị vua đó... trông cô đơn hơn là đáng sợ.",
						"thai": "กษัตริย์องค์นั้น... ดูเหมือนจะเหงามากกว่าน่ากลัว.",
						"hindi": "वह राजा... डरावना नहीं, बल्कि अकेला लग रहा था।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"content": {
						"korean": "외로워 보여?",
						"english": "Look lonely?",
						"japanese": "寂しそうに見える？",
						"chinese": "看起来很寂寞吗？",
						"french": "Vous avez l'air seul ?",
						"spanish": "¿Parece solitario?",
						"vietnamese": "Trông cô đơn à?",
						"thai": "ดูเหงาเหรอ?",
						"hindi": "क्या अकेला लग रहा है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "네. 아주 높은 곳에서… 혼자 싸우는 것 같았어요.",
						"english": "Yes. Like fighting alone... from a very high place.",
						"japanese": "はい。まるでとても高い場所で…一人で戦っているようでした。",
						"chinese": "是的。好像在很高的地方…独自战斗。",
						"french": "Oui. Comme si vous vous battiez seul… d'un endroit très élevé.",
						"spanish": "Sí. Como luchando solo… desde un lugar muy alto.",
						"vietnamese": "Vâng. Như đang chiến đấu một mình… từ một nơi rất cao.",
						"thai": "ใช่ค่ะ เหมือนกำลังต่อสู้คนเดียว...จากที่สูงมาก",
						"hindi": "हाँ। जैसे बहुत ऊँची जगह से… अकेले लड़ रहा था।"
					},
					"type": "speech",
					"speaker": "inka"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…우린 그 왕을 쫓는데.",
						"english": "…But we're chasing that king.",
						"japanese": "…私たちはその王を追っているのに。",
						"chinese": "…我们正在追捕那个王。",
						"french": "…Pourtant, nous poursuivons ce roi.",
						"spanish": "…Pero nosotros perseguimos a ese rey.",
						"vietnamese": "…Chúng ta đang đuổi theo vị vua đó.",
						"thai": "...แต่เรากำลังไล่ตามกษัตริย์องค์นั้น",
						"hindi": "…हम तो उस राजा का पीछा कर रहे हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "inka",
					"emotion": "base",
					"content": {
						"korean": "그래도… 누군가 손을 내밀어 줄 수는 있잖아요.",
						"english": "Even so… someone can still reach out a hand.",
						"japanese": "それでも…誰かが手を差し伸べることはできるでしょう？",
						"chinese": "即使如此…总有人可以伸出援手吧。",
						"french": "Pourtant… quelqu'un peut toujours tendre la main.",
						"spanish": "Aun así… alguien puede tenderle la mano.",
						"vietnamese": "Dù vậy… vẫn có người có thể chìa tay ra mà.",
						"thai": "ถึงอย่างนั้น...ก็มีใครสักคนยื่นมือให้ได้นี่นา",
						"hindi": "फिर भी… कोई तो हाथ बढ़ा सकता है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"spot": [
						2,
						2
					]
				},
				{
					"content": {
						"korean": "우스꽝스러워도, 누군가의 이야기는 기억되어야죠.",
						"english": "Even if it's ridiculous, someone's story should be remembered.",
						"japanese": "馬鹿げていても、誰かの物語は記憶されるべきでしょう。",
						"chinese": "即使可笑，某个人的故事也应该被记住。",
						"french": "Même si c'est ridicule, l'histoire de quelqu'un devrait être retenue.",
						"spanish": "Aunque sea ridículo, la historia de alguien debe ser recordada.",
						"vietnamese": "Dù có lố bịch, câu chuyện của ai đó vẫn nên được ghi nhớ.",
						"thai": "แม้จะตลก แต่เรื่องราวของใครบางคนก็ควรถูกจดจำ",
						"hindi": "भले ही हास्यास्पद हो, किसी की कहानी याद रखी जानी चाहिए।"
					},
					"emotion": "base",
					"speaker": "eira",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "왜 그렇게까지?",
						"english": "Why go that far?",
						"japanese": "なぜそこまで？",
						"chinese": "为什么到这种地步？",
						"french": "Pourquoi aller si loin ?",
						"spanish": "¿Por qué tanto?",
						"vietnamese": "Tại sao lại đến mức đó?",
						"thai": "ทำไมถึงขนาดนั้น?",
						"hindi": "इतना क्यों?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이 왕에겐… 제대로 된 이름이 필요해요.",
						"english": "This king… needs a proper name.",
						"japanese": "この王には…ちゃんとした名前が必要です。",
						"chinese": "这位王…需要一个真正的名字。",
						"french": "Ce roi… a besoin d'un nom approprié.",
						"spanish": "Este rey… necesita un nombre apropiado.",
						"vietnamese": "Vị vua này… cần một cái tên đúng nghĩa.",
						"thai": "กษัตริย์องค์นี้...ต้องการชื่อที่เหมาะสม",
						"hindi": "इस राजा को… एक उचित नाम चाहिए।"
					}
				},
				{
					"content": {
						"korean": "…이름?",
						"english": "…A name?",
						"japanese": "…名前？",
						"chinese": "…名字？",
						"french": "…Un nom ?",
						"spanish": "¿…Un nombre?",
						"vietnamese": "…Tên?",
						"thai": "...ชื่อเหรอ?",
						"hindi": "…नाम?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그래요. 이야기는 이름을 가질 때 시작되죠.",
						"english": "That's right. A story begins when it has a name.",
						"japanese": "そうです。物語は名前を持つ時に始まるんです。",
						"chinese": "是的。故事在拥有名字时才开始。",
						"french": "C'est ça. Une histoire commence quand elle a un nom.",
						"spanish": "Exacto. Una historia comienza cuando tiene un nombre.",
						"vietnamese": "Đúng vậy. Câu chuyện bắt đầu khi nó có một cái tên.",
						"thai": "ใช่แล้ว เรื่องราวจะเริ่มต้นเมื่อมันมีชื่อ",
						"hindi": "हाँ। कहानी तब शुरू होती है जब उसका एक नाम होता है।"
					},
					"speaker": "eira",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "그때, 처마 밖에서 코끝 하나가 빼꼼 내밀었다가 황급히 사라졌다.",
						"english": "Just then, a nose peeked out from under the eaves, then quickly disappeared.",
						"japanese": "その時、軒先から鼻先がひょっこり現れたかと思うと、慌てて引っ込んだ。",
						"chinese": "那时，一个鼻尖从屋檐下探了出来，又匆忙消失了。",
						"french": "À ce moment-là, un petit nez a furtivement dépassé de sous l'avant-toit avant de disparaître à la hâte.",
						"spanish": "En ese momento, una nariz asomó por debajo del alero y luego desapareció rápidamente.",
						"vietnamese": "Lúc đó, một chóp mũi ló ra từ dưới mái hiên rồi vội vàng biến mất.",
						"thai": "ตอนนั้น ปลายจมูกหนึ่งข้างโผล่ออกมาจากชายคาแล้วรีบหายไปอย่างรวดเร็ว",
						"hindi": "तभी, छज्जे के बाहर से एक नाक का सिरा झाँका और फिर तेज़ी से गायब हो गया।"
					}
				},
				{
					"content": {
						"korean": "…방금 봤어?",
						"english": "...Did you just see that?",
						"japanese": "…今、見た？",
						"chinese": "……你刚才看到了吗？",
						"french": "…Tu viens de voir ça ?",
						"spanish": "¿...Acabas de ver eso?",
						"vietnamese": "...Vừa thấy chứ?",
						"thai": "...เมื่อกี้เห็นไหม?",
						"hindi": "...अभी देखा क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "보스는 어쩌면… 우리를 보고 있을지도 모르겠네요.",
						"english": "The boss… might be watching us.",
						"japanese": "ボスはもしかしたら…私たちを見ているのかもしれない。",
						"chinese": "老板可能……正在看着我们。",
						"french": "Le boss… pourrait nous observer.",
						"spanish": "El jefe… quizás nos esté observando.",
						"vietnamese": "Có lẽ… sếp đang theo dõi chúng ta.",
						"thai": "บอส...อาจจะกำลังมองพวกเราอยู่ก็ได้นะ",
						"hindi": "बॉस… शायद हमें देख रहे हों।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "왔구나… 여기까지.",
						"english": "You've come… this far.",
						"japanese": "来たか…ここまで。",
						"chinese": "你来了……到这里。",
						"french": "Tu es venu… jusqu'ici.",
						"spanish": "Has llegado… hasta aquí.",
						"vietnamese": "Ngươi đã đến… tận đây.",
						"thai": "เจ้ามาถึง…ที่นี่แล้วสินะ",
						"hindi": "तुम आ गए… यहाँ तक।"
					}
				},
				{
					"content": {
						"korean": "네가 왕이냐.",
						"english": "Are you the king?",
						"japanese": "お前が王か。",
						"chinese": "你就是王吗？",
						"french": "Es-tu le roi ?",
						"spanish": "¿Eres el rey?",
						"vietnamese": "Ngươi là vua sao?",
						"thai": "เจ้าคือราชาหรือ?",
						"hindi": "तुम ही राजा हो?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이제… 모든 것이 끝날 시간.",
						"english": "Now… it's time for everything to end.",
						"japanese": "さあ…全てが終わる時だ。",
						"chinese": "现在……是时候结束一切了。",
						"french": "Maintenant… il est temps que tout se termine.",
						"spanish": "Ahora… es el momento de que todo termine.",
						"vietnamese": "Giờ thì… mọi thứ sẽ kết thúc.",
						"thai": "ตอนนี้…ถึงเวลาที่ทุกสิ่งจะจบลง",
						"hindi": "अब… सब कुछ खत्म होने का समय है।"
					},
					"type": "speech",
					"speaker": "boss"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 것들. 감히 나에게 덤비다니.",
						"english": "Fools. How dare you challenge me.",
						"japanese": "愚か者どもめ。よくも私に挑んだな。",
						"chinese": "愚蠢的东西。竟敢挑战我。",
						"french": "Imbéciles. Comment osez-vous me défier.",
						"spanish": "Necios. ¿Cómo osáis desafiarme?",
						"vietnamese": "Bọn ngốc. Dám cả gan thách thức ta.",
						"thai": "พวกโง่เขลา บังอาจมาท้าทายข้าได้อย่างไร",
						"hindi": "मूर्खों। तुम्हारी हिम्मत कैसे हुई मुझे चुनौती देने की।"
					},
					"emotion": "base",
					"speaker": "boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "…아직이야.",
						"english": "...Not yet.",
						"japanese": "…まだだ。",
						"chinese": "…还没完。",
						"french": "...Pas encore.",
						"spanish": "...Todavía no.",
						"vietnamese": "...Chưa đâu.",
						"thai": "...ยังหรอกน่า.",
						"hindi": "...अभी नहीं।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"speaker": "boss",
					"content": {
						"korean": "다시 와라. 그때까지, 이 지옥에서 허우적대라.",
						"english": "Return. Until then, flounder in this hell.",
						"japanese": "また来るがいい。それまで、この地獄でもがくがいい。",
						"chinese": "再来吧。在此之前，就在这地狱里挣扎吧。",
						"french": "Reviens. D'ici là, patauge dans cet enfer.",
						"spanish": "Vuelve. Hasta entonces, chapotea en este infierno.",
						"vietnamese": "Hãy quay lại. Cho đến lúc đó, hãy vùng vẫy trong địa ngục này đi.",
						"thai": "กลับมาใหม่ซะ. จนกว่าจะถึงตอนนั้น, ก็จงดิ้นรนอยู่ในนรกนี่แหละ.",
						"hindi": "वापस आओ। तब तक, इस नर्क में तड़पते रहो।"
					},
					"emotion": "base"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"content": {
						"korean": "…이게… 끝이 아니야…",
						"english": "…This… isn't over…",
						"japanese": "…これが…終わりではない…",
						"chinese": "……这……不是结束……",
						"french": "…Ce n'est… pas la fin…",
						"spanish": "…Esto… no es el final…",
						"vietnamese": "...Đây… không phải là kết thúc...",
						"thai": "...นี่…ยังไม่จบ...",
						"hindi": "...यह… अंत नहीं है..."
					},
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "뭐?",
						"english": "What?",
						"japanese": "何？",
						"chinese": "什么？",
						"french": "Quoi ?",
						"spanish": "¿Qué?",
						"vietnamese": "Gì cơ?",
						"thai": "อะไรนะ?",
						"hindi": "क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "inka",
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "inka",
					"type": "speech",
					"content": {
						"korean": "왕이… 또 다른 이름을 말하려 했어요.",
						"english": "The king… tried to utter another name.",
						"japanese": "王が…もう一つの名前を言おうとした。",
						"chinese": "国王……试图说出另一个名字。",
						"french": "Le roi… a essayé de prononcer un autre nom.",
						"spanish": "El rey… intentó pronunciar otro nombre.",
						"vietnamese": "Vua… đã cố nói ra một cái tên khác.",
						"thai": "ราชา...พยายามจะเอ่ยชื่ออื่น",
						"hindi": "राजा… एक और नाम लेना चाह रहा था।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "모든 것이 끝났다고 생각했지만, 그림자는 아직 남아 있었다.",
						"english": "We thought everything was over, but the shadows still lingered.",
						"japanese": "全てが終わったと思ったが、影はまだ残っていた。",
						"chinese": "我们以为一切都结束了，但阴影依然存在。",
						"french": "Nous pensions que tout était fini, mais les ombres persistaient.",
						"spanish": "Pensamos que todo había terminado, pero las sombras aún perduraban.",
						"vietnamese": "Cứ ngỡ mọi thứ đã kết thúc, nhưng bóng tối vẫn còn đó.",
						"thai": "เราคิดว่าทุกอย่างจบลงแล้ว แต่เงายังคงอยู่",
						"hindi": "हमने सोचा सब खत्म हो गया, पर परछाइयां अब भी बाकी थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"거센 눈보라가 길을 막았다. 멈춰 선 발걸음.",
			"작은 얼음 처마 아래, 겨우 불을 지폈다.",
			"핫팩 하나의 온기. 그리고, 서로에게 던지는 질문.",
			"우리는… 왜 이 길을 계속 가는가."
		],
		"english": [
			"A fierce blizzard blocked the path. Footsteps halted.",
			"Under a small ice eaves, we barely lit a fire.",
			"The warmth of a single hot pack. And, a question posed to each other.",
			"Why do we… keep going down this path?"
		],
		"japanese": [
			"猛吹雪が道を塞いだ。足は止まった。",
			"小さな氷の軒下で、かろうじて火を灯した。",
			"カイロ一つの温もり。そして、互いに投げかける問い。",
			"我々は…なぜこの道を歩み続けるのか。"
		],
		"chinese": [
			"猛烈的暴风雪挡住了去路。脚步停了下来。",
			"在小冰檐下，我们勉强生起了火。",
			"一个暖宝宝的温暖。以及，相互抛出的问题。",
			"我们…为什么还要继续走这条路？"
		],
		"french": [
			"Un violent blizzard bloqua le chemin. Les pas s'arrêtèrent.",
			"Sous un petit surplomb de glace, nous avons à peine allumé un feu.",
			"La chaleur d'une seule chaufferette. Et, une question posée l'un à l'autre.",
			"Pourquoi… continuons-nous sur ce chemin ?"
		],
		"spanish": [
			"Una fuerte ventisca bloqueó el camino. Los pasos se detuvieron.",
			"Bajo un pequeño saliente de hielo, apenas encendimos un fuego.",
			"El calor de un solo parche térmico. Y, una pregunta que nos lanzamos mutuamente.",
			"¿Por qué… seguimos por este camino?"
		],
		"vietnamese": [
			"Bão tuyết dữ dội chặn đường. Bước chân dừng lại.",
			"Dưới mái hiên băng nhỏ, chúng tôi vừa kịp nhóm lửa.",
			"Hơi ấm từ một túi sưởi. Và, câu hỏi dành cho nhau.",
			"Tại sao chúng ta… vẫn tiếp tục con đường này?"
		],
		"thai": [
			"พายุหิมะรุนแรงขวางทาง ก้าวเท้าหยุดลง",
			"ใต้ชายคาที่ปกคลุมด้วยน้ำแข็งเล็กๆ เราก่อไฟขึ้นอย่างยากลำบาก",
			"ความอบอุ่นจากฮอทแพ็คเพียงชิ้นเดียว และคำถามที่โยนให้กันและกัน",
			"ทำไมเรา… ยังคงเดินบนเส้นทางนี้?"
		],
		"hindi": [
			"भीषण बर्फीले तूफान ने रास्ता रोक दिया। कदम थम गए।",
			"एक छोटे से बर्फीले टीले के नीचे, हमने किसी तरह आग जलाई।",
			"एक गर्म पैकेट की गर्माहट। और, एक-दूसरे से पूछा गया सवाल।",
			"हम… इस रास्ते पर क्यों चलते रहें?"
		]
	}
} as const;
