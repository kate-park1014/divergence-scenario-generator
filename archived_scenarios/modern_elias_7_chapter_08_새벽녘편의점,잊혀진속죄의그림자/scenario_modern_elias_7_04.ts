export const scenario_modern_elias_7_04 = {
	"scenario_id": "modern_elias_7_04",
	"order": 4,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"bex": {
			"id": "mon_74e24324-3f9a-4d44-9611-1da33b654ca1",
			"name": {
				"korean": "벡스",
				"english": "Bex",
				"japanese": "ベックス",
				"chinese": "贝克斯",
				"french": "Bex",
				"spanish": "Bex",
				"vietnamese": "Bex",
				"thai": "เบ็กซ์",
				"hindi": "बेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/09dae190-ff6b-4a9d-b656-e1a2b896aa00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/5cc3c77f-72e1-416e-b346-31889b3b9300/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"어둠이 드리운 도시, 벡스의 눈이 번뜩였다.",
			"편의점을 감도는 쇠 비린내와 기묘한 분위기.",
			"엘리아스, 그 청년은 단순한 점원이 아니었다.",
			"잊힌 과거의 그림자가 다시 기지개를 켜고 있었다."
		],
		"english": [
			"In the darkened city, Vex's eyes gleamed.",
			"A metallic tang and an eerie atmosphere hung over the convenience store.",
			"Elias, that young man, was no mere clerk.",
			"The shadow of a forgotten past was stirring once more."
		],
		"japanese": [
			"闇が垂れ込めた都市、ベックスの目が光った。",
			"コンビニに漂う鉄の匂いと奇妙な雰囲気。",
			"エリアス、あの青年はただの店員ではなかった。",
			"忘れ去られた過去の影が、再び動き出そうとしていた。"
		],
		"chinese": [
			"黑暗笼罩的城市，维克斯的眼睛闪烁着光芒。",
			"便利店里弥漫着铁锈味和诡异的气氛。",
			"埃利亚斯，那个年轻人，并非只是一个普通的店员。",
			"被遗忘的过去的阴影再次苏醒。"
		],
		"french": [
			"Dans la ville obscurcie, les yeux de Vex scintillaient.",
			"Une odeur métallique et une atmosphère étrange planaient sur le dépanneur.",
			"Elias, ce jeune homme, n'était pas un simple employé.",
			"L'ombre d'un passé oublié se réveillait à nouveau."
		],
		"spanish": [
			"En la ciudad oscura, los ojos de Vex brillaron.",
			"Un olor metálico y una atmósfera extraña envolvían la tienda de conveniencia.",
			"Elías, ese joven, no era un simple dependiente.",
			"La sombra de un pasado olvidado volvía a despertar."
		],
		"vietnamese": [
			"Trong thành phố chìm trong bóng tối, đôi mắt Vex lóe sáng.",
			"Mùi tanh kim loại và không khí kỳ lạ bao trùm cửa hàng tiện lợi.",
			"Elias, chàng trai trẻ đó, không chỉ là một nhân viên cửa hàng.",
			"Bóng tối của một quá khứ lãng quên đang cựa quậy trở lại."
		],
		"thai": [
			"ในเมืองที่มืดมิด ดวงตาของเว็กซ์เปล่งประกาย",
			"กลิ่นคาวโลหะและบรรยากาศแปลกประหลาดปกคลุมร้านสะดวกซื้อ",
			"อีเลียส ชายหนุ่มคนนั้น ไม่ใช่แค่พนักงานธรรมดา",
			"เงาของอดีตที่ถูกลืมกำลังจะตื่นขึ้นอีกครั้ง"
		],
		"hindi": [
			"अंधेरे शहर में, वेक्स की आँखें चमक उठीं。",
			"सुविधा स्टोर पर धातु की गंध और एक अजीब माहौल छाया हुआ था।",
			"एलियास, वह नौजवान, सिर्फ एक क्लर्क नहीं था।",
			"एक भूले हुए अतीत की परछाई फिर से जाग रही थी।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "도시의 오래된 편의점, 스산한 기운이 감돌았다.",
						"english": "An old convenience store in the city, an eerie aura lingered.",
						"japanese": "都市の古いコンビニ、不気味な気配が漂っていた。",
						"chinese": "城市里一家老旧的便利店，弥漫着一股阴森的气氛。",
						"french": "Un vieux dépanneur de la ville, une aura sinistre planait.",
						"spanish": "Una vieja tienda de conveniencia en la ciudad, un aura espeluznante persistía.",
						"vietnamese": "Một cửa hàng tiện lợi cũ trong thành phố, một luồng khí lạnh lẽo bao trùm.",
						"thai": "ร้านสะดวกซื้อเก่าแก่ในเมือง บรรยากาศชวนขนลุกกำลังลอยอวล",
						"hindi": "शहर में एक पुरानी सुविधा स्टोर, एक भयानक आभा बनी हुई थी।"
					}
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						3
					]
				},
				{
					"content": {
						"korean": "엘리아스에게서 나는 이 냄새… 희미한 쇠 비린내. 분명 어디선가 맡아본 것 같아.",
						"english": "This smell from Elias... a faint metallic tang. I'm sure I've smelled it somewhere before.",
						"japanese": "エリアスからするこの匂い… かすかな鉄の匂い。きっとどこかで嗅いだことがあるはずだ。",
						"chinese": "埃利亚斯身上传来的这种味道……一股淡淡的铁锈味。我肯定以前在哪里闻到过。",
						"french": "Cette odeur d'Elias... une légère odeur métallique. Je suis sûr de l'avoir déjà sentie quelque part.",
						"spanish": "Este olor de Elías... un débil olor metálico. Estoy seguro de haberlo olido antes en algún lugar.",
						"vietnamese": "Mùi này từ Elias... một mùi tanh kim loại thoang thoảng. Chắc chắn tôi đã ngửi thấy nó ở đâu đó trước đây.",
						"thai": "กลิ่นนี้จากอีเลียส... กลิ่นคาวโลหะจางๆ ฉันแน่ใจว่าเคยได้กลิ่นที่ไหนสักแห่งมาก่อน",
						"hindi": "एलियास से आ रही यह गंध... एक हल्की धातु की गंध। मुझे यकीन है कि मैंने इसे कहीं और भी सूंघा है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "쇠 비린내요? 혹시 피 냄새 비슷한 건가요?",
						"english": "A metallic tang? Is it similar to the smell of blood?",
						"japanese": "鉄の匂いですか？ もしかして、血の匂いみたいなものですか？",
						"chinese": "铁锈味？是和血腥味类似的味道吗？",
						"french": "Une odeur métallique ? Est-ce similaire à l'odeur du sang ?",
						"spanish": "¿Un olor metálico? ¿Es similar al olor a sangre?",
						"vietnamese": "Mùi tanh kim loại? Có phải giống mùi máu không?",
						"thai": "กลิ่นคาวโลหะ? มันคล้ายกับกลิ่นเลือดหรือเปล่าครับ/คะ?",
						"hindi": "धातु की गंध? क्या यह खून की गंध के समान है?"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "더 옅고, 낡은 느낌이야. 그리고 이 편의점 주변. 뭔가 이상해.",
						"english": "It's fainter, and feels old. And around this convenience store. Something's off.",
						"japanese": "もっと薄くて、古びた感じだ。そしてこのコンビニの周り。何かがおかしい。",
						"chinese": "更淡，更陈旧的感觉。而且这家便利店周围。有什么不对劲。",
						"french": "C'est plus faible, et ça sent le vieux. Et autour de ce dépanneur. Quelque chose ne va pas.",
						"spanish": "Es más débil y se siente viejo. Y alrededor de esta tienda de conveniencia. Algo anda mal.",
						"vietnamese": "Nó nhạt hơn, và có cảm giác cũ kỹ. Và xung quanh cửa hàng tiện lợi này. Có điều gì đó không ổn.",
						"thai": "มันจางกว่า และรู้สึกเก่าๆ และบริเวณรอบร้านสะดวกซื้อนี้ มีบางอย่างผิดปกติ",
						"hindi": "यह हल्का है, और पुराना लगता है। और इस सुविधा स्टोर के आसपास। कुछ गड़बड़ है।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "무슨 소리죠?",
						"english": "What do you mean?",
						"japanese": "どういうことですか？",
						"chinese": "什么意思？",
						"french": "Que voulez-vous dire ?",
						"spanish": "¿Qué quieres decir?",
						"vietnamese": "Anh/chị nói gì vậy?",
						"thai": "คุณหมายความว่าอะไร?",
						"hindi": "तुम्हारा क्या मतलब है?"
					},
					"type": "speech"
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "이 도시의 옛 기록을 찾아봐야겠어.",
						"english": "I'll have to look up the old records of this city.",
						"japanese": "この街の古い記録を調べてみる必要がある。",
						"chinese": "我得查查这座城市的老档案。",
						"french": "Je vais devoir consulter les vieux registres de cette ville.",
						"spanish": "Tendré que buscar los viejos registros de esta ciudad.",
						"vietnamese": "Tôi sẽ phải tìm kiếm những ghi chép cũ của thành phố này.",
						"thai": "ฉันคงต้องไปค้นหาบันทึกเก่าๆ ของเมืองนี้แล้ว",
						"hindi": "मुझे इस शहर के पुराने रिकॉर्ड देखने होंगे।"
					},
					"type": "speech"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "찾았어. 몇 년 전, 이 근처에서 사라진 사람들의 기사.",
						"english": "Found it. An article about people who vanished near here years ago.",
						"japanese": "見つけた。数年前、この近辺で失踪した人々についての記事だ。",
						"chinese": "找到了。几年前，在这附近失踪的人们的报道。",
						"french": "Je l'ai trouvé. Un article sur des personnes disparues il y a quelques années dans les environs.",
						"spanish": "Lo encontré. Un artículo sobre personas que desaparecieron cerca de aquí hace años.",
						"vietnamese": "Tìm thấy rồi. Bài báo về những người biến mất gần đây vài năm trước.",
						"thai": "เจอแล้ว บทความเกี่ยวกับคนหายเมื่อหลายปีก่อนแถวนี้",
						"hindi": "मिल गया। कुछ साल पहले, यहाँ पास से गायब हुए लोगों के बारे में एक लेख。"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "사라졌다구요? 단순한 실종 사건인가요?",
						"english": "Vanished? Is it just a simple missing persons case?",
						"japanese": "失踪ですか？単なる行方不明事件でしょうか？",
						"chinese": "失踪了？只是普通的失踪案件吗？",
						"french": "Disparus ? Est-ce juste une simple affaire de personnes disparues ?",
						"spanish": "¿Desaparecidos? ¿Es solo un caso de desaparición simple?",
						"vietnamese": "Biến mất ư? Chỉ là vụ mất tích đơn giản thôi sao?",
						"thai": "หายตัวไป? เป็นแค่คดีคนหายธรรมดาหรือเปล่า?",
						"hindi": "गायब हो गए? क्या यह सिर्फ एक साधारण गुमशुदगी का मामला है?"
					}
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "아니. 공통점이 있어. 그들 모두, 이곳 편의점에서 마지막으로 목격됐어.",
						"english": "No. There's a common thread. They were all last seen at this convenience store.",
						"japanese": "いや。共通点がある。彼ら全員、このコンビニで最後に目撃されている。",
						"chinese": "不。有一个共同点。他们所有人，最后都被目击到在这家便利店。",
						"french": "Non. Il y a un point commun. Ils ont tous été vus pour la dernière fois dans ce dépanneur.",
						"spanish": "No. Hay un hilo común. Todos fueron vistos por última vez en esta tienda de conveniencia.",
						"vietnamese": "Không. Có một điểm chung. Tất cả bọn họ đều được nhìn thấy lần cuối tại cửa hàng tiện lợi này.",
						"thai": "ไม่หรอก มีจุดร่วมกัน พวกเขาทั้งหมดถูกพบเห็นครั้งสุดท้ายที่ร้านสะดวกซื้อแห่งนี้",
						"hindi": "नहीं। एक बात सामान्य है। वे सभी आखिरी बार इस सुविधा स्टोर पर देखे गए थे।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "엘리아스 씨가 일하던 곳 아닌가요?",
						"english": "Isn't this where Elias worked?",
						"japanese": "ここ、エリアスさんが働いていた場所じゃないですか？",
						"chinese": "这不是埃利亚斯先生工作的地方吗？",
						"french": "N'est-ce pas là qu'Elias travaillait ?",
						"spanish": "¿No es donde trabajaba Elias?",
						"vietnamese": "Đây không phải là nơi Elias làm việc sao?",
						"thai": "ที่นี่ไม่ใช่ที่ที่เอเลียสทำงานเหรอ?",
						"hindi": "क्या यह वह जगह नहीं है जहाँ एलियास काम करता था?"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"speaker": "bex",
					"emotion": "sad",
					"content": {
						"korean": "게다가 엘리아스의 극심한 피로감, 그리고 가끔 보이는 이해할 수 없는 망설임….",
						"english": "And Elias's extreme fatigue, and the incomprehensible hesitation he sometimes shows...",
						"japanese": "それにエリアスの極度の疲労感、そして時折見せる理解できないためらい…",
						"chinese": "而且，埃利亚斯极度的疲劳感，以及偶尔表现出的难以理解的犹豫…",
						"french": "De plus, la fatigue extrême d'Elias, et son hésitation parfois incompréhensible…",
						"spanish": "Además, el cansancio extremo de Elias, y la vacilación incomprensible que a veces muestra…",
						"vietnamese": "Thêm vào đó, sự mệt mỏi cực độ của Elias, và sự do dự khó hiểu mà anh ấy đôi khi thể hiện…",
						"thai": "แถมความเหนื่อยล้าอย่างหนักของเอเลียส และความลังเลที่เข้าใจยากที่บางครั้งเขาแสดงออกมา…",
						"hindi": "इसके अलावा, एलियास की अत्यधिक थकान, और कभी-कभी दिखने वाली उसकी समझ से बाहर की हिचकिचाहट..."
					},
					"type": "speech"
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "…설마, 엘리아스가?",
						"english": "...Could it be Elias?",
						"japanese": "…まさか、エリアスが？",
						"chinese": "…难道，是埃利亚斯？",
						"french": "…Elias, ce ne serait pas lui, quand même ?",
						"spanish": "¿...Elias, no será?",
						"vietnamese": "...Chẳng lẽ, là Elias?",
						"thai": "...หรือว่าเอเลียส?",
						"hindi": "...कहीं, एलियास तो नहीं?"
					},
					"type": "speech"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "이건 과거 도시 조직폭력배 사건들과 이 지역을 연결하는 기사들이야.",
						"english": "These are articles connecting past urban gang incidents with this area.",
						"japanese": "これは過去の都市組織暴力団事件とこの地域を結びつける記事だ。",
						"chinese": "这些是连接过去城市黑帮案件和这个地区的报道。",
						"french": "Ce sont des articles qui relient les affaires de gangs urbains passées à cette région.",
						"spanish": "Estos son artículos que conectan incidentes pasados de bandas criminales urbanas con esta zona.",
						"vietnamese": "Đây là những bài báo liên kết các vụ án băng đảng đô thị trong quá khứ với khu vực này.",
						"thai": "นี่คือบทความที่เชื่อมโยงคดีแก๊งอาชญากรรมในเมืองในอดีตกับพื้นที่นี้",
						"hindi": "ये ऐसे लेख हैं जो अतीत के शहरी गिरोहों की घटनाओं को इस क्षेत्र से जोड़ते हैं।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"content": {
						"korean": "조직폭력배… 엘리아스 씨랑 무슨 상관이 있죠?",
						"english": "Gangsters... What does that have to do with Elias?",
						"japanese": "組織暴力団…エリアスさんと何か関係があるんですか？",
						"chinese": "黑帮… 和埃利亚斯先生有什么关系？",
						"french": "Des gangs... Quel est le rapport avec Elias ?",
						"spanish": "Pandillas... ¿Qué tiene que ver eso con Elias?",
						"vietnamese": "Băng đảng… Có liên quan gì đến Elias sao?",
						"thai": "แก๊ง... เกี่ยวอะไรกับคุณเอเลียส?",
						"hindi": "गिरोह... एलियास का इससे क्या लेना-देना है?"
					},
					"type": "speech"
				},
				{
					"content": {
						"korean": "이 편의점은 당시 조직의 은밀한 아지트 중 하나였다는 증언이 있어.",
						"english": "There's testimony that this convenience store was one of the gang's secret hideouts at the time.",
						"japanese": "このコンビニは、当時、組織の秘密のアジトの一つだったという証言がある。",
						"chinese": "有证词说，这家便利店当时是该组织的一个秘密据点。",
						"french": "Il y a des témoignages selon lesquels ce dépanneur était l'une des cachettes secrètes du gang à l'époque.",
						"spanish": "Hay testimonios de que esta tienda de conveniencia era uno de los escondites secretos de la banda en ese momento.",
						"vietnamese": "Có lời khai rằng cửa hàng tiện lợi này từng là một trong những căn cứ bí mật của băng đảng.",
						"thai": "มีพยานหลักฐานว่าร้านสะดวกซื้อแห่งนี้เป็นหนึ่งในที่ซ่อนลับของแก๊งในตอนนั้น",
						"hindi": "गवाही है कि यह सुविधा स्टोर उस समय गिरोह के गुप्त ठिकानों में से एक था।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "그럼 엘리아스는… 그 조직과 연관된 건가요?",
						"english": "So Elias... is he involved with that organization?",
						"japanese": "じゃあエリアスは…その組織と関係があるんですか？",
						"chinese": "那么埃利亚斯… 是和那个组织有牵连吗？",
						"french": "Alors Elias... est-il lié à cette organisation ?",
						"spanish": "¿Entonces Elias... está relacionado con esa organización?",
						"vietnamese": "Vậy Elias… có liên quan đến tổ chức đó sao?",
						"thai": "แล้วเอเลียส... เกี่ยวข้องกับองค์กรนั้นเหรอ?",
						"hindi": "तो एलियास... क्या वह उस संगठन से जुड़ा है?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아니, 어쩌면… 그 과거에 '얽매여' 있는 건지도 몰라.",
						"english": "No, perhaps… he's 'bound' by that past.",
						"japanese": "いや、もしかしたら…彼がその過去に『囚われている』のかもしれない。",
						"chinese": "不，也许…他被那段过去‘束缚’住了。",
						"french": "Non, peut-être… qu'il est 'lié' à ce passé.",
						"spanish": "No, quizás… él está 'atado' a ese pasado.",
						"vietnamese": "Không, có lẽ… anh ấy đang bị 'ràng buộc' bởi quá khứ đó.",
						"thai": "ไม่สิ, บางที… เขาอาจจะถูก 'ผูกมัด' ไว้กับอดีตนั้นก็ได้.",
						"hindi": "नहीं, शायद… वह उस अतीत से 'बंधा' हुआ है।"
					},
					"emotion": "sad",
					"speaker": "bex"
				},
				{
					"type": "speech",
					"content": {
						"korean": "얽매여 있다구요?",
						"english": "Bound, you say?",
						"japanese": "囚われているって？",
						"chinese": "被束缚住了？",
						"french": "Lié, vous dites ?",
						"spanish": "¿Atado, dices?",
						"vietnamese": "Bị ràng buộc ư?",
						"thai": "ถูกผูกมัดหรือ?",
						"hindi": "बंधा हुआ, आप कहते हैं?"
					},
					"emotion": "base",
					"speaker": "character_any"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "bex",
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500
				},
				{
					"speaker": "bex",
					"emotion": "base",
					"content": {
						"korean": "더 깊은 진실이 숨겨져 있어. 엘리아스는 그 중심에 있어.",
						"english": "A deeper truth is hidden. Elias is at its heart.",
						"japanese": "もっと深い真実が隠されている。エリアスがその核心だ。",
						"chinese": "更深的真相隐藏着。伊利亚斯是其核心。",
						"french": "Une vérité plus profonde est cachée. Elias en est le cœur.",
						"spanish": "Una verdad más profunda está oculta. Elías está en su centro.",
						"vietnamese": "Một sự thật sâu sắc hơn đang bị che giấu. Elias là trung tâm của nó.",
						"thai": "ความจริงที่ลึกซึ้งกว่าซ่อนอยู่ เอเลียสคือหัวใจของมัน.",
						"hindi": "एक गहरा सच छिपा है। एलियास उसके केंद्र में है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "우리가 뭘 할 수 있을까요?",
						"english": "What can we do?",
						"japanese": "私たちに何ができる？",
						"chinese": "我们能做什么？",
						"french": "Que pouvons-nous faire ?",
						"spanish": "¿Qué podemos hacer?",
						"vietnamese": "Chúng ta có thể làm gì?",
						"thai": "เราจะทำอะไรได้บ้าง?",
						"hindi": "हम क्या कर सकते हैं?"
					}
				},
				{
					"content": {
						"korean": "그를 얽매는 것을 찾아내야 해. 그의 눈빛은 이미 죽은 것 같았어.",
						"english": "We must find what binds him. His eyes already looked dead.",
						"japanese": "彼を縛るものを見つけなければならない。彼の目はもう死んでいるようだった。",
						"chinese": "我们必须找到束缚他的东西。他的眼神似乎已经死了。",
						"french": "Nous devons trouver ce qui le lie. Ses yeux semblaient déjà morts.",
						"spanish": "Debemos encontrar lo que lo ata. Sus ojos ya parecían muertos.",
						"vietnamese": "Chúng ta phải tìm ra thứ đang ràng buộc anh ấy. Ánh mắt anh ấy đã như chết rồi.",
						"thai": "เราต้องหาสิ่งที่ผูกมัดเขา สายตาของเขาดูเหมือนตายแล้ว.",
						"hindi": "हमें उसे बांधने वाली चीज़ ढूंढनी होगी। उसकी आँखें पहले ही मरी हुई लग रही थीं।"
					},
					"type": "speech",
					"speaker": "bex",
					"emotion": "sad"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이대로 둘 수는 없어. 진실을 밝혀야 해.",
						"english": "We can't leave it like this. We must uncover the truth.",
						"japanese": "このままにはしておけない。真実を明らかにしなければ。",
						"chinese": "我们不能就这样。必须揭露真相。",
						"french": "Nous ne pouvons pas laisser ça comme ça. Nous devons révéler la vérité.",
						"spanish": "No podemos dejarlo así. Debemos descubrir la verdad.",
						"vietnamese": "Không thể để mọi chuyện như thế này được. Chúng ta phải phơi bày sự thật.",
						"thai": "เราปล่อยมันไว้แบบนี้ไม่ได้ เราต้องเปิดเผยความจริง.",
						"hindi": "हम इसे ऐसे नहीं छोड़ सकते। हमें सच्चाई उजागर करनी होगी।"
					},
					"emotion": "angry",
					"speaker": "character_3"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어두운 그림자가 그들의 결의를 비웃듯, 도시를 뒤덮었다.",
						"english": "Dark shadows engulfed the city, as if mocking their resolve.",
						"japanese": "暗い影が彼らの決意をあざ笑うかのように、街を覆った。",
						"chinese": "黑暗的阴影笼罩了城市，仿佛在嘲笑他们的决心。",
						"french": "Des ombres sombres ont englouti la ville, comme pour se moquer de leur détermination.",
						"spanish": "Sombras oscuras envolvieron la ciudad, como burlándose de su determinación.",
						"vietnamese": "Bóng tối bao trùm thành phố, như thể chế giễu quyết tâm của họ.",
						"thai": "เงามืดปกคลุมเมือง ราวกับเยาะเย้ยความมุ่งมั่นของพวกเขา.",
						"hindi": "अंधेरी परछाइयों ने शहर को घेर लिया, मानो उनके संकल्प का मज़ाक उड़ा रही हों।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"emotion": "sad",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…겨우 이걸로… 끝낼 수 없을 텐데….",
						"english": "…This alone… won't be enough to end it…",
						"japanese": "…これだけでは…終わらせられないだろう…",
						"chinese": "…仅仅这样…还无法结束吧…",
						"french": "…Ce n'est pas… avec ça que ça finira…",
						"spanish": "…Con esto solo… no se podrá acabar…",
						"vietnamese": "…Chỉ với chừng này… sẽ không thể kết thúc đâu…",
						"thai": "…แค่นี้…คงยังไม่จบลงง่ายๆ…",
						"hindi": "…केवल इससे… यह खत्म नहीं होगा…"
					}
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야!",
						"english": "What are you talking about!",
						"japanese": "何を言ってるんだ！",
						"chinese": "你在说什么！",
						"french": "De quoi parles-tu !",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy!",
						"thai": "พูดอะไรน่ะ!",
						"hindi": "तुम क्या कह रहे हो!"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자는 스러졌지만, 그 잔상은 깊이 남아 도시의 어둠을 말하고 있었다.",
						"english": "The colossal shadow fell, but its afterimage lingered deep, speaking of the city's darkness.",
						"japanese": "巨大な影は消え去ったが、その残像は深く残り、都市の闇を物語っていた。",
						"chinese": "巨大的阴影消散了，但它的残像却深深烙印，诉说着城市的黑暗。",
						"french": "L'ombre colossale est tombée, mais son image rémanente est restée, témoignant des ténèbres de la ville.",
						"spanish": "La sombra colosal cayó, pero su imagen residual perduró, hablando de la oscuridad de la ciudad.",
						"vietnamese": "Bóng tối khổng lồ đã tan biến, nhưng dư ảnh của nó vẫn còn lại sâu sắc, hé lộ sự tăm tối của thành phố.",
						"thai": "เงามืดมหึมาได้สลายไปแล้ว แต่ภาพติดตายังคงอยู่ลึกๆ บ่งบอกถึงความมืดมิดของเมือง",
						"hindi": "विशालकाय छाया गिर गई, लेकिन उसकी परछाई गहराई तक बनी रही, शहर के अंधेरे को बयां करती हुई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"action": "enter",
					"speaker": "bex",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"speaker": "bex",
					"type": "speech",
					"content": {
						"korean": "이건 시작에 불과해. 엘리아스의 진짜 비밀은 아직….",
						"english": "This is just the beginning. Elias's true secret is still…",
						"japanese": "これは始まりに過ぎない。エリアスの本当の秘密はまだ…",
						"chinese": "这只是个开始。埃利亚斯的真正秘密还在…",
						"french": "Ce n'est que le début. Le vrai secret d'Elias est encore…",
						"spanish": "Esto es solo el principio. El verdadero secreto de Elías aún…",
						"vietnamese": "Đây chỉ là khởi đầu. Bí mật thực sự của Elias vẫn còn…",
						"thai": "นี่เป็นแค่จุดเริ่มต้น ความลับที่แท้จริงของเอเลียสยังคง…",
						"hindi": "यह तो बस शुरुआत है। एलियास का असली रहस्य अभी भी…"
					}
				},
				{
					"content": {
						"korean": "그를 구해야 해.",
						"english": "We must save him.",
						"japanese": "彼を救わなければならない。",
						"chinese": "我们必须救他。",
						"french": "Il faut le sauver.",
						"spanish": "Debemos salvarlo.",
						"vietnamese": "Chúng ta phải cứu hắn.",
						"thai": "เราต้องช่วยเขา",
						"hindi": "हमें उसे बचाना होगा।"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "편의점 지하, 잊힌 과거의 잔재가 형상화되어 나타났다.",
						"english": "Beneath the convenience store, remnants of a forgotten past materialized.",
						"japanese": "コンビニの地下、忘れ去られた過去の残滓が具現化した。",
						"chinese": "便利店地下，被遗忘的过去的残余具象化了。",
						"french": "Sous le dépanneur, les vestiges d'un passé oublié se sont matérialisés.",
						"spanish": "Bajo la tienda de conveniencia, los restos de un pasado olvidado se materializaron.",
						"vietnamese": "Dưới tầng hầm cửa hàng tiện lợi, những tàn tích của quá khứ bị lãng quên đã hiện hình.",
						"thai": "ใต้ร้านสะดวกซื้อ เศษซากของอดีตที่ถูกลืมได้ปรากฏเป็นรูปร่างขึ้นมา.",
						"hindi": "सुविधा स्टोर के नीचे, एक भूले हुए अतीत के अवशेष साकार हो गए।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 이 영역을 침범하다니.",
						"english": "How dare you… trespass upon this domain.",
						"japanese": "よくも…この領域を侵犯したな。",
						"chinese": "竟敢…侵犯这个领域。",
						"french": "Comment osez-vous… empiéter sur ce domaine.",
						"spanish": "Cómo te atreves… a invadir este dominio.",
						"vietnamese": "Ngươi dám… xâm phạm lãnh địa này.",
						"thai": "บังอาจ… ล่วงล้ำเข้ามาในอาณาเขตนี้.",
						"hindi": "तुम्हारी हिम्मत कैसे हुई… इस क्षेत्र का अतिक्रमण करने की।"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "네가 엘리아스를 얽매고 있는 건가!",
						"english": "Are you the one binding Elias?!",
						"japanese": "お前がエリアスを縛っているのか！",
						"chinese": "是你束缚了伊利亚斯吗！",
						"french": "C'est toi qui retiens Elias ?!",
						"spanish": "¿Eres tú quien ata a Elías?",
						"vietnamese": "Ngươi là kẻ đang ràng buộc Elias ư?!",
						"thai": "แกคือคนที่ผูกมัดเอเลียสอยู่ใช่ไหม!",
						"hindi": "क्या तुम ही हो जो एलियास को बांधे हुए हो?!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "어리석은 질문. 그는 그저… 제자리를 지킬 뿐.",
						"english": "Foolish question. He merely… holds his place.",
						"japanese": "愚かな質問だ。彼はただ…その場に留まっているだけだ。",
						"chinese": "愚蠢的问题。他只是…原地不动而已。",
						"french": "Question stupide. Il ne fait que… tenir sa place.",
						"spanish": "Pregunta tonta. Él simplemente… mantiene su lugar.",
						"vietnamese": "Câu hỏi ngu ngốc. Hắn ta chỉ… giữ nguyên vị trí mà thôi.",
						"thai": "คำถามโง่ๆ เขาแค่… ยืนอยู่ตรงนั้นเอง",
						"hindi": "मूर्खतापूर्ण प्रश्न। वह बस… अपनी जगह पर खड़ा है।"
					}
				},
				{
					"content": {
						"korean": "헛소리 마! 비켜!",
						"english": "Nonsense! Get out of my way!",
						"japanese": "戯言を言うな！ 退け！",
						"chinese": "别胡说！让开！",
						"french": "N'importe quoi ! Dégage !",
						"spanish": "¡Tonterías! ¡Quítate del camino!",
						"vietnamese": "Đừng nói nhảm! Tránh ra!",
						"thai": "เหลวไหล! หลีกไป!",
						"hindi": "बकवास बंद करो! हट जाओ!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"content": {
						"korean": "어둠은… 다시… 찾아올 것이다…",
						"english": "Darkness will… return… again…",
						"japanese": "闇は…再び…訪れるだろう…",
						"chinese": "黑暗…会再次…降临…",
						"french": "Les ténèbres… reviendront… encore…",
						"spanish": "La oscuridad… volverá… otra vez…",
						"vietnamese": "Bóng tối… sẽ lại… quay trở lại…",
						"thai": "ความมืด… จะกลับมา… อีกครั้ง…",
						"hindi": "अंधेरा… फिर से… वापस आएगा…"
					},
					"type": "speech",
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "젠장… 아직…!",
						"english": "Damn it… Not yet…!",
						"japanese": "くそ…まだ…！",
						"chinese": "该死…还没…！",
						"french": "Maudit… pas encore… !",
						"spanish": "¡Maldita sea… todavía no…!",
						"vietnamese": "Chết tiệt… vẫn chưa…!",
						"thai": "แย่จริง… ยังไม่ได้…!",
						"hindi": "धिक्कार है… अभी तक नहीं…!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "도시의 음울한 기운은 더욱 짙어졌다.",
						"english": "The city's grim aura deepened even further.",
						"japanese": "都市の陰鬱な気配はさらに濃くなった。",
						"chinese": "城市的阴沉气息更加浓重了。",
						"french": "L'aura lugubre de la ville s'épaissit encore.",
						"spanish": "El aura sombría de la ciudad se hizo aún más densa.",
						"vietnamese": "Khí tức u ám của thành phố càng trở nên đậm đặc hơn.",
						"thai": "บรรยากาศที่มืดมิดของเมืองยิ่งเข้มข้นขึ้น",
						"hindi": "शहर का उदास माहौल और गहरा हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				}
			]
		}
	]
} as const;
