export const scenario_snowy_skaalbane_95_05 = {
	"scenario_id": "snowy_skaalbane_95_05",
	"order": 5,
	"act": "climax_finale",
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
		"pool_id": "pool_EchoHarvester_Skaalbane_V1"
	},
	"rooms": [
		{
			"dialogue": [
				{
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 탑의 핵. 푸른빛 섬광이 희미하게 깜빡인다.",
						"english": "The core of the Ice Tower. A faint blue flash flickers.",
						"japanese": "氷の塔の核。青い閃光がかすかにまたたく。",
						"chinese": "冰塔之核。一道微弱的蓝光闪烁着。",
						"french": "Le cœur de la Tour de Glace. Un faible éclair bleu clignote.",
						"spanish": "El núcleo de la Torre de Hielo. Un débil destello azul parpadea.",
						"vietnamese": "Lõi của Tháp Băng. Một tia sáng xanh mờ nhấp nháy.",
						"thai": "แกนกลางของหอคอยน้ำแข็ง แสงสีฟ้าจางๆ กะพริบ",
						"hindi": "बर्फ के टॉवर का केंद्र। एक हल्की नीली चमक टिमटिमाती है।"
					}
				},
				{
					"content": {
						"korean": "여기가… 그 심장이라는 곳인가?",
						"english": "Is this... the heart they spoke of?",
						"japanese": "ここが…その心臓という場所なのか？",
						"chinese": "这里就是…那个所谓的心脏吗？",
						"french": "Est-ce ici... ce que l'on appelle le cœur ?",
						"spanish": "¿Es este... el corazón del que hablaban?",
						"vietnamese": "Đây có phải là... trái tim mà họ nói đến?",
						"thai": "ที่นี่...คือหัวใจที่ว่านั้นหรือ?",
						"hindi": "क्या यह... वही दिल है जिसके बारे में वे बात कर रहे थे?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"action": "enter",
					"spot": [
						4,
						2
					]
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…아니야, 이건.",
						"english": "...No, this isn't right.",
						"japanese": "...いや、これは違う。",
						"chinese": "...不，这不是真的。",
						"french": "...Non, ce n'est pas ça.",
						"spanish": "...No, esto no es.",
						"vietnamese": "...Không, đây không phải.",
						"thai": "...ไม่ใช่ นี่มันไม่ใช่",
						"hindi": "...नहीं, यह नहीं है।"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…환영이 아니었어. 모든 환청이… 여기서 시작된 거야.",
						"english": "...It wasn't a hallucination. All the phantom sounds... they started here.",
						"japanese": "...幻覚じゃなかった。全ての幻聴は…ここで始まったんだ。",
						"chinese": "...这不是幻觉。所有的幻听...都是从这里开始的。",
						"french": "...Ce n'était pas une hallucination. Toutes les voix... ont commencé ici.",
						"spanish": "...No fue una alucinación. Todas las voces fantasma... empezaron aquí.",
						"vietnamese": "...Không phải ảo giác. Mọi âm thanh ma quái... đều bắt đầu từ đây.",
						"thai": "...มันไม่ใช่ภาพหลอน เสียงลวงทุกอย่าง...เริ่มขึ้นที่นี่",
						"hindi": "...यह भ्रम नहीं था। सभी प्रेतवाधित ध्वनियाँ... यहीं से शुरू हुईं।"
					},
					"speaker": "eira"
				}
			],
			"id": 1
		},
		{
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "핵으로 향하는 통로. 얼어붙은 얼굴 형상들이 벽을 뒤덮고 있었다.",
						"english": "A passage to the core. Frozen faces covered the walls.",
						"japanese": "核へと続く通路。凍りついた顔の像が壁を覆っていた。",
						"chinese": "通往核心的通道。冰冻的面孔覆盖了墙壁。",
						"french": "Un passage vers le cœur. Des visages gelés couvraient les murs.",
						"spanish": "Un pasaje al núcleo. Rostros congelados cubrían las paredes.",
						"vietnamese": "Lối đi tới lõi. Những khuôn mặt đóng băng phủ kín các bức tường.",
						"thai": "ทางเดินสู่แก่นกลาง ใบหน้าแข็งจับตัวปกคลุมผนัง",
						"hindi": "केंद्र की ओर एक मार्ग। जमी हुई आकृतियाँ दीवारों को ढक रही थीं।"
					},
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "이 얼굴들은… 바이킹인가?",
						"english": "These faces... are they Vikings?",
						"japanese": "この顔は…ヴァイキングなのか？",
						"chinese": "这些面孔...是维京人吗？",
						"french": "Ces visages... sont-ils des Vikings ?",
						"spanish": "¿Estas caras... son vikingos?",
						"vietnamese": "Những khuôn mặt này... là người Viking sao?",
						"thai": "ใบหน้าเหล่านี้... เป็นไวกิ้งรึเปล่า?",
						"hindi": "ये चेहरे... क्या ये वाइकिंग हैं?"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"action": "enter",
					"spot": [
						3,
						2
					]
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이 룬 문자들… 탐사일지에서 봤던 “이 얼음은 생명을 먹는다”는 구절이….",
						"english": "...These runes... The phrase 'This ice devours life' from the expedition log...",
						"japanese": "...このルーン文字…探査日誌で見た「この氷は生命を喰らう」という一節が…。",
						"chinese": "...这些符文... 探险日志里提到的“这冰吞噬生命”的句子...",
						"french": "...Ces runes... La phrase ",
						"spanish": "...Estas runas... La frase 'Este hielo devora la vida' del diario de expedición...",
						"vietnamese": "...Những chữ rune này... Câu 'Băng này nuốt chửng sự sống' từ nhật ký thám hiểm...",
						"thai": "...อักษรรูนเหล่านี้... วลี 'น้ำแข็งนี้กลืนกินชีวิต' จากบันทึกการสำรวจ...",
						"hindi": "...ये रूण अक्षर... अभियान लॉग में देखा गया वाक्यांश 'यह बर्फ जीवन को निगल जाती है'..."
					}
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이 모든 게… 여기서 시작된 거야. 이 얼음이… 온기를 갈망해….",
						"english": "All of this... it started here. This ice... it yearns for warmth...",
						"japanese": "これら全てが…ここで始まったんだ。この氷が…温もりを渇望している…。",
						"chinese": "这一切...都是从这里开始的。这冰...它渴望温暖...",
						"french": "Tout cela... a commencé ici. Cette glace... elle aspire à la chaleur...",
						"spanish": "Todo esto... empezó aquí. Este hielo... anhela el calor...",
						"vietnamese": "Tất cả những điều này... đều bắt đầu từ đây. Băng này... nó khao khát hơi ấm...",
						"thai": "ทั้งหมดนี่... เริ่มต้นที่นี่ น้ำแข็งนี้... มันโหยหาความอบอุ่น...",
						"hindi": "यह सब... यहीं से शुरू हुआ। यह बर्फ... यह गर्मी की लालसा रखती है..."
					}
				}
			],
			"id": 3
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 공기 속에 수천 개의 절규가 맴도는 듯했다.",
						"english": "Thousands of screams seemed to linger in the cold air.",
						"japanese": "冷たい空気の中に、何千もの絶叫が漂っているようだった。",
						"chinese": "数千声尖叫似乎在冰冷的空气中回荡。",
						"french": "Des milliers de hurlements semblaient planer dans l'air froid.",
						"spanish": "Miles de gritos parecían flotar en el aire frío.",
						"vietnamese": "Hàng ngàn tiếng la hét dường như lởn vởn trong không khí lạnh.",
						"thai": "ดูเหมือนว่ามีเสียงกรีดร้องนับพันลอยอยู่ในอากาศที่หนาวเหน็บ",
						"hindi": "ठंडी हवा में हजारों चीखें गूँजती हुई लग रही थीं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "direction",
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "내게 들렸던 속삭임들… 얼어붙은 영혼들의 비명이었어.",
						"english": "The whispers I heard... they were the screams of frozen souls.",
						"japanese": "私が聞いた囁きは…凍てついた魂たちの悲鳴だったんだ。",
						"chinese": "我听到的低语...是冰冻灵魂的尖叫声。",
						"french": "Les murmures que j'ai entendus... c'étaient les cris d'âmes gelées.",
						"spanish": "Los susurros que oí... eran los gritos de almas congeladas.",
						"vietnamese": "Những lời thì thầm tôi nghe thấy... là tiếng thét của những linh hồn đóng băng.",
						"thai": "เสียงกระซิบที่ฉันได้ยิน... คือเสียงกรีดร้องของวิญญาณที่ถูกแช่แข็ง",
						"hindi": "जो फुसफुसाहटें मैंने सुनीं... वे जमी हुई आत्माओं की चीखें थीं।"
					},
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "그럼 이 탑이…?",
						"english": "Then this tower...?",
						"japanese": "じゃあ、この塔は…？",
						"chinese": "那这座塔是...？",
						"french": "Alors cette tour... ?",
						"spanish": "¿Entonces esta torre...?",
						"vietnamese": "Vậy thì tòa tháp này...?",
						"thai": "แล้วหอคอยนี้...?",
						"hindi": "तो यह मीनार...?"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"content": {
						"korean": "…영혼들의 무덤이자… 그 고통이 만들어낸 심장….",
						"english": "...A tomb for souls... and the heart forged from their suffering.",
						"japanese": "...魂たちの墓であり…その苦痛が生み出した心臓…。",
						"chinese": "...是灵魂的坟墓...也是由痛苦铸就的心脏...",
						"french": "...Une tombe pour les âmes... et le cœur forgé par leur souffrance.",
						"spanish": "...Una tumba para las almas... y el corazón forjado por su sufrimiento.",
						"vietnamese": "...Một ngôi mộ cho các linh hồn... và trái tim được tạo ra từ nỗi đau của chúng...",
						"thai": "...สุสานสำหรับวิญญาณ... และหัวใจที่หลอมรวมจากความทุกข์ทรมานของพวกมัน",
						"hindi": "...आत्माओं का मकबरा... और उनके कष्टों से बना हृदय।"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "character_1",
					"emotion": "angry",
					"type": "speech",
					"content": {
						"korean": "저들이… 살아있는 자들의 온기를 갈구한다고?",
						"english": "They… crave the warmth of the living?",
						"japanese": "「奴らが…生きる者の温もりを求めるだと？」",
						"chinese": "“他们…渴望活人的温暖？”",
						"french": "« Ils… désirent la chaleur des vivants ? »",
						"spanish": "¿Ellos… anhelan el calor de los vivos?",
						"vietnamese": "Họ… khao khát hơi ấm của người sống sao?",
						"thai": "พวกมัน… โหยหาความอบอุ่นของผู้มีชีวิตอย่างนั้นหรือ?",
						"hindi": "वे… जीवितों की गर्माहट चाहते हैं?"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"content": {
						"korean": "얼음 심장의 고동이 온몸을 울렸다. 이제 돌아갈 수 없었다.",
						"english": "The ice heart's pulse echoed through my body. There was no turning back.",
						"japanese": "「氷の心臓の鼓動が全身に響き渡った。もう戻ることはできなかった。」",
						"chinese": "“冰冷心脏的搏动响彻全身。已无法回头。”",
						"french": "« Le battement du cœur de glace résonnait dans tout mon corps. Il n'y avait plus de retour possible. »",
						"spanish": "El latido del corazón de hielo resonó por todo mi cuerpo. Ya no había vuelta atrás.",
						"vietnamese": "Nhịp đập của trái tim băng vang vọng khắp cơ thể. Không thể quay đầu lại được nữa.",
						"thai": "เสียงเต้นของหัวใจน้ำแข็งก้องไปทั่วร่าง ไม่อาจหวนกลับได้แล้ว",
						"hindi": "बर्फीले दिल की धड़कन पूरे शरीर में गूँज उठी। अब वापस मुड़ना असंभव था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"speaker": "eira",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction"
				},
				{
					"content": {
						"korean": "너무 늦었어… 이미… 희생자들이… 가해자가 되었어…!",
						"english": "It's too late… The victims… have already become the aggressors…!",
						"japanese": "「手遅れだ…もう…犠牲者たちが…加害者になってしまった…！」",
						"chinese": "“太迟了…受害者…已沦为加害者…！”",
						"french": "« C'est trop tard… Les victimes… sont déjà devenues les agresseurs… ! »",
						"spanish": "¡Es demasiado tarde… Las víctimas… ya se han convertido en los agresores…!",
						"vietnamese": "Quá muộn rồi… Những nạn nhân… đã trở thành kẻ gây hấn…!",
						"thai": "สายเกินไปแล้ว… เหล่าเหยื่อ… ได้กลายเป็นผู้กระทำไปแล้ว…!",
						"hindi": "बहुत देर हो चुकी है… पीड़ित… पहले ही हमलावर बन चुके हैं…!"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"content": {
						"korean": "우리가… 이들을 구원할 수 있을까?",
						"english": "Can we… save them?",
						"japanese": "「我々が…彼らを救えるのだろうか？」",
						"chinese": "“我们…能拯救他们吗？”",
						"french": "« Pouvons-nous… les sauver ? »",
						"spanish": "¿Podemos… salvarlos?",
						"vietnamese": "Liệu chúng ta… có thể cứu chuộc họ không?",
						"thai": "พวกเรา… จะช่วยพวกเขาได้ไหม?",
						"hindi": "क्या हम… इन्हें बचा सकते हैं?"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"speaker": "eira",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "아니… 우리가 멈춰야 해. 이 잔혹한 순환을.",
						"english": "No… We must stop it. This cruel cycle.",
						"japanese": "「いや…我々が止めなければならない。この残酷な循環を。」",
						"chinese": "“不…我们必须阻止。这个残酷的循环。”",
						"french": "« Non… Nous devons l'arrêter. Ce cycle cruel. »",
						"spanish": "No… Debemos detenerlo. Este ciclo cruel.",
						"vietnamese": "Không… Chúng ta phải ngăn chặn nó. Vòng tuần hoàn tàn khốc này.",
						"thai": "ไม่… พวกเราต้องหยุดมัน วงจรที่โหดร้ายนี้",
						"hindi": "नहीं… हमें इसे रोकना होगा। इस क्रूर चक्र को।"
					}
				},
				{
					"content": {
						"korean": "…그렇다면… 우리는 가해자가 되어서는 안 돼.",
						"english": "…Then… we must not become the aggressors.",
						"japanese": "「…ならば…我々が加害者になってはならない。」",
						"chinese": "“…既然如此…我们绝不能成为加害者。”",
						"french": "« …Alors… nous ne devons pas devenir les agresseurs. »",
						"spanish": "…Entonces… no debemos convertirnos en los agresores.",
						"vietnamese": "…Nếu vậy… chúng ta không được trở thành kẻ gây hấn.",
						"thai": "…ถ้าอย่างนั้น… เราก็ไม่ควรเป็นผู้กระทำ",
						"hindi": "…तो फिर… हमें हमलावर नहीं बनना चाहिए।"
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "character_2"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 심장이 다시 격렬하게 고동쳤다.",
						"english": "The ice heart pulsed violently once more.",
						"japanese": "氷の心臓が再び激しく鼓動した。",
						"chinese": "冰冷的心脏再次剧烈跳动。",
						"french": "Le cœur de glace battit à nouveau violemment.",
						"spanish": "El corazón de hielo volvió a latir violentamente.",
						"vietnamese": "Trái tim băng giá lại đập dữ dội một lần nữa.",
						"thai": "หัวใจน้ำแข็งเต้นระรัวอีกครั้ง",
						"hindi": "बर्फीला दिल फिर से तेज़ी से धड़का।"
					},
					"speaker": "narrator"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "…너희의 온기는… 우리에게…!",
						"english": "...Your warmth... to us...!",
						"japanese": "…お前たちの温もりは…我々に…！",
						"chinese": "…你们的温暖…给我们…！",
						"french": "...Votre chaleur... à nous...!",
						"spanish": "...Vuestro calor... a nosotros...!",
						"vietnamese": "...Hơi ấm của các ngươi... cho chúng ta...!",
						"thai": "...ความอบอุ่นของพวกเจ้า... ให้แก่เรา...!",
						"hindi": "...तुम्हारी गर्माहट... हमें...!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"content": {
						"korean": "새로운 희생자가… 새로운 심장이… 될 것이다…!",
						"english": "A new victim... will become a new heart...!",
						"japanese": "新たな犠牲者が…新たな心臓と…なるだろう…！",
						"chinese": "新的牺牲者…将成为新的心脏…！",
						"french": "Une nouvelle victime... deviendra un nouveau cœur...!",
						"spanish": "¡Una nueva víctima... se convertirá en un nuevo corazón...!",
						"vietnamese": "Một nạn nhân mới... sẽ trở thành một trái tim mới...!",
						"thai": "เหยื่อรายใหม่... จะกลายเป็นหัวใจดวงใหม่...!",
						"hindi": "एक नया शिकार... एक नया दिल... बन जाएगा...!"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "…아직… 끝나지 않았어…!",
						"english": "...It's not over... yet...!",
						"japanese": "…まだ…終わってない…！",
						"chinese": "…还没…结束…！",
						"french": "...Ce n'est pas encore... fini...!",
						"spanish": "...Aún no... ha terminado...!",
						"vietnamese": "...Vẫn chưa... kết thúc...!",
						"thai": "...ยังไม่...จบ...!",
						"hindi": "...अभी... खत्म नहीं हुआ है...!"
					}
				},
				{
					"type": "direction",
					"spot": [
						3,
						2
					],
					"action": "enter",
					"speaker": "eira",
					"duration_ms": 500
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "…다시 일어서야 해… 이 잔혹한 운명에서 벗어나야만 해…!",
						"english": "...We must rise again... We must break free from this cruel fate...!",
						"japanese": "…再び立ち上がらねば…この残酷な運命から逃れなければ…！",
						"chinese": "…必须再次站起来…必须摆脱这残酷的命运…！",
						"french": "…Il faut se relever… Il faut échapper à ce destin cruel…!",
						"spanish": "…Debemos levantarnos de nuevo… Debemos escapar de este cruel destino…!",
						"vietnamese": "…Phải đứng dậy một lần nữa… Phải thoát khỏi số phận tàn khốc này…!",
						"thai": "…ต้องลุกขึ้นยืนอีกครั้ง… ต้องหลุดพ้นจากชะตากรรมอันโหดร้ายนี้…!",
						"hindi": "...हमें फिर से उठना होगा... इस क्रूर भाग्य से बाहर निकलना ही होगा...!"
					},
					"type": "speech",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "얼음 심장의 고동이 멈췄다. 수많은 얼굴들이 침묵했다.",
						"english": "The ice heart's pulse stopped. Countless faces fell silent.",
						"japanese": "「氷の心臓の鼓動が止まった。無数の顔が沈黙した。」",
						"chinese": "“冰之心停止了跳动。无数面孔归于沉寂。”",
						"french": "« Le battement du cœur de glace s'arrêta. D'innombrables visages se turent. »",
						"spanish": "« El latido del corazón de hielo se detuvo. Innumerables rostros callaron. »",
						"vietnamese": "“Nhịp đập của trái tim băng giá ngừng lại. Vô số khuôn mặt chìm vào im lặng.”",
						"thai": "“ชีพจรของหัวใจน้ำแข็งหยุดลง ใบหน้ามากมายเงียบงัน”",
						"hindi": "“बर्फ़ के दिल की धड़कन रुक गई। अनगिनत चेहरे खामोश हो गए।”"
					},
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "…결국… 너희도… 고통을… 알게 될 것이다….",
						"english": "...Eventually... you too... will know... pain...",
						"japanese": "「…結局…お前たちも…苦痛を…知ることになるだろう…。」",
						"chinese": "“…最终…你们也…会知道…痛苦…”",
						"french": "« ...Finalement... vous aussi... connaîtrez... la douleur... »",
						"spanish": "« ...Finalmente... vosotros también... conoceréis... el dolor... »",
						"vietnamese": "“...Cuối cùng... các ngươi cũng... sẽ biết... nỗi đau...”",
						"thai": "“...ในที่สุด...พวกเจ้าเองก็...จะได้รู้จัก...ความเจ็บปวด...”",
						"hindi": "“...अंततः... तुम भी... जानोगे... दर्द...”"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…우리가… 너희였다….",
						"english": "...We... were you...",
						"japanese": "「…我々が…お前たちだった…。」",
						"chinese": "“…我们…就是你们…”",
						"french": "« ...Nous... étions vous... »",
						"spanish": "« ...Nosotros... éramos vosotros... »",
						"vietnamese": "“...Chúng ta... đã từng là các ngươi...”",
						"thai": "“...พวกเรา...คือพวกเจ้า...”",
						"hindi": "“...हम... तुम थे...”"
					},
					"speaker": "boss"
				},
				{
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "…이겼지만… 이건… 승리가 아니야….",
						"english": "...We won... but this... isn't... a victory...",
						"japanese": "「…勝ったが…これは…勝利ではない…。」",
						"chinese": "“…我们赢了…但这…不是…胜利…”",
						"french": "« ...Nous avons gagné... mais ce n'est... pas... une victoire... »",
						"spanish": "« ...Hemos ganado... pero esto... no es... una victoria... »",
						"vietnamese": "“...Chúng ta đã thắng... nhưng đây... không phải... một chiến thắng...”",
						"thai": "“...เราชนะแล้ว...แต่...นี่ไม่ใช่...ชัยชนะ...”",
						"hindi": "“...जीत गए... पर यह... जीत... नहीं है...”"
					},
					"speaker": "character_any"
				},
				{
					"type": "direction",
					"duration_ms": 500,
					"speaker": "eira",
					"spot": [
						2,
						2
					],
					"action": "enter"
				},
				{
					"content": {
						"korean": "…멈췄을 뿐이야… 끝난 게 아냐… 이 설원 전체가… 여전히 그들의 절규로 가득해….",
						"english": "...It only stopped... It's not over... This entire snowfield... is still filled with their screams...",
						"japanese": "「…止まっただけだ…終わってない…この雪原全体が…未だ彼らの絶叫で満ちている…。」",
						"chinese": "“…只是停止了…还没结束…这整个雪原…依然充满着他们的哀嚎…”",
						"french": "« ...Ça s'est juste arrêté... Ce n'est pas fini... Cette étendue enneigée toute entière... est toujours remplie de leurs cris... »",
						"spanish": "« ...Solo se detuvo... No ha terminado... Todo este campo nevado... todavía está lleno de sus gritos... »",
						"vietnamese": "“...Chỉ là nó dừng lại thôi... Chưa kết thúc đâu... Toàn bộ cánh đồng tuyết này... vẫn tràn ngập tiếng gào thét của họ...”",
						"thai": "“...แค่มันหยุดแล้ว...ยังไม่จบหรอก...ลานหิมะทั้งหมดนี้...ยังคงเต็มไปด้วยเสียงกรีดร้องของพวกมัน...”",
						"hindi": "“...बस रुक गया है... ख़त्म नहीं हुआ... यह पूरा बर्फीला मैदान... अभी भी उनकी चीखों से भरा है...”"
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "eira"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "차가운 진실은 승리보다 더 깊은 상처를 남겼다.",
						"english": "The cold truth left deeper scars than victory.",
						"japanese": "冷たい真実は勝利よりも深い傷を残した。",
						"chinese": "冰冷的真相留下了比胜利更深的伤痕。",
						"french": "La froide vérité a laissé des cicatrices plus profondes que la victoire.",
						"spanish": "La fría verdad dejó cicatrices más profundas que la victoria.",
						"vietnamese": "Sự thật lạnh lùng để lại vết sẹo sâu hơn cả chiến thắng.",
						"thai": "ความจริงอันเยือกเย็นทิ้งรอยแผลเป็นที่ลึกกว่าชัยชนะ",
						"hindi": "कड़वी सच्चाई ने जीत से गहरे घाव दिए।"
					},
					"type": "speech",
					"emotion": "base"
				},
				{
					"content": {
						"korean": "과연 이 고통의 순환을 끊을 수 있을까. 혹은….",
						"english": "Can this cycle of pain truly be broken? Or...",
						"japanese": "果たしてこの苦痛の循環を断ち切れるのか。あるいは…。",
						"chinese": "真的能打破这痛苦的循环吗？或者……",
						"french": "Pouvons-nous vraiment briser ce cycle de douleur ? Ou...",
						"spanish": "¿Podemos realmente romper este ciclo de dolor? O...",
						"vietnamese": "Liệu vòng lặp đau khổ này có thể bị phá vỡ? Hay là...",
						"thai": "วงจรแห่งความเจ็บปวดนี้จะถูกทำลายได้จริงหรือ? หรือว่า...",
						"hindi": "क्या दर्द का यह चक्र तोड़ा जा सकता है? या..."
					},
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"content": {
						"korean": "얼음 탑의 핵이 마침내 그 끔찍한 진실을 드러냈다.",
						"english": "The core of the Ice Tower finally revealed its horrifying truth.",
						"japanese": "「氷の塔の核が、ついにその恐ろしい真実を現した。」",
						"chinese": "“冰塔之核终于揭示了其恐怖的真相。”",
						"french": "« Le cœur de la Tour de Glace révéla enfin son horrible vérité. »",
						"spanish": "El núcleo de la Torre de Hielo finalmente reveló su horrible verdad.",
						"vietnamese": "Lõi của Tháp Băng cuối cùng đã hé lộ sự thật kinh hoàng của nó.",
						"thai": "แกนกลางของหอคอยน้ำแข็งในที่สุดก็เผยความจริงอันน่าสะพรึงกลัวออกมา",
						"hindi": "बर्फीले टावर के केंद्र ने आखिरकार अपनी भयानक सच्चाई उजागर की।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"content": {
						"korean": "수많은 바이킹의 얼굴 형상이 뒤덮인 거대한 얼음 심장이 맥동했다.",
						"english": "A colossal ice heart, covered with countless Viking faces, pulsed.",
						"japanese": "「無数のヴァイキングの顔の形に覆われた巨大な氷の心臓が脈動していた。」",
						"chinese": "“一个覆盖着无数维京人面孔的巨大冰冷心脏正在搏动。”",
						"french": "« Un cœur de glace colossal, recouvert d'innombrables visages de Vikings, palpitait. »",
						"spanish": "Un colosal corazón de hielo, cubierto con innumerables rostros de vikingos, pulsaba.",
						"vietnamese": "Một trái tim băng khổng lồ, bao phủ bởi vô số hình dạng khuôn mặt Viking, đang đập.",
						"thai": "หัวใจน้ำแข็งขนาดมหึมาที่ถูกปกคลุมไปด้วยใบหน้าของชาวไวกิ้งนับไม่ถ้วนกำลังเต้นระรัว",
						"hindi": "अनगिनत वाइकिंग चेहरों से ढका एक विशाल बर्फीला दिल धड़क रहा था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"emotion": "base",
					"type": "speech",
					"content": {
						"korean": "…왔구나… 우리의 온기를 가져올 자….",
						"english": "…You've come… the one who will bring us warmth….",
						"japanese": "「…来たか…我々に温もりをもたらす者よ…。」",
						"chinese": "“…你来了…将为我们带来温暖之人…。”",
						"french": "« …Tu es venu… celui qui nous apportera la chaleur…. »",
						"spanish": "…Has venido… el que nos traerá calor….",
						"vietnamese": "…Ngươi đã đến… kẻ sẽ mang hơi ấm đến cho chúng ta….",
						"thai": "…เจ้ามาแล้ว… ผู้ที่จะนำความอบอุ่นมาให้เรา….",
						"hindi": "…तुम आ गए… जो हमें गर्माहट देगा…।"
					},
					"speaker": "boss"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "우리의 고통을 느껴라… 우리의 차가운 심장이 너희의 온기를 갈망한다…! 우리에게… 합류하라…!",
						"english": "Feel our pain… Our cold hearts crave your warmth…! Join us…!",
						"japanese": "「我々の苦痛を感じろ…我々の冷たい心臓がお前たちの温もりを渇望している…！我々に…加われ…！」",
						"chinese": "“感受我们的痛苦…我们冰冷的心渴望你们的温暖…！加入我们…！”",
						"french": "« Ressentez notre douleur… Nos cœurs froids désirent votre chaleur… ! Rejoignez-nous… ! »",
						"spanish": "¡Siente nuestro dolor… Nuestros fríos corazones anhelan tu calor…! ¡Únete a nosotros…!",
						"vietnamese": "Hãy cảm nhận nỗi đau của chúng ta… Trái tim lạnh lẽo của chúng ta khao khát hơi ấm của ngươi…! Hãy gia nhập chúng ta…!",
						"thai": "จงสัมผัสความเจ็บปวดของเรา… หัวใจอันเย็นชาของเราโหยหาความอบอุ่นของพวกเจ้า…! จงเข้าร่วมกับเรา…!",
						"hindi": "हमारा दर्द महसूस करो… हमारे ठंडे दिल तुम्हारी गर्माहट तरस रहे हैं…! हमसे… जुड़ जाओ…!"
					},
					"type": "speech",
					"emotion": "angry"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"content": {
						"korean": "이… 괴물 같은 것이….",
						"english": "This... monstrous thing...",
						"japanese": "「こ…この怪物め…。」",
						"chinese": "“这…这怪物…”",
						"french": "« Cette... chose monstrueuse... »",
						"spanish": "« Esta... cosa monstruosa... »",
						"vietnamese": "“Cái... thứ quái vật này...”",
						"thai": "“นี่...ไอ้เจ้าอสุรกาย...”",
						"hindi": "“यह... राक्षसी चीज़...”"
					},
					"speaker": "character_any"
				},
				{
					"action": "enter",
					"spot": [
						1,
						2
					],
					"speaker": "eira",
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"speaker": "eira",
					"emotion": "sad",
					"type": "speech",
					"content": {
						"korean": "이건… 연민과 공포… 저들이 바로… 그 환영이었어…!",
						"english": "This... pity and fear... They were... those illusions...!",
						"japanese": "「これは…憐憫と恐怖…あれらがまさしく…その幻影だったのか…！」",
						"chinese": "“这…怜悯和恐惧…他们就是…那些幻象…！”",
						"french": "« Ceci... pitié et peur... C'étaient... ces illusions...! »",
						"spanish": "« Esto... compasión y miedo... ¡Ellos eran... esas ilusiones...! »",
						"vietnamese": "“Đây là... lòng trắc ẩn và nỗi sợ... Chúng chính là... những ảo ảnh đó...!”",
						"thai": "“นี่...ความสงสารและความกลัว...พวกมันคือ...ภาพหลอนนั่นเอง...!”",
						"hindi": "“यह... दया और भय... वे ही थे... वे भ्रम...!”"
					}
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "희생자들이… 스스로 가해자가 되었어…!",
						"english": "The victims... became the perpetrators themselves...!",
						"japanese": "「犠牲者たちが…自ら加害者になったのか…！」",
						"chinese": "“受害者们…自己成为了加害者…！”",
						"french": "« Les victimes... sont devenues les bourreaux elles-mêmes...! »",
						"spanish": "« ¡Las víctimas... se convirtieron en los perpetradores...! »",
						"vietnamese": "“Các nạn nhân... đã tự biến mình thành kẻ gây án...!”",
						"thai": "“เหยื่อ...กลายเป็นผู้กระทำผิดเสียเอง...!”",
						"hindi": "“पीड़ित... स्वयं अपराधी बन गए...!”"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "우린 저들과 달라… 절대 합류하지 않아!",
						"english": "We're different from them... We'll never join them!",
						"japanese": "「我々は彼らとは違う…決して合流しない！」",
						"chinese": "“我们和他们不同…绝不会加入他们！”",
						"french": "« Nous sommes différents d'eux... Nous ne les rejoindrons jamais ! »",
						"spanish": "« Somos diferentes a ellos... ¡Nunca nos uniremos! »",
						"vietnamese": "“Chúng ta khác họ... Sẽ không bao giờ nhập bọn!”",
						"thai": "“เราไม่เหมือนพวกมัน...ไม่มีทางเข้าร่วมเด็ดขาด!”",
						"hindi": "“हम उनसे अलग हैं... हम कभी शामिल नहीं होंगे!”"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_1"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼음 심장에서 뻗어 나온 촉수들이 탐험대를 향해 맹렬히 휘감겼다.",
						"english": "Tentacles extending from the ice heart fiercely wrapped around the expedition team.",
						"japanese": "「氷の心臓から伸びた触手たちが、探検隊に猛烈に絡みついた。」",
						"chinese": "“从冰之心伸出的触手猛烈地缠绕着探险队。”",
						"french": "« Des tentacules s'étendant du cœur de glace s'enroulèrent férocement autour de l'équipe d'expédition. »",
						"spanish": "« Tentáculos que se extendían desde el corazón de hielo se envolvieron ferozmente alrededor del equipo de expedición. »",
						"vietnamese": "“Những xúc tu vươn ra từ trái tim băng giá đã quấn chặt lấy đội thám hiểm một cách dữ dội.”",
						"thai": "“หนวดที่ยื่นออกมาจากหัวใจน้ำแข็งพันรอบทีมสำรวจอย่างบ้าคลั่ง”",
						"hindi": "“बर्फ़ के दिल से निकले टेंटेकल्स ने अभियान दल को बेरहमी से घेर लिया।”"
					},
					"emotion": "base",
					"type": "speech"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"얼음 탑의 심장은 침묵했지만, 설원 전체의 절규는 여전했다.",
			"희생자가 곧 가해자라는 진실은 깊은 상처를 남겼고.",
			"온기를 지키려는 싸움은 끝났지만, 그 고통의 유산은 남았다.",
			"이것은 구원이었나, 침해였나. 차가운 눈발이 그 답을 삼켰다."
		],
		"english": [
			"The heart of the Ice Tower fell silent, yet the screams of the entire snowfield persisted.",
			"The truth that the victim was also the aggressor left deep wounds.",
			"The fight to preserve warmth ended, but the legacy of its pain remained.",
			"Was this salvation, or transgression? The cold snowflakes swallowed the answer."
		],
		"japanese": [
			"氷の塔の心臓は沈黙したが、雪原全体の叫びは依然として響いていた。",
			"犠牲者が加害者でもあるという真実は、深い傷を残した。",
			"温もりを守るための戦いは終わったが、その苦痛の遺産は残った。",
			"これは救済だったのか、それとも侵害だったのか。冷たい雪片がその答えを飲み込んだ。"
		],
		"chinese": [
			"冰塔之心归于沉寂，但整个雪原的哀嚎声依然不绝。",
			"牺牲者即是加害者的真相，留下了深刻的伤痕。",
			"守护温暖的战斗结束了，但痛苦的遗产却留了下来。",
			"这是救赎，还是侵犯？冰冷的雪花吞噬了答案。"
		],
		"french": [
			"Le cœur de la Tour de Glace se tut, mais les cris de l'étendue enneigée persistaient.",
			"La vérité selon laquelle la victime était aussi l'agresseur a laissé de profondes cicatrices.",
			"La lutte pour préserver la chaleur était terminée, mais l'héritage de sa douleur subsistait.",
			"Était-ce le salut ou la transgression ? Les flocons de neige froids ont avalé la réponse."
		],
		"spanish": [
			"El corazón de la Torre de Hielo enmudeció, pero los gritos de todo el campo de nieve persistieron.",
			"La verdad de que la víctima era también el agresor dejó profundas heridas.",
			"La lucha por preservar el calor terminó, pero el legado de su dolor permaneció.",
			"¿Fue esto salvación o transgresión? Los fríos copos de nieve se tragaron la respuesta."
		],
		"vietnamese": [
			"Trái tim Tháp Băng đã im lặng, nhưng tiếng thét của toàn bộ cánh đồng tuyết vẫn còn.",
			"Sự thật rằng nạn nhân cũng là kẻ gây án đã để lại những vết thương sâu sắc.",
			"Cuộc chiến để giữ lấy hơi ấm đã kết thúc, nhưng di sản của nỗi đau vẫn còn đó.",
			"Đây là sự cứu rỗi, hay sự xâm phạm? Những bông tuyết lạnh lẽo nuốt chửng câu trả lời."
		],
		"thai": [
			"ใจกลางหอคอยน้ำแข็งเงียบงัน แต่เสียงกรีดร้องของทุ่งหิมะทั้งหมดก็ยังคงอยู่",
			"ความจริงที่ว่าเหยื่อก็คือผู้กระทำทิ้งบาดแผลลึกไว้",
			"การต่อสู้เพื่อรักษาความอบอุ่นสิ้นสุดลง แต่การสืบทอดความเจ็บปวดนั้นยังคงอยู่",
			"นี่คือความรอด หรือการล่วงละเมิด? เกล็ดหิมะเย็นชาได้กลืนกินคำตอบ"
		],
		"hindi": [
			"बर्फ के टॉवर का दिल शांत हो गया, फिर भी पूरे बर्फीले मैदान की चीखें बनी रहीं।",
			"यह सच कि पीड़ित ही अपराधी था, गहरे घाव छोड़ गया।",
			"गर्मी को बचाने की लड़ाई खत्म हो गई, लेकिन उसके दर्द की विरासत बनी रही।",
			"क्या यह मुक्ति थी, या अतिक्रमण? ठंडी बर्फ़बारी ने जवाब निगल लिया।"
		]
	},
	"prologue": {
		"korean": [
			"얼음 탑의 심장부. 그곳엔 숨겨진 진실이 있었다.",
			"Eira의 환청은 절규가 되어 돌아왔고.",
			"희생자는 가해자가 되었다.",
			"차가운 연민, 혹은 공포. 끝없는 고통의 순환이 시작된다."
		],
		"english": [
			"The heart of the Ice Tower. A hidden truth lay there.",
			"Eira's hallucinations returned as screams.",
			"The victim became the aggressor.",
			"Cold pity, or fear. The endless cycle of pain begins."
		],
		"japanese": [
			"氷の塔の心臓部。そこには隠された真実があった。",
			"エイラの幻聴は叫びとなって戻ってきた。",
			"犠牲者は加害者となった。",
			"冷たい憐憫、あるいは恐怖。終わりのない苦痛の循環が始まる。"
		],
		"chinese": [
			"冰塔之心。那里隐藏着一个秘密。",
			"艾拉的幻听变成了尖叫声。",
			"受害者变成了施害者。",
			"冰冷的怜悯，亦或是恐惧。无尽的痛苦循环开始了。"
		],
		"french": [
			"Au cœur de la Tour de Glace. Une vérité cachée y résidait.",
			"Les hallucinations d'Eira sont revenues sous forme de cris.",
			"La victime est devenue l'agresseur.",
			"Pitié froide, ou peur. Le cycle sans fin de la douleur commence."
		],
		"spanish": [
			"En el corazón de la Torre de Hielo. Allí yacía una verdad oculta.",
			"Las alucinaciones de Eira regresaron como gritos.",
			"La víctima se convirtió en el agresor.",
			"Piedad fría, o miedo. El ciclo interminable de dolor comienza."
		],
		"vietnamese": [
			"Trái tim của Tháp Băng. Một sự thật ẩn giấu nằm ở đó.",
			"Ảo giác của Eira trở lại thành những tiếng thét.",
			"Nạn nhân trở thành kẻ gây án.",
			"Lòng trắc ẩn lạnh lẽo, hay nỗi sợ hãi. Vòng lặp đau khổ vô tận bắt đầu."
		],
		"thai": [
			"ใจกลางหอคอยน้ำแข็ง ความจริงที่ซ่อนอยู่ได้อยู่ที่นั่น",
			"ภาพหลอนของ Eira กลับมาเป็นเสียงกรีดร้อง",
			"เหยื่อกลายเป็นผู้กระทำ",
			"ความเมตตาอันเย็นชา หรือความกลัว วงจรแห่งความเจ็บปวดที่ไม่มีที่สิ้นสุดเริ่มต้นขึ้น"
		],
		"hindi": [
			"बर्फ के टॉवर का दिल। वहां एक छिपा हुआ सच था।",
			"ऐरा के मतिभ्रम चीखों में बदल गए।",
			"पीड़ित अपराधी बन गया।",
			"ठंडी दया, या डर। दर्द का अंतहीन चक्र शुरू होता है।"
		]
	}
} as const;
