export const scenario_forest_viscidia_43_05 = {
	"scenario_id": "forest_viscidia_43_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "forest",
	"actors": {
		"fern": {
			"id": "mon_279a32a0-8ec1-4b5b-8179-32df46fdc664",
			"name": {
				"korean": "페른",
				"english": "Fern",
				"japanese": "フェルン",
				"chinese": "费恩",
				"french": "Fern",
				"spanish": "Fern",
				"vietnamese": "Fern",
				"thai": "เฟิร์น",
				"hindi": "फर्न"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19f9763e-413a-485e-787a-9bbfd8208700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/563627d4-0b7c-4865-39d4-1d0a97363c00/public"
		}
	},
	"boss": {
		"pool_id": "pool_BioGenesis_Viscidia_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "숲의 가장 깊은 곳, 기이한 조각상들이 밀집된 공간에 탐험대가 도착했다.",
						"english": "The expedition arrived in the forest's deepest reaches, a space dense with peculiar statues.",
						"japanese": "森の最も深い場所、奇妙な彫像が密集した空間に探検隊が到着した。",
						"chinese": "探险队抵达了森林最深处，一个密布着奇异雕像的空间。",
						"french": "L'expédition arriva dans les profondeurs de la forêt, un espace dense de statues étranges.",
						"spanish": "La expedición llegó a las profundidades del bosque, un espacio denso de extrañas estatuas.",
						"vietnamese": "Đoàn thám hiểm đã đến nơi sâu thẳm nhất của rừng, một không gian dày đặc những bức tượng kỳ dị.",
						"thai": "คณะสำรวจมาถึงส่วนลึกที่สุดของป่า ซึ่งเป็นพื้นที่ที่เต็มไปด้วยรูปปั้นประหลาด",
						"hindi": "अभियान दल जंगल के सबसे गहरे हिस्से में पहुँचा, एक ऐसा स्थान जो अजीब मूर्तियों से घना था।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이게 숲의 심장이라고? 왜 이렇게 기분 나쁜 냄새가 나지?",
						"english": "This is the Heart of the Forest? Why does it smell so unsettling?",
						"japanese": "これが森の心臓だって？なんでこんなに嫌な臭いがするんだ？",
						"chinese": "这就是森林之心？为什么闻起来这么令人不安？",
						"french": "C'est ça le Cœur de la Forêt ? Pourquoi ça sent si étrangement mauvais ?",
						"spanish": "¿Esto es el Corazón del Bosque? ¿Por qué huele tan inquietante?",
						"vietnamese": "Đây là Trái Tim Rừng sao? Sao lại có mùi khó chịu thế này?",
						"thai": "นี่คือใจกลางป่าเหรอ? ทำไมมันถึงมีกลิ่นไม่น่าไว้วางใจแบบนี้ล่ะ?",
						"hindi": "यह जंगल का दिल है? यह इतनी अप्रिय गंध क्यों देता है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"action": "enter",
					"duration_ms": 500,
					"speaker": "fern",
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이곳은… 숲의 가장 신성한 곳이에요. 숲의 생명력이 넘치는 것일 뿐이에요.",
						"english": "This place… it's the most sacred part of the forest. It's merely overflowing with the forest's life force.",
						"japanese": "ここは…森の最も神聖な場所です。森の生命力があふれているだけです。",
						"chinese": "这里是…森林最神圣的地方。它只是充满了森林的生命力。",
						"french": "Cet endroit… c'est la partie la plus sacrée de la forêt. Ce n'est qu'un débordement de la force vitale de la forêt.",
						"spanish": "Este lugar… es la parte más sagrada del bosque. Solo está rebosante de la fuerza vital del bosque.",
						"vietnamese": "Nơi đây… là phần thiêng liêng nhất của khu rừng. Nó chỉ tràn đầy sức sống của rừng thôi.",
						"thai": "ที่นี่…คือส่วนที่ศักดิ์สิทธิ์ที่สุดของป่า มันเป็นแค่พลังชีวิตของป่าที่เอ่อล้นออกมาเท่านั้นเอง",
						"hindi": "यह जगह… जंगल का सबसे पवित्र हिस्सा है। यह बस जंगल की जीवन शक्ति से उमड़ रहा है।"
					},
					"speaker": "fern"
				},
				{
					"content": {
						"korean": "생명력이 넘친다고? 이 역겨운 달콤함이?",
						"english": "Overflowing with life force? This sickening sweetness?",
						"japanese": "生命力があふれてるだって？この忌まわしい甘さが？",
						"chinese": "充满了生命力？这令人作呕的甜味吗？",
						"french": "Débordant de force vitale ? Cette douceur écœurante ?",
						"spanish": "¿Rebosante de fuerza vital? ¿Esta dulzura nauseabunda?",
						"vietnamese": "Tràn đầy sức sống? Cái mùi ngọt ngào khó chịu này sao?",
						"thai": "พลังชีวิตที่เอ่อล้น? ไอ้กลิ่นหวานน่าขยะแขยงนี่น่ะเหรอ?",
						"hindi": "जीवन शक्ति से उमड़ रहा है? यह घिनौनी मिठास?"
					},
					"emotion": "angry",
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
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "fern",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 조각상들은… 잊힌 부족의 유산이라고 전해져요. 숲은… 스스로를 보존하려 할 뿐이에요.",
						"english": "These statues… are said to be the legacy of a forgotten tribe. The forest… merely seeks to preserve itself.",
						"japanese": "これらの彫像は…忘れ去られた部族の遺産と伝えられています。森は…ただ自らを保存しようとしているだけです。",
						"chinese": "这些雕像…据说是被遗忘部落的遗产。森林…只是想自我保存。",
						"french": "Ces statues… sont censées être l'héritage d'une tribu oubliée. La forêt… cherche simplement à se préserver.",
						"spanish": "Se dice que estas estatuas… son el legado de una tribu olvidada. El bosque… solo intenta preservarse a sí mismo.",
						"vietnamese": "Những bức tượng này… được cho là di sản của một bộ lạc đã lãng quên. Rừng… chỉ đang cố gắng tự bảo tồn mình thôi.",
						"thai": "รูปปั้นพวกนี้…ว่ากันว่าเป็นมรดกของชนเผ่าที่ถูกลืม ป่า…ก็แค่พยายามรักษาสภาพตัวเองเท่านั้นเอง",
						"hindi": "ये मूर्तियाँ… एक भूली हुई जनजाति की विरासत बताई जाती हैं। जंगल… बस खुद को बचाना चाहता है।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이게 보존이라고? 변이된 동물들도 그렇고, 모든 것이 뒤틀려 있는데?",
						"english": "This is preservation? With mutated animals and everything else twisted?",
						"japanese": "これが保存だと？変異した動物たちも、全てが歪んでいるのに？",
						"chinese": "这就是保存？变异的动物也是，所有一切都扭曲了？",
						"french": "C'est ça, la préservation ? Avec des animaux mutés et tout le reste déformé ?",
						"spanish": "¿Esto es preservación? ¿Con animales mutados y todo lo demás retorcido?",
						"vietnamese": "Đây là bảo tồn sao? Ngay cả động vật biến dị, mọi thứ đều biến dạng thế này?",
						"thai": "นี่คือการรักษาสภาพเหรอ? ทั้งสัตว์กลายพันธุ์ ทั้งทุกอย่างบิดเบี้ยวไปหมดแบบนี้?",
						"hindi": "यह संरक्षण है? उत्परिवर्तित जानवरों के साथ, सब कुछ विकृत है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…숲은… 그저 자신만의 방식으로 생명을 이어갈 뿐이에요.",
						"english": "…The forest… merely continues life in its own way.",
						"japanese": "…森は…ただ自分なりの方法で生命を繋いでいるだけです。",
						"chinese": "森林…只是以它自己的方式延续着生命。",
						"french": "…La forêt… ne fait que continuer la vie à sa manière.",
						"spanish": "…El bosque… simplemente continúa la vida a su manera.",
						"vietnamese": "…Rừng… chỉ đơn thuần tiếp nối sự sống theo cách riêng của nó.",
						"thai": "…ป่า…ก็แค่ดำเนินชีวิตต่อไปในแบบของมันเท่านั้นเอง",
						"hindi": "…जंगल… बस अपने तरीके से जीवन जारी रखता है।"
					}
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"spot": [
						3,
						3
					],
					"speaker": "fern",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"emotion": "base",
					"content": {
						"korean": "역겹고 달콤한 냄새가 더욱 강해지며 탐험대의 정신을 혼미하게 했다.",
						"english": "The sickeningly sweet scent grew stronger, disorienting the expedition team.",
						"japanese": "忌まわしく甘い匂いがさらに強くなり、探検隊の精神を混濁させた。",
						"chinese": "令人作呕的甜味变得更浓，使探险队的精神变得混乱。",
						"french": "L'odeur écœurante et sucrée s'intensifia, désorientant l'équipe d'expédition.",
						"spanish": "El olor dulzón y nauseabundo se hizo más fuerte, desorientando al equipo de expedición.",
						"vietnamese": "Mùi ngọt ngào khó chịu trở nên mạnh hơn, làm tinh thần của đoàn thám hiểm trở nên mụ mị.",
						"thai": "กลิ่นหวานน่าขยะแขยงรุนแรงขึ้นเรื่อยๆ ทำให้จิตใจของทีมสำรวจสับสนมึนงง",
						"hindi": "घिनौनी मीठी गंध और तेज हो गई, जिससे अभियान दल भ्रमित हो गया।"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "이 냄새는… 단순한 꽃향기가 아니야. 우리를 공격하고 있어.",
						"english": "This scent… isn't just a simple floral fragrance. It's attacking us.",
						"japanese": "この匂いは…ただの花の香りじゃない。私たちを攻撃しているんだ。",
						"chinese": "这气味…不仅仅是简单的花香。它正在攻击我们。",
						"french": "Cette odeur… ce n'est pas un simple parfum floral. Elle nous attaque.",
						"spanish": "Este olor… no es solo una simple fragancia floral. Nos está atacando.",
						"vietnamese": "Mùi này… không phải là hương hoa đơn thuần. Nó đang tấn công chúng ta.",
						"thai": "กลิ่นนี้…ไม่ใช่แค่กลิ่นดอกไม้ธรรมดาๆ มันกำลังโจมตีพวกเราอยู่",
						"hindi": "यह गंध… सिर्फ एक साधारण फूलों की खुशबू नहीं है। यह हम पर हमला कर रही है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 냄새는… 모든 것을 자신에게 동화시키려는… Viscidia의 포자예요.",
						"english": "This scent… is the spores of Viscidia… trying to assimilate everything into itself.",
						"japanese": "この匂いは…すべてを自分に同化させようとする…Viscidiaの胞子です。",
						"chinese": "这气味…是Viscidia的孢子…试图将一切同化为自身。",
						"french": "Cette odeur… ce sont les spores de Viscidia… qui tentent d'assimiler tout à elles-mêmes.",
						"spanish": "Este olor… son las esporas de Viscidia… tratando de asimilarlo todo a sí mismas.",
						"vietnamese": "Mùi này… là bào tử của Viscidia… đang cố gắng đồng hóa mọi thứ vào nó.",
						"thai": "กลิ่นนี้…คือสปอร์ของ Viscidia…ที่พยายามจะกลืนทุกสิ่งทุกอย่างให้เป็นส่วนหนึ่งของมัน",
						"hindi": "यह गंध… विसीडिया के बीजाणु हैं… जो सब कुछ अपने में मिलाना चाहते हैं।"
					},
					"type": "speech",
					"speaker": "fern"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "그럼 변이된 동물들은… 전부 Viscidia의 자손들이었단 말이야?",
						"english": "So the mutated animals… they were all descendants of Viscidia?",
						"japanese": "じゃあ変異した動物たちは…全部Viscidiaの子孫だったっていうのか？",
						"chinese": "那么那些变异的动物…都是Viscidia的后代吗？",
						"french": "Alors les animaux mutés… étaient tous des descendants de Viscidia ?",
						"spanish": "Entonces, ¿los animales mutados… eran todos descendientes de Viscidia?",
						"vietnamese": "Vậy là những động vật biến dị đó… đều là hậu duệ của Viscidia sao?",
						"thai": "งั้นสัตว์กลายพันธุ์พวกนั้น…ก็เป็นลูกหลานของ Viscidia ทั้งหมดเลยเหรอ?",
						"hindi": "तो क्या वे उत्परिवर्तित जानवर… सभी विसीडिया की संतानें थे?"
					},
					"type": "speech"
				},
				{
					"speaker": "fern",
					"content": {
						"korean": "…그래요. 숲의 생명력을 흡수해서… 새롭게 만들어낸 것들…",
						"english": "...Yes. Things newly created by absorbing the forest's life force...",
						"japanese": "「…そう。森の生命力を吸収して…新たに作り出されたものたち…」",
						"chinese": "“……是的。吸收了森林的生命力……新创造出来的东西……”",
						"french": "...Oui. Des choses nouvellement créées en absorbant la force vitale de la forêt...",
						"spanish": "...Sí. Cosas creadas de nuevo al absorber la fuerza vital del bosque...",
						"vietnamese": "...Đúng vậy. Những thứ mới được tạo ra bằng cách hấp thụ sinh lực của rừng...",
						"thai": "...ใช่แล้ว สิ่งที่ถูกสร้างขึ้นใหม่โดยการดูดซับพลังชีวิตของป่า...",
						"hindi": "...हाँ। जंगल की जीवन शक्ति को सोखकर... नई बनाई गई चीजें..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"speaker": "fern",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "Viscidia의 존재감이 숲을 압도하며 탐험대는 더 깊은 곳으로 향했다.",
						"english": "Viscidia's presence overwhelmed the forest as the expedition ventured deeper.",
						"japanese": "「Viscidiaの存在感が森を圧倒し、探検隊はさらに奥へと進んだ。」",
						"chinese": "Viscidia的存在感压倒了森林，探险队向更深处进发。",
						"french": "La présence de Viscidia submergeait la forêt tandis que l'expédition s'enfonçait plus profondément.",
						"spanish": "La presencia de Viscidia abrumaba el bosque mientras la expedición se adentraba más.",
						"vietnamese": "Sự hiện diện của Viscidia áp đảo khu rừng khi đoàn thám hiểm tiến sâu hơn.",
						"thai": "การปรากฏตัวของ Viscidia ครอบงำป่า และคณะสำรวจก็มุ่งหน้าสู่ส่วนลึกยิ่งขึ้น",
						"hindi": "Viscidia की उपस्थिति ने जंगल को अभिभूत कर दिया और अभियान दल गहराई में चला गया।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "더 이상 물러설 곳은 없어. 모든 게 이 괴물 때문이었어.",
						"english": "There's no turning back now. This monster is to blame for everything.",
						"japanese": "「もう後戻りはできない。すべてはこの怪物のせいだ。」",
						"chinese": "已无退路。一切都是因为这个怪物。",
						"french": "Plus de retour en arrière possible. Tout est de la faute de ce monstre.",
						"spanish": "Ya no hay vuelta atrás. Todo fue por culpa de este monstruo.",
						"vietnamese": "Không còn đường lui nữa. Tất cả là do con quái vật này.",
						"thai": "ไม่มีทางถอยอีกแล้ว ทุกสิ่งเป็นเพราะสัตว์ประหลาดตัวนี้",
						"hindi": "अब कोई वापसी नहीं है। यह सब इस राक्षस की वजह से था।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "Viscidia는… 단순한 괴물이 아니에요. 잃어버린 부족의… 마지막 염원. 왜곡된 생명 보존 종자…",
						"english": "Viscidia... isn't just a monster. It's the lost tribe's... final wish. A distorted seed for preserving life...",
						"japanese": "「Viscidiaは…ただの怪物ではない。失われた部族の…最後の願い。歪んだ生命保存の種子…」",
						"chinese": "Viscidia……它不是一个简单的怪物。它是失落部落的……最后愿望。扭曲的生命保存种子……",
						"french": "Viscidia... n'est pas qu'un monstre. C'est le dernier souhait... de la tribu perdue. Une semence de préservation de la vie déformée...",
						"spanish": "Viscidia... no es solo un monstruo. Es el último deseo... de la tribu perdida. Una semilla distorsionada para preservar la vida...",
						"vietnamese": "Viscidia... không chỉ là một con quái vật. Đó là... ước nguyện cuối cùng của bộ tộc đã mất. Một hạt giống bảo tồn sự sống bị biến dạng...",
						"thai": "Viscidia... ไม่ใช่แค่สัตว์ประหลาด เป็น... ความปรารถนาสุดท้ายของเผ่าที่สาบสูญ เมล็ดพันธุ์การถนอมชีวิตที่บิดเบี้ยว...",
						"hindi": "विसिडिया... सिर्फ एक राक्षस नहीं है। यह खोई हुई जनजाति की... आखिरी इच्छा है। जीवन को संरक्षित करने के लिए एक विकृत बीज..."
					},
					"emotion": "angry",
					"speaker": "fern"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "생명 보존? 이 끔찍한 것이? 거짓말 마!",
						"english": "Preserving life? This horrible thing? Don't lie!",
						"japanese": "「生命保存？このおぞましいものが？嘘をつくな！」",
						"chinese": "生命保存？这个可怕的东西？别撒谎！",
						"french": "Préserver la vie ? Cette chose horrible ? Ne mens pas !",
						"spanish": "¿Preservar la vida? ¿Esta cosa horrible? ¡No mientas!",
						"vietnamese": "Bảo tồn sự sống? Cái thứ kinh khủng này ư? Đừng nói dối!",
						"thai": "ถนอมชีวิต? สิ่งที่น่ากลัวนี้? อย่าโกหก!",
						"hindi": "जीवन को बचाना? यह भयानक चीज? झूठ मत बोलो!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "내 눈으로 봤어요. 부족의 기록을… 이 아름다운 숲 뒤에… 이런 진실이 숨겨져 있었다니…",
						"english": "I saw it with my own eyes. The tribe's records... To think such a truth was hidden behind this beautiful forest...",
						"japanese": "「この目で見たんです。部族の記録を…この美しい森の裏に…こんな真実が隠されていたなんて…」",
						"chinese": "我亲眼看到了。部落的记录……没想到在这美丽的森林背后……竟然隐藏着这样的真相……",
						"french": "Je l'ai vu de mes propres yeux. Les archives de la tribu... Dire qu'une telle vérité était cachée derrière cette belle forêt...",
						"spanish": "Lo vi con mis propios ojos. Los registros de la tribu... Pensar que tal verdad estaba oculta detrás de este hermoso bosque...",
						"vietnamese": "Tôi đã nhìn thấy tận mắt. Biên niên sử của bộ tộc... Nghĩ rằng một sự thật như vậy lại ẩn giấu đằng sau khu rừng tuyệt đẹp này...",
						"thai": "ฉันเห็นมันด้วยตาตัวเอง บันทึกของชนเผ่า... ไม่น่าเชื่อว่าความจริงเช่นนี้จะซ่อนอยู่เบื้องหลังป่าที่สวยงามแห่งนี้...",
						"hindi": "मैंने इसे अपनी आँखों से देखा है। जनजाति के रिकॉर्ड... यह सोचना कि इस खूबसूरत जंगल के पीछे ऐसी सच्चाई छिपी हुई थी..."
					},
					"speaker": "fern"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "Viscidia의 거대한 꽃잎이 서서히 시들기 시작했다. 역겹던 냄새도 옅어졌다.",
						"english": "Viscidia's giant petals slowly began to wither. The repulsive stench also faded.",
						"japanese": "ヴィスキディアの巨大な花弁がゆっくりと枯れ始めた。忌まわしい匂いも薄れていった。",
						"chinese": "维斯奇迪亚的巨大花瓣开始缓缓枯萎。令人作呕的气味也变淡了。",
						"french": "Les immenses pétales de Viscidia ont commencé à se flétrir lentement. L'odeur répugnante s'est également estompée.",
						"spanish": "Los gigantes pétalos de Viscidia comenzaron a marchitarse lentamente. El hedor repulsivo también se desvaneció.",
						"vietnamese": "Những cánh hoa khổng lồ của Viscidia dần tàn lụi. Mùi hôi thối cũng nhạt dần.",
						"thai": "กลีบดอกขนาดยักษ์ของวิสซิเดียเริ่มเหี่ยวเฉาลงช้าๆ กลิ่นเหม็นที่น่ารังเกียจก็จางลงเช่นกัน",
						"hindi": "विसीडिया की विशाल पंखुड़ियाँ धीरे-धीरे मुरझाने लगीं। घिनौनी दुर्गंध भी कम हो गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"content": {
						"korean": "흐흐흐… 이것은… 시작일 뿐… 숲은… 영원히… 나의 자궁 속에서… 새로운 생명을… 잉태할 것이다…",
						"english": "Hehehe... This is... just the beginning... The forest... will forever... in my womb... conceive new life...",
						"japanese": "フフフ…これは…始まりに過ぎない…森は…永遠に…私の子宮の中で…新たな生命を…宿すだろう…",
						"chinese": "呵呵呵…这…只是开始…森林…将永远…在我子宫中…孕育新生命…",
						"french": "Hahaha... Ce n'est... que le début... La forêt... concevra... pour toujours... une nouvelle vie... dans mon sein...",
						"spanish": "Jajaja... Esto es... solo el principio... El bosque... por siempre... en mi vientre... concebirá nueva vida...",
						"vietnamese": "Hahaha... Đây chỉ là... khởi đầu thôi... Rừng sẽ... mãi mãi... trong tử cung của ta... ươm mầm sự sống mới...",
						"thai": "ฮ่าๆๆ... นี่มัน... แค่จุดเริ่มต้น... ป่าจะ... ตลอดไป... ในครรภ์ของข้า... ให้กำเนิดชีวิตใหม่...",
						"hindi": "हाहहा... यह तो... बस शुरुआत है... जंगल... हमेशा के लिए... मेरे गर्भ में... नया जीवन... धारण करेगा..."
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "헛소리 마! 숲은 돌아올 거야! 우리가 지켜낼 거야!",
						"english": "Don't talk nonsense! The forest will return! We'll protect it!",
						"japanese": "馬鹿なこと言うな！森は戻る！私たちが守り抜く！",
						"chinese": "别胡说！森林会回来的！我们会守护它！",
						"french": "Ne dis pas n'importe quoi ! La forêt reviendra ! Nous la protègerons !",
						"spanish": "¡No digas tonterías! ¡El bosque volverá! ¡Lo protegeremos!",
						"vietnamese": "Đừng nói xằng bậy! Rừng sẽ trở lại! Chúng ta sẽ bảo vệ nó!",
						"thai": "อย่าพูดไร้สาระ! ป่าจะกลับมา! เราจะปกป้องมันเอง!",
						"hindi": "बकवास बंद करो! जंगल वापस आएगा! हम उसकी रक्षा करेंगे!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "fern",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "fern",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "Viscidia… 너도… 고통스러웠겠지… 하지만… 이건… 아니었어…",
						"english": "Viscidia... you must have... suffered too... But... this... wasn't right...",
						"japanese": "ヴィスキディア…お前も…苦しんだのだろう…だが…これは…違った…",
						"chinese": "维斯奇迪亚…你…也曾痛苦吧…但是…这…不是对的…",
						"french": "Viscidia... tu as dû... souffrir aussi... Mais... ce n'était... pas ça...",
						"spanish": "Viscidia... tú también... habrás sufrido... Pero... esto... no era lo correcto...",
						"vietnamese": "Viscidia... ngươi cũng... đã đau khổ, đúng không... Nhưng... điều này... không đúng...",
						"thai": "วิสซิเดีย... เจ้าก็คง... ทรมานเหมือนกันสินะ... แต่... นี่มัน... ไม่ใช่...",
						"hindi": "विसीडिया... तुम्हें भी... कष्ट हुआ होगा... लेकिन... यह... सही नहीं था..."
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "Viscidia의 심장이 멎자, 숲은 기이한 침묵에 잠겼다. 그러나 모든 것이 끝난 것인지, 새로운 시작인지 알 수 없었다.",
						"english": "As Viscidia's heart stopped, the forest fell into an eerie silence. Yet, it was unclear if everything had ended or if it was a new beginning.",
						"japanese": "ヴィスキディアの心臓が止まると、森は奇妙な沈黙に包まれた。しかし、すべてが終わったのか、それとも新たな始まりなのか、知る由もなかった。",
						"chinese": "维斯奇迪亚的心脏停止跳动后，森林陷入一片诡异的寂静。然而，无人知晓这究竟是万物终结，抑或是一个崭新的开始。",
						"french": "Alors que le cœur de Viscidia s'arrêtait, la forêt sombra dans un silence étrange. Pourtant, il était impossible de savoir si tout était fini ou si c'était un nouveau commencement.",
						"spanish": "Cuando el corazón de Viscidia se detuvo, el bosque cayó en un silencio inquietante. Sin embargo, no se sabía si todo había terminado o si era un nuevo comienzo.",
						"vietnamese": "Khi trái tim Viscidia ngừng đập, khu rừng chìm vào một sự im lặng kỳ lạ. Tuy nhiên, không thể biết liệu mọi thứ đã kết thúc hay đây là một khởi đầu mới.",
						"thai": "เมื่อหัวใจของวิสซิเดียหยุดเต้น ป่าก็ตกอยู่ในความเงียบงันที่แปลกประหลาด แต่ก็ไม่อาจรู้ได้ว่าทุกสิ่งได้จบลงแล้ว หรือเป็นเพียงจุดเริ่มต้นใหม่",
						"hindi": "जब विसीडिया का हृदय रुक गया, तो जंगल एक अजीब खामोशी में डूब गया। हालांकि, यह स्पष्ट नहीं था कि सब कुछ खत्म हो गया था या यह एक नई शुरुआत थी।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "숲의 심장이라 불리던 거대한 발광 꽃, Viscidia가 모습을 드러냈다.",
						"english": "The gigantic glowing flower, Viscidia, known as the heart of the forest, revealed itself.",
						"japanese": "「森の心臓と呼ばれた巨大な発光花、Viscidiaが姿を現した。」",
						"chinese": "被称为森林之心、巨大的发光之花——Viscidia显露了真容。",
						"french": "L'énorme fleur luminescente, Viscidia, surnommée le cœur de la forêt, se révéla.",
						"spanish": "La gigantesca flor luminiscente, Viscidia, conocida como el corazón del bosque, se reveló.",
						"vietnamese": "Bông hoa phát sáng khổng lồ, Viscidia, được gọi là trái tim của rừng, đã lộ diện.",
						"thai": "ดอกไม้เรืองแสงขนาดยักษ์ วิสซิเดีย ซึ่งถูกขนานนามว่าเป็นหัวใจของป่า ได้ปรากฏตัวขึ้น",
						"hindi": "जंगल का दिल कही जाने वाली विशाल चमकती फूल, विसिडिया, सामने आई।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "오랜만이야, 나의 새로운 가족이여… 네 안의 생명력은… 잊힌 부족의 찬란한 유산이 될 테니… 어서 와… 나의 따뜻한 자궁 속으로… 크크크…",
						"english": "Long time no see, my new family... The life force within you... will become the glorious legacy of the forgotten tribe... Come now... into my warm womb... Hehehe...",
						"japanese": "「久しぶりだな、我が新たな家族よ…お前の中の生命力は…忘れられた部族の輝かしい遺産となるだろう…さあ、来い…我が温かい子宮の中へ…ククク…」",
						"chinese": "好久不见，我的新家人……你体内的生命力……将成为被遗忘部落的灿烂遗产……快来吧……进入我温暖的子宫……呵呵呵……",
						"french": "Ça fait longtemps, ma nouvelle famille... La force vitale en toi... deviendra le glorieux héritage de la tribu oubliée... Viens maintenant... dans mon utérus chaleureux... Hahaha...",
						"spanish": "Cuánto tiempo sin verte, mi nueva familia... La fuerza vital en ti... se convertirá en el glorioso legado de la tribu olvidada... Ven ahora... a mi cálido útero... Jejeje...",
						"vietnamese": "Đã lâu không gặp, gia đình mới của ta... Sinh lực trong ngươi... sẽ trở thành di sản huy hoàng của bộ tộc bị lãng quên... Mau vào đi... vào tử cung ấm áp của ta... Khà khà khà...",
						"thai": "ไม่ได้เจอกันนานนะ ครอบครัวใหม่ของข้า... พลังชีวิตในตัวเจ้า... จะกลายเป็นมรดกอันรุ่งโรจน์ของเผ่าที่ถูกลืม... มาเถอะ... สู่ครรภ์อันอบอุ่นของข้า... คิกคิกคิก...",
						"hindi": "बहुत समय हो गया, मेरे नए परिवार... तुम्हारे भीतर की जीवन शक्ति... भूले हुए कबीले की शानदार विरासत बनेगी... अब आओ... मेरे गर्म गर्भाशय में... हीहीही..."
					},
					"speaker": "boss"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이게 숲의 심장이라고? 역겨운 괴물! 당장 멈춰!",
						"english": "This is the heart of the forest? Disgusting monster! Stop at once!",
						"japanese": "「これが森の心臓だと？忌まわしき怪物め！今すぐ止めろ！」",
						"chinese": "这就是森林之心？恶心的怪物！立刻住手！",
						"french": "C'est ça le cœur de la forêt ? Monstre dégoutant ! Arrête tout de suite !",
						"spanish": "¿Esto es el corazón del bosque? ¡Monstruo asqueroso! ¡Detente ahora mismo!",
						"vietnamese": "Đây là trái tim của rừng ư? Con quái vật kinh tởm! Dừng lại ngay!",
						"thai": "นี่คือหัวใจของป่าหรือ? สัตว์ประหลาดน่ารังเกียจ! หยุดเดี๋ยวนี้!",
						"hindi": "यह जंगल का दिल है? घिनौना राक्षस! तुरंत रुक जाओ!"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"speaker": "fern"
				},
				{
					"speaker": "fern",
					"emotion": "angry",
					"content": {
						"korean": "Viscidia… 너는 부족의 비극이야… 아름다운 숲을 이렇게 뒤틀다니… 내가… 막을게.",
						"english": "Viscidia... you are the tribe's tragedy... To twist such a beautiful forest like this... I... will stop you.",
						"japanese": "「Viscidia…お前は部族の悲劇だ…こんな美しい森を歪めるなんて…私が…止める。」",
						"chinese": "Viscidia……你是部落的悲剧……竟然把这么美丽的森林扭曲成这样……我……会阻止你。",
						"french": "Viscidia... tu es la tragédie de la tribu... Tordre une si belle forêt de cette façon... Je... t'arrêterai.",
						"spanish": "Viscidia... eres la tragedia de la tribu... Torcer un bosque tan hermoso así... Yo... te detendré.",
						"vietnamese": "Viscidia... ngươi là bi kịch của bộ tộc... dám làm méo mó khu rừng xinh đẹp này... Ta... sẽ ngăn ngươi lại.",
						"thai": "Viscidia... เจ้าคือโศกนาฏกรรมของเผ่า... ที่บิดเบือนป่าที่สวยงามเช่นนี้... ข้า... จะหยุดเจ้าเอง",
						"hindi": "विसिडिया... तुम जनजाति की त्रासदी हो... इस तरह एक खूबसूरत जंगल को विकृत करना... मैं... तुम्हें रोकूंगा।"
					},
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "Viscidia의 촉수들이 맹렬히 뻗어 나와 탐험대를 감싸고, 꽃의 내부에서 섬뜩한 흡입음이 울려 퍼졌다.",
						"english": "Viscidia's tentacles fiercely extended, engulfing the expedition team, and an eerie sucking sound echoed from within the flower.",
						"japanese": "ヴィスキディアの触手が猛烈に伸び、探検隊を包み込み、花の内側からおぞましい吸引音が響き渡った。",
						"chinese": "维斯奇迪亚的触手猛烈伸出，缠绕住探险队，花朵内部传出令人毛骨悚然的吸食声。",
						"french": "Les tentacules de Viscidia s'étirèrent violemment, enveloppant l'équipe d'expédition, et un son d'aspiration glaçant résonna de l'intérieur de la fleur.",
						"spanish": "Los tentáculos de Viscidia se extendieron ferozmente, envolviendo al equipo de expedición, y un espeluznante sonido de succión resonó desde el interior de la flor.",
						"vietnamese": "Những xúc tu của Viscidia vươn ra dữ dội, quấn lấy đội thám hiểm, và một âm thanh hút rùng rợn vang lên từ bên trong bông hoa.",
						"thai": "หนวดของวิสซิเดียยื่นออกมาอย่างดุร้าย พันรอบทีมสำรวจ และมีเสียงดูดที่น่าขนลุกดังขึ้นจากภายในดอกไม้",
						"hindi": "विसीडिया के टेंटकल (स्पर्शक) भयंकर रूप से फैले, अभियान दल को घेर लिया, और फूल के अंदर से एक डरावनी चूसने वाली आवाज़ गूंज उठी।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "크크크… 어리석은 것들… 너희의 생명력도… 나의 일부가 될 것이다… 영원히…",
						"english": "Keke... Foolish ones... Your life force too... will become part of me... forever...",
						"japanese": "ククク…愚かな者たちめ…お前たちの生命力も…私の…一部となるだろう…永遠に…",
						"chinese": "呵呵呵…愚蠢的东西…你们的生命力…也将成为…我的一部分…永远…",
						"french": "Hahaha... Insensés... Votre force vitale aussi... fera partie de moi... pour toujours...",
						"spanish": "Jajaja... Estúpidos... Vuestra fuerza vital también... se convertirá en parte de mí... para siempre...",
						"vietnamese": "Hahaha... Những kẻ ngu ngốc... Sức sống của các ngươi... cũng sẽ trở thành một phần của ta... mãi mãi...",
						"thai": "ฮ่าๆๆ... พวกโง่เอ๊ย... พลังชีวิตของพวกเจ้าก็... จะกลายเป็นส่วนหนึ่งของข้า... ตลอดไป...",
						"hindi": "हाहाहा... मूर्ख प्राणी... तुम्हारी जीवन शक्ति भी... मेरा हिस्सा बन जाएगी... हमेशा के लिए..."
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어! 여기서… 포기할 순 없어!",
						"english": "It's not... over yet! We can't... give up here!",
						"japanese": "まだ…終わってない！ここで…諦めるわけにはいかない！",
						"chinese": "还没…结束！我们不能…在这里放弃！",
						"french": "Ce n'est pas... encore fini ! On ne peut pas... abandonner ici !",
						"spanish": "¡Aún... no ha terminado! ¡No podemos... rendirnos aquí!",
						"vietnamese": "Vẫn chưa... kết thúc! Chúng ta không thể... bỏ cuộc ở đây!",
						"thai": "ยัง... ไม่จบ! เราจะ... ยอมแพ้ตรงนี้ไม่ได้!",
						"hindi": "अभी... खत्म नहीं हुआ! यहां... हार नहीं मान सकते!"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "탐험대는 Viscidia의 자궁 속으로 빨려 들어가는 듯했다. 숲의 운명은 아직 결정되지 않았다.",
						"english": "The expedition team seemed to be drawn into Viscidia's womb. The forest's fate was yet to be decided.",
						"japanese": "探検隊はヴィスキディアの子宮の中へ吸い込まれていくようだった。森の運命はまだ決まっていなかった。",
						"chinese": "探险队似乎被吸入维斯奇迪亚的子宫深处。森林的命运尚未确定。",
						"french": "L'équipe d'expédition semblait aspirée dans le sein de Viscidia. Le destin de la forêt n'était pas encore scellé.",
						"spanish": "El equipo de expedición parecía ser arrastrado al vientre de Viscidia. El destino del bosque aún no estaba decidido.",
						"vietnamese": "Đội thám hiểm dường như bị hút vào tử cung của Viscidia. Số phận của khu rừng vẫn chưa được định đoạt.",
						"thai": "ทีมสำรวจดูเหมือนถูกดูดเข้าไปในครรภ์ของวิสซิเดีย ชะตากรรมของป่ายังไม่ถูกตัดสิน",
						"hindi": "अभियान दल विसीडिया के गर्भ में खिंचता हुआ लग रहा था। जंगल का भाग्य अभी तय नहीं हुआ था।"
					},
					"type": "speech",
					"speaker": "narrator"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"숲의 가장 깊은 곳. 그곳은 침묵이 아닌, 끈적한 생명력으로 가득했다.",
			"기이한 조각상들이 길을 안내했고, 역겹도록 달콤한 냄새가 정신을 잠식했다.",
			"우리는 마침내 '숲의 심장'이라 불리던 존재, Viscidia와 마주했다.",
			"아름다움 뒤에 숨겨진 진실은 끔찍했고, 파멸은 예정된 수순처럼 보였다."
		],
		"english": [
			"The forest's deepest reaches. It was filled not with silence, but a viscous vitality.",
			"Peculiar statues guided the way, and a nauseatingly sweet scent encroached upon the mind.",
			"We finally confronted Viscidia, the being known as the 'Heart of the Forest'.",
			"The truth hidden behind the beauty was horrifying, and doom seemed an inevitable course."
		],
		"japanese": [
			"森の最も深い場所。そこは沈黙ではなく、粘つく生命力に満ちていた。",
			"奇妙な彫像が道を導き、吐き気を催すほど甘い香りが精神を侵食した。",
			"我々はついに「森の心臓」と呼ばれた存在、Viscidiaと対峙した。",
			"美しさの裏に隠された真実は恐ろしく、破滅は定められた手順のように見えた。"
		],
		"chinese": [
			"森林最深处。那里没有寂静，只有黏稠的生命力。",
			"奇异的雕像指引着道路，令人作呕的甜腻气味侵蚀着精神。",
			"我们最终面对了被称为“森林之心”的存在，Viscidia。",
			"美丽背后隐藏的真相是可怕的，毁灭似乎是注定的结局。"
		],
		"french": [
			"Les profondeurs de la forêt. Elles n'étaient pas silencieuses, mais débordaient d'une vitalité visqueuse.",
			"Des statues étranges guidaient le chemin, et une odeur nauséabonde et douceâtre envahissait l'esprit.",
			"Nous avons finalement fait face à Viscidia, l'être connu sous le nom de « Cœur de la Forêt ».",
			"La vérité cachée derrière la beauté était horrible, et la ruine semblait inévitable."
		],
		"spanish": [
			"Las profundidades más recónditas del bosque. No reinaba el silencio, sino una vitalidad pegajosa.",
			"Estatuas extrañas guiaban el camino, y un aroma dulzón y nauseabundo invadía la mente.",
			"Finalmente nos encontramos con Viscidia, el ser conocido como el 'Corazón del Bosque'.",
			"La verdad oculta tras la belleza era terrible, y la perdición parecía un destino inevitable."
		],
		"vietnamese": [
			"Nơi sâu thẳm nhất của rừng. Nơi đó không phải sự tĩnh lặng, mà tràn ngập sức sống dẻo quánh.",
			"Những bức tượng kỳ dị dẫn lối, và mùi hương ngọt ngào đến ghê tởm xâm chiếm tâm trí.",
			"Cuối cùng, chúng tôi đã đối mặt với Viscidia, sinh vật được gọi là 'Trái tim của rừng'.",
			"Sự thật ẩn sau vẻ đẹp thật kinh hoàng, và sự diệt vong dường như là điều không thể tránh khỏi."
		],
		"thai": [
			"ส่วนลึกที่สุดของป่า ที่นั่นไม่ได้เต็มไปด้วยความเงียบงัน แต่เป็นพลังชีวิตที่หนืดเหนียว",
			"รูปปั้นประหลาดนำทาง และกลิ่นหอมหวานที่ชวนคลื่นไส้เข้าครอบงำจิตใจ",
			"ในที่สุดเราก็ได้เผชิญหน้ากับ Viscidia ผู้ซึ่งถูกเรียกว่า 'หัวใจแห่งป่า'",
			"ความจริงที่ซ่อนอยู่เบื้องหลังความงามนั้นน่ากลัว และหายนะดูเหมือนจะเป็นเส้นทางที่หลีกเลี่ยงไม่ได้"
		],
		"hindi": [
			"जंगल का सबसे गहरा स्थान। वह सन्नाटे से नहीं, बल्कि चिपचिपी जीवन शक्ति से भरा था।",
			"अजीब मूर्तियाँ रास्ता दिखा रही थीं, और एक घिनौनी मीठी गंध मन को वश में कर रही थी।",
			"हमने अंततः Viscidia का सामना किया, जिसे 'जंगल का हृदय' कहा जाता था।",
			"सुंदरता के पीछे छिपा सच भयावह था, और विनाश एक पूर्वनिर्धारित गति जैसा लग रहा था।"
		]
	},
	"epilogue": {
		"korean": [
			"Viscidia의 괴성은 숲에 울려 퍼지다 이내 잦아들었다.",
			"그 거대한 꽃은 서서히 시들어갔고, 역겹던 냄새도 옅어졌다.",
			"탐험대는 살아남았다. 그러나 숲은… 예전의 모습으로 돌아갈 수 있을까?",
			"잃어버린 부족의 슬픈 유산은, 또 다른 재앙의 씨앗이었을지도 모른다.",
			"구원이었을까, 혹은 더 큰 침해의 시작이었을까. 숲은 답하지 않았다."
		],
		"english": [
			"Viscidia's monstrous roar echoed through the forest before finally fading away.",
			"The colossal flower slowly withered, and the nauseating scent also faded.",
			"The expedition survived. But the forest... could it ever return to its former state?",
			"The sad legacy of the lost tribe might have been the seed of another disaster.",
			"Was it salvation, or the beginning of a greater encroachment? The forest did not answer."
		],
		"japanese": [
			"Viscidiaの怪声は森に響き渡り、やがて静まった。",
			"その巨大な花はゆっくりと枯れ始め、吐き気を催すような匂いも薄れていった。",
			"探検隊は生き残った。しかし森は…以前の姿に戻れるだろうか？",
			"失われた部族の悲しい遺産は、また別の災厄の種だったのかもしれない。",
			"救いだったのか、あるいはさらなる侵食の始まりだったのか。森は答えなかった。"
		],
		"chinese": [
			"Viscidia的怪叫声在森林中回荡，随后渐渐平息。",
			"那朵巨大的花朵慢慢枯萎，令人作呕的气味也随之消散。",
			"探险队幸存了下来。但是森林……还能恢复往日的模样吗？",
			"失去部落的悲惨遗产，或许是另一场灾难的种子。",
			"是救赎，还是更大侵犯的开始？森林没有回答。"
		],
		"french": [
			"Le cri monstrueux de Viscidia résonna dans la forêt avant de s'éteindre.",
			"Cette fleur colossale se flétrissait lentement, et l'odeur nauséabonde s'estompait également.",
			"L'expédition a survécu. Mais la forêt... pourrait-elle jamais retrouver son état d'origine ?",
			"Le triste héritage de la tribu perdue était peut-être la graine d'un autre désastre.",
			"Était-ce le salut, ou le début d'une plus grande intrusion ? La forêt ne répondit pas."
		],
		"spanish": [
			"El rugido monstruoso de Viscidia resonó en el bosque para luego desvanecerse.",
			"Aquella flor colosal se marchitaba lentamente, y el olor nauseabundo también se desvanecía.",
			"La expedición sobrevivió. Pero el bosque... ¿podría alguna vez volver a su estado anterior?",
			"El triste legado de la tribu perdida podría haber sido la semilla de otro desastre.",
			"¿Fue la salvación, o el comienzo de una intrusión mayor? El bosque no respondió."
		],
		"vietnamese": [
			"Tiếng gào thét quái dị của Viscidia vang vọng khắp rừng rồi dần tắt lịm.",
			"Bông hoa khổng lồ ấy từ từ héo úa, và mùi hương kinh tởm cũng nhạt dần.",
			"Đoàn thám hiểm đã sống sót. Nhưng khu rừng... liệu có thể trở lại trạng thái ban đầu?",
			"Di sản buồn bã của bộ tộc đã mất, có lẽ là hạt giống của một tai họa khác.",
			"Đó là sự cứu rỗi, hay sự khởi đầu của một sự xâm phạm lớn hơn? Rừng không trả lời."
		],
		"thai": [
			"เสียงคำรามของ Viscidia ดังสนั่นไปทั่วป่าแล้วค่อยๆ แผ่วลง",
			"ดอกไม้ยักษ์นั้นค่อยๆ เหี่ยวเฉา และกลิ่นเหม็นที่น่าสะอิดสะเอียนก็จางลง",
			"คณะสำรวจรอดชีวิต แต่ป่า... จะกลับสู่สภาพเดิมได้หรือไม่?",
			"มรดกอันน่าเศร้าของชนเผ่าที่สาบสูญ อาจเป็นเมล็ดพันธุ์ของภัยพิบัติอีกครั้ง",
			"มันคือความรอด หรือการเริ่มต้นของการรุกรานที่ยิ่งใหญ่กว่ากัน? ป่าไม่ได้ตอบ"
		],
		"hindi": [
			"Viscidia की राक्षसी दहाड़ जंगल में गूंजी और फिर शांत हो गई।",
			"वह विशाल फूल धीरे-धीरे मुरझा गया, और घिनौनी गंध भी हल्की हो गई।",
			"अभियान दल बच गया। लेकिन क्या जंगल... अपनी पुरानी स्थिति में वापस आ पाएगा?",
			"खोई हुई जनजाति की दुखद विरासत, शायद किसी और आपदा का बीज थी।",
			"क्या यह मुक्ति थी, या एक बड़े अतिक्रमण की शुरुआत? जंगल ने जवाब नहीं दिया।"
		]
	}
} as const;
