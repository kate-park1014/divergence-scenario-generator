export const scenario_snowy_fjordlight_72_01 = {
	"scenario_id": "snowy_fjordlight_72_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"hild": {
			"id": "mon_6f20c96a-bf07-4aae-b37c-da898a8336e8",
			"name": {
				"korean": "힐드",
				"english": "Hild",
				"japanese": "ヒルド",
				"chinese": "希尔德",
				"french": "Hild",
				"spanish": "Hild",
				"vietnamese": "Hild",
				"thai": "ฮิลด์",
				"hindi": "हिल्ड"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/722a86fd-2903-4688-3f04-db8241ed0e00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/af3d96ba-e571-4132-fede-cd415bd15c00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"content": {
						"korean": "끝없이 펼쳐진 눈보라. 길을 잃었다.",
						"english": "Endless blizzard. Lost my way.",
						"japanese": "果てなく広がる吹雪。道を見失った。",
						"chinese": "无尽的暴风雪。迷失了方向。",
						"french": "Un blizzard sans fin. Je suis perdu.",
						"spanish": "Una ventisca interminable. Me he perdido.",
						"vietnamese": "Bão tuyết vô tận. Lạc đường rồi.",
						"thai": "พายุหิมะไม่สิ้นสุด หลงทางแล้ว",
						"hindi": "अंतहीन बर्फीला तूफान। रास्ता भटक गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…저건?",
						"english": "...What's that?",
						"japanese": "…あれは？",
						"chinese": "……那是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "¿...Qué es eso?",
						"vietnamese": "...Cái gì thế?",
						"thai": "...นั่นอะไรน่ะ?",
						"hindi": "...वह क्या है?"
					}
				},
				{
					"content": {
						"korean": "환상적인 오로라 너머, 신비로운 빛이 일렁였다. 피오르드라이트.",
						"english": "Beyond the fantastic aurora, a mysterious light shimmered. Fjordlight.",
						"japanese": "幻想的なオーロラの向こう、神秘的な光が揺らめいていた。フィヨルドライト。",
						"chinese": "奇幻极光之外，一道神秘的光芒闪烁着。峡湾之光。",
						"french": "Au-delà de l'aurore fantastique, une lumière mystérieuse scintillait. Le Fjordlight.",
						"spanish": "Más allá de la fantástica aurora, una luz misteriosa brillaba. La Luz del Fiordo.",
						"vietnamese": "Bên kia cực quang huyền ảo, một ánh sáng thần bí lung linh. Ánh Sáng Vịnh Hẹp.",
						"thai": "เหนือแสงเหนือที่น่ามหัศจรรย์ แสงลึกลับระยิบระยับ แสงฟยอร์ด",
						"hindi": "शानदार अरोड़ा के उस पार, एक रहस्यमय प्रकाश टिमटिमा रहा था। फियोर्डलाइट।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "방랑자여, 그 빛은… 위험하다.",
						"english": "Wanderer, that light is... dangerous.",
						"japanese": "放浪者よ、その光は…危険だ。",
						"chinese": "流浪者，那光……很危险。",
						"french": "Voyageur, cette lumière est... dangereuse.",
						"spanish": "Errante, esa luz es... peligrosa.",
						"vietnamese": "Hỡi kẻ lang thang, ánh sáng đó... rất nguy hiểm.",
						"thai": "นักเดินทาง แสงนั้น... อันตราย",
						"hindi": "यात्री, वह प्रकाश... खतरनाक है।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "위험하다고? 희망이잖아!",
						"english": "Dangerous? It's hope!",
						"japanese": "危険だと？希望じゃないか！",
						"chinese": "危险？那是希望啊！",
						"french": "Dangereux ? C'est de l'espoir !",
						"spanish": "¿Peligroso? ¡Es esperanza!",
						"vietnamese": "Nguy hiểm ư? Đó là hy vọng mà!",
						"thai": "อันตรายเหรอ? นั่นคือความหวังนะ!",
						"hindi": "खतरनाक? यह तो आशा है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "길 잃은 자들을 유혹하는 허상일 뿐. 많은 이들이 저 빛을 쫓다 얼어붙었지.",
						"english": "Merely an illusion luring the lost. Many who chased that light froze to death.",
						"japanese": "道に迷った者たちを誘惑する幻影に過ぎない。多くの者があの光を追いかけ、凍え死んだ。",
						"chinese": "那只是引诱迷途者的虚像。许多人追逐那道光，最终冻僵了。",
						"french": "Ce n'est qu'une illusion qui attire les égarés. Beaucoup qui ont poursuivi cette lumière ont péri de froid.",
						"spanish": "Es solo una ilusión que atrae a los perdidos. Muchos que persiguieron esa luz murieron congelados.",
						"vietnamese": "Chỉ là ảo ảnh quyến rũ những kẻ lạc lối. Nhiều người đuổi theo ánh sáng đó đã chết cóng.",
						"thai": "เป็นเพียงภาพลวงตาที่ล่อลวงผู้หลงทาง หลายคนไล่ตามแสงนั้นจนแข็งตาย",
						"hindi": "केवल एक भ्रम जो भटके हुए लोगों को लुभाता है। कई लोग उस प्रकाश का पीछा करते हुए जम कर मर गए।"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "hild",
					"content": {
						"korean": "오래된 전설의 조각들이… 빛은 모든 것을 삼킬 것이다.",
						"english": "Fragments of an ancient legend... Light will swallow all.",
						"japanese": "古き伝説の断片が…光は全てを飲み込むだろう。",
						"chinese": "古老传说的碎片…光将吞噬一切。",
						"french": "Des fragments d'une ancienne légende... La lumière engloutira tout.",
						"spanish": "Fragmentos de una antigua leyenda... La luz lo devorará todo.",
						"vietnamese": "Những mảnh vỡ của truyền thuyết cổ xưa... Ánh sáng sẽ nuốt chửng tất cả.",
						"thai": "เศษเสี้ยวตำนานโบราณ... แสงจะกลืนกินทุกสิ่ง",
						"hindi": "प्राचीन कथा के अंश... प्रकाश सब कुछ निगल जाएगा।"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "주변에 정교하게 깨진 얼음 조각들이 흩어져 있었다. 자연 현상이라기엔 너무나 인위적이었다.",
						"english": "Delicately shattered ice fragments were scattered around. Too artificial to be a natural phenomenon.",
						"japanese": "精巧に砕かれた氷の破片が散らばっていた。自然現象にしてはあまりにも人工的だった。",
						"chinese": "周围散落着精巧破碎的冰块。这过于人工，不像自然现象。",
						"french": "Des fragments de glace délicatement brisés étaient éparpillés. Trop artificiel pour être un phénomène naturel.",
						"spanish": "Fragmentos de hielo delicadamente rotos estaban esparcidos. Demasiado artificial para ser un fenómeno natural.",
						"vietnamese": "Những mảnh băng vỡ tinh xảo nằm rải rác xung quanh. Quá nhân tạo để là hiện tượng tự nhiên.",
						"thai": "มีเศษน้ำแข็งที่แตกละเอียดกระจัดกระจายอยู่รอบๆ ดูประดิษฐ์เกินกว่าจะเป็นปรากฏการณ์ธรรมชาติ",
						"hindi": "बारीकी से टूटे हुए बर्फ के टुकड़े चारों ओर बिखरे हुए थे। यह प्राकृतिक घटना होने के लिए बहुत कृत्रिम था।"
					}
				}
			],
			"id": 1
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"speaker": "hild",
					"type": "direction",
					"action": "enter"
				},
				{
					"emotion": "sad",
					"speaker": "hild",
					"type": "speech",
					"content": {
						"korean": "피오르드라이트는… 때로는 길을 교란시키지.",
						"english": "Fjordlite... sometimes distorts the path.",
						"japanese": "フィヨルドライトは…時に道を惑わせる。",
						"chinese": "峡湾之光…有时会扰乱道路。",
						"french": "La Fjordlite... parfois perturbe le chemin.",
						"spanish": "La Fjordlite... a veces distorsiona el camino.",
						"vietnamese": "Fjordlite... đôi khi làm rối loạn đường đi.",
						"thai": "ฟยอร์ดไลท์... บางครั้งก็บิดเบือนเส้นทาง",
						"hindi": "फजॉर्डलाइट... कभी-कभी मार्ग को विचलित कर देता है।"
					}
				},
				{
					"emotion": "base",
					"content": {
						"korean": "하지만 저 빛이 길을 보여주는 것 같아.",
						"english": "But that light seems to show the way.",
						"japanese": "しかし、あの光が道を示しているようだ。",
						"chinese": "但那光似乎指引着道路。",
						"french": "Mais cette lumière semble montrer le chemin.",
						"spanish": "Pero esa luz parece mostrar el camino.",
						"vietnamese": "Nhưng ánh sáng đó dường như chỉ lối.",
						"thai": "แต่แสงนั้นดูเหมือนจะนำทาง",
						"hindi": "लेकिन वह प्रकाश मार्ग दिखाता हुआ प्रतीत होता है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "보이는 것이 전부가 아니야. 진실은 얼음 속에 갇혀 있지.",
						"english": "What you see isn't everything. The truth is trapped within the ice.",
						"japanese": "見えるものが全てじゃない。真実は氷の中に囚われている。",
						"chinese": "眼见不一定为实。真相被困在冰中。",
						"french": "Ce que tu vois n'est pas tout. La vérité est piégée dans la glace.",
						"spanish": "Lo que ves no es todo. La verdad está atrapada en el hielo.",
						"vietnamese": "Những gì bạn thấy không phải là tất cả. Sự thật bị mắc kẹt trong băng.",
						"thai": "สิ่งที่เห็นไม่ใช่ทั้งหมด ความจริงถูกขังอยู่ในน้ำแข็ง",
						"hindi": "जो तुम देखते हो, वह सब कुछ नहीं है। सच्चाई बर्फ में फंसी हुई है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "특정 각도에서 보이는 빛의 흔적들은 오히려 방향 감각을 혼란스럽게 했다.",
						"english": "Traces of light, visible from certain angles, rather disoriented one's sense of direction.",
						"japanese": "特定の角度から見える光の痕跡は、むしろ方向感覚を混乱させた。",
						"chinese": "从特定角度看到的光迹反而让人迷失方向。",
						"french": "Des traces de lumière, visibles sous certains angles, désorientaient plutôt le sens de l'orientation.",
						"spanish": "Las huellas de luz, visibles desde ciertos ángulos, más bien desorientaban el sentido de la dirección.",
						"vietnamese": "Dấu vết ánh sáng, nhìn thấy từ một số góc độ nhất định, lại làm mất phương hướng.",
						"thai": "ร่องรอยของแสงที่มองเห็นได้จากบางมุม กลับทำให้สับสนเรื่องทิศทาง",
						"hindi": "कुछ कोणों से दिखने वाले प्रकाश के निशान ने बल्कि दिशा की समझ को भ्रमित कर दिया।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"action": "enter",
					"type": "direction",
					"speaker": "hild",
					"duration_ms": 500,
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이 얼음 아래… 오래된 비극이 잠들어 있지.",
						"english": "Beneath this ice... an ancient tragedy slumbers.",
						"japanese": "この氷の下に…古き悲劇が眠っている。",
						"chinese": "这冰之下…沉睡着一场古老的悲剧。",
						"french": "Sous cette glace... une ancienne tragédie sommeille.",
						"spanish": "Bajo este hielo... una antigua tragedia yace dormida.",
						"vietnamese": "Dưới lớp băng này... một bi kịch cổ xưa đang ngủ yên.",
						"thai": "ใต้น้ำแข็งนี้... มีโศกนาฏกรรมโบราณหลับใหลอยู่",
						"hindi": "इस बर्फ के नीचे... एक प्राचीन त्रासदी सो रही है।"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비극이라니?",
						"english": "A tragedy?",
						"japanese": "悲劇だと？",
						"chinese": "一场悲剧？",
						"french": "Une tragédie ?",
						"spanish": "¿Una tragedia?",
						"vietnamese": "Một bi kịch sao?",
						"thai": "โศกนาฏกรรม?",
						"hindi": "एक त्रासदी?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "잊혀진 자들의 맹세… 그 목소리가 들리지 않는가?",
						"english": "The oath of the forgotten ones... can you not hear their voices?",
						"japanese": "忘れ去られし者たちの誓い…その声が聞こえないのか？",
						"chinese": "被遗忘者的誓言…你听不见他们的声音吗？",
						"french": "Le serment des oubliés... n'entends-tu pas leurs voix ?",
						"spanish": "El juramento de los olvidados... ¿no oyes sus voces?",
						"vietnamese": "Lời thề của những người bị lãng quên... bạn không nghe thấy giọng nói của họ sao?",
						"thai": "คำสาบานของผู้ถูกลืม... เจ้าไม่ได้ยินเสียงของพวกเขาหรือ?",
						"hindi": "भूले हुए लोगों की शपथ... क्या तुम्हें उनकी आवाज़ें सुनाई नहीं देतीं?"
					},
					"type": "speech",
					"speaker": "hild"
				},
				{
					"content": {
						"korean": "얼어붙은 유적 근처에서 희미하게, 알 수 없는 언어로 된 슬픈 노래의 조각이 들려오는 듯했다.",
						"english": "Near the frozen ruins, a faint fragment of a mournful song, in an unknown language, seemed to drift.",
						"japanese": "凍てついた遺跡の近くで、かすかに、未知の言語による悲しい歌の断片が聞こえるようだった。",
						"chinese": "在冰冻的遗迹附近，似乎隐约传来一段用未知语言唱的悲伤歌曲碎片。",
						"french": "Près des ruines gelées, un faible fragment d'une chanson mélancolique, dans une langue inconnue, semblait flotter.",
						"spanish": "Cerca de las ruinas congeladas, un tenue fragmento de una canción lúgubre, en un idioma desconocido, parecía flotar.",
						"vietnamese": "Gần tàn tích đóng băng, một đoạn nhạc buồn mờ nhạt, bằng một ngôn ngữ không rõ, dường như đang trôi nổi.",
						"thai": "ใกล้ซากปรักหักพังที่แข็งตัว ดูเหมือนจะมีเศษเพลงเศร้าในภาษาที่ไม่รู้จักลอยแผ่วมา",
						"hindi": "जमे हुए खंडहरों के पास, एक अज्ञात भाषा में एक दुखद गीत का एक फीका टुकड़ा तैरता हुआ लग रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			],
			"id": 5
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "hild",
					"type": "direction",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						2
					]
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "이제 돌아갈 길은 없다. 미궁은 모든 것을 삼킬 것이다.",
						"english": "No turning back now. The labyrinth will consume all.",
						"japanese": "もう後戻りはできない。迷宮は全てを飲み込むだろう。",
						"chinese": "现在没有回头路了。迷宫会吞噬一切。",
						"french": "Plus de retour en arrière. Le labyrinthe engloutira tout.",
						"spanish": "Ya no hay vuelta atrás. El laberinto lo devorará todo.",
						"vietnamese": "Không còn đường quay lại. Mê cung sẽ nuốt chửng tất cả.",
						"thai": "ไม่มีทางย้อนกลับแล้ว เขาวงกตจะกลืนกินทุกสิ่ง",
						"hindi": "अब पीछे मुड़ने का कोई रास्ता नहीं। भूलभुलैया सब कुछ निगल जाएगी。"
					},
					"speaker": "hild",
					"type": "speech"
				},
				{
					"content": {
						"korean": "상관없어. 이 미궁의 진실을 봐야겠어.",
						"english": "Doesn't matter. I must see the truth of this labyrinth.",
						"japanese": "構わない。この迷宮の真実を見届ける。",
						"chinese": "没关系。我必须看到这个迷宫的真相。",
						"french": "Peu importe. Je dois voir la vérité de ce labyrinthe.",
						"spanish": "No importa. Debo ver la verdad de este laberinto.",
						"vietnamese": "Không sao. Tôi phải nhìn thấy sự thật của mê cung này.",
						"thai": "ไม่เป็นไร. ฉันต้องเห็นความจริงของเขาวงกตนี้",
						"hindi": "कोई फर्क नहीं पड़ता। मुझे इस भूलभुलैया का सच देखना है।"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"content": {
						"korean": "…그 대가를 감당할 수 있겠는가?",
						"english": "...Can you bear the cost?",
						"japanese": "…その代償を払えるのか？",
						"chinese": "…你能承受那个代价吗？",
						"french": "...Peux-tu supporter le prix ?",
						"spanish": "...¿Podrás soportar el precio?",
						"vietnamese": "...Ngươi có thể gánh vác cái giá đó không?",
						"thai": "...เจ้าจะแบกรับราคาได้หรือไม่?",
						"hindi": "...क्या तुम इसकी कीमत चुका पाओगे?"
					},
					"speaker": "hild",
					"type": "speech",
					"emotion": "sad"
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
						"korean": "미궁의 가장 깊은 곳. 거대한 그림자가 나타났다.",
						"english": "The deepest part of the labyrinth. A colossal shadow emerged.",
						"japanese": "迷宮の最深部。巨大な影が現れた。",
						"chinese": "迷宫最深处。一个巨大的身影出现了。",
						"french": "La partie la plus profonde du labyrinthe. Une ombre colossale apparut.",
						"spanish": "La parte más profunda del laberinto. Una sombra colosal apareció.",
						"vietnamese": "Nơi sâu nhất của mê cung. Một bóng tối khổng lồ xuất hiện.",
						"thai": "ส่วนที่ลึกที่สุดของเขาวงกต. เงาขนาดมหึมาปรากฏขึ้น",
						"hindi": "भूलभुलैया का सबसे गहरा हिस्सा। एक विशाल परछाई उभरी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "어리석은 자들. 이 미궁은 너희의 무덤이 될 것이다.",
						"english": "Fools. This labyrinth will be your grave.",
						"japanese": "愚か者どもめ。この迷宮がお前たちの墓場となるだろう。",
						"chinese": "愚蠢的人们。这个迷宫将成为你们的坟墓。",
						"french": "Imbéciles. Ce labyrinthe sera votre tombe.",
						"spanish": "Necios. Este laberinto será vuestra tumba.",
						"vietnamese": "Những kẻ ngu ngốc. Mê cung này sẽ là mồ chôn của các ngươi.",
						"thai": "พวกคนโง่. เขาวงกตนี้จะเป็นหลุมศพของพวกเจ้า",
						"hindi": "मूर्खों। यह भूलभुलैया तुम्हारी कब्र बनेगी।"
					}
				},
				{
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "닥쳐! 네놈이 이 모든 재앙의 원흉이겠지!",
						"english": "Shut up! You're the source of all this calamity, aren't you!",
						"japanese": "黙れ！お前がこの全ての災厄の元凶だろう！",
						"chinese": "闭嘴！你就是这一切灾难的罪魁祸首，对吧！",
						"french": "Tais-toi ! Tu es la source de toutes ces calamités, n'est-ce pas !",
						"spanish": "¡Cállate! ¡Tú eres la causa de toda esta calamidad, ¿verdad?!",
						"vietnamese": "Im đi! Ngươi chính là kẻ gây ra tất cả tai ương này!",
						"thai": "หุบปาก! เจ้าคือต้นเหตุของหายนะทั้งหมดนี้ใช่ไหม!",
						"hindi": "चुप रहो! तुम ही इस सारी आपदा की जड़ हो, है ना!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "랜덤 보스의 거대한 그림자에 모든 것이 압도당했다.",
						"english": "Everything was overwhelmed by the random boss's colossal shadow.",
						"japanese": "ランダムボスの巨大な影に、すべてが圧倒された。",
						"chinese": "一切都被随机首领的巨大阴影所吞噬。",
						"french": "Tout fut submergé par l'ombre colossale du boss aléatoire.",
						"spanish": "Todo fue abrumado por la sombra colosal del jefe aleatorio.",
						"vietnamese": "Mọi thứ đều bị áp đảo bởi bóng đen khổng lồ của trùm ngẫu nhiên.",
						"thai": "ทุกสิ่งถูกครอบงำด้วยเงาขนาดยักษ์ของบอสสุ่ม",
						"hindi": "यादृच्छिक बॉस की विशाल छाया से सब कुछ अभिभूत हो गया।"
					},
					"type": "speech",
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 필멸자들. 너희는 영원히 이 미궁에 갇힐 것이다.",
						"english": "Insignificant mortals. You shall be trapped in this labyrinth forever.",
						"japanese": "取るに足らない定命の者ども。お前たちは永遠にこの迷宮に囚われるだろう。",
						"chinese": "渺小的凡人。你们将永远被困在这迷宫中。",
						"french": "Mortels insignifiants. Vous serez piégés à jamais dans ce labyrinthe.",
						"spanish": "Mortales insignificantes. Seréis atrapados en este laberinto para siempre.",
						"vietnamese": "Những kẻ phàm trần nhỏ bé. Ngươi sẽ mãi mãi bị mắc kẹt trong mê cung này.",
						"thai": "มนุษย์ที่ไร้ค่า เจ้าจะต้องติดอยู่ในเขาวงกตนี้ตลอดไป",
						"hindi": "तुच्छ नश्वर। तुम हमेशा के लिए इस भूलभुलैया में फंसे रहोगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "젠장… 아직 끝나지 않았어!",
						"english": "Damn it... It's not over yet!",
						"japanese": "くそっ…まだ終わってない！",
						"chinese": "该死……还没完！",
						"french": "Mince… Ce n'est pas encore fini !",
						"spanish": "¡Maldita sea... Todavía no ha terminado!",
						"vietnamese": "Chết tiệt… Vẫn chưa kết thúc!",
						"thai": "บ้าจริง... ยังไม่จบ!",
						"hindi": "धिक्कार है… अभी खत्म नहीं हुआ है!"
					},
					"speaker": "character_any",
					"type": "speech"
				}
			],
			"id": 15,
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "크으… 설마 나를 쓰러뜨리다니. 하지만… 이것은 시작일 뿐.",
						"english": "Urgh... To think you could defeat me. But... this is just the beginning.",
						"japanese": "くっ… まさか私を倒すとは。だが…これは始まりに過ぎない。",
						"chinese": "呃……没想到你竟然能打败我。但是……这只是个开始。",
						"french": "Urgh... Dire que tu as pu me vaincre. Mais... ce n'est que le début.",
						"spanish": "Uf... Pensar que pudiste derrotarme. Pero... esto es solo el principio.",
						"vietnamese": "Khặc... Không ngờ ngươi lại có thể đánh bại ta. Nhưng... đây chỉ là khởi đầu.",
						"thai": "อ๊า... ไม่คิดเลยว่าเจ้าจะโค่นข้าลงได้. แต่... นี่เป็นเพียงจุดเริ่มต้นเท่านั้น",
						"hindi": "उफ़... यह सोचकर कि तुम मुझे हरा सकते हो। लेकिन... यह तो बस शुरुआत है।"
					},
					"emotion": "angry"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "피오르드라이트의 진정한 힘을 본다면… 후회할 것이다.",
						"english": "If you see the true power of Fjordlight... you will regret it.",
						"japanese": "フィヨルドライトの真の力を見れば…後悔することになるだろう。",
						"chinese": "如果你看到菲约德莱特的真正力量……你会后悔的。",
						"french": "Si tu vois le véritable pouvoir de Fjordlight... tu le regretteras.",
						"spanish": "Si ves el verdadero poder de Fjordlight... lo lamentarás.",
						"vietnamese": "Nếu ngươi nhìn thấy sức mạnh thật sự của Fjordlight... ngươi sẽ hối hận.",
						"thai": "หากเจ้าได้เห็นพลังที่แท้จริงของฟยอร์ดไลต์... เจ้าจะต้องเสียใจ",
						"hindi": "यदि तुम फ़जॉर्डलाइट की सच्ची शक्ति देखोगे... तो तुम्हें पछतावा होगा।"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…끝난 게 아니라고?",
						"english": "...It's not over?",
						"japanese": "…終わってないだと？",
						"chinese": "……还没结束吗？",
						"french": "...Ce n'est pas fini ?",
						"spanish": "...¿No ha terminado?",
						"vietnamese": "...Chưa kết thúc sao?",
						"thai": "...ยังไม่จบอีกหรือ?",
						"hindi": "...यह खत्म नहीं हुआ?"
					}
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "미궁의 첫 번째 문이 닫혔다. 하지만, 더 깊은 얼음 속에서 차가운 진실이 주인공을 기다리고 있었다.",
						"english": "The first door of the labyrinth closed. However, a colder truth awaited the protagonist in the deeper ice.",
						"japanese": "迷宮の最初の扉が閉じた。しかし、より深い氷の中で、冷たい真実が主人公を待ち受けていた。",
						"chinese": "迷宫的第一扇门关闭了。然而，在更深的冰层中，一个更冷的真相正等待着主人公。",
						"french": "La première porte du labyrinthe se referma. Cependant, une vérité plus froide attendait le protagoniste dans la glace plus profonde.",
						"spanish": "La primera puerta del laberinto se cerró. Sin embargo, una verdad más fría esperaba al protagonista en las profundidades del hielo.",
						"vietnamese": "Cánh cửa đầu tiên của mê cung đã đóng lại. Tuy nhiên, một sự thật lạnh lẽo hơn đang chờ đợi nhân vật chính trong lớp băng sâu hơn.",
						"thai": "ประตูแรกของเขาวงกตปิดลง. อย่างไรก็ตาม ความจริงที่เยือกเย็นกว่ากำลังรอคอยตัวเอกอยู่ในส่วนลึกของน้ำแข็ง",
						"hindi": "भूलभुलैया का पहला दरवाजा बंद हो गया। हालांकि, गहरी बर्फ में एक और भी ठंडा सच नायक का इंतजार कर रहा था।"
					},
					"emotion": "base"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"끝없이 펼쳐진 눈보라. 길을 잃었다.",
			"그러나 저 너머, 신비로운 빛이 나를 부른다.",
			"희망일까, 아니면 더 깊은 절망의 시작일까.",
			"미궁의 문이 열리고, 차가운 진실이 모습을 드러낸다."
		],
		"english": [
			"Endless blizzard. Lost my way.",
			"Yet beyond it, a mysterious light calls to me.",
			"Is it hope, or the beginning of a deeper despair?",
			"The labyrinth's gate opens, revealing a chilling truth."
		],
		"japanese": [
			"果てなく広がる吹雪。道を見失った。",
			"しかしその向こうで、神秘的な光が私を呼んでいる。",
			"希望か、それともより深い絶望の始まりか。",
			"迷宮の門が開き、冷たい真実が姿を現す。"
		],
		"chinese": [
			"无尽的暴风雪。迷失了方向。",
			"然而在那边，一道神秘的光芒正在呼唤我。",
			"是希望吗，还是更深绝望的开始？",
			"迷宫之门开启，冰冷的真相显现。"
		],
		"french": [
			"Un blizzard sans fin. Je suis perdu.",
			"Pourtant, au-delà, une lumière mystérieuse m'appelle.",
			"Est-ce l'espoir, ou le début d'un désespoir plus profond ?",
			"La porte du labyrinthe s'ouvre, révélant une vérité glaçante."
		],
		"spanish": [
			"Una ventisca interminable. Me he perdido.",
			"Pero más allá, una luz misteriosa me llama.",
			"¿Es esperanza, o el inicio de una desesperación más profunda?",
			"La puerta del laberinto se abre, revelando una verdad escalofriante."
		],
		"vietnamese": [
			"Bão tuyết vô tận. Lạc đường rồi.",
			"Nhưng phía xa kia, một ánh sáng huyền bí đang gọi tôi.",
			"Là hy vọng, hay khởi đầu cho một tuyệt vọng sâu sắc hơn?",
			"Cánh cổng mê cung mở ra, sự thật lạnh lùng dần hiện rõ."
		],
		"thai": [
			"พายุหิมะไม่สิ้นสุด หลงทางแล้ว",
			"แต่ไกลออกไป แสงลึกลับกำลังเรียกหาฉัน",
			"นี่คือความหวัง หรือจุดเริ่มต้นของความสิ้นหวังที่ลึกซึ้งกว่ากันนะ",
			"ประตูเขาวงกตเปิดออก ความจริงอันเยือกเย็นปรากฏขึ้น"
		],
		"hindi": [
			"अंतहीन बर्फीला तूफान। रास्ता भटक गया।",
			"परंतु उस पार, एक रहस्यमय प्रकाश मुझे बुला रहा है।",
			"क्या यह आशा है, या गहरे निराशा की शुरुआत है?",
			"भूलभुलैया का द्वार खुलता है, एक भयावह सच सामने आता है।"
		]
	}
} as const;
