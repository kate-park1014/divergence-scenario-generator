export const scenario_hell_doomthread_29_03 = {
	"scenario_id": "hell_doomthread_29_03",
	"order": 3,
	"act": "rising",
	"theme": "hell",
	"actors": {
		"vex": {
			"id": "mon_aa76550e-0b43-4273-a2f8-2463bdc9b848",
			"name": {
				"korean": "벡스",
				"english": "Vex",
				"japanese": "ベックス",
				"chinese": "维克斯",
				"french": "Vex",
				"spanish": "Vex",
				"vietnamese": "Vex",
				"thai": "เว็กซ์",
				"hindi": "वेक्स"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/6c55d5a5-0393-451b-d41f-fce1a4ee1700/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/2ea1ea45-9ca6-43b6-2c73-ed5ae7cdaf00/public"
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
						"korean": "회색빛 광장은 모든 소리를 삼켰다. 벽에는 낡은 유물들이 전시되어 있었다.",
						"english": "The grey plaza swallowed all sounds. Ancient relics were displayed on the walls.",
						"japanese": "灰色の広場は、あらゆる音を飲み込んだ。壁には古びた遺物が展示されていた。",
						"chinese": "灰色的广场吞噬了所有声音。墙壁上陈列着古老的遗物。",
						"french": "La place grise dévora tous les sons. D'anciens artefacts étaient exposés sur les murs.",
						"spanish": "La plaza gris engulló todos los sonidos. Reliquias antiguas estaban expuestas en las paredes.",
						"vietnamese": "Quảng trường xám nuốt chửng mọi âm thanh. Những di vật cổ xưa được trưng bày trên tường.",
						"thai": "จัตุรัสสีเทากลืนกินทุกเสียง ผนังมีโบราณวัตถุเก่าแก่จัดแสดงอยู่",
						"hindi": "धूसर चौक ने सभी ध्वनियों को निगल लिया। दीवारों पर प्राचीन अवशेष प्रदर्शित थे।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "여기가… 침묵하는 광장인가.",
						"english": "Is this... the Silent Plaza?",
						"japanese": "ここが…沈黙する広場なのか。",
						"chinese": "这里是…沉默的广场吗？",
						"french": "Est-ce… la Place Silencieuse ?",
						"spanish": "¿Es esta... la Plaza Silenciosa?",
						"vietnamese": "Đây là… Quảng trường Im Lặng sao.",
						"thai": "นี่คือ...จัตุรัสแห่งความเงียบงันงั้นหรือ",
						"hindi": "क्या यह... मौन चौक है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"speaker": "vex",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						3,
						2
					]
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "흐읍… 흐읍… 안 돼… 보지 마…",
						"english": "*gasp*... *gasp*... No... don't look...",
						"japanese": "うっ… うっ… だめだ… 見るな…",
						"chinese": "嘶…嘶…不…别看…",
						"french": "*halète*... *halète*... Non... ne regarde pas...",
						"spanish": "*jadeo*... *jadeo*... No... no mires...",
						"vietnamese": "Hức… hức… Không… đừng nhìn…",
						"thai": "ฮึ่ก... ฮึ่ก... ไม่นะ... อย่ามอง...",
						"hindi": "हाँफता... हाँफता... नहीं... मत देखो..."
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "Vex? 왜 그래?",
						"english": "Vex? What's wrong?",
						"japanese": "Vex？どうしたの？",
						"chinese": "Vex？你怎么了？",
						"french": "Vex ? Qu'est-ce qui ne va pas ?",
						"spanish": "¿Vex? ¿Qué te pasa?",
						"vietnamese": "Vex? Cậu sao vậy?",
						"thai": "Vex? เป็นอะไรไป?",
						"hindi": "वेक्स? क्या हुआ?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "저것들은… 예언자들이야… 시스템에 맞섰던…",
						"english": "Those are... the Prophets... those who defied the System...",
						"japanese": "あれらは…預言者たちだ…システムに抗った…",
						"chinese": "那些是…先知们…曾反抗系统的人…",
						"french": "Ce sont… les Prophètes… ceux qui ont défié le Système…",
						"spanish": "Esos son... los Profetas... los que desafiaron al Sistema...",
						"vietnamese": "Chúng là… những Tiên tri… những người đã chống lại Hệ thống…",
						"thai": "พวกนั้นคือ... เหล่าศาสดา... ผู้ที่ต่อต้านระบบ...",
						"hindi": "वे... पैगंबर हैं... जिन्होंने सिस्टम का विरोध किया था..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"content": {
						"korean": "단죄당한… 진실을 말하려던….",
						"english": "Condemned... for speaking the truth...",
						"japanese": "断罪された…真実を語ろうとした者たち…。",
						"chinese": "被审判的…那些试图说出真相的人…。",
						"french": "Condamnés… pour avoir voulu dire la vérité…",
						"spanish": "Condenados... por intentar decir la verdad...",
						"vietnamese": "Bị kết án… vì đã muốn nói ra sự thật…",
						"thai": "ผู้ถูกประณาม... ผู้ที่พยายามจะบอกความจริง...",
						"hindi": "निंदित... सत्य कहने का प्रयास करने वाले..."
					},
					"emotion": "sad",
					"speaker": "vex",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter",
					"speaker": "vex",
					"duration_ms": 500
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은… '운명'은 정해진 것이 아니라고 했어….",
						"english": "They said... 'fate' isn't set in stone...",
						"japanese": "彼らは…「運命」は決められたものではないと言った…。",
						"chinese": "他们说……“命运”并非注定……",
						"french": "Ils disaient que... le « destin » n'est pas gravé dans le marbre...",
						"spanish": "Dijeron que... el \"destino\" no está escrito...",
						"vietnamese": "Họ nói... \"số phận\" không phải là thứ đã được định sẵn...",
						"thai": "พวกเขาบอกว่า... \"โชคชะตา\" ไม่ได้ถูกกำหนดไว้แล้ว...",
						"hindi": "उन्होंने कहा... 'भाग्य' तय नहीं होता..."
					},
					"emotion": "sad",
					"speaker": "vex"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "시스템의 '운명 직조'가 거짓이라고?",
						"english": "The System's 'Fate Weaving' is a lie?",
						"japanese": "システムの「運命織り」が偽りだと？",
						"chinese": "系统的“命运编织”是假的？",
						"french": "La « Tapisserie du Destin » du Système est un mensonge ?",
						"spanish": "¿El \"Tejido del Destino\" del Sistema es una mentira?",
						"vietnamese": "\"Dệt Vận Mệnh\" của Hệ thống là dối trá ư?",
						"thai": "“การถักทอโชคชะตา” ของระบบเป็นเรื่องโกหกงั้นหรือ?",
						"hindi": "सिस्टम का 'भाग्य बुनाई' झूठा है?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "vex",
					"content": {
						"korean": "…쉬이잇… 그 단어를 말하면 안 돼….",
						"english": "...Shhh... Don't say that word...",
						"japanese": "…シーッ…その言葉を言ってはいけない…。",
						"chinese": "……嘘……别说那个词……",
						"french": "...Chut... Ne prononce pas ce mot...",
						"spanish": "...Shhh... No digas esa palabra...",
						"vietnamese": "...Suỵt... Đừng nói từ đó...",
						"thai": "...ชู่ว... ห้ามพูดคำนั้นนะ...",
						"hindi": "...श... वो शब्द मत कहो..."
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "Vex의 눈앞에 섬광의 실타래가 번뜩였다. 혼란스러운 기억의 파편이었다.",
						"english": "A shimmering tangle of threads flashed before Vex's eyes. Fragments of a confused memory.",
						"japanese": "Vexの目の前で、閃光の糸玉がきらめいた。それは混乱した記憶の断片だった。",
						"chinese": "闪光的线团在Vex眼前闪烁。那是混乱记忆的碎片。",
						"french": "Une pelote de fils scintillants scintilla devant les yeux de Vex. Des fragments d'un souvenir confus.",
						"spanish": "Un ovillo de hilos brillantes destelló ante los ojos de Vex. Eran fragmentos de un recuerdo confuso.",
						"vietnamese": "Một cuộn chỉ lấp lánh lóe lên trước mắt Vex. Đó là những mảnh ký ức hỗn loạn.",
						"thai": "ม้วนด้ายเรืองรองเปล่งประกายต่อหน้า Vex มันคือเศษเสี้ยวของความทรงจำที่สับสน",
						"hindi": "वैक्स की आँखों के सामने चमकते हुए धागों का एक गुच्छा चमका। यह भ्रमित याददाश्त के टुकड़े थे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "흐트러진… 실타래… 그게… 전부를 바꿀 수 있다고…",
						"english": "A tangled... thread... That... could change everything...",
						"japanese": "乱れた…糸玉…それが…全てを変えられると…。",
						"chinese": "散乱的……线团……那……能改变一切……",
						"french": "Un fil... emmêlé... Ça... pourrait tout changer...",
						"spanish": "Un... ovillo... desordenado... Eso... podría cambiarlo todo...",
						"vietnamese": "Một cuộn chỉ... rối rắm... Điều đó... có thể thay đổi tất cả...",
						"thai": "ด้ายที่พันกัน... มัน... สามารถเปลี่ยนทุกอย่างได้...",
						"hindi": "उलझा हुआ... धागा... वह... सब कुछ बदल सकता है..."
					},
					"emotion": "sad"
				}
			]
		},
		{
			"dialogue": [
				{
					"speaker": "vex",
					"action": "enter",
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"type": "direction"
				},
				{
					"type": "speech",
					"content": {
						"korean": "그들은… 과거를 기록하려 했어… 시스템이 지운 진실을…",
						"english": "They tried to... record the past... the truth the System erased...",
						"japanese": "彼らは…過去を記録しようとした…システムが消し去った真実を…。",
						"chinese": "他们试图……记录过去……系统抹去的真相……",
						"french": "Ils ont essayé de... consigner le passé... la vérité que le Système avait effacée...",
						"spanish": "Intentaron... registrar el pasado... la verdad que el Sistema borró...",
						"vietnamese": "Họ đã cố gắng... ghi lại quá khứ... sự thật mà Hệ thống đã xóa bỏ...",
						"thai": "พวกเขาพยายาม... บันทึกอดีต... ความจริงที่ระบบลบไปแล้ว...",
						"hindi": "उन्होंने... अतीत को दर्ज करने की कोशिश की... उस सच को जो सिस्टम ने मिटा दिया था..."
					},
					"emotion": "sad",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "지워진 기록? 왜?",
						"english": "Erased records? Why?",
						"japanese": "消された記録？なぜ？",
						"chinese": "被抹去的记录？为什么？",
						"french": "Des archives effacées ? Pourquoi ?",
						"spanish": "¿Registros borrados? ¿Por qué?",
						"vietnamese": "Hồ sơ bị xóa? Tại sao?",
						"thai": "บันทึกที่ถูกลบ? ทำไม?",
						"hindi": "मिटाए गए रिकॉर्ड? क्यों?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "운명의 직조… 완벽하다고… 그래야만 한다고….",
						"english": "The Weaving of Fate... it's perfect... it has to be...",
						"japanese": "運命の織り…完璧だと…そうでなければならないと…。",
						"chinese": "命运的编织……是完美的……必须如此……",
						"french": "La Tapisserie du Destin... elle est parfaite... elle doit l'être...",
						"spanish": "El Tejido del Destino... es perfecto... debe serlo...",
						"vietnamese": "Dệt Vận Mệnh... nó hoàn hảo... phải vậy...",
						"thai": "การถักทอโชคชะตา... มันสมบูรณ์แบบ... มันต้องเป็นเช่นนั้น...",
						"hindi": "भाग्य की बुनाई... यह परिपूर्ण है... ऐसा ही होना चाहिए..."
					},
					"emotion": "angry",
					"speaker": "vex"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "Vex는 유물 앞에서 몸을 떨었다. 고통스러운 기억이 몰려오는 듯했다.",
						"english": "Vex trembled before the artifact. Painful memories seemed to flood back.",
						"japanese": "Vexは遺物の前で身震いした。苦痛な記憶が押し寄せるようだった。",
						"chinese": "Vex在遗物前颤抖。痛苦的记忆似乎汹涌而至。",
						"french": "Vex trembla devant l'artefact. Des souvenirs douloureux semblaient l'envahir.",
						"spanish": "Vex tembló ante el artefacto. Los recuerdos dolorosos parecían inundarla.",
						"vietnamese": "Vex run rẩy trước cổ vật. Những ký ức đau khổ dường như ùa về.",
						"thai": "Vex ตัวสั่นสะท้านต่อหน้าวัตถุโบราณ ความทรงจำอันเจ็บปวดดูเหมือนจะไหลทะลักกลับมา",
						"hindi": "वैक्स कलाकृति के सामने काँप उठी। दर्दनाक यादें उमड़ती हुई लग रही थीं।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "vex",
					"content": {
						"korean": "그들은… 실패하지 않았어… 다만… 침묵당했을 뿐…",
						"english": "They didn't... fail... they were just... silenced...",
						"japanese": "彼らは…失敗しなかった…ただ…沈黙させられただけ…。",
						"chinese": "他们……没有失败……只是……被噤声了……",
						"french": "Ils n'ont pas... échoué... ils ont juste été... réduits au silence...",
						"spanish": "No... fracasaron... simplemente... fueron silenciados...",
						"vietnamese": "Họ không... thất bại... họ chỉ bị... bịt miệng mà thôi...",
						"thai": "พวกเขาไม่ได้... ล้มเหลว... แค่... ถูกทำให้เงียบไปเท่านั้น...",
						"hindi": "वे... असफल नहीं हुए... बस... चुप करा दिए गए..."
					},
					"emotion": "sad"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"duration_ms": 500,
					"speaker": "vex",
					"action": "enter",
					"spot": [
						3,
						2
					],
					"type": "direction"
				},
				{
					"content": {
						"korean": "더 깊이 가지 마… 그들은… 너희도 똑같이 만들 거야…",
						"english": "Don't go deeper... They... will make you just like them...",
						"japanese": "深く入るな… 彼らは… お前たちも同じにするだろう…",
						"chinese": "别再深入了… 他们会… 把你们也变成他们那样…",
						"french": "Ne va pas plus profond… Ils… vous feront devenir comme eux…",
						"spanish": "No vayas más profundo… Ellos… te harán igual que ellos…",
						"vietnamese": "Đừng đi sâu hơn… Chúng… sẽ biến các ngươi thành ra giống chúng thôi…",
						"thai": "อย่าไปลึกกว่านี้… พวกเขา… จะทำให้พวกเจ้าเหมือนกัน…",
						"hindi": "और गहरे मत जाओ… वे… तुम्हें भी वैसा ही बना देंगे…"
					},
					"emotion": "sad",
					"speaker": "vex",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "돌아갈 수 없어. 진실을 봐야 해.",
						"english": "There's no turning back. You must see the truth.",
						"japanese": "もう引き返せない。真実を見なければならない。",
						"chinese": "无法回头了。你必须面对真相。",
						"french": "On ne peut plus revenir en arrière. Tu dois voir la vérité.",
						"spanish": "No hay vuelta atrás. Debes ver la verdad.",
						"vietnamese": "Không thể quay lại. Phải đối mặt với sự thật.",
						"thai": "ไม่มีทางย้อนกลับ เจ้าต้องเห็นความจริง",
						"hindi": "वापस नहीं जा सकते। तुम्हें सच देखना होगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "흐트러진 실타래가… 그게… 전부를 바꿀 열쇠일 거야….",
						"english": "The tangled thread... that... will be the key to change everything...",
						"japanese": "乱れた糸玉が… それが… 全てを変える鍵となるだろう…。",
						"chinese": "那一团乱麻… 它… 会是改变一切的钥匙…。",
						"french": "L'écheveau emmêlé… ce sera… la clé pour tout changer…",
						"spanish": "El ovillo enredado… esa… será la clave para cambiarlo todo…",
						"vietnamese": "Cuộn chỉ rối… đó… sẽ là chìa khóa thay đổi mọi thứ…",
						"thai": "เส้นด้ายที่พันกันยุ่งเหยิง… นั่น… จะเป็นกุญแจไขไปสู่การเปลี่ยนแปลงทุกสิ่ง…",
						"hindi": "उलझा हुआ धागा… वही… सब कुछ बदलने की कुंजी होगा…"
					},
					"emotion": "sad",
					"speaker": "vex",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "흐트러진 실타래….",
						"english": "The tangled thread...",
						"japanese": "乱れた糸玉…。",
						"chinese": "乱麻…",
						"french": "L'écheveau emmêlé…",
						"spanish": "El ovillo enredado…",
						"vietnamese": "Cuộn chỉ rối…",
						"thai": "เส้นด้ายที่พันกันยุ่งเหยิง…",
						"hindi": "उलझा हुआ धागा…"
					},
					"emotion": "base",
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"content": {
						"korean": "광장은 더욱 깊은 침묵 속으로 잠겨들었다. 돌이킬 수 없는 길이었다.",
						"english": "The plaza sank into deeper silence. It was an irreversible path.",
						"japanese": "広場はさらに深い沈黙に包まれた。それは引き返せない道だった。",
						"chinese": "广场陷入了更深的沉默。这是一条无法回头的路。",
						"french": "La place s'enfonça dans un silence plus profond. C'était un chemin irréversible.",
						"spanish": "La plaza se sumió en un silencio más profundo. Era un camino sin retorno.",
						"vietnamese": "Quảng trường chìm sâu hơn vào im lặng. Đó là một con đường không thể quay lại.",
						"thai": "ลานกว้างจมดิ่งลงสู่ความเงียบงันที่ลึกซึ้งยิ่งขึ้น มันคือเส้นทางที่ไม่อาจย้อนกลับ",
						"hindi": "चौक और गहरी खामोशी में डूब गया। यह एक ऐसा रास्ता था जिससे वापस नहीं आया जा सकता था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "크으윽… 흐트러진 실타래… 네놈이… 건드린 게 아니었나…",
						"english": "Ugh... The tangled thread... Was it not you... who touched it...?",
						"japanese": "くぅっ… 乱れた糸玉… 貴様が… 触れたのではなかったか…",
						"chinese": "呃啊… 那团乱麻… 难道是你… 碰了它吗…",
						"french": "Ugh… L'écheveau emmêlé… N'était-ce pas toi… qui l'as touché…?",
						"spanish": "Ugh… El ovillo enredado… ¿No fuiste tú… quien lo tocó…?",
						"vietnamese": "Khụ… Cuộn chỉ rối… Không lẽ ngươi… đã chạm vào nó sao…?",
						"thai": "อึก… เส้นด้ายที่พันกันยุ่งเหยิง… เจ้า… เป็นคนแตะต้องมันไม่ใช่รึไง…",
						"hindi": "उफ्फ… उलझा हुआ धागा… क्या तुम ही नहीं थे… जिसने इसे छुआ था…?"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "뭐라고? 흐트러진 실타래?",
						"english": "What? Tangled Threads?",
						"japanese": "「何だと？絡み合った糸？」",
						"chinese": "“什么？缠绕的线团？”",
						"french": "“Quoi ? Des fils emmêlés ?”",
						"spanish": "¿Qué? ¿Hilos enredados?",
						"vietnamese": "“Cái gì? Mớ chỉ rối sao?”",
						"thai": "อะไรนะ? ด้ายที่พันกันยุ่งเหยิง?",
						"hindi": "क्या? उलझे हुए धागे?"
					},
					"emotion": "base"
				},
				{
					"speaker": "narrator",
					"content": {
						"korean": "그림자는 사라졌지만, '흐트러진 실타래'라는 단어는 선명하게 남았다.",
						"english": "The shadow vanished, but the words 'Tangled Threads' remained vivid.",
						"japanese": "「影は消えたが、「絡み合った糸」という言葉は鮮明に残った。」",
						"chinese": "“影子消失了，但‘缠绕的线团’这个词却清晰地留了下来。”",
						"french": "“L'ombre s'est dissipée, mais les mots 'Fils Emmêlés' sont restés gravés.”",
						"spanish": "La sombra desapareció, pero las palabras 'Hilos Enredados' permanecieron vívidas.",
						"vietnamese": "“Bóng tối tan biến, nhưng cụm từ 'Mớ chỉ rối' vẫn hiện rõ.”",
						"thai": "เงาหายไปแล้ว แต่คำว่า 'ด้ายที่พันกันยุ่งเหยิง' ยังคงชัดเจน",
						"hindi": "परछाई गायब हो गई, लेकिन 'उलझे हुए धागे' शब्द स्पष्ट रूप से बने रहे।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"content": {
						"korean": "시스템의 균열은 더 깊어지고 있었다. 다음 진실은 어디에 있을까.",
						"english": "The system's rift deepened. Where does the next truth lie?",
						"japanese": "「システムの亀裂はさらに深まっていた。次の真実はどこにあるのか。」",
						"chinese": "“系统的裂痕越来越深。下一个真相会在哪里？”",
						"french": "“La faille du système s'approfondissait. Où se cache la prochaine vérité ?”",
						"spanish": "La grieta del sistema se hizo más profunda. ¿Dónde yace la próxima verdad?",
						"vietnamese": "“Vết nứt của hệ thống ngày càng sâu. Sự thật tiếp theo nằm ở đâu?”",
						"thai": "รอยแยกของระบบลึกขึ้นเรื่อยๆ ความจริงต่อไปอยู่ที่ไหน?",
						"hindi": "सिस्टम में दरार गहरी होती जा रही थी। अगला सच कहाँ है?"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"content": {
						"korean": "광장 끝, 거대한 그림자가 나타났다. 침묵을 지키는 존재였다.",
						"english": "At the end of the plaza, a colossal shadow appeared. It was a silent guardian.",
						"japanese": "広場の端に、巨大な影が現れた。それは沈黙を守る存在だった。",
						"chinese": "广场尽头，一道巨大的身影出现。那是沉默的守护者。",
						"french": "Au bout de la place, une ombre colossale apparut. C'était une sentinelle silencieuse.",
						"spanish": "Al final de la plaza, una sombra colosal apareció. Era un guardián silencioso.",
						"vietnamese": "Cuối quảng trường, một cái bóng khổng lồ xuất hiện. Đó là một thực thể giữ im lặng.",
						"thai": "สุดปลายลานกว้าง เงาขนาดมหึมาปรากฏขึ้น มันคือผู้พิทักษ์ความเงียบ",
						"hindi": "चौक के अंत में, एक विशाल छाया प्रकट हुई। वह एक मौन संरक्षक था।"
					},
					"emotion": "base",
					"speaker": "narrator"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "이곳은 침묵의 광장. '운명'에 반기를 든 자들을 단죄하는 곳.",
						"english": "This is the Plaza of Silence. A place to condemn those who defied 'Fate'.",
						"japanese": "ここは沈黙の広場。「運命」に反旗を翻した者たちを断罪する場所。",
						"chinese": "这里是沉默广场。一个审判那些反抗“命运”之人",
						"french": "Ceci est la Place du Silence. Un lieu pour condamner ceux qui ont défié le « Destin ».",
						"spanish": "Esta es la Plaza del Silencio. Un lugar para condenar a aquellos que desafiaron al 'Destino'.",
						"vietnamese": "Đây là Quảng trường Im Lặng. Nơi để trừng phạt những kẻ dám chống lại 'Vận Mệnh'.",
						"thai": "ที่นี่คือลานแห่งความเงียบ สถานที่ตัดสินลงโทษผู้ที่ขัดขืน 'โชคชะตา'",
						"hindi": "यह मौन का चौक है। 'भाग्य' का विरोध करने वालों को दंडित करने का स्थान।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "너희도… 똑같이 될 것이다.",
						"english": "You too... will become the same.",
						"japanese": "お前たちも… 同じになるだろう。",
						"chinese": "你们也… 会变成一样。",
						"french": "Vous aussi… vous deviendrez pareil.",
						"spanish": "Vosotros también… os volveréis igual.",
						"vietnamese": "Các ngươi cũng… sẽ trở thành như vậy thôi.",
						"thai": "เจ้าเองก็… จะเป็นเหมือนกัน",
						"hindi": "तुम भी… वैसे ही हो जाओगे।"
					},
					"emotion": "angry",
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "시스템의 거짓된 운명은 더 이상 통하지 않아.",
						"english": "The system's false fate no longer holds sway.",
						"japanese": "システムの偽りの運命は、もはや通用しない。",
						"chinese": "系统的虚假命运，再也行不通了。",
						"french": "Le faux destin du système n'a plus cours.",
						"spanish": "El falso destino del sistema ya no tiene efecto.",
						"vietnamese": "Vận mệnh giả dối của hệ thống không còn tác dụng nữa.",
						"thai": "โชคชะตาจอมปลอมของระบบจะใช้ไม่ได้อีกต่อไป",
						"hindi": "सिस्टम का झूठा भाग्य अब और नहीं चलेगा।"
					},
					"emotion": "angry"
				}
			],
			"lose_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "거대한 그림자는 망자들을 다시 침묵시켰다.",
						"english": "The colossal shadow silenced the departed once more.",
						"japanese": "「巨大な影は、亡者たちを再び沈黙させた。」",
						"chinese": "“巨大的影子再次让亡者们陷入沉默。”",
						"french": "“L'ombre colossale réduisit de nouveau les morts au silence.”",
						"spanish": "La sombra colosal silenció a los muertos una vez más.",
						"vietnamese": "“Bóng tối khổng lồ lại một lần nữa khiến những người đã khuất im lặng.”",
						"thai": "เงามหึมาทำให้ผู้ตายเงียบลงอีกครั้ง",
						"hindi": "विशाल परछाई ने मृतकों को फिर से चुप करा दिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "'운명'을 거스르지 마라… 무의미한 저항일 뿐.",
						"english": "Do not defy 'fate'... It's futile resistance.",
						"japanese": "「「運命」に逆らうな…無意味な抵抗に過ぎない。」",
						"chinese": "“不要违抗‘命运’……那只是徒劳的抵抗。”",
						"french": "“Ne défie pas le 'destin'... Ce n'est qu'une résistance futile.”",
						"spanish": "No desafíes al 'destino'... Es una resistencia inútil.",
						"vietnamese": "“Đừng chống lại 'số phận'... Đó chỉ là sự kháng cự vô ích.”",
						"thai": "อย่าท้าทาย 'โชคชะตา'... มันคือการต่อต้านที่ไร้ประโยชน์",
						"hindi": "'भाग्य' का उल्लंघन मत करो... यह व्यर्थ का प्रतिरोध है।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 포기하지 않아.",
						"english": "It's not over yet... I won't give up.",
						"japanese": "「まだ…終わってない。諦めない。」",
						"chinese": "“还没……结束。我不会放弃。”",
						"french": "“Ce n'est pas encore fini... Je n'abandonnerai pas.”",
						"spanish": "Todavía... no ha terminado. No me rendiré.",
						"vietnamese": "“Vẫn... chưa kết thúc. Tôi sẽ không bỏ cuộc.”",
						"thai": "ยัง...ไม่จบ ฉันจะไม่ยอมแพ้",
						"hindi": "अभी...खत्म नहीं हुआ है। मैं हार नहीं मानूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"침묵하는 광장. 한때 진실을 외치던 이들의 흔적이 박제된 곳.",
			"광기는 두려움을 낳고, 두려움은 침묵을 강요한다.",
			"하지만 파편화된 기억 속에는 - 시스템이 감추려던 진실이 숨어 있었다.",
			"그리고 그 진실은, 우리를 더 깊은 절망으로 이끌었다."
		],
		"english": [
			"The Silent Plaza. Where the echoes of truth-speakers are preserved.",
			"Madness breeds fear, and fear demands silence.",
			"But within fragmented memories - the truth the System sought to hide was concealed.",
			"And that truth led us to deeper despair."
		],
		"japanese": [
			"沈黙の広場。かつて真実を叫んだ者たちの痕跡が刻まれた場所。",
			"狂気は恐怖を生み、恐怖は沈黙を強いる。",
			"しかし、断片化された記憶の中には――システムが隠蔽しようとした真実が潜んでいた。",
			"そしてその真実は、私たちをより深い絶望へと導いた。"
		],
		"chinese": [
			"沉默的广场。昔日呼唤真理者们的痕迹被定格于此。",
			"疯狂滋生恐惧，恐惧强加沉默。",
			"然而在支离破碎的记忆中——系统试图掩盖的真相隐匿其间。",
			"而那个真相，将我们引向更深的绝望。"
		],
		"french": [
			"La Place Silencieuse. Où les traces de ceux qui criaient la vérité sont figées.",
			"La folie engendre la peur, et la peur impose le silence.",
			"Mais au cœur des souvenirs fragmentés – la vérité que le Système cherchait à cacher était dissimulée.",
			"Et cette vérité nous a menés à un désespoir encore plus profond."
		],
		"spanish": [
			"La Plaza Silenciosa. Donde las huellas de quienes clamaron la verdad están petrificadas.",
			"La locura engendra el miedo, y el miedo impone el silencio.",
			"Pero dentro de los recuerdos fragmentados —la verdad que el Sistema intentaba ocultar estaba escondida.",
			"Y esa verdad nos llevó a una desesperación aún más profunda."
		],
		"vietnamese": [
			"Quảng trường Im Lặng. Nơi dấu vết của những kẻ từng cất tiếng nói sự thật bị lưu giữ.",
			"Sự điên rồ sinh ra nỗi sợ, và nỗi sợ buộc phải im lặng.",
			"Nhưng trong những ký ức vụn vỡ — sự thật mà Hệ thống cố che giấu đã ẩn mình.",
			"Và sự thật đó, đã đẩy chúng ta vào vực sâu tuyệt vọng hơn."
		],
		"thai": [
			"จัตุรัสแห่งความเงียบงัน ที่ซึ่งร่องรอยของผู้ที่เคยประกาศสัจธรรมถูกเก็บรักษาไว้",
			"ความบ้าคลั่งก่อให้เกิดความกลัว และความกลัวบังคับให้ต้องเงียบงัน",
			"แต่ภายในความทรงจำที่แตกร้าว—ความจริงที่ระบบพยายามปกปิดได้ซ่อนอยู่",
			"และความจริงนั้น ได้นำพาเราไปสู่ความสิ้นหวังที่ลึกซึ้งยิ่งขึ้น"
		],
		"hindi": [
			"मौन चौक। जहाँ कभी सत्य का उद्घोष करने वालों के पदचिन्ह संरक्षित हैं।",
			"उन्माद भय को जन्म देता है, और भय खामोशी थोपता है।",
			"परन्तु खंडित स्मृतियों के भीतर — वह सत्य छिपा था जिसे सिस्टम छिपाना चाहता था।",
			"और वह सत्य, हमें और गहरे निराशा में ले गया।"
		]
	}
} as const;
