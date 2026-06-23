export const scenario_modern_elias_72_03 = {
	"scenario_id": "modern_elias_72_03",
	"order": 3,
	"act": "rising",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "낡은 사진 한 장이 진실의 조각을 품고 있었다.",
						"english": "An old photograph held a piece of the truth.",
						"japanese": "一枚の古い写真が真実の断片を抱いていた。",
						"chinese": "一张旧照片承载着真相的碎片。",
						"french": "Une vieille photographie contenait un fragment de vérité.",
						"spanish": "Una vieja fotografía guardaba un fragmento de la verdad.",
						"vietnamese": "Một bức ảnh cũ chứa đựng một mảnh sự thật.",
						"thai": "ภาพถ่ายเก่าแก่เก็บซ่อนชิ้นส่วนแห่งความจริงไว้",
						"hindi": "एक पुरानी तस्वीर में सच्चाई का एक टुकड़ा था।"
					},
					"speaker": "narrator"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "lin",
					"type": "direction"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 사진… 분석이 끝났어.",
						"english": "This photo… analysis complete.",
						"japanese": "この写真…分析が終わったよ。",
						"chinese": "这张照片……分析完成了。",
						"french": "Cette photo… l'analyse est terminée.",
						"spanish": "Esta foto… el análisis ha terminado.",
						"vietnamese": "Bức ảnh này… đã phân tích xong rồi.",
						"thai": "รูปนี้... วิเคราะห์เสร็จแล้ว",
						"hindi": "यह तस्वीर… विश्लेषण पूरा हो गया है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "알아낸 게 뭐야?",
						"english": "What did you find?",
						"japanese": "何が分かったの？",
						"chinese": "你发现了什么？",
						"french": "Qu'as-tu découvert ?",
						"spanish": "¿Qué descubriste?",
						"vietnamese": "Bạn đã tìm ra gì rồi?",
						"thai": "เจออะไรบ้าง?",
						"hindi": "क्या पता चला?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이곳은 과거 악명 높았던 조직의 아지트였어.",
						"english": "This was once the hideout of a notorious organization.",
						"japanese": "ここはかつて悪名高かった組織のアジトだった。",
						"chinese": "这里曾是一个臭名昭著的组织的藏身处。",
						"french": "C'était autrefois la cachette d'une organisation notoire.",
						"spanish": "Este fue una vez el escondite de una organización notoria.",
						"vietnamese": "Đây từng là căn cứ của một tổ chức khét tiếng.",
						"thai": "ที่นี่เคยเป็นฐานลับขององค์กรที่เลื่องชื่อในอดีต",
						"hindi": "यह कभी एक कुख्यात संगठन का ठिकाना था।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "악명 높은… 조직?",
						"english": "Notorious… organization?",
						"japanese": "悪名高い…組織？",
						"chinese": "臭名昭著的……组织？",
						"french": "Organisation… notoire ?",
						"spanish": "¿Organización… notoria?",
						"vietnamese": "Tổ chức… khét tiếng?",
						"thai": "องค์กร... ที่เลื่องชื่อ?",
						"hindi": "कुख्यात… संगठन?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"speaker": "lin",
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 충격적인 소문이 있어.",
						"english": "There are more shocking rumors.",
						"japanese": "もっと衝撃的な噂があるんだ。",
						"chinese": "还有更令人震惊的传闻。",
						"french": "Il y a des rumeurs encore plus choquantes.",
						"spanish": "Hay rumores aún más impactantes.",
						"vietnamese": "Có những tin đồn gây sốc hơn.",
						"thai": "มีข่าวลือที่น่าตกใจกว่านั้นอีก",
						"hindi": "और भी चौंकाने वाली अफवाहें हैं।"
					},
					"emotion": "base",
					"speaker": "lin"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "소문?",
						"english": "A rumor?",
						"japanese": "「噂？」",
						"chinese": "传闻？",
						"french": "Une rumeur ?",
						"spanish": "¿Un rumor?",
						"vietnamese": "Tin đồn?",
						"thai": "ข่าวลือ?",
						"hindi": "अफवाह?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "엘리아스가 밤마다 끔찍한 악몽에 시달린대.",
						"english": "Elias is tormented by terrible nightmares every night.",
						"japanese": "「エリアスは毎晩、恐ろしい悪夢にうなされているらしい。」",
						"chinese": "听说埃利亚斯每晚都饱受噩梦折磨。",
						"french": "Il paraît qu'Elias est tourmenté par de terribles cauchemars toutes les nuits.",
						"spanish": "Dicen que Elias sufre pesadillas horribles cada noche.",
						"vietnamese": "Nghe nói Elias bị dày vò bởi những cơn ác mộng kinh hoàng mỗi đêm.",
						"thai": "ว่ากันว่าอีไลแอสถูกทรมานด้วยฝันร้ายอันน่าสะพรึงกลัวทุกคืน",
						"hindi": "सुना है एलियास को हर रात भयानक बुरे सपने आते हैं।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "잠꼬대로 '속죄'를 중얼거린다고.",
						"english": "He mumbles 'atonement' in his sleep.",
						"japanese": "「寝言で『贖罪』と呟いていると。」",
						"chinese": "他睡梦中会喃喃自语‘赎罪’。",
						"french": "Il murmure 'expiation' dans son sommeil.",
						"spanish": "Murmura 'expiación' mientras duerme.",
						"vietnamese": "Hắn ta lẩm bẩm 'chuộc tội' trong giấc ngủ.",
						"thai": "เขาส่งเสียงพึมพำ 'การไถ่บาป' ในยามหลับใหล",
						"hindi": "वह नींद में 'प्रायश्चित्त' बुदबुदाता है।"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "속죄… 라니?",
						"english": "Atonement... you say?",
						"japanese": "「贖罪…だと？」",
						"chinese": "赎罪…是何意？",
						"french": "Expiation… tu dis ?",
						"spanish": "¿Expiación… dices?",
						"vietnamese": "Chuộc tội... sao?",
						"thai": "การไถ่บาป... อะไรนะ?",
						"hindi": "प्रायश्चित्त… क्या?"
					},
					"speaker": "character_any"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "lin",
					"emotion": "base",
					"content": {
						"korean": "그 조직은 잔혹하기로 유명했어. 특히 배신자 처리가.",
						"english": "That organization was infamous for its cruelty, especially how it dealt with traitors.",
						"japanese": "「あの組織は残虐さで有名だった。特に裏切り者の処刑方法は。」",
						"chinese": "那个组织以残忍著称，尤其是在处理叛徒方面。",
						"french": "Cette organisation était réputée pour sa cruauté, surtout envers les traîtres.",
						"spanish": "Esa organización era famosa por su crueldad, sobre todo con los traidores.",
						"vietnamese": "Tổ chức đó nổi tiếng tàn bạo, đặc biệt là cách xử lý kẻ phản bội.",
						"thai": "องค์กรนั้นขึ้นชื่อเรื่องความโหดเหี้ยม โดยเฉพาะการจัดการกับคนทรยศ",
						"hindi": "वह संगठन अपनी क्रूरता के लिए कुख्यात था, खासकर गद्दारों से निपटने के तरीके के लिए।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그게 엘리아스랑 무슨 상관인데?",
						"english": "What does that have to do with Elias?",
						"japanese": "「それがエリアスとどう関係するんだ？」",
						"chinese": "这和埃利亚斯有什么关系？",
						"french": "Quel est le rapport avec Elias ?",
						"spanish": "¿Qué tiene eso que ver con Elias?",
						"vietnamese": "Chuyện đó liên quan gì đến Elias?",
						"thai": "แล้วนั่นมันเกี่ยวอะไรกับอีไลแอส?",
						"hindi": "इसका एलियास से क्या संबंध है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"content": {
						"korean": "아직 확실하진 않아. 하지만… 엘리아스가 겪는 악몽과 조직의 만행이 묘하게 겹쳐.",
						"english": "It's not certain yet. But... Elias's nightmares and the organization's atrocities strangely overlap.",
						"japanese": "「まだ確実ではない。だが…エリアスの悪夢と組織の蛮行が奇妙に重なるんだ。」",
						"chinese": "现在还不确定。但是…埃利亚斯的噩梦和组织的暴行诡异地重叠了。",
						"french": "Rien n'est encore certain. But… les cauchemars d'Elias et les atrocités de l'organisation se recoupent étrangement.",
						"spanish": "Aún no es seguro. Pero… las pesadillas de Elias y las atrocidades de la organización se solapan extrañamente.",
						"vietnamese": "Chưa chắc chắn. Nhưng... những cơn ác mộng của Elias và tội ác của tổ chức trùng khớp một cách kỳ lạ.",
						"thai": "ยังไม่แน่ชัดนัก แต่... ฝันร้ายของอีไลแอสกับการกระทำโหดร้ายขององค์กรกลับทับซ้อนกันอย่างประหลาด",
						"hindi": "अभी निश्चित नहीं है। लेकिन... एलियास के बुरे सपने और संगठन के अत्याचार अजीब तरह से मेल खाते हैं।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "설마… 엘리아스가 그 조직과 관련 있는 건가?",
						"english": "Could it be... Elias is involved with that organization?",
						"japanese": "「まさか…エリアスがあの組織と関係があるのか？」",
						"chinese": "难道…埃利亚斯和那个组织有关联？",
						"french": "Serait-ce… qu'Elias est lié à cette organisation ?",
						"spanish": "¿Será… que Elias está involucrado con esa organización?",
						"vietnamese": "Chẳng lẽ... Elias có liên quan đến tổ chức đó sao?",
						"thai": "หรือว่า... อีไลแอสเกี่ยวข้องกับองค์กรนั้น?",
						"hindi": "कहीं… एलियास का उस संगठन से संबंध तो नहीं?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_1"
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
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "이 진실은… 우리가 생각하는 것보다 훨씬 더러울지도 몰라.",
						"english": "This truth… might be far fouler than we imagine.",
						"japanese": "「この真実は…我々が思っているよりもずっと汚いかもしれない。」",
						"chinese": "这个真相…或许比我们想象的要肮脏得多。",
						"french": "Cette vérité… pourrait être bien plus sordide que nous ne l'imaginons.",
						"spanish": "Esta verdad… podría ser mucho más sucia de lo que pensamos.",
						"vietnamese": "Sự thật này... có lẽ còn bẩn thỉu hơn chúng ta nghĩ rất nhiều.",
						"thai": "ความจริงนี้... อาจจะสกปรกกว่าที่เราคิดไว้มากนัก",
						"hindi": "यह सच… जितना हम सोचते हैं, उससे कहीं ज़्यादा गंदा हो सकता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "멈출 수 없어. 끝까지 가야 해.",
						"english": "We can't stop. We have to see this through to the end.",
						"japanese": "「止められない。最後まで行かなければならない。」",
						"chinese": "不能停下。必须走到最后。",
						"french": "On ne peut pas s'arrêter. Il faut aller jusqu'au bout.",
						"spanish": "No podemos parar. Tenemos que ir hasta el final.",
						"vietnamese": "Không thể dừng lại. Phải đi đến cùng.",
						"thai": "หยุดไม่ได้ เราต้องไปให้สุดทาง",
						"hindi": "हम रुक नहीं सकते। हमें अंत तक जाना होगा।"
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그래… 하지만 조심해야 해. 이 모든 게 누군가의 함정일 수도 있어.",
						"english": "Right... but be careful. This could all be someone's trap.",
						"japanese": "そう… でも、気をつけろ。これは誰かの罠かもしれん。",
						"chinese": "没错……但你必须小心。这一切可能都是某人的陷阱。",
						"french": "Oui... mais sois prudent. Tout cela pourrait être un piège.",
						"spanish": "Sí... pero ten cuidado. Todo esto podría ser una trampa.",
						"vietnamese": "Phải... nhưng hãy cẩn thận. Tất cả những điều này có thể là bẫy của ai đó.",
						"thai": "ใช่... แต่ต้องระวังให้ดี ทั้งหมดนี้อาจเป็นกับดักของใครบางคน",
						"hindi": "हाँ... लेकिन सावधान रहना। यह सब किसी का जाल हो सकता है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "lin"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "오래된 죄악의 냄새가 도시를 뒤덮었다.",
						"english": "The scent of ancient sin engulfed the city.",
						"japanese": "古き罪悪の匂いが街を覆った。",
						"chinese": "古老的罪恶气息弥漫了整座城市。",
						"french": "L'odeur d'un ancien péché enveloppa la ville.",
						"spanish": "El olor de un pecado ancestral envolvió la ciudad.",
						"vietnamese": "Mùi tội lỗi cổ xưa bao trùm thành phố.",
						"thai": "กลิ่นอายแห่งบาปโบราณเข้าปกคลุมเมือง",
						"hindi": "प्राचीन पाप की गंध ने शहर को घेर लिया।"
					},
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "크크… 겨우 이 정도라니… 진짜 주인은 따로 있다…",
						"english": "Heh heh... Is that all you've got? The true master is yet to come...",
						"japanese": "クク… この程度とはな… 真の主は別にある…",
						"chinese": "呵呵……就这点本事吗……真正的主人另有其人……",
						"french": "Hé hé... Ce n'est que ça ? Le vrai maître est ailleurs...",
						"spanish": "Je je... ¿Eso es todo lo que tienes? El verdadero maestro es otro...",
						"vietnamese": "Khà khà... Chỉ có thế thôi sao... Chủ nhân thật sự vẫn còn ở đâu đó...",
						"thai": "ฮ่าๆ... แค่ระดับนี้เองหรือ... นายท่านที่แท้จริงยังมีอยู่...",
						"hindi": "ही ही... बस इतना ही? असली मालिक कोई और है..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "무슨 소리야! 끝난 거 아니었어?",
						"english": "What are you talking about! Wasn't it over?",
						"japanese": "何を言っている！終わったんじゃないのか？",
						"chinese": "你在说什么！难道还没结束吗？",
						"french": "De quoi parles-tu ! Ce n'était pas fini ?",
						"spanish": "¡De qué hablas! ¿No había terminado ya?",
						"vietnamese": "Ngươi đang nói gì vậy! Chẳng phải đã kết thúc rồi sao?",
						"thai": "พูดอะไรน่ะ! มันยังไม่จบเหรอ?",
						"hindi": "तुम क्या कह रहे हो! क्या यह खत्म नहीं हुआ था?"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 {random_boss} 뒤로, 더 거대한 그림자가 드리웠다. 진실은 아직 멀리 있었다.",
						"english": "Behind the fallen {random_boss}, an even grander shadow loomed. The truth was still far away.",
						"japanese": "倒れた{random_boss}の背後に、さらに巨大な影が差した。真実はまだ遠かった。",
						"chinese": "在倒下的{random_boss}身后，一个更巨大的阴影笼罩着。真相依然遥远。",
						"french": "Derrière le {random_boss} tombé, une ombre encore plus grande se profilait. La vérité était encore lointaine.",
						"spanish": "Detrás del {random_boss} caído, una sombra aún más grande se cernía. La verdad aún estaba lejos.",
						"vietnamese": "Đằng sau {random_boss} đã gục ngã, một bóng tối khổng lồ hơn lại bao trùm. Sự thật vẫn còn xa vời.",
						"thai": "เบื้องหลัง {random_boss} ที่ล้มลง เงาที่ยิ่งใหญ่กว่าก็ทอดเข้ามา ความจริงยังคงอยู่อีกไกล",
						"hindi": "गिरे हुए {random_boss} के पीछे, एक और बड़ी छाया मंडरा रही थी। सत्य अभी भी दूर था।"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 거대한 그림자가 모습을 드러냈다.",
						"english": "A colossal shadow emerged from the darkness.",
						"japanese": "闇の中から巨大な影が現れた。",
						"chinese": "一道巨大的阴影从黑暗中显现。",
						"french": "Une ombre colossale émergea de l'obscurité.",
						"spanish": "Una sombra colosal emergió de la oscuridad.",
						"vietnamese": "Một bóng tối khổng lồ hiện ra từ bóng đêm.",
						"thai": "เงาร่างมหึมาปรากฏขึ้นจากความมืดมิด",
						"hindi": "अंधेरे से एक विशाल छाया निकली।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "감히… 나의 환상을 깨려는가?",
						"english": "How dare you... try to shatter my illusion?",
						"japanese": "よくも… 我が幻想を打ち破ろうとするか？",
						"chinese": "你竟敢……试图打破我的幻想？",
						"french": "Comment oses-tu... tenter de briser mon illusion ?",
						"spanish": "¿Cómo osas... intentar romper mi ilusión?",
						"vietnamese": "Ngươi dám... phá vỡ ảo ảnh của ta sao?",
						"thai": "บังอาจ... คิดจะทำลายภาพลวงตาของข้าอย่างนั้นรึ?",
						"hindi": "तुम्हारी हिम्मत कैसे हुई... मेरे भ्रम को तोड़ने की कोशिश करने की?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가 이 모든 걸 꾸민 배후인가!",
						"english": "Are you the mastermind behind all this?",
						"japanese": "お前がこの全ての黒幕か！",
						"chinese": "你就是这一切的幕后主使吗！",
						"french": "Es-tu le cerveau derrière tout cela ?",
						"spanish": "¿Eres el cerebro detrás de todo esto?",
						"vietnamese": "Ngươi là kẻ chủ mưu đứng sau tất cả sao!",
						"thai": "แกคือผู้อยู่เบื้องหลังเรื่องทั้งหมดนี่ใช่ไหม!",
						"hindi": "क्या तुम इन सब के पीछे का मास्टरमाइंड हो?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "진실은… 너희를 집어삼킬 것이다.",
						"english": "The truth... will devour you.",
						"japanese": "真実は… お前たちを飲み込むだろう。",
						"chinese": "真相……将吞噬你们。",
						"french": "La vérité... vous dévorera.",
						"spanish": "La verdad... os devorará.",
						"vietnamese": "Sự thật... sẽ nuốt chửng các ngươi.",
						"thai": "ความจริง... จะกลืนกินพวกเจ้า",
						"hindi": "सत्य... तुम्हें निगल जाएगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "어리석은 것들… 진실은 너희가 감당할 수 없어.",
						"english": "Fools... you cannot handle the truth.",
						"japanese": "愚か者ども… 真実はお前たちには耐えられぬ。",
						"chinese": "蠢货们……你们无法承受真相。",
						"french": "Imbéciles... vous ne pouvez pas supporter la vérité.",
						"spanish": "Estúpidos... no podéis soportar la verdad.",
						"vietnamese": "Lũ ngu ngốc... các ngươi không thể chịu đựng được sự thật.",
						"thai": "พวกโง่... ความจริงนั้นพวกเจ้ามิอาจรับได้",
						"hindi": "मूर्खों... तुम सत्य को संभाल नहीं सकते।"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 아직 끝나지 않았어.",
						"english": "No... it's not over yet.",
						"japanese": "いや… まだ終わってない。",
						"chinese": "不……还没有结束。",
						"french": "Non... ce n'est pas encore fini.",
						"spanish": "No... aún no ha terminado.",
						"vietnamese": "Không... vẫn chưa kết thúc đâu.",
						"thai": "ไม่... ยังไม่จบแค่นี้หรอก",
						"hindi": "नहीं... यह अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "다시 와라. 더 깊은 절망을 맛보게 해주마.",
						"english": "Return. I'll make you taste even deeper despair.",
						"japanese": "また来るがいい。より深い絶望を味わわせてやろう。",
						"chinese": "再来吧。我会让你尝到更深的绝望。",
						"french": "Reviens. Je te ferai goûter un désespoir plus profond.",
						"spanish": "Vuelve. Te haré probar una desesperación más profunda.",
						"vietnamese": "Hãy quay lại đi. Ta sẽ cho ngươi nếm trải sự tuyệt vọng sâu sắc hơn nữa.",
						"thai": "กลับมาอีกสิ ข้าจะให้เจ้าได้ลิ้มรสความสิ้นหวังที่ลึกซึ้งกว่านี้",
						"hindi": "फिर से आओ। मैं तुम्हें और गहरी निराशा का स्वाद चखाऊंगा।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"낡은 사진 속, 잊힌 조직의 그림자.",
			"린의 손끝에서 진실의 조각이 맞춰진다.",
			"하지만 엘리아스의 악몽은 더 깊은 곳을 가리키는데…",
			"속죄의 밤, 거짓된 환상이 깨진다."
		],
		"english": [
			"An old photo, shadows of a forgotten organization.",
			"At Lynn's fingertips, fragments of truth align.",
			"But Elias's nightmare points to something deeper…",
			"On the night of atonement, false illusions shatter."
		],
		"japanese": [
			"古びた写真の中、忘れ去られた組織の影。",
			"リンの指先で、真実の断片が組み合わされる。",
			"しかし、エリアスの悪夢はさらに深い場所を指し示す…",
			"贖罪の夜、偽りの幻想が打ち砕かれる。"
		],
		"chinese": [
			"旧照片中，被遗忘组织的阴影。",
			"在琳的指尖，真相的碎片拼凑成形。",
			"然而，埃利亚斯的噩梦指向更深之处…",
			"赎罪之夜，虚假的幻象破碎。"
		],
		"french": [
			"Une vieille photo, l'ombre d'une organisation oubliée.",
			"Au bout des doigts de Lynn, les fragments de vérité s'assemblent.",
			"Mais le cauchemar d'Elias pointe vers quelque chose de plus profond…",
			"La nuit de l'expiation, les fausses illusions volent en éclats."
		],
		"spanish": [
			"Una foto antigua, la sombra de una organización olvidada.",
			"En las yemas de los dedos de Lynn, los fragmentos de la verdad se alinean.",
			"Pero la pesadilla de Elías apunta a algo más profundo…",
			"En la noche de la expiación, las falsas ilusiones se rompen."
		],
		"vietnamese": [
			"Bức ảnh cũ, bóng hình của một tổ chức bị lãng quên.",
			"Dưới ngón tay Lynn, những mảnh ghép sự thật được sắp xếp.",
			"Nhưng ác mộng của Elias chỉ về một nơi sâu thẳm hơn…",
			"Đêm chuộc tội, ảo ảnh giả dối tan vỡ."
		],
		"thai": [
			"ภาพถ่ายเก่า, เงาขององค์กรที่ถูกลืม.",
			"ที่ปลายนิ้วของลินน์ ชิ้นส่วนแห่งความจริงกำลังเรียงตัวกัน",
			"แต่ฝันร้ายของอีเลียสชี้ไปที่สิ่งที่ลึกซึ้งกว่านั้น...",
			"ค่ำคืนแห่งการไถ่บาป ภาพลวงตาจอมปลอมได้พังทลายลง"
		],
		"hindi": [
			"एक पुरानी तस्वीर में, एक भूले हुए संगठन की परछाई।",
			"लिन की उंगलियों पर, सच्चाई के टुकड़े जुड़ते हैं।",
			"लेकिन एलियास का दुःस्वप्न और गहरी बात की ओर इशारा करता है…",
			"प्रायश्चित की रात, झूठे भ्रम टूट जाते हैं।"
		]
	}
} as const;
