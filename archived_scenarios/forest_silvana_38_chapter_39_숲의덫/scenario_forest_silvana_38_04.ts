export const scenario_forest_silvana_38_04 = {
	"scenario_id": "forest_silvana_38_04",
	"order": 4,
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
	"prologue": {
		"korean": [
			"숲은 깊어질수록 이상해졌다.",
			"아름다운 가면 뒤에 숨겨진 추악한 진실.",
			"실바나의 이름으로 강요된 조화.",
			"어쩌면, 이 모든 것이 실바나의 뜻이 아닐지도 모른다.",
			"심장이 균열하는 소리가 들려왔다."
		],
		"english": [
			"The deeper the forest, the stranger it became.",
			"The ugly truth hidden behind a beautiful mask.",
			"Harmony enforced in Silvana's name.",
			"Perhaps, none of this is Silvana's will.",
			"I heard the sound of a heart cracking."
		],
		"japanese": [
			"森が深くなるにつれて、奇妙さが増していった。",
			"美しい仮面の下に隠された醜い真実。",
			"シルバナの名の下に強制された調和。",
			"もしかしたら、これら全てはシルバナの意志ではないのかもしれない。",
			"心臓がひび割れる音が聞こえた。"
		],
		"chinese": [
			"森林越深，就越奇怪。",
			"美丽面具下隐藏的丑陋真相。",
			"以希尔瓦娜之名强加的和谐。",
			"也许，这一切都不是希尔瓦娜的旨意。",
			"听到了心裂开的声音。"
		],
		"french": [
			"Plus la forêt s'épaississait, plus elle devenait étrange.",
			"L'horrible vérité cachée derrière un beau masque.",
			"L'harmonie imposée au nom de Silvana.",
			"Peut-être que tout cela n'est pas la volonté de Silvana.",
			"J'ai entendu le son d'un cœur qui se fissure."
		],
		"spanish": [
			"Cuanto más profundo se adentraba el bosque, más extraño se volvía.",
			"La fea verdad oculta tras una hermosa máscara.",
			"Armonía impuesta en nombre de Silvana.",
			"Quizás, todo esto no sea la voluntad de Silvana.",
			"Escuché el sonido de un corazón resquebrajándose."
		],
		"vietnamese": [
			"Càng vào sâu trong rừng, mọi thứ càng trở nên kỳ lạ.",
			"Sự thật xấu xí ẩn giấu sau chiếc mặt nạ xinh đẹp.",
			"Sự hài hòa bị ép buộc nhân danh Silvana.",
			"Có lẽ, tất cả những điều này không phải là ý muốn của Silvana.",
			"Tôi nghe thấy tiếng trái tim nứt vỡ."
		],
		"thai": [
			"ยิ่งป่าลึกเข้าไปเท่าไร ก็ยิ่งแปลกขึ้นเท่านั้น",
			"ความจริงอันน่าเกลียดที่ซ่อนอยู่ภายใต้หน้ากากที่สวยงาม",
			"ความสามัคคีที่ถูกบังคับในนามของซิลวานา",
			"บางที ทั้งหมดนี้อาจไม่ใช่เจตจำนงของซิลวานา",
			"ฉันได้ยินเสียงหัวใจแตกร้าว"
		],
		"hindi": [
			"जैसे-जैसे जंगल गहरा होता गया, वह और भी अजीब होता गया।",
			"एक खूबसूरत नकाब के पीछे छिपा बदसूरत सच।",
			"सिल्वाना के नाम पर थोपी गई सद्भाव।",
			"शायद, यह सब सिल्वाना की मर्जी नहीं है।",
			"मैंने दिल के फटने की आवाज सुनी।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "숲의 심장부에 다다르자, 이상한 침묵이 흘렀다.",
						"english": "As I reached the heart of the forest, an eerie silence fell.",
						"japanese": "森の心臓部にたどり着くと、奇妙な静寂が訪れた。",
						"chinese": "当我到达森林深处时，一片诡异的寂静笼罩着。",
						"french": "En atteignant le cœur de la forêt, un silence étrange s'installa.",
						"spanish": "Al llegar al corazón del bosque, un silencio extraño se apoderó de todo.",
						"vietnamese": "Khi đến trung tâm của khu rừng, một sự im lặng kỳ lạ bao trùm.",
						"thai": "เมื่อฉันไปถึงใจกลางป่า ความเงียบที่น่าขนลุกก็ปกคลุม",
						"hindi": "जैसे ही मैं जंगल के दिल तक पहुँचा, एक अजीब सी खामोशी छा गई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기 꽃들은 왜 이렇게 시들었지?",
						"english": "Why are the flowers here so withered?",
						"japanese": "ここの花々はなぜこんなに枯れているんだ？",
						"chinese": "这里的花为什么都枯萎了？",
						"french": "Pourquoi les fleurs ici sont-elles si fanées ?",
						"spanish": "¿Por qué las flores aquí están tan marchitas?",
						"vietnamese": "Tại sao những bông hoa ở đây lại tàn úa như vậy?",
						"thai": "ทำไมดอกไม้ที่นี่ถึงเหี่ยวเฉาขนาดนี้?",
						"hindi": "यहाँ के फूल इतने मुरझाए हुए क्यों हैं?"
					},
					"emotion": "base"
				},
				{
					"spot": [
						4,
						2
					],
					"action": "enter",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"speaker": "ela",
					"emotion": "base",
					"content": {
						"korean": "자연의 순리입니다. 모든 것은 순환하는 법이죠.",
						"english": "It's the way of nature. Everything cycles.",
						"japanese": "自然の摂理です。全ては循環するもの。",
						"chinese": "这是大自然的规律。万物皆有循环。",
						"french": "C'est le cours de la nature. Tout est cyclique.",
						"spanish": "Es el ciclo de la naturaleza. Todo es cíclico.",
						"vietnamese": "Đó là quy luật của tự nhiên. Mọi thứ đều tuần hoàn.",
						"thai": "มันเป็นวัฏจักรของธรรมชาติ ทุกสิ่งหมุนเวียนไป",
						"hindi": "यह प्रकृति का नियम है। सब कुछ घूमता रहता है।"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이상한 순리네.",
						"english": "...A strange cycle.",
						"japanese": "…奇妙な摂理だな。",
						"chinese": "……奇怪的规律。",
						"french": "...Un étrange cycle.",
						"spanish": "...Un ciclo extraño.",
						"vietnamese": "…Một vòng tuần hoàn kỳ lạ.",
						"thai": "...วัฏจักรที่แปลกประหลาด",
						"hindi": "...एक अजीब चक्र।"
					},
					"speaker": "character_1",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
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
					"speaker": "character_any",
					"content": {
						"korean": "저 나무… 껍질이 전부 벗겨져 있어.",
						"english": "That tree... its bark is completely peeled off.",
						"japanese": "あの木… 樹皮が全て剥がれている。",
						"chinese": "那棵树……树皮都剥落了。",
						"french": "Cet arbre... son écorce est entièrement pelée.",
						"spanish": "Ese árbol... tiene la corteza completamente pelada.",
						"vietnamese": "Cái cây đó... vỏ cây bị bong tróc hoàn toàn.",
						"thai": "ต้นไม้นั่น... เปลือกของมันลอกออกหมดแล้ว",
						"hindi": "वह पेड़... उसकी छाल पूरी तरह से उखड़ी हुई है।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_2",
					"emotion": "base",
					"content": {
						"korean": "이건 자연스러운 현상이 아니야. 뭔가 인위적이야.",
						"english": "This isn't natural. Something artificial is at play.",
						"japanese": "これは自然な現象じゃない。何か人工的なものがある。",
						"chinese": "这不是自然现象。是某种人为的。",
						"french": "Ce n'est pas un phénomène naturel. C'est artificiel.",
						"spanish": "Esto no es natural. Hay algo artificial.",
						"vietnamese": "Đây không phải là hiện tượng tự nhiên. Có gì đó nhân tạo.",
						"thai": "นี่ไม่ใช่ปรากฏการณ์ธรรมชาติ มีบางอย่างที่มนุษย์สร้างขึ้น",
						"hindi": "यह प्राकृतिक नहीं है। कुछ कृत्रिम है।"
					}
				},
				{
					"content": {
						"korean": "숲의 어머니께서 숲을 위해 희생하신 겁니다. 의심하지 마세요.",
						"english": "The Forest Mother sacrificed herself for the forest. Do not doubt her.",
						"japanese": "森の母様が森のために犠牲になられたのです。疑わないでください。",
						"chinese": "森林之母为森林牺牲了。不要怀疑。",
						"french": "La Mère de la Forêt s'est sacrifiée pour la forêt. Ne doutez pas.",
						"spanish": "La Madre del Bosque se sacrificó por el bosque. No dudes.",
						"vietnamese": "Mẹ Rừng đã hy sinh vì rừng. Đừng nghi ngờ.",
						"thai": "พระแม่แห่งป่าทรงสละพระองค์เพื่อป่า อย่าสงสัยเลย",
						"hindi": "वन माता ने वन के लिए बलिदान दिया है। संदेह मत करो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "희생? 아니면 착취?",
						"english": "Sacrifice? Or exploitation?",
						"japanese": "犠牲？それとも搾取？",
						"chinese": "牺牲？还是剥削？",
						"french": "Sacrifice ? Ou exploitation ?",
						"spanish": "¿Sacrificio? ¿O explotación?",
						"vietnamese": "Hy sinh? Hay bóc lột?",
						"thai": "การเสียสละ? หรือการเอาเปรียบ?",
						"hindi": "बलिदान? या शोषण?"
					},
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"speaker": "ela",
					"action": "enter",
					"spot": [
						2,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "실바나의 의지라고 보기엔 너무 잔혹해.",
						"english": "It's too cruel to be Sylvana's will.",
						"japanese": "シルバナ様の意思とするには、あまりにも残酷すぎる。",
						"chinese": "这太过残忍了，不像希尔瓦娜的意志。",
						"french": "C'est trop cruel pour être la volonté de Sylvana.",
						"spanish": "Es demasiado cruel para ser la voluntad de Sylvana.",
						"vietnamese": "Nó quá tàn nhẫn để là ý chí của Silvana.",
						"thai": "มันโหดร้ายเกินกว่าจะเป็นเจตจำนงของซิลวาน่า",
						"hindi": "यह सिल्वाना की इच्छा होने के लिए बहुत क्रूर है।"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "어쩌면 '숲의 어머니'가 아닌 다른 누군가의 뜻일 수도 있어.",
						"english": "Perhaps it's someone else's will, not the 'Forest Mother's'.",
						"japanese": "もしかしたら、「森の母」ではない、他の誰かの意思かもしれない。",
						"chinese": "也许这不是“森林之母”的意愿，而是其他人的。",
						"french": "C'est peut-être la volonté de quelqu'un d'autre, pas celle de la « Mère de la Forêt ».",
						"spanish": "Quizás sea la voluntad de otra persona, no de la \"Madre del Bosque\".",
						"vietnamese": "Có lẽ đó là ý chí của người khác, không phải của 'Mẹ Rừng'.",
						"thai": "บางทีอาจเป็นเจตจำนงของคนอื่น ไม่ใช่ 'พระแม่แห่งป่า'",
						"hindi": "शायद यह 'वन माता' की नहीं, बल्कि किसी और की इच्छा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_3"
				},
				{
					"type": "speech",
					"speaker": "ela",
					"content": {
						"korean": "망언입니다! 숲의 조화를 방해하지 마세요. 그렇지 않으면…",
						"english": "Blasphemy! Do not disturb the forest's harmony. Otherwise...",
						"japanese": "妄言です！森の調和を乱さないでください。さもなければ…",
						"chinese": "妄言！不要破坏森林的和谐。否则…",
						"french": "Blasphème ! Ne perturbez pas l'harmonie de la forêt. Sinon…",
						"spanish": "¡Blasfemia! No perturbes la armonía del bosque. De lo contrario…",
						"vietnamese": "Lời báng bổ! Đừng phá vỡ sự hài hòa của rừng. Nếu không...",
						"thai": "คำพูดไร้สาระ! อย่ารบกวนความกลมกลืนของป่า ไม่อย่างนั้น...",
						"hindi": "यह बकवास है! जंगल की शांति भंग मत करो। नहीं तो..."
					},
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "그렇지 않으면 뭐?",
						"english": "Otherwise what?",
						"japanese": "さもなければ、何だ？",
						"chinese": "否则怎样？",
						"french": "Sinon quoi ?",
						"spanish": "¿De lo contrario qué?",
						"vietnamese": "Nếu không thì sao?",
						"thai": "ไม่อย่างนั้นอะไร?",
						"hindi": "नहीं तो क्या?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "경고했습니다. 이 이상 진실을 파헤치려 한다면…",
						"english": "I've warned you. If you try to dig deeper into the truth...",
						"japanese": "警告しました。これ以上、真実を暴こうとするなら…",
						"chinese": "我警告过你。如果你再深究真相…",
						"french": "Je vous ai prévenu. Si vous tentez de creuser davantage la vérité…",
						"spanish": "Te lo advertí. Si intentas desenterrar más la verdad…",
						"vietnamese": "Tôi đã cảnh báo rồi. Nếu cô cố gắng đào sâu sự thật này…",
						"thai": "ฉันเตือนแล้วนะ ถ้าคุณพยายามจะค้นหาความจริงมากกว่านี้...",
						"hindi": "मैंने तुम्हें चेतावनी दी थी। अगर तुम और सच जानने की कोशिश करते हो..."
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "ela"
				},
				{
					"content": {
						"korean": "진실이 두려운 건 너희 아니야?",
						"english": "Aren't you the ones afraid of the truth?",
						"japanese": "真実を恐れているのは、あなたたちではないのか？",
						"chinese": "害怕真相的不是你们吗？",
						"french": "N'êtes-vous pas ceux qui craignent la vérité ?",
						"spanish": "¿No sois vosotros los que teméis la verdad?",
						"vietnamese": "Không phải các ngươi sợ sự thật sao?",
						"thai": "ไม่ใช่พวกคุณเหรอที่กลัวความจริง?",
						"hindi": "क्या सच से डरने वाले तुम नहीं हो?"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "제가 지켜왔던 모든 것이…!",
						"english": "Everything I've protected...!",
						"japanese": "私が守ってきたすべてが…！",
						"chinese": "我所守护的一切…！",
						"french": "Tout ce que j'ai protégé… !",
						"spanish": "¡Todo lo que he protegido...!",
						"vietnamese": "Tất cả những gì tôi đã bảo vệ...!",
						"thai": "ทุกสิ่งที่ฉันปกป้องมา...!",
						"hindi": "मैंने जो कुछ भी बचाया है...!"
					},
					"emotion": "sad",
					"speaker": "ela",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "감히 숲의 질서를 어지럽히는 자들은, 벌을 받아야 합니다.",
						"english": "Those who dare disturb the forest's order shall be punished.",
						"japanese": "敢えて森の秩序を乱す者には、罰が下されるべし。",
						"chinese": "胆敢扰乱森林秩序者，必将受到惩罚。",
						"french": "Ceux qui osent perturber l'ordre de la forêt seront punis.",
						"spanish": "Quienes osen perturbar el orden del bosque, deben ser castigados.",
						"vietnamese": "Kẻ nào dám phá vỡ trật tự rừng xanh, sẽ phải bị trừng phạt.",
						"thai": "ผู้ใดที่บังอาจก่อกวนระเบียบของป่า จะต้องถูกลงโทษ",
						"hindi": "जो कोई वन की व्यवस्था को भंग करने का साहस करेगा, उसे दंडित किया जाएगा।"
					},
					"speaker": "ela",
					"type": "speech"
				},
				{
					"direction": "up",
					"speaker": "ela",
					"type": "direction",
					"duration_ms": 400,
					"action": "exit"
				},
				{
					"content": {
						"korean": "엘라가 사라지자, 거대한 그림자가 드리워졌다.",
						"english": "As Ella vanished, a colossal shadow loomed.",
						"japanese": "エラが消え去ると、巨大な影が差し込んだ。",
						"chinese": "埃拉消失后，巨大的阴影笼罩而下。",
						"french": "Alors qu'Ella disparaissait, une ombre colossale s'est abattue.",
						"spanish": "Cuando Ella desapareció, una sombra colosal se cernió.",
						"vietnamese": "Khi Ella biến mất, một bóng đen khổng lồ bao trùm.",
						"thai": "เมื่อเอลล่าหายไป เงาขนาดใหญ่ก็ทอดลงมา",
						"hindi": "जैसे ही एला गायब हुई, एक विशाल छाया मंडराने लगी।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "숲의 조화를… 방해하는 자들인가.",
						"english": "Are they… those who disrupt the forest's harmony?",
						"japanese": "森の調和を… 乱す者たちか。",
						"chinese": "难道是… 那些破坏森林和谐之人？",
						"french": "Sont-ils… ceux qui troublent l'harmonie de la forêt ?",
						"spanish": "¿Son ellos… los que perturban la armonía del bosque?",
						"vietnamese": "Họ là… những kẻ phá vỡ sự hài hòa của rừng sao?",
						"thai": "พวกเขาคือ… ผู้ที่รบกวนความกลมกลืนของป่าหรือ?",
						"hindi": "क्या वे… वन की शांति भंग करने वाले हैं?"
					},
					"emotion": "base",
					"speaker": "random_boss",
					"type": "speech"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"content": {
						"korean": "거짓된 희망으로… 죽어라.",
						"english": "Die with false hope.",
						"japanese": "偽りの希望と共に…死ね。",
						"chinese": "带着虚假的希望…去死吧。",
						"french": "Meurs avec de faux espoirs.",
						"spanish": "Muere con falsas esperanzas.",
						"vietnamese": "Chết trong hy vọng hão huyền.",
						"thai": "จงตายไปพร้อมกับความหวังที่จอมปลอม",
						"hindi": "झूठी उम्मीद के साथ… मरो।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "이대로 멈출 순 없어!",
						"english": "I can't stop here!",
						"japanese": "このままでは終われない！",
						"chinese": "不能就此止步！",
						"french": "Je ne peux pas m'arrêter là !",
						"spanish": "¡No puedo detenerme aquí!",
						"vietnamese": "Không thể dừng lại ở đây!",
						"thai": "หยุดอยู่แค่นี้ไม่ได้!",
						"hindi": "मैं ऐसे रुक नहीं सकता!"
					},
					"emotion": "angry"
				},
				{
					"type": "direction",
					"speaker": "ela",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"speaker": "ela",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 조화를 거스르는 자의 최후입니다.",
						"english": "This is the end for those who defy the forest's harmony.",
						"japanese": "森の調和に逆らう者の末路だ。",
						"chinese": "这是违抗森林和谐者的下场。",
						"french": "C'est la fin pour ceux qui défient l'harmonie de la forêt.",
						"spanish": "Este es el fin para aquellos que desafían la armonía del bosque.",
						"vietnamese": "Đây là kết cục của kẻ dám phá vỡ sự hài hòa của rừng.",
						"thai": "นี่คือจุดจบของผู้ที่ท้าทายความสมดุลของป่า",
						"hindi": "यह जंगल के सद्भाव का अनादर करने वालों का अंत है।"
					}
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "거대한 형체가 앞을 가로막았다.",
						"english": "A colossal form blocked the way.",
						"japanese": "巨大な影が道を阻んだ。",
						"chinese": "一个巨大的形体挡住了去路。",
						"french": "Une forme colossale bloquait le chemin.",
						"spanish": "Una forma colosal bloqueó el camino.",
						"vietnamese": "Một hình thể khổng lồ chắn ngang đường.",
						"thai": "รูปร่างมหึมากีดขวางทางไว้",
						"hindi": "एक विशाल आकृति ने रास्ता रोक लिया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "이곳은 신성한 균열. 더 이상의 침입은 용납하지 않는다.",
						"english": "This is the sacred rift. No further intrusion shall be tolerated.",
						"japanese": "ここは神聖なる亀裂。これ以上の侵入は許されない。",
						"chinese": "此处乃神圣裂隙。禁止一切闯入。",
						"french": "Ceci est la faille sacrée. Aucune intrusion supplémentaire ne sera tolérée.",
						"spanish": "Esta es la grieta sagrada. No se tolerará más intrusión.",
						"vietnamese": "Đây là khe nứt linh thiêng. Không cho phép xâm nhập thêm.",
						"thai": "ที่นี่คือรอยแยกศักดิ์สิทธิ์ จะไม่มีการรุกล้ำใดๆ อีก",
						"hindi": "यह पवित्र दरार है। अब और घुसपैठ बर्दाश्त नहीं की जाएगी।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "비켜. 우린 진실을 알아야 해.",
						"english": "Move. We must know the truth.",
						"japanese": "退け。我々は真実を知る必要がある。",
						"chinese": "让开。我们必须知道真相。",
						"french": "Écarte-toi. Nous devons connaître la vérité.",
						"spanish": "Apártate. Debemos saber la verdad.",
						"vietnamese": "Tránh ra. Chúng tôi phải biết sự thật.",
						"thai": "หลีกไป เราต้องรู้ความจริง",
						"hindi": "हटो। हमें सच जानना होगा।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "진실은… 너희를 고통스럽게 할 뿐.",
						"english": "The truth… will only bring you suffering.",
						"japanese": "真実は… お前たちを苦しめるだけだ。",
						"chinese": "真相… 只会让你们痛苦。",
						"french": "La vérité… ne fera que vous apporter la souffrance.",
						"spanish": "La verdad… solo os causará sufrimiento.",
						"vietnamese": "Sự thật… sẽ chỉ mang lại đau khổ cho các ngươi.",
						"thai": "ความจริง… จะนำมาซึ่งความทรมานแก่เจ้าเท่านั้น",
						"hindi": "सच… तुम्हें केवल पीड़ा देगा।"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어리석은 자들… 결국 아무것도 바뀌지 않아.",
						"english": "Fools… In the end, nothing changes.",
						"japanese": "愚か者たちめ… 結局何も変わらない。",
						"chinese": "愚蠢之徒… 最终什么都不会改变。",
						"french": "Idiots… Au final, rien ne changera.",
						"spanish": "Necios… Al final, nada cambia.",
						"vietnamese": "Những kẻ ngu ngốc… Cuối cùng, không gì thay đổi cả.",
						"thai": "คนโง่เง่า… สุดท้ายแล้ว ไม่มีอะไรเปลี่ยนแปลง",
						"hindi": "मूर्खों… अंत में, कुछ भी नहीं बदलता।"
					}
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "아니. 우린 시작했어.",
						"english": "No. We've begun.",
						"japanese": "いいえ。我々は始めたばかりだ。",
						"chinese": "不。我们已经开始了。",
						"french": "Non. Nous avons commencé.",
						"spanish": "No. Hemos comenzado.",
						"vietnamese": "Không. Chúng tôi đã bắt đầu rồi.",
						"thai": "ไม่ เราได้เริ่มต้นแล้ว",
						"hindi": "नहीं। हमने शुरुआत कर दी है।"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "균열의 심장에서 희미한 빛이 뿜어져 나왔다. 다음 진실을 향해.",
						"english": "A faint light emanated from the rift's heart. Towards the next truth.",
						"japanese": "亀裂の心臓から微かな光が放たれた。次の真実へと向かって。",
						"chinese": "裂隙之心散发出微弱的光芒。迈向下一个真相。",
						"french": "Une faible lumière émana du cœur de la faille. Vers la prochaine vérité.",
						"spanish": "Una luz tenue emanó del corazón de la grieta. Hacia la próxima verdad.",
						"vietnamese": "Một ánh sáng yếu ớt tỏa ra từ tâm khe nứt. Hướng tới sự thật tiếp theo.",
						"thai": "แสงจางๆ เปล่งออกมาจากใจกลางรอยแยก สู่ความจริงถัดไป",
						"hindi": "दरार के हृदय से एक मंद प्रकाश निकला। अगले सच की ओर।"
					},
					"emotion": "base"
				}
			]
		}
	]
} as const;
