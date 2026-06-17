export const scenario_snowy_skuld_11_01 = {
	"scenario_id": "snowy_skuld_11_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"북방의 얼어붙은 심장.",
			"태고의 빙하 미궁이 드디어 그 문을 열었다.",
			"숨겨진 진실은 얼음 아래 잠들어 있고.",
			"정체 모를 그림자, 미궁 깊숙이 우릴 부른다."
		],
		"english": [
			"Frozen heart of the north.",
			"The ancient glacial labyrinth has finally opened its gates.",
			"Hidden truths slumber beneath the ice.",
			"An unknown shadow calls us deeper into the labyrinth."
		],
		"japanese": [
			"北方の凍てつく心臓。",
			"太古の氷河迷宮が遂にその扉を開いた。",
			"隠された真実は氷の下に眠る。",
			"正体不明の影が、迷宮の奥深くへと我々を誘う。"
		],
		"chinese": [
			"北方冰封的心脏。",
			"古老的冰川迷宫终于打开了大门。",
			"隐藏的真相沉睡在冰层之下。",
			"身份不明的阴影，将我们召唤至迷宫深处。"
		],
		"french": [
			"Cœur gelé du nord.",
			"L'ancien labyrinthe glaciaire a enfin ouvert ses portes.",
			"Des vérités cachées sommeillent sous la glace.",
			"Une ombre inconnue nous appelle plus profondément dans le labyrinthe."
		],
		"spanish": [
			"Corazón helado del norte.",
			"El antiguo laberinto glacial finalmente ha abierto sus puertas.",
			"Verdades ocultas duermen bajo el hielo.",
			"Una sombra desconocida nos llama más profundo en el laberinto."
		],
		"vietnamese": [
			"Trái tim băng giá phương Bắc.",
			"Mê cung băng giá cổ xưa cuối cùng đã mở cửa.",
			"Những sự thật ẩn giấu ngủ yên dưới lớp băng.",
			"Một bóng tối không rõ danh tính gọi chúng ta sâu hơn vào mê cung."
		],
		"thai": [
			"หัวใจที่แข็งของทางเหนือ",
			"เขาวงกตธารน้ำแข็งโบราณได้เปิดประตูในที่สุด",
			"ความจริงที่ซ่อนอยู่หลับใหลใต้ธารน้ำแข็ง",
			"เงาที่ไม่รู้จักเรียกเราลึกเข้าไปในเขาวงกต"
		],
		"hindi": [
			"उत्तर का जमा हुआ दिल।",
			"प्राचीन हिमनद भूलभुलैया ने अंततः अपने द्वार खोल दिए हैं।",
			"छिपे हुए सच बर्फ के नीचे सो रहे हैं।",
			"एक अज्ञात छाया हमें भूलभुलैया में गहराई तक बुलाती है।"
		]
	},
	"rooms": [
		{
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 빙하 미궁의 입구, 빛조차 삼킬 듯 거대했다.",
						"english": "The entrance to the grand glacial labyrinth was vast, large enough to swallow even light.",
						"japanese": "巨大な氷河迷宮の入口は、光さえも飲み込むほど広大だった。",
						"chinese": "巨大的冰川迷宫入口宏伟，足以吞噬光线。",
						"french": "L'entrée du grand labyrinthe glaciaire était vaste, assez grande pour engloutir même la lumière.",
						"spanish": "La entrada al gran laberinto glacial era vasta, lo suficientemente grande como para tragar incluso la luz.",
						"vietnamese": "Lối vào mê cung băng hà vĩ đại thật rộng lớn, đủ để nuốt chửng cả ánh sáng.",
						"thai": "ทางเข้าเขาวงกตธารน้ำแข็งอันยิ่งใหญ่กว้างใหญ่มากพอที่จะกลืนกินแสงได้",
						"hindi": "विशाल हिमनद भूलभुलैया का प्रवेश द्वार विशाल था, जो प्रकाश को भी निगलने के लिए पर्याप्त बड़ा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여기가… Skuld의 영역인가?",
						"english": "Is this... Skuld's domain?",
						"japanese": "ここが…Skuldの領域なのか？",
						"chinese": "这里是……斯库尔德的领域吗？",
						"french": "Est-ce… le domaine de Skuld ?",
						"spanish": "Es este... ¿el dominio de Skuld?",
						"vietnamese": "Đây có phải là… lãnh địa của Skuld?",
						"thai": "นี่คือ... อาณาเขตของ Skuld หรือไม่?",
						"hindi": "क्या यह... स्कुल्ड का क्षेत्र है?"
					},
					"emotion": "base"
				},
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						4,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "잠시만. 저걸 봐. 얼어붙은… 용머리?",
						"english": "Wait a moment. Look at that. A frozen… dragon head?",
						"japanese": "待て。あれを見ろ。凍てついた…龍の頭？",
						"chinese": "等一下。看那个。一个冰冻的……龙头？",
						"french": "Attendez une minute. Regardez ça. Une tête de… dragon gelée ?",
						"spanish": "Espera un momento. Mira eso. ¿Una cabeza de… dragón congelada?",
						"vietnamese": "Khoan đã. Nhìn kìa. Một cái đầu rồng… bị đóng băng?",
						"thai": "รอสักครู่ ดูนั่นสิ หัวมังกร… ที่แข็งตัวแล้ว?",
						"hindi": "एक पल रुकिए। उसे देखिए। एक जमा हुआ… ड्रैगन का सिर?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "배의 조각이 왜 여기에?",
						"english": "Why is a piece of a ship here?",
						"japanese": "船の破片がなぜここに？",
						"chinese": "为什么会有船的碎片在这里？",
						"french": "Pourquoi un morceau de navire est-il ici ?",
						"spanish": "¿Por qué hay un trozo de barco aquí?",
						"vietnamese": "Tại sao một mảnh tàu lại ở đây?",
						"thai": "ทำไมมีชิ้นส่วนเรืออยู่ที่นี่?",
						"hindi": "एक जहाज का एक टुकड़ा यहाँ क्यों है?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "미궁의 심연에서, 차가운 시선이 느껴졌다.",
						"english": "From the abyss of the labyrinth, a cold gaze was felt.",
						"japanese": "迷宮の深淵から、冷たい視線を感じた。",
						"chinese": "从迷宫的深渊中，感受到了一丝冰冷的目光。",
						"french": "Depuis l'abîme du labyrinthe, un regard froid s'est fait sentir.",
						"spanish": "Desde el abismo del laberinto, se sintió una mirada fría.",
						"vietnamese": "Từ vực thẳm của mê cung, một ánh nhìn lạnh lẽo được cảm nhận.",
						"thai": "จากขอบเหวของเขาวงกต รู้สึกถึงสายตาที่เย็นชา",
						"hindi": "भूलभुलैया के रसातल से, एक ठंडी नज़र महसूस हुई।"
					}
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 조각, 수천 년은 되었어. 분명 범선의 일부다.",
						"english": "This fragment is thousands of years old. It's definitely part of a sailing ship.",
						"japanese": "この破片、数千年ものだ。間違いなく帆船の一部だ。",
						"chinese": "这碎片有数千年历史了。它肯定是一艘帆船的一部分。",
						"french": "Ce fragment a des milliers d'années. C'est sans aucun doute une partie d'un voilier.",
						"spanish": "Este fragmento tiene miles de años. Definitivamente es parte de un velero.",
						"vietnamese": "Mảnh vỡ này đã hàng ngàn năm tuổi. Chắc chắn nó là một phần của một con tàu buồm.",
						"thai": "ชิ้นส่วนนี้มีอายุหลายพันปี เป็นส่วนหนึ่งของเรือใบอย่างแน่นอน",
						"hindi": "यह टुकड़ा हज़ारों साल पुराना है। यह निश्चित रूप से एक पालदार जहाज़ का हिस्सा है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "얼음 속에 배가… 전설 속 이야기 같아.",
						"english": "A ship in the ice... like something out of a legend.",
						"japanese": "氷の中の船…伝説に出てくる話みたいだ。",
						"chinese": "冰中的船…仿佛是传说中的故事。",
						"french": "Un navire dans la glace... on dirait une légende.",
						"spanish": "Un barco en el hielo... parece sacado de una leyenda.",
						"vietnamese": "Một con tàu trong băng... cứ như chuyện trong truyền thuyết vậy.",
						"thai": "เรือในน้ำแข็ง...เหมือนเรื่องราวในตำนานเลย.",
						"hindi": "बर्फ़ में एक जहाज़... किसी किंवदंती की कहानी जैसा।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "단순한 자연 현상이 아니야. 누군가 지키고 있어.",
						"english": "This isn't just a natural phenomenon. Someone is guarding it.",
						"japanese": "単なる自然現象じゃない。誰かが守っているんだ。",
						"chinese": "这不只是一个自然现象。有人在守护着它。",
						"french": "Ce n'est pas qu'un phénomène naturel. Quelqu'un le protège.",
						"spanish": "Esto no es un simple fenómeno natural. Alguien lo está custodiando.",
						"vietnamese": "Đây không chỉ là một hiện tượng tự nhiên. Có ai đó đang canh giữ nó.",
						"thai": "นี่ไม่ใช่แค่ปรากฏการณ์ธรรมชาติ มีใครบางคนกำลังเฝ้าอยู่.",
						"hindi": "यह सिर्फ़ एक प्राकृतिक घटना नहीं है। कोई इसकी रखवाली कर रहा है।"
					},
					"speaker": "bran",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "갑자기 빙하 전체가 격렬하게 진동했다. Skuld의 경고였다.",
						"english": "Suddenly, the entire glacier vibrated violently. It was Skuld's warning.",
						"japanese": "突然、氷河全体が激しく振動した。Skuldの警告だった。",
						"chinese": "突然，整个冰川剧烈震动。这是 Skuld 的警告。",
						"french": "Soudain, le glacier entier vibra violemment. C'était un avertissement de Skuld.",
						"spanish": "De repente, todo el glaciar vibró violentamente. Era la advertencia de Skuld.",
						"vietnamese": "Bỗng nhiên, toàn bộ sông băng rung chuyển dữ dội. Đó là lời cảnh báo của Skuld.",
						"thai": "ทันใดนั้น ธารน้ำแข็งทั้งหมดก็สั่นสะเทือนอย่างรุนแรง นั่นคือคำเตือนของ Skuld.",
						"hindi": "अचानक, पूरा ग्लेशियर ज़ोर से हिलने लगा। यह Skuld की चेतावनी थी।"
					}
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 선박 잔해… 고대 바이킹의 '맹세'와 관련된 문양이 희미하게 보여.",
						"english": "These ship wreckage... faintly show patterns related to an ancient Viking 'oath'.",
						"japanese": "この船の残骸…古代ヴァイキングの「誓い」に関わる紋様がかすかに見える。",
						"chinese": "这些船只残骸…隐约可见与古代维京人“誓言”相关的图案。",
						"french": "Ces épaves de navires... montrent faiblement des motifs liés à un ancien « serment » viking.",
						"spanish": "Estos restos de barco... muestran débilmente patrones relacionados con un 'juramento' vikingo antiguo.",
						"vietnamese": "Những mảnh vỡ tàu này... mờ ảo hiện lên những họa tiết liên quan đến 'lời thề' của người Viking cổ đại.",
						"thai": "ซากเรือเหล่านี้...แสดงให้เห็นลวดลายที่เกี่ยวข้องกับ 'คำสาบาน' ของชาวไวกิ้งโบราณอย่างเลือนลาง.",
						"hindi": "इन जहाज़ के मलबे पर… प्राचीन वाइकिंग की 'शपथ' से संबंधित पैटर्न धुँधले दिखाई दे रहे हैं।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "맹세? 무엇을?",
						"english": "An oath? To what?",
						"japanese": "誓い？何を？",
						"chinese": "誓言？什么誓言？",
						"french": "Un serment ? Pour quoi faire ?",
						"spanish": "¿Un juramento? ¿De qué?",
						"vietnamese": "Lời thề? Về điều gì?",
						"thai": "คำสาบาน? เรื่องอะไร?",
						"hindi": "शपथ? किस बात की?"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "아직 불완전해. 하지만… Skuld는 이 비밀을 지키려는 것 같아.",
						"english": "It's still incomplete. But... Skuld seems to be guarding this secret.",
						"japanese": "まだ不完全だ。だが…Skuldはこの秘密を守ろうとしているようだ。",
						"chinese": "还不完整。但是…Skuld 似乎想守护这个秘密。",
						"french": "C'est encore incomplet. Mais... Skuld semble vouloir garder ce secret.",
						"spanish": "Aún está incompleto. Pero... Skuld parece estar protegiendo este secreto.",
						"vietnamese": "Vẫn chưa hoàn chỉnh. Nhưng... Skuld dường như đang bảo vệ bí mật này.",
						"thai": "มันยังไม่สมบูรณ์ แต่... Skuld ดูเหมือนจะกำลังปกป้องความลับนี้อยู่.",
						"hindi": "यह अभी अधूरा है। लेकिन… Skuld इस रहस्य को छिपाने की कोशिश कर रही है।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"type": "speech",
					"speaker": "character_1",
					"content": {
						"korean": "그녀가 지키는 건… 단순한 얼음이 아니었어.",
						"english": "What she's guarding... wasn't just simple ice.",
						"japanese": "彼女が守っていたのは…単なる氷じゃなかった。",
						"chinese": "她守护的…不只是普通的冰。",
						"french": "Ce qu'elle protège... ce n'était pas juste de la glace.",
						"spanish": "Lo que ella protegía... no era solo hielo.",
						"vietnamese": "Thứ cô ấy canh giữ... không chỉ là băng đơn thuần.",
						"thai": "สิ่งที่เธอกำลังปกป้อง...ไม่ใช่แค่น้ำแข็งธรรมดา.",
						"hindi": "वह जिसकी रक्षा कर रही थी… वह सिर्फ़ बर्फ़ नहीं थी।"
					},
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "bran",
					"type": "direction",
					"action": "enter",
					"spot": [
						2,
						3
					],
					"duration_ms": 500
				},
				{
					"content": {
						"korean": "더 깊이 갈수록… Skuld의 저항이 강해질 거야.",
						"english": "The deeper we go... the stronger Skuld's resistance will become.",
						"japanese": "奥へ進むほど…Skuldの抵抗は強くなるだろう。",
						"chinese": "越深入…Skuld 的抵抗就会越强。",
						"french": "Plus nous irons loin... plus la résistance de Skuld sera forte.",
						"spanish": "Cuanto más profundo vayamos... más fuerte será la resistencia de Skuld.",
						"vietnamese": "Càng đi sâu... sự kháng cự của Skuld sẽ càng mạnh.",
						"thai": "ยิ่งลึกเข้าไปเท่าไหร่...การต่อต้านของ Skuld ก็จะยิ่งแข็งแกร่งขึ้นเท่านั้น.",
						"hindi": "जितना गहरा हम जाएंगे… Skuld का प्रतिरोध उतना ही मज़बूत होगा।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "bran"
				},
				{
					"content": {
						"korean": "돌아갈 순 없어. 여기까지 왔는데.",
						"english": "We can't turn back. Not after coming all this way.",
						"japanese": "もう引き返せない。ここまで来たんだから。",
						"chinese": "不能回头了。都已经走到这里了。",
						"french": "On ne peut pas faire demi-tour. Pas après être venus si loin.",
						"spanish": "No podemos volver. No después de haber llegado tan lejos.",
						"vietnamese": "Không thể quay lại được. Đã đến đây rồi mà.",
						"thai": "เราย้อนกลับไม่ได้แล้ว มาถึงขนาดนี้แล้ว.",
						"hindi": "हम वापस नहीं लौट सकते। इतनी दूर आने के बाद।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "bran",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 고통의 시작, 어쩌면 그녀도 희생자일지 몰라.",
						"english": "The origin of all this suffering, perhaps she's a victim too.",
						"japanese": "この全ての苦痛の始まり、もしかしたら彼女も犠牲者なのかもしれない。",
						"chinese": "这一切痛苦的开端，也许她也是受害者。",
						"french": "L'origine de toute cette souffrance, peut-être qu'elle est aussi une victime.",
						"spanish": "El origen de todo este sufrimiento, quizás ella también sea una víctima.",
						"vietnamese": "Khởi nguồn của mọi nỗi đau này, có lẽ cô ấy cũng là một nạn nhân.",
						"thai": "ต้นกำเนิดของความทุกข์ทรมานทั้งหมดนี้ บางทีเธอเองก็อาจเป็นเหยื่อเช่นกัน.",
						"hindi": "इस सारे दर्द की शुरुआत, शायद वह भी एक शिकार हो।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "미궁의 공기는 더욱 차갑게, 탐험대의 결의를 시험했다.",
						"english": "The labyrinth's air grew colder, testing the expedition's resolve.",
						"japanese": "迷宮の空気はさらに冷たくなり、探検隊の決意を試した。",
						"chinese": "迷宫中的空气愈发寒冷，考验着探险队的决心。",
						"french": "L'air du labyrinthe se fit plus froid, mettant à l'épreuve la détermination de l'expédition.",
						"spanish": "El aire del laberinto se volvió más frío, poniendo a prueba la determinación de la expedición.",
						"vietnamese": "Không khí trong mê cung càng lạnh hơn, thử thách quyết tâm của đoàn thám hiểm.",
						"thai": "อากาศในเขาวงกตเย็นยะเยือกขึ้น ทดสอบความมุ่งมั่นของคณะสำรวจ",
						"hindi": "भूलभुलैया की हवा और ठंडी हो गई, जिसने अभियान के संकल्प का परीक्षण किया।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"content": {
						"korean": "크흐윽… 결국… 이 맹세는…",
						"english": "Ugh… In the end… this vow…",
						"japanese": "くっ…結局…この誓いは…",
						"chinese": "呃啊… 最终… 这誓言…",
						"french": "Ugh… Finalement… ce serment…",
						"spanish": "Ugh… Al final… este juramento…",
						"vietnamese": "Ư… Cuối cùng… lời thề này…",
						"thai": "อึก… ในที่สุด… คำสาบานนี้…",
						"hindi": "उफ़... अंत में... यह प्रतिज्ञा..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "맹세…? 그게 대체…",
						"english": "Vow…? What could that be…?",
						"japanese": "誓い…？一体それが…",
						"chinese": "誓言…？那究竟是…",
						"french": "Un serment… ? Qu'est-ce que c'est…?",
						"spanish": "¿Un juramento…? ¿Qué podría ser…?",
						"vietnamese": "Lời thề…? Rốt cuộc đó là gì…?",
						"thai": "คำสาบาน…? นั่นมันอะไรกันแน่…?",
						"hindi": "प्रतिज्ञा...? वह क्या हो सकता है...?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "쓰러진 그림자 아래, 더 깊은 미궁의 문이 열렸다. Skuld의 비밀은 이제 막 시작되었다.",
						"english": "Beneath the fallen shadow, a deeper labyrinth door opened. Skuld's secrets have only just begun.",
						"japanese": "倒れた影の下、さらに深い迷宮の扉が開いた。Skuldの秘密は今始まったばかりだ。",
						"chinese": "倒下的阴影之下，更深层的迷宫之门开启。Skuld的秘密才刚刚开始。",
						"french": "Sous l'ombre tombée, une porte de labyrinthe plus profonde s'ouvrit. Les secrets de Skuld ne font que commencer.",
						"spanish": "Bajo la sombra caída, una puerta más profunda del laberinto se abrió. Los secretos de Skuld apenas han comenzado.",
						"vietnamese": "Dưới bóng đổ gục, một cánh cửa mê cung sâu hơn đã mở ra. Bí mật của Skuld chỉ vừa mới bắt đầu.",
						"thai": "ใต้เงาที่ร่วงหล่น ประตูเขาวงกตที่ลึกกว่าเปิดออก ความลับของ Skuld เพิ่งจะเริ่มต้นขึ้น",
						"hindi": "गिरी हुई छाया के नीचे, एक गहरे भूलभुलैया का दरवाज़ा खुला। स्कुल्ड के रहस्य अभी शुरू ही हुए हैं।"
					}
				}
			],
			"id": 15,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "미궁의 심장부, 거대한 얼음 결정이 우뚝 솟았다.",
						"english": "At the heart of the labyrinth, a colossal ice crystal loomed.",
						"japanese": "迷宮の心臓部には、巨大な氷の結晶がそびえ立っていた。",
						"chinese": "迷宫深处，巨大的冰晶傲然耸立。",
						"french": "Au cœur du labyrinthe, un cristal de glace colossal s'élevait.",
						"spanish": "En el corazón del laberinto, un colosal cristal de hielo se alzaba.",
						"vietnamese": "Tại trung tâm mê cung, một khối băng khổng lồ sừng sững.",
						"thai": "ณ ใจกลางเขาวงกต ผลึกน้ำแข็งมหึมายืนตระหง่าน",
						"hindi": "भूलभुलैया के दिल में, एक विशाल बर्फ का क्रिस्टल खड़ा था।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "침입자들. 감히 나의 영역을 더럽히는가.",
						"english": "Intruders. How dare you defile my domain?",
						"japanese": "侵入者たちめ。よくも私の領域を汚したな。",
						"chinese": "入侵者。竟敢玷污我的领域。",
						"french": "Intrus. Comment osez-vous souiller mon domaine ?",
						"spanish": "¿Intrusos? ¿Cómo os atrevéis a profanar mi dominio?",
						"vietnamese": "Kẻ xâm nhập. Dám làm ô uế lãnh địa của ta sao?",
						"thai": "พวกผู้บุกรุก บังอาจมาแปดเปื้อนอาณาเขตของข้าหรือ",
						"hindi": "घुसपैठिए। तुमने मेरे क्षेत्र को अपवित्र करने की हिम्मत कैसे की?"
					}
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "비켜. 진실을 알아야겠어.",
						"english": "Move. I need to know the truth.",
						"japanese": "どけ。真実を知る必要がある。",
						"chinese": "让开。我必须知道真相。",
						"french": "Écarte-toi. Je dois connaître la vérité.",
						"spanish": "Apártate. Necesito saber la verdad.",
						"vietnamese": "Tránh ra. Ta cần biết sự thật.",
						"thai": "หลีกไป ข้าต้องรู้ความจริง",
						"hindi": "हटो। मुझे सच जानना है।"
					},
					"emotion": "angry"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실? 너희는 감당 못 할 것을 알게 될 것이다.",
						"english": "Truth? You will learn things you cannot bear.",
						"japanese": "真実だと？お前たちは耐えられないことを知ることになるだろう。",
						"chinese": "真相？你们将得知无法承受之事。",
						"french": "La vérité ? Vous découvrirez ce que vous ne pourrez supporter.",
						"spanish": "¿La verdad? Descubriréis cosas que no podréis soportar.",
						"vietnamese": "Sự thật? Ngươi sẽ biết những điều không thể chịu đựng được.",
						"thai": "ความจริง? พวกเจ้าจะต้องรู้สิ่งที่ไม่อาจทนรับได้",
						"hindi": "सच? तुम्हें वो बातें पता चलेंगी जो तुम सहन नहीं कर पाओगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "얼음 속에서 영원히 잠들어라!",
						"english": "Sleep forever in the ice!",
						"japanese": "氷の中で永遠に眠れ！",
						"chinese": "永远在冰中沉睡吧！",
						"french": "Dors éternellement dans la glace !",
						"spanish": "¡Duerme para siempre en el hielo!",
						"vietnamese": "Ngủ vĩnh viễn trong băng giá!",
						"thai": "จงหลับใหลนิรันดร์ในน้ำแข็ง!",
						"hindi": "बर्फ में हमेशा के लिए सो जाओ!"
					},
					"speaker": "random_boss",
					"type": "speech"
				}
			],
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "나약한 것들. 이곳은 너희의 무덤이다.",
						"english": "Weaklings. This place is your tomb.",
						"japanese": "弱き者どもめ。ここは貴様らの墓場だ。",
						"chinese": "弱者。此处便是尔等的坟墓。",
						"french": "Faibles. Cet endroit est votre tombe.",
						"spanish": "Débiles. Este lugar es vuestra tumba.",
						"vietnamese": "Kẻ yếu đuối. Nơi đây là nấm mồ của các ngươi.",
						"thai": "พวกอ่อนแอ ที่นี่คือสุสานของพวกเจ้า",
						"hindi": "कमजोरों। यह जगह तुम्हारी कब्र है।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직 끝나지 않았어.",
						"english": "...It's not over yet.",
						"japanese": "...まだ終わってない。",
						"chinese": "...还没结束。",
						"french": "...Ce n'est pas encore fini.",
						"spanish": "...Todavía no ha terminado.",
						"vietnamese": "...Chưa kết thúc đâu.",
						"thai": "...ยังไม่จบแค่นี้หรอกนะ",
						"hindi": "...यह अभी खत्म नहीं हुआ है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "얼음의 군주가 비웃었다. 탐험대는 다시 한번 절망 속에서 일어섰다.",
						"english": "The Lord of Ice sneered. The expedition once again rose from despair.",
						"japanese": "氷の君主はあざ笑った。探検隊は再び絶望の中から立ち上がった。",
						"chinese": "冰霜君主嘲笑着。探险队再一次从绝望中站了起来。",
						"french": "Le Seigneur de Glace ricana. L'expédition se releva une fois de plus du désespoir.",
						"spanish": "El Señor del Hielo se mofó. La expedición se levantó una vez más de la desesperación.",
						"vietnamese": "Chúa tể Băng giá chế giễu. Đoàn thám hiểm một lần nữa đứng dậy từ tuyệt vọng.",
						"thai": "จ้าวแห่งน้ำแข็งเย้ยหยัน คณะสำรวจลุกขึ้นอีกครั้งจากความสิ้นหวัง",
						"hindi": "बर्फ़ के स्वामी ने उपहास किया। अभियान दल एक बार फिर निराशा से उठ खड़ा हुआ।"
					},
					"speaker": "narrator",
					"type": "speech"
				}
			]
		}
	]
} as const;
