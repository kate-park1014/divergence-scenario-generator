export const scenario_hell_lordfluff_15_04 = {
	"scenario_id": "hell_lordfluff_15_04",
	"order": 4,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"cinder": {
			"id": "mon_7bdc5bba-75ec-4589-827e-193b3c59b022",
			"name": {
				"korean": "신더",
				"english": "Cinder",
				"japanese": "シンダー",
				"chinese": "辛德",
				"french": "Cinder",
				"spanish": "Cinder",
				"vietnamese": "Xinder",
				"thai": "ซินเดอร์",
				"hindi": "सिंडर"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/bc21258b-93ac-4669-7330-fdf4e8a57c00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/939a1911-1849-425c-67a4-4958bbdc3300/public"
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
					"content": {
						"korean": "지옥 전체에 '심판의 날' 카운트다운이 울려 퍼졌다. 혼란은 극에 달했다.",
						"english": "The 'Doomsday' countdown echoed throughout Hell. Chaos reached its peak.",
						"japanese": "地獄全体に「審判の日」のカウントダウンが響き渡った。混乱は極に達した。",
						"chinese": "“审判日”的倒计时响彻地狱。混乱达到了顶点。",
						"french": "Le compte à rebours du 'Jour du Jugement' résonnait dans tout l'Enfer. Le chaos atteignait son paroxysme.",
						"spanish": "La cuenta atrás del 'Día del Juicio Final' resonó por todo el Infierno. El caos alcanzó su punto álgido.",
						"vietnamese": "Đếm ngược 'Ngày Phán xét' vang vọng khắp Địa ngục. Hỗn loạn lên đến đỉnh điểm.",
						"thai": "การนับถอยหลัง 'วันพิพากษา' ก้องไปทั่วขุมนรก ความโกลาหลถึงขีดสุด",
						"hindi": "पूरे नर्क में 'प्रलय के दिन' की उलटी गिनती गूँज उठी। अराजकता चरम पर पहुँच गई।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "character_any",
					"emotion": "sad",
					"content": {
						"korean": "이대로 끝나는 건가…?",
						"english": "Is this how it ends...?",
						"japanese": "このまま終わるのか…？",
						"chinese": "就这样结束了吗…？",
						"french": "Est-ce que ça se termine comme ça… ?",
						"spanish": "¿Así es como termina esto…?",
						"vietnamese": "Kết thúc như vậy sao…?",
						"thai": "นี่คือจุดจบหรือ…?",
						"hindi": "क्या यह ऐसे ही खत्म होगा…?"
					},
					"type": "speech"
				},
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "cinder"
				},
				{
					"speaker": "cinder",
					"emotion": "base",
					"content": {
						"korean": "…아니. 아직은 아니야.",
						"english": "...No. Not yet.",
						"japanese": "…いや。まだだ。",
						"chinese": "…不。还没。",
						"french": "...Non. Pas encore.",
						"spanish": "...No. Todavía no.",
						"vietnamese": "...Không. Chưa phải lúc.",
						"thai": "...ไม่ ใช่ ยังไม่ใช่",
						"hindi": "...नहीं। अभी नहीं।"
					},
					"type": "speech"
				},
				{
					"speaker": "cinder",
					"emotion": "sad",
					"content": {
						"korean": "군주의 명령은… 모두를 위한 게 아니었어.",
						"english": "The Lord's command was... not for everyone.",
						"japanese": "君主の命令は…皆のためではなかった。",
						"chinese": "领主的命令…不是为了所有人。",
						"french": "L'ordre du Seigneur n'était… pas pour tout le monde.",
						"spanish": "La orden del Señor no era… para todos.",
						"vietnamese": "Mệnh lệnh của Chúa tể… không dành cho tất cả mọi người.",
						"thai": "คำสั่งของลอร์ด… ไม่ใช่สำหรับทุกคน",
						"hindi": "प्रभु का आदेश… सबके लिए नहीं था।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "그는 탈출 계획을 세우고 있어. 우리를 버리고.",
						"english": "He's planning an escape. Abandoning us.",
						"japanese": "彼は脱出計画を立てている。私たちを見捨てて。",
						"chinese": "他正在计划逃跑。抛弃我们。",
						"french": "Il prépare un plan d'évasion. En nous abandonnant.",
						"spanish": "Él está planeando un escape. Abandonándonos.",
						"vietnamese": "Hắn ta đang lên kế hoạch trốn thoát. Bỏ rơi chúng ta.",
						"thai": "เขากำลังวางแผนหลบหนี ทิ้งเราไป",
						"hindi": "वह एक पलायन की योजना बना रहा है। हमें छोड़कर।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"content": {
						"korean": "탈출이라고? 그럼 우린…",
						"english": "An escape? Then what about us...?",
						"japanese": "脱出だと？じゃあ、私たちは…",
						"chinese": "逃跑？那我们呢…？",
						"french": "Une évasion ? Alors nous… ?",
						"spanish": "¿Un escape? ¿Y nosotros…?",
						"vietnamese": "Trốn thoát sao? Vậy còn chúng ta…?",
						"thai": "หลบหนีเหรอ? แล้วเราล่ะ…?",
						"hindi": "एक पलायन? तो हमारा क्या…?"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그래. 우리 목숨은 담보였어. 거대한 사기극에 이용당한 거지.",
						"english": "Yes. Our lives were collateral. We were used in a grand deception.",
						"japanese": "ええ。私たちの命は担保だった。巨大な詐欺劇に利用されたんだ。",
						"chinese": "是的。我们的生命是抵押品。我们被卷入了一场巨大的骗局。",
						"french": "Oui. Nos vies étaient la garantie. Nous avons été utilisés dans une gigantesque imposture.",
						"spanish": "Sí. Nuestras vidas eran la garantía. Fuimos utilizados en un gran engaño.",
						"vietnamese": "Phải. Mạng sống của chúng ta là con tin. Chúng ta đã bị lợi dụng trong một màn kịch lừa đảo khổng lồ.",
						"thai": "ใช่ ชีวิตของเราเป็นหลักประกัน เราถูกใช้ในการหลอกลวงครั้งใหญ่",
						"hindi": "हाँ। हमारी जान दांव पर थी। हमें एक बड़े धोखे में इस्तेमाल किया गया।"
					},
					"emotion": "sad",
					"speaker": "cinder"
				},
				{
					"emotion": "sad",
					"content": {
						"korean": "믿을 수 없어… 그 위대한 군주가…",
						"english": "Unbelievable... that great monarch...",
						"japanese": "信じられない…あの偉大な君主が…",
						"chinese": "难以置信……那位伟大的君主……",
						"french": "Incroyable… ce grand monarque…",
						"spanish": "No puedo creerlo… ese gran monarca…",
						"vietnamese": "Không thể tin được… vị quân chủ vĩ đại đó…",
						"thai": "ไม่อยากจะเชื่อเลย... กษัตริย์ผู้ยิ่งใหญ่องค์นั้น...",
						"hindi": "विश्वास नहीं होता… वह महान शासक…"
					},
					"type": "speech",
					"speaker": "character_1"
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "cinder",
					"type": "direction",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그의 명령은 항상 특정 집단에만 불리했어. 의도적으로 정보를 왜곡한 거야.",
						"english": "His orders always disadvantaged specific groups. He deliberately distorted information.",
						"japanese": "彼の命令はいつも特定の集団にだけ不利だった。意図的に情報を歪曲したんだ。",
						"chinese": "他的命令总是对特定群体不利。他故意歪曲了信息。",
						"french": "Ses ordres désavantagent toujours certains groupes. Il a délibérément déformé l'information.",
						"spanish": "Sus órdenes siempre perjudicaban a grupos específicos. Distorsionó la información intencionalmente.",
						"vietnamese": "Lệnh của hắn luôn bất lợi cho các nhóm cụ thể. Hắn đã cố tình bóp méo thông tin.",
						"thai": "คำสั่งของเขาทำให้กลุ่มคนบางกลุ่มเสียเปรียบเสมอ เขาบิดเบือนข้อมูลโดยเจตนา",
						"hindi": "उसके आदेश हमेशा कुछ खास समूहों के लिए प्रतिकूल रहे। उसने जानबूझकर जानकारी को तोड़-मरोड़ कर पेश किया।"
					},
					"type": "speech",
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "그럼 우리 마을도… 다 계획이었단 말이야?",
						"english": "So our village too... it was all part of the plan?",
						"japanese": "じゃあ、私たちの村も…全部計画だったってこと？",
						"chinese": "那么我们的村庄也……这一切都是计划好的吗？",
						"french": "Alors notre village aussi… tout était planifié ?",
						"spanish": "¿Así que nuestra aldea también… todo era parte del plan?",
						"vietnamese": "Vậy cả làng chúng ta cũng… tất cả đều nằm trong kế hoạch sao?",
						"thai": "งั้นหมู่บ้านของเราก็... เป็นส่วนหนึ่งของแผนการทั้งหมดเหรอ?",
						"hindi": "तो हमारा गाँव भी… क्या यह सब योजना का हिस्सा था?"
					}
				},
				{
					"content": {
						"korean": "…진실을 밝히지 않으면 모두 위험해져. 너마저도.",
						"english": "...If the truth isn't revealed, everyone will be in danger. Even you.",
						"japanese": "…真実を明かさなければ、みんな危険になる。お前までも。",
						"chinese": "……如果真相不被揭露，所有人都会有危险。连你也不例外。",
						"french": "…Si la vérité n'est pas révélée, tout le monde sera en danger. Toi aussi.",
						"spanish": "…Si no se revela la verdad, todos estarán en peligro. Incluso tú.",
						"vietnamese": "…Nếu không tiết lộ sự thật, tất cả sẽ gặp nguy hiểm. Ngay cả ngươi.",
						"thai": "...ถ้าไม่เปิดเผยความจริง ทุกคนจะตกอยู่ในอันตราย แม้แต่เจ้าเอง",
						"hindi": "…अगर सच्चाई सामने नहीं आई, तो सभी खतरे में पड़ जाएंगे। तुम भी।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "지옥의 심장부로 향하는 길. 파멸의 그림자가 짙어졌다.",
						"english": "The path to the heart of hell. The shadow of ruin deepened.",
						"japanese": "地獄の心臓部へ向かう道。破滅の影が濃くなった。",
						"chinese": "通往地狱深处的道路。毁灭的阴影愈发浓重。",
						"french": "Le chemin vers le cœur de l'enfer. L'ombre de la ruine s'épaississait.",
						"spanish": "El camino al corazón del infierno. La sombra de la ruina se hizo más profunda.",
						"vietnamese": "Con đường đến trung tâm địa ngục. Bóng tối hủy diệt đã bao trùm.",
						"thai": "เส้นทางสู่ใจกลางนรก เงาแห่งความพินาศทวีความรุนแรงขึ้น",
						"hindi": "नरक के हृदय की ओर जाने वाला मार्ग। विनाश की छाया और गहरी हो गई।"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "cinder",
					"type": "direction"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이제 돌이킬 수 없어. 선택해야 해.",
						"english": "There's no turning back now. You must choose.",
						"japanese": "もう後戻りできない。選択しなければならない。",
						"chinese": "现在已无法回头。你必须做出选择。",
						"french": "Il n'y a plus de retour en arrière. Tu dois choisir.",
						"spanish": "Ya no hay vuelta atrás. Debes elegir.",
						"vietnamese": "Giờ không thể quay đầu được nữa. Ngươi phải lựa chọn.",
						"thai": "กลับไม่ได้แล้ว ต้องเลือก",
						"hindi": "अब पीछे नहीं हट सकते। तुम्हें चुनना होगा।"
					},
					"speaker": "cinder"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "…젠장. 진짜 악마는 누구인 거지.",
						"english": "...Damn it. Who's the real devil?",
						"japanese": "…くそっ。本当の悪魔は誰なんだ。",
						"chinese": "……该死。真正的恶魔到底是谁？",
						"french": "…Merde. Qui est le vrai diable ?",
						"spanish": "…Maldita sea. ¿Quién es el verdadero demonio?",
						"vietnamese": "…Chết tiệt. Kẻ phản diện thật sự là ai?",
						"thai": "...ให้ตายสิ ใครคือปีศาจที่แท้จริงกันแน่",
						"hindi": "…धिक्कार है। असली शैतान कौन है?"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "불필요한 혼란이다. 명령에 복종하고, 기다려라.",
						"english": "This is unnecessary confusion. Obey orders and wait.",
						"japanese": "不必要な混乱だ。命令に従い、待機しろ。",
						"chinese": "这是不必要的混乱。服从命令，等待。",
						"french": "C'est une confusion inutile. Obéis aux ordres et attends.",
						"spanish": "Esto es una confusión innecesaria. Obedece las órdenes y espera.",
						"vietnamese": "Đây là sự hỗn loạn không cần thiết. Tuân lệnh và chờ đợi.",
						"thai": "นี่คือความสับสนที่ไม่จำเป็น จงเชื่อฟังคำสั่งและรอ",
						"hindi": "यह अनावश्यक भ्रम है। आदेशों का पालन करो और प्रतीक्षा करो।"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "어둠이 모든 것을 삼켰다. 절망이 다시 찾아왔다.",
						"english": "Darkness has swallowed everything. Despair has returned.",
						"japanese": "闇が全てを飲み込んだ。絶望が再び訪れた。",
						"chinese": "黑暗吞噬了一切。绝望再次降临。",
						"french": "Les ténèbres ont tout englouti. Le désespoir est revenu.",
						"spanish": "La oscuridad lo ha tragado todo. La desesperación ha regresado.",
						"vietnamese": "Bóng tối đã nuốt chửng mọi thứ. Tuyệt vọng lại ập đến.",
						"thai": "ความมืดกลืนกินทุกสิ่งสิ้น หายนะกลับมาอีกครั้ง",
						"hindi": "अंधेरे ने सब कुछ निगल लिया। निराशा फिर लौट आई।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"content": {
						"korean": "하찮은 것들. 감히 군주의 대의를 방해하려 하다니. 무릎 꿇어라.",
						"english": "Insignificant fools. How dare you obstruct the Lord's great cause. Kneel.",
						"japanese": "下らぬ者ども。よくも主の大義を邪魔しようとしたな。跪け。",
						"chinese": "卑微之物。竟敢阻挠君主的大业。跪下吧。",
						"french": "Imbéciles insignifiants. Comment osez-vous entraver la grande cause du Seigneur. Agenouillez-vous.",
						"spanish": "Insignificantes necios. Cómo osáis obstaculizar la gran causa del Señor. Arrodillaos.",
						"vietnamese": "Lũ tầm thường. Dám cả gan cản trở đại nghiệp của Quân chủ. Quỳ xuống đi.",
						"thai": "พวกไร้ค่า กล้าดียังไงถึงขัดขวางอุดมการณ์อันยิ่งใหญ่ของท่านลอร์ด คุกเข่าลงซะ",
						"hindi": "तुच्छ प्राणी। तुम्हारी हिम्मत कैसे हुई स्वामी के महान उद्देश्य में बाधा डालने की। घुटने टेको।"
					},
					"emotion": "angry",
					"speaker": "random_boss"
				},
				{
					"speaker": "character_any",
					"emotion": "angry",
					"content": {
						"korean": "아직… 끝나지 않았어!",
						"english": "It's not over yet!",
						"japanese": "まだ… 終わってない！",
						"chinese": "还没… 结束！",
						"french": "Ce n'est pas encore fini !",
						"spanish": "¡Todavía no ha terminado!",
						"vietnamese": "Chưa kết thúc đâu!",
						"thai": "ยัง… ไม่จบ!",
						"hindi": "अभी… खत्म नहीं हुआ है!"
					},
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"emotion": "base",
					"content": {
						"korean": "마침내, 거대한 그림자가 앞을 가로막았다. 혼돈의 심장이 고동쳤다.",
						"english": "Finally, a colossal shadow blocked the way. The heart of chaos pulsed.",
						"japanese": "ついに、巨大な影が道を阻んだ。混沌の心臓が鼓動した。",
						"chinese": "最终，巨大的阴影挡住了去路。混沌之心跳动着。",
						"french": "Finalement, une ombre colossale barra le chemin. Le cœur du chaos battait.",
						"spanish": "Finalmente, una sombra colosal bloqueó el camino. El corazón del caos latía.",
						"vietnamese": "Cuối cùng, một bóng đen khổng lồ đã chắn lối. Trái tim hỗn loạn đang đập.",
						"thai": "ในที่สุด เงาขนาดมหึมาก็ขวางทาง หัวใจแห่งความโกลาหลเต้นรัว",
						"hindi": "अंततः, एक विशाल छाया ने रास्ता रोक लिया। अराजकता का हृदय धड़क उठा।"
					},
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "감히 여기까지 오다니. 어리석은 미물들.",
						"english": "How dare you come this far. Foolish creatures.",
						"japanese": "よくもここまで来たな。愚かな小物どもが。",
						"chinese": "竟敢来到这里。愚蠢的蝼蚁。",
						"french": "Comment osez-vous venir jusqu'ici. Stupides créatures.",
						"spanish": "Cómo osáis llegar tan lejos. Estúpidas criaturas.",
						"vietnamese": "Dám đến tận đây. Những sinh vật ngu xuẩn.",
						"thai": "กล้าดียังไงถึงมาถึงนี่ได้ พวกสิ่งมีชีวิตโง่เขลา",
						"hindi": "यहां तक आने की हिम्मत कैसे हुई तुम्हारी। मूर्ख प्राणी।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "당신의 계획을 알고 있어. 우리를 버리고 도망치려는 것을.",
						"english": "We know your plan. You intend to abandon us and flee.",
						"japanese": "お前の計画は知っている。我々を見捨てて逃げようとしているな。",
						"chinese": "我们知道你的计划。你打算抛弃我们逃跑。",
						"french": "Nous connaissons votre plan. Vous comptez nous abandonner et fuir.",
						"spanish": "Conocemos tu plan. Pretendes abandonarnos y huir.",
						"vietnamese": "Chúng ta biết kế hoạch của ngươi. Ngươi định bỏ rơi chúng ta mà chạy trốn.",
						"thai": "เรารู้แผนของเจ้า เจ้าตั้งใจจะทิ้งเราแล้วหนีไป",
						"hindi": "हम तुम्हारी योजना जानते हैं। तुम हमें छोड़कर भागने का इरादा रखते हो।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "계획? 너희 같은 미물이 알 수 있는 것이 아니다. 사라져라.",
						"english": "Plan? It's not something insignificant beings like you can comprehend. Vanish.",
						"japanese": "計画だと？貴様らのような小物に理解できることではない。消え失せろ。",
						"chinese": "计划？这可不是你们这些卑微之物能知道的。消失吧。",
						"french": "Un plan ? Ce n'est pas quelque chose que des êtres insignifiants comme vous peuvent comprendre. Disparaissez.",
						"spanish": "¿Plan? No es algo que seres insignificantes como vosotros podáis entender. Desapareced.",
						"vietnamese": "Kế hoạch? Đó không phải là thứ mà những sinh vật tầm thường như các ngươi có thể biết. Biến đi.",
						"thai": "แผนรึ? ไม่ใช่สิ่งที่สิ่งมีชีวิตไร้ค่าอย่างพวกเจ้าจะเข้าใจได้ หายไปซะ",
						"hindi": "योजना? यह तुम जैसे तुच्छ प्राणियों के समझने की बात नहीं। गायब हो जाओ।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"type": "direction",
					"speaker": "cinder",
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "그들을… 막아줘! 진실을 밝혀야 해!",
						"english": "Stop them…! The truth must be revealed!",
						"japanese": "彼らを… 止めろ！真実を明らかにしなければ！",
						"chinese": "阻止他们……！真相必须被揭露！",
						"french": "Arrêtez-les… ! La vérité doit être révélée !",
						"spanish": "¡Detenedlos…! ¡La verdad debe ser revelada!",
						"vietnamese": "Ngăn chặn họ…! Sự thật phải được phơi bày!",
						"thai": "หยุดพวกเขา…! ความจริงต้องถูกเปิดเผย!",
						"hindi": "उन्हें रोको…! सच सामने आना ही चाहिए!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "cinder"
				}
			],
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"emotion": "sad",
					"content": {
						"korean": "크윽… 겨우… 이 정도… (사라진다)",
						"english": "Ugh… only… this much… (vanishes)",
						"japanese": "くっ…たかが…この程度… (消滅する)",
						"chinese": "呃…就…这点程度… (消失)",
						"french": "Ugh… juste… ça… (disparaît)",
						"spanish": "Ugh… solo… esto… (desaparece)",
						"vietnamese": "Khụ… chỉ… đến thế này thôi sao… (biến mất)",
						"thai": "อึก… แค่… แค่นี้เอง… (หายไป)",
						"hindi": "उफ़… बस… इतना ही… (गायब हो जाता है)"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝났어… 이젠 정말.",
						"english": "It's over… truly, now.",
						"japanese": "終わった…もう本当に。",
						"chinese": "结束了…这次是真的。",
						"french": "C'est fini… vraiment, maintenant.",
						"spanish": "Se acabó… de verdad, ahora.",
						"vietnamese": "Kết thúc rồi… giờ thì thật sự.",
						"thai": "จบแล้ว… คราวนี้จริงๆ",
						"hindi": "खत्म हो गया… अब वाकई।"
					},
					"emotion": "happy",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 그림자는 스러졌다. 하지만 혼란은 끝나지 않았다. 진실은 더 깊은 곳에 있었다.",
						"english": "The massive shadow has fallen. But the chaos hasn't ended. The truth lay deeper still.",
						"japanese": "巨大な影は消え去った。しかし混乱は終わらない。真実はさらに深い場所に。",
						"chinese": "巨大的阴影消散了。但混乱并未结束。真相隐藏在更深之处。",
						"french": "L'ombre colossale est tombée. Mais le chaos n'est pas terminé. La vérité se trouvait encore plus profondément.",
						"spanish": "La enorme sombra ha caído. Pero el caos no ha terminado. La verdad yacía aún más profunda.",
						"vietnamese": "Bóng tối khổng lồ đã sụp đổ. Nhưng sự hỗn loạn vẫn chưa kết thúc. Sự thật nằm sâu hơn nữa.",
						"thai": "เงามืดมหึมาได้พังทลายลงแล้ว แต่ความวุ่นวายยังไม่จบสิ้น ความจริงซ่อนอยู่ในที่ลึกกว่านั้น",
						"hindi": "विशाल छाया गिर गई है। लेकिन अराजकता खत्म नहीं हुई है। सच्चाई और भी गहरी थी।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "…진정한 악마 군주는 아직 모습을 드러내지 않은 건가.",
						"english": "…Has the true Demon Lord not yet revealed themselves?",
						"japanese": "…真の魔王はまだ姿を現していないのか。",
						"chinese": "……真正的魔君还没有现身吗？",
						"french": "…Le véritable Seigneur Démon ne s'est pas encore montré ?",
						"spanish": "¿El verdadero Señor Demonio aún no se ha revelado?",
						"vietnamese": "…Chúa quỷ thật sự vẫn chưa lộ diện sao?",
						"thai": "…จอมมารที่แท้จริงยังไม่ปรากฏตัวหรือนี่",
						"hindi": "…क्या असली दानव स्वामी अभी तक प्रकट नहीं हुआ है?"
					},
					"speaker": "character_any"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"카운트다운은 멈추지 않았다.",
			"지옥은 혼란에 빠졌다. 모두가 악마 군주를 숭배했다.",
			"하지만 한때 그의 추종자였던 자가 속삭였다.",
			"군주의 명령은 사기극이며, 모두가 위험하다고."
		],
		"english": [
			"The countdown did not stop.",
			"Hell was in chaos. Everyone worshipped the Demon Lord.",
			"But one who was once his follower whispered.",
			"The Lord's command was a hoax, and everyone was in danger."
		],
		"japanese": [
			"カウントダウンは止まらなかった。",
			"地獄は混乱に陥った。誰もが悪魔の君主を崇拝した。",
			"しかし、かつて彼の信奉者だった者が囁いた。",
			"君主の命令は詐欺であり、皆が危険だと。"
		],
		"chinese": [
			"倒计时没有停止。",
			"地狱陷入混乱。所有人都崇拜恶魔领主。",
			"然而，他曾经的追随者低声说道。",
			"领主的命令是个骗局，所有人都有危险。"
		],
		"french": [
			"Le compte à rebours n'a pas cessé.",
			"L'Enfer était en plein chaos. Tous adoraient le Seigneur Démon.",
			"Mais l'un de ses anciens adeptes murmura.",
			"L'ordre du Seigneur était une imposture, et tout le monde était en danger."
		],
		"spanish": [
			"La cuenta atrás no se detuvo.",
			"El Infierno estaba en caos. Todos adoraban al Señor Demonio.",
			"Pero uno que una vez fue su seguidor susurró.",
			"La orden del Señor era un engaño, y todos estaban en peligro."
		],
		"vietnamese": [
			"Đếm ngược không dừng lại.",
			"Địa ngục chìm trong hỗn loạn. Mọi người đều tôn thờ Chúa Quỷ.",
			"Nhưng một người từng là tín đồ của hắn đã thì thầm.",
			"Mệnh lệnh của Chúa tể là một trò lừa bịp, và mọi người đều gặp nguy hiểm."
		],
		"thai": [
			"การนับถอยหลังไม่หยุด",
			"นรกตกอยู่ในความโกลาหล ทุกคนบูชาจอมมาร",
			"แต่ผู้ที่เคยเป็นผู้ติดตามของเขากระซิบ",
			"คำสั่งของลอร์ดเป็นการหลอกลวง และทุกคนกำลังตกอยู่ในอันตราย"
		],
		"hindi": [
			"उलटी गिनती नहीं रुकी।",
			"नर्क में अराजकता थी। सभी दानव प्रभु की पूजा करते थे।",
			"परन्तु उसके एक अनुयायी ने फुसफुसाया।",
			"प्रभु का आदेश एक धोखा था, और सभी खतरे में थे।"
		]
	}
} as const;
