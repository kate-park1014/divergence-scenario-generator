export const scenario_modern_omert_57_03 = {
	"scenario_id": "modern_omert_57_03",
	"order": 3,
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
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "고층 빌딩의 그림자가 미로처럼 얽혀 있었다. 모든 거리가 낯설면서도 익숙한 기시감에 젖어 있었다.",
						"english": "The shadows of skyscrapers intertwined like a labyrinth. Every street was unfamiliar yet tinged with a familiar déjà vu.",
						"japanese": "高層ビルの影が迷路のように絡み合っていた。どの通りも見慣れないのに、どこか見覚えのあるデジャヴュに浸っていた。",
						"chinese": "摩天大楼的影子像迷宫一样交织。每条街道都陌生又带着熟悉的既视感。",
						"french": "Les ombres des gratte-ciel s'entremêlaient comme un labyrinthe. Chaque rue était inconnue et pourtant imprégnée d'un étrange sentiment de déjà-vu.",
						"spanish": "Las sombras de los rascacielos se entrelazaban como un laberinto. Cada calle era extraña y a la vez teñida de un familiar déjà vu.",
						"vietnamese": "Bóng các tòa nhà chọc trời đan xen như mê cung. Mọi con phố đều xa lạ nhưng lại mang một cảm giác quen thuộc đến kỳ lạ.",
						"thai": "เงาของตึกระฟ้าพันกันยุ่งเหยิงเหมือนเขาวงกต ทุกถนนแปลกตาแต่ก็มีความรู้สึกเดจาวูที่คุ้นเคย",
						"hindi": "गगनचुंबी इमारतों की परछाइयाँ एक भूलभुलैया की तरह आपस में उलझी हुई थीं। हर गली अपरिचित थी फिर भी एक परिचित déjà vu से भरी थी।"
					}
				},
				{
					"type": "direction",
					"action": "enter",
					"speaker": "dax",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "도시가… 우리를 보고 있어. 모든 발걸음을…",
						"english": "The city... it's watching us. Every step...",
						"japanese": "都市が…私たちを見ている。全ての足取りを…",
						"chinese": "城市在…看着我们。每一步…",
						"french": "La ville… elle nous observe. Chaque pas…",
						"spanish": "La ciudad... nos está observando. Cada paso...",
						"vietnamese": "Thành phố… đang nhìn chúng ta. Mọi bước chân…",
						"thai": "เมืองนี้… กำลังมองดูเราอยู่ ทุกย่างก้าว…",
						"hindi": "शहर... हमें देख रहा है। हर कदम..."
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저 사람은 누구지?",
						"english": "Who is that person?",
						"japanese": "あの人は誰だ？",
						"chinese": "那个人是谁？",
						"french": "Qui est cette personne?",
						"spanish": "¿Quién es esa persona?",
						"vietnamese": "Người đó là ai?",
						"thai": "คนนั้นเป็นใคร?",
						"hindi": "वह व्यक्ति कौन है?"
					}
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "심판관… 도시 자체가 판관이야.",
						"english": "The Judge... The city itself is the judge.",
						"japanese": "審判官…都市そのものが審判官だ。",
						"chinese": "审判者…城市本身就是审判者。",
						"french": "Le Juge… La ville elle-même est le juge.",
						"spanish": "El Juez... La ciudad misma es el juez.",
						"vietnamese": "Quan tòa… Bản thân thành phố chính là quan tòa.",
						"thai": "ผู้พิพากษา… ตัวเมืองเองคือผู้พิพากษา",
						"hindi": "न्यायाधीश... शहर खुद ही न्यायाधीश है।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "어둠 속에서 낡은 간판이 깜빡였다. 약속의 그림자가 흔들렸다.",
						"english": "In the darkness, an old sign flickered. The shadow of a promise wavered.",
						"japanese": "闇の中で、古い看板が点滅した。約束の影が揺らいだ。",
						"chinese": "在黑暗中，一个旧招牌闪烁着。承诺的影子摇曳不定。",
						"french": "Dans l'obscurité, une vieille enseigne clignotait. L'ombre d'une promesse vacillait.",
						"spanish": "En la oscuridad, un viejo letrero parpadeaba. La sombra de una promesa vacilaba.",
						"vietnamese": "Trong bóng tối, một biển hiệu cũ kỹ nhấp nháy. Bóng của lời hứa lay động.",
						"thai": "ในความมืด ป้ายเก่าๆ กระพริบไหว เงาของคำสัญญาก็สั่นคลอน",
						"hindi": "अंधेरे में, एक पुराना बोर्ड टिमटिमा रहा था। एक वादे की परछाई डगमगा रही थी।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "dax",
					"type": "speech",
					"content": {
						"korean": "그들은 우리를 특정 방향으로 유도하고 있어. 항상… 내가 가는 길은 정해져 있어.",
						"english": "They are guiding us in a specific direction. Always... the path I take is predetermined.",
						"japanese": "彼らは私たちを特定の方向に誘導している。いつも…私の進む道は決まっている。",
						"chinese": "他们正在引导我们走向特定的方向。总是…我走的道路是注定的。",
						"french": "Ils nous guident dans une direction précise. Toujours… le chemin que je prends est prédéterminé.",
						"spanish": "Nos están guiando en una dirección específica. Siempre... el camino que tomo está predeterminado.",
						"vietnamese": "Họ đang dẫn chúng ta đi theo một hướng cụ thể. Luôn luôn… con đường tôi đi đã được định sẵn.",
						"thai": "พวกเขากำลังนำเราไปในทิศทางที่กำหนดเสมอ… ทางที่ฉันไปถูกกำหนดไว้แล้ว",
						"hindi": "वे हमें एक खास दिशा में निर्देशित कर रहे हैं। हमेशा... मेरा रास्ता तय है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "무슨 소리야?",
						"english": "What are you talking about?",
						"japanese": "何を言っているの？",
						"chinese": "你在说什么？",
						"french": "De quoi parles-tu ?",
						"spanish": "¿De qué estás hablando?",
						"vietnamese": "Anh đang nói gì vậy?",
						"thai": "คุณกำลังพูดถึงอะไร?",
						"hindi": "तुम क्या कह रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모든 약속은… 물리적인 형태를 띠고 있어. 깨어지면… 도시가 뒤틀려.",
						"english": "All promises... they take physical form. If broken... the city twists.",
						"japanese": "すべての約束は… 物理的な形をとる。破られれば… 街が歪む。",
						"chinese": "所有的承诺……都有其物理形态。一旦打破……城市就会扭曲。",
						"french": "Toutes les promesses... elles prennent une forme physique. Si elles sont brisées... la ville se tord.",
						"spanish": "Todas las promesas... toman una forma física. Si se rompen... la ciudad se distorsiona.",
						"vietnamese": "Mọi lời hứa... đều mang hình dạng vật lý. Nếu bị phá vỡ... thành phố sẽ méo mó.",
						"thai": "ทุกคำสัญญา... ล้วนมีรูปร่างทางกายภาพ. หากถูกทำลาย... เมืองจะบิดเบี้ยว.",
						"hindi": "सभी वादे... भौतिक रूप लेते हैं। यदि टूटते हैं... शहर विकृत हो जाता है।"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "저 사람… 과거의 집행자라고 들었는데.",
						"english": "That person... I heard they were an enforcer from the past.",
						"japanese": "あの人… 過去の執行者だと聞いたけど。",
						"chinese": "那个人……我听说他是过去的执法者。",
						"french": "Cette personne... j'ai entendu dire qu'elle était une exécutrice du passé.",
						"spanish": "Esa persona... oí que era un ejecutor del pasado.",
						"vietnamese": "Người đó... tôi nghe nói là người thực thi từ quá khứ.",
						"thai": "คนนั้น... ฉันได้ยินว่าเป็นผู้บังคับใช้จากอดีต.",
						"hindi": "वह व्यक्ति... मैंने सुना है कि वह अतीत का एक प्रवर्तक था।"
					},
					"emotion": "base",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"content": {
						"korean": "약속을 지켜야 해… 아니면… 도시가 심판할 거야.",
						"english": "You must keep your promise... or... the city will judge you.",
						"japanese": "約束を守らなければ… さもなくば… 街が裁くぞ。",
						"chinese": "你必须遵守承诺……否则……城市会审判你。",
						"french": "Tu dois tenir ta promesse... sinon... la ville te jugera.",
						"spanish": "Debes cumplir tu promesa... o... la ciudad te juzgará.",
						"vietnamese": "Ngươi phải giữ lời hứa... nếu không... thành phố sẽ phán xét ngươi.",
						"thai": "คุณต้องรักษาสัญญา... มิฉะนั้น... เมืองจะตัดสินคุณ.",
						"hindi": "तुम्हें अपना वादा निभाना होगा... वरना... शहर तुम्हें न्याय देगा।"
					},
					"emotion": "angry",
					"speaker": "dax"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거미줄처럼 얽힌 전선들이 하늘을 가로질렀다. 도시의 맥박처럼.",
						"english": "Wires, tangled like spiderwebs, crisscrossed the sky. Like the city's pulse.",
						"japanese": "蜘蛛の巣のように絡み合った電線が空を横切った。まるで都市の脈拍のように。",
						"chinese": "电线如蜘蛛网般缠绕，横贯天空。如同城市的脉搏。",
						"french": "Des fils, emmêlés comme des toiles d'araignées, sillonnaient le ciel. Tel le pouls de la ville.",
						"spanish": "Cables, enredados como telarañas, cruzaban el cielo. Como el pulso de la ciudad.",
						"vietnamese": "Những sợi dây điện chằng chịt như mạng nhện vắt ngang bầu trời. Như nhịp đập của thành phố.",
						"thai": "สายไฟที่พันกันยุ่งเหยิงเหมือนใยแมงมุมพาดผ่านท้องฟ้า. ราวกับชีพจรของเมือง.",
						"hindi": "तार, मकड़ी के जाले की तरह उलझे हुए, आकाश को पार कर रहे थे। शहर की धड़कन की तरह।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "dax",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"content": {
						"korean": "감시자들… 그들이 내 주변을 맴돌고 있어. 내가 뭘 할지 알고 있어.",
						"english": "The Watchers... they're circling around me. They know what I'll do.",
						"japanese": "監視者たち… 彼らが私の周りをうろついている。私が何をしようとしているのか知っている。",
						"chinese": "监视者们……他们在我身边徘徊。他们知道我会做什么。",
						"french": "Les Observateurs... ils tournent autour de moi. Ils savent ce que je vais faire.",
						"spanish": "Los Vigilantes... me están rodeando. Saben lo que haré.",
						"vietnamese": "Những Kẻ Giám Sát... chúng đang lảng vảng quanh tôi. Chúng biết tôi sẽ làm gì.",
						"thai": "ผู้เฝ้ามอง... พวกเขากำลังวนเวียนอยู่รอบตัวฉัน. พวกเขารู้ว่าฉันจะทำอะไร.",
						"hindi": "निगरानी करने वाले... वे मेरे चारों ओर घूम रहे हैं। वे जानते हैं कि मैं क्या करूँगा।"
					},
					"emotion": "sad",
					"speaker": "dax"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "아무도 없는데…?",
						"english": "But there's no one here...?",
						"japanese": "誰もいないけど…？",
						"chinese": "可是没有人啊……？",
						"french": "Mais il n'y a personne... ?",
						"spanish": "¿Pero no hay nadie...?",
						"vietnamese": "Nhưng không có ai mà...?",
						"thai": "แต่ไม่มีใครนี่นา...?",
						"hindi": "लेकिन कोई नहीं है...?"
					}
				},
				{
					"speaker": "dax",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "아니야… 존재해. 이 도시 자체가 계약서야. 우리 모두 갇혔어.",
						"english": "No... they exist. This city itself is a contract. We're all trapped.",
						"japanese": "違う… 存在する。この都市自体が契約書だ。私たちは皆、閉じ込められている。",
						"chinese": "不……他们存在。这座城市本身就是一份契约。我们都被困住了。",
						"french": "Non... ils existent. Cette ville elle-même est un contrat. Nous sommes tous piégés.",
						"spanish": "No... existen. Esta ciudad misma es un contrato. Todos estamos atrapados.",
						"vietnamese": "Không... họ tồn tại. Thành phố này tự nó là một hợp đồng. Tất cả chúng ta đều bị mắc kẹt.",
						"thai": "ไม่ใช่... พวกเขาอยู่จริง. เมืองนี้เองคือสัญญา. พวกเราทุกคนติดกับดัก.",
						"hindi": "नहीं... वे मौजूद हैं। यह शहर खुद एक अनुबंध है। हम सब फंस गए हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "…점점 더 심해지잖아.",
						"english": "...It's getting worse and worse.",
						"japanese": "…だんだんひどくなってるじゃないか。",
						"chinese": "……情况越来越糟了。",
						"french": "...Ça empire de plus en plus.",
						"spanish": "...Cada vez es peor.",
						"vietnamese": "...Càng ngày càng tệ hơn.",
						"thai": "...มันแย่ลงเรื่อยๆ.",
						"hindi": "...यह और भी बदतर होता जा रहा है।"
					},
					"emotion": "sad",
					"speaker": "character_2"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "도시의 심장부로 다가갈수록, 공기는 더 무거워졌다. 도망칠 수 없는 미궁처럼.",
						"english": "As I approached the city's heart, the air grew heavier. Like an inescapable labyrinth.",
						"japanese": "都市の心臓部に近づくにつれて、空気はさらに重くなった。逃れられない迷宮のように。",
						"chinese": "越接近城市的心脏，空气越发沉重。如同一个无法逃脱的迷宫。",
						"french": "À mesure que j'approchais du cœur de la ville, l'air devenait plus lourd. Comme un labyrinthe inéluctable.",
						"spanish": "A medida que me acercaba al corazón de la ciudad, el aire se volvía más pesado. Como un laberinto ineludible.",
						"vietnamese": "Càng tiến gần đến trái tim của thành phố, không khí càng trở nên nặng nề hơn. Như một mê cung không lối thoát.",
						"thai": "เมื่อยิ่งเข้าใกล้ใจกลางเมือง อากาศก็ยิ่งหนักอึ้งขึ้น. ราวกับเขาวงกตที่หนีไม่พ้น.",
						"hindi": "जैसे-जैसे मैं शहर के दिल के करीब पहुँचा, हवा और भी भारी होती गई। एक ऐसे भूलभुलैया की तरह जिससे बचा नहीं जा सकता।"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "dax",
					"type": "direction"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…더 이상은 안 돼. 저 위로 가면 안 돼.",
						"english": "…No more. You mustn't go up there.",
						"japanese": "…もう駄目だ。上に行ってはならない。",
						"chinese": "…不行了。别往上走了。",
						"french": "…Pas plus loin. Ne montez pas là-haut.",
						"spanish": "…Basta. No puedes subir ahí.",
						"vietnamese": "…Không được nữa. Đừng đi lên đó.",
						"thai": "…พอแล้ว. อย่าขึ้นไปข้างบนนั้น.",
						"hindi": "…और नहीं। ऊपर मत जाओ।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "왜? 뭘 숨기고 있는 거야?",
						"english": "Why? What are you hiding?",
						"japanese": "なぜだ？何を隠している？",
						"chinese": "为什么？你在藏什么？",
						"french": "Pourquoi ? Que caches-tu ?",
						"spanish": "¿Por qué? ¿Qué estás ocultando?",
						"vietnamese": "Sao? Ngươi đang giấu cái gì vậy?",
						"thai": "ทำไม? ซ่อนอะไรอยู่?",
						"hindi": "क्यों? क्या छिपा रहे हो?"
					},
					"speaker": "character_any",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "시스템… 그들은 모든 것을 조작해. 우리는 꼭두각시일 뿐이야.",
						"english": "The System… They manipulate everything. We're just puppets.",
						"japanese": "システムが…奴らは全てを操っている。私たちはただの操り人形だ。",
						"chinese": "系统… 他们操控一切。我们只是傀儡。",
						"french": "Le Système… Ils manipulent tout. Nous ne sommes que des marionnettes.",
						"spanish": "El Sistema… Ellos manipulan todo. Solo somos marionetas.",
						"vietnamese": "Hệ thống… Chúng thao túng mọi thứ. Chúng ta chỉ là những con rối.",
						"thai": "ระบบ… พวกมันบงการทุกสิ่ง เราเป็นแค่หุ่นเชิดเท่านั้น",
						"hindi": "सिस्टम… वे सब कुछ नियंत्रित करते हैं। हम सिर्फ कठपुतलियाँ हैं।"
					},
					"speaker": "dax",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "이제 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう戻れない。",
						"chinese": "已经回不去了。",
						"french": "On ne peut plus revenir en arrière.",
						"spanish": "Ya no hay vuelta atrás.",
						"vietnamese": "Không thể quay lại được nữa.",
						"thai": "กลับไปไม่ได้แล้ว.",
						"hindi": "अब वापस नहीं जा सकते।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "멈춰! 그 약속은… 지켜질 수 없어!",
						"english": "Stop! That promise… it can't be kept!",
						"japanese": "やめろ！その約束は…守れない！",
						"chinese": "住手！那个承诺…无法实现！",
						"french": "Arrête ! Cette promesse… ne peut être tenue !",
						"spanish": "¡Detente! Esa promesa… no puede cumplirse.",
						"vietnamese": "Dừng lại! Lời hứa đó… không thể giữ được!",
						"thai": "หยุดนะ! สัญญานั้น… มันรักษาไว้ไม่ได้หรอก!",
						"hindi": "रुको! वह वादा… पूरा नहीं हो सकता!"
					},
					"emotion": "angry",
					"speaker": "dax"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뒤틀린 그림자가 모든 것을 집어삼켰다. 절망이 도시를 덮었다.",
						"english": "The twisted shadow devoured everything. Despair engulfed the city.",
						"japanese": "歪んだ影がすべてを飲み込んだ。絶望が都市を覆った。",
						"chinese": "扭曲的阴影吞噬了一切。绝望笼罩了整座城市。",
						"french": "L'ombre tordue dévora tout. Le désespoir engloutit la ville.",
						"spanish": "La sombra retorcida lo devoró todo. La desesperación envolvió la ciudad.",
						"vietnamese": "Bóng đen méo mó nuốt chửng mọi thứ. Tuyệt vọng bao trùm thành phố.",
						"thai": "เงาบิดเบี้ยวกลืนกินทุกสิ่งสิ้น หายนะปกคลุมเมือง",
						"hindi": "विकृत छाया ने सब कुछ निगल लिया। निराशा ने शहर को घेर लिया।"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "보잘것없는 저항… 너희의 '맹세'는 이미 깨어졌다.",
						"english": "Meaningless resistance... Your 'vow' has already been broken.",
						"japanese": "取るに足らない抵抗… お前たちの「誓い」は、もう破られている。",
						"chinese": "微不足道的抵抗……你们的“誓言”早已被打破。",
						"french": "Résistance futile... Votre 'serment' est déjà brisé.",
						"spanish": "Resistencia inútil... Vuestro 'juramento' ya ha sido roto.",
						"vietnamese": "Sự kháng cự vô nghĩa… 'Lời thề' của các ngươi đã bị phá vỡ rồi.",
						"thai": "การต่อต้านอันไร้ค่า... 'คำมั่น' ของเจ้าถูกทำลายลงแล้ว",
						"hindi": "तुच्छ प्रतिरोध... तुम्हारी 'शपथ' पहले ही टूट चुकी है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not… over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas… encore fini !",
						"spanish": "¡Todavía… no ha terminado!",
						"vietnamese": "Vẫn chưa… kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "포기해라. 이 도시는… 영원히 반복될 것이다.",
						"english": "Give up. This city… will repeat endlessly.",
						"japanese": "諦めろ。この都市は… 永遠に繰り返されるだろう。",
						"chinese": "放弃吧。这座城市… 将永远重复下去。",
						"french": "Abandonne. Cette ville… se répétera éternellement.",
						"spanish": "Ríndete. Esta ciudad… se repetirá eternamente.",
						"vietnamese": "Bỏ cuộc đi. Thành phố này… sẽ lặp lại vĩnh viễn.",
						"thai": "ยอมแพ้ซะเถอะ เมืองนี้… จะวนซ้ำไปตลอดกาล",
						"hindi": "हार मान लो। यह शहर… हमेशा के लिए दोहराया जाएगा।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "세계가 뒤틀린 공간. 거대한 그림자가 심장을 움켜쥐듯 짓누르고 있었다.",
						"english": "A distorted world. A colossal shadow pressed down, as if clutching the heart.",
						"japanese": "世界が歪んだ空間。巨大な影が、心臓を鷲掴みにするように押し潰していた。",
						"chinese": "世界扭曲的空间。巨大的阴影如扼住心脏般压迫而来。",
						"french": "Un espace où le monde est déformé. Une ombre gigantesque oppressait, comme si elle serrait le cœur.",
						"spanish": "Un espacio donde el mundo está retorcido. Una sombra gigantesca oprimía, como si apretara el corazón.",
						"vietnamese": "Không gian thế giới méo mó. Một bóng đen khổng lồ đè nặng, như nắm chặt trái tim.",
						"thai": "โลกที่บิดเบี้ยว. เงาขนาดมหึมากดทับลงมา ราวกับกำหัวใจไว้แน่น.",
						"hindi": "विकृत अंतरिक्ष की दुनिया। एक विशाल छाया दिल को जकड़ते हुए, नीचे की ओर दब रही थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔군… 이 굴레에 갇힌 자들.",
						"english": "So you've arrived… you who are trapped in this cycle.",
						"japanese": "来たか…この桎梏に囚われし者たちよ。",
						"chinese": "来了啊… 那些被困于此枷锁中的人。",
						"french": "Vous êtes venus… vous qui êtes piégés dans ce cycle.",
						"spanish": "Habéis llegado… los que estáis atrapados en este ciclo.",
						"vietnamese": "Đã đến rồi à… những kẻ bị mắc kẹt trong vòng xoáy này.",
						"thai": "มาถึงแล้วสินะ… ผู้ที่ถูกขังอยู่ในวังวนนี้.",
						"hindi": "आ गए तुम… इस बंधन में फंसे हुए लोग।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "너… 도시를 조종하는 자냐?",
						"english": "You… are you the one controlling the city?",
						"japanese": "お前が…この街を操る者か？",
						"chinese": "你… 是操控这座城市的人吗？",
						"french": "Toi… es-tu celui qui manipule la ville ?",
						"spanish": "¿Tú… eres quien controla la ciudad?",
						"vietnamese": "Ngươi… là kẻ điều khiển thành phố này sao?",
						"thai": "เจ้า… เป็นผู้บงการเมืองนี้หรือ?",
						"hindi": "तुम… क्या तुम शहर को नियंत्रित करने वाले हो?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "나는 이 도시의 '약속' 그 자체다. 너희의 어리석은 맹세가 만든 존재.",
						"english": "I am the 'Promise' of this city itself. An entity born from your foolish vows.",
						"japanese": "私はこの街の『約束』そのものだ。お前たちの愚かな誓いが作り出した存在。",
						"chinese": "我就是这座城市的‘约定’本身。是你们愚蠢的誓言所创造的存在。",
						"french": "Je suis la 'Promesse' même de cette ville. Une entité née de vos vœux insensés.",
						"spanish": "Soy la 'Promesa' de esta ciudad misma. Una entidad creada por vuestros votos necios.",
						"vietnamese": "Ta chính là 'Lời hứa' của thành phố này. Một thực thể được tạo ra từ những lời thề ngu xuẩn của các ngươi.",
						"thai": "ฉันคือ 'พันธสัญญา' ของเมืองนี้เอง. สิ่งมีชีวิตที่เกิดจากคำสาบานอันโง่เขลาของพวกเจ้า.",
						"hindi": "मैं इस शहर का 'वादा' स्वयं हूँ। तुम्हारे मूर्खतापूर्ण प्रतिज्ञाओं से बना एक अस्तित्व।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "dax",
					"action": "enter"
				},
				{
					"speaker": "dax",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "도망쳐… 여긴… 진짜가 아니야!",
						"english": "Run… This isn't… real!",
						"japanese": "逃げろ…ここは…本物じゃない！",
						"chinese": "快逃… 这里… 不是真的！",
						"french": "Fuyez… Ce n'est… pas réel !",
						"spanish": "Huye… Esto… no es real.",
						"vietnamese": "Chạy đi… Ở đây… không phải thật đâu!",
						"thai": "หนีไป… ที่นี่… ไม่ใช่ของจริง!",
						"hindi": "भागो… यह… असली नहीं है!"
					}
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "저 망상에 사로잡힌 자처럼, 너희도 곧 진실을 외면하게 될 것이다.",
						"english": "Like that deluded one, you too will soon turn away from the truth.",
						"japanese": "あの妄執にとらわれた者のように、お前たちもすぐに真実から目を背けるだろう。",
						"chinese": "像那个被妄想缠身的人一样，你们也很快就会无视真相。",
						"french": "Comme cet obsédé, vous aussi détournerez bientôt les yeux de la vérité.",
						"spanish": "Como ese iluso, vosotros también pronto daréis la espalda a la verdad.",
						"vietnamese": "Giống như kẻ bị ảo tưởng kia, các ngươi cũng sẽ sớm quay lưng lại với sự thật.",
						"thai": "เช่นเดียวกับคนหลงผิดผู้นั้น พวกเจ้าก็จะเมินความจริงในไม่ช้า",
						"hindi": "उस भ्रमित व्यक्ति की तरह, तुम भी जल्द ही सच से मुंह मोड़ लोगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "닥쳐! 우리가 이 굴레를 끝낼 거야!",
						"english": "Silence! We will break this cycle!",
						"japanese": "黙れ！我々がこの呪縛を終わらせる！",
						"chinese": "闭嘴！我们会结束这个循环！",
						"french": "Silence ! Nous briserons ce cycle !",
						"spanish": "¡Cállate! ¡Romperemos este ciclo!",
						"vietnamese": "Im đi! Chúng ta sẽ chấm dứt xiềng xích này!",
						"thai": "หุบปาก! เราจะยุติวงจรนี้เอง!",
						"hindi": "चुप रहो! हम इस बंधन को तोड़ेंगे!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래 봐야, 또 다른 약속의 노예가 될 뿐.",
						"english": "Even so, you'll only become slaves to another promise.",
						"japanese": "それでも、お前たちは別の約束の奴隷になるだけだ。",
						"chinese": "就算如此，你们也只会成为另一个誓言的奴隶。",
						"french": "Cela ne fera que vous rendre esclaves d'une autre promesse.",
						"spanish": "Aun así, solo os convertiréis en esclavos de otra promesa.",
						"vietnamese": "Dù sao thì, các ngươi cũng chỉ trở thành nô lệ của một lời hứa khác.",
						"thai": "ทำไปก็เท่านั้น เจ้าก็จะเป็นเพียงทาสของคำมั่นสัญญาอื่น",
						"hindi": "फिर भी, तुम बस एक और वादे के गुलाम बनोगे।"
					},
					"speaker": "random_boss",
					"emotion": "base"
				},
				{
					"action": "exit",
					"speaker": "dax",
					"direction": "down",
					"type": "direction",
					"duration_ms": 400
				}
			],
			"win_dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 찢겨졌다. 잠시나마 도시의 숨통이 트이는 듯했다.",
						"english": "The massive shadow was torn apart. For a moment, the city seemed to breathe again.",
						"japanese": "巨大な影が引き裂かれた。一瞬、都市は息を吹き返したかのようだった。",
						"chinese": "巨大的阴影被撕裂。城市仿佛暂时喘了口气。",
						"french": "L'ombre gigantesque fut déchirée. Un instant, la ville sembla respirer à nouveau.",
						"spanish": "La enorme sombra fue desgarrada. Por un momento, la ciudad pareció respirar de nuevo.",
						"vietnamese": "Bóng đen khổng lồ bị xé toạc. Trong chốc lát, thành phố dường như đã thở phào nhẹ nhõm.",
						"thai": "เงาทะมึนถูกฉีกออกชิ้น เมืองดูเหมือนจะได้หายใจอีกครั้งชั่วครู่",
						"hindi": "विशाल छाया फट गई। एक पल के लिए, शहर ने फिर से सांस ली।"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이겼어…?",
						"english": "We… won?",
						"japanese": "勝った…のか？",
						"chinese": "我们…赢了？",
						"french": "Nous… avons gagné ?",
						"spanish": "¿Hemos… ganado?",
						"vietnamese": "Chúng ta… thắng rồi sao?",
						"thai": "เรา… ชนะแล้วหรือ?",
						"hindi": "हम… जीत गए?"
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…어리석은 선택. 너희는 그저 새로운 '맹세'를 찾을 뿐.",
						"english": "...A foolish choice. You will merely seek a new 'vow'.",
						"japanese": "…愚かな選択。お前たちはただ、新たな「誓い」を探すだけだ。",
						"chinese": "……愚蠢的选择。你们只是在寻找新的“誓言”而已。",
						"french": "...Un choix insensé. Vous ne ferez que chercher un nouveau 'serment'.",
						"spanish": "...Una elección estúpida. Solo buscaréis una nueva 'promesa'.",
						"vietnamese": "…Một lựa chọn ngu ngốc. Các ngươi sẽ chỉ tìm kiếm một 'lời thề' mới mà thôi.",
						"thai": "...ทางเลือกที่โง่เขลา เจ้าจะแค่แสวงหา 'คำมั่น' ใหม่เท่านั้น",
						"hindi": "...एक मूर्खतापूर्ण चुनाव। तुम बस एक नया 'शपथ' खोजोगे।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직 끝이 아니야. 뭔가 더 있어.",
						"english": "It's not over yet. There's something more.",
						"japanese": "まだ終わりじゃない。何かもっとある。",
						"chinese": "还没结束。还有别的东西。",
						"french": "Ce n'est pas encore fini. Il y a quelque chose de plus.",
						"spanish": "Aún no ha terminado. Hay algo más.",
						"vietnamese": "Chưa kết thúc đâu. Còn điều gì đó nữa.",
						"thai": "ยังไม่จบแค่นี้ มีบางอย่างอีก",
						"hindi": "अभी खत्म नहीं हुआ है। कुछ और है।"
					},
					"speaker": "character_1",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "승리였을까. 아니면, 더 깊은 루프의 시작이었을까. 도시는 여전히 침묵하고 있었다.",
						"english": "Was it a victory? Or the beginning of a deeper loop? The city remained silent.",
						"japanese": "勝利だったのか。それとも、より深いループの始まりだったのか。都市は依然として沈黙していた。",
						"chinese": "是胜利吗？还是更深层循环的开始？城市依然一片寂静。",
						"french": "Était-ce une victoire ? Ou le début d'une boucle plus profonde ? La ville restait silencieuse.",
						"spanish": "¿Fue una victoria? ¿O el comienzo de un bucle más profundo? La ciudad seguía en silencio.",
						"vietnamese": "Đây là chiến thắng ư? Hay là khởi đầu của một vòng lặp sâu hơn? Thành phố vẫn chìm trong im lặng.",
						"thai": "นี่คือชัยชนะหรือ? หรือจุดเริ่มต้นของห้วงวนที่ลึกกว่ากัน? เมืองยังคงเงียบงัน",
						"hindi": "क्या यह जीत थी? या एक गहरे लूप की शुरुआत? शहर अभी भी खामोश था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"폐허가 된 도시. 끊임없이 뒤틀린 그림자 속.",
			"전설 속 '침묵의 서약'이 현실을 잠식했다.",
			"망상에 갇힌 자, 도시의 눈을 이야기한다.",
			"모든 약속은 물리적인 감시가 된다."
		],
		"english": [
			"Ruined city. Amidst ceaselessly twisted shadows.",
			"The legendary 'Pact of Silence' has encroached upon reality.",
			"Trapped in delusion, one speaks of the city's eyes.",
			"Every promise becomes a physical surveillance."
		],
		"japanese": [
			"廃墟と化した都市。絶えず歪む影の中。",
			"伝説の「沈黙の誓約」が現実を侵食した。",
			"妄想に囚われた者、都市の目を語る。",
			"全ての約束は物理的な監視となる。"
		],
		"chinese": [
			"废墟城市。在不断扭曲的阴影中。",
			"传说中的“沉默誓约”侵蚀了现实。",
			"困于妄想之人，谈论着城市的眼睛。",
			"所有的承诺都变成了物理监视。"
		],
		"french": [
			"Ville en ruines. Au milieu d'ombres tordues sans cesse.",
			"Le légendaire «Pacte du Silence» a empiété sur la réalité.",
			"Piégé dans l'illusion, on parle des yeux de la ville.",
			"Chaque promesse devient une surveillance physique."
		],
		"spanish": [
			"Ciudad en ruinas. Entre sombras retorcidas sin cesar.",
			"El legendario \"Pacto del Silencio\" ha invadido la realidad.",
			"Atrapado en el delirio, uno habla de los ojos de la ciudad.",
			"Cada promesa se convierte en una vigilancia física."
		],
		"vietnamese": [
			"Thành phố hoang tàn. Giữa những bóng hình vặn vẹo không ngừng.",
			"'Lời thề im lặng' trong truyền thuyết đã xâm chiếm thực tại.",
			"Kẻ bị giam cầm trong ảo tưởng, nói về đôi mắt của thành phố.",
			"Mọi lời hứa đều trở thành sự giám sát vật lý."
		],
		"thai": [
			"เมืองที่ถูกทำลาย ล้อมรอบด้วยเงาที่บิดเบี้ยวไม่หยุดหย่อน",
			"'พันธสัญญาแห่งความเงียบ' ในตำนานได้คุกคามความเป็นจริง",
			"ผู้ที่ติดอยู่ในภาพลวงตา พูดถึงดวงตาของเมือง",
			"ทุกคำสัญญาจะกลายเป็นการเฝ้าระวังทางกายภาพ"
		],
		"hindi": [
			"खंडहर हुआ शहर। लगातार मुड़ी हुई परछाइयों के बीच।",
			"किंवदंती का 'मौन का समझौता' वास्तविकता पर हावी हो गया है।",
			"भ्रम में फंसा हुआ व्यक्ति, शहर की आँखों की बात करता है।",
			"हर वादा एक शारीरिक निगरानी बन जाता है।"
		]
	}
} as const;
