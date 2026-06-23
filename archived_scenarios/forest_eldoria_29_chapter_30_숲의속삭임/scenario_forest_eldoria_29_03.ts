export const scenario_forest_eldoria_29_03 = {
	"scenario_id": "forest_eldoria_29_03",
	"order": 3,
	"act": "rising",
	"theme": "forest",
	"actors": {
		"cedar": {
			"id": "mon_bd67c222-311e-4f31-b81f-931b14f6b5c6",
			"name": {
				"korean": "시더",
				"english": "Cedar",
				"japanese": "シダー",
				"chinese": "雪松",
				"french": "Cèdre",
				"spanish": "Cedro",
				"vietnamese": "Tuyết tùng",
				"thai": "ซีดาร์",
				"hindi": "देवदार"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/f1057921-5fa2-4be2-767d-1a64c33e6e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9579f10e-eb78-40e5-d495-72f489322200/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"숲의 심장으로 향하는 길. 에너지가 뒤틀리기 시작했다.",
			"기이하게 빛나는 균사체와 덩굴이 피어오르고,",
			"병든 숲의 맥박이 불길하게 뛰는 소리가 들려온다.",
			"누군가 속삭인다. '숲이, 모든 것을 흡수하고 있어.'"
		],
		"english": [
			"The path to the heart of the forest. Energy began to twist.",
			"Strangely glowing mycelia and vines began to bloom.",
			"The ominous pulse of the sick forest could be heard.",
			"Someone whispers. 'The forest is absorbing everything.'"
		],
		"japanese": [
			"森の心臓へと続く道。エネルギーが歪み始めた。",
			"奇妙に光る菌糸と蔓が咲き乱れ、",
			"病んだ森の脈動が不吉に響き渡る。",
			"誰かが囁く。「森が、すべてを吸収している。」"
		],
		"chinese": [
			"通往森林之心。能量开始扭曲。",
			"奇异发光的菌丝和藤蔓生长蔓延，",
			"病态森林不祥的脉动声传来。",
			"有人低语。「森林正在吸收一切。」"
		],
		"french": [
			"Le chemin vers le cœur de la forêt. L'énergie commença à se tordre.",
			"Des mycéliums et des vignes étrangement lumineux fleurirent,",
			"On entend le pouls inquiétant de la forêt malade.",
			"Quelqu'un murmure. « La forêt absorbe tout. »"
		],
		"spanish": [
			"El camino al corazón del bosque. La energía comenzó a distorsionarse.",
			"Micelios y enredaderas extrañamente brillantes florecieron,",
			"Se escucha el pulso siniestro del bosque enfermo.",
			"Alguien susurra. 'El bosque lo está absorbiendo todo.'"
		],
		"vietnamese": [
			"Con đường đến trái tim khu rừng. Năng lượng bắt đầu biến dạng.",
			"Những sợi nấm và dây leo phát sáng kỳ lạ nở rộ,",
			"Tiếng mạch đập đầy điềm gở của khu rừng bệnh tật vang vọng.",
			"Ai đó thì thầm. 'Khu rừng đang hấp thụ mọi thứ.'"
		],
		"thai": [
			"เส้นทางสู่ใจกลางป่า พลังงานเริ่มบิดเบือน",
			"เส้นใยเชื้อราและเถาวัลย์เรืองแสงแปลกประหลาดผลิบาน",
			"เสียงชีพจรของป่าที่ป่วยไข้เต้นระทึกอย่างน่ากลัว",
			"มีบางคนกระซิบ 'ป่ากำลังดูดซับทุกสิ่ง'"
		],
		"hindi": [
			"वन के हृदय का मार्ग। ऊर्जा विकृत होने लगी।",
			"अजीब तरह से चमकने वाले माइसीलिया और बेलें खिलने लगीं,",
			"बीमार जंगल की अशुभ धड़कन सुनाई देती है।",
			"कोई फुसफुसाता है। 'जंगल सब कुछ सोख रहा है।'"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 에너지가 뒤틀린 곳. 발광하는 균사체와 덩굴이 기괴하게 얽혀 있었다.",
						"english": "Where the forest's energy twisted. Luminous mycelia and vines were grotesquely intertwined.",
						"japanese": "森のエネルギーが歪んだ場所。発光する菌糸と蔓が不気味に絡み合っていた。",
						"chinese": "森林能量扭曲之处。发光的菌丝和藤蔓怪异地缠绕着。",
						"french": "Là où l'énergie de la forêt se tordait. Des mycéliums et des vignes lumineux s'entremêlaient étrangement.",
						"spanish": "Donde la energía del bosque se retorcía. Micelios y enredaderas luminosas estaban grotescamente entrelazados.",
						"vietnamese": "Nơi năng lượng của khu rừng bị biến dạng. Những sợi nấm và dây leo phát sáng đan xen kỳ dị.",
						"thai": "ที่ที่พลังงานของป่าบิดเบี้ยว เส้นใยเชื้อราและเถาวัลย์เรืองแสงพันกันอย่างน่าขนลุก",
						"hindi": "जहां जंगल की ऊर्जा विकृत थी। चमकदार माइसीलिया और बेलें विचित्र रूप से आपस में उलझी हुई थीं।"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이건… 숲이 아프다는 증거잖아.",
						"english": "This is... proof that the forest is sick.",
						"japanese": "これは… 森が病んでいる証拠だ。",
						"chinese": "这… 这就是森林生病的证据啊。",
						"french": "C'est… la preuve que la forêt est malade.",
						"spanish": "Esto es... la prueba de que el bosque está enfermo.",
						"vietnamese": "Đây là... bằng chứng cho thấy khu rừng đang bệnh.",
						"thai": "นี่มัน… หลักฐานว่าป่ากำลังป่วย",
						"hindi": "यह... इस बात का सबूत है कि जंगल बीमार है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "cedar",
					"action": "enter"
				},
				{
					"content": {
						"korean": "결국 여기까지 왔군. 예상보다 빠르군.",
						"english": "So you've finally come this far. Faster than expected.",
						"japanese": "結局ここまで来たか。予想より早いな。",
						"chinese": "终究还是到这里了。比预期要快。",
						"french": "Vous êtes finalement arrivé jusqu'ici. Plus vite que prévu.",
						"spanish": "Finalmente has llegado hasta aquí. Más rápido de lo esperado.",
						"vietnamese": "Cuối cùng ngươi cũng đã đến đây. Nhanh hơn ta nghĩ.",
						"thai": "ในที่สุดก็มาถึงที่นี่ เร็วกว่าที่คิดไว้",
						"hindi": "तो तुम आखिर यहाँ तक आ गए। उम्मीद से जल्दी।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "이 숲은… 병들어가고 있어. 너무 많은 것을 흡수하고 있지.",
						"english": "This forest... is getting sick. It's absorbing too much.",
						"japanese": "この森は… 病みつつある。あまりにも多くのものを吸収しすぎている。",
						"chinese": "这座森林… 正在病变。吸收了太多的东西。",
						"french": "Cette forêt… tombe malade. Elle absorbe trop de choses.",
						"spanish": "Este bosque... está enfermando. Está absorbiendo demasiado.",
						"vietnamese": "Khu rừng này... đang bệnh. Nó đang hấp thụ quá nhiều thứ.",
						"thai": "ป่าแห่งนี้… กำลังป่วย มันกำลังดูดซับมากเกินไป",
						"hindi": "यह जंगल... बीमार हो रहा है। यह बहुत कुछ सोख रहा है।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "흡수? 뭘 흡수한다는 거지?",
						"english": "Absorb? Absorb what?",
						"japanese": "吸収？何を吸収しているんだ？",
						"chinese": "吸收？吸收什么？",
						"french": "Absorber ? Absorber quoi ?",
						"spanish": "¿Absorber? ¿Absorber qué?",
						"vietnamese": "Hấp thụ? Hấp thụ cái gì?",
						"thai": "ดูดซับ? ดูดซับอะไร?",
						"hindi": "सोखना? क्या सोखना है?"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "cedar",
					"content": {
						"korean": "생명력… 기억… 모든 것을. 마치 굶주린 심장처럼.",
						"english": "Life force... memories... everything. Like a starving heart.",
						"japanese": "生命力… 記憶… すべてを。まるで飢えた心臓のように。",
						"chinese": "生命力… 记忆… 一切。就像一颗饥饿的心脏。",
						"french": "La force vitale… les souvenirs… tout. Comme un cœur affamé.",
						"spanish": "La fuerza vital... los recuerdos... todo. Como un corazón hambriento.",
						"vietnamese": "Sức sống... ký ức... mọi thứ. Như một trái tim đói khát.",
						"thai": "พลังชีวิต… ความทรงจำ… ทุกสิ่ง เหมือนหัวใจที่หิวโหย",
						"hindi": "जीवन शक्ति... यादें... सब कुछ। एक भूखे दिल की तरह।"
					}
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 발광 균사체도… 심장처럼 뛰고 있어.",
						"english": "This luminescent mycelium… it beats like a heart.",
						"japanese": "この発光する菌糸も…心臓のように脈打っている。",
						"chinese": "这发光的菌丝体…也像心脏一样跳动着。",
						"french": "Ce mycélium lumineux… bat comme un cœur.",
						"spanish": "Este micelio luminoso… late como un corazón.",
						"vietnamese": "Khối sợi nấm phát sáng này… cũng đang đập như một trái tim.",
						"thai": "ใยราเรืองแสงนี่… ก็เต้นเหมือนหัวใจเลย",
						"hindi": "यह चमकदार कवकजाल… दिल की तरह धड़क रहा है।"
					},
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "어딘가에서… 불길한 자장가 소리가 들려와.",
						"english": "From somewhere… an ominous lullaby echoes.",
						"japanese": "どこからか…不吉な子守歌が聞こえてくる。",
						"chinese": "不知从何处…传来不祥的摇篮曲。",
						"french": "De quelque part… une sinistre berceuse résonne.",
						"spanish": "De algún lugar… una nana siniestra resuena.",
						"vietnamese": "Từ đâu đó… văng vẳng tiếng hát ru đầy điềm gở.",
						"thai": "จากที่ไหนสักแห่ง… มีเสียงเพลงกล่อมเด็กที่น่ากลัวดังมา",
						"hindi": "कहीं से… एक अशुभ लोरी की आवाज़ आ रही है।"
					},
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "점점 더 깊이 잠식당하고 있어. 이 숲의 진정한 심장이 곧 드러날 거야.",
						"english": "It's being encroached upon deeper and deeper. The true heart of this forest will soon be revealed.",
						"japanese": "ますます深く侵食されている。この森の真の心臓が、間もなく明らかになるだろう。",
						"chinese": "正被侵蚀得越来越深。这森林的真正心脏，即将揭露。",
						"french": "Il est envahi de plus en plus profondément. Le véritable cœur de cette forêt sera bientôt révélé.",
						"spanish": "Está siendo invadido cada vez más profundamente. El verdadero corazón de este bosque pronto será revelado.",
						"vietnamese": "Nó đang bị xâm chiếm ngày càng sâu. Trái tim thật sự của khu rừng này sẽ sớm lộ diện.",
						"thai": "มันกำลังถูกกลืนกินลึกลงไปเรื่อยๆ หัวใจที่แท้จริงของป่าแห่งนี้กำลังจะถูกเปิดเผย",
						"hindi": "यह और गहरा होता जा रहा है। इस जंगल का असली दिल जल्द ही सामने आएगा।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "cedar",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "숲의 심장… 그게 뭘 의미하는데?",
						"english": "The heart of the forest… what does that mean?",
						"japanese": "森の心臓…それが何を意味するんだ？",
						"chinese": "森林的心脏…那是什么意思？",
						"french": "Le cœur de la forêt… qu'est-ce que ça veut dire ?",
						"spanish": "El corazón del bosque… ¿qué significa eso?",
						"vietnamese": "Trái tim của khu rừng… điều đó có ý nghĩa gì?",
						"thai": "หัวใจของป่า… หมายความว่าอะไร?",
						"hindi": "जंगल का दिल… उसका क्या मतलब है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "모든 것의 시작이자 끝… 숲의 고통이 가장 깊은 곳. 그리고…",
						"english": "The beginning and end of all things… where the forest's pain is deepest. And…",
						"japanese": "すべての始まりと終わり…森の苦痛が最も深い場所。そして…",
						"chinese": "万物的始与终…森林痛苦最深之处。还有…",
						"french": "Le début et la fin de toutes choses… là où la douleur de la forêt est la plus profonde. Et…",
						"spanish": "El principio y el fin de todas las cosas… donde el dolor del bosque es más profundo. Y…",
						"vietnamese": "Khởi đầu và kết thúc của mọi thứ… nơi nỗi đau của khu rừng sâu sắc nhất. Và…",
						"thai": "จุดเริ่มต้นและจุดจบของทุกสิ่ง… ที่ซึ่งความเจ็บปวดของป่าลึกที่สุด และ…",
						"hindi": "सभी चीज़ों का आरंभ और अंत… जहाँ जंगल का दर्द सबसे गहरा है। और…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "cedar",
					"content": {
						"korean": "그 심장이 깨어나면, 이 모든 혼란이 최고조에 달할 거야.",
						"english": "When that heart awakens, all this chaos will reach its peak.",
						"japanese": "その心臓が目覚めれば、この混乱は最高潮に達するだろう。",
						"chinese": "当那心脏苏醒时，这一切混乱将达到顶峰。",
						"french": "Quand ce cœur s'éveillera, tout ce chaos atteindra son paroxysme.",
						"spanish": "Cuando ese corazón despierte, todo este caos alcanzará su punto máximo.",
						"vietnamese": "Khi trái tim đó thức tỉnh, mọi hỗn loạn này sẽ lên đến đỉnh điểm.",
						"thai": "เมื่อหัวใจนั้นตื่นขึ้น ความวุ่นวายทั้งหมดนี้จะถึงขีดสุด",
						"hindi": "जब वह दिल जागेगा, तो यह सारी अराजकता अपने चरम पर पहुँच जाएगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_2",
					"content": {
						"korean": "더 이상 물러설 곳이 없어.",
						"english": "There's no turning back now.",
						"japanese": "もう後戻りできない。",
						"chinese": "已无路可退。",
						"french": "Plus de retour en arrière possible.",
						"spanish": "No hay vuelta atrás.",
						"vietnamese": "Không còn đường lùi nữa.",
						"thai": "ไม่มีทางถอยอีกแล้ว",
						"hindi": "अब पीछे हटने का कोई रास्ता नहीं है।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "cedar",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"content": {
						"korean": "더 이상은… 위험해. 여기서 멈추는 게 현명해.",
						"english": "Any further… is dangerous. It's wise to stop here.",
						"japanese": "これ以上は…危険だ。ここで止まるのが賢明だ。",
						"chinese": "再往前…很危险。在此止步是明智之举。",
						"french": "Plus loin… c'est dangereux. Il est sage de s'arrêter ici.",
						"spanish": "Más allá… es peligroso. Es sabio detenerse aquí.",
						"vietnamese": "Đi xa hơn nữa… là nguy hiểm. Dừng lại ở đây là khôn ngoan.",
						"thai": "ต่อไปอีก… อันตรายนะ หยุดแค่นี้จะดีกว่า",
						"hindi": "इससे आगे… ख़तरनाक है। यहीं रुकना समझदारी है।"
					},
					"speaker": "cedar",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "멈출 수 없어. 진실을 알아야만 해.",
						"english": "I can't stop. I must know the truth.",
						"japanese": "止められない。真実を知らなければならない。",
						"chinese": "无法停止。我必须知道真相。",
						"french": "Je ne peux pas m'arrêter. Je dois connaître la vérité.",
						"spanish": "No puedo parar. Debo saber la verdad.",
						"vietnamese": "Không thể dừng lại. Tôi phải biết sự thật.",
						"thai": "หยุดไม่ได้หรอก ฉันต้องรู้ความจริง",
						"hindi": "मैं रुक नहीं सकता। मुझे सच जानना होगा।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…후회할 거야. 숲의 심장은 너희가 감당할 수 없을 만큼 거대해.",
						"english": "…You'll regret it. The forest's heart is too vast for you to handle.",
						"japanese": "…後悔するぞ。森の心臓は、お前たちが手に負えるほど小さくない。",
						"chinese": "…你会后悔的。森林的心脏，庞大到你们无法承受。",
						"french": "…Tu le regretteras. Le cœur de la forêt est trop vaste pour que vous puissiez le gérer.",
						"spanish": "…Te arrepentirás. El corazón del bosque es demasiado vasto para que lo manejes.",
						"vietnamese": "…Ngươi sẽ hối hận đấy. Trái tim của khu rừng quá lớn, các ngươi không thể gánh vác nổi đâu.",
						"thai": "…นายจะต้องเสียใจแน่ หัวใจของป่าใหญ่เกินกว่าที่พวกนายจะรับมือได้",
						"hindi": "…तुम्हें पछतावा होगा। जंगल का दिल इतना विशाल है कि तुम इसे संभाल नहीं पाओगे।"
					},
					"speaker": "cedar"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우린 돌아가지 않아. 절대.",
						"english": "We're not going back. Never.",
						"japanese": "我々は戻らない。決して。",
						"chinese": "我们不会回去。绝不。",
						"french": "Nous ne reviendrons pas. Jamais.",
						"spanish": "No volveremos. Jamás.",
						"vietnamese": "Chúng ta sẽ không quay lại. Tuyệt đối không.",
						"thai": "เราจะไม่กลับไป ไม่มีทาง.",
						"hindi": "हम वापस नहीं जाएँगे। कभी नहीं।"
					},
					"speaker": "character_3"
				}
			]
		},
		{
			"dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "숲의 가장 깊은 곳. 거대한 그림자가 움직이기 시작했다.",
						"english": "The deepest part of the forest. A giant shadow began to stir.",
						"japanese": "森の最も深い場所。巨大な影が動き始めた。",
						"chinese": "森林最深处。一个巨大的影子开始蠕动。",
						"french": "Au plus profond de la forêt. Une ombre gigantesque commença à s'agiter.",
						"spanish": "La parte más profunda del bosque. Una sombra gigantesca comenzó a moverse.",
						"vietnamese": "Sâu thẳm nhất khu rừng. Một bóng đen khổng lồ bắt đầu cựa quậy.",
						"thai": "ส่วนที่ลึกที่สุดของป่า เงาขนาดใหญ่เริ่มเคลื่อนไหว.",
						"hindi": "जंगल का सबसे गहरा हिस्सा। एक विशाल परछाई हिलने लगी。"
					}
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "어리석은 자들… 여기까지 오다니. 숲의 섭리를 거스를 순 없어.",
						"english": "Fools... to come this far. You cannot defy the forest's will.",
						"japanese": "愚か者たち…ここまで来るとは。森の摂理に逆らうことはできない。",
						"chinese": "愚蠢的家伙们……竟然来到这里。你们无法违抗森林的法则。",
						"french": "Insensés... d'être venus jusqu'ici. Vous ne pouvez pas défier la providence de la forêt.",
						"spanish": "Necios... haber llegado tan lejos. No podéis desafiar la voluntad del bosque.",
						"vietnamese": "Những kẻ ngốc... dám đến tận đây. Các ngươi không thể chống lại ý trời của rừng.",
						"thai": "พวกคนโง่... กล้ามาถึงที่นี่. เจ้าไม่อาจขัดขวางเจตนารมณ์ของป่าได้.",
						"hindi": "मूर्खों… इतनी दूर आ गए। तुम जंगल के विधान को नहीं तोड़ सकते।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가… 이 숲을 병들게 하는 근원인가?",
						"english": "Are you... the source that sickens this forest?",
						"japanese": "お前が…この森を病ませる根源なのか？",
						"chinese": "你就是……让这片森林生病的根源吗？",
						"french": "Es-tu... la source qui rend cette forêt malade ?",
						"spanish": "¿Eres tú... el origen que enferma este bosque?",
						"vietnamese": "Ngươi... là nguồn gốc khiến khu rừng này bệnh ư?",
						"thai": "เจ้าคือ... ต้นเหตุที่ทำให้ป่านี้ป่วยไข้หรือ?",
						"hindi": "क्या तुम… इस जंगल को बीमार करने का स्रोत हो?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "나는 숲의 심장. 모든 것을 흡수하여… 진정한 평화를 가져올 뿐.",
						"english": "I am the forest's heart. I merely absorb everything... to bring true peace.",
						"japanese": "私は森の心臓。全てを吸収し…真の平和をもたらすだけだ。",
						"chinese": "我是森林的心脏。我只是吸收一切……带来真正的和平。",
						"french": "Je suis le cœur de la forêt. J'absorbe tout... pour apporter la vraie paix.",
						"spanish": "Soy el corazón del bosque. Simplemente absorbo todo... para traer la verdadera paz.",
						"vietnamese": "Ta là trái tim của rừng. Ta chỉ hấp thụ mọi thứ... để mang lại hòa bình chân chính.",
						"thai": "ข้าคือหัวใจของป่า ข้าเพียงแค่ดูดซับทุกสิ่ง... เพื่อนำพาสันติสุขที่แท้จริงมาให้.",
						"hindi": "मैं जंगल का दिल हूँ। मैं बस सब कुछ सोखता हूँ… सच्ची शांति लाने के लिए।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그 평화는 거짓이야! 우리가 널 막을 거야.",
						"english": "That peace is a lie! We will stop you.",
						"japanese": "その平和は偽りだ！我々がお前を止める！",
						"chinese": "那种和平是谎言！我们一定会阻止你。",
						"french": "Cette paix est un mensonge ! Nous t'arrêterons.",
						"spanish": "¡Esa paz es una mentira! Te detendremos.",
						"vietnamese": "Hòa bình đó là dối trá! Chúng ta sẽ ngăn ngươi lại.",
						"thai": "สันติสุขนั่นเป็นของปลอม! เราจะหยุดเจ้าให้ได้.",
						"hindi": "वह शांति एक झूठ है! हम तुम्हें रोकेंगे।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 심장이 거세게 맥동하며 모든 것을 집어삼켰다.",
						"english": "The forest's heart pulsed violently, consuming all.",
						"japanese": "森の心臓が激しく脈打ち、すべてを飲み込んだ。",
						"chinese": "森林之心剧烈跳动，吞噬了一切。",
						"french": "Le cœur de la forêt pulsait violemment, engloutissant tout.",
						"spanish": "El corazón del bosque latió con violencia, devorándolo todo.",
						"vietnamese": "Trái tim của khu rừng đập dữ dội, nuốt chửng mọi thứ.",
						"thai": "หัวใจของป่าเต้นแรง กลืนกินทุกสิ่ง",
						"hindi": "जंगल का हृदय ज़ोर से धड़का, सब कुछ निगल गया।"
					},
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "어리석군. 너희의 의지는… 숲의 섭리 앞에 무의미하다.",
						"english": "Foolish. Your will... is meaningless before the forest's providence.",
						"japanese": "愚かな。お前たちの意志は…森の摂理の前では無意味だ。",
						"chinese": "愚蠢。你们的意志…在森林的旨意面前毫无意义。",
						"french": "Stupide. Votre volonté... est insignifiante face à la providence de la forêt.",
						"spanish": "Insensatos. Vuestra voluntad... es insignificante ante la providencia del bosque.",
						"vietnamese": "Thật ngốc nghếch. Ý chí của các ngươi... vô nghĩa trước sự an bài của rừng xanh.",
						"thai": "โง่เขลา. เจตจำนงของเจ้า... ไร้ความหมายต่อพระประสงค์ของป่า",
						"hindi": "मूर्ख। तुम्हारी इच्छा... जंगल की कृपा के सामने व्यर्थ है।"
					},
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "절대 포기하지 않아…! 다시 일어설 거야.",
						"english": "I'll never give up...! I'll rise again.",
						"japanese": "絶対にあきらめない…！また立ち上がる。",
						"chinese": "绝不放弃…！我会再次站起来。",
						"french": "Je n'abandonnerai jamais… ! Je me relèverai.",
						"spanish": "¡Nunca me rendiré...! Volveré a levantarme.",
						"vietnamese": "Tôi sẽ không bao giờ bỏ cuộc...! Tôi sẽ đứng dậy lần nữa.",
						"thai": "ฉันจะไม่มีวันยอมแพ้...! ฉันจะลุกขึ้นสู้อีกครั้ง",
						"hindi": "मैं कभी हार नहीं मानूँगा...! मैं फिर से उठूँगा।"
					},
					"emotion": "angry",
					"type": "speech"
				}
			],
			"win_dialogue": [
				{
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크윽… 겨우 이 정도라니… 아직… 멀었어…",
						"english": "Ugh... Is this all you've got...? Not... yet...",
						"japanese": "くっ…これしきか…まだ…終わらん…",
						"chinese": "呃……就这点程度吗……还没……结束呢……",
						"french": "Ugh... C'est tout ce que tu as...? Pas... encore...",
						"spanish": "Uf... ¿Esto es todo lo que tienes...? Aún... no...",
						"vietnamese": "Ư... Chỉ có vậy thôi sao... Vẫn... chưa hết...",
						"thai": "อึก... แค่นี้เองรึ... ยัง... ไม่จบ...",
						"hindi": "उफ़… बस इतना ही…? अभी… बाकी है…"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "끝났어….",
						"english": "It's over....",
						"japanese": "終わった。",
						"chinese": "结束了。",
						"french": "C'est fini...",
						"spanish": "Se acabó...",
						"vietnamese": "Xong rồi...",
						"thai": "จบแล้ว...",
						"hindi": "ख़त्म हो गया…।"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "거대한 균사체는 힘을 잃고 스러졌다. 그러나 숲의 심장은… 아직도 뛰고 있었다.",
						"english": "The giant mycelium lost its power and collapsed. But the forest's heart... was still beating.",
						"japanese": "巨大な菌糸体は力を失い、崩れ落ちた。しかし森の心臓は…まだ鼓動していた。",
						"chinese": "巨大的菌丝体失去了力量，倒下了。然而森林的心脏……仍在跳动。",
						"french": "L'énorme mycélium perdit sa puissance et s'effondra. Mais le cœur de la forêt... battait encore.",
						"spanish": "El gigantesco micelio perdió su poder y colapsó. Pero el corazón del bosque... seguía latiendo.",
						"vietnamese": "Thể sợi nấm khổng lồ mất sức và sụp đổ. Nhưng trái tim của rừng... vẫn còn đập.",
						"thai": "กลุ่มใยราขนาดมหึมาสูญเสียพลังและทรุดลง แต่หัวใจของป่า... ยังคงเต้นอยู่.",
						"hindi": "विशाल कवकजाल ने अपनी शक्ति खो दी और ढह गया। लेकिन जंगल का दिल… अभी भी धड़क रहा था।"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…아직 끝나지 않았어. 더 깊이 들어가야 해.",
						"english": "...It's not over yet. We must go deeper.",
						"japanese": "…まだ終わってない。もっと奥へ進む必要がある。",
						"chinese": "……还没有结束。我们必须深入其中。",
						"french": "...Ce n'est pas encore fini. Nous devons aller plus loin.",
						"spanish": "...Aún no ha terminado. Debemos ir más profundo.",
						"vietnamese": "Vẫn chưa kết thúc. Chúng ta phải đi sâu hơn nữa.",
						"thai": "...ยังไม่จบ เราต้องเข้าไปให้ลึกกว่านี้.",
						"hindi": "…अभी ख़त्म नहीं हुआ। हमें और गहराई तक जाना होगा।"
					}
				}
			],
			"id": 15
		}
	]
} as const;
