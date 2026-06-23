export const scenario_modern_opalshade_3_04 = {
	"scenario_id": "modern_opalshade_3_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"dax": {
			"id": "mon_08d5b43e-f9ab-4469-9064-855e170b0cdc",
			"name": {
				"korean": "닥스",
				"english": "Dax",
				"japanese": "ダックス",
				"chinese": "达克斯",
				"french": "Dax",
				"spanish": "Dax",
				"vietnamese": "Dax",
				"thai": "แด็กซ์",
				"hindi": "डैक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/84bb11db-6eb4-4500-d274-222e8b100100/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5d325a75-bd91-4758-7b3f-ad9a97e52700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"재개발 멈춘 도시. 붕괴 직전의 건물.",
			"그곳에 '망령 집사'가 있었다.",
			"그는 정말 위협적인 존재일까? 아니면… 지키려는 것인가?",
			"혼란 속, 진실의 파편이 드러난다."
		],
		"english": [
			"Stalled redevelopment. Buildings on the brink.",
			"There, a 'Phantom Butler' lingered.",
			"Is he truly a threat? Or… a protector?",
			"Amidst chaos, fragments of truth emerge."
		],
		"japanese": [
			"再開発が止まった都市。崩壊寸前の建物。",
			"そこに「亡霊執事」がいた。",
			"彼、本当に脅威なの？それとも…何かを守ろうとしているのか？",
			"混乱の中、真実の断片が明らかになる。"
		],
		"chinese": [
			"停滞的旧城。危楼将倾。",
			"而“幽灵管家”就在那里。",
			"他是威胁？还是…守护者？",
			"混乱中，真相的碎片逐渐显露。"
		],
		"french": [
			"Ville au réaménagement interrompu. Bâtiments au bord de l'effondrement.",
			"Un «majordome fantôme» y demeurait.",
			"Est-il vraiment une menace ? Ou… cherche-t-il à protéger ?",
			"Au milieu du chaos, des fragments de vérité se révèlent."
		],
		"spanish": [
			"Ciudad donde la reurbanización se ha detenido. Edificios al borde del colapso.",
			"Allí estaba el \"mayordomo fantasma\".",
			"¿Es realmente una amenaza? ¿O… está tratando de proteger algo?",
			"En medio del caos, fragmentos de la verdad salen a la luz."
		],
		"vietnamese": [
			"Thành phố ngừng tái phát triển. Tòa nhà sắp sập.",
			"Nơi đó có một \"Quản gia Ma\".",
			"Hắn ta thật sự là một mối đe dọa? Hay… đang cố bảo vệ điều gì đó?",
			"Giữa sự hỗn loạn, những mảnh ghép sự thật dần hé lộ."
		],
		"thai": [
			"เมืองที่การพัฒนาหยุดชะงัก. อาคารใกล้พังทลาย.",
			"'พ่อบ้านผี' อยู่ที่นั่น.",
			"เขาเป็นภัยคุกคามจริงหรือ? หรือ...เขากำลังปกป้องบางสิ่ง?",
			"ท่ามกลางความสับสน เศษเสี้ยวของความจริงปรากฏขึ้น."
		],
		"hindi": [
			"जहाँ शहरी विकास रुका, इमारतें गिरने को थीं।",
			"वहीं 'भूतहा बटलर' था।",
			"क्या वह सच में ख़तरा है? या… बचाने आया है?",
			"इस उथल-पुथल में, सच्चाई के टुकड़े सामने आए।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "건물은 위태롭게 서 있었다. 금방이라도 무너질 듯, 시간이 멈춘 채로.",
						"english": "The building stood precariously, time frozen, as if on the verge of collapse.",
						"japanese": "建物は危うく立っていた。今にも崩れ落ちそうで、時間が止まったまま。",
						"chinese": "建筑摇摇欲坠，时间仿佛停滞，随时可能坍塌。",
						"french": "Le bâtiment tenait dangereusement debout. Comme s'il allait s'effondrer à tout moment, le temps figé.",
						"spanish": "El edificio se alzaba precariamente. Como si fuera a derrumbarse en cualquier momento, con el tiempo detenido.",
						"vietnamese": "Tòa nhà đứng chênh vênh. Như sắp đổ sập bất cứ lúc nào, thời gian như ngừng lại.",
						"thai": "อาคารตั้งอยู่อย่างหมิ่นเหม่. เหมือนจะพังทลายลงมาได้ทุกเมื่อ, ราวกับเวลาหยุดนิ่ง.",
						"hindi": "इमारत डगमगा रही थी। जैसे किसी भी पल गिर जाए, समय रुक सा गया था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…여기 맞아? 정말 다 무너져 가는데.",
						"english": "...Is this it? It's falling apart.",
						"japanese": "…ここ、合ってる？本当にボロボロじゃない。",
						"chinese": "…是这里吗？都快塌了。",
						"french": "…C'est bien ici ? Tout est en ruine.",
						"spanish": "…¿Es aquí? Se está cayendo a pedazos.",
						"vietnamese": "…Đúng chỗ này không? Nó sắp sập hết rồi.",
						"thai": "...ที่นี่ใช่ไหม? มันกำลังจะพังหมดแล้วนะ.",
						"hindi": "…क्या यही जगह है? सब कुछ तो टूट रहा है।"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "…왔구나. 늦을 줄 알았는데.",
						"english": "...You came. Thought you'd be late.",
						"japanese": "…来たな。遅れるかと思ったが。",
						"chinese": "…来了啊。我还以为你会迟到。",
						"french": "…Tu es là. Je pensais que tu serais en retard.",
						"spanish": "…Has llegado. Pensé que llegarías tarde.",
						"vietnamese": "…Đến rồi à. Cứ tưởng cậu sẽ đến muộn.",
						"thai": "...มาแล้วสินะ. นึกว่าจะมาสายซะอีก.",
						"hindi": "…तुम आ गए। सोचा था देर हो जाएगी।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "당신이 닥스? 여기서 뭘 하는 거야?",
						"english": "You're Daks? What are you doing here?",
						"japanese": "あなたがダックス？ここで何をしているの？",
						"chinese": "你是达克斯？在这里做什么？",
						"french": "Vous êtes Daks ? Que faites-vous ici ?",
						"spanish": "¿Eres Daks? ¿Qué haces aquí?",
						"vietnamese": "Anh là Daks? Anh đang làm gì ở đây?",
						"thai": "คุณคือแด็กซ์? มาทำอะไรที่นี่?",
						"hindi": "तुम डैक्स हो? यहाँ क्या कर रहे हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"spot": [
						4,
						2
					],
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "난 그저… 이 구역에 남겨진 것들을 찾고 있었어.",
						"english": "I was just… searching for what remains in this district.",
						"japanese": "私はただ…この区画に残されたものを探していただけだ。",
						"chinese": "我只是…在找这个区域里剩下的东西。",
						"french": "Je cherchais juste… ce qui restait dans ce quartier.",
						"spanish": "Yo solo… estaba buscando lo que quedaba en esta zona.",
						"vietnamese": "Tôi chỉ là… đang tìm kiếm những thứ còn sót lại trong khu vực này.",
						"thai": "ฉันแค่...กำลังตามหาสิ่งที่เหลืออยู่ในย่านนี้.",
						"hindi": "मैं तो बस… इस इलाके में बची हुई चीजें ढूंढ रहा था।"
					}
				},
				{
					"content": {
						"korean": "그러다 그 망령 집사를 봤지. 나를 쫓아냈어.",
						"english": "Then I saw the Phantom Butler. He drove me off.",
						"japanese": "その時、あの亡霊執事を見たんだ。彼は私を追い払った。",
						"chinese": "然后我看到了那个幽灵管家。他把我赶走了。",
						"french": "Puis j'ai vu ce majordome fantôme. Il m'a chassé.",
						"spanish": "Entonces vi a ese mayordomo fantasma. Me echó.",
						"vietnamese": "Sau đó tôi đã thấy Quản gia Ma đó. Hắn ta đã đuổi tôi đi.",
						"thai": "แล้วฉันก็เห็นพ่อบ้านผี. เขาไล่ฉันออกไป.",
						"hindi": "फिर मैंने उस भूतहा बटलर को देखा। उसने मुझे भगा दिया।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "쫓아냈다고? 왜?",
						"english": "Kicked out? Why?",
						"japanese": "追い出したって？どうして？",
						"chinese": "赶出去了？为什么？",
						"french": "Mis à la porte ? Pourquoi ?",
						"spanish": "¿Expulsado? ¿Por qué?",
						"vietnamese": "Đuổi đi à? Tại sao?",
						"thai": "ไล่ออกไปเหรอ? ทำไมล่ะ?",
						"hindi": "बाहर निकाल दिया? क्यों?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "모르겠어. 마치… 무언가를 감추려는 것 같았어.",
						"english": "I don't know. It was like… they were trying to hide something.",
						"japanese": "分からない。まるで…何かを隠そうとしているようだった。",
						"chinese": "我不知道。就像…他们想隐藏什么一样。",
						"french": "Je ne sais pas. On aurait dit… qu'ils essayaient de cacher quelque chose.",
						"spanish": "No lo sé. Era como si… intentaran ocultar algo.",
						"vietnamese": "Tôi không biết. Cứ như là… họ đang cố giấu giếm điều gì đó.",
						"thai": "ฉันไม่รู้สิ เหมือนกับว่า… พวกเขาพยายามจะซ่อนอะไรบางอย่าง",
						"hindi": "मुझे नहीं पता। ऐसा लग रहा था… जैसे वे कुछ छिपाने की कोशिश कर रहे थे।"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 낡은 사진처럼, 모든 게 숨겨져 있어.",
						"english": "Like this old photograph, everything is hidden.",
						"japanese": "この古い写真のように、何もかもが隠されている。",
						"chinese": "就像这张旧照片，一切都被隐藏了。",
						"french": "Comme cette vieille photo, tout est caché.",
						"spanish": "Como esta vieja fotografía, todo está oculto.",
						"vietnamese": "Giống như bức ảnh cũ này, mọi thứ đều bị che giấu.",
						"thai": "เหมือนกับภาพถ่ายเก่านี้ ทุกสิ่งถูกซ่อนไว้",
						"hindi": "इस पुरानी तस्वीर की तरह, सब कुछ छिपा हुआ है।"
					},
					"type": "speech",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "dax",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "처음엔 위협적인 줄 알았어. 그 거대한 그림자.",
						"english": "At first, I thought it was threatening. That huge shadow.",
						"japanese": "最初は脅威だと思った。あの巨大な影を。",
						"chinese": "一开始，我以为那很危险。那个巨大的影子。",
						"french": "Au début, je pensais que c'était menaçant. Cette immense ombre.",
						"spanish": "Al principio, pensé que era amenazante. Esa enorme sombra.",
						"vietnamese": "Lúc đầu, tôi nghĩ nó đáng sợ. Cái bóng khổng lồ đó.",
						"thai": "ตอนแรกฉันคิดว่ามันน่ากลัว เงาขนาดใหญ่นั้น",
						"hindi": "पहले, मुझे लगा कि यह खतरनाक है। वह विशाल छाया।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "하지만… 그건 공포가 아니었어. 필사적인 보호였지.",
						"english": "But… it wasn't fear. It was desperate protection.",
						"japanese": "でも…それは恐怖じゃなかった。必死な保護だった。",
						"chinese": "但是…那不是恐惧。那是一种拼命的保护。",
						"french": "Mais… ce n'était pas de la peur. C'était une protection désespérée.",
						"spanish": "Pero… no era miedo. Era una protección desesperada.",
						"vietnamese": "Nhưng… đó không phải là nỗi sợ hãi. Đó là sự bảo vệ tuyệt vọng.",
						"thai": "แต่… มันไม่ใช่ความกลัว มันคือการปกป้องอย่างสิ้นหวัง",
						"hindi": "लेकिन… वह डर नहीं था। वह हताश सुरक्षा थी।"
					},
					"speaker": "dax"
				},
				{
					"content": {
						"korean": "보호? 뭘 보호한다는 거야?",
						"english": "Protection? Protecting what?",
						"japanese": "保護？何を保護するんだ？",
						"chinese": "保护？保护什么？",
						"french": "Protection ? Protéger quoi ?",
						"spanish": "¿Protección? ¿Proteger qué?",
						"vietnamese": "Bảo vệ? Bảo vệ cái gì?",
						"thai": "ปกป้อง? ปกป้องอะไร?",
						"hindi": "सुरक्षा? क्या सुरक्षा?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "글쎄. 이곳을 떠나지 못하는 영혼들의… 슬픈 멜로디 같았어.",
						"english": "Well. It was like… a sad melody of souls who can't leave this place.",
						"japanese": "さあ。まるで…この場所を去ることができない魂たちの…悲しいメロディのようだった。",
						"chinese": "嗯。就像…那些无法离开这里的灵魂的…悲伤旋律。",
						"french": "Eh bien. C'était comme… une triste mélodie d'âmes qui ne peuvent pas quitter cet endroit.",
						"spanish": "Bueno. Era como… una triste melodía de almas que no pueden dejar este lugar.",
						"vietnamese": "À. Cứ như là… một giai điệu buồn của những linh hồn không thể rời khỏi nơi này.",
						"thai": "ก็ เหมือนกับ… ท่วงทำนองอันเศร้าสร้อยของดวงวิญญาณที่ไม่สามารถจากไปจากที่นี่ได้",
						"hindi": "खैर। यह उन आत्माओं की एक दुखद धुन की तरह था जो इस जगह को छोड़ नहीं सकतीं।"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "dax",
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "그는 이 모든 것의 흔적을 지키려 해. 사라진 과거를.",
						"english": "He tries to protect the traces of all this. The vanished past.",
						"japanese": "彼はこの全ての痕跡を守ろうとしている。消え去った過去を。",
						"chinese": "他试图保护所有这些痕迹。那消逝的过去。",
						"french": "Il essaie de protéger les traces de tout cela. Le passé disparu.",
						"spanish": "Él intenta proteger los rastros de todo esto. El pasado desvanecido.",
						"vietnamese": "Anh ta cố gắng bảo vệ dấu vết của tất cả những điều này. Quá khứ đã mất.",
						"thai": "เขาพยายามจะปกป้องร่องรอยของสิ่งเหล่านี้ทั้งหมด อดีตที่หายไป",
						"hindi": "वह इन सब के निशानों को बचाना चाहता है। अतीत जो गायब हो गया।"
					},
					"type": "speech",
					"speaker": "dax"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사라진 과거… 조직의 문양과 관련이 있나?",
						"english": "Vanished past… Is it related to the organization's emblem?",
						"japanese": "消え去った過去…組織の紋章と関係があるのか？",
						"chinese": "消逝的过去…和组织的徽章有关吗？",
						"french": "Le passé disparu… Est-ce lié à l'emblème de l'organisation ?",
						"spanish": "Pasado desvanecido… ¿Está relacionado con el emblema de la organización?",
						"vietnamese": "Quá khứ đã mất… Có liên quan đến biểu tượng của tổ chức không?",
						"thai": "อดีตที่หายไป… มันเกี่ยวข้องกับตราสัญลักษณ์ขององค์กรหรือเปล่า?",
						"hindi": "गायब हुआ अतीत… क्या इसका संगठन के प्रतीक चिन्ह से कोई संबंध है?"
					}
				},
				{
					"speaker": "dax",
					"content": {
						"korean": "분명 이 구역엔… 비밀스러운 사연이 있어.",
						"english": "Surely in this area… there's a secret story.",
						"japanese": "この区域にはきっと…秘密の物語がある。",
						"chinese": "这个区域里肯定…有一个秘密的故事。",
						"french": "Certainement dans cette zone… il y a une histoire secrète.",
						"spanish": "Sin duda en esta zona… hay una historia secreta.",
						"vietnamese": "Chắc chắn trong khu vực này… có một câu chuyện bí mật.",
						"thai": "แน่นอนว่าในบริเวณนี้… มีเรื่องราวลับซ่อนอยู่",
						"hindi": "निश्चित रूप से इस क्षेत्र में… एक रहस्यमय कहानी है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 우리는 어떻게 해야 해?",
						"english": "What should we do then?",
						"japanese": "では、どうすればいい？",
						"chinese": "那我们该怎么办？",
						"french": "Alors, que devons-nous faire ?",
						"spanish": "¿Qué debemos hacer entonces?",
						"vietnamese": "Vậy chúng ta phải làm gì?",
						"thai": "แล้วเราควรทำอย่างไรดี?",
						"hindi": "तो हमें क्या करना चाहिए?"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그 진실을 마주해야만 해. 돌아갈 수 없어.",
						"english": "We must face that truth. There's no turning back.",
						"japanese": "その真実と向き合うしかない。もう戻れない。",
						"chinese": "我们必须面对那个真相。无法回头了。",
						"french": "Nous devons affronter cette vérité. Il n'y a pas de retour possible.",
						"spanish": "Debemos enfrentar esa verdad. No hay vuelta atrás.",
						"vietnamese": "Chúng ta phải đối mặt với sự thật đó. Không thể quay lại được nữa.",
						"thai": "เราต้องเผชิญหน้ากับความจริงนั้น ไม่มีทางย้อนกลับไปได้แล้ว",
						"hindi": "हमें उस सच का सामना करना होगा। अब कोई वापसी नहीं है।"
					},
					"speaker": "dax"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 모든 것을 집어삼켰다.",
						"english": "A colossal shadow devoured everything.",
						"japanese": "巨大な影がすべてを飲み込んだ。",
						"chinese": "巨大的阴影吞噬了一切。",
						"french": "Une ombre colossale a tout englouti.",
						"spanish": "Una sombra colosal lo devoró todo.",
						"vietnamese": "Một bóng đen khổng lồ nuốt chửng mọi thứ.",
						"thai": "เงาขนาดมหึมากลืนกินทุกสิ่ง",
						"hindi": "एक विशाल छाया ने सब कुछ निगल लिया।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…누구도 이곳에 다가설 수 없어.",
						"english": "...No one can approach this place.",
						"japanese": "…誰もここには近づけない。",
						"chinese": "……无人能靠近这里。",
						"french": "...Personne ne peut approcher d'ici.",
						"spanish": "...Nadie puede acercarse aquí.",
						"vietnamese": "...Không ai có thể đến gần nơi này.",
						"thai": "...ไม่มีใครเข้าใกล้ที่นี่ได้",
						"hindi": "...कोई यहां नहीं आ सकता।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아직 포기 못 해. 진실은 이곳에 있어.",
						"english": "I can't give up yet. The truth is here.",
						"japanese": "まだ諦められない。真実はここにある。",
						"chinese": "我不能放弃。真相就在这里。",
						"french": "Je ne peux pas encore abandonner. La vérité est ici.",
						"spanish": "No puedo rendirme aún. La verdad está aquí.",
						"vietnamese": "Tôi chưa thể bỏ cuộc. Sự thật nằm ở đây.",
						"thai": "ฉันยังยอมแพ้ไม่ได้ ความจริงอยู่ที่นี่",
						"hindi": "मैं अभी हार नहीं मान सकता। सच यहीं है।"
					}
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "…결국, 이것마저 빼앗는구나.",
						"english": "...In the end, you even take this from me.",
						"japanese": "…結局、これすらも奪うのか。",
						"chinese": "……最终，连这个也要夺走吗。",
						"french": "...Finalement, tu me prends même ça.",
						"spanish": "...Al final, incluso esto me quitas.",
						"vietnamese": "...Cuối cùng, ngươi cũng cướp đi cái này.",
						"thai": "...สุดท้ายแล้ว เจ้าก็ยังแย่งชิงสิ่งนี้ไปอีก",
						"hindi": "...आखिरकार, तुम यह भी मुझसे छीन लेते हो।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "하지만… 사라지지 않아. 그들의 흔적은.",
						"english": "But... they won't disappear. Their traces remain.",
						"japanese": "しかし…消えはしない。彼らの痕跡は。",
						"chinese": "但是……不会消失。他们的痕迹。",
						"french": "Mais... ils ne disparaîtront pas. Leurs traces.",
						"spanish": "Pero... no desaparecerán. Sus huellas.",
						"vietnamese": "Nhưng... họ sẽ không biến mất. Dấu vết của họ vẫn còn.",
						"thai": "แต่... พวกเขาจะไม่หายไป ร่องรอยของพวกเขายังคงอยู่",
						"hindi": "लेकिन... वे गायब नहीं होंगे। उनके निशान।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 끝이 아니구나.",
						"english": "This isn't the end.",
						"japanese": "これで終わりじゃない。",
						"chinese": "这还没完。",
						"french": "Ce n'est pas la fin.",
						"spanish": "Esto no es el final.",
						"vietnamese": "Đây không phải là kết thúc.",
						"thai": "นี่ไม่ใช่จุดจบ",
						"hindi": "यह अंत नहीं है।"
					},
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "정체 모를 자의 그림자는 흩어졌다. 하지만… 그의 지키려던 것은 무엇이었을까.",
						"english": "The shadow of the unknown dispersed. But... what was he trying to protect?",
						"japanese": "正体不明の影は消え去った。しかし…彼が守ろうとしていたものは何だったのだろうか。",
						"chinese": "未知之影消散了。但是……他试图守护的是什么？",
						"french": "L'ombre de l'inconnu s'est dissipée. Mais... que cherchait-il à protéger ?",
						"spanish": "La sombra del desconocido se dispersó. Pero... ¿qué intentaba proteger?",
						"vietnamese": "Bóng của kẻ vô danh tan biến. Nhưng... hắn đã cố gắng bảo vệ điều gì?",
						"thai": "เงาของผู้ไร้นามสลายไปแล้ว แต่... เขากำลังปกป้องอะไรอยู่กันแน่?",
						"hindi": "अज्ञात की छाया बिखर गई। लेकिन... वह क्या बचाने की कोशिश कर रहा था?"
					}
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "붕괴 직전의 건물은 여전히 침묵하고 있었다.",
						"english": "The crumbling building remained silent.",
						"japanese": "崩壊寸前の建物は、依然として沈黙していた。",
						"chinese": "即将坍塌的建筑依旧一片寂静。",
						"french": "Le bâtiment, sur le point de s'effondrer, restait silencieux.",
						"spanish": "El edificio, al borde del colapso, seguía en silencio.",
						"vietnamese": "Tòa nhà sắp sụp đổ vẫn im lìm.",
						"thai": "อาคารที่ใกล้จะพังทลายยังคงเงียบงัน",
						"hindi": "गिरने वाला भवन अभी भी खामोश था।"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest place. A colossal shadow appeared.",
						"japanese": "最深部。巨大な影が現れた。",
						"chinese": "最深之处。一个巨大的影子出现了。",
						"french": "L'endroit le plus profond. Une ombre colossale apparut.",
						"spanish": "El lugar más profundo. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu thẳm nhất. Một cái bóng khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุด เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "सबसे गहरा स्थान। एक विशाल छाया प्रकट हुई।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…누구도 이곳을 침범할 수 없다.",
						"english": "...No one may trespass here.",
						"japanese": "…誰もここを侵すことはできない。",
						"chinese": "……无人可以侵犯此地。",
						"french": "...Personne ne peut empiéter ici.",
						"spanish": "...Nadie puede invadir este lugar.",
						"vietnamese": "...Không ai được xâm phạm nơi đây.",
						"thai": "...ไม่มีใครสามารถรุกล้ำเข้ามาที่นี่ได้",
						"hindi": "...कोई भी यहाँ अतिक्रमण नहीं कर सकता।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "당신은 뭘 지키는 거지? 왜 우릴 막는 거야?",
						"english": "What are you protecting? Why are you stopping us?",
						"japanese": "何を守っている？なぜ我々を阻む？",
						"chinese": "你守护着什么？为什么要阻止我们？",
						"french": "Que protèges-tu ? Pourquoi nous arrêtes-tu ?",
						"spanish": "¿Qué proteges? ¿Por qué nos detienes?",
						"vietnamese": "Ngươi đang bảo vệ cái gì? Tại sao lại ngăn cản chúng ta?",
						"thai": "คุณกำลังปกป้องอะไร? ทำไมถึงขัดขวางเรา?",
						"hindi": "तुम क्या बचा रहे हो? हमें क्यों रोक रहे हो?"
					},
					"type": "speech"
				},
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter",
					"speaker": "dax"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그는 이 구역의… 잊혀진 약속을 지키려는 거야.",
						"english": "He's trying to uphold this sector's... forgotten promise.",
						"japanese": "彼はこの区画の…忘れられた約束を守ろうとしているんだ。",
						"chinese": "他是在守护这个区域的……被遗忘的约定。",
						"french": "Il essaie de tenir... la promesse oubliée de ce secteur.",
						"spanish": "Él está tratando de mantener... la promesa olvidada de este sector.",
						"vietnamese": "Anh ta đang cố gắng giữ lời hứa... bị lãng quên của khu vực này.",
						"thai": "เขากำลังพยายามรักษา... คำสัญญาที่ถูกลืมของเขตนี้",
						"hindi": "वह इस क्षेत्र के... भूले हुए वादे को निभाना चाहता है।"
					},
					"speaker": "dax"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "가라. 더 이상 잃을 수 없다.",
						"english": "Go. We can't lose anything more.",
						"japanese": "行け。これ以上失うものはない。",
						"chinese": "走吧。不能再失去更多了。",
						"french": "Allez. Nous ne pouvons plus rien perdre.",
						"spanish": "Vete. No podemos perder nada más.",
						"vietnamese": "Đi đi. Chúng ta không thể mất thêm gì nữa.",
						"thai": "ไปเถอะ เราไม่สามารถสูญเสียอะไรได้อีกแล้ว",
						"hindi": "जाओ। हम और कुछ नहीं खो सकते।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비켜. 진실을 밝힐 거야.",
						"english": "Move. I will reveal the truth.",
						"japanese": "退け。真実を明らかにする。",
						"chinese": "让开。我要揭露真相。",
						"french": "Écarte-toi. Je vais révéler la vérité.",
						"spanish": "Apártate. Revelaré la verdad.",
						"vietnamese": "Tránh ra. Tôi sẽ tiết lộ sự thật.",
						"thai": "หลีกไป ฉันจะเปิดเผยความจริง",
						"hindi": "हटो। मैं सच का खुलासा करूंगा।"
					}
				},
				{
					"speaker": "dax",
					"action": "exit",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				}
			]
		}
	]
} as const;
