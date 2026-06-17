export const scenario_snowy_anya_13_05 = {
	"scenario_id": "snowy_anya_13_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"ivar": {
			"id": "mon_d8a80adc-9315-47b5-8c30-97ce33672bce",
			"name": {
				"korean": "이바르",
				"english": "Ivar",
				"japanese": "イヴァー",
				"chinese": "伊瓦尔",
				"french": "Ivar",
				"spanish": "Ivar",
				"vietnamese": "Ivar",
				"thai": "ไอวาร์",
				"hindi": "इवर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8dd7872b-d4df-44fd-b1a1-083a9156e700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2622fb62-daf4-42d1-a83b-2b78869d3e00/public"
		}
	},
	"boss": {
		"pool_id": "pool_109"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "깎아지른 절벽 끝. 차가운 바람이 폐허가 된 동굴 입구를 스쳤다.",
						"english": "At the edge of a sheer cliff. A cold wind swept past the entrance of the ruined cave.",
						"japanese": "切り立つ崖の端。冷たい風が廃墟となった洞窟の入り口を通り過ぎた。",
						"chinese": "悬崖峭壁的尽头。寒风掠过废弃洞穴的入口。",
						"french": "Au bord d'une falaise abrupte. Un vent froid balayait l'entrée de la grotte en ruine.",
						"spanish": "Al borde de un acantilado escarpado. Un viento frío soplaba a la entrada de la cueva en ruinas.",
						"vietnamese": "Trên bờ vực của vách đá dựng đứng. Một cơn gió lạnh lướt qua lối vào hang động đổ nát.",
						"thai": "ที่ปลายหน้าผาสูงชัน ลมหนาวพัดผ่านปากถ้ำที่ทรุดโทรม",
						"hindi": "खड़ी चट्टान के किनारे पर। एक ठंडी हवा बर्बाद गुफा के प्रवेश द्वार से गुजरी。"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "여기가 마지막인가…?",
						"english": "Is this the end…?",
						"japanese": "ここが最後なのか…？",
						"chinese": "这里是终点吗…？",
						"french": "Est-ce la fin… ?",
						"spanish": "¿Es este el final…?",
						"vietnamese": "Đây là kết thúc sao…?",
						"thai": "นี่คือจุดสิ้นสุดแล้วหรือ…?",
						"hindi": "क्या यह अंत है…?"
					}
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "안야의 빛이 너무 강해. 뭔가… 이상해.",
						"english": "Anya's light is too strong. Something's… off.",
						"japanese": "アーニャの光が強すぎる。何か…おかしい。",
						"chinese": "安雅的光芒太强了。总觉得…不对劲。",
						"french": "La lumière d'Anya est trop forte. Quelque chose… cloche.",
						"spanish": "La luz de Anya es demasiado fuerte. Algo… no está bien.",
						"vietnamese": "Ánh sáng của Anya quá mạnh. Có gì đó… lạ.",
						"thai": "แสงของอันย่าแรงเกินไป มีบางอย่าง… ผิดปกติ",
						"hindi": "अन्या की रोशनी बहुत तेज़ है। कुछ… अजीब है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이제 와서 뭘 망설여?",
						"english": "What are you hesitating for now?",
						"japanese": "今更何をためらうの？",
						"chinese": "现在犹豫什么？",
						"french": "Qu'est-ce que tu hésites maintenant ?",
						"spanish": "¿Qué estás dudando ahora?",
						"vietnamese": "Bây giờ còn do dự gì nữa?",
						"thai": "จะลังเลอะไรตอนนี้?",
						"hindi": "अब किस बात की हिचकिचाहट?"
					}
				},
				{
					"speaker": "ivar",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "불길해. 너무 쉽게 이끌려 왔어.",
						"english": "It's ominous. We were led here too easily.",
						"japanese": "不吉だ。あまりにも簡単に誘い込まれた。",
						"chinese": "不祥之兆。我们被引导得太容易了。",
						"french": "C'est de mauvais augure. On nous a conduits ici trop facilement.",
						"spanish": "Es ominoso. Nos guiaron aquí con demasiada facilidad.",
						"vietnamese": "Thật không lành. Chúng ta đã bị dẫn dụ đến đây quá dễ dàng.",
						"thai": "มันไม่ดี เราถูกนำมาที่นี่ง่ายเกินไป",
						"hindi": "यह अशुभ है। हमें बहुत आसानी से यहाँ लाया गया।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "동굴 깊숙이, 안야의 푸른빛은 더욱 강렬한 섬광이 되어 길을 밝혔다.",
						"english": "Deep inside the cave, Anya's blue light became a more intense flash, illuminating the path.",
						"japanese": "洞窟の奥深く、アーニャの青い光はさらに強烈な閃光となり、道を照らした。",
						"chinese": "洞穴深处，安雅的蓝光化作一道更强烈的光芒，照亮了道路。",
						"french": "Au plus profond de la grotte, la lumière bleue d'Anya devint un éclair plus intense, illuminant le chemin.",
						"spanish": "En lo profundo de la cueva, la luz azul de Anya se convirtió en un destello más intenso, iluminando el camino.",
						"vietnamese": "Sâu trong hang động, ánh sáng xanh của Anya càng trở nên rực rỡ, chiếu sáng con đường.",
						"thai": "ลึกเข้าไปในถ้ำ แสงสีน้ำเงินของอันย่ายิ่งสว่างวาบขึ้นส่องทาง",
						"hindi": "गुफा के अंदर गहराई में, अन्या की नीली रोशनी और तेज़ चमक में बदल गई, रास्ते को रोशन करती हुई।"
					},
					"speaker": "narrator"
				},
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"duration_ms": 500,
					"speaker": "ivar"
				},
				{
					"speaker": "ivar",
					"content": {
						"korean": "이 빛은 우리를 어디까지 이끄는 거지?",
						"english": "Where is this light leading us?",
						"japanese": "この光は私たちをどこへ導くのだろう？",
						"chinese": "这光会将我们引向何方？",
						"french": "Où cette lumière nous mène-t-elle ?",
						"spanish": "¿Adónde nos lleva esta luz?",
						"vietnamese": "Ánh sáng này đang dẫn chúng ta đi đâu?",
						"thai": "แสงนี้กำลังนำเราไปที่ไหน?",
						"hindi": "यह रोशनी हमें कहाँ ले जा रही है?"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "진실을 향해서겠지. 안야의 정체를 밝히는 곳.",
						"english": "Towards the truth, I suppose. Where Anya's true identity will be revealed.",
						"japanese": "真実へと、だろう。アーニャの正体が明かされる場所へ。",
						"chinese": "走向真相吧。揭示安雅真实身份的地方。",
						"french": "Vers la vérité, je suppose. Là où l'identité d'Anya sera révélée.",
						"spanish": "Hacia la verdad, supongo. Donde se revelará la verdadera identidad de Anya.",
						"vietnamese": "Hướng về sự thật, tôi đoán vậy. Nơi danh tính thật sự của Anya sẽ được tiết lộ.",
						"thai": "สู่ความจริงล่ะมั้ง ที่ที่จะเปิดเผยตัวตนที่แท้จริงของอันย่า",
						"hindi": "शायद सच्चाई की ओर। जहाँ अन्या की असली पहचान सामने आएगी।"
					}
				},
				{
					"speaker": "ivar",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "그래. 하지만 그 진실이… 감당할 수 없을지도 몰라.",
						"english": "Yes. But that truth… might be too much to bear.",
						"japanese": "ああ。でも、その真実が…耐えられないかもしれない。",
						"chinese": "没错。但那个真相…也许我们无法承受。",
						"french": "Oui. But that truth… pourrait être trop lourde à supporter.",
						"spanish": "Sí. Pero esa verdad… quizás sea demasiado para soportar.",
						"vietnamese": "Đúng vậy. Nhưng sự thật đó… có thể quá sức chịu đựng.",
						"thai": "ใช่ แต่ความจริงนั้น… อาจจะหนักหนาเกินรับไหว",
						"hindi": "हाँ। लेकिन वह सच्चाई… शायद सहने से परे हो।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "얼어붙은 동굴 벽면에는 오래된 바이킹 문양과 부서진 배 조각들이 희미하게 드러났다.",
						"english": "On the frozen cave walls, ancient Viking patterns and fragments of a shattered ship faintly emerged.",
						"japanese": "凍てついた洞窟の壁には、古いヴァイキングの模様と壊れた船の破片がかすかに現れていた。",
						"chinese": "冰冷的洞穴墙壁上，隐约显露出古老的维京图案和破碎的船只残骸。",
						"french": "Sur les parois gelées de la grotte, d'anciens motifs vikings et des fragments de navire brisé apparaissaient faiblement.",
						"spanish": "En las paredes heladas de la cueva, patrones vikingos antiguos y fragmentos de un barco destrozado emergían débilmente.",
						"vietnamese": "Trên vách hang động đóng băng, những hoa văn Viking cổ và những mảnh vỡ của con tàu tan nát mờ ảo hiện ra.",
						"thai": "บนผนังถ้ำที่เย็นยะเยือก ปรากฏลวดลายไวกิ้งโบราณและเศษซากเรือที่แตกหักอย่างเลือนลาง",
						"hindi": "जमी हुई गुफा की दीवारों पर, प्राचीन वाइकिंग पैटर्न और एक टूटे हुए जहाज के टुकड़े हल्के से दिखाई दिए।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "이거… 유적이야? 바이킹 유물 같아.",
						"english": "Is this... a ruin? Looks like a Viking artifact.",
						"japanese": "これ… 遺跡か？ヴァイキングの遺物みたいだ。",
						"chinese": "这是… 遗迹吗？看起来像是维京文物。",
						"french": "C'est... une ruine ? On dirait un artefact viking.",
						"spanish": "Esto... ¿es una ruina? Parece un artefacto vikingo.",
						"vietnamese": "Đây... là tàn tích à? Trông giống di vật Viking.",
						"thai": "นี่... คือซากปรักหักพังเหรอ? ดูเหมือนวัตถุโบราณของไวกิ้งเลย",
						"hindi": "यह... क्या यह एक खंडहर है? यह वाइキング कलाकृति जैसा दिखता है।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						3,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이 숲의 전설과 이어지는군. 버려진 정착민의 흔적…",
						"english": "It connects to this forest's legend. Traces of abandoned settlers...",
						"japanese": "この森の伝説と繋がっている。見捨てられた入植者の痕跡が…",
						"chinese": "这与这片森林的传说有关。被遗弃的定居者的痕迹…",
						"french": "Ça se connecte à la légende de cette forêt. Des traces de colons abandonnés...",
						"spanish": "Se conecta con la leyenda de este bosque. Huellas de colonos abandonados...",
						"vietnamese": "Nó liên quan đến truyền thuyết của khu rừng này. Dấu vết của những người định cư bị bỏ rơi...",
						"thai": "มันเชื่อมโยงกับตำนานของป่านี้ ร่องรอยของผู้ตั้งถิ่นฐานที่ถูกทิ้งร้าง...",
						"hindi": "यह इस जंगल की किंवदंती से जुड़ा है। परित्यक्त बसने वालों के निशान..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "그럼 안야도… 이들과 관련된 걸까?",
						"english": "Then Anya... is she connected to them too?",
						"japanese": "じゃあ、アニャも… 彼らと関係があるのか？",
						"chinese": "那么安雅也… 与他们有关联吗？",
						"french": "Alors Anya... serait-elle liée à eux aussi ?",
						"spanish": "Entonces, ¿Anya... también estará conectada con ellos?",
						"vietnamese": "Vậy Anya... cũng có liên quan đến họ sao?",
						"thai": "งั้นอันย่า... ก็เกี่ยวข้องกับพวกเขาด้วยเหรอ?",
						"hindi": "तो क्या अन्या भी... उनसे जुड़ी है?"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "단순한 수호자가 아닐지도 몰라. 그 빛에는… 깊은 한이 느껴져.",
						"english": "She might not be just a guardian. In that light... I feel deep sorrow.",
						"japanese": "単なる守護者じゃないのかもしれない。あの光には… 深い恨みが感じられる。",
						"chinese": "她可能不只是一个守护者。那光芒中… 我感受到了深深的怨恨。",
						"french": "Ce n'est peut-être pas qu'une simple gardienne. Dans cette lumière... je ressens une profonde tristesse.",
						"spanish": "Quizás no sea solo una guardiana. En esa luz... siento una profunda pena.",
						"vietnamese": "Có lẽ cô ấy không chỉ là một người bảo hộ. Trong ánh sáng đó... tôi cảm nhận được nỗi uất hận sâu sắc.",
						"thai": "เธออาจจะไม่ใช่แค่ผู้พิทักษ์ ในแสงนั้น... ฉันรู้สึกถึงความเศร้าโศกเสียใจอย่างลึกซึ้ง",
						"hindi": "वह सिर्फ एक संरक्षक नहीं हो सकती। उस प्रकाश में... मुझे गहरा दुख महसूस होता है।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "얼어붙은 벽 너머로 어린아이의 흐릿한 형상이 스쳐 지나가는 환영이 보였다. 동시에 고대 문헌의 조각이 얼음 속에 박혀 있었다. '추위… 기다림…'",
						"english": "Beyond the frozen wall, a blurry child's figure flashed by – a vision. Simultaneously, fragments of ancient texts were embedded in the ice. \"Cold... waiting...\"",
						"japanese": "凍てついた壁の向こうに、子供のぼんやりとした姿がかすめていく幻影が見えた。同時に、古代文献の断片が氷の中に埋め込まれていた。「寒さ… 待ち望む…」",
						"chinese": "在冰冻的墙壁后，我看到了一个模糊的孩子身影一闪而过——一个幻象。与此同时，古老文献的碎片镶嵌在冰中。“寒冷… 等待…”",
						"french": "Au-delà du mur gelé, une silhouette floue d'enfant apparut un instant – une vision. Simultanément, des fragments de textes anciens étaient incrustés dans la glace. « Froid... attente... »",
						"spanish": "Más allá del muro congelado, la figura borrosa de un niño pasó fugazmente – una visión. Al mismo tiempo, fragmentos de textos antiguos estaban incrustados en el hielo. \"Frío... espera...\"",
						"vietnamese": "Phía sau bức tường băng, một hình bóng mờ ảo của đứa trẻ lướt qua – một ảo ảnh. Đồng thời, những mảnh văn bản cổ đại được nhúng trong băng. \"Lạnh... chờ đợi...\"",
						"thai": "เหนือกำแพงที่เยือกแข็ง ร่างเลือนรางของเด็กคนหนึ่งปรากฏขึ้นแวบหนึ่ง—เป็นภาพหลอน พร้อมกันนั้น ชิ้นส่วนของเอกสารโบราณก็ฝังอยู่ในน้ำแข็ง \"ความหนาว... การรอคอย...\"",
						"hindi": "जमी हुई दीवार के पार, एक बच्चे की धुंधली आकृति तेजी से निकली - एक दृष्टि। साथ ही, प्राचीन ग्रंथों के अंश बर्फ में जमे हुए थे। \"सर्दी... इंतज़ार...\""
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "저거… 애기 아니야?",
						"english": "That... isn't that a child?",
						"japanese": "あれ… 子供じゃないか？",
						"chinese": "那是… 不是个孩子吗？",
						"french": "Ça... ce n'est pas un enfant ?",
						"spanish": "Eso... ¿no es un niño?",
						"vietnamese": "Kia... không phải là trẻ con sao?",
						"thai": "นั่น... ไม่ใช่เด็กหรอกเหรอ?",
						"hindi": "वह... क्या वह बच्चा नहीं है?"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_1"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "기다림? 뭘 기다린다는 거야…",
						"english": "Waiting? Waiting for what...?",
						"japanese": "待ち望む？何を待ち望んでいるんだ…",
						"chinese": "等待？等待什么呢…",
						"french": "Attente ? Attendre quoi... ?",
						"spanish": "¿Espera? ¿Espera qué...?",
						"vietnamese": "Chờ đợi? Chờ đợi điều gì chứ...?",
						"thai": "การรอคอย? รอคอยอะไรกันล่ะ...",
						"hindi": "इंतज़ार? किस बात का इंतज़ार...?"
					},
					"speaker": "character_2"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"speaker": "ivar",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "젠장… 이거 뭔가 잘못됐어. 이 빛은 우리를… 비극으로 이끌고 있어.",
						"english": "Damn it... something's wrong here. This light is leading us... to tragedy.",
						"japanese": "くそ… 何かおかしい。この光は俺たちを… 悲劇へと導いている。",
						"chinese": "该死… 这里出了问题。这道光正在把我们引向… 悲剧。",
						"french": "Bon sang... quelque chose ne va pas. Cette lumière nous mène... à la tragédie.",
						"spanish": "Maldita sea... algo anda mal aquí. Esta luz nos está llevando... a la tragedia.",
						"vietnamese": "Chết tiệt... có gì đó không ổn. Ánh sáng này đang dẫn chúng ta... đến bi kịch.",
						"thai": "ให้ตายสิ... มีบางอย่างผิดปกติ แสงนี้กำลังนำเรา... ไปสู่โศกนาฏกรรม",
						"hindi": "धिक्कार है... कुछ गलत है। यह प्रकाश हमें... त्रासदी की ओर ले जा रहा है।"
					},
					"speaker": "ivar"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "비극이라니?",
						"english": "Tragedy?",
						"japanese": "悲劇だって？",
						"chinese": "悲剧？",
						"french": "Une tragédie ?",
						"spanish": "¿Tragedia?",
						"vietnamese": "Bi kịch gì?",
						"thai": "โศกนาฏกรรมเหรอ?",
						"hindi": "त्रासदी?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이 모든 게… 누군가의 기다림이라면. 영원한 기다림이라면.",
						"english": "If all of this... is someone's waiting. An eternal waiting.",
						"japanese": "これら全てが… 誰かの待ち望むものだとしたら。永遠の待ち望むものだとしたら。",
						"chinese": "如果这一切… 是某人的等待。一场永恒的等待。",
						"french": "Si tout cela... est l'attente de quelqu'un. Une attente éternelle.",
						"spanish": "Si todo esto... es la espera de alguien. Una espera eterna.",
						"vietnamese": "Nếu tất cả chuyện này... là sự chờ đợi của ai đó. Một sự chờ đợi vĩnh cửu.",
						"thai": "ถ้าทั้งหมดนี้... คือการรอคอยของใครบางคน การรอคอยชั่วนิรันดร์",
						"hindi": "अगर यह सब... किसी का इंतज़ार है। एक अनंत इंतज़ार।"
					},
					"speaker": "ivar"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 조각상이 산산조각 났다. 그 안에서 빛은 사그라들고, 작은 온기만이 남았다.",
						"english": "The ice sculpture shattered. The light within faded, leaving only a small warmth.",
						"japanese": "氷の彫像は粉々に砕け散った。その中の光は消え去り、小さな温もりだけが残った。",
						"chinese": "冰雕破碎了。里面的光芒消散，只留下了一丝微弱的温暖。",
						"french": "La sculpture de glace se brisa en mille morceaux. La lumière à l'intérieur s'estompa, ne laissant qu'une petite chaleur.",
						"spanish": "La escultura de hielo se hizo pedazos. La luz interior se desvaneció, dejando solo un pequeño calor.",
						"vietnamese": "Bức tượng băng vỡ tan tành. Ánh sáng bên trong tắt dần, chỉ còn lại một chút hơi ấm nhỏ nhoi.",
						"thai": "ประติมากรรมน้ำแข็งแตกเป็นเสี่ยงๆ แสงสว่างภายในดับลง เหลือเพียงความอบอุ่นเล็กน้อย",
						"hindi": "बर्फ की मूर्ति टूट गई। भीतर का प्रकाश फीका पड़ गया, केवल थोड़ी सी गर्माहट बची।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…안녕… 아빠… 엄마…",
						"english": "...Goodbye... Daddy... Mommy...",
						"japanese": "…さようなら…パパ…ママ…",
						"chinese": "...再见...爸爸...妈妈...",
						"french": "...Au revoir... Papa... Maman...",
						"spanish": "...Adiós... Papá... Mamá...",
						"vietnamese": "...Tạm biệt... Bố... Mẹ...",
						"thai": "...ลาก่อน...พ่อจ๋า...แม่จ๋า...",
						"hindi": "...अलविदा... पापा... मम्मी..."
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"speaker": "character_any",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "우리가… 안야를 해방시킨 건가…?",
						"english": "Did we... free Anya...?",
						"japanese": "僕たちは…アーニャを解放したのか…？",
						"chinese": "我们...解放了安雅吗...？",
						"french": "Avons-nous... libéré Anya... ?",
						"spanish": "¿Hemos... liberado a Anya...?",
						"vietnamese": "Chúng ta... đã giải thoát Anya sao...?",
						"thai": "พวกเรา...ปลดปล่อยอันย่าแล้วหรือ...?",
						"hindi": "क्या हमने... अन्या को आज़ाद कर दिया...?"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"action": "enter",
					"speaker": "ivar"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…아니, 그냥 이 비극을 끝낸 것뿐이야.",
						"english": "...No, I just ended this tragedy.",
						"japanese": "「…いや、ただこの悲劇を終わらせただけだ。」",
						"chinese": "“…不，我只是结束了这场悲剧。”",
						"french": "...Non, j'ai juste mis fin à cette tragédie.",
						"spanish": "...No, solo puse fin a esta tragedia.",
						"vietnamese": "...Không, tôi chỉ kết thúc bi kịch này mà thôi.",
						"thai": "...ไม่, แค่จบโศกนาฏกรรมนี้เท่านั้นเอง",
						"hindi": "...नहीं, मैंने बस इस त्रासदी को खत्म कर दिया।"
					},
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "안야의 빛은 영원히 사라졌다. 하지만 그 잔상은… 새로운 의문을 남겼다.",
						"english": "Anya's light vanished forever. But her afterimage... left new questions.",
						"japanese": "「アーニャの光は永遠に消え去った。しかしその残像は…新たな疑問を残した。」",
						"chinese": "“安雅的光芒永远消逝了。但她的残影…却留下了新的疑问。”",
						"french": "La lumière d'Anya disparut à jamais. Mais son image persistante... laissa de nouvelles questions.",
						"spanish": "La luz de Anya desapareció para siempre. Pero su imagen residual… dejó nuevas preguntas.",
						"vietnamese": "Ánh sáng của Anya biến mất vĩnh viễn. Nhưng dư ảnh của cô ấy… đã để lại những câu hỏi mới.",
						"thai": "แสงของอันย่าหายไปตลอดกาล แต่ภาพติดตาของเธอ... ได้ทิ้งคำถามใหม่ไว้",
						"hindi": "आन्या की रोशनी हमेशा के लिए गायब हो गई। लेकिन उसकी बची हुई छवि… नए सवाल छोड़ गई।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 조각상은 다시 굳어갔다. 안야의 절규는 영원히 동굴에 갇혔다.",
						"english": "The ice sculpture solidified again. Anya's scream was forever trapped in the cave.",
						"japanese": "「氷の彫像は再び固まった。アーニャの叫びは永遠に洞窟に閉じ込められた。」",
						"chinese": "“冰雕再次凝固。安雅的尖叫声永远被困在洞穴中。”",
						"french": "La sculpture de glace se figea à nouveau. Le cri d'Anya fut à jamais emprisonné dans la grotte.",
						"spanish": "La estatua de hielo se solidificó de nuevo. El grito de Anya quedó atrapado para siempre en la cueva.",
						"vietnamese": "Tượng băng lại cứng đờ. Tiếng thét của Anya vĩnh viễn bị kẹt trong hang động.",
						"thai": "รูปปั้นน้ำแข็งกลับมาแข็งตัวอีกครั้ง เสียงกรีดร้องของอันย่าถูกขังอยู่ในถ้ำตลอดไป",
						"hindi": "बर्फ की मूर्ति फिर से जम गई। आन्या की चीख हमेशा के लिए गुफा में कैद हो गई।"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "안야… 미안해…!",
						"english": "Anya... I'm sorry...!",
						"japanese": "「アーニャ…ごめん…！」",
						"chinese": "“安雅…对不起…！”",
						"french": "Anya... Je suis désolé... !",
						"spanish": "Anya... ¡Lo siento...!",
						"vietnamese": "Anya... Em xin lỗi...!",
						"thai": "อันย่า... ฉันขอโทษ...!",
						"hindi": "आन्या… मुझे माफ़ करना…!"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…안야는… 혼자… 기다릴 거예요…",
						"english": "...Anya... will wait... alone...",
						"japanese": "「…アーニャは…一人で…待っているでしょう…」",
						"chinese": "“…安雅会…独自…等待的…”",
						"french": "...Anya... attendra... seule...",
						"spanish": "...Anya... esperará... sola...",
						"vietnamese": "...Anya... sẽ đợi... một mình...",
						"thai": "...อันย่า... จะรอ... โดยลำพัง...",
						"hindi": "…आन्या…अकेले…इंतज़ार करेगी…"
					}
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이런 비극을… 감당할 수 있겠나? 다시 시작할 수 있겠어?",
						"english": "Can you bear... this tragedy? Can you start again?",
						"japanese": "「こんな悲劇を…耐えられるのか？再び始められるのか？」",
						"chinese": "“你…能承受这场悲剧吗？能重新开始吗？”",
						"french": "Peux-tu supporter... une telle tragédie ? Peux-tu recommencer ?",
						"spanish": "¿Podrás soportar… esta tragedia? ¿Podrás empezar de nuevo?",
						"vietnamese": "Liệu ngươi có thể... chịu đựng bi kịch này không? Có thể bắt đầu lại được không?",
						"thai": "จะทนรับโศกนาฏกรรมแบบนี้ได้ไหม? จะเริ่มต้นใหม่ได้ไหม?",
						"hindi": "क्या तुम इस त्रासदी को… सहन कर पाओगे? क्या तुम फिर से शुरू कर पाओगे?"
					},
					"speaker": "ivar"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "마침내, 빛이 이끈 동굴의 가장 깊은 곳. 투명한 얼음 조각상이 섬뜩하게 서 있었다.",
						"english": "Finally, in the deepest part of the cave guided by light. An eerie, transparent ice sculpture stood.",
						"japanese": "ついに、光に導かれた洞窟の最奥。透明な氷の彫像が不気味に立っていた。",
						"chinese": "终于，在光芒指引的洞穴最深处。一座透明的冰雕诡异地矗立着。",
						"french": "Enfin, au plus profond de la grotte guidée par la lumière. Une étrange sculpture de glace transparente se dressait.",
						"spanish": "Finalmente, en lo más profundo de la cueva guiada por la luz. Una espeluznante escultura de hielo transparente se alzaba.",
						"vietnamese": "Cuối cùng, tại nơi sâu nhất của hang động được dẫn lối bởi ánh sáng. Một bức tượng băng trong suốt kỳ quái đứng sừng sững.",
						"thai": "ในที่สุด ที่ส่วนลึกที่สุดของถ้ำที่นำทางด้วยแสง ประติมากรรมน้ำแข็งโปร่งใสยืนตระหง่านน่าขนลุก",
						"hindi": "अंततः, प्रकाश से निर्देशित गुफा के सबसे गहरे हिस्से में। एक पारदर्शी बर्फ की मूर्ति भयावह रूप से खड़ी थी।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "그 안에 갇힌 어린아이의 형상. 그리고 희미하게 들려오는 속삭임.",
						"english": "The form of a child trapped within. And a faint whisper echoing.",
						"japanese": "その中に閉じ込められた幼い子供の姿。そして、かすかに聞こえるささやき。",
						"chinese": "一个被困在其中的小孩的形体。以及隐约传来的低语声。",
						"french": "La silhouette d'un enfant piégé à l'intérieur. Et un faible murmure résonnant.",
						"spanish": "La forma de un niño atrapado dentro. Y un débil susurro resonando.",
						"vietnamese": "Hình bóng một đứa trẻ bị mắc kẹt bên trong. Và một tiếng thì thầm yếu ớt vang vọng.",
						"thai": "ร่างของเด็กที่ถูกขังอยู่ข้างใน และเสียงกระซิบแผ่วเบาที่ดังขึ้น",
						"hindi": "उसके अंदर फंसी एक बच्चे की आकृति। और एक धीमी फुसफुसाहट सुनाई दे रही थी।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…아빠, 엄마… 어디 계세요? 안야는… 여기 있어요… 추워요…",
						"english": "...Daddy, Mommy... where are you? Anya is... here... It's cold...",
						"japanese": "…パパ、ママ…どこ？アーニャは…ここにいるよ…寒いよ…",
						"chinese": "...爸爸，妈妈...你们在哪里？安雅...在这里...好冷...",
						"french": "...Papa, Maman... où êtes-vous ? Anya est... ici... J'ai froid...",
						"spanish": "...Papá, Mamá... ¿dónde estáis? Anya está... aquí... Hace frío...",
						"vietnamese": "...Bố, mẹ... hai người đâu rồi? Anya... ở đây... Lạnh quá...",
						"thai": "...พ่อจ๋า, แม่จ๋า...อยู่ไหนคะ? อันย่า...อยู่นี่...หนาวจังเลย...",
						"hindi": "...पापा, मम्मी... आप कहाँ हैं? अन्या... यहीं है... ठंड लग रही है..."
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "안야…?",
						"english": "Anya...?",
						"japanese": "アーニャ…？",
						"chinese": "安雅...？",
						"french": "Anya...?",
						"spanish": "¿Anya...?",
						"vietnamese": "Anya...?",
						"thai": "อันย่า...?",
						"hindi": "अन्या...?"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "ivar",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						2,
						3
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "이게… 빛의 정체였나. 얼어붙은 영혼의 비극.",
						"english": "This was... the true nature of the light. The tragedy of a frozen soul.",
						"japanese": "これが…光の正体だったのか。凍てついた魂の悲劇。",
						"chinese": "这就是...光的真面目吗？一个冰封灵魂的悲剧。",
						"french": "C'était... la vraie nature de la lumière. La tragédie d'une âme gelée.",
						"spanish": "Esto era... la verdadera naturaleza de la luz. La tragedia de un alma congelada.",
						"vietnamese": "Đây là... bản chất thật của ánh sáng sao. Bi kịch của một linh hồn bị đóng băng.",
						"thai": "นี่คือ...ตัวตนที่แท้จริงของแสงหรือ? โศกนาฏกรรมของวิญญาณที่ถูกแช่แข็ง",
						"hindi": "क्या यह... प्रकाश का असली स्वरूप था। एक जमी हुई आत्मा की त्रासदी।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "ivar"
				},
				{
					"content": {
						"korean": "우리가… 뭘 한 거지?",
						"english": "What have... we done?",
						"japanese": "僕たちは…何をしたんだ？",
						"chinese": "我们...做了什么？",
						"french": "Qu'avons-nous... fait ?",
						"spanish": "¿Qué hemos... hecho?",
						"vietnamese": "Chúng ta... đã làm gì vậy?",
						"thai": "พวกเรา...ทำอะไรลงไป?",
						"hindi": "हमने... क्या किया है?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "boss",
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "…안야는… 혼자… 추워요…",
						"english": "...Anya is... alone... It's cold...",
						"japanese": "…アーニャは…ひとり…寒いよ…",
						"chinese": "...安雅...一个人...好冷...",
						"french": "...Anya est... seule... J'ai froid...",
						"spanish": "...Anya está... sola... Hace frío...",
						"vietnamese": "...Anya... một mình... Lạnh quá...",
						"thai": "...อันย่า...อยู่คนเดียว...หนาวจังเลย...",
						"hindi": "...अन्या... अकेली है... ठंड लग रही है..."
					}
				}
			]
		}
	],
	"epilogue": {
		"korean": [
			"안야의 빛이 사라진 동굴. 영원한 침묵이 감돌았다.",
			"그것은 구원이었을까, 또 다른 침해였을까.",
			"얼어붙은 아이의 속삭임은 바람에 실려 멀리 사라졌다.",
			"하지만 그 메아리는, 탐험대의 마음에 깊은 상처를 남겼다.",
			"끝나지 않은 겨울처럼, 이야기는 계속될 것 같았다."
		],
		"english": [
			"The cave where Anya's light vanished. Eternal silence reigned.",
			"Was it salvation, or another transgression?",
			"The frozen child's whisper was carried away by the wind.",
			"But its echo left a deep wound in the explorers' hearts.",
			"Like an unending winter, the story seemed destined to continue."
		],
		"japanese": [
			"アーニャの光が消えた洞窟。永遠の沈黙が漂っていた。",
			"それは救済だったのか、それとも新たな侵犯だったのか。",
			"凍りついた子供の囁きは、風に乗って遠くへ消え去った。",
			"しかし、その残響は探検隊の心に深い傷を残した。",
			"終わらない冬のように、物語は続くようだった。"
		],
		"chinese": [
			"安雅之光消失的洞穴。永恒的寂静弥漫。",
			"那是救赎，还是又一次侵犯？",
			"冰冻孩子的低语随风远去。",
			"然而，那回声在探险队心中留下了深深的伤痕。",
			"如同无尽的冬季，故事似乎将继续下去。"
		],
		"french": [
			"La grotte où la lumière d'Anya disparut. Un silence éternel régnait.",
			"Était-ce le salut, ou une autre transgression ?",
			"Le murmure de l'enfant gelé fut emporté par le vent.",
			"Mais son écho laissa une profonde blessure dans le cœur des explorateurs.",
			"Comme un hiver sans fin, l'histoire semblait devoir continuer."
		],
		"spanish": [
			"La cueva donde la luz de Anya se desvaneció. Un silencio eterno reinaba.",
			"¿Fue salvación, o otra transgresión?",
			"El susurro del niño congelado fue llevado por el viento.",
			"Pero su eco dejó una profunda herida en el corazón de los exploradores.",
			"Como un invierno interminable, la historia parecía continuar."
		],
		"vietnamese": [
			"Hang động nơi ánh sáng của Anya biến mất. Sự im lặng vĩnh cửu bao trùm.",
			"Đó là sự cứu rỗi, hay một sự xâm phạm khác?",
			"Lời thì thầm của đứa trẻ bị đóng băng đã theo gió bay đi xa.",
			"Nhưng tiếng vang của nó đã để lại vết thương sâu sắc trong lòng các nhà thám hiểm.",
			"Như một mùa đông bất tận, câu chuyện dường như sẽ tiếp diễn."
		],
		"thai": [
			"ถ้ำที่แสงของอันยาหายไป ความเงียบงันชั่วนิรันดร์ปกคลุม.",
			"มันคือการไถ่ถอน หรือการล่วงละเมิดอีกครั้ง?",
			"เสียงกระซิบของเด็กที่ถูกแช่แข็งถูกลมพัดพาหายไปไกล.",
			"แต่เสียงสะท้อนนั้นทิ้งบาดแผลลึกในใจของคณะสำรวจ.",
			"ราวกับฤดูหนาวที่ไม่มีวันสิ้นสุด เรื่องราวดูเหมือนจะดำเนินต่อไป."
		],
		"hindi": [
			"वह गुफा जहाँ अन्या का प्रकाश गायब हो गया। शाश्वत सन्नाटा छा गया।",
			"क्या यह मोक्ष था, या एक और अतिक्रमण?",
			"जमे हुए बच्चे की फुसफुसाहट हवा के साथ दूर चली गई।",
			"लेकिन उसकी गूँज ने खोजकर्ताओं के दिलों में गहरा घाव छोड़ दिया।",
			"एक अंतहीन सर्दी की तरह, कहानी जारी रहने वाली थी।"
		]
	},
	"prologue": {
		"korean": [
			"안야의 빛, 마지막 길을 비추다.",
			"얼어붙은 절벽 끝, 그 빛은 형상이 되어 굳어갔다.",
			"그 투명한 얼음 속에 갇힌 건…",
			"수백 년을 기다린 아이의 비극적인 속삭임이었다.",
			"진실은 언제나 차갑게 얼어붙어 있었다."
		],
		"english": [
			"Anya's light, illuminating the final path.",
			"At the edge of the frozen cliff, the light solidified into a form.",
			"Trapped within that transparent ice was...",
			"...the tragic whisper of a child who had waited centuries.",
			"The truth had always been coldly frozen."
		],
		"japanese": [
			"アーニャの光、最後の道を照らす。",
			"凍てつく崖の果て、その光は形となり固まった。",
			"その透明な氷の中に囚われていたのは…",
			"…何百年も待った、ある子供の悲劇的な囁きだった。",
			"真実は常に冷たく凍りついていた。"
		],
		"chinese": [
			"安雅之光，照亮最后之路。",
			"在冰冻悬崖之巅，那光芒凝固成形。",
			"困在那透明的冰中是…",
			"……那是等待了数百年的孩子的悲剧低语。",
			"真相总是冰冷地凝结着。"
		],
		"french": [
			"La lumière d'Anya, éclairant le dernier chemin.",
			"Au bord de la falaise gelée, la lumière se figea en une forme.",
			"Coincé dans cette glace transparente était...",
			"...le chuchotement tragique d'un enfant qui avait attendu des siècles.",
			"La vérité avait toujours été froidement gelée."
		],
		"spanish": [
			"La luz de Anya, iluminando el último camino.",
			"Al borde del acantilado helado, la luz se solidificó en una forma.",
			"Atrapado en ese hielo transparente estaba...",
			"...el trágico susurro de un niño que había esperado siglos.",
			"La verdad siempre había estado fríamente congelada."
		],
		"vietnamese": [
			"Ánh sáng của Anya, chiếu rọi con đường cuối cùng.",
			"Ở rìa vách đá băng giá, ánh sáng đông đặc thành hình.",
			"Bị mắc kẹt trong lớp băng trong suốt đó là...",
			"...lời thì thầm bi thảm của một đứa trẻ đã đợi hàng thế kỷ.",
			"Sự thật luôn đông cứng một cách lạnh lẽo."
		],
		"thai": [
			"แสงของอันยา ส่องทางสุดท้าย.",
			"ณ ปลายผาเยือกแข็ง แสงนั้นแข็งตัวเป็นรูปร่าง.",
			"สิ่งที่ถูกขังอยู่ในน้ำแข็งใส่นั้นคือ...",
			"...เสียงกระซิบอันโศกเศร้าของเด็กที่รอคอยมาหลายศตวรรษ.",
			"ความจริงเย็นเยียบเสมอ."
		],
		"hindi": [
			"अन्या का प्रकाश, अंतिम मार्ग को प्रकाशित करता है।",
			"जमी हुई चट्टान के छोर पर, वह प्रकाश एक आकृति बनकर जम गया।",
			"उस पारदर्शी बर्फ में फंसा हुआ था...",
			"...एक बच्चे की दुखद फुसफुसाहट, जिसने सदियों इंतजार किया था।",
			"सत्य हमेशा बर्फीली ठंड में जमा हुआ था।"
		]
	}
} as const;
