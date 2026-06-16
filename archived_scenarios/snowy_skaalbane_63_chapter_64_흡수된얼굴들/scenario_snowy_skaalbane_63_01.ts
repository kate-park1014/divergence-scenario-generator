export const scenario_snowy_skaalbane_63_01 = {
	"scenario_id": "snowy_skaalbane_63_01",
	"order": 1,
	"act": "intro",
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
	"prologue": {
		"korean": [
			"얼음탑, 그 안에 갇힌 시간.",
			"이름을 부르자, 벽이 투명해졌다.",
			"수천의 얼굴이, 마지막 절규 그대로 얼어붙었다.",
			"에이라의 눈이, 잊힌 역사를 읽기 시작했다."
		],
		"english": [
			"The Ice Tower, time trapped within.",
			"Upon calling the name, the walls turned transparent.",
			"Thousands of faces, frozen in their final screams.",
			"Aira's eyes began to read the forgotten history."
		],
		"japanese": [
			"氷の塔、その中に囚われた時間。",
			"名を呼ぶと、壁は透明になった。",
			"数千の顔が、最後の絶叫そのままに凍りついた。",
			"アイラの目が、忘れられた歴史を読み始めた。"
		],
		"chinese": [
			"冰之塔，时间困于其中。",
			"呼唤其名，墙壁变得透明。",
			"数千张面孔，凝固在最后的呐喊中。",
			"艾拉的眼睛，开始解读被遗忘的历史。"
		],
		"french": [
			"La Tour de Glace, le temps y est piégé.",
			"En prononçant le nom, les murs devinrent transparents.",
			"Des milliers de visages, figés dans leurs derniers hurlements.",
			"Les yeux d'Aira commencèrent à lire l'histoire oubliée."
		],
		"spanish": [
			"La Torre de Hielo, el tiempo atrapado en ella.",
			"Al invocar el nombre, los muros se volvieron transparentes.",
			"Miles de rostros, congelados en su último grito.",
			"Los ojos de Aira empezaron a leer la historia olvidada."
		],
		"vietnamese": [
			"Tháp Băng, thời gian bị giam cầm bên trong.",
			"Khi gọi tên, bức tường trở nên trong suốt.",
			"Hàng ngàn khuôn mặt, đóng băng với tiếng kêu cuối cùng.",
			"Đôi mắt của Aira bắt đầu đọc lịch sử đã lãng quên."
		],
		"thai": [
			"หอคอยน้ำแข็ง กาลเวลาที่ถูกขังไว้ภายใน",
			"เมื่อขานนาม กำแพงก็โปร่งใส",
			"ใบหน้าหลายพันใบ ถูกแช่แข็งในเสียงกรีดร้องสุดท้าย",
			"ดวงตาของไอรา เริ่มอ่านประวัติศาสตร์ที่ถูกลืม"
		],
		"hindi": [
			"बर्फ़ का बुर्ज, उसमें फँसा समय।",
			"नाम पुकारते ही, दीवारें पारदर्शी हो गईं।",
			"हजारों चेहरे, अपनी अंतिम चीखों के साथ जमे हुए।",
			"ऐरा की आँखें, भूली हुई कहानी पढ़ने लगीं।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "투명해진 얼음벽. 그 안에 수많은 얼굴이 떠 있었다.",
						"english": "The transparent ice wall. Countless faces floated within.",
						"japanese": "透明になった氷の壁。その中に無数の顔が浮かんでいた。",
						"chinese": "透明的冰墙。无数张面孔漂浮其中。",
						"french": "Le mur de glace transparent. D'innombrables visages y flottaient.",
						"spanish": "La pared de hielo transparente. Incontables rostros flotaban en ella.",
						"vietnamese": "Bức tường băng trong suốt. Vô số khuôn mặt trôi nổi bên trong.",
						"thai": "กำแพงน้ำแข็งโปร่งใส ใบหน้ามากมายลอยอยู่ข้างใน",
						"hindi": "पारदर्शी बर्फ़ की दीवार। उसके अंदर अनगिनत चेहरे तैर रहे थे।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…이게 다 뭐야?",
						"english": "...What is all this?",
						"japanese": "…これ、一体何なの？",
						"chinese": "…这都是什么？",
						"french": "...Qu'est-ce que tout cela ?",
						"spanish": "...¿Qué es todo esto?",
						"vietnamese": "...Đây là gì vậy?",
						"thai": "...นี่มันอะไรกัน?",
						"hindi": "...यह सब क्या है?"
					}
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "…전설로만 듣던. 얼음 속 얼굴들.",
						"english": "...Only heard in legends. Faces in the ice.",
						"japanese": "…伝説でしか聞いたことのない。氷の中の顔たち。",
						"chinese": "…只在传说中听过。冰中的面孔。",
						"french": "...Ce que l'on n'entendait que dans les légendes. Des visages dans la glace.",
						"spanish": "Solo escuchado en leyendas. Caras en el hielo.",
						"vietnamese": "...Chỉ nghe trong truyền thuyết. Những khuôn mặt trong băng.",
						"thai": "...ได้ยินแต่ในตำนาน ใบหน้าในน้ำแข็ง",
						"hindi": "केवल किंवदंतियों में सुना था। बर्फ़ में चेहरे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "저 표정… 뭔가 말하는 것 같아.",
						"english": "Those expressions... they seem to be saying something.",
						"japanese": "あの表情…何かを語りかけているようだ。",
						"chinese": "那些表情…似乎在诉说着什么。",
						"french": "Ces expressions... elles semblent dire quelque chose.",
						"spanish": "Esas expresiones... parecen decir algo.",
						"vietnamese": "Những biểu cảm đó... dường như đang nói điều gì đó.",
						"thai": "สีหน้าเหล่านั้น... ดูเหมือนจะกำลังบอกอะไรบางอย่าง",
						"hindi": "वे भाव... कुछ कह रहे लगते हैं।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "모두 탑의 핵을 향해 기울어 있어. 마치 끌려가듯이.",
						"english": "All are tilted towards the tower's core. As if being pulled.",
						"japanese": "皆、塔の核へと傾いている。まるで引き寄せられるように。",
						"chinese": "都倾向于塔的核心。仿佛被吸引过去。",
						"french": "Tous sont inclinés vers le cœur de la tour. Comme s'ils étaient attirés.",
						"spanish": "Todos están inclinados hacia el núcleo de la torre. Como si fueran atraídos.",
						"vietnamese": "Tất cả đều nghiêng về phía lõi tháp. Như thể bị kéo đi.",
						"thai": "ทั้งหมดเอียงเข้าหาแกนกลางของหอคอย ราวกับถูกดึงดูดไป",
						"hindi": "सभी बुर्ज के केंद्र की ओर झुके हुए हैं। जैसे खींचे जा रहे हों।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "끌려갔다고? 그럼 저게 다…",
						"english": "Pulled away? Then all of this is...",
						"japanese": "引き寄せられたって？じゃあ、これ全部…",
						"chinese": "被吸引过去了？那这些都是…",
						"french": "Attirés ? Alors, tout ça...",
						"spanish": "¿Atraídos? Entonces, todo esto es...",
						"vietnamese": "Bị kéo đi à? Vậy thì tất cả đây là...",
						"thai": "ถูกดึงไปเหรอ? งั้นทั้งหมดนี่ก็...",
						"hindi": "खींचे गए? तो यह सब..."
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…기록되지 않은 역사.",
						"english": "...Unrecorded history.",
						"japanese": "...記録されていない歴史。",
						"chinese": "...未被记载的历史。",
						"french": "...Une histoire non écrite.",
						"spanish": "...Historia no registrada.",
						"vietnamese": "...Lịch sử chưa được ghi lại.",
						"thai": "...ประวัติศาสตร์ที่ไม่ได้ถูกบันทึกไว้",
						"hindi": "...अनालिखित इतिहास।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"speaker": "eira",
					"type": "direction",
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이들의 표정이… 멈춘 절규 그대로야.",
						"english": "Their expressions... frozen screams.",
						"japanese": "彼らの表情は… 凍りついた叫びのままだ。",
						"chinese": "他们的表情… 就像凝固的尖叫。",
						"french": "Leurs expressions... des cris figés.",
						"spanish": "Sus expresiones... gritos congelados.",
						"vietnamese": "Biểu cảm của họ... như những tiếng thét đóng băng.",
						"thai": "สีหน้าของพวกเขา... ราวกับเสียงกรีดร้องที่หยุดนิ่ง",
						"hindi": "उनके भाव... जमे हुए चीख की तरह।"
					}
				},
				{
					"speaker": "character_2",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너무 생생해서 소리가 들리는 것 같아.",
						"english": "So vivid, I can almost hear them.",
						"japanese": "あまりに生々しくて、声が聞こえてくるようだ。",
						"chinese": "如此生动，我仿佛能听到声音。",
						"french": "Si vivant, j'ai l'impression d'entendre des voix.",
						"spanish": "Tan vívido, que casi puedo escucharlos.",
						"vietnamese": "Thật sống động, tôi gần như có thể nghe thấy.",
						"thai": "สดใสจนเหมือนได้ยินเสียง",
						"hindi": "इतना सजीव, मानो मुझे आवाज़ें सुनाई दे रही हों।"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "오래된 룬이 보이지. 이 룬은… 잊힌 부족의 상징.",
						"english": "You see the old runes. These runes... symbols of a forgotten tribe.",
						"japanese": "古いルーンが見える。このルーンは…忘れられた部族の象徴だ。",
						"chinese": "你看到那些古老的符文。这些符文…是失落部落的象征。",
						"french": "Tu vois les vieilles runes. Ces runes... symboles d'une tribu oubliée.",
						"spanish": "Ves las viejas runas. Estas runas... símbolos de una tribu olvidada.",
						"vietnamese": "Bạn thấy những chữ rune cổ. Những chữ rune này... biểu tượng của một bộ lạc bị lãng quên.",
						"thai": "คุณเห็นอักขระรูนโบราณ อักขระรูนเหล่านี้... สัญลักษณ์ของชนเผ่าที่ถูกลืม",
						"hindi": "तुम्हें पुराने रन दिख रहे हैं। ये रन... एक भूली हुई जनजाति के प्रतीक हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "잊힌 부족? 그럼 이 사람들이 전부…",
						"english": "Forgotten tribe? So all these people are...",
						"japanese": "忘れられた部族？じゃあ、この人たちはみんな…",
						"chinese": "失落的部落？那么这些人都是…",
						"french": "Tribu oubliée ? Alors toutes ces personnes sont...",
						"spanish": "¿Tribu olvidada? Entonces toda esta gente es...",
						"vietnamese": "Bộ lạc bị lãng quên? Vậy tất cả những người này là...",
						"thai": "ชนเผ่าที่ถูกลืม? งั้นคนพวกนี้ทั้งหมดก็คือ...",
						"hindi": "भूली हुई जनजाति? तो ये सब लोग..."
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…오랜 세월 동안 탑에 흡수된 존재들.",
						"english": "...Beings absorbed by the tower over ages.",
						"japanese": "…長い年月をかけて塔に吸収された存在たちだ。",
						"chinese": "...经年累月被高塔吸收的存在。",
						"french": "...Des êtres absorbés par la tour au fil des âges.",
						"spanish": "...Seres absorbidos por la torre a lo largo de los siglos.",
						"vietnamese": "...Những sinh vật bị tháp hấp thụ qua nhiều thời đại.",
						"thai": "...สิ่งมีชีวิตที่ถูกหอคอยกลืนกินมานับศตวรรษ",
						"hindi": "...सदियों से मीनार द्वारा अवशोषित प्राणी।"
					},
					"speaker": "eira"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction",
					"speaker": "eira"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이들은 수천 년에 걸쳐… 하나씩 삼켜진 거야.",
						"english": "They were... swallowed one by one over thousands of years.",
						"japanese": "彼らは数千年にわたって…一つずつ飲み込まれていったんだ。",
						"chinese": "他们…在数千年中一个接一个地被吞噬了。",
						"french": "Ils ont été... engloutis un par un au fil des millénaires.",
						"spanish": "Fueron... engullidos uno por uno durante miles de años.",
						"vietnamese": "Họ đã bị... nuốt chửng từng người một qua hàng nghìn năm.",
						"thai": "พวกเขาถูก... กลืนกินไปทีละคนตลอดหลายพันปี",
						"hindi": "वे... हज़ारों सालों से एक-एक करके निगले गए हैं।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "character_3",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "삼켜졌다고? 무슨 말이야?",
						"english": "Swallowed? What do you mean?",
						"japanese": "飲み込まれたって？どういうことだ？",
						"chinese": "被吞噬了？什么意思？",
						"french": "Engloutis ? Qu'est-ce que tu veux dire ?",
						"spanish": "¿Engullidos? ¿Qué quieres decir?",
						"vietnamese": "Bị nuốt chửng? Ý bạn là gì?",
						"thai": "ถูกกลืนกิน? หมายความว่าไง?",
						"hindi": "निगले गए? तुम्हारा क्या मतलब है?"
					}
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "룬과 기록이 말하고 있어. 탑은 그들의 이름과 기억을 흡수해.",
						"english": "The runes and records tell the tale. The tower absorbs their names and memories.",
						"japanese": "ルーンと記録が語っている。塔は彼らの名前と記憶を吸収する。",
						"chinese": "符文和记录说明了一切。高塔吸收了他们的名字和记忆。",
						"french": "Les runes et les archives le racontent. La tour absorbe leurs noms et leurs souvenirs.",
						"spanish": "Las runas y los registros lo cuentan. La torre absorbe sus nombres y recuerdos.",
						"vietnamese": "Các chữ rune và ghi chép đã kể lại. Ngọn tháp hấp thụ tên và ký ức của họ.",
						"thai": "อักขระรูนและบันทึกบอกเล่าเรื่องราว หอคอยดูดซับชื่อและความทรงจำของพวกเขา",
						"hindi": "रन और अभिलेख बताते हैं। मीनार उनके नाम और यादें सोख लेती है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그럼 우린 어떻게 되는 거야? 우리도…",
						"english": "Then what about us? Will we also...",
						"japanese": "じゃあ、私たちはどうなるの？私たちも…",
						"chinese": "那我们呢？我们也会…",
						"french": "Alors, qu'est-ce qu'il va nous arriver ? Nous aussi...",
						"spanish": "¿Entonces qué será de nosotros? ¿Nosotros también...?",
						"vietnamese": "Vậy còn chúng ta thì sao? Chúng ta cũng sẽ...",
						"thai": "แล้วพวกเราล่ะจะเป็นยังไง? พวกเราก็จะ...",
						"hindi": "तो हमारा क्या होगा? क्या हम भी..."
					},
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "…이들의 비극을 끝내야 해.",
						"english": "...We must end their tragedy.",
						"japanese": "「…彼らの悲劇を終わらせなければ。」",
						"chinese": "“……必须结束他们的悲剧。”",
						"french": "« ...Il faut mettre fin à leur tragédie. »",
						"spanish": "« ...Debemos poner fin a su tragedia. »",
						"vietnamese": "...Phải kết thúc bi kịch của họ.",
						"thai": "...ต้องยุติโศกนาฏกรรมของพวกเขา",
						"hindi": "...हमें इनकी त्रासदी समाप्त करनी होगी।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "깊이 들어올수록, 얼음 속 얼굴들이 더 선명해져.",
						"english": "The deeper we go, the clearer the faces in the ice become.",
						"japanese": "「奥へ進むほど、氷の中の顔が鮮明になる。」",
						"chinese": "“越深入，冰中的面孔越清晰。”",
						"french": "« Plus on s'enfonce, plus les visages dans la glace deviennent nets. »",
						"spanish": "« Cuanto más profundo vamos, más claras se vuelven las caras en el hielo. »",
						"vietnamese": "Càng vào sâu, những khuôn mặt trong băng càng rõ nét.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่ ใบหน้าในน้ำแข็งก็ยิ่งชัดเจนขึ้นเท่านั้น",
						"hindi": "जितना गहरा हम जाते हैं, बर्फ़ में चेहरे उतने ही स्पष्ट होते जाते हैं।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "더 이상 뒤로 돌아갈 수 없어.",
						"english": "There's no turning back now.",
						"japanese": "「もう後戻りはできない。」",
						"chinese": "“已无法回头。”",
						"french": "« On ne peut plus reculer. »",
						"spanish": "« Ya no hay vuelta atrás. »",
						"vietnamese": "Không thể quay lại nữa rồi.",
						"thai": "กลับหลังไม่ได้แล้ว",
						"hindi": "अब और पीछे नहीं मुड़ सकते।"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "이들의 역사를 읽어야 해. 그래야… 모든 것을 이해할 수 있어.",
						"english": "We must read their history. Only then... can we understand everything.",
						"japanese": "「彼らの歴史を読まねば。そうすれば…すべてを理解できる。」",
						"chinese": "“必须阅读他们的历史。只有这样……才能理解一切。”",
						"french": "« Nous devons lire leur histoire. Ce n'est qu'ainsi... que nous pourrons tout comprendre. »",
						"spanish": "« Debemos leer su historia. Solo así... podremos entenderlo todo. »",
						"vietnamese": "Chúng ta phải đọc lịch sử của họ. Chỉ khi đó... mới có thể hiểu được mọi chuyện.",
						"thai": "เราต้องอ่านประวัติศาสตร์ของพวกเขา ถึงจะเข้าใจทุกสิ่งได้",
						"hindi": "हमें इनके इतिहास को पढ़ना होगा। तभी... हम सब कुछ समझ पाएंगे।"
					},
					"emotion": "base",
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리가 정말 이걸 끝낼 수 있을까?",
						"english": "Can we really end this?",
						"japanese": "「本当にこれを終わらせられるのか？」",
						"chinese": "“我们真能结束这一切吗？”",
						"french": "« Pouvons-nous vraiment y mettre fin ? »",
						"spanish": "« ¿Realmente podemos acabar con esto? »",
						"vietnamese": "Chúng ta có thực sự kết thúc được chuyện này không?",
						"thai": "เราจะจบเรื่องนี้ได้จริงเหรอ?",
						"hindi": "क्या हम सच में इसे खत्म कर पाएंगे?"
					},
					"emotion": "sad",
					"speaker": "character_4"
				},
				{
					"speaker": "eira",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리는 기록하고 기억할 거야.",
						"english": "We will record and remember.",
						"japanese": "「我々は記録し、記憶する。」",
						"chinese": "“我们将记录并铭记。”",
						"french": "« Nous enregistrerons et nous nous souviendrons. »",
						"spanish": "« Registraremos y recordaremos. »",
						"vietnamese": "Chúng ta sẽ ghi lại và ghi nhớ.",
						"thai": "เราจะบันทึกและจดจำ",
						"hindi": "हम रिकॉर्ड करेंगे और याद रखेंगे।"
					}
				}
			]
		},
		{
			"id": 15,
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼음이 다시 그들을 삼켰다.",
						"english": "The ice swallowed them again.",
						"japanese": "氷が再び彼らを飲み込んだ。",
						"chinese": "冰再次吞噬了他们。",
						"french": "La glace les engloutit de nouveau.",
						"spanish": "El hielo los tragó de nuevo.",
						"vietnamese": "Băng lại nuốt chửng bọn họ một lần nữa.",
						"thai": "น้ำแข็งกลืนกินพวกเขาอีกครั้ง",
						"hindi": "बर्फ ने उन्हें फिर से निगल लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "미약한 분노는… 이 탑의 양식일 뿐.",
						"english": "Your feeble rage... merely fuels this tower.",
						"japanese": "その微かな怒り… この塔の糧となるだけだ。",
						"chinese": "你微弱的愤怒… 不过是这座塔的养料罢了。",
						"french": "Ta faible rage... n'est que nourriture pour cette tour.",
						"spanish": "Tu débil furia... es solo el alimento de esta torre.",
						"vietnamese": "Cơn giận yếu ớt của ngươi... chỉ là thức ăn cho tòa tháp này mà thôi.",
						"thai": "โทสะอันอ่อนแอของเจ้า... เป็นเพียงอาหารบำรุงหอคอยนี้เท่านั้น",
						"hindi": "तुम्हारा क्षीण क्रोध... इस मीनार का मात्र पोषण है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직 끝나지 않았어.",
						"english": "...Damn it. It's not over yet.",
						"japanese": "…くそっ。まだ終わってない。",
						"chinese": "…该死。还没完呢。",
						"french": "...Maudit. Ce n'est pas encore fini.",
						"spanish": "...Maldita sea. Esto no ha terminado todavía.",
						"vietnamese": "...Chết tiệt. Vẫn chưa kết thúc đâu.",
						"thai": "...บ้าจริง. ยังไม่จบหรอก.",
						"hindi": "...धिक्कार है। अभी खत्म नहीं हुआ है।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "eira",
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "우리는… 여기서 멈출 수 없어.",
						"english": "We... cannot stop here.",
						"japanese": "我々は…ここで止まるわけにはいかない。",
						"chinese": "我们…不能停在这里。",
						"french": "Nous... ne pouvons pas nous arrêter ici.",
						"spanish": "No podemos... detenernos aquí.",
						"vietnamese": "Chúng ta... không thể dừng lại ở đây.",
						"thai": "พวกเรา... หยุดอยู่แค่นี้ไม่ได้.",
						"hindi": "हम... यहाँ रुक नहीं सकते।"
					}
				},
				{
					"speaker": "eira",
					"type": "speech",
					"content": {
						"korean": "반드시… 그들의 이름을 읽어내야 해.",
						"english": "We must... read their names.",
						"japanese": "必ず…彼らの名を読み上げなければならない。",
						"chinese": "我们必须…读出他们的名字。",
						"french": "Nous devons... lire leurs noms.",
						"spanish": "Debemos... leer sus nombres.",
						"vietnamese": "Chúng ta nhất định phải... đọc tên của họ.",
						"thai": "เราต้อง... อ่านชื่อของพวกเขาให้ได้.",
						"hindi": "हमें... उनके नाम पढ़ने ही होंगे।"
					},
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "얼음의 심장부. 그곳에서 거대한 그림자가 움직였다.",
						"english": "The heart of the ice. There, a colossal shadow stirred.",
						"japanese": "「氷の心臓部。そこで巨大な影が蠢いた。」",
						"chinese": "“冰层深处。一个巨大的影子在那里蠕动。”",
						"french": "« Le cœur de la glace. Là, une ombre colossale bougea. »",
						"spanish": "« El corazón del hielo. Allí, una sombra colosal se movió. »",
						"vietnamese": "Trung tâm của băng. Ở đó, một cái bóng khổng lồ đã chuyển động.",
						"thai": "ใจกลางของน้ำแข็ง ที่นั่นเงาขนาดมหึมาได้เคลื่อนไหว",
						"hindi": "बर्फ का हृदय। वहाँ, एक विशाल छाया हिलने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "왔는가, 미약한 자들. 나의 식사를 방해할 셈인가?",
						"english": "You've come, weaklings. Do you intend to disturb my meal?",
						"japanese": "「来たか、弱き者たちよ。私の食事を邪魔するつもりか？」",
						"chinese": "“来了吗，弱者们。是想打扰我的进食吗？”",
						"french": "« Vous êtes venus, faibles créatures. Avez-vous l'intention de perturber mon repas ? »",
						"spanish": "« Habéis llegado, débiles. ¿Pretendéis interrumpir mi comida? »",
						"vietnamese": "Các ngươi đã đến, những kẻ yếu đuối. Định làm phiền bữa ăn của ta sao?",
						"thai": "มาแล้วหรือ พวกอ่อนแอ ตั้งใจจะขัดขวางมื้ออาหารของข้าหรือ?",
						"hindi": "आ गए, दुर्बलों। क्या मेरा भोजन बाधित करने का इरादा है?"
					},
					"emotion": "base",
					"speaker": "random_boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "네가… 이 모든 것을 꾸민 건가?",
						"english": "Was it... you who orchestrated all of this?",
						"japanese": "「貴様が…この全てを企んだのか？」",
						"chinese": "“是你……策划了这一切吗？”",
						"french": "« C'est toi... qui as orchestré tout cela ? »",
						"spanish": "« ¿Fuiste... tú quien orquestó todo esto? »",
						"vietnamese": "Ngươi... là kẻ đã sắp đặt tất cả chuyện này sao?",
						"thai": "แก... เป็นคนวางแผนทั้งหมดนี้หรือเปล่า?",
						"hindi": "क्या तुम... इन सबकी साज़िश रचने वाले थे?"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "꾸미다니? 나는 그저… 이 탑의 섭리를 따를 뿐.",
						"english": "Orchestrate? I merely... follow the will of this tower.",
						"japanese": "「企むだと？私はただ…この塔の摂理に従うのみ。」",
						"chinese": "“策划？我只是……遵循这座塔的法则而已。”",
						"french": "« Orchestrer ? Je ne fais que... suivre la providence de cette tour. »",
						"spanish": "« ¿Orquestar? Yo solo... sigo la providencia de esta torre. »",
						"vietnamese": "Sắp đặt ư? Ta chỉ là... tuân theo lẽ tự nhiên của tòa tháp này mà thôi.",
						"thai": "วางแผน? ข้าแค่... ทำตามหลักการของหอคอยนี้เท่านั้น",
						"hindi": "साज़िश? मैं तो बस... इस मीनार के विधान का पालन करता हूँ।"
					}
				},
				{
					"type": "direction",
					"speaker": "eira",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "당신은… 이 잊힌 자들의 모든 것을 흡수했군.",
						"english": "You... have absorbed everything of these forgotten.",
						"japanese": "あなたは…この忘れ去られた者たちの全てを吸収したな。",
						"chinese": "你…已经吸收了这些被遗忘者的一切。",
						"french": "Vous... avez tout absorbé de ces oubliés.",
						"spanish": "Tú... has absorbido todo de estos olvidados.",
						"vietnamese": "Ngươi... đã hấp thụ tất cả của những kẻ bị lãng quên này.",
						"thai": "เจ้า... ได้ดูดกลืนทุกสิ่งของเหล่าผู้ถูกลืมเหล่านี้แล้วสินะ",
						"hindi": "तुमने... इन भूले हुए लोगों का सब कुछ सोख लिया है।"
					},
					"speaker": "eira"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들의 이름, 그들의 절규… 모두 나의 양식이 될 뿐.",
						"english": "Their names, their screams... all simply become my sustenance.",
						"japanese": "彼らの名、彼らの叫び…全てが我が糧となるのみ。",
						"chinese": "他们的名字，他们的尖叫…都将成为我的养料。",
						"french": "Leurs noms, leurs cris... tout deviendra ma subsistance.",
						"spanish": "Sus nombres, sus gritos... todo se convierte en mi sustento.",
						"vietnamese": "Tên của chúng, tiếng thét của chúng... tất cả chỉ là thức ăn cho ta.",
						"thai": "ชื่อของพวกเขา เสียงกรีดร้องของพวกเขา... ล้วนเป็นเพียงอาหารของข้า",
						"hindi": "उनके नाम, उनकी चीखें... सब मेरा पोषण बनेंगे।"
					}
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "너희도 곧… 그들처럼 될 것이다.",
						"english": "You too... will soon become like them.",
						"japanese": "お前たちもすぐに…彼らのようになるだろう。",
						"chinese": "你们也很快…会和他们一样。",
						"french": "Vous aussi... deviendrez bientôt comme eux.",
						"spanish": "Vosotros también... pronto seréis como ellos.",
						"vietnamese": "Các ngươi rồi cũng... sẽ như bọn chúng thôi.",
						"thai": "เจ้าเองก็... จะเป็นเช่นพวกเขาในไม่ช้า",
						"hindi": "तुम भी जल्द ही... उनके जैसे हो जाओगे।"
					}
				}
			],
			"win_dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "거대한 그림자가 흔들렸다. 얼음 속 얼굴들이 잠시 빛나는 듯했다.",
						"english": "The massive shadow wavered. Faces in the ice seemed to glow for a moment.",
						"japanese": "巨大な影が揺らいだ。氷の中の顔々が、一瞬光を放つようだった。",
						"chinese": "巨大的影子颤抖了。冰中的面孔似乎短暂地发光。",
						"french": "L'ombre gigantesque vacilla. Les visages dans la glace semblèrent briller un instant.",
						"spanish": "La enorme sombra tembló. Los rostros en el hielo parecieron brillar por un momento.",
						"vietnamese": "Bóng đen khổng lồ rung chuyển. Những khuôn mặt trong băng dường như phát sáng trong chốc lát.",
						"thai": "เงาขนาดมหึมาสั่นคลอน ใบหน้าในน้ำแข็งดูเหมือนจะส่องประกายชั่วครู่",
						"hindi": "विशाल छाया डगमगाई। बर्फ में जमे चेहरे पल भर के लिए चमक उठे।"
					}
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…기록되지 않는다는 건… 죽음보다 고통스러운 것.",
						"english": "...To not be recorded... is more painful than death.",
						"japanese": "…記録されないということは…死よりも苦痛なこと。",
						"chinese": "…不被记录…比死亡更痛苦。",
						"french": "...Ne pas être enregistré... est plus douloureux que la mort.",
						"spanish": "...No ser registrado... es más doloroso que la muerte.",
						"vietnamese": "...Không được ghi nhớ... còn đau đớn hơn cả cái chết.",
						"thai": "...การไม่ถูกจดจำ... เจ็บปวดยิ่งกว่าความตาย",
						"hindi": "...दर्ज न होना... मौत से भी ज़्यादा दर्दनाक है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "random_boss",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "하지만 너희도… 결국 잊힐 것이다.",
						"english": "But you too... will eventually be forgotten.",
						"japanese": "だがお前たちも…結局は忘れ去られるだろう。",
						"chinese": "但你们也…终究会被遗忘。",
						"french": "Mais vous aussi... serez finalement oubliés.",
						"spanish": "Pero vosotros también... al final seréis olvidados.",
						"vietnamese": "Nhưng rồi các ngươi cũng... sẽ bị lãng quên thôi.",
						"thai": "แต่พวกเจ้าเองก็... จะถูกลืมเลือนไปในที่สุด",
						"hindi": "पर तुम भी... आखिर में भुला दिए जाओगे।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "아니, 우리는 기억할 거야. 모두를.",
						"english": "No, we will remember. Everyone.",
						"japanese": "いや、私たちは覚えている。全てを。",
						"chinese": "不，我们会记住。所有的人。",
						"french": "Non, nous nous souviendrons. De tous.",
						"spanish": "No, nosotros recordaremos. A todos.",
						"vietnamese": "Không, chúng ta sẽ nhớ. Tất cả mọi người.",
						"thai": "ไม่ เราจะจดจำ. ทุกคน.",
						"hindi": "नहीं, हम याद रखेंगे। सबको।"
					},
					"speaker": "character_any"
				},
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "eira",
					"type": "direction"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그들의 이름은… 영원히 기억될 거야.",
						"english": "Their names... will be remembered forever.",
						"japanese": "彼らの名は…永遠に記憶されるだろう。",
						"chinese": "他们的名字…将永远被记住。",
						"french": "Leurs noms... seront rappelés à jamais.",
						"spanish": "Sus nombres... serán recordados para siempre.",
						"vietnamese": "Tên của họ... sẽ được nhớ mãi.",
						"thai": "ชื่อของพวกเขา... จะถูกจดจำตลอดไป",
						"hindi": "उनके नाम... हमेशा याद रखे जाएंगे।"
					},
					"speaker": "eira"
				},
				{
					"type": "speech",
					"content": {
						"korean": "에이라의 손에 들린 룬이 희미하게 빛났다. 새로운 기록이 시작될 때였다.",
						"english": "The rune in Aira's hand glowed faintly. It was time for a new record to begin.",
						"japanese": "エイラの手に握られたルーンが、微かに光った。新たな記録が始まる時だった。",
						"chinese": "艾拉手中的符文微弱地发光。是时候开始新的记录了。",
						"french": "La rune dans la main d'Aira brillait faiblement. C'était le moment de commencer un nouveau registre.",
						"spanish": "La runa en la mano de Aira brilló débilmente. Era el momento de que un nuevo registro comenzara.",
						"vietnamese": "Lá bùa trong tay Aira phát sáng yếu ớt. Đã đến lúc một ghi chép mới bắt đầu.",
						"thai": "อักขระในมือของไอราเปล่งแสงจางๆ ถึงเวลาเริ่มต้นบันทึกใหม่แล้ว",
						"hindi": "ऐरा के हाथ में पकड़ी हुई रूण हल्की सी चमकी। एक नया अभिलेख शुरू करने का समय था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			]
		}
	]
} as const;
