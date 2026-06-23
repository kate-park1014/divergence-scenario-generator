export const scenario_snowy_bluster_19_04 = {
	"scenario_id": "snowy_bluster_19_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"boris": {
			"id": "mon_8f41e00a-9c1b-4e66-9d7a-584cc2a9af84",
			"name": {
				"korean": "보리스",
				"english": "Boris",
				"japanese": "ボリス",
				"chinese": "鲍里斯",
				"french": "Boris",
				"spanish": "Boris",
				"vietnamese": "Boris",
				"thai": "บอริส",
				"hindi": "बोरिस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8db2ee50-a24d-43cf-a3ec-fad83142f500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/961dfd96-9db1-42aa-a15b-82ba7d1ae700/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"눈보라 속 소문은 눈덩이처럼 불어났다.",
			"고고학자 보리스는 유적에서 고대 문헌을 해독 중이었다.",
			"괴물은 마을을 공포에 떨게 했지만… 어딘가 이상했다.",
			"공허하고, 그리워하는… 그런 존재였다."
		],
		"english": [
			"Rumors in the blizzard grew like a snowball.",
			"Archaeologist Boris was deciphering ancient texts in the ruins.",
			"The monster terrified the village, but... something was off.",
			"It was an empty, longing... kind of being."
		],
		"japanese": [
			"吹雪の中の噂は雪だるま式に膨れ上がった。",
			"考古学者ボリスは遺跡で古代文献を解読中だった。",
			"怪物は村を恐怖に陥れたが… 何か違和感があった。",
			"虚しく、恋しがる… そんな存在だった。"
		],
		"chinese": [
			"暴风雪中的谣言如滚雪球般越滚越大。",
			"考古学家鲍里斯正在遗迹中解读古代文献。",
			"怪物让村庄陷入恐惧… 但总觉得有些不对劲。",
			"那是一个空虚、渴望的… 存在。"
		],
		"french": [
			"Les rumeurs dans le blizzard grossissaient comme une boule de neige.",
			"L'archéologue Boris déchiffrait des textes anciens dans les ruines.",
			"Le monstre terrorisait le village, mais... quelque chose clochait.",
			"C'était une existence vide, nostalgique..."
		],
		"spanish": [
			"Los rumores en la ventisca crecían como una bola de nieve.",
			"El arqueólogo Boris estaba descifrando textos antiguos en las ruinas.",
			"El monstruo aterrorizó al pueblo, pero... algo no cuadraba.",
			"Era un ser vacío, anhelante..."
		],
		"vietnamese": [
			"Tin đồn trong bão tuyết lan nhanh như tuyết lăn.",
			"Nhà khảo cổ Boris đang giải mã văn kiện cổ xưa trong di tích.",
			"Quái vật khiến cả làng kinh hoàng, nhưng… có điều gì đó thật kỳ lạ.",
			"Đó là một sự tồn tại trống rỗng, khao khát…"
		],
		"thai": [
			"ข่าวลือท่ามกลางพายุหิมะแพร่สะพัดราวกับลูกบอลหิมะ",
			"นักโบราณคดีบอริสกำลังถอดรหัสเอกสารโบราณในซากปรักหักพัง",
			"สัตว์ประหลาดทำให้หมู่บ้านหวาดกลัว แต่... มีบางอย่างผิดปกติ",
			"มันเป็นสิ่งมีชีวิตที่ว่างเปล่า โหยหา..."
		],
		"hindi": [
			"बर्फीले तूफान में अफवाहें बर्फ के गोले की तरह बढ़ती गईं।",
			"पुरातत्वविद् बोरिस खंडहरों में प्राचीन ग्रंथों को समझ रहे थे।",
			"राक्षस ने गाँव को भयभीत कर दिया, लेकिन... कुछ अजीब था।",
			"यह एक खाली, तरसने वाला... प्राणी था।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마을을 뒤덮는 기이한 소문. 괴물에 대한 공포가 눈덩이처럼 불어났다.",
						"english": "Strange rumors enveloped the village. Fear of the monster grew like a snowball.",
						"japanese": "村を覆う奇妙な噂。怪物への恐怖が雪だるま式に膨れ上がった。",
						"chinese": "奇特的谣言笼罩着村庄。对怪物的恐惧如滚雪球般越滚越大。",
						"french": "D'étranges rumeurs enveloppaient le village. La peur du monstre grandissait comme une boule de neige.",
						"spanish": "Extraños rumores envolvían el pueblo. El miedo al monstruo crecía como una bola de nieve.",
						"vietnamese": "Những tin đồn kỳ lạ bao trùm làng. Nỗi sợ hãi về quái vật lớn dần như tuyết lăn.",
						"thai": "ข่าวลือแปลก ๆ ปกคลุมหมู่บ้าน ความกลัวสัตว์ประหลาดเพิ่มพูนขึ้นราวกับลูกบอลหิมะ",
						"hindi": "अजीब अफवाहों ने गाँव को घेर लिया। राक्षस का डर बर्फ के गोले की तरह बढ़ता गया।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						5,
						2
					],
					"action": "enter",
					"speaker": "boris"
				},
				{
					"content": {
						"korean": "마을 사람들은 또 과장된 이야기를 하고 있군.",
						"english": "The villagers are exaggerating again.",
						"japanese": "村人たちはまた大げさな話をしているな。",
						"chinese": "村民们又在夸大其词了。",
						"french": "Les villageois exagèrent encore.",
						"spanish": "Los aldeanos están exagerando de nuevo.",
						"vietnamese": "Dân làng lại đang kể những chuyện phóng đại rồi.",
						"thai": "ชาวบ้านพวกนี้ก็พูดเกินจริงอีกแล้ว",
						"hindi": "ग्रामीण फिर से अतिशयोक्ति कर रहे हैं।"
					},
					"type": "speech",
					"speaker": "boris",
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "과장이 아니에요! 괴물이 나타났다고요!",
						"english": "It's not an exaggeration! The monster appeared!",
						"japanese": "誇張じゃないですよ！怪物が現れたんです！",
						"chinese": "这不是夸张！怪物出现了！",
						"french": "Ce n'est pas une exagération ! Le monstre est apparu !",
						"spanish": "¡No es una exageración! ¡El monstruo apareció!",
						"vietnamese": "Không phải phóng đại đâu! Quái vật xuất hiện thật đấy!",
						"thai": "ไม่ได้พูดเกินจริงนะ! สัตว์ประหลาดปรากฏตัวแล้ว!",
						"hindi": "यह कोई अतिशयोक्ति नहीं है! राक्षस प्रकट हुआ!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "이 유적의 단서들은… 다른 이야기를 하고 있어.",
						"english": "The clues in these ruins... tell a different story.",
						"japanese": "この遺跡の手がかりは… 別の話を語っている。",
						"chinese": "这些遗迹中的线索… 讲述着一个不同的故事。",
						"french": "Les indices de ces ruines... racontent une autre histoire.",
						"spanish": "Las pistas de estas ruinas... cuentan una historia diferente.",
						"vietnamese": "Những manh mối trong di tích này… đang kể một câu chuyện khác.",
						"thai": "เบาะแสในซากปรักหักพังเหล่านี้... กำลังบอกเล่าเรื่องราวที่แตกต่างออกไป",
						"hindi": "इन खंडहरों के सुराग... एक अलग कहानी कह रहे हैं।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "boris",
					"action": "enter",
					"spot": [
						2,
						3
					]
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "이 얼음 조각상에 새겨진 고대 글자들… '오만', '허풍' 같은 단어만 유독 선명하다.",
						"english": "The ancient letters carved on this ice sculpture... only words like 'arrogance' and 'bluster' are unusually clear.",
						"japanese": "この氷の彫像に刻まれた古代の文字… 「傲慢」「虚勢」といった単語だけがひときわ鮮明だ。",
						"chinese": "这冰雕上刻着的古老文字… 只有“傲慢”、“吹嘘”之类的词语异常清晰。",
						"french": "Les lettres anciennes gravées sur cette sculpture de glace... seuls des mots comme ",
						"spanish": "Las letras antiguas grabadas en esta escultura de hielo... solo palabras como 'arrogancia' y 'fanfarronería' son inusualmente claras.",
						"vietnamese": "Những chữ cổ khắc trên tượng băng này… chỉ có những từ như 'kiêu ngạo', 'khoe khoang' là đặc biệt rõ ràng.",
						"thai": "ตัวอักษรโบราณที่แกะสลักบนประติมากรรมน้ำแข็งนี้... มีเพียงคำว่า 'ความอวดดี' และ 'การโอ้อวด' เท่านั้นที่ชัดเจนเป็นพิเศษ",
						"hindi": "इस बर्फ की मूर्ति पर उकेरे गए प्राचीन अक्षर... केवल 'अहंकार' और 'शेखी' जैसे शब्द ही असामान्य रूप से स्पष्ट हैं。"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "그게 눈사람 괴물이랑 무슨 상관인데요?",
						"english": "What does that have to do with the snowman monster?",
						"japanese": "それが雪だるま怪物とどう関係あるんですか？",
						"chinese": "那跟雪人怪物有什么关系呢？",
						"french": "Qu'est-ce que cela a à voir avec le monstre bonhomme de neige ?",
						"spanish": "¿Qué tiene que ver eso con el monstruo muñeco de nieve?",
						"vietnamese": "Điều đó liên quan gì đến quái vật người tuyết chứ?",
						"thai": "แล้วมันเกี่ยวอะไรกับสัตว์ประหลาดมนุษย์หิมะ?",
						"hindi": "उसका स्नोमैन राक्षस से क्या संबंध है?"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마을 사람들이 두려워하는 건… 진짜 재앙이 아닐 수도 있어.",
						"english": "What the villagers fear... might not be a real disaster.",
						"japanese": "村人たちが恐れているのは…本当の災厄ではないかもしれない。",
						"chinese": "村民们所恐惧的……可能不是真正的灾难。",
						"french": "Ce que les villageois craignent… n'est peut-être pas une vraie catastrophe.",
						"spanish": "Lo que los aldeanos temen... podría no ser un desastre real.",
						"vietnamese": "Điều dân làng sợ hãi… có thể không phải là một thảm họa thật sự.",
						"thai": "สิ่งที่ชาวบ้านกลัว... อาจไม่ใช่ภัยพิบัติที่แท้จริง",
						"hindi": "गाँव वाले जिस चीज़ से डर रहे हैं... वो शायद असली आपदा न हो।"
					},
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "그럼 뭔가요?",
						"english": "Then what is it?",
						"japanese": "では、何なのですか？",
						"chinese": "那是什么？",
						"french": "Alors, qu'est-ce que c'est ?",
						"spanish": "Entonces, ¿qué es?",
						"vietnamese": "Vậy thì là gì?",
						"thai": "แล้วมันคืออะไร?",
						"hindi": "तो फिर क्या है?"
					}
				},
				{
					"speaker": "boris",
					"type": "speech",
					"content": {
						"korean": "…공허함과 그리움 같은 기분이 든다.",
						"english": "...It feels like emptiness and longing.",
						"japanese": "…虚無感と懐かしさのような感覚だ。",
						"chinese": "……感觉像是空虚和思念。",
						"french": "...Ça ressemble à un sentiment de vide et de nostalgie.",
						"spanish": "...Se siente como vacío y anhelo.",
						"vietnamese": "…Cảm giác như sự trống rỗng và nỗi nhớ.",
						"thai": "...รู้สึกเหมือนความว่างเปล่าและความโหยหา",
						"hindi": "...खालीपन और लालसा जैसा महसूस होता है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "boris"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "마을의 공포는 극에 달했지만, 실제 피해는 없었다.",
						"english": "The village's fear peaked, but there was no actual damage.",
						"japanese": "村の恐怖は頂点に達したが、実際の被害はなかった。",
						"chinese": "村庄的恐惧达到了顶峰，但没有实际的损害。",
						"french": "La peur du village a atteint son paroxysme, mais il n'y a eu aucun dégât réel.",
						"spanish": "El miedo del pueblo llegó a su punto máximo, pero no hubo daños reales.",
						"vietnamese": "Nỗi sợ hãi của làng lên đến đỉnh điểm, nhưng không có thiệt hại thực tế.",
						"thai": "ความกลัวของหมู่บ้านพุ่งสูงสุด แต่ไม่มีความเสียหายจริง",
						"hindi": "गाँव का डर चरम पर पहुँच गया था, लेकिन कोई वास्तविक नुकसान नहीं हुआ।"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "눈사람 괴물이 길을 막았대! 큰일 나는 거 아니야?",
						"english": "The snowman monster blocked the road! Isn't that a big deal?",
						"japanese": "雪だるまの怪物が道を塞いだんだって！大変なことにならないの？",
						"chinese": "雪人怪物挡住了路！这不是件大事吗？",
						"french": "Le monstre bonhomme de neige a bloqué la route ! Ce n'est pas grave ?",
						"spanish": "¡El monstruo de nieve bloqueó el camino! ¿No es eso grave?",
						"vietnamese": "Quái vật người tuyết chặn đường! Chẳng phải là chuyện lớn sao?",
						"thai": "สัตว์ประหลาดมนุษย์หิมะขวางทาง! นี่ไม่ใช่เรื่องใหญ่เหรอ?",
						"hindi": "हिममानव राक्षस ने रास्ता रोक दिया! क्या यह कोई बड़ी बात नहीं है?"
					},
					"type": "speech",
					"speaker": "character_1",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "아니야, 그냥 시끄러운 소리만 들렸을 뿐이야!",
						"english": "No, I just heard loud noises!",
						"japanese": "違うよ、ただ騒がしい音が聞こえただけさ！",
						"chinese": "不，只是听到了嘈杂的声音！",
						"french": "Non, on a juste entendu des bruits forts !",
						"spanish": "¡No, solo se escucharon ruidos fuertes!",
						"vietnamese": "Không, chỉ nghe thấy tiếng ồn ào thôi!",
						"thai": "ไม่ใช่, แค่ได้ยินเสียงดังเท่านั้นแหละ!",
						"hindi": "नहीं, बस ज़ोरदार आवाज़ें सुनाई दीं!"
					},
					"type": "speech",
					"speaker": "character_2"
				},
				{
					"speaker": "boris",
					"content": {
						"korean": "맞아. 피해는 없어. 단지… 떠들썩했을 뿐.",
						"english": "Right. No damage. Just... a commotion.",
						"japanese": "そう。被害はない。ただ…騒がしかっただけだ。",
						"chinese": "没错。没有损害。只是……一阵喧闹。",
						"french": "C'est ça. Pas de dégâts. Juste... du grabuge.",
						"spanish": "Exacto. No hay daños. Solo... un alboroto.",
						"vietnamese": "Đúng vậy. Không có thiệt hại. Chỉ là… ồn ào thôi.",
						"thai": "ใช่. ไม่มีเสียหาย. แค่... วุ่นวายเท่านั้นเอง.",
						"hindi": "सही। कोई नुकसान नहीं। बस... शोरगुल था।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그래도… 너무 무섭다고요!",
						"english": "Still... it's too scary!",
						"japanese": "それでも…すごく怖いんです！",
						"chinese": "即便如此……还是很可怕！",
						"french": "N'empêche... c'est trop effrayant !",
						"spanish": "Aun así... ¡es demasiado aterrador!",
						"vietnamese": "Dù vậy… vẫn rất đáng sợ!",
						"thai": "แต่ถึงอย่างนั้น... มันก็น่ากลัวมากนะ!",
						"hindi": "फिर भी... यह बहुत डरावना है!"
					},
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "뭔가… 오해하고 있는 것 같군.",
						"english": "It seems like... there's some misunderstanding.",
						"japanese": "何か…誤解しているようだな。",
						"chinese": "好像……有什么误会。",
						"french": "On dirait qu'il y a... un malentendu.",
						"spanish": "Parece que... hay algún malentendido.",
						"vietnamese": "Có vẻ như… có sự hiểu lầm nào đó.",
						"thai": "ดูเหมือนว่า... จะมีการเข้าใจผิดบางอย่าง",
						"hindi": "कुछ... गलतफहमी हो रही है, ऐसा लगता है।"
					},
					"speaker": "boris"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "유적 깊은 곳에서 거대한 그림자가 나타났다.",
						"english": "A giant shadow appeared from deep within the ruins.",
						"japanese": "遺跡の奥深くから巨大な影が現れた。",
						"chinese": "一道巨大的黑影从遗迹深处出现。",
						"french": "Une ombre gigantesque est apparue des profondeurs des ruines.",
						"spanish": "Una sombra gigantesca apareció desde lo profundo de las ruinas.",
						"vietnamese": "Một cái bóng khổng lồ xuất hiện từ sâu trong tàn tích.",
						"thai": "เงาขนาดยักษ์ปรากฏขึ้นจากส่วนลึกของซากปรักหักพัง",
						"hindi": "खंडहरों की गहराई से एक विशाल छाया प्रकट हुई।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이야기… 들어줘…",
						"english": "...Listen... to my story...",
						"japanese": "…話…聞いて…",
						"chinese": "…听…我说…",
						"french": "…Écoute… mon histoire…",
						"spanish": "…Escucha… mi historia…",
						"vietnamese": "…Nghe… tôi nói…",
						"thai": "…ฟัง…ฉันหน่อย…",
						"hindi": "…मेरी बात… सुनो…"
					},
					"speaker": "random_boss"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "저게… 눈사람 괴물인가?",
						"english": "Is that... a snowman monster?",
						"japanese": "あれは…雪だるまの怪物か？",
						"chinese": "那…是雪人怪物吗？",
						"french": "Est-ce que c'est… un monstre de neige ?",
						"spanish": "¿Es eso… un monstruo de nieve?",
						"vietnamese": "Đó… có phải là quái vật người tuyết không?",
						"thai": "นั่น…สัตว์ประหลาดมนุษย์หิมะเหรอ?",
						"hindi": "क्या वह… एक हिममानव राक्षस है?"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…혼자… 싫어…",
						"english": "...Alone... I hate it...",
						"japanese": "…一人…嫌だ…",
						"chinese": "…一个人…不要…",
						"french": "…Seul… je déteste ça…",
						"spanish": "…Solo… no quiero…",
						"vietnamese": "…Một mình… tôi ghét…",
						"thai": "…คนเดียว…ไม่ชอบ…",
						"hindi": "…अकेला… मुझे पसंद नहीं…"
					},
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "젠장, 싸워야 해!",
						"english": "Damn it, I have to fight!",
						"japanese": "くそ、戦わなきゃ！",
						"chinese": "该死，必须战斗！",
						"french": "Bon sang, il faut se battre !",
						"spanish": "¡Maldita sea, tengo que luchar!",
						"vietnamese": "Chết tiệt, phải chiến đấu!",
						"thai": "บ้าจริง, ต้องสู้!",
						"hindi": "लानत है, लड़ना होगा!"
					}
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…가지 마…",
						"english": "...Don't... go...",
						"japanese": "…行かないで…",
						"chinese": "…别走…",
						"french": "…Ne pars pas…",
						"spanish": "…No te vayas…",
						"vietnamese": "…Đừng đi…",
						"thai": "…อย่าไปนะ…",
						"hindi": "…मत जाओ…"
					},
					"type": "speech",
					"speaker": "random_boss"
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
						"korean": "…결국… 혼자…",
						"english": "...Alone... in the end...",
						"japanese": "…結局…一人で…",
						"chinese": "…终究…独自一人…",
						"french": "…Seul… à la fin…",
						"spanish": "…Solo… al final…",
						"vietnamese": "...Cuối cùng... một mình...",
						"thai": "...สุดท้าย... ก็อยู่คนเดียว...",
						"hindi": "...अंततः... अकेला..."
					}
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "이겼지만… 이상해. 괴물이 아니었나…?",
						"english": "I won... but it feels strange. Was it not a monster...?",
						"japanese": "勝ったけど…変だ。怪物じゃなかったのか…？",
						"chinese": "我赢了…但很奇怪。它不是怪物吗…？",
						"french": "J'ai gagné… mais c'est étrange. Ce n'était pas un monstre…?",
						"spanish": "Gané… pero es extraño. ¿No era un monstruo…?",
						"vietnamese": "Thắng rồi… nhưng lạ thật. Nó không phải quái vật sao…?",
						"thai": "ชนะแล้ว… แต่แปลกจัง. มันไม่ใช่สัตว์ประหลาดเหรอ…?",
						"hindi": "जीत गया… पर अजीब है। क्या वह राक्षस नहीं था…?"
					},
					"type": "speech"
				},
				{
					"speaker": "boris",
					"action": "enter",
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "내가 찾은 단서가… 저 괴물의 슬픔을 말하는 건가…",
						"english": "Could the clue I found... speak of that monster's sorrow...?",
						"japanese": "僕が見つけた手がかりが…あの怪物の悲しみを語っているのか…",
						"chinese": "我找到的线索…是在诉说那怪物的悲伤吗…?",
						"french": "L'indice que j'ai trouvé… parlerait-il de la tristesse de ce monstre…?",
						"spanish": "¿Podría la pista que encontré… hablar de la tristeza de ese monstruo…?",
						"vietnamese": "Manh mối tôi tìm thấy… có phải đang nói về nỗi buồn của con quái vật đó…?",
						"thai": "เบาะแสที่ฉันพบ… กำลังบอกเล่าความเศร้าของสัตว์ประหลาดตัวนั้นเหรอ…?",
						"hindi": "क्या जो सुराग मैंने पाया… वह उस राक्षस के दुख को बता रहा है…?"
					},
					"speaker": "boris"
				},
				{
					"type": "speech",
					"content": {
						"korean": "괴물은 사라졌지만, 그 자리에 남은 건 먹먹한 연민이었다.",
						"english": "The monster vanished, but what remained in its place was a heavy empathy.",
						"japanese": "怪物は消え去ったが、その場に残ったのは胸を締め付けるような哀れみだった。",
						"chinese": "怪物消失了，但原地留下的却是沉重的怜悯。",
						"french": "Le monstre a disparu, mais ce qui restait à sa place était une profonde compassion.",
						"spanish": "El monstruo desapareció, pero lo que quedó en su lugar fue una profunda compasión.",
						"vietnamese": "Con quái vật biến mất, nhưng thứ còn lại ở đó là một nỗi thương cảm sâu sắc.",
						"thai": "สัตว์ประหลาดหายไปแล้ว แต่สิ่งที่หลงเหลืออยู่คือความสงสารอย่างท่วมท้น.",
						"hindi": "राक्षस तो गायब हो गया, पर उसकी जगह पर सिर्फ गहरी करुणा रह गई थी।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…또 혼자… 떠들어봐야… 아무도…",
						"english": "...Alone again... talking to myself... no one...",
						"japanese": "…また一人で…話しても…誰も…",
						"chinese": "…又是一个人…就算自言自语…也没人…",
						"french": "…Encore seul… parler pour rien… personne…",
						"spanish": "…Otra vez solo… hablando… nadie…",
						"vietnamese": "...Lại một mình... nói chuyện... cũng chẳng ai...",
						"thai": "...อีกแล้ว... คนเดียว... พูดไปก็ไม่มีใคร...",
						"hindi": "...फिर अकेला… बोलता रहूँ… कोई नहीं…"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "젠장… 다시…!",
						"english": "Damn it... Again!",
						"japanese": "くそ…もう一度！",
						"chinese": "该死…再来一次!",
						"french": "Mince… Encore !",
						"spanish": "Maldita sea… ¡Otra vez!",
						"vietnamese": "Chết tiệt… Lại nữa!",
						"thai": "ให้ตายสิ… อีกครั้ง!",
						"hindi": "धिक्कार है… फिर से!"
					},
					"type": "speech",
					"speaker": "character_any",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"content": {
						"korean": "차가운 눈보라가 다시 길을 막았다.",
						"english": "The cold blizzard blocked the path once more.",
						"japanese": "冷たい吹雪が再び道を塞いだ。",
						"chinese": "冰冷的暴风雪再次阻挡了去路。",
						"french": "Le froid blizzard a de nouveau bloqué le chemin.",
						"spanish": "La fría ventisca volvió a bloquear el camino.",
						"vietnamese": "Trận bão tuyết lạnh giá lại chặn đường.",
						"thai": "พายุหิมะเย็นยะเยือกได้ปิดกั้นเส้นทางอีกครั้ง.",
						"hindi": "ठंडी बर्फीली हवा ने फिर से रास्ता रोक दिया।"
					},
					"speaker": "narrator",
					"emotion": "base"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "거대한 눈덩이가 유적의 가장 깊은 길을 막고 있었다.",
						"english": "A giant snowball blocked the deepest path of the ruins.",
						"japanese": "巨大な雪玉が遺跡の最も深い道を塞いでいた。",
						"chinese": "一个巨大的雪球挡住了遗迹最深处的路。",
						"french": "Une gigantesque boule de neige bloquait le chemin le plus profond des ruines.",
						"spanish": "Una gigantesca bola de nieve bloqueaba el camino más profundo de las ruinas.",
						"vietnamese": "Một quả cầu tuyết khổng lồ đã chặn con đường sâu nhất của tàn tích.",
						"thai": "ก้อนหิมะขนาดยักษ์ขวางทางเดินที่ลึกที่สุดของซากปรักหักพังอยู่",
						"hindi": "एक विशालकाय बर्फ का गोला खंडहरों के सबसे गहरे रास्ते को रोके हुए था।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "…이야기… 들어줘… 아무도… 안 들어줘…",
						"english": "...Listen... to my story... No one... listens...",
						"japanese": "…話…聞いて…誰も…聞いてくれない…",
						"chinese": "…听…我说…没有人…听我说…",
						"french": "…Écoute… mon histoire… Personne… n'écoute…",
						"spanish": "…Escucha… mi historia… Nadie… me escucha…",
						"vietnamese": "…Nghe… tôi nói… Không ai… nghe tôi nói…",
						"thai": "…ฟัง…ฉันหน่อย… ไม่มีใคร…ฟังเลย…",
						"hindi": "…मेरी बात… सुनो… कोई नहीं… सुनता…"
					},
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "우린 네가 아니야! 길을 비켜!",
						"english": "We're not you! Get out of the way!",
						"japanese": "私たちは君じゃない！道をどけろ！",
						"chinese": "我们不是你！让开！",
						"french": "Nous ne sommes pas toi ! Dégage du chemin !",
						"spanish": "¡No somos tú! ¡Apártate del camino!",
						"vietnamese": "Chúng tôi không phải là ngươi! Tránh ra!",
						"thai": "เราไม่ใช่แก! หลีกทางไป!",
						"hindi": "हम तुम नहीं हैं! रास्ता छोड़ो!"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "…혼자… 싫어… 가지 마…",
						"english": "...Alone... I hate it... Don't go...",
						"japanese": "…一人…嫌だ…行かないで…",
						"chinese": "…一个人…不要…别走…",
						"french": "…Seul… je déteste ça… Ne pars pas…",
						"spanish": "…Solo… no quiero… No te vayas…",
						"vietnamese": "…Một mình… tôi ghét… Đừng đi…",
						"thai": "…คนเดียว…ไม่ชอบ… อย่าไปนะ…",
						"hindi": "…अकेला… मुझे पसंद नहीं… मत जाओ…"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "할 수 없어…!",
						"english": "I can't...!",
						"japanese": "できない…！",
						"chinese": "做不到…！",
						"french": "Je ne peux pas… !",
						"spanish": "¡No puedo…!",
						"vietnamese": "Không thể…!",
						"thai": "ทำไม่ได้…!",
						"hindi": "नहीं कर सकता…!"
					},
					"type": "speech"
				}
			],
			"id": 15
		}
	]
} as const;
